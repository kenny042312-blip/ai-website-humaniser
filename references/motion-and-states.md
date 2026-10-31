# Interaction states and purposeful motion

Use for controls, asynchronous work, navigation overlays or requested animation. Adapted from [Elaya B7–B11](https://github.com/elayadesign/ai-design-skills/blob/4fdcdd52f15eda09da1257c303c860c13e0c879f/skills/landing-page-design/SKILL.md#b7-motion), with the source's upstream credit preserved in [the notices](../THIRD_PARTY_NOTICES.md). The changes below are design and implementation guidance, not measured performance gains.

## Define only the states the interaction needs

Before styling a control, know what activation changes and where feedback appears. A useful working matrix is:

| Situation | Expected visible result | Preservation and recovery |
|---|---|---|
| Rest, hover, keyboard focus, pressed | Recognizable affordance; focus remains visible | Hover is supplemental, not the only way to find an action; touch does not depend on it |
| Selected, expanded or current | A stable cue tied to the actual value | Use appropriate native/ARIA state; do not communicate selection by color alone |
| Real asynchronous wait | Local progress/status; stable surrounding layout | Prevent accidental duplicate submission when needed; retain entered data and a coherent focus location |
| Empty collection | Why it is empty and the relevant next step | Distinguish first use from no search matches; clear filters without deleting records |
| Validation or operation failure | Specific error near the affected input/action | Preserve valid input; show how to retry or correct; announce important feedback appropriately |
| Success | What actually changes and what the visitor can do next | Do not equate a local demo message with a server action, payment or sent email |
| Unavailable or disabled | Reason or prerequisite is understandable | Make unavailable functions identifiable without presenting a dead action |

A static link needs no invented loading or empty state. Do not show skeletons or slow down a local filter just to appear sophisticated. Use a skeleton when it meaningfully previews the pending layout, a progress indicator for actual measurable progress, or a concise status when that is sufficient. Keep loading semantics and final content understandable without the visual effect.

Links navigate; buttons change state or submit. A `#` placeholder is not a finished destination. Preserve browser back behavior and indicate the current route when navigation exists. For forms, test invalid values, a corrected retry and the actual successful outcome; native browser validation can be appropriate. Avoid disruptive alerts for routine field feedback.

## Give motion a job and a budget

Decide what the movement explains: an item's new position, a menu transition, changed state or a deliberately paced story. Select duration and easing for the distance, interruption and task. Do not inherit a mandatory 500ms delay for every click, prohibit linear progress, or replace a user's existing motion language without a reason.

For simple entrances, prefer composited transform/opacity effects when they achieve the result. Layout animation can cost more; profile and contain it if essential. Avoid using `transition: all` when only a small set of properties should animate. The [optional recipe](elaya-visual-recipe.md) includes the source's easing and timing values as starting examples, not browser-wide requirements.

For reduced motion, show essential information immediately in a stable final state. A restrained opacity transition is optional, not a mandatory replacement for every movement. A preference change must not leave content hidden halfway through an entrance. MDN describes this media feature as a request to reduce, remove or replace nonessential movement. [MDN reduced motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion)

## Navigation remains usable throughout transitions

Floating translucent navigation and a full-height mobile panel are aesthetic options. Choose them only when they support this site's composition and available space. Supply a readable non-blurred surface where needed. Check anchor targets and focused content are not covered by fixed bars.

Animate an icon change if useful, but update the accessible open/closed name and state accurately. Users should not wait for every menu item to finish entering before they can navigate. Keep reading order, click targets and keyboard order coherent. Avoid replaying a long stagger whenever focus moves.

Use deliberate modal or nonmodal semantics. A covering panel cannot leave invisible background links keyboard-active. Check focus entry, both Tab directions, Escape where supported, scroll containment, logical focus return and resizing while another dialog is active. Reuse the detailed [overlay checks](controls-and-variants.md) rather than implementing a separate inconsistent menu behavior.

## Reveal content without making it dependent on animation

Start from readable, visible HTML. Add decorative movement as progressive enhancement, with a fail-open path for unsupported APIs or script failures. Do not globally hide every section until an observer succeeds. Keyboard navigation and anchor navigation must still reveal the target immediately.

IntersectionObserver is suitable for threshold-based entrances, such as a section entering the viewport once. It is not a precise per-pixel scroll-progress sensor. Observe the relevant element, avoid heavy callback work and stop observing completed one-off reveals. [MDN Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

If genuine continuous scroll progress is necessary, measure the work and schedule it deliberately. `requestAnimationFrame` can coordinate DOM work with rendering, but wrapping a scroll handler in it does **not** itself reduce callback frequency. Use actual time-based throttling when needed, or select an appropriate platform animation/observer mechanism after checking support. [MDN scroll event](https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event)

An expressive large-type benefit section can be a valid campaign device. It is optional. For a word-by-word reveal, preserve one coherent accessible sentence, normal selection/wrapping and a fully readable static, reduced-motion and print state. Muted words must not turn essential information into unreadable content. Do not repeat the hero just to fill a mandatory section, and do not attach motion to a timetable or dashboard solely for decoration.

## Review the rendered transition

Test the start, intermediate and final state; rapid reversal; keyboard activation; scrolling past; and reduced-motion behavior where relevant. Check that animation does not move the focused control away from the user or change a setting's meaning. Test disabled scripts or an intentional enhancement failure when the implementation otherwise hides important material. Record which conditions actually run. Source code, accepted emulation commands and a successful build do not establish visible motion quality.
