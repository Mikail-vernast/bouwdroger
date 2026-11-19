/**
 * Engelse (Britse) teksten bij de verhuurcatalogus van `verhuur.ts`.
 *
 * Alleen proza, net als `verhuur.fr.ts`: sleutels, prijzen, foto's en
 * Stripe-metadata blijven in `verhuur.ts` (en `tarieven.ts`). De functies die
 * deze teksten over het Nederlandse product leggen (`productInTaal`,
 * `vertaalPortaal`, `catInTaal`, …) staan in `verhuur.fr.ts` en zijn driewegs;
 * zo blijft er één API en hoeft geen pagina te weten in welk bestand een taal
 * woont.
 *
 * Deze module importeert bewust niets uit `verhuur.fr.ts` behalve types: die
 * importeert ons, en een kringverwijzing tussen twee datamodules geeft bij het
 * prerenderen een `undefined` op het eerste gebruik.
 *
 * Draait aan beide kanten, dus relatieve imports met `.js`.
 */

import type { ROLE, SpecSheet, DeviceKey } from "./verhuur.js";
import type { ProductTekst } from "./verhuur.fr.js";

/* ============================================================
   Teksten uit het portaal
   ============================================================ */

/** Letterlijke Nederlandse portaaltekst → Engels. Onbekend blijft Nederlands. */
export const PORTAAL_EN: Record<string, string> = {
  /* Productnamen (`name`) */
  "Ontvochtiger TTK 170 S": "Dehumidifier TTK 170 S",
  "Ontvochtiger TTK 350 S": "Dehumidifier TTK 350 S",
  "Ontvochtiger TTK 650 S": "Dehumidifier TTK 650 S",
  "Elektrische kachel TEddH 20 T": "Electric heater TEddH 20 T",
  "Elektrische kachel TEddH 30 T": "Electric heater TEddH 30 T",
  "Ventilator TTV 4500": "Fan TTV 4500",
  "Adsorptiedroger Revolution": "Desiccant dehumidifier Revolution",
  "Radiaalventilator 2 250 m³/u": "Radial fan 2,250 m³/h",

  /* Soorten (`type`) */
  Condensontvochtiger: "Condensation dehumidifier",
  "Elektrische bouwkachel": "Electric site heater",
  "Bouwventilator · luchtcirculatie": "Site fan · air circulation",
  "Adsorptiedroger · gericht drogen": "Desiccant dehumidifier · targeted drying",
  "Bouwventilator · gericht drogen": "Site fan · targeted drying",

  /* Badges */
  "Kleine ruimtes": "Small rooms",
  "Meest gehuurd": "Most hired",
  "Grote volumes": "Large volumes",
  "Kleinere ruimtes": "Smaller rooms",
  "Voor koude ruimtes": "For cold rooms",
  "Versnelt elke droging": "Speeds up any drying job",
  "Plaatselijk drogen": "Local drying",
  "Gericht drogen": "Targeted drying",
  "Meest gekozen": "Most chosen",

  /* Samenvattingen (`sum`) */
  "Compacte, verrijdbare condensontvochtiger. De juiste keuze voor één kamer, een appartement of een kleinere renovatie.":
    "Compact condensation dehumidifier on wheels. The right choice for a single room, a flat or a smaller renovation.",
  "Ons meest gehuurde toestel en de standaard voor nieuwbouw. Droogt chape en pleisterwerk betrouwbaar binnen enkele dagen.":
    "Our most hired unit and the standard for new builds. Dries screed and plaster reliably within a few days.",
  "Het zwaarste toestel in het gamma. Voor grote werven, kelders en waterschade waar elke dag telt.":
    "The most powerful unit in the range. For large sites, cellars and water damage where every day counts.",
  "Elektrische bouwkachel van 20 kW met thermostaat. Brengt kleinere koude ruimtes op temperatuur zodat de droging blijft doorlopen.":
    "20 kW electric site heater with thermostat. Brings smaller cold rooms up to temperature so the drying keeps going.",
  "Elektrische bouwkachel van 30 kW met ingebouwde thermostaat. Brengt koude ruimtes op temperatuur zodat droging effectief wordt.":
    "30 kW electric site heater with built-in thermostat. Brings cold rooms up to temperature so drying becomes effective.",
  "Krachtige bouwventilator met 4 500 m³/u luchtverzet. Zorgt dat de droge lucht ook effectief langs muren en vloeren strijkt.":
    "Powerful site fan moving 4,500 m³/h of air. Makes sure the dry air actually sweeps along walls and floors.",
  "Droogt gericht via slangen: onder vloeren, in wanden en op moeilijk bereikbare plekken. Werkt ook bij lage temperaturen.":
    "Dries in a targeted way through hoses: under floors, inside walls and in hard-to-reach places. Also works at low temperatures.",
  "Blaast de lucht gericht over vloeren en chape, ook onder kasten en in hoeken. De vaste partner van een ontvochtiger bij vloerdroging.":
    "Blows air precisely across floors and screed, including under cabinets and into corners. The regular partner of a dehumidifier for floor drying.",

  /* Toestelcatalogus (`CAT`) */
  "Boost, 50 l / 24 u": "Boost, 50 l / 24 h",
  "Highflow, 5 300 m³/u": "Highflow, 5,300 m³/h",
  "Elektrische kachel, 3,30 kW": "Electric heater, 3.30 kW",
  "Performance, 80 l / 24 u": "Performance, 80 l / 24 h",
  "Automatische werking · laag geluidsniveau · waterreservoir":
    "Automatic operation · low noise level · water tank",
  "Spatwaterdicht (IP55) · 3 standen · 0,25 kW": "Splash-proof (IP55) · 3 speeds · 0.25 kW",
  "Ingebouwde thermostaat · gelijkmatige verdeling": "Built-in thermostat · even distribution",
  "Krachtig bij overgang naar hogere vochtbelasting": "Powerful when the moisture load increases",

  /* Dekking (`COVER`) */
  Standaard: "Standard",
  "Eigen risico € 250": "€250 excess",
  "Geen eigen risico": "No excess",
  "Zit standaard bij elke huur. U draagt zelf het eigen risico.":
    "Included as standard with every hire. You bear the excess yourself.",
  "Verlaagt uw eigen risico van € 1.000 naar € 250 en dekt diefstal.":
    "Reduces your excess from €1,000 to €250 and covers theft.",
  "Volledig zonder eigen risico, bij schade, defect én diefstal.":
    "No excess at all, for damage, breakdown and theft.",
  "Wettelijke aansprakelijkheid": "Third-party liability",
  "Technische storing gedekt": "Technical failure covered",
  "Normale gebruiksslijtage": "Normal wear and tear",
  "Eigen risico € 1.000 bij schade": "€1,000 excess in case of damage",
  "Diefstal niet gedekt": "Theft not covered",
  "Geen vervangtoestel": "No replacement unit",
  "Eigen risico verlaagd tot € 250": "Excess reduced to €250",
  "Diefstal gedekt": "Theft covered",
  "Vervangtoestel binnen 24 u": "Replacement unit within 24 h",
  "Bij schade betaalt u de eerste € 250": "In case of damage you pay the first €250",
  "Géén eigen risico bij schade": "No excess at all in case of damage",
  "Diefstal volledig gedekt": "Theft fully covered",
  "Defect toestel direct vervangen": "Faulty unit replaced immediately",
  "Vervangtoestel binnen 12 u": "Replacement unit within 12 h",
  "Voorrang bij planning en verlenging": "Priority for scheduling and extensions",

  /* Extra's (`EXTRAS`) */
  "Officieel vochtrapport": "Official moisture report",
  "Verslag nodig voor uw verzekeraar, huisbaas of bouwdossier? Wij werken de standaard voor- en nameting uit tot een ondertekend rapport met alle meetwaarden.":
    "Need a report for your insurer, landlord or building file? We turn the standard before-and-after reading into a signed report with all measured values.",
  eenmalig: "one-off",
  "Werfstroomkast (paddestoel)": "Site power distribution box",
  "Nog geen elektriciteitskast op de werf? Wij verhuren een werfstroomverdeler mee, zodat alle toestellen meteen veilig kunnen draaien.":
    "No electrical cabinet on site yet? We hire out a site power distributor as well, so all units can run safely straight away.",
  "per week": "per week",
};

/* ============================================================
   Toestelpagina's
   ============================================================ */

export const GEDEELDE_ALT_EN: Record<string, string> = {
  "/vernast/post/transparantie.webp":
    "Transparency in price and planning: automatic calculation, no uncertainty about the duration, fully dry for the next building phase",
};

export const PRODUCT_EN: Record<string, ProductTekst> = {
  ttk170: {
    alt: {
      "/vernast/eco-boost.webp":
        "Vernast Boost, Boost condensation dehumidifier extracting 50 litres a day for rooms up to 250 m³",
      "/vernast/lineup-dryers-werfruimte.webp":
        "The three Vernast eco construction dehumidifiers side by side, the Boost is the smallest model",
      "/vernast/boost-werf-keuken-aansluitingen-v3.webp":
        "Boost construction dehumidifier next to a kitchen island under construction in a bright new-build home, with kitchen units partly fitted",
      "/vernast/boost-zijaanzicht-vernast-werfruimte.webp":
        "Boost construction dehumidifier in three-quarter view with the Vernast logo in a bright site room",
      "/vernast/boost-vooraanzicht-werfruimte.webp":
        "Boost TTK 170 S construction dehumidifier seen straight from the front in a bright site room, with no cable sticking out",
      "/vernast/boost-achteraanzicht-werfruimte.webp":
        "Rear view of the Boost TTK 170 S construction dehumidifier with ventilation grilles in a bright site room, with no cable sticking out",
      "/vernast/boost-werf-nat-pleister-leefruimte.webp":
        "Boost construction dehumidifier in a new-build living area with windows fitted and visibly wet plaster",
      "/vernast/boost-werf-nat-pleister-kamer.webp":
        "Boost construction dehumidifier in a freshly plastered room with closed windows and damp patches of plaster",
      "/vernast/post/boost-info-poster.webp":
        "Vernast information poster for the Small construction dehumidifier: automatic operation, noise level and water tank",
      "/vernast/post/boost-afmetingen.webp": "Dimensions of the Vernast Boost: 54 × 49 × 96.3 cm",
    },
    key: [
      ["Moisture extraction", "50", "L/day"],
      ["Coverage", "250", "m³"],
      ["Consumption", "0.75", "kW"],
    ],
    aboutTitle: "When should you choose the Boost?",
    about: [
      "This is our entry-level unit, but with 50 litres of moisture extraction a day it is certainly no lightweight. For rooms up to about <strong>250 m³</strong> (a flat or one floor of a house, for example) this unit removes construction moisture efficiently.",
      "The Boost is on wheels and compact enough to get through a normal door or up a staircase. It runs quietly enough to stay in an occupied room, which makes it suitable for renovations while you are still living there.",
      "Working in a larger space, or dealing with water damage where speed matters? Then take a look at the <strong>Performance</strong> or <strong>Ultimate</strong>.",
    ],
    bullets: [
      ["Up to 250 m³", "One room, a flat or one floor: the volume this unit handles comfortably."],
      ["Quiet enough for occupied rooms", "You can keep living or working while the unit runs."],
      ["On wheels and compact", "Fits through normal doors and can be moved by one person."],
      ["Continuous drainage possible", "We connect a condensate hose as standard, so you never have to empty anything."],
    ],
    specs: [
      ["Type", "Condensation dehumidifier"],
      ["Moisture extraction (30 °C / 80 % RH)", "50 L/day"],
      ["Recommended volume", "up to 250 m³"],
      ["Airflow", "300 m³/h"],
      ["Power input", "0.75 kW"],
      ["Supply voltage", "230 V / 50 Hz"],
      ["Operating temperature range", "5 – 32 °C"],
      ["Tank", "with continuous drainage option"],
      ["Hygrostat", "built in"],
      ["Dimensions (w × d × h)", "approx. 43 × 43 × 65 cm"],
      ["Weight", "approx. 32 kg"],
      ["Mobility", "wheels + push handle"],
    ],
    faq: [
      [
        "Is this unit big enough for my home?",
        "For one room, a flat or one floor of up to about 250 m³, the Boost is enough. For a complete new-build house we recommend the Performance. Feel free to let the configurator work it out, then you know for sure.",
      ],
      [
        "Can I move the unit myself?",
        "Yes. The unit weighs about 27 kg and stands on wheels with a push handle. One person can wheel it; for stairs, two people are recommended.",
      ],
      [
        "How much noise does it make?",
        "Considerably less than a site fan. You can keep working or living in the same home, although it is not ideal in a bedroom while you sleep.",
      ],
    ],
  },
  ttk350: {
    alt: {
      "/vernast/eco-performance.webp":
        "Vernast Performance, Performance condensation dehumidifier extracting 70 litres a day for rooms up to 400 m³",
      "/vernast/lineup-dryers-werfruimte.webp":
        "The three Vernast eco construction dehumidifiers side by side, the Performance is the middle model",
      "/vernast/performance-vooraanzicht-werfruimte.webp":
        "Performance TTK 350 S construction dehumidifier seen straight from the front in a bright site room, with no cable sticking out",
      "/vernast/performance-achteraanzicht-werfruimte.webp":
        "Rear view of the Performance TTK 350 S construction dehumidifier in a bright site room, with no cable sticking out",
      "/vernast/performance-zijaanzicht-vernast-werfruimte.webp":
        "Performance construction dehumidifier in three-quarter view with the Vernast logo in a bright site room",
      "/vernast/performance-werf-nat-pleister.webp":
        "Performance construction dehumidifier in a new-build living area with wet plaster and windows fitted",
      "/vernast/performance-werf-keuken-v2.webp":
        "Performance construction dehumidifier in a kitchen extension with oak units partly fitted and large glass doors",
      "/vernast/post/performance-info-poster.webp":
        "Vernast information poster for the Medium construction dehumidifier: automatic operation, noise level and water tank",
      "/vernast/post/performance-afmetingen-v2.webp":
        "Dimensions of the Vernast Performance: 53 × 50 × 96.5 cm, weight 39 kg according to the supplied poster",
    },
    key: [
      ["Moisture extraction", "70", "L/day"],
      ["Coverage", "400", "m³"],
      ["Consumption", "1.1", "kW"],
    ],
    aboutTitle: "When should you choose the Performance?",
    about: [
      "This is the unit we deliver most often, and for good reason: with <strong>70 litres of moisture extraction a day</strong> and a coverage of up to <strong>400 m³</strong>, it handles a complete new-build house or a large renovation in one go.",
      "In a new build, most of the moisture sits in the screed and the plaster. They release their water slowly, and natural drying takes weeks. The Performance lowers the humidity enough to shorten that process considerably: <strong>two to four weeks</strong>, depending on the thickness of the screed or plaster, so your floor layer and decorator can start sooner.",
      "For the best result, combine this unit with a <strong>Highflow fan</strong>. Without air movement it is mainly the air that dries, not the building fabric; with circulation you gain days.",
    ],
    bullets: [
      ["Up to 400 m³", "A complete new-build house or a large renovation with a single unit."],
      ["70 L a day", "Enough capacity to dry fresh screed and plaster quickly."],
      ["5 – 7 days of drying", "Typical duration in a new build with correct placement and circulation."],
      ["Built-in hygrostat", "The unit throttles back by itself as soon as the target humidity is reached."],
    ],
    specs: [
      ["Type", "Condensation dehumidifier"],
      ["Moisture extraction (30 °C / 80 % RH)", "70 L/day"],
      ["Recommended volume", "up to 400 m³"],
      ["Airflow", "550 m³/h"],
      ["Power input", "1.1 kW"],
      ["Supply voltage", "230 V / 50 Hz"],
      ["Operating temperature range", "5 – 32 °C"],
      ["Tank", "with continuous drainage option"],
      ["Hygrostat", "built in"],
      ["Dimensions (w × d × h)", "approx. 50 × 50 × 87 cm"],
      ["Weight", "approx. 50 kg"],
      ["Mobility", "wheels + push handle"],
    ],
    faq: [
      [
        "Why is this the most hired unit?",
        "Because the volume of an average new-build house or a thorough renovation falls exactly within this unit's range. It is powerful enough to work quickly, yet compact and economical enough for normal use.",
      ],
      [
        "Do I need a fan as well?",
        "Recommended, not required. A dehumidifier dries the air; a fan makes sure that dry air actually sweeps along the walls and floors. In practice the combination shortens the drying time noticeably, especially with thick screed.",
      ],
      [
        "What if my space is larger than 400 m³?",
        "Then we place either the Ultimate or several units. The configurator works out the number of units needed automatically.",
      ],
      [
        "Do I have to empty the water?",
        "No. During installation we connect a condensate hose to a drain. If there is no drain nearby, we place a tank and agree with you how often it needs emptying.",
      ],
    ],
  },
  ttk650: {
    alt: {
      "/vernast/eco-ultimate.webp":
        "Vernast Ultimate, Ultimate condensation dehumidifier extracting 110 litres a day for rooms up to 600 m³",
      "/vernast/lineup-dryers.webp":
        "The three Vernast eco construction dehumidifiers side by side, the Ultimate is the largest model",
      "/vernast/post/ultimate-afmetingen.webp": "Dimensions of the Vernast Ultimate: 61.6 × 51.1 × 102.2 cm, 52 kg",
    },
    key: [
      ["Moisture extraction", "110", "L/day"],
      ["Coverage", "600", "m³"],
      ["Consumption", "1.4", "kW"],
    ],
    aboutTitle: "When should you choose the Ultimate?",
    about: [
      "With <strong>110 litres a day</strong> and a coverage of up to <strong>600 m³</strong>, this is the unit for situations where volume or speed is the problem: large sites, industrial spaces, spacious cellars or acute water damage.",
      "With <strong>water damage</strong> it is often the right choice. After a leak or a flood, the water is not only in the air but deep in floors, walls and insulation. The faster you bring the humidity down, the lower the risk of mould and structural damage; the first 48 hours are decisive.",
      "Drying a <strong>cellar or unheated space</strong>? Combine this unit with the <strong>Heatpower 30</strong>. Below 15 °C, condensation drying is slow; with the heater you raise the temperature and the moisture is released.",
    ],
    bullets: [
      ["Up to 600 m³", "Large sites, industrial spaces and spacious cellars with a single unit."],
      ["110 L a day", "The highest moisture extraction in our range, for urgent situations."],
      ["First choice for water damage", "Bring the humidity down fast to prevent mould and rot."],
      ["Combine with a heater", "In cold rooms the Heatpower 30 brings the temperature up to working level."],
    ],
    specs: [
      ["Type", "Condensation dehumidifier"],
      ["Moisture extraction (30 °C / 80 % RH)", "110 L/day"],
      ["Recommended volume", "up to 600 m³"],
      ["Airflow", "700 m³/h"],
      ["Power input", "1.4 kW"],
      ["Supply voltage", "230 V / 50 Hz"],
      ["Operating temperature range", "5 – 32 °C"],
      ["Tank", "with continuous drainage option"],
      ["Hygrostat", "built in"],
      ["Dimensions (w × d × h)", "approx. 55 × 55 × 95 cm"],
      ["Weight", "approx. 52 kg"],
      ["Mobility", "wheels + push handle"],
    ],
    faq: [
      [
        "Is this unit suitable for water damage?",
        "Yes, it is our first choice for water damage. Its large capacity brings the humidity down quickly, which is crucial in the first 48 hours. We almost always combine it with one or more fans.",
      ],
      [
        "Does it work in a cold cellar?",
        "To a limited extent. Below 15 °C the efficiency of any condensation dehumidifier drops sharply. For cellars we deliver this unit together with the Heatpower 30, so the temperature reaches working level.",
      ],
      [
        "How much electricity does it use?",
        "1.4 kW at full power, comparable to a kettle running continuously at half power. Over a week that is a limited cost compared with the damage you prevent.",
      ],
      [
        "Can I hire several units?",
        "Of course. Above 600 m³ we place several units. The configurator works out the correct number automatically.",
      ],
    ],
  },
  ttv4500: {
    alt: {
      "/vernast/vent-axiaal.webp": "Vernast Turbo Highflow, site fan moving 4,500 m³/h of air",
      "/vernast/vent-axiaal-vooraanzicht.webp":
        "Vernast TTV 4500 axial fan seen straight from the front in a bright site room",
      "/vernast/post/axiaal-specs.webp":
        "Features of the Vernast Highflow axial fan: high airflow, splash-proof IP55, 230 V, three speeds",
      "/vernast/post/axiaal-afmetingen.webp": "Dimensions of the Vernast Highflow: 35.8 × 51.5 × 52 cm, 15 kg",
    },
    key: [
      ["Airflow", "4,500", "m³/h"],
      ["Speeds", "3", ""],
      ["Consumption", "0.2", "kW"],
    ],
    aboutTitle: "Why use a fan for drying?",
    about: [
      "A dehumidifier dries the <strong>air</strong>. But the moisture is in your <strong>walls, screed and floor</strong>. Without air movement, a thin layer of saturated air forms against those surfaces, and that is where drying stops.",
      "A fan breaks up that layer. By blowing air continuously along the building fabric, dry air keeps coming into contact with the wet surface, so the moisture is released faster. In practice that can make <strong>days of difference</strong>.",
      "With <strong>4,500 m³/h</strong> and three speeds, this unit suits large spaces. It is light, stackable and adjustable, so you can aim the airflow exactly at the wet area. With water damage we consider a fan <strong>essential</strong>, not optional.",
    ],
    bullets: [
      ["4,500 m³/h airflow", "Enough throughput to keep an entire large space moving."],
      ["Indispensable for water damage", "Without circulation the air dries, but the building fabric does not."],
      ["Very economical", "0.2 kW: the cheapest unit for shortening your drying time."],
      ["Adjustable and stackable", "Aim the airflow exactly where the moisture is; several units can be combined."],
    ],
    specs: [
      ["Type", "Axial site fan"],
      ["Airflow", "4,500 m³/h"],
      ["Speeds", "3"],
      ["Power input", "0.2 kW"],
      ["Supply voltage", "230 V / 50 Hz"],
      ["Rotor diameter", "approx. 45 cm"],
      ["Housing", "plastic, stackable"],
      ["Adjustable", "yes, tilting frame"],
      ["Dimensions (w × d × h)", "approx. 56 × 30 × 62 cm"],
      ["Weight", "approx. 15 kg"],
      ["Application", "construction drying, water damage, site ventilation"],
    ],
    faq: [
      [
        "Do I really need a fan?",
        "In a new build it is strongly recommended; with water damage we consider it necessary. A dehumidifier without circulation mainly dries the air; with a fan the moisture actually leaves the wall and the screed too.",
      ],
      [
        "How many fans do I need?",
        "As a guide: one fan per large room or per wet area. In a home with several rooms we often place two or three. Our technician will advise you on site.",
      ],
      [
        "Can I hire it on its own, without a dehumidifier?",
        "That is possible, for example to ventilate a site or to make paint dry faster. For construction moisture we always recommend the combination with a dehumidifier: a fan on its own moves moisture, it does not remove it.",
      ],
    ],
  },
  teddh30: {
    alt: {
      "/vernast/kachel-30.webp": "Vernast Heatpower 30 electric site heater, 30 kW with built-in thermostat",
      "/vernast/post/kachel-30-specs.webp":
        "Features of the Vernast Heatpower 30: built-in thermostat, even distribution, direct heat, overheating protection",
      "/vernast/post/kachel-30-afmetingen.webp": "Dimensions of the Vernast Heatpower 30: 28 × 26 × 30 cm, 10 kg",
    },
    key: [
      ["Power", "30", "kW"],
      ["Connection", "400", "V"],
      ["Max. temperature", "75", "°C"],
      ["Thermostat", "yes", ""],
    ],
    aboutTitle: "Why heat while drying?",
    about: [
      "Drying depends on temperature. Warm air can hold far more moisture than cold air, and warm building fabric releases its moisture faster. <strong>Below 15 °C the efficiency of a condensation dehumidifier drops sharply</strong>; below 10 °C the process becomes really slow.",
      "That is exactly where this heater comes in. In a <strong>cellar, an unheated new build or a winter site</strong>, the Heatpower 30 brings the space up to working temperature, so the dehumidifier can work at full capacity again. The combination gives a much shorter drying time than the dehumidifier on its own.",
      "With <strong>30 kW</strong> and a built-in thermostat, the unit also heats large volumes and keeps the temperature stable without you having to stand next to it. A <strong>400 V (three-phase) connection</strong> is required; our technician checks this on delivery.",
    ],
    bullets: [
      ["30 kW heat output", "Brings even large cold spaces up to working temperature quickly."],
      ["Indispensable in cellars", "Below 15 °C a dehumidifier on its own does not work efficiently enough."],
      ["Built-in thermostat", "Keeps the target temperature automatically, no supervision needed."],
      ["400 V three-phase power", "We check on delivery whether your connection is suitable."],
    ],
    specs: [
      ["Type", "Electric site heater with fan"],
      ["Heat output", "30 kW"],
      ["Settings", "several power levels"],
      ["Supply voltage", "400 V / 3~ / 50 Hz"],
      ["Thermostat", "built in, adjustable"],
      ["Airflow", "approx. 2,000 m³/h"],
      ["Housing", "steel, powder-coated"],
      ["Safety", "overheating protection"],
      ["Dimensions (w × d × h)", "approx. 45 × 50 × 55 cm"],
      ["Weight", "approx. 24 kg"],
      ["Application", "cellars, winter sites, unheated new builds"],
    ],
    faq: [
      [
        "Why do I need a heater with a dehumidifier?",
        "Because drying depends on temperature. Below 15 °C air absorbs little moisture and the building fabric releases its water slowly. The heater brings the space up to temperature so the dehumidifier works at full capacity; together you dry considerably faster.",
      ],
      [
        "Do I need three-phase power?",
        "Yes, this unit requires a 400 V three-phase connection. Our technician checks this on delivery. If you do not have three-phase power, we will look at an alternative together.",
      ],
      [
        "Does it use a lot of electricity?",
        "A 30 kW heater is not an economical appliance, but in a cold space it is the only way to make drying work. Without a heater your dehumidifier hire lasts much longer, which ends up costing more.",
      ],
      [
        "Can the heater be left unattended?",
        "The thermostat and the overheating protection allow continuous use. During installation our technician explains how to position the unit safely and what distance to keep from materials.",
      ],
    ],
  },
  teddh20: {
    alt: {
      "/vernast/kachel-20.webp":
        "Vernast Heatboost 20 electric site heater, 20 kW with thermostat for smaller rooms",
    },
    key: [
      ["Power", "20", "kW"],
      ["Connection", "400", "V"],
      ["Max. temperature", "60", "°C"],
      ["Thermostat", "yes", ""],
    ],
    aboutTitle: "When should you choose the TEH 20 T?",
    about: [
      "The same role as the <strong>Heatpower 30</strong>, but one size smaller. This heater brings a <strong>cellar, garage, flat or closed-off floor</strong> up to working temperature, so your dehumidifier can work at full capacity again.",
      "Below 15 °C air absorbs hardly any moisture and the building fabric releases its water slowly. In an unheated space, heating is therefore not a question of comfort but a condition for drying at all; without a heater your hire simply lasts longer.",
      "With <strong>20 kW</strong> this unit heats the spaces for which the 30 kW version is oversized. This model also requires <strong>400 V three-phase power</strong>; if you do not have it, let us know in advance.",
    ],
    bullets: [
      ["20 kW heat output", "Enough for a cellar, garage or closed-off floor."],
      ["One size below the Heatpower 30", "Smaller and lighter, for spaces where 30 kW is too much."],
      ["Built-in thermostat", "Keeps the target temperature without you having to stand next to it."],
      ["400 V three-phase power", "Check in advance whether your site has a three-phase connection."],
    ],
    specs: [
      ["Type", "Electric site heater with fan"],
      ["Heat output", "20 kW"],
      ["Settings", "several power levels"],
      ["Supply voltage", "400 V / 3~ / 50 Hz"],
      ["Thermostat", "built in, adjustable"],
      ["Housing", "steel, powder-coated"],
      ["Safety", "overheating protection"],
      ["Application", "cellars, garages, flats, winter sites"],
    ],
    faq: [
      [
        "What is the difference from the Heatpower 30?",
        "Only the power: 20 kW versus 30 kW. For a cellar, garage or flat this version is more than enough. For a complete house under construction or a large site, choose the 30 kW version.",
      ],
      [
        "Do I need three-phase power?",
        "Yes, this unit also requires a 400 V three-phase connection. If you do not have it, mention it when you book and we will look at an alternative together.",
      ],
      [
        "Is a heater on its own enough for drying?",
        "No. Heat releases the moisture from the building fabric, but does not remove it. Always combine it with a dehumidifier, otherwise the same moisture condenses elsewhere in the room.",
      ],
    ],
  },
  radiaal2250: {
    alt: {
      "/vernast/vent-radiaal.webp": "Vernast Turbo, 2,250 m³/h, blows precisely across floors and screed",
      "/products/dim-radiaal-ventilator.webp": "Dimensions of the Vernast radial fan: 54.5 × 51.5 × 49 cm, 20 kg",
      "/vernast/post/radiaal-specs.webp":
        "Features of the Vernast Turboflow radial fan: 2,250 m³/h, splash-proof IP55, three speeds, extra socket",
      "/vernast/post/radiaal-afmetingen.webp": "Dimensions of the Vernast Turboflow: 54.5 × 51.5 × 49 cm, 20 kg",
    },
    key: [
      ["Airflow", "2,250", "m³/h"],
      ["Speeds", "3", ""],
      ["Protection", "IP55", ""],
    ],
    aboutTitle: "Axial or radial: which one do you choose?",
    about: [
      "An <strong>axial fan</strong> gets a whole room moving. A <strong>radial fan</strong> does something else: it pushes the air in a narrow, powerful jet just over the surface. Exactly what you need for <strong>floors and screed</strong>.",
      "Thanks to that targeted jet, the unit drives away the layer of saturated air that clings to a wet floor. You can also aim it under cabinets, against a skirting board or into a corner, places an axial fan cannot reach.",
      "With <strong>2,250 m³/h</strong>, three speeds and a <strong>splash-proof housing (IP55)</strong>, this is the unit we add as standard for screed drying and after water damage. Combine it with a dehumidifier: the fan releases the moisture, the dehumidifier takes it out of the air.",
    ],
    bullets: [
      ["Targeted airflow", "Blows just over floors and screed instead of across the room."],
      ["Reaches where you cannot", "Under cabinets, against skirting boards and into corners, thanks to the tilting frame."],
      ["Splash-proof (IP55)", "Keeps running safely on a wet floor after water damage."],
      ["Can be linked in series", "Extra socket on the unit so several units can be connected."],
    ],
    specs: [
      ["Type", "Radial site fan"],
      ["Airflow", "2,250 m³/h"],
      ["Speeds", "3"],
      ["Power input", "max. 1.2 kW"],
      ["Protection rating", "IP55"],
      ["Supply voltage", "230 V / 50 Hz"],
      ["Socket for series connection", "yes, 6 A"],
      ["Housing", "plastic, stackable"],
      ["Adjustable", "yes, several blowing angles"],
      ["Dimensions (w × d × h)", "approx. 54.5 × 51.5 × 49 cm"],
      ["Weight", "approx. 15 kg"],
      ["Application", "floor and screed drying, water damage"],
    ],
    faq: [
      [
        "When do you choose a radial rather than an axial fan?",
        "If the moisture is in the floor or the screed, the radial fan is the better choice: the airflow passes just over the surface. If it is about a whole room or the walls, an axial fan suits better. With water damage we often combine the two.",
      ],
      [
        "How many units do I need?",
        "As a guide, one radial fan per wet area or per room. For a complete floor after water damage we usually place two or three, supplemented by a dehumidifier.",
      ],
      [
        "Can it stand on a wet floor?",
        "Yes, the housing is splash-proof (IP55). Do place the unit on a level surface, though, and never in standing water.",
      ],
    ],
  },
  revolution: {
    alt: {
      "/vernast/luchtkussen-wand-overzicht.webp": "Desiccant dehumidifier ducted to sheeting over a damp wall",
      "/vernast/luchtkussen-wand-detail.webp": "Detail of the duct beneath wall sheeting with an outlet opening",
      "/vernast/luchtkussen-vloer.webp": "Desiccant dehumidifier supplying dry air beneath sheeting over a wet floor",

      "/vernast/eco-revolution.webp":
        "Vernast Revolution, red desiccant dehumidifier with hose connections for local drying",
    },
    key: [
      ["Technology", "Desiccant", ""],
      ["Drying", "through hoses", ""],
      ["Cold rooms", "yes", ""],
    ],
    aboutTitle: "When should you choose this desiccant dehumidifier?",
    about: [
      "A condensation dehumidifier dries the air in a room. This <strong>desiccant dehumidifier</strong> works the other way round: it blows dry air through <strong>hoses</strong> exactly to where the moisture is, under a floating floor, inside a wall or in an insulated construction.",
      "That way you dry in a <strong>targeted</strong> way rather than the whole room, which after water damage often makes the difference between breaking out and drying. Desiccant drying also keeps working at <strong>lower temperatures</strong>, where a condensation dehumidifier loses efficiency.",
      "Not sure whether this is the right unit for your situation? Give us a call; this is very much a unit we prefer to assess with you first.",
    ],
    bullets: [
      ["Dries in a targeted way through hoses", "Under floors, inside walls and in hard-to-reach places."],
      ["Also works at low temperatures", "Unlike condensation, desiccant drying loses little efficiency in the cold."],
      ["Avoids breaking out", "Often the way to save a floating floor after water damage."],
      ["Advice beforehand", "We look together at whether your construction is suitable."],
    ],
    specs: [
      ["Type", "Desiccant dehumidifier"],
      ["Operation", "dry air through hoses to the wet area"],
      ["Power input (20 °C / 60 % RH)", "0.42 kW"],
      ["Connected load", "0.55 kW"],
      ["Supply voltage", "230 V / 50 Hz"],
      ["Application", "floor build-up, walls, insulation, cold rooms"],
    ],
    faq: [
      [
        "What is the difference from an ordinary construction dehumidifier?",
        "A condensation dehumidifier dries the air in the room; this unit blows dry air through hoses straight into the construction. If the moisture is under a floor or inside a wall, an ordinary construction dehumidifier cannot reach it.",
      ],
      [
        "When is this the right choice?",
        "Mainly after water damage where water has run under a floating floor or into the insulation. Also in unheated rooms, where a condensation dehumidifier loses efficiency.",
      ],
    ],
  },
};

/**
 * De paginatitel van een toestelpagina in het Engels, met dezelfde grens van
 * 60 tekens als `toestelTitel` en `toestelTitelFr`. "Hire" is het zoekwoord
 * dat een Brit typt ("dehumidifier hire"), niet "rental".
 */
export function toestelTitelEn(naam: string, dagprijs?: string): string {
  const bouw = (prijs?: string) => `${naam} hire${prijs ? ` - ${prijs}/day` : ""} | Vernast`;
  const met = dagprijs ? bouw(dagprijs) : "";
  return met && met.length <= 60 ? met : bouw();
}

/* ============================================================
   Alt-teksten voor beelden waarvan alleen het pad bekend is
   ============================================================ */

export const BEKENDE_BEELDEN_EN: [RegExp, string][] = [
  [/lineup-dryers/, "The three Vernast eco construction dehumidifiers side by side: Boost, Performance and Ultimate"],
  [/teddh-30|kachel-30/, "Vernast Heatpower 30 electric site heater, 30 kW with built-in thermostat"],
  [/teddh-20|kachel-20/, "Vernast Heatboost 20 electric site heater, 20 kW with thermostat"],
  [/ttv-4500|vent-axiaal/, "Vernast Turbo Highflow, site fan moving 4,500 m³/h of air"],
  [/dim-radiaal-ventilator/, "Dimensions of the Vernast radial fan: 54.5 × 51.5 × 49 cm, 20 kg"],
  [/vent-radiaal|radiaal/, "Vernast Turbo, 2,250 m³/h, blows precisely across floors and screed"],
  [/ttk-170|eco-boost/, "Vernast Boost (TTK 170 S), condensation dehumidifier extracting 50 litres a day"],
  [/ttk-350|eco-performance/, "Vernast Performance (TTK 350 S), condensation dehumidifier extracting 70 litres a day"],
  [/ttk-650|eco-ultimate/, "Vernast Ultimate (TTK 650 S), condensation dehumidifier extracting 110 litres a day"],
  [/eco-revolution|revolution/, "Vernast Revolution, red desiccant dehumidifier with hose connections for targeted drying"],
];

/* ============================================================
   Pakketpagina en boekingsflow
   ============================================================ */

export const ROLE_EN: typeof ROLE = {
  small: {
    tag: "Capacity",
    txt: "The Small construction dehumidifier extracts up to 50 litres of moisture per 24 hours. Compact, on wheels and quiet enough to stay in place while work goes on. This is the base capacity of your package: without enough litres a day, drying drags on.",
  },
  medium: {
    tag: "Extra capacity",
    txt: "The Medium construction dehumidifier takes up to 70 litres per 24 hours out of the air. We add this unit as soon as the volume or the moisture load increases, for example with thicker screed or a complete house in one go.",
  },
  axiaal: {
    tag: "Circulation",
    txt: "Each axial fan moves 4,500 m³ of air per hour. A thin layer of saturated air forms against a wet wall or screed, and that is where drying stops. The fans break up that layer so dry air keeps coming into contact with the wet surface.",
  },
  kachel: {
    tag: "Temperature",
    txt: "The 3.30 kW electric heater brings the room up to working temperature. Below 15 °C air absorbs hardly any moisture and the building fabric releases its water slowly; with added heat the dehumidifier works at full capacity again.",
  },
};

export const SPECS_EN: SpecSheet[] = [
  {
    k: "small",
    tab: "Small dehumidifier",
    h: "Compact, quiet and always ready",
    p: [
      "With a dehumidifying capacity of up to <b>50 litres per 24 hours</b>, this construction dehumidifier removes moisture from spaces of up to about 250 m³. On wheels, compact and quiet enough to stay in place while work goes on.",
      "The unit works <b>fully automatically</b>: the built-in hygrostat throttles it back as soon as the target humidity is reached. We connect a condensate hose as standard, so there is no water for you to empty.",
    ],
    h4: "Automatic, economical and maintenance-free",
    g: [
      [
        "Dehumidification",
        [
          ["Max. capacity [l/24 h]", "50"],
          ["Operating range [°C]", "5 – 32"],
          ["Operating range [% RH]", "30 – 90"],
        ],
      ],
      ["Airflow", [["Max. level [m³/h]", "300"]]],
      [
        "Electrical values",
        [
          ["Mains connection", "230 V / 50 Hz"],
          ["Power input [kW]", "0.75"],
          ["Plug", "CEE 7/7"],
        ],
      ],
      [
        "Dimensions",
        [
          ["w × d × h [cm]", "43 × 43 × 65"],
          ["Weight [kg]", "32"],
          ["Water tank", "with continuous drainage"],
        ],
      ],
    ],
  },
  {
    k: "medium",
    tab: "Medium dehumidifier",
    h: "Powerful under a higher moisture load",
    p: [
      "This construction dehumidifier extracts up to <b>70 litres per 24 hours</b> and covers volumes of up to about 400 m³. We add the unit as soon as the moisture load increases: thicker screed, a complete house or a shorter deadline.",
      "Despite its higher output, the noise level stays low enough for occupied rooms, and <b>automatic operation</b> means you can simply leave the unit running.",
    ],
    h4: "More capacity, the same simplicity",
    g: [
      [
        "Dehumidification",
        [
          ["Max. capacity [l/24 h]", "70"],
          ["Operating range [°C]", "5 – 32"],
          ["Operating range [% RH]", "30 – 90"],
        ],
      ],
      ["Airflow", [["Max. level [m³/h]", "550"]]],
      [
        "Electrical values",
        [
          ["Mains connection", "230 V / 50 Hz"],
          ["Power input [kW]", "1.1"],
          ["Plug", "CEE 7/7"],
        ],
      ],
      [
        "Dimensions",
        [
          ["w × d × h [cm]", "50 × 50 × 87"],
          ["Weight [kg]", "50"],
          ["Water tank", "with continuous drainage"],
        ],
      ],
    ],
  },
  {
    k: "axiaal",
    tab: "Axial fans",
    h: "Robust ventilation",
    p: [
      "With an airflow of up to <b>4,500 m³/h</b>, this axial fan is ideal for speeding up drying or circulating fresh air. Compact yet solidly built, you can place it effortlessly wherever ventilation makes the difference.",
      "This fan runs on an ordinary <b>230 V socket</b>, is <b>splash-proof (IP55)</b> and uses only <b>0.25 kW</b>. With <b>3 speeds</b> and an air speed of up to <b>39.6 km/h</b>, it is ready for any situation, indoors and outdoors.",
    ],
    h4: "Quiet, economical and versatile",
    g: [
      ["Airflow", [["Max. level, free blowing [m³/h]", "5,300"]]],
      ["Air pressure", [["Max. level [Pa]", "80"]]],
      ["Fan", [["Speeds", "3"]]],
      [
        "Air outlet speed",
        [
          ["m/s", "11"],
          ["km/h", "39.6"],
        ],
      ],
      [
        "Electrical values",
        [
          ["Mains connection", "230 V / 50 Hz"],
          ["Rated current [A]", "1.1"],
          ["Power input [kW]", "0.25"],
          ["recommended fuse [A]", "10"],
        ],
      ],
      ["Electrical connection", [["Plug", "CEE 7/7"]]],
    ],
  },
  {
    k: "radiaal",
    tab: "Radial fans",
    h: "Targeted drying of screed and floors",
    p: [
      "The radial fan blows a <b>narrow, powerful jet</b> just above the floor. That way you reach under the screed, behind skirting boards and into the corners an axial fan cannot reach, exactly where moisture lingers longest.",
      "With <b>2,250 m³/h</b>, three speeds and an <b>extra socket</b> for series connection, this is the unit we add as standard for screed and after water damage.",
    ],
    h4: "Perfect for closed rooms and screed",
    g: [
      ["Airflow", [["Max. level [m³/h]", "2,250"]]],
      [
        "Fan",
        [
          ["Speeds", "3"],
          ["Extra socket", "yes, in series"],
        ],
      ],
      [
        "Electrical values",
        [
          ["Mains connection", "230 V / 50 Hz"],
          ["Power input [kW]", "0.50"],
          ["Protection rating", "IP55"],
        ],
      ],
      [
        "Dimensions",
        [
          ["w × d × h [cm]", "48 × 39 × 45"],
          ["Weight [kg]", "15"],
          ["Stackable", "yes"],
        ],
      ],
    ],
  },
  {
    k: "kachel",
    tab: "Electric heater 3.30 kW",
    h: "Ideal for temporary heating",
    p: [
      "Drying depends on temperature: below <b>15 °C</b> air absorbs hardly any moisture and the building fabric releases its water slowly. This heater brings the room up to working temperature so the dehumidifiers work at full capacity again.",
      "The <b>built-in thermostat</b> keeps the desired temperature automatically, the fan spreads the heat evenly and the <b>overheating protection</b> allows unattended use.",
    ],
    h4: "Built-in thermostat and direct heat",
    g: [
      [
        "Heating",
        [
          ["Heat output [kW]", "3.30"],
          ["Settings", "2 + ventilation"],
          ["Thermostat", "built in, adjustable"],
        ],
      ],
      ["Airflow", [["Max. level [m³/h]", "300"]]],
      [
        "Electrical values",
        [
          ["Mains connection", "230 V / 50 Hz"],
          ["Rated current [A]", "14.3"],
          ["recommended fuse [A]", "16"],
        ],
      ],
      [
        "Safety",
        [
          ["Protection", "overheating protection"],
          ["Housing", "steel, powder-coated"],
          ["Weight [kg]", "10"],
        ],
      ],
    ],
  },
];

export const PUMP_EN = {
  name: "Condensate pump per dehumidifier",
  sub: "No tank or tray to empty: the pump drains the condensate directly and automatically, even to a drain that sits higher up. It is pure condensate and can simply go down the drain.",
};

export const DELIVERY_EN: Record<string, { name: string; sub: string; tag: string }> = {
  lever: {
    name: "Delivery & installation",
    sub: "We bring everything within 24 h, set it up and set the target value. Collection after the hire period included.",
    tag: "Included",
  },
};

export const SC_LABEL_EN: Record<string, string> = {
  nieuwbouw: "new build",
  waterschade: "water damage",
  renovatie: "renovation",
  kelder: "cellar or cold room",
};

export const DEVICE_LABEL_EN: Record<DeviceKey, string> = {
  small: "Small dehumidifier",
  medium: "Medium dehumidifier",
  axiaal: "Axial fan",
  kachel: "Electric heater",
};

/** De werkzaamheid in `packageGalleryAltsInTaal`: "Drying package for screed, …". */
export const WERK_EN: Record<string, string> = {
  pleister: "plaster",
  chape: "screed",
  beide: "plaster and screed",
  waterschade: "water damage",
};
