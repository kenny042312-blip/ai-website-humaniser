# Finish the requested website surface

Use when launching a site or changing its routes, forms, navigation or metadata. Do not turn a local typography edit into a launch project. This adapts [Elaya A7 and B10](https://github.com/elayadesign/ai-design-skills/blob/4fdcdd52f15eda09da1257c303c860c13e0c879f/skills/landing-page-design/SKILL.md#a7-seo-and-aeo), with technical claims checked against primary documentation on 31 October 2026. See [attribution](../THIRD_PARTY_NOTICES.md).

## Real destinations and recovery

Check the main action from activation to its intended outcome, with the actual backend if that exists. A prototype can store local sample data, but its labels must make that boundary clear. Do not add production tracking, analytics, email sending or another service merely to complete this checklist.

Verify navigation destinations, a way back, the current-page cue and any downloadable asset. Test a direct load and refresh of an internal route, not only navigation from the homepage. If routing exists, a designed not-found view should offer recovery and the server should return the appropriate status where the hosting model permits it. A friendly error page served as HTTP 200 is not a confirmed HTTP 404. Record a platform limitation rather than declaring it fixed. [Google HTTP status guidance](https://developers.google.com/crawling/docs/troubleshooting/http-status-codes)

For real forms, use appropriate labels, field types, required-field and format checks, clear errors, retained input and a coherent success state. Client-side checks improve feedback; they do not replace validation on a receiving server. Avoid rejecting legitimate names or international formats through unnecessary restrictive patterns. Do not create an apparent submission endpoint that discards real input.

## Search intent and visibility

Decide from the owner's intent whether a page should be discoverable. An evergreen page with useful, relevant content may fit search; a duplicate campaign page or private prototype may not. Do not automatically mark every ad page `noindex`, or remove an existing indexing policy during a visual edit.

For an intended public search page, use an accurate unique title and description, meaningful headings, relevant internal links and an appropriate canonical URL if required. Keep these aligned with visible content and the actual deployed URL. Search engines can choose different displayed snippets; metadata is not a ranking or presentation guarantee.

When exclusion is requested, `noindex` belongs in the page's robots meta tag or an applicable response header. An unlinked path is not a reliable exclusion method. For Google to observe a `noindex` directive, the crawler must be able to access it; blocking that page in robots.txt can prevent this. `noindex` is not authentication and does not protect private content. Preserve the site's existing access controls. [Google noindex documentation](https://developers.google.com/search/docs/crawling-indexing/block-indexing)

Use visible questions and answers because they help readers. Structured data must accurately describe visible supported content and meet the target platform's current rules. Do not auto-add FAQ schema as a promise of search enhancements: Google's changelog states that FAQ rich results no longer appear from 7 May 2026 and that its documentation is removed in June. Recheck current platform support when that feature matters. Do not promise inclusion in AI answers from a FAQ or an “AEO” label. [Google Search updates](https://developers.google.com/search/updates)

## Identity and link previews

Add an appropriate favicon and useful social metadata when publication includes sharing. For Open Graph, supply the actual title, type, image URL and canonical page URL, with description and image alternative text where useful. Check the image exists and its crop is legible at preview size. A tag's presence is not a verified social preview; report an actual consumer preview only if one is inspected. Do not expose private page content in public preview assets. [Open Graph protocol](https://ogp.me/)

## User-facing completeness

- Provide a usable skip link where repeated navigation makes it useful, sensible landmarks and heading structure, visible focus and keyboard-operable controls.
- Review informative image alternatives in context; purely decorative images should not create repetitive spoken clutter.
- Verify long labels, narrow and short windows, relevant errors and empty states. The source's 390px check is a useful sample, not a universal device guarantee.
- Link approved privacy/terms information when relevant and available. Do not invent contractual promises or add dead legal links to look complete. If production needs unknown legal text or consent behavior, record that specific dependency. Do not insert a cookie banner in a site without establishing its actual data use and requirements.
- Check that configured fonts and media load and that important content stays useful with fallbacks. Fix observed layout movement or broken imagery before adding decorative motion.

Use [visual review](visual-review.md) to record passes, failures and unchecked states. Keep functional behavior, visual inspection, public delivery, accessibility evidence and preference evidence separate. Publish through the project's supported workflow only when the user's scope includes publication; preserve its identity and audience.
