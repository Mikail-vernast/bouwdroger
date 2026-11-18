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
} satisfies Copy<RegioCopy>;
