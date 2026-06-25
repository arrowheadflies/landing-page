# Arrowhead Flies — Deployment Guide

**Live site:** https://arrowheadflies.com  
**GitHub repo:** https://github.com/arrowheadflies/landing-page  
**Hosting:** Vercel (primary) | GitHub Pages (secondary) | **Emails:** Formspree  

---

## Overview

This project supports two deployment platforms:

- **Vercel** — primary production deployment (recommended)
- **GitHub Pages** — secondary deployment via `gh-pages` branch

Both are kept in sync from the same `main` branch.

---

## Branch Structure

```
main        →  Your source code (React, TypeScript, assets)
gh-pages    →  The compiled build (index.html, assets/, brand/) — auto-managed
```

> ⚠️ Never manually edit the `gh-pages` branch. It is always overwritten by the deploy command.

---

## One-Time Setup

### Vercel (Primary)

1. Install Vercel CLI: `npm install -g vercel`
2. Run `vercel` in the project root and follow the prompts
3. Or connect your GitHub repo directly at [vercel.com](https://vercel.com)

Vercel will automatically deploy on every push to `main`.

### GitHub Pages (Secondary)

Make sure your `package.json` scripts section includes the deploy command:

```json
"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

And make sure `gh-pages` is installed:

```bash
npm install gh-pages --save-dev
```

Update `package.json` homepage field:

```json
{
  "homepage": "https://arrowheadflies.github.io/landing-page"
}
```

---

## Testing Locally

Use this when you want to preview your changes in the browser before committing or deploying.

```bash
npm run dev
```

This will start a local development server. You can view the site by opening the URL provided in the terminal (usually `http://localhost:5173`). Press `Ctrl + C` in the terminal to stop the server when you are done.

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

## Deploying to Production

### Option A: Vercel (Recommended)

Vercel automatically deploys on every push to `main`. No manual steps needed.

To trigger a manual deploy:

```bash
vercel --prod
```

Your site will be live at:
```
https://arrowheadflies.com
```

### Option B: GitHub Pages

Use this when you're ready to publish your changes to the GitHub Pages site. This command will:

1. Run TypeScript type-checking
2. Build the production bundle via Vite
3. Push the compiled output to the `gh-pages` branch
4. Update your live site automatically

```bash
npm run deploy
```

That's it. One command.

> If the TypeScript build fails, the deploy will stop and nothing will be pushed to the live site — keeping your production build safe.

Your site will be live at:
```
https://arrowheadflies.github.io/landing-page
```

GitHub Pages typically updates within **30–60 seconds** of a successful deploy.

---

## Full Example: Code Change to Live Site

```bash
# Make your code changes in your editor, then...

# 1. Save your work to main
git add .
git commit -m "Add Caddis emerger fly patterns"
git push origin main

# 2. Vercel will auto-deploy within a few seconds
# OR for GitHub Pages:
npm run deploy
```

---

## Checking the Live Site

After deploying, your site will be live at:

- **Vercel (primary):** https://arrowheadflies.com
- **GitHub Pages (secondary):** https://arrowheadflies.github.io/landing-page

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
| SSL | Auto-managed by GitHub Pages / Vercel |
| Primary Host | Vercel |
| Secondary Host | GitHub Pages |