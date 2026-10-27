# Research basis and limits

This skill draws on the local study of four user-supplied website directories. The findings below describe that study's counts and method; they are not a market census or a visual-quality ranking.

## What the study measured

- The PDFs contain 1,010,816 URL records, 1,009,098 exact unique URL strings, and 1,008,158 distinct HTTP request targets after URL fragments are removed. The targets resolve to 2,230 hostnames. These counts do not equal companies, independent teams, or distinct visual designs.
- The first three PDFs contribute 10,816 records across 2,174 hostnames. Their crawl logged 8,376 structural HTML observations. The crawler read initial server responses; it did not capture browser screenshots or computed styles.
- The million-row directory contains 998,060 unique HTTP targets across 180 hostnames. Its live pass stopped at 30,399 targets (3.05%), all in Section 1. In that sequential slice, 28,128 responses were HTTP 404 (92.5%) and 1,674 were HTTP 200 (5.5%). The remaining targets were not checked in that pass. The sample is not random, and these results do not explain why individual paths return 404.
- In the earlier crawl, 9,407 HTTP 200 responses out of 10,340 responses is 91.0%. Against 10,671 permitted checks, it is 88.1%. Always state the denominator for a response rate.

## What can guide a design

The directory contains different information jobs: product and organization pages, standards, APIs, design-system documentation, code references, learning resources and creative-code projects. This supports a useful design question: what structure fits this visitor's task and material? It does not support one universal visual recipe.

The saved server HTML supports claims about observed markup and labels. It does not establish the rendered layout, typography, spacing, transitions, accessibility, user response, commercial success, or whether a person or a model made a page. Do not present those properties as findings from this crawl.

A supplied review proposed trying serif, grotesque and monospaced type together; tighter display tracking; asymmetric grids; tabular numerals; hairline rules; and a no-card layout compared with a card layout. The study did not measure these visual cues. Treat them as hypotheses to test in the context of a specific brief. A useful comparison keeps the content fixed and changes one design choice at a time.

## Practical interpretation

- Specificity comes from relevant content and consistent design decisions, not decorative “imperfection.”
- Cards are appropriate when they clarify separate items; repeated cards should not be the automatic structure for every section.
- A single unusual font, color, asymmetry or animation cannot certify that a site feels human-made. Ask reviewers to identify the page element that shaped their judgment and whether it helped them complete the task.
- When the only evidence is a directory listing or initial HTML response, say so. Do not imply that every listed URL was visually inspected.
