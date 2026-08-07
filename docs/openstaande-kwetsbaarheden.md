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

## Opgelost

- **vite / esbuild (high, GHSA-67mh-4wv8-2f99).** Ging over de dev-server, niet
  over productie, maar stond wel als `high` in de lijst. Opgelost door vite 5 →
  7 samen met `vite-react-ssg` 0.8.9 → 0.9.2.
