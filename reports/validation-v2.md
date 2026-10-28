# Version 2 validation record

**Date:** 28 October 2026. These checks distinguish package correctness, research calculations and design-effectiveness claims.

## Executed checks

| Check | Result and scope |
|---|---|
| Skill-creator `quick_validate.py` | Pass: `Skill is valid!` using Python with PyYAML 6.0.3 in a local validation environment |
| Full offline corpus analysis | Pass: all 1,010,816 source rows and 41,215 observation records read; source/observation alignment checked; input SHA-256 hashes written |
| URL semantics | Pass on a synthetic fixture: fragments collapse while query differences remain distinct |
| Heading measurement | Pass on a synthetic fixture: an H1 element remains detectable when its text is absent from a capped saved heading list |
| Evidence screening | Pass on a synthetic fixture: JavaScript fallback, recorded body error and non-2xx response are excluded from the candidate set |
| Incorrect source/observation join | Pass on a deliberately mismatched fixture: the script exits with an alignment error |
| Package links and metadata | Pass: 33 local Markdown links resolve; JSON and YAML parse; version and invocation metadata agree |
| Input preservation | Pass: all eight original input files still match the SHA-256 hashes in the generated audit |
| Browser reference checks | Ten desktop pages attempted, seven usable initial views, one partial imagery view, two incomplete renders; three mobile follow-ups and one menu state-change check |

The synthetic fixture uses reserved `.test` hostnames without network access and is removed after execution. It checks analysis behavior, not visual taste. The historical input files are read-only during reanalysis.

## Instruction review

The package is reviewed against narrow typography edits, an existing timetable, a purple/card brand, a fictional business, a dense operational dashboard, an editable comparison and an unavailable reference. The entrypoint preserves requested scope; detailed references supply conditional decisions and explicitly separate observations from proposals. This is an instruction-level review, not an independent model generation benchmark.

The entrypoint links the design, review, settings and research references by need. It does not require a research crawl, visual editor, extra concept or public deployment for every use. The report's large original datasets are not needed for ordinary design work.

## What remains unmeasured

- No blinded version-1-versus-version-2 user preference study runs.
- No independent generation trial establishes the skill's effect on output quality.
- No conversion, authorship-classification or accessibility-conformance result is claimed.
- The ten reference inspections are not a whole-site interaction audit or a representative sample of the web.
- Screenshots are inspected in-session; archived screenshot files are not part of the research package.

The justified release claim is a more explicit design workflow supported by corrected corpus analysis and bounded visual observations. A numerical improvement in “human feel” would require the comparative evaluation described in [visual review](../references/visual-review.md).
