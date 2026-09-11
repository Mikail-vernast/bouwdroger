/**
 * De inhoud van de vijf regiopagina's (/bouwdroger-huren-<regio>).
 *
 * Waarom deze pagina's bestaan: Search Console toonde in september 2026 dat de
 * site verschijnt op "bouwdroger aalst", "bouwdroger huren antwerpen" en
 * "bouwdroger west-vlaanderen", maar zonder één pagina die zo'n zoekopdracht
 * beantwoordt. De concurrenten die wél ranken hebben per regio een pagina.
 *
 * Elke regio heeft zijn eigen tekst. Dat is geen stijlkeuze maar de reden dat
 * zulke pagina's werken: vijf keer dezelfde tekst met een andere plaatsnaam
 * erin is voor Google één pagina met vier kopieën, en de kopieën worden
 * weggefilterd. Wat verschilt is dus wat er in die streek gebouwd wordt, welk
 * toestel daar het vaakst past, hoe ver het van het magazijn is, en welke
 * werven we er al gedroogd hebben.
 *
 * Cijfers komen uit dezelfde bronnen als de rest van de site: dagprijzen uit
 * `PRODUCTS` (het portaal), de laddertoeslag en de pompprijs uit
 * `TARIEVEN.pricing`, de leveringsvoorwaarde uit `DELIVERY`. Rijtijden zijn
 * afgerond en vanuit het magazijn in Aartselaar; ze staan er als indicatie,
 * niet als belofte — de belofte is "binnen 24 uur", en die is overal gelijk.
 */
import { REGIO_ROUTES, type RegioRoute } from "./regio-slugs.js";
import { REALISATIES } from "./realisaties.js";
import { TARIEVEN } from "./tarieven.js";
import { PRODUCTS } from "./verhuur.js";

export interface RegioFaq {
  q: string;
  a: string;
}

export interface RegioToestel {
  /** Sleutel in `PRODUCTS`, tevens de slug van /verhuur/toestel/<key>. */
  key: string;
  /** Waarom dit toestel hier het vaakst past — één of twee zinnen. */
  waarom: string;
}

export interface RegioFeit {
  label: string;
  waarde: string;
}

export interface Regio extends RegioRoute {
  /** ≤ 60 tekens, zoekwoord vooraan. */
  title: string;
  /** 120–160 tekens. */
  description: string;
  h1: string;
  kicker: string;
  /** De alinea's onder de H1. */
  intro: string[];
  /** Een greep uit de gemeenten — ook op de homepage-kaart. */
  towns: string[];
  /** Positie van de speld op de kaart van Vlaanderen (homepage). */
  pin: { left: string; top: string };
  /** Wat er in deze streek gebouwd en gedroogd wordt. */
  bouw: { kop: string; alineas: string[] };
  toestellen: { kop: string; items: RegioToestel[] };
  levering: { kop: string; alineas: string[]; feiten: RegioFeit[] };
  afhalen: { kop: string; alineas: string[] };
  faq: RegioFaq[];
  realisaties: { kop: string; intro: string; slugs: string[] };
  /** `areaServed` van de Service-schema. */
  areaServed: Record<string, unknown>;
}

const LADDER = TARIEVEN.pricing.ladder_fee;
const POMP = TARIEVEN.pricing.pump_price_per_day;
const AFHAALKORTING = 25;

const euro = (n: number) => `€ ${n.toLocaleString("nl-BE")}`;
const dag = (key: string) => euro(PRODUCTS[key].day);

const provincie = (name: string) => ({
  "@type": "AdministrativeArea",
  name,
  containedInPlace: { "@type": "Country", name: "België" },
});

const route = (slug: string): RegioRoute => {
  const r = REGIO_ROUTES.find((x) => x.slug === slug);
  if (!r) throw new Error(`Onbekende regio: ${slug}`);
  return r;
};

export const REGIOS: Regio[] = [
  /* ------------------------------------------------------------------ */
  {
    ...route("antwerpen"),
    title: "Bouwdroger huren in Antwerpen — geleverd in 24 u | Vernast",
    description:
      "Bouwdroger huren in Antwerpen en de rand: binnen 24 uur geleverd en geplaatst vanuit Aartselaar, of zelf afhalen met € 25 korting. Eén dagprijs, geen waarborg.",
    h1: "Bouwdroger huren in Antwerpen",
    kicker: "Stad en rand · magazijn op 15 minuten",
    intro: [
      "Ons magazijn staat in Aartselaar, langs de A12 — een kwartier van de Antwerpse ring. Dat maakt de provincie Antwerpen de streek waar we het snelst staan en het vaakst rijden: van een appartement in Zurenborg tot een nieuwbouwvilla in Schilde. Wie vóór de middag boekt, heeft de toestellen doorgaans de volgende werkdag draaien.",
      "U huurt geen losse machine maar een berekend droogpakket: onze technieker levert, plaatst, sluit de condensafvoer aan en stelt de streefvochtigheid in. Liever zelf rijden? Aartselaar ligt voor de meeste Antwerpenaren dichter dan de eerste wegenwerken.",
    ],
    towns: [
      "Antwerpen", "Aartselaar", "Mechelen", "Turnhout", "Lier", "Boom", "Kontich", "Geel", "Mol",
      "Herentals", "Heist-op-den-Berg", "Brasschaat", "Schoten", "Wilrijk", "Edegem", "Duffel",
    ],
    pin: { left: "42%", top: "12%" },
    bouw: {
      kop: "Wat we in Antwerpen drogen: veel renovatie, weinig ruimte",
      alineas: [
        "De stad Antwerpen bouwt vooral óm: de negentiende-eeuwse gordel van Berchem, Borgerhout en Zurenborg wordt huis per huis gerenoveerd, en dat betekent nieuw pleisterwerk in bewoonde straten, kelders die na een verbouwing plots vochtig blijken, en appartementen waar een chape moet drogen terwijl de buren onder u gewoon thuis zijn. Dat vraagt om compacte toestellen die op één stopcontact draaien, stil genoeg zijn voor een bewoond gebouw en via de trap naar boven kunnen.",
        "In de rand — Kontich, Edegem, Schilde, Brasschaat, Boom — zien we het omgekeerde: nieuwbouw op een ruime kavel, met een volledige gelijkvloerse chape en pleisterwerk over twee verdiepingen. Daar draaien meerdere toestellen tegelijk, verdeeld over droogzones, en is de vraag vooral hoe snel de vloerder kan starten. Verder in de Kempen (Turnhout, Geel, Mol, Herentals) komen daar de winterwerven bij: onverwarmde ruwbouw waar een condensdroger alleen te weinig rendement haalt zonder bijverwarming.",
        "De Schelde en het Antwerpse rioolstelsel zorgen voor een derde categorie: waterschade in kelders na een hevige bui of een lek. Daar telt elk uur, en daar helpt het dat we vanuit Aartselaar in de stad staan vóór de verzekeringsexpert er is.",
      ],
    },
    toestellen: {
      kop: "Welke bouwdroger past het vaakst bij een Antwerpse werf",
      items: [
        {
          key: "ttk170",
          waarom: `Het toestel voor de stad: één kamer, een appartement of een badkamerrenovatie. Compact genoeg voor een Antwerpse trap en zuinig op een gewoon stopcontact. Vanaf ${dag("ttk170")} per dag.`,
        },
        {
          key: "ttk350",
          waarom: `Onze standaard voor een rijwoning of een nieuwbouw in de rand: 70 liter per dag en een bereik tot 400 m³, dus één toestel per bouwlaag volstaat meestal. Vanaf ${dag("ttk350")} per dag.`,
        },
        {
          key: "teddh30",
          waarom: `Voor de Kempense winterwerf en de koude Antwerpse kelder. Onder 15 °C zakt het rendement van elke condensdroger; deze kachel brengt de ruimte op werkingstemperatuur. Vraagt 400 V. Vanaf ${dag("teddh30")} per dag.`,
        },
      ],
    },
    levering: {
      kop: "Leveren in Antwerpen: de volgende werkdag, geplaatst en ingesteld",
      alineas: [
        "Levering, installatie en ophaling zitten in de prijs van elk droogpakket — ook in de stad. U krijgt een leverdatum en een tijdslot, de technieker stuurt een sms wanneer hij vertrekt, en bij aankomst meet hij eerst het startvochtgehalte. Pas als alles draait en u de korte uitleg hebt gehad, rijdt hij weg.",
        `Antwerpen heeft één eigenheid: verdiepingen zonder trap. In een appartementsgebouw met lift of een woning met vaste trap is elke verdieping inbegrepen. Moeten de toestellen via een ladder naar boven — typisch bij een casco-verbouwing waar de trap nog niet zit — dan rekenen we ${euro(LADDER)} per verdieping en willen we dat vooraf weten, zodat we met twee man komen.`,
      ],
      feiten: [
        { label: "Levering en installatie", waarde: "Inbegrepen in het droogpakket" },
        { label: "Levertermijn", waarde: "Binnen 24 uur, meestal de volgende werkdag" },
        { label: "Rijtijd vanuit ons magazijn", waarde: "15 tot 40 minuten (Aartselaar–stad–Kempen)" },
        { label: "Verdieping via ladder", waarde: `${euro(LADDER)} per verdieping, vooraf melden` },
        { label: "Condenspomp (aangeraden)", waarde: `${euro(POMP)} per bouwdroger per dag` },
      ],
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar, langs de A12",
      alineas: [
        `Voor losse toestellen is afhalen in Antwerpen de logische keuze: ons afhaalpunt ligt aan de Boomsesteenweg 12, Unit 11 in Aartselaar, vlak aan de afrit van de A12. U reserveert online, kiest een afhaalmoment tussen 07:30 en 17:00, en de toestellen staan klaar aan de poort. Wie afhaalt krijgt ${euro(AFHAALKORTING)} korting op de huurprijs.`,
        "Eén regel die in de stad vaak vergeten wordt: vervoer een bouwdroger rechtop. Plat in de koffer van een stadsauto beschadigt de compressor; toch plat vervoerd, laat het toestel dan 24 uur rechtop staan voor u het inschakelt.",
      ],
    },
    faq: [
      {
        q: "Wat kost de levering van een bouwdroger in Antwerpen?",
        a: "Niets extra. Levering, plaatsing en ophaling zitten in de prijs van elk droogpakket, ook in de stad Antwerpen en de districten. Alleen wanneer toestellen via een ladder naar een verdieping moeten, rekenen we een toeslag per verdieping; via trap of lift is elke verdieping inbegrepen.",
      },
      {
        q: "Hoe snel kunnen jullie in Antwerpen leveren?",
        a: "Binnen 24 uur. Ons magazijn ligt in Aartselaar, op een kwartier van de ring, dus wie vóór de middag boekt heeft de opstelling doorgaans de volgende werkdag draaien. Bij waterschade bellen we u meteen terug om dezelfde dag nog te kijken wat mogelijk is.",
      },
      {
        q: "Wie plaatst de bouwdroger in mijn appartement?",
        a: "Een Vernast-technieker. Hij verdeelt de toestellen over de ruimtes, sluit de condensafvoer aan op een lavabo of douche zodat u geen reservoirs hoeft te legen, controleert de stroomkringen en stelt de streefvochtigheid in. U hoeft niets te tillen; via trap of lift dragen wij alles naar boven.",
      },
      {
        q: "Werkt een bouwdroger ook in een koude Antwerpse kelder in de winter?",
        a: "Alleen als de kelder warm genoeg is. Onder 15 °C haalt een condensdroger nog maar een fractie van zijn capaciteit. Voor kelders en onverwarmde nieuwbouw in de Kempen combineren we de droger daarom met een elektrische kachel op 400 V, zodat de ruimte eerst op temperatuur komt. Onze technieker controleert de aansluiting bij de levering.",
      },
    ],
    realisaties: {
      kop: "Werven die we in en rond Antwerpen droogden",
      intro: "Drie projecten uit de provincie, elk met de foto's van de werf zelf.",
      slugs: ["mnr-w-antwerpen", "mevr-j-j-kontich", "dhr-e-schilde"],
    },
    areaServed: provincie("Antwerpen"),
  },

  /* ------------------------------------------------------------------ */
  {
    ...route("oost-vlaanderen"),
    title: "Bouwdroger huren in Oost-Vlaanderen: Gent, Aalst | Vernast",
    description:
      "Bouwdroger huren in Oost-Vlaanderen: Gent, Aalst, Sint-Niklaas en het Waasland. Binnen 24 uur geleverd en geplaatst, ophaling inbegrepen. Eén vaste dagprijs.",
    h1: "Bouwdroger huren in Oost-Vlaanderen",
    kicker: "Gent · Aalst · Sint-Niklaas · Dendermonde",
    intro: [
      "Oost-Vlaanderen is de tweede provincie waar we het vaakst rijden, en de eerste waar Google ons al toonde voor we er een pagina over hadden: \"bouwdroger aalst\" en \"bouwdroger oost-vlaanderen\" waren zoekopdrachten waarop deze site verscheen zonder één regel tekst erover. Bij deze.",
      "Vanuit Aartselaar is het Waasland een halfuur, Gent en Aalst rond de vijftig minuten. Elk droogpakket komt geleverd, geplaatst en ingesteld; levering en ophaling zijn in de prijs begrepen. Wie in het Waasland woont, kan ook zelf afhalen — de A12 en de E17 brengen u in twintig minuten aan onze poort.",
    ],
    towns: [
      "Gent", "Aalst", "Sint-Niklaas", "Dendermonde", "Lokeren", "Wetteren", "Deinze", "Eeklo",
      "Ninove", "Geraardsbergen", "Oudenaarde", "Ronse", "Zottegem", "Temse", "Beveren", "Zelzate",
    ],
    pin: { left: "24%", top: "25%" },
    bouw: {
      kop: "Wat we in Oost-Vlaanderen drogen: verkavelingen, Gentse rijhuizen en natte kelders langs Schelde en Dender",
      alineas: [
        "Tussen Aalst, Dendermonde en Sint-Niklaas wordt meer nieuw gebouwd dan bijna overal in Vlaanderen: verkavelingen met halfopen en open woningen, waar de chape van het hele gelijkvloers in één keer gelegd wordt. Een gemiddelde nieuwbouw zet daarbij zo'n 1.500 liter water in de constructie. Zonder bouwdroger duurt het maanden vóór de vloerder mag starten; met een pakket van twee of drie toestellen zijn dat weken. Hier komt het meest gehuurde toestel van ons gamma bijna altijd in aanmerking.",
        "Gent is een ander verhaal. De rijhuizen van de Brugse Poort, Ledeberg en Sint-Amandsberg worden verbouwd in smalle, diepe percelen met weinig daglicht en soms een kelder onder het straatniveau. Nieuw pleisterwerk droogt daar slecht op eigen kracht, en een kelder die na de verbouwing muf blijft, is er de regel. Kleinere toestellen per ruimte werken hier beter dan één grote in de gang.",
        "Langs de Schelde, de Dender en de Durme — Lokeren, Berlare, Wetteren, Temse — staat het grondwater hoog en komt waterschade in kelders en bergingen terug bij elke natte periode. Twee van onze Oost-Vlaamse realisaties hieronder zijn precies dat: een keldermuurlek in Lokeren en een berging in Berlare.",
      ],
    },
    toestellen: {
      kop: "Welke bouwdroger het vaakst past in Oost-Vlaanderen",
      items: [
        {
          key: "ttk350",
          waarom: `De standaard voor een nieuwbouwwoning in een verkaveling rond Aalst of Sint-Niklaas: 70 liter per dag, bereik tot 400 m³, en pompklaar zodat het condenswater rechtstreeks naar de afvoer loopt. Vanaf ${dag("ttk350")} per dag.`,
        },
        {
          key: "ttk650",
          waarom: `Voor de grote open bebouwing en voor waterschade waar het snel moet gaan: 90 liter per dag en een bereik tot 600 m³. Eén toestel dekt een volledig gelijkvloers. Vanaf ${dag("ttk650")} per dag.`,
        },
        {
          key: "ttv4500",
          waarom: `De axiaalventilator die in een Gents rijhuis het verschil maakt: hij duwt de droge lucht tot in de achterbouw en de kelder, waar een droger alleen niet komt. Vanaf ${dag("ttv4500")} per dag.`,
        },
      ],
    },
    levering: {
      kop: "Leveren in Oost-Vlaanderen: één rit, alles geplaatst",
      alineas: [
        "Wij leveren in de hele provincie, van Zelzate tot Ronse, binnen 24 uur na uw boeking. De rit vanuit Aartselaar is langer dan in Antwerpen, dus we plannen Oost-Vlaamse leveringen in rondes: één technieker rijdt het Waasland en de Denderstreek af, een andere Gent en het Meetjesland. U merkt daar niets van behalve een precies tijdslot.",
        "Bij de installatie verdelen we de toestellen over droogzones en sluiten we, als u de condenspomp koos, de afvoer aan. In een verkaveling is dat meestal een vloerput of de aansluiting van de toekomstige wasmachine; in een Gents rijhuis vaker een lavabo op de verdieping. Ophaling na de huurperiode zit in de prijs — u belt of mailt wanneer de vochtmeting goed zit, en wij komen de toestellen halen.",
      ],
      feiten: [
        { label: "Levering en installatie", waarde: "Inbegrepen in het droogpakket" },
        { label: "Levertermijn", waarde: "Binnen 24 uur, in de hele provincie" },
        { label: "Rijtijd vanuit ons magazijn", waarde: "25 minuten (Sint-Niklaas) tot 70 minuten (Ronse, Eeklo)" },
        { label: "Verdieping via ladder", waarde: `${euro(LADDER)} per verdieping, vooraf melden` },
        { label: "Condenspomp (aangeraden)", waarde: `${euro(POMP)} per bouwdroger per dag` },
      ],
    },
    afhalen: {
      kop: "Afhalen vanuit het Waasland: twintig minuten over de E17 en de A12",
      alineas: [
        `Woont u in Sint-Niklaas, Temse, Beveren of Lokeren, dan is ons magazijn in Aartselaar dichterbij dan Gent. Losse toestellen haalt u er zelf af tegen lagere afhaalprijzen, met ${euro(AFHAALKORTING)} korting op de huurprijs, elke werkdag op een gereserveerd moment tussen 07:30 en 17:00. Vanuit Gent of Aalst is het een uur rijden — dan is laten leveren doorgaans de betere rekensom, want die rit zit al in het pakket.`,
      ],
    },
    faq: [
      {
        q: "Rekenen jullie een leveringskost aan voor Gent of Aalst?",
        a: "Nee. Levering, installatie en ophaling zijn in de prijs van het droogpakket begrepen, ongeacht of de werf in Beveren of in Ronse ligt. De enige toeslag die kan bijkomen is de laddertoeslag wanneer toestellen naar een verdieping zonder trap moeten.",
      },
      {
        q: "Hoe snel staan jullie in Oost-Vlaanderen?",
        a: "Binnen 24 uur na uw boeking. Het Waasland rijden we in een halfuur, Gent en de Denderstreek in ongeveer vijftig minuten. Boekt u vóór de middag, dan plannen we doorgaans de volgende werkdag; bij waterschade bellen we meteen terug om te kijken of het dezelfde dag nog lukt.",
      },
      {
        q: "Wie plaatst de bouwdroger op mijn werf in de verkaveling?",
        a: "Een technieker van Vernast. Hij meet eerst het startvochtgehalte, verdeelt de toestellen over de droogzones, sluit de condensafvoer aan op een vloerput of wasmachineaansluiting en stelt de streefwaarde in. U hoeft niets te tillen of in te stellen, en u krijgt uitleg over welke deuren open of dicht blijven.",
      },
      {
        q: "Wat als het vriest tijdens de droging van mijn chape?",
        a: "Dan verwarmen we mee. Een condensdroger verliest onder 15 °C het grootste deel van zijn rendement, dus in een onverwarmde nieuwbouw in de winter zetten we er een elektrische kachel bij die de ruimte op werkingstemperatuur houdt. Ramen dicht, kachel aan, droger aan — dat is de volgorde.",
      },
    ],
    realisaties: {
      kop: "Werven die we in Oost-Vlaanderen droogden",
      intro: "Twee waterschadedossiers langs de Durme en de Schelde, met de foto's van de werf.",
      slugs: ["mevr-b-a-lokeren", "mevr-a-r-berlare"],
    },
    areaServed: provincie("Oost-Vlaanderen"),
  },

  /* ------------------------------------------------------------------ */
  {
    ...route("vlaams-brabant"),
    title: "Bouwdroger huren in Vlaams-Brabant: Leuven, Halle | Vernast",
    description:
      "Bouwdroger huren in Vlaams-Brabant, van Leuven tot Halle en de Brusselse rand. Binnen 24 uur geleverd en geplaatst vanuit Aartselaar, ophaling inbegrepen.",
    h1: "Bouwdroger huren in Vlaams-Brabant",
    kicker: "Leuven · Vilvoorde · Halle · Aarschot · de Brusselse rand",
    intro: [
      "Vlaams-Brabant ligt voor ons letterlijk op de weg: de A12 vanuit Aartselaar komt in Vilvoorde uit, en vandaar is het een halfuur naar Leuven, Halle of Aarschot. De hele provincie, van het Pajottenland tot het Hageland, leveren we binnen 24 uur — de Brusselse rand meestal dezelfde dag als de aanvraag vóór de middag binnenkomt.",
      "Ook hier huurt u een berekend droogpakket, geen losse machine: onze technieker plaatst, sluit de afvoer aan en stelt de opstelling in. Levering en ophaling zijn inbegrepen; de dagprijs blijft dezelfde hoe lang u ook huurt.",
    ],
    towns: [
      "Leuven", "Vilvoorde", "Halle", "Aarschot", "Tienen", "Zaventem", "Dilbeek", "Grimbergen",
      "Diest", "Asse", "Overijse", "Tervuren", "Machelen", "Beersel", "Sint-Pieters-Leeuw", "Haacht",
    ],
    pin: { left: "44%", top: "40%" },
    bouw: {
      kop: "Wat we in Vlaams-Brabant drogen: villa's in de rand, studentenkamers in Leuven, nieuwbouw in het Hageland",
      alineas: [
        "De Brusselse rand — Zaventem, Tervuren, Overijse, Dilbeek, Asse — is villagebied van de jaren zestig tot tachtig, en die villa's worden nu één voor één grondig gerenoveerd: nieuw pleisterwerk over drie bouwlagen, een nieuwe chape op het gelijkvloers en vaak een kelder die het hele volume van de woning beslaat. Dat zijn grote luchtvolumes; hier plaatsen we eerder twee middelgrote toestellen per bouwlaag dan één klein, en vrijwel altijd met een ventilator om de droge lucht tot in de verste kamer te krijgen.",
        "Leuven bouwt in de hoogte en in de diepte: studentenhuizen die per kamer worden verbouwd, appartementsprojecten aan de Vaartkom en oude stadswoningen met een gewelfde kelder. Per ruimte een compact toestel is daar de regel, en de condenspomp is er geen luxe — een reservoir legen in een studentenhuis doet niemand.",
        "Het Hageland (Aarschot, Diest, Tienen) en het Pajottenland (Halle, Ninove-kant) zijn de streken waar het meest nieuw gebouwd wordt, op leem- en zandleembodems die traag water afgeven. Een gelijkvloerse chape droogt er zonder hulp opvallend traag; met een bouwdroger volgt de vloerder weken vroeger. In de winter hoort daar bijverwarming bij.",
      ],
    },
    toestellen: {
      kop: "Welke bouwdroger het vaakst past in Vlaams-Brabant",
      items: [
        {
          key: "ttk350",
          waarom: `Per bouwlaag van een villa in de rand of per gelijkvloers van een Hagelandse nieuwbouw: 70 liter per dag, tot 400 m³. Dit is het toestel dat we het vaakst naar Vlaams-Brabant rijden. Vanaf ${dag("ttk350")} per dag.`,
        },
        {
          key: "ttk650",
          waarom: `Voor de grote volumes: een kelder onder de hele villa, een open gelijkvloers met vide, of een appartementsproject waar meerdere units tegelijk drogen. 90 liter per dag, tot 600 m³. Vanaf ${dag("ttk650")} per dag.`,
        },
        {
          key: "radiaal2250",
          waarom: `De radiaalventilator, in een villa met lange gangen en een verdieping onder het dak: hij blaast gericht en ver, waar de droger zelf niet komt. Vanaf ${dag("radiaal2250")} per dag.`,
        },
      ],
    },
    levering: {
      kop: "Leveren in Vlaams-Brabant: via de A12 en de ring, binnen 24 uur",
      alineas: [
        "De technieker rijdt vanuit Aartselaar over de A12 naar Vilvoorde en verdeelt van daaruit: de rand en Leuven in een ochtendronde, Halle en het Pajottenland of het Hageland in de namiddag. U krijgt een tijdslot en een sms een halfuur vooraf, zodat u niet de hele dag hoeft te wachten.",
        `In een villa met drie bouwlagen dragen we alles via de trap naar boven zonder meerkost. Zit de trap er nog niet — bij een casco-verbouwing komt dat voor — dan geldt de laddertoeslag van ${euro(LADDER)} per verdieping; meld het bij de boeking, dan komen we met twee. Bij de opstart bespreken we welke ramen en deuren open of dicht blijven en hoe u de reservoirs leegt als u geen condenspomp nam.`,
      ],
      feiten: [
        { label: "Levering en installatie", waarde: "Inbegrepen in het droogpakket" },
        { label: "Levertermijn", waarde: "Binnen 24 uur; de Brusselse rand vaak dezelfde dag" },
        { label: "Rijtijd vanuit ons magazijn", waarde: "25 minuten (Vilvoorde) tot 60 minuten (Tienen, Halle)" },
        { label: "Verdieping via ladder", waarde: `${euro(LADDER)} per verdieping, vooraf melden` },
        { label: "Condenspomp (aangeraden)", waarde: `${euro(POMP)} per bouwdroger per dag` },
      ],
    },
    afhalen: {
      kop: "Afhalen vanuit Vlaams-Brabant: halfweg tussen Brussel en Antwerpen",
      alineas: [
        `Ons afhaalpunt in Aartselaar ligt aan de A12, precies halfweg tussen Antwerpen en Brussel. Vanuit Vilvoorde, Grimbergen of Machelen bent u er in twintig minuten, en dat maakt afhalen voor losse toestellen een reële optie: ${euro(AFHAALKORTING)} korting op de huurprijs, lagere afhaaltarieven en een gereserveerd afhaalmoment. Vanuit Leuven of het Hageland is het een uur — dan laat u beter leveren, die rit zit toch al in het pakket.`,
      ],
    },
    faq: [
      {
        q: "Wat kost de levering van een bouwdroger in Leuven of de Brusselse rand?",
        a: "Niets bovenop het droogpakket: levering, plaatsing en ophaling zijn inbegrepen, ook in Leuven, Zaventem of Halle. Alleen een verdieping zonder trap of lift — waar de toestellen via een ladder naar boven moeten — brengt een toeslag per verdieping mee.",
      },
      {
        q: "Hoe snel leveren jullie in Vlaams-Brabant?",
        a: "Binnen 24 uur na uw boeking. De Brusselse rand ligt op een halfuur van ons magazijn via de A12, dus een aanvraag vóór de middag plannen we vaak nog dezelfde dag in. Leuven, Tienen en Halle zijn een uur rijden en staan doorgaans de volgende werkdag op de planning.",
      },
      {
        q: "Wie plaatst de bouwdrogers in een villa met drie verdiepingen?",
        a: "Onze technieker, en hij draagt ze ook naar boven. Hij verdeelt de toestellen per bouwlaag, plaatst waar nodig een ventilator om de lange gangen te bereiken, sluit de condensafvoer aan en stelt elke droger in. Voor een villa met een grote kelder komt hij meestal met een groter pakket dan de calculator voor één bouwlaag berekent — dat overlegt hij vooraf.",
      },
      {
        q: "Kan ik in de winter drogen in een onverwarmde nieuwbouw in het Hageland?",
        a: "Ja, met bijverwarming. Onder 15 °C werkt een condensdroger nauwelijks; op een winterwerf in Aarschot of Diest zetten we er een elektrische kachel op 400 V bij die de ruimte op temperatuur brengt, en pas dan haalt de droger zijn capaciteit. Onze technieker controleert bij de levering of uw werfkast krachtstroom heeft.",
      },
    ],
    realisaties: {
      kop: "Werven die we in Brussel en de rand droogden",
      intro: "Twee projecten aan de Brusselse kant van de provinciegrens — dezelfde bouwtypes als in Tervuren of Zaventem, met de foto's van de werf.",
      slugs: ["mevr-g-b-sint-pieters-woluwe", "mnr-s-brussel"],
    },
    areaServed: provincie("Vlaams-Brabant"),
  },

  /* ------------------------------------------------------------------ */
  {
    ...route("west-vlaanderen"),
    title: "Bouwdroger huren in West-Vlaanderen: Brugge, kust | Vernast",
    description:
      "Bouwdroger huren in West-Vlaanderen: Brugge, Kortrijk en de kust. Binnen 24 uur geleverd en geplaatst, ophaling inbegrepen. Berekend op zeelucht en polders.",
    h1: "Bouwdroger huren in West-Vlaanderen",
    kicker: "Brugge · Kortrijk · Oostende · Roeselare · de kust",
    intro: [
      "West-Vlaanderen is de verste provincie vanuit ons magazijn, en toch een van de drukste in onze planning. Dat komt door de kust: appartementen die in het naseizoen gerenoveerd worden, stormschade, en een luchtvochtigheid die er structureel hoger ligt dan in het binnenland. Google toonde ons al op \"bouwdroger west-vlaanderen\" op de vierde plaats; deze pagina is het antwoord dat daar nog ontbrak.",
      "We leveren in de hele provincie binnen 24 uur, geplaatst en ingesteld. De rit vanuit Aartselaar over de E17 en de E40 duurt een uur tot anderhalf, en die zit in de prijs van het droogpakket — net als de ophaling na afloop.",
    ],
    towns: [
      "Brugge", "Kortrijk", "Oostende", "Roeselare", "Ieper", "Waregem", "Knokke-Heist", "Veurne",
      "Torhout", "Menen", "Izegem", "Diksmuide", "Blankenberge", "Poperinge", "Tielt", "Harelbeke",
    ],
    pin: { left: "8%", top: "34%" },
    bouw: {
      kop: "Wat we in West-Vlaanderen drogen: kustappartementen, Brugse kelders en polderwoningen",
      alineas: [
        "Aan de kust — Oostende, Knokke-Heist, Blankenberge, De Panne — draait alles rond appartementen. Ze worden gerenoveerd in het najaar en het voorjaar, tussen de verhuurseizoenen in, en het pleisterwerk moet droog zijn vóór de eerste huurders komen. Het probleem is de buitenlucht: met een relatieve vochtigheid die aan zee zelden onder de 80 % zakt, droogt een appartement met de ramen open helemaal niet. Ramen dicht en een droger die groot genoeg is om tegen die zeelucht in te werken — dat is hier het recept, en het verklaart waarom we naar de kust vaker ons grootste toestel rijden dan elders.",
        "Brugge en het Brugse Ommeland hebben iets anders: historische panden met kelders onder het waterpeil van de reien, en een mancave of berging die na elke natte winter muf ruikt. Onze realisatie in Brugge hieronder is zo'n kelder, inclusief de schimmelsanering die erbij hoorde. In die koude, lage ruimtes haalt een condensdroger weinig; daar komt de adsorptiedroger in beeld, die ook onder 10 °C blijft werken.",
        "In de polders tussen Veurne, Diksmuide en Nieuwpoort staat het grondwater hoog en zijn de nieuwbouwwoningen ruim en vrijstaand. Verder landinwaarts, rond Kortrijk, Roeselare en Waregem, zien we de bedrijfsgebouwen en loodsen: grote vloeroppervlakken, één betonvloer, en een bouwschema dat geen weken vertraging verdraagt.",
      ],
    },
    toestellen: {
      kop: "Welke bouwdroger het vaakst past in West-Vlaanderen",
      items: [
        {
          key: "ttk650",
          waarom: `Het toestel voor de kust: 90 liter per dag en een bereik tot 600 m³, genoeg om tegen de zeelucht in een volledig appartement of een loods droog te krijgen. Vanaf ${dag("ttk650")} per dag.`,
        },
        {
          key: "revolution",
          waarom: `De adsorptiedroger voor de Brugse kelder en de onverwarmde polderwoning in de winter: werkt via slangen en blijft drogen waar een condensdroger stilvalt. We hebben er één, dus reserveer tijdig. Vanaf ${dag("revolution")} per dag.`,
        },
        {
          key: "ttk350",
          waarom: `Voor de gewone nieuwbouw in Roeselare of Tielt en voor een kleiner kustappartement: 70 liter per dag, tot 400 m³, pompklaar. Vanaf ${dag("ttk350")} per dag.`,
        },
      ],
    },
    levering: {
      kop: "Leveren aan de kust en in het binnenland: binnen 24 uur, met de E40 als ruggengraat",
      alineas: [
        "Voor West-Vlaanderen plannen we vaste ritten: de technieker vertrekt 's ochtends vanuit Aartselaar, rijdt over de E17 naar Kortrijk en Roeselare of over de E40 naar Brugge en de kust, en levert onderweg meerdere werven. U krijgt daardoor een tijdslot in plaats van een hele dag, en een sms wanneer hij bij de vorige klant vertrekt.",
        `Aan de kust is de vraag altijd dezelfde: hoe krijgen we de toestellen op de zevende verdieping? Met de lift, zonder meerkost. In een appartementsgebouw in renovatie waar de lift buiten dienst is, dragen we via de trap, ook zonder meerkost; alleen als het via een ladder moet rekenen we ${euro(LADDER)} per verdieping. De condensafvoer sluiten we in een appartement meestal aan op de douche.`,
      ],
      feiten: [
        { label: "Levering en installatie", waarde: "Inbegrepen in het droogpakket" },
        { label: "Levertermijn", waarde: "Binnen 24 uur, in vaste ritten over E17 en E40" },
        { label: "Rijtijd vanuit ons magazijn", waarde: "70 minuten (Kortrijk) tot 100 minuten (De Panne)" },
        { label: "Verdieping via ladder", waarde: `${euro(LADDER)} per verdieping, vooraf melden` },
        { label: "Condenspomp (aangeraden)", waarde: `${euro(POMP)} per bouwdroger per dag` },
      ],
    },
    afhalen: {
      kop: "Afhalen vanuit West-Vlaanderen: kan, maar laten leveren is meestal slimmer",
      alineas: [
        `Ons afhaalpunt ligt in Aartselaar, aan de A12 bij Antwerpen. Vanuit Kortrijk is dat een uur, vanuit Oostende bijna twee. Voor één los toestel dat u een maand houdt kan dat lonen — u krijgt ${euro(AFHAALKORTING)} korting op de huurprijs en de lagere afhaaltarieven — maar voor een volledig droogpakket zit de rit al in de prijs en plaatst onze technieker alles meteen. Haalt u toch af: vervoer de droger rechtop en laat hem 24 uur staan als hij toch plat gelegen heeft.`,
      ],
    },
    faq: [
      {
        q: "Rekenen jullie een leveringskost aan voor de kust of voor Kortrijk?",
        a: "Nee. Ook voor West-Vlaanderen zijn levering, installatie en ophaling in de prijs van het droogpakket begrepen. De afstand vanuit Aartselaar verrekenen we niet; de enige mogelijke toeslag is die voor een verdieping zonder trap of lift.",
      },
      {
        q: "Hoe snel kunnen jullie in West-Vlaanderen zijn?",
        a: "Binnen 24 uur. Omdat de rit een uur tot anderhalf duurt, rijden we West-Vlaanderen in vaste rondes: boekt u vóór de middag, dan staat uw werf doorgaans de volgende ochtend op de rit. Bij stormschade of een lek aan de kust bellen we meteen terug om te zien wat de snelste optie is.",
      },
      {
        q: "Wie plaatst de bouwdroger in mijn appartement aan zee?",
        a: "Een Vernast-technieker. Hij neemt de toestellen mee naar boven, verdeelt ze over de kamers, sluit de condensafvoer aan op de douche zodat u niets hoeft te legen, en stelt de streefvochtigheid in. Hij zegt u ook welke ramen dicht blijven — aan zee is dat het belangrijkste advies van allemaal.",
      },
      {
        q: "Droogt een bouwdroger wel bij zeelucht en in een koude Brugse kelder?",
        a: "Bij zeelucht ja, op voorwaarde dat de ramen dicht blijven en het toestel groot genoeg is; daarom kiezen we aan de kust vaker de grootste condensdroger. In een koude kelder onder 15 °C werkt een condensdroger slecht: daar zetten we de adsorptiedroger in, die ook bij lage temperaturen blijft drogen, of een kachel om de ruimte eerst op te warmen.",
      },
    ],
    realisaties: {
      kop: "Werven die we in West-Vlaanderen droogden",
      intro: "Een villa in Oostende na het pleisterwerk en een kelder in Brugge na schimmel — met de foto's van de werf.",
      slugs: ["mnr-n-v-oostende", "mancave-brugge"],
    },
    areaServed: provincie("West-Vlaanderen"),
  },

  /* ------------------------------------------------------------------ */
  {
    ...route("limburg"),
    title: "Bouwdroger huren in Limburg — Hasselt en Genk | Vernast",
    description:
      "Bouwdroger huren in Limburg: Hasselt, Genk, Sint-Truiden en het Maasland. Binnen 24 uur geleverd en geplaatst, ophaling inbegrepen. Ook op koude winterwerven.",
    h1: "Bouwdroger huren in Limburg",
    kicker: "Hasselt · Genk · Sint-Truiden · Tongeren · Maasland",
    intro: [
      "Limburg is de provincie van de ruime nieuwbouw: vrijstaande woningen op grote percelen, van het Maasland tot Haspengouw. Dat zijn grote volumes om droog te krijgen, en het zijn precies de werven waar een bouwdroger het meeste tijd uitspaart — een chape van 150 m² die zonder hulp een half jaar droogt, is met een pakket van drie toestellen in enkele weken klaar voor de vloerder.",
      "Vanuit ons magazijn in Aartselaar rijden we over de E313 in ongeveer een uur naar Hasselt en in anderhalf uur naar Maaseik. Elk droogpakket komt geleverd, geplaatst en ingesteld, en de levering en ophaling zijn in de prijs begrepen — Limburg betaalt geen kilometers.",
    ],
    towns: [
      "Hasselt", "Genk", "Sint-Truiden", "Tongeren", "Beringen", "Lommel", "Bilzen", "Maasmechelen",
      "Houthalen", "Heusden-Zolder", "Diepenbeek", "Bree", "Peer", "Maaseik", "Lanaken",
      "Leopoldsburg",
    ],
    pin: { left: "68%", top: "21%" },
    bouw: {
      kop: "Wat we in Limburg drogen: grote nieuwbouw, winterwerven en waterschade langs de Maas",
      alineas: [
        "De Limburgse nieuwbouw is groter dan het Vlaamse gemiddelde: open bebouwing, een gelijkvloers van 120 tot 180 m², vaak met een aparte garage en een bijgebouw dat mee gepleisterd wordt. Rond Hasselt, Genk, Houthalen en Beringen komt daar de verkavelingsbouw op de zandgronden van de Kempen bij. Die zandbodem draineert goed, waardoor kelders er zeldzamer zijn — maar het bouwvocht in chape en pleisterwerk is er niet minder om. Hier vertrekt onze technieker zelden met minder dan drie toestellen.",
        "Limburg heeft ook de koudste winters van Vlaanderen, en dat merken we op de werf. Een condensdroger in een ruwbouw van 5 °C haalt nog geen kwart van zijn capaciteit; de elektrische kachel op 400 V is in Limburg tussen november en maart dan ook vaker wel dan niet deel van het pakket. Onze realisatie in Hasselt hieronder — pleister- en chapewerken, gedroogd op planning — is een typisch voorbeeld.",
        "Langs de Maas, van Lanaken over Maasmechelen tot Maaseik en Kinrooi, en in het noorden rond Bocholt en Bree, komt waterschade terug bij elke hoge waterstand: kelders en bergingen die onderlopen, en een gelijkvloers waar het water via de vloer naar binnen komt. Onze realisatie in Bocholt is zo'n dossier, met de schimmelsanering die er na een week nat achteraan kwam.",
      ],
    },
    toestellen: {
      kop: "Welke bouwdroger het vaakst past bij een Limburgse werf",
      items: [
        {
          key: "ttk650",
          waarom: `Voor de ruime Limburgse nieuwbouw: 90 liter per dag en een bereik tot 600 m³, één toestel per groot gelijkvloers. Ook ons eerste toestel bij waterschade langs de Maas, waar het snel moet gaan. Vanaf ${dag("ttk650")} per dag.`,
        },
        {
          key: "ttk350",
          waarom: `De aanvulling voor de verdieping, de garage of het bijgebouw: 70 liter per dag, tot 400 m³, pompklaar. In een Limburgs pakket zitten er meestal twee. Vanaf ${dag("ttk350")} per dag.`,
        },
        {
          key: "teddh30",
          waarom: `De elektrische kachel van 30 kW die een Limburgse winterwerf op temperatuur brengt, zodat de drogers kunnen werken. Vraagt 400 V krachtstroom op de werfkast; wij controleren dat bij de levering. Vanaf ${dag("teddh30")} per dag.`,
        },
      ],
    },
    levering: {
      kop: "Leveren in Limburg: over de E313 en de E314, binnen 24 uur",
      alineas: [
        "De rit naar Limburg is de langste in onze planning, en daarom plannen we hem als een ronde: de technieker vertrekt 's ochtends vanuit Aartselaar, rijdt over de E313 naar Hasselt en vandaar door naar het Maasland of via de E314 naar Genk en Noord-Limburg. Elke werf op de ronde krijgt een tijdslot en een sms een halfuur vooraf.",
        `Op een Limburgse nieuwbouw is de installatie een kwestie van verdelen: drie of vier toestellen over het gelijkvloers, de verdieping en het bijgebouw, een ventilator waar de lucht anders blijft hangen, en de condensafvoer naar een vloerput of naar buiten. Via de trap naar de verdieping is inbegrepen; is er nog geen trap, dan geldt ${euro(LADDER)} per verdieping via de ladder. Op een winterwerf controleert de technieker eerst of de werfkast 400 V levert voor de kachel.`,
      ],
      feiten: [
        { label: "Levering en installatie", waarde: "Inbegrepen in het droogpakket, geen kilometerkost" },
        { label: "Levertermijn", waarde: "Binnen 24 uur, in een dagronde over de E313" },
        { label: "Rijtijd vanuit ons magazijn", waarde: "60 minuten (Hasselt) tot 100 minuten (Maaseik, Kinrooi)" },
        { label: "Verdieping via ladder", waarde: `${euro(LADDER)} per verdieping, vooraf melden` },
        { label: "Condenspomp (aangeraden)", waarde: `${euro(POMP)} per bouwdroger per dag` },
      ],
    },
    afhalen: {
      kop: "Afhalen vanuit Limburg: alleen zinvol voor één los toestel",
      alineas: [
        `Ons afhaalpunt ligt in Aartselaar, aan de A12 bij Antwerpen — vanuit Hasselt een uur rijden, vanuit Genk of Maasmechelen langer. Voor een volledig droogpakket is dat nooit de betere keuze: de levering zit al in de prijs en de technieker plaatst meteen alles. Voor één losse droger of ventilator die u langere tijd houdt, kan het wel: ${euro(AFHAALKORTING)} korting op de huurprijs, lagere afhaaltarieven en een gereserveerd afhaalmoment op een werkdag tussen 07:30 en 17:00.`,
      ],
    },
    faq: [
      {
        q: "Betaal ik een kilometerkost voor een levering in Limburg?",
        a: "Nee. Hasselt, Genk, Tongeren of Maaseik: levering, installatie en ophaling zitten in de prijs van het droogpakket, zonder afstandstoeslag. Alleen wanneer toestellen via een ladder naar een verdieping zonder trap moeten, rekenen we een toeslag per verdieping.",
      },
      {
        q: "Hoe snel leveren jullie in Limburg?",
        a: "Binnen 24 uur. Limburg rijden we in een dagronde over de E313: boekt u vóór de middag, dan staat uw werf doorgaans de volgende ochtend op de rit — Hasselt en Sint-Truiden vroeg, het Maasland en Noord-Limburg later op de dag. Bij waterschade langs de Maas bellen we meteen terug om te kijken wat dezelfde dag nog kan.",
      },
      {
        q: "Wie plaatst de bouwdrogers op mijn nieuwbouw?",
        a: "Onze technieker. Hij meet het startvochtgehalte, verdeelt de toestellen over gelijkvloers, verdieping en bijgebouw, plaatst een ventilator waar de lucht anders stilstaat, sluit de condensafvoer aan en stelt elke droger in. Bij een winterwerf sluit hij ook de kachel aan op de 400 V-aansluiting van de werfkast.",
      },
      {
        q: "Wat als het vriest op mijn Limburgse werf?",
        a: "Dan verwarmen we mee, want een condensdroger onder 15 °C droogt nauwelijks. Tussen november en maart nemen we voor een onverwarmde ruwbouw in Limburg standaard een elektrische kachel van 30 kW mee die de ruimte op werkingstemperatuur houdt. Voorwaarde is krachtstroom (400 V) op de werf; zonder kachel verlengt vorst de droogtijd met weken.",
      },
    ],
    realisaties: {
      kop: "Werven die we in Limburg droogden",
      intro: "Een nieuwbouw in Hasselt op planning gedroogd en een waterschade in Bocholt — met de foto's van de werf.",
      slugs: ["mnr-l-hasselt", "mnr-j-bocholt"],
    },
    areaServed: provincie("Limburg"),
  },
];

export const REGIO_BY_SLUG: Record<string, Regio> = Object.fromEntries(REGIOS.map((r) => [r.slug, r]));

/**
 * Alle lopende tekst van een regiopagina achter elkaar — voor de test die het
 * woordental en de uniciteit tussen regio's bewaakt. De feitentabel
 * (laddertoeslag, pompprijs) blijft er bewust buiten: die rijen zijn in elke
 * regio gelijk omdat de prijs dat is, en dat is geen kopie maar een feit.
 */
export function regioTekst(regio: Regio): string {
  return [
    regio.h1,
    ...regio.intro,
    regio.bouw.kop,
    ...regio.bouw.alineas,
    regio.toestellen.kop,
    ...regio.toestellen.items.map((t) => t.waarom),
    regio.levering.kop,
    ...regio.levering.alineas,
    regio.afhalen.kop,
    ...regio.afhalen.alineas,
    ...regio.faq.flatMap((f) => [f.q, f.a]),
    regio.realisaties.kop,
    regio.realisaties.intro,
  ].join("\n");
}

/** De projecten uit `REALISATIES` waar deze regio naar verwijst, in volgorde. */
export function realisatiesVoor(regio: Regio) {
  return regio.realisaties.slugs.map((slug) => {
    const r = REALISATIES.find((x) => x.slug === slug);
    if (!r) throw new Error(`Regio ${regio.slug} verwijst naar onbekende realisatie ${slug}`);
    return r;
  });
}
