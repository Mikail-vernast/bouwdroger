# Engelse gemeentepagina's

Lees eerst `docs/vertalen.md` (vooral "Engels — aanvullende afspraken": Brits
Engels, vaktermen, plaatsnamen). Dit bestand zegt alleen wat er voor de
gemeentepagina's bij komt. Het werkt precies zoals `gemeenten-fr/`.

## Welk bestand

- **Tekst:** `src/data/gemeenten-en/<provincie>.ts`, één bestand per provincie.
  Het exporteert `GEMEENTEN: Record<string, Gemeente>`; de sleutel is de
  **Nederlandse slug** (`mechelen`, `elsene`, `bergen`), zoals in
  `gemeente-slugs.ts`.
- **Aanzetten:** `src/data/gemeenten-en/aan/<provincie>.ts`, de lijst `AAN`.
  Pas als de slug daar staat, bestaat `/en/dehumidifier-hire-…`. Een tekst
  zonder regel in `AAN` staat klaar maar is niet online.
- Raak alleen de twee bestanden van je eigen provincie aan. `index.ts`,
  `laders.ts` en `aan/index.ts` hoeven niet bij te werken.
- De provinciepagina zelf staat in `src/data/regios-en/<provincie>.ts` en
  bestaat al voor alle elf Belgische provincies.

## Welke velden

Dezelfde interface als `src/data/gemeenten.ts` (`Gemeente`). Vertaal de
Nederlandse entry; de Franse in `gemeenten-fr/` mag je naast je leggen, maar
het Nederlands is leidend. Vertaal `title` (50–60 tekens, eigen per gemeente),
`description` (120–160 tekens, eigen per gemeente), `h1`, `kicker`, `intro`,
`bouw`, `toestellen[].waarom`, `levering`, `afhalen`, `faq`, `rit`
("about 60 km", "about fifty minutes").

Letterlijk overnemen: `slug`, `toestellen[].key` (zelfde volgorde), `buren`,
`realisaties`, merk- en productnamen, het adres (Boomsesteenweg 12, unit 11,
Aartselaar), postcodes. `**…**` blijft rond dezelfde woorden staan.

## Regels

- **Eigen tekst, geen sjabloon.** Vertaal de tekst van díe gemeente. Titel,
  description en vragen verschillen per gemeente (de test controleert dat).
  Geen claims, cijfers of beloftes die niet in het Nederlands staan.
- **Geen em-dash (`—`)**, ook geen `--`.
- **Brits Engels:** metre, litre, mould, colour, centre; *flat* liever dan
  *apartment*. Hoofdterm "construction dehumidifier", zoekwoord "dehumidifier
  hire" (title en h1 bevatten "dehumidifier" en de Engelse naam).
- **Plaatsnamen:** de `nameEn` uit `gemeente-slugs.ts` (`NAAM_EN`): Ghent,
  Bruges, Ostend, Ypres, Antwerp, Brussels, Liège, Namur, Mons; elders de
  lokale naam (Mechelen, Leuven, Kortrijk, Wavre, Ixelles, Sankt Vith). Ook in
  lopende tekst en bij de buurgemeenten. Een provincie na "in": "in the
  province of Antwerp" (anders leest het als de stad), "in East Flanders".
- Vaktermen: screed, plasterwork, drying package, drying guarantee, site
  heater, condensate pump, moisture reading, quote. Btw: "excl. VAT".

## Een gemeente aanzetten

1. Voeg de vertaalde entry toe aan `gemeenten-en/<provincie>.ts`.
2. Voeg haar Nederlandse slug toe aan `gemeenten-en/aan/<provincie>.ts`.
3. `npx vitest run src/test/gemeenteTekstenEn.test.ts src/test/plaatsPadenEn.test.ts`.
4. Bekijk `/en/dehumidifier-hire-<plaats>` op de dev-server.

Het Engelse pad volgt vanzelf uit de Engelse naam (`gemeentePadEn` in
`gemeente-slugs.ts`); typ het nergens over. Een stad die haar naam met haar
provincie deelt, krijgt `-city` (`antwerp-city`, `liege-city`).
