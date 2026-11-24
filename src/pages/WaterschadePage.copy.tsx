import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import type { Copy } from "@/i18n/useTaal";
import type { DroogtermijnRij } from "@/lib/droogtijden";
import { toestelPad } from "@/data/verhuur";

/**
 * De teksten van /waterschade per taal. De Nederlandse staan er letterlijk zoals
 * ze op de pagina stonden; de Franse zijn geen woord-voor-woord vertaling, maar
 * voegen ook niets toe. De voorzichtige formulering rond de verzekering geldt in
 * beide talen: wij kunnen niet weten wat een polis vergoedt.
 */

/**
 * Wat per taal anders uit de catalogus komt: de prijs van het vochtrapport
 * (met btw-label) en de huurtermijn van het waterschadepakket. Beide worden in
 * de pagina berekend, nooit hier overgetypt.
 */
export interface WsCtx {
  lp: (nlPad: string) => string;
  /** " voor € 49,00 excl. btw" of "" als het rapport niet in de catalogus staat. */
  rapportPrijs: string;
  /** "4 weken" / "4 semaines", of null zonder waterschadepakket. */
  termijn: string | null;
}

/** De Franse tegenhanger van `termijnLabel` uit lib/droogtijden. */
export function termijnLabelFr(rij: Pick<DroogtermijnRij, "min" | "max">): string {
  const eenheid = (n: number) => (n === 1 ? "semaine" : "semaines");
  return rij.min === rij.max
    ? `${rij.min} ${eenheid(rij.min)}`
    : `${rij.min} à ${rij.max} ${eenheid(rij.max)}`;
}

interface Stap {
  title: string;
  desc: string;
}

interface Schadetype {
  label: string;
  titel: string;
  tekst: string;
  aanpak: string;
  fotoAlt: string;
}

interface Verloop {
  /** Blijft "U" of "Vernast": StappenCarrousel kleurt daarop. */
  wie: "U" | "Vernast";
  titel: string;
  tekst: string;
}

interface Kaart {
  titel: string;
  p1: string;
  p2: string;
}

export interface WsTeksten {
  schemaNaam: string;
  schemaBeschrijving: string;
  schemaType: string;
  kruimelHome: string;
  kruimelPagina: string;

  pulse: string;
  h1: string;
  heroP: string;
  bel: string;
  aanvraag: string;
  heroAlt: string;
  badgeTitel: string;
  badgeSub: string;
  trust: [string, string, string, string];

  eersteKick: string;
  eersteH2: string;
  eersteLede: string;
  eersteUren: Stap[];

  soortenKick: string;
  soortenH2: string;
  soortenLede: string;
  schadetypes: Schadetype[];
  aanpakLabel: string;
  elkUur: ReactNode;

  dossierKick: string;
  dossierH2: string;
  dossierP1: string;
  dossierP2: string;
  dos: {
    soort: string;
    titel: string;
    ruimteL: string;
    ruimte: string;
    oorzaakL: string;
    oorzaak: string;
    techniekerL: string;
    dossierL: string;
    vaststelling: string;
    foto: string;
    metingen: string;
    chape: string;
    oppervlak: string;
    rvLucht: string;
    aanpak: string;
    conclusieL: string;
    conclusie: string;
    stempel1: string;
    stempel2: string;
  };
  dosBijschrift: string;
  krijgtKick: string;
  krijgtH3: string;
  krijgtP: (c: WsCtx) => string;
  krijgtAlt: string;

  techKick: string;
  techH2: string;
  techLede: string;
  techP1: string;
  techP2: (c: WsCtx) => ReactNode;
  techChips: [string, string, string, string];
  techAlt: string;
  kaarten: [Kaart, Kaart, Kaart];
  techNote: ReactNode;

  werkKick: string;
  werkH2: string;
  werkLede: string;
  verloop: Verloop[];
  carrouselLabel: string;

  refKick: string;
  refH2: string;
  refLede: string;
  refAlle: string;
  refNote: (c: WsCtx) => ReactNode;

  faqTitel: string;
  faqs: (c: WsCtx) => { q: string; a: string }[];
  nuKick: string;
  nuH3: string;
  nuP: string;
  nuAlt: string;

  contactKicker: string;
  contactTitel: string;
  contactLede: string;
  contactPlaceholder: string;

  urgTitel: string;
  urgBelAria: string;
  urgWhatsApp: string;
}

export const WS_COPY = {
  nl: {
    schemaNaam: "Bouwdroging na waterschade",
    schemaBeschrijving:
      "Snelle droging van vloeren, muren en isolatie na een waterlek of overstroming, met bouwdrogers en ventilatoren geleverd binnen 24 uur.",
    schemaType: "Waterschadeherstel",
    kruimelHome: "Home",
    kruimelPagina: "Waterschade",

    pulse: "Spoedlevering · bel ons nu",
    h1: "Waterschade drogen. Vandaag geleverd, niet volgende week.",
    heroP:
      "Een gesprongen leiding, een ondergelopen kelder, een badkamer die naar beneden lekte: vanaf het moment dat het water weg is, loopt de klok. Binnen twee dagen begint schimmel. Wij leveren bij waterschade dezelfde dag, meten bij de start en leveren een factuur op naam voor uw verzekeringsdossier.",
    bel: "Bel",
    aanvraag: "Aanvraag doen",
    heroAlt: "Bouwdroger en ventilator aan het werk in een ruimte na waterschade",
    badgeTitel: "24 tot 48 uur",
    badgeSub: "daarna begint de schimmel",
    trust: ["Levering dezelfde dag", "Factuur voor uw verzekeraar", "Altijd bereikbaar", "Vochtmeting voor én na"],

    eersteKick: "Doe dit eerst",
    eersteH2: "Wat u moet doen in de eerste 48 uur.",
    eersteLede:
      "Na een lek of overstroming trekt het water snel dieper: eerst in de chape en de onderkant van de muren, daarna in isolatie en pleisterwerk. Na een dag of twee krijgt schimmel kans op vochtig materiaal. Hoe sneller u het water weghaalt en begint te drogen, hoe minder er uitgebroken moet worden.",
    eersteUren: [
      {
        title: "Veiligheid eerst",
        desc: "Schakel de stroom uit in de natte zones voor u erin stapt, en zet geen elektrische toestellen in staand water.",
      },
      {
        title: "Stop de bron",
        desc: "Draai de hoofdkraan dicht bij een leidinglek en laat het lek herstellen. Zolang er water bijkomt, heeft drogen weinig zin.",
      },
      {
        title: "Leg de schade vast",
        desc: "Neem foto's en video van het water, de vloer, de muren en de beschadigde spullen, vóór u opruimt. Gooi niets weg voor uw verzekeraar zegt dat het mag.",
      },
      {
        title: "Haal het staande water weg",
        desc: "Pomp of zuig het water op. Een bouwdroger haalt vocht uit de lucht en uit materialen, niet uit een plas op de vloer.",
      },
      {
        title: "Ruim natte materialen op",
        desc: "Tapijt, ondertapijt, kartonnen dozen en losse meubels houden water vast en schimmelen snel. Zet ze buiten de ruimte, dan kan de lucht bij vloer en muren.",
      },
      {
        title: "Start met drogen en meet",
        desc: "Ontvochtiger en ventilator erbij, ramen en deuren dicht. Een meting bij de start geeft het vertrekpunt; de meting op het einde toont dat het droog is.",
      },
    ],

    soortenKick: "Welke schade heeft u?",
    soortenH2: "Niet elke waterschade droogt even snel.",
    soortenLede:
      "Waar het water in terechtkwam bepaalt alles: de aanpak, de duur en of er uitgebroken moet worden. Een natte tegelvloer op volle beton is vaak in dagen klaar; water dat in de isolatie onder een zwevende chape liep, kost weken en krijgt u met een droger in de kamer niet weg. Herkent u uw situatie hieronder, dan weet u meteen wat u te wachten staat.",
    schadetypes: [
      {
        label: "Meest voorkomend",
        titel: "Gesprongen of lekkende leiding",
        tekst:
          "Een koppeling die loslaat, een leiding die bevriest, een lek achter een muur dat weken onopgemerkt bleef. Het water loopt via de kortste weg naar beneden en trekt in de chape, de onderkant van de muren en het pleisterwerk. Vaak is de zichtbare plek maar een fractie van het natte oppervlak.",
        aanpak:
          "Lek eerst laten herstellen, dan drogen. Wij meten hoe ver het vocht is gelopen en zetten de toestellen op de natste zone, niet op de plek waar u het lek zag.",
        fotoAlt: "Natte muur onder een lekkende leiding in een woning",
      },
      {
        label: "Snelst urgent",
        titel: "Ondergelopen kelder of garage",
        tekst:
          "Na een hevige bui, een terugslaande riolering of een defecte pomp. Kelders zijn koud en slecht verlucht, dus het vocht blijft hangen en schimmel krijgt er sneller kans dan boven. Opslag, karton en textiel zuigen zich vol en worden zelf een vochtbron.",
        aanpak:
          "Staand water eerst weg, natte spullen eruit. In een koude kelder zetten we een bouwkachel of een adsorptiedroger in, omdat een condensdroger onder 15 °C sterk aan rendement verliest.",
        fotoAlt: "Ondergelopen kelder met vochtlijn op de muur en een natte vloer",
      },
      {
        label: "Lastigst te zien",
        titel: "Water in de vloeropbouw of isolatie",
        tekst:
          "Bij een zwevende chape ligt er isolatie onder de vloer. Loopt daar water in, dan staat het buiten bereik van de lucht in de kamer: het oppervlak voelt na een week droog terwijl de opbouw nat blijft. Maanden later komen de vlekken, de geur of het loskomende parket alsnog.",
        aanpak:
          "Dit is het geval waarvoor wij gericht drogen: droge lucht gaat via kleine openingen en slangen rechtstreeks in de vloeropbouw. Vaak maakt dat het verschil tussen drogen en uitbreken.",
        fotoAlt: "Gerichte droging van natte vloerisolatie via luchtslangen",
      },
      {
        label: "Van boven",
        titel: "Lekkende badkamer, dak of regeninslag",
        tekst:
          "Een voeg die niet meer waterdicht is, een verstopte dakgoot, een storm die water door een gevel duwt. Het vocht komt van bovenaf en verspreidt zich over het plafond en de bovenkant van de muren, soms in een andere ruimte dan waar het lek zit.",
        aanpak:
          "Eerst de bron dicht, daarna drogen vanaf de hoogste natte plek. Plafonds en gipswanden geven hun vocht vlot af; het metselwerk erachter heeft meer tijd nodig.",
        fotoAlt: "Waterschade op het plafond en de bovenmuur door een lekkage van boven",
      },
    ],
    aanpakLabel: "Onze aanpak: ",
    elkUur: (
      <>
        <b>Waarom elk uur telt.</b> Waterschade wordt niet geleidelijk erger, maar in sprongen. Op
        vochtig materiaal slaat schimmel aan na 24 tot 48 uur, en vanaf dat moment volstaat drogen
        niet meer: er moet ook gesaneerd worden. De tweede drempel is het moment waarop het vocht de
        vloeropbouw of de isolatie bereikt. Wat daarvóór droog is, hoeft meestal niet uitgebroken te
        worden.
      </>
    ),

    dossierKick: "Uw dossier",
    dossierH2: "Waterschade en uw verzekering.",
    dossierP1:
      "Waterschade valt vaak onder de brandverzekering van de woning, maar of en hoeveel er vergoed wordt, hangt af van uw polis en van de oorzaak. Vraag het uw verzekeraar of makelaar zo vroeg mogelijk, liefst vóór u grote kosten maakt.",
    dossierP2:
      "Wat een verzekeraar doorgaans wil zien: een aangifte binnen de termijn, foto's van de schade, de facturen van wat u liet doen, en dat u de schade beperkt hebt. Snel drogen hoort bij dat laatste. Hiernaast ziet u hoe het verslag eruitziet dat u van ons krijgt: de meetwaarden bij start en oplevering, de foto's van de situatie zoals wij ze aantroffen, en de vaststelling van waar het vocht zat.",
    dos: {
      soort: "Technisch vochtverslag",
      titel: "Droogdossier waterschade",
      ruimteL: "Ruimte",
      ruimte: "Kelder 42 m²",
      oorzaakL: "Oorzaak",
      oorzaak: "Leidingbreuk",
      techniekerL: "Technieker",
      dossierL: "Dossier",
      vaststelling: "Vaststelling ter plaatse",
      foto: "Fotoreportage",
      metingen: "Metingen bij start",
      chape: "Chape",
      oppervlak: "Oppervlak",
      rvLucht: "RV lucht",
      aanpak: "Vaststelling en aanpak",
      conclusieL: "Conclusie",
      conclusie: "Water in de vloerisolatie. Gericht drogen met adsorptiedroger; uitbraak niet nodig.",
      stempel1: "Vocht",
      stempel2: "gemeten",
    },
    dosBijschrift:
      "Voorbeeld van het verslag dat u bij de oplevering krijgt. De waarden hierboven zijn ter illustratie.",
    krijgtKick: "Wat u van ons krijgt",
    krijgtH3: "Alles wat in een schadedossier hoort, zonder dat u erom moet vragen.",
    krijgtP: (c) =>
      `Een factuur op naam, de vochtmeting bij de start en bij de oplevering, en foto's van de situatie zoals wij ze aantroffen. Een ondertekend vochtrapport met alle meetwaarden neemt u optioneel bij${c.rapportPrijs}.`,
    krijgtAlt: "Vernast technicus noteert de meetwaarden voor het schadedossier",

    techKick: "De techniek",
    techH2: "Zit het vocht in de kamer, of in de vloer?",
    techLede:
      "Dat is bij waterschade de enige vraag die telt, want er horen twee verschillende machines bij. Zit het vocht in de lucht en in de oppervlakken van de kamer, dan haalt een condensontvochtiger het eruit. Zit het in de vloeropbouw, de isolatie of achter een wand, dan komt de lucht uit de kamer daar nooit bij.",
    techP1:
      "Bij een zwevende chape ligt isolatie onder de vloer. Liep daar water in, dan voelt het oppervlak na een week droog terwijl de opbouw nat blijft; de vlekken, de geur of het loskomende parket komen maanden later alsnog.",
    techP2: ({ lp }) => (
      <>
        Daarom boren wij kleine openingen op de juiste plaatsen en blazen we droge lucht via slangen
        rechtstreeks in de vloeropbouw, de spouw of de wand. Dat is wat een{" "}
        <Link to={lp(toestelPad("revolution"))}>adsorptiedroger</Link> kan en een gewone droger
        niet, en onder 15 °C verliest hij nauwelijks capaciteit. Hoe de twee technieken verschillen,
        staat uitgewerkt in de gids{" "}
        <Link to={lp("/gids/condensdroger-of-adsorptiedroger")}>condensdroger of adsorptiedroger</Link>.
        Wij meten of de constructie zelf droog is, niet alleen de lucht erboven, bij een gedekt
        schadegeval vaak het verschil tussen een droogdossier en een afbraakdossier.
      </>
    ),
    techChips: ["Vloeropbouw en isolatie", "Spouw en voorzetwand", "Koude kelders", "Houten vloeren"],
    techAlt: "Vernast Revolution adsorptiedroger met slangaansluiting voor gericht drogen",
    kaarten: [
      {
        titel: "Adsorptiedroger",
        p1: "Voor vocht dat buiten bereik zit: onder een zwevende chape, in isolatie, achter een voorzetwand of in een houten vloer. Blaast droge lucht via slangen gericht naar de plek zelf.",
        p2: "Ook de keuze voor een koude kelder: hij verliest onder 15 °C nauwelijks capaciteit.",
      },
      {
        titel: "Condensontvochtiger",
        p1: "Voor de ruimte zelf: zuigt de vochtige lucht aan, koelt ze af zodat het water condenseert, en blaast droge lucht terug. In een verwarmde woning werkt dat goed.",
        p2: "Onder ongeveer 15 °C daalt het rendement sterk; dan zet u er een bouwkachel bij.",
      },
      {
        titel: "En altijd een ventilator",
        p1: "Bij waterschade hoort er altijd luchtbeweging bij: zonder ventilator droogt vooral de lucht, niet de vloer en de muren.",
        p2: "Een radiaalventilator blaast vlak over een natte vloer; een axiale houdt de hele ruimte in beweging.",
      },
    ],
    techNote: (
      <>
        <b>Welke combinatie het wordt, bepalen wij ter plaatse.</b> U hoeft dus niet zelf te kiezen:
        wij meten waar het vocht zit en hoe koud de ruimte is, en stellen de opstelling daarop samen.
        Bij twijfel komen we kijken vóór er iets geleverd wordt.
      </>
    ),

    werkKick: "Zo werken wij",
    werkH2: "Van de eerste natte plek tot het meetrapport.",
    werkLede:
      "Een schadegeval begint niet bij ons maar bij u, op het moment dat u het water ziet. Dit is het volledige verloop, met per stap wie er aan zet is. Het schuift vanzelf door; met de pijlen of de nummers gaat u zelf vooruit of terug.",
    verloop: [
      {
        wie: "U",
        titel: "U merkt de schade op",
        tekst:
          "Een natte vloer, een vochtplek op het plafond, een muffe geur in de kelder. Zet de stroom uit in de natte zone, draai de hoofdkraan dicht als het een leiding is, en neem foto's vóór u iets opruimt. Die foto's heeft uw verzekeraar later nodig.",
      },
      {
        wie: "U",
        titel: "U meldt het bij uw verzekeraar",
        tekst:
          "Doe de aangifte binnen de termijn uit uw polis. Vraag meteen of droogkosten in het dossier mogen en of er een expert langskomt. U hoeft niet op dat bezoek te wachten om te beginnen drogen; de schade beperken is net wat een verzekeraar van u verwacht.",
      },
      {
        wie: "U",
        titel: "U neemt contact met ons op",
        tekst:
          "Telefonisch of via het formulier onderaan. Beschrijf wat er gebeurd is, hoe groot de ruimte is en of het water al weg is. Bij waterschade bellen we zo snel mogelijk terug om te kijken wat vandaag nog kan.",
      },
      {
        wie: "Vernast",
        titel: "Wij bekijken het probleem en stellen een oplossing voor",
        tekst:
          "Aan de telefoon of ter plaatse bepalen we waar het vocht zit en hoe diep het is doorgedrongen. Daaruit volgt welke toestellen mee moeten: een condensdroger voor de ruimte, een adsorptiedroger als het vocht in de vloeropbouw zit, een ventilator en bij koude een bouwkachel.",
      },
      {
        wie: "Vernast",
        titel: "Wij komen langs, meten en leggen alles vast",
        tekst:
          "Onze technieker meet het vochtgehalte in vloer en muren, maakt foto's van de schade en zet die metingen digitaal op uw dossier. Dat is uw vertrekpunt, en het stuk dat een verzekeraar doorgaans wil zien.",
      },
      {
        wie: "Vernast",
        titel: "Wij plaatsen de toestellen en starten de droging",
        tekst:
          "Wij verdelen de toestellen over de natte zones, sluiten de condensafvoer aan zodat u niets hoeft te legen, en stellen de streefvochtigheid in. U laat ramen en deuren dicht en verplaatst niets; de rest gebeurt vanzelf, dag en nacht.",
      },
      {
        wie: "Vernast",
        titel: "Wij halen op, meten na en bezorgen het rapport",
        tekst:
          "De eindmeting beslist of het droog is, niet de kalender. Wij vergelijken met een droge plek in dezelfde woning, halen de toestellen op en bezorgen u de meetwaarden van start en einde. Een ondertekend vochtrapport voor uw verzekeringsdossier neemt u optioneel bij.",
      },
    ],
    carrouselLabel: "Zo werken wij bij waterschade",

    refKick: "Uit de praktijk",
    refH2: "Waterschade die we eerder droogden.",
    refLede:
      "Drie dossiers met de foto's van de werf zelf: wat er gebeurd was, welke toestellen we plaatsten en hoe lang het duurde.",
    refAlle: "Alle waterschadeprojecten bekijken",
    refNote: ({ lp }) => (
      <>
        <b>Wij rijden bij waterschade in heel België.</b> Vanuit ons magazijn in Aartselaar staan we
        het snelst in <Link to={lp("/bouwdroger-huren-antwerpen")}>de provincie Antwerpen</Link>,{" "}
        <Link to={lp("/bouwdroger-huren-oost-vlaanderen")}>Oost-Vlaanderen</Link> en{" "}
        <Link to={lp("/bouwdroger-huren-vlaams-brabant")}>Vlaams-Brabant</Link>; verder weg plannen
        we de rit mee, maar leveren we evengoed. Weet u al wat u nodig heeft, dan stelt de{" "}
        <Link to={lp("/verhuur/calculator")}>droogcalculator</Link> het pakket meteen samen.
      </>
    ),

    faqTitel: "Wat mensen met waterschade ons vragen.",
    faqs: (c) => [
      {
        q: "Hoe snel moet ik beginnen met drogen na waterschade?",
        a: "Binnen 24 tot 48 uur. Daarna begint schimmelvorming en dringt het vocht dieper in chape, isolatie en pleisterwerk. Wij leveren daarom bij waterschade nog dezelfde dag.",
      },
      {
        q: "Hoe lang duurt drogen na een waterlek of overstroming?",
        /*
          Hier stond "ons waterschadepakket rekent met een huurtermijn van 4
          weken" als enig antwoord. Dat las als "elke schade duurt vier weken",
          terwijl een natte tegelvloer op beton in dagen klaar is en water in de
          vloerisolatie weken kost. De termijn van het pakket is de bovengrens
          waarop wij plannen, niet de verwachte duur — en de meting beslist.
        */
        a: `Dat verschilt sterk per situatie. Een natte tegelvloer op volle beton of een gipswand die water opving, is vaak in enkele dagen tot een week droog. Zit het water in de chape, dan loopt het op tot ongeveer twee weken, en is het in de isolatie onder een zwevende vloer gelopen, dan duurt het doorgaans drie weken of meer. Bepalend zijn hoe lang het water er stond, hoe diep het trok en hoe warm de ruimte is.${
          c.termijn
            ? ` Ons waterschadepakket is daarom opgebouwd met een huurtermijn van ${c.termijn}: dat is de bovengrens waarop wij plannen, niet de tijd die uw schade nodig heeft.`
            : ""
        } Is het eerder droog, dan halen we eerder op. De vochtmeting bij start en oplevering beslist, niet de kalender.`,
      },
      {
        q: "Betaalt mijn verzekering de huur van een bouwdroger?",
        a: `Dat hangt af van uw polis en van de oorzaak van de schade. Bij een gedekt schadegeval worden droogkosten vaak mee opgenomen in het dossier, maar vraag het uw verzekeraar of makelaar voor u beslist. Van ons krijgt u een factuur op naam en de metingen bij start en oplevering; een ondertekend vochtrapport kunt u bijnemen${c.rapportPrijs}.`,
      },
      {
        q: "Moet ik wachten op de expert van de verzekering voor ik begin te drogen?",
        a: "Nee, en dat is meestal ook niet de bedoeling. Uw polis verwacht dat u de schade beperkt, en snel beginnen drogen hoort daarbij. Wat u wél eerst doet: foto's en video van de schade maken vóór u opruimt, en niets weggooien tot uw verzekeraar zegt dat het mag. Meld bij de aangifte dat u een droging opstart; de meetwaarden en de factuur die u van ons krijgt, horen daarna in het dossier.",
      },
      {
        q: "Hoeveel toestellen heb ik nodig bij een ondergelopen kelder?",
        a: "Voor een gemiddelde kelder volstaat één ontvochtiger met een ventilator. Staat er water in meerdere ruimtes of is de ruimte koud, dan komt er een bouwkachel of een adsorptiedroger bij. Bel ons met de afmetingen, dan rekenen we het samen door.",
      },
      {
        q: "Kan ik drogen terwijl er nog water staat?",
        a: "Nee. Pomp of zuig eerst het staande water weg. Een bouwdroger haalt vocht uit de lucht en uit materialen, niet uit een plas. Zodra de vloer waterloos is, plaatsen wij de toestellen.",
      },
      {
        q: "Moet de chape eruit na waterschade?",
        a: "Niet altijd. Is er water in de isolatie onder een zwevende chape gelopen, dan kan gericht drogen met een adsorptiedroger, die droge lucht via slangen in de vloeropbouw blaast, uitbreken soms voorkomen. Of dat lukt, hangt af van hoe lang het water er stond en van de opbouw van de vloer. Dat schatten we liefst samen met u in.",
      },
      {
        q: "Werkt een bouwdroger in een koude kelder na een overstroming?",
        a: "Beperkt. Onder 15 °C verliest een condensontvochtiger sterk aan rendement. Zet er een elektrische bouwkachel bij, of kies een adsorptiedroger: die verliest in de koude veel minder capaciteit.",
      },
    ],
    nuKick: "Nu bellen",
    nuH3: "Hoe sneller wij er staan, hoe minder er uitgebroken moet worden.",
    nuP: "Beschrijf kort wat er gebeurd is en hoe groot de ruimte is. Wij zeggen meteen welke toestellen mee moeten en wanneer we kunnen leveren: bij waterschade vandaag nog.",
    nuAlt: "Vernast technicus bij de bestelwagen met een bouwdroger",

    contactKicker: "Waterschade melden",
    contactTitel: "Beschrijf uw situatie, wij bellen u terug.",
    contactLede:
      "Bij waterschade telt elk uur. Belt u liever meteen? Doe dat gerust, dan rijden we vandaag nog uit. Via dit formulier krijgt u binnen één werkdag antwoord.",
    contactPlaceholder:
      "Bv. kelder van 40 m² ondergelopen na een gesprongen leiding, water is weg, chape en onderkant van de muren zijn nat.",

    urgTitel: "Waterschade? Bel nu",
    urgBelAria: "Bel",
    urgWhatsApp: "WhatsApp ons",
  },

  fr: {
    schemaNaam: "Séchage après dégâts des eaux",
    schemaBeschrijving:
      "Séchage rapide des sols, murs et isolations après une fuite d’eau ou une inondation, avec déshumidificateurs de chantier et ventilateurs livrés dans les 24 heures.",
    schemaType: "Réparation de dégâts des eaux",
    kruimelHome: "Accueil",
    kruimelPagina: "Dégâts des eaux",

    pulse: "Livraison urgente · appelez-nous maintenant",
    h1: "Sécher des dégâts des eaux. Livré aujourd’hui, pas la semaine prochaine.",
    heroP:
      "Une conduite qui éclate, une cave inondée, une salle de bain qui a fui vers l’étage du dessous : dès que l’eau est partie, le compte à rebours commence. Les moisissures apparaissent en deux jours. En cas de dégâts des eaux, nous livrons le jour même, nous mesurons au départ et vous recevez une facture à votre nom pour votre dossier d’assurance.",
    bel: "Appelez le",
    aanvraag: "Faire une demande",
    heroAlt: "Déshumidificateur de chantier et ventilateur au travail dans une pièce après un dégât des eaux",
    badgeTitel: "24 à 48 heures",
    badgeSub: "ensuite, les moisissures s’installent",
    trust: [
      "Livraison le jour même",
      "Facture pour votre assureur",
      "Toujours joignables",
      "Mesure d’humidité avant et après",
    ],

    eersteKick: "Faites d’abord ceci",
    eersteH2: "Que faire dans les 48 premières heures.",
    eersteLede:
      "Après une fuite ou une inondation, l’eau pénètre vite plus profondément : d’abord dans la chape et le bas des murs, ensuite dans l’isolation et le plafonnage. Au bout d’un jour ou deux, les moisissures trouvent prise sur les matériaux humides. Plus vite vous évacuez l’eau et commencez à sécher, moins il faudra démolir.",
    eersteUren: [
      {
        title: "La sécurité d’abord",
        desc: "Coupez le courant dans les zones mouillées avant d’y entrer, et ne placez aucun appareil électrique dans l’eau stagnante.",
      },
      {
        title: "Arrêtez la source",
        desc: "Fermez le robinet principal en cas de fuite de conduite et faites réparer la fuite. Tant que l’eau continue d’arriver, sécher n’a guère de sens.",
      },
      {
        title: "Documentez les dégâts",
        desc: "Prenez des photos et des vidéos de l’eau, du sol, des murs et des objets endommagés, avant de ranger. Ne jetez rien avant que votre assureur ne vous y autorise.",
      },
      {
        title: "Évacuez l’eau stagnante",
        desc: "Pompez ou aspirez l’eau. Un déshumidificateur de chantier retire l’humidité de l’air et des matériaux, pas une flaque sur le sol.",
      },
      {
        title: "Retirez les matériaux mouillés",
        desc: "Tapis, sous-tapis, boîtes en carton et meubles légers retiennent l’eau et moisissent vite. Sortez-les de la pièce, l’air atteindra alors le sol et les murs.",
      },
      {
        title: "Lancez le séchage et mesurez",
        desc: "Déshumidificateur et ventilateur en place, portes et fenêtres fermées. Une mesure au départ donne le point de référence ; la mesure finale montre que c’est sec.",
      },
    ],

    soortenKick: "Quel type de dégât avez-vous ?",
    soortenH2: "Tous les dégâts des eaux ne sèchent pas aussi vite.",
    soortenLede:
      "L’endroit où l’eau s’est infiltrée détermine tout : l’approche, la durée et la nécessité de démolir ou non. Un carrelage mouillé sur béton plein est souvent sec en quelques jours ; l’eau qui s’est infiltrée dans l’isolation sous une chape flottante demande des semaines, et un déshumidificateur posé dans la pièce ne l’en sortira pas. Si vous reconnaissez votre situation ci-dessous, vous savez tout de suite à quoi vous attendre.",
    schadetypes: [
      {
        label: "Le plus fréquent",
        titel: "Conduite éclatée ou qui fuit",
        tekst:
          "Un raccord qui lâche, une conduite qui gèle, une fuite derrière un mur restée inaperçue pendant des semaines. L’eau descend par le chemin le plus court et pénètre dans la chape, le bas des murs et le plafonnage. Souvent, la tache visible n’est qu’une fraction de la surface mouillée.",
        aanpak:
          "D’abord faire réparer la fuite, ensuite sécher. Nous mesurons jusqu’où l’humidité s’est étendue et plaçons les appareils sur la zone la plus humide, pas à l’endroit où vous avez vu la fuite.",
        fotoAlt: "Mur mouillé sous une conduite qui fuit dans une habitation",
      },
      {
        label: "Le plus urgent",
        titel: "Cave ou garage inondé",
        tekst:
          "Après une forte averse, un refoulement d’égout ou une pompe défectueuse. Les caves sont froides et mal ventilées : l’humidité y stagne et les moisissures s’y développent plus vite qu’à l’étage. Stockage, carton et textiles se gorgent d’eau et deviennent eux-mêmes une source d’humidité.",
        aanpak:
          "D’abord évacuer l’eau stagnante et sortir les objets mouillés. Dans une cave froide, nous ajoutons un chauffage de chantier ou un déshumidificateur à adsorption, car un déshumidificateur à condensation perd beaucoup de rendement sous 15 °C.",
        fotoAlt: "Cave inondée avec une ligne d’humidité sur le mur et un sol mouillé",
      },
      {
        label: "Le plus difficile à voir",
        titel: "Eau dans la composition du sol ou l’isolation",
        tekst:
          "Sous une chape flottante, il y a de l’isolation. Si l’eau s’y infiltre, elle est hors de portée de l’air de la pièce : la surface semble sèche après une semaine alors que la composition du sol reste mouillée. Des mois plus tard apparaissent quand même les taches, l’odeur ou le parquet qui se décolle.",
        aanpak:
          "C’est le cas pour lequel nous séchons de manière ciblée : de l’air sec est insufflé directement dans la composition du sol par de petites ouvertures et des tuyaux. C’est souvent ce qui fait la différence entre sécher et démolir.",
        fotoAlt: "Séchage ciblé d’une isolation de sol mouillée au moyen de tuyaux d’air",
      },
      {
        label: "Par le haut",
        titel: "Salle de bain, toiture ou infiltration de pluie",
        tekst:
          "Un joint qui n’est plus étanche, une gouttière bouchée, une tempête qui pousse l’eau à travers une façade. L’humidité vient d’en haut et se répand sur le plafond et le haut des murs, parfois dans une autre pièce que celle où se trouve la fuite.",
        aanpak:
          "D’abord colmater la source, ensuite sécher à partir du point mouillé le plus haut. Les plafonds et les cloisons en plâtre libèrent facilement leur humidité ; la maçonnerie derrière demande plus de temps.",
        fotoAlt: "Dégât des eaux au plafond et en haut du mur dû à une fuite venant d’en haut",
      },
    ],
    aanpakLabel: "Notre approche : ",
    elkUur: (
      <>
        <b>Pourquoi chaque heure compte.</b> Les dégâts des eaux ne s’aggravent pas progressivement,
        mais par paliers. Sur un matériau humide, les moisissures s’installent après 24 à 48 heures,
        et dès ce moment, sécher ne suffit plus : il faut aussi assainir. Le deuxième seuil est le
        moment où l’humidité atteint la composition du sol ou l’isolation. Ce qui est sec avant cela
        ne doit généralement pas être démoli.
      </>
    ),

    dossierKick: "Votre dossier",
    dossierH2: "Dégâts des eaux et votre assurance.",
    dossierP1:
      "Les dégâts des eaux relèvent souvent de l’assurance incendie de l’habitation, mais l’indemnisation, et son montant, dépendent de votre police et de la cause. Posez la question à votre assureur ou courtier le plus tôt possible, de préférence avant d’engager de gros frais.",
    dossierP2:
      "Ce qu’un assureur veut généralement voir : une déclaration dans les délais, des photos des dégâts, les factures des travaux réalisés, et la preuve que vous avez limité les dégâts. Sécher rapidement en fait partie. Ci-contre, vous voyez à quoi ressemble le rapport que vous recevez de notre part : les valeurs mesurées au départ et à la fin, les photos de la situation telle que nous l’avons trouvée, et le constat de l’endroit où se trouvait l’humidité.",
    dos: {
      soort: "Rapport technique d’humidité",
      titel: "Dossier de séchage dégâts des eaux",
      ruimteL: "Pièce",
      ruimte: "Cave 42 m²",
      oorzaakL: "Cause",
      oorzaak: "Rupture de conduite",
      techniekerL: "Technicien",
      dossierL: "Dossier",
      vaststelling: "Constat sur place",
      foto: "Reportage photo",
      metingen: "Mesures au départ",
      chape: "Chape",
      oppervlak: "Surface",
      rvLucht: "HR air",
      aanpak: "Constat et approche",
      conclusieL: "Conclusion",
      conclusie:
        "Eau dans l’isolation du sol. Séchage ciblé avec déshumidificateur à adsorption ; démolition pas nécessaire.",
      stempel1: "Humidité",
      stempel2: "mesurée",
    },
    dosBijschrift:
      "Exemple du rapport que vous recevez à la fin du séchage. Les valeurs ci-dessus sont données à titre d’illustration.",
    krijgtKick: "Ce que vous recevez",
    krijgtH3: "Tout ce qui doit figurer dans un dossier de sinistre, sans devoir le demander.",
    krijgtP: (c) =>
      `Une facture à votre nom, la mesure d’humidité au départ et à la fin, et des photos de la situation telle que nous l’avons trouvée. Un rapport d’humidité signé avec toutes les valeurs mesurées est disponible en option${c.rapportPrijs}.`,
    krijgtAlt: "Technicien Vernast notant les valeurs mesurées pour le dossier de sinistre",

    techKick: "La technique",
    techH2: "L’humidité est-elle dans la pièce, ou dans le sol ?",
    techLede:
      "En cas de dégâts des eaux, c’est la seule question qui compte, car elle appelle deux machines différentes. Si l’humidité se trouve dans l’air et dans les surfaces de la pièce, un déshumidificateur à condensation l’en retire. Si elle se trouve dans la composition du sol, l’isolation ou derrière une cloison, l’air de la pièce n’y arrivera jamais.",
    techP1:
      "Sous une chape flottante, il y a de l’isolation. Si l’eau s’y est infiltrée, la surface semble sèche après une semaine alors que la composition du sol reste mouillée ; les taches, l’odeur ou le parquet qui se décolle apparaissent quand même des mois plus tard.",
    techP2: ({ lp }) => (
      <>
        C’est pourquoi nous forons de petites ouvertures aux bons endroits et insufflons de l’air sec
        par des tuyaux directement dans la composition du sol, le creux du mur ou la cloison. C’est
        ce que peut faire un{" "}
        <Link to={lp(toestelPad("revolution"))}>déshumidificateur à adsorption</Link>, et pas un
        déshumidificateur ordinaire, et il ne perd quasiment pas de capacité sous 15 °C. La
        différence entre les deux techniques est expliquée dans le guide{" "}
        <Link to={lp("/gids/condensdroger-of-adsorptiedroger")}>
          déshumidificateur à condensation ou à adsorption
        </Link>
        . Nous mesurons si la construction elle-même est sèche, pas seulement l’air au-dessus : pour
        un sinistre couvert, c’est souvent la différence entre un dossier de séchage et un dossier
        de démolition.
      </>
    ),
    techChips: [
      "Composition du sol et isolation",
      "Creux du mur et contre-cloison",
      "Caves froides",
      "Planchers en bois",
    ],
    techAlt: "Déshumidificateur à adsorption Vernast Revolution avec raccord de tuyau pour un séchage ciblé",
    kaarten: [
      {
        titel: "Déshumidificateur à adsorption",
        p1: "Pour l’humidité hors de portée : sous une chape flottante, dans l’isolation, derrière une contre-cloison ou dans un plancher en bois. Il insuffle de l’air sec par des tuyaux, directement à l’endroit concerné.",
        p2: "C’est aussi le choix pour une cave froide : il ne perd quasiment pas de capacité sous 15 °C.",
      },
      {
        titel: "Déshumidificateur à condensation",
        p1: "Pour la pièce elle-même : il aspire l’air humide, le refroidit pour que l’eau condense, et rejette de l’air sec. Dans une habitation chauffée, cela fonctionne bien.",
        p2: "Sous environ 15 °C, le rendement chute fortement ; ajoutez alors un chauffage de chantier.",
      },
      {
        titel: "Et toujours un ventilateur",
        p1: "En cas de dégâts des eaux, il faut toujours du mouvement d’air : sans ventilateur, c’est surtout l’air qui sèche, pas le sol ni les murs.",
        p2: "Un ventilateur radial souffle à ras d’un sol mouillé ; un ventilateur axial maintient toute la pièce en mouvement.",
      },
    ],
    techNote: (
      <>
        <b>La combinaison, nous la déterminons sur place.</b> Vous n’avez donc pas à choisir vous-même :
        nous mesurons où se trouve l’humidité et la température de la pièce, et composons
        l’installation en conséquence. En cas de doute, nous venons voir avant de livrer quoi que ce
        soit.
      </>
    ),

    werkKick: "Notre méthode",
    werkH2: "De la première tache d’humidité au rapport de mesure.",
    werkLede:
      "Un sinistre ne commence pas chez nous mais chez vous, au moment où vous voyez l’eau. Voici le déroulement complet, avec pour chaque étape qui est à la manœuvre. Il défile tout seul ; avec les flèches ou les numéros, vous avancez ou reculez vous-même.",
    verloop: [
      {
        wie: "U",
        titel: "Vous constatez les dégâts",
        tekst:
          "Un sol mouillé, une tache d’humidité au plafond, une odeur de moisi dans la cave. Coupez le courant dans la zone mouillée, fermez le robinet principal s’il s’agit d’une conduite, et prenez des photos avant de ranger quoi que ce soit. Votre assureur aura besoin de ces photos plus tard.",
      },
      {
        wie: "U",
        titel: "Vous le déclarez à votre assureur",
        tekst:
          "Faites la déclaration dans le délai prévu par votre police. Demandez tout de suite si les frais de séchage peuvent être repris dans le dossier et si un expert passera. Vous ne devez pas attendre cette visite pour commencer à sécher ; limiter les dégâts est justement ce qu’un assureur attend de vous.",
      },
      {
        wie: "U",
        titel: "Vous prenez contact avec nous",
        tekst:
          "Par téléphone ou via le formulaire en bas de page. Décrivez ce qui s’est passé, la taille de la pièce et si l’eau est déjà partie. En cas de dégâts des eaux, nous vous rappelons au plus vite pour voir ce qui est encore possible aujourd’hui.",
      },
      {
        wie: "Vernast",
        titel: "Nous examinons le problème et proposons une solution",
        tekst:
          "Par téléphone ou sur place, nous déterminons où se trouve l’humidité et jusqu’où elle a pénétré. Cela détermine les appareils nécessaires : un déshumidificateur à condensation pour la pièce, un déshumidificateur à adsorption si l’humidité est dans la composition du sol, un ventilateur et, par temps froid, un chauffage de chantier.",
      },
      {
        wie: "Vernast",
        titel: "Nous passons, mesurons et consignons tout",
        tekst:
          "Notre technicien mesure le taux d’humidité du sol et des murs, photographie les dégâts et enregistre ces mesures numériquement dans votre dossier. C’est votre point de départ, et la pièce qu’un assureur veut généralement voir.",
      },
      {
        wie: "Vernast",
        titel: "Nous installons les appareils et lançons le séchage",
        tekst:
          "Nous répartissons les appareils sur les zones mouillées, raccordons l’évacuation des condensats pour que vous n’ayez rien à vider, et réglons l’humidité cible. Vous gardez portes et fenêtres fermées et ne déplacez rien ; le reste se fait tout seul, jour et nuit.",
      },
      {
        wie: "Vernast",
        titel: "Nous reprenons, mesurons à nouveau et remettons le rapport",
        tekst:
          "C’est la mesure finale qui décide si c’est sec, pas le calendrier. Nous comparons avec un endroit sec dans la même habitation, reprenons les appareils et vous remettons les valeurs mesurées au départ et à la fin. Un rapport d’humidité signé pour votre dossier d’assurance est disponible en option.",
      },
    ],
    carrouselLabel: "Notre méthode en cas de dégâts des eaux",

    refKick: "Sur le terrain",
    refH2: "Des dégâts des eaux que nous avons déjà séchés.",
    refLede:
      "Trois dossiers avec les photos du chantier lui-même : ce qui s’était passé, les appareils que nous avons placés et la durée du séchage.",
    refAlle: "Voir tous les projets de dégâts des eaux",
    refNote: ({ lp }) => (
      <>
        <b>En cas de dégâts des eaux, nous intervenons dans toute la Belgique.</b> Depuis notre
        entrepôt d’Aartselaar, nous sommes le plus rapidement sur place dans{" "}
        <Link to={lp("/bouwdroger-huren-antwerpen")}>la province d’Anvers</Link>, en{" "}
        <Link to={lp("/bouwdroger-huren-oost-vlaanderen")}>Flandre orientale</Link> et dans le{" "}
        <Link to={lp("/bouwdroger-huren-vlaams-brabant")}>Brabant flamand</Link> ; plus loin, nous
        planifions le trajet, mais nous livrons tout autant. Vous savez déjà ce qu’il vous faut ? Le{" "}
        <Link to={lp("/verhuur/calculator")}>calculateur de séchage</Link> compose le pack tout de
        suite.
      </>
    ),

    faqTitel: "Ce que les personnes touchées par un dégât des eaux nous demandent.",
    faqs: (c) => [
      {
        q: "Dans quel délai faut-il commencer à sécher après un dégât des eaux ?",
        a: "Dans les 24 à 48 heures. Au-delà, les moisissures se forment et l’humidité pénètre plus profondément dans la chape, l’isolation et le plafonnage. C’est pourquoi, en cas de dégâts des eaux, nous livrons encore le jour même.",
      },
      {
        q: "Combien de temps dure le séchage après une fuite ou une inondation ?",
        a: `Cela varie fortement selon la situation. Un carrelage mouillé sur béton plein ou une cloison en plâtre qui a pris l’eau est souvent sec en quelques jours à une semaine. Si l’eau est dans la chape, cela monte à environ deux semaines, et si elle s’est infiltrée dans l’isolation sous un sol flottant, il faut généralement trois semaines ou plus. Ce qui compte, c’est combien de temps l’eau est restée, jusqu’où elle a pénétré et la température de la pièce.${
          c.termijn
            ? ` Notre pack dégâts des eaux est donc prévu avec une durée de location de ${c.termijn} : c’est la limite supérieure sur laquelle nous planifions, pas le temps dont vos dégâts ont besoin.`
            : ""
        } Si c’est sec plus tôt, nous reprenons plus tôt. C’est la mesure d’humidité au départ et à la fin qui décide, pas le calendrier.`,
      },
      {
        q: "Mon assurance paie-t-elle la location d’un déshumidificateur de chantier ?",
        a: `Cela dépend de votre police et de la cause des dégâts. Pour un sinistre couvert, les frais de séchage sont souvent repris dans le dossier, mais posez la question à votre assureur ou courtier avant de décider. Nous vous remettons une facture à votre nom et les mesures au départ et à la fin ; un rapport d’humidité signé est disponible en option${c.rapportPrijs}.`,
      },
      {
        q: "Dois-je attendre l’expert de l’assurance avant de commencer à sécher ?",
        a: "Non, et ce n’est généralement pas non plus l’intention. Votre police attend de vous que vous limitiez les dégâts, et commencer rapidement à sécher en fait partie. Ce que vous faites bien d’abord : photographier et filmer les dégâts avant de ranger, et ne rien jeter avant que votre assureur ne vous y autorise. Mentionnez dans la déclaration que vous lancez un séchage ; les valeurs mesurées et la facture que vous recevez de notre part rejoignent ensuite le dossier.",
      },
      {
        q: "De combien d’appareils ai-je besoin pour une cave inondée ?",
        a: "Pour une cave moyenne, un déshumidificateur avec un ventilateur suffit. S’il y a de l’eau dans plusieurs pièces ou si la pièce est froide, on ajoute un chauffage de chantier ou un déshumidificateur à adsorption. Appelez-nous avec les dimensions, nous ferons le calcul ensemble.",
      },
      {
        q: "Puis-je sécher alors qu’il reste de l’eau stagnante ?",
        a: "Non. Pompez ou aspirez d’abord l’eau stagnante. Un déshumidificateur de chantier retire l’humidité de l’air et des matériaux, pas une flaque. Dès que le sol n’a plus d’eau, nous installons les appareils.",
      },
      {
        q: "Faut-il retirer la chape après un dégât des eaux ?",
        a: "Pas toujours. Si l’eau s’est infiltrée dans l’isolation sous une chape flottante, un séchage ciblé avec un déshumidificateur à adsorption, qui insuffle de l’air sec par des tuyaux dans la composition du sol, permet parfois d’éviter la démolition. La réussite dépend du temps pendant lequel l’eau est restée et de la composition du sol. Nous préférons l’évaluer avec vous.",
      },
      {
        q: "Un déshumidificateur de chantier fonctionne-t-il dans une cave froide après une inondation ?",
        a: "De façon limitée. Sous 15 °C, un déshumidificateur à condensation perd beaucoup de rendement. Ajoutez un chauffage de chantier électrique, ou choisissez un déshumidificateur à adsorption : il perd beaucoup moins de capacité dans le froid.",
      },
    ],
    nuKick: "Appelez maintenant",
    nuH3: "Plus vite nous sommes sur place, moins il faudra démolir.",
    nuP: "Décrivez brièvement ce qui s’est passé et la taille de la pièce. Nous vous disons tout de suite quels appareils il faut et quand nous pouvons livrer : en cas de dégâts des eaux, aujourd’hui encore.",
    nuAlt: "Technicien Vernast près de la camionnette avec un déshumidificateur de chantier",

    contactKicker: "Signaler un dégât des eaux",
    contactTitel: "Décrivez votre situation, nous vous rappelons.",
    contactLede:
      "En cas de dégâts des eaux, chaque heure compte. Vous préférez appeler tout de suite ? N’hésitez pas, nous intervenons encore aujourd’hui. Via ce formulaire, vous recevez une réponse dans un délai d’un jour ouvrable.",
    contactPlaceholder:
      "P. ex. cave de 40 m² inondée après une rupture de conduite, l’eau est partie, la chape et le bas des murs sont mouillés.",

    urgTitel: "Dégât des eaux ? Appelez maintenant",
    urgBelAria: "Appeler le",
    urgWhatsApp: "Contactez-nous sur WhatsApp",
  },

  en: {
    schemaNaam: "Drying after water damage",
    schemaBeschrijving:
      "Fast drying of floors, walls and insulation after a water leak or flood, with construction dehumidifiers and fans delivered within 24 hours.",
    schemaType: "Water damage restoration",
    kruimelHome: "Home",
    kruimelPagina: "Water damage",

    pulse: "Emergency delivery · call us now",
    h1: "Drying water damage. Delivered today, not next week.",
    heroP:
      "A burst pipe, a flooded basement, a bathroom that leaked into the room below: from the moment the water is gone, the clock is ticking. Mould starts within two days. For water damage we deliver the same day, take a moisture reading at the start and give you an invoice in your name for your insurance claim.",
    bel: "Call",
    aanvraag: "Send a request",
    heroAlt: "Construction dehumidifier and fan at work in a room after water damage",
    badgeTitel: "24 to 48 hours",
    badgeSub: "after that, mould sets in",
    trust: ["Same-day delivery", "Invoice for your insurer", "Always reachable", "Moisture reading before and after"],

    eersteKick: "Do this first",
    eersteH2: "What to do in the first 48 hours.",
    eersteLede:
      "After a leak or flood, water quickly soaks in deeper: first into the screed and the bottom of the walls, then into insulation and plasterwork. After a day or two, mould gets a foothold on damp material. The sooner you remove the water and start drying, the less has to be ripped out.",
    eersteUren: [
      {
        title: "Safety first",
        desc: "Switch off the power in the wet areas before you step in, and never put electrical appliances in standing water.",
      },
      {
        title: "Stop the source",
        desc: "Turn off the main water valve if a pipe is leaking and have the leak repaired. As long as water keeps coming in, drying makes little sense.",
      },
      {
        title: "Record the damage",
        desc: "Take photos and video of the water, the floor, the walls and damaged belongings before you clear up. Don't throw anything away until your insurer says you can.",
      },
      {
        title: "Remove standing water",
        desc: "Pump or vacuum up the water. A construction dehumidifier takes moisture out of the air and out of materials, not out of a puddle on the floor.",
      },
      {
        title: "Clear out wet materials",
        desc: "Carpet, underlay, cardboard boxes and loose furniture hold on to water and go mouldy fast. Move them out of the room so the air can reach the floor and walls.",
      },
      {
        title: "Start drying and measure",
        desc: "Dehumidifier and fan in place, windows and doors shut. A reading at the start gives the baseline; the reading at the end shows that it is dry.",
      },
    ],

    soortenKick: "What kind of damage do you have?",
    soortenH2: "Not all water damage dries equally fast.",
    soortenLede:
      "Where the water ended up decides everything: the approach, how long it takes and whether anything has to be ripped out. A wet tiled floor on solid concrete is often done in days; water that ran into the insulation under a floating screed takes weeks, and a dehumidifier in the room won't get it out. If you recognise your situation below, you'll know straight away what to expect.",
    schadetypes: [
      {
        label: "Most common",
        titel: "Burst or leaking pipe",
        tekst:
          "A fitting that comes loose, a pipe that freezes, a leak behind a wall that went unnoticed for weeks. The water takes the shortest route down and soaks into the screed, the bottom of the walls and the plasterwork. Often the visible patch is only a fraction of the wet area.",
        aanpak:
          "Have the leak repaired first, then dry. We measure how far the moisture has spread and place the machines on the wettest zone, not where you saw the leak.",
        fotoAlt: "Wet wall below a leaking pipe in a home",
      },
      {
        label: "Most urgent",
        titel: "Flooded basement or garage",
        tekst:
          "After a heavy downpour, a sewer backflow or a broken pump. Basements are cold and poorly ventilated, so the moisture lingers and mould gets a chance sooner than upstairs. Stored goods, cardboard and textiles soak up water and become a source of moisture themselves.",
        aanpak:
          "Standing water out first, wet belongings out. In a cold basement we add a site heater or a desiccant dehumidifier, because a condensation dehumidifier loses much of its efficiency below 15 °C.",
        fotoAlt: "Flooded basement with a tide mark on the wall and a wet floor",
      },
      {
        label: "Hardest to spot",
        titel: "Water in the floor build-up or insulation",
        tekst:
          "With a floating screed there is insulation under the floor. If water runs into it, it is out of reach of the air in the room: the surface feels dry after a week while the layers below stay wet. Months later the stains, the smell or the lifting parquet show up anyway.",
        aanpak:
          "This is the case we do targeted drying for: dry air is blown through small openings and hoses straight into the floor build-up. It often makes the difference between drying and ripping out.",
        fotoAlt: "Targeted drying of wet floor insulation through air hoses",
      },
      {
        label: "From above",
        titel: "Leaking bathroom, roof or rain penetration",
        tekst:
          "A joint that is no longer watertight, a blocked gutter, a storm driving water through a façade. The moisture comes from above and spreads across the ceiling and the top of the walls, sometimes in a different room from where the leak is.",
        aanpak:
          "Seal the source first, then dry from the highest wet point. Ceilings and plasterboard walls release their moisture readily; the masonry behind them needs more time.",
        fotoAlt: "Water damage on the ceiling and upper wall from a leak above",
      },
    ],
    aanpakLabel: "Our approach: ",
    elkUur: (
      <>
        <b>Why every hour counts.</b> Water damage doesn't get worse gradually, but in jumps. On damp
        material, mould takes hold after 24 to 48 hours, and from then on drying is no longer
        enough: the mould has to be removed as well. The second threshold is the moment the moisture
        reaches the floor build-up or the insulation. Whatever is dry before then usually doesn't
        need to be ripped out.
      </>
    ),

    dossierKick: "Your claim",
    dossierH2: "Water damage and your insurance.",
    dossierP1:
      "Water damage is often covered by your home's fire insurance, but whether and how much is reimbursed depends on your policy and on the cause. Ask your insurer or broker as early as possible, preferably before you incur major costs.",
    dossierP2:
      "What an insurer usually wants to see: a claim filed in time, photos of the damage, the invoices for the work you had done, and proof that you limited the damage. Drying quickly is part of that last point. Alongside you can see what the report you get from us looks like: the readings at the start and at handover, photos of the situation as we found it, and our findings on where the moisture was.",
    dos: {
      soort: "Technical moisture report",
      titel: "Water damage drying file",
      ruimteL: "Room",
      ruimte: "Basement 42 m²",
      oorzaakL: "Cause",
      oorzaak: "Burst pipe",
      techniekerL: "Technician",
      dossierL: "File",
      vaststelling: "On-site findings",
      foto: "Photo report",
      metingen: "Readings at start",
      chape: "Screed",
      oppervlak: "Surface",
      rvLucht: "Air RH",
      aanpak: "Findings and approach",
      conclusieL: "Conclusion",
      conclusie: "Water in the floor insulation. Targeted drying with a desiccant dehumidifier; no ripping out needed.",
      stempel1: "Moisture",
      stempel2: "measured",
    },
    dosBijschrift:
      "Example of the report you receive at handover. The values above are for illustration only.",
    krijgtKick: "What you get from us",
    krijgtH3: "Everything that belongs in a claim file, without you having to ask.",
    krijgtP: (c) =>
      `An invoice in your name, the moisture reading at the start and at handover, and photos of the situation as we found it. A signed moisture report with all readings is available as an option${c.rapportPrijs}.`,
    krijgtAlt: "Vernast technician noting the readings for the claim file",

    techKick: "The technique",
    techH2: "Is the moisture in the room, or in the floor?",
    techLede:
      "With water damage that is the only question that matters, because each answer calls for a different machine. If the moisture is in the air and the surfaces of the room, a condensation dehumidifier takes it out. If it is in the floor build-up, the insulation or behind a wall, the air in the room will never reach it.",
    techP1:
      "With a floating screed there is insulation under the floor. If water ran into it, the surface feels dry after a week while the layers below stay wet; the stains, the smell or the lifting parquet still appear months later.",
    techP2: ({ lp }) => (
      <>
        That is why we drill small openings in the right places and blow dry air through hoses
        straight into the floor build-up, the cavity or the wall. That is what a{" "}
        <Link to={lp(toestelPad("revolution"))}>desiccant dehumidifier</Link> can do and an ordinary
        dehumidifier can't, and below 15 °C it loses hardly any capacity. How the two techniques
        differ is explained in the guide{" "}
        <Link to={lp("/gids/condensdroger-of-adsorptiedroger")}>
          condensation or desiccant dehumidifier
        </Link>
        . We measure whether the structure itself is dry, not just the air above it; with a covered
        claim, that is often the difference between a drying file and a demolition file.
      </>
    ),
    techChips: ["Floor build-up and insulation", "Cavity and lining wall", "Cold basements", "Wooden floors"],
    techAlt: "Vernast Revolution desiccant dehumidifier with hose connection for targeted drying",
    kaarten: [
      {
        titel: "Desiccant dehumidifier",
        p1: "For moisture that is out of reach: under a floating screed, in insulation, behind a lining wall or in a wooden floor. Blows dry air through hoses straight to the spot itself.",
        p2: "Also the choice for a cold basement: it loses hardly any capacity below 15 °C.",
      },
      {
        titel: "Condensation dehumidifier",
        p1: "For the room itself: it draws in the damp air, cools it so the water condenses, and blows dry air back out. In a heated home that works well.",
        p2: "Below about 15 °C its efficiency drops sharply; then you add a site heater.",
      },
      {
        titel: "And always a fan",
        p1: "Water damage always needs air movement: without a fan it is mainly the air that dries, not the floor and the walls.",
        p2: "A radial fan blows low across a wet floor; an axial fan keeps the whole room moving.",
      },
    ],
    techNote: (
      <>
        <b>We decide on the combination on site.</b> So you don't have to choose yourself: we
        measure where the moisture is and how cold the room is, and put the set-up together
        accordingly. If in doubt, we come and take a look before anything is delivered.
      </>
    ),

    werkKick: "How we work",
    werkH2: "From the first wet patch to the moisture report.",
    werkLede:
      "A water damage case doesn't start with us but with you, the moment you see the water. This is the full process, showing whose turn it is at each step. It moves on by itself; use the arrows or the numbers to go forward or back yourself.",
    verloop: [
      {
        wie: "U",
        titel: "You notice the damage",
        tekst:
          "A wet floor, a damp patch on the ceiling, a musty smell in the basement. Switch off the power in the wet area, turn off the main valve if it's a pipe, and take photos before you clear anything up. Your insurer will need those photos later.",
      },
      {
        wie: "U",
        titel: "You report it to your insurer",
        tekst:
          "File the claim within the period set in your policy. Ask straight away whether drying costs can be included in the claim and whether an expert will visit. You don't have to wait for that visit to start drying; limiting the damage is exactly what an insurer expects of you.",
      },
      {
        wie: "U",
        titel: "You get in touch with us",
        tekst:
          "By phone or using the form below. Describe what happened, how big the room is and whether the water has already gone. With water damage we call back as soon as possible to see what can still be done today.",
      },
      {
        wie: "Vernast",
        titel: "We assess the problem and propose a solution",
        tekst:
          "Over the phone or on site, we determine where the moisture is and how deep it has penetrated. That tells us which machines are needed: a condensation dehumidifier for the room, a desiccant dehumidifier if the moisture is in the floor build-up, a fan and, when it's cold, a site heater.",
      },
      {
        wie: "Vernast",
        titel: "We visit, measure and record everything",
        tekst:
          "Our technician measures the moisture content of the floor and walls, photographs the damage and logs those readings digitally in your file. That is your starting point, and the document an insurer usually wants to see.",
      },
      {
        wie: "Vernast",
        titel: "We install the machines and start drying",
        tekst:
          "We spread the machines across the wet zones, connect the condensate drain so you don't have to empty anything, and set the target humidity. You keep windows and doors shut and move nothing; the rest happens by itself, day and night.",
      },
      {
        wie: "Vernast",
        titel: "We collect, measure again and deliver the report",
        tekst:
          "The final reading decides whether it's dry, not the calendar. We compare with a dry spot in the same home, collect the machines and give you the readings from the start and the end. A signed moisture report for your insurance claim is available as an option.",
      },
    ],
    carrouselLabel: "How we work with water damage",

    refKick: "From the field",
    refH2: "Water damage we've dried before.",
    refLede:
      "Three cases with photos from the site itself: what had happened, which machines we installed and how long it took.",
    refAlle: "View all water damage projects",
    refNote: ({ lp }) => (
      <>
        <b>For water damage we cover all of Belgium.</b> From our warehouse in Aartselaar we are
        quickest to reach <Link to={lp("/bouwdroger-huren-antwerpen")}>the province of Antwerp</Link>,{" "}
        <Link to={lp("/bouwdroger-huren-oost-vlaanderen")}>East Flanders</Link> and{" "}
        <Link to={lp("/bouwdroger-huren-vlaams-brabant")}>Flemish Brabant</Link>; further afield we
        plan the trip in, but we deliver all the same. Already know what you need? The{" "}
        <Link to={lp("/verhuur/calculator")}>drying calculator</Link> puts the package together
        straight away.
      </>
    ),

    faqTitel: "What people with water damage ask us.",
    faqs: (c) => [
      {
        q: "How soon should I start drying after water damage?",
        a: "Within 24 to 48 hours. After that, mould starts to form and the moisture penetrates deeper into screed, insulation and plasterwork. That is why, for water damage, we deliver the same day.",
      },
      {
        q: "How long does drying take after a water leak or flood?",
        a: `That varies a lot from case to case. A wet tiled floor on solid concrete or a plasterboard wall that caught water is often dry in a few days to a week. If the water is in the screed, it can take up to about two weeks, and if it has run into the insulation under a floating floor, it usually takes three weeks or more. What matters is how long the water stood, how deep it soaked in and how warm the room is.${
          c.termijn
            ? ` That is why our water damage package is built around a hire period of ${c.termijn}: that is the upper limit we plan for, not the time your damage will need.`
            : ""
        } If it's dry sooner, we collect sooner. The moisture readings at the start and at handover decide, not the calendar.`,
      },
      {
        q: "Will my insurance pay for hiring a construction dehumidifier?",
        a: `That depends on your policy and on the cause of the damage. With a covered claim, drying costs are often included, but ask your insurer or broker before you decide. From us you get an invoice in your name and the readings at the start and at handover; a signed moisture report is available as an option${c.rapportPrijs}.`,
      },
      {
        q: "Do I have to wait for the insurance expert before I start drying?",
        a: "No, and usually that isn't the intention either. Your policy expects you to limit the damage, and starting to dry quickly is part of that. What you should do first: take photos and video of the damage before you clear up, and throw nothing away until your insurer says you can. Mention in your claim that you are starting a drying job; the readings and the invoice you get from us then go into the file.",
      },
      {
        q: "How many machines do I need for a flooded basement?",
        a: "For an average basement, one dehumidifier with a fan is enough. If there is water in several rooms or the space is cold, a site heater or a desiccant dehumidifier is added. Call us with the dimensions and we'll work it out together.",
      },
      {
        q: "Can I start drying while there is still standing water?",
        a: "No. Pump or vacuum up the standing water first. A construction dehumidifier takes moisture out of the air and out of materials, not out of a puddle. As soon as the floor is free of water, we install the machines.",
      },
      {
        q: "Does the screed have to come out after water damage?",
        a: "Not always. If water has run into the insulation under a floating screed, targeted drying with a desiccant dehumidifier, which blows dry air through hoses into the floor build-up, can sometimes avoid ripping it out. Whether that works depends on how long the water stood and on how the floor is built up. We prefer to assess that together with you.",
      },
      {
        q: "Does a construction dehumidifier work in a cold basement after a flood?",
        a: "Only to a limited extent. Below 15 °C a condensation dehumidifier loses much of its efficiency. Add an electric site heater, or choose a desiccant dehumidifier: it loses far less capacity in the cold.",
      },
    ],
    nuKick: "Call now",
    nuH3: "The sooner we're there, the less has to be ripped out.",
    nuP: "Briefly describe what happened and how big the room is. We'll tell you straight away which machines are needed and when we can deliver: for water damage, today.",
    nuAlt: "Vernast technician by the van with a construction dehumidifier",

    contactKicker: "Report water damage",
    contactTitel: "Describe your situation and we'll call you back.",
    contactLede:
      "With water damage, every hour counts. Would you rather call right away? Please do, and we'll head out today. Through this form you'll get an answer within one working day.",
    contactPlaceholder:
      "E.g. 40 m² basement flooded after a burst pipe, the water is gone, the screed and bottom of the walls are wet.",

    urgTitel: "Water damage? Call now",
    urgBelAria: "Call",
    urgWhatsApp: "Message us on WhatsApp",
  },
} satisfies Copy<WsTeksten>;
