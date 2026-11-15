/**
 * De inhoud van de regiopagina's (/bouwdroger-huren-<regio>).
 *
 * Waarom deze pagina's bestaan: Search Console toonde in september 2026 dat de
 * site verschijnt op "bouwdroger aalst", "bouwdroger huren antwerpen" en
 * "bouwdroger west-vlaanderen", maar zonder één pagina die zo'n zoekopdracht
 * beantwoordt. De concurrenten die wél ranken hebben per regio een pagina.
 *
 * Elke regio heeft zijn eigen tekst. Dat is geen stijlkeuze maar de reden dat
 * zulke pagina's werken: zes keer dezelfde tekst met een andere plaatsnaam
 * erin is voor Google één pagina met vijf kopieën, en de kopieën worden
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
  /** Optionele, korte servicebewijzen direct onder de hero-intro. */
  heroFacts?: string[];
  /** Wat er in deze streek gebouwd en gedroogd wordt. */
  bouw: { kop: string; alineas: string[] };
  /**
   * De foto naast die tekst. Zonder beeld was dat blok een kolom tekst met een
   * lege helft ernaast — op een breed scherm viel de helft van de sectie weg.
   */
  beeld: { src: string; alt: string };
  toestellen: { kop: string; items: RegioToestel[] };
  levering: { kop: string; alineas: string[]; feiten: RegioFeit[] };
  /**
   * `feiten` is optioneel maar in de praktijk overal ingevuld: zonder die
   * regels stond het afhaalpaneel naast een leveringspaneel met twee alinea's
   * én een tabel, en bleef er in de rechterkolom een half scherm leeg onder de
   * tekst (de knop zakt door `.paneel` naar de onderrand).
   */
  afhalen: { kop: string; alineas: string[]; feiten?: RegioFeit[] };
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
    /*
      "provincie Antwerpen", niet "Antwerpen" kaal, en zonder "en Mechelen" in
      de titel. Sinds 12-11-2026 hebben de stad en Mechelen elk een eigen
      pagina, en die stonden met dezelfde H1 op dezelfde zoekopdracht te
      mikken als deze — twee pagina's op één intentie, precies waar `seo.ts`
      voor bestaat. Deze pagina is de regionale: de hele provincie, van de
      Kempen tot de Rupelstreek. De stadsintentie hoort op
      /bouwdroger-huren-antwerpen-stad.
    */
    title: "Bouwdroger huren in provincie Antwerpen | Vernast",
    description:
      "Bouwdroger huren in de provincie Antwerpen, van de Kempen tot de Rupelstreek: binnen 24 uur geleverd vanuit Aartselaar, geplaatst en ingesteld. Geen waarborg.",
    h1: "Bouwdroger huren in de provincie Antwerpen",
    kicker: "Hele provincie · magazijn in Aartselaar",
    intro: [
      "Ons magazijn staat in Aartselaar, langs de A12, een kwartier van de Antwerpse ring. Dat maakt de provincie Antwerpen **de streek waar we het snelst staan en het vaakst rijden**: van een appartement in Zurenborg tot een nieuwbouwvilla in Schilde. **Wie vóór de middag boekt, heeft de toestellen doorgaans de volgende werkdag draaien.**",
    ],
    bouw: {
      /*
        De H2 draagt het zoekwoord en stelt de vraag die mensen intikken; de
        vorige kop ("Wat we in Antwerpen drogen: veel renovatie, weinig ruimte")
        bevatte "bouwdroger" of "huren" niet, en de eerste alinea begon met
        sfeerbeschrijving in plaats van met een antwoord. Een vraag als kop plus
        een antwoord in de eerste zin is bovendien wat een AI-assistent citeert.
      */
      kop: "Waarvoor huren Antwerpenaren een bouwdroger?",
      alineas: [
        "Drie situaties zijn samen goed voor het grootste deel van onze ritten in de provincie Antwerpen: **pleisterwerk drogen** na een renovatie, **chape drogen** in een nieuwbouw, en **een kelder of berging drogen** na waterschade. Voor alle drie leveren we **binnen 24 uur** vanuit Aartselaar, van het centrum van Antwerpen tot Mechelen, Lier en Mortsel.",
        "**In de stad overheerst renovatie.** In de negentiende-eeuwse gordel van Berchem, Borgerhout en Zurenborg gaat het huis per huis: vers pleisterwerk in een bewoonde straat, een kelder die plots vochtig blijkt, een chape die moet drogen terwijl de buren thuis zijn. Daar hoort **een compacte bouwdroger** bij die **op één stopcontact draait**, stil genoeg is voor een bewoond gebouw en via een smalle trap naar boven kan.",
        "**In de rand is het omgekeerd**: in Kontich, Edegem, Schilde, Brasschaat en Boom draaien meerdere bouwdrogers tegelijk op een volledige gelijkvloerse chape, verdeeld over droogzones, en gaat de vraag maar over één datum: **wanneer kan de vloerder starten?** In de Kempen, rond Turnhout, Geel, Mol en Herentals, zetten we er op een onverwarmde winterwerf een bouwkachel bij, want onder 15 °C haalt een condensdroger te weinig rendement. En bij waterschade telt elk uur: **op vochtig materiaal begint schimmel na 24 tot 48 uur**, en vanuit Aartselaar staan we er doorgaans dezelfde dag.",
      ],
    },
    beeld: {
      src: "/vernast/case-renovatie.webp",
      alt: "Renovatie met vers pleisterwerk in een Antwerpse rijwoning",
    },
    toestellen: {
      kop: "Welke bouwdroger past het vaakst bij een Antwerpse werf",
      items: [
        {
          key: "ttk170",
          waarom: `**Het toestel voor de stad**: één kamer, een appartement of een badkamerrenovatie. Compact genoeg voor een Antwerpse trap en zuinig op een gewoon stopcontact. Vanaf ${dag("ttk170")} per dag.`,
        },
        {
          key: "ttk350",
          waarom: `**Onze standaard voor een rijwoning of een nieuwbouw in de rand**: 70 liter per dag en een bereik tot 400 m³, dus één toestel per bouwlaag volstaat meestal. Vanaf ${dag("ttk350")} per dag.`,
        },
        {
          key: "teddh30",
          waarom: `**Voor de Kempense winterwerf en de koude Antwerpse kelder.** **Onder 15 °C zakt het rendement van elke condensdroger**; deze kachel brengt de ruimte op werkingstemperatuur. Vraagt 400 V. Vanaf ${dag("teddh30")} per dag.`,
        },
        {
          key: "ttv4500",
          waarom: `**De ventilator die er in de stad bij hoort**: in een rijhuis of appartement blijft de droge lucht anders in de kamer met het toestel hangen en blijft de achterste muur nat. Vanaf ${dag("ttv4500")} per dag.`,
        },
      ],
    },
    levering: {
      kop: "Leveren in Antwerpen: de volgende werkdag, geplaatst en ingesteld",
      alineas: [
        "**Levering, installatie en ophaling zitten in de prijs van elk droogpakket**, ook in de stad. U krijgt een leverdatum en een tijdslot, de technieker stuurt een sms wanneer hij vertrekt, en bij aankomst meet hij eerst het startvochtgehalte. Pas als alles draait en u de korte uitleg hebt gehad, rijdt hij weg.",
        `Antwerpen heeft één eigenheid: verdiepingen zonder trap. In een appartementsgebouw met lift of een woning met vaste trap is **elke verdieping inbegrepen**. Moeten de toestellen via een ladder naar boven, typisch bij een casco-verbouwing waar de trap nog niet zit, dan rekenen we ${euro(LADDER)} per verdieping en willen we dat vooraf weten, zodat we met twee man komen.`,
      ],
      feiten: [
        { label: "Levering en installatie", waarde: "Inbegrepen in het droogpakket" },
        { label: "Levertermijn", waarde: "Binnen 24 uur, meestal de volgende werkdag" },
        /*
          20 en niet 15: de stadspagina rekent met twintig minuten vanuit
          Aartselaar (`gemeenten.ts`, rit), en twee pagina's die dezelfde rit
          anders begroten zijn er één te veel.
        */
        { label: "Rijtijd vanuit ons magazijn", waarde: "20 tot 40 minuten (Aartselaar–stad–Kempen)" },
        { label: "Verdieping via ladder", waarde: `${euro(LADDER)} per verdieping, vooraf melden` },
        { label: "Condenspomp (aangeraden)", waarde: `${euro(POMP)} per bouwdroger per dag` },
      ],
    },
    afhalen: {
      kop: "Of zelf afhalen in Aartselaar, langs de A12",
      alineas: [
        `Voor losse toestellen is afhalen in Antwerpen de logische keuze: ons afhaalpunt ligt aan de Boomsesteenweg 12, Unit 11 in Aartselaar, vlak aan de afrit van de A12. U reserveert online, kiest een afhaalmoment tussen 07:30 en 17:00, en de toestellen staan klaar aan de poort. **Wie afhaalt krijgt ${euro(AFHAALKORTING)} korting op de huurprijs.**`,
        "Eén regel die in de stad vaak vergeten wordt: **vervoer een bouwdroger rechtop**. Plat in de koffer van een stadsauto beschadigt de compressor; toch plat vervoerd, laat het toestel dan 24 uur rechtop staan voor u het inschakelt.",
      ],
      feiten: [
        { label: "Rijtijd naar ons afhaalpunt", waarde: "15 min (Antwerpen) tot 25 min (Mechelen)" },
        { label: "Korting bij afhalen", waarde: `${euro(AFHAALKORTING)} op de huurprijs` },
        { label: "Waarborg", waarde: "Geen" },
        { label: "Vervoer", waarde: "Rechtop; plat vervoerd 24 uur laten staan" },
        { label: "Liever laten leveren?", waarde: "De rit zit al in elke pakketprijs" },
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
      {
        q: "Hoeveel stroom verbruikt een bouwdroger, en wat kost dat?",
        a: "Een bouwdroger van 70 liter trekt ongeveer 0,7 kW en draait dag en nacht door. Reken op zo'n 15 kWh per etmaal per toestel, bij een gemiddeld tarief een paar euro per dag. Dat verbruik betaalt u aan uw netbeheerder, niet aan ons. Op een werf zonder werfkast vragen we wel vooraf of er een vrij stopcontact van 16 ampère is; twee toestellen op één verlengdraad is de meest voorkomende reden dat een zekering 's nachts uitvalt.",
      },
      {
        q: "Mag ik tijdens de droging in mijn woning blijven wonen?",
        a: "Dat kan, en in de negentiende-eeuwse gordel van Berchem, Borgerhout en Zurenborg is het eerder regel dan uitzondering. Een condensdroger blaast geen stof rond en geeft alleen warme, droge lucht af. Houd de ramen en deuren van de droogzone wel dicht, want anders droogt u de straat mee. Het toestel maakt ongeveer evenveel geluid als een koelkast; slaapt u er vlakbij, zet het dan in de gang en laat de deur op een kier.",
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
    /*
      Eén alinea, zoals op de Antwerpse pagina. Hier stonden er twee, en de
      eerste ging over onszelf: dat Google de site al toonde op "bouwdroger
      aalst" voor er een pagina over bestond. Dat is de reden dat deze pagina
      er is, geen antwoord op de vraag van wie ze opent.
    */
    intro: [
      "Vanuit ons magazijn in Aartselaar is het Waasland een halfuur en zijn Gent en Aalst rond de vijftig minuten: na onze eigen provincie is Oost-Vlaanderen **de streek waar we het vaakst rijden**. **Elk droogpakket komt geleverd, geplaatst en ingesteld**, met de ophaling erbij in de prijs. En wie in het Waasland woont, staat over de E17 in twintig minuten aan onze poort om zelf af te halen.",
    ],
    bouw: {
      /*
        Een vraag als kop met het antwoord in de eerste zin — hetzelfde
        patroon als op de Antwerpse pagina, en om dezelfde reden: dit is de
        vorm die een AI-assistent citeert. De vorige kop ("Wat we in
        Oost-Vlaanderen drogen: verkavelingen, Gentse rijhuizen ...") noemde
        "bouwdroger" noch "huren", en de eerste alinea begon met een streek in
        plaats van met een antwoord.
      */
      kop: "Waarvoor huren Oost-Vlamingen een bouwdroger?",
      alineas: [
        "Drie werven keren terug in Oost-Vlaanderen: **chape drogen** in een nieuwbouw tussen Aalst en Sint-Niklaas, **pleisterwerk drogen** in een Gents rijhuis, en **een kelder leegdrogen** na hoogwater langs Schelde of Dender. Voor alle drie staan we er **binnen 24 uur**, van Zelzate tot Ronse.",
        "Tussen Aalst, Dendermonde en Sint-Niklaas wordt meer nieuw gebouwd dan bijna overal in Vlaanderen: verkavelingen met halfopen en open woningen, waar de chape van het hele gelijkvloers in één keer gelegd wordt. Een gemiddelde nieuwbouw zet daarbij **zo'n 1.500 liter water in de constructie**. **Zonder bouwdroger duurt het maanden** vóór de vloerder mag starten; **met een pakket van twee of drie toestellen zijn dat weken**. Hier komt het meest gehuurde toestel van ons gamma bijna altijd in aanmerking.",
        "**Gent is een ander verhaal.** De rijhuizen van de Brugse Poort, Ledeberg en Sint-Amandsberg worden verbouwd in smalle, diepe percelen met weinig daglicht en soms een kelder onder het straatniveau. Nieuw pleisterwerk droogt daar slecht op eigen kracht, en een kelder die na de verbouwing muf blijft, is er de regel. Kleinere toestellen per ruimte werken hier beter dan één grote in de gang.",
        "Langs de Schelde, de Dender en de Durme, in Lokeren, Berlare, Wetteren en Temse, **staat het grondwater hoog** en komt waterschade in kelders en bergingen terug bij elke natte periode. Twee van onze Oost-Vlaamse realisaties hieronder zijn precies dat: een keldermuurlek in Lokeren en een berging in Berlare.",
      ],
    },
    beeld: {
      src: "/vernast/case-kelder.webp",
      alt: "Kelder met vochtproblemen, zoals in de Oost-Vlaamse Scheldevallei",
    },
    toestellen: {
      kop: "Welke bouwdroger het vaakst past in Oost-Vlaanderen",
      items: [
        {
          key: "ttk350",
          waarom: `**De standaard voor een nieuwbouwwoning** in een verkaveling rond Aalst of Sint-Niklaas: 70 liter per dag, bereik tot 400 m³, en pompklaar zodat het condenswater rechtstreeks naar de afvoer loopt. Vanaf ${dag("ttk350")} per dag.`,
        },
        {
          key: "ttk650",
          waarom: `**Voor de grote open bebouwing en voor waterschade waar het snel moet gaan**: 110 liter per dag en een bereik tot 600 m³. Eén toestel dekt een volledig gelijkvloers. Vanaf ${dag("ttk650")} per dag.`,
        },
        {
          key: "ttv4500",
          waarom: `**De axiaalventilator die in een Gents rijhuis het verschil maakt**: hij duwt de droge lucht tot in de achterbouw en de kelder, waar een droger alleen niet komt. Vanaf ${dag("ttv4500")} per dag.`,
        },
        {
          key: "teddh30",
          waarom: `**Voor de onverwarmde ruwbouw** in de verkavelingen rond Gent en Aalst. **Onder 15 °C zakt het rendement van elke condensdroger**; deze kachel houdt de ruimte op werkingstemperatuur. Vraagt 400 V. Vanaf ${dag("teddh30")} per dag.`,
        },
      ],
    },
    levering: {
      kop: "Leveren in Oost-Vlaanderen: één rit, alles geplaatst",
      alineas: [
        "**Wij leveren in de hele provincie, van Zelzate tot Ronse, binnen 24 uur na uw boeking.** De rit vanuit Aartselaar is langer dan in Antwerpen, dus we plannen Oost-Vlaamse leveringen in rondes: één technieker rijdt het Waasland en de Denderstreek af, een andere Gent en het Meetjesland. U merkt daar niets van behalve een precies tijdslot.",
        "Bij de installatie verdelen we de toestellen over droogzones en sluiten we, als u de condenspomp koos, de afvoer aan. In een verkaveling is dat meestal een vloerput of de aansluiting van de toekomstige wasmachine; in een Gents rijhuis vaker een lavabo op de verdieping. **Ophaling na de huurperiode zit in de prijs**: u belt of mailt wanneer de vochtmeting goed zit, en wij komen de toestellen halen.",
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
        `Woont u in Sint-Niklaas, Temse, Beveren of Lokeren, dan is **ons magazijn in Aartselaar dichterbij dan Gent**. Losse toestellen haalt u er zelf af tegen lagere afhaalprijzen, met ${euro(AFHAALKORTING)} korting op de huurprijs, elke werkdag op een gereserveerd moment tussen 07:30 en 17:00. Vanuit Gent of Aalst is het een uur rijden; dan is laten leveren doorgaans de betere rekensom, want die rit zit al in het pakket.`,
      ],
      feiten: [
        { label: "Rijtijd naar ons afhaalpunt", waarde: "20 min (Waasland) tot 1 uur (Gent)" },
        { label: "Korting bij afhalen", waarde: `${euro(AFHAALKORTING)} op de huurprijs` },
        { label: "Waarborg", waarde: "Geen" },
        { label: "Vervoer", waarde: "Rechtop; plat vervoerd 24 uur laten staan" },
        { label: "Liever laten leveren?", waarde: "De rit zit al in elke pakketprijs" },
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
        a: "Dan verwarmen we mee. Een condensdroger verliest onder 15 °C het grootste deel van zijn rendement, dus in een onverwarmde nieuwbouw in de winter zetten we er een elektrische kachel bij die de ruimte op werkingstemperatuur houdt. Ramen dicht, kachel aan, droger aan: dat is de volgorde.",
      },
      {
        q: "Hoeveel bouwdrogers heb ik nodig voor een gelijkvloers van 120 m²?",
        a: "Voor een gelijkvloers van die grootte in een verkaveling rond Aalst of Dendermonde zetten we doorgaans twee bouwdrogers in, met een ventilator per droogzone om de lucht te laten rondgaan. Het precieze aantal hangt af van de plafondhoogte en van wat er moet drogen: een chape zet meer water in de constructie dan vers pleisterwerk. De Calculator rekent dat uit op basis van uw volume; u hoeft niets zelf te combineren.",
      },
      {
        q: "Kan de vloerder al starten zodra de huurtermijn om is?",
        a: "Niet de kalender beslist dat, maar de eindmeting. Wij meten bij de ophaling het restvocht en geven u die waarde door, zodat uw vloerder weet waar hij aan toe is. Welke grens hij wil zien hangt af van het type chape, de vloerverwarming en de afwerking, dus vraag hem dat vooraf. Zit de waarde er nog boven, dan loopt de huur volgens de Drooggarantie kosteloos verder.",
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
    /*
      De tweede alinea ("u huurt een berekend droogpakket, geen losse
      machine") stond hier boven de vouw terwijl ze over de levering gaat;
      ze staat nu in de leveringssectie, waar die vraag gesteld wordt.
    */
    intro: [
      "Vlaams-Brabant ligt voor ons letterlijk op de weg: de A12 vanuit Aartselaar komt in Vilvoorde uit, en vandaar is het een halfuur naar Leuven, Halle of Aarschot. De hele provincie, van het Pajottenland tot het Hageland, leveren we **binnen 24 uur**; de Brusselse rand **meestal dezelfde dag**, als de aanvraag vóór de middag binnenkomt.",
    ],
    bouw: {
      kop: "Waarvoor huren Vlaams-Brabanders een bouwdroger?",
      alineas: [
        "Drie bouwtypes vullen onze Vlaams-Brabantse ritten: een villa uit de rand die grondig gerenoveerd wordt, een studentenhuis of stadswoning in Leuven, en een nieuwbouw op de leembodem van het Hageland of het Pajottenland. **Alle drie halen we binnen 24 uur**; de Brusselse rand vaak nog dezelfde dag.",
        "De Brusselse rand, van Zaventem en Tervuren tot Overijse, Dilbeek en Asse, is villagebied van de jaren zestig tot tachtig, en die villa's worden nu één voor één grondig gerenoveerd: nieuw pleisterwerk over drie bouwlagen, een nieuwe chape op het gelijkvloers en vaak een kelder die het hele volume van de woning beslaat. Dat zijn grote luchtvolumes; hier plaatsen we **eerder twee middelgrote toestellen per bouwlaag dan één klein**, en vrijwel altijd met een ventilator om de droge lucht tot in de verste kamer te krijgen.",
        "Leuven bouwt in de hoogte en in de diepte: studentenhuizen die per kamer worden verbouwd, appartementsprojecten aan de Vaartkom en oude stadswoningen met een gewelfde kelder. **Per ruimte een compact toestel** is daar de regel, en **de condenspomp is er geen luxe**: een reservoir legen in een studentenhuis doet niemand.",
        "Het Hageland (Aarschot, Diest, Tienen) en het Pajottenland (Halle, Ninove-kant) zijn de streken waar het meest nieuw gebouwd wordt, op leem- en zandleembodems die traag water afgeven. Een gelijkvloerse chape droogt er zonder hulp opvallend traag; **met een bouwdroger volgt de vloerder weken vroeger**. In de winter hoort daar bijverwarming bij.",
      ],
    },
    beeld: {
      src: "/vernast/case-nieuwbouw.webp",
      alt: "Gerenoveerde villa in afwerking in de Brusselse rand",
    },
    toestellen: {
      kop: "Welke bouwdroger het vaakst past in Vlaams-Brabant",
      items: [
        {
          key: "ttk350",
          waarom: `Per bouwlaag van een villa in de rand of per gelijkvloers van een Hagelandse nieuwbouw: 70 liter per dag, tot 400 m³. **Dit is het toestel dat we het vaakst naar Vlaams-Brabant rijden.** Vanaf ${dag("ttk350")} per dag.`,
        },
        {
          key: "ttk650",
          waarom: `**Voor de grote volumes**: een kelder onder de hele villa, een open gelijkvloers met vide, of een appartementsproject waar meerdere units tegelijk drogen. 110 liter per dag, tot 600 m³. Vanaf ${dag("ttk650")} per dag.`,
        },
        {
          key: "radiaal2250",
          waarom: `**De radiaalventilator**, in een villa met lange gangen en een verdieping onder het dak: hij blaast gericht en ver, waar de droger zelf niet komt. Vanaf ${dag("radiaal2250")} per dag.`,
        },
        {
          key: "ttk170",
          waarom: `**Het compacte toestel** voor een studentenkamer in Leuven, een badkamer of één verdieping van een gerenoveerde villa. Draait op een gewoon stopcontact en gaat via de trap naar boven. Vanaf ${dag("ttk170")} per dag.`,
        },
      ],
    },
    levering: {
      kop: "Leveren in Vlaams-Brabant: via de A12 en de ring, binnen 24 uur",
      alineas: [
        "De technieker rijdt vanuit Aartselaar over de A12 naar Vilvoorde en verdeelt van daaruit: de rand en Leuven in een ochtendronde, Halle en het Pajottenland of het Hageland in de namiddag. **U krijgt een tijdslot en een sms een halfuur vooraf**, zodat u niet de hele dag hoeft te wachten.",
        `In een villa met drie bouwlagen dragen we **alles via de trap naar boven zonder meerkost**. Zit de trap er nog niet, wat bij een casco-verbouwing voorkomt, dan geldt de laddertoeslag van ${euro(LADDER)} per verdieping; meld het bij de boeking, dan komen we met twee. Bij de opstart bespreken we welke ramen en deuren open of dicht blijven en hoe u de reservoirs leegt als u geen condenspomp nam.`,
        "Wat u huurt is dus **een berekend droogpakket en geen losse machine**: de technieker plaatst het, sluit de afvoer aan en stelt de opstelling in. Levering en ophaling zijn inbegrepen, en **de dagprijs blijft dezelfde hoe lang u ook huurt**.",
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
        `Ons afhaalpunt in Aartselaar ligt aan de A12, **precies halfweg tussen Antwerpen en Brussel**. Vanuit Vilvoorde, Grimbergen of Machelen bent u er in twintig minuten, en dat maakt afhalen voor losse toestellen een reële optie: ${euro(AFHAALKORTING)} korting op de huurprijs, lagere afhaaltarieven en een gereserveerd afhaalmoment. Vanuit Leuven of het Hageland is het een uur; dan laat u beter leveren, die rit zit toch al in het pakket.`,
      ],
      feiten: [
        { label: "Rijtijd naar ons afhaalpunt", waarde: "20 min (Vilvoorde) tot 1 uur (Leuven)" },
        { label: "Korting bij afhalen", waarde: `${euro(AFHAALKORTING)} op de huurprijs` },
        { label: "Waarborg", waarde: "Geen" },
        { label: "Vervoer", waarde: "Rechtop; plat vervoerd 24 uur laten staan" },
        { label: "Liever laten leveren?", waarde: "De rit zit al in elke pakketprijs" },
      ],
    },
    faq: [
      {
        q: "Wat kost de levering van een bouwdroger in Leuven of de Brusselse rand?",
        a: "Niets bovenop het droogpakket: levering, plaatsing en ophaling zijn inbegrepen, ook in Leuven, Zaventem of Halle. Alleen een verdieping zonder trap of lift, waar de toestellen via een ladder naar boven moeten, brengt een toeslag per verdieping mee.",
      },
      {
        q: "Hoe snel leveren jullie in Vlaams-Brabant?",
        a: "Binnen 24 uur na uw boeking. De Brusselse rand ligt op een halfuur van ons magazijn via de A12, dus een aanvraag vóór de middag plannen we vaak nog dezelfde dag in. Leuven, Tienen en Halle zijn een uur rijden en staan doorgaans de volgende werkdag op de planning.",
      },
      {
        q: "Wie plaatst de bouwdrogers in een villa met drie verdiepingen?",
        a: "Onze technieker, en hij draagt ze ook naar boven. Hij verdeelt de toestellen per bouwlaag, plaatst waar nodig een ventilator om de lange gangen te bereiken, sluit de condensafvoer aan en stelt elke droger in. Voor een villa met een grote kelder komt hij meestal met een groter pakket dan de Calculator voor één bouwlaag berekent, en dat overlegt hij vooraf.",
      },
      {
        q: "Kan ik in de winter drogen in een onverwarmde nieuwbouw in het Hageland?",
        a: "Ja, met bijverwarming. Onder 15 °C werkt een condensdroger nauwelijks; op een winterwerf in Aarschot of Diest zetten we er een elektrische kachel op 400 V bij die de ruimte op temperatuur brengt, en pas dan haalt de droger zijn capaciteit. Onze technieker controleert bij de levering of uw werfkast krachtstroom heeft.",
      },
      {
        q: "Hoe krijgen jullie de toestellen tot in een appartement in Vilvoorde of Zaventem?",
        a: "Met de lift, en dat kost niets extra. Is de lift buiten dienst of te klein, dan dragen we via de trap, ook zonder meerkost; onze toestellen zijn verrijdbaar en gaan per stuk door een gewone deuropening. Alleen wanneer er geen trap of lift is en de toestellen via een ladder naar boven moeten, rekenen we een toeslag per verdieping. Meld dat vooraf, dan komen we met twee man.",
      },
      {
        q: "Waar laat ik het condenswater naartoe lopen?",
        a: "Elke bouwdroger vangt het water op in een reservoir dat u zelf zou moeten legen, meestal een paar keer per dag. Dat hoeft niet: onze technieker sluit standaard een slang aan op een afvoer, een douchebak of een putje. Ligt er geen afvoer in de buurt, dan zet hij er een condenspomp bij die het water tot twintig meter verder wegpompt. Zo draait de opstelling door zonder dat er iemand langs moet.",
      },
    ],
    realisaties: {
      kop: "Werven die we in Brussel en de rand droogden",
      intro: "Twee projecten aan de Brusselse kant van de provinciegrens: dezelfde bouwtypes als in Tervuren of Zaventem, met de foto's van de werf.",
      slugs: ["mevr-g-b-sint-pieters-woluwe", "mnr-s-brussel"],
    },
    areaServed: provincie("Vlaams-Brabant"),
  },

  /* ------------------------------------------------------------------ */
  {
    ...route("brussel"),
    /*
      De zesde regiopagina, en de enige die geen provincie is. Ze bestaat sinds
      13-11-2026 omdat Brussel tot dan als dode tekst tussen vijf links stond,
      op de homepage en op /sitemap: wie daar keek, kon alleen besluiten dat we
      er niet komen. Deze pagina is de koepel over het gewest; sinds 14-11-2026
      heeft elk van de negentien gemeenten er daarnaast een eigen, net zoals de
      stad Antwerpen er een heeft naast haar provincie.

      Wat hier staat hoort dus op gewestniveau: de rit, de hoogte van de
      plafonds, de draaitrap, de venstertijd. Wat per gemeente verschilt, de
      beekvallei onder Elsene, de Zennebodem van Anderlecht, de tuinwijk van
      Watermaal-Bosvoorde, staat op die gemeentepagina en niet hier. Twee
      pagina's die hetzelfde zeggen zijn voor Google één pagina met een kopie,
      en de kopie wordt weggefilterd.

      De Franse namen staan erbij waar ze afwijken: iemand die "Ixelles"
      intikt zoekt dezelfde droger als iemand die "Elsene" intikt.
    */
    title: "Bouwdroger huren in Brussel | Vernast",
    description:
      "Bouwdroger huren in Brussel: binnen 24 uur geleverd en geplaatst in de negentien gemeenten, ook zonder lift. Geen waarborg, ophaling inbegrepen.",
    h1: "Bouwdroger huren in Brussel",
    kicker: "Negentien gemeenten · magazijn op een halfuur",
    intro: [
      "Ons magazijn staat in Aartselaar, aan de A12: **een halfuur van de Brusselse ring** buiten de spits. Daarmee ligt het gewest dichter bij ons dan de helft van de Kempen, en dat merkt u aan de planning: **een aanvraag die voor de middag binnenkomt, staat doorgaans de volgende werkdag te draaien.**",
      "Wat Brussel apart maakt is niet de bodem maar het gebouw en de straat: **hoge plafonds, geen lift, en zelden plaats om stil te staan**. Daar stemmen we het toestel en het tijdslot op af, en niet omgekeerd.",
    ],
    heroFacts: [
      "Levering, plaatsing en ophaling inbegrepen",
      "Geen waarborg",
      "Ook in de negentien gemeenten binnen 24 uur",
    ],
    bouw: {
      kop: "Waarvoor huurt men in Brussel een bouwdroger?",
      alineas: [
        "Bijna altijd voor **renovatie in een bewoond gebouw**. Een appartement waar de badkamer eruit is, een verdieping met vers pleisterwerk, een kelder die na een lekkage of een hevige bui vochtig blijkt: dat zijn samen het grootste deel van onze Brusselse ritten. Nieuwbouw op een lege kavel komt hier nauwelijks voor, en dat verandert de vraag. Het gaat niet om **hoeveel liter per dag**, maar om **welk toestel hier binnenkomt en stil genoeg is**.",
        "**In de eerste kroon telt de hoogte.** Een herenhuis in Elsene, Sint-Gillis of Schaarbeek heeft plafonds van drie meter vijftig tot vier meter, en dat is geen detail: diezelfde kamer bevat anderhalf keer zoveel lucht als onder een gewoon plafond. Rekent u op vierkante meters, dan zet u te laag in en huurt u twee weken langer dan nodig. Wij rekenen daarom op **kubieke meter**, en in zo'n kamer staat er eerder een middelgroot toestel met een ventilator dan het kleinste model.",
        "**En dan is er de trap.** Veel van die gebouwen hebben geen lift, en de trap draait. Onze compacte bouwdroger is veertig bij veertig centimeter aan de basis en weegt een vijfentwintigtal kilo, dus hij gaat door elke gangbare Brusselse draaitrap; de technieker draagt hem naar boven en dat kost niets extra. **Wat we vooraf willen weten is of er een lift is**, want dat bepaalt of een groter toestel überhaupt een optie is.",
        "In de kanaalzone, van Molenbeek tot Anderlecht, zit het vocht vaker **onderaan dan boven**: kelders deels onder het trottoir, zonder buitenwaterdichting en zonder doorstroming. Zo'n ruimte komt in de winter zelden boven tien graden, en **onder 15 °C verliest een condensdroger het grootste deel van zijn rendement**. Daar gaat een adsorptiedroger naartoe. Tegen het Zonienwoud, in Ukkel, Watermaal-Bosvoorde en de Woluwes, is het weer anders: daar krijgt een diepe kelder of garage bij een hevige bui het water van de helling erboven.",
      ],
    },
    beeld: {
      src: "/vernast/case-waterschade.webp",
      alt: "Gedroogde badkamer na een lekkage in een Brussels appartement",
    },
    toestellen: {
      kop: "Welke bouwdroger past in een Brussels appartement?",
      items: [
        {
          key: "ttk170",
          waarom: `**Het toestel voor de stad**: veertig bij veertig centimeter, een vijfentwintigtal kilo, en hij draait op een gewoon stopcontact. Gaat door een draaitrap en is stil genoeg om in de kamer ernaast te slapen. Vanaf ${dag("ttk170")} per dag.`,
        },
        {
          key: "ttk350",
          waarom: `**Voor een herenhuiskamer met een hoog plafond**: 70 liter per dag en bereik tot ongeveer 400 m³. Dat volume haalt het kleinste toestel niet, en dan droogt u weken te lang. Vanaf ${dag("ttk350")} per dag.`,
        },
        {
          key: "revolution",
          waarom: `**Voor de kelder onder het trottoir**: koud, gesloten en zonder doorstroming. Een adsorptiedroger bindt het vocht aan een droogwiel en werkt ook bij vijf graden door, waar een condensdroger stilvalt. Vanaf ${dag("revolution")} per dag.`,
        },
        {
          key: "ttv4500",
          waarom: `**De ventilator**, in een lange gang of een diepe kamer: hij brengt de droge lucht tot achteraan en blaast de verzadigde laag langs vloer en muur weg. Zonder hem droogt de voorkamer en blijft de keuken staan. Vanaf ${dag("ttv4500")} per dag.`,
        },
      ],
    },
    levering: {
      kop: "Leveren in Brussel: binnen de venstertijd van uw straat",
      alineas: [
        "De rit gaat over de ring, en die staat tussen zeven en negen uur stil. **We plannen Brussel daarom buiten de spits**, met een tijdslot in de late voormiddag of de namiddag en een sms een halfuur vooraf. Dat is eerlijker dan een ochtenduur beloven dat we niet halen.",
        "**Zeg bij de reservatie hoe uw straat werkt.** Een voetgangerszone, een venstertijd voor leveringen, een parkeerverbod dat om tien uur begint: daar plannen we binnen, en de technieker staat kort stil om uit te laden. Zonder die informatie staat hij voor een afgesloten straat, en dan verliest u een dag.",
        `Is er een lift of een vaste trap, dan is **elke verdieping inbegrepen** en draagt de technieker de toestellen naar boven. Moet er een toestel via een ladder naar boven, wat bij een casco-verbouwing zonder trap voorkomt, dan geldt de laddertoeslag van ${euro(LADDER)} per verdieping; meld het vooraf, dan komen we met twee man. **De dagprijs blijft dezelfde hoe lang u ook huurt**, en levering en ophaling zitten in het pakket.`,
      ],
      feiten: [
        { label: "Levering en installatie", waarde: "Inbegrepen in het droogpakket" },
        { label: "Levertermijn", waarde: "Binnen 24 uur, met een tijdslot buiten de spits" },
        { label: "Rijtijd vanuit ons magazijn", waarde: "30 minuten buiten de spits, langer tussen 07 en 09 uur" },
        { label: "Verdieping met lift of trap", waarde: "Inbegrepen, de technieker draagt" },
        { label: "Verdieping via ladder", waarde: `${euro(LADDER)} per verdieping, vooraf melden` },
        { label: "Condenspomp (aangeraden)", waarde: `${euro(POMP)} per bouwdroger per dag` },
      ],
    },
    afhalen: {
      kop: "Afhalen vanuit Brussel: kan, maar zelden de betere keuze",
      alineas: [
        `Ons afhaalpunt in Aartselaar ligt **een halfuur boven de ring**, dus afhalen is vanuit Brussel een reële optie: ${euro(AFHAALKORTING)} korting op de huurprijs en een gereserveerd afhaalmoment op een werkdag tussen 07:30 en 17:00. Voor één losse droger die u langere tijd houdt, loont dat.`,
        "Voor een volledig droogpakket is het dat niet, en in Brussel minder dan elders: **een droger weegt 25 tot 40 kg en moet rechtop vervoerd worden**, en die moet u vervolgens zelf een trap op krijgen in een gebouw zonder lift. De levering zit al in de prijs, de technieker draagt en plaatst, en hij meet bij de start en bij de ophaling hoe nat het echt is.",
      ],
      feiten: [
        { label: "Rijtijd naar ons afhaalpunt", waarde: "30 minuten buiten de spits" },
        { label: "Korting bij afhalen", waarde: `${euro(AFHAALKORTING)} op de huurprijs` },
        { label: "Waarborg", waarde: "Geen" },
        { label: "Vervoer", waarde: "Rechtop; plat vervoerd 24 uur laten staan" },
        { label: "Zonder lift?", waarde: "Laat leveren: de technieker draagt naar boven" },
      ],
    },
    faq: [
      {
        q: "Leveren jullie in de negentien gemeenten van het gewest?",
        a: "Ja, in alle negentien, van Brussel-stad en Schaarbeek tot Ukkel, Anderlecht en de Woluwes. De prijs van het droogpakket is dezelfde als voor een werf naast ons magazijn: levering, plaatsing, de vochtmeting en de ophaling zitten erin, zonder afstandstoeslag. Het enige wat er wel bij komt is de laddertoeslag, en die geldt alleen als er geen trap en geen lift is en een toestel langs de buitenkant naar boven moet.",
      },
      {
        q: "Hoe krijgen jullie een bouwdroger op de derde verdieping zonder lift?",
        a: "Te voet, en dat kost niets extra. Onze compacte bouwdroger is veertig bij veertig centimeter aan de basis en weegt een vijfentwintigtal kilo; die gaat door elke gangbare Brusselse draaitrap. De technieker draagt hem naar boven en stelt hem daar in. Geef bij de reservatie door dat er geen lift is en op welke verdieping het moet, dan kiest hij het toestel daarop en komt hij bij een zwaar toestel met twee man.",
      },
      {
        q: "Mag een bouwdroger draaien terwijl ik in het appartement woon?",
        a: "Ja, en daarvoor is het compacte toestel bedoeld. Het verbruikt ongeveer 0,75 kW, dus het mag op een gewoon stopcontact, en het is stil genoeg om in de kamer ernaast te slapen. Houd de deur van de droogzone wel dicht: droge lucht die door het hele appartement trekt, droogt niets snel. En laat de technieker de afvoer naar een douchebak of een putje leggen, dan hoeft u geen reservoir te legen.",
      },
      {
        q: "Hoeveel toestellen heb ik nodig in een kamer met een plafond van vier meter?",
        a: "Meer dan de oppervlakte suggereert, want een droger droogt lucht en niet vloeren. Een kamer van dertig vierkante meter met een plafond van vier meter bevat honderdtwintig kubieke meter: ruim het dubbele van dezelfde kamer onder een plafond van twee meter veertig. In zo'n herenhuiskamer staat er daarom eerder een middelgroot toestel met een ventilator dan het kleinste model. De Calculator rekent op kubieke meter, dus geef de hoogte mee.",
      },
      {
        q: "Mijn kelder onder het trottoir blijft vochtig. Lost drogen dat op?",
        a: "Zolang het toestel draait, wordt de ruimte bruikbaar en krijgt schimmel geen kans. Of het daarna droog blijft, hangt af van waar het vocht vandaan komt. Is het bouwvocht na werken, dan verdwijnt het definitief. Komt het door de kelderwand naar binnen omdat er geen buitenwaterdichting zit, dan haalt een droger het uit de lucht maar niet uit de grond, en dan is drainage of waterdichting de echte oplossing. Onze technieker meet dat bij de levering en zegt het eerlijk.",
      },
      {
        q: "Mijn straat is een voetgangerszone. Kunnen jullie daar leveren?",
        a: "Ja, binnen de venstertijd die daar geldt. Geef uw straat door bij de reservatie en vermeld de zone of het uur waarop leveren mag, dan plannen we de rit daarbinnen in plaats van ervoor te staan met een bestelwagen die niet binnen mag. De technieker staat kort stil, laadt uit, brengt de toestellen naar boven en stelt ze in.",
      },
      {
        q: "Kan ik in het Frans geholpen worden?",
        a: "Ja. Onze techniekers en onze telefoon werken in het Nederlands, het Frans en het Engels, en u kiest zelf in welke taal we het gesprek voeren en de offerte opmaken. Deze pagina staat in het Nederlands omdat de rest van de site dat ook doet; zoekt u op Ixelles, Forest of Woluwe-Saint-Pierre, dan gaat het om dezelfde gemeenten en hetzelfde pakket.",
      },
    ],
    realisaties: {
      kop: "Werven die we in Brussel droogden",
      intro: "Twee waterschades en een pleisterwerk in Sint-Pieters-Woluwe, met de foto's en de gemeten waarden van de werf.",
      slugs: ["dhr-h-brussel", "mnr-s-brussel", "mevr-g-b-sint-pieters-woluwe"],
    },
    /*
      Geen `provincie(...)`: Brussel is een gewest en geen provincie, en in de
      schema zetten dat het "containedInPlace" van een provincie is zou
      onwaar zijn.
    */
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Brussels Hoofdstedelijk Gewest",
      containedInPlace: { "@type": "Country", name: "België" },
    },
  },
  /* ------------------------------------------------------------------ */
  {
    ...route("west-vlaanderen"),
    title: "Bouwdroger huren West-Vlaanderen | Pakket met Drooggarantie",
    description:
      "Bouwdroger huren in West-Vlaanderen? Droogpakketten met levering, plaatsing, vochtmetingen en Drooggarantie. Bereken uw prijs voor Brugge, Kortrijk en de kust.",
    h1: "Bouwdroger huren in West-Vlaanderen",
    kicker: "Brugge · Kortrijk · Oostende · Roeselare · de kust",
    /*
      Eén alinea, niet twee. De tweede ("u huurt geen los toestel op goed
      geluk...") stond hier als veertien regels tekst boven de vouw, terwijl ze
      de prijsvraag beantwoordt -- en die vraag heeft honderd pixels lager een
      eigen sectie. Ze staat nu in die sectie ("Eén aanspreekpunt voor uw
      werf"), waar ze het lege half scherm vult dat daar stond. Er gaat dus
      niets aan tekst verloren; ze staat alleen op de plek waar ze gevraagd
      wordt.
    */
    intro: [
      "Een bouwdroger huren in West-Vlaanderen voor natte chape, pleisterwerk, een vochtige kelder of waterschade? Vernast levert in de hele provincie binnen 24 uur, van Kortrijk en Roeselare tot Brugge, Oostende en de kust, en onze technieker plaatst de toestellen en stelt de droging correct in.",
    ],
    heroFacts: [
      "Binnen 24 uur geleverd",
      "Plaatsing en ophaling inbegrepen",
      "Vochtmeting voor en na",
      "Drooggarantie op elk berekend pakket",
    ],
    bouw: {
      kop: "Waarvoor huren West-Vlamingen een bouwdroger?",
      alineas: [
        "Vier situaties vullen bijna al onze West-Vlaamse ritten: chape drogen in een nieuwbouw rond Kortrijk of Roeselare, pleisterwerk drogen na een renovatie, een koude kelder in Brugge of het Ommeland, en waterschade in een appartement aan zee. **Voor alle vier rijden we de hele provincie af, van De Panne tot Avelgem, binnen 24 uur.**",
        "Aan de kust leveren we bouwdrogers voor renovaties en waterschade in appartementen in Oostende, Knokke-Heist, Blankenberge, Nieuwpoort en De Panne. Vochtige buitenlucht maakt natuurlijk ventileren er minder voorspelbaar. Daarom blijven **ramen en deuren tijdens de actieve droging dicht** en combineren we voldoende ontvochtigingscapaciteit met luchtcirculatie tot in de verste kamer.",
        "In Brugge en het Brugse Ommeland gaat het vaak om koude kelders, bergingen en historische panden. Onze realisatie in Brugge hieronder toont zo'n kelder na vocht- en schimmelproblemen. **Onder ongeveer 15 °C verliest een condensdroger veel rendement**; dan plaatsen we een adsorptiedroger of brengen we de ruimte eerst op temperatuur met een bouwkachel.",
        "Rond Kortrijk, Roeselare, Waregem en Tielt drogen we vooral chape en pleisterwerk in nieuwbouwwoningen, renovaties en bedrijfsgebouwen. Grote vloeroppervlakken delen we op in droogzones met een correct berekende bouwdroger en ventilator per zone. Zo krijgt de vloerlegger of schilder **een gemeten einddatum in plaats van een inschatting**.",
      ],
    },
    beeld: {
      src: "/vernast/case-keuken.webp",
      alt: "Keukenplaatsing tegen een drooggemaakte muur in een kustappartement",
    },
    toestellen: {
      kop: "Welke bouwdroger het vaakst past in West-Vlaanderen",
      items: [
        {
          key: "ttk650",
          waarom: `**Voor een groot kustappartement, een volledige woning of een loods**: 110 liter per dag en een bereik tot 600 m³. We combineren hem waar nodig met ventilatoren voor een gelijkmatige luchtverdeling. Vanaf ${dag("ttk650")} per dag.`,
        },
        {
          key: "revolution",
          waarom: `**De adsorptiedroger** voor een koude Brugse kelder, een onverwarmde winterwerf of vocht onder een vloer. Hij blijft bij lage temperaturen werken en blaast droge lucht gericht via slangen. Vanaf ${dag("revolution")} per dag.`,
        },
        {
          key: "ttk350",
          waarom: `**Voor de gewone nieuwbouw** in Roeselare of Tielt en voor een kleiner kustappartement: 70 liter per dag, tot 400 m³, pompklaar. Vanaf ${dag("ttk350")} per dag.`,
        },
        {
          key: "ttv4500",
          waarom: `**Voor woningen en appartementen met meerdere kamers**: de ventilator brengt de droge lucht ook in gangen, hoeken en slaapkamers waar stilstaande lucht de droging anders vertraagt. Vanaf ${dag("ttv4500")} per dag.`,
        },
      ],
    },
    levering: {
      kop: "Leveren aan de kust en in het binnenland: binnen 24 uur, met de E40 als ruggengraat",
      alineas: [
        "Voor West-Vlaanderen plannen we vaste ritten: de technieker vertrekt 's ochtends vanuit Aartselaar, rijdt over de E17 naar Kortrijk en Roeselare of over de E40 naar Brugge en de kust, en levert onderweg meerdere werven. U krijgt daardoor **een tijdslot in plaats van een hele dag**, en een sms wanneer hij bij de vorige klant vertrekt.",
        `Aan de kust is de vraag altijd dezelfde: hoe krijgen we de toestellen op de zevende verdieping? **Met de lift, zonder meerkost.** In een appartementsgebouw in renovatie waar de lift buiten dienst is, dragen we via de trap, ook zonder meerkost; alleen als het via een ladder moet rekenen we ${euro(LADDER)} per verdieping. De condensafvoer sluiten we in een appartement meestal aan op de douche.`,
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
        `Ons afhaalpunt ligt in Aartselaar, aan de A12 bij Antwerpen. Vanuit Kortrijk is dat een uur, vanuit Oostende bijna twee. Voor één los toestel dat u een maand houdt kan dat lonen, met ${euro(AFHAALKORTING)} korting op de huurprijs en de lagere afhaaltarieven. **Voor een volledig droogpakket zit de rit al in de prijs** en plaatst onze technieker alles meteen. Haalt u toch af: vervoer de droger rechtop en laat hem 24 uur staan als hij toch plat gelegen heeft.`,
      ],
      feiten: [
        { label: "Rijtijd naar ons afhaalpunt", waarde: "1 uur (Kortrijk) tot bijna 2 (Oostende)" },
        { label: "Korting bij afhalen", waarde: `${euro(AFHAALKORTING)} op de huurprijs` },
        { label: "Waarborg", waarde: "Geen" },
        { label: "Vervoer", waarde: "Rechtop; plat vervoerd 24 uur laten staan" },
        { label: "Liever laten leveren?", waarde: "De rit zit al in elke pakketprijs" },
      ],
    },
    faq: [
      {
        q: "Wat kost een bouwdroger huren in West-Vlaanderen?",
        a: `Een losse bouwdroger huurt u vanaf ${dag("ttk170")} per dag excl. btw. De prijs van een volledig droogpakket hangt af van het volume, het materiaal en de gewenste droogtermijn. In de Calculator ziet u vóór het boeken één vaste pakketprijs, inclusief levering in West-Vlaanderen, plaatsing, vochtmeting bij start en oplevering en ophaling.`,
      },
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
        a: "Een Vernast-technieker. Hij neemt de toestellen mee naar boven, verdeelt ze over de kamers, sluit de condensafvoer aan op de douche zodat u niets hoeft te legen, en stelt de streefvochtigheid in. Hij zegt u ook welke ramen dicht blijven; aan zee is dat het belangrijkste advies van allemaal.",
      },
      {
        q: "Droogt een bouwdroger wel bij zeelucht en in een koude Brugse kelder?",
        a: "Bij zeelucht ja, op voorwaarde dat de ramen dicht blijven en het toestel groot genoeg is; daarom kiezen we aan de kust vaker de grootste condensdroger. In een koude kelder onder 15 °C werkt een condensdroger slecht: daar zetten we de adsorptiedroger in, die ook bij lage temperaturen blijft drogen, of een kachel om de ruimte eerst op te warmen.",
      },
      {
        q: "Hoeveel stroom gebruikt een droogpakket aan de kust?",
        a: "Reken per bouwdroger op ongeveer 0,7 kW, dag en nacht. Voor een appartement in Oostende of Knokke-Heist met één toestel komt dat op een paar euro elektriciteit per dag, te betalen aan uw eigen netbeheerder. In een gebouw in renovatie vragen we vooraf of de werfkast of de meterkast genoeg vrije ampères heeft: twee toestellen op dezelfde kring is de meest voorkomende oorzaak van een zekering die 's nachts springt.",
      },
      {
        q: "Hoe weet ik dat mijn chape of pleisterwerk echt droog is?",
        a: "Door de meting, niet door de kalender. Onze technieker meet bij de plaatsing het beginvocht en bij de ophaling opnieuw, en u krijgt beide waarden. Uw vloerlegger of schilder bepaalt welke grens hij wil zien; vraag hem dat vooraf. Hebt u een ondertekend verslag nodig voor uw bouwdossier of voor een verzekeraar, dan neemt u een officieel vochtrapport bij.",
      },
    ],
    realisaties: {
      kop: "Werven die we in West-Vlaanderen droogden",
      intro: "Een villa in Oostende na het pleisterwerk en een kelder in Brugge na schimmel, met de foto's van de werf.",
      slugs: ["mnr-n-v-oostende", "mancave-brugge"],
    },
    areaServed: provincie("West-Vlaanderen"),
  },

  /* ------------------------------------------------------------------ */
  {
    ...route("limburg"),
    title: "Bouwdroger huren in Limburg: Hasselt en Genk | Vernast",
    description:
      "Bouwdroger huren in Limburg: Hasselt, Genk, Sint-Truiden en het Maasland. Binnen 24 uur geleverd en geplaatst, ophaling inbegrepen. Ook op koude winterwerven.",
    h1: "Bouwdroger huren in Limburg",
    kicker: "Hasselt · Genk · Sint-Truiden · Tongeren · Maasland",
    /*
      De tweede alinea stond hier dubbel: de rijtijden staan in de
      feitentabel van de leveringssectie en "Limburg betaalt geen kilometers"
      is de eerste vraag van de FAQ. Wat ervan overblijft — dat de afstand
      niet in de prijs komt — staat nu in de eerste alinea hieronder.
    */
    intro: [
      "Limburg is de provincie van de ruime nieuwbouw: vrijstaande woningen op grote percelen, van het Maasland tot Haspengouw. Dat zijn grote volumes om droog te krijgen, en het zijn precies de werven waar een bouwdroger het meeste tijd uitspaart: **een chape van 150 m² die zonder hulp een half jaar droogt, is met een pakket van drie toestellen in enkele weken klaar voor de vloerder**.",
    ],
    bouw: {
      kop: "Waarvoor huren Limburgers een bouwdroger?",
      alineas: [
        "Drie vragen brengen ons naar Limburg: een chape die droog moet voor de vloerder kan starten, pleisterwerk dat in een onverwarmde winterwerf blijft staan, en een kelder of gelijkvloers na hoogwater langs de Maas. Voor alle drie rijden we **binnen 24 uur** vanuit Aartselaar, van Sint-Truiden tot Maaseik, **zonder dat de afstand in de prijs komt**.",
        "De Limburgse nieuwbouw is groter dan het Vlaamse gemiddelde: open bebouwing, een gelijkvloers van 120 tot 180 m², vaak met een aparte garage en een bijgebouw dat mee gepleisterd wordt. Rond Hasselt, Genk, Houthalen en Beringen komt daar de verkavelingsbouw op de zandgronden van de Kempen bij. Die zandbodem draineert goed, waardoor kelders er zeldzamer zijn, maar het bouwvocht in chape en pleisterwerk is er niet minder om. **Hier vertrekt onze technieker zelden met minder dan drie toestellen.**",
        "Limburg heeft ook de koudste winters van Vlaanderen, en dat merken we op de werf. **Een condensdroger in een ruwbouw van 5 °C haalt nog geen kwart van zijn capaciteit**; de elektrische kachel op 400 V is in Limburg tussen november en maart dan ook vaker wel dan niet deel van het pakket. Onze realisatie in Hasselt hieronder, pleister- en chapewerken die op planning droog kwamen, is daar een typisch voorbeeld.",
        "Langs de Maas, van Lanaken over Maasmechelen tot Maaseik en Kinrooi, en in het noorden rond Bocholt en Bree, **komt waterschade terug bij elke hoge waterstand**: kelders en bergingen die onderlopen, en een gelijkvloers waar het water via de vloer naar binnen komt. Onze realisatie in Bocholt is zo'n dossier, met de schimmelsanering die er na een week nat achteraan kwam.",
      ],
    },
    beeld: {
      src: "/vernast/case-chape-v2.webp",
      alt: "Verse chape met natte plekken tijdens het drogen in een Limburgse nieuwbouw",
    },
    toestellen: {
      kop: "Welke bouwdroger het vaakst past bij een Limburgse werf",
      items: [
        {
          key: "ttk650",
          waarom: `**Voor de ruime Limburgse nieuwbouw**: 110 liter per dag en een bereik tot 600 m³, één toestel per groot gelijkvloers. Ook ons eerste toestel bij waterschade langs de Maas, waar het snel moet gaan. Vanaf ${dag("ttk650")} per dag.`,
        },
        {
          key: "ttk350",
          waarom: `**De aanvulling voor de verdieping, de garage of het bijgebouw**: 70 liter per dag, tot 400 m³, pompklaar. In een Limburgs pakket zitten er meestal twee. Vanaf ${dag("ttk350")} per dag.`,
        },
        {
          key: "teddh30",
          waarom: `**De elektrische kachel van 30 kW** die een Limburgse winterwerf op temperatuur brengt, zodat de drogers kunnen werken. Vraagt 400 V krachtstroom op de werfkast; wij controleren dat bij de levering. Vanaf ${dag("teddh30")} per dag.`,
        },
        {
          key: "ttv4500",
          waarom: `Bij de grote Limburgse gelijkvloerse oppervlaktes **staat de droger zelden in de kamer die het natst is**. De ventilator verdeelt de droge lucht over de hele bouwlaag. Vanaf ${dag("ttv4500")} per dag.`,
        },
      ],
    },
    levering: {
      kop: "Leveren in Limburg: over de E313 en de E314, binnen 24 uur",
      alineas: [
        "De rit naar Limburg is de langste in onze planning, en daarom plannen we hem als een ronde: de technieker vertrekt 's ochtends vanuit Aartselaar, rijdt over de E313 naar Hasselt en vandaar door naar het Maasland of via de E314 naar Genk en Noord-Limburg. **Elke werf op de ronde krijgt een tijdslot en een sms een halfuur vooraf.**",
        `Op een Limburgse nieuwbouw is de installatie een kwestie van verdelen: drie of vier toestellen over het gelijkvloers, de verdieping en het bijgebouw, een ventilator waar de lucht anders blijft hangen, en de condensafvoer naar een vloerput of naar buiten. **Via de trap naar de verdieping is inbegrepen**; is er nog geen trap, dan geldt ${euro(LADDER)} per verdieping via de ladder. Op een winterwerf controleert de technieker eerst of de werfkast 400 V levert voor de kachel.`,
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
        `Ons afhaalpunt ligt in Aartselaar, aan de A12 bij Antwerpen: vanuit Hasselt een uur rijden, vanuit Genk of Maasmechelen langer. **Voor een volledig droogpakket is dat nooit de betere keuze**: de levering zit al in de prijs en de technieker plaatst meteen alles. Voor één losse droger of ventilator die u langere tijd houdt, kan het wel: ${euro(AFHAALKORTING)} korting op de huurprijs, lagere afhaaltarieven en een gereserveerd afhaalmoment op een werkdag tussen 07:30 en 17:00.`,
      ],
      feiten: [
        { label: "Rijtijd naar ons afhaalpunt", waarde: "1 uur (Hasselt), langer vanuit Genk" },
        { label: "Korting bij afhalen", waarde: `${euro(AFHAALKORTING)} op de huurprijs` },
        { label: "Waarborg", waarde: "Geen" },
        { label: "Vervoer", waarde: "Rechtop; plat vervoerd 24 uur laten staan" },
        { label: "Liever laten leveren?", waarde: "De rit zit al in elke pakketprijs" },
      ],
    },
    faq: [
      {
        q: "Betaal ik een kilometerkost voor een levering in Limburg?",
        a: "Nee. Hasselt, Genk, Tongeren of Maaseik: levering, installatie en ophaling zitten in de prijs van het droogpakket, zonder afstandstoeslag. Alleen wanneer toestellen via een ladder naar een verdieping zonder trap moeten, rekenen we een toeslag per verdieping.",
      },
      {
        q: "Hoe snel leveren jullie in Limburg?",
        a: "Binnen 24 uur. Limburg rijden we in een dagronde over de E313: boekt u vóór de middag, dan staat uw werf doorgaans de volgende ochtend op de rit: Hasselt en Sint-Truiden vroeg, het Maasland en Noord-Limburg later op de dag. Bij waterschade langs de Maas bellen we meteen terug om te kijken wat dezelfde dag nog kan.",
      },
      {
        q: "Wie plaatst de bouwdrogers op mijn nieuwbouw?",
        a: "Onze technieker. Hij meet het startvochtgehalte, verdeelt de toestellen over gelijkvloers, verdieping en bijgebouw, plaatst een ventilator waar de lucht anders stilstaat, sluit de condensafvoer aan en stelt elke droger in. Bij een winterwerf sluit hij ook de kachel aan op de 400 V-aansluiting van de werfkast.",
      },
      {
        q: "Wat als het vriest op mijn Limburgse werf?",
        a: "Dan verwarmen we mee, want een condensdroger onder 15 °C droogt nauwelijks. Tussen november en maart nemen we voor een onverwarmde ruwbouw in Limburg standaard een elektrische kachel van 30 kW mee die de ruimte op werkingstemperatuur houdt. Voorwaarde is krachtstroom (400 V) op de werf; zonder kachel verlengt vorst de droogtijd met weken.",
      },
      {
        q: "Rijden jullie ook naar Voeren of de Maaskant?",
        a: "Ja, tot aan de taalgrens en tot tegen de Maas. Vanuit Aartselaar is dat onze langste rit in Vlaanderen, dus plannen we die mee in een vaste toer en krijgt u een tijdslot in plaats van een hele dag. De afstand verrekenen we niet: levering, plaatsing en ophaling zitten in de prijs van het droogpakket, of de werf nu in Hasselt of in Maasmechelen ligt.",
      },
      {
        q: "Wat doe ik als er geen stroom is op mijn werf?",
        a: "Zonder stroom droogt geen enkel toestel, dus dat is de eerste vraag die we stellen. Op een ruwbouw zonder aansluiting volstaat een werfkast of de aansluiting van de buren met een deugdelijke verlengdraad. Per bouwdroger rekent u op ongeveer 0,7 kW en op een vrije kring van 16 ampère; staan er drie toestellen op één kring, dan valt de zekering 's nachts uit en staat de droging stil zonder dat iemand het ziet.",
      },
    ],
    realisaties: {
      kop: "Werven die we in Limburg droogden",
      intro: "Een nieuwbouw in Hasselt op planning gedroogd en een waterschade in Bocholt, met de foto's van de werf.",
      slugs: ["mnr-l-hasselt", "mnr-j-bocholt"],
    },
    areaServed: provincie("Limburg"),
  },
  /* ------------------------------------------------------------------ */
  {
    ...route("waals-brabant"),
    /*
      De eerste Waalse provincie met een eigen pagina, sinds 15-11-2026. Ze
      staat hier en niet in een apart Waals bestand omdat ze hetzelfde
      sjabloon draagt als de zes Vlaamse en Brusselse gebieden, met dezelfde
      prijs en hetzelfde pakket.

      Wat haar eigen maakt: de leem van het Brabants plateau, de valleien van
      de Dijle, de Lasne en de Thyle die erdoor snijden, en de villawijken in
      het zuiden van Brussel. Wat per gemeente verschilt, staat op de
      gemeentepagina's. Rijtijden zijn afgerond en te verifiëren tegen de echte
      ritgegevens, net als in `gemeenten.ts`.

      Werven heeft de provincie nog niet; de sectie leent de drie Brusselse,
      en zegt dat er ook bij ("in de buurt"). Zie `LEENT_VAN`.
    */
    title: "Bouwdroger huren in Waals-Brabant | Vernast",
    description:
      "Bouwdroger huren in Waals-Brabant: Waver, Nijvel, Waterloo en Eigenbrakel. Geleverd, geplaatst en opgehaald vanuit Aartselaar, zonder waarborg.",
    h1: "Bouwdroger huren in Waals-Brabant",
    kicker: "Brabant wallon · 27 gemeenten · een klein uur over de ring",
    intro: [
      "Een bouwdroger huren in Waals-Brabant voor nieuwbouw, renovatie of waterschade? Vernast levert en plaatst toestellen op uw werf in Waver, Waterloo, Nijvel en de rest van de provincie. **Uw droogpakket omvat de levering, plaatsing en ophaling van de toestellen.** Bereken uw huurprijs online of neem contact op voor advies over uw project.",
    ],
    heroFacts: [
      "Levering, plaatsing en ophaling inbegrepen",
      "Geen waarborg",
      "Hulp in het Nederlands en het Frans",
    ],
    bouw: {
      kop: "Waarvoor huurt men in Waals-Brabant een bouwdroger?",
      alineas: [
        "Twee soorten werven vullen het grootste deel van de vraag hier: **de grondige renovatie van een villa** uit de jaren zestig tot tachtig, en **nieuwbouw op een verkaveling** aan de rand van een dorp. In beide gevallen gaat het om grote volumes. Een villa in Lasne of Terhulpen heeft al snel een kelder onder het hele huis, een open gelijkvloers en een verdieping onder het dak, en dat droogt u niet met één klein toestel.",
        "**De bodem is leem**, en dat merkt u aan de chape en aan de kelder. Het Brabants plateau is bedekt met een dikke laag löss die water slecht doorlaat: na een natte winter blijft het tegen de keldermuur staan in plaats van weg te zakken. Wie in Waver, Nijvel of Perwijs een nieuwe vloer giet, rekent daarom beter niet op natuurlijke droging. **Een chape van zes centimeter heeft zonder hulp weken nodig**, met een berekende opstelling volgt de vloerder veel vroeger.",
        "**In de valleien is het water dichterbij.** De Dijle loopt door Waver en Ottignies, de Lasne door Lasne en Rixensart, de Thyle langs Court-Saint-Étienne en Villers-la-Ville, en in het westen de Zenne door Tubeke. Een woning op de valleibodem krijgt bij hevige regen eerder water in de kelder of de garage dan een woning op het plateau erboven. Daar telt na een waterschade vooral de snelheid: hoe langer vocht in een muur zit, hoe groter de kans op schimmel.",
        "Aan de oostkant, rond Geldenaken, Ramillies en Orp-Jauche, is het landbouwland met **hoeves in vierkant** en schuren die tot woning worden verbouwd. Dat zijn dikke muren van baksteen of natuursteen die veel vocht vasthouden, vaak zonder verwarming tijdens de werken. Op zo'n winterwerf zetten we een kachel bij de droger, want **onder 15 °C werkt een condensdroger op een fractie van zijn vermogen**.",
      ],
    },
    beeld: {
      src: "/vernast/case-nieuwbouw.webp",
      alt: "Villa in afwerking, met bouwdrogers op het gelijkvloers",
    },
    toestellen: {
      kop: "Welke bouwdroger past bij een werf in Waals-Brabant?",
      items: [
        {
          key: "ttk350",
          waarom: `**Per bouwlaag van een villa of per gelijkvloers van een nieuwbouw**: 70 liter per dag en een bereik tot ongeveer 400 m³. In Waals-Brabant is dit het toestel dat het vaakst in een pakket zit. Vanaf ${dag("ttk350")} per dag.`,
        },
        {
          key: "ttk650",
          waarom: `**Voor de kelder onder de hele villa** of een open ruimte met vide: 110 liter per dag, tot ongeveer 600 m³. Waar twee middelgrote toestellen elkaar in de weg zouden staan, doet deze het alleen. Vanaf ${dag("ttk650")} per dag.`,
        },
        {
          key: "teddh30",
          waarom: `**De elektrische kachel voor de onverwarmde winterwerf**, zoals een schuur die tot woning wordt verbouwd. Hij brengt de ruimte op werkingstemperatuur zodat de droger rendeert. Vraagt krachtstroom op de werf. Vanaf ${dag("teddh30")} per dag.`,
        },
        {
          key: "radiaal2250",
          waarom: `**De radiaalventilator** voor een villa met lange gangen of een verdieping onder het dak. Hij blaast de droge lucht gericht tot in de verste hoek, waar de droger zelf niet komt. Vanaf ${dag("radiaal2250")} per dag.`,
        },
      ],
    },
    levering: {
      kop: "Leveren in Waals-Brabant: over de ring, met een tijdslot",
      alineas: [
        "De rit gaat over de Brusselse ring, en die staat 's ochtends vast. **We plannen Waals-Brabant daarom in een ronde buiten de spits**: het westen en Waterloo over de E19 en de R0, Waver en het oosten over de E411. U krijgt een tijdslot en een sms een halfuur vooraf.",
        `Bij de levering meet de technieker het startvocht, verdeelt de toestellen over de bouwlagen, legt de afvoer naar een putje of naar buiten en stelt elke droger in. **Via de trap naar boven is inbegrepen**; moet er iets via een ladder omdat de trap nog niet ligt, dan geldt ${euro(LADDER)} per verdieping. Levering en ophaling zitten in het pakket, zonder afstandstoeslag voor de rit naar het zuiden.`,
      ],
      feiten: [
        { label: "Levering en installatie", waarde: "Inbegrepen in het droogpakket, geen kilometerkost" },
        { label: "Levertermijn", waarde: "Binnen 24 uur, in een ronde buiten de spits" },
        { label: "Rijtijd vanuit ons magazijn", waarde: "50 minuten (Waterloo, Waver) tot 70 minuten (Hélécine)" },
        { label: "Taal", waarde: "Nederlands of Frans, naar keuze" },
        { label: "Verdieping via ladder", waarde: `${euro(LADDER)} per verdieping, vooraf melden` },
        { label: "Condenspomp (aangeraden)", waarde: `${euro(POMP)} per bouwdroger per dag` },
      ],
    },
    afhalen: {
      kop: "Afhalen vanuit Waals-Brabant: alleen voor één los toestel",
      alineas: [
        `Ons afhaalpunt ligt in Aartselaar, ten zuiden van Antwerpen: vanuit Waver of Nijvel ruim een uur heen en evenveel terug, door het verkeer rond Brussel. **Voor een volledig pakket loont dat nooit**, want de rit zit al in de prijs. Voor één losse droger die u maanden houdt, kan het wel: ${euro(AFHAALKORTING)} korting op de huurprijs en een gereserveerd afhaalmoment op een werkdag tussen 07:30 en 17:00.`,
      ],
      feiten: [
        { label: "Rijtijd naar ons afhaalpunt", waarde: "Een klein uur tot ruim een uur, buiten de spits" },
        { label: "Korting bij afhalen", waarde: `${euro(AFHAALKORTING)} op de huurprijs` },
        { label: "Waarborg", waarde: "Geen" },
        { label: "Vervoer", waarde: "Rechtop; plat vervoerd 24 uur laten staan" },
        { label: "Liever laten leveren?", waarde: "De rit zit al in elke pakketprijs" },
      ],
    },
    faq: [
      {
        q: "Komen jullie echt tot in Waals-Brabant, of alleen tot de taalgrens?",
        a: "Tot in elke gemeente van de provincie, van Tubeke en Rebecq in het westen tot Hélécine en Orp-Jauche in het oosten. Het droogpakket kost er hetzelfde als in Vlaanderen: levering, plaatsing, de vochtmeting bij de start en de ophaling zitten erin, zonder toeslag voor de afstand.",
      },
      {
        q: "Spreken jullie ook Frans met klanten in Waals-Brabant?",
        a: "Ja. Aan de telefoon, in de offerte en op de werf kiest u zelf of we Nederlands of Frans spreken. Deze pagina staat in het Nederlands, zoals de rest van de site, maar zoekt u op Wavre, Nivelles of Braine-l'Alleud, dan gaat het om dezelfde gemeenten en hetzelfde pakket.",
      },
      {
        q: "Waarom droogt mijn chape op de leembodem zo traag?",
        a: "Omdat de chape zelf het water moet afgeven aan de lucht, en die lucht in een nieuwbouw snel verzadigd is. De leem onder de vloer helpt niet mee: ze laat weinig door en houdt de onderkant van de plaat koel en vochtig. Een bouwdroger haalt het vocht continu uit de lucht, zodat de chape kan blijven afgeven. De technieker meet het restvocht bij de start en bij de ophaling.",
      },
      {
        q: "Mijn kelder in de Dijlevallei liep onder. Wat moet ik eerst doen?",
        a: "Het staande water laten wegpompen en natte spullen buiten zetten, en dan zo snel mogelijk drogen: op vochtig materiaal begint schimmel na 24 tot 48 uur. Bel ons meteen, dan plannen we de rit zo vroeg als het kan. Voor een koude kelder nemen we een adsorptiedroger mee, die ook bij lage temperatuur blijft werken.",
      },
      {
        q: "Hoeveel toestellen heb ik nodig voor een villa met kelder?",
        a: "Dat hangt af van het volume en van wat er nat is, niet van het aantal kamers. Voor een villa met een volledige kelder, een gelijkvloers en een verdieping komt het vaak neer op een toestel per bouwlaag en een ventilator, en een groter toestel in de kelder. De Calculator rekent het uit op kubieke meter; geef de plafondhoogte mee.",
      },
      {
        q: "Werken jullie ook op een verbouwde hoeve zonder verwarming?",
        a: "Ja, en dan nemen we een elektrische kachel mee. In dikke muren van een oude schuur zit veel vocht, en zonder warmte in de ruimte haalt een condensdroger er weinig uit. Voorwaarde is krachtstroom op de werf; is die er niet, dan zoeken we met u een andere opstelling, bijvoorbeeld met een adsorptiedroger.",
      },
    ],
    realisaties: {
      kop: "Werven in de buurt van Waals-Brabant",
      intro: "In Waals-Brabant zelf hebben we nog geen werf gefotografeerd. Deze drie liggen in Brussel, op een kwartier tot een halfuur van Waterloo en Terhulpen.",
      slugs: ["dhr-h-brussel", "mnr-s-brussel", "mevr-g-b-sint-pieters-woluwe"],
    },
    areaServed: provincie("Waals-Brabant"),
  },
  /* ------------------------------------------------------------------ */
  {
    ...route("henegouwen"),
    /*
      Henegouwen kreeg zijn pagina op 15-11-2026, als tweede Waalse provincie
      na Waals-Brabant en met hetzelfde sjabloon, dezelfde prijs en hetzelfde
      pakket.

      Het verschil met Waals-Brabant is de afstand, en die staat er eerlijk:
      Edingen ligt dichter bij Aartselaar dan Maaseik, de Botte du Hainaut
      rond Chimay is de verste rit die we rijden. Een pagina die doet alsof
      Chimay om de hoek ligt, levert een klant op die teleurgesteld belt.
      Wat de provincie verder eigen maakt: blauwe hardsteen rond Zinnik, de
      mijnwoningen van de Borinage, Doornikse kalksteen, drie rivieren en het
      textielverleden van Moeskroen. Rijtijden zijn afgerond en te
      verifiëren tegen de echte ritgegevens, net als in `gemeenten.ts`.

      Werven heeft de provincie nog niet; de sectie leent de drie Brusselse,
      die op de route naar Henegouwen liggen. Zie `LEENT_VAN`.
    */
    title: "Bouwdroger huren in Henegouwen | Vernast",
    description:
      "Bouwdroger huren in Henegouwen: Charleroi, Bergen, Doornik en Moeskroen. Geleverd, geplaatst en opgehaald vanuit Aartselaar, zonder waarborg.",
    h1: "Bouwdroger huren in Henegouwen",
    kicker: "Hainaut · 69 gemeenten · van Edingen tot Chimay",
    intro: [
      "Een bouwdroger huren in Henegouwen voor een renovatie, een nieuwe chape of een kelder na waterschade? Vernast levert en plaatst de toestellen op uw werf, van Edingen tot Charleroi en van Moeskroen tot Chimay. **Levering, plaatsing en ophaling zitten in uw droogpakket.** Henegouwen is wel de breedste provincie die we bedienen, en dat zeggen we liever vooraf: **Edingen en 's-Gravenbrakel liggen op ongeveer drie kwartier van ons magazijn**, Bergen en Charleroi op een uur tot vijf kwartier, en de Botte du Hainaut rond Chimay is onze verste rit.",
    ],
    heroFacts: [
      "Levering, plaatsing en ophaling inbegrepen",
      "Geen waarborg",
      "Hulp in het Nederlands en het Frans",
    ],
    bouw: {
      kop: "Waarvoor huurt men in Henegouwen een bouwdroger?",
      alineas: [
        "Henegouwen is geen nieuwbouwprovincie maar een renovatieprovincie. Het grootste deel van de woningen is gebouwd vóór de Tweede Wereldoorlog, en wie er vandaag een huis koopt, haalt pleister af, legt een nieuwe vloer en isoleert van binnenuit. **Al die werken brengen water in een huis dat al vocht in de muren had.** Daar komt de vraag naar een bouwdroger vandaan, meer dan van verkavelingen.",
        "**Rond Zinnik, Écaussinnes en Lessen is blauwe hardsteen het bouwmateriaal.** De steen zelf neemt weinig water op, maar de muren erachter zijn vaak dik metselwerk met kalkmortel, en de voegen en de vulling houden het vocht wel vast. Een hoeve of een dorpswoning in natuursteen droogt daarom traag van binnenuit. In het westen, rond Doornik en Antoing, is het de Doornikse kalksteen die het beeld bepaalt, en ook die muren geven hun vocht pas na weken af.",
        "**In de Borinage, rond Bergen, Frameries en Quaregnon, staan rijen mijnwoningen uit de negentiende eeuw.** Ze zijn gebouwd zonder waterkering in de muurvoet, zodat grondvocht ongehinderd in het metselwerk optrekt. Wie zo'n woning renoveert, plaatst vaak eerst een injectie tegen opstijgend vocht en moet de muur daarna nog laten uitdrogen. Een bouwdroger versnelt die tweede stap; de eerste lost hij niet op, en dat zegt de technieker er ook bij.",
        "**Drie rivieren lopen door de provincie**: de Samber door Charleroi en Thuin, de Schelde door Doornik, en de Dender door Aat en Lessen. Bij hoog water lopen kelders en gelijkvloerse ruimtes in die valleien onder. In het westen ligt Moeskroen, met zijn textielverleden: oude weverijen en fabriekshallen die tot lofts of woningen worden verbouwd. Dat zijn grote, hoge ruimtes met betonvloeren en een nieuwe chape, waar een klein toestel weinig uithaalt.",
      ],
    },
    beeld: {
      src: "/vernast/case-renovatie.webp",
      alt: "Renovatie van een oude woning met bouwdrogers tegen de pas gepleisterde muren",
    },
    toestellen: {
      kop: "Welke bouwdroger past bij een werf in Henegouwen?",
      items: [
        {
          key: "ttk350",
          waarom: `**Voor de rijwoning of de dorpswoning in renovatie**: 70 liter per dag en een bereik tot ongeveer 400 m³, genoeg voor een bouwlaag van een gemiddelde Henegouwse woning. Meestal staat er één per verdieping. Vanaf ${dag("ttk350")} per dag.`,
        },
        {
          key: "ttk650",
          waarom: `**Voor de verbouwde fabriekshal of de ondergelopen kelder**: 110 liter per dag, tot ongeveer 600 m³. In een hoge loft in Moeskroen of een kelder in de Samberkant doet dit toestel het werk van twee kleinere. Vanaf ${dag("ttk650")} per dag.`,
        },
        {
          key: "revolution",
          waarom: `**De adsorptiedroger voor koude kelders en dikke muren**. Hij blaast droge lucht via slangen naar de plek waar het vocht zit en blijft werken bij lage temperatuur, waar een condensdroger stilvalt. Liever eerst samen bekijken. Vanaf ${dag("revolution")} per dag.`,
        },
        {
          key: "teddh30",
          waarom: `**De kachel van 30 kW voor een natuurstenen hoeve in de winter.** Dikke muren blijven koud, en zonder warmte in de ruimte rendeert geen enkele condensdroger. Vraagt krachtstroom (400 V) op de werf. Vanaf ${dag("teddh30")} per dag.`,
        },
      ],
    },
    levering: {
      kop: "Leveren in Henegouwen: één provincie, drie afstanden",
      alineas: [
        "Vanuit Aartselaar rijden we over de Brusselse ring naar het zuiden, en daarna splitst de route. **Het noorden van de provincie, met Edingen, Opzullik en 's-Gravenbrakel, halen we in ongeveer drie kwartier.** Bergen en La Louvière over de E19, Charleroi over de A54 via Nijvel: dat is een uur tot vijf kwartier; Doornik en Moeskroen bereiken we via de E17 in ongeveer dezelfde tijd. Voor Thuin, Beaumont en de Botte du Hainaut rekenen we op rond de twee uur, en daar plannen we de rit samen met u in.",
        `Op de werf meet de technieker het vocht in de muren en de vloer, zet de toestellen op de juiste plek en sluit de afvoer aan op een putje, een gootsteen of naar buiten. **De trap op naar de verdieping is inbegrepen**; staat er nog geen trap, dan geldt ${euro(LADDER)} per verdieping via de ladder. Voor de afstand rekenen we niets aan: een werf in Chimay kost hetzelfde pakket als een werf in Edingen.`,
      ],
      feiten: [
        { label: "Levering en installatie", waarde: "Inbegrepen in het droogpakket, geen kilometerkost" },
        { label: "Levertermijn", waarde: "Binnen 24 uur, in een ronde buiten de spits" },
        { label: "Rijtijd vanuit ons magazijn", waarde: "45 minuten (Edingen) tot rond twee uur (Chimay)" },
        { label: "Taal", waarde: "Nederlands of Frans, naar keuze" },
        { label: "Verdieping via ladder", waarde: `${euro(LADDER)} per verdieping, vooraf melden` },
        { label: "Condenspomp (aangeraden)", waarde: `${euro(POMP)} per bouwdroger per dag` },
      ],
    },
    afhalen: {
      kop: "Afhalen vanuit Henegouwen: haast nooit de moeite",
      alineas: [
        `Ons afhaalpunt ligt in Aartselaar, aan de A12 ten zuiden van Antwerpen. Vanuit Edingen is dat drie kwartier rijden, vanuit Charleroi of Doornik ruim een uur, en dat twee keer: bij het ophalen en bij het terugbrengen. **Omdat de levering al in het pakket zit, wint u daar voor een volledige droging niets mee.** Wie toch één losse droger of ventilator wil halen voor een lange periode, krijgt ${euro(AFHAALKORTING)} korting op de huurprijs en een vast afhaalmoment op een werkdag tussen 07:30 en 17:00.`,
      ],
      feiten: [
        { label: "Rijtijd naar ons afhaalpunt", waarde: "Drie kwartier (Edingen) tot ruim een uur (Charleroi, Doornik)" },
        { label: "Korting bij afhalen", waarde: `${euro(AFHAALKORTING)} op de huurprijs` },
        { label: "Waarborg", waarde: "Geen" },
        { label: "Vervoer", waarde: "Rechtop; plat vervoerd 24 uur laten staan" },
        { label: "Liever laten leveren?", waarde: "De rit zit al in elke pakketprijs" },
      ],
    },
    faq: [
      {
        q: "Leveren jullie ook in het zuiden van Henegouwen, rond Chimay?",
        a: "Ja, ook in de Botte du Hainaut: Chimay, Momignies, Sivry-Rance en Froidchapelle. Het is wel onze langste rit, rond twee uur vanuit Aartselaar, dus spreken we het tijdstip met u af in plaats van u een willekeurig moment te geven. De prijs verandert niet: levering, plaatsing en ophaling zitten in het droogpakket.",
      },
      {
        q: "Spreken jullie Frans met klanten in Henegouwen?",
        a: "Ja. U kiest zelf of we Nederlands of Frans spreken, aan de telefoon, in de offerte en op de werf. Zoekt u op Mons, Tournai of Mouscron, dan gaat het om Bergen, Doornik en Moeskroen: dezelfde gemeenten, hetzelfde droogpakket en dezelfde technieker die het komt plaatsen.",
      },
      {
        q: "Lost een bouwdroger het vocht in mijn mijnwoning op?",
        a: "Niet alleen. In een woning zonder waterkering in de muurvoet trekt het grondvocht blijvend op, en dat stopt pas met een injectie of een andere vochtwering. Wat een bouwdroger wel doet, is de muur daarna sneller uitdrogen, zodat u eerder kunt pleisteren en schilderen. Zonder die eerste stap droogt hij de lucht, maar komt het vocht terug.",
      },
      {
        q: "Hoe lang droogt een muur in natuursteen of hardsteen?",
        a: "Langer dan een muur in baksteen, omdat het vocht in de kalkmortel en de vulling tussen de stenen zit en maar langzaam naar het oppervlak komt. Reken eerder op weken dan op dagen. De technieker meet bij de start hoe nat de muur is en bij de ophaling hoeveel er nog in zit, zodat u weet of de schilder kan beginnen.",
      },
      {
        q: "Mijn kelder aan de Samber of de Dender liep onder. Wat nu?",
        a: "Laat eerst het staande water wegpompen en haal natte spullen naar buiten. Daarna telt de tijd: na een dag of twee op vochtig materiaal begint schimmel. Bel ons zo vroeg mogelijk, dan kijken we wanneer de rit kan. In een koude kelder werkt een adsorptiedroger beter dan een condensdroger, en die nemen we dan mee.",
      },
      {
        q: "Hoeveel toestellen heb ik nodig voor een verbouwde fabriekshal?",
        a: "Dat hangt af van het volume, niet van de vloeroppervlakte alleen: een loft van vijf meter hoog heeft dubbel zoveel lucht als een gewone woning met dezelfde oppervlakte. Geef in de Calculator de plafondhoogte mee, dan rekent hij het pakket uit op kubieke meter. Voor grote hallen komt het vaak neer op een groot toestel en een ventilator.",
      },
    ],
    realisaties: {
      kop: "Werven in de buurt van Henegouwen",
      intro: "In Henegouwen zelf hebben we nog geen werf gefotografeerd. Deze drie liggen in Brussel, op de route van ons magazijn naar Edingen en 's-Gravenbrakel.",
      slugs: ["dhr-h-brussel", "mnr-s-brussel", "mevr-g-b-sint-pieters-woluwe"],
    },
    areaServed: provincie("Henegouwen"),
  },
  /* ------------------------------------------------------------------ */
  {
    ...route("namen"),
    /*
      De provincie Namen kreeg haar pagina op 15-11-2026, als derde Waalse
      provincie na Waals-Brabant en Henegouwen, met hetzelfde sjabloon,
      dezelfde prijs en hetzelfde pakket.

      Titel en H1 zeggen "de provincie Namen" en niet "Namen", omdat de stad
      een eigen pagina heeft (/bouwdroger-huren-namen-stad). Twee pagina's op
      dezelfde zoekintentie vechten om dezelfde plek; zie de uitleg bij de
      provinciepagina van Antwerpen in src/test/regios.test.ts. De tekst
      noemt het onderscheid, maar linkt er niet naar.

      Wat de provincie eigen maakt: Samber en Maas die in Namen samenkomen,
      de Maasvallei met haar kalkrotsen, de natuurstenen hoeves van de
      Condroz, tweede verblijven in de Famenne en de Ardennen, en het
      leemplateau van de Hesbaye in het noorden. De afstand staat er eerlijk:
      Gembloers ligt op een uur, Vresse-sur-Semois is met Chimay onze verste
      rit. Rijtijden zijn afgerond en te verifiëren tegen de echte
      ritgegevens, net als in `gemeenten.ts`.

      Werven heeft de provincie nog niet; de sectie leent de drie Brusselse.
      Zie `LEENT_VAN`.
    */
    title: "Bouwdroger huren in de provincie Namen | Vernast",
    description:
      "Bouwdroger huren in de provincie Namen: Gembloers, Andenne, Dinant en Ciney. Geleverd, geplaatst en opgehaald vanuit Aartselaar, zonder waarborg.",
    h1: "Bouwdroger huren in de provincie Namen",
    kicker: "Province de Namur · 38 gemeenten · van de Hesbaye tot de Semois",
    intro: [
      "Een bouwdroger huren in de provincie Namen, voor een hoeve in renovatie, een nieuwe chape of een kelder die bij hoog water volliep? Vernast brengt de toestellen tot op uw werf, van Éghezée tot Couvin en van Gembloers tot Vresse-sur-Semois. **Leveren, opstellen en weer ophalen zitten in uw droogpakket.** Over de afstand zijn we liever eerlijk: **Gembloers en Éghezée halen we in ongeveer een uur over de E411**, de stad Namen in iets meer, Dinant en Philippeville in anderhalf uur of langer, en Couvin en Vresse-sur-Semois horen bij de verste ritten die we rijden. Deze pagina gaat over de hele provincie; voor de stad Namen zelf, met Jambes en de wijken aan de oever, bestaat een aparte pagina.",
    ],
    heroFacts: [
      "Levering, plaatsing en ophaling inbegrepen",
      "Geen waarborg",
      "Hulp in het Nederlands en het Frans",
    ],
    bouw: {
      kop: "Waarvoor huurt men in de provincie Namen een bouwdroger?",
      alineas: [
        "**In Namen vloeit de Samber in de Maas**, en langs beide rivieren ligt het dichtste deel van de provincie: Sambreville, Jemeppe-sur-Sambre en Floreffe aan de Samber, Andenne en Profondeville aan de Maas. Het zijn oude industrie- en rivierdorpen met rijwoningen die vaak een gewelfde kelder hebben, half onder het peil van de oever. Bij een hoge waterstand of een zware onweersbui staat daar water in, en dan telt elke dag die u wacht met drogen.",
        "**Stroomopwaarts, tussen Yvoir en Hastière, snijdt de Maas door kalkrotsen.** Dinant ligt geprangd tussen de rotswand en de rivier, en veel huizen in de vallei staan met hun achtergevel tegen de helling. Water uit de rots zoekt zijn weg naar binnen langs de muur aan de bergkant, zodat die achtermuur en de kelder eronder vaak nat blijven terwijl de voorgevel droog is. Een droger die gericht bij die muur staat, haalt er meer uit dan een toestel in het midden van de kamer.",
        "**Op het plateau van de Condroz**, rond Ciney, Havelange en Hamois, staan hoeves en dorpswoningen in kalksteen en zandsteen, met muren van een halve meter dik. Wie zo'n gebouw tot woning verbouwt, giet nieuwe vloeren en pleistert binnenmuren die al jaren onverwarmd stonden. Dat vocht komt maar traag naar buiten. **Verder naar het zuiden, in de Famenne rond Rochefort en in de Ardennen rond Gedinne en Bièvre, zijn het vaak tweede verblijven**: huizen die een winter leeg stonden en bij de eerste lentedag muf en vochtig blijken.",
        "In het noorden ligt **de Hesbaye, het Waalse deel van Haspengouw**: een leemplateau met grote akkers rond Éghezée, Fernelmont en Gembloers. Daar wordt wel nieuw gebouwd, op verkavelingen aan de rand van de dorpen, en daar gaat het om de klassieke droging van een nieuwbouw. Pleisterwerk en chape brengen samen honderden liters water in een woning, en dat moet eruit voor de parketlegger komt.",
      ],
    },
    beeld: {
      src: "/vernast/case-kelder.webp",
      alt: "Kelder van een oude woning met een bouwdroger tegen de natte muur",
    },
    toestellen: {
      kop: "Welke bouwdroger past bij een werf in de provincie Namen?",
      items: [
        {
          key: "ttk350",
          waarom: `**Voor de nieuwbouw in de Hesbaye of een verdieping in een rivierdorp**: 70 liter per dag en een bereik tot ongeveer 400 m³. Op een gewone woning zetten we er een per bouwlaag. Vanaf ${dag("ttk350")} per dag.`,
        },
        {
          key: "ttk650",
          waarom: `**Voor een verbouwde schuur in de Condroz of een kelder die volliep**: 110 liter per dag, tot ongeveer 600 m³. Eén groot toestel waar anders twee kleinere de ruimte zouden delen. Vanaf ${dag("ttk650")} per dag.`,
        },
        {
          key: "revolution",
          waarom: `**De adsorptiedroger voor de koude kelder in de Maasvallei of het tweede verblijf in de Ardennen.** Hij werkt ook bij lage temperatuur en blaast de droge lucht via een slang tot tegen de natte muur. We bekijken de opstelling liefst eerst met u. Vanaf ${dag("revolution")} per dag.`,
        },
        {
          key: "teddh30",
          waarom: `**De elektrische kachel van 30 kW voor een natuurstenen hoeve die in de winter verbouwd wordt.** Pas als de ruimte warm genoeg is, haalt een condensdroger zijn volle vermogen. Vraagt krachtstroom (400 V) op de werf. Vanaf ${dag("teddh30")} per dag.`,
        },
      ],
    },
    levering: {
      kop: "Leveren in de provincie Namen: over de E411, met een afgesproken uur",
      alineas: [
        "Vanuit Aartselaar rijden we over de Brusselse ring en dan de E411 af naar het zuidoosten. **Gembloers, Éghezée en Sombreffe liggen op ongeveer een uur, de stad Namen op vijf kwartier.** Voor de Maasvallei richting Dinant en voor het zuiden rond Philippeville en Florennes rekenen we anderhalf uur of meer. Couvin, Viroinval, Gedinne en Vresse-sur-Semois liggen op rond twee uur of iets langer, en daar leggen we het uur van levering samen met u vast.",
        `De technieker meet bij aankomst hoe nat de muren en de vloer zijn, plaatst de toestellen waar het vocht zit en legt de afvoer naar een putje, een gootsteen of naar buiten. **Naar boven via de trap is inbegrepen**; ligt de trap er nog niet, dan rekenen we ${euro(LADDER)} per verdieping via de ladder. Kilometers rekenen we niet aan: een werf in Vresse-sur-Semois kost hetzelfde droogpakket als een werf in Gembloers.`,
      ],
      feiten: [
        { label: "Levering en installatie", waarde: "Inbegrepen in het droogpakket, geen kilometerkost" },
        { label: "Levertermijn", waarde: "Binnen 24 uur, in een ronde buiten de spits" },
        { label: "Rijtijd vanuit ons magazijn", waarde: "Rond een uur (Gembloers, Éghezée) tot ruim twee uur (Vresse-sur-Semois)" },
        { label: "Taal", waarde: "Nederlands of Frans, naar keuze" },
        { label: "Verdieping via ladder", waarde: `${euro(LADDER)} per verdieping, vooraf melden` },
        { label: "Condenspomp (aangeraden)", waarde: `${euro(POMP)} per bouwdroger per dag` },
      ],
    },
    afhalen: {
      kop: "Afhalen vanuit de provincie Namen: zelden een goed idee",
      alineas: [
        `Ons afhaalpunt ligt in Aartselaar, aan de A12 net onder Antwerpen. Vanuit Gembloers is dat een uur rijden, vanuit Dinant of Ciney al snel het dubbele, en die rit maakt u twee keer. **Bij een volledig droogpakket bespaart u daarmee niets, want de levering zit al in de prijs.** Heeft u maar één droger of ventilator nodig voor een lange periode en komt u toch in de buurt van Antwerpen, dan krijgt u ${euro(AFHAALKORTING)} korting op de huurprijs en een vast afhaalmoment op een werkdag tussen 07:30 en 17:00.`,
      ],
      feiten: [
        { label: "Rijtijd naar ons afhaalpunt", waarde: "Een uur (Gembloers) tot ruim twee uur (het zuiden)" },
        { label: "Korting bij afhalen", waarde: `${euro(AFHAALKORTING)} op de huurprijs` },
        { label: "Waarborg", waarde: "Geen" },
        { label: "Vervoer", waarde: "Rechtop; plat vervoerd 24 uur laten staan" },
        { label: "Liever laten leveren?", waarde: "De rit zit al in elke pakketprijs" },
      ],
    },
    faq: [
      {
        q: "Is deze pagina voor de stad Namen of voor de provincie?",
        a: "Voor de provincie: alle 38 gemeenten, van Éghezée in het noorden tot Vresse-sur-Semois in het zuiden. Voor de stad Namen zelf, met Jambes, Salzinnes en de andere deelgemeenten, staat er een aparte pagina. Het droogpakket en de prijs zijn op beide pagina's dezelfde; alleen de uitleg over de streek verschilt.",
      },
      {
        q: "Komen jullie ook tot in Couvin of Vresse-sur-Semois?",
        a: "Ja, al is het met ruim twee uur rijden vanuit Aartselaar een van onze langste ritten. Daarom spreken we het uur van levering met u af, in plaats van u een venster van een halve dag te geven. De prijs blijft gelijk: levering, plaatsing en ophaling zitten in het droogpakket, zonder toeslag voor de kilometers.",
      },
      {
        q: "Kunnen we met jullie in het Frans afspreken?",
        a: "Ja. U kiest zelf of we in het Nederlands of het Frans praten, aan de telefoon, in de offerte en bij de plaatsing op de werf. Zoekt u op Namur, Gembloux of Dinant, dan vindt u hier dezelfde gemeenten en hetzelfde pakket, alleen met hun Nederlandse naam waar die bestaat.",
      },
      {
        q: "Mijn huis staat tegen de rots in de Maasvallei. Helpt een droger tegen de natte achtermuur?",
        a: "Hij haalt het vocht uit de lucht en uit de muur, zodat u kunt pleisteren of schilderen. Komt er blijvend water uit de helling achter het huis, dan lost een droger dat niet op: dan is drainage of een waterdichting nodig, en daarna kan de muur uitdrogen. De technieker meet bij de start waar het vocht zit en zegt eerlijk wat de droger kan.",
      },
      {
        q: "Ons tweede verblijf in de Ardennen is muf na de winter. Wat raden jullie aan?",
        a: "Meestal is dat geen waterschade maar condens: een koud huis dat maanden dicht stond. Een adsorptiedroger werkt dan beter dan een condensdroger, omdat hij ook bij lage temperatuur vocht blijft opnemen. Laat in de tussentijd zo veel mogelijk verwarmen en verluchten, en kijk achter kasten en in de hoeken of er al schimmel zit.",
      },
      {
        q: "Hoe lang duurt het drogen van een verbouwde hoeve in de Condroz?",
        a: "Langer dan een nieuwbouw, omdat de dikke natuurstenen muren hun vocht pas na weken loslaten en de nieuwe chape er nog bovenop komt. Reken op enkele weken met een droger per bouwlaag, en in de winter met een kachel erbij. Bij de ophaling meet de technieker opnieuw, zodat u weet of de vloerder of de schilder kan starten.",
      },
    ],
    realisaties: {
      kop: "Werven in de buurt van Namen",
      intro: "In de provincie Namen hebben we tot nu toe geen werf gefotografeerd. Deze drie liggen in Brussel, waar onze rit naar Gembloers en Namen langs passeert.",
      slugs: ["dhr-h-brussel", "mnr-s-brussel", "mevr-g-b-sint-pieters-woluwe"],
    },
    areaServed: provincie("Namen"),
  },
  /* ------------------------------------------------------------------ */
  {
    ...route("luxemburg"),
    /*
      De provincie Luxemburg kreeg haar pagina op 15-11-2026, na Waals-Brabant,
      Henegouwen en Namen, met hetzelfde sjabloon, dezelfde prijs en hetzelfde
      pakket.

      Twee dingen maken deze pagina anders. Ten eerste de naam: wie
      "bouwdroger Luxemburg" zoekt, kan ook het Groothertogdom bedoelen, en
      daar leveren we niet. Titel, kicker, intro en een vraag zeggen daarom
      uitdrukkelijk dat het om de Belgische provincie gaat. Ten tweede de
      afstand: Aarlen en Virton zijn de verste ritten die we rijden, en dat
      staat er zonder omweg, om dezelfde reden als bij Chimay in Henegouwen.
      Wat de provincie verder eigen maakt: de Famenne, het koude plateau rond
      Bastenaken, leisteen rond Bertrix en Herbeumont, de Ourthe en de Semois,
      de Lotharingse huizen van de Gaume, de grensarbeiders rond Aarlen en de
      vele tweede verblijven. Rijtijden zijn afgerond en te verifiëren tegen
      de echte ritgegevens, net als in `gemeenten.ts`.

      Werven heeft de provincie nog niet; de sectie leent de drie Brusselse,
      die op de rit naar het zuiden liggen. Zie `LEENT_VAN`.
    */
    title: "Bouwdroger huren in de provincie Luxemburg | Vernast",
    description:
      "Bouwdroger huren in de Belgische provincie Luxemburg: Aarlen, Bastenaken, Marche en Libramont. Geleverd, geplaatst en opgehaald, zonder waarborg.",
    h1: "Bouwdroger huren in de provincie Luxemburg",
    kicker: "Province de Luxembourg (België) · 43 gemeenten · onze verste ritten",
    intro: [
      "Een bouwdroger huren in de Belgische provincie Luxemburg, voor een ruwbouw op het Ardense plateau, een verbouwde hoeve of een vakantiewoning die na de winter vochtig is? Vernast brengt de toestellen tot op uw werf, van Durbuy tot Virton en van Gouvy tot Bouillon. **Het droogpakket omvat de levering, de plaatsing en de ophaling.** Het gaat hier om de Belgische provincie, niet om het Groothertogdom: daar leveren we niet. En over de afstand zeggen we het liever meteen: **Durbuy en Marche-en-Famenne liggen op anderhalf à twee uur van ons magazijn**, Bastenaken en Libramont op rond twee uur, en **Aarlen en Virton op tweeënhalf à drie uur. Dat zijn de verste ritten die we rijden.**",
    ],
    heroFacts: [
      "Levering, plaatsing en ophaling inbegrepen",
      "Geen waarborg",
      "Hulp in het Nederlands en het Frans",
    ],
    bouw: {
      kop: "Waarvoor huurt men in de provincie Luxemburg een bouwdroger?",
      alineas: [
        "Het is de grootste provincie van het land en de minst dicht bevolkte, en dat bepaalt de werven. **Het zijn zelden rijen nieuwbouw, veel vaker losse huizen**: een hoeve die een woning wordt, een vakantiehuis dat grondig wordt aangepakt, een nieuwe woning op een kavel aan de rand van een dorp. Elke werf is anders, en de afstand tussen twee werven is groot. Daarom stellen we het pakket liefst vooraf samen met u op, zodat de technieker niet voor een tweede rit moet terugkomen.",
        "**In de Famenne, rond Marche, Hotton en Durbuy, ligt een lage strook tussen de Condroz en de Ardennen.** De ondergrond is schist met kalk aan de randen, en de oude hoeves zijn gebouwd in de steen die er gewonnen werd. Waar de Ourthe door Hotton, Durbuy en La Roche-en-Ardenne loopt, staan huizen dicht bij het water, en bij hoog water lopen kelders en garages er onder. Na zo'n overstroming zit het vocht diep in het metselwerk, en een droging duurt er weken.",
        "**Op het hoge plateau, rond Bastenaken, Libramont, Vielsalm en Houffalize, ligt de grond op vierhonderd tot zeshonderd meter.** De winters zijn er kouder en langer dan in de rest van het land, met meer vorstdagen en vaker sneeuw. Een ruwbouw zonder verwarming blijft daar van november tot maart koud en nat: de chape droogt nauwelijks, het pleisterwerk evenmin. **Op zo'n werf hoort een bouwkachel naast de droger**, want onder vijftien graden haalt een condensdroger maar een klein deel van zijn vermogen.",
        "**Rond Bertrix, Herbeumont en Bouillon is het land van leisteen en bos.** Daken en vaak ook gevels zijn in leisteen, de huizen staan op hellingen, en de Semois kronkelt van Florenville en Chiny langs Herbeumont naar Bouillon. Huizen in het dal krijgen er grondwater en dauw, huizen op de helling water dat langs de achtermuur naar beneden komt. Veel van die woningen zijn tweede verblijven die een seizoen dicht stonden, en dan is het vocht vaak condens in een koud huis, geen lek.",
        "**Helemaal in het zuiden ligt de Gaume, rond Virton, Rouvroy en Meix-devant-Virton**, met de lange Lotharingse huizen: woning, stal en schuur onder één doorlopend dak, met de nok evenwijdig aan de straat. Wie zo'n huis verbouwt, maakt van de schuur een leefruimte met een nieuwe vloer en nieuw pleisterwerk tegen oude, dikke muren. Rond Aarlen, Messancy, Aubange en Attert wordt dan weer veel nieuw gebouwd door gezinnen die over de grens in het Groothertogdom werken. **Daar gaat het om de klassieke nieuwbouwdroging**, met een strakke planning voor de vloerder.",
      ],
    },
    beeld: {
      src: "/vernast/case-nieuwbouw.webp",
      alt: "Woning in afwerking in de Ardennen, met bouwdrogers op het gelijkvloers",
    },
    toestellen: {
      kop: "Welke bouwdroger past bij een werf in de provincie Luxemburg?",
      items: [
        {
          key: "ttk350",
          waarom: `**Voor een nieuwbouw rond Aarlen of één bouwlaag van een verbouwde hoeve**: 70 liter per dag en een bereik tot ongeveer 400 m³. Op een gewone woning plaatsen we er een per verdieping. Vanaf ${dag("ttk350")} per dag.`,
        },
        {
          key: "teddh30",
          waarom: `**De bouwkachel van 30 kW voor de winterwerf op het Ardense plateau.** Zonder warmte blijft een ruwbouw in Bastenaken of Libramont te koud om te drogen; met deze kachel erbij komt de droger op toeren. Vraagt krachtstroom (400 V) op de werf. Vanaf ${dag("teddh30")} per dag.`,
        },
        {
          key: "revolution",
          waarom: `**De adsorptiedroger voor het vakantiehuis dat een winter dicht stond** of een koude kelder aan de Ourthe of de Semois. Hij blijft vocht opnemen bij lage temperatuur en stuurt de droge lucht via slangen naar de natte plek. Die opstelling bespreken we liefst eerst met u. Vanaf ${dag("revolution")} per dag.`,
        },
        {
          key: "ttk650",
          waarom: `**Voor de schuur van een Lotharingse hoeve die tot leefruimte wordt verbouwd**: 110 liter per dag, tot ongeveer 600 m³. In een hoge, open ruimte doet één groot toestel meer dan twee kleine. Vanaf ${dag("ttk650")} per dag.`,
        },
      ],
    },
    levering: {
      kop: "Leveren in de provincie Luxemburg: de langste rit, goed gepland",
      alineas: [
        "Vanuit Aartselaar gaat het over de Brusselse ring en de E411 langs Namen naar het zuidoosten. **De Famenne, met Marche, Hotton en Durbuy, halen we in anderhalf à twee uur.** Bastenaken, Libramont, Neufchâteau en Saint-Hubert liggen op rond twee uur. Voor Aarlen, Virton, Florenville en de rest van het zuiden rekenen we tweeënhalf à drie uur. Omdat elke rit zo lang is, combineren we werven in de provincie waar het kan en spreken we het uur van levering vooraf met u af.",
        `Ter plaatse meet de technieker het vocht in vloer en muren, zet de toestellen waar het nodig is en legt de afvoer naar een putje, een gootsteen of naar buiten. **Naar de verdieping via de trap zit in de prijs**; moet het via een ladder omdat de trap er nog niet ligt, dan geldt ${euro(LADDER)} per verdieping. Voor de kilometers betaalt u niets extra: een werf in Virton kost hetzelfde droogpakket als een werf in Durbuy.`,
      ],
      feiten: [
        { label: "Levering en installatie", waarde: "Inbegrepen in het droogpakket, geen kilometerkost" },
        { label: "Levertermijn", waarde: "Binnen 24 uur, in een ronde buiten de spits" },
        { label: "Rijtijd vanuit ons magazijn", waarde: "Anderhalf uur (Durbuy) tot rond drie uur (Virton)" },
        { label: "Taal", waarde: "Nederlands of Frans, naar keuze" },
        { label: "Verdieping via ladder", waarde: `${euro(LADDER)} per verdieping, vooraf melden` },
        { label: "Condenspomp (aangeraden)", waarde: `${euro(POMP)} per bouwdroger per dag` },
      ],
    },
    afhalen: {
      kop: "Afhalen vanuit de provincie Luxemburg: reken het eerst uit",
      alineas: [
        `Wie zelf wil afhalen, rijdt naar ons magazijn in Aartselaar, aan de A12 onder Antwerpen. Vanuit Marche is dat ongeveer twee uur rijden, vanuit Aarlen of Virton bijna drie, en dat twee keer: bij het ophalen en bij het terugbrengen. **Voor een droogpakket is dat een verloren dag, want de levering is al inbegrepen.** Alleen wie toch in de buurt van Antwerpen moet zijn en één losse droger lang nodig heeft, wint er iets bij: ${euro(AFHAALKORTING)} korting op de huurprijs en een vast afhaalmoment op een werkdag tussen 07:30 en 17:00.`,
      ],
      feiten: [
        { label: "Rijtijd naar ons afhaalpunt", waarde: "Rond twee uur (Marche) tot bijna drie uur (Aarlen, Virton)" },
        { label: "Korting bij afhalen", waarde: `${euro(AFHAALKORTING)} op de huurprijs` },
        { label: "Waarborg", waarde: "Geen" },
        { label: "Vervoer", waarde: "Rechtop; plat vervoerd 24 uur laten staan" },
        { label: "Liever laten leveren?", waarde: "De rit zit al in elke pakketprijs" },
      ],
    },
    faq: [
      {
        q: "Leveren jullie ook in het Groothertogdom Luxemburg?",
        a: "Nee. Deze pagina gaat over de Belgische provincie Luxemburg, met Aarlen, Bastenaken, Marche-en-Famenne en Virton, en daar leveren we in alle 43 gemeenten. Over de grens, in Luxemburg-Stad, Esch-sur-Alzette of elders in het Groothertogdom, plaatsen we geen toestellen. Woont u in België en werkt u daar, dan bent u bij ons wel aan het juiste adres.",
      },
      {
        q: "Komen jullie echt tot in Aarlen of Virton?",
        a: "Ja, al is het met tweeënhalf à drie uur rijden vanuit Aartselaar onze langste rit. Daarom bundelen we de werven in het zuiden waar het kan en spreken we een vast uur af in plaats van een venster van een halve dag. De prijs blijft dezelfde: levering, plaatsing en ophaling zitten in het pakket, zonder toeslag voor de afstand.",
      },
      {
        q: "Kan ik in het Frans met jullie afspreken?",
        a: "Ja. Aan de telefoon, in de offerte en bij de plaatsing kiest u zelf tussen Nederlands en Frans. Zoekt u op Arlon, Bastogne of Neufchâteau, dan vindt u hier dezelfde gemeenten onder hun Nederlandse naam waar die bestaat: Aarlen en Bastenaken. Pakket en prijs zijn gelijk.",
      },
      {
        q: "Droogt een ruwbouw in de Ardennen in de winter wel?",
        a: "Met een droger alleen gaat het traag, omdat de lucht in een koude ruwbouw weinig vocht opneemt en de chape haar water amper afgeeft. Met een bouwkachel erbij wordt de ruimte warm genoeg om de droger op volle kracht te laten werken. Die kachel vraagt wel krachtstroom; heeft de werf alleen een gewoon stopcontact, zeg het ons dan vooraf.",
      },
      {
        q: "Ons vakantiehuis aan de Semois is vochtig na de winter. Is dat waterschade?",
        a: "Meestal niet. Een huis dat maanden koud en gesloten stond, krijgt condens op muren en ramen, en dan ruikt het muf zonder dat er ergens een lek is. Een adsorptiedroger haalt dat vocht er ook bij lage temperatuur uit. Kijk wel achter kasten en in de hoeken naar schimmel, en laat het huis daarna geregeld verluchten en verwarmen.",
      },
      {
        q: "Hoe lang duurt het drogen van een verbouwde Lotharingse hoeve?",
        a: "Langer dan een nieuwbouw. De oude muren zijn dik en houden veel vocht vast, en er komen een nieuwe chape en nieuw pleisterwerk bovenop. Reken op enkele weken, met een droger per bouwlaag en in de koude maanden een kachel erbij. De technieker meet bij de start en bij de ophaling, zodat u weet wanneer de vloerder kan beginnen.",
      },
    ],
    realisaties: {
      kop: "Werven in de buurt van de provincie Luxemburg",
      intro: "In de provincie Luxemburg zelf hebben we nog geen werf gefotografeerd. Deze drie liggen in Brussel, aan het begin van onze rit langs de E411 naar het zuiden.",
      slugs: ["dhr-h-brussel", "mnr-s-brussel", "mevr-g-b-sint-pieters-woluwe"],
    },
    areaServed: provincie("Luxemburg"),
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
  /*
    Zonder de nadrukmarkering. De teksten hierboven zetten met `**…**` een paar
    woorden per alinea vet (zie src/components/content/nadruk.tsx); de test die
    woorden telt en zinnen tussen twee provincies vergelijkt, hoort de tekst te
    zien zoals de bezoeker ze leest.
  */
  const kaal = (t: string) => t.replace(/\*\*/g, "");
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
  ]
    .map(kaal)
    .join("\n");
}

/** De projecten uit `REALISATIES` waar deze regio naar verwijst, in volgorde. */
export function realisatiesVoor(regio: Regio) {
  return regio.realisaties.slugs.map((slug) => {
    const r = REALISATIES.find((x) => x.slug === slug);
    if (!r) throw new Error(`Regio ${regio.slug} verwijst naar onbekende realisatie ${slug}`);
    return r;
  });
}
