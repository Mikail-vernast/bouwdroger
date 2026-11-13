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
 * Oost-Vlaanderen en Vlaams-Brabant: 194 pagina's. Die lat van eigen tekst
 * geldt voor elke nieuwe pagina, en `gemeenteTeksten.test.ts` controleert wat
 * daarvan te meten valt (eigen titel, eigen description, geen vraag twee keer).
 * West-Vlaanderen en Limburg hebben nog alleen hun provinciepagina.
 *
 * Een gemeente toevoegen raakt drie bestanden: hier een entry, de tekst in
 * `gemeenten.ts`, en niets meer — de route, de sitemap, de chips op de
 * homepage en de lijst op de provinciepagina leiden zich hieruit af.
 */
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
}

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
];

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
