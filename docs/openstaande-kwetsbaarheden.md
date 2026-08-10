# Openstaande kwetsbaarheden

Wat er nog open staat, waarom, en waar de grens ligt. Bijwerken zodra er iets
opgelost raakt.

## Gelekte Supabase-sleutel — twee acties open

De anon-key van het Lovable-project stond in `.env`, meegecommit in `bbda355`
en `6465e80`. Daarmee was `public.bookings` in dat project volledig leesbaar én
schrijfbaar: naam, e-mail, telefoon, adres, btw-nummer.

`main` is gepurged (`git filter-repo --invert-paths --path .env`, force-gepusht
op 2026-08-06) en bevat de sleutel nul keer. Wat nog open staat:

**1. GitHub bewaart de PR-refs.** `refs/pull/1..5/head` bevatten de sleutel nog.
Die refs overleven het sluiten van de PR én het verwijderen van de branch, en er
is geen API om ze te wissen. De repo verwijderen en opnieuw aanmaken is de enige
self-service route; dat vraagt de `delete_repo`-scope:

```
gh auth refresh -h github.com -s delete_repo
```

Zet de repo *niet* private als tussenoplossing. Op een gratis account kost dat
de secret scanning, de push protection, de Dependabot security updates én de
branch protection op `main` — je ruilt de bescherming tegen de vólgende lek in
voor het verbergen van de vorige. Geprobeerd en teruggedraaid op 2026-08-07.

**2. Het Lovable-project pauzeren of verwijderen.** Supabase-project
`xmyfedzvtjfpspriafza`. Dit is de belangrijkste van de twee: de sleutel is
maanden publiek geweest en kan gescraped zijn, dus opruimen bij GitHub is
opruimen achteraf. Het project pauzeren maakt de sleutel waardeloos ongeacht wie
hem heeft. Het hangt aan het Lovable-account, niet aan de Supabase-org van
Vernast — `supabase projects list` toont daar enkel Vernast V2.0.

**Gemeten op 2026-08-10, en het is nog steeds open.** De sleutel is met één
`git fetch origin '+refs/pull/*/head:refs/remotes/pr/*'` uit de publieke repo te
halen, en werkt:

| Wat | Antwoord |
|---|---|
| `GET /auth/v1/health` | `200` — het project draait |
| `GET /rest/v1/bookings?limit=0` met `Prefer: count=exact` | `206`, `content-range: */1` |
| `GET /rest/v1/reserveringen?limit=0` | `206`, `content-range: */0` |

Eén boekingsrij dus, met naam, e-mail, telefoon en adres. Klein, maar leesbaar
voor iedereen die de repo vindt — en pauzeren is één klik.

## react-router 6.30.4 — twee moderate meldingen uit npm audit

| Advisory | Wat het is |
|---|---|
| [GHSA-wrjc-x8rr-h8h6](https://github.com/advisories/GHSA-wrjc-x8rr-h8h6) | Open redirect via een backslash in `<Link>` en `useNavigate` |
| [GHSA-337j-9hxr-rhxg](https://github.com/advisories/GHSA-337j-9hxr-rhxg) | Constructor-injectie via `deserializeErrors()` bij SSR-hydratie |

**Waarom ze er nog staan.** Beide zijn pas gedicht in react-router 7.18.0. Die
kant op kunnen we niet: `vite-react-ssg` — ook in de nieuwste versie, 0.9.2 —
eist `react-router-dom@^6.14.1` als peer. Upgraden betekent dus het
prerenderen opgeven, en dáár hangt de hele vindbaarheid en de laadtijd van de
site aan. 6.30.4 is het hoogste dat binnen 6.x bestaat.

**Waarom dat hier te verdedigen valt.** Geen van beide is in deze codebase
bereikbaar:

- *Open redirect.* De aanval vraagt dat een bezoeker het begin van een pad kan
  bepalen. Elke `to=` en elke `navigate()` in `src/` begint met een letterlijke
  `/`; wat er geïnterpoleerd wordt is een id uit onze eigen catalogus
  (`pkg.id`, `product.id`) of een waarde die door `encodeURIComponent` gaat.
  Niemand van buitenaf raakt aan het eerste teken.
- *Constructor-injectie.* Die zit in het hydrateren van fouten die een
  SSR-server per request meestuurt. `vite-react-ssg` rendert bij de build en
  serveert daarna platte HTML; er is geen server die tijdens een request fouten
  serialiseert.

**Wanneer dit opnieuw bekeken moet worden.** Zodra `vite-react-ssg` react-router
7 ondersteunt, of zodra er ergens een `to=` / `navigate()` bijkomt die een pad
uit de URL, een formulier of een API-antwoord overneemt. Dat tweede is de
gevaarlijke: het maakt de eerste melding in één commit wél bereikbaar.

## `script-src 'unsafe-inline'` — bewust blijven staan

De CSP laat inline scripts toe. Dat is de zwakste plek in de header, en het is
geen slordigheid: `vite-react-ssg` zet twee inline blokjes in elke pagina
(`window.__staticRouterHydrationData` en `__VITE_REACT_SSG_HASH__`), en de drie
JSON-LD-blokken zijn er ook. Zonder `'unsafe-inline'` blokkeert Chrome die.

Hashes zijn het alternatief, maar de hydration-data verschilt per route én per
build, dus dat wordt een set hashes per pagina — terwijl de CSP in `vercel.json`
één header voor de hele site is. Dat is niet in te passen zonder per-route
headers te genereren.

**Waarom dat hier draaglijk is.** Er is nauwelijks XSS-oppervlak om te
beschermen: drie keer `dangerouslySetInnerHTML` (`VerhuurToestelPage`,
`VerhuurPakketPage`, `components/ui/chart.tsx`), alle drie met vaste designtekst
uit de repo. Geen enkele daarvan raakt aan invoer van een bezoeker of aan een
antwoord van het portaal.

**Wanneer dit opnieuw bekeken moet worden.** Zodra er een
`dangerouslySetInnerHTML` bijkomt die tekst toont die niet uit de repo komt —
uit het portaal, uit een formulier, uit een URL. Dan is `'unsafe-inline'` niet
langer gratis.

## Brevo-sjablonen — nooit `{% autoescape off %}` op een formulierveld

Geen open gat, maar een voorwaarde die stil kan sneuvelen.

Het contactformulier en het aanvraagformulier zetten tekst van een anonieme
bezoeker als `{{ params.x }}` in een Brevo-sjabloon. Dat is veilig omdat de
sjabloontaal van Brevo (Pongo2, een Django-herimplementatie in Go) **standaard
escaped**: `<b>` komt als letterlijke tekst in de mailbox, niet als opmaak.

Die veiligheid hangt dus volledig aan een instelling die in Brevo staat en niet
in deze repo. Zet iemand `{% autoescape off %}` of een `|safe`-filter op een veld
dat uit een formulier komt, dan wordt de mail meteen een phishing-drager: hij
vertrekt vanaf een domein met SPF en DKIM op orde, dus hij komt aan ook.

**Regel:** `{% autoescape off %}` mag alleen op waarden die de server zelf
opbouwt (bedragen, datums, URL's uit `mail.ts`), nooit op `bericht`, `naam`,
`onderwerp`, `opmerking` of `ruwe_order`.

**Nog na te kijken.** De drie live sjablonen (198, 199, 200) zijn hier niet op
gecontroleerd — `vercel env pull` maskeert `BREVO_API_KEY`, dus dat kan alleen
vanuit de Brevo-UI of met de sleutel bij de hand.

## Rate limiting — de WAF-regel staat live

De teller in `src/lib/rateLimit.ts` staat in het geheugen van één
functie-instantie. Draaien er meerdere naast elkaar, dan heeft elk zijn eigen
teller en ligt de echte grens navenant hoger — en `/api/order` duwt rechtstreeks
naar de werklijst in het portaal.

De WAF telt wél over alle instanties heen. De regel `orderspam-drempel` staat
sinds 2026-08-10 **gepubliceerd**: 20 aanvragen per 60 s per IP, daarboven
`deny`, op `/api/order`, `/api/checkout`, `/api/contact` en `/api/extension` —
elke route die iets aanmaakt of mail verstuurt. Geverifieerd met 26 opeenvolgende
requests: de eerste 20 kwamen door, de rest kreeg een 403.

`/api/availability` staat er bewust niet in: de wizard bevraagt die route vaker,
daar geldt de ruimere grens van 120 per minuut uit de code.

## Opgelost sinds de eerste ronde

- **Mailrelay op `/api/contact` en `/api/order`.** Beide sturen een kopie naar
  het adres uit de request, en dat adres kiest de afzender zelf — een gratis
  manier om iemand anders vol te mailen vanaf ons domein. Er staat nu een
  drempel per ontvangeradres (`mailAllowed`, vijf per uur). Bewust alleen op de
  kopie naar de bezoeker: de mail naar het team gaat altijd door, want bij het
  contactformulier is die de enige opslag.
- **Onbetaalde holds konden de kalender volzetten.** Elke POST op
  `/api/checkout` legt echte toestellen 30 minuten apart zonder dat er betaald
  wordt. Met enkel de drempel per minuut kon één IP er een paar honderd laten
  staan. Nu maximaal tien per half uur (`MAX_HOLDS_PER_IP`), geteld ná de
  beschikbaarheidscontrole zodat een volle datum geen plaats kost.
- **Interne meldingen verdwenen stil zonder sjabloon.** In productie stonden
  alleen de drie klantsjablonen ingesteld; `send()` sloeg de rest over met een
  logregel. Daardoor gooide het contactformulier zijn berichten opnieuw weg en
  ging `intern_alarm` niet af wanneer een betaalde order het portaal niet haalde.
  De vier interne mails vallen nu terug op een kale tekstmail.

## Opgelost

- **CSP miste `https://*.js.stripe.com` in `script-src`.** Stripe.js start zijn
  frames op wisselende subdomeinen; die scripts werden geblokkeerd. `frame-src`
  en `connect-src` hadden de wildcard al. Ook `maps.googleapis.com` toegevoegd,
  zoals `docs.stripe.com/security/guide` voorschrijft.
- **Stripe-foutmelding lekte naar de bezoeker.** `api/checkout.ts` gaf de ruwe
  tekst van Stripe mee in het antwoord — daar staat in welke betaalmethodes op
  het account aan staan en welke parameter geweigerd werd. Gaat nu naar de logs,
  de bezoeker krijgt een vaste zin met het telefoonnummer.
- **Host-header bepaalde de `return_url` naar Stripe.** `api/checkout.ts` leidde
  het origin af uit `request.url`. Nu langs een allowlist, met het canonieke
  domein als terugval.
- **vite / esbuild (high, GHSA-67mh-4wv8-2f99).** Ging over de dev-server, niet
  over productie, maar stond wel als `high` in de lijst. Opgelost door vite 5 →
  7 samen met `vite-react-ssg` 0.8.9 → 0.9.2.
