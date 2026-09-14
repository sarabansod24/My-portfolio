# Sara Bansod — UX Designer Portfolio

Static, dependency-free portfolio site. Plain HTML, CSS and JavaScript — no build step,
no framework, no package install. Open `index.html` locally or drop the folder on any
static host.

## Contents

| Path | What it is |
|---|---|
| `index.html` | The entire site — every page and case study, switched client-side |
| `style.css` | All styles, design tokens defined at the top as CSS custom properties |
| `app.js` | Navigation, tab switching, scroll reveals, lightbox |
| `assets/` | 43 images used across the case studies |
| `404.html` | Friendly not-found page, links back to the site root |
| `.nojekyll` | Tells GitHub Pages to serve files as-is, skipping Jekyll processing |

## Publishing to GitHub Pages

Replace the contents of the repository that backs your current portfolio link,
keeping the same repo so the URL doesn't change.

```bash
# from inside your existing portfolio repo, on the branch Pages serves
git rm -r --cached .            # unstage the old site (files stay on disk for now)
rm -rf assets index.html style.css app.js   # remove the old site files

# copy everything from this zip into the repo root, then:
git add -A
git commit -m "Update portfolio site"
git push
```

Pages rebuilds within a minute or so. Confirm the source is right under
**Settings → Pages**: *Deploy from a branch*, branch `main` (or `gh-pages`),
folder `/ (root)`.

Everything is referenced by relative path, so the site works at a user page
(`username.github.io`) and at a project page (`username.github.io/portfolio`) alike.

## Custom domain

If your Pages site uses a custom domain, GitHub keeps a `CNAME` file in the repo root.
It is not in this zip — don't delete it when you swap the files in, or the domain
will detach.

## Fonts

Two stylesheets load from the network: Inter and Plus Jakarta Sans from Google Fonts.
The display face is Satoshi where it's available, with Plus Jakarta Sans as a close
fallback. Everything else — images included — is served from this folder.
