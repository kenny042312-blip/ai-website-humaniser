# Settings and controlled variants

Use only when a user asks for experimentation, settings or alternative versions. Keep an ordinary website's product interface focused on its visitors.

## Make settings meaningful

Expose dimensions that the implemented page actually uses. Name the affected role or component and show numeric units. Verify the effect on that rendered component in an applicable view and at the actual preview width; changing a CSS variable alone is insufficient.

Distinguish a defect from an inactive condition. A card control may require Cards view; columns may have a narrow-layout cap; reduced motion can deliberately override a duration; a font may lack a distinct intermediate weight. Explain the condition and make the affected view easy to reach. Fix a value that never reaches its intended component, or changes unrelated roles. In the Low Water test case, a card-gap token also changes filter spacing, while a fixed breakpoint rule ignores the selected column count. Both need scoped corrections, not a global restyle.

Keep the editor's own type, surfaces and focus treatment independent of the specimen's experimental tokens. Otherwise an unreadable experiment can also hide the controls needed to recover it. When precise tuning is requested, pair a slider or picker with an editable number or color value. Incomplete input should retain the last valid preview; correction, blur or reset should restore a coherent valid field state.

| Group | Useful editable properties | Dependencies to preserve |
|---|---|---|
| Typography | Family per role, size, weight, line height, tracking, measure, alignment | Real text wrapping, fallback fonts, supported weights and glyphs |
| Composition | Container width, gutters, columns, content order, section and row spacing | Reading order, narrow-layout behavior, data relationships |
| Surfaces | Background, text, border, accent, radius, shadow | Distinct action and status meanings; readable combinations |
| Repeated content | Row/card form, metadata placement, item gap, divider weight | Stable item identity, sorting, filters and actual data |
| Imagery | Crop, aspect ratio, position, caption placement | Subject visibility, intrinsic dimensions, alternatives |
| Interaction | Active/hover/focus appearance, density, disclosure style | Clear state, keyboard use and focus visibility |
| Motion | Duration, easing, amplitude where implemented | Reduced-motion alternative and readable static states |
| Responsive rules | Breakpoints, stacking, label placement, sticky behavior | Access to essential information at every supported width |

Separate **content**, **layout**, **style**, and **behavior** values in state so a visual reset does not erase edited text or records. Show what a reset will affect. Make bulk import/export or presets optional unless requested.

## Preserve an inspectable baseline

Store a named baseline, current settings, and the changed properties. If an application persists settings, version the schema and handle missing or unsupported values explicitly. Prefer one source of truth for shared tokens; avoid scattered overrides that make the editor misleading.

Derive preset names, comparison labels and the change list from the actual configuration. Undo, imports and restores must not leave a previous preset's label attached to different values. Validate an entire import before applying any part; test one invalid value late in the file to expose partial writes.

A compact schema might contain:

```json
{
  "schemaVersion": 1,
  "presetName": "Current direction",
  "typography": {
    "display": {"family": "project display stack", "weight": 600, "sizeRem": 3, "lineHeight": 1.1, "trackingEm": -0.02},
    "reading": {"family": "project reading stack", "sizeRem": 1, "lineHeight": 1.5, "measureCh": 64}
  },
  "layout": {"maxWidthRem": 72, "gutterRem": 1.5, "rowGapRem": 1},
  "surfaces": {"radiusRem": 0.5, "dividerPx": 1},
  "motion": {"durationMs": 160, "respectReducedMotion": true}
}
```

These numbers are illustrative starting values, not research-derived optima. Adapt the schema to the existing site. Do not add a configurable property that the renderer cannot apply.

## Show the difference honestly

- **Isolated variant:** same content, data and state; one declared variable changes. Example: row spacing changes while type and container width stay fixed.
- **Concept variant:** several coordinated choices change. Show the full changed set. Do not claim a preference is caused by one token.
- **Responsive comparison:** compare the same content at different widths and explain deliberate reordering; it is not a style experiment.

Use side-by-side views when the available width keeps both readable. Otherwise use an explicit A/B switch that preserves scroll, selection and data where feasible. A small change summary should identify actual before/after values. Include a reliable return to baseline.

If saved versions are requested, store independent snapshots. State whether Save captures the current editable design or the visible comparison reference. Give a visual-only restore a distinct meaning from restoring visuals and copy. A visual comparison can intentionally show saved styles with current copy; label that choice. Keep explicit restore actions as separate Undo steps, even when rapid; coalesce only continuous editing where that matches the user's action. A no-change action should not create a misleading recovery step. Handle duplicate imports, version limits and removal recovery in proportion to the feature.

When controls allow an unreadable or broken combination, indicate the concrete problem and offer a reset; do not silently change unrelated values. Check keyboard use and narrow layouts of the editor as well as the preview. For exported configurations, validate field types and supported options before applying them.

These refinements come from the [Low Water implementation study](../reports/low-water-implementation-study.md), a local application test rather than new million-site evidence or a preference benchmark.

## Example experiment

For a fictional screening programme, compare aligned rows with a card layout using the same films, dates, access notes and actions. This is a layout concept comparison. Then, within the preferred layout, compare two display-type treatments while holding spacing and text fixed. Record the user's specific reason for preference. Do not label the winner a proven “human-made” template.
