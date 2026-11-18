# Franse gemeentepagina's

Lees eerst `docs/vertalen.md` (toon, vaktermen, typografie). Dit bestand zegt
alleen wat er voor de gemeentepagina's bij komt.

## Welk bestand

- **Tekst:** `src/data/gemeenten-fr/<provincie>.ts`, één bestand per provincie
  (`antwerpen.ts`, `oost-vlaanderen.ts`, … `luik.ts`). Het exporteert
  `GEMEENTEN: Record<string, Gemeente>`; de sleutel is de **Nederlandse slug**
  (`mechelen`, `elsene`, `bergen`), zoals in `gemeente-slugs.ts`.
- **Aanzetten:** `src/data/gemeenten-fr/aan/<provincie>.ts`, de lijst `AAN`.
  Pas als de slug daar staat, bestaat `/fr/location-deshumidificateur-…`.
  Een tekst zonder regel in `AAN` staat klaar maar is niet online.
- Raak alleen de twee bestanden van je eigen provincie aan. `index.ts`,
  `laders.ts` en `aan/index.ts` hoeven niet bij te werken.

## Welke velden

Dezelfde interface als `src/data/gemeenten.ts` (`Gemeente`). Kopieer de
Nederlandse entry en vertaal:

- `title` (50–60 tekens, eigen per gemeente), `description` (120–160 tekens,
  eigen per gemeente), `h1`, `kicker`, `intro`, `bouw.kop`, `bouw.alineas`,
  `toestellen[].waarom`, `levering.kop`/`alinea`, `afhalen.kop`/`alinea`,
  `faq` (vraag en antwoord), `rit.afstand`/`rit.tijd`.

Niet vertalen, letterlijk overnemen:

- `slug`, `toestellen[].key`, `buren`, `realisaties` — dat zijn sleutels.
- Merk- en productnamen (Vernast, TTK 350), het adres (Boomsesteenweg 12,
  unit 11, Aartselaar), postcodes, telefoonnummers.
- `**…**` blijft: dat is de vetmarkering, zet hem rond dezelfde woorden.

## Regels

- **Eigen tekst, geen sjabloon.** Vertaal de Nederlandse tekst van díe
  gemeente; vul niet één tekst in met een andere plaatsnaam. Titel,
  description en vragen moeten per gemeente verschillen (de test controleert
  dat). Voeg geen claims, cijfers of beloftes toe die niet in het Nederlands
  staan.
- **Geen em-dash (`—`)** in tekst. Een komma, dubbele punt of nieuwe zin.
- **Franse plaatsnamen:** de `nameFr` uit `gemeente-slugs.ts` (Malines,
  Ixelles, Mons, Arlon, Liège). Ook in lopende tekst: "près d'Anvers",
  "entre Louvain et Malines". Aartselaar blijft Aartselaar.
- Vouvoiement, Belgisch Frans, spatie vóór `: ; ? !`, `m²`, `400 V`.
- Lidwoord bij de plaats: "à Mons", maar "au Rœulx", "à La Louvière".

## Een gemeente aanzetten

1. Voeg de vertaalde entry toe aan `gemeenten-fr/<provincie>.ts`.
2. Voeg haar Nederlandse slug toe aan `gemeenten-fr/aan/<provincie>.ts`.
3. `npx vitest run src/test/gemeenteTekstenFr.test.ts` — eigen titel en
   description, lengtes, geen dubbele vraag, geen em-dash, elke slug in `AAN`
   heeft een tekst.
4. Bekijk `/fr/location-deshumidificateur-<plaats>` op de dev-server.

Het Franse pad volgt vanzelf uit de Franse naam (`gemeentePadFr` in
`gemeente-slugs.ts`); typ het nergens over.
