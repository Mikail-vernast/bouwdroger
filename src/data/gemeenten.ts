import { GEMEENTE_ROUTES, type GemeenteRoute } from "./gemeente-slugs.js";
import { REALISATIE_REGIO } from "./realisatie-regio.js";

/**
 * De tekst van elke gemeentepagina.
 *
 * Gescheiden van `gemeente-slugs.ts` om dezelfde reden als `regios.ts` van
 * `regio-slugs.ts`: dit bestand mag niet in de entry-chunk belanden, alleen de
 * gemeentepagina zelf importeert het.
 *
 * **Waarom hier zoveel eigen tekst staat.** Een gemeentepagina die alleen de
 * provinciepagina is met een andere plaatsnaam erin is een doorway page, en
 * die filtert Google weg — inclusief de provinciepagina waarvan ze een kopie
 * is. De provinciepagina's halen 64% eigen tekst (gemeten 12-11-2026); die lat
 * geldt hier ook. Elke `intro` en elke `bouw.alineas` hieronder gaat over iets
 * dat alleen in die gemeente zo is: de Rupelse kleigrond, de Kempense
 * zandgrond, de smalle trap van een Antwerpse rijwoning, het hoogwater van de
 * Nete. Staat er voor een nieuwe gemeente niets eigens te zeggen, voeg ze dan
 * niet toe — een dunne pagina kost meer dan ze opbrengt.
 *
 * De `faq` is om dezelfde reden per gemeente anders: drie vragen die in die
 * streek echt gesteld worden, niet dezelfde drie met een vervangen naam.
 */

export interface GemeenteFaq {
  q: string;
  a: string;
}

export interface Gemeente {
  slug: string;
  /** 50–60 tekens; zie de richtlijn bovenaan `seo.ts`. */
  title: string;
  /** 120–160 tekens. */
  description: string;
  h1: string;
  kicker: string;
  /**
   * Afstand en rijtijd vanaf ons magazijn in Aartselaar (Boomsesteenweg 12).
   *
   * Bewust afgerond en in spreektaal: dit zijn richtcijfers voor een bezoeker,
   * geen routeplanner. Ze staan ook in de `description` van sommige pagina's,
   * dus wijzig ze op één plek. **Te verifiëren tegen de echte ritgegevens
   * voor de pagina's live gaan.**
   */
  rit: { afstand: string; tijd: string };
  /** Twee à drie alinea's over deze gemeente, onder de H1. */
  intro: string[];
  /** Waarvoor men hier huurt — de eigen bebouwing en haar vochtproblemen. */
  bouw: { kop: string; alineas: string[] };
  /**
   * De drie toestellen die hier het vaakst staan, met de reden waaróm.
   *
   * De `waarom` is per gemeente anders en dat is het punt: dezelfde drie
   * toestelkaarten met dezelfde tekst op zeventien pagina's zijn kopieerwerk.
   * De sleutel is een `product_key` uit `PRODUCTS` (`src/data/verhuur.ts`),
   * zodat naam, foto en prijs uit het portaal komen en niet uit deze tekst.
   */
  toestellen: { key: string; waarom: string }[];
  /** Het leverpaneel: waarom leveren hier de logische keuze is. */
  levering: { kop: string; alinea: string };
  /** Het afhaalpaneel: wat afhalen vanuit déze gemeente betekent. */
  afhalen: { kop: string; alinea: string };
  /** Slugs van aangrenzende gemeenten met een eigen pagina; voor de links. */
  buren: string[];
  faq: GemeenteFaq[];
  /** Realisaties die in deze gemeente liggen; leeg is toegestaan. */
  realisaties: string[];
}

const G: Gemeente[] = [
  {
    slug: "antwerpen-stad",
    /*
      "stad en districten", niet "Antwerpen" kaal: deze H1 was woord voor
      woord die van de provinciepagina, en dan vechten twee pagina's om
      dezelfde zoekopdracht. Deze pagina gaat over de stad zelf en haar
      districten (Berchem, Borgerhout, Deurne, Merksem, Hoboken, Ekeren)
      waar Wilrijk bewust buiten valt, want dat heeft een eigen pagina.
    */
    title: "Bouwdroger huren in Antwerpen stad | Vernast",
    description:
      "Bouwdroger huren in Antwerpen stad, Berchem, Borgerhout, Deurne of Merksem: compacte toestellen voor een rijwoning of appartement, binnen 24 uur geleverd.",
    h1: "Bouwdroger huren in Antwerpen stad en districten",
    kicker: "Stad en districten · magazijn op 20 minuten",
    rit: { afstand: "circa 12 km", tijd: "ongeveer twintig minuten" },
    intro: [
      "**In de stad is bouwdroging bijna altijd renovatie.** In de negentiende-eeuwse gordel van Berchem, Borgerhout en Zurenborg gaat het huis per huis: **vers pleisterwerk** in een bewoonde straat, **een kelder** die na een natte winter vochtig blijkt, **een chape** die moet drogen terwijl de buren thuis zijn.",
      "Dat stelt andere eisen dan een open werf. Het toestel moet **via een smalle trap naar boven** kunnen, **op één gewoon stopcontact** draaien en **stil genoeg** zijn voor een gebouw waar mensen wonen. Daarom staat **de Small bouwdroger** hier het vaakst: 50 liter per dag, 0,75 kW, en hij past door een deur van tachtig centimeter.",
    ],
    bouw: {
      kop: "Rijwoningen, appartementen en kelders onder het maaiveld",
      alineas: [
        "De Antwerpse rijwoning heeft een smalle, diepe plattegrond en vaak een kelder die deels onder het maaiveld ligt. **Die kelder droogt van nature nooit helemaal**: er is geen doorstroming, de muren staan tegen de grond en de temperatuur blijft laag. **Een condensdroger verliest onder 15 °C rendement**, dus zetten we er bij een winterwerf een elektrische kachel naast om de ruimte eerst op werkingstemperatuur te brengen.",
        "In een appartement speelt iets anders: de verdieping. Is er een lift of een vaste trap, dan is **elke verdieping inbegrepen in de prijs**. Moet een toestel via een ladder naar boven, zoals bij een casco-verbouwing waar de trap nog niet ligt, dan rekenen we een toeslag per verdieping. **Dat staat vooraf in uw offerte, niet achteraf op de factuur.**",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**Het toestel voor de stad**: compact genoeg voor een Antwerpse draaitrap en zuinig op één gewoon stopcontact. Voor een kamer, een appartement of een badkamerrenovatie." },
      { key: "ttv4500", waarom: "In een smalle, diepe rijwoning gaat droge lucht niet vanzelf van voor naar achter. Deze ventilator doet dat wel, en **halveert zo vaak de droogtijd** van een gelijkvloers." },
      { key: "teddh30", waarom: "**Voor de kelder onder de voorkamer**, die in de winter zelden boven tien graden komt. Onder 15 °C verliest elke condensdroger rendement; deze kachel haalt dat terug." },
      { key: "ttk350", waarom: "De Medium voor een volledige rijwoning: 70 liter per dag en bereik tot ongeveer 400 m³, genoeg voor een gelijkvloers met verse chape of nieuw pleisterwerk." },
    ],
    levering: {
      kop: "Leveren in Antwerpen: de volgende werkdag, geplaatst en ingesteld",
      alinea:
        "**In de stad leveren we met een bestelwagen die kort dubbel kan staan** terwijl de technieker uitlaadt. Ligt uw straat in een voetgangerszone of geldt er een venstertijd, **zeg dat dan bij de reservatie**, dan plannen we binnen dat venster. Is er een lift of een vaste trap, dan is elke verdieping inbegrepen; moet een toestel via een ladder naar boven, dan staat die toeslag vooraf in uw offerte.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar, langs de A12",
      alinea:
        "Vanuit de stad is ons afhaalpunt **een rit van ongeveer twintig minuten over de A12**. Houd er rekening mee dat een droger **25 tot 40 kg weegt en rechtop vervoerd moet worden**. In een kleine stadswagen past er doorgaans één, geen twee.",
    },
    buren: ["wilrijk", "mortsel", "edegem", "schoten"],
    faq: [
      {
        q: "Past een bouwdroger door een Antwerpse trappenhal?",
        a: "De Small bouwdroger is 40 bij 40 centimeter aan de basis en weegt ongeveer 25 kg. Die gaat door elke gangbare trappenhal, ook de draaitrap van een negentiende-eeuws rijhuis. Voor de Medium rekent u op iets meer breedte. Twijfelt u, geef dan bij de reservatie door dat het om een smalle trap gaat; dan kiest de technieker het toestel daarop.",
      },
      {
        q: "Mag een bouwdroger 's nachts doordraaien in een appartementsgebouw?",
        a: "Ja, en dat hoort ook: drogen is een continu proces en een toestel dat 's nachts uit staat verliest de winst van overdag. Een Small bouwdroger zit rond 48 dB, vergelijkbaar met een koelkast in dezelfde kamer. Staat hij in een leefruimte boven een slaapkamer, zet hem dan op een tegelvloer en niet op een houten plankenvloer, die draagt het gebrom door.",
      },
      {
        q: "Kan ik in het centrum laten leveren zonder parkeerplaats?",
        a: "Meestal wel. Onze bestelwagen staat kort dubbel geparkeerd terwijl de technieker uitlaadt; voor één of twee toestellen is dat een kwestie van minuten. Ligt uw straat in een voetgangerszone of is er een venstertijd, zeg dat dan bij de reservatie, dan plannen we de levering binnen dat venster.",
      },
      {
        q: "Hoe ver is het magazijn vanuit het centrum?",
        a: "Ongeveer twaalf kilometer, een rit van een twintigtal minuten over de A12 richting Aartselaar. Voor een levering maakt dat niets uit: die zit in de prijs van het droogpakket. Voor een afhaling betekent het dat u met één toestel in een gewone wagen heen en terug ongeveer een uur kwijt bent.",
      },
      {
        q: "Wat kost een bouwdroger huren in Antwerpen stad?",
        a: "Een los toestel heeft een dagprijs; een droogpakket heeft één vaste prijs die wij vooraf berekenen uit het volume, het materiaal en de laagdikte. In die pakketprijs zitten de levering in de stad, de plaatsing, de vochtmeting bij de start en bij de oplevering en de ophaling. U ziet het bedrag in de Calculator voor u boekt, en er komt geen waarborg bij.",
      },
      {
        q: "Hoe lang blijft een bouwdroger in een Antwerps rijhuis staan?",
        a: "Dat beslist de meting, niet de kalender. Vers pleisterwerk van één centimeter zit in een verwarmde woning vaak na twee weken onder de norm; een chape van zes centimeter rekent u met een pakket op een week of drie. In een onverwarmde kelder of bij een gesloten winterwerf loopt dat op, en dan zetten we er een kachel bij. Is het op de afgesproken datum niet droog, dan loopt de huur volgens de Drooggarantie kosteloos verder.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "berchem",
    title: "Bouwdroger huren in Berchem en Zurenborg | Vernast",
    description:
      "Bouwdroger huren in Berchem: herenhuizen met souterrain rond Zurenborg en rijwoningen in de gordel. Compacte toestellen, binnen 24 uur geleverd en geplaatst.",
    h1: "Bouwdroger huren in Berchem",
    kicker: "District van Antwerpen · Zurenborg en Oud-Berchem",
    rit: { afstand: "circa 9 km", tijd: "ongeveer een kwartier" },
    intro: [
      "Berchem is twee wijken in één district. Rond de Cogels-Osylei staan de herenhuizen van Zurenborg, met een souterrain onder de voorgevel en drie bouwlagen erboven; daarbuiten ligt de dichte negentiende-eeuwse gordel van Oud-Berchem, rijwoning naast rijwoning. Allebei worden ze huis per huis gerenoveerd, en allebei stellen ze dezelfde eis aan een toestel: het moet door een smalle gang en een draaitrap.",
      "Ons magazijn in Aartselaar ligt op een kwartier over de Singel. Voor een gewone droging is de volgende werkdag de regel; staat er water in een souterrain, dan is dezelfde dag vaak haalbaar.",
    ],
    bouw: {
      kop: "Herenhuizen met souterrain en rijwoningen in de gordel",
      alineas: [
        "Het souterrain van een Zurenborgs herenhuis ligt half onder het maaiveld, in baksteen op kalkmortel en zonder waterkering. Het is er het hele jaar koel en vochtig, en dat merkt u pas wanneer er beneden een bureau of een keuken komt. Onder 15 °C haalt een condensdroger nog maar een fractie van zijn capaciteit, dus zetten we er bij een winterwerf een kachel naast om de ruimte eerst op temperatuur te brengen.",
        "In Oud-Berchem gaat het vaker om vers pleisterwerk in een bewoond huis. Het toestel moet dan niet alleen passen maar ook te verdragen zijn: een compacte droger op één gewoon stopcontact, met de condensafvoer op een lavabo zodat niemand reservoirs hoeft te legen. Wat de droging hier vooral traag maakt is de plattegrond. Een Berchemse rijwoning is smal en diep, en zonder luchtbeweging droogt alleen de kamer waar het toestel staat.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "Het toestel voor een Berchemse trap: 40 bij 40 centimeter aan de basis, zuinig op één gewoon stopcontact en stil genoeg voor een bewoond huis." },
      { key: "ttv4500", waarom: "Een smalle, diepe rijwoning droogt niet vanzelf van voor naar achter. Deze ventilator duwt de droge lucht tot in de achterbouw." },
      { key: "teddh30", waarom: "Voor het souterrain, dat in de winter zelden boven tien graden komt. De kachel brengt de ruimte op werkingstemperatuur zodat de droger weer rendeert. Vraagt 400 V." },
      { key: "ttk350", waarom: "Voor een volledige bouwlaag met nieuwe chape of vers pleisterwerk: 70 liter per dag en bereik tot ongeveer 400 m³." },
    ],
    levering: {
      kop: "Leveren in Berchem: de volgende werkdag, tot boven gedragen",
      alinea:
        "Een kwartier rijden over de Singel. In de straten rond Zurenborg staat onze bestelwagen kort dubbel terwijl de technieker uitlaadt; voor één of twee toestellen is dat een kwestie van minuten. Is er een vaste trap, dan draagt hij alles naar boven zonder meerkost, ook naar de tweede verdieping. Ligt uw straat in een zone met venstertijd, geef dat door bij de reservatie.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar, langs de A12",
      alinea:
        "Vanuit Berchem een rit van een kwartier. Voor één los toestel loont dat, zeker omdat u dan geen transport betaalt. Houd er rekening mee dat een droger 25 tot 40 kg weegt en rechtop vervoerd moet worden.",
    },
    buren: ["antwerpen-stad", "borgerhout", "deurne", "mortsel"],
    faq: [
      {
        q: "Past een bouwdroger door de trap van een herenhuis in Zurenborg?",
        a: "De Small bouwdroger is 40 bij 40 centimeter aan de basis en weegt ongeveer 25 kg. Die gaat door elke gangbare trappenhal, ook een draaitrap met een krappe bocht. Voor de Medium rekent u op iets meer breedte. Geef bij de reservatie door dat het om een smalle trap gaat, dan kiest de technieker het toestel daarop.",
      },
      {
        q: "Mijn souterrain blijft vochtig, ook zonder werken. Helpt drogen dan?",
        a: "Zolang het toestel draait wel, maar zet u het uit, dan komt het vocht terug. Een souterrain zonder waterkering neemt vocht op uit de grond; dat is geen bouwvocht maar een permanente bron. De volgorde is dus: eerst de bron aanpakken, daarna het vocht eruit halen dat erin zit. Onze technieker meet bij de levering en zegt u in welk geval u zit.",
      },
      {
        q: "Hoe snel staan jullie in Berchem?",
        a: "Binnen 24 uur, en meestal de volgende werkdag: het magazijn ligt op een kwartier via de Singel. Bij waterschade in een souterrain bellen we meteen terug om te kijken of het dezelfde dag nog lukt. Bel in dat geval liever dan online te boeken, op 03 689 90 65.",
      },
      {
        q: "Hoeveel toestellen heb ik nodig voor een volledige bouwlaag?",
        a: "Voor een gelijkvloers van een Berchemse rijwoning volstaat doorgaans één bouwdroger met een ventilator erbij. Die ventilator is hier geen luxe: in een smalle, diepe plattegrond blijft droge lucht anders hangen in de kamer waar het toestel staat en blijft de achterste muur nat. De Calculator rekent het aantal uit op basis van uw volume.",
      },
      {
        q: "Mag het toestel 's nachts doordraaien in een bewoond huis?",
        a: "Ja, en dat hoort ook: drogen is een continu proces en een toestel dat 's nachts uit staat verliest de winst van overdag. Een Small bouwdroger zit rond 48 dB, vergelijkbaar met een koelkast. Staat hij boven een slaapkamer, zet hem dan op een tegelvloer en niet op een plankenvloer, want die draagt het gebrom door het hele huis.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "borgerhout",
    title: "Bouwdroger huren in Borgerhout | Vernast",
    description:
      "Bouwdroger huren in Borgerhout: dicht bebouwde arbeiderswoningen en opgesplitste panden, smalle gangen. Compacte toestellen, binnen 24 uur geleverd en geplaatst.",
    h1: "Bouwdroger huren in Borgerhout",
    kicker: "District van Antwerpen · intra en extra muros",
    rit: { afstand: "circa 11 km", tijd: "ongeveer twintig minuten" },
    intro: [
      "Borgerhout is het dichtst bebouwde district van de stad. Binnen de Singel staan de arbeiderswoningen van de negentiende-eeuwse gordel schouder aan schouder: smalle gevels, een gang van tachtig centimeter, een koertje achteraan. Veel van die panden zijn intussen opgesplitst in appartementen, en dat bepaalt mee welk toestel er past.",
      "Wij leveren er binnen 24 uur vanuit Aartselaar, een rit van een twintigtal minuten. Levering, plaatsing en ophaling zitten in de prijs van het droogpakket, ook als het toestel twee verdiepingen hoog moet.",
    ],
    bouw: {
      kop: "Arbeiderswoningen, opgesplitste panden en kleine binnenplaatsen",
      alineas: [
        "Een Borgerhoutse arbeiderswoning heeft massieve muren zonder spouw, vaak rechtstreeks tegen die van de buren. Vers pleisterwerk droogt daar traag, want er is weinig buitenmuur waarlangs vocht weg kan en het koertje achteraan geeft nauwelijks doorstroming. Ramen en deuren dicht houden is hier dus geen detail: doet u ze open, dan droogt u de straat mee.",
        "In een opgesplitst pand speelt de verdieping. Is er een vaste trap, dan dragen we elk toestel naar boven zonder meerkost. Moet het via een ladder, wat bij een casco-verbouwing voorkomt waar de trap nog niet ligt, dan rekenen we een toeslag per verdieping en komen we met twee man. Dat staat vooraf in uw offerte, niet achteraf op de factuur.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "Compact genoeg voor een gang van tachtig centimeter en een steile trap, en zuinig op één gewoon stopcontact." },
      { key: "ttv4500", waarom: "Zonder luchtbeweging droogt in een smal huis alleen de voorkamer. Deze ventilator brengt de droge lucht tot achteraan." },
      { key: "ttk350", waarom: "Voor een volledig gelijkvloers met nieuwe chape: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "revolution", waarom: "Voor een kelder of een koertje-aanbouw die niet te verwarmen is: droge lucht via slangen, ook bij lage temperaturen." },
    ],
    levering: {
      kop: "Leveren in Borgerhout: ook zonder parkeerplaats voor de deur",
      alinea:
        "Onze bestelwagen staat kort dubbel geparkeerd terwijl de technieker uitlaadt. Ligt uw straat in een voetgangerszone of geldt er een venstertijd, zeg dat dan bij de reservatie, dan plannen we de levering binnen dat venster. Bij aankomst meet hij eerst het startvochtgehalte en sluit hij de condensafvoer aan op een lavabo of douche, zodat u geen reservoirs hoeft te legen.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een rit van een twintigtal minuten over de A12. Voor één los toestel kan dat lonen; voor een volledig droogpakket niet, want dan zit de rit al in de prijs en plaatst de technieker alles meteen.",
    },
    buren: ["antwerpen-stad", "berchem", "deurne", "merksem"],
    faq: [
      {
        q: "Komen jullie ook in een straat met een venstertijd?",
        a: "Ja. Geef bij de reservatie door dat uw straat een venstertijd of een voetgangerszone heeft, dan plannen we de levering binnen dat venster. Voor één of twee toestellen staat de bestelwagen hooguit enkele minuten voor de deur.",
      },
      {
        q: "Wat kost het als de toestellen twee verdiepingen hoog moeten?",
        a: "Niets extra, zolang er een vaste trap of een lift is: elke verdieping is inbegrepen in de prijs van het droogpakket. Alleen wanneer een toestel via een ladder naar boven moet, rekenen we een toeslag per verdieping. Meld dat vooraf, dan komen we met twee man.",
      },
      {
        q: "Moet ik de ramen openzetten terwijl de droger draait?",
        a: "Nee, integendeel: dicht houden. Een bouwdroger ontvochtigt de lucht die in de ruimte zit; staat er een raam open, dan trekt hij de buitenlucht mee en droogt u in de praktijk de straat. Houd de deuren van de droogzone ook dicht, zodat het toestel werkt op het volume dat u wilt drogen.",
      },
      {
        q: "Mijn woning staat tussen twee andere. Duurt het drogen dan langer?",
        a: "Meestal wel iets. Een tussenwoning heeft weinig buitenmuur, dus er is minder oppervlak waarlangs vocht op eigen kracht weg kan, en het koertje achteraan geeft weinig doorstroming. Daar staat tegenover dat het volume kleiner is. Wat telt is de meting: wij meten bij de start en bij de oplevering, en de huurtermijn volgt daaruit.",
      },
      {
        q: "Hoeveel stroom verbruikt zo'n toestel?",
        a: "Een Small bouwdroger trekt 0,75 kW, een Medium ongeveer 1,1 kW. Draait die dag en nacht door, dan komt u op grofweg 18 tot 26 kWh per etmaal, aan een gangbaar tarief enkele euro's per dag. Dat betaalt u aan uw netbeheerder, niet aan ons, en het is minder dan wat één extra huurdag kost.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "deurne",
    title: "Bouwdroger huren in Deurne - op 20 minuten | Vernast",
    description:
      "Bouwdroger huren in Deurne: tuinwijken en woningen uit de jaren dertig tot zestig, met kelder en aanbouw. Binnen 24 uur geleverd, geplaatst en ingesteld.",
    h1: "Bouwdroger huren in Deurne",
    kicker: "District van Antwerpen · Deurne-Noord en -Zuid",
    rit: { afstand: "circa 13 km", tijd: "ongeveer twintig minuten" },
    intro: [
      "Deurne bouwt ruimer dan de districten binnen de Singel. Tussen het Rivierenhof en de Ring liggen tuinwijken en rijen woningen uit de jaren dertig tot zestig, meestal met een voortuin, een kelder onder de voorkamer en een aanbouw achteraan. Dat zijn grotere volumes om droog te krijgen dan een rijhuis in de gordel, en er is doorgaans plaats om een toestel per ruimte te zetten.",
      "Ons magazijn in Aartselaar ligt op een twintigtal minuten via de Ring. Voor een gewone droging is de volgende werkdag de regel; bij waterschade bellen we meteen terug om te kijken wat dezelfde dag nog kan.",
    ],
    bouw: {
      kop: "Tuinwijken, kelders en aanbouwen uit de jaren dertig tot zestig",
      alineas: [
        "Een woning uit die periode heeft bijna altijd een kelder onder de voorkamer: baksteen tegen de grond, zonder waterkering en zonder verluchting. Zolang er niets gebeurt valt dat niet op, maar zodra er beneden geïsoleerd of gepleisterd wordt, komt het vocht dat er altijd al zat naar de oppervlakte. Drogen werkt daar, op voorwaarde dat de bron is aangepakt; anders komt het bij.",
        "Boven de kelder gaat het meestal om bouwvocht, en dat verdwijnt wél definitief: een nieuwe chape in de aanbouw, vers pleisterwerk na het uitbreken van een muur. Een chape van zes centimeter zet per vierkante meter tientallen liters water in de constructie, en die moeten er langs boven uit. Met een opstelling per bouwlaag en een ventilator die de lucht laat rondgaan is dat weken in plaats van maanden.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De standaard voor een Deurnse woning: 70 liter per dag en bereik tot ongeveer 400 m³, genoeg voor een gelijkvloers met aanbouw." },
      { key: "ttv4500", waarom: "Bij een nieuwe chape verdubbelt luchtbeweging vaak de snelheid: hij blaast de verzadigde laag vlak boven de vloer weg." },
      { key: "teddh30", waarom: "Voor de kelder onder de voorkamer, die in de winter zelden boven tien graden komt. Vraagt 400 V krachtstroom." },
      { key: "ttk170", waarom: "Voor één kamer, een badkamer of de verdieping. Compact genoeg voor een smalle trap en zuinig op een gewoon stopcontact." },
    ],
    levering: {
      kop: "Leveren in Deurne: binnen 24 uur, geplaatst en ingesteld",
      alinea:
        "Een twintigtal minuten rijden via de Ring. De technieker verdeelt de toestellen over de ruimtes, sluit de condensafvoer aan op een vloerput of een lavabo en stelt de streefvochtigheid in. U hoeft niets te tillen en niets in te stellen; bij een vaste trap draagt hij alles naar boven zonder meerkost.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar, langs de A12",
      alinea:
        "Een rit van een twintigtal minuten. Voor één los toestel dat u langer houdt loont dat; voor een volledig pakket zit de rit al in de prijs. Vervoer een droger rechtop, en heeft hij toch plat gelegen, laat hem dan 24 uur staan voor u hem inschakelt.",
    },
    buren: ["antwerpen-stad", "borgerhout", "berchem", "merksem"],
    faq: [
      {
        q: "Hoe lang moet een chape in een aanbouw drogen?",
        a: "Dat beslist de meting, niet de kalender. Met een droogpakket rekent u voor een chape van zes centimeter doorgaans op een week of drie; zonder droger loopt dat in een gesloten, onverwarmde ruimte op tot maanden. Wij meten bij de start en bij de oplevering en geven die waarde door aan uw vloerder.",
      },
      {
        q: "Mijn kelder is vochtig. Volstaat een bouwdroger?",
        a: "Voor het vocht dat er nú in zit wel. Maar een kelder zonder waterkering neemt vocht op uit de grond, en dat blijft bijkomen zolang de bron er is. Onze technieker meet bij de levering en zegt u eerlijk of u met bouwvocht zit, dat definitief weggaat, of met opstijgend vocht, waar eerst iets anders moet gebeuren.",
      },
      {
        q: "Hoe snel kunnen jullie in Deurne leveren?",
        a: "Binnen 24 uur, meestal de volgende werkdag. Het magazijn ligt op een twintigtal minuten via de Ring. Bij waterschade krijgt uw dossier voorrang in de planning; bel in dat geval liever dan online te boeken, op 03 689 90 65.",
      },
      {
        q: "Kan ik tijdens de droging in huis blijven wonen?",
        a: "Dat kan, en het gebeurt hier vaak. Een condensdroger blaast geen stof rond en geeft alleen warme, droge lucht af. Houd de ramen en deuren van de droogzone dicht en verplaats de toestellen niet. Het geluid is vergelijkbaar met een koelkast in dezelfde kamer.",
      },
      {
        q: "Wat als ik langer nodig heb dan de gekozen periode?",
        a: "Dan verlengt u online met één klik en betaalt u alleen de extra dagen. Bent u vroeger klaar, laat het weten, dan halen we op. Is het materiaal ondanks correcte droogomstandigheden niet droog binnen de berekende periode, dan loopt de huur volgens de Drooggarantie kosteloos verder.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "merksem",
    title: "Bouwdroger huren in Merksem | Vernast",
    description:
      "Bouwdroger huren in Merksem: rijwoningen tussen het Albertkanaal en de Ring, kelders met een hoge grondwaterstand. Binnen 24 uur geleverd en geplaatst.",
    h1: "Bouwdroger huren in Merksem",
    kicker: "District van Antwerpen · tussen kanaal en Ring",
    rit: { afstand: "circa 16 km", tijd: "ongeveer vijfentwintig minuten" },
    intro: [
      "Merksem ligt ingeklemd tussen het Albertkanaal en de Ring, en dat is op de werf te merken. Het grondwater staat er hoog, kelders zijn er zelden helemaal droog en na een natte periode komt dat terug als vochtplekken onderaan de muur. Daarboven staan vooral rijwoningen en naoorlogse woningen met een gewone, gesloten plattegrond.",
      "Wij leveren er binnen 24 uur vanuit Aartselaar, een rit van een vijfentwintigtal minuten. Levering, plaatsing, de vochtmeting bij de start en bij de oplevering en de ophaling zitten in de prijs van het droogpakket.",
    ],
    bouw: {
      kop: "Kelders bij het kanaal en naoorlogse rijwoningen",
      alineas: [
        "Een kelder dicht bij het Albertkanaal staat in grond die zelden lang droog blijft. Loopt hij onder, dan is leegpompen pas de eerste stap: het water dat in de muren en de vloerplaat is getrokken zit er weken later nog in, en zonder droging komt het terug als vochtplekken en schimmel. Op vochtig materiaal begint schimmel al na 24 tot 48 uur, dus hoe sneller de toestellen draaien, hoe minder er weg moet.",
        "In de woningen erboven gaat het meestal om bouwvocht: een nieuwe chape, vers pleisterwerk na een verbouwing. Dat droogt wél definitief weg. De plattegrond is hier gesloten, met kamers achter elkaar, en dan telt luchtbeweging bijna evenveel als capaciteit: een ventilator die de droge lucht rondstuurt is vaak effectiever dan een tweede droger, en goedkoper.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "Het werkpaard bij een ondergelopen kelder of gelijkvloers: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "Water kruipt onder vloeren en achter plinten. Zonder luchtbeweging droogt dat niet; met deze ventilator wel." },
      { key: "revolution", waarom: "Voor een kelder die niet te verwarmen is: de adsorptiedroger werkt met een droogmiddel en blijft ook bij lage temperaturen vocht opnemen." },
      { key: "ttk170", waarom: "Voor één kamer of een badkamerrenovatie. Compact, zuinig en stil genoeg voor een huis waar gewoond wordt." },
    ],
    levering: {
      kop: "Leveren in Merksem: binnen 24 uur, bij waterschade met voorrang",
      alinea:
        "Een vijfentwintigtal minuten rijden. Bij water in een kelder krijgt uw dossier voorrang in de planning: bel ons zodra het staande water weg is, dan kijken we of het dezelfde dag nog lukt. De technieker meet eerst waar het vocht zit, want wat onder een dekvloer of achter een plint is gekropen, droogt niet mee met de ruimte.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een halfuur rijden over de Ring en de A12. Voor één los toestel kan dat lonen. Bij waterschade is laten leveren vrijwel altijd de betere keuze: dan staat alles dezelfde dag geplaatst en ingesteld, met een meting erbij.",
    },
    buren: ["antwerpen-stad", "deurne", "borgerhout", "ekeren"],
    faq: [
      {
        q: "Mijn kelder is ondergelopen. Wat doe ik eerst?",
        a: "Eerst het staande water weg, met een pomp of een trekker, en nat materiaal eruit: tapijt, isolatie, kartonnen dozen. Pas daarna heeft drogen zin, want een bouwdroger haalt vocht uit de lucht en uit materialen, hij pompt geen water weg. Bel ons zodra de kelder leeg is, want op vochtig materiaal begint schimmel na 24 tot 48 uur.",
      },
      {
        q: "Komt het vocht terug na de droging?",
        a: "Bouwvocht niet, dat verdwijnt definitief. Komt het water via de kelderwand of de vloerplaat binnen, dan is drogen het tweede deel van de oplossing en niet het eerste: zolang de bron er is, blijft het bijkomen. Onze technieker meet bij de levering en zegt u in welk geval u zit.",
      },
      {
        q: "Hoe snel staan jullie in Merksem?",
        a: "Binnen 24 uur na uw boeking; het magazijn ligt op een vijfentwintigtal minuten. Bij waterschade bellen we meteen terug om te kijken of het dezelfde dag nog lukt. Bel in dat geval liever dan online te boeken, op 03 689 90 65.",
      },
      {
        q: "Werkt een bouwdroger in een koude kelder?",
        a: "Een condensdroger verliest onder 15 °C het grootste deel van zijn rendement, en een kelder haalt die temperatuur in de winter zelden. We combineren hem dan met een elektrische kachel die de ruimte eerst op temperatuur brengt, of we zetten meteen een adsorptiedroger in: die werkt met een droogmiddel en blijft ook in de koude vocht opnemen.",
      },
      {
        q: "Wat kost de levering in Merksem?",
        a: "Niets extra. Levering, plaatsing en ophaling zitten in de prijs van elk droogpakket, en de afstand vanuit Aartselaar verrekenen we niet. De enige mogelijke toeslag is die voor een verdieping waar toestellen via een ladder naar boven moeten.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "hoboken",
    title: "Bouwdroger huren in Hoboken - op 10 minuten | Vernast",
    description:
      "Bouwdroger huren in Hoboken: werkmanswoningen aan de Schelde en kelders in de polder. Op tien minuten van ons magazijn, vaak dezelfde dag geleverd.",
    h1: "Bouwdroger huren in Hoboken",
    kicker: "District van Antwerpen · op tien minuten",
    rit: { afstand: "circa 6 km", tijd: "ongeveer tien minuten" },
    intro: [
      "Hoboken ligt tegen de Schelde, en dat is de gemeente op deze pagina die het dichtst bij ons magazijn ligt: tien minuten rijden. Bij een waterschadedossier betekent dat vaak dezelfde dag, en voor een gewone droging de volgende ochtend.",
      "De bebouwing is gemengd: rijen werkmanswoningen uit de tijd van de scheepswerven, naoorlogse sociale woningbouw en, richting de Hobokense Polder, lager gelegen percelen waar het grondwater hoog staat. Die laatste groep levert de kelders op waar we hier het vaakst voor komen.",
    ],
    bouw: {
      kop: "Werkmanswoningen aan de Schelde en kelders in de polder",
      alineas: [
        "Een werkmanswoning uit het begin van de vorige eeuw heeft massieve muren zonder spouw en geen waterkering in de muurvoet. Het vocht uit de grond trekt dan via de baksteen omhoog en tekent zich binnen af als een band tot ongeveer een halve meter boven de vloer, met afbladderende verf en soms een witte zoutrand. Dat is opstijgend vocht, geen bouwvocht: drogen haalt het uit de ruimte, maar stopt de bron niet.",
        "Lager in de richting van de polder staat het grondwater hoog en komen kelders en bergingen terug bij elke natte periode. Daar is de volgorde wat telt: eerst het staande water en het natte materiaal weg, dan pas drogen. Wat in de muren en de vloerplaat is getrokken blijft er weken in zitten, en dat is precies het deel dat terugkomt als u het laat.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "Het werkpaard bij een natte kelder of een gelijkvloers: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "revolution", waarom: "Voor een kelder of kruipruimte in de polder die niet te verwarmen is: droge lucht via slangen, ook bij lage temperaturen." },
      { key: "ttv4500", waarom: "Vlak boven een natte vloer blijft een laag verzadigde lucht hangen. Deze ventilator blaast ze weg; bij vloeren verdubbelt dat vaak de snelheid." },
      { key: "ttk170", waarom: "Voor één kamer of een badkamer in een werkmanswoning: compact, zuinig en stil genoeg voor een bewoond huis." },
    ],
    levering: {
      kop: "Leveren in Hoboken: tien minuten, vaak dezelfde dag",
      alinea:
        "Tien minuten rijden. Belt u voor de middag, dan is een levering in de namiddag doorgaans haalbaar zolang het toestel op voorraad staat. Bij waterschade krijgt uw dossier voorrang; de technieker meet bij aankomst waar het vocht zit en verdeelt de toestellen daarop.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Tien minuten rijden over de A12. Van alle gemeenten op deze site is Hoboken de plek waar afhalen het makkelijkst is: u bent heen en terug in een halfuur. Vervoer de droger rechtop, en heeft hij toch plat gelegen, laat hem dan 24 uur staan voor u hem inschakelt.",
    },
    buren: ["antwerpen-stad", "wilrijk", "aartselaar", "berchem"],
    faq: [
      {
        q: "Hoe herken ik opstijgend vocht van bouwvocht?",
        a: "Aan de vorm en de hoogte. Opstijgend vocht tekent zich af als een band onderaan de muur, meestal tot dertig à zestig centimeter hoog, vaak met een witte zoutrand bovenaan en afbladderende verf. Bouwvocht zit gelijkmatig in de hele ruimte en verdwijnt vanzelf naarmate het droogt. Twijfelt u, dan meet onze technieker het bij de levering; dat kost u niets extra.",
      },
      {
        q: "Kunnen jullie dezelfde dag leveren in Hoboken?",
        a: "Vaak wel. Het magazijn ligt op tien minuten, dus zolang het toestel dat u nodig heeft op voorraad staat, is een levering in de namiddag haalbaar wanneer u voor de middag belt. Zekerheid krijgt u aan de telefoon op 03 689 90 65: daar staat de beschikbaarheid live op het scherm.",
      },
      {
        q: "Is afhalen hier goedkoper dan laten leveren?",
        a: "Voor één los toestel wel: u betaalt geen transport en u krijgt korting op de huurprijs. Daar staat tegenover dat u zelf tilt, zelf de opstelling bepaalt en zelf het reservoir leegt, en dat er geen vochtmeting en dus geen Drooggarantie bij zit. Voor een volledig droogpakket is leveren bijna altijd de betere rekensom.",
      },
      {
        q: "Mijn berging in de polder loopt elk jaar onder. Helpt drogen?",
        a: "Het haalt het vocht eruit dat er nu in zit, en dat voorkomt schimmel en een muffe geur. Maar zolang het water via de vloer of de wand binnenkomt, komt het bij een volgende natte periode terug. Drogen is dan het tweede deel van de oplossing; het eerste is de bron, en daar kijkt onze zusterfirma Vernast Vochtbestrijding naar.",
      },
      {
        q: "Hoeveel toestellen heb ik nodig voor een kelder van 40 m²?",
        a: "Voor een kelder van die grootte volstaat doorgaans één bouwdroger met een ventilator erbij, zolang de ruimte boven 15 °C te krijgen is. Lukt dat niet, dan zetten we een kachel bij of kiezen we meteen voor een adsorptiedroger. De Calculator rekent het aantal uit op basis van uw volume in kubieke meter, niet op oppervlakte.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "ekeren",
    title: "Bouwdroger huren in Ekeren | Vernast",
    description:
      "Bouwdroger huren in Ekeren: open en halfopen bebouwing op zandgrond, ruime volumes. Binnen 24 uur geleverd, geplaatst en ingesteld. Geen waarborg.",
    h1: "Bouwdroger huren in Ekeren",
    kicker: "District van Antwerpen · Mariaburg en Donk",
    rit: { afstand: "circa 19 km", tijd: "ongeveer vijfentwintig minuten" },
    intro: [
      "Ekeren is het groenste district van de stad en bouwt ernaar: open en halfopen woningen op een eigen perceel, villa's rond Mariaburg en de Donk, en nieuwbouw op de resterende kavels. De volumes zijn hier groter dan in de gordel, en dat is precies wat de capaciteit bepaalt.",
      "Ons magazijn in Aartselaar ligt op een vijfentwintigtal minuten via de Ring. Elk droogpakket komt geleverd, geplaatst en ingesteld, met de ophaling erbij in de prijs.",
    ],
    bouw: {
      kop: "Open bebouwing op zandgrond, met ruime volumes",
      alineas: [
        "Een vrijstaande woning droogt niet sneller omdat hij groter is. Hij heeft gewoon meer capaciteit nodig: wij rekenen op volume in kubieke meter en niet op oppervlakte, en een open leefruimte met een hoog plafond bevat veel meer lucht dan dezelfde vierkante meters onder een normaal plafond. Die lucht moet allemaal door het toestel, dus staat er in een Ekers pakket zelden één droger.",
        "De zandgrond hier draineert goed, waardoor kelders minder vaak het probleem zijn dan in Merksem of Hoboken. Wat we wél tegenkomen is bouwvocht in nieuwbouw en verbouwing: een gelijkvloerse chape die in één keer gelegd wordt, pleisterwerk over twee bouwlagen, een bijgebouw dat mee wordt afgewerkt. En die bijgebouwen zijn tijdens de werken zelden verwarmd, wat in de winter om een kachel erbij vraagt.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "Voor de grote volumes hier: 110 liter per dag en bereik tot ongeveer 600 m³, genoeg voor een volledig gelijkvloers met open leefruimte." },
      { key: "ttk350", waarom: "De aanvulling voor de verdieping, de garage of het bijgebouw: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "In een open leefruimte staat de droger zelden in de hoek die het natst is. Deze ventilator verdeelt de droge lucht over de hele bouwlaag." },
      { key: "teddh30", waarom: "Voor een onverwarmd bijgebouw of een winterwerf: de kachel brengt de ruimte op werkingstemperatuur zodat de drogers rendement halen. Vraagt 400 V." },
    ],
    levering: {
      kop: "Leveren in Ekeren: binnen 24 uur, over de Ring",
      alinea:
        "Een vijfentwintigtal minuten rijden. De technieker verdeelt de toestellen over droogzones, sluit de condensafvoer aan op een vloerput of de aansluiting van de toekomstige wasmachine en stelt de streefvochtigheid in. Bij een vrijstaande woning komt hij meestal met een groter pakket dan de Calculator voor één bouwlaag berekent, en dat overlegt hij vooraf.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een halfuur rijden. Voor één los toestel kan dat lonen, maar voor de volumes die hier gangbaar zijn is leveren doorgaans de betere keuze: de rit zit al in de pakketprijs en de technieker plaatst meteen alles.",
    },
    buren: ["antwerpen-stad", "merksem", "brasschaat", "schoten"],
    faq: [
      {
        q: "Hoeveel bouwdrogers heb ik nodig voor een vrijstaande woning?",
        a: "Voor een gelijkvloers van 120 tot 150 m² met een open leefruimte rekenen we doorgaans op twee drogers met een ventilator per droogzone, en vaak een derde toestel voor de verdieping of het bijgebouw. Het precieze aantal hangt af van de plafondhoogte en van wat er moet drogen: een chape zet meer water in de constructie dan vers pleisterwerk.",
      },
      {
        q: "Wat als het vriest tijdens de droging?",
        a: "Dan verwarmen we mee. Een condensdroger verliest onder 15 °C het grootste deel van zijn rendement, dus in een onverwarmde nieuwbouw of een bijgebouw in de winter zetten we er een elektrische kachel bij die de ruimte op werkingstemperatuur houdt. Die kachel draait op 400 V krachtstroom; de technieker controleert bij de levering of de werfkast die levert.",
      },
      {
        q: "Rekenen jullie een kilometerkost voor Ekeren?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket, ongeacht of de werf in Hoboken of in Ekeren ligt. De rit telt mee in onze planning, niet in uw factuur.",
      },
      {
        q: "Kan de vloerder starten zodra de huurtermijn om is?",
        a: "Dat beslist de eindmeting, niet de kalender. Wij meten bij de ophaling het restvocht en geven u die waarde door, zodat uw vloerder weet waar hij aan toe is. Welke grens hij wil zien hangt af van het type chape, de vloerverwarming en de afwerking; vraag hem dat vooraf. Zit de waarde er nog boven, dan loopt de huur volgens de Drooggarantie kosteloos verder.",
      },
      {
        q: "Hoe droog ik een bijgebouw dat niet verwarmd is?",
        a: "Met een adsorptiedroger, of met een condensdroger plus een kachel. Een adsorptiedroger werkt met een droogmiddel in plaats van met condensatie en blijft ook bij lage temperaturen vocht opnemen; hij blaast de droge lucht via slangen tot in een ruimte waar u zelf niet hoeft te staan. Welke van de twee hier past, bekijkt de technieker ter plaatse.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "berendrecht-zandvliet",
    title: "Bouwdroger huren in Berendrecht en Zandvliet | Vernast",
    description:
      "Bouwdroger huren in Berendrecht en Zandvliet: polderklei, hoog grondwater en oude hoeves. Binnen 24 uur geleverd en geplaatst, zonder kilometerkost.",
    h1: "Bouwdroger huren in Berendrecht en Zandvliet",
    kicker: "Polderdorpen achter de haven · één pagina voor beide",
    rit: { afstand: "circa 35 km", tijd: "ongeveer veertig minuten" },
    intro: [
      "Berendrecht en Zandvliet liggen achter de haven, in de polder tegen de Nederlandse grens. Het zijn de verste punten van het Antwerpse district en tegelijk de natste: kleigrond die water vasthoudt waar zand het doorlaat, en een grondwaterstand die het hele jaar hoog blijft.",
      "Ze staan samen op deze pagina omdat ze hetzelfde probleem hebben en dezelfde rit delen: veertig minuten vanuit ons magazijn in Aartselaar. Die rit telt mee in onze planning, niet in uw factuur.",
    ],
    bouw: {
      kop: "Polderklei, hoog grondwater en oude hoeves",
      alineas: [
        "Klei houdt water vast. Een polderwoning of een hoeve zonder waterkering in de muurvoet zuigt dat vocht op via de baksteen, en binnen tekent het zich af als een band tot een halve meter boven de vloer, met afbladderende verf en soms een witte zoutrand. Dat is opstijgend vocht en geen bouwvocht: een bouwdroger haalt het uit de ruimte, maar zolang er geen waterkering ligt, blijft het bijkomen.",
        "Bij een renovatie komt daar bouwvocht bovenop, en dát verdwijnt wél definitief. Dikke, massieve muren geven hun vocht traag af, dus telt luchtbeweging langs het muuroppervlak hier meer dan extra capaciteit. Kruipruimtes zijn in de polder bovendien zelden droog: geen doorstroming, een bodem die vocht afgeeft, en dat trekt via de vloer naar boven als een muffe geur in de woonkamer.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De standaard voor een polderwoning in renovatie: 70 liter per dag en bereik tot ongeveer 400 m³, pompklaar voor continue afvoer." },
      { key: "revolution", waarom: "Voor de kruipruimte of een kelder die niet te verwarmen is: droge lucht via slangen door een bestaand luik, ook bij lage temperaturen." },
      { key: "ttv4500", waarom: "Massieve muren geven hun vocht traag af. Luchtbeweging langs het oppervlak versnelt dat merkbaar." },
      { key: "teddh30", waarom: "Voor een onverwarmde hoeve of schuur in de winter: de kachel brengt de ruimte op werkingstemperatuur zodat de droger weer rendeert. Vraagt 400 V." },
    ],
    levering: {
      kop: "Leveren in de polder: veertig minuten, zonder kilometerkost",
      alinea:
        "De rit achter de haven langs is de langste van het district, dus plannen we hem als onderdeel van een ronde. U krijgt een tijdslot en een sms een halfuur vooraf. Voor de verste adressen vragen we liefst een dag speling in de planning; de afstand verrekenen we niet in de prijs.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Veertig minuten heen en evenveel terug. Voor een volledig droogpakket is dat zelden de betere keuze: de levering zit al in de prijs en de technieker plaatst meteen alles. Voor één los toestel dat u langere tijd houdt, kan het wel.",
    },
    buren: ["ekeren", "merksem", "antwerpen-stad", "brasschaat"],
    faq: [
      {
        q: "Betaal ik een kilometerkost voor een levering in de polder?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket, ook voor de verste adressen achter de haven. De rit telt mee in onze planning, niet in uw factuur; daarom vragen we hier liefst een dag speling.",
      },
      {
        q: "Mijn muren blijven vochtig onderaan. Helpt een bouwdroger?",
        a: "Hij haalt het vocht uit de ruimte zolang hij draait, maar op kleigrond zonder waterkering komt het via de muurvoet gewoon bij. Dat is opstijgend vocht en geen bouwvocht. Onze technieker meet bij de levering en zegt u eerlijk in welk geval u zit; is het de bron, dan kijkt onze zusterfirma Vernast Vochtbestrijding daar eerst naar.",
      },
      {
        q: "Hoe droog ik een kruipruimte onder een polderwoning?",
        a: "Met een adsorptiedroger die buiten staat en droge lucht naar binnen blaast via een slang door een bestaand luik. U hoeft er zelf niet in. Een condensdroger haalt daar weinig uit, want een kruipruimte komt zelden boven 15 °C.",
      },
      {
        q: "Hoe snel staan jullie in Berendrecht of Zandvliet?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer veertig minuten, dus plannen we hem in een ronde; boekt u voor de middag, dan staat het doorgaans de volgende werkdag. Bij waterschade bellen we meteen terug om te kijken wat dezelfde dag nog kan.",
      },
      {
        q: "Werkt een bouwdroger in een onverwarmde hoeve of schuur?",
        a: "Een condensdroger verliest onder 15 °C het grootste deel van zijn rendement, en dat is in de winter precies de temperatuur van zo'n ruimte. We zetten er dan een elektrische kachel bij die de ruimte eerst op temperatuur brengt, of we kiezen meteen voor een adsorptiedroger die ook in de koude blijft werken. De kachel vraagt 400 V krachtstroom.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "borsbeek",
    title: "Bouwdroger huren in Borsbeek - op 20 minuten | Vernast",
    description:
      "Bouwdroger huren in Borsbeek: interbellumwoningen en naoorlogse rijhuizen bij de luchthaven. Binnen 24 uur geleverd, geplaatst en ingesteld. Geen waarborg.",
    h1: "Bouwdroger huren in Borsbeek",
    kicker: "Tiende district van Antwerpen · op twintig minuten",
    rit: { afstand: "circa 14 km", tijd: "ongeveer twintig minuten" },
    intro: [
      "Borsbeek is sinds 1 januari 2025 het tiende district van Antwerpen, maar het bouwt nog als de randgemeente die het was: woningen uit het interbellum en naoorlogse rijhuizen op een eigen perceel, met een voortuin en een kelder onder de voorkamer. Precies de generatie die nu grondig wordt aangepakt.",
      "Ons magazijn in Aartselaar ligt op een twintigtal minuten via de Ring. Voor een gewone droging is de volgende werkdag de regel; bij waterschade bellen we meteen terug om te kijken wat dezelfde dag nog kan.",
    ],
    bouw: {
      kop: "Interbellumwoningen en naoorlogse rijhuizen bij de luchthaven",
      alineas: [
        "Een woning uit de jaren dertig heeft massieve muren zonder spouw en een kelder in baksteen zonder waterkering. Zolang er niets gebeurt valt dat niet op; zodra er geïsoleerd of gepleisterd wordt, komt het vocht dat er altijd al zat naar de oppervlakte. Drogen werkt daar, op voorwaarde dat de bron is aangepakt, en onze technieker meet bij de levering of dat nodig is.",
        "In de naoorlogse rijhuizen gaat het vaker om gewoon bouwvocht: een nieuwe chape over het gelijkvloers, vers pleisterwerk na het uitbreken van een muur, een aanbouw achteraan. Dat droogt wél definitief weg. De plattegrond is hier gesloten, met kamers achter elkaar, dus telt luchtbeweging bijna evenveel als capaciteit: een ventilator die de droge lucht rondstuurt is vaak effectiever dan een tweede droger.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De standaard voor een gelijkvloers met nieuwe chape: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "In een gesloten plattegrond met kamers achter elkaar brengt deze ventilator de droge lucht tot achteraan, waar de droger zelf niet komt." },
      { key: "ttk170", waarom: "Voor één kamer, een badkamer of de verdieping: compact genoeg voor een smalle trap en zuinig op een gewoon stopcontact." },
      { key: "teddh30", waarom: "Voor de kelder onder de voorkamer, die in de winter zelden boven tien graden komt. Vraagt 400 V krachtstroom." },
    ],
    levering: {
      kop: "Leveren in Borsbeek: binnen 24 uur, geplaatst en ingesteld",
      alinea:
        "Een twintigtal minuten rijden via de Ring. De technieker verdeelt de toestellen over de ruimtes, sluit de condensafvoer aan op een vloerput of een lavabo en stelt de streefvochtigheid in. Is er een vaste trap, dan draagt hij alles naar boven zonder meerkost.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een twintigtal minuten over de Ring en de A12. Voor één los toestel loont dat; voor een volledig pakket zit de rit al in de prijs. Vervoer de droger rechtop, en heeft hij toch plat gelegen, laat hem dan 24 uur staan voor u hem inschakelt.",
    },
    buren: ["antwerpen-stad", "deurne", "mortsel", "berchem"],
    faq: [
      {
        q: "Hoe snel kunnen jullie in Borsbeek leveren?",
        a: "Binnen 24 uur, meestal de volgende werkdag: het magazijn ligt op een twintigtal minuten via de Ring. Bij waterschade krijgt uw dossier voorrang in de planning; bel in dat geval liever dan online te boeken, op 03 689 90 65.",
      },
      {
        q: "Mijn kelder blijft vochtig, ook zonder werken. Wat nu?",
        a: "Dan gaat het waarschijnlijk niet om bouwvocht maar om een permanente bron: opstijgend vocht via de muurvoet, of vocht dat door de keldermuur komt. Een bouwdroger haalt het vocht uit de lucht zolang hij draait, maar zet u hem uit, dan komt het terug. Eerst de bron, dan drogen.",
      },
      {
        q: "Hoeveel toestellen heb ik nodig voor een gelijkvloers van 90 m²?",
        a: "Voor een gelijkvloers van die grootte volstaat doorgaans één bouwdroger met een ventilator per droogzone. Het precieze aantal hangt af van de plafondhoogte en van wat er moet drogen: een chape zet meer water in de constructie dan vers pleisterwerk. De Calculator rekent het uit op basis van uw volume in kubieke meter.",
      },
      {
        q: "Kan ik tijdens de droging in huis blijven wonen?",
        a: "Dat kan. Een condensdroger blaast geen stof rond en geeft alleen warme, droge lucht af. Houd de ramen en deuren van de droogzone dicht, want anders droogt u de straat mee. Het geluid is vergelijkbaar met een koelkast in dezelfde kamer.",
      },
      {
        q: "Wat als het langer duurt dan de gekozen periode?",
        a: "Dan verlengt u online met één klik en betaalt u alleen de extra dagen. Is het materiaal ondanks correcte droogomstandigheden niet droog binnen de berekende periode, dan loopt de huur volgens de Drooggarantie kosteloos verder. Bent u vroeger klaar, laat het weten, dan halen we op.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "boechout",
    title: "Bouwdroger huren in Boechout - op 15 minuten | Vernast",
    description:
      "Bouwdroger huren in Boechout: dorpskern met oude woningen en verkavelingen errond. Op een kwartier van ons magazijn, binnen 24 uur geleverd en geplaatst.",
    h1: "Bouwdroger huren in Boechout",
    kicker: "Zuidrand · op een kwartier van het magazijn",
    rit: { afstand: "circa 11 km", tijd: "ongeveer een kwartier" },
    intro: [
      "Boechout ligt op een kwartier van ons magazijn in Aartselaar, en dat is te merken aan de planning: voor een gewone droging is de volgende werkdag hier de regel, bij waterschade is dezelfde dag vaak haalbaar.",
      "De gemeente bestaat uit twee soorten werven. Rond de dorpskern en in Vremde staan oudere woningen met massieve muren en een kelder zonder waterkering; daarbuiten liggen de verkavelingen van de jaren zestig en zeventig, nu een voor een in renovatie.",
    ],
    bouw: {
      kop: "Een oude dorpskern en verkavelingen in renovatie",
      alineas: [
        "In de kern gaat het vaak om een woning die ouder is dan de gewapende vloerplaat: baksteen op kalkmortel, rechtstreeks tegen de grond. Die muren nemen vocht op uit de bodem en geven het binnen weer af. Zodra er geïsoleerd of gepleisterd wordt, komt dat naar de oppervlakte, en dan is drogen het tweede deel van de oplossing: eerst de bron, dan het vocht dat erin zit.",
        "In de verkavelingen is het bijna altijd gewoon bouwvocht, en dat verdwijnt wél definitief. Een nieuwe chape over het gelijkvloers, vers pleisterwerk na het weghalen van een muur, een aanbouw achteraan. Met één droger per bouwlaag en een ventilator die de lucht laat rondgaan is dat een kwestie van weken in plaats van maanden.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De standaard voor een gelijkvloers met nieuwe chape: 70 liter per dag en bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "Bij een chape verdubbelt luchtbeweging vaak de snelheid: hij blaast de verzadigde laag vlak boven de vloer weg." },
      { key: "ttk170", waarom: "Voor één kamer, een badkamer of de verdieping. Compact genoeg voor een smalle trap in een oudere dorpswoning." },
      { key: "teddh30", waarom: "Voor een kelder of een onverwarmde ruimte in de winter: de kachel brengt ze op werkingstemperatuur zodat de droger rendeert. Vraagt 400 V." },
    ],
    levering: {
      kop: "Leveren in Boechout: een kwartier, geplaatst en ingesteld",
      alinea:
        "Een kwartier rijden. De technieker meet bij aankomst het startvochtgehalte, verdeelt de toestellen over de ruimtes en sluit de condensafvoer aan. In een oudere woning is die meting nuttig: het verschil tussen bouwvocht en opstijgend vocht is met het oog niet te zien.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een kwartier rijden over de N10 en de A12. Voor één los toestel loont dat, zeker omdat de rit kort is en u geen transport betaalt.",
    },
    buren: ["kontich", "mortsel", "hove", "lint"],
    faq: [
      {
        q: "Hoe snel kunnen jullie in Boechout leveren?",
        a: "Binnen 24 uur, en meestal de volgende werkdag: het magazijn ligt op een kwartier. Bij waterschade is dezelfde dag vaak haalbaar wanneer u voor de middag belt. Levering, plaatsing en ophaling zitten in de prijs van het droogpakket.",
      },
      {
        q: "Mijn muren blijven onderaan vochtig na de renovatie. Wat is dat?",
        a: "Waarschijnlijk opstijgend vocht: een oudere woning zonder waterkering in de muurvoet zuigt vocht op uit de grond. Het tekent zich af als een band tot ongeveer een halve meter hoog, vaak met afbladderende verf. Een bouwdroger haalt het uit de ruimte, maar zolang de bron er is komt het bij. Onze technieker meet het bij de levering.",
      },
      {
        q: "Hoeveel toestellen heb ik nodig voor een gelijkvloers van 100 m²?",
        a: "Doorgaans één bouwdroger met een ventilator per droogzone. Het precieze aantal hangt af van de plafondhoogte en van wat er droogt: een chape zet meer water in de constructie dan vers pleisterwerk. De Calculator rekent het uit op basis van uw volume in kubieke meter.",
      },
      {
        q: "Kan ik tijdens de droging in huis blijven wonen?",
        a: "Dat kan. Een condensdroger blaast geen stof rond en geeft alleen warme, droge lucht af. Houd de ramen en deuren van de droogzone dicht, anders droogt u de straat mee. Het geluid is vergelijkbaar met een koelkast in dezelfde kamer.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "hove",
    title: "Bouwdroger huren in Hove - op 15 minuten | Vernast",
    description:
      "Bouwdroger huren in Hove: villa's en ruime woningen op grote percelen, vaak in renovatie. Binnen 24 uur geleverd, geplaatst en ingesteld. Geen waarborg.",
    h1: "Bouwdroger huren in Hove",
    kicker: "Zuidrand · villa's en ruime percelen",
    rit: { afstand: "circa 12 km", tijd: "ongeveer een kwartier" },
    intro: [
      "Hove is klein en residentieel: villa's en ruime woningen op grote percelen, veel groen, en een bouwvoorraad die vooral uit de jaren vijftig tot zeventig stamt. Die generatie wordt nu grondig aangepakt, en dat brengt water in huis dat eruit moet voor de afwerking begint.",
      "Ons magazijn ligt op een kwartier. Voor een gewone droging is de volgende werkdag de regel; bij waterschade bellen we meteen terug om te kijken wat dezelfde dag nog kan.",
    ],
    bouw: {
      kop: "Villa's op ruime percelen, met volume om droog te krijgen",
      alineas: [
        "Een vrijstaande woning droogt niet sneller omdat hij groter is. Hij heeft meer capaciteit nodig: wij rekenen op volume in kubieke meter en niet op oppervlakte, en een open leefruimte met een hoog plafond bevat veel meer lucht dan dezelfde vierkante meters onder een normaal plafond. In een Hoofs pakket staat zelden één toestel.",
        "Onder de woning ligt vaak een volledige kelderverdieping, en daar speelt temperatuur mee. Onder 15 °C haalt een condensdroger nog maar een fractie van zijn capaciteit, dus zetten we er in de winter een kachel naast of kiezen we meteen voor een adsorptiedroger die ook in de koude blijft werken.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "Voor de volumes van een villa: 110 liter per dag en bereik tot ongeveer 600 m³, genoeg voor een volledig gelijkvloers." },
      { key: "ttk350", waarom: "De aanvulling voor de verdieping of de kelder: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "In een woning met lange gangen blijft droge lucht hangen waar het toestel staat. Deze ventilator brengt ze tot in de verste kamer." },
      { key: "revolution", waarom: "Voor een kelderverdieping die in de winter niet op temperatuur komt, daar waar een condensdroger het laat afweten." },
    ],
    levering: {
      kop: "Leveren in Hove: een kwartier, met een pakket op maat",
      alinea:
        "Een kwartier rijden. Bij een vrijstaande woning met kelder komt de technieker meestal met een groter pakket dan de Calculator voor één bouwlaag berekent; dat overlegt hij vooraf. Hij verdeelt de toestellen over droogzones en sluit de condensafvoer aan op een vloerput of een lavabo.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een kwartier rijden. Voor één los toestel kan dat lonen; voor de volumes die hier gangbaar zijn is leveren doorgaans de betere rekensom, want dan zit de rit al in de pakketprijs.",
    },
    buren: ["kontich", "boechout", "lint", "edegem"],
    faq: [
      {
        q: "Hoeveel bouwdrogers heb ik nodig voor een villa?",
        a: "Voor een gelijkvloers van 120 tot 150 m² met een open leefruimte rekenen we doorgaans op twee drogers met een ventilator per droogzone, en vaak een derde toestel voor de kelder of de verdieping. Wij rekenen op volume in kubieke meter, niet op oppervlakte.",
      },
      {
        q: "Werkt een bouwdroger in een koude kelderverdieping?",
        a: "Een condensdroger verliest onder 15 °C het grootste deel van zijn rendement, en dat is in de winter precies de temperatuur van zo'n kelder. We combineren hem dan met een elektrische kachel, of we zetten een adsorptiedroger in die met een droogmiddel werkt en ook in de koude vocht opneemt.",
      },
      {
        q: "Hoe snel staan jullie in Hove?",
        a: "Binnen 24 uur, meestal de volgende werkdag: het magazijn ligt op een kwartier. Bij waterschade krijgt uw dossier voorrang in de planning; bel in dat geval liever dan online te boeken, op 03 689 90 65.",
      },
      {
        q: "Wat kost de levering in Hove?",
        a: "Niets extra. Levering, plaatsing, de vochtmeting bij de start en bij de oplevering en de ophaling zitten in de prijs van elk droogpakket. De enige mogelijke toeslag is die voor een verdieping waar toestellen via een ladder naar boven moeten.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "lint",
    title: "Bouwdroger huren in Lint - op 20 minuten | Vernast",
    description:
      "Bouwdroger huren in Lint: compacte dorpskern met rijwoningen en verkavelingen errond. Binnen 24 uur geleverd en geplaatst, ophaling inbegrepen.",
    h1: "Bouwdroger huren in Lint",
    kicker: "Zuidrand · compacte kern, verkavelingen errond",
    rit: { afstand: "circa 13 km", tijd: "ongeveer twintig minuten" },
    intro: [
      "Lint is een van de kleinste gemeenten van de provincie: een compacte kern met rijwoningen rond de kerk, en verkavelingen met halfopen bebouwing errond. De werven zijn er navenant: één woning tegelijk, zelden een volledig project.",
      "Ons magazijn in Aartselaar ligt op een twintigtal minuten. Levering, plaatsing en ophaling zitten in de prijs van het droogpakket, hoe klein de werf ook is.",
    ],
    bouw: {
      kop: "Rijwoningen in de kern, halfopen bebouwing errond",
      alineas: [
        "Een rijwoning in de kern heeft weinig buitenmuur waarlangs vocht op eigen kracht weg kan, en de kamers liggen achter elkaar. Daar telt luchtbeweging bijna evenveel als capaciteit: zonder ventilator droogt alleen de kamer waar het toestel staat en blijft de achterste muur nat.",
        "In de verkavelingen gaat het om grotere volumes en meestal om bouwvocht na een renovatie: een nieuwe chape, pleisterwerk over twee bouwlagen, een uitbouw. Dat droogt definitief weg, en de termijn volgt uit de meting en niet uit de kalender.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De middenmoot die hier op de meeste werven past: 70 liter per dag, voor een gelijkvloers of een ruime kelder." },
      { key: "ttv4500", waarom: "In een plattegrond met kamers achter elkaar is luchtbeweging vaak effectiever dan een tweede droger, en goedkoper." },
      { key: "ttk170", waarom: "Voor één kamer of een badkamerrenovatie: compact, zuinig en stil genoeg voor een huis waar gewoond wordt." },
      { key: "teddh30", waarom: "Voor een onverwarmde werf in de winter: onder 15 °C zakt het rendement van elke condensdroger. Vraagt 400 V krachtstroom." },
    ],
    levering: {
      kop: "Leveren in Lint: binnen 24 uur, ook voor één toestel",
      alinea:
        "Een twintigtal minuten rijden. Ook voor één toestel komt de technieker langs, plaatst hij het en meet hij het startvochtgehalte. U betaalt daar geen transport voor: de rit zit in de prijs van het pakket.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een twintigtal minuten over de N10 en de A12. Voor één los toestel dat u langer houdt loont dat. Vervoer de droger rechtop, en heeft hij toch plat gelegen, laat hem dan 24 uur staan voor u hem inschakelt.",
    },
    buren: ["kontich", "boechout", "hove", "duffel"],
    faq: [
      {
        q: "Komen jullie ook voor één enkel toestel?",
        a: "Ja. Ook voor één droger rijden we naar Lint, plaatsen we hem en meten we het startvochtgehalte. De rit zit in de prijs van het droogpakket; u betaalt geen transport.",
      },
      {
        q: "Waarom raden jullie bijna altijd een ventilator aan?",
        a: "Omdat vlak boven een natte vloer en tegen een natte muur een laag lucht blijft hangen die al verzadigd is met vocht. Zolang die laag niet weg is, droogt het materiaal eronder nauwelijks verder. Een ventilator blaast ze weg en voert droge lucht aan; bij vloeren verdubbelt dat vaak de snelheid.",
      },
      {
        q: "Hoe lang moet een nieuwe chape drogen?",
        a: "Met een droogpakket rekent u voor een chape van zes centimeter doorgaans op een week of drie; zonder droger loopt dat in een gesloten ruimte op tot maanden. Wat telt is de eindmeting: wij meten bij de start en bij de oplevering en geven die waarde door aan uw vloerder.",
      },
      {
        q: "Wat als ik langer nodig heb dan de gekozen periode?",
        a: "Dan verlengt u online met één klik en betaalt u alleen de extra dagen. Bent u vroeger klaar, laat het weten, dan halen we op. Is het materiaal niet droog binnen de berekende periode, dan loopt de huur volgens de Drooggarantie kosteloos verder.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "hemiksem",
    title: "Bouwdroger huren in Hemiksem - op 10 minuten | Vernast",
    description:
      "Bouwdroger huren in Hemiksem: Scheldedorp op kleigrond, arbeiderswoningen en vochtige kelders. Op tien minuten van ons magazijn, vaak dezelfde dag.",
    h1: "Bouwdroger huren in Hemiksem",
    kicker: "Rupelstreek · op tien minuten van het magazijn",
    rit: { afstand: "circa 5 km", tijd: "ongeveer tien minuten" },
    intro: [
      "Hemiksem ligt aan de Schelde, op tien minuten van ons magazijn. Dichterbij komen we zelden: bij waterschade is dezelfde dag hier bijna altijd haalbaar, en voor een gewone droging de volgende ochtend.",
      "Het dorp groeide rond de steenbakkerijen en de abdij, en dat is aan de woningen te zien: rijen arbeiderswoningen op kleigrond, met kelders die rechtstreeks tegen de grond staan.",
    ],
    bouw: {
      kop: "Arbeiderswoningen op kleigrond, met kelders tegen de grond",
      alineas: [
        "Klei houdt water vast waar zand het doorlaat. Een woning zonder waterkering in de muurvoet zuigt dat vocht op via de baksteen, en binnen komt het terug als een band tot een halve meter boven de vloer, afbladderende verf en soms een witte zoutrand. Dat is opstijgend vocht: een bouwdroger haalt het uit de ruimte, maar zolang er geen waterkering ligt, blijft het bijkomen.",
        "Daarnaast is er het gewone bouwvocht van een renovatie, en dat verdwijnt wél definitief. Massieve muren zonder spouw geven hun vocht traag af, dus telt luchtbeweging langs het muuroppervlak hier meer dan extra capaciteit.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "Voor een arbeiderswoning in renovatie: genoeg capaciteit voor een volledig gelijkvloers met dikke, massieve muren." },
      { key: "ttv4500", waarom: "Massieve muren geven hun vocht traag af. Luchtbeweging langs het oppervlak versnelt dat merkbaar." },
      { key: "revolution", waarom: "Voor een kelder die rechtstreeks in de kleigrond staat en in de winter niet boven tien graden komt." },
      { key: "ttk170", waarom: "Voor één kamer of een badkamer: het lichtste toestel uit het gamma, en op tien minuten het makkelijkst zelf af te halen." },
    ],
    levering: {
      kop: "Leveren in Hemiksem: tien minuten, vaak dezelfde dag",
      alinea:
        "Tien minuten rijden. Belt u voor de middag, dan is een levering in de namiddag doorgaans haalbaar zolang het toestel op voorraad staat. Bij water in een kelder krijgt uw dossier voorrang; de technieker meet bij aankomst waar het vocht zit.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Tien minuten rijden. Van alle gemeenten is dit een van de plekken waar afhalen het makkelijkst is: u bent heen en terug in een halfuur. Vervoer de droger rechtop.",
    },
    buren: ["schelle", "niel", "aartselaar", "hoboken"],
    faq: [
      {
        q: "Kunnen jullie dezelfde dag leveren in Hemiksem?",
        a: "Vaak wel. Het magazijn ligt op tien minuten, dus zolang het toestel dat u nodig heeft op voorraad staat, is een levering in de namiddag haalbaar wanneer u voor de middag belt. Zekerheid krijgt u aan de telefoon op 03 689 90 65.",
      },
      {
        q: "Mijn kelder blijft vochtig, ook zonder werken. Helpt drogen?",
        a: "Zolang het toestel draait wel, maar zet u het uit, dan komt het terug. Een kelder in kleigrond zonder waterkering neemt vocht op uit de bodem; dat is een permanente bron en geen bouwvocht. Eerst de bron aanpakken, dan drogen. Onze technieker meet bij de levering en zegt u in welk geval u zit.",
      },
      {
        q: "Duurt drogen langer op kleigrond?",
        a: "Het vocht dat al in de muren zit komt er trager uit, ja: massieve muren zonder spouw geven hun vocht langzaam af. Daarom zetten we hier bijna altijd een ventilator bij, die de verzadigde luchtlaag langs het muuroppervlak wegblaast. Wat telt is de meting, niet de kalender.",
      },
      {
        q: "Is afhalen hier goedkoper dan laten leveren?",
        a: "Voor één los toestel wel: u betaalt geen transport en u krijgt korting op de huurprijs. Daar staat tegenover dat u zelf tilt, zelf de opstelling bepaalt en zelf het reservoir leegt, en dat er geen vochtmeting en dus geen Drooggarantie bij zit.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "niel",
    title: "Bouwdroger huren in Niel - op 10 minuten | Vernast",
    description:
      "Bouwdroger huren in Niel: steenbakkersdorp op kleigrond, smalle arbeiderswoningen en vochtige kelders. Op tien minuten, binnen 24 uur geleverd.",
    h1: "Bouwdroger huren in Niel",
    kicker: "Rupelstreek · steenbakkersdorp op klei",
    rit: { afstand: "circa 7 km", tijd: "ongeveer tien minuten" },
    intro: [
      "Niel is gebouwd op en met zijn eigen klei. Rond Noeveren staan de oude ovens nog, en de arbeiderswoningen eromheen zijn uit dezelfde steen opgetrokken: smal, diep, massieve muren zonder spouw en een kelder die rechtstreeks tegen de grond staat.",
      "Ons magazijn ligt op tien minuten. Bij waterschade is dezelfde dag vaak haalbaar; voor een gewone droging is de volgende werkdag de regel.",
    ],
    bouw: {
      kop: "Smalle arbeiderswoningen uit de kleiputten",
      alineas: [
        "Een steenbakkerswoning is smal en diep, met kamers achter elkaar en weinig buitenmuur. Zonder luchtbeweging droogt alleen de voorkamer: de droge lucht blijft hangen waar het toestel staat en de achterbouw blijft nat. Een ventilator is hier dus geen extraatje maar de helft van de opstelling.",
        "De kleigrond eronder houdt water vast. Blijft een muur onderaan vochtig zonder dat er gewerkt is, dan gaat het meestal om opstijgend vocht en niet om bouwvocht: dat komt via de muurvoet bij zolang er geen waterkering ligt. Onze technieker meet het bij de levering en zegt u in welk geval u zit.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "Voor een volledig gelijkvloers met massieve muren: 70 liter per dag en bereik tot ongeveer 400 m³." },
      { key: "ttv4500", waarom: "In een smalle, diepe woning brengt deze ventilator de droge lucht tot achteraan, waar de droger zelf niet komt." },
      { key: "revolution", waarom: "Voor een kelder in de kleigrond die in de winter niet boven tien graden komt: droge lucht via slangen, ook in de koude." },
      { key: "ttk170", waarom: "Voor één kamer of een badkamer: compact genoeg voor een smalle trap en zuinig op een gewoon stopcontact." },
    ],
    levering: {
      kop: "Leveren in Niel: tien minuten, geplaatst en ingesteld",
      alinea:
        "Tien minuten rijden. De technieker verdeelt de toestellen over de ruimtes, zet de ventilator zo dat de lucht van voor naar achter gaat en sluit de condensafvoer aan. U hoeft niets te tillen en geen reservoirs te legen.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Tien minuten over de A12. Voor één los toestel loont dat; voor een volledig pakket zit de rit al in de prijs en plaatst de technieker alles meteen.",
    },
    buren: ["boom", "hemiksem", "schelle", "rumst"],
    faq: [
      {
        q: "Waarom is een ventilator hier bijna altijd nodig?",
        a: "Omdat een steenbakkerswoning smal en diep is, met kamers achter elkaar. De droge lucht blijft dan hangen in de kamer waar het toestel staat. Een ventilator stuurt ze naar achteren, en in de praktijk is dat vaak effectiever dan een tweede droger, en goedkoper.",
      },
      {
        q: "Mijn kelder is vochtig. Volstaat een bouwdroger?",
        a: "Voor het vocht dat er nu in zit wel. Maar een kelder in kleigrond zonder waterkering neemt vocht op uit de bodem, en dat blijft bijkomen zolang de bron er is. Drogen is dan het tweede deel van de oplossing; het eerste is de bron.",
      },
      {
        q: "Hoe snel staan jullie in Niel?",
        a: "Binnen 24 uur, en meestal de volgende werkdag: het magazijn ligt op tien minuten. Bij waterschade bellen we meteen terug om te kijken of het dezelfde dag nog lukt.",
      },
      {
        q: "Mag het toestel 's nachts blijven draaien?",
        a: "Ja, en dat hoort ook: drogen is een continu proces en een toestel dat 's nachts uit staat verliest de winst van overdag. Een Small bouwdroger zit rond 48 dB, vergelijkbaar met een koelkast in dezelfde kamer.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "rumst",
    title: "Bouwdroger huren in Rumst - op 15 minuten | Vernast",
    description:
      "Bouwdroger huren in Rumst, Reet en Terhagen: kleigrond, hoogwater waar Rupel en Nete samenkomen. Binnen 24 uur geleverd en geplaatst.",
    h1: "Bouwdroger huren in Rumst",
    kicker: "Rupelstreek · Rumst, Reet en Terhagen",
    rit: { afstand: "circa 10 km", tijd: "ongeveer een kwartier" },
    intro: [
      "Rumst ligt waar de Nete in de Rupel komt, en dat bepaalt de werven hier. Bij een hoge waterstand komt water in kelders en gelijkvloerse ruimtes terug, en in Terhagen en Reet staat de bebouwing bovendien op de oude kleiputten.",
      "Ons magazijn ligt op een kwartier. Bij waterschade krijgt uw dossier voorrang in de planning; voor een gewone droging is de volgende werkdag de regel.",
    ],
    bouw: {
      kop: "Kleigrond, kleiputten en water uit Rupel en Nete",
      alineas: [
        "Bij water in een kelder is de volgorde wat telt. Eerst het staande water weg, met een pomp of een trekker, en nat materiaal eruit: tapijt, isolatie, kartonnen dozen. Pas daarna heeft drogen zin, want een bouwdroger haalt vocht uit de lucht en uit materialen, hij pompt geen water weg. Wat erin getrokken is, blijft er weken in zitten.",
        "Op de kleigrond van Reet en Terhagen staan daarnaast oudere woningen zonder spouw en zonder waterkering, waar het vocht via de muurvoet omhoogkruipt. Dat is geen bouwvocht en gaat niet vanzelf weg; drogen haalt het uit de ruimte, maar de bron moet eerst aangepakt.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "Het werkpaard bij waterschade: 70 liter per dag, genoeg om een ondergelopen kelder of gelijkvloers in te halen." },
      { key: "ttv4500", waarom: "Water kruipt onder vloeren en achter plinten. Zonder luchtbeweging droogt dat niet; met deze ventilator wel." },
      { key: "revolution", waarom: "Voor een kelder die niet te verwarmen is: de adsorptiedroger blijft ook bij lage temperaturen vocht opnemen." },
      { key: "teddh30", waarom: "Na hoogwater in de winter is een kelder koud. Deze kachel brengt hem op werkingstemperatuur zodat de drogers rendement halen." },
    ],
    levering: {
      kop: "Leveren in Rumst: een kwartier, bij waterschade met voorrang",
      alinea:
        "Een kwartier rijden. Bel ons zodra het staande water weg is, dan kijken we of het dezelfde dag nog lukt. De technieker meet eerst waar het vocht zit, want wat onder een dekvloer of achter een plint is gekropen, droogt niet mee met de ruimte.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een kwartier over de A12. Voor één los toestel kan dat lonen. Bij waterschade is laten leveren vrijwel altijd beter: dan staat alles dezelfde dag geplaatst en ingesteld, met een meting erbij.",
    },
    buren: ["boom", "niel", "duffel", "kontich"],
    faq: [
      {
        q: "Mijn kelder is ondergelopen. Wat doe ik eerst?",
        a: "Eerst het staande water weg en nat materiaal eruit: tapijt, isolatie, kartonnen dozen. Pas daarna heeft drogen zin. Bel ons zodra de kelder leeg is, want op vochtig materiaal begint schimmel na 24 tot 48 uur en de eerste dag is de belangrijkste.",
      },
      {
        q: "Krijgt waterschade voorrang in jullie planning?",
        a: "Ja. Belt u voor de middag, dan is dezelfde dag of de volgende ochtend doorgaans haalbaar; Rumst ligt op een kwartier van ons magazijn. Bel in dat geval liever dan online te boeken, op 03 689 90 65: dan zien we meteen wat er vrij staat.",
      },
      {
        q: "Komt het vocht terug na een volgende hoge waterstand?",
        a: "Het bouwvocht dat we eruit halen niet, dat is definitief weg. Komt het water opnieuw binnen langs dezelfde weg, dan begint het natuurlijk opnieuw. Drogen voorkomt wel wat er anders achterblijft: schimmel, een muffe geur en vocht dat maanden in de muren zit.",
      },
      {
        q: "Werkt een bouwdroger in een koude kelder?",
        a: "Een condensdroger verliest onder 15 °C het grootste deel van zijn rendement. We combineren hem dan met een elektrische kachel die de ruimte eerst op temperatuur brengt, of we zetten meteen een adsorptiedroger in die met een droogmiddel werkt.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "schelle",
    title: "Bouwdroger huren in Schelle - op 10 minuten | Vernast",
    description:
      "Bouwdroger huren in Schelle: Scheldedorp met hoog grondwater en woningen uit de jaren zestig. Op tien minuten van ons magazijn, vaak dezelfde dag.",
    h1: "Bouwdroger huren in Schelle",
    kicker: "Rupelstreek · aan de Schelde, op tien minuten",
    rit: { afstand: "circa 5 km", tijd: "ongeveer tien minuten" },
    intro: [
      "Schelle ligt tussen de Schelde en de Rupel, en het grondwater staat er hoog. Kelders zijn hier zelden lang kurkdroog, en na een natte periode komt dat terug als vochtplekken onderaan de muur.",
      "Het magazijn ligt op tien minuten. Bij waterschade is dezelfde dag bijna altijd haalbaar; voor een gewone droging de volgende ochtend.",
    ],
    bouw: {
      kop: "Hoog grondwater en woningen uit de jaren zestig",
      alineas: [
        "Een kelder dicht bij de Schelde staat in grond die zelden lang droog blijft. Loopt hij onder, dan is leegpompen pas de eerste stap: het water dat in de muren en de vloerplaat is getrokken, zit er weken later nog in. Zonder droging komt het terug als vochtplekken en schimmel, en op vochtig materiaal begint die al na 24 tot 48 uur.",
        "Boven de kelder gaat het meestal om bouwvocht uit een renovatie van een woning uit de jaren zestig: een nieuwe chape, vers pleisterwerk, een uitbouw. Dat verdwijnt wél definitief, en met een opstelling per bouwlaag is het een kwestie van weken.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "Het werkpaard bij een natte kelder of een gelijkvloers in renovatie: 70 liter per dag, pompklaar." },
      { key: "revolution", waarom: "Voor een kelder die niet te verwarmen is: droge lucht via slangen, ook bij lage temperaturen." },
      { key: "ttv4500", waarom: "Vlak boven een natte vloer blijft een laag verzadigde lucht hangen. Deze ventilator blaast ze weg." },
      { key: "ttk170", waarom: "Voor één kamer of een badkamer, en op tien minuten het makkelijkst zelf af te halen." },
    ],
    levering: {
      kop: "Leveren in Schelle: tien minuten, bij waterschade met voorrang",
      alinea:
        "Tien minuten rijden. Belt u voor de middag, dan is een levering in de namiddag doorgaans haalbaar. De technieker meet bij aankomst waar het vocht zit en verdeelt de toestellen daarop; wat onder een dekvloer is gekropen droogt niet mee met de ruimte.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Tien minuten rijden. Voor één los toestel is dat de makkelijkste optie: u bent heen en terug in een halfuur.",
    },
    buren: ["hemiksem", "niel", "aartselaar", "boom"],
    faq: [
      {
        q: "Mijn kelder staat elk najaar vochtig. Helpt een bouwdroger?",
        a: "Hij haalt het vocht eruit dat er nu in zit, en dat voorkomt schimmel en een muffe geur. Maar zolang het water via de vloer of de wand binnenkomt, komt het bij een volgende natte periode terug. Drogen is dan het tweede deel van de oplossing; het eerste is de bron.",
      },
      {
        q: "Kunnen jullie dezelfde dag leveren in Schelle?",
        a: "Vaak wel: het magazijn ligt op tien minuten. Zolang het toestel dat u nodig heeft op voorraad staat, is een levering in de namiddag haalbaar wanneer u voor de middag belt.",
      },
      {
        q: "Wat doe ik voor jullie komen bij water in de kelder?",
        a: "Pomp of veeg het staande water weg en haal nat materiaal eruit: tapijt, isolatie, kartonnen dozen. Een bouwdroger haalt vocht uit de lucht en uit materialen, hij pompt geen water weg. Bel ons zodra de kelder leeg is.",
      },
      {
        q: "Hoeveel toestellen heb ik nodig voor een kelder van 40 m²?",
        a: "Doorgaans één bouwdroger met een ventilator erbij, zolang de ruimte boven 15 °C te krijgen is. Lukt dat niet, dan zetten we een kachel bij of kiezen we meteen voor een adsorptiedroger. De Calculator rekent op volume in kubieke meter, niet op oppervlakte.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "bornem",
    title: "Bouwdroger huren in Bornem - Klein-Brabant | Vernast",
    description:
      "Bouwdroger huren in Bornem: polder langs de Schelde, oude hoeves en dorpskernen. Binnen 24 uur geleverd en geplaatst, zonder kilometerkost.",
    h1: "Bouwdroger huren in Bornem",
    kicker: "Klein-Brabant · polder langs de Schelde",
    rit: { afstand: "circa 22 km", tijd: "ongeveer vijfentwintig minuten" },
    intro: [
      "Bornem ligt in Klein-Brabant, in de polder langs de Schelde. De bodem is klei, het grondwater staat hoog en bij een hoge waterstand komt dat terug in kelders en gelijkvloerse ruimtes.",
      "Ons magazijn in Aartselaar ligt op een vijfentwintigtal minuten over de A12. De rit telt mee in onze planning, niet in uw factuur.",
    ],
    bouw: {
      kop: "Polderklei, oude hoeves en dorpskernen",
      alineas: [
        "Klei houdt water vast. Een hoeve of een dorpswoning zonder waterkering in de muurvoet zuigt dat op via de baksteen, en binnen tekent het zich af als een band onderaan de muur met afbladderende verf. Dat is opstijgend vocht: drogen haalt het uit de ruimte, maar de bron blijft.",
        "Bij een renovatie komt daar bouwvocht bovenop, en dat verdwijnt wél definitief. Dikke, massieve muren geven hun vocht traag af, dus telt luchtbeweging langs het oppervlak hier meer dan extra capaciteit. Bijgebouwen en schuren zijn tijdens de werken zelden verwarmd, wat in de winter om een kachel erbij vraagt.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "Voor een woning of een hoeve in renovatie: 70 liter per dag en bereik tot ongeveer 400 m³, pompklaar." },
      { key: "revolution", waarom: "Voor een kruipruimte of een kelder in de polder die niet te verwarmen is: droge lucht via slangen door een bestaand luik." },
      { key: "ttv4500", waarom: "Massieve muren geven hun vocht traag af. Luchtbeweging langs het oppervlak versnelt dat merkbaar." },
      { key: "teddh30", waarom: "Voor een onverwarmde schuur of hoeve in de winter: de kachel brengt de ruimte op werkingstemperatuur. Vraagt 400 V." },
    ],
    levering: {
      kop: "Leveren in Bornem: binnen 24 uur, over de A12",
      alinea:
        "Een vijfentwintigtal minuten rijden. We plannen Klein-Brabant in een ronde, dus u krijgt een tijdslot en een sms een halfuur vooraf. Bij een hoeve of een schuur vragen we vooraf het volume in kubieke meter en of de ruimte dicht te krijgen is.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een vijfentwintigtal minuten over de A12. Voor één los toestel dat u langere tijd houdt kan dat lonen; voor een volledig pakket zit de rit al in de prijs.",
    },
    buren: ["puurs-sint-amands", "willebroek", "boom", "rumst"],
    faq: [
      {
        q: "Betaal ik een kilometerkost voor Bornem?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket. De rit telt mee in onze planning, niet in uw factuur; voor Klein-Brabant vragen we liefst een dag speling.",
      },
      {
        q: "Mijn muren blijven onderaan vochtig. Wat is dat?",
        a: "Op kleigrond zonder waterkering is dat bijna altijd opstijgend vocht: het tekent zich af als een band tot ongeveer een halve meter hoog, vaak met een witte zoutrand. Bouwvocht zit gelijkmatig in de hele ruimte en verdwijnt vanzelf naarmate het droogt. Onze technieker meet het bij de levering.",
      },
      {
        q: "Hoe droog ik een schuur die niet verwarmd is?",
        a: "Met een adsorptiedroger, of met een condensdroger plus een kachel. Een adsorptiedroger werkt met een droogmiddel in plaats van met condensatie en blijft ook bij lage temperaturen vocht opnemen. Welke van de twee past, bekijkt de technieker ter plaatse.",
      },
      {
        q: "Hoe snel staan jullie in Bornem?",
        a: "Binnen 24 uur na uw boeking. Boekt u voor de middag, dan plannen we doorgaans de volgende werkdag; bij waterschade bellen we meteen terug om te kijken wat dezelfde dag nog kan.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "puurs-sint-amands",
    title: "Bouwdroger huren in Puurs-Sint-Amands | Vernast",
    description:
      "Bouwdroger huren in Puurs-Sint-Amands: nieuwbouwverkavelingen en polderkernen langs de A12. Binnen 24 uur geleverd, geplaatst en ingesteld.",
    h1: "Bouwdroger huren in Puurs-Sint-Amands",
    kicker: "Klein-Brabant · nieuwbouw langs de A12",
    rit: { afstand: "circa 20 km", tijd: "ongeveer vijfentwintig minuten" },
    intro: [
      "Puurs-Sint-Amands ligt langs de A12, en dat is ook onze weg ernaartoe: een vijfentwintigtal minuten vanuit Aartselaar. Hier wordt meer nieuw gebouwd dan in de rest van Klein-Brabant, met verkavelingen rond Puurs en bedrijfsgebouwen aan de rand.",
      "Daarnaast liggen de oudere dorpskernen in de polder, waar de bodem klei is en het grondwater hoog staat. Twee soorten werven dus, met twee verschillende opstellingen.",
    ],
    bouw: {
      kop: "Verkavelingen, bedrijfsgebouwen en polderkernen",
      alineas: [
        "In een nieuwbouw wordt de chape van het hele gelijkvloers in één keer gelegd, en die zet per vierkante meter tientallen liters water in de constructie. Dat moet er langs boven uit, want door de vloerplaat kan het niet. Zonder droging duurt dat weken tot maanden; met een pakket van twee of drie toestellen zijn dat weken, en de vloerder krijgt een gemeten einddatum in plaats van een inschatting.",
        "In de polderkernen gaat het vaker om vocht dat er altijd al zat: kleigrond, een kelder zonder waterkering, een muur die onderaan vochtig blijft. Drogen helpt daar, maar alleen als de bron is aangepakt; anders komt het bij.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "Voor een volledig gelijkvloers of een bedrijfsruimte: 110 liter per dag en bereik tot ongeveer 600 m³." },
      { key: "ttk350", waarom: "De aanvulling voor de verdieping of de garage: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "Bij een chape verdubbelt luchtbeweging vaak de snelheid: hij blaast de verzadigde laag vlak boven de vloer weg." },
      { key: "teddh30", waarom: "Voor een onverwarmde ruwbouw in de winter: onder 15 °C zakt het rendement van elke condensdroger. Vraagt 400 V." },
    ],
    levering: {
      kop: "Leveren in Puurs-Sint-Amands: binnen 24 uur, over de A12",
      alinea:
        "Een vijfentwintigtal minuten rijden. Bij een nieuwbouw verdeelt de technieker de toestellen over droogzones en sluit hij de condensafvoer aan op een vloerput of de aansluiting van de toekomstige wasmachine. Op een werf zonder werfkast vragen we vooraf of er een vrij stopcontact van 16 ampère is.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een vijfentwintigtal minuten over de A12. Voor één los toestel kan dat lonen; voor een volledige nieuwbouw is leveren de betere rekensom, want dan plaatst de technieker meteen alles.",
    },
    buren: ["bornem", "willebroek", "boom", "rumst"],
    faq: [
      {
        q: "Hoe lang moet een chape in een nieuwbouw drogen?",
        a: "Dat beslist de meting, niet de kalender. Met een droogpakket rekent u voor een chape van zes centimeter doorgaans op een week of drie; zonder droger loopt dat in een gesloten, onverwarmde woning op tot maanden. Wij meten bij de start en bij de oplevering en geven die waarde door aan uw vloerder.",
      },
      {
        q: "Kunnen jullie ook een bedrijfsgebouw drogen?",
        a: "Ja, en dat doen we regelmatig. Wat we nodig hebben is het volume in kubieke meter, de vloeropbouw en of de ruimte dicht te krijgen is. Bij grote volumes zetten we meerdere drogers met ventilatoren in plaats van één toestel langer te laten staan: dat is sneller en meestal goedkoper, omdat u minder dagen huurt.",
      },
      {
        q: "Wat als het vriest tijdens de droging?",
        a: "Dan verwarmen we mee. Een condensdroger verliest onder 15 °C het grootste deel van zijn rendement, dus in een onverwarmde ruwbouw zetten we er een elektrische kachel bij. Ramen dicht, kachel aan, droger aan: dat is de volgorde.",
      },
      {
        q: "Rekenen jullie een leveringskost aan?",
        a: "Nee. Levering, plaatsing en ophaling zijn in de prijs van het droogpakket begrepen. De enige toeslag die kan bijkomen is die voor een verdieping waar toestellen via een ladder naar boven moeten.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "willebroek",
    title: "Bouwdroger huren in Willebroek - op 20 minuten | Vernast",
    description:
      "Bouwdroger huren in Willebroek: arbeiderswoningen langs het kanaal, hoog grondwater en vochtige kelders. Binnen 24 uur geleverd en geplaatst.",
    h1: "Bouwdroger huren in Willebroek",
    kicker: "Langs het kanaal · op twintig minuten",
    rit: { afstand: "circa 15 km", tijd: "ongeveer twintig minuten" },
    intro: [
      "Willebroek groeide langs het kanaal Brussel-Schelde, en dat is aan de bebouwing te zien: rijen arbeiderswoningen uit de industriële periode, met daarachter naoorlogse wijken en bedrijfsgebouwen aan het water.",
      "Het kanaal houdt het grondwater hoog. Kelders zijn hier zelden lang droog, en na een natte periode komt dat terug als vochtplekken onderaan de muur. Ons magazijn ligt op een twintigtal minuten.",
    ],
    bouw: {
      kop: "Arbeiderswoningen aan het kanaal, met natte kelders",
      alineas: [
        "Een kelder dicht bij het kanaal staat in grond die water vasthoudt. Loopt hij onder, dan is leegpompen pas de eerste stap: wat in de muren en de vloerplaat is getrokken zit er weken later nog in, en zonder droging komt het terug als schimmel en een muffe geur. Op vochtig materiaal begint schimmel al na 24 tot 48 uur.",
        "De woningen erboven hebben massieve muren zonder spouw en een gesloten plattegrond met kamers achter elkaar. Daar telt luchtbeweging bijna evenveel als capaciteit: een ventilator die de droge lucht rondstuurt is vaak effectiever dan een tweede droger, en goedkoper.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "Het werkpaard bij een natte kelder of een gelijkvloers: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "Water kruipt onder vloeren en achter plinten. Zonder luchtbeweging droogt dat niet; met deze ventilator wel." },
      { key: "revolution", waarom: "Voor een kelder die niet te verwarmen is: de adsorptiedroger blijft ook bij lage temperaturen vocht opnemen." },
      { key: "ttk650", waarom: "Voor een bedrijfsruimte of een groot gelijkvloers: 110 liter per dag en bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Willebroek: binnen 24 uur, bij waterschade met voorrang",
      alinea:
        "Een twintigtal minuten rijden. Bij water in een kelder krijgt uw dossier voorrang: bel ons zodra het staande water weg is. De technieker meet eerst waar het vocht zit, want wat onder een dekvloer of achter een plint is gekropen, droogt niet mee met de ruimte.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een twintigtal minuten over de A12. Voor één los toestel loont dat. Bij waterschade is laten leveren vrijwel altijd beter: dan staat alles dezelfde dag geplaatst en ingesteld, met een meting erbij.",
    },
    buren: ["boom", "puurs-sint-amands", "bornem", "rumst"],
    faq: [
      {
        q: "Mijn kelder is ondergelopen. Wat doe ik eerst?",
        a: "Eerst het staande water weg en nat materiaal eruit: tapijt, isolatie, kartonnen dozen. Pas daarna heeft drogen zin, want een bouwdroger haalt vocht uit de lucht en uit materialen, hij pompt geen water weg. Bel ons zodra de kelder leeg is, want de eerste dag is de belangrijkste.",
      },
      {
        q: "Komt het vocht terug?",
        a: "Bouwvocht niet, dat verdwijnt definitief. Komt het water via de kelderwand of de vloerplaat binnen, dan is drogen het tweede deel van de oplossing en niet het eerste: zolang de bron er is, blijft het bijkomen. Onze technieker meet bij de levering en zegt u in welk geval u zit.",
      },
      {
        q: "Kunnen jullie ook een loods of bedrijfsruimte drogen?",
        a: "Ja. We vragen vooraf het volume in kubieke meter, de vloeropbouw en of de ruimte dicht te krijgen is: een droger tegen een open poort werkt tegen de buitenlucht in. Bij stilstand die geld kost zetten we liever meer toestellen korter dan één toestel lang.",
      },
      {
        q: "Hoe snel staan jullie in Willebroek?",
        a: "Binnen 24 uur na uw boeking; het magazijn ligt op een twintigtal minuten over de A12. Bij waterschade bellen we meteen terug om te kijken of het dezelfde dag nog lukt.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "berlaar",
    title: "Bouwdroger huren in Berlaar - Netevallei | Vernast",
    description:
      "Bouwdroger huren in Berlaar: Netevallei met hoogwater in kelders, oude dorpskern en verkavelingen. Binnen 24 uur geleverd, geplaatst en ingesteld.",
    h1: "Bouwdroger huren in Berlaar",
    kicker: "Netevallei · hoogwater en verkavelingen",
    rit: { afstand: "circa 22 km", tijd: "ongeveer vijfentwintig minuten" },
    intro: [
      "Berlaar ligt aan de Nete, en dat bepaalt waarvoor men hier belt. Bij een hoge waterstand komt water in kelders en gelijkvloerse ruimtes terug, soms twee winters na elkaar.",
      "Daarnaast is er het gewone werk: de dorpskern met oudere woningen en de verkavelingen errond, nu een voor een in renovatie. Ons magazijn ligt op een vijfentwintigtal minuten.",
    ],
    bouw: {
      kop: "De Netevallei, en verkavelingen in renovatie",
      alineas: [
        "Bij water in een kelder is de volgorde wat telt: eerst het staande water en het natte materiaal weg, dan pas drogen. Wat in de muren en de vloerplaat is getrokken, blijft er weken in zitten, en dat is precies het deel dat terugkomt als u het laat. Op vochtig materiaal begint schimmel na 24 tot 48 uur.",
        "In de verkavelingen gaat het om bouwvocht: een nieuwe chape over het gelijkvloers, vers pleisterwerk, een uitbouw. Dat verdwijnt wél definitief. Met één toestel per bouwlaag en een ventilator die de lucht laat rondgaan is dat weken in plaats van maanden.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "Het werkpaard bij hoogwater en bij renovatie: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "Water kruipt onder vloeren en achter plinten. Zonder luchtbeweging droogt dat niet; met deze ventilator wel." },
      { key: "revolution", waarom: "Voor een kelder die niet te verwarmen is: droge lucht via slangen, ook bij lage temperaturen." },
      { key: "ttk170", waarom: "Voor één kamer of een badkamerrenovatie: compact, zuinig en stil genoeg voor een bewoond huis." },
    ],
    levering: {
      kop: "Leveren in Berlaar: binnen 24 uur, bij waterschade met voorrang",
      alinea:
        "Een vijfentwintigtal minuten rijden. Bel ons zodra het staande water weg is, dan kijken we of het dezelfde dag nog lukt. De technieker meet bij aankomst waar het vocht zit en verdeelt de toestellen daarop.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een halfuur rijden. Voor één los toestel dat u langere tijd houdt kan dat lonen; bij waterschade is leveren vrijwel altijd de betere keuze.",
    },
    buren: ["lier", "nijlen", "heist-op-den-berg", "duffel"],
    faq: [
      {
        q: "Krijgt waterschade voorrang in jullie planning?",
        a: "Ja. Belt u voor de middag, dan kijken we of het dezelfde dag nog lukt; anders staat het de volgende ochtend. Bel in dat geval liever dan online te boeken, op 03 689 90 65: dan zien we meteen wat er vrij staat en wat u nodig hebt.",
      },
      {
        q: "Wat doe ik voor jullie komen bij water in de kelder?",
        a: "Pomp of veeg het staande water weg en haal nat tapijt en natte isolatie eruit. Een bouwdroger haalt vocht uit de lucht en uit materialen, hij pompt geen water weg. Zolang er water op de vloer staat, is drogen zinloos.",
      },
      {
        q: "Hoe lang blijft een opstelling staan na hoogwater?",
        a: "Dat hangt af van wat er nat is geworden en hoe diep het water in de muren is getrokken. Wij meten bij de start en bij de oplevering; de huurtermijn volgt uit die meting en niet uit de kalender. Is het op de afgesproken datum niet droog, dan loopt de huur volgens de Drooggarantie kosteloos verder.",
      },
      {
        q: "Wat kost de levering in Berlaar?",
        a: "Niets extra. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van elk droogpakket, ongeacht de afstand. De rit telt mee in onze planning, niet in uw factuur.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "bonheiden",
    title: "Bouwdroger huren in Bonheiden - op 30 minuten | Vernast",
    description:
      "Bouwdroger huren in Bonheiden: villa's op zandgrond met ruime volumes, vaak in renovatie. Binnen 24 uur geleverd, geplaatst en ingesteld.",
    h1: "Bouwdroger huren in Bonheiden",
    kicker: "Mechelse regio · villa's op zandgrond",
    rit: { afstand: "circa 24 km", tijd: "ongeveer een halfuur" },
    intro: [
      "Bonheiden is residentieel en groen: villa's en ruime woningen op grote percelen, veel bos, en een bodem die zand is in plaats van klei. Dat laatste scheelt: zand draineert goed, dus kelders zijn hier minder vaak het probleem dan in de Netevallei verderop.",
      "Wat we hier wél tegenkomen is volume. Een vrijstaande woning in renovatie heeft meer capaciteit nodig, en dat is waar de opstelling om draait. Ons magazijn ligt op een halfuur.",
    ],
    bouw: {
      kop: "Ruime villa's, grote volumes, weinig kelderproblemen",
      alineas: [
        "Een vrijstaande woning droogt niet sneller omdat hij groter is. Hij heeft gewoon meer capaciteit nodig: wij rekenen op volume in kubieke meter en niet op oppervlakte, en een open leefruimte met een hoog plafond bevat veel meer lucht dan dezelfde vierkante meters onder een normaal plafond. Die lucht moet allemaal door het toestel.",
        "De zandgrond draineert goed, waardoor opstijgend vocht hier minder speelt dan langs de Nete. Het werk is dus meestal bouwvocht uit een renovatie, en dat verdwijnt definitief: een nieuwe chape, pleisterwerk over twee bouwlagen, een bijgebouw dat mee wordt afgewerkt. Dat bijgebouw is tijdens de werken zelden verwarmd, wat in de winter om een kachel erbij vraagt.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "Voor de volumes hier: 110 liter per dag en bereik tot ongeveer 600 m³, genoeg voor een volledig gelijkvloers." },
      { key: "ttk350", waarom: "De aanvulling voor de verdieping, de garage of het bijgebouw: 70 liter per dag, pompklaar." },
      { key: "ttv4500", waarom: "In een open leefruimte staat de droger zelden in de hoek die het natst is. Deze ventilator verdeelt de droge lucht over de bouwlaag." },
      { key: "teddh30", waarom: "Voor een onverwarmd bijgebouw of een winterwerf: de kachel brengt de ruimte op werkingstemperatuur. Vraagt 400 V." },
    ],
    levering: {
      kop: "Leveren in Bonheiden: binnen 24 uur, met een pakket op maat",
      alinea:
        "Een halfuur rijden; we plannen de Mechelse regio in een ronde, dus u krijgt een tijdslot en een sms een halfuur vooraf. Bij een vrijstaande woning komt de technieker meestal met een groter pakket dan de Calculator voor één bouwlaag berekent, en dat overlegt hij vooraf.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een halfuur rijden. Voor de volumes die hier gangbaar zijn is leveren doorgaans de betere keuze: de rit zit al in de pakketprijs en de technieker plaatst meteen alles.",
    },
    buren: ["mechelen", "putte", "sint-katelijne-waver", "duffel"],
    faq: [
      {
        q: "Hoeveel bouwdrogers heb ik nodig voor een villa?",
        a: "Voor een gelijkvloers van 120 tot 150 m² met een open leefruimte rekenen we doorgaans op twee drogers met een ventilator per droogzone, en vaak een derde toestel voor de verdieping of het bijgebouw. De Calculator rekent op volume in kubieke meter, niet op oppervlakte.",
      },
      {
        q: "Hoe droog ik een bijgebouw dat niet verwarmd is?",
        a: "Met een adsorptiedroger, of met een condensdroger plus een kachel. Een adsorptiedroger werkt met een droogmiddel in plaats van met condensatie en blijft ook bij lage temperaturen vocht opnemen. Welke van de twee past, bekijkt de technieker ter plaatse.",
      },
      {
        q: "Hoe snel staan jullie in Bonheiden?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer een halfuur, dus plannen we hem in een ronde; boekt u voor de middag, dan staat het doorgaans de volgende werkdag.",
      },
      {
        q: "Kan de vloerder starten zodra de huurtermijn om is?",
        a: "Dat beslist de eindmeting, niet de kalender. Wij meten bij de ophaling het restvocht en geven u die waarde door. Welke grens uw vloerder wil zien hangt af van het type chape, de vloerverwarming en de afwerking; vraag hem dat vooraf.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "nijlen",
    title: "Bouwdroger huren in Nijlen - op 30 minuten | Vernast",
    description:
      "Bouwdroger huren in Nijlen: vrijstaande woningen op de Kempense rand, met de Nete aan de andere kant. Binnen 24 uur geleverd en geplaatst.",
    h1: "Bouwdroger huren in Nijlen",
    kicker: "Tussen Netevallei en Kempen",
    rit: { afstand: "circa 24 km", tijd: "ongeveer een halfuur" },
    intro: [
      "Nijlen ligt op de grens van twee streken, en de werven hier ook. Aan de kant van de Nete is het de vallei, met water in kelders bij een hoge stand; aan de andere kant begint de Kempen, met zandgrond en vrijstaande woningen op ruime percelen.",
      "Ons magazijn in Aartselaar ligt op een halfuur. Levering, plaatsing en ophaling zitten in de prijs van het droogpakket; de afstand verrekenen we niet.",
    ],
    bouw: {
      kop: "Vrijstaande woningen op zand, een vallei aan de rand",
      alineas: [
        "Op de zandgrond gaat het bijna altijd om bouwvocht: een nieuwe chape over het gelijkvloers, pleisterwerk over twee bouwlagen, een bijgebouw. Dat verdwijnt definitief, maar het vraagt capaciteit, want een vrijstaande woning heeft meer volume dan een rijhuis. Wij rekenen op kubieke meter en niet op oppervlakte.",
        "Aan de kant van de Nete is het een ander verhaal: daar komt bij hoogwater water in kelders en gelijkvloerse ruimtes. Leegpompen is dan de eerste stap, drogen de tweede, en snelheid telt: op vochtig materiaal begint schimmel na 24 tot 48 uur.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "Voor een ruime vrijstaande woning: 110 liter per dag en bereik tot ongeveer 600 m³, één toestel per groot gelijkvloers." },
      { key: "ttk350", waarom: "De aanvulling voor de verdieping of het bijgebouw, en het werkpaard na hoogwater: 70 liter per dag, pompklaar." },
      { key: "ttv4500", waarom: "Bij grote gelijkvloerse oppervlaktes staat de droger zelden in de kamer die het natst is. Deze ventilator verdeelt de droge lucht." },
      { key: "teddh30", waarom: "Voor een onverwarmde werf in de winter: onder 15 °C zakt het rendement van elke condensdroger. Vraagt 400 V." },
    ],
    levering: {
      kop: "Leveren in Nijlen: binnen 24 uur, in een ronde gepland",
      alinea:
        "Een halfuur rijden, gepland als onderdeel van een ronde door de Netevallei. U krijgt een tijdslot en een sms een halfuur vooraf. Bij waterschade bellen we meteen terug om te kijken wat dezelfde dag nog kan.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een halfuur rijden. Voor één los toestel dat u langere tijd houdt kan dat lonen; voor een volledig pakket zit de rit al in de prijs.",
    },
    buren: ["lier", "berlaar", "herentals", "heist-op-den-berg"],
    faq: [
      {
        q: "Hoeveel toestellen heb ik nodig voor een vrijstaande woning?",
        a: "Voor een gelijkvloers van 120 tot 150 m² rekenen we doorgaans op twee drogers met een ventilator per droogzone, en vaak een derde voor de verdieping of het bijgebouw. Het precieze aantal hangt af van de plafondhoogte en van wat er moet drogen.",
      },
      {
        q: "Mijn kelder loopt bij hoogwater onder. Wat eerst?",
        a: "Eerst het staande water weg en nat materiaal eruit, dan pas drogen. Een bouwdroger haalt vocht uit de lucht en uit materialen, hij pompt geen water weg. Bel ons zodra de kelder leeg is, want op vochtig materiaal begint schimmel na 24 tot 48 uur.",
      },
      {
        q: "Betaal ik een kilometerkost voor Nijlen?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket. De rit telt mee in onze planning, niet in uw factuur.",
      },
      {
        q: "Wat als het vriest tijdens de droging?",
        a: "Dan verwarmen we mee. Een condensdroger verliest onder 15 °C het grootste deel van zijn rendement, dus in een onverwarmde woning of een bijgebouw zetten we er een elektrische kachel bij die de ruimte op werkingstemperatuur houdt. Die vraagt 400 V krachtstroom.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "putte",
    title: "Bouwdroger huren in Putte - op 30 minuten | Vernast",
    description:
      "Bouwdroger huren in Putte: bosrijke villawijken op zandgrond en oudere woningen in de kernen. Binnen 24 uur geleverd, geplaatst en ingesteld.",
    h1: "Bouwdroger huren in Putte",
    kicker: "Mechelse regio · bosrijk, op zandgrond",
    rit: { afstand: "circa 27 km", tijd: "ongeveer een halfuur" },
    intro: [
      "Putte ligt tussen Mechelen en de Kempen, bosrijk en ruim opgezet: villa's op grote percelen, met daarnaast de oudere kernen van Putte en Beerzel. De bodem is zand, dus kelders zijn hier minder vaak het probleem dan in de vallei.",
      "Ons magazijn in Aartselaar ligt op een halfuur. We plannen deze streek in een ronde, dus u krijgt een tijdslot en geen hele dag wachten.",
    ],
    bouw: {
      kop: "Villa's in het groen, en oudere kernen",
      alineas: [
        "Bij de villa's is volume de bepalende factor. Een open leefruimte met een hoog plafond bevat veel meer lucht dan dezelfde vierkante meters onder een normaal plafond, en die lucht moet allemaal door het toestel. In een pakket hier staat zelden één droger.",
        "In de oudere kernen gaat het vaker om een woning zonder spouw en zonder waterkering, waar het vocht via de muurvoet omhoogkruipt. Dat is opstijgend vocht en geen bouwvocht: drogen haalt het uit de ruimte, maar zolang de bron er is, komt het bij. Onze technieker meet het verschil bij de levering.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "Voor de volumes van een villa: 110 liter per dag en bereik tot ongeveer 600 m³." },
      { key: "ttk350", waarom: "De aanvulling voor de verdieping, de garage of het bijgebouw: 70 liter per dag, pompklaar." },
      { key: "ttv4500", waarom: "In een woning met lange gangen blijft droge lucht hangen waar het toestel staat. Deze ventilator brengt ze tot in de verste kamer." },
      { key: "teddh30", waarom: "Voor een onverwarmd bijgebouw of een winterwerf: de kachel brengt de ruimte op werkingstemperatuur. Vraagt 400 V." },
    ],
    levering: {
      kop: "Leveren in Putte: binnen 24 uur, in een ronde gepland",
      alinea:
        "Een halfuur rijden. De technieker verdeelt de toestellen over droogzones, zet een ventilator waar de lucht anders blijft hangen en sluit de condensafvoer aan. Bij een grote woning komt hij meestal met meer capaciteit dan de Calculator voor één bouwlaag berekent; dat overlegt hij vooraf.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een halfuur rijden. Voor één los toestel kan dat lonen; voor een volledige woning is leveren doorgaans de betere rekensom.",
    },
    buren: ["bonheiden", "heist-op-den-berg", "mechelen", "berlaar"],
    faq: [
      {
        q: "Hoeveel capaciteit heb ik nodig voor een open leefruimte?",
        a: "Meer dan de oppervlakte doet vermoeden. Wij rekenen op volume in kubieke meter: een leefruimte van 60 m² met een plafond van vier meter bevat anderhalf keer zoveel lucht als dezelfde oppervlakte onder een gewoon plafond. De Calculator houdt daar rekening mee.",
      },
      {
        q: "Mijn muur blijft onderaan vochtig. Is dat bouwvocht?",
        a: "Waarschijnlijk niet. Opstijgend vocht tekent zich af als een band tot ongeveer een halve meter hoog, vaak met een witte zoutrand en afbladderende verf. Bouwvocht zit gelijkmatig in de hele ruimte en verdwijnt vanzelf naarmate het droogt. Onze technieker meet het bij de levering; dat kost u niets extra.",
      },
      {
        q: "Hoe snel staan jullie in Putte?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer een halfuur en we plannen hem in een ronde, dus boekt u voor de middag, dan staat het doorgaans de volgende werkdag.",
      },
      {
        q: "Mag ik tijdens de droging in de woning blijven?",
        a: "Dat kan. Een condensdroger blaast geen stof rond en geeft alleen warme, droge lucht af. Houd de ramen en deuren van de droogzone dicht en verplaats de toestellen niet; de rest gebeurt vanzelf.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "sint-katelijne-waver",
    title: "Bouwdroger huren in Sint-Katelijne-Waver | Vernast",
    description:
      "Bouwdroger huren in Sint-Katelijne-Waver: tuinbouwstreek met nieuwbouw en grote volumes. Binnen 24 uur geleverd, geplaatst en ingesteld.",
    h1: "Bouwdroger huren in Sint-Katelijne-Waver",
    kicker: "Mechelse regio · tuinbouw en nieuwbouw",
    rit: { afstand: "circa 19 km", tijd: "ongeveer vijfentwintig minuten" },
    intro: [
      "Sint-Katelijne-Waver is de tuinbouwgemeente van de Mechelse regio: serres, loodsen en bedrijfsgebouwen naast woonkernen waar stevig bijgebouwd wordt. Dat levert twee soorten werven op, met twee verschillende maten.",
      "Ons magazijn in Aartselaar ligt op een vijfentwintigtal minuten over de A12 en de N16. Levering, plaatsing en ophaling zitten in de prijs van het droogpakket.",
    ],
    bouw: {
      kop: "Nieuwbouw in de kernen, grote volumes aan de rand",
      alineas: [
        "In de woonkernen wordt de chape van het hele gelijkvloers in één keer gelegd, en die zet per vierkante meter tientallen liters water in de constructie. Door de vloerplaat kan dat niet weg, dus moet het er langs boven uit. Met een pakket van twee of drie toestellen is dat weken in plaats van maanden, en de vloerder krijgt een gemeten einddatum.",
        "Aan de rand gaat het om loodsen en bedrijfsruimtes, en daar is de eerste vraag niet welk toestel maar of de ruimte dicht te krijgen is: een droger tegen een open poort werkt tegen de buitenlucht in. Bij stilstand die geld kost zetten we liever meer toestellen korter dan één toestel lang.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "Voor een loods of een volledig gelijkvloers: 110 liter per dag en bereik tot ongeveer 600 m³, pompklaar voor continue afvoer." },
      { key: "ttk350", waarom: "Voor een gewone nieuwbouwwoning of de verdieping: 70 liter per dag, bereik tot ongeveer 400 m³." },
      { key: "ttv4500", waarom: "Bij een chape verdubbelt luchtbeweging vaak de snelheid: hij blaast de verzadigde laag vlak boven de vloer weg." },
      { key: "teddh30", waarom: "Voor een onverwarmde ruwbouw of loods in de winter: de kachel brengt de ruimte op werkingstemperatuur. Vraagt 400 V." },
    ],
    levering: {
      kop: "Leveren in Sint-Katelijne-Waver: binnen 24 uur",
      alinea:
        "Een vijfentwintigtal minuten rijden. Bij een bedrijfsgebouw vragen we vooraf het volume in kubieke meter, de vloeropbouw en of de ruimte dicht te krijgen is. Bij een woning verdeelt de technieker de toestellen over droogzones en sluit hij de condensafvoer aan op een vloerput.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een vijfentwintigtal minuten over de N16 en de A12. Voor één los toestel kan dat lonen; voor de volumes die hier gangbaar zijn is leveren de betere rekensom.",
    },
    buren: ["mechelen", "duffel", "bonheiden", "lier"],
    faq: [
      {
        q: "Kunnen jullie een loods of een serre drogen?",
        a: "Een loods zeker, en dat doen we regelmatig. We vragen vooraf het volume in kubieke meter, de vloeropbouw en of de ruimte dicht te krijgen is: een droger tegen een open poort werkt tegen de buitenlucht in. Bij grote volumes zetten we meerdere drogers met ventilatoren in plaats van één toestel langer te laten staan.",
      },
      {
        q: "Hoe lang moet een chape in een nieuwbouw drogen?",
        a: "Dat beslist de meting. Met een droogpakket rekent u voor een chape van zes centimeter doorgaans op een week of drie; zonder droger loopt dat in een gesloten, onverwarmde woning op tot maanden. Wij meten bij de start en bij de oplevering.",
      },
      {
        q: "Wat kost de levering hier?",
        a: "Niets extra. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van elk droogpakket. De enige mogelijke toeslag is die voor een verdieping waar toestellen via een ladder naar boven moeten.",
      },
      {
        q: "Hoeveel stroom verbruikt een opstelling van drie toestellen?",
        a: "Een bouwdroger van 70 liter trekt ongeveer 0,7 kW en draait dag en nacht door; reken op zo'n 15 kWh per etmaal per toestel. Bij drie toestellen is dat grofweg 45 kWh per dag, aan een gangbaar tarief enkele euro's per toestel. Dat verbruik betaalt u aan uw netbeheerder, niet aan ons.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "wommelgem",
    title: "Bouwdroger huren in Wommelgem - op 20 minuten | Vernast",
    description:
      "Bouwdroger huren in Wommelgem: verkavelingen tegen de Ring, woningen uit de jaren zestig in renovatie. Binnen 24 uur geleverd en geplaatst.",
    h1: "Bouwdroger huren in Wommelgem",
    kicker: "Noordrand · tegen de Ring, op twintig minuten",
    rit: { afstand: "circa 16 km", tijd: "ongeveer twintig minuten" },
    intro: [
      "Wommelgem ligt tegen de Ring en het Albertkanaal, en is in de jaren zestig en zeventig volgebouwd met halfopen en vrijstaande woningen op een eigen perceel. Die generatie wordt nu een voor een aangepakt, en dat brengt water in huis dat eruit moet voor de afwerking begint.",
      "Ons magazijn in Aartselaar ligt op een twintigtal minuten via de Ring. Voor een gewone droging is de volgende werkdag de regel.",
    ],
    bouw: {
      kop: "Verkavelingen uit de jaren zestig, nu in renovatie",
      alineas: [
        "Een woning uit die periode heeft meestal een kelder onder de voorkamer, een betonnen vloerplaat en een smalle spouw. Wordt er een nieuwe chape in gelegd, dan zit er per vierkante meter tientallen liters water in die niet door de vloerplaat weg kan; die moet er langs boven uit. Zonder droging duurt dat weken, en pas als het restvocht onder de norm zit mag er parket of tegel op.",
        "Het volume is hier groter dan in een rijhuis, dus rekenen we op kubieke meter en niet op oppervlakte. In een pakket staan meestal twee toestellen: een droger per bouwlaag en een ventilator die de lucht laat rondgaan.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "Voor de volumes van een vrijstaande woning: 110 liter per dag en bereik tot ongeveer 600 m³." },
      { key: "ttk350", waarom: "De aanvulling voor de verdieping, de garage of het bijgebouw: 70 liter per dag, pompklaar." },
      { key: "ttv4500", waarom: "In een woning met lange gangen blijft droge lucht hangen waar het toestel staat. Deze ventilator brengt ze tot in de verste kamer." },
      { key: "teddh30", waarom: "Voor een onverwarmd bijgebouw of een winterwerf: de kachel brengt de ruimte op werkingstemperatuur. Vraagt 400 V." },
    ],
    levering: {
      kop: "Leveren in Wommelgem: binnen 24 uur, via de Ring",
      alinea:
        "Een twintigtal minuten rijden. De technieker meet het startvochtgehalte, verdeelt de toestellen over droogzones en sluit de condensafvoer aan op een vloerput of een lavabo. U hoeft niets te tillen of in te stellen.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een twintigtal minuten over de Ring en de A12. Voor één los toestel loont dat; voor een volledig pakket zit de rit al in de prijs.",
    },
    buren: ["antwerpen-stad", "ranst", "wijnegem", "mortsel"],
    faq: [
      {
        q: "Hoe lang moet een nieuwe chape drogen?",
        a: "Dat beslist de meting, niet de kalender. Met een droogpakket rekent u voor een chape van zes centimeter doorgaans op een week of drie; zonder droger loopt dat op tot maanden. Wij meten bij de start en bij de oplevering en geven die waarde door aan uw vloerder.",
      },
      {
        q: "Hoeveel toestellen heb ik nodig voor een gelijkvloers van 110 m²?",
        a: "Doorgaans één bouwdroger met een ventilator per droogzone, en een tweede toestel zodra de verdieping mee moet. De Calculator rekent op volume in kubieke meter: een hoog plafond telt zwaarder dan extra vierkante meters.",
      },
      {
        q: "Hoe snel staan jullie in Wommelgem?",
        a: "Binnen 24 uur, meestal de volgende werkdag: het magazijn ligt op een twintigtal minuten via de Ring. Bij waterschade bellen we meteen terug om te kijken wat dezelfde dag nog kan.",
      },
      {
        q: "Mag het toestel 's nachts doordraaien?",
        a: "Ja, en dat hoort ook: drogen is een continu proces en een toestel dat 's nachts uit staat verliest de winst van overdag. Een Small bouwdroger zit rond 48 dB, vergelijkbaar met een koelkast in dezelfde kamer.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "wijnegem",
    title: "Bouwdroger huren in Wijnegem - op 20 minuten | Vernast",
    description:
      "Bouwdroger huren in Wijnegem: compacte gemeente aan het Albertkanaal, met appartementen en rijwoningen. Binnen 24 uur geleverd en geplaatst.",
    h1: "Bouwdroger huren in Wijnegem",
    kicker: "Noordrand · aan het Albertkanaal",
    rit: { afstand: "circa 17 km", tijd: "ongeveer twintig minuten" },
    intro: [
      "Wijnegem is compact en ligt met één kant tegen het Albertkanaal. De bebouwing is gemengd: rijwoningen en appartementen rond de kern, en daarachter verkavelingen met halfopen woningen.",
      "Het kanaal houdt het grondwater aan die kant hoog, dus kelders zijn er niet altijd kurkdroog. Ons magazijn ligt op een twintigtal minuten via de Ring.",
    ],
    bouw: {
      kop: "Appartementen en rijwoningen, en kelders bij het kanaal",
      alineas: [
        "In een appartement speelt de verdieping. Is er een lift of een vaste trap, dan is elke verdieping inbegrepen in de prijs; moet een toestel via een ladder naar boven, dan rekenen we een toeslag per verdieping en staat die vooraf in uw offerte.",
        "Dichter bij het kanaal staat het grondwater hoger en komt vocht in kelders en bergingen terug na een natte periode. Leegpompen is dan de eerste stap: wat in de muren en de vloerplaat is getrokken blijft er weken in zitten, en zonder droging komt dat terug als schimmel en een muffe geur.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "Compact genoeg voor een appartement of een smalle trap, en zuinig op één gewoon stopcontact." },
      { key: "ttk350", waarom: "Voor een volledig gelijkvloers of een ruime kelder: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "Zonder luchtbeweging droogt alleen de kamer waar het toestel staat. Deze ventilator trekt de hele bouwlaag mee." },
      { key: "revolution", waarom: "Voor een kelder bij het kanaal die niet te verwarmen is: droge lucht via slangen, ook bij lage temperaturen." },
    ],
    levering: {
      kop: "Leveren in Wijnegem: binnen 24 uur, tot boven gedragen",
      alinea:
        "Een twintigtal minuten rijden. Is er een lift of een vaste trap, dan draagt de technieker alles naar boven zonder meerkost. Bij een natte kelder meet hij eerst waar het vocht zit, want wat achter een plint is gekropen droogt niet mee met de ruimte.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een twintigtal minuten over de Ring en de A12. Voor één los toestel loont dat. Vervoer de droger rechtop, en heeft hij toch plat gelegen, laat hem dan 24 uur staan.",
    },
    buren: ["antwerpen-stad", "wommelgem", "schilde", "ranst"],
    faq: [
      {
        q: "Wat kost het als het toestel naar de derde verdieping moet?",
        a: "Niets extra, zolang er een lift of een vaste trap is: elke verdieping is inbegrepen in de prijs van het droogpakket. Alleen wanneer een toestel via een ladder naar boven moet, rekenen we een toeslag per verdieping. Meld dat vooraf, dan komen we met twee man.",
      },
      {
        q: "Mijn kelder blijft vochtig na een natte periode. Wat nu?",
        a: "Dichter bij het kanaal staat het grondwater hoog, en dan is het meestal geen bouwvocht maar een bron die blijft. Een bouwdroger haalt het vocht uit de ruimte zolang hij draait; de duurzame oplossing is de bron aanpakken en daarna drogen. Onze technieker meet het bij de levering.",
      },
      {
        q: "Hoe snel staan jullie in Wijnegem?",
        a: "Binnen 24 uur na uw boeking, meestal de volgende werkdag. Het magazijn ligt op een twintigtal minuten via de Ring; bij waterschade bellen we meteen terug.",
      },
      {
        q: "Moet ik de ramen openzetten terwijl de droger draait?",
        a: "Nee, dicht houden. Een bouwdroger ontvochtigt de lucht die in de ruimte zit; staat er een raam open, dan trekt hij buitenlucht mee en droogt u in de praktijk de straat.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "ranst",
    title: "Bouwdroger huren in Ranst - op 25 minuten | Vernast",
    description:
      "Bouwdroger huren in Ranst, Broechem en Oelegem: landelijke kernen aan de Kleine Nete. Binnen 24 uur geleverd, geplaatst en ingesteld.",
    h1: "Bouwdroger huren in Ranst",
    kicker: "Noordrand · Ranst, Broechem en Oelegem",
    rit: { afstand: "circa 20 km", tijd: "ongeveer vijfentwintig minuten" },
    intro: [
      "Ranst bestaat uit vier landelijke kernen: Ranst, Broechem, Oelegem en Emblem. De bebouwing is ruim opgezet, met vrijstaande woningen op een eigen perceel en hier en daar een oude hoeve.",
      "Aan de kant van de Kleine Nete en het Albertkanaal ligt het land lager en staat het grondwater hoger; daar komt vocht in kelders en kruipruimtes terug. Ons magazijn ligt op een vijfentwintigtal minuten.",
    ],
    bouw: {
      kop: "Landelijke kernen, en lager land aan de Nete",
      alineas: [
        "Bij de vrijstaande woningen is volume de bepalende factor. Een open leefruimte met een hoog plafond bevat veel meer lucht dan dezelfde vierkante meters onder een gewoon plafond, en die lucht moet allemaal door het toestel. In een pakket hier staat zelden één droger.",
        "In de lagere delen is het vaker vocht dat er altijd al zat: een kruipruimte zonder doorstroming, een kelder zonder waterkering. Zo'n ruimte droogt u met een adsorptiedroger die via slangen door een bestaand luik blaast, zodat u er zelf niet in hoeft.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "Voor een ruime vrijstaande woning: 110 liter per dag en bereik tot ongeveer 600 m³." },
      { key: "revolution", waarom: "Voor een kruipruimte of een kelder die niet te verwarmen is: droge lucht via slangen door een bestaand luik." },
      { key: "ttk350", waarom: "De aanvulling voor de verdieping of het bijgebouw: 70 liter per dag, pompklaar." },
      { key: "ttv4500", waarom: "Bij grote gelijkvloerse oppervlaktes verdeelt deze ventilator de droge lucht over de hele bouwlaag." },
    ],
    levering: {
      kop: "Leveren in Ranst: binnen 24 uur, in een ronde gepland",
      alinea:
        "Een vijfentwintigtal minuten rijden, gepland als onderdeel van een ronde door de Noordrand. U krijgt een tijdslot en een sms een halfuur vooraf. Bij een hoeve of een bijgebouw vragen we vooraf het volume en of de ruimte dicht te krijgen is.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een halfuur rijden. Voor één los toestel kan dat lonen; voor de volumes die hier gangbaar zijn is leveren doorgaans de betere rekensom.",
    },
    buren: ["wommelgem", "schilde", "zandhoven", "wijnegem"],
    faq: [
      {
        q: "Hoe droog ik een kruipruimte onder mijn woning?",
        a: "Met een adsorptiedroger die buiten staat en droge lucht naar binnen blaast via een slang door een bestaand luik. U hoeft er zelf niet in. Een condensdroger haalt daar weinig uit, want een kruipruimte komt zelden boven 15 °C.",
      },
      {
        q: "Hoeveel capaciteit heb ik nodig voor een open leefruimte?",
        a: "Meer dan de oppervlakte doet vermoeden. Wij rekenen op volume in kubieke meter: een leefruimte van 60 m² met een plafond van vier meter bevat anderhalf keer zoveel lucht als dezelfde oppervlakte onder een gewoon plafond.",
      },
      {
        q: "Betaal ik een kilometerkost voor Ranst?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket. De rit telt mee in onze planning, niet in uw factuur.",
      },
      {
        q: "Hoe snel kunnen jullie leveren?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer een halfuur en we plannen hem in een ronde, dus boekt u voor de middag, dan staat het doorgaans de volgende werkdag.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "schilde",
    title: "Bouwdroger huren in Schilde - op 25 minuten | Vernast",
    description:
      "Bouwdroger huren in Schilde: villa's op ruime, beboste percelen met grote volumes. Binnen 24 uur geleverd, geplaatst en ingesteld. Geen waarborg.",
    h1: "Bouwdroger huren in Schilde",
    kicker: "Noordrand · villa's op beboste percelen",
    rit: { afstand: "circa 19 km", tijd: "ongeveer vijfentwintig minuten" },
    intro: [
      "Schilde is villagebied: ruime, vaak beboste percelen, woningen uit de jaren zestig tot tachtig, en een kelderverdieping die niet zelden het hele grondvlak beslaat. Die generatie wordt nu grondig gerenoveerd.",
      "Dat zijn grote luchtvolumes om droog te krijgen. Ons magazijn ligt op een vijfentwintigtal minuten, en de technieker komt hier meestal met meer capaciteit dan de Calculator voor één bouwlaag berekent.",
    ],
    bouw: {
      kop: "Villa's met een volledige kelderverdieping",
      alineas: [
        "Een kelder die het hele grondvlak beslaat is in de winter zelden warmer dan tien graden, en onder 15 °C haalt een condensdroger nog maar een fractie van zijn capaciteit. We zetten er dan een kachel naast om de ruimte eerst op temperatuur te brengen, of we kiezen meteen voor een adsorptiedroger die ook in de koude blijft werken.",
        "Boven de kelder gaat het om volume: nieuw pleisterwerk over drie bouwlagen, een nieuwe chape op het gelijkvloers. Hier plaatsen we eerder twee middelgrote toestellen per bouwlaag dan één groot, en vrijwel altijd met een ventilator om de droge lucht tot in de verste kamer te krijgen.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "Voor de grote volumes van een villa: 110 liter per dag en bereik tot ongeveer 600 m³." },
      { key: "revolution", waarom: "Voor de kelderverdieping die in de winter niet op temperatuur komt, daar waar een condensdroger het laat afweten." },
      { key: "ttk350", waarom: "Per bouwlaag of voor het bijgebouw: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "radiaal2250", waarom: "De radiaalventilator voor lange gangen en een verdieping onder het dak: hij blaast gericht en ver." },
    ],
    levering: {
      kop: "Leveren in Schilde: binnen 24 uur, met een pakket op maat",
      alinea:
        "Een vijfentwintigtal minuten rijden. Bij een villa met een grote kelder overlegt de technieker vooraf welk pakket er nodig is; hij verdeelt de toestellen per bouwlaag, plaatst waar nodig een ventilator en sluit de condensafvoer aan.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een halfuur rijden. Voor de volumes die hier gangbaar zijn is leveren doorgaans de betere keuze: de rit zit al in de pakketprijs en de technieker plaatst meteen alles.",
    },
    buren: ["schoten", "ranst", "zoersel", "brasschaat"],
    faq: [
      {
        q: "Werkt een bouwdroger in een koude kelderverdieping?",
        a: "Een condensdroger verliest onder 15 °C het grootste deel van zijn rendement, en dat is in de winter precies de temperatuur van zo'n kelder. We combineren hem dan met een elektrische kachel, of we zetten een adsorptiedroger in die met een droogmiddel werkt en ook in de koude vocht opneemt.",
      },
      {
        q: "Hoeveel toestellen heb ik nodig voor een villa met drie bouwlagen?",
        a: "Doorgaans twee middelgrote drogers per bouwlaag in plaats van één groot toestel, met een ventilator om de verste kamers te bereiken. Voor een villa met een volledige kelder komt daar meestal nog capaciteit bij; dat overlegt de technieker vooraf.",
      },
      {
        q: "Draagt de technieker de toestellen naar boven?",
        a: "Ja, en dat zit in de prijs. Bij een vaste trap of een lift is elke verdieping inbegrepen. Alleen wanneer een toestel via een ladder naar boven moet, rekenen we een toeslag per verdieping.",
      },
      {
        q: "Hoe snel staan jullie in Schilde?",
        a: "Binnen 24 uur na uw boeking, in een ronde door de Noordrand gepland. U krijgt een tijdslot en een sms een halfuur voordat de technieker vertrekt.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "zoersel",
    title: "Bouwdroger huren in Zoersel - op 30 minuten | Vernast",
    description:
      "Bouwdroger huren in Zoersel, Halle en Sint-Antonius: bosrijke villawijken op zandgrond. Binnen 24 uur geleverd, geplaatst en ingesteld.",
    h1: "Bouwdroger huren in Zoersel",
    kicker: "Noordrand · Zoersel, Halle en Sint-Antonius",
    rit: { afstand: "circa 25 km", tijd: "ongeveer een halfuur" },
    intro: [
      "Zoersel bestaat uit drie bosrijke kernen: Zoersel, Halle en Sint-Antonius. De bebouwing is open, de percelen zijn ruim en de bodem is zand, dat goed draineert. Kelderproblemen zijn hier dus zeldzamer dan in de valleien verderop.",
      "Wat we hier wél tegenkomen is volume en koude. Ons magazijn ligt op een halfuur; we plannen deze streek in een ronde.",
    ],
    bouw: {
      kop: "Open bebouwing op zandgrond, met bijgebouwen",
      alineas: [
        "Een vrijstaande woning droogt niet sneller omdat hij groter is: hij heeft meer capaciteit nodig. Wij rekenen op volume in kubieke meter en niet op oppervlakte, en een open leefruimte met een hoog plafond bevat veel meer lucht dan dezelfde vierkante meters onder een normaal plafond.",
        "Veel werven hier bevatten een bijgebouw dat mee wordt afgewerkt: een schuur die bureau wordt, een garage die leefruimte wordt. Die ruimtes zijn tijdens de werken zelden verwarmd, en onder 15 °C verliest een condensdroger het grootste deel van zijn rendement. Dan gaat er een kachel mee, of meteen een adsorptiedroger.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "Voor de volumes van een vrijstaande woning: 110 liter per dag en bereik tot ongeveer 600 m³." },
      { key: "ttk350", waarom: "De aanvulling voor de verdieping, de garage of het bijgebouw: 70 liter per dag, pompklaar." },
      { key: "ttv4500", waarom: "In een woning met lange gangen blijft droge lucht hangen waar het toestel staat. Deze ventilator brengt ze tot in de verste kamer." },
      { key: "teddh30", waarom: "Voor een onverwarmd bijgebouw of een winterwerf: de kachel brengt de ruimte op werkingstemperatuur. Vraagt 400 V." },
    ],
    levering: {
      kop: "Leveren in Zoersel: binnen 24 uur, in een ronde gepland",
      alinea:
        "Een halfuur rijden. U krijgt een tijdslot en een sms een halfuur vooraf. Op een winterwerf controleert de technieker eerst of de werfkast 400 V levert voor de kachel; zonder krachtstroom kiezen we een andere opstelling.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een halfuur rijden. Voor één los toestel dat u langere tijd houdt kan dat lonen; voor een volledige woning is leveren de betere rekensom.",
    },
    buren: ["schilde", "malle", "brecht", "zandhoven"],
    faq: [
      {
        q: "Hoe droog ik een schuur of garage die niet verwarmd is?",
        a: "Met een adsorptiedroger, of met een condensdroger plus een kachel. Een adsorptiedroger werkt met een droogmiddel in plaats van met condensatie en blijft ook bij lage temperaturen vocht opnemen. Welke van de twee past, bekijkt de technieker ter plaatse.",
      },
      {
        q: "Heb ik krachtstroom nodig?",
        a: "Alleen voor de kachels van 20 en 30 kW: die draaien op 400 V en niet op een gewoon stopcontact. Controleer dus vóór u reserveert of die aansluiting aanwezig is. De bouwdrogers en ventilatoren zelf draaien gewoon op 230 V.",
      },
      {
        q: "Hoeveel toestellen heb ik nodig voor een vrijstaande woning?",
        a: "Voor een gelijkvloers van 120 tot 150 m² rekenen we doorgaans op twee drogers met een ventilator per droogzone, en vaak een derde voor de verdieping of het bijgebouw. De Calculator rekent op volume in kubieke meter.",
      },
      {
        q: "Wat kost de levering in Zoersel?",
        a: "Niets extra. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van elk droogpakket; de afstand verrekenen we niet.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "zandhoven",
    title: "Bouwdroger huren in Zandhoven - op 30 minuten | Vernast",
    description:
      "Bouwdroger huren in Zandhoven: landelijke kernen aan de Kleine Nete, hoeves en vrijstaande woningen. Binnen 24 uur geleverd en geplaatst.",
    h1: "Bouwdroger huren in Zandhoven",
    kicker: "Noordrand · aan de Kleine Nete",
    rit: { afstand: "circa 26 km", tijd: "ongeveer een halfuur" },
    intro: [
      "Zandhoven ligt aan de Kleine Nete, met landelijke kernen als Massenhoven, Pulderbos en Viersel. De bebouwing is open en de percelen zijn ruim; tussen de verkavelingen staan nog oude hoeves met dikke, massieve muren.",
      "Langs de Nete ligt het land lager en staat het grondwater hoger. Ons magazijn ligt op een halfuur; we plannen deze streek in een ronde.",
    ],
    bouw: {
      kop: "Hoeves en vrijstaande woningen, met de Nete ernaast",
      alineas: [
        "Een oude hoeve heeft massieve muren zonder spouw en geen waterkering in de muurvoet. Het vocht uit de grond kruipt dan via de baksteen omhoog en tekent zich binnen af als een band onderaan de muur. Dat is opstijgend vocht: drogen haalt het uit de ruimte, maar de bron blijft. Massieve muren geven hun vocht bovendien traag af, dus telt luchtbeweging langs het oppervlak hier meer dan extra capaciteit.",
        "In de verkavelingen gaat het om gewoon bouwvocht, en dat verdwijnt definitief: een nieuwe chape, pleisterwerk over twee bouwlagen, een aanbouw. Met een toestel per bouwlaag en een ventilator die de lucht laat rondgaan is dat weken in plaats van maanden.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "Voor een woning of een hoeve in renovatie: 70 liter per dag en bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "Massieve muren geven hun vocht traag af. Luchtbeweging langs het oppervlak versnelt dat merkbaar." },
      { key: "ttk650", waarom: "Voor een groot gelijkvloers of een bijgebouw: 110 liter per dag, bereik tot ongeveer 600 m³." },
      { key: "teddh30", waarom: "Voor een onverwarmde hoeve of schuur in de winter: de kachel brengt de ruimte op werkingstemperatuur. Vraagt 400 V." },
    ],
    levering: {
      kop: "Leveren in Zandhoven: binnen 24 uur, in een ronde gepland",
      alinea:
        "Een halfuur rijden. U krijgt een tijdslot en een sms een halfuur vooraf. Bij een hoeve vragen we vooraf het volume in kubieke meter en of de ruimte dicht te krijgen is: een droger tegen een open poort werkt tegen de buitenlucht in.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een halfuur rijden. Voor één los toestel dat u langere tijd houdt kan dat lonen; voor een volledig pakket zit de rit al in de prijs.",
    },
    buren: ["ranst", "zoersel", "nijlen", "herentals"],
    faq: [
      {
        q: "Mijn muren blijven onderaan vochtig. Is dat bouwvocht?",
        a: "Waarschijnlijk niet. Opstijgend vocht tekent zich af als een band tot ongeveer een halve meter hoog, vaak met een witte zoutrand en afbladderende verf. Bouwvocht zit gelijkmatig in de hele ruimte en verdwijnt vanzelf naarmate het droogt. Onze technieker meet het bij de levering; dat kost u niets extra.",
      },
      {
        q: "Duurt drogen langer bij dikke, massieve muren?",
        a: "Het vocht komt er trager uit, ja. Daarom zetten we hier bijna altijd een ventilator bij, die de verzadigde luchtlaag langs het muuroppervlak wegblaast. Wat telt is de meting: wij meten bij de start en bij de oplevering.",
      },
      {
        q: "Kunnen jullie ook een schuur of stal drogen?",
        a: "Ja. We vragen vooraf het volume in kubieke meter, de vloeropbouw en of de ruimte dicht te krijgen is. Is ze niet te verwarmen, dan zetten we een adsorptiedroger in die ook bij lage temperaturen vocht opneemt.",
      },
      {
        q: "Hoe snel staan jullie in Zandhoven?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer een halfuur en we plannen hem in een ronde; boekt u voor de middag, dan staat het doorgaans de volgende werkdag.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "malle",
    title: "Bouwdroger huren in Malle - Oost- en Westmalle | Vernast",
    description:
      "Bouwdroger huren in Oostmalle en Westmalle: landelijke kernen op zandgrond, met ruime woningen en bijgebouwen. Binnen 24 uur geleverd.",
    h1: "Bouwdroger huren in Malle",
    kicker: "Noorderkempen · Oostmalle en Westmalle",
    rit: { afstand: "circa 28 km", tijd: "ongeveer een halfuur" },
    intro: [
      "Malle bestaat uit Oostmalle en Westmalle, twee landelijke kernen op de zandgrond van de Noorderkempen. De bebouwing is open, de percelen zijn ruim, en tussen de woningen staan hoeves en bijgebouwen die mee worden verbouwd.",
      "Ons magazijn in Aartselaar ligt op een halfuur; we rijden de Noorderkempen in een ronde, dus u krijgt een tijdslot in plaats van een hele dag.",
    ],
    bouw: {
      kop: "Open bebouwing op zand, met bijgebouwen die mee verbouwd worden",
      alineas: [
        "Zandgrond draineert goed, dus kelders zijn hier minder vaak het probleem dan in een vallei. Het werk is meestal bouwvocht uit een renovatie of een nieuwbouw: een chape over het hele gelijkvloers, pleisterwerk over twee bouwlagen. Dat verdwijnt definitief, maar het vraagt capaciteit naar volume en niet naar oppervlakte.",
        "Bij een bijgebouw komt er iets bij: zo'n ruimte is tijdens de werken zelden verwarmd. Onder 15 °C verliest een condensdroger het grootste deel van zijn rendement, dus zetten we er in de winter een elektrische kachel bij of kiezen we meteen voor een adsorptiedroger.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "Voor de volumes van een vrijstaande woning: 110 liter per dag en bereik tot ongeveer 600 m³." },
      { key: "ttk350", waarom: "De aanvulling voor de verdieping, de garage of het bijgebouw: 70 liter per dag, pompklaar." },
      { key: "ttv4500", waarom: "In een woning met lange gangen blijft droge lucht hangen waar het toestel staat. Deze ventilator brengt ze tot in de verste kamer." },
      { key: "teddh30", waarom: "Voor een onverwarmd bijgebouw of een winterwerf: de kachel brengt de ruimte op werkingstemperatuur. Vraagt 400 V." },
    ],
    levering: {
      kop: "Leveren in Malle: binnen 24 uur, in een ronde gepland",
      alinea:
        "Een halfuur rijden. U krijgt een tijdslot en een sms een halfuur vooraf. Op een winterwerf controleert de technieker eerst of de werfkast 400 V levert voor de kachel.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een halfuur rijden. Voor één los toestel kan dat lonen; voor een volledige woning is leveren doorgaans de betere rekensom, want dan zit de rit al in de prijs.",
    },
    buren: ["zoersel", "brecht", "lille", "beerse"],
    faq: [
      {
        q: "Wat als het vriest tijdens de droging?",
        a: "Dan verwarmen we mee. Een condensdroger verliest onder 15 °C het grootste deel van zijn rendement, dus in een onverwarmde ruwbouw of een bijgebouw zetten we er een elektrische kachel bij. Ramen dicht, kachel aan, droger aan: dat is de volgorde.",
      },
      {
        q: "Hoeveel capaciteit heb ik nodig?",
        a: "Dat hangt af van het volume in kubieke meter, niet van de oppervlakte. Een open leefruimte met een hoog plafond bevat veel meer lucht dan dezelfde vierkante meters onder een gewoon plafond. De Calculator rekent dat uit; u hoeft niets zelf te combineren.",
      },
      {
        q: "Betaal ik een kilometerkost?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket. De rit telt mee in onze planning, niet in uw factuur.",
      },
      {
        q: "Hoe snel staan jullie in Malle?",
        a: "Binnen 24 uur na uw boeking. We rijden de Noorderkempen in een ronde; boekt u voor de middag, dan staat het doorgaans de volgende werkdag.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "brecht",
    title: "Bouwdroger huren in Brecht - op 30 minuten | Vernast",
    description:
      "Bouwdroger huren in Brecht, Sint-Lenaarts en Sint-Job: open bebouwing op zandgrond met veel nieuwbouw. Binnen 24 uur geleverd en geplaatst.",
    h1: "Bouwdroger huren in Brecht",
    kicker: "Noorderkempen · Brecht, Sint-Lenaarts en Sint-Job",
    rit: { afstand: "circa 29 km", tijd: "ongeveer een halfuur" },
    intro: [
      "Brecht is een van de grootste gemeenten van de provincie in oppervlakte, met drie kernen: Brecht, Sint-Lenaarts en Sint-Job-in-'t-Goor. Er wordt hier stevig nieuw gebouwd, op ruime kavels en met grote volumes.",
      "Ons magazijn ligt op een halfuur. We rijden de Noorderkempen in een ronde, dus u krijgt een tijdslot en een sms een halfuur vooraf.",
    ],
    bouw: {
      kop: "Nieuwbouw op ruime kavels, met de chape als traagste laag",
      alineas: [
        "In een nieuwbouw wordt de chape van het hele gelijkvloers in één keer gelegd, en die zet per vierkante meter tientallen liters water in de constructie. Door de vloerplaat kan dat niet weg, dus moet het er langs boven uit. Zonder droging duurt dat maanden; met een pakket van twee of drie toestellen zijn dat weken, en de vloerder krijgt een gemeten einddatum in plaats van een inschatting.",
        "De tweede factor is temperatuur. Een ruwbouw in de Kempen is in de winter zelden warmer dan tien graden, en onder 15 °C haalt een condensdroger nog maar een fractie van zijn capaciteit. Tussen november en maart gaat hier dan ook vaker wel dan niet een elektrische kachel mee in het pakket.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "Voor de volumes van een vrijstaande woning: 110 liter per dag en bereik tot ongeveer 600 m³." },
      { key: "ttk350", waarom: "De aanvulling voor de verdieping, de garage of het bijgebouw: 70 liter per dag, pompklaar." },
      { key: "ttv4500", waarom: "In een woning met lange gangen blijft droge lucht hangen waar het toestel staat. Deze ventilator brengt ze tot in de verste kamer." },
      { key: "teddh30", waarom: "Voor een onverwarmd bijgebouw of een winterwerf: de kachel brengt de ruimte op werkingstemperatuur. Vraagt 400 V." },
    ],
    levering: {
      kop: "Leveren in Brecht: binnen 24 uur, in een ronde gepland",
      alinea:
        "Een halfuur rijden. De technieker verdeelt de toestellen over droogzones en sluit de condensafvoer aan op een vloerput of de aansluiting van de toekomstige wasmachine. Op een werf zonder werfkast vragen we vooraf of er een vrij stopcontact van 16 ampère is.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een halfuur rijden. Voor één los toestel kan dat lonen; voor een volledige nieuwbouw is leveren de betere rekensom, want dan plaatst de technieker meteen alles.",
    },
    buren: ["zoersel", "malle", "wuustwezel", "kalmthout"],
    faq: [
      {
        q: "Hoe lang moet een chape in een nieuwbouw drogen?",
        a: "Dat beslist de meting, niet de kalender. Met een droogpakket rekent u voor een chape van zes centimeter doorgaans op een week of drie; zonder droger loopt dat in een gesloten, onverwarmde woning op tot maanden.",
      },
      {
        q: "Wat als de woning nog niet verwarmd is?",
        a: "Dan zetten we er een elektrische kachel bij die de ruimte op werkingstemperatuur brengt, want onder 15 °C haalt een condensdroger nog maar een fractie van zijn capaciteit. Die kachel draait op 400 V krachtstroom; de technieker controleert bij de levering of de werfkast die levert.",
      },
      {
        q: "Twee toestellen op één verlengdraad, kan dat?",
        a: "Liever niet: dat is de meest voorkomende reden dat een zekering 's nachts uitvalt, en dan staat de droging stil tot iemand het merkt. Op een werf zonder werfkast vragen we vooraf of er een vrij stopcontact van 16 ampère is.",
      },
      {
        q: "Rekenen jullie een leveringskost aan voor Brecht?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket. De rit telt mee in onze planning, niet in uw factuur.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "kapellen",
    title: "Bouwdroger huren in Kapellen - op 25 minuten | Vernast",
    description:
      "Bouwdroger huren in Kapellen: villa's op ruime percelen met een volledige kelderverdieping. Binnen 24 uur geleverd, geplaatst en ingesteld.",
    h1: "Bouwdroger huren in Kapellen",
    kicker: "Noordrand · villa's met kelderverdieping",
    rit: { afstand: "circa 23 km", tijd: "ongeveer vijfentwintig minuten" },
    intro: [
      "Kapellen is residentieel en ruim opgezet: villa's op grote percelen, veel groen, en onder een flink deel van die woningen een volledige kelderverdieping. Die generatie woningen gaat nu door een grondige renovatie.",
      "Ons magazijn in Aartselaar ligt op een vijfentwintigtal minuten. Voor een gewone droging is de volgende werkdag de regel.",
    ],
    bouw: {
      kop: "Ruime villa's, en een kelder onder het hele grondvlak",
      alineas: [
        "Een kelder die het hele grondvlak beslaat is een groot volume op zich, en in de winter zelden warmer dan tien graden. Onder 15 °C haalt een condensdroger nog maar een fractie van zijn capaciteit, dus zetten we er een kachel naast of kiezen we meteen voor een adsorptiedroger die ook in de koude blijft werken.",
        "Boven de kelder is volume de bepalende factor: nieuw pleisterwerk over meerdere bouwlagen, een nieuwe chape op het gelijkvloers. Wij rekenen op kubieke meter en niet op oppervlakte, en plaatsen hier eerder twee middelgrote toestellen per bouwlaag dan één groot.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "Voor de volumes van een villa: 110 liter per dag en bereik tot ongeveer 600 m³." },
      { key: "revolution", waarom: "Voor de kelderverdieping die in de winter niet op temperatuur komt, daar waar een condensdroger het laat afweten." },
      { key: "ttk350", waarom: "Per bouwlaag of voor het bijgebouw: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "In een woning met lange gangen brengt deze ventilator de droge lucht tot in de verste kamer." },
    ],
    levering: {
      kop: "Leveren in Kapellen: binnen 24 uur, met een pakket op maat",
      alinea:
        "Een vijfentwintigtal minuten rijden. Bij een villa met een grote kelder overlegt de technieker vooraf welk pakket nodig is. Hij verdeelt de toestellen per bouwlaag en sluit de condensafvoer aan; u hoeft niets te tillen.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een halfuur rijden. Voor de volumes die hier gangbaar zijn is leveren doorgaans de betere keuze: de rit zit al in de pakketprijs.",
    },
    buren: ["brasschaat", "stabroek", "kalmthout", "ekeren"],
    faq: [
      {
        q: "Werkt een bouwdroger in een koude kelderverdieping?",
        a: "Een condensdroger verliest onder 15 °C het grootste deel van zijn rendement, en dat is in de winter precies de temperatuur van zo'n kelder. We combineren hem dan met een elektrische kachel, of we zetten een adsorptiedroger in die met een droogmiddel werkt.",
      },
      {
        q: "Hoeveel toestellen heb ik nodig voor een villa met kelder?",
        a: "Doorgaans twee middelgrote drogers per bouwlaag met een ventilator erbij, plus capaciteit voor de kelder. Wij rekenen op volume in kubieke meter, niet op oppervlakte; dat overlegt de technieker vooraf.",
      },
      {
        q: "Hoe snel staan jullie in Kapellen?",
        a: "Binnen 24 uur, meestal de volgende werkdag: het magazijn ligt op een vijfentwintigtal minuten. Bij waterschade bellen we meteen terug om te kijken wat dezelfde dag nog kan.",
      },
      {
        q: "Wat kost de levering?",
        a: "Niets extra. Levering, plaatsing, de vochtmeting bij de start en bij de oplevering en de ophaling zitten in de prijs van elk droogpakket. De enige mogelijke toeslag is die voor een verdieping waar toestellen via een ladder naar boven moeten.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "stabroek",
    title: "Bouwdroger huren in Stabroek - polder | Vernast",
    description:
      "Bouwdroger huren in Stabroek en Hoevenen: polderklei met hoog grondwater en natte kelders. Binnen 24 uur geleverd, geplaatst en ingesteld.",
    h1: "Bouwdroger huren in Stabroek",
    kicker: "Polder bij de haven · Stabroek en Hoevenen",
    rit: { afstand: "circa 27 km", tijd: "ongeveer een halfuur" },
    intro: [
      "Stabroek ligt in de polder tegen de haven, met Hoevenen en Putte erbij. De bodem is klei, het land ligt laag en het grondwater staat hoog: kelders en kruipruimtes zijn hier zelden lang droog.",
      "Dat maakt dit een van de gemeenten waar we het vaakst voor vocht komen dat er al zat, en niet alleen voor bouwvocht. Ons magazijn ligt op een halfuur.",
    ],
    bouw: {
      kop: "Polderklei, hoog grondwater en natte kruipruimtes",
      alineas: [
        "Klei houdt water vast waar zand het doorlaat. Een woning zonder waterkering in de muurvoet zuigt dat op via de baksteen, en binnen komt het terug als een band onderaan de muur met afbladderende verf. Een bouwdroger haalt dat vocht uit de ruimte, maar zolang er geen waterkering ligt, blijft het bijkomen.",
        "Een kruipruimte in de polder is bijna altijd vochtig: geen doorstroming, een bodem die vocht afgeeft, en dat trekt via de vloer naar boven als een muffe geur in de woonkamer. Zo'n ruimte droogt u met een adsorptiedroger die via slangen door een bestaand luik blaast, zodat u er zelf niet in hoeft.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "Voor de kruipruimte of een kelder die niet te verwarmen is: droge lucht via slangen door een bestaand luik." },
      { key: "ttk350", waarom: "Voor een woning in renovatie of na water in de kelder: 70 liter per dag, pompklaar." },
      { key: "ttv4500", waarom: "Vlak boven een natte vloer blijft een laag verzadigde lucht hangen. Deze ventilator blaast ze weg." },
      { key: "teddh30", waarom: "Na hoogwater in de winter is een kelder koud. Deze kachel brengt hem op werkingstemperatuur zodat de drogers rendement halen." },
    ],
    levering: {
      kop: "Leveren in Stabroek: binnen 24 uur, in een ronde gepland",
      alinea:
        "Een halfuur rijden, gepland als onderdeel van een ronde door de polder. De technieker meet bij aankomst waar het vocht zit: wat onder een dekvloer of in een kruipruimte zit, droogt niet mee met de ruimte erboven.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een halfuur rijden. Voor één los toestel kan dat lonen; bij een vochtige kruipruimte is leveren beter, want dan plaatst de technieker de slangen meteen goed.",
    },
    buren: ["kapellen", "ekeren", "kalmthout", "brasschaat"],
    faq: [
      {
        q: "Mijn woonkamer ruikt muf. Waar komt dat vandaan?",
        a: "Vaak uit de kruipruimte eronder. Die staat in de polder zelden droog: er is geen doorstroming, de bodem geeft vocht af en dat trekt via de vloer naar boven. U droogt zo'n ruimte met een adsorptiedroger die via slangen door een bestaand luik blaast; u hoeft er zelf niet in.",
      },
      {
        q: "Komt het vocht terug na de droging?",
        a: "Bouwvocht niet, dat verdwijnt definitief. Komt het via de bodem of de muurvoet, dan blijft het bijkomen zolang de bron er is. Drogen is dan het tweede deel van de oplossing; het eerste is de bron, en daar kijkt onze zusterfirma Vernast Vochtbestrijding naar.",
      },
      {
        q: "Werkt een condensdroger in een koude kelder?",
        a: "Onder 15 °C haalt hij nog maar een fractie van zijn capaciteit. We zetten er dan een kachel bij, of we kiezen meteen voor een adsorptiedroger: die werkt met een droogmiddel en blijft ook in de koude vocht opnemen.",
      },
      {
        q: "Hoe snel staan jullie in Stabroek?",
        a: "Binnen 24 uur na uw boeking, in een ronde door de polder gepland. U krijgt een tijdslot en een sms een halfuur vooraf; bij waterschade bellen we meteen terug.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "kalmthout",
    title: "Bouwdroger huren in Kalmthout - op 35 minuten | Vernast",
    description:
      "Bouwdroger huren in Kalmthout: villa's in het groen op zandgrond, ruime volumes en bijgebouwen. Binnen 24 uur geleverd en geplaatst.",
    h1: "Bouwdroger huren in Kalmthout",
    kicker: "Noorderkempen · villa's op de zandrug",
    rit: { afstand: "circa 32 km", tijd: "ongeveer vijfendertig minuten" },
    intro: [
      "Kalmthout ligt op de zandrug tegen de heide: ruime, vaak beboste percelen met vrijstaande woningen, en een bodem die goed draineert. Kelderproblemen zijn hier zeldzamer dan in de polder een paar kilometer verderop.",
      "Wat blijft is volume en koude. Ons magazijn ligt op een vijfendertigtal minuten; we rijden de Noorderkempen in een ronde.",
    ],
    bouw: {
      kop: "Vrijstaande woningen op zand, met veel volume",
      alineas: [
        "Een vrijstaande woning heeft meer capaciteit nodig dan een rijhuis, niet omdat ze trager droogt maar omdat er meer lucht in zit. Wij rekenen op volume in kubieke meter: een open leefruimte met een hoog plafond telt zwaarder dan extra vierkante meters onder een gewoon plafond.",
        "De zandgrond draineert goed, dus het werk hier is bijna altijd bouwvocht uit een renovatie of nieuwbouw, en dat verdwijnt definitief. Alleen in de winter komt er iets bij: een ruwbouw of een bijgebouw komt dan zelden boven tien graden, en onder 15 °C zakt het rendement van elke condensdroger.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "Voor de volumes van een vrijstaande woning: 110 liter per dag en bereik tot ongeveer 600 m³." },
      { key: "ttk350", waarom: "De aanvulling voor de verdieping, de garage of het bijgebouw: 70 liter per dag, pompklaar." },
      { key: "ttv4500", waarom: "In een woning met lange gangen blijft droge lucht hangen waar het toestel staat. Deze ventilator brengt ze tot in de verste kamer." },
      { key: "teddh30", waarom: "Voor een onverwarmd bijgebouw of een winterwerf: de kachel brengt de ruimte op werkingstemperatuur. Vraagt 400 V." },
    ],
    levering: {
      kop: "Leveren in Kalmthout: binnen 24 uur, in een ronde gepland",
      alinea:
        "Een vijfendertigtal minuten rijden. U krijgt een tijdslot en een sms een halfuur vooraf. Op een winterwerf controleert de technieker eerst of de werfkast 400 V levert voor de kachel.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een klein uur rijden. Voor een volledig droogpakket is dat zelden de betere keuze: de levering zit al in de prijs en de technieker plaatst meteen alles.",
    },
    buren: ["kapellen", "wuustwezel", "essen", "brecht"],
    faq: [
      {
        q: "Hoeveel toestellen heb ik nodig voor een vrijstaande woning?",
        a: "Voor een gelijkvloers van 120 tot 150 m² rekenen we doorgaans op twee drogers met een ventilator per droogzone, en vaak een derde voor de verdieping of het bijgebouw. De Calculator rekent op volume in kubieke meter, niet op oppervlakte.",
      },
      {
        q: "Wat als de werf in de winter niet verwarmd is?",
        a: "Dan zetten we er een elektrische kachel bij die de ruimte op werkingstemperatuur brengt, want onder 15 °C haalt een condensdroger nog maar een fractie van zijn capaciteit. De kachel vraagt 400 V krachtstroom.",
      },
      {
        q: "Betaal ik een kilometerkost?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket, ook voor de verste gemeenten. De rit telt mee in onze planning, niet in uw factuur.",
      },
      {
        q: "Hoe snel staan jullie in Kalmthout?",
        a: "Binnen 24 uur na uw boeking. We rijden de Noorderkempen in een ronde; boekt u voor de middag, dan staat het doorgaans de volgende werkdag.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "wuustwezel",
    title: "Bouwdroger huren in Wuustwezel - op 35 minuten | Vernast",
    description:
      "Bouwdroger huren in Wuustwezel en Loenhout: landelijke kernen met hoeves en vrijstaande woningen. Binnen 24 uur geleverd en geplaatst.",
    h1: "Bouwdroger huren in Wuustwezel",
    kicker: "Noorderkempen · Wuustwezel en Loenhout",
    rit: { afstand: "circa 34 km", tijd: "ongeveer vijfendertig minuten" },
    intro: [
      "Wuustwezel is een landelijke grensgemeente met Wuustwezel, Loenhout en Gooreind als kernen. De percelen zijn ruim, er staan nog veel hoeves, en wat er nieuw gebouwd wordt is doorgaans vrijstaand.",
      "Ons magazijn in Aartselaar ligt op een vijfendertigtal minuten. We rijden de Noorderkempen in een ronde, dus u krijgt een tijdslot in plaats van een hele dag.",
    ],
    bouw: {
      kop: "Hoeves en vrijstaande nieuwbouw, met bijgebouwen",
      alineas: [
        "Een oude hoeve heeft massieve muren zonder spouw en zelden een waterkering in de muurvoet. Het vocht uit de grond kruipt dan via de baksteen omhoog. Massieve muren geven hun vocht bovendien traag af, dus telt luchtbeweging langs het oppervlak hier meer dan extra capaciteit.",
        "Bij de nieuwbouw gaat het om bouwvocht en om volume: een chape over het hele gelijkvloers, pleisterwerk over twee bouwlagen, vaak met een bijgebouw dat mee wordt afgewerkt. Zo'n bijgebouw is tijdens de werken zelden verwarmd, en dan gaat er in de winter een kachel mee.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "Voor de volumes van een vrijstaande woning: 110 liter per dag en bereik tot ongeveer 600 m³." },
      { key: "ttk350", waarom: "De aanvulling voor de verdieping, de garage of het bijgebouw: 70 liter per dag, pompklaar." },
      { key: "ttv4500", waarom: "In een woning met lange gangen blijft droge lucht hangen waar het toestel staat. Deze ventilator brengt ze tot in de verste kamer." },
      { key: "teddh30", waarom: "Voor een onverwarmd bijgebouw of een winterwerf: de kachel brengt de ruimte op werkingstemperatuur. Vraagt 400 V." },
    ],
    levering: {
      kop: "Leveren in Wuustwezel: binnen 24 uur, in een ronde gepland",
      alinea:
        "Een vijfendertigtal minuten rijden. U krijgt een tijdslot en een sms een halfuur vooraf. Bij een hoeve of een schuur vragen we vooraf het volume in kubieke meter en of de ruimte dicht te krijgen is.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een klein uur rijden. Voor een volledig droogpakket is leveren de betere keuze; voor één los toestel dat u langere tijd houdt kan afhalen lonen.",
    },
    buren: ["brecht", "kalmthout", "essen", "hoogstraten"],
    faq: [
      {
        q: "Kunnen jullie een hoeve of een schuur drogen?",
        a: "Ja. We vragen vooraf het volume in kubieke meter, de vloeropbouw en of de ruimte dicht te krijgen is: een droger tegen een open poort werkt tegen de buitenlucht in. Is de ruimte niet te verwarmen, dan zetten we een adsorptiedroger in.",
      },
      {
        q: "Duurt drogen langer bij dikke muren?",
        a: "Het vocht komt er trager uit, ja. Daarom zetten we hier bijna altijd een ventilator bij, die de verzadigde luchtlaag langs het muuroppervlak wegblaast. Wat telt is de meting, niet de kalender.",
      },
      {
        q: "Betaal ik meer omdat ik ver van jullie magazijn woon?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket. Voor de verste gemeenten vragen we liefst een dag speling in de planning, maar de kilometers komen niet op uw factuur.",
      },
      {
        q: "Hoe snel staan jullie in Wuustwezel?",
        a: "Binnen 24 uur na uw boeking. We rijden de Noorderkempen in een ronde; boekt u voor de middag, dan staat het doorgaans de volgende werkdag.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "essen",
    title: "Bouwdroger huren in Essen - Noorderkempen | Vernast",
    description:
      "Bouwdroger huren in Essen: landelijke grensgemeente op zandgrond, met ruime woningen en bijgebouwen. Binnen 24 uur geleverd en geplaatst.",
    h1: "Bouwdroger huren in Essen",
    kicker: "Noorderkempen · de noordelijkste gemeente",
    rit: { afstand: "circa 40 km", tijd: "ongeveer veertig minuten" },
    intro: [
      "Essen is de noordelijkste gemeente van de provincie, tegen de Nederlandse grens. Het is landelijk en ruim opgezet: vrijstaande woningen op grote percelen, hoeves, en bijgebouwen die mee worden verbouwd.",
      "Het is ook de verste rit van onze planning: veertig minuten vanuit Aartselaar. Die rit telt mee in onze planning, niet in uw factuur; voor de verste gemeenten vragen we liefst een dag speling.",
    ],
    bouw: {
      kop: "Landelijke bebouwing op zandgrond, ver van de stad",
      alineas: [
        "De zandgrond draineert goed, dus kelders zijn hier minder vaak het probleem. Het werk is bijna altijd bouwvocht uit een renovatie of nieuwbouw, en dat verdwijnt definitief: een chape over het hele gelijkvloers, pleisterwerk over twee bouwlagen, een bijgebouw dat mee wordt afgewerkt.",
        "Wat hier wél meespeelt is de winter. Een ruwbouw of een schuur komt tussen november en maart zelden boven tien graden, en onder 15 °C haalt een condensdroger nog maar een fractie van zijn capaciteit. Dan gaat er een kachel mee, of meteen een adsorptiedroger die ook in de koude blijft werken.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "Voor de volumes van een vrijstaande woning: 110 liter per dag en bereik tot ongeveer 600 m³." },
      { key: "ttk350", waarom: "De aanvulling voor de verdieping, de garage of het bijgebouw: 70 liter per dag, pompklaar." },
      { key: "ttv4500", waarom: "In een woning met lange gangen blijft droge lucht hangen waar het toestel staat. Deze ventilator brengt ze tot in de verste kamer." },
      { key: "teddh30", waarom: "Voor een onverwarmd bijgebouw of een winterwerf: de kachel brengt de ruimte op werkingstemperatuur. Vraagt 400 V." },
    ],
    levering: {
      kop: "Leveren in Essen: binnen 24 uur, als dagronde gepland",
      alinea:
        "Veertig minuten rijden, de verste rit van onze planning. We rijden de Noorderkempen daarom als ronde: elke werf krijgt een tijdslot en een sms een halfuur vooraf. Voor de verste adressen vragen we liefst een dag speling.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Veertig minuten heen en evenveel terug. Voor een volledig droogpakket is dat nooit de betere keuze: de levering zit al in de prijs en de technieker plaatst meteen alles. Voor één los toestel dat u langere tijd houdt, kan het wel.",
    },
    buren: ["kalmthout", "wuustwezel", "brecht", "kapellen"],
    faq: [
      {
        q: "Betaal ik een kilometerkost voor Essen?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket, ook voor de noordelijkste gemeente van de provincie. De rit telt mee in onze planning, niet in uw factuur.",
      },
      {
        q: "Hoe snel kunnen jullie hier leveren?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer veertig minuten en we plannen hem als onderdeel van een ronde; voor de verste adressen vragen we liefst een dag speling.",
      },
      {
        q: "Hoe droog ik een schuur die niet verwarmd is?",
        a: "Met een adsorptiedroger, of met een condensdroger plus een kachel. Een adsorptiedroger werkt met een droogmiddel in plaats van met condensatie en blijft ook bij lage temperaturen vocht opnemen. De kachel vraagt 400 V krachtstroom.",
      },
      {
        q: "Is afhalen hier een optie?",
        a: "Voor één los toestel dat u langere tijd houdt wel, al bent u heen en terug ruim anderhalf uur kwijt. Voor een volledig pakket is leveren altijd beter: dan zit de rit al in de prijs en staat alles geplaatst en ingesteld.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "grobbendonk",
    title: "Bouwdroger huren in Grobbendonk | Vernast",
    description:
      "Bouwdroger huren in Grobbendonk en Bouwel: kernen tussen Albertkanaal en Kleine Nete. Binnen 24 uur geleverd, geplaatst en ingesteld.",
    h1: "Bouwdroger huren in Grobbendonk",
    kicker: "Kempen · tussen kanaal en Kleine Nete",
    rit: { afstand: "circa 27 km", tijd: "ongeveer een halfuur" },
    intro: [
      "Grobbendonk ligt met Bouwel tussen het Albertkanaal en de Kleine Nete, met bedrijventerreinen aan het water en landelijke kernen ertussen. Twee soorten werven dus: bedrijfsruimtes met grote volumes, en woningen op ruime percelen.",
      "Langs de Nete ligt het land lager en staat het grondwater hoger; daar komt vocht in kelders terug na een natte periode. Ons magazijn ligt op een halfuur.",
    ],
    bouw: {
      kop: "Bedrijfsruimtes aan het kanaal, woningen aan de Nete",
      alineas: [
        "Bij een bedrijfsgebouw is de eerste vraag niet welk toestel maar of de ruimte dicht te krijgen is: een droger tegen een open poort werkt tegen de buitenlucht in. Bij stilstand die geld kost zetten we liever meer toestellen korter dan één toestel lang.",
        "Bij de woningen gaat het om bouwvocht uit een renovatie en, dichter bij de Nete, om vocht dat er al zat. Een kelder in het lagere land staat zelden lang droog, en wat in de muren is getrokken blijft er weken in zitten.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "Het werkpaard na hoogwater: 70 liter per dag, genoeg om een ondergelopen kelder of gelijkvloers in te halen." },
      { key: "ttv4500", waarom: "Water kruipt onder vloeren en achter plinten. Zonder luchtbeweging droogt dat niet; met deze ventilator wel." },
      { key: "revolution", waarom: "Voor een kelder die niet te verwarmen is: de adsorptiedroger blijft ook bij lage temperaturen vocht opnemen." },
      { key: "ttk650", waarom: "Voor een groot gelijkvloers of een bijgebouw: 110 liter per dag, bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Grobbendonk: binnen 24 uur, over de E313",
      alinea:
        "Een halfuur rijden. Bij een bedrijfsruimte vragen we vooraf het volume in kubieke meter, de vloeropbouw en of de ruimte dicht te krijgen is. Bij een woning meet de technieker bij aankomst waar het vocht zit.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een halfuur rijden. Voor één los toestel kan dat lonen; voor een volledig pakket zit de rit al in de prijs.",
    },
    buren: ["herentals", "vorselaar", "herenthout", "nijlen"],
    faq: [
      {
        q: "Kunnen jullie een loods of bedrijfsruimte drogen?",
        a: "Ja, en dat doen we regelmatig. We vragen vooraf het volume in kubieke meter, de vloeropbouw en of de ruimte dicht te krijgen is. Bij grote volumes zetten we meerdere drogers met ventilatoren in plaats van één toestel langer te laten staan: dat is sneller en meestal goedkoper, omdat u minder dagen huurt.",
      },
      {
        q: "Mijn kelder is ondergelopen. Wat doe ik eerst?",
        a: "Eerst het staande water weg en nat materiaal eruit: tapijt, isolatie, kartonnen dozen. Pas daarna heeft drogen zin, want een bouwdroger haalt vocht uit de lucht en uit materialen, hij pompt geen water weg. Bel ons zodra de kelder leeg is, want op vochtig materiaal begint schimmel na 24 tot 48 uur.",
      },
      {
        q: "Komt het vocht terug na een volgende hoge waterstand?",
        a: "Het bouwvocht dat we eruit halen niet, dat is definitief weg. Komt het water opnieuw binnen langs dezelfde weg, dan begint het opnieuw. Drogen voorkomt wel wat er anders achterblijft: schimmel, een muffe geur en vocht dat maanden in de muren zit.",
      },
      {
        q: "Hoe snel staan jullie in Grobbendonk?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer een halfuur en we plannen hem als onderdeel van een dagronde door de Kempen, dus u krijgt een tijdslot en een sms een halfuur vooraf.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "herenthout",
    title: "Bouwdroger huren in Herenthout | Vernast",
    description:
      "Bouwdroger huren in Herenthout: landelijke kern aan de Kleine Nete, met hoeves en verkavelingen. Binnen 24 uur geleverd en geplaatst.",
    h1: "Bouwdroger huren in Herenthout",
    kicker: "Kempen · landelijk aan de Kleine Nete",
    rit: { afstand: "circa 28 km", tijd: "ongeveer een halfuur" },
    intro: [
      "Herenthout is een landelijke gemeente aan de Kleine Nete: één kern, verkavelingen eromheen en daartussen hoeves met dikke, massieve muren.",
      "Bij een hoge waterstand van de Nete komt water in kelders en gelijkvloerse ruimtes terug. Ons magazijn ligt op een halfuur; we plannen de Kempen in een dagronde.",
    ],
    bouw: {
      kop: "Hoeves en verkavelingen, met de Nete ernaast",
      alineas: [
        "Een hoeve of een oudere dorpswoning heeft massieve muren zonder spouw en zelden een waterkering in de muurvoet. Zulke muren geven hun vocht traag af, dus telt luchtbeweging langs het oppervlak hier meer dan extra capaciteit.",
        "In de verkavelingen gaat het om gewoon bouwvocht uit een renovatie, en dat verdwijnt definitief. Een chape van zes centimeter zet per vierkante meter tientallen liters water in de constructie; die moeten er langs boven uit.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "Voor een woning met massieve muren in renovatie: 70 liter per dag en bereik tot ongeveer 400 m³." },
      { key: "ttv4500", waarom: "Massieve muren geven hun vocht traag af. Luchtbeweging langs het oppervlak versnelt dat merkbaar." },
      { key: "revolution", waarom: "Voor een kelder in de kleigrond die in de winter niet boven tien graden komt: droge lucht via slangen." },
      { key: "teddh30", waarom: "Voor een onverwarmde werf of schuur: de kachel brengt de ruimte op werkingstemperatuur. Vraagt 400 V krachtstroom." },
    ],
    levering: {
      kop: "Leveren in Herenthout: binnen 24 uur, in een dagronde",
      alinea:
        "Een halfuur rijden, gepland als onderdeel van een ronde door de Kempen. U krijgt een tijdslot en een sms een halfuur vooraf. Bij een hoeve vragen we vooraf het volume en of de ruimte dicht te krijgen is.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een halfuur rijden. Voor één los toestel dat u langere tijd houdt kan dat lonen; voor een volledig pakket zit de rit al in de prijs.",
    },
    buren: ["herentals", "grobbendonk", "nijlen", "westerlo"],
    faq: [
      {
        q: "Mijn muren blijven onderaan vochtig. Is dat bouwvocht?",
        a: "Op kleigrond zonder waterkering is dat bijna altijd opstijgend vocht: het tekent zich af als een band tot ongeveer een halve meter hoog, vaak met een witte zoutrand en afbladderende verf. Bouwvocht zit gelijkmatig in de ruimte en verdwijnt vanzelf naarmate het droogt. Onze technieker meet het bij de levering.",
      },
      {
        q: "Duurt drogen langer bij dikke, massieve muren?",
        a: "Het vocht komt er trager uit, ja. Daarom zetten we hier bijna altijd een ventilator bij, die de verzadigde luchtlaag langs het muuroppervlak wegblaast. Wat telt is de meting: wij meten bij de start en bij de oplevering, en de huurtermijn volgt daaruit.",
      },
      {
        q: "Betaal ik een kilometerkost voor Herenthout?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket. De rit telt mee in onze planning, niet in uw factuur; voor de verste gemeenten vragen we liefst een dag speling.",
      },
      {
        q: "Hoe snel staan jullie in Herenthout?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer een halfuur en we plannen hem als onderdeel van een dagronde door de Kempen, dus u krijgt een tijdslot en een sms een halfuur vooraf.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "vorselaar",
    title: "Bouwdroger huren in Vorselaar | Vernast",
    description:
      "Bouwdroger huren in Vorselaar: landelijke kern op zandgrond met ruime percelen. Binnen 24 uur geleverd, geplaatst en ingesteld.",
    h1: "Bouwdroger huren in Vorselaar",
    kicker: "Kempen · landelijk, op zandgrond",
    rit: { afstand: "circa 30 km", tijd: "ongeveer een halfuur" },
    intro: [
      "Vorselaar is klein en landelijk: één kern, ruime percelen en veel open ruimte eromheen. Wat er gebouwd en verbouwd wordt is doorgaans vrijstaand, met een bijgebouw dat mee wordt afgewerkt.",
      "De bodem is zand en draineert goed, dus kelderproblemen zijn hier zeldzamer dan in de vallei. Ons magazijn ligt op een halfuur.",
    ],
    bouw: {
      kop: "Vrijstaande woningen op zand, met bijgebouwen",
      alineas: [
        "Een vrijstaande woning heeft meer capaciteit nodig dan een rijhuis, niet omdat ze trager droogt maar omdat er meer lucht in zit. Wij rekenen op volume in kubieke meter: een open leefruimte met een hoog plafond telt zwaarder dan extra vierkante meters.",
        "Een bijgebouw dat mee wordt verbouwd is tijdens de werken zelden verwarmd, en onder 15 °C verliest een condensdroger het grootste deel van zijn rendement. In de winter gaat er hier dan ook vaak een kachel mee, of meteen een adsorptiedroger.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "Voor een ruime vrijstaande woning: 110 liter per dag en bereik tot ongeveer 600 m³, één toestel per groot gelijkvloers." },
      { key: "teddh30", waarom: "De winterwerf: onder 15 °C zakt het rendement van elke condensdroger. Deze kachel brengt de ruimte eerst op temperatuur. Vraagt 400 V." },
      { key: "ttk350", waarom: "De aanvulling voor de verdieping, de garage of het bijgebouw: 70 liter per dag, pompklaar." },
      { key: "ttv4500", waarom: "Bij grote gelijkvloerse oppervlaktes verdeelt deze ventilator de droge lucht over de hele bouwlaag." },
    ],
    levering: {
      kop: "Leveren in Vorselaar: binnen 24 uur, in een dagronde",
      alinea:
        "Een halfuur rijden. U krijgt een tijdslot en een sms een halfuur vooraf. Op een winterwerf controleert de technieker eerst of de werfkast 400 V levert voor de kachel.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een halfuur rijden. Voor één los toestel kan dat lonen; voor een volledige woning is leveren doorgaans de betere rekensom.",
    },
    buren: ["lille", "grobbendonk", "herentals", "zandhoven"],
    faq: [
      {
        q: "Hoeveel toestellen heb ik nodig voor een vrijstaande woning?",
        a: "Voor een gelijkvloers van 120 tot 150 m² rekenen we doorgaans op twee drogers met een ventilator per droogzone, en vaak een derde voor de verdieping of het bijgebouw. Wij rekenen op volume in kubieke meter en niet op oppervlakte: een hoog plafond telt zwaarder dan extra vierkante meters.",
      },
      {
        q: "Wat als het vriest tijdens de droging?",
        a: "Dan verwarmen we mee. Een condensdroger verliest onder 15 °C het grootste deel van zijn rendement, en een ruwbouw in Vorselaar komt in de winter zelden boven tien graden. We zetten er dan een elektrische kachel bij die de ruimte op werkingstemperatuur houdt; die vraagt 400 V krachtstroom.",
      },
      {
        q: "Betaal ik een kilometerkost voor Vorselaar?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket. De rit telt mee in onze planning, niet in uw factuur; voor de verste gemeenten vragen we liefst een dag speling.",
      },
      {
        q: "Hoe snel staan jullie in Vorselaar?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer een halfuur en we plannen hem als onderdeel van een dagronde door de Kempen, dus u krijgt een tijdslot en een sms een halfuur vooraf.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "lille",
    title: "Bouwdroger huren in Lille - Kempen | Vernast",
    description:
      "Bouwdroger huren in Lille, Wechelderzande, Gierle en Poederlee: verkavelingen op zandgrond. Binnen 24 uur geleverd en geplaatst.",
    h1: "Bouwdroger huren in Lille",
    kicker: "Kempen · Lille, Wechelderzande, Gierle en Poederlee",
    rit: { afstand: "circa 33 km", tijd: "ongeveer vijfendertig minuten" },
    intro: [
      "Lille bestaat uit vier landelijke kernen: Lille, Wechelderzande, Gierle en Poederlee. De bebouwing is open, de percelen zijn ruim en de bodem is zand.",
      "Er wordt hier veel verbouwd en bijgebouwd. Ons magazijn ligt op een vijfendertigtal minuten; we rijden de Kempen in een dagronde.",
    ],
    bouw: {
      kop: "Vier landelijke kernen, open bebouwing op zand",
      alineas: [
        "Zandgrond draineert goed, dus het werk hier is bijna altijd bouwvocht: een nieuwe chape over het gelijkvloers, pleisterwerk over twee bouwlagen, een aanbouw. Dat verdwijnt definitief, maar het vraagt capaciteit naar volume en niet naar oppervlakte.",
        "In de winter komt de temperatuur erbij. Een ruwbouw of een bijgebouw komt hier tussen november en maart zelden boven tien graden, en onder 15 °C zakt het rendement van elke condensdroger. Dan hoort er een kachel bij.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "Voor een ruime vrijstaande woning: 110 liter per dag en bereik tot ongeveer 600 m³, één toestel per groot gelijkvloers." },
      { key: "teddh30", waarom: "De winterwerf: onder 15 °C zakt het rendement van elke condensdroger. Deze kachel brengt de ruimte eerst op temperatuur. Vraagt 400 V." },
      { key: "ttk350", waarom: "De aanvulling voor de verdieping, de garage of het bijgebouw: 70 liter per dag, pompklaar." },
      { key: "ttv4500", waarom: "Bij grote gelijkvloerse oppervlaktes verdeelt deze ventilator de droge lucht over de hele bouwlaag." },
    ],
    levering: {
      kop: "Leveren in Lille: binnen 24 uur, in een dagronde",
      alinea:
        "Een vijfendertigtal minuten rijden. De technieker verdeelt de toestellen over droogzones en sluit de condensafvoer aan op een vloerput of de wasmachineaansluiting. U krijgt een tijdslot en een sms een halfuur vooraf.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een vijfendertigtal minuten rijden. Voor één los toestel dat u langere tijd houdt kan dat lonen; voor een volledig pakket zit de rit al in de prijs.",
    },
    buren: ["vorselaar", "malle", "beerse", "kasterlee"],
    faq: [
      {
        q: "Hoeveel toestellen heb ik nodig voor een vrijstaande woning?",
        a: "Voor een gelijkvloers van 120 tot 150 m² rekenen we doorgaans op twee drogers met een ventilator per droogzone, en vaak een derde voor de verdieping of het bijgebouw. Wij rekenen op volume in kubieke meter en niet op oppervlakte: een hoog plafond telt zwaarder dan extra vierkante meters.",
      },
      {
        q: "Wat als het vriest tijdens de droging?",
        a: "Dan verwarmen we mee. Een condensdroger verliest onder 15 °C het grootste deel van zijn rendement, en een ruwbouw in Lille komt in de winter zelden boven tien graden. We zetten er dan een elektrische kachel bij die de ruimte op werkingstemperatuur houdt; die vraagt 400 V krachtstroom.",
      },
      {
        q: "Betaal ik een kilometerkost voor Lille?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket. De rit telt mee in onze planning, niet in uw factuur; voor de verste gemeenten vragen we liefst een dag speling.",
      },
      {
        q: "Hoe snel staan jullie in Lille?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfendertig minuten en we plannen hem als onderdeel van een dagronde door de Kempen, dus u krijgt een tijdslot en een sms een halfuur vooraf.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "vosselaar",
    title: "Bouwdroger huren in Vosselaar | Vernast",
    description:
      "Bouwdroger huren in Vosselaar: bosrijke villawijken op zandgrond met ruime volumes. Binnen 24 uur geleverd, geplaatst en ingesteld.",
    h1: "Bouwdroger huren in Vosselaar",
    kicker: "Kempen · bosrijk, villa's op zand",
    rit: { afstand: "circa 37 km", tijd: "ongeveer vijfendertig minuten" },
    intro: [
      "Vosselaar is compact maar residentieel: villa's op beboste percelen, veel groen en weinig doorgaand verkeer. De bebouwing stamt grotendeels uit de jaren zestig tot tachtig en wordt nu grondig aangepakt.",
      "Ons magazijn in Aartselaar ligt op een vijfendertigtal minuten. We rijden de Kempen in een dagronde, dus u krijgt een tijdslot in plaats van een hele dag.",
    ],
    bouw: {
      kop: "Villa's in het groen, met volume om droog te krijgen",
      alineas: [
        "Een villa droogt niet trager dan een rijhuis, ze heeft gewoon meer capaciteit nodig: een open leefruimte met een hoog plafond bevat veel meer lucht dan dezelfde vierkante meters onder een gewoon plafond. In een pakket hier staat zelden één toestel.",
        "Onder de woning ligt vaak een kelder die in de winter niet boven tien graden komt. Onder 15 °C haalt een condensdroger nog maar een fractie van zijn capaciteit, dus zetten we er een kachel naast of kiezen we meteen voor een adsorptiedroger.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "Voor een ruime vrijstaande woning: 110 liter per dag en bereik tot ongeveer 600 m³, één toestel per groot gelijkvloers." },
      { key: "teddh30", waarom: "De winterwerf: onder 15 °C zakt het rendement van elke condensdroger. Deze kachel brengt de ruimte eerst op temperatuur. Vraagt 400 V." },
      { key: "ttk350", waarom: "De aanvulling voor de verdieping, de garage of het bijgebouw: 70 liter per dag, pompklaar." },
      { key: "ttv4500", waarom: "Bij grote gelijkvloerse oppervlaktes verdeelt deze ventilator de droge lucht over de hele bouwlaag." },
    ],
    levering: {
      kop: "Leveren in Vosselaar: binnen 24 uur, in een dagronde",
      alinea:
        "Een vijfendertigtal minuten rijden. Bij een villa met kelder overlegt de technieker vooraf welk pakket nodig is; hij verdeelt de toestellen per bouwlaag en plaatst waar nodig een ventilator.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een vijfendertigtal minuten rijden. Voor de volumes die hier gangbaar zijn is leveren doorgaans de betere keuze.",
    },
    buren: ["beerse", "turnhout", "lille", "oud-turnhout"],
    faq: [
      {
        q: "Hoeveel toestellen heb ik nodig voor een vrijstaande woning?",
        a: "Voor een gelijkvloers van 120 tot 150 m² rekenen we doorgaans op twee drogers met een ventilator per droogzone, en vaak een derde voor de verdieping of het bijgebouw. Wij rekenen op volume in kubieke meter en niet op oppervlakte: een hoog plafond telt zwaarder dan extra vierkante meters.",
      },
      {
        q: "Wat als het vriest tijdens de droging?",
        a: "Dan verwarmen we mee. Een condensdroger verliest onder 15 °C het grootste deel van zijn rendement, en een ruwbouw in Vosselaar komt in de winter zelden boven tien graden. We zetten er dan een elektrische kachel bij die de ruimte op werkingstemperatuur houdt; die vraagt 400 V krachtstroom.",
      },
      {
        q: "Betaal ik een kilometerkost voor Vosselaar?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket. De rit telt mee in onze planning, niet in uw factuur; voor de verste gemeenten vragen we liefst een dag speling.",
      },
      {
        q: "Hoe snel staan jullie in Vosselaar?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfendertig minuten en we plannen hem als onderdeel van een dagronde door de Kempen, dus u krijgt een tijdslot en een sms een halfuur vooraf.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "beerse",
    title: "Bouwdroger huren in Beerse - kleigrond | Vernast",
    description:
      "Bouwdroger huren in Beerse en Vlimmeren: steenbakkersgemeente op kleigrond. Binnen 24 uur geleverd, geplaatst en ingesteld.",
    h1: "Bouwdroger huren in Beerse",
    kicker: "Kempen · steenbakkersgemeente op klei",
    rit: { afstand: "circa 36 km", tijd: "ongeveer vijfendertig minuten" },
    intro: [
      "Beerse is een van de weinige Kempense gemeenten waar de bodem geen zand is maar klei: de steenbakkerijen hier halen hun grondstof uit eigen putten. Dat maakt de werven anders dan een paar kilometer verderop.",
      "Klei houdt water vast waar zand het doorlaat, en dat merkt u in kelders en onderaan muren. Ons magazijn ligt op een vijfendertigtal minuten.",
    ],
    bouw: {
      kop: "Kleigrond, steenbakkerswoningen en verkavelingen",
      alineas: [
        "Een oudere woning op kleigrond zonder waterkering in de muurvoet zuigt vocht op via de baksteen. Binnen tekent dat zich af als een band tot een halve meter boven de vloer, met afbladderende verf en soms een witte zoutrand. Dat is opstijgend vocht: drogen haalt het uit de ruimte, maar de bron blijft.",
        "Bij een renovatie komt daar bouwvocht bovenop, en dat verdwijnt wél definitief. Massieve muren geven hun vocht traag af, dus telt luchtbeweging langs het muuroppervlak hier meer dan extra capaciteit.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "Voor een woning met massieve muren in renovatie: 70 liter per dag en bereik tot ongeveer 400 m³." },
      { key: "ttv4500", waarom: "Massieve muren geven hun vocht traag af. Luchtbeweging langs het oppervlak versnelt dat merkbaar." },
      { key: "revolution", waarom: "Voor een kelder in de kleigrond die in de winter niet boven tien graden komt: droge lucht via slangen." },
      { key: "teddh30", waarom: "Voor een onverwarmde werf of schuur: de kachel brengt de ruimte op werkingstemperatuur. Vraagt 400 V krachtstroom." },
    ],
    levering: {
      kop: "Leveren in Beerse: binnen 24 uur, in een dagronde",
      alinea:
        "Een vijfendertigtal minuten rijden. De technieker meet bij aankomst, en dat is hier nuttig: op kleigrond is het verschil tussen bouwvocht en opstijgend vocht met het oog niet te zien.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een vijfendertigtal minuten rijden. Voor één los toestel kan dat lonen; voor een volledig pakket zit de rit al in de prijs.",
    },
    buren: ["turnhout", "vosselaar", "rijkevorsel", "lille"],
    faq: [
      {
        q: "Mijn muren blijven onderaan vochtig. Is dat bouwvocht?",
        a: "Op kleigrond zonder waterkering is dat bijna altijd opstijgend vocht: het tekent zich af als een band tot ongeveer een halve meter hoog, vaak met een witte zoutrand en afbladderende verf. Bouwvocht zit gelijkmatig in de ruimte en verdwijnt vanzelf naarmate het droogt. Onze technieker meet het bij de levering.",
      },
      {
        q: "Duurt drogen langer bij dikke, massieve muren?",
        a: "Het vocht komt er trager uit, ja. Daarom zetten we hier bijna altijd een ventilator bij, die de verzadigde luchtlaag langs het muuroppervlak wegblaast. Wat telt is de meting: wij meten bij de start en bij de oplevering, en de huurtermijn volgt daaruit.",
      },
      {
        q: "Betaal ik een kilometerkost voor Beerse?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket. De rit telt mee in onze planning, niet in uw factuur; voor de verste gemeenten vragen we liefst een dag speling.",
      },
      {
        q: "Hoe snel staan jullie in Beerse?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfendertig minuten en we plannen hem als onderdeel van een dagronde door de Kempen, dus u krijgt een tijdslot en een sms een halfuur vooraf.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "rijkevorsel",
    title: "Bouwdroger huren in Rijkevorsel | Vernast",
    description:
      "Bouwdroger huren in Rijkevorsel: kleigrond en steenbakkerijen, met landelijke kernen. Binnen 24 uur geleverd en geplaatst.",
    h1: "Bouwdroger huren in Rijkevorsel",
    kicker: "Kempen · kleigrond en steenbakkerijen",
    rit: { afstand: "circa 34 km", tijd: "ongeveer vijfendertig minuten" },
    intro: [
      "Rijkevorsel deelt zijn bodem met Beerse: klei in plaats van zand, met steenbakkerijen die hun grondstof uit eigen putten halen. Daarnaast is het landelijk, met ruime percelen en hoeves.",
      "Klei houdt water vast, en dat merkt u in kelders en onderaan muren. Ons magazijn ligt op een vijfendertigtal minuten.",
    ],
    bouw: {
      kop: "Klei onder landelijke kernen en hoeves",
      alineas: [
        "Een hoeve of oudere woning op kleigrond zonder waterkering neemt vocht op via de muurvoet. Binnen komt dat terug als een vochtband onderaan de muur. Dat gaat niet vanzelf weg: drogen haalt het uit de ruimte, maar zolang de bron er is, komt het bij.",
        "Bij renovaties en nieuwbouw gaat het om bouwvocht, en dat verdwijnt definitief. Dikke muren geven hun vocht traag af, dus staat er hier bijna altijd een ventilator bij de droger.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "Voor een woning met massieve muren in renovatie: 70 liter per dag en bereik tot ongeveer 400 m³." },
      { key: "ttv4500", waarom: "Massieve muren geven hun vocht traag af. Luchtbeweging langs het oppervlak versnelt dat merkbaar." },
      { key: "revolution", waarom: "Voor een kelder in de kleigrond die in de winter niet boven tien graden komt: droge lucht via slangen." },
      { key: "teddh30", waarom: "Voor een onverwarmde werf of schuur: de kachel brengt de ruimte op werkingstemperatuur. Vraagt 400 V krachtstroom." },
    ],
    levering: {
      kop: "Leveren in Rijkevorsel: binnen 24 uur, in een dagronde",
      alinea:
        "Een vijfendertigtal minuten rijden. Bij een hoeve of een schuur vragen we vooraf het volume in kubieke meter en of de ruimte dicht te krijgen is; een droger tegen een open poort werkt tegen de buitenlucht in.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een vijfendertigtal minuten rijden. Voor één los toestel dat u langere tijd houdt kan dat lonen.",
    },
    buren: ["beerse", "hoogstraten", "merksplas", "malle"],
    faq: [
      {
        q: "Mijn muren blijven onderaan vochtig. Is dat bouwvocht?",
        a: "Op kleigrond zonder waterkering is dat bijna altijd opstijgend vocht: het tekent zich af als een band tot ongeveer een halve meter hoog, vaak met een witte zoutrand en afbladderende verf. Bouwvocht zit gelijkmatig in de ruimte en verdwijnt vanzelf naarmate het droogt. Onze technieker meet het bij de levering.",
      },
      {
        q: "Duurt drogen langer bij dikke, massieve muren?",
        a: "Het vocht komt er trager uit, ja. Daarom zetten we hier bijna altijd een ventilator bij, die de verzadigde luchtlaag langs het muuroppervlak wegblaast. Wat telt is de meting: wij meten bij de start en bij de oplevering, en de huurtermijn volgt daaruit.",
      },
      {
        q: "Betaal ik een kilometerkost voor Rijkevorsel?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket. De rit telt mee in onze planning, niet in uw factuur; voor de verste gemeenten vragen we liefst een dag speling.",
      },
      {
        q: "Hoe snel staan jullie in Rijkevorsel?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfendertig minuten en we plannen hem als onderdeel van een dagronde door de Kempen, dus u krijgt een tijdslot en een sms een halfuur vooraf.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "merksplas",
    title: "Bouwdroger huren in Merksplas | Vernast",
    description:
      "Bouwdroger huren in Merksplas: landelijke gemeente met hoeves en ruime percelen. Binnen 24 uur geleverd, geplaatst en ingesteld.",
    h1: "Bouwdroger huren in Merksplas",
    kicker: "Kempen · landelijk, met hoeves",
    rit: { afstand: "circa 40 km", tijd: "ongeveer veertig minuten" },
    intro: [
      "Merksplas is uitgesproken landelijk: landbouwbedrijven, hoeves en ruime percelen, met de Kolonie als bekendste erfgoed. Wat er verbouwd wordt is doorgaans groot: een woonhuis met stallen of schuren ernaast.",
      "Ons magazijn ligt op veertig minuten. We rijden de Kempen in een dagronde, dus u krijgt een tijdslot en een sms een halfuur vooraf.",
    ],
    bouw: {
      kop: "Hoeves, stallen en schuren die mee verbouwd worden",
      alineas: [
        "Een stal of schuur die woonruimte wordt is een groot volume en tijdens de werken zelden verwarmd. Onder 15 °C verliest een condensdroger het grootste deel van zijn rendement, dus kiezen we daar vaak een adsorptiedroger die met een droogmiddel werkt, of zetten we er een kachel bij.",
        "Het woonhuis zelf heeft meestal massieve muren zonder spouw en zonder waterkering. Die geven hun vocht traag af, en als er onderaan een vochtband staat gaat het niet om bouwvocht maar om een bron die blijft.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "Voor een ruime vrijstaande woning: 110 liter per dag en bereik tot ongeveer 600 m³, één toestel per groot gelijkvloers." },
      { key: "teddh30", waarom: "De winterwerf: onder 15 °C zakt het rendement van elke condensdroger. Deze kachel brengt de ruimte eerst op temperatuur. Vraagt 400 V." },
      { key: "ttk350", waarom: "De aanvulling voor de verdieping, de garage of het bijgebouw: 70 liter per dag, pompklaar." },
      { key: "ttv4500", waarom: "Bij grote gelijkvloerse oppervlaktes verdeelt deze ventilator de droge lucht over de hele bouwlaag." },
    ],
    levering: {
      kop: "Leveren in Merksplas: binnen 24 uur, in een dagronde",
      alinea:
        "Veertig minuten rijden. Bij een stal of schuur vragen we vooraf het volume in kubieke meter, de vloeropbouw en of de ruimte dicht te krijgen is. Voor de verste gemeenten vragen we liefst een dag speling in de planning.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Veertig minuten heen en evenveel terug. Voor een volledig pakket is leveren de betere keuze; voor één los toestel dat u lang houdt kan afhalen lonen.",
    },
    buren: ["hoogstraten", "rijkevorsel", "turnhout", "ravels"],
    faq: [
      {
        q: "Kunnen jullie een stal of schuur drogen?",
        a: "Ja. We vragen vooraf het volume in kubieke meter, de vloeropbouw en of de ruimte dicht te krijgen is. Is ze niet te verwarmen, dan zetten we een adsorptiedroger in: die werkt met een droogmiddel en blijft ook bij lage temperaturen vocht opnemen.",
      },
      {
        q: "Wat als het vriest tijdens de droging?",
        a: "Dan verwarmen we mee. Een condensdroger verliest onder 15 °C het grootste deel van zijn rendement, en een ruwbouw in Merksplas komt in de winter zelden boven tien graden. We zetten er dan een elektrische kachel bij die de ruimte op werkingstemperatuur houdt; die vraagt 400 V krachtstroom.",
      },
      {
        q: "Betaal ik een kilometerkost voor Merksplas?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket. De rit telt mee in onze planning, niet in uw factuur; voor de verste gemeenten vragen we liefst een dag speling.",
      },
      {
        q: "Hoe snel staan jullie in Merksplas?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer veertig minuten en we plannen hem als onderdeel van een dagronde door de Kempen, dus u krijgt een tijdslot en een sms een halfuur vooraf.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "hoogstraten",
    title: "Bouwdroger huren in Hoogstraten | Vernast",
    description:
      "Bouwdroger huren in Hoogstraten: tuinbouwstreek met serres, loodsen en landelijke kernen. Binnen 24 uur geleverd en geplaatst.",
    h1: "Bouwdroger huren in Hoogstraten",
    kicker: "Kempen · tuinbouw en landelijke kernen",
    rit: { afstand: "circa 42 km", tijd: "ongeveer veertig minuten" },
    intro: [
      "Hoogstraten is de tuinbouwgemeente van de Noorderkempen: serres, loodsen en veilinggebouwen naast de kernen van Hoogstraten, Meer, Meerle, Minderhout en Wortel. Dat levert werven op met grote volumes.",
      "Ons magazijn ligt op veertig minuten. We rijden de Noorderkempen in een dagronde; voor de verste adressen vragen we liefst een dag speling.",
    ],
    bouw: {
      kop: "Loodsen en bedrijfsgebouwen naast landelijke kernen",
      alineas: [
        "Bij een loods of bedrijfsruimte is de eerste vraag niet welk toestel maar of de ruimte dicht te krijgen is: een droger tegen een open poort werkt tegen de buitenlucht in. Bij stilstand die geld kost zetten we liever meer toestellen korter dan één toestel lang.",
        "In de woonkernen gaat het om gewoon bouwvocht uit renovatie en nieuwbouw. Dat verdwijnt definitief, maar het vraagt capaciteit naar volume: wij rekenen op kubieke meter en niet op oppervlakte.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "Voor een ruime vrijstaande woning: 110 liter per dag en bereik tot ongeveer 600 m³, één toestel per groot gelijkvloers." },
      { key: "teddh30", waarom: "De winterwerf: onder 15 °C zakt het rendement van elke condensdroger. Deze kachel brengt de ruimte eerst op temperatuur. Vraagt 400 V." },
      { key: "ttk350", waarom: "De aanvulling voor de verdieping, de garage of het bijgebouw: 70 liter per dag, pompklaar." },
      { key: "ttv4500", waarom: "Bij grote gelijkvloerse oppervlaktes verdeelt deze ventilator de droge lucht over de hele bouwlaag." },
    ],
    levering: {
      kop: "Leveren in Hoogstraten: binnen 24 uur, in een dagronde",
      alinea:
        "Veertig minuten rijden. Bij een bedrijfsgebouw vragen we vooraf het volume in kubieke meter, de vloeropbouw en of de ruimte dicht te krijgen is. Elke werf op de ronde krijgt een tijdslot en een sms een halfuur vooraf.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Veertig minuten heen en evenveel terug. Voor de volumes die hier gangbaar zijn is leveren de betere rekensom: de rit zit al in de pakketprijs.",
    },
    buren: ["merksplas", "rijkevorsel", "wuustwezel", "ravels"],
    faq: [
      {
        q: "Kunnen jullie een loods of een bedrijfsgebouw drogen?",
        a: "Ja, en dat doen we regelmatig. We vragen vooraf het volume in kubieke meter, de vloeropbouw en of de ruimte dicht te krijgen is. Bij grote volumes zetten we meerdere drogers met ventilatoren in plaats van één toestel langer te laten staan: dat is sneller en meestal goedkoper.",
      },
      {
        q: "Wat als het vriest tijdens de droging?",
        a: "Dan verwarmen we mee. Een condensdroger verliest onder 15 °C het grootste deel van zijn rendement, en een ruwbouw in Hoogstraten komt in de winter zelden boven tien graden. We zetten er dan een elektrische kachel bij die de ruimte op werkingstemperatuur houdt; die vraagt 400 V krachtstroom.",
      },
      {
        q: "Betaal ik een kilometerkost voor Hoogstraten?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket. De rit telt mee in onze planning, niet in uw factuur; voor de verste gemeenten vragen we liefst een dag speling.",
      },
      {
        q: "Hoe snel staan jullie in Hoogstraten?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer veertig minuten en we plannen hem als onderdeel van een dagronde door de Kempen, dus u krijgt een tijdslot en een sms een halfuur vooraf.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "oud-turnhout",
    title: "Bouwdroger huren in Oud-Turnhout | Vernast",
    description:
      "Bouwdroger huren in Oud-Turnhout: bosrijke gemeente met woningen en vakantieverblijven. Binnen 24 uur geleverd en geplaatst.",
    h1: "Bouwdroger huren in Oud-Turnhout",
    kicker: "Kempen · bosrijk, naast Turnhout",
    rit: { afstand: "circa 43 km", tijd: "ongeveer veertig minuten" },
    intro: [
      "Oud-Turnhout ligt tegen Turnhout aan, maar bouwt anders: bosrijk, ruim opgezet, met vrijstaande woningen en een flink aantal vakantieverblijven en chalets in het groen.",
      "Die laatste groep is een eigen soort werf: kleine volumes, vaak zonder verwarming, soms maanden niet gebruikt. Ons magazijn ligt op veertig minuten.",
    ],
    bouw: {
      kop: "Vrijstaande woningen en verblijven in het groen",
      alineas: [
        "Een verblijf dat maanden gesloten staat, droogt niet vanzelf: zonder verluchting en zonder verwarming blijft de lucht erin verzadigd en slaat vocht neer op de koudste vlakken. Een compact toestel met een condenspomp lost dat op zonder dat iemand reservoirs moet legen.",
        "Bij de woningen gaat het om bouwvocht uit renovatie, en om volume: een vrijstaande woning bevat meer lucht dan een rijhuis en heeft dus meer capaciteit nodig. In de winter komt daar de temperatuur bij, want onder 15 °C zakt het rendement van elke condensdroger.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "Voor een ruime vrijstaande woning: 110 liter per dag en bereik tot ongeveer 600 m³, één toestel per groot gelijkvloers." },
      { key: "teddh30", waarom: "De winterwerf: onder 15 °C zakt het rendement van elke condensdroger. Deze kachel brengt de ruimte eerst op temperatuur. Vraagt 400 V." },
      { key: "ttk350", waarom: "De aanvulling voor de verdieping, de garage of het bijgebouw: 70 liter per dag, pompklaar." },
      { key: "ttv4500", waarom: "Bij grote gelijkvloerse oppervlaktes verdeelt deze ventilator de droge lucht over de hele bouwlaag." },
    ],
    levering: {
      kop: "Leveren in Oud-Turnhout: binnen 24 uur, in een dagronde",
      alinea:
        "Veertig minuten rijden. U krijgt een tijdslot en een sms een halfuur vooraf. Staat het verblijf leeg, spreek dan af wie de technieker binnenlaat: de toestellen worden niet alleen afgezet maar ook geplaatst, aangesloten en ingesteld.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Veertig minuten heen en evenveel terug. Voor één los toestel dat u langere tijd houdt kan dat lonen.",
    },
    buren: ["turnhout", "arendonk", "retie", "kasterlee"],
    faq: [
      {
        q: "Mijn vakantiewoning staat maanden leeg en ruikt muf. Helpt een droger?",
        a: "Ja. Zonder verluchting en verwarming blijft de lucht binnen verzadigd en slaat vocht neer op de koudste vlakken; dat geeft de muffe geur en op termijn schimmel. Een compact toestel met een condenspomp haalt dat eruit zonder dat iemand reservoirs moet legen.",
      },
      {
        q: "Moet er iemand aanwezig zijn bij de levering?",
        a: "Ja, iemand die de technieker binnenlaat en kan tekenen: de eigenaar, een buur met een sleutel of de aannemer. De toestellen worden niet alleen afgezet maar ook geplaatst, aangesloten en ingesteld, en er gaat een vochtmeting aan vooraf.",
      },
      {
        q: "Betaal ik een kilometerkost voor Oud-Turnhout?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket. De rit telt mee in onze planning, niet in uw factuur; voor de verste gemeenten vragen we liefst een dag speling.",
      },
      {
        q: "Hoe snel staan jullie in Oud-Turnhout?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer veertig minuten en we plannen hem als onderdeel van een dagronde door de Kempen, dus u krijgt een tijdslot en een sms een halfuur vooraf.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "arendonk",
    title: "Bouwdroger huren in Arendonk | Vernast",
    description:
      "Bouwdroger huren in Arendonk: landelijke grensgemeente op zandgrond. Binnen 24 uur geleverd, geplaatst en ingesteld. Geen kilometerkost.",
    h1: "Bouwdroger huren in Arendonk",
    kicker: "Kempen · grensgemeente op zandgrond",
    rit: { afstand: "circa 48 km", tijd: "ongeveer vijfenveertig minuten" },
    intro: [
      "Arendonk ligt tegen de Nederlandse grens, landelijk en ruim opgezet, met vrijstaande woningen op grote percelen en veel open ruimte eromheen.",
      "Het is een van de verste gemeenten van onze planning: vijfenveertig minuten vanuit Aartselaar. Die rit telt mee in onze planning, niet in uw factuur.",
    ],
    bouw: {
      kop: "Vrijstaande woningen op zand, ver van de stad",
      alineas: [
        "De zandgrond draineert goed, dus kelders zijn hier minder vaak het probleem. Het werk is bijna altijd bouwvocht uit renovatie of nieuwbouw, en dat verdwijnt definitief. Wat telt is capaciteit naar volume: wij rekenen op kubieke meter en niet op oppervlakte.",
        "In de winter komt de temperatuur erbij. De Kempen heeft de koudste winterwerven van Vlaanderen, en onder 15 °C haalt een condensdroger nog maar een fractie van zijn capaciteit. Tussen november en maart gaat hier dan ook vaak een elektrische kachel mee in het pakket.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "Voor een ruime vrijstaande woning: 110 liter per dag en bereik tot ongeveer 600 m³, één toestel per groot gelijkvloers." },
      { key: "teddh30", waarom: "De winterwerf: onder 15 °C zakt het rendement van elke condensdroger. Deze kachel brengt de ruimte eerst op temperatuur. Vraagt 400 V." },
      { key: "ttk350", waarom: "De aanvulling voor de verdieping, de garage of het bijgebouw: 70 liter per dag, pompklaar." },
      { key: "ttv4500", waarom: "Bij grote gelijkvloerse oppervlaktes verdeelt deze ventilator de droge lucht over de hele bouwlaag." },
    ],
    levering: {
      kop: "Leveren in Arendonk: binnen 24 uur, als dagronde gepland",
      alinea:
        "Vijfenveertig minuten rijden. We rijden de noordoostelijke Kempen daarom als ronde: elke werf krijgt een tijdslot en een sms een halfuur vooraf. Voor de verste adressen vragen we liefst een dag speling.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Vijfenveertig minuten heen en evenveel terug. Voor een volledig droogpakket is dat nooit de betere keuze: de levering zit al in de prijs en de technieker plaatst meteen alles.",
    },
    buren: ["oud-turnhout", "ravels", "retie", "dessel"],
    faq: [
      {
        q: "Hoeveel toestellen heb ik nodig voor een vrijstaande woning?",
        a: "Voor een gelijkvloers van 120 tot 150 m² rekenen we doorgaans op twee drogers met een ventilator per droogzone, en vaak een derde voor de verdieping of het bijgebouw. Wij rekenen op volume in kubieke meter en niet op oppervlakte: een hoog plafond telt zwaarder dan extra vierkante meters.",
      },
      {
        q: "Wat als het vriest tijdens de droging?",
        a: "Dan verwarmen we mee. Een condensdroger verliest onder 15 °C het grootste deel van zijn rendement, en een ruwbouw in Arendonk komt in de winter zelden boven tien graden. We zetten er dan een elektrische kachel bij die de ruimte op werkingstemperatuur houdt; die vraagt 400 V krachtstroom.",
      },
      {
        q: "Betaal ik een kilometerkost voor Arendonk?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket. De rit telt mee in onze planning, niet in uw factuur; voor de verste gemeenten vragen we liefst een dag speling.",
      },
      {
        q: "Hoe snel staan jullie in Arendonk?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfenveertig minuten en we plannen hem als onderdeel van een dagronde door de Kempen, dus u krijgt een tijdslot en een sms een halfuur vooraf.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "ravels",
    title: "Bouwdroger huren in Ravels - Weelde en Poppel | Vernast",
    description:
      "Bouwdroger huren in Ravels, Weelde en Poppel: landelijke grenskernen op zandgrond. Binnen 24 uur geleverd en geplaatst.",
    h1: "Bouwdroger huren in Ravels",
    kicker: "Kempen · Ravels, Weelde en Poppel",
    rit: { afstand: "circa 47 km", tijd: "ongeveer vijfenveertig minuten" },
    intro: [
      "Ravels bestaat uit drie kernen tegen de Nederlandse grens: Ravels, Weelde en Poppel. Landelijk, ruim opgezet en met veel landbouw: wat er verbouwd wordt is doorgaans een woonhuis met stallen of schuren ernaast.",
      "Ons magazijn ligt op vijfenveertig minuten. We rijden deze hoek van de Kempen als dagronde; de kilometers komen niet op uw factuur.",
    ],
    bouw: {
      kop: "Landelijke kernen met hoeves en bijgebouwen",
      alineas: [
        "Een stal of schuur die woonruimte wordt is een groot volume en tijdens de werken zelden verwarmd. Onder 15 °C verliest een condensdroger het grootste deel van zijn rendement; dan kiezen we een adsorptiedroger die met een droogmiddel werkt, of zetten we er een kachel bij.",
        "Het woonhuis zelf heeft meestal massieve muren die hun vocht traag afgeven. Daar helpt luchtbeweging langs het oppervlak meer dan een tweede droger, en dat scheelt ook in de prijs.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "Voor een ruime vrijstaande woning: 110 liter per dag en bereik tot ongeveer 600 m³, één toestel per groot gelijkvloers." },
      { key: "teddh30", waarom: "De winterwerf: onder 15 °C zakt het rendement van elke condensdroger. Deze kachel brengt de ruimte eerst op temperatuur. Vraagt 400 V." },
      { key: "ttk350", waarom: "De aanvulling voor de verdieping, de garage of het bijgebouw: 70 liter per dag, pompklaar." },
      { key: "ttv4500", waarom: "Bij grote gelijkvloerse oppervlaktes verdeelt deze ventilator de droge lucht over de hele bouwlaag." },
    ],
    levering: {
      kop: "Leveren in Ravels: binnen 24 uur, als dagronde gepland",
      alinea:
        "Vijfenveertig minuten rijden. Elke werf op de ronde krijgt een tijdslot en een sms een halfuur vooraf. Bij een stal of schuur vragen we vooraf het volume en of de ruimte dicht te krijgen is.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Vijfenveertig minuten heen en evenveel terug. Voor een volledig pakket is leveren de betere keuze; voor één los toestel dat u lang houdt kan afhalen lonen.",
    },
    buren: ["arendonk", "oud-turnhout", "merksplas", "baarle-hertog"],
    faq: [
      {
        q: "Kunnen jullie een stal of een schuur drogen?",
        a: "Ja. We vragen vooraf het volume in kubieke meter, de vloeropbouw en of de ruimte dicht te krijgen is. Is ze niet te verwarmen, dan zetten we een adsorptiedroger in die ook bij lage temperaturen vocht opneemt.",
      },
      {
        q: "Wat als het vriest tijdens de droging?",
        a: "Dan verwarmen we mee. Een condensdroger verliest onder 15 °C het grootste deel van zijn rendement, en een ruwbouw in Ravels komt in de winter zelden boven tien graden. We zetten er dan een elektrische kachel bij die de ruimte op werkingstemperatuur houdt; die vraagt 400 V krachtstroom.",
      },
      {
        q: "Betaal ik een kilometerkost voor Ravels?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket. De rit telt mee in onze planning, niet in uw factuur; voor de verste gemeenten vragen we liefst een dag speling.",
      },
      {
        q: "Hoe snel staan jullie in Ravels?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfenveertig minuten en we plannen hem als onderdeel van een dagronde door de Kempen, dus u krijgt een tijdslot en een sms een halfuur vooraf.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "baarle-hertog",
    title: "Bouwdroger huren in Baarle-Hertog | Vernast",
    description:
      "Bouwdroger huren in Baarle-Hertog: Belgische enclaves in Nederlands gebied, landelijk en op zandgrond. Binnen 24 uur geleverd.",
    h1: "Bouwdroger huren in Baarle-Hertog",
    kicker: "Kempen · enclaves aan de grens",
    rit: { afstand: "circa 46 km", tijd: "ongeveer vijfenveertig minuten" },
    intro: [
      "Baarle-Hertog is de gemeente van de enclaves: Belgische percelen die midden in Nederlands grondgebied liggen, soms met de grens dwars door een woning. Voor een droging maakt dat niets uit, maar voor een adres wel.",
      "Geef bij de reservatie daarom het volledige adres op, met de huisnummerletter als die er is. Ons magazijn ligt op vijfenveertig minuten.",
    ],
    bouw: {
      kop: "Landelijke bebouwing op zand, met een grens ertussen",
      alineas: [
        "De bebouwing is landelijk en ruim: vrijstaande woningen op grote percelen, hoeves, en bijgebouwen die mee worden verbouwd. De bodem is zand en draineert goed, dus het werk is bijna altijd bouwvocht.",
        "Wat hier meespeelt is de winter. De Kempen heeft de koudste winterwerven van Vlaanderen, en onder 15 °C haalt een condensdroger nog maar een fractie van zijn capaciteit. Tussen november en maart hoort er dan ook vaak een kachel bij het pakket.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "Voor een ruime vrijstaande woning: 110 liter per dag en bereik tot ongeveer 600 m³, één toestel per groot gelijkvloers." },
      { key: "teddh30", waarom: "De winterwerf: onder 15 °C zakt het rendement van elke condensdroger. Deze kachel brengt de ruimte eerst op temperatuur. Vraagt 400 V." },
      { key: "ttk350", waarom: "De aanvulling voor de verdieping, de garage of het bijgebouw: 70 liter per dag, pompklaar." },
      { key: "ttv4500", waarom: "Bij grote gelijkvloerse oppervlaktes verdeelt deze ventilator de droge lucht over de hele bouwlaag." },
    ],
    levering: {
      kop: "Leveren in Baarle-Hertog: binnen 24 uur, met het juiste adres",
      alinea:
        "Vijfenveertig minuten rijden, gepland als onderdeel van een dagronde. Geef bij de reservatie het volledige adres op: door de enclaves liggen Belgische en Nederlandse huisnummers soms in dezelfde straat.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Vijfenveertig minuten heen en evenveel terug. Voor een volledig pakket is leveren de betere keuze, zeker omdat de technieker ter plaatse ook meet.",
    },
    buren: ["ravels", "merksplas", "hoogstraten", "arendonk"],
    faq: [
      {
        q: "Jullie leveren toch ook in de enclaves?",
        a: "Ja. Voor ons is het een adres als een ander; geef bij de reservatie wel het volledige adres op, met de huisnummerletter als die er is. Door de enclaves liggen Belgische en Nederlandse huisnummers soms in dezelfde straat.",
      },
      {
        q: "Betaal ik een kilometerkost?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket. De rit telt mee in onze planning, niet in uw factuur; voor de verste gemeenten vragen we liefst een dag speling.",
      },
      {
        q: "Hoeveel toestellen heb ik nodig voor een vrijstaande woning?",
        a: "Voor een gelijkvloers van 120 tot 150 m² rekenen we doorgaans op twee drogers met een ventilator per droogzone, en vaak een derde voor de verdieping of het bijgebouw. Wij rekenen op volume in kubieke meter en niet op oppervlakte: een hoog plafond telt zwaarder dan extra vierkante meters.",
      },
      {
        q: "Wat als het vriest tijdens de droging?",
        a: "Dan verwarmen we mee. Een condensdroger verliest onder 15 °C het grootste deel van zijn rendement, en een ruwbouw in Baarle-Hertog komt in de winter zelden boven tien graden. We zetten er dan een elektrische kachel bij die de ruimte op werkingstemperatuur houdt; die vraagt 400 V krachtstroom.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "retie",
    title: "Bouwdroger huren in Retie | Vernast",
    description:
      "Bouwdroger huren in Retie: landelijke kern op zandgrond, met ruime percelen en bijgebouwen. Binnen 24 uur geleverd en geplaatst.",
    h1: "Bouwdroger huren in Retie",
    kicker: "Kempen · landelijk, op zandgrond",
    rit: { afstand: "circa 45 km", tijd: "ongeveer vijfenveertig minuten" },
    intro: [
      "Retie is landelijk en bosrijk, met ruime percelen en vrijstaande woningen. Wat er verbouwd wordt is doorgaans groot, met een bijgebouw of een schuur die mee wordt afgewerkt.",
      "Ons magazijn ligt op vijfenveertig minuten; we rijden de noordoostelijke Kempen als dagronde.",
    ],
    bouw: {
      kop: "Vrijstaande woningen op zand, met bijgebouwen",
      alineas: [
        "De zandgrond draineert goed, dus kelders zijn hier zeldzamer dan in een vallei. Het werk is bijna altijd bouwvocht uit renovatie of nieuwbouw, en dat verdwijnt definitief. Wat telt is capaciteit naar volume: een open leefruimte met een hoog plafond weegt zwaarder dan extra vierkante meters.",
        "Een bijgebouw dat mee wordt verbouwd is tijdens de werken zelden verwarmd, en onder 15 °C zakt het rendement van elke condensdroger. In de winter gaat er dan een kachel mee of kiezen we meteen een adsorptiedroger.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "Voor een ruime vrijstaande woning: 110 liter per dag en bereik tot ongeveer 600 m³, één toestel per groot gelijkvloers." },
      { key: "teddh30", waarom: "De winterwerf: onder 15 °C zakt het rendement van elke condensdroger. Deze kachel brengt de ruimte eerst op temperatuur. Vraagt 400 V." },
      { key: "ttk350", waarom: "De aanvulling voor de verdieping, de garage of het bijgebouw: 70 liter per dag, pompklaar." },
      { key: "ttv4500", waarom: "Bij grote gelijkvloerse oppervlaktes verdeelt deze ventilator de droge lucht over de hele bouwlaag." },
    ],
    levering: {
      kop: "Leveren in Retie: binnen 24 uur, als dagronde gepland",
      alinea:
        "Vijfenveertig minuten rijden. Elke werf op de ronde krijgt een tijdslot en een sms een halfuur vooraf. Op een winterwerf controleert de technieker eerst of de werfkast 400 V levert voor de kachel.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Vijfenveertig minuten heen en evenveel terug. Voor een volledig pakket is leveren de betere keuze.",
    },
    buren: ["dessel", "arendonk", "kasterlee", "oud-turnhout"],
    faq: [
      {
        q: "Hoeveel toestellen heb ik nodig voor een vrijstaande woning?",
        a: "Voor een gelijkvloers van 120 tot 150 m² rekenen we doorgaans op twee drogers met een ventilator per droogzone, en vaak een derde voor de verdieping of het bijgebouw. Wij rekenen op volume in kubieke meter en niet op oppervlakte: een hoog plafond telt zwaarder dan extra vierkante meters.",
      },
      {
        q: "Wat als het vriest tijdens de droging?",
        a: "Dan verwarmen we mee. Een condensdroger verliest onder 15 °C het grootste deel van zijn rendement, en een ruwbouw in Retie komt in de winter zelden boven tien graden. We zetten er dan een elektrische kachel bij die de ruimte op werkingstemperatuur houdt; die vraagt 400 V krachtstroom.",
      },
      {
        q: "Betaal ik een kilometerkost voor Retie?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket. De rit telt mee in onze planning, niet in uw factuur; voor de verste gemeenten vragen we liefst een dag speling.",
      },
      {
        q: "Hoe snel staan jullie in Retie?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfenveertig minuten en we plannen hem als onderdeel van een dagronde door de Kempen, dus u krijgt een tijdslot en een sms een halfuur vooraf.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "dessel",
    title: "Bouwdroger huren in Dessel | Vernast",
    description:
      "Bouwdroger huren in Dessel: kanaaldorp op zandgrond met bedrijventerreinen en landelijke kern. Binnen 24 uur geleverd en geplaatst.",
    h1: "Bouwdroger huren in Dessel",
    kicker: "Kempen · aan de kanalen",
    rit: { afstand: "circa 48 km", tijd: "ongeveer vijftig minuten" },
    intro: [
      "Dessel ligt waar de Kempense kanalen samenkomen, met bedrijventerreinen aan het water en een landelijke kern ernaast. De bodem is zand; de zandwinning hier is er zelfs een bedrijfstak van gemaakt.",
      "Ons magazijn ligt op vijftig minuten. Die rit telt mee in onze planning, niet in uw factuur.",
    ],
    bouw: {
      kop: "Bedrijfsruimtes aan het kanaal, woningen in de kern",
      alineas: [
        "Bij een bedrijfsruimte is de eerste vraag of ze dicht te krijgen is: een droger tegen een open poort werkt tegen de buitenlucht in. Bij stilstand die geld kost zetten we liever meer toestellen korter dan één toestel lang; u huurt dan minder dagen.",
        "In de kern gaat het om bouwvocht uit renovatie en nieuwbouw op zandgrond. Dat verdwijnt definitief, maar in de winter zakt het rendement van een condensdroger onder 15 °C; dan hoort er een kachel bij.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "Voor een ruime vrijstaande woning: 110 liter per dag en bereik tot ongeveer 600 m³, één toestel per groot gelijkvloers." },
      { key: "teddh30", waarom: "De winterwerf: onder 15 °C zakt het rendement van elke condensdroger. Deze kachel brengt de ruimte eerst op temperatuur. Vraagt 400 V." },
      { key: "ttk350", waarom: "De aanvulling voor de verdieping, de garage of het bijgebouw: 70 liter per dag, pompklaar." },
      { key: "ttv4500", waarom: "Bij grote gelijkvloerse oppervlaktes verdeelt deze ventilator de droge lucht over de hele bouwlaag." },
    ],
    levering: {
      kop: "Leveren in Dessel: binnen 24 uur, als dagronde gepland",
      alinea:
        "Vijftig minuten rijden. Bij een bedrijfsruimte vragen we vooraf het volume in kubieke meter, de vloeropbouw en of de ruimte dicht te krijgen is. Voor de verste gemeenten vragen we liefst een dag speling.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Vijftig minuten heen en evenveel terug. Voor een volledig pakket is leveren altijd de betere keuze.",
    },
    buren: ["retie", "balen", "mol", "arendonk"],
    faq: [
      {
        q: "Kunnen jullie een bedrijfsruimte of loods drogen?",
        a: "Ja. We vragen vooraf het volume in kubieke meter, de vloeropbouw en of de ruimte dicht te krijgen is. Bij grote volumes zetten we meerdere drogers met ventilatoren in plaats van één toestel langer te laten staan: dat is sneller en meestal goedkoper.",
      },
      {
        q: "Wat als het vriest tijdens de droging?",
        a: "Dan verwarmen we mee. Een condensdroger verliest onder 15 °C het grootste deel van zijn rendement, en een ruwbouw in Dessel komt in de winter zelden boven tien graden. We zetten er dan een elektrische kachel bij die de ruimte op werkingstemperatuur houdt; die vraagt 400 V krachtstroom.",
      },
      {
        q: "Betaal ik een kilometerkost voor Dessel?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket. De rit telt mee in onze planning, niet in uw factuur; voor de verste gemeenten vragen we liefst een dag speling.",
      },
      {
        q: "Hoe snel staan jullie in Dessel?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijftig minuten en we plannen hem als onderdeel van een dagronde door de Kempen, dus u krijgt een tijdslot en een sms een halfuur vooraf.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "kasterlee",
    title: "Bouwdroger huren in Kasterlee | Vernast",
    description:
      "Bouwdroger huren in Kasterlee, Lichtaart en Tielen: bosrijke kernen met woningen en verblijven. Binnen 24 uur geleverd en geplaatst.",
    h1: "Bouwdroger huren in Kasterlee",
    kicker: "Kempen · Kasterlee, Lichtaart en Tielen",
    rit: { afstand: "circa 40 km", tijd: "ongeveer veertig minuten" },
    intro: [
      "Kasterlee is bosrijk en toeristisch, met Lichtaart en Tielen erbij: naast gewone woningen staan hier vakantieverblijven, chalets en horeca in het groen.",
      "Dat levert twee soorten werven op: renovaties van vrijstaande woningen, en verblijven die maanden gesloten staan en daardoor muf worden. Ons magazijn ligt op veertig minuten.",
    ],
    bouw: {
      kop: "Woningen in het groen, en verblijven die leegstaan",
      alineas: [
        "Een verblijf dat lang gesloten staat, droogt niet vanzelf: zonder verluchting blijft de lucht binnen verzadigd en slaat vocht neer op de koudste vlakken. Dat geeft de muffe geur en op termijn schimmel in de hoeken. Een compact toestel met een condenspomp haalt dat eruit zonder dat iemand reservoirs moet legen.",
        "Bij de woningen gaat het om bouwvocht en om volume. Een vrijstaande woning bevat meer lucht dan een rijhuis en heeft dus meer capaciteit nodig; in de winter komt daar de temperatuur bij, want onder 15 °C zakt het rendement van elke condensdroger.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "Voor een ruime vrijstaande woning: 110 liter per dag en bereik tot ongeveer 600 m³, één toestel per groot gelijkvloers." },
      { key: "teddh30", waarom: "De winterwerf: onder 15 °C zakt het rendement van elke condensdroger. Deze kachel brengt de ruimte eerst op temperatuur. Vraagt 400 V." },
      { key: "ttk350", waarom: "De aanvulling voor de verdieping, de garage of het bijgebouw: 70 liter per dag, pompklaar." },
      { key: "ttv4500", waarom: "Bij grote gelijkvloerse oppervlaktes verdeelt deze ventilator de droge lucht over de hele bouwlaag." },
    ],
    levering: {
      kop: "Leveren in Kasterlee: binnen 24 uur, in een dagronde",
      alinea:
        "Veertig minuten rijden. U krijgt een tijdslot en een sms een halfuur vooraf. Staat het pand leeg, spreek dan af wie de technieker binnenlaat: de toestellen worden geplaatst, aangesloten en ingesteld, met een meting vooraf.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Veertig minuten heen en evenveel terug. Voor één los toestel dat u langere tijd houdt kan dat lonen.",
    },
    buren: ["lille", "retie", "herentals", "oud-turnhout"],
    faq: [
      {
        q: "Mijn vakantieverblijf ruikt muf na de winter. Wat helpt?",
        a: "Een compact toestel met een condenspomp, een week of twee. Zonder verluchting blijft de lucht binnen verzadigd en slaat vocht neer op de koudste vlakken; dat geeft de geur en uiteindelijk schimmel in de hoeken. Met een pomp hoeft niemand reservoirs te legen.",
      },
      {
        q: "Moet er iemand aanwezig zijn bij de levering?",
        a: "Ja, iemand die de technieker binnenlaat en kan tekenen. De toestellen worden niet alleen afgezet maar ook geplaatst, aangesloten en ingesteld, en er gaat een vochtmeting aan vooraf.",
      },
      {
        q: "Betaal ik een kilometerkost voor Kasterlee?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket. De rit telt mee in onze planning, niet in uw factuur; voor de verste gemeenten vragen we liefst een dag speling.",
      },
      {
        q: "Hoe snel staan jullie in Kasterlee?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer veertig minuten en we plannen hem als onderdeel van een dagronde door de Kempen, dus u krijgt een tijdslot en een sms een halfuur vooraf.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "olen",
    title: "Bouwdroger huren in Olen | Vernast",
    description:
      "Bouwdroger huren in Olen: industriegemeente aan het Albertkanaal met woonkernen errond. Binnen 24 uur geleverd en geplaatst.",
    h1: "Bouwdroger huren in Olen",
    kicker: "Kempen · industrie aan het kanaal",
    rit: { afstand: "circa 33 km", tijd: "ongeveer vijfendertig minuten" },
    intro: [
      "Olen heeft twee gezichten: bedrijventerreinen aan het Albertkanaal, en landelijke woonkernen eromheen. Wij komen er voor allebei, met twee verschillende opstellingen.",
      "Ons magazijn ligt op een vijfendertigtal minuten via de E313. We rijden de Kempen in een dagronde.",
    ],
    bouw: {
      kop: "Bedrijfsgebouwen aan het kanaal, woningen in de kernen",
      alineas: [
        "Bij een bedrijfsruimte telt eerst of ze dicht te krijgen is: een droger tegen een open poort werkt tegen de buitenlucht in. Daarna telt snelheid, want stilstand kost geld. We zetten dan liever meer toestellen korter dan één toestel lang; u huurt minder dagen en bent sneller klaar.",
        "In de woonkernen gaat het om bouwvocht uit renovatie: een nieuwe chape, pleisterwerk, een aanbouw. Dat verdwijnt definitief, en met een toestel per bouwlaag plus een ventilator is dat weken in plaats van maanden.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "Voor een ruime vrijstaande woning: 110 liter per dag en bereik tot ongeveer 600 m³, één toestel per groot gelijkvloers." },
      { key: "teddh30", waarom: "De winterwerf: onder 15 °C zakt het rendement van elke condensdroger. Deze kachel brengt de ruimte eerst op temperatuur. Vraagt 400 V." },
      { key: "ttk350", waarom: "De aanvulling voor de verdieping, de garage of het bijgebouw: 70 liter per dag, pompklaar." },
      { key: "ttv4500", waarom: "Bij grote gelijkvloerse oppervlaktes verdeelt deze ventilator de droge lucht over de hele bouwlaag." },
    ],
    levering: {
      kop: "Leveren in Olen: binnen 24 uur, over de E313",
      alinea:
        "Een vijfendertigtal minuten rijden. Bij een bedrijfsruimte vragen we vooraf het volume in kubieke meter, de vloeropbouw en of de ruimte dicht te krijgen is. Bij een woning verdeelt de technieker de toestellen over droogzones.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een vijfendertigtal minuten rijden. Voor één los toestel kan dat lonen; voor een volledig pakket zit de rit al in de prijs.",
    },
    buren: ["herentals", "westerlo", "geel", "herenthout"],
    faq: [
      {
        q: "Kunnen jullie een productiehal of magazijn drogen?",
        a: "Ja, en dat doen we regelmatig. We vragen vooraf het volume in kubieke meter, de vloeropbouw en of de ruimte dicht te krijgen is. Bij stilstand die geld kost zetten we liever meer toestellen korter dan één toestel lang.",
      },
      {
        q: "Wat als het vriest tijdens de droging?",
        a: "Dan verwarmen we mee. Een condensdroger verliest onder 15 °C het grootste deel van zijn rendement, en een ruwbouw in Olen komt in de winter zelden boven tien graden. We zetten er dan een elektrische kachel bij die de ruimte op werkingstemperatuur houdt; die vraagt 400 V krachtstroom.",
      },
      {
        q: "Betaal ik een kilometerkost voor Olen?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket. De rit telt mee in onze planning, niet in uw factuur; voor de verste gemeenten vragen we liefst een dag speling.",
      },
      {
        q: "Hoe snel staan jullie in Olen?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfendertig minuten en we plannen hem als onderdeel van een dagronde door de Kempen, dus u krijgt een tijdslot en een sms een halfuur vooraf.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "westerlo",
    title: "Bouwdroger huren in Westerlo | Vernast",
    description:
      "Bouwdroger huren in Westerlo: Netevallei en bossen, met landelijke kernen en ruime woningen. Binnen 24 uur geleverd en geplaatst.",
    h1: "Bouwdroger huren in Westerlo",
    kicker: "Kempen · Netevallei en bossen",
    rit: { afstand: "circa 36 km", tijd: "ongeveer veertig minuten" },
    intro: [
      "Westerlo ligt in de vallei van de Grote Nete, met Tongerlo, Oevel, Zoerle-Parwijs en Heultje erbij. Bossen en kasteeldomeinen aan de ene kant, landelijke kernen en verkavelingen aan de andere.",
      "In de vallei ligt het land lager en komt water in kelders terug bij een hoge waterstand. Ons magazijn ligt op veertig minuten.",
    ],
    bouw: {
      kop: "De Netevallei, en ruime woningen op de hoger gelegen delen",
      alineas: [
        "Bij water in een kelder is de volgorde wat telt: eerst het staande water en het natte materiaal weg, dan pas drogen. Wat in de muren en de vloerplaat is getrokken, blijft er weken in zitten, en dat is precies het deel dat terugkomt als u het laat.",
        "Op de hoger gelegen delen gaat het om gewoon bouwvocht uit renovatie en nieuwbouw. Dat verdwijnt definitief, maar het vraagt capaciteit naar volume: een vrijstaande woning bevat meer lucht dan een rijhuis.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "Het werkpaard na hoogwater: 70 liter per dag, genoeg om een ondergelopen kelder of gelijkvloers in te halen." },
      { key: "ttv4500", waarom: "Water kruipt onder vloeren en achter plinten. Zonder luchtbeweging droogt dat niet; met deze ventilator wel." },
      { key: "revolution", waarom: "Voor een kelder die niet te verwarmen is: de adsorptiedroger blijft ook bij lage temperaturen vocht opnemen." },
      { key: "ttk650", waarom: "Voor een groot gelijkvloers of een bijgebouw: 110 liter per dag, bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Westerlo: binnen 24 uur, in een dagronde",
      alinea:
        "Veertig minuten rijden. Bij waterschade krijgt uw dossier voorrang: bel ons zodra het staande water weg is. De technieker meet eerst waar het vocht zit, want wat onder een dekvloer is gekropen droogt niet mee met de ruimte.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Veertig minuten heen en evenveel terug. Bij waterschade is laten leveren vrijwel altijd beter: dan staat alles dezelfde dag geplaatst en ingesteld, met een meting erbij.",
    },
    buren: ["herselt", "hulshout", "olen", "laakdal"],
    faq: [
      {
        q: "Mijn kelder is ondergelopen. Wat doe ik eerst?",
        a: "Eerst het staande water weg en nat materiaal eruit: tapijt, isolatie, kartonnen dozen. Pas daarna heeft drogen zin, want een bouwdroger haalt vocht uit de lucht en uit materialen, hij pompt geen water weg. Bel ons zodra de kelder leeg is, want op vochtig materiaal begint schimmel na 24 tot 48 uur.",
      },
      {
        q: "Komt het vocht terug na een volgende hoge waterstand?",
        a: "Het bouwvocht dat we eruit halen niet, dat is definitief weg. Komt het water opnieuw binnen langs dezelfde weg, dan begint het opnieuw. Drogen voorkomt wel wat er anders achterblijft: schimmel, een muffe geur en vocht dat maanden in de muren zit.",
      },
      {
        q: "Betaal ik een kilometerkost voor Westerlo?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket. De rit telt mee in onze planning, niet in uw factuur; voor de verste gemeenten vragen we liefst een dag speling.",
      },
      {
        q: "Hoe snel staan jullie in Westerlo?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer veertig minuten en we plannen hem als onderdeel van een dagronde door de Kempen, dus u krijgt een tijdslot en een sms een halfuur vooraf.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "herselt",
    title: "Bouwdroger huren in Herselt | Vernast",
    description:
      "Bouwdroger huren in Herselt: bosrijke Zuiderkempen met ruime percelen en bijgebouwen. Binnen 24 uur geleverd en geplaatst.",
    h1: "Bouwdroger huren in Herselt",
    kicker: "Zuiderkempen · bosrijk, op zandgrond",
    rit: { afstand: "circa 40 km", tijd: "ongeveer veertig minuten" },
    intro: [
      "Herselt ligt in de bosrijke Zuiderkempen, met Ramsel en Blauberg erbij. Ruime percelen, veel groen, en vrijstaande woningen die nu een voor een worden aangepakt.",
      "De bodem is zand en draineert goed. Ons magazijn ligt op veertig minuten; we rijden deze hoek in een dagronde.",
    ],
    bouw: {
      kop: "Vrijstaande woningen in het groen, met bijgebouwen",
      alineas: [
        "Een vrijstaande woning heeft meer capaciteit nodig dan een rijhuis, niet omdat ze trager droogt maar omdat er meer lucht in zit. Wij rekenen op volume in kubieke meter en niet op oppervlakte.",
        "Veel werven hier bevatten een bijgebouw of een schuur die mee wordt afgewerkt. Die ruimtes zijn tijdens de werken zelden verwarmd, en onder 15 °C verliest een condensdroger het grootste deel van zijn rendement. Dan gaat er een kachel mee, of meteen een adsorptiedroger.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "Voor een ruime vrijstaande woning: 110 liter per dag en bereik tot ongeveer 600 m³, één toestel per groot gelijkvloers." },
      { key: "teddh30", waarom: "De winterwerf: onder 15 °C zakt het rendement van elke condensdroger. Deze kachel brengt de ruimte eerst op temperatuur. Vraagt 400 V." },
      { key: "ttk350", waarom: "De aanvulling voor de verdieping, de garage of het bijgebouw: 70 liter per dag, pompklaar." },
      { key: "ttv4500", waarom: "Bij grote gelijkvloerse oppervlaktes verdeelt deze ventilator de droge lucht over de hele bouwlaag." },
    ],
    levering: {
      kop: "Leveren in Herselt: binnen 24 uur, in een dagronde",
      alinea:
        "Veertig minuten rijden. U krijgt een tijdslot en een sms een halfuur vooraf. Op een winterwerf controleert de technieker eerst of de werfkast 400 V levert voor de kachel.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Veertig minuten heen en evenveel terug. Voor een volledig pakket is leveren de betere keuze.",
    },
    buren: ["westerlo", "hulshout", "heist-op-den-berg", "laakdal"],
    faq: [
      {
        q: "Hoeveel toestellen heb ik nodig voor een vrijstaande woning?",
        a: "Voor een gelijkvloers van 120 tot 150 m² rekenen we doorgaans op twee drogers met een ventilator per droogzone, en vaak een derde voor de verdieping of het bijgebouw. Wij rekenen op volume in kubieke meter en niet op oppervlakte: een hoog plafond telt zwaarder dan extra vierkante meters.",
      },
      {
        q: "Wat als het vriest tijdens de droging?",
        a: "Dan verwarmen we mee. Een condensdroger verliest onder 15 °C het grootste deel van zijn rendement, en een ruwbouw in Herselt komt in de winter zelden boven tien graden. We zetten er dan een elektrische kachel bij die de ruimte op werkingstemperatuur houdt; die vraagt 400 V krachtstroom.",
      },
      {
        q: "Betaal ik een kilometerkost voor Herselt?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket. De rit telt mee in onze planning, niet in uw factuur; voor de verste gemeenten vragen we liefst een dag speling.",
      },
      {
        q: "Hoe snel staan jullie in Herselt?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer veertig minuten en we plannen hem als onderdeel van een dagronde door de Kempen, dus u krijgt een tijdslot en een sms een halfuur vooraf.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "hulshout",
    title: "Bouwdroger huren in Hulshout | Vernast",
    description:
      "Bouwdroger huren in Hulshout, Houtvenne en Westmeerbeek: Netevallei met hoogwater. Binnen 24 uur geleverd en geplaatst.",
    h1: "Bouwdroger huren in Hulshout",
    kicker: "Netevallei · Hulshout, Houtvenne en Westmeerbeek",
    rit: { afstand: "circa 33 km", tijd: "ongeveer vijfendertig minuten" },
    intro: [
      "Hulshout ligt in de vallei van de Grote Nete, met Houtvenne en Westmeerbeek erbij. Bij een hoge waterstand komt water in kelders en gelijkvloerse ruimtes terug, soms twee winters na elkaar.",
      "Daarnaast is er het gewone werk: renovaties in de kernen en verkavelingen eromheen. Ons magazijn ligt op een vijfendertigtal minuten.",
    ],
    bouw: {
      kop: "De Netevallei, en renovaties in de kernen",
      alineas: [
        "Bij water in een kelder is leegpompen de eerste stap en drogen de tweede. Wat in de muren en de vloerplaat is getrokken zit er weken later nog in, en zonder droging komt dat terug als schimmel en een muffe geur. Op vochtig materiaal begint schimmel al na 24 tot 48 uur.",
        "In de kernen gaat het om bouwvocht: een nieuwe chape, vers pleisterwerk, een uitbouw. Dat verdwijnt definitief, en met een toestel per bouwlaag plus een ventilator is dat weken in plaats van maanden.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "Het werkpaard na hoogwater: 70 liter per dag, genoeg om een ondergelopen kelder of gelijkvloers in te halen." },
      { key: "ttv4500", waarom: "Water kruipt onder vloeren en achter plinten. Zonder luchtbeweging droogt dat niet; met deze ventilator wel." },
      { key: "revolution", waarom: "Voor een kelder die niet te verwarmen is: de adsorptiedroger blijft ook bij lage temperaturen vocht opnemen." },
      { key: "ttk650", waarom: "Voor een groot gelijkvloers of een bijgebouw: 110 liter per dag, bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Hulshout: binnen 24 uur, bij waterschade met voorrang",
      alinea:
        "Een vijfendertigtal minuten rijden. Bel ons zodra het staande water weg is, dan kijken we of het dezelfde dag nog lukt. De technieker meet bij aankomst waar het vocht zit en verdeelt de toestellen daarop.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een vijfendertigtal minuten rijden. Bij waterschade is laten leveren vrijwel altijd beter: dan staat alles dezelfde dag geplaatst en ingesteld.",
    },
    buren: ["heist-op-den-berg", "westerlo", "herselt", "herenthout"],
    faq: [
      {
        q: "Mijn kelder is ondergelopen. Wat doe ik eerst?",
        a: "Eerst het staande water weg en nat materiaal eruit: tapijt, isolatie, kartonnen dozen. Pas daarna heeft drogen zin, want een bouwdroger haalt vocht uit de lucht en uit materialen, hij pompt geen water weg. Bel ons zodra de kelder leeg is, want op vochtig materiaal begint schimmel na 24 tot 48 uur.",
      },
      {
        q: "Komt het vocht terug na een volgende hoge waterstand?",
        a: "Het bouwvocht dat we eruit halen niet, dat is definitief weg. Komt het water opnieuw binnen langs dezelfde weg, dan begint het opnieuw. Drogen voorkomt wel wat er anders achterblijft: schimmel, een muffe geur en vocht dat maanden in de muren zit.",
      },
      {
        q: "Betaal ik een kilometerkost voor Hulshout?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket. De rit telt mee in onze planning, niet in uw factuur; voor de verste gemeenten vragen we liefst een dag speling.",
      },
      {
        q: "Hoe snel staan jullie in Hulshout?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfendertig minuten en we plannen hem als onderdeel van een dagronde door de Kempen, dus u krijgt een tijdslot en een sms een halfuur vooraf.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "laakdal",
    title: "Bouwdroger huren in Laakdal | Vernast",
    description:
      "Bouwdroger huren in Laakdal, Vorst, Veerle en Eindhout: valleigrond met industrie en landelijke kernen. Binnen 24 uur geleverd.",
    h1: "Bouwdroger huren in Laakdal",
    kicker: "Zuiderkempen · Vorst, Veerle en Eindhout",
    rit: { afstand: "circa 45 km", tijd: "ongeveer vijftig minuten" },
    intro: [
      "Laakdal bestaat uit Vorst, Veerle en Eindhout, in de vallei van de Grote Laak en de Nete. Landelijke kernen met bedrijventerreinen ertussen, en lager gelegen land waar het grondwater hoog staat.",
      "Ons magazijn ligt op vijftig minuten. Die rit telt mee in onze planning, niet in uw factuur.",
    ],
    bouw: {
      kop: "Valleigrond, bedrijfsruimtes en landelijke kernen",
      alineas: [
        "In het lager gelegen land komt water in kelders en kruipruimtes terug na een natte periode. Leegpompen is de eerste stap, drogen de tweede, en snelheid telt: op vochtig materiaal begint schimmel na 24 tot 48 uur.",
        "Bij een bedrijfsruimte is de eerste vraag of ze dicht te krijgen is, want een droger tegen een open poort werkt tegen de buitenlucht in. Bij stilstand die geld kost zetten we liever meer toestellen korter dan één toestel lang.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "Het werkpaard na hoogwater: 70 liter per dag, genoeg om een ondergelopen kelder of gelijkvloers in te halen." },
      { key: "ttv4500", waarom: "Water kruipt onder vloeren en achter plinten. Zonder luchtbeweging droogt dat niet; met deze ventilator wel." },
      { key: "revolution", waarom: "Voor een kelder die niet te verwarmen is: de adsorptiedroger blijft ook bij lage temperaturen vocht opnemen." },
      { key: "ttk650", waarom: "Voor een groot gelijkvloers of een bijgebouw: 110 liter per dag, bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Laakdal: binnen 24 uur, als dagronde gepland",
      alinea:
        "Vijftig minuten rijden. Elke werf op de ronde krijgt een tijdslot en een sms een halfuur vooraf. Bij een bedrijfsruimte vragen we vooraf het volume in kubieke meter en of de ruimte dicht te krijgen is.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Vijftig minuten heen en evenveel terug. Voor een volledig pakket is leveren altijd de betere keuze.",
    },
    buren: ["westerlo", "meerhout", "geel", "herselt"],
    faq: [
      {
        q: "Mijn kelder is ondergelopen. Wat doe ik eerst?",
        a: "Eerst het staande water weg en nat materiaal eruit: tapijt, isolatie, kartonnen dozen. Pas daarna heeft drogen zin, want een bouwdroger haalt vocht uit de lucht en uit materialen, hij pompt geen water weg. Bel ons zodra de kelder leeg is, want op vochtig materiaal begint schimmel na 24 tot 48 uur.",
      },
      {
        q: "Komt het vocht terug na een volgende hoge waterstand?",
        a: "Het bouwvocht dat we eruit halen niet, dat is definitief weg. Komt het water opnieuw binnen langs dezelfde weg, dan begint het opnieuw. Drogen voorkomt wel wat er anders achterblijft: schimmel, een muffe geur en vocht dat maanden in de muren zit.",
      },
      {
        q: "Betaal ik een kilometerkost voor Laakdal?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket. De rit telt mee in onze planning, niet in uw factuur; voor de verste gemeenten vragen we liefst een dag speling.",
      },
      {
        q: "Hoe snel staan jullie in Laakdal?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijftig minuten en we plannen hem als onderdeel van een dagronde door de Kempen, dus u krijgt een tijdslot en een sms een halfuur vooraf.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "meerhout",
    title: "Bouwdroger huren in Meerhout | Vernast",
    description:
      "Bouwdroger huren in Meerhout: landelijke kern aan de Grote Nete, met ruime percelen. Binnen 24 uur geleverd, geplaatst en ingesteld.",
    h1: "Bouwdroger huren in Meerhout",
    kicker: "Zuiderkempen · aan de Grote Nete",
    rit: { afstand: "circa 46 km", tijd: "ongeveer vijftig minuten" },
    intro: [
      "Meerhout ligt aan de Grote Nete, landelijk en ruim opgezet, met Gestel en Zittaart erbij. In de vallei ligt het land laag; daarbuiten staan vrijstaande woningen op grote percelen.",
      "Ons magazijn ligt op vijftig minuten. We rijden deze hoek van de Kempen als dagronde.",
    ],
    bouw: {
      kop: "De Nete in de vallei, vrijstaande woningen daarbuiten",
      alineas: [
        "In de vallei komt water in kelders en kruipruimtes terug bij een hoge waterstand. Een kruipruimte zonder doorstroming blijft bovendien ook zonder hoogwater vochtig; dat trekt via de vloer naar boven als een muffe geur in de woonkamer.",
        "Daarbuiten gaat het om bouwvocht en om volume. Een vrijstaande woning bevat meer lucht dan een rijhuis en heeft dus meer capaciteit nodig, en in de winter komt de temperatuur erbij: onder 15 °C zakt het rendement van elke condensdroger.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "Het werkpaard na hoogwater: 70 liter per dag, genoeg om een ondergelopen kelder of gelijkvloers in te halen." },
      { key: "ttv4500", waarom: "Water kruipt onder vloeren en achter plinten. Zonder luchtbeweging droogt dat niet; met deze ventilator wel." },
      { key: "revolution", waarom: "Voor een kelder die niet te verwarmen is: de adsorptiedroger blijft ook bij lage temperaturen vocht opnemen." },
      { key: "ttk650", waarom: "Voor een groot gelijkvloers of een bijgebouw: 110 liter per dag, bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Meerhout: binnen 24 uur, als dagronde gepland",
      alinea:
        "Vijftig minuten rijden. Elke werf op de ronde krijgt een tijdslot en een sms een halfuur vooraf. Bij een vochtige kruipruimte plaatst de technieker de slangen zo dat u er zelf niet in hoeft.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Vijftig minuten heen en evenveel terug. Voor een volledig pakket is leveren altijd de betere keuze.",
    },
    buren: ["laakdal", "balen", "mol", "geel"],
    faq: [
      {
        q: "Mijn woonkamer ruikt muf. Waar komt dat vandaan?",
        a: "Vaak uit de kruipruimte eronder. Die staat in de vallei zelden droog: er is geen doorstroming, de bodem geeft vocht af en dat trekt via de vloer naar boven. U droogt zo'n ruimte met een adsorptiedroger die via slangen door een bestaand luik blaast; u hoeft er zelf niet in.",
      },
      {
        q: "Mijn kelder is ondergelopen. Wat doe ik eerst?",
        a: "Eerst het staande water weg en nat materiaal eruit: tapijt, isolatie, kartonnen dozen. Pas daarna heeft drogen zin, want een bouwdroger haalt vocht uit de lucht en uit materialen, hij pompt geen water weg. Bel ons zodra de kelder leeg is, want op vochtig materiaal begint schimmel na 24 tot 48 uur.",
      },
      {
        q: "Betaal ik een kilometerkost voor Meerhout?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket. De rit telt mee in onze planning, niet in uw factuur; voor de verste gemeenten vragen we liefst een dag speling.",
      },
      {
        q: "Hoe snel staan jullie in Meerhout?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijftig minuten en we plannen hem als onderdeel van een dagronde door de Kempen, dus u krijgt een tijdslot en een sms een halfuur vooraf.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "balen",
    title: "Bouwdroger huren in Balen | Vernast",
    description:
      "Bouwdroger huren in Balen: zandgrond en kanalen in de noordoostelijke Kempen. Binnen 24 uur geleverd, geplaatst en ingesteld.",
    h1: "Bouwdroger huren in Balen",
    kicker: "Kempen · zandgrond en kanalen",
    rit: { afstand: "circa 52 km", tijd: "ongeveer vijfenvijftig minuten" },
    intro: [
      "Balen ligt in de noordoostelijke hoek van de provincie, met Olmen en Schoor erbij: zandgrond, kanalen en veel open ruimte. De zandwinning is er een bedrijfstak op zich.",
      "Het is de verste gemeente van onze planning: ruim vijfenvijftig minuten vanuit Aartselaar. Toch leveren we er binnen 24 uur, en tegen dezelfde prijs als om de hoek.",
    ],
    bouw: {
      kop: "Vrijstaande woningen op zand, ver van de stad",
      alineas: [
        "De zandgrond draineert goed, dus kelderproblemen zijn hier zeldzamer. Het werk is bijna altijd bouwvocht uit renovatie of nieuwbouw, en dat verdwijnt definitief. Wat telt is capaciteit naar volume: wij rekenen op kubieke meter en niet op oppervlakte.",
        "Wat hier zwaar meespeelt is de winter. De Kempen heeft de koudste winterwerven van Vlaanderen; een condensdroger in een ruwbouw van vijf graden haalt nog geen kwart van zijn capaciteit. Tussen november en maart hoort de elektrische kachel op 400 V hier dan ook vaker wel dan niet bij het pakket.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "Voor een ruime vrijstaande woning: 110 liter per dag en bereik tot ongeveer 600 m³, één toestel per groot gelijkvloers." },
      { key: "teddh30", waarom: "De winterwerf: onder 15 °C zakt het rendement van elke condensdroger. Deze kachel brengt de ruimte eerst op temperatuur. Vraagt 400 V." },
      { key: "ttk350", waarom: "De aanvulling voor de verdieping, de garage of het bijgebouw: 70 liter per dag, pompklaar." },
      { key: "ttv4500", waarom: "Bij grote gelijkvloerse oppervlaktes verdeelt deze ventilator de droge lucht over de hele bouwlaag." },
    ],
    levering: {
      kop: "Leveren in Balen: binnen 24 uur, als dagronde gepland",
      alinea:
        "Ruim vijfenvijftig minuten rijden, de verste rit van onze planning. We rijden de noordoostelijke Kempen daarom als ronde: elke werf krijgt een tijdslot en een sms een halfuur vooraf. Voor de verste adressen vragen we liefst een dag speling.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een uur heen en een uur terug. Voor een volledig droogpakket is dat nooit de betere keuze: de levering zit al in de prijs en de technieker plaatst meteen alles.",
    },
    buren: ["mol", "dessel", "meerhout", "laakdal"],
    faq: [
      {
        q: "Hoeveel toestellen heb ik nodig voor een vrijstaande woning?",
        a: "Voor een gelijkvloers van 120 tot 150 m² rekenen we doorgaans op twee drogers met een ventilator per droogzone, en vaak een derde voor de verdieping of het bijgebouw. Wij rekenen op volume in kubieke meter en niet op oppervlakte: een hoog plafond telt zwaarder dan extra vierkante meters.",
      },
      {
        q: "Wat als het vriest tijdens de droging?",
        a: "Dan verwarmen we mee. Een condensdroger verliest onder 15 °C het grootste deel van zijn rendement, en een ruwbouw in Balen komt in de winter zelden boven tien graden. We zetten er dan een elektrische kachel bij die de ruimte op werkingstemperatuur houdt; die vraagt 400 V krachtstroom.",
      },
      {
        q: "Betaal ik een kilometerkost voor Balen?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket. De rit telt mee in onze planning, niet in uw factuur; voor de verste gemeenten vragen we liefst een dag speling.",
      },
      {
        q: "Hoe snel staan jullie in Balen?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfenvijftig minuten en we plannen hem als onderdeel van een dagronde door de Kempen, dus u krijgt een tijdslot en een sms een halfuur vooraf.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "temse",
    title: "Bouwdroger huren in Temse - op 25 minuten | Vernast",
    description:
      "Bouwdroger huren in Temse: Scheldedorp met oude kern en verkavelingen, op 25 minuten van ons magazijn. Binnen 24 uur geleverd en geplaatst.",
    h1: "Bouwdroger huren in Temse",
    kicker: "Waasland · aan de Schelde, op 25 minuten",
    rit: { afstand: "circa 22 km", tijd: "ongeveer vijfentwintig minuten" },
    intro: [
      "Temse ligt aan de Schelde, op vijfentwintig minuten van ons magazijn in Aartselaar. Van alle Oost-Vlaamse gemeenten is dit een van de dichtstbijzijnde: voor een gewone droging is de volgende werkdag de regel, bij waterschade is dezelfde dag vaak haalbaar.",
      "De bebouwing is gemengd: een oude dorpskern met rijwoningen uit de tijd van de scheepswerven, en daarachter verkavelingen met halfopen en vrijstaande woningen.",
    ],
    bouw: {
      kop: "Scheldeoever, oude kern en verkavelingen",
      alineas: [
        "Dicht bij de Schelde staat het grondwater hoog en zijn kelders zelden lang kurkdroog. Loopt er een onder, dan is leegpompen pas de eerste stap: wat in de muren en de vloerplaat is getrokken zit er weken later nog in, en zonder droging komt dat terug als schimmel en een muffe geur.",
        "In de verkavelingen gaat het om gewoon bouwvocht uit renovatie en nieuwbouw. Een chape van zes centimeter zet per vierkante meter tientallen liters water in de constructie; die moeten er langs boven uit, want door de vloerplaat kan het niet.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "Het werkpaard bij waterschade: 70 liter per dag, genoeg om een ondergelopen kelder of gelijkvloers in te halen." },
      { key: "ttv4500", waarom: "Water kruipt onder vloeren en achter plinten. Zonder luchtbeweging droogt dat niet; met deze ventilator wel." },
      { key: "revolution", waarom: "Voor een kelder die niet te verwarmen is: de adsorptiedroger blijft ook bij lage temperaturen vocht opnemen." },
      { key: "ttk650", waarom: "Voor een groot gelijkvloers of een bedrijfsruimte: 110 liter per dag, bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Temse: binnen 24 uur, over de E17",
      alinea:
        "Vijfentwintig minuten rijden. Bij waterschade krijgt uw dossier voorrang: bel ons zodra het staande water weg is. De technieker meet bij aankomst waar het vocht zit, want wat onder een dekvloer is gekropen droogt niet mee met de ruimte.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar, over de E17 en de A12",
      alinea:
        "Het Waasland is de enige streek buiten onze eigen provincie waar afhalen echt de moeite loont: u staat in een halfuur aan onze poort in Aartselaar. Vervoer de droger rechtop, en heeft hij toch plat gelegen, laat hem dan 24 uur staan voor u hem inschakelt.",
    },
    buren: ["beveren-kruibeke-zwijndrecht", "sint-niklaas", "waasmunster", "bornem"],
    faq: [
      {
        q: "Hoe snel kunnen jullie in Temse leveren?",
        a: "Binnen 24 uur, meestal de volgende werkdag: het magazijn ligt op vijfentwintig minuten via de E17. Bij waterschade bellen we meteen terug om te kijken of het dezelfde dag nog lukt.",
      },
      {
        q: "Mijn kelder is ondergelopen. Wat doe ik eerst?",
        a: "Eerst het staande water weg en nat materiaal eruit: tapijt, isolatie, kartonnen dozen. Pas daarna heeft drogen zin, want een bouwdroger haalt vocht uit de lucht en uit materialen, hij pompt geen water weg. Bel ons zodra de kelder leeg is: op vochtig materiaal begint schimmel na 24 tot 48 uur.",
      },
      {
        q: "Rekenen jullie een leveringskost aan buiten Antwerpen?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket, ook in Oost-Vlaanderen. De rit telt mee in onze planning, niet in uw factuur.",
      },
      {
        q: "Is afhalen vanuit Temse de moeite?",
        a: "Voor één los toestel wel: u staat in een halfuur aan onze poort in Aartselaar, en u krijgt korting op de huurprijs. Daar staat tegenover dat u zelf tilt en dat er geen vochtmeting en dus geen Drooggarantie bij zit.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "beveren-kruibeke-zwijndrecht",
    title: "Bouwdroger huren in Beveren-Kruibeke-Zwijndrecht | Vernast",
    description:
      "Bouwdroger huren in Beveren, Kruibeke en Zwijndrecht: polder langs de Schelde met hoog grondwater. Binnen 24 uur geleverd en geplaatst.",
    h1: "Bouwdroger huren in Beveren-Kruibeke-Zwijndrecht",
    kicker: "Waasland · polder langs de Schelde",
    rit: { afstand: "circa 25 km", tijd: "ongeveer vijfentwintig minuten" },
    intro: [
      "Beveren, Kruibeke en Zwijndrecht vormen sinds 2025 één gemeente, en ze delen wat de werven hier bepaalt: de Schelde. Polderklei, laaggelegen land en een grondwaterstand die het hele jaar hoog blijft.",
      "Ons magazijn in Aartselaar ligt op vijfentwintig minuten, met de Kennedytunnel of de Liefkenshoektunnel ertussen. Voor een gewone droging is de volgende werkdag de regel.",
    ],
    bouw: {
      kop: "Polderklei, laaggelegen land en de Scheldedijk",
      alineas: [
        "Klei houdt water vast waar zand het doorlaat. Een woning zonder waterkering in de muurvoet zuigt dat op via de baksteen, en binnen tekent het zich af als een band tot een halve meter boven de vloer. Dat is opstijgend vocht: drogen haalt het uit de ruimte, maar zolang er geen waterkering ligt, blijft het bijkomen.",
        "In het laaggelegen land komen kelders en kruipruimtes terug bij elke natte periode. Een kruipruimte zonder doorstroming blijft bovendien ook zonder hoogwater vochtig; dat trekt via de vloer naar boven als een muffe geur in de woonkamer.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "Het werkpaard bij waterschade: 70 liter per dag, genoeg om een ondergelopen kelder of gelijkvloers in te halen." },
      { key: "ttv4500", waarom: "Water kruipt onder vloeren en achter plinten. Zonder luchtbeweging droogt dat niet; met deze ventilator wel." },
      { key: "revolution", waarom: "Voor een kelder die niet te verwarmen is: de adsorptiedroger blijft ook bij lage temperaturen vocht opnemen." },
      { key: "ttk650", waarom: "Voor een groot gelijkvloers of een bedrijfsruimte: 110 liter per dag, bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Beveren, Kruibeke en Zwijndrecht: binnen 24 uur",
      alinea:
        "Vijfentwintig minuten rijden. Geef bij de reservatie de deelgemeente mee, want de fusiegemeente is uitgestrekt en de rit verschilt een kwartier tussen Zwijndrecht en Kallo. De technieker meet bij aankomst waar het vocht zit.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar, over de E17 en de A12",
      alinea:
        "Het Waasland is de enige streek buiten onze eigen provincie waar afhalen echt de moeite loont: u staat in een halfuur aan onze poort in Aartselaar. Vervoer de droger rechtop, en heeft hij toch plat gelegen, laat hem dan 24 uur staan voor u hem inschakelt.",
    },
    buren: ["temse", "sint-niklaas", "sint-gillis-waas", "antwerpen-stad"],
    faq: [
      {
        q: "Mijn woonkamer ruikt muf. Waar komt dat vandaan?",
        a: "Vaak uit de kruipruimte eronder. Die staat in de polder zelden droog: er is geen doorstroming, de bodem geeft vocht af en dat trekt via de vloer naar boven. U droogt zo'n ruimte met een adsorptiedroger die via slangen door een bestaand luik blaast; u hoeft er zelf niet in.",
      },
      {
        q: "Mijn muren blijven onderaan vochtig. Is dat bouwvocht?",
        a: "Op polderklei zonder waterkering is dat bijna altijd opstijgend vocht: een band tot ongeveer een halve meter hoog, vaak met een witte zoutrand en afbladderende verf. Bouwvocht zit gelijkmatig in de ruimte en verdwijnt vanzelf naarmate het droogt. Onze technieker meet het bij de levering.",
      },
      {
        q: "Hoe snel staan jullie hier?",
        a: "Binnen 24 uur na uw boeking, meestal de volgende werkdag. Geef de deelgemeente mee bij de reservatie: tussen Zwijndrecht en Kallo scheelt de rit een kwartier, en dat houdt de planning realistisch.",
      },
      {
        q: "Betaal ik meer omdat ik in Oost-Vlaanderen woon?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket, net als in onze eigen provincie. De rit telt mee in onze planning, niet in uw factuur.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "sint-niklaas",
    title: "Bouwdroger huren in Sint-Niklaas | Vernast",
    description:
      "Bouwdroger huren in Sint-Niklaas: stadsrenovatie in de gordel en nieuwbouw aan de rand. Binnen 24 uur geleverd, geplaatst en ingesteld.",
    h1: "Bouwdroger huren in Sint-Niklaas",
    kicker: "Waasland · stad en rand, op een halfuur",
    rit: { afstand: "circa 28 km", tijd: "ongeveer een halfuur" },
    intro: [
      "Sint-Niklaas is de stad van het Waasland, en de werven hier lopen van smalle rijwoningen rond de Grote Markt tot nieuwbouwprojecten aan de rand. Twee uitersten, met twee verschillende opstellingen.",
      "Ons magazijn in Aartselaar ligt op een halfuur via de E17. Voor een gewone droging is de volgende werkdag de regel; bij waterschade bellen we meteen terug.",
    ],
    bouw: {
      kop: "Rijwoningen in de gordel, nieuwbouw aan de rand",
      alineas: [
        "Een stadsrijwoning is smal en diep, met kamers achter elkaar en weinig buitenmuur. Zonder luchtbeweging droogt alleen de voorkamer: de droge lucht blijft hangen waar het toestel staat en de achterbouw blijft nat. Het toestel moet bovendien door een gang van tachtig centimeter en een draaitrap, en stil genoeg zijn voor een huis waar gewoond wordt.",
        "Aan de rand wordt de chape van het hele gelijkvloers in één keer gelegd, en die zet per vierkante meter tientallen liters water in de constructie. Zonder droging duurt dat maanden; met een pakket van twee of drie toestellen zijn dat weken, en de vloerder krijgt een gemeten einddatum in plaats van een inschatting.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "Compact genoeg voor een smalle gang of een trappenhal, en zuinig op één gewoon stopcontact." },
      { key: "ttk350", waarom: "Voor een volledig gelijkvloers met nieuwe chape: 70 liter per dag, bereik tot ongeveer 400 m³." },
      { key: "ttv4500", waarom: "In een smalle, diepe rijwoning brengt deze ventilator de droge lucht tot in de achterbouw." },
      { key: "revolution", waarom: "Voor een stadskelder die in de winter niet op temperatuur komt: droge lucht via slangen." },
    ],
    levering: {
      kop: "Leveren in Sint-Niklaas: binnen 24 uur, tot boven gedragen",
      alinea:
        "Een halfuur rijden over de E17. In de binnenstad staat onze bestelwagen kort dubbel terwijl de technieker uitlaadt; ligt uw straat in een voetgangerszone of geldt er een venstertijd, geef dat dan door bij de reservatie. Bij een vaste trap is elke verdieping inbegrepen.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar, over de E17 en de A12",
      alinea:
        "Het Waasland is de enige streek buiten onze eigen provincie waar afhalen echt de moeite loont: u staat in een halfuur aan onze poort in Aartselaar. Vervoer de droger rechtop, en heeft hij toch plat gelegen, laat hem dan 24 uur staan voor u hem inschakelt.",
    },
    buren: ["temse", "beveren-kruibeke-zwijndrecht", "sint-gillis-waas", "waasmunster"],
    faq: [
      {
        q: "Past een bouwdroger door een smalle stadstrap?",
        a: "De Small bouwdroger is 40 bij 40 centimeter aan de basis en weegt ongeveer 25 kg. Die gaat door elke gangbare trappenhal, ook een draaitrap. Voor de Medium rekent u op iets meer breedte; geef bij de reservatie door dat het om een smalle trap gaat, dan kiest de technieker het toestel daarop.",
      },
      {
        q: "Kan ik in het centrum laten leveren zonder parkeerplaats?",
        a: "Meestal wel. Onze bestelwagen staat kort dubbel geparkeerd terwijl de technieker uitlaadt; voor één of twee toestellen is dat een kwestie van minuten. Ligt uw straat in een voetgangerszone of is er een venstertijd, zeg dat dan bij de reservatie.",
      },
      {
        q: "Hoe lang moet een chape in een nieuwbouw drogen?",
        a: "Dat beslist de meting, niet de kalender. Met een droogpakket rekent u voor een chape van zes centimeter doorgaans op een week of drie; zonder droger loopt dat in een gesloten, onverwarmde woning op tot maanden. Wij meten bij de start en bij de oplevering.",
      },
      {
        q: "Rekenen jullie een leveringskost aan voor Sint-Niklaas?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket. De enige mogelijke toeslag is die voor een verdieping waar toestellen via een ladder naar boven moeten.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "waasmunster",
    title: "Bouwdroger huren in Waasmunster | Vernast",
    description:
      "Bouwdroger huren in Waasmunster: Durmevallei en bossen, met landelijke bebouwing. Binnen 24 uur geleverd, geplaatst en ingesteld.",
    h1: "Bouwdroger huren in Waasmunster",
    kicker: "Waasland · aan de Durme",
    rit: { afstand: "circa 32 km", tijd: "ongeveer een halfuur" },
    intro: [
      "Waasmunster ligt aan de Durme, tussen de bossen van het Waasland. De bebouwing is landelijk en ruim: vrijstaande woningen op grote percelen, en in de vallei lager gelegen land waar het grondwater hoog staat.",
      "Ons magazijn in Aartselaar ligt op een halfuur via de E17. Levering, plaatsing en ophaling zitten in de prijs van het droogpakket.",
    ],
    bouw: {
      kop: "De Durmevallei, en ruime woningen op de hogere delen",
      alineas: [
        "In de vallei komen kelders en kruipruimtes terug bij elke natte periode. Leegpompen is de eerste stap, drogen de tweede: wat in de muren en de vloerplaat is getrokken, blijft er weken in zitten. Op vochtig materiaal begint schimmel al na 24 tot 48 uur.",
        "Op de hogere, zandiger delen gaat het om gewoon bouwvocht uit renovatie en nieuwbouw. Dat verdwijnt definitief, maar het vraagt capaciteit naar volume: een vrijstaande woning bevat meer lucht dan een rijhuis, en wij rekenen op kubieke meter en niet op oppervlakte.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "Het werkpaard bij waterschade: 70 liter per dag, genoeg om een ondergelopen kelder of gelijkvloers in te halen." },
      { key: "ttv4500", waarom: "Water kruipt onder vloeren en achter plinten. Zonder luchtbeweging droogt dat niet; met deze ventilator wel." },
      { key: "revolution", waarom: "Voor een kelder die niet te verwarmen is: de adsorptiedroger blijft ook bij lage temperaturen vocht opnemen." },
      { key: "ttk650", waarom: "Voor een groot gelijkvloers of een bedrijfsruimte: 110 liter per dag, bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Waasmunster: binnen 24 uur, over de E17",
      alinea:
        "Een halfuur rijden. Bij waterschade krijgt uw dossier voorrang: bel ons zodra het staande water weg is. Bij een vochtige kruipruimte plaatst de technieker de slangen zo dat u er zelf niet in hoeft.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar, over de E17 en de A12",
      alinea:
        "Het Waasland is de enige streek buiten onze eigen provincie waar afhalen echt de moeite loont: u staat in een halfuur aan onze poort in Aartselaar. Vervoer de droger rechtop, en heeft hij toch plat gelegen, laat hem dan 24 uur staan voor u hem inschakelt.",
    },
    buren: ["lokeren", "sint-niklaas", "temse", "stekene"],
    faq: [
      {
        q: "Mijn kelder loopt bij hoogwater onder. Wat eerst?",
        a: "Eerst het staande water weg en nat materiaal eruit, dan pas drogen. Een bouwdroger haalt vocht uit de lucht en uit materialen, hij pompt geen water weg. Bel ons zodra de kelder leeg is, want op vochtig materiaal begint schimmel na 24 tot 48 uur.",
      },
      {
        q: "Hoe droog ik een kruipruimte?",
        a: "Met een adsorptiedroger die buiten staat en droge lucht naar binnen blaast via een slang door een bestaand luik. U hoeft er zelf niet in. Een condensdroger haalt daar weinig uit, want een kruipruimte komt zelden boven 15 °C.",
      },
      {
        q: "Hoe snel staan jullie in Waasmunster?",
        a: "Binnen 24 uur na uw boeking; het magazijn ligt op een halfuur via de E17. Boekt u voor de middag, dan plannen we doorgaans de volgende werkdag.",
      },
      {
        q: "Betaal ik een kilometerkost?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket. De rit telt mee in onze planning, niet in uw factuur.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "lokeren",
    title: "Bouwdroger huren in Lokeren - Durmestad | Vernast",
    description:
      "Bouwdroger huren in Lokeren: stad aan de Durme met hoog grondwater en vochtige kelders. Binnen 24 uur geleverd, geplaatst en ingesteld.",
    h1: "Bouwdroger huren in Lokeren",
    kicker: "Waasland · stad aan de Durme",
    rit: { afstand: "circa 38 km", tijd: "ongeveer vijfendertig minuten" },
    intro: [
      "Lokeren ligt aan de Durme, en dat bepaalt waarvoor men hier belt. Het grondwater staat hoog en kelders komen terug bij elke natte periode; een van onze Oost-Vlaamse realisaties is precies dat, een keldermuurlek in deze stad.",
      "Ons magazijn in Aartselaar ligt op een vijfendertigtal minuten via de E17. Bij waterschade krijgt uw dossier voorrang in de planning.",
    ],
    bouw: {
      kop: "Kelders aan de Durme, en rijwoningen in de stad",
      alineas: [
        "Een kelder in het lager gelegen deel van de stad staat in grond die zelden lang droog blijft. Komt er water door de muur of de vloerplaat, dan is leegpompen pas de eerste stap: wat erin getrokken is, zit er weken later nog in. Zonder droging komt dat terug als vochtplekken, schimmel en een muffe geur.",
        "De woningen erboven zijn vaak smal en diep, met kamers achter elkaar. Daar telt luchtbeweging bijna evenveel als capaciteit: een ventilator die de droge lucht van voor naar achter stuurt, is vaak effectiever dan een tweede droger, en goedkoper.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "Het werkpaard bij waterschade: 70 liter per dag, genoeg om een ondergelopen kelder of gelijkvloers in te halen." },
      { key: "ttv4500", waarom: "Water kruipt onder vloeren en achter plinten. Zonder luchtbeweging droogt dat niet; met deze ventilator wel." },
      { key: "revolution", waarom: "Voor een kelder die niet te verwarmen is: de adsorptiedroger blijft ook bij lage temperaturen vocht opnemen." },
      { key: "ttk650", waarom: "Voor een groot gelijkvloers of een bedrijfsruimte: 110 liter per dag, bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Lokeren: binnen 24 uur, bij waterschade met voorrang",
      alinea:
        "Een vijfendertigtal minuten rijden over de E17. Bel ons zodra het staande water weg is, dan kijken we wat dezelfde dag nog kan. De technieker meet eerst waar het vocht zit, want wat achter een plint of onder een dekvloer is gekropen, droogt niet mee met de ruimte.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar, over de E17 en de A12",
      alinea:
        "Het Waasland is de enige streek buiten onze eigen provincie waar afhalen echt de moeite loont: u staat in een halfuur aan onze poort in Aartselaar. Vervoer de droger rechtop, en heeft hij toch plat gelegen, laat hem dan 24 uur staan voor u hem inschakelt.",
    },
    buren: ["waasmunster", "sint-niklaas", "stekene", "temse"],
    faq: [
      {
        q: "Mijn keldermuur lekt. Helpt drogen?",
        a: "Het haalt het vocht eruit dat er nu in zit, en dat voorkomt schimmel en een muffe geur. Maar zolang het water via de muur of de vloerplaat binnenkomt, komt het terug. Drogen is dan het tweede deel van de oplossing; het eerste is de bron, en daar kijkt onze zusterfirma Vernast Vochtbestrijding naar.",
      },
      {
        q: "Krijgt waterschade voorrang in jullie planning?",
        a: "Ja. Belt u voor de middag, dan kijken we of het dezelfde dag nog lukt; anders staat het de volgende ochtend. Bel in dat geval liever dan online te boeken, op 03 689 90 65: dan zien we meteen wat er vrij staat.",
      },
      {
        q: "Waarom raden jullie een ventilator aan bij een rijwoning?",
        a: "Omdat een smalle, diepe plattegrond de droge lucht laat hangen in de kamer waar het toestel staat. Een ventilator stuurt ze naar achteren, en dat is vaak effectiever dan een tweede droger, en goedkoper.",
      },
      {
        q: "Rekenen jullie een leveringskost aan voor Lokeren?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket, ook hier. De rit telt mee in onze planning, niet in uw factuur.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "sint-gillis-waas",
    title: "Bouwdroger huren in Sint-Gillis-Waas | Vernast",
    description:
      "Bouwdroger huren in Sint-Gillis-Waas en De Klinge: landelijk Waasland met polder aan de grens. Binnen 24 uur geleverd en geplaatst.",
    h1: "Bouwdroger huren in Sint-Gillis-Waas",
    kicker: "Waasland · landelijk, tegen de grens",
    rit: { afstand: "circa 33 km", tijd: "ongeveer vijfendertig minuten" },
    intro: [
      "Sint-Gillis-Waas is landelijk en ruim opgezet, met De Klinge, Meerdonk en Sint-Pauwels erbij. Richting de Nederlandse grens wordt het polder: laaggelegen land op klei, waar het grondwater hoog staat.",
      "Ons magazijn in Aartselaar ligt op een vijfendertigtal minuten. Levering, plaatsing en ophaling zitten in de prijs van het droogpakket.",
    ],
    bouw: {
      kop: "Landelijke kernen, en polder richting de grens",
      alineas: [
        "In de polder houdt de kleigrond water vast. Een woning of hoeve zonder waterkering in de muurvoet zuigt dat op via de baksteen, en binnen komt het terug als een vochtband onderaan de muur. Dat gaat niet vanzelf weg: drogen haalt het uit de ruimte, maar de bron blijft.",
        "In de kernen gaat het om bouwvocht uit renovatie en nieuwbouw, en dat verdwijnt wél definitief. Dikke, massieve muren geven hun vocht traag af, dus staat er hier bijna altijd een ventilator bij de droger: die blaast de verzadigde luchtlaag langs het muuroppervlak weg.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "Het werkpaard bij waterschade: 70 liter per dag, genoeg om een ondergelopen kelder of gelijkvloers in te halen." },
      { key: "ttv4500", waarom: "Water kruipt onder vloeren en achter plinten. Zonder luchtbeweging droogt dat niet; met deze ventilator wel." },
      { key: "revolution", waarom: "Voor een kelder die niet te verwarmen is: de adsorptiedroger blijft ook bij lage temperaturen vocht opnemen." },
      { key: "ttk650", waarom: "Voor een groot gelijkvloers of een bedrijfsruimte: 110 liter per dag, bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Sint-Gillis-Waas: binnen 24 uur, in een ronde",
      alinea:
        "Een vijfendertigtal minuten rijden. We plannen het Waasland in een ronde, dus u krijgt een tijdslot en een sms een halfuur vooraf. Bij een hoeve of een schuur vragen we vooraf het volume en of de ruimte dicht te krijgen is.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar, over de E17 en de A12",
      alinea:
        "Het Waasland is de enige streek buiten onze eigen provincie waar afhalen echt de moeite loont: u staat in een halfuur aan onze poort in Aartselaar. Vervoer de droger rechtop, en heeft hij toch plat gelegen, laat hem dan 24 uur staan voor u hem inschakelt.",
    },
    buren: ["beveren-kruibeke-zwijndrecht", "sint-niklaas", "stekene", "waasmunster"],
    faq: [
      {
        q: "Mijn muren blijven onderaan vochtig. Is dat bouwvocht?",
        a: "Op kleigrond zonder waterkering is dat bijna altijd opstijgend vocht: een band tot ongeveer een halve meter hoog, vaak met een witte zoutrand en afbladderende verf. Bouwvocht zit gelijkmatig in de ruimte en verdwijnt vanzelf naarmate het droogt. Onze technieker meet het bij de levering.",
      },
      {
        q: "Kunnen jullie een hoeve of een schuur drogen?",
        a: "Ja. We vragen vooraf het volume in kubieke meter, de vloeropbouw en of de ruimte dicht te krijgen is: een droger tegen een open poort werkt tegen de buitenlucht in. Is ze niet te verwarmen, dan zetten we een adsorptiedroger in.",
      },
      {
        q: "Hoe snel staan jullie hier?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfendertig minuten en we plannen het Waasland in een ronde; boekt u voor de middag, dan staat het doorgaans de volgende werkdag.",
      },
      {
        q: "Betaal ik een kilometerkost?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket. De rit telt mee in onze planning, niet in uw factuur.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "stekene",
    title: "Bouwdroger huren in Stekene | Vernast",
    description:
      "Bouwdroger huren in Stekene en Kemzeke: bosrijk Waasland op zandgrond, met ruime percelen. Binnen 24 uur geleverd en geplaatst.",
    h1: "Bouwdroger huren in Stekene",
    kicker: "Waasland · bosrijk, op zandgrond",
    rit: { afstand: "circa 36 km", tijd: "ongeveer vijfendertig minuten" },
    intro: [
      "Stekene ligt tegen de Nederlandse grens, bosrijk en ruim opgezet, met Kemzeke erbij. De bodem is hier zand in plaats van polderklei, en dat scheelt: zand draineert goed, dus kelders zijn minder vaak het probleem.",
      "Wat blijft is volume en, in de winter, temperatuur. Ons magazijn in Aartselaar ligt op een vijfendertigtal minuten.",
    ],
    bouw: {
      kop: "Vrijstaande woningen op zand, met bijgebouwen",
      alineas: [
        "Een vrijstaande woning heeft meer capaciteit nodig dan een rijhuis, niet omdat ze trager droogt maar omdat er meer lucht in zit. Wij rekenen op volume in kubieke meter: een open leefruimte met een hoog plafond telt zwaarder dan extra vierkante meters onder een gewoon plafond.",
        "Veel werven hier bevatten een bijgebouw, een schuur of een veranda die mee wordt afgewerkt. Die ruimtes zijn tijdens de werken zelden verwarmd, en onder 15 °C verliest een condensdroger het grootste deel van zijn rendement. Dan gaat er een kachel mee, of meteen een adsorptiedroger.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De standaard voor een nieuwbouwwoning: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttk650", waarom: "Voor de grote open bebouwing: 110 liter per dag en een bereik tot 600 m³, één toestel per groot gelijkvloers." },
      { key: "ttv4500", waarom: "Bij een chape verdubbelt luchtbeweging vaak de snelheid: hij blaast de verzadigde laag vlak boven de vloer weg." },
      { key: "teddh30", waarom: "Voor de onverwarmde ruwbouw in de winter: onder 15 °C zakt het rendement van elke condensdroger. Vraagt 400 V." },
    ],
    levering: {
      kop: "Leveren in Stekene: binnen 24 uur, in een ronde",
      alinea:
        "Een vijfendertigtal minuten rijden. U krijgt een tijdslot en een sms een halfuur vooraf. Op een winterwerf controleert de technieker eerst of de werfkast 400 V levert voor de kachel.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar, over de E17 en de A12",
      alinea:
        "Het Waasland is de enige streek buiten onze eigen provincie waar afhalen echt de moeite loont: u staat in een halfuur aan onze poort in Aartselaar. Vervoer de droger rechtop, en heeft hij toch plat gelegen, laat hem dan 24 uur staan voor u hem inschakelt.",
    },
    buren: ["sint-gillis-waas", "waasmunster", "lokeren", "sint-niklaas"],
    faq: [
      {
        q: "Hoeveel toestellen heb ik nodig voor een vrijstaande woning?",
        a: "Voor een gelijkvloers van 120 tot 150 m² rekenen we doorgaans op twee drogers met een ventilator per droogzone, en vaak een derde voor de verdieping of het bijgebouw. De Calculator rekent op volume in kubieke meter, niet op oppervlakte.",
      },
      {
        q: "Wat als het vriest tijdens de droging?",
        a: "Dan verwarmen we mee. Een condensdroger verliest onder 15 °C het grootste deel van zijn rendement, dus in een onverwarmde ruwbouw of een bijgebouw zetten we er een elektrische kachel bij. Die vraagt 400 V krachtstroom; de technieker controleert dat bij de levering.",
      },
      {
        q: "Hoe snel staan jullie in Stekene?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfendertig minuten en we plannen het Waasland in een ronde; boekt u voor de middag, dan staat het doorgaans de volgende werkdag.",
      },
      {
        q: "Is afhalen vanuit Stekene de moeite?",
        a: "Voor één los toestel kan het: u bent in een klein uur heen en terug, en u krijgt korting op de huurprijs. Voor een volledig droogpakket is leveren beter, want dan zit de rit al in de prijs en plaatst de technieker alles meteen.",
      },
    ],
    realisaties: [],
  },
  {
    slug: "aartselaar",
    title: "Bouwdroger huren in Aartselaar - ons magazijn | Vernast",
    description:
      "Ons magazijn staat in Aartselaar, Boomsesteenweg 12. Bouwdroger huren of afhalen in eigen gemeente, vaak dezelfde dag nog geleverd en geplaatst. Geen waarborg.",
    h1: "Bouwdroger huren in Aartselaar",
    kicker: "Onze eigen gemeente · magazijn in de straat",
    rit: { afstand: "0 km", tijd: "we staan hier zelf" },
    intro: [
      "Aartselaar is de gemeente waar ons magazijn staat: Boomsesteenweg 12, unit 11, langs de A12. Dat maakt een huur hier eenvoudiger dan waar ook. Wie 's ochtends belt heeft de toestellen vaak dezelfde namiddag draaien, en afhalen is een rit van enkele minuten in plaats van een halve voormiddag.",
      "Praktisch betekent dat ook: loopt een droging langer uit dan verwacht, dan staat er binnen het uur een extra toestel. En is er iets mis met een machine, dan wisselen we hem om in plaats van er aan de telefoon over te praten.",
    ],
    bouw: {
      kop: "Naoorlogse woningen en bungalows in verbouwing",
      alineas: [
        "Aartselaar is grotendeels gebouwd tussen de jaren vijftig en zeventig: vrijstaande woningen en bungalows op een ruim perceel, veel met een kruipkelder of een garage onder het maaiveld. Die generatie woningen gaat nu massaal door een renovatie (isolatie, nieuwe chape, een badkamer die verplaatst wordt), en elk van die ingrepen brengt water in huis dat eruit moet voor de afwerking begint.",
        "Omdat de percelen ruim zijn, is er bijna altijd plaats voor een opstelling met meerdere toestellen tegelijk: twee drogers en een ventilator die de droge lucht langs de vloer stuurt, in plaats van één toestel dat het alleen moet doen. Dat scheelt dagen, en dagen zijn hier wat de huur kost.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "Onze standaard voor een bungalow of een halfopen woning in renovatie: 70 liter per dag en genoeg bereik voor een volledig gelijkvloers." },
      { key: "ttv4500", waarom: "Op de ruime percelen hier droogt u zelden één kamer. Deze ventilator stuurt de droge lucht door de hele benedenverdieping, zodat alles tegelijk droogt." },
      { key: "ttk170", waarom: "Voor één kamer, een badkamer of een kelder. Het lichtste toestel uit ons gamma, en bij afhalen in eigen gemeente het makkelijkst mee te nemen." },
      { key: "revolution", waarom: "Voor de kruipkelder of de garage onder het maaiveld: droge lucht via een slang door een bestaand luik, ook als die ruimte niet te verwarmen is." },
    ],
    levering: {
      kop: "Leveren in Aartselaar: vaak dezelfde dag nog",
      alinea:
        "Het magazijn staat in uw gemeente, dus de rit is minuten. Wie voor de middag belt, heeft de toestellen vaak dezelfde namiddag draaien. Loopt een droging langer uit dan verwacht, dan staat er binnen het uur een extra toestel; en hapert er een machine, dan wisselen we hem om in plaats van er aan de telefoon over te praten.",
    },
    afhalen: {
      kop: "Of zelf afhalen, om de hoek",
      alinea:
        "Boomsesteenweg 12, unit 11, in het KMO-park naast Carglass. Voor wie hier woont is afhalen bijna altijd de voordeligste keuze: geen transport, geen installatie, en een rit van enkele minuten.",
    },
    buren: ["kontich", "edegem", "wilrijk", "boom"],
    faq: [
      {
        q: "Kan ik in Aartselaar nog dezelfde dag een bouwdroger krijgen?",
        a: "Vaak wel. Het magazijn staat in uw gemeente, dus zolang het toestel dat u nodig heeft op voorraad staat, is een levering in de namiddag haalbaar wanneer u voor de middag belt. Zekerheid krijgt u aan de telefoon op 03 689 90 65. De beschikbaarheid staat daar live op het scherm.",
      },
      {
        q: "Is afhalen in Aartselaar goedkoper dan laten leveren?",
        a: "Ja. U betaalt geen transport en geen installatie, en u krijgt korting op de huurprijs. Daar staat tegenover dat u zelf tilt (een droger weegt 25 tot 40 kg), zelf de opstelling bepaalt en zelf het reservoir leegt, en dat er geen vochtmeting en dus geen Drooggarantie bij zit. Woont u om de hoek, dan is afhalen voor één toestel meestal de logische keuze.",
      },
      {
        q: "Waar precies is het afhaalpunt?",
        a: "Boomsesteenweg 12, unit 11, in het KMO-park naast Carglass, met Tesla als herkenningspunt op de hoek. U rijdt het park in, volgt de nummering langs de laadkades tot unit 11 en meldt zich daar aan. Afhalen en terugbrengen kan op weekdagen tussen 07:30 en 17:00, op het tijdslot uit uw bevestiging.",
      },
      {
        q: "Kan ik een toestel dezelfde dag nog omruilen?",
        a: "In Aartselaar wel, in de praktijk. Het magazijn ligt in uw gemeente, dus als een toestel niet doet wat het moet doen, rijden we langs met een vervangexemplaar in plaats van het op te lossen aan de telefoon. Bel 03 689 90 65 en zeg wat er misgaat.",
      },
    ],
    realisaties: [],
  },
  {
    slug: "mechelen",
    title: "Bouwdroger huren in Mechelen - binnen 24 uur | Vernast",
    description:
      "Bouwdroger huren in Mechelen: voor stadsrenovatie binnen de vesten, nieuwbouw in Nekkerspoel of Ragheno. Binnen 24 uur geleverd en geplaatst, geen waarborg.",
    h1: "Bouwdroger huren in Mechelen",
    kicker: "Binnenstad en stadsvernieuwing · op een halfuur",
    rit: { afstand: "circa 20 km", tijd: "ongeveer een halfuur" },
    intro: [
      "Mechelen heeft twee heel verschillende werven, en ze liggen op een kwartier van elkaar. Binnen de vesten gaat het om panden met een beschermde gevel, een binnenkoer en een kelder die ouder is dan het huis erboven. Daarbuiten, in Nekkerspoel en op Ragheno, staan de grote nieuwbouwprojecten waar chape en pleisterwerk met tientallen appartementen tegelijk moeten drogen.",
      "Voor het eerste leveren we compacte toestellen die door een smalle gang passen; voor het tweede rekenen we een opstelling door op volume en zetten we meerdere drogers met ventilatoren in één gang. Beide binnen 24 uur vanuit Aartselaar.",
    ],
    bouw: {
      kop: "Erfgoed binnen de vesten, nieuwbouw erbuiten",
      alineas: [
        "Een beschermd pand droogt anders dan een nieuwbouw. Oude kalkpleisters en houten balklagen verdragen geen snelle, agressieve droging: te hard drogen doet hout krimpen en pleister scheuren. Daarom zetten we daar liever twee kleinere toestellen op een gematigde streefvochtigheid dan één groot toestel op vol vermogen, en meten we tussentijds in plaats van af te gaan op de kalender.",
        "Bij de nieuwbouwprojecten is het omgekeerde waar: daar telt snelheid, omdat de vloerder pas kan beginnen als het restvocht onder de norm zit. Een chape van zeven centimeter droogt natuurlijk weken; met de juiste opstelling halen we dat flink in. Wat de planning haalbaar maakt is niet het toestel maar de meting. Die bepaalt wanneer het droog is, niet een datum.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "Voor een pand binnen de vesten: compact genoeg voor een smalle gang en zacht genoeg om oude kalkpleister niet te forceren." },
      { key: "ttk350", waarom: "Voor de nieuwbouwprojecten op Nekkerspoel en Ragheno, waar chape en pleisterwerk per appartement tegelijk moeten drogen." },
      { key: "ttv4500", waarom: "Onmisbaar bij een chape: hij blaast de verzadigde luchtlaag die vlak boven de vloer blijft hangen weg, zodat de droger niet staat te werken op lucht die al droog is." },
      { key: "revolution", waarom: "Voor een kelder binnen de vesten die in de winter niet op temperatuur komt. Hij werkt met een droogmiddel en blijft dus ook in de koude vocht opnemen." },
    ],
    levering: {
      kop: "Leveren in Mechelen: binnen 24 uur, geplaatst en ingesteld",
      alinea:
        "Binnen de vesten is de bereikbaarheid het aandachtspunt: smalle straten, venstertijden en soms een binnenkoer waar de toestellen over moeten. Geef dat door bij de reservatie, dan houdt de planning er rekening mee. Op de nieuwbouwprojecten erbuiten leveren we liever in één keer een volledige opstelling dan per appartement.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een rit van ongeveer een halfuur over de A12. Voor één toestel is dat te doen; voor een volledige opstelling voor een nieuwbouw is leveren sneller én inclusief installatie en vochtmeting.",
    },
    buren: ["duffel", "lier", "heist-op-den-berg"],
    faq: [
      {
        q: "Mag een bouwdroger in een beschermd pand in de Mechelse binnenstad?",
        a: "Ja, een bouwdroger verandert niets aan het gebouw. Hij haalt vocht uit de lucht. Wel letten we op het tempo: bij oude kalkpleister en houten balklagen stellen we een gematigde streefvochtigheid in, zodat er niets krimpt of scheurt. Hebt u voorwaarden van Onroerend Erfgoed op papier, geef die dan door, dan stemmen we de instelling daarop af.",
      },
      {
        q: "Hoeveel toestellen heb ik nodig voor een appartement van 90 m²?",
        a: "Voor een gewone droging na chape of pleisterwerk volstaat meestal één Medium bouwdroger plus één ventilator die de droge lucht langs de vloer stuurt. De Calculator rekent het door op volume, toepassing en situatie, en zegt meteen welke droogtijd en welke prijs erbij horen. Zit u ernaast, dan verlengt u online.",
      },
      {
        q: "Kunnen jullie in een leeg nieuwbouwproject leveren zonder dat ik erbij ben?",
        a: "Dat kan, als er iemand op de werf is die de technieker binnenlaat en kan tekenen: de aannemer, de werfleider of een buur met een sleutel. Wij hebben een contactpersoon ter plaatse nodig, want de toestellen worden niet alleen afgezet maar ook geplaatst, aangesloten en ingesteld, en er gaat een vochtmeting aan vooraf.",
      },
      {
        q: "Kunnen jullie meerdere appartementen tegelijk droog krijgen?",
        a: "Ja, en dat is meestal ook goedkoper dan appartement per appartement. Wij rekenen op het totale volume en zetten een opstelling die het hele project tegelijk aanpakt, zodat u dezelfde huurdagen betaalt voor meer oppervlakte. Geef bij de reservatie het aantal units en de plafondhoogte door.",
      },
    ],
    realisaties: [],
  },
  {
    slug: "turnhout",
    title: "Bouwdroger huren in Turnhout en de Kempen | Vernast",
    description:
      "Bouwdroger huren in Turnhout: vrijstaande woningen op zandgrond, koude winterwerven. Binnen 24 uur geleverd vanuit Aartselaar, geplaatst en ingesteld.",
    h1: "Bouwdroger huren in Turnhout",
    kicker: "De Kempen · levering binnen 24 uur",
    rit: { afstand: "circa 55 km", tijd: "ongeveer vijftig minuten" },
    intro: [
      "Turnhout ligt het verst van ons magazijn van alle gemeenten op deze pagina, en toch leveren we er binnen 24 uur. Wat de rit lang maakt verandert niets aan de prijs: levering, plaatsing en ophaling zitten in elk droogpakket, ook hier.",
      "De Kempen hebben een eigen bouwtype. Vrijstaande woningen op een ruim perceel, vaak met een kruipruimte in plaats van een volle kelder, en zandgrond die water snel doorlaat maar een kruipruimte ook snel vochtig maakt. En werven die in de winter nauwelijks verwarmd worden.",
    ],
    bouw: {
      kop: "Koude werven en kruipruimtes op zandgrond",
      alineas: [
        "De koude is hier het echte probleem. Een condensdroger werkt door lucht af te koelen tot het vocht erop condenseert; is de ruimte zelf al koud, dan is er weinig verschil te maken en zakt het rendement. Onder 15 °C merkt u dat meteen aan het aantal liter per dag. Daarom gaat er op een onverwarmde Kempense winterwerf standaard een elektrische bouwkachel mee: die brengt de ruimte eerst op temperatuur, en pas dan begint de droger echt te werken.",
        "Is de ruimte niet te verwarmen (een kruipruimte, een onverwarmde kelder, een schuur), dan is een adsorptiedroger de betere keuze. Die werkt met een droogmiddel in plaats van met condensatie en haalt ook bij lage temperaturen vocht uit de lucht, via slangen tot in een ruimte waar u zelf niet staat.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "Voor een onverwarmde kruipruimte of schuur. Werkt met een droogmiddel in plaats van met condensatie en blijft dus ook bij lage temperatuur vocht halen." },
      { key: "teddh30", waarom: "De Kempense winterwerf: deze kachel brengt de ruimte eerst op werkingstemperatuur, zodat de condensdroger ernaast weer rendement haalt." },
      { key: "ttk350", waarom: "Voor een vrijstaande woning in renovatie, zodra de ruimte wél verwarmd is. 70 liter per dag en een bereik tot ongeveer 400 m³." },
      { key: "ttv4500", waarom: "Zonder luchtbeweging droogt alleen de kamer waar het toestel staat. Deze ventilator trekt de droge lucht door de hele woning, tot in de achterbouw." },
    ],
    levering: {
      kop: "Leveren in Turnhout: binnen 24 uur, zonder transportkost",
      alinea:
        "Turnhout is onze verste reguliere rit in deze provincie, zo'n vijftig minuten. Dat telt mee in de planning maar niet in uw factuur: levering, plaatsing, instelling en ophaling zitten in de prijs van elk droogpakket. Vraag liefst een dag speling bij het kiezen van uw leverdatum, dan combineren we de rit.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Ruim vijftig kilometer heen en evenveel terug. Voor de meeste Kempense werven is leveren hier de verstandigere keuze, zeker omdat installatie en vochtmeting er dan bij zitten.",
    },
    buren: ["geel", "mol", "herentals"],
    faq: [
      {
        q: "Werkt een bouwdroger in een onverwarmde schuur in de winter?",
        a: "Een gewone condensdroger nauwelijks: onder 15 °C zakt zijn rendement sterk, en rond het vriespunt doet hij bijna niets meer. Twee oplossingen. Ofwel zetten we er een elektrische bouwkachel naast die de ruimte op werkingstemperatuur brengt, ofwel kiezen we een adsorptiedroger, die wel bij lage temperatuur blijft werken. Welke van de twee hangt af van of de ruimte te verwarmen valt.",
        },
      {
        q: "Rekenen jullie een transportkost voor Turnhout?",
        a: "Nee. Levering, plaatsing, instelling en ophaling zitten in de prijs van elk droogpakket, ongeacht of u in Aartselaar woont of in Turnhout. De rit telt wel mee in onze planning, niet in uw factuur. Voor de verste gemeenten vragen we daarom liefst een dag speling.",
      },
      {
        q: "Kan ik een kruipruimte laten drogen zonder er zelf in te kruipen?",
        a: "Ja, daarvoor dient een adsorptiedroger met slangen. Het toestel staat buiten de kruipruimte en blaast droge lucht naar binnen via een slang door een bestaand luik of ventilatieopening. U hoeft er zelf niet in. Wel nuttig om vooraf te weten hoe groot de ruimte is en waar de openingen zitten, zodat de technieker de juiste slanglengte meeneemt.",
      },
      {
        q: "Hebben jullie genoeg toestellen voor een grote Kempense werf?",
        a: "Tot acht per toestelsoort op één reservatie, en nooit meer dan er in de vloot staan. Voor een grote werf belt u beter even: dan bekijken we of het in één levering kan of dat we het over twee dagen spreiden. Van de adsorptiedroger hebben we er één, dus die reserveert u best vroeg.",
      },
    ],
    realisaties: [],
  },
  {
    slug: "lier",
    title: "Bouwdroger huren in Lier - geleverd in 24 u | Vernast",
    description:
      "Bouwdroger huren in Lier: na hoogwater van de Nete, bij renovatie in het historische centrum of na chape. Binnen 24 uur geleverd, geplaatst en ingesteld.",
    h1: "Bouwdroger huren in Lier",
    kicker: "Aan de Nete · op een halfuur van ons magazijn",
    rit: { afstand: "circa 20 km", tijd: "ongeveer een halfuur" },
    intro: [
      "Lier ligt waar de Grote en de Kleine Nete samenkomen, en dat merk je aan het soort oproepen dat we hier krijgen. Na een periode van aanhoudende regen staat het water hoog, en dan gaat het niet om bouwvocht maar om waterschade: een kelder die onderloopt, een gelijkvloers dat nat staat, een vloeropbouw waar water onder is gekropen.",
      "Bij waterschade telt elk uur. Op vochtig materiaal begint schimmel na 24 tot 48 uur, en vanaf dan drogen is niet meer hetzelfde als meteen drogen. Daarom rijden we voor een waterschadedossier in Lier met voorrang uit, en leveren we naast drogers ook ventilatoren om de lucht onder de vloer en achter de plinten in beweging te krijgen.",
    ],
    bouw: {
      kop: "Hoogwater, historische kelders en vers pleisterwerk",
      alineas: [
        "Een kelder in het Lierse centrum is vaak ouder dan de woning erboven: baksteen in kalkmortel, rechtstreeks tegen de grond, zonder waterkering. Die neemt vocht op langs de muren en geeft het binnen weer af. Na een overstroming is leegpompen pas de eerste stap. Het water in de muren zit er dan nog weken in, en zonder droging komt het gewoon terug als vochtplekken en schimmel.",
        "Werkt u voor een verzekeringsdossier, dan is de meting net zo belangrijk als de droging. Wij meten bij de start en bij de oplevering en leggen dat vast, zodat u kunt aantonen hoe nat het was en wanneer het droog was. Dat rapport is wat een expert wil zien.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "Het werkpaard bij waterschade: 70 liter per dag, genoeg om een ondergelopen gelijkvloers of kelder in te halen." },
      { key: "ttv4500", waarom: "Bij water onder een vloeropbouw of achter een plint telt luchtbeweging meer dan capaciteit. Deze ventilator krijgt die lucht in beweging." },
      { key: "revolution", waarom: "Voor een kelder die niet te verwarmen is. In een koude Lierse kelder haalt een condensdroger weinig uit; dit toestel wel." },
      { key: "ttk170", waarom: "Voor één kamer, een badkamer of een kelderberging. Het lichtste toestel uit het gamma, en het makkelijkst zelf af te halen." },
    ],
    levering: {
      kop: "Leveren in Lier: bij waterschade met voorrang",
      alinea:
        "Lier ligt op een halfuur van ons magazijn, en waterschade krijgt voorrang in de planning. Belt u voor de middag, dan is dezelfde dag of de volgende ochtend doorgaans haalbaar. Bel in dat geval liever dan online te boeken: dan zien we meteen wat er vrij staat en wat u precies nodig hebt.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een halfuur rijden. Bij een schadedossier raden we het af: zonder vochtmeting bij start en oplevering hebt u geen rapport, en dat is net wat een expert wil zien.",
    },
    buren: ["duffel", "mechelen", "heist-op-den-berg"],
    faq: [
      {
        q: "Hoe snel staan jullie er na een overstroming in Lier?",
        a: "Waterschade krijgt voorrang in onze planning. Belt u voor de middag, dan is dezelfde dag of de volgende ochtend doorgaans haalbaar. Lier ligt op een halfuur van ons magazijn. Bel in dat geval liever dan online te boeken, op 03 689 90 65: dan zien we meteen wat er vrij staat en wat u precies nodig hebt.",
      },
      {
        q: "Krijg ik een rapport voor mijn verzekering?",
        a: "Ja. Onze technieker meet het vochtgehalte bij de start en opnieuw bij de oplevering, en die metingen worden vastgelegd. Zo kunt u tegenover uw verzekeraar of een expert aantonen hoe nat het was, welke toestellen er stonden en wanneer het droog was. Zeg bij de reservatie dat het om een schadedossier gaat, dan houdt de technieker er rekening mee.",
      },
      {
        q: "Moet ik eerst laten leegpompen voor jullie komen?",
        a: "Ja. Een bouwdroger haalt vocht uit de lucht en uit materialen, hij pompt geen staand water weg. Zolang er water op de vloer staat, is drogen zinloos. Pomp of veeg eerst het staande water weg, haal nat tapijt en natte isolatie eruit, en laat ons dan komen voor wat erin is getrokken. Dat is het deel dat maanden blijft zitten als u het laat.",
      },
      {
        q: "Wat als het water al dagen staat?",
        a: "Dan verandert de aanpak. Op vochtig materiaal begint schimmel na 24 tot 48 uur; staat het langer, dan is drogen alleen niet genoeg en komt er een behandeling bij. Laat het ons weten bij de reservatie hoe lang het water er al staat, dan neemt de technieker het juiste materiaal mee.",
      },
    ],
    realisaties: [],
  },
  {
    slug: "boom",
    title: "Bouwdroger huren in Boom en de Rupelstreek | Vernast",
    description:
      "Bouwdroger huren in Boom: arbeiderswoningen op kleigrond, kelders met opstijgend vocht. Op een kwartier van ons magazijn, binnen 24 uur geleverd en geplaatst.",
    h1: "Bouwdroger huren in Boom",
    kicker: "De Rupelstreek · op een kwartier",
    rit: { afstand: "circa 7 km", tijd: "ongeveer een kwartier" },
    intro: [
      "Boom ligt op een kwartier van ons magazijn, pal langs de A12. Dat maakt een snelle levering hier eenvoudig, en dat komt goed uit: in de Rupelstreek gaat het vaak om vocht dat er al jaren zit en dat bij de eerste de beste verbouwing naar boven komt.",
      "De streek is gebouwd op en van klei. De steenbakkerijen zijn weg, maar de arbeiderswoningen die ervoor gezet werden staan er nog: smalle rijhuizen, dikke muren zonder spouw, en een kelder die rechtstreeks in de kleigrond staat.",
    ],
    bouw: {
      kop: "Kleigrond, opstijgend vocht en muren zonder waterkering",
      alineas: [
        "Klei houdt water vast waar zand het doorlaat. Een woning zonder waterkering in de muurvoet zuigt dat vocht op via de baksteen (opstijgend vocht), en dat komt binnen terug als vochtplekken tot een halve meter boven de vloer, afbladderende verf en zoutuitbloei. Een bouwdroger haalt dat vocht uit de ruimte, maar hij stopt de bron niet: zolang er geen waterkering ligt, blijft het bijkomen.",
        "Daarom is drogen hier meestal de tweede stap, niet de eerste. Eerst de bron aanpakken (injectie, drainage, een nieuwe vloeropbouw), en daarna het vocht dat erin zit eruit halen, zodat u kunt afwerken zonder dat de nieuwe pleister binnen het jaar terug openbarst. Onze zusterfirma Vernast Vochtbestrijding doet dat eerste deel; wij doen het tweede.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "Voor een arbeiderswoning in renovatie: genoeg capaciteit voor een volledig gelijkvloers met dikke, massieve muren." },
      { key: "revolution", waarom: "Voor een kelder die rechtstreeks in de kleigrond staat en in de winter niet boven tien graden komt." },
      { key: "ttv4500", waarom: "Massieve muren geven hun vocht traag af. Luchtbeweging langs het muuroppervlak versnelt dat merkbaar." },
      { key: "teddh30", waarom: "Voor de winterwerf in de Rupelstreek: deze kachel brengt een onverwarmde ruimte eerst op werkingstemperatuur, zodat de droger ernaast weer rendeert." },
    ],
    levering: {
      kop: "Leveren in Boom: op een kwartier, langs de A12",
      alinea:
        "Boom ligt recht langs de A12, een kwartier van ons magazijn. Wie voor de middag boekt heeft de toestellen doorgaans de volgende werkdag draaien, en bij een waterschadedossier vaak dezelfde dag nog. De technieker meet bij aankomst, zodat u weet of u met bouwvocht of met opstijgend vocht te maken hebt.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een kwartier rijden over de A12. Voor één toestel is afhalen hier de voordeligste keuze; vervoer de droger wel rechtop, plat in de koffer beschadigt de compressor.",
    },
    buren: ["aartselaar", "kontich"],
    faq: [
      {
        q: "Lost een bouwdroger opstijgend vocht op?",
        a: "Nee, en dat is belangrijk om vooraf te weten. Een bouwdroger haalt het vocht weg dat er nú in zit, maar bij opstijgend vocht komt er via de muurvoet voortdurend nieuw bij. Zonder waterkering is drogen dus dweilen met de kraan open. Pak eerst de bron aan en droog daarna; dan heeft de droging blijvend effect en kunt u afwerken.",
      },
      {
        q: "Hoe herken ik opstijgend vocht van bouwvocht?",
        a: "Aan de vorm en de hoogte. Opstijgend vocht tekent zich af als een band onderaan de muur, meestal tot dertig à zestig centimeter hoog, vaak met een witte zoutrand bovenaan en afbladderende verf. Bouwvocht zit overal gelijkmatig en verdwijnt vanzelf naarmate het droogt. Twijfelt u, dan meet onze technieker het bij de levering, en dat kost u niets extra.",
      },
      {
        q: "Hoe snel kunnen jullie in Boom leveren?",
        a: "Boom ligt op ongeveer een kwartier van ons magazijn in Aartselaar, recht langs de A12. Wie voor de middag boekt heeft de toestellen doorgaans de volgende werkdag draaien, en bij een waterschadedossier vaak dezelfde dag nog. Levering, plaatsing en ophaling zitten in de prijs.",
      },
      {
        q: "Hoe weet ik of drogen bij mij zin heeft?",
        a: "Bij bouwvocht altijd, want dat verdwijnt definitief. Bij opstijgend vocht alleen als de bron eerst is aangepakt, anders komt het via de muurvoet gewoon bij. Onze technieker meet het bij de levering en zegt u eerlijk in welk geval u zit; dat kost u niets extra.",
      },
    ],
    realisaties: [],
  },
  {
    slug: "kontich",
    title: "Bouwdroger huren in Kontich - op 10 minuten | Vernast",
    description:
      "Bouwdroger huren in Kontich: ons magazijn ligt op tien minuten. Voor renovatie, chape of waterschade, binnen 24 uur geleverd en geplaatst. Geen waarborg.",
    h1: "Bouwdroger huren in Kontich",
    kicker: "Vlak bij ons magazijn · op tien minuten",
    rit: { afstand: "circa 5 km", tijd: "ongeveer tien minuten" },
    intro: [
      "Kontich grenst aan Aartselaar, waar ons magazijn staat. Tien minuten rijden, en dat merkt u aan de planning: een levering hier is bijna altijd de volgende werkdag haalbaar, en bij waterschade vaak dezelfde dag.",
      "De gemeente is residentieel en grotendeels naoorlogs. Veel woningen uit de jaren zestig en zeventig gaan nu door een grondige renovatie: isoleren, een nieuwe chape, een badkamer die verplaatst wordt. Elk van die ingrepen brengt liters water in het gebouw die eruit moeten voor de vloerder of de schilder begint.",
    ],
    bouw: {
      kop: "Renovatie van naoorlogse woningen",
      alineas: [
        "Een woning uit de jaren zestig heeft meestal een volle kelder, een betonnen vloerplaat en muren met een smalle spouw. Wordt daar een nieuwe chape in gelegd, dan zit er per vierkante meter tientallen liters water in die niet door de vloerplaat weg kan. Dat water moet er langs boven uit. Zonder droging duurt dat weken, en pas als het restvocht onder de norm zit mag er parket of tegel op.",
        "Het gaat zelden om één ruimte. Bij een volledige renovatie droogt u het gelijkvloers in één keer, met twee drogers en een ventilator die de verzadigde laag boven de vloer wegblaast. Dat is sneller en goedkoper dan kamer na kamer, omdat u dezelfde dagen huurt voor meer oppervlakte.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "Onze standaard voor een gelijkvloers met een nieuwe chape: 70 liter per dag en bereik tot ongeveer 400 m³." },
      { key: "ttv4500", waarom: "Bij een chape verdubbelt een ventilator vaak de snelheid: hij blaast de verzadigde laag vlak boven de vloer weg." },
      { key: "ttk170", waarom: "Voor één kamer of een badkamerrenovatie. Op tien minuten van het magazijn is dit het toestel dat mensen hier het vaakst zelf komen halen." },
      { key: "teddh30", waarom: "Voor een nieuwbouw die in de winter nog niet verwarmd is. Onder 15 °C haalt een condensdroger nog maar een fractie van zijn capaciteit." },
    ],
    levering: {
      kop: "Leveren in Kontich: op tien minuten, de volgende werkdag",
      alinea:
        "Kontich grenst aan Aartselaar, waar ons magazijn staat. Voor een gewone droging is de volgende werkdag de regel, bij waterschade is dezelfde dag vaak haalbaar. Bij een volledige renovatie leveren we liever één opstelling voor het hele gelijkvloers dan kamer na kamer. Dat is sneller en u huurt dezelfde dagen voor meer oppervlakte.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Tien minuten rijden. Voor één droger of een ventilator is afhalen hier bijna altijd de voordeligste keuze; u betaalt geen transport en geen installatie.",
    },
    buren: ["aartselaar", "edegem", "duffel", "boom"],
    faq: [
      {
        q: "Hoe lang moet een nieuwe chape drogen in een gerenoveerde woning?",
        a: "Natuurlijk rekent men op ongeveer één week per centimeter dikte voor cementchape, bij zeven centimeter dus al snel twee maanden. Met een bouwdroger en ventilatoren haalt u daar een flink stuk af. De exacte tijd hangt af van dikte, type chape en ventilatie, en wordt bepaald door de meting, niet door de kalender. In onze gids over chape droogtijd staat het per situatie uitgerekend.",
      },
      {
        q: "Mag ik al tegelen als de chape droog aanvoelt?",
        a: "Nee. Droog aanvoelen zegt alleen iets over de bovenste millimeters; de kern kan nog ruim boven de norm zitten. Legt u daarop een dampdichte afwerking als tegel of parket, dan sluit u dat vocht in en komt het later terug als loskomende tegels of bollend parket. Daarom meten wij het restvocht bij de oplevering, zodat u zwart op wit hebt wanneer het mag.",
      },
      {
        q: "Hoeveel stroom verbruikt een bouwdroger per dag?",
        a: "Een Small bouwdroger trekt 0,75 kW, een Medium ongeveer 1,1 kW. Draait die 24 uur door, dan komt u op grofweg 18 tot 26 kWh per dag. Aan een gangbaar tarief is dat enkele euro's per etmaal, minder dan wat één extra huurdag u kost, en dat is precies waarom het toestel 's nachts moet blijven draaien.",
      },
      {
        q: "Kan ik een toestel bijbestellen als het te traag gaat?",
        a: "Ja. U belt, en omdat het magazijn op tien minuten ligt, staat er doorgaans dezelfde dag een extra toestel. U betaalt alleen de dagen dat het er staat. Vaak is een extra ventilator trouwens effectiever dan een tweede droger. Dat bekijkt de technieker ter plaatse.",
      },
    ],
    realisaties: [],
  },
  {
    slug: "geel",
    title: "Bouwdroger huren in Geel - Kempense werven | Vernast",
    description:
      "Bouwdroger huren in Geel: nieuwbouw op ruime kavels, schuren en koude winterwerven in de Kempen. Binnen 24 uur geleverd en geplaatst.",
    h1: "Bouwdroger huren in Geel",
    kicker: "De Kempen · levering binnen 24 uur",
    rit: { afstand: "circa 50 km", tijd: "ongeveer drie kwartier" },
    intro: [
      "Geel ligt in het hart van de Kempen, op drie kwartier van ons magazijn. We rijden er regelmatig, en de rit verandert niets aan de prijs: levering, plaatsing en ophaling zitten in elk droogpakket.",
      "Wat hier anders is dan in de stad, is de schaal. De percelen zijn ruim, de woningen staan vrij, en de ruimtes die moeten drogen zijn groter: een nieuwbouw van tweehonderd vierkante meter, een verbouwde schuur, een garage met een nieuwe chape. Meer volume betekent meer toestellen, niet langer wachten.",
    ],
    bouw: {
      kop: "Nieuwbouw op ruime kavels en verbouwde bijgebouwen",
      alineas: [
        "Een vrijstaande nieuwbouw droogt niet sneller omdat hij groter is. Hij heeft gewoon meer capaciteit nodig. Wij rekenen op volume in kubieke meter, niet op oppervlakte: een woning met een open leefruimte en een hoog plafond bevat veel meer lucht dan dezelfde vierkante meters onder een normaal plafond, en die lucht moet allemaal door het toestel.",
        "Bij verbouwde bijgebouwen (een schuur die loft wordt, een garage die bureau wordt) komt er iets bij: die ruimtes zijn zelden goed verwarmd tijdens de werken. Onder 15 °C verliest een condensdroger rendement, dus zetten we er in de winter een elektrische bouwkachel bij, of kiezen we meteen voor een adsorptiedroger die ook in de koude blijft werken.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "Voor de grote volumes hier: 90 liter per dag en bereik tot ongeveer 600 m³, voor een vrijstaande nieuwbouw of een verbouwde schuur." },
      { key: "teddh30", waarom: "Een bijgebouw in verbouwing is zelden verwarmd. Deze kachel brengt de ruimte op werkingstemperatuur zodat de droger weer rendement haalt." },
      { key: "ttv4500", waarom: "Bij een grote open ruimte is één toestel in de hoek niet genoeg: de lucht moet rondgaan. Deze ventilator zorgt daarvoor." },
      { key: "ttk350", waarom: "De aanvulling voor de verdieping of het bijgebouw: 70 liter per dag, bereik tot ongeveer 400 m³, en pompklaar voor continue afvoer." },
    ],
    levering: {
      kop: "Leveren in Geel: binnen 24 uur, zonder transportkost",
      alinea:
        "Drie kwartier rijden vanuit Aartselaar, en dat verandert niets aan de prijs. Wat het wel doet is onze planning strakker maken, dus voor Geel vragen we liefst een dag speling bij uw leverdatum. De technieker rekent bij aankomst het volume door en verdeelt de toestellen over de ruimte in plaats van ze op één plek te zetten.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een rit van ongeveer vijftig kilometer. Voor de opstellingen van meerdere toestellen die hier gangbaar zijn, is leveren praktisch altijd de betere keuze.",
    },
    buren: ["mol", "herentals", "turnhout"],
    faq: [
      {
        q: "Hoeveel bouwdrogers heb ik nodig voor een nieuwbouw van 200 m²?",
        a: "Dat hangt af van het volume, niet van de oppervlakte alleen. Bij een normale plafondhoogte komt u voor 200 m² doorgaans uit op twee tot drie drogers plus ventilatoren; met een hoge open leefruimte wordt dat meer. De Calculator rekent het door op uw eigen afmetingen en zegt meteen welke droogtijd en prijs erbij horen.",
      },
      {
        q: "Kunnen jullie ook in een schuur of landbouwloods leveren?",
        a: "Ja. Wel vragen we vooraf twee dingen te checken: of er stroom beschikbaar is op de plek waar het toestel komt te staan, en of de ruimte dicht te krijgen is. Een droger in een loods met een open poort werkt tegen de buitenlucht in en haalt dan weinig uit. Staat de poort niet dicht, dan is een gerichte droging via slangen de betere aanpak.",
      },
      {
        q: "Rekenen jullie extra voor een levering in de Kempen?",
        a: "Nee. De prijs is dezelfde als in Aartselaar: levering, plaatsing, instelling en ophaling zitten in het droogpakket. Wat de afstand wel doet is onze planning strakker maken, dus voor Geel vragen we liefst een dag speling bij het kiezen van uw leverdatum.",
      },
      {
        q: "Hoeveel toestellen heb ik nodig voor een nieuwbouw van 200 m²?",
        a: "Dat hangt af van het volume, niet van de oppervlakte: een open leefruimte met een hoog plafond bevat veel meer lucht dan dezelfde vierkante meters laag onder. Bij een normale plafondhoogte komt u voor 200 m² doorgaans op twee tot drie drogers plus ventilatoren. De Calculator rekent het door op uw eigen afmetingen.",
      },
    ],
    realisaties: [],
  },
  {
    slug: "mol",
    title: "Bouwdroger huren in Mol - levering in 24 u | Vernast",
    description:
      "Bouwdroger huren in Mol: vrijstaande woningen op zandgrond, koude werven in de Kempen. Binnen 24 uur geleverd vanuit Aartselaar, geplaatst en ingesteld.",
    h1: "Bouwdroger huren in Mol",
    kicker: "De Kempen · onze verste rit, zelfde prijs",
    rit: { afstand: "circa 60 km", tijd: "ongeveer een uur" },
    intro: [
      "Mol is van alle gemeenten op deze pagina de verste van ons magazijn: ruim een uur rijden. Toch leveren we er binnen 24 uur, en tegen dezelfde prijs als om de hoek. De rit telt mee in onze planning, niet in uw factuur.",
      "De Kempense zandgrond laat water snel door, wat betekent dat kelders hier minder vaak onderlopen dan in de Rupelstreek. Maar diezelfde zandgrond zorgt wel voor vochtige kruipruimtes, en de vrijstaande woningen die hier staan zijn in de winter vaak nauwelijks verwarmd tijdens de werken.",
    ],
    bouw: {
      kop: "Vrijstaande woningen, kruipruimtes en koude werven",
      alineas: [
        "Een kruipruimte onder een vrijstaande woning op zandgrond staat zelden onder water, maar hij is bijna altijd vochtig: er is geen doorstroming, de bodem geeft vocht af, en dat vocht trekt via de vloer naar boven. Dat merkt u als een muffe geur in de woonkamer of als schimmel in de hoeken van een buitenmuur. Zo'n ruimte droogt u met een adsorptiedroger die via slangen door een bestaand luik blaast. U hoeft er zelf niet in.",
        "Bij een winterwerf is de koude het probleem. Onder 15 °C zakt het rendement van een condensdroger zichtbaar, en rond het vriespunt doet hij bijna niets meer. Een elektrische bouwkachel brengt de ruimte eerst op werkingstemperatuur; pas dan begint de droger echt liters te halen. Die combinatie is hier eerder regel dan uitzondering.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "Voor een kruipruimte op zandgrond: het toestel staat buiten en blaast droge lucht naar binnen via een slang door een bestaand luik." },
      { key: "teddh30", waarom: "De winterwerf: onder 15 °C zakt het rendement van elke condensdroger, rond het vriespunt doet hij bijna niets meer. Deze kachel lost dat op." },
      { key: "ttk350", waarom: "Voor een vrijstaande woning in renovatie zodra de ruimte verwarmd is: 70 liter per dag, bereik tot ongeveer 400 m³." },
      { key: "ttv4500", waarom: "Bij de grote gelijkvloerse oppervlaktes hier staat de droger zelden in de kamer die het natst is. Deze ventilator verdeelt de droge lucht over de hele bouwlaag." },
    ],
    levering: {
      kop: "Leveren in Mol: binnen 24 uur, ook voor één toestel",
      alinea:
        "Mol is onze verste rit in de provincie, ruim een uur. Er is geen minimumbestelling en geen transportkost: ook voor één Small bouwdroger rijden we uit. Wel vragen we een dag speling bij het kiezen van uw leverdatum, zodat we de rit kunnen combineren met andere werven in de Kempen.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Ruim zestig kilometer enkel. Voor Mol is leveren in de regel verstandiger: u bent twee uur rijden kwijt, en installatie en vochtmeting zitten bij een levering gewoon in de prijs.",
    },
    buren: ["geel", "turnhout", "herentals"],
    faq: [
      {
        q: "Komen jullie met één toestel helemaal naar Mol?",
        a: "Ja. Er is geen minimumbestelling en geen transportkost: ook voor één Small bouwdroger rijden we uit. Wat we wel vragen is een dag speling bij het kiezen van uw leverdatum, zodat we de rit kunnen combineren. Wie voor de middag boekt heeft de toestellen doorgaans de volgende werkdag draaien.",
      },
      {
        q: "Mijn kruipruimte ruikt muf. Helpt een bouwdroger daar?",
        a: "Meestal wel, maar met het juiste toestel. Een condensdroger in de woonkamer droogt de kruipruimte niet; u moet de vochtige lucht dáár aanpakken. Daarvoor zetten we een adsorptiedroger buiten de ruimte die droge lucht naar binnen blaast via een slang door een bestaand luik. Blijft de geur na de droging hangen, dan zit er schimmel, en dan is een ozonbehandeling de volgende stap.",
      },
      {
        q: "Hoeveel stroom vraagt een elektrische bouwkachel?",
        a: "Onze kachels van 20 en 30 kW draaien op krachtstroom, 400 V, niet op een gewoon stopcontact. Controleer dus vóór u reserveert of die aansluiting op de werf aanwezig is. De bouwdrogers en ventilatoren zelf draaien wel gewoon op 230 V: 0,75 tot 1,4 kW voor een droger, ongeveer 0,2 kW voor een ventilator.",
      },
      {
        q: "Mijn kruipruimte ruikt muf. Helpt een bouwdroger daar?",
        a: "Ja, maar met het juiste toestel. Een condensdroger in de woonkamer droogt de kruipruimte niet; u moet de vochtige lucht dáár aanpakken. Daarvoor zetten we een adsorptiedroger buiten de ruimte die droge lucht naar binnen blaast via een bestaand luik. Blijft de geur na de droging hangen, dan zit er schimmel en is een ozonbehandeling de volgende stap.",
      },
    ],
    realisaties: [],
  },
  {
    slug: "herentals",
    title: "Bouwdroger huren in Herentals en omgeving | Vernast",
    description:
      "Bouwdroger huren in Herentals: woningen, bedrijfsgebouwen en magazijnen langs het Albertkanaal. Binnen 24 uur geleverd en geplaatst.",
    h1: "Bouwdroger huren in Herentals",
    kicker: "Langs het Albertkanaal · binnen 24 uur",
    rit: { afstand: "circa 40 km", tijd: "ongeveer veertig minuten" },
    intro: [
      "Herentals ligt aan het Albertkanaal, en dat heeft de gemeente een mengeling gegeven die we elders minder zien: woonwijken en bedrijventerreinen naast elkaar. Daardoor rijden we hier even vaak naar een rijwoning met een natte kelder als naar een magazijn of een bedrijfsgebouw.",
      "Dat tweede vraagt een andere aanpak. Een bedrijfshal heeft volume dat een woning niet heeft, vaak een betonvloer die traag droogt, en meestal een planning waarin stilstand geld kost. Daar zetten we meerdere toestellen tegelijk in plaats van er één langer te laten staan.",
    ],
    bouw: {
      kop: "Woningen én bedrijfsgebouwen",
      alineas: [
        "Bij een bedrijfsgebouw is de rekensom anders dan thuis. Niet de huurprijs van het toestel weegt het zwaarst, maar de dagen dat de ruimte onbruikbaar is. Een opstelling die dubbel zo groot is kost geen dubbele tijd maar halveert ze vaak, en dat verdient zichzelf terug in gederfde omzet of in een aannemer die zijn planning haalt.",
        "Een betonvloer droogt bovendien trager dan een chape en geeft zijn vocht langs één kant af. Daar helpen ventilatoren meer dan een extra droger: de verzadigde luchtlaag die net boven de vloer blijft hangen moet weggeblazen worden, anders staat de droger lucht te ontvochtigen die al droog is.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "Voor een bedrijfshal of magazijn: 90 liter per dag, bereik tot ongeveer 600 m³, en pompklaar voor continue afvoer." },
      { key: "radiaal2250", waarom: "Voor gerichte droging via slangen: onder een betonvloer, achter een wandbekleding of in een kruipruimte." },
      { key: "ttv4500", waarom: "Een betonvloer geeft zijn vocht langs één kant af. Luchtbeweging erlangs helpt daar meer dan een extra droger." },
      { key: "ttk350", waarom: "Voor een woning of een kleiner bedrijfspand: 70 liter per dag, bereik tot ongeveer 400 m³. In een pakket staan er hier vaak twee." },
    ],
    levering: {
      kop: "Leveren in Herentals: woning of bedrijfsgebouw",
      alinea:
        "Veertig minuten vanuit Aartselaar. Bij een bedrijfsgebouw vragen we vooraf het volume in kubieke meter, de vloeropbouw en of de ruimte dicht te krijgen is. Een droger tegen een open poort werkt tegen de buitenlucht in. Bij stilstand die geld kost zetten we liever meer toestellen korter dan één toestel lang.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Veertig kilometer enkel. Voor een enkel toestel haalbaar; voor de opstellingen die een bedrijfsruimte vraagt is leveren met installatie de praktischere keuze.",
    },
    buren: ["geel", "turnhout", "heist-op-den-berg"],
    faq: [
      {
        q: "Kunnen jullie een bedrijfshal of magazijn drogen?",
        a: "Ja, en dat doen we regelmatig. Wat we nodig hebben is het volume in kubieke meter, de vloeropbouw en of de ruimte dicht te krijgen is. Bij grote volumes zetten we meerdere drogers met ventilatoren in plaats van één toestel langer te laten staan. Dat is sneller en meestal goedkoper, omdat u minder dagen huurt.",
      },
      {
        q: "Waarom heb ik ventilatoren nodig als ik al een droger heb?",
        a: "Omdat vlak boven een natte vloer een laag lucht blijft hangen die al verzadigd is met vocht. Zolang die laag niet weg is, droogt de vloer eronder nauwelijks verder. Uw droger staat dan lucht te ontvochtigen die al droog is. Een ventilator blaast die laag weg en voert nieuwe, droge lucht aan. Bij vloeren verdubbelt dat vaak de snelheid.",
      },
      {
        q: "Kan ik een factuur op bedrijfsnaam krijgen?",
        a: "Ja. Geef uw btw-nummer op bij de reservatie, dan staat het op de factuur en kunt u de btw recupereren. De catalogusprijzen op deze site zijn exclusief btw; bij het afrekenen ziet u het brutobedrag. Hebt u een bestelbon- of referentienummer nodig op de factuur, vermeld dat dan in het opmerkingenveld.",
      },
      {
        q: "Kan ik een factuur op bedrijfsnaam krijgen?",
        a: "Ja. Geef uw btw-nummer op bij de reservatie, dan staat het op de factuur en kunt u de btw recupereren. De catalogusprijzen zijn exclusief btw; bij het afrekenen ziet u het brutobedrag. Hebt u een bestelbon- of referentienummer nodig, zet dat dan in het opmerkingenveld.",
      },
    ],
    realisaties: [],
  },
  {
    slug: "heist-op-den-berg",
    title: "Bouwdroger huren in Heist-op-den-Berg | Vernast",
    description:
      "Bouwdroger huren in Heist-op-den-Berg: fermettes en vrijstaande woningen in renovatie, verspreide bebouwing. Binnen 24 uur geleverd, geplaatst en ingesteld.",
    h1: "Bouwdroger huren in Heist-op-den-Berg",
    kicker: "Verspreide bebouwing · binnen 24 uur geleverd",
    rit: { afstand: "circa 35 km", tijd: "ongeveer veertig minuten" },
    intro: [
      "Heist-op-den-Berg is uitgestrekt: een centrum op de heuvelrug en daaromheen een reeks dorpskernen en verspreide bebouwing. Wij leveren in de hele gemeente, van Booischot tot Itegem, binnen dezelfde 24 uur en tegen dezelfde prijs.",
      "Wat we hier het vaakst tegenkomen is de renovatie van een vrijstaande woning of een fermette uit de jaren zeventig en tachtig. Die generatie huizen wordt nu grondig aangepakt (isolatie, nieuwe chape, soms een volledige binnenverbouwing), en dat brengt bouwvocht mee dat eruit moet voor er afgewerkt kan worden.",
    ],
    bouw: {
      kop: "Fermettes en vrijstaande woningen in renovatie",
      alineas: [
        "De fermette van veertig jaar oud heeft een eigenaardigheid die bij het drogen telt: veel binnenmuren zijn massief en dik, en massieve muren geven hun vocht traag af. Een nieuwe pleisterlaag erop droogt aan de oppervlakte snel, maar de kern blijft nat. Schildert u daar te vroeg op, dan laat de verf los. Daarom meten we het restvocht in plaats van af te gaan op hoe de muur aanvoelt.",
        "Bij isolatiewerken komt er nog iets bij. Een woning die net luchtdicht gemaakt is, ventileert niet meer zoals vroeger. Het bouwvocht dat erin zit kan er niet vanzelf uit, en dat levert in de eerste winter condens op ramen, muffe hoeken en soms schimmel. Een droging na de werken is dan geen luxe maar het sluitstuk ervan.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "Voor een fermette of vrijstaande woning in renovatie: genoeg capaciteit voor een gelijkvloers met dikke, massieve binnenmuren." },
      { key: "ttv4500", waarom: "Massieve muren drogen traag en ongelijk. Luchtbeweging langs het oppervlak versnelt dat en voorkomt natte hoeken." },
      { key: "ttk170", waarom: "Voor één kamer, een badkamer of de eerste winter na isolatiewerken, wanneer de ramen beslaan." },
      { key: "teddh30", waarom: "Voor een fermette die tijdens de werken niet verwarmd wordt. Deze kachel houdt de ruimte op temperatuur zodat de droger zijn capaciteit haalt." },
    ],
    levering: {
      kop: "Leveren in Heist-op-den-Berg en de dorpskernen",
      alinea:
        "Wij leveren in de hele gemeente (Booischot, Itegem, Wiekevorst, Schriek en de rest) binnen dezelfde 24 uur en tegen dezelfde prijs. Geef het volledige adres op bij de reservatie, dan houdt de planning rekening met de rit. De technieker meet bij aankomst, want bij dikke muren zegt het gevoel weinig over wat er binnenin zit.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Ongeveer veertig minuten rijden. Voor één toestel te doen; voor een volledige renovatie weegt de installatie en de vochtmeting van een levering zwaarder dan het prijsverschil.",
    },
    buren: ["lier", "mechelen", "herentals"],
    faq: [
      {
        q: "Leveren jullie ook in de dorpskernen rond Heist?",
        a: "Ja, in de hele gemeente (Booischot, Itegem, Wiekevorst, Schriek en de rest), tegen dezelfde prijs en binnen dezelfde 24 uur. Levering, plaatsing en ophaling zitten in het droogpakket. Geef bij de reservatie het volledige adres op, dan houdt de planning rekening met de rit.",
      },
      {
        q: "Ik heb net geïsoleerd en nu beslaan mijn ramen. Is dat bouwvocht?",
        a: "Vaak wel, zeker in de eerste winter na de werken. Een woning die luchtdicht gemaakt is ventileert niet meer zoals vroeger, dus het vocht dat tijdens de werken in de muren en de chape is gekomen kan er niet vanzelf uit. Een droging van een à twee weken haalt dat eruit. Blijft het daarna terugkomen, dan is het een ventilatieprobleem en geen bouwvocht.",
      },
      {
        q: "Hoe weet ik of een dikke binnenmuur droog genoeg is om te schilderen?",
        a: "Niet aan het gevoel, want de bovenste millimeters drogen veel sneller dan de kern. Onze technieker meet het bij de oplevering en zegt u of het onder de norm zit. Dat is ook precies waar de Drooggarantie op steunt: is het op de afgesproken datum niet droog, dan huurt u kosteloos verder tot het wel zo is.",
      },
      {
        q: "Ik heb net geïsoleerd en nu beslaan mijn ramen. Is dat bouwvocht?",
        a: "Vaak wel, zeker in de eerste winter na de werken. Een woning die luchtdicht gemaakt is ventileert niet meer zoals vroeger, dus het vocht dat tijdens de werken in muren en chape kwam, kan er niet vanzelf uit. Een droging van één à twee weken haalt dat eruit. Blijft het daarna terugkomen, dan is het een ventilatieprobleem en geen bouwvocht.",
      },
    ],
    realisaties: [],
  },
  {
    slug: "brasschaat",
    title: "Bouwdroger huren in Brasschaat en de noordrand | Vernast",
    description:
      "Bouwdroger huren in Brasschaat: villa's met kelder, zwembadtechniek en grote volumes. Binnen 24 uur geleverd vanuit Aartselaar, geplaatst en ingesteld.",
    h1: "Bouwdroger huren in Brasschaat",
    kicker: "De noordrand · binnen 24 uur geleverd",
    rit: { afstand: "circa 22 km", tijd: "ongeveer een halfuur" },
    intro: [
      "Brasschaat ligt in de noordrand, een halfuur van ons magazijn via de ring. De bebouwing is hier ruimer dan in de stad: villa's op grote percelen, vaak met een volledige kelderverdieping, soms met een zwembad of een technische ruimte eronder.",
      "Die kelderverdiepingen zijn waar we het vaakst voor komen. Ze liggen onder het maaiveld, worden zelden goed verwarmd, en een lek in een leiding of een technische ruimte blijft er soms weken onopgemerkt voor iemand het ziet.",
    ],
    bouw: {
      kop: "Kelderverdiepingen, technische ruimtes en grote volumes",
      alineas: [
        "Een volledige kelderverdieping is een groot volume dat moeilijk op temperatuur komt. Dat is precies de situatie waarin een condensdroger het laat afweten: onder 15 °C zakt zijn rendement, en een onverwarmde kelder in de winter zit daar ruim onder. Wij zetten er dan een elektrische kachel naast, of kiezen meteen een adsorptiedroger die wel in de koude blijft werken.",
        "Bij een lek in een technische ruimte of achter een zwembadwand telt bovendien wat u niet ziet. Water kruipt onder de dekvloer en achter de wandbekleding, en daar droogt het niet vanzelf. Daar sturen we droge lucht gericht naartoe via slangen, in plaats van de hele ruimte te ontvochtigen en te hopen dat het meekomt.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "Voor een kelderverdieping die in de winter niet op temperatuur komt, daar waar een condensdroger het laat afweten." },
      { key: "ttk650", waarom: "Voor de grote volumes van een villa: 90 liter per dag, bereik tot ongeveer 600 m³." },
      { key: "radiaal2250", waarom: "Voor water achter een zwembadwand of onder een dekvloer: droge lucht via slangen de holle ruimte in, zonder alles open te breken." },
      { key: "ttv4500", waarom: "In een villa met lange gangen blijft droge lucht hangen waar het toestel staat. Deze ventilator brengt ze tot in de verste kamer." },
    ],
    levering: {
      kop: "Leveren in Brasschaat: binnen 24 uur, tot in de kelder",
      alinea:
        "Een halfuur vanuit Aartselaar via de ring. De technieker draagt de toestellen tot waar ze moeten staan, ook een verdieping lager. Bij een vaste trap is elke verdieping inbegrepen. Bij een lek in een technische ruimte meet hij eerst waar het vocht zit, want wat onder een dekvloer of achter een wand is gekropen, droogt niet mee met de ruimte.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een halfuur rijden. Voor een kelderverdieping hebt u doorgaans twee tot drie toestellen nodig; dat past zelden in één wagen, en leveren is dan praktischer.",
    },
    buren: ["schoten", "antwerpen-stad"],
    faq: [
      {
        q: "Hoe droog ik een kelder die in de winter niet te verwarmen is?",
        a: "Met een adsorptiedroger. Die werkt met een droogmiddel in plaats van met condensatie en blijft ook bij lage temperatuur vocht uit de lucht halen, waar een condensdroger onder 15 °C rendement verliest. Is de kelder wél te verwarmen, dan is een elektrische kachel plus een condensdroger meestal voordeliger. De technieker kiest dat ter plaatse op basis van de meting.",
      },
      {
        q: "Er zat water achter mijn wandbekleding. Moet die eraf?",
        a: "Vaak niet helemaal, maar wel open. Water dat achter een bekleding of onder een dekvloer zit, droogt niet mee met de ruimte, want er is geen luchtstroom. Met gerichte droging via slangen blazen we droge lucht in die holle ruimte, door enkele kleine openingen in plaats van alles weg te breken. Of dat volstaat, blijkt uit de meting bij de start.",
      },
      {
        q: "Hoeveel toestellen heb ik nodig voor een hele kelderverdieping?",
        a: "Dat hangt af van het volume, niet van de oppervlakte: een kelder met een hoog plafond bevat veel meer lucht dan dezelfde vierkante meters laag onder. Voor een gangbare kelderverdieping onder een villa komt u doorgaans op twee tot drie toestellen plus ventilatoren. De Calculator rekent het door op uw eigen afmetingen.",
      },
      {
        q: "Er zat water achter mijn wandbekleding. Moet die eraf?",
        a: "Vaak niet helemaal, maar wel open. Water achter een bekleding of onder een dekvloer droogt niet mee met de ruimte, want er is geen luchtstroom. Met gerichte droging via slangen blazen we droge lucht in die holle ruimte, door enkele kleine openingen in plaats van alles weg te breken. Of dat volstaat, blijkt uit de meting bij de start.",
      },
    ],
    realisaties: [],
  },
  {
    slug: "schoten",
    title: "Bouwdroger huren in Schoten - binnen 24 uur | Vernast",
    description:
      "Bouwdroger huren in Schoten: villawijken en rijwoningen in de noordrand, langs het kanaal Dessel-Schoten. Binnen 24 uur geleverd, geplaatst en ingesteld.",
    h1: "Bouwdroger huren in Schoten",
    kicker: "De noordrand · binnen 24 uur geleverd",
    rit: { afstand: "circa 20 km", tijd: "ongeveer een halfuur" },
    intro: [
      "Schoten ligt in de noordrand aan het kanaal Dessel-Schoten, op een halfuur van ons magazijn. De gemeente is gemengd gebouwd: villawijken aan de ene kant, dichter bebouwde rijwoningen rond het centrum aan de andere.",
      "Dat betekent dat we hier met twee heel verschillende opstellingen werken. In een villa draait het om volume en om kelders; in een rijwoning om een compact toestel dat door een smalle gang past en op één stopcontact draait. De Calculator kiest op basis van uw eigen afmetingen, niet op basis van het type woning.",
    ],
    bouw: {
      kop: "Villawijken en rijwoningen naast elkaar",
      alineas: [
        "In de villawijken gaat het meestal om een kelder of een bijgebouw dat vochtig blijft, of om een grote nieuwbouw waar chape en pleisterwerk tegelijk moeten drogen. Daar zetten we meerdere toestellen in plaats van één langer te laten staan: meer capaciteit kost dezelfde dagen, en de dagen zijn wat u betaalt.",
        "Bij de rijwoningen rond het centrum is het beeld dat van de stad. Een smalle, diepe plattegrond waarin de droge lucht niet vanzelf rondgaat, en dus een ventilator die hem van voor naar achter stuurt. Zonder die luchtbeweging droogt de kamer waar het toestel staat, en de rest niet.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De middenmoot die hier op de meeste werven past: 70 liter per dag, voor een gelijkvloers of een ruime kelder." },
      { key: "ttk170", waarom: "Voor de rijwoningen rond het centrum: compact, zuinig en stil genoeg voor een huis waar gewoond wordt." },
      { key: "ttv4500", waarom: "In een smalle, diepe plattegrond droogt zonder ventilator alleen de kamer waar het toestel staat." },
      { key: "revolution", waarom: "Voor een kelder of kruipruimte die niet te verwarmen is: droge lucht via slangen, ook bij lage temperaturen." },
    ],
    levering: {
      kop: "Leveren in Schoten: binnen 24 uur, geplaatst en ingesteld",
      alinea:
        "Een halfuur vanuit Aartselaar. Schoten is gemengd gebouwd, dus de technieker bekijkt ter plaatse of uw woning om capaciteit vraagt of om verdeling: in een villa gaat het om volume, in een rijwoning om de droge lucht van voor naar achter krijgen. Die keuze maakt meer verschil dan een toestel groter nemen.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een halfuur rijden over de ring. Voor één droger of een ventilator prima te doen; de toestellen moeten wel rechtop vervoerd worden.",
    },
    buren: ["brasschaat", "antwerpen-stad"],
    faq: [
      {
        q: "Moet ik ramen en deuren openzetten terwijl de droger draait?",
        a: "Nee, integendeel: dicht houden. Een bouwdroger ontvochtigt de lucht die in de ruimte zit; staat er een raam open, dan haalt hij voortdurend nieuwe vochtige buitenlucht binnen en werkt hij tegen het weer in. Binnendeuren tussen de ruimtes die moeten drogen mogen wel open, zodat de droge lucht kan rondgaan.",
      },
      {
        q: "Eén toestel voor het hele gelijkvloers, of meerdere?",
        a: "Dat hangt van het volume en van de plattegrond af. Bij een open leefruimte volstaat vaak één toestel met een ventilator. Bij een smalle, diepe rijwoning met gesloten kamers droogt één toestel vooral de kamer waar het staat; dan zijn twee kleinere toestellen of een extra ventilator effectiever dan één groot.",
      },
      {
        q: "Hoe lang blijft een bouwdroger gemiddeld staan?",
        a: "Voor bouwvocht na chape of pleisterwerk rekenen we doorgaans op één tot drie weken, afhankelijk van dikte, volume en temperatuur. Bij waterschade is het korter als het snel is aangepakt, en langer als het water al dagen in het materiaal zat. De meting bepaalt het einde, niet de kalender: is het op de afgesproken datum niet droog, dan huurt u kosteloos verder.",
      },
      {
        q: "Moet ik ramen en deuren openzetten terwijl de droger draait?",
        a: "Nee, integendeel: dicht houden. Een bouwdroger ontvochtigt de lucht die in de ruimte zit; staat er een raam open, dan haalt hij voortdurend nieuwe vochtige buitenlucht binnen en werkt hij tegen het weer in. Binnendeuren tussen de ruimtes die moeten drogen mogen wel open, zodat de droge lucht kan rondgaan.",
      },
    ],
    realisaties: [],
  },
  {
    slug: "wilrijk",
    title: "Bouwdroger huren in Wilrijk - op 15 minuten | Vernast",
    description:
      "Bouwdroger huren in Wilrijk: tuinwijken en woningen uit het interbellum, op een kwartier van ons magazijn. Binnen 24 uur geleverd, geplaatst en ingesteld.",
    h1: "Bouwdroger huren in Wilrijk",
    kicker: "District van Antwerpen · op een kwartier",
    rit: { afstand: "circa 7 km", tijd: "ongeveer een kwartier" },
    intro: [
      "Wilrijk is een district van Antwerpen, maar het bouwt anders dan de binnenstad: ruimer opgezet, met tuinwijken, halfopen bebouwing en woningen uit het interbellum op een eigen perceel. En het ligt op een kwartier van ons magazijn in Aartselaar.",
      "Die combinatie maakt Wilrijk een van de gemeenten waar we het snelst staan. Bij een waterschadedossier is dezelfde dag hier vaak haalbaar, en voor een gewone droging is de volgende werkdag de regel.",
    ],
    bouw: {
      kop: "Woningen uit het interbellum en tuinwijken",
      alineas: [
        "Een woning uit de jaren dertig heeft meestal massieve muren zonder spouw en een kelder in baksteen zonder waterkering. Die kelder is zelden kurkdroog, en bij een renovatie wordt dat zichtbaar: zodra er geïsoleerd of gepleisterd wordt, komt het vocht dat er altijd al zat naar de oppervlakte. Drogen helpt daar, maar alleen als de bron is aangepakt. Anders komt het terug.",
        "Bij de tuinwijkwoningen gaat het vaker om bouwvocht dan om opstijgend vocht: nieuwe chape, nieuw pleisterwerk, een aanbouw. Dat droogt wél definitief weg, en met een opstelling van één droger plus een ventilator is dat meestal een kwestie van één tot twee weken in plaats van maanden.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "Voor een woning uit het interbellum met een smalle gang: compact, en zuinig op één gewoon stopcontact." },
      { key: "ttk350", waarom: "Voor een tuinwijkwoning met een nieuwe chape of een aanbouw: 70 liter per dag over het hele gelijkvloers." },
      { key: "ttv4500", waarom: "Zonder luchtbeweging droogt alleen de kamer waar het toestel staat. Deze ventilator trekt het hele gelijkvloers mee." },
      { key: "teddh30", waarom: "Voor de kelder onder een interbellumwoning, die in de winter zelden boven tien graden komt. Vraagt 400 V krachtstroom." },
    ],
    levering: {
      kop: "Leveren in Wilrijk: op een kwartier van het magazijn",
      alinea:
        "Een kwartier rijden. Voor een gewone droging is de volgende werkdag de regel; bij waterschade is dezelfde dag vaak haalbaar wanneer u voor de middag belt. De technieker meet bij aankomst, en dat is hier nuttig: in een woning uit de jaren dertig is het verschil tussen bouwvocht en opstijgend vocht niet met het oog te zien.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een kwartier rijden over de A12. Voor één toestel is afhalen hier een voordelige keuze, zeker omdat de rit kort is en u geen transport betaalt.",
    },
    buren: ["antwerpen-stad", "edegem", "mortsel", "aartselaar"],
    faq: [
      {
        q: "Hoe snel kunnen jullie in Wilrijk leveren?",
        a: "Wilrijk ligt op ongeveer een kwartier van ons magazijn in Aartselaar. Voor een gewone droging is de volgende werkdag de regel; bij waterschade is dezelfde dag vaak haalbaar wanneer u voor de middag belt. Levering, plaatsing en ophaling zitten in de prijs van het droogpakket.",
      },
      {
        q: "Mijn kelder blijft vochtig, ook zonder werken. Wat nu?",
        a: "Dan gaat het waarschijnlijk niet om bouwvocht maar om een permanente bron: opstijgend vocht via de muurvoet, of vocht dat door de keldermuur komt. Een bouwdroger haalt het vocht uit de lucht zolang hij draait, maar zet u hem uit, dan komt het terug. De duurzame oplossing is de bron aanpakken en daarna drogen; onze zusterfirma Vernast Vochtbestrijding bekijkt dat eerste deel.",
      },
      {
        q: "Kan ik een bouwdroger langer dan een maand huren?",
        a: "Ja. U kiest bij de reservatie 3 dagen, 1 week, 2 weken, 1 maand of 2 maanden, en bij langere periodes zakt de dagprijs. Loopt het toch uit, dan verlengt u online met één klik en betaalt u alleen de extra dagen. Bent u vroeger klaar, laat het weten, dan halen we op.",
      },
    ],
    realisaties: [],
  },
  {
    slug: "edegem",
    title: "Bouwdroger huren in Edegem - op 10 minuten | Vernast",
    description:
      "Bouwdroger huren in Edegem: naoorlogse woningen in renovatie, op tien minuten van ons magazijn in Aartselaar. Binnen 24 uur geleverd, geplaatst en ingesteld.",
    h1: "Bouwdroger huren in Edegem",
    kicker: "De zuidrand · op tien minuten van ons magazijn",
    rit: { afstand: "circa 5 km", tijd: "ongeveer tien minuten" },
    intro: [
      "Edegem grenst aan Aartselaar, waar ons magazijn staat. Tien minuten rijden, en daarmee een van de kortste ritten die we maken. Voor u betekent dat een levering die bijna altijd de volgende werkdag lukt, en bij waterschade vaak dezelfde dag.",
      "De gemeente is overwegend naoorlogs en residentieel: halfopen en vrijstaande woningen uit de jaren vijftig tot zeventig, met een kelder of kruipruimte en een tuin. Die generatie gaat nu door een renovatiegolf, en daar komt bouwvocht bij kijken.",
    ],
    bouw: {
      kop: "Naoorlogse woningen, kelders en kruipruimtes",
      alineas: [
        "Bij een renovatie van zo'n woning komt het vocht uit twee hoeken tegelijk. Het nieuwe werk brengt water binnen (een chape van zeven centimeter bevat per vierkante meter tientallen liters), en de bestaande kelder of kruipruimte geeft vocht af dat er altijd al zat maar dat nu niet meer weg kan omdat er geïsoleerd is.",
        "Beide pakt u in één keer aan, maar niet met één toestel op één plek. De chape droogt met een droger plus een ventilator die de verzadigde laag boven de vloer wegblaast; de kruipruimte met droge lucht die er via een slang door een bestaand luik in geblazen wordt. De technieker bekijkt bij de levering wat waar moet staan.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "Onze standaard voor een naoorlogse woning in renovatie: 70 liter per dag, bereik tot ongeveer 400 m³." },
      { key: "revolution", waarom: "Voor de kruipruimte eronder: droge lucht via een slang door een bestaand luik, zonder dat u er zelf in moet." },
      { key: "ttv4500", waarom: "Bij een nieuwe chape verdubbelt luchtbeweging vaak de snelheid: hij blaast de verzadigde laag boven de vloer weg." },
      { key: "ttk170", waarom: "Voor één kamer, een badkamer of een zolder. Compact genoeg voor een smalle trap en zuinig op een gewoon stopcontact." },
    ],
    levering: {
      kop: "Leveren in Edegem: op tien minuten, de volgende werkdag",
      alinea:
        "Edegem grenst aan onze eigen gemeente, dus de rit is tien minuten. Bij een renovatie komt het vocht hier vaak uit twee hoeken tegelijk: het nieuwe werk brengt water binnen, en de bestaande kruipruimte geeft vocht af dat er altijd al zat maar nu niet meer weg kan. De technieker bekijkt bij de levering wat waar moet staan.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Tien minuten rijden. Voor één toestel is afhalen hier bijna altijd voordeliger; bij een opstelling met meerdere toestellen weegt de installatie van een levering zwaarder.",
    },
    buren: ["aartselaar", "kontich", "wilrijk", "mortsel"],
    faq: [
      {
        q: "Hoe snel staat er een toestel in Edegem?",
        a: "Edegem grenst aan onze eigen gemeente, dus de rit is tien minuten. Voor een gewone droging boekt u online en staat het toestel doorgaans de volgende werkdag te draaien; bij waterschade is dezelfde dag vaak haalbaar wanneer u voor de middag belt op 03 689 90 65.",
      },
      {
        q: "Moet ik het waterreservoir zelf leegmaken?",
        a: "Bij een geleverd pakket niet, als u de condenspomp meeneemt: die voert het water continu af naar een afvoer, douche of vloerput, en dan draait het toestel dag en nacht door zonder dat u ernaar hoeft om te kijken. Zonder pomp leegt u het reservoir twee à drie keer per dag. Loopt het vol, dan schakelt de droger zichzelf uit en staat hij stil.",
      },
      {
        q: "Wat als mijn ruimte na de huurperiode nog niet droog is?",
        a: "Dan huurt u kosteloos verder. Dat is de Drooggarantie: wij meten bij de start en bij de oplevering, en is het op de afgesproken datum niet droog, dan blijven de toestellen staan tot het wel zo is, zonder bijkomende kosten. Ze geldt voor droogpakketten die via de Calculator berekend en met levering geboekt zijn, niet voor losse toestellen die u zelf afhaalt.",
      },
      {
        q: "Wat als mijn ruimte na de huurperiode nog niet droog is?",
        a: "Dan huurt u kosteloos verder. Dat is de Drooggarantie: wij meten bij de start en bij de oplevering, en is het op de afgesproken datum niet droog, dan blijven de toestellen staan tot het wel zo is. Ze geldt voor droogpakketten die via de Calculator berekend en met levering geboekt zijn, niet voor losse toestellen die u zelf afhaalt.",
      },
    ],
    realisaties: [],
  },
  {
    slug: "duffel",
    title: "Bouwdroger huren in Duffel aan de Nete | Vernast",
    description:
      "Bouwdroger huren in Duffel: na hoogwater van de Nete, bij renovatie of na chape. Binnen 24 uur geleverd vanuit Aartselaar, geplaatst en ingesteld.",
    h1: "Bouwdroger huren in Duffel",
    kicker: "Aan de Nete · tussen Lier en Mechelen",
    rit: { afstand: "circa 15 km", tijd: "ongeveer twintig minuten" },
    intro: [
      "Duffel ligt aan de Nete, tussen Lier en Mechelen, op twintig minuten van ons magazijn. De ligging aan het water bepaalt een deel van ons werk hier: bij aanhoudende regen staat de Nete hoog, en dan gaat het om kelders en gelijkvloerse ruimtes die water krijgen.",
      "Daarnaast is het een gewone woongemeente met de gewone bouwvochtvragen: een nieuwe chape die moet drogen, pleisterwerk dat af moet voor de schilder komt, een renovatie die uitloopt omdat het restvocht nog te hoog zit.",
    ],
    bouw: {
      kop: "Hoogwater aan de Nete en gewone bouwvochtwerven",
      alineas: [
        "Bij water in een kelder is de volgorde wat telt. Eerst het staande water weg (pompen of vegen) en nat materiaal eruit: tapijt, isolatie, kartonnen dozen. Pas daarna heeft drogen zin, want een bouwdroger haalt vocht uit de lucht en uit materialen, hij pompt geen water weg. Wat erin getrokken is, blijft zonder droging maanden zitten en komt terug als vochtplekken en schimmel.",
        "Snelheid is hier geen detail. Op vochtig materiaal begint schimmel na 24 tot 48 uur. Wie binnen die termijn begint te drogen, heeft meestal alleen met vocht te maken; wie een week wacht, met vocht én met schimmel, en dat laatste vraagt een behandeling bovenop de droging.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "Bij hoogwater het werkpaard: 70 liter per dag, genoeg om een ondergelopen kelder of gelijkvloers in te halen." },
      { key: "ttv4500", waarom: "Water kruipt onder vloeren en achter plinten. Zonder luchtbeweging droogt dat niet; met deze ventilator wel." },
      { key: "revolution", waarom: "Voor een kelder die niet te verwarmen is: daar haalt een condensdroger in de winter weinig uit." },
      { key: "teddh30", waarom: "Na hoogwater in de winter is de kelder koud. Deze kachel brengt hem op werkingstemperatuur, zodat de drogers ernaast weer rendement halen." },
    ],
    levering: {
      kop: "Leveren in Duffel: twintig minuten, bij waterschade met voorrang",
      alinea:
        "Twintig minuten vanuit Aartselaar. Bij wateroverlast krijgt uw dossier voorrang in de planning: op vochtig materiaal begint schimmel na 24 tot 48 uur, dus de eerste dag telt het zwaarst. Bel dan liever dan online te boeken, op 03 689 90 65, dan zien we meteen wat er vrij staat en wat u nodig hebt.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Twintig minuten rijden. Bij een schadedossier raden we het af: zonder vochtmeting bij start en oplevering hebt u geen rapport voor uw verzekeraar.",
    },
    buren: ["lier", "mechelen", "kontich"],
    faq: [
      {
        q: "Mijn kelder stond onder water. Wat doe ik eerst?",
        a: "Pomp of veeg het staande water weg en haal alles eruit wat volgezogen is: tapijt, isolatie, karton, spaanplaat. Zet daarna geen verwarming op volle kracht, dat jaagt het vocht alleen de muren in. Bel ons zodra het leeg is. Op vochtig materiaal begint schimmel na 24 tot 48 uur, dus de eerste dag is de belangrijkste.",
      },
      {
        q: "Komen jullie ook 's avonds of in het weekend bij wateroverlast?",
        a: "Onze leveringen lopen op weekdagen tussen 08:00 en 17:00. Bij grote wateroverlast kijken we wat er die dag nog kan; bel dan op 03 689 90 65 in plaats van online te boeken, zodat we meteen zien wat er vrij staat. De toestellen zelf draaien wel gewoon door in het weekend: drogen stopt niet omdat het zaterdag is.",
      },
      {
        q: "Betaalt mijn verzekering de huur van een bouwdroger?",
        a: "Bij een gedekt schadegeval meestal wel, maar dat hangt van uw polis af. Wat u in elk geval nodig hebt is bewijs: onze technieker meet het vochtgehalte bij de start en bij de oplevering, en die metingen worden vastgelegd. Zeg bij de reservatie dat het om een schadedossier gaat, dan houden we daar rekening mee.",
      },
      {
        q: "Betaalt mijn verzekering de huur van een bouwdroger?",
        a: "Bij een gedekt schadegeval meestal wel, maar dat hangt van uw polis af. Wat u in elk geval nodig hebt is bewijs: onze technieker meet het vochtgehalte bij de start en bij de oplevering, en die metingen worden vastgelegd. Zeg bij de reservatie dat het om een schadedossier gaat, dan houden we daar rekening mee.",
      },
    ],
    realisaties: [],
  },
  {
    slug: "mortsel",
    title: "Bouwdroger huren in Mortsel - binnen 24 uur | Vernast",
    description:
      "Bouwdroger huren in Mortsel: dicht bebouwde rijwoningen uit het interbellum, op een kwartier van ons magazijn. Binnen 24 uur geleverd, geplaatst en ingesteld.",
    h1: "Bouwdroger huren in Mortsel",
    kicker: "Tegen de stad aan · op een kwartier",
    rit: { afstand: "circa 9 km", tijd: "ongeveer een kwartier" },
    intro: [
      "Mortsel ligt tegen Antwerpen aan en is dicht bebouwd: overwegend rijwoningen uit het interbellum en de naoorlogse jaren, op smalle percelen met een kleine tuin. Ons magazijn ligt op een kwartier.",
      "Die dichte bebouwing bepaalt welk toestel hier past. Een smalle gang, een draaitrap, een kelder onder de voorkamer: het moet compact zijn, op één gewoon stopcontact draaien en stil genoeg zijn voor een huis waar mensen wonen terwijl de werken lopen.",
    ],
    bouw: {
      kop: "Rijwoningen op smalle percelen",
      alineas: [
        "Een rijwoning droogt niet als één ruimte. De plattegrond is smal en diep, met gesloten kamers achter elkaar, en droge lucht gaat daar niet vanzelf rond. Zet u één toestel in de voorkamer, dan droogt die voorkamer en blijft de achterbouw nat. Daarom hoort er bij bijna elke Mortselse werf een ventilator: die stuurt de droge lucht van voor naar achter en zorgt dat het hele gelijkvloers tegelijk droogt.",
        "Bij een kelder onder de voorkamer komt er iets bij: die ligt onder het maaiveld, is zelden verwarmd en komt in de winter zelden boven 10 °C. Daar verliest een condensdroger rendement. Een elektrische kachel die de ruimte eerst op temperatuur brengt lost dat op; is de kelder helemaal niet te verwarmen, dan is een adsorptiedroger de betere keuze.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "Het toestel voor een Mortselse rijwoning: compact genoeg voor een smalle gang en een draaitrap, zuinig op één stopcontact." },
      { key: "ttv4500", waarom: "In een smalle, diepe plattegrond met gesloten kamers is dit vaak effectiever dan een tweede droger, en goedkoper." },
      { key: "teddh30", waarom: "Voor de kelder onder de voorkamer, die in de winter zelden boven tien graden komt." },
      { key: "ttk350", waarom: "Voor een volledig gelijkvloers met een nieuwe chape: 70 liter per dag en bereik tot ongeveer 400 m³." },
    ],
    levering: {
      kop: "Leveren in Mortsel: op een kwartier, de volgende werkdag",
      alinea:
        "Een kwartier vanuit Aartselaar. In een dicht bebouwde gemeente kijkt de technieker vooral naar verdeling: zet u één toestel in de voorkamer, dan droogt die voorkamer en blijft de achterbouw nat. Hij plaatst de ventilator zo dat het hele gelijkvloers tegelijk droogt, en dat scheelt dagen huur.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Een kwartier rijden. Voor één toestel een voordelige keuze; houd er rekening mee dat een droger rechtop vervoerd moet worden en 25 tot 40 kg weegt.",
    },
    buren: ["antwerpen-stad", "edegem", "wilrijk"],
    faq: [
      {
        q: "Eén droger voor een heel rijhuis, is dat genoeg?",
        a: "Qua capaciteit vaak wel, qua verdeling meestal niet. In een smalle, diepe woning met gesloten kamers droogt het toestel vooral de ruimte waar het staat. Een ventilator erbij die de droge lucht naar achter stuurt, is doorgaans effectiever dan een tweede droger, en goedkoper. De Calculator houdt daar rekening mee.",
      },
      {
        q: "Is een bouwdroger stil genoeg om in te blijven wonen?",
        a: "Een Small bouwdroger zit rond 48 dB, ongeveer een koelkast in dezelfde kamer. Dat is prima om mee te leven overdag en in de meeste gevallen ook 's nachts. Staat hij boven een slaapkamer, zet hem dan op een tegelvloer en niet op plankenvloer, want die draagt het gebrom door het hele huis.",
      },
      {
        q: "Waar zet ik het toestel het best neer?",
        a: "Midden in de ruimte als het kan, met minstens een halve meter vrij rondom, en niet pal tegen een muur of in een hoek. Het toestel moet lucht kunnen aanzuigen én uitblazen. Niet in een kast of achter een deur. Staat het op een natte chape, zet het dan op een plankje, en richt de ventilator langs de vloer in plaats van er recht op.",
      },
      {
        q: "Is een bouwdroger stil genoeg om in te blijven wonen?",
        a: "Een Small bouwdroger zit rond 48 dB, ongeveer een koelkast in dezelfde kamer. Dat is prima om mee te leven overdag en in de meeste gevallen ook 's nachts. Staat hij boven een slaapkamer, zet hem dan op een tegelvloer en niet op een plankenvloer, want die draagt het gebrom door het hele huis.",
      },
    ],
    realisaties: [],
  },
];

export const GEMEENTE_BY_SLUG: Record<string, Gemeente> = Object.fromEntries(
  G.map((g) => [g.slug, g])
);

/** De routegegevens bij een gemeentetekst. */
export function routeVan(gemeente: Gemeente): GemeenteRoute {
  return GEMEENTE_ROUTES.find((r) => r.slug === gemeente.slug)!;
}

/**
 * De werven in deze gemeente.
 *
 * Komt uit `realisaties.ts` via de `locatie` ("Bouwdroging · Kontich"), niet
 * uit een tweede handgeschreven lijst: twee lijsten lopen uiteen zodra er een
 * realisatie bijkomt. De districten van Antwerpen (Berchem, Merksem, Deurne,
 * Hoboken, Ekeren) tellen mee voor de stadspagina — wie "bouwdroger Berchem"
 * zoekt, is geholpen met de Antwerpse pagina.
 */
const DISTRICTEN = ["Antwerpen", "Berchem", "Merksem", "Deurne", "Hoboken", "Ekeren", "Borgerhout"];

export function plaatsenVoor(gemeente: Gemeente): string[] {
  const route = routeVan(gemeente);
  return route.slug === "antwerpen-stad" ? DISTRICTEN : [route.name];
}

/** Of een realisatie in de provincie van deze gemeente ligt. */
export function inZelfdeRegio(realisatieSlug: string, gemeente: Gemeente): boolean {
  return REALISATIE_REGIO[realisatieSlug] === routeVan(gemeente).regio;
}
