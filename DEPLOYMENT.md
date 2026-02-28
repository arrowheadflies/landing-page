# Arrowhead Flies — Deployment Guide

**Live site:** https://arrowheadflies.com  
**GitHub repo:** https://github.com/arrowheadflies/landing-page  
**Hosting:** GitHub Pages (`gh-pages` branch) | **Emails:** Formspree  

---

# Arrowhead Flies — Deployment Guide

## Overview

This project uses two branches:

- **`main`** — source code and active development
- **`gh-pages`** — the live, built site served at your domain

These two branches are kept **intentionally separate**. You commit code changes to `main` whenever you like, and only deploy to the live site when you're ready using `npm run deploy`.

---

## Branch Structure

```
main        →  Your source code (React, TypeScript, assets)
gh-pages    →  The compiled build (index.html, assets/, brand/)
```

> ⚠️ Never manually edit the `gh-pages` branch. It is always overwritten by the deploy command.

---

## One-Time Setup

Make sure your `package.json` scripts section includes the deploy command:

```json
"scripts": {
  "dev": "vite",
  "build": "tsc && vite build",
  "deploy": "npm run build && npx gh-pages -d dist"
}
```

And make sure `gh-pages` is installed:

```bash
npm install gh-pages --save-dev
```

---

## Daily Workflow — Committing to `main`

Use this when you've made code changes and want to save your work. This does **not** update the live site.

```bash
# 1. Check what files have changed
git status

# 2. Stage your changes
git add .

# 3. Commit with a descriptive message
git commit -m "Your message here"

# 4. Push to main
git push origin main
```

### Example commit messages
```bash
git commit -m "Add PMD hatch stage patterns"
git commit -m "Fix navigation back link on HatchDetail"
git commit -m "Update homepage hero copy"
```

---

## Deploying to the Live Site — Pushing to `gh-pages`

Use this when you're ready to publish your changes to the live website. This command will:

1. Run TypeScript type-checking
2. Build the production bundle via Vite
3. Push the compiled output to the `gh-pages` branch
4. Update your live site automatically

```bash
npm run deploy
```

That's it. One command.

> If the TypeScript build fails, the deploy will stop and nothing will be pushed to the live site — keeping your production build safe.

---

## Full Example: Code Change to Live Site

```bash
# Make your code changes in your editor, then...

# 1. Save your work to main
git add .
git commit -m "Add Caddis emerger fly patterns"
git push origin main

# 2. When ready to go live
npm run deploy
```

---

## Checking the Live Site

After running `npm run deploy`, your site will be live at:

```
https://arrowheadflies.com
```

GitHub Pages typically updates within **30–60 seconds** of a successful deploy.

---

## Troubleshooting

**Build fails on deploy**
```bash
# Run the build separately to see the full error
npm run build
```

**Site not updating after deploy**
- Hard refresh the browser: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
- Wait 60 seconds and try again — GitHub Pages can have a short propagation delay

**Accidental push to wrong branch**
- Your source code lives in `main` — always make changes there
- The `gh-pages` branch is auto-managed, don't commit to it directly

**"Compare & pull request" banner on GitHub**
- This is normal and harmless — it appears when `main` has commits `gh-pages` doesn't
- It disappears after a few days, or after your next deploy

---

## DNS & Infrastructure (Reference Only)

| Service | Details |
|---------|---------|
| Domain Registrar | Porkbun |
| DNS A Records | 185.199.108–111.153 |
| DNS CNAME | `www` → `arrowheadflies.github.io` |
| Email Capture | Formspree ID: `xlgwwbad` |
| SSL | Auto-managed by GitHub Pages |
