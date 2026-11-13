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
      districten — Berchem, Borgerhout, Deurne, Merksem, Hoboken, Ekeren —
      waar Wilrijk bewust buiten valt, want dat heeft een eigen pagina.
    */
    title: "Bouwdroger huren in Antwerpen stad | Vernast",
    description:
      "Bouwdroger huren in Antwerpen stad, Berchem, Borgerhout, Deurne of Merksem: compacte toestellen voor een rijwoning of appartement, binnen 24 uur geleverd.",
    h1: "Bouwdroger huren in Antwerpen stad en districten",
    kicker: "Stad en districten · magazijn op 20 minuten",
    rit: { afstand: "circa 12 km", tijd: "ongeveer twintig minuten" },
    intro: [
      "In de stad is bouwdroging bijna altijd renovatie. In de negentiende-eeuwse gordel van Berchem, Borgerhout en Zurenborg gaat het huis per huis: vers pleisterwerk in een bewoonde straat, een kelder die na een natte winter vochtig blijkt, een chape die moet drogen terwijl de buren thuis zijn.",
      "Dat stelt andere eisen dan een open werf. Het toestel moet via een smalle trap naar boven kunnen, op één gewoon stopcontact draaien en stil genoeg zijn voor een gebouw waar mensen wonen. Daarom staat de Small bouwdroger hier het vaakst: 50 liter per dag, 0,75 kW, en hij past door een deur van tachtig centimeter.",
    ],
    bouw: {
      kop: "Rijwoningen, appartementen en kelders onder het maaiveld",
      alineas: [
        "De Antwerpse rijwoning heeft een smalle, diepe plattegrond en vaak een kelder die deels onder het maaiveld ligt. Die kelder droogt van nature nooit helemaal: er is geen doorstroming, de muren staan tegen de grond en de temperatuur blijft laag. Een condensdroger verliest onder 15 °C rendement, dus zetten we er bij een winterwerf een elektrische kachel naast om de ruimte eerst op werkingstemperatuur te brengen.",
        "In een appartement speelt iets anders: de verdieping. Is er een lift of een vaste trap, dan is elke verdieping inbegrepen in de prijs. Moet een toestel via een ladder naar boven — typisch bij een casco-verbouwing waar de trap nog niet ligt — dan rekenen we een toeslag per verdieping. Dat staat vooraf in uw offerte, niet achteraf op de factuur.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "Het toestel voor de stad: compact genoeg voor een Antwerpse draaitrap en zuinig op één gewoon stopcontact. Voor een kamer, een appartement of een badkamerrenovatie." },
      { key: "ttv4500", waarom: "In een smalle, diepe rijwoning gaat droge lucht niet vanzelf van voor naar achter. Deze ventilator doet dat wel, en halveert zo vaak de droogtijd van een gelijkvloers." },
      { key: "teddh30", waarom: "Voor de kelder onder de voorkamer, die in de winter zelden boven tien graden komt. Onder 15 °C verliest elke condensdroger rendement; deze kachel haalt dat terug." },
    ],
    levering: {
      kop: "Leveren in Antwerpen: de volgende werkdag, geplaatst en ingesteld",
      alinea:
        "In de stad leveren we met een bestelwagen die kort dubbel kan staan terwijl de technieker uitlaadt. Ligt uw straat in een voetgangerszone of geldt er een venstertijd, zeg dat dan bij de reservatie, dan plannen we binnen dat venster. Is er een lift of een vaste trap, dan is elke verdieping inbegrepen; moet een toestel via een ladder naar boven, dan staat die toeslag vooraf in uw offerte.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar, langs de A12",
      alinea:
        "Vanuit de stad is ons afhaalpunt een rit van ongeveer twintig minuten over de A12. Houd er rekening mee dat een droger 25 tot 40 kg weegt en rechtop vervoerd moet worden — in een kleine stadswagen past er doorgaans één, geen twee.",
    },
    buren: ["wilrijk", "mortsel", "edegem", "schoten"],
    faq: [
      {
        q: "Past een bouwdroger door een Antwerpse trappenhal?",
        a: "De Small bouwdroger is 40 bij 40 centimeter aan de basis en weegt ongeveer 25 kg — die gaat door elke gangbare trappenhal, ook de draaitrap van een negentiende-eeuws rijhuis. Voor de Medium rekent u op iets meer breedte. Twijfelt u, geef dan bij de reservatie door dat het om een smalle trap gaat; dan kiest de technieker het toestel daarop.",
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
        "Aartselaar is grotendeels gebouwd tussen de jaren vijftig en zeventig: vrijstaande woningen en bungalows op een ruim perceel, veel met een kruipkelder of een garage onder het maaiveld. Die generatie woningen gaat nu massaal door een renovatie — isolatie, nieuwe chape, een badkamer die verplaatst wordt — en elk van die ingrepen brengt water in huis dat eruit moet voor de afwerking begint.",
        "Omdat de percelen ruim zijn, is er bijna altijd plaats voor een opstelling met meerdere toestellen tegelijk: twee drogers en een ventilator die de droge lucht langs de vloer stuurt, in plaats van één toestel dat het alleen moet doen. Dat scheelt dagen, en dagen zijn hier wat de huur kost.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "Onze standaard voor een bungalow of een halfopen woning in renovatie: 70 liter per dag en genoeg bereik voor een volledig gelijkvloers." },
      { key: "ttv4500", waarom: "Op de ruime percelen hier droogt u zelden één kamer. Deze ventilator stuurt de droge lucht door de hele benedenverdieping, zodat alles tegelijk droogt." },
      { key: "ttk170", waarom: "Voor één kamer, een badkamer of een kelder. Het lichtste toestel uit ons gamma, en bij afhalen in eigen gemeente het makkelijkst mee te nemen." },
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
        a: "Vaak wel. Het magazijn staat in uw gemeente, dus zolang het toestel dat u nodig heeft op voorraad staat, is een levering in de namiddag haalbaar wanneer u voor de middag belt. Zekerheid krijgt u aan de telefoon op 03 689 90 65 — de beschikbaarheid staat daar live op het scherm.",
      },
      {
        q: "Is afhalen in Aartselaar goedkoper dan laten leveren?",
        a: "Ja. U betaalt geen transport en geen installatie, en u krijgt korting op de huurprijs. Daar staat tegenover dat u zelf tilt (een droger weegt 25 tot 40 kg), zelf de opstelling bepaalt en zelf het reservoir leegt — en dat er geen vochtmeting en dus geen Drooggarantie bij zit. Woont u om de hoek, dan is afhalen voor één toestel meestal de logische keuze.",
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
        "Bij de nieuwbouwprojecten is het omgekeerde waar: daar telt snelheid, omdat de vloerder pas kan beginnen als het restvocht onder de norm zit. Een chape van zeven centimeter droogt natuurlijk weken; met de juiste opstelling halen we dat flink in. Wat de planning haalbaar maakt is niet het toestel maar de meting — die bepaalt wanneer het droog is, niet een datum.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "Voor een pand binnen de vesten: compact genoeg voor een smalle gang en zacht genoeg om oude kalkpleister niet te forceren." },
      { key: "ttk350", waarom: "Voor de nieuwbouwprojecten op Nekkerspoel en Ragheno, waar chape en pleisterwerk per appartement tegelijk moeten drogen." },
      { key: "ttv4500", waarom: "Onmisbaar bij een chape: hij blaast de verzadigde luchtlaag die vlak boven de vloer blijft hangen weg, zodat de droger niet staat te werken op lucht die al droog is." },
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
        a: "Ja, een bouwdroger verandert niets aan het gebouw — hij haalt vocht uit de lucht. Wel letten we op het tempo: bij oude kalkpleister en houten balklagen stellen we een gematigde streefvochtigheid in, zodat er niets krimpt of scheurt. Hebt u voorwaarden van Onroerend Erfgoed op papier, geef die dan door, dan stemmen we de instelling daarop af.",
      },
      {
        q: "Hoeveel toestellen heb ik nodig voor een appartement van 90 m²?",
        a: "Voor een gewone droging na chape of pleisterwerk volstaat meestal één Medium bouwdroger plus één ventilator die de droge lucht langs de vloer stuurt. De Calculator rekent het door op volume, toepassing en situatie, en zegt meteen welke droogtijd en welke prijs erbij horen. Zit u ernaast, dan verlengt u online.",
      },
      {
        q: "Kunnen jullie in een leeg nieuwbouwproject leveren zonder dat ik erbij ben?",
        a: "Dat kan, als er iemand op de werf is die de technieker binnenlaat en kan tekenen — de aannemer, de werfleider of een buur met een sleutel. Wij hebben een contactpersoon ter plaatse nodig, want de toestellen worden niet alleen afgezet maar ook geplaatst, aangesloten en ingesteld, en er gaat een vochtmeting aan vooraf.",
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
        "Is de ruimte niet te verwarmen — een kruipruimte, een onverwarmde kelder, een schuur — dan is een adsorptiedroger de betere keuze. Die werkt met een droogmiddel in plaats van met condensatie en haalt ook bij lage temperaturen vocht uit de lucht, via slangen tot in een ruimte waar u zelf niet staat.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "Voor een onverwarmde kruipruimte of schuur. Werkt met een droogmiddel in plaats van met condensatie en blijft dus ook bij lage temperatuur vocht halen." },
      { key: "teddh30", waarom: "De Kempense winterwerf: deze kachel brengt de ruimte eerst op werkingstemperatuur, zodat de condensdroger ernaast weer rendement haalt." },
      { key: "ttk350", waarom: "Voor een vrijstaande woning in renovatie, zodra de ruimte wél verwarmd is. 70 liter per dag en een bereik tot ongeveer 400 m³." },
    ],
    levering: {
      kop: "Leveren in Turnhout: binnen 24 uur, zonder transportkost",
      alinea:
        "Turnhout is onze verste reguliere rit in deze provincie, zo'n vijftig minuten. Dat telt mee in de planning maar niet in uw factuur: levering, plaatsing, instelling en ophaling zitten in de prijs van elk droogpakket. Vraag liefst een dag speling bij het kiezen van uw leverdatum, dan combineren we de rit.",
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar",
      alinea:
        "Ruim vijftig kilometer heen en evenveel terug — voor de meeste Kempense werven is leveren hier de verstandigere keuze, zeker omdat installatie en vochtmeting er dan bij zitten.",
    },
    buren: ["geel", "mol", "herentals"],
    faq: [
      {
        q: "Werkt een bouwdroger in een onverwarmde schuur in de winter?",
        a: "Een gewone condensdroger nauwelijks: onder 15 °C zakt zijn rendement sterk, en rond het vriespunt doet hij bijna niets meer. Twee oplossingen. Ofwel zetten we er een elektrische bouwkachel naast die de ruimte op werkingstemperatuur brengt, ofwel kiezen we een adsorptiedroger, die wel bij lage temperatuur blijft werken. Welke van de twee hangt af van of de ruimte te verwarmen valt.",
        },
      {
        q: "Rekenen jullie een transportkost voor Turnhout?",
        a: "Nee. Levering, plaatsing, instelling en ophaling zitten in de prijs van elk droogpakket, ongeacht of u in Aartselaar woont of in Turnhout. De rit telt wel mee in onze planning — daarom vragen we voor de verste gemeenten liefst een dag speling — maar niet in uw factuur.",
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
        "Een kelder in het Lierse centrum is vaak ouder dan de woning erboven: baksteen in kalkmortel, rechtstreeks tegen de grond, zonder waterkering. Die neemt vocht op langs de muren en geeft het binnen weer af. Na een overstroming is leegpompen pas de eerste stap — het water in de muren zit er dan nog weken in, en zonder droging komt het gewoon terug als vochtplekken en schimmel.",
        "Werkt u voor een verzekeringsdossier, dan is de meting net zo belangrijk als de droging. Wij meten bij de start en bij de oplevering en leggen dat vast, zodat u kunt aantonen hoe nat het was en wanneer het droog was. Dat rapport is wat een expert wil zien.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "Het werkpaard bij waterschade: 70 liter per dag, genoeg om een ondergelopen gelijkvloers of kelder in te halen." },
      { key: "ttv4500", waarom: "Bij water onder een vloeropbouw of achter een plint telt luchtbeweging meer dan capaciteit. Deze ventilator krijgt die lucht in beweging." },
      { key: "revolution", waarom: "Voor een kelder die niet te verwarmen is. In een koude Lierse kelder haalt een condensdroger weinig uit; dit toestel wel." },
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
        a: "Waterschade krijgt voorrang in onze planning. Belt u voor de middag, dan is dezelfde dag of de volgende ochtend doorgaans haalbaar — Lier ligt op een halfuur van ons magazijn. Bel in dat geval liever dan online te boeken, op 03 689 90 65: dan zien we meteen wat er vrij staat en wat u precies nodig hebt.",
      },
      {
        q: "Krijg ik een rapport voor mijn verzekering?",
        a: "Ja. Onze technieker meet het vochtgehalte bij de start en opnieuw bij de oplevering, en die metingen worden vastgelegd. Zo kunt u tegenover uw verzekeraar of een expert aantonen hoe nat het was, welke toestellen er stonden en wanneer het droog was. Zeg bij de reservatie dat het om een schadedossier gaat, dan houdt de technieker er rekening mee.",
      },
      {
        q: "Moet ik eerst laten leegpompen voor jullie komen?",
        a: "Ja. Een bouwdroger haalt vocht uit de lucht en uit materialen, hij pompt geen staand water weg. Zolang er water op de vloer staat, is drogen zinloos. Pomp of veeg eerst het staande water weg, haal nat tapijt en natte isolatie eruit, en laat ons dan komen voor wat erin is getrokken — dat is het deel dat maanden blijft zitten als u het laat.",
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
        "Klei houdt water vast waar zand het doorlaat. Een woning zonder waterkering in de muurvoet zuigt dat vocht op via de baksteen — opstijgend vocht — en dat komt binnen terug als vochtplekken tot een halve meter boven de vloer, afbladderende verf en zoutuitbloei. Een bouwdroger haalt dat vocht uit de ruimte, maar hij stopt de bron niet: zolang er geen waterkering ligt, blijft het bijkomen.",
        "Daarom is drogen hier meestal de tweede stap, niet de eerste. Eerst de bron aanpakken — injectie, drainage, een nieuwe vloeropbouw — en daarna het vocht dat erin zit eruit halen, zodat u kunt afwerken zonder dat de nieuwe pleister binnen het jaar terug openbarst. Onze zusterfirma Vernast Vochtbestrijding doet dat eerste deel; wij doen het tweede.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "Voor een arbeiderswoning in renovatie: genoeg capaciteit voor een volledig gelijkvloers met dikke, massieve muren." },
      { key: "revolution", waarom: "Voor een kelder die rechtstreeks in de kleigrond staat en in de winter niet boven tien graden komt." },
      { key: "ttv4500", waarom: "Massieve muren geven hun vocht traag af. Luchtbeweging langs het muuroppervlak versnelt dat merkbaar." },
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
        a: "Aan de vorm en de hoogte. Opstijgend vocht tekent zich af als een band onderaan de muur, meestal tot dertig à zestig centimeter hoog, vaak met een witte zoutrand bovenaan en afbladderende verf. Bouwvocht zit overal gelijkmatig en verdwijnt vanzelf naarmate het droogt. Twijfelt u, dan meet onze technieker het bij de levering — dat kost u niets extra.",
      },
      {
        q: "Hoe snel kunnen jullie in Boom leveren?",
        a: "Boom ligt op ongeveer een kwartier van ons magazijn in Aartselaar, recht langs de A12. Wie voor de middag boekt heeft de toestellen doorgaans de volgende werkdag draaien, en bij een waterschadedossier vaak dezelfde dag nog. Levering, plaatsing en ophaling zitten in de prijs.",
      },
      {
        q: "Hoe weet ik of drogen bij mij zin heeft?",
        a: "Bij bouwvocht altijd — dat verdwijnt definitief. Bij opstijgend vocht alleen als de bron eerst is aangepakt, anders komt het via de muurvoet gewoon bij. Onze technieker meet het bij de levering en zegt u eerlijk in welk geval u zit; dat kost u niets extra.",
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
        "Een woning uit de jaren zestig heeft meestal een volle kelder, een betonnen vloerplaat en muren met een smalle spouw. Wordt daar een nieuwe chape in gelegd, dan zit er per vierkante meter tientallen liters water in die niet door de vloerplaat weg kan — die moet er langs boven uit. Zonder droging duurt dat weken, en pas als het restvocht onder de norm zit mag er parket of tegel op.",
        "Het gaat zelden om één ruimte. Bij een volledige renovatie droogt u het gelijkvloers in één keer, met twee drogers en een ventilator die de verzadigde laag boven de vloer wegblaast. Dat is sneller en goedkoper dan kamer na kamer, omdat u dezelfde dagen huurt voor meer oppervlakte.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "Onze standaard voor een gelijkvloers met een nieuwe chape: 70 liter per dag en bereik tot ongeveer 400 m³." },
      { key: "ttv4500", waarom: "Bij een chape verdubbelt een ventilator vaak de snelheid: hij blaast de verzadigde laag vlak boven de vloer weg." },
      { key: "ttk170", waarom: "Voor één kamer of een badkamerrenovatie. Op tien minuten van het magazijn is dit het toestel dat mensen hier het vaakst zelf komen halen." },
    ],
    levering: {
      kop: "Leveren in Kontich: op tien minuten, de volgende werkdag",
      alinea:
        "Kontich grenst aan Aartselaar, waar ons magazijn staat. Voor een gewone droging is de volgende werkdag de regel, bij waterschade is dezelfde dag vaak haalbaar. Bij een volledige renovatie leveren we liever één opstelling voor het hele gelijkvloers dan kamer na kamer — dat is sneller en u huurt dezelfde dagen voor meer oppervlakte.",
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
        a: "Natuurlijk rekent men op ongeveer één week per centimeter dikte voor cementchape — bij zeven centimeter dus al snel twee maanden. Met een bouwdroger en ventilatoren haalt u daar een flink stuk af. De exacte tijd hangt af van dikte, type chape en ventilatie, en wordt bepaald door de meting, niet door de kalender. In onze gids over chape droogtijd staat het per situatie uitgerekend.",
      },
      {
        q: "Mag ik al tegelen als de chape droog aanvoelt?",
        a: "Nee. Droog aanvoelen zegt alleen iets over de bovenste millimeters; de kern kan nog ruim boven de norm zitten. Legt u daarop een dampdichte afwerking als tegel of parket, dan sluit u dat vocht in en komt het later terug als loskomende tegels of bollend parket. Daarom meten wij het restvocht bij de oplevering, zodat u zwart op wit hebt wanneer het mag.",
      },
      {
        q: "Hoeveel stroom verbruikt een bouwdroger per dag?",
        a: "Een Small bouwdroger trekt 0,75 kW, een Medium ongeveer 1,1 kW. Draait die 24 uur door, dan komt u op grofweg 18 tot 26 kWh per dag. Aan een gangbaar tarief is dat enkele euro's per etmaal — minder dan wat één extra huurdag u kost, en dat is precies waarom het toestel 's nachts moet blijven draaien.",
      },
      {
        q: "Kan ik een toestel bijbestellen als het te traag gaat?",
        a: "Ja. U belt, en omdat het magazijn op tien minuten ligt, staat er doorgaans dezelfde dag een extra toestel. U betaalt alleen de dagen dat het er staat. Vaak is een extra ventilator trouwens effectiever dan een tweede droger — dat bekijkt de technieker ter plaatse.",
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
        "Een vrijstaande nieuwbouw droogt niet sneller omdat hij groter is — hij heeft gewoon meer capaciteit nodig. Wij rekenen op volume in kubieke meter, niet op oppervlakte: een woning met een open leefruimte en een hoog plafond bevat veel meer lucht dan dezelfde vierkante meters onder een normaal plafond, en die lucht moet allemaal door het toestel.",
        "Bij verbouwde bijgebouwen — een schuur die loft wordt, een garage die bureau wordt — komt er iets bij: die ruimtes zijn zelden goed verwarmd tijdens de werken. Onder 15 °C verliest een condensdroger rendement, dus zetten we er in de winter een elektrische bouwkachel bij, of kiezen we meteen voor een adsorptiedroger die ook in de koude blijft werken.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "Voor de grote volumes hier: 90 liter per dag en bereik tot ongeveer 600 m³, voor een vrijstaande nieuwbouw of een verbouwde schuur." },
      { key: "teddh30", waarom: "Een bijgebouw in verbouwing is zelden verwarmd. Deze kachel brengt de ruimte op werkingstemperatuur zodat de droger weer rendement haalt." },
      { key: "ttv4500", waarom: "Bij een grote open ruimte is één toestel in de hoek niet genoeg: de lucht moet rondgaan. Deze ventilator zorgt daarvoor." },
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
      "Mol is van alle gemeenten op deze pagina de verste van ons magazijn: ruim een uur rijden. Toch leveren we er binnen 24 uur, en tegen dezelfde prijs als om de hoek — de rit telt mee in onze planning, niet in uw factuur.",
      "De Kempense zandgrond laat water snel door, wat betekent dat kelders hier minder vaak onderlopen dan in de Rupelstreek. Maar diezelfde zandgrond zorgt wel voor vochtige kruipruimtes, en de vrijstaande woningen die hier staan zijn in de winter vaak nauwelijks verwarmd tijdens de werken.",
    ],
    bouw: {
      kop: "Vrijstaande woningen, kruipruimtes en koude werven",
      alineas: [
        "Een kruipruimte onder een vrijstaande woning op zandgrond staat zelden onder water, maar hij is bijna altijd vochtig: er is geen doorstroming, de bodem geeft vocht af, en dat vocht trekt via de vloer naar boven. Dat merkt u als een muffe geur in de woonkamer of als schimmel in de hoeken van een buitenmuur. Zo'n ruimte droogt u met een adsorptiedroger die via slangen door een bestaand luik blaast — u hoeft er zelf niet in.",
        "Bij een winterwerf is de koude het probleem. Onder 15 °C zakt het rendement van een condensdroger zichtbaar, en rond het vriespunt doet hij bijna niets meer. Een elektrische bouwkachel brengt de ruimte eerst op werkingstemperatuur; pas dan begint de droger echt liters te halen. Die combinatie is hier eerder regel dan uitzondering.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "Voor een kruipruimte op zandgrond: het toestel staat buiten en blaast droge lucht naar binnen via een slang door een bestaand luik." },
      { key: "teddh30", waarom: "De winterwerf: onder 15 °C zakt het rendement van elke condensdroger, rond het vriespunt doet hij bijna niets meer. Deze kachel lost dat op." },
      { key: "ttk350", waarom: "Voor een vrijstaande woning in renovatie zodra de ruimte verwarmd is: 70 liter per dag, bereik tot ongeveer 400 m³." },
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
        a: "Onze kachels van 20 en 30 kW draaien op krachtstroom, 400 V — niet op een gewoon stopcontact. Controleer dus vóór u reserveert of die aansluiting op de werf aanwezig is. De bouwdrogers en ventilatoren zelf draaien wel gewoon op 230 V: 0,75 tot 1,4 kW voor een droger, ongeveer 0,2 kW voor een ventilator.",
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
      { key: "radiaal2250", waarom: "Voor gerichte droging via slangen — onder een betonvloer, achter een wandbekleding of in een kruipruimte." },
      { key: "ttv4500", waarom: "Een betonvloer geeft zijn vocht langs één kant af. Luchtbeweging erlangs helpt daar meer dan een extra droger." },
    ],
    levering: {
      kop: "Leveren in Herentals: woning of bedrijfsgebouw",
      alinea:
        "Veertig minuten vanuit Aartselaar. Bij een bedrijfsgebouw vragen we vooraf het volume in kubieke meter, de vloeropbouw en of de ruimte dicht te krijgen is — een droger tegen een open poort werkt tegen de buitenlucht in. Bij stilstand die geld kost zetten we liever meer toestellen korter dan één toestel lang.",
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
        a: "Ja, en dat doen we regelmatig. Wat we nodig hebben is het volume in kubieke meter, de vloeropbouw en of de ruimte dicht te krijgen is. Bij grote volumes zetten we meerdere drogers met ventilatoren in plaats van één toestel langer te laten staan — dat is sneller en meestal goedkoper, omdat u minder dagen huurt.",
      },
      {
        q: "Waarom heb ik ventilatoren nodig als ik al een droger heb?",
        a: "Omdat vlak boven een natte vloer een laag lucht blijft hangen die al verzadigd is met vocht. Zolang die laag niet weg is, droogt de vloer eronder nauwelijks verder — uw droger staat dan lucht te ontvochtigen die al droog is. Een ventilator blaast die laag weg en voert nieuwe, droge lucht aan. Bij vloeren verdubbelt dat vaak de snelheid.",
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
      "Wat we hier het vaakst tegenkomen is de renovatie van een vrijstaande woning of een fermette uit de jaren zeventig en tachtig. Die generatie huizen wordt nu grondig aangepakt — isolatie, nieuwe chape, soms een volledige binnenverbouwing — en dat brengt bouwvocht mee dat eruit moet voor er afgewerkt kan worden.",
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
    ],
    levering: {
      kop: "Leveren in Heist-op-den-Berg en de dorpskernen",
      alinea:
        "Wij leveren in de hele gemeente — Booischot, Itegem, Wiekevorst, Schriek en de rest — binnen dezelfde 24 uur en tegen dezelfde prijs. Geef het volledige adres op bij de reservatie, dan houdt de planning rekening met de rit. De technieker meet bij aankomst, want bij dikke muren zegt het gevoel weinig over wat er binnenin zit.",
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
        a: "Ja, in de hele gemeente — Booischot, Itegem, Wiekevorst, Schriek en de rest — tegen dezelfde prijs en binnen dezelfde 24 uur. Levering, plaatsing en ophaling zitten in het droogpakket. Geef bij de reservatie het volledige adres op, dan houdt de planning rekening met de rit.",
      },
      {
        q: "Ik heb net geïsoleerd en nu beslaan mijn ramen. Is dat bouwvocht?",
        a: "Vaak wel, zeker in de eerste winter na de werken. Een woning die luchtdicht gemaakt is ventileert niet meer zoals vroeger, dus het vocht dat tijdens de werken in de muren en de chape is gekomen kan er niet vanzelf uit. Een droging van een à twee weken haalt dat eruit. Blijft het daarna terugkomen, dan is het een ventilatieprobleem en geen bouwvocht.",
      },
      {
        q: "Hoe weet ik of een dikke binnenmuur droog genoeg is om te schilderen?",
        a: "Niet aan het gevoel — de bovenste millimeters drogen veel sneller dan de kern. Onze technieker meet het bij de oplevering en zegt u of het onder de norm zit. Dat is ook precies waar de Drooggarantie op steunt: is het op de afgesproken datum niet droog, dan huurt u kosteloos verder tot het wel zo is.",
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
      { key: "revolution", waarom: "Voor een kelderverdieping die in de winter niet op temperatuur komt — daar waar een condensdroger het laat afweten." },
      { key: "ttk650", waarom: "Voor de grote volumes van een villa: 90 liter per dag, bereik tot ongeveer 600 m³." },
      { key: "radiaal2250", waarom: "Voor water achter een zwembadwand of onder een dekvloer: droge lucht via slangen de holle ruimte in, zonder alles open te breken." },
    ],
    levering: {
      kop: "Leveren in Brasschaat: binnen 24 uur, tot in de kelder",
      alinea:
        "Een halfuur vanuit Aartselaar via de ring. De technieker draagt de toestellen tot waar ze moeten staan, ook een verdieping lager — bij een vaste trap is elke verdieping inbegrepen. Bij een lek in een technische ruimte meet hij eerst waar het vocht zit, want wat onder een dekvloer of achter een wand is gekropen, droogt niet mee met de ruimte.",
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
        a: "Vaak niet helemaal, maar wel open. Water dat achter een bekleding of onder een dekvloer zit, droogt niet mee met de ruimte — er is geen luchtstroom. Met gerichte droging via slangen blazen we droge lucht in die holle ruimte, door enkele kleine openingen in plaats van alles weg te breken. Of dat volstaat, blijkt uit de meting bij de start.",
      },
      {
        q: "Hoeveel toestellen heb ik nodig voor een hele kelderverdieping?",
        a: "Dat hangt af van het volume, niet van de oppervlakte: een kelder met een hoog plafond bevat veel meer lucht dan dezelfde vierkante meters laag onder. Voor een gangbare kelderverdieping onder een villa komt u doorgaans op twee tot drie toestellen plus ventilatoren. De Calculator rekent het door op uw eigen afmetingen.",
      },
      {
        q: "Er zat water achter mijn wandbekleding. Moet die eraf?",
        a: "Vaak niet helemaal, maar wel open. Water achter een bekleding of onder een dekvloer droogt niet mee met de ruimte — er is geen luchtstroom. Met gerichte droging via slangen blazen we droge lucht in die holle ruimte, door enkele kleine openingen in plaats van alles weg te breken. Of dat volstaat, blijkt uit de meting bij de start.",
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
        a: "Nee, integendeel — dicht houden. Een bouwdroger ontvochtigt de lucht die in de ruimte zit; staat er een raam open, dan haalt hij voortdurend nieuwe vochtige buitenlucht binnen en werkt hij tegen het weer in. Binnendeuren tussen de ruimtes die moeten drogen mogen wel open, zodat de droge lucht kan rondgaan.",
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
        a: "Nee, integendeel — dicht houden. Een bouwdroger ontvochtigt de lucht die in de ruimte zit; staat er een raam open, dan haalt hij voortdurend nieuwe vochtige buitenlucht binnen en werkt hij tegen het weer in. Binnendeuren tussen de ruimtes die moeten drogen mogen wel open, zodat de droge lucht kan rondgaan.",
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
        "Een woning uit de jaren dertig heeft meestal massieve muren zonder spouw en een kelder in baksteen zonder waterkering. Die kelder is zelden kurkdroog, en bij een renovatie wordt dat zichtbaar: zodra er geïsoleerd of gepleisterd wordt, komt het vocht dat er altijd al zat naar de oppervlakte. Drogen helpt daar, maar alleen als de bron is aangepakt — anders komt het terug.",
        "Bij de tuinwijkwoningen gaat het vaker om bouwvocht dan om opstijgend vocht: nieuwe chape, nieuw pleisterwerk, een aanbouw. Dat droogt wél definitief weg, en met een opstelling van één droger plus een ventilator is dat meestal een kwestie van één tot twee weken in plaats van maanden.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "Voor een woning uit het interbellum met een smalle gang: compact, en zuinig op één gewoon stopcontact." },
      { key: "ttk350", waarom: "Voor een tuinwijkwoning met een nieuwe chape of een aanbouw: 70 liter per dag over het hele gelijkvloers." },
      { key: "ttv4500", waarom: "Zonder luchtbeweging droogt alleen de kamer waar het toestel staat. Deze ventilator trekt het hele gelijkvloers mee." },
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
        a: "Ja. U kiest bij de reservatie 3 dagen, 1 week, 2 weken, 1 maand of 2 maanden, en bij langere periodes zakt de dagprijs. Loopt het toch uit, dan verlengt u online met één klik en betaalt u alleen de extra dagen. Bent u vroeger klaar, laat het weten — dan halen we op.",
      },
      {
        q: "Mijn kelder blijft vochtig, ook zonder werken. Wat nu?",
        a: "Dan gaat het waarschijnlijk niet om bouwvocht maar om een permanente bron: opstijgend vocht via de muurvoet, of vocht dat door de keldermuur komt. Een bouwdroger haalt het vocht uit de lucht zolang hij draait, maar zet u hem uit, dan komt het terug. De duurzame oplossing is de bron aanpakken en daarna drogen.",
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
        "Bij een renovatie van zo'n woning komt het vocht uit twee hoeken tegelijk. Het nieuwe werk brengt water binnen — een chape van zeven centimeter bevat per vierkante meter tientallen liters — en de bestaande kelder of kruipruimte geeft vocht af dat er altijd al zat maar dat nu niet meer weg kan omdat er geïsoleerd is.",
        "Beide pakt u in één keer aan, maar niet met één toestel op één plek. De chape droogt met een droger plus een ventilator die de verzadigde laag boven de vloer wegblaast; de kruipruimte met droge lucht die er via een slang door een bestaand luik in geblazen wordt. De technieker bekijkt bij de levering wat waar moet staan.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "Onze standaard voor een naoorlogse woning in renovatie: 70 liter per dag, bereik tot ongeveer 400 m³." },
      { key: "revolution", waarom: "Voor de kruipruimte eronder: droge lucht via een slang door een bestaand luik, zonder dat u er zelf in moet." },
      { key: "ttv4500", waarom: "Bij een nieuwe chape verdubbelt luchtbeweging vaak de snelheid — hij blaast de verzadigde laag boven de vloer weg." },
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
        a: "Bij een geleverd pakket niet, als u de condenspomp meeneemt: die voert het water continu af naar een afvoer, douche of vloerput, en dan draait het toestel dag en nacht door zonder dat u ernaar hoeft om te kijken. Zonder pomp leegt u het reservoir twee à drie keer per dag — loopt het vol, dan schakelt de droger zichzelf uit en staat hij stil.",
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
        "Bij water in een kelder is de volgorde wat telt. Eerst het staande water weg — pompen of vegen — en nat materiaal eruit: tapijt, isolatie, kartonnen dozen. Pas daarna heeft drogen zin, want een bouwdroger haalt vocht uit de lucht en uit materialen, hij pompt geen water weg. Wat erin getrokken is, blijft zonder droging maanden zitten en komt terug als vochtplekken en schimmel.",
        "Snelheid is hier geen detail. Op vochtig materiaal begint schimmel na 24 tot 48 uur. Wie binnen die termijn begint te drogen, heeft meestal alleen met vocht te maken; wie een week wacht, met vocht én met schimmel, en dat laatste vraagt een behandeling bovenop de droging.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "Bij hoogwater het werkpaard: 70 liter per dag, genoeg om een ondergelopen kelder of gelijkvloers in te halen." },
      { key: "ttv4500", waarom: "Water kruipt onder vloeren en achter plinten. Zonder luchtbeweging droogt dat niet; met deze ventilator wel." },
      { key: "revolution", waarom: "Voor een kelder die niet te verwarmen is — daar haalt een condensdroger in de winter weinig uit." },
    ],
    levering: {
      kop: "Leveren in Duffel: twintig minuten, bij waterschade met voorrang",
      alinea:
        "Twintig minuten vanuit Aartselaar. Bij wateroverlast krijgt uw dossier voorrang in de planning: op vochtig materiaal begint schimmel na 24 tot 48 uur, dus de eerste dag telt het zwaarst. Bel dan liever dan online te boeken, op 03 689 90 65 — dan zien we meteen wat er vrij staat en wat u nodig hebt.",
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
        a: "Pomp of veeg het staande water weg en haal alles eruit wat volgezogen is: tapijt, isolatie, karton, spaanplaat. Zet daarna geen verwarming op volle kracht, dat jaagt het vocht alleen de muren in. Bel ons zodra het leeg is — op vochtig materiaal begint schimmel na 24 tot 48 uur, dus de eerste dag is de belangrijkste.",
      },
      {
        q: "Komen jullie ook 's avonds of in het weekend bij wateroverlast?",
        a: "Onze leveringen lopen op weekdagen tussen 08:00 en 17:00. Bij grote wateroverlast kijken we wat er die dag nog kan; bel dan op 03 689 90 65 in plaats van online te boeken, zodat we meteen zien wat er vrij staat. De toestellen zelf draaien wel gewoon door in het weekend — drogen stopt niet omdat het zaterdag is.",
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
      { key: "ttv4500", waarom: "In een smalle, diepe plattegrond met gesloten kamers is dit vaak effectiever dan een tweede droger — en goedkoper." },
      { key: "teddh30", waarom: "Voor de kelder onder de voorkamer, die in de winter zelden boven tien graden komt." },
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
        a: "Qua capaciteit vaak wel, qua verdeling meestal niet. In een smalle, diepe woning met gesloten kamers droogt het toestel vooral de ruimte waar het staat. Een ventilator erbij die de droge lucht naar achter stuurt, is doorgaans effectiever dan een tweede droger — en goedkoper. De Calculator houdt daar rekening mee.",
      },
      {
        q: "Is een bouwdroger stil genoeg om in te blijven wonen?",
        a: "Een Small bouwdroger zit rond 48 dB, ongeveer een koelkast in dezelfde kamer. Dat is prima om mee te leven overdag en in de meeste gevallen ook 's nachts. Staat hij boven een slaapkamer, zet hem dan op een tegelvloer en niet op plankenvloer — die draagt het gebrom door het hele huis.",
      },
      {
        q: "Waar zet ik het toestel het best neer?",
        a: "Midden in de ruimte als het kan, met minstens een halve meter vrij rondom, en niet pal tegen een muur of in een hoek — het toestel moet lucht kunnen aanzuigen én uitblazen. Niet in een kast of achter een deur. Staat het op een natte chape, zet het dan op een plankje, en richt de ventilator langs de vloer in plaats van er recht op.",
      },
      {
        q: "Is een bouwdroger stil genoeg om in te blijven wonen?",
        a: "Een Small bouwdroger zit rond 48 dB, ongeveer een koelkast in dezelfde kamer. Dat is prima om mee te leven overdag en in de meeste gevallen ook 's nachts. Staat hij boven een slaapkamer, zet hem dan op een tegelvloer en niet op een plankenvloer — die draagt het gebrom door het hele huis.",
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
