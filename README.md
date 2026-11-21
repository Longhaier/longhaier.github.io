# TaoBuilds · Personal Blog

Personal blog built with **Jekyll** and published on **GitHub Pages**.

Website (current URL until GitHub account/repository rename): https://longhaier.github.io/

Target URL after the manual GitHub rename: https://taobuilds.github.io/

## Sections
- `/`: modern, responsive homepage
- `/archive/`: posts by date
- `/category/`: post categories
- `/tag/`: tags
- `/about/`: about

## Tech
- Jekyll + Liquid templates
- Sass (source in `_sass/`, entry point `css/main.scss`)
- Vanilla JavaScript in `js/main.js`
- GitHub Pages (default branch: `master`)

## Local preview
Install Jekyll and the `jekyll-paginate` plugin in a compatible Ruby environment, then run:

```sh
jekyll serve
```

Visit `http://localhost:4000`. GitHub Pages builds the site from the repository.

## Security
Do not commit OAuth client secrets, tokens, or API keys.
Gitalk is disabled until its authorization flow has been replaced or securely reconfigured.
Any OAuth client secret previously committed to this public repository **must be revoked/rotated**; deleting it from the latest file does not erase Git history.
