#!/usr/bin/env python3
"""Recalculate the supplied directory study offline, using Python's standard library.

No network requests or source mutations. The original extracted inputs are local
research artifacts, not distributed with the skill. See reports/research-v2.md.
"""
import argparse
import csv
import hashlib
import json
from collections import Counter, defaultdict
from pathlib import Path
from statistics import mean
from urllib.parse import urldefrag, urlsplit

SHELL_MARKERS = (
    "requires javascript", "javascript is disabled", "enable javascript",
    "checking your browser", "access denied", "forbidden", "just a moment",
    "page not found", "404 not found", "verify you are human",
    "if you are not redirected",
)


def target(url):
    # Deliberately retain query, slash, case and scheme differences.
    return urldefrag(url)[0]


def host(url):
    return (urlsplit(url).hostname or "").lower()


def digest_file(path):
    digest = hashlib.sha256()
    with path.open("rb") as source:
        for block in iter(lambda: source.read(1024 * 1024), b""):
            digest.update(block)
    return digest.hexdigest()


def screening_flags(row):
    snapshot = row.get("snapshot") or {}
    h1 = next((h.get("text", "") for h in snapshot.get("headings", []) if h.get("level") == 1), "")
    lead = " ".join((row.get("liveTitle", ""), h1)).lower()
    flags = []
    if any(marker in lead for marker in SHELL_MARKERS):
        flags.append("shell_or_error_text")
    if sum(1 for token in h1.split() if len(token) == 1) >= 5 or any(x in h1 for x in ("{", "}", "var(--", "#000000", "<div", "</")):
        flags.append("suspect_heading_text")
    if row.get("crawlError"):
        flags.append("transport_or_body_error")
    return flags


def legacy_class(row):
    kind = row.get("evidenceLevel", "directory-only")
    if kind == "server-html-structure" and any(f != "transport_or_body_error" for f in screening_flags(row)):
        return "thin-or-shell"
    return kind


def live_analysis(rows):
    raw = Counter(r.get("evidenceLevel", "directory-only") for r in rows)
    legacy = Counter(legacy_class(r) for r in rows)
    structural = [r for r in rows if legacy_class(r) == "server-html-structure"]
    candidates = [r for r in structural if 200 <= int(r.get("httpStatus") or 0) < 300 and not screening_flags(r)]
    unique = {}
    for row in sorted(candidates, key=lambda r: r["id"]):
        unique.setdefault(target(row["url"]), row)
    candidates = list(unique.values())
    by_host = defaultdict(list)
    for row in candidates:
        by_host[host(row["url"])].append(row)
    # The stored list contains only the first 16 h1/h2/h3 items; tagCounts is
    # therefore used for element presence, not the truncated heading-text list.
    features = {
        "h1_tag": lambda s: s.get("tagCounts", {}).get("h1", 0) > 0,
        "h1_in_saved_headings": lambda s: any(h.get("level") == 1 for h in s.get("headings", [])),
        "nav_tag": lambda s: s.get("tagCounts", {}).get("nav", 0) > 0,
        "main_tag": lambda s: bool(s.get("landmarks", {}).get("main")),
        "aria_label": lambda s: s.get("ariaLabelCount", 0) > 0,
        "image_tag": lambda s: s.get("imageCount", 0) > 0,
        "form_tag": lambda s: s.get("tagCounts", {}).get("form", 0) > 0,
    }
    feature_stats = {}
    for name, fn in features.items():
        count = sum(bool(fn(r.get("snapshot") or {})) for r in candidates)
        host_rates = [mean(bool(fn(r.get("snapshot") or {})) for r in group) for group in by_host.values()]
        feature_stats[name] = {"targets": count, "target_rate": count / len(candidates) if candidates else None,
                               "mean_of_within_host_rates": mean(host_rates) if host_rates else None}
    signatures = Counter()
    for row in candidates:
        s = row.get("snapshot") or {}
        signature = {"title": s.get("title"), "headings": s.get("headings"), "navigation": s.get("navigation"), "tagCounts": s.get("tagCounts")}
        signatures[json.dumps(signature, sort_keys=True, ensure_ascii=False)] += 1
    status = Counter(str(r.get("httpStatus") or 0) for r in rows)
    flag_counts = Counter(f for r in rows if r.get("evidenceLevel") == "server-html-structure" for f in screening_flags(r))
    final_targets = Counter(target(r.get("finalURL") or r["url"]) for r in candidates)
    h1_underreported = [r for r in structural if (r.get("snapshot") or {}).get("tagCounts", {}).get("h1", 0) > 0 and not any(h.get("level") == 1 for h in (r.get("snapshot") or {}).get("headings", []))]
    return {
        "records": len(rows), "unique_input_targets": len({target(r["url"]) for r in rows}),
        "unique_ids": len({r["id"] for r in rows}),
        "input_hosts": len({host(r["url"]) for r in rows}),
        "statuses": dict(sorted(status.items())),
        "robots_allowed": sum(r.get("robotsAllowed") is True for r in rows),
        "http_responses": sum(bool(r.get("httpStatus")) for r in rows),
        "raw_evidence_classes": dict(raw), "legacy_screened_classes": dict(legacy),
        "structural_record_flags": dict(flag_counts),
        "candidate_records_before_target_dedup": sum(legacy_class(r) == "server-html-structure" and 200 <= int(r.get("httpStatus") or 0) < 300 and not screening_flags(r) for r in rows),
        "candidate_targets": len(candidates), "candidate_hosts": len(by_host),
        "candidate_final_targets": len(final_targets),
        "candidate_snapshot_signatures": len(signatures),
        "candidate_repeated_snapshot_groups": sum(n > 1 for n in signatures.values()),
        "candidate_records_in_repeated_snapshot_groups": sum(n for n in signatures.values() if n > 1),
        "candidate_top_hosts": Counter({h: len(group) for h, group in by_host.items()}).most_common(12),
        "features": feature_stats,
        "legacy_structural_h1_tag_present": sum((r.get("snapshot") or {}).get("tagCounts", {}).get("h1", 0) > 0 for r in structural),
        "legacy_structural_h1_text_present": sum(any(h.get("level") == 1 for h in (r.get("snapshot") or {}).get("headings", [])) for r in structural),
        "legacy_structural_h1_text_tag_disagreements": len(h1_underreported),
        "h1_disagreements_with_heading_list_at_16": sum(len(r["snapshot"].get("headings", [])) == 16 for r in h1_underreported),
        "h1_disagreement_examples": [{"id": r["id"], "url": r["url"], "saved_heading_count": len(r["snapshot"]["headings"]), "h1_tags": r["snapshot"]["tagCounts"]["h1"]} for r in h1_underreported[:5]],
        "saved_heading_list_at_16": sum(len((r.get("snapshot") or {}).get("headings", [])) == 16 for r in structural),
        "saved_navigation_list_at_12": sum(len((r.get("snapshot") or {}).get("navigation", [])) == 12 for r in structural),
        "saved_action_list_at_18": sum(len((r.get("snapshot") or {}).get("actions", [])) == 18 for r in structural),
        "legacy_structural_image_elements": sum((r.get("snapshot") or {}).get("imageCount", 0) for r in structural),
        "legacy_structural_nonempty_alt": sum((r.get("snapshot") or {}).get("imagesWithAlt", 0) for r in structural),
        "snapshot_dates": [min((r.get("fetchedAt", "") for r in rows), default=""), max((r.get("fetchedAt", "") for r in rows), default="")],
    }


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--corpus", type=Path, required=True, help="Original work/website-research directory")
    parser.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()
    root = args.corpus.resolve()
    inputs = ["directory-entries.json", "live-observations.json", "additional-5000/directory-entries.json", "additional-5000/live-observations.json", "volume3/directory-entries.json", "volume3/live-observations.json", "master-million/directory-entries.tsv", "master-million/live-observations.jsonl"]
    missing = [name for name in inputs if not (root / name).is_file()]
    if missing:
        parser.error("Missing required inputs: " + ", ".join(missing))
    earlier_entries, earlier_live, volume_stats = [], [], {}
    for label, prefix in [("volume_1", ""), ("volume_2", "additional-5000/"), ("volume_3", "volume3/")]:
        entries = json.loads((root / (prefix + "directory-entries.json")).read_text())
        observations = json.loads((root / (prefix + "live-observations.json")).read_text())
        source = {e["id"]: e["url"] for e in entries}
        if len(source) != len(entries) or len({o["id"] for o in observations}) != len(observations):
            raise ValueError(f"Duplicate IDs in {label}")
        if set(source) != {o["id"] for o in observations} or any(source[o["id"]] != o["url"] for o in observations):
            raise ValueError(f"Entry/observation ID or URL alignment mismatch in {label}")
        earlier_entries.extend(entries)
        earlier_live.extend(observations)
        volume_stats[label] = {"rows": len(entries), "hosts": len({host(e["url"]) for e in entries}), "live": live_analysis(observations)}
    master_live = [json.loads(line) for line in (root / "master-million/live-observations.jsonl").read_text().splitlines() if line.strip()]
    if len({r["id"] for r in master_live}) != len(master_live):
        raise ValueError("Duplicate observation IDs in master log")
    observed_by_id = {r["id"]: r for r in master_live}
    master_urls, master_targets = set(), set()
    hosts, sections, tags = Counter(), {}, Counter()
    path_sets = defaultdict(set)
    id_seen = 0
    for number, page, tag_string, url in csv.reader((root / "master-million/directory-entries.tsv").open(), delimiter="\t"):
        number = int(number)
        id_seen += 1
        if number != id_seen:
            raise ValueError("Master IDs are not sequential")
        if number in observed_by_id and target(observed_by_id[number]["url"]) != target(url):
            raise ValueError(f"Master URL/ID mismatch at {number}")
        part = urlsplit(url)
        hostname = host(url)
        section = (number - 1) // 250000 + 1
        s = sections.setdefault(section, {"rows": 0, "hosts": Counter(), "targets": set()})
        s["rows"] += 1
        s["hosts"][hostname] += 1
        s["targets"].add(target(url))
        hosts[hostname] += 1
        tags.update(tag_string.split("|"))
        master_urls.add(url)
        master_targets.add(target(url))
        path_sets[(section, hostname)].add(part.path)
    if any(i < 1 or i > id_seen for i in observed_by_id):
        raise ValueError("Observation ID outside the master source")
    groups = defaultdict(list)
    for (section, hostname), paths in path_sets.items():
        signature = hashlib.sha256("\n".join(sorted(paths)).encode()).hexdigest()
        groups[(section, len(paths), signature)].append(hostname)
    repeated = [{"section": key[0], "paths_per_host": key[1], "hosts": sorted(group), "distinct_host_path_pairs": key[1] * len(group), "path_set_sha256": key[2]}
                for key, group in groups.items() if len(group) > 1]
    earlier_urls = {e["url"] for e in earlier_entries}
    earlier_targets = {target(u) for u in earlier_urls}
    earlier_hosts = {host(u) for u in earlier_urls}
    section_stats = {}
    for section, s in sections.items():
        observed = [r for r in master_live if (r["id"] - 1) // 250000 + 1 == section]
        section_stats[str(section)] = {"rows": s["rows"], "unique_targets": len(s["targets"]), "hosts": len(s["hosts"]), "top_hosts": s["hosts"].most_common(10),
            "inverse_host_concentration": 1 / sum((n / s["rows"]) ** 2 for n in s["hosts"].values()), "logged_targets": len({target(r["url"]) for r in observed}),
            "live_statuses": dict(Counter(str(r.get("httpStatus") or 0) for r in observed))}
    host_live = defaultdict(list)
    for row in master_live:
        host_live[host(row["url"])].append(row)
    master_host_live = [{"host": h, "recorded": len(group), "status_200": sum(r.get("httpStatus") == 200 for r in group), "status_404": sum(r.get("httpStatus") == 404 for r in group), "raw_structural": sum(r.get("evidenceLevel") == "server-html-structure" for r in group), "screened_structural": sum(legacy_class(r) == "server-html-structure" for r in group)} for h, group in sorted(host_live.items(), key=lambda p: -len(p[1]))]
    result = {
        "schema_version": 2,
        "method": {"network_requests": 0, "target_normalization": "Remove URL fragment only; retain query, slash, scheme and case", "candidate_rule": "Legacy screened structural + 2xx + no recorded crawlError; first source ID per target", "candidate_warning": "Candidates are initial-HTML observations, not visually validated designs. Flag screen is heuristic, not a gold standard.", "snapshot_signature": "Exact saved title, headings, navigation, tagCounts; not HTML, CSS or a design identity", "host_weighting": "Mean of each hostname's within-host feature proportion; not an estimate of the whole web"},
        "inputs": [{"path": name, "bytes": (root / name).stat().st_size, "sha256": digest_file(root / name)} for name in inputs],
        "combined": {"rows": len(earlier_entries) + id_seen, "exact_urls": len(earlier_urls | master_urls), "http_targets": len(earlier_targets | master_targets), "hosts": len(earlier_hosts | set(hosts)), "exact_url_overlap": len(earlier_urls & master_urls), "target_overlap": len(earlier_targets & master_targets), "master_hosts_new_to_earlier": len(set(hosts) - earlier_hosts), "logged_records": len(earlier_live) + len(master_live), "logged_unique_targets": len({target(r["url"]) for r in earlier_live + master_live})},
        "earlier": {"rows": len(earlier_entries), "exact_urls": len(earlier_urls), "http_targets": len(earlier_targets), "hosts": len(earlier_hosts), "volumes": volume_stats, "live": live_analysis(earlier_live)},
        "master": {"rows": id_seen, "exact_urls": len(master_urls), "http_targets": len(master_targets), "hosts": len(hosts), "duplicate_exact_rows": id_seen - len(master_urls), "tags": dict(tags), "top_hosts": hosts.most_common(20), "inverse_host_concentration": 1 / sum((n / id_seen) ** 2 for n in hosts.values()), "sections": section_stats, "identical_path_sets": sorted(repeated, key=lambda g: -g["distinct_host_path_pairs"]), "live": live_analysis(master_live), "live_by_host": master_host_live},
    }
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(result, ensure_ascii=False, indent=2, sort_keys=True) + "\n")
    print(json.dumps({"output": str(args.output), "combined": result["combined"], "earlier_candidate_targets": result["earlier"]["live"]["candidate_targets"], "master_candidate_targets": result["master"]["live"]["candidate_targets"]}, indent=2))


if __name__ == "__main__":
    main()
