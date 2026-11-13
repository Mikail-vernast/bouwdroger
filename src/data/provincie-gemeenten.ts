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

/** Hoeveel gemeenten een provincie in deze lijst heeft; 0 als ze er niet in staat. */
export function aantalGemeenten(regioSlug: string): number {
  return (STREKEN_PER_REGIO[regioSlug] ?? []).reduce((n, s) => n + s.gemeenten.length, 0);
}

