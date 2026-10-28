# Low Water: applying and correcting the design guidance

**Observation dates:** 28–29 October 2026, Asia/Shanghai. **Scope:** one fictional ferry website and its requested design workbench, with local interaction checks and subsequent private publication. This is an implementation study with observed failures and corrections, not a representative website sample or a blinded preference experiment.

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

## Initial checkpoint: evidence and limits for 2.0.1

The local application checks include 11 passing model tests: supported presets, configuration round trip, invalid configuration rejection, actual differences, selected contrast calculations, traveller capacity, snapshot independence, library round trip, checkpoint migration, malformed-library rejection and atomic/idempotent library merge. Static checks find 76 unique HTML IDs and resolving assets, anchors, explicit labels and module imports. Original hosted-source hashes remain unchanged.

Browser inspection covers 1280×720, 390×844 and 320×568 states, the main sample-plan interaction, selected control effects, comparison/restoration, export/import, persistence and print. No console errors or horizontal document overflow are observed in the listed checks. Viewport emulation is not a physical iPhone test. The local notes retain screenshots, the generated PDF and measurements; these application artifacts and source are not distributed with this skill package. The separately packaged local candidate at this checkpoint has SHA256 `48bdb8c1ae5c54e5a606146d25139e6c6aff5d3a304a0da2d0857676239d5bcf`. This identifies the tested checkpoint, not a hosted deployment.

At this initial checkpoint, supported Sites access is unavailable, so the candidate remains local and the existing hosted Site is unchanged. The later publication and its limits appear below. No new external page inspections, independent generation trial, user preference result or percentage improvement is claimed. The patch's justified contribution is narrower: correct ambiguous guidance using specific observed failures, preserve the approved identity, and make experimentation more reliable.

## Transfer into 2.0.1

- [Controls and variants](../references/controls-and-variants.md): applicable-state checks, role-scoped tokens, stable editor presentation, exact-input recovery, actual comparison labels and optional saved-version semantics.
- [Visual review](../references/visual-review.md): actual preview width, adjacent unaffected roles, surface-specific contrast and generated-print inspection when relevant.
- [Patch validation](validation-v2.0.1.md): package checks and instruction-level scope review.

The main entrypoint stays focused on purpose, specificity, composition and proportionate review. The new guidance remains in the references used for the relevant task.

## Follow-up for 2.0.2: make experimentation reachable

These checks take place on 29 October 2026, Asia/Shanghai. They extend the same application case and add no corpus rows or external rendered references.

### Reach the effect and return

Card-specific settings are available while the specimen shows a timetable. A hint identifies the dependency, but the first implementation still makes the user leave the editor and find the page's layout selector. Direct Show cards, Show timetable, Show map & note and Show disclosure actions now reach the affected element. On a small screen the editor closes to expose it; Back to setting restores the originating control, query and scroll position.

With Card gap at 24, an evening filter and a saved 18:20 plan for two travellers, Show cards exposes two cards with a measured 24px gap. The filter, copy, saved version and £7.60 sample plan remain intact. A keyboard-triggered return check records the same 21px inner scroll position before and after navigation. At desktop width, the editor stays open while the necessary view changes. Navigation does not change the experiment's visual configuration or create a design Undo step.

### Visible focus requires a coherent overlay model

At 390×844, reverse Tab from the editor reaches a footer link at y700.78–729.78. The mobile panel covers the page from y253.20 downward, and a hit test confirms that it covers the focused link. A keyboard event reaches a valid element, but the user cannot see or use that focus target clearly.

The correction uses a native modal dialog on small screens and a nonmodal complementary panel beside the page at ordinary wide sizes. Native modal opening makes other content in the same document inert and uses the browser's top layer; a nonmodal dialog must close before opening modally. These mechanics follow [MDN's showModal reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal). Tab movement in both directions, Escape, naming and focus return are checked against the [WAI modal-dialog pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/).

An explicit boundary handler wraps Tab inside the mobile editor because the tested browser's native behavior alone permits reverse Tab to leave the first control for browser chrome. Escape closes the editor and returns focus to its opener. Resizing from mobile to desktop keeps the active control and query. If a sample-crossing dialog is already open, the responsive change closes the editor without stealing focus from that dialog. These are observed outcomes in the tested browser; no screen-reader or cross-browser conformance result is claimed.

### Height and secondary text reveal different failures

| Condition | Observed failure | Correction and recheck |
|---|---|---|
| 844×390 with the editor open | Only 25px remains for scrolling settings; the status footer reaches y430.53 outside the window | Compact header/search/navigation rows leave 200px for settings and place the status bottom at y390 |
| 320×568 with a valid 60-character unbroken saved name | The editor has 667px scroll width; the helper and status messages also overflow | Wrap those text roles; editor and document remain 320px wide, and helper/status scroll widths equal their own client widths |
| 320×390 with whole-panel scrolling | Returning to a preview must retain the outer scroll position as well as the inner region | Save both positions; Back to setting restores panel scrollTop 299 and Card gap appears at y125.52–149.52 |
| 390px with a 100-character unbroken headline | No overflow occurs; the existing wrapping already works | Keep the existing rule; a stress test does not automatically justify an edit |

At 640×360, the compact editor retains 170px of control space, its tabs remain 320px wide without overflow and the status ends at y360. At 320×180, the editor uses whole-panel scrolling. The sample-plan dialog is 288×144 inside the viewport, exposes its focused traveller field and scrolls to the Keep looking action on Tab. These are reduced-layout-space checks. They do not establish actual browser-zoom behavior.

A text-scale emulation attempt accepts scale 2 without changing the measured 20px studio title, 16px search field or 200px settings region at 844×390. It therefore supplies no evidence that enlarged text works. The override is reset. The [Chrome DevTools protocol](https://github.com/ChromeDevTools/devtools-protocol/blob/master/pdl/domains/Emulation.pdl) names the OS text-scale command; successful command acceptance alone does not prove that it affects this page. Physical-phone text scaling and screen-reader behavior remain untested.

### Publication and what the evidence proves

The application is subsequently published to its existing owner-private Site. Site version 4 uses source commit `81c6be18633634eca2bc44a0b82d3504ff29a467`; the native deployment result is `succeeded`, and the owner-only access policy stays unchanged. Service-authorized checks return HTTP 200 for all seven application files. The six CSS/JavaScript files match the prepared output byte for byte; HTML matches after removal of one platform-injected script. The version-4 source backup ZIP is 34,431 bytes with SHA256 `0d300afdd4dff387c7078d36d7940249fb426128a9dac1051b49a27bd3b89cd7`.

These observations verify deployment and served source. The normal hosted browser remains at sign-in/verification, so interaction evidence comes from a local preview using the matching application files. Printing while the mobile editor is modal produces one visually inspected page with all eight departures and fictional-service labels, and no editor content. The changed JavaScript passes syntax checks; 77 HTML IDs are unique and declared local assets resolve. No console warnings or errors occur in the focused follow-up checks. The unchanged models retain their earlier test record and are not unnecessarily retested.

### Transfer into 2.0.2

- [Controls and variants](../references/controls-and-variants.md) now asks for direct preview/return navigation where needed, deliberate modal versus nonmodal behavior, usable control space in short windows, and valid long-label checks at every displayed occurrence.
- [Visual review](../references/visual-review.md) now distinguishes DOM focus from visible focus and viewport reflow from verified text resizing or physical-device testing.
- [Patch validation](validation-v2.0.2.md) records package checks and the scope of the instruction review.

The app's 760px, 1050px and 500px thresholds remain local choices, not exported design rules. The skill's entrypoint and generic website workflow remain the same apart from the patch version. This follow-up supports more precise review instructions; it does not demonstrate improved user preference, commercial success or detectable human authorship.
