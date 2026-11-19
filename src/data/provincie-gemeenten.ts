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
 * Aan deze lijst hangen twee secties van de provinciepagina: de gemeentenlijst
 * zelf én de droogtijdentabel. Die tabel is op alle vijf de pagina's identiek,
 * dus zonder eigen gemeententekst ertegenover zou ze het aandeel eigen tekst
 * omlaag halen; ze rollen daarom samen uit (zie `RegioPage.tsx`). Een provincie
 * die hier binnenkomt, wint er dus twee secties mee.
 *
 * **Geverifieerd op 13-11-2026** tegen de provincieartikelen op nl.wikipedia
 * en het overzicht van de fusies die op 1 januari 2025 ingingen. Die fusies
 * zaten nog niet in de Antwerpse lijst en kostten drie correcties: Borsbeek is
 * sinds dan het tiende district van Antwerpen en geen zelfstandige gemeente
 * meer, Zwijndrecht ging in Beveren-Kruibeke-Zwijndrecht op en ligt daarmee
 * weer in Oost-Vlaanderen, en Meerhout stond er simpelweg niet bij. De
 * aantallen hieronder kloppen met de officiële: 67 gemeenten in Antwerpen, 55
 * in Oost-Vlaanderen, 63 in Vlaams-Brabant, 62 in West-Vlaanderen, 38 in
 * Limburg en 19 in het Brussels gewest. Komt er een fusie bij, controleer ze dan opnieuw — een verzonnen of
 * verdwenen gemeente op een SEO-pagina is erger dan een onvolledige lijst.
 */
export interface Streek {
  /** Zoals hij in een zin staat: "in de Kempen", "in de Rupelstreek". */
  naam: string;
  /** Eén zin over wat er in deze streek gedroogd wordt. */
  kenmerk: string;
  gemeenten: string[];
}

/**
 * Het Brussels Hoofdstedelijk Gewest: de negentien gemeenten.
 *
 * Staat sinds 13-11-2026 gewoon in `STREKEN_PER_REGIO`, net als de vijf
 * provincies, omdat /bouwdroger-huren-brussel vanaf dan bestaat. Daarvoor
 * stond deze lijst er bewust buiten: de record is de lijst per regiopagina, en
 * een `brussel`-sleutel zonder pagina leverde een kop op die naar een 404 wees.
 * De aparte export blijft bestaan omdat ze leest wat ze is.
 *
 * De groepering volgt de bouw en niet de taalrol of het postnummer: de
 * negentiende-eeuwse gordel, de kanaalzone in het westen en de ruimere
 * woonwijken tegen het Zonienwoud drogen elk anders.
 */
export const BRUSSEL_STREKEN: Streek[] = [
  {
    naam: "Brussel-centrum en de eerste kroon",
    kenmerk:
      "Levering in Brussel, Elsene, Etterbeek en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
    gemeenten: [
      "Brussel",
      "Elsene",
      "Etterbeek",
      "Sint-Gillis",
      "Sint-Joost-ten-Node",
      "Schaarbeek",
    ],
  },
  {
    naam: "De kanaalzone en de westrand",
    kenmerk:
      "Levering in Anderlecht, Ganshoren, Jette en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
    gemeenten: [
      "Anderlecht",
      "Ganshoren",
      "Jette",
      "Koekelberg",
      "Sint-Agatha-Berchem",
      "Sint-Jans-Molenbeek",
    ],
  },
  {
    naam: "De zuid- en oostrand",
    kenmerk:
      "Levering in Evere, Oudergem, Sint-Lambrechts-Woluwe en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
    gemeenten: [
      "Evere",
      "Oudergem",
      "Sint-Lambrechts-Woluwe",
      "Sint-Pieters-Woluwe",
      "Ukkel",
      "Vorst",
      "Watermaal-Bosvoorde",
    ],
  },
];


/**
 * Waals-Brabant: de enige Waalse provincie met een eigen pagina, sinds
 * 15-11-2026.
 *
 * Een eigen constante om dezelfde reden als `BRUSSEL_STREKEN`: de lijst hoort
 * in `STREKEN_PER_REGIO`, want /bouwdroger-huren-waals-brabant bestaat, en
 * ook in `WAALSE_STREKEN`, want die telt alle 261 Waalse gemeenten. Eén array
 * op twee plaatsen, zodat de twee niet uit elkaar kunnen lopen.
 */
export const WAALS_BRABANT_STREKEN: Streek[] = [
  {
    naam: "Arrondissement Nijvel",
    kenmerk:
      "Levering in Bevekom (Beauvechain), Chastre, Chaumont-Gistoux en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
    gemeenten: [
      "Bevekom (Beauvechain)",
      "Chastre",
      "Chaumont-Gistoux",
      "Court-Saint-Étienne",
      "Eigenbrakel (Braine-l'Alleud)",
      "Geldenaken (Jodoigne)",
      "Genepiën (Genappe)",
      "Graven (Grez-Doiceau)",
      "Hélécine",
      "Incourt",
      "Itter",
      "Kasteelbrakel (Braine-le-Château)",
      "Lasne",
      "Mont-Saint-Guibert",
      "Nijvel (Nivelles)",
      "Orp-Jauche",
      "Ottignies-Louvain-la-Neuve",
      "Perwijs (Perwez)",
      "Ramillies",
      "Rebecq",
      "Rixensart",
      "Terhulpen (La Hulpe)",
      "Tubeke (Tubize)",
      "Villers-la-Ville",
      "Walhain",
      "Waterloo",
      "Waver (Wavre)",
    ],
  },
];

/**
 * Henegouwen, de tweede Waalse provincie met een eigen pagina (15-11-2026).
 * Net als Waals-Brabant één array op twee plaatsen.
 */
export const HENEGOUWEN_STREKEN: Streek[] = [
  {
    naam: "Arrondissement Zinnik",
    kenmerk:
      "Levering in 's-Gravenbrakel (Braine-le-Comte), Le Rœulx, Manage en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
    gemeenten: [
      "'s-Gravenbrakel (Braine-le-Comte)",
      "Le Rœulx",
      "Manage",
      "Seneffe",
      "Zinnik (Soignies)",
      "Écaussinnes",
    ],
  },
  {
    naam: "Arrondissement La Louvière",
    kenmerk:
      "Levering in Binche, Estinnes, La Louvière en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
    gemeenten: [
      "Binche",
      "Estinnes",
      "La Louvière",
      "Morlanwelz",
    ],
  },
  {
    naam: "Arrondissement Charleroi",
    kenmerk:
      "Levering in Aiseau-Presles, Chapelle-lez-Herlaimont, Charleroi en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
    gemeenten: [
      "Aiseau-Presles",
      "Chapelle-lez-Herlaimont",
      "Charleroi",
      "Châtelet",
      "Courcelles",
      "Farciennes",
      "Fleurus",
      "Fontaine-l'Évêque",
      "Gerpinnes",
      "Les Bons Villers",
      "Montigny-le-Tilleul",
      "Pont-à-Celles",
    ],
  },
  {
    naam: "Arrondissement Bergen",
    kenmerk:
      "Levering in Bergen (Mons), Boussu, Colfontaine en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
    gemeenten: [
      "Bergen (Mons)",
      "Boussu",
      "Colfontaine",
      "Dour",
      "Frameries",
      "Hensies",
      "Honnelles",
      "Jurbeke",
      "Lens",
      "Quaregnon",
      "Quiévrain",
      "Quévy",
      "Saint-Ghislain",
    ],
  },
  {
    naam: "Arrondissement Aat",
    kenmerk:
      "Levering in Aat (Ath), Belœil, Bernissart en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
    gemeenten: [
      "Aat (Ath)",
      "Belœil",
      "Bernissart",
      "Brugelette",
      "Chièvres",
      "Edingen (Enghien)",
      "Elzele (Ellezelles)",
      "Frasnes-lez-Anvaing",
      "Lessen (Lessines)",
      "Opzullik (Silly)",
      "Vloesberg",
    ],
  },
  {
    naam: "Arrondissement Doornik-Moeskroen",
    kenmerk:
      "Levering in Antoing, Brunehaut, Celles en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
    gemeenten: [
      "Antoing",
      "Brunehaut",
      "Celles",
      "Doornik (Tournai)",
      "Estaimpuis",
      "Komen-Waasten (Comines-Warneton)",
      "Leuze-en-Hainaut",
      "Moeskroen (Mouscron)",
      "Mont-de-l'Enclus",
      "Pecq",
      "Péruwelz",
      "Rumes",
    ],
  },
  {
    naam: "Arrondissement Thuin",
    kenmerk:
      "Levering in Anderlues, Beaumont, Chimay en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
    gemeenten: [
      "Anderlues",
      "Beaumont",
      "Chimay",
      "Erquelinnes",
      "Froidchapelle",
      "Ham-sur-Heure-Nalinnes",
      "Lobbes",
      "Merbes-le-Château",
      "Momignies",
      "Sivry-Rance",
      "Thuin",
    ],
  },
];

/**
 * Namen, met een eigen pagina sinds 15-11-2026. Eén array op twee plaatsen,
 * zoals Waals-Brabant.
 */
export const NAMEN_STREKEN: Streek[] = [
  {
    naam: "Arrondissement Namen",
    kenmerk:
      "Levering in Andenne, Assesse, Fernelmont en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
    gemeenten: [
      "Andenne",
      "Assesse",
      "Fernelmont",
      "Floreffe",
      "Fosses-la-Ville",
      "Gembloers (Gembloux)",
      "Gesves",
      "Jemeppe-sur-Sambre",
      "La Bruyère",
      "Mettet",
      "Namen",
      "Ohey",
      "Profondeville",
      "Sambreville",
      "Sombreffe",
      "Éghezée",
    ],
  },
  {
    naam: "Arrondissement Dinant",
    kenmerk:
      "Levering in Anhée, Beauraing, Bièvre en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
    gemeenten: [
      "Anhée",
      "Beauraing",
      "Bièvre",
      "Ciney",
      "Dinant",
      "Gedinne",
      "Hamois",
      "Hastière",
      "Havelange",
      "Houyet",
      "Onhaye",
      "Rochefort",
      "Somme-Leuze",
      "Vresse-sur-Semois",
      "Yvoir",
    ],
  },
  {
    naam: "Arrondissement Philippeville",
    kenmerk:
      "Levering in Cerfontaine, Couvin, Doische en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
    gemeenten: [
      "Cerfontaine",
      "Couvin",
      "Doische",
      "Florennes",
      "Philippeville",
      "Viroinval",
      "Walcourt",
    ],
  },
];

/**
 * Luxemburg, met een eigen pagina sinds 15-11-2026. Eén array op twee plaatsen,
 * zoals Waals-Brabant.
 */
export const LUXEMBURG_STREKEN: Streek[] = [
  {
    naam: "Arrondissement Marche-en-Famenne",
    kenmerk:
      "Levering in Durbuy, Hotton, La Roche-en-Ardenne en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
    gemeenten: [
      "Durbuy",
      "Hotton",
      "La Roche-en-Ardenne",
      "Manhay",
      "Marche-en-Famenne",
      "Nassogne",
      "Rendeux",
      "Tenneville",
      "Érezée",
    ],
  },
  {
    naam: "Arrondissement Bastenaken",
    kenmerk:
      "Levering in Bastenaken (Bastogne), Fauvillers, Gouvy en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
    gemeenten: [
      "Bastenaken (Bastogne)",
      "Fauvillers",
      "Gouvy",
      "Houffalize",
      "Sainte-Ode",
      "Vaux-sur-Sûre",
      "Vielsalm",
    ],
  },
  {
    naam: "Arrondissement Neufchâteau",
    kenmerk:
      "Levering in Bertrix, Bouillon, Daverdisse en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
    gemeenten: [
      "Bertrix",
      "Bouillon",
      "Daverdisse",
      "Herbeumont",
      "Libin",
      "Libramont-Chevigny",
      "Léglise",
      "Neufchâteau",
      "Paliseul",
      "Saint-Hubert",
      "Tellin",
      "Wellin",
    ],
  },
  {
    naam: "Arrondissement Aarlen",
    kenmerk:
      "Levering in Aarlen (Arlon), Attert, Aubange en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
    gemeenten: [
      "Aarlen (Arlon)",
      "Attert",
      "Aubange",
      "Martelange",
      "Messancy",
    ],
  },
  {
    naam: "Arrondissement Virton",
    kenmerk:
      "Levering in Chiny, Florenville, Habay en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
    gemeenten: [
      "Chiny",
      "Florenville",
      "Habay",
      "Meix-devant-Virton",
      "Musson",
      "Rouvroy",
      "Saint-Léger",
      "Tintigny",
      "Virton",
      "Étalle",
    ],
  },
];

/**
 * Luik, met een eigen pagina sinds 15-11-2026. Eén array op twee plaatsen,
 * zoals Waals-Brabant.
 */
export const LUIK_STREKEN: Streek[] = [
  {
    naam: "Arrondissement Borgworm",
    kenmerk:
      "Levering in Berloz, Borgworm (Waremme), Braives en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
    gemeenten: [
      "Berloz",
      "Borgworm (Waremme)",
      "Braives",
      "Crisnée",
      "Donceel",
      "Faimes",
      "Fexhe-le-Haut-Clocher",
      "Geer",
      "Hannuit (Hannut)",
      "Lijsem (Lincent)",
      "Oerle (Oreye)",
      "Remicourt",
      "Saint-Georges-sur-Meuse",
      "Wasseiges",
    ],
  },
  {
    naam: "Arrondissement Luik",
    kenmerk:
      "Levering in Ans, Awans, Aywaille en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
    gemeenten: [
      "Ans",
      "Awans",
      "Aywaille",
      "Beyne-Heusay",
      "Bitsingen (Bassenge)",
      "Blegny",
      "Chaudfontaine",
      "Comblain-au-Pont",
      "Dalhem",
      "Esneux",
      "Flémalle",
      "Fléron",
      "Grâce-Hollogne",
      "Herstal",
      "Juprelle",
      "Luik (Liège)",
      "Neupré",
      "Oupeye",
      "Saint-Nicolas",
      "Seraing",
      "Soumagne",
      "Sprimont",
      "Trooz",
      "Wezet (Visé)",
    ],
  },
  {
    naam: "Arrondissement Hoei",
    kenmerk:
      "Levering in Amay, Anthisnes, Burdinne en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
    gemeenten: [
      "Amay",
      "Anthisnes",
      "Burdinne",
      "Clavier",
      "Engis",
      "Ferrières",
      "Hamoir",
      "Hoei (Huy)",
      "Héron",
      "Marchin",
      "Modave",
      "Nandrin",
      "Ouffet",
      "Tinlot",
      "Verlaine",
      "Villers-le-Bouillet",
      "Wanze",
    ],
  },
  {
    naam: "Arrondissement Verviers",
    kenmerk:
      "Levering in Amel, Aubel, Baelen en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
    gemeenten: [
      "Amel",
      "Aubel",
      "Baelen",
      "Burg-Reuland",
      "Büllingen",
      "Bütgenbach",
      "Dison",
      "Eupen",
      "Herve",
      "Jalhay",
      "Kelmis",
      "Lierneux",
      "Limburg (Limbourg)",
      "Lontzen",
      "Malmedy",
      "Olne",
      "Pepinster",
      "Plombières",
      "Raeren",
      "Sankt Vith (Saint-Vith)",
      "Spa",
      "Stavelot",
      "Stoumont",
      "Theux",
      "Thimister-Clermont",
      "Trois-Ponts",
      "Verviers",
      "Weismes (Waimes)",
      "Welkenraedt",
    ],
  },
];

/**
 * Noord-Brabant, met een eigen pagina sinds 15-11-2026. Eén array op twee plaatsen,
 * zoals Waals-Brabant.
 */
export const NOORD_BRABANT_STREKEN: Streek[] = [
  {
    naam: "West-Brabant",
    kenmerk:
      "Levering in Alphen-Chaam, Altena, Baarle-Nassau en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
    gemeenten: [
      "Alphen-Chaam",
      "Altena",
      "Baarle-Nassau",
      "Bergen op Zoom",
      "Breda",
      "Drimmelen",
      "Etten-Leur",
      "Geertruidenberg",
      "Halderberge",
      "Moerdijk",
      "Oosterhout",
      "Roosendaal",
      "Rucphen",
      "Steenbergen",
      "Woensdrecht",
      "Zundert",
    ],
  },
  {
    naam: "Midden-Brabant",
    kenmerk:
      "Levering in Dongen, Gilze en Rijen, Goirle en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
    gemeenten: [
      "Dongen",
      "Gilze en Rijen",
      "Goirle",
      "Heusden",
      "Hilvarenbeek",
      "Loon op Zand",
      "Oisterwijk",
      "Tilburg",
      "Waalwijk",
    ],
  },
  {
    naam: "Noordoost-Brabant",
    kenmerk:
      "Levering in 's-Hertogenbosch, Bernheze, Boekel en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
    gemeenten: [
      "'s-Hertogenbosch",
      "Bernheze",
      "Boekel",
      "Boxtel",
      "Gemert-Bakel",
      "Land van Cuijk",
      "Maashorst",
      "Meierijstad",
      "Oss",
      "Sint-Michielsgestel",
      "Vught",
    ],
  },
  {
    naam: "Zuidoost-Brabant",
    kenmerk:
      "Levering in Asten, Bergeijk, Best en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
    gemeenten: [
      "Asten",
      "Bergeijk",
      "Best",
      "Bladel",
      "Cranendonck",
      "Deurne (Noord-Brabant)",
      "Eersel",
      "Eindhoven",
      "Geldrop-Mierlo",
      "Heeze-Leende",
      "Helmond",
      "Laarbeek",
      "Nuenen c.a.",
      "Oirschot",
      "Reusel-De Mierden",
      "Someren",
      "Son en Breugel",
      "Valkenswaard",
      "Veldhoven",
      "Waalre",
    ],
  },
];

/**
 * Zeeland, met een eigen pagina sinds 15-11-2026. Eén array op twee plaatsen,
 * zoals Waals-Brabant.
 */
export const ZEELAND_STREKEN: Streek[] = [
  {
    naam: "Zeeuws-Vlaanderen",
    kenmerk:
      "Levering in Hulst, Sluis, Terneuzen en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
    gemeenten: [
      "Hulst",
      "Sluis",
      "Terneuzen",
    ],
  },
  {
    naam: "De Zeeuwse eilanden",
    kenmerk:
      "Levering in Borsele, Goes, Kapelle en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
    gemeenten: [
      "Borsele",
      "Goes",
      "Kapelle",
      "Middelburg",
      "Noord-Beveland",
      "Reimerswaal",
      "Schouwen-Duiveland",
      "Tholen",
      "Veere",
      "Vlissingen",
    ],
  },
];

/**
 * Nederlands Limburg, met een eigen pagina sinds 15-11-2026. Eén array op twee plaatsen,
 * zoals Waals-Brabant.
 */
export const NEDERLANDS_LIMBURG_STREKEN: Streek[] = [
  {
    naam: "Noord-Limburg",
    kenmerk:
      "Levering in Beesel, Bergen (L.), Gennep en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
    gemeenten: [
      "Beesel",
      // "(L.)" zoals de gemeente zichzelf schrijft: er is ook een Bergen in Noord-Holland.
      "Bergen (L.)",
      "Gennep",
      "Horst aan de Maas",
      "Mook en Middelaar",
      "Peel en Maas",
      "Venlo",
      "Venray",
    ],
  },
  {
    naam: "Midden-Limburg",
    kenmerk:
      "Levering in Echt-Susteren, Leudal, Maasgouw en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
    gemeenten: [
      "Echt-Susteren",
      "Leudal",
      "Maasgouw",
      "Nederweert",
      "Roerdalen",
      "Roermond",
      "Weert",
    ],
  },
  {
    naam: "Zuid-Limburg",
    kenmerk:
      "Levering in Beek, Beekdaelen, Brunssum en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
    gemeenten: [
      "Beek",
      "Beekdaelen",
      "Brunssum",
      "Eijsden-Margraten",
      "Gulpen-Wittem",
      "Heerlen",
      "Kerkrade",
      "Landgraaf",
      "Maastricht",
      "Meerssen",
      "Simpelveld",
      "Sittard-Geleen",
      "Stein",
      "Vaals",
      "Valkenburg aan de Geul",
      "Voerendaal",
    ],
  },
];

export const STREKEN_PER_REGIO: Record<string, Streek[]> = {
  antwerpen: [
    {
      naam: "Stad Antwerpen en districten",
      kenmerk:
        "Levering in Antwerpen, Berchem, Berendrecht en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
      gemeenten: [
        "Antwerpen",
        "Berchem",
        "Berendrecht",
        "Zandvliet",
        "Borgerhout",
        "Borsbeek",
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
        "Levering in Aartselaar, Boechout, Edegem en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
      gemeenten: ["Aartselaar", "Boechout", "Edegem", "Hove", "Kontich", "Lint", "Mortsel"],
    },
    /*
      De Rupelstreek telt vijf gemeenten: Boom, Hemiksem, Niel, Rumst en
      Schelle. Hemiksem en Schelle stonden hier onder de Zuidrand en Bornem,
      Puurs-Sint-Amands en Willebroek stonden erbij, terwijl die tot
      Klein-Brabant horen. Nagerekend tegen de officiële indeling op
      13-11-2026; de streek zegt iets over de bodem en dus over het drogen, dus
      een verkeerde indeling zegt iets verkeerds.
    */
    {
      naam: "Rupelstreek",
      kenmerk:
        "Levering in Boom, Hemiksem, Niel en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
      gemeenten: ["Boom", "Hemiksem", "Niel", "Rumst", "Schelle"],
    },
    {
      naam: "Klein-Brabant en Willebroek",
      kenmerk:
        "Levering in Bornem, Puurs-Sint-Amands, Willebroek en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
      gemeenten: ["Bornem", "Puurs-Sint-Amands", "Willebroek"],
    },
    {
      naam: "Noordrand en Noorderkempen",
      kenmerk:
        "Levering in Brasschaat, Brecht, Essen en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
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
        "Levering in Mechelen, Berlaar, Bonheiden en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
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
        "Levering in Turnhout, Arendonk, Baarle-Hertog en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
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
        "Meerhout",
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

  "oost-vlaanderen": [
    {
      naam: "Gent en de Gentse rand",
      kenmerk:
        "Levering in Gent, Destelbergen, Lochristi en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
      gemeenten: [
        "Gent",
        "Destelbergen",
        "Lochristi",
        "Merelbeke-Melle",
        "Oosterzele",
        "Sint-Martens-Latem",
        "Nazareth-De Pinte",
        "Gavere",
        "Deinze",
        "Zulte",
      ],
    },
    {
      naam: "Het Waasland",
      kenmerk:
        "Levering in Sint-Niklaas, Beveren-Kruibeke-Zwijndrecht, Temse en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
      gemeenten: [
        "Sint-Niklaas",
        "Beveren-Kruibeke-Zwijndrecht",
        "Temse",
        "Stekene",
        "Sint-Gillis-Waas",
        "Waasmunster",
        "Lokeren",
      ],
    },
    {
      naam: "Scheldeland en de Dendermondse regio",
      kenmerk:
        "Levering in Dendermonde, Hamme, Zele en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
      gemeenten: [
        "Dendermonde",
        "Hamme",
        "Zele",
        "Berlare",
        "Buggenhout",
        "Lebbeke",
        "Wichelen",
        "Laarne",
        "Wetteren",
      ],
    },
    {
      naam: "De Denderstreek",
      kenmerk:
        "Levering in Aalst, Denderleeuw, Haaltert en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
      gemeenten: [
        "Aalst",
        "Denderleeuw",
        "Haaltert",
        "Erpe-Mere",
        "Lede",
        "Ninove",
        "Geraardsbergen",
        "Herzele",
        "Sint-Lievens-Houtem",
      ],
    },
    {
      naam: "Het Meetjesland",
      kenmerk:
        "Levering in Eeklo, Maldegem, Aalter en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
      gemeenten: [
        "Eeklo",
        "Maldegem",
        "Aalter",
        "Assenede",
        "Evergem",
        "Kaprijke",
        "Sint-Laureins",
        "Lievegem",
        "Zelzate",
      ],
    },
    {
      naam: "De Vlaamse Ardennen",
      kenmerk:
        "Levering in Oudenaarde, Ronse, Zottegem en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
      gemeenten: [
        "Oudenaarde",
        "Ronse",
        "Zottegem",
        "Brakel",
        "Kluisbergen",
        "Kruisem",
        "Horebeke",
        "Lierde",
        "Maarkedal",
        "Wortegem-Petegem",
        "Zwalm",
      ],
    },
  ],

  "vlaams-brabant": [
    {
      naam: "De Brusselse rand",
      kenmerk:
        "Levering in Vilvoorde, Zaventem, Machelen en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
      gemeenten: [
        "Vilvoorde",
        "Zaventem",
        "Machelen",
        "Grimbergen",
        "Meise",
        "Wemmel",
        "Steenokkerzeel",
        "Kampenhout",
        "Zemst",
        "Kortenberg",
        "Kraainem",
        "Wezembeek-Oppem",
        "Tervuren",
        "Hoeilaart",
        "Overijse",
        "Sint-Genesius-Rode",
        "Drogenbos",
        "Linkebeek",
      ],
    },
    {
      naam: "Pajottenland en Zennevallei",
      kenmerk:
        "Levering in Halle, Beersel, Sint-Pieters-Leeuw en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
      gemeenten: [
        "Halle",
        "Beersel",
        "Sint-Pieters-Leeuw",
        "Dilbeek",
        "Asse",
        "Ternat",
        "Liedekerke",
        "Roosdaal",
        "Lennik",
        "Pepingen",
        "Pajottegem",
        "Bever",
        "Affligem",
        "Opwijk",
        "Merchtem",
        "Londerzeel",
        "Kapelle-op-den-Bos",
      ],
    },
    {
      naam: "Leuven en het Dijleland",
      kenmerk:
        "Levering in Leuven, Herent, Bertem en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
      gemeenten: [
        "Leuven",
        "Herent",
        "Bertem",
        "Oud-Heverlee",
        "Huldenberg",
        "Bierbeek",
        "Boutersem",
        "Lubbeek",
        "Holsbeek",
        "Rotselaar",
        "Haacht",
        "Boortmeerbeek",
        "Keerbergen",
        "Tremelo",
        "Begijnendijk",
      ],
    },
    {
      naam: "Het Hageland",
      kenmerk:
        "Levering in Aarschot, Diest, Scherpenheuvel-Zichem en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
      gemeenten: [
        "Aarschot",
        "Diest",
        "Scherpenheuvel-Zichem",
        "Bekkevoort",
        "Tielt-Winge",
        "Glabbeek",
        "Kortenaken",
        "Geetbets",
      ],
    },
    {
      naam: "Tienen en Vlaams-Haspengouw",
      kenmerk:
        "Levering in Tienen, Hoegaarden, Landen en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
      gemeenten: ["Tienen", "Hoegaarden", "Landen", "Linter", "Zoutleeuw"],
    },
  ],

  "west-vlaanderen": [
    {
      naam: "De kust",
      kenmerk:
        "Levering in Knokke-Heist, Blankenberge, De Haan en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
      gemeenten: [
        "Knokke-Heist",
        "Blankenberge",
        "De Haan",
        "Bredene",
        "Oostende",
        "Middelkerke",
        "Nieuwpoort",
        "Koksijde",
        "De Panne",
      ],
    },
    {
      naam: "Brugge en het Brugse Ommeland",
      kenmerk:
        "Levering in Brugge, Damme, Zuienkerke en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
      gemeenten: [
        "Brugge",
        "Damme",
        "Zuienkerke",
        "Jabbeke",
        "Zedelgem",
        "Oostkamp",
        "Beernem",
        "Torhout",
        "Ichtegem",
        "Gistel",
        "Oudenburg",
      ],
    },
    {
      naam: "De Westhoek",
      kenmerk:
        "Levering in Ieper, Poperinge, Diksmuide en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
      gemeenten: [
        "Ieper",
        "Poperinge",
        "Diksmuide",
        "Veurne",
        "Alveringem",
        "Lo-Reninge",
        "Vleteren",
        "Heuvelland",
        "Mesen",
        "Langemark-Poelkapelle",
        "Houthulst",
        "Zonnebeke",
        "Koekelare",
        "Kortemark",
      ],
    },
    {
      naam: "Kortrijk en de Leiestreek",
      kenmerk:
        "Levering in Kortrijk, Harelbeke, Kuurne en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
      gemeenten: [
        "Kortrijk",
        "Harelbeke",
        "Kuurne",
        "Wevelgem",
        "Menen",
        "Wervik",
        "Zwevegem",
        "Anzegem",
        "Avelgem",
        "Spiere-Helkijn",
        "Deerlijk",
        "Waregem",
        "Lendelede",
      ],
    },
    {
      naam: "Midden-West-Vlaanderen",
      kenmerk:
        "Levering in Roeselare, Izegem, Ingelmunster en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
      gemeenten: [
        "Roeselare",
        "Izegem",
        "Ingelmunster",
        "Lichtervelde",
        "Hooglede",
        "Staden",
        "Moorslede",
        "Ledegem",
        "Ardooie",
        "Pittem",
        "Tielt",
        "Wingene",
        "Dentergem",
        "Oostrozebeke",
        "Wielsbeke",
      ],
    },
  ],

  brussel: BRUSSEL_STREKEN,

  "waals-brabant": WAALS_BRABANT_STREKEN,
  "henegouwen": HENEGOUWEN_STREKEN,
  "namen": NAMEN_STREKEN,
  "luxemburg": LUXEMBURG_STREKEN,
  "luik": LUIK_STREKEN,
  "noord-brabant": NOORD_BRABANT_STREKEN,
  "zeeland": ZEELAND_STREKEN,
  "nederlands-limburg": NEDERLANDS_LIMBURG_STREKEN,

  limburg: [
    {
      naam: "Hasselt, Genk en Midden-Limburg",
      kenmerk:
        "Levering in Hasselt, Genk, Zonhoven en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
      gemeenten: [
        "Hasselt",
        "Genk",
        "Zonhoven",
        "Diepenbeek",
        "Alken",
        "Zutendaal",
        "Lummen",
        "Herk-de-Stad",
        "Halen",
        "Nieuwerkerken",
      ],
    },
    {
      naam: "Noord-Limburg en de Limburgse Kempen",
      kenmerk:
        "Levering in Beringen, Heusden-Zolder, Houthalen-Helchteren en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
      gemeenten: [
        "Beringen",
        "Heusden-Zolder",
        "Houthalen-Helchteren",
        "Leopoldsburg",
        "Tessenderlo-Ham",
        "Hechtel-Eksel",
        "Peer",
        "Pelt",
        "Lommel",
        "Hamont-Achel",
        "Bocholt",
        "Bree",
        "Oudsbergen",
        "As",
      ],
    },
    {
      naam: "Het Maasland",
      kenmerk:
        "Levering in Maaseik, Kinrooi, Dilsen-Stokkem en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
      gemeenten: ["Maaseik", "Kinrooi", "Dilsen-Stokkem", "Maasmechelen", "Lanaken"],
    },
    {
      naam: "Haspengouw en de Voerstreek",
      kenmerk:
        "Levering in Sint-Truiden, Tongeren-Borgloon, Bilzen-Hoeselt en de andere plaatsen hieronder. Kies uw gemeente voor informatie over het huren van een bouwdroger.",
      gemeenten: [
        "Sint-Truiden",
        "Tongeren-Borgloon",
        "Bilzen-Hoeselt",
        "Riemst",
        "Wellen",
        "Heers",
        "Gingelom",
        "Herstappe",
        "Voeren",
      ],
    },
  ],
};

/**
 * Het werkgebied buiten Vlaanderen en Brussel: Wallonië en de Nederlandse
 * grensstreek.
 *
 * **Waarom dit apart staat van `STREKEN_PER_REGIO`.** Die record is de lijst
 * per gebiedspagina, en de test eist dat elke sleutel erin een bestaande
 * pagina heeft. De meeste gebieden hier hebben er nog geen; ze staan voorlopig
 * alleen op /sitemap, zoals Brussel dat deed tot 13-11-2026. Krijgt een
 * provincie haar pagina, dan staat haar lijst in beide records, als dezelfde
 * array: zo deed Waals-Brabant het op 15-11-2026.
 *
 * **Waar ze vandaan komen.** Niet uit het hoofd: de 261 Waalse gemeenten zijn
 * op 14-11-2026 uit de lijst van het Waals Gewest gehaald en per arrondissement
 * ingedeeld, en daarna nagerekend tegen de officiële aantallen (69 in
 * Henegouwen, 84 in Luik, 43 in Luxemburg, 38 in Namen, 27 in Waals-Brabant).
 * Dat Luxemburg er 43 heeft en geen 44 is het gevolg van de fusie van Bastenaken
 * en Bertogne op 2 december 2024, waardoor Wallonië van 262 naar 261 gemeenten
 * ging. De Nederlandse lijsten komen uit dezelfde controle: Noord-Brabant 56,
 * Zeeland 13, Nederlands Limburg 31.
 *
 * **De naam staat er tweetalig in** waar hij afwijkt ("Bergen (Mons)"). Wie
 * "Mons" intikt zoekt dezelfde droger als wie "Bergen" intikt, en een pagina
 * die alleen de Nederlandse naam kent, mist de helft van zijn streek.
 *
 * **Nederlands Limburg staat er sinds 15-11-2026 in**, alle 31 gemeenten. Het
 * was eerst weggelaten omdat Venlo en Roermond op anderhalf uur en meer liggen,
 * maar de hele provincie grenst aan België en wie er belt, vraagt hetzelfde als
 * in Zeeland: kan het, en wat kost het. "Op aanvraag" dekt die afstand al.
 *
 * De sleutel is `nederlands-limburg` en niet `limburg`: die laatste is de
 * Belgische provinciepagina, en een gedeelde sleutel zou de twee lijsten in
 * elkaar laten lopen.
 */
export const WAALSE_STREKEN: Record<string, Streek[]> = {
  "waals-brabant": WAALS_BRABANT_STREKEN,
  "henegouwen": HENEGOUWEN_STREKEN,
  "luik": LUIK_STREKEN,
  "namen": NAMEN_STREKEN,
  "luxemburg": LUXEMBURG_STREKEN,
};

export const NEDERLANDSE_STREKEN: Record<string, Streek[]> = {
  "noord-brabant": NOORD_BRABANT_STREKEN,
  "zeeland": ZEELAND_STREKEN,
  "nederlands-limburg": NEDERLANDS_LIMBURG_STREKEN,
};

/** Hoeveel gemeenten een lijst buiten Vlaanderen telt. */
export function aantalBuiten(lijst: Record<string, Streek[]>): number {
  return Object.values(lijst).reduce(
    (n, streken) => n + streken.reduce((m, s) => m + s.gemeenten.length, 0),
    0
  );
}

/** Hoeveel gemeenten een provincie in deze lijst heeft; 0 als ze er niet in staat. */
export function aantalGemeenten(regioSlug: string): number {
  return (STREKEN_PER_REGIO[regioSlug] ?? []).reduce((n, s) => n + s.gemeenten.length, 0);
}


/**
 * De streeknamen hierboven in het Frans, voor de Franse provincie- en
 * gemeentepagina's. Alleen de zichtbare labels: de groepering en de
 * gemeenten zelf blijven die van de Nederlandse lijst, zodat de twee talen
 * niet uit elkaar kunnen lopen. De plaatsnamen in de lijsten vertaalt
 * `plaatsFr` in `gemeente-slugs.ts`.
 *
 * De Nederlandse provincies staan er niet in: die hebben geen Franse pagina.
 * Een arrondissement draagt de Franse naam van zijn hoofdplaats.
 */
const STREEKNAAM_FR: Record<string, string> = {
  "Brussel-centrum en de eerste kroon": "Bruxelles-centre et la première couronne",
  "De kanaalzone en de westrand": "La zone du canal et l'ouest",
  "De zuid- en oostrand": "Le sud et l'est",
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
  "Stad Antwerpen en districten": "Anvers ville et ses districts",
  "Zuidrand en Scheldeboord": "La périphérie sud et les rives de l'Escaut",
  "Rupelstreek": "La région du Rupel",
  "Klein-Brabant en Willebroek": "Le Petit-Brabant et Willebroek",
  "Noordrand en Noorderkempen": "La périphérie nord et la Campine du Nord",
  "Mechelse regio en Netevallei": "La région de Malines et la vallée de la Nèthe",
  "De Kempen": "La Campine",
  "Gent en de Gentse rand": "Gand et sa périphérie",
  "Het Waasland": "Le Pays de Waes",
  "Scheldeland en de Dendermondse regio": "Le pays de l'Escaut et la région de Termonde",
  "De Denderstreek": "La vallée de la Dendre",
  "Het Meetjesland": "Le Meetjesland",
  "De Vlaamse Ardennen": "Les Ardennes flamandes",
  "De Brusselse rand": "La périphérie bruxelloise",
  "Pajottenland en Zennevallei": "Le Pajottenland et la vallée de la Senne",
  "Leuven en het Dijleland": "Louvain et la vallée de la Dyle",
  "Het Hageland": "Le Hageland",
  "Tienen en Vlaams-Haspengouw": "Tirlemont et la Hesbaye flamande",
  "De kust": "La côte",
  "Brugge en het Brugse Ommeland": "Bruges et ses environs",
  "De Westhoek": "Le Westhoek",
  "Kortrijk en de Leiestreek": "Courtrai et la vallée de la Lys",
  "Midden-West-Vlaanderen": "Le centre de la Flandre occidentale",
  "Hasselt, Genk en Midden-Limburg": "Hasselt, Genk et le centre du Limbourg",
  "Noord-Limburg en de Limburgse Kempen": "Le nord du Limbourg et la Campine limbourgeoise",
  "Het Maasland": "Le Maasland",
  "Haspengouw en de Voerstreek": "La Hesbaye et les Fourons",
};

/** De Franse naam van een streek; zonder vertaling de Nederlandse. */
export function streekNaamFr(naam: string): string {
  return STREEKNAAM_FR[naam] ?? naam;
}

/**
 * De Franse `kenmerk` van een streek. Elke Nederlandse `kenmerk` volgt
 * hetzelfde patroon ("Levering in A, B, C en de andere plaatsen hieronder."),
 * dus wordt hij hier uit de eerste drie gemeenten opgebouwd in plaats van
 * negenenvijftig keer vertaald.
 */
export function streekKenmerkFr(gemeenten: string[], plaatsFr: (naam: string) => string): string {
  const drie = gemeenten.slice(0, 3).map(plaatsFr).join(", ");
  return `Livraison à ${drie} et dans les autres localités ci-dessous. Choisissez votre commune pour en savoir plus sur la location d'un déshumidificateur.`;
}

/**
 * De streeknamen in het Engels, op dezelfde manier als `STREEKNAAM_FR`: alleen
 * de zichtbare labels, de groepering blijft die van de Nederlandse lijst.
 *
 * Een arrondissement draagt de lokale naam van zijn hoofdplaats (Nivelles,
 * Tournai-Mouscron), behalve waar het Engels een eigen naam heeft (Namur,
 * Liège, Mons). Rivieren en landstreken houden hun Nederlandse naam waar het
 * Engels er geen gangbare heeft (Waasland, Hageland, Meetjesland); de Kempen
 * heet "the Campine", Haspengouw "Hesbaye" en de Leie "the Lys", zoals in
 * Engelstalige reisgidsen en kaarten.
 */
const STREEKNAAM_EN: Record<string, string> = {
  "Brussel-centrum en de eerste kroon": "Central Brussels and the inner ring",
  "De kanaalzone en de westrand": "The canal zone and the western edge",
  "De zuid- en oostrand": "The southern and eastern edge",
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
  "Stad Antwerpen en districten": "Antwerp City and its districts",
  "Zuidrand en Scheldeboord": "The southern edge and the Scheldt bank",
  "Rupelstreek": "The Rupel area",
  "Klein-Brabant en Willebroek": "Klein-Brabant and Willebroek",
  "Noordrand en Noorderkempen": "The northern edge and the Northern Campine",
  "Mechelse regio en Netevallei": "The Mechelen area and the Nete valley",
  "De Kempen": "The Campine",
  "Gent en de Gentse rand": "Ghent and its outskirts",
  "Het Waasland": "The Waasland",
  "Scheldeland en de Dendermondse regio": "Scheldeland and the Dendermonde area",
  "De Denderstreek": "The Dender valley",
  "Het Meetjesland": "The Meetjesland",
  "De Vlaamse Ardennen": "The Flemish Ardennes",
  "De Brusselse rand": "The Brussels periphery",
  "Pajottenland en Zennevallei": "Pajottenland and the Zenne valley",
  "Leuven en het Dijleland": "Leuven and the Dijle valley",
  "Het Hageland": "The Hageland",
  "Tienen en Vlaams-Haspengouw": "Tienen and Flemish Hesbaye",
  "De kust": "The coast",
  "Brugge en het Brugse Ommeland": "Bruges and its surroundings",
  "De Westhoek": "The Westhoek",
  "Kortrijk en de Leiestreek": "Kortrijk and the Lys valley",
  "Midden-West-Vlaanderen": "Central West Flanders",
  "Hasselt, Genk en Midden-Limburg": "Hasselt, Genk and central Limburg",
  "Noord-Limburg en de Limburgse Kempen": "North Limburg and the Limburg Campine",
  "Het Maasland": "The Maasland",
  "Haspengouw en de Voerstreek": "Hesbaye and the Voeren area",
};

/** De Engelse naam van een streek; zonder vertaling de Nederlandse. */
export function streekNaamEn(naam: string): string {
  return STREEKNAAM_EN[naam] ?? naam;
}

/** De Engelse `kenmerk` van een streek, opgebouwd zoals `streekKenmerkFr`. */
export function streekKenmerkEn(gemeenten: string[], plaatsEn: (naam: string) => string): string {
  const drie = gemeenten.slice(0, 3).map(plaatsEn).join(", ");
  return `Delivery to ${drie} and the other places below. Choose your municipality for details on hiring a dehumidifier.`;
}
