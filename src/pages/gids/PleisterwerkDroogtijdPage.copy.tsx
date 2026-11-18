import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import type { GidsFaq } from "@/components/gids/GidsShell";
import type { Copy } from "@/i18n/useTaal";

/**
 * De teksten van de pleisterwerkgids per taal.
 *
 * Een functie per taal: de zinnen dragen de termijnen uit de catalogus mee
 * (`D`) en interne links in de taal van de pagina (`lp`). De termijnen zelf
 * rekent de pagina uit, één keer; hier staan alleen de woorden eromheen.
 */
export interface PleisterData {
  lp: (nlPad: string) => string;
  pleister: { cm: number; weken: number }[];
  dunste?: { cm: number; weken: number };
  dikste?: { cm: number; weken: number };
  /** Huurtermijn van het combipakket chape + pleister, in weken. */
  beide?: number;
}

export interface PleisterTekst {
  weken: (n: number) => string;
  crumbHome: string;
  crumbGidsen: string;
  crumb: string;
  kick: string;
  h1: string;
  intro: ReactNode;
  heroAlt: string;
  badge: ReactNode;
  badgeSub: string;
  emWeken: string;
  emUur: string;
  statDun: ReactNode;
  statDik: ReactNode;
  statBeide: string;
  statUur: string;
  muurH2: string;
  muurP: ReactNode[];
  muH: string;
  muSub: string;
  muKamer: string;
  muPleister: string;
  muSteen: string;
  legDroog: [string, string];
  legNat: [string, string];
  legSteen: [string, string];
  muF: string;
  rwKick: string;
  rwH2: string;
  rwLede: string;
  rijLabel: (cm: number) => string;
  beideLabel: string;
  vglnoot: string;
  caption: string;
  thDikte: string;
  thMet: string;
  thWaar: string;
  waar: Record<number, string>;
  waarAnders: string;
  beideCel: string;
  beideWaar: string;
  rwNote: ReactNode;
  dichtH2: string;
  dichtP: string[];
  fotoAlt: string;
  fotoH3: string;
  fotoP: string;
  f1Label: string;
  f1H3: string;
  f1P: string;
  f1Bar: string;
  f2Label: string;
  f2H3: string;
  f2P: string;
  f2Bar: ReactNode;
  nachtNote: ReactNode;
  prKick: string;
  prH2: string;
  prLede: string;
  factoren: { titel: string; tekst: string }[];
  gcKick: string;
  gcH2: string;
  gcLede: string;
  gips: { vt: string; h3: string; lijst: [string, ReactNode][]; vf: string };
  cement: { vt: string; h3: string; lijst: [string, string][]; vf: ReactNode };
  stKick: string;
  stH2: string;
  stLede: string;
  stappen: [string, string][];
  stNote: ReactNode;
  scKick: string;
  scH2: string;
  scLede: string;
  zeker: { vt: string; h3: string; lijst: [string, string][]; vf: ReactNode };
  mis: { vt: string; h3: string; lijst: [string, string][] };
  faqTitel: string;
  faq: GidsFaq[];
  lvKick: string;
  lvH2: string;
  lvLede: string;
  door: { h3: string; p: string; meer: string }[];
  leesVerder: string[];
  mbKick: string;
  mbH3: string;
  mbP: ReactNode;
  mbCta: string;
  mbAlt: string;
  contact: { kicker: string; titel: string; lede: string; onderwerpen: string[]; placeholder: string };
}

export const COPY = {
  nl: ({ lp, pleister, dunste, dikste, beide }: PleisterData): PleisterTekst => {
    const weken = (n: number) => `${n} ${n === 1 ? "week" : "weken"}`;
    /* Eén vraag per laagdikte: "hoe lang moet pleisterwerk van 2 cm drogen" is een
       zoekvraag op zich, en wie ze stelt wil het getal voor zijn eigen muur zien. */
    const STAART: Record<number, string> = {
      1: "Eén centimeter is de gewone binnenbepleistering, en meteen de snelste: de laag is dun en ligt aan één kant volledig open.",
      2: "Twee centimeter komt neer op dubbel zoveel water dat door hetzelfde oppervlak naar buiten moet, en dus niet op dubbel zo weinig geduld.",
      3: "Drie centimeter is zwaar werk in meerdere lagen. Zo'n opbouw houdt het vocht het langst vast, zeker als ze op beton zit.",
    };
    return {
      weken,
      crumbHome: "Home",
      crumbGidsen: "Gidsen",
      crumb: "Hoe lang moet pleisterwerk drogen?",
      kick: "Gids · droogtijden",
      h1: "Hoe lang moet pleisterwerk drogen?",
      intro: (
        <p>
          Met een bouwdroger droogt pleisterwerk in {dunste?.weken} tot {dikste?.weken} weken, afhankelijk
          van de laagdikte. Zonder droger valt er geen termijn te beloven: dan bepaalt de luchtvochtigheid
          in uw gebouw het tempo, en in een koud, dichtgemaakt huis staat de droging stil in plaats van
          traag te lopen. Hieronder de termijnen per laagdikte, waarom het vocht in huis blijft hangen, en
          wanneer de schilder mag komen.
        </p>
      ),
      heroAlt: "De Vernast vakmannen met hun bouwdrogers",
      badge: <>{dunste?.weken} tot {dikste?.weken} weken</>,
      badgeSub: "met een droogpakket, naar laagdikte",
      emWeken: "weken",
      emUur: "u",
      statDun: <>Met een droogpakket bij {dunste?.cm} cm pleisterwerk, de gangbare laagdikte</>,
      statDik: <>Bij {dikste?.cm} cm, de zwaarste laag waarvoor wij een vast pakket hebben</>,
      statBeide: "Chape én pleisterwerk samen, in één pakket en één huurtermijn",
      statUur: "Draaien per dag: 's nachts uitzetten laat de vochtigheid weer oplopen",
      muurH2: "Een muur droogt van buiten naar binnen",
      muurP: [
        <>
          Een pleisterlaag is dun en ligt aan één kant volledig open, dus geeft ze haar water sneller
          af dan een chape van zes centimeter. Ze doet dat wel van buiten naar binnen. De eerste
          millimeters zijn al klaar terwijl de laag tegen de steen nog vol water zit, en de muur voelt
          dan al droog aan. <b>Een muur die droog aanvoelt, is niet droog.</b>
        </>,
        <>
          Daar komt bij dat de steen achter de pleister een deel van dat aanmaakwater heeft opgenomen.
          Een zuigende snelbouwsteen geeft het traag weer af, en zolang dat gebeurt wordt de
          pleisterlaag van achteren gevoed. Op de tekening hiernaast ziet u het: licht aan het
          oppervlak, donker waar het water nog zit.
        </>,
        <>
          Al dat water moet het gebouw uit. Staat het huis dicht, dan blijft het in de lucht hangen tot
          die verzadigd is; op dat punt neemt ze niets meer op en stopt de droging, hoe lang u ook
          wacht. Wat u dan ziet is condens op de ramen en op koude buitenmuren. Een bouwdroger
          onderbreekt die kringloop, en waarom dat werkt staat uitgebreid op <Link to={lp("/hoe-drogen-werkt")}>hoe drogen werkt</Link>.
        </>,
      ],
      muH: "De muur in doorsnede",
      muSub: "2 cm pleister op 25 cm steen",
      muKamer: "Kamer",
      muPleister: "Pleister, 2 cm",
      muSteen: "Snelbouwsteen, 25 cm",
      legDroog: ["Droog", " aan het oppervlak"],
      legNat: ["Nat", " dieper in de pleisterlaag"],
      legSteen: ["Steen", " neemt een deel op"],
      muF: "De pleisterlaag van 2 cm droogt van buiten naar binnen: de eerste millimeters zijn al klaar terwijl de laag tegen de steen nog vol water zit. Een muur die droog aanvoelt, is dus niet droog.",
      rwKick: "Richtwaarden",
      rwH2: "Droogtijd van pleisterwerk per laagdikte.",
      rwLede:
        "De huurtermijn van onze vaste pakketten, per dikte van de laag. Ze volgt uit die dikte en niet uit uw oppervlakte: een grotere ruimte krijgt meer toestellen, geen langere termijn.",
      rijLabel: (cm) => `${cm} cm pleisterwerk`,
      beideLabel: "Chape en pleisterwerk samen",
      vglnoot: "De balken staan op dezelfde schaal, met de langste termijn op 100 %. Dezelfde getallen staan in de tabel hieronder.",
      caption:
        "Huurtermijn van onze vaste pakketten voor pleisterwerk, inclusief een meting van de restvochtigheid bij de start en bij de oplevering.",
      thDikte: "Laagdikte",
      thMet: "Met bouwdroger (Vernast-pakket)",
      thWaar: "Waar u die dikte tegenkomt",
      waar: {
        1: "De gangbare binnenbepleistering: gips, machinaal in één laag op snelbouwsteen of beton.",
        2: "Een dikkere opbouw of een uitvlaklaag, bijvoorbeeld op een muur die niet recht staat.",
        3: "Zwaar werk in meerdere lagen, zoals een cementering in een kelder of een natte ruimte.",
      },
      waarAnders: "Een laagdikte uit onze vaste pakketten.",
      beideCel: "Chape + pleister",
      beideWaar: "Een nieuwbouw waar vloer en muren tegelijk nat staan, in één pakket.",
      rwNote: (
        <>
          <b>Welk pakket hoort bij uw werf?</b> De{" "}
          <Link to={lp("/verhuur/calculator")}>droogcalculator</Link> vraagt uw oppervlakte, wat u droogt en de
          laagdikte, en toont het pakket met het aantal toestellen, de huurtermijn en de prijs. Droogt u
          ook de vloer, kijk dan op{" "}
          <Link to={lp("/gids/hoe-lang-moet-chape-drogen")}>hoe lang chape moet drogen</Link>.
        </>
      ),
      dichtH2: "Waarom wachten in een dicht huis niet werkt",
      dichtP: [
        "Vers pleisterwerk ziet er al snel droog uit. De laag wordt bovenaan het eerst licht en egaal, en dat is precies het moment waarop mensen beslissen dat de schilder mag komen. Op de foto hiernaast ziet u het verschil: de donkere zones zijn nog vol water, terwijl de rest van de muur er afgewerkt bijligt.",
        "Een laag die vanbinnen nog nat is, blijft dat ook onder een laag verf. Het vocht zoekt zijn weg naar buiten en duwt tegen de afwerking: verf kan bladderen, vlekken of loslaten, behang laat los aan de naden en schimmelt aan de achterkant. Dat zijn geen schilderfouten, maar het gevolg van te vroeg beginnen.",
        "Wat u wil weten, is dus niet hoe de muur eruitziet, maar hoeveel vocht er nog in zit en of de lucht in de ruimte dat nog kan opnemen. Dat zijn twee metingen, en samen vertellen ze of u verder kunt.",
      ],
      fotoAlt: "Vers gipspleister met donkere vochtzones naast al lichter, drogend pleisterwerk",
      fotoH3: "Donker is nat",
      fotoP:
        "Vers pleisterwerk kleurt lichter naarmate het droogt. Die kleur zegt alleen iets over het oppervlak: de laag eronder kan nog vol water zitten terwijl de muur er klaar uitziet.",
      f1Label: "Dicht huis, geen afvoer",
      f1H3: "Het vocht draait rond.",
      f1P: "De muren geven af tot de lucht verzadigd is; daarna slaat alles neer op ramen, dorpels en koude buitenmuren en trekt het weer in. De droging komt niet traag op gang: ze staat stil, en er is geen einddatum te geven.",
      f1Bar: "Geen termijn: het hangt volledig af van het weer",
      f2Label: "Met een bouwdroger",
      f2H3: "Het vocht verlaat het gebouw.",
      f2P: "Het toestel haalt de damp uit de lucht en vangt ze op, een ventilator houdt die lucht in beweging. De muren kunnen blijven afgeven, de condens op de ramen verdwijnt, en de einddatum staat vast in plaats van af te hangen van de week erna.",
      f2Bar: <>{dunste?.weken} tot {dikste?.weken} weken, naar laagdikte</>,
      nachtNote: (
        <>
          <b>Zet de droger niet 's nachts uit.</b> De vochtigheid loopt in een paar uur weer op en het
          pleisterwerk neemt een deel ervan gewoon terug op. U verliest dan meer droogtijd dan u aan
          stroom bespaart, en wat zo'n toestel per dag kost, rekenen we voor in{" "}
          <Link to={lp("/gids/stroomverbruik-bouwdroger")}>stroomverbruik van een bouwdroger</Link>.
        </>
      ),
      prKick: "In de praktijk",
      prH2: "Wat de droogtijd korter of langer maakt.",
      prLede: "Vijf dingen bepalen of uw muren binnen de termijn klaar zijn. Vier ervan kunt u zelf sturen.",
      factoren: [
        { titel: "De laagdikte", tekst: "Een dubbele laag betekent dubbel zoveel aanmaakwater, en dat water moet door hetzelfde oppervlak naar buiten." },
        { titel: "De ondergrond", tekst: "Een zuigende steen neemt een deel van het water op en geeft het traag weer af. Op beton blijft alles in de laag zitten." },
        { titel: "De temperatuur", tekst: "Warme lucht draagt veel meer vocht dan koude. In een onverwarmde ruwbouw staat de droging zo goed als stil." },
        { titel: "Wat er nog meer nat is", tekst: "Ligt er ook een verse chape, dan vechten vloer en muren om dezelfde lucht. Samen drogen vraagt meer capaciteit." },
        { titel: "De luchtbeweging", tekst: "In hoeken, achter deuren en op de bovenste verdieping blijft de lucht staan. Daar droogt de muur het laatst." },
      ],
      gcKick: "Twee soorten pleisterwerk",
      gcH2: "Gipspleister of cementpleister?",
      gcLede:
        "De termijnen hierboven gaan over gewone binnenbepleistering. Werkt u met een cementgebonden laag, in een kelder, een natte ruimte of op een buitenmuur, dan gelden er andere regels, en het voorschrift van de plaatser gaat boven elke vuistregel.",
      gips: {
        vt: "Gipspleister",
        h3: "De gewone binnenbepleistering, en de snelste.",
        lijst: [
          ["Dun en in één laag.", <> Machinaal aangebracht op snelbouwsteen of beton, doorgaans rond {dunste?.cm} cm dik.</>],
          ["Geeft zijn water vlot af.", " De laag ligt aan één kant open; het vocht hoeft maar een paar millimeter af te leggen."],
          ["Gevoelig voor te hard drogen.", " Een kachel vlak voor de muur droogt het oppervlak en laat de laag eronder nat; dat geeft scheuren of een poederige bovenlaag."],
          ["Niet waterbestendig.", " In een douche of kelder hoort gips niet thuis; daar wordt cementgebonden gewerkt."],
        ],
        vf: "De richtwaarden en pakketten op deze pagina gaan hierover.",
      },
      cement: {
        vt: "Cementpleister",
        h3: "Zwaarder werk, en trager van nature.",
        lijst: [
          ["Bindt water chemisch.", " Net als chape heeft cement dat water eerst nodig; pas daarna begint de eigenlijke droging."],
          ["Ligt doorgaans dikker", " en vaak in meerdere lagen, bijvoorbeeld bij een cementering in een kelder of een natte ruimte."],
          ["Vraagt meer geduld.", " Reken op de langere termijnen uit de tabel, en op een wachttijd voor u begint te drogen."],
          ["Volg het voorschrift.", " Wachttijden en grenswaarden verschillen per product; de plaatser en de fabrikant hebben het laatste woord."],
        ],
        vf: (
          <>
            Zit er vocht in de muur zelf, kijk dan bij{" "}
            <Link to={lp("/renovatie")}>een vochtige kelder of schimmel</Link>.
          </>
        ),
      },
      stKick: "Aanpak",
      stH2: "Zo droogt u pleisterwerk, in zes stappen.",
      stLede:
        "Niet de volgorde uit een handleiding, maar de volgorde waarin het op de werf misloopt: er staat een kachel voor de muur én een raam open, en die twee werken tegen elkaar in.",
      /*
        De volgorde waarin het op de werf misloopt, niet de volgorde waarin het in
        een handleiding staat: mensen zetten een kachel voor de muur en gooien een
        raam open, en dat zijn precies de twee stappen die tegen elkaar in werken.
      */
      stappen: [
        ["Gun de eerste dagen rust.", " Vers pleisterwerk moet eerst binden. Droog in die dagen niet keihard en zet zeker geen kachel vlak voor een muur: dan droogt het oppervlak uit terwijl de laag eronder nog nat is, en dat geeft scheuren of een poederige bovenlaag."],
        ["Zet het gebouw dicht.", " Ramen en buitendeuren toe. U droogt de ruimte, niet de straat. Belgische buitenlucht is een groot deel van het jaar vochtiger dan wat u binnen wil."],
        ["Verwarm gelijkmatig.", " Rond kamertemperatuur is genoeg. Eén gloeiende kachel in één hoek droogt die hoek en laat de rest staan."],
        ["Zet de bouwdroger centraal.", " Midden in de ruimte, vrij van muren en meubels, en laat hem dag en nacht draaien. De hygrostaat regelt zelf terug zodra de streefwaarde bereikt is."],
        ["Zet een ventilator bij.", " Hij hoeft niet op de muur te blazen; hij moet de lucht in beweging houden, zodat de verzadigde laag voor het pleisterwerk wordt weggeveegd."],
        ["Meet voor de schilder of behanger komt.", " Een egale, lichte kleur zegt iets over het oppervlak, niet over de laag eronder. Laat de restvochtigheid meten en leg ze vast."],
      ],
      stNote: (
        <>
          <b>Droogt u ook een verse chape?</b> Dan komt er in dezelfde ruimte veel meer water vrij, en
          vraagt dat meer capaciteit dan een van de twee apart. In ons combipakket zit dat verrekend. Zie <Link to={lp("/nieuwbouw-drogen")}>chape en pleisterwerk drogen in nieuwbouw</Link>.
        </>
      ),
      scKick: "Meten, niet gokken",
      scH2: "Wanneer mag de schilder of behanger komen?",
      scLede:
        "Dit is het moment waarop te vroeg beginnen echt geld kost: wat er onder de afwerking nog aan vocht zit, komt er niet meer uit zonder die afwerking weg te halen.",
      zeker: {
        vt: "Zo weet u het zeker",
        h3: "Twee metingen, en een afspraak met uw schilder.",
        lijst: [
          ["Meet de muur én de lucht.", " Een vochtmeter op het oppervlak zegt iets over de laag; de luchtvochtigheid zegt of het gebouw als geheel al droog is."],
          ["Vraag de schilder wat hij wil zien.", " Hij kent zijn verf en zijn grondlaag; welke waarde hij hanteert, hoort u van hem te horen en niet van een vuistregel."],
          ["Begin dampopen.", " Een eerste laag die damp doorlaat, laat de muur verder ademen; een dichte afwerking sluit op wat er nog in zit."],
          ["Voor- en nameting bij ons pakket.", " De technieker legt de start- en eindwaarde vast, en op aanvraag krijgt u een meetrapport."],
        ],
        vf: (
          <>
            Zie ook onze <Link to={lp("/drooggarantie")}>Drooggarantie</Link>: niet droog op de einddatum,
            dan verlengen wij kosteloos.
          </>
        ),
      },
      mis: {
        vt: "Zo gaat het mis",
        h3: "Vier beslissingen die u opnieuw laat beginnen.",
        lijst: [
          ["Op kleur beslissen.", " Licht en egaal betekent dat het oppervlak droog is, niets meer."],
          ["Behangen op een natte muur.", " Het behang sluit het vocht op; de schimmel groeit erachter en u ziet het pas maanden later."],
          ["Meteen een dichte afwerking.", " Vinyl, een dampdichte verf of een gietvloer tegen de plint: alles wat afsluit, houdt het vocht binnen."],
          ["Een kachel voor de muur zetten.", " Het oppervlak droogt vooruit op de laag eronder, met krimpscheuren of loskomend pleisterwerk tot gevolg."],
        ],
      },
      faqTitel: "Alles over de droogtijd van pleisterwerk",
      faq: [
        ...pleister.map((rij) => ({
          question: `Hoe lang moet pleisterwerk van ${rij.cm} cm drogen?`,
          answer: `Met een bouwdroger rekenen wij voor een laag van ${rij.cm} cm op een huurtermijn van ${weken(
            rij.weken,
          )}, met een meting van de restvochtigheid bij de start en bij de oplevering. ${
            STAART[rij.cm] ?? "De termijn volgt uit de laagdikte, niet uit de oppervlakte."
          } Zonder droger is er geen vaste termijn te geven: dan hangt alles af van de luchtvochtigheid in het gebouw, en in een koud, dichtgemaakt huis staat de droging stil in plaats van traag te lopen. De meting beslist of u mag schilderen, niet de kalender.`,
        })),
        {
          question: "Wanneer mag ik schilderen op vers pleisterwerk?",
          answer:
            "Pas als een meting bevestigt dat de laag droog is, niet wanneer de muur egaal licht oogt. Een pleisterlaag wordt bovenaan het eerst licht; daaronder kan ze nog vol water zitten. Verf op een te natte ondergrond kan bladderen, vlekken of loslaten, en een verse ondergrond is bovendien alkalisch, wat sommige verven aantast. Vraag uw schilder welke waarde hij wil zien en welke eerste laag hij gebruikt: een dampopen grondlaag laat de muur verder ademen, een dichte afwerking sluit het restvocht op.",
        },
        {
          question: "Mag ik behangen op pleisterwerk dat nog niet helemaal droog is?",
          answer:
            "Nee, en behang is strenger dan verf. Zeker vinyl of een dichte kwaliteit legt een scherm over de muur, waardoor het vocht dat er nog in zit niet meer weg kan. Het blijft dan hangen tussen muur en behang, en dat is precies het klimaat waarin schimmel ontstaat; u ziet het pas maanden later aan donkere vlekken en loslatende naden. Laat meten, en vraag de behanger wat hij als bovengrens hanteert.",
        },
        {
          question: "Moet ik de ramen openzetten om pleisterwerk te drogen?",
          answer:
            "Alleen als de buitenlucht droger is dan de binnenlucht, en dat is in België een groot deel van het jaar niet zo. Draait er een bouwdroger, zet de ramen dan dicht: anders haalt het toestel voortdurend nieuwe, vochtige lucht binnen en droogt het de straat in plaats van uw muren. Zonder droger is kort en krachtig verluchten op een droge, winderige dag beter dan een raam dat de hele dag op kiepstand staat: dan koelt het gebouw alleen maar af, en koude lucht neemt nauwelijks vocht op.",
        },
        {
          question: "Mag ik een bouwkachel voor de muur zetten om het sneller te laten gaan?",
          answer:
            "Liever niet, en zeker niet vlak voor een muur. Een kachel die op één vlak staat te blazen, droogt het oppervlak sneller dan de laag eronder; dat geeft krimpscheuren, een poederige bovenlaag of plaatselijk loskomend pleisterwerk. Bovendien haalt warmte het vocht wel uit de muur, maar niet uit het gebouw: zonder bouwdroger slaat het even verderop weer neer op een koud raam of een buitenmuur. Verwarm gelijkmatig rond kamertemperatuur en laat een droger het vocht afvoeren.",
        },
        {
          question: "Waarom staat er condens op mijn ramen na het pleisteren?",
          answer:
            "Omdat het vocht de muur uit is, maar het gebouw niet. Vers pleisterwerk geeft dagenlang water af aan de lucht; zit het huis dicht en is er geen ontvochtiging, dan loopt de relatieve vochtigheid op tot de lucht verzadigd is. Op het koudste oppervlak in de ruimte, zoals het glas, de dorpel of een buitenmuur achter een kast, koelt die lucht onder haar dauwpunt af en wordt de damp weer water. De condens is dus geen raamprobleem maar een signaal dat er te veel vocht in de lucht hangt. Lees ook hoe drogen werkt.",
        },
        {
          question: "Hoe weet ik of pleisterwerk droog is?",
          answer:
            "Door te meten in plaats van te kijken of te voelen. Een vochtmeter op het oppervlak geeft een eerste indicatie, en de luchtvochtigheid in de ruimte vertelt of het gebouw als geheel al droog is: zolang die hoog blijft, geeft de muur niets meer af. Bij twijfel, of wanneer er een dichte afwerking op komt, wordt er dieper gemeten. In onze droogpakketten legt de technieker de waarde vast bij de start en bij de oplevering, zodat u niet op gevoel moet beslissen; een meetrapport kan erbij.",
        },
        {
          question: "Gipspleister of cementpleister: wat droogt sneller?",
          answer:
            "Gipspleister, in de regel. Het is de gewone binnenbepleistering, ligt dun en in één laag, en geeft zijn water vlot af. Cementgebonden werk, zoals een cementering in een kelder, een natte ruimte of op een buitenmuur, ligt doorgaans dikker, bindt een deel van het water chemisch en moet dat eerst doen voor de rest kan verdampen. Reken daarvoor op een langere termijn, en volg het voorschrift van de plaatser: dat gaat boven elke vuistregel.",
        },
        {
          question: "Kan ik chape en pleisterwerk tegelijk laten drogen?",
          answer: beide
            ? `Ja, en in een nieuwbouw is dat ook de normale gang van zaken: de vloer en de muren staan tegelijk nat. Daarvoor hebben wij een pakket dat beide samen droogt, met een huurtermijn van ${weken(
                beide,
              )}. U huurt dan één keer en meet één keer, in plaats van twee droogrondes na elkaar. Let wel: samen drogen vraagt meer capaciteit dan een van de twee apart, want er komt in dezelfde ruimte veel meer water vrij. De droogcalculator rekent dat voor uw oppervlakte uit.`
            : "Ja, en in een nieuwbouw is dat ook de normale gang van zaken: de vloer en de muren staan tegelijk nat. Samen drogen vraagt wel meer capaciteit dan een van de twee apart, want er komt in dezelfde ruimte veel meer water vrij. De droogcalculator rekent uit welk pakket daarbij hoort.",
        },
        {
          question: "Hoeveel bouwdrogers heb ik nodig voor pleisterwerk?",
          answer:
            "Dat hangt af van het volume van de ruimte en van wat er nog meer nat is, niet van het aantal vierkante meter muur alleen. Een open nieuwbouw met hoge plafonds vraagt meer dan een rij afgesloten kamers van dezelfde oppervlakte. De droogcalculator vraagt daarom uw oppervlakte, wat u droogt en de laagdikte, en stelt daarmee een pakket samen met het aantal toestellen en de huurtermijn. Eén te klein toestel haalt de streefwaarde simpelweg niet, hoe lang u het ook laat staan.",
        },
        {
          question: "Mag de bouwdroger 's nachts uit?",
          answer:
            "Beter niet. Zet u hem uit, dan loopt de relatieve vochtigheid in een paar uur weer op en neemt het pleisterwerk een deel van dat vocht gewoon terug op. De volgende ochtend begint het toestel van verder, en u verliest meer droogtijd dan u aan stroom bespaart. Een condensbouwdroger is gebouwd om continu te draaien en schakelt vanzelf terug zodra de streefwaarde bereikt is. Wat zo'n toestel per dag kost, rekenen we voor in onze gids over stroomverbruik.",
        },
      ],
      lvKick: "Verder lezen",
      lvH2: "Droogt u meer dan alleen de muren?",
      lvLede:
        "In een nieuwbouw staan vloer en muren tegelijk nat, en dan telt vooral wat er het traagst droogt. Twee pagina's die daarop verdergaan.",
      door: [
        {
          h3: "Hoe lang moet chape drogen?",
          p: "De richtwaarden per centimeter, waarom een dikkere vloer veel trager droogt en hoe u weet wanneer de vloerlegger mag komen.",
          meer: "Lees de gids over chape →",
        },
        {
          h3: "Chape en pleisterwerk samen drogen",
          p: "Eén pakket, één huurtermijn en één meting voor en na, in plaats van twee droogrondes na elkaar.",
          meer: "Bekijk drogen in nieuwbouw →",
        },
      ],
      leesVerder: [
        "Hoe drogen werkt",
        "Condensdroger of adsorptiedroger",
        "Stroomverbruik van een bouwdroger",
        "Vers pleisterwerk gecontroleerd drooggelegd",
        "Prijzen en tarieven",
      ],
      mbKick: "Moet de schilder volgende week komen?",
      mbH3: "Wij meten uw muren voor en na, en garanderen de einddatum.",
      mbP: (
        <>
          Onze techniekers plaatsen de toestellen, stellen de streefwaarde in en leggen de
          restvochtigheid vast bij de start en bij de oplevering. Is het pleisterwerk dan niet droog,
          dan verlengen wij kosteloos, zie <Link to={lp("/drooggarantie")}>de Drooggarantie</Link>.
        </>
      ),
      mbCta: "Bereken uw droogpakket",
      mbAlt: "Vernast technieker geeft duim omhoog",
      contact: {
        kicker: "Nog een vraag over uw muren?",
        titel: "Onze droogspecialisten kijken met u naar de planning.",
        lede: "Weet u niet of uw pleisterwerk op tijd droog is voor de schilder, of droogt u ook nog een chape? Stel uw vraag, u krijgt binnen één werkdag antwoord van een specialist.",
        onderwerpen: [
          "Vraag over de droogtijd van pleisterwerk",
          "Chape en pleisterwerk samen drogen",
          "Vraag over meten voor het schilderen",
          "Iets anders",
        ],
        placeholder: "Bv. 180 m² gipspleister van 1 cm, gepleisterd op 5 november, schilder komt begin december. Haalt dat?",
      },
    };
  },
  fr: ({ lp, pleister, dunste, dikste, beide }: PleisterData): PleisterTekst => {
    const weken = (n: number) => `${n} ${n === 1 ? "semaine" : "semaines"}`;
    const STAART: Record<number, string> = {
      1: "Un centimètre, c'est le plafonnage intérieur courant, et aussi le plus rapide : la couche est fine et entièrement ouverte d'un côté.",
      2: "Deux centimètres, c'est deux fois plus d'eau qui doit sortir par la même surface, et donc pas deux fois moins de patience.",
      3: "Trois centimètres, c'est un travail lourd en plusieurs couches. Une telle épaisseur retient l'humidité le plus longtemps, surtout sur du béton.",
    };
    return {
      weken,
      crumbHome: "Accueil",
      crumbGidsen: "Guides",
      crumb: "Combien de temps sèche un plafonnage ?",
      kick: "Guide · temps de séchage",
      h1: "Combien de temps un plafonnage doit-il sécher ?",
      intro: (
        <p>
          Avec un déshumidificateur de chantier, un plafonnage sèche en {dunste?.weken} à {dikste?.weken} semaines,
          selon l'épaisseur de la couche. Sans déshumidificateur, aucun délai ne peut être promis : c'est alors
          l'humidité de l'air dans votre bâtiment qui fixe le rythme, et dans une maison froide et fermée, le
          séchage s'arrête au lieu de ralentir. Vous trouverez ci-dessous les délais par épaisseur, la raison
          pour laquelle l'humidité reste dans la maison, et le moment où le peintre peut venir.
        </p>
      ),
      heroAlt: "Les techniciens de Vernast avec leurs déshumidificateurs",
      badge: <>{dunste?.weken} à {dikste?.weken} semaines</>,
      badgeSub: "avec un pack de séchage, selon l'épaisseur",
      emWeken: "semaines",
      emUur: " h",
      statDun: <>Avec un pack de séchage pour {dunste?.cm} cm de plafonnage, l'épaisseur courante</>,
      statDik: <>Pour {dikste?.cm} cm, la couche la plus épaisse pour laquelle nous avons un pack fixe</>,
      statBeide: "Chape et plafonnage ensemble, en un seul pack et une seule durée de location",
      statUur: "De fonctionnement par jour : l'éteindre la nuit fait remonter l'humidité",
      muurH2: "Un mur sèche de l'extérieur vers l'intérieur",
      muurP: [
        <>
          Une couche de plafonnage est fine et entièrement ouverte d'un côté : elle libère donc son eau plus
          vite qu'une chape de six centimètres. Mais elle le fait de l'extérieur vers l'intérieur. Les premiers
          millimètres sont déjà secs alors que la couche contre la brique est encore gorgée d'eau, et le mur
          semble alors déjà sec au toucher. <b>Un mur qui paraît sec au toucher n'est pas sec.</b>
        </>,
        <>
          De plus, la brique derrière le plafonnage a absorbé une partie de cette eau de gâchage. Une brique
          absorbante la restitue lentement, et tant que cela dure, la couche de plafonnage est alimentée par
          l'arrière. Vous le voyez sur le dessin ci-contre : clair en surface, foncé là où l'eau se trouve
          encore.
        </>,
        <>
          Toute cette eau doit quitter le bâtiment. Si la maison est fermée, elle reste dans l'air jusqu'à ce
          que celui-ci soit saturé ; à ce moment, l'air n'absorbe plus rien et le séchage s'arrête, aussi
          longtemps que vous attendiez. Ce que vous voyez alors, c'est de la condensation sur les fenêtres et
          sur les murs extérieurs froids. Un déshumidificateur de chantier interrompt ce cycle, et pourquoi
          cela fonctionne est expliqué en détail sur <Link to={lp("/hoe-drogen-werkt")}>comment fonctionne le séchage</Link>.
        </>,
      ],
      muH: "Le mur en coupe",
      muSub: "2 cm de plafonnage sur 25 cm de brique",
      muKamer: "Pièce",
      muPleister: "Plafonnage, 2 cm",
      muSteen: "Bloc de construction, 25 cm",
      legDroog: ["Sec", " en surface"],
      legNat: ["Humide", " plus profondément dans la couche"],
      legSteen: ["Brique", " absorbe une partie"],
      muF: "La couche de plafonnage de 2 cm sèche de l'extérieur vers l'intérieur : les premiers millimètres sont déjà secs alors que la couche contre la brique est encore gorgée d'eau. Un mur qui paraît sec au toucher n'est donc pas sec.",
      rwKick: "Valeurs indicatives",
      rwH2: "Temps de séchage du plafonnage par épaisseur.",
      rwLede:
        "La durée de location de nos packs fixes, par épaisseur de couche. Elle découle de cette épaisseur et non de votre surface : un espace plus grand reçoit plus d'appareils, pas une durée plus longue.",
      rijLabel: (cm) => `${cm} cm de plafonnage`,
      beideLabel: "Chape et plafonnage ensemble",
      vglnoot: "Les barres sont à la même échelle, la durée la plus longue valant 100 %. Les mêmes chiffres figurent dans le tableau ci-dessous.",
      caption:
        "Durée de location de nos packs fixes pour le plafonnage, mesure de l'humidité résiduelle au début et à la fin comprise.",
      thDikte: "Épaisseur",
      thMet: "Avec déshumidificateur (pack Vernast)",
      thWaar: "Où vous rencontrez cette épaisseur",
      waar: {
        1: "Le plafonnage intérieur courant : plâtre, projeté à la machine en une couche sur bloc de construction ou béton.",
        2: "Une couche plus épaisse ou une couche de dressage, par exemple sur un mur qui n'est pas droit.",
        3: "Un travail lourd en plusieurs couches, comme un cimentage dans une cave ou une pièce humide.",
      },
      waarAnders: "Une épaisseur issue de nos packs fixes.",
      beideCel: "Chape + plafonnage",
      beideWaar: "Une nouvelle construction où sol et murs sont humides en même temps, en un seul pack.",
      rwNote: (
        <>
          <b>Quel pack convient à votre chantier ?</b> Le{" "}
          <Link to={lp("/verhuur/calculator")}>calculateur de séchage</Link> vous demande votre surface, ce que vous
          séchez et l'épaisseur, et affiche le pack avec le nombre d'appareils, la durée de location et le prix.
          Vous séchez aussi le sol ? Consultez alors{" "}
          <Link to={lp("/gids/hoe-lang-moet-chape-drogen")}>combien de temps une chape doit sécher</Link>.
        </>
      ),
      dichtH2: "Pourquoi attendre dans une maison fermée ne fonctionne pas",
      dichtP: [
        "Un plafonnage frais paraît vite sec. La couche devient d'abord claire et uniforme en surface, et c'est précisément le moment où l'on décide que le peintre peut venir. Sur la photo ci-contre, vous voyez la différence : les zones foncées sont encore gorgées d'eau, alors que le reste du mur semble terminé.",
        "Une couche encore humide à l'intérieur le reste aussi sous une couche de peinture. L'humidité cherche à sortir et pousse contre la finition : la peinture peut s'écailler, se tacher ou se décoller, le papier peint se décolle aux joints et moisit à l'arrière. Ce ne sont pas des erreurs du peintre, mais la conséquence d'un démarrage trop précoce.",
        "Ce que vous voulez savoir, ce n'est donc pas l'aspect du mur, mais la quantité d'humidité qu'il contient encore et si l'air de la pièce peut encore l'absorber. Ce sont deux mesures, et ensemble elles vous disent si vous pouvez continuer.",
      ],
      fotoAlt: "Plafonnage au plâtre frais avec des zones d'humidité foncées à côté d'un plafonnage déjà plus clair en train de sécher",
      fotoH3: "Foncé, c'est humide",
      fotoP:
        "Un plafonnage frais s'éclaircit à mesure qu'il sèche. Cette couleur ne dit quelque chose que de la surface : la couche en dessous peut encore être gorgée d'eau alors que le mur semble prêt.",
      f1Label: "Maison fermée, sans évacuation",
      f1H3: "L'humidité tourne en rond.",
      f1P: "Les murs libèrent de l'humidité jusqu'à ce que l'air soit saturé ; ensuite, tout se dépose sur les fenêtres, les appuis et les murs extérieurs froids, puis est réabsorbé. Le séchage ne démarre pas lentement : il est à l'arrêt, et aucune date de fin ne peut être donnée.",
      f1Bar: "Aucun délai : tout dépend de la météo",
      f2Label: "Avec un déshumidificateur",
      f2H3: "L'humidité quitte le bâtiment.",
      f2P: "L'appareil retire la vapeur de l'air et la recueille, un ventilateur maintient cet air en mouvement. Les murs peuvent continuer à libérer leur humidité, la condensation sur les fenêtres disparaît, et la date de fin est fixée au lieu de dépendre de la semaine suivante.",
      f2Bar: <>{dunste?.weken} à {dikste?.weken} semaines, selon l'épaisseur</>,
      nachtNote: (
        <>
          <b>N'éteignez pas le déshumidificateur la nuit.</b> L'humidité remonte en quelques heures et le
          plafonnage en réabsorbe tout simplement une partie. Vous perdez alors plus de temps de séchage que vous
          n'économisez d'électricité, et ce qu'un tel appareil coûte par jour, nous le calculons dans{" "}
          <Link to={lp("/gids/stroomverbruik-bouwdroger")}>consommation électrique d'un déshumidificateur</Link>.
        </>
      ),
      prKick: "En pratique",
      prH2: "Ce qui raccourcit ou allonge le temps de séchage.",
      prLede: "Cinq éléments déterminent si vos murs seront prêts dans les délais. Vous pouvez en maîtriser quatre vous-même.",
      factoren: [
        { titel: "L'épaisseur de la couche", tekst: "Une couche deux fois plus épaisse, c'est deux fois plus d'eau de gâchage, et cette eau doit sortir par la même surface." },
        { titel: "Le support", tekst: "Une brique absorbante prend une partie de l'eau et la restitue lentement. Sur du béton, tout reste dans la couche." },
        { titel: "La température", tekst: "L'air chaud transporte beaucoup plus d'humidité que l'air froid. Dans un gros œuvre non chauffé, le séchage est pratiquement à l'arrêt." },
        { titel: "Ce qui est encore humide", tekst: "S'il y a aussi une chape fraîche, le sol et les murs se disputent le même air. Sécher les deux ensemble demande plus de capacité." },
        { titel: "Le mouvement de l'air", tekst: "Dans les coins, derrière les portes et au dernier étage, l'air stagne. C'est là que le mur sèche en dernier." },
      ],
      gcKick: "Deux sortes de plafonnage",
      gcH2: "Enduit plâtre ou enduit ciment ?",
      gcLede:
        "Les délais ci-dessus concernent le plafonnage intérieur ordinaire. Si vous travaillez avec une couche à base de ciment, dans une cave, une pièce humide ou sur un mur extérieur, d'autres règles s'appliquent, et la prescription du plafonneur prime sur toute règle empirique.",
      gips: {
        vt: "Enduit plâtre",
        h3: "Le plafonnage intérieur ordinaire, et le plus rapide.",
        lijst: [
          ["Fin et en une couche.", <> Projeté à la machine sur bloc de construction ou béton, généralement d'environ {dunste?.cm} cm d'épaisseur.</>],
          ["Libère facilement son eau.", " La couche est ouverte d'un côté ; l'humidité n'a que quelques millimètres à parcourir."],
          ["Sensible à un séchage trop dur.", " Un chauffage juste devant le mur sèche la surface et laisse la couche en dessous humide ; cela donne des fissures ou une surface poudreuse."],
          ["Pas résistant à l'eau.", " Le plâtre n'a pas sa place dans une douche ou une cave ; on y travaille avec des produits à base de ciment."],
        ],
        vf: "Les valeurs indicatives et les packs de cette page portent sur ce type d'enduit.",
      },
      cement: {
        vt: "Enduit ciment",
        h3: "Un travail plus lourd, et plus lent par nature.",
        lijst: [
          ["Lie l'eau chimiquement.", " Comme la chape, le ciment a d'abord besoin de cette eau ; ce n'est qu'ensuite que le séchage proprement dit commence."],
          ["Généralement plus épais", " et souvent en plusieurs couches, par exemple pour un cimentage dans une cave ou une pièce humide."],
          ["Demande plus de patience.", " Comptez sur les délais les plus longs du tableau, et sur un temps d'attente avant de commencer à sécher."],
          ["Suivez la prescription.", " Les temps d'attente et les valeurs limites diffèrent selon le produit ; le plafonneur et le fabricant ont le dernier mot."],
        ],
        vf: (
          <>
            L'humidité se trouve dans le mur lui-même ? Consultez alors{" "}
            <Link to={lp("/renovatie")}>une cave humide ou des moisissures</Link>.
          </>
        ),
      },
      stKick: "Méthode",
      stH2: "Sécher un plafonnage, en six étapes.",
      stLede:
        "Pas l'ordre d'un mode d'emploi, mais l'ordre dans lequel les choses tournent mal sur chantier : un chauffage devant le mur et une fenêtre ouverte, deux mesures qui se contrarient.",
      stappen: [
        ["Laissez reposer les premiers jours.", " Un plafonnage frais doit d'abord prendre. Ne séchez pas trop fort pendant ces jours-là et ne placez surtout pas de chauffage juste devant un mur : la surface sèche alors que la couche en dessous est encore humide, ce qui donne des fissures ou une surface poudreuse."],
        ["Fermez le bâtiment.", " Fenêtres et portes extérieures fermées. Vous séchez la pièce, pas la rue. Une grande partie de l'année, l'air extérieur en Belgique est plus humide que ce que vous voulez à l'intérieur."],
        ["Chauffez de manière uniforme.", " Une température ambiante suffit. Un seul chauffage brûlant dans un coin sèche ce coin et laisse le reste tel quel."],
        ["Placez le déshumidificateur au centre.", " Au milieu de la pièce, à l'écart des murs et des meubles, et laissez-le tourner jour et nuit. L'hygrostat réduit lui-même la puissance dès que la valeur cible est atteinte."],
        ["Ajoutez un ventilateur.", " Il ne doit pas souffler sur le mur ; il doit maintenir l'air en mouvement, pour balayer la couche d'air saturé devant le plafonnage."],
        ["Mesurez avant l'arrivée du peintre ou du tapissier.", " Une couleur claire et uniforme dit quelque chose de la surface, pas de la couche en dessous. Faites mesurer l'humidité résiduelle et consignez-la."],
      ],
      stNote: (
        <>
          <b>Vous séchez aussi une chape fraîche ?</b> Il se libère alors beaucoup plus d'eau dans la même pièce,
          ce qui demande plus de capacité que l'un des deux séparément. Notre pack combiné en tient compte.
          Voir <Link to={lp("/nieuwbouw-drogen")}>sécher la chape et le plafonnage dans une nouvelle construction</Link>.
        </>
      ),
      scKick: "Mesurer, pas deviner",
      scH2: "Quand le peintre ou le tapissier peut-il venir ?",
      scLede:
        "C'est le moment où commencer trop tôt coûte vraiment de l'argent : l'humidité qui reste sous la finition ne peut plus en sortir sans enlever cette finition.",
      zeker: {
        vt: "Pour en être sûr",
        h3: "Deux mesures, et un accord avec votre peintre.",
        lijst: [
          ["Mesurez le mur et l'air.", " Un humidimètre en surface renseigne sur la couche ; l'humidité de l'air indique si le bâtiment dans son ensemble est déjà sec."],
          ["Demandez au peintre ce qu'il veut voir.", " Il connaît sa peinture et sa sous-couche ; c'est de lui que vous devez apprendre quelle valeur il applique, pas d'une règle empirique."],
          ["Commencez perméable à la vapeur.", " Une première couche qui laisse passer la vapeur permet au mur de continuer à respirer ; une finition étanche enferme ce qui s'y trouve encore."],
          ["Mesure avant et après avec notre pack.", " Le technicien consigne la valeur de départ et la valeur finale, et vous recevez un rapport de mesure sur demande."],
        ],
        vf: (
          <>
            Voir aussi notre <Link to={lp("/drooggarantie")}>garantie de séchage</Link> : pas sec à la date de fin,
            nous prolongeons sans frais.
          </>
        ),
      },
      mis: {
        vt: "Ce qui tourne mal",
        h3: "Quatre décisions qui vous font recommencer.",
        lijst: [
          ["Décider sur la couleur.", " Clair et uniforme signifie que la surface est sèche, rien de plus."],
          ["Tapisser un mur humide.", " Le papier peint enferme l'humidité ; les moisissures se développent derrière et vous ne le voyez que des mois plus tard."],
          ["Appliquer tout de suite une finition étanche.", " Du vinyle, une peinture étanche à la vapeur ou un sol coulé contre la plinthe : tout ce qui ferme retient l'humidité à l'intérieur."],
          ["Placer un chauffage devant le mur.", " La surface sèche plus vite que la couche en dessous, avec pour conséquence des fissures de retrait ou un plafonnage qui se décolle."],
        ],
      },
      faqTitel: "Tout sur le temps de séchage d'un plafonnage",
      faq: [
        ...pleister.map((rij) => ({
          question: `Combien de temps un plafonnage de ${rij.cm} cm doit-il sécher ?`,
          answer: `Avec un déshumidificateur de chantier, nous comptons pour une couche de ${rij.cm} cm une durée de location de ${weken(
            rij.weken,
          )}, avec une mesure de l'humidité résiduelle au début et à la fin. ${
            STAART[rij.cm] ?? "Le délai découle de l'épaisseur de la couche, pas de la surface."
          } Sans déshumidificateur, aucun délai fixe ne peut être donné : tout dépend alors de l'humidité de l'air dans le bâtiment, et dans une maison froide et fermée, le séchage s'arrête au lieu de ralentir. C'est la mesure qui décide si vous pouvez peindre, pas le calendrier.`,
        })),
        {
          question: "Quand puis-je peindre sur un plafonnage frais ?",
          answer:
            "Seulement quand une mesure confirme que la couche est sèche, pas quand le mur paraît uniformément clair. Une couche de plafonnage devient d'abord claire en surface ; en dessous, elle peut encore être gorgée d'eau. La peinture sur un support trop humide peut s'écailler, se tacher ou se décoller, et un support frais est en outre alcalin, ce qui attaque certaines peintures. Demandez à votre peintre quelle valeur il veut voir et quelle première couche il utilise : une sous-couche perméable à la vapeur laisse le mur continuer à respirer, une finition étanche enferme l'humidité résiduelle.",
        },
        {
          question: "Puis-je tapisser sur un plafonnage qui n'est pas encore tout à fait sec ?",
          answer:
            "Non, et le papier peint est plus exigeant que la peinture. Surtout le vinyle ou une qualité étanche pose un écran sur le mur, si bien que l'humidité qu'il contient encore ne peut plus s'échapper. Elle reste alors entre le mur et le papier peint, et c'est précisément le climat dans lequel les moisissures apparaissent ; vous ne le voyez que des mois plus tard, à des taches sombres et des joints qui se décollent. Faites mesurer, et demandez au tapissier quelle limite supérieure il applique.",
        },
        {
          question: "Dois-je ouvrir les fenêtres pour faire sécher un plafonnage ?",
          answer:
            "Seulement si l'air extérieur est plus sec que l'air intérieur, et ce n'est pas le cas en Belgique une grande partie de l'année. Si un déshumidificateur tourne, fermez les fenêtres : sinon l'appareil fait sans cesse entrer de l'air neuf et humide et sèche la rue au lieu de vos murs. Sans déshumidificateur, une aération courte et énergique par une journée sèche et venteuse vaut mieux qu'une fenêtre en position oscillante toute la journée : le bâtiment ne fait alors que se refroidir, et l'air froid n'absorbe presque pas d'humidité.",
        },
        {
          question: "Puis-je placer un chauffage de chantier devant le mur pour aller plus vite ?",
          answer:
            "Mieux vaut pas, et surtout pas juste devant un mur. Un chauffage qui souffle sur une seule surface sèche celle-ci plus vite que la couche en dessous ; cela donne des fissures de retrait, une surface poudreuse ou un plafonnage qui se décolle par endroits. De plus, la chaleur retire bien l'humidité du mur, mais pas du bâtiment : sans déshumidificateur, elle se dépose un peu plus loin sur une fenêtre froide ou un mur extérieur. Chauffez uniformément autour de la température ambiante et laissez un déshumidificateur évacuer l'humidité.",
        },
        {
          question: "Pourquoi y a-t-il de la condensation sur mes fenêtres après le plafonnage ?",
          answer:
            "Parce que l'humidité a quitté le mur, mais pas le bâtiment. Un plafonnage frais libère de l'eau dans l'air pendant des jours ; si la maison est fermée et qu'il n'y a pas de déshumidification, l'humidité relative monte jusqu'à ce que l'air soit saturé. Sur la surface la plus froide de la pièce, comme le vitrage, l'appui de fenêtre ou un mur extérieur derrière une armoire, cet air se refroidit sous son point de rosée et la vapeur redevient de l'eau. La condensation n'est donc pas un problème de fenêtre, mais le signe qu'il y a trop d'humidité dans l'air. Lisez aussi comment fonctionne le séchage.",
        },
        {
          question: "Comment savoir si un plafonnage est sec ?",
          answer:
            "En mesurant au lieu de regarder ou de toucher. Un humidimètre en surface donne une première indication, et l'humidité de l'air dans la pièce indique si le bâtiment dans son ensemble est déjà sec : tant qu'elle reste élevée, le mur ne libère plus rien. En cas de doute, ou si une finition étanche doit être appliquée, on mesure plus en profondeur. Dans nos packs de séchage, le technicien consigne la valeur au début et à la fin, pour que vous ne deviez pas décider au jugé ; un rapport de mesure peut être ajouté.",
        },
        {
          question: "Enduit plâtre ou enduit ciment : lequel sèche le plus vite ?",
          answer:
            "L'enduit plâtre, en règle générale. C'est le plafonnage intérieur ordinaire, il est fin, appliqué en une couche, et libère facilement son eau. Les travaux à base de ciment, comme un cimentage dans une cave, une pièce humide ou sur un mur extérieur, sont généralement plus épais, lient une partie de l'eau chimiquement et doivent d'abord le faire avant que le reste puisse s'évaporer. Comptez pour cela sur un délai plus long, et suivez la prescription du plafonneur : elle prime sur toute règle empirique.",
        },
        {
          question: "Puis-je faire sécher la chape et le plafonnage en même temps ?",
          answer: beide
            ? `Oui, et dans une nouvelle construction, c'est d'ailleurs le cours normal des choses : le sol et les murs sont humides en même temps. Nous avons pour cela un pack qui sèche les deux ensemble, avec une durée de location de ${weken(
                beide,
              )}. Vous louez alors une seule fois et mesurez une seule fois, au lieu de deux séchages successifs. Attention : sécher les deux ensemble demande plus de capacité que l'un des deux séparément, car il se libère beaucoup plus d'eau dans la même pièce. Le calculateur de séchage le calcule pour votre surface.`
            : "Oui, et dans une nouvelle construction, c'est d'ailleurs le cours normal des choses : le sol et les murs sont humides en même temps. Sécher les deux ensemble demande toutefois plus de capacité que l'un des deux séparément, car il se libère beaucoup plus d'eau dans la même pièce. Le calculateur de séchage calcule le pack qui convient.",
        },
        {
          question: "De combien de déshumidificateurs ai-je besoin pour un plafonnage ?",
          answer:
            "Cela dépend du volume de la pièce et de ce qui est encore humide, pas uniquement du nombre de mètres carrés de mur. Une nouvelle construction ouverte avec de hauts plafonds demande davantage qu'une série de pièces fermées de même surface. C'est pourquoi le calculateur de séchage vous demande votre surface, ce que vous séchez et l'épaisseur de la couche, et compose ainsi un pack avec le nombre d'appareils et la durée de location. Un appareil trop petit n'atteint tout simplement pas la valeur cible, aussi longtemps que vous le laissiez tourner.",
        },
        {
          question: "Puis-je éteindre le déshumidificateur la nuit ?",
          answer:
            "Mieux vaut pas. Si vous l'éteignez, l'humidité relative remonte en quelques heures et le plafonnage réabsorbe tout simplement une partie de cette humidité. Le lendemain matin, l'appareil repart de plus loin, et vous perdez plus de temps de séchage que vous n'économisez d'électricité. Un déshumidificateur à condensation est conçu pour fonctionner en continu et réduit lui-même sa puissance dès que la valeur cible est atteinte. Ce qu'un tel appareil coûte par jour, nous le calculons dans notre guide sur la consommation électrique.",
        },
      ],
      lvKick: "Pour aller plus loin",
      lvH2: "Vous séchez plus que les murs ?",
      lvLede:
        "Dans une nouvelle construction, le sol et les murs sont humides en même temps, et c'est surtout ce qui sèche le plus lentement qui compte. Deux pages qui approfondissent ce point.",
      door: [
        {
          h3: "Combien de temps une chape doit-elle sécher ?",
          p: "Les valeurs indicatives par centimètre, pourquoi un sol plus épais sèche beaucoup plus lentement et comment savoir quand le poseur de sol peut venir.",
          meer: "Lire le guide sur la chape →",
        },
        {
          h3: "Sécher la chape et le plafonnage ensemble",
          p: "Un seul pack, une seule durée de location et une seule mesure avant et après, au lieu de deux séchages successifs.",
          meer: "Voir le séchage en nouvelle construction →",
        },
      ],
      leesVerder: [
        "Comment fonctionne le séchage",
        "Déshumidificateur à condensation ou à adsorption",
        "Consommation électrique d'un déshumidificateur",
        "Un plafonnage frais séché de manière contrôlée",
        "Prix et tarifs",
      ],
      mbKick: "Le peintre doit venir la semaine prochaine ?",
      mbH3: "Nous mesurons vos murs avant et après, et garantissons la date de fin.",
      mbP: (
        <>
          Nos techniciens installent les appareils, règlent la valeur cible et consignent l'humidité résiduelle
          au début et à la fin. Si le plafonnage n'est alors pas sec, nous prolongeons sans frais, voir{" "}
          <Link to={lp("/drooggarantie")}>la garantie de séchage</Link>.
        </>
      ),
      mbCta: "Calculez votre pack de séchage",
      mbAlt: "Un technicien Vernast lève le pouce",
      contact: {
        kicker: "Encore une question sur vos murs ?",
        titel: "Nos spécialistes du séchage examinent le planning avec vous.",
        lede: "Vous ne savez pas si votre plafonnage sera sec à temps pour le peintre, ou vous séchez aussi une chape ? Posez votre question, un spécialiste vous répond dans un délai d'un jour ouvrable.",
        onderwerpen: [
          "Question sur le temps de séchage d'un plafonnage",
          "Sécher la chape et le plafonnage ensemble",
          "Question sur la mesure avant de peindre",
          "Autre chose",
        ],
        placeholder: "P. ex. 180 m² d'enduit plâtre de 1 cm, posé le 5 novembre, le peintre vient début décembre. Est-ce faisable ?",
      },
    };
  },
} satisfies Copy<(d: PleisterData) => PleisterTekst>;
