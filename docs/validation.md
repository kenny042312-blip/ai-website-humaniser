# Side A — validation record

Recorded 31 October 2026. This record describes the implemented example, not a controlled study of the skill's effectiveness.

## Local source observations

- Opening, programme and editorial sections receive rendered checks at 1440 × 1000, 768 × 1024, 390 × 844 and 320 × 700 CSS-pixel viewports. No document-level horizontal overflow appears at those measured widths.
- At 390 × 450, the film dialog retains reachable close/save controls, internal scrolling and visible keyboard focus. Tab and Shift+Tab wrap inside it; Escape returns to the opener.
- Day and format filters combine correctly. Sunday / 35mm gives zero matches; Show all screenings resets both filters and restores three films / six screenings.
- Saving, individual removal, reload persistence, chronological order, clearing and undo work. Empty-list navigation returns focus to the programme and releases the scroll lock.
- The downloaded text file contains the selected dates, titles, times, runtime, format and explicit fictional/non-reservation labels.
- Reduced-motion emulation changes scrolling to `auto`, sets image-transition duration to `0s` and leaves all three film entries visible. Overrides are removed after checks.
- Rendered images load and font loading completes. The final console inspection contains no captured errors or warnings.
- JavaScript syntax and data checks pass: unique screenings, date/weekday alignment, combined filtering, invalid/duplicate saved-ID removal and chronological sorting.
- HTML asset paths, fragment targets and IDs resolve. Selected contrast pairs measure 14.98:1 (paper/ink), 8.69:1 (muted/ink), 5.05:1 (orange/ink), 6.25:1 (dark copy/paper) and 4.36:1 (large editorial red heading/paper).

## Corrections from the rendered review

The small-screen feature title receives a full row to avoid fragmented wrapping. The editorial heading's mobile scale preserves its three-line relationship. Spaces remain when desktop line breaks disappear. Explicit dialog endpoint handling fixes an observed keyboard-focus escape. The editorial red is darkened on the light background.

## GitHub export

The showcase keeps the implemented layout, data, behavior and artwork. Root-relative asset paths become relative paths so the site works under a repository subdirectory. Canonical/social metadata points at the GitHub Pages destination. Private hosting metadata and absolute local file paths are omitted. Screenshots document the original rendered design; appearance is not a human-authorship score.

## Limits

Viewport reflow is not a physical-device test. Screen-reader, text-only zoom, cross-browser, storage-denied execution, social-preview-consumer and throttled-network testing are not performed. Selected contrast checks do not certify the whole site. Source/package checks are separate from hosted interaction checks. No user preference, conversion or authorship study runs, and no new million-site research coverage is claimed.
