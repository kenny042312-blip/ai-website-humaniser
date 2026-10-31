# AI Website Humaniser 3.0

A Codex skill for websites whose content, composition and behavior fit their audience and purpose.

**Version:** `3.0.0` · **Release:** [`v3.0.0`](https://github.com/kenny042312-blip/ai-website-humaniser/releases/tag/v3.0.0)

Version 3 integrates a complete review of [Elaya's AI Design Skills](https://github.com/elayadesign/ai-design-skills/tree/4fdcdd52f15eda09da1257c303c860c13e0c879f) with the Humaniser's existing research and Low Water implementation findings. The source is not Claude-only: its README also lists Codex and other tools. The [integration report](reports/research-v3.md) explains what is added, already covered, corrected or retained as an optional design choice.

## What v3 adds

- **Landing-page strategy:** visitor intent, arrival promise, objections, evidence, page structures and accurate CTA copy.
- **Reusable visual systems:** named text styles, spacing roles, nested corners, icon consistency and asset treatment.
- **Interaction and motion detail:** relevant states, real loading, recoverable errors, navigation transitions and readable animation fallbacks.
- **Publication checks:** real routes/forms, indexing, not-found status, favicon and social metadata.
- **An optional Elaya recipe:** the source's typography, named styles, spacing, palette, hero, icon and motion values, kept together as a declared visual concept.

These additions load only when relevant. A small typography request stays small. An operations dashboard keeps its operational structure. Existing brand fonts, cards, colors and accepted choices are preserved unless the requested change calls for something else. The recipe does not become a universal theme.

The core skill retains reference-led composition, specific content, responsive task preservation, visual review, and detailed settings/baseline/reset guidance when an editor is requested. [Low Water](reports/low-water-implementation-study.md) supplies the existing application findings about token scope, comparison, focus, short windows and long labels.

## Evidence, accurately stated

The historical research reanalyses **1,010,816 saved URL rows** and **41,215 observation records**. It does **not** claim one million visually reviewed sites. Its ten-page browser study has seven usable initial views, one partial imagery view and two incomplete renders; three pages also receive mobile checks. [Original report](reports/research-v2.md)

V3 reads all **seven tracked files** in the pinned external repository, including its one design skill. It adds no external rendered-site cases or crawl results. Its additions are attributed instruction adaptations, not evidence of higher conversion or a measured preference improvement. See [v3 validation](reports/validation-v3.md) and [third-party notices](THIRD_PARTY_NOTICES.md).

## Install or update

Download `ai-website-humaniser-v3.0.0.zip` from the release and keep the entire `ai-website-humaniser` folder, including its references and notices. Current [OpenAI documentation](https://learn.chatgpt.com/docs/build-skills) lists `~/.agents/skills/` for user-level discovery and `.agents/skills/` for repository-level discovery.

If this skill is already installed in a recognized location, update that existing folder rather than creating a duplicate with the same name. Some existing installations recognize `~/.codex/skills/`; preserve the working location. Keep a recovery copy outside skill discovery. Codex detects changes automatically; restart it if an update does not appear. Do not copy only `SKILL.md`, because its conditional references are part of the skill.

Invoke it as:

```text
Use $ai-website-humaniser to improve this website while preserving its purpose, content and working behavior.
```

For a focused edit:

```text
Use $ai-website-humaniser to refine only the typography and spacing. Keep our colors and rounded cards.
```

For a new offer page:

```text
Use $ai-website-humaniser to build a landing page from these product facts. Make the main action clear and identify any unsupported claims before publication.
```

For a comparison:

```text
Use $ai-website-humaniser to compare a subject-specific direction with the optional Elaya recipe, using identical content and a recoverable baseline.
```

## Package map

| Resource | Use |
|---|---|
| [SKILL.md](SKILL.md) | Scope, core workflow and conditional routing |
| [Landing-page strategy](references/landing-page-strategy.md) | Offer, copy, evidence and page argument |
| [Design decisions](references/design-decisions.md) | Visible symptoms, content forms and transfer examples |
| [Visual system](references/visual-system.md) | Text/spacing roles, geometry, icons and imagery |
| [Motion and states](references/motion-and-states.md) | Real feedback, navigation, movement and fallbacks |
| [Shipping review](references/shipping-review.md) | Relevant public-launch checks |
| [Optional Elaya recipe](references/elaya-visual-recipe.md) | Source design values, attribution and applicability limits |
| [Visual review](references/visual-review.md) | Rendered checks, fair comparisons and evidence levels |
| [Controls and variants](references/controls-and-variants.md) | Settings, baselines, recovery and saved-version semantics |
| [Research basis](references/research-basis.md) | Compact historical evidence summary |
| [V3 integration report](reports/research-v3.md) | Complete source-to-change map and technical corrections |
| [V3 source audit](reports/upstream-audit-v3.json) | Pinned source inventory and Git blob hashes |
| [V3 validation](reports/validation-v3.md) | Performed package checks and instruction-review limits |
| [V2 research](reports/research-v2.md) | Historical corpus methods, calculations and bounded visual study |
| [Corpus audit](reports/corpus-audit-v2.json) / [visual audit](reports/visual-audit-v2.json) | Historical reproducible records |
| [Implementation study](reports/low-water-implementation-study.md) | Low Water observations, fixes and verification boundaries |
| [V2 validation](reports/validation-v2.md), [2.0.1](reports/validation-v2.0.1.md), [2.0.2](reports/validation-v2.0.2.md) | Preserved historical checks |
| [Reanalysis script](scripts/reanalyse_corpus.py) | Optional offline reproduction with the original extracted inputs |
| [Codex metadata](agents/openai.yaml) | Display name and invocation example |
| [Third-party notices](THIRD_PARTY_NOTICES.md) | Attribution and MIT notices for adapted material |

The original large datasets and Low Water application source are not distributed in the skill. The optional corpus script uses Python's standard library. No API key, analytics service or motion library is required by the instructions. Earlier releases remain available at their original tags.
