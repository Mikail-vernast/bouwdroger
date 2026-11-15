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
      "Herenhuizen en appartementen uit de negentiende-eeuwse gordel: hoge plafonds, kelders onder het trottoir en zelden een lift om een toestel mee naar boven te krijgen.",
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
      "Arbeiderswoningen en nieuwe blokken langs het kanaal, waar het vocht meestal uit een kelder onder het maaiveld of een plat dak komt.",
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
      "Ruimer gebouwde woonwijken tegen het Zoniënwoud, met diepe kelders en garages die bij een hevige bui het water van de helling erboven krijgen.",
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
      "Leembodem en villawijken in de zuidrand van Brussel, met nieuwbouw rond Waver, Nijvel en Ottignies.",
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
      "Het land van de blauwe hardsteen, met groeven en dorpen in natuursteen rond Zinnik.",
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
      "Kanaal- en industriestreek rond de oude scheepsliften van het Centrumkanaal, met dicht bebouwde kernen.",
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
      "Het industriebekken aan de Samber, met arbeiderswijken en fabrieksgebouwen die herbestemd worden.",
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
      "De Borinage: rijen arbeiderswoningen uit de negentiende eeuw, gebouwd zonder waterkering in de muurvoet.",
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
      "Landbouwgemeenten op leem tussen Doornik en Edingen, met hoeves en dorpskernen in baksteen.",
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
      "De Scheldevallei aan de Franse grens, met het textielverleden van Moeskroen en Komen-Waasten.",
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
      "De Samberstreek en de Botte du Hainaut: hoeves, bos en kalkbodem tot tegen Chimay.",
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
      "Waar Samber en Maas samenkomen: stadswoningen met gewelfde kelders en hoog water bij de oever.",
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
      "De Maasvallei tussen de kalkrotsen, met diepe kelders en gebouwen die tegen de helling staan.",
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
      "De Fagne met haar schist- en kalkbodem: open landbouwgebied met natuurstenen hoeves.",
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
      "De Famenne, met kalk en schist in de ondergrond en hoeves in natuursteen.",
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
      "Het hoge Ardense plateau, waar een ruwbouw zonder bijverwarming de hele winter nat blijft.",
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
      "Bosrijke Ardennen rond Bouillon en Libramont, met natuurstenen gebouwen en veel hoogteverschil.",
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
      "Het Gutland tegen de Luxemburgse grens, met zandsteen en de verste ritten van het land.",
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
      "De Gaume, het zuidelijkste en warmste puntje van het land, met kalkrijke bodem en lichte hellingen.",
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
      "Het Haspengouwse leemplateau met grote vierkantshoeven, vlak akkerland en weinig hoogteverschil.",
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
      "De Maasvallei en de stad zelf, met negentiende-eeuwse woningen, souterrains en industrieel erfgoed.",
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
      "De Condroz en de Maasvallei: kalkbodem, diepe kelders en hoeves op de hellingen.",
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
      "De Hoge Venen en het Duitstalige oosten: het koudste stuk van het land voor een onverwarmde ruwbouw.",
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

export const STREKEN_PER_REGIO: Record<string, Streek[]> = {
  antwerpen: [
    {
      naam: "Stad Antwerpen en districten",
      kenmerk:
        "Rijwoningen en appartementen, smalle trappen, kelders onder het maaiveld. Compacte toestellen op één stopcontact. Berendrecht en Zandvliet staan er apart bij omdat mensen zo zoeken; bestuurlijk vormen ze samen met Lillo één district.",
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
        "Onze eigen streek: het magazijn staat in Aartselaar. Naoorlogse woningen en bungalows in renovatie, vaak dezelfde dag geleverd.",
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
        "Kleigrond en de oude steenbakkersdorpen langs de Rupel. Arbeiderswoningen zonder spouw, kelders met opstijgend vocht.",
      gemeenten: ["Boom", "Hemiksem", "Niel", "Rumst", "Schelle"],
    },
    {
      naam: "Klein-Brabant en Willebroek",
      kenmerk:
        "Klei- en poldergrond tussen Schelde en kanaal, met oude dorpskernen en nieuwbouw op de rand. Na een natte periode water in kelders en bergingen.",
      gemeenten: ["Bornem", "Puurs-Sint-Amands", "Willebroek"],
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
        "Zandgrond, vrijstaande woningen en kruipruimtes. Winterwerven die nauwelijks verwarmd zijn. Hier gaat vaak een bouwkachel of een adsorptiedroger mee.",
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
        "Smalle, diepe rijhuizen in de negentiende-eeuwse gordel en appartementen aan de Vaartkom. Per ruimte een compact toestel werkt er beter dan één groot in de gang.",
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
        "Onze kortste rit buiten de provincie: twintig minuten over de E17. Veel nieuwbouw in verkavelingen, en daar drogen we vooral chape van een volledig gelijkvloers.",
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
        "Hoog grondwater langs Schelde, Durme en Dender. Kelders en bergingen die bij elke natte periode terugkomen. Twee van onze werven hier zijn precies dat.",
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
        "Tussen Aalst en Ninove wordt meer nieuw gebouwd dan bijna overal in Vlaanderen: open en halfopen woningen waar de chape in één keer gelegd wordt.",
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
        "Open bebouwing op zandgrond tussen Eeklo en de Nederlandse grens. Ruime volumes, en in de winter een onverwarmde ruwbouw die eerst op temperatuur moet.",
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
        "Heuvelland met oude hoeves en herenhuizen in renovatie. Dikke massieve muren geven hun vocht traag af; hier staat een pakket doorgaans langer dan het gemiddelde.",
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
        "Villa's uit de jaren zestig tot tachtig die nu grondig gerenoveerd worden: drie bouwlagen vers pleisterwerk en een kelder onder het hele volume.",
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
        "Oude dorpskernen en hoeves tussen Halle en Asse, met verkavelingen ertussen. Leembodem, en dus chape die zonder hulp opvallend traag droogt.",
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
        "Studentenhuizen die per kamer verbouwd worden en stadswoningen met een gewelfde kelder. De condenspomp is hier geen luxe: reservoirs legen doet niemand.",
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
        "Nieuwbouw op zandleem rond Aarschot en Diest. In de winter hoort hier bijverwarming bij: onder 15 °C haalt een condensdroger te weinig rendement.",
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
        "Vlak akkerland met grote hoeves in herbestemming. Ruime, hoge volumes waar de droge lucht met een ventilator verdeeld moet worden.",
      gemeenten: ["Tienen", "Hoegaarden", "Landen", "Linter", "Zoutleeuw"],
    },
  ],

  "west-vlaanderen": [
    {
      naam: "De kust",
      kenmerk:
        "Appartementen in renovatie en waterschade achter de zeedijk. Vochtige buitenlucht maakt ventileren onvoorspelbaar, dus blijven ramen en deuren hier dicht.",
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
        "Historische panden met koude kelders en bergingen. Onder 15 °C zetten we er een adsorptiedroger in of warmen we de ruimte eerst op.",
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
        "Onze verste rit, dus plannen we ze in een vaste toer. Veel hoeverenovatie met massieve muren en een gelijkvloers zonder isolatie onder de chape.",
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
        "Nieuwbouw en bedrijfsgebouwen met grote vloeroppervlakken. Die delen we op in droogzones, met een berekende droger en een ventilator per zone.",
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
        "Tussen Roeselare en Tielt: verkavelingen en renovaties waar chape en pleisterwerk samen moeten drogen voor de vloerlegger kan starten.",
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

  limburg: [
    {
      naam: "Hasselt, Genk en Midden-Limburg",
      kenmerk:
        "De drukste streek van de provincie voor ons: stadsrenovatie in Hasselt, ruime nieuwbouw eromheen, en de werven waar een pakket van drie toestellen de regel is.",
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
        "Zandgrond die goed draineert, dus weinig kelders, maar wel de koudste winterwerven van Vlaanderen. Tussen november en maart gaat hier bijna altijd een kachel mee.",
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
        "Langs de Maas komt waterschade terug bij elke hoge waterstand: kelders en bergingen die onderlopen, en water dat via de vloer naar binnen komt.",
      gemeenten: ["Maaseik", "Kinrooi", "Dilsen-Stokkem", "Maasmechelen", "Lanaken"],
    },
    {
      naam: "Haspengouw en de Voerstreek",
      kenmerk:
        "Vierkantshoeves en herenhuizen in renovatie op leembodem. Dikke muren geven hun vocht traag af, en de rit tot aan de taalgrens is onze langste in Vlaanderen.",
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
  "noord-brabant": [
    {
      naam: "West-Brabant",
      kenmerk:
        "Onze dichtste Nederlandse streek: Bergen op Zoom ligt op een halfuur van het magazijn, op zandgrond.",
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
        "Zandgrond rond Tilburg en Waalwijk, met naoorlogse woonwijken en veel bedrijfsruimte op de zones.",
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
        "De Maaskant en de Meierij: kleigrond langs de Maas en zand daarachter, met grote hoeves.",
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
        "De regio rond Eindhoven en Helmond: veel nieuwbouw en bedrijfshallen, alles op zandgrond.",
      gemeenten: [
        "Asten",
        "Bergeijk",
        "Best",
        "Bladel",
        "Cranendonck",
        "Deurne",
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
  ],
  "zeeland": [
    {
      naam: "Zeeuws-Vlaanderen",
      kenmerk:
        "Polderklei achter de dijken, bereikbaar over Antwerpen of door de Westerscheldetunnel.",
      gemeenten: [
        "Hulst",
        "Sluis",
        "Terneuzen",
      ],
    },
    {
      naam: "De Zeeuwse eilanden",
      kenmerk:
        "Zeekleipolders en zeelucht: net als aan de Belgische kust houdt zout in een muur het vocht vast.",
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
  ],
  "nederlands-limburg": [
    {
      naam: "Noord-Limburg",
      kenmerk:
        "Zandgrond en tuinbouw rond Venlo en Venray, met kassen en bedrijfshallen langs de Maas.",
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
        "De Maasvallei rond Roermond en Weert, met grindgrond en dorpen langs de Maasplassen.",
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
        "Heuvelland en mergel rond Maastricht, en de oude mijnstreek rond Heerlen en Kerkrade.",
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
  ],
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

