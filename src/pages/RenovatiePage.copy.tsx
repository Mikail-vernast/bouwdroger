import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import type { Copy } from "@/i18n/useTaal";
import type { LeesGroep } from "@/components/VerderLezen";
import { toestelPad } from "@/data/verhuur";

/**
 * De teksten van /renovatie per taal. De Nederlandse staan er letterlijk zoals
 * ze op de pagina stonden. De volgorde van elke lijst is die van de pagina: de
 * iconen (en bij de oorzaken het verdict en het nummer in de doorsnede) hangen
 * er in RenovatiePage.tsx per index aan.
 */

interface Kaart {
  title: string;
  desc: string;
}

export interface RnTeksten {
  schemaNaam: string;
  schemaBeschrijving: string;
  schemaType: string;
  kruimelHome: string;
  kruimelPagina: string;

  heroKick: string;
  h1: string;
  heroP: string;
  cta: string;
  heroAlt: string;
  badgeSub: string;
  trust: [string, string, string, string];

  gevarenKick: string;
  gevarenH2: string;
  gevarenLede: string;
  gevaren: Kaart[];

  checkKick: string;
  checkH2: string;
  checkP1: string;
  checkP2: (lp: (p: string) => string) => ReactNode;
  checklist: string[];
  checkFoot: string;
  belOns: string;

  oorzKick: string;
  oorzH2: string;
  oorzLede: string;
  doorsnedeGrond: string;
  doorsnedeKelder: string;
  doorsnedeBijschrift: string;
  oorzaken: Kaart[];
  helptJa: string;
  helptNee: string;
  oorzNote: ReactNode;

  rvKick: string;
  rvH2: string;
  rvP1: string;
  rvP2: string;
  /** De chips; de prijs van het meetrapport komt uit de catalogus. */
  rvChips: (rapport: string) => string[];
  meterTitel: string;
  meterTeDroog: string;
  meterSchimmel: string;
  meterUitleg: string;

  schimmelAlt: string;
  schimmelKick: string;
  schimmelH2: string;
  schimmelP1: string;
  schimmelP2: (lp: (p: string) => string) => ReactNode;

  stapKick: string;
  stapH2: string;
  stapLede: string;
  stap: string;
  kelderStappen: Kaart[];

  pakKick: string;
  pakH2: string;
  pakLede: string;

  refKick: string;
  refH2: string;
  refLede: string;

  tipsKick: string;
  tipsH2: string;
  tipsLede: string;
  tips: Kaart[];

  faqTitel: string;
  faqs: { q: string; a: string }[];

  verderTitel: string;
  verderLezen: (lp: (p: string) => string) => LeesGroep[];
  slotKick: string;
  slotH3: string;
  slotP: string;
  slotAlt: string;

  contactKicker: string;
  contactTitel: string;
  contactLede: string;
  contactOnderwerpen: string[];
  contactPlaceholder: string;
}

export const RN_COPY = {
  nl: {
    schemaNaam: "Kelder- en renovatiedroging",
    schemaBeschrijving:
      "Drogen van vochtige kelders, muren en renovatieruimtes met ontvochtigers en bouwkachels, inclusief vochtmeting voor en na.",
    schemaType: "Bouwdroging",
    kruimelHome: "Home",
    kruimelPagina: "Renovatie",

    heroKick: "Renovatie & vochtige kelders",
    h1: "Een vochtige kelder of natte muren drogen, en ze droog houden.",
    heroP:
      "Muffe geur, donkere plekken onderaan de muur, schimmel in de hoek: vocht trekt niet weg omdat u het raam openzet. Een bouwdroger haalt het uit de lucht en daarmee uit muren en vloeren. En als er een blijvende oorzaak achter zit, leest u hieronder eerlijk welke dat is en in welke volgorde u ze aanpakt.",
    cta: "Bereken uw droogpakket",
    heroAlt: "Ontvochtiger in een vochtige kelder tijdens een renovatie",
    badgeSub: "de richtwaarde waar we naartoe drogen",
    trust: ["Vochtmeting voor én na", "Binnen 24 uur geleverd", "Levering en plaatsing inbegrepen", "Advies vóór u huurt"],

    gevarenKick: "Waarom het haast heeft",
    gevarenH2: "Vocht wacht niet tot u tijd hebt.",
    gevarenLede:
      "Een vochtige ruimte wordt niet langzaam een beetje erger. Schimmel verdubbelt in dagen, nat hout en natte isolatie zijn onomkeerbaar beschadigd, en wat begint als een geur eindigt als een post in een verkoopakte.",
    gevaren: [
      {
        title: "Schimmelsporen in de lucht",
        desc: "Schimmel die u ziet is maar een deel; de sporen hangen in de lucht die u inademt. Ze geven luchtwegklachten, hoofdpijn en allergische reacties, en zijn het meest vervelend voor kinderen, ouderen en mensen met asthma.",
      },
      {
        title: "Schade aan de constructie",
        desc: "Vocht tast metselwerk, houten balken, plinten en isolatie aan. Isolatie die nat is geweest, isoleert niet meer, en hout dat maanden vochtig blijft, rot van binnenuit, precies waar u er niet bij kunt.",
      },
      {
        title: "Een woning die minder opbrengt",
        desc: "Zichtbare vochtplekken, een muffe kelder of een vochtkeuring die vragen oproept: elke koper rekent dat in mindering. Drogen kost een fractie van wat de prijsonderhandeling u kost.",
      },
    ],

    checkKick: "Herkent u dit?",
    checkH2: "Vijf signalen dat drogen zin heeft.",
    checkP1:
      "Eén van deze vijf is genoeg om te laten meten. Bij twee of meer is het zelden toeval: er zit ergens vocht dat niet weg kan. Bel ons, dan overlopen we uw situatie voor u iets huurt, ook als het antwoord is dat u bij ons niets nodig hebt.",
    checkP2: (lp) => (
      <>
        Twijfelt u welk toestel bij uw volume past? De{" "}
        <Link to={lp("/verhuur/calculator")}>droogcalculator</Link> rekent het uit op oppervlakte en
        plafondhoogte, en <Link to={lp("/hoe-drogen-werkt")}>hoe drogen werkt</Link> legt uit waarom
        de combinatie van warmte, luchtbeweging en ontvochtiging het werk doet.
      </>
    ),
    checklist: [
      "Een muffe, kelderachtige geur die niet weggaat",
      "Donkere vochtplekken op muren of plafond",
      "Zwarte of groene schimmelvlekken, vaak in hoeken",
      "Condens op ramen, koude muren of leidingen",
      "Vocht na een verbouwing, een lek of een overstroming",
    ],
    checkFoot: "Herkent u er één of meer? Eén telefoontje volstaat voor advies.",
    belOns: "Bel ons",

    oorzKick: "Oorzaak of symptoom",
    oorzH2: "Een bouwdroger lost vocht op. Niet altijd de reden dat het er is.",
    oorzLede:
      "Een bouwdroger haalt vocht uit de lucht, en daarmee ook uit muren en vloeren. Komt dat vocht steeds opnieuw binnen, dan droogt u tegen de stroom in: u huurt dan een toestel dat werkt zolang het er staat. Kijk daarom eerst waar het vandaan komt. Bij drie van deze vijf oorzaken is drogen het antwoord; bij twee komt er eerst iets anders.",
    doorsnedeGrond: "Grond",
    doorsnedeKelder: "Kelder",
    doorsnedeBijschrift:
      "Doorsnede van een keldermuur: links de grond, rechts de ruimte met de droger erin. De genummerde plekken zijn de vijf plaatsen waar vocht binnenkomt, en komen overeen met de vijf oorzaken in de lijst.",
    oorzaken: [
      {
        title: "Condensatie",
        desc: "Warme, vochtige lucht slaat neer op koude muren, vloeren en ramen. Typisch in kelders en slecht verluchte ruimtes, vooral in de winter. Een bouwdroger haalt de luchtvochtigheid omlaag; blijvend oplossen vraagt betere ventilatie of isolatie.",
      },
      {
        title: "Bouwvocht na renovatie",
        desc: "Nieuw pleisterwerk, chape of metselwerk brengt honderden liters water mee in een ruimte die vaak slecht verlucht is. Dat is precies waarvoor een bouwdroger gemaakt is.",
      },
      {
        title: "Na een lek of waterschade",
        desc: "Is het lek hersteld, dan droogt een bouwdroger met ventilator de muren en de vloer weer uit. Zolang het lek blijft, blijft het vocht terugkomen.",
      },
      {
        title: "Opstijgend vocht",
        desc: "Grondwater dat via het metselwerk omhoog trekt: vochtplekken en zoutkorsten onderaan de muur, tot een meter hoog of meer. Een bouwdroger droogt de oppervlakte, maar het vocht blijft opstijgen zolang de muur niet behandeld wordt.",
      },
      {
        title: "Doorslaand vocht",
        desc: "Regen- of grondwater dat door een gevel of een keldermuur dringt, vaak zichtbaar na een regenperiode. Ook hier is drogen alleen tijdelijk: de muur of de kelderwand moet waterdicht gemaakt worden.",
      },
    ],
    helptJa: "Een bouwdroger helpt",
    helptNee: "Eerst de oorzaak",
    oorzNote: (
      <>
        <b>Zit de oorzaak in de muur zelf?</b> Opstijgend vocht, een lekkende keldermuur of een
        kelder die waterdicht moet: daarvoor kunt u terecht bij{" "}
        <a href="https://vernast-vochtbestrijding.be/">Vernast Vochtbestrijding</a>, onze
        zusterfirma. Is de oorzaak weg, dan droogt een bouwdroger het restvocht uit de muur, in die
        volgorde en niet omgekeerd.
      </>
    ),

    rvKick: "De richtwaarde",
    rvH2: "Mik op 40 à 60 % relatieve luchtvochtigheid.",
    rvP1:
      "De relatieve luchtvochtigheid zegt hoeveel vocht de lucht bevat tegenover wat ze bij die temperatuur maximaal kan dragen. Voor een woning geldt 40 tot 60 % als richtwaarde. Blijft ze langdurig hoger, dan krijgt schimmel kans, zeker op koude muren. Ver daaronder wordt de lucht onaangenaam droog.",
    rvP2:
      "In een kelder speelt de temperatuur mee: koude lucht zit sneller verzadigd, en een koude muur trekt het vocht naar zich toe. Daarom kan een kelder muf ruiken terwijl de rest van het huis in orde is. Onze ontvochtigers hebben een ingebouwde hygrostaat: ze schakelen terug zodra de ingestelde streefwaarde bereikt is, in plaats van door te draaien tot de lucht kurkdroog staat.",
    /* Het Nederlands blijft zoals het altijd stond; `rapport` wordt hier niet gebruikt. */
    rvChips: () => ["Hygrometer vanaf € 15", "Meting voor én na inbegrepen", "Meetrapport € 49"],
    meterTitel: "Relatieve luchtvochtigheid",
    meterTeDroog: "20 % · te droog",
    meterSchimmel: "80 % · schimmel",
    meterUitleg:
      "Onder 40 % wordt de lucht onaangenaam en krimpt hout. Boven 60 % begint schimmel aan een koude muur. Daartussen zit de zone waar we een kelder naartoe drogen en waar u hem daarna houdt.",

    schimmelAlt: "Schimmelvorming op een vochtige binnenmuur",
    schimmelKick: "In deze volgorde",
    schimmelH2: "Eerst drogen, dan saneren.",
    schimmelP1:
      "Schimmel heeft vocht nodig. Drogen neemt die voedingsbodem weg, zodat hij niet verder groeit. Maar de schimmel die er al zit, verdwijnt er niet mee. Die moet u na het drogen verwijderen, en bij grote oppervlakken laat u dat beter professioneel doen.",
    schimmelP2: (lp) => (
      <>
        Doe het in die volgorde. Saneren op een natte muur heeft weinig zin: de schimmel komt terug
        zolang het vocht blijft, en u hebt dan twee keer betaald voor hetzelfde werk. Voor een
        hardnekkig geval of een muffe geur die na het drogen blijft hangen, bestaat er nog een stap:
        een <Link to={lp("/ozonbehandeling")}>ozonbehandeling</Link> pakt de sporen en de geur aan in
        de ruimte zelf.
      </>
    ),

    stapKick: "Stap voor stap",
    stapH2: "Een vochtige kelder drogen: zo pakt u het aan.",
    stapLede: "Zes stappen, in deze volgorde. Wie stap twee overslaat, herhaalt stap vier elk jaar.",
    stap: "Stap",
    kelderStappen: [
      {
        title: "Meet eerst",
        desc: "Een eenvoudige hygrometer toont de relatieve luchtvochtigheid en de temperatuur. Noteer ze een paar dagen, dan weet u waar u vertrekt, en kunt u achteraf aantonen dat het gelukt is.",
      },
      {
        title: "Zoek de oorzaak",
        desc: "Condensatie, een lek, of vocht van buitenaf? Zie de vijf oorzaken hierboven. Bij opstijgend of doorslaand vocht laat u eerst de muur behandelen.",
      },
      {
        title: "Maak ruimte",
        desc: "Zet dozen, kasten en textiel weg van de muren. Achter een kast tegen een koude muur is het altijd het vochtigst, en daar begint de schimmel.",
      },
      {
        title: "Plaats de droger centraal",
        desc: "Midden in de ruimte, deuren en kelderramen dicht: u droogt de kelder, niet de tuin. Met een condensslang naar een afvoer hoeft u geen reservoir te legen.",
      },
      {
        title: "Warm bij onder 15 °C",
        desc: "Een koude kelder droogt traag met een condensdroger: koude lucht houdt nu eenmaal minder vocht vast. Een bouwkachel brengt de temperatuur op peil, of u kiest een adsorptiedroger.",
      },
      {
        title: "Houd het daarna droog",
        desc: "Is de ruimte droog, verlucht dan regelmatig en houd de luchtvochtigheid in het oog. Anders staat u er over een paar maanden opnieuw.",
      },
    ],

    pakKick: "Welk toestel",
    pakH2: "Drie ontvochtigers, één per volume.",
    pakLede:
      "Niet het zwaarste toestel, maar het toestel dat bij uw ruimte past. Een te grote droger in een kleine kelder droogt niet sneller, hij verbruikt alleen meer stroom.",

    refKick: "Uit de praktijk",
    refH2: "Kelders die we droog kregen.",
    refLede:
      "Drie werven met hun meetwaarden, hun duur en de toestellen die er stonden. Lijkt er één op uw situatie, dan weet u meteen wat u mag verwachten.",

    tipsKick: "Na de ophaling",
    tipsH2: "Vocht voorgoed aanpakken, niet elk jaar opnieuw.",
    tipsLede:
      "De droger gaat weer mee. Wat daarna gebeurt, bepaalt of u ons over een jaar opnieuw belt. Drie dingen die het verschil maken.",
    tips: [
      {
        title: "Vind de oorzaak",
        desc: "Een bouwdroger lost het symptoom op. Laat de oorzaak onderzoeken, anders droogt u elk jaar opnieuw dezelfde muur.",
      },
      {
        title: "Verlucht elke dag",
        desc: "Tien minuten dwarsventilatie doet meer dan een raam dat de hele dag op een kier staat. Zeker in een kelder of berging.",
      },
      {
        title: "Hou de hygrometer in het oog",
        desc: "Blijft de luchtvochtigheid boven 60 % hangen, dan is het vocht aan het terugkomen. U ziet het aan de meter voor u het aan de muur ziet.",
      },
    ],

    faqTitel: "Wat klanten met een vochtige kelder ons vragen.",
    faqs: [
      { q: "Hoe lang duurt het drogen van een vochtige kelder?", a: "Afhankelijk van de situatie 2 tot 6 weken. Onze vochtmeting bevestigt wanneer het klaar is." },
      { q: "Werkt een bouwdroger bij condensatieproblemen?", a: "Ja, zeker in combinatie met goede ventilatie." },
      {
        q: "Helpt een bouwdroger tegen opstijgend vocht?",
        a: "Niet blijvend. Een bouwdroger droogt de lucht en de oppervlakte van de muur, maar het grondwater blijft via het metselwerk omhoog trekken zolang de muur niet behandeld is. Laat eerst de oorzaak aanpakken, bijvoorbeeld met een injectie tegen opstijgend vocht; daarna droogt een bouwdroger het restvocht uit de muur.",
      },
      {
        q: "Wat is een goede luchtvochtigheid in huis?",
        a: "Als richtwaarde houdt u de relatieve luchtvochtigheid tussen 40 en 60 %. Blijft ze langdurig daarboven, zeker in een koude kelder, dan krijgt schimmel kans. Ver daaronder wordt de lucht onaangenaam droog. Een eenvoudige hygrometer toont waar u zit.",
      },
      {
        q: "Hoe weet ik of het vocht van condensatie komt of van buiten?",
        a: "Condensatie zit vooral op de koudste plekken: hoeken, achter kasten, rond ramen. Het verergert in de winter en bij weinig verluchting. Opstijgend vocht zie je onderaan de muur, vaak met zoutkorsten. Doorslaand vocht verschijnt na regen, aan de kant van de gevel of de grond. Twijfelt u, laat het dan ter plaatse bekijken.",
      },
      {
        q: "Haalt een bouwdroger schimmel weg?",
        a: "Nee. Drogen neemt de voedingsbodem weg, zodat schimmel niet verder groeit, maar de schimmel zelf moet u nog verwijderen. Bij grote oppervlakken of schimmel die terugkomt, is een professionele sanering de veilige keuze.",
      },
      { q: "Is een bouwdroger veilig bij kinderen en huisdieren?", a: "Ja, volledig veilig. Houd de wateropvang dagelijks in het oog." },
    ],

    verderTitel: "Verder lezen over vochtige kelders",
    verderLezen: (lp) => [
      {
        kop: "Toestellen voor kelders en vochtige ruimtes",
        links: [
          { to: lp(toestelPad("ttk170")), toestel: "ttk170", label: "Boost", sub: "Compact, voor één kamer of een kleine kelder." },
          { to: lp(toestelPad("ttk650")), toestel: "ttk650", label: "Ultimate", sub: "Voor ruime kelders en veel vocht." },
          { to: lp(toestelPad("teddh20")), toestel: "teddh20", label: "Bouwkachel voor een koude kelder of garage", sub: "Brengt de ruimte op werkingstemperatuur." },
        ],
      },
      {
        kop: "Eerst begrijpen, dan huren",
        links: [
          { to: lp("/hoe-drogen-werkt"), label: "Hoe drogen werkt: warmte, lucht en ontvochtiging" },
          { to: lp("/gids/condensdroger-of-adsorptiedroger"), label: "Gids: condensdroger of adsorptiedroger in een koude kelder?" },
          { to: lp("/gids/stroomverbruik-bouwdroger"), label: "Gids: wat verbruikt een bouwdroger aan stroom?" },
          { to: lp("/waarom-bouwdroging"), label: "Waarom bouwdroging en niet gewoon wachten" },
          { to: lp("/ozonbehandeling"), label: "Muffe geur die blijft hangen: ozonbehandeling" },
        ],
      },
      {
        kop: "Plannen en verder lezen",
        links: [
          { to: lp("/verhuur/calculator"), label: "Bereken een droogpakket op oppervlakte" },
          { to: lp("/waterschade"), label: "Kelder ondergelopen? Waterschade drogen" },
          { to: lp("/bouwdroger-huren-west-vlaanderen"), label: "Bouwdroger huren in West-Vlaanderen" },
          { to: lp("/bouwdroger-huren-antwerpen"), label: "Bouwdroger huren in de provincie Antwerpen" },
        ],
      },
    ],
    slotKick: "Pak het nu aan",
    slotH3: "Hoe langer het vocht er zit, hoe meer er droog gemaakt moet worden.",
    slotP:
      "Laat uw situatie bekijken voor u iets huurt. Wij meten, rekenen het pakket uit en leveren binnen 24 uur. En als drogen niet het antwoord is, zeggen we dat ook.",
    slotAlt: "Vernast specialist meet het vochtgehalte van een muur",

    contactKicker: "Een vraag over uw kelder?",
    contactTitel: "Niet zeker of drogen bij u de oplossing is?",
    contactLede:
      "Beschrijf wat u ziet en ruikt, dan zeggen wij welke oorzaak het waarschijnlijk is en of een bouwdroger helpt. Ook als het antwoord is dat u bij ons niets nodig hebt.",
    contactOnderwerpen: [
      "Vochtige kelder of berging",
      "Schimmel op muren of plafond",
      "Vocht na een verbouwing",
      "Opstijgend of doorslaand vocht",
      "Iets anders",
    ],
    contactPlaceholder:
      "Bv. kelder van 25 m², muffe geur en donkere plekken onderaan de muur, vooral in de winter.",
  },

  fr: {
    schemaNaam: "Séchage de caves et de rénovations",
    schemaBeschrijving:
      "Séchage de caves, murs et pièces en rénovation humides avec déshumidificateurs et chauffages de chantier, mesure d’humidité avant et après comprise.",
    schemaType: "Séchage de chantier",
    kruimelHome: "Accueil",
    kruimelPagina: "Rénovation",

    heroKick: "Rénovation & caves humides",
    h1: "Sécher une cave humide ou des murs mouillés, et les garder secs.",
    heroP:
      "Odeur de moisi, taches sombres au bas du mur, moisissures dans le coin : l’humidité ne part pas parce que vous ouvrez la fenêtre. Un déshumidificateur de chantier la retire de l’air, et donc des murs et des sols. Et si une cause durable se cache derrière, vous lisez ci-dessous, en toute franchise, laquelle et dans quel ordre vous y attaquer.",
    cta: "Calculez votre pack de séchage",
    heroAlt: "Déshumidificateur dans une cave humide pendant une rénovation",
    badgeSub: "la valeur cible vers laquelle nous séchons",
    trust: [
      "Mesure d’humidité avant et après",
      "Livré dans les 24 heures",
      "Livraison et installation comprises",
      "Conseil avant de louer",
    ],

    gevarenKick: "Pourquoi c’est urgent",
    gevarenH2: "L’humidité n’attend pas que vous ayez le temps.",
    gevarenLede:
      "Une pièce humide ne s’aggrave pas lentement, petit à petit. Les moisissures doublent en quelques jours, le bois et l’isolation mouillés sont endommagés de façon irréversible, et ce qui commence par une odeur finit comme une ligne dans un acte de vente.",
    gevaren: [
      {
        title: "Des spores de moisissures dans l’air",
        desc: "Les moisissures que vous voyez ne sont qu’une partie du problème ; les spores flottent dans l’air que vous respirez. Elles provoquent des troubles respiratoires, des maux de tête et des réactions allergiques, et gênent surtout les enfants, les personnes âgées et les asthmatiques.",
      },
      {
        title: "Des dégâts à la construction",
        desc: "L’humidité attaque la maçonnerie, les poutres en bois, les plinthes et l’isolation. Une isolation qui a été mouillée n’isole plus, et un bois qui reste humide pendant des mois pourrit de l’intérieur, précisément là où vous ne pouvez pas y accéder.",
      },
      {
        title: "Une habitation qui perd de sa valeur",
        desc: "Des taches d’humidité visibles, une cave qui sent le moisi ou une expertise humidité qui soulève des questions : chaque acheteur le déduit de son offre. Sécher coûte une fraction de ce que vous coûte la négociation du prix.",
      },
    ],

    checkKick: "Vous reconnaissez ceci ?",
    checkH2: "Cinq signes qu’il est utile de sécher.",
    checkP1:
      "Un seul de ces cinq signes suffit pour faire mesurer. À partir de deux, c’est rarement un hasard : il y a quelque part de l’humidité qui ne peut pas s’échapper. Appelez-nous, nous passons votre situation en revue avant que vous ne louiez quoi que ce soit, même si la réponse est que vous n’avez besoin de rien chez nous.",
    checkP2: (lp) => (
      <>
        Vous hésitez sur l’appareil adapté à votre volume ? Le{" "}
        <Link to={lp("/verhuur/calculator")}>calculateur de séchage</Link> le détermine à partir de
        la surface et de la hauteur sous plafond, et la page{" "}
        <Link to={lp("/hoe-drogen-werkt")}>comment fonctionne le séchage</Link> explique pourquoi la
        combinaison de chaleur, de mouvement d’air et de déshumidification fait le travail.
      </>
    ),
    checklist: [
      "Une odeur de moisi, de cave, qui ne s’en va pas",
      "Des taches d’humidité sombres sur les murs ou le plafond",
      "Des taches de moisissure noires ou vertes, souvent dans les coins",
      "De la condensation sur les fenêtres, les murs froids ou les conduites",
      "De l’humidité après des travaux, une fuite ou une inondation",
    ],
    checkFoot: "Vous en reconnaissez un ou plusieurs ? Un coup de fil suffit pour un conseil.",
    belOns: "Appelez-nous",

    oorzKick: "Cause ou symptôme",
    oorzH2: "Un déshumidificateur élimine l’humidité. Pas toujours la raison de sa présence.",
    oorzLede:
      "Un déshumidificateur de chantier retire l’humidité de l’air, et donc aussi des murs et des sols. Si cette humidité revient sans cesse, vous séchez à contre-courant : vous louez alors un appareil qui fonctionne tant qu’il est là. Regardez donc d’abord d’où elle vient. Pour trois de ces cinq causes, sécher est la réponse ; pour deux, il faut d’abord autre chose.",
    doorsnedeGrond: "Sol",
    doorsnedeKelder: "Cave",
    doorsnedeBijschrift:
      "Coupe d’un mur de cave : à gauche la terre, à droite la pièce avec le déshumidificateur. Les points numérotés sont les cinq endroits par où l’humidité entre, et correspondent aux cinq causes de la liste.",
    oorzaken: [
      {
        title: "Condensation",
        desc: "L’air chaud et humide se dépose sur les murs, sols et fenêtres froids. Typique des caves et des pièces mal ventilées, surtout en hiver. Un déshumidificateur fait baisser l’humidité de l’air ; une solution durable demande une meilleure ventilation ou isolation.",
      },
      {
        title: "Humidité de construction après rénovation",
        desc: "Un nouveau plafonnage, une chape ou une maçonnerie apportent des centaines de litres d’eau dans une pièce souvent mal ventilée. C’est exactement ce pour quoi un déshumidificateur de chantier est conçu.",
      },
      {
        title: "Après une fuite ou un dégât des eaux",
        desc: "Une fois la fuite réparée, un déshumidificateur avec ventilateur assèche à nouveau les murs et le sol. Tant que la fuite persiste, l’humidité revient.",
      },
      {
        title: "Humidité ascensionnelle",
        desc: "De l’eau du sol qui remonte par la maçonnerie : taches d’humidité et efflorescences salines au bas du mur, jusqu’à un mètre de haut ou plus. Un déshumidificateur sèche la surface, mais l’humidité continue de remonter tant que le mur n’est pas traité.",
      },
      {
        title: "Infiltrations latérales",
        desc: "De l’eau de pluie ou du sol qui traverse une façade ou un mur de cave, souvent visible après une période de pluie. Ici aussi, sécher n’est que temporaire : le mur ou la paroi de la cave doit être rendu étanche.",
      },
    ],
    helptJa: "Un déshumidificateur aide",
    helptNee: "D’abord la cause",
    oorzNote: (
      <>
        <b>La cause se trouve dans le mur lui-même ?</b> Humidité ascensionnelle, mur de cave qui
        fuit ou cave à rendre étanche : pour cela, vous pouvez vous adresser à{" "}
        <a href="https://vernast-vochtbestrijding.be/">Vernast Vochtbestrijding</a>, notre société
        sœur. Une fois la cause éliminée, un déshumidificateur retire l’humidité résiduelle du mur,
        dans cet ordre et pas l’inverse.
      </>
    ),

    rvKick: "La valeur cible",
    rvH2: "Visez 40 à 60 % d’humidité relative.",
    rvP1:
      "L’humidité relative indique la quantité d’humidité que contient l’air par rapport au maximum qu’il peut porter à cette température. Pour une habitation, la valeur de référence est de 40 à 60 %. Si elle reste longtemps plus élevée, les moisissures ont leur chance, surtout sur des murs froids. Bien en dessous, l’air devient désagréablement sec.",
    rvP2:
      "Dans une cave, la température joue un rôle : l’air froid est plus vite saturé, et un mur froid attire l’humidité. C’est pourquoi une cave peut sentir le moisi alors que le reste de la maison va bien. Nos déshumidificateurs ont un hygrostat intégré : ils réduisent leur régime dès que la valeur cible réglée est atteinte, au lieu de tourner jusqu’à ce que l’air soit sec comme un os.",
    rvChips: (rapport) => [
      "Hygromètre à partir de 15 €",
      "Mesure avant et après comprise",
      `Rapport de mesure ${rapport}`,
    ],
    meterTitel: "Humidité relative",
    meterTeDroog: "20 % · trop sec",
    meterSchimmel: "80 % · moisissures",
    meterUitleg:
      "Sous 40 %, l’air devient désagréable et le bois se rétracte. Au-dessus de 60 %, les moisissures apparaissent sur un mur froid. Entre les deux se trouve la zone vers laquelle nous séchons une cave et où vous la maintenez ensuite.",

    schimmelAlt: "Moisissures sur un mur intérieur humide",
    schimmelKick: "Dans cet ordre",
    schimmelH2: "D’abord sécher, ensuite assainir.",
    schimmelP1:
      "Les moisissures ont besoin d’humidité. Sécher leur retire ce terrain favorable, si bien qu’elles ne se développent plus. Mais les moisissures déjà présentes ne disparaissent pas pour autant. Vous devez les éliminer après le séchage, et pour de grandes surfaces, mieux vaut confier ce travail à un professionnel.",
    schimmelP2: (lp) => (
      <>
        Respectez cet ordre. Assainir un mur mouillé n’a guère de sens : les moisissures reviennent
        tant que l’humidité reste, et vous aurez payé deux fois le même travail. Pour un cas tenace
        ou une odeur de moisi qui persiste après le séchage, il existe encore une étape : un{" "}
        <Link to={lp("/ozonbehandeling")}>traitement à l’ozone</Link> s’attaque aux spores et à
        l’odeur dans la pièce elle-même.
      </>
    ),

    stapKick: "Étape par étape",
    stapH2: "Sécher une cave humide : voici comment procéder.",
    stapLede:
      "Six étapes, dans cet ordre. Qui saute l’étape deux recommence l’étape quatre chaque année.",
    stap: "Étape",
    kelderStappen: [
      {
        title: "Mesurez d’abord",
        desc: "Un simple hygromètre indique l’humidité relative et la température. Notez-les pendant quelques jours : vous connaissez ainsi votre point de départ, et vous pourrez montrer après coup que le séchage a réussi.",
      },
      {
        title: "Cherchez la cause",
        desc: "Condensation, fuite ou humidité venant de l’extérieur ? Voir les cinq causes ci-dessus. En cas d’humidité ascensionnelle ou d’infiltrations latérales, faites d’abord traiter le mur.",
      },
      {
        title: "Faites de la place",
        desc: "Éloignez boîtes, armoires et textiles des murs. Derrière une armoire contre un mur froid, c’est toujours là que c’est le plus humide, et c’est là que commencent les moisissures.",
      },
      {
        title: "Placez le déshumidificateur au centre",
        desc: "Au milieu de la pièce, portes et soupiraux fermés : vous séchez la cave, pas le jardin. Avec un tuyau de condensats vers une évacuation, vous n’avez pas de réservoir à vider.",
      },
      {
        title: "Chauffez sous 15 °C",
        desc: "Une cave froide sèche lentement avec un déshumidificateur à condensation : l’air froid retient tout simplement moins d’humidité. Un chauffage de chantier amène la température au bon niveau, ou vous optez pour un déshumidificateur à adsorption.",
      },
      {
        title: "Gardez-la sèche ensuite",
        desc: "Une fois la pièce sèche, aérez régulièrement et surveillez l’humidité de l’air. Sinon, vous serez au même point dans quelques mois.",
      },
    ],

    pakKick: "Quel appareil",
    pakH2: "Trois déshumidificateurs, un par volume.",
    pakLede:
      "Pas l’appareil le plus puissant, mais celui qui convient à votre pièce. Un déshumidificateur trop gros dans une petite cave ne sèche pas plus vite, il consomme seulement plus d’électricité.",

    refKick: "Sur le terrain",
    refH2: "Des caves que nous avons asséchées.",
    refLede:
      "Trois chantiers avec leurs valeurs mesurées, leur durée et les appareils installés. Si l’un d’eux ressemble à votre situation, vous savez tout de suite à quoi vous attendre.",

    tipsKick: "Après la reprise",
    tipsH2: "Traiter l’humidité pour de bon, pas chaque année à nouveau.",
    tipsLede:
      "Le déshumidificateur repart avec nous. Ce qui se passe ensuite détermine si vous nous rappellerez dans un an. Trois choses qui font la différence.",
    tips: [
      {
        title: "Trouvez la cause",
        desc: "Un déshumidificateur traite le symptôme. Faites examiner la cause, sinon vous sécherez le même mur chaque année.",
      },
      {
        title: "Aérez chaque jour",
        desc: "Dix minutes de ventilation transversale font plus qu’une fenêtre entrouverte toute la journée. Surtout dans une cave ou un débarras.",
      },
      {
        title: "Surveillez l’hygromètre",
        desc: "Si l’humidité de l’air reste au-dessus de 60 %, l’humidité est en train de revenir. Vous le voyez sur l’appareil avant de le voir sur le mur.",
      },
    ],

    faqTitel: "Ce que nous demandent les clients dont la cave est humide.",
    faqs: [
      {
        q: "Combien de temps faut-il pour sécher une cave humide ?",
        a: "Selon la situation, de 2 à 6 semaines. Notre mesure d’humidité confirme quand c’est terminé.",
      },
      {
        q: "Un déshumidificateur de chantier est-il efficace contre la condensation ?",
        a: "Oui, surtout combiné à une bonne ventilation.",
      },
      {
        q: "Un déshumidificateur de chantier aide-t-il contre l’humidité ascensionnelle ?",
        a: "Pas durablement. Un déshumidificateur sèche l’air et la surface du mur, mais l’eau du sol continue de remonter par la maçonnerie tant que le mur n’est pas traité. Faites d’abord traiter la cause, par exemple par une injection contre l’humidité ascensionnelle ; ensuite, un déshumidificateur retire l’humidité résiduelle du mur.",
      },
      {
        q: "Quel est un bon taux d’humidité dans une maison ?",
        a: "Comme valeur de référence, maintenez l’humidité relative entre 40 et 60 %. Si elle reste longtemps au-dessus, surtout dans une cave froide, les moisissures ont leur chance. Bien en dessous, l’air devient désagréablement sec. Un simple hygromètre vous indique où vous en êtes.",
      },
      {
        q: "Comment savoir si l’humidité vient de la condensation ou de l’extérieur ?",
        a: "La condensation se trouve surtout aux endroits les plus froids : coins, derrière les armoires, autour des fenêtres. Elle s’aggrave en hiver et quand on aère peu. L’humidité ascensionnelle se voit au bas du mur, souvent avec des efflorescences salines. Les infiltrations latérales apparaissent après la pluie, du côté de la façade ou de la terre. En cas de doute, faites examiner la situation sur place.",
      },
      {
        q: "Un déshumidificateur de chantier élimine-t-il les moisissures ?",
        a: "Non. Sécher retire le terrain favorable, si bien que les moisissures ne se développent plus, mais vous devez encore éliminer les moisissures elles-mêmes. Pour de grandes surfaces ou des moisissures qui reviennent, un assainissement professionnel est le choix sûr.",
      },
      {
        q: "Un déshumidificateur de chantier est-il sans danger avec des enfants et des animaux ?",
        a: "Oui, tout à fait. Surveillez chaque jour le bac de récupération d’eau.",
      },
    ],

    verderTitel: "Pour aller plus loin sur les caves humides",
    verderLezen: (lp) => [
      {
        kop: "Appareils pour caves et pièces humides",
        links: [
          { to: lp(toestelPad("ttk170")), toestel: "ttk170", label: "Boost", sub: "Compact, pour une pièce ou une petite cave." },
          { to: lp(toestelPad("ttk650")), toestel: "ttk650", label: "Ultimate", sub: "Pour les grandes caves et beaucoup d’humidité." },
          {
            to: lp(toestelPad("teddh20")),
            toestel: "teddh20",
            label: "Chauffage de chantier pour une cave ou un garage froid",
            sub: "Amène la pièce à sa température de fonctionnement.",
          },
        ],
      },
      {
        kop: "Comprendre d’abord, louer ensuite",
        links: [
          { to: lp("/hoe-drogen-werkt"), label: "Comment fonctionne le séchage : chaleur, air et déshumidification" },
          {
            to: lp("/gids/condensdroger-of-adsorptiedroger"),
            label: "Guide : déshumidificateur à condensation ou à adsorption dans une cave froide ?",
          },
          { to: lp("/gids/stroomverbruik-bouwdroger"), label: "Guide : combien d’électricité consomme un déshumidificateur de chantier ?" },
          { to: lp("/waarom-bouwdroging"), label: "Pourquoi sécher son chantier plutôt que d’attendre" },
          { to: lp("/ozonbehandeling"), label: "Une odeur de moisi qui persiste : le traitement à l’ozone" },
        ],
      },
      {
        kop: "Planifier et en savoir plus",
        links: [
          { to: lp("/verhuur/calculator"), label: "Calculez un pack de séchage selon la surface" },
          { to: lp("/waterschade"), label: "Cave inondée ? Sécher des dégâts des eaux" },
          { to: lp("/bouwdroger-huren-west-vlaanderen"), label: "Louer un déshumidificateur de chantier en Flandre occidentale" },
          { to: lp("/bouwdroger-huren-antwerpen"), label: "Louer un déshumidificateur de chantier dans la province d’Anvers" },
        ],
      },
    ],
    slotKick: "Agissez maintenant",
    slotH3: "Plus l’humidité reste longtemps, plus il y a à sécher.",
    slotP:
      "Faites examiner votre situation avant de louer quoi que ce soit. Nous mesurons, calculons le pack et livrons dans les 24 heures. Et si sécher n’est pas la solution, nous vous le disons aussi.",
    slotAlt: "Spécialiste Vernast mesurant le taux d’humidité d’un mur",

    contactKicker: "Une question sur votre cave ?",
    contactTitel: "Pas certain que sécher soit la solution chez vous ?",
    contactLede:
      "Décrivez ce que vous voyez et sentez, nous vous dirons quelle est probablement la cause et si un déshumidificateur de chantier peut aider. Même si la réponse est que vous n’avez besoin de rien chez nous.",
    contactOnderwerpen: [
      "Cave ou débarras humide",
      "Moisissures sur les murs ou le plafond",
      "Humidité après des travaux",
      "Humidité ascensionnelle ou infiltrations latérales",
      "Autre chose",
    ],
    contactPlaceholder:
      "P. ex. cave de 25 m², odeur de moisi et taches sombres au bas du mur, surtout en hiver.",
  },
} satisfies Copy<RnTeksten>;
