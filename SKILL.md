---
name: ai-website-humaniser
description: Design or refine websites that feel specific to their subject instead of generic, using reference-led composition, content, and visual review. Use when a user asks for a more human-made feel; not for authorship detection.
metadata:
  version: "3.0.0"
---

# AI Website Humaniser 3.0

Create a site with a recognizable point of view whose content, composition and behavior follow from its purpose. “Human-made” is the user's design judgment, not a detectable authorship class. Do the requested work; the skill is not a reason to replace a small edit with a redesign or a research project.

## Choose the scope

- **New site:** establish the brief, content model and visual direction, then build.
- **Existing site feels generic:** inspect it first. Preserve useful content, working behavior, brand constraints and the user's accepted choices. Fix the largest evidenced mismatch before adding decoration.
- **Narrow request:** change the requested element. Use only the relevant guidance below.
- **Comparison or settings playground:** read [controls and variants](references/controls-and-variants.md). Do not add an editor to an ordinary website unless requested.

For composition choices or a vague “looks AI” complaint, read [design decisions](references/design-decisions.md). For final visual and interaction checks, read [visual review](references/visual-review.md). Read [research basis](references/research-basis.md) only when citing the study or needing reference examples. The full million-record report is background, not required context for every build.

Load additional guidance only for the task at hand:

| Task | Reference |
|---|---|
| A landing page, offer, campaign or conversion-copy revision | [Landing-page strategy](references/landing-page-strategy.md): visitor intent, evidence, section choices and actions |
| A substantial visual system or inconsistent components | [Visual system](references/visual-system.md): named text styles, spacing, nested geometry, icons and assets |
| New interaction states, menus or animation | [Motion and states](references/motion-and-states.md): useful feedback, readable fallbacks and motion limits |
| A public launch or changes to routes, forms or metadata | [Shipping review](references/shipping-review.md): actual destinations, indexing and preview checks |
| An explicitly requested Elaya-style direction or a fitting concept comparison | [Optional Elaya recipe](references/elaya-visual-recipe.md): attributed numeric starting values, not defaults |

The [v3 integration report](reports/research-v3.md) maps the external skill's guidance to additions, existing coverage and deliberate adaptations. Its style rules are design proposals, not new evidence from the website corpus.

## 1. Turn the brief into design decisions

Identify the audience, primary action, material the visitor must inspect, and the constraints that affect the decision. For a ferry page, the material is departures, destinations and exceptions; for a software tool, it may be a real workflow and its output. State reversible assumptions briefly. Ask only about missing facts that materially change the result.

Before styling a substantial page, write a compact working brief:

> **Visitor / task:** … **Primary content:** … **Decision-critical facts:** …
> **Visual direction and why it fits:** … **Existing choices to preserve:** …

Keep it proportionate; it can be a few working notes rather than a new deliverable.

For an offer page, also identify the arrival promise, what the visitor already knows, the actual conversion event and the evidence for its main claim. Use the landing-page reference to select an argument; do not give a dashboard, documentation page or small edit a marketing funnel.

## 2. Make the structure specific

Choose the primary content form before choosing components: timetable, article, product demonstration, comparison, directory, portfolio sequence or working dashboard. Put the visitor's deciding information near the relevant action. Use generic marketing sections only when the material warrants them.

Apply the **substitution check**: if swapping the logo and a few nouns makes the page fit an unrelated business, find what is missing from the content or structure. Add relevant, supported detail rather than gratuitous eccentricity. Never invent testimonials, customer logos, awards, prices, scarcity, results or history to create credibility. Mark fictional examples clearly.

## 3. Establish a visual grammar

For a substantial design, choose and explain the relationships that make it coherent:

- **Hierarchy:** what is noticed first, what explains it, and what stays quiet.
- **Composition:** alignment anchors, reading width, density and where content changes form.
- **Type roles:** display, reading, labels and numeric data where needed. Tune weight, measure, line height and wrapping together; a font swap alone is not a direction.
- **Surface and color:** which colors signal identity, action, state or grouping; when a rule, gap or container separates items.
- **Evidence and imagery:** show the actual product, work, place or process where it helps the visitor decide.
- **Behavior:** what changes, how the change is communicated, and how small screens preserve the task.

Use an existing design system when appropriate. A distinct direction can be quiet, dense, playful or polished. Do not force serif/mono pairings, negative tracking, asymmetry, texture, a fixed grid ratio, or zero cards into every project. The visual study contains counterexamples to those universal rules.

For a reference, record **what is observed → why it may help here → what must change for this brief**. Borrow the relationship, not another brand's logo, proprietary assets, copy or entire identity. A rendered reference, initial HTML and a directory label provide different evidence.

Define recurring text and spacing roles once using the project's existing tokens or a small coherent set. Visual style names do not determine HTML heading levels. Keep technical identifiers, accurate punctuation and language-specific typography intact. Prefer contextual decisions to font bans, mandatory animated sections or artificial numerical precision.

## 4. Build the page and its important states

Use real content lengths before refining spacing. Repeated entities can repeat; different information jobs should not be forced into identical panels. Give the main action a clear result. Implement the states the task requires, such as a selected filter, no matches, a validation error, a saved choice or unavailable data. Label prototype actions accurately.

Keep the visual direction through responsive changes: preserve hierarchy and relationships rather than shrinking every dimension equally. Choose reading order deliberately; allow a table to remain a table when comparison matters. Keep keyboard focus, legible text, semantic controls and reduced-motion behavior intact.

Build and refine a representative section and its relevant state before propagating it. Loading indicators require actual waiting; demonstrations must not fabricate activity. Essential content remains available if animation fails or motion is reduced. Finish the requested surface, then use the shipping reference only for launch details within scope.

## 5. Inspect, compare and refine

Inspect the rendered page at a wide and narrow viewport, including a section below the first screen and the primary interaction. A build or HTTP 200 is not a visual review. If browser access is unavailable, say which checks remain unverified.

Separate three questions:

1. **Does it work?** The visitor can complete the intended task.
2. **Does it have a coherent visual point of view?** Hierarchy, density, type, imagery and repeated details reinforce each other.
3. **Does this user prefer it?** Obtain feedback about exact elements; do not infer preference from the first two answers.

Fix the largest issue and recheck the affected states. When comparing options, keep the brief, content and viewport constant; change one declared dimension. If a concept changes several dimensions, label it a concept comparison and avoid attributing the result to one setting. Stop when the requested result and relevant checks are satisfied; do not endlessly add features for “humanisation.”

## Handoff

Show the result first. Briefly state the most consequential design choices, working interactions, meaningful validation limits and any fictional content. Distinguish measured observations from hypotheses. Do not claim a human-authorship score or a guaranteed improvement in preference or conversion. Publish only within the user's requested scope.
