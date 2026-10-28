# AI Website Humaniser 2.0

A Codex skill for turning generic websites into designs whose content, composition and behavior fit their audience and purpose.

**Version:** `2.0.0` · **Release:** [`v2.0.0`](https://github.com/kenny042312-blip/ai-website-humaniser/releases/tag/v2.0.0)

## What changes in version 2

- Diagnoses visible problems before restyling and preserves narrow requests.
- Helps choose a content form, visual hierarchy, type roles, density, boundaries and imagery.
- Includes practical guidance for editable settings, baselines, reset and fair A/B comparisons.
- Separates functional checks, visual review and user preference.
- Adds a deeper research report, reproducible offline analysis and a bounded visual case study.

The research reanalyses **1,010,816 saved URL rows** and **41,215 saved observation records**. It does **not** claim one million visually reviewed websites. The new browser study attempts ten pages, with seven usable initial views, one partial imagery view and two incomplete renders; three pages also receive mobile checks. Read the [report](reports/research-v2.md) for the evidence and limitations.

## Install or update

Download the source archive from the tagged release and place the repository's contents in a folder named `ai-website-humaniser` in your skill directory. Current [Codex documentation](https://learn.chatgpt.com/docs/build-skills) lists `~/.agents/skills/` for user-level discovery and `.agents/skills/` for repository-level discovery.

If you already have version 1 installed in a directory recognized by your Codex installation, replace that existing skill's files with this package rather than creating a second skill with the same name. Some existing installations use `~/.codex/skills/`; preserve the location that already works there. Keep a backup outside the skill discovery folder if needed. If the update does not appear, restart Codex.

Invoke it in Codex with:

```text
Use $ai-website-humaniser to improve this site while keeping its content and working interactions.
```

For a focused request:

```text
Use $ai-website-humaniser to improve only the typography and spacing. Keep the colors and cards.
```

For experimentation:

```text
Use $ai-website-humaniser to create two layout concepts using identical content, with a baseline and a clear account of what changes.
```

## Package map

| File | Purpose |
|---|---|
| [SKILL.md](SKILL.md) | Working entrypoint, scope selection and handoff |
| [Design decisions](references/design-decisions.md) | Symptoms, content forms and concrete transfer examples |
| [Visual review](references/visual-review.md) | Reference inspection, task checks and comparison method |
| [Controls and variants](references/controls-and-variants.md) | Detailed settings and baseline behavior when requested |
| [Research basis](references/research-basis.md) | Compact evidence summary for the skill |
| [Research report](reports/research-v2.md) | Deeper analysis and evidence-to-skill mapping |
| [Corpus audit](reports/corpus-audit-v2.json) | Recomputed measurements and input hashes |
| [Visual audit](reports/visual-audit-v2.json) | Browser observations and CSS measurements |
| [Validation](reports/validation-v2.md) | Checks performed and their limits |
| [Reanalysis script](scripts/reanalyse_corpus.py) | Offline reproduction with the original extracted inputs |
| [Codex metadata](agents/openai.yaml) | Display name and default prompt |

The offline script uses Python's standard library and is optional for ordinary design work. The large original datasets are not distributed here. The skill does not impose one aesthetic, certify authorship or promise a measured improvement in user preference. It supplies concrete decisions and a way to evaluate them.
