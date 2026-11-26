# huis3d — het gedeelde 3D-huis

Eén huis voor twee simulators:

- **droogsimulator** — bouwdroger, `/verhuur/simulator` (deze map is de **bron**)
- **vochtsimulator** — Vernast-v2.0, `/simulator/vochtbestrijding/nieuw` (een **kopie**, read-only)

Wat erin zit: het woningmodel (`woning.ts`: types, breedtes, plattegronden, ramen, trappen,
toestellen per kamer), de maten, de bouwperiodes, het 3D-huis (`3d/IsoHouse3D.tsx`), de
interieurkit en de straat-render rond het huis. Samen met de assets in
`public/simulator/3d/` en `public/simulator/straat/`.

## Een fix aan het huis of de straat

1. Fix het **hier**, in bouwdroger. Nooit in de kopie in Vernast: `npm run huis3d:check` daar
   faalt dan, en de volgende sync zou je fix overschrijven.
2. Straat anders? Render opnieuw: `scripts/simulator-3d/render-straat.sh <woning> <breedte> [periode]`
   (Blender-werkmap: `~/Blender/huis3d`, zie `~/Blender/LEESMIJ.md`).
3. Merge naar `main` van bouwdroger.
4. In Vernast-v2.0: `npm run huis3d:sync` (neemt `origin/main` van bouwdroger) en commit het
   resultaat. Beide simulators hebben de fix.

## Regels voor code in deze map

- **Alleen relatieve imports** binnen `huis3d`, geen `@/`. De map moet in beide repo's werken.
- Niets uit de verhuur, prijzen of vochtdiagnose: dat blijft in de repo die het gebruikt
  (`src/lib/droogSimulator.ts`, `src/components/vocht3d/`). Wat de ene simulator extra nodig
  heeft, komt erin als optionele prop met een standaard die de andere niet merkt
  (`hoek`, `periode`, `wijk`, `children`).
- Compileert onder **React 18 + R3F 8** (bouwdroger) én **React 19 + R3F 9** (Vernast).
  Draai de type-check in beide repo's na een wijziging.
- De taal komt van buiten: `<HuisTaal.Provider value={taal}>` (`taal.ts`), standaard `nl`.
