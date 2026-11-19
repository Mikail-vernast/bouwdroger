import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { G as GidsShell } from "./GidsShell-BMzhBGtD.js";
import { u as useSeo } from "./seo-BMvlJeai.js";
import { d as drogersInTaal, e as euro, a as priceForWeeks, c as offerCatalogSchema, g as DROGERS } from "./schema-VJMHyxOJ.js";
import { u as useCopy, a as useLokaalPad, b as useTaal, c as useToonBedrag, R as REGIO_ROUTES, l as lokaalPad } from "../main.mjs";
import { t as toestelPad } from "./verhuur-CgnDb-wO.js";
import { C as CONTACT } from "./PageMeta-BXulEWcY.js";
import "./V3Header-BeIMcMg7.js";
import "react";
import "./FontPreload-C6Rzq6ld.js";
import "vite-react-ssg";
import "./V3Footer-9z4J1I4x.js";
import "./verhuur-8XCQs1EE.js";
import "./packages-DdkKuPcF.js";
import "./tarieven-ZrzMF0e-.js";
import "./FaqBlok-Bkr2MHqW.js";
/* empty css                                */
import "./verhuur.fr-CrIPL5Eo.js";
import "lucide-react";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/LuchtontvochtigerHurenPage.copy.tsx");
const VOORZETSEL_FR = {
  Anvers: "dans la province d'Anvers",
  Bruxelles: "à Bruxelles",
  Limbourg: "dans le Limbourg",
  Hainaut: "dans le Hainaut",
  Namur: "dans la province de Namur",
  Luxembourg: "dans la province de Luxembourg",
  Liège: "dans la province de Liège"
};
function inProvincie(naam) {
  return VOORZETSEL_FR[naam] ?? `en ${naam}`;
}
const nl = {
  crumb: "Luchtontvochtiger huren",
  home: "Home",
  kick: "Verhuur · luchtontvochtigers",
  h1: "Luchtontvochtiger huren voor kelder, waterschade en nieuwbouw",
  intro: (c, b) => /* @__PURE__ */ jsxs("p", { children: [
    "Een vochtige kelder, een lek dat de vloer onder water zette of een nieuwbouw vol natte chape: een professionele luchtontvochtiger haalt het vocht eruit, dag en nacht.",
    c.litersMin && c.litersMax ? ` Onze condensontvochtigers verwijderen ${c.litersMin} tot ${c.litersMax} liter water per dag` : "",
    c.vanaf !== null ? `, te huur vanaf ${b.prijs(c.vanaf)} per dag ${b.btw}.` : ".",
    " Zelf afhalen of laten leveren en installeren, in heel Vlaanderen."
  ] }),
  faq: (c, b) => [
    ...c.goedkoopste && c.goedkoopsteWeek !== null ? [
      {
        question: "Wat kost een ontvochtiger huren?",
        answer: `Onze luchtontvochtigers huurt u vanaf ${b.prijs(c.goedkoopste.perDay)} per dag ${b.btw}, voor de ${c.goedkoopste.short}. Een week kost daarmee ${b.prijs(c.goedkoopsteWeek)} ${b.btw}. De grotere modellen en alle huurperiodes staan op onze prijspagina.`
      }
    ] : [],
    {
      question: "Is een luchtontvochtiger hetzelfde als een bouwdroger?",
      answer: "Een bouwdroger is een professionele luchtontvochtiger: hetzelfde principe, maar met veel meer capaciteit en gebouwd om dag en nacht te draaien op een werf. Onze toestellen zijn condensontvochtigers."
    },
    {
      question: "Welke luchtontvochtiger heb ik nodig voor mijn kelder?",
      answer: "Dat hangt af van het volume van de kelder en hoe nat hij is. Kijk naar het bereik in m³ van elk toestel, of laat de Calculator het uitrekenen. Is de kelder kouder dan ongeveer 15 °C, zet er dan een bouwkachel bij: in de koude verliest een condensontvochtiger veel rendement."
    },
    {
      question: "Kan ik een luchtontvochtiger zelf ophalen?",
      answer: `Ja. Losse toestellen haalt u af in ons magazijn aan de ${CONTACT.street} in ${CONTACT.city}, op werkdagen van 08:00 tot 17:00. Liever geleverd en geplaatst? Kies dan een droogpakket met levering en installatie.`
    }
  ],
  catalogusNaam: "Luchtontvochtigers te huur",
  gKick: "Ons gamma",
  gH2: "Welke luchtontvochtiger huurt u?",
  /* `btw` blijft in het Nederlands ongebruikt: daar staat het label vast in de zin. */
  gLede: (_btw) => "Drie condensontvochtigers, van een appartement tot een grote werf. De capaciteit is het maximum in liter per 24 uur uit de technische fiche; het bereik is het ruimtevolume waarvoor het toestel bedoeld is. Alle prijzen exclusief btw.",
  kaartCapaciteit: (liters, volume) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "Tot ",
    /* @__PURE__ */ jsxs("b", { children: [
      liters,
      " liter per dag"
    ] }),
    " · ruimtes tot ",
    /* @__PURE__ */ jsxs("b", { children: [
      volume,
      " m³"
    ] })
  ] }),
  kaartPrijs: (dag, week) => /* @__PURE__ */ jsxs(Fragment, { children: [
    dag,
    " ",
    /* @__PURE__ */ jsxs("small", { children: [
      "per dag · ",
      week,
      " per week"
    ] })
  ] }),
  kaartMeer: (kort) => `Bekijk de ${kort}`,
  note: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("b", { children: "Niet zeker welk formaat?" }),
    " De ",
    /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "droogcalculator" }),
    " rekent uit hoeveel liter per dag uw ruimte nodig heeft. Wil u meteen een volledig pakket met ventilatoren en levering, gebruik dan de ",
    /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "droogcalculator" }),
    ". Alle bedragen per periode staan op ",
    /* @__PURE__ */ jsx(Link, { to: lp("/prijzen"), children: "onze prijspagina" }),
    "."
  ] }),
  wH2: "Waarvoor huurt u een luchtontvochtiger?",
  kelderH3: "Een vochtige kelder",
  kelderP: (lp, kachelPad) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "Kelders zijn koel en vaak slecht verlucht, waardoor de luchtvochtigheid hoog blijft en er een muffe geur of schimmel ontstaat. Een luchtontvochtiger haalt die vochtige lucht omlaag. Let op de temperatuur: onder ongeveer 15 °C werkt een condensontvochtiger duidelijk minder goed. In een koude kelder zetten we daarom een ",
    /* @__PURE__ */ jsx(Link, { to: lp(kachelPad), children: "elektrische bouwkachel" }),
    " ",
    "bij. Meer over kelders en schimmel leest u op ",
    /* @__PURE__ */ jsx(Link, { to: lp("/renovatie"), children: "vochtige kelder of schimmel drogen" }),
    ". Blijft een kelder telkens opnieuw nat, dan zit de oorzaak meestal in de muren zelf; ontvochtigen verhelpt dan het gevolg, niet de bron."
  ] }),
  waterH3: "Na waterschade",
  waterP: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "Na een lek of overstroming telt elke dag. Hoe langer vloeren, muren en isolatie nat blijven, hoe groter de kans op schimmel en blijvende schade. Een luchtontvochtiger samen met één of meer ventilatoren droogt het snelst: de ventilator maakt het vocht los van de oppervlakken, de ontvochtiger haalt het uit de lucht. Zit het water onder een zwevende vloer of in een wand, lees dan ",
    /* @__PURE__ */ jsx(Link, { to: lp("/gids/condensdroger-of-adsorptiedroger"), children: "condensdroger of adsorptiedroger" }),
    ". Alles over de aanpak staat op ",
    /* @__PURE__ */ jsx(Link, { to: lp("/waterschade"), children: "drogen na waterschade" }),
    "."
  ] }),
  nieuwbouwH3: "Nieuwbouw en renovatie",
  nieuwbouwP: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "Chape en pleisterwerk brengen honderden liters water in een woning. Zonder ontvochtiging droogt dat traag en kan de vloerlegger of schilder niet starten. Hoe lang dat duurt per dikte, staat in",
    " ",
    /* @__PURE__ */ jsx(Link, { to: lp("/gids/hoe-lang-moet-chape-drogen"), children: "hoe lang moet chape drogen" }),
    "; wat we op de werf doen, leest u op ",
    /* @__PURE__ */ jsx(Link, { to: lp("/nieuwbouw-drogen"), children: "chape en pleisterwerk drogen" }),
    "."
  ] }),
  proH2: "Professioneel of huishoudelijk?",
  proP: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "Een luchtontvochtiger uit de winkel is gemaakt voor een slaapkamer of een wasplaats en haalt doorgaans maar een fractie op van wat een bouwdroger per dag verwijdert. Voor een kelder die echt nat is, voor waterschade of voor een nieuwbouw loopt zo'n toestel achter de feiten aan. Een professionele condensontvochtiger draait continu, voert het water af via een slang of condenspomp en is gemaakt voor weken aan een stuk. Wat hij aan stroom verbruikt, rekenen we voor in",
    " ",
    /* @__PURE__ */ jsx(Link, { to: lp("/gids/stroomverbruik-bouwdroger"), children: "stroomverbruik van een bouwdroger" }),
    "."
  ] }),
  afH2: "Zelf afhalen of laten leveren",
  afZelf: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("b", { children: "Zelf afhalen." }),
    " Losse toestellen reserveert u online en haalt u op in ons magazijn in",
    " ",
    CONTACT.city,
    ". Zie ",
    /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/afhalen"), children: "losse toestellen huren en afhalen" }),
    "."
  ] }),
  afLever: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("b", { children: "Laten leveren en installeren." }),
    " Kiest u een droogpakket, dan brengen onze techniekers de toestellen binnen 24 uur, plaatsen ze ze, meten ze het vocht voor en na en halen ze alles weer op. Zie ",
    /* @__PURE__ */ jsx(Link, { to: lp("/levering"), children: "levering en installatie" }),
    "."
  ] }),
  regioH2: "Luchtontvochtiger huren in uw provincie",
  regioIntro: "We leveren in heel Vlaanderen. Per provincie:",
  regioLink: (naam) => `bouwdroger huren in ${naam}`,
  regioEn: " en "
};
const fr = {
  crumb: "Location de déshumidificateur",
  home: "Accueil",
  kick: "Location · déshumidificateurs",
  h1: "Louer un déshumidificateur pour une cave, des dégâts des eaux ou une nouvelle construction",
  intro: (c, b) => /* @__PURE__ */ jsxs("p", { children: [
    "Une cave humide, une fuite qui a inondé le sol ou une nouvelle construction pleine de chape humide : un déshumidificateur professionnel en retire l'humidité, jour et nuit.",
    c.litersMin && c.litersMax ? ` Nos déshumidificateurs à condensation retirent ${c.litersMin} à ${c.litersMax} litres d'eau par jour` : "",
    c.vanaf !== null ? `, à louer à partir de ${b.prijs(c.vanaf)} par jour ${b.btw}.` : ".",
    " À enlever vous-même ou livré et installé, dans toute la Flandre."
  ] }),
  faq: (c, b) => [
    ...c.goedkoopste && c.goedkoopsteWeek !== null ? [
      {
        question: "Combien coûte la location d'un déshumidificateur ?",
        answer: `Vous louez nos déshumidificateurs à partir de ${b.prijs(c.goedkoopste.perDay)} par jour ${b.btw}, pour le ${c.goedkoopste.short}. Une semaine coûte ainsi ${b.prijs(c.goedkoopsteWeek)} ${b.btw}. Les modèles plus grands et toutes les durées de location figurent sur notre page des prix.`
      }
    ] : [],
    {
      question: "Un déshumidificateur est-il la même chose qu'un déshumidificateur de chantier ?",
      answer: "Un déshumidificateur de chantier est un déshumidificateur professionnel : le même principe, mais avec beaucoup plus de capacité et conçu pour tourner jour et nuit sur un chantier. Nos appareils sont des déshumidificateurs à condensation."
    },
    {
      question: "Quel déshumidificateur me faut-il pour ma cave ?",
      answer: "Cela dépend du volume de la cave et de son degré d'humidité. Regardez la plage en m³ de chaque appareil, ou laissez le calculateur faire le calcul. Si la cave est plus froide qu'environ 15 °C, ajoutez un chauffage de chantier : au froid, un déshumidificateur à condensation perd beaucoup de rendement."
    },
    {
      question: "Puis-je enlever moi-même un déshumidificateur ?",
      answer: `Oui. Vous enlevez les appareils à la pièce dans notre entrepôt, ${CONTACT.street} à ${CONTACT.city}, les jours ouvrables de 8 h à 17 h. Vous préférez une livraison et une installation ? Choisissez alors un pack de séchage avec livraison et installation.`
    }
  ],
  catalogusNaam: "Déshumidificateurs à louer",
  gKick: "Notre gamme",
  gH2: "Quel déshumidificateur louer ?",
  gLede: (btw) => `Trois déshumidificateurs à condensation, de l'appartement au grand chantier. La capacité est le maximum en litres par 24 heures selon la fiche technique ; la plage est le volume de pièce auquel l'appareil est destiné. Tous les prix ${btw}.`,
  kaartCapaciteit: (liters, volume) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "Jusqu'à ",
    /* @__PURE__ */ jsxs("b", { children: [
      liters,
      " litres par jour"
    ] }),
    " · pièces jusqu'à ",
    /* @__PURE__ */ jsxs("b", { children: [
      volume,
      " m³"
    ] })
  ] }),
  kaartPrijs: (dag, week) => /* @__PURE__ */ jsxs(Fragment, { children: [
    dag,
    " ",
    /* @__PURE__ */ jsxs("small", { children: [
      "par jour · ",
      week,
      " par semaine"
    ] })
  ] }),
  kaartMeer: (kort) => `Voir le ${kort}`,
  note: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("b", { children: "Pas sûr du format ?" }),
    " Le ",
    /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "calculateur de séchage" }),
    " calcule combien de litres par jour votre pièce nécessite. Vous voulez directement un pack complet avec ventilateurs et livraison ? Utilisez alors le",
    " ",
    /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "calculateur de séchage" }),
    ". Tous les montants par période figurent sur ",
    /* @__PURE__ */ jsx(Link, { to: lp("/prijzen"), children: "notre page des prix" }),
    "."
  ] }),
  wH2: "Pourquoi louer un déshumidificateur ?",
  kelderH3: "Une cave humide",
  kelderP: (lp, kachelPad) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "Les caves sont fraîches et souvent mal ventilées : l'humidité de l'air y reste élevée, et une odeur de moisi ou des moisissures apparaissent. Un déshumidificateur fait baisser cette humidité. Attention à la température : sous environ 15 °C, un déshumidificateur à condensation fonctionne nettement moins bien. Dans une cave froide, nous ajoutons donc un",
    " ",
    /* @__PURE__ */ jsx(Link, { to: lp(kachelPad), children: "chauffage de chantier électrique" }),
    ". Pour en savoir plus sur les caves et les moisissures, consultez",
    " ",
    /* @__PURE__ */ jsx(Link, { to: lp("/renovatie"), children: "sécher une cave humide ou des moisissures" }),
    ". Si une cave redevient humide à chaque fois, la cause se trouve généralement dans les murs eux-mêmes ; déshumidifier traite alors la conséquence, pas la source."
  ] }),
  waterH3: "Après des dégâts des eaux",
  waterP: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "Après une fuite ou une inondation, chaque jour compte. Plus les sols, les murs et l'isolation restent humides longtemps, plus le risque de moisissures et de dégâts durables augmente. Un déshumidificateur associé à un ou plusieurs ventilateurs sèche le plus vite : le ventilateur détache l'humidité des surfaces, le déshumidificateur la retire de l'air. Si l'eau se trouve sous un plancher flottant ou dans une paroi, lisez",
    " ",
    /* @__PURE__ */ jsx(Link, { to: lp("/gids/condensdroger-of-adsorptiedroger"), children: "déshumidificateur à condensation ou à adsorption" }),
    ". Toute l'approche est expliquée sur",
    " ",
    /* @__PURE__ */ jsx(Link, { to: lp("/waterschade"), children: "sécher après des dégâts des eaux" }),
    "."
  ] }),
  nieuwbouwH3: "Nouvelle construction et rénovation",
  nieuwbouwP: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "La chape et le plafonnage apportent des centaines de litres d'eau dans une habitation. Sans déshumidification, cette eau sèche lentement et le poseur de sol ou le peintre ne peut pas commencer. Combien de temps cela prend par épaisseur, vous le trouverez dans",
    " ",
    /* @__PURE__ */ jsx(Link, { to: lp("/gids/hoe-lang-moet-chape-drogen"), children: "combien de temps une chape doit-elle sécher" }),
    " ; ce que nous faisons sur le chantier, vous le lirez sur",
    " ",
    /* @__PURE__ */ jsx(Link, { to: lp("/nieuwbouw-drogen"), children: "sécher chape et plafonnage" }),
    "."
  ] }),
  proH2: "Professionnel ou domestique ?",
  proP: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "Un déshumidificateur du commerce est conçu pour une chambre ou une buanderie et ne retire généralement qu'une fraction de ce qu'un déshumidificateur de chantier enlève par jour. Pour une cave vraiment humide, des dégâts des eaux ou une nouvelle construction, un tel appareil est toujours en retard. Un déshumidificateur professionnel à condensation tourne en continu, évacue l'eau par un tuyau ou une pompe à condensats et est conçu pour fonctionner des semaines d'affilée. Sa consommation électrique, nous la calculons dans",
    " ",
    /* @__PURE__ */ jsx(Link, { to: lp("/gids/stroomverbruik-bouwdroger"), children: "consommation électrique d'un déshumidificateur de chantier" }),
    "."
  ] }),
  afH2: "Enlever vous-même ou faire livrer",
  afZelf: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("b", { children: "Enlèvement sur place." }),
    " Vous réservez les appareils à la pièce en ligne et les enlevez dans notre entrepôt à ",
    CONTACT.city,
    ". Voir",
    " ",
    /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/afhalen"), children: "louer et enlever des appareils à la pièce" }),
    "."
  ] }),
  afLever: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("b", { children: "Livraison et installation." }),
    " Si vous choisissez un pack de séchage, nos techniciens apportent les appareils dans les 24 heures, les installent, mesurent l'humidité avant et après, puis reprennent le tout. Voir ",
    /* @__PURE__ */ jsx(Link, { to: lp("/levering"), children: "livraison et installation" }),
    "."
  ] }),
  regioH2: "Louer un déshumidificateur dans votre province",
  regioIntro: "Nous livrons dans toute la Flandre. Par province :",
  regioLink: (naam) => `louer un déshumidificateur de chantier ${inProvincie(naam)}`,
  regioEn: " et "
};
const en = {
  crumb: "Dehumidifier hire",
  home: "Home",
  kick: "Hire · dehumidifiers",
  h1: "Dehumidifier hire for cellars, water damage and new builds",
  intro: (c, b) => /* @__PURE__ */ jsxs("p", { children: [
    "A damp cellar, a leak that flooded the floor or a new build full of wet screed: a professional dehumidifier draws the moisture out, day and night.",
    c.litersMin && c.litersMax ? ` Our condensation dehumidifiers remove ${c.litersMin} to ${c.litersMax} litres of water a day` : "",
    c.vanaf !== null ? `, for hire from ${b.prijs(c.vanaf)} a day ${b.btw}.` : ".",
    " Collect it yourself or have it delivered and installed, anywhere in Flanders."
  ] }),
  faq: (c, b) => [
    ...c.goedkoopste && c.goedkoopsteWeek !== null ? [
      {
        question: "How much does it cost to hire a dehumidifier?",
        answer: `You can hire our dehumidifiers from ${b.prijs(c.goedkoopste.perDay)} a day ${b.btw}, for the ${c.goedkoopste.short}. A week then costs ${b.prijs(c.goedkoopsteWeek)} ${b.btw}. The larger models and all hire periods are on our prices page.`
      }
    ] : [],
    {
      question: "Is a dehumidifier the same as a construction dehumidifier?",
      answer: "A construction dehumidifier is a professional dehumidifier: the same principle, but with far more capacity and built to run day and night on a building site. Our units are condensation dehumidifiers."
    },
    {
      question: "Which dehumidifier do I need for my cellar?",
      answer: "That depends on the volume of the cellar and how wet it is. Check the range in m³ of each unit, or let the Calculator work it out. If the cellar is colder than about 15 °C, add a site heater: in the cold, a condensation dehumidifier loses a lot of its efficiency."
    },
    {
      question: "Can I collect a dehumidifier myself?",
      answer: `Yes. You collect individual units from our warehouse at ${CONTACT.street} in ${CONTACT.city}, on working days from 08:00 to 17:00. Would you rather have it delivered and set up? Then choose a drying package with delivery and installation.`
    }
  ],
  catalogusNaam: "Dehumidifiers for hire",
  gKick: "Our range",
  gH2: "Which dehumidifier should you hire?",
  gLede: (btw) => `Three condensation dehumidifiers, from a flat to a large building site. The capacity is the maximum in litres per 24 hours from the technical data sheet; the range is the room volume the unit is intended for. All prices ${btw}.`,
  kaartCapaciteit: (liters, volume) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "Up to ",
    /* @__PURE__ */ jsxs("b", { children: [
      liters,
      " litres a day"
    ] }),
    " · rooms up to ",
    /* @__PURE__ */ jsxs("b", { children: [
      volume,
      " m³"
    ] })
  ] }),
  kaartPrijs: (dag, week) => /* @__PURE__ */ jsxs(Fragment, { children: [
    dag,
    " ",
    /* @__PURE__ */ jsxs("small", { children: [
      "a day · ",
      week,
      " a week"
    ] })
  ] }),
  kaartMeer: (kort) => `View the ${kort}`,
  note: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("b", { children: "Not sure which size?" }),
    " The ",
    /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "drying calculator" }),
    " works out how many litres a day your space needs. If you want a complete package with fans and delivery straight away, use the ",
    /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "drying calculator" }),
    ". All amounts per period are on ",
    /* @__PURE__ */ jsx(Link, { to: lp("/prijzen"), children: "our prices page" }),
    "."
  ] }),
  wH2: "What do you hire a dehumidifier for?",
  kelderH3: "A damp cellar",
  kelderP: (lp, kachelPad) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "Cellars are cool and often poorly ventilated, so the humidity stays high and a musty smell or mould develops. A dehumidifier brings that humidity down. Watch the temperature: below about 15 °C a condensation dehumidifier works noticeably less well. In a cold cellar we therefore add an ",
    /* @__PURE__ */ jsx(Link, { to: lp(kachelPad), children: "electric site heater" }),
    ". You can read more about cellars and mould on ",
    /* @__PURE__ */ jsx(Link, { to: lp("/renovatie"), children: "drying a damp cellar or mould" }),
    ". If a cellar keeps getting wet again, the cause usually lies in the walls themselves; dehumidifying then treats the effect, not the source."
  ] }),
  waterH3: "After water damage",
  waterP: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "After a leak or flood, every day counts. The longer floors, walls and insulation stay wet, the greater the risk of mould and lasting damage. A dehumidifier combined with one or more fans dries fastest: the fan releases the moisture from the surfaces, the dehumidifier takes it out of the air. If the water is under a floating floor or inside a wall, read",
    " ",
    /* @__PURE__ */ jsx(Link, { to: lp("/gids/condensdroger-of-adsorptiedroger"), children: "condensation or desiccant dehumidifier" }),
    ". The whole approach is explained on ",
    /* @__PURE__ */ jsx(Link, { to: lp("/waterschade"), children: "drying after water damage" }),
    "."
  ] }),
  nieuwbouwH3: "New builds and renovation",
  nieuwbouwP: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "Screed and plasterwork bring hundreds of litres of water into a home. Without dehumidification it dries slowly and the floor layer or painter cannot start. How long that takes per thickness is set out in ",
    /* @__PURE__ */ jsx(Link, { to: lp("/gids/hoe-lang-moet-chape-drogen"), children: "how long does screed take to dry" }),
    "; what we do on site is described on",
    " ",
    /* @__PURE__ */ jsx(Link, { to: lp("/nieuwbouw-drogen"), children: "drying screed and plasterwork" }),
    "."
  ] }),
  proH2: "Professional or household?",
  proP: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "A dehumidifier from the shop is made for a bedroom or a utility room and usually removes only a fraction of what a construction dehumidifier extracts in a day. For a cellar that is really wet, for water damage or for a new build, such a unit is always playing catch-up. A professional condensation dehumidifier runs continuously, drains the water through a hose or condensate pump and is built to run for weeks on end. What it uses in electricity, we work out in",
    " ",
    /* @__PURE__ */ jsx(Link, { to: lp("/gids/stroomverbruik-bouwdroger"), children: "power consumption of a construction dehumidifier" }),
    "."
  ] }),
  afH2: "Collect it yourself or have it delivered",
  afZelf: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("b", { children: "Collect it yourself." }),
    " You book individual units online and collect them from our warehouse in",
    " ",
    CONTACT.city,
    ". See ",
    /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/afhalen"), children: "hiring and collecting individual units" }),
    "."
  ] }),
  afLever: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("b", { children: "Delivery and installation." }),
    " If you choose a drying package, our technicians bring the units within 24 hours, set them up, take moisture readings before and after, and collect everything again afterwards. See ",
    /* @__PURE__ */ jsx(Link, { to: lp("/levering"), children: "delivery and installation" }),
    "."
  ] }),
  regioH2: "Dehumidifier hire in your province",
  regioIntro: "We deliver throughout Flanders. By province:",
  regioLink: (naam) => `construction dehumidifier hire in ${naam}`,
  regioEn: " and "
};
const COPY = { nl, fr, en };
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/LuchtontvochtigerHurenPage.tsx");
const PATH = "/luchtontvochtiger-huren";
const VANAF = DROGERS.length ? Math.min(...DROGERS.map((t) => t.perDay)) : null;
const LITERS = DROGERS.map((t) => t.litersPerDay).filter(Boolean);
const GOEDKOOPSTE = DROGERS.find((t) => t.perDay === VANAF);
const CIJFERS = {
  goedkoopste: GOEDKOOPSTE,
  goedkoopsteWeek: GOEDKOOPSTE ? priceForWeeks(GOEDKOOPSTE, 1) : null,
  vanaf: VANAF,
  litersMin: LITERS.length ? Math.min(...LITERS) : null,
  litersMax: LITERS.length ? Math.max(...LITERS) : null
};
const REGIO_EN = {
  antwerpen: "Antwerp",
  "oost-vlaanderen": "East Flanders",
  "west-vlaanderen": "West Flanders",
  "vlaams-brabant": "Flemish Brabant",
  "waals-brabant": "Walloon Brabant",
  brussel: "Brussels",
  limburg: "Limburg",
  henegouwen: "Hainaut",
  namen: "Namur",
  luik: "Liège",
  luxemburg: "Luxembourg",
  "noord-brabant": "North Brabant",
  "nederlands-limburg": "Dutch Limburg"
};
function regioNaamEn(r) {
  return REGIO_EN[r.slug] ?? r.nameFr ?? r.name;
}
const LuchtontvochtigerHurenPage = () => {
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const taal = useTaal();
  const toon = useToonBedrag();
  const seo = useSeo("luchtontvochtigerHuren");
  const drogers = drogersInTaal(taal);
  const bedragen = taal === "nl" ? { prijs: euro, btw: "exclusief btw" } : { prijs: (excl) => toon(excl).tekst, btw: toon(0).label };
  return /* @__PURE__ */ jsxs(
    GidsShell,
    {
      seo,
      path: PATH,
      crumbs: [
        { name: t.home, path: "/" },
        { name: t.crumb, path: PATH }
      ],
      kick: t.kick,
      h1: t.h1,
      intro: t.intro(CIJFERS, bedragen),
      faq: t.faq(CIJFERS, bedragen),
      jsonLd: [
        offerCatalogSchema(
          t.catalogusNaam,
          drogers.map((d) => ({
            name: d.name,
            description: d.summary,
            path: lokaalPad(d.path, taal),
            pricePerDay: d.perDay
          }))
        )
      ],
      children: [
        /* @__PURE__ */ jsx("section", { className: "sw", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
          /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
            /* @__PURE__ */ jsx("span", { className: "kick", children: t.gKick }),
            /* @__PURE__ */ jsx("h2", { className: "sec", children: t.gH2 }),
            /* @__PURE__ */ jsx("p", { className: "lede", children: t.gLede(bedragen.btw) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "g3", children: drogers.map((d) => /* @__PURE__ */ jsxs("div", { className: "kaart", children: [
            d.badge ? /* @__PURE__ */ jsx("span", { className: "kick", children: d.badge }) : null,
            /* @__PURE__ */ jsx("h3", { children: d.name }),
            /* @__PURE__ */ jsx("p", { children: t.kaartCapaciteit(d.litersPerDay, d.volume) }),
            /* @__PURE__ */ jsx("p", { className: "prijs", children: t.kaartPrijs(bedragen.prijs(d.perDay), bedragen.prijs(priceForWeeks(d, 1))) }),
            /* @__PURE__ */ jsx("p", { children: d.summary }),
            /* @__PURE__ */ jsx(Link, { className: "meer", to: lp(d.path), children: t.kaartMeer(d.short) })
          ] }, d.key)) }),
          /* @__PURE__ */ jsx("div", { className: "note", children: t.note(lp) })
        ] }) }),
        /* @__PURE__ */ jsx("section", { className: "sw2", children: /* @__PURE__ */ jsxs("div", { className: "wrap prose", children: [
          /* @__PURE__ */ jsx("h2", { children: t.wH2 }),
          /* @__PURE__ */ jsx("h3", { children: t.kelderH3 }),
          /* @__PURE__ */ jsx("p", { children: t.kelderP(lp, toestelPad("teddh20")) }),
          /* @__PURE__ */ jsx("h3", { children: t.waterH3 }),
          /* @__PURE__ */ jsx("p", { children: t.waterP(lp) }),
          /* @__PURE__ */ jsx("h3", { children: t.nieuwbouwH3 }),
          /* @__PURE__ */ jsx("p", { children: t.nieuwbouwP(lp) }),
          /* @__PURE__ */ jsx("h2", { style: { marginTop: 40 }, children: t.proH2 }),
          /* @__PURE__ */ jsx("p", { children: t.proP(lp) }),
          /* @__PURE__ */ jsx("h2", { style: { marginTop: 40 }, children: t.afH2 }),
          /* @__PURE__ */ jsxs("ul", { children: [
            /* @__PURE__ */ jsx("li", { children: t.afZelf(lp) }),
            /* @__PURE__ */ jsx("li", { children: t.afLever(lp) })
          ] }),
          /* @__PURE__ */ jsx("h2", { style: { marginTop: 40 }, children: t.regioH2 }),
          /* @__PURE__ */ jsxs("p", { children: [
            t.regioIntro,
            " ",
            REGIO_ROUTES.map((r, i) => /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx(Link, { to: lp(r.path), children: t.regioLink(
                taal === "nl" ? r.name : taal === "en" ? regioNaamEn(r) : r.nameFr ?? r.name
              ) }),
              i < REGIO_ROUTES.length - 2 ? ", " : i === REGIO_ROUTES.length - 2 ? t.regioEn : "."
            ] }, r.path))
          ] })
        ] }) })
      ]
    }
  );
};
export {
  LuchtontvochtigerHurenPage as default
};
