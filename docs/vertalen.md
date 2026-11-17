# Vertalen naar het Frans — werkafspraken

Lees eerst `CLAUDE.md` en `docs/superpowers/specs/2026-11-17-meertaligheid-design.md`.
Fase nu: **alleen Frans**. Engels komt later met hetzelfde patroon (`en?:` laten we weg).

## Wat al bestaat (niet aanpassen tenzij je taak het zegt)

- `src/i18n/taal.ts` — `Taal`, `ACTIEVE_TALEN` (nl, fr), `taalUitPad`.
- `src/i18n/paden.ts` — NL-pad → FR-pad. `STATISCH`, `MAPPEN`, `registreerPaden`.
- `src/i18n/useTaal.ts` — `useTaal()`, `useCopy(COPY)`, `type Copy<T>`, `kies()`,
  `useLokaalPad()` / `lokaalPad()`, `formatEuro()`, `useKlant()`, `useToonBedrag()`.
- `src/App.tsx` — Franse routes worden automatisch afgeleid van de Nederlandse.
- `src/data/seo.ts` — `useSeo(sleutel)`; Franse titels in `src/data/seo.fr.ts`.
- `src/components/TaalWissel.tsx` — `TaalWissel` en `KlantWissel` voor headers.

## Het patroon

Eén component, teksten per taal ernaast. De Nederlandse tekst blijft **letterlijk**
gelijk (kopieer, herschrijf niet).

```tsx
import { useCopy, useLokaalPad, type Copy } from "@/i18n/useTaal";
import { useSeo } from "@/data/seo";

const COPY = {
  nl: { kicker: "Toepassing · chape", h1: "Chape drogen in twee tot vier weken", cta: "Bereken uw droogpakket" },
  fr: { kicker: "Application · chape", h1: "Sécher une chape en deux à quatre semaines", cta: "Calculez votre pack de séchage" },
} satisfies Copy<{ kicker: string; h1: string; cta: string }>;

const ChapeDrogenPage = () => {
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  return (
    <>
      <PageMeta {...useSeo("chapeDrogen")} jsonLd={...} />
      <span className="kick">{t.kicker}</span>
      <h1>{t.h1}</h1>
      <Link to={lp("/verhuur/calculator")}>{t.cta}</Link>
    </>
  );
};
```

- Grote pagina's: zet `COPY` gerust in een apart bestand naast de pagina
  (`ChapeDrogenPage.copy.ts`). Arrays (FAQ, stappen, kaarten) worden één array
  per taal, met dezelfde volgorde en lengte.
- Tekst met opmaak (`<strong>`, links midden in een zin): gebruik een functie in
  de copy, `uitleg: (lp) => <>Lees <Link to={lp("/gids")}>de gids</Link>.</>`,
  of splits de zin in stukken. Geen `dangerouslySetInnerHTML`.
- **Interne links altijd via `lp("/nl-pad")`** of `lokaalPad(pad, taal)`. Nooit
  een hard `/fr/...`. Externe links, `tel:`, `mailto:` en `#anker` niet.
- `toestelPad(key)` geeft een NL-pad: wikkel het, `lp(toestelPad(key))`.
- **`PageMeta`**: vervang `{...SEO.x}` door `{...useSeo("x")}`. Hardgecodeerde
  titels in een pagina verhuizen naar `seo.ts`/`seo.fr.ts` als ze een sleutel
  hebben; zo niet, zet ze in de COPY.
- **JSON-LD** (`src/lib/schema`): namen, beschrijvingen en FAQ-teksten in de taal
  van de pagina; `inLanguage` mag mee. URL's via `lokaalPad`.
- **Prijzen**: de catalogus is excl. btw. Toon bedragen via
  `const toon = useToonBedrag(); toon(excl).tekst` + `toon(excl).label`
  (particulier incl. 21%, bedrijf excl., label al vertaald). Typ nooit een bedrag over.
  Bedragen formatteren met `formatEuro(bedrag, taal)`.
- `alt`-teksten, `aria-label`s, `title`s, placeholders, foutmeldingen, toasts en
  knoppen horen er ook bij. Afbeeldingen zelf blijven gelijk.
- Datums: `toLocaleDateString(NUMBER_LOCALE[taal], …)` (`NUMBER_LOCALE` uit `taal.ts`).
- Componenten die je deelt met andere pagina's: maak ze taalbewust met
  `useCopy` in het component zelf, niet via props vanuit elke pagina.

## Frans (Belgisch)

- Vouvoiement (`vous`), ook waar het Nederlands "je" gebruikt.
- Vaktermen: *déshumidificateur de chantier* (bouwdroger), *déshumidificateur à
  condensation / à adsorption*, *chape*, *plafonnage* (pleisterwerk), *enduit*,
  *ventilateur axial / radial*, *chauffage de chantier* (bouwkachel), *mesure
  d'humidité*, *dégâts des eaux*, *moisissures*, *vide ventilé / isolation sous
  chape* (luchtkussen), *pompe à condensats*, *pack de séchage* (droogpakket),
  *garantie de séchage* (drooggarantie), *devis* (offerte), *GSM*, *TVAC/HTVA*.
- Typografie: spatie vóór `: ; ? !` en binnen `« »`, `n°`, decimale komma, `m²`,
  `m³/h`, `30 kW`, `21 %`. Bedragen `29,00 €`.
- Plaatsnamen: Franse naam waar die bestaat (Anvers, Gand, Bruges, Louvain,
  Malines, Courtrai, Ostende, Alost, Termonde, Saint-Nicolas, Tongres, Ypres,
  Furnes, Grammont, Renaix, Hal, Vilvorde, Tirlemont, Diest, Bruxelles; Brusselse
  gemeenten met hun officiële Franse naam). Provincies: Anvers, Flandre
  orientale, Flandre occidentale, Brabant flamand, Limbourg, Brabant wallon,
  Région de Bruxelles-Capitale.
- Merk- en productnamen blijven (Vernast, Eco Boost, TTK 350, Stripe).
- Schrijf natuurlijk Frans, geen woord-voor-woord vertaling, maar voeg geen
  claims, cijfers of beloftes toe die niet in het Nederlands staan.
- Geen em-dash (`—`) in lopende tekst als de Nederlandse tekst die ook mijdt
  (de gemeenteteksten worden daarop getest).

## Klaar betekent

1. `npx tsc --noEmit -p tsconfig.app.json` zonder fouten.
2. `npx vitest run` groen (pas tests alleen aan als ze Nederlandse tekst op een
   Franse route verwachten — nooit om een echte fout te verbergen).
3. `npx eslint <jouw bestanden>` zonder nieuwe fouten.
4. De NL-pagina toont exact dezelfde tekst als vóór je wijziging.
5. Bekijk je pagina's op de dev-server (http://localhost:8083/fr/…, draait al)
   met headless Chrome:
   `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars --window-size=1280,900 --virtual-time-budget=8000 --screenshot=/tmp/x.png URL`
   — de keuzepopup staat ervoor; dat is normaal.
6. Commit met `git -C ~/Downloads/bouwdroger-i18n` — alleen je eigen bestanden
   (`git add <paden>`, nooit `-A`), bericht in het Nederlands,
   `feat(i18n): <wat>`, eindigend op
   `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.
