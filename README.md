# bouwdroger

Statische mirror van **www.bouwdrogerservice.be** — Vernast bouwdroogservice.

Bron: HTTrack-mirror, gehost op Vercel.

## Structuur

- `index.html` — landingpagina (root)
- `collections/`, `products/`, `pages/`, `policies/`, `blogs/` — gemirrorde content
- `cdn/` — assets (afbeeldingen, fonts, JS)
- `vercel.json` — security headers, cache-policy, CSP (report-only)
- `.github/workflows/audit.yml` — audit log voor elk repo-event
- `.github/dependabot.yml` — automatische updates van GitHub Actions

## Lokaal bekijken

```bash
python3 -m http.server 8000
# → http://localhost:8000/
```

## Security (in code)

Headers via `vercel.json` op elke response:

- `Strict-Transport-Security` — 2 jaar, includeSubDomains, preload
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: SAMEORIGIN`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` — camera, mic, geo, FLoC uit
- `Cross-Origin-Opener-Policy: same-origin`
- `Cross-Origin-Resource-Policy: same-site`
- `Content-Security-Policy-Report-Only` — start in monitor-mode; later strikter zetten

Repo-niveau:
- Dependabot alerts + security updates: aan
- Secret scanning + push protection: aan
- Branch protection op `main`
- Audit workflow logt elk push/PR/delete event

## Performance (in code)

Cache-Control via `vercel.json`:

- Statische assets (jpg/png/webp/woff2/...): `max-age=31536000, immutable`
- CSS/JS/maps: `max-age=604800, stale-while-revalidate=86400`
- HTML: edge-cache `s-maxage=3600, stale-while-revalidate=86400`
- `_vercel/*` telemetry-scripts: `max-age=300`

In elke `<head>` geïnjecteerd:

```html
<script defer src="/_vercel/speed-insights/script.js"></script>
<script defer src="/_vercel/insights/script.js"></script>
```

→ Levert Core Web Vitals en pageviews zodra Speed Insights / Web Analytics in het dashboard aanstaan.

## Vercel-dashboard toggles (handmatig aanzetten)

Project: **bouwdroger** · Team: `brentceulemans-5711`

1. **Speed Insights** → Project → Speed Insights → *Enable*
2. **Web Analytics** → Project → Analytics → *Enable*
3. **Firewall (WAF)** → Project → Firewall:
   - *Attack Challenge Mode*: aan bij verdacht verkeer
   - *Bot Protection / BotID*: aan
   - Custom rules: blok known-bad ASN's of geo's indien nodig
4. **Log Drains** → Team → Log Drains: stuur runtime + edge logs naar je SIEM (optioneel — voor static site beperkte waarde, maar wel toggle)
5. **Deployment Protection** → Project → Settings → Deployment Protection: *Vercel Authentication* op preview-deploys
6. **Domains** → koppel `bouwdrogerservice.be` + `www.bouwdrogerservice.be` met automatische HTTPS
7. **Build & Development Settings** → output dir = repo root (geen build step nodig)

## Deploy

```bash
vercel --prod
```

Of automatisch via de GitHub-integratie: elke push naar `main` → production deploy, elke PR → preview URL.
