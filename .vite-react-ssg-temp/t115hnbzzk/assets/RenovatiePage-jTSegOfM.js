import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { P as PageMeta, C as CONTACT } from "./PageMeta-BXulEWcY.js";
import { l as V3Header, A as ArrowRightIcon, k as PhoneIcon, D as DropIcon, T as TruckIcon, c as ChecklistIcon, d as SupportIcon, n as MoldIcon, r as HouseIcon, f as CardIcon, e as CheckIcon, p as BrushIcon, R as RefreshIcon, o as CellarIcon } from "./V3Header-BeIMcMg7.js";
import { V as V3Footer } from "./V3Footer-9z4J1I4x.js";
import { R as Reveal } from "./Reveal-NNPkAe35.js";
import { P as Pakketkaarten } from "./Pakketkaarten-Dd1w1Oyj.js";
import { C as ContactBlok } from "./ContactBlok-ykYeBJgi.js";
import { F as FaqBlok } from "./FaqBlok-Bkr2MHqW.js";
import { V as VerderLezen } from "./VerderLezen-BWBN-Dg6.js";
import { G as GaugeIcon, D as DoosIcon, c as DrogerIcon, T as ThermoIcon, a as WindIcon } from "./icons-DTi5RvwE.js";
import { u as useSeo } from "./seo-BMvlJeai.js";
import { b as useTaal, u as useCopy, a as useLokaalPad, c as useToonBedrag } from "../main.mjs";
import { s as serviceSchema, f as faqSchema, b as breadcrumbSchema } from "./schema-VJMHyxOJ.js";
import { getRealisatie } from "./realisaties-eA_H-cxM.js";
/* empty css                    */
import { t as toestelPad, E as EXTRAS } from "./verhuur-CgnDb-wO.js";
import "vite-react-ssg";
import "react";
import "./FontPreload-C6Rzq6ld.js";
import "./verhuur-8XCQs1EE.js";
import "./packages-DdkKuPcF.js";
import "./tarieven-ZrzMF0e-.js";
import "./AanvraagForm-CNDpbMyw.js";
import "lucide-react";
import "./verhuur.fr-CrIPL5Eo.js";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/RenovatiePage.copy.tsx");
const RN_COPY = {
  nl: {
    schemaNaam: "Kelder- en renovatiedroging",
    schemaBeschrijving: "Drogen van vochtige kelders, muren en renovatieruimtes met ontvochtigers en bouwkachels, inclusief vochtmeting voor en na.",
    schemaType: "Bouwdroging",
    kruimelHome: "Home",
    kruimelPagina: "Renovatie",
    heroKick: "Renovatie & vochtige kelders",
    h1: "Een vochtige kelder of natte muren drogen, en ze droog houden.",
    heroP: "Muffe geur, donkere plekken onderaan de muur, schimmel in de hoek: vocht trekt niet weg omdat u het raam openzet. Een bouwdroger haalt het uit de lucht en daarmee uit muren en vloeren. En als er een blijvende oorzaak achter zit, leest u hieronder eerlijk welke dat is en in welke volgorde u ze aanpakt.",
    cta: "Bereken uw droogpakket",
    heroAlt: "Ontvochtiger in een vochtige kelder tijdens een renovatie",
    badgeTitel: "40 à 60 % RV",
    badgeSub: "de richtwaarde waar we naartoe drogen",
    trust: ["Vochtmeting voor én na", "Binnen 24 uur geleverd", "Levering en plaatsing inbegrepen", "Advies vóór u huurt"],
    gevarenKick: "Waarom het haast heeft",
    gevarenH2: "Vocht wacht niet tot u tijd hebt.",
    gevarenLede: "Een vochtige ruimte wordt niet langzaam een beetje erger. Schimmel verdubbelt in dagen, nat hout en natte isolatie zijn onomkeerbaar beschadigd, en wat begint als een geur eindigt als een post in een verkoopakte.",
    gevaren: [
      {
        title: "Schimmelsporen in de lucht",
        desc: "Schimmel die u ziet is maar een deel; de sporen hangen in de lucht die u inademt. Ze geven luchtwegklachten, hoofdpijn en allergische reacties, en zijn het meest vervelend voor kinderen, ouderen en mensen met asthma."
      },
      {
        title: "Schade aan de constructie",
        desc: "Vocht tast metselwerk, houten balken, plinten en isolatie aan. Isolatie die nat is geweest, isoleert niet meer, en hout dat maanden vochtig blijft, rot van binnenuit, precies waar u er niet bij kunt."
      },
      {
        title: "Een woning die minder opbrengt",
        desc: "Zichtbare vochtplekken, een muffe kelder of een vochtkeuring die vragen oproept: elke koper rekent dat in mindering. Drogen kost een fractie van wat de prijsonderhandeling u kost."
      }
    ],
    checkKick: "Herkent u dit?",
    checkH2: "Vijf signalen dat drogen zin heeft.",
    checkP1: "Eén van deze vijf is genoeg om te laten meten. Bij twee of meer is het zelden toeval: er zit ergens vocht dat niet weg kan. Bel ons, dan overlopen we uw situatie voor u iets huurt, ook als het antwoord is dat u bij ons niets nodig hebt.",
    checkP2: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
      "Twijfelt u welk toestel bij uw volume past? De",
      " ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "droogcalculator" }),
      " rekent het uit op oppervlakte en plafondhoogte, en ",
      /* @__PURE__ */ jsx(Link, { to: lp("/hoe-drogen-werkt"), children: "hoe drogen werkt" }),
      " legt uit waarom de combinatie van warmte, luchtbeweging en ontvochtiging het werk doet."
    ] }),
    checklist: [
      "Een muffe, kelderachtige geur die niet weggaat",
      "Donkere vochtplekken op muren of plafond",
      "Zwarte of groene schimmelvlekken, vaak in hoeken",
      "Condens op ramen, koude muren of leidingen",
      "Vocht na een verbouwing, een lek of een overstroming"
    ],
    checkFoot: "Herkent u er één of meer? Eén telefoontje volstaat voor advies.",
    belOns: "Bel ons",
    oorzKick: "Oorzaak of symptoom",
    oorzH2: "Een bouwdroger lost vocht op. Niet altijd de reden dat het er is.",
    oorzLede: "Een bouwdroger haalt vocht uit de lucht, en daarmee ook uit muren en vloeren. Komt dat vocht steeds opnieuw binnen, dan droogt u tegen de stroom in: u huurt dan een toestel dat werkt zolang het er staat. Kijk daarom eerst waar het vandaan komt. Bij drie van deze vijf oorzaken is drogen het antwoord; bij twee komt er eerst iets anders.",
    doorsnedeGrond: "Grond",
    doorsnedeKelder: "Kelder",
    doorsnedeBijschrift: "Doorsnede van een keldermuur: links de grond, rechts de ruimte met de droger erin. De genummerde plekken zijn de vijf plaatsen waar vocht binnenkomt, en komen overeen met de vijf oorzaken in de lijst.",
    oorzaken: [
      {
        title: "Condensatie",
        desc: "Warme, vochtige lucht slaat neer op koude muren, vloeren en ramen. Typisch in kelders en slecht verluchte ruimtes, vooral in de winter. Een bouwdroger haalt de luchtvochtigheid omlaag; blijvend oplossen vraagt betere ventilatie of isolatie."
      },
      {
        title: "Bouwvocht na renovatie",
        desc: "Nieuw pleisterwerk, chape of metselwerk brengt honderden liters water mee in een ruimte die vaak slecht verlucht is. Dat is precies waarvoor een bouwdroger gemaakt is."
      },
      {
        title: "Na een lek of waterschade",
        desc: "Is het lek hersteld, dan droogt een bouwdroger met ventilator de muren en de vloer weer uit. Zolang het lek blijft, blijft het vocht terugkomen."
      },
      {
        title: "Opstijgend vocht",
        desc: "Grondwater dat via het metselwerk omhoog trekt: vochtplekken en zoutkorsten onderaan de muur, tot een meter hoog of meer. Een bouwdroger droogt de oppervlakte, maar het vocht blijft opstijgen zolang de muur niet behandeld wordt."
      },
      {
        title: "Doorslaand vocht",
        desc: "Regen- of grondwater dat door een gevel of een keldermuur dringt, vaak zichtbaar na een regenperiode. Ook hier is drogen alleen tijdelijk: de muur of de kelderwand moet waterdicht gemaakt worden."
      }
    ],
    helptJa: "Een bouwdroger helpt",
    helptNee: "Eerst de oorzaak",
    oorzNote: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Zit de oorzaak in de muur zelf?" }),
      " Opstijgend vocht, een lekkende keldermuur of een kelder die waterdicht moet: daarvoor kunt u terecht bij",
      " ",
      /* @__PURE__ */ jsx("a", { href: "https://vernast-vochtbestrijding.be/", children: "Vernast Vochtbestrijding" }),
      ", onze zusterfirma. Is de oorzaak weg, dan droogt een bouwdroger het restvocht uit de muur, in die volgorde en niet omgekeerd."
    ] }),
    rvKick: "De richtwaarde",
    rvH2: "Mik op 40 à 60 % relatieve luchtvochtigheid.",
    rvP1: "De relatieve luchtvochtigheid zegt hoeveel vocht de lucht bevat tegenover wat ze bij die temperatuur maximaal kan dragen. Voor een woning geldt 40 tot 60 % als richtwaarde. Blijft ze langdurig hoger, dan krijgt schimmel kans, zeker op koude muren. Ver daaronder wordt de lucht onaangenaam droog.",
    rvP2: "In een kelder speelt de temperatuur mee: koude lucht zit sneller verzadigd, en een koude muur trekt het vocht naar zich toe. Daarom kan een kelder muf ruiken terwijl de rest van het huis in orde is. Onze ontvochtigers hebben een ingebouwde hygrostaat: ze schakelen terug zodra de ingestelde streefwaarde bereikt is, in plaats van door te draaien tot de lucht kurkdroog staat.",
    /* Het Nederlands blijft zoals het altijd stond; `rapport` wordt hier niet gebruikt. */
    rvChips: () => ["Hygrometer vanaf € 15", "Meting voor én na inbegrepen", "Meetrapport € 49"],
    meterTitel: "Relatieve luchtvochtigheid",
    meterEenheid: "% RV",
    meterTeDroog: "20 % · te droog",
    meterSchimmel: "80 % · schimmel",
    meterUitleg: "Onder 40 % wordt de lucht onaangenaam en krimpt hout. Boven 60 % begint schimmel aan een koude muur. Daartussen zit de zone waar we een kelder naartoe drogen en waar u hem daarna houdt.",
    schimmelAlt: "Schimmelvorming op een vochtige binnenmuur",
    schimmelKick: "In deze volgorde",
    schimmelH2: "Eerst drogen, dan saneren.",
    schimmelP1: "Schimmel heeft vocht nodig. Drogen neemt die voedingsbodem weg, zodat hij niet verder groeit. Maar de schimmel die er al zit, verdwijnt er niet mee. Die moet u na het drogen verwijderen, en bij grote oppervlakken laat u dat beter professioneel doen.",
    schimmelP2: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
      "Doe het in die volgorde. Saneren op een natte muur heeft weinig zin: de schimmel komt terug zolang het vocht blijft, en u hebt dan twee keer betaald voor hetzelfde werk. Voor een hardnekkig geval of een muffe geur die na het drogen blijft hangen, bestaat er nog een stap: een ",
      /* @__PURE__ */ jsx(Link, { to: lp("/ozonbehandeling"), children: "ozonbehandeling" }),
      " pakt de sporen en de geur aan in de ruimte zelf."
    ] }),
    stapKick: "Stap voor stap",
    stapH2: "Een vochtige kelder drogen: zo pakt u het aan.",
    stapLede: "Zes stappen, in deze volgorde. Wie stap twee overslaat, herhaalt stap vier elk jaar.",
    stap: "Stap",
    kelderStappen: [
      {
        title: "Meet eerst",
        desc: "Een eenvoudige hygrometer toont de relatieve luchtvochtigheid en de temperatuur. Noteer ze een paar dagen, dan weet u waar u vertrekt, en kunt u achteraf aantonen dat het gelukt is."
      },
      {
        title: "Zoek de oorzaak",
        desc: "Condensatie, een lek, of vocht van buitenaf? Zie de vijf oorzaken hierboven. Bij opstijgend of doorslaand vocht laat u eerst de muur behandelen."
      },
      {
        title: "Maak ruimte",
        desc: "Zet dozen, kasten en textiel weg van de muren. Achter een kast tegen een koude muur is het altijd het vochtigst, en daar begint de schimmel."
      },
      {
        title: "Plaats de droger centraal",
        desc: "Midden in de ruimte, deuren en kelderramen dicht: u droogt de kelder, niet de tuin. Met een condensslang naar een afvoer hoeft u geen reservoir te legen."
      },
      {
        title: "Warm bij onder 15 °C",
        desc: "Een koude kelder droogt traag met een condensdroger: koude lucht houdt nu eenmaal minder vocht vast. Een bouwkachel brengt de temperatuur op peil, of u kiest een adsorptiedroger."
      },
      {
        title: "Houd het daarna droog",
        desc: "Is de ruimte droog, verlucht dan regelmatig en houd de luchtvochtigheid in het oog. Anders staat u er over een paar maanden opnieuw."
      }
    ],
    pakKick: "Welk toestel",
    pakH2: "Drie ontvochtigers, één per volume.",
    pakLede: "Niet het zwaarste toestel, maar het toestel dat bij uw ruimte past. Een te grote droger in een kleine kelder droogt niet sneller, hij verbruikt alleen meer stroom.",
    refKick: "Uit de praktijk",
    refH2: "Kelders die we droog kregen.",
    refLede: "Drie werven met hun meetwaarden, hun duur en de toestellen die er stonden. Lijkt er één op uw situatie, dan weet u meteen wat u mag verwachten.",
    tipsKick: "Na de ophaling",
    tipsH2: "Vocht voorgoed aanpakken, niet elk jaar opnieuw.",
    tipsLede: "De droger gaat weer mee. Wat daarna gebeurt, bepaalt of u ons over een jaar opnieuw belt. Drie dingen die het verschil maken.",
    tips: [
      {
        title: "Vind de oorzaak",
        desc: "Een bouwdroger lost het symptoom op. Laat de oorzaak onderzoeken, anders droogt u elk jaar opnieuw dezelfde muur."
      },
      {
        title: "Verlucht elke dag",
        desc: "Tien minuten dwarsventilatie doet meer dan een raam dat de hele dag op een kier staat. Zeker in een kelder of berging."
      },
      {
        title: "Hou de hygrometer in het oog",
        desc: "Blijft de luchtvochtigheid boven 60 % hangen, dan is het vocht aan het terugkomen. U ziet het aan de meter voor u het aan de muur ziet."
      }
    ],
    faqTitel: "Wat klanten met een vochtige kelder ons vragen.",
    faqs: [
      { q: "Hoe lang duurt het drogen van een vochtige kelder?", a: "Afhankelijk van de situatie 2 tot 6 weken. Onze vochtmeting bevestigt wanneer het klaar is." },
      { q: "Werkt een bouwdroger bij condensatieproblemen?", a: "Ja, zeker in combinatie met goede ventilatie." },
      {
        q: "Helpt een bouwdroger tegen opstijgend vocht?",
        a: "Niet blijvend. Een bouwdroger droogt de lucht en de oppervlakte van de muur, maar het grondwater blijft via het metselwerk omhoog trekken zolang de muur niet behandeld is. Laat eerst de oorzaak aanpakken, bijvoorbeeld met een injectie tegen opstijgend vocht; daarna droogt een bouwdroger het restvocht uit de muur."
      },
      {
        q: "Wat is een goede luchtvochtigheid in huis?",
        a: "Als richtwaarde houdt u de relatieve luchtvochtigheid tussen 40 en 60 %. Blijft ze langdurig daarboven, zeker in een koude kelder, dan krijgt schimmel kans. Ver daaronder wordt de lucht onaangenaam droog. Een eenvoudige hygrometer toont waar u zit."
      },
      {
        q: "Hoe weet ik of het vocht van condensatie komt of van buiten?",
        a: "Condensatie zit vooral op de koudste plekken: hoeken, achter kasten, rond ramen. Het verergert in de winter en bij weinig verluchting. Opstijgend vocht zie je onderaan de muur, vaak met zoutkorsten. Doorslaand vocht verschijnt na regen, aan de kant van de gevel of de grond. Twijfelt u, laat het dan ter plaatse bekijken."
      },
      {
        q: "Haalt een bouwdroger schimmel weg?",
        a: "Nee. Drogen neemt de voedingsbodem weg, zodat schimmel niet verder groeit, maar de schimmel zelf moet u nog verwijderen. Bij grote oppervlakken of schimmel die terugkomt, is een professionele sanering de veilige keuze."
      },
      { q: "Is een bouwdroger veilig bij kinderen en huisdieren?", a: "Ja, volledig veilig. Houd de wateropvang dagelijks in het oog." }
    ],
    verderTitel: "Verder lezen over vochtige kelders",
    verderLezen: (lp) => [
      {
        kop: "Toestellen voor kelders en vochtige ruimtes",
        links: [
          { to: lp(toestelPad("ttk170")), toestel: "ttk170", label: "Boost", sub: "Compact, voor één kamer of een kleine kelder." },
          { to: lp(toestelPad("ttk650")), toestel: "ttk650", label: "Ultimate", sub: "Voor ruime kelders en veel vocht." },
          { to: lp(toestelPad("teddh20")), toestel: "teddh20", label: "Bouwkachel voor een koude kelder of garage", sub: "Brengt de ruimte op werkingstemperatuur." }
        ]
      },
      {
        kop: "Eerst begrijpen, dan huren",
        links: [
          { to: lp("/hoe-drogen-werkt"), label: "Hoe drogen werkt: warmte, lucht en ontvochtiging" },
          { to: lp("/gids/condensdroger-of-adsorptiedroger"), label: "Gids: condensdroger of adsorptiedroger in een koude kelder?" },
          { to: lp("/gids/stroomverbruik-bouwdroger"), label: "Gids: wat verbruikt een bouwdroger aan stroom?" },
          { to: lp("/waarom-bouwdroging"), label: "Waarom bouwdroging en niet gewoon wachten" },
          { to: lp("/ozonbehandeling"), label: "Muffe geur die blijft hangen: ozonbehandeling" }
        ]
      },
      {
        kop: "Plannen en verder lezen",
        links: [
          { to: lp("/verhuur/calculator"), label: "Bereken een droogpakket op oppervlakte" },
          { to: lp("/waterschade"), label: "Kelder ondergelopen? Waterschade drogen" },
          { to: lp("/bouwdroger-huren-west-vlaanderen"), label: "Bouwdroger huren in West-Vlaanderen" },
          { to: lp("/bouwdroger-huren-antwerpen"), label: "Bouwdroger huren in de provincie Antwerpen" }
        ]
      }
    ],
    slotKick: "Pak het nu aan",
    slotH3: "Hoe langer het vocht er zit, hoe meer er droog gemaakt moet worden.",
    slotP: "Laat uw situatie bekijken voor u iets huurt. Wij meten, rekenen het pakket uit en leveren binnen 24 uur. En als drogen niet het antwoord is, zeggen we dat ook.",
    slotAlt: "Vernast specialist meet het vochtgehalte van een muur",
    contactKicker: "Een vraag over uw kelder?",
    contactTitel: "Niet zeker of drogen bij u de oplossing is?",
    contactLede: "Beschrijf wat u ziet en ruikt, dan zeggen wij welke oorzaak het waarschijnlijk is en of een bouwdroger helpt. Ook als het antwoord is dat u bij ons niets nodig hebt.",
    contactOnderwerpen: [
      "Vochtige kelder of berging",
      "Schimmel op muren of plafond",
      "Vocht na een verbouwing",
      "Opstijgend of doorslaand vocht",
      "Iets anders"
    ],
    contactPlaceholder: "Bv. kelder van 25 m², muffe geur en donkere plekken onderaan de muur, vooral in de winter."
  },
  fr: {
    schemaNaam: "Séchage de caves et de rénovations",
    schemaBeschrijving: "Séchage de caves, murs et pièces en rénovation humides avec déshumidificateurs et chauffages de chantier, mesure d’humidité avant et après comprise.",
    schemaType: "Séchage de chantier",
    kruimelHome: "Accueil",
    kruimelPagina: "Rénovation",
    heroKick: "Rénovation & caves humides",
    h1: "Sécher une cave humide ou des murs mouillés, et les garder secs.",
    heroP: "Odeur de moisi, taches sombres au bas du mur, moisissures dans le coin : l’humidité ne part pas parce que vous ouvrez la fenêtre. Un déshumidificateur de chantier la retire de l’air, et donc des murs et des sols. Et si une cause durable se cache derrière, vous lisez ci-dessous, en toute franchise, laquelle et dans quel ordre vous y attaquer.",
    cta: "Calculez votre pack de séchage",
    heroAlt: "Déshumidificateur dans une cave humide pendant une rénovation",
    badgeTitel: "40 à 60 % RV",
    badgeSub: "la valeur cible vers laquelle nous séchons",
    trust: [
      "Mesure d’humidité avant et après",
      "Livré dans les 24 heures",
      "Livraison et installation comprises",
      "Conseil avant de louer"
    ],
    gevarenKick: "Pourquoi c’est urgent",
    gevarenH2: "L’humidité n’attend pas que vous ayez le temps.",
    gevarenLede: "Une pièce humide ne s’aggrave pas lentement, petit à petit. Les moisissures doublent en quelques jours, le bois et l’isolation mouillés sont endommagés de façon irréversible, et ce qui commence par une odeur finit comme une ligne dans un acte de vente.",
    gevaren: [
      {
        title: "Des spores de moisissures dans l’air",
        desc: "Les moisissures que vous voyez ne sont qu’une partie du problème ; les spores flottent dans l’air que vous respirez. Elles provoquent des troubles respiratoires, des maux de tête et des réactions allergiques, et gênent surtout les enfants, les personnes âgées et les asthmatiques."
      },
      {
        title: "Des dégâts à la construction",
        desc: "L’humidité attaque la maçonnerie, les poutres en bois, les plinthes et l’isolation. Une isolation qui a été mouillée n’isole plus, et un bois qui reste humide pendant des mois pourrit de l’intérieur, précisément là où vous ne pouvez pas y accéder."
      },
      {
        title: "Une habitation qui perd de sa valeur",
        desc: "Des taches d’humidité visibles, une cave qui sent le moisi ou une expertise humidité qui soulève des questions : chaque acheteur le déduit de son offre. Sécher coûte une fraction de ce que vous coûte la négociation du prix."
      }
    ],
    checkKick: "Vous reconnaissez ceci ?",
    checkH2: "Cinq signes qu’il est utile de sécher.",
    checkP1: "Un seul de ces cinq signes suffit pour faire mesurer. À partir de deux, c’est rarement un hasard : il y a quelque part de l’humidité qui ne peut pas s’échapper. Appelez-nous, nous passons votre situation en revue avant que vous ne louiez quoi que ce soit, même si la réponse est que vous n’avez besoin de rien chez nous.",
    checkP2: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
      "Vous hésitez sur l’appareil adapté à votre volume ? Le",
      " ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "calculateur de séchage" }),
      " le détermine à partir de la surface et de la hauteur sous plafond, et la page",
      " ",
      /* @__PURE__ */ jsx(Link, { to: lp("/hoe-drogen-werkt"), children: "comment fonctionne le séchage" }),
      " explique pourquoi la combinaison de chaleur, de mouvement d’air et de déshumidification fait le travail."
    ] }),
    checklist: [
      "Une odeur de moisi, de cave, qui ne s’en va pas",
      "Des taches d’humidité sombres sur les murs ou le plafond",
      "Des taches de moisissure noires ou vertes, souvent dans les coins",
      "De la condensation sur les fenêtres, les murs froids ou les conduites",
      "De l’humidité après des travaux, une fuite ou une inondation"
    ],
    checkFoot: "Vous en reconnaissez un ou plusieurs ? Un coup de fil suffit pour un conseil.",
    belOns: "Appelez-nous",
    oorzKick: "Cause ou symptôme",
    oorzH2: "Un déshumidificateur élimine l’humidité. Pas toujours la raison de sa présence.",
    oorzLede: "Un déshumidificateur de chantier retire l’humidité de l’air, et donc aussi des murs et des sols. Si cette humidité revient sans cesse, vous séchez à contre-courant : vous louez alors un appareil qui fonctionne tant qu’il est là. Regardez donc d’abord d’où elle vient. Pour trois de ces cinq causes, sécher est la réponse ; pour deux, il faut d’abord autre chose.",
    doorsnedeGrond: "Sol",
    doorsnedeKelder: "Cave",
    doorsnedeBijschrift: "Coupe d’un mur de cave : à gauche la terre, à droite la pièce avec le déshumidificateur. Les points numérotés sont les cinq endroits par où l’humidité entre, et correspondent aux cinq causes de la liste.",
    oorzaken: [
      {
        title: "Condensation",
        desc: "L’air chaud et humide se dépose sur les murs, sols et fenêtres froids. Typique des caves et des pièces mal ventilées, surtout en hiver. Un déshumidificateur fait baisser l’humidité de l’air ; une solution durable demande une meilleure ventilation ou isolation."
      },
      {
        title: "Humidité de construction après rénovation",
        desc: "Un nouveau plafonnage, une chape ou une maçonnerie apportent des centaines de litres d’eau dans une pièce souvent mal ventilée. C’est exactement ce pour quoi un déshumidificateur de chantier est conçu."
      },
      {
        title: "Après une fuite ou un dégât des eaux",
        desc: "Une fois la fuite réparée, un déshumidificateur avec ventilateur assèche à nouveau les murs et le sol. Tant que la fuite persiste, l’humidité revient."
      },
      {
        title: "Humidité ascensionnelle",
        desc: "De l’eau du sol qui remonte par la maçonnerie : taches d’humidité et efflorescences salines au bas du mur, jusqu’à un mètre de haut ou plus. Un déshumidificateur sèche la surface, mais l’humidité continue de remonter tant que le mur n’est pas traité."
      },
      {
        title: "Infiltrations latérales",
        desc: "De l’eau de pluie ou du sol qui traverse une façade ou un mur de cave, souvent visible après une période de pluie. Ici aussi, sécher n’est que temporaire : le mur ou la paroi de la cave doit être rendu étanche."
      }
    ],
    helptJa: "Un déshumidificateur aide",
    helptNee: "D’abord la cause",
    oorzNote: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "La cause se trouve dans le mur lui-même ?" }),
      " Humidité ascensionnelle, mur de cave qui fuit ou cave à rendre étanche : pour cela, vous pouvez vous adresser à",
      " ",
      /* @__PURE__ */ jsx("a", { href: "https://vernast-vochtbestrijding.be/", children: "Vernast Vochtbestrijding" }),
      ", notre société sœur. Une fois la cause éliminée, un déshumidificateur retire l’humidité résiduelle du mur, dans cet ordre et pas l’inverse."
    ] }),
    rvKick: "La valeur cible",
    rvH2: "Visez 40 à 60 % d’humidité relative.",
    rvP1: "L’humidité relative indique la quantité d’humidité que contient l’air par rapport au maximum qu’il peut porter à cette température. Pour une habitation, la valeur de référence est de 40 à 60 %. Si elle reste longtemps plus élevée, les moisissures ont leur chance, surtout sur des murs froids. Bien en dessous, l’air devient désagréablement sec.",
    rvP2: "Dans une cave, la température joue un rôle : l’air froid est plus vite saturé, et un mur froid attire l’humidité. C’est pourquoi une cave peut sentir le moisi alors que le reste de la maison va bien. Nos déshumidificateurs ont un hygrostat intégré : ils réduisent leur régime dès que la valeur cible réglée est atteinte, au lieu de tourner jusqu’à ce que l’air soit sec comme un os.",
    rvChips: (rapport) => [
      "Hygromètre à partir de 15 €",
      "Mesure avant et après comprise",
      `Rapport de mesure ${rapport}`
    ],
    meterTitel: "Humidité relative",
    meterEenheid: "% RV",
    meterTeDroog: "20 % · trop sec",
    meterSchimmel: "80 % · moisissures",
    meterUitleg: "Sous 40 %, l’air devient désagréable et le bois se rétracte. Au-dessus de 60 %, les moisissures apparaissent sur un mur froid. Entre les deux se trouve la zone vers laquelle nous séchons une cave et où vous la maintenez ensuite.",
    schimmelAlt: "Moisissures sur un mur intérieur humide",
    schimmelKick: "Dans cet ordre",
    schimmelH2: "D’abord sécher, ensuite assainir.",
    schimmelP1: "Les moisissures ont besoin d’humidité. Sécher leur retire ce terrain favorable, si bien qu’elles ne se développent plus. Mais les moisissures déjà présentes ne disparaissent pas pour autant. Vous devez les éliminer après le séchage, et pour de grandes surfaces, mieux vaut confier ce travail à un professionnel.",
    schimmelP2: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
      "Respectez cet ordre. Assainir un mur mouillé n’a guère de sens : les moisissures reviennent tant que l’humidité reste, et vous aurez payé deux fois le même travail. Pour un cas tenace ou une odeur de moisi qui persiste après le séchage, il existe encore une étape : un",
      " ",
      /* @__PURE__ */ jsx(Link, { to: lp("/ozonbehandeling"), children: "traitement à l’ozone" }),
      " s’attaque aux spores et à l’odeur dans la pièce elle-même."
    ] }),
    stapKick: "Étape par étape",
    stapH2: "Sécher une cave humide : voici comment procéder.",
    stapLede: "Six étapes, dans cet ordre. Qui saute l’étape deux recommence l’étape quatre chaque année.",
    stap: "Étape",
    kelderStappen: [
      {
        title: "Mesurez d’abord",
        desc: "Un simple hygromètre indique l’humidité relative et la température. Notez-les pendant quelques jours : vous connaissez ainsi votre point de départ, et vous pourrez montrer après coup que le séchage a réussi."
      },
      {
        title: "Cherchez la cause",
        desc: "Condensation, fuite ou humidité venant de l’extérieur ? Voir les cinq causes ci-dessus. En cas d’humidité ascensionnelle ou d’infiltrations latérales, faites d’abord traiter le mur."
      },
      {
        title: "Faites de la place",
        desc: "Éloignez boîtes, armoires et textiles des murs. Derrière une armoire contre un mur froid, c’est toujours là que c’est le plus humide, et c’est là que commencent les moisissures."
      },
      {
        title: "Placez le déshumidificateur au centre",
        desc: "Au milieu de la pièce, portes et soupiraux fermés : vous séchez la cave, pas le jardin. Avec un tuyau de condensats vers une évacuation, vous n’avez pas de réservoir à vider."
      },
      {
        title: "Chauffez sous 15 °C",
        desc: "Une cave froide sèche lentement avec un déshumidificateur à condensation : l’air froid retient tout simplement moins d’humidité. Un chauffage de chantier amène la température au bon niveau, ou vous optez pour un déshumidificateur à adsorption."
      },
      {
        title: "Gardez-la sèche ensuite",
        desc: "Une fois la pièce sèche, aérez régulièrement et surveillez l’humidité de l’air. Sinon, vous serez au même point dans quelques mois."
      }
    ],
    pakKick: "Quel appareil",
    pakH2: "Trois déshumidificateurs, un par volume.",
    pakLede: "Pas l’appareil le plus puissant, mais celui qui convient à votre pièce. Un déshumidificateur trop gros dans une petite cave ne sèche pas plus vite, il consomme seulement plus d’électricité.",
    refKick: "Sur le terrain",
    refH2: "Des caves que nous avons asséchées.",
    refLede: "Trois chantiers avec leurs valeurs mesurées, leur durée et les appareils installés. Si l’un d’eux ressemble à votre situation, vous savez tout de suite à quoi vous attendre.",
    tipsKick: "Après la reprise",
    tipsH2: "Traiter l’humidité pour de bon, pas chaque année à nouveau.",
    tipsLede: "Le déshumidificateur repart avec nous. Ce qui se passe ensuite détermine si vous nous rappellerez dans un an. Trois choses qui font la différence.",
    tips: [
      {
        title: "Trouvez la cause",
        desc: "Un déshumidificateur traite le symptôme. Faites examiner la cause, sinon vous sécherez le même mur chaque année."
      },
      {
        title: "Aérez chaque jour",
        desc: "Dix minutes de ventilation transversale font plus qu’une fenêtre entrouverte toute la journée. Surtout dans une cave ou un débarras."
      },
      {
        title: "Surveillez l’hygromètre",
        desc: "Si l’humidité de l’air reste au-dessus de 60 %, l’humidité est en train de revenir. Vous le voyez sur l’appareil avant de le voir sur le mur."
      }
    ],
    faqTitel: "Ce que nous demandent les clients dont la cave est humide.",
    faqs: [
      {
        q: "Combien de temps faut-il pour sécher une cave humide ?",
        a: "Selon la situation, de 2 à 6 semaines. Notre mesure d’humidité confirme quand c’est terminé."
      },
      {
        q: "Un déshumidificateur de chantier est-il efficace contre la condensation ?",
        a: "Oui, surtout combiné à une bonne ventilation."
      },
      {
        q: "Un déshumidificateur de chantier aide-t-il contre l’humidité ascensionnelle ?",
        a: "Pas durablement. Un déshumidificateur sèche l’air et la surface du mur, mais l’eau du sol continue de remonter par la maçonnerie tant que le mur n’est pas traité. Faites d’abord traiter la cause, par exemple par une injection contre l’humidité ascensionnelle ; ensuite, un déshumidificateur retire l’humidité résiduelle du mur."
      },
      {
        q: "Quel est un bon taux d’humidité dans une maison ?",
        a: "Comme valeur de référence, maintenez l’humidité relative entre 40 et 60 %. Si elle reste longtemps au-dessus, surtout dans une cave froide, les moisissures ont leur chance. Bien en dessous, l’air devient désagréablement sec. Un simple hygromètre vous indique où vous en êtes."
      },
      {
        q: "Comment savoir si l’humidité vient de la condensation ou de l’extérieur ?",
        a: "La condensation se trouve surtout aux endroits les plus froids : coins, derrière les armoires, autour des fenêtres. Elle s’aggrave en hiver et quand on aère peu. L’humidité ascensionnelle se voit au bas du mur, souvent avec des efflorescences salines. Les infiltrations latérales apparaissent après la pluie, du côté de la façade ou de la terre. En cas de doute, faites examiner la situation sur place."
      },
      {
        q: "Un déshumidificateur de chantier élimine-t-il les moisissures ?",
        a: "Non. Sécher retire le terrain favorable, si bien que les moisissures ne se développent plus, mais vous devez encore éliminer les moisissures elles-mêmes. Pour de grandes surfaces ou des moisissures qui reviennent, un assainissement professionnel est le choix sûr."
      },
      {
        q: "Un déshumidificateur de chantier est-il sans danger avec des enfants et des animaux ?",
        a: "Oui, tout à fait. Surveillez chaque jour le bac de récupération d’eau."
      }
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
            sub: "Amène la pièce à sa température de fonctionnement."
          }
        ]
      },
      {
        kop: "Comprendre d’abord, louer ensuite",
        links: [
          { to: lp("/hoe-drogen-werkt"), label: "Comment fonctionne le séchage : chaleur, air et déshumidification" },
          {
            to: lp("/gids/condensdroger-of-adsorptiedroger"),
            label: "Guide : déshumidificateur à condensation ou à adsorption dans une cave froide ?"
          },
          { to: lp("/gids/stroomverbruik-bouwdroger"), label: "Guide : combien d’électricité consomme un déshumidificateur de chantier ?" },
          { to: lp("/waarom-bouwdroging"), label: "Pourquoi sécher son chantier plutôt que d’attendre" },
          { to: lp("/ozonbehandeling"), label: "Une odeur de moisi qui persiste : le traitement à l’ozone" }
        ]
      },
      {
        kop: "Planifier et en savoir plus",
        links: [
          { to: lp("/verhuur/calculator"), label: "Calculez un pack de séchage selon la surface" },
          { to: lp("/waterschade"), label: "Cave inondée ? Sécher des dégâts des eaux" },
          { to: lp("/bouwdroger-huren-west-vlaanderen"), label: "Louer un déshumidificateur de chantier en Flandre occidentale" },
          { to: lp("/bouwdroger-huren-antwerpen"), label: "Louer un déshumidificateur de chantier dans la province d’Anvers" }
        ]
      }
    ],
    slotKick: "Agissez maintenant",
    slotH3: "Plus l’humidité reste longtemps, plus il y a à sécher.",
    slotP: "Faites examiner votre situation avant de louer quoi que ce soit. Nous mesurons, calculons le pack et livrons dans les 24 heures. Et si sécher n’est pas la solution, nous vous le disons aussi.",
    slotAlt: "Spécialiste Vernast mesurant le taux d’humidité d’un mur",
    contactKicker: "Une question sur votre cave ?",
    contactTitel: "Pas certain que sécher soit la solution chez vous ?",
    contactLede: "Décrivez ce que vous voyez et sentez, nous vous dirons quelle est probablement la cause et si un déshumidificateur de chantier peut aider. Même si la réponse est que vous n’avez besoin de rien chez nous.",
    contactOnderwerpen: [
      "Cave ou débarras humide",
      "Moisissures sur les murs ou le plafond",
      "Humidité après des travaux",
      "Humidité ascensionnelle ou infiltrations latérales",
      "Autre chose"
    ],
    contactPlaceholder: "P. ex. cave de 25 m², odeur de moisi et taches sombres au bas du mur, surtout en hiver."
  },
  en: {
    schemaNaam: "Basement and renovation drying",
    schemaBeschrijving: "Drying damp basements, walls and renovation spaces with dehumidifiers and site heaters, including moisture readings before and after.",
    schemaType: "Construction drying",
    kruimelHome: "Home",
    kruimelPagina: "Renovation",
    heroKick: "Renovation & damp basements",
    h1: "Drying a damp basement or wet walls, and keeping them dry.",
    heroP: "A musty smell, dark patches at the bottom of the wall, mould in the corner: damp doesn't go away because you open the window. A construction dehumidifier takes it out of the air, and with it out of walls and floors. And if there is a lasting cause behind it, you can read below, honestly, which one it is and in what order to tackle it.",
    cta: "Calculate your drying package",
    heroAlt: "Dehumidifier in a damp basement during a renovation",
    badgeTitel: "40–60% RH",
    badgeSub: "the target level we dry towards",
    trust: ["Moisture reading before and after", "Delivered within 24 hours", "Delivery and installation included", "Advice before you hire"],
    gevarenKick: "Why it's urgent",
    gevarenH2: "Damp doesn't wait until you have time.",
    gevarenLede: "A damp room doesn't slowly get a little worse. Mould doubles in days, wet timber and wet insulation are damaged beyond repair, and what starts as a smell ends up as an item in a deed of sale.",
    gevaren: [
      {
        title: "Mould spores in the air",
        desc: "The mould you can see is only part of it; the spores hang in the air you breathe. They cause respiratory complaints, headaches and allergic reactions, and are most troublesome for children, older people and people with asthma."
      },
      {
        title: "Damage to the structure",
        desc: "Damp attacks masonry, timber beams, skirting boards and insulation. Insulation that has been wet no longer insulates, and timber that stays damp for months rots from the inside, exactly where you can't get at it."
      },
      {
        title: "A home that's worth less",
        desc: "Visible damp patches, a musty basement or a damp survey that raises questions: every buyer knocks it off the price. Drying costs a fraction of what the price negotiation will cost you."
      }
    ],
    checkKick: "Does this sound familiar?",
    checkH2: "Five signs that drying makes sense.",
    checkP1: "One of these five is enough to have it measured. With two or more it's rarely a coincidence: there is moisture somewhere that can't get out. Call us and we'll go through your situation before you hire anything, even if the answer is that you don't need anything from us.",
    checkP2: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
      "Not sure which machine suits your volume? The",
      " ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "drying calculator" }),
      " works it out from floor area and ceiling height, and ",
      /* @__PURE__ */ jsx(Link, { to: lp("/hoe-drogen-werkt"), children: "how drying works" }),
      " explains why the combination of heat, air movement and dehumidification does the job."
    ] }),
    checklist: [
      "A musty, cellar-like smell that won't go away",
      "Dark damp patches on walls or ceiling",
      "Black or green mould spots, often in corners",
      "Condensation on windows, cold walls or pipes",
      "Damp after building work, a leak or a flood"
    ],
    checkFoot: "Recognise one or more of these? One phone call is all it takes for advice.",
    belOns: "Call us",
    oorzKick: "Cause or symptom",
    oorzH2: "A construction dehumidifier removes damp. Not always the reason it's there.",
    oorzLede: "A construction dehumidifier takes moisture out of the air, and with it out of walls and floors. If that moisture keeps coming back in, you are drying against the tide: you're hiring a machine that works only while it's there. So first look at where it comes from. For three of these five causes, drying is the answer; for two, something else comes first.",
    doorsnedeGrond: "Ground",
    doorsnedeKelder: "Basement",
    doorsnedeBijschrift: "Cross-section of a basement wall: the ground on the left, the room with the dehumidifier on the right. The numbered spots are the five places where moisture gets in, and match the five causes in the list.",
    oorzaken: [
      {
        title: "Condensation",
        desc: "Warm, humid air condenses on cold walls, floors and windows. Typical in basements and poorly ventilated rooms, especially in winter. A construction dehumidifier brings the humidity down; a lasting fix needs better ventilation or insulation."
      },
      {
        title: "Construction moisture after renovation",
        desc: "New plasterwork, screed or masonry brings hundreds of litres of water into a space that is often poorly ventilated. That is exactly what a construction dehumidifier is made for."
      },
      {
        title: "After a leak or water damage",
        desc: "Once the leak is repaired, a construction dehumidifier with a fan dries out the walls and floor again. As long as the leak remains, the damp keeps coming back."
      },
      {
        title: "Rising damp",
        desc: "Groundwater drawn up through the masonry: damp patches and salt deposits at the bottom of the wall, up to a metre high or more. A construction dehumidifier dries the surface, but the damp keeps rising as long as the wall isn't treated."
      },
      {
        title: "Penetrating damp",
        desc: "Rain or groundwater pushing through a façade or a basement wall, often visible after a spell of rain. Here too, drying is only temporary: the wall or basement wall has to be made watertight."
      }
    ],
    helptJa: "A dehumidifier helps",
    helptNee: "Cause first",
    oorzNote: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Is the cause in the wall itself?" }),
      " Rising damp, a leaking basement wall or a basement that needs waterproofing: for that you can turn to",
      " ",
      /* @__PURE__ */ jsx("a", { href: "https://vernast-vochtbestrijding.be/", children: "Vernast Vochtbestrijding" }),
      ", our sister company. Once the cause is gone, a construction dehumidifier dries the residual moisture out of the wall, in that order and not the other way round."
    ] }),
    rvKick: "The target level",
    rvH2: "Aim for 40 to 60% relative humidity.",
    rvP1: "Relative humidity tells you how much moisture the air holds compared with the maximum it can carry at that temperature. For a home, 40 to 60% is the guideline. If it stays higher for long, mould gets a chance, especially on cold walls. Well below that, the air becomes unpleasantly dry.",
    rvP2: "In a basement, temperature plays a part: cold air becomes saturated sooner, and a cold wall draws moisture towards it. That's why a basement can smell musty while the rest of the house is fine. Our dehumidifiers have a built-in humidistat: they throttle back as soon as the set target is reached, instead of running on until the air is bone dry.",
    rvChips: (rapport) => [
      "Hygrometer from €15",
      "Reading before and after included",
      `Measurement report ${rapport}`
    ],
    meterTitel: "Relative humidity",
    meterEenheid: "% RH",
    meterTeDroog: "20% · too dry",
    meterSchimmel: "80% · mould",
    meterUitleg: "Below 40% the air becomes uncomfortable and wood shrinks. Above 60% mould starts on a cold wall. In between is the zone we dry a basement towards, and where you keep it afterwards.",
    schimmelAlt: "Mould growth on a damp interior wall",
    schimmelKick: "In this order",
    schimmelH2: "Dry first, then remove the mould.",
    schimmelP1: "Mould needs moisture. Drying takes away its breeding ground, so it stops growing. But the mould that is already there doesn't disappear with it. You need to remove it after drying, and for large areas it's better to have that done professionally.",
    schimmelP2: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
      "Do it in that order. Treating mould on a wet wall makes little sense: the mould comes back as long as the damp remains, and you'll have paid twice for the same work. For a stubborn case or a musty smell that lingers after drying, there is one more step: an",
      " ",
      /* @__PURE__ */ jsx(Link, { to: lp("/ozonbehandeling"), children: "ozone treatment" }),
      " tackles the spores and the smell in the room itself."
    ] }),
    stapKick: "Step by step",
    stapH2: "Drying a damp basement: how to go about it.",
    stapLede: "Six steps, in this order. Skip step two and you'll be repeating step four every year.",
    stap: "Step",
    kelderStappen: [
      {
        title: "Measure first",
        desc: "A simple hygrometer shows the relative humidity and the temperature. Note them down for a few days, so you know your starting point and can show afterwards that it worked."
      },
      {
        title: "Find the cause",
        desc: "Condensation, a leak, or moisture from outside? See the five causes above. With rising or penetrating damp, have the wall treated first."
      },
      {
        title: "Make space",
        desc: "Move boxes, cupboards and textiles away from the walls. Behind a cupboard against a cold wall is always the dampest spot, and that's where mould starts."
      },
      {
        title: "Place the dehumidifier centrally",
        desc: "In the middle of the room, doors and basement windows shut: you're drying the basement, not the garden. With a condensate hose to a drain, you don't have to empty a tank."
      },
      {
        title: "Heat below 15 °C",
        desc: "A cold basement dries slowly with a condensation dehumidifier: cold air simply holds less moisture. A site heater brings the temperature up, or you choose a desiccant dehumidifier."
      },
      {
        title: "Keep it dry afterwards",
        desc: "Once the room is dry, ventilate regularly and keep an eye on the humidity. Otherwise you'll be back where you started in a few months."
      }
    ],
    pakKick: "Which machine",
    pakH2: "Three dehumidifiers, one for each volume.",
    pakLede: "Not the heaviest machine, but the one that suits your room. A dehumidifier that's too big for a small basement doesn't dry any faster; it just uses more electricity.",
    refKick: "From the field",
    refH2: "Basements we got dry.",
    refLede: "Three sites with their readings, their duration and the machines that were there. If one looks like your situation, you'll know straight away what to expect.",
    tipsKick: "After collection",
    tipsH2: "Deal with damp for good, not again every year.",
    tipsLede: "The dehumidifier goes back with us. What happens next decides whether you'll be calling us again in a year. Three things that make the difference.",
    tips: [
      {
        title: "Find the cause",
        desc: "A construction dehumidifier solves the symptom. Have the cause investigated, or you'll be drying the same wall every year."
      },
      {
        title: "Ventilate every day",
        desc: "Ten minutes of cross-ventilation does more than a window left ajar all day. Especially in a basement or storeroom."
      },
      {
        title: "Keep an eye on the hygrometer",
        desc: "If the humidity stays above 60%, the damp is coming back. You'll see it on the meter before you see it on the wall."
      }
    ],
    faqTitel: "What customers with a damp basement ask us.",
    faqs: [
      { q: "How long does it take to dry a damp basement?", a: "Depending on the situation, 2 to 6 weeks. Our moisture reading confirms when it's done." },
      { q: "Does a construction dehumidifier work for condensation problems?", a: "Yes, especially combined with good ventilation." },
      {
        q: "Does a construction dehumidifier help against rising damp?",
        a: "Not permanently. A construction dehumidifier dries the air and the surface of the wall, but groundwater keeps rising through the masonry as long as the wall hasn't been treated. Have the cause dealt with first, for example with a damp-proof injection; after that, a construction dehumidifier dries the residual moisture out of the wall."
      },
      {
        q: "What is a good humidity level in the home?",
        a: "As a guideline, keep the relative humidity between 40 and 60%. If it stays above that for long, especially in a cold basement, mould gets a chance. Well below that, the air becomes unpleasantly dry. A simple hygrometer shows where you stand."
      },
      {
        q: "How do I know whether the damp comes from condensation or from outside?",
        a: "Condensation is mainly found in the coldest spots: corners, behind cupboards, around windows. It gets worse in winter and with little ventilation. Rising damp shows at the bottom of the wall, often with salt deposits. Penetrating damp appears after rain, on the façade or ground side. If in doubt, have it looked at on site."
      },
      {
        q: "Does a construction dehumidifier get rid of mould?",
        a: "No. Drying takes away the breeding ground so mould stops growing, but you still have to remove the mould itself. For large areas or mould that keeps coming back, professional mould removal is the safe choice."
      },
      { q: "Is a construction dehumidifier safe around children and pets?", a: "Yes, completely safe. Keep an eye on the water container every day." }
    ],
    verderTitel: "Further reading on damp basements",
    verderLezen: (lp) => [
      {
        kop: "Machines for basements and damp rooms",
        links: [
          { to: lp(toestelPad("ttk170")), toestel: "ttk170", label: "Boost", sub: "Compact, for one room or a small basement." },
          { to: lp(toestelPad("ttk650")), toestel: "ttk650", label: "Ultimate", sub: "For large basements and a lot of moisture." },
          { to: lp(toestelPad("teddh20")), toestel: "teddh20", label: "Site heater for a cold basement or garage", sub: "Brings the room up to working temperature." }
        ]
      },
      {
        kop: "Understand first, then hire",
        links: [
          { to: lp("/hoe-drogen-werkt"), label: "How drying works: heat, air and dehumidification" },
          { to: lp("/gids/condensdroger-of-adsorptiedroger"), label: "Guide: condensation or desiccant dehumidifier in a cold basement?" },
          { to: lp("/gids/stroomverbruik-bouwdroger"), label: "Guide: how much electricity does a construction dehumidifier use?" },
          { to: lp("/waarom-bouwdroging"), label: "Why dry your building rather than just wait" },
          { to: lp("/ozonbehandeling"), label: "A musty smell that lingers: ozone treatment" }
        ]
      },
      {
        kop: "Planning and further reading",
        links: [
          { to: lp("/verhuur/calculator"), label: "Calculate a drying package by floor area" },
          { to: lp("/waterschade"), label: "Flooded basement? Drying water damage" },
          { to: lp("/bouwdroger-huren-west-vlaanderen"), label: "Dehumidifier hire in West Flanders" },
          { to: lp("/bouwdroger-huren-antwerpen"), label: "Dehumidifier hire in the province of Antwerp" }
        ]
      }
    ],
    slotKick: "Tackle it now",
    slotH3: "The longer the damp stays, the more there is to dry out.",
    slotP: "Have your situation assessed before you hire anything. We measure, work out the package and deliver within 24 hours. And if drying isn't the answer, we'll tell you that too.",
    slotAlt: "Vernast specialist measuring the moisture content of a wall",
    contactKicker: "A question about your basement?",
    contactTitel: "Not sure whether drying is the solution for you?",
    contactLede: "Describe what you see and smell, and we'll tell you what the likely cause is and whether a construction dehumidifier will help. Even if the answer is that you don't need anything from us.",
    contactOnderwerpen: [
      "Damp basement or storeroom",
      "Mould on walls or ceiling",
      "Damp after building work",
      "Rising or penetrating damp",
      "Something else"
    ],
    contactPlaceholder: "E.g. 25 m² basement, musty smell and dark patches at the bottom of the wall, mostly in winter."
  }
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/RenovatiePage.tsx");
const RAPPORT = EXTRAS.find((x) => x.k === "rapport");
const GEVAAR_ICONEN = [MoldIcon, HouseIcon, CardIcon];
const OORZAAK_ICONEN = [DropIcon, BrushIcon, RefreshIcon, CellarIcon, HouseIcon];
const OORZAAK_HELPT = [true, true, true, false, false];
const STAP_ICONEN = [
  GaugeIcon,
  ChecklistIcon,
  DoosIcon,
  DrogerIcon,
  ThermoIcon,
  WindIcon
];
const TIP_ICONEN = [ChecklistIcon, RefreshIcon, DropIcon];
const REFERENTIES = ["kelder-drogen-brugge", "kelder-drogen-antwerpen", "schimmelsanering-winkelkelder"].map(getRealisatie).filter((r) => !!r);
const Muurdoorsnede = ({ grond, kelder }) => /* @__PURE__ */ jsxs("div", { className: "vbron", "aria-hidden": "true", children: [
  /* @__PURE__ */ jsx("span", { className: "vb-grond" }),
  /* @__PURE__ */ jsx("span", { className: "vb-muur" }),
  /* @__PURE__ */ jsx("span", { className: "vb-plafond" }),
  /* @__PURE__ */ jsx("span", { className: "vb-ruimte" }),
  /* @__PURE__ */ jsx("span", { className: "vb-vloer" }),
  /* @__PURE__ */ jsx("span", { className: "vb-droger" }),
  /* @__PURE__ */ jsx("span", { className: "vb-zuig" }),
  /* @__PURE__ */ jsx("span", { className: "vb-zuig", style: { "--d": "1.5s" } }),
  /* @__PURE__ */ jsx("span", { className: "vb-zuig", style: { "--d": "3s" } }),
  /* @__PURE__ */ jsx("span", { className: "vb-tag buiten", children: grond }),
  /* @__PURE__ */ jsx("span", { className: "vb-tag binnen", children: kelder }),
  /* @__PURE__ */ jsx("span", { className: "vb-p cond" }),
  /* @__PURE__ */ jsx("span", { className: "vb-p cond", style: { "--d": "1.2s" } }),
  /* @__PURE__ */ jsx("span", { className: "vb-p cond", style: { "--d": "2.4s" } }),
  /* @__PURE__ */ jsx("span", { className: "vb-p bouw", style: { left: "52%", "--d": ".4s" } }),
  /* @__PURE__ */ jsx("span", { className: "vb-p bouw", style: { left: "63%", "--d": "1.6s" } }),
  /* @__PURE__ */ jsx("span", { className: "vb-p bouw", style: { left: "72%", "--d": "2.8s" } }),
  /* @__PURE__ */ jsx("span", { className: "vb-p lek", style: { right: "12%", "--d": ".8s" } }),
  /* @__PURE__ */ jsx("span", { className: "vb-p op", style: { left: "27%" } }),
  /* @__PURE__ */ jsx("span", { className: "vb-p op", style: { left: "31%", "--d": "1.4s" } }),
  /* @__PURE__ */ jsx("span", { className: "vb-p op", style: { left: "34%", "--d": "2.6s" } }),
  /* @__PURE__ */ jsx("span", { className: "vb-p door", style: { top: "44%", "--d": ".2s" } }),
  /* @__PURE__ */ jsx("span", { className: "vb-p door", style: { top: "56%", "--d": "2.3s" } }),
  /* @__PURE__ */ jsx("span", { className: "vb-nr n1", children: "1" }),
  /* @__PURE__ */ jsx("span", { className: "vb-nr n2", children: "2" }),
  /* @__PURE__ */ jsx("span", { className: "vb-nr n3", children: "3" }),
  /* @__PURE__ */ jsx("span", { className: "vb-nr n4", children: "4" }),
  /* @__PURE__ */ jsx("span", { className: "vb-nr n5", children: "5" })
] });
const RenovatiePage = () => {
  const taal = useTaal();
  const t = useCopy(RN_COPY);
  const lp = useLokaalPad();
  const toon = useToonBedrag();
  const rapportBedrag = RAPPORT ? toon(RAPPORT.price) : null;
  const rvChips = t.rvChips(
    taal !== "nl" && rapportBedrag ? `${rapportBedrag.tekst} ${rapportBedrag.label}` : ""
  );
  return /* @__PURE__ */ jsxs("div", { className: "v3c rn-page", children: [
    /* @__PURE__ */ jsx(
      PageMeta,
      {
        ...useSeo("renovatie"),
        jsonLd: [
          serviceSchema({
            name: t.schemaNaam,
            description: t.schemaBeschrijving,
            path: lp("/renovatie"),
            serviceType: t.schemaType
          }),
          /*
            De vragen onderaan deze pagina, ook machineleesbaar. Ze stonden
            enkel zichtbaar op de pagina; daardoor kon een AI-antwoord er wel
            uit citeren, maar moest het de vraag-antwoordparen zelf uit de
            HTML afleiden. Zelfde tekst, dus schema en pagina blijven gelijk.
          */
          faqSchema(t.faqs.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema([
            { name: t.kruimelHome, path: lp("/") },
            { name: t.kruimelPagina, path: lp("/renovatie") }
          ])
        ]
      }
    ),
    /* @__PURE__ */ jsx(V3Header, { lightAfter: 660, darkUntil: ".redtop" }),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("div", { className: "redtop", children: /* @__PURE__ */ jsx("section", { className: "hero", children: /* @__PURE__ */ jsxs("div", { className: "wrap hero-grid", children: [
        /* @__PURE__ */ jsxs("div", { className: "hero-copy", children: [
          /* @__PURE__ */ jsx("span", { className: "kick", children: t.heroKick }),
          /* @__PURE__ */ jsx("h1", { children: t.h1 }),
          /* @__PURE__ */ jsx("p", { children: t.heroP }),
          /* @__PURE__ */ jsxs("div", { className: "hcta", children: [
            /* @__PURE__ */ jsxs(Link, { className: "btn btn-white", to: lp("/verhuur/calculator"), children: [
              t.cta,
              /* @__PURE__ */ jsx(ArrowRightIcon, {})
            ] }),
            /* @__PURE__ */ jsxs("a", { className: "btn btn-ghost", href: `tel:${CONTACT.phoneE164}`, children: [
              /* @__PURE__ */ jsx(PhoneIcon, {}),
              " ",
              CONTACT.phoneLocal
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "hero-vis", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              className: "framed",
              src: "/vernast/case-kelder.webp",
              alt: t.heroAlt,
              width: 800,
              height: 600,
              loading: "lazy",
              decoding: "async"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "fbadge rd", style: { bottom: "60px", left: "-6%" }, children: [
            /* @__PURE__ */ jsx("span", { className: "ic", children: /* @__PURE__ */ jsx(DropIcon, { size: 15 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              t.badgeTitel,
              /* @__PURE__ */ jsx("small", { children: t.badgeSub })
            ] })
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { className: "wrap", children: /* @__PURE__ */ jsxs("div", { className: "trust", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(GaugeIcon, { size: 19 }),
          " ",
          t.trust[0]
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(TruckIcon, { size: 19 }),
          " ",
          t.trust[1]
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(ChecklistIcon, { size: 19 }),
          " ",
          t.trust[2]
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(SupportIcon, { size: 19 }),
          " ",
          t.trust[3]
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "sw", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
          /* @__PURE__ */ jsx("span", { className: "kick", children: t.gevarenKick }),
          /* @__PURE__ */ jsx("h2", { className: "sec", children: t.gevarenH2 }),
          /* @__PURE__ */ jsx("p", { className: "lede", children: t.gevarenLede })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "g3", children: t.gevaren.map(({ title, desc }, i) => {
          const Icon = GEVAAR_ICONEN[i];
          return /* @__PURE__ */ jsxs(Reveal, { from: "up", delay: i * 0.08, className: "kaart", children: [
            /* @__PURE__ */ jsx("div", { className: "ki", children: /* @__PURE__ */ jsx(Icon, { size: 20 }) }),
            /* @__PURE__ */ jsx("h3", { children: title }),
            /* @__PURE__ */ jsx("p", { children: desc })
          ] }, title);
        }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "sr", children: /* @__PURE__ */ jsxs("div", { className: "wrap split", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "kick", children: t.checkKick }),
          /* @__PURE__ */ jsx("h2", { className: "sec", children: t.checkH2 }),
          /* @__PURE__ */ jsx("p", { className: "lede", children: t.checkP1 }),
          /* @__PURE__ */ jsx("p", { className: "lede", children: t.checkP2(lp) })
        ] }),
        /* @__PURE__ */ jsxs(Reveal, { from: "right", className: "checkcard", children: [
          /* @__PURE__ */ jsx("ul", { children: t.checklist.map((item) => /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx(CheckIcon, { size: 16, strokeWidth: 3 }),
            /* @__PURE__ */ jsx("span", { children: item })
          ] }, item)) }),
          /* @__PURE__ */ jsxs("div", { className: "cfoot", children: [
            /* @__PURE__ */ jsx("p", { children: t.checkFoot }),
            /* @__PURE__ */ jsxs("a", { className: "btn", href: `tel:${CONTACT.phoneE164}`, children: [
              /* @__PURE__ */ jsx(PhoneIcon, {}),
              " ",
              t.belOns
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "sw", id: "oorzaken", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
          /* @__PURE__ */ jsx("span", { className: "kick", children: t.oorzKick }),
          /* @__PURE__ */ jsx("h2", { className: "sec", children: t.oorzH2 }),
          /* @__PURE__ */ jsx("p", { className: "lede", children: t.oorzLede })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "split boven", children: [
          /* @__PURE__ */ jsxs(Reveal, { from: "left", className: "vbron-kolom", children: [
            /* @__PURE__ */ jsx(Muurdoorsnede, { grond: t.doorsnedeGrond, kelder: t.doorsnedeKelder }),
            /* @__PURE__ */ jsx("p", { className: "vbijschrift", children: t.doorsnedeBijschrift })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "oorzlijst", children: t.oorzaken.map(({ title, desc }, i) => {
            const Icon = OORZAAK_ICONEN[i];
            const helpt = OORZAAK_HELPT[i];
            return /* @__PURE__ */ jsxs(Reveal, { from: "up", delay: i * 0.06, className: "oorz", children: [
              /* @__PURE__ */ jsxs("span", { className: "oic", children: [
                /* @__PURE__ */ jsx(Icon, { size: 19 }),
                /* @__PURE__ */ jsx("i", { children: i + 1 })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("div", { className: "okop", children: [
                  /* @__PURE__ */ jsx("h3", { children: title }),
                  /* @__PURE__ */ jsxs("span", { className: `verdict ${helpt ? "ja" : "nee"}`, children: [
                    helpt ? /* @__PURE__ */ jsx(CheckIcon, { size: 12 }) : /* @__PURE__ */ jsx(DropIcon, { size: 12 }),
                    helpt ? t.helptJa : t.helptNee
                  ] })
                ] }),
                /* @__PURE__ */ jsx("p", { children: desc })
              ] })
            ] }, title);
          }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "note", children: t.oorzNote })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "sr", children: /* @__PURE__ */ jsxs("div", { className: "wrap split", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "kick", children: t.rvKick }),
          /* @__PURE__ */ jsx("h2", { className: "sec", children: t.rvH2 }),
          /* @__PURE__ */ jsx("p", { className: "lede", children: t.rvP1 }),
          /* @__PURE__ */ jsx("p", { className: "lede", children: t.rvP2 }),
          /* @__PURE__ */ jsx("div", { className: "chips", children: rvChips.map((c) => /* @__PURE__ */ jsx("span", { children: c }, c)) })
        ] }),
        /* @__PURE__ */ jsx(Reveal, { from: "right", className: "split-vis", children: /* @__PURE__ */ jsxs("div", { className: "meter wandelt", children: [
          /* @__PURE__ */ jsx("div", { className: "t", children: t.meterTitel }),
          /* @__PURE__ */ jsxs("div", { className: "big", children: [
            "40 – 60",
            /* @__PURE__ */ jsx("small", { children: t.meterEenheid })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "scale", style: { "--at": "50%" }, children: /* @__PURE__ */ jsx("b", {}) }),
          /* @__PURE__ */ jsxs("div", { className: "legend", children: [
            /* @__PURE__ */ jsx("span", { children: t.meterTeDroog }),
            /* @__PURE__ */ jsx("span", { children: t.meterSchimmel })
          ] }),
          /* @__PURE__ */ jsx("p", { style: { fontSize: "13px", color: "var(--txt-mid)", margin: "16px 0 0", lineHeight: 1.6 }, children: t.meterUitleg })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "sw", children: /* @__PURE__ */ jsxs("div", { className: "wrap split rev", children: [
        /* @__PURE__ */ jsx(Reveal, { from: "left", className: "split-vis", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/vernast/schimmel-muur.webp",
            alt: t.schimmelAlt,
            width: 800,
            height: 600,
            loading: "lazy",
            decoding: "async"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "kick", children: t.schimmelKick }),
          /* @__PURE__ */ jsx("h2", { className: "sec", children: t.schimmelH2 }),
          /* @__PURE__ */ jsx("p", { className: "lede", children: t.schimmelP1 }),
          /* @__PURE__ */ jsx("p", { className: "lede", children: t.schimmelP2(lp) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "sr", id: "stappenplan", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
          /* @__PURE__ */ jsx("span", { className: "kick", children: t.stapKick }),
          /* @__PURE__ */ jsx("h2", { className: "sec", children: t.stapH2 }),
          /* @__PURE__ */ jsx("p", { className: "lede", children: t.stapLede })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "stapkaarten", children: t.kelderStappen.map(({ title, desc }, i) => {
          const Icon = STAP_ICONEN[i];
          return /* @__PURE__ */ jsxs(Reveal, { from: "up", delay: i % 3 * 0.08, className: "stk", children: [
            /* @__PURE__ */ jsx("div", { className: "stkic", children: /* @__PURE__ */ jsx(Icon, { size: 20 }) }),
            /* @__PURE__ */ jsxs("span", { className: "stknr", children: [
              t.stap,
              " ",
              i + 1
            ] }),
            /* @__PURE__ */ jsx("h3", { children: title }),
            /* @__PURE__ */ jsx("p", { children: desc })
          ] }, title);
        }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "sw", id: "pakketten", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsxs("div", { className: "sec-head mid", children: [
          /* @__PURE__ */ jsx("span", { className: "kick", children: t.pakKick }),
          /* @__PURE__ */ jsx("h2", { className: "sec", children: t.pakH2 }),
          /* @__PURE__ */ jsx("p", { className: "lede", children: t.pakLede })
        ] }),
        /* @__PURE__ */ jsx(Pakketkaarten, {})
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "sr", id: "realisaties", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
          /* @__PURE__ */ jsx("span", { className: "kick", children: t.refKick }),
          /* @__PURE__ */ jsx("h2", { className: "sec", children: t.refH2 }),
          /* @__PURE__ */ jsx("p", { className: "lede", children: t.refLede })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "refs", children: REFERENTIES.map((r, i) => /* @__PURE__ */ jsx(Reveal, { from: "up", delay: i % 3 * 0.08, children: /* @__PURE__ */ jsxs(Link, { className: "rz", to: lp(`/realisaties/${r.slug}`), children: [
          /* @__PURE__ */ jsx("img", { src: r.kaart, alt: r.kaartAlt, width: 640, height: 420, loading: "lazy", decoding: "async" }),
          /* @__PURE__ */ jsxs("div", { className: "rzt", children: [
            /* @__PURE__ */ jsx("span", { className: "rzl", children: r.locatie }),
            /* @__PURE__ */ jsx("h3", { children: r.titel })
          ] })
        ] }) }, r.slug)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "sw", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
          /* @__PURE__ */ jsx("span", { className: "kick", children: t.tipsKick }),
          /* @__PURE__ */ jsx("h2", { className: "sec", children: t.tipsH2 }),
          /* @__PURE__ */ jsx("p", { className: "lede", children: t.tipsLede })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "g3", children: t.tips.map(({ title, desc }, i) => {
          const Icon = TIP_ICONEN[i];
          return /* @__PURE__ */ jsxs(Reveal, { from: "up", delay: i * 0.08, className: "kaart", children: [
            /* @__PURE__ */ jsx("div", { className: "ki", children: /* @__PURE__ */ jsx(Icon, { size: 20 }) }),
            /* @__PURE__ */ jsx("h3", { children: title }),
            /* @__PURE__ */ jsx("p", { children: desc })
          ] }, title);
        }) })
      ] }) }),
      /* @__PURE__ */ jsx(
        FaqBlok,
        {
          titel: t.faqTitel,
          vragen: t.faqs,
          sleutel: "rn-faq"
        }
      ),
      /* @__PURE__ */ jsx(
        VerderLezen,
        {
          titel: t.verderTitel,
          groepen: t.verderLezen(lp),
          kicker: null,
          children: /* @__PURE__ */ jsxs("div", { className: "manband", children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-t", children: [
              /* @__PURE__ */ jsx("span", { className: "mbk", children: t.slotKick }),
              /* @__PURE__ */ jsx("h3", { children: t.slotH3 }),
              /* @__PURE__ */ jsx("p", { children: t.slotP }),
              /* @__PURE__ */ jsxs("div", { className: "mb-cta", children: [
                /* @__PURE__ */ jsxs(Link, { className: "btn btn-white", to: lp("/verhuur/calculator"), children: [
                  t.cta,
                  /* @__PURE__ */ jsx(ArrowRightIcon, {})
                ] }),
                /* @__PURE__ */ jsxs("a", { className: "btn btn-ghost", href: `tel:${CONTACT.phoneE164}`, children: [
                  /* @__PURE__ */ jsx(PhoneIcon, {}),
                  " ",
                  CONTACT.phoneLocal
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              "img",
              {
                className: "mb-man",
                src: "/vernast/man-vochtmeter.webp",
                alt: t.slotAlt,
                width: 600,
                height: 900,
                loading: "lazy",
                decoding: "async"
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        ContactBlok,
        {
          kicker: t.contactKicker,
          titel: t.contactTitel,
          lede: t.contactLede,
          onderwerpen: t.contactOnderwerpen,
          placeholder: t.contactPlaceholder
        }
      )
    ] }),
    /* @__PURE__ */ jsx(V3Footer, {})
  ] });
};
export {
  RenovatiePage as default
};
