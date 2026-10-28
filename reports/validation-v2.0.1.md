# Version 2.0.1 validation record

28 October 2026 UTC. This patch changes instructions and adds an implementation-study report. It does not change the corpus-analysis script, numerical audit, original v2 report, visual reference records or design-decision reference.

## Package checks

| Check | Recorded result |
|---|---|
| Official skill-creator validator | Pass: `Skill is valid!` |
| Local Markdown links | Pass: all 45 resolve |
| JSON and YAML | Pass: audit JSON, skill frontmatter and UI metadata parse |
| Identity and version | Pass: skill name and invocation stay `ai-website-humaniser`; frontmatter version is `2.0.1` |
| Baseline preservation | Seven unchanged files match v2.0.0 byte for byte: the two audits, original research and validation reports, design-decisions reference, analysis script and UI metadata |
| Package scope | Fourteen text files; no raw datasets, app source, local account paths, cached bytecode or application screenshots |
| Source citations | W3C contrast guidance and the MDN dialog reference are checked directly; neither is presented as a new design-reference case |

The unchanged offline analysis is not rerun for this documentation patch. Its original validation and denominators remain in [the v2 record](validation-v2.md). A further browser import check uses a valid new first version and an invalid later version; the library stays at one existing Quay version and the current headline stays unchanged.

## Application evidence used

The [Low Water implementation study](low-water-implementation-study.md) records 11 passing local model tests and the listed browser checks. The report distinguishes a CSS measurement, rendered observation, interaction result and unmeasured preference. Application screenshots and print output remain local; no successful hosted deployment or physical-phone validation is claimed.

## Instruction review

- A narrow typography request still routes to a focused edit. New settings guidance applies only to a requested experiment/settings interface.
- A user-approved palette, rounded cards or dense operational layout remain permitted. The patch adds no aesthetic ban or mandatory harbor style.
- A conditional control is checked in its applicable state; an intentional reduced-motion override is not classified as a defect.
- An editable A/B comparison holds data and copy constant unless a different comparison is declared. Restoring copy is an explicit separate scope.
- A site without print or saved versions does not acquire those features merely because the implementation study includes them.
- A blocked reference or publishing tool leaves a precise evidence/deployment limit; the package makes no new million-site coverage claim.

This is an instruction-level review against realistic requests, not independent forward generation or blinded preference testing. The patch does not establish a measured improvement in output quality, conversion or perceived authorship.

## Release preservation

Publish as a new `v2.0.1` tag. Retain `v2.0.0` and `v1.0.0` at their existing commits. Package validation cannot itself establish that GitHub publication succeeds; verify the repository files, tag and downloadable release archive separately.
