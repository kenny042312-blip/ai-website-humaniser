# From a generic page to a specific design

Use this reference for substantial composition work or when feedback is vague. These are conditional design proposals informed by the [study](research-basis.md), not statistical laws about authorship.

## Diagnose before restyling

| Visible symptom | Check before changing | Useful response | Counterexample / limit |
|---|---|---|---|
| The page could belong to any business | Can a visitor identify its actual offer, constraints and next step? | Replace empty claims with the relevant artifact: programme, work sample, workflow, specification or comparison | A deliberately minimal brand page may need very little copy |
| Every section looks equally important | Are unrelated jobs forced into the same repeated component? | Change the content form where the job changes; preserve rhythm within true collections | A catalogue often benefits from uniform items |
| An oversized heading delays useful content | Is the heading helping orientation, or consuming the entire first view? | Adjust the heading's measure and space budget; bring deciding information forward | A campaign or editorial opener may justify a large opening |
| The page is visually flat | Are primary, supporting and secondary information using indistinguishable treatments? | Create contrast in scale, weight, placement or density around the actual priority | A dense reference should not exaggerate every heading |
| Decoration feels unrelated | Can the motif be explained through the subject, material or interaction? | Replace incidental shapes with relevant evidence or remove them | Playfulness can fit an art community, as the p5.js case illustrates |
| The site looks like a collection of components | Do surfaces, radii, borders and shadows describe meaningful groups? | Define a few surface roles; use gaps or rules where a box adds nothing | MDN and Cloudscape demonstrate useful bordered groupings |
| Typography feels accidental | Are fonts assigned roles, or merely alternated? Do real lines wrap well? | Tune actual headings and paragraphs together; check fallback rendering | One well-used sans family can supply the whole system |
| It looks designed only for the opening screen | Does the next section repeat the hero or lose the visual language? | Carry alignment, labels and imagery logic into content and utility areas | Section variation is useful when the content changes |
| Mobile feels like a compressed desktop | Does the reading order still match the decision? | Reorder or regroup deliberately; preserve comparison and usable controls | Hiding essential fields to fit is not a solution |
| A button looks convincing but does nothing | What should change after activation? | Implement the observable outcome or label the prototype accurately | Local demo state is acceptable when clearly described |

Prioritize the issue that most affects the user's brief. Do not apply every row as a mandatory makeover.

## Choose a content form by the visitor's job

| Job | Central material | Composition to consider | Details that make it particular |
|---|---|---|---|
| Find a departure, appointment or event | A dated programme with exceptions | Aligned rows, timetable or calendar with adjacent conditions | Timezone, duration, access, cancellations, sold-out states when applicable |
| Understand a software product | One workflow, its inputs and output | Product evidence beside concise explanation; staged detail below | Real UI labels, realistic data, compatibility, constraints |
| Discover stories or work | A meaningful collection | Editorial index, grid or ordered sequence with metadata | Subject, author, date, medium, project role, credits |
| Learn or look up a concept | Explanation, examples and references | Stable navigation, reading column, local index, useful examples | Prerequisites, parameter names, limitations, cross-references |
| Compare alternatives | Shared decision attributes | Table or aligned comparison; exceptions remain visible | Units, inclusions, exclusions and basis of comparison |
| Complete an operational task | State, records and actions | Dense workspace with a clear active object | Status, ownership, change feedback, empty and error states |
| Consider a small service or place | Offer, practical details and evidence | Direct introduction plus actual work/place/process | Location, availability, contact route and constraints, if supplied |
| Explore an expressive concept | A story, artwork or interactive experience | Subject-led sequence; motion only where it contributes | Authored material, pace, captions and a usable non-motion route |

The timetable and service rows are transfer hypotheses from the research and previous fictional experiments, not newly surveyed sectors. Avoid pretending the developer-heavy corpus represents every industry.

## Turn a reference into a decision

Use a short note, not a catalogue of attractive features:

> **Observed:** Basecamp's inspected desktop view gives substantial space to a product workspace; its mobile view places the headline and action before that workspace.
> **Interpretation:** The product itself can carry explanation, while the reading order changes with space.
> **Transfer:** For an inventory tool, show a believable stock adjustment and its resulting record; on narrow screens, explain the task before the detailed table.
> **Do not transfer automatically:** its branding, exact typography, copy, or claims about customers.

This note's purpose is to justify a decision. It does not prove that the decision increases conversion or perceived authorship.

## Work at the level of relationships

- **Hierarchy:** decide the primary subject before choosing a display size. A small heading in a narrow column can be intentional; a large heading can also be intentional.
- **Measure and wrapping:** tune width, font metrics, size and line height together. Use the actual longest relevant title, not placeholder text. Inspect local-language and fallback-font behavior when they are in scope.
- **Alignment:** give related information shared anchors. Departures align by time; metadata belongs consistently beside the item it describes. Offsets need a reason.
- **Density:** concentrate related information and separate distinct decisions. Large empty intervals everywhere do not create a useful rhythm.
- **Boundaries:** a card describes an independent item; a rule can separate rows; whitespace can separate sections. Select the boundary from the relationship.
- **Color:** distinguish brand accent, action and status. If the same bright treatment marks everything, it loses hierarchy. Never rely on color alone for critical meaning.
- **Imagery:** choose a product state, place, process, diagram or work sample that answers a visitor question. Keep aspect ratio, crop and caption behavior coherent.
- **Motion:** use it to reveal state or explain a relationship when useful. Review the static result and reduced-motion path; an unrendered animation is no reference evidence.

Avoid turning these into a fixed theme. The research contains no optimum font size, radius, palette, grid ratio or animation duration.

When these relationships need a reusable implementation, use [visual system](visual-system.md) for named text roles, spacing and nested geometry. For a landing page's argument, use [landing-page strategy](landing-page-strategy.md). Keep the visitor's task primary; a named style or an offer outline is a tool, not a mandatory page template.

## Three transfer examples

These are fictional implementation proposals, not outcomes of user testing.

**A neighbourhood film programme.** Replace equal promotional feature cards with a dated screening list. Keep titles, times and access details comparable. Use a small editorial note as a second voice. If the user wants a poster-like direction, test it without obscuring the schedule. Do not fabricate real reviews or ticket availability.

**A repair workshop.** Make the repair process and accepted items concrete using supplied facts. Pair a real work image with the relevant step or service. A rough texture is optional; it cannot substitute for an intelligible offer. Keep unknown prices and turnaround times unclaimed.

**A software dashboard.** Retain the dense table if it supports scanning. Refine alignment, column priority, active states and feedback before adding a marketing-style hero. Demonstrate one actual state transition. Do not add fake activity to make the screen appear busy.
