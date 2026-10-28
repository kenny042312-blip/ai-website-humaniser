# Settings and controlled variants

Use only when a user asks for experimentation, settings or alternative versions. Keep an ordinary website's product interface focused on its visitors.

## Make settings meaningful

Expose the dimensions that the implemented page actually uses. A setting with no visible effect is a defect. Keep labels understandable; show units for numeric settings and the affected role or component.

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

When controls allow an unreadable or broken combination, indicate the concrete problem and offer a reset; do not silently change unrelated values. Check keyboard use and narrow layouts of the editor as well as the preview. For exported configurations, validate field types and supported options before applying them.

## Example experiment

For a fictional screening programme, compare aligned rows with a card layout using the same films, dates, access notes and actions. This is a layout concept comparison. Then, within the preferred layout, compare two display-type treatments while holding spacing and text fixed. Record the user's specific reason for preference. Do not label the winner a proven “human-made” template.
