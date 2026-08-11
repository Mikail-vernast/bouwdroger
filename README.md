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

### Mail (Brevo)

De transactionele mails lopen via Brevo, met de opmaak in Brevo-sjablonen en
enkel parameters vanuit deze code. Zie `src/lib/mail.ts` voor welke parameters
elke mail meestuurt.

Staat er voor een mail geen sjabloon-ID, dan wordt die mail overgeslagen met een
logregel — niets breekt. Zo kan elke mail apart aangezet worden zodra zijn
sjabloon klaar is.

| Variabele | Waarvoor |
|---|---|
| `BREVO_API_KEY` | API-sleutel van Brevo (server-only) |
| `BREVO_SENDER_EMAIL` | afzender; moet in Brevo geverifieerd zijn (SPF/DKIM) |
| `BREVO_SENDER_NAME` | naam van de afzender, standaard "Vernast Bouwdrogers" |
| `BREVO_TEAM_EMAIL` | waar de interne meldingen heen gaan |
| `BREVO_TPL_BOEKING_BETAALD` | klant: betaling gelukt, boeking staat vast (sjabloon 198) |
| `BREVO_TPL_LEVERING_MORGEN` | klant: wij leveren morgen (sjabloon 199, dagelijkse cron) |
| `BREVO_TPL_AANVRAAG_ONTVANGEN` | klant: aanvraag binnen, nog geen bevestiging |
| `BREVO_TPL_CONTACT_ONTVANGEN` | klant: kopie van zijn contactbericht |
| `BREVO_TPL_AFHAAL_BEVESTIGD` | klant: afhaalreservatie bevestigd — magazijnadres en afhaalmoment, geen levering |
| `BREVO_TPL_INTERN_BOEKING` | team: nieuwe betaalde boeking |
| `BREVO_TPL_INTERN_AFHAAL` | team: nieuwe afhaalreservatie (valt terug op tekstmail zonder sjabloon) |
| `BREVO_TPL_INTERN_AANVRAAG` | team: nieuwe aanvraag, actie vereist |
| `BREVO_TPL_INTERN_CONTACT` | team: bericht uit het contactformulier |
| `BREVO_TPL_INTERN_ALARM` | team: een order raakte niet in het portaal |
| `MAIL_CALL_NOTICE` | hoe lang op voorhand gebeld wordt, standaard "1 werkdag" |
| `MAIL_CANCELLATION_HOURS` | kosteloos annuleren tot, standaard 48 |
| `MAIL_DEFAULT_TIJDSLOT` | venster als er geen tijdslot gekozen is |

### Slack

Elke betaalde order valt binnen in een Slack-kanaal (`#bouwdroger-orders`), zodat
het team een boeking ziet zonder in een gedeelde mailbox of in het portaal te
moeten kijken. Een order die het portaal *niet* haalt, komt daar ook binnen —
dat is de melding waarop meteen iemand moet reageren.

Loopt over een **incoming webhook** op de bestaande Vernast Slack-app — dezelfde
app die het portaal gebruikt, geen tweede app. Toevoegen via `api.slack.com/apps`
→ de Vernast-app → *Incoming Webhooks* → *Add New Webhook to Workspace* →
`#bouwdroger-orders`. De URL is een geheim: wie hem heeft, kan in dat kanaal
posten.

Bewust een webhook en niet de `SLACK_BOT_TOKEN` van het portaal, ook al staat die
er al. Die token draagt `channels:manage`, `groups:history` en `users:read.email`
— hij kan de hele workspace beheren en meelezen. Deze repo is publiek en dit
project heeft precies één ding nodig: berichten in één kanaal. Een webhook kan
niets meer dan dat, dus een lek hier blijft beperkt tot dat kanaal.

Staat de variabele niet ingesteld, dan blijft er een logregel achter en breekt
er niets — net als bij een mail zonder sjabloon-ID.

| Variabele | Waarvoor |
|---|---|
| `SLACK_ORDER_WEBHOOK_URL` | incoming webhook van het orderkanaal (server-only) |

## Deploy

Vercel bouwt met `npm run build` en serveert `dist/`. Security headers, CSP en
cache-control staan in `vercel.json`.
