# Han Che · Research & software

Verified live personal academic portfolio: **https://koreyoshie.github.io**  
Source: **https://github.com/KoreyoshiE/koreyoshie.github.io**

A researcher's notebook meets a cinematic digital exhibition. Built with Astro 7, TypeScript, custom CSS and GSAP. Static HTML carries all essential content. Self-hosted Newsreader and Manrope fonts, original procedural SVG artwork, cited research summaries, native disclosures and a no-JavaScript year-split explanation.

## Develop

Requires Node 24+ and pnpm 11.25.0.

```sh
corepack enable
corepack prepare pnpm@11.25.0 --activate
pnpm install --frozen-lockfile
pnpm dev
pnpm build
pnpm preview --port 4321
```

To publish a committed source change, run `pnpm deploy`; see [deployment details](docs/DEPLOYMENT.md).

For the browser suite, keep preview running on port 4321 and run `pnpm test`. It uses installed Chrome on macOS by default. Set `CHROME_PATH` to another installed Chrome/Chromium binary on other machines; set `SITE_URL` for production verification. `node qa-capture.mjs pass3` captures the five documented viewport sizes; `node qa-detail.mjs` captures reading pages locally. `pnpm format:check` checks source formatting.

## Structure and maintenance

- `src/pages/`: static home, research index and studies, project index and case studies, About, Photography, Contact, 404 and sitemap.
- `src/components/`: evidence visuals and no-JS fold explainer.
- `src/styles/global.css`: design tokens, responsive compositions, native transitions and motion fallback.
- `src/scripts/site.ts`: GSAP opening and bounded desktop scroll drift, mobile Escape handling.
- `src/data/photographs.ts`: approved photograph manifest; intentionally empty. Add local optimized originals with dimensions, meaningful alt text, captions and publication permission. Images link to the original image; no lightbox dependency is needed.
- `docs/`: rationale, provenance, skills, QA evidence and deployment guide.
- `scripts/publish.mjs`: reproducible static publishing branch deployment; `docs/examples/deploy.workflow.yml`: official Astro Actions migration option.

Update scientific statements against original repository evidence and revise CONTENT_PROVENANCE.md. Do not turn manuscript status into acceptance or imply the Shanghai weather catalogue represents all seasons equally. Do not publish restricted data or redistribute unlicensed research figures.

## CSI205TC Week 6 Lab · Part 2 evidence

| Evidence                 | Location                                                                                              |
| ------------------------ | ----------------------------------------------------------------------------------------------------- |
| Repository / source code | https://github.com/KoreyoshiE/koreyoshie.github.io · `src/`                                           |
| Website URL              | https://koreyoshie.github.io                                                                          |
| Deployment method        | GitHub Pages from the `gh-pages` static publishing branch (workflow credential limitation documented) |
| Screenshots              | [Visual QA captures](docs/screenshots/)                                                               |
| Verification             | [QA report](docs/QA_REPORT.md), [deployment record](docs/DEPLOYMENT.md)                               |

AI-assisted development was authorized in the task brief. This section records evidence; it does not claim the lab has been formally submitted.

## Documentation

[Design research](docs/DESIGN_RESEARCH.md) · [Design system](docs/DESIGN_SYSTEM.md) · [Motion specification](docs/MOTION_SPEC.md) · [Content provenance](docs/CONTENT_PROVENANCE.md) · [Skills](docs/SKILLS_USED.md) · [QA](docs/QA_REPORT.md) · [Deployment](docs/DEPLOYMENT.md)

Font licenses are included under `public/fonts/`. No license for unrelated research materials is implied by this website repository.
