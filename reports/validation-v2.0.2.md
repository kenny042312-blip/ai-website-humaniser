# Version 2.0.2 validation record

28 October 2026 UTC / 29 October Asia/Shanghai. This documentation patch transfers observed editor-navigation, focus, height and long-name failures from the [Low Water implementation study](low-water-implementation-study.md) into the conditional controls/review references.

## Package checks

| Check | Recorded result |
|---|---|
| Official skill-creator validator | Pass: `Skill is valid!` |
| Local Markdown links | Pass: all 51 resolve |
| JSON and YAML | Pass: both audits, skill frontmatter and UI metadata parse |
| Identity and version | Pass: invocation remains `ai-website-humaniser`; frontmatter version is `2.0.2` |
| Entrypoint scope | Pass: the entrypoint changes only `2.0.1` to `2.0.2`; detailed guidance stays in conditional references |
| Baseline preservation | Eight existing files remain byte-identical to 2.0.1: UI metadata, design decisions, two audits, original research, two earlier validation records and the analysis script |
| Package scope | Fifteen text files; no datasets, application source, account paths, screenshots or compiled bytecode |
| Primary technical sources | MDN modal behavior, WAI dialog keyboard pattern and the Chrome DevTools text-scale protocol are checked directly |

The first file-count check detects a copied Python bytecode cache. The staging cache is removed before packaging, and the repeated check confirms exactly the fifteen intended text files. No source script or dataset is deleted.

The corpus script, numerical audits, original research report, earlier validation records, design-decisions reference and UI metadata remain unchanged. The original analysis is not rerun for this documentation patch; its methods and denominators stay in [the v2 record](validation-v2.md). Application source is not part of the skill package.

## Instruction review

- A narrow typography request still uses a focused edit. The entrypoint changes only its patch version.
- The new overlay guidance applies when an overlay exists; it does not add an editor, force every panel to be modal or prescribe the Low Water breakpoint values.
- A control with an intentional view condition remains valid. The new guidance makes that view reachable while preserving experiment state.
- Short-window and long-name tests target declared features. They do not justify unrelated features or a universal visual style.
- Viewport reflow, text resizing, browser zoom, physical-device use and screen-reader checks remain distinct evidence categories. An accepted emulation command is not reported as a rendering pass.
- A successful deployment/source check does not become a claim of authenticated hosted interaction.

This is an instruction review against the stated use cases and recorded application observations. No independent forward-generation comparison, blinded preference test or measured quality uplift takes place. The patch does not add external sites, crawl records or company counts to the million-record research.

## Release preservation

Publish as a new `v2.0.2` tag. Keep `v2.0.1`, `v2.0.0` and `v1.0.0` at their verified commits. Verify the exact repository tree, tag and downloaded release archive separately; package checks alone do not establish successful publication.
