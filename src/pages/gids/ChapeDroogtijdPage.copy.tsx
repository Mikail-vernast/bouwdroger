import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import type { GidsFaq } from "@/components/gids/GidsShell";
import type { Copy } from "@/i18n/useTaal";

/**
 * De teksten van de chapegids per taal.
 *
 * Een functie per taal: de zinnen dragen de termijnen uit de catalogus
 * (`droogtermijnen("chape")`) en interne links mee. De getallen zelf rekent de
 * pagina uit; hier staat alleen hoe ze in een zin landen, zodat een Franse
 * lezer nooit een ander getal ziet dan een Nederlandse.
 */
export interface ChapeRij {
  cm: number;
  weken: number;
}

export interface ChapeHulp {
  lp: (nlPad: string) => string;
  chape: ChapeRij[];
  dunste?: ChapeRij;
  dikste?: ChapeRij;
  /** De vuistregel voor natuurlijk drogen, in weken. */
  nat: (cm: number) => number;
}

export interface ChapeTekst {
  weken: (n: number) => string;
  faq: GidsFaq[];
  crumbHome: string;
  crumbGidsen: string;
  crumb: string;
  kick: string;
  h1: string;
  intro: ReactNode;
  heroAlt: string;
  badge: string;
  badgeSub: string;
  stats: { n: ReactNode; em: string; l: ReactNode }[];
  vuistH2: string;
  vuist: ReactNode[];
  snedeTitel: string;
  snedeSub: string;
  lucht: string;
  luchtSub: string;
  chape: string;
  iso: string;
  beton: string;
  snedeVoet: string;
  rwKick: string;
  rwH2: string;
  rwLede: string;
  natLabel: (cm: number) => string;
  pakLabel: (cm: number) => string;
  vglNoot: string;
  caption: string;
  thDikte: string;
  thNat: string;
  thPak: string;
  rwNote: ReactNode;
  fKick: string;
  fH2: string;
  fLede: string;
  f1Label: string;
  f1H3: string;
  f1P: string;
  f1Bar: string;
  f2Label: string;
  f2H3: string;
  f2P: string;
  f2Bar: string;
  fNote: ReactNode;
  prKick: string;
  prH2: string;
  prLede: string;
  factoren: { titel: string; tekst: string }[];
  soKick: string;
  soH2: string;
  soLede: string;
  cemLabel: string;
  cemH3: string;
  cem: { b: string; rest: string }[];
  cemVoet: string;
  anhLabel: string;
  anhH3: string;
  anh: { b: string; rest: string }[];
  anhVoet: string;
  vvKick: string;
  vvH2: string;
  vvLede: string;
  opstook: { b: string; rest: string }[];
  vvNote: ReactNode;
  mKick: string;
  mH2: string;
  mLede: string;
  zekerLabel: string;
  zekerH3: string;
  zeker: { b: string; rest: string }[];
  zekerVoet: ReactNode;
  misLabel: string;
  misH3: string;
  mis: { b: string; rest: string }[];
  faqTitel: string;
  vlKick: string;
  vlH2: string;
  vlLede: string;
  dk1H3: string;
  dk1P: string;
  dk1Meer: string;
  dk2H3: string;
  dk2P: string;
  dk2Meer: string;
  links: { pad: string; label: string }[];
  mbKick: string;
  mbH3: string;
  mbP: ReactNode;
  mbCta: string;
  mbAlt: string;
  contact: { kicker: string; titel: string; lede: string; onderwerpen: string[]; placeholder: string };
}

/* ------------------------------------------------------------------ */

const nlWeken = (n: number) => `${n} ${n === 1 ? "week" : "weken"}`;

const STAART_NL: Record<number, string> = {
  5: "Vijf centimeter is de dunste chape in onze pakketten en de snelste droging: de vuistregel van een week per centimeter houdt hier nog grotendeels stand.",
  6: "Zes centimeter is de gewoonste dikte in een Belgische nieuwbouw. De twee extra centimeter boven de vier wegen dubbel, en dat verklaart het verschil met een vloer van 5 cm.",
  7: "Bij zeven centimeter wordt wachten op het weer echt duur: dit is de dikte waar natuurlijk drogen een volledige bouwvakantie kan opslokken.",
};

const frWeken = (n: number) => `${n} ${n === 1 ? "semaine" : "semaines"}`;

const STAART_FR: Record<number, string> = {
  5: "Cinq centimètres, c'est la chape la plus fine de nos packs et le séchage le plus rapide : la règle d'une semaine par centimètre tient encore largement ici.",
  6: "Six centimètres, c'est l'épaisseur la plus courante dans une nouvelle construction belge. Les deux centimètres au-delà de quatre comptent double, et cela explique l'écart avec un sol de 5 cm.",
  7: "À sept centimètres, attendre la météo devient vraiment coûteux : c'est l'épaisseur où le séchage naturel peut engloutir tout un congé du bâtiment.",
};

const enWeken = (n: number) => `${n} ${n === 1 ? "week" : "weeks"}`;

const STAART_EN: Record<number, string> = {
  5: "Five centimetres is the thinnest screed in our packages and the quickest to dry: the rule of thumb of one week per centimetre still largely holds here.",
  6: "Six centimetres is the most common thickness in a Belgian new build. The two extra centimetres beyond four count double, and that explains the difference with a 5 cm floor.",
  7: "At seven centimetres, waiting on the weather gets really expensive: this is the thickness where natural drying can swallow an entire construction holiday.",
};

export const COPY = {
  nl: ({ lp, chape, dunste, dikste, nat }: ChapeHulp): ChapeTekst => ({
    weken: nlWeken,
    faq: [
      ...chape.map((rij) => ({
        question: `Hoe lang moet chape van ${rij.cm} cm drogen?`,
        answer: `Als richtwaarde droogt cementchape van ${rij.cm} cm op eigen kracht ongeveer ${nlWeken(
          nat(rij.cm),
        )}, en dan nog alleen in een gebouw dat verwarmd en geventileerd is. Met een bouwdroger rekenen wij voor die dikte op een huurtermijn van ${nlWeken(
          rij.weken,
        )}, inclusief een meting bij de start en bij de oplevering. ${
          STAART_NL[rij.cm] ??
          "Hoeveel toestellen die dikte vraagt, hangt af van de oppervlakte; de droogcalculator rekent dat voor u uit."
        } Let op: de kalender beslist niet of de vloer klaar is, de meting wel. Een koude of dichtgemaakte werf loopt makkelijk weken uit op deze richtwaarde.`,
      })),
      {
        question: "Wanneer mag de bouwdroger aan na het leggen van de chape?",
        answer:
          "Niet meteen. Cementchape bindt water chemisch tijdens het uitharden, en in die eerste fase heeft ze dat water nog nodig. Vraag uw chapeur vanaf wanneer u actief mag drogen, dat is een kwestie van dagen tot weken, afhankelijk van het mengsel en van wat erin zit. Zet u de droger te vroeg en te hard aan, dan droogt de bovenkant uit terwijl de onderkant nog nat is, en dat geeft krimp, scheuren en in het slechtste geval een vloer die loskomt. Daarna mag het toestel wel dag en nacht draaien: elk uur stilstand laat de luchtvochtigheid weer oplopen.",
      },
      {
        question: "Kan chape te snel drogen?",
        answer:
          "Ja, en dat is het risico dat mensen onderschatten. Droogt alleen het oppervlak, dan krimpt de bovenkant terwijl de onderkant nog uitzet van vocht; die spanning komt eruit als scheuren of als opstaande randen. Daarom droogt een bouwdroger niet zo hard mogelijk, maar naar een streefwaarde die de technieker instelt, en daarom zet u de vloerverwarming niet meteen op volle kracht. Een gecontroleerde droging met meting voor en na is sneller én veiliger dan een vloer die u in een week probeert te forceren.",
      },
      {
        question: "Mag ik de vloerverwarming gebruiken om chape te drogen?",
        answer:
          "Ja, maar alleen volgens een opstookprotocol: rustig starten op een lage aanvoertemperatuur, per dag een stap opdrijven tot het maximum dat de fabrikant toestaat, enkele dagen aanhouden en dan even geleidelijk afbouwen, en dat alles pas na de wachttijd die de chapeur voorschrijft. Zet de verwarming nooit in één keer hoog. En vergeet niet dat verwarmen het vocht alleen uit de vloer haalt, niet uit het gebouw: zonder bouwdroger of ventilatie slaat het neer op ramen, dorpels en buitenmuren. Een doorlopen opstookprotocol is ook geen bewijs dat de vloer droog is; dat blijft een meting.",
      },
      {
        question: "Hoe weet ik of mijn chape droog genoeg is voor parket of tegels?",
        answer:
          "Door te meten, meestal met een CM-meting (carbidemethode) op een staal uit de volle diepte van de vloer. Een oppervlaktemeter zegt te weinig: een chape die hard en licht van kleur is, kan vanbinnen nog nat zijn. Welke grenswaarde geldt, hangt af van het type chape, van de vloerverwarming en van de afwerking, onder tegels mag doorgaans meer restvocht zitten dan onder parket, pvc of een gietvloer. Uw vloerlegger bepaalt die grens, dus vraag hem vooraf welke waarde hij wil zien; dan weet u waar u naartoe droogt. Bij onze droogpakketten zit een voor- en nameting, en op aanvraag een meetrapport.",
      },
      {
        question: "Hoe kan ik chape sneller laten drogen?",
        answer:
          "Door het klimaat in het gebouw te sturen in plaats van af te wachten. Drie dingen tegelijk: warmte, zodat de lucht meer vocht kan dragen; een bouwdroger, die dat vocht permanent uit de lucht haalt; en luchtbeweging, zodat de verzadigde laag boven de vloer wordt weggeveegd en droge lucht erbij kan. Laat het toestel dag en nacht draaien en houd ramen en deuren dicht, u droogt de ruimte, niet de straat. Wat niet werkt: alleen verwarmen, alleen ventileren bij vochtig buitenweer, of de droger 's nachts uitzetten om stroom te sparen.",
      },
      {
        question: "Hoeveel bouwdrogers heb ik nodig voor mijn chape?",
        answer:
          "Dat hangt af van het volume van de ruimte, niet van de oppervlakte alleen: een hoge open ruimte vraagt meer dan een lage. Daarom vraagt de droogcalculator uw oppervlakte, wat u droogt en de dikte, en stelt ze daarna een pakket samen met het aantal toestellen en de huurtermijn die erbij horen. Eén te klein toestel in een grote ruimte droogt niet sneller als u het langer laat staan; het haalt de streefwaarde simpelweg niet. Twijfelt u, bel ons dan, een verkeerd ingeschat pakket kost u weken, en die weken zijn duurder dan het toestel.",
      },
      {
        question: "Moet ik de ramen openzetten terwijl de bouwdroger draait?",
        answer:
          "Nee, houd ze dicht. Een bouwdroger droogt de lucht in een afgesloten ruimte; staat er een raam open, dan haalt u voortdurend nieuwe, vochtige buitenlucht binnen en blijft het toestel die drogen in plaats van uw vloer. Ventileren helpt alleen als de buitenlucht droger is dan de binnenlucht, en in een Belgische winter of een regenachtige herfst is dat zelden het geval. Doe ook deuren naar niet-gedroogde delen van het gebouw toe, en laat de droger in die afgesloten ruimte staan.",
      },
      {
        question: "Hoe lang moet anhydrietchape drogen?",
        answer:
          "Anhydrietchape (op basis van calciumsulfaat) wordt vloeibaar gegoten en ligt daardoor vaak dunner en vlakker, wat in haar voordeel werkt. Daar staat tegenover dat ze gevoeliger is voor vocht en doorgaans een lagere restvochtigheid vraagt voor ze afgewerkt mag worden; vaak moet ook de bovenste laag geschuurd worden voordat ze goed kan drogen en hechten. Volg daarom altijd het voorschrift van de plaatser en de fabrikant, die verschillen per product, en ze gaan boven elke vuistregel. Het droogprincipe blijft wel hetzelfde: zonder droge, bewegende lucht in het gebouw gaat er niets uit de vloer.",
      },
      {
        question: "Is een bouwdroger huren de moeite, of kan ik gewoon wachten?",
        answer: `Wachten kan, en kost niets aan huur. Wat het wél kost, is tijd die u elders betaalt: ${
          dikste
            ? `bij ${dikste.cm} cm chape staat er ongeveer ${nlWeken(nat(dikste.cm))} tussen natuurlijk drogen en ${nlWeken(dikste.weken)} met een droogpakket`
            : "een droging op eigen kracht duurt een veelvoud van een gestuurde droging"
        }. In die weken loopt uw bouwkrediet door, schuift elke volgende vakman mee op en hangt het vocht in een gesloten gebouw waar het schimmel en opstijgend vocht in het pleisterwerk kan geven. Bovendien is wachten geen garantie: in een koude, dichtgemaakte werf zonder ventilatie stáát de droging stil, hoe lang u ook wacht. Daarom zit er bij ons een meting voor en na, en een Drooggarantie: is de vloer op de einddatum niet droog, dan verlengen wij kosteloos.`,
      },
    ],
    crumbHome: "Home",
    crumbGidsen: "Gidsen",
    crumb: "Hoe lang moet chape drogen?",
    kick: "Gids · droogtijden",
    h1: "Hoe lang moet chape drogen?",
    intro: (
      <p>
        Cementchape van {dunste?.cm} tot {dikste?.cm} cm droogt op eigen kracht in ongeveer{" "}
        {nat(dunste?.cm ?? 5)} tot {nat(dikste?.cm ?? 7)} weken. Met een
        bouwdroger rekenen wij voor die diktes op {dunste?.weken} tot {dikste?.weken} weken. Wat het bij
        u wordt, hangt af van de dikte, het type chape, de temperatuur en de ventilatie. Hieronder staan
        de richtwaarden per dikte, het verschil met en zonder bouwdroger, en hoe u weet wanneer de
        vloerlegger mag komen.
      </p>
    ),
    heroAlt: "De Vernast vakmannen met hun bouwdrogers",
    badge: "± 1 week per cm",
    badgeSub: "vuistregel tot 4 cm, daarna trager",
    stats: dikste
      ? [
          { n: "1", em: "week/cm", l: "Vuistregel voor natuurlijk drogen, voor de eerste 4 cm cementchape" },
          { n: "2", em: "weken/cm", l: "Voor elke centimeter daarboven: het vocht moet door de volle dikte" },
          { n: <>± {nat(dikste.cm)}</>, em: "weken", l: <>Natuurlijk drogen bij {dikste.cm} cm, in een verwarmd en geventileerd gebouw</> },
          { n: <>{dikste.weken}</>, em: "weken", l: <>Met een droogpakket bij {dikste.cm} cm, met voor- en nameting van het restvocht</> },
        ]
      : [],
    vuistH2: "De vuistregel: ongeveer een week per centimeter",
    vuist: [
      <>
        Voor cementchape die op eigen kracht droogt, geldt in de bouw een oude vuistregel:{" "}
        <b>ongeveer één week per centimeter voor de eerste 4 cm</b>. Daarboven gaat het aanzienlijk
        trager, reken dan grofweg op <b>twee weken per extra centimeter</b>. Een vloer van{" "}
        {dikste?.cm} cm zit daarmee niet op {dikste?.cm} weken maar op ongeveer{" "}
        {nat(dikste?.cm ?? 7)}.
      </>,
      <>
        Dat komt niet door de hoeveelheid water alleen, maar door de weg die het moet afleggen. Onder
        de chape zitten isolatie en een betonnen draagvloer; daar gaat niets doorheen. Het vocht uit
        de onderste laag heeft dus maar één uitweg: naar boven, door de volle dikte van de vloer. Hoe
        dikker de chape, hoe langer die weg, en hoe trager de laatste centimeters eruit komen.
      </>,
      <>
        Die richtwaarden gelden bij een verwarmd, geventileerd gebouw rond kamertemperatuur. In een
        koude, dichtgemaakte winterwerf loopt het makkelijk verder uit, want dan kan de lucht boven de
        vloer het vocht niet meer opnemen. Waarom dat zo werkt, staat uitgebreid op{" "}
        <Link to={lp("/hoe-drogen-werkt")}>hoe drogen werkt</Link>.
      </>,
    ],
    snedeTitel: "Doorsnede van de vloer",
    snedeSub: `${dikste?.cm} cm chape`,
    lucht: "Lucht in de ruimte",
    luchtSub: "hier haalt de bouwdroger het vocht weg",
    chape: "Chape",
    iso: "Isolatie",
    beton: "Betonnen draagvloer",
    snedeVoet:
      "Naar onderen kan het vocht niet weg. Daarom kost elke centimeter boven de vierde ongeveer twee weken in plaats van één, en daarom helpt droge, bewegende lucht bóven de vloer zoveel.",
    rwKick: "Richtwaarden",
    rwH2: "Droogtijd van chape per dikte.",
    rwLede:
      "Links wat de vloer op eigen kracht nodig heeft, rechts de huurtermijn die wij voor die dikte in onze pakketten rekenen. Het verschil is geen belofte over úw vloer, maar het verschil tussen afwachten en het klimaat sturen.",
    natLabel: (cm) => `${cm} cm, natuurlijk drogen`,
    pakLabel: (cm) => `${cm} cm, met een droogpakket`,
    vglNoot:
      "De balken staan op dezelfde schaal, met de langste droging op 100 %. Dezelfde getallen staan in de tabel hieronder.",
    caption:
      "Natuurlijk drogen: richtwaarde voor cementchape bij gunstig binnenklimaat. Met bouwdroger: de huurtermijn van onze vaste chapepakketten, inclusief voor- en nameting van de restvochtigheid.",
    thDikte: "Dikte chape",
    thNat: "Natuurlijk drogen (richtwaarde)",
    thPak: "Met bouwdroger (Vernast-pakket)",
    rwNote: (
      <>
        <b>Welk pakket hoort bij uw vloer?</b> De{" "}
        <Link to={lp("/verhuur/calculator")}>droogcalculator</Link> vraagt uw oppervlakte, wat u droogt en de
        dikte, en toont het pakket met het aantal toestellen, de huurtermijn en de prijs. Hoe dat bij een
        volledige nieuwbouw verloopt, staat op{" "}
        <Link to={lp("/nieuwbouw-drogen")}>chape en pleisterwerk drogen in nieuwbouw</Link>.
      </>
    ),
    fKick: "Twee fases",
    fH2: "Wanneer mag de bouwdroger aan?",
    fLede:
      "Een verse chape doorloopt twee fases, en ze vragen het tegenovergestelde van u. Eerst heeft het cement het water nog nodig; pas daarna mag het eruit.",
    f1Label: "Fase 1 · uitharden",
    f1H3: "Laat de chape eerst binden.",
    f1P: "Cement bindt water chemisch tijdens het uitharden. Agressief drogen in deze fase onttrekt water dat het mengsel nog nodig heeft: de bovenkant krimpt, de onderkant niet, en dat komt eruit als scheuren of opstaande randen. Uw chapeur zegt vanaf welke dag u mag drogen.",
    f1Bar: "Dagen tot weken, afhankelijk van het mengsel",
    f2Label: "Fase 2 · drogen",
    f2H3: "Daarna moet het water het gebouw uit.",
    f2P: "Nu begint de eigenlijke droging, en die mag dag en nacht doorlopen. Een bouwdroger houdt de luchtvochtigheid laag, een ventilator zorgt dat die droge lucht ook echt over de vloer strijkt. Elk uur stilstand laat het vocht opnieuw in muren en vloer trekken.",
    f2Bar: "De weken uit de tabel hierboven",
    fNote: (
      <>
        <b>Zet de droger niet 's nachts uit.</b> In een paar uur loopt de luchtvochtigheid weer op en
        trekt het vocht uit de lucht terug in de vloer. U verliest dan meer droogtijd dan u aan stroom
        bespaart, wat zo'n toestel per dag kost, rekenen we voor in{" "}
        <Link to={lp("/gids/stroomverbruik-bouwdroger")}>stroomverbruik van een bouwdroger</Link>.
      </>
    ),
    prKick: "In de praktijk",
    prH2: "Wat de droogtijd korter of langer maakt.",
    prLede:
      "Vijf dingen bepalen of u in de buurt van de richtwaarde blijft of er weken boven gaat. Vier ervan kunt u zelf sturen.",
    factoren: [
      { titel: "De dikte", tekst: "De zwaarste factor. Het vocht uit de onderste laag moet door de volle dikte naar boven; boven 4 cm loopt dat snel op." },
      { titel: "De temperatuur", tekst: "Warme lucht kan veel meer vocht dragen dan koude. Onder een graad of tien staat een droging zo goed als stil." },
      { titel: "De luchtvochtigheid", tekst: "Zit de lucht in het gebouw al vol vocht, dan kan de chape niets meer afgeven, hoe lang u ook wacht." },
      { titel: "De luchtbeweging", tekst: "Boven een vloer blijft een laag verzadigde lucht hangen. Een ventilator veegt die weg, zodat droge lucht het vocht kan oppikken." },
      { titel: "Wat erop komt", tekst: "Onder tegels mag meer restvocht zitten dan onder parket, pvc of een gietvloer. De afwerking bepaalt waar u naartoe droogt." },
    ],
    soKick: "Twee soorten chape",
    soH2: "Cementchape of anhydrietchape?",
    soLede:
      "De droogtijden hierboven gaan over zandcementchape, de gewoonste vloer in België. Ligt er anhydriet, dan geldt een ander voorschrift, en dat van de fabrikant gaat boven elke vuistregel.",
    cemLabel: "Zandcementchape",
    cemH3: "De gewoonste vloer, en de vuistregel hierboven.",
    cem: [
      { b: "Bindt water chemisch.", rest: " Daarom mag u in de eerste fase niet agressief drogen: het cement heeft dat water nog nodig." },
      { b: `Ligt doorgaans ${dunste?.cm} tot ${dikste?.cm} cm dik.`, rest: " Precies de diktes waarvoor onze vaste pakketten hun huurtermijn rekenen." },
      { b: "Verdraagt meer restvocht", rest: " dan anhydriet, maar hoeveel precies, bepaalt de afwerking en dus uw vloerlegger." },
      { b: "Droogt van boven naar onder.", rest: " De laatste centimeters zijn de traagste; een harde, lichte bovenkant zegt weinig." },
    ],
    cemVoet: "De richtwaarden en pakketten op deze pagina gaan hierover.",
    anhLabel: "Anhydrietchape",
    anhH3: "Vlakker en dunner, maar strenger in wat ze toelaat.",
    anh: [
      { b: "Op basis van calciumsulfaat", rest: " en vloeibaar gegoten; ze ligt daardoor vaak dunner en vlakker dan een cementchape." },
      { b: "Gevoeliger voor vocht.", rest: " Ze vraagt doorgaans een lagere restvochtigheid voor ze afgewerkt mag worden." },
      { b: "Vaak schuren.", rest: " De bovenste laag moet er dikwijls af voor de vloer goed kan drogen en de afwerking kan hechten." },
      { b: "Volg het voorschrift.", rest: " Wachttijden en grenswaarden verschillen per product; de plaatser en de fabrikant hebben het laatste woord." },
    ],
    anhVoet: "Het droogprincipe blijft gelijk: zonder droge lucht gaat er niets uit.",
    vvKick: "Vloerverwarming",
    vvH2: "Opstoken in zes stappen, in deze volgorde.",
    vvLede:
      "Ligt er vloerverwarming onder de chape, dan is die een handige hulp bij het drogen, maar alleen met beleid. Dit is de vorm die een opstookprotocol aanneemt; de exacte temperaturen en dagen krijgt u van uw chapeur of van de fabrikant.",
    opstook: [
      { b: "Wacht de uithardingstijd af.", rest: " Cementchape heeft water nodig om uit te harden. Uw chapeur zegt vanaf welke dag u mag beginnen stoken; bij anhydriet is die wachttijd doorgaans korter." },
      { b: "Start laag.", rest: " Begin op een lage aanvoertemperatuur, niet op de temperatuur waarop u later wil wonen. De vloer moet gelijkmatig op gang komen." },
      { b: "Drijf stap voor stap op.", rest: " Verhoog per dag met een vaste stap tot de maximale aanvoertemperatuur die de fabrikant toestaat, en houd die enkele dagen aan." },
      { b: "Bouw even geleidelijk af.", rest: " Zet de verwarming niet in één keer uit; dat levert dezelfde spanningen op als te snel opstoken." },
      { b: "Voer het vocht af terwijl u stookt.", rest: " Verwarming duwt het vocht uit de vloer, maar laat het in het gebouw. Zonder bouwdroger of ventilatie slaat het neer op ramen en buitenmuren." },
      { b: "Meet, en bel dan pas de vloerlegger.", rest: " Een doorlopen opstookprotocol is geen bewijs dat de vloer droog is. Dat blijft een restvochtmeting." },
    ],
    vvNote: (
      <>
        <b>Wie de verwarming meteen hoog zet, riskeert scheuren.</b> De spanning tussen een droge
        onderkant en een nog natte bovenkant moet ergens heen. En warmte alleen droogt niet: het vocht
        komt vrij, maar blijft in het gebouw hangen tot een bouwdroger het eruit haalt.
      </>
    ),
    mKick: "Meten, niet gokken",
    mH2: "Restvocht meten vóór parket, tegels of pvc.",
    mLede:
      "Een chape die hard en licht van kleur is, kan vanbinnen nog nat zijn. Onder parket, pvc of een gietvloer zit dat vocht daarna opgesloten, en dan komt het terug als bolle planken, loslatende stroken of vlekken.",
    zekerLabel: "Zo weet u het zeker",
    zekerH3: "Een meting uit de volle diepte van de vloer.",
    zeker: [
      { b: "CM-meting (carbidemethode).", rest: " Op een staal uit de volle dikte, niet aan het oppervlak, daar is de vloer het eerst droog." },
      { b: "Uw vloerlegger bepaalt de grens.", rest: " Vraag hem vooraf welke waarde hij wil zien; die hangt af van het type chape, de vloerverwarming en de afwerking." },
      { b: "Voor- en nameting bij ons pakket.", rest: " De technieker legt de startwaarde en de eindwaarde vast, zodat niemand op gevoel moet beslissen." },
      { b: "Zwart op wit kan.", rest: " Op aanvraag krijgt u een meetrapport, handig voor uw vloerlegger, uw architect of een verzekering." },
    ],
    zekerVoet: (
      <>
        Zie ook onze <Link to={lp("/drooggarantie")}>Drooggarantie</Link>: niet droog op de einddatum,
        dan verlengen wij kosteloos.
      </>
    ),
    misLabel: "Zo gaat het mis",
    misH3: "Drie beslissingen die later geld kosten.",
    mis: [
      { b: "Op het oog beslissen.", rest: " Licht van kleur en hard aanvoelen betekent dat het oppervlak droog is, niets meer." },
      { b: "De kalender volgen.", rest: ' "Zes weken is genoeg" geldt niet in een koude werf waar de luchtvochtigheid nooit onder de streefwaarde kwam.' },
      { b: "De vloerlegger laten wachten zonder te meten.", rest: " Komt hij toch, en legt hij op een natte vloer, dan ligt het probleem bij u, en de vloer moet eruit." },
    ],
    faqTitel: "Alles over de droogtijd van chape",
    vlKick: "Verder lezen",
    vlH2: "Droogt u meer dan alleen de vloer?",
    vlLede:
      "Pleisterwerk heeft zijn eigen termijnen en zijn eigen valkuilen, en in een nieuwbouw drogen vloer en muren meestal samen. Twee pagina's die daarop verdergaan.",
    dk1H3: "Hoe lang moet pleisterwerk drogen?",
    dk1P: "De termijnen per laagdikte, het verschil tussen gips- en cementpleister, en waarom het vocht in een dichtgemaakt huis blijft hangen tot het op de ramen staat.",
    dk1Meer: "Lees de gids over pleisterwerk →",
    dk2H3: "Chape en pleisterwerk samen drogen",
    dk2P: "In een nieuwbouw staan vloer en muren tegelijk nat. Dat kan in één pakket, met één huurtermijn en één meting voor en na.",
    dk2Meer: "Bekijk drogen in nieuwbouw →",
    links: [
      { pad: "/hoe-drogen-werkt", label: "Hoe drogen werkt" },
      { pad: "/gids/condensdroger-of-adsorptiedroger", label: "Condensdroger of adsorptiedroger" },
      { pad: "/gids/stroomverbruik-bouwdroger", label: "Stroomverbruik van een bouwdroger" },
      { pad: "/realisaties/chape-pleisterwerk-drogen-hasselt", label: "Pleister- en chapewerken versneld gedroogd" },
      { pad: "/prijzen", label: "Prijzen en tarieven" },
    ],
    mbKick: "Liever niet op een vuistregel bouwen?",
    mbH3: "Wij meten uw vloer voor en na, en garanderen de einddatum.",
    mbP: (
      <>
        Onze techniekers plaatsen de toestellen, stellen de streefwaarde in en leggen het restvocht
        vast bij de start en bij de oplevering. Is de vloer dan niet droog, dan verlengen wij
        kosteloos, zie <Link to={lp("/drooggarantie")}>de Drooggarantie</Link>.
      </>
    ),
    mbCta: "Bereken uw droogpakket",
    mbAlt: "Vernast technieker geeft duim omhoog",
    contact: {
      kicker: "Nog een vraag over uw vloer?",
      titel: "Onze droogspecialisten kijken met u naar de planning.",
      lede: "Weet u niet of uw chape op tijd droog is voor de vloerlegger, of twijfelt u over de dikte en het aantal toestellen? Stel uw vraag, u krijgt binnen één werkdag antwoord van een specialist.",
      onderwerpen: [
        "Vraag over de droogtijd van mijn chape",
        "Advies over het aantal toestellen",
        "Vraag over restvocht meten",
        "Iets anders",
      ],
      placeholder: "Bv. 120 m² chape van 6 cm, gelegd op 20 november, vloerlegger komt half januari, haalt dat?",
    },
  }),

  fr: ({ lp, chape, dunste, dikste, nat }: ChapeHulp): ChapeTekst => ({
    weken: frWeken,
    faq: [
      ...chape.map((rij) => ({
        question: `Combien de temps une chape de ${rij.cm} cm doit-elle sécher ?`,
        answer: `À titre indicatif, une chape ciment de ${rij.cm} cm sèche d'elle-même en environ ${frWeken(
          nat(rij.cm),
        )}, et encore uniquement dans un bâtiment chauffé et ventilé. Avec un déshumidificateur de chantier, nous comptons pour cette épaisseur une durée de location de ${frWeken(
          rij.weken,
        )}, mesure au début et à la réception comprise. ${
          STAART_FR[rij.cm] ??
          "Le nombre d'appareils nécessaires pour cette épaisseur dépend de la surface ; le calculateur de séchage le calcule pour vous."
        } Attention : ce n'est pas le calendrier qui décide si le sol est prêt, c'est la mesure. Un chantier froid ou fermé dépasse facilement cette valeur indicative de plusieurs semaines.`,
      })),
      {
        question: "Quand peut-on allumer le déshumidificateur après la pose de la chape ?",
        answer:
          "Pas tout de suite. La chape ciment fixe chimiquement de l'eau pendant son durcissement, et dans cette première phase elle a encore besoin de cette eau. Demandez à votre chapiste à partir de quand vous pouvez sécher activement : c'est une question de jours à semaines, selon le mélange et ce qu'il contient. Si vous allumez le déshumidificateur trop tôt et trop fort, le dessus sèche alors que le dessous est encore mouillé, ce qui provoque du retrait, des fissures et, dans le pire des cas, un sol qui se décolle. Ensuite, l'appareil peut tourner jour et nuit : chaque heure d'arrêt fait remonter l'humidité de l'air.",
      },
      {
        question: "Une chape peut-elle sécher trop vite ?",
        answer:
          "Oui, et c'est le risque que l'on sous-estime. Si seule la surface sèche, le dessus se rétracte alors que le dessous gonfle encore d'humidité ; cette tension ressort sous forme de fissures ou de bords qui se relèvent. C'est pourquoi un déshumidificateur ne sèche pas le plus fort possible, mais vers une valeur cible réglée par le technicien, et c'est pourquoi vous ne mettez pas tout de suite le chauffage par le sol à pleine puissance. Un séchage contrôlé avec mesure avant et après est plus rapide et plus sûr qu'un sol que vous essayez de forcer en une semaine.",
      },
      {
        question: "Puis-je utiliser le chauffage par le sol pour sécher la chape ?",
        answer:
          "Oui, mais uniquement selon un protocole de mise en chauffe : démarrer doucement à une basse température de départ, augmenter d'un palier par jour jusqu'au maximum autorisé par le fabricant, maintenir quelques jours puis redescendre aussi progressivement, et tout cela seulement après le délai d'attente prescrit par le chapiste. Ne poussez jamais le chauffage d'un coup. Et n'oubliez pas que chauffer retire l'humidité du sol, pas du bâtiment : sans déshumidificateur ni ventilation, elle se condense sur les fenêtres, les seuils et les murs extérieurs. Un protocole de mise en chauffe mené à terme ne prouve pas non plus que le sol est sec ; cela reste une mesure.",
      },
      {
        question: "Comment savoir si ma chape est assez sèche pour du parquet ou du carrelage ?",
        answer:
          "En mesurant, le plus souvent par une mesure CM (méthode au carbure) sur un échantillon prélevé dans toute l'épaisseur du sol. Un humidimètre de surface en dit trop peu : une chape dure et de couleur claire peut encore être mouillée à l'intérieur. La valeur limite applicable dépend du type de chape, du chauffage par le sol et de la finition : sous du carrelage, on admet généralement plus d'humidité résiduelle que sous du parquet, du PVC ou un sol coulé. C'est votre poseur de sol qui fixe cette limite, demandez-lui donc à l'avance quelle valeur il veut voir ; vous saurez alors vers quoi vous séchez. Nos packs de séchage comprennent une mesure avant et après, et sur demande un rapport de mesure.",
      },
      {
        question: "Comment faire sécher une chape plus vite ?",
        answer:
          "En pilotant le climat du bâtiment au lieu d'attendre. Trois choses à la fois : de la chaleur, pour que l'air puisse contenir plus d'humidité ; un déshumidificateur de chantier, qui retire en permanence cette humidité de l'air ; et du mouvement d'air, pour chasser la couche saturée au-dessus du sol et laisser arriver de l'air sec. Laissez l'appareil tourner jour et nuit et gardez fenêtres et portes fermées : vous séchez la pièce, pas la rue. Ce qui ne marche pas : seulement chauffer, seulement aérer par temps humide, ou éteindre le déshumidificateur la nuit pour économiser du courant.",
      },
      {
        question: "Combien de déshumidificateurs me faut-il pour ma chape ?",
        answer:
          "Cela dépend du volume de la pièce, pas seulement de la surface : un grand espace ouvert sous haut plafond demande plus qu'une pièce basse. C'est pourquoi le calculateur de séchage vous demande votre surface, ce que vous séchez et l'épaisseur, puis compose un pack avec le nombre d'appareils et la durée de location correspondants. Un appareil trop petit dans un grand espace ne sèche pas plus vite si vous le laissez plus longtemps ; il n'atteint tout simplement pas la valeur cible. En cas de doute, appelez-nous : un pack mal évalué vous coûte des semaines, et ces semaines coûtent plus cher que l'appareil.",
      },
      {
        question: "Faut-il ouvrir les fenêtres pendant que le déshumidificateur tourne ?",
        answer:
          "Non, gardez-les fermées. Un déshumidificateur de chantier sèche l'air d'un espace clos ; si une fenêtre est ouverte, vous faites sans cesse entrer de l'air extérieur humide et l'appareil continue à sécher cet air au lieu de votre sol. Aérer n'aide que si l'air extérieur est plus sec que l'air intérieur, et en hiver ou par un automne pluvieux en Belgique, c'est rarement le cas. Fermez aussi les portes vers les parties du bâtiment qui ne sont pas séchées, et laissez le déshumidificateur dans cet espace fermé.",
      },
      {
        question: "Combien de temps une chape anhydrite doit-elle sécher ?",
        answer:
          "La chape anhydrite (à base de sulfate de calcium) est coulée à l'état liquide et est donc souvent plus fine et plus plane, ce qui joue en sa faveur. En revanche, elle est plus sensible à l'humidité et exige généralement une humidité résiduelle plus basse avant de pouvoir être recouverte ; souvent, la couche supérieure doit aussi être poncée pour qu'elle puisse bien sécher et adhérer. Suivez donc toujours les prescriptions du poseur et du fabricant : elles diffèrent d'un produit à l'autre et priment sur toute règle empirique. Le principe de séchage reste le même : sans air sec et en mouvement dans le bâtiment, rien ne sort du sol.",
      },
      {
        question: "Louer un déshumidificateur en vaut-il la peine, ou puis-je simplement attendre ?",
        answer: `Attendre est possible, et ne coûte rien en location. Ce que cela coûte, c'est du temps que vous payez ailleurs : ${
          dikste
            ? `pour une chape de ${dikste.cm} cm, il y a environ ${frWeken(nat(dikste.cm))} de séchage naturel contre ${frWeken(dikste.weken)} avec un pack de séchage`
            : "un séchage naturel dure plusieurs fois plus longtemps qu'un séchage piloté"
        }. Pendant ces semaines, votre crédit construction continue de courir, chaque corps de métier suivant est décalé d'autant et l'humidité reste dans un bâtiment fermé où elle peut provoquer des moisissures et de l'humidité qui remonte dans le plafonnage. De plus, attendre n'est pas une garantie : dans un chantier froid et fermé sans ventilation, le séchage s'arrête, peu importe combien de temps vous attendez. C'est pourquoi nous prévoyons une mesure avant et après, et une garantie de séchage : si le sol n'est pas sec à la date de fin, nous prolongeons sans frais.`,
      },
    ],
    crumbHome: "Accueil",
    crumbGidsen: "Guides",
    crumb: "Combien de temps sèche une chape ?",
    kick: "Guide · temps de séchage",
    h1: "Combien de temps une chape doit-elle sécher ?",
    intro: (
      <p>
        Une chape ciment de {dunste?.cm} à {dikste?.cm} cm sèche d'elle-même en environ{" "}
        {nat(dunste?.cm ?? 5)} à {nat(dikste?.cm ?? 7)} semaines. Avec un déshumidificateur de chantier,
        nous comptons pour ces épaisseurs {dunste?.weken} à {dikste?.weken} semaines. Ce que ce sera chez
        vous dépend de l'épaisseur, du type de chape, de la température et de la ventilation. Vous trouverez
        ci-dessous les valeurs indicatives par épaisseur, la différence avec et sans déshumidificateur, et
        comment savoir quand le poseur de sol peut venir.
      </p>
    ),
    heroAlt: "Les techniciens de Vernast avec leurs déshumidificateurs",
    badge: "± 1 semaine par cm",
    badgeSub: "règle empirique jusqu'à 4 cm, plus lent ensuite",
    stats: dikste
      ? [
          { n: "1", em: "sem./cm", l: "Règle empirique pour le séchage naturel, pour les 4 premiers cm de chape ciment" },
          { n: "2", em: "sem./cm", l: "Pour chaque centimètre au-delà : l'humidité doit traverser toute l'épaisseur" },
          { n: <>± {nat(dikste.cm)}</>, em: "semaines", l: <>Séchage naturel pour {dikste.cm} cm, dans un bâtiment chauffé et ventilé</> },
          { n: <>{dikste.weken}</>, em: "semaines", l: <>Avec un pack de séchage pour {dikste.cm} cm, avec mesure de l'humidité résiduelle avant et après</> },
        ]
      : [],
    vuistH2: "La règle empirique : environ une semaine par centimètre",
    vuist: [
      <>
        Pour une chape ciment qui sèche d'elle-même, le secteur applique une vieille règle empirique :{" "}
        <b>environ une semaine par centimètre pour les 4 premiers cm</b>. Au-delà, c'est nettement plus
        lent : comptez en gros <b>deux semaines par centimètre supplémentaire</b>. Un sol de {dikste?.cm} cm
        n'en est donc pas à {dikste?.cm} semaines, mais à environ {nat(dikste?.cm ?? 7)}.
      </>,
      <>
        Ce n'est pas seulement une question de quantité d'eau, mais du chemin qu'elle doit parcourir. Sous
        la chape se trouvent l'isolation et une dalle portante en béton ; rien ne passe à travers. L'humidité
        de la couche inférieure n'a donc qu'une seule issue : vers le haut, à travers toute l'épaisseur du sol.
        Plus la chape est épaisse, plus ce chemin est long, et plus les derniers centimètres sèchent lentement.
      </>,
      <>
        Ces valeurs indicatives valent pour un bâtiment chauffé et ventilé, autour de la température
        ambiante. Dans un chantier d'hiver froid et fermé, cela s'allonge facilement, car l'air au-dessus du
        sol ne peut plus absorber l'humidité. Pourquoi il en est ainsi est expliqué en détail sur{" "}
        <Link to={lp("/hoe-drogen-werkt")}>comment fonctionne le séchage</Link>.
      </>,
    ],
    snedeTitel: "Coupe du sol",
    snedeSub: `chape de ${dikste?.cm} cm`,
    lucht: "Air de la pièce",
    luchtSub: "c'est ici que le déshumidificateur retire l'humidité",
    chape: "Chape",
    iso: "Isolation",
    beton: "Dalle portante en béton",
    snedeVoet:
      "Vers le bas, l'humidité ne peut pas s'échapper. C'est pourquoi chaque centimètre au-delà du quatrième coûte environ deux semaines au lieu d'une, et pourquoi l'air sec et en mouvement au-dessus du sol aide autant.",
    rwKick: "Valeurs indicatives",
    rwH2: "Temps de séchage d'une chape par épaisseur.",
    rwLede:
      "À gauche, ce dont le sol a besoin pour sécher seul ; à droite, la durée de location que nous comptons pour cette épaisseur dans nos packs. La différence n'est pas une promesse sur votre sol, mais l'écart entre attendre et piloter le climat.",
    natLabel: (cm) => `${cm} cm, séchage naturel`,
    pakLabel: (cm) => `${cm} cm, avec un pack de séchage`,
    vglNoot:
      "Les barres sont à la même échelle, le séchage le plus long valant 100 %. Les mêmes chiffres figurent dans le tableau ci-dessous.",
    caption:
      "Séchage naturel : valeur indicative pour une chape ciment dans un climat intérieur favorable. Avec déshumidificateur : la durée de location de nos packs chape standard, mesure de l'humidité résiduelle avant et après comprise.",
    thDikte: "Épaisseur de la chape",
    thNat: "Séchage naturel (valeur indicative)",
    thPak: "Avec déshumidificateur (pack Vernast)",
    rwNote: (
      <>
        <b>Quel pack convient à votre sol ?</b> Le{" "}
        <Link to={lp("/verhuur/calculator")}>calculateur de séchage</Link> vous demande votre surface, ce que
        vous séchez et l'épaisseur, et affiche le pack avec le nombre d'appareils, la durée de location et le
        prix. Comment cela se passe dans une nouvelle construction complète est expliqué sur{" "}
        <Link to={lp("/nieuwbouw-drogen")}>séchage de chape et de plafonnage en nouvelle construction</Link>.
      </>
    ),
    fKick: "Deux phases",
    fH2: "Quand peut-on allumer le déshumidificateur ?",
    fLede:
      "Une chape fraîche passe par deux phases, qui vous demandent l'inverse l'une de l'autre. D'abord, le ciment a encore besoin de l'eau ; ce n'est qu'ensuite qu'elle peut sortir.",
    f1Label: "Phase 1 · durcissement",
    f1H3: "Laissez d'abord la chape prendre.",
    f1P: "Le ciment fixe chimiquement l'eau pendant son durcissement. Un séchage agressif dans cette phase retire de l'eau dont le mélange a encore besoin : le dessus se rétracte, le dessous non, et cela ressort sous forme de fissures ou de bords qui se relèvent. Votre chapiste vous dit à partir de quel jour vous pouvez sécher.",
    f1Bar: "Des jours à des semaines, selon le mélange",
    f2Label: "Phase 2 · séchage",
    f2H3: "Ensuite, l'eau doit quitter le bâtiment.",
    f2P: "Le séchage proprement dit commence alors, et il peut se poursuivre jour et nuit. Un déshumidificateur maintient l'humidité de l'air basse, un ventilateur veille à ce que cet air sec passe réellement sur le sol. Chaque heure d'arrêt laisse l'humidité repénétrer dans les murs et le sol.",
    f2Bar: "Les semaines du tableau ci-dessus",
    fNote: (
      <>
        <b>N'éteignez pas le déshumidificateur la nuit.</b> En quelques heures, l'humidité de l'air remonte
        et l'humidité contenue dans l'air retourne dans le sol. Vous perdez alors plus de temps de séchage que vous
        n'économisez de courant ; ce qu'un tel appareil coûte par jour, nous le calculons dans{" "}
        <Link to={lp("/gids/stroomverbruik-bouwdroger")}>consommation électrique d'un déshumidificateur</Link>.
      </>
    ),
    prKick: "En pratique",
    prH2: "Ce qui raccourcit ou allonge le temps de séchage.",
    prLede:
      "Cinq éléments déterminent si vous restez proche de la valeur indicative ou si vous la dépassez de plusieurs semaines. Vous pouvez en piloter quatre vous-même.",
    factoren: [
      { titel: "L'épaisseur", tekst: "Le facteur le plus lourd. L'humidité de la couche inférieure doit remonter à travers toute l'épaisseur ; au-delà de 4 cm, cela augmente vite." },
      { titel: "La température", tekst: "L'air chaud peut contenir beaucoup plus d'humidité que l'air froid. Sous une dizaine de degrés, un séchage est quasiment à l'arrêt." },
      { titel: "L'humidité de l'air", tekst: "Si l'air du bâtiment est déjà chargé d'humidité, la chape ne peut plus rien céder, peu importe combien de temps vous attendez." },
      { titel: "Le mouvement de l'air", tekst: "Une couche d'air saturé stagne au-dessus d'un sol. Un ventilateur la chasse, pour que l'air sec puisse capter l'humidité." },
      { titel: "Ce qui sera posé dessus", tekst: "Sous du carrelage, on admet plus d'humidité résiduelle que sous du parquet, du PVC ou un sol coulé. La finition détermine vers quoi vous séchez." },
    ],
    soKick: "Deux types de chape",
    soH2: "Chape ciment ou chape anhydrite ?",
    soLede:
      "Les temps de séchage ci-dessus concernent la chape sable-ciment, le sol le plus courant en Belgique. S'il s'agit d'anhydrite, d'autres prescriptions s'appliquent, et celles du fabricant priment sur toute règle empirique.",
    cemLabel: "Chape sable-ciment",
    cemH3: "Le sol le plus courant, et la règle empirique ci-dessus.",
    cem: [
      { b: "Fixe l'eau chimiquement.", rest: " C'est pourquoi vous ne pouvez pas sécher agressivement dans la première phase : le ciment a encore besoin de cette eau." },
      { b: `Généralement ${dunste?.cm} à ${dikste?.cm} cm d'épaisseur.`, rest: " Exactement les épaisseurs pour lesquelles nos packs standard calculent leur durée de location." },
      { b: "Tolère plus d'humidité résiduelle", rest: " que l'anhydrite, mais combien exactement, c'est la finition qui le détermine, et donc votre poseur de sol." },
      { b: "Sèche du haut vers le bas.", rest: " Les derniers centimètres sont les plus lents ; un dessus dur et clair ne dit pas grand-chose." },
    ],
    cemVoet: "Les valeurs indicatives et les packs de cette page portent sur ce type de chape.",
    anhLabel: "Chape anhydrite",
    anhH3: "Plus plane et plus fine, mais plus exigeante sur ce qu'elle tolère.",
    anh: [
      { b: "À base de sulfate de calcium", rest: " et coulée à l'état liquide ; elle est donc souvent plus fine et plus plane qu'une chape ciment." },
      { b: "Plus sensible à l'humidité.", rest: " Elle exige généralement une humidité résiduelle plus basse avant de pouvoir être recouverte." },
      { b: "Souvent à poncer.", rest: " La couche supérieure doit souvent être retirée pour que le sol puisse bien sécher et que la finition adhère." },
      { b: "Suivez les prescriptions.", rest: " Les délais d'attente et les valeurs limites diffèrent selon le produit ; le poseur et le fabricant ont le dernier mot." },
    ],
    anhVoet: "Le principe de séchage reste le même : sans air sec, rien ne sort.",
    vvKick: "Chauffage par le sol",
    vvH2: "La mise en chauffe en six étapes, dans cet ordre.",
    vvLede:
      "Si un chauffage par le sol se trouve sous la chape, il aide utilement au séchage, mais seulement avec méthode. Voici la forme que prend un protocole de mise en chauffe ; les températures et les jours exacts vous sont donnés par votre chapiste ou par le fabricant.",
    opstook: [
      { b: "Attendez la fin du durcissement.", rest: " La chape ciment a besoin d'eau pour durcir. Votre chapiste vous dit à partir de quel jour vous pouvez commencer à chauffer ; pour l'anhydrite, ce délai est généralement plus court." },
      { b: "Commencez bas.", rest: " Démarrez à une basse température de départ, pas à celle à laquelle vous voudrez vivre plus tard. Le sol doit se mettre en route de manière homogène." },
      { b: "Montez palier par palier.", rest: " Augmentez chaque jour d'un palier fixe jusqu'à la température de départ maximale autorisée par le fabricant, et maintenez-la quelques jours." },
      { b: "Redescendez tout aussi progressivement.", rest: " N'éteignez pas le chauffage d'un coup ; cela crée les mêmes tensions qu'une montée en température trop rapide." },
      { b: "Évacuez l'humidité pendant que vous chauffez.", rest: " Le chauffage chasse l'humidité du sol, mais la laisse dans le bâtiment. Sans déshumidificateur ni ventilation, elle se condense sur les fenêtres et les murs extérieurs." },
      { b: "Mesurez, et appelez seulement ensuite le poseur de sol.", rest: " Un protocole de mise en chauffe mené à terme ne prouve pas que le sol est sec. Cela reste une mesure de l'humidité résiduelle." },
    ],
    vvNote: (
      <>
        <b>Qui pousse le chauffage d'emblée risque des fissures.</b> La tension entre un dessous sec et un
        dessus encore mouillé doit bien aller quelque part. Et la chaleur seule ne sèche pas : l'humidité se
        libère, mais reste dans le bâtiment jusqu'à ce qu'un déshumidificateur la retire.
      </>
    ),
    mKick: "Mesurer, pas deviner",
    mH2: "Mesurer l'humidité résiduelle avant le parquet, le carrelage ou le PVC.",
    mLede:
      "Une chape dure et de couleur claire peut encore être mouillée à l'intérieur. Sous du parquet, du PVC ou un sol coulé, cette humidité se retrouve ensuite enfermée, et elle revient sous forme de lames bombées, de bandes qui se décollent ou de taches.",
    zekerLabel: "Pour en être sûr",
    zekerH3: "Une mesure dans toute l'épaisseur du sol.",
    zeker: [
      { b: "Mesure CM (méthode au carbure).", rest: " Sur un échantillon prélevé dans toute l'épaisseur, pas en surface : c'est là que le sol sèche en premier." },
      { b: "Votre poseur de sol fixe la limite.", rest: " Demandez-lui à l'avance quelle valeur il veut voir ; elle dépend du type de chape, du chauffage par le sol et de la finition." },
      { b: "Mesure avant et après avec notre pack.", rest: " Le technicien consigne la valeur de départ et la valeur finale, pour que personne ne doive décider au jugé." },
      { b: "Noir sur blanc, c'est possible.", rest: " Sur demande, vous recevez un rapport de mesure, utile pour votre poseur de sol, votre architecte ou une assurance." },
    ],
    zekerVoet: (
      <>
        Voir aussi notre <Link to={lp("/drooggarantie")}>garantie de séchage</Link> : pas sec à la date de
        fin, nous prolongeons sans frais.
      </>
    ),
    misLabel: "Voilà comment ça tourne mal",
    misH3: "Trois décisions qui coûtent de l'argent plus tard.",
    mis: [
      { b: "Décider à l'œil.", rest: " Une couleur claire et une surface dure signifient que la surface est sèche, rien de plus." },
      { b: "Suivre le calendrier.", rest: " « Six semaines, ça suffit » ne vaut pas dans un chantier froid où l'humidité de l'air n'est jamais descendue sous la valeur cible." },
      { b: "Faire attendre le poseur de sol sans mesurer.", rest: " S'il vient quand même et pose sur un sol mouillé, le problème est pour vous, et le sol doit être retiré." },
    ],
    faqTitel: "Tout sur le temps de séchage d'une chape",
    vlKick: "Pour aller plus loin",
    vlH2: "Vous séchez plus que le sol ?",
    vlLede:
      "Le plafonnage a ses propres délais et ses propres pièges, et dans une nouvelle construction, sol et murs sèchent généralement ensemble. Deux pages qui poursuivent sur ce sujet.",
    dk1H3: "Combien de temps un plafonnage doit-il sécher ?",
    dk1P: "Les délais par épaisseur de couche, la différence entre enduit plâtre et enduit ciment, et pourquoi l'humidité reste dans une maison fermée jusqu'à ce qu'elle se dépose sur les fenêtres.",
    dk1Meer: "Lire le guide sur le plafonnage →",
    dk2H3: "Sécher chape et plafonnage ensemble",
    dk2P: "Dans une nouvelle construction, sol et murs sont mouillés en même temps. C'est possible en un seul pack, avec une seule durée de location et une seule mesure avant et après.",
    dk2Meer: "Voir le séchage en nouvelle construction →",
    links: [
      { pad: "/hoe-drogen-werkt", label: "Comment fonctionne le séchage" },
      { pad: "/gids/condensdroger-of-adsorptiedroger", label: "Déshumidificateur à condensation ou à adsorption" },
      { pad: "/gids/stroomverbruik-bouwdroger", label: "Consommation électrique d'un déshumidificateur" },
      { pad: "/realisaties/chape-pleisterwerk-drogen-hasselt", label: "Plafonnage et chape séchés plus vite" },
      { pad: "/prijzen", label: "Prix et tarifs" },
    ],
    mbKick: "Vous préférez ne pas bâtir sur une règle empirique ?",
    mbH3: "Nous mesurons votre sol avant et après, et garantissons la date de fin.",
    mbP: (
      <>
        Nos techniciens placent les appareils, règlent la valeur cible et consignent l'humidité résiduelle
        au début et à la réception. Si le sol n'est alors pas sec, nous prolongeons sans frais, voir{" "}
        <Link to={lp("/drooggarantie")}>la garantie de séchage</Link>.
      </>
    ),
    mbCta: "Calculez votre pack de séchage",
    mbAlt: "Un technicien Vernast lève le pouce",
    contact: {
      kicker: "Encore une question sur votre sol ?",
      titel: "Nos spécialistes du séchage examinent le planning avec vous.",
      lede: "Vous ne savez pas si votre chape sera sèche à temps pour le poseur de sol, ou vous hésitez sur l'épaisseur et le nombre d'appareils ? Posez votre question, un spécialiste vous répond dans un délai d'un jour ouvrable.",
      onderwerpen: [
        "Question sur le temps de séchage de ma chape",
        "Conseil sur le nombre d'appareils",
        "Question sur la mesure de l'humidité résiduelle",
        "Autre chose",
      ],
      placeholder: "P. ex. 120 m² de chape de 6 cm, posée le 20 novembre, le poseur de sol vient mi-janvier : est-ce faisable ?",
    },
  }),
  en: ({ lp, chape, dunste, dikste, nat }: ChapeHulp): ChapeTekst => ({
    weken: enWeken,
    faq: [
      ...chape.map((rij) => ({
        question: `How long does a ${rij.cm} cm screed take to dry?`,
        answer: `As a guide, a ${rij.cm} cm cement screed dries on its own in about ${enWeken(
          nat(rij.cm),
        )}, and even then only in a building that is heated and ventilated. With a construction dehumidifier, we work on a hire period of ${enWeken(
          rij.weken,
        )} for that thickness, including a moisture reading at the start and at handover. ${
          STAART_EN[rij.cm] ??
          "How many units that thickness needs depends on the floor area; the drying calculator works it out for you."
        } Bear in mind: the calendar does not decide whether the floor is ready, the moisture reading does. A cold or closed-up site can easily run weeks beyond this guide figure.`,
      })),
      {
        question: "When can the dehumidifier go on after the screed has been laid?",
        answer:
          "Not straight away. Cement screed binds water chemically while it cures, and in that first phase it still needs that water. Ask your screed layer from when you can start drying actively; that is a matter of days to weeks, depending on the mix and what is in it. Switch the dehumidifier on too early and too hard, and the top dries out while the bottom is still wet, which leads to shrinkage, cracks and, in the worst case, a floor that comes loose. After that, the unit can run day and night: every hour it stands idle lets the humidity climb again.",
      },
      {
        question: "Can screed dry too quickly?",
        answer:
          "Yes, and it is the risk people underestimate. If only the surface dries, the top shrinks while the bottom is still swollen with moisture; that tension comes out as cracks or curling edges. That is why a construction dehumidifier does not dry as hard as possible, but towards a target value the technician sets, and why you do not turn the underfloor heating up to full power straight away. A controlled drying process with a reading before and after is faster and safer than a floor you try to force in a week.",
      },
      {
        question: "Can I use underfloor heating to dry screed?",
        answer:
          "Yes, but only by following a heating-up protocol: start gently at a low flow temperature, raise it by one step a day up to the maximum the manufacturer allows, hold it for a few days and then bring it down just as gradually, and all of that only after the waiting time the screed layer prescribes. Never turn the heating up in one go. And remember that heating only drives the moisture out of the floor, not out of the building: without a dehumidifier or ventilation it condenses on windows, sills and external walls. Completing a heating-up protocol is not proof that the floor is dry either; that still takes a moisture reading.",
      },
      {
        question: "How do I know whether my screed is dry enough for parquet or tiles?",
        answer:
          "By measuring, usually with a CM test (carbide method) on a sample taken from the full depth of the floor. A surface meter tells you too little: a screed that is hard and light in colour can still be wet inside. Which limit applies depends on the type of screed, the underfloor heating and the floor finish; tiles usually tolerate more residual moisture than parquet, vinyl or a poured floor. Your floor layer sets that limit, so ask in advance which value they want to see; then you know what you are drying towards. Our drying packages include a reading before and after, and a measurement report on request.",
      },
      {
        question: "How can I make screed dry faster?",
        answer:
          "By controlling the climate in the building instead of waiting. Three things at once: heat, so the air can hold more moisture; a construction dehumidifier, which continuously removes that moisture from the air; and air movement, so the saturated layer above the floor is swept away and dry air can get in. Let the unit run day and night and keep windows and doors closed; you are drying the room, not the street. What does not work: only heating, only ventilating when it is damp outside, or switching the dehumidifier off at night to save electricity.",
      },
      {
        question: "How many dehumidifiers do I need for my screed?",
        answer:
          "That depends on the volume of the room, not just the floor area: a high open-plan space needs more than a low one. That is why the drying calculator asks for your floor area, what you are drying and the thickness, and then puts together a package with the right number of units and hire period. One undersized unit in a large space will not dry faster if you leave it longer; it simply never reaches the target value. If in doubt, give us a call: a misjudged package costs you weeks, and those weeks cost more than the unit.",
      },
      {
        question: "Should I open the windows while the dehumidifier is running?",
        answer:
          "No, keep them closed. A construction dehumidifier dries the air in an enclosed space; if a window is open, you keep letting in fresh, damp outside air and the unit carries on drying that instead of your floor. Ventilating only helps when the outside air is drier than the air indoors, and in a Belgian winter or a rainy autumn that is rarely the case. Also close the doors to parts of the building that are not being dried, and keep the dehumidifier in that closed-off space.",
      },
      {
        question: "How long does anhydrite screed take to dry?",
        answer:
          "Anhydrite screed (based on calcium sulphate) is poured as a liquid and is therefore often thinner and flatter, which works in its favour. On the other hand, it is more sensitive to moisture and usually needs a lower residual moisture level before it can be covered; often the top layer also has to be sanded before it can dry and bond properly. So always follow the instructions of the installer and the manufacturer, which differ from product to product and override any rule of thumb. The drying principle stays the same, though: without dry, moving air in the building, nothing leaves the floor.",
      },
      {
        question: "Is hiring a dehumidifier worth it, or can I just wait?",
        answer: `You can wait, and it costs nothing in hire. What it does cost is time you pay for elsewhere: ${
          dikste
            ? `for a ${dikste.cm} cm screed, it is roughly ${enWeken(nat(dikste.cm))} of natural drying against ${enWeken(dikste.weken)} with a drying package`
            : "drying on its own takes several times longer than controlled drying"
        }. During those weeks your construction loan keeps running, every following trade is pushed back with it, and the moisture hangs in a closed building where it can cause mould and rising damp in the plasterwork. What is more, waiting is no guarantee: on a cold, closed-up site without ventilation, drying grinds to a halt, however long you wait. That is why we include a reading before and after, and a Drying Guarantee: if the floor is not dry by the end date, we extend free of charge.`,
      },
    ],
    crumbHome: "Home",
    crumbGidsen: "Guides",
    crumb: "How long does screed take to dry?",
    kick: "Guide · drying times",
    h1: "How long does screed take to dry?",
    intro: (
      <p>
        A cement screed of {dunste?.cm} to {dikste?.cm} cm dries on its own in about{" "}
        {nat(dunste?.cm ?? 5)} to {nat(dikste?.cm ?? 7)} weeks. With a construction dehumidifier, we work
        on {dunste?.weken} to {dikste?.weken} weeks for those thicknesses. What it comes to in your case
        depends on the thickness, the type of screed, the temperature and the ventilation. Below you will
        find the guide figures per thickness, the difference with and without a dehumidifier, and how to
        tell when the floor layer can come in.
      </p>
    ),
    heroAlt: "The Vernast team with their construction dehumidifiers",
    badge: "± 1 week per cm",
    badgeSub: "rule of thumb up to 4 cm, slower after that",
    stats: dikste
      ? [
          { n: "1", em: "week/cm", l: "Rule of thumb for natural drying, for the first 4 cm of cement screed" },
          { n: "2", em: "weeks/cm", l: "For every centimetre beyond that: the moisture has to travel through the full thickness" },
          { n: <>± {nat(dikste.cm)}</>, em: "weeks", l: <>Natural drying at {dikste.cm} cm, in a heated and ventilated building</> },
          { n: <>{dikste.weken}</>, em: "weeks", l: <>With a drying package at {dikste.cm} cm, with residual moisture readings before and after</> },
        ]
      : [],
    vuistH2: "The rule of thumb: roughly one week per centimetre",
    vuist: [
      <>
        For cement screed drying on its own, the building trade has an old rule of thumb:{" "}
        <b>roughly one week per centimetre for the first 4 cm</b>. Beyond that it is considerably
        slower; allow roughly <b>two weeks for each extra centimetre</b>. A {dikste?.cm} cm floor
        therefore does not take {dikste?.cm} weeks but about {nat(dikste?.cm ?? 7)}.
      </>,
      <>
        That is not down to the amount of water alone, but to the route it has to take. Beneath the
        screed lie insulation and a concrete structural slab; nothing gets through those. The moisture in
        the bottom layer therefore has only one way out: upwards, through the full thickness of the
        floor. The thicker the screed, the longer that route, and the more slowly the last centimetres
        give up their water.
      </>,
      <>
        These guide figures apply to a heated, ventilated building at around room temperature. On a
        cold, closed-up winter site it easily takes longer, because the air above the floor can no longer
        absorb the moisture. Why that is the case is explained in detail on{" "}
        <Link to={lp("/hoe-drogen-werkt")}>how drying works</Link>.
      </>,
    ],
    snedeTitel: "Cross-section of the floor",
    snedeSub: `${dikste?.cm} cm screed`,
    lucht: "Air in the room",
    luchtSub: "this is where the dehumidifier removes the moisture",
    chape: "Screed",
    iso: "Insulation",
    beton: "Concrete structural slab",
    snedeVoet:
      "The moisture cannot escape downwards. That is why every centimetre beyond the fourth costs about two weeks instead of one, and why dry, moving air above the floor helps so much.",
    rwKick: "Guide figures",
    rwH2: "Screed drying time by thickness.",
    rwLede:
      "On the left, what the floor needs to dry on its own; on the right, the hire period we allow for that thickness in our packages. The difference is not a promise about your floor, but the difference between waiting and controlling the climate.",
    natLabel: (cm) => `${cm} cm, natural drying`,
    pakLabel: (cm) => `${cm} cm, with a drying package`,
    vglNoot:
      "The bars are on the same scale, with the longest drying time at 100%. The same figures appear in the table below.",
    caption:
      "Natural drying: guide figure for cement screed in a favourable indoor climate. With a dehumidifier: the hire period of our standard screed packages, including residual moisture readings before and after.",
    thDikte: "Screed thickness",
    thNat: "Natural drying (guide figure)",
    thPak: "With a dehumidifier (Vernast package)",
    rwNote: (
      <>
        <b>Which package suits your floor?</b> The{" "}
        <Link to={lp("/verhuur/calculator")}>drying calculator</Link> asks for your floor area, what you
        are drying and the thickness, and shows the package with the number of units, the hire period and
        the price. How this works for a complete new build is explained on{" "}
        <Link to={lp("/nieuwbouw-drogen")}>drying screed and plaster in new builds</Link>.
      </>
    ),
    fKick: "Two phases",
    fH2: "When can the dehumidifier go on?",
    fLede:
      "A fresh screed goes through two phases, and they ask the opposite of you. First the cement still needs the water; only after that can it come out.",
    f1Label: "Phase 1 · curing",
    f1H3: "Let the screed set first.",
    f1P: "Cement binds water chemically while it cures. Aggressive drying in this phase draws out water the mix still needs: the top shrinks, the bottom does not, and that shows up as cracks or curling edges. Your screed layer will tell you from which day you can start drying.",
    f1Bar: "Days to weeks, depending on the mix",
    f2Label: "Phase 2 · drying",
    f2H3: "Then the water has to leave the building.",
    f2P: "Now the actual drying begins, and it can carry on day and night. A construction dehumidifier keeps the humidity low, and a fan makes sure that dry air really sweeps across the floor. Every hour the unit stands idle lets the moisture soak back into walls and floor.",
    f2Bar: "The weeks from the table above",
    fNote: (
      <>
        <b>Do not switch the dehumidifier off at night.</b> Within a few hours the humidity rises again
        and the moisture in the air is drawn back into the floor. You then lose more drying time than you
        save on electricity; what a unit like this costs per day, we work out in{" "}
        <Link to={lp("/gids/stroomverbruik-bouwdroger")}>power consumption of a construction dehumidifier</Link>.
      </>
    ),
    prKick: "In practice",
    prH2: "What makes the drying time shorter or longer.",
    prLede:
      "Five things decide whether you stay close to the guide figure or go weeks beyond it. You can control four of them yourself.",
    factoren: [
      { titel: "The thickness", tekst: "The biggest factor. The moisture in the bottom layer has to travel up through the full thickness; beyond 4 cm that adds up quickly." },
      { titel: "The temperature", tekst: "Warm air can hold far more moisture than cold air. Below ten degrees or so, drying all but stops." },
      { titel: "The humidity", tekst: "If the air in the building is already full of moisture, the screed cannot give off any more, however long you wait." },
      { titel: "The air movement", tekst: "A layer of saturated air lingers above a floor. A fan sweeps it away, so dry air can pick up the moisture." },
      { titel: "What goes on top", tekst: "Tiles tolerate more residual moisture than parquet, vinyl or a poured floor. The finish determines what you are drying towards." },
    ],
    soKick: "Two types of screed",
    soH2: "Cement screed or anhydrite screed?",
    soLede:
      "The drying times above are for sand and cement screed, the most common floor in Belgium. If anhydrite has been laid, different instructions apply, and the manufacturer's override any rule of thumb.",
    cemLabel: "Sand and cement screed",
    cemH3: "The most common floor, and the rule of thumb above.",
    cem: [
      { b: "Binds water chemically.", rest: " That is why you must not dry aggressively in the first phase: the cement still needs that water." },
      { b: `Usually ${dunste?.cm} to ${dikste?.cm} cm thick.`, rest: " Exactly the thicknesses our standard packages calculate their hire period for." },
      { b: "Tolerates more residual moisture", rest: " than anhydrite, but exactly how much is determined by the finish, and so by your floor layer." },
      { b: "Dries from the top down.", rest: " The last centimetres are the slowest; a hard, light-coloured surface tells you little." },
    ],
    cemVoet: "The guide figures and packages on this page are about this type.",
    anhLabel: "Anhydrite screed",
    anhH3: "Flatter and thinner, but stricter about what it tolerates.",
    anh: [
      { b: "Based on calcium sulphate", rest: " and poured as a liquid; as a result it is often thinner and flatter than a cement screed." },
      { b: "More sensitive to moisture.", rest: " It usually needs a lower residual moisture level before it can be covered." },
      { b: "Often needs sanding.", rest: " The top layer frequently has to come off before the floor can dry properly and the finish can bond." },
      { b: "Follow the instructions.", rest: " Waiting times and limit values differ per product; the installer and the manufacturer have the final say." },
    ],
    anhVoet: "The drying principle stays the same: without dry air, nothing comes out.",
    vvKick: "Underfloor heating",
    vvH2: "Heating up in six steps, in this order.",
    vvLede:
      "If there is underfloor heating beneath the screed, it is a useful aid to drying, but only if handled with care. This is the shape a heating-up protocol takes; the exact temperatures and days come from your screed layer or the manufacturer.",
    opstook: [
      { b: "Wait for the curing time.", rest: " Cement screed needs water to cure. Your screed layer will tell you from which day you can start heating; for anhydrite that waiting time is usually shorter." },
      { b: "Start low.", rest: " Begin at a low flow temperature, not the temperature you will later want to live at. The floor needs to warm up evenly." },
      { b: "Raise it step by step.", rest: " Increase by a fixed step each day up to the maximum flow temperature the manufacturer allows, and hold it there for a few days." },
      { b: "Bring it down just as gradually.", rest: " Do not switch the heating off in one go; that causes the same stresses as heating up too fast." },
      { b: "Remove the moisture while you heat.", rest: " Heating drives the moisture out of the floor but leaves it in the building. Without a dehumidifier or ventilation it condenses on windows and external walls." },
      { b: "Measure, and only then call the floor layer.", rest: " Completing a heating-up protocol is no proof that the floor is dry. That still takes a residual moisture reading." },
    ],
    vvNote: (
      <>
        <b>Turning the heating straight up risks cracks.</b> The tension between a dry bottom and a still
        wet top has to go somewhere. And heat alone does not dry: the moisture is released, but it stays in
        the building until a dehumidifier removes it.
      </>
    ),
    mKick: "Measure, don't guess",
    mH2: "Measuring residual moisture before parquet, tiles or vinyl.",
    mLede:
      "A screed that is hard and light in colour can still be wet inside. Under parquet, vinyl or a poured floor, that moisture is then trapped, and it comes back as cupped boards, lifting strips or stains.",
    zekerLabel: "How to be sure",
    zekerH3: "A reading from the full depth of the floor.",
    zeker: [
      { b: "CM test (carbide method).", rest: " On a sample from the full thickness, not at the surface; that is where the floor dries first." },
      { b: "Your floor layer sets the limit.", rest: " Ask in advance which value they want to see; it depends on the type of screed, the underfloor heating and the finish." },
      { b: "Readings before and after with our package.", rest: " The technician records the starting value and the final value, so nobody has to decide on gut feeling." },
      { b: "In black and white, if you like.", rest: " On request you receive a measurement report, useful for your floor layer, your architect or an insurer." },
    ],
    zekerVoet: (
      <>
        See also our <Link to={lp("/drooggarantie")}>Drying Guarantee</Link>: not dry by the end date,
        and we extend free of charge.
      </>
    ),
    misLabel: "How it goes wrong",
    misH3: "Three decisions that cost money later.",
    mis: [
      { b: "Judging by eye.", rest: " Light in colour and hard to the touch means the surface is dry, nothing more." },
      { b: "Following the calendar.", rest: ' "Six weeks is enough" does not hold on a cold site where the humidity never dropped below the target value.' },
      { b: "Letting the floor layer wait without measuring.", rest: " If they come anyway and lay on a wet floor, the problem is yours, and the floor has to come out." },
    ],
    faqTitel: "Everything about screed drying times",
    vlKick: "Read on",
    vlH2: "Drying more than just the floor?",
    vlLede:
      "Plasterwork has its own timescales and its own pitfalls, and in a new build the floor and walls usually dry together. Two pages that take it further.",
    dk1H3: "How long does plaster take to dry?",
    dk1P: "The timescales per coat thickness, the difference between gypsum and cement plaster, and why moisture lingers in a closed-up house until it ends up on the windows.",
    dk1Meer: "Read the plaster guide →",
    dk2H3: "Drying screed and plaster together",
    dk2P: "In a new build, floor and walls are wet at the same time. That can be done in one package, with one hire period and one reading before and after.",
    dk2Meer: "See drying in new builds →",
    links: [
      { pad: "/hoe-drogen-werkt", label: "How drying works" },
      { pad: "/gids/condensdroger-of-adsorptiedroger", label: "Condensation or desiccant dehumidifier" },
      { pad: "/gids/stroomverbruik-bouwdroger", label: "Power consumption of a construction dehumidifier" },
      { pad: "/realisaties/chape-pleisterwerk-drogen-hasselt", label: "Plaster and screed dried faster" },
      { pad: "/prijzen", label: "Prices and rates" },
    ],
    mbKick: "Rather not rely on a rule of thumb?",
    mbH3: "We measure your floor before and after, and guarantee the end date.",
    mbP: (
      <>
        Our technicians set up the units, set the target value and record the residual moisture at the
        start and at handover. If the floor is not dry by then, we extend free of charge; see{" "}
        <Link to={lp("/drooggarantie")}>the Drying Guarantee</Link>.
      </>
    ),
    mbCta: "Calculate your drying package",
    mbAlt: "Vernast technician giving a thumbs up",
    contact: {
      kicker: "Another question about your floor?",
      titel: "Our drying specialists will look at the schedule with you.",
      lede: "Not sure whether your screed will be dry in time for the floor layer, or unsure about the thickness and the number of units? Ask your question and a specialist will reply within one working day.",
      onderwerpen: [
        "Question about my screed's drying time",
        "Advice on the number of units",
        "Question about measuring residual moisture",
        "Something else",
      ],
      placeholder: "E.g. 120 m² of 6 cm screed, laid on 20 November, floor layer coming mid-January: will that work?",
    },
  }),
} satisfies Copy<(h: ChapeHulp) => ChapeTekst>;
