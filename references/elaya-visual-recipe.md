# Optional recipe: Elaya's restrained product landing page

Load this only when the user requests this direction, or when it is an explicitly chosen concept that fits a new brief. Do not apply it automatically to an existing brand or call it a proven humanising formula. The user's design constraints and accessibility needs take precedence.

This reference preserves the concrete values from [Elaya's landing-page skill at commit 4fdcdd5](https://github.com/elayadesign/ai-design-skills/blob/4fdcdd52f15eda09da1257c303c860c13e0c879f/skills/landing-page-design/SKILL.md#part-b--visual-system). Values describe that source's recipe, not measurements from our website corpus or guarantees about current Tailwind defaults. [MIT notices and upstream credits](../THIRD_PARTY_NOTICES.md) apply to the adapted material.

## Direction and deliberate exceptions

The source combines a restrained sans-serif type system, flat surfaces, rounded nesting, a gradient-text hero, floating translucent navigation and decelerating entrances. Treat these as coordinated options for a product campaign. Removing the animation can still preserve the direction.

| Source choice | How to use it here |
|---|---|
| Geist, Manrope or Poppins; Geist Mono for functional code/data | Choose one suitable primary family and verify delivery, license and language coverage; do not load all of them |
| One family, no italic, no 900 weight, and exclusion of Inter/Roboto/Arial/Open Sans/Helvetica | A constraint for this optional concept only; preserve required brand fonts, emphasis semantics and legible fallback stacks |
| No hyphens in visible copy | Retain as a source preference, not a rule: accurate names, code, language and punctuation win |
| Nearest-lower scale snapping and fixed named styles | Reuse the scale when useful, but do not silently shrink existing content or discard a purposeful type role |
| No background gradients or single-sided card borders | Use flat surfaces for this concept; necessary dividers, selected-state indicators and other approved treatments remain valid |
| Mandatory animated tagline section | Optional expressive device; omit when redundant, distracting or outside the brief |

## Source type scale

Numbers below are source CSS-pixel values. The source also gives rem sizes assuming a 16px root. In an implementation, retain user text scaling and define appropriate fluid/narrow roles; do not force a 128px heading into a small viewport.

| Source step | Font size | Line height |
|---|---:|---:|
| xs | 12px | 16px |
| sm | 14px | 20px |
| base | 16px | 24px |
| lg | 18px | 28px |
| xl | 20px | 28px |
| 2xl | 24px | 32px |
| 3xl | 30px | 36px |
| 4xl | 36px | 40px |
| 5xl | 48px | 1 unitless |
| 6xl | 60px | 1 unitless |
| 7xl | 72px | 1 unitless |
| 8xl | 96px | 1 unitless |
| 9xl | 128px | 1 unitless |

## Source named text styles

Define only the styles the page needs as reusable classes or tokens. Preserve project naming when adapting an existing system. The labels below are visual names, not required HTML heading levels. Regular, medium and semibold conventionally map to 400, 500 and 600, subject to the chosen font's actual available weights.

| Style | Size / line height (px) | Weight |
|---|---|---|
| Heading 1 | 60 / 60 | Semibold |
| Heading 2 | 48 / 48 | Semibold |
| Heading 3 | 36 / 40 | Semibold |
| Heading 4 | 30 / 36 | Semibold |
| Heading 5 | 24 / 32 | Semibold |
| Heading 6 | 20 / 28 | Semibold |
| Title 1 | 20 / 28 | Medium |
| Title 2 | 18 / 28 | Medium |
| Title 3 | 16 / 24 | Medium |
| Title 4 | 14 / 20 | Medium |
| Title 5 | 12 / 16 | Medium |
| Body 1 | 16 / 24 | Semibold |
| Body 2 | 16 / 24 | Medium |
| Body 3 | 16 / 24 | Regular |
| Body 4 | 14 / 20 | Semibold |
| Body 5 | 14 / 20 | Medium |
| Body 6 | 14 / 20 | Regular |
| Button-lg | 18 / 28 | Semibold |
| Button-md | 16 / 24 | Semibold |
| Button-sm | 14 / 20 | Semibold |
| Button-Xsm | 12 / 16 | Semibold |
| Caption 1 | 14 / 20 | Medium |
| Caption 2 | 14 / 20 | Regular |
| Caption 3 | 12 / 16 | Semibold |
| Caption 4 | 12 / 16 | Medium |
| Caption 5 | 12 / 16 | Regular |

The source uses Heading for the hero/section hierarchy, Title for item leads or navigation, Body for running text, Button only inside actions, and Caption for metadata/helpers. It proposes kebab-case class names such as `heading-1` and `button-md`, and numbered extensions for additional roles. In this skill, names are project conventions, not a reason to rename an established system. Small text values are not automatically suitable for essential instructions or editable inputs.

## Source spacing and geometry

| Source token | Value |
|---|---:|
| Spacing-0 | 0 |
| Spacing-25 | 2px |
| Spacing-50 | 4px |
| Spacing-75 | 8px |
| Spacing-100 | 12px |
| Spacing-200 | 16px |
| Spacing-300 | 24px |
| Spacing-400 | 32px |
| Spacing-500 | 40px |
| Spacing-600 | 48px |
| Spacing-700 | 64px |
| Spacing-800 | 80px |
| Spacing-900 | 96px |

Source main-button padding is 8px vertically and 12px horizontally; check the resulting target size and label rather than treating padding alone as sufficient. Source radii use Tailwind steps. Verify the project's actual configuration rather than assuming a library version. For a nested gap under 32px, the source uses `inner radius = outer radius − gap` only when the result exceeds 2px; otherwise it leaves the inner shape square or unchanged. The example is a 16px outer radius with an 8px gap and 8px inner radius. See [visual-system geometry](visual-system.md) for the conditions under which this relationship fits.

## Source palette, hero and icons

Dark base-surface choices: `#000000`, `#181818`, `#1F1F1F`, `#272727`, `#313131`, `#131209`. These are alternative surfaces, not a complete semantic palette. Define text, action, focus and status roles separately.

The source's hero heading gradient runs left to right: `#FFFFFF` to `#9B9B9B` for a dark theme, or `#000000` to `#666666` for a light theme. Heading and subheading have a 680px maximum width, with meaningful phrase breaks. Adapt the maximum to the viewport and real copy. Supply a solid text fallback and check contrast across the actual surface.

Icon options are Phosphor, Solar or Iconamoon. The source excludes Material Icons/Symbols; this is not a quality finding and does not justify replacing a coherent existing set. Use the applicable assets' own licenses and accessible labels.

## Source motion values and navigation concept

| Element | Source starting values | Adaptation boundary |
|---|---|---|
| Layout/position transition | `cubic-bezier(0.22,1,0.36,1)`, 500ms | Use only where the distance and task justify it |
| Hover color/opacity | 300ms, source minimum 200ms | Direct feedback may need a different duration; no universal minimum |
| Menu links | Rise 24px, fade, 60ms steps with total stagger capped at 400ms | Shorten the steps for long menus; keep links usable throughout |
| Section entrance | Rise 32px, fade over 600–800ms, once | Threshold-triggered enhancement; content remains available on failure |
| Press feedback | Scale 0.98 or translate down 1px | Optional; do not move a delicate target or require touch hover |

The source's resting navigation floats below the top edge, centered and sized to its content, with a translucent blurred surface. The menu icon morphs between states; mobile navigation becomes a full-height blurred panel. These are concept options, not required behavior. Keep focus, scrolling and fixed-header offsets usable.

The source's large-type tagline sits separately below the hero, uses at least two lines and a style from Heading 3 through Heading 1, and moves words from roughly 25–35% tone/opacity to full text color in reading order. Reduced motion shows the final text immediately. If this effect is chosen, keep essential words readable, preserve the accessible sentence and avoid redundant messaging. Do not claim that one observer per word necessarily implements exact scroll progress. Follow [motion and states](motion-and-states.md) for fail-open behavior and the corrected distinction between animation scheduling and throttling.

## Evaluate the concept as a concept

This recipe changes several coordinated dimensions. Compare it with another direction using identical content, viewport and interaction state, and label the changed set. It is not a one-variable experiment and does not establish authorship. Keep any deliberate deviation that better serves the brief, and record the reason rather than silently claiming exact source compliance.
