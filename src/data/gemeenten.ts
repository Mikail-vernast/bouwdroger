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
   * toestelkaarten met dezelfde tekst op tweehonderd pagina's zijn kopieerwerk.
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

  /* ------------------------------------------------------------------ */
  {
    slug: "gent",
    title: "Bouwdroger huren in Gent | Vernast",
    description:
      "Bouwdroger huren in Gent: compacte toestellen voor een rijhuis in de negentiende-eeuwse gordel of een appartement aan de Vaartkom. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Gent",
    kicker: "Gent en de Gentse rand · geleverd in de stad",
    rit: { afstand: "circa 60 km", tijd: "ongeveer vijftig minuten" },
    intro: [
      "**In Gent is bouwdroging bijna altijd renovatie, en bijna altijd in een bewoonde straat.** In de negentiende-eeuwse gordel rond de kuip, de Brugse Poort, het Rabot, Sint-Amandsberg, gaat het huis per huis: **vers pleisterwerk** op de eerste verdieping, **een kelder** die na een natte winter vochtig blijkt, **een chape** die moet drogen terwijl de bovenburen thuis zijn.",
      "Dat vraagt andere toestellen dan een open werf. Het moet **via een smalle trap naar boven** kunnen, **op één gewoon stopcontact** draaien en **stil genoeg** zijn voor een gebouw waar mensen wonen. De **Small bouwdroger** staat hier dan ook het vaakst: 50 liter per dag, 0,75 kW en hij past door een deur van tachtig centimeter.",
    ],
    bouw: {
      kop: "Het Gentse rijhuis, de kelder onder de voorkamer en de kuip",
      alineas: [
        "Het Gentse rijhuis is **smal en diep**, soms vijf meter breed en achttien meter diep, met een kleine koer achteraan. Droge lucht gaat daar **niet vanzelf van voor naar achter**: zonder luchtbeweging staat het toestel de voorkamer te drogen terwijl de keuken vochtig blijft. Daarom hoort er in zo'n plattegrond **een ventilator bij de droger**, niet als extra maar als onderdeel van de droogzone.",
        "Veel van die huizen hebben **een kelder die deels onder het maaiveld ligt**, en in de kuip staat het grondwater hoog. Zo'n kelder droogt van nature nooit helemaal: geen doorstroming, muren tegen de grond, en een temperatuur die in de winter zelden boven tien graden komt. **Een condensdroger verliest onder 15 °C rendement**, dus zetten we er dan een kachel naast, of meteen een adsorptiedroger die ook koud werkt.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**Het toestel voor de stad**: compact genoeg voor een Gentse draaitrap en zuinig op één gewoon stopcontact. Voor een kamer, een appartement of een badkamerrenovatie." },
      { key: "ttv4500", waarom: "In een smal en diep rijhuis gaat droge lucht niet van voor naar achter. Deze ventilator doet dat wel, en **halveert vaak de droogtijd** van een gelijkvloers." },
      { key: "revolution", waarom: "**Voor de kelder in de kuip**, die in de winter niet te verwarmen is. De adsorptiedroger blijft ook bij lage temperatuur vocht opnemen, waar een condensdroger stilvalt." },
      { key: "ttk350", waarom: "De Medium voor een volledig rijhuis: 70 liter per dag en bereik tot ongeveer 400 m³, genoeg voor een gelijkvloers met verse chape of nieuw pleisterwerk." },
    ],
    levering: {
      kop: "Leveren in Gent: in het autovrije gebied binnen de venstertijd",
      alinea:
        "**Ligt uw straat in het autovrije gebied of in een zone met venstertijden, zeg dat dan bij de reservatie.** Dan plant de technieker uw levering binnen dat venster, in plaats van ervoor te staan met een bestelwagen die niet binnen mag. Is er een lift of een vaste trap, dan is **elke verdieping inbegrepen**; moet een toestel via een ladder naar boven omdat de trap nog niet ligt, dan staat die toeslag vooraf in uw offerte.",
    },
    afhalen: {
      kop: "Afhalen kan, maar leveren is hier logischer",
      alinea:
        "Ons afhaalpunt staat in Aartselaar, **een rit van ongeveer vijftig minuten**. Voor één los toestel kan dat de moeite zijn, want u krijgt korting op de huurprijs. Voor een volledig droogpakket niet: **de levering zit al in de prijs**, de technieker plaatst alles en meet de vochtigheid, en u hoeft geen toestel van 30 kg door een Gentse trappenhal te sleuren.",
    },
    buren: ["destelbergen", "merelbeke-melle", "lochristi", "evergem"],
    faq: [
      {
        q: "Past een bouwdroger door een Gents trappenhuis?",
        a: "De Small bouwdroger is 40 bij 40 centimeter aan de basis en weegt ongeveer 25 kg. Die gaat door elke gangbare Gentse draaitrap. Voor de Medium rekent u op iets meer breedte. Geef bij de reservatie door dat het om een smalle trap gaat, dan kiest de technieker het toestel daarop.",
      },
      {
        q: "Kunnen jullie leveren in het autovrije gebied?",
        a: "Ja. Geef uw straat door bij de reservatie en vermeld dat ze in het autovrije gebied of in een venstertijdzone ligt. We plannen de levering dan binnen dat venster. De technieker staat kort stil, laadt uit, plaatst het toestel en stelt het in.",
      },
      {
        q: "Mijn kelder blijft vochtig, ook na het drogen. Hoe kan dat?",
        a: "Omdat een droger het vocht uit de lucht haalt, niet uit de grond. In de kuip staat het grondwater hoog, en een kelder zonder buitenwaterdichting zuigt dat op via de muren. Drogen maakt de ruimte bruikbaar zolang het toestel draait, maar de bron blijft. Onze technieker meet bij de levering of het om bouwvocht gaat of om een structureel probleem, en zegt het eerlijk als drogen alleen niet volstaat.",
      },
      {
        q: "Hoort er bij een rijhuis een ventilator?",
        a: "In een smalle, diepe plattegrond wel. De droger maakt droge lucht, de ventilator brengt die tot achteraan en blaast de verzadigde laag langs vloer en muur weg. Zonder dat laatste droogt de voorkamer en blijft de keuken staan. Hij zit standaard in onze droogpakketten voor een rijwoning.",
      },
      {
        q: "Hoe snel staan jullie in Gent?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijftig minuten en we plannen Gent en de Gentse rand in één ronde, dus boekt u voor de middag, dan staat het doorgaans de volgende werkdag.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "destelbergen",
    title: "Bouwdroger huren in Destelbergen | Vernast",
    description:
      "Bouwdroger huren in Destelbergen en Heusden: villa's langs de Scheldemeersen, met kelders onder het grondwaterpeil. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Destelbergen",
    kicker: "Gentse rand · langs de Scheldemeersen",
    rit: { afstand: "circa 57 km", tijd: "ongeveer vijftig minuten" },
    intro: [
      "Destelbergen en Heusden liggen **met hun voeten in de Scheldemeersen**: laaggelegen weiland in de bocht van de rivier, waar het water in de winter hoort te komen. Dat maakt de bodem hier nat en het grondwater ondiep.",
      "De bebouwing is vooral **ruime open bebouwing uit de jaren zestig tot tachtig**, met een kelder onder het hele volume. Precies die combinatie, **een kelder onder het grondwaterpeil**, is waarvoor hier het vaakst gehuurd wordt.",
    ],
    bouw: {
      kop: "Villa's met een volledige kelder, in een natte meersenbodem",
      alineas: [
        "Een kelder die **lager ligt dan het grondwater** staat permanent onder druk. Bij elke natte periode drukt water door de kelderwand of langs de vloerplaat naar binnen, en dat komt terug: **drogen haalt het uit de lucht, maar niet uit de grond**. We zeggen dat liever vooraf dan dat u na drie weken huur hetzelfde probleem hebt.",
        "Is de kelder wél droog en gaat het om **bouwvocht uit een renovatie**, dan verdwijnt dat definitief. Een jarenzestigvilla heeft dan nog wel haar eigen moeilijkheid: **drie bouwlagen met een gesloten trappenhal**. Droge lucht blijft daar hangen waar het toestel staat, dus zetten we per verdieping een droogzone op in plaats van één groot toestel in de hal.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium als standaard: 70 liter per dag, bereik tot ongeveer 400 m³, met pompaansluiting zodat niemand een reservoir moet legen." },
      { key: "revolution", waarom: "**Voor de kelder onder het grondwaterpeil**: koud en vochtig tegelijk. De adsorptiedroger werkt ook onder 15 °C door, waar een condensdroger stilvalt." },
      { key: "ttv4500", waarom: "Water kruipt onder vloeren en achter plinten. Zonder luchtbeweging droogt dat niet, met deze ventilator wel." },
      { key: "ttk650", waarom: "Voor een groot gelijkvloers of een ondergelopen kelderverdieping: 110 liter per dag, bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Destelbergen: binnen 24 uur, in de Gentse ronde",
      alinea:
        "Een vijftigtal minuten rijden. U krijgt een tijdslot en een sms een halfuur vooraf. Gaat het om een kelder, dan **meet de technieker eerst** of het om bouwvocht of om grondwater gaat, want dat bepaalt of drogen hier zinvol is.",
    },
    afhalen: {
      kop: "Afhalen kan, maar leveren is hier logischer",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijftig minuten**. Voor één los toestel kan dat lonen, voor een pakket niet: de levering zit al in de prijs en de technieker plaatst en meet alles ter plaatse.",
    },
    buren: ["gent", "lochristi", "laarne", "merelbeke-melle"],
    faq: [
      {
        q: "Mijn kelder staat elke winter onder water. Helpt een bouwdroger?",
        a: "Zolang hij draait, ja: de ruimte wordt bruikbaar en de schade blijft beperkt. Maar hij haalt het water niet uit de grond. In de meersen ligt het grondwater ondiep, en komt het door de kelderwand, dan is drogen een pleister. Onze technieker meet dat bij de levering en zegt het eerlijk.",
      },
      {
        q: "Hoeveel toestellen voor een villa met drie bouwlagen?",
        a: "Doorgaans een droogzone per verdieping, dus twee tot drie drogers met een ventilator per zone. Eén groot toestel in de trappenhal lijkt goedkoper maar droogt vooral de hal. De Calculator rekent op volume in kubieke meter, niet op oppervlakte.",
      },
      {
        q: "Wat is het verschil tussen een condensdroger en een adsorptiedroger?",
        a: "Een condensdroger koelt lucht af en vangt het water op. Dat werkt uitstekend boven 15 °C en is zuiniger. Een adsorptiedroger bindt het vocht aan een droogwiel en blijft ook bij vijf graden doorwerken. Voor een onverwarmde kelder in de winter is dat het verschil tussen drogen en wachten.",
      },
      {
        q: "Moet ik het reservoir legen?",
        a: "Nee. Onze toestellen zijn pompklaar: de technieker legt de afvoerslang naar een putje of een gootsteen. Een reservoir dat volloopt zet het toestel stil, en dan verliest u een nacht droogtijd.",
      },
      {
        q: "Hoe snel staan jullie in Destelbergen?",
        a: "Binnen 24 uur na uw boeking. We plannen Gent en de Gentse rand in één ronde, dus boekt u voor de middag, dan staat het doorgaans de volgende werkdag.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "lochristi",
    title: "Bouwdroger huren in Lochristi | Vernast",
    description:
      "Bouwdroger huren in Lochristi: nieuwbouw in verkavelingen op zandgrond, en serres en loodsen van de sierteelt. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Lochristi",
    kicker: "Gentse rand · sierteelt en nieuwbouw",
    rit: { afstand: "circa 50 km", tijd: "ongeveer vijfenveertig minuten" },
    intro: [
      "Lochristi is **het dorp van de begonia en de azalea**, en dat is aan de bebouwing te zien: tussen de woonkernen van Zaffelare, Beervelde en Zeveneken staan **serres, loodsen en bedrijfsgebouwen** van de sierteelt.",
      "De bodem is **zand**, en dat scheelt: zand draineert goed, dus kelders zijn hier minder vaak het probleem. Wat blijft is **nieuwbouw in verkavelingen**, en daar gaat het om chape van een volledig gelijkvloers.",
    ],
    bouw: {
      kop: "Verkavelingen op zand, en bedrijfsgebouwen van de sierteelt",
      alineas: [
        "Een verse chape geeft **vijf tot tien liter water per dag per honderd vierkante meter** af, en dat moet ergens heen. Zonder droger belandt het in de muren en in het pleisterwerk dat erna komt. Met droger en ventilator samen is **een gelijkvloers in een tiental dagen beloopbaar en in twee à drie weken klaar voor de vloerder**.",
        "Een loods of een serre is **een ander verhaal dan een woning**: groot volume, hoge luchtdoorlaat en zelden verwarmd. Een droger tegen een open poort werkt tegen de buitenlucht in, dus vragen we vooraf het volume en of de ruimte **dicht te krijgen** is. Lukt dat niet, dan heeft drogen daar geen zin en zeggen we dat.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De standaard voor een nieuwbouwwoning: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "Bij een chape verdubbelt luchtbeweging vaak de snelheid: hij blaast de verzadigde laag vlak boven de vloer weg." },
      { key: "ttk650", waarom: "Voor een loods of een groot open gelijkvloers: 110 liter per dag en een bereik tot ongeveer 600 m³." },
      { key: "teddh30", waarom: "Voor de onverwarmde ruwbouw in de winter: onder 15 °C zakt het rendement van elke condensdroger. Vraagt 400 V krachtstroom." },
    ],
    levering: {
      kop: "Leveren in Lochristi: binnen 24 uur, in de Gentse ronde",
      alinea:
        "Een vijfenveertigtal minuten rijden. U krijgt een tijdslot en een sms een halfuur vooraf. Bij een loods of een serre vragen we **vooraf het volume** en of de ruimte dicht te krijgen is, zodat de technieker met het juiste toestel vertrekt.",
    },
    afhalen: {
      kop: "Afhalen kan, maar leveren is hier logischer",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfenveertig minuten**. Voor één los toestel kan dat lonen. Voor een pakket op een nieuwbouwwerf niet: de levering zit al in de prijs, en de technieker zet de droogzones meteen goed op.",
    },
    buren: ["gent", "destelbergen", "lokeren", "evergem"],
    faq: [
      {
        q: "Hoe lang moet een chape drogen met een droger?",
        a: "Reken op een week per centimeter dikte zonder hulp, en met droger en ventilator ongeveer de helft. Een chape van vijf centimeter is dan in twee à drie weken klaar voor de vloerder in plaats van in vijf à zeven weken. De technieker meet bij de ophaling of de restvochtigheid laag genoeg is.",
      },
      {
        q: "Kunnen jullie een serre of een loods drogen?",
        a: "Dat hangt af van of ze dicht te krijgen is. Een droger tegen een open poort werkt tegen de buitenlucht in en haalt niets uit. Geef vooraf het volume in kubieke meter door en of poorten en verluchting kunnen sluiten, dan rekenen we uit of het zin heeft.",
      },
      {
        q: "Hoeveel toestellen voor een gelijkvloers van 140 m²?",
        a: "Doorgaans twee drogers met een ventilator per droogzone, en een derde als de verdieping meteen mee moet. De Calculator rekent op volume in kubieke meter, want een open leefruimte met een hoog plafond telt zwaarder dan extra vierkante meters onder een gewoon plafond.",
      },
      {
        q: "Wat als het vriest tijdens de droging?",
        a: "Dan verwarmen we mee. Onder 15 °C verliest een condensdroger het grootste deel van zijn rendement, dus in een onverwarmde ruwbouw zetten we er een elektrische kachel bij. Die vraagt 400 V; de technieker controleert de werfkast bij de levering.",
      },
      {
        q: "Hoe snel staan jullie in Lochristi?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfenveertig minuten en we plannen de Gentse rand in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "merelbeke-melle",
    title: "Bouwdroger huren in Merelbeke-Melle | Vernast",
    description:
      "Bouwdroger huren in Merelbeke-Melle: Scheldeoever, oude herenhuizen en studentenkamers tegen Gent. Geleverd, geplaatst en opgehaald.",
    h1: "Bouwdroger huren in Merelbeke-Melle",
    kicker: "Gentse rand · aan de Schelde",
    rit: { afstand: "circa 62 km", tijd: "ongeveer vijfenvijftig minuten" },
    intro: [
      "Merelbeke en Melle vormen **sinds 1 januari 2025 één gemeente**, en samen vormen ze de zuidelijke rand van Gent: **de Schelde aan de ene kant, de campus en het onderzoeksgebied aan de andere**.",
      "Dat levert twee soorten werven op. **Langs de Scheldeoever** staan oudere herenhuizen en villa's met een kelder, en **tegen de Gentse grens** worden woningen per kamer verbouwd voor studentenverhuur. Twee verschillende problemen, twee verschillende pakketten.",
    ],
    bouw: {
      kop: "Scheldeoever, en verbouwing per kamer tegen de stadsgrens",
      alineas: [
        "Aan de Schelde ligt het **grondwater ondiep** en komt het bij hoogwater nog ondieper. Een kelder in de oever blijft daarom zelden helemaal droog, en dat is geen bouwvocht: **drogen haalt het uit de ruimte, de bron blijft**. Gaat het wél om een renovatie, dan verdwijnt het vocht definitief en hoort er bij dikke massieve muren een ventilator bij, want die muren geven hun vocht traag af.",
        "Bij een **verbouwing per kamer** draait het om iets anders: de werf is bewoond. Het toestel moet **stil genoeg** zijn, **op één stopcontact** draaien en **via de bestaande trap** naar boven kunnen. Daarvoor is de Small bouwdroger gemaakt: 50 liter per dag, 0,75 kW, 25 kg.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**Voor de verbouwing per kamer**: compact, stil en zuinig op één gewoon stopcontact. Voor één kamer, een badkamer of een traphal." },
      { key: "ttk350", waarom: "De Medium voor een volledig gelijkvloers: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "Dikke massieve muren geven hun vocht traag af. Deze ventilator blaast de verzadigde luchtlaag langs het muuroppervlak weg." },
      { key: "revolution", waarom: "**Voor de kelder aan de oever**, die niet te verwarmen is. De adsorptiedroger blijft ook bij lage temperatuur vocht opnemen." },
    ],
    levering: {
      kop: "Leveren in Merelbeke-Melle: binnen 24 uur, geplaatst en ingesteld",
      alinea:
        "Een vijfenvijftigtal minuten rijden. U krijgt een tijdslot en een sms een halfuur vooraf. In een bewoonde verbouwing kiest de technieker **het stilste toestel dat het volume haalt**, en legt hij de afvoer naar een putje zodat niemand een reservoir moet legen.",
    },
    afhalen: {
      kop: "Afhalen kan, maar leveren is hier logischer",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfenvijftig minuten**. Voor één los toestel kan dat lonen. Voor een pakket is leveren beter: de rit zit al in de prijs en de technieker plaatst en meet alles.",
    },
    buren: ["gent", "oosterzele", "gavere", "destelbergen"],
    faq: [
      {
        q: "Mag een bouwdroger draaien in een bewoonde woning?",
        a: "Ja, en dat is precies waarvoor de Small bouwdroger bedoeld is. Hij verbruikt 0,75 kW, dus hij mag op een gewoon stopcontact, en hij is stil genoeg om in een kamer ernaast te slapen. Houd de deur van de droogzone wel dicht: droge lucht die door het hele huis trekt, droogt niets snel.",
      },
      {
        q: "Hoeveel kost een bouwdroger per dag aan stroom?",
        a: "Reken voor de Small ongeveer 0,75 kW per uur. Bij een gemiddeld dagtarief komt dat op een paar euro per etmaal. De Medium zit rond 1,2 kW. Dat verbruik staat op elke toestelpagina, zodat u het zelf kunt narekenen.",
      },
      {
        q: "Is dit bouwvocht of komt het van de Schelde?",
        a: "Bouwvocht zit gelijkmatig in de ruimte en verdwijnt naarmate het droogt. Grondwater geeft een vochtband onderaan de muur, vaak met een witte zoutrand en afbladderende verf. Onze technieker meet dat bij de levering.",
      },
      {
        q: "Hoe lang blijft een pakket staan?",
        a: "Standaard rekenen we op twee weken voor een chape en één tot twee weken voor pleisterwerk, maar we meten bij de ophaling. Is het nog niet droog, dan verlengt u per week bij; is het eerder droog, dan halen we eerder op.",
      },
      {
        q: "Hoe snel staan jullie in Merelbeke-Melle?",
        a: "Binnen 24 uur na uw boeking. We plannen Gent en de Gentse rand in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "oosterzele",
    title: "Bouwdroger huren in Oosterzele | Vernast",
    description:
      "Bouwdroger huren in Oosterzele, Balegem en Scheldewindeke: hoeves en dorpswoningen op zandleem. Geleverd, geplaatst en opgehaald.",
    h1: "Bouwdroger huren in Oosterzele",
    kicker: "Gentse rand · landelijk, op zandleem",
    rit: { afstand: "circa 66 km", tijd: "ongeveer vijfenvijftig minuten" },
    intro: [
      "Oosterzele is landelijk gebleven, met **Balegem, Scheldewindeke, Gijzenzele en Moortsele** errond. Het is hier **zandleem**, de overgang naar de Vlaamse Ardennen, en dat is een bodem die water langer vasthoudt dan zand.",
      "Wat we hier drogen is vooral **renovatie van hoeves en dorpswoningen**: dikke massieve muren, een vloer die opengebroken is, en soms een gewelfde kelder onder de woonkamer.",
    ],
    bouw: {
      kop: "Hoeves en dorpswoningen met massieve muren",
      alineas: [
        "Een massieve muur van veertig centimeter **geeft zijn vocht traag af**, en vlak tegen het oppervlak vormt zich een verzadigd luchtlaagje dat als een deken werkt. Zolang dat blijft staan, droogt de muur niet verder, hoe hard de droger ook werkt. **Een ventilator haalt dat laagje weg**, en daarom staat er hier bijna altijd een bij.",
        "Op zandleem **blijft water langer in de ondergrond** dan op zand. Een hoeve zonder waterkering in de muurvoet zuigt dat op via de baksteen, en binnen komt het terug als een vochtband onderaan de muur. Dat is geen bouwvocht en verdwijnt niet door te drogen; de technieker **meet het verschil** bij de levering en zegt het eerlijk.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium als standaard bij renovatie: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "**Onmisbaar bij massieve muren**: hij blaast de verzadigde luchtlaag tegen het muuroppervlak weg, en pas dan droogt de muur verder." },
      { key: "ttk650", waarom: "Voor een hoeve met grote, hoge volumes: 110 liter per dag en bereik tot ongeveer 600 m³." },
      { key: "teddh30", waarom: "Voor een onverwarmd bijgebouw of een winterwerf: onder 15 °C verliest een condensdroger het grootste deel van zijn rendement. Vraagt 400 V." },
    ],
    levering: {
      kop: "Leveren in Oosterzele: binnen 24 uur, in een ronde",
      alinea:
        "Een vijfenvijftigtal minuten rijden. U krijgt een tijdslot en een sms een halfuur vooraf. Bij een hoeve vragen we **vooraf het volume in kubieke meter** en of de ruimte dicht te krijgen is, want een droger tegen een open poort werkt tegen de buitenlucht in.",
    },
    afhalen: {
      kop: "Afhalen kan, maar leveren is hier logischer",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfenvijftig minuten**. Voor een volledig pakket is leveren bijna altijd de betere keuze: de rit zit al in de prijs, en bij een hoeve hangt het resultaat af van waar de toestellen staan.",
    },
    buren: ["merelbeke-melle", "zottegem", "sint-lievens-houtem", "gavere"],
    faq: [
      {
        q: "Waarom droogt een oude muur zo veel trager?",
        a: "Omdat het vocht uit de kern naar buiten moet, en dat gaat door veertig centimeter baksteen. Daarbij vormt zich een verzadigd luchtlaagje tegen het oppervlak dat verdere droging afremt. Een ventilator haalt dat weg. Reken bij massieve muren op anderhalf tot twee keer de droogtijd van een moderne wand.",
      },
      {
        q: "Mijn muren zijn onderaan vochtig met een witte rand. Is dat bouwvocht?",
        a: "Dat is bijna altijd opstijgend vocht: een band tot ongeveer een halve meter hoog, een witte zoutrand en afbladderende verf. Bouwvocht zit gelijkmatig in de ruimte. Onze technieker meet het bij de levering, want drogen lost het eerste niet op.",
      },
      {
        q: "Kunnen jullie een schuur of een stal drogen?",
        a: "Ja, als ze dicht te krijgen is. Geef vooraf het volume door, de vloeropbouw en of poorten kunnen sluiten. Is de ruimte niet te verwarmen, dan zetten we een adsorptiedroger in die ook bij lage temperatuur doorwerkt.",
      },
      {
        q: "Betaal ik een kilometerkost voor Oosterzele?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket. De rit telt mee in onze planning, niet in uw factuur.",
      },
      {
        q: "Hoe snel staan jullie hier?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfenvijftig minuten en we plannen de regio in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "sint-martens-latem",
    title: "Bouwdroger huren in Sint-Martens-Latem | Vernast",
    description:
      "Bouwdroger huren in Sint-Martens-Latem en Deurle: villa's aan de Leie met kelderverdieping en hoogwaardige afwerking. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Sint-Martens-Latem",
    kicker: "Leiestreek · villa's op grote percelen",
    rit: { afstand: "circa 70 km", tijd: "ongeveer een uur" },
    intro: [
      "Sint-Martens-Latem en Deurle liggen **in de bocht van de Leie**, met grote percelen en veel bomen. De bebouwing is bijna volledig **vrijstaand**, vaak met een **volwaardige kelderverdieping** en een uitbouw erbij.",
      "Wat deze werven apart maakt is **de afwerking**: massief parket, natuursteen, maatwerk in hout. Die materialen vergeven geen te hoge restvochtigheid, en daarom gaat het hier niet alleen om snel drogen maar om **drogen tot een gemeten waarde**.",
    ],
    bouw: {
      kop: "Grote volumes, en een afwerking die geen restvocht verdraagt",
      alineas: [
        "Massief parket of een houten vloer op een chape die **nog niet droog genoeg** is, gaat achteraf werken: naden die opengaan, planken die opbollen. De vloerder vraagt daarom een gemeten restvochtigheid, en daar stopt het drogen, niet bij een vermoeden. **Onze technieker meet bij de ophaling**, en is het nog niet droog, dan blijft het pakket staan.",
        "Een vrijstaande woning met kelderverdieping heeft **meer capaciteit nodig dan haar vierkante meters suggereren**, want het gaat om volume. Een open leefruimte met een plafond van drie meter vijftig telt zwaarder dan dezelfde oppervlakte onder een gewoon plafond. Wij rekenen in kubieke meter, en zetten per verdieping een eigen droogzone op.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Voor de grote open leefruimte**: 110 liter per dag en een bereik tot ongeveer 600 m³, één toestel per groot gelijkvloers." },
      { key: "ttk350", waarom: "De Medium per verdieping of per vleugel: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "Bij een chape onder parket verdubbelt luchtbeweging vaak de snelheid, en hij voorkomt dat één hoek achterblijft." },
      { key: "revolution", waarom: "**Voor de kelderverdieping** die niet verwarmd wordt: de adsorptiedroger blijft ook bij lage temperatuur vocht opnemen." },
    ],
    levering: {
      kop: "Leveren in Sint-Martens-Latem: geplaatst, ingesteld en gemeten",
      alinea:
        "Ongeveer een uur rijden. De technieker **plaatst de toestellen per droogzone**, legt de afvoer naar een putje en stelt de hygrostaat in. Bij de ophaling meet hij de restvochtigheid; is die nog te hoog voor uw vloerder, dan blijft het pakket staan en verlengt u per week bij.",
    },
    afhalen: {
      kop: "Afhalen kan, maar leveren is hier logischer",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer een uur**. Voor een pakket op een werf waar de vloerder op een gemeten waarde wacht, is leveren bijna altijd de betere keuze: de meting hoort erbij en de rit zit al in de prijs.",
    },
    buren: ["deinze", "nazareth-de-pinte", "gent", "zulte"],
    faq: [
      {
        q: "Hoe droog moet een chape zijn voor massief parket?",
        a: "Uw vloerder bepaalt de grens, en die is voor parket strenger dan voor tegels. Wij drogen tot een gemeten waarde in plaats van tot een datum: de technieker meet bij de ophaling, en is het nog niet droog, dan blijft het pakket staan. Een parketvloer op een te natte chape gaat achteraf werken, en dat kost een veelvoud van een week extra huur.",
      },
      {
        q: "Hoeveel toestellen voor een villa van 300 m²?",
        a: "Reken op een droogzone per verdieping en per gesloten vleugel, dus drie tot vijf toestellen met een ventilator per zone. De Calculator rekent op volume in kubieke meter, en een hoog plafond telt daarin zwaarder dan extra oppervlakte.",
      },
      {
        q: "Kan een bouwdroger schade geven aan mijn afwerking?",
        a: "Te snel drogen kan: krimpscheuren in verse chape of pleisterwerk als de luchtvochtigheid in één keer onderuit gaat. Daarom stelt de technieker de hygrostaat in in plaats van het toestel vol open te zetten. Dat is ook de reden dat de instelling bij de levering hoort en niet achteraf.",
      },
      {
        q: "Is er een waarborg nodig?",
        a: "Nee. Er komt geen waarborg bij, en levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket.",
      },
      {
        q: "Hoe snel staan jullie in Latem?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer een uur en we plannen de Leiestreek in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "nazareth-de-pinte",
    title: "Bouwdroger huren in Nazareth-De Pinte | Vernast",
    description:
      "Bouwdroger huren in Nazareth-De Pinte: nieuwbouw langs de E17 en bedrijfsruimtes op de zone. Geleverd, geplaatst en opgehaald.",
    h1: "Bouwdroger huren in Nazareth-De Pinte",
    kicker: "Gentse rand · langs de E17",
    rit: { afstand: "circa 70 km", tijd: "ongeveer een uur" },
    intro: [
      "Nazareth en De Pinte zijn **sinds 1 januari 2025 één gemeente**, en ze liggen **op de as van de E17**: woonkernen aan de ene kant, bedrijvenzones aan de andere.",
      "Dat verdeelt onze werven hier netjes in twee. **In de kernen** gaat het om nieuwbouw en renovatie van woningen, **op de zone** om bedrijfsruimtes, kantoren en hallen waar een chape of een gietvloer moet drogen voor de inrichting komt.",
    ],
    bouw: {
      kop: "Nieuwbouwwoningen, en bedrijfsruimtes op de zone",
      alineas: [
        "Een verse chape in een woning geeft **vijf tot tien liter water per dag per honderd vierkante meter** af. Met droger en ventilator samen is een gelijkvloers **in een tiental dagen beloopbaar en in twee à drie weken klaar voor de vloerder**, in plaats van vijf à zeven weken zonder hulp.",
        "Op een bedrijfsruimte hangt er **een datum aan**: de inrichter staat gepland, en een gietvloer op een te natte chape gaat loskomen. Daar drogen we tot **een gemeten waarde** en niet tot een vermoeden, en zetten we meerdere toestellen in zodat het volume in één keer mee gaat in plaats van per zone na elkaar.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De standaard voor een nieuwbouwwoning: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttk650", waarom: "**Voor de bedrijfsruimte of de hal**: 110 liter per dag en een bereik tot ongeveer 600 m³." },
      { key: "ttv4500", waarom: "Bij een chape verdubbelt luchtbeweging vaak de snelheid, en op een grote vloer voorkomt hij dat één hoek achterblijft." },
      { key: "teddh30", waarom: "Voor een onverwarmde hal in de winter: onder 15 °C zakt het rendement van elke condensdroger. Vraagt 400 V krachtstroom." },
    ],
    levering: {
      kop: "Leveren in Nazareth-De Pinte: binnen 24 uur, in een ronde",
      alinea:
        "Ongeveer een uur rijden. U krijgt een tijdslot en een sms een halfuur vooraf. Op een bedrijfsruimte vragen we **vooraf het volume en de beschikbare stroom**: een kachel vraagt 400 V, en dat moet de werfkast of de meterkast kunnen leveren.",
    },
    afhalen: {
      kop: "Afhalen kan, maar leveren is hier logischer",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer een uur**. Voor één los toestel kan dat lonen, voor een pakket niet: de levering zit al in de prijs en de technieker zet de droogzones meteen goed op.",
    },
    buren: ["deinze", "sint-martens-latem", "gavere", "gent"],
    faq: [
      {
        q: "Hoe snel kan een bedrijfsvloer droog zijn?",
        a: "Dat hangt af van de dikte en van hoeveel capaciteit er staat. Een chape van vijf centimeter doet zonder hulp vijf à zeven weken; met voldoende drogers en luchtbeweging halen we dat naar twee à drie weken. Geef ons de datum van uw inrichter, dan rekenen we terug hoeveel toestellen daarvoor nodig zijn.",
      },
      {
        q: "Hebben jullie 400 V nodig?",
        a: "Alleen voor de elektrische kachel, die we in de winter bij een onverwarmde ruimte inzetten. De drogers en de ventilatoren draaien op 230 V. De technieker controleert de werfkast bij de levering.",
      },
      {
        q: "Kunnen jullie meerdere toestellen tegelijk leveren?",
        a: "Ja, dat is op een bedrijfsruimte eerder regel dan uitzondering. Hoe meer capaciteit er in één keer staat, hoe korter de totale huurperiode, en dat is vaak goedkoper dan drie weken met één toestel.",
      },
      {
        q: "Wat gebeurt er bij de ophaling?",
        a: "De technieker meet de restvochtigheid, neemt de toestellen mee en u krijgt die meting op papier. Is het nog niet droog, dan blijft het pakket staan en verlengt u per week bij.",
      },
      {
        q: "Hoe snel staan jullie in Nazareth-De Pinte?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer een uur en we plannen de regio in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "gavere",
    title: "Bouwdroger huren in Gavere | Vernast",
    description:
      "Bouwdroger huren in Gavere, Asper en Vurste: Scheldevallei met winterbed, kelders en hoeves. Geleverd, geplaatst en opgehaald.",
    h1: "Bouwdroger huren in Gavere",
    kicker: "Scheldevallei · overstromingsgebied",
    rit: { afstand: "circa 75 km", tijd: "ongeveer een uur" },
    intro: [
      "Gavere ligt **in de vallei van de Schelde**, met Asper, Vurste, Semmerzake en Baaigem errond. De meersen langs de rivier zijn **winterbed**: ze horen onder water te komen als het water hoog staat, en dat doen ze ook.",
      "Daarom gaat een deel van onze werven hier over **water dat er niet hoort te zijn**: een ondergelopen kelder, een gelijkvloers na hoogwater, een berging die bij elke natte periode terugkomt.",
    ],
    bouw: {
      kop: "Kelders in het winterbed, en hoeves op de hoger gelegen rug",
      alineas: [
        "Na hoogwater is **snelheid alles**. Hoe langer water in een vloeropbouw en achter een plint staat, hoe groter de kans op schimmel en op isolatie die haar waarde verliest. We zetten dan **meer capaciteit in dan strikt nodig** en altijd luchtbeweging erbij, want water kruipt onder vloeren en achter plinten waar een droger alleen niet aan komt.",
        "Op de hoger gelegen rug richting Baaigem gaat het om iets anders: **renovatie van hoeves en dorpswoningen** met dikke massieve muren. Die geven hun vocht traag af, en vlak tegen het oppervlak vormt zich een verzadigd luchtlaagje dat verdere droging afremt. Een ventilator haalt dat weg.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Bij waterschade**: 110 liter per dag, bereik tot ongeveer 600 m³. Hoe sneller het water eruit is, hoe minder er stuk gaat." },
      { key: "ttv4500", waarom: "Water kruipt onder vloeren en achter plinten. Zonder luchtbeweging droogt dat niet, met deze ventilator wel." },
      { key: "ttk350", waarom: "De Medium bij renovatie en bij een chape: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "revolution", waarom: "**Voor de kelder die niet te verwarmen is**: de adsorptiedroger blijft ook bij lage temperatuur vocht opnemen, waar een condensdroger stilvalt." },
    ],
    levering: {
      kop: "Leveren in Gavere: bij waterschade zo snel als het kan",
      alinea:
        "Ongeveer een uur rijden. **Bij waterschade bellen we u terug in plaats van u een formulier te laten afwachten**, want een dag vroeger drogen is hier het verschil. De technieker meet ter plaatse hoeveel capaciteit er nodig is en zet de droogzones op.",
    },
    afhalen: {
      kop: "Afhalen kan, maar leveren is hier logischer",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer een uur**. Bij waterschade is dat precies het uur dat u niet hebt: dan leveren wij, en de rit zit al in de prijs van het pakket.",
    },
    buren: ["merelbeke-melle", "oosterzele", "nazareth-de-pinte", "kruisem"],
    faq: [
      {
        q: "Mijn kelder is ondergelopen. Wat doe ik eerst?",
        a: "Eerst het staande water weg met een dompelpomp, dan zo snel mogelijk drogen. Haal wat nat is uit de ruimte, zet plinten los zodat de holle ruimte erachter kan drogen, en bel ons. Hoe langer water in de vloeropbouw staat, hoe groter de kans op schimmel en op isolatie die haar waarde kwijt is.",
      },
      {
        q: "Hoe lang duurt het drogen na hoogwater?",
        a: "Voor een kelder of een gelijkvloers reken op twee tot vier weken, afhankelijk van hoe lang het water er stond en van de vloeropbouw. Een zwevende vloer op isolatie doet er langer over dan een volle plaat, want het water zit onder de afwerking.",
      },
      {
        q: "Dekt mijn verzekering de huur van een bouwdroger?",
        a: "Bij waterschade meestal wel, als onderdeel van de schadebeperking. Wij geven u een factuur met de vochtmetingen erbij, en dat is precies wat een expert vraagt. Vraag het na bij uw verzekeraar voor u boekt.",
      },
      {
        q: "Kunnen jullie dezelfde dag komen?",
        a: "Bij waterschade proberen we dat, en bellen we u terug om te plannen in plaats van u te laten afwachten. De rit naar Gavere duurt ongeveer een uur, dus dezelfde dag lukt als u ons in de voormiddag bereikt.",
      },
      {
        q: "Betaal ik een kilometerkost?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "deinze",
    title: "Bouwdroger huren in Deinze | Vernast",
    description:
      "Bouwdroger huren in Deinze, Nevele en Landegem: nieuwbouwprojecten aan de Leie en renovatie in de dorpskernen. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Deinze",
    kicker: "Leiestreek · nieuwbouw aan het water",
    rit: { afstand: "circa 77 km", tijd: "ongeveer een uur" },
    intro: [
      "Deinze is **na de fusie met Nevele een van de uitgestrektste gemeenten van Oost-Vlaanderen**: de stad aan de Leie, en daarrond Nevele, Landegem, Vosselare, Zeveren en Grammene.",
      "Twee soorten werven. **Aan de Leie** staan nieuwbouwprojecten, appartementen en woningen op percelen die vroeger weiland waren. **In de dorpskernen** gaat het om renovatie: oude woningen met massieve muren en een kelder.",
    ],
    bouw: {
      kop: "Nieuwbouw aan het water, renovatie in de kernen",
      alineas: [
        "Bouwen **naast een rivier** betekent bouwen op een natte ondergrond, en dat is in de ruwbouwfase te merken: een kelderbak die van buiten vochtig blijft, een gelijkvloersplaat die langzamer droogt dan verwacht. Daarbij komt het bouwvocht zelf, en dat is veel: **een nieuwbouwwoning bevat na de ruwbouw duizenden liters water**, in chape, in pleisterwerk en in de muren.",
        "In de dorpskernen gaat het om **massieve muren die hun vocht traag afgeven**. Tegen het oppervlak vormt zich een verzadigd luchtlaagje dat als een deken werkt: zolang dat blijft staan, droogt de muur niet verder. Een ventilator haalt het weg, en daarom hoort die hier standaard bij het pakket.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De standaard voor een nieuwbouwwoning: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttk650", waarom: "Voor een groot gelijkvloers of een appartementsblok in afwerking: 110 liter per dag, bereik tot ongeveer 600 m³." },
      { key: "ttv4500", waarom: "Bij een chape verdubbelt luchtbeweging vaak de snelheid, en bij massieve muren is hij geen extra maar een voorwaarde." },
      { key: "teddh30", waarom: "Voor de onverwarmde ruwbouw in de winter: onder 15 °C verliest een condensdroger het grootste deel van zijn rendement. Vraagt 400 V." },
    ],
    levering: {
      kop: "Leveren in Deinze: binnen 24 uur, in de Leieronde",
      alinea:
        "Ongeveer een uur rijden. U krijgt een tijdslot en een sms een halfuur vooraf. Op een appartementsproject vragen we **vooraf hoeveel eenheden tegelijk moeten drogen**, want dan leveren we in één rit in plaats van in drie.",
    },
    afhalen: {
      kop: "Afhalen kan, maar leveren is hier logischer",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer een uur**. Voor één los toestel kan dat lonen. Voor een pakket is leveren beter: de rit zit al in de prijs en de technieker zet de droogzones meteen goed op.",
    },
    buren: ["zulte", "sint-martens-latem", "nazareth-de-pinte", "aalter"],
    faq: [
      {
        q: "Hoeveel water zit er in een nieuwbouwwoning?",
        a: "In een gemiddelde woning enkele duizenden liters: de chape alleen al geeft vijf tot tien liter per dag per honderd vierkante meter af in de eerste weken. Dat moet eruit voor het pleisterwerk en de vloer komen, anders belandt het in de afwerking.",
      },
      {
        q: "Wanneer start ik met drogen na het chaperen?",
        a: "Niet meteen. Een chape moet eerst uitharden, dus reken op 48 tot 72 uur voor u begint te drogen, en start dan voorzichtig. Te snel drogen geeft krimpscheuren. De technieker stelt de hygrostaat daarom in plaats van het toestel vol open te zetten.",
      },
      {
        q: "Kunnen jullie meerdere appartementen tegelijk doen?",
        a: "Ja. Geef bij de reservatie door hoeveel eenheden er tegelijk moeten drogen, dan leveren we in één rit en zetten we per eenheid een droogzone op. Dat is goedkoper dan drie keer dezelfde rit.",
      },
      {
        q: "Betaal ik een kilometerkost voor Deinze?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket. De rit telt mee in onze planning, niet in uw factuur.",
      },
      {
        q: "Hoe snel staan jullie in Deinze?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer een uur en we plannen de Leiestreek in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "zulte",
    title: "Bouwdroger huren in Zulte | Vernast",
    description:
      "Bouwdroger huren in Zulte, Olsene en Machelen: woningen aan de Leie en bedrijfshallen van de streek. Geleverd, geplaatst en opgehaald.",
    h1: "Bouwdroger huren in Zulte",
    kicker: "Leiestreek · woningen en bedrijfshallen",
    rit: { afstand: "circa 80 km", tijd: "ongeveer een uur" },
    intro: [
      "Zulte ligt **op de grens met West-Vlaanderen**, met Olsene en Machelen-aan-de-Leie erbij. Het is **de verste gemeente van onze Leieronde**, en dat zeggen we liever vooraf: boekt u voor de middag, dan staat het doorgaans de volgende werkdag.",
      "De bebouwing is gemengd: **lintbebouwing langs de steenweg**, woonkernen aan de Leie, en de **bedrijfshallen** die deze streek van haar textielverleden heeft overgehouden.",
    ],
    bouw: {
      kop: "Lintbebouwing, en hallen met een grote vloer",
      alineas: [
        "Een woning in lintbebouwing is doorgaans **halfopen en diep**, met een aanbouw achteraan uit een latere fase. Die aanbouw is vaak **het natte punt**: een platte dak, een vloer op volle grond, en een verbinding met het oude volume waar de isolatie ophoudt. Daar zetten we een eigen droogzone op in plaats van het mee te nemen in het geheel.",
        "In een hal gaat het om **oppervlakte in plaats van om kamers**. Eén droger in een hoek droogt die hoek; op een vloer van duizend vierkante meter hoort **luchtbeweging over de volle lengte** bij en meerdere toestellen verdeeld over de ruimte. We vragen vooraf het volume en of de poorten kunnen sluiten, want een droger tegen een open poort werkt tegen de buitenlucht in.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Voor de hal**: 110 liter per dag en een bereik tot ongeveer 600 m³. Op een grote vloer zetten we er meerdere verdeeld." },
      { key: "ttv4500", waarom: "Op een grote vloer is luchtbeweging over de volle lengte geen extra maar de voorwaarde om overal even droog te krijgen." },
      { key: "ttk350", waarom: "De Medium voor een woning of een aanbouw: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "teddh30", waarom: "Voor een onverwarmde hal in de winter: onder 15 °C zakt het rendement van elke condensdroger. Vraagt 400 V krachtstroom." },
    ],
    levering: {
      kop: "Leveren in Zulte: de verste halte van de Leieronde",
      alinea:
        "Ongeveer een uur rijden, en dat is de verste halte van onze Leieronde. **Boekt u voor de middag, dan staat het doorgaans de volgende werkdag.** U krijgt een tijdslot en een sms een halfuur vooraf. Bij een hal vragen we vooraf het volume en de beschikbare stroom.",
    },
    afhalen: {
      kop: "Afhalen loont hier niet",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer een uur, dus twee uur heen en terug**. Dat weegt niet op tegen de korting op één toestel, en bij een pakket zit de levering al in de prijs. **Vanuit Zulte raden we afhalen af en leveren we gewoon.**",
    },
    buren: ["deinze", "sint-martens-latem", "kruisem", "wortegem-petegem"],
    faq: [
      {
        q: "Hoeveel toestellen voor een hal van 1000 m²?",
        a: "Dat hangt vooral af van de hoogte, want we rekenen op volume. Reken ruwweg op drie tot vijf drogers met luchtbeweging over de volle lengte, en in de winter een kachel erbij. Geef ons het volume in kubieke meter en de datum waarop de vloer klaar moet zijn, dan rekenen we het uit.",
      },
      {
        q: "Moeten de poorten dicht tijdens het drogen?",
        a: "Ja. Een droger tegen een open poort droogt de buitenlucht, en die is onuitputtelijk. Kunnen de poorten niet sluiten, dan heeft drogen daar geen zin en zeggen we dat liever vooraf.",
      },
      {
        q: "Hoe snel staan jullie in Zulte?",
        a: "Binnen 24 uur na uw boeking, maar Zulte is de verste halte van onze Leieronde. Boekt u voor de middag, dan staat het doorgaans de volgende werkdag.",
      },
      {
        q: "Is afhalen vanuit Zulte de moeite?",
        a: "Nee, en dat zeggen we liever eerlijk: u bent twee uur onderweg voor een toestel van 30 kg. De levering zit al in de prijs van het droogpakket, en de technieker plaatst alles en meet de vochtigheid.",
      },
      {
        q: "Betaal ik meer omdat ik verder woon?",
        a: "Nee. De prijs van het droogpakket is dezelfde in heel ons werkgebied. De rit telt mee in onze planning, niet in uw factuur.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "dendermonde",
    title: "Bouwdroger huren in Dendermonde | Vernast",
    description:
      "Bouwdroger huren in Dendermonde, Baasrode en Grembergen: waar Dender en Schelde samenkomen, met kelders die terugkomen. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Dendermonde",
    kicker: "Scheldeland · waar Dender en Schelde samenkomen",
    rit: { afstand: "circa 40 km", tijd: "ongeveer veertig minuten" },
    intro: [
      "In Dendermonde **komen de Dender en de Schelde samen**, en dat merkt u aan de kelders. Het grondwater staat hier hoog, en bij elke natte periode staat het hoger. Een deel van onze werven in deze stad gaat dan ook niet over bouwvocht maar over **een kelder of een berging die terugkomt**.",
      "Daarnaast is er gewoon veel renovatie: **rijhuizen uit het begin van de twintigste eeuw** in de binnenstad, en in Sint-Gillis, Grembergen, Appels en Baasrode woningen met een aanbouw uit een latere fase.",
    ],
    bouw: {
      kop: "Rijhuizen in de binnenstad, en kelders bij hoog water",
      alineas: [
        "**Een kelder die bij elke natte periode terugkomt, is geen bouwvocht.** Drogen haalt het vocht uit de lucht en maakt de ruimte bruikbaar zolang het toestel draait, maar het water blijft via de kelderwand of de vloerplaat binnenkomen. Dat zeggen we liever vooraf dan dat u na drie weken huur hetzelfde probleem hebt. Onze technieker **meet bij de levering** of het om bouwvocht of om grondwater gaat.",
        "Het Dendermondse rijhuis is **smal en diep**, met vaak een aanbouw achteraan. Droge lucht gaat daar niet vanzelf van voor naar achter, dus hoort er een ventilator bij de droger: die brengt de droge lucht tot achteraan en blaast de verzadigde laag langs vloer en muur weg. Zonder dat laatste droogt de voorkamer en blijft de keuken staan.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium als werkpaard: 70 liter per dag, bereik tot ongeveer 400 m³, met pompaansluiting zodat niemand een reservoir moet legen." },
      { key: "ttv4500", waarom: "In een smal en diep rijhuis gaat droge lucht niet van voor naar achter. Deze ventilator doet dat wel, en **halveert vaak de droogtijd**." },
      { key: "revolution", waarom: "**Voor de kelder die niet te verwarmen is**: de adsorptiedroger blijft ook bij lage temperatuur vocht opnemen, waar een condensdroger stilvalt." },
      { key: "ttk650", waarom: "Na hoogwater of bij een groot gelijkvloers: 110 liter per dag, bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Dendermonde: binnen 24 uur, geplaatst en gemeten",
      alinea:
        "Een veertigtal minuten rijden, en we plannen het Scheldeland in één ronde. U krijgt een tijdslot en een sms een halfuur vooraf. Gaat het om een kelder, dan **meet de technieker eerst** of drogen hier zinvol is en zegt hij het eerlijk als dat niet zo is.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer veertig minuten**. Voor één los toestel kan dat lonen, want u krijgt korting op de huurprijs. Voor een volledig pakket is leveren beter: de rit zit al in de prijs en de vochtmeting hoort erbij.",
    },
    buren: ["lebbeke", "buggenhout", "hamme", "zele"],
    faq: [
      {
        q: "Mijn kelder komt elke winter terug. Helpt drogen?",
        a: "Zolang het toestel draait wel: de ruimte wordt bruikbaar en de schade blijft beperkt. Maar een droger haalt vocht uit de lucht, niet uit de grond. Komt het water door de kelderwand, dan is drogen een pleister en geen oplossing. Onze technieker meet dat bij de levering en zegt het eerlijk.",
      },
      {
        q: "Hoe weet ik of het bouwvocht of opstijgend vocht is?",
        a: "Bouwvocht zit gelijkmatig in de ruimte en verdwijnt naarmate het droogt. Opstijgend vocht geeft een band tot ongeveer een halve meter hoog, vaak met een witte zoutrand en afbladderende verf. De vochtmeting bij de levering zit in de prijs van het pakket.",
      },
      {
        q: "Past een bouwdroger door een smalle gang?",
        a: "De Small bouwdroger is 40 bij 40 centimeter aan de basis en weegt ongeveer 25 kg. Die gaat door elke gangbare gang en trap. Geef bij de reservatie door dat het om een smalle doorgang gaat, dan kiest de technieker het toestel daarop.",
      },
      {
        q: "Hoe lang blijft een pakket staan?",
        a: "Standaard twee weken voor een chape en één tot twee weken voor pleisterwerk, maar we meten bij de ophaling. Is het nog niet droog, dan verlengt u per week bij; is het eerder droog, dan halen we eerder op.",
      },
      {
        q: "Hoe snel staan jullie in Dendermonde?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer veertig minuten en we plannen het Scheldeland in één ronde, dus boekt u voor de middag, dan staat het doorgaans de volgende werkdag.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "hamme",
    title: "Bouwdroger huren in Hamme | Vernast",
    description:
      "Bouwdroger huren in Hamme en Moerzeke: woningen tussen Durme en Schelde, met kelders in de dijkzone. Geleverd, geplaatst en opgehaald.",
    h1: "Bouwdroger huren in Hamme",
    kicker: "Scheldeland · tussen Durme en Schelde",
    rit: { afstand: "circa 37 km", tijd: "ongeveer veertig minuten" },
    intro: [
      "Hamme ligt **tussen de Durme en de Schelde**, met Moerzeke en Kastel in de bocht van de rivier. Het is laaggelegen land achter dijken, en de dorpen die binnen die dijken liggen hebben **een grondwaterstand die met de rivier meebeweegt**.",
      "Onze werven hier zijn daarom vaak **kelders en gelijkvloersen die na een natte periode vochtig blijken**, naast de gewone renovatie van woningen in de kern.",
    ],
    bouw: {
      kop: "Dijkdorpen, en woningen met een vloer op volle grond",
      alineas: [
        "In Moerzeke en Kastel staan woningen **binnen de dijk**, op een peil dat lager ligt dan de rivier bij hoogwater. Een vloer op volle grond zonder goede onderfolie **zuigt vocht op uit de ondergrond**, en dat komt er binnen weer uit. Drogen maakt de ruimte bruikbaar, maar de bron blijft, en dat zeggen we vooraf.",
        "In de kern van Hamme gaat het om **renovatie**: vers pleisterwerk, een nieuwe chape, een badkamer die opengebroken is. Dat bouwvocht verdwijnt wél definitief, en met droger en ventilator samen is **een gelijkvloers in een tiental dagen beloopbaar**.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium als standaard: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "Vocht kruipt onder vloeren en achter plinten. Zonder luchtbeweging droogt dat niet, met deze ventilator wel." },
      { key: "revolution", waarom: "**Voor een kelder in de dijkzone**: koud en vochtig tegelijk. De adsorptiedroger werkt ook onder 15 °C door." },
      { key: "ttk650", waarom: "Na hoogwater of bij een groot volume: 110 liter per dag, bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Hamme: binnen 24 uur, in de Scheldelandronde",
      alinea:
        "Een veertigtal minuten rijden. U krijgt een tijdslot en een sms een halfuur vooraf. In de dijkdorpen **meet de technieker eerst** of het om bouwvocht of om grondwater gaat, want dat bepaalt of drogen hier zin heeft.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer veertig minuten**. Voor één los toestel kan dat lonen. Voor een pakket is leveren beter: de rit zit al in de prijs en de technieker plaatst en meet alles.",
    },
    buren: ["dendermonde", "zele", "waasmunster", "temse"],
    faq: [
      {
        q: "Mijn vloer op volle grond blijft koud en vochtig. Wat nu?",
        a: "Zonder onderfolie zuigt zo'n vloer vocht uit de ondergrond op. Een droger houdt de ruimte bruikbaar, maar hij stopt de aanvoer niet. Bij een renovatie is de duurzame oplossing een nieuwe vloeropbouw met een dampremmende laag. Onze technieker meet en zegt eerlijk wat drogen hier wel en niet oplost.",
      },
      {
        q: "Wat kost een droogpakket voor een gelijkvloers?",
        a: "Dat hangt af van het volume en van de duur. Gebruik de Calculator: u geeft het volume in kubieke meter en de situatie in, en u krijgt meteen de prijs van het pakket met levering, plaatsing, vochtmeting en ophaling inbegrepen.",
      },
      {
        q: "Moet ik thuis zijn bij de levering?",
        a: "Iemand moet de technieker binnenlaten en hem laten zien welke ruimtes moeten drogen. Daarna kan hij alleen verder. U krijgt een tijdslot en een sms een halfuur vooraf, zodat u niet een hele dag moet wachten.",
      },
      {
        q: "Betaal ik een kilometerkost?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket. De rit telt mee in onze planning, niet in uw factuur.",
      },
      {
        q: "Hoe snel staan jullie in Hamme?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer veertig minuten en we plannen het Scheldeland in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "zele",
    title: "Bouwdroger huren in Zele | Vernast",
    description:
      "Bouwdroger huren in Zele: lintbebouwing tussen Durme en Schelde, en bedrijfsruimtes op de zone. Geleverd, geplaatst en opgehaald.",
    h1: "Bouwdroger huren in Zele",
    kicker: "Scheldeland · lint en bedrijvenzone",
    rit: { afstand: "circa 43 km", tijd: "ongeveer veertig minuten" },
    intro: [
      "Zele is **lang en lintvormig gegroeid** langs de steenweg, tussen de Durme en de Schelde. De woningen zijn er grotendeels **halfopen en diep**, met een aanbouw achteraan uit een latere fase.",
      "Daarnaast is er **een flinke bedrijvenzone**, en daar drogen we iets anders: een chape of een gietvloer in een hal of een kantoorruimte, waar de inrichter al gepland staat.",
    ],
    bouw: {
      kop: "Diepe halfopen woningen, en hallen op de zone",
      alineas: [
        "In een diepe halfopen woning is **de aanbouw achteraan vaak het natte punt**: een plat dak, een vloer op volle grond en een verbinding met het oude volume waar de isolatie ophoudt. Daar zetten we **een eigen droogzone** op in plaats van het mee te nemen in het geheel, want anders droogt de voorkant en blijft de achterkant staan.",
        "In een hal gaat het om **oppervlakte in plaats van om kamers**. Eén droger in een hoek droogt die hoek; op een grote vloer horen meerdere toestellen verdeeld over de ruimte en **luchtbeweging over de volle lengte**. We vragen vooraf het volume en of de poorten kunnen sluiten, want een droger tegen een open poort werkt tegen de buitenlucht in.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium voor een woning of een aanbouw: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttk650", waarom: "**Voor de hal of de kantoorruimte**: 110 liter per dag en een bereik tot ongeveer 600 m³." },
      { key: "ttv4500", waarom: "Op een grote vloer is luchtbeweging de voorwaarde om overal even droog te krijgen, niet een extra." },
      { key: "teddh30", waarom: "Voor een onverwarmde hal in de winter: onder 15 °C zakt het rendement van elke condensdroger. Vraagt 400 V krachtstroom." },
    ],
    levering: {
      kop: "Leveren in Zele: binnen 24 uur, in de Scheldelandronde",
      alinea:
        "Een veertigtal minuten rijden. U krijgt een tijdslot en een sms een halfuur vooraf. Op een bedrijfsruimte vragen we **vooraf het volume en de beschikbare stroom**, want een kachel vraagt 400 V en dat moet de kast kunnen leveren.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer veertig minuten**. Voor één los toestel kan dat lonen. Voor een pakket zit de levering al in de prijs en plaatst de technieker alles meteen goed.",
    },
    buren: ["dendermonde", "hamme", "berlare", "lokeren"],
    faq: [
      {
        q: "Hoeveel toestellen voor een hal?",
        a: "Dat hangt vooral af van de hoogte, want we rekenen op volume en niet op oppervlakte. Geef ons het volume in kubieke meter en de datum waarop de vloer klaar moet zijn, dan rekenen we uit hoeveel capaciteit daarvoor nodig is.",
      },
      {
        q: "Moeten de poorten dicht tijdens het drogen?",
        a: "Ja. Een droger tegen een open poort droogt de buitenlucht, en die is onuitputtelijk. Kunnen de poorten niet sluiten, dan heeft drogen geen zin en zeggen we dat liever vooraf dan achteraf.",
      },
      {
        q: "Mijn aanbouw blijft vochtig terwijl de rest droog is. Waarom?",
        a: "Omdat droge lucht niet vanzelf naar achteren gaat, en omdat een aanbouw vaak een andere vloeropbouw heeft dan het hoofdvolume. Daar hoort een eigen droogzone bij: een toestel in die ruimte, met de deur dicht en een ventilator erbij.",
      },
      {
        q: "Wat als het vriest tijdens de droging?",
        a: "Dan verwarmen we mee. Onder 15 °C verliest een condensdroger het grootste deel van zijn rendement, dus in een onverwarmde ruimte zetten we er een elektrische kachel bij. Die vraagt 400 V; de technieker controleert dat bij de levering.",
      },
      {
        q: "Hoe snel staan jullie in Zele?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer veertig minuten en we plannen het Scheldeland in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "berlare",
    title: "Bouwdroger huren in Berlare | Vernast",
    description:
      "Bouwdroger huren in Berlare, Overmere en Uitbergen: woningen rond het Donkmeer, met een hoge grondwaterstand. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Berlare",
    kicker: "Scheldeland · rond het Donkmeer",
    rit: { afstand: "circa 47 km", tijd: "ongeveer vijfenveertig minuten" },
    intro: [
      "Berlare ligt **rond het Donkmeer**, met Overmere en Uitbergen erbij. Een meer van die omvang betekent **een grondwaterstand die vlak onder het maaiveld zit**, en dat is in de woningen eromheen te merken.",
      "Rond het meer staat ook **oudere vakantiebebouwing** die stap voor stap tot volwaardige woning wordt verbouwd: lichte constructies, dunne vloeren en een kelder of kruipruimte die zelden droog is.",
    ],
    bouw: {
      kop: "Bebouwing rond het meer, en verbouwde vakantiewoningen",
      alineas: [
        "Rond het Donkmeer zit het grondwater **vlak onder het maaiveld**. Een kruipruimte of een kelder staat daar permanent in een vochtige omgeving, en zonder ventilatie blijft dat vocht hangen. Dan komt het via de vloeropbouw in de woning terecht. **Een droger lost de aanvoer niet op**, maar hij maakt de ruimte bruikbaar en voorkomt dat schimmel zich vastzet.",
        "Een verbouwde vakantiewoning heeft **vaak een lichte constructie**: dunne wanden, weinig thermische massa en een vloer vlak op de grond. Dat droogt sneller dan massief werk, maar het wordt ook sneller weer vochtig. Hier werkt **een kleiner toestel dat langer draait** beter dan een groot dat te snel droogt en krimpscheuren geeft.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**Voor de lichte constructie**: 50 liter per dag en 0,75 kW op een gewoon stopcontact. Kleiner en langer drogen geeft hier minder krimpscheuren." },
      { key: "ttk350", waarom: "De Medium voor een volledige woning: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "revolution", waarom: "**Voor de kruipruimte of de kelder** bij het meer: de adsorptiedroger blijft ook bij lage temperatuur vocht opnemen." },
      { key: "ttv4500", waarom: "Vocht kruipt onder vloeren en achter plinten. Zonder luchtbeweging droogt dat niet, met deze ventilator wel." },
    ],
    levering: {
      kop: "Leveren in Berlare: binnen 24 uur, in de Scheldelandronde",
      alinea:
        "Een vijfenveertigtal minuten rijden. U krijgt een tijdslot en een sms een halfuur vooraf. Bij een kruipruimte of een kelder **meet de technieker eerst** of drogen hier zinvol is, en zegt hij het eerlijk als ventilatie meer oplevert.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfenveertig minuten**. Voor één los toestel kan dat lonen. Voor een pakket is leveren beter: de rit en de vochtmeting zitten al in de prijs.",
    },
    buren: ["zele", "wichelen", "laarne", "dendermonde"],
    faq: [
      {
        q: "Kan een bouwdroger een kruipruimte drogen?",
        a: "Hij kan de lucht erin droog maken, en dat helpt tegen schimmel en tegen vocht dat via de vloer naar boven komt. Maar zit het grondwater vlak onder het maaiveld, dan is permanente ventilatie van de kruipruimte de duurzame oplossing. Wij zeggen het eerlijk als drogen hier alleen symptomen aanpakt.",
      },
      {
        q: "Mijn woning is een verbouwde vakantiewoning. Welk toestel?",
        a: "Doorgaans de Small bouwdroger, en langer laten draaien. Een lichte constructie droogt snel, en te snel drogen geeft krimpscheuren in verse chape of pleisterwerk. De technieker stelt de hygrostaat daarop in.",
      },
      {
        q: "Krijg ik krimpscheuren van een bouwdroger?",
        a: "Alleen als er te snel gedroogd wordt. Daarom stelt de technieker een streefwaarde in op de hygrostaat in plaats van het toestel vol open te zetten. Het gaat om gecontroleerd drogen, niet om zo hard mogelijk.",
      },
      {
        q: "Hoeveel stroom verbruikt een bouwdroger?",
        a: "De Small ongeveer 0,75 kW per uur, de Medium rond 1,2 kW. Dat komt op een paar euro per etmaal. Het verbruik staat op elke toestelpagina zodat u het zelf kunt narekenen.",
      },
      {
        q: "Hoe snel staan jullie in Berlare?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfenveertig minuten en we plannen het Scheldeland in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "buggenhout",
    title: "Bouwdroger huren in Buggenhout | Vernast",
    description:
      "Bouwdroger huren in Buggenhout en Opdorp: woningen op de zandrug bij het bos, droger dan de vallei errond. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Buggenhout",
    kicker: "Scheldeland · op de zandrug",
    rit: { afstand: "circa 37 km", tijd: "ongeveer vijfendertig minuten" },
    intro: [
      "Buggenhout ligt **op een zandrug naast zijn bos**, hoger dan de Dender- en Scheldevallei errond. Dat scheelt: **zand draineert**, dus de kelders zijn hier minder vaak het probleem dan een paar kilometer verder in de vallei.",
      "Wat overblijft is gewoon werk: **nieuwbouw in verkavelingen en renovatie in de kernen** van Buggenhout en Opdorp. Chape, pleisterwerk en af en toe een badkamer die opengebroken is.",
    ],
    bouw: {
      kop: "Nieuwbouw op zand, en renovatie in de kernen",
      alineas: [
        "Een verse chape geeft **vijf tot tien liter water per dag per honderd vierkante meter** af, en dat moet eruit voor het pleisterwerk en de vloer komen. Zonder droger belandt het in de muren en in de afwerking. Met droger en ventilator samen is **een gelijkvloers in een tiental dagen beloopbaar en in twee à drie weken klaar voor de vloerder**.",
        "In de kernen staan oudere woningen met **dikke massieve muren**. Die geven hun vocht traag af, en vlak tegen het oppervlak vormt zich een verzadigd luchtlaagje dat verdere droging afremt. Een ventilator haalt dat weg, en daarom hoort die bij een renovatiepakket in plaats van erbij te worden verkocht.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De standaard voor een nieuwbouwwoning: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "Bij een chape verdubbelt luchtbeweging vaak de snelheid, en bij massieve muren is hij een voorwaarde." },
      { key: "ttk170", waarom: "Voor één kamer, een badkamer of een traphal: 50 liter per dag en 0,75 kW op een gewoon stopcontact." },
      { key: "teddh30", waarom: "Voor de onverwarmde ruwbouw in de winter: onder 15 °C verliest een condensdroger het grootste deel van zijn rendement. Vraagt 400 V." },
    ],
    levering: {
      kop: "Leveren in Buggenhout: binnen 24 uur, in de Scheldelandronde",
      alinea:
        "Een vijfendertigtal minuten rijden, en daarmee is Buggenhout een van de kortste ritten van deze streek. U krijgt een tijdslot en een sms een halfuur vooraf, en de technieker plaatst de toestellen per droogzone en stelt ze in.",
    },
    afhalen: {
      kop: "Afhalen kan, en loont hier nog",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfendertig minuten**. Voor één of twee losse toestellen kan dat lonen, want u krijgt korting op de huurprijs. Vervoer de droger **rechtop**, en heeft hij toch plat gelegen, laat hem dan 24 uur staan voor u hem inschakelt.",
    },
    buren: ["dendermonde", "lebbeke", "puurs-sint-amands", "londerzeel"],
    faq: [
      {
        q: "Hoe lang moet een chape drogen met een droger?",
        a: "Reken op een week per centimeter dikte zonder hulp, en met droger en ventilator ongeveer de helft. Een chape van vijf centimeter is dan in twee à drie weken klaar voor de vloerder. De technieker meet bij de ophaling of de restvochtigheid laag genoeg is.",
      },
      {
        q: "Wanneer start ik met drogen na het chaperen?",
        a: "Niet meteen. Een chape moet eerst uitharden: reken op 48 tot 72 uur, en start dan voorzichtig. Te snel drogen geeft krimpscheuren, en daarom stelt de technieker de hygrostaat in.",
      },
      {
        q: "Kan ik hier zelf afhalen?",
        a: "Ja, vanuit Buggenhout bent u in een klein uur heen en terug. Houd er rekening mee dat een droger 25 tot 40 kg weegt en rechtop vervoerd moet worden. In een kleine wagen past er doorgaans één, geen twee.",
      },
      {
        q: "Zit de ophaling in de prijs?",
        a: "Ja. Bij een geleverd pakket zitten levering, plaatsing, de vochtmeting en de ophaling in de prijs. Haalt u zelf af, dan brengt u zelf terug en krijgt u daarvoor korting.",
      },
      {
        q: "Hoe snel staan jullie in Buggenhout?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfendertig minuten.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "lebbeke",
    title: "Bouwdroger huren in Lebbeke | Vernast",
    description:
      "Bouwdroger huren in Lebbeke, Wieze en Denderbelle: woningen in de Dendervallei en zalen en horeca. Geleverd, geplaatst en opgehaald.",
    h1: "Bouwdroger huren in Lebbeke",
    kicker: "Dendervallei · woningen, zalen en horeca",
    rit: { afstand: "circa 40 km", tijd: "ongeveer veertig minuten" },
    intro: [
      "Lebbeke ligt **in de vallei van de Dender**, met Wieze en Denderbelle erbij. De vallei is laag, en in de laagste delen is het grondwater nooit ver weg.",
      "Naast woningen drogen we hier opvallend vaak **zalen en horeca**: Wieze heeft er een traditie in, en een keuken of een feestzaal die verbouwd wordt, heeft een deadline die niet opschuift.",
    ],
    bouw: {
      kop: "Woningen in de vallei, en zalen met een deadline",
      alineas: [
        "Een zaal of een horecakeuken is **een groot, open volume met een harde deadline**: de heropening staat gepland en een gietvloer of een tegelwerk op een te natte chape komt los. Daar zetten we **meer capaciteit in één keer in** in plaats van langer te drogen met één toestel, want dat is doorgaans ook goedkoper: minder huurweken.",
        "In de woningen in de vallei gaat het vaker om **vocht uit de ondergrond** dan een kilometer hoger op. Een vloer op volle grond zonder goede onderfolie zuigt dat op, en binnen komt het terug. Drogen maakt de ruimte bruikbaar, maar de bron blijft, en dat **meet de technieker bij de levering**.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Voor de zaal of de keuken**: 110 liter per dag en een bereik tot ongeveer 600 m³. Meer capaciteit in één keer kost minder huurweken." },
      { key: "ttk350", waarom: "De Medium voor een woning: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "Op een grote vloer voorkomt luchtbeweging dat één hoek achterblijft; bij een chape verdubbelt ze vaak de snelheid." },
      { key: "revolution", waarom: "Voor een onverwarmde kelder of voorraadruimte: de adsorptiedroger blijft ook bij lage temperatuur vocht opnemen." },
    ],
    levering: {
      kop: "Leveren in Lebbeke: binnen 24 uur, met een datum om naar terug te rekenen",
      alinea:
        "Een veertigtal minuten rijden. **Hebt u een heropeningsdatum, geef die dan bij de reservatie**: dan rekenen we terug hoeveel capaciteit er nodig is om die te halen, in plaats van u achteraf te laten verlengen. U krijgt een tijdslot en een sms een halfuur vooraf.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer veertig minuten**. Voor één los toestel kan dat lonen. Voor een zaal of een keuken niet: daar hangt het resultaat af van hoeveel capaciteit er staat en waar, en dat zet de technieker op.",
    },
    buren: ["dendermonde", "buggenhout", "aalst", "lede"],
    faq: [
      {
        q: "Ik heb een vaste heropeningsdatum. Kunnen jullie daarnaar werken?",
        a: "Ja, en dat is de goede manier om dit te plannen. Geef de datum en het volume door, dan rekenen we terug hoeveel toestellen er nodig zijn. Meer capaciteit in één keer is vaak goedkoper dan langer huren met te weinig.",
      },
      {
        q: "Kunnen jullie een horecakeuken drogen terwijl de werken doorgaan?",
        a: "Ja, zolang de ruimte dicht te krijgen is. Een droger met open deuren naar buiten droogt de buitenlucht. De technieker zet de droogzone op en legt de afvoer naar een putje, zodat niemand een reservoir moet legen.",
      },
      {
        q: "Hoe droog moet een chape zijn voor een gietvloer?",
        a: "Strenger dan voor tegels. Uw vloerder bepaalt de grens; wij drogen tot een gemeten waarde en niet tot een datum. De technieker meet bij de ophaling en u krijgt die meting op papier.",
      },
      {
        q: "Betaal ik een kilometerkost?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket.",
      },
      {
        q: "Hoe snel staan jullie in Lebbeke?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer veertig minuten en we plannen de Dendervallei in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "wichelen",
    title: "Bouwdroger huren in Wichelen | Vernast",
    description:
      "Bouwdroger huren in Wichelen, Serskamp en Schellebelle: woningen in de Scheldemeander, met overstromingsgebied naast de deur.",
    h1: "Bouwdroger huren in Wichelen",
    kicker: "Scheldeland · in de meander",
    rit: { afstand: "circa 50 km", tijd: "ongeveer vijfenveertig minuten" },
    intro: [
      "Wichelen ligt **in een meander van de Schelde**, met Serskamp en Schellebelle erbij. Naast de dorpen liggen **gecontroleerde overstromingsgebieden**: weiland dat bij hoogwater onder water mag komen om de dorpen droog te houden.",
      "Dat werkt, maar het betekent ook **een hoge grondwaterstand** in de woningen die er tegenaan liggen. Een kelder of een kruipruimte blijft daar zelden volledig droog.",
    ],
    bouw: {
      kop: "Woningen tegen het overstromingsgebied, en gewone renovatie",
      alineas: [
        "Tegen een overstromingsgebied is **het grondwater ondiep en beweegt het mee met de rivier**. Een kelder die bij hoogwater vochtig wordt, is daarmee geen bouwvocht: drogen haalt het uit de ruimte, de bron blijft. Onze technieker **meet dat bij de levering** en zegt het eerlijk als drogen hier alleen de symptomen aanpakt.",
        "Verder is het hier gewoon werk: **chape, pleisterwerk en renovatie** in de dorpskernen. Dat bouwvocht verdwijnt wél definitief, en met droger en ventilator samen is een gelijkvloers in een tiental dagen beloopbaar en in twee à drie weken klaar voor de vloerder.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium als standaard: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "revolution", waarom: "**Voor de kelder bij hoogwater**: koud en vochtig tegelijk, en daar werkt een adsorptiedroger door waar een condensdroger stilvalt." },
      { key: "ttv4500", waarom: "Vocht kruipt onder vloeren en achter plinten. Zonder luchtbeweging droogt dat niet, met deze ventilator wel." },
      { key: "ttk650", waarom: "Na hoogwater of bij een groot gelijkvloers: 110 liter per dag, bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Wichelen: binnen 24 uur, in de Scheldelandronde",
      alinea:
        "Een vijfenveertigtal minuten rijden. U krijgt een tijdslot en een sms een halfuur vooraf. Bij een kelder of een kruipruimte **meet de technieker eerst** of het om bouwvocht of om grondwater gaat.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfenveertig minuten**. Voor één los toestel kan dat lonen. Voor een pakket is leveren beter: de rit en de vochtmeting zitten al in de prijs.",
    },
    buren: ["wetteren", "berlare", "laarne", "lede"],
    faq: [
      {
        q: "Woon ik te laag voor een bouwdroger?",
        a: "Nee, maar het verandert wat drogen oplost. Bij bouwvocht is het probleem definitief weg; bij water dat uit de grond komt, houdt de droger de ruimte bruikbaar zolang hij draait. De vochtmeting bij de levering vertelt welke van de twee het is, en die zit in de prijs.",
      },
      {
        q: "Hoe lang duurt het drogen na hoogwater?",
        a: "Voor een kelder of een gelijkvloers reken op twee tot vier weken, afhankelijk van hoe lang het water er stond en van de vloeropbouw. Een zwevende vloer op isolatie doet er langer over, want het water zit onder de afwerking.",
      },
      {
        q: "Kan ik verlengen als het niet droog is?",
        a: "Ja, per week. De technieker meet bij de ophaling; is de restvochtigheid nog te hoog, dan blijft het pakket staan en verlengt u bij. Is het eerder droog, dan halen we eerder op.",
      },
      {
        q: "Zit er een waarborg op?",
        a: "Nee. Er komt geen waarborg bij, en levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket.",
      },
      {
        q: "Hoe snel staan jullie in Wichelen?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfenveertig minuten en we plannen het Scheldeland in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "laarne",
    title: "Bouwdroger huren in Laarne | Vernast",
    description:
      "Bouwdroger huren in Laarne en Kalken: woningen aan de Kalkense Meersen, met hoog grondwater. Geleverd, geplaatst en opgehaald.",
    h1: "Bouwdroger huren in Laarne",
    kicker: "Scheldeland · aan de Kalkense Meersen",
    rit: { afstand: "circa 52 km", tijd: "ongeveer vijfenveertig minuten" },
    intro: [
      "Laarne en Kalken liggen **aan de Kalkense Meersen**, een van de grootste natte natuurgebieden langs de Schelde. Dat gebied houdt water vast, en dat is precies de bedoeling, maar het betekent ook **een hoge grondwaterstand in de dorpen ernaast**.",
      "De bebouwing is landelijk: **hoeves, dorpswoningen en open bebouwing** op ruime percelen. Wat we hier drogen is vooral renovatie, en af en toe een kelder na een natte winter.",
    ],
    bouw: {
      kop: "Landelijke bebouwing bij een nat natuurgebied",
      alineas: [
        "Een hoeve of een dorpswoning zonder **waterkering in de muurvoet** zuigt vocht op uit de ondergrond, en op een natte bodem gaat dat sneller. Binnen komt het terug als een vochtband onderaan de muur, vaak met een witte zoutrand. Dat is geen bouwvocht en verdwijnt niet door te drogen; **de technieker meet het verschil** bij de levering.",
        "Gaat het wel om bouwvocht, dan geven **massieve muren hun vocht traag af**. Tegen het oppervlak vormt zich een verzadigd luchtlaagje dat als een deken werkt, en zolang dat blijft staan droogt de muur niet verder. Een ventilator haalt dat weg, en daarom hoort die hier standaard bij het pakket.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium als standaard bij renovatie: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "**Onmisbaar bij massieve muren**: hij blaast de verzadigde luchtlaag tegen het muuroppervlak weg, en pas dan droogt de muur verder." },
      { key: "revolution", waarom: "Voor een onverwarmde kelder of schuur: de adsorptiedroger blijft ook bij lage temperatuur vocht opnemen." },
      { key: "ttk650", waarom: "Voor een hoeve met grote, hoge volumes: 110 liter per dag en bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Laarne: binnen 24 uur, in de Scheldelandronde",
      alinea:
        "Een vijfenveertigtal minuten rijden. U krijgt een tijdslot en een sms een halfuur vooraf. Bij een hoeve vragen we **vooraf het volume in kubieke meter** en of de ruimte dicht te krijgen is, want een droger tegen een open poort werkt tegen de buitenlucht in.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfenveertig minuten**. Voor een volledig pakket is leveren bijna altijd beter: bij een hoeve hangt het resultaat af van waar de toestellen staan, en de rit zit al in de prijs.",
    },
    buren: ["wetteren", "wichelen", "destelbergen", "berlare"],
    faq: [
      {
        q: "Mijn muren zijn onderaan vochtig met een witte rand. Is dat bouwvocht?",
        a: "Dat is bijna altijd opstijgend vocht: een band tot ongeveer een halve meter hoog, een witte zoutrand en afbladderende verf. Bouwvocht zit gelijkmatig in de ruimte. Onze technieker meet het bij de levering, want drogen lost het eerste niet op.",
      },
      {
        q: "Kunnen jullie een schuur of een stal drogen?",
        a: "Ja, als ze dicht te krijgen is. Geef vooraf het volume door, de vloeropbouw en of de poorten kunnen sluiten. Is de ruimte niet te verwarmen, dan zetten we een adsorptiedroger in.",
      },
      {
        q: "Waarom droogt een oude muur zo veel trager?",
        a: "Omdat het vocht uit de kern van veertig centimeter baksteen naar buiten moet, en omdat zich tegen het oppervlak een verzadigd luchtlaagje vormt dat verdere droging afremt. Reken bij massieve muren op anderhalf tot twee keer de droogtijd van een moderne wand.",
      },
      {
        q: "Betaal ik een kilometerkost voor Laarne?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket.",
      },
      {
        q: "Hoe snel staan jullie in Laarne?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfenveertig minuten en we plannen het Scheldeland in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "wetteren",
    title: "Bouwdroger huren in Wetteren | Vernast",
    description:
      "Bouwdroger huren in Wetteren, Massemen en Westrem: woningen aan de Schelde en serres van de boomteelt. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Wetteren",
    kicker: "Scheldeland · boomteelt aan de Schelde",
    rit: { afstand: "circa 52 km", tijd: "ongeveer vijfenveertig minuten" },
    intro: [
      "Wetteren ligt **aan de Schelde**, met Massemen, Westrem en Ten Ede erbij. De gemeente heeft een lange **boomteelttraditie**: serres, loodsen en bedrijfsgebouwen van kwekerijen staan hier tussen de woonkernen.",
      "Onze werven zijn dan ook gemengd: **rijhuizen en appartementen in het centrum**, open bebouwing in de randdorpen, en bedrijfsruimtes waar een vloer moet drogen voor de inrichting komt.",
    ],
    bouw: {
      kop: "Centrum aan het water, en bedrijfsgebouwen van de kwekerijen",
      alineas: [
        "In het centrum ligt de bebouwing **dicht tegen de Schelde**, en daar is het grondwater ondiep. Een kelder onder een rijhuis blijft er zelden volledig droog. Gaat het om **bouwvocht uit een renovatie**, dan verdwijnt dat definitief; komt het water uit de grond, dan houdt de droger de ruimte bruikbaar maar blijft de bron. De technieker **meet dat bij de levering**.",
        "Een serre of een loods is **een ander verhaal dan een woning**: groot volume, veel luchtdoorlaat en zelden verwarmd. Een droger tegen een open poort werkt tegen de buitenlucht in, dus vragen we vooraf het volume en of de ruimte **dicht te krijgen** is. Lukt dat niet, dan heeft drogen daar geen zin en zeggen we dat.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium als standaard: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttk650", waarom: "**Voor de loods of het bedrijfsgebouw**: 110 liter per dag en een bereik tot ongeveer 600 m³." },
      { key: "ttv4500", waarom: "Bij een chape verdubbelt luchtbeweging vaak de snelheid; op een grote vloer voorkomt ze dat één hoek achterblijft." },
      { key: "revolution", waarom: "Voor een onverwarmde kelder of bedrijfsruimte in de winter: de adsorptiedroger werkt ook onder 15 °C door." },
    ],
    levering: {
      kop: "Leveren in Wetteren: binnen 24 uur, in de Scheldelandronde",
      alinea:
        "Een vijfenveertigtal minuten rijden. U krijgt een tijdslot en een sms een halfuur vooraf. Bij een loods of een serre vragen we **vooraf het volume** en of de ruimte dicht te krijgen is, zodat de technieker met het juiste toestel vertrekt.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfenveertig minuten**. Voor één los toestel kan dat lonen. Voor een pakket zit de levering al in de prijs en plaatst de technieker alles meteen goed.",
    },
    buren: ["wichelen", "laarne", "merelbeke-melle", "lede"],
    faq: [
      {
        q: "Kunnen jullie een serre of een kweekloods drogen?",
        a: "Dat hangt af van of ze dicht te krijgen is. Een droger tegen een open poort of een openstaande nokverluchting werkt tegen de buitenlucht in en haalt niets uit. Geef vooraf het volume door en of alles kan sluiten, dan rekenen we uit of het zin heeft.",
      },
      {
        q: "Mijn kelder onder het rijhuis blijft vochtig. Wat nu?",
        a: "Dicht bij de Schelde is het grondwater ondiep, en een kelder zonder buitenwaterdichting zuigt dat op. Drogen maakt de ruimte bruikbaar zolang het toestel draait, maar de bron blijft. De vochtmeting bij de levering vertelt welke van de twee het is.",
      },
      {
        q: "Past een bouwdroger in een appartement?",
        a: "Ja. De Small bouwdroger verbruikt 0,75 kW, dus hij mag op een gewoon stopcontact, en hij is stil genoeg om in de kamer ernaast te slapen. Is er een lift of een vaste trap, dan is elke verdieping inbegrepen in de prijs.",
      },
      {
        q: "Betaal ik een kilometerkost?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket.",
      },
      {
        q: "Hoe snel staan jullie in Wetteren?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfenveertig minuten en we plannen het Scheldeland in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "aalst",
    title: "Bouwdroger huren in Aalst | Vernast",
    description:
      "Bouwdroger huren in Aalst, Erembodegem en Hofstade: rijhuizen in de binnenstad en appartementen in afwerking. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Aalst",
    kicker: "Denderstreek · stad aan de Dender",
    rit: { afstand: "circa 45 km", tijd: "ongeveer veertig minuten" },
    intro: [
      "Aalst is **de grootste stad van de Denderstreek**, en onze werven hier lopen van een rijhuis in de binnenstad tot een appartementsblok in afwerking. In Erembodegem, Hofstade, Nieuwerkerken en Gijzegem komt daar **open en halfopen nieuwbouw** bij.",
      "De stad ligt **aan de Dender**, en in de laagste straten is het grondwater nooit ver weg. Een kelder onder een rijhuis blijft er zelden helemaal droog, en dat is iets anders dan bouwvocht.",
    ],
    bouw: {
      kop: "Rijhuizen in de kuip, en appartementen in afwerking",
      alineas: [
        "Het Aalsterse rijhuis is **smal en diep**, met vaak een aanbouw achteraan. Droge lucht gaat daar niet vanzelf van voor naar achter, dus hoort er **een ventilator bij de droger**: die brengt droge lucht tot achteraan en blaast de verzadigde laag langs vloer en muur weg. Zonder dat laatste droogt de voorkamer en blijft de keuken staan.",
        "Bij een **appartementsproject** draait het om iets anders: meerdere eenheden die tegelijk moeten drogen, achter elkaar in de planning van de vloerder. Geef bij de reservatie door **hoeveel eenheden** het zijn, dan leveren we in één rit en zetten we per eenheid een droogzone op, in plaats van dezelfde rit drie keer te doen.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium als werkpaard: 70 liter per dag, bereik tot ongeveer 400 m³, met pompaansluiting zodat niemand een reservoir moet legen." },
      { key: "ttk170", waarom: "**Per appartement of per kamer**: 50 liter per dag en 0,75 kW op een gewoon stopcontact, stil genoeg voor een bewoond gebouw." },
      { key: "ttv4500", waarom: "In een smal en diep rijhuis gaat droge lucht niet van voor naar achter. Deze ventilator doet dat wel, en **halveert vaak de droogtijd**." },
      { key: "revolution", waarom: "Voor een kelder in de laagste straten, die niet te verwarmen is: de adsorptiedroger werkt ook onder 15 °C door." },
    ],
    levering: {
      kop: "Leveren in Aalst: binnen 24 uur, ook in het centrum",
      alinea:
        "Een veertigtal minuten rijden. **Ligt uw straat in een zone met venstertijden of een voetgangersgebied, zeg dat dan bij de reservatie**, dan plannen we binnen dat venster. Is er een lift of een vaste trap, dan is elke verdieping inbegrepen; moet een toestel via een ladder naar boven, dan staat die toeslag vooraf in uw offerte.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer veertig minuten**. Voor één los toestel kan dat lonen, want u krijgt korting op de huurprijs. Voor een pakket is leveren beter: de rit en de vochtmeting zitten al in de prijs.",
    },
    buren: ["denderleeuw", "erpe-mere", "lede", "haaltert"],
    faq: [
      {
        q: "Kunnen jullie meerdere appartementen tegelijk doen?",
        a: "Ja. Geef bij de reservatie door hoeveel eenheden er tegelijk moeten drogen, dan leveren we in één rit en zetten we per eenheid een droogzone op. Dat is goedkoper dan drie keer dezelfde rit, en uw vloerder kan achter elkaar doorwerken.",
      },
      {
        q: "Past een bouwdroger door een Aalsters trappenhuis?",
        a: "De Small bouwdroger is 40 bij 40 centimeter aan de basis en weegt ongeveer 25 kg. Die gaat door elke gangbare trappenhal. Geef bij de reservatie door dat het om een smalle trap gaat, dan kiest de technieker het toestel daarop.",
      },
      {
        q: "Mijn kelder blijft vochtig na het drogen. Hoe kan dat?",
        a: "Omdat een droger vocht uit de lucht haalt, niet uit de grond. In de laagste straten bij de Dender is het grondwater ondiep. Drogen houdt de ruimte bruikbaar zolang het toestel draait, maar de bron blijft. De technieker meet dat bij de levering en zegt het eerlijk.",
      },
      {
        q: "Hoort er een ventilator bij een rijhuis?",
        a: "In een smalle, diepe plattegrond wel. De droger maakt droge lucht, de ventilator brengt die tot achteraan. Hij zit standaard in onze droogpakketten voor een rijwoning.",
      },
      {
        q: "Hoe snel staan jullie in Aalst?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer veertig minuten en we plannen de Denderstreek in één ronde, dus boekt u voor de middag, dan staat het doorgaans de volgende werkdag.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "denderleeuw",
    title: "Bouwdroger huren in Denderleeuw | Vernast",
    description:
      "Bouwdroger huren in Denderleeuw, Iddergem en Welle: compacte percelen en appartementen bij het station. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Denderleeuw",
    kicker: "Denderstreek · dicht bebouwd bij het spoor",
    rit: { afstand: "circa 50 km", tijd: "ongeveer vijfenveertig minuten" },
    intro: [
      "Denderleeuw is **dicht bebouwd rond zijn spoorknooppunt**, met Iddergem en Welle erbij. De percelen zijn klein, de woningen staan tegen elkaar, en er wordt veel **verdicht**: appartementen op de plaats van één woning.",
      "Dat maakt onze werven hier **compact en vaak bewoond**: een toestel dat via de bestaande trap naar boven moet, op één stopcontact draait en stil genoeg is voor de buren.",
    ],
    bouw: {
      kop: "Verdichting bij het station, en kleine percelen",
      alineas: [
        "In een **nieuw appartementsblok** moeten meerdere eenheden tegelijk drogen, en de vloerder staat achter elkaar gepland. Daar leveren we **per eenheid een droogzone** in één rit, in plaats van dezelfde rit drie keer te doen. Geef bij de reservatie door hoeveel eenheden het zijn.",
        "Bij een **renovatie op een klein perceel** is er geen plaats om materiaal te stapelen, en de werf is vaak bewoond. Het toestel moet dan **stil genoeg** zijn, **op 230 V** draaien en **door een gewone deur** passen. De Small bouwdroger is daarvoor gemaakt: 50 liter per dag, 0,75 kW, 25 kg.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**Het toestel voor een bewoonde werf**: compact, stil en zuinig op een gewoon stopcontact. Voor één kamer, een badkamer of een appartement." },
      { key: "ttk350", waarom: "De Medium voor een volledig gelijkvloers: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "Bij een chape verdubbelt luchtbeweging vaak de snelheid, en in een diepe plattegrond brengt ze de droge lucht tot achteraan." },
      { key: "revolution", waarom: "Voor een kelder of een garage onder het gebouw, die niet verwarmd wordt: de adsorptiedroger werkt ook onder 15 °C door." },
    ],
    levering: {
      kop: "Leveren in Denderleeuw: binnen 24 uur, geplaatst en ingesteld",
      alinea:
        "Een vijfenveertigtal minuten rijden. **Is er geen plaats om te parkeren voor de deur, zeg dat dan bij de reservatie**, dan weet de technieker dat hij verder moet uitladen. Is er een lift of een vaste trap, dan is elke verdieping inbegrepen in de prijs.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfenveertig minuten**. Voor één los toestel kan dat lonen. Voor een pakket is leveren beter: de rit zit al in de prijs en de technieker plaatst en meet alles.",
    },
    buren: ["aalst", "ninove", "haaltert", "liedekerke"],
    faq: [
      {
        q: "Mag een bouwdroger draaien in een bewoond appartement?",
        a: "Ja, en daarvoor is de Small bouwdroger bedoeld. Hij verbruikt 0,75 kW, dus hij mag op een gewoon stopcontact, en hij is stil genoeg om in de kamer ernaast te slapen. Houd de deur van de droogzone dicht: droge lucht die door het hele huis trekt droogt niets snel.",
      },
      {
        q: "Zit de verdieping in de prijs?",
        a: "Is er een lift of een vaste trap, dan is elke verdieping inbegrepen. Moet een toestel via een ladder naar boven omdat de trap nog niet ligt, dan rekenen we een toeslag per verdieping, en die staat vooraf in uw offerte, niet achteraf op de factuur.",
      },
      {
        q: "Kunnen jullie meerdere appartementen tegelijk doen?",
        a: "Ja. Geef het aantal eenheden door bij de reservatie, dan leveren we in één rit en zetten we per eenheid een droogzone op.",
      },
      {
        q: "Hoeveel stroom verbruikt een bouwdroger?",
        a: "De Small ongeveer 0,75 kW per uur, de Medium rond 1,2 kW. Dat komt op een paar euro per etmaal. Het verbruik staat op elke toestelpagina zodat u het zelf kunt narekenen.",
      },
      {
        q: "Hoe snel staan jullie in Denderleeuw?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfenveertig minuten en we plannen de Denderstreek in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "haaltert",
    title: "Bouwdroger huren in Haaltert | Vernast",
    description:
      "Bouwdroger huren in Haaltert, Denderhoutem en Kerksken: lintbebouwing op zandleem, met nieuwbouw ertussen. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Haaltert",
    kicker: "Denderstreek · lintbebouwing op zandleem",
    rit: { afstand: "circa 52 km", tijd: "ongeveer vijfenveertig minuten" },
    intro: [
      "Haaltert is **lintvormig gegroeid** langs zijn steenwegen, met Denderhoutem, Kerksken en Heldergem erbij. De bodem is **zandleem**, en die houdt water langer vast dan zand.",
      "Dat heeft een gevolg dat veel bouwers hier onderschatten: **een chape op zandleem droogt niet sneller dan elders, maar de ondergrond eromheen blijft wel natter**. De ruwbouw begint dus met meer vocht in het gebouw dan op een zandrug.",
    ],
    bouw: {
      kop: "Nieuwbouw op zandleem, en renovatie in de linten",
      alineas: [
        "Een verse chape geeft **vijf tot tien liter water per dag per honderd vierkante meter** af, en op zandleem komt daar nog vocht uit de bouwput bij. Met droger en ventilator samen is **een gelijkvloers in een tiental dagen beloopbaar en in twee à drie weken klaar voor de vloerder**, tegenover vijf à zeven weken zonder hulp.",
        "In de linten staan **oudere halfopen woningen met een aanbouw** uit een latere fase. Die aanbouw is vaak het natte punt: een plat dak, een vloer op volle grond en een verbinding met het oude volume waar de isolatie ophoudt. Daar zetten we een eigen droogzone op.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De standaard voor een nieuwbouwwoning: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "Bij een chape verdubbelt luchtbeweging vaak de snelheid: hij blaast de verzadigde laag vlak boven de vloer weg." },
      { key: "ttk650", waarom: "Voor een groot gelijkvloers of een open leefruimte met een hoog plafond: 110 liter per dag, bereik tot ongeveer 600 m³." },
      { key: "teddh30", waarom: "Voor de onverwarmde ruwbouw in de winter: onder 15 °C verliest een condensdroger het grootste deel van zijn rendement. Vraagt 400 V." },
    ],
    levering: {
      kop: "Leveren in Haaltert: binnen 24 uur, in de Denderronde",
      alinea:
        "Een vijfenveertigtal minuten rijden. U krijgt een tijdslot en een sms een halfuur vooraf. Op een winterwerf controleert de technieker eerst of **de werfkast 400 V levert** voor de kachel, want zonder bijverwarming haalt een condensdroger onder 15 °C te weinig rendement.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfenveertig minuten**. Voor één los toestel kan dat lonen. Voor een pakket op een nieuwbouwwerf niet: de levering zit al in de prijs en de technieker zet de droogzones meteen goed op.",
    },
    buren: ["aalst", "denderleeuw", "ninove", "erpe-mere"],
    faq: [
      {
        q: "Hoe lang moet een chape drogen met een droger?",
        a: "Reken op een week per centimeter dikte zonder hulp, en met droger en ventilator ongeveer de helft. Een chape van vijf centimeter is dan in twee à drie weken klaar voor de vloerder. De technieker meet bij de ophaling of de restvochtigheid laag genoeg is.",
      },
      {
        q: "Wat als het vriest tijdens de droging?",
        a: "Dan verwarmen we mee. Onder 15 °C verliest een condensdroger het grootste deel van zijn rendement, dus in een onverwarmde ruwbouw zetten we er een elektrische kachel bij. Die vraagt 400 V; de technieker controleert de werfkast bij de levering.",
      },
      {
        q: "Hoeveel toestellen voor een gelijkvloers van 140 m²?",
        a: "Doorgaans twee drogers met een ventilator per droogzone, en een derde als de verdieping meteen mee moet. De Calculator rekent op volume in kubieke meter, want een hoog plafond telt zwaarder dan extra vierkante meters.",
      },
      {
        q: "Mijn aanbouw blijft vochtig terwijl de rest droog is. Waarom?",
        a: "Omdat droge lucht niet vanzelf naar achteren gaat, en omdat een aanbouw vaak een andere vloeropbouw heeft. Daar hoort een eigen droogzone bij: een toestel in die ruimte, met de deur dicht en een ventilator erbij.",
      },
      {
        q: "Hoe snel staan jullie in Haaltert?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfenveertig minuten en we plannen de Denderstreek in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "erpe-mere",
    title: "Bouwdroger huren in Erpe-Mere | Vernast",
    description:
      "Bouwdroger huren in Erpe-Mere, Aaigem en Burst: open nieuwbouw op het platteland tussen Aalst en Zottegem. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Erpe-Mere",
    kicker: "Denderstreek · open nieuwbouw op het platteland",
    rit: { afstand: "circa 50 km", tijd: "ongeveer vijfenveertig minuten" },
    intro: [
      "Erpe-Mere bestaat uit **negen dorpen** tussen Aalst en Zottegem: Erpe, Mere, Aaigem, Bambrugge, Burst, Ottergem, Vlekkem, Erondegem en Egem. Allemaal klein, allemaal met **open en halfopen nieuwbouw** rond de kern.",
      "Wat we hier drogen is dan ook vooral **chape van een volledig gelijkvloers**, en in de winter een ruwbouw die eerst op temperatuur moet voor er iets droogt.",
    ],
    bouw: {
      kop: "Open bebouwing met ruime volumes",
      alineas: [
        "Een vrijstaande woning heeft **meer capaciteit nodig dan een rijhuis**, niet omdat ze trager droogt maar omdat er meer lucht in zit. Wij rekenen op **volume in kubieke meter**: een open leefruimte met een plafond van drie meter telt zwaarder dan dezelfde oppervlakte onder een gewoon plafond. Dat is ook waarom de Calculator naar volume vraagt en niet naar vierkante meters.",
        "In de winter is **temperatuur de beperkende factor**. Onder 15 °C verliest een condensdroger het grootste deel van zijn rendement, en een ruwbouw zonder ramen komt daar niet boven. Dan gaat er een elektrische kachel mee, of meteen een adsorptiedroger die ook koud doorwerkt.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De standaard voor een nieuwbouwwoning: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttk650", waarom: "**Voor de grote open bebouwing**: 110 liter per dag en een bereik tot ongeveer 600 m³, één toestel per groot gelijkvloers." },
      { key: "ttv4500", waarom: "Bij een chape verdubbelt luchtbeweging vaak de snelheid: hij blaast de verzadigde laag vlak boven de vloer weg." },
      { key: "teddh30", waarom: "Voor de onverwarmde ruwbouw in de winter: onder 15 °C zakt het rendement van elke condensdroger. Vraagt 400 V krachtstroom." },
    ],
    levering: {
      kop: "Leveren in Erpe-Mere: binnen 24 uur, in de Denderronde",
      alinea:
        "Een vijfenveertigtal minuten rijden, en we plannen de Denderstreek in één ronde. U krijgt een tijdslot en een sms een halfuur vooraf. Op een winterwerf controleert de technieker of de werfkast **400 V** levert voor de kachel.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfenveertig minuten**. Voor een volledig pakket op een nieuwbouwwerf is leveren beter: de rit zit al in de prijs en het resultaat hangt af van waar de toestellen staan.",
    },
    buren: ["aalst", "lede", "herzele", "haaltert"],
    faq: [
      {
        q: "Hoeveel toestellen heb ik nodig voor een vrijstaande woning?",
        a: "Voor een gelijkvloers van 120 tot 150 m² rekenen we doorgaans op twee drogers met een ventilator per droogzone, en vaak een derde voor de verdieping. De Calculator rekent op volume in kubieke meter, niet op oppervlakte.",
      },
      {
        q: "Waarom vraagt de Calculator naar volume en niet naar oppervlakte?",
        a: "Omdat een droger lucht droogt. Een open leefruimte met een plafond van drie meter vijftig bevat anderhalf keer zoveel lucht als dezelfde oppervlakte onder een gewoon plafond, en heeft dus meer capaciteit nodig. Rekenen op vierkante meters zet u in dat geval te laag in.",
      },
      {
        q: "Wat als het vriest tijdens de droging?",
        a: "Dan verwarmen we mee. In een onverwarmde ruwbouw zetten we een elektrische kachel bij de droger, of we gebruiken meteen een adsorptiedroger die ook bij lage temperatuur doorwerkt. De kachel vraagt 400 V.",
      },
      {
        q: "Betaal ik een kilometerkost?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket. De rit telt mee in onze planning, niet in uw factuur.",
      },
      {
        q: "Hoe snel staan jullie in Erpe-Mere?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfenveertig minuten en we plannen de Denderstreek in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "lede",
    title: "Bouwdroger huren in Lede | Vernast",
    description:
      "Bouwdroger huren in Lede, Oordegem en Smetlede: dorpskernen en nieuwbouw op akkerland. Geleverd, geplaatst en opgehaald.",
    h1: "Bouwdroger huren in Lede",
    kicker: "Denderstreek · dorpen op akkerland",
    rit: { afstand: "circa 48 km", tijd: "ongeveer vijfenveertig minuten" },
    intro: [
      "Lede ligt **tussen Aalst en Wetteren**, met Oordegem, Smetlede, Wanzele en Impe erbij: kleine kernen in open akkerland. De gemeente groeit, en dat gebeurt vooral **in verkavelingen aan de rand van die kernen**.",
      "Daarnaast is er **renovatie in de oude kernen**: dorpswoningen met massieve muren, een vloer op volle grond en soms een gewelfde kelder onder de voorkamer.",
    ],
    bouw: {
      kop: "Verkavelingen aan de rand, renovatie in de kern",
      alineas: [
        "In een verkaveling gaat het om **chape van een volledig gelijkvloers**, en dat is voorspelbaar werk: vijf tot tien liter per dag per honderd vierkante meter, twee à drie weken met droger en ventilator in plaats van vijf à zeven zonder. De technieker meet bij de ophaling of de **restvochtigheid** laag genoeg is voor uw vloerder.",
        "In de kern is het trager. **Massieve muren geven hun vocht traag af**, en tegen het oppervlak vormt zich een verzadigd luchtlaagje dat verdere droging afremt. Een ventilator haalt dat weg. Reken bij massief werk op **anderhalf tot twee keer de droogtijd** van een moderne wand.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium als standaard: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "**Bij massieve muren een voorwaarde**, bij een chape een versneller: hij blaast de verzadigde luchtlaag weg." },
      { key: "ttk170", waarom: "Voor één kamer, een badkamer of een traphal: 50 liter per dag en 0,75 kW op een gewoon stopcontact." },
      { key: "revolution", waarom: "Voor een gewelfde kelder die niet te verwarmen is: de adsorptiedroger blijft ook bij lage temperatuur vocht opnemen." },
    ],
    levering: {
      kop: "Leveren in Lede: binnen 24 uur, in de Denderronde",
      alinea:
        "Een vijfenveertigtal minuten rijden. U krijgt een tijdslot en een sms een halfuur vooraf. De technieker plaatst de toestellen **per droogzone**, legt de afvoer naar een putje en stelt de hygrostaat in op een streefwaarde.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfenveertig minuten**. Voor één los toestel kan dat lonen. Voor een pakket is leveren beter: de rit en de vochtmeting zitten al in de prijs.",
    },
    buren: ["aalst", "erpe-mere", "wichelen", "wetteren"],
    faq: [
      {
        q: "Waarom droogt een oude dorpswoning trager?",
        a: "Omdat het vocht uit de kern van een massieve muur naar buiten moet, en omdat zich tegen het oppervlak een verzadigd luchtlaagje vormt dat verdere droging afremt. Een ventilator haalt dat weg. Reken op anderhalf tot twee keer de droogtijd van een moderne wand.",
      },
      {
        q: "Hoe weet ik of de chape droog genoeg is?",
        a: "Door te meten, niet door te wachten. Onze technieker meet de restvochtigheid bij de ophaling en u krijgt die meting op papier, zodat uw vloerder weet waar hij aan toe is. Is het nog te hoog, dan blijft het pakket staan.",
      },
      {
        q: "Moet ik het reservoir legen?",
        a: "Nee. Onze toestellen zijn pompklaar: de technieker legt de afvoerslang naar een putje of een gootsteen. Een reservoir dat volloopt zet het toestel stil, en dan verliest u een nacht droogtijd.",
      },
      {
        q: "Zit er een waarborg op?",
        a: "Nee. Er komt geen waarborg bij, en levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket.",
      },
      {
        q: "Hoe snel staan jullie in Lede?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfenveertig minuten en we plannen de Denderstreek in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "ninove",
    title: "Bouwdroger huren in Ninove | Vernast",
    description:
      "Bouwdroger huren in Ninove, Meerbeke en Denderwindeke: de Dender die buiten haar oevers kan komen, en nieuwbouw errond.",
    h1: "Bouwdroger huren in Ninove",
    kicker: "Denderstreek · aan de Dender",
    rit: { afstand: "circa 55 km", tijd: "ongeveer vijftig minuten" },
    intro: [
      "Ninove ligt **aan de Dender**, en die rivier is hier meer dan een decor: bij extreme neerslag **komt ze buiten haar oevers**, en dan staat het water in kelders en op gelijkvloersen in de laagste straten.",
      "Daarnaast is dit gewoon een gemeente waar veel gebouwd wordt: in Outer, Okegem, Meerbeke, Denderwindeke en Appelterre staat **open en halfopen nieuwbouw** waar de chape van een volledig gelijkvloers moet drogen.",
    ],
    bouw: {
      kop: "Waterschade in de laagste straten, en nieuwbouw errond",
      alineas: [
        "Na hoogwater is **snelheid alles**. Hoe langer water in een vloeropbouw en achter een plint staat, hoe groter de kans op schimmel en op isolatie die haar waarde verliest. We zetten dan **meer capaciteit in dan strikt nodig** en altijd luchtbeweging erbij, want water kruipt onder vloeren en achter plinten waar een droger alleen niet aan komt. Zet plinten los en haal wat nat is uit de ruimte voor we komen.",
        "Op de nieuwbouwwerven errond gaat het om **gewoon bouwvocht**: een chape van vijf centimeter is met droger en ventilator in twee à drie weken klaar voor de vloerder, tegenover vijf à zeven weken zonder hulp.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Bij waterschade**: 110 liter per dag, bereik tot ongeveer 600 m³. Hoe sneller het water eruit is, hoe minder er stuk gaat." },
      { key: "ttv4500", waarom: "Water kruipt onder vloeren en achter plinten. Zonder luchtbeweging droogt dat niet, met deze ventilator wel." },
      { key: "ttk350", waarom: "De Medium voor een chape of een renovatie: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "revolution", waarom: "**Voor de kelder die niet te verwarmen is**: de adsorptiedroger blijft ook bij lage temperatuur vocht opnemen." },
    ],
    levering: {
      kop: "Leveren in Ninove: bij waterschade zo snel als het kan",
      alinea:
        "Een vijftigtal minuten rijden. **Bij waterschade bellen we u terug in plaats van u een formulier te laten afwachten**, want een dag vroeger drogen is hier het verschil tussen een vloer die blijft en een vloer die eruit moet. De technieker meet ter plaatse hoeveel capaciteit nodig is.",
    },
    afhalen: {
      kop: "Afhalen kan, maar niet bij waterschade",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijftig minuten**. Bij waterschade is dat precies het uur dat u niet hebt: dan leveren wij. Voor één los toestel bij een gewone renovatie kan afhalen wel lonen.",
    },
    buren: ["denderleeuw", "haaltert", "geraardsbergen", "roosdaal"],
    faq: [
      {
        q: "Mijn kelder is ondergelopen. Wat doe ik eerst?",
        a: "Eerst het staande water weg met een dompelpomp, dan zo snel mogelijk drogen. Haal wat nat is uit de ruimte, zet plinten los zodat de holle ruimte erachter kan drogen, en bel ons. Hoe langer water in de vloeropbouw staat, hoe groter de kans op schimmel.",
      },
      {
        q: "Dekt mijn verzekering de huur van een bouwdroger?",
        a: "Bij waterschade meestal wel, als onderdeel van de schadebeperking. Wij geven u een factuur met de vochtmetingen erbij, en dat is precies wat een expert vraagt. Vraag het na bij uw verzekeraar voor u boekt.",
      },
      {
        q: "Hoe lang duurt het drogen na een overstroming?",
        a: "Voor een kelder of een gelijkvloers reken op twee tot vier weken, afhankelijk van hoe lang het water er stond en van de vloeropbouw. Een zwevende vloer op isolatie doet er langer over, want het water zit onder de afwerking.",
      },
      {
        q: "Kunnen jullie dezelfde dag komen?",
        a: "Bij waterschade proberen we dat, en bellen we u terug om te plannen. De rit naar Ninove duurt ongeveer vijftig minuten, dus dezelfde dag lukt als u ons in de voormiddag bereikt.",
      },
      {
        q: "En voor een gewone nieuwbouwwerf?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijftig minuten en we plannen de Denderstreek in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "geraardsbergen",
    title: "Bouwdroger huren in Geraardsbergen | Vernast",
    description:
      "Bouwdroger huren in Geraardsbergen, Moerbeke en Viane: steile stadskern aan de Dender, met hoogwater onderaan. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Geraardsbergen",
    kicker: "Denderstreek · steile kern aan de Dender",
    rit: { afstand: "circa 65 km", tijd: "ongeveer een uur" },
    intro: [
      "Geraardsbergen ligt **tegen een heuvel met de Dender aan de voet**, en dat verdeelt de stad in twee soorten werven. **Onderaan**, in de straten langs de rivier, gaat het bij extreme neerslag om water dat er niet hoort te zijn. **Bovenaan**, op de Oudenberg en richting Moerbeke en Viane, om renovatie van oude woningen met massieve muren.",
      "Het is onze **verste halte in de Denderstreek**: ongeveer een uur rijden. Boekt u voor de middag, dan staat het doorgaans de volgende werkdag.",
    ],
    bouw: {
      kop: "Hoogwater onderaan, massief werk bovenaan",
      alineas: [
        "In de laagste straten komt de **Dender bij extreme neerslag tot in de kelders**. Na hoogwater is snelheid alles: hoe langer water in een vloeropbouw en achter een plint staat, hoe groter de kans op schimmel en op isolatie die haar waarde verliest. We zetten dan meer capaciteit in dan strikt nodig, met **luchtbeweging erbij**.",
        "Hogerop staan **oude stadswoningen en hoeves met massieve muren** van veertig centimeter. Die geven hun vocht traag af, en tegen het oppervlak vormt zich een verzadigd luchtlaagje dat verdere droging afremt. Een ventilator haalt dat weg; zonder hem staat de droger lucht te drogen die al droog is.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Bij waterschade onderaan**: 110 liter per dag, bereik tot ongeveer 600 m³. Hoe sneller het water eruit is, hoe minder er stuk gaat." },
      { key: "ttv4500", waarom: "Bij massieve muren een voorwaarde, bij waterschade onmisbaar: hij blaast de verzadigde luchtlaag weg en komt onder vloeren." },
      { key: "ttk350", waarom: "De Medium bij renovatie: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "revolution", waarom: "**Voor de kelder of de gewelfde ruimte** die niet te verwarmen is: de adsorptiedroger werkt ook onder 15 °C door." },
    ],
    levering: {
      kop: "Leveren in Geraardsbergen: de verste halte van de Denderronde",
      alinea:
        "Ongeveer een uur rijden, en daarmee is dit de verste halte van onze Denderronde. **Boekt u voor de middag, dan staat het doorgaans de volgende werkdag.** Staat uw woning in een steile straat waar de bestelwagen niet voor de deur kan, zeg dat dan bij de reservatie.",
    },
    afhalen: {
      kop: "Afhalen loont hier niet",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer een uur, dus twee uur heen en terug**. Dat weegt niet op tegen de korting op één toestel. **Vanuit Geraardsbergen raden we afhalen af en leveren we gewoon**; de rit zit al in de prijs van het pakket.",
    },
    buren: ["ninove", "lierde", "brakel", "herzele"],
    faq: [
      {
        q: "Mijn kelder is ondergelopen. Wat doe ik eerst?",
        a: "Eerst het staande water weg met een dompelpomp, dan zo snel mogelijk drogen. Haal wat nat is uit de ruimte, zet plinten los zodat de holle ruimte erachter kan drogen, en bel ons. Hoe langer water in de vloeropbouw staat, hoe groter de kans op schimmel.",
      },
      {
        q: "Waarom droogt een oude stadswoning zo traag?",
        a: "Omdat het vocht uit de kern van veertig centimeter baksteen naar buiten moet. Reken op anderhalf tot twee keer de droogtijd van een moderne wand, en altijd met een ventilator erbij om de verzadigde luchtlaag tegen het muuroppervlak weg te halen.",
      },
      {
        q: "Hoe snel staan jullie in Geraardsbergen?",
        a: "Binnen 24 uur na uw boeking, maar dit is de verste halte van onze Denderronde. Boekt u voor de middag, dan staat het doorgaans de volgende werkdag. Bij waterschade bellen we u terug om sneller te plannen.",
      },
      {
        q: "Is afhalen vanuit Geraardsbergen de moeite?",
        a: "Nee, en dat zeggen we liever eerlijk: u bent twee uur onderweg voor een toestel van 30 kg. De levering zit al in de prijs van het droogpakket, en de technieker plaatst alles en meet de vochtigheid.",
      },
      {
        q: "Betaal ik meer omdat ik verder woon?",
        a: "Nee. De prijs van het droogpakket is dezelfde in heel ons werkgebied. De rit telt mee in onze planning, niet in uw factuur.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "herzele",
    title: "Bouwdroger huren in Herzele | Vernast",
    description:
      "Bouwdroger huren in Herzele, Sint-Lievens-Esse en Ressegem: dorpen op de rand van de Vlaamse Ardennen. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Herzele",
    kicker: "Denderstreek · op de rand van de heuvels",
    rit: { afstand: "circa 58 km", tijd: "ongeveer vijftig minuten" },
    intro: [
      "Herzele ligt **waar de Denderstreek overgaat in de Vlaamse Ardennen**, met Sint-Lievens-Esse, Ressegem, Steenhuize-Wijnhuize, Woubrechtegem, Borsbeke en Hillegem errond.",
      "Dat betekent **hellend terrein en zandleem**, en bebouwing die ouder is dan in de verkavelingen van de vlakte: dorpswoningen en hoeves met **dikke massieve muren** die in renovatie gaan.",
    ],
    bouw: {
      kop: "Dorpswoningen en hoeves op hellend terrein",
      alineas: [
        "Een massieve muur van veertig centimeter **geeft zijn vocht traag af**, en tegen het oppervlak vormt zich een verzadigd luchtlaagje dat als een deken werkt: zolang dat blijft staan, droogt de muur niet verder, hoe hard de droger ook werkt. **Een ventilator haalt dat laagje weg**, en daarom staat er hier bijna altijd een bij.",
        "Op **hellend terrein** komt er iets bij: een woning die in de helling gebouwd is, heeft aan één zijde grond tegen de muur. Daar zit het vocht het langst, en soms gaat het niet om bouwvocht maar om **water dat van de helling tegen de muur drukt**. Onze technieker meet dat, en zegt eerlijk dat drogen dan het symptoom aanpakt en niet de oorzaak.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium als standaard bij renovatie: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "**Onmisbaar bij massieve muren**: hij blaast de verzadigde luchtlaag tegen het muuroppervlak weg, en pas dan droogt de muur verder." },
      { key: "revolution", waarom: "**Voor de kelder in de helling**: koud en vochtig tegelijk, en daar werkt een adsorptiedroger door waar een condensdroger stilvalt." },
      { key: "ttk650", waarom: "Voor een hoeve met grote, hoge volumes: 110 liter per dag en bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Herzele: binnen 24 uur, in de Denderronde",
      alinea:
        "Een vijftigtal minuten rijden. U krijgt een tijdslot en een sms een halfuur vooraf. Bij een hoeve vragen we **vooraf het volume in kubieke meter** en of de ruimte dicht te krijgen is, want een droger tegen een open poort werkt tegen de buitenlucht in.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijftig minuten**. Voor een volledig pakket is leveren bijna altijd beter: bij massief werk hangt het resultaat af van waar de toestellen en de ventilatoren staan.",
    },
    buren: ["sint-lievens-houtem", "zottegem", "erpe-mere", "geraardsbergen"],
    faq: [
      {
        q: "Waarom droogt een oude muur zo veel trager?",
        a: "Omdat het vocht uit de kern naar buiten moet, door veertig centimeter baksteen, en omdat zich tegen het oppervlak een verzadigd luchtlaagje vormt dat verdere droging afremt. Een ventilator haalt dat weg. Reken bij massieve muren op anderhalf tot twee keer de droogtijd van een moderne wand.",
      },
      {
        q: "Mijn woning staat in de helling en één muur blijft vochtig. Wat nu?",
        a: "Dan drukt er waarschijnlijk water van de helling tegen die muur. Een droger houdt de ruimte bruikbaar, maar hij stopt die aanvoer niet. De duurzame oplossing is drainage aan de buitenzijde. We zeggen het eerlijk als drogen hier alleen symptomen aanpakt.",
      },
      {
        q: "Kunnen jullie een schuur of een stal drogen?",
        a: "Ja, als ze dicht te krijgen is. Geef vooraf het volume door, de vloeropbouw en of de poorten kunnen sluiten. Is de ruimte niet te verwarmen, dan zetten we een adsorptiedroger in.",
      },
      {
        q: "Betaal ik een kilometerkost?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket.",
      },
      {
        q: "Hoe snel staan jullie in Herzele?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijftig minuten en we plannen de Denderstreek in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "sint-lievens-houtem",
    title: "Bouwdroger huren in Sint-Lievens-Houtem | Vernast",
    description:
      "Bouwdroger huren in Sint-Lievens-Houtem, Vlierzele en Bavegem: hoeves en dorpswoningen op zandleem. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Sint-Lievens-Houtem",
    kicker: "Denderstreek · hoeves op zandleem",
    rit: { afstand: "circa 57 km", tijd: "ongeveer vijftig minuten" },
    intro: [
      "Sint-Lievens-Houtem is klein en landelijk gebleven, met Vlierzele, Bavegem, Letterhoutem, Zonnegem en Woubrechtegem errond. De bodem is **zandleem**, en die houdt water langer vast dan zand.",
      "Wat we hier drogen is vooral **renovatie van hoeves en dorpswoningen**: een vloer die opengebroken is, nieuw pleisterwerk, en soms een stal of een schuur die herbestemd wordt tot woonruimte.",
    ],
    bouw: {
      kop: "Hoeves in herbestemming, en dorpswoningen in renovatie",
      alineas: [
        "Een stal of een schuur die **woonruimte wordt** is een groot, hoog en meestal onverwarmd volume. Wij rekenen op **volume in kubieke meter**, en een schuur met een nok van zes meter telt daarin zwaarder dan haar vloeroppervlak suggereert. Daarbij hoort **luchtbeweging over de volle lengte**, want droge lucht blijft anders hangen waar het toestel staat.",
        "Op zandleem **blijft water langer in de ondergrond** dan op zand. Een hoeve zonder waterkering in de muurvoet zuigt dat op via de baksteen, en binnen komt het terug als een vochtband onderaan de muur, vaak met een witte zoutrand. Dat is geen bouwvocht; **de technieker meet het verschil** bij de levering.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Voor de schuur of de stal in herbestemming**: 110 liter per dag en een bereik tot ongeveer 600 m³." },
      { key: "ttv4500", waarom: "Op een groot volume is luchtbeweging over de volle lengte de voorwaarde om overal even droog te krijgen." },
      { key: "ttk350", waarom: "De Medium voor een dorpswoning of een gelijkvloers: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "teddh30", waarom: "Voor een onverwarmde schuur in de winter: onder 15 °C verliest een condensdroger het grootste deel van zijn rendement. Vraagt 400 V." },
    ],
    levering: {
      kop: "Leveren in Sint-Lievens-Houtem: binnen 24 uur, in een ronde",
      alinea:
        "Een vijftigtal minuten rijden. U krijgt een tijdslot en een sms een halfuur vooraf. Bij een schuur of een stal vragen we **vooraf het volume in kubieke meter** en of de ruimte dicht te krijgen is, want een droger tegen een open poort werkt tegen de buitenlucht in.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijftig minuten**. Voor een volledig pakket is leveren bijna altijd beter: bij een schuur hangt het resultaat af van waar de toestellen en de ventilatoren staan.",
    },
    buren: ["herzele", "oosterzele", "zottegem", "wetteren"],
    faq: [
      {
        q: "Kunnen jullie een schuur drogen die woonruimte wordt?",
        a: "Ja, dat doen we hier vaak. Geef vooraf het volume in kubieke meter door, de vloeropbouw en of de poorten en verluchting kunnen sluiten. Is de ruimte niet te verwarmen, dan zetten we een adsorptiedroger in die ook bij lage temperatuur doorwerkt.",
      },
      {
        q: "Mijn muren zijn onderaan vochtig met een witte rand. Is dat bouwvocht?",
        a: "Dat is bijna altijd opstijgend vocht: een band tot ongeveer een halve meter hoog, een witte zoutrand en afbladderende verf. Bouwvocht zit gelijkmatig in de ruimte en verdwijnt naarmate het droogt. Onze technieker meet het bij de levering.",
      },
      {
        q: "Hoeveel toestellen voor een schuur van 300 m³?",
        a: "Doorgaans één toestel met voldoende capaciteit plus luchtbeweging over de volle lengte, en in de winter een kachel erbij. Eén droger in een hoek droogt die hoek; het gaat om verdeling even veel als om capaciteit.",
      },
      {
        q: "Betaal ik een kilometerkost?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket.",
      },
      {
        q: "Hoe snel staan jullie hier?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijftig minuten en we plannen de regio in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "eeklo",
    title: "Bouwdroger huren in Eeklo | Vernast",
    description:
      "Bouwdroger huren in Eeklo: stadskern op zandgrond en nieuwbouw aan de rand, in het hart van het Meetjesland. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Eeklo",
    kicker: "Meetjesland · stadskern op zand",
    rit: { afstand: "circa 65 km", tijd: "ongeveer vijfenvijftig minuten" },
    intro: [
      "Eeklo is **de stad van het Meetjesland**: een compacte kern met rijhuizen en winkelpanden, en daarrond verkavelingen op **zandgrond**.",
      "Dat zand scheelt: het draineert goed, dus **kelders zijn hier minder vaak het probleem** dan in de polder een kwartier verderop. Wat blijft is bouwvocht uit renovatie en nieuwbouw, en dat verdwijnt definitief.",
    ],
    bouw: {
      kop: "Rijhuizen en winkelpanden in de kern, verkavelingen errond",
      alineas: [
        "Een **winkelpand of een horecazaak** in de kern heeft een harde deadline: de heropening staat gepland, en een gietvloer of tegelwerk op een te natte chape komt los. Daar zetten we **meer capaciteit in één keer in** in plaats van langer te drogen met één toestel, want minder huurweken is doorgaans ook goedkoper.",
        "In de verkavelingen gaat het om **chape van een volledig gelijkvloers**: vijf tot tien liter water per dag per honderd vierkante meter in de eerste weken. Met droger en ventilator samen is dat **in een tiental dagen beloopbaar en in twee à drie weken klaar voor de vloerder**.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium als standaard: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttk650", waarom: "**Voor een winkelpand of een groot gelijkvloers**: 110 liter per dag en een bereik tot ongeveer 600 m³." },
      { key: "ttv4500", waarom: "Bij een chape verdubbelt luchtbeweging vaak de snelheid: hij blaast de verzadigde laag vlak boven de vloer weg." },
      { key: "ttk170", waarom: "Voor één kamer, een badkamer of een appartement: 50 liter per dag en 0,75 kW op een gewoon stopcontact." },
    ],
    levering: {
      kop: "Leveren in Eeklo: binnen 24 uur, in de Meetjeslandronde",
      alinea:
        "Een vijfenvijftigtal minuten rijden, en we plannen het Meetjesland in één ronde. **Hebt u een heropeningsdatum voor een pand, geef die dan bij de reservatie**: dan rekenen we terug hoeveel capaciteit er nodig is om die te halen.",
    },
    afhalen: {
      kop: "Afhalen kan, maar leveren is hier logischer",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfenvijftig minuten**. Voor één los toestel kan dat lonen. Voor een pakket is leveren beter: de rit en de vochtmeting zitten al in de prijs.",
    },
    buren: ["kaprijke", "lievegem", "maldegem", "sint-laureins"],
    faq: [
      {
        q: "Ik heb een vaste heropeningsdatum voor mijn pand. Kunnen jullie daarnaar werken?",
        a: "Ja, en dat is de goede manier om dit te plannen. Geef de datum en het volume door, dan rekenen we terug hoeveel toestellen er nodig zijn. Meer capaciteit in één keer is vaak goedkoper dan langer huren met te weinig.",
      },
      {
        q: "Hoe lang moet een chape drogen met een droger?",
        a: "Reken op een week per centimeter dikte zonder hulp, en met droger en ventilator ongeveer de helft. Een chape van vijf centimeter is dan in twee à drie weken klaar voor de vloerder. De technieker meet bij de ophaling.",
      },
      {
        q: "Is een kelder hier een probleem?",
        a: "Minder dan in de polder. Eeklo staat op zand, en zand draineert: het grondwater zakt weg in plaats van tegen de kelderwand te staan. Blijft een kelder hier toch vochtig, dan gaat het meestal om een gebrek aan ventilatie, en dat lost een droger wel op.",
      },
      {
        q: "Betaal ik een kilometerkost?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket. De rit telt mee in onze planning, niet in uw factuur.",
      },
      {
        q: "Hoe snel staan jullie in Eeklo?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfenvijftig minuten en we plannen het Meetjesland in één ronde, dus boekt u voor de middag, dan staat het doorgaans de volgende werkdag.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "maldegem",
    title: "Bouwdroger huren in Maldegem | Vernast",
    description:
      "Bouwdroger huren in Maldegem, Adegem en Kleit: ruime bebouwing op bosrijk zand tegen de grens. Geleverd, geplaatst en opgehaald.",
    h1: "Bouwdroger huren in Maldegem",
    kicker: "Meetjesland · bosrijk zand aan de grens",
    rit: { afstand: "circa 72 km", tijd: "ongeveer een uur" },
    intro: [
      "Maldegem ligt **tegen de Nederlandse grens**, bosrijk en ruim opgezet, met Adegem, Kleit en Middelburg erbij. De bodem is **zand**, behalve in het noorden waar de polder begint.",
      "De bebouwing is overwegend **vrijstaand en ruim**, vaak met een bijgebouw of een veranda die mee wordt afgewerkt. Dat zijn precies de ruimtes die tijdens de werken niet verwarmd worden.",
    ],
    bouw: {
      kop: "Vrijstaande woningen met bijgebouwen, op zand",
      alineas: [
        "Een vrijstaande woning heeft **meer capaciteit nodig dan haar vierkante meters suggereren**, want het gaat om volume. Een open leefruimte met een hoog plafond telt zwaarder dan dezelfde oppervlakte onder een gewoon plafond. Daarom rekent onze Calculator op **kubieke meter**, en zetten we per verdieping of per vleugel een eigen droogzone op.",
        "Veel werven hier bevatten een **bijgebouw, een veranda of een carport in afwerking**. Die ruimtes zijn tijdens de werken zelden verwarmd, en **onder 15 °C verliest een condensdroger het grootste deel van zijn rendement**. Dan gaat er een elektrische kachel mee, of meteen een adsorptiedroger die ook koud doorwerkt.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De standaard voor een nieuwbouwwoning: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttk650", waarom: "**Voor de grote open bebouwing**: 110 liter per dag en een bereik tot ongeveer 600 m³, één toestel per groot gelijkvloers." },
      { key: "teddh30", waarom: "**Voor het onverwarmde bijgebouw in de winter**: onder 15 °C zakt het rendement van elke condensdroger. Vraagt 400 V krachtstroom." },
      { key: "ttv4500", waarom: "Bij een chape verdubbelt luchtbeweging vaak de snelheid, en in een ruim volume voorkomt ze dat één hoek achterblijft." },
    ],
    levering: {
      kop: "Leveren in Maldegem: binnen 24 uur, in de Meetjeslandronde",
      alinea:
        "Ongeveer een uur rijden. U krijgt een tijdslot en een sms een halfuur vooraf. Op een winterwerf controleert de technieker eerst of **de werfkast 400 V levert** voor de kachel, want zonder bijverwarming haalt een condensdroger daar te weinig rendement.",
    },
    afhalen: {
      kop: "Afhalen loont hier niet",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer een uur, dus twee uur heen en terug**. Dat weegt niet op tegen de korting op één toestel. **Vanuit Maldegem raden we afhalen af en leveren we gewoon**; de rit zit al in de prijs van het pakket.",
    },
    buren: ["eeklo", "sint-laureins", "aalter", "kaprijke"],
    faq: [
      {
        q: "Hoeveel toestellen heb ik nodig voor een vrijstaande woning?",
        a: "Voor een gelijkvloers van 120 tot 150 m² rekenen we doorgaans op twee drogers met een ventilator per droogzone, en vaak een derde voor de verdieping of het bijgebouw. De Calculator rekent op volume in kubieke meter, niet op oppervlakte.",
      },
      {
        q: "Wat als het vriest tijdens de droging?",
        a: "Dan verwarmen we mee. Onder 15 °C verliest een condensdroger het grootste deel van zijn rendement, dus in een onverwarmd bijgebouw zetten we er een elektrische kachel bij. Die vraagt 400 V krachtstroom; de technieker controleert dat bij de levering.",
      },
      {
        q: "Kunnen jullie een veranda of een carport mee drogen?",
        a: "Ja, als de ruimte dicht te krijgen is. Een droger met de deur naar buiten open droogt de buitenlucht, en die is onuitputtelijk. Geef bij de reservatie door welke ruimtes mee moeten, dan brengt de technieker genoeg capaciteit.",
      },
      {
        q: "Is afhalen vanuit Maldegem de moeite?",
        a: "Nee, en dat zeggen we liever eerlijk: u bent twee uur onderweg voor een toestel van 30 kg. De levering zit al in de prijs van het droogpakket.",
      },
      {
        q: "Hoe snel staan jullie in Maldegem?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer een uur en we plannen het Meetjesland in één ronde, dus boekt u voor de middag, dan staat het doorgaans de volgende werkdag.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "aalter",
    title: "Bouwdroger huren in Aalter | Vernast",
    description:
      "Bouwdroger huren in Aalter en Knesselare: woningen en bedrijfshallen langs de E40, op zandgrond. Geleverd, geplaatst en opgehaald.",
    h1: "Bouwdroger huren in Aalter",
    kicker: "Meetjesland · langs de E40",
    rit: { afstand: "circa 72 km", tijd: "ongeveer een uur" },
    intro: [
      "Aalter groeide **langs de E40** en is sinds de fusie met Knesselare een van de uitgestrektste gemeenten van de streek, met Bellem, Lotenhulle en Poeke erbij.",
      "Die ligging bepaalt wat we hier drogen: naast woningen in verkavelingen vooral **bedrijfshallen en kantoorruimtes** op de zones langs de snelweg, waar een vloer klaar moet zijn voor de inrichter komt.",
    ],
    bouw: {
      kop: "Verkavelingen op zand, en hallen langs de snelweg",
      alineas: [
        "In een hal gaat het om **oppervlakte in plaats van om kamers**. Eén droger in een hoek droogt die hoek; op een vloer van duizend vierkante meter horen **meerdere toestellen verdeeld over de ruimte** en luchtbeweging over de volle lengte. We vragen vooraf het volume in kubieke meter en of de poorten kunnen sluiten, want een droger tegen een open poort werkt tegen de buitenlucht in.",
        "In de verkavelingen is het voorspelbaarder: **chape van een volledig gelijkvloers**, vijf tot tien liter per dag per honderd vierkante meter, en met droger en ventilator in twee à drie weken klaar voor de vloerder in plaats van vijf à zeven weken.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Voor de hal of de kantoorruimte**: 110 liter per dag en een bereik tot ongeveer 600 m³. Op een grote vloer zetten we er meerdere verdeeld." },
      { key: "ttv4500", waarom: "Op een grote vloer is luchtbeweging over de volle lengte de voorwaarde om overal even droog te krijgen, niet een extra." },
      { key: "ttk350", waarom: "De Medium voor een woning: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "teddh30", waarom: "Voor een onverwarmde hal in de winter: onder 15 °C zakt het rendement van elke condensdroger. Vraagt 400 V krachtstroom." },
    ],
    levering: {
      kop: "Leveren in Aalter: binnen 24 uur, met een datum om naar terug te rekenen",
      alinea:
        "Ongeveer een uur rijden. **Geef bij een bedrijfsruimte de datum van uw inrichter door**, dan rekenen we terug hoeveel capaciteit er nodig is om die te halen, in plaats van u achteraf te laten verlengen. We vragen ook het volume en de beschikbare stroom.",
    },
    afhalen: {
      kop: "Afhalen loont hier niet",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer een uur, dus twee uur heen en terug**. Voor een hal is dat nooit de bedoeling: daar gaan meerdere toestellen in één rit naartoe, en die levering zit al in de prijs.",
    },
    buren: ["maldegem", "lievegem", "deinze", "eeklo"],
    faq: [
      {
        q: "Hoeveel toestellen voor een hal van 1000 m²?",
        a: "Dat hangt vooral af van de hoogte, want we rekenen op volume. Reken ruwweg op drie tot vijf drogers met luchtbeweging over de volle lengte, en in de winter een kachel erbij. Geef ons het volume in kubieke meter en de datum waarop de vloer klaar moet zijn.",
      },
      {
        q: "Moeten de poorten dicht tijdens het drogen?",
        a: "Ja. Een droger tegen een open poort droogt de buitenlucht, en die is onuitputtelijk. Kunnen de poorten niet sluiten, dan heeft drogen geen zin en zeggen we dat liever vooraf dan achteraf.",
      },
      {
        q: "Hoe droog moet een chape zijn voor een gietvloer?",
        a: "Strenger dan voor tegels. Uw vloerder bepaalt de grens; wij drogen tot een gemeten waarde en niet tot een datum. De technieker meet bij de ophaling en u krijgt die meting op papier.",
      },
      {
        q: "Hebben jullie 400 V nodig?",
        a: "Alleen voor de elektrische kachel, die we in de winter bij een onverwarmde ruimte inzetten. De drogers en de ventilatoren draaien op 230 V. De technieker controleert de kast bij de levering.",
      },
      {
        q: "Hoe snel staan jullie in Aalter?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer een uur en we plannen het Meetjesland in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "assenede",
    title: "Bouwdroger huren in Assenede | Vernast",
    description:
      "Bouwdroger huren in Assenede, Bassevelde en Boekhoute: polderklei en kreken tegen de grens, met kelders die terugkomen.",
    h1: "Bouwdroger huren in Assenede",
    kicker: "Meetjesland · polder en kreken",
    rit: { afstand: "circa 55 km", tijd: "ongeveer vijftig minuten" },
    intro: [
      "Assenede is **polder**: laaggelegen land op klei, met kreken tussen de dorpen Bassevelde, Boekhoute en Oosteeklo en de Nederlandse grens vlak erachter.",
      "Dat maakt het hier wezenlijk anders dan het zand van Eeklo of Maldegem. **Kleigrond houdt water vast**, het grondwater staat hoog, en een kelder of een vloer op volle grond blijft zelden helemaal droog.",
    ],
    bouw: {
      kop: "Polderklei, kreken en woningen zonder waterkering",
      alineas: [
        "In de polder **houdt de kleigrond water vast**. Een woning of een hoeve zonder waterkering in de muurvoet zuigt dat op via de baksteen, en binnen komt het terug als een vochtband onderaan de muur, vaak met een witte zoutrand. Dat gaat niet vanzelf weg: **drogen haalt het uit de ruimte, maar de bron blijft**. Onze technieker meet het verschil bij de levering en zegt het eerlijk.",
        "Gaat het wél om bouwvocht uit een renovatie, dan verdwijnt dat definitief. Dikke massieve muren geven hun vocht traag af, dus staat er hier bijna altijd **een ventilator bij de droger**: die blaast de verzadigde luchtlaag langs het muuroppervlak weg, en pas dan droogt de muur verder.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium als standaard: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "**Bij massieve muren een voorwaarde**: hij blaast de verzadigde luchtlaag tegen het oppervlak weg, en komt onder vloeren en achter plinten." },
      { key: "revolution", waarom: "**Voor een kelder op kleigrond**: koud en vochtig tegelijk, en daar werkt een adsorptiedroger door waar een condensdroger stilvalt." },
      { key: "ttk650", waarom: "Voor een hoeve of een groot gelijkvloers: 110 liter per dag, bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Assenede: binnen 24 uur, geplaatst en gemeten",
      alinea:
        "Een vijftigtal minuten rijden. U krijgt een tijdslot en een sms een halfuur vooraf. In de polder **meet de technieker eerst** of het om bouwvocht of om grondwater gaat, want dat bepaalt of drogen hier een oplossing of een pleister is.",
    },
    afhalen: {
      kop: "Afhalen kan, maar leveren is hier logischer",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijftig minuten**. Voor één los toestel kan dat lonen. Voor een pakket is leveren beter: de vochtmeting hoort erbij en de rit zit al in de prijs.",
    },
    buren: ["zelzate", "sint-laureins", "kaprijke", "evergem"],
    faq: [
      {
        q: "Mijn muren blijven onderaan vochtig. Is dat bouwvocht?",
        a: "Op kleigrond zonder waterkering is dat bijna altijd opstijgend vocht: een band tot ongeveer een halve meter hoog, vaak met een witte zoutrand en afbladderende verf. Bouwvocht zit gelijkmatig in de ruimte en verdwijnt naarmate het droogt. Onze technieker meet het bij de levering.",
      },
      {
        q: "Helpt een bouwdroger tegen opstijgend vocht?",
        a: "Hij houdt de ruimte bruikbaar en voorkomt schimmel, maar hij stopt de aanvoer niet. De duurzame oplossing is een waterkering in de muurvoet, bijvoorbeeld door injectie. Wij zeggen het eerlijk als drogen hier alleen symptomen aanpakt.",
      },
      {
        q: "Kunnen jullie een hoeve of een schuur drogen?",
        a: "Ja. We vragen vooraf het volume in kubieke meter, de vloeropbouw en of de ruimte dicht te krijgen is: een droger tegen een open poort werkt tegen de buitenlucht in. Is ze niet te verwarmen, dan zetten we een adsorptiedroger in.",
      },
      {
        q: "Betaal ik een kilometerkost?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket.",
      },
      {
        q: "Hoe snel staan jullie in Assenede?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijftig minuten en we plannen het Meetjesland in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "evergem",
    title: "Bouwdroger huren in Evergem | Vernast",
    description:
      "Bouwdroger huren in Evergem, Sleidinge en Ertvelde: woonkernen naast de Gentse kanaalzone. Geleverd, geplaatst en opgehaald.",
    h1: "Bouwdroger huren in Evergem",
    kicker: "Meetjesland · naast de kanaalzone",
    rit: { afstand: "circa 55 km", tijd: "ongeveer vijftig minuten" },
    intro: [
      "Evergem ligt **tussen de Gentse kanaalzone en het open Meetjesland**, met Sleidinge, Ertvelde, Doornzele en Kluizen erbij. Woonkernen aan de ene kant, industrie aan de andere.",
      "Dat levert twee soorten werven op: **woningen en verkavelingen** in de kernen, en **bedrijfsruimtes en loodsen** aan de kanaalkant waar een vloer moet drogen voor de inrichting komt.",
    ],
    bouw: {
      kop: "Woonkernen en verkavelingen, en bedrijfsruimtes aan het kanaal",
      alineas: [
        "In de kernen gaat het om **chape en pleisterwerk**: vijf tot tien liter water per dag per honderd vierkante meter chape in de eerste weken, en dat moet eruit voor de vloer komt. Met droger en ventilator samen is een gelijkvloers **in een tiental dagen beloopbaar en in twee à drie weken klaar voor de vloerder**.",
        "Aan de kanaalkant hangt er **een datum aan**: de inrichter staat gepland, en een gietvloer op een te natte chape gaat loskomen. Daar drogen we tot **een gemeten waarde** en zetten we meerdere toestellen in, zodat het volume in één keer mee gaat in plaats van zone na zone.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium voor een woning: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttk650", waarom: "**Voor de bedrijfsruimte of de loods**: 110 liter per dag en een bereik tot ongeveer 600 m³." },
      { key: "ttv4500", waarom: "Bij een chape verdubbelt luchtbeweging vaak de snelheid; op een grote vloer voorkomt ze dat één hoek achterblijft." },
      { key: "teddh30", waarom: "Voor een onverwarmde ruimte in de winter: onder 15 °C zakt het rendement van elke condensdroger. Vraagt 400 V krachtstroom." },
    ],
    levering: {
      kop: "Leveren in Evergem: binnen 24 uur, in de Meetjeslandronde",
      alinea:
        "Een vijftigtal minuten rijden. U krijgt een tijdslot en een sms een halfuur vooraf. Op een bedrijfsruimte vragen we **vooraf het volume en de beschikbare stroom**, want een kachel vraagt 400 V en dat moet de kast kunnen leveren.",
    },
    afhalen: {
      kop: "Afhalen kan, maar leveren is hier logischer",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijftig minuten**. Voor één los toestel kan dat lonen. Voor een pakket zit de levering al in de prijs en plaatst de technieker alles meteen goed.",
    },
    buren: ["lievegem", "gent", "zelzate", "assenede"],
    faq: [
      {
        q: "Hoe snel kan een bedrijfsvloer droog zijn?",
        a: "Dat hangt af van de dikte en van hoeveel capaciteit er staat. Een chape van vijf centimeter doet zonder hulp vijf à zeven weken; met voldoende drogers en luchtbeweging halen we dat naar twee à drie weken. Geef ons de datum van uw inrichter, dan rekenen we terug.",
      },
      {
        q: "Kunnen jullie meerdere toestellen tegelijk leveren?",
        a: "Ja, en op een bedrijfsruimte is dat eerder regel dan uitzondering. Hoe meer capaciteit er in één keer staat, hoe korter de totale huurperiode, en dat is vaak goedkoper dan drie weken met één toestel.",
      },
      {
        q: "Hoe lang moet een chape drogen in een woning?",
        a: "Reken op een week per centimeter dikte zonder hulp, en met droger en ventilator ongeveer de helft. De technieker meet bij de ophaling of de restvochtigheid laag genoeg is voor uw vloerder.",
      },
      {
        q: "Betaal ik een kilometerkost?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket.",
      },
      {
        q: "Hoe snel staan jullie in Evergem?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijftig minuten en we plannen het Meetjesland in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "kaprijke",
    title: "Bouwdroger huren in Kaprijke | Vernast",
    description:
      "Bouwdroger huren in Kaprijke en Lembeke: kleine landelijke kernen op zand, met hoeves in renovatie. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Kaprijke",
    kicker: "Meetjesland · kleine kernen op zand",
    rit: { afstand: "circa 62 km", tijd: "ongeveer vijfenvijftig minuten" },
    intro: [
      "Kaprijke en Lembeke zijn **twee kleine kernen in open landbouwgebied**, op zandgrond, met de polder van Sint-Laureins aan de noordkant.",
      "Wat we hier drogen is bijna altijd **renovatie**: een hoeve die aangepakt wordt, een dorpswoning met een nieuwe vloer, een stal die herbestemd wordt. Nieuwbouw is er, maar minder dan in de grotere gemeenten errond.",
    ],
    bouw: {
      kop: "Hoeves en dorpswoningen in renovatie",
      alineas: [
        "Een hoeve in renovatie heeft **dikke massieve muren die hun vocht traag afgeven**. Tegen het oppervlak vormt zich een verzadigd luchtlaagje dat als een deken werkt: zolang dat blijft staan, droogt de muur niet verder, hoe hard de droger ook werkt. **Een ventilator haalt dat weg**, en daarom hoort die hier bij het pakket in plaats van erbij te worden verkocht.",
        "Een **stal of schuur in herbestemming** is een groot, hoog en meestal onverwarmd volume. Wij rekenen op volume in kubieke meter, en een schuur met een hoge nok telt zwaarder dan haar vloeroppervlak suggereert. Is de ruimte niet te verwarmen, dan gaat er een adsorptiedroger naartoe die ook bij lage temperatuur doorwerkt.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium als standaard bij renovatie: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "**Onmisbaar bij massieve muren**: hij blaast de verzadigde luchtlaag tegen het muuroppervlak weg, en pas dan droogt de muur verder." },
      { key: "ttk650", waarom: "Voor een schuur of een hoeve met grote, hoge volumes: 110 liter per dag en bereik tot ongeveer 600 m³." },
      { key: "revolution", waarom: "**Voor de onverwarmde schuur of kelder**: de adsorptiedroger blijft ook bij lage temperatuur vocht opnemen, waar een condensdroger stilvalt." },
    ],
    levering: {
      kop: "Leveren in Kaprijke: binnen 24 uur, in de Meetjeslandronde",
      alinea:
        "Een vijfenvijftigtal minuten rijden. U krijgt een tijdslot en een sms een halfuur vooraf. Bij een hoeve of een schuur vragen we **vooraf het volume in kubieke meter** en of de ruimte dicht te krijgen is, zodat de technieker met het juiste toestel vertrekt.",
    },
    afhalen: {
      kop: "Afhalen kan, maar leveren is hier logischer",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfenvijftig minuten**. Voor een volledig pakket is leveren bijna altijd beter: bij massief werk hangt het resultaat af van waar de toestellen en de ventilatoren staan.",
    },
    buren: ["eeklo", "sint-laureins", "assenede", "maldegem"],
    faq: [
      {
        q: "Waarom droogt een hoeve zo veel trager dan een nieuwbouw?",
        a: "Omdat het vocht uit de kern van een massieve muur naar buiten moet, door veertig centimeter baksteen, en omdat zich tegen het oppervlak een verzadigd luchtlaagje vormt. Reken op anderhalf tot twee keer de droogtijd van een moderne wand, en altijd met een ventilator erbij.",
      },
      {
        q: "Kunnen jullie een stal drogen die woonruimte wordt?",
        a: "Ja. Geef vooraf het volume in kubieke meter door, de vloeropbouw en of de poorten en verluchting kunnen sluiten. Is de ruimte niet te verwarmen, dan zetten we een adsorptiedroger in.",
      },
      {
        q: "Hoeveel toestellen heb ik nodig?",
        a: "Dat hangt van het volume af, niet van de oppervlakte. Gebruik de Calculator: u geeft het volume en de situatie in, en u krijgt meteen de samenstelling en de prijs van het pakket.",
      },
      {
        q: "Betaal ik een kilometerkost?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket.",
      },
      {
        q: "Hoe snel staan jullie in Kaprijke?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfenvijftig minuten en we plannen het Meetjesland in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "sint-laureins",
    title: "Bouwdroger huren in Sint-Laureins | Vernast",
    description:
      "Bouwdroger huren in Sint-Laureins en Watervliet: krekengebied op polderklei, met een hoge grondwaterstand. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Sint-Laureins",
    kicker: "Meetjesland · krekengebied aan de grens",
    rit: { afstand: "circa 65 km", tijd: "ongeveer vijfenvijftig minuten" },
    intro: [
      "Sint-Laureins is **het krekengebied**: smalle waterlopen door polderklei, met Watervliet, Waterland-Oudeman en Sint-Margriete tegen de Nederlandse grens. Het is de **meest landelijke gemeente van het Meetjesland**, en de natste.",
      "Hier staat het grondwater **vlak onder het maaiveld**, en dat bepaalt bijna alles wat we hier drogen: kelders, kruipruimtes en vloeren op volle grond.",
    ],
    bouw: {
      kop: "Polderklei en kreken, met het grondwater vlak onder de vloer",
      alineas: [
        "Met het grondwater **vlak onder het maaiveld** staat een kelder of een kruipruimte permanent in een vochtige omgeving. Zonder ventilatie blijft dat vocht hangen, en dan komt het via de vloeropbouw in de woning terecht. **Een droger lost de aanvoer niet op**, maar hij maakt de ruimte bruikbaar en voorkomt dat schimmel zich vastzet.",
        "Bij de woningen en hoeves zelf gaat het om **klei die water vasthoudt**. Zonder waterkering in de muurvoet zuigt de baksteen dat op, en binnen komt het terug als een vochtband onderaan de muur. Onze technieker **meet het verschil** tussen dat en bouwvocht bij de levering, en zegt eerlijk wat drogen hier wel en niet oplost.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**Het toestel voor dit gebied**: koude, vochtige kelders en kruipruimtes, waar een condensdroger stilvalt en een adsorptiedroger doorwerkt." },
      { key: "ttk350", waarom: "De Medium voor een woning of een gelijkvloers: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "Vocht kruipt onder vloeren en achter plinten. Zonder luchtbeweging droogt dat niet, met deze ventilator wel." },
      { key: "ttk650", waarom: "Voor een hoeve of een groot volume: 110 liter per dag, bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Sint-Laureins: binnen 24 uur, geplaatst en gemeten",
      alinea:
        "Een vijfenvijftigtal minuten rijden. U krijgt een tijdslot en een sms een halfuur vooraf. In dit gebied **meet de technieker eerst** of het om bouwvocht of om grondwater gaat, want dat bepaalt of drogen hier een oplossing is of een pleister.",
    },
    afhalen: {
      kop: "Afhalen loont hier niet",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfenvijftig minuten, dus bijna twee uur heen en terug**. Dat weegt niet op tegen de korting op één toestel. **Vanuit Sint-Laureins leveren we gewoon**; de rit en de vochtmeting zitten al in de prijs.",
    },
    buren: ["sint-gillis-waas", "kaprijke", "assenede", "eeklo", "maldegem"],
    faq: [
      {
        q: "Kan een bouwdroger een kruipruimte drogen?",
        a: "Hij kan de lucht erin droog maken, en dat helpt tegen schimmel en tegen vocht dat via de vloer naar boven komt. Maar zit het grondwater vlak onder het maaiveld, dan is permanente ventilatie van de kruipruimte de duurzame oplossing. Wij zeggen het eerlijk als drogen hier alleen symptomen aanpakt.",
      },
      {
        q: "Waarom een adsorptiedroger en geen gewone bouwdroger?",
        a: "Omdat een condensdroger lucht afkoelt om het water eruit te halen, en dat werkt slecht als de lucht al koud is. Onder 15 °C verliest hij het grootste deel van zijn rendement. Een adsorptiedroger bindt het vocht aan een droogwiel en blijft ook bij vijf graden doorwerken.",
      },
      {
        q: "Mijn muren blijven onderaan vochtig. Is dat bouwvocht?",
        a: "Op polderklei zonder waterkering is dat bijna altijd opstijgend vocht: een band tot ongeveer een halve meter hoog, vaak met een witte zoutrand. De vochtmeting bij de levering vertelt welke van de twee het is, en die zit in de prijs.",
      },
      {
        q: "Betaal ik meer omdat ik ver woon?",
        a: "Nee. De prijs van het droogpakket is dezelfde in heel ons werkgebied. De rit telt mee in onze planning, niet in uw factuur.",
      },
      {
        q: "Hoe snel staan jullie in Sint-Laureins?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfenvijftig minuten en we plannen het Meetjesland in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "lievegem",
    title: "Bouwdroger huren in Lievegem | Vernast",
    description:
      "Bouwdroger huren in Lievegem: Zomergem, Waarschoot en Lovendegem, met nieuwbouw en renovatie op zandgrond. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Lievegem",
    kicker: "Meetjesland · drie kernen op zand",
    rit: { afstand: "circa 63 km", tijd: "ongeveer vijfenvijftig minuten" },
    intro: [
      "Lievegem is **de fusie van Zomergem, Waarschoot en Lovendegem**, drie kernen op zandgrond tussen Gent en Eeklo, met Oostwinkel en Ronsele erbij.",
      "Drie kernen, drie keer hetzelfde soort werf: **verkavelingen aan de rand** waar de chape van een gelijkvloers moet drogen, en **renovatie in de oude kern** met massieve muren die hun vocht traag afgeven.",
    ],
    bouw: {
      kop: "Verkavelingen aan de rand, renovatie in de kernen",
      alineas: [
        "Op zand **draineert de ondergrond goed**, en dat scheelt: kelders zijn hier minder vaak het probleem dan in de polder een kwartier noordelijker. Wat blijft is het bouwvocht zelf, en dat is veel: **een nieuwbouwwoning bevat na de ruwbouw duizenden liters water**, in chape, in pleisterwerk en in de muren.",
        "In de oude kernen gaat het om **massief werk**. Een muur van veertig centimeter geeft zijn vocht traag af, en tegen het oppervlak vormt zich een verzadigd luchtlaagje dat verdere droging afremt. Een ventilator haalt dat weg, en zonder hem staat de droger lucht te drogen die al droog is.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De standaard voor een nieuwbouwwoning: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "Bij een chape verdubbelt luchtbeweging vaak de snelheid, en bij massieve muren is hij een voorwaarde." },
      { key: "ttk650", waarom: "Voor een groot gelijkvloers of een open leefruimte met een hoog plafond: 110 liter per dag, bereik tot ongeveer 600 m³." },
      { key: "teddh30", waarom: "Voor de onverwarmde ruwbouw in de winter: onder 15 °C verliest een condensdroger het grootste deel van zijn rendement. Vraagt 400 V." },
    ],
    levering: {
      kop: "Leveren in Lievegem: binnen 24 uur, in de Meetjeslandronde",
      alinea:
        "Een vijfenvijftigtal minuten rijden. U krijgt een tijdslot en een sms een halfuur vooraf. **Geef bij de reservatie door in welke kern u woont**, Zomergem, Waarschoot of Lovendegem, dan plant de technieker zijn ronde daarop.",
    },
    afhalen: {
      kop: "Afhalen kan, maar leveren is hier logischer",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfenvijftig minuten**. Voor één los toestel kan dat lonen. Voor een pakket is leveren beter: de rit en de vochtmeting zitten al in de prijs.",
    },
    buren: ["eeklo", "evergem", "aalter", "maldegem"],
    faq: [
      {
        q: "Hoeveel water zit er in een nieuwbouwwoning?",
        a: "In een gemiddelde woning enkele duizenden liters: de chape alleen al geeft vijf tot tien liter per dag per honderd vierkante meter af in de eerste weken. Dat moet eruit voor het pleisterwerk en de vloer komen, anders belandt het in de afwerking.",
      },
      {
        q: "Wanneer start ik met drogen na het chaperen?",
        a: "Niet meteen. Een chape moet eerst uitharden: reken op 48 tot 72 uur, en start dan voorzichtig. Te snel drogen geeft krimpscheuren, en daarom stelt de technieker de hygrostaat in op een streefwaarde.",
      },
      {
        q: "Is een kelder hier een probleem?",
        a: "Minder dan in de polder. Lievegem staat op zand, en zand draineert. Blijft een kelder hier toch vochtig, dan gaat het meestal om een gebrek aan ventilatie, en dat lost een droger wel op.",
      },
      {
        q: "Betaal ik een kilometerkost?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket.",
      },
      {
        q: "Hoe snel staan jullie in Lievegem?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfenvijftig minuten en we plannen het Meetjesland in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "zelzate",
    title: "Bouwdroger huren in Zelzate | Vernast",
    description:
      "Bouwdroger huren in Zelzate: arbeiderswoningen en bedrijfsruimtes aan het kanaal Gent-Terneuzen. Geleverd, geplaatst en opgehaald.",
    h1: "Bouwdroger huren in Zelzate",
    kicker: "Meetjesland · aan het kanaal",
    rit: { afstand: "circa 50 km", tijd: "ongeveer vijfenveertig minuten" },
    intro: [
      "Zelzate ligt **aan het kanaal Gent-Terneuzen**, en is door dat kanaal in twee gesplitst. De gemeente is dichter bebouwd dan haar landelijke buren: **compacte arbeiderswoningen en rijhuizen** uit de industriële periode, en bedrijfsruimtes aan de kanaalkant.",
      "De bodem is **polderklei richting het noorden**, en dat betekent een hoge grondwaterstand. Een kelder onder een rijhuis blijft hier zelden volledig droog.",
    ],
    bouw: {
      kop: "Rijhuizen uit de industriële periode, en bedrijfsruimtes",
      alineas: [
        "Een rijhuis uit die periode heeft **massieve muren zonder waterkering in de muurvoet** en vaak een kelder deels onder het maaiveld. Op klei zuigt zo'n muur vocht op uit de ondergrond, en dat komt binnen terug als een vochtband onderaan de muur. **Drogen haalt het uit de ruimte, de bron blijft**; de technieker meet het verschil met bouwvocht bij de levering.",
        "Aan de kanaalkant gaat het om **bedrijfsruimtes en loodsen**: groot volume, veel luchtdoorlaat en zelden verwarmd. Een droger tegen een open poort werkt tegen de buitenlucht in, dus vragen we vooraf het volume en of de ruimte **dicht te krijgen** is. Lukt dat niet, dan heeft drogen daar geen zin en zeggen we dat.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium voor een rijhuis of een gelijkvloers: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "revolution", waarom: "**Voor de kelder op kleigrond**: koud en vochtig tegelijk, en daar werkt een adsorptiedroger door waar een condensdroger stilvalt." },
      { key: "ttv4500", waarom: "In een smal en diep rijhuis brengt deze ventilator de droge lucht tot achteraan, en hij blaast de verzadigde laag langs muur en vloer weg." },
      { key: "ttk650", waarom: "**Voor de loods of de bedrijfsruimte**: 110 liter per dag en een bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Zelzate: binnen 24 uur, in de Meetjeslandronde",
      alinea:
        "Een vijfenveertigtal minuten rijden. U krijgt een tijdslot en een sms een halfuur vooraf. Bij een loods vragen we **vooraf het volume** en of de poorten kunnen sluiten; bij een kelder meet de technieker eerst of drogen hier zinvol is.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfenveertig minuten**. Voor één los toestel kan dat lonen. Voor een pakket is leveren beter: de rit en de vochtmeting zitten al in de prijs.",
    },
    buren: ["assenede", "evergem", "sint-gillis-waas", "stekene"],
    faq: [
      {
        q: "Mijn kelder onder het rijhuis blijft vochtig. Wat nu?",
        a: "Op kleigrond met een hoge grondwaterstand zuigt een kelder zonder buitenwaterdichting vocht op. Drogen maakt de ruimte bruikbaar zolang het toestel draait, maar de bron blijft. De vochtmeting bij de levering vertelt of het om bouwvocht of om grondwater gaat.",
      },
      {
        q: "Past een bouwdroger door een smalle gang?",
        a: "De Small bouwdroger is 40 bij 40 centimeter aan de basis en weegt ongeveer 25 kg. Die gaat door elke gangbare gang en trap van een arbeiderswoning. Geef bij de reservatie door dat het om een smalle doorgang gaat.",
      },
      {
        q: "Moeten de poorten van een loods dicht?",
        a: "Ja. Een droger tegen een open poort droogt de buitenlucht, en die is onuitputtelijk. Kunnen de poorten niet sluiten, dan heeft drogen geen zin en zeggen we dat liever vooraf.",
      },
      {
        q: "Betaal ik een kilometerkost?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket.",
      },
      {
        q: "Hoe snel staan jullie in Zelzate?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfenveertig minuten en we plannen het Meetjesland in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "oudenaarde",
    title: "Bouwdroger huren in Oudenaarde | Vernast",
    description:
      "Bouwdroger huren in Oudenaarde, Eine en Bevere: herenhuizen aan de Schelde en renovatie in de historische kern. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Oudenaarde",
    kicker: "Vlaamse Ardennen · stad aan de Schelde",
    rit: { afstand: "circa 80 km", tijd: "ongeveer een uur en tien minuten" },
    intro: [
      "Oudenaarde is **de stad van de Vlaamse Ardennen**, met de Schelde er dwars door en Eine, Bevere, Leupegem en Melden errond. In de historische kern staan **herenhuizen met gewelfde kelders**, en daar is bijna altijd iets aan de hand.",
      "Het is een **rit van ruim een uur** vanaf ons magazijn, en dat zeggen we liever vooraf. Boekt u voor de middag, dan staat het doorgaans de volgende werkdag.",
    ],
    bouw: {
      kop: "Herenhuizen met gewelfde kelders, aan een rivier",
      alineas: [
        "Een gewelfde kelder onder een herenhuis is **koud, gesloten en zonder doorstroming**, en in de Scheldevallei zit het grondwater er ondiep. Zo'n ruimte droogt van nature nooit helemaal. **Onder 15 °C verliest een condensdroger het grootste deel van zijn rendement**, dus gaat er hier doorgaans een adsorptiedroger naartoe, die ook bij vijf graden doorwerkt.",
        "Boven de kelder gaat het om **massief werk**: muren van veertig centimeter en dikker die hun vocht traag afgeven. Tegen het oppervlak vormt zich een verzadigd luchtlaagje dat als een deken werkt, en zolang dat blijft staan droogt de muur niet verder. Reken bij zo'n pand op **anderhalf tot twee keer de droogtijd** van een moderne wand.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**Voor de gewelfde kelder**: koud en gesloten, en daar werkt een adsorptiedroger door waar een condensdroger stilvalt." },
      { key: "ttk350", waarom: "De Medium voor een gelijkvloers of een verdieping: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "**Onmisbaar bij massieve muren**: hij blaast de verzadigde luchtlaag tegen het muuroppervlak weg, en pas dan droogt de muur verder." },
      { key: "ttk650", waarom: "Voor een groot pand of een volledige verdieping in renovatie: 110 liter per dag, bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Oudenaarde: binnen 24 uur, geplaatst en ingesteld",
      alinea:
        "Ruim een uur rijden, en we plannen de Vlaamse Ardennen in één ronde. **Boekt u voor de middag, dan staat het doorgaans de volgende werkdag.** Ligt uw pand in een zone met venstertijden, zeg dat dan bij de reservatie, dan plannen we daarbinnen.",
    },
    afhalen: {
      kop: "Afhalen loont hier niet",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ruim een uur, dus ruim twee uur heen en terug**. Dat weegt niet op tegen de korting op één toestel. **Vanuit Oudenaarde leveren we gewoon**; de rit en de vochtmeting zitten al in de prijs.",
    },
    buren: ["maarkedal", "kluisbergen", "kruisem", "wortegem-petegem", "zwalm"],
    faq: [
      {
        q: "Kunnen jullie een gewelfde kelder drogen?",
        a: "Ja, en daarvoor zetten we een adsorptiedroger in. Een gewelfde kelder is koud en gesloten, en een condensdroger werkt daar slecht: onder 15 °C verliest hij het grootste deel van zijn rendement. Een adsorptiedroger bindt het vocht aan een droogwiel en blijft ook bij vijf graden doorwerken.",
      },
      {
        q: "Waarom droogt een herenhuis zo veel trager?",
        a: "Omdat het vocht uit de kern van een muur van veertig centimeter of dikker naar buiten moet, en omdat zich tegen het oppervlak een verzadigd luchtlaagje vormt dat verdere droging afremt. Een ventilator haalt dat weg. Reken op anderhalf tot twee keer de droogtijd van een moderne wand.",
      },
      {
        q: "Hoe snel staan jullie in Oudenaarde?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ruim een uur en we plannen de Vlaamse Ardennen in één ronde, dus boekt u voor de middag, dan staat het doorgaans de volgende werkdag.",
      },
      {
        q: "Betaal ik meer omdat ik ver woon?",
        a: "Nee. De prijs van het droogpakket is dezelfde in heel ons werkgebied. De rit telt mee in onze planning, niet in uw factuur.",
      },
      {
        q: "Is afhalen vanuit Oudenaarde de moeite?",
        a: "Nee, en dat zeggen we liever eerlijk: u bent ruim twee uur onderweg voor een toestel van 30 kg. De levering zit al in de prijs van het droogpakket, en de technieker plaatst alles en meet de vochtigheid.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "ronse",
    title: "Bouwdroger huren in Ronse | Vernast",
    description:
      "Bouwdroger huren in Ronse: stad tegen de heuvels, met bronnen in de ondergrond en veel oud patrimonium. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Ronse",
    kicker: "Vlaamse Ardennen · stad tegen de heuvel",
    rit: { afstand: "circa 90 km", tijd: "ongeveer een uur en een kwartier" },
    intro: [
      "Ronse ligt **tegen de steilste heuvels van Vlaanderen**, en dat is in de kelders te merken. In de ondergrond van deze stad zitten **bronnen en waterlagen** die uit de heuvel komen, en die kiezen hun eigen weg.",
      "Daarnaast is dit een stad met **veel oud patrimonium**: textielpanden, burgerwoningen en rijhuizen uit de negentiende eeuw, met massieve muren en kelders onder het maaiveld.",
    ],
    bouw: {
      kop: "Bronnen uit de heuvel, en oud patrimonium met massieve muren",
      alineas: [
        "**Hangwater uit de heuvel is geen bouwvocht.** Komt er water via de kelderwand of de vloerplaat binnen omdat een waterlaag uit de helling erop drukt, dan haalt een droger het uit de lucht maar niet uit de grond. Het komt terug zodra het toestel weg is. Dat zeggen we liever vooraf dan dat u na drie weken huur hetzelfde probleem hebt; **de technieker meet het bij de levering**.",
        "Gaat het om **bouwvocht uit een renovatie**, dan verdwijnt het definitief. Bij massieve muren van veertig centimeter duurt dat wel langer: tegen het oppervlak vormt zich een verzadigd luchtlaagje dat verdere droging afremt, en dat haalt een ventilator weg. Reken op **anderhalf tot twee keer de droogtijd** van een moderne wand.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**Voor de kelder tegen de heuvel**: koud en permanent vochtig, en daar werkt een adsorptiedroger door waar een condensdroger stilvalt." },
      { key: "ttv4500", waarom: "**Onmisbaar bij massieve muren**: hij blaast de verzadigde luchtlaag tegen het muuroppervlak weg, en pas dan droogt de muur verder." },
      { key: "ttk350", waarom: "De Medium voor een gelijkvloers of een verdieping: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttk650", waarom: "Voor een groot pand of een textielgebouw in herbestemming: 110 liter per dag, bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Ronse: onze verste halte, en toch binnen 24 uur",
      alinea:
        "Ongeveer een uur en een kwartier rijden: **dit is de verste halte van ons werkgebied in Oost-Vlaanderen**. Boekt u voor de middag, dan staat het doorgaans de volgende werkdag. Staat uw woning in een steile straat waar de bestelwagen niet voor de deur kan, zeg dat dan bij de reservatie.",
    },
    afhalen: {
      kop: "Afhalen loont hier niet",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ruim een uur en een kwartier, dus bijna drie uur heen en terug**. **Vanuit Ronse raden we afhalen af en leveren we gewoon.** De rit zit al in de prijs van het pakket, en de prijs is dezelfde als voor iemand die naast ons magazijn woont.",
    },
    buren: ["kluisbergen", "maarkedal", "brakel", "oudenaarde"],
    faq: [
      {
        q: "Er komt water door mijn kelderwand. Helpt een bouwdroger?",
        a: "Zolang hij draait, ja: de ruimte wordt bruikbaar en de schade blijft beperkt. Maar in Ronse zit er hangwater uit de heuvel in de ondergrond, en dat perst tegen de kelderwand. Een droger stopt die aanvoer niet. De duurzame oplossing is drainage of waterdichting aan de buitenzijde, en dat zeggen we eerlijk.",
      },
      {
        q: "Hoe weet ik of het bouwvocht is of water uit de heuvel?",
        a: "Bouwvocht zit gelijkmatig in de ruimte en neemt af naarmate het droogt. Hangwater geeft een natte plek of een natte band die na elke regenperiode terugkomt, vaak op dezelfde plaats. Onze technieker meet dat bij de levering, en die meting zit in de prijs.",
      },
      {
        q: "Hoe snel staan jullie in Ronse?",
        a: "Binnen 24 uur na uw boeking, maar dit is de verste halte van ons werkgebied in deze provincie. Boekt u voor de middag, dan staat het doorgaans de volgende werkdag.",
      },
      {
        q: "Betaal ik meer omdat Ronse zo ver ligt?",
        a: "Nee. De prijs van het droogpakket is dezelfde in heel ons werkgebied. De rit telt mee in onze planning, niet in uw factuur.",
      },
      {
        q: "Waarom droogt een oud pand hier zo traag?",
        a: "Massieve muren van veertig centimeter geven hun vocht traag af, en tegen het oppervlak vormt zich een verzadigd luchtlaagje dat verdere droging afremt. Met een ventilator erbij haalt u dat weg. Reken op anderhalf tot twee keer de droogtijd van een moderne wand.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "zottegem",
    title: "Bouwdroger huren in Zottegem | Vernast",
    description:
      "Bouwdroger huren in Zottegem, Strijpen en Erwetegem: stadskern en dorpen op de zandleemheuvels. Geleverd, geplaatst en opgehaald.",
    h1: "Bouwdroger huren in Zottegem",
    kicker: "Vlaamse Ardennen · stad op de heuvelrand",
    rit: { afstand: "circa 63 km", tijd: "ongeveer vijfenvijftig minuten" },
    intro: [
      "Zottegem is **het knooppunt van de noordelijke Vlaamse Ardennen**, met Strijpen, Erwetegem, Elene, Godveerdegem, Leeuwergem, Oombergen, Velzeke en Sint-Maria-Oudenhove errond.",
      "Het is hier **zandleem op golvend terrein**, en dat levert twee werven op: renovatie in de oude kernen, en nieuwbouw in verkavelingen aan de rand ervan.",
    ],
    bouw: {
      kop: "Renovatie in de kernen, nieuwbouw aan de rand",
      alineas: [
        "Op **zandleem blijft water langer in de ondergrond** dan op zand, en op golvend terrein zoekt het de laagste weg. Een woning die in de helling gebouwd is, heeft aan één zijde **grond tegen de muur**, en daar zit het vocht het langst. Soms gaat het om hangwater dat tegen die muur drukt, en dan lost drogen alleen het symptoom op; **de technieker meet dat bij de levering**.",
        "In de verkavelingen is het voorspelbaarder: **chape van een volledig gelijkvloers**, vijf tot tien liter per dag per honderd vierkante meter, en met droger en ventilator in twee à drie weken klaar voor de vloerder in plaats van vijf à zeven weken zonder hulp.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium als standaard: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "Bij een chape verdubbelt luchtbeweging vaak de snelheid, en bij massieve muren is hij een voorwaarde." },
      { key: "revolution", waarom: "**Voor de kelder in de helling**: koud en vochtig tegelijk, en daar werkt een adsorptiedroger door waar een condensdroger stilvalt." },
      { key: "ttk650", waarom: "Voor een groot gelijkvloers of een hoeve: 110 liter per dag, bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Zottegem: binnen 24 uur, in de ronde van de Ardennen",
      alinea:
        "Een vijfenvijftigtal minuten rijden. U krijgt een tijdslot en een sms een halfuur vooraf. Staat uw woning in een steile of smalle straat waar de bestelwagen niet voor de deur kan, **zeg dat dan bij de reservatie**.",
    },
    afhalen: {
      kop: "Afhalen kan, maar leveren is hier logischer",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfenvijftig minuten**. Voor één los toestel kan dat lonen. Voor een pakket is leveren beter: de rit en de vochtmeting zitten al in de prijs.",
    },
    buren: ["herzele", "zwalm", "sint-lievens-houtem", "oosterzele", "lierde"],
    faq: [
      {
        q: "Mijn woning staat in de helling en één muur blijft vochtig. Wat nu?",
        a: "Dan drukt er waarschijnlijk hangwater van de helling tegen die muur. Een droger houdt de ruimte bruikbaar, maar hij stopt die aanvoer niet. De duurzame oplossing is drainage aan de buitenzijde. We zeggen het eerlijk als drogen hier alleen symptomen aanpakt.",
      },
      {
        q: "Hoe lang moet een chape drogen met een droger?",
        a: "Reken op een week per centimeter dikte zonder hulp, en met droger en ventilator ongeveer de helft. Een chape van vijf centimeter is dan in twee à drie weken klaar voor de vloerder. De technieker meet bij de ophaling.",
      },
      {
        q: "Kan de bestelwagen tot bij mijn huis?",
        a: "In de meeste straten wel. Is uw straat steil, smal of onverhard, zeg dat dan bij de reservatie, dan weet de technieker dat hij verder moet uitladen en brengt hij het juiste materiaal mee.",
      },
      {
        q: "Betaal ik een kilometerkost?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket.",
      },
      {
        q: "Hoe snel staan jullie in Zottegem?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfenvijftig minuten en we plannen de Vlaamse Ardennen in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "brakel",
    title: "Bouwdroger huren in Brakel | Vernast",
    description:
      "Bouwdroger huren in Brakel, Nederbrakel en Zegelsem: hoeves op steile leemhellingen, met hangwater tegen de muur.",
    h1: "Bouwdroger huren in Brakel",
    kicker: "Vlaamse Ardennen · steile hellingen op leem",
    rit: { afstand: "circa 75 km", tijd: "ongeveer een uur" },
    intro: [
      "Brakel ligt **in de steilste hoek van de Vlaamse Ardennen**, met Nederbrakel, Opbrakel, Zegelsem, Michelbeke, Elst en Everbeek errond. Het is hier **leem op een helling**, en dat is een lastige combinatie.",
      "Leem houdt water vast en laat het traag door. Op een helling betekent dat **hangwater: een waterlaag die zijwaarts door de bodem zakt** en tegen het eerste obstakel komt te staan. Dat obstakel is vaak een kelderwand.",
    ],
    bouw: {
      kop: "Hoeves in de helling, en hangwater tegen de kelderwand",
      alineas: [
        "**Hangwater is geen bouwvocht.** Een woning die in de helling gebouwd is, heeft aan de bergzijde grond tegen de muur, en bij elke regenperiode perst het water daar tegenaan. Een droger haalt het uit de lucht, maar niet uit de grond: het komt terug zodra het toestel weg is. Wij **meten dat bij de levering** en zeggen eerlijk dat de oplossing drainage aan de buitenzijde is.",
        "De hoeves hier hebben **massieve muren van veertig centimeter en dikker**, en die geven hun vocht traag af. Tegen het oppervlak vormt zich een verzadigd luchtlaagje dat verdere droging afremt, en dat haalt een ventilator weg. Reken bij massief werk op **anderhalf tot twee keer de droogtijd** van een moderne wand.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**Voor de kelder in de helling**: koud en permanent vochtig. De adsorptiedroger werkt ook onder 15 °C door, waar een condensdroger stilvalt." },
      { key: "ttv4500", waarom: "**Onmisbaar bij massieve muren**: hij blaast de verzadigde luchtlaag tegen het muuroppervlak weg, en pas dan droogt de muur verder." },
      { key: "ttk350", waarom: "De Medium voor een gelijkvloers of een verdieping: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttk650", waarom: "Voor een hoeve met grote, hoge volumes: 110 liter per dag en bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Brakel: binnen 24 uur, ook in een steile straat",
      alinea:
        "Ongeveer een uur rijden. **Staat uw woning aan een steile of onverharde weg, zeg dat dan bij de reservatie**, dan weet de technieker dat hij verder moet uitladen en brengt hij het juiste materiaal mee. U krijgt een tijdslot en een sms een halfuur vooraf.",
    },
    afhalen: {
      kop: "Afhalen loont hier niet",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer een uur, dus twee uur heen en terug**. Dat weegt niet op tegen de korting op één toestel. **Vanuit Brakel leveren we gewoon**; de rit en de vochtmeting zitten al in de prijs.",
    },
    buren: ["maarkedal", "lierde", "horebeke", "ronse", "geraardsbergen"],
    faq: [
      {
        q: "Wat is hangwater, en waarom kan een droger er niets aan doen?",
        a: "Hangwater is een waterlaag die door de leembodem zijwaarts naar beneden zakt en tegen het eerste obstakel komt te staan, vaak een kelderwand. Een droger haalt vocht uit de lucht, niet uit de grond: hij houdt de ruimte bruikbaar, maar het water blijft komen. De oplossing is drainage aan de buitenzijde.",
      },
      {
        q: "Hoe weet ik of het bouwvocht is of hangwater?",
        a: "Bouwvocht zit gelijkmatig in de ruimte en neemt af naarmate het droogt. Hangwater geeft een natte plek of band die na elke regenperiode terugkomt, meestal op dezelfde plaats aan de bergzijde. Onze technieker meet dat bij de levering.",
      },
      {
        q: "Waarom droogt een hoeve zo veel trager?",
        a: "Omdat het vocht uit de kern van een massieve muur naar buiten moet, door veertig centimeter of meer, en omdat zich tegen het oppervlak een verzadigd luchtlaagje vormt. Reken op anderhalf tot twee keer de droogtijd van een moderne wand, en altijd met een ventilator erbij.",
      },
      {
        q: "Kan de bestelwagen tot bij mijn hoeve?",
        a: "Meestal wel, maar niet altijd bij een steile of onverharde oprit. Geef dat door bij de reservatie, dan plant de technieker daarop in plaats van het ter plaatse te ontdekken.",
      },
      {
        q: "Hoe snel staan jullie in Brakel?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer een uur en we plannen de Vlaamse Ardennen in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "kluisbergen",
    title: "Bouwdroger huren in Kluisbergen | Vernast",
    description:
      "Bouwdroger huren in Kluisbergen, Berchem en Kwaremont: woningen tussen de Schelde en de Kluisberg. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Kluisbergen",
    kicker: "Vlaamse Ardennen · tussen Schelde en heuvel",
    rit: { afstand: "circa 88 km", tijd: "ongeveer een uur en een kwartier" },
    intro: [
      "Kluisbergen ligt **geklemd tussen de Schelde en de Kluisberg**, met Berchem, Ruien, Kwaremont en Zulzeke. Dat is een ongebruikelijke combinatie: **beneden een rivier, boven een helling**, en nog geen twee kilometer ertussen.",
      "Daardoor komen hier twee problemen naast elkaar voor: **een hoge grondwaterstand in de Scheldevallei** en **hangwater uit de helling** hogerop. Welk van de twee het is, bepaalt of drogen helpt.",
    ],
    bouw: {
      kop: "Beneden het grondwater, boven het hangwater",
      alineas: [
        "In de vallei staat het **grondwater ondiep**, en een kelder zonder buitenwaterdichting staat permanent onder druk. Hogerop, op de flank van de Kluisberg, perst **hangwater uit de leembodem** tegen de bergzijde van een woning. Twee verschillende oorzaken, maar hetzelfde eerlijke antwoord: **een droger haalt vocht uit de lucht, niet uit de grond**.",
        "Gaat het om **bouwvocht uit een renovatie**, dan verdwijnt het wel definitief. Bij de oudere woningen hier betekent dat massief werk: muren van veertig centimeter die hun vocht traag afgeven, met een verzadigd luchtlaagje tegen het oppervlak dat een ventilator moet wegblazen.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**Voor een kelder onder druk**: koud en permanent vochtig. De adsorptiedroger werkt ook onder 15 °C door, waar een condensdroger stilvalt." },
      { key: "ttk350", waarom: "De Medium voor een gelijkvloers of een verdieping: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "**Bij massieve muren een voorwaarde**: hij blaast de verzadigde luchtlaag tegen het oppervlak weg, en komt onder vloeren en achter plinten." },
      { key: "ttk650", waarom: "Voor een groot gelijkvloers of een hoeve: 110 liter per dag, bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Kluisbergen: binnen 24 uur, ook op de flank",
      alinea:
        "Ongeveer een uur en een kwartier rijden: een van de verste haltes van ons werkgebied. **Boekt u voor de middag, dan staat het doorgaans de volgende werkdag.** Staat uw woning aan een steile weg op de flank, zeg dat dan bij de reservatie.",
    },
    afhalen: {
      kop: "Afhalen loont hier niet",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ruim een uur en een kwartier, dus bijna drie uur heen en terug**. **Vanuit Kluisbergen leveren we gewoon**; de rit zit al in de prijs, en die prijs is dezelfde als voor iemand naast ons magazijn.",
    },
    buren: ["ronse", "oudenaarde", "maarkedal", "wortegem-petegem"],
    faq: [
      {
        q: "Ik woon beneden bij de Schelde. Helpt drogen tegen mijn natte kelder?",
        a: "Zolang het toestel draait wel: de ruimte wordt bruikbaar en schimmel krijgt geen kans. Maar het grondwater staat hier ondiep, en komt het door de kelderwand, dan blijft de bron. De duurzame oplossing is waterdichting aan de buitenzijde. De technieker meet dat bij de levering.",
      },
      {
        q: "Ik woon op de flank en één muur blijft vochtig. Wat is dat?",
        a: "Waarschijnlijk hangwater: een waterlaag die door de leembodem zijwaarts zakt en tegen de bergzijde van uw woning komt te staan. Het komt na elke regenperiode terug, meestal op dezelfde plaats. Drogen houdt de ruimte bruikbaar; drainage lost het op.",
      },
      {
        q: "Hoe snel staan jullie in Kluisbergen?",
        a: "Binnen 24 uur na uw boeking, maar dit is een van de verste haltes van ons werkgebied. Boekt u voor de middag, dan staat het doorgaans de volgende werkdag.",
      },
      {
        q: "Betaal ik meer omdat ik ver woon?",
        a: "Nee. De prijs van het droogpakket is dezelfde in heel ons werkgebied. De rit telt mee in onze planning, niet in uw factuur.",
      },
      {
        q: "Zit er een waarborg op?",
        a: "Nee. Er komt geen waarborg bij, en levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "kruisem",
    title: "Bouwdroger huren in Kruisem | Vernast",
    description:
      "Bouwdroger huren in Kruisem: Kruishoutem en Zingem, met nieuwbouw op zandleem en hoeves in renovatie. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Kruisem",
    kicker: "Vlaamse Ardennen · Kruishoutem en Zingem",
    rit: { afstand: "circa 78 km", tijd: "ongeveer een uur" },
    intro: [
      "Kruisem is **de fusie van Kruishoutem en Zingem**, met Huise, Ouwegem en Nokere erbij. Het ligt op de overgang van de Leiestreek naar de Vlaamse Ardennen: **golvend zandleem, met de Schelde aan de oostkant**.",
      "Wat we hier drogen is gemengd: **nieuwbouw in verkavelingen**, en **hoeves en dorpswoningen** die in renovatie gaan.",
    ],
    bouw: {
      kop: "Nieuwbouw op zandleem, hoeves in renovatie",
      alineas: [
        "Een verse chape geeft **vijf tot tien liter water per dag per honderd vierkante meter** af, en op zandleem begint de ruwbouw met meer vocht in het gebouw dan op een zandrug. Met droger en ventilator samen is een gelijkvloers **in een tiental dagen beloopbaar en in twee à drie weken klaar voor de vloerder**.",
        "Bij een hoeve is het trager. **Massieve muren geven hun vocht traag af**, en tegen het oppervlak vormt zich een verzadigd luchtlaagje dat als een deken werkt. Een ventilator haalt dat weg; zonder hem staat de droger lucht te drogen die al droog is. Reken op **anderhalf tot twee keer de droogtijd** van een moderne wand.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De standaard voor een nieuwbouwwoning: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "Bij een chape verdubbelt luchtbeweging vaak de snelheid, en bij massieve muren is hij een voorwaarde." },
      { key: "ttk650", waarom: "Voor een groot gelijkvloers of een hoeve met hoge volumes: 110 liter per dag, bereik tot ongeveer 600 m³." },
      { key: "teddh30", waarom: "Voor de onverwarmde ruwbouw of schuur in de winter: onder 15 °C verliest een condensdroger het grootste deel van zijn rendement. Vraagt 400 V." },
    ],
    levering: {
      kop: "Leveren in Kruisem: binnen 24 uur, in de ronde van de Ardennen",
      alinea:
        "Ongeveer een uur rijden. U krijgt een tijdslot en een sms een halfuur vooraf. Bij een hoeve vragen we **vooraf het volume in kubieke meter** en of de ruimte dicht te krijgen is, want een droger tegen een open poort werkt tegen de buitenlucht in.",
    },
    afhalen: {
      kop: "Afhalen loont hier niet",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer een uur, dus twee uur heen en terug**. **Vanuit Kruisem leveren we gewoon**; de rit zit al in de prijs van het pakket en de technieker zet de droogzones meteen goed op.",
    },
    buren: ["oudenaarde", "wortegem-petegem", "zulte", "gavere", "zwalm"],
    faq: [
      {
        q: "Hoe lang moet een chape drogen met een droger?",
        a: "Reken op een week per centimeter dikte zonder hulp, en met droger en ventilator ongeveer de helft. Een chape van vijf centimeter is dan in twee à drie weken klaar voor de vloerder. De technieker meet bij de ophaling of de restvochtigheid laag genoeg is.",
      },
      {
        q: "Kunnen jullie een schuur drogen die woonruimte wordt?",
        a: "Ja. Geef vooraf het volume in kubieke meter door, de vloeropbouw en of de poorten kunnen sluiten. Is de ruimte niet te verwarmen, dan zetten we een adsorptiedroger in die ook bij lage temperatuur doorwerkt.",
      },
      {
        q: "Wat als het vriest tijdens de droging?",
        a: "Dan verwarmen we mee. Onder 15 °C verliest een condensdroger het grootste deel van zijn rendement, dus in een onverwarmde ruwbouw zetten we er een elektrische kachel bij. Die vraagt 400 V; de technieker controleert de werfkast bij de levering.",
      },
      {
        q: "Betaal ik een kilometerkost?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket.",
      },
      {
        q: "Hoe snel staan jullie in Kruisem?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer een uur en we plannen de Vlaamse Ardennen in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "horebeke",
    title: "Bouwdroger huren in Horebeke | Vernast",
    description:
      "Bouwdroger huren in Horebeke: de kleinste gemeente van de streek, met hoeves en dorpswoningen op leem. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Horebeke",
    kicker: "Vlaamse Ardennen · de kleinste van de streek",
    rit: { afstand: "circa 72 km", tijd: "ongeveer een uur" },
    intro: [
      "Horebeke is **een van de kleinste gemeenten van Vlaanderen**: Sint-Maria-Horebeke en Sint-Kornelis-Horebeke, samen nauwelijks tweeduizend inwoners, in de heuvels tussen Oudenaarde en Brakel.",
      "Klein, maar met **dezelfde ondergrond als zijn buren**: leem op een helling. Dat betekent hangwater tegen de bergzijde van een woning, en massieve muren die hun vocht traag afgeven.",
    ],
    bouw: {
      kop: "Hoeves en dorpswoningen op een leemhelling",
      alineas: [
        "**Hangwater is geen bouwvocht.** Leem houdt water vast en laat het traag door; op een helling zakt dat zijwaarts tot het tegen het eerste obstakel komt, vaak de bergzijde van een woning of een kelderwand. Een droger haalt het uit de lucht maar niet uit de grond, en het komt terug zodra het toestel weg is. **De technieker meet dat bij de levering** en zegt eerlijk wat drogen hier oplost.",
        "Gaat het om **bouwvocht uit een renovatie**, dan verdwijnt het definitief. Bij massieve muren van veertig centimeter duurt dat langer: tegen het oppervlak vormt zich een verzadigd luchtlaagje dat verdere droging afremt, en dat haalt een ventilator weg.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium als standaard bij renovatie: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "**Onmisbaar bij massieve muren**: hij blaast de verzadigde luchtlaag tegen het muuroppervlak weg, en pas dan droogt de muur verder." },
      { key: "revolution", waarom: "**Voor de kelder in de helling**: koud en vochtig tegelijk, en daar werkt een adsorptiedroger door waar een condensdroger stilvalt." },
      { key: "ttk650", waarom: "Voor een hoeve met grote, hoge volumes: 110 liter per dag en bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Horebeke: binnen 24 uur, in de ronde van de Ardennen",
      alinea:
        "Ongeveer een uur rijden. We plannen de Vlaamse Ardennen in één ronde, dus ook een kleine gemeente ligt gewoon op de route. **Staat uw woning aan een steile of onverharde weg, zeg dat dan bij de reservatie.**",
    },
    afhalen: {
      kop: "Afhalen loont hier niet",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer een uur, dus twee uur heen en terug**. **Vanuit Horebeke leveren we gewoon**; de rit en de vochtmeting zitten al in de prijs van het pakket.",
    },
    buren: ["brakel", "maarkedal", "zwalm", "oudenaarde"],
    faq: [
      {
        q: "Komen jullie ook naar een kleine gemeente?",
        a: "Ja, en zonder toeslag. We plannen de Vlaamse Ardennen in één ronde, dus Horebeke ligt gewoon op de route. De prijs van het droogpakket is dezelfde in heel ons werkgebied.",
      },
      {
        q: "Wat is hangwater?",
        a: "Een waterlaag die door de leembodem zijwaarts naar beneden zakt en tegen het eerste obstakel komt te staan, vaak een kelderwand of de bergzijde van een woning. Het komt na elke regenperiode terug. Een droger houdt de ruimte bruikbaar, drainage aan de buitenzijde lost het op.",
      },
      {
        q: "Waarom droogt een oude woning hier zo traag?",
        a: "Omdat het vocht uit de kern van een massieve muur naar buiten moet, en omdat zich tegen het oppervlak een verzadigd luchtlaagje vormt dat verdere droging afremt. Reken op anderhalf tot twee keer de droogtijd van een moderne wand, met een ventilator erbij.",
      },
      {
        q: "Betaal ik een kilometerkost?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket.",
      },
      {
        q: "Hoe snel staan jullie in Horebeke?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer een uur en we plannen de Vlaamse Ardennen in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "lierde",
    title: "Bouwdroger huren in Lierde | Vernast",
    description:
      "Bouwdroger huren in Lierde, Deftinge en Hemelveerdegem: landelijke kernen op leem tussen Zottegem en Geraardsbergen.",
    h1: "Bouwdroger huren in Lierde",
    kicker: "Vlaamse Ardennen · landelijke kernen op leem",
    rit: { afstand: "circa 70 km", tijd: "ongeveer een uur" },
    intro: [
      "Lierde bestaat uit **Sint-Maria-Lierde, Sint-Martens-Lierde, Deftinge en Hemelveerdegem**: vier kleine kernen in golvend leemland tussen Zottegem, Brakel en Geraardsbergen.",
      "Wat we hier drogen is bijna altijd **renovatie**: een hoeve die aangepakt wordt, een dorpswoning met een nieuwe vloer, een stal die herbestemd wordt tot woonruimte.",
    ],
    bouw: {
      kop: "Hoeves en stallen in herbestemming",
      alineas: [
        "Een **stal of schuur die woonruimte wordt** is een groot, hoog en meestal onverwarmd volume. Wij rekenen op **volume in kubieke meter**, en een schuur met een nok van zes meter telt daarin zwaarder dan haar vloeroppervlak suggereert. Daarbij hoort luchtbeweging over de volle lengte, want droge lucht blijft anders hangen waar het toestel staat.",
        "Op **leem** komt er iets bij: een gebouw dat in de helling staat heeft aan de bergzijde grond tegen de muur, en bij elke regenperiode perst hangwater daar tegenaan. Dat is geen bouwvocht, en drogen lost het niet op. **De technieker meet het verschil** bij de levering en zegt het eerlijk.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Voor de schuur of de stal in herbestemming**: 110 liter per dag en een bereik tot ongeveer 600 m³." },
      { key: "ttv4500", waarom: "Op een groot volume is luchtbeweging over de volle lengte de voorwaarde om overal even droog te krijgen." },
      { key: "ttk350", waarom: "De Medium voor een dorpswoning of een gelijkvloers: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "revolution", waarom: "**Voor de onverwarmde schuur of kelder**: de adsorptiedroger blijft ook bij lage temperatuur vocht opnemen, waar een condensdroger stilvalt." },
    ],
    levering: {
      kop: "Leveren in Lierde: binnen 24 uur, in de ronde van de Ardennen",
      alinea:
        "Ongeveer een uur rijden. U krijgt een tijdslot en een sms een halfuur vooraf. Bij een schuur of een stal vragen we **vooraf het volume in kubieke meter** en of de ruimte dicht te krijgen is, zodat de technieker met het juiste toestel vertrekt.",
    },
    afhalen: {
      kop: "Afhalen loont hier niet",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer een uur, dus twee uur heen en terug**. **Vanuit Lierde leveren we gewoon**; bij een schuur hangt het resultaat af van waar de toestellen staan, en dat zet de technieker op.",
    },
    buren: ["brakel", "geraardsbergen", "zottegem", "herzele"],
    faq: [
      {
        q: "Kunnen jullie een stal drogen die woonruimte wordt?",
        a: "Ja, dat doen we hier vaak. Geef vooraf het volume in kubieke meter door, de vloeropbouw en of de poorten en verluchting kunnen sluiten. Is de ruimte niet te verwarmen, dan zetten we een adsorptiedroger in.",
      },
      {
        q: "Hoeveel toestellen voor een schuur van 300 m³?",
        a: "Doorgaans één toestel met voldoende capaciteit plus luchtbeweging over de volle lengte, en in de winter een kachel erbij. Eén droger in een hoek droogt die hoek; het gaat om verdeling even veel als om capaciteit.",
      },
      {
        q: "Mijn muur aan de bergzijde blijft vochtig. Wat is dat?",
        a: "Waarschijnlijk hangwater: een waterlaag die door de leembodem zijwaarts zakt en tegen die muur komt te staan. Het komt na elke regenperiode terug. Een droger houdt de ruimte bruikbaar, drainage aan de buitenzijde lost het op.",
      },
      {
        q: "Betaal ik een kilometerkost?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket.",
      },
      {
        q: "Hoe snel staan jullie in Lierde?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer een uur en we plannen de Vlaamse Ardennen in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "maarkedal",
    title: "Bouwdroger huren in Maarkedal | Vernast",
    description:
      "Bouwdroger huren in Maarkedal, Etikhove en Nukerke: hoeves op de steilste hellingen van de streek. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Maarkedal",
    kicker: "Vlaamse Ardennen · hoeves op de flanken",
    rit: { afstand: "circa 80 km", tijd: "ongeveer een uur en tien minuten" },
    intro: [
      "Maarkedal is **Etikhove, Maarke-Kerkem, Nukerke en Schorisse**: vier kernen op de flanken van de hoogste heuvels van de streek, met holle wegen en kasseistroken ertussen.",
      "De bebouwing is **verspreid en oud**: hoeves, pachthoeves en dorpswoningen op leem, vaak **half in de helling gebouwd**. Dat laatste bepaalt bijna alles wat we hier tegenkomen.",
    ],
    bouw: {
      kop: "Gebouwen half in de helling, op leembodem",
      alineas: [
        "Een gebouw dat **half in de helling staat** heeft aan de bergzijde grond tegen de muur over de volle hoogte. Op leem perst **hangwater** daar bij elke regenperiode tegenaan, en dat is geen bouwvocht: een droger haalt het uit de lucht maar niet uit de grond. Het komt terug zodra het toestel weg is. **Wij meten dat bij de levering** en zeggen eerlijk dat drainage aan de buitenzijde de oplossing is.",
        "Gaat het om **bouwvocht uit een renovatie**, dan verdwijnt het wel definitief. Bij massieve muren van veertig centimeter en dikker duurt dat langer: tegen het oppervlak vormt zich een verzadigd luchtlaagje dat verdere droging afremt. Reken op **anderhalf tot twee keer de droogtijd** van een moderne wand.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**Voor de ruimte in de helling**: koud en permanent vochtig. De adsorptiedroger werkt ook onder 15 °C door, waar een condensdroger stilvalt." },
      { key: "ttv4500", waarom: "**Onmisbaar bij massieve muren**: hij blaast de verzadigde luchtlaag tegen het muuroppervlak weg, en pas dan droogt de muur verder." },
      { key: "ttk350", waarom: "De Medium voor een gelijkvloers of een verdieping: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttk650", waarom: "Voor een hoeve met grote, hoge volumes: 110 liter per dag en bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Maarkedal: binnen 24 uur, ook aan een holle weg",
      alinea:
        "Ruim een uur rijden. **Staat uw hoeve aan een holle weg, een kasseistrook of een onverharde oprit, zeg dat dan bij de reservatie**, dan plant de technieker daarop in plaats van het ter plaatse te ontdekken. Boekt u voor de middag, dan staat het doorgaans de volgende werkdag.",
    },
    afhalen: {
      kop: "Afhalen loont hier niet",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ruim een uur, dus ruim twee uur heen en terug**. **Vanuit Maarkedal leveren we gewoon**; de rit zit al in de prijs en de prijs is dezelfde als voor iemand naast ons magazijn.",
    },
    buren: ["oudenaarde", "brakel", "horebeke", "ronse", "kluisbergen"],
    faq: [
      {
        q: "Mijn woning staat in de helling en de bergmuur blijft vochtig. Wat nu?",
        a: "Dan perst er hangwater van de helling tegen die muur. Een droger houdt de ruimte bruikbaar, maar hij stopt de aanvoer niet. De duurzame oplossing is drainage aan de buitenzijde. We zeggen dat liever vooraf dan dat u na drie weken huur hetzelfde probleem hebt.",
      },
      {
        q: "Kan de bestelwagen tot bij mijn hoeve?",
        a: "Meestal wel, maar aan een holle weg of een onverharde oprit niet altijd. Geef dat door bij de reservatie, dan weet de technieker dat hij verder moet uitladen en brengt hij het juiste materiaal mee.",
      },
      {
        q: "Waarom droogt een hoeve zo veel trager dan een nieuwbouw?",
        a: "Omdat het vocht uit de kern van een massieve muur naar buiten moet, door veertig centimeter of meer, en omdat zich tegen het oppervlak een verzadigd luchtlaagje vormt. Reken op anderhalf tot twee keer de droogtijd, altijd met een ventilator erbij.",
      },
      {
        q: "Betaal ik meer omdat ik ver woon?",
        a: "Nee. De prijs van het droogpakket is dezelfde in heel ons werkgebied. De rit telt mee in onze planning, niet in uw factuur.",
      },
      {
        q: "Hoe snel staan jullie in Maarkedal?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ruim een uur en we plannen de Vlaamse Ardennen in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "wortegem-petegem",
    title: "Bouwdroger huren in Wortegem-Petegem | Vernast",
    description:
      "Bouwdroger huren in Wortegem-Petegem, Elsegem en Moregem: landelijke kernen tussen Schelde en Leie. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Wortegem-Petegem",
    kicker: "Vlaamse Ardennen · tussen Schelde en Leie",
    rit: { afstand: "circa 82 km", tijd: "ongeveer een uur en tien minuten" },
    intro: [
      "Wortegem-Petegem ligt **tussen de Schelde en de Leie**, met Elsegem, Moregem en Ooike erbij: open landbouwgebied met kleine kernen en veel lintbebouwing.",
      "Het is hier **vlakker dan in de rest van de Vlaamse Ardennen**, en dat scheelt: minder hangwater uit hellingen, meer gewone werven. Nieuwbouw in verkavelingen, renovatie in de linten, en hoeves in het open veld.",
    ],
    bouw: {
      kop: "Lintbebouwing en hoeves in open landbouwgebied",
      alineas: [
        "Een woning in lintbebouwing is doorgaans **halfopen en diep**, met een aanbouw achteraan uit een latere fase. Die aanbouw is vaak **het natte punt**: een plat dak, een vloer op volle grond en een verbinding met het oude volume waar de isolatie ophoudt. Daar zetten we een eigen droogzone op in plaats van het mee te nemen in het geheel.",
        "Bij een hoeve in het open veld gaat het om **volume en om temperatuur**. Wij rekenen op kubieke meter, en een schuur met een hoge nok telt zwaarder dan haar vloeroppervlak suggereert. Is de ruimte niet te verwarmen, dan gaat er **een adsorptiedroger** naartoe, die ook bij lage temperatuur doorwerkt.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium als standaard: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttk650", waarom: "Voor een hoeve of een groot gelijkvloers: 110 liter per dag en een bereik tot ongeveer 600 m³." },
      { key: "ttv4500", waarom: "Bij een chape verdubbelt luchtbeweging vaak de snelheid, en in een diepe plattegrond brengt ze de droge lucht tot achteraan." },
      { key: "revolution", waarom: "Voor een onverwarmde schuur of kelder: de adsorptiedroger blijft ook bij lage temperatuur vocht opnemen." },
    ],
    levering: {
      kop: "Leveren in Wortegem-Petegem: binnen 24 uur, in een ronde",
      alinea:
        "Ruim een uur rijden. U krijgt een tijdslot en een sms een halfuur vooraf. Bij een hoeve of een schuur vragen we **vooraf het volume in kubieke meter** en of de ruimte dicht te krijgen is, want een droger tegen een open poort werkt tegen de buitenlucht in.",
    },
    afhalen: {
      kop: "Afhalen loont hier niet",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ruim een uur, dus ruim twee uur heen en terug**. **Vanuit Wortegem-Petegem leveren we gewoon**; de rit en de vochtmeting zitten al in de prijs van het pakket.",
    },
    buren: ["kruisem", "oudenaarde", "kluisbergen", "zulte"],
    faq: [
      {
        q: "Mijn aanbouw blijft vochtig terwijl de rest droog is. Waarom?",
        a: "Omdat droge lucht niet vanzelf naar achteren gaat, en omdat een aanbouw vaak een andere vloeropbouw heeft dan het hoofdvolume. Daar hoort een eigen droogzone bij: een toestel in die ruimte, met de deur dicht en een ventilator erbij.",
      },
      {
        q: "Kunnen jullie een hoeve of een schuur drogen?",
        a: "Ja. We vragen vooraf het volume in kubieke meter, de vloeropbouw en of de ruimte dicht te krijgen is. Is ze niet te verwarmen, dan zetten we een adsorptiedroger in die ook bij lage temperatuur doorwerkt.",
      },
      {
        q: "Hoe lang moet een chape drogen met een droger?",
        a: "Reken op een week per centimeter dikte zonder hulp, en met droger en ventilator ongeveer de helft. De technieker meet bij de ophaling of de restvochtigheid laag genoeg is voor uw vloerder.",
      },
      {
        q: "Betaal ik meer omdat ik ver woon?",
        a: "Nee. De prijs van het droogpakket is dezelfde in heel ons werkgebied. De rit telt mee in onze planning, niet in uw factuur.",
      },
      {
        q: "Hoe snel staan jullie hier?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ruim een uur en we plannen de Vlaamse Ardennen in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "zwalm",
    title: "Bouwdroger huren in Zwalm | Vernast",
    description:
      "Bouwdroger huren in Zwalm, Munkzwalm en Nederzwalm: woningen in de steile beekvalleien van de Zwalmstreek. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Zwalm",
    kicker: "Vlaamse Ardennen · steile beekvalleien",
    rit: { afstand: "circa 70 km", tijd: "ongeveer een uur" },
    intro: [
      "Zwalm is genoemd naar **de Zwalmbeek**, en die beek met haar zijbeken heeft hier **steile, smalle valleien** uitgesneden tussen Munkzwalm, Nederzwalm, Rozebeke, Sint-Denijs-Boekel en Beerlegem.",
      "In zo'n vallei staat de bebouwing **laag en vlak bij het water**, en op de flanken erboven in de helling. Twee situaties met twee verschillende vochtproblemen.",
    ],
    bouw: {
      kop: "Laag bij de beek, of in de flank erboven",
      alineas: [
        "**Laag in de vallei** zit het grondwater ondiep, en bij een natte periode stijgt het mee met de beek. Een kelder of een vloer op volle grond blijft daar zelden volledig droog. **Hoger in de flank** perst hangwater uit de leembodem tegen de bergzijde van een gebouw. Verschillende oorzaken, hetzelfde eerlijke antwoord: **een droger haalt vocht uit de lucht, niet uit de grond**.",
        "Gaat het om **bouwvocht uit een renovatie**, dan verdwijnt het definitief. De oude watermolens en hoevegebouwen hier hebben wel **massieve muren** die hun vocht traag afgeven, met een verzadigd luchtlaagje tegen het oppervlak dat een ventilator moet wegblazen.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**Voor de kelder in de vallei of in de flank**: koud en permanent vochtig. De adsorptiedroger werkt ook onder 15 °C door." },
      { key: "ttv4500", waarom: "**Bij massieve muren een voorwaarde**: hij blaast de verzadigde luchtlaag tegen het oppervlak weg, en komt onder vloeren en achter plinten." },
      { key: "ttk350", waarom: "De Medium voor een gelijkvloers of een verdieping: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttk650", waarom: "Voor een hoeve of een groot volume: 110 liter per dag, bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Zwalm: binnen 24 uur, ook in een smalle valleiweg",
      alinea:
        "Ongeveer een uur rijden. **Ligt uw woning aan een smalle of steile valleiweg, zeg dat dan bij de reservatie**, dan plant de technieker daarop. U krijgt een tijdslot en een sms een halfuur vooraf.",
    },
    afhalen: {
      kop: "Afhalen loont hier niet",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer een uur, dus twee uur heen en terug**. **Vanuit Zwalm leveren we gewoon**; de rit en de vochtmeting zitten al in de prijs van het pakket.",
    },
    buren: ["zottegem", "horebeke", "oudenaarde", "brakel", "kruisem"],
    faq: [
      {
        q: "Mijn kelder in de vallei blijft vochtig. Helpt drogen?",
        a: "Zolang het toestel draait wel: de ruimte wordt bruikbaar en schimmel krijgt geen kans. Maar het grondwater stijgt hier mee met de beek, en dat stopt een droger niet. De vochtmeting bij de levering vertelt of het om bouwvocht of om grondwater gaat.",
      },
      {
        q: "En als ik hoger in de flank woon?",
        a: "Dan gaat het meestal om hangwater: een waterlaag die door de leembodem zijwaarts zakt en tegen de bergzijde van uw woning komt te staan. Het komt na elke regenperiode terug, meestal op dezelfde plaats. Drainage aan de buitenzijde lost dat op, drogen houdt de ruimte bruikbaar.",
      },
      {
        q: "Waarom droogt een oude molen of hoeve zo traag?",
        a: "Omdat het vocht uit de kern van een massieve muur naar buiten moet, en omdat zich tegen het oppervlak een verzadigd luchtlaagje vormt dat verdere droging afremt. Reken op anderhalf tot twee keer de droogtijd van een moderne wand, met een ventilator erbij.",
      },
      {
        q: "Betaal ik een kilometerkost?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket.",
      },
      {
        q: "Hoe snel staan jullie in Zwalm?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer een uur en we plannen de Vlaamse Ardennen in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "zemst",
    title: "Bouwdroger huren in Zemst | Vernast",
    description:
      "Bouwdroger huren in Zemst, Hofstade en Elewijt: woningen tussen Zenne en Dijle, waar het water hoog kan komen. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Zemst",
    kicker: "Brusselse rand · tussen Zenne en Dijle",
    rit: { afstand: "circa 28 km", tijd: "ongeveer een halfuur" },
    intro: [
      "Zemst ligt **tussen de Zenne en de Dijle**, met Hofstade, Elewijt, Weerde en Eppegem erbij. Twee rivieren die bij extreme neerslag samen voor problemen zorgen: in de laagste delen van de gemeente **staat het water dan tot in de kelders**.",
      "Met **een halfuur rijden** is dit een van de kortste ritten van heel Vlaams-Brabant, korter dan de helft van onze eigen Kempen. Dat merkt u aan de planning.",
    ],
    bouw: {
      kop: "Laaggelegen woningen bij twee rivieren",
      alineas: [
        "Na hoogwater is **snelheid alles**. Hoe langer water in een vloeropbouw en achter een plint staat, hoe groter de kans op schimmel en op isolatie die haar waarde verliest. We zetten dan **meer capaciteit in dan strikt nodig** en altijd luchtbeweging erbij, want water kruipt onder vloeren en achter plinten waar een droger alleen niet aan komt.",
        "Buiten die situaties is het hier gewoon werk: **renovatie en nieuwbouw** in de kernen. Een verse chape geeft vijf tot tien liter water per dag per honderd vierkante meter af, en met droger en ventilator samen is een gelijkvloers **in een tiental dagen beloopbaar en in twee à drie weken klaar voor de vloerder**.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Bij waterschade**: 110 liter per dag, bereik tot ongeveer 600 m³. Hoe sneller het water eruit is, hoe minder er stuk gaat." },
      { key: "ttv4500", waarom: "Water kruipt onder vloeren en achter plinten. Zonder luchtbeweging droogt dat niet, met deze ventilator wel." },
      { key: "ttk350", waarom: "De Medium voor een chape of een renovatie: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "revolution", waarom: "**Voor de kelder die niet te verwarmen is**: de adsorptiedroger blijft ook bij lage temperatuur vocht opnemen." },
    ],
    levering: {
      kop: "Leveren in Zemst: een halfuur, dus vaak dezelfde dag",
      alinea:
        "**Een halfuur rijden, en daarmee een van onze kortste ritten in Vlaams-Brabant.** Bij waterschade bellen we u terug in plaats van u een formulier te laten afwachten, want een dag vroeger drogen is hier het verschil. Bij een gewone werf krijgt u een tijdslot en een sms een halfuur vooraf.",
    },
    afhalen: {
      kop: "Afhalen loont hier wél",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer een halfuur over de A12**, dus u bent in een uur heen en terug. Voor één of twee losse toestellen is dat de moeite, en u krijgt korting op de huurprijs. Vervoer de droger **rechtop**; heeft hij toch plat gelegen, laat hem dan 24 uur staan voor u hem inschakelt.",
    },
    buren: ["mechelen", "grimbergen", "kampenhout", "boortmeerbeek"],
    faq: [
      {
        q: "Mijn kelder is ondergelopen. Wat doe ik eerst?",
        a: "Eerst het staande water weg met een dompelpomp, dan zo snel mogelijk drogen. Haal wat nat is uit de ruimte, zet plinten los zodat de holle ruimte erachter kan drogen, en bel ons. Hoe langer water in de vloeropbouw staat, hoe groter de kans op schimmel en op isolatie die haar waarde kwijt is.",
      },
      {
        q: "Kunnen jullie dezelfde dag komen?",
        a: "Bij waterschade vaak wel: de rit naar Zemst duurt maar een halfuur. We bellen u terug om te plannen in plaats van u te laten afwachten.",
      },
      {
        q: "Dekt mijn verzekering de huur van een bouwdroger?",
        a: "Bij waterschade meestal wel, als onderdeel van de schadebeperking. Wij geven u een factuur met de vochtmetingen erbij, en dat is precies wat een expert vraagt. Vraag het na bij uw verzekeraar voor u boekt.",
      },
      {
        q: "Is afhalen vanuit Zemst de moeite?",
        a: "Ja, voor één of twee losse toestellen. U bent in een uur heen en terug over de A12, en u krijgt korting op de huurprijs. Voor een volledig pakket is leveren beter, want dan zit de rit al in de prijs en plaatst de technieker alles meteen.",
      },
      {
        q: "Hoe snel staan jullie in Zemst?",
        a: "Binnen 24 uur na uw boeking, en in de praktijk vaak sneller. De rit duurt ongeveer een halfuur.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "meise",
    title: "Bouwdroger huren in Meise | Vernast",
    description:
      "Bouwdroger huren in Meise en Wolvertem: ruime woningen op grote percelen in de groene noordrand. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Meise",
    kicker: "Brusselse rand · ruime percelen in het groen",
    rit: { afstand: "circa 30 km", tijd: "ongeveer een halfuur" },
    intro: [
      "Meise en Wolvertem vormen **de groene noordrand van Brussel**: ruime percelen, veel vrijstaande bebouwing en grote tuinen, met Oppem en Rossem erbij.",
      "Met **een halfuur rijden** ligt Meise dichter bij ons magazijn dan de helft van onze eigen Kempen. Wat we hier drogen zijn vooral **grondige renovaties van ruime woningen**.",
    ],
    bouw: {
      kop: "Vrijstaande woningen met een volledige kelder",
      alineas: [
        "Een vrijstaande woning uit de jaren zestig tot tachtig heeft meestal **drie bouwlagen en een kelder onder het hele volume**. Droge lucht blijft daar hangen waar het toestel staat, dus zetten we **per verdieping een droogzone** op in plaats van één groot toestel in de trappenhal. Eén toestel in de hal lijkt goedkoper maar droogt vooral de hal.",
        "Die woningen hebben ook **meer capaciteit nodig dan hun vierkante meters suggereren**, want het gaat om volume. Een open leefruimte met een hoog plafond telt zwaarder dan dezelfde oppervlakte onder een gewoon plafond, en daarom rekent onze Calculator op **kubieke meter**.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium per verdieping of per vleugel: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttk650", waarom: "**Voor de grote open leefruimte**: 110 liter per dag en een bereik tot ongeveer 600 m³." },
      { key: "ttv4500", waarom: "Bij een chape verdubbelt luchtbeweging vaak de snelheid, en in een ruim volume voorkomt ze dat één hoek achterblijft." },
      { key: "revolution", waarom: "**Voor de kelderverdieping** die niet verwarmd wordt: de adsorptiedroger blijft ook bij lage temperatuur vocht opnemen." },
    ],
    levering: {
      kop: "Leveren in Meise: een halfuur, geplaatst en ingesteld",
      alinea:
        "**Een halfuur rijden over de A12.** U krijgt een tijdslot en een sms een halfuur vooraf. De technieker plaatst de toestellen per droogzone, legt de afvoer naar een putje en stelt de hygrostaat in op een streefwaarde, zodat er gecontroleerd gedroogd wordt.",
    },
    afhalen: {
      kop: "Afhalen loont hier wél",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer een halfuur over de A12**. Voor één of twee losse toestellen is dat de moeite, en u krijgt korting op de huurprijs. Voor een volledige woning is leveren beter: het resultaat hangt af van waar de toestellen staan.",
    },
    buren: ["grimbergen", "wemmel", "londerzeel", "kapelle-op-den-bos"],
    faq: [
      {
        q: "Hoeveel toestellen voor een villa met drie bouwlagen?",
        a: "Doorgaans een droogzone per verdieping, dus twee tot drie drogers met een ventilator per zone. Eén groot toestel in de trappenhal lijkt goedkoper maar droogt vooral de hal. De Calculator rekent op volume in kubieke meter.",
      },
      {
        q: "Waarom vraagt de Calculator naar volume en niet naar oppervlakte?",
        a: "Omdat een droger lucht droogt. Een open leefruimte met een plafond van drie meter vijftig bevat anderhalf keer zoveel lucht als dezelfde oppervlakte onder een gewoon plafond, en heeft dus meer capaciteit nodig.",
      },
      {
        q: "Moet ik het reservoir legen?",
        a: "Nee. Onze toestellen zijn pompklaar: de technieker legt de afvoerslang naar een putje of een gootsteen. Een reservoir dat volloopt zet het toestel stil, en dan verliest u een nacht droogtijd.",
      },
      {
        q: "Is afhalen vanuit Meise de moeite?",
        a: "Ja, voor één of twee losse toestellen: u bent in een uur heen en terug over de A12 en u krijgt korting. Voor een volledig pakket is leveren logischer.",
      },
      {
        q: "Hoe snel staan jullie in Meise?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer een halfuur.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "grimbergen",
    title: "Bouwdroger huren in Grimbergen | Vernast",
    description:
      "Bouwdroger huren in Grimbergen, Strombeek-Bever en Humbeek: villa's en appartementen aan het kanaal. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Grimbergen",
    kicker: "Brusselse rand · villa's en kanaalkant",
    rit: { afstand: "circa 33 km", tijd: "ongeveer vijfendertig minuten" },
    intro: [
      "Grimbergen loopt **van de Brusselse rand tot aan het kanaal**: Strombeek-Bever ligt tegen de stad aan en is dicht bebouwd met appartementen, terwijl Beigem, Humbeek en Verbrande Brug landelijker en ruimer zijn.",
      "Dat verschil bepaalt het toestel. **In een appartement** gaat het om compact en stil, **in een villa** om volume en om drie bouwlagen die apart moeten drogen.",
    ],
    bouw: {
      kop: "Appartementen in Strombeek, villa's richting het kanaal",
      alineas: [
        "In een **bewoond appartementsgebouw** moet het toestel via de bestaande lift of trap naar boven, op **één gewoon stopcontact** draaien en **stil genoeg** zijn voor de buren. De Small bouwdroger is daarvoor gemaakt: 50 liter per dag, 0,75 kW, 25 kg, en hij past door een deur van tachtig centimeter. Is er een lift of een vaste trap, dan is **elke verdieping inbegrepen in de prijs**.",
        "In een **villa met kelderverdieping** blijft droge lucht hangen waar het toestel staat. Daarom zetten we **per verdieping een droogzone** op, met de deuren dicht, in plaats van één groot toestel in de trappenhal. Dat laatste lijkt goedkoper maar droogt vooral de hal.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**Voor een appartement of één kamer**: 50 liter per dag en 0,75 kW op een gewoon stopcontact, stil genoeg voor een bewoond gebouw." },
      { key: "ttk350", waarom: "De Medium per verdieping of voor een volledig gelijkvloers: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "Bij een chape verdubbelt luchtbeweging vaak de snelheid: hij blaast de verzadigde laag vlak boven de vloer weg." },
      { key: "revolution", waarom: "Voor de kelderverdieping of de garage die niet verwarmd wordt: de adsorptiedroger werkt ook onder 15 °C door." },
    ],
    levering: {
      kop: "Leveren in Grimbergen: binnen 24 uur, elke verdieping inbegrepen",
      alinea:
        "Een vijfendertigtal minuten rijden. Is er een lift of een vaste trap, dan is **elke verdieping inbegrepen**; moet een toestel via een ladder naar boven omdat de trap nog niet ligt, dan staat die toeslag **vooraf in uw offerte, niet achteraf op de factuur**.",
    },
    afhalen: {
      kop: "Afhalen loont hier wél",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfendertig minuten over de A12**. Voor één of twee losse toestellen is dat de moeite. Houd er rekening mee dat een droger **25 tot 40 kg weegt en rechtop vervoerd moet worden**.",
    },
    buren: ["meise", "wemmel", "vilvoorde", "zemst", "kapelle-op-den-bos"],
    faq: [
      {
        q: "Mag een bouwdroger draaien in een bewoond appartement?",
        a: "Ja, en daarvoor is de Small bouwdroger bedoeld. Hij verbruikt 0,75 kW, dus hij mag op een gewoon stopcontact, en hij is stil genoeg om in de kamer ernaast te slapen. Houd de deur van de droogzone dicht: droge lucht die door het hele gebouw trekt droogt niets snel.",
      },
      {
        q: "Zit de verdieping in de prijs?",
        a: "Is er een lift of een vaste trap, dan is elke verdieping inbegrepen. Moet een toestel via een ladder naar boven omdat de trap nog niet ligt, dan rekenen we een toeslag per verdieping, en die staat vooraf in uw offerte.",
      },
      {
        q: "Hoeveel toestellen voor een villa met kelderverdieping?",
        a: "Doorgaans een droogzone per verdieping, dus twee tot drie drogers met een ventilator per zone. De Calculator rekent op volume in kubieke meter, niet op oppervlakte.",
      },
      {
        q: "Hoeveel stroom verbruikt een bouwdroger?",
        a: "De Small ongeveer 0,75 kW per uur, de Medium rond 1,2 kW. Dat komt op een paar euro per etmaal. Het verbruik staat op elke toestelpagina zodat u het zelf kunt narekenen.",
      },
      {
        q: "Hoe snel staan jullie in Grimbergen?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfendertig minuten over de A12.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "wemmel",
    title: "Bouwdroger huren in Wemmel | Vernast",
    description:
      "Bouwdroger huren in Wemmel: villawijken tegen de Brusselse grens, met grondige renovaties. Geleverd, geplaatst en opgehaald.",
    h1: "Bouwdroger huren in Wemmel",
    kicker: "Brusselse rand · villawijken tegen de grens",
    rit: { afstand: "circa 33 km", tijd: "ongeveer vijfendertig minuten" },
    intro: [
      "Wemmel ligt **direct tegen de Brusselse grens**, en bestaat grotendeels uit **villawijken uit de jaren vijftig tot tachtig**: ruime woningen op bescheiden percelen, met een kelder onder het volume.",
      "Die generatie woningen gaat nu massaal in **grondige renovatie**, en dat is precies waarvoor hier gehuurd wordt: drie bouwlagen vers pleisterwerk, een nieuwe chape en een kelder die bij de aanpak mee wordt genomen.",
    ],
    bouw: {
      kop: "Villa's uit de jaren vijftig tot tachtig, in renovatie",
      alineas: [
        "Bij een **grondige renovatie** droogt alles tegelijk: nieuw pleisterwerk op drie verdiepingen, een nieuwe chape op het gelijkvloers en een kelder die van jaren vochtigheid af moet. Droge lucht blijft hangen waar het toestel staat, dus zetten we **per verdieping een droogzone** op, met de deuren dicht.",
        "Een kelder uit die periode heeft **geen buitenwaterdichting** en ligt deels onder het maaiveld. Zo'n ruimte komt in de winter zelden boven tien graden, en **onder 15 °C verliest een condensdroger het grootste deel van zijn rendement**. Dan zetten we er een kachel bij, of meteen een adsorptiedroger.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium per verdieping: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "revolution", waarom: "**Voor de kelder zonder waterdichting**: koud en vochtig tegelijk, en daar werkt een adsorptiedroger door waar een condensdroger stilvalt." },
      { key: "ttv4500", waarom: "Bij vers pleisterwerk en verse chape verdubbelt luchtbeweging vaak de snelheid: hij blaast de verzadigde laag weg." },
      { key: "ttk650", waarom: "Voor een groot gelijkvloers in één keer: 110 liter per dag, bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Wemmel: binnen 24 uur, per droogzone geplaatst",
      alinea:
        "Een vijfendertigtal minuten rijden. De technieker **plaatst de toestellen per droogzone** in plaats van één in de hal, legt de afvoer naar een putje en stelt de hygrostaat in. Bij de ophaling meet hij de restvochtigheid en krijgt u die op papier.",
    },
    afhalen: {
      kop: "Afhalen loont hier wél",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfendertig minuten**. Voor één of twee losse toestellen is dat de moeite, en u krijgt korting op de huurprijs. Bij een volledige renovatie is leveren beter: het resultaat hangt af van hoe de droogzones opgezet staan.",
    },
    buren: ["grimbergen", "meise", "asse", "merchtem"],
    faq: [
      {
        q: "Kan ik een hele woning met één toestel drogen?",
        a: "Beter niet. Droge lucht blijft hangen waar het toestel staat, en met open deuren droogt u vooral de gang. Per verdieping of per gesloten zone een toestel werkt sneller en komt doorgaans goedkoper uit, omdat de totale huurperiode korter is.",
      },
      {
        q: "Mijn kelder is nooit warm. Werkt een bouwdroger daar?",
        a: "Een condensdroger verliest onder 15 °C het grootste deel van zijn rendement, en een kelder uit die periode komt daar in de winter niet boven. Dan zetten we er een elektrische kachel bij om de ruimte eerst op temperatuur te brengen, of we gebruiken meteen een adsorptiedroger.",
      },
      {
        q: "Hoe lang blijft een pakket staan?",
        a: "Standaard twee weken voor een chape en één tot twee weken voor pleisterwerk, maar we meten bij de ophaling. Is het nog niet droog, dan verlengt u per week bij; is het eerder droog, dan halen we eerder op.",
      },
      {
        q: "Krijg ik krimpscheuren van een bouwdroger?",
        a: "Alleen als er te snel gedroogd wordt. Daarom stelt de technieker een streefwaarde in op de hygrostaat in plaats van het toestel vol open te zetten. Het gaat om gecontroleerd drogen.",
      },
      {
        q: "Hoe snel staan jullie in Wemmel?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfendertig minuten.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "vilvoorde",
    title: "Bouwdroger huren in Vilvoorde | Vernast",
    description:
      "Bouwdroger huren in Vilvoorde, Peutie en Koningslo: arbeiderswoningen aan de Zenne en nieuwe blokken aan het kanaal.",
    h1: "Bouwdroger huren in Vilvoorde",
    kicker: "Brusselse rand · Zenne en kanaal",
    rit: { afstand: "circa 35 km", tijd: "ongeveer vijfendertig minuten" },
    intro: [
      "Vilvoorde is **een oude industriestad aan de Zenne en het kanaal**, en dat is aan de bebouwing te zien: compacte **arbeiderswoningen en rijhuizen** in de kern, met daarnaast de nieuwe woonblokken op de voormalige industrieterreinen aan het water.",
      "Twee soorten werven dus: **renovatie van smalle, diepe rijhuizen**, en **afwerking van nieuwe appartementen** waar meerdere eenheden tegelijk moeten drogen.",
    ],
    bouw: {
      kop: "Rijhuizen in de kern, nieuwe blokken aan het water",
      alineas: [
        "Het Vilvoordse rijhuis is **smal en diep**, met vaak een kelder deels onder het maaiveld. Droge lucht gaat daar niet vanzelf van voor naar achter, dus hoort er **een ventilator bij de droger**. In de laagste straten bij de Zenne zit het grondwater ondiep, en dan blijft zo'n kelder zelden helemaal droog: **drogen haalt het uit de ruimte, de bron blijft**.",
        "Bij een **nieuw appartementsblok** draait het om planning: meerdere eenheden die achter elkaar in de agenda van de vloerder staan. Geef bij de reservatie door **hoeveel eenheden** het zijn, dan leveren we in één rit en zetten we per eenheid een droogzone op, in plaats van dezelfde rit drie keer te doen.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**Per appartement of per kamer**: 50 liter per dag en 0,75 kW op een gewoon stopcontact, stil genoeg voor een bewoond gebouw." },
      { key: "ttk350", waarom: "De Medium voor een volledig rijhuis of gelijkvloers: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "In een smal en diep rijhuis gaat droge lucht niet van voor naar achter. Deze ventilator doet dat wel, en **halveert vaak de droogtijd**." },
      { key: "revolution", waarom: "**Voor de kelder bij de Zenne**, die niet te verwarmen is: de adsorptiedroger blijft ook bij lage temperatuur vocht opnemen." },
    ],
    levering: {
      kop: "Leveren in Vilvoorde: binnen 24 uur, ook in een smalle straat",
      alinea:
        "Een vijfendertigtal minuten rijden. **Is er geen plaats om te parkeren voor de deur, zeg dat dan bij de reservatie**, dan weet de technieker dat hij verder moet uitladen. Is er een lift of een vaste trap, dan is elke verdieping inbegrepen in de prijs.",
    },
    afhalen: {
      kop: "Afhalen loont hier wél",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfendertig minuten**. Voor één los toestel is dat de moeite, en u krijgt korting op de huurprijs. Houd er rekening mee dat een droger 25 tot 40 kg weegt en **rechtop** vervoerd moet worden.",
    },
    buren: ["machelen", "grimbergen", "zaventem", "steenokkerzeel", "zemst"],
    faq: [
      {
        q: "Kunnen jullie meerdere appartementen tegelijk doen?",
        a: "Ja. Geef bij de reservatie door hoeveel eenheden er tegelijk moeten drogen, dan leveren we in één rit en zetten we per eenheid een droogzone op. Dat is goedkoper dan drie keer dezelfde rit, en uw vloerder kan achter elkaar doorwerken.",
      },
      {
        q: "Past een bouwdroger door een smalle gang?",
        a: "De Small bouwdroger is 40 bij 40 centimeter aan de basis en weegt ongeveer 25 kg. Die gaat door elke gangbare gang en trap van een arbeiderswoning. Geef bij de reservatie door dat het om een smalle doorgang gaat.",
      },
      {
        q: "Mijn kelder blijft vochtig na het drogen. Hoe kan dat?",
        a: "Omdat een droger vocht uit de lucht haalt, niet uit de grond. In de laagste straten bij de Zenne is het grondwater ondiep. Drogen houdt de ruimte bruikbaar zolang het toestel draait, maar de bron blijft. De technieker meet dat bij de levering.",
      },
      {
        q: "Hoort er een ventilator bij een rijhuis?",
        a: "In een smalle, diepe plattegrond wel. De droger maakt droge lucht, de ventilator brengt die tot achteraan en blaast de verzadigde laag langs vloer en muur weg. Hij zit standaard in onze droogpakketten voor een rijwoning.",
      },
      {
        q: "Hoe snel staan jullie in Vilvoorde?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfendertig minuten.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "machelen",
    title: "Bouwdroger huren in Machelen | Vernast",
    description:
      "Bouwdroger huren in Machelen en Diegem: kantoren en logistiek langs de ring, en woningen ertussen. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Machelen",
    kicker: "Brusselse rand · kantoren en logistiek",
    rit: { afstand: "circa 37 km", tijd: "ongeveer vijfendertig minuten" },
    intro: [
      "Machelen en Diegem liggen **tussen de ring, de luchthaven en het kanaal**, en dat maakt deze gemeente ongewoon: er staan **meer kantoor- en logistieke vierkante meters dan woningen**.",
      "Onze werven hier zijn dan ook vaak **bedrijfsmatig**: een kantoorverdieping die herinricht wordt, een logistieke hal met een nieuwe vloer, een winkelruimte voor een nieuwe huurder. Allemaal met een datum eraan.",
    ],
    bouw: {
      kop: "Kantoorverdiepingen en logistieke hallen",
      alineas: [
        "Bij een **kantoorverdieping of een winkelruimte** staat de inrichter gepland, en een gietvloer of tapijt op een te natte chape gaat loskomen. Daar drogen we tot **een gemeten waarde** en niet tot een datum, en zetten we **meer capaciteit in één keer in** in plaats van langer te drogen met te weinig. Minder huurweken is doorgaans ook goedkoper.",
        "In een **logistieke hal** gaat het om oppervlakte in plaats van om kamers. Eén droger in een hoek droogt die hoek; op een vloer van duizend vierkante meter horen meerdere toestellen verdeeld over de ruimte en **luchtbeweging over de volle lengte**. We vragen vooraf het volume en of de poorten kunnen sluiten.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Voor de hal of de kantoorverdieping**: 110 liter per dag en een bereik tot ongeveer 600 m³. Op een grote vloer zetten we er meerdere verdeeld." },
      { key: "ttv4500", waarom: "Op een grote vloer is luchtbeweging over de volle lengte de voorwaarde om overal even droog te krijgen, niet een extra." },
      { key: "ttk350", waarom: "De Medium voor een woning of een kleinere ruimte: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "teddh30", waarom: "Voor een onverwarmde hal in de winter: onder 15 °C zakt het rendement van elke condensdroger. Vraagt 400 V krachtstroom." },
    ],
    levering: {
      kop: "Leveren in Machelen: met een datum om naar terug te rekenen",
      alinea:
        "Een vijfendertigtal minuten rijden. **Geef de datum van uw inrichter door**, dan rekenen we terug hoeveel capaciteit er nodig is om die te halen, in plaats van u achteraf te laten verlengen. We vragen ook het volume in kubieke meter en de beschikbare stroom.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfendertig minuten**. Voor één los toestel kan dat lonen. Voor een hal of een kantoorverdieping nooit: daar gaan meerdere toestellen in één rit naartoe, en die levering zit al in de prijs.",
    },
    buren: ["vilvoorde", "zaventem", "steenokkerzeel", "grimbergen"],
    faq: [
      {
        q: "Hoe snel kan een kantoorvloer droog zijn?",
        a: "Dat hangt af van de dikte en van hoeveel capaciteit er staat. Een chape van vijf centimeter doet zonder hulp vijf à zeven weken; met voldoende drogers en luchtbeweging halen we dat naar twee à drie weken. Geef ons de datum van uw inrichter, dan rekenen we terug.",
      },
      {
        q: "Kunnen jullie buiten de kantooruren leveren?",
        a: "Geef bij de reservatie door welk tijdvenster er geldt in uw gebouw, dan plannen we daarbinnen. In veel kantoorgebouwen is laden en lossen aan een vast uur gebonden, en dat weet de technieker liever vooraf.",
      },
      {
        q: "Hoeveel toestellen voor een hal van 1000 m²?",
        a: "Dat hangt vooral af van de hoogte, want we rekenen op volume. Reken ruwweg op drie tot vijf drogers met luchtbeweging over de volle lengte, en in de winter een kachel erbij.",
      },
      {
        q: "Hebben jullie 400 V nodig?",
        a: "Alleen voor de elektrische kachel, die we in de winter bij een onverwarmde ruimte inzetten. De drogers en de ventilatoren draaien op 230 V. De technieker controleert de kast bij de levering.",
      },
      {
        q: "Hoe snel staan jullie in Machelen?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfendertig minuten.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "kampenhout",
    title: "Bouwdroger huren in Kampenhout | Vernast",
    description:
      "Bouwdroger huren in Kampenhout, Berg en Nederokkerzeel: landelijke kernen met hoeves en loodsen. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Kampenhout",
    kicker: "Brusselse rand · landelijk, met loodsen",
    rit: { afstand: "circa 38 km", tijd: "ongeveer vijfendertig minuten" },
    intro: [
      "Kampenhout is **landelijk gebleven**, met Berg, Buken en Nederokkerzeel errond. Het is de **witloofstreek**, en dat heeft er iets achtergelaten: naast de hoeves staan hier opvallend veel **loodsen en koelruimtes** van de land- en tuinbouw.",
      "Precies die gebouwen komen in herbestemming: een loods die bedrijfsruimte wordt, een koelcel die opengebroken is, een stal die woonruimte wordt.",
    ],
    bouw: {
      kop: "Hoeves en loodsen in herbestemming",
      alineas: [
        "Een **loods of koelruimte in herbestemming** is een groot, hoog en meestal onverwarmd volume, en vaak met een dikke betonvloer die van jaren vochtigheid af moet. Wij rekenen op **volume in kubieke meter**, en zo'n gebouw telt zwaarder dan zijn vloeroppervlak suggereert. Daarbij hoort **luchtbeweging over de volle lengte**, want droge lucht blijft anders hangen waar het toestel staat.",
        "De poorten zijn hier het terugkerende punt. **Een droger tegen een open poort werkt tegen de buitenlucht in**, en die is onuitputtelijk. We vragen daarom vooraf of de ruimte dicht te krijgen is. Lukt dat niet, dan heeft drogen daar geen zin en zeggen we dat liever vooraf.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Voor de loods of de koelruimte**: 110 liter per dag en een bereik tot ongeveer 600 m³. Op een groot volume zetten we er meerdere verdeeld." },
      { key: "ttv4500", waarom: "Op een groot volume is luchtbeweging over de volle lengte de voorwaarde om overal even droog te krijgen." },
      { key: "ttk350", waarom: "De Medium voor een woning of een hoevegedeelte: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "revolution", waarom: "**Voor de onverwarmde loods in de winter**: de adsorptiedroger blijft ook bij lage temperatuur vocht opnemen, waar een condensdroger stilvalt." },
    ],
    levering: {
      kop: "Leveren in Kampenhout: binnen 24 uur, met het volume vooraf",
      alinea:
        "Een vijfendertigtal minuten rijden. Bij een loods of een hoeve vragen we **vooraf het volume in kubieke meter**, de vloeropbouw en of de poorten kunnen sluiten, zodat de technieker met het juiste toestel vertrekt in plaats van het ter plaatse te ontdekken.",
    },
    afhalen: {
      kop: "Afhalen loont hier wél, voor één toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfendertig minuten**. Voor één los toestel is dat de moeite. Voor een loods niet: daar gaan meerdere toestellen in één rit naartoe, en het resultaat hangt af van hoe ze verdeeld staan.",
    },
    buren: ["steenokkerzeel", "zemst", "haacht", "boortmeerbeek", "kortenberg"],
    faq: [
      {
        q: "Kunnen jullie een loods drogen die bedrijfsruimte wordt?",
        a: "Ja. Geef vooraf het volume in kubieke meter door, de vloeropbouw en of de poorten en verluchting kunnen sluiten. Is de ruimte niet te verwarmen, dan zetten we een adsorptiedroger in die ook bij lage temperatuur doorwerkt.",
      },
      {
        q: "Moeten de poorten dicht tijdens het drogen?",
        a: "Ja. Een droger tegen een open poort droogt de buitenlucht, en die is onuitputtelijk. Kunnen de poorten niet sluiten, dan heeft drogen geen zin en zeggen we dat liever vooraf dan achteraf.",
      },
      {
        q: "Hoeveel toestellen voor een loods van 800 m³?",
        a: "Doorgaans twee tot drie drogers verdeeld over de ruimte, met luchtbeweging over de volle lengte, en in de winter een kachel erbij. Eén droger in een hoek droogt die hoek; het gaat om verdeling even veel als om capaciteit.",
      },
      {
        q: "Betaal ik een kilometerkost?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket.",
      },
      {
        q: "Hoe snel staan jullie in Kampenhout?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfendertig minuten.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "zaventem",
    title: "Bouwdroger huren in Zaventem | Vernast",
    description:
      "Bouwdroger huren in Zaventem, Sterrebeek en Nossegem: kantoorgebouwen bij de luchthaven en woningen errond. Binnen uw tijdvenster geleverd, geplaatst en opgehaald.",
    h1: "Bouwdroger huren in Zaventem",
    kicker: "Brusselse rand · kantoren bij de luchthaven",
    rit: { afstand: "circa 40 km", tijd: "ongeveer veertig minuten" },
    intro: [
      "Zaventem is **de kantoorgemeente van de Brusselse rand**, met de luchthaven aan de ene kant en Sterrebeek, Nossegem en Sint-Stevens-Woluwe aan de andere.",
      "Daardoor is **ongeveer de helft van onze werven hier bedrijfsmatig**: een kantoorverdieping die herinricht wordt voor een nieuwe huurder, met een datum die niet opschuift. De andere helft is gewone woningrenovatie in de dorpskernen.",
    ],
    bouw: {
      kop: "Kantoorverdiepingen met een deadline, en woningen errond",
      alineas: [
        "Bij een **kantoorverdieping voor een nieuwe huurder** staat de inrichter gepland, en een gietvloer of tapijt op een te natte chape gaat loskomen. Daar drogen we tot **een gemeten waarde** en niet tot een datum: de technieker meet bij de ophaling en u krijgt die meting op papier, zodat uw inrichter weet waar hij aan toe is.",
        "In een kantoorgebouw komt er iets praktisch bij: **laden en lossen is er vaak aan een vast tijdvenster gebonden**, en soms moet het materiaal via een goederenlift. Geef dat door bij de reservatie, dan plant de technieker daarbinnen in plaats van voor een gesloten laadkade te staan.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Voor een volledige kantoorverdieping**: 110 liter per dag en een bereik tot ongeveer 600 m³." },
      { key: "ttk350", waarom: "De Medium per zone of voor een woning: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "Op een grote vloer voorkomt luchtbeweging dat één hoek achterblijft; bij een chape verdubbelt ze vaak de snelheid." },
      { key: "ttk170", waarom: "Voor één kamer, een sanitair blok of een appartement: 50 liter per dag en 0,75 kW op een gewoon stopcontact." },
    ],
    levering: {
      kop: "Leveren in Zaventem: binnen uw tijdvenster",
      alinea:
        "Een veertigtal minuten rijden. **Geldt er in uw gebouw een tijdvenster voor laden en lossen, of moet het materiaal via een goederenlift, zeg dat dan bij de reservatie**, dan plannen we daarbinnen. Geef ook de datum van uw inrichter door, dan rekenen we terug hoeveel capaciteit nodig is.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer veertig minuten**. Voor één los toestel kan dat lonen. Voor een kantoorverdieping niet: daar gaan meerdere toestellen in één rit naartoe, en die levering zit al in de prijs.",
    },
    buren: ["machelen", "steenokkerzeel", "kortenberg", "wezembeek-oppem", "vilvoorde"],
    faq: [
      {
        q: "Kunnen jullie binnen een vast tijdvenster leveren?",
        a: "Ja. In veel kantoorgebouwen is laden en lossen aan een uur gebonden, en soms moet het materiaal via een goederenlift. Geef dat door bij de reservatie, dan plant de technieker daarbinnen.",
      },
      {
        q: "Hoe snel kan een kantoorvloer droog zijn?",
        a: "Dat hangt af van de dikte en van hoeveel capaciteit er staat. Een chape van vijf centimeter doet zonder hulp vijf à zeven weken; met voldoende drogers en luchtbeweging halen we dat naar twee à drie weken.",
      },
      {
        q: "Hoe droog moet een chape zijn voor tapijt of een gietvloer?",
        a: "Strenger dan voor tegels. Uw inrichter bepaalt de grens; wij drogen tot een gemeten waarde en niet tot een datum. De technieker meet bij de ophaling en u krijgt die meting op papier.",
      },
      {
        q: "Mag een bouwdroger in een bewoond appartement draaien?",
        a: "Ja. De Small bouwdroger verbruikt 0,75 kW, dus hij mag op een gewoon stopcontact, en hij is stil genoeg om in de kamer ernaast te slapen.",
      },
      {
        q: "Hoe snel staan jullie in Zaventem?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer veertig minuten.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "steenokkerzeel",
    title: "Bouwdroger huren in Steenokkerzeel | Vernast",
    description:
      "Bouwdroger huren in Steenokkerzeel, Melsbroek en Perk: woningen in de luchthavenrand, vaak in verbouwing. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Steenokkerzeel",
    kicker: "Brusselse rand · in de luchthavenrand",
    rit: { afstand: "circa 42 km", tijd: "ongeveer veertig minuten" },
    intro: [
      "Steenokkerzeel ligt **met Melsbroek en Perk pal in de luchthavenrand**, en dat heeft een gevolg dat elders niet speelt: veel woningen hier zijn **ingrijpend verbouwd voor geluidsisolatie**, met nieuwe dakopbouw, nieuwe ramen en vaak een volledig heropgebouwde zolderverdieping.",
      "Zo'n verbouwing brengt **veel bouwvocht op de verdieping** in plaats van op het gelijkvloers, en dat vraagt een andere opzet dan een gewone renovatie.",
    ],
    bouw: {
      kop: "Verbouwing op de verdieping, en een luchtdichter gebouw",
      alineas: [
        "Bij een verbouwde **zolder of dakverdieping** zit het vocht hoog in het gebouw, en droge lucht zakt niet. Daar hoort **een toestel op de verdieping zelf** bij, met de trapdeur dicht, in plaats van één in de hal beneden. Reken er ook op dat de ruimte na de werken **veel luchtdichter** is dan ervoor: het vocht gaat er niet meer vanzelf uit.",
        "Dat laatste is precies waarom er na een geluidsisolatieverbouwing vaker vochtklachten komen. **Een goed geïsoleerd en luchtdicht gebouw ventileert niet meer vanzelf**, dus blijft het bouwvocht hangen tot het er mechanisch uit gehaald wordt. Een droger doet dat; een open raam in november vooral afkoelen.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium per verdieping: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttk170", waarom: "**Voor de zolder of één kamer**: 50 liter per dag, 0,75 kW en 25 kg, dus hij gaat door elke trapopening." },
      { key: "ttv4500", waarom: "Bij vers pleisterwerk op een dakverdieping verdeelt deze ventilator de droge lucht tot in de nok." },
      { key: "revolution", waarom: "Voor een onverwarmde kelder of garage: de adsorptiedroger blijft ook bij lage temperatuur vocht opnemen." },
    ],
    levering: {
      kop: "Leveren in Steenokkerzeel: binnen 24 uur, tot op de verdieping",
      alinea:
        "Een veertigtal minuten rijden. Is er een vaste trap, dan is **elke verdieping inbegrepen in de prijs**; moet een toestel via een ladder naar boven omdat de trap nog niet ligt, dan staat die toeslag **vooraf in uw offerte**. De technieker zet de droogzone op de verdieping zelf op.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer veertig minuten**. Voor één los toestel kan dat lonen. Houd er rekening mee dat een droger 25 tot 40 kg weegt en dat u hem zelf de trap op moet krijgen.",
    },
    buren: ["zaventem", "machelen", "kampenhout", "vilvoorde", "kortenberg"],
    faq: [
      {
        q: "Waarom blijft mijn verbouwde zolder vochtig?",
        a: "Omdat een goed geïsoleerde en luchtdichte ruimte niet meer vanzelf ventileert. Het bouwvocht uit pleisterwerk en chape blijft hangen tot het er mechanisch uit gehaald wordt. Een droger doet dat; een open raam in de winter koelt vooral af.",
      },
      {
        q: "Moet het toestel op de verdieping staan?",
        a: "Ja, als het vocht daar zit. Droge lucht zakt niet, dus een toestel beneden droogt vooral de hal. Zet het in de ruimte zelf, met de deur dicht, en zet er bij een dakverdieping een ventilator bij om de droge lucht tot in de nok te verdelen.",
      },
      {
        q: "Zit de verdieping in de prijs?",
        a: "Is er een vaste trap of een lift, dan is elke verdieping inbegrepen. Moet een toestel via een ladder naar boven, dan rekenen we een toeslag per verdieping, en die staat vooraf in uw offerte.",
      },
      {
        q: "Hoe lang blijft een pakket staan?",
        a: "Standaard twee weken voor een chape en één tot twee weken voor pleisterwerk, maar we meten bij de ophaling. Is het nog niet droog, dan verlengt u per week bij.",
      },
      {
        q: "Hoe snel staan jullie in Steenokkerzeel?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer veertig minuten.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "kortenberg",
    title: "Bouwdroger huren in Kortenberg | Vernast",
    description:
      "Bouwdroger huren in Kortenberg, Erps-Kwerps en Everberg: verkavelingen en dorpskernen op zandleem. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Kortenberg",
    kicker: "Brusselse rand · verkavelingen op zandleem",
    rit: { afstand: "circa 45 km", tijd: "ongeveer veertig minuten" },
    intro: [
      "Kortenberg ligt **op de as tussen Brussel en Leuven**, met Erps-Kwerps, Everberg en Meerbeek erbij. Het is hier **zandleem**, en de bebouwing is vooral **open en halfopen nieuwbouw in verkavelingen** rond de oude dorpskernen.",
      "Wat we hier drogen is daarom voorspelbaar werk: **chape van een volledig gelijkvloers**, en in de winter een ruwbouw die eerst op temperatuur moet.",
    ],
    bouw: {
      kop: "Verkavelingen rond de kernen, op zandleem",
      alineas: [
        "Een verse chape geeft **vijf tot tien liter water per dag per honderd vierkante meter** af in de eerste weken, en dat moet eruit voor het pleisterwerk en de vloer komen. Met droger en ventilator samen is een gelijkvloers **in een tiental dagen beloopbaar en in twee à drie weken klaar voor de vloerder**, tegenover vijf à zeven weken zonder hulp.",
        "In de winter is **temperatuur de beperkende factor**. Onder 15 °C verliest een condensdroger het grootste deel van zijn rendement, en een ruwbouw zonder ramen komt daar niet boven. Dan gaat er een elektrische kachel mee, die **400 V** vraagt; de technieker controleert de werfkast bij de levering.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De standaard voor een nieuwbouwwoning: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "Bij een chape verdubbelt luchtbeweging vaak de snelheid: hij blaast de verzadigde laag vlak boven de vloer weg." },
      { key: "ttk650", waarom: "Voor een groot gelijkvloers of een open leefruimte met een hoog plafond: 110 liter per dag, bereik tot ongeveer 600 m³." },
      { key: "teddh30", waarom: "Voor de onverwarmde ruwbouw in de winter: onder 15 °C zakt het rendement van elke condensdroger. Vraagt 400 V krachtstroom." },
    ],
    levering: {
      kop: "Leveren in Kortenberg: binnen 24 uur, buiten de spits",
      alinea:
        "Een veertigtal minuten rijden, **buiten de spits**: de rit gaat over de ring, en die staat tussen zeven en negen uur stil. We plannen deze hoek daarom met een tijdslot in de late voormiddag of de namiddag, in plaats van u een uur te beloven dat we niet halen.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer veertig minuten buiten de spits**. Voor één los toestel kan dat lonen. Voor een pakket op een nieuwbouwwerf is leveren beter: de rit zit al in de prijs en de technieker zet de droogzones meteen goed op.",
    },
    buren: ["steenokkerzeel", "kampenhout", "zaventem", "bertem", "herent"],
    faq: [
      {
        q: "Hoe lang moet een chape drogen met een droger?",
        a: "Reken op een week per centimeter dikte zonder hulp, en met droger en ventilator ongeveer de helft. Een chape van vijf centimeter is dan in twee à drie weken klaar voor de vloerder. De technieker meet bij de ophaling of de restvochtigheid laag genoeg is.",
      },
      {
        q: "Wat als het vriest tijdens de droging?",
        a: "Dan verwarmen we mee. Onder 15 °C verliest een condensdroger het grootste deel van zijn rendement, dus in een onverwarmde ruwbouw zetten we er een elektrische kachel bij. Die vraagt 400 V; de technieker controleert de werfkast bij de levering.",
      },
      {
        q: "Krijg ik een tijdslot?",
        a: "Ja, en een sms een halfuur vooraf. Voor de Brusselse rand plannen we buiten de spits, omdat de rit over de ring gaat. Dat betekent meestal een slot in de late voormiddag of de namiddag.",
      },
      {
        q: "Hoeveel toestellen voor een gelijkvloers van 140 m²?",
        a: "Doorgaans twee drogers met een ventilator per droogzone, en een derde als de verdieping meteen mee moet. De Calculator rekent op volume in kubieke meter, want een hoog plafond telt zwaarder dan extra vierkante meters.",
      },
      {
        q: "Hoe snel staan jullie in Kortenberg?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer veertig minuten buiten de spits.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "kraainem",
    title: "Bouwdroger huren in Kraainem | Vernast",
    description:
      "Bouwdroger huren in Kraainem: villa's en appartementen tegen de Brusselse grens, vaak in grondige renovatie. Per verdieping een droogzone, geleverd en geplaatst.",
    h1: "Bouwdroger huren in Kraainem",
    kicker: "Brusselse rand · villa's tegen de grens",
    rit: { afstand: "circa 42 km", tijd: "ongeveer veertig minuten" },
    intro: [
      "Kraainem ligt **direct tegen de Brusselse grens**, aan de kant van Woluwe, en is dicht bebouwd met **villa's en appartementsgebouwen uit de jaren vijftig tot zeventig**.",
      "Die generatie gebouwen gaat nu in **grondige renovatie**, en dat is precies waarvoor hier gehuurd wordt: vers pleisterwerk op meerdere verdiepingen, een nieuwe chape en een kelder of garage die mee wordt aangepakt.",
    ],
    bouw: {
      kop: "Villa's en appartementen uit de naoorlogse periode",
      alineas: [
        "Bij een **grondige renovatie** droogt alles tegelijk, verspreid over meerdere verdiepingen. Droge lucht blijft hangen waar het toestel staat, dus zetten we **per verdieping een droogzone** op, met de deuren dicht. Eén groot toestel in de trappenhal lijkt goedkoper maar droogt vooral de hal, en dan huurt u langer.",
        "In een **bewoond appartementsgebouw** komt er iets praktisch bij: het toestel moet via de lift of de trap naar boven, **op één gewoon stopcontact** draaien en **stil genoeg** zijn voor de buren. Is er een lift of een vaste trap, dan is **elke verdieping inbegrepen in de prijs**.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**Voor een appartement of één kamer**: 50 liter per dag en 0,75 kW op een gewoon stopcontact, stil genoeg voor een bewoond gebouw." },
      { key: "ttk350", waarom: "De Medium per verdieping: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "Bij vers pleisterwerk en verse chape verdubbelt luchtbeweging vaak de snelheid." },
      { key: "revolution", waarom: "Voor de kelder of de ondergrondse garage die niet verwarmd wordt: de adsorptiedroger werkt ook onder 15 °C door." },
    ],
    levering: {
      kop: "Leveren in Kraainem: binnen 24 uur, buiten de spits",
      alinea:
        "Een veertigtal minuten rijden, **buiten de spits**: de rit gaat over de ring, en die staat tussen zeven en negen uur stil. Is er een lift of een vaste trap, dan is elke verdieping inbegrepen; moet een toestel via een ladder naar boven, dan staat die toeslag vooraf in uw offerte.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer veertig minuten buiten de spits**. Voor één los toestel kan dat lonen. Voor een volledige renovatie is leveren beter: het resultaat hangt af van hoe de droogzones opgezet staan.",
    },
    buren: ["wezembeek-oppem", "zaventem", "tervuren"],
    faq: [
      {
        q: "Mag een bouwdroger draaien in een bewoond appartement?",
        a: "Ja, en daarvoor is de Small bouwdroger bedoeld. Hij verbruikt 0,75 kW, dus hij mag op een gewoon stopcontact, en hij is stil genoeg om in de kamer ernaast te slapen. Houd de deur van de droogzone dicht.",
      },
      {
        q: "Kan ik een hele woning met één toestel drogen?",
        a: "Beter niet. Droge lucht blijft hangen waar het toestel staat, en met open deuren droogt u vooral de gang. Per verdieping of per gesloten zone een toestel werkt sneller en komt doorgaans goedkoper uit, omdat de totale huurperiode korter is.",
      },
      {
        q: "Zit de verdieping in de prijs?",
        a: "Is er een lift of een vaste trap, dan is elke verdieping inbegrepen. Moet een toestel via een ladder naar boven omdat de trap nog niet ligt, dan rekenen we een toeslag per verdieping, en die staat vooraf in uw offerte.",
      },
      {
        q: "Krijg ik een tijdslot?",
        a: "Ja, en een sms een halfuur vooraf. Voor de Brusselse rand plannen we buiten de spits, omdat de rit over de ring gaat.",
      },
      {
        q: "Hoe snel staan jullie in Kraainem?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer veertig minuten buiten de spits.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "wezembeek-oppem",
    title: "Bouwdroger huren in Wezembeek-Oppem | Vernast",
    description:
      "Bouwdroger huren in Wezembeek-Oppem: villawijken aan de oostrand van Brussel, met kelders onder het hele volume.",
    h1: "Bouwdroger huren in Wezembeek-Oppem",
    kicker: "Brusselse rand · villawijken aan de oostkant",
    rit: { afstand: "circa 43 km", tijd: "ongeveer veertig minuten" },
    intro: [
      "Wezembeek-Oppem bestaat vrijwel volledig uit **villawijken aan de oostrand van Brussel**: ruime woningen op bescheiden percelen, met een **kelder onder het hele volume** en drie bouwlagen erboven.",
      "Die woningen zijn gebouwd tussen de jaren vijftig en tachtig, en gaan nu in renovatie. Wat we hier drogen is dus bijna altijd **vers pleisterwerk en nieuwe chape in een bestaande woning**.",
    ],
    bouw: {
      kop: "Drie bouwlagen boven een volledige kelder",
      alineas: [
        "Een woning met **drie bouwlagen en een kelder** vraagt een droogzone per verdieping. Droge lucht blijft hangen waar het toestel staat, en met open deuren droogt u vooral de trappenhal. Per verdieping een toestel met de deuren dicht werkt sneller en komt doorgaans **goedkoper uit**, omdat de totale huurperiode korter is.",
        "De kelder is het trage punt. Uit die periode heeft hij **geen buitenwaterdichting**, hij ligt deels onder het maaiveld en hij komt in de winter zelden boven tien graden. **Onder 15 °C verliest een condensdroger het grootste deel van zijn rendement**, dus zetten we er een kachel bij of meteen een adsorptiedroger.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium per verdieping: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "revolution", waarom: "**Voor de kelder zonder waterdichting**: koud en vochtig tegelijk, en daar werkt een adsorptiedroger door waar een condensdroger stilvalt." },
      { key: "ttv4500", waarom: "Bij vers pleisterwerk en verse chape verdubbelt luchtbeweging vaak de snelheid." },
      { key: "ttk650", waarom: "Voor een groot gelijkvloers in één keer: 110 liter per dag, bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Wezembeek-Oppem: binnen 24 uur, buiten de spits",
      alinea:
        "Een veertigtal minuten rijden, **buiten de spits**: de rit gaat over de ring, en die staat tussen zeven en negen uur stil. De technieker plaatst de toestellen per droogzone, legt de afvoer naar een putje en stelt de hygrostaat in op een streefwaarde.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer veertig minuten buiten de spits**. Voor één los toestel kan dat lonen. Voor een volledige woning is leveren beter: het resultaat hangt af van waar de toestellen staan.",
    },
    buren: ["kraainem", "tervuren", "zaventem"],
    faq: [
      {
        q: "Mijn kelder is nooit warm. Werkt een bouwdroger daar?",
        a: "Een condensdroger verliest onder 15 °C het grootste deel van zijn rendement, en een kelder uit die periode komt daar in de winter niet boven. Dan zetten we er een elektrische kachel bij om de ruimte eerst op temperatuur te brengen, of we gebruiken meteen een adsorptiedroger.",
      },
      {
        q: "Hoeveel toestellen voor een woning met drie bouwlagen?",
        a: "Doorgaans een droogzone per verdieping, dus twee tot drie drogers met een ventilator per zone. De Calculator rekent op volume in kubieke meter, niet op oppervlakte.",
      },
      {
        q: "Is één groot toestel niet goedkoper?",
        a: "Op papier wel, in de praktijk niet. Eén toestel in de trappenhal droogt vooral de hal, en dan huurt u langer. Twee kleinere toestellen in twee gesloten zones zijn samen sneller klaar, en de huurperiode weegt zwaarder dan het aantal toestellen.",
      },
      {
        q: "Krijg ik een tijdslot?",
        a: "Ja, en een sms een halfuur vooraf. Voor de Brusselse rand plannen we buiten de spits, omdat de rit over de ring gaat.",
      },
      {
        q: "Hoe snel staan jullie hier?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer veertig minuten buiten de spits.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "tervuren",
    title: "Bouwdroger huren in Tervuren | Vernast",
    description:
      "Bouwdroger huren in Tervuren, Vossem en Duisburg: herenhuizen en grote villa's aan het park. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Tervuren",
    kicker: "Brusselse rand · herenhuizen aan het park",
    rit: { afstand: "circa 48 km", tijd: "ongeveer vijfenveertig minuten" },
    intro: [
      "Tervuren is **groen en ruim**, met het park, Vossem, Duisburg en Moorsel. De bebouwing is uitzonderlijk voor de rand: **herenhuizen en grote villa's op uitgestrekte percelen**, met hoge plafonds en volwaardige kelderverdiepingen.",
      "Die hoogte is het punt. **Wij rekenen op volume**, niet op oppervlakte, en in een huis met plafonds van drie meter vijftig scheelt dat een derde tot de helft in capaciteit.",
    ],
    bouw: {
      kop: "Hoge plafonds, grote volumes en een afwerking die geen restvocht verdraagt",
      alineas: [
        "Een herenhuis met **plafonds van drie meter vijftig** bevat anderhalf keer zoveel lucht als dezelfde oppervlakte onder een gewoon plafond, en heeft dus meer capaciteit nodig. Rekent u op vierkante meters, dan zet u te laag in en huurt u twee weken langer dan nodig. Daarom vraagt onze Calculator naar **kubieke meter**.",
        "De afwerking van zo'n huis verdraagt **geen te hoge restvochtigheid**: massief parket of natuursteen op een chape die nog niet droog is, gaat achteraf werken. Daarom drogen we tot **een gemeten waarde** en niet tot een datum. De technieker meet bij de ophaling, en is het nog niet droog, dan blijft het pakket staan.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Voor de grote volumes met hoge plafonds**: 110 liter per dag en een bereik tot ongeveer 600 m³." },
      { key: "ttk350", waarom: "De Medium per verdieping of per vleugel: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "Bij een chape onder parket verdubbelt luchtbeweging vaak de snelheid, en ze voorkomt dat één hoek achterblijft." },
      { key: "revolution", waarom: "**Voor de kelderverdieping** die niet verwarmd wordt: de adsorptiedroger blijft ook bij lage temperatuur vocht opnemen." },
    ],
    levering: {
      kop: "Leveren in Tervuren: geplaatst, ingesteld en gemeten",
      alinea:
        "Een vijfenveertigtal minuten rijden, **buiten de spits**. De technieker plaatst de toestellen per droogzone en stelt de hygrostaat in. Bij de ophaling meet hij de restvochtigheid; is die nog te hoog voor uw vloerder, dan blijft het pakket staan en verlengt u per week bij.",
    },
    afhalen: {
      kop: "Afhalen loont hier niet",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfenveertig minuten buiten de spits**. Voor een werf waar de vloerder op een gemeten waarde wacht, is leveren bijna altijd de betere keuze: de meting hoort erbij en de rit zit al in de prijs.",
    },
    buren: ["wezembeek-oppem", "overijse", "huldenberg", "bertem", "kraainem"],
    faq: [
      {
        q: "Hoe droog moet een chape zijn voor massief parket?",
        a: "Uw vloerder bepaalt de grens, en die is voor parket strenger dan voor tegels. Wij drogen tot een gemeten waarde in plaats van tot een datum: de technieker meet bij de ophaling, en is het nog niet droog, dan blijft het pakket staan. Parket op een te natte chape gaat achteraf werken.",
      },
      {
        q: "Waarom vraagt de Calculator naar volume en niet naar oppervlakte?",
        a: "Omdat een droger lucht droogt. Een ruimte met een plafond van drie meter vijftig bevat anderhalf keer zoveel lucht als dezelfde oppervlakte onder een gewoon plafond. Rekenen op vierkante meters zet u in zo'n huis te laag in.",
      },
      {
        q: "Hoeveel toestellen voor een herenhuis?",
        a: "Reken op een droogzone per verdieping en per gesloten vleugel, dus drie tot vijf toestellen met een ventilator per zone. Geef het volume in kubieke meter door, dan rekenen we het precies uit.",
      },
      {
        q: "Kan een bouwdroger schade geven aan mijn afwerking?",
        a: "Te snel drogen kan: krimpscheuren in verse chape of pleisterwerk als de luchtvochtigheid in één keer onderuit gaat. Daarom stelt de technieker de hygrostaat in in plaats van het toestel vol open te zetten.",
      },
      {
        q: "Hoe snel staan jullie in Tervuren?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfenveertig minuten buiten de spits.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "hoeilaart",
    title: "Bouwdroger huren in Hoeilaart | Vernast",
    description:
      "Bouwdroger huren in Hoeilaart: woningen in de steile IJsevallei en oude druivenserres in herbestemming. Geleverd, geplaatst en opgehaald, ook in een steile straat.",
    h1: "Bouwdroger huren in Hoeilaart",
    kicker: "Brusselse rand · de serres en de vallei",
    rit: { afstand: "circa 50 km", tijd: "ongeveer vijfenveertig minuten" },
    intro: [
      "Hoeilaart ligt **in de IJsevallei tegen het Zoniënwoud**, en is het dorp van de **druiventeelt**: op zijn hoogtepunt stonden hier duizenden serres. Een deel daarvan staat er nog, en komt nu in herbestemming.",
      "Daarnaast is het hier **steil**. Een woning in de valleiflank heeft aan één zijde grond tegen de muur, en dat levert een vochtprobleem op dat geen bouwvocht is.",
    ],
    bouw: {
      kop: "Serres in herbestemming, en woningen in de valleiflank",
      alineas: [
        "Een **oude druivenserre of een bijhorend stookhuis** dat herbestemd wordt, is een lastig volume: veel glas, veel luchtdoorlaat en zelden te verwarmen. Een droger tegen een open constructie werkt tegen de buitenlucht in, dus vragen we vooraf of de ruimte **dicht te krijgen** is. Lukt dat niet, dan heeft drogen daar geen zin en zeggen we dat liever vooraf.",
        "In de **valleiflank** perst hangwater uit de bodem tegen de bergzijde van een woning. Dat komt na elke regenperiode terug, meestal op dezelfde plaats. **Een droger haalt vocht uit de lucht, niet uit de grond**: hij houdt de ruimte bruikbaar, maar drainage aan de buitenzijde lost het op. De technieker meet dat bij de levering.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**Voor de ruimte in de helling of een onverwarmde serre**: de adsorptiedroger werkt ook onder 15 °C door, waar een condensdroger stilvalt." },
      { key: "ttk350", waarom: "De Medium voor een woning of een gelijkvloers: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "Bij massieve muren een voorwaarde, bij een chape een versneller: hij blaast de verzadigde luchtlaag weg." },
      { key: "ttk650", waarom: "Voor een groot volume of een herbestemd bijgebouw: 110 liter per dag, bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Hoeilaart: binnen 24 uur, ook in een steile straat",
      alinea:
        "Een vijfenveertigtal minuten rijden, **buiten de spits**. **Staat uw woning in een steile straat waar de bestelwagen niet voor de deur kan, zeg dat dan bij de reservatie**, dan weet de technieker dat hij verder moet uitladen.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfenveertig minuten buiten de spits**. Voor één los toestel kan dat lonen. Voor een serre of een groot volume niet: daar hangt het resultaat af van hoe de toestellen verdeeld staan.",
    },
    buren: ["overijse", "sint-genesius-rode", "tervuren", "linkebeek"],
    faq: [
      {
        q: "Kunnen jullie een oude serre drogen?",
        a: "Alleen als ze dicht te krijgen is. Veel glas en veel luchtdoorlaat betekent dat een droger de buitenlucht droogt, en die is onuitputtelijk. Geef vooraf het volume door en of de constructie kan sluiten, dan rekenen we uit of het zin heeft.",
      },
      {
        q: "Mijn muur aan de bergzijde blijft vochtig. Wat is dat?",
        a: "Waarschijnlijk hangwater: een waterlaag die zijwaarts door de bodem zakt en tegen die muur komt te staan. Het komt na elke regenperiode terug. Een droger houdt de ruimte bruikbaar, drainage aan de buitenzijde lost het op. De technieker meet dat bij de levering.",
      },
      {
        q: "Kan de bestelwagen tot bij mijn huis?",
        a: "In de meeste straten wel. Is uw straat steil of smal, zeg dat dan bij de reservatie, dan weet de technieker dat hij verder moet uitladen en brengt hij het juiste materiaal mee.",
      },
      {
        q: "Krijg ik een tijdslot?",
        a: "Ja, en een sms een halfuur vooraf. Voor de Brusselse rand plannen we buiten de spits, omdat de rit over de ring gaat.",
      },
      {
        q: "Hoe snel staan jullie in Hoeilaart?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfenveertig minuten buiten de spits.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "overijse",
    title: "Bouwdroger huren in Overijse | Vernast",
    description:
      "Bouwdroger huren in Overijse, Jezus-Eik en Maleizen: woningen op de steile flanken van de IJsevallei. Geleverd en geplaatst, met vochtmeting inbegrepen.",
    h1: "Bouwdroger huren in Overijse",
    kicker: "Brusselse rand · steile flanken en serres",
    rit: { afstand: "circa 52 km", tijd: "ongeveer vijfenveertig minuten" },
    intro: [
      "Overijse loopt **over de flanken van de IJsevallei**, met Jezus-Eik, Maleizen, Tombeek en Eizer. Net als in Hoeilaart staan hier nog **oude druivenserres**, en net als daar is het **steil**.",
      "Die hellingen bepalen het werk: een woning die in de flank gebouwd is, heeft **aan de bergzijde grond tegen de muur** over de volle hoogte, en daar zit het vocht het langst.",
    ],
    bouw: {
      kop: "Woningen half in de helling, met grond tegen de bergmuur",
      alineas: [
        "**Hangwater is geen bouwvocht.** Een woning in de flank heeft aan de bergzijde grond tegen de muur, en bij elke regenperiode perst het water daar tegenaan. Een droger haalt het uit de lucht maar niet uit de grond: het komt terug zodra het toestel weg is. **Wij meten dat bij de levering** en zeggen eerlijk dat drainage aan de buitenzijde de oplossing is.",
        "Gaat het om **bouwvocht uit een renovatie**, dan verdwijnt het definitief. Een souterrain of een half ingegraven gelijkvloers is dan wel het traagste deel: koud, gesloten en zonder doorstroming. Daar gaat **een adsorptiedroger** naartoe, die ook bij lage temperatuur doorwerkt.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**Voor het souterrain of de ruimte in de helling**: koud en vochtig tegelijk, en daar werkt een adsorptiedroger door waar een condensdroger stilvalt." },
      { key: "ttk350", waarom: "De Medium per verdieping: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "Bij massieve muren een voorwaarde: hij blaast de verzadigde luchtlaag tegen het oppervlak weg, en komt onder vloeren." },
      { key: "ttk650", waarom: "Voor een groot gelijkvloers of een hoog volume: 110 liter per dag, bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Overijse: binnen 24 uur, buiten de spits",
      alinea:
        "Een vijfenveertigtal minuten rijden, **buiten de spits**: de rit gaat over de ring. Staat uw woning aan een steile oprit of een smalle valleiweg, **zeg dat dan bij de reservatie**, dan plant de technieker daarop in plaats van het ter plaatse te ontdekken.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfenveertig minuten buiten de spits**. Voor één los toestel kan dat lonen. Voor een pakket is leveren beter: de rit en de vochtmeting zitten al in de prijs.",
    },
    buren: ["hoeilaart", "tervuren", "huldenberg", "sint-genesius-rode"],
    faq: [
      {
        q: "Wat is hangwater, en waarom kan een droger er niets aan doen?",
        a: "Hangwater is een waterlaag die zijwaarts door de bodem zakt en tegen het eerste obstakel komt te staan, vaak de bergzijde van een woning. Een droger haalt vocht uit de lucht, niet uit de grond: hij houdt de ruimte bruikbaar, maar het water blijft komen. De oplossing is drainage aan de buitenzijde.",
      },
      {
        q: "Kunnen jullie een souterrain drogen?",
        a: "Ja, en daarvoor zetten we een adsorptiedroger in. Een half ingegraven ruimte is koud en gesloten, en een condensdroger werkt daar slecht: onder 15 °C verliest hij het grootste deel van zijn rendement.",
      },
      {
        q: "Kan de bestelwagen tot bij mijn huis?",
        a: "In de meeste straten wel. Is uw oprit steil of uw straat smal, zeg dat dan bij de reservatie, dan weet de technieker dat hij verder moet uitladen.",
      },
      {
        q: "Krijg ik een tijdslot?",
        a: "Ja, en een sms een halfuur vooraf. Voor de Brusselse rand plannen we buiten de spits, omdat de rit over de ring gaat.",
      },
      {
        q: "Hoe snel staan jullie in Overijse?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfenveertig minuten buiten de spits.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "sint-genesius-rode",
    title: "Bouwdroger huren in Sint-Genesius-Rode | Vernast",
    description:
      "Bouwdroger huren in Sint-Genesius-Rode: villa's aan het Zoniënwoud, op het hoogste punt van de rand. Geleverd, geplaatst en opgehaald, per verdieping.",
    h1: "Bouwdroger huren in Sint-Genesius-Rode",
    kicker: "Brusselse rand · villa's aan het Zoniënwoud",
    rit: { afstand: "circa 48 km", tijd: "ongeveer vijfenveertig minuten" },
    intro: [
      "Sint-Genesius-Rode ligt **op het hoogste punt van de Brusselse rand**, ingesloten door het Zoniënwoud. De bebouwing is bijna volledig **vrijstaand**, met ruime villa's op grote, bosrijke percelen.",
      "Hoog en bosrijk heeft een gevolg dat hier terugkeert: **de percelen staan in de schaduw**, en een woning onder hoge bomen droogt aan de buitenzijde nauwelijks op. Dat vertraagt elke droging die van buitenlucht afhankelijk is.",
    ],
    bouw: {
      kop: "Villa's op bosrijke percelen, in de schaduw",
      alineas: [
        "Onder **hoge bomen blijft de buitenlucht vochtiger** en de buitenmuur langer nat. Ventileren met open ramen helpt daar dus minder dan elders: u haalt vochtige lucht binnen. Een droger werkt **onafhankelijk van het weer buiten**, en dat is precies waarom hij hier het verschil maakt in plaats van een open raam.",
        "De woningen zelf hebben **drie bouwlagen en een volledige kelder**. Droge lucht blijft hangen waar het toestel staat, dus zetten we **per verdieping een droogzone** op met de deuren dicht. Eén groot toestel in de trappenhal droogt vooral de hal, en dan huurt u langer.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium per verdieping: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttk650", waarom: "**Voor de grote open leefruimte**: 110 liter per dag en een bereik tot ongeveer 600 m³." },
      { key: "revolution", waarom: "Voor de kelderverdieping die niet verwarmd wordt: de adsorptiedroger blijft ook bij lage temperatuur vocht opnemen." },
      { key: "ttv4500", waarom: "Bij een chape verdubbelt luchtbeweging vaak de snelheid, en in een ruim volume voorkomt ze dat één hoek achterblijft." },
    ],
    levering: {
      kop: "Leveren in Sint-Genesius-Rode: binnen 24 uur, buiten de spits",
      alinea:
        "Een vijfenveertigtal minuten rijden, **buiten de spits**: de rit gaat over de ring, en die staat tussen zeven en negen uur stil. De technieker plaatst de toestellen per droogzone en stelt de hygrostaat in op een streefwaarde.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfenveertig minuten buiten de spits**. Voor één los toestel kan dat lonen. Voor een volledige woning is leveren beter: het resultaat hangt af van waar de toestellen staan.",
    },
    buren: ["linkebeek", "beersel", "hoeilaart", "overijse", "drogenbos"],
    faq: [
      {
        q: "Kan ik niet gewoon ventileren met open ramen?",
        a: "Op een bosrijk perceel werkt dat slecht. Onder hoge bomen blijft de buitenlucht vochtig, dus haalt u met open ramen vochtige lucht binnen. In de winter koelt u er bovendien de ruimte mee af, en onder 15 °C droogt er vrijwel niets. Een droger werkt onafhankelijk van het weer buiten.",
      },
      {
        q: "Hoeveel toestellen voor een villa met drie bouwlagen?",
        a: "Doorgaans een droogzone per verdieping, dus twee tot drie drogers met een ventilator per zone. De Calculator rekent op volume in kubieke meter, niet op oppervlakte.",
      },
      {
        q: "Mijn kelder is nooit warm. Werkt een bouwdroger daar?",
        a: "Een condensdroger verliest onder 15 °C het grootste deel van zijn rendement. Dan zetten we er een elektrische kachel bij om de ruimte eerst op temperatuur te brengen, of we gebruiken meteen een adsorptiedroger die ook koud doorwerkt.",
      },
      {
        q: "Krijg ik een tijdslot?",
        a: "Ja, en een sms een halfuur vooraf. Voor de Brusselse rand plannen we buiten de spits, omdat de rit over de ring gaat.",
      },
      {
        q: "Hoe snel staan jullie hier?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfenveertig minuten buiten de spits.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "drogenbos",
    title: "Bouwdroger huren in Drogenbos | Vernast",
    description:
      "Bouwdroger huren in Drogenbos: compacte bebouwing aan de Zenne, met kelders onder het maaiveld. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Drogenbos",
    kicker: "Brusselse rand · compact, aan de Zenne",
    rit: { afstand: "circa 42 km", tijd: "ongeveer veertig minuten" },
    intro: [
      "Drogenbos is **de kleinste gemeente van de Brusselse rand**, geklemd tussen de Zenne, het kanaal en de ring. De bebouwing is **compact**: rijhuizen en kleine appartementsgebouwen op een beperkt grondgebied.",
      "Door die ligging in de **Zennevallei** staat het grondwater hier ondiep, en blijft een kelder onder een rijhuis zelden volledig droog.",
    ],
    bouw: {
      kop: "Rijhuizen in de Zennevallei, met kelders onder het maaiveld",
      alineas: [
        "Een kelder **deels onder het maaiveld** in een vallei met ondiep grondwater droogt van nature nooit helemaal: geen doorstroming, muren tegen de grond en een temperatuur die in de winter zelden boven tien graden komt. **Onder 15 °C verliest een condensdroger het grootste deel van zijn rendement**, dus gaat er hier een adsorptiedroger naartoe of een kachel erbij.",
        "Het rijhuis erboven is **smal en diep**. Droge lucht gaat niet vanzelf van voor naar achter, dus hoort er **een ventilator bij de droger**: die brengt droge lucht tot achteraan en blaast de verzadigde laag langs vloer en muur weg. Zonder dat laatste droogt de voorkamer en blijft de keuken staan.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**Het toestel voor een rijhuis of appartement**: 50 liter per dag, 0,75 kW op een gewoon stopcontact, en hij past door een deur van tachtig centimeter." },
      { key: "ttv4500", waarom: "In een smal en diep rijhuis gaat droge lucht niet van voor naar achter. Deze ventilator doet dat wel, en **halveert vaak de droogtijd**." },
      { key: "revolution", waarom: "**Voor de kelder onder het maaiveld**: koud en vochtig tegelijk, en daar werkt een adsorptiedroger door waar een condensdroger stilvalt." },
      { key: "ttk350", waarom: "De Medium voor een volledig gelijkvloers: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
    ],
    levering: {
      kop: "Leveren in Drogenbos: binnen 24 uur, buiten de spits",
      alinea:
        "Een veertigtal minuten rijden, **buiten de spits**: de rit gaat over de ring. **Is er geen plaats om te parkeren voor de deur, zeg dat dan bij de reservatie**, dan weet de technieker dat hij verder moet uitladen.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer veertig minuten buiten de spits**. Voor één los toestel kan dat lonen. Houd er rekening mee dat een droger 25 tot 40 kg weegt en **rechtop** vervoerd moet worden.",
    },
    buren: ["linkebeek", "sint-genesius-rode", "beersel", "sint-pieters-leeuw"],
    faq: [
      {
        q: "Mijn kelder blijft vochtig na het drogen. Hoe kan dat?",
        a: "Omdat een droger vocht uit de lucht haalt, niet uit de grond. In de Zennevallei is het grondwater ondiep. Drogen houdt de ruimte bruikbaar zolang het toestel draait, maar de bron blijft. De technieker meet dat bij de levering en zegt het eerlijk.",
      },
      {
        q: "Past een bouwdroger door een smalle gang?",
        a: "De Small bouwdroger is 40 bij 40 centimeter aan de basis en weegt ongeveer 25 kg. Die gaat door elke gangbare gang en trap. Geef bij de reservatie door dat het om een smalle doorgang gaat.",
      },
      {
        q: "Hoort er een ventilator bij een rijhuis?",
        a: "In een smalle, diepe plattegrond wel. De droger maakt droge lucht, de ventilator brengt die tot achteraan. Hij zit standaard in onze droogpakketten voor een rijwoning.",
      },
      {
        q: "Komen jullie ook naar een kleine gemeente?",
        a: "Ja, en zonder toeslag. De prijs van het droogpakket is dezelfde in heel ons werkgebied. We plannen de Brusselse rand in één ronde, buiten de spits.",
      },
      {
        q: "Hoe snel staan jullie in Drogenbos?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer veertig minuten buiten de spits.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "linkebeek",
    title: "Bouwdroger huren in Linkebeek | Vernast",
    description:
      "Bouwdroger huren in Linkebeek: woningen in een steile vallei met bronnen in de ondergrond. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Linkebeek",
    kicker: "Brusselse rand · steile vallei met bronnen",
    rit: { afstand: "circa 45 km", tijd: "ongeveer veertig minuten" },
    intro: [
      "Linkebeek is klein en **uitzonderlijk steil**: het dorp ligt in een smalle vallei met het Zoniënwoud erboven, en de straten lopen van de rand naar de bodem toe.",
      "In die vallei zitten **bronnen en waterlagen** die uit de bosrand komen. Dat bepaalt bijna elk vochtprobleem hier, en het is geen bouwvocht.",
    ],
    bouw: {
      kop: "Bronnen uit de bosrand, en woningen in de valleiflank",
      alineas: [
        "**Water uit een bron of een waterlaag is geen bouwvocht.** Komt er vocht via de kelderwand of de vloerplaat binnen omdat een waterlaag uit de helling erop drukt, dan haalt een droger het uit de lucht maar niet uit de grond, en komt het terug zodra het toestel weg is. **De technieker meet dat bij de levering** en zegt eerlijk dat drainage of waterdichting aan de buitenzijde de oplossing is.",
        "Gaat het om **bouwvocht uit een renovatie**, dan verdwijnt het definitief. Een half ingegraven gelijkvloers of souterrain, wat hier door de helling vaak voorkomt, is dan het traagste deel: koud en gesloten, en daar gaat **een adsorptiedroger** naartoe.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**Het toestel voor deze vallei**: koude, half ingegraven ruimtes waar een condensdroger stilvalt en een adsorptiedroger doorwerkt." },
      { key: "ttk350", waarom: "De Medium voor een gelijkvloers of een verdieping: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "Bij massieve muren een voorwaarde: hij blaast de verzadigde luchtlaag tegen het oppervlak weg, en komt onder vloeren." },
      { key: "ttk170", waarom: "Voor één kamer, een badkamer of een appartement: 50 liter per dag en 0,75 kW op een gewoon stopcontact." },
    ],
    levering: {
      kop: "Leveren in Linkebeek: binnen 24 uur, ook in een steile straat",
      alinea:
        "Een veertigtal minuten rijden, **buiten de spits**. **Staat uw woning in een steile straat waar de bestelwagen niet voor de deur kan, zeg dat dan bij de reservatie**, dan weet de technieker dat hij verder moet uitladen en brengt hij het juiste materiaal mee.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer veertig minuten buiten de spits**. Voor één los toestel kan dat lonen, maar bedenk dat u hem in een steile straat zelf tot aan de deur moet krijgen: hij weegt 25 tot 40 kg.",
    },
    buren: ["drogenbos", "sint-genesius-rode", "beersel", "hoeilaart"],
    faq: [
      {
        q: "Er komt water door mijn kelderwand. Helpt een bouwdroger?",
        a: "Zolang hij draait, ja: de ruimte wordt bruikbaar en de schade blijft beperkt. Maar in deze vallei zitten bronnen en waterlagen uit de bosrand, en die persen tegen de kelderwand. Een droger stopt die aanvoer niet. De duurzame oplossing is drainage of waterdichting aan de buitenzijde.",
      },
      {
        q: "Hoe weet ik of het bouwvocht is of water uit de helling?",
        a: "Bouwvocht zit gelijkmatig in de ruimte en neemt af naarmate het droogt. Water uit de helling geeft een natte plek of band die na elke regenperiode terugkomt, meestal op dezelfde plaats. De vochtmeting bij de levering zit in de prijs van het pakket.",
      },
      {
        q: "Kan de bestelwagen tot bij mijn huis?",
        a: "In een steile straat niet altijd voor de deur. Geef dat door bij de reservatie, dan weet de technieker dat hij verder moet uitladen en brengt hij het juiste materiaal mee.",
      },
      {
        q: "Komen jullie ook naar een kleine gemeente?",
        a: "Ja, en zonder toeslag. De prijs van het droogpakket is dezelfde in heel ons werkgebied, en we plannen de Brusselse rand in één ronde.",
      },
      {
        q: "Hoe snel staan jullie in Linkebeek?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer veertig minuten buiten de spits.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "asse",
    title: "Bouwdroger huren in Asse | Vernast",
    description:
      "Bouwdroger huren in Asse, Zellik en Mollem: nieuwbouw op leembodem, waar chape traag droogt. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Asse",
    kicker: "Pajottenland · nieuwbouw op leem",
    rit: { afstand: "circa 35 km", tijd: "ongeveer vijfendertig minuten" },
    intro: [
      "Asse is **de grootste gemeente van de noordelijke Pajottenlandrand**, met Zellik, Relegem, Mollem, Kobbegem en Bekkerzeel errond. Er wordt veel gebouwd, en de bodem is hier **leem**.",
      "Dat laatste is geen detail. **Leem laat water traag door**, dus de bouwput blijft natter, de ondergrond onder de vloerplaat blijft natter, en een chape die er bovenop ligt droogt zonder hulp opvallend traag.",
    ],
    bouw: {
      kop: "Chape op leembodem, en waarom die zo traag droogt",
      alineas: [
        "Een verse chape geeft **vijf tot tien liter water per dag per honderd vierkante meter** af, en op leem komt daar vocht uit de ondergrond bij in plaats van dat het wegdraineert. Zonder hulp doet een chape van vijf centimeter hier **vijf à zeven weken**; met droger en ventilator samen is ze **in twee à drie weken klaar voor de vloerder**, en in een tiental dagen beloopbaar.",
        "In de winter komt er nog iets bij: **onder 15 °C verliest een condensdroger het grootste deel van zijn rendement**, en een ruwbouw zonder ramen komt daar niet boven. Dan gaat er een elektrische kachel mee, die **400 V** vraagt. De technieker controleert de werfkast bij de levering.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De standaard voor een nieuwbouwwoning: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "**Op leem geen extra maar een voorwaarde**: hij blaast de verzadigde laag vlak boven de chape weg, en verdubbelt zo vaak de snelheid." },
      { key: "ttk650", waarom: "Voor een groot gelijkvloers of een open leefruimte met een hoog plafond: 110 liter per dag, bereik tot ongeveer 600 m³." },
      { key: "teddh30", waarom: "Voor de onverwarmde ruwbouw in de winter: onder 15 °C zakt het rendement van elke condensdroger. Vraagt 400 V krachtstroom." },
    ],
    levering: {
      kop: "Leveren in Asse: binnen 24 uur, in de Pajottenlandronde",
      alinea:
        "Een vijfendertigtal minuten rijden, en daarmee is Asse een van de kortste ritten van Vlaams-Brabant. U krijgt een tijdslot en een sms een halfuur vooraf. Op een winterwerf controleert de technieker eerst of **de werfkast 400 V levert** voor de kachel.",
    },
    afhalen: {
      kop: "Afhalen loont hier wél",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfendertig minuten**. Voor één of twee losse toestellen is dat de moeite, en u krijgt korting op de huurprijs. Voor een pakket op een nieuwbouwwerf is leveren beter: de rit zit al in de prijs.",
    },
    buren: ["ternat", "merchtem", "dilbeek", "opwijk", "wemmel"],
    faq: [
      {
        q: "Waarom droogt een chape op leem zo traag?",
        a: "Omdat leem water traag doorlaat. De ondergrond onder uw vloerplaat blijft natter dan op zand, dus komt er vocht bij in plaats van dat het wegdraineert. Zonder hulp doet een chape van vijf centimeter hier vijf à zeven weken; met droger en ventilator ongeveer de helft.",
      },
      {
        q: "Wanneer start ik met drogen na het chaperen?",
        a: "Niet meteen. Een chape moet eerst uitharden: reken op 48 tot 72 uur, en start dan voorzichtig. Te snel drogen geeft krimpscheuren, en daarom stelt de technieker de hygrostaat in op een streefwaarde.",
      },
      {
        q: "Wat als het vriest tijdens de droging?",
        a: "Dan verwarmen we mee. Onder 15 °C verliest een condensdroger het grootste deel van zijn rendement, dus in een onverwarmde ruwbouw zetten we er een elektrische kachel bij. Die vraagt 400 V krachtstroom.",
      },
      {
        q: "Hoeveel toestellen voor een gelijkvloers van 140 m²?",
        a: "Doorgaans twee drogers met een ventilator per droogzone, en een derde als de verdieping meteen mee moet. De Calculator rekent op volume in kubieke meter, want een hoog plafond telt zwaarder dan extra vierkante meters.",
      },
      {
        q: "Hoe snel staan jullie in Asse?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfendertig minuten, een van onze kortste in Vlaams-Brabant.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "ternat",
    title: "Bouwdroger huren in Ternat | Vernast",
    description:
      "Bouwdroger huren in Ternat, Wambeek en Sint-Katherina-Lombeek: verkavelingen en dorpskernen op leem. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Ternat",
    kicker: "Pajottenland · verkavelingen op leem",
    rit: { afstand: "circa 40 km", tijd: "ongeveer veertig minuten" },
    intro: [
      "Ternat ligt **op de as tussen Brussel en Ninove**, met Wambeek en Sint-Katherina-Lombeek erbij. Het is hier **leem**, en de bebouwing is vooral **halfopen en open nieuwbouw** rond de oude kernen.",
      "Wat we hier drogen is voorspelbaar: **chape van een gelijkvloers**, en in de oude kern een dorpswoning met massieve muren die in renovatie gaat.",
    ],
    bouw: {
      kop: "Nieuwbouw rond de kernen, renovatie erin",
      alineas: [
        "Op **leem droogt een chape zonder hulp opvallend traag**, omdat de ondergrond onder de vloerplaat natter blijft dan op zand. Reken zonder droger op vijf à zeven weken voor vijf centimeter, en met droger en ventilator op **twee à drie weken** tot de vloerder kan starten.",
        "In de oude kernen staan **dorpswoningen met massieve muren**. Die geven hun vocht traag af, en tegen het oppervlak vormt zich een verzadigd luchtlaagje dat verdere droging afremt. Een ventilator haalt dat weg; zonder hem staat de droger lucht te drogen die al droog is.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De standaard voor een nieuwbouwwoning: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "**Op leem een voorwaarde**: hij blaast de verzadigde laag vlak boven de chape weg, en bij massieve muren de laag tegen het muuroppervlak." },
      { key: "ttk650", waarom: "Voor een groot gelijkvloers of een hoog volume: 110 liter per dag, bereik tot ongeveer 600 m³." },
      { key: "teddh30", waarom: "Voor de onverwarmde ruwbouw in de winter: onder 15 °C zakt het rendement van elke condensdroger. Vraagt 400 V krachtstroom." },
    ],
    levering: {
      kop: "Leveren in Ternat: binnen 24 uur, in de Pajottenlandronde",
      alinea:
        "Een veertigtal minuten rijden. U krijgt een tijdslot en een sms een halfuur vooraf. De technieker plaatst de toestellen **per droogzone**, legt de afvoer naar een putje en stelt de hygrostaat in op een streefwaarde.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer veertig minuten**. Voor één los toestel kan dat lonen. Voor een pakket op een nieuwbouwwerf is leveren beter: de rit zit al in de prijs en de technieker zet de droogzones meteen goed op.",
    },
    buren: ["asse", "dilbeek", "liedekerke", "roosdaal", "affligem"],
    faq: [
      {
        q: "Waarom droogt een chape op leem zo traag?",
        a: "Omdat leem water traag doorlaat, dus de ondergrond onder uw vloerplaat blijft natter dan op zand. Zonder hulp doet een chape van vijf centimeter hier vijf à zeven weken; met droger en ventilator ongeveer de helft.",
      },
      {
        q: "Waarom droogt een oude dorpswoning trager dan nieuwbouw?",
        a: "Omdat het vocht uit de kern van een massieve muur naar buiten moet, en omdat zich tegen het oppervlak een verzadigd luchtlaagje vormt dat verdere droging afremt. Reken op anderhalf tot twee keer de droogtijd van een moderne wand.",
      },
      {
        q: "Moet ik het reservoir legen?",
        a: "Nee. Onze toestellen zijn pompklaar: de technieker legt de afvoerslang naar een putje of een gootsteen. Een reservoir dat volloopt zet het toestel stil, en dan verliest u een nacht droogtijd.",
      },
      {
        q: "Betaal ik een kilometerkost?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket.",
      },
      {
        q: "Hoe snel staan jullie in Ternat?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer veertig minuten en we plannen het Pajottenland in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "dilbeek",
    title: "Bouwdroger huren in Dilbeek | Vernast",
    description:
      "Bouwdroger huren in Dilbeek, Schepdaal en Groot-Bijgaarden: ruime woningen aan de westrand van Brussel. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Dilbeek",
    kicker: "Brusselse westrand · ruime woningen op leem",
    rit: { afstand: "circa 42 km", tijd: "ongeveer veertig minuten" },
    intro: [
      "Dilbeek is **de grootste gemeente van de Brusselse westrand**, met Schepdaal, Itterbeek, Sint-Martens-Bodegem, Sint-Ulriks-Kapelle en Groot-Bijgaarden. Dicht bebouwd tegen de stad, landelijk aan de Pajottenlandkant.",
      "De bebouwing is vooral **ruim en vrijstaand of halfopen**, uit de jaren zestig tot tachtig, met een kelder onder het volume. Die generatie gaat nu in grondige renovatie.",
    ],
    bouw: {
      kop: "Renovatie van ruime woningen met een volledige kelder",
      alineas: [
        "Bij een **grondige renovatie** droogt alles tegelijk: vers pleisterwerk op meerdere verdiepingen, een nieuwe chape en een kelder die van jaren vochtigheid af moet. Droge lucht blijft hangen waar het toestel staat, dus zetten we **per verdieping een droogzone** op met de deuren dicht. Eén groot toestel in de trappenhal droogt vooral de hal, en dan huurt u langer.",
        "De kelder is het trage punt: uit die periode **zonder buitenwaterdichting**, deels onder het maaiveld, en op **leem die water traag doorlaat**. In de winter komt zo'n ruimte zelden boven tien graden, en onder 15 °C verliest een condensdroger het grootste deel van zijn rendement. Dan gaat er een adsorptiedroger naartoe.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium per verdieping: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "revolution", waarom: "**Voor de kelder op leem**: koud en vochtig tegelijk, en daar werkt een adsorptiedroger door waar een condensdroger stilvalt." },
      { key: "ttv4500", waarom: "Bij vers pleisterwerk en verse chape verdubbelt luchtbeweging vaak de snelheid." },
      { key: "ttk650", waarom: "Voor een groot gelijkvloers in één keer: 110 liter per dag, bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Dilbeek: binnen 24 uur, buiten de spits",
      alinea:
        "Een veertigtal minuten rijden, **buiten de spits**: de rit gaat langs de ring, en die staat tussen zeven en negen uur stil. De technieker plaatst de toestellen per droogzone en stelt de hygrostaat in op een streefwaarde.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer veertig minuten buiten de spits**. Voor één los toestel kan dat lonen. Voor een volledige renovatie is leveren beter: het resultaat hangt af van hoe de droogzones opgezet staan.",
    },
    buren: ["asse", "ternat", "sint-pieters-leeuw", "lennik"],
    faq: [
      {
        q: "Kan ik een hele woning met één toestel drogen?",
        a: "Beter niet. Droge lucht blijft hangen waar het toestel staat, en met open deuren droogt u vooral de gang. Per verdieping of per gesloten zone een toestel werkt sneller en komt doorgaans goedkoper uit, omdat de totale huurperiode korter is.",
      },
      {
        q: "Mijn kelder is nooit warm. Werkt een bouwdroger daar?",
        a: "Een condensdroger verliest onder 15 °C het grootste deel van zijn rendement, en een kelder uit die periode komt daar in de winter niet boven. Dan zetten we er een elektrische kachel bij, of we gebruiken meteen een adsorptiedroger.",
      },
      {
        q: "Hoe lang blijft een pakket staan?",
        a: "Standaard twee weken voor een chape en één tot twee weken voor pleisterwerk, maar we meten bij de ophaling. Is het nog niet droog, dan verlengt u per week bij; is het eerder droog, dan halen we eerder op.",
      },
      {
        q: "Krijg ik een tijdslot?",
        a: "Ja, en een sms een halfuur vooraf. Voor de Brusselse rand plannen we buiten de spits, omdat de rit langs de ring gaat.",
      },
      {
        q: "Hoe snel staan jullie in Dilbeek?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer veertig minuten buiten de spits.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "sint-pieters-leeuw",
    title: "Bouwdroger huren in Sint-Pieters-Leeuw | Vernast",
    description:
      "Bouwdroger huren in Sint-Pieters-Leeuw, Ruisbroek en Vlezenbeek: woonkernen aan het kanaal en verkavelingen. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Sint-Pieters-Leeuw",
    kicker: "Zennevallei · kanaalkant en verkavelingen",
    rit: { afstand: "circa 43 km", tijd: "ongeveer veertig minuten" },
    intro: [
      "Sint-Pieters-Leeuw strekt zich uit **van het kanaal in Ruisbroek tot het open Pajottenland in Oudenaken**, met Negenmanneke, Zuun en Vlezenbeek ertussen. Dicht bebouwd aan de ene kant, landelijk aan de andere.",
      "Aan de kanaalkant ligt de bebouwing **laag in de Zennevallei**, en daar staat het grondwater ondiep. Hogerop, richting Vlezenbeek, is het leem op een helling.",
    ],
    bouw: {
      kop: "Laag bij het kanaal, hoger op de leemhelling",
      alineas: [
        "**Laag in de Zennevallei** zit het grondwater ondiep en blijft een kelder zelden volledig droog. Dat is geen bouwvocht: drogen haalt het uit de ruimte, de bron blijft. **Hoger op de helling** perst hangwater uit de leembodem tegen de bergzijde van een woning, en dat komt na elke regenperiode terug. **De technieker meet bij de levering** welke van de twee het is.",
        "Gaat het om **bouwvocht uit renovatie of nieuwbouw**, dan verdwijnt het definitief. Op leem duurt dat wel langer: een chape van vijf centimeter doet zonder hulp vijf à zeven weken, en met droger en ventilator **twee à drie weken**.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium als standaard: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "revolution", waarom: "**Voor de kelder laag in de vallei**: koud en vochtig tegelijk, en daar werkt een adsorptiedroger door waar een condensdroger stilvalt." },
      { key: "ttv4500", waarom: "**Op leem een voorwaarde**: hij blaast de verzadigde laag vlak boven de chape weg, en verdubbelt zo vaak de snelheid." },
      { key: "ttk650", waarom: "Voor een groot gelijkvloers of een bedrijfsruimte aan het kanaal: 110 liter per dag, bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Sint-Pieters-Leeuw: binnen 24 uur, buiten de spits",
      alinea:
        "Een veertigtal minuten rijden, **buiten de spits**. U krijgt een tijdslot en een sms een halfuur vooraf. Gaat het om een kelder, dan **meet de technieker eerst** of het om bouwvocht of om grondwater gaat, want dat bepaalt of drogen hier zinvol is.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer veertig minuten buiten de spits**. Voor één los toestel kan dat lonen. Voor een pakket is leveren beter: de rit en de vochtmeting zitten al in de prijs.",
    },
    buren: ["dilbeek", "beersel", "halle", "lennik", "drogenbos"],
    faq: [
      {
        q: "Mijn kelder blijft vochtig na het drogen. Hoe kan dat?",
        a: "Omdat een droger vocht uit de lucht haalt, niet uit de grond. Laag in de Zennevallei is het grondwater ondiep. Drogen houdt de ruimte bruikbaar zolang het toestel draait, maar de bron blijft. De technieker meet dat bij de levering.",
      },
      {
        q: "Ik woon hoger op de helling en één muur blijft vochtig. Wat is dat?",
        a: "Waarschijnlijk hangwater: een waterlaag die door de leembodem zijwaarts zakt en tegen de bergzijde van uw woning komt te staan. Het komt na elke regenperiode terug, meestal op dezelfde plaats. Drainage aan de buitenzijde lost dat op.",
      },
      {
        q: "Waarom droogt een chape op leem zo traag?",
        a: "Omdat leem water traag doorlaat, dus de ondergrond onder uw vloerplaat blijft natter dan op zand. Zonder hulp doet een chape van vijf centimeter hier vijf à zeven weken; met droger en ventilator ongeveer de helft.",
      },
      {
        q: "Krijg ik een tijdslot?",
        a: "Ja, en een sms een halfuur vooraf. Voor deze hoek plannen we buiten de spits, omdat de rit langs de ring gaat.",
      },
      {
        q: "Hoe snel staan jullie hier?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer veertig minuten buiten de spits.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "beersel",
    title: "Bouwdroger huren in Beersel | Vernast",
    description:
      "Bouwdroger huren in Beersel, Alsemberg en Dworp: steile valleien, oude brouwerijkelders en woningen in de helling.",
    h1: "Bouwdroger huren in Beersel",
    kicker: "Zennevallei · steile valleien en oude kelders",
    rit: { afstand: "circa 43 km", tijd: "ongeveer veertig minuten" },
    intro: [
      "Beersel bestaat uit **vier kernen op en tussen steile valleiflanken**: Beersel, Alsemberg, Dworp en Lot. De Zenne loopt er onderdoor, en het Zoniënwoud ligt erboven.",
      "Dit is **lambiekland**, en dat heeft iets achtergelaten: oude brouwerijen en **gewelfde kelders** die van nature koel en vochtig zijn. Precies die ruimtes komen nu in herbestemming.",
    ],
    bouw: {
      kop: "Gewelfde kelders, en woningen half in de helling",
      alineas: [
        "Een **gewelfde brouwerijkelder** is ontworpen om koel en vochtig te blijven: dikke muren, geen doorstroming en een temperatuur die het hele jaar rond de tien graden blijft. Dat is precies de omstandigheid waarin **een condensdroger het grootste deel van zijn rendement verliest**. Daar gaat een adsorptiedroger naartoe, die het vocht aan een droogwiel bindt en ook bij vijf graden doorwerkt.",
        "De woningen in de flank hebben **aan de bergzijde grond tegen de muur**. Op leem perst hangwater daar bij elke regenperiode tegenaan, en dat is geen bouwvocht: een droger houdt de ruimte bruikbaar, maar het water blijft komen. **De technieker meet dat bij de levering** en zegt eerlijk dat drainage de oplossing is.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**Het toestel voor een gewelfde kelder**: koel, vochtig en gesloten, waar een condensdroger stilvalt en een adsorptiedroger doorwerkt." },
      { key: "ttk350", waarom: "De Medium voor een woning of een gelijkvloers: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "**Bij massieve en gewelfde muren een voorwaarde**: hij blaast de verzadigde luchtlaag tegen het oppervlak weg." },
      { key: "ttk650", waarom: "Voor een groot volume of een herbestemd bijgebouw: 110 liter per dag, bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Beersel: binnen 24 uur, ook in een steile straat",
      alinea:
        "Een veertigtal minuten rijden, **buiten de spits**. **Staat uw woning in een steile straat of met een steile oprit, zeg dat dan bij de reservatie**, dan weet de technieker dat hij verder moet uitladen en brengt hij het juiste materiaal mee.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer veertig minuten buiten de spits**. Voor één los toestel kan dat lonen. Voor een kelder is leveren beter: welk type droger daar werkt, hangt af van de temperatuur, en dat meet de technieker ter plaatse.",
    },
    buren: ["sint-pieters-leeuw", "halle", "sint-genesius-rode", "linkebeek", "drogenbos"],
    faq: [
      {
        q: "Kunnen jullie een gewelfde kelder drogen?",
        a: "Ja, en daarvoor zetten we een adsorptiedroger in. Een gewelfde kelder is koel, vochtig en gesloten, en een condensdroger werkt daar slecht: onder 15 °C verliest hij het grootste deel van zijn rendement. Een adsorptiedroger bindt het vocht aan een droogwiel en blijft ook bij vijf graden doorwerken.",
      },
      {
        q: "Mijn muur aan de bergzijde blijft vochtig. Wat is dat?",
        a: "Waarschijnlijk hangwater: een waterlaag die door de leembodem zijwaarts zakt en tegen die muur komt te staan. Het komt na elke regenperiode terug. Een droger houdt de ruimte bruikbaar, drainage aan de buitenzijde lost het op.",
      },
      {
        q: "Kan de bestelwagen tot bij mijn huis?",
        a: "In de meeste straten wel. Is uw straat of oprit steil, zeg dat dan bij de reservatie, dan weet de technieker dat hij verder moet uitladen.",
      },
      {
        q: "Wat is het verschil tussen een condensdroger en een adsorptiedroger?",
        a: "Een condensdroger koelt lucht af en vangt het water op. Dat werkt uitstekend boven 15 °C en is zuiniger. Een adsorptiedroger bindt het vocht aan een droogwiel en blijft ook bij vijf graden doorwerken. Voor een onverwarmde kelder is dat het verschil tussen drogen en wachten.",
      },
      {
        q: "Hoe snel staan jullie in Beersel?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer veertig minuten buiten de spits.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "liedekerke",
    title: "Bouwdroger huren in Liedekerke | Vernast",
    description:
      "Bouwdroger huren in Liedekerke: dicht bebouwde gemeente aan de Dender, met kleine percelen. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Liedekerke",
    kicker: "Pajottenland · dicht bebouwd aan de Dender",
    rit: { afstand: "circa 43 km", tijd: "ongeveer veertig minuten" },
    intro: [
      "Liedekerke is **klein van oppervlakte en dicht bebouwd**: een van de dichtstbevolkte gemeenten van Vlaams-Brabant, met de Dender aan de westkant en het spoor erdoor.",
      "Dat betekent **kleine percelen en veel verdichting**: appartementen op de plaats van één woning, en renovaties waar geen plaats is om materiaal te stapelen.",
    ],
    bouw: {
      kop: "Kleine percelen, verdichting en bewoonde werven",
      alineas: [
        "Bij een **renovatie op een klein perceel** is er geen plaats om te stapelen, en de werf is vaak bewoond. Het toestel moet dan **stil genoeg** zijn, **op 230 V** draaien en **door een gewone deur** passen. De Small bouwdroger is daarvoor gemaakt: 50 liter per dag, 0,75 kW en 25 kg.",
        "Bij een **nieuw appartementsblok** moeten meerdere eenheden tegelijk drogen, achter elkaar in de agenda van de vloerder. Geef bij de reservatie door **hoeveel eenheden** het zijn, dan leveren we in één rit en zetten we per eenheid een droogzone op in plaats van dezelfde rit drie keer te doen.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**Het toestel voor een bewoonde werf**: compact, stil en zuinig op een gewoon stopcontact. Voor één kamer, een badkamer of een appartement." },
      { key: "ttk350", waarom: "De Medium voor een volledig gelijkvloers: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "**Op leem een voorwaarde bij een chape**, en in een diepe plattegrond brengt hij de droge lucht tot achteraan." },
      { key: "revolution", waarom: "Voor een kelder of een ondergrondse garage die niet verwarmd wordt: de adsorptiedroger werkt ook onder 15 °C door." },
    ],
    levering: {
      kop: "Leveren in Liedekerke: binnen 24 uur, geplaatst en ingesteld",
      alinea:
        "Een veertigtal minuten rijden. **Is er geen plaats om te parkeren voor de deur, zeg dat dan bij de reservatie**, dan weet de technieker dat hij verder moet uitladen. Is er een lift of een vaste trap, dan is elke verdieping inbegrepen in de prijs.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer veertig minuten**. Voor één los toestel kan dat lonen, want u krijgt korting op de huurprijs. Houd er rekening mee dat een droger 25 tot 40 kg weegt en rechtop vervoerd moet worden.",
    },
    buren: ["ternat", "roosdaal", "affligem", "denderleeuw", "asse"],
    faq: [
      {
        q: "Mag een bouwdroger draaien in een bewoonde woning?",
        a: "Ja, en daarvoor is de Small bouwdroger bedoeld. Hij verbruikt 0,75 kW, dus hij mag op een gewoon stopcontact, en hij is stil genoeg om in de kamer ernaast te slapen. Houd de deur van de droogzone dicht: droge lucht die door het hele huis trekt droogt niets snel.",
      },
      {
        q: "Kunnen jullie meerdere appartementen tegelijk doen?",
        a: "Ja. Geef bij de reservatie door hoeveel eenheden er tegelijk moeten drogen, dan leveren we in één rit en zetten we per eenheid een droogzone op.",
      },
      {
        q: "Er is geen plaats om te parkeren in mijn straat. Lukt dat?",
        a: "Meestal wel: de technieker staat kort stil om uit te laden. Zeg bij de reservatie dat er geen plaats is voor de deur, dan weet hij dat hij verder moet uitladen en brengt hij het juiste materiaal mee.",
      },
      {
        q: "Hoeveel stroom verbruikt een bouwdroger?",
        a: "De Small ongeveer 0,75 kW per uur, de Medium rond 1,2 kW. Dat komt op een paar euro per etmaal. Het verbruik staat op elke toestelpagina zodat u het zelf kunt narekenen.",
      },
      {
        q: "Hoe snel staan jullie in Liedekerke?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer veertig minuten.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "lennik",
    title: "Bouwdroger huren in Lennik | Vernast",
    description:
      "Bouwdroger huren in Lennik, Gaasbeek en Eizeringen: hoeves en dorpswoningen op de leemheuvels. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Lennik",
    kicker: "Pajottenland · hoeves op de leemheuvels",
    rit: { afstand: "circa 47 km", tijd: "ongeveer vijfenveertig minuten" },
    intro: [
      "Lennik ligt **in het hart van het Pajottenland**, met Sint-Kwintens-Lennik, Sint-Martens-Lennik, Gaasbeek en Eizeringen: golvende leemheuvels met oude hoeves en dorpskernen.",
      "Wat we hier drogen is bijna altijd **renovatie van massief werk**: een hoeve die aangepakt wordt, een dorpswoning met een nieuwe vloer, een schuur die woonruimte wordt.",
    ],
    bouw: {
      kop: "Hoeves op leem, met grond tegen de bergmuur",
      alineas: [
        "Een hoeve op **leem** heeft twee eigenschappen die samen tellen: **massieve muren die hun vocht traag afgeven**, en een ondergrond die water traag doorlaat. Tegen het muuroppervlak vormt zich een verzadigd luchtlaagje dat verdere droging afremt, en dat haalt een ventilator weg. Reken op **anderhalf tot twee keer de droogtijd** van een moderne wand.",
        "Staat het gebouw in de helling, dan heeft het aan de bergzijde **grond tegen de muur**, en perst hangwater daar bij elke regenperiode tegenaan. Dat is geen bouwvocht: een droger houdt de ruimte bruikbaar, maar het water blijft komen. **De technieker meet het verschil** bij de levering.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium als standaard bij renovatie: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "**Onmisbaar bij massieve muren**: hij blaast de verzadigde luchtlaag tegen het muuroppervlak weg, en pas dan droogt de muur verder." },
      { key: "ttk650", waarom: "Voor een hoeve of een schuur met grote, hoge volumes: 110 liter per dag en bereik tot ongeveer 600 m³." },
      { key: "revolution", waarom: "**Voor de kelder of de schuur in de helling**: koud en vochtig tegelijk, en daar werkt een adsorptiedroger door." },
    ],
    levering: {
      kop: "Leveren in Lennik: binnen 24 uur, met het volume vooraf",
      alinea:
        "Een vijfenveertigtal minuten rijden. Bij een hoeve of een schuur vragen we **vooraf het volume in kubieke meter** en of de ruimte dicht te krijgen is, want een droger tegen een open poort werkt tegen de buitenlucht in. Staat uw hoeve aan een onverharde oprit, zeg dat dan ook.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfenveertig minuten**. Voor een volledig pakket is leveren bijna altijd beter: bij massief werk hangt het resultaat af van waar de toestellen en de ventilatoren staan.",
    },
    buren: ["dilbeek", "roosdaal", "pepingen", "sint-pieters-leeuw", "pajottegem"],
    faq: [
      {
        q: "Waarom droogt een hoeve zo veel trager dan een nieuwbouw?",
        a: "Omdat het vocht uit de kern van een massieve muur naar buiten moet, door veertig centimeter of meer, en omdat zich tegen het oppervlak een verzadigd luchtlaagje vormt. Reken op anderhalf tot twee keer de droogtijd van een moderne wand, altijd met een ventilator erbij.",
      },
      {
        q: "Kunnen jullie een schuur drogen die woonruimte wordt?",
        a: "Ja. Geef vooraf het volume in kubieke meter door, de vloeropbouw en of de poorten en verluchting kunnen sluiten. Is de ruimte niet te verwarmen, dan zetten we een adsorptiedroger in.",
      },
      {
        q: "Mijn muur aan de bergzijde blijft vochtig. Wat is dat?",
        a: "Waarschijnlijk hangwater: een waterlaag die door de leembodem zijwaarts zakt en tegen die muur komt te staan. Het komt na elke regenperiode terug. Drogen houdt de ruimte bruikbaar, drainage aan de buitenzijde lost het op.",
      },
      {
        q: "Betaal ik een kilometerkost?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket.",
      },
      {
        q: "Hoe snel staan jullie in Lennik?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfenveertig minuten en we plannen het Pajottenland in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "roosdaal",
    title: "Bouwdroger huren in Roosdaal | Vernast",
    description:
      "Bouwdroger huren in Roosdaal, Pamel en Strijtem: landelijke kernen op leem tussen Ninove en Lennik. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Roosdaal",
    kicker: "Pajottenland · landelijke kernen op leem",
    rit: { afstand: "circa 47 km", tijd: "ongeveer vijfenveertig minuten" },
    intro: [
      "Roosdaal bestaat uit **Pamel, Strijtem, Onze-Lieve-Vrouw-Lombeek en Borchtlombeek**: vier kleine kernen in golvend leemland tussen Ninove en Lennik.",
      "Wat we hier drogen is gemengd: **nieuwbouw in verkavelingen aan de rand van de kernen**, en **renovatie van dorpswoningen en hoeves** erin.",
    ],
    bouw: {
      kop: "Verkavelingen aan de rand, massief werk in de kern",
      alineas: [
        "In de verkavelingen gaat het om **chape op leem**, en dat is het punt: leem laat water traag door, dus de ondergrond onder de vloerplaat blijft natter dan op zand. Zonder hulp doet een chape van vijf centimeter hier **vijf à zeven weken**; met droger en ventilator is ze **in twee à drie weken klaar voor de vloerder**.",
        "In de kernen staan **dorpswoningen met massieve muren** die hun vocht traag afgeven. Tegen het oppervlak vormt zich een verzadigd luchtlaagje dat als een deken werkt, en zolang dat blijft staan droogt de muur niet verder. Een ventilator haalt het weg; zonder hem staat de droger lucht te drogen die al droog is.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium als standaard: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "**Op leem en bij massieve muren een voorwaarde**: hij blaast de verzadigde luchtlaag weg, en verdubbelt zo vaak de snelheid." },
      { key: "ttk650", waarom: "Voor een hoeve of een groot gelijkvloers: 110 liter per dag, bereik tot ongeveer 600 m³." },
      { key: "teddh30", waarom: "Voor de onverwarmde ruwbouw of schuur in de winter: onder 15 °C zakt het rendement van elke condensdroger. Vraagt 400 V." },
    ],
    levering: {
      kop: "Leveren in Roosdaal: binnen 24 uur, in de Pajottenlandronde",
      alinea:
        "Een vijfenveertigtal minuten rijden. U krijgt een tijdslot en een sms een halfuur vooraf. **Geef bij de reservatie door in welke kern u woont**, Pamel, Strijtem, Lombeek of Borchtlombeek, dan plant de technieker zijn ronde daarop.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfenveertig minuten**. Voor één los toestel kan dat lonen. Voor een pakket is leveren beter: de rit en de vochtmeting zitten al in de prijs.",
    },
    buren: ["lennik", "liedekerke", "ninove", "ternat", "pajottegem"],
    faq: [
      {
        q: "Waarom droogt een chape op leem zo traag?",
        a: "Omdat leem water traag doorlaat, dus de ondergrond onder uw vloerplaat blijft natter dan op zand. Zonder hulp doet een chape van vijf centimeter hier vijf à zeven weken; met droger en ventilator ongeveer de helft.",
      },
      {
        q: "Waarom droogt een oude dorpswoning trager dan nieuwbouw?",
        a: "Omdat het vocht uit de kern van een massieve muur naar buiten moet, en omdat zich tegen het oppervlak een verzadigd luchtlaagje vormt dat verdere droging afremt. Reken op anderhalf tot twee keer de droogtijd van een moderne wand.",
      },
      {
        q: "Kunnen jullie een schuur of een stal drogen?",
        a: "Ja, als ze dicht te krijgen is. Geef vooraf het volume door, de vloeropbouw en of de poorten kunnen sluiten. Is de ruimte niet te verwarmen, dan zetten we een adsorptiedroger in.",
      },
      {
        q: "Betaal ik een kilometerkost?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket.",
      },
      {
        q: "Hoe snel staan jullie in Roosdaal?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfenveertig minuten en we plannen het Pajottenland in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "halle",
    title: "Bouwdroger huren in Halle | Vernast",
    description:
      "Bouwdroger huren in Halle, Buizingen en Lembeek: stad aan de Zenne en het kanaal, waar het water hoog kan komen.",
    h1: "Bouwdroger huren in Halle",
    kicker: "Zennevallei · stad aan het water",
    rit: { afstand: "circa 48 km", tijd: "ongeveer vijfenveertig minuten" },
    intro: [
      "Halle ligt **waar de Zenne en het kanaal samen door de vallei lopen**, met Buizingen en Lembeek erbij. Die ligging is de reden dat een deel van onze werven hier niet over bouwvocht gaat maar over **water dat er niet hoort te zijn**: bij extreme neerslag komt de Zenne tot in de kelders van de laagste straten.",
      "Daarnaast is dit een stad met **veel oud patrimonium en rijhuizen**, en met appartementen in afwerking op de voormalige industrieterreinen aan het water.",
    ],
    bouw: {
      kop: "Hoogwater in de laagste straten, rijhuizen erboven",
      alineas: [
        "Na hoogwater is **snelheid alles**. Hoe langer water in een vloeropbouw en achter een plint staat, hoe groter de kans op schimmel en op isolatie die haar waarde verliest. We zetten dan **meer capaciteit in dan strikt nodig** en altijd luchtbeweging erbij, want water kruipt onder vloeren en achter plinten waar een droger alleen niet aan komt. Zet plinten los voor we komen.",
        "Het Halse rijhuis is **smal en diep**, met vaak een kelder deels onder het maaiveld. Droge lucht gaat daar niet vanzelf van voor naar achter, dus hoort er **een ventilator bij de droger**. In de laagste straten blijft zo'n kelder zelden helemaal droog, en dat is iets anders dan bouwvocht.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Bij waterschade**: 110 liter per dag, bereik tot ongeveer 600 m³. Hoe sneller het water eruit is, hoe minder er stuk gaat." },
      { key: "ttv4500", waarom: "Water kruipt onder vloeren en achter plinten. Zonder luchtbeweging droogt dat niet, met deze ventilator wel." },
      { key: "ttk350", waarom: "De Medium voor een rijhuis of een renovatie: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "revolution", waarom: "**Voor de kelder die niet te verwarmen is**: de adsorptiedroger blijft ook bij lage temperatuur vocht opnemen." },
    ],
    levering: {
      kop: "Leveren in Halle: bij waterschade zo snel als het kan",
      alinea:
        "Een vijfenveertigtal minuten rijden, **buiten de spits**. **Bij waterschade bellen we u terug in plaats van u een formulier te laten afwachten**, want een dag vroeger drogen is hier het verschil tussen een vloer die blijft en een vloer die eruit moet.",
    },
    afhalen: {
      kop: "Afhalen kan, maar niet bij waterschade",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfenveertig minuten**. Bij waterschade is dat precies het uur dat u niet hebt: dan leveren wij. Voor één los toestel bij een gewone renovatie kan afhalen wel lonen.",
    },
    buren: ["beersel", "sint-pieters-leeuw", "pepingen", "sint-genesius-rode"],
    faq: [
      {
        q: "Mijn kelder is ondergelopen. Wat doe ik eerst?",
        a: "Eerst het staande water weg met een dompelpomp, dan zo snel mogelijk drogen. Haal wat nat is uit de ruimte, zet plinten los zodat de holle ruimte erachter kan drogen, en bel ons. Hoe langer water in de vloeropbouw staat, hoe groter de kans op schimmel.",
      },
      {
        q: "Dekt mijn verzekering de huur van een bouwdroger?",
        a: "Bij waterschade meestal wel, als onderdeel van de schadebeperking. Wij geven u een factuur met de vochtmetingen erbij, en dat is precies wat een expert vraagt. Vraag het na bij uw verzekeraar voor u boekt.",
      },
      {
        q: "Hoe lang duurt het drogen na hoogwater?",
        a: "Voor een kelder of een gelijkvloers reken op twee tot vier weken, afhankelijk van hoe lang het water er stond en van de vloeropbouw. Een zwevende vloer op isolatie doet er langer over, want het water zit onder de afwerking.",
      },
      {
        q: "Kunnen jullie dezelfde dag komen?",
        a: "Bij waterschade proberen we dat, en bellen we u terug om te plannen. De rit naar Halle duurt ongeveer vijfenveertig minuten, dus dezelfde dag lukt als u ons in de voormiddag bereikt.",
      },
      {
        q: "En voor een gewone renovatie?",
        a: "Binnen 24 uur na uw boeking, met een tijdslot en een sms een halfuur vooraf. We plannen deze hoek buiten de spits.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "londerzeel",
    title: "Bouwdroger huren in Londerzeel | Vernast",
    description:
      "Bouwdroger huren in Londerzeel, Malderen en Steenhuffel: onze kortste rit in Vlaams-Brabant, pal langs de A12.",
    h1: "Bouwdroger huren in Londerzeel",
    kicker: "Pajottenland · pal langs de A12",
    rit: { afstand: "circa 25 km", tijd: "ongeveer vijfentwintig minuten" },
    intro: [
      "Londerzeel ligt **pal langs de A12**, met Malderen en Steenhuffel erbij, en dat maakt het **onze kortste rit in heel Vlaams-Brabant**: vijfentwintig minuten van magazijn tot voordeur, dichter dan de helft van onze eigen Kempen.",
      "Dat merkt u aan twee dingen: **we staan hier snel**, en **afhalen loont echt**. U bent in een klein uur heen en terug.",
    ],
    bouw: {
      kop: "Nieuwbouw in verkavelingen, en bedrijfsruimtes langs de snelweg",
      alineas: [
        "In de verkavelingen rond de kernen gaat het om **chape van een volledig gelijkvloers**: vijf tot tien liter water per dag per honderd vierkante meter in de eerste weken. Met droger en ventilator samen is dat **in een tiental dagen beloopbaar en in twee à drie weken klaar voor de vloerder**, tegenover vijf à zeven weken zonder hulp.",
        "Langs de A12 staan **bedrijfsruimtes en loodsen**, en daar hangt een datum aan: de inrichter staat gepland. Daar drogen we tot **een gemeten waarde** en zetten we meerdere toestellen verdeeld over de ruimte in, met luchtbeweging over de volle lengte. We vragen vooraf het volume en of de poorten kunnen sluiten.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De standaard voor een nieuwbouwwoning: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttk650", waarom: "**Voor de loods of de bedrijfsruimte**: 110 liter per dag en een bereik tot ongeveer 600 m³." },
      { key: "ttv4500", waarom: "Bij een chape verdubbelt luchtbeweging vaak de snelheid: hij blaast de verzadigde laag vlak boven de vloer weg." },
      { key: "teddh30", waarom: "Voor de onverwarmde ruwbouw of hal in de winter: onder 15 °C zakt het rendement van elke condensdroger. Vraagt 400 V." },
    ],
    levering: {
      kop: "Leveren in Londerzeel: vijfentwintig minuten, dus vaak dezelfde dag",
      alinea:
        "**Vijfentwintig minuten over de A12, onze kortste rit in Vlaams-Brabant.** U krijgt een tijdslot en een sms een halfuur vooraf, en bij een dringende werf lukt dezelfde dag vaak nog. Op een winterwerf controleert de technieker of de werfkast 400 V levert voor de kachel.",
    },
    afhalen: {
      kop: "Afhalen loont hier duidelijk",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **vijfentwintig minuten over de A12**, dus u bent in een klein uur heen en terug. Voor één of twee losse toestellen is dat zonder meer de moeite, en u krijgt korting op de huurprijs. Vervoer de droger **rechtop**; heeft hij toch plat gelegen, laat hem dan 24 uur staan voor u hem inschakelt.",
    },
    buren: ["kapelle-op-den-bos", "merchtem", "meise", "puurs-sint-amands", "buggenhout"],
    faq: [
      {
        q: "Hoe snel staan jullie in Londerzeel?",
        a: "Binnen 24 uur na uw boeking, en vaak sneller. De rit duurt maar vijfentwintig minuten over de A12, onze kortste in Vlaams-Brabant. Boekt u in de voormiddag, dan lukt dezelfde dag vaak nog.",
      },
      {
        q: "Is afhalen vanuit Londerzeel de moeite?",
        a: "Ja, duidelijk. U bent in een klein uur heen en terug over de A12, en u krijgt korting op de huurprijs. Houd er rekening mee dat een droger 25 tot 40 kg weegt en rechtop vervoerd moet worden: in een kleine wagen past er doorgaans één, geen twee.",
      },
      {
        q: "Hoe lang moet een chape drogen met een droger?",
        a: "Reken op een week per centimeter dikte zonder hulp, en met droger en ventilator ongeveer de helft. Een chape van vijf centimeter is dan in twee à drie weken klaar voor de vloerder.",
      },
      {
        q: "Moeten de poorten van een loods dicht?",
        a: "Ja. Een droger tegen een open poort droogt de buitenlucht, en die is onuitputtelijk. Kunnen de poorten niet sluiten, dan heeft drogen geen zin en zeggen we dat liever vooraf.",
      },
      {
        q: "Betaal ik minder omdat ik dichtbij woon?",
        a: "Nee, de prijs van het droogpakket is dezelfde in heel ons werkgebied. Wat u wel wint, is snelheid: bij een dringende werf staan we hier vaak dezelfde dag.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "kapelle-op-den-bos",
    title: "Bouwdroger huren in Kapelle-op-den-Bos | Vernast",
    description:
      "Bouwdroger huren in Kapelle-op-den-Bos, Nieuwenrode en Ramsdonk: woningen aan het kanaal, op een halfuur van ons magazijn.",
    h1: "Bouwdroger huren in Kapelle-op-den-Bos",
    kicker: "Zennevallei · aan het kanaal, dichtbij",
    rit: { afstand: "circa 25 km", tijd: "ongeveer vijfentwintig minuten" },
    intro: [
      "Kapelle-op-den-Bos ligt **aan het kanaal Brussel-Willebroek**, met Nieuwenrode en Ramsdonk erbij, en op **vijfentwintig minuten van ons magazijn**: samen met Londerzeel de kortste rit van heel Vlaams-Brabant.",
      "De gemeente heeft een **industrieel verleden aan het kanaal**, en dat is aan de bebouwing te zien: compacte arbeiderswoningen in de kern, en ruimere woningen in de dorpen errond.",
    ],
    bouw: {
      kop: "Arbeiderswoningen in de kern, laaggelegen bij het kanaal",
      alineas: [
        "Een arbeiderswoning uit die periode heeft **massieve muren zonder waterkering in de muurvoet** en vaak een kelder deels onder het maaiveld. Laaggelegen bij het kanaal staat het grondwater ondiep, en dan zuigt zo'n muur vocht op uit de ondergrond. Binnen komt dat terug als een vochtband onderaan de muur, vaak met een witte zoutrand: **geen bouwvocht, en drogen lost het niet op**.",
        "Gaat het wél om **bouwvocht uit een renovatie**, dan verdwijnt het definitief. De woning is dan wel smal en diep, dus hoort er **een ventilator bij de droger**: die brengt droge lucht tot achteraan en blaast de verzadigde laag langs vloer en muur weg.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium voor een volledig gelijkvloers: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "In een smalle, diepe woning gaat droge lucht niet van voor naar achter. Deze ventilator doet dat wel, en **halveert vaak de droogtijd**." },
      { key: "revolution", waarom: "**Voor de kelder bij het kanaal**: koud en vochtig tegelijk, en daar werkt een adsorptiedroger door waar een condensdroger stilvalt." },
      { key: "ttk170", waarom: "Voor één kamer, een badkamer of een traphal: 50 liter per dag en 0,75 kW op een gewoon stopcontact." },
    ],
    levering: {
      kop: "Leveren in Kapelle-op-den-Bos: vijfentwintig minuten",
      alinea:
        "**Vijfentwintig minuten rijden, een van onze kortste ritten.** U krijgt een tijdslot en een sms een halfuur vooraf, en bij een dringende werf lukt dezelfde dag vaak nog. Gaat het om een kelder, dan meet de technieker eerst of drogen hier zinvol is.",
    },
    afhalen: {
      kop: "Afhalen loont hier duidelijk",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **vijfentwintig minuten**, dus u bent in een klein uur heen en terug. Voor één of twee losse toestellen is dat zonder meer de moeite. Vervoer de droger **rechtop**; heeft hij plat gelegen, laat hem dan 24 uur staan voor u hem inschakelt.",
    },
    buren: ["londerzeel", "willebroek", "meise", "grimbergen", "zemst"],
    faq: [
      {
        q: "Hoe snel staan jullie hier?",
        a: "Binnen 24 uur na uw boeking, en vaak sneller. De rit duurt maar vijfentwintig minuten. Boekt u in de voormiddag, dan lukt dezelfde dag vaak nog.",
      },
      {
        q: "Mijn muren blijven onderaan vochtig. Is dat bouwvocht?",
        a: "Laaggelegen bij het kanaal is dat bijna altijd opstijgend vocht: een band tot ongeveer een halve meter hoog, vaak met een witte zoutrand en afbladderende verf. Bouwvocht zit gelijkmatig in de ruimte. Onze technieker meet het bij de levering.",
      },
      {
        q: "Helpt een bouwdroger tegen opstijgend vocht?",
        a: "Hij houdt de ruimte bruikbaar en voorkomt schimmel, maar hij stopt de aanvoer niet. De duurzame oplossing is een waterkering in de muurvoet, bijvoorbeeld door injectie. Wij zeggen het eerlijk als drogen hier alleen symptomen aanpakt.",
      },
      {
        q: "Is afhalen de moeite?",
        a: "Ja, voor één of twee losse toestellen: u bent in een klein uur heen en terug en u krijgt korting op de huurprijs. Voor een volledig pakket is leveren beter, want dan zit de rit al in de prijs en plaatst de technieker alles meteen.",
      },
      {
        q: "Betaal ik een kilometerkost?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "merchtem",
    title: "Bouwdroger huren in Merchtem | Vernast",
    description:
      "Bouwdroger huren in Merchtem, Brussegem en Peizegem: lintbebouwing en nieuwbouw op leembodem. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Merchtem",
    kicker: "Pajottenland · lintbebouwing op leem",
    rit: { afstand: "circa 32 km", tijd: "ongeveer vijfendertig minuten" },
    intro: [
      "Merchtem ligt **tussen de A12 en Asse**, met Brussegem, Hamme en Peizegem erbij: **lintbebouwing langs de steenwegen** met verkavelingen achter die linten.",
      "Met **een halfuur rijden** is dit een van de kortere ritten van Vlaams-Brabant. De bodem is **leem**, en dat bepaalt hoe lang een chape hier droogt.",
    ],
    bouw: {
      kop: "Diepe halfopen woningen op leem",
      alineas: [
        "Een woning in lintbebouwing is doorgaans **halfopen en diep**, met een aanbouw achteraan uit een latere fase. Die aanbouw is vaak **het natte punt**: een plat dak, een vloer op volle grond en een verbinding met het oude volume waar de isolatie ophoudt. Daar zetten we een **eigen droogzone** op in plaats van het mee te nemen in het geheel.",
        "Op **leem droogt een chape zonder hulp opvallend traag**, omdat de ondergrond onder de vloerplaat natter blijft dan op zand. Reken zonder droger op vijf à zeven weken voor vijf centimeter, en met droger en ventilator op **twee à drie weken** tot de vloerder kan starten.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium als standaard: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "**Op leem een voorwaarde**: hij blaast de verzadigde laag vlak boven de chape weg, en brengt droge lucht tot achteraan in een diepe woning." },
      { key: "ttk650", waarom: "Voor een groot gelijkvloers of een open leefruimte met een hoog plafond: 110 liter per dag, bereik tot ongeveer 600 m³." },
      { key: "teddh30", waarom: "Voor de onverwarmde ruwbouw in de winter: onder 15 °C zakt het rendement van elke condensdroger. Vraagt 400 V krachtstroom." },
    ],
    levering: {
      kop: "Leveren in Merchtem: binnen 24 uur, een halfuur rijden",
      alinea:
        "**Een halfuur rijden**, en daarmee een van onze kortere ritten in Vlaams-Brabant. U krijgt een tijdslot en een sms een halfuur vooraf. De technieker plaatst de toestellen per droogzone en stelt de hygrostaat in op een streefwaarde.",
    },
    afhalen: {
      kop: "Afhalen loont hier wél",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer een halfuur**. Voor één of twee losse toestellen is dat de moeite, en u krijgt korting op de huurprijs. Voor een volledig pakket is leveren beter: de rit zit al in de prijs.",
    },
    buren: ["asse", "londerzeel", "opwijk", "wemmel", "meise"],
    faq: [
      {
        q: "Mijn aanbouw blijft vochtig terwijl de rest droog is. Waarom?",
        a: "Omdat droge lucht niet vanzelf naar achteren gaat, en omdat een aanbouw vaak een andere vloeropbouw heeft dan het hoofdvolume. Daar hoort een eigen droogzone bij: een toestel in die ruimte, met de deur dicht en een ventilator erbij.",
      },
      {
        q: "Waarom droogt een chape op leem zo traag?",
        a: "Omdat leem water traag doorlaat, dus de ondergrond onder uw vloerplaat blijft natter dan op zand. Zonder hulp doet een chape van vijf centimeter hier vijf à zeven weken; met droger en ventilator ongeveer de helft.",
      },
      {
        q: "Wat als het vriest tijdens de droging?",
        a: "Dan verwarmen we mee. Onder 15 °C verliest een condensdroger het grootste deel van zijn rendement, dus in een onverwarmde ruwbouw zetten we er een elektrische kachel bij. Die vraagt 400 V.",
      },
      {
        q: "Is afhalen vanuit Merchtem de moeite?",
        a: "Ja, voor één of twee losse toestellen: u bent in een uur heen en terug en u krijgt korting. Voor een pakket is leveren logischer.",
      },
      {
        q: "Hoe snel staan jullie in Merchtem?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer een halfuur.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "opwijk",
    title: "Bouwdroger huren in Opwijk | Vernast",
    description:
      "Bouwdroger huren in Opwijk, Mazenzele en Droeshout: dicht bebouwde kern met verdichting en nieuwbouw. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Opwijk",
    kicker: "Pajottenland · dicht bebouwde kern",
    rit: { afstand: "circa 35 km", tijd: "ongeveer vijfendertig minuten" },
    intro: [
      "Opwijk is **compact en dicht bebouwd rond zijn station**, met Mazenzele en Droeshout erbij. Er wordt veel **verdicht**: appartementen en meergezinswoningen op de plaats van één woning in de kern.",
      "Met **vijfendertig minuten** is dit een van de kortere ritten van Vlaams-Brabant. De bodem is **leem**, en dat bepaalt hoe lang een chape hier droogt.",
    ],
    bouw: {
      kop: "Verdichting in de kern, nieuwbouw aan de rand",
      alineas: [
        "Bij een **nieuw appartementsblok** moeten meerdere eenheden tegelijk drogen, achter elkaar in de agenda van de vloerder. Geef bij de reservatie door **hoeveel eenheden** het zijn, dan leveren we in één rit en zetten we per eenheid een droogzone op in plaats van dezelfde rit drie keer te doen. Is er een lift of een vaste trap, dan is **elke verdieping inbegrepen**.",
        "Op **leem droogt een chape zonder hulp opvallend traag**: de ondergrond onder de vloerplaat blijft natter dan op zand. Reken zonder droger op vijf à zeven weken voor vijf centimeter, en met droger en ventilator op **twee à drie weken** tot de vloerder kan starten.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**Per appartement of per kamer**: 50 liter per dag en 0,75 kW op een gewoon stopcontact, stil genoeg voor een bewoond gebouw." },
      { key: "ttk350", waarom: "De Medium voor een volledig gelijkvloers: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "**Op leem een voorwaarde bij een chape**: hij blaast de verzadigde laag vlak boven de vloer weg." },
      { key: "ttk650", waarom: "Voor een groot gelijkvloers of een meergezinswoning in afwerking: 110 liter per dag, bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Opwijk: binnen 24 uur, elke verdieping inbegrepen",
      alinea:
        "Een vijfendertigtal minuten rijden. Is er een lift of een vaste trap, dan is **elke verdieping inbegrepen**; moet een toestel via een ladder naar boven omdat de trap nog niet ligt, dan staat die toeslag **vooraf in uw offerte, niet achteraf op de factuur**.",
    },
    afhalen: {
      kop: "Afhalen loont hier wél",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfendertig minuten**. Voor één of twee losse toestellen is dat de moeite, en u krijgt korting op de huurprijs. Voor een appartementsproject is leveren beter: dan gaan alle toestellen in één rit mee.",
    },
    buren: ["merchtem", "asse", "affligem", "lebbeke", "buggenhout"],
    faq: [
      {
        q: "Kunnen jullie meerdere appartementen tegelijk doen?",
        a: "Ja. Geef bij de reservatie door hoeveel eenheden er tegelijk moeten drogen, dan leveren we in één rit en zetten we per eenheid een droogzone op. Dat is goedkoper dan drie keer dezelfde rit, en uw vloerder kan achter elkaar doorwerken.",
      },
      {
        q: "Zit de verdieping in de prijs?",
        a: "Is er een lift of een vaste trap, dan is elke verdieping inbegrepen. Moet een toestel via een ladder naar boven omdat de trap nog niet ligt, dan rekenen we een toeslag per verdieping, en die staat vooraf in uw offerte.",
      },
      {
        q: "Waarom droogt een chape op leem zo traag?",
        a: "Omdat leem water traag doorlaat, dus de ondergrond onder uw vloerplaat blijft natter dan op zand. Zonder hulp doet een chape van vijf centimeter hier vijf à zeven weken; met droger en ventilator ongeveer de helft.",
      },
      {
        q: "Mag een bouwdroger draaien in een bewoond gebouw?",
        a: "Ja. De Small bouwdroger verbruikt 0,75 kW, dus hij mag op een gewoon stopcontact, en hij is stil genoeg om in de kamer ernaast te slapen.",
      },
      {
        q: "Hoe snel staan jullie in Opwijk?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfendertig minuten.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "affligem",
    title: "Bouwdroger huren in Affligem | Vernast",
    description:
      "Bouwdroger huren in Affligem, Hekelgem en Essene: dorpskernen op leem tussen Aalst en Asse. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Affligem",
    kicker: "Pajottenland · dorpskernen op leem",
    rit: { afstand: "circa 42 km", tijd: "ongeveer veertig minuten" },
    intro: [
      "Affligem bestaat uit **Hekelgem, Essene en Teralfene**, drie kernen op golvend leemland tussen Aalst en Asse, met de abdij ertussen.",
      "Wat we hier drogen is gemengd: **nieuwbouw in verkavelingen**, en **renovatie van dorpswoningen en hoeves** met massieve muren in de oude kernen.",
    ],
    bouw: {
      kop: "Nieuwbouw op leem, massief werk in de kernen",
      alineas: [
        "Op **leem droogt een chape zonder hulp opvallend traag**, omdat de ondergrond onder de vloerplaat natter blijft dan op zand. Reken zonder droger op **vijf à zeven weken** voor vijf centimeter, en met droger en ventilator op **twee à drie weken** tot de vloerder kan starten.",
        "In de kernen staan **dorpswoningen en hoeves met massieve muren** die hun vocht traag afgeven. Tegen het oppervlak vormt zich een verzadigd luchtlaagje dat als een deken werkt, en zolang dat blijft staan droogt de muur niet verder. Een ventilator haalt het weg. Reken op **anderhalf tot twee keer de droogtijd** van een moderne wand.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium als standaard: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "**Op leem en bij massieve muren een voorwaarde**: hij blaast de verzadigde luchtlaag weg, en verdubbelt zo vaak de snelheid." },
      { key: "ttk650", waarom: "Voor een hoeve of een groot gelijkvloers: 110 liter per dag, bereik tot ongeveer 600 m³." },
      { key: "teddh30", waarom: "Voor de onverwarmde ruwbouw of schuur in de winter: onder 15 °C zakt het rendement van elke condensdroger. Vraagt 400 V." },
    ],
    levering: {
      kop: "Leveren in Affligem: binnen 24 uur, in de Pajottenlandronde",
      alinea:
        "Een veertigtal minuten rijden. U krijgt een tijdslot en een sms een halfuur vooraf. **Geef bij de reservatie door in welke kern u woont**, Hekelgem, Essene of Teralfene, dan plant de technieker zijn ronde daarop.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer veertig minuten**. Voor één los toestel kan dat lonen. Voor een pakket is leveren beter: de rit en de vochtmeting zitten al in de prijs.",
    },
    buren: ["opwijk", "ternat", "liedekerke", "aalst", "asse"],
    faq: [
      {
        q: "Waarom droogt een chape op leem zo traag?",
        a: "Omdat leem water traag doorlaat, dus de ondergrond onder uw vloerplaat blijft natter dan op zand. Zonder hulp doet een chape van vijf centimeter hier vijf à zeven weken; met droger en ventilator ongeveer de helft.",
      },
      {
        q: "Waarom droogt een oude dorpswoning trager dan nieuwbouw?",
        a: "Omdat het vocht uit de kern van een massieve muur naar buiten moet, en omdat zich tegen het oppervlak een verzadigd luchtlaagje vormt dat verdere droging afremt. Reken op anderhalf tot twee keer de droogtijd van een moderne wand.",
      },
      {
        q: "Kunnen jullie een schuur of een stal drogen?",
        a: "Ja, als ze dicht te krijgen is. Geef vooraf het volume in kubieke meter door, de vloeropbouw en of de poorten kunnen sluiten. Is de ruimte niet te verwarmen, dan zetten we een adsorptiedroger in.",
      },
      {
        q: "Betaal ik een kilometerkost?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket.",
      },
      {
        q: "Hoe snel staan jullie in Affligem?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer veertig minuten en we plannen het Pajottenland in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "pepingen",
    title: "Bouwdroger huren in Pepingen | Vernast",
    description:
      "Bouwdroger huren in Pepingen, Bellingen en Beert: kleine landelijke kernen op leem in het zuiden van het Pajottenland.",
    h1: "Bouwdroger huren in Pepingen",
    kicker: "Pajottenland · kleine kernen op leem",
    rit: { afstand: "circa 50 km", tijd: "ongeveer vijfenveertig minuten" },
    intro: [
      "Pepingen is **een van de kleinste gemeenten van Vlaams-Brabant**, met Bellingen, Beert, Elingen en Heikruis: vijf gehuchten in golvend leemland, zonder echte kern.",
      "Wat we hier drogen is bijna altijd **renovatie van hoeves en dorpswoningen**, en daar hoort hetzelfde verhaal bij als elders in het Pajottenland: massieve muren en hangwater uit de helling.",
    ],
    bouw: {
      kop: "Hoeves op leem, met grond tegen de bergmuur",
      alineas: [
        "Een hoeve op **leem** combineert twee trage eigenschappen: **massieve muren die hun vocht traag afgeven**, en een ondergrond die water traag doorlaat. Tegen het muuroppervlak vormt zich een verzadigd luchtlaagje dat verdere droging afremt, en dat haalt een ventilator weg. Reken op **anderhalf tot twee keer de droogtijd** van een moderne wand.",
        "Staat het gebouw in de helling, dan heeft het aan de bergzijde **grond tegen de muur**, en perst hangwater daar bij elke regenperiode tegenaan. Dat is geen bouwvocht: een droger houdt de ruimte bruikbaar, maar het water blijft komen. **De technieker meet het verschil** bij de levering en zegt het eerlijk.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium als standaard bij renovatie: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "**Onmisbaar bij massieve muren**: hij blaast de verzadigde luchtlaag tegen het muuroppervlak weg, en pas dan droogt de muur verder." },
      { key: "revolution", waarom: "**Voor de kelder of schuur in de helling**: koud en vochtig tegelijk, en daar werkt een adsorptiedroger door waar een condensdroger stilvalt." },
      { key: "ttk650", waarom: "Voor een hoeve met grote, hoge volumes: 110 liter per dag en bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Pepingen: binnen 24 uur, ook in een gehucht",
      alinea:
        "Een vijftigtal minuten rijden. We plannen het Pajottenland in één ronde, dus ook een klein gehucht ligt gewoon op de route. **Staat uw hoeve aan een onverharde oprit, zeg dat dan bij de reservatie**, dan brengt de technieker het juiste materiaal mee.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijftig minuten**. Voor een volledig pakket is leveren bijna altijd beter: bij massief werk hangt het resultaat af van waar de toestellen en de ventilatoren staan.",
    },
    buren: ["lennik", "halle", "pajottegem", "sint-pieters-leeuw"],
    faq: [
      {
        q: "Komen jullie ook naar een klein gehucht?",
        a: "Ja, en zonder toeslag. We plannen het Pajottenland in één ronde, dus Bellingen, Beert, Elingen en Heikruis liggen gewoon op de route. De prijs van het droogpakket is dezelfde in heel ons werkgebied.",
      },
      {
        q: "Waarom droogt een hoeve zo veel trager dan een nieuwbouw?",
        a: "Omdat het vocht uit de kern van een massieve muur naar buiten moet, door veertig centimeter of meer, en omdat zich tegen het oppervlak een verzadigd luchtlaagje vormt. Reken op anderhalf tot twee keer de droogtijd, altijd met een ventilator erbij.",
      },
      {
        q: "Mijn muur aan de bergzijde blijft vochtig. Wat is dat?",
        a: "Waarschijnlijk hangwater: een waterlaag die door de leembodem zijwaarts zakt en tegen die muur komt te staan. Het komt na elke regenperiode terug. Drogen houdt de ruimte bruikbaar, drainage aan de buitenzijde lost het op.",
      },
      {
        q: "Kan de bestelwagen tot bij mijn hoeve?",
        a: "Meestal wel, maar aan een onverharde oprit niet altijd. Geef dat door bij de reservatie, dan weet de technieker dat hij verder moet uitladen.",
      },
      {
        q: "Hoe snel staan jullie in Pepingen?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijftig minuten en we plannen het Pajottenland in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "pajottegem",
    title: "Bouwdroger huren in Pajottegem | Vernast",
    description:
      "Bouwdroger huren in Pajottegem: Galmaarden, Gooik en Herne samen, met hoeves op de leemheuvels. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Pajottegem",
    kicker: "Pajottenland · Galmaarden, Gooik en Herne",
    rit: { afstand: "circa 57 km", tijd: "ongeveer vijftig minuten" },
    intro: [
      "Pajottegem is **sinds 1 januari 2025 de fusie van Galmaarden, Gooik en Herne**, en daarmee in één keer een van de uitgestrektste gemeenten van het Pajottenland. Zoekt u op een van die oude namen, dan komt u hier terecht.",
      "De streek is **golvend leemland met oude hoeves**, en dat bepaalt het werk: massieve muren die hun vocht traag afgeven, en hangwater tegen de bergzijde van een gebouw in de helling.",
    ],
    bouw: {
      kop: "Hoeves op de leemheuvels, in drie oude gemeenten",
      alineas: [
        "Een hoeve op **leem** heeft **massieve muren die hun vocht traag afgeven**, en een ondergrond die water traag doorlaat. Tegen het muuroppervlak vormt zich een verzadigd luchtlaagje dat verdere droging afremt, en zolang dat blijft staan droogt de muur niet verder. Een ventilator haalt het weg. Reken op **anderhalf tot twee keer de droogtijd** van een moderne wand.",
        "Een **schuur of stal die woonruimte wordt** is hier een gewone opdracht: een groot, hoog en meestal onverwarmd volume. Wij rekenen op **volume in kubieke meter**, en een schuur met een hoge nok telt zwaarder dan haar vloeroppervlak suggereert. Is ze niet te verwarmen, dan gaat er een adsorptiedroger naartoe.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Voor de schuur of de stal in herbestemming**: 110 liter per dag en een bereik tot ongeveer 600 m³." },
      { key: "ttv4500", waarom: "**Onmisbaar bij massieve muren**, en op een groot volume de voorwaarde om overal even droog te krijgen." },
      { key: "ttk350", waarom: "De Medium voor een woning of een gelijkvloers: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "revolution", waarom: "**Voor de onverwarmde schuur of kelder**: de adsorptiedroger blijft ook bij lage temperatuur vocht opnemen." },
    ],
    levering: {
      kop: "Leveren in Pajottegem: binnen 24 uur, in Galmaarden, Gooik of Herne",
      alinea:
        "Een vijftigtal minuten rijden. **Geef bij de reservatie door in welke kern u woont**, Galmaarden, Gooik of Herne, dan plant de technieker zijn ronde daarop: de gemeente is na de fusie uitgestrekt. Bij een hoeve vragen we vooraf het volume in kubieke meter.",
    },
    afhalen: {
      kop: "Afhalen loont hier niet",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijftig minuten, dus bijna twee uur heen en terug**. Dat weegt niet op tegen de korting op één toestel. **Vanuit Pajottegem leveren we gewoon**; de rit zit al in de prijs van het pakket.",
    },
    buren: ["pepingen", "lennik", "roosdaal", "bever", "geraardsbergen"],
    faq: [
      {
        q: "Ik woon in Galmaarden, Gooik of Herne. Is dit mijn pagina?",
        a: "Ja. Die drie gemeenten zijn op 1 januari 2025 gefuseerd tot Pajottegem, en deze pagina gaat over alle drie. Geef bij de reservatie door in welke kern u woont, dan plant de technieker zijn ronde daarop.",
      },
      {
        q: "Kunnen jullie een schuur drogen die woonruimte wordt?",
        a: "Ja, dat doen we hier vaak. Geef vooraf het volume in kubieke meter door, de vloeropbouw en of de poorten en verluchting kunnen sluiten. Is de ruimte niet te verwarmen, dan zetten we een adsorptiedroger in.",
      },
      {
        q: "Waarom droogt een hoeve zo veel trager?",
        a: "Omdat het vocht uit de kern van een massieve muur naar buiten moet, en omdat zich tegen het oppervlak een verzadigd luchtlaagje vormt dat verdere droging afremt. Reken op anderhalf tot twee keer de droogtijd van een moderne wand.",
      },
      {
        q: "Betaal ik meer omdat ik ver woon?",
        a: "Nee. De prijs van het droogpakket is dezelfde in heel ons werkgebied. De rit telt mee in onze planning, niet in uw factuur.",
      },
      {
        q: "Hoe snel staan jullie in Pajottegem?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijftig minuten en we plannen het Pajottenland in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "bever",
    title: "Bouwdroger huren in Bever | Vernast",
    description:
      "Bouwdroger huren in Bever: de zuidelijkste gemeente van Vlaams-Brabant, met hoeves op leem. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Bever",
    kicker: "Pajottenland · de zuidelijkste gemeente",
    rit: { afstand: "circa 60 km", tijd: "ongeveer vijfenvijftig minuten" },
    intro: [
      "Bever is **de zuidelijkste en een van de kleinste gemeenten van Vlaams-Brabant**, tegen de provinciegrens met Henegouwen. Nauwelijks tweeduizend inwoners, en bijna alles landelijk.",
      "Het is ook **een van onze verste haltes in deze provincie**: een rit van bijna een uur. Dat zeggen we liever vooraf. Boekt u voor de middag, dan staat het doorgaans de volgende werkdag.",
    ],
    bouw: {
      kop: "Hoeves en dorpswoningen op leem, in open landbouwgebied",
      alineas: [
        "Een hoeve op **leem** heeft **massieve muren die hun vocht traag afgeven** en een ondergrond die water traag doorlaat. Tegen het muuroppervlak vormt zich een verzadigd luchtlaagje dat verdere droging afremt, en dat haalt een ventilator weg. Reken op **anderhalf tot twee keer de droogtijd** van een moderne wand.",
        "Veel werven hier bevatten **een schuur of een stal** die mee wordt aangepakt: een groot, hoog en onverwarmd volume. Wij rekenen op **volume in kubieke meter**, en zo'n gebouw telt zwaarder dan zijn vloeroppervlak suggereert. Is het niet te verwarmen, dan gaat er een adsorptiedroger naartoe, die ook bij lage temperatuur doorwerkt.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Voor de schuur of de stal**: 110 liter per dag en een bereik tot ongeveer 600 m³, met luchtbeweging over de volle lengte erbij." },
      { key: "ttv4500", waarom: "**Onmisbaar bij massieve muren**: hij blaast de verzadigde luchtlaag tegen het muuroppervlak weg." },
      { key: "ttk350", waarom: "De Medium voor een woning of een gelijkvloers: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "revolution", waarom: "Voor de onverwarmde schuur of kelder: de adsorptiedroger blijft ook bij lage temperatuur vocht opnemen." },
    ],
    levering: {
      kop: "Leveren in Bever: onze zuidelijkste halte, en toch binnen 24 uur",
      alinea:
        "Bijna een uur rijden: **een van onze verste haltes in Vlaams-Brabant**. Boekt u voor de middag, dan staat het doorgaans de volgende werkdag. Bij een hoeve vragen we vooraf **het volume in kubieke meter** en of de ruimte dicht te krijgen is.",
    },
    afhalen: {
      kop: "Afhalen loont hier niet",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van bijna een uur, dus twee uur heen en terug**. **Vanuit Bever raden we afhalen af en leveren we gewoon.** De rit zit al in de prijs, en die prijs is dezelfde als voor iemand die naast ons magazijn woont.",
    },
    buren: ["pajottegem", "pepingen", "geraardsbergen"],
    faq: [
      {
        q: "Komen jullie ook tot in Bever?",
        a: "Ja, en zonder toeslag. Het is een van onze verste haltes in deze provincie, dus boekt u voor de middag, dan staat het doorgaans de volgende werkdag. De prijs van het droogpakket is dezelfde in heel ons werkgebied.",
      },
      {
        q: "Kunnen jullie een schuur of een stal drogen?",
        a: "Ja. Geef vooraf het volume in kubieke meter door, de vloeropbouw en of de poorten en verluchting kunnen sluiten. Is de ruimte niet te verwarmen, dan zetten we een adsorptiedroger in die ook bij lage temperatuur doorwerkt.",
      },
      {
        q: "Waarom droogt een hoeve zo veel trager?",
        a: "Omdat het vocht uit de kern van een massieve muur naar buiten moet, en omdat zich tegen het oppervlak een verzadigd luchtlaagje vormt dat verdere droging afremt. Reken op anderhalf tot twee keer de droogtijd van een moderne wand.",
      },
      {
        q: "Is afhalen vanuit Bever de moeite?",
        a: "Nee, en dat zeggen we liever eerlijk: u bent twee uur onderweg voor een toestel van 30 kg. De levering zit al in de prijs van het droogpakket, en de technieker plaatst alles en meet de vochtigheid.",
      },
      {
        q: "Betaal ik meer omdat ik ver woon?",
        a: "Nee. De prijs is dezelfde in heel ons werkgebied. De rit telt mee in onze planning, niet in uw factuur.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "leuven",
    title: "Bouwdroger huren in Leuven | Vernast",
    description:
      "Bouwdroger huren in Leuven, Heverlee en Kessel-Lo: studentenhuizen per kamer en stadswoningen met een gewelfde kelder.",
    h1: "Bouwdroger huren in Leuven",
    kicker: "Dijleland · stad met gewelfde kelders",
    rit: { afstand: "circa 50 km", tijd: "ongeveer vijfenveertig minuten" },
    intro: [
      "In Leuven is bouwdroging bijna altijd **renovatie in een bewoonde stad**. In de binnenstad en in Heverlee, Kessel-Lo en Wilsele worden woningen **per kamer verbouwd** voor studentenverhuur: één kamer tegelijk, met de huurders ernaast.",
      "Dat vraagt een toestel dat **stil genoeg** is, **op één gewoon stopcontact** draait en **via een smalle trap** naar boven kan. Daarom staat de **Small bouwdroger** hier het vaakst: 50 liter per dag, 0,75 kW, 25 kg.",
    ],
    bouw: {
      kop: "Verbouwing per kamer, en gewelfde kelders onder de stad",
      alineas: [
        "Bij een **verbouwing per kamer** is er geen plaats voor een reservoir dat iemand moet legen, want niemand doet dat. Daarom zijn onze toestellen **pompklaar**: de technieker legt de afvoerslang naar een gootsteen of een putje. **Een reservoir dat volloopt zet het toestel stil**, en dan verliest u een nacht droogtijd zonder het te merken.",
        "Onder de oude stadswoningen zitten **gewelfde kelders**: koud, gesloten en zonder doorstroming, en de Dijle loopt er ondergronds niet ver vandaan. Zo'n ruimte komt in de winter zelden boven tien graden, en **onder 15 °C verliest een condensdroger het grootste deel van zijn rendement**. Daar gaat een adsorptiedroger naartoe.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**Het toestel voor de stad**: compact genoeg voor een Leuvense draaitrap, stil, en zuinig op één gewoon stopcontact." },
      { key: "revolution", waarom: "**Voor de gewelfde kelder**: koud en gesloten, en daar werkt een adsorptiedroger door waar een condensdroger stilvalt." },
      { key: "ttv4500", waarom: "In een smal en diep stadshuis gaat droge lucht niet van voor naar achter. Deze ventilator doet dat wel, en **halveert vaak de droogtijd**." },
      { key: "ttk350", waarom: "De Medium voor een volledig gelijkvloers of een verdieping: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
    ],
    levering: {
      kop: "Leveren in Leuven: binnen de venstertijd van uw straat",
      alinea:
        "Een vijfenveertigtal minuten rijden, **buiten de spits**. **Ligt uw straat in het autovrije gebied of in een zone met venstertijden, zeg dat dan bij de reservatie**, dan plannen we binnen dat venster. Is er een lift of een vaste trap, dan is elke verdieping inbegrepen in de prijs.",
    },
    afhalen: {
      kop: "Afhalen kan, maar leveren is hier logischer",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfenveertig minuten**. Voor één los toestel kan dat lonen. Voor een pakket niet: de levering zit al in de prijs, de technieker legt de afvoer naar een putje, en u hoeft geen toestel van 30 kg door een Leuvense trappenhal te sleuren.",
    },
    buren: ["herent", "oud-heverlee", "bierbeek", "holsbeek", "bertem"],
    faq: [
      {
        q: "Mag een bouwdroger draaien terwijl er studenten wonen?",
        a: "Ja, en daarvoor is de Small bouwdroger bedoeld. Hij verbruikt 0,75 kW, dus hij mag op een gewoon stopcontact, en hij is stil genoeg om in de kamer ernaast te slapen. Houd de deur van de droogzone dicht: droge lucht die door het hele huis trekt droogt niets snel.",
      },
      {
        q: "Moet iemand het reservoir legen?",
        a: "Nee, en dat is hier belangrijker dan elders. Onze toestellen zijn pompklaar: de technieker legt de afvoerslang naar een gootsteen of een putje. Een reservoir dat volloopt zet het toestel stil, en in een pand waar niemand permanent is, merkt u dat pas dagen later.",
      },
      {
        q: "Kunnen jullie een gewelfde kelder drogen?",
        a: "Ja, en daarvoor zetten we een adsorptiedroger in. Een gewelfde kelder is koud en gesloten, en een condensdroger werkt daar slecht: onder 15 °C verliest hij het grootste deel van zijn rendement. Een adsorptiedroger blijft ook bij vijf graden doorwerken.",
      },
      {
        q: "Kunnen jullie leveren in het autovrije gebied?",
        a: "Ja. Geef uw straat door bij de reservatie en vermeld dat ze in het autovrije gebied of in een venstertijdzone ligt. We plannen de levering dan binnen dat venster.",
      },
      {
        q: "Hoe snel staan jullie in Leuven?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfenveertig minuten buiten de spits, en we plannen het Dijleland in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "herent",
    title: "Bouwdroger huren in Herent | Vernast",
    description:
      "Bouwdroger huren in Herent, Veltem-Beisem en Winksele: verkavelingen tegen Leuven, op leembodem. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Herent",
    kicker: "Dijleland · verkavelingen tegen Leuven",
    rit: { afstand: "circa 48 km", tijd: "ongeveer vijfenveertig minuten" },
    intro: [
      "Herent ligt **direct tegen Leuven**, met Veltem-Beisem en Winksele erbij, en is in de laatste decennia vooral gegroeid met **verkavelingen**: open en halfopen nieuwbouw rond de oude kernen.",
      "De bodem is **leem**, en dat bepaalt hoe lang een chape hier droogt: leem laat water traag door, dus de ondergrond onder de vloerplaat blijft natter dan op zand.",
    ],
    bouw: {
      kop: "Nieuwbouw op leem, en verbouwing voor verhuur",
      alineas: [
        "Op **leem doet een chape van vijf centimeter zonder hulp vijf à zeven weken**. Met droger en ventilator samen is ze **in een tiental dagen beloopbaar en in twee à drie weken klaar voor de vloerder**. De technieker meet bij de ophaling of de restvochtigheid laag genoeg is, zodat uw vloerder weet waar hij aan toe is.",
        "Dicht tegen Leuven worden ook hier woningen **verbouwd voor verhuur**, en dan is de werf vaak bewoond. Het toestel moet dan **stil genoeg** zijn, **op 230 V** draaien en **pompklaar** zijn, want een reservoir legen doet niemand.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De standaard voor een nieuwbouwwoning: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "**Op leem een voorwaarde**: hij blaast de verzadigde laag vlak boven de chape weg, en verdubbelt zo vaak de snelheid." },
      { key: "ttk170", waarom: "Voor één kamer, een badkamer of een bewoonde verbouwing: 50 liter per dag en 0,75 kW op een gewoon stopcontact." },
      { key: "teddh30", waarom: "Voor de onverwarmde ruwbouw in de winter: onder 15 °C zakt het rendement van elke condensdroger. Vraagt 400 V krachtstroom." },
    ],
    levering: {
      kop: "Leveren in Herent: binnen 24 uur, in de Dijlelandronde",
      alinea:
        "Een vijfenveertigtal minuten rijden, **buiten de spits**. U krijgt een tijdslot en een sms een halfuur vooraf. De technieker plaatst de toestellen per droogzone, legt de afvoer naar een putje en stelt de hygrostaat in op een streefwaarde.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfenveertig minuten**. Voor één los toestel kan dat lonen. Voor een pakket op een nieuwbouwwerf is leveren beter: de rit zit al in de prijs en de technieker zet de droogzones meteen goed op.",
    },
    buren: ["leuven", "bertem", "kortenberg", "haacht", "holsbeek"],
    faq: [
      {
        q: "Waarom droogt een chape op leem zo traag?",
        a: "Omdat leem water traag doorlaat, dus de ondergrond onder uw vloerplaat blijft natter dan op zand. Zonder hulp doet een chape van vijf centimeter hier vijf à zeven weken; met droger en ventilator ongeveer de helft.",
      },
      {
        q: "Wanneer start ik met drogen na het chaperen?",
        a: "Niet meteen. Een chape moet eerst uitharden: reken op 48 tot 72 uur, en start dan voorzichtig. Te snel drogen geeft krimpscheuren, en daarom stelt de technieker de hygrostaat in op een streefwaarde.",
      },
      {
        q: "Moet ik het reservoir legen?",
        a: "Nee. Onze toestellen zijn pompklaar: de technieker legt de afvoerslang naar een putje of een gootsteen. Een reservoir dat volloopt zet het toestel stil, en dan verliest u een nacht droogtijd.",
      },
      {
        q: "Hoeveel toestellen voor een gelijkvloers van 140 m²?",
        a: "Doorgaans twee drogers met een ventilator per droogzone, en een derde als de verdieping meteen mee moet. De Calculator rekent op volume in kubieke meter, niet op oppervlakte.",
      },
      {
        q: "Hoe snel staan jullie in Herent?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfenveertig minuten buiten de spits.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "bertem",
    title: "Bouwdroger huren in Bertem | Vernast",
    description:
      "Bouwdroger huren in Bertem, Leefdaal en Korbeek-Dijle: woningen op het leemplateau boven de Dijlevallei. Geleverd en geplaatst, met vochtmeting inbegrepen.",
    h1: "Bouwdroger huren in Bertem",
    kicker: "Dijleland · op het leemplateau",
    rit: { afstand: "circa 52 km", tijd: "ongeveer vijfenveertig minuten" },
    intro: [
      "Bertem ligt **op het leemplateau tussen Leuven en Tervuren**, met Leefdaal en Korbeek-Dijle erbij. Het is hier **dikke leem**, met holle wegen die in dat leem zijn uitgesneden.",
      "De bebouwing is ruim en vrijstaand, en wat we hier drogen is vooral **grondige renovatie**: drie bouwlagen vers pleisterwerk, een nieuwe chape en een kelder die mee wordt aangepakt.",
    ],
    bouw: {
      kop: "Dikke leembodem, en renovatie van ruime woningen",
      alineas: [
        "**Dikke leem laat water zeer traag door.** Een kelder in zo'n bodem staat permanent in een vochtige omgeving, en op een helling perst hangwater tegen de bergzijde van het gebouw. Dat is geen bouwvocht: **een droger haalt vocht uit de lucht, niet uit de grond**. De technieker meet dat bij de levering en zegt eerlijk wat drogen hier oplost.",
        "Bij de renovatie zelf droogt alles tegelijk, verspreid over meerdere verdiepingen. Droge lucht blijft hangen waar het toestel staat, dus zetten we **per verdieping een droogzone** op met de deuren dicht. Eén groot toestel in de trappenhal droogt vooral de hal, en dan huurt u langer.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium per verdieping: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "revolution", waarom: "**Voor de kelder in de leembodem**: koud en vochtig tegelijk, en daar werkt een adsorptiedroger door waar een condensdroger stilvalt." },
      { key: "ttv4500", waarom: "Bij vers pleisterwerk en verse chape verdubbelt luchtbeweging vaak de snelheid." },
      { key: "ttk650", waarom: "Voor een groot gelijkvloers in één keer: 110 liter per dag, bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Bertem: binnen 24 uur, buiten de spits",
      alinea:
        "Een vijfenveertigtal minuten rijden, **buiten de spits**. **Staat uw woning aan een holle weg of een steile oprit, zeg dat dan bij de reservatie**, dan weet de technieker dat hij verder moet uitladen en brengt hij het juiste materiaal mee.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfenveertig minuten**. Voor één los toestel kan dat lonen. Voor een volledige renovatie is leveren beter: het resultaat hangt af van hoe de droogzones opgezet staan.",
    },
    buren: ["leuven", "herent", "tervuren", "oud-heverlee", "kortenberg"],
    faq: [
      {
        q: "Mijn kelder in de leembodem blijft vochtig. Helpt drogen?",
        a: "Zolang het toestel draait wel: de ruimte wordt bruikbaar en schimmel krijgt geen kans. Maar leem laat water zeer traag door, dus de omgeving van uw kelder blijft vochtig. Drogen houdt het binnen onder controle; waterdichting of drainage aan de buitenzijde lost het op.",
      },
      {
        q: "Kan ik een hele woning met één toestel drogen?",
        a: "Beter niet. Droge lucht blijft hangen waar het toestel staat, en met open deuren droogt u vooral de gang. Per verdieping of per gesloten zone een toestel werkt sneller en komt doorgaans goedkoper uit.",
      },
      {
        q: "Kan de bestelwagen tot bij mijn huis?",
        a: "In de meeste straten wel. Ligt uw woning aan een holle weg of een steile oprit, zeg dat dan bij de reservatie, dan weet de technieker dat hij verder moet uitladen.",
      },
      {
        q: "Hoe lang blijft een pakket staan?",
        a: "Standaard twee weken voor een chape en één tot twee weken voor pleisterwerk, maar we meten bij de ophaling. Is het nog niet droog, dan verlengt u per week bij.",
      },
      {
        q: "Hoe snel staan jullie in Bertem?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfenveertig minuten buiten de spits.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "oud-heverlee",
    title: "Bouwdroger huren in Oud-Heverlee | Vernast",
    description:
      "Bouwdroger huren in Oud-Heverlee, Blanden en Sint-Joris-Weert: woningen in de Dijlevallei bij de vijvers. Geleverd en geplaatst, met vochtmeting inbegrepen.",
    h1: "Bouwdroger huren in Oud-Heverlee",
    kicker: "Dijleland · bij de vijvers in de vallei",
    rit: { afstand: "circa 55 km", tijd: "ongeveer vijftig minuten" },
    intro: [
      "Oud-Heverlee ligt **in de Dijlevallei**, met Blanden, Haasrode en Sint-Joris-Weert. In de vallei liggen **vijvers en moerassige meersen**, en daar zit het grondwater **vlak onder het maaiveld**.",
      "Boven de vallei, richting Blanden en Haasrode, is het **leemplateau**. Twee landschappen in één gemeente, met twee verschillende vochtproblemen.",
    ],
    bouw: {
      kop: "Vlak bij de vijvers, of boven op het plateau",
      alineas: [
        "**In de vallei staat het grondwater vlak onder het maaiveld.** Een kelder of een kruipruimte staat daar permanent in een vochtige omgeving, en zonder ventilatie blijft dat vocht hangen tot het via de vloeropbouw in de woning komt. **Een droger lost de aanvoer niet op**, maar hij maakt de ruimte bruikbaar en voorkomt dat schimmel zich vastzet.",
        "**Op het plateau** is het leem, en daar perst hangwater tegen de bergzijde van een woning in de helling. Ook dat is geen bouwvocht. Gaat het wél om bouwvocht uit een renovatie, dan verdwijnt het definitief, en dan is **een ventilator bij de droger** het verschil tussen twee en vier weken.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**Voor de kelder of kruipruimte in de vallei**: koud en permanent vochtig, en daar werkt een adsorptiedroger door waar een condensdroger stilvalt." },
      { key: "ttk350", waarom: "De Medium voor een woning of een gelijkvloers: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "Vocht kruipt onder vloeren en achter plinten. Zonder luchtbeweging droogt dat niet, met deze ventilator wel." },
      { key: "ttk650", waarom: "Voor een groot gelijkvloers of een ruime woning op het plateau: 110 liter per dag, bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Oud-Heverlee: binnen 24 uur, geplaatst en gemeten",
      alinea:
        "Een vijftigtal minuten rijden, **buiten de spits**. Bij een kelder of een kruipruimte **meet de technieker eerst** of het om bouwvocht of om grondwater gaat, want dat bepaalt of drogen hier een oplossing is of een pleister.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijftig minuten**. Voor één los toestel kan dat lonen. Voor een pakket is leveren beter: de rit en de vochtmeting zitten al in de prijs.",
    },
    buren: ["leuven", "bertem", "huldenberg", "bierbeek"],
    faq: [
      {
        q: "Kan een bouwdroger een kruipruimte drogen?",
        a: "Hij kan de lucht erin droog maken, en dat helpt tegen schimmel en tegen vocht dat via de vloer naar boven komt. Maar zit het grondwater vlak onder het maaiveld, dan is permanente ventilatie van de kruipruimte de duurzame oplossing. Wij zeggen het eerlijk als drogen hier alleen symptomen aanpakt.",
      },
      {
        q: "Waarom een adsorptiedroger en geen gewone bouwdroger?",
        a: "Omdat een condensdroger lucht afkoelt om het water eruit te halen, en dat werkt slecht als de lucht al koud is. Onder 15 °C verliest hij het grootste deel van zijn rendement. Een adsorptiedroger bindt het vocht aan een droogwiel en blijft ook bij vijf graden doorwerken.",
      },
      {
        q: "Ik woon op het plateau en één muur blijft vochtig. Wat is dat?",
        a: "Waarschijnlijk hangwater: een waterlaag die door de leembodem zijwaarts zakt en tegen de bergzijde van uw woning komt te staan. Het komt na elke regenperiode terug. Drainage aan de buitenzijde lost dat op.",
      },
      {
        q: "Betaal ik een kilometerkost?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket.",
      },
      {
        q: "Hoe snel staan jullie hier?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijftig minuten buiten de spits.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "huldenberg",
    title: "Bouwdroger huren in Huldenberg | Vernast",
    description:
      "Bouwdroger huren in Huldenberg, Neerijse en Sint-Agatha-Rode: woningen tussen de vijvers van de Dijlevallei. Geleverd en geplaatst, met vochtmeting inbegrepen.",
    h1: "Bouwdroger huren in Huldenberg",
    kicker: "Dijleland · tussen de valleivijvers",
    rit: { afstand: "circa 57 km", tijd: "ongeveer vijftig minuten" },
    intro: [
      "Huldenberg ligt **in de breedste bocht van de Dijlevallei**, met Neerijse, Loonbeek, Ottenburg en Sint-Agatha-Rode. Tussen de dorpen liggen **vijvers en moerassen**, en dat is geen decor: het grondwater staat hier **permanent hoog**.",
      "Daarboven lopen de **leemhellingen** naar het plateau. Een woning in die flank heeft aan de bergzijde grond tegen de muur, met hangwater erachter.",
    ],
    bouw: {
      kop: "Hoog grondwater in de vallei, hangwater in de flank",
      alineas: [
        "**In de vallei staat het grondwater permanent hoog.** Een kelder of een vloer op volle grond blijft daar zelden volledig droog, en dat is geen bouwvocht: drogen haalt het uit de ruimte, de bron blijft. We zeggen dat liever vooraf dan dat u na drie weken huur hetzelfde probleem hebt.",
        "**In de flank** perst hangwater uit de leembodem tegen de bergzijde van een gebouw, na elke regenperiode op dezelfde plaats. Gaat het om **bouwvocht uit een renovatie**, dan verdwijnt het wel definitief, en dan hoort er bij massieve muren een ventilator bij: die blaast de verzadigde luchtlaag langs het muuroppervlak weg.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**Voor de kelder in de vallei**: koud en permanent vochtig, en daar werkt een adsorptiedroger door waar een condensdroger stilvalt." },
      { key: "ttk350", waarom: "De Medium voor een woning of een gelijkvloers: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "**Bij massieve muren een voorwaarde**: hij blaast de verzadigde luchtlaag tegen het oppervlak weg, en komt onder vloeren en achter plinten." },
      { key: "ttk650", waarom: "Voor een hoeve of een groot gelijkvloers: 110 liter per dag, bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Huldenberg: binnen 24 uur, geplaatst en gemeten",
      alinea:
        "Een vijftigtal minuten rijden, **buiten de spits**. Bij een kelder of een vloer op volle grond **meet de technieker eerst** of het om bouwvocht of om grondwater gaat. Staat uw woning aan een steile valleiweg, zeg dat dan bij de reservatie.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijftig minuten**. Voor één los toestel kan dat lonen. Voor een pakket is leveren beter: de rit en de vochtmeting zitten al in de prijs.",
    },
    buren: ["oud-heverlee", "overijse", "tervuren", "bierbeek"],
    faq: [
      {
        q: "Mijn kelder in de vallei blijft vochtig. Helpt drogen?",
        a: "Zolang het toestel draait wel: de ruimte wordt bruikbaar en schimmel krijgt geen kans. Maar het grondwater staat hier permanent hoog, en dat stopt een droger niet. De vochtmeting bij de levering vertelt of het om bouwvocht of om grondwater gaat.",
      },
      {
        q: "Wat is hangwater?",
        a: "Een waterlaag die door de leembodem zijwaarts naar beneden zakt en tegen het eerste obstakel komt te staan, vaak de bergzijde van een woning. Het komt na elke regenperiode terug. Drogen houdt de ruimte bruikbaar, drainage aan de buitenzijde lost het op.",
      },
      {
        q: "Hoe lang duurt het drogen van een gelijkvloers?",
        a: "Bij bouwvocht uit een renovatie reken op één tot twee weken voor pleisterwerk en twee à drie weken voor een chape, met droger en ventilator samen. De technieker meet bij de ophaling of het droog genoeg is.",
      },
      {
        q: "Betaal ik een kilometerkost?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket.",
      },
      {
        q: "Hoe snel staan jullie in Huldenberg?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijftig minuten buiten de spits.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "bierbeek",
    title: "Bouwdroger huren in Bierbeek | Vernast",
    description:
      "Bouwdroger huren in Bierbeek, Korbeek-Lo en Lovenjoel: woningen en hoeves op het leemplateau bij Leuven. Binnen 24 uur geleverd, geplaatst en opgehaald.",
    h1: "Bouwdroger huren in Bierbeek",
    kicker: "Dijleland · leemplateau bij Leuven",
    rit: { afstand: "circa 57 km", tijd: "ongeveer vijftig minuten" },
    intro: [
      "Bierbeek ligt **op het leemplateau ten zuidoosten van Leuven**, met Korbeek-Lo, Lovenjoel en Opvelp erbij. Korbeek-Lo is zo goed als een Leuvense wijk, de andere kernen zijn landelijk gebleven.",
      "Dat verdeelt het werk: **verbouwing en renovatie** dicht tegen de stad, en **hoeves en dorpswoningen met massieve muren** in de landelijke kernen.",
    ],
    bouw: {
      kop: "Stedelijke verbouwing en landelijke hoeves, op dezelfde leem",
      alineas: [
        "In de kernen tegen Leuven worden woningen **verbouwd en verhuurd**, en dan is de werf vaak bewoond. Het toestel moet **stil genoeg** zijn, **op 230 V** draaien en **pompklaar** zijn: een reservoir legen doet niemand, en een vol reservoir zet het toestel stil zonder dat u het merkt.",
        "In de landelijke kernen gaat het om **massief werk op leem**. Een muur van veertig centimeter geeft zijn vocht traag af, en tegen het oppervlak vormt zich een verzadigd luchtlaagje dat verdere droging afremt. Een ventilator haalt dat weg. Reken op **anderhalf tot twee keer de droogtijd** van een moderne wand.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium als standaard: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "**Bij massieve muren een voorwaarde**: hij blaast de verzadigde luchtlaag tegen het muuroppervlak weg, en pas dan droogt de muur verder." },
      { key: "ttk170", waarom: "Voor één kamer, een badkamer of een bewoonde verbouwing: 50 liter per dag en 0,75 kW op een gewoon stopcontact." },
      { key: "ttk650", waarom: "Voor een hoeve of een groot gelijkvloers: 110 liter per dag, bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Bierbeek: binnen 24 uur, in de Dijlelandronde",
      alinea:
        "Een vijftigtal minuten rijden, **buiten de spits**. U krijgt een tijdslot en een sms een halfuur vooraf. Bij een hoeve vragen we **vooraf het volume in kubieke meter** en of de ruimte dicht te krijgen is.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijftig minuten**. Voor één los toestel kan dat lonen. Voor een pakket is leveren beter: de rit en de vochtmeting zitten al in de prijs.",
    },
    buren: ["leuven", "oud-heverlee", "boutersem", "huldenberg", "lubbeek"],
    faq: [
      {
        q: "Moet ik het reservoir legen?",
        a: "Nee. Onze toestellen zijn pompklaar: de technieker legt de afvoerslang naar een putje of een gootsteen. Een reservoir dat volloopt zet het toestel stil, en in een pand waar niemand permanent is, merkt u dat pas dagen later.",
      },
      {
        q: "Waarom droogt een hoeve zo veel trager dan een nieuwbouw?",
        a: "Omdat het vocht uit de kern van een massieve muur naar buiten moet, door veertig centimeter of meer, en omdat zich tegen het oppervlak een verzadigd luchtlaagje vormt. Reken op anderhalf tot twee keer de droogtijd, altijd met een ventilator erbij.",
      },
      {
        q: "Mag een bouwdroger draaien in een bewoonde woning?",
        a: "Ja. De Small bouwdroger verbruikt 0,75 kW, dus hij mag op een gewoon stopcontact, en hij is stil genoeg om in de kamer ernaast te slapen. Houd de deur van de droogzone dicht.",
      },
      {
        q: "Kunnen jullie een schuur of een stal drogen?",
        a: "Ja, als ze dicht te krijgen is. Geef vooraf het volume door, de vloeropbouw en of de poorten kunnen sluiten. Is de ruimte niet te verwarmen, dan zetten we een adsorptiedroger in.",
      },
      {
        q: "Hoe snel staan jullie in Bierbeek?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijftig minuten buiten de spits.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "boutersem",
    title: "Bouwdroger huren in Boutersem | Vernast",
    description:
      "Bouwdroger huren in Boutersem, Vertrijk en Roosbeek: dorpen in de Velpevallei op leembodem. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Boutersem",
    kicker: "Dijleland · dorpen in de Velpevallei",
    rit: { afstand: "circa 60 km", tijd: "ongeveer vijftig minuten" },
    intro: [
      "Boutersem ligt **in de vallei van de Velpe**, met Vertrijk, Kerkom, Roosbeek, Neervelp en Willebringen: kleine dorpen in dik leemland tussen Leuven en Tienen.",
      "Wat we hier drogen is bijna altijd **renovatie**: een hoeve die aangepakt wordt, een dorpswoning met een nieuwe vloer, een schuur die woonruimte wordt.",
    ],
    bouw: {
      kop: "Hoeves in de Velpevallei, op dikke leem",
      alineas: [
        "Een hoeve op **dikke leem** combineert twee trage eigenschappen: **massieve muren die hun vocht traag afgeven**, en een ondergrond die water zeer traag doorlaat. Tegen het muuroppervlak vormt zich een verzadigd luchtlaagje dat verdere droging afremt, en dat haalt een ventilator weg. Reken op **anderhalf tot twee keer de droogtijd** van een moderne wand.",
        "Laag in de **Velpevallei** staat het grondwater ondiep, en blijft een kelder of een vloer op volle grond zelden volledig droog. Dat is geen bouwvocht: **drogen haalt het uit de ruimte, de bron blijft**. De technieker meet dat bij de levering en zegt het eerlijk.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium als standaard bij renovatie: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "**Onmisbaar bij massieve muren**: hij blaast de verzadigde luchtlaag tegen het muuroppervlak weg, en pas dan droogt de muur verder." },
      { key: "ttk650", waarom: "Voor een hoeve of een schuur met grote, hoge volumes: 110 liter per dag en bereik tot ongeveer 600 m³." },
      { key: "revolution", waarom: "**Voor de kelder laag in de vallei**: koud en vochtig tegelijk, en daar werkt een adsorptiedroger door." },
    ],
    levering: {
      kop: "Leveren in Boutersem: binnen 24 uur, met het volume vooraf",
      alinea:
        "Een vijftigtal minuten rijden. Bij een hoeve of een schuur vragen we **vooraf het volume in kubieke meter** en of de ruimte dicht te krijgen is, want een droger tegen een open poort werkt tegen de buitenlucht in. Staat uw hoeve aan een onverharde oprit, zeg dat dan ook.",
    },
    afhalen: {
      kop: "Afhalen loont hier niet",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijftig minuten, dus bijna twee uur heen en terug**. **Vanuit Boutersem leveren we gewoon**; bij massief werk hangt het resultaat af van waar de toestellen en de ventilatoren staan.",
    },
    buren: ["bierbeek", "lubbeek", "tienen", "hoegaarden", "glabbeek"],
    faq: [
      {
        q: "Waarom droogt een hoeve zo veel trager dan een nieuwbouw?",
        a: "Omdat het vocht uit de kern van een massieve muur naar buiten moet, door veertig centimeter of meer, en omdat zich tegen het oppervlak een verzadigd luchtlaagje vormt dat verdere droging afremt. Reken op anderhalf tot twee keer de droogtijd van een moderne wand.",
      },
      {
        q: "Mijn kelder blijft vochtig, ook na het drogen. Hoe kan dat?",
        a: "Laag in de Velpevallei is het grondwater ondiep, en leem laat water zeer traag door. Drogen houdt de ruimte bruikbaar zolang het toestel draait, maar de bron blijft. De technieker meet dat bij de levering en zegt het eerlijk.",
      },
      {
        q: "Kunnen jullie een schuur drogen die woonruimte wordt?",
        a: "Ja. Geef vooraf het volume in kubieke meter door, de vloeropbouw en of de poorten en verluchting kunnen sluiten. Is de ruimte niet te verwarmen, dan zetten we een adsorptiedroger in.",
      },
      {
        q: "Betaal ik meer omdat ik ver woon?",
        a: "Nee. De prijs van het droogpakket is dezelfde in heel ons werkgebied. De rit telt mee in onze planning, niet in uw factuur.",
      },
      {
        q: "Hoe snel staan jullie in Boutersem?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijftig minuten.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "lubbeek",
    title: "Bouwdroger huren in Lubbeek | Vernast",
    description:
      "Bouwdroger huren in Lubbeek, Pellenberg en Linden: woningen op de zandleemheuvels ten oosten van Leuven. Binnen 24 uur geleverd, geplaatst en opgehaald.",
    h1: "Bouwdroger huren in Lubbeek",
    kicker: "Dijleland · zandleemheuvels bij Leuven",
    rit: { afstand: "circa 55 km", tijd: "ongeveer vijftig minuten" },
    intro: [
      "Lubbeek ligt **op de zandleemheuvels tussen Leuven en het Hageland**, met Pellenberg, Linden en Binkom erbij. Groen, golvend en overwegend **open bebouwing op ruime percelen**.",
      "Wat we hier drogen is vooral **grondige renovatie van ruime woningen**, en in de oudere kernen hoeves met massieve muren.",
    ],
    bouw: {
      kop: "Ruime woningen op een helling, met een volledige kelder",
      alineas: [
        "Een ruime woning op een **helling** heeft aan één zijde grond tegen de kelderwand. Op zandleem perst hangwater daar bij een natte periode tegenaan, en dat komt terug: **een droger haalt vocht uit de lucht, niet uit de grond**. De technieker meet dat bij de levering en zegt eerlijk dat drainage aan de buitenzijde de oplossing is.",
        "Bij de renovatie zelf droogt alles tegelijk over meerdere verdiepingen. Droge lucht blijft hangen waar het toestel staat, dus zetten we **per verdieping een droogzone** op met de deuren dicht. Dat is sneller én doorgaans goedkoper, omdat de totale huurperiode korter is.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium per verdieping: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "revolution", waarom: "**Voor de kelder in de helling**: koud en vochtig tegelijk, en daar werkt een adsorptiedroger door waar een condensdroger stilvalt." },
      { key: "ttv4500", waarom: "Bij vers pleisterwerk en verse chape verdubbelt luchtbeweging vaak de snelheid, en bij massieve muren is hij een voorwaarde." },
      { key: "ttk650", waarom: "Voor een groot gelijkvloers of een hoeve: 110 liter per dag, bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Lubbeek: binnen 24 uur, in de Dijlelandronde",
      alinea:
        "Een vijftigtal minuten rijden. U krijgt een tijdslot en een sms een halfuur vooraf. **Staat uw woning aan een steile oprit, zeg dat dan bij de reservatie**, dan weet de technieker dat hij verder moet uitladen.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijftig minuten**. Voor één los toestel kan dat lonen. Voor een volledige renovatie is leveren beter: het resultaat hangt af van hoe de droogzones opgezet staan.",
    },
    buren: ["leuven", "holsbeek", "bierbeek", "boutersem", "tielt-winge"],
    faq: [
      {
        q: "Mijn kelder in de helling blijft vochtig. Wat nu?",
        a: "Dan perst er waarschijnlijk hangwater van de helling tegen die wand. Een droger houdt de ruimte bruikbaar, maar hij stopt de aanvoer niet. De duurzame oplossing is drainage aan de buitenzijde. De technieker meet dat bij de levering.",
      },
      {
        q: "Kan ik een hele woning met één toestel drogen?",
        a: "Beter niet. Droge lucht blijft hangen waar het toestel staat, en met open deuren droogt u vooral de gang. Per verdieping of per gesloten zone een toestel werkt sneller en komt doorgaans goedkoper uit, omdat de huurperiode korter is.",
      },
      {
        q: "Hoe lang blijft een pakket staan?",
        a: "Standaard twee weken voor een chape en één tot twee weken voor pleisterwerk, maar we meten bij de ophaling. Is het nog niet droog, dan verlengt u per week bij; is het eerder droog, dan halen we eerder op.",
      },
      {
        q: "Betaal ik een kilometerkost?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket.",
      },
      {
        q: "Hoe snel staan jullie in Lubbeek?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijftig minuten.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "boortmeerbeek",
    title: "Bouwdroger huren in Boortmeerbeek | Vernast",
    description:
      "Bouwdroger huren in Boortmeerbeek, Hever en Schiplaken: laaggelegen woningen bij het kanaal en de Dijle. Op een halfuur rijden, dus vaak dezelfde dag geleverd.",
    h1: "Bouwdroger huren in Boortmeerbeek",
    kicker: "Dijleland · laag bij het kanaal",
    rit: { afstand: "circa 37 km", tijd: "ongeveer vijfendertig minuten" },
    intro: [
      "Boortmeerbeek ligt **laag, tussen het kanaal Leuven-Dijle en de Dijle zelf**, met Hever en Schiplaken erbij. In dat vlakke, natte land zit het grondwater ondiep.",
      "Met **vijfendertig minuten** is dit een van de kortere ritten van Vlaams-Brabant, en dat merkt u aan de planning: bij een dringende werf lukt dezelfde dag vaak nog.",
    ],
    bouw: {
      kop: "Laaggelegen woningen, met kelders onder het grondwaterpeil",
      alineas: [
        "Een kelder die **lager ligt dan het grondwater** staat permanent onder druk. Bij elke natte periode drukt water door de kelderwand of langs de vloerplaat naar binnen, en dat komt terug: **drogen haalt het uit de lucht, maar niet uit de grond**. We zeggen dat liever vooraf dan dat u na drie weken huur hetzelfde probleem hebt.",
        "Gaat het om **bouwvocht uit renovatie of nieuwbouw**, dan verdwijnt het definitief. Een verse chape geeft vijf tot tien liter water per dag per honderd vierkante meter af, en met droger en ventilator samen is een gelijkvloers **in een tiental dagen beloopbaar en in twee à drie weken klaar voor de vloerder**.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium als standaard: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "revolution", waarom: "**Voor de kelder onder het grondwaterpeil**: koud en vochtig tegelijk, en daar werkt een adsorptiedroger door waar een condensdroger stilvalt." },
      { key: "ttv4500", waarom: "Vocht kruipt onder vloeren en achter plinten. Zonder luchtbeweging droogt dat niet, met deze ventilator wel." },
      { key: "ttk650", waarom: "Na hoogwater of bij een groot gelijkvloers: 110 liter per dag, bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Boortmeerbeek: binnen 24 uur, vaak sneller",
      alinea:
        "Een vijfendertigtal minuten rijden, een van onze kortere ritten in deze provincie. Bij een dringende werf lukt **dezelfde dag vaak nog**. Gaat het om een kelder, dan meet de technieker eerst of het om bouwvocht of om grondwater gaat.",
    },
    afhalen: {
      kop: "Afhalen loont hier wél",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfendertig minuten**. Voor één of twee losse toestellen is dat de moeite, en u krijgt korting op de huurprijs. Vervoer de droger **rechtop**; heeft hij plat gelegen, laat hem dan 24 uur staan voor u hem inschakelt.",
    },
    buren: ["haacht", "zemst", "keerbergen", "kampenhout", "mechelen"],
    faq: [
      {
        q: "Mijn kelder staat elke winter onder water. Helpt een bouwdroger?",
        a: "Zolang hij draait, ja: de ruimte wordt bruikbaar en de schade blijft beperkt. Maar hij haalt het water niet uit de grond. Ligt uw kelder lager dan het grondwater, dan is drogen een pleister. Onze technieker meet dat bij de levering en zegt het eerlijk.",
      },
      {
        q: "Hoe snel staan jullie hier?",
        a: "Binnen 24 uur na uw boeking, en vaak sneller: de rit duurt maar vijfendertig minuten. Boekt u in de voormiddag, dan lukt dezelfde dag vaak nog.",
      },
      {
        q: "Hoe lang moet een chape drogen met een droger?",
        a: "Reken op een week per centimeter dikte zonder hulp, en met droger en ventilator ongeveer de helft. Een chape van vijf centimeter is dan in twee à drie weken klaar voor de vloerder.",
      },
      {
        q: "Is afhalen de moeite?",
        a: "Ja, voor één of twee losse toestellen: u bent in een goed uur heen en terug en u krijgt korting op de huurprijs. Voor een volledig pakket is leveren beter, want dan zit de rit al in de prijs.",
      },
      {
        q: "Betaal ik een kilometerkost?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "keerbergen",
    title: "Bouwdroger huren in Keerbergen | Vernast",
    description:
      "Bouwdroger huren in Keerbergen: villa's in het bos op zandgrond, op vijfendertig minuten van ons magazijn. Per droogzone geplaatst, met vochtmeting inbegrepen.",
    h1: "Bouwdroger huren in Keerbergen",
    kicker: "Dijleland · villa's in het bos, op zand",
    rit: { afstand: "circa 35 km", tijd: "ongeveer vijfendertig minuten" },
    intro: [
      "Keerbergen is **een villagemeente in het bos**: ruime, vrijstaande woningen op grote percelen tussen de pijnbossen, op **zandgrond**.",
      "Dat zand scheelt: het draineert goed, dus **kelders zijn hier minder vaak het probleem** dan in de Dijlevallei een paar kilometer zuidelijker. Wat hier telt is **volume** en, onder de bomen, **schaduw**.",
    ],
    bouw: {
      kop: "Grote volumes op zand, en percelen in de schaduw",
      alineas: [
        "Een vrijstaande woning heeft **meer capaciteit nodig dan haar vierkante meters suggereren**, want het gaat om volume. Een open leefruimte met een plafond van drie meter telt zwaarder dan dezelfde oppervlakte onder een gewoon plafond, en daarom rekent onze Calculator op **kubieke meter**.",
        "Onder **hoge bomen blijft de buitenlucht vochtiger** en de buitenmuur langer nat. Ventileren met open ramen helpt hier dus minder dan elders: u haalt vochtige lucht binnen, en in de winter koelt u de ruimte af tot onder de 15 °C waar een condensdroger stilvalt. **Een droger werkt onafhankelijk van het weer buiten**, en dat is precies het punt.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Voor de grote open leefruimte**: 110 liter per dag en een bereik tot ongeveer 600 m³, één toestel per groot gelijkvloers." },
      { key: "ttk350", waarom: "De Medium per verdieping of per vleugel: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "Bij een chape verdubbelt luchtbeweging vaak de snelheid, en in een ruim volume voorkomt ze dat één hoek achterblijft." },
      { key: "teddh30", waarom: "Voor een onverwarmd bijgebouw of een winterwerf: onder 15 °C verliest een condensdroger het grootste deel van zijn rendement. Vraagt 400 V." },
    ],
    levering: {
      kop: "Leveren in Keerbergen: binnen 24 uur, per droogzone geplaatst",
      alinea:
        "Een vijfendertigtal minuten rijden, een van onze kortere ritten in deze provincie. De technieker **plaatst de toestellen per droogzone**, legt de afvoer naar een putje en stelt de hygrostaat in. Staat uw woning aan een lange, onverharde oprit, zeg dat dan bij de reservatie.",
    },
    afhalen: {
      kop: "Afhalen loont hier wél",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfendertig minuten**. Voor één of twee losse toestellen is dat de moeite. Voor een volledige woning is leveren beter: het resultaat hangt af van waar de toestellen staan.",
    },
    buren: ["tremelo", "boortmeerbeek", "haacht", "putte", "begijnendijk"],
    faq: [
      {
        q: "Hoeveel toestellen heb ik nodig voor een vrijstaande woning?",
        a: "Voor een gelijkvloers van 120 tot 150 m² rekenen we doorgaans op twee drogers met een ventilator per droogzone, en vaak een derde voor de verdieping of het bijgebouw. De Calculator rekent op volume in kubieke meter.",
      },
      {
        q: "Kan ik niet gewoon ventileren met open ramen?",
        a: "Op een bosrijk perceel werkt dat slecht. Onder hoge bomen blijft de buitenlucht vochtig, dus haalt u met open ramen vochtige lucht binnen. In de winter koelt u er bovendien de ruimte mee af, en onder 15 °C droogt er vrijwel niets.",
      },
      {
        q: "Waarom vraagt de Calculator naar volume en niet naar oppervlakte?",
        a: "Omdat een droger lucht droogt. Een open leefruimte met een plafond van drie meter vijftig bevat anderhalf keer zoveel lucht als dezelfde oppervlakte onder een gewoon plafond, en heeft dus meer capaciteit nodig.",
      },
      {
        q: "Is een kelder hier een probleem?",
        a: "Minder dan in de Dijlevallei. Keerbergen staat op zand, en zand draineert: het grondwater zakt weg in plaats van tegen de kelderwand te staan. Blijft een kelder hier toch vochtig, dan gaat het meestal om een gebrek aan ventilatie, en dat lost een droger wel op.",
      },
      {
        q: "Hoe snel staan jullie in Keerbergen?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfendertig minuten.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "begijnendijk",
    title: "Bouwdroger huren in Begijnendijk | Vernast",
    description:
      "Bouwdroger huren in Begijnendijk en Betekom: woningen op zandgrond aan de rand van de Demervallei. Op een halfuur rijden, dus vaak dezelfde dag geleverd.",
    h1: "Bouwdroger huren in Begijnendijk",
    kicker: "Dijleland · zand aan de Demervallei",
    rit: { afstand: "circa 35 km", tijd: "ongeveer vijfendertig minuten" },
    intro: [
      "Begijnendijk en Betekom liggen **op zandgrond aan de rand van de Demervallei**, op de grens met de provincie Antwerpen. Dezelfde bodem als onze eigen Kempen, en op **vijfendertig minuten** van het magazijn.",
      "De bebouwing is overwegend **halfopen en open**, met verkavelingen rond de twee kernen. Wat we hier drogen is vooral chape en pleisterwerk.",
    ],
    bouw: {
      kop: "Verkavelingen op zand, en de vallei ernaast",
      alineas: [
        "Op **zand draineert de ondergrond goed**, dus is een kelder hier minder vaak het probleem dan in de vallei zelf. Wat blijft is het bouwvocht: een verse chape geeft **vijf tot tien liter water per dag per honderd vierkante meter** af, en met droger en ventilator samen is een gelijkvloers **in twee à drie weken klaar voor de vloerder**.",
        "Vlak aan de **Demervallei** verandert dat: daar staat het grondwater ondiep en blijft een kelder of een kruipruimte zelden volledig droog. Twee straten verschil kan hier twee verschillende antwoorden geven, en daarom **meet de technieker bij de levering** in plaats van te veronderstellen.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De standaard voor een nieuwbouwwoning: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "Bij een chape verdubbelt luchtbeweging vaak de snelheid: hij blaast de verzadigde laag vlak boven de vloer weg." },
      { key: "revolution", waarom: "Voor een kelder of kruipruimte vlak aan de vallei: de adsorptiedroger blijft ook bij lage temperatuur vocht opnemen." },
      { key: "teddh30", waarom: "Voor de onverwarmde ruwbouw in de winter: onder 15 °C zakt het rendement van elke condensdroger. Vraagt 400 V krachtstroom." },
    ],
    levering: {
      kop: "Leveren in Begijnendijk: binnen 24 uur, vaak sneller",
      alinea:
        "Een vijfendertigtal minuten rijden. Bij een dringende werf lukt **dezelfde dag vaak nog**. U krijgt een tijdslot en een sms een halfuur vooraf, en op een winterwerf controleert de technieker of de werfkast 400 V levert voor de kachel.",
    },
    afhalen: {
      kop: "Afhalen loont hier wél",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfendertig minuten**. Voor één of twee losse toestellen is dat de moeite, en u krijgt korting op de huurprijs. Vervoer de droger **rechtop**; heeft hij plat gelegen, laat hem dan 24 uur staan voor u hem inschakelt.",
    },
    buren: ["tremelo", "aarschot", "heist-op-den-berg", "keerbergen", "rotselaar"],
    faq: [
      {
        q: "Is een kelder hier een probleem?",
        a: "Dat hangt van uw straat af. Op de zandrug draineert de bodem goed en is een kelder zelden het probleem; vlak aan de Demervallei staat het grondwater ondiep en blijft hij zelden volledig droog. Onze technieker meet dat bij de levering in plaats van het te veronderstellen.",
      },
      {
        q: "Hoe lang moet een chape drogen met een droger?",
        a: "Reken op een week per centimeter dikte zonder hulp, en met droger en ventilator ongeveer de helft. Een chape van vijf centimeter is dan in twee à drie weken klaar voor de vloerder.",
      },
      {
        q: "Wat als het vriest tijdens de droging?",
        a: "Dan verwarmen we mee. Onder 15 °C verliest een condensdroger het grootste deel van zijn rendement, dus in een onverwarmde ruwbouw zetten we er een elektrische kachel bij. Die vraagt 400 V.",
      },
      {
        q: "Is afhalen de moeite?",
        a: "Ja, voor één of twee losse toestellen: u bent in een goed uur heen en terug en u krijgt korting op de huurprijs.",
      },
      {
        q: "Hoe snel staan jullie in Begijnendijk?",
        a: "Binnen 24 uur na uw boeking, en vaak sneller. De rit duurt ongeveer vijfendertig minuten.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "tremelo",
    title: "Bouwdroger huren in Tremelo | Vernast",
    description:
      "Bouwdroger huren in Tremelo en Baal: woningen op zandgrond in de Laakvallei. Geleverd, geplaatst en opgehaald.",
    h1: "Bouwdroger huren in Tremelo",
    kicker: "Dijleland · zand in de Laakvallei",
    rit: { afstand: "circa 38 km", tijd: "ongeveer vijfendertig minuten" },
    intro: [
      "Tremelo en Baal liggen **op zandgrond in de vallei van de Laak**, tussen Keerbergen en Aarschot. Groen, ruim opgezet, met veel **open en halfopen bebouwing** en bijgebouwen op de percelen.",
      "Op **vijfendertig minuten** van ons magazijn is dit een van de kortere ritten van Vlaams-Brabant, en zand onder de voeten betekent dat de kelder hier zelden de klacht is.",
    ],
    bouw: {
      kop: "Ruime percelen met bijgebouwen, op zand",
      alineas: [
        "Veel werven hier bevatten **een bijgebouw, een veranda of een garage** die mee wordt afgewerkt. Die ruimtes zijn tijdens de werken zelden verwarmd, en **onder 15 °C verliest een condensdroger het grootste deel van zijn rendement**. Dan gaat er een elektrische kachel mee, of meteen een adsorptiedroger die ook koud doorwerkt.",
        "Op **zand draineert de ondergrond goed**, dus is een kelder hier minder vaak het probleem dan in de Dijle- of Demervallei. Blijft een kelder toch vochtig, dan gaat het meestal om **een gebrek aan ventilatie**, en dat lost een droger wel op.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De standaard voor een woning: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "teddh30", waarom: "**Voor het onverwarmde bijgebouw in de winter**: onder 15 °C zakt het rendement van elke condensdroger. Vraagt 400 V krachtstroom." },
      { key: "ttv4500", waarom: "Bij een chape verdubbelt luchtbeweging vaak de snelheid: hij blaast de verzadigde laag vlak boven de vloer weg." },
      { key: "ttk650", waarom: "Voor een groot gelijkvloers of een ruim bijgebouw: 110 liter per dag, bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Tremelo: binnen 24 uur, vaak sneller",
      alinea:
        "Een vijfendertigtal minuten rijden. U krijgt een tijdslot en een sms een halfuur vooraf. **Geef bij de reservatie door welke ruimtes mee moeten drogen**, ook een veranda of een garage, dan brengt de technieker genoeg capaciteit mee.",
    },
    afhalen: {
      kop: "Afhalen loont hier wél",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfendertig minuten**. Voor één of twee losse toestellen is dat de moeite, en u krijgt korting op de huurprijs. Houd er rekening mee dat een droger 25 tot 40 kg weegt.",
    },
    buren: ["keerbergen", "begijnendijk", "haacht", "rotselaar", "putte"],
    faq: [
      {
        q: "Kunnen jullie een veranda of een garage mee drogen?",
        a: "Ja, als de ruimte dicht te krijgen is. Een droger met de deur naar buiten open droogt de buitenlucht, en die is onuitputtelijk. Geef bij de reservatie door welke ruimtes mee moeten, dan brengt de technieker genoeg capaciteit.",
      },
      {
        q: "Wat als het vriest tijdens de droging?",
        a: "Dan verwarmen we mee. Onder 15 °C verliest een condensdroger het grootste deel van zijn rendement, dus in een onverwarmd bijgebouw zetten we er een elektrische kachel bij. Die vraagt 400 V krachtstroom.",
      },
      {
        q: "Mijn kelder blijft vochtig. Wat nu?",
        a: "Op zand draineert de bodem goed, dus is grondwater hier zelden de oorzaak. Meestal gaat het om te weinig ventilatie: vochtige lucht die nergens heen kan. Dat lost een droger wel op, en de technieker meet het bij de levering.",
      },
      {
        q: "Is afhalen de moeite?",
        a: "Ja, voor één of twee losse toestellen: u bent in een goed uur heen en terug en u krijgt korting op de huurprijs.",
      },
      {
        q: "Hoe snel staan jullie in Tremelo?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfendertig minuten.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "haacht",
    title: "Bouwdroger huren in Haacht | Vernast",
    description:
      "Bouwdroger huren in Haacht, Wespelaar en Tildonk: woningen tussen de Dijle en het kanaal. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Haacht",
    kicker: "Dijleland · tussen Dijle en kanaal",
    rit: { afstand: "circa 40 km", tijd: "ongeveer veertig minuten" },
    intro: [
      "Haacht ligt **tussen de Dijle en het kanaal Leuven-Dijle**, met Wespelaar, Tildonk en Wakkerzeel erbij. Vlak, laaggelegen land waar het grondwater nooit ver weg is.",
      "De bebouwing is gemengd: **dorpskernen met oudere woningen**, verkavelingen eromheen, en een aantal **bedrijfsgebouwen** aan de kanaalkant.",
    ],
    bouw: {
      kop: "Laaggelegen dorpskernen, en bedrijfsgebouwen aan het water",
      alineas: [
        "In de laaggelegen kernen staat het **grondwater ondiep**, en blijft een kelder of een vloer op volle grond zelden volledig droog. Dat is geen bouwvocht: **drogen haalt het uit de ruimte, de bron blijft**. De technieker meet dat bij de levering en zegt eerlijk wat drogen hier oplost.",
        "Bij een **bedrijfsgebouw** aan de kanaalkant hangt er een datum aan: de inrichter staat gepland, en een gietvloer op een te natte chape gaat loskomen. Daar drogen we tot **een gemeten waarde** en zetten we meerdere toestellen verdeeld over de ruimte in, met luchtbeweging over de volle lengte.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium voor een woning: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "revolution", waarom: "**Voor de kelder in de laaggelegen kern**: koud en vochtig tegelijk, en daar werkt een adsorptiedroger door waar een condensdroger stilvalt." },
      { key: "ttk650", waarom: "**Voor het bedrijfsgebouw**: 110 liter per dag en een bereik tot ongeveer 600 m³." },
      { key: "ttv4500", waarom: "Bij een chape verdubbelt luchtbeweging vaak de snelheid; op een grote vloer voorkomt ze dat één hoek achterblijft." },
    ],
    levering: {
      kop: "Leveren in Haacht: binnen 24 uur, in de Dijlelandronde",
      alinea:
        "Een veertigtal minuten rijden. U krijgt een tijdslot en een sms een halfuur vooraf. Op een bedrijfsruimte vragen we **vooraf het volume en de beschikbare stroom**, want een kachel vraagt 400 V en dat moet de kast kunnen leveren.",
    },
    afhalen: {
      kop: "Afhalen loont hier wél",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer veertig minuten**. Voor één of twee losse toestellen is dat de moeite. Voor een bedrijfsgebouw niet: daar gaan meerdere toestellen in één rit naartoe, en die levering zit al in de prijs.",
    },
    buren: ["boortmeerbeek", "keerbergen", "tremelo", "rotselaar", "kampenhout", "herent"],
    faq: [
      {
        q: "Mijn kelder blijft vochtig na het drogen. Hoe kan dat?",
        a: "Omdat een droger vocht uit de lucht haalt, niet uit de grond. In de laaggelegen kernen hier is het grondwater ondiep. Drogen houdt de ruimte bruikbaar zolang het toestel draait, maar de bron blijft. De technieker meet dat bij de levering.",
      },
      {
        q: "Hoe snel kan een bedrijfsvloer droog zijn?",
        a: "Dat hangt af van de dikte en van hoeveel capaciteit er staat. Een chape van vijf centimeter doet zonder hulp vijf à zeven weken; met voldoende drogers en luchtbeweging halen we dat naar twee à drie weken. Geef ons de datum van uw inrichter, dan rekenen we terug.",
      },
      {
        q: "Hebben jullie 400 V nodig?",
        a: "Alleen voor de elektrische kachel, die we in de winter bij een onverwarmde ruimte inzetten. De drogers en de ventilatoren draaien op 230 V. De technieker controleert de kast bij de levering.",
      },
      {
        q: "Betaal ik een kilometerkost?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket.",
      },
      {
        q: "Hoe snel staan jullie in Haacht?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer veertig minuten.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "rotselaar",
    title: "Bouwdroger huren in Rotselaar | Vernast",
    description:
      "Bouwdroger huren in Rotselaar, Wezemaal en Werchter: woningen waar Dijle en Demer samenkomen. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Rotselaar",
    kicker: "Dijleland · waar Dijle en Demer samenkomen",
    rit: { afstand: "circa 45 km", tijd: "ongeveer veertig minuten" },
    intro: [
      "In Rotselaar **komen de Dijle en de Demer samen**, en dat merkt u aan de kelders in Werchter en in de laagste straten: bij een natte periode staat het grondwater hoog, en bij extreme neerslag komt het water tot in de kelders.",
      "Hogerop, richting Wezemaal en de Wijngaardberg, is het **zandleem op een helling**. Twee landschappen in één gemeente, met twee verschillende vochtproblemen.",
    ],
    bouw: {
      kop: "Laag bij de samenvloeiing, hoger op de heuvelflank",
      alineas: [
        "**Laag bij de samenvloeiing** is snelheid alles als er water binnen heeft gestaan. Hoe langer water in een vloeropbouw en achter een plint staat, hoe groter de kans op schimmel en op isolatie die haar waarde verliest. We zetten dan **meer capaciteit in dan strikt nodig** en altijd luchtbeweging erbij, want water kruipt onder vloeren waar een droger alleen niet aan komt.",
        "**Op de flank van de Wijngaardberg** perst hangwater uit de zandleem tegen de bergzijde van een woning, na elke regenperiode op dezelfde plaats. Dat is geen bouwvocht, en drogen lost het niet op. **De technieker meet het verschil** bij de levering en zegt eerlijk dat drainage de oplossing is.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Bij waterschade**: 110 liter per dag, bereik tot ongeveer 600 m³. Hoe sneller het water eruit is, hoe minder er stuk gaat." },
      { key: "ttv4500", waarom: "Water kruipt onder vloeren en achter plinten. Zonder luchtbeweging droogt dat niet, met deze ventilator wel." },
      { key: "ttk350", waarom: "De Medium voor een renovatie of een chape: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "revolution", waarom: "**Voor de kelder die niet te verwarmen is**: de adsorptiedroger blijft ook bij lage temperatuur vocht opnemen." },
    ],
    levering: {
      kop: "Leveren in Rotselaar: bij waterschade zo snel als het kan",
      alinea:
        "Een veertigtal minuten rijden. **Bij waterschade bellen we u terug in plaats van u een formulier te laten afwachten**, want een dag vroeger drogen is hier het verschil. Bij een gewone werf krijgt u een tijdslot en een sms een halfuur vooraf.",
    },
    afhalen: {
      kop: "Afhalen kan, maar niet bij waterschade",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer veertig minuten**. Bij waterschade is dat precies het uur dat u niet hebt: dan leveren wij. Voor één los toestel bij een gewone renovatie kan afhalen wel lonen.",
    },
    buren: ["haacht", "tremelo", "begijnendijk", "aarschot", "holsbeek"],
    faq: [
      {
        q: "Mijn kelder is ondergelopen. Wat doe ik eerst?",
        a: "Eerst het staande water weg met een dompelpomp, dan zo snel mogelijk drogen. Haal wat nat is uit de ruimte, zet plinten los zodat de holle ruimte erachter kan drogen, en bel ons. Hoe langer water in de vloeropbouw staat, hoe groter de kans op schimmel.",
      },
      {
        q: "Dekt mijn verzekering de huur van een bouwdroger?",
        a: "Bij waterschade meestal wel, als onderdeel van de schadebeperking. Wij geven u een factuur met de vochtmetingen erbij, en dat is precies wat een expert vraagt. Vraag het na bij uw verzekeraar voor u boekt.",
      },
      {
        q: "Ik woon op de flank en één muur blijft vochtig. Wat is dat?",
        a: "Waarschijnlijk hangwater: een waterlaag die zijwaarts door de bodem zakt en tegen de bergzijde van uw woning komt te staan. Het komt na elke regenperiode terug. Drogen houdt de ruimte bruikbaar, drainage aan de buitenzijde lost het op.",
      },
      {
        q: "Hoe lang duurt het drogen na hoogwater?",
        a: "Voor een kelder of een gelijkvloers reken op twee tot vier weken, afhankelijk van hoe lang het water er stond en van de vloeropbouw. Een zwevende vloer op isolatie doet er langer over.",
      },
      {
        q: "Hoe snel staan jullie in Rotselaar?",
        a: "Binnen 24 uur na uw boeking, en bij waterschade proberen we dezelfde dag. De rit duurt ongeveer veertig minuten.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "holsbeek",
    title: "Bouwdroger huren in Holsbeek | Vernast",
    description:
      "Bouwdroger huren in Holsbeek, Nieuwrode en Kortrijk-Dutsel: woningen op de ijzerzandsteenheuvels van het Hageland.",
    h1: "Bouwdroger huren in Holsbeek",
    kicker: "Dijleland · heuvels van ijzerzandsteen",
    rit: { afstand: "circa 50 km", tijd: "ongeveer vijfenveertig minuten" },
    intro: [
      "Holsbeek ligt **op de ijzerzandsteenheuvels waar het Hageland begint**, met Nieuwrode, Sint-Pieters-Rode en Kortrijk-Dutsel. De oude gebouwen hier zijn deels in **ijzerzandsteen** opgetrokken, de bruine steen van de streek.",
      "Die steen is **poreuzer dan baksteen** en neemt water gemakkelijk op. Een muur in ijzerzandsteen die nat is geweest, geeft zijn vocht daarom traag en ongelijkmatig af.",
    ],
    bouw: {
      kop: "Muren in ijzerzandsteen, op een helling",
      alineas: [
        "**Ijzerzandsteen is poreus.** Een muur die nat is geweest, houdt dat vocht diep in de steen vast en geeft het traag af, en vlak tegen het oppervlak vormt zich een verzadigd luchtlaagje dat verdere droging afremt. **Een ventilator haalt dat laagje weg**, en pas dan droogt de muur verder. Reken bij zulk werk op **anderhalf tot twee keer de droogtijd** van een moderne wand.",
        "Staat het gebouw in de **helling**, dan heeft het aan de bergzijde grond tegen de muur, en perst hangwater uit de zandleem daar bij elke regenperiode tegenaan. Dat is geen bouwvocht: een droger houdt de ruimte bruikbaar, maar het water blijft komen. **De technieker meet het verschil** bij de levering.",
      ],
    },
    toestellen: [
      { key: "ttv4500", waarom: "**Bij ijzerzandsteen geen extra maar een voorwaarde**: hij blaast de verzadigde luchtlaag tegen het muuroppervlak weg." },
      { key: "ttk350", waarom: "De Medium als standaard bij renovatie: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "revolution", waarom: "**Voor de kelder in de helling**: koud en vochtig tegelijk, en daar werkt een adsorptiedroger door waar een condensdroger stilvalt." },
      { key: "ttk650", waarom: "Voor een hoeve of een groot gelijkvloers: 110 liter per dag, bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Holsbeek: binnen 24 uur, in de Dijlelandronde",
      alinea:
        "Een vijfenveertigtal minuten rijden. U krijgt een tijdslot en een sms een halfuur vooraf. **Staat uw woning aan een steile of onverharde oprit, zeg dat dan bij de reservatie**, dan weet de technieker dat hij verder moet uitladen.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfenveertig minuten**. Voor een volledig pakket is leveren beter: bij poreus massief werk hangt het resultaat af van waar de toestellen en de ventilatoren staan.",
    },
    buren: ["leuven", "lubbeek", "rotselaar", "herent", "tielt-winge", "aarschot"],
    faq: [
      {
        q: "Waarom droogt een muur in ijzerzandsteen zo traag?",
        a: "Omdat die steen poreuzer is dan baksteen en water diep opneemt. Het vocht moet dan uit de kern naar buiten, en tegen het oppervlak vormt zich een verzadigd luchtlaagje dat verdere droging afremt. Met een ventilator erbij haalt u dat weg. Reken op anderhalf tot twee keer de droogtijd van een moderne wand.",
      },
      {
        q: "Mijn muur aan de bergzijde blijft vochtig. Wat is dat?",
        a: "Waarschijnlijk hangwater: een waterlaag die door de zandleem zijwaarts zakt en tegen die muur komt te staan. Het komt na elke regenperiode terug. Drogen houdt de ruimte bruikbaar, drainage aan de buitenzijde lost het op.",
      },
      {
        q: "Kan de bestelwagen tot bij mijn huis?",
        a: "In de meeste straten wel. Is uw oprit steil of onverhard, zeg dat dan bij de reservatie, dan weet de technieker dat hij verder moet uitladen en brengt hij het juiste materiaal mee.",
      },
      {
        q: "Betaal ik een kilometerkost?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket.",
      },
      {
        q: "Hoe snel staan jullie in Holsbeek?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfenveertig minuten.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "aarschot",
    title: "Bouwdroger huren in Aarschot | Vernast",
    description:
      "Bouwdroger huren in Aarschot, Rillaar en Langdorp: stad aan de Demer, met kelders die bij hoog water terugkomen.",
    h1: "Bouwdroger huren in Aarschot",
    kicker: "Hageland · stad aan de Demer",
    rit: { afstand: "circa 45 km", tijd: "ongeveer veertig minuten" },
    intro: [
      "Aarschot ligt **aan de Demer**, met Rillaar, Langdorp en Gelrode errond. De rivier loopt door de stad, en in de laagste straten komt het water bij extreme neerslag tot in de kelders.",
      "Daarnaast is dit gewoon een stad met **veel renovatie**: rijhuizen in de kern, en open en halfopen nieuwbouw in de verkavelingen rond de dorpen.",
    ],
    bouw: {
      kop: "Kelders bij de Demer, nieuwbouw op de flanken",
      alineas: [
        "Na hoogwater is **snelheid alles**. Hoe langer water in een vloeropbouw en achter een plint staat, hoe groter de kans op schimmel en op isolatie die haar waarde verliest. We zetten dan **meer capaciteit in dan strikt nodig** en altijd luchtbeweging erbij, want water kruipt onder vloeren en achter plinten waar een droger alleen niet aan komt.",
        "Op de nieuwbouwwerven op de heuvelflanken is **de winter de beperkende factor**. Een ruwbouw zonder ramen staat daar onbeschut, en **onder 15 °C verliest een condensdroger het grootste deel van zijn rendement**. Dan gaat er een elektrische kachel mee, die **400 V** vraagt; de technieker controleert de werfkast bij de levering.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Bij waterschade**: 110 liter per dag, bereik tot ongeveer 600 m³. Hoe sneller het water eruit is, hoe minder er stuk gaat." },
      { key: "ttk350", waarom: "De Medium voor een chape of een renovatie: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "Water kruipt onder vloeren en achter plinten; bij een chape verdubbelt luchtbeweging vaak de snelheid." },
      { key: "teddh30", waarom: "**Voor de onbeschutte winterwerf**: onder 15 °C zakt het rendement van elke condensdroger. Vraagt 400 V krachtstroom." },
    ],
    levering: {
      kop: "Leveren in Aarschot: binnen 24 uur, bij waterschade sneller",
      alinea:
        "Een veertigtal minuten rijden. **Bij waterschade bellen we u terug in plaats van u een formulier te laten afwachten.** Op een winterwerf controleert de technieker eerst of de werfkast 400 V levert voor de kachel, want zonder bijverwarming haalt een condensdroger daar te weinig rendement.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer veertig minuten**. Voor één los toestel kan dat lonen. Bij waterschade niet: dan is dat precies het uur dat u niet hebt, en leveren wij.",
    },
    buren: ["rotselaar", "begijnendijk", "scherpenheuvel-zichem", "tielt-winge", "holsbeek"],
    faq: [
      {
        q: "Mijn kelder is ondergelopen. Wat doe ik eerst?",
        a: "Eerst het staande water weg met een dompelpomp, dan zo snel mogelijk drogen. Haal wat nat is uit de ruimte, zet plinten los zodat de holle ruimte erachter kan drogen, en bel ons. Hoe langer water in de vloeropbouw staat, hoe groter de kans op schimmel.",
      },
      {
        q: "Wat als het vriest tijdens de droging?",
        a: "Dan verwarmen we mee. Onder 15 °C verliest een condensdroger het grootste deel van zijn rendement, en een ruwbouw op een open heuvelflank komt daar in de winter niet boven. We zetten er dan een elektrische kachel bij, die 400 V vraagt.",
      },
      {
        q: "Dekt mijn verzekering de huur van een bouwdroger?",
        a: "Bij waterschade meestal wel, als onderdeel van de schadebeperking. Wij geven u een factuur met de vochtmetingen erbij, en dat is precies wat een expert vraagt.",
      },
      {
        q: "Hoe lang moet een chape drogen met een droger?",
        a: "Reken op een week per centimeter dikte zonder hulp, en met droger en ventilator ongeveer de helft. Een chape van vijf centimeter is dan in twee à drie weken klaar voor de vloerder.",
      },
      {
        q: "Hoe snel staan jullie in Aarschot?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer veertig minuten en we plannen het Hageland in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "tielt-winge",
    title: "Bouwdroger huren in Tielt-Winge | Vernast",
    description:
      "Bouwdroger huren in Tielt-Winge, Sint-Joris-Winge en Houwaart: woningen en winkelruimtes op de Hagelandse hellingen.",
    h1: "Bouwdroger huren in Tielt-Winge",
    kicker: "Hageland · hellingen en winkelruimtes",
    rit: { afstand: "circa 52 km", tijd: "ongeveer vijfenveertig minuten" },
    intro: [
      "Tielt-Winge ligt **op de zuidflanken van het Hageland**, met Sint-Joris-Winge, Houwaart en Meensel-Kiezegem. Dezelfde hellingen waar de wijnbouw van de streek op staat: **zandleem met ijzerzandsteen eronder**.",
      "Naast woningen drogen we hier opvallend vaak **winkel- en horecaruimtes**, want aan het kruispunt van de gemeente ligt een van de grotere handelszones van de regio.",
    ],
    bouw: {
      kop: "Woningen op de flank, en winkelruimtes met een opleverdatum",
      alineas: [
        "Bij een **winkel- of horecaruimte** staat de opening gepland, en een gietvloer of tegelwerk op een te natte chape komt los. Daar zetten we **meer capaciteit in één keer in** in plaats van langer te drogen met één toestel: minder huurweken is doorgaans ook goedkoper. Geef ons de datum, dan rekenen we terug hoeveel toestellen daarvoor nodig zijn.",
        "Bij de woningen op de **flank** komt hangwater terug: aan de bergzijde staat grond tegen de muur, en bij elke regenperiode perst het water daar tegenaan. Dat is geen bouwvocht, en drogen lost het niet op. **De technieker meet het verschil** bij de levering.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Voor de winkel- of horecaruimte**: 110 liter per dag en een bereik tot ongeveer 600 m³. Meer capaciteit in één keer kost minder huurweken." },
      { key: "ttk350", waarom: "De Medium voor een woning of een verdieping: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "Op een grote vloer voorkomt luchtbeweging dat één hoek achterblijft; bij massieve muren is ze een voorwaarde." },
      { key: "teddh30", waarom: "Voor een onverwarmde ruimte in de winter: onder 15 °C zakt het rendement van elke condensdroger. Vraagt 400 V krachtstroom." },
    ],
    levering: {
      kop: "Leveren in Tielt-Winge: met een datum om naar terug te rekenen",
      alinea:
        "Een vijfenveertigtal minuten rijden. **Hebt u een openingsdatum, geef die dan bij de reservatie**: dan rekenen we terug hoeveel capaciteit er nodig is om die te halen, in plaats van u achteraf te laten verlengen. U krijgt een tijdslot en een sms een halfuur vooraf.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfenveertig minuten**. Voor één los toestel kan dat lonen. Voor een winkelruimte niet: daar gaan meerdere toestellen in één rit naartoe, en die levering zit al in de prijs.",
    },
    buren: ["aarschot", "holsbeek", "lubbeek", "bekkevoort", "glabbeek"],
    faq: [
      {
        q: "Ik heb een vaste openingsdatum. Kunnen jullie daarnaar werken?",
        a: "Ja, en dat is de goede manier om dit te plannen. Geef de datum en het volume door, dan rekenen we terug hoeveel toestellen er nodig zijn. Meer capaciteit in één keer is vaak goedkoper dan langer huren met te weinig.",
      },
      {
        q: "Hoe droog moet een chape zijn voor een gietvloer?",
        a: "Strenger dan voor tegels. Uw vloerder bepaalt de grens; wij drogen tot een gemeten waarde en niet tot een datum. De technieker meet bij de ophaling en u krijgt die meting op papier.",
      },
      {
        q: "Mijn muur aan de bergzijde blijft vochtig. Wat is dat?",
        a: "Waarschijnlijk hangwater: een waterlaag die door de zandleem zijwaarts zakt en tegen die muur komt te staan. Het komt na elke regenperiode terug. Drogen houdt de ruimte bruikbaar, drainage aan de buitenzijde lost het op.",
      },
      {
        q: "Wat als het vriest tijdens de droging?",
        a: "Dan verwarmen we mee. Onder 15 °C verliest een condensdroger het grootste deel van zijn rendement. We zetten er dan een elektrische kachel bij, die 400 V vraagt.",
      },
      {
        q: "Hoe snel staan jullie in Tielt-Winge?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfenveertig minuten en we plannen het Hageland in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "scherpenheuvel-zichem",
    title: "Bouwdroger huren in Scherpenheuvel-Zichem | Vernast",
    description:
      "Bouwdroger huren in Scherpenheuvel-Zichem, Averbode en Testelt: horeca en logies op de heuvel, en woningen eromheen.",
    h1: "Bouwdroger huren in Scherpenheuvel-Zichem",
    kicker: "Hageland · horeca en logies op de heuvel",
    rit: { afstand: "circa 52 km", tijd: "ongeveer vijfenveertig minuten" },
    intro: [
      "Scherpenheuvel-Zichem bestaat uit **de bedevaartstad op de heuvel** en de dorpen Zichem, Testelt, Keiberg en Averbode errond. Die bedevaart heeft er iets achtergelaten: **opvallend veel horeca en logies** voor de omvang van de gemeente.",
      "Precies die panden komen regelmatig in verbouwing, en dan geldt er iets wat bij een woning niet speelt: **de heropening staat vast**, en de kamers moeten op die datum klaar zijn.",
    ],
    bouw: {
      kop: "Horeca en logies met een harde datum, en woningen errond",
      alineas: [
        "Bij een **hotel-, kamer- of horecaverbouwing** zijn er doorgaans **meerdere kleine ruimtes die tegelijk moeten drogen**, achter elkaar in de planning van de afwerker. Daar zetten we **per kamer een klein toestel** in in plaats van één groot in de gang: droge lucht blijft hangen waar het toestel staat, en met open deuren droogt u vooral de gang.",
        "Rond de heuvel gaat het om **gewone woningwerven op zandleem**. Daar is in de winter de temperatuur de beperkende factor: **onder 15 °C verliest een condensdroger het grootste deel van zijn rendement**, dus hoort er in een onverwarmde ruwbouw een elektrische kachel bij. Die vraagt **400 V**.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**Per kamer**: 50 liter per dag en 0,75 kW op een gewoon stopcontact, stil genoeg voor een pand waar gasten verblijven." },
      { key: "ttk350", waarom: "De Medium voor een gelijkvloers of een keuken: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttk650", waarom: "Voor een grote zaal of een volledig gelijkvloers in één keer: 110 liter per dag, bereik tot ongeveer 600 m³." },
      { key: "teddh30", waarom: "Voor de onverwarmde ruwbouw in de winter: onder 15 °C zakt het rendement van elke condensdroger. Vraagt 400 V krachtstroom." },
    ],
    levering: {
      kop: "Leveren in Scherpenheuvel-Zichem: met uw heropening in de planning",
      alinea:
        "Een vijfenveertigtal minuten rijden. **Geef bij de reservatie de heropeningsdatum en het aantal ruimtes door**, dan leveren we in één rit en zetten we per ruimte een droogzone op. Dat is goedkoper dan dezelfde rit drie keer, en uw afwerker kan achter elkaar doorwerken.",
    },
    afhalen: {
      kop: "Afhalen kan, voor één los toestel",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfenveertig minuten**. Voor één los toestel kan dat lonen. Voor meerdere kamers is leveren beter: dan gaan alle toestellen in één rit mee en zet de technieker ze meteen goed op.",
    },
    buren: ["aarschot", "bekkevoort", "diest", "laakdal", "tielt-winge"],
    faq: [
      {
        q: "Ik heb een vaste heropeningsdatum. Kunnen jullie daarnaar werken?",
        a: "Ja. Geef de datum, het aantal ruimtes en het volume door, dan rekenen we terug hoeveel toestellen er nodig zijn. Meer capaciteit in één keer is vaak goedkoper dan langer huren met te weinig.",
      },
      {
        q: "Kunnen jullie meerdere kamers tegelijk drogen?",
        a: "Ja, en dat is hier de gewone opzet: per kamer een klein toestel in plaats van één groot in de gang. Droge lucht blijft hangen waar het toestel staat, dus met open deuren droogt u vooral de gang.",
      },
      {
        q: "Mag een bouwdroger draaien terwijl er gasten zijn?",
        a: "De Small bouwdroger verbruikt 0,75 kW en is stil genoeg om in de kamer ernaast te slapen, dus in een pand waar maar een deel verbouwd wordt kan dat. Houd de deur van de droogzone wel dicht.",
      },
      {
        q: "Wat als het vriest tijdens de droging?",
        a: "Dan verwarmen we mee. Onder 15 °C verliest een condensdroger het grootste deel van zijn rendement. We zetten er dan een elektrische kachel bij, die 400 V vraagt; de technieker controleert dat bij de levering.",
      },
      {
        q: "Hoe snel staan jullie hier?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfenveertig minuten en we plannen het Hageland in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "bekkevoort",
    title: "Bouwdroger huren in Bekkevoort | Vernast",
    description:
      "Bouwdroger huren in Bekkevoort en Assent: landelijke kernen op de zandleemheuvels van het Hageland. Binnen 24 uur geleverd, geplaatst en opgehaald.",
    h1: "Bouwdroger huren in Bekkevoort",
    kicker: "Hageland · landelijke kernen op de heuvels",
    rit: { afstand: "circa 55 km", tijd: "ongeveer vijftig minuten" },
    intro: [
      "Bekkevoort en Assent liggen **op de zandleemheuvels van het Hageland**, tussen Diest en Tielt-Winge: open landbouwgebied met kleine kernen en veel lintbebouwing langs de steenwegen.",
      "Wat we hier drogen is gemengd: **renovatie van hoeves en dorpswoningen**, en **nieuwbouw** in de verkavelingen aan de rand van de kernen.",
    ],
    bouw: {
      kop: "Hoeves op de heuvel, en nieuwbouw aan de rand",
      alineas: [
        "Een hoeve op **zandleem** heeft massieve muren die hun vocht traag afgeven. Tegen het muuroppervlak vormt zich een verzadigd luchtlaagje dat verdere droging afremt, en dat haalt een ventilator weg. Reken op **anderhalf tot twee keer de droogtijd** van een moderne wand, en bij een **schuur of stal in herbestemming** op een groot, hoog en onverwarmd volume.",
        "Op de nieuwbouwwerven staat de ruwbouw **onbeschut op een open flank**. In de winter is dat beslissend: **onder 15 °C verliest een condensdroger het grootste deel van zijn rendement**. Dan gaat er een elektrische kachel mee, die **400 V** vraagt, of meteen een adsorptiedroger die ook koud doorwerkt.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium als standaard: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "**Bij massieve muren een voorwaarde**: hij blaast de verzadigde luchtlaag tegen het muuroppervlak weg, en pas dan droogt de muur verder." },
      { key: "teddh30", waarom: "**Voor de onbeschutte winterwerf**: onder 15 °C zakt het rendement van elke condensdroger. Vraagt 400 V krachtstroom." },
      { key: "ttk650", waarom: "Voor een hoeve of een schuur met grote, hoge volumes: 110 liter per dag en bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Bekkevoort: binnen 24 uur, in de Hagelandronde",
      alinea:
        "Een vijftigtal minuten rijden. U krijgt een tijdslot en een sms een halfuur vooraf. Bij een hoeve vragen we **vooraf het volume in kubieke meter** en of de ruimte dicht te krijgen is; op een winterwerf controleert de technieker of de kast 400 V levert.",
    },
    afhalen: {
      kop: "Afhalen loont hier niet",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijftig minuten, dus bijna twee uur heen en terug**. **Vanuit Bekkevoort leveren we gewoon**; de rit en de vochtmeting zitten al in de prijs van het pakket.",
    },
    buren: ["scherpenheuvel-zichem", "diest", "tielt-winge", "glabbeek", "kortenaken"],
    faq: [
      {
        q: "Waarom droogt een hoeve zo veel trager dan een nieuwbouw?",
        a: "Omdat het vocht uit de kern van een massieve muur naar buiten moet, en omdat zich tegen het oppervlak een verzadigd luchtlaagje vormt dat verdere droging afremt. Reken op anderhalf tot twee keer de droogtijd van een moderne wand, altijd met een ventilator erbij.",
      },
      {
        q: "Wat als het vriest tijdens de droging?",
        a: "Dan verwarmen we mee. Een ruwbouw op een open flank komt in de winter niet boven 15 °C, en daaronder verliest een condensdroger het grootste deel van zijn rendement. We zetten er een elektrische kachel bij, die 400 V vraagt.",
      },
      {
        q: "Kunnen jullie een schuur drogen die woonruimte wordt?",
        a: "Ja. Geef vooraf het volume in kubieke meter door, de vloeropbouw en of de poorten en verluchting kunnen sluiten. Is de ruimte niet te verwarmen, dan zetten we een adsorptiedroger in.",
      },
      {
        q: "Betaal ik meer omdat ik ver woon?",
        a: "Nee. De prijs van het droogpakket is dezelfde in heel ons werkgebied. De rit telt mee in onze planning, niet in uw factuur.",
      },
      {
        q: "Hoe snel staan jullie in Bekkevoort?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijftig minuten en we plannen het Hageland in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "diest",
    title: "Bouwdroger huren in Diest | Vernast",
    description:
      "Bouwdroger huren in Diest, Schaffen en Molenstede: vestingstad aan de Demer, met kelders in de oude kern. Geleverd en geplaatst, met vochtmeting inbegrepen.",
    h1: "Bouwdroger huren in Diest",
    kicker: "Hageland · vestingstad aan de Demer",
    rit: { afstand: "circa 58 km", tijd: "ongeveer vijftig minuten" },
    intro: [
      "Diest is **een vestingstad aan de Demer**, met Schaffen, Deurne, Molenstede en Webbekom errond. In de oude kern staan **historische panden met gewelfde kelders**, en de vesten en grachten houden het grondwater er hoog.",
      "Dat maakt een kelder in de binnenstad hier bijna per definitie vochtig, en dat is iets anders dan bouwvocht.",
    ],
    bouw: {
      kop: "Gewelfde kelders in de vesting, nieuwbouw in de dorpen",
      alineas: [
        "Een **gewelfde kelder in de oude kern** is koud, gesloten en zonder doorstroming, en met de vesten ernaast staat het grondwater hoog. Zo'n ruimte droogt van nature nooit helemaal. **Onder 15 °C verliest een condensdroger het grootste deel van zijn rendement**, dus gaat er een adsorptiedroger naartoe, die het vocht aan een droogwiel bindt en ook bij vijf graden doorwerkt.",
        "In de dorpen errond gaat het om **nieuwbouw op zandleem**, en daar is in de winter de temperatuur beslissend: een onbeschutte ruwbouw komt niet boven de 15 °C en vraagt dus **bijverwarming**. Die kachel werkt op **400 V**, en de technieker controleert de werfkast bij de levering.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**Voor de gewelfde kelder**: koud en gesloten, en daar werkt een adsorptiedroger door waar een condensdroger stilvalt." },
      { key: "ttk350", waarom: "De Medium voor een gelijkvloers of een chape: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "**Bij massieve en gewelfde muren een voorwaarde**: hij blaast de verzadigde luchtlaag tegen het oppervlak weg." },
      { key: "teddh30", waarom: "Voor de onbeschutte winterwerf: onder 15 °C zakt het rendement van elke condensdroger. Vraagt 400 V krachtstroom." },
    ],
    levering: {
      kop: "Leveren in Diest: binnen 24 uur, ook in de oude kern",
      alinea:
        "Een vijftigtal minuten rijden. **Ligt uw pand in een straat met venstertijden of een voetgangersgebied, zeg dat dan bij de reservatie**, dan plannen we binnen dat venster. Bij een kelder meet de technieker eerst of het om bouwvocht of om grondwater gaat.",
    },
    afhalen: {
      kop: "Afhalen loont hier niet",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijftig minuten, dus bijna twee uur heen en terug**. **Vanuit Diest leveren we gewoon**; bij een kelder hangt het bovendien van de temperatuur af welk type droger werkt, en dat meet de technieker ter plaatse.",
    },
    buren: ["bekkevoort", "scherpenheuvel-zichem", "kortenaken", "geetbets"],
    faq: [
      {
        q: "Kunnen jullie een gewelfde kelder drogen?",
        a: "Ja, en daarvoor zetten we een adsorptiedroger in. Een gewelfde kelder is koud en gesloten, en een condensdroger werkt daar slecht: onder 15 °C verliest hij het grootste deel van zijn rendement. Een adsorptiedroger bindt het vocht aan een droogwiel en blijft ook bij vijf graden doorwerken.",
      },
      {
        q: "Mijn kelder in de binnenstad blijft vochtig. Waarom?",
        a: "Met de vesten en grachten ernaast staat het grondwater in de oude kern hoog, en een gewelfde kelder zonder buitenwaterdichting zuigt dat op. Drogen houdt de ruimte bruikbaar zolang het toestel draait, maar de bron blijft. De technieker meet dat bij de levering.",
      },
      {
        q: "Wat als het vriest tijdens de droging?",
        a: "Dan verwarmen we mee. Onder 15 °C verliest een condensdroger het grootste deel van zijn rendement, dus in een onverwarmde ruwbouw zetten we er een elektrische kachel bij. Die vraagt 400 V.",
      },
      {
        q: "Betaal ik meer omdat ik ver woon?",
        a: "Nee. De prijs van het droogpakket is dezelfde in heel ons werkgebied. De rit telt mee in onze planning, niet in uw factuur.",
      },
      {
        q: "Hoe snel staan jullie in Diest?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijftig minuten en we plannen het Hageland in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "glabbeek",
    title: "Bouwdroger huren in Glabbeek | Vernast",
    description:
      "Bouwdroger huren in Glabbeek, Bunsbeek en Attenrode: kleine landelijke kernen op leem. Geleverd en geplaatst. Ook een klein dorp ligt gewoon op onze route.",
    h1: "Bouwdroger huren in Glabbeek",
    kicker: "Hageland · kleine kernen op leem",
    rit: { afstand: "circa 58 km", tijd: "ongeveer vijftig minuten" },
    intro: [
      "Glabbeek is **een van de kleinste gemeenten van Vlaams-Brabant**, met Bunsbeek, Attenrode-Wever en Zuurbemde: vier dorpen in open leemland tussen Tienen en Diest.",
      "Wat we hier drogen is bijna altijd **renovatie van hoeves en dorpswoningen**, en in de winter een ruwbouw die eerst op temperatuur moet.",
    ],
    bouw: {
      kop: "Hoeves en dorpswoningen op leembodem",
      alineas: [
        "Een hoeve op **leem** combineert twee trage eigenschappen: **massieve muren die hun vocht traag afgeven**, en een ondergrond die water traag doorlaat. Tegen het muuroppervlak vormt zich een verzadigd luchtlaagje dat verdere droging afremt, en dat haalt een ventilator weg. Reken op **anderhalf tot twee keer de droogtijd** van een moderne wand.",
        "Veel werven hier bevatten **een schuur of een stal** die mee wordt aangepakt. Dat is een groot, hoog en onverwarmd volume, en wij rekenen op **volume in kubieke meter**: zo'n gebouw telt zwaarder dan zijn vloeroppervlak suggereert. Is het niet te verwarmen, dan gaat er een adsorptiedroger naartoe.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium als standaard bij renovatie: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "**Onmisbaar bij massieve muren**: hij blaast de verzadigde luchtlaag tegen het muuroppervlak weg, en pas dan droogt de muur verder." },
      { key: "ttk650", waarom: "Voor een hoeve of een schuur met grote, hoge volumes: 110 liter per dag en bereik tot ongeveer 600 m³." },
      { key: "revolution", waarom: "**Voor de onverwarmde schuur of kelder**: de adsorptiedroger blijft ook bij lage temperatuur vocht opnemen." },
    ],
    levering: {
      kop: "Leveren in Glabbeek: binnen 24 uur, ook in een klein dorp",
      alinea:
        "Een vijftigtal minuten rijden. We plannen het Hageland in één ronde, dus ook een klein dorp ligt gewoon op de route. Bij een hoeve vragen we **vooraf het volume in kubieke meter** en of de ruimte dicht te krijgen is.",
    },
    afhalen: {
      kop: "Afhalen loont hier niet",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijftig minuten, dus bijna twee uur heen en terug**. **Vanuit Glabbeek leveren we gewoon**; bij massief werk hangt het resultaat af van waar de toestellen en de ventilatoren staan.",
    },
    buren: ["tielt-winge", "bekkevoort", "kortenaken", "boutersem", "tienen"],
    faq: [
      {
        q: "Komen jullie ook naar een klein dorp?",
        a: "Ja, en zonder toeslag. We plannen het Hageland in één ronde, dus Bunsbeek, Attenrode en Zuurbemde liggen gewoon op de route. De prijs van het droogpakket is dezelfde in heel ons werkgebied.",
      },
      {
        q: "Waarom droogt een hoeve zo veel trager dan een nieuwbouw?",
        a: "Omdat het vocht uit de kern van een massieve muur naar buiten moet, en omdat zich tegen het oppervlak een verzadigd luchtlaagje vormt dat verdere droging afremt. Reken op anderhalf tot twee keer de droogtijd van een moderne wand.",
      },
      {
        q: "Kunnen jullie een schuur drogen die woonruimte wordt?",
        a: "Ja. Geef vooraf het volume in kubieke meter door, de vloeropbouw en of de poorten en verluchting kunnen sluiten. Is de ruimte niet te verwarmen, dan zetten we een adsorptiedroger in.",
      },
      {
        q: "Betaal ik een kilometerkost?",
        a: "Nee. Levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket.",
      },
      {
        q: "Hoe snel staan jullie in Glabbeek?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijftig minuten.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "kortenaken",
    title: "Bouwdroger huren in Kortenaken | Vernast",
    description:
      "Bouwdroger huren in Kortenaken, Waanrode en Kersbeek-Miskom: dorpen in de Velpe- en Getevalleien. Binnen 24 uur geleverd, geplaatst en opgehaald.",
    h1: "Bouwdroger huren in Kortenaken",
    kicker: "Hageland · in de beekvalleien",
    rit: { afstand: "circa 62 km", tijd: "ongeveer vijfenvijftig minuten" },
    intro: [
      "Kortenaken ligt **waar de Velpe en de Gete door het Hageland lopen**, met Waanrode, Kersbeek-Miskom en Ransberg erbij: kleine dorpen in smalle beekvalleien.",
      "In zo'n vallei staat de bebouwing **laag en vlak bij het water**, en het grondwater staat er ondiep. Hogerop is het zandleem op een helling.",
    ],
    bouw: {
      kop: "Laag in de beekvallei, hoger op de flank",
      alineas: [
        "**Laag in de vallei** zit het grondwater ondiep en stijgt het mee met de beek. Een kelder of een vloer op volle grond blijft daar zelden volledig droog, en dat is geen bouwvocht: **drogen haalt het uit de ruimte, de bron blijft**. De technieker meet dat bij de levering en zegt het eerlijk.",
        "**Hoger op de flank** perst hangwater uit de zandleem tegen de bergzijde van een gebouw, na elke regenperiode op dezelfde plaats. Gaat het om **bouwvocht uit een renovatie**, dan verdwijnt het wel definitief, en dan hoort er bij massieve muren een ventilator bij: die blaast de verzadigde luchtlaag langs het muuroppervlak weg.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium als standaard: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "revolution", waarom: "**Voor de kelder laag in de vallei**: koud en vochtig tegelijk, en daar werkt een adsorptiedroger door waar een condensdroger stilvalt." },
      { key: "ttv4500", waarom: "**Bij massieve muren een voorwaarde**: hij blaast de verzadigde luchtlaag tegen het oppervlak weg, en komt onder vloeren en achter plinten." },
      { key: "teddh30", waarom: "Voor de onbeschutte winterwerf: onder 15 °C zakt het rendement van elke condensdroger. Vraagt 400 V krachtstroom." },
    ],
    levering: {
      kop: "Leveren in Kortenaken: binnen 24 uur, in de Hagelandronde",
      alinea:
        "Een vijfenvijftigtal minuten rijden. U krijgt een tijdslot en een sms een halfuur vooraf. **Ligt uw woning aan een smalle valleiweg of een onverharde oprit, zeg dat dan bij de reservatie**, dan plant de technieker daarop.",
    },
    afhalen: {
      kop: "Afhalen loont hier niet",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfenvijftig minuten, dus bijna twee uur heen en terug**. **Vanuit Kortenaken leveren we gewoon**; de rit en de vochtmeting zitten al in de prijs van het pakket.",
    },
    buren: ["glabbeek", "bekkevoort", "diest", "geetbets", "zoutleeuw", "linter"],
    faq: [
      {
        q: "Mijn kelder in de vallei blijft vochtig. Helpt drogen?",
        a: "Zolang het toestel draait wel: de ruimte wordt bruikbaar en schimmel krijgt geen kans. Maar het grondwater stijgt hier mee met de beek, en dat stopt een droger niet. De vochtmeting bij de levering vertelt of het om bouwvocht of om grondwater gaat.",
      },
      {
        q: "Ik woon hoger op de flank en één muur blijft vochtig. Wat is dat?",
        a: "Waarschijnlijk hangwater: een waterlaag die door de zandleem zijwaarts zakt en tegen die muur komt te staan. Het komt na elke regenperiode terug. Drainage aan de buitenzijde lost dat op.",
      },
      {
        q: "Wat als het vriest tijdens de droging?",
        a: "Dan verwarmen we mee. Onder 15 °C verliest een condensdroger het grootste deel van zijn rendement, dus in een onverwarmde ruwbouw zetten we er een elektrische kachel bij. Die vraagt 400 V.",
      },
      {
        q: "Betaal ik meer omdat ik ver woon?",
        a: "Nee. De prijs van het droogpakket is dezelfde in heel ons werkgebied. De rit telt mee in onze planning, niet in uw factuur.",
      },
      {
        q: "Hoe snel staan jullie in Kortenaken?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfenvijftig minuten en we plannen het Hageland in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "geetbets",
    title: "Bouwdroger huren in Geetbets | Vernast",
    description:
      "Bouwdroger huren in Geetbets, Rummen en Grazen: landelijke kernen in de Getevallei op de Limburgse grens. Binnen 24 uur geleverd, geplaatst en opgehaald.",
    h1: "Bouwdroger huren in Geetbets",
    kicker: "Hageland · Getevallei aan de grens",
    rit: { afstand: "circa 65 km", tijd: "ongeveer vijfenvijftig minuten" },
    intro: [
      "Geetbets ligt **in de Getevallei op de grens met Limburg**, met Rummen en Grazen erbij: open landbouwgebied met kleine kernen en lintbebouwing.",
      "Het is **een van onze verste haltes in Vlaams-Brabant**, en dat zeggen we liever vooraf. Boekt u voor de middag, dan staat het doorgaans de volgende werkdag.",
    ],
    bouw: {
      kop: "Hoeves in de Getevallei, met ondiep grondwater",
      alineas: [
        "Laag in de **Getevallei** staat het grondwater ondiep, en blijft een kelder of een vloer op volle grond zelden volledig droog. Een hoeve zonder **waterkering in de muurvoet** zuigt dat vocht op via de baksteen, en binnen komt het terug als een vochtband onderaan de muur, vaak met een witte zoutrand. **Dat is geen bouwvocht**, en drogen lost het niet op.",
        "Gaat het om **bouwvocht uit een renovatie**, dan verdwijnt het definitief. Bij massieve muren duurt dat langer: tegen het oppervlak vormt zich een verzadigd luchtlaagje dat verdere droging afremt, en dat haalt een ventilator weg. Reken op **anderhalf tot twee keer de droogtijd** van een moderne wand.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "De Medium als standaard bij renovatie: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttv4500", waarom: "**Onmisbaar bij massieve muren**: hij blaast de verzadigde luchtlaag tegen het muuroppervlak weg, en pas dan droogt de muur verder." },
      { key: "revolution", waarom: "**Voor de kelder in de vallei**: koud en vochtig tegelijk, en daar werkt een adsorptiedroger door waar een condensdroger stilvalt." },
      { key: "ttk650", waarom: "Voor een hoeve of een schuur met grote, hoge volumes: 110 liter per dag en bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Geetbets: onze verste halte in het Hageland",
      alinea:
        "Een vijfenvijftigtal minuten rijden: **een van onze verste haltes in Vlaams-Brabant**. Boekt u voor de middag, dan staat het doorgaans de volgende werkdag. Bij een hoeve vragen we vooraf het volume in kubieke meter en of de ruimte dicht te krijgen is.",
    },
    afhalen: {
      kop: "Afhalen loont hier niet",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfenvijftig minuten, dus bijna twee uur heen en terug**. **Vanuit Geetbets raden we afhalen af en leveren we gewoon.** De rit zit al in de prijs, en die prijs is dezelfde als voor iemand naast ons magazijn.",
    },
    buren: ["kortenaken", "zoutleeuw", "diest"],
    faq: [
      {
        q: "Mijn muren blijven onderaan vochtig. Is dat bouwvocht?",
        a: "Laag in de Getevallei is dat bijna altijd opstijgend vocht: een band tot ongeveer een halve meter hoog, vaak met een witte zoutrand en afbladderende verf. Bouwvocht zit gelijkmatig in de ruimte. Onze technieker meet het bij de levering.",
      },
      {
        q: "Helpt een bouwdroger tegen opstijgend vocht?",
        a: "Hij houdt de ruimte bruikbaar en voorkomt schimmel, maar hij stopt de aanvoer niet. De duurzame oplossing is een waterkering in de muurvoet, bijvoorbeeld door injectie. Wij zeggen het eerlijk als drogen hier alleen symptomen aanpakt.",
      },
      {
        q: "Kunnen jullie een hoeve of een schuur drogen?",
        a: "Ja. We vragen vooraf het volume in kubieke meter, de vloeropbouw en of de ruimte dicht te krijgen is: een droger tegen een open poort werkt tegen de buitenlucht in. Is ze niet te verwarmen, dan zetten we een adsorptiedroger in.",
      },
      {
        q: "Betaal ik meer omdat Geetbets zo ver ligt?",
        a: "Nee. De prijs van het droogpakket is dezelfde in heel ons werkgebied. De rit telt mee in onze planning, niet in uw factuur.",
      },
      {
        q: "Hoe snel staan jullie in Geetbets?",
        a: "Binnen 24 uur na uw boeking, maar dit is een van onze verste haltes. Boekt u voor de middag, dan staat het doorgaans de volgende werkdag.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "tienen",
    title: "Bouwdroger huren in Tienen | Vernast",
    description:
      "Bouwdroger huren in Tienen, Hakendover en Oplinter: stadswoningen en panden in de kern, op leembodem. Geleverd en geplaatst, met uw opleverdatum in de planning.",
    h1: "Bouwdroger huren in Tienen",
    kicker: "Vlaams-Haspengouw · stad op leem",
    rit: { afstand: "circa 65 km", tijd: "ongeveer vijfenvijftig minuten" },
    intro: [
      "Tienen is **de stad van Vlaams-Haspengouw**, met Hakendover, Oplinter, Kumtich en Goetsenhoven errond. In de kern staan **stadswoningen en handelspanden** met gewelfde kelders, daarbuiten ligt vlak akkerland met grote hoeves.",
      "De bodem is **dikke leem**, en dat bepaalt hoe lang een chape hier droogt: leem laat water traag door, dus de ondergrond onder de vloerplaat blijft natter dan op zand.",
    ],
    bouw: {
      kop: "Handelspanden in de kern, en hoeves in het akkerland",
      alineas: [
        "Bij een **handelspand of een horecazaak** in de kern staat de heropening gepland, en een gietvloer of tegelwerk op een te natte chape komt los. Daar zetten we **meer capaciteit in één keer in** in plaats van langer te drogen met één toestel: minder huurweken is doorgaans ook goedkoper. Geef ons de datum, dan rekenen we terug.",
        "In het akkerland gaat het om **grote hoeves in herbestemming**: ruime, hoge volumes van vijf à zes meter onder de nok. Daar blijft droge lucht hangen waar het toestel staat, dus hoort er **luchtbeweging over de volle lengte** bij. Wij rekenen op **volume in kubieke meter**, want zo'n gebouw telt zwaarder dan zijn vloeroppervlak suggereert.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Voor het handelspand of de hoeve**: 110 liter per dag en een bereik tot ongeveer 600 m³. Op een groot volume zetten we er meerdere verdeeld." },
      { key: "ttv4500", waarom: "**In een hoog volume de voorwaarde**: zonder luchtbeweging over de volle lengte blijft droge lucht hangen waar het toestel staat." },
      { key: "ttk350", waarom: "De Medium voor een stadswoning of een gelijkvloers: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "revolution", waarom: "**Voor de gewelfde kelder**: koud en gesloten, en daar werkt een adsorptiedroger door waar een condensdroger stilvalt." },
    ],
    levering: {
      kop: "Leveren in Tienen: binnen 24 uur, ook in de kern",
      alinea:
        "Een vijfenvijftigtal minuten rijden. **Ligt uw pand in een straat met venstertijden of een voetgangersgebied, zeg dat dan bij de reservatie**, dan plannen we binnen dat venster. Hebt u een heropeningsdatum, geef die dan ook door: dan rekenen we terug hoeveel capaciteit nodig is.",
    },
    afhalen: {
      kop: "Afhalen loont hier niet",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfenvijftig minuten, dus bijna twee uur heen en terug**. **Vanuit Tienen leveren we gewoon**; de rit en de vochtmeting zitten al in de prijs van het pakket.",
    },
    buren: ["boutersem", "hoegaarden", "linter", "glabbeek", "zoutleeuw"],
    faq: [
      {
        q: "Ik heb een vaste heropeningsdatum voor mijn pand. Kunnen jullie daarnaar werken?",
        a: "Ja, en dat is de goede manier om dit te plannen. Geef de datum en het volume door, dan rekenen we terug hoeveel toestellen er nodig zijn. Meer capaciteit in één keer is vaak goedkoper dan langer huren met te weinig.",
      },
      {
        q: "Waarom droogt een chape op leem zo traag?",
        a: "Omdat leem water traag doorlaat, dus de ondergrond onder uw vloerplaat blijft natter dan op zand. Zonder hulp doet een chape van vijf centimeter hier vijf à zeven weken; met droger en ventilator ongeveer de helft.",
      },
      {
        q: "Kunnen jullie een gewelfde kelder drogen?",
        a: "Ja, en daarvoor zetten we een adsorptiedroger in. Een gewelfde kelder is koud en gesloten, en een condensdroger verliest onder 15 °C het grootste deel van zijn rendement. Een adsorptiedroger blijft ook bij vijf graden doorwerken.",
      },
      {
        q: "Hoeveel toestellen voor een hoeve met een hoge nok?",
        a: "Dat hangt van het volume af, niet van de oppervlakte. Een volume van zes meter hoog vraagt meer capaciteit dan u op basis van de vloer zou denken, en altijd luchtbeweging over de volle lengte. Geef het volume in kubieke meter door, dan rekenen we het uit.",
      },
      {
        q: "Hoe snel staan jullie in Tienen?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfenvijftig minuten en we plannen Vlaams-Haspengouw in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "linter",
    title: "Bouwdroger huren in Linter | Vernast",
    description:
      "Bouwdroger huren in Linter, Neerlinter en Drieslinter: hoeves in de Getevallei op vlak akkerland. Per volume een droogzone, geleverd en geplaatst.",
    h1: "Bouwdroger huren in Linter",
    kicker: "Vlaams-Haspengouw · hoeves in de Getevallei",
    rit: { afstand: "circa 65 km", tijd: "ongeveer vijfenvijftig minuten" },
    intro: [
      "Linter bestaat uit **zes dorpen in de Getevallei**: Neerlinter, Drieslinter, Melkwezer, Orsmaal-Gussenhoven, Neerhespen en Wommersom. Vlak akkerland, met **grote hoeves** tussen de kernen.",
      "Precies die hoeves zijn wat we hier drogen: schuren en stallen die woonruimte of bedrijfsruimte worden, en woonhuizen met massieve muren.",
    ],
    bouw: {
      kop: "Grote hoeves in herbestemming, met hoge volumes",
      alineas: [
        "Een **schuur of stal met een nok van vijf à zes meter** is een groot volume, en droge lucht blijft daarin hangen waar het toestel staat. Daarom hoort er **luchtbeweging over de volle lengte** bij: één droger in een hoek droogt die hoek. Wij rekenen op **volume in kubieke meter**, want zo'n gebouw telt zwaarder dan zijn vloeroppervlak suggereert.",
        "Laag in de **Getevallei** staat het grondwater ondiep. Een hoeve zonder **waterkering in de muurvoet** zuigt dat op via de baksteen, en binnen komt het terug als een vochtband onderaan de muur, vaak met een witte zoutrand. **Dat is geen bouwvocht**; de technieker meet het verschil bij de levering.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Voor de schuur of de stal**: 110 liter per dag en een bereik tot ongeveer 600 m³. Op een groot volume zetten we er meerdere verdeeld." },
      { key: "ttv4500", waarom: "**In een hoog volume de voorwaarde**: zonder luchtbeweging over de volle lengte blijft droge lucht hangen waar het toestel staat." },
      { key: "ttk350", waarom: "De Medium voor het woonhuis of een gelijkvloers: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "revolution", waarom: "**Voor de onverwarmde schuur of kelder**: de adsorptiedroger blijft ook bij lage temperatuur vocht opnemen, waar een condensdroger stilvalt." },
    ],
    levering: {
      kop: "Leveren in Linter: binnen 24 uur, met het volume vooraf",
      alinea:
        "Een vijfenvijftigtal minuten rijden. Bij een hoeve vragen we **vooraf het volume in kubieke meter**, de vloeropbouw en of de poorten kunnen sluiten, zodat de technieker met het juiste toestel vertrekt in plaats van het ter plaatse te ontdekken.",
    },
    afhalen: {
      kop: "Afhalen loont hier niet",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer vijfenvijftig minuten, dus bijna twee uur heen en terug**. **Vanuit Linter leveren we gewoon**; bij een hoeve hangt het resultaat af van hoe de toestellen verdeeld staan.",
    },
    buren: ["tienen", "zoutleeuw", "kortenaken", "glabbeek"],
    faq: [
      {
        q: "Hoeveel toestellen voor een schuur met een hoge nok?",
        a: "Dat hangt van het volume af, niet van de oppervlakte. Een schuur van zes meter hoog vraagt meer capaciteit dan u op basis van de vloer zou denken, en altijd luchtbeweging over de volle lengte. Eén droger in een hoek droogt die hoek.",
      },
      {
        q: "Moeten de poorten dicht tijdens het drogen?",
        a: "Ja. Een droger tegen een open poort droogt de buitenlucht, en die is onuitputtelijk. Kunnen de poorten niet sluiten, dan heeft drogen geen zin en zeggen we dat liever vooraf dan achteraf.",
      },
      {
        q: "Mijn muren blijven onderaan vochtig. Is dat bouwvocht?",
        a: "Laag in de Getevallei is dat bijna altijd opstijgend vocht: een band tot ongeveer een halve meter hoog, vaak met een witte zoutrand en afbladderende verf. Bouwvocht zit gelijkmatig in de ruimte. De technieker meet het bij de levering.",
      },
      {
        q: "Betaal ik meer omdat ik ver woon?",
        a: "Nee. De prijs van het droogpakket is dezelfde in heel ons werkgebied. De rit telt mee in onze planning, niet in uw factuur.",
      },
      {
        q: "Hoe snel staan jullie in Linter?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer vijfenvijftig minuten en we plannen Vlaams-Haspengouw in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "zoutleeuw",
    title: "Bouwdroger huren in Zoutleeuw | Vernast",
    description:
      "Bouwdroger huren in Zoutleeuw, Budingen en Halle-Booienhoven: historisch patrimonium en hoeves op vlak land. Met een realistische droogtermijn, vooraf gezegd.",
    h1: "Bouwdroger huren in Zoutleeuw",
    kicker: "Vlaams-Haspengouw · oude stad op vlak land",
    rit: { afstand: "circa 68 km", tijd: "ongeveer een uur" },
    intro: [
      "Zoutleeuw was eeuwen geleden een vestingstad, en dat is aan de kern te zien: **hoge, oude panden met dikke muren en gewelfde kelders**, met Budingen, Halle-Booienhoven en Dormaal eromheen.",
      "Zulk patrimonium droogt **anders dan een gewone woning**: muren van een halve meter of dikker geven hun vocht zeer traag af, en dat vraagt tijd die vooraf ingecalculeerd moet worden.",
    ],
    bouw: {
      kop: "Oud patrimonium met dikke muren, en hoeves errond",
      alineas: [
        "Een muur van **een halve meter of dikker** geeft zijn vocht zeer traag af: het moet uit de kern naar buiten, en tegen het oppervlak vormt zich een verzadigd luchtlaagje dat verdere droging afremt. **Een ventilator haalt dat laagje weg**, en zonder hem staat de droger lucht te drogen die al droog is. Reken bij zulk werk op **twee keer de droogtijd** van een moderne wand, soms meer.",
        "In de dorpen errond gaat het om **hoeves in herbestemming**: ruime, hoge volumes waar de droge lucht met een ventilator verdeeld moet worden. Is de ruimte niet te verwarmen, dan gaat er een **adsorptiedroger** naartoe, die ook bij lage temperatuur doorwerkt.",
      ],
    },
    toestellen: [
      { key: "ttv4500", waarom: "**Bij muren van een halve meter geen extra maar een voorwaarde**: hij blaast de verzadigde luchtlaag tegen het oppervlak weg." },
      { key: "revolution", waarom: "**Voor de gewelfde kelder of de onverwarmde schuur**: de adsorptiedroger blijft ook bij lage temperatuur vocht opnemen." },
      { key: "ttk350", waarom: "De Medium per verdieping of per ruimte: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttk650", waarom: "Voor een groot pand of een hoeve met hoge volumes: 110 liter per dag, bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Zoutleeuw: binnen 24 uur, en met een realistische termijn",
      alinea:
        "Ongeveer een uur rijden. Bij oud patrimonium zegt de technieker bij de levering **welke termijn realistisch is**, in plaats van u twee weken te beloven die niet gehaald worden. Bij de ophaling meet hij de restvochtigheid; is die nog te hoog, dan blijft het pakket staan.",
    },
    afhalen: {
      kop: "Afhalen loont hier niet",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer een uur, dus twee uur heen en terug**. **Vanuit Zoutleeuw leveren we gewoon**; bij dikke muren hangt het resultaat af van waar de toestellen en de ventilatoren staan.",
    },
    buren: ["linter", "tienen", "kortenaken", "geetbets"],
    faq: [
      {
        q: "Hoe lang duurt het drogen van een pand met muren van een halve meter?",
        a: "Langer dan u zou denken: reken op twee keer de droogtijd van een moderne wand, soms meer. Het vocht moet uit de kern naar buiten, en dat gaat traag. Onze technieker zegt bij de levering welke termijn realistisch is in plaats van twee weken te beloven.",
      },
      {
        q: "Waarom hoort er bij dikke muren altijd een ventilator?",
        a: "Omdat zich tegen het muuroppervlak een verzadigd luchtlaagje vormt dat als een deken werkt. Zolang dat blijft staan, droogt de muur niet verder, hoe hard de droger ook werkt. De ventilator haalt dat laagje weg.",
      },
      {
        q: "Kunnen jullie een gewelfde kelder drogen?",
        a: "Ja, en daarvoor zetten we een adsorptiedroger in. Een gewelfde kelder is koud en gesloten, en een condensdroger verliest onder 15 °C het grootste deel van zijn rendement.",
      },
      {
        q: "Kan ik verlengen als het niet droog is?",
        a: "Ja, per week. De technieker meet bij de ophaling; is de restvochtigheid nog te hoog, dan blijft het pakket staan en verlengt u bij. Bij oud patrimonium is dat eerder regel dan uitzondering, en daarom zeggen we de termijn vooraf eerlijk.",
      },
      {
        q: "Hoe snel staan jullie in Zoutleeuw?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer een uur en we plannen Vlaams-Haspengouw in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "hoegaarden",
    title: "Bouwdroger huren in Hoegaarden | Vernast",
    description:
      "Bouwdroger huren in Hoegaarden en Outgaarden: hoeves en dorpswoningen op de dikke leemheuvels. Binnen 24 uur geleverd, geplaatst en opgehaald.",
    h1: "Bouwdroger huren in Hoegaarden",
    kicker: "Vlaams-Haspengouw · dikke leem en holle wegen",
    rit: { afstand: "circa 70 km", tijd: "ongeveer een uur" },
    intro: [
      "Hoegaarden ligt **op de dikste leembodem van Vlaanderen**, met Outgaarden en Meldert erbij. Het is een landschap van **holle wegen die diep in die leem zijn uitgesneden**, met hoeves op de flanken.",
      "Die bodem is bepalend. **Leem laat water zeer traag door**, dus water dat er in zit blijft er lang, en op een helling zoekt het de laagste weg: tegen de eerste muur die het tegenkomt.",
    ],
    bouw: {
      kop: "Dikke leem op een helling, met hangwater tegen de muur",
      alineas: [
        "**Hangwater is hier geen uitzondering maar de regel.** Een hoeve of woning op de flank heeft aan de bergzijde grond tegen de muur, en in dikke leem perst het water daar bij elke regenperiode tegenaan. Een droger haalt vocht uit de lucht, niet uit de grond: hij houdt de ruimte bruikbaar, maar het komt terug. **De technieker meet dat bij de levering** en zegt eerlijk dat drainage aan de buitenzijde de oplossing is.",
        "Gaat het om **bouwvocht uit een renovatie**, dan verdwijnt het definitief. Bij massieve muren duurt dat wel langer: tegen het oppervlak vormt zich een verzadigd luchtlaagje dat verdere droging afremt, en dat haalt een ventilator weg. Reken op **anderhalf tot twee keer de droogtijd** van een moderne wand.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**Voor de kelder of ruimte in de helling**: koud en permanent vochtig, en daar werkt een adsorptiedroger door waar een condensdroger stilvalt." },
      { key: "ttv4500", waarom: "**Onmisbaar bij massieve muren**: hij blaast de verzadigde luchtlaag tegen het muuroppervlak weg, en pas dan droogt de muur verder." },
      { key: "ttk350", waarom: "De Medium als standaard bij renovatie: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
      { key: "ttk650", waarom: "Voor een hoeve met grote, hoge volumes: 110 liter per dag en bereik tot ongeveer 600 m³." },
    ],
    levering: {
      kop: "Leveren in Hoegaarden: binnen 24 uur, ook aan een holle weg",
      alinea:
        "Ongeveer een uur rijden. **Staat uw hoeve aan een holle weg of een onverharde oprit, zeg dat dan bij de reservatie**, dan plant de technieker daarop in plaats van het ter plaatse te ontdekken. Boekt u voor de middag, dan staat het doorgaans de volgende werkdag.",
    },
    afhalen: {
      kop: "Afhalen loont hier niet",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ongeveer een uur, dus twee uur heen en terug**. **Vanuit Hoegaarden leveren we gewoon**; de rit en de vochtmeting zitten al in de prijs van het pakket.",
    },
    buren: ["tienen", "boutersem", "landen"],
    faq: [
      {
        q: "Wat is hangwater, en waarom kan een droger er niets aan doen?",
        a: "Hangwater is een waterlaag die door de leembodem zijwaarts naar beneden zakt en tegen het eerste obstakel komt te staan, vaak de bergzijde van een woning. Een droger haalt vocht uit de lucht, niet uit de grond: hij houdt de ruimte bruikbaar, maar het water blijft komen. De oplossing is drainage aan de buitenzijde.",
      },
      {
        q: "Hoe weet ik of het bouwvocht is of hangwater?",
        a: "Bouwvocht zit gelijkmatig in de ruimte en neemt af naarmate het droogt. Hangwater geeft een natte plek of band die na elke regenperiode terugkomt, meestal op dezelfde plaats aan de bergzijde. Onze technieker meet dat bij de levering.",
      },
      {
        q: "Waarom droogt een hoeve zo veel trager?",
        a: "Omdat het vocht uit de kern van een massieve muur naar buiten moet, en omdat zich tegen het oppervlak een verzadigd luchtlaagje vormt dat verdere droging afremt. Reken op anderhalf tot twee keer de droogtijd van een moderne wand.",
      },
      {
        q: "Kan de bestelwagen tot bij mijn hoeve?",
        a: "Meestal wel, maar aan een holle weg of een onverharde oprit niet altijd. Geef dat door bij de reservatie, dan weet de technieker dat hij verder moet uitladen.",
      },
      {
        q: "Hoe snel staan jullie in Hoegaarden?",
        a: "Binnen 24 uur na uw boeking. De rit duurt ongeveer een uur en we plannen Vlaams-Haspengouw in één ronde.",
      },
    ],
    realisaties: [],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "landen",
    title: "Bouwdroger huren in Landen | Vernast",
    description:
      "Bouwdroger huren in Landen, Attenhoven en Wange: grote hoeves in het Haspengouwse akkerland. Geleverd en geplaatst.",
    h1: "Bouwdroger huren in Landen",
    kicker: "Vlaams-Haspengouw · de verste hoek",
    rit: { afstand: "circa 78 km", tijd: "ongeveer een uur en vijf minuten" },
    intro: [
      "Landen is **de zuidoostelijkste gemeente van Vlaams-Brabant**, tegen de taalgrens, met Attenhoven, Wange, Walsbets, Rumsdorp en nog een reeks kleine dorpen. Vlak akkerland, met **grote vierkantshoeves** tussen de kernen.",
      "Het is **de verste halte van ons werkgebied in deze provincie**: ruim een uur rijden. Dat zeggen we liever vooraf. Boekt u voor de middag, dan staat het doorgaans de volgende werkdag.",
    ],
    bouw: {
      kop: "Vierkantshoeves in herbestemming, met zeer grote volumes",
      alineas: [
        "Een **vierkantshoeve** is geen woning maar een verzameling volumes rond een binnenplaats: woonhuis, schuur, stallen en poortgebouw, elk met een eigen vloeropbouw en een eigen temperatuur. Daar werkt **één pakket voor het geheel niet**: we zetten per volume een droogzone op, met luchtbeweging over de volle lengte, en rekenen op **volume in kubieke meter** per deel.",
        "De schuren halen vijf à zes meter onder de nok en zijn **zelden te verwarmen**. Onder 15 °C verliest een condensdroger het grootste deel van zijn rendement, dus gaat daar een **adsorptiedroger** naartoe of een kachel op 400 V erbij. Dat bepaalt de technieker na de meting ter plaatse.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Voor de schuur of de stal**: 110 liter per dag en een bereik tot ongeveer 600 m³. Op zo'n volume zetten we er meerdere verdeeld." },
      { key: "ttv4500", waarom: "**In een hoog volume de voorwaarde**: zonder luchtbeweging over de volle lengte blijft droge lucht hangen waar het toestel staat." },
      { key: "revolution", waarom: "**Voor het deel dat niet te verwarmen is**: de adsorptiedroger blijft ook bij lage temperatuur vocht opnemen." },
      { key: "ttk350", waarom: "De Medium voor het woonhuis of een gelijkvloers: 70 liter per dag, bereik tot ongeveer 400 m³, pompklaar." },
    ],
    levering: {
      kop: "Leveren in Landen: onze verste halte, en toch binnen 24 uur",
      alinea:
        "Ruim een uur rijden: **de verste halte van ons werkgebied in Vlaams-Brabant**. Boekt u voor de middag, dan staat het doorgaans de volgende werkdag. Bij een hoeve vragen we **vooraf het volume per deel** en of de ruimtes dicht te krijgen zijn.",
    },
    afhalen: {
      kop: "Afhalen loont hier niet",
      alinea:
        "Ons afhaalpunt in Aartselaar ligt op **een rit van ruim een uur, dus ruim twee uur heen en terug**. **Vanuit Landen raden we afhalen af en leveren we gewoon.** De rit zit al in de prijs, en die prijs is dezelfde als voor iemand die naast ons magazijn woont.",
    },
    buren: ["hoegaarden", "zoutleeuw", "tienen"],
    faq: [
      {
        q: "Komen jullie tot in Landen?",
        a: "Ja, en zonder toeslag. Het is de verste halte van ons werkgebied in deze provincie, dus boekt u voor de middag, dan staat het doorgaans de volgende werkdag. De prijs van het droogpakket is dezelfde in heel ons werkgebied.",
      },
      {
        q: "Hoe pakken jullie een vierkantshoeve aan?",
        a: "Niet met één pakket voor het geheel. Woonhuis, schuur, stallen en poortgebouw hebben elk een eigen vloeropbouw en een eigen temperatuur, dus zetten we per volume een droogzone op met luchtbeweging over de volle lengte. Geef het volume per deel door, dan rekenen we het uit.",
      },
      {
        q: "Kunnen jullie een schuur drogen die niet te verwarmen is?",
        a: "Ja, met een adsorptiedroger. Die bindt het vocht aan een droogwiel en blijft ook bij vijf graden doorwerken, waar een condensdroger onder 15 °C het grootste deel van zijn rendement verliest.",
      },
      {
        q: "Moeten de poorten dicht tijdens het drogen?",
        a: "Ja. Een droger tegen een open poort droogt de buitenlucht, en die is onuitputtelijk. Kunnen de poorten niet sluiten, dan heeft drogen geen zin en zeggen we dat liever vooraf.",
      },
      {
        q: "Betaal ik meer omdat Landen zo ver ligt?",
        a: "Nee. De prijs van het droogpakket is dezelfde in heel ons werkgebied. De rit telt mee in onze planning, niet in uw factuur.",
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
        q: "Kunnen jullie een chalet of een vakantiewoning drogen?",
        a: "Ja, en daar zien we hier vaker een eigen probleem: een verblijf dat een winter leeggestaan heeft, is muf omdat er niet geventileerd werd. Een droger haalt dat eruit in een paar dagen. Staat het gebouw op een lichte constructie, dan kiest de technieker een kleiner toestel dat langer draait, want te snel drogen geeft krimpscheuren.",
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
        q: "Hoe snel staan jullie in Herentals?",
        a: "Binnen 24 uur na uw boeking. We plannen de Kempen in een ronde, dus boekt u voor de middag, dan staat het doorgaans de volgende werkdag. Bij een bedrijfshal vragen we vooraf het volume en de beschikbare stroom, zodat de technieker met het juiste toestel vertrekt.",
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
        q: "Kunnen jullie een hoeve of een schuur drogen?",
        a: "Ja. We vragen vooraf het volume in kubieke meter, de vloeropbouw en of de ruimte dicht te krijgen is: een droger tegen een open poort werkt tegen de buitenlucht in. Is ze niet te verwarmen, dan zetten we een adsorptiedroger in die ook bij lage temperatuur doorwerkt.",
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
        q: "Moet ik het waterreservoir zelf leegmaken?",
        a: "Nee. Onze toestellen zijn pompklaar: de technieker legt de afvoerslang naar een putje of een gootsteen. Dat is bij een kelder belangrijker dan elders, want een reservoir dat volloopt zet het toestel stil, en in een ruimte waar u niet dagelijks komt merkt u dat pas dagen later.",
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
        q: "Betaal ik een waarborg?",
        a: "Nee. Er komt geen waarborg bij, en levering, plaatsing, de vochtmeting en de ophaling zitten in de prijs van het droogpakket. U betaalt de huurperiode, en verlengt u bij, dan rekenen we per week.",
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
        a: "Ja. U kiest bij de reservatie een periode in hele weken, van 1 tot 8 weken, en vanaf 4 weken zakt de huurprijs met 10%, oplopend tot 15% bij 8 weken. Loopt het toch uit, dan verlengt u online met één klik en betaalt u alleen de extra dagen. Bent u vroeger klaar, laat het weten, dan halen we op.",
      },
      {
        q: "Hoort er een ventilator bij mijn pakket?",
        a: "In een smalle, diepe rijwoning wel. De droger maakt droge lucht, de ventilator brengt die tot achteraan en blaast de verzadigde laag langs vloer en muur weg. Zonder dat laatste droogt de voorkamer en blijft de keuken staan. Hij zit standaard in onze droogpakketten voor een rijwoning.",
      },
      {
        q: "Mag een bouwdroger draaien terwijl wij thuis zijn?",
        a: "Ja, en daarvoor is de Small bouwdroger bedoeld. Hij verbruikt 0,75 kW, dus hij mag op een gewoon stopcontact, en hij is stil genoeg om in de kamer ernaast te slapen. Houd de deur van de droogzone wel dicht: droge lucht die door het hele huis trekt, droogt niets snel.",
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
        q: "Hoort er een ventilator bij mijn pakket?",
        a: "Bij een chape en bij een diepe plattegrond wel. De droger maakt droge lucht, de ventilator brengt die tot achteraan en blaast de verzadigde laag langs vloer en muur weg. Zonder dat laatste droogt de voorkamer en blijft de keuken staan. Hij zit standaard in onze droogpakketten voor een woning.",
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
        q: "Hoe lang duurt het drogen na wateroverlast?",
        a: "Voor een kelder of een gelijkvloers reken op twee tot vier weken, afhankelijk van hoe lang het water er stond en van de vloeropbouw. Een zwevende vloer op isolatie doet er langer over dan een volle plaat, want het water zit onder de afwerking en droogt niet mee met de ruimte.",
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
        q: "Zit de verdieping in de prijs?",
        a: "Is er een lift of een vaste trap, dan is elke verdieping inbegrepen. Moet een toestel via een ladder naar boven omdat de trap nog niet ligt, dan rekenen we een toeslag per verdieping, en die staat vooraf in uw offerte, niet achteraf op de factuur.",
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
