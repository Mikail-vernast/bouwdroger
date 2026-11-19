import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { G as GidsShell, a as GidsFaqSectie } from "./GidsShell-BMzhBGtD.js";
import { C as ContactBlok } from "./ContactBlok-ykYeBJgi.js";
import { R as Reveal } from "./Reveal-NNPkAe35.js";
import { u as useSeo } from "./seo-BMvlJeai.js";
import { p as productInTaal } from "./verhuur.fr-CrIPL5Eo.js";
import { a as useLokaalPad, b as useTaal, c as useToonBedrag, u as useCopy, h as formatEuro, N as NUMBER_LOCALE } from "../main.mjs";
import { b as PUMP, P as PRODUCTS } from "./verhuur-CgnDb-wO.js";
import { T as TARIEVEN_PUBLIEK, e as euro } from "./schema-VJMHyxOJ.js";
import "./PageMeta-BXulEWcY.js";
import "vite-react-ssg";
import "./V3Header-BeIMcMg7.js";
import "react";
import "./FontPreload-C6Rzq6ld.js";
import "./V3Footer-9z4J1I4x.js";
import "./verhuur-8XCQs1EE.js";
import "./packages-DdkKuPcF.js";
import "./tarieven-ZrzMF0e-.js";
import "./FaqBlok-Bkr2MHqW.js";
/* empty css                                */
import "./AanvraagForm-CNDpbMyw.js";
import "lucide-react";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/gids/StroomverbruikPage.copy.tsx");
const COPY = {
  nl: (c) => {
    const { lp, getal: getal2, bedrag: bedrag2, prijs: PRIJS_TXT, V: V2, ONS: ONS2, groot: CONCURRENT2, klein: CONCURRENT_KLEIN2 } = c;
    return {
      crumbHome: "Home",
      crumbGidsen: "Gidsen",
      crumb: "Stroomverbruik van een bouwdroger",
      kick: "Gids · verbruik en kosten",
      h1: "Stroomverbruik van een bouwdroger: wat kost het per dag?",
      intro1: "Een bouwdroger draait dag en nacht, dus de vraag wat dat kost is terecht. De som is eenvoudig: vermogen maal uren maal dagen maal uw prijs per kWh.",
      intro2: (v, zuiniger) => /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("b", { style: { color: "#fff" }, children: "Wij dimensioneren op het volume van uw ruimte." }),
        " Daarom staat er bij ons ",
        getal2(v.kw, 2),
        " kW waar een verhuurder standaard ",
        getal2(CONCURRENT2.kw, 2),
        " kW afzet.",
        " ",
        "Dat is ",
        zuiniger,
        " % minder stroom voor dezelfde droging."
      ] }),
      heroAlt: "Zorgeloos drogen: de bouwdroger draait, u hoeft niets te doen",
      badge: (zuiniger) => /* @__PURE__ */ jsxs(Fragment, { children: [
        zuiniger,
        " % minder stroom",
        /* @__PURE__ */ jsxs("small", { children: [
          "dan een standaard bouwdroger van ",
          getal2(CONCURRENT2.kw, 2),
          " kW"
        ] })
      ] }),
      faq: [
        {
          question: "Hoeveel stroom verbruikt een bouwdroger per dag?",
          answer: V2 ? `Reken met het opgenomen vermogen maal 24 uur. Onze ${V2.short} neemt ${getal2(V2.kw, 2)} kW op; dat is hoogstens ${getal2(V2.kwhDag)} kWh per etmaal als hij onafgebroken op vol vermogen draait. In de praktijk ligt het lager, omdat de hygrostaat het toestel terugschakelt zodra de streefvochtigheid bereikt is.` : "Reken met het opgenomen vermogen op het typeplaatje maal 24 uur. Dat is de bovengrens; in de praktijk ligt het lager, omdat de hygrostaat het toestel terugschakelt zodra de streefvochtigheid bereikt is."
        },
        {
          question: "Wat kost een bouwdroger aan elektriciteit?",
          answer: V2 ? `Vermenigvuldig de kWh per dag met uw prijs per kWh. Met een voorbeeldprijs van ${PRIJS_TXT} per kWh kost de ${V2.short} hoogstens ${bedrag2(V2.kostDag)} per dag aan stroom. Uw eigen prijs staat op uw energiefactuur.` : `Vermenigvuldig de kWh per dag met uw prijs per kWh, die op uw energiefactuur staat.`
        },
        {
          question: "Mag een bouwdroger 24 uur per dag en 's nachts aan blijven?",
          answer: "Ja. Een bouwdroger is gemaakt om dag en nacht door te draaien, en dat moet ook: elk uur stilstand laat het vocht in de lucht weer oplopen. Voert hij het water niet naar een reservoir maar via een slang of condenspomp af, dan loopt hij ook het weekend door zonder dat u iets moet legen."
        },
        {
          question: "Verbruikt een ventilator of een bouwkachel meer dan een bouwdroger?",
          answer: "Een bouwventilator verbruikt minder dan een bouwdroger. Een elektrische bouwkachel verbruikt veel meer: zij levert warmte, en dat kost het meeste energie. Haar thermostaat schakelt wel terug zodra de ruimte op temperatuur is."
        },
        {
          question: "Hoeveel watt verbruikt een bouwdroger per uur?",
          answer: V2 ? `Het opgenomen vermogen is het verbruik per uur. Onze ${V2.short} staat op ${getal2(V2.kw, 2)} kW, dus ${getal2(V2.kw * 1e3, 0)} watt per draaiuur. In ons gamma loopt dat van 200 watt voor een bouwventilator tot 1 400 watt voor de grootste condensbouwdroger; grotere toestellen uit de verhuur halen 2 100 watt.` : "Het opgenomen vermogen op het typeplaatje is het verbruik per draaiuur. Bij condensbouwdrogers ligt dat doorgaans tussen 750 en 2 100 watt."
        },
        {
          question: "Wat kost een bouwdroger per week en per maand aan stroom?",
          answer: V2 ? `Reken het dagverbruik maal het aantal dagen. Onze ${V2.short} komt op hoogstens ${getal2(V2.kwhDag * 7)} kWh per week (${bedrag2(V2.kwhDag * 7 * c.prijsKwh)}) en ${getal2(V2.kwhDag * 30)} kWh per maand (${bedrag2(V2.kwhDag * 30 * c.prijsKwh)}) bij een voorbeeldprijs van ${PRIJS_TXT} per kWh. Dat zijn bovengrenzen: de hygrostaat schakelt het toestel terug zodra de streefwaarde bereikt is, en een droging duurt zelden een volle maand.` : "Reken het dagverbruik maal het aantal dagen, en dat maal uw prijs per kWh. Het resultaat is een bovengrens; de hygrostaat schakelt het toestel terug zodra de streefwaarde bereikt is."
        },
        {
          question: "Kan ik een bouwdroger op een gewoon stopcontact aansluiten?",
          answer: V2 ? `Ja. Onze condensbouwdrogers werken op 230 V en gaan in een gewoon stopcontact. Let wel op de kring: een gewone kring van 16 A kan ongeveer 3,6 kW aan, dus tel het vermogen op van alles wat erop hangt. Met ${getal2(V2.kw, 2)} kW voor de ${V2.short} blijft er ruimte voor ander gereedschap. De losse bouwkachels van 20 en 30 kW werken wel op 400 V krachtstroom en vragen hun eigen aansluiting.` : "Ja, onze condensbouwdrogers werken op 230 V. Let op de kring: 16 A kan ongeveer 3,6 kW aan, dus tel het vermogen op van alles wat erop hangt."
        },
        {
          question: "Verbruikt een bouwdroger meer dan een luchtontvochtiger voor thuis?",
          answer: "Ja, en dat is logisch. Een luchtontvochtiger voor thuis draait een paar uur per dag op laag vermogen om een woonkamer comfortabel te houden. Een bouwdroger draait dag en nacht en moet tientallen liters bouwvocht per etmaal uit de lucht halen. Hij verbruikt dus meer per dag, maar hij is ook maar een paar weken nodig."
        },
        {
          question: "Verbruikt een grotere bouwdroger altijd meer stroom?",
          answer: ONS2 ? `Per uur wel, en dat is precies waarom het formaat telt. Een toestel voor volumes tot ${CONCURRENT2.volume} m³ neemt ${getal2(CONCURRENT2.kw, 2)} kW op, tegenover ${getal2(ONS2.kw, 2)} kW voor een toestel tot ${ONS2.volume} m³. Zet u dat grote toestel in een kleine ruimte, dan betaalt u elke dag voor capaciteit die er niet uit kan. De droogcalculator kiest daarom eerst het volume en pas daarna het toestel.` : "Per uur wel. Een te groot toestel in een kleine ruimte kost elke dag stroom voor capaciteit die niet gebruikt wordt; dimensioneer dus op het volume."
        }
      ],
      concurrentOmschrijving: "De bouwdroger die bij de meeste verhuurders in het gamma staat",
      factoren: [
        {
          titel: "Hoe nat het gebouw is",
          tekst: /* @__PURE__ */ jsx(Fragment, { children: "Zolang er veel vocht vrijkomt, draait de compressor bijna continu. Naarmate chape en pleister droger worden, schakelt de hygrostaat vaker terug." })
        },
        {
          titel: "De temperatuur",
          tekst: /* @__PURE__ */ jsxs(Fragment, { children: [
            "In een koude ruimte werkt een condensdroger minder efficiënt en draait hij langer voor hetzelfde resultaat. Waarom dat zo is, leest u in",
            " ",
            /* @__PURE__ */ jsx(Link, { to: lp("/gids/condensdroger-of-adsorptiedroger"), children: "condensdroger of adsorptiedroger" }),
            "."
          ] })
        },
        {
          titel: "Een open huis",
          tekst: /* @__PURE__ */ jsx(Fragment, { children: "Ramen op kiepstand of een open deur naar een vochtige kelder laten steeds nieuwe vochtige lucht binnen. Dan droogt de bouwdroger de buitenlucht in plaats van uw muren." })
        },
        {
          titel: "Het juiste formaat",
          tekst: /* @__PURE__ */ jsxs(Fragment, { children: [
            "Een te klein toestel draait wekenlang op vol vermogen; een passend toestel is sneller klaar. De",
            " ",
            /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "droogcalculator" }),
            " rekent uit wat bij uw oppervlakte past."
          ] })
        },
        {
          titel: "De droogduur zelf",
          tekst: /* @__PURE__ */ jsxs(Fragment, { children: [
            "De grootste besparing is een kortere droging. Hoe lang chape en pleisterwerk nodig hebben, staat in",
            " ",
            /* @__PURE__ */ jsx(Link, { to: lp("/gids/hoe-lang-moet-chape-drogen"), children: "hoe lang moet chape drogen" }),
            "."
          ] })
        }
      ],
      stats: (v) => [
        { l: `Opgenomen vermogen van de ${v.short}` },
        { l: "Hoogstens per etmaal, continu op vol vermogen" },
        { l: "Voorbeeldprijs om mee te rekenen, geen tarief van ons" },
        { l: "Draaien per dag: elk uur stilstand kost droogtijd" }
      ],
      uur: "u",
      formuleH2: "Zo rekent u het verbruik uit",
      formuleP1: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Elk elektrisch toestel heeft een ",
        /* @__PURE__ */ jsx("b", { children: "opgenomen vermogen" }),
        ", uitgedrukt in kilowatt (kW). Dat getal staat op het typeplaatje en in de technische fiche. Het verbruik in kilowattuur (kWh) is dat vermogen maal het aantal uren dat het toestel draait. De kost is dat verbruik maal uw prijs per kWh:"
      ] }),
      formule: "kW × 24 uur × aantal dagen × prijs per kWh = stroomkost",
      formuleP2: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Het resultaat is een ",
        /* @__PURE__ */ jsx("b", { children: "bovengrens" }),
        ". Een condensbouwdroger heeft een hygrostaat: zodra de luchtvochtigheid op de streefwaarde zit, schakelt de compressor terug en verbruikt het toestel veel minder. In de eerste dagen van een droging, als er veel vocht vrijkomt, zit u dicht bij die bovengrens; naar het einde toe duidelijk eronder."
      ] }),
      meter: (v) => ({
        onsKop: `Ons toestel · ${v.short}`,
        zuinigst: "Zuinigst",
        sub: "verbruik per etmaal, bovengrens",
        vermogen: "Opgenomen vermogen",
        draaiuren: "Draaiuren per dag",
        voorbeeldprijs: "Voorbeeldprijs",
        onsRes: `Hoogstens ${bedrag2(v.kostDag)} per dag`,
        aanStroom: "aan stroom",
        hunKop: `Concurrentie · ${CONCURRENT2.naam}`,
        zelfde: "Zelfde ruimte",
        hunRes: `${bedrag2(c.perDag(CONCURRENT2.kw) * c.prijsKwh)} per dag`
      }),
      tblKick: "Per toestel",
      tblH2: "Het vermogen van onze toestellen",
      tblLede: `Het opgenomen vermogen zoals het in de technische fiche op de toestelpagina staat, met het maximale verbruik per etmaal en de kost per dag bij een voorbeeldprijs van ${PRIJS_TXT} per kWh. Die prijs is alleen een voorbeeld om mee te rekenen; uw eigen tarief staat op uw energiefactuur en kan hoger of lager liggen.`,
      caption: `Maximaal verbruik bij continu vol vermogen. Voorbeeldprijs ${PRIJS_TXT}/kWh, geen tarief van Vernast.`,
      captionGeen: " Vermeldt de fiche geen vermogen, kijk dan op het typeplaatje van het toestel.",
      thToestel: "Toestel",
      thVermogen: "Vermogen",
      thKwh: "Max. kWh per 24 u",
      thDag: "Max. per dag (voorbeeld)",
      geenVermogen: "Niet in de fiche vermeld: zie het typeplaatje",
      tblNote: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Bij de bouwkachels is die bovengrens vooral theoretisch: hun thermostaat schakelt af zodra de ruimte op temperatuur is, en hoeveel ze daarna nog draaien hangt af van hoe goed het gebouw de warmte vasthoudt. Toch is de kachel bijna altijd de grootste verbruiker op de werf. ",
        /* @__PURE__ */ jsx("b", { children: "Verwarm daarom alleen waar het nodig is" }),
        ", zoals in een koude kelder of een winterwerf."
      ] }),
      reken: (v) => ({
        kick: "Rekenvoorbeeld",
        h2: "Wat de stroom per dag kost.",
        p1: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Hiernaast staat wat één toestel per etmaal aan stroom kost als het onafgebroken op vol vermogen draait: onze ",
          v.short,
          " naast twee bouwdrogers van de concurrentie, allemaal gerekend tegen dezelfde voorbeeldprijs van ",
          PRIJS_TXT,
          " per kWh."
        ] }),
        p2: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Het zijn ",
          /* @__PURE__ */ jsx("b", { children: "bovengrenzen" }),
          ". De hygrostaat schakelt de compressor terug zodra de streefvochtigheid bereikt is, dus in de tweede week ligt de rekening lager dan in de eerste. Wat niet verandert is de verhouding: een toestel met driemaal het vermogen kost ook driemaal zoveel stroom, elke dag opnieuw, of het die capaciteit nu nodig heeft of niet."
        ] }),
        p3: /* @__PURE__ */ jsxs(Fragment, { children: [
          "De grijze balk onderaan is iets anders dan de drie erboven: dat is de ",
          /* @__PURE__ */ jsx("b", { children: "huur" }),
          " van de",
          " ",
          v.short,
          ", ",
          c.huur(v.huurDag),
          " per dag exclusief btw (zie ",
          /* @__PURE__ */ jsx(Link, { to: lp("/prijzen"), children: "alle prijzen" }),
          "). Hij staat er ter grootteorde, zodat u meteen ziet hoe stroom en huur zich tot elkaar verhouden."
        ] }),
        onsLabel: `${v.short}, onze kleinste bouwdroger`,
        huurLabel: `Huur van de ${v.short} per dag, excl. btw`,
        noot: `Zet u er een ventilator bij, dan komt daar relatief weinig verbruik bij; een bouwkachel weegt veel zwaarder door. De vermogens van de ${CONCURRENT_KLEIN2.naam} en de ${CONCURRENT2.naam} komen uit de fiches van hun verdelers.`,
        somKop: "Twee weken drogen, stap voor stap",
        uurSom: `${getal2(v.kw, 2)} kW × 24 uur`,
        kwhDag: "kWh/dag",
        dagen: "14 dagen",
        perKwh: `${PRIJS_TXT} per kWh`,
        stroom: "stroom",
        somnoot: `Stel: u droogt een nieuwbouwwoning met één ${v.short} gedurende twee weken, en het toestel draait onafgebroken op vol vermogen. Met de voorbeeldprijs van ${PRIJS_TXT} per kWh is dat de bovengrens: hoogstens ${bedrag2(v.kostDag)} per dag. Door de hygrostaat ligt de werkelijke rekening lager.`,
        somvs: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Dezelfde veertien dagen met een ",
          /* @__PURE__ */ jsx("b", { children: CONCURRENT_KLEIN2.naam }),
          ", een bouwdroger van de concurrentie van",
          " ",
          getal2(CONCURRENT_KLEIN2.kw, 2),
          " kW, kosten",
          " ",
          /* @__PURE__ */ jsx("b", { className: "hun", children: bedrag2(c.perDag(CONCURRENT_KLEIN2.kw) * 14 * c.prijsKwh) }),
          " aan stroom, ",
          bedrag2((c.perDag(CONCURRENT_KLEIN2.kw) - v.kwhDag) * 14 * c.prijsKwh),
          " meer voor dezelfde ruimte."
        ] })
      }),
      faqTitel: "Alles over het verbruik van een bouwdroger",
      ons: (o) => ({
        kick: "Toestel tegen toestel",
        h2: "In een kleine ruimte zet u geen groot toestel neer.",
        lede: `De grootste stroomrekening komt zelden van een onzuinig toestel, maar van een te groot toestel. Hieronder onze kleinste bouwdroger naast de ${CONCURRENT2.naam}, het model dat bij de meeste verhuurders standaard meegaat, ook naar een kelder of een appartement waar het veel te zwaar voor is.`,
        onsLabel: "Ons toestel",
        esub: `${o.type} voor ruimtes tot ${o.volume} m³ · 230 V`,
        kwhEtmaal: "kWh per etmaal",
        ekpilOns: `${bedrag2(c.perDag(o.kw) * c.prijsKwh)} per dag aan stroom bij ${PRIJS_TXT} per kWh`,
        vermogen: "Opgenomen vermogen",
        afvoer: "Vochtafvoer",
        volume: "Aanbevolen volume",
        tweeWeken: "Stroom over twee weken",
        totVolume: (vol) => `tot ${vol} m³`,
        bekijk: `Bekijk de ${o.short}`,
        vglLabel: "Vergelijkingstoestel",
        ekpilHun: `${bedrag2(c.perDag(CONCURRENT2.kw) * c.prijsKwh)} per dag aan stroom bij ${PRIJS_TXT} per kWh`,
        note: /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("b", { children: [
            "Scheelt ",
            bedrag2((c.perDag(CONCURRENT2.kw) - c.perDag(o.kw)) * 14 * c.prijsKwh),
            " aan stroom over twee weken"
          ] }),
          ":",
          " ",
          /* @__PURE__ */ jsxs("b", { className: "ons", children: [
            Math.round((1 - c.perDag(o.kw) / c.perDag(CONCURRENT2.kw)) * 100),
            " % minder verbruik"
          ] }),
          ", voor een ruimte waar ",
          o.volume,
          " m³ aan capaciteit volstaat. Daarom rekent de",
          " ",
          /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "droogcalculator" }),
          " eerst uw volume uit en kiest ze pas daarna het toestel."
        ] }),
        bron: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Eerlijk erbij: de ",
          CONCURRENT2.naam,
          " is geen slecht toestel. Hij is gebouwd voor industrieel werk en voor volumes tot ",
          CONCURRENT2.volume,
          " m³, en in zo'n hal of loods doet hij precies wat hij moet doen. Het probleem begint wanneer datzelfde toestel in een kelder, een appartement of één verdieping wordt gezet, en dat gebeurt vaak, omdat verhuurders nu eenmaal zetten wat op de kar staat. Dan betaalt u elke dag voor capaciteit die er niet uit kan. Het punt hierboven is dus het formaat, niet de kwaliteit. Onze cijfers komen uit de technische fiche op",
          " ",
          /* @__PURE__ */ jsx(Link, { to: lp(o.path), children: "de toestelpagina" }),
          " (vochtafvoer bij 30 °C en 80 % relatieve vochtigheid), die van de ",
          CONCURRENT2.naam,
          " uit de",
          " ",
          /* @__PURE__ */ jsx("a", { href: CONCURRENT2.bron, target: "_blank", rel: "noopener noreferrer nofollow", children: "productfiche van de verdeler" }),
          ". Het verbruik is in beide gevallen het opgenomen vermogen maal 24 uur, omgerekend tegen de voorbeeldprijs van ",
          PRIJS_TXT,
          " per kWh."
        ] })
      }),
      praktijkKick: "In de praktijk",
      praktijkH2: "Wat het verbruik omhoog of omlaag duwt.",
      praktijkLede: "Vijf dingen bepalen of u dicht bij die bovengrens zit of er ruim onder blijft.",
      nachtKick: "Dag en nacht",
      nachtH2: "Mag een bouwdroger 24 uur per dag en 's nachts aan?",
      nachtLede: "Ja, en dat is ook de bedoeling. Zet u hem 's nachts uit, dan loopt de luchtvochtigheid in een paar uur weer op en trekt het vocht uit de lucht opnieuw in de muren en de vloer. U verliest dan meer droogtijd dan u aan stroom bespaart.",
      doorLabel: "Laat hem doordraaien",
      doorH3: "Een bouwdroger is gebouwd voor continu gebruik.",
      door: [
        { b: "Elk uur stilstand telt.", tekst: "De luchtvochtigheid loopt in een paar uur weer op, en het vocht trekt opnieuw in muren en vloer." },
        { b: "De hygrostaat regelt zelf.", tekst: "Zodra de streefwaarde bereikt is, schakelt de compressor terug; u hoeft het toestel niet zelf uit te zetten." },
        { b: "Doorlopend is doorgaans goedkoper.", tekst: "Een dag langer huren weegt zwaarder door dan de stroom van een nacht doordraaien." },
        { b: "Wij meten voor en na.", tekst: "In een droogpakket legt de technieker de start- en eindwaarde vast, zodat niemand op gevoel moet beslissen." }
      ],
      doorVoet: "Geldt voor elk condenstoestel uit ons gamma.",
      letLabel: "Waar u wel op let",
      letH3: "Drie dingen bij doorlopend gebruik.",
      letop: [
        {
          b: "Afvoer van het water.",
          tekst: /* @__PURE__ */ jsxs(Fragment, { children: [
            "Met een reservoir moet u regelmatig legen, anders valt het toestel stil. Met een slang naar een afvoer, of een condenspomp (bij ons",
            " ",
            c.pomp,
            " per bouwdroger per dag), loopt de droging ook 's nachts en in het weekend door."
          ] })
        },
        { b: "Een vrije plaats.", tekst: "Zet het toestel niet tegen een muur of onder een tafel; de lucht moet vrij aan- en afgevoerd kunnen worden." },
        {
          b: "De elektrische kring.",
          tekst: "Een gewone kring van 16 A op 230 V kan ongeveer 3,6 kW aan. Tel het vermogen op van alles wat erop hangt. De losse bouwkachels Heatboost 20 en 30 T werken op 400 V krachtstroom en vragen hun eigen aansluiting; de kachel in een droogpakket draait op een gewoon stopcontact van 230 V."
        }
      ],
      mbKick: "Liever niet zelf rekenen?",
      mbH3: "In een droogpakket draait er niet meer dan nodig.",
      mbP: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Onze techniekers plaatsen de toestellen, stellen de streefwaarde in en meten het vocht voor en na. Zo draait er niet meer dan nodig en niet langer dan nodig. Bekijk ook",
        " ",
        /* @__PURE__ */ jsx(Link, { to: lp("/levering"), children: "levering en installatie" }),
        "."
      ] }),
      mbCta: "Bereken uw droogpakket",
      mbAlt: "Vernast technieker geeft duim omhoog",
      contact: {
        kicker: "Nog een vraag hierover?",
        titel: "Onze droogspecialisten rekenen het met u mee.",
        lede: "Twijfelt u of uw kring het aankan, of welk toestel het zuinigst is voor uw project? Stel uw vraag, u krijgt binnen één werkdag antwoord van een specialist.",
        onderwerpen: [
          "Vraag over stroomverbruik en kosten",
          "Advies over het juiste toestel",
          "Vraag over de elektrische aansluiting",
          "Iets anders"
        ],
        placeholder: "Bv. nieuwbouw 140 m², één kring van 16 A beschikbaar, hoeveel toestellen kan ik aansluiten?"
      }
    };
  },
  fr: (c) => {
    const { lp, getal: getal2, bedrag: bedrag2, prijs: PRIJS_TXT, V: V2, ONS: ONS2, groot: CONCURRENT2, klein: CONCURRENT_KLEIN2 } = c;
    return {
      crumbHome: "Accueil",
      crumbGidsen: "Guides",
      crumb: "Consommation électrique d'un déshumidificateur",
      kick: "Guide · consommation et coûts",
      h1: "Consommation électrique d'un déshumidificateur de chantier : combien coûte-t-il par jour ?",
      intro1: "Un déshumidificateur de chantier tourne jour et nuit : la question de ce que cela coûte est donc légitime. Le calcul est simple : puissance × heures × jours × votre prix par kWh.",
      intro2: (v, zuiniger) => /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("b", { style: { color: "#fff" }, children: "Nous dimensionnons selon le volume de votre pièce." }),
        " C'est pourquoi nous plaçons ",
        getal2(v.kw, 2),
        " kW là où un loueur installe d'office ",
        getal2(CONCURRENT2.kw, 2),
        " kW.",
        " ",
        "Cela représente ",
        zuiniger,
        " % d'électricité en moins pour le même séchage."
      ] }),
      heroAlt: "Sécher l'esprit tranquille : le déshumidificateur tourne, vous n'avez rien à faire",
      badge: (zuiniger) => /* @__PURE__ */ jsxs(Fragment, { children: [
        zuiniger,
        " % d'électricité en moins",
        /* @__PURE__ */ jsxs("small", { children: [
          "qu'un déshumidificateur standard de ",
          getal2(CONCURRENT2.kw, 2),
          " kW"
        ] })
      ] }),
      faq: [
        {
          question: "Combien d'électricité un déshumidificateur de chantier consomme-t-il par jour ?",
          answer: V2 ? `Comptez la puissance absorbée × 24 heures. Notre ${V2.short} absorbe ${getal2(V2.kw, 2)} kW, soit au maximum ${getal2(V2.kwhDag)} kWh par 24 heures s'il tourne sans interruption à pleine puissance. En pratique, c'est moins, car l'hygrostat ralentit l'appareil dès que l'humidité cible est atteinte.` : "Comptez la puissance absorbée indiquée sur la plaque signalétique × 24 heures. C'est la limite supérieure ; en pratique, c'est moins, car l'hygrostat ralentit l'appareil dès que l'humidité cible est atteinte."
        },
        {
          question: "Combien coûte un déshumidificateur de chantier en électricité ?",
          answer: V2 ? `Multipliez les kWh par jour par votre prix par kWh. Avec un prix d'exemple de ${PRIJS_TXT} par kWh, le ${V2.short} coûte au maximum ${bedrag2(V2.kostDag)} d'électricité par jour. Votre propre prix figure sur votre facture d'énergie.` : "Multipliez les kWh par jour par votre prix par kWh, qui figure sur votre facture d'énergie."
        },
        {
          question: "Un déshumidificateur de chantier peut-il rester allumé 24 heures sur 24, et la nuit ?",
          answer: "Oui. Un déshumidificateur de chantier est fait pour tourner jour et nuit, et il le faut : chaque heure d'arrêt laisse l'humidité de l'air remonter. S'il évacue l'eau non pas dans un réservoir mais par un tuyau ou une pompe à condensats, il continue aussi à tourner le week-end sans que vous deviez vider quoi que ce soit."
        },
        {
          question: "Un ventilateur ou un chauffage de chantier consomme-t-il plus qu'un déshumidificateur ?",
          answer: "Un ventilateur de chantier consomme moins qu'un déshumidificateur. Un chauffage de chantier électrique consomme beaucoup plus : il produit de la chaleur, et c'est ce qui demande le plus d'énergie. Son thermostat le ralentit toutefois dès que la pièce est à température."
        },
        {
          question: "Combien de watts un déshumidificateur de chantier consomme-t-il par heure ?",
          answer: V2 ? `La puissance absorbée est la consommation par heure. Notre ${V2.short} affiche ${getal2(V2.kw, 2)} kW, soit ${getal2(V2.kw * 1e3, 0)} watts par heure de fonctionnement. Dans notre gamme, cela va de 200 watts pour un ventilateur de chantier à 1 400 watts pour le plus grand déshumidificateur à condensation ; des appareils de location plus grands atteignent 2 100 watts.` : "La puissance absorbée indiquée sur la plaque signalétique est la consommation par heure de fonctionnement. Pour les déshumidificateurs de chantier à condensation, elle se situe généralement entre 750 et 2 100 watts."
        },
        {
          question: "Combien coûte un déshumidificateur de chantier en électricité par semaine et par mois ?",
          answer: V2 ? `Multipliez la consommation journalière par le nombre de jours. Notre ${V2.short} atteint au maximum ${getal2(V2.kwhDag * 7)} kWh par semaine (${bedrag2(V2.kwhDag * 7 * c.prijsKwh)}) et ${getal2(V2.kwhDag * 30)} kWh par mois (${bedrag2(V2.kwhDag * 30 * c.prijsKwh)}) avec un prix d'exemple de ${PRIJS_TXT} par kWh. Ce sont des limites supérieures : l'hygrostat ralentit l'appareil dès que la valeur cible est atteinte, et un séchage dure rarement un mois entier.` : "Multipliez la consommation journalière par le nombre de jours, puis par votre prix par kWh. Le résultat est une limite supérieure ; l'hygrostat ralentit l'appareil dès que la valeur cible est atteinte."
        },
        {
          question: "Puis-je brancher un déshumidificateur de chantier sur une prise ordinaire ?",
          answer: V2 ? `Oui. Nos déshumidificateurs de chantier à condensation fonctionnent en 230 V et se branchent sur une prise ordinaire. Faites toutefois attention au circuit : un circuit ordinaire de 16 A supporte environ 3,6 kW, additionnez donc la puissance de tout ce qui y est branché. Avec ${getal2(V2.kw, 2)} kW pour le ${V2.short}, il reste de la marge pour d'autres outils. Les chauffages de chantier de 20 et 30 kW loués seuls fonctionnent en revanche sur du 400 V et demandent leur propre raccordement.` : "Oui, nos déshumidificateurs de chantier à condensation fonctionnent en 230 V. Faites attention au circuit : 16 A supporte environ 3,6 kW, additionnez donc la puissance de tout ce qui y est branché."
        },
        {
          question: "Un déshumidificateur de chantier consomme-t-il plus qu'un déshumidificateur domestique ?",
          answer: "Oui, et c'est logique. Un déshumidificateur domestique tourne quelques heures par jour à faible puissance pour garder un séjour confortable. Un déshumidificateur de chantier tourne jour et nuit et doit retirer de l'air des dizaines de litres d'humidité de construction par 24 heures. Il consomme donc plus par jour, mais il n'est nécessaire que quelques semaines."
        },
        {
          question: "Un déshumidificateur de chantier plus grand consomme-t-il toujours plus d'électricité ?",
          answer: ONS2 ? `Par heure, oui, et c'est précisément pour cela que la taille compte. Un appareil pour des volumes jusqu'à ${CONCURRENT2.volume} m³ absorbe ${getal2(CONCURRENT2.kw, 2)} kW, contre ${getal2(ONS2.kw, 2)} kW pour un appareil jusqu'à ${ONS2.volume} m³. Si vous placez ce grand appareil dans une petite pièce, vous payez chaque jour pour une capacité qui ne peut pas être exploitée. C'est pourquoi le calculateur de séchage choisit d'abord le volume, et seulement ensuite l'appareil.` : "Par heure, oui. Un appareil trop grand dans une petite pièce coûte chaque jour de l'électricité pour une capacité inutilisée ; dimensionnez donc selon le volume."
        }
      ],
      concurrentOmschrijving: "Le déshumidificateur de chantier que l'on trouve dans la gamme de la plupart des loueurs",
      factoren: [
        {
          titel: "Le degré d'humidité du bâtiment",
          tekst: /* @__PURE__ */ jsx(Fragment, { children: "Tant que beaucoup d'humidité se libère, le compresseur tourne presque en continu. À mesure que la chape et le plafonnage sèchent, l'hygrostat le ralentit plus souvent." })
        },
        {
          titel: "La température",
          tekst: /* @__PURE__ */ jsxs(Fragment, { children: [
            "Dans une pièce froide, un déshumidificateur à condensation est moins efficace et tourne plus longtemps pour le même résultat. Vous lirez pourquoi dans",
            " ",
            /* @__PURE__ */ jsx(Link, { to: lp("/gids/condensdroger-of-adsorptiedroger"), children: "déshumidificateur à condensation ou à adsorption" }),
            "."
          ] })
        },
        {
          titel: "Une maison ouverte",
          tekst: /* @__PURE__ */ jsx(Fragment, { children: "Des fenêtres en oscillo-battant ou une porte ouverte vers une cave humide laissent sans cesse entrer de l'air humide. Le déshumidificateur sèche alors l'air extérieur au lieu de vos murs." })
        },
        {
          titel: "La bonne taille",
          tekst: /* @__PURE__ */ jsxs(Fragment, { children: [
            "Un appareil trop petit tourne des semaines à pleine puissance ; un appareil adapté termine plus vite. Le ",
            /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "calculateur de séchage" }),
            " calcule ce qui convient à votre surface."
          ] })
        },
        {
          titel: "La durée du séchage elle-même",
          tekst: /* @__PURE__ */ jsxs(Fragment, { children: [
            "La plus grande économie, c'est un séchage plus court. Le temps nécessaire à la chape et au plafonnage figure dans",
            " ",
            /* @__PURE__ */ jsx(Link, { to: lp("/gids/hoe-lang-moet-chape-drogen"), children: "temps de séchage d'une chape" }),
            "."
          ] })
        }
      ],
      stats: (v) => [
        { l: `Puissance absorbée du ${v.short}` },
        { l: "Au maximum par 24 heures, en continu à pleine puissance" },
        { l: "Prix d'exemple pour le calcul, pas un tarif de notre part" },
        { l: "De fonctionnement par jour : chaque heure d'arrêt coûte du temps de séchage" }
      ],
      uur: "h",
      formuleH2: "Comment calculer la consommation",
      formuleP1: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Chaque appareil électrique a une ",
        /* @__PURE__ */ jsx("b", { children: "puissance absorbée" }),
        ", exprimée en kilowatts (kW). Ce chiffre figure sur la plaque signalétique et dans la fiche technique. La consommation en kilowattheures (kWh) est cette puissance multipliée par le nombre d'heures de fonctionnement. Le coût est cette consommation multipliée par votre prix par kWh :"
      ] }),
      formule: "kW × 24 heures × nombre de jours × prix par kWh = coût de l'électricité",
      formuleP2: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Le résultat est une ",
        /* @__PURE__ */ jsx("b", { children: "limite supérieure" }),
        ". Un déshumidificateur à condensation est équipé d'un hygrostat : dès que l'humidité de l'air atteint la valeur cible, le compresseur ralentit et l'appareil consomme beaucoup moins. Pendant les premiers jours d'un séchage, quand beaucoup d'humidité se libère, vous êtes proche de cette limite ; vers la fin, nettement en dessous."
      ] }),
      meter: (v) => ({
        onsKop: `Notre appareil · ${v.short}`,
        zuinigst: "Le plus économe",
        sub: "consommation par 24 heures, limite supérieure",
        vermogen: "Puissance absorbée",
        draaiuren: "Heures de fonctionnement par jour",
        voorbeeldprijs: "Prix d'exemple",
        onsRes: `Au maximum ${bedrag2(v.kostDag)} par jour`,
        aanStroom: "d'électricité",
        hunKop: `Concurrence · ${CONCURRENT2.naam}`,
        zelfde: "Même pièce",
        hunRes: `${bedrag2(c.perDag(CONCURRENT2.kw) * c.prijsKwh)} par jour`
      }),
      tblKick: "Par appareil",
      tblH2: "La puissance de nos appareils",
      tblLede: `La puissance absorbée telle qu'elle figure dans la fiche technique de la page de l'appareil, avec la consommation maximale par 24 heures et le coût par jour pour un prix d'exemple de ${PRIJS_TXT} par kWh. Ce prix n'est qu'un exemple pour le calcul ; votre propre tarif figure sur votre facture d'énergie et peut être plus élevé ou plus bas.`,
      caption: `Consommation maximale en continu à pleine puissance. Prix d'exemple ${PRIJS_TXT}/kWh, pas un tarif de Vernast.`,
      captionGeen: " Si la fiche ne mentionne pas de puissance, consultez la plaque signalétique de l'appareil.",
      thToestel: "Appareil",
      thVermogen: "Puissance",
      thKwh: "Max. kWh par 24 h",
      thDag: "Max. par jour (exemple)",
      geenVermogen: "Non mentionné dans la fiche : voir la plaque signalétique",
      tblNote: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Pour les chauffages de chantier, cette limite supérieure est surtout théorique : leur thermostat les coupe dès que la pièce est à température, et la durée pendant laquelle ils tournent ensuite dépend de la façon dont le bâtiment retient la chaleur. Le chauffage reste pourtant presque toujours le plus gros consommateur du chantier. ",
        /* @__PURE__ */ jsx("b", { children: "Ne chauffez donc que là où c'est nécessaire" }),
        ", comme dans une cave froide ou sur un chantier d'hiver."
      ] }),
      reken: (v) => ({
        kick: "Exemple de calcul",
        h2: "Ce que coûte l'électricité par jour.",
        p1: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Ci-contre, ce que coûte en électricité un appareil par 24 heures s'il tourne sans interruption à pleine puissance : notre ",
          v.short,
          " à côté de deux déshumidificateurs de la concurrence, tous calculés avec le même prix d'exemple de ",
          PRIJS_TXT,
          " par kWh."
        ] }),
        p2: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Ce sont des ",
          /* @__PURE__ */ jsx("b", { children: "limites supérieures" }),
          ". L'hygrostat ralentit le compresseur dès que l'humidité cible est atteinte : la deuxième semaine, la facture est donc plus basse que la première. Ce qui ne change pas, c'est le rapport : un appareil trois fois plus puissant coûte aussi trois fois plus d'électricité, chaque jour, qu'il ait besoin de cette capacité ou non."
        ] }),
        p3: /* @__PURE__ */ jsxs(Fragment, { children: [
          "La barre grise du bas est différente des trois au-dessus : c'est la ",
          /* @__PURE__ */ jsx("b", { children: "location" }),
          " du",
          " ",
          v.short,
          ", ",
          c.huur(v.huurDag),
          " par jour (voir ",
          /* @__PURE__ */ jsx(Link, { to: lp("/prijzen"), children: "tous les prix" }),
          "). Elle est là comme ordre de grandeur, pour que vous voyiez immédiatement le rapport entre électricité et location."
        ] }),
        onsLabel: `${v.short}, notre plus petit déshumidificateur`,
        huurLabel: `Location du ${v.short} par jour`,
        noot: `Si vous ajoutez un ventilateur, la consommation augmente relativement peu ; un chauffage de chantier pèse beaucoup plus lourd. Les puissances du ${CONCURRENT_KLEIN2.naam} et du ${CONCURRENT2.naam} proviennent des fiches de leurs distributeurs.`,
        somKop: "Deux semaines de séchage, étape par étape",
        uurSom: `${getal2(v.kw, 2)} kW × 24 heures`,
        kwhDag: "kWh/jour",
        dagen: "14 jours",
        perKwh: `${PRIJS_TXT} par kWh`,
        stroom: "d'électricité",
        somnoot: `Supposons que vous séchiez une nouvelle construction avec un seul ${v.short} pendant deux semaines, et que l'appareil tourne sans interruption à pleine puissance. Avec le prix d'exemple de ${PRIJS_TXT} par kWh, c'est la limite supérieure : au maximum ${bedrag2(v.kostDag)} par jour. Grâce à l'hygrostat, la facture réelle est plus basse.`,
        somvs: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Les mêmes quatorze jours avec un ",
          /* @__PURE__ */ jsx("b", { children: CONCURRENT_KLEIN2.naam }),
          ", un déshumidificateur de la concurrence de",
          " ",
          getal2(CONCURRENT_KLEIN2.kw, 2),
          " kW, coûtent",
          " ",
          /* @__PURE__ */ jsx("b", { className: "hun", children: bedrag2(c.perDag(CONCURRENT_KLEIN2.kw) * 14 * c.prijsKwh) }),
          " ",
          "d'électricité, soit ",
          bedrag2((c.perDag(CONCURRENT_KLEIN2.kw) - v.kwhDag) * 14 * c.prijsKwh),
          " de plus pour la même pièce."
        ] })
      }),
      faqTitel: "Tout sur la consommation d'un déshumidificateur de chantier",
      ons: (o) => ({
        kick: "Appareil contre appareil",
        h2: "Dans une petite pièce, on ne place pas un grand appareil.",
        lede: `La plus grosse facture d'électricité vient rarement d'un appareil peu économe, mais d'un appareil trop grand. Ci-dessous, notre plus petit déshumidificateur à côté du ${CONCURRENT2.naam}, le modèle que la plupart des loueurs fournissent d'office, même pour une cave ou un appartement pour lesquels il est beaucoup trop lourd.`,
        onsLabel: "Notre appareil",
        esub: `${o.type} pour des pièces jusqu'à ${o.volume} m³ · 230 V`,
        kwhEtmaal: "kWh par 24 heures",
        ekpilOns: `${bedrag2(c.perDag(o.kw) * c.prijsKwh)} d'électricité par jour à ${PRIJS_TXT} par kWh`,
        vermogen: "Puissance absorbée",
        afvoer: "Extraction d'humidité",
        volume: "Volume recommandé",
        tweeWeken: "Électricité sur deux semaines",
        totVolume: (vol) => `jusqu'à ${vol} m³`,
        bekijk: `Voir le ${o.short}`,
        vglLabel: "Appareil de comparaison",
        ekpilHun: `${bedrag2(c.perDag(CONCURRENT2.kw) * c.prijsKwh)} d'électricité par jour à ${PRIJS_TXT} par kWh`,
        note: /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("b", { children: [
            "Une différence de ",
            bedrag2((c.perDag(CONCURRENT2.kw) - c.perDag(o.kw)) * 14 * c.prijsKwh),
            " ",
            "d'électricité sur deux semaines"
          ] }),
          " ",
          ":",
          " ",
          /* @__PURE__ */ jsxs("b", { className: "ons", children: [
            Math.round((1 - c.perDag(o.kw) / c.perDag(CONCURRENT2.kw)) * 100),
            " % de consommation en moins"
          ] }),
          ", pour une pièce où une capacité de ",
          o.volume,
          " m³ suffit. C'est pourquoi le",
          " ",
          /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "calculateur de séchage" }),
          " calcule d'abord votre volume et ne choisit l'appareil qu'ensuite."
        ] }),
        bron: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Soyons honnêtes : le ",
          CONCURRENT2.naam,
          " n'est pas un mauvais appareil. Il est conçu pour des travaux industriels et pour des volumes jusqu'à ",
          CONCURRENT2.volume,
          " m³, et dans un tel hall ou entrepôt, il fait exactement ce qu'il doit faire. Le problème commence quand ce même appareil est placé dans une cave, un appartement ou sur un seul étage, ce qui arrive souvent, parce que les loueurs fournissent tout simplement ce qu'ils ont sous la main. Vous payez alors chaque jour pour une capacité qui ne peut pas être exploitée. Le point ci-dessus porte donc sur la taille, pas sur la qualité. Nos chiffres proviennent de la fiche technique de",
          " ",
          /* @__PURE__ */ jsx(Link, { to: lp(o.path), children: "la page de l'appareil" }),
          " (extraction d'humidité à 30 °C et 80 % d'humidité relative), ceux du ",
          CONCURRENT2.naam,
          " de la",
          " ",
          /* @__PURE__ */ jsx("a", { href: CONCURRENT2.bron, target: "_blank", rel: "noopener noreferrer nofollow", children: "fiche produit du distributeur" }),
          ". Dans les deux cas, la consommation est la puissance absorbée × 24 heures, convertie au prix d'exemple de ",
          PRIJS_TXT,
          " par kWh."
        ] })
      }),
      praktijkKick: "En pratique",
      praktijkH2: "Ce qui fait monter ou baisser la consommation.",
      praktijkLede: "Cinq éléments déterminent si vous êtes proche de cette limite supérieure ou nettement en dessous.",
      nachtKick: "Jour et nuit",
      nachtH2: "Un déshumidificateur de chantier peut-il tourner 24 heures sur 24, et la nuit ?",
      nachtLede: "Oui, et c'est d'ailleurs le but. Si vous l'éteignez la nuit, l'humidité de l'air remonte en quelques heures et l'humidité contenue dans l'air pénètre à nouveau dans les murs et le sol. Vous perdez alors plus de temps de séchage que vous n'économisez d'électricité.",
      doorLabel: "Laissez-le tourner",
      doorH3: "Un déshumidificateur de chantier est conçu pour un usage continu.",
      door: [
        { b: "Chaque heure d'arrêt compte.", tekst: "L'humidité de l'air remonte en quelques heures, et l'humidité pénètre à nouveau dans les murs et le sol." },
        { b: "L'hygrostat régule tout seul.", tekst: "Dès que la valeur cible est atteinte, le compresseur ralentit ; vous n'avez pas à éteindre l'appareil vous-même." },
        { b: "Tourner en continu revient généralement moins cher.", tekst: "Un jour de location en plus pèse plus lourd que l'électricité d'une nuit de fonctionnement." },
        { b: "Nous mesurons avant et après.", tekst: "Dans un pack de séchage, le technicien consigne les valeurs de départ et de fin, pour que personne ne doive décider au jugé." }
      ],
      doorVoet: "Valable pour chaque appareil à condensation de notre gamme.",
      letLabel: "Ce à quoi il faut faire attention",
      letH3: "Trois points en cas d'usage continu.",
      letop: [
        {
          b: "L'évacuation de l'eau.",
          tekst: /* @__PURE__ */ jsxs(Fragment, { children: [
            "Avec un réservoir, vous devez vider régulièrement, sinon l'appareil s'arrête. Avec un tuyau vers une évacuation, ou une pompe à condensats (chez nous ",
            c.pomp,
            " par déshumidificateur et par jour), le séchage continue aussi la nuit et le week-end."
          ] })
        },
        { b: "Un emplacement dégagé.", tekst: "Ne placez pas l'appareil contre un mur ou sous une table ; l'air doit pouvoir entrer et sortir librement." },
        {
          b: "Le circuit électrique.",
          tekst: "Un circuit ordinaire de 16 A en 230 V supporte environ 3,6 kW. Additionnez la puissance de tout ce qui y est branché. Les chauffages de chantier Heatboost 20 et 30 T loués seuls fonctionnent sur du 400 V et demandent leur propre raccordement ; le chauffage d'un pack de séchage fonctionne sur une prise ordinaire de 230 V."
        }
      ],
      mbKick: "Vous préférez ne pas calculer vous-même ?",
      mbH3: "Dans un pack de séchage, rien ne tourne plus que nécessaire.",
      mbP: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Nos techniciens placent les appareils, règlent la valeur cible et mesurent l'humidité avant et après. Ainsi, rien ne tourne plus que nécessaire, ni plus longtemps que nécessaire. Consultez aussi ",
        /* @__PURE__ */ jsx(Link, { to: lp("/levering"), children: "livraison et installation" }),
        "."
      ] }),
      mbCta: "Calculez votre pack de séchage",
      mbAlt: "Un technicien Vernast lève le pouce",
      contact: {
        kicker: "Encore une question ?",
        titel: "Nos spécialistes du séchage font le calcul avec vous.",
        lede: "Vous vous demandez si votre circuit tiendra le coup, ou quel appareil est le plus économe pour votre projet ? Posez votre question, un spécialiste vous répond dans un délai d'un jour ouvrable.",
        onderwerpen: [
          "Question sur la consommation électrique et les coûts",
          "Conseil sur le bon appareil",
          "Question sur le raccordement électrique",
          "Autre chose"
        ],
        placeholder: "P. ex. nouvelle construction de 140 m², un circuit de 16 A disponible : combien d'appareils puis-je brancher ?"
      }
    };
  },
  en: (c) => {
    const { lp, getal: getal2, bedrag: bedrag2, prijs: PRIJS_TXT, V: V2, ONS: ONS2, groot: CONCURRENT2, klein: CONCURRENT_KLEIN2 } = c;
    return {
      crumbHome: "Home",
      crumbGidsen: "Guides",
      crumb: "Power consumption of a construction dehumidifier",
      kick: "Guide · consumption and costs",
      h1: "Power consumption of a construction dehumidifier: what does it cost per day?",
      intro1: "A construction dehumidifier runs day and night, so it is fair to ask what that costs. The sum is simple: power rating times hours times days times your price per kWh.",
      intro2: (v, zuiniger) => /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("b", { style: { color: "#fff" }, children: "We size the machine to the volume of your room." }),
        " That is why we install ",
        getal2(v.kw, 2),
        " kW where a hire company puts in ",
        getal2(CONCURRENT2.kw, 2),
        " kW as standard.",
        " ",
        "That is ",
        zuiniger,
        "% less electricity for the same drying."
      ] }),
      heroAlt: "Carefree drying: the construction dehumidifier runs, you do not have to do a thing",
      badge: (zuiniger) => /* @__PURE__ */ jsxs(Fragment, { children: [
        zuiniger,
        "% less electricity",
        /* @__PURE__ */ jsxs("small", { children: [
          "than a standard ",
          getal2(CONCURRENT2.kw, 2),
          " kW construction dehumidifier"
        ] })
      ] }),
      faq: [
        {
          question: "How much electricity does a construction dehumidifier use per day?",
          answer: V2 ? `Multiply the power input by 24 hours. Our ${V2.short} draws ${getal2(V2.kw, 2)} kW; that is at most ${getal2(V2.kwhDag)} kWh per 24 hours if it runs non-stop at full power. In practice it is lower, because the humidistat throttles the machine back as soon as the target humidity is reached.` : "Multiply the power input on the rating plate by 24 hours. That is the upper limit; in practice it is lower, because the humidistat throttles the machine back as soon as the target humidity is reached."
        },
        {
          question: "What does a construction dehumidifier cost in electricity?",
          answer: V2 ? `Multiply the kWh per day by your price per kWh. At an example price of ${PRIJS_TXT} per kWh, the ${V2.short} costs at most ${bedrag2(V2.kostDag)} a day in electricity. Your own price is on your energy bill.` : `Multiply the kWh per day by your price per kWh, which is on your energy bill.`
        },
        {
          question: "Can a construction dehumidifier stay on 24 hours a day and overnight?",
          answer: "Yes. A construction dehumidifier is made to run day and night, and it has to: every hour it stands still lets the humidity in the air rise again. If it drains the water through a hose or a condensate pump rather than into a tank, it also keeps running over the weekend without you having to empty anything."
        },
        {
          question: "Does a fan or a site heater use more than a construction dehumidifier?",
          answer: "A construction fan uses less than a construction dehumidifier. An electric site heater uses much more: it produces heat, and that takes the most energy. Its thermostat does throttle back as soon as the room is up to temperature."
        },
        {
          question: "How many watts does a construction dehumidifier use per hour?",
          answer: V2 ? `The power input is the consumption per hour. Our ${V2.short} is rated at ${getal2(V2.kw, 2)} kW, so ${getal2(V2.kw * 1e3, 0)} watts per running hour. In our range that goes from 200 watts for a construction fan to 1,400 watts for the largest condensation dehumidifier; larger hire machines reach 2,100 watts.` : "The power input on the rating plate is the consumption per running hour. For condensation construction dehumidifiers it is usually between 750 and 2,100 watts."
        },
        {
          question: "What does a construction dehumidifier cost in electricity per week and per month?",
          answer: V2 ? `Multiply the daily consumption by the number of days. Our ${V2.short} comes to at most ${getal2(V2.kwhDag * 7)} kWh per week (${bedrag2(V2.kwhDag * 7 * c.prijsKwh)}) and ${getal2(V2.kwhDag * 30)} kWh per month (${bedrag2(V2.kwhDag * 30 * c.prijsKwh)}) at an example price of ${PRIJS_TXT} per kWh. Those are upper limits: the humidistat throttles the machine back as soon as the target value is reached, and a drying job rarely lasts a full month.` : "Multiply the daily consumption by the number of days, and that by your price per kWh. The result is an upper limit; the humidistat throttles the machine back as soon as the target value is reached."
        },
        {
          question: "Can I plug a construction dehumidifier into an ordinary socket?",
          answer: V2 ? `Yes. Our condensation construction dehumidifiers run on 230 V and plug into an ordinary socket. Do watch the circuit, though: an ordinary 16 A circuit can handle about 3.6 kW, so add up the power of everything connected to it. With ${getal2(V2.kw, 2)} kW for the ${V2.short} there is room left for other tools. The stand-alone 20 and 30 kW site heaters, however, run on 400 V three-phase power and need their own connection.` : "Yes, our condensation construction dehumidifiers run on 230 V. Watch the circuit: 16 A can handle about 3.6 kW, so add up the power of everything connected to it."
        },
        {
          question: "Does a construction dehumidifier use more than a household dehumidifier?",
          answer: "Yes, and that makes sense. A household dehumidifier runs a few hours a day at low power to keep a living room comfortable. A construction dehumidifier runs day and night and has to pull dozens of litres of construction moisture out of the air every 24 hours. So it uses more per day, but it is only needed for a few weeks."
        },
        {
          question: "Does a larger construction dehumidifier always use more electricity?",
          answer: ONS2 ? `Per hour, yes, and that is exactly why size matters. A machine for volumes up to ${CONCURRENT2.volume} m³ draws ${getal2(CONCURRENT2.kw, 2)} kW, compared with ${getal2(ONS2.kw, 2)} kW for a machine up to ${ONS2.volume} m³. Put that large machine in a small room and you pay every day for capacity that cannot be used. That is why the drying calculator chooses the volume first and only then the machine.` : "Per hour, yes. An oversized machine in a small room costs electricity every day for capacity that goes unused; so size it to the volume."
        }
      ],
      concurrentOmschrijving: "The construction dehumidifier found in the range of most hire companies",
      factoren: [
        {
          titel: "How wet the building is",
          tekst: /* @__PURE__ */ jsx(Fragment, { children: "As long as a lot of moisture is being released, the compressor runs almost continuously. As the screed and plaster dry out, the humidistat throttles back more often." })
        },
        {
          titel: "The temperature",
          tekst: /* @__PURE__ */ jsxs(Fragment, { children: [
            "In a cold room a condensation dehumidifier works less efficiently and runs longer for the same result. You can read why in",
            " ",
            /* @__PURE__ */ jsx(Link, { to: lp("/gids/condensdroger-of-adsorptiedroger"), children: "condensation or desiccant dehumidifier" }),
            "."
          ] })
        },
        {
          titel: "An open house",
          tekst: /* @__PURE__ */ jsx(Fragment, { children: "Windows on tilt or an open door to a damp cellar keep letting in fresh moist air. The construction dehumidifier then dries the outside air instead of your walls." })
        },
        {
          titel: "The right size",
          tekst: /* @__PURE__ */ jsxs(Fragment, { children: [
            "A machine that is too small runs at full power for weeks; a properly sized machine finishes sooner. The ",
            /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "drying calculator" }),
            " works out what suits your floor area."
          ] })
        },
        {
          titel: "The drying time itself",
          tekst: /* @__PURE__ */ jsxs(Fragment, { children: [
            "The biggest saving is a shorter drying time. How long screed and plasterwork need is explained in",
            " ",
            /* @__PURE__ */ jsx(Link, { to: lp("/gids/hoe-lang-moet-chape-drogen"), children: "how long screed takes to dry" }),
            "."
          ] })
        }
      ],
      stats: (v) => [
        { l: `Power input of the ${v.short}` },
        { l: "At most per 24 hours, continuously at full power" },
        { l: "Example price to calculate with, not a rate of ours" },
        { l: "Running per day: every hour of standstill costs drying time" }
      ],
      uur: "h",
      formuleH2: "How to work out the consumption",
      formuleP1: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Every electrical appliance has a ",
        /* @__PURE__ */ jsx("b", { children: "power input" }),
        ", expressed in kilowatts (kW). That figure is on the rating plate and in the technical data sheet. The consumption in kilowatt hours (kWh) is that power times the number of hours the machine runs. The cost is that consumption times your price per kWh:"
      ] }),
      formule: "kW × 24 hours × number of days × price per kWh = electricity cost",
      formuleP2: /* @__PURE__ */ jsxs(Fragment, { children: [
        "The result is an ",
        /* @__PURE__ */ jsx("b", { children: "upper limit" }),
        ". A condensation construction dehumidifier has a humidistat: as soon as the humidity reaches the target value, the compressor throttles back and the machine uses much less. In the first days of a drying job, when a lot of moisture is released, you are close to that upper limit; towards the end, well below it."
      ] }),
      meter: (v) => ({
        onsKop: `Our machine · ${v.short}`,
        zuinigst: "Most efficient",
        sub: "consumption per 24 hours, upper limit",
        vermogen: "Power input",
        draaiuren: "Running hours per day",
        voorbeeldprijs: "Example price",
        onsRes: `At most ${bedrag2(v.kostDag)} per day`,
        aanStroom: "in electricity",
        hunKop: `Competitor · ${CONCURRENT2.naam}`,
        zelfde: "Same room",
        hunRes: `${bedrag2(c.perDag(CONCURRENT2.kw) * c.prijsKwh)} per day`
      }),
      tblKick: "Per machine",
      tblH2: "The power rating of our machines",
      tblLede: `The power input as stated in the technical data sheet on the machine page, with the maximum consumption per 24 hours and the cost per day at an example price of ${PRIJS_TXT} per kWh. That price is only an example to calculate with; your own rate is on your energy bill and may be higher or lower.`,
      caption: `Maximum consumption at continuous full power. Example price ${PRIJS_TXT}/kWh, not a Vernast rate.`,
      captionGeen: " If the data sheet does not state a power rating, check the machine's rating plate.",
      thToestel: "Machine",
      thVermogen: "Power",
      thKwh: "Max. kWh per 24 h",
      thDag: "Max. per day (example)",
      geenVermogen: "Not stated in the data sheet: see the rating plate",
      tblNote: /* @__PURE__ */ jsxs(Fragment, { children: [
        "For the site heaters that upper limit is mostly theoretical: their thermostat switches off as soon as the room is up to temperature, and how much they run after that depends on how well the building holds its heat. Even so, the heater is almost always the biggest consumer on site.",
        " ",
        /* @__PURE__ */ jsx("b", { children: "So only heat where it is needed" }),
        ", such as in a cold cellar or on a winter site."
      ] }),
      reken: (v) => ({
        kick: "Worked example",
        h2: "What the electricity costs per day.",
        p1: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Alongside you can see what one machine costs in electricity per 24 hours if it runs non-stop at full power: our ",
          v.short,
          " next to two construction dehumidifiers from competitors, all calculated at the same example price of ",
          PRIJS_TXT,
          " per kWh."
        ] }),
        p2: /* @__PURE__ */ jsxs(Fragment, { children: [
          "These are ",
          /* @__PURE__ */ jsx("b", { children: "upper limits" }),
          ". The humidistat throttles the compressor back as soon as the target humidity is reached, so in the second week the bill is lower than in the first. What does not change is the ratio: a machine with three times the power also costs three times as much electricity, every single day, whether it needs that capacity or not."
        ] }),
        p3: /* @__PURE__ */ jsxs(Fragment, { children: [
          "The grey bar at the bottom is different from the three above it: that is the ",
          /* @__PURE__ */ jsx("b", { children: "hire" }),
          " of the",
          " ",
          v.short,
          ", ",
          c.huur(v.huurDag),
          " per day (see ",
          /* @__PURE__ */ jsx(Link, { to: lp("/prijzen"), children: "all prices" }),
          "). It is there for scale, so you can see straight away how electricity and hire compare."
        ] }),
        onsLabel: `${v.short}, our smallest construction dehumidifier`,
        huurLabel: `Hire of the ${v.short} per day`,
        noot: `If you add a fan, relatively little consumption is added; a site heater weighs much more heavily. The power ratings of the ${CONCURRENT_KLEIN2.naam} and the ${CONCURRENT2.naam} come from their distributors' data sheets.`,
        somKop: "Two weeks of drying, step by step",
        uurSom: `${getal2(v.kw, 2)} kW × 24 hours`,
        kwhDag: "kWh/day",
        dagen: "14 days",
        perKwh: `${PRIJS_TXT} per kWh`,
        stroom: "electricity",
        somnoot: `Say you dry a new-build home with one ${v.short} for two weeks, and the machine runs non-stop at full power. At the example price of ${PRIJS_TXT} per kWh that is the upper limit: at most ${bedrag2(v.kostDag)} per day. Thanks to the humidistat, the actual bill is lower.`,
        somvs: /* @__PURE__ */ jsxs(Fragment, { children: [
          "The same fourteen days with a ",
          /* @__PURE__ */ jsx("b", { children: CONCURRENT_KLEIN2.naam }),
          ", a competitor's construction dehumidifier of",
          " ",
          getal2(CONCURRENT_KLEIN2.kw, 2),
          " kW, cost",
          " ",
          /* @__PURE__ */ jsx("b", { className: "hun", children: bedrag2(c.perDag(CONCURRENT_KLEIN2.kw) * 14 * c.prijsKwh) }),
          " in electricity, ",
          bedrag2((c.perDag(CONCURRENT_KLEIN2.kw) - v.kwhDag) * 14 * c.prijsKwh),
          " more for the same room."
        ] })
      }),
      faqTitel: "All about the consumption of a construction dehumidifier",
      ons: (o) => ({
        kick: "Machine against machine",
        h2: "You do not put a large machine in a small room.",
        lede: `The biggest electricity bill rarely comes from an inefficient machine, but from an oversized one. Below, our smallest construction dehumidifier next to the ${CONCURRENT2.naam}, the model most hire companies send out as standard, even to a cellar or a flat it is far too heavy for.`,
        onsLabel: "Our machine",
        esub: `${o.type} for rooms up to ${o.volume} m³ · 230 V`,
        kwhEtmaal: "kWh per 24 hours",
        ekpilOns: `${bedrag2(c.perDag(o.kw) * c.prijsKwh)} per day in electricity at ${PRIJS_TXT} per kWh`,
        vermogen: "Power input",
        afvoer: "Moisture extraction",
        volume: "Recommended volume",
        tweeWeken: "Electricity over two weeks",
        totVolume: (vol) => `up to ${vol} m³`,
        bekijk: `View the ${o.short}`,
        vglLabel: "Comparison machine",
        ekpilHun: `${bedrag2(c.perDag(CONCURRENT2.kw) * c.prijsKwh)} per day in electricity at ${PRIJS_TXT} per kWh`,
        note: /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("b", { children: [
            "Saves ",
            bedrag2((c.perDag(CONCURRENT2.kw) - c.perDag(o.kw)) * 14 * c.prijsKwh),
            " in electricity over two weeks"
          ] }),
          ":",
          " ",
          /* @__PURE__ */ jsxs("b", { className: "ons", children: [
            Math.round((1 - c.perDag(o.kw) / c.perDag(CONCURRENT2.kw)) * 100),
            "% less consumption"
          ] }),
          ", for a room where ",
          o.volume,
          " m³ of capacity is enough. That is why the",
          " ",
          /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "drying calculator" }),
          " works out your volume first and only then chooses the machine."
        ] }),
        bron: /* @__PURE__ */ jsxs(Fragment, { children: [
          "To be fair: the ",
          CONCURRENT2.naam,
          " is not a bad machine. It is built for industrial work and for volumes up to ",
          CONCURRENT2.volume,
          " m³, and in a hall or warehouse like that it does exactly what it should. The problem starts when that same machine is put in a cellar, a flat or a single floor, and that happens often, because hire companies simply send out whatever is on the van. You then pay every day for capacity that cannot be used. So the point above is about size, not quality. Our figures come from the technical data sheet on",
          " ",
          /* @__PURE__ */ jsx(Link, { to: lp(o.path), children: "the machine page" }),
          " (moisture extraction at 30 °C and 80% relative humidity), those for the ",
          CONCURRENT2.naam,
          " from the",
          " ",
          /* @__PURE__ */ jsx("a", { href: CONCURRENT2.bron, target: "_blank", rel: "noopener noreferrer nofollow", children: "distributor's product data sheet" }),
          ". In both cases the consumption is the power input times 24 hours, converted at the example price of ",
          PRIJS_TXT,
          " per kWh."
        ] })
      }),
      praktijkKick: "In practice",
      praktijkH2: "What pushes consumption up or down.",
      praktijkLede: "Five things determine whether you are close to that upper limit or stay well below it.",
      nachtKick: "Day and night",
      nachtH2: "Can a construction dehumidifier run 24 hours a day and overnight?",
      nachtLede: "Yes, and that is the whole idea. If you switch it off at night, the humidity rises again within a few hours and the moisture in the air soaks back into the walls and the floor. You then lose more drying time than you save in electricity.",
      doorLabel: "Leave it running",
      doorH3: "A construction dehumidifier is built for continuous use.",
      door: [
        { b: "Every hour of standstill counts.", tekst: "The humidity rises again within a few hours, and the moisture soaks back into walls and floor." },
        { b: "The humidistat regulates itself.", tekst: "As soon as the target value is reached, the compressor throttles back; you do not have to switch the machine off yourself." },
        { b: "Running continuously is usually cheaper.", tekst: "An extra day of hire weighs more heavily than the electricity for running through the night." },
        { b: "We measure before and after.", tekst: "In a drying package the technician records the start and end readings, so nobody has to decide on gut feeling." }
      ],
      doorVoet: "Applies to every condensation machine in our range.",
      letLabel: "What to watch out for",
      letH3: "Three things with continuous use.",
      letop: [
        {
          b: "Draining the water.",
          tekst: /* @__PURE__ */ jsxs(Fragment, { children: [
            "With a tank you have to empty it regularly, otherwise the machine stops. With a hose to a drain, or a condensate pump (",
            c.pomp,
            " per construction dehumidifier per day with us), drying carries on overnight and at the weekend too."
          ] })
        },
        { b: "A clear spot.", tekst: "Do not put the machine against a wall or under a table; the air must be able to flow in and out freely." },
        {
          b: "The electrical circuit.",
          tekst: "An ordinary 16 A circuit at 230 V can handle about 3.6 kW. Add up the power of everything connected to it. The stand-alone Heatboost 20 and 30 T site heaters run on 400 V three-phase power and need their own connection; the heater in a drying package runs on an ordinary 230 V socket."
        }
      ],
      mbKick: "Rather not do the maths yourself?",
      mbH3: "In a drying package, nothing runs more than it needs to.",
      mbP: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Our technicians place the machines, set the target value and measure the moisture before and after. So nothing runs harder or longer than it needs to. See also",
        " ",
        /* @__PURE__ */ jsx(Link, { to: lp("/levering"), children: "delivery and installation" }),
        "."
      ] }),
      mbCta: "Calculate your drying package",
      mbAlt: "Vernast technician giving a thumbs up",
      contact: {
        kicker: "Any more questions about this?",
        titel: "Our drying specialists will work it out with you.",
        lede: "Not sure whether your circuit can cope, or which machine is the most efficient for your project? Ask your question and a specialist will reply within one working day.",
        onderwerpen: [
          "Question about power consumption and costs",
          "Advice on the right machine",
          "Question about the electrical connection",
          "Something else"
        ],
        placeholder: "E.g. new build of 140 m², one 16 A circuit available, how many machines can I connect?"
      }
    };
  }
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/gids/StroomverbruikPage.tsx");
const PATH = "/gids/stroomverbruik-bouwdroger";
const VOORBEELD_PRIJS_KWH = 0.3;
function kw(waarde) {
  const m = waarde?.match(/([\d.,]+)\s*kW/i);
  if (!m) return null;
  const n = Number(m[1].replace(",", "."));
  return Number.isFinite(n) ? n : null;
}
const TOESTELLEN = TARIEVEN_PUBLIEK.map((t) => {
  const specs = PRODUCTS[t.key]?.specs ?? [];
  const opgenomen = specs.find(([l]) => /opgenomen vermogen/i.test(l))?.[1];
  const verwarming = specs.find(([l]) => /verwarmingsvermogen/i.test(l))?.[1];
  return {
    key: t.key,
    name: t.name,
    short: t.short,
    type: t.type,
    path: t.path,
    kw: kw(opgenomen ?? verwarming),
    kachel: !opgenomen && !!verwarming
  };
});
const DROGERS = TOESTELLEN.filter((t) => !t.kachel && /ttk/i.test(t.key) && t.kw !== null);
const VOORBEELD = DROGERS.find((t) => t.key === "ttk170") ?? DROGERS[0];
const getal = (n, decimalen = 1) => n.toLocaleString("nl-BE", { minimumFractionDigits: 0, maximumFractionDigits: decimalen });
const bedrag = (n) => `€ ${n.toLocaleString("nl-BE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const perDag = (k) => k * 24;
const PER_DAG_EENHEID = { nl: "dag", fr: "jour", en: "day" };
bedrag(VOORBEELD_PRIJS_KWH);
const CONCURRENT = {
  naam: "Dryfast DF 800",
  omschrijving: "De bouwdroger die bij de meeste verhuurders in het gamma staat",
  kw: 2.1,
  liters: 150,
  volume: 800,
  bron: "https://www.verbo.be/product/bouwdroger-dryfast-df800/",
  bronNaam: "productfiche van de verdeler"
};
const CONCURRENT_KLEIN = {
  naam: "Dryfast DF 400",
  kw: 1.4,
  liters: 75,
  bron: "https://euromat.be/product/bouwdroger-df400/"
};
const ONS = (() => {
  const t = TARIEVEN_PUBLIEK.find((x) => x.key === "ttk170");
  const vermogen = TOESTELLEN.find((x) => x.key === "ttk170")?.kw;
  return t && vermogen ? { ...t, kw: vermogen } : null;
})();
const V = VOORBEELD?.kw ? {
  short: VOORBEELD.short,
  path: VOORBEELD.path,
  kw: VOORBEELD.kw,
  kwhDag: perDag(VOORBEELD.kw),
  kostDag: perDag(VOORBEELD.kw) * VOORBEELD_PRIJS_KWH,
  kwhTweeWeken: perDag(VOORBEELD.kw) * 14,
  kostTweeWeken: perDag(VOORBEELD.kw) * 14 * VOORBEELD_PRIJS_KWH,
  huurDag: TARIEVEN_PUBLIEK.find((t) => t.key === VOORBEELD.key)?.perDay ?? 0
} : null;
const ZUINIGER = VOORBEELD?.kw ? Math.round((1 - perDag(VOORBEELD.kw) / perDag(CONCURRENT.kw)) * 100) : null;
V ? getal(V.kwhDag).split(",") : [];
const Check = () => /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M20 6 9 17l-5-5" }) });
const Let = () => /* @__PURE__ */ jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ jsx("path", { d: "M12 8v5" }),
  /* @__PURE__ */ jsx("path", { d: "M12 16h.01" })
] });
const Arrow = () => /* @__PURE__ */ jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsx("path", { d: "M5 12h14" }),
  /* @__PURE__ */ jsx("path", { d: "m12 5 7 7-7 7" })
] });
const FACTOR_ICONEN = [
  /* @__PURE__ */ jsx("svg", { width: "19", height: "19", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" }) }, "0"),
  /* @__PURE__ */ jsx("svg", { width: "19", height: "19", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" }) }, "1"),
  /* @__PURE__ */ jsx("svg", { width: "19", height: "19", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M3 9h18M9 21V9M5 21h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z" }) }, "2"),
  /* @__PURE__ */ jsxs("svg", { width: "19", height: "19", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("path", { d: "M3 7h18v10H3z" }),
    /* @__PURE__ */ jsx("path", { d: "M7 7v3M11 7v5M15 7v3M19 7v5" })
  ] }, "3"),
  /* @__PURE__ */ jsxs("svg", { width: "19", height: "19", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ jsx("path", { d: "M12 6v6l4 2" })
  ] }, "4")
];
const StroomverbruikPage = () => {
  const lp = useLokaalPad();
  const taal = useTaal();
  const toonBedrag = useToonBedrag();
  const nl = taal === "nl";
  const getalLocale = taal === "en" ? "en-GB" : NUMBER_LOCALE[taal];
  const fmtGetal = nl ? getal : (n, decimalen = 1) => n.toLocaleString(getalLocale, { minimumFractionDigits: 0, maximumFractionDigits: decimalen });
  const fmtBedrag = nl ? bedrag : (n) => formatEuro(n, taal);
  const catalogus = (excl) => {
    if (nl) return euro(excl);
    const b2 = toonBedrag(excl);
    return `${b2.tekst} ${b2.label}`;
  };
  const typeIn = (key, type) => nl ? type : productInTaal(key, taal)?.type ?? type;
  const ctx = {
    lp,
    getal: fmtGetal,
    bedrag: fmtBedrag,
    prijs: fmtBedrag(VOORBEELD_PRIJS_KWH),
    prijsKwh: VOORBEELD_PRIJS_KWH,
    perDag,
    huur: catalogus,
    pomp: catalogus(PUMP.price),
    V,
    ONS: ONS ? { ...ONS, type: typeIn(ONS.key, ONS.type) } : null,
    ZUINIGER,
    groot: CONCURRENT,
    klein: CONCURRENT_KLEIN,
    zonderVermogen: TOESTELLEN.some((x) => x.kw === null)
  };
  const t = useCopy(COPY)(ctx);
  const g = fmtGetal;
  const b = fmtBedrag;
  const P = ctx.prijs;
  const reken = V ? t.reken(V) : null;
  const meter = V ? t.meter(V) : null;
  const ons = ctx.ONS ? t.ons(ctx.ONS) : null;
  const O = ctx.ONS;
  return /* @__PURE__ */ jsxs(
    GidsShell,
    {
      seo: useSeo("gidsStroomverbruik"),
      path: PATH,
      crumbs: [
        { name: t.crumbHome, path: "/" },
        { name: t.crumbGidsen, path: "/gids" },
        { name: t.crumb, path: PATH }
      ],
      kick: t.kick,
      h1: t.h1,
      intro: /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("p", { children: t.intro1 }),
        ZUINIGER && V ? /* @__PURE__ */ jsx("p", { children: t.intro2(V, ZUINIGER) }) : null
      ] }),
      heroImg: {
        src: "/vernast/man-zen-crop.webp",
        alt: t.heroAlt,
        width: "min(78%,360px)"
      },
      heroBadge: ZUINIGER ? /* @__PURE__ */ jsxs("div", { className: "fbadge", style: { top: "-8%", right: "-17%", left: "auto", zIndex: 0 }, children: [
        /* @__PURE__ */ jsx("span", { className: "ic", children: /* @__PURE__ */ jsxs("svg", { width: "19", height: "19", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
          /* @__PURE__ */ jsx("path", { d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" }),
          /* @__PURE__ */ jsx("path", { d: "M2 21c0-3 1.85-5.36 5.08-6" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { children: t.badge(ZUINIGER) })
      ] }) : null,
      articlePublished: "2026-09-29",
      faq: t.faq,
      faqZelfPlaatsen: true,
      children: [
        V && /* @__PURE__ */ jsx("div", { className: "statrule", children: /* @__PURE__ */ jsx("div", { className: "wrap", children: /* @__PURE__ */ jsxs(Reveal, { className: "band", from: "up", children: [
          /* @__PURE__ */ jsxs("div", { className: "st", children: [
            /* @__PURE__ */ jsxs("div", { className: "n", children: [
              g(V.kw, 2),
              /* @__PURE__ */ jsx("em", { children: "kW" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "l", children: t.stats(V)[0].l })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "st", children: [
            /* @__PURE__ */ jsxs("div", { className: "n", children: [
              g(V.kwhDag),
              /* @__PURE__ */ jsx("em", { children: "kWh" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "l", children: t.stats(V)[1].l })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "st", children: [
            /* @__PURE__ */ jsxs("div", { className: "n", children: [
              P,
              /* @__PURE__ */ jsx("em", { children: "/kWh" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "l", children: t.stats(V)[2].l })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "st", children: [
            /* @__PURE__ */ jsxs("div", { className: "n", children: [
              "24",
              /* @__PURE__ */ jsx("em", { children: t.uur })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "l", children: t.stats(V)[3].l })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsx("section", { className: "sw", children: /* @__PURE__ */ jsxs("div", { className: "wrap wsplit", children: [
          /* @__PURE__ */ jsxs(Reveal, { className: "prose", from: "left", children: [
            /* @__PURE__ */ jsx("h2", { children: t.formuleH2 }),
            /* @__PURE__ */ jsx("p", { children: t.formuleP1 }),
            /* @__PURE__ */ jsx("p", { className: "note", children: /* @__PURE__ */ jsx("b", { children: t.formule }) }),
            /* @__PURE__ */ jsx("p", { children: t.formuleP2 })
          ] }),
          V && meter && /* @__PURE__ */ jsxs(Reveal, { className: "meterdek", from: "right", delay: 0.1, "aria-hidden": "true", children: [
            /* @__PURE__ */ jsxs("div", { className: "meter kaart-a", children: [
              /* @__PURE__ */ jsxs("div", { className: "mt-h", children: [
                /* @__PURE__ */ jsx("b", { children: meter.onsKop }),
                /* @__PURE__ */ jsx("span", { className: "ons", children: meter.zuinigst })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-dial", children: [
                /* @__PURE__ */ jsxs("div", { className: "mt-kwh", children: [
                  g(V.kwhDag),
                  /* @__PURE__ */ jsx("em", { children: "kWh" })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "mt-sub", children: meter.sub })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mtrow", children: [
                /* @__PURE__ */ jsx("span", { className: "k", children: meter.vermogen }),
                /* @__PURE__ */ jsxs("span", { className: "v", children: [
                  g(V.kw, 2),
                  " ",
                  /* @__PURE__ */ jsx("small", { children: "kW" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mtrow", children: [
                /* @__PURE__ */ jsx("span", { className: "k", children: meter.draaiuren }),
                /* @__PURE__ */ jsxs("span", { className: "v", children: [
                  "24 ",
                  /* @__PURE__ */ jsx("small", { children: t.uur })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mtrow", children: [
                /* @__PURE__ */ jsx("span", { className: "k", children: meter.voorbeeldprijs }),
                /* @__PURE__ */ jsxs("span", { className: "v", children: [
                  P,
                  " ",
                  /* @__PURE__ */ jsx("small", { children: "/kWh" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-res groen", children: [
                /* @__PURE__ */ jsx("b", { children: meter.onsRes }),
                /* @__PURE__ */ jsx("span", { children: meter.aanStroom })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "meter kaart-b", children: [
              /* @__PURE__ */ jsxs("div", { className: "mt-h", children: [
                /* @__PURE__ */ jsx("b", { children: meter.hunKop }),
                /* @__PURE__ */ jsx("span", { className: "hun", children: meter.zelfde })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-dial", children: [
                /* @__PURE__ */ jsxs("div", { className: "mt-kwh", children: [
                  g(perDag(CONCURRENT.kw)),
                  /* @__PURE__ */ jsx("em", { children: "kWh" })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "mt-sub", children: meter.sub })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mtrow", children: [
                /* @__PURE__ */ jsx("span", { className: "k", children: meter.vermogen }),
                /* @__PURE__ */ jsxs("span", { className: "v", children: [
                  g(CONCURRENT.kw, 2),
                  " ",
                  /* @__PURE__ */ jsx("small", { children: "kW" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mtrow", children: [
                /* @__PURE__ */ jsx("span", { className: "k", children: meter.draaiuren }),
                /* @__PURE__ */ jsxs("span", { className: "v", children: [
                  "24 ",
                  /* @__PURE__ */ jsx("small", { children: t.uur })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mtrow", children: [
                /* @__PURE__ */ jsx("span", { className: "k", children: meter.voorbeeldprijs }),
                /* @__PURE__ */ jsxs("span", { className: "v", children: [
                  P,
                  " ",
                  /* @__PURE__ */ jsx("small", { children: "/kWh" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-res rood", children: [
                /* @__PURE__ */ jsx("b", { children: meter.hunRes }),
                /* @__PURE__ */ jsx("span", { children: meter.aanStroom })
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("section", { className: "lvred", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
          /* @__PURE__ */ jsxs(Reveal, { className: "sec-head", from: "up", children: [
            /* @__PURE__ */ jsx("span", { className: "kick", children: t.tblKick }),
            /* @__PURE__ */ jsx("h2", { className: "sec", children: t.tblH2 }),
            /* @__PURE__ */ jsx("p", { className: "lede", children: t.tblLede })
          ] }),
          /* @__PURE__ */ jsx(Reveal, { className: "tbl", from: "up", delay: 0.1, children: /* @__PURE__ */ jsxs("table", { children: [
            /* @__PURE__ */ jsxs("caption", { children: [
              t.caption,
              ctx.zonderVermogen ? t.captionGeen : ""
            ] }),
            /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("th", { scope: "col", children: t.thToestel }),
              /* @__PURE__ */ jsx("th", { scope: "col", children: t.thVermogen }),
              /* @__PURE__ */ jsx("th", { scope: "col", children: t.thKwh }),
              /* @__PURE__ */ jsx("th", { scope: "col", children: t.thDag })
            ] }) }),
            /* @__PURE__ */ jsx("tbody", { children: TOESTELLEN.map((x) => /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx(Link, { className: "tnaam", to: lp(x.path), children: x.short }),
                /* @__PURE__ */ jsx("small", { children: typeIn(x.key, x.type) })
              ] }),
              x.kw === null ? /* @__PURE__ */ jsx("td", { colSpan: 3, children: t.geenVermogen }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsxs("td", { className: "num", children: [
                  g(x.kw, 2),
                  " kW"
                ] }),
                /* @__PURE__ */ jsxs("td", { className: "num", children: [
                  g(perDag(x.kw)),
                  " kWh"
                ] }),
                /* @__PURE__ */ jsx("td", { className: "num", children: b(perDag(x.kw) * VOORBEELD_PRIJS_KWH) })
              ] })
            ] }, x.key)) })
          ] }) }),
          /* @__PURE__ */ jsx(Reveal, { className: "note", from: "up", delay: 0.15, children: t.tblNote })
        ] }) }),
        V && reken && /* @__PURE__ */ jsxs("section", { className: "sw", children: [
          /* @__PURE__ */ jsxs("div", { className: "wrap wsplit", children: [
            /* @__PURE__ */ jsxs(Reveal, { className: "sec-head", from: "left", style: { marginBottom: 0 }, children: [
              /* @__PURE__ */ jsx("span", { className: "kick", children: reken.kick }),
              /* @__PURE__ */ jsx("h2", { className: "sec", children: reken.h2 }),
              /* @__PURE__ */ jsx("p", { className: "lede", children: reken.p1 }),
              /* @__PURE__ */ jsx("p", { className: "lede", children: reken.p2 }),
              /* @__PURE__ */ jsx("p", { className: "lede", children: reken.p3 })
            ] }),
            /* @__PURE__ */ jsxs(Reveal, { className: "vglkaart", from: "right", delay: 0.1, children: [
              /* @__PURE__ */ jsxs("div", { className: "vgl", children: [
                /* @__PURE__ */ jsxs("div", { className: "vrow groen", children: [
                  /* @__PURE__ */ jsxs("div", { className: "vl", children: [
                    /* @__PURE__ */ jsx("span", { children: reken.onsLabel }),
                    /* @__PURE__ */ jsx("b", { children: b(V.kostDag) })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "vbar", children: /* @__PURE__ */ jsx("i", { style: { width: `${Math.round(V.kw / CONCURRENT.kw * 100)}%` } }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "vrow rood", children: [
                  /* @__PURE__ */ jsxs("div", { className: "vl", children: [
                    /* @__PURE__ */ jsxs("span", { children: [
                      CONCURRENT_KLEIN.naam,
                      ", ",
                      g(CONCURRENT_KLEIN.kw, 2),
                      " kW"
                    ] }),
                    /* @__PURE__ */ jsx("b", { children: b(perDag(CONCURRENT_KLEIN.kw) * VOORBEELD_PRIJS_KWH) })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "vbar", children: /* @__PURE__ */ jsx("i", { style: { width: `${Math.round(CONCURRENT_KLEIN.kw / CONCURRENT.kw * 100)}%` } }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "vrow rood", children: [
                  /* @__PURE__ */ jsxs("div", { className: "vl", children: [
                    /* @__PURE__ */ jsxs("span", { children: [
                      CONCURRENT.naam,
                      ", ",
                      g(CONCURRENT.kw, 2),
                      " kW"
                    ] }),
                    /* @__PURE__ */ jsx("b", { children: b(perDag(CONCURRENT.kw) * VOORBEELD_PRIJS_KWH) })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "vbar", children: /* @__PURE__ */ jsx("i", { style: { width: "100%" } }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "vrow huur", children: [
                  /* @__PURE__ */ jsxs("div", { className: "vl", children: [
                    /* @__PURE__ */ jsx("span", { children: reken.huurLabel }),
                    /* @__PURE__ */ jsx("b", { children: catalogus(V.huurDag) })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "vbar", children: /* @__PURE__ */ jsx("i", { style: { width: "100%" } }) })
                ] })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "vglnoot", children: reken.noot })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
            /* @__PURE__ */ jsx(Reveal, { className: "prose somkop", from: "up", delay: 0.15, children: /* @__PURE__ */ jsx("h3", { children: reken.somKop }) }),
            /* @__PURE__ */ jsxs(Reveal, { className: "somrij", from: "up", delay: 0.1, children: [
              /* @__PURE__ */ jsxs("div", { className: "som", children: [
                /* @__PURE__ */ jsx("span", { className: "sk", children: reken.uurSom }),
                /* @__PURE__ */ jsxs("span", { className: "sv", children: [
                  g(V.kwhDag),
                  /* @__PURE__ */ jsx("small", { children: reken.kwhDag })
                ] })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "somop", "aria-hidden": "true", children: "×" }),
              /* @__PURE__ */ jsxs("div", { className: "som", children: [
                /* @__PURE__ */ jsx("span", { className: "sk", children: reken.dagen }),
                /* @__PURE__ */ jsxs("span", { className: "sv", children: [
                  g(V.kwhTweeWeken),
                  /* @__PURE__ */ jsx("small", { children: "kWh" })
                ] })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "somop", "aria-hidden": "true", children: "×" }),
              /* @__PURE__ */ jsxs("div", { className: "som uit", children: [
                /* @__PURE__ */ jsx("span", { className: "sk", children: reken.perKwh }),
                /* @__PURE__ */ jsxs("span", { className: "sv", children: [
                  b(V.kostTweeWeken),
                  /* @__PURE__ */ jsx("small", { children: reken.stroom })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx(Reveal, { className: "somnoot", from: "up", delay: 0.15, children: reken.somnoot }),
            /* @__PURE__ */ jsx(Reveal, { className: "somvs", from: "up", delay: 0.2, children: reken.somvs })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          GidsFaqSectie,
          {
            faq: t.faq,
            titel: t.faqTitel,
            variant: "rood"
          }
        ),
        O && ons && /* @__PURE__ */ jsx("section", { className: "sw", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
          /* @__PURE__ */ jsxs(Reveal, { className: "sec-head", from: "up", children: [
            /* @__PURE__ */ jsx("span", { className: "kick", children: ons.kick }),
            /* @__PURE__ */ jsx("h2", { className: "sec", children: ons.h2 }),
            /* @__PURE__ */ jsx("p", { className: "lede", children: ons.lede })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "ecog", children: [
            /* @__PURE__ */ jsxs(Reveal, { className: "eco wij", from: "left", delay: 0.05, children: [
              /* @__PURE__ */ jsx("span", { className: "et", children: ons.onsLabel }),
              /* @__PURE__ */ jsx("h3", { children: O.short }),
              /* @__PURE__ */ jsx("p", { className: "esub", children: ons.esub }),
              /* @__PURE__ */ jsxs("div", { className: "ekpi", children: [
                g(perDag(O.kw)),
                /* @__PURE__ */ jsx("em", { children: ons.kwhEtmaal })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "ekpil", children: ons.ekpilOns }),
              /* @__PURE__ */ jsxs("div", { className: "erow", children: [
                /* @__PURE__ */ jsx("span", { className: "k", children: ons.vermogen }),
                /* @__PURE__ */ jsxs("span", { className: "v", children: [
                  g(O.kw, 2),
                  " kW"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "erow", children: [
                /* @__PURE__ */ jsx("span", { className: "k", children: ons.afvoer }),
                /* @__PURE__ */ jsxs("span", { className: "v", children: [
                  O.litersPerDay,
                  " L/",
                  PER_DAG_EENHEID[taal]
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "erow", children: [
                /* @__PURE__ */ jsx("span", { className: "k", children: ons.volume }),
                /* @__PURE__ */ jsx("span", { className: "v", children: ons.totVolume(O.volume) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "erow", children: [
                /* @__PURE__ */ jsx("span", { className: "k", children: ons.tweeWeken }),
                /* @__PURE__ */ jsx("span", { className: "v", children: b(perDag(O.kw) * 14 * VOORBEELD_PRIJS_KWH) })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "emeer", children: /* @__PURE__ */ jsx(Link, { to: lp(O.path), children: ons.bekijk }) })
            ] }),
            /* @__PURE__ */ jsxs(Reveal, { className: "eco hun", from: "right", delay: 0.1, children: [
              /* @__PURE__ */ jsx("span", { className: "et", children: ons.vglLabel }),
              /* @__PURE__ */ jsx("h3", { children: CONCURRENT.naam }),
              /* @__PURE__ */ jsx("p", { className: "esub", children: t.concurrentOmschrijving }),
              /* @__PURE__ */ jsxs("div", { className: "ekpi", children: [
                g(perDag(CONCURRENT.kw)),
                /* @__PURE__ */ jsx("em", { children: ons.kwhEtmaal })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "ekpil", children: ons.ekpilHun }),
              /* @__PURE__ */ jsxs("div", { className: "erow", children: [
                /* @__PURE__ */ jsx("span", { className: "k", children: ons.vermogen }),
                /* @__PURE__ */ jsxs("span", { className: "v", children: [
                  g(CONCURRENT.kw, 2),
                  " kW"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "erow", children: [
                /* @__PURE__ */ jsx("span", { className: "k", children: ons.afvoer }),
                /* @__PURE__ */ jsxs("span", { className: "v", children: [
                  CONCURRENT.liters,
                  " L/",
                  PER_DAG_EENHEID[taal]
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "erow", children: [
                /* @__PURE__ */ jsx("span", { className: "k", children: ons.volume }),
                /* @__PURE__ */ jsx("span", { className: "v", children: ons.totVolume(CONCURRENT.volume) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "erow", children: [
                /* @__PURE__ */ jsx("span", { className: "k", children: ons.tweeWeken }),
                /* @__PURE__ */ jsx("span", { className: "v", children: b(perDag(CONCURRENT.kw) * 14 * VOORBEELD_PRIJS_KWH) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "ecoslot", children: [
            /* @__PURE__ */ jsx(Reveal, { className: "note", from: "up", delay: 0.15, children: ons.note }),
            /* @__PURE__ */ jsx(Reveal, { className: "ecobron", from: "up", delay: 0.2, children: ons.bron })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("section", { className: "lvred", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
          /* @__PURE__ */ jsxs(Reveal, { className: "sec-head", from: "up", children: [
            /* @__PURE__ */ jsx("span", { className: "kick", children: t.praktijkKick }),
            /* @__PURE__ */ jsx("h2", { className: "sec", children: t.praktijkH2 }),
            /* @__PURE__ */ jsx("p", { className: "lede", children: t.praktijkLede })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "cyc", children: t.factoren.map((f, i) => /* @__PURE__ */ jsxs(Reveal, { className: "cy", from: "up", delay: i * 0.06, children: [
            /* @__PURE__ */ jsxs("i", { "aria-hidden": "true", children: [
              "0",
              i + 1
            ] }),
            /* @__PURE__ */ jsx("span", { className: "ci2", children: FACTOR_ICONEN[i] }),
            /* @__PURE__ */ jsx("h3", { children: f.titel }),
            /* @__PURE__ */ jsx("p", { children: f.tekst })
          ] }, f.titel)) })
        ] }) }),
        /* @__PURE__ */ jsx("section", { className: "sw", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
          /* @__PURE__ */ jsxs(Reveal, { className: "sec-head", from: "up", children: [
            /* @__PURE__ */ jsx("span", { className: "kick", children: t.nachtKick }),
            /* @__PURE__ */ jsx("h2", { className: "sec", children: t.nachtH2 }),
            /* @__PURE__ */ jsx("p", { className: "lede", children: t.nachtLede })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "vsg", children: [
            /* @__PURE__ */ jsxs(Reveal, { className: "vs groen", from: "left", delay: 0.05, children: [
              /* @__PURE__ */ jsx("span", { className: "vt", children: t.doorLabel }),
              /* @__PURE__ */ jsx("h3", { children: t.doorH3 }),
              /* @__PURE__ */ jsx("ul", { children: t.door.map((d) => /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx(Check, {}),
                /* @__PURE__ */ jsxs("span", { children: [
                  /* @__PURE__ */ jsx("b", { children: d.b }),
                  " ",
                  d.tekst
                ] })
              ] }, d.b)) }),
              /* @__PURE__ */ jsx("span", { className: "vf", children: t.doorVoet })
            ] }),
            /* @__PURE__ */ jsxs(Reveal, { className: "vs rood", from: "right", delay: 0.1, children: [
              /* @__PURE__ */ jsx("span", { className: "vt", children: t.letLabel }),
              /* @__PURE__ */ jsx("h3", { children: t.letH3 }),
              /* @__PURE__ */ jsx("ul", { children: t.letop.map((d) => /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx(Let, {}),
                /* @__PURE__ */ jsxs("span", { children: [
                  /* @__PURE__ */ jsx("b", { children: d.b }),
                  " ",
                  d.tekst
                ] })
              ] }, d.b)) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Reveal, { className: "manband aansluitend", from: "up", children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-t", children: [
              /* @__PURE__ */ jsx("span", { className: "mbk", children: t.mbKick }),
              /* @__PURE__ */ jsx("h3", { children: t.mbH3 }),
              /* @__PURE__ */ jsx("p", { children: t.mbP }),
              /* @__PURE__ */ jsxs(Link, { className: "btn btn-white mb-cta", to: lp("/verhuur/calculator"), children: [
                t.mbCta,
                /* @__PURE__ */ jsx(Arrow, {})
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              "img",
              {
                className: "mb-man",
                src: "/vernast/man-duim-kabels.webp",
                alt: t.mbAlt,
                style: { width: "min(30%,320px)" }
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(
          ContactBlok,
          {
            kicker: t.contact.kicker,
            titel: t.contact.titel,
            lede: t.contact.lede,
            onderwerpen: t.contact.onderwerpen,
            placeholder: t.contact.placeholder
          }
        )
      ]
    }
  );
};
export {
  StroomverbruikPage as default
};
