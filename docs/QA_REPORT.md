# QA report · 23 October 2026

## Local verification

Production build succeeds: 11 static pages including 404, plus sitemap XML. Playwright ran against installed Google Chrome. **31/31 tests passed** on the second-review implementation and again after final source refinements. Full-page home screenshots captured and visually inspected in three intentional review cycles at 1440×900, 1280×800, 768×1024, 390×844 and 375×667. Each cycle's JSON metrics reports no horizontal overflow and no page errors at these widths.

- 50 route/viewport combinations across ten content pages: successful status, one h1, no broken images, no failing asset responses, no page overflow, no JavaScript page errors.
- 20 axe-core scans (ten pages at desktop and small mobile), WCAG A/AA through 2.2 tags: zero reported violations.
- Native mobile navigation: Enter, links, Escape and focus restoration pass.
- Method disclosure, year selection, keyboard skip link and reduced-motion final state pass.
- No-JavaScript mode: all ten pages remain readable; native methods and year selection work.
- Every discovered internal navigation target resolves successfully.

## Visual review log

### Pass 1 · Structure

Captured `pass1-*.png` and inspected desktop/mobile full pages plus viewport crops at desktop, tablet and small mobile. Editorial hierarchy, alternating research layouts and clean stacking worked. Identified undersized evidence captions and metadata, plus tablet research panels needing more room. Corrected caption sizing, body copy and tablet chart placement.

### Pass 2 · Typography, composition, interaction

Captured `pass2-*.png` at all five widths and additional research, projects, About, Photography and Contact pages at 1440 and 390. Reviewed full research mobile, projects desktop and About desktop. Added the native year-split explanation; kept original values and a common chart scale. Found an isolated next-study arrow at a narrow width; bound it to the preceding word. Source formatted for maintenance, font subsets self-hosted and preloaded.

### Pass 3 · Polish and responsive verification

Captured `pass3-*.png` and `final-viewport-*.png`; inspected all five widths using review strips of actual captured pages. Rechecked tablet chart scale and small-mobile wrapping. Reduced procedural SVG point density without changing the visible composition, added explicit feedback for utility links, target scroll margins and footer safe-area spacing. All five screenshot metrics remain free of overflow and page errors. Production verification is recorded below.

## Web design guidelines audit

Original Vercel guidelines fetched for the source review. Findings addressed:

- `src/layouts/Layout.astro`: critical fonts needed preload → two self-hosted font preloads added; explicit dimensions and skip link present.
- `src/styles/global.css`: utility links lacked clear hover feedback → underline states added; focus visible; no transition-all or zoom restriction; native controls and reduced-motion fallback retained.
- `src/pages/research/shanghai-ozone.astro`: methods could benefit from an inspectable model split → native labelled radios added; no gesture-only or JS-only control.
- `src/components/OzoneChart.astro`: winter bar minimum width could exaggerate a small proportion → removed minimum; common baseline and numeric values preserved.

Intentional guideline deviations: first-person personal copy follows the brief; headings use sentence case; one sub-second clip-path reveal follows the cinematic brief. No continuous autoplay, mandatory loading screen or scroll hijacking. A brief clip-path reveal is a deliberate exception to the guideline's transform/opacity-only preference.

## Limits

Automated accessibility scans do not establish complete WCAG conformance. Real assistive-technology sessions, physical phone testing and Safari/Firefox testing have not been performed. Restricted research inputs were not rerun. Photography stays empty pending approved originals. Lighthouse lab scores are reported separately below; they do not measure field INP or real-user performance.

## Lighthouse mobile lab audit

Lighthouse 13.5.0 against local production preview, simulated mobile: **98 Performance / 100 Accessibility / 100 Best Practices / 100 SEO** on both audits. FCP 1.2s, LCP 2.4s, TBT 0ms, CLS 0, Speed Index 1.9s. The full rerun is in `lighthouse-mobile.json`. A non-scored visible-label/name finding on the linked pipeline was fixed by allowing the accessible name to derive from its visible contents. The final axe suite includes WCAG 2.1 A as well as AA tags, correcting the earlier scan configuration's omission of that tag.

## Production verification

Public URL **https://koreyoshie.github.io/** verified on 23 October 2026. GitHub Pages reports `built`, source `gh-pages:/`, HTTPS enforced. The successful initial deployment is [Actions run 39891414958](https://github.com/KoreyoshiE/koreyoshie.github.io/actions/runs/39891414958).

The same **31/31 Playwright tests passed against the public HTTPS site** (about 1.2 minutes), including 50 route/viewport combinations and 20 axe scans. `docs/test-results-production.json` contains the report; machine-specific workspace paths are normalized. Production screenshots at all five sizes are saved as `production-*.png` and `production-viewport-*.png`, and were visually inspected. The native in-app browser also opened the live home and confirmed its identity and working navigation.

HTTP checks confirmed home, Research, Projects, About, Photography and Contact return 200; SVG, WOFF2 and sitemap load with appropriate MIME types. An unknown URL returns 404. No page errors or overflow were detected in production captures. The final local Lighthouse rerun retained 98/100/100/100, and its label-name audit passes. These are local lab scores, not a claimed production/field score.

## Quality-gate status

Complete: original visual concept; cohesive typography; restrained entrance/scroll/hover/page transitions; evidence-backed content; five responsive widths; keyboard/skip/menu checks; reduced-motion and no-JS checks; internal links/assets; build; three visual passes; deployed HTTPS site; production verification; source and documentation committed. Research repositories were preserved.

Remaining boundaries: approved photographs are absent; Safari/Firefox, physical-device and screen-reader sessions are untested; official Astro Actions automation is prepared but inactive because both existing integrations lack workflow-file write permission. Publishing works through the documented static branch command. No lab-submission claim is made.

Final repeat-publish check: Pages run 39893031207 succeeded. The production source marker matches source commit 0038e1658d6026863589a1512963a1602066587a. SHA-256 checks confirmed the home, both research studies, artwork and both fonts match the final local build. The source working tree was clean before publishing.
