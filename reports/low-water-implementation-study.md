# Low Water: applying and correcting the design guidance

**Observation dates:** 28–29 October 2026, Asia/Shanghai. **Scope:** one local fictional ferry website and its requested design workbench. This is an implementation study with observed failures and corrections, not a representative website sample or a blinded preference experiment.

The [v2 research report](research-v2.md) still provides the corpus analysis and ten attempted external page inspections. This addendum adds no external reference pages, crawl records or companies to those counts. It asks a narrower question: when the guidance is used on a real interactive specimen, which instructions need greater precision?

## The design constraint

Low Water presents a fictional Morrow Inlet ferry timetable. The user approves its harbor identity before this pass: a cream/ink/red palette, editorial headline, ruled departure table, drawn route map and keeper's note. The task is to improve that site and let the user experiment with detailed settings. The useful information remains the same departures, destinations, capacity, exceptions and sample fare in both timetable and card views.

The candidate exposes 46 visual properties and five editable text fields. Four coordinated concepts explore the same material. They are alternatives, not measured winners. A/B compares styles while retaining the current copy and sample selection. The Original reference preserves the original token values, including weaker contrast pairs; it includes the updated interaction code and is not a pixel-identical reconstruction of the previous application.

This preserves a specific design direction while making its relationships inspectable. Adding the editor to this project follows the user's experimentation request; it is not a recommendation to add one to every website.

## 1. A changed value can still be the wrong effect

The first workbench names a control Card gap. Changing it from 14 to 28 increases both the card gap and the space between a time-filter label and its input. The same variable also controls part of the narrow masthead. The value reaches CSS, but its scope contradicts its name.

The correction limits the token to sailing cards and keeps the unrelated role spacing at 14px. In the recheck, card gap is 32px while time-filter spacing remains 14px. The transferable check is to inspect the named component and one nearby role that should not change. A single successful computed-style measurement can miss unintended coupling.

The column selector exposes another failure. With the editor open, a 1280px browser leaves a 910px page canvas. A fixed three-column breakpoint rule overrides the selected column count. The correction makes the control a maximum, preserves smaller selected counts, and documents caps of three below 980px and two below 700px of page space. These values are Low Water's implementation choices, not universal breakpoints.

After correction, two columns in that editor canvas measure approximately 411px each. Selecting one column at a 320px viewport produces a 284px grid track; all eight card interiors have matching 282px client and scroll widths. The relevant size is the available preview container, not automatically the browser viewport.

## 2. Conditional effects need a declared context

Version 2 says, without qualification, “A setting with no visible effect is a defect.” The application reveals why that wording is too broad.

| Situation | Interpretation | Appropriate response |
|---|---|---|
| A card-only setting is edited while Timetable is visible | The setting has a legitimate view condition | Identify Cards as the affected view and make it easy to inspect |
| A responsive maximum exceeds the current layout cap | The setting has a declared width condition | Explain the cap; preserve smaller choices where they fit |
| Reduced motion overrides the disclosure duration | The override is intended behavior | Keep the motion alternative and explain precedence |
| CSS requests an intermediate font weight without a distinct available drawing | Computed weight alone does not establish a visual change | Record font availability and inspect the actual text |
| A fixed CSS rule discards every applicable chosen value | The binding or override is defective | Correct the rule and recheck the rendered component |

The patch replaces the universal statement with a requirement to verify the effect in its applicable view, width and state. Conditional behavior does not excuse a setting that never reaches the component it claims to control.

Other control checks demonstrate the distinction. Changing the map-frame proportion from 300 to 460 changes its measured height from 227.523px to 348.875px in the tested canvas; the map drawing keeps its proportions. Route stroke changes from 2px to 4px and the dash/gap pattern from 4/7 to 12/16. A 500ms disclosure-icon setting computes to 0.5s; explicit reduced motion changes it to 0s. A requested headline weight of 700 reaches both the main and emphasized text, without establishing which font file renders the glyphs.

## 3. Comparison quality depends on state and recovery

The expanded workbench keeps up to 12 independent named versions. Saving captures B even while A is visible. A can use Original or a saved version's style while retaining current copy. Restore visuals and Restore visuals & copy are separate actions. Existing saved versions do not silently change when B changes.

In an observed sequence, A displays the Field guide paper color `#edf1ee` while the current headline remains “The evening crossing.” B returns to `#1c2d2c` with that same headline. Visual-only restoration retains the headline; restoration including copy loads the saved headline; Undo returns the previous copy. Saving B while A is visible retains B's palette. Two explicit restores followed by Undo return the intermediate version instead of skipping both restores.

A saved 07:10 sample choice for two travellers at £7.60 remains present after restoring visuals and copy. This does not prove every application state is preserved, but it checks the particular separation required by this page. Comparison is more useful when a style change cannot silently alter the information or selection being judged.

Library imports validate the whole file before applying it. Repeated import skips identical version IDs; conflicting IDs and capacity overflow reject the import. A file containing a valid new first version and a corrupt value in a later entry leaves the existing library and B untouched in the browser check; the valid prefix is not partially added. Removal offers Undo during the same visit, restores focus to a useful control and avoids duplicating an entry that has already returned through import. The former single checkpoint migrates without deleting its earlier stored value. These are feature-specific recovery decisions, not a mandatory versioning architecture for ordinary sites.

## 4. Input recovery must repair the field as well as the preview

Exact numeric and hex inputs make small changes possible alongside sliders and pickers. In the tested headline control, 120 applies while 999 is rejected and the previous valid value remains visible. An early change-event-only implementation does not update during the fill interaction; valid input now applies immediately.

Another observed failure occurs after an empty headline edit. Reset restores visible text but leaves the field's custom validation error active. The correction restores the last valid value on blur and clears stale validation when synchronizing valid content. The recheck shows the original headline, a valid field and no added Undo entry for an unchanged reset. A preview that looks recovered can still contain an invalid form state.

The editor uses its own stable type, colors and focus treatment. This separates the controls needed for recovery from the experimental palette. That is especially useful here because arbitrary color values are part of the requested feature.

## 5. Check surfaces and output, not only the opening screen

The initial curated Quay secondary color scores 4.46:1 against its card surface. A small role-specific correction brings the selected main, secondary and accent text pairs to at least 4.5:1 against both paper and cards for all four curated palettes. A dark-theme annotation also needs a foreground/background correction on its inverted strip. This follows the [W3C contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) for the checked normal-text pairs; it is not a full accessibility-conformance result.

The first generated print PDF contains three pages, including a blank page. The corrected output is one compact timetable page with all eight departures, fares, notes and fictional-service labelling. The editor and decorative opening do not print; the dark palette is normalized for the sheet. Inspecting print-media CSS alone does not reveal that earlier blank page.

At a 320px viewport with 88px outer gutters, a 32px card gap and 32px card inset, the card metadata row exceeds its 58px content width by 14–20px. Allowing that row to wrap removes the measured child overflow while retaining its information. This boundary check is useful because the brief explicitly permits detailed adjustment. It does not exhaust every possible combination of the 46 controls.

The underlying ferry interaction also exposes a separate correctness problem: a form originally allows up to six travellers on a sailing showing three places. The corrected dialog rejects four and accepts three at £11.40, presents capacity and conditions, and focuses the saved confirmation. Native dialog behavior is reviewed with the [MDN dialog reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog). Functional correctness supports the visitor's task; it is not itself evidence of a preferred visual style.

## Evidence and limits

The local application checks include 11 passing model tests: supported presets, configuration round trip, invalid configuration rejection, actual differences, selected contrast calculations, traveller capacity, snapshot independence, library round trip, checkpoint migration, malformed-library rejection and atomic/idempotent library merge. Static checks find 76 unique HTML IDs and resolving assets, anchors, explicit labels and module imports. Original hosted-source hashes remain unchanged.

Browser inspection covers 1280×720, 390×844 and 320×568 states, the main sample-plan interaction, selected control effects, comparison/restoration, export/import, persistence and print. No console errors or horizontal document overflow are observed in the listed checks. Viewport emulation is not a physical iPhone test. The local notes retain screenshots, the generated PDF and measurements; these application artifacts and source are not distributed with this skill package. The separately packaged local candidate at this checkpoint has SHA256 `48bdb8c1ae5c54e5a606146d25139e6c6aff5d3a304a0da2d0857676239d5bcf`. This identifies the tested checkpoint, not a hosted deployment.

Supported Sites access is unavailable during these checks, so the candidate remains local and the existing hosted Site is unchanged. No new external page inspections, independent generation trial, user preference result or percentage improvement is claimed. The patch's justified contribution is narrower: correct ambiguous guidance using specific observed failures, preserve the approved identity, and make experimentation more reliable.

## Transfer into 2.0.1

- [Controls and variants](../references/controls-and-variants.md): applicable-state checks, role-scoped tokens, stable editor presentation, exact-input recovery, actual comparison labels and optional saved-version semantics.
- [Visual review](../references/visual-review.md): actual preview width, adjacent unaffected roles, surface-specific contrast and generated-print inspection when relevant.
- [Patch validation](validation-v2.0.1.md): package checks and instruction-level scope review.

The main entrypoint stays focused on purpose, specificity, composition and proportionate review. The new guidance remains in the references used for the relevant task.
