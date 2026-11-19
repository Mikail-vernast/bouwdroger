import type { Copy } from "@/i18n/useTaal";

/**
 * De teksten van de leveringskaart op de homepage, per taal.
 *
 * De provincie- en gemeentenamen zelf komen uit de slugbestanden (`nameFr`),
 * maar daar staan alleen de Belgische provincies in: de Nederlandse hebben geen
 * Franse pagina. Op de Franse kaart staan ze wel, met hun Franse naam, en hun
 * link valt via `lokaalPad` terug op de Nederlandse pagina.
 */
export const PROVINCIE_FR: Record<string, { naam: string; in: string }> = {
  antwerpen: { naam: "Anvers", in: "à Anvers" },
  "oost-vlaanderen": { naam: "Flandre orientale", in: "en Flandre orientale" },
  "vlaams-brabant": { naam: "Brabant flamand", in: "en Brabant flamand" },
  brussel: { naam: "Bruxelles", in: "à Bruxelles" },
  "west-vlaanderen": { naam: "Flandre occidentale", in: "en Flandre occidentale" },
  limburg: { naam: "Limbourg", in: "au Limbourg" },
  "waals-brabant": { naam: "Brabant wallon", in: "en Brabant wallon" },
  henegouwen: { naam: "Hainaut", in: "en Hainaut" },
  namen: { naam: "Namur", in: "à Namur" },
  luxemburg: { naam: "Luxembourg", in: "en province de Luxembourg" },
  luik: { naam: "Liège", in: "à Liège" },
  zeeland: { naam: "Zélande", in: "en Zélande" },
  "noord-brabant": { naam: "Brabant-Septentrional", in: "au Brabant-Septentrional" },
  "nederlands-limburg": { naam: "Limbourg néerlandais", in: "au Limbourg néerlandais" },
};

/**
 * De streken uit `provincie-gemeenten.ts`, op hun Nederlandse naam. Ontbreekt
 * er een (een nieuwe streek), dan toont de Franse kaart de Nederlandse naam:
 * zichtbaar fout, en dus snel bijgezet, in plaats van een lege knop.
 */
export const STREEK_FR: Record<string, string> = {
  /* Brussel */
  "Brussel-centrum en de eerste kroon": "Bruxelles-centre et la première couronne",
  "De kanaalzone en de westrand": "La zone du canal et l'ouest",
  "De zuid- en oostrand": "Le sud et l'est",
  /* Wallonië */
  "Arrondissement Nijvel": "Arrondissement de Nivelles",
  "Arrondissement Zinnik": "Arrondissement de Soignies",
  "Arrondissement La Louvière": "Arrondissement de La Louvière",
  "Arrondissement Charleroi": "Arrondissement de Charleroi",
  "Arrondissement Bergen": "Arrondissement de Mons",
  "Arrondissement Aat": "Arrondissement d'Ath",
  "Arrondissement Doornik-Moeskroen": "Arrondissement de Tournai-Mouscron",
  "Arrondissement Thuin": "Arrondissement de Thuin",
  "Arrondissement Namen": "Arrondissement de Namur",
  "Arrondissement Dinant": "Arrondissement de Dinant",
  "Arrondissement Philippeville": "Arrondissement de Philippeville",
  "Arrondissement Marche-en-Famenne": "Arrondissement de Marche-en-Famenne",
  "Arrondissement Bastenaken": "Arrondissement de Bastogne",
  "Arrondissement Neufchâteau": "Arrondissement de Neufchâteau",
  "Arrondissement Aarlen": "Arrondissement d'Arlon",
  "Arrondissement Virton": "Arrondissement de Virton",
  "Arrondissement Borgworm": "Arrondissement de Waremme",
  "Arrondissement Luik": "Arrondissement de Liège",
  "Arrondissement Hoei": "Arrondissement de Huy",
  "Arrondissement Verviers": "Arrondissement de Verviers",
  /* Nederland */
  "West-Brabant": "Brabant occidental",
  "Midden-Brabant": "Brabant central",
  "Noordoost-Brabant": "Nord-est du Brabant",
  "Zuidoost-Brabant": "Sud-est du Brabant",
  "Zeeuws-Vlaanderen": "Flandre zélandaise",
  "De Zeeuwse eilanden": "Les îles zélandaises",
  "Noord-Limburg": "Nord du Limbourg",
  "Midden-Limburg": "Centre du Limbourg",
  "Zuid-Limburg": "Sud du Limbourg",
  /* Antwerpen */
  "Stad Antwerpen en districten": "Ville d'Anvers et districts",
  "Zuidrand en Scheldeboord": "Périphérie sud et rives de l'Escaut",
  Rupelstreek: "Région du Rupel",
  "Klein-Brabant en Willebroek": "Petit-Brabant et Willebroek",
  "Noordrand en Noorderkempen": "Périphérie nord et Campine du Nord",
  "Mechelse regio en Netevallei": "Région de Malines et vallée de la Nèthe",
  "De Kempen": "La Campine",
  /* Oost-Vlaanderen */
  "Gent en de Gentse rand": "Gand et sa périphérie",
  "Het Waasland": "Le Pays de Waes",
  "Scheldeland en de Dendermondse regio": "Pays de l'Escaut et région de Termonde",
  "De Denderstreek": "La région de la Dendre",
  "Het Meetjesland": "Le Meetjesland",
  "De Vlaamse Ardennen": "Les Ardennes flamandes",
  /* Vlaams-Brabant */
  "De Brusselse rand": "La périphérie bruxelloise",
  "Pajottenland en Zennevallei": "Pajottenland et vallée de la Senne",
  "Leuven en het Dijleland": "Louvain et la vallée de la Dyle",
  "Het Hageland": "Le Hageland",
  "Tienen en Vlaams-Haspengouw": "Tirlemont et la Hesbaye flamande",
  /* West-Vlaanderen */
  "De kust": "La côte",
  "Brugge en het Brugse Ommeland": "Bruges et ses environs",
  "De Westhoek": "Le Westhoek",
  "Kortrijk en de Leiestreek": "Courtrai et la vallée de la Lys",
  "Midden-West-Vlaanderen": "Centre de la Flandre occidentale",
  /* Limburg */
  "Hasselt, Genk en Midden-Limburg": "Hasselt, Genk et le centre du Limbourg",
  "Noord-Limburg en de Limburgse Kempen": "Nord du Limbourg et Campine limbourgeoise",
  "Het Maasland": "Le pays mosan",
  "Haspengouw en de Voerstreek": "La Hesbaye et les Fourons",
};

/**
 * Dezelfde kaart in het Engels: de gangbare Engelse exoniemen uit
 * docs/vertalen.md (Antwerp, East Flanders, Brussels, Liège). "Antwerp" alleen
 * leest als de stad, daarom "the province of" in de zinnen, zoals « province
 * d'Anvers » in het Frans. Gelijk aan `nameEn`/`zinEn` in `regio-slugs.ts`, op
 * Brussel na: op een speld past "Brussels", niet "Brussels-Capital Region".
 */
export const PROVINCIE_EN: Record<string, { naam: string; in: string }> = {
  antwerpen: { naam: "Antwerp", in: "in the province of Antwerp" },
  "oost-vlaanderen": { naam: "East Flanders", in: "in East Flanders" },
  "vlaams-brabant": { naam: "Flemish Brabant", in: "in Flemish Brabant" },
  brussel: { naam: "Brussels", in: "in Brussels" },
  "west-vlaanderen": { naam: "West Flanders", in: "in West Flanders" },
  limburg: { naam: "Limburg", in: "in Limburg" },
  "waals-brabant": { naam: "Walloon Brabant", in: "in Walloon Brabant" },
  henegouwen: { naam: "Hainaut", in: "in Hainaut" },
  namen: { naam: "Namur", in: "in the province of Namur" },
  luxemburg: { naam: "Luxembourg", in: "in the province of Luxembourg" },
  luik: { naam: "Liège", in: "in the province of Liège" },
  zeeland: { naam: "Zeeland", in: "in Zeeland" },
  "noord-brabant": { naam: "North Brabant", in: "in North Brabant" },
  "nederlands-limburg": { naam: "Dutch Limburg", in: "in Dutch Limburg" },
};

/**
 * Vlaamse plaatsen met een gangbare Engelse naam. De rest van Vlaanderen en
 * Nederland houdt zijn lokale naam; Brussel en Wallonië hun Franse (Ixelles,
 * Mons). Ook gebruikt door de zichtbare sitemap (`src/data/sitemap.ts`).
 */
export const PLAATS_EN: Record<string, string> = {
  Antwerpen: "Antwerp",
  Gent: "Ghent",
  Brugge: "Bruges",
  Oostende: "Ostend",
  Ieper: "Ypres",
  Brussel: "Brussels",
};

/**
 * De streken in het Engels. Ook gebruikt door de zichtbare sitemap, zodat de
 * kaart en /en/sitemap dezelfde naam dragen.
 */
export const STREEK_EN: Record<string, string> = {
  /* Brussel */
  "Brussel-centrum en de eerste kroon": "Central Brussels and the inner ring",
  "De kanaalzone en de westrand": "The canal zone and the west",
  "De zuid- en oostrand": "The south and east",
  /* Wallonië */
  "Arrondissement Nijvel": "Arrondissement of Nivelles",
  "Arrondissement Zinnik": "Arrondissement of Soignies",
  "Arrondissement La Louvière": "Arrondissement of La Louvière",
  "Arrondissement Charleroi": "Arrondissement of Charleroi",
  "Arrondissement Bergen": "Arrondissement of Mons",
  "Arrondissement Aat": "Arrondissement of Ath",
  "Arrondissement Doornik-Moeskroen": "Arrondissement of Tournai-Mouscron",
  "Arrondissement Thuin": "Arrondissement of Thuin",
  "Arrondissement Namen": "Arrondissement of Namur",
  "Arrondissement Dinant": "Arrondissement of Dinant",
  "Arrondissement Philippeville": "Arrondissement of Philippeville",
  "Arrondissement Marche-en-Famenne": "Arrondissement of Marche-en-Famenne",
  "Arrondissement Bastenaken": "Arrondissement of Bastogne",
  "Arrondissement Neufchâteau": "Arrondissement of Neufchâteau",
  "Arrondissement Aarlen": "Arrondissement of Arlon",
  "Arrondissement Virton": "Arrondissement of Virton",
  "Arrondissement Borgworm": "Arrondissement of Waremme",
  "Arrondissement Luik": "Arrondissement of Liège",
  "Arrondissement Hoei": "Arrondissement of Huy",
  "Arrondissement Verviers": "Arrondissement of Verviers",
  /* Nederland */
  "West-Brabant": "West Brabant",
  "Midden-Brabant": "Central Brabant",
  "Noordoost-Brabant": "North-east Brabant",
  "Zuidoost-Brabant": "South-east Brabant",
  "Zeeuws-Vlaanderen": "Zeelandic Flanders",
  "De Zeeuwse eilanden": "The Zeeland islands",
  "Noord-Limburg": "North Limburg",
  "Midden-Limburg": "Central Limburg",
  "Zuid-Limburg": "South Limburg",
  /* Antwerpen */
  "Stad Antwerpen en districten": "City of Antwerp and districts",
  "Zuidrand en Scheldeboord": "Southern edge and Scheldt bank",
  Rupelstreek: "The Rupel area",
  "Klein-Brabant en Willebroek": "Klein-Brabant and Willebroek",
  "Noordrand en Noorderkempen": "Northern edge and Northern Campine",
  "Mechelse regio en Netevallei": "Mechelen area and Nete valley",
  "De Kempen": "The Campine",
  /* Oost-Vlaanderen */
  "Gent en de Gentse rand": "Ghent and its outskirts",
  "Het Waasland": "The Waasland",
  "Scheldeland en de Dendermondse regio": "Scheldeland and the Dendermonde area",
  "De Denderstreek": "The Dender area",
  "Het Meetjesland": "The Meetjesland",
  "De Vlaamse Ardennen": "The Flemish Ardennes",
  /* Vlaams-Brabant */
  "De Brusselse rand": "The Brussels periphery",
  "Pajottenland en Zennevallei": "Pajottenland and Senne valley",
  "Leuven en het Dijleland": "Leuven and the Dyle valley",
  "Het Hageland": "The Hageland",
  "Tienen en Vlaams-Haspengouw": "Tienen and Flemish Hesbaye",
  /* West-Vlaanderen */
  "De kust": "The coast",
  "Brugge en het Brugse Ommeland": "Bruges and its surroundings",
  "De Westhoek": "The Westhoek",
  "Kortrijk en de Leiestreek": "Kortrijk and the Lys valley",
  "Midden-West-Vlaanderen": "Central West Flanders",
  /* Limburg */
  "Hasselt, Genk en Midden-Limburg": "Hasselt, Genk and Central Limburg",
  "Noord-Limburg en de Limburgse Kempen": "North Limburg and the Limburg Campine",
  "Het Maasland": "The Maasland",
  "Haspengouw en de Voerstreek": "Hesbaye and the Voeren area",
};

export interface RegioCopy {
  kick: string;
  h2: string;
  lede: string;
  gebied: string;
  groepen: [string, string, string];
  /** "in Antwerpen" / "à Anvers": voor de zinnen met de provincienaam. */
  inRegio: (slug: string, naam: string) => string;
  pinLabel: (inRegio: string) => string;
  kiesStreek: (naam: string) => string;
  strekenIn: (naam: string) => string;
  greep: string;
  /** De kenmerkzin van een streek; in het Frans opgebouwd uit zijn eerste drie gemeenten. */
  kenmerk: (nl: string, eerste: string[]) => string;
  chipEigen: (town: string) => string;
  chipRegio: (town: string, inRegio: string) => string;
  noot: string;
  huren: (inRegio: string) => string;
  calculator: string;
  werkgebied: string;
  hurenIn: string;
}

export const COPY = {
  nl: {
    kick: "Leveringsgebied",
    h2: "Wij leveren in heel België en in het zuiden van Nederland.",
    lede: "Klik op uw provincie, kies uw streek en zie meteen de gemeenten waar wij leveren, installeren en ophalen. Klik op de naam om naar de pagina van die provincie te gaan. Twijfelt u? Bel ons even.",
    gebied: "Gebied",
    groepen: ["Vlaanderen en Brussel", "Wallonië", "Nederland"],
    inRegio: (_slug, naam) => `in ${naam}`,
    pinLabel: (inRegio) => `Bouwdroger huren ${inRegio}`,
    kiesStreek: (naam) => `Kies uw streek binnen ${naam}:`,
    strekenIn: (naam) => `Streken in ${naam}`,
    greep: "Een greep uit de gemeenten waar wij leveren en installeren:",
    kenmerk: (nl) => nl,
    chipEigen: (town) => `Bouwdroger huren in ${town}`,
    chipRegio: (town, inRegio) => `${town}, bouwdroger huren ${inRegio}`,
    noot: "Staat uw gemeente er niet bij? Wij leveren in heel België en in het zuiden van Nederland. Bel ons op 03 689 90 65 en we bekijken het meteen.",
    huren: (inRegio) => `Bouwdroger huren ${inRegio}`,
    calculator: "Gratis Calculator",
    werkgebied: "Werkgebied",
    hurenIn: "Bouwdroger huren in:",
  },
  fr: {
    kick: "Zone de livraison",
    h2: "Nous livrons dans toute la Belgique et dans le sud des Pays-Bas.",
    lede: "Cliquez sur votre province, choisissez votre région et voyez immédiatement les communes où nous livrons, installons et reprenons. Cliquez sur le nom pour aller à la page de cette province. Un doute ? Appelez-nous.",
    gebied: "Zone",
    groepen: ["Flandre et Bruxelles", "Wallonie", "Pays-Bas"],
    inRegio: (slug, naam) => PROVINCIE_FR[slug]?.in ?? `à ${naam}`,
    pinLabel: (inRegio) => `Location de déshumidificateur de chantier ${inRegio}`,
    kiesStreek: (naam) => `Choisissez votre région (${naam})\u202f:`,
    strekenIn: (naam) => `Régions\u202f: ${naam}`,
    greep: "Quelques communes où nous livrons et installons :",
    kenmerk: (_nl, eerste) =>
      `Livraison à ${eerste.join(", ")} et dans les autres localités ci-dessous. Choisissez votre commune pour en savoir plus sur la location d'un déshumidificateur de chantier.`,
    chipEigen: (town) => `Location de déshumidificateur de chantier à ${town}`,
    chipRegio: (town, inRegio) => `${town}, location de déshumidificateur de chantier ${inRegio}`,
    noot: "Votre commune n'y figure pas ? Nous livrons dans toute la Belgique et dans le sud des Pays-Bas. Appelez-nous au 03 689 90 65 et nous regardons immédiatement.",
    huren: (inRegio) => `Louer un déshumidificateur ${inRegio}`,
    calculator: "Calculateur gratuit",
    werkgebied: "Zone desservie",
    hurenIn: "Location de déshumidificateur de chantier :",
  },
  en: {
    kick: "Delivery area",
    h2: "We deliver across Belgium and in the south of the Netherlands.",
    lede: "Click your province, choose your area and immediately see the municipalities where we deliver, install and collect. Click the name to go to that province's page. Not sure? Give us a call.",
    gebied: "Area",
    groepen: ["Flanders and Brussels", "Wallonia", "Netherlands"],
    inRegio: (slug, naam) => PROVINCIE_EN[slug]?.in ?? `in ${naam}`,
    pinLabel: (inRegio) => `Construction dehumidifier hire ${inRegio}`,
    kiesStreek: (naam) => `Choose your area within ${naam}:`,
    strekenIn: (naam) => `Areas in ${naam}`,
    greep: "A selection of the municipalities where we deliver and install:",
    kenmerk: (_nl, eerste) =>
      `Delivery in ${eerste.join(", ")} and the other places below. Choose your municipality to find out more about hiring a construction dehumidifier.`,
    chipEigen: (town) => `Construction dehumidifier hire in ${town}`,
    chipRegio: (town, inRegio) => `${town}, construction dehumidifier hire ${inRegio}`,
    noot: "Is your municipality not listed? We deliver across Belgium and in the south of the Netherlands. Call us on +32 3 689 90 65 and we will look into it straight away.",
    huren: (inRegio) => `Dehumidifier hire ${inRegio}`,
    calculator: "Free Calculator",
    werkgebied: "Service area",
    hurenIn: "Construction dehumidifier hire in:",
  },
} satisfies Copy<RegioCopy>;
