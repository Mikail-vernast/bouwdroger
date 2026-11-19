import { jsx, jsxs } from "react/jsx-runtime";
import { useLocation, Link } from "react-router-dom";
import { R as REGIO_ROUTES, v as vertaalPad, b as useTaal, e as useVoorkeur, A as ACTIEVE_TALEN, f as bewaarVoorkeur, w as wisselPad, d as useKlant, u as useCopy, a as useLokaalPad, k as kaartVoor } from "../main.mjs";
import { b as PUMP, d as PRODUCT_ORDER, t as toestelPad, P as PRODUCTS } from "./verhuur-CgnDb-wO.js";
import { a as euro } from "./verhuur-8XCQs1EE.js";
import { S as SITE_NAME, C as CONTACT, M as MAPS_URL, H as HEADQUARTERS } from "./PageMeta-BXulEWcY.js";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/toebehoren.ts");
const CONDENSPOMP = {
  slug: "condenspomp",
  naam: "Externe condenspomp",
  type: "Toebehoren · automatische waterafvoer",
  badge: "Automatische waterafvoer",
  sum: "Een bouwdroger haalt het vocht uit de lucht en vangt het op in een bak. De condenspomp zorgt dat u die bak nooit hoeft te legen: hij pompt het water continu weg naar een lavabo, douche of vloerput, tot 3,90 m hoger dan het toestel staat.",
  dag: PUMP.price,
  img: [
    [
      "/vernast/condenspomp-product-v2.webp",
      "Witte externe condenspomp op een zwarte opvangbak, met stroomkabel en transparante afvoerslang op een betonvloer",
      "Externe condenspomp met opvangbak en afvoerslang."
    ],
    [
      "/vernast/condenspomp-slangopstelling.webp",
      "Voorbeeldopstelling: groene condensslang van een bouwdroger naar een pomp op de vloer, met een dunne afvoerslang naar een hoger gelegen afvoer",
      "Via een slang naar de pomp: het condenswater loopt vanuit de bouwdroger naar de opvangbak en wordt daarna weggepompt."
    ],
    [
      "/vernast/condenspomp-zonder-emmer.webp",
      "Voorbeeldopstelling: condenspomp in het onderste vak van een bouwdroger, aangesloten met een korte groene slang en zonder losse opvangemmer",
      "Zonder losse emmer: de pomp staat onder de condensafvoer van de bouwdroger, als het toestel daarvoor geschikt is."
    ]
  ],
  key: [
    ["Afvoer", "90", "liter per uur"],
    ["Pompt tot", "3,90", "m hoog"],
    ["Verbruik", "58", "watt"]
  ],
  aboutTitle: "Wanneer heeft u een condenspomp nodig?",
  about: [
    "Elke bouwdroger die bij ons buitengaat heeft een <strong>opvangbak</strong> en een condensslang, allebei gratis. Ligt er een afvoer <strong>lager</strong> dan het toestel — een vloerput, een douchebak, de aansluiting van de toekomstige wasmachine — dan loopt het water daar vanzelf naartoe en heeft u verder niets nodig.",
    "Maar vaak ligt die afvoer er niet, of ligt hij <strong>hoger</strong> dan het toestel. Dan vult de opvangbak zich en schakelt de droger zichzelf uit zodra ze vol is. Op een werf gebeurt dat zelden op een gelegen moment: u komt maandagochtend terug op een toestel dat sinds vrijdagavond stilstaat, en de lucht die u vrijdag droog had, is dat intussen niet meer.",
    "Daarvoor is de condenspomp. Hij staat naast of onder de droger, vangt het condenswater op en duwt het via een dunne slang weg: <strong>tot 3,90 m hoger</strong> dan het toestel staat, en over een flinke afstand horizontaal. Een vlotter schakelt hem aan zodra het bakje vol is en weer uit zodra het leeg is — u hoeft er geen enkele keer naar om te kijken."
  ],
  bullets: [
    [
      "Nooit een reservoir legen",
      "Zonder pomp leegt u de opvangbak gemiddeld 2 keer per dag, afhankelijk van hoe nat de ruimte is. Met pomp: geen enkele keer."
    ],
    [
      "Draait door 's nachts en in het weekend",
      "Een volle bak zet de droger stil, en elk uur stilstand laat het vocht in de lucht weer oplopen."
    ],
    [
      "Pompt naar boven",
      "Tot 3,90 m hoog, dus ook naar een lavabo, een gootsteen of een afvoer op de volgende verdieping."
    ],
    [
      "Zuiver condenswater",
      "Wat eruit komt is vocht uit de lucht, niet uit de bouwmassa. Het mag gewoon in de afvoer."
    ]
  ],
  stappen: [
    ["Opvangen", "Het condenswater uit de bouwdroger loopt via de slang in de opvangbak van de pomp."],
    ["Vlotter schakelt", "Staat die bak vol, dan zet een vlotter de pomp aan. Geen knop, geen timer."],
    [
      "Wegpompen",
      "De pomp duwt het water via een dunne slang naar de afvoer, tot 3,90 m hoger dan het toestel staat."
    ],
    ["Vanzelf weer uit", "Is het bakje leeg, dan valt de pomp stil tot de volgende keer. Dag en nacht."]
  ],
  specs: [
    ["Type", "Externe condenspomp met opvangbak"],
    ["Werking", "automatisch, via vlotterschakelaar"],
    ["Debiet", "90 l/u bij 3 m opvoerhoogte"],
    ["Max. opvoerhoogte", "3,90 m"],
    ["Voedingsspanning", "220 V / 50–60 Hz"],
    ["Opgenomen vermogen", "58 W (55 W in bedrijf)"],
    ["Terugslagklep", "ingebouwd"],
    ["Aanzuigslang", "Ø 25 mm (buitenmaat)"],
    ["Afvoerslang", "Ø 5 mm (binnenmaat), meegeleverd"],
    ["Afmetingen (l × b × h)", "280 × 125 × 140 mm"],
    ["Gewicht", "ca. 1,9 kg"],
    ["Toepassing", "continue condensafvoer bij bouwdrogers"]
  ],
  faq: [
    [
      "Heb ik een condenspomp nodig?",
      "Alleen als er geen afvoer lager ligt dan het toestel. Is er een vloerput, een douchebak of een wasmachineaansluiting in de buurt, dan loopt het condenswater daar vanzelf naartoe via de slang die standaard meegaat. Is dat er niet, of ligt de afvoer hoger, dan is de pomp het verschil tussen een toestel dat doorloopt en een toestel dat na een halve dag stilvalt."
    ],
    [
      "Hoeveel pompen heb ik nodig?",
      "Eén per bouwdroger. Elke droger vangt zijn eigen water op, dus elke droger heeft zijn eigen afvoer nodig. In de boeking staat de pomp daarom standaard op één per toestel; u kunt dat aantal zelf aanpassen."
    ],
    [
      "Wat kost het?",
      `${euro(PUMP.price)} per bouwdroger per dag, bovenop de huur van het toestel. Bij een geleverd pakket sluit onze technieker de pomp ter plaatse aan; dat zit in de prijs.`
    ],
    [
      "Waar loopt dat water naartoe?",
      "Naar wat er in de buurt is: een lavabo, een gootsteen, een douchebak, een vloerput of de aansluiting van de toekomstige wasmachine. In een appartement is dat meestal de douche, op een nieuwbouwwerf vaker een vloerput. De slang is dun en loopt makkelijk langs een plint of door een deuropening."
    ],
    [
      "Mag dat water zomaar in de afvoer?",
      "Ja. Het is zuiver condenswater — vocht dat uit de lucht is gehaald en op de koude lamellen van het toestel is neergeslagen. Er zit niets in dat niet in een gewone afvoer mag."
    ],
    [
      "Hoor ik hem draaien?",
      "Nauwelijks. De pomp draait niet continu maar in korte stoten van enkele seconden, telkens als het bakje vol staat. Daartussen is hij volledig stil."
    ],
    [
      "Kan ik de pomp zelf aansluiten?",
      "Ja, en dat is ook de bedoeling als u een toestel komt afhalen. U zet de pomp onder of naast de droger, legt de condensslang in de opvangbak, steekt de stekker in een gewoon stopcontact en legt de dunne afvoerslang naar uw afvoer. Verder is er niets in te stellen."
    ]
  ]
};
function toebehorenPad(slug) {
  return `/verhuur/toebehoren/${slug}`;
}
const TOEBEHOREN = [CONDENSPOMP];
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/navigation.ts");
const TOESTEL_LABEL = {
  ttk170: "Boost bouwdroger",
  ttk350: "Performance bouwdroger",
  ttk650: "Ultimate bouwdroger",
  // Het soortwoord blijft erachter staan: niemand zoekt op "Turboflow huren",
  // wel op "radiaalventilator huren".
  ttv4500: "Highflow axiaalventilator",
  radiaal2250: "Turboflow radiaalventilator",
  // Het portaal kort dit toestel af tot "Revolution". Dat is de modelnaam en
  // verder niets: in de footer, het menu en op /sitemap stond één regel
  // tussen zeven bouwdrogers en ventilatoren waaraan niet te zien was wat ze
  // is. Het soortwoord erachter, net als bij de twee ventilatoren hierboven.
  revolution: "Revolution adsorptiedroger",
  teddh30: "Heatpower 30 elektrische kachel",
  teddh20: "Heatboost 20 elektrische kachel"
};
function toestelLabel(key) {
  if (Object.prototype.hasOwnProperty.call(TOESTEL_LABEL, key)) return TOESTEL_LABEL[key];
  return PRODUCTS[key]?.short ?? key;
}
const TOESTELLEN = PRODUCT_ORDER.map((key) => ({
  label: toestelLabel(key),
  path: toestelPad(key)
}));
const TOEBEHOREN_LINKS = TOEBEHOREN.map((toebehoren) => ({
  label: `${toebehoren.naam} huren`,
  path: toebehorenPad(toebehoren.slug)
}));
const PAKKETTEN = [
  { label: "Pleisterwerk drogen", path: "/verhuur/calculator" },
  { label: "Chape drogen", path: "/verhuur/calculator" },
  { label: "Pleisterwerk + chape", path: "/verhuur/calculator" },
  { label: "Waterschade drogen", path: "/verhuur/calculator" },
  { label: "Alles in één Droogservice", path: "/verhuur/pakket" }
];
const TOEPASSINGEN = [
  { label: "Chape drogen", path: "/chape-drogen" },
  { label: "Pleisterwerk drogen", path: "/pleisterwerk-drogen" },
  { label: "Nieuwbouw drogen", path: "/nieuwbouw-drogen" },
  { label: "Drogen na waterschade", path: "/waterschade" },
  { label: "Renovatie drogen", path: "/renovatie" },
  { label: "Ontschimmeling", path: "/ontschimmeling" },
  { label: "Ozonbehandeling", path: "/ozonbehandeling" },
  { label: "Luchtontvochtiger huren", path: "/luchtontvochtiger-huren" }
];
const SCHIMMELS = [
  { label: "Ontschimmeling", path: "/ontschimmeling" },
  { label: "Ozonbehandeling", path: "/ozonbehandeling" },
  { label: "Renovatie drogen", path: "/renovatie" },
  { label: "Drogen na waterschade", path: "/waterschade" }
];
const MENU_SITUATIES = [
  ...TOEPASSINGEN,
  ...SCHIMMELS.filter((item) => !TOEPASSINGEN.some((t) => t.path === item.path))
];
const SERVICE = [
  { label: "Prijzen", path: "/prijzen" },
  { label: "Levering en installatie", path: "/levering" },
  { label: "Zelf afhalen in Aartselaar", path: "/afhalen" }
];
const KIEZEN = [
  { label: "Bereken uw droogpakket", path: "/verhuur/calculator" },
  { label: "Droogsimulator voor uw woning", path: "/verhuur/simulator" },
  { label: "Ons volledige gamma", path: "/machines" }
];
const GAMMA = [
  { label: "Ons volledige gamma", path: "/machines" },
  { label: "Losse toestellen afhalen", path: "/verhuur/afhalen" },
  ...TOEBEHOREN_LINKS
];
const BEDRIJF = [
  { label: "Over Vernast", path: "/over-ons" },
  { label: "Realisaties", path: "/realisaties" },
  { label: "Contact", path: "/contact" }
];
const GIDSEN = [
  { label: "Hoe lang moet chape drogen?", path: "/gids/hoe-lang-moet-chape-drogen" },
  { label: "Hoe lang moet pleisterwerk drogen?", path: "/gids/hoe-lang-moet-pleisterwerk-drogen" },
  { label: "Natuurlijk drogen of een bouwdroger?", path: "/gids/natuurlijk-drogen-of-bouwdroger" },
  { label: "Condensdroger of adsorptiedroger?", path: "/gids/condensdroger-of-adsorptiedroger" },
  { label: "Stroomverbruik van een bouwdroger", path: "/gids/stroomverbruik-bouwdroger" }
];
const UITLEG = [
  { label: "Hoe drogen werkt", path: "/hoe-drogen-werkt" },
  { label: "Waarom bouwdroging", path: "/waarom-bouwdroging" },
  { label: "Drooggarantie", path: "/drooggarantie" },
  { label: "Klantenservice", path: "/klantservice" }
];
const ONTDEK = [
  ...UITLEG,
  { label: "Gidsen over bouwdroging", path: "/gids" },
  ...GIDSEN
];
const ALLES_OVER_DROGEN = [
  { titel: "Uitleg", items: UITLEG },
  {
    titel: "Gidsen",
    items: [{ label: "Alle gidsen", path: "/gids" }, ...GIDSEN]
  },
  { titel: "Toepassingen", items: TOEPASSINGEN },
  { titel: "Het gamma", items: GAMMA },
  { titel: "Prijzen & service", items: SERVICE }
];
const REGIOS = REGIO_ROUTES.map((regio) => ({
  label: `Bouwdroger huren in ${regio.name}`,
  path: regio.path
}));
const FOOTER_SITEMAP = [
  { label: "Home", path: "/" },
  // De calculator en het gamma: de twee manieren waarop iemand aan een toestel
  // komt. /machines ontbrak hier evengoed als in de header — de enige
  // inhoudspagina die vanuit geen van beide bereikbaar was.
  ...KIEZEN,
  ...SERVICE,
  { label: "Realisaties", path: "/realisaties" },
  { label: "Gidsen over bouwdroging", path: "/gids" },
  { label: "Contact", path: "/contact" }
  // De zichtbare sitemap staat bewust niet hier maar in de onderste balk van
  // de voet, naast Privacy en de voorwaarden: een regel "Sitemap" ín de kolom
  // die al "Sitemap" heet leest als een verwijzing naar zichzelf.
];
const VERNAST_GROEP = [
  { label: "Vernast.be", sub: "De groep", href: "https://www.vernast.be/" },
  // "Verhuur & bouwdroging" heette deze site hier, maar de groep noemt haar
  // overal elders bij haar merknaam — op vernast.be staat ze in de lijst als
  // vernast-bouwdrogers.be. In de footerkolom "Vernast Groep" naast de twee
  // zusterbedrijven las de oude omschrijving als een dienst in plaats van als
  // het vierde merk.
  { label: "Vernast Bouwdrogers", sub: "Toestellen en pakketten", path: "/" },
  { label: "Vochtbestrijding", sub: "Kelder · muren · gevel", href: "https://vernast-vochtbestrijding.be/" },
  { label: "Schilderwerken", sub: "Binnen & buiten", href: "https://www.vernast-schilderwerken.be/" }
];
const LABEL_FR = {
  /* Pakketten */
  "Pleisterwerk drogen": "Séchage plafonnage",
  "Chape drogen": "Séchage chape",
  "Pleisterwerk + chape": "Plafonnage + chape",
  "Waterschade drogen": "Séchage dégâts des eaux",
  "Alles in één Droogservice": "Service de séchage tout compris",
  /* Toepassingen en schimmels */
  "Nieuwbouw drogen": "Séchage nouvelle construction",
  "Drogen na waterschade": "Séchage après dégâts des eaux",
  "Renovatie drogen": "Séchage rénovation",
  Ontschimmeling: "Élimination des moisissures",
  Ozonbehandeling: "Traitement à l'ozone",
  "Luchtontvochtiger huren": "Location déshumidificateur d'air",
  /* Service en kiezen */
  Prijzen: "Prix",
  "Levering en installatie": "Livraison et installation",
  "Zelf afhalen in Aartselaar": "Enlèvement à Aartselaar",
  "Bereken uw droogpakket": "Calculez votre pack de séchage",
  "Droogsimulator voor uw woning": "Simulateur de séchage pour votre logement",
  "Ons volledige gamma": "Toute notre gamme",
  "Losse toestellen afhalen": "Appareils à enlever",
  /* Bedrijf */
  "Over Vernast": "À propos de Vernast",
  Realisaties: "Réalisations",
  Contact: "Contact",
  Home: "Accueil",
  /* Gidsen en uitleg */
  "Hoe lang moet chape drogen?": "Combien de temps sèche une chape ?",
  "Hoe lang moet pleisterwerk drogen?": "Combien de temps sèche un plafonnage ?",
  "Natuurlijk drogen of een bouwdroger?": "Séchage naturel ou déshumidificateur ?",
  "Condensdroger of adsorptiedroger?": "Condensation ou adsorption ?",
  "Stroomverbruik van een bouwdroger": "Consommation électrique d'un déshumidificateur",
  "Hoe drogen werkt": "Comment fonctionne le séchage",
  "Waarom bouwdroging": "Pourquoi sécher son chantier",
  Drooggarantie: "Garantie de séchage",
  Klantenservice: "Service client",
  "Gidsen over bouwdroging": "Guides du séchage de chantier",
  "Alle gidsen": "Tous les guides",
  /* Kopjes van het mega-menu */
  Uitleg: "Comprendre",
  Gidsen: "Guides",
  Toepassingen: "Applications",
  "Het gamma": "La gamme",
  "Prijzen & service": "Prix & service"
};
const TOESTEL_LABEL_FR = {
  ttk170: "Déshumidificateur Boost",
  ttk350: "Déshumidificateur Performance",
  ttk650: "Déshumidificateur Ultimate",
  ttv4500: "Ventilateur axial Highflow",
  radiaal2250: "Ventilateur radial Turboflow",
  revolution: "Déshumidificateur à adsorption Revolution",
  teddh30: "Chauffage électrique Heatpower 30",
  teddh20: "Chauffage électrique Heatboost 20"
};
const REGIO_IN_FR = {
  antwerpen: "en province d'Anvers",
  "oost-vlaanderen": "en Flandre orientale",
  "vlaams-brabant": "en Brabant flamand",
  brussel: "à Bruxelles",
  "west-vlaanderen": "en Flandre occidentale",
  limburg: "au Limbourg",
  "waals-brabant": "en Brabant wallon",
  henegouwen: "en Hainaut",
  namen: "en province de Namur",
  luxemburg: "en province de Luxembourg",
  luik: "en province de Liège",
  "noord-brabant": "au Brabant-Septentrional",
  zeeland: "en Zélande",
  "nederlands-limburg": "au Limbourg néerlandais"
};
const NL_PROVINCIE_FR = {
  "noord-brabant": "Brabant-Septentrional",
  zeeland: "Zélande",
  "nederlands-limburg": "Limbourg néerlandais"
};
const TOEBEHOREN_LABEL_FR = {
  condenspomp: "Location pompe à condensats externe"
};
const GROEP_FR = {
  "Vernast.be": { label: "Vernast.be", sub: "Le groupe" },
  "Vernast Bouwdrogers": { label: "Vernast Bouwdrogers", sub: "Appareils et packs" },
  Vochtbestrijding: { label: "Traitement de l'humidité", sub: "Cave · murs · façade" },
  Schilderwerken: { label: "Travaux de peinture", sub: "Intérieur & extérieur" }
};
const LABEL_EN = {
  /* Pakketten */
  "Pleisterwerk drogen": "Plaster drying",
  "Chape drogen": "Screed drying",
  "Pleisterwerk + chape": "Plaster + screed",
  "Waterschade drogen": "Water damage drying",
  "Alles in één Droogservice": "All-in-one drying service",
  /* Toepassingen en schimmels */
  "Nieuwbouw drogen": "New-build drying",
  "Drogen na waterschade": "Drying after water damage",
  "Renovatie drogen": "Renovation drying",
  Ontschimmeling: "Mould removal",
  Ozonbehandeling: "Ozone treatment",
  "Luchtontvochtiger huren": "Dehumidifier hire",
  /* Service en kiezen */
  Prijzen: "Prices",
  "Levering en installatie": "Delivery and installation",
  "Zelf afhalen in Aartselaar": "Collect it yourself in Aartselaar",
  "Bereken uw droogpakket": "Calculate your drying package",
  "Droogsimulator voor uw woning": "Drying simulator for your home",
  "Ons volledige gamma": "Our full range",
  "Losse toestellen afhalen": "Collect individual units",
  /* Bedrijf */
  "Over Vernast": "About Vernast",
  Realisaties: "Projects",
  Contact: "Contact",
  Home: "Home",
  /* Gidsen en uitleg */
  "Hoe lang moet chape drogen?": "How long does screed take to dry?",
  "Hoe lang moet pleisterwerk drogen?": "How long does plaster take to dry?",
  "Natuurlijk drogen of een bouwdroger?": "Natural drying or a dehumidifier?",
  "Condensdroger of adsorptiedroger?": "Condensation or desiccant dehumidifier?",
  "Stroomverbruik van een bouwdroger": "Power consumption of a dehumidifier",
  "Hoe drogen werkt": "How drying works",
  "Waarom bouwdroging": "Why building drying",
  Drooggarantie: "Drying guarantee",
  Klantenservice: "Customer service",
  "Gidsen over bouwdroging": "Guides to building drying",
  "Alle gidsen": "All guides",
  /* Kopjes van het mega-menu */
  Uitleg: "Explained",
  Gidsen: "Guides",
  Toepassingen: "Applications",
  "Het gamma": "The range",
  "Prijzen & service": "Prices & service"
};
const TOESTEL_LABEL_EN = {
  ttk170: "Boost construction dehumidifier",
  ttk350: "Performance construction dehumidifier",
  ttk650: "Ultimate construction dehumidifier",
  ttv4500: "Highflow axial fan",
  radiaal2250: "Turboflow radial fan",
  revolution: "Revolution desiccant dehumidifier",
  teddh30: "Heatpower 30 electric heater",
  teddh20: "Heatboost 20 electric heater"
};
const NL_PROVINCIE_EN = {
  "noord-brabant": "North Brabant",
  zeeland: "Zeeland",
  "nederlands-limburg": "Dutch Limburg"
};
const TOEBEHOREN_LABEL_EN = {
  condenspomp: "External condensate pump hire"
};
const GROEP_EN = {
  "Vernast.be": { label: "Vernast.be", sub: "The group" },
  "Vernast Bouwdrogers": { label: "Vernast Bouwdrogers", sub: "Units and packages" },
  Vochtbestrijding: { label: "Damp control", sub: "Cellar · walls · façade" },
  Schilderwerken: { label: "Painting", sub: "Interior & exterior" }
};
function regioNaam(regio, taal) {
  if (taal === "fr") return regio.nameFr ?? NL_PROVINCIE_FR[regio.slug] ?? regio.name;
  if (taal === "en") return regio.nameEn ?? NL_PROVINCIE_EN[regio.slug] ?? regio.name;
  return regio.name;
}
function vertaalLabel(label, taal) {
  if (taal === "fr") return LABEL_FR[label] ?? label;
  if (taal === "en") return LABEL_EN[label] ?? label;
  return label;
}
function toestelLabelIn(key, taal) {
  const tabel = taal === "fr" ? TOESTEL_LABEL_FR : taal === "en" ? TOESTEL_LABEL_EN : null;
  if (tabel && Object.prototype.hasOwnProperty.call(tabel, key)) return tabel[key];
  return toestelLabel(key);
}
const NL = {
  TOESTELLEN,
  TOEBEHOREN_LINKS,
  PAKKETTEN,
  TOEPASSINGEN,
  SCHIMMELS,
  MENU_SITUATIES,
  SERVICE,
  KIEZEN,
  GAMMA,
  BEDRIJF,
  GIDSEN,
  UITLEG,
  ONTDEK,
  ALLES_OVER_DROGEN,
  REGIOS,
  FOOTER_SITEMAP,
  VERNAST_GROEP
};
const TABELLEN = {
  fr: {
    labels: LABEL_FR,
    toebehoren: TOEBEHOREN_LABEL_FR,
    groep: GROEP_FR,
    regio: (regio) => `Location déshumidificateur ${REGIO_IN_FR[regio.slug] ?? regio.name}`
  },
  en: {
    labels: LABEL_EN,
    toebehoren: TOEBEHOREN_LABEL_EN,
    groep: GROEP_EN,
    regio: (regio) => `Dehumidifier hire in ${regio.zinEn ?? regioNaam(regio, "en")}`
  }
};
const GEBOUWD = {};
function bouw(taal) {
  const t = TABELLEN[taal];
  const pad = (nlPad) => vertaalPad(nlPad, taal) ?? nlPad;
  const een = (item) => ({ label: t.labels[item.label] ?? item.label, path: pad(item.path) });
  const lijst = (items) => items.map(een);
  const toebehoren = TOEBEHOREN.map((tb) => ({
    label: t.toebehoren[tb.slug] ?? `${tb.naam} huren`,
    path: pad(toebehorenPad(tb.slug))
  }));
  const perPad = new Map(TOEBEHOREN_LINKS.map((tb, i) => [tb.path, toebehoren[i]]));
  const vervang = (items) => items.map((item) => perPad.get(item.path) ?? een(item));
  return {
    TOESTELLEN: PRODUCT_ORDER.map((key) => ({ label: toestelLabelIn(key, taal), path: pad(toestelPad(key)) })),
    TOEBEHOREN_LINKS: toebehoren,
    PAKKETTEN: lijst(PAKKETTEN),
    TOEPASSINGEN: lijst(TOEPASSINGEN),
    SCHIMMELS: lijst(SCHIMMELS),
    MENU_SITUATIES: lijst(MENU_SITUATIES),
    SERVICE: lijst(SERVICE),
    KIEZEN: lijst(KIEZEN),
    GAMMA: vervang(GAMMA),
    BEDRIJF: lijst(BEDRIJF),
    GIDSEN: lijst(GIDSEN),
    UITLEG: lijst(UITLEG),
    ONTDEK: lijst(ONTDEK),
    ALLES_OVER_DROGEN: ALLES_OVER_DROGEN.map((g) => ({
      titel: t.labels[g.titel] ?? g.titel,
      items: vervang(g.items)
    })),
    REGIOS: REGIO_ROUTES.map((regio) => ({ label: t.regio(regio), path: pad(regio.path) })),
    FOOTER_SITEMAP: lijst(FOOTER_SITEMAP),
    VERNAST_GROEP: VERNAST_GROEP.map((g) => ({
      ...g,
      ...t.groep[g.label] ?? {},
      ...g.path ? { path: pad(g.path) } : {}
    }))
  };
}
function navigatie(taal) {
  if (taal === "nl") return NL;
  return GEBOUWD[taal] ??= bouw(taal);
}
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/TaalWissel.tsx");
const KORT = { nl: "NL", fr: "FR", en: "EN" };
const NAAM = { nl: "Nederlands", fr: "Français", en: "English" };
const KLANT = {
  nl: { particulier: "Particulier", bedrijf: "Bedrijf" },
  fr: { particulier: "Particulier", bedrijf: "Professionnel" },
  en: { particulier: "Private", bedrijf: "Business" }
};
const LABEL = {
  nl: { taal: "Taal", klant: "Prijzen voor" },
  fr: { taal: "Langue", klant: "Prix pour" },
  en: { taal: "Language", klant: "Prices for" }
};
const TaalWissel = ({ className = "" }) => {
  const { pathname, search } = useLocation();
  const taal = useTaal();
  const voorkeur = useVoorkeur();
  return /* @__PURE__ */ jsx("nav", { className: `taalwissel ${className}`, "aria-label": LABEL[taal].taal, children: ACTIEVE_TALEN.map((t, i) => /* @__PURE__ */ jsxs("span", { children: [
    i > 0 && /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: " · " }),
    t === taal ? /* @__PURE__ */ jsx("strong", { "aria-current": "true", lang: t, title: NAAM[t], children: KORT[t] }) : /* @__PURE__ */ jsx(
      Link,
      {
        to: wisselPad(pathname, t) + search,
        hrefLang: t,
        lang: t,
        title: NAAM[t],
        onClick: () => voorkeur && bewaarVoorkeur({ ...voorkeur, taal: t }),
        children: KORT[t]
      }
    )
  ] }, t)) });
};
const KlantWissel = ({ className = "" }) => {
  const taal = useTaal();
  const klant = useKlant();
  const voorkeur = useVoorkeur();
  const zet = (k) => bewaarVoorkeur({ taal: voorkeur?.taal ?? taal, land: voorkeur?.land ?? "BE", klant: k });
  return /* @__PURE__ */ jsx("div", { className: `klantwissel ${className}`, role: "radiogroup", "aria-label": LABEL[taal].klant, children: ["particulier", "bedrijf"].map((k, i) => /* @__PURE__ */ jsxs("span", { children: [
    i > 0 && /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: " · " }),
    /* @__PURE__ */ jsx("button", { type: "button", role: "radio", "aria-checked": klant === k, onClick: () => zet(k), children: KLANT[taal][k] })
  ] }, k)) });
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/home-v3/V3Footer.tsx");
const COPY = {
  nl: {
    /*
      Stond op "Wij staan er. In heel Vlaanderen." — terwijl we sinds de
      transportzones tot in Wallonië en Nederland leveren. De zin zegt nu
      waarvoor we er staan in plaats van waar: geen gebied dat bij elke nieuwe
      zone verouderd is.
    */
    say: "Wij drogen vandaag.",
    sayEm: "Voor de bouw van morgen.",
    claim: "Drooggarantie inbegrepen. Levering op de datum die u kiest.",
    diensten: "Diensten",
    groep: "Vernast Groep",
    sitemap: "Sitemap",
    werkgebied: "Werkgebied",
    bereikbaar: "Bereikbaar",
    magazijn: "Magazijn en afhaalpunt",
    open: "Open",
    uren: "Ma–Vr 08:00–17:00",
    zetel: "Zetel:",
    credit: "Ontwerp en realisatie door",
    voorwaarden: "Algemene voorwaarden",
    privacy: "Privacy"
  },
  fr: {
    say: "Nous séchons aujourd'hui.",
    sayEm: "Pour la construction de demain.",
    claim: "Garantie de séchage comprise. Livraison à la date de votre choix.",
    diensten: "Services",
    groep: "Groupe Vernast",
    sitemap: "Plan du site",
    werkgebied: "Zone d'intervention",
    bereikbaar: "Joignable",
    magazijn: "Dépôt et point d'enlèvement",
    open: "Ouvert",
    uren: "Lu–Ve 8 h–17 h",
    zetel: "Siège :",
    credit: "Conception et réalisation par",
    voorwaarden: "Conditions générales",
    privacy: "Confidentialité"
  },
  en: {
    say: "We dry today.",
    sayEm: "For tomorrow's construction.",
    claim: "Drying guarantee included. Delivery on the date you choose.",
    diensten: "Services",
    groep: "Vernast Group",
    sitemap: "Sitemap",
    werkgebied: "Service area",
    bereikbaar: "Get in touch",
    magazijn: "Depot and collection point",
    open: "Open",
    uren: "Mon–Fri 08:00–17:00",
    zetel: "Registered office:",
    credit: "Design and build by",
    voorwaarden: "Terms and conditions",
    privacy: "Privacy"
  }
};
const V3Footer = () => {
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const taal = useTaal();
  const { FOOTER_SITEMAP: FOOTER_SITEMAP2, TOEPASSINGEN: TOEPASSINGEN2, VERNAST_GROEP: VERNAST_GROEP2 } = navigatie(taal);
  return /* @__PURE__ */ jsx("footer", { className: "site", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
    /* @__PURE__ */ jsxs("div", { className: "fg", children: [
      /* @__PURE__ */ jsxs("div", { className: "lc", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/vernast/logo-horizontal-white.webp",
            alt: SITE_NAME,
            width: 399,
            height: 66,
            loading: "lazy",
            decoding: "async"
          }
        ),
        /* @__PURE__ */ jsxs("p", { className: "say", children: [
          t.say,
          " ",
          /* @__PURE__ */ jsx("em", { children: t.sayEm })
        ] }),
        /* @__PURE__ */ jsx("a", { className: "tel", href: `tel:${CONTACT.phoneE164}`, children: CONTACT.phoneLocal }),
        /* @__PURE__ */ jsx("a", { className: "mail", href: `mailto:${CONTACT.email}`, children: CONTACT.email }),
        /* @__PURE__ */ jsx("p", { className: "claim", children: t.claim })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("nav", { "aria-labelledby": "ft-diensten", children: [
          /* @__PURE__ */ jsx("h2", { id: "ft-diensten", children: t.diensten }),
          /* @__PURE__ */ jsx("ul", { children: TOEPASSINGEN2.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: link.path, children: link.label }) }, link.path)) })
        ] }),
        /* @__PURE__ */ jsxs("nav", { "aria-labelledby": "ft-groep", children: [
          /* @__PURE__ */ jsx("h2", { id: "ft-groep", className: "later", children: t.groep }),
          /* @__PURE__ */ jsx("ul", { children: VERNAST_GROEP2.filter((entiteit) => entiteit.href).map((entiteit) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: entiteit.href, target: "_blank", rel: "noopener noreferrer", children: entiteit.label }) }, entiteit.label)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("nav", { "aria-labelledby": "ft-sitemap", children: [
        /* @__PURE__ */ jsx("h2", { id: "ft-sitemap", children: t.sitemap }),
        /* @__PURE__ */ jsx("ul", { children: FOOTER_SITEMAP2.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: link.path, children: link.label }) }, link.path)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "ft-kaartkolom", children: [
        /* @__PURE__ */ jsx("div", { className: "ft-kaart", "aria-hidden": "true", children: REGIO_ROUTES.map((regio) => /* @__PURE__ */ jsx(
          Link,
          {
            className: "ft-pin",
            to: lp(regio.path),
            tabIndex: -1,
            style: kaartVoor({ pin: regio.pin, metNederland: true }).pin,
            children: /* @__PURE__ */ jsx("span", { children: regioNaam(regio, taal) })
          },
          regio.slug
        )) }),
        /* @__PURE__ */ jsxs("nav", { className: "ft-regios", "aria-labelledby": "ft-regios", children: [
          /* @__PURE__ */ jsx("h2", { id: "ft-regios", children: t.werkgebied }),
          /* @__PURE__ */ jsx("ul", { children: REGIO_ROUTES.map((regio) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: lp(regio.path), children: regioNaam(regio, taal) }) }, regio.slug)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("dl", { className: "ft-feiten", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("dt", { children: t.bereikbaar }),
        /* @__PURE__ */ jsxs("dd", { children: [
          /* @__PURE__ */ jsx("a", { href: `tel:${CONTACT.phoneE164}`, children: CONTACT.phoneLocal }),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("a", { href: `mailto:${CONTACT.email}`, children: CONTACT.email })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("dt", { children: t.magazijn }),
        /* @__PURE__ */ jsx("dd", { children: /* @__PURE__ */ jsxs("a", { className: "ft-adres", href: MAPS_URL, target: "_blank", rel: "noopener noreferrer", children: [
          CONTACT.street,
          /* @__PURE__ */ jsx("br", {}),
          CONTACT.postalCode,
          " ",
          CONTACT.city
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("dt", { children: t.open }),
        /* @__PURE__ */ jsx("dd", { children: t.uren })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "fb", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " ",
        SITE_NAME,
        " · ",
        t.zetel,
        " ",
        HEADQUARTERS.street,
        ",",
        " ",
        HEADQUARTERS.postalCode,
        " ",
        HEADQUARTERS.city
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "ft-credit", children: [
        t.credit,
        " ",
        /* @__PURE__ */ jsx("a", { href: HEADQUARTERS.url, target: "_blank", rel: "noopener noreferrer", children: HEADQUARTERS.name })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "ft-legal", children: [
        /* @__PURE__ */ jsx(Link, { to: lp("/algemene-voorwaarden"), children: t.voorwaarden }),
        /* @__PURE__ */ jsx(Link, { to: lp("/privacy"), children: t.privacy }),
        /* @__PURE__ */ jsx(Link, { to: lp("/sitemap"), children: t.sitemap })
      ] })
    ] })
  ] }) });
};
export {
  CONDENSPOMP as C,
  KlantWissel as K,
  TaalWissel as T,
  V3Footer as V,
  toebehorenPad as a,
  navigatie as n,
  regioNaam as r,
  toestelLabelIn as t,
  vertaalLabel as v
};
