import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { P as PageMeta, C as CONTACT } from "./PageMeta-BXulEWcY.js";
import { e as CheckIcon, l as V3Header, A as ArrowRightIcon, k as PhoneIcon, f as CardIcon, B as BoltIcon, d as SupportIcon } from "./V3Header-BeIMcMg7.js";
import { V as V3Footer } from "./V3Footer-9z4J1I4x.js";
import { R as Reveal } from "./Reveal-NNPkAe35.js";
import { V as VerderLezen } from "./VerderLezen-BWBN-Dg6.js";
import { C as ContactBlok } from "./ContactBlok-ykYeBJgi.js";
import { F as FaqBlok } from "./FaqBlok-Bkr2MHqW.js";
import { X as XIcon, h as TagIcon } from "./icons-DTi5RvwE.js";
import { g as DROGERS, t as tariefInTaal, a as priceForWeeks, s as serviceSchema, c as offerCatalogSchema, T as TARIEVEN_PUBLIEK, f as faqSchema, b as breadcrumbSchema, R as RENTAL_WEEKS } from "./schema-VJMHyxOJ.js";
import { u as useSeo } from "./seo-BMvlJeai.js";
import { b as PUMP, L as LADDER_FEE, E as EXTRAS, P as PRODUCTS } from "./verhuur-CgnDb-wO.js";
import { v as vertaalPortaal, c as coverInTaal, e as extrasInTaal } from "./verhuur.fr-CrIPL5Eo.js";
import { findPackage } from "./packages-DdkKuPcF.js";
import { p as pakketInTaal } from "./packages.fr-BpE_nEXx.js";
import { b as useTaal, u as useCopy, a as useLokaalPad, N as NUMBER_LOCALE, c as useToonBedrag, h as formatEuro } from "../main.mjs";
import { b as bookingSummary, O as ONLINE_DISCOUNT, V as VAT_RATE, E as EMPTY_OPTIONS, D as DEPOSIT_GROSS } from "./booking-CFp-lxcW.js";
import { g as DEFAULT_CD, h as DEFAULT_SIZE, a as euro, j as parseConfig } from "./verhuur-8XCQs1EE.js";
/* empty css                    */
import "vite-react-ssg";
import "react";
import "./FontPreload-C6Rzq6ld.js";
import "./AanvraagForm-CNDpbMyw.js";
import "./tarieven-ZrzMF0e-.js";
import "lucide-react";
import "./levering-CO7G5c_f.js";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/PrijzenPage.copy.tsx");
const le = (naam) => /^[aeiouyéè]/i.test(naam) ? `l'${naam}` : `le ${naam}`;
const Le = (naam) => /^[aeiouyéè]/i.test(naam) ? `L'${naam}` : `Le ${naam}`;
const nl = {
  service: {
    name: "Verhuur van bouwdrogers, ventilatoren en bouwkachels",
    description: "Transparante huurprijzen per dag, week en droogpakket, zonder waarborg. Berekende droogpakketten met levering en installatie zijn inclusief vochtmetingen en Drooggarantie.",
    serviceType: "Verhuur bouwdrogers"
  },
  catalogus: "Huurtarieven bouwdrogers, ventilatoren en bouwkachels",
  home: "Home",
  prijzen: "Prijzen",
  faq: (f) => {
    const eerste = f.drogers[0];
    const laatste = f.drogers[f.drogers.length - 1];
    const btw = f.incl ? "inclusief btw" : "exclusief btw";
    return [
      {
        question: "Wat kost een bouwdroger huren per dag?",
        answer: `Een bouwdroger huren kost bij Vernast tussen ${f.prijs(eerste.perDay)} en ${f.prijs(laatste.perDay)} per dag, ${btw}. De prijs hangt af van de capaciteit: de ${eerste.short} voert ${eerste.litersPerDay} liter vocht per 24 uur af, de ${laatste.short} tot ${laatste.litersPerDay} liter. Dit zijn de huurprijzen van losse toestellen. Bij een berekend droogpakket zijn ook levering, installatie, vochtmetingen en ophaling inbegrepen.`
      },
      {
        question: "Moet ik een waarborg betalen?",
        answer: "Nee. Wij vragen geen waarborg voor het toestel. U betaalt enkel de huurprijs voor de dagen dat u het toestel gebruikt, plus eventuele extra opties die u zelf kiest."
      },
      {
        question: "Zijn levering en ophaling inbegrepen?",
        answer: "Levering en ophaling zijn gratis vanaf een huurperiode van vier weken. Bij kortere periodes rekenen wij een leveringskost aan; wie zelf afhaalt in ons magazijn in Aartselaar krijgt € 25 korting op de huurprijs."
      },
      {
        question: "Zijn de prijzen inclusief btw?",
        answer: f.incl ? "Ja, de prijzen op deze pagina staan inclusief btw. Op verhuur van bouwdrogers is het standaardtarief van 21 % btw van toepassing. Op uw factuur staat het btw-bedrag apart vermeld, zodat u het kunt indienen bij uw verzekeraar of boekhouder." : "Nee, alle vermelde prijzen zijn exclusief btw. Op verhuur van bouwdrogers is het standaardtarief van 21 % btw van toepassing. Op uw factuur staat het btw-bedrag apart vermeld, zodat u het kunt indienen bij uw verzekeraar of boekhouder."
      },
      {
        question: "Wat kost een bouwdroger huren per week?",
        answer: `Per week kost een bouwdroger bij Vernast ${f.drogers.map((t) => `${f.weekprijs(t)} voor de ${t.short}`).join(", ")}, ${btw}. Dat is telkens de dagprijs maal zeven dagen. Een volledig droogpakket met ventilator rekent u uit in de Calculator.`
      },
      {
        question: "Hoeveel stroom verbruikt een bouwdroger?",
        answer: f.middenKw ? `De ${f.midden.short} neemt maximaal ${f.kw(f.middenKw)} kW op. Draait hij een volle dag op vol vermogen, dan is dat ${f.kwh(f.middenKw * 24)} per dag. In de praktijk ligt het verbruik lager, omdat de ingebouwde hygrostaat het toestel terugschakelt zodra de streefvochtigheid bereikt is. Vermenigvuldig met de kWh-prijs van uw eigen contract voor de kost.` : "Dat hangt af van het toestel: het opgenomen vermogen staat op elke toestelpagina. Vermenigvuldig het met het aantal uren en met de kWh-prijs van uw eigen contract."
      },
      {
        question: "Wordt het goedkoper als ik langer huur?",
        answer: "De dagprijs blijft dezelfde, hoe lang u ook huurt; er komt geen toeslag bij voor een korte periode. Wat u wint bij langer huren, is de levering: vanaf vier weken zijn levering en ophaling gratis."
      },
      {
        question: "Kan ik verlengen als de werf uitloopt?",
        answer: "Ja. Loopt de werf uit of is de meting nog niet goed, dan verlengt u per week tegen dezelfde dagprijs; u krijgt daarvoor een link per mail en hoeft niets te bellen. Huurt u een berekend droogpakket en is het ondanks correcte droogomstandigheden nog niet droog, dan verlengt u kosteloos, dat is de drooggarantie."
      },
      {
        question: "Wanneer is de Drooggarantie inbegrepen?",
        answer: "De Drooggarantie is inbegrepen bij een droogpakket dat Vernast voor uw situatie berekent, levert en installeert. Wij meten bij de start en bij de oplevering. Is het materiaal ondanks correcte droogomstandigheden niet droog binnen de berekende periode, dan huurt u de toestellen kosteloos verder. De garantie geldt niet voor losse toestellen die u zelf afhaalt of plaatst."
      }
    ];
  },
  heroKick: "Tarieven",
  heroH1: "Bouwdroger huren: prijzen mét Drooggarantie.",
  heroP: "Bekijk de huurprijs per dag of per week, of bereken een compleet droogpakket voor uw werf. Geen waarborg en geen verborgen kosten. Kiest u voor een pakket dat wij berekenen, leveren en installeren? Dan is onze 100 % Drooggarantie inbegrepen.",
  berekenPrijs: "Bereken uw prijs",
  heroAlt: "Zorgeloos huren bij Vernast: één prijs, geen waarborg",
  heroBadge: "100 % Drooggarantie",
  heroBadgeSub: "bij berekende pakketten met plaatsing",
  keuzeKick: "Eerst dit",
  keuzeH2: "Drooggarantie of alleen een toestel huren?",
  keuzeLede: "U kunt bij ons allebei. Een los toestel heeft een eenvoudige dagprijs en plaatst u zelf. Met een droogpakket koopt u meer zekerheid: wij berekenen de capaciteit en droogtijd, plaatsen de toestellen en meten het resultaat. Daarom geldt alleen op dat volledige pakket onze Drooggarantie.",
  pakketLab: "Wat wij aanraden",
  pakketSub: "Droogpakket",
  pakketH3: "Berekend, geleverd en gemeten",
  pakketP: "De Calculator vertaalt uw oppervlakte, plafondhoogte en situatie naar het juiste aantal toestellen en een berekende droogperiode. Onze technieker plaatst alles, sluit de condensafvoer aan en meet het vochtgehalte bij start en oplevering.",
  pakketLijst: (pct) => /* @__PURE__ */ jsxs("ul", { children: [
    /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsx(CheckIcon, { size: 14, strokeWidth: 3 }),
      " ",
      /* @__PURE__ */ jsxs("span", { children: [
        /* @__PURE__ */ jsx("b", { children: "100 % drooggarantie:" }),
        " niet droog binnen de berekende periode? U huurt kosteloos verder.*"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsx(CheckIcon, { size: 14, strokeWidth: 3 }),
      " Vochtmeting bij start én oplevering, zwart op wit"
    ] }),
    /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsx(CheckIcon, { size: 14, strokeWidth: 3 }),
      " Levering, plaatsing en ophaling inbegrepen"
    ] }),
    /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsx(CheckIcon, { size: 14, strokeWidth: 3 }),
      " Defect toestel binnen 24 uur vervangen"
    ] }),
    /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsx(CheckIcon, { size: 14, strokeWidth: 3 }),
      " ",
      pct,
      " % korting bij volledig online betalen"
    ] })
  ] }),
  pakketBtn: "Bereken uw droogpakket",
  losSub: "Los toestel",
  losH3: "Zelf plaatsen, zelf opvolgen",
  losP: "Eén droger, ventilator of bouwkachel, per dag of per week. Handig voor een kleine ruimte, een tweede toestel bij een pakket, of wie het drogen zelf in handen wil houden. U haalt het af in Aartselaar of laat het leveren.",
  losLijst: /* @__PURE__ */ jsxs("ul", { children: [
    /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsx(CheckIcon, { size: 14, strokeWidth: 3 }),
      " Eén vaste dagprijs, geen waarborg"
    ] }),
    /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsx(CheckIcon, { size: 14, strokeWidth: 3 }),
      " Afhaalkorting in ons magazijn in Aartselaar"
    ] }),
    /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsx(CheckIcon, { size: 14, strokeWidth: 3 }),
      " Ook bij te boeken naast een pakket"
    ] }),
    /* @__PURE__ */ jsxs("li", { className: "niet", children: [
      /* @__PURE__ */ jsx(XIcon, { size: 14 }),
      " Geen drooggarantie: wij plaatsen en meten niet"
    ] }),
    /* @__PURE__ */ jsxs("li", { className: "niet", children: [
      /* @__PURE__ */ jsx(XIcon, { size: 14 }),
      " U volgt zelf op of het droog is"
    ] })
  ] }),
  losBtn: "Bekijk het gamma",
  keuzeNote: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("b", { children: "Waarom die grens er is." }),
    ' Een garantie kan alleen op een berekening rusten. Wij dimensioneren het pakket op volume en situatie, installeren het zelf en leggen het start- en eindpunt vast met een meting; daardoor is "droog" bij ons een meetresultaat en geen gevoel. Bij een los toestel bepaalt u zelf de opstelling, en dan kunnen wij de uitkomst niet beloven. De volledige voorwaarden leest u op',
    " ",
    /* @__PURE__ */ jsx(Link, { to: lp("/drooggarantie"), children: "de pagina over de drooggarantie" }),
    "."
  ] }),
  opbouwKick: "Prijsopbouw",
  opbouwH2: "Zo komt uw bedrag tot stand.",
  opbouwLede: "Vier dingen bepalen wat u betaalt: wat u huurt, hoe lang, hoe u betaalt, en welke opties u zelf aanvinkt. Alle bedragen hieronder komen uit dezelfde prijslijst waarmee de checkout rekent.",
  pakketprijsH3: "Droogpakket: vaste prijs per situatie",
  pakketprijsP: "Een pakket combineert droger, ventilator en eventueel kachels voor een bepaalde oppervlakte, werksoort en dikte. De prijs is de dagprijs van het pakket maal de dagen van de huurtermijn, en die termijn volgt uit de dikte van de chape of het pleisterwerk.",
  inbegrepenZin: (lijst) => ` Inbegrepen: ${lijst}.`,
  losprijsH3: "Losse toestellen: dagprijs × dagen",
  losprijsP: (naam, dag, tweeWeken) => `Elk toestel heeft een dagprijs. De huurprijs is die dagprijs maal het aantal dagen, zonder toeslag voor een korte periode. Een ${naam} aan ${dag} per dag kost dus ${tweeWeken} voor twee weken.`,
  onlineH3: (pct) => `${pct} % korting bij online betalen`,
  onlineP: (pct, voorschot) => `Betaalt u de volledige huur online bij het reserveren, dan krijgt u ${pct} % korting op het hele bedrag. U kunt ook enkel een vaste orderbevestiging van ${voorschot} incl. btw betalen en het saldo bij de installatie of de afhaling.`,
  optiesH3: "Opties die u zelf kiest",
  dekking: (naam, prijs) => `Dekking "${naam}": ${prijs}`,
  pomp: (lp, prijs) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/toebehoren/condenspomp"), children: "Condenspomp" }),
    ": ",
    prijs,
    " per bouwdroger per dag"
  ] }),
  ladder: (prijs) => `Plaatsing op verdieping via ladder: ${prijs}`,
  optie: (naam, prijs, eenheid) => `${naam}: ${prijs} ${eenheid}`,
  opbouwNote: (incl, pct) => `Alle bedragen ${incl ? "inclusief" : "exclusief"} btw, tenzij anders vermeld. Op verhuur geldt ${pct} % btw.`,
  vbKick: "Rekenvoorbeeld",
  vbLede1: (weken) => `Een chapepakket zonder kachels, met een huurtermijn van ${weken} ${weken === 1 ? "week" : "weken"}, en de opties die bij het boeken standaard aangevinkt staan. Die opties kunt u uitzetten.`,
  vbLede2: 'Dit bedrag komt uit dezelfde module waarmee de boekingspagina en Stripe rekenen. Wat hier staat, staat straks ook in de checkout: geen "vanaf"-prijs die achteraf hoger uitvalt.',
  vbBtn: "Bereken uw eigen pakket",
  vbCaption: "Rekenvoorbeeld van een droogpakket voor chape",
  vbPakket: (dagen) => `Pakket (${dagen} dagen)`,
  inbegrepen: "Inbegrepen",
  vbKorting: (pct) => `Korting online betalen (${pct} %)`,
  totaalExcl: "Totaal excl. btw",
  btwRij: (pct) => `Btw ${pct} %`,
  totaalIncl: "Totaal incl. btw",
  losKick: "Losse toestellen",
  losTabelH2: "Wat kost een bouwdroger per dag en per week?",
  losTabelLede: "De weekbedragen zijn simpelweg de dagprijs maal het aantal dagen. Er komt geen toeslag bij voor een korte huurperiode, en er is geen staffel die u pas bij het afrekenen ziet.",
  losCaption: (incl) => `Huurprijzen per bouwdroger en per huurperiode, ${incl ? "inclusief" : "exclusief"} btw`,
  thDroger: "Bouwdroger",
  thPerDag: "Per dag",
  weken: (w) => `${w} ${w === 1 ? "week" : "weken"}`,
  drogerSub: (liter, m3) => `${liter} L/dag · tot ${m3} m³`,
  losNote: (incl, pct) => `Prijzen ${incl ? "incl." : "excl."} btw, ${pct} % btw van toepassing. Levering en ophaling zijn gratis vanaf een huurperiode van vier weken.`,
  extraKick: "Ventilator en kachel",
  extraH3: "Sneller droog, apart te huren.",
  extraLede: "Een ontvochtiger haalt het vocht uit de lucht; een ventilator zorgt dat er ook droge lucht bij de natte bouwmassa komt, en een kachel houdt de ruimte op temperatuur. Samen winnen ze dagen. In een berekend pakket zitten ze er al bij waar uw situatie ze nodig heeft.",
  perDag: "/dag",
  inbKick: "Inbegrepen bij een droogpakket",
  inbH2: "Niet alleen toestellen, maar zekerheid.",
  inbLede: "De pakketprijs omvat de volledige begeleiding van start tot oplevering. Deze diensten staan niet als losse opties in de checkout en verschijnen niet onverwacht op de factuur.",
  inbegrepenLijst: [
    "100 % Drooggarantie op berekende droogpakketten",
    "Levering aan huis door een technieker",
    "Ophaling na gebruik",
    "Gratis verlengsnoer 10 m, 2,5 mm²",
    "Uitleg bij de plaatsing",
    "Vochtmeting bij start en oplevering",
    "Geen waarborg vereist"
  ],
  garanties: [
    { title: "Toestel defect?", desc: "Wij vervangen het de volgende werkdag. Geen discussie, geen extra kost: u huurt een werkend toestel, niet een toestel." },
    { title: "Altijd bereikbaar", desc: "Weekdagen, weekend en feestdagen. Een droging die stilvalt in het weekend is een week verlies." },
    { title: "Duidelijke factuur", desc: "Op naam, met de btw apart, en met de metingen erbij, klaar voor uw verzekeringsdossier of boekhouder." }
  ],
  stroomKick: "Stroom",
  stroomH2: "Wat verbruikt een bouwdroger?",
  stroomLede: "De stroom betaalt u zelf, want de toestellen draaien op uw aansluiting. Hieronder staat het opgenomen vermogen per toestel en wat dat op vol vermogen per dag en per week betekent. Dat is een bovengrens: de ingebouwde hygrostaat schakelt een ontvochtiger terug zodra de ingestelde vochtigheid bereikt is. Vermenigvuldig het aantal kWh met de prijs uit uw eigen contract.",
  stroomCaption: "Stroomverbruik per toestel op vol vermogen",
  stroomTh: ["Toestel", "Vermogen", "Max. per dag", "Max. per week"],
  stroomNote: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("b", { children: "En een bouwkachel?" }),
    " Die verbruikt veel meer dan een droger: zijn vermogen staat in kilowatt op de toestelpagina, en de thermostaat schakelt hem af zodra de ruimte op temperatuur is. In een koude ruimte loont dat toch, omdat de ontvochtiger anders veel langer moet draaien. Meer cijfers staan in de gids over",
    " ",
    /* @__PURE__ */ jsx(Link, { to: lp("/gids/stroomverbruik-bouwdroger"), children: "het stroomverbruik van een bouwdroger" }),
    "."
  ] }),
  faqTitel: "Veelgestelde vragen over de prijs.",
  slotKick: "Klaar om te reserveren",
  slotH3: "Geen waarborg, geen verborgen kosten, levering binnen 24 uur.",
  slotP: (pct) => `De Calculator geeft u in een paar klikken de volledige prijs voor uw oppervlakte, inclusief Drooggarantie op een berekend pakket. U krijgt ${pct} % korting als u meteen online betaalt.`,
  slotAlt: "Vernast technicus met de betaalterminal",
  verderTitel: "Verder lezen over prijzen en pakketten",
  verderLezen: [
    {
      kop: "Wat onze klanten lieten drogen",
      links: [
        { to: "/realisaties/bouwdroging-winkelpand", label: "Versnelde bouwdroging binnen een strak bouwschema" },
        { to: "/realisaties/chape-pleisterwerk-drogen-hasselt", label: "Pleister- en chapewerken versneld gedroogd in Hasselt" },
        { to: "/realisaties/kelder-en-kamer-drogen-antwerpen", label: "Kelder en leefruimte drooggelegd na waterschade" }
      ]
    },
    {
      kop: "Kiezen en berekenen",
      links: [
        { to: "/verhuur/calculator", label: "Bereken de prijs van uw droogpakket" },
        { to: "/machines", label: "Welk toestel heeft u nodig? Vergelijk het gamma" },
        { to: "/gids/stroomverbruik-bouwdroger", label: "Gids: wat kost een bouwdroger aan stroom?" },
        { to: "/gids/hoe-lang-moet-chape-drogen", label: "Gids: hoe lang moet een chape drogen?" },
        { to: "/nieuwbouw-drogen", label: "Droogtijden van chape en pleisterwerk" }
      ]
    },
    {
      kop: "Levering in uw regio",
      links: [
        { to: "/bouwdroger-huren-antwerpen", label: "Bouwdroger huren in de provincie Antwerpen" },
        { to: "/bouwdroger-huren-oost-vlaanderen", label: "Bouwdroger huren in Oost-Vlaanderen" }
      ]
    }
  ],
  contactKicker: "Een vraag over de prijs?",
  contactTitel: "Liever een prijs op maat van uw werf?",
  contactLede: "Geef ons uw oppervlakte en wat er moet drogen. U krijgt binnen één werkdag een voorstel met het juiste pakket en de juiste termijn.",
  contactOnderwerpen: [
    "Prijs van een droogpakket",
    "Prijs van een los toestel",
    "Vraag over de drooggarantie",
    "Factuur en btw",
    "Iets anders"
  ],
  contactPlaceholder: "Bv. nieuwbouw 160 m² met chape van 6 cm, levering half december, graag een prijsvoorstel."
};
const fr = {
  service: {
    name: "Location de déshumidificateurs, ventilateurs et chauffages de chantier",
    description: "Des prix de location transparents par jour, par semaine et par pack de séchage, sans caution. Les packs de séchage calculés avec livraison et installation comprennent les mesures d'humidité et la garantie de séchage.",
    serviceType: "Location de déshumidificateurs de chantier"
  },
  catalogus: "Tarifs de location des déshumidificateurs, ventilateurs et chauffages de chantier",
  home: "Accueil",
  prijzen: "Prix",
  faq: (f) => {
    const eerste = f.drogers[0];
    const laatste = f.drogers[f.drogers.length - 1];
    const btw = f.incl ? "TVA comprise" : "hors TVA";
    return [
      {
        question: "Combien coûte la location d'un déshumidificateur de chantier par jour ?",
        answer: `Chez Vernast, louer un déshumidificateur de chantier coûte entre ${f.prijs(eerste.perDay)} et ${f.prijs(laatste.perDay)} par jour, ${btw}. Le prix dépend de la capacité : ${le(eerste.short)} évacue ${eerste.litersPerDay} litres d'humidité par 24 heures, ${le(laatste.short)} jusqu'à ${laatste.litersPerDay} litres. Ce sont les prix de location des appareils seuls. Avec un pack de séchage calculé, la livraison, l'installation, les mesures d'humidité et la reprise sont également comprises.`
      },
      {
        question: "Dois-je payer une caution ?",
        answer: "Non. Nous ne demandons pas de caution pour l'appareil. Vous payez uniquement le prix de location pour les jours où vous utilisez l'appareil, plus les éventuelles options que vous choisissez vous-même."
      },
      {
        question: "La livraison et la reprise sont-elles comprises ?",
        answer: "La livraison et la reprise sont gratuites à partir d'une période de location de quatre semaines. Pour des périodes plus courtes, nous facturons des frais de livraison ; si vous venez chercher l'appareil dans notre entrepôt d'Aartselaar, vous bénéficiez de 25 € de réduction sur le prix de location."
      },
      {
        question: "Les prix sont-ils TVA comprise ?",
        answer: f.incl ? "Oui, les prix de cette page sont TVA comprise. La location de déshumidificateurs de chantier est soumise au taux standard de 21 % de TVA. Le montant de la TVA figure séparément sur votre facture, pour que vous puissiez la transmettre à votre assureur ou à votre comptable." : "Non, tous les prix indiqués sont hors TVA. La location de déshumidificateurs de chantier est soumise au taux standard de 21 % de TVA. Le montant de la TVA figure séparément sur votre facture, pour que vous puissiez la transmettre à votre assureur ou à votre comptable."
      },
      {
        question: "Combien coûte la location d'un déshumidificateur de chantier par semaine ?",
        answer: `Par semaine, un déshumidificateur de chantier coûte chez Vernast ${f.drogers.map((t) => `${f.weekprijs(t)} pour ${le(t.short)}`).join(", ")}, ${btw}. C'est chaque fois le prix journalier multiplié par sept jours. Vous calculez un pack de séchage complet avec ventilateur dans le calculateur.`
      },
      {
        question: "Combien d'électricité consomme un déshumidificateur de chantier ?",
        answer: f.middenKw ? `${Le(f.midden.short)} absorbe au maximum ${f.kw(f.middenKw)} kW. S'il tourne une journée entière à pleine puissance, cela fait ${f.kwh(f.middenKw * 24)} par jour. En pratique, la consommation est plus faible, car l'hygrostat intégré met l'appareil au ralenti dès que l'humidité visée est atteinte. Multipliez par le prix du kWh de votre propre contrat pour connaître le coût.` : "Cela dépend de l'appareil : la puissance absorbée figure sur chaque page d'appareil. Multipliez-la par le nombre d'heures et par le prix du kWh de votre propre contrat."
      },
      {
        question: "Est-ce moins cher si je loue plus longtemps ?",
        answer: "Le prix journalier reste le même, quelle que soit la durée de location ; aucun supplément ne s'ajoute pour une courte période. Ce que vous gagnez en louant plus longtemps, c'est la livraison : à partir de quatre semaines, la livraison et la reprise sont gratuites."
      },
      {
        question: "Puis-je prolonger si le chantier prend du retard ?",
        answer: "Oui. Si le chantier prend du retard ou si la mesure n'est pas encore bonne, vous prolongez par semaine au même prix journalier ; vous recevez pour cela un lien par e-mail et n'avez pas besoin d'appeler. Si vous louez un pack de séchage calculé et que ce n'est pas encore sec malgré des conditions de séchage correctes, vous prolongez gratuitement : c'est la garantie de séchage."
      },
      {
        question: "Quand la garantie de séchage est-elle comprise ?",
        answer: "La garantie de séchage est comprise dans un pack de séchage que Vernast calcule, livre et installe pour votre situation. Nous mesurons au début et à la fin. Si le matériau n'est pas sec dans la période calculée malgré des conditions de séchage correctes, vous continuez à louer les appareils gratuitement. La garantie ne s'applique pas aux appareils seuls que vous enlevez ou placez vous-même."
      }
    ];
  },
  heroKick: "Tarifs",
  heroH1: "Louer un déshumidificateur de chantier : des prix avec garantie de séchage.",
  heroP: "Consultez le prix de location par jour ou par semaine, ou calculez un pack de séchage complet pour votre chantier. Pas de caution ni de frais cachés. Vous choisissez un pack que nous calculons, livrons et installons ? Notre garantie de séchage à 100 % est alors comprise.",
  berekenPrijs: "Calculez votre prix",
  heroAlt: "Louer sans souci chez Vernast : un seul prix, pas de caution",
  heroBadge: "Garantie de séchage 100 %",
  heroBadgeSub: "pour les packs calculés avec installation",
  keuzeKick: "D'abord ceci",
  keuzeH2: "Garantie de séchage ou simple location d'un appareil ?",
  keuzeLede: "Chez nous, les deux sont possibles. Un appareil seul a un prix journalier simple et vous le placez vous-même. Avec un pack de séchage, vous achetez plus de certitude : nous calculons la capacité et le temps de séchage, plaçons les appareils et mesurons le résultat. C'est pourquoi notre garantie de séchage ne s'applique qu'à ce pack complet.",
  pakketLab: "Ce que nous conseillons",
  pakketSub: "Pack de séchage",
  pakketH3: "Calculé, livré et mesuré",
  pakketP: "Le calculateur traduit votre surface, votre hauteur sous plafond et votre situation en un nombre d'appareils adéquat et une période de séchage calculée. Notre technicien installe tout, raccorde l'évacuation des condensats et mesure le taux d'humidité au début et à la fin.",
  pakketLijst: (pct) => /* @__PURE__ */ jsxs("ul", { children: [
    /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsx(CheckIcon, { size: 14, strokeWidth: 3 }),
      " ",
      /* @__PURE__ */ jsxs("span", { children: [
        /* @__PURE__ */ jsx("b", { children: "Garantie de séchage 100 % :" }),
        " pas sec dans la période calculée ? Vous continuez à louer gratuitement.*"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsx(CheckIcon, { size: 14, strokeWidth: 3 }),
      " Mesure d'humidité au début et à la fin, noir sur blanc"
    ] }),
    /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsx(CheckIcon, { size: 14, strokeWidth: 3 }),
      " Livraison, installation et reprise comprises"
    ] }),
    /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsx(CheckIcon, { size: 14, strokeWidth: 3 }),
      " Appareil défectueux remplacé sous 24 heures"
    ] }),
    /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsx(CheckIcon, { size: 14, strokeWidth: 3 }),
      " ",
      pct,
      " % de réduction en cas de paiement intégral en ligne"
    ] })
  ] }),
  pakketBtn: "Calculez votre pack de séchage",
  losSub: "Appareil seul",
  losH3: "Vous placez, vous suivez",
  losP: "Un déshumidificateur, un ventilateur ou un chauffage de chantier, par jour ou par semaine. Pratique pour un petit espace, un deuxième appareil à côté d'un pack, ou si vous voulez garder le séchage en main. Vous l'enlevez à Aartselaar ou vous le faites livrer.",
  losLijst: /* @__PURE__ */ jsxs("ul", { children: [
    /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsx(CheckIcon, { size: 14, strokeWidth: 3 }),
      " Un prix journalier fixe, pas de caution"
    ] }),
    /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsx(CheckIcon, { size: 14, strokeWidth: 3 }),
      " Réduction à l'enlèvement dans notre entrepôt d'Aartselaar"
    ] }),
    /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsx(CheckIcon, { size: 14, strokeWidth: 3 }),
      " Peut aussi s'ajouter à un pack"
    ] }),
    /* @__PURE__ */ jsxs("li", { className: "niet", children: [
      /* @__PURE__ */ jsx(XIcon, { size: 14 }),
      " Pas de garantie de séchage : nous ne plaçons ni ne mesurons"
    ] }),
    /* @__PURE__ */ jsxs("li", { className: "niet", children: [
      /* @__PURE__ */ jsx(XIcon, { size: 14 }),
      " Vous vérifiez vous-même si c'est sec"
    ] })
  ] }),
  losBtn: "Voir la gamme",
  keuzeNote: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("b", { children: "Pourquoi cette limite existe." }),
    " Une garantie ne peut reposer que sur un calcul. Nous dimensionnons le pack selon le volume et la situation, l'installons nous-mêmes et fixons le point de départ et d'arrivée par une mesure ; « sec » est donc chez nous un résultat de mesure et non une impression. Avec un appareil seul, vous décidez vous-même de l'installation, et nous ne pouvons alors pas promettre le résultat. Vous trouverez les conditions complètes sur",
    " ",
    /* @__PURE__ */ jsx(Link, { to: lp("/drooggarantie"), children: "la page consacrée à la garantie de séchage" }),
    "."
  ] }),
  opbouwKick: "Composition du prix",
  opbouwH2: "Voici comment votre montant est établi.",
  opbouwLede: "Quatre éléments déterminent ce que vous payez : ce que vous louez, pour combien de temps, comment vous payez, et quelles options vous cochez vous-même. Tous les montants ci-dessous proviennent de la même liste de prix que celle utilisée par le paiement en ligne.",
  pakketprijsH3: "Pack de séchage : un prix fixe par situation",
  pakketprijsP: "Un pack combine déshumidificateur, ventilateur et éventuellement chauffages pour une surface, un type de travaux et une épaisseur donnés. Le prix est le prix journalier du pack multiplié par les jours de la période de location, et cette période découle de l'épaisseur de la chape ou du plafonnage.",
  inbegrepenZin: (lijst) => ` Compris : ${lijst}.`,
  losprijsH3: "Appareils seuls : prix journalier × jours",
  losprijsP: (naam, dag, tweeWeken) => `Chaque appareil a un prix journalier. Le prix de location est ce prix journalier multiplié par le nombre de jours, sans supplément pour une courte période. Un ${naam} à ${dag} par jour coûte donc ${tweeWeken} pour deux semaines.`,
  onlineH3: (pct) => `${pct} % de réduction en cas de paiement en ligne`,
  onlineP: (pct, voorschot) => `Si vous payez la location complète en ligne lors de la réservation, vous bénéficiez de ${pct} % de réduction sur le montant total. Vous pouvez aussi ne payer qu'une confirmation de commande fixe de ${voorschot} TVAC et régler le solde à l'installation ou à l'enlèvement.`,
  optiesH3: "Options que vous choisissez vous-même",
  dekking: (naam, prijs) => `Couverture « ${naam} » : ${prijs}`,
  pomp: (lp, prijs) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/toebehoren/condenspomp"), children: "Pompe à condensats" }),
    " : ",
    prijs,
    " par déshumidificateur et par jour"
  ] }),
  ladder: (prijs) => `Installation à l'étage par une échelle : ${prijs}`,
  optie: (naam, prijs, eenheid) => `${naam} : ${prijs} ${eenheid}`,
  opbouwNote: (incl, pct) => `Tous les montants sont ${incl ? "TVA comprise" : "hors TVA"}, sauf mention contraire. La location est soumise à ${pct} % de TVA.`,
  vbKick: "Exemple de calcul",
  vbLede1: (weken) => `Un pack chape sans chauffage, avec une période de location de ${weken} ${weken === 1 ? "semaine" : "semaines"}, et les options cochées d'office lors de la réservation. Vous pouvez désactiver ces options.`,
  vbLede2: "Ce montant provient du même module que celui avec lequel la page de réservation et Stripe calculent. Ce qui figure ici figurera aussi au paiement : pas de prix « à partir de » qui s'avère plus élevé par la suite.",
  vbBtn: "Calculez votre propre pack",
  vbCaption: "Exemple de calcul d'un pack de séchage pour une chape",
  vbPakket: (dagen) => `Pack (${dagen} jours)`,
  inbegrepen: "Compris",
  vbKorting: (pct) => `Réduction paiement en ligne (${pct} %)`,
  totaalExcl: "Total HTVA",
  btwRij: (pct) => `TVA ${pct} %`,
  totaalIncl: "Total TVAC",
  losKick: "Appareils seuls",
  losTabelH2: "Combien coûte un déshumidificateur de chantier par jour et par semaine ?",
  losTabelLede: "Les montants hebdomadaires sont simplement le prix journalier multiplié par le nombre de jours. Aucun supplément pour une courte période de location, et pas de barème que vous ne découvririez qu'au moment de payer.",
  losCaption: (incl) => `Prix de location par déshumidificateur et par période de location, ${incl ? "TVA comprise" : "hors TVA"}`,
  thDroger: "Déshumidificateur",
  thPerDag: "Par jour",
  weken: (w) => `${w} ${w === 1 ? "semaine" : "semaines"}`,
  drogerSub: (liter, m3) => `${liter} L/jour · jusqu'à ${m3} m³`,
  losNote: (incl, pct) => `Prix ${incl ? "TVAC" : "HTVA"}, ${pct} % de TVA d'application. La livraison et la reprise sont gratuites à partir d'une période de location de quatre semaines.`,
  extraKick: "Ventilateur et chauffage",
  extraH3: "Sécher plus vite, en location séparée.",
  extraLede: "Un déshumidificateur retire l'humidité de l'air ; un ventilateur veille à ce que de l'air sec arrive aussi jusqu'à la maçonnerie humide, et un chauffage maintient la pièce à température. Ensemble, ils font gagner des jours. Dans un pack calculé, ils sont déjà inclus là où votre situation l'exige.",
  perDag: "/jour",
  inbKick: "Compris dans un pack de séchage",
  inbH2: "Pas seulement des appareils, mais de la certitude.",
  inbLede: "Le prix du pack comprend l'accompagnement complet du début à la fin. Ces services ne figurent pas comme options séparées au paiement et n'apparaissent pas à l'improviste sur la facture.",
  inbegrepenLijst: [
    "Garantie de séchage 100 % sur les packs calculés",
    "Livraison à domicile par un technicien",
    "Reprise après utilisation",
    "Rallonge gratuite de 10 m, 2,5 mm²",
    "Explications lors de l'installation",
    "Mesure d'humidité au début et à la fin",
    "Aucune caution requise"
  ],
  garanties: [
    { title: "Appareil en panne ?", desc: "Nous le remplaçons le jour ouvrable suivant. Sans discussion, sans frais supplémentaires : vous louez un appareil qui fonctionne, pas simplement un appareil." },
    { title: "Toujours joignables", desc: "En semaine, le week-end et les jours fériés. Un séchage qui s'arrête le week-end, c'est une semaine perdue." },
    { title: "Une facture claire", desc: "À votre nom, avec la TVA séparée et les mesures jointes, prête pour votre dossier d'assurance ou votre comptable." }
  ],
  stroomKick: "Électricité",
  stroomH2: "Que consomme un déshumidificateur de chantier ?",
  stroomLede: "L'électricité est à votre charge, car les appareils fonctionnent sur votre raccordement. Vous trouverez ci-dessous la puissance absorbée par appareil et ce que cela représente à pleine puissance par jour et par semaine. C'est une limite supérieure : l'hygrostat intégré met un déshumidificateur au ralenti dès que l'humidité réglée est atteinte. Multipliez le nombre de kWh par le prix de votre propre contrat.",
  stroomCaption: "Consommation électrique par appareil à pleine puissance",
  stroomTh: ["Appareil", "Puissance", "Max. par jour", "Max. par semaine"],
  stroomNote: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("b", { children: "Et un chauffage de chantier ?" }),
    " Il consomme bien plus qu'un déshumidificateur : sa puissance figure en kilowatts sur la page de l'appareil, et le thermostat le coupe dès que la pièce est à température. Dans un espace froid, cela vaut tout de même la peine, car sinon le déshumidificateur doit tourner bien plus longtemps. Plus de chiffres dans le guide sur",
    " ",
    /* @__PURE__ */ jsx(Link, { to: lp("/gids/stroomverbruik-bouwdroger"), children: "la consommation électrique d'un déshumidificateur" }),
    "."
  ] }),
  faqTitel: "Questions fréquentes sur le prix.",
  slotKick: "Prêt à réserver",
  slotH3: "Pas de caution, pas de frais cachés, livraison sous 24 heures.",
  slotP: (pct) => `Le calculateur vous donne en quelques clics le prix complet pour votre surface, garantie de séchage comprise sur un pack calculé. Vous bénéficiez de ${pct} % de réduction si vous payez directement en ligne.`,
  slotAlt: "Technicien Vernast avec le terminal de paiement",
  verderTitel: "En savoir plus sur les prix et les packs",
  verderLezen: [
    {
      kop: "Ce que nos clients ont fait sécher",
      links: [
        { to: "/realisaties/bouwdroging-winkelpand", label: "Séchage de chantier accéléré dans un planning serré" },
        { to: "/realisaties/chape-pleisterwerk-drogen-hasselt", label: "Plafonnage et chape séchés plus vite à Hasselt" },
        { to: "/realisaties/kelder-en-kamer-drogen-antwerpen", label: "Cave et séjour asséchés après des dégâts des eaux" }
      ]
    },
    {
      kop: "Choisir et calculer",
      links: [
        { to: "/verhuur/calculator", label: "Calculez le prix de votre pack de séchage" },
        { to: "/machines", label: "De quel appareil avez-vous besoin ? Comparez la gamme" },
        { to: "/gids/stroomverbruik-bouwdroger", label: "Guide : combien coûte un déshumidificateur en électricité ?" },
        { to: "/gids/hoe-lang-moet-chape-drogen", label: "Guide : combien de temps sèche une chape ?" },
        { to: "/nieuwbouw-drogen", label: "Temps de séchage de la chape et du plafonnage" }
      ]
    },
    {
      kop: "Livraison dans votre région",
      links: [
        { to: "/bouwdroger-huren-antwerpen", label: "Louer un déshumidificateur dans la province d'Anvers" },
        { to: "/bouwdroger-huren-oost-vlaanderen", label: "Louer un déshumidificateur en Flandre orientale" }
      ]
    }
  ],
  contactKicker: "Une question sur le prix ?",
  contactTitel: "Vous préférez un prix sur mesure pour votre chantier ?",
  contactLede: "Donnez-nous votre surface et ce qui doit sécher. Vous recevez dans un délai d'un jour ouvrable une proposition avec le bon pack et la bonne durée.",
  contactOnderwerpen: [
    "Prix d'un pack de séchage",
    "Prix d'un appareil seul",
    "Question sur la garantie de séchage",
    "Facture et TVA",
    "Autre chose"
  ],
  contactPlaceholder: "P. ex. nouvelle construction de 160 m² avec une chape de 6 cm, livraison mi-décembre, merci pour une proposition de prix."
};
const en = {
  service: {
    name: "Hire of construction dehumidifiers, fans and site heaters",
    description: "Transparent hire prices per day, per week and per drying package, with no deposit. Calculated drying packages with delivery and installation include moisture readings and the drying guarantee.",
    serviceType: "Construction dehumidifier hire"
  },
  catalogus: "Hire rates for construction dehumidifiers, fans and site heaters",
  home: "Home",
  prijzen: "Prices",
  faq: (f) => {
    const eerste = f.drogers[0];
    const laatste = f.drogers[f.drogers.length - 1];
    const btw = f.incl ? "including VAT" : "excluding VAT";
    return [
      {
        question: "How much does it cost to hire a construction dehumidifier per day?",
        answer: `Hiring a construction dehumidifier from Vernast costs between ${f.prijs(eerste.perDay)} and ${f.prijs(laatste.perDay)} per day, ${btw}. The price depends on the capacity: the ${eerste.short} removes ${eerste.litersPerDay} litres of moisture per 24 hours, the ${laatste.short} up to ${laatste.litersPerDay} litres. These are the hire prices for individual machines. With a calculated drying package, delivery, installation, moisture readings and collection are also included.`
      },
      {
        question: "Do I have to pay a deposit?",
        answer: "No. We do not ask for a deposit on the machine. You only pay the hire price for the days you use the machine, plus any extra options you choose yourself."
      },
      {
        question: "Are delivery and collection included?",
        answer: "Delivery and collection are free from a hire period of four weeks. For shorter periods we charge a delivery fee; if you collect from our warehouse in Aartselaar yourself, you get €25 off the hire price."
      },
      {
        question: "Do the prices include VAT?",
        answer: f.incl ? "Yes, the prices on this page include VAT. The standard 21 % VAT rate applies to the hire of construction dehumidifiers. The VAT amount is shown separately on your invoice, so you can submit it to your insurer or accountant." : "No, all prices shown exclude VAT. The standard 21 % VAT rate applies to the hire of construction dehumidifiers. The VAT amount is shown separately on your invoice, so you can submit it to your insurer or accountant."
      },
      {
        question: "How much does it cost to hire a construction dehumidifier per week?",
        answer: `Per week, a construction dehumidifier from Vernast costs ${f.drogers.map((t) => `${f.weekprijs(t)} for the ${t.short}`).join(", ")}, ${btw}. That is the daily rate times seven days in each case. You can work out a complete drying package with a fan in the Calculator.`
      },
      {
        question: "How much electricity does a construction dehumidifier use?",
        answer: f.middenKw ? `The ${f.midden.short} draws a maximum of ${f.kw(f.middenKw)} kW. If it runs for a full day at full power, that is ${f.kwh(f.middenKw * 24)} per day. In practice consumption is lower, because the built-in humidistat turns the machine down as soon as the target humidity is reached. Multiply by the kWh price in your own contract for the cost.` : "That depends on the machine: the power input is listed on every machine page. Multiply it by the number of hours and by the kWh price in your own contract."
      },
      {
        question: "Does it get cheaper if I hire for longer?",
        answer: "The daily rate stays the same however long you hire; there is no surcharge for a short period. What you gain by hiring for longer is the delivery: from four weeks, delivery and collection are free."
      },
      {
        question: "Can I extend if the work runs over?",
        answer: "Yes. If the work runs over or the reading is not right yet, you extend by the week at the same daily rate; you receive a link by email for this and don't need to phone. If you hire a calculated drying package and it is still not dry despite correct drying conditions, you extend free of charge: that is the drying guarantee."
      },
      {
        question: "When is the drying guarantee included?",
        answer: "The drying guarantee is included with a drying package that Vernast calculates, delivers and installs for your situation. We take readings at the start and at handover. If the material is not dry within the calculated period despite correct drying conditions, you continue hiring the machines free of charge. The guarantee does not apply to individual machines that you collect or install yourself."
      }
    ];
  },
  heroKick: "Rates",
  heroH1: "Construction dehumidifier hire: prices with a drying guarantee.",
  heroP: "See the hire price per day or per week, or calculate a complete drying package for your site. No deposit and no hidden costs. Choose a package that we calculate, deliver and install, and our 100 % drying guarantee is included.",
  berekenPrijs: "Calculate your price",
  heroAlt: "Worry-free hire with Vernast: one price, no deposit",
  heroBadge: "100 % drying guarantee",
  heroBadgeSub: "on calculated packages with installation",
  keuzeKick: "First this",
  keuzeH2: "Drying guarantee or just hire a machine?",
  keuzeLede: "You can do either with us. An individual machine has a simple daily rate and you install it yourself. With a drying package you buy more certainty: we calculate the capacity and drying time, install the machines and measure the result. That is why our drying guarantee only applies to that complete package.",
  pakketLab: "What we recommend",
  pakketSub: "Drying package",
  pakketH3: "Calculated, delivered and measured",
  pakketP: "The Calculator turns your floor area, ceiling height and situation into the right number of machines and a calculated drying period. Our technician installs everything, connects the condensate drain and measures the moisture content at the start and at handover.",
  pakketLijst: (pct) => /* @__PURE__ */ jsxs("ul", { children: [
    /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsx(CheckIcon, { size: 14, strokeWidth: 3 }),
      " ",
      /* @__PURE__ */ jsxs("span", { children: [
        /* @__PURE__ */ jsx("b", { children: "100 % drying guarantee:" }),
        " not dry within the calculated period? You continue hiring free of charge.*"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsx(CheckIcon, { size: 14, strokeWidth: 3 }),
      " Moisture reading at the start and at handover, in black and white"
    ] }),
    /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsx(CheckIcon, { size: 14, strokeWidth: 3 }),
      " Delivery, installation and collection included"
    ] }),
    /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsx(CheckIcon, { size: 14, strokeWidth: 3 }),
      " Faulty machine replaced within 24 hours"
    ] }),
    /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsx(CheckIcon, { size: 14, strokeWidth: 3 }),
      " ",
      pct,
      " % discount when you pay in full online"
    ] })
  ] }),
  pakketBtn: "Calculate your drying package",
  losSub: "Individual machine",
  losH3: "You install it, you monitor it",
  losP: "One dehumidifier, fan or site heater, per day or per week. Handy for a small room, a second machine alongside a package, or if you want to keep the drying in your own hands. You collect it in Aartselaar or have it delivered.",
  losLijst: /* @__PURE__ */ jsxs("ul", { children: [
    /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsx(CheckIcon, { size: 14, strokeWidth: 3 }),
      " One fixed daily rate, no deposit"
    ] }),
    /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsx(CheckIcon, { size: 14, strokeWidth: 3 }),
      " Collection discount at our warehouse in Aartselaar"
    ] }),
    /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsx(CheckIcon, { size: 14, strokeWidth: 3 }),
      " Can also be added alongside a package"
    ] }),
    /* @__PURE__ */ jsxs("li", { className: "niet", children: [
      /* @__PURE__ */ jsx(XIcon, { size: 14 }),
      " No drying guarantee: we do not install or measure"
    ] }),
    /* @__PURE__ */ jsxs("li", { className: "niet", children: [
      /* @__PURE__ */ jsx(XIcon, { size: 14 }),
      " You check yourself whether it is dry"
    ] })
  ] }),
  losBtn: "View the range",
  keuzeNote: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("b", { children: "Why that line exists." }),
    ' A guarantee can only rest on a calculation. We size the package to the volume and situation, install it ourselves and record the start and end point with a reading; that makes "dry" a measured result for us, not a feeling. With an individual machine you decide the set-up yourself, and then we cannot promise the outcome. You can read the full conditions on',
    " ",
    /* @__PURE__ */ jsx(Link, { to: lp("/drooggarantie"), children: "the drying guarantee page" }),
    "."
  ] }),
  opbouwKick: "How the price is built up",
  opbouwH2: "This is how your amount is arrived at.",
  opbouwLede: "Four things determine what you pay: what you hire, for how long, how you pay, and which options you tick yourself. All the amounts below come from the same price list the checkout calculates with.",
  pakketprijsH3: "Drying package: a fixed price per situation",
  pakketprijsP: "A package combines a dehumidifier, a fan and, if needed, heaters for a given floor area, type of work and thickness. The price is the package's daily rate times the days of the hire period, and that period follows from the thickness of the screed or plaster.",
  inbegrepenZin: (lijst) => ` Included: ${lijst}.`,
  losprijsH3: "Individual machines: daily rate × days",
  losprijsP: (naam, dag, tweeWeken) => `Every machine has a daily rate. The hire price is that daily rate times the number of days, with no surcharge for a short period. A ${naam} at ${dag} per day therefore costs ${tweeWeken} for two weeks.`,
  onlineH3: (pct) => `${pct} % discount for paying online`,
  onlineP: (pct, voorschot) => `If you pay the full hire online when you book, you get ${pct} % off the whole amount. You can also pay just a fixed order confirmation of ${voorschot} incl. VAT and settle the balance at installation or collection.`,
  optiesH3: "Options you choose yourself",
  dekking: (naam, prijs) => `${naam} cover: ${prijs}`,
  pomp: (lp, prijs) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/toebehoren/condenspomp"), children: "Condensate pump" }),
    ": ",
    prijs,
    " per dehumidifier per day"
  ] }),
  ladder: (prijs) => `Installation upstairs via a ladder: ${prijs}`,
  optie: (naam, prijs, eenheid) => `${naam}: ${prijs} ${eenheid}`,
  opbouwNote: (incl, pct) => `All amounts ${incl ? "include" : "exclude"} VAT unless stated otherwise. Hire is subject to ${pct} % VAT.`,
  vbKick: "Worked example",
  vbLede1: (weken) => `A screed package without heaters, with a hire period of ${weken} ${weken === 1 ? "week" : "weeks"}, and the options that are ticked by default when booking. You can untick those options.`,
  vbLede2: 'This amount comes from the same module the booking page and Stripe calculate with. What you see here is what you will see at checkout: no "from" price that turns out higher afterwards.',
  vbBtn: "Calculate your own package",
  vbCaption: "Worked example of a drying package for screed",
  vbPakket: (dagen) => `Package (${dagen} days)`,
  inbegrepen: "Included",
  vbKorting: (pct) => `Online payment discount (${pct} %)`,
  totaalExcl: "Total excl. VAT",
  btwRij: (pct) => `VAT ${pct} %`,
  totaalIncl: "Total incl. VAT",
  losKick: "Individual machines",
  losTabelH2: "How much does a construction dehumidifier cost per day and per week?",
  losTabelLede: "The weekly amounts are simply the daily rate times the number of days. There is no surcharge for a short hire period, and no sliding scale that you only discover at checkout.",
  losCaption: (incl) => `Hire prices per construction dehumidifier and per hire period, ${incl ? "including" : "excluding"} VAT`,
  thDroger: "Dehumidifier",
  thPerDag: "Per day",
  weken: (w) => `${w} ${w === 1 ? "week" : "weeks"}`,
  drogerSub: (liter, m3) => `${liter} L/day · up to ${m3} m³`,
  losNote: (incl, pct) => `Prices ${incl ? "incl." : "excl."} VAT, ${pct} % VAT applies. Delivery and collection are free from a hire period of four weeks.`,
  extraKick: "Fan and heater",
  extraH3: "Dry faster, hired separately.",
  extraLede: "A dehumidifier takes the moisture out of the air; a fan makes sure dry air also reaches the wet building fabric, and a heater keeps the room at temperature. Together they save days. In a calculated package they are already included wherever your situation needs them.",
  perDag: "/day",
  inbKick: "Included with a drying package",
  inbH2: "Not just machines, but certainty.",
  inbLede: "The package price covers full support from start to handover. These services are not listed as separate options at checkout and do not turn up unexpectedly on the invoice.",
  inbegrepenLijst: [
    "100 % drying guarantee on calculated drying packages",
    "Delivery to your door by a technician",
    "Collection after use",
    "Free 10 m extension lead, 2.5 mm²",
    "Explanation during installation",
    "Moisture reading at the start and at handover",
    "No deposit required"
  ],
  garanties: [
    { title: "Machine faulty?", desc: "We replace it the next working day. No arguments, no extra cost: you are hiring a working machine, not just a machine." },
    { title: "Always reachable", desc: "Weekdays, weekends and bank holidays. Drying that stops over the weekend is a week lost." },
    { title: "A clear invoice", desc: "In your name, with VAT shown separately and the readings attached, ready for your insurance claim or accountant." }
  ],
  stroomKick: "Electricity",
  stroomH2: "How much electricity does a construction dehumidifier use?",
  stroomLede: "You pay for the electricity yourself, as the machines run on your supply. Below is the power input per machine and what that means at full power per day and per week. That is an upper limit: the built-in humidistat turns a dehumidifier down as soon as the set humidity is reached. Multiply the number of kWh by the price in your own contract.",
  stroomCaption: "Electricity consumption per machine at full power",
  stroomTh: ["Machine", "Power", "Max. per day", "Max. per week"],
  stroomNote: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("b", { children: "And a site heater?" }),
    " It uses far more than a dehumidifier: its power is given in kilowatts on the machine page, and the thermostat switches it off as soon as the room is at temperature. In a cold room it still pays off, because otherwise the dehumidifier has to run much longer. More figures in the guide to",
    " ",
    /* @__PURE__ */ jsx(Link, { to: lp("/gids/stroomverbruik-bouwdroger"), children: "the power consumption of a construction dehumidifier" }),
    "."
  ] }),
  faqTitel: "Frequently asked questions about the price.",
  slotKick: "Ready to book",
  slotH3: "No deposit, no hidden costs, delivery within 24 hours.",
  slotP: (pct) => `The Calculator gives you the full price for your floor area in a few clicks, including the drying guarantee on a calculated package. You get ${pct} % off if you pay online straight away.`,
  slotAlt: "Vernast technician with the payment terminal",
  verderTitel: "Further reading about prices and packages",
  verderLezen: [
    {
      kop: "What our customers had dried",
      links: [
        { to: "/realisaties/bouwdroging-winkelpand", label: "Accelerated construction drying within a tight build schedule" },
        { to: "/realisaties/chape-pleisterwerk-drogen-hasselt", label: "Plaster and screed dried faster in Hasselt" },
        { to: "/realisaties/kelder-en-kamer-drogen-antwerpen", label: "Cellar and living space dried out after water damage" }
      ]
    },
    {
      kop: "Choosing and calculating",
      links: [
        { to: "/verhuur/calculator", label: "Calculate the price of your drying package" },
        { to: "/machines", label: "Which machine do you need? Compare the range" },
        { to: "/gids/stroomverbruik-bouwdroger", label: "Guide: what does a construction dehumidifier cost in electricity?" },
        { to: "/gids/hoe-lang-moet-chape-drogen", label: "Guide: how long does screed take to dry?" },
        { to: "/nieuwbouw-drogen", label: "Drying times for screed and plaster" }
      ]
    },
    {
      kop: "Delivery in your region",
      links: [
        { to: "/bouwdroger-huren-antwerpen", label: "Dehumidifier hire in the province of Antwerp" },
        { to: "/bouwdroger-huren-oost-vlaanderen", label: "Dehumidifier hire in East Flanders" }
      ]
    }
  ],
  contactKicker: "A question about the price?",
  contactTitel: "Prefer a price tailored to your site?",
  contactLede: "Give us your floor area and what needs drying. Within one working day you will receive a proposal with the right package and the right hire period.",
  contactOnderwerpen: [
    "Price of a drying package",
    "Price of an individual machine",
    "Question about the drying guarantee",
    "Invoice and VAT",
    "Something else"
  ],
  contactPlaceholder: "E.g. new build of 160 m² with 6 cm screed, delivery mid-December, I'd like a price proposal."
};
const COPY = { nl, fr, en };
function rekenregelInTaal(regel, taal) {
  if (taal === "nl") return regel;
  const r = REKENREGELS[taal];
  if (r.vast[regel]) return r.vast[regel];
  const dekking = /^Dekking (.+)$/.exec(regel);
  if (dekking) return r.dekking(vertaalPortaal(dekking[1], taal));
  const pomp = /^(\d+)× condenspomp · (\d+) dagen$/.exec(regel);
  if (pomp) return r.pomp(pomp[1], pomp[2]);
  const extra = /^(.+) · (\d+) wk$/.exec(regel);
  if (extra) return `${vertaalPortaal(extra[1], taal)} · ${extra[2]} ${r.wk}`;
  return vertaalPortaal(regel, taal);
}
const REKENREGELS = {
  fr: {
    vast: {
      "Standaard dekking": "Couverture standard",
      "Vochtmeting bij start & oplevering": "Mesure d'humidité au début & à la fin",
      "Plaatsing verdieping via ladder": "Installation à l'étage par une échelle",
      "Plaatsing op verdieping (trap)": "Installation à l'étage (escalier)",
      "Zelf afhalen": "Enlèvement par vos soins"
    },
    dekking: (naam) => `Couverture ${naam}`,
    pomp: (aantal, dagen) => `${aantal}× pompe à condensats · ${dagen} jours`,
    wk: "sem."
  },
  en: {
    vast: {
      "Standaard dekking": "Standard cover",
      "Vochtmeting bij start & oplevering": "Moisture reading at start & handover",
      "Plaatsing verdieping via ladder": "Installation upstairs via ladder",
      "Plaatsing op verdieping (trap)": "Installation upstairs (stairs)",
      "Zelf afhalen": "Self-collection"
    },
    dekking: (naam) => `${naam} cover`,
    pomp: (aantal, dagen) => `${aantal}× condensate pump · ${dagen} days`,
    wk: "wk"
  }
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/PrijzenPage.tsx");
const PROCENT_ONLINE = Math.round(ONLINE_DISCOUNT * 100);
const PROCENT_BTW = Math.round(VAT_RATE * 100);
const MIDDEN = DROGERS[Math.floor(DROGERS.length / 2)];
const RAPPORT = EXTRAS.find((x) => x.k === "rapport");
const STROOMKAST = EXTRAS.find((x) => x.k === "stroom");
const VOORBEELD_CONFIG = parseConfig(
  new URLSearchParams({ wat: "chape", size: DEFAULT_SIZE, cd: DEFAULT_CD, heat: "0" })
);
const VOORBEELD_PAKKET = findPackage(Number(DEFAULT_SIZE), "chape", Number(DEFAULT_CD));
const VOORBEELD = VOORBEELD_PAKKET ? bookingSummary(VOORBEELD_CONFIG, EMPTY_OPTIONS) : null;
function vermogenKw(key) {
  const rij = PRODUCTS[key]?.key.find(([label]) => label === "Verbruik");
  if (!rij) return null;
  const kw = Number(rij[1].replace(",", "."));
  return Number.isFinite(kw) && kw > 0 ? kw : null;
}
const kwh = (n, taal) => `${n.toLocaleString(NUMBER_LOCALE[taal], { maximumFractionDigits: 1 })} kWh`;
const euroCentIn = (n, taal) => taal === "nl" ? euro(n) : `${n < 0 ? "− " : ""}${formatEuro(Math.abs(n), taal)}`;
const VERBRUIK = TARIEVEN_PUBLIEK.map((t) => ({ t, kw: vermogenKw(t.key) })).filter(
  (r) => r.kw !== null
);
const MIDDEN_KW = vermogenKw(MIDDEN.key);
const EXTRA_DEVICES = TARIEVEN_PUBLIEK.filter((t) => t.litersPerDay === 0);
const GARANTIE_ICONEN = [BoltIcon, SupportIcon, CardIcon];
function useBedrag() {
  const toon = useToonBedrag();
  const taal = useTaal();
  const fmt = (excl) => {
    const { bedrag } = toon(excl);
    return formatEuro(bedrag, taal, Number.isInteger(bedrag) ? 0 : 2);
  };
  return { fmt, incl: toon(100).bedrag !== 100 };
}
const PrijzenPage = () => {
  const taal = useTaal();
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const { fmt, incl } = useBedrag();
  const drogers = DROGERS.map((d) => tariefInTaal(d, taal));
  const midden = tariefInTaal(MIDDEN, taal);
  const faq = t.faq({
    drogers,
    midden,
    middenKw: MIDDEN_KW,
    prijs: fmt,
    weekprijs: (d) => fmt(priceForWeeks(d, 1)),
    kwh: (n) => kwh(n, taal),
    kw: (n) => n.toLocaleString(NUMBER_LOCALE[taal]),
    incl
  });
  const cover = coverInTaal(taal);
  const extras = extrasInTaal(taal);
  const rapport = RAPPORT && extras.find((x) => x.k === RAPPORT.k);
  const stroomkast = STROOMKAST && extras.find((x) => x.k === STROOMKAST.k);
  const voorbeeldPakket = VOORBEELD_PAKKET && pakketInTaal(VOORBEELD_PAKKET, taal);
  return /* @__PURE__ */ jsxs("div", { className: "v3c pr-page", children: [
    /* @__PURE__ */ jsx(
      PageMeta,
      {
        ...useSeo("prijzen"),
        jsonLd: [
          serviceSchema({
            name: t.service.name,
            description: t.service.description,
            path: lp("/prijzen"),
            serviceType: t.service.serviceType
          }),
          offerCatalogSchema(
            t.catalogus,
            TARIEVEN_PUBLIEK.map((nl2) => {
              const tr = tariefInTaal(nl2, taal);
              return {
                name: tr.name,
                description: tr.summary,
                path: lp(tr.path),
                // Het schema draagt de catalogusprijs, excl. btw, zoals altijd.
                pricePerDay: tr.perDay
              };
            })
          ),
          faqSchema(faq),
          breadcrumbSchema([
            { name: t.home, path: lp("/") },
            { name: t.prijzen, path: lp("/prijzen") }
          ])
        ]
      }
    ),
    /* @__PURE__ */ jsx(V3Header, { lightAfter: 420 }),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("div", { className: "redtop", children: /* @__PURE__ */ jsx("section", { className: "hero", children: /* @__PURE__ */ jsxs("div", { className: "wrap hero-grid", children: [
        /* @__PURE__ */ jsxs("div", { className: "hero-copy", children: [
          /* @__PURE__ */ jsx("span", { className: "kick", children: t.heroKick }),
          /* @__PURE__ */ jsx("h1", { children: t.heroH1 }),
          /* @__PURE__ */ jsx("p", { children: t.heroP }),
          /* @__PURE__ */ jsxs("div", { className: "hcta", children: [
            /* @__PURE__ */ jsxs(Link, { className: "btn btn-white", to: lp("/verhuur/calculator"), children: [
              t.berekenPrijs,
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
              src: "/vernast/man-zen-crop.webp",
              alt: t.heroAlt,
              width: 700,
              height: 760,
              loading: "lazy",
              decoding: "async",
              style: { width: "min(84%,380px)", position: "relative", zIndex: 2 }
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "fbadge", style: { top: "11%", right: "-14%", left: "auto", zIndex: 0 }, children: [
            /* @__PURE__ */ jsx("span", { className: "ic", children: /* @__PURE__ */ jsx(TagIcon, { size: 15 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              t.heroBadge,
              /* @__PURE__ */ jsx("small", { children: t.heroBadgeSub })
            ] })
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "sw", id: "pakket-of-los", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
          /* @__PURE__ */ jsx("span", { className: "kick", children: t.keuzeKick }),
          /* @__PURE__ */ jsx("h2", { className: "sec", children: t.keuzeH2 }),
          /* @__PURE__ */ jsx("p", { className: "lede", children: t.keuzeLede })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "keuze2", children: [
          /* @__PURE__ */ jsxs(Reveal, { from: "up", className: "kz aanbevolen", children: [
            /* @__PURE__ */ jsx("span", { className: "kzlab", children: t.pakketLab }),
            /* @__PURE__ */ jsx("span", { className: "kzsub", children: t.pakketSub }),
            /* @__PURE__ */ jsx("h3", { children: t.pakketH3 }),
            /* @__PURE__ */ jsx("p", { children: t.pakketP }),
            t.pakketLijst(PROCENT_ONLINE),
            /* @__PURE__ */ jsxs(Link, { className: "btn", to: lp("/verhuur/calculator"), children: [
              t.pakketBtn,
              /* @__PURE__ */ jsx(ArrowRightIcon, {})
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Reveal, { from: "up", delay: 0.08, className: "kz", children: [
            /* @__PURE__ */ jsx("span", { className: "kzsub", children: t.losSub }),
            /* @__PURE__ */ jsx("h3", { children: t.losH3 }),
            /* @__PURE__ */ jsx("p", { children: t.losP }),
            t.losLijst,
            /* @__PURE__ */ jsxs(Link, { className: "btn btn-line", to: lp("/machines"), children: [
              t.losBtn,
              /* @__PURE__ */ jsx(ArrowRightIcon, {})
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "note", children: t.keuzeNote(lp) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "sr", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
          /* @__PURE__ */ jsx("span", { className: "kick", children: t.opbouwKick }),
          /* @__PURE__ */ jsx("h2", { className: "sec", children: t.opbouwH2 }),
          /* @__PURE__ */ jsx("p", { className: "lede", children: t.opbouwLede })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "g2", children: [
          /* @__PURE__ */ jsxs(Reveal, { from: "up", className: "kaart", children: [
            /* @__PURE__ */ jsx("div", { className: "ki", children: /* @__PURE__ */ jsx(CheckIcon, { size: 20, strokeWidth: 2.4 }) }),
            /* @__PURE__ */ jsx("h3", { children: t.pakketprijsH3 }),
            /* @__PURE__ */ jsxs("p", { children: [
              t.pakketprijsP,
              voorbeeldPakket && voorbeeldPakket.includes.length > 0 ? t.inbegrepenZin(voorbeeldPakket.includes.join(", ").toLowerCase()) : ""
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Reveal, { from: "up", delay: 0.08, className: "kaart", children: [
            /* @__PURE__ */ jsx("div", { className: "ki", children: /* @__PURE__ */ jsx(TagIcon, { size: 20 }) }),
            /* @__PURE__ */ jsx("h3", { children: t.losprijsH3 }),
            /* @__PURE__ */ jsx("p", { children: t.losprijsP(midden.short, fmt(midden.perDay), fmt(priceForWeeks(midden, 2))) })
          ] }),
          /* @__PURE__ */ jsxs(Reveal, { from: "up", delay: 0.16, className: "kaart", children: [
            /* @__PURE__ */ jsx("div", { className: "ki", children: /* @__PURE__ */ jsx(CardIcon, { size: 20 }) }),
            /* @__PURE__ */ jsx("h3", { children: t.onlineH3(PROCENT_ONLINE) }),
            /* @__PURE__ */ jsx("p", { children: t.onlineP(PROCENT_ONLINE, euroCentIn(DEPOSIT_GROSS, taal)) })
          ] }),
          /* @__PURE__ */ jsxs(Reveal, { from: "up", delay: 0.24, className: "kaart", children: [
            /* @__PURE__ */ jsx("div", { className: "ki", children: /* @__PURE__ */ jsx(BoltIcon, { size: 20 }) }),
            /* @__PURE__ */ jsx("h3", { children: t.optiesH3 }),
            /* @__PURE__ */ jsxs("ul", { className: "feats", style: { marginTop: "10px", marginBottom: 0 }, children: [
              cover.filter((c) => c.price > 0).map((c) => /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx(CheckIcon, { size: 12, strokeWidth: 3 }),
                t.dekking(c.name, fmt(c.price))
              ] }, c.k)),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx(CheckIcon, { size: 12, strokeWidth: 3 }),
                t.pomp(lp, fmt(PUMP.price))
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx(CheckIcon, { size: 12, strokeWidth: 3 }),
                t.ladder(fmt(LADDER_FEE))
              ] }),
              rapport && /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx(CheckIcon, { size: 12, strokeWidth: 3 }),
                t.optie(rapport.name, fmt(rapport.price), rapport.unit)
              ] }),
              stroomkast && /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx(CheckIcon, { size: 12, strokeWidth: 3 }),
                t.optie(stroomkast.name, fmt(stroomkast.price), stroomkast.unit)
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "tblnote", children: t.opbouwNote(incl, PROCENT_BTW) })
      ] }) }),
      VOORBEELD && voorbeeldPakket && /* @__PURE__ */ jsx("section", { className: "sw", children: /* @__PURE__ */ jsxs("div", { className: "wrap split", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "kick", children: t.vbKick }),
          /* @__PURE__ */ jsx("h2", { className: "sec", children: voorbeeldPakket.title }),
          /* @__PURE__ */ jsx("p", { className: "lede", children: t.vbLede1(VOORBEELD.weeks) }),
          /* @__PURE__ */ jsx("p", { className: "lede", children: t.vbLede2 }),
          /* @__PURE__ */ jsx("div", { className: "hcta", style: { marginTop: "26px" }, children: /* @__PURE__ */ jsxs(Link, { className: "btn", to: lp("/verhuur/calculator"), children: [
            t.vbBtn,
            /* @__PURE__ */ jsx(ArrowRightIcon, {})
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("div", { style: { display: "block" }, children: /* @__PURE__ */ jsx("div", { className: "tblwrap", style: { marginTop: 0 }, children: /* @__PURE__ */ jsx("div", { className: "tblscroll", children: /* @__PURE__ */ jsxs("table", { className: "tbl bon", children: [
          /* @__PURE__ */ jsx("caption", { className: "sr-only", children: t.vbCaption }),
          /* @__PURE__ */ jsxs("tbody", { children: [
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("th", { scope: "row", children: t.vbPakket(VOORBEELD.days) }),
              /* @__PURE__ */ jsx("td", { children: euroCentIn(VOORBEELD.base, taal) })
            ] }),
            VOORBEELD.lines.map((l) => /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("th", { scope: "row", children: rekenregelInTaal(l.l, taal) }),
              /* @__PURE__ */ jsx("td", { children: l.inc ? t.inbegrepen : euroCentIn(l.v, taal) })
            ] }, l.l)),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("th", { scope: "row", children: t.vbKorting(PROCENT_ONLINE) }),
              /* @__PURE__ */ jsx("td", { children: euroCentIn(-VOORBEELD.discount, taal) })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "totaal", children: [
              /* @__PURE__ */ jsx("th", { scope: "row", children: t.totaalExcl }),
              /* @__PURE__ */ jsx("td", { children: euroCentIn(VOORBEELD.netTotal, taal) })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("th", { scope: "row", children: t.btwRij(PROCENT_BTW) }),
              /* @__PURE__ */ jsx("td", { children: euroCentIn(VOORBEELD.vat, taal) })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "totaal", children: [
              /* @__PURE__ */ jsx("th", { scope: "row", children: t.totaalIncl }),
              /* @__PURE__ */ jsx("td", { children: euroCentIn(VOORBEELD.grossTotal, taal) })
            ] })
          ] })
        ] }) }) }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "sr", id: "tarieven", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
          /* @__PURE__ */ jsx("span", { className: "kick", children: t.losKick }),
          /* @__PURE__ */ jsx("h2", { className: "sec", children: t.losTabelH2 }),
          /* @__PURE__ */ jsx("p", { className: "lede", children: t.losTabelLede })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "tblwrap", style: { marginTop: 0 }, children: /* @__PURE__ */ jsx("div", { className: "tblscroll", children: /* @__PURE__ */ jsxs("table", { className: "tbl", children: [
          /* @__PURE__ */ jsx("caption", { className: "sr-only", children: t.losCaption(incl) }),
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { scope: "col", children: t.thDroger }),
            /* @__PURE__ */ jsx("th", { scope: "col", children: t.thPerDag }),
            RENTAL_WEEKS.map((w) => /* @__PURE__ */ jsx("th", { scope: "col", children: t.weken(w) }, w))
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: drogers.map((d) => /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsxs("th", { scope: "row", children: [
              /* @__PURE__ */ jsx(Link, { to: lp(d.path), children: d.short }),
              /* @__PURE__ */ jsx("span", { style: { display: "block", fontWeight: 400, fontSize: "11.5px", color: "var(--txt-dim)" }, children: t.drogerSub(d.litersPerDay, d.volume) })
            ] }),
            /* @__PURE__ */ jsx("td", { style: { whiteSpace: "nowrap", fontWeight: 700, color: "var(--txt)" }, children: fmt(d.perDay) }),
            RENTAL_WEEKS.map((w) => /* @__PURE__ */ jsx("td", { style: { whiteSpace: "nowrap" }, children: fmt(priceForWeeks(d, w)) }, w))
          ] }, d.key)) })
        ] }) }) }),
        /* @__PURE__ */ jsx("p", { className: "tblnote", children: t.losNote(incl, PROCENT_BTW) }),
        /* @__PURE__ */ jsxs("div", { className: "split boven", style: { marginTop: "44px" }, children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "kick", children: t.extraKick }),
            /* @__PURE__ */ jsx("h3", { className: "sec", style: { fontSize: "clamp(22px,2.4vw,30px)" }, children: t.extraH3 }),
            /* @__PURE__ */ jsx("p", { className: "lede", children: t.extraLede })
          ] }),
          /* @__PURE__ */ jsx("div", { style: { display: "block" }, children: /* @__PURE__ */ jsx("div", { className: "pricerows", children: EXTRA_DEVICES.map((nl2) => {
            const d = tariefInTaal(nl2, taal);
            return /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("span", { className: "pn", children: [
                /* @__PURE__ */ jsx(Link, { to: lp(d.path), children: d.name }),
                /* @__PURE__ */ jsx("small", { children: d.type })
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "pv", children: [
                fmt(d.perDay),
                /* @__PURE__ */ jsx("span", { children: t.perDag })
              ] })
            ] }, d.key);
          }) }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "sw", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
          /* @__PURE__ */ jsx("span", { className: "kick", children: t.inbKick }),
          /* @__PURE__ */ jsx("h2", { className: "sec", children: t.inbH2 }),
          /* @__PURE__ */ jsx("p", { className: "lede", children: t.inbLede })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "vinkjes", style: { marginBottom: "44px" }, children: t.inbegrepenLijst.map((item, i) => /* @__PURE__ */ jsxs(Reveal, { from: "left", delay: i * 0.07, children: [
          /* @__PURE__ */ jsx(CheckIcon, { size: 16, strokeWidth: 3 }),
          /* @__PURE__ */ jsx("span", { children: item })
        ] }, item)) }),
        /* @__PURE__ */ jsx("div", { className: "g3", children: t.garanties.map(({ title, desc }, i) => {
          const Icon = GARANTIE_ICONEN[i];
          return /* @__PURE__ */ jsxs(Reveal, { from: "up", delay: i * 0.08, className: "kaart", children: [
            /* @__PURE__ */ jsx("div", { className: "ki", children: /* @__PURE__ */ jsx(Icon, { size: 20 }) }),
            /* @__PURE__ */ jsx("h3", { children: title }),
            /* @__PURE__ */ jsx("p", { children: desc })
          ] }, title);
        }) })
      ] }) }),
      VERBRUIK.length > 0 && /* @__PURE__ */ jsx("section", { className: "sr", id: "stroomverbruik", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
          /* @__PURE__ */ jsx("span", { className: "kick", children: t.stroomKick }),
          /* @__PURE__ */ jsx("h2", { className: "sec", children: t.stroomH2 }),
          /* @__PURE__ */ jsx("p", { className: "lede", children: t.stroomLede })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "tblwrap", style: { marginTop: 0 }, children: /* @__PURE__ */ jsx("div", { className: "tblscroll", children: /* @__PURE__ */ jsxs("table", { className: "tbl", children: [
          /* @__PURE__ */ jsx("caption", { className: "sr-only", children: t.stroomCaption }),
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { children: t.stroomTh.map((th) => /* @__PURE__ */ jsx("th", { scope: "col", children: th }, th)) }) }),
          /* @__PURE__ */ jsx("tbody", { children: VERBRUIK.map(({ t: tarief, kw }) => /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { scope: "row", children: /* @__PURE__ */ jsx(Link, { to: lp(tarief.path), children: tarief.short }) }),
            /* @__PURE__ */ jsxs("td", { style: { whiteSpace: "nowrap" }, children: [
              kw.toLocaleString(NUMBER_LOCALE[taal]),
              " kW"
            ] }),
            /* @__PURE__ */ jsx("td", { style: { whiteSpace: "nowrap" }, children: kwh(kw * 24, taal) }),
            /* @__PURE__ */ jsx("td", { style: { whiteSpace: "nowrap" }, children: kwh(kw * 24 * 7, taal) })
          ] }, tarief.key)) })
        ] }) }) }),
        /* @__PURE__ */ jsx("div", { className: "note", children: t.stroomNote(lp) })
      ] }) }),
      /* @__PURE__ */ jsx(
        FaqBlok,
        {
          titel: t.faqTitel,
          vragen: faq.map((item) => ({ q: item.question, a: item.answer })),
          sleutel: "pr-faq",
          variant: "wit",
          children: /* @__PURE__ */ jsxs("div", { className: "manband", children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-t", children: [
              /* @__PURE__ */ jsx("span", { className: "mbk", children: t.slotKick }),
              /* @__PURE__ */ jsx("h3", { children: t.slotH3 }),
              /* @__PURE__ */ jsx("p", { children: t.slotP(PROCENT_ONLINE) }),
              /* @__PURE__ */ jsxs("div", { className: "mb-cta", children: [
                /* @__PURE__ */ jsxs(Link, { className: "btn btn-white", to: lp("/verhuur/calculator"), children: [
                  t.berekenPrijs,
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
                className: "mb-man breed",
                src: "/vernast/man-betaling.webp",
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
        VerderLezen,
        {
          titel: t.verderTitel,
          groepen: t.verderLezen.map((g) => ({
            ...g,
            links: g.links.map((l) => ({ ...l, to: lp(l.to) }))
          }))
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
  PrijzenPage as default
};
