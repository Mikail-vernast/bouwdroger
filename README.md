# Bouwdrogerservice — website

De publieke website van **Vernast Bouwdroogservice** (bouwdrogerservice.be): een
statisch geprerenderde React-app met een handvol serverless routes voor
bestellingen en Stripe-betalingen.

Dit is niet de financiële applicatie van Vernast — die staat apart. Deze repo is
enkel de website en wat er nodig is om een boeking van de site tot in het
Vernast-portaal te krijgen.

## Stack

| Onderdeel | Keuze |
|---|---|
| Build | Vite + `vite-react-ssg` (prerender naar statische HTML) |
| UI | React 18, TypeScript, Tailwind CSS, shadcn/ui (Radix) |
| Routing | React Router |
| Serverless | Vercel Functions (`api/`) |
| Betalingen | Stripe Checkout |
| Hosting | Vercel, regio `fra1` |
| Tests | Vitest + Testing Library |

Er is geen CMS en geen webshop-platform: alle content en productdata staan in
`src/data/` en worden mee geprerenderd.

## Aan de slag

```sh
npm install
npm run dev          # Vite dev-server op http://localhost:8080
```

De `api/`-routes draaien niet mee onder `vite dev`. Wie die nodig heeft:

```sh
npm run dev:api      # laadt .env.local en start `vercel dev`
```

## Scripts

| Script | Doet |
|---|---|
| `npm run dev` | dev-server (poort 8080) |
| `npm run dev:api` | `vercel dev` met `.env.local` ingeladen, voor de API-routes |
| `npm run build` | prerender naar `dist/` + genereert sitemap/robots |
| `npm run preview` | serveert de gebouwde `dist/` |
| `npm run lint` | ESLint |
| `npm test` | Vitest (eenmalig); `npm run test:watch` voor watch-modus |
| `npm run fonts` | haalt de webfonts lokaal binnen (self-hosted, geen Google Fonts) |
| `npm run images` | comprimeert de afbeeldingen in `public/` |

## Structuur

```
api/         serverless routes (order, checkout, checkout-session, stripe-webhook)
src/pages/   één bestand per route
src/components/
  home-v3/   secties van de homepage
  verhuur/   de verhuur-flow
  ui/        shadcn/ui-primitieven
src/data/    productdata, pakketten, prijzen
src/lib/     gedeelde logica (ook door de api-routes gebruikt)
scripts/     build- en onderhoudsscripts (SEO, fonts, afbeeldingen)
docs/        losse notities over openstaande punten
```

`src/lib/` wordt zowel door de browser als door de serverless routes
geïmporteerd. Vandaar de expliciete `.js`-extensies in de imports vanuit `api/`.

## API-routes

| Route | Doet |
|---|---|
| `POST /api/order` | duwt een boeking of reservering naar het Vernast-portaal |
| `POST /api/checkout` | maakt een Stripe Checkout-sessie aan |
| `GET /api/checkout-session` | controleert of een sessie effectief betaald is |
| `POST /api/stripe-webhook` | verwerkt Stripe-events |

Alle routes zitten achter rate limiting; prijzen worden server-side bepaald,
nooit uit de request overgenomen.

## Omgevingsvariabelen

Beheerd via `vercel env` — niet in de repo. Lokaal in `.env.local` (gitignored).

| Variabele | Waarvoor |
|---|---|
| `STRIPE_SECRET_KEY` | Stripe API (live op production/preview, sandbox op development) |
| `STRIPE_WEBHOOK_SECRET` | handtekening van de Stripe-webhook |
| `VERNAST_WEBHOOK_URL` | edge function `bouwdroger-order-webhook` in Vernast V2.0 |
| `VERNAST_WEBHOOK_SECRET` | gedeeld geheim voor die webhook |
| `VITE_SITE_URL` | canonieke site-URL (sitemap, canonicals, Stripe-redirects) |

## Deploy

Vercel bouwt met `npm run build` en serveert `dist/`. Security headers, CSP en
cache-control staan in `vercel.json`.
