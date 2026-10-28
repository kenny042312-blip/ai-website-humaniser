# AI Website Humaniser: research and design analysis, version 2

**Analysis date:** 28 October 2026 (Asia/Shanghai)  
**Historical response snapshots:** 23–26 October 2026  
**New rendered-page observations:** 28 October 2026  
**Expert lenses:** statistical data audit, information architecture, product design, typography and interaction evaluation.

This report reanalyses all **1,010,816 saved directory rows** and **41,215 saved observation records**, then adds a small current visual study. It does not claim that one million sites are visually inspected. The historical logs cover **40,498 distinct fragment-stripped request targets**. Ten reference pages receive a new browser inspection, with three mobile follow-ups and one menu interaction check.

The practical change is to replace a broad instruction to “make it less generic” with a process that identifies the page's information job, diagnoses the visible mismatch, chooses a coherent visual direction, implements its states and tests the result. This makes version 2 more specific and inspectable. Whether users prefer its outputs remains an empirical question; no comparative user study has run.

## 1. Evidence, scope and reproducibility

| Source | What it supports | What it does not support |
|---|---|---|
| Extracted PDF rows | Counts, URL overlap, hostname distribution, repeated path sets | Existence of every page, visual quality, independent companies |
| Historical HTTP observations | Recorded statuses and selected initial-HTML structure | Rendered layout, working controls, current availability |
| New browser inspection | Particular visible compositions, CSS samples, three narrow layouts and one interaction | Population prevalence, conversion effects, human authorship or universal taste |

New quantitative corpus results come from [reanalyse_corpus.py](../scripts/reanalyse_corpus.py). Its [output](corpus-audit-v2.json) includes input sizes and SHA-256 hashes, formulas, per-volume counts, per-section distributions and host-level results. It reads the original extracted files without network requests or source modification. New visual records are in [visual-audit-v2.json](visual-audit-v2.json).

To reproduce the corpus calculation with the original saved research folder:

```sh
python3 scripts/reanalyse_corpus.py \
  --corpus /path/to/work/website-research \
  --output /path/to/corpus-audit-v2.json
```

The extracted inputs remain in the original local workspace and are not bundled in this public skill. This is a reanalysis, not a fresh PDF extraction or resumed million-URL crawl. The script checks source IDs against observations and compares fragment-stripped targets for the master log, which intentionally removes fragments. Two master source strings differ from logged strings only by a fragment.

### Source inventory

| Supplied PDF | Saved rows | Qualification |
|---|---:|---|
| `1000_well_designed_websites_for_ai.pdf` | 1,000 | First volume |
| `5000_additional_websites_for_ai.pdf` | 5,000 | Second volume |
| `5000_websites_vol3_6001_to_11000.pdf` | 4,816 | Existing validation records missing IDs 9704–9750 and 10864–11000 |
| `1000000_websites_master_directory.pdf` | 1,000,000 | Sequential extracted IDs checked again |
| **Total** | **1,010,816** | **1,000 + 5,000 + 4,816 + 1,000,000** |

The earlier requested figure of 1,016,000 does not match the saved sources. No rows are invented to reach it. The first three volumes contain 10,816 exact distinct URLs but only 10,100 request targets after fragments are removed. Fragment differences can identify locations within a page; they do not create independent HTTP request targets.

## 2. How much independent material does a million rows add?

| Measure | Earlier volumes | Master volume | Combined |
|---|---:|---:|---:|
| Source rows | 10,816 | 1,000,000 | 1,010,816 |
| Exact URL strings | 10,816 | 998,282 | 1,009,098 |
| Fragment-stripped targets | 10,100 | 998,060 | 1,008,158 |
| Hostnames | 2,174 | 180 | 2,230 |

There are zero exact-string overlaps and two request-target overlaps between the earlier and master directories. The million-row volume adds **56 hostnames**: **2,230 − 2,174 = 56**. Consequently, **124 of its 180 hostnames** already appear in the earlier corpus. Hostnames are useful grouping units but are not guaranteed to correspond one-to-one with companies or visual systems.

### Repeated path sets extend beyond SaaS

The previous report identifies one identical path-set group. Comparing every hostname's path set within each section finds three groups with multiple members:

| Section | Hosts with identical path sets | Paths per host | Host–path pairs |
|---|---:|---:|---:|
| 1: UI/design systems | 3 | 16,740 | 50,220 |
| 3: SaaS | 13 | 18,200 | 236,600 |
| 4: 3D/motion | 5 | 18,300 | 91,500 |
| **Across these groups** | **21** | — | **378,320** |

Section 1's group is `naiveui.com`, `primereact.org`, and `shoelace.style`. Section 4's group is `developer.playcanvas.com`, `pixijs.com`, `pixijs.download`, `playground.babylonjs.com`, and `threejs.org`. Section 3's thirteen members and each sorted path-set hash appear in the audit JSON.

The calculation is **3 × 16,740 + 13 × 18,200 + 5 × 18,300 = 378,320 host–path pairs**, equal to 37.832% of the million-row count. This comparison ignores query strings and fragments when forming path sets. It establishes repeated path structure, not copied designs, common ownership, verified route existence or the PDF's creation process.

### Concentration is a property of the directory

| Section | Rows | Hostnames | Inverse host concentration |
|---|---:|---:|---:|
| 1 | 250,000 | 42 | 15.16 |
| 2 | 250,000 | 24 | 6.25 |
| 3 | 250,000 | 79 | 14.12 |
| 4 | 250,000 | 35 | 13.94 |
| All master rows | 1,000,000 | 180 | 43.44 |

For host shares `p_h = rows_on_host / all_rows`, inverse concentration is `1 / sum(p_h²)`. An evenly weighted set of about 43.44 hosts has the same concentration as the master directory. **This is not an effective sample size for design quality or a confidence interval.** Section 2's six dominant hosts hold 244,660 / 250,000 = 97.864% of its rows.

**Design hypothesis H1:** select references by distinct property, page job and rendered behavior. Thousands of paths from one component library should not give its visual decisions thousands of votes. A few relevant contrasting references can be more informative for a project than an unfiltered URL count; no productivity effect is measured here.

## 3. The historical live pass is strongly selected

The master log covers **30,399 / 998,060 = 3.05%** of its targets, all in Section 1. It contains 1,674 HTTP 200 responses, 28,128 HTTP 404 responses, five other nonzero statuses and 592 records without an HTTP response. Sections 2–4 have no historical live results in this pass.

The aggregate 404 share is **28,128 / 30,399 = 92.53%**, but it should not be generalized:

| Logged source hosts | Records | HTTP 200 | HTTP 404 |
|---|---:|---:|---:|
| `m3.material.io` | 16,793 | 80 | 16,506 |
| `developer.apple.com` | 11,455 | 140 | 11,314 |
| All other logged hosts | 2,151 | 1,454 | 308 |
| **Total** | **30,399** | **1,674** | **28,128** |

The first two hosts contribute **28,248 / 30,399 = 92.92%** of logged targets and **27,820 / 28,128 = 98.91%** of 404s. Among the remaining 2,151 records, HTTP 200 is **67.60%** and HTTP 404 is **14.32%**. This post-hoc comparison diagnoses selection; it is not a corrected population rate. The remaining targets are also non-random.

The earlier response rate remains **9,407 / 10,340 = 90.98%** among recorded HTTP responses, or **9,407 / 10,671 = 88.16%** among robots-permitted records. It is not the supplied review's claimed rate above 96%. A permitted record is not necessarily a completed request. Denominators answer different questions.

The historical crawler follows redirects without independently applying destination robots checks and per-hop rate limiting. This limitation remains attached to its results. This reanalysis does not restart that crawler.

**Design hypothesis H2:** failed, blocked or unrendered responses produce no visual recipe. A failed deep link does not evaluate its host's homepage. Choose a usable reference when needed and preserve failures as missing evidence.

## 4. Measurement corrections

### 4.1 Saved heading text is not a complete heading census

The old parser records only the first **16** H1/H2/H3 text items, **12** distinct navigation labels and **18** action labels. Among the earlier 8,376 screened structural records:

| Stored list at its limit | Records | Share of 8,376 |
|---|---:|---:|
| 16 heading items | 5,112 | 61.03% |
| 12 navigation labels | 6,179 | 73.77% |
| 18 action labels | 7,984 | 95.32% |

Being at a limit does not prove a particular list is truncated, but these counts make it unsafe to treat stored list lengths as complete page totals.

The old “H1 present” count actually measures **H1 text in the saved list**: 7,298 / 8,376 = **87.13%**. The separate element counter records an H1 tag on **7,671 / 8,376 = 91.58%**. Of 373 disagreements, 368 have a list at the 16-item cap; five need other explanations such as empty/nontext headings or parser limitations. This analysis does not assign those causes without raw-page evidence.

Use the field that measures the claim. Distinguish tag presence, saved text and visual prominence rather than treating them as equivalent.

### 4.2 Fallback text inflates the master structural count

The master report counts 1,247 raw structural observations. Applying the title/H1 screening already used in the earlier combined report flags **140**. All are Apple documentation responses whose captured lead asks for JavaScript. This leaves **1,107** screened structural records. One further record has a transport/body error, leaving **1,106** conservative candidate targets.

Screening remains a heuristic; it does not establish that every retained page is substantive or that the rendered Apple pages are poor. It prevents fallback headings from becoming design lessons.

### 4.3 Candidate selection and deduplication

A candidate has screened structural HTML, a 2xx status and no recorded crawl error. Duplicate fragment-stripped input targets retain the earliest source ID. This is an analysis subset, **not a set of verified good designs**.

| Stage | Earlier volumes | Master log |
|---|---:|---:|
| Raw structural records | 8,412 | 1,247 |
| After title/H1 screening | 8,376 | 1,107 |
| After excluding transport/body errors | 8,338 | 1,106 |
| Distinct candidate input targets | 7,898 | 1,106 |
| Candidate hostnames | 1,564 | 25 |
| Distinct candidate final URLs | 7,734 | 1,013 |

Requests can converge through redirects, so input targets and final URLs differ. Neither proves visual independence. Exact signatures of saved title, headings, navigation and tag counts produce 7,711 earlier signatures and 1,012 master signatures. These partial signatures cannot establish template identity or pixel equality.

### 4.4 Host weighting changes apparent prevalence

GitHub contributes **2,424 / 7,898 = 30.69%** of the earlier candidate targets. Compare target weighting with an equal mean of each host's within-host rate:

| Initial-HTML feature | Target share, n = 7,898 | Equal-host mean, 1,564 hosts |
|---|---:|---:|
| H1 tag | 91.11% | 93.14% |
| Navigation tag | 92.82% | 83.83% |
| Main tag | 83.48% | 72.20% |
| ARIA-label attribute | 94.42% | 82.75% |
| Image tag | 77.96% | 92.84% |
| Form tag | 26.37% | 30.80% |

The target rate is `sum(f) / candidate_targets`. The host mean is `mean_h(sum(f on host h) / candidates on host h)`. The 14.88 percentage-point shift for image presence demonstrates the effect of weighting. Equal-host weighting is a sensitivity analysis, not a cure for selection or a whole-web estimate.

The historical 151,261 image elements and 91,572 non-empty alt values yield **60.54% non-empty alt text**. The parser merges missing and empty values, and an empty alt can be appropriate for decoration. These data cannot estimate accessibility compliance or description quality.

**Design hypothesis H3:** inspect an element's role, content and behavior. Do not optimize a new page for the frequency of tags or component counts in this corpus.

## 5. Rendered cases add bounded visual evidence

Ten pages are selected from the earlier directory to contrast public-service documentation, creative learning, software products, a story archive and a collection tool. This is a purposive case study, not a random sample, a success ranking or a study of verified authorship.

At 1280 × 720, seven initial views are usable, one provides partial imagery evidence and two render incompletely. Three pages also receive checks at 390 × 844. Screenshots are inspected in-session; this package includes measurements and notes rather than archived image files. Site changes, locale, fonts, load state and browser behavior can alter future observations.

| Case and source | Observation on 28 October | Conditional lesson |
|---|---|---|
| V01 [GOV.UK Design System](https://design-system.service.gov.uk/) | Strong aligned utility typography; opening and updates have distinct roles | Make task hierarchy deliberate; an editorial serif is unnecessary |
| V02 [p5.js](https://p5js.org/) | Playful controls coexist with learning navigation and community material | Expressive identity can reinforce a subject without removing useful controls |
| V05 [Basecamp](https://basecamp.com/) | Substantial product evidence; narrow layout changes reading order | Adapt a representative workflow's presentation to the screen |
| V06 [The Pudding](https://pudding.cool/) | Story-grid metadata and type roles are visible; thumbnail artwork is not reliably rendered | Borrow information relationships, not an inferred image style |
| V07 [MDN](https://developer.mozilla.org/en-US/) | Reference/search introduction transitions into bordered article groups | Rounded grouping and Inter can be coherent; neither classifies authorship |
| V08 [Are.na](https://www.are.na/) | Quiet, narrow prose-led introduction with a small heading | Placement and measure can supply hierarchy without extreme display scale |
| V09 [Obsidian](https://obsidian.md/) | Dark composition pairs a purple action with product evidence | Assess the whole composition instead of banning a color or font category |
| V10 [Cloudscape](https://cloudscape.design/) | Related documentation paths share a bordered group | Repetition helps when items belong to one collection |

[Linear](https://linear.app/) (V03) shows navigation but an empty main field in two captures; [Stripe](https://stripe.com/en-hk) (V04) exposes DOM text while key copy is not visibly rendered. The causes are not established. Their CSS is retained diagnostically but excluded from composition recommendations. No claimed successful rendering is substituted.

### Typography has roles, not a universal formula

Selected H1 measurements in usable initial views:

| Case | Font size | Line height | Tracking | H1 box width |
|---|---:|---:|---|---:|
| GOV.UK | 48 px | 50 px | `normal` | 723 px |
| p5.js | 56 px | 56 px | 0.2 px | 1,016 px |
| Basecamp | 37.4475 px | 41.1923 px | −0.982997 px | 545 px |
| MDN | 40 px | 60 px | `normal` | 584 px |
| Are.na | 19.2 px | 27.84 px | `normal` | 568 px |
| Obsidian | 60 px | 60 px | −1.2 px | 672 px |
| Cloudscape | 42 px | 56 px | `normal` | 227 px |

These are browser measurements, not recommended values. Fractional pixels reflect computed layout. p5.js's H1 lies below the initial viewport and is not the opening visual lead. These ranges do not establish an optimum.

Obsidian's tracking is **−1.2 / 60 = −0.02 em**; Basecamp's is approximately **−0.982997 / 37.4475 = −0.02625 em**. Neither justifies prescribing the supplied review's proposed −0.03 to −0.04 em to every display heading. `normal` remains a keyword, not a measured zero.

Automatic sampling reveals role errors. GOV.UK, Are.na and Cloudscape report Times on `body`, while visible content uses other families. Basecamp's first matching paragraph is miniature product-preview text, computing to 6.45807 px on desktop. p5.js's first paragraph is an announcement banner. Calling these “body typography” would teach the wrong tokens. A computed family stack also does not confirm which font file renders a glyph.

**Design hypothesis H4:** identify the actual lead, reading copy, metadata and action before measuring. Tune font, measure, line height and wrapping together with real text; do not infer a system from generic DOM selectors alone.

### Mobile changes composition

Are.na widens its prose relative to the viewport and stacks actions. p5.js replaces its left rail with an expandable menu and stacks utilities. Basecamp brings explanation and action ahead of its product preview. p5.js's menu opens and closes on two activations, with matching expanded-state changes. Other controls are not interaction-tested.

**Design hypothesis H5:** preserve the task through deliberate reading order and grouping. Uniformly shrinking desktop dimensions does not preserve these relationships.

## 6. What this suggests about “humanising”

The data does not identify authorship. A more useful question is: **which decisions make this page particular to its material, and do they help the visitor?** The following remain hypotheses, not measured causal effects.

### H6: Specificity is structural as well as verbal

A generic page can remain generic after its adjectives change. Give the visitor something relevant to inspect: a programme, product state, collection, example or comparison. Choose a composition that supports that material. Use the substitution check: if changing a logo and a few nouns makes the page fit an unrelated business, identify the missing subject-specific structure.

Relevant detail matters more than volume. Unsupported testimonials, usage counts, history or availability introduce false evidence. Fictional examples stay explicitly fictional.

### H7: Visual voice depends on coordinated decisions

The cases support multiple directions. They do not establish that serif is more human than sans, rules more human than cards, or asymmetry more human than a centered column. A direction connects hierarchy, measure, alignment, density, color, imagery and behavior.

A numeric programme can emphasize alignment and units; an editorial archive can organize browsing with metadata; a product page can make its interface the main evidence. These transfers require evaluation in the new brief. Developer/software properties dominate the corpus, limiting generalization to other sectors.

### H8: Repetition is useful when content repeats

The problem is not three cards. It is giving unrelated information identical hierarchy and shape without a reason. Uniform catalogue items, departures and reference navigation can be useful. A testimonial, timetable and condition should not automatically receive one presentation.

Choose gaps, rules, containers and surfaces from the information relationships. Keep shared rules across different modules. Avoid replacing a universal component template with a universal “editorial serif and hairline rules” template.

### H9: Function, visual quality and preference are separate

A working filter does not establish a distinctive visual direction; an attractive page does not establish that its filter works. Neither proves that the user prefers it. Version 2 asks for relevant evidence in each dimension and preserves “not checked” instead of inventing a combined score.

An isolated-setting comparison keeps content, data, assets, viewport and state constant. A broader concept comparison can change multiple dimensions, but cannot identify one setting's causal effect. Retain the user's explanation, ties and negative feedback.

## 7. Evidence-to-skill changes

| Finding or weakness | Version 2 response | Location |
|---|---|---|
| Repeated routes and concentrated hosts | Match references by property and information job | Research basis; design decisions |
| Fallback pages and capped parser fields | Label evidence level and measurement scope | Research basis; visual review |
| Version 1 guidance is broad | Diagnose symptoms; select content form before styling | Design decisions |
| Role-blind CSS extraction | Inspect actual lead, reading copy, metadata and controls | Visual review |
| Contradictory visual cases | Keep fonts, cards, gradients and symmetry conditional | Skill entrypoint |
| Mobile reordering | Preserve task and reading order across widths | Skill; visual review |
| Editable experimentation | Define real settings, baseline, reset, schema and change summary | Controls and variants |
| More detail can become intrusive | Separate new builds, broad refinement and narrow edits | Skill routing |
| Effectiveness is unmeasured | Use observable checks and future regression prompts | Visual review; validation record |

The skill does not require every website to ship an editor, long report, multiple concepts, motion or a crawl. Additional tools apply only when requested or useful. Detailed references stay available without imposing a large process on every small edit.

## 8. Limits and the next useful experiment

No new million-target crawl or 500–1,000-domain visual audit runs. The ten-page study does not validate remaining master paths or establish the prevalence of visual conventions. Selected cases, partial rendering, mutable websites and subjective interpretation constrain generalization.

There is no labelled authorship dataset, preference study, conversion study or independently controlled version-1-versus-version-2 generation trial. A defensible “humanisation success rate” cannot be calculated. This release supplies corrected analysis, traceable observations, concrete decisions and package validation.

A future effectiveness experiment should use distinct briefs, identical source content, matched tools and generation conditions, blinded presentation order, task checks and reviewer explanations. Preserve both versions' outputs and failures. Analyze preference separately from functional regressions. This experiment is proposed, not performed here.

## 9. Audit trail

- [Corpus statistics and input hashes](corpus-audit-v2.json): eight saved inputs, selection rules and path signatures.
- [Offline script](../scripts/reanalyse_corpus.py): standard-library computation and alignment checks.
- [Visual log](visual-audit-v2.json): source IDs, URLs, viewports, styles, limitations and menu check.
- [Validation record](validation-v2.md): performed checks and unmeasured outcomes.
- [Skill](../SKILL.md), [design decisions](../references/design-decisions.md), [visual review](../references/visual-review.md), [settings](../references/controls-and-variants.md).

Historical reports remain in the local workspace. Their uncorrected H1 label and master structural count are superseded by the defined measures here. The original response logs remain unchanged.
