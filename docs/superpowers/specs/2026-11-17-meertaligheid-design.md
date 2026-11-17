# Meertaligheid (NL / FR / EN) — ontwerp

Goedgekeurd in gesprek op 17-11-2026. Werkmap: `~/Downloads/bouwdroger-i18n` (kopie
van `bouwdroger-main`, met git als vangnet). Dev-server: `npm run dev:i18n` op :8083
(:8082 is bezet door de dev-server van het Vernast-portaal).

## Doel

De volledige site in het Frans en Engels, elk op eigen URL's voor Google, inclusief
de lokale SEO-pagina's (provincies en 313 gemeenten). Bij het eerste bezoek kiest de
klant taal en particulier/bedrijf; het land wordt geraden en is wijzigbaar.

## URL's

- Nederlands blijft zonder prefix (`/chape-drogen`). Bestaande posities en de
  Shopify-redirects blijven zo onaangeroerd. `/nl` en `/nl/*` sturen door naar `/`.
- Frans onder `/fr/…`, Engels onder `/en/…`, **met vertaalde slugs**
  (`/fr/sechage-chape`, `/en/screed-drying`).
- Eén tabel, `src/i18n/paden.ts`, koppelt elk Nederlands pad aan zijn FR- en
  EN-pad. Daaruit volgen de routes, de taalwissel, `hreflang` en de sitemap.
- Gemeente- en provinciepagina's krijgen Franse/Engelse plaatsnamen waar die
  bestaan (Anvers/Antwerp, Malines, Gand/Ghent, Louvain, Bruges, Courtrai, …;
  Brusselse gemeenten met hun officiële Franse naam).

## Teksten

- **Eén component per pagina.** Teksten staan naast de component als
  `const COPY = { nl: {…}, fr: {…}, en: {…} } satisfies Record<Taal, …>`; de
  component leest `COPY[useTaal()]`. De Nederlandse tekst blijft letterlijk gelijk.
  Geen gedupliceerde paginacomponenten: de logica bestaat één keer.
- Datagestuurde pagina's (gemeenten, regio's, realisaties, gidsen-data) krijgen een
  vertaald databestand naast het Nederlandse (`gemeenten.fr.ts`, `gemeenten.en.ts`)
  met exact dezelfde structuur. Alleen de pagina die ze toont laadt ze.
- Interne links gaan altijd via `useLokaalPad()` / `lokaalPad(pad, taal)` — nooit
  een hard `/fr/...` in een component.
- Frans = Belgisch Frans: *déshumidificateur de chantier*, *chape*, *plafonnage*,
  *TVAC/HTVA*, *GSM*, `n°`, spatie vóór `: ; ? !` (U+202F of gewone spatie),
  aanspreekvorm *vous*. Engels = Brits Engels (*metre*, *litre*, *mould*), aanspreek
  *you*. Bedragen: `29,00 €` (fr-BE), `€29.00` (en-BE).

## Keuzepopup

Ontwerp vastgelegd in de mockup (`popup.html` in de scratchpad, 17-11-2026):
foto met de drie vakmannen voor `case-renovatie`, rood verloop `#7A000F` onderaan
met het witte Vernast-logo, witte badge met schild en "Nr. 1 Droogservice",
schuifschakelaars (rail `#EEE8E4`, witte knop, zwarte tekst) voor taal (vlaggen
NL/FR/VK) en particulier/bedrijf (één persoon / team; gekozen icoon groen
`#1E9E50`), landkeuze als klein keuzelijstje, knop "Ga verder" wit → groen bij hover.

- Verschijnt alleen bij het eerste bezoek, pas ná mount (zit niet in de
  geprerenderde HTML), en nooit een automatische redirect.
- Voorkeur in `localStorage` (`vernast.voorkeur`: `{ taal, klant, land }`).
- Land: `api/land.ts` leest `cf-ipcountry` / `x-vercel-ip-country`; terugval BE.
- "Ga verder": op de homepage naar de homepage van de gekozen taal; elders naar
  dezelfde pagina in de gekozen taal. Ongewijzigde taal = popup sluiten.
- Header krijgt een taal- en klantwissel om later te wijzigen.

## Particulier / bedrijf

De catalogus rekent excl. btw. `useKlant()` + `toonBedrag(excl)` tonen incl. 21%
voor particulieren en excl. voor bedrijven, met het juiste label. Server-side
herrekening in `api/` verandert niet.

## Fasering

1. Fundament: `src/i18n/`, routes, `PageMeta` (`hreflang`, `og:locale`, `lang`),
   `seo.ts` per taal, popup, klantweergave, `dev:i18n`.
2. Gedeelde schil: headers, footers, navigatie, sitemap-pagina.
3. Inhoudspagina's (agents per groep).
4. Verhuurfunnel en checkout (Stripe-locale, foutmeldingen).
5. Provincie- en gemeentepagina's (agents per provincie).
6. Mails (Brevo-sjablonen per taal) — apart, vraagt sjablonen in Brevo.

## Nog te bevestigen door de eigenaar

- Onderbouwing van "Nr. 1 Droogservice" (komt in de commentaar).
- Juridische nalezing van de vertaalde privacyverklaring en algemene voorwaarden.
