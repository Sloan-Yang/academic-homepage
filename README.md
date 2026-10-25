# Shirong Yang — academic homepage

A compact academic homepage adapted from [luost26/academic-homepage](https://github.com/luost26/academic-homepage). It includes a research biography, three manuscripts, education, and a downloadable CV. All styles, scripts, figures, and the CV are served locally.

Repository: `Sloan-Yang/academic-homepage`

Site: `https://sloan-yang.github.io/academic-homepage/`

This is an independent Jekyll site. The existing blog at `Sloan-Yang.github.io` and the portfolio at `sloan-yang.com` remain separate. The research links lead to the existing project pages on `sloan-yang.com`.

## Local preview

Use Ruby 3.3 and Bundler:

```sh
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

Open `http://127.0.0.1:4000/academic-homepage/`.

For a production build:

```sh
JEKYLL_ENV=production bundle exec jekyll build --strict_front_matter --trace
```

## Content

- `_data/profile.yml`: biography, contact details, education, and optional portrait.
- `_data/navigation.yml`: navigation links.
- `_data/authors.yml`: author-name emphasis.
- `_publications/*.md`: titles, author lists, manuscript status, images, and links.
- `assets/files/cv.pdf`: the downloadable CV.
- `assets/css/global.css`: layout and responsive styling.
- `_config.yml`: site URL and repository subpath.

The initial research metadata and figures are copied from `sloan-yang-website/lib/research.ts` and `public/research/`. Later updates should be reflected in both sites. All three manuscripts are currently labeled **Under review**; only InterIL has public paper/arXiv links. The MPhil label follows the current portfolio; the copied CV still uses “M.S. in Computer Science.”

## GitHub Pages

The public repository `Sloan-Yang/academic-homepage` uses **GitHub Actions** as its Pages build source. Push changes to its `main` branch to publish updates. The included workflow builds Jekyll and deploys on pushes to `main`; pull requests are built without deployment.

The site is configured with `baseurl: /academic-homepage`. If the repository name changes, update that setting and the site URL above. Do not add a `CNAME` file unless you intend to configure a custom domain.

The workflow follows [GitHub's custom Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Credits

- [academic-homepage](https://github.com/luost26/academic-homepage) by Shitong Luo — MIT License, retained in `LICENSE` and the page footer. This adaptation keeps its profile/sidebar, content cards, publication rows, Jekyll collections, and author formatting.
- [Bootstrap 4.6.0](https://github.com/twbs/bootstrap/tree/v4.6.0) — MIT License. The vendored stylesheet retains its copyright and license header.
- Research figures and the CV are supplied from Shirong Yang's existing portfolio; they are not covered by the template's software license.
