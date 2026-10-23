# Deployment

Target: https://koreyoshie.github.io  
Repository: https://github.com/KoreyoshiE/koreyoshie.github.io

## Active method: static publishing branch

GitHub Pages is configured to deploy `/` from the `gh-pages` branch. Astro generates static HTML in `dist/`; `.nojekyll` prevents Jekyll processing. HTTPS is enforced. The user-site repository name means the production base path is `/`; Astro's `site` is `https://koreyoshie.github.io` with trailing-slash routes.

Source remains on `main`; generated files remain on `gh-pages`. GitHub creates its own **pages build and deployment** Actions run for this branch source. There is no backend or paid service.

## Reproduce and publish

With Node 24, pnpm 11.25.0, Git and an authenticated GitHub CLI available on PATH:

```sh
pnpm install --frozen-lockfile
pnpm build
pnpm preview --port 4321
# In another terminal, complete browser checks:
pnpm test
# Commit and push reviewed source changes before publishing:
git add .
git commit -m "Describe the change"
git push origin main
pnpm deploy
gh run list --repo KoreyoshiE/koreyoshie.github.io
```

`pnpm deploy` rebuilds and runs `scripts/publish.mjs`. The script requires clean committed source, verifies the repository URL, clones the existing publishing branch into a temporary directory, replaces only generated contents, writes the source commit to `source-version.txt`, commits and pushes without force. The temporary directory is removed afterward. It preserves publishing history. Set `GH_PATH` if gh is outside PATH. Do not publish unrelated source or restricted research data.

A source push alone does **not** publish a new build in this fallback configuration; run `pnpm deploy`. Watch the GitHub-generated Pages run, then verify live routes and assets.

## Official Astro Actions workflow: prepared migration

The requested official [Astro Pages workflow](https://docs.astro.build/en/guides/deploy/github/) is prepared in `docs/examples/deploy.workflow.yml`: checkout v7, withastro/action v6, Node 24, pnpm 11.25.0 and deploy-pages v5, with contents-read/pages-write/id-token-write permissions. Latest action release tags were checked through the original GitHub repositories.

The initial CLI push was rejected: “refusing to allow an OAuth App to create or update workflow … without workflow scope.” The CLI's existing token grants repo but not workflow. A write through the connected GitHub app also returned HTTP 403 “Resource not accessible by integration.” No token was requested or exposed; no security permission was expanded. Only the unpublished website refinement commit was amended to store the workflow as an example. Existing research histories were untouched.

To switch later, use an account session permitted to write workflow files, copy the example to `.github/workflows/deploy.yml`, switch Settings → Pages → Source to GitHub Actions, and push to main. This is optional; it is not required to view the branch-deployed site.

## Deployment verification

Verified 23 October 2026: [initial successful Pages run 39891414958](https://github.com/KoreyoshiE/koreyoshie.github.io/actions/runs/39891414958), with successful build and deploy jobs. API reports `built`, `gh-pages:/`, HTTPS enforced. Live URL returns the reviewed portfolio. Production Playwright suite: 31/31 passed; all five production screenshot sizes have no overflow or page errors. See QA_REPORT.md and screenshots.

Earlier automatic runs selected `main` and attempted Jekyll processing of Astro source; logs showed “Invalid YAML front matter” in an Astro component. This was resolved by selecting the compiled `gh-pages` branch with `.nojekyll`. These earlier failures are retained in Actions history for transparency.

The repeatable publishing script is exercised during final handoff. `source-version.txt` on the live site identifies its source commit.

Final publisher verification: `pnpm deploy` completed successfully and preserved the publishing branch history. [Pages run 39893031207](https://github.com/KoreyoshiE/koreyoshie.github.io/actions/runs/39893031207) completed with success. Live `source-version.txt` resolves to `0038e1658d6026863589a1512963a1602066587a`. Home, both research studies, the procedural SVG and both fonts were downloaded from production and their SHA-256 hashes matched the local production build exactly. Later documentation-only commits do not require republishing the site.
