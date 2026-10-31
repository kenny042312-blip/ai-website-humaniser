# A visual system that stays specific

Use when building a substantial design or correcting inconsistent styles. This adapts the reusable-style and geometry ideas in [Elaya B1–B6](https://github.com/elayadesign/ai-design-skills/blob/4fdcdd52f15eda09da1257c303c860c13e0c879f/skills/landing-page-design/SKILL.md#part-b--visual-system); it does not make their selected theme universal. See [attribution](../THIRD_PARTY_NOTICES.md).

## Give repeated text explicit roles

Define a style once rather than applying a new size/weight combination wherever text appears. Reuse the project's existing names; create only roles the content needs.

| Role | Controls to define together | Review against |
|---|---|---|
| Display / section heading | Family, size, weight, line height, tracking, measure, responsive changes | Actual long titles, fallback metrics and meaningful phrase breaks |
| Item title | Weight, size, line limit only when appropriate, relationship to metadata | Scanning a real collection, not one ideal item |
| Reading copy | Measure, size, leading, paragraph spacing | Extended text and links at the actual content width |
| Action label | Weight, label length, padding and target area | Focus, narrow width, translation and busy state |
| Caption / helper / status | Size, contrast, proximity to its referent | The surface it occupies and important long messages |
| Numeric or code content | Alignment, numeral features or suitable mono, units | Comparison, supported glyphs and copyability |

A visual class such as `display` or `heading-1` does not choose the HTML element. Preserve meaningful heading hierarchy regardless of appearance. A large paragraph is not automatically an H1; a compact section title can still be an H2.

Use the established type scale where it fits. If a new value is needed, decide whether it is a reusable role or a justified exception, and document it once. Do not silently round every size down to match a framework. Avoid fixing a wrap by reducing essential text until it becomes difficult to read.

Choose fonts for the subject, language coverage, available weights, licensing and delivery constraints. One family can provide sufficient variety; a purposeful second family can also fit. An installed weight or declared fallback stack is not proof that the desired glyphs render. Brand-preserving work does not ban Inter, Arial, italics or heavy display weights.

For short headings, `text-wrap: balance` can help distribute lines; `pretty` can improve some longer wrapping. Neither guarantees an orphan-free result in every language and browser. Prefer suitable measure and copy over brittle forced breaks. Scope deliberate breaks to the layouts where they work, preserve accurate text, and inspect fallback behavior. [MDN text-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-wrap)

## Encode spacing relationships

Choose a modest primitive scale and map it to roles: control inset, item gap, group gap, section gap and page gutter. A scale makes repetition easier to maintain; it does not mean every dimension must be a multiple of one number. Optical correction, a one-pixel rule, safe areas and content-dependent sizing can need exceptions.

Keep related controls close and distinct decisions farther apart. Give labels, helpers and errors a consistent relationship. Do not increase every gap equally to make a page feel expensive. Check real content and responsive containers before propagating a token. The [settings reference](controls-and-variants.md) explains how to scope tokens and keep editor controls independent of a specimen.

## Refine surfaces and nested geometry

Use a surface, border, rule or gap because it expresses a relationship. Keep elevation meaningful; a repeated shadow is not evidence of depth in the information model. Single-sided dividers and gradients remain valid when they serve the chosen direction.

For concentric rounded rectangles with a uniform inset, an initial geometric relationship is:

```text
inner corner radius ≈ max(0, outer corner radius − inset)
```

For example, a 16px outer corner with an 8px inset suggests an 8px inner corner. Account for borders, unequal padding, elliptical corners and optical appearance before applying it. A loosely placed photo is not necessarily concentric. The source's under-32px-gap and over-2px-result cutoffs belong to its optional recipe, not a general law.

Separate base, raised and inverted surfaces from action and status colors. Check actual foreground/background pairs, including hover, focus, disabled and helper text. A gradient heading needs a readable solid fallback and contrast across its full background. Dark mode needs a coordinated set of color roles; changing only the page background can leave controls and media unreadable.

## Make assets belong to the system

Reuse an existing icon family when present. Otherwise select a consistent visual weight, grid and optical size. The source lists Phosphor, Solar and Iconamoon as options; they are not compulsory dependencies, and another coherent set can work. Check the chosen asset's own license. Do not assume this skill's notices license the fonts, photos or icons mentioned in it.

Use text labels for unfamiliar actions. Give icon-only controls an accessible name; keep decorative icons out of the accessibility name. Match state and meaning, not just silhouette. Avoid mixing unrelated filled and outlined treatments without a purposeful distinction.

Use real, authorized product/work/place assets where available. A demonstration should answer a visitor question and use internally consistent sample data. Keep intentional crops and subjects visible at narrow sizes. Reserve media dimensions to limit layout movement, supply meaningful alternatives for informative imagery, and use empty alternatives for purely decorative images. Do not duplicate one portrait across supposedly different people or turn stock imagery into a claimed customer endorsement.

If a concrete numerical starting point helps a new campaign, the [optional Elaya recipe](elaya-visual-recipe.md) preserves the source's tables and visual relationships. Choose it for a declared direction; do not automatically load or apply it to every site.
