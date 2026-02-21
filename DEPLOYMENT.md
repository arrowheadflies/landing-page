# Arrowhead Flies — Deployment Guide

**Live site:** https://arrowheadflies.com  
**GitHub repo:** https://github.com/arrowheadflies/landing-page  
**Hosting:** GitHub Pages (`gh-pages` branch) | **Emails:** Formspree  

---

## Making Updates

### Step 1 — Test Locally
Start the dev server and verify your changes look correct before going live:
```bash
npm run dev
```
Open http://localhost:5173 (or whatever port it picks) in your browser.

---

### Step 2 — Save Your Code (Backup to GitHub)
Once you're happy with the changes:
```bash
git add .
git commit -m "Short description of what you changed"
git push origin main
```

---

### Step 3 — Deploy to the Live Site
This automatically rebuilds the site and pushes it live:
```bash
npm run deploy
```
Your site at **arrowheadflies.com** will update within ~60 seconds.

---

## Tips

- **Always test locally first** — never `npm run deploy` untested changes
- **Write clear commit messages** — e.g. `"Updated hero headline"` not just `"changes"`
- If `npm run deploy` throws an error, the **live site is unaffected** — it only publishes on success
- The dev server port may increment (5174, 5175...) if previous sessions are still running

---

## DNS & Infrastructure (Reference Only)

| Service | Details |
|---------|---------|
| Domain Registrar | Porkbun |
| DNS A Records | 185.199.108–111.153 |
| DNS CNAME | `www` → `arrowheadflies.github.io` |
| Email Capture | Formspree ID: `xlgwwbad` |
| SSL | Auto-managed by GitHub Pages |
