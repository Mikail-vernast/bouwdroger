# SEO/AEO — openstaande bevindingen

Register van wat er bij een audit gevonden is en nog niet opgelost is. Doel:
niet elke ronde opnieuw dezelfde dingen ontdekken. Wat opgelost is, verdwijnt
hier en wordt — als het kan terugkeren — een controle in
`scripts/audit-seo.mjs`.

Laatste ronde: **2026-08-11**. Vorige: 2026-08-07.
Domein live op `vernast-bouwdrogers.be` sinds 2026-08-14 (bevinding 1).

---

## Blokkerend

### 1. Domeinverhuizing — opgelost op 2026-08-14

De site draait op een eigen domein: **`vernast-bouwdrogers.be`** (one.com,
"alleen domein" — geen hostingpakket, geen MX). Niet `bouwdrogerservice.be`:
daar draait de Shopify-winkel nog. Apex en `www` hangen allebei aan
`vrnst/bouwdroger`, met `www` als **308-redirect naar de apex**, ingesteld op
het domein in Vercel zelf en niet in `vercel.json` — zo geldt hij ook voor
routes die daar geen regel voor hebben.

| Waar | Waarde |
| --- | --- |
| one.com, A `@` | `76.76.21.21` |
| one.com, CNAME `www` | `cname.vercel-dns.com` |
| Vercel `VITE_SITE_URL` (production) | `https://vernast-bouwdrogers.be` |

De code valt overal op datzelfde domein terug als de variabele wegvalt
(`src/lib/site.ts`, `src/lib/origin.ts`, `src/lib/vernastOrder.ts`,
`scripts/generate-seo-files.mjs`). `src/lib/origin.ts` heeft het domein ook in
de allowlist, anders stuurt Stripe de betaler na het afrekenen naar het oude
`vercel.app`-adres.

**De volgorde is het punt:** eerst DNS, dan pas `VITE_SITE_URL` en een nieuwe
build. Andersom levert het precies de storing hieronder op — canonicals naar een
domein dat de site niet uitlevert. Waarom dat zo duur was:

op 2026-08-11 stond `VITE_SITE_URL` op productie al op
`https://www.bouwdrogerservice.be` terwijl dat domein niet aan het
Vercel-project hing. Gevolg: 23 van de 24 indexeerbare pagina's zetten een
canonical naar een URL die **404** gaf, de sitemap somde 24 onbereikbare URL's
op, en `llms.txt` gaf een AI-assistent acht dode links. Het raakte niet alleen
zoekmachines — `VITE_SITE_URL` bouwt óók de links in de bevestigings- en
herinneringsmails (`src/lib/vernastOrder.ts`, `api/reminders.ts`), dus een klant
die net betaald had kreeg een link naar een pagina die niet bestond.

Voortaan gedekt door `node scripts/audit-seo.mjs --live`, dat controleert of het
domein in de canonicals deze site ook echt uitlevert.

`bouwdrogerservice.be` zelf blijft voorlopig op Shopify staan. Zodra
`vernast-bouwdrogers.be` draait, kan dat domein er als tweede bij en de
redirects van de oude Shopify-URL's staan al klaar in `vercel.json`; zie
"Opgelost". Daarna kan het Shopify-abonnement opgezegd worden. **MX en SPF
blijven daar ongemoeid** — die staan al bij one.com (`mailpod11-cph3`), niet bij
Shopify.

### 2. Search Console-property — opgelost op 2026-08-14

Twee properties, allebei `siteOwner`: `sc-domain:vernast-bouwdrogers.be` (de
leidende — dekt apex, `www` en beide protocollen) en
`https://vernast-bouwdrogers.be/`. De sitemap is op allebei ingediend en werd
binnen twee seconden opgehaald: **25 URL's, 0 fouten, 0 waarschuwingen**.

Twee dingen om te weten voor de volgende keer:

- **De `gsc`-MCP kan geen `sc-domain:`-properties aan** — hij plakt er `https://`
  voor en faalt op "not a valid Search Console site URL". Aanmaken, sitemaps en
  alles wat de domain-property raakt gaat rechtstreeks tegen
  `webmasters/v3`, met het OAuth-token uit
  `~/.config/gsc/oauth-credentials.json`.
- **Verifiëren kan niet vanaf hier.** Dat token heeft enkel de scope
  `webmasters`, niet `siteverification`, en de OAuth-client weigert een
  loopback-redirect (`redirect_uri_mismatch`), dus incrementele autorisatie
  loopt dood. Een property *aanmaken* lukt wel via de API — die komt dan binnen
  als `siteUnverifiedUser`; het verifiëren zelf is een handmatige stap in de UI.

Vertoningsdata is er nog niet — een nieuw domein is bij Google eerst "URL is
onbekend". Zodra die binnenloopt is bevinding 9 pas te beslissen.

---

## Feitelijke claims die nagekeken moeten worden

### 3. Beoordelingscijfers — opgelost op 2026-08-14

Er stonden **drie verschillende cijfers** op de site, geen enkele met een bron:
"4,8 / 5 · 412 Google reviews" in de hero, de statistiekbalk en de
`aggregateRating` van `/`; "Beoordeeld met 4.9/5 sterren" op `/levering`; en
"4.9/5" op élke pakketpagina. De 412 komt van de groep — dezelfde 412 staat op
de vochtbestrijdingssite — terwijl de schema ze aan Vernast Bouwdrogers
toeschreef, dat nog geen eigen Google Business Profile heeft. Trustindex
bevestigt enkel "boven 4,5" zonder aantal; Solvari toont 4,8 op **5**
ervaringen.

Alles eruit. `REVIEWS` in `src/lib/site.ts` staat nu op `null` en alle drie de
verbruikers guarden erop, dus **één regel terugzetten brengt hero,
statistiekbalk en schema tegelijk terug** zodra er een echt cijfer is. Waar het
weghalen een gat liet, staat nu een belofte uit onze eigen voorwaarden (100%
droog-garantie) in plaats van een claim over onszelf.

Gecontroleerd op de build: `aggregateRating`, `412 Google`, `4,8/5`, `4.9/5` en
`Beoordeeld met` komen in **nul** van de 105 pagina's nog voor.

### 4. Verzonnen klantenquotes — opgelost op 2026-08-14

Zes stuks, niet vier: `Marc D.` en `An V.` op `/waterschade`, `Luc B.` en
`Hilde V.` op `/renovatie`, én `Björn C.` en `Pieter M.` op `/nieuwbouw`. Plus
`Pieter D.` in het social-proof-blok van PackageDetailPage, dat op **elke**
pakketpagina meeprerenderde. Alle reviewsecties zijn verwijderd; van het
social-proof-blok blijven de vier punten over die in de voorwaarden staan.

`src/components/Reviews.tsx` en `src/components/Hero.tsx` zijn geschrapt: allebei
dode code (nergens geïmporteerd) met dezelfde soort claim erin — Hero.tsx had
nog een vierde hardcoded "4.8 op Google Reviews".

### 5. Geen ondernemingsnummer

Wettelijk verplicht op een Belgische handelssite. Het verzonnen
`BTW BE 0123.456.789` is er op 07-08 uitgehaald; het echte nummer staat er nog
altijd niet in. Staat open sinds de vorige ronde.

Op 14-08 opnieuw geprobeerd het zelf te vinden: het staat niet in deze repo,
niet in de vault, en **ook niet op `vernast.be` zelf**. Een nummer uit een
bedrijvenregister overtypen is hier het verkeerde soort zekerheid — een fout
ondernemingsnummer op een handelssite is erger dan geen. Dit moet van Brent
komen.

---

## Structureel

### 6. Drie namen voor één bedrijf — grotendeels opgelost op 2026-08-14

**`Vernast Bouwdrogers` is de naam**, en dat was geen smaakkwestie meer: de
schema zei het al en het domein `vernast-bouwdrogers.be` bevestigt het. In de
tekst is dat overal doorgevoerd — footers, alt-teksten, de magazijnvermelding en
de copyrightregel op `/verhuur/afhalen`. De twee paginatitels op
`| Vernast Verhuur` eindigen nu op `| Vernast`, gelijk aan de twintig andere.

Twee dingen die code niet kan oplossen:

- **`src/assets/logo-white.png` heeft "Verhuur" in het beeld gebrand.** Dat is
  het logo van de klassieke `Navbar`, dus op `/levering`, `/machines`,
  `/prijzen` en de pakketpagina's staat de oude naam nog letterlijk in het
  plaatje. Vraagt een nieuw logobestand, geen commit.
- **Het e-mailadres is `info@vernast-verhuur.be`.** Een vierde variant van de
  naam, en die staat in `CONTACT` én in elke verstuurde mail.

Kleinere inconsistentie die bij deze ronde opviel: de statistiekbalk op de
homepage zegt "450+ woningen en werven", de pakketpagina's zeggen "500+
projecten afgerond". Allebei plausibel, maar niet allebei waar.

### 7. Drie namen voor dezelfde machines

`ECO Boost / Performance / Ultimate` (71 pagina's), `TTK 170 / 350 / 650`
(14 pagina's) en `Small / Medium Bouwdroger` (2 pagina's) beschrijven hetzelfde
gamma. Een antwoordmachine ziet drie productlijnen in plaats van één. Staat
open sinds de vorige ronde; dit is een data-consolidatie, geen SEO-fix.

### 8. Twee site-shells

De klassieke pagina's en de verhuurfunnel hebben elk hun eigen navbar en footer
met een eigen menu. Dat splitst de interne linkstructuur. `/verhuur/afhalen` en
`/verhuur/pakket` zijn met 14 inkomende links het slechtst verbonden.

### 9. Kannibalisatie tussen de twee shells

`/afhalen` ("Bouwdroger afhalen in Aartselaar") en `/verhuur/afhalen`
("Bouwdroger huren en zelf afhalen in Aartselaar") mikken op dezelfde
zoekopdracht; hetzelfde geldt voor `/calculator` en `/verhuur/calculator`.
Beide indexeerbaar, dus ze concurreren met elkaar.

### 10. Geen lokale landingspagina's

Niets voor "bouwdroger huren Antwerpen / Gent / Mechelen …", terwijl
`areaServed` vijf provincies claimt en het bedrijf het van lokale zoekopdrachten
moet hebben. Grootste onbenutte kans, maar wel echt werk.

---

## Klein

### 11. Tariefafbeeldingen zijn PNG's

`/verhuur/pakket` laadt vier PNG's van samen ~640 KB (`ttv-4500.png`,
`ttk-170.png`, `teddh-30.png`, `ttk-350.png`). De paden komen uit
`src/data/tarieven.ts`, dat door `scripts/fetch-tarieven.mjs` gegenereerd wordt
— converteren moet dus bij de bron gebeuren, niet in deze repo.
`public/products/vernast-schimmel.png` (961 KB) wordt nergens gebruikt.

### 12. Afbeeldingen zonder `width`/`height`

208 van de 224 op de indexeerbare pagina's. Gemeten op de echte site blijft CLS
onder de drempel (0,046 op `/`, 0,044 op `/verhuur/pakket`) omdat het
LCP-beeld ze wél heeft, dus dit is een latent risico en geen actuele fout. Het
auditscript telt het mee zonder erop te falen.

### 13. Dezelfde vier FAQ-vragen op acht toestelpagina's

"Waar haal ik het toestel af?", "Wat breng ik mee bij de afhaling?", "Kan dit
toestel ook geleverd en geïnstalleerd worden?" en "Waarom zijn afhaalprijzen
lager?" staan woordelijk op alle acht. Bruikbaar voor een assistent, maar het
verzwakt wel de eigenheid van elke pagina.

---

## Opgelost op 2026-08-11

- `priceRange` beloofde "€9–€34 per dag" terwijl het gamma van € 8 tot € 25
  liep — op dezelfde homepage waar de tekst al "vanaf € 8" zei. Wordt nu
  afgeleid uit de tarieflijst; het auditscript vergelijkt het voortaan met de
  `OfferCatalog`.
- `/waterschade` was de enige commerciële landingspagina zonder FAQ. Vijf
  vragen toegevoegd, zichtbaar én als `FAQPage`. Het auditscript eist er nu
  een op de vijf landingspagina's.
- Meta description van `/verhuur/afhalen` was 172 tekens; ingekort tot 160.
- **Redirects voor de 222 oude Shopify-URL's** staan in `vercel.json` (50
  regels). De winkel op `www.bouwdrogerservice.be` heeft 107 producten, 81
  collecties, 30 pagina's en 4 blogposts in haar sitemap; zonder redirects
  vallen die allemaal op 404 zodra de DNS omgaat, en is alles wat daar ooit
  aan autoriteit is opgebouwd weg. Nu gaat `/collections/kelder-drogen` naar
  `/renovatie`, `/pages/faq-waterschade` naar `/waterschade`,
  `/pages/welke-bouwdroger-heb-ik-nodig` naar `/calculator`, de
  technische-detailpagina's naar `/machines`, `/blogs/*` naar `/realisaties`,
  en er staan catch-alls onder `/collections/*`, `/products/*` en `/pages/*`
  zodat er niets doorheen valt. Winkelmandje, checkout en account gaan
  tijdelijk (307) naar de homepage. Geverifieerd op een preview-deploy: alle
  regels vuren en de bestemming geeft 200.

  De redirects doen nu nog niets — ze worden pas actief wanneer het domein
  daadwerkelijk naar Vercel wijst. Ze staan er dus vóór de verhuizing, niet
  erna, want een gat van een paar dagen is precies waar rankings sneuvelen.
