# Anthropic × Adaptyv Protein Design Competition

Articles and selected reproducible examples from participation in the five-challenge Anthropic × Adaptyv protein design competition.

This repository is a curated publication companion. The original research workspace and its scientific evidence remain separate. Experimental performance of our submitted designs is not established in this repository.

## Planned articles

1. **[Five targets and the structural reasoning behind our designs](docs/articles/01-five-targets.md)** — draft covering competition context, binding and additional functional objectives, and the agents' epitope choices.
2. **How the agents collaborated** — hypothesis generation, execution, review, persistent state and human decisions.
3. **What the decision trajectories revealed** — failure patterns, external questions and consequences for assay interpretation.

## Repository layout

```text
docs/          GitHub Pages content and configuration
examples/      Selected small code examples and sample inputs
harness/       Documented agent instructions and workflow examples
scripts/       Publication utilities
```

Article 1 is a local draft with figure placeholders. Articles 2–3, code examples and the harness will be added as they are reviewed. Images are deferred and excluded from Git. Any later illustrative harness must be distinguished from tools actually used during the competition.

## Edit the first article

Edit `docs/articles/01-five-targets.md` in a text editor or Markdown preview. The YAML block at the top supplies the page layout and title; the text below is the article. Numbered figure placeholders describe the material still needed. The homepage links to the generated `.html` page; this README links to the Markdown source for repository browsing.

Changes stay local until you explicitly push them. A local Git commit records a version; it does not publish a webpage.

## Publish the website

After creating a GitHub repository and pushing this directory, open **Settings → Pages**. Select **Deploy from a branch**, branch **main**, folder **/docs**, then save. The site uses GitHub Pages' Jekyll build with a supported minimal theme.

The local directory and website title can use spaces and `×`. GitHub repository names accept ASCII letters, digits, `.`, `-` and `_`; use a URL name such as `anthropic-adaptyv-protein-design-competition` while keeping the full display title. See [GitHub repository naming](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository).

For that repository name, the usual address is `https://USERNAME.github.io/anthropic-adaptyv-protein-design-competition/`. A repository named exactly `USERNAME.github.io` uses `https://USERNAME.github.io/` instead.

GitHub publishes the contents of `docs/` as the website; the other tracked directories remain browsable and downloadable in the repository. Keep ordinary article and asset links relative so a project-site path works.

Sources: [GitHub Pages publishing sources](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [creating a Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

## Attribution and reuse

Code, article and third-party asset licensing will be specified before release. No blanket reuse license is granted by this skeleton. Third-party figures retain their own attribution and rights.
