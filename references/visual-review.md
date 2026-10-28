# Review the result, not just the code

Use the checks that match the change. A small typography edit needs a focused check; a new interactive page needs broader review. This is an evaluation method, not evidence that version 2 already improves user preference.

## Inspect a reference correctly

Record its URL, date, viewport, page state and any loading or access limitation. Separate:

1. **Directory evidence:** a URL or supplied label exists.
2. **Response evidence:** a particular request returns a status or initial HTML.
3. **Rendered evidence:** the page is visibly rendered in a specified state.
4. **Interaction evidence:** an action produces an observed change.
5. **User evidence:** a reviewer completes a task or expresses a preference.

Do not promote a lower level into a higher one. A page with failed assets can still support limited text or layout notes; label those limits.

Before taking computed CSS as a design token, identify the visible element's role. In the v2 study, a first-paragraph selector selects a cookie/banner paragraph on one page and miniature text inside a product mockup on another. Several pages declare `Times` on `body` while actual content uses another family. An H1 can sit below the opening viewport. A computed font-family list does not prove which font file renders a glyph.

Inspect the visible lead, actual reading paragraph, primary action and repeated item directly. Use pixels as recorded measurements, not universal prescriptions. For comparison:

- Relative tracking = computed letter-spacing / computed font-size; `normal` is a keyword, not a measured zero.
- Relative line height = computed line-height / computed font-size when both are numeric.
- Content proportion = element width / viewport width; a box's width is not the glyphs' ink width.
- Record theme, locale and motion state if they affect the comparison.

## Review a new or revised page

| Dimension | What to observe | Evidence of a problem |
|---|---|---|
| Purpose and specificity | The visitor can identify the offer and next useful action | Copy and composition remain interchangeable with unrelated sites |
| Hierarchy | Primary content, explanation and utilities have distinct roles | Decorative labels or repeated headings compete with the actual task |
| Composition | Relationships remain clear above and below the first screen | Unrelated sections use identical forms; important data loses alignment |
| Typography | Real titles and paragraphs wrap and read coherently | Clipping, awkward orphans, inconsistent label treatment, tiny essential text |
| Imagery | Visuals explain or demonstrate something particular | A generic decoration takes space needed by useful evidence |
| Interaction | The main action and necessary states work | Inert controls, missing feedback, contradictory selections |
| Narrow layout | The task survives its changed reading order | Essential fields disappear, controls overlap, comparison becomes impossible |
| Access and resilience | Keyboard, focus, text, state labels and motion alternatives remain usable | Hidden focus, keyboard traps, unreadable contrast, motion-only content |

For each relevant check record **observed pass**, **issue found**, or **not checked**, with a short reason or capture. Do not average them into a “human score.” A visually pleasing page can still fail the task; a functional page can still lack a distinct direction.

Use a wide and a narrow viewport appropriate to the project; 1280 × 720 and 390 × 844 are the v2 study's recording conditions, not required device standards. Check an intermediate size if content breaks between them. Test long content, no results, errors or unavailable data only where those states exist or matter. Use relevant project accessibility and browser tooling; this skill does not certify standards conformance.

For a fixed editor or overlay, include a short viewport and keyboard movement across its boundaries. Confirm that focus is visible and usable, not merely that an element owns focus in the DOM. Check the remaining control area, scroll containment, close/return behavior and resize transitions. When the interface displays user-entered names in several places, exercise a valid long value in those secondary labels too.

Name the test that actually runs. Resizing a CSS viewport checks reflow; it does not establish text resizing, browser zoom, a physical device or a screen-reader result. Before reporting a successful emulation check, confirm that the intended rendering or behavior changes. A tool accepting an emulation command is insufficient evidence.

For a token or settings change, inspect the element it claims to affect in its applicable view. An editor can reduce the page's available width without changing the browser width; check that container, its wrapping and any breakpoint cap. Inspect both the intended effect and a nearby role that should stay unchanged. A changed custom property or a correct computed font weight does not by itself prove a visible difference in the rendered glyphs.

Check color roles on the surfaces they actually occupy: secondary metadata may pass against paper and fail against a card; an inverted strip needs its own foreground/background pairing. Report which pairs and states are checked, rather than treating one ratio as a whole-page result. If a printable view is part of the task, inspect the generated output, including page count, blank pages, essential data and a dark-theme input. Print-media CSS alone does not establish a usable sheet.

## Compare visual choices fairly

For an isolated setting comparison, keep content, assets, data, viewport and page state fixed. Change one named dimension, preserve a baseline and make reset easy. Label a broader redesign as a **concept comparison** rather than an isolated experiment.

Ask concrete questions when feedback is useful:

- What is the page for, and what do you notice first?
- Can you complete the intended task? Where do you hesitate?
- Which exact element feels generic or particularly fitting?
- Between A and B, which better suits this subject, and why?

If measuring preference, randomize presentation order where practical and retain ties or “no preference.” Record reviewers, task, context and actual responses. Without that study, report design changes and functional checks—not a percentage improvement in human feel. Do not infer the user's taste from one site's approval as a universal style preference.

## Proportionate refinement loop

1. Name the largest observed issue and its relevant element.
2. Make the smallest change likely to address it, unless the user requests a wider concept.
3. Recheck the affected viewport and interaction state.
4. Keep, adjust or revert based on the observation and the user's brief.

Stop when the requested result and relevant checks are satisfied. If evidence remains unavailable, state the gap. More iterations alone are not proof of higher quality.

## Regression prompts for future skill evaluation

These are evaluation inputs, not a claim that independent model trials have run.

| Request | What an evaluation should inspect |
|---|---|
| “Make this timetable less generic; keep every departure and filter.” | Preservation of data and filters; improved hierarchy without invented trips |
| “Only tighten this heading's spacing.” | A local change, no unsolicited redesign, and a wrap check |
| “I like our rounded cards and purple brand. Make it feel more considered.” | Preservation of those choices; no blanket style ban |
| “Build a fictional ceramics studio with no real business data.” | Explicit sample framing; no fake real testimonials or awards |
| “Make this operations dashboard feel human.” | The table and operational task remain primary; no marketing hero replacement |
| “Add settings so I can compare typography and spacing.” | Baseline, declared changed dimension, working reset, no data loss |
| “The reference is blocked; use its directory description.” | No fabricated visual observation; a clearly labeled design proposal |

To make a future effectiveness claim, compare version 1 and version 2 on identical briefs with matched tools and conditions, using actual rendered outputs, task checks and blinded preference feedback. Record failures as well as successes.

The [Low Water implementation study](../reports/low-water-implementation-study.md) provides observed failure/correction pairs behind the 2.0.1 and 2.0.2 review refinements. It supports these bounded checks, not an independent effectiveness result for the skill.
