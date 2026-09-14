# Migratie naar Cloudflare

Status: **de site draait volledig op Cloudflare, naast Vercel.** Alle veertien
serverroutes, de 50 redirects en de statische pagina's. Wat nog moet: de
secrets zetten en de crons omzetten — allebei pas bij de DNS-switch.

Deze branch verandert niets aan de Vercel-deploy: `vercel.json` is ongewijzigd,
`npm run build` doet precies wat hij deed, en er is geen DNS aangeraakt.
`vernast-bouwdrogers.be` blijft gewoon van Vercel komen. De Cloudflare-kant
staat ernaast op [bouwdroger.vernast-v2.workers.dev](https://bouwdroger.vernast-v2.workers.dev).

## Waarom

Vercel-team `vrnst` staat op Pro, en Pro rekent per **team**, niet per project:
één project dat blijft staan houdt het hele abonnement in leven. Deelmigratie
levert daarom €0 op. Cloudflare Workers Paid is $5/maand per **account** en dekt
daarmee alle Vernast-sites samen.

Snelheid is niet de reden — voor Belgisch verkeer serveren beide vanuit
Brussel/Amsterdam onder de 20 ms op een gecachete asset.

## Waarom dit de makkelijke helft is

`vernast-v2-0` heeft `render-quote-pdf`, dat een 150 MB Chromium-binary uitpakt.
Dat kan niet op een V8-isolate en vraagt een herbouw op Browser Rendering.
Bouwdroger heeft dat probleem niet: de veertien routes doen HTTP, JSON en
`node:crypto`, meer niet.

En één ding dat hier al goed stond: `api/stripe-webhook.ts` verifieert met
`constructEventAsync`. De synchrone `constructEvent` gebruikt Node's crypto
rechtstreeks en werkt niet op Workers; de async variant gebruikt WebCrypto. Was
dat andersom geweest, dan was de webhook een herschrijving geweest.

## Hoe het in elkaar zit

| Onderdeel | Waar |
|---|---|
| Statische pagina's, afbeeldingen, JS/CSS | Cloudflares assetlaag, rechtstreeks uit `dist/` |
| Redirects (50) | `worker/index.ts` → `worker/vercelRouting.ts`, leest `vercel.json` |
| Headers (CSP, HSTS, cache) | `dist/_headers`, gegenereerd uit `vercel.json` |
| `/api/*` (14 routes) | `worker/index.ts`, de handlers uit `api/` ongewijzigd |
| Crons (2) | `scheduled()` in `worker/index.ts` — **nog niet aangezet** |

### Eén bron van waarheid

De Worker **leest `vercel.json`**. Er is geen tweede configuratiebestand dat kan
verouderen: voeg je een redirect toe, dan geldt die meteen op beide platforms.
`dist/_headers` wordt gegenereerd en is een build-artefact zoals `sitemap.xml`.

Voor de `source`-patronen gebruikt de Worker dezelfde library als Vercel
(`path-to-regexp` v6). Eén vorm moest genormaliseerd worden — zie
`normalizeSource()` in `vercelRouting.ts`.

### De handlers zijn niet aangeraakt

`api/*.ts` gebruikt al `export async function POST(request: Request)`, precies
het contract van een Worker. Er is dus geen adapter nodig zoals in
`Vernast-v2.0`, en geen tweede versie van een handler die uit elkaar kan lopen.

Twee gedeelde modules moesten wel platformonafhankelijk worden:

- **`src/lib/platformWaitUntil.ts`** (nieuw). `sentCopy.ts` legt een kopie van
  elke verzonden mail in Verzonden; dat duurt ruim een minuut en mag het
  antwoord niet ophouden — Stripe hertelt een webhook na 10 seconden als
  mislukt. Vercel biedt daarvoor `waitUntil` als globale import, Cloudflare
  alleen `ctx.waitUntil` per request. Zonder die laatste wordt de promise
  afgebroken zodra het antwoord vertrokken is: niets gooit, niets logt, de
  mailkopie verschijnt gewoon nooit.
- **`src/lib/origin.ts`**. Die vertrouwt de Host-header alleen buiten een
  deploy, en leidde dat af uit `VERCEL_ENV`. Op Cloudflare bestaat die variabele
  niet, dus de check zou stil overgeslagen zijn — precies het gat dat de module
  moet dichten. Nu leest hij ook `DEPLOY_ENV`, dat in `wrangler.jsonc` staat.

### Wat de Worker niet doet

`run_worker_first` bevat alleen `/api/*`, `/*/` en `/*.html`. Elke pagina, elke
afbeelding en elk JS-bestand komt rechtstreeks uit de assetlaag, en dat is
gratis en ongelimiteerd. Bij `true` was elk bestand van één paginalading een
betaalde request.

De twee extra patronen vangen de URL-vormen die een 308 moeten krijgen — zie
hieronder. Een geldige interne link eindigt nooit op `/` of `.html`, dus daar
komt alleen oud verkeer langs.

## Drie verschillen die stil fout gingen

Alle drie geven ze een 200 of een 308, dus geen enkele healthcheck slaat erop
aan. Ze kwamen pas boven bij het pad-voor-pad vergelijken met de live site.

**1. Cloudflare normaliseert met 307, Vercel met 308.** `/machines/` en
`/machines.html` horen naar `/machines`. Cloudflares `html_handling` doet dat
met een 307 — een *tijdelijke* omleiding, waarna Google de oude URL in de index
houdt en de signalen niet consolideert. De Worker doet die normalisatie nu zelf,
met 308.

**2. Cloudflare voegt headers samen, Vercel overschrijft ze.** Matchen twee
`headers`-blokken hetzelfde pad, dan wint bij Vercel de laatste sleutel. Een
`.jpg` kreeg op Cloudflare twee `Cross-Origin-Resource-Policy`-headers,
`same-site` én `cross-origin`. `_headers` kent daar `! Naam` voor, dat wist wat
een eerder blok gezet heeft; `scripts/generate-cloudflare-routing.mjs` zet die
wis-regel automatisch bij elke botsing. Gemeten met een wegwerp-Worker op
14-09-2026.

**3. `path-to-regexp` v6 weigert `/pages/td-:slug*`.** Een repeat-parameter met
een tekstprefix binnen het segment; v6 gooit daarop bij het laden van de module,
dus de deploy faalt. Vercel accepteert het en behandelt het als "de rest van dít
segment, mag leeg zijn" — gemeten: `/pages/td-abc` en `/pages/td-` matchen,
`/pages/td` en `/pages/td-abc/def` niet. `normalizeSource()` zet die vorm om
naar `:slug([^/]*)`, wat exact dezelfde verzameling geeft. Zes van de vijftig
redirects hebben deze vorm; ze vangen de oude Shopify-productpagina's af.

## Geverifieerd

Tegen de live Vercel-site, op 14-09-2026:

- **68 paden** — alle 50 redirects plus de hoofdpagina's en de randgevallen
  (`/pages/td-`, `/pages/td`, `/products/`, `/index.html`, `/404.html`):
  identieke statuscode én identieke bestemming, alle 68.
- **Headers** op zes bestandstypen (HTML, JS, CSS, PNG, ICO, root): alle tien
  de securityheaders identiek, inclusief CSP, HSTS en de cache-regels.
- **Pagina-inhoud** byte-identiek; het enige verschil op de homepage is de
  SSG-buildhash, omdat de Vercel-deploy van een oudere commit is.
- **API-routes**: tien van de veertien geven exact dezelfde statuscode als
  Vercel (405 op een verkeerde methode, 400 op een ontbrekende parameter). De
  vier andere geven 500 in plaats van 400/401 omdat hun secret er nog niet is —
  dat is het gedrag dat de handlers zelf voorschrijven.

## Wat nog moet — pas bij de DNS-switch

### 1. De secrets

Zeventien variabelen. Op Vercel staan ze als **sensitive** opgeslagen en zijn
ze per ontwerp niet uitleesbaar: `vercel env pull` schrijft er `[SENSITIVE]`
voor in de plaats. Ze moeten dus uit een lokale kopie of opnieuw bij de bron
opgehaald worden.

```bash
node scripts/cf-secrets.mjs .env.production          # controle, zet niets
node scripts/cf-secrets.mjs .env.production --write  # via `wrangler secret bulk`
```

Het script weigert placeholders en noemt per ontbrekend secret waar je het
ophaalt. De waarden gaan via stdin naar wrangler, dus ze belanden niet in de
shell-geschiedenis.

**Let op welke sleutels je zet.** De lokale `.env.local` bevat
`sk_test`-sleutels, maar `VERNAST_WEBHOOK_URL` wijst naar de échte Supabase: een
testbestelling landt dan in de productiedatabase van Vernast. Voor een
preview-worker wil je daar een testbestemming, voor de echte switch de
productiesleutels.

### 2. De crons

`wrangler.jsonc` heeft **bewust geen** `triggers`-blok. De twee vangnetten
(`reconcile-orders` 04:00, `reminders` 13:00) draaien nu op Vercel; ze hier óók
aanzetten laat `reminders` twee keer per dag lopen en stuurt elke klant zijn
herinneringsmail dubbel.

Bij de switch: `crons` toevoegen aan `wrangler.jsonc` én `crons` weghalen uit
`vercel.json` — in die volgorde, en met een deploy ertussen.

```jsonc
"triggers": { "crons": ["0 4 * * *", "0 13 * * *"] }
```

`scheduled()` in `worker/index.ts` leidt uit de expressie af welke route hij
aanroept, en geeft de `Authorization: Bearer $CRON_SECRET` mee die de handlers
zelf controleren.

### 3. De Stripe-webhook omzetten

De webhook-URL in het Stripe-dashboard wijst naar
`vernast-bouwdrogers.be/api/stripe-webhook`. Zolang dat domein naar Vercel wijst
komt de webhook daar aan. Na de DNS-switch komt hij vanzelf bij de Worker —
maar het signing-secret moet dan wel gezet zijn, anders weigert de handler elke
melding en blijft elke betaling op `pending` staan.
