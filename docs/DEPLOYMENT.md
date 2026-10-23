# Deployment

Target: https://koreyoshie.github.io  
Repository: https://github.com/KoreyoshiE/koreyoshie.github.io

Static user site: Astro `site` is `https://koreyoshie.github.io`; default base `/` is correct because the repository is named `koreyoshie.github.io`. Trailing slash routes map to generated directory index files.

## Workflow

`.github/workflows/deploy.yml` follows the [official Astro Pages guide](https://docs.astro.build/en/guides/deploy/github/): `actions/checkout@v7`, `withastro/action@v6`, Node 24, pnpm 11.25.0, then `actions/deploy-pages@v5`. Required permissions are contents read, pages write, id-token write. A committed pnpm lockfile makes installation reproducible. GitHub Pages source must be GitHub Actions (`build_type: workflow`).

## Repeat deployment

Push a reviewed change to `main`, or run the workflow manually. Inspect the build and deployment jobs in Actions, then check the live pages and assets. A build alone does not establish deployment. Existing research repositories are outside this workflow.

## Manual recovery

If Actions fails, inspect the failing step in the repository Actions tab. Reproduce locally with Node 24 and `pnpm install --frozen-lockfile && pnpm build`. Check Pages settings use GitHub Actions. The output is `dist/`; no backend, secret, paid API or custom domain is required.

## Verification record

Local build and browser checks passed. Initial deployment is being attempted; live verification and the successful run URL will be added after completion.
