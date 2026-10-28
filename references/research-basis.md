# Research basis for version 2

Read this when citing the corpus or selecting reference lessons. For ordinary design work, use the task-specific guidance rather than loading the entire report.

## What is actually studied

The four supplied directories contain **1,010,816 rows**, **1,009,098 exact URL strings**, **1,008,158 fragment-stripped request targets** and **2,230 hostnames**. These are not independent companies or verified designs. The million-row directory alone contains 180 hostnames and adds only 56 hostnames to the earlier set.

Version 2 reanalyses every saved directory row and all 41,215 saved observation records. It makes no new bulk HTTP crawl. The historical master pass covers 30,399 / 998,060 targets, all in Section 1. Two hosts account for 92.92% of those records; its 92.53% 404 share is not a population estimate.

Three identical cross-host path-set groups contribute 378,320 host–path pairs. Their repetition describes URL structure, not common website appearance or verified source provenance. Repeated paths on one host are not independent votes for a design choice.

The reanalysis corrects two measurement problems:

- Earlier H1 text appears in 7,298 / 8,376 saved structural records, but H1 tags appear in 7,671 / 8,376. The parser's 16-heading cap creates a measurement limitation; element presence and saved text are different fields.
- Of 1,247 raw master structural records, 140 contain JavaScript fallback leads. Applying the earlier screening leaves 1,107, or 1,106 after excluding one recorded transport/body error. Retained records are initial-HTML candidates, not visually validated designs.

Target-weighted and host-balanced feature rates differ substantially. Neither is an accessibility audit or a prescription for a new page. Non-empty alt text, ARIA attributes and headings do not establish their quality or correct use.

## New visual evidence

On 28 October 2026, ten selected directory pages are inspected in a browser: seven usable initial views, one partial imagery view and two incomplete renders. Three receive narrow-view checks; one mobile menu is activated and observed opening and closing. No commercial-success or authorship label is assigned.

| Case IDs | Transferable question |
|---|---|
| V01 GOV.UK, V07 MDN, V10 Cloudscape | Does the hierarchy distinguish introduction, reference navigation and repeated collections? |
| V02 p5.js | Does expressive styling reinforce the subject while keeping its utilities usable? |
| V05 Basecamp, V09 Obsidian | Can specific product evidence replace generic claims or decoration? |
| V08 Are.na | Can measure and placement provide hierarchy without an oversized headline? |
| V06 The Pudding, limited imagery evidence | Do story metadata and type roles help browsing? |

Linear (V03) and Stripe (V04) have incomplete visible rendering in this environment and contribute no composition recommendation. Their DOM/CSS presence is not substituted for a successful visual inspection.

Cases contain counterexamples to universal bans on cards, pills, purple, Inter and system sans. They also do not prove those choices are always good. Match a decision to the brief and test it.

## Operational lessons

1. **Choose references by job and relationship.** Match a reference's useful pattern to the visitor's task, then adapt it to the new content.
2. **Inspect visible roles.** A first-paragraph selector can capture a banner or miniature mockup; `body` can expose an unused font stack; an H1 can sit below the initial viewport.
3. **Separate facts, observations and proposals.** A proposed timetable, local-service layout or typography variant is a transfer hypothesis unless directly observed and tested.
4. **Keep scope proportionate.** A narrow style edit does not require a new concept or a million-row analysis.
5. **Evaluate three outcomes separately.** Function, visual coherence and user preference need their own evidence. No single human-authorship score is supported.

## Sources and further detail

- [Full v2 research report](../reports/research-v2.md): methods, calculations, limitations, case links and implications.
- [Recomputed statistics](../reports/corpus-audit-v2.json): exact counts, host weighting and input SHA-256 hashes.
- [Visual records](../reports/visual-audit-v2.json): source IDs, URLs, viewports and observed limitations.
- [Validation record](../reports/validation-v2.md): package checks and the boundary of effectiveness claims.
- [Low Water implementation study](../reports/low-water-implementation-study.md): a separate application test case behind the 2.0.1 and 2.0.2 control and review corrections, with publication and rendering limits. It adds no external sites to the corpus or rendered-reference counts.

Do not describe this as visually reviewing a million sites, proving which sites are human-made, or measuring a preference uplift. The evidence supports a more explicit design process; the user's response to a particular result remains to be observed.
