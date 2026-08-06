# Openstaande kwetsbaarheden

Wat `npm audit` blijft melden, waarom het er nog staat, en waar de grens ligt.
Bijwerken zodra een van de twee opgelost raakt.

## react-router 6.30.4 — twee moderate meldingen

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
