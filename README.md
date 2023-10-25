# Vitepress Docs Template

## How to run

```sh
npm i
npm run docs:dev
# build
npm run docs:build
```

## Config docs layout

Go -> src -> index.md ([more details](https://vitepress.dev/guide/getting-started))

Copy and paste your logo image under src/public folder

Copy the logo image path and paste in index.md -> image: src:

## Config docs settings

Go -> .vitepress -> config.ts -> follow the description in that file.

## Config your github repository info

Go -> .vitepress -> settings.ts -> copy your github repository url and paste in that file.

## Theme Color

Go -> .vitepress - > theme -> assets -> theme.css

## GitHub Action to host docs on Github Pages

Automatically host the docs on Github Pages.

- Create A GitHub Token on your Github account -> settings -> Developing settings -> personal access tokens -> Tokens (classic) -> Generate new token (with workflow rights)
- Copy the token, then go to your docs repository seetings -> Secrets and variables -> actions -> New repository secret -> paste your token
- Copy the repository secret name that you just created, in this docs project -> .github/workflows/deploy-docs.yaml -> replace `secrets.Your_DOCS_GITHUB_TOKEN` to your repository secret name
- After you push the docs to your repository, create a release, then it will automatically run the action.

## Enable Algolia search

- host your docs on Github pages (Other server/domain would be fine)
- apply the algolia search from their [website](https://docsearch.algolia.com/)
- Wait for 2~3 days
  - copy `apiKey` from email and paste to settings.ts `apiKey`
  - copy `indexName` from email and paste to settings.ts `indexName`
  - copy `appId` from email and paste to settings.ts `appId`
- re-host your docs
