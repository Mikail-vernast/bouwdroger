/**
 * Alle gemeenten per provincie, gegroepeerd per streek.
 *
 * Waarvoor dit dient: de provinciepagina noemde zeventien gemeenten en
 * suggereerde daarmee dat we alleen daar komen. Wie "bouwdroger huren
 * Hemiksem" of "bouwdroger Westerlo" zoekt, vond niets — terwijl we er wel
 * leveren. Deze lijst zet elke gemeente van de provincie op haar
 * provinciepagina, zodat die zoekopdrachten ergens landen.
 *
 * **Gegroepeerd per streek en niet per arrondissement**, want een streek zegt
 * iets over de bouw en dus over het drogen: de Kempen is zandgrond en koude
 * winterwerven, de Rupelstreek is kleigrond en arbeiderswoningen, de
 * agglomeratie is rijwoningen en smalle trappen. Dat is wat de bezoeker en de
 * tekst eromheen nodig hebben; een arrondissement is een bestuurlijke grens
 * waar niemand naar zoekt.
 *
 * Heeft een gemeente een eigen pagina (`gemeente-slugs.ts`), dan wordt haar
 * naam hier automatisch een link — deze lijst hoeft dus niets te weten over
 * welke pagina's al bestaan.
 *
 * ⚠️ **Te verifiëren vóór publicatie.** Deze gemeentelijsten zijn met de hand
 * opgesteld en niet tegen een officiële bron (Statbel, Agentschap Binnenlands
 * Bestuur) gelegd. Fusies en herindelingen veranderen ze. Controleer ze per
 * provincie voor de pagina live gaat; een verzonnen of verdwenen gemeente op
 * een SEO-pagina is erger dan een onvolledige lijst.
 */
export interface Streek {
  /** Zoals hij in een zin staat: "in de Kempen", "in de Rupelstreek". */
  naam: string;
  /** Eén zin over wat er in deze streek gedroogd wordt. */
  kenmerk: string;
  gemeenten: string[];
}

export const STREKEN_PER_REGIO: Record<string, Streek[]> = {
  antwerpen: [
    {
      naam: "Stad Antwerpen en districten",
      kenmerk:
        "Rijwoningen en appartementen, smalle trappen, kelders onder het maaiveld. Compacte toestellen op één stopcontact.",
      gemeenten: [
        "Antwerpen",
        "Berchem",
        "Berendrecht",
        "Zandvliet",
        "Lillo",
        "Borgerhout",
        "Deurne",
        "Ekeren",
        "Hoboken",
        "Merksem",
        "Wilrijk",
      ],
    },
    {
      naam: "Zuidrand en Scheldeboord",
      kenmerk:
        "Onze eigen streek: het magazijn staat in Aartselaar. Naoorlogse woningen en bungalows in renovatie, vaak dezelfde dag geleverd.",
      gemeenten: [
        "Aartselaar",
        "Boechout",
        "Borsbeek",
        "Edegem",
        "Hemiksem",
        "Hove",
        "Kontich",
        "Lint",
        "Mortsel",
        "Schelle",
        "Zwijndrecht",
      ],
    },
    {
      naam: "Rupelstreek",
      kenmerk:
        "Kleigrond en de oude steenbakkersdorpen. Arbeiderswoningen zonder spouw, kelders met opstijgend vocht.",
      gemeenten: ["Boom", "Niel", "Rumst", "Willebroek", "Puurs-Sint-Amands", "Bornem"],
    },
    {
      naam: "Noordrand en Noorderkempen",
      kenmerk:
        "Villa's op ruime percelen met een volledige kelderverdieping, en naar het noorden toe steeds opener bebouwing.",
      gemeenten: [
        "Brasschaat",
        "Brecht",
        "Essen",
        "Kalmthout",
        "Kapellen",
        "Malle",
        "Schilde",
        "Schoten",
        "Stabroek",
        "Wijnegem",
        "Wommelgem",
        "Wuustwezel",
        "Zandhoven",
        "Zoersel",
        "Ranst",
      ],
    },
    {
      naam: "Mechelse regio en Netevallei",
      kenmerk:
        "Stadsrenovatie binnen de vesten, nieuwbouwprojecten erbuiten, en bij hoogwater van de Nete waterschade in kelders en gelijkvloerse ruimtes.",
      gemeenten: [
        "Mechelen",
        "Berlaar",
        "Bonheiden",
        "Duffel",
        "Heist-op-den-Berg",
        "Lier",
        "Nijlen",
        "Putte",
        "Sint-Katelijne-Waver",
      ],
    },
    {
      naam: "De Kempen",
      kenmerk:
        "Zandgrond, vrijstaande woningen en kruipruimtes. Winterwerven die nauwelijks verwarmd zijn — hier gaat vaak een bouwkachel of een adsorptiedroger mee.",
      gemeenten: [
        "Turnhout",
        "Arendonk",
        "Baarle-Hertog",
        "Balen",
        "Beerse",
        "Dessel",
        "Geel",
        "Grobbendonk",
        "Herentals",
        "Herenthout",
        "Herselt",
        "Hoogstraten",
        "Hulshout",
        "Kasterlee",
        "Laakdal",
        "Lille",
        "Merksplas",
        "Mol",
        "Olen",
        "Oud-Turnhout",
        "Ravels",
        "Retie",
        "Rijkevorsel",
        "Vorselaar",
        "Vosselaar",
        "Westerlo",
      ],
    },
  ],
};

/** Hoeveel gemeenten een provincie in deze lijst heeft; 0 als ze er niet in staat. */
export function aantalGemeenten(regioSlug: string): number {
  return (STREKEN_PER_REGIO[regioSlug] ?? []).reduce((n, s) => n + s.gemeenten.length, 0);
}
