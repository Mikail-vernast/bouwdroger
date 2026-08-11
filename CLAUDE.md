# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

De repo is Nederlandstalig: commentaar, tests, commits en documentatie staan in het
Nederlands. Houd dat aan.

## Commando's

```sh
npm run dev          # Vite dev-server op :8080 — api/ draait hier NIET mee
npm run dev:api      # laadt .env.local en start `vercel dev` (:3000) — mét api/
npm run typecheck    # tsc --noEmit -p tsconfig.app.json (dekt src/ én api/)
npm run lint         # ESLint
npm test             # Vitest eenmalig
npm run test:watch   # Vitest watch
npm run build        # typecheck → fetch-tarieven → vite-react-ssg build → SEO-bestanden
```

Eén testbestand of één test:

```sh
npx vitest run src/test/betaalsplitsing.test.ts
npx vitest run -t "saldo"
```

`npm run build` doet meer dan bouwen: hij draait eerst `typecheck` en haalt daarna de
tarieven op bij Vernast. Een typefout breekt dus de deploy, niet pas de site.

## Architectuur

### Deze repo heeft geen database

Bewuste keuze sinds de Lovable-database eruit ging. Alles wat opgeslagen moet worden gaat
naar het **Vernast V2.0-portaal** (een apart Supabase-project), via de edge function
`bouwdroger-order-webhook` achter een gedeeld secret. Zie `src/lib/vernastSync.ts`.

Uit `VERNAST_WEBHOOK_URL` worden de zusterfuncties afgeleid door het laatste padsegment te
vervangen — beschikbaarheid, tarieven, contact. Daarom is er maar één URL-variabele.

Gevolg: het secret mag nooit in de browserbundel. Elke route in `api/` die met Vernast
praat bestaat vooral om dat secret server-side te houden.

### Prerendering

`vite-react-ssg` schrijft elke route bij de build weg als volledige HTML — nodig omdat
AI-antwoordmachines geen JavaScript uitvoeren. Daarom staan de routes in `src/App.tsx` als
**data-array** (`RouteRecord[]`), niet als `<Routes>`-JSX. Dynamische routes leveren hun
varianten via `getStaticPaths`. Nieuwe pagina toevoegen = daar een entry bij, lazy geladen.

### `src/lib/` draait aan beide kanten

De modules in `src/lib/` worden zowel door de browser als door de serverless functies in
`api/` geïmporteerd. Die functies draaien buiten de Vite-alias, dus:

- **imports vanuit `api/` en binnen `src/lib/`: relatief, met expliciete `.js`-extensie**
  (`../src/lib/booking.js`) — niet `@/`
- `@/` mag wel in componenten en pagina's

Breek je dit, dan blijft `vite dev` gewoon werken en faalt pas de deploy.

### Geld wordt altijd server-side herrekend

Wat de browser als bedrag meestuurt telt nergens mee. `api/checkout.ts`,
`api/afhaal-checkout.ts` en `src/lib/orderIntake.ts` rekenen opnieuw uit de
pakketconfiguratie en de gepubliceerde tarieven. `orderIntake.ts` gebruikt daarnaast een
**allowlist** van velden: alles daarbuiten valt stil weg, zodat een afzender geen `status`
of bedrag kan zetten.

Prijzen op het scherm en prijzen bij Stripe komen uit dezelfde module (`src/lib/booking.ts`,
`src/lib/verhuur.ts`), zodat ze per definitie gelijk zijn.

Btw: de catalogus rekent **excl.**, Stripe int **bruto**. In de Stripe-metadata staat
`totaal`/`korting` excl. en `totaal_incl_btw`/`nu_betaald` incl.

### Drie wegen naar het portaal

Een betaalde order bereikt `bouwdroger_orders` langs:

1. `api/stripe-webhook.ts` — het `checkout.session.completed`-event
2. `api/checkout-session.ts` — de terugkeer van de betaler zelf
3. `api/reconcile-orders.ts` — dagelijkse cron die recente betaalde sessies opnieuw aanbiedt

Dat mag botweg: de webhook aan de Vernast-kant is **idempotent op `(source, external_id)`**.
Wie er eerst is maakt niet uit. Voeg nooit een "eerst kijken of hij al bestaat"-stap toe;
die is de reden dat er ooit dubbele orders stonden. Zie `src/lib/vernastOrder.ts`.

### Holds en beschikbaarheid

`api/checkout.ts` legt bij het aanmaken van een sessie de toestellen apart (30 min, gelijk
aan `expires_at` van de Stripe-sessie). Vrijgeven gebeurt op drie plaatsen: bij een nieuwe
poging van dezelfde bezoeker (`releaseSession`), bij `checkout.session.expired` in de
webhook, en via `api/booking-release.ts` wanneer de pagina herladen wordt met een oude
sessie in `sessionStorage`.

`api/availability.ts` is **comfort** — het schakelt volle datums uit in de wizard. De harde
controle staat in de checkout-routes en geeft een 409. Faalt de controle zelf (Vernast
onbereikbaar), dan gaat de boeking bewust door.

### Betaalsplitsing

Twee keuzes: volledig online (5% korting) of een vaste orderbevestiging waarna het saldo
**bij de installatie** betaald wordt. Dat saldo loopt via `api/saldo.ts` — de technieker
toont een QR, de klant scant en betaalt. Die tweede sessie draagt `metadata.type ===
BALANCE_TYPE` en **werkt de bestaande order bij** in plaats van een nieuwe te maken; dát
moment maakt in het portaal de factuur.

### Fail-soft op mail en Slack

`src/lib/mail.ts` (Brevo-sjablonen) en `src/lib/slack.ts` slaan hun bericht over met een
logregel als de bijbehorende env-variabele ontbreekt — niets breekt. Zo kan elke mail apart
aangezet worden zodra zijn sjabloon klaar is. Houd dat patroon aan bij nieuwe meldingen.

`src/lib/sentCopy.ts` zet achteraf een kopie in de map Verzonden via een Google
service-account (`users.messages.insert`). Dat wachten op de gerenderde HTML bij Brevo valt
buiten het antwoord van de functie.

### `src/data/tarieven.ts` is gegenereerd

Geschreven door `scripts/fetch-tarieven.mjs` vóór elke build, uit het portaal. **Nooit met
de hand aanpassen** — een prijswijziging gebeurt in het portaal (tab Pakketten →
publiceren). Het bestand staat wel in git: het is de terugval als Vernast tijdens een build
onbereikbaar is.

### Rate limiting

`src/lib/rateLimit.ts` telt in het geheugen van één functie-instantie — een drempel, geen
slot. `gate()` heeft twee grenzen: `attempt()` vóór het parsen (ruim, alle aanvragen) en
`accept()` vlak vóór de dure operatie. Roep ze in die volgorde aan.

### Crons

Vercel Hobby staat er **twee** toe, en beide zijn bezet (`vercel.json`):
`/api/reconcile-orders` om 04:00, `/api/reminders` om 13:00. `reminders.ts` combineert
daarom twee taken in één run. Een derde herinnering hoort daar bij, niet in een nieuwe cron.

## Conventies

- Commentaar legt **waarom** uit, niet wat — vaak met de fout die eraan voorafging. Volg die
  toon; een nieuwe drempel of allowlist zonder motivering is hier onvolledig.
- Tests staan in `src/test/` met Nederlandse namen (`saldoBijInstallatie.test.ts`,
  beschrijvingen als "doet niets zonder de sessie van de oorspronkelijke boeking").
- Commits: conventional type + Nederlandse beschrijving — `fix(saldo): de betaalknop zag
  eruit als platte tekst`.
- TypeScript staat **niet** op `strict` (`tsconfig.app.json`). Externe input toch als
  `unknown` behandelen en narrowen — zie `strings()` in `api/checkout.ts`.
- Publieke endpoints geven niet meer terug dan de pagina nodig heeft. `api/saldo.ts`,
  `api/extension.ts` en `api/checkout-session.ts` laten bewust naam, adres en e-mail achter.
- Stripe-routes beantwoorden alleen sessies die door onze eigen checkout zijn aangemaakt
  (`isReference`), zodat ze geen venster op de rest van het account worden.

## Valkuilen

- **`api/` draait niet onder `npm run dev`.** Wie een route test, gebruikt `npm run dev:api`
  — die luistert op :3000, niet :8080.
- **Deze repo is publiek.** Security-bevindingen horen in de vault, niet hier; zie
  `docs/security.md` voor wat er wél in mag. Env-vars alleen bij naam.
- **Stripe-omgevingen lopen uiteen**: live op production/preview, sandbox op development. De
  publiceerbare sleutel komt uit het antwoord van `api/checkout.ts`, niet uit een
  `VITE_`-variabele, juist zodat ze bij dezelfde omgeving hoort als de geheime.
- Nieuwe dependency die in een lazy geladen route belandt: zet hem in `optimizeDeps.include`
  in `vite.config.ts`. Anders her-optimaliseert Vite midden in een sessie en krijg je een
  tweede kopie van React ("Cannot read properties of null (reading 'useRef')").
- `vercel.json` bevat ~50 redirects van de oude Shopify-URL's. Route hernoemen betekent daar
  een redirect bij.

Omgevingsvariabelen, mail-sjablonen en de Slack-webhook staan uitgeschreven in `README.md`.
