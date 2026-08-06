# Verhuurplatform — design assets

Assets uit de Claude Design handoff `Vernast-bouwdroger.be.zip`
(`design_handoff_vernast_verhuur/assets/`), gebruikt door de pagina's onder
`/verhuur/*` en door `src/styles/verhuur.css`.

## Herkomst

| Bestand | Rol |
| --- | --- |
| `pkg-1..9.jpg` | Pakketfoto per oppervlaktebracket; `pkg-9` is de waterschade-variant |
| `ttk-170.png` · `ttk-350.png` · `ttk-650.png` | Bouwdrogers (small / medium / groot) |
| `ttv-4500.png` | Turbo axiaalventilator |
| `teddh-30.png` | Elektrische kachel |
| `lineup-dryers.png` | Tweede galerijbeeld op de pakketpagina |
| `worker-carry.png` | Uitgesneden werkman links in de calculatorkaart |
| `bg-brand.png` | Rode brand-achtergrond van de calculatorkaart |
| `logo-horizontal-white.png` · `logo-horizontal-black.png` | Vernast-logo (donkere / lichte balk) |

## Bewerking

De originelen zijn fors groter dan wat de pagina's tonen (`pkg-*` was
3508 × 3508). Ze zijn bij het importeren verkleind met `sips`:

- `pkg-*.jpg` → max 1400 px, JPEG-kwaliteit 78
- toestelfoto's en `lineup-dryers.png` → max 900 px
- `worker-carry.png` → max 800 px
- `bg-brand.png` en de logo's → onbewerkt

`assets/worker-thumb.png`, `team-*`, `partner-*`, `hero-team.png` en de
`bg-red*`-varianten uit de bundel zijn niet overgenomen: geen van de vier
pagina's verwijst ernaar.

## Bij een nieuwe design-versie

`src/styles/verhuur.css` is gegenereerd uit de `<style>`-blokken van de vier
designbestanden, niet handgeschreven. Bij een nieuwe export moeten de assets én
die CSS samen opnieuw afgeleid worden. Pas de CSS niet met de hand aan.
