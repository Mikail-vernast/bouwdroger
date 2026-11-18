/**
 * De gemeentepagina's, zonder hun inhoud.
 *
 * Zelfde opzet en zelfde reden als `regio-slugs.ts`: dit bestandje wordt door
 * de router (`App.tsx`) en door `V3Regio` op de homepage gelezen, en die zitten
 * in de entry-chunk die élke bezoeker op élke pagina laadt. De teksten staan
 * daarom apart in `gemeenten.ts`, dat alleen de gemeentepagina zelf importeert.
 *
 * De slugs volgen de zoekopdracht ("bouwdroger huren mechelen"), niet de
 * bestuurlijke naam.
 *
 * **Van pilot naar drie provincies.** Begonnen op 12-11-2026 met de zeventien
 * gemeenten van de provincie Antwerpen die al op de homepage stonden, omdat
 * honderd pagina's die enkel in plaatsnaam verschillen precies zijn wat Google
 * *doorway pages* noemt en uitfiltert — en dat zou ook de vijf
 * provinciepagina's meeslepen die wél werken (64% eigen tekst, gemeten
 * 12-11-2026). Op 13-11-2026 uitgebreid tot heel Antwerpen, en daarna tot heel
 * Oost-Vlaanderen en Vlaams-Brabant, en op 14-11-2026 tot West-Vlaanderen,
 * Limburg en de negentien Brusselse gemeenten: 313 pagina's, één voor elke
 * plaats waar we leveren. Die lat van eigen tekst geldt voor elke nieuwe
 * pagina, en `gemeenteTeksten.test.ts` controleert wat daarvan te meten valt:
 * eigen titel, eigen description, geen vraag twee keer, geen em-dash.
 *
 * Een gemeente toevoegen raakt drie bestanden: hier een entry, de tekst in
 * `gemeenten.ts`, en niets meer — de route, de sitemap, de chips op de
 * homepage en de lijst op de provinciepagina leiden zich hieruit af.
 */
import { registreerPaden } from "../i18n/paden.js";
import { GEMEENTEN_MET_FR } from "./gemeenten-fr/aan/index.js";

export interface GemeenteRoute {
  slug: string;
  /** Zoals de gemeente in een zin staat: "in Mechelen", "in Heist-op-den-Berg". */
  name: string;
  /** Het pad van de pagina, zonder trailing slash — zoals de hele site. */
  path: string;
  /** De slug van de provincie waar ze onder valt; zie `regio-slugs.ts`. */
  regio: string;
  /** De hoofdpostcode. Staat op de pagina en in de LocalBusiness-schema. */
  postcode: string;
  /**
   * Hoe de gemeente in het kruimelpad staat, als haar naam daar botst met de
   * provincie erboven. Het pad las "Home / Antwerpen / Antwerpen" — twee
   * niveaus met hetzelfde label zeggen een bezoeker én een crawler niets.
   * Alleen de stad Antwerpen heeft dit nodig; laat het elders weg.
   */
  kruimel?: string;
  /**
   * Andere plaatsnamen die deze pagina dekt.
   *
   * Berendrecht en Zandvliet liggen in dezelfde polder achter de haven en
   * delen hun bodem, hun grondwaterstand en hun rit: twee pagina's zouden twee
   * keer hetzelfde zeggen. Ze krijgen er één, en `gemeenteVanPlaats()` stuurt
   * ook "Zandvliet" daarheen zodat die naam in de streeklijst en op de sitemap
   * geen dode tekst blijft.
   */
  ookVoor?: string[];
  /**
   * De Franse naam, alleen bij de Belgische gemeenten (zie `NAAM_FR`): "Malines",
   * "Ixelles", "Mons". Waar het Frans geen eigen naam gebruikt, is het de
   * gewone naam. Staat ook bij gemeenten zonder Franse pagina, want de Franse
   * provinciepagina noemt ze in haar streeklijst.
   */
  nameFr?: string;
}

/**
 * De Franse naam van een Belgische plaats, waar die afwijkt van de naam
 * hierboven. Alles wat hier niet staat, heet in het Frans hetzelfde.
 *
 * Twee soorten. In Vlaanderen alleen de exoniemen die een Franstalige ook echt
 * gebruikt (Malines, Courtrai, Ypres); een vergeten Franse naam uit een oude
 * atlas ("Montaigu" voor Scherpenheuvel) zou de lezer meer verwarren dan de
 * Nederlandse. In Brussel en Wallonië de officiële Franse naam: daar zijn
 * "Elsene", "Bergen" en "Aarlen" de vertaling, en "Ixelles", "Mons" en "Arlon"
 * de plaats zelf. Ook de Duitstalige gemeenten met een gangbare Franse naam
 * (Saint-Vith, Waimes) staan erbij.
 *
 * Gesleuteld op de naam en niet op de slug, omdat ook de streeklijsten van
 * `provincie-gemeenten.ts` en de `towns` van de provincies hier hun Franse
 * naam vinden. Alleen bedoeld voor Belgische plaatsen: "Bergen" is hier Mons,
 * niet de gemeente in Nederlands Limburg.
 */
export const NAAM_FR: Record<string, string> = {
  /* Vlaanderen */
  Antwerpen: "Anvers",
  Mechelen: "Malines",
  Lier: "Lierre",
  "Sint-Katelijne-Waver": "Wavre-Sainte-Catherine",
  "Baarle-Hertog": "Baerle-Duc",
  Gent: "Gand",
  Aalst: "Alost",
  Dendermonde: "Termonde",
  "Sint-Niklaas": "Saint-Nicolas",
  Temse: "Tamise",
  Geraardsbergen: "Grammont",
  Ronse: "Renaix",
  Oudenaarde: "Audenarde",
  "Sint-Martens-Latem": "Laethem-Saint-Martin",
  Brugge: "Bruges",
  Kortrijk: "Courtrai",
  Oostende: "Ostende",
  Ieper: "Ypres",
  Veurne: "Furnes",
  Diksmuide: "Dixmude",
  Nieuwpoort: "Nieuport",
  "De Panne": "La Panne",
  Koksijde: "Coxyde",
  Roeselare: "Roulers",
  Menen: "Menin",
  Wervik: "Wervicq",
  Mesen: "Messines",
  Poperinge: "Poperinghe",
  Torhout: "Thourout",
  "Spiere-Helkijn": "Espierres-Helchin",
  Leuven: "Louvain",
  Vilvoorde: "Vilvorde",
  Halle: "Hal",
  Tienen: "Tirlemont",
  Zoutleeuw: "Léau",
  Bever: "Biévène",
  "Sint-Genesius-Rode": "Rhode-Saint-Genèse",
  "Sint-Pieters-Leeuw": "Leeuw-Saint-Pierre",
  "Sint-Truiden": "Saint-Trond",
  Tongeren: "Tongres",
  "Tongeren-Borgloon": "Tongres-Looz",
  Voeren: "Fourons",
  /* Brussel */
  Brussel: "Bruxelles",
  Schaarbeek: "Schaerbeek",
  Elsene: "Ixelles",
  "Sint-Gillis": "Saint-Gilles",
  "Sint-Joost-ten-Node": "Saint-Josse-ten-Noode",
  "Sint-Jans-Molenbeek": "Molenbeek-Saint-Jean",
  "Sint-Agatha-Berchem": "Berchem-Sainte-Agathe",
  Vorst: "Forest",
  Ukkel: "Uccle",
  Oudergem: "Auderghem",
  "Watermaal-Bosvoorde": "Watermael-Boitsfort",
  "Sint-Lambrechts-Woluwe": "Woluwe-Saint-Lambert",
  "Sint-Pieters-Woluwe": "Woluwe-Saint-Pierre",
  /* Waals-Brabant */
  Waver: "Wavre",
  Nijvel: "Nivelles",
  Eigenbrakel: "Braine-l'Alleud",
  Kasteelbrakel: "Braine-le-Château",
  Tubeke: "Tubize",
  Itter: "Ittre",
  Genepiën: "Genappe",
  Terhulpen: "La Hulpe",
  Graven: "Grez-Doiceau",
  Bevekom: "Beauvechain",
  Perwijs: "Perwez",
  Geldenaken: "Jodoigne",
  /* Henegouwen */
  Bergen: "Mons",
  Doornik: "Tournai",
  Moeskroen: "Mouscron",
  "Komen-Waasten": "Comines-Warneton",
  Aat: "Ath",
  Edingen: "Enghien",
  Elzele: "Ellezelles",
  Lessen: "Lessines",
  Opzullik: "Silly",
  Vloesberg: "Flobecq",
  Zinnik: "Soignies",
  "'s-Gravenbrakel": "Braine-le-Comte",
  Jurbeke: "Jurbise",
  /* Namen en Luxemburg */
  Namen: "Namur",
  Gembloers: "Gembloux",
  Aarlen: "Arlon",
  Bastenaken: "Bastogne",
  /* Luik */
  Luik: "Liège",
  Hoei: "Huy",
  Borgworm: "Waremme",
  Hannuit: "Hannut",
  Lijsem: "Lincent",
  Oerle: "Oreye",
  Bitsingen: "Bassenge",
  Wezet: "Visé",
  "Sankt Vith": "Saint-Vith",
  Weismes: "Waimes",
  Amel: "Amblève",
  Büllingen: "Bullange",
  Bütgenbach: "Butgenbach",
  Kelmis: "La Calamine",
};

/**
 * Een plaatsnaam uit een Nederlandse lijst in het Frans. Kent ook de
 * tweetalige schrijfwijze van de streeklijsten: "Waver (Wavre)" wordt "Wavre".
 */
export function plaatsFr(naam: string): string {
  /* Tussen haakjes staat in die lijsten altijd de Franse naam ("Limburg
     (Limbourg)" is de Luikse gemeente, niet de provincie). */
  const tweetalig = /^.+ \((.+)\)$/.exec(naam);
  return tweetalig ? tweetalig[1] : (NAAM_FR[naam] ?? naam);
}

/** De provincies met een Franse pagina; hun gemeenten krijgen een `nameFr`. */
const BELGISCH = new Set([
  "antwerpen", "oost-vlaanderen", "vlaams-brabant", "west-vlaanderen", "limburg", "brussel",
  "waals-brabant", "henegouwen", "namen", "luxemburg", "luik",
]);

const gemeente = (
  name: string,
  slug: string,
  postcode: string,
  regio = "antwerpen"
): GemeenteRoute => ({
  slug,
  name,
  path: `/bouwdroger-huren-${slug}`,
  regio,
  postcode,
  ...(BELGISCH.has(regio) ? { nameFr: NAAM_FR[name] ?? name } : {}),
});

export const GEMEENTE_ROUTES: GemeenteRoute[] = [
  { ...gemeente("Antwerpen", "antwerpen-stad", "2000"), kruimel: "Antwerpen stad" },
  /*
    De districten. Ze stonden als gewone tekst in de streeklijst omdat ze geen
    eigen pagina hadden, terwijl mensen wel degelijk "bouwdroger huren Deurne"
    intikken en niet "bouwdroger huren Antwerpen district Deurne" -- dat is ook
    de reden dat `provincie-gemeenten.ts` ze apart telt.

    Ze staan hier alleen omdat er per district iets eigens te zeggen valt: het
    souterrain van een Zurenborgs herenhuis is een ander probleem dan de
    tuinwijk van Deurne of de kelder van Merksem tegen het Albertkanaal. Waar
    dat niet zo is -- Berendrecht, Zandvliet, Lillo -- blijft de naam gewone
    tekst, want een dunne pagina kost meer dan ze opbrengt.

    /bouwdroger-huren-antwerpen-stad blijft de koepel: hij gaat over de stad en
    haar districten samen, deze pagina's over één district.
  */
  gemeente("Berchem", "berchem", "2600"),
  gemeente("Borgerhout", "borgerhout", "2140"),
  gemeente("Deurne", "deurne", "2100"),
  gemeente("Merksem", "merksem", "2170"),
  gemeente("Hoboken", "hoboken", "2660"),
  gemeente("Ekeren", "ekeren", "2180"),
  {
    ...gemeente("Berendrecht", "berendrecht-zandvliet", "2040"),
    ookVoor: ["Zandvliet"],
  },
  gemeente("Borsbeek", "borsbeek", "2150"),
  gemeente("Aartselaar", "aartselaar", "2630"),
  /*
    De Brusselse zuid- en oostrand, en daarmee staan alle negentien gemeenten
    van het gewest op de kaart. Het verhaal hier is hoogteverschil: deze
    gemeenten liggen tegen het Zonienwoud op hellingen, en bij een hevige bui
    krijgt een diepe kelder of garage het water van de helling erboven. In de
    Woluwedal- en Vorstvallei komt daar een ondergrondse beek bij. Onze eigen
    werf in Sint-Pieters-Woluwe staat op die pagina.
  */
  gemeente("Vorst", "vorst", "1190", "brussel"),
  gemeente("Ukkel", "ukkel", "1180", "brussel"),
  gemeente("Watermaal-Bosvoorde", "watermaal-bosvoorde", "1170", "brussel"),
  gemeente("Oudergem", "oudergem", "1160", "brussel"),
  gemeente("Sint-Pieters-Woluwe", "sint-pieters-woluwe", "1150", "brussel"),
  gemeente("Sint-Lambrechts-Woluwe", "sint-lambrechts-woluwe", "1200", "brussel"),
  gemeente("Evere", "evere", "1140", "brussel"),
  /*
    De Brusselse kanaalzone en de westrand. Hier zit het vocht vaker onderaan
    dan boven: de Zennevallei loopt door Anderlecht en Molenbeek en is het
    laagste punt van het gewest, met kelders half onder het maaiveld. Naar de
    westrand toe wordt het ruimer en hoger, met tuinwijken uit het interbellum
    die licht gebouwd zijn en dus anders drogen dan een herenhuis.
  */
  gemeente("Anderlecht", "anderlecht", "1070", "brussel"),
  gemeente("Sint-Jans-Molenbeek", "sint-jans-molenbeek", "1080", "brussel"),
  gemeente("Koekelberg", "koekelberg", "1081", "brussel"),
  gemeente("Ganshoren", "ganshoren", "1083", "brussel"),
  gemeente("Jette", "jette", "1090", "brussel"),
  gemeente("Sint-Agatha-Berchem", "sint-agatha-berchem", "1082", "brussel"),
  /*
    De negentien Brusselse gemeenten, te beginnen met de eerste kroon.

    Ze stonden tot 14-11-2026 als dode tekst op /sitemap terwijl elke Vlaamse
    gemeente een link was, en dat is precies de indruk die we niet willen
    wekken. /bouwdroger-huren-brussel blijft de koepel over het gewest; deze
    pagina's gaan over één gemeente, zoals antwerpen-stad naast de provincie.

    Twee dingen die alleen hier gelden. De Franse naam staat in elke intro,
    want wie "Ixelles" of "Saint-Gilles" intikt zoekt dezelfde droger. En de
    stad Brussel heet hier `brussel-stad`: de slug `brussel` is van de
    gewestpagina, en twee pagina's met dezelfde titel vechten om dezelfde
    zoekopdracht.
  */
  /*
    `brussel-stad`, want `brussel` is de slug van de gewestpagina. Zelfde reden
    als bij Antwerpen: het kruimelpad las anders "Home / Brussel / Brussel".
  */
  { ...gemeente("Brussel", "brussel-stad", "1000", "brussel"), kruimel: "Brussel stad" },
  gemeente("Schaarbeek", "schaarbeek", "1030", "brussel"),
  gemeente("Sint-Joost-ten-Node", "sint-joost-ten-node", "1210", "brussel"),
  gemeente("Sint-Gillis", "sint-gillis", "1060", "brussel"),
  gemeente("Elsene", "elsene", "1050", "brussel"),
  gemeente("Etterbeek", "etterbeek", "1040", "brussel"),
  /*
    Haspengouw en de Voerstreek, en daarmee is Limburg rond en heel Vlaanderen
    gedekt. Drie dingen die hier eigen zijn. De leembodem laat water traag door,
    dus hangwater tegen een kelderwand is regel. Riemst en Voeren hebben
    mergel in de ondergrond, met kelders en gangen die het hele jaar rond de
    honderd procent luchtvochtigheid zitten: daar werkt alleen een
    adsorptiedroger. En Voeren is met bijna twee uur onze verste rit in
    Vlaanderen; dat staat op de pagina in plaats van een tijdslot dat we niet
    halen.
  */
  gemeente("Sint-Truiden", "sint-truiden", "3800", "limburg"),
  gemeente("Tongeren-Borgloon", "tongeren-borgloon", "3700", "limburg"),
  gemeente("Bilzen-Hoeselt", "bilzen-hoeselt", "3740", "limburg"),
  gemeente("Riemst", "riemst", "3770", "limburg"),
  gemeente("Wellen", "wellen", "3830", "limburg"),
  gemeente("Heers", "heers", "3870", "limburg"),
  gemeente("Gingelom", "gingelom", "3890", "limburg"),
  gemeente("Herstappe", "herstappe", "3717", "limburg"),
  gemeente("Voeren", "voeren", "3798", "limburg"),
  /*
    Het Maasland. Eén ding bepaalt hier alle vijf de pagina's, en het is iets
    wat elders niet bestaat: de ondergrond is grind, en grind laat water
    razendsnel door. Staat de Maas hoog, dan stijgt het grondwater mee en komt
    het water niet langs de muur maar *door de vloer* naar binnen. Een
    dompelpomp en een droger houden dat beheersbaar, maar niemand stopt het,
    en dat zeggen we hier op elke pagina.
  */
  gemeente("Maaseik", "maaseik", "3680", "limburg"),
  gemeente("Kinrooi", "kinrooi", "3640", "limburg"),
  gemeente("Dilsen-Stokkem", "dilsen-stokkem", "3650", "limburg"),
  gemeente("Maasmechelen", "maasmechelen", "3630", "limburg"),
  gemeente("Lanaken", "lanaken", "3620", "limburg"),
  /*
    Noord-Limburg, tweede helft: de grensgemeenten en de Limburgse Kempen.
    Dezelfde zandbodem en dezelfde koude winters als hierboven, maar met een
    ander gebouwtype: hier zijn het landbouwloodsen, stallen en hoeves die in
    herbestemming gaan, en dat is een volumeverhaal in plaats van een
    kelderverhaal.
  */
  gemeente("Peer", "peer", "3990", "limburg"),
  gemeente("Pelt", "pelt", "3900", "limburg"),
  gemeente("Hamont-Achel", "hamont-achel", "3930", "limburg"),
  gemeente("Bocholt", "bocholt", "3950", "limburg"),
  gemeente("Bree", "bree", "3960", "limburg"),
  gemeente("Oudsbergen", "oudsbergen", "3670", "limburg"),
  gemeente("As", "as", "3665", "limburg"),
  /*
    Noord-Limburg, eerste helft. Twee dingen bepalen hier elke pagina. Het zand
    draineert, dus de kelder is zelden de klacht en het gesprek gaat over
    ventilatie in plaats van over grondwater. En dit zijn de koudste
    winterwerven van Vlaanderen: tussen november en maart gaat er bijna altijd
    een kachel mee, en die vraagt 400 V. De mijngemeenten Beringen,
    Heusden-Zolder en Houthalen-Helchteren hebben daarbij hun cités: dunne
    muren, lichte constructie, dus kleiner toestel en langer drogen.
  */
  gemeente("Tessenderlo-Ham", "tessenderlo-ham", "3980", "limburg"),
  gemeente("Beringen", "beringen", "3580", "limburg"),
  gemeente("Heusden-Zolder", "heusden-zolder", "3550", "limburg"),
  gemeente("Houthalen-Helchteren", "houthalen-helchteren", "3530", "limburg"),
  gemeente("Leopoldsburg", "leopoldsburg", "3970", "limburg"),
  gemeente("Hechtel-Eksel", "hechtel-eksel", "3940", "limburg"),
  gemeente("Lommel", "lommel", "3920", "limburg"),
  /*
    Hasselt, Genk en Midden-Limburg: de drukste Limburgse streek voor ons. Twee
    dingen die hier eigen zijn. Genk heeft de cité-woningen van het
    mijnverleden, en die hebben dunne muren en een vloer op volle grond, dus ze
    drogen sneller maar worden ook sneller weer vochtig. En de Demervallei van
    Herk-de-Stad en Halen loopt bij een langere regenperiode vol; daar gaat de
    pagina over waterschade en niet over chape.
  */
  gemeente("Hasselt", "hasselt", "3500", "limburg"),
  gemeente("Genk", "genk", "3600", "limburg"),
  gemeente("Zonhoven", "zonhoven", "3520", "limburg"),
  gemeente("Diepenbeek", "diepenbeek", "3590", "limburg"),
  gemeente("Alken", "alken", "3570", "limburg"),
  gemeente("Zutendaal", "zutendaal", "3690", "limburg"),
  gemeente("Lummen", "lummen", "3560", "limburg"),
  gemeente("Herk-de-Stad", "herk-de-stad", "3540", "limburg"),
  gemeente("Halen", "halen", "3545", "limburg"),
  gemeente("Nieuwerkerken", "nieuwerkerken", "3850", "limburg"),
  /*
    Midden-West-Vlaanderen, tweede helft, en daarmee is West-Vlaanderen rond.
    Tielt en Wingene zijn na Waregem en Beernem onze kortste West-Vlaamse
    ritten: negentig kilometer. Wielsbeke en Oostrozebeke hebben de grootste
    industriële vloeren van de streek; daar gaat het om droogzones en niet om
    toestellen.
  */
  gemeente("Tielt", "tielt", "8700", "west-vlaanderen"),
  gemeente("Wingene", "wingene", "8750", "west-vlaanderen"),
  gemeente("Pittem", "pittem", "8740", "west-vlaanderen"),
  gemeente("Ardooie", "ardooie", "8850", "west-vlaanderen"),
  gemeente("Dentergem", "dentergem", "8720", "west-vlaanderen"),
  gemeente("Oostrozebeke", "oostrozebeke", "8780", "west-vlaanderen"),
  gemeente("Wielsbeke", "wielsbeke", "8710", "west-vlaanderen"),
  /*
    Midden-West-Vlaanderen, eerste helft. De streek waar chape en pleisterwerk
    bijna altijd samen moeten drogen omdat de vloerlegger al in de agenda
    staat; dat bepaalt de pakketten hier. Moorslede is de uitzondering: dat
    ligt al op de Ieperse klei en krijgt daarom het hangwaterverhaal.
  */
  gemeente("Roeselare", "roeselare", "8800", "west-vlaanderen"),
  gemeente("Izegem", "izegem", "8870", "west-vlaanderen"),
  gemeente("Ingelmunster", "ingelmunster", "8770", "west-vlaanderen"),
  gemeente("Lichtervelde", "lichtervelde", "8810", "west-vlaanderen"),
  gemeente("Hooglede", "hooglede", "8830", "west-vlaanderen"),
  gemeente("Staden", "staden", "8840", "west-vlaanderen"),
  gemeente("Moorslede", "moorslede", "8890", "west-vlaanderen"),
  gemeente("Ledegem", "ledegem", "8880", "west-vlaanderen"),
  /*
    Kortrijk en de Leiestreek, tweede helft: de grensgemeenten en de zuidrand
    tegen de Schelde. Wervik heeft iets wat nergens anders bestaat, namelijk
    tabaksdrogerijen in herbestemming: gebouwen die ontworpen zijn om lucht
    door te laten, en dus het tegenovergestelde van wat een bouwdroger nodig
    heeft. Avelgem en Spiere-Helkijn liggen in het winterbed van de Schelde.
  */
  gemeente("Menen", "menen", "8930", "west-vlaanderen"),
  gemeente("Wervik", "wervik", "8940", "west-vlaanderen"),
  gemeente("Zwevegem", "zwevegem", "8550", "west-vlaanderen"),
  gemeente("Anzegem", "anzegem", "8570", "west-vlaanderen"),
  gemeente("Avelgem", "avelgem", "8580", "west-vlaanderen"),
  gemeente("Spiere-Helkijn", "spiere-helkijn", "8587", "west-vlaanderen"),
  /*
    Kortrijk en de Leiestreek, eerste helft. Wat deze streek van de rest van
    West-Vlaanderen onderscheidt is de maat van de vloeren: bedrijfsgebouwen en
    nieuwbouw met oppervlakken waar één droger in een hoek niets uithaalt. Op
    deze pagina's staat daarom hoe we zo'n vloer in droogzones opdelen, met een
    berekende droger en een ventilator per zone.
  */
  gemeente("Kortrijk", "kortrijk", "8500", "west-vlaanderen"),
  gemeente("Harelbeke", "harelbeke", "8530", "west-vlaanderen"),
  gemeente("Kuurne", "kuurne", "8520", "west-vlaanderen"),
  gemeente("Deerlijk", "deerlijk", "8540", "west-vlaanderen"),
  gemeente("Lendelede", "lendelede", "8860", "west-vlaanderen"),
  gemeente("Waregem", "waregem", "8790", "west-vlaanderen"),
  gemeente("Wevelgem", "wevelgem", "8560", "west-vlaanderen"),
  /*
    De Westhoek, noordelijke helft: de IJzervlakte en de rand van het Houtland.
    Hier is de hoogte boven de zeespiegel het verhaal. De IJzerbroeken van
    Diksmuide en Lo-Reninge zijn gecontroleerd overstromingsgebied, en de
    Handzamevallei in Kortemark loopt bij elke langere regenperiode vol. Op die
    pagina's staat waterschade voorop; op Houthulst en Koekelare, een rug hoger,
    gewoon chape en renovatie.
  */
  gemeente("Diksmuide", "diksmuide", "8600", "west-vlaanderen"),
  gemeente("Veurne", "veurne", "8630", "west-vlaanderen"),
  gemeente("Alveringem", "alveringem", "8690", "west-vlaanderen"),
  gemeente("Lo-Reninge", "lo-reninge", "8647", "west-vlaanderen"),
  gemeente("Houthulst", "houthulst", "8650", "west-vlaanderen"),
  gemeente("Kortemark", "kortemark", "8610", "west-vlaanderen"),
  gemeente("Koekelare", "koekelare", "8680", "west-vlaanderen"),
  /*
    De Westhoek, zuidelijke helft. Twee dingen die hier en nergens anders
    gelden. De Ieperiaanse klei in de ondergrond laat vrijwel geen water door,
    dus hangwater tegen een kelderwand is hier regel en geen uitzondering. En
    de bebouwing van Ieper, Zonnebeke, Langemark en Mesen is grotendeels
    heropbouw uit de jaren twintig: massief baksteenwerk, vaak zonder
    waterkering in de muurvoet, en dus opstijgend vocht dat geen bouwvocht is.
  */
  gemeente("Ieper", "ieper", "8900", "west-vlaanderen"),
  gemeente("Zonnebeke", "zonnebeke", "8980", "west-vlaanderen"),
  gemeente("Langemark-Poelkapelle", "langemark-poelkapelle", "8920", "west-vlaanderen"),
  gemeente("Mesen", "mesen", "8957", "west-vlaanderen"),
  gemeente("Heuvelland", "heuvelland", "8950", "west-vlaanderen"),
  gemeente("Poperinge", "poperinge", "8970", "west-vlaanderen"),
  gemeente("Vleteren", "vleteren", "8640", "west-vlaanderen"),
  /*
    Het Houtland: de zandstreek achter Brugge. Hier is de kelder zelden het
    probleem omdat zand draineert, en dat maakt deze vijf pagina's inhoudelijk
    het tegenovergestelde van de polderpagina's hierboven. Beernem is de
    uitzondering: de kleirug van Oedelem gedraagt zich als polder.
  */
  gemeente("Jabbeke", "jabbeke", "8490", "west-vlaanderen"),
  gemeente("Zedelgem", "zedelgem", "8210", "west-vlaanderen"),
  gemeente("Oostkamp", "oostkamp", "8020", "west-vlaanderen"),
  gemeente("Beernem", "beernem", "8730", "west-vlaanderen"),
  gemeente("Torhout", "torhout", "8820", "west-vlaanderen"),
  /*
    Brugge en de polderrand errond. De historische binnenstad en de polder
    delen hetzelfde probleem om een andere reden: in Brugge staat het water van
    de reien vlak naast de keldermuur, in de polder houdt de klei het vast. Op
    beide soorten pagina's staat daarom dat een droger vocht uit de lucht haalt
    en niet uit de grond.
  */
  gemeente("Brugge", "brugge", "8000", "west-vlaanderen"),
  gemeente("Damme", "damme", "8340", "west-vlaanderen"),
  gemeente("Zuienkerke", "zuienkerke", "8377", "west-vlaanderen"),
  gemeente("Oudenburg", "oudenburg", "8460", "west-vlaanderen"),
  gemeente("Gistel", "gistel", "8470", "west-vlaanderen"),
  gemeente("Ichtegem", "ichtegem", "8480", "west-vlaanderen"),
  /*
    De kust, en daarmee de eerste gemeentepagina's van West-Vlaanderen. Drie
    dingen gelden hier en nergens anders, en ze staan daarom op alle negen:
    de zeelucht is zo vochtig dat ventileren met open ramen tegen je werkt,
    zeezout in een muur is hygroscopisch en houdt die muur vochtig ook nadat
    het water weg is, en de rit duurt ruim een uur. Afhalen raden we hier dus
    af in plaats van de korting te verkopen, en we plannen de provincie in een
    vaste toer.
  */
  gemeente("Knokke-Heist", "knokke-heist", "8300", "west-vlaanderen"),
  gemeente("Blankenberge", "blankenberge", "8370", "west-vlaanderen"),
  gemeente("De Haan", "de-haan", "8420", "west-vlaanderen"),
  gemeente("Bredene", "bredene", "8450", "west-vlaanderen"),
  gemeente("Oostende", "oostende", "8400", "west-vlaanderen"),
  gemeente("Middelkerke", "middelkerke", "8430", "west-vlaanderen"),
  gemeente("Nieuwpoort", "nieuwpoort", "8620", "west-vlaanderen"),
  gemeente("Koksijde", "koksijde", "8670", "west-vlaanderen"),
  gemeente("De Panne", "de-panne", "8660", "west-vlaanderen"),
  /*
    Tienen en Vlaams-Haspengouw, en daarmee is Vlaams-Brabant rond. Dit is de
    verste hoek van ons werkgebied in deze provincie: Landen ligt op ruim een
    uur. De grote hoeves in herbestemming bepalen hier het pakket, want in een
    volume van zes meter hoog moet de droge lucht met een ventilator verdeeld
    worden of ze blijft hangen waar het toestel staat.
  */
  gemeente("Tienen", "tienen", "3300", "vlaams-brabant"),
  gemeente("Linter", "linter", "3350", "vlaams-brabant"),
  gemeente("Zoutleeuw", "zoutleeuw", "3440", "vlaams-brabant"),
  gemeente("Hoegaarden", "hoegaarden", "3320", "vlaams-brabant"),
  gemeente("Landen", "landen", "3400", "vlaams-brabant"),
  /*
    Het Hageland. De winter bepaalt hier de pakketsamenstelling: de ruwbouwen
    staan op open heuvelflanken zonder beschutting, en onder 15 °C haalt een
    condensdroger te weinig rendement. Op elke pagina van deze streek staat
    daarom dat er dan bijverwarming bij hoort, en dat die 400 V vraagt.
  */
  gemeente("Aarschot", "aarschot", "3200", "vlaams-brabant"),
  gemeente("Tielt-Winge", "tielt-winge", "3390", "vlaams-brabant"),
  gemeente("Scherpenheuvel-Zichem", "scherpenheuvel-zichem", "3270", "vlaams-brabant"),
  gemeente("Bekkevoort", "bekkevoort", "3460", "vlaams-brabant"),
  gemeente("Diest", "diest", "3290", "vlaams-brabant"),
  gemeente("Glabbeek", "glabbeek", "3380", "vlaams-brabant"),
  gemeente("Kortenaken", "kortenaken", "3470", "vlaams-brabant"),
  gemeente("Geetbets", "geetbets", "3450", "vlaams-brabant"),
  /*
    Leuven en het Dijleland, noordelijke helft. Hier draait de bodem om: na de
    leem van het Dijleplateau komt met Keerbergen, Tremelo en Begijnendijk weer
    zand, dezelfde grond als onze eigen Kempen. Dat verandert het antwoord op
    de kelderklacht, en daarom staat het per gemeente in de bouw-sectie.
  */
  gemeente("Boortmeerbeek", "boortmeerbeek", "3190", "vlaams-brabant"),
  gemeente("Keerbergen", "keerbergen", "3140", "vlaams-brabant"),
  gemeente("Begijnendijk", "begijnendijk", "3130", "vlaams-brabant"),
  gemeente("Tremelo", "tremelo", "3120", "vlaams-brabant"),
  gemeente("Haacht", "haacht", "3150", "vlaams-brabant"),
  gemeente("Rotselaar", "rotselaar", "3110", "vlaams-brabant"),
  gemeente("Holsbeek", "holsbeek", "3220", "vlaams-brabant"),
  /*
    Leuven en het Dijleland, eerste helft. Twee dingen keren hier terug: de
    verbouwing per kamer voor studentenverhuur, waar het toestel stil moet zijn
    en op 230 V moet draaien, en de Dijlevallei met vijvers en moerassen waar
    het grondwater vlak onder het maaiveld zit.
  */
  gemeente("Leuven", "leuven", "3000", "vlaams-brabant"),
  gemeente("Herent", "herent", "3020", "vlaams-brabant"),
  gemeente("Bertem", "bertem", "3060", "vlaams-brabant"),
  gemeente("Oud-Heverlee", "oud-heverlee", "3050", "vlaams-brabant"),
  gemeente("Huldenberg", "huldenberg", "3040", "vlaams-brabant"),
  gemeente("Bierbeek", "bierbeek", "3360", "vlaams-brabant"),
  gemeente("Boutersem", "boutersem", "3370", "vlaams-brabant"),
  gemeente("Lubbeek", "lubbeek", "3210", "vlaams-brabant"),
  /*
    Pajottenland en Zennevallei, tweede helft. Londerzeel en Kapelle-op-den-Bos
    liggen op vijfentwintig kilometer langs de A12 en zijn daarmee de kortste
    ritten van heel Vlaams-Brabant; Bever en Pajottegem zijn met een uur de
    langste. Dat verschil staat op de pagina's, want het bepaalt of afhalen
    voor een klant loont.
  */
  gemeente("Londerzeel", "londerzeel", "1840", "vlaams-brabant"),
  gemeente("Kapelle-op-den-Bos", "kapelle-op-den-bos", "1880", "vlaams-brabant"),
  gemeente("Merchtem", "merchtem", "1785", "vlaams-brabant"),
  gemeente("Opwijk", "opwijk", "1745", "vlaams-brabant"),
  gemeente("Affligem", "affligem", "1790", "vlaams-brabant"),
  gemeente("Pepingen", "pepingen", "1670", "vlaams-brabant"),
  gemeente("Pajottegem", "pajottegem", "1570", "vlaams-brabant"),
  gemeente("Bever", "bever", "1547", "vlaams-brabant"),
  /*
    Pajottenland en Zennevallei, eerste helft. De leembodem is hier het
    terugkerende punt: leem laat water traag door, dus een chape op leem droogt
    zonder hulp opvallend traag en een kelder in de helling krijgt hangwater
    tegen de muur. Dat staat per gemeente anders uitgelegd, niet elf keer
    hetzelfde.
  */
  gemeente("Asse", "asse", "1730", "vlaams-brabant"),
  gemeente("Ternat", "ternat", "1740", "vlaams-brabant"),
  gemeente("Dilbeek", "dilbeek", "1700", "vlaams-brabant"),
  gemeente("Sint-Pieters-Leeuw", "sint-pieters-leeuw", "1600", "vlaams-brabant"),
  gemeente("Beersel", "beersel", "1650", "vlaams-brabant"),
  gemeente("Liedekerke", "liedekerke", "1770", "vlaams-brabant"),
  gemeente("Lennik", "lennik", "1750", "vlaams-brabant"),
  gemeente("Roosdaal", "roosdaal", "1760", "vlaams-brabant"),
  gemeente("Halle", "halle", "1500", "vlaams-brabant"),
  /*
    De Brusselse rand, zuidelijke helft. Eén praktisch punt loopt door al deze
    pagina's: de rit gaat over de ring, en die staat tussen zeven en negen uur
    stil. We plannen deze gemeenten daarom buiten de spits, en dat zeggen we op
    de pagina in plaats van een tijdslot te beloven dat we niet halen.
  */
  gemeente("Kortenberg", "kortenberg", "3070", "vlaams-brabant"),
  gemeente("Kraainem", "kraainem", "1950", "vlaams-brabant"),
  gemeente("Wezembeek-Oppem", "wezembeek-oppem", "1970", "vlaams-brabant"),
  gemeente("Tervuren", "tervuren", "3080", "vlaams-brabant"),
  gemeente("Hoeilaart", "hoeilaart", "1560", "vlaams-brabant"),
  gemeente("Overijse", "overijse", "3090", "vlaams-brabant"),
  gemeente("Sint-Genesius-Rode", "sint-genesius-rode", "1640", "vlaams-brabant"),
  gemeente("Drogenbos", "drogenbos", "1620", "vlaams-brabant"),
  gemeente("Linkebeek", "linkebeek", "1630", "vlaams-brabant"),
  /*
    De Brusselse rand, noordelijke helft. Dichtst bij ons magazijn van heel
    Vlaams-Brabant: Zemst ligt op een halfuur, dichter dan de helft van de
    Kempen. Wat deze rand apart maakt is niet de bodem maar het gebouwtype:
    kantoren en logistiek langs de ring, en villa's uit de jaren zestig tot
    tachtig die nu grondig gerenoveerd worden.
  */
  gemeente("Zemst", "zemst", "1980", "vlaams-brabant"),
  gemeente("Meise", "meise", "1860", "vlaams-brabant"),
  gemeente("Grimbergen", "grimbergen", "1850", "vlaams-brabant"),
  gemeente("Wemmel", "wemmel", "1780", "vlaams-brabant"),
  gemeente("Vilvoorde", "vilvoorde", "1800", "vlaams-brabant"),
  gemeente("Machelen", "machelen", "1830", "vlaams-brabant"),
  gemeente("Kampenhout", "kampenhout", "1910", "vlaams-brabant"),
  gemeente("Zaventem", "zaventem", "1930", "vlaams-brabant"),
  gemeente("Steenokkerzeel", "steenokkerzeel", "1820", "vlaams-brabant"),
  /*
    De Vlaamse Ardennen, en daarmee is Oost-Vlaanderen rond. Deze streek heeft
    één terugkerend probleem dat elders niet bestaat: een woning in de helling
    heeft aan één zijde grond tegen de muur, en op leem perst hangwater daar
    tegenaan. Dat is geen bouwvocht, en drogen lost het niet op. Het staat op
    elke pagina van deze streek, omdat we het anders elf keer uitleggen aan de
    telefoon.
  */
  gemeente("Oudenaarde", "oudenaarde", "9700", "oost-vlaanderen"),
  gemeente("Ronse", "ronse", "9600", "oost-vlaanderen"),
  gemeente("Zottegem", "zottegem", "9620", "oost-vlaanderen"),
  gemeente("Brakel", "brakel", "9660", "oost-vlaanderen"),
  gemeente("Kluisbergen", "kluisbergen", "9690", "oost-vlaanderen"),
  gemeente("Kruisem", "kruisem", "9770", "oost-vlaanderen"),
  gemeente("Horebeke", "horebeke", "9667", "oost-vlaanderen"),
  gemeente("Lierde", "lierde", "9570", "oost-vlaanderen"),
  gemeente("Maarkedal", "maarkedal", "9680", "oost-vlaanderen"),
  gemeente("Wortegem-Petegem", "wortegem-petegem", "9790", "oost-vlaanderen"),
  gemeente("Zwalm", "zwalm", "9630", "oost-vlaanderen"),
  /*
    Het Meetjesland. Twee bodems door elkaar: zand in de binnenlanden en
    polderklei richting de kreken en de Nederlandse grens. Dat verschil bepaalt
    of een kelder hier het probleem is of niet, en daarom staat het op elke
    pagina van deze streek expliciet in de bouw-sectie.
  */
  gemeente("Eeklo", "eeklo", "9900", "oost-vlaanderen"),
  gemeente("Maldegem", "maldegem", "9990", "oost-vlaanderen"),
  gemeente("Aalter", "aalter", "9880", "oost-vlaanderen"),
  gemeente("Assenede", "assenede", "9960", "oost-vlaanderen"),
  gemeente("Evergem", "evergem", "9940", "oost-vlaanderen"),
  gemeente("Kaprijke", "kaprijke", "9970", "oost-vlaanderen"),
  gemeente("Sint-Laureins", "sint-laureins", "9980", "oost-vlaanderen"),
  gemeente("Lievegem", "lievegem", "9930", "oost-vlaanderen"),
  gemeente("Zelzate", "zelzate", "9060", "oost-vlaanderen"),
  /*
    De Denderstreek. Twee dingen bepalen hier de tekst: er wordt meer nieuw
    gebouwd dan bijna overal in Vlaanderen, en de Dender zelf is in 2010 en
    2016 buiten haar oevers gekomen. De pagina's van Ninove en Geraardsbergen
    gaan daarom over waterschade, de landelijke gemeenten over chape.
  */
  gemeente("Aalst", "aalst", "9300", "oost-vlaanderen"),
  gemeente("Denderleeuw", "denderleeuw", "9470", "oost-vlaanderen"),
  gemeente("Haaltert", "haaltert", "9450", "oost-vlaanderen"),
  gemeente("Erpe-Mere", "erpe-mere", "9420", "oost-vlaanderen"),
  gemeente("Lede", "lede", "9340", "oost-vlaanderen"),
  gemeente("Ninove", "ninove", "9400", "oost-vlaanderen"),
  gemeente("Geraardsbergen", "geraardsbergen", "9500", "oost-vlaanderen"),
  gemeente("Herzele", "herzele", "9550", "oost-vlaanderen"),
  gemeente("Sint-Lievens-Houtem", "sint-lievens-houtem", "9520", "oost-vlaanderen"),
  /*
    Scheldeland en de Dendermondse regio. Hier gaat het vaker over water dat er
    niet hoort te zijn dan over bouwvocht: Schelde, Durme en Dender komen samen
    en de meersen zijn gecontroleerd overstromingsgebied. Op deze pagina's
    staat daarom bij elke gemeente hetzelfde eerlijke voorbehoud: een droger
    haalt vocht uit de lucht, niet uit de grond.
  */
  gemeente("Dendermonde", "dendermonde", "9200", "oost-vlaanderen"),
  gemeente("Hamme", "hamme", "9220", "oost-vlaanderen"),
  gemeente("Zele", "zele", "9240", "oost-vlaanderen"),
  gemeente("Berlare", "berlare", "9290", "oost-vlaanderen"),
  gemeente("Buggenhout", "buggenhout", "9255", "oost-vlaanderen"),
  gemeente("Lebbeke", "lebbeke", "9280", "oost-vlaanderen"),
  gemeente("Wichelen", "wichelen", "9260", "oost-vlaanderen"),
  gemeente("Laarne", "laarne", "9270", "oost-vlaanderen"),
  gemeente("Wetteren", "wetteren", "9230", "oost-vlaanderen"),
  /*
    Gent en de Gentse rand. De eerste streek van Oost-Vlaanderen buiten het
    Waasland, en de eerste waar afhalen voor een klant niet meer loont: een uur
    heen en een uur terug voor een toestel van 30 kg weegt niet op tegen een
    levering die al in het pakket zit. Dat staat ook zo op deze pagina's.
  */
  gemeente("Gent", "gent", "9000", "oost-vlaanderen"),
  gemeente("Destelbergen", "destelbergen", "9070", "oost-vlaanderen"),
  gemeente("Lochristi", "lochristi", "9080", "oost-vlaanderen"),
  gemeente("Merelbeke-Melle", "merelbeke-melle", "9820", "oost-vlaanderen"),
  gemeente("Oosterzele", "oosterzele", "9860", "oost-vlaanderen"),
  gemeente("Sint-Martens-Latem", "sint-martens-latem", "9830", "oost-vlaanderen"),
  gemeente("Nazareth-De Pinte", "nazareth-de-pinte", "9810", "oost-vlaanderen"),
  gemeente("Gavere", "gavere", "9890", "oost-vlaanderen"),
  gemeente("Deinze", "deinze", "9800", "oost-vlaanderen"),
  gemeente("Zulte", "zulte", "9870", "oost-vlaanderen"),
  /*
    Oost-Vlaanderen, te beginnen bij het Waasland. Dat is geen willekeurige
    keuze: het Waasland ligt dichter bij ons magazijn dan de helft van de
    Kempen, het is de streek waar we na onze eigen provincie het vaakst rijden,
    en het is de enige plek buiten Antwerpen waar afhalen voor een klant echt
    loont. De rest van de provincie volgt per streek.
  */
  gemeente("Temse", "temse", "9140", "oost-vlaanderen"),
  gemeente("Beveren-Kruibeke-Zwijndrecht", "beveren-kruibeke-zwijndrecht", "9120", "oost-vlaanderen"),
  gemeente("Sint-Niklaas", "sint-niklaas", "9100", "oost-vlaanderen"),
  gemeente("Waasmunster", "waasmunster", "9250", "oost-vlaanderen"),
  gemeente("Lokeren", "lokeren", "9160", "oost-vlaanderen"),
  gemeente("Sint-Gillis-Waas", "sint-gillis-waas", "9170", "oost-vlaanderen"),
  gemeente("Stekene", "stekene", "9190", "oost-vlaanderen"),
  /*
    De Kempen. Zandgrond, vrijstaande bebouwing en de koudste winterwerven van
    Vlaanderen -- behalve in Beerse en Rijkevorsel, waar de steenbakkerijen hun
    klei uit eigen putten halen, en in de valleien van de Nete en de Laak, waar
    het water terugkomt. Die drie situaties vragen drie opstellingen, en dat is
    wat deze pagina's uit elkaar houdt.
  */
  gemeente("Grobbendonk", "grobbendonk", "2280"),
  gemeente("Herenthout", "herenthout", "2270"),
  gemeente("Vorselaar", "vorselaar", "2290"),
  gemeente("Lille", "lille", "2275"),
  gemeente("Vosselaar", "vosselaar", "2350"),
  gemeente("Beerse", "beerse", "2340"),
  gemeente("Rijkevorsel", "rijkevorsel", "2310"),
  gemeente("Merksplas", "merksplas", "2330"),
  gemeente("Hoogstraten", "hoogstraten", "2320"),
  gemeente("Oud-Turnhout", "oud-turnhout", "2360"),
  gemeente("Arendonk", "arendonk", "2370"),
  gemeente("Ravels", "ravels", "2380"),
  gemeente("Baarle-Hertog", "baarle-hertog", "2387"),
  gemeente("Retie", "retie", "2470"),
  gemeente("Dessel", "dessel", "2480"),
  gemeente("Kasterlee", "kasterlee", "2460"),
  gemeente("Olen", "olen", "2250"),
  gemeente("Westerlo", "westerlo", "2260"),
  gemeente("Herselt", "herselt", "2230"),
  gemeente("Hulshout", "hulshout", "2235"),
  gemeente("Laakdal", "laakdal", "2430"),
  gemeente("Meerhout", "meerhout", "2450"),
  gemeente("Balen", "balen", "2490"),
  /*
    De Noordrand en de Noorderkempen. Villagebied met grote volumes en
    kelderverdiepingen aan de ene kant, polder en zandgrond aan de andere: de
    kaart van Stabroek is een andere werf dan die van Kalmthout, en dat is ook
    waarom ze elk een eigen pagina hebben.
  */
  gemeente("Wommelgem", "wommelgem", "2160"),
  gemeente("Wijnegem", "wijnegem", "2110"),
  gemeente("Ranst", "ranst", "2520"),
  gemeente("Schilde", "schilde", "2970"),
  gemeente("Zoersel", "zoersel", "2980"),
  gemeente("Zandhoven", "zandhoven", "2240"),
  gemeente("Malle", "malle", "2390"),
  gemeente("Brecht", "brecht", "2960"),
  gemeente("Kapellen", "kapellen", "2950"),
  gemeente("Stabroek", "stabroek", "2940"),
  gemeente("Kalmthout", "kalmthout", "2920"),
  gemeente("Wuustwezel", "wuustwezel", "2990"),
  gemeente("Essen", "essen", "2910"),
  /*
    De tweede ring: de gemeenten rond het magazijn, de Rupelstreek, Klein-
    Brabant en de Netevallei. Ze staan er pas sinds 13-11-2026 en alleen omdat
    er per gemeente iets eigens te zeggen viel -- de kleiputten van Niel en
    Hemiksem, het hoogwater van de Nete in Berlaar, de serres van
    Sint-Katelijne-Waver. Dat blijft de lat: geen pagina zonder eigen verhaal.
  */
  gemeente("Boechout", "boechout", "2530"),
  gemeente("Hove", "hove", "2540"),
  gemeente("Lint", "lint", "2547"),
  gemeente("Hemiksem", "hemiksem", "2620"),
  gemeente("Niel", "niel", "2845"),
  gemeente("Rumst", "rumst", "2840"),
  gemeente("Schelle", "schelle", "2627"),
  gemeente("Bornem", "bornem", "2880"),
  gemeente("Puurs-Sint-Amands", "puurs-sint-amands", "2870"),
  gemeente("Willebroek", "willebroek", "2830"),
  gemeente("Berlaar", "berlaar", "2590"),
  gemeente("Bonheiden", "bonheiden", "2820"),
  gemeente("Nijlen", "nijlen", "2560"),
  gemeente("Putte", "putte", "2580"),
  gemeente("Sint-Katelijne-Waver", "sint-katelijne-waver", "2860"),
  gemeente("Mechelen", "mechelen", "2800"),
  gemeente("Turnhout", "turnhout", "2300"),
  gemeente("Lier", "lier", "2500"),
  gemeente("Boom", "boom", "2850"),
  gemeente("Kontich", "kontich", "2550"),
  gemeente("Geel", "geel", "2440"),
  gemeente("Mol", "mol", "2400"),
  gemeente("Herentals", "herentals", "2200"),
  gemeente("Heist-op-den-Berg", "heist-op-den-berg", "2220"),
  gemeente("Brasschaat", "brasschaat", "2930"),
  gemeente("Schoten", "schoten", "2900"),
  gemeente("Wilrijk", "wilrijk", "2610"),
  gemeente("Edegem", "edegem", "2650"),
  gemeente("Duffel", "duffel", "2570"),
  gemeente("Mortsel", "mortsel", "2640"),
  /*
    Waals-Brabant, sinds 15-11-2026: de 27 gemeenten van de eerste Waalse
    provincie met een eigen pagina.

    De naam is de Nederlandse ("Waver", "Eigenbrakel"), omdat die in elke zin
    van de pagina en in de titel staat. In de streeklijst staat de gemeente
    tweetalig, "Waver (Wavre)", want wie op de Franse naam zoekt, zoekt
    dezelfde droger; `ookVoor` verbindt die schrijfwijze met deze pagina,
    zodat ze op de provinciepagina en op /sitemap een link wordt.

    De slug volgt de Nederlandse naam, zoals bij Brussel (`elsene`, niet
    `ixelles`). Waar er geen Nederlandse naam is, is het de Franse.
  */
  { ...gemeente("Tubeke", "tubeke", "1480", "waals-brabant"), ookVoor: ["Tubeke (Tubize)"] },
  gemeente("Rebecq", "rebecq", "1430", "waals-brabant"),
  { ...gemeente("Kasteelbrakel", "kasteelbrakel", "1440", "waals-brabant"), ookVoor: ["Kasteelbrakel (Braine-le-Château)"] },
  gemeente("Itter", "itter", "1460", "waals-brabant"),
  { ...gemeente("Eigenbrakel", "eigenbrakel", "1420", "waals-brabant"), ookVoor: ["Eigenbrakel (Braine-l'Alleud)"] },
  gemeente("Waterloo", "waterloo", "1410", "waals-brabant"),
  { ...gemeente("Nijvel", "nijvel", "1400", "waals-brabant"), ookVoor: ["Nijvel (Nivelles)"] },
  { ...gemeente("Genepiën", "genepien", "1470", "waals-brabant"), ookVoor: ["Genepiën (Genappe)"] },
  gemeente("Lasne", "lasne", "1380", "waals-brabant"),
  { ...gemeente("Terhulpen", "terhulpen", "1310", "waals-brabant"), ookVoor: ["Terhulpen (La Hulpe)"] },
  gemeente("Rixensart", "rixensart", "1330", "waals-brabant"),
  { ...gemeente("Waver", "waver", "1300", "waals-brabant"), ookVoor: ["Waver (Wavre)"] },
  gemeente("Ottignies-Louvain-la-Neuve", "ottignies-louvain-la-neuve", "1340", "waals-brabant"),
  gemeente("Court-Saint-Étienne", "court-saint-etienne", "1490", "waals-brabant"),
  gemeente("Mont-Saint-Guibert", "mont-saint-guibert", "1435", "waals-brabant"),
  gemeente("Villers-la-Ville", "villers-la-ville", "1495", "waals-brabant"),
  gemeente("Chastre", "chastre", "1450", "waals-brabant"),
  gemeente("Walhain", "walhain", "1457", "waals-brabant"),
  { ...gemeente("Graven", "graven", "1390", "waals-brabant"), ookVoor: ["Graven (Grez-Doiceau)"] },
  gemeente("Chaumont-Gistoux", "chaumont-gistoux", "1325", "waals-brabant"),
  { ...gemeente("Bevekom", "bevekom", "1320", "waals-brabant"), ookVoor: ["Bevekom (Beauvechain)"] },
  gemeente("Incourt", "incourt", "1315", "waals-brabant"),
  { ...gemeente("Perwijs", "perwijs", "1360", "waals-brabant"), ookVoor: ["Perwijs (Perwez)"] },
  gemeente("Ramillies", "ramillies", "1367", "waals-brabant"),
  { ...gemeente("Geldenaken", "geldenaken", "1370", "waals-brabant"), ookVoor: ["Geldenaken (Jodoigne)"] },
  gemeente("Orp-Jauche", "orp-jauche", "1350", "waals-brabant"),
  gemeente("Hélécine", "helecine", "1357", "waals-brabant"),
  /*
    Henegouwen, sinds 15-11-2026, op dezelfde manier als Waals-Brabant: de
    Nederlandse naam op de pagina ("Bergen", "Doornik"), de tweetalige naam uit
    de streeklijst via `ookVoor`. Jurbeke en Vloesberg staan in die lijst al
    alleen in het Nederlands, dus hebben ze geen alias nodig.
  */
  { ...gemeente("'s-Gravenbrakel", "s-gravenbrakel", "7090", "henegouwen"), ookVoor: ["'s-Gravenbrakel (Braine-le-Comte)"] },
  gemeente("Le Rœulx", "le-roeulx", "7070", "henegouwen"),
  gemeente("Manage", "manage", "7170", "henegouwen"),
  gemeente("Seneffe", "seneffe", "7180", "henegouwen"),
  { ...gemeente("Zinnik", "zinnik", "7060", "henegouwen"), ookVoor: ["Zinnik (Soignies)"] },
  gemeente("Écaussinnes", "ecaussinnes", "7190", "henegouwen"),
  gemeente("Binche", "binche", "7130", "henegouwen"),
  gemeente("Estinnes", "estinnes", "7120", "henegouwen"),
  gemeente("La Louvière", "la-louviere", "7100", "henegouwen"),
  gemeente("Morlanwelz", "morlanwelz", "7140", "henegouwen"),
  gemeente("Aiseau-Presles", "aiseau-presles", "6250", "henegouwen"),
  gemeente("Chapelle-lez-Herlaimont", "chapelle-lez-herlaimont", "7160", "henegouwen"),
  gemeente("Charleroi", "charleroi", "6000", "henegouwen"),
  gemeente("Châtelet", "chatelet", "6200", "henegouwen"),
  gemeente("Courcelles", "courcelles", "6180", "henegouwen"),
  gemeente("Farciennes", "farciennes", "6240", "henegouwen"),
  gemeente("Fleurus", "fleurus", "6220", "henegouwen"),
  gemeente("Fontaine-l'Évêque", "fontaine-l-eveque", "6140", "henegouwen"),
  gemeente("Gerpinnes", "gerpinnes", "6280", "henegouwen"),
  gemeente("Les Bons Villers", "les-bons-villers", "6210", "henegouwen"),
  gemeente("Montigny-le-Tilleul", "montigny-le-tilleul", "6110", "henegouwen"),
  gemeente("Pont-à-Celles", "pont-a-celles", "6230", "henegouwen"),
  { ...gemeente("Bergen", "bergen", "7000", "henegouwen"), ookVoor: ["Bergen (Mons)"] },
  gemeente("Boussu", "boussu", "7300", "henegouwen"),
  gemeente("Colfontaine", "colfontaine", "7340", "henegouwen"),
  gemeente("Dour", "dour", "7370", "henegouwen"),
  gemeente("Frameries", "frameries", "7080", "henegouwen"),
  gemeente("Hensies", "hensies", "7350", "henegouwen"),
  gemeente("Honnelles", "honnelles", "7387", "henegouwen"),
  gemeente("Jurbeke", "jurbeke", "7050", "henegouwen"),
  gemeente("Lens", "lens", "7870", "henegouwen"),
  gemeente("Quaregnon", "quaregnon", "7390", "henegouwen"),
  gemeente("Quiévrain", "quievrain", "7380", "henegouwen"),
  gemeente("Quévy", "quevy", "7040", "henegouwen"),
  gemeente("Saint-Ghislain", "saint-ghislain", "7330", "henegouwen"),
  { ...gemeente("Aat", "aat", "7800", "henegouwen"), ookVoor: ["Aat (Ath)"] },
  gemeente("Belœil", "beloeil", "7970", "henegouwen"),
  gemeente("Bernissart", "bernissart", "7320", "henegouwen"),
  gemeente("Brugelette", "brugelette", "7940", "henegouwen"),
  gemeente("Chièvres", "chievres", "7950", "henegouwen"),
  { ...gemeente("Edingen", "edingen", "7850", "henegouwen"), ookVoor: ["Edingen (Enghien)"] },
  { ...gemeente("Elzele", "elzele", "7890", "henegouwen"), ookVoor: ["Elzele (Ellezelles)"] },
  gemeente("Frasnes-lez-Anvaing", "frasnes-lez-anvaing", "7911", "henegouwen"),
  { ...gemeente("Lessen", "lessen", "7860", "henegouwen"), ookVoor: ["Lessen (Lessines)"] },
  { ...gemeente("Opzullik", "opzullik", "7830", "henegouwen"), ookVoor: ["Opzullik (Silly)"] },
  gemeente("Vloesberg", "vloesberg", "7880", "henegouwen"),
  gemeente("Antoing", "antoing", "7640", "henegouwen"),
  gemeente("Brunehaut", "brunehaut", "7620", "henegouwen"),
  gemeente("Celles", "celles", "7760", "henegouwen"),
  { ...gemeente("Doornik", "doornik", "7500", "henegouwen"), ookVoor: ["Doornik (Tournai)"] },
  gemeente("Estaimpuis", "estaimpuis", "7730", "henegouwen"),
  { ...gemeente("Komen-Waasten", "komen-waasten", "7780", "henegouwen"), ookVoor: ["Komen-Waasten (Comines-Warneton)"] },
  gemeente("Leuze-en-Hainaut", "leuze-en-hainaut", "7900", "henegouwen"),
  { ...gemeente("Moeskroen", "moeskroen", "7700", "henegouwen"), ookVoor: ["Moeskroen (Mouscron)"] },
  gemeente("Mont-de-l'Enclus", "mont-de-l-enclus", "7750", "henegouwen"),
  gemeente("Pecq", "pecq", "7740", "henegouwen"),
  gemeente("Péruwelz", "peruwelz", "7600", "henegouwen"),
  gemeente("Rumes", "rumes", "7618", "henegouwen"),
  gemeente("Anderlues", "anderlues", "6150", "henegouwen"),
  gemeente("Beaumont", "beaumont", "6500", "henegouwen"),
  gemeente("Chimay", "chimay", "6460", "henegouwen"),
  gemeente("Erquelinnes", "erquelinnes", "6560", "henegouwen"),
  gemeente("Froidchapelle", "froidchapelle", "6440", "henegouwen"),
  gemeente("Ham-sur-Heure-Nalinnes", "ham-sur-heure-nalinnes", "6120", "henegouwen"),
  gemeente("Lobbes", "lobbes", "6540", "henegouwen"),
  gemeente("Merbes-le-Château", "merbes-le-chateau", "6567", "henegouwen"),
  gemeente("Momignies", "momignies", "6590", "henegouwen"),
  gemeente("Sivry-Rance", "sivry-rance", "6470", "henegouwen"),
  gemeente("Thuin", "thuin", "6530", "henegouwen"),
  /*
    Namen, sinds 15-11-2026, zoals Henegouwen. De stad heet `namen-stad`,
    om dezelfde reden als `antwerpen-stad`: /bouwdroger-huren-namen is de
    provincie.
  */
  gemeente("Andenne", "andenne", "5300", "namen"),
  gemeente("Assesse", "assesse", "5330", "namen"),
  gemeente("Fernelmont", "fernelmont", "5380", "namen"),
  gemeente("Floreffe", "floreffe", "5150", "namen"),
  gemeente("Fosses-la-Ville", "fosses-la-ville", "5070", "namen"),
  { ...gemeente("Gembloers", "gembloers", "5030", "namen"), ookVoor: ["Gembloers (Gembloux)"] },
  gemeente("Gesves", "gesves", "5340", "namen"),
  gemeente("Jemeppe-sur-Sambre", "jemeppe-sur-sambre", "5190", "namen"),
  gemeente("La Bruyère", "la-bruyere", "5080", "namen"),
  gemeente("Mettet", "mettet", "5640", "namen"),
  { ...gemeente("Namen", "namen-stad", "5000", "namen"), kruimel: "Namen stad" },
  gemeente("Ohey", "ohey", "5350", "namen"),
  gemeente("Profondeville", "profondeville", "5170", "namen"),
  gemeente("Sambreville", "sambreville", "5060", "namen"),
  gemeente("Sombreffe", "sombreffe", "5140", "namen"),
  gemeente("Éghezée", "eghezee", "5310", "namen"),
  gemeente("Anhée", "anhee", "5537", "namen"),
  gemeente("Beauraing", "beauraing", "5570", "namen"),
  gemeente("Bièvre", "bievre", "5555", "namen"),
  gemeente("Ciney", "ciney", "5590", "namen"),
  gemeente("Dinant", "dinant", "5500", "namen"),
  gemeente("Gedinne", "gedinne", "5575", "namen"),
  gemeente("Hamois", "hamois", "5360", "namen"),
  gemeente("Hastière", "hastiere", "5540", "namen"),
  gemeente("Havelange", "havelange", "5370", "namen"),
  gemeente("Houyet", "houyet", "5560", "namen"),
  gemeente("Onhaye", "onhaye", "5520", "namen"),
  gemeente("Rochefort", "rochefort", "5580", "namen"),
  gemeente("Somme-Leuze", "somme-leuze", "5377", "namen"),
  gemeente("Vresse-sur-Semois", "vresse-sur-semois", "5550", "namen"),
  gemeente("Yvoir", "yvoir", "5530", "namen"),
  gemeente("Cerfontaine", "cerfontaine", "5630", "namen"),
  gemeente("Couvin", "couvin", "5660", "namen"),
  gemeente("Doische", "doische", "5680", "namen"),
  gemeente("Florennes", "florennes", "5620", "namen"),
  gemeente("Philippeville", "philippeville", "5600", "namen"),
  gemeente("Viroinval", "viroinval", "5670", "namen"),
  gemeente("Walcourt", "walcourt", "5650", "namen"),
  /*
    De provincie Luxemburg, sinds 15-11-2026, zoals Namen. Bastenaken is sinds
    de fusie met Bertogne (2025) één gemeente; de oude naam heeft geen eigen
    pagina.
  */
  gemeente("Durbuy", "durbuy", "6940", "luxemburg"),
  gemeente("Hotton", "hotton", "6990", "luxemburg"),
  gemeente("La Roche-en-Ardenne", "la-roche-en-ardenne", "6980", "luxemburg"),
  gemeente("Manhay", "manhay", "6960", "luxemburg"),
  gemeente("Marche-en-Famenne", "marche-en-famenne", "6900", "luxemburg"),
  gemeente("Nassogne", "nassogne", "6950", "luxemburg"),
  gemeente("Rendeux", "rendeux", "6987", "luxemburg"),
  gemeente("Tenneville", "tenneville", "6970", "luxemburg"),
  gemeente("Érezée", "erezee", "6997", "luxemburg"),
  { ...gemeente("Bastenaken", "bastenaken", "6600", "luxemburg"), ookVoor: ["Bastenaken (Bastogne)"] },
  gemeente("Fauvillers", "fauvillers", "6637", "luxemburg"),
  gemeente("Gouvy", "gouvy", "6670", "luxemburg"),
  gemeente("Houffalize", "houffalize", "6660", "luxemburg"),
  gemeente("Sainte-Ode", "sainte-ode", "6680", "luxemburg"),
  gemeente("Vaux-sur-Sûre", "vaux-sur-sure", "6640", "luxemburg"),
  gemeente("Vielsalm", "vielsalm", "6690", "luxemburg"),
  gemeente("Bertrix", "bertrix", "6880", "luxemburg"),
  gemeente("Bouillon", "bouillon", "6830", "luxemburg"),
  gemeente("Daverdisse", "daverdisse", "6929", "luxemburg"),
  gemeente("Herbeumont", "herbeumont", "6887", "luxemburg"),
  gemeente("Libin", "libin", "6890", "luxemburg"),
  gemeente("Libramont-Chevigny", "libramont-chevigny", "6800", "luxemburg"),
  gemeente("Léglise", "leglise", "6860", "luxemburg"),
  gemeente("Neufchâteau", "neufchateau", "6840", "luxemburg"),
  gemeente("Paliseul", "paliseul", "6850", "luxemburg"),
  gemeente("Saint-Hubert", "saint-hubert", "6870", "luxemburg"),
  gemeente("Tellin", "tellin", "6927", "luxemburg"),
  gemeente("Wellin", "wellin", "6920", "luxemburg"),
  { ...gemeente("Aarlen", "aarlen", "6700", "luxemburg"), ookVoor: ["Aarlen (Arlon)"] },
  gemeente("Attert", "attert", "6717", "luxemburg"),
  gemeente("Aubange", "aubange", "6790", "luxemburg"),
  gemeente("Martelange", "martelange", "6630", "luxemburg"),
  gemeente("Messancy", "messancy", "6780", "luxemburg"),
  gemeente("Chiny", "chiny", "6810", "luxemburg"),
  gemeente("Florenville", "florenville", "6820", "luxemburg"),
  gemeente("Habay", "habay", "6720", "luxemburg"),
  gemeente("Meix-devant-Virton", "meix-devant-virton", "6769", "luxemburg"),
  gemeente("Musson", "musson", "6750", "luxemburg"),
  gemeente("Rouvroy", "rouvroy", "6767", "luxemburg"),
  gemeente("Saint-Léger", "saint-leger", "6747", "luxemburg"),
  gemeente("Tintigny", "tintigny", "6730", "luxemburg"),
  gemeente("Virton", "virton", "6760", "luxemburg"),
  gemeente("Étalle", "etalle", "6740", "luxemburg"),
  /*
    Luik, sinds 15-11-2026. De stad heet `luik-stad`, zoals `namen-stad`.
    De gemeente Limbourg heet hier zo en niet "Limburg": die naam is al onze
    Belgische provincie, en een pagina "Bouwdroger huren in Limburg" over
    een stadje bij Verviers zou de twee door elkaar halen.
    De Duitstalige gemeenten staan onder hun Duitse naam.
  */
  gemeente("Berloz", "berloz", "4257", "luik"),
  { ...gemeente("Borgworm", "borgworm", "4300", "luik"), ookVoor: ["Borgworm (Waremme)"] },
  gemeente("Braives", "braives", "4260", "luik"),
  gemeente("Crisnée", "crisnee", "4367", "luik"),
  gemeente("Donceel", "donceel", "4357", "luik"),
  gemeente("Faimes", "faimes", "4317", "luik"),
  gemeente("Fexhe-le-Haut-Clocher", "fexhe-le-haut-clocher", "4347", "luik"),
  gemeente("Geer", "geer", "4250", "luik"),
  { ...gemeente("Hannuit", "hannuit", "4280", "luik"), ookVoor: ["Hannuit (Hannut)"] },
  { ...gemeente("Lijsem", "lijsem", "4287", "luik"), ookVoor: ["Lijsem (Lincent)"] },
  { ...gemeente("Oerle", "oerle", "4360", "luik"), ookVoor: ["Oerle (Oreye)"] },
  gemeente("Remicourt", "remicourt", "4350", "luik"),
  gemeente("Saint-Georges-sur-Meuse", "saint-georges-sur-meuse", "4470", "luik"),
  gemeente("Wasseiges", "wasseiges", "4219", "luik"),
  gemeente("Ans", "ans", "4430", "luik"),
  gemeente("Awans", "awans", "4340", "luik"),
  gemeente("Aywaille", "aywaille", "4920", "luik"),
  gemeente("Beyne-Heusay", "beyne-heusay", "4610", "luik"),
  { ...gemeente("Bitsingen", "bitsingen", "4690", "luik"), ookVoor: ["Bitsingen (Bassenge)"] },
  gemeente("Blegny", "blegny", "4670", "luik"),
  gemeente("Chaudfontaine", "chaudfontaine", "4050", "luik"),
  gemeente("Comblain-au-Pont", "comblain-au-pont", "4170", "luik"),
  gemeente("Dalhem", "dalhem", "4607", "luik"),
  gemeente("Esneux", "esneux", "4130", "luik"),
  gemeente("Flémalle", "flemalle", "4400", "luik"),
  gemeente("Fléron", "fleron", "4620", "luik"),
  gemeente("Grâce-Hollogne", "grace-hollogne", "4460", "luik"),
  gemeente("Herstal", "herstal", "4040", "luik"),
  gemeente("Juprelle", "juprelle", "4450", "luik"),
  { ...gemeente("Luik", "luik-stad", "4000", "luik"), ookVoor: ["Luik (Liège)"], kruimel: "Luik stad" },
  gemeente("Neupré", "neupre", "4120", "luik"),
  gemeente("Oupeye", "oupeye", "4680", "luik"),
  gemeente("Saint-Nicolas", "saint-nicolas", "4420", "luik"),
  gemeente("Seraing", "seraing", "4100", "luik"),
  gemeente("Soumagne", "soumagne", "4630", "luik"),
  gemeente("Sprimont", "sprimont", "4140", "luik"),
  gemeente("Trooz", "trooz", "4870", "luik"),
  { ...gemeente("Wezet", "wezet", "4600", "luik"), ookVoor: ["Wezet (Visé)"] },
  gemeente("Amay", "amay", "4540", "luik"),
  gemeente("Anthisnes", "anthisnes", "4160", "luik"),
  gemeente("Burdinne", "burdinne", "4210", "luik"),
  gemeente("Clavier", "clavier", "4560", "luik"),
  gemeente("Engis", "engis", "4480", "luik"),
  gemeente("Ferrières", "ferrieres", "4190", "luik"),
  gemeente("Hamoir", "hamoir", "4180", "luik"),
  { ...gemeente("Hoei", "hoei", "4500", "luik"), ookVoor: ["Hoei (Huy)"] },
  gemeente("Héron", "heron", "4217", "luik"),
  gemeente("Marchin", "marchin", "4570", "luik"),
  gemeente("Modave", "modave", "4577", "luik"),
  gemeente("Nandrin", "nandrin", "4550", "luik"),
  gemeente("Ouffet", "ouffet", "4590", "luik"),
  gemeente("Tinlot", "tinlot", "4557", "luik"),
  gemeente("Verlaine", "verlaine", "4537", "luik"),
  gemeente("Villers-le-Bouillet", "villers-le-bouillet", "4530", "luik"),
  gemeente("Wanze", "wanze", "4520", "luik"),
  gemeente("Amel", "amel", "4770", "luik"),
  gemeente("Aubel", "aubel", "4880", "luik"),
  gemeente("Baelen", "baelen", "4837", "luik"),
  gemeente("Burg-Reuland", "burg-reuland", "4790", "luik"),
  gemeente("Büllingen", "buellingen", "4760", "luik"),
  gemeente("Bütgenbach", "buetgenbach", "4750", "luik"),
  gemeente("Dison", "dison", "4820", "luik"),
  gemeente("Eupen", "eupen", "4700", "luik"),
  gemeente("Herve", "herve", "4650", "luik"),
  gemeente("Jalhay", "jalhay", "4845", "luik"),
  gemeente("Kelmis", "kelmis", "4720", "luik"),
  gemeente("Lierneux", "lierneux", "4990", "luik"),
  { ...gemeente("Limbourg", "limbourg", "4830", "luik"), ookVoor: ["Limburg (Limbourg)"] },
  gemeente("Lontzen", "lontzen", "4710", "luik"),
  gemeente("Malmedy", "malmedy", "4960", "luik"),
  gemeente("Olne", "olne", "4877", "luik"),
  gemeente("Pepinster", "pepinster", "4860", "luik"),
  gemeente("Plombières", "plombieres", "4850", "luik"),
  gemeente("Raeren", "raeren", "4730", "luik"),
  { ...gemeente("Sankt Vith", "sankt-vith", "4780", "luik"), ookVoor: ["Sankt Vith (Saint-Vith)"] },
  gemeente("Spa", "spa", "4900", "luik"),
  gemeente("Stavelot", "stavelot", "4970", "luik"),
  gemeente("Stoumont", "stoumont", "4987", "luik"),
  gemeente("Theux", "theux", "4910", "luik"),
  gemeente("Thimister-Clermont", "thimister-clermont", "4890", "luik"),
  gemeente("Trois-Ponts", "trois-ponts", "4980", "luik"),
  gemeente("Verviers", "verviers", "4800", "luik"),
  { ...gemeente("Weismes", "weismes", "4950", "luik"), ookVoor: ["Weismes (Waimes)"] },
  gemeente("Welkenraedt", "welkenraedt", "4840", "luik"),
  /*
    Nederlandse gemeenten, sinds 15-11-2026. De slug volgt de naam; waar die
    botst met een Belgische pagina krijgt ze een achtervoegsel (`deurne-nb`,
    `bergen-limburg`). Levering is hier op afspraak, zie `opAanvraag`.
  */
  gemeente("Alphen-Chaam", "alphen-chaam", "5131", "noord-brabant"),
  gemeente("Altena", "altena", "4251", "noord-brabant"),
  gemeente("Baarle-Nassau", "baarle-nassau", "5111", "noord-brabant"),
  gemeente("Bergen op Zoom", "bergen-op-zoom", "4611", "noord-brabant"),
  gemeente("Breda", "breda", "4811", "noord-brabant"),
  gemeente("Drimmelen", "drimmelen", "4921", "noord-brabant"),
  gemeente("Etten-Leur", "etten-leur", "4871", "noord-brabant"),
  gemeente("Geertruidenberg", "geertruidenberg", "4931", "noord-brabant"),
  gemeente("Halderberge", "halderberge", "4731", "noord-brabant"),
  gemeente("Moerdijk", "moerdijk", "4782", "noord-brabant"),
  gemeente("Oosterhout", "oosterhout", "4901", "noord-brabant"),
  gemeente("Roosendaal", "roosendaal", "4701", "noord-brabant"),
  gemeente("Rucphen", "rucphen", "4715", "noord-brabant"),
  gemeente("Steenbergen", "steenbergen", "4651", "noord-brabant"),
  gemeente("Woensdrecht", "woensdrecht", "4631", "noord-brabant"),
  gemeente("Zundert", "zundert", "4881", "noord-brabant"),
  gemeente("Dongen", "dongen", "5101", "noord-brabant"),
  gemeente("Gilze en Rijen", "gilze-en-rijen", "5126", "noord-brabant"),
  gemeente("Goirle", "goirle", "5051", "noord-brabant"),
  gemeente("Heusden", "heusden", "5251", "noord-brabant"),
  gemeente("Hilvarenbeek", "hilvarenbeek", "5081", "noord-brabant"),
  gemeente("Loon op Zand", "loon-op-zand", "5175", "noord-brabant"),
  gemeente("Oisterwijk", "oisterwijk", "5061", "noord-brabant"),
  gemeente("Tilburg", "tilburg", "5011", "noord-brabant"),
  gemeente("Waalwijk", "waalwijk", "5141", "noord-brabant"),
  gemeente("'s-Hertogenbosch", "s-hertogenbosch", "5211", "noord-brabant"),
  gemeente("Bernheze", "bernheze", "5384", "noord-brabant"),
  gemeente("Boekel", "boekel", "5427", "noord-brabant"),
  gemeente("Boxtel", "boxtel", "5281", "noord-brabant"),
  gemeente("Gemert-Bakel", "gemert-bakel", "5421", "noord-brabant"),
  gemeente("Land van Cuijk", "land-van-cuijk", "5431", "noord-brabant"),
  gemeente("Maashorst", "maashorst", "5401", "noord-brabant"),
  gemeente("Meierijstad", "meierijstad", "5461", "noord-brabant"),
  gemeente("Oss", "oss", "5341", "noord-brabant"),
  gemeente("Sint-Michielsgestel", "sint-michielsgestel", "5271", "noord-brabant"),
  gemeente("Vught", "vught", "5261", "noord-brabant"),
  gemeente("Asten", "asten", "5721", "noord-brabant"),
  gemeente("Bergeijk", "bergeijk", "5571", "noord-brabant"),
  gemeente("Best", "best", "5681", "noord-brabant"),
  gemeente("Bladel", "bladel", "5531", "noord-brabant"),
  gemeente("Cranendonck", "cranendonck", "6021", "noord-brabant"),
  { ...gemeente("Deurne", "deurne-nb", "5751", "noord-brabant"), ookVoor: ["Deurne (Noord-Brabant)"] },
  gemeente("Eersel", "eersel", "5521", "noord-brabant"),
  gemeente("Eindhoven", "eindhoven", "5611", "noord-brabant"),
  gemeente("Geldrop-Mierlo", "geldrop-mierlo", "5664", "noord-brabant"),
  gemeente("Heeze-Leende", "heeze-leende", "5591", "noord-brabant"),
  gemeente("Helmond", "helmond", "5701", "noord-brabant"),
  gemeente("Laarbeek", "laarbeek", "5741", "noord-brabant"),
  { ...gemeente("Nuenen", "nuenen", "5671", "noord-brabant"), ookVoor: ["Nuenen c.a."] },
  gemeente("Oirschot", "oirschot", "5688", "noord-brabant"),
  gemeente("Reusel-De Mierden", "reusel-de-mierden", "5541", "noord-brabant"),
  gemeente("Someren", "someren", "5711", "noord-brabant"),
  gemeente("Son en Breugel", "son-en-breugel", "5691", "noord-brabant"),
  gemeente("Valkenswaard", "valkenswaard", "5551", "noord-brabant"),
  gemeente("Veldhoven", "veldhoven", "5501", "noord-brabant"),
  gemeente("Waalre", "waalre", "5581", "noord-brabant"),
  /*
    Zeeland, sinds 15-11-2026, zoals Noord-Brabant.
  */
  gemeente("Hulst", "hulst", "4561", "zeeland"),
  gemeente("Sluis", "sluis", "4524", "zeeland"),
  gemeente("Terneuzen", "terneuzen", "4531", "zeeland"),
  gemeente("Borsele", "borsele", "4451", "zeeland"),
  gemeente("Goes", "goes", "4461", "zeeland"),
  gemeente("Kapelle", "kapelle", "4421", "zeeland"),
  gemeente("Middelburg", "middelburg", "4331", "zeeland"),
  gemeente("Noord-Beveland", "noord-beveland", "4484", "zeeland"),
  gemeente("Reimerswaal", "reimerswaal", "4401", "zeeland"),
  gemeente("Schouwen-Duiveland", "schouwen-duiveland", "4301", "zeeland"),
  gemeente("Tholen", "tholen", "4691", "zeeland"),
  gemeente("Veere", "veere", "4351", "zeeland"),
  gemeente("Vlissingen", "vlissingen", "4381", "zeeland"),
  /*
    Nederlands Limburg, sinds 15-11-2026. Sleutel en slug zijn `nederlands-limburg`,
    niet `limburg`: dat is onze Belgische provincie.
  */
  gemeente("Beesel", "beesel", "5951", "nederlands-limburg"),
  { ...gemeente("Bergen", "bergen-limburg", "5854", "nederlands-limburg"), ookVoor: ["Bergen (L.)"] },
  gemeente("Gennep", "gennep", "6591", "nederlands-limburg"),
  gemeente("Horst aan de Maas", "horst-aan-de-maas", "5961", "nederlands-limburg"),
  gemeente("Mook en Middelaar", "mook-en-middelaar", "6585", "nederlands-limburg"),
  gemeente("Peel en Maas", "peel-en-maas", "5981", "nederlands-limburg"),
  gemeente("Venlo", "venlo", "5911", "nederlands-limburg"),
  gemeente("Venray", "venray", "5801", "nederlands-limburg"),
  gemeente("Echt-Susteren", "echt-susteren", "6101", "nederlands-limburg"),
  gemeente("Leudal", "leudal", "6093", "nederlands-limburg"),
  gemeente("Maasgouw", "maasgouw", "6051", "nederlands-limburg"),
  gemeente("Nederweert", "nederweert", "6031", "nederlands-limburg"),
  gemeente("Roerdalen", "roerdalen", "6074", "nederlands-limburg"),
  gemeente("Roermond", "roermond", "6041", "nederlands-limburg"),
  gemeente("Weert", "weert", "6001", "nederlands-limburg"),
  gemeente("Beek", "beek", "6191", "nederlands-limburg"),
  gemeente("Beekdaelen", "beekdaelen", "6361", "nederlands-limburg"),
  gemeente("Brunssum", "brunssum", "6441", "nederlands-limburg"),
  gemeente("Eijsden-Margraten", "eijsden-margraten", "6269", "nederlands-limburg"),
  gemeente("Gulpen-Wittem", "gulpen-wittem", "6271", "nederlands-limburg"),
  gemeente("Heerlen", "heerlen", "6411", "nederlands-limburg"),
  gemeente("Kerkrade", "kerkrade", "6461", "nederlands-limburg"),
  gemeente("Landgraaf", "landgraaf", "6371", "nederlands-limburg"),
  gemeente("Maastricht", "maastricht", "6211", "nederlands-limburg"),
  gemeente("Meerssen", "meerssen", "6231", "nederlands-limburg"),
  gemeente("Simpelveld", "simpelveld", "6369", "nederlands-limburg"),
  gemeente("Sittard-Geleen", "sittard-geleen", "6131", "nederlands-limburg"),
  gemeente("Stein", "stein", "6171", "nederlands-limburg"),
  gemeente("Vaals", "vaals", "6291", "nederlands-limburg"),
  gemeente("Valkenburg aan de Geul", "valkenburg-aan-de-geul", "6301", "nederlands-limburg"),
  gemeente("Voerendaal", "voerendaal", "6367", "nederlands-limburg"),
];

/*
  Waar het Franse pad niet gewoon uit de Franse naam volgt. Vier steden delen
  hun naam met hun provincie (Anvers, Bruxelles, Namur, Liège) en krijgen,
  zoals `antwerpen-stad` in het Nederlands, een achtervoegsel: `-ville`, het
  woord dat een Franstalige er zelf bij zet. Sint-Niklaas en de Luikse
  gemeente Saint-Nicolas heten in het Frans hetzelfde; de Waaslandse krijgt
  haar streek erbij, zoals in het Franse spraakgebruik. En de Luikse gemeente
  Limbourg botst met de provincie Limbourg.
*/
const SLUG_FR: Record<string, string> = {
  "antwerpen-stad": "anvers-ville",
  "brussel-stad": "bruxelles-ville",
  "namen-stad": "namur-ville",
  "luik-stad": "liege-ville",
  "sint-niklaas": "saint-nicolas-waes",
  limbourg: "limbourg-ville",
};

/** Het kruimelpad in het Frans, voor dezelfde vier steden als `kruimel`. */
const KRUIMEL_FR: Record<string, string> = {
  "antwerpen-stad": "Anvers ville",
  "brussel-stad": "Bruxelles-Ville",
  "namen-stad": "Namur ville",
  "luik-stad": "Liège ville",
};

const slugVan = (naam: string) =>
  naam
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/œ/gi, "oe")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/**
 * Het Franse pad van een gemeente, zonder taalprefix:
 * `/location-deshumidificateur-malines`. Afgeleid uit de Franse naam, zodat
 * het zoekwoord van een Franstalige in de URL staat; heet de plaats in beide
 * talen hetzelfde, dan blijft de Nederlandse slug (`hasselt`). Bevroren zodra
 * het live staat, zoals elke slug.
 *
 * Geeft ook een pad voor een gemeente zonder Franse tekst; of de pagina
 * bestaat, beslist `GEMEENTEN_MET_FR`.
 */
export function gemeentePadFr(route: GemeenteRoute): string | null {
  if (!route.nameFr) return null;
  const slug =
    SLUG_FR[route.slug] ?? (route.nameFr === route.name ? route.slug : slugVan(route.nameFr));
  return `/location-deshumidificateur-${slug}`;
}

/** Hoe de gemeente in een Frans kruimelpad staat. */
export function kruimelFr(route: GemeenteRoute): string {
  return KRUIMEL_FR[route.slug] ?? route.nameFr ?? route.name;
}

/*
  Alleen de gemeenten met een Franse tekst krijgen een Franse route. Een Franse
  URL met Nederlandse tekst ziet Google als dubbele inhoud, en een lege pagina
  is erger dan geen. Welke dat zijn, staat per provincie in
  `gemeenten-fr/aan/`; zie de README in `gemeenten-fr/`.
*/
registreerPaden(
  Object.fromEntries(
    GEMEENTE_ROUTES.flatMap((g) => {
      const fr = GEMEENTEN_MET_FR.has(g.slug) ? gemeentePadFr(g) : null;
      return fr ? [[g.path, { fr, en: "" }]] : [];
    }),
  ),
);

export const GEMEENTE_BY_PATH: Record<string, GemeenteRoute> = Object.fromEntries(
  GEMEENTE_ROUTES.map((g) => [g.path, g])
);

/**
 * De gemeentepagina bij een plaatsnaam zoals die op de homepage-kaart staat,
 * of `undefined` wanneer die gemeente (nog) geen eigen pagina heeft.
 *
 * Op de kaart heet de stad "Antwerpen"; haar pagina heeft de slug
 * `antwerpen-stad`, want `/bouwdroger-huren-antwerpen` is al de provincie.
 * Daarom matcht deze functie op `name` en niet op de slug.
 */
export function gemeenteVanPlaats(plaats: string): GemeenteRoute | undefined {
  return GEMEENTE_ROUTES.find((g) => g.name === plaats || g.ookVoor?.includes(plaats));
}

/** Alle gemeentepagina's binnen één provincie, in de volgorde hierboven. */
export function gemeentenInRegio(regioSlug: string): GemeenteRoute[] {
  return GEMEENTE_ROUTES.filter((g) => g.regio === regioSlug);
}
