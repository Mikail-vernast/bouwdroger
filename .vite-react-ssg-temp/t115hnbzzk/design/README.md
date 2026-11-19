# Home V3 — design assets

Assets van het Claude Design-project
[Vernast — Home V3](https://claude.ai/design/p/019e06c0-e370-7490-9405-548a5fb5a2c6?file=Home+V3.html).

Alle bestanden hier zijn **de echte design-assets**, geëxtraheerd uit de
standalone HTML-export (`Vernast Bouwdrogers - Home (standalone).html`). Die
export bundelt elke asset base64-encoded in een `<script type="__bundler/manifest">`,
gekoppeld aan de markup via UUID's. Dat was de enige volledige route: de
Claude Design MCP kapt `get_file` af op 256 KiB, waardoor de grotere
afbeeldingen daar onbruikbaar uit kwamen.

## Herkomst

| Bestand | Rol in de pagina |
| --- | --- |
| `bg-red.jpg` | Achtergrond van hero, statrule-band, configurator, over-ons, foto-kaart, CTA-case én de dif-sectie |
| `logo-horizontal-white.png` | Logo in de nav (op donker) en in de footer |
| `logo-horizontal-black.png` | Logo in de nav zodra de header op licht komt |
| `team-cutout.png` | Hero-artwork |
| `eco-boost.jpg` · `eco-performance.jpg` · `eco-ultimate.jpg` · `eco-revolution.jpg` | Hoofdgamma-kaarten |
| `vent-axiaal.jpg` · `vent-radiaal.jpg` · `kachel-30.jpg` · `kachel-20.jpg` | Accessoire-kaarten |
| `lineup-dryers.png` | Eco-sectie: de drie toestellen waarover de hotspots liggen |
| `worker-thumb.png` | Foto-kaart in "wat u vermijdt" |
| `delivery-art.png` | Levering-sectie |
| `team-lineup.png` | Over-ons-sectie |
| `worker-arrow-crop.png` | Werkman links onder de FAQ |
| `cta-art.jpg` | CTA-banner onderaan |

De export gebruikt **één** achtergrondafbeelding voor alle zes CSS-plekken plus
de inline `background` op `.dif` — in de bundle waren dat drie UUID's met
byte-identieke inhoud. Hier is dat één `bg-red.jpg`; de gegenereerde CSS
verwijst overal daarnaar.

`logo-horizontal-black.png` zit **niet** in de standalone export: het
logo-swap-script verwijst er met een letterlijke bestandsnaam naar, die de
bundler niet meepakt. Dat bestand komt daarom uit de Design MCP (klein genoeg
om onafgekapt op te halen).

## Bij een nieuwe design-versie

`src/styles/home-v3.css` is gegenereerd, niet handgeschreven. Bij een nieuwe
export moeten de assets én de CSS samen opnieuw afgeleid worden, zodat de
UUID-mapping klopt. Pas de CSS niet met de hand aan.
