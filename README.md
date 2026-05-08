# bouwdroger

Statische mirror van **www.bouwdrogerservice.be** — Vernast bouwdroogservice.

Bron: HTTrack-mirror, klaar om als statische site te hosten (Vercel / Netlify / GitHub Pages).

## Structuur

- `index.html` — HTTrack landing index (kan vervangen worden door redirect of root)
- `www.bouwdrogerservice.be/` — gemirrorde site-content
- `.github/workflows/audit.yml` — audit log voor alle repo events
- `.github/dependabot.yml` — automatische updates van GitHub Actions

## Lokaal bekijken

```bash
python3 -m http.server 8000
# → http://localhost:8000/www.bouwdrogerservice.be/
```

## Security

- Dependabot alerts + security updates: aan
- Secret scanning + push protection: aan
- Branch protection op `main`
- Audit workflow logt elk push/PR/delete event

## Deploy

Zie `vercel.json` (toegevoegd bij eerste deploy).
