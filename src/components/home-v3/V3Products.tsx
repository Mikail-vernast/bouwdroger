import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, InfoIcon } from "./icons";
import { PRODUCTS, toestelChips, toestelPad, type Product } from "@/data/verhuur";
import { DAY_PRICE_MIN } from "@/data/tarieflijst";
import {
  bewaarVoorkeur,
  useCopy,
  useKlant,
  useLokaalPad,
  useTaal,
  useToonBedrag,
  useVoorkeur,
  type Copy,
  type Klant,
} from "@/i18n/useTaal";
import type { Taal } from "@/i18n/taal";

/**
 * Naam, tekst, prijs en specs van één kaart, uit de gepubliceerde tarieven.
 *
 * De kaarten droegen hun eigen bedragen uit de designhandoff: "vanaf € 9,00 per
 * dag" op de Boost, terwijl diezelfde TTK 170 op de pagina waar de kaart
 * naartoe linkt € 18 per dag kost. Wie doorklikte zag zijn prijs verdubbelen.
 * Hetzelfde gold voor de specs (80 l/dag op een toestel dat er 70 haalt) en
 * voor een doorgestreepte "− 8% korting" die nergens op sloeg.
 *
 * Ook de naam kwam hier vandaan, en dus bleef een toestel dat in het portaal
 * hernoemd werd op de homepage zijn oude naam dragen — terwijl de detailpagina
 * waar de kaart naartoe linkt de nieuwe droeg. Alles wat in het portaal
 * bewerkbaar is, komt nu uit `PRODUCTS`; de kaart houdt enkel haar eigen beeld
 * en haar eco-label. Wat hier nog als tekst staat, geldt als terugval voor een
 * toestel dat (nog) niet te huur staat.
 */
function tariff(key: string | undefined, taal: Taal) {
  const product = key ? PRODUCTS[key] : undefined;
  if (!product) return null;
  const vertaald = key ? PORTAAL[taal]?.[key] : undefined;

  return {
    name: product.short,
    tag: vertaald?.tag ?? product.badge,
    blurb: vertaald?.blurb ?? product.sum,
    day: product.day,
    // Drie in plaats van twee: de kachels dragen hun maximumtemperatuur als
    // derde spec, en dat is naast het vermogen het cijfer waarop iemand kiest.
    // Bij de drogers levert het de stroomopname op, bij de ventilatoren het
    // verbruik -- allebei zinvol, en de chips lopen netjes door naar een
    // tweede regel.
    chips: taal === "fr" ? chipsFr(product) : taal === "en" ? chipsEn(product) : toestelChips(product),
  };
}

/*
  Badge en samenvatting komen uit het portaal, en dat schrijft alleen
  Nederlands. Dit is hun Franse vertaling, per toestel. Verandert de tekst in
  het portaal, dan blijft deze staan tot iemand hem hier bijwerkt: een
  verouderde Franse zin is beter dan een Nederlandse op een Franse pagina. De
  naam (Boost, Performance, …) is een merknaam en blijft uit het portaal komen,
  net als de prijs en de cijfers in de chips.
*/
const PORTAAL_FR: Record<string, { tag: string; blurb: string }> = {
  ttk170: {
    tag: "Petites pièces",
    blurb:
      "Déshumidificateur à condensation compact et mobile. Le bon choix pour une pièce, un appartement ou une petite rénovation.",
  },
  ttk350: {
    tag: "Le plus loué",
    blurb:
      "Notre appareil le plus loué et la référence pour la nouvelle construction. Sèche la chape et le plafonnage de manière fiable en quelques jours.",
  },
  ttk650: {
    tag: "Grands volumes",
    blurb:
      "L'appareil le plus puissant de la gamme. Pour les grands chantiers, les caves et les dégâts des eaux où chaque jour compte.",
  },
  revolution: {
    tag: "Séchage localisé",
    blurb:
      "Sèche de manière ciblée via des gaines : sous les sols, dans les murs et aux endroits difficiles d'accès. Fonctionne aussi à basse température.",
  },
  ttv4500: {
    tag: "Accélère chaque séchage",
    blurb:
      "Ventilateur de chantier puissant avec un débit d'air de 4 500 m³/h. Veille à ce que l'air sec passe réellement le long des murs et des sols.",
  },
  radiaal2250: {
    tag: "Séchage ciblé",
    blurb:
      "Souffle l'air de manière ciblée sur les sols et la chape, même sous les meubles et dans les coins. Le partenaire attitré d'un déshumidificateur pour le séchage des sols.",
  },
  teddh20: {
    tag: "Pièces plus petites",
    blurb:
      "Chauffage de chantier électrique de 20 kW avec thermostat. Amène les petites pièces froides à température pour que le séchage continue.",
  },
  teddh30: {
    tag: "Pour les pièces froides",
    blurb:
      "Chauffage de chantier électrique de 30 kW avec thermostat intégré. Amène les pièces froides à température pour que le séchage soit efficace.",
  },
};

/* Dezelfde portaalteksten in het Engels, met dezelfde afspraak als hierboven. */
const PORTAAL_EN: Record<string, { tag: string; blurb: string }> = {
  ttk170: {
    tag: "Small rooms",
    blurb:
      "Compact condensation dehumidifier on wheels. The right choice for one room, a flat or a smaller renovation.",
  },
  ttk350: {
    tag: "Most hired",
    blurb:
      "Our most hired unit and the standard for new builds. Dries screed and plaster reliably within a few days.",
  },
  ttk650: {
    tag: "Large volumes",
    blurb:
      "The heaviest unit in the range. For large sites, cellars and water damage where every day counts.",
  },
  revolution: {
    tag: "Local drying",
    blurb:
      "Dries in a targeted way through hoses: under floors, inside walls and in hard-to-reach places. Also works at low temperatures.",
  },
  ttv4500: {
    tag: "Speeds up any drying",
    blurb:
      "Powerful site fan moving 4,500 m³/h of air. Makes sure the dry air actually sweeps along walls and floors.",
  },
  radiaal2250: {
    tag: "Targeted drying",
    blurb:
      "Blows air directly across floors and screed, including under cupboards and into corners. The regular partner of a dehumidifier when drying floors.",
  },
  teddh20: {
    tag: "Smaller rooms",
    blurb:
      "20 kW electric site heater with thermostat. Brings smaller cold rooms up to temperature so the drying keeps going.",
  },
  teddh30: {
    tag: "For cold rooms",
    blurb:
      "30 kW electric site heater with built-in thermostat. Brings cold rooms up to temperature so drying becomes effective.",
  },
};

const PORTAAL: Partial<Record<Taal, Record<string, { tag: string; blurb: string }>>> = {
  fr: PORTAAL_FR,
  en: PORTAAL_EN,
};

/*
  `toestelChips` in het Frans. Zelfde regels, zelfde cijfers uit het portaal;
  alleen de woorden en eenheden ertussen vertalen. Een veldnaam die hier niet
  staat, valt terug op zijn Nederlandse naam: zichtbaar, en dus snel bijgezet.
*/
const VELD_FR: Record<string, string> = {
  Standen: "vitesses",
  Thermostaat: "thermostat",
  "Koude ruimtes": "pièces froides",
};
const WAARDE_FR: Record<string, string> = {
  Adsorptie: "Adsorption",
  "via slangen": "via des gaines",
};
const EENHEID_FR: Record<string, string> = { "L/dag": "l/jour", "m³/u": "m³/h" };

function chipsFr(product: Pick<Product, "key">, aantal = 3): string[] {
  return product.key.slice(0, aantal).map(([name, value, unit]) => {
    if (name === "Vochtafvoer") return `${value} litres par jour`;
    if (name === "Bereik") return `jusqu'à ${value} m³`;
    if (unit) return `${value} ${EENHEID_FR[unit] ?? unit}`;
    if (/^\d/.test(value)) return `${value} ${VELD_FR[name] ?? name.toLowerCase()}`;
    return value === "ja" ? (VELD_FR[name] ?? name.toLowerCase()) : (WAARDE_FR[value] ?? value);
  });
}

/* En in het Engels: "litres per day" en "up to", Britse spelling. */
const VELD_EN: Record<string, string> = {
  Standen: "speeds",
  Thermostaat: "thermostat",
  "Koude ruimtes": "cold rooms",
};
const WAARDE_EN: Record<string, string> = {
  Adsorptie: "Desiccant",
  "via slangen": "via hoses",
};
const EENHEID_EN: Record<string, string> = { "L/dag": "L/day", "m³/u": "m³/h" };

function chipsEn(product: Pick<Product, "key">, aantal = 3): string[] {
  return product.key.slice(0, aantal).map(([name, value, unit]) => {
    if (name === "Vochtafvoer") return `${value} litres per day`;
    if (name === "Bereik") return `up to ${value} m³`;
    if (unit) return `${value} ${EENHEID_EN[unit] ?? unit}`;
    if (/^\d/.test(value)) return `${value} ${VELD_EN[name] ?? name.toLowerCase()}`;
    return value === "ja" ? (VELD_EN[name] ?? name.toLowerCase()) : (WAARDE_EN[value] ?? value);
  });
}

/*
 * De vochtafvoer is het cijfer waarop bouwdrogers vergeleken worden -- het
 * verschil tussen 50 en 110 liter per dag bepaalt of een toestel bij de werf
 * past. Het stond tussen de andere chips in dezelfde grijze pil en viel
 * daardoor niet op. Herkenning op het achtervoegsel: zowel de chip uit de
 * tarieven als de terugvaltekst hierboven eindigt op "liter per dag".
 */
/*
 * De catalogus rekent excl. btw -- zo staan de bedragen in het portaal en zo
 * rekent de checkout ze server-side opnieuw uit. Particulieren vergelijken
 * echter brutobedragen, en wie "€ 9,00" leest en bij het afrekenen € 10,89
 * betaalt, voelt zich beetgenomen. `useToonBedrag` toont daarom incl. btw aan
 * particulieren en excl. aan bedrijven, volgens de keuze uit de keuzepopup of
 * de schakelaar hieronder.
 *
 * Alleen weergave. Er wordt hier niets doorgegeven aan een bestelling; de
 * bedragen die werkelijk afgerekend worden komen uit `src/lib/booking.ts`.
 */
type Toon = ReturnType<typeof useToonBedrag>;

const isVochtafvoer = (chip: string) =>
  chip.endsWith("liter per dag") || chip.endsWith("litres par jour") || chip.endsWith("litres per day");

interface ProductCard {
  /** Internal device route, or an absolute URL for the shop-hosted model. */
  href: string;
  /**
   * Sleutel in `PRODUCTS`: waar prijs en specs vandaan komen. Ontbreekt hij,
   * dan staat het toestel niet in onze tarieven en houdt de kaart wat er hier
   * staat — dat geldt alleen voor het model dat via de webshop verhuurd wordt.
   */
  key?: string;
  external?: boolean;
  tag: string;
  hot?: boolean;
  image: string;
  alt: string;
  name: string;
  blurb: string;
  /** Enkel de condensontvochtigers uit de ECO-lijn; de adsorptiedroger niet. */
  eco?: boolean;
  chips: string[];
  /** Dagprijs excl. btw; de weergave bepaalt of er btw op komt. */
  day: number;
}

/*
 * De chips herhalen de kerncijfers van de toestelpagina waar de kaart naartoe
 * linkt. Ze liepen daar op vier kaarten van weg: 80 in plaats van 70 liter,
 * 150 in plaats van 90, "3,30 kW" op de kaart die naar de kachel van 30 kW
 * wijst, en 5 300 m³/u waar de TTV 4500 er 4 500 opgeeft. Zelfde toestel,
 * zelfde prijs, ander getal — en de homepage is de pagina die het vaakst
 * geciteerd wordt. Wijzigt een specificatie, wijzig ze op de toestelpagina en
 * neem ze hier over, nooit omgekeerd.
 */
const MAIN_NL: ProductCard[] = [
  {
    href: toestelPad("ttk170"),
    key: "ttk170",
    tag: "Kleine ruimtes",
    image: "/vernast/eco-boost.webp",
    alt: "Vernast Boost bouwdroger, condensontvochtiger van 50 liter per dag voor ruimtes tot 250 m³",
    name: "Boost",
    blurb:
      "Compact en verrijdbaar, past door elke deuropening. Ideaal voor één kamer of een appartement.",
    eco: true,
    chips: ["50 liter per dag", "tot 250 m³"],
    day: 9,
  },
  {
    href: toestelPad("ttk350"),
    key: "ttk350",
    tag: "Meest gehuurd",
    hot: true,
    image: "/vernast/eco-performance.webp",
    alt: "Vernast Performance bouwdroger, condensontvochtiger van 70 liter per dag voor ruimtes tot 400 m³",
    name: "Performance",
    blurb:
      "Onze standaard voor nieuwbouw. Droogt chape en pleisterwerk betrouwbaar en energiezuinig.",
    eco: true,
    chips: ["70 liter per dag", "tot 400 m³"],
    day: 12,
  },
  {
    href: toestelPad("ttk650"),
    key: "ttk650",
    tag: "Grote volumes",
    image: "/vernast/eco-ultimate.webp",
    alt: "Vernast Ultimate bouwdroger, condensontvochtiger van 110 liter per dag voor ruimtes tot 600 m³",
    name: "Ultimate",
    blurb: "Het zwaarste toestel in het gamma. Voor grote werven, kelders en zware waterschade.",
    eco: true,
    chips: ["110 liter per dag", "tot 600 m³"],
    day: 16,
  },
  /*
    De Revolution staat nog niet in ons depot, dus zolang het portaal hem
    niet te huur zet, blijft deze kaart naar de webshop wijzen. Zodra de
    schakelaar daar aan gaat, bestaat `PRODUCTS.revolution` en verwijst de kaart
    naar onze eigen pagina — met de prijs die in het portaal staat.
  */
  PRODUCTS.revolution
    ? {
        href: toestelPad("revolution"),
        key: "revolution",
        tag: "Plaatselijk drogen",
        image: "/vernast/eco-revolution.webp",
        alt: "Vernast Revolution, rode adsorptiedroger met slangaansluitingen voor plaatselijk drogen",
        name: "Revolution",
        blurb:
          "Droogt gericht via slangen: onder vloeren, in wanden en op moeilijk bereikbare plekken.",
        chips: ["Adsorptie", "gericht drogen"],
        day: 25,
      }
    : {
        href: "https://www.bouwdrogerservice.be/collections/bouwdrogers/products/eco-revolution",
        external: true,
        tag: "Plaatselijk drogen",
        image: "/vernast/eco-revolution.webp",
        alt: "Vernast Revolution, rode adsorptiedroger met slangaansluitingen voor plaatselijk drogen",
        name: "Revolution",
        blurb:
          "Droogt gericht via slangen: onder vloeren, in wanden en op moeilijk bereikbare plekken.",
        chips: ["Adsorptie", "gericht drogen"],
        day: 25,
      },
];

/*
  Enkel toestellen die wij zelf verhuren en die een eigen pagina hebben. De
  radiaalventilator en de kleine kachel stonden hier eerder met een verzonnen
  prijs en een link naar de pagina van een ánder toestel — wie op "Turbo
  Radiaalventilator € 8" klikte, kwam op de axiaalventilator uit. Nu zijn het
  echte producten in het portaal, met een eigen pagina en een prijs uit de
  gepubliceerde tarieven, dus staan ze hier weer.
*/
const SUPPORT_NL: ProductCard[] = [
  {
    href: toestelPad("ttv4500"),
    key: "ttv4500",
    tag: "Luchtcirculatie",
    image: "/vernast/vent-axiaal.webp",
    alt: "Vernast Highflow, bouwventilator met 4.500 m³/u luchtverzet",
    name: "Highflow",
    blurb: "Versnelt elke droging door de lucht continu in beweging te houden.",
    chips: ["4 500 m³/u", "3 standen"],
    day: 9,
  },
  {
    href: toestelPad("radiaal2250"),
    key: "radiaal2250",
    tag: "Gericht drogen",
    image: "/vernast/vent-radiaal.webp",
    alt: "Vernast Turboflow van 2.250 m³/u voor vloer- en muurdroging",
    name: "Turbo",
    blurb: "Blaast gericht over vloeren en chape, ideaal in combinatie met een droger.",
    chips: ["2 250 m³/u", "vloeren & chape"],
    day: 8,
  },
  {
    href: toestelPad("teddh20"),
    key: "teddh20",
    tag: "Verwarming",
    image: "/vernast/kachel-20.webp",
    alt: "Vernast Heatboost 20 elektrische bouwkachel, 20 kW met thermostaat voor kleinere ruimtes",
    name: "Heatboost 20",
    blurb: "Compacte verwarming voor kleinere ruimtes tijdens de droogperiode.",
    chips: ["20 kW", "400 V", "60 °C"],
    day: 9,
  },
  {
    href: toestelPad("teddh30"),
    key: "teddh30",
    tag: "Verwarming",
    image: "/vernast/kachel-30.webp",
    alt: "Vernast Heatpower 30 elektrische bouwkachel, 30 kW met ingebouwde thermostaat",
    name: "Heatpower 30",
    blurb: "Houdt de ruimte op temperatuur zodat de droging effectief blijft.",
    chips: ["30 kW", "400 V", "75 °C"],
    day: 12,
  },
];

/*
  Dezelfde kaarten in het Frans: zelfde links, beelden en dagprijzen, alleen de
  tekst verschilt. Voor een toestel in de tarieven komen tag, tekst en chips
  sowieso uit `tariff()`; wat hier staat is de terugval, zoals in het
  Nederlands.
*/
const FR_TEKST: Record<string, Pick<ProductCard, "tag" | "alt" | "blurb" | "chips">> = {
  Boost: {
    tag: "Petites pièces",
    alt: "Déshumidificateur de chantier Vernast Boost, à condensation, 50 litres par jour pour des pièces jusqu'à 250 m³",
    blurb: "Compact et mobile, passe par chaque porte. Idéal pour une pièce ou un appartement.",
    chips: ["50 litres par jour", "jusqu'à 250 m³"],
  },
  Performance: {
    tag: "Le plus loué",
    alt: "Déshumidificateur de chantier Vernast Performance, à condensation, 70 litres par jour pour des pièces jusqu'à 400 m³",
    blurb: "Notre référence pour la nouvelle construction. Sèche la chape et le plafonnage de manière fiable et économe.",
    chips: ["70 litres par jour", "jusqu'à 400 m³"],
  },
  Ultimate: {
    tag: "Grands volumes",
    alt: "Déshumidificateur de chantier Vernast Ultimate, à condensation, 110 litres par jour pour des pièces jusqu'à 600 m³",
    blurb: "L'appareil le plus puissant de la gamme. Pour les grands chantiers, les caves et les gros dégâts des eaux.",
    chips: ["110 litres par jour", "jusqu'à 600 m³"],
  },
  Revolution: {
    tag: "Séchage localisé",
    alt: "Vernast Revolution, déshumidificateur à adsorption rouge avec raccords de gaines pour un séchage localisé",
    blurb: "Sèche de manière ciblée via des gaines : sous les sols, dans les murs et aux endroits difficiles d'accès.",
    chips: ["Adsorption", "séchage ciblé"],
  },
  Highflow: {
    tag: "Circulation d'air",
    alt: "Vernast Highflow, ventilateur de chantier avec un débit d'air de 4 500 m³/h",
    blurb: "Accélère chaque séchage en gardant l'air en mouvement en continu.",
    chips: ["4 500 m³/h", "3 vitesses"],
  },
  Turbo: {
    tag: "Séchage ciblé",
    alt: "Vernast Turboflow de 2 250 m³/h pour le séchage des sols et des murs",
    blurb: "Souffle de manière ciblée sur les sols et la chape, idéal en combinaison avec un déshumidificateur.",
    chips: ["2 250 m³/h", "sols et chape"],
  },
  "Heatboost 20": {
    tag: "Chauffage",
    alt: "Chauffage de chantier électrique Vernast Heatboost 20, 20 kW avec thermostat pour les petites pièces",
    blurb: "Chauffage compact pour les petites pièces pendant la période de séchage.",
    chips: ["20 kW", "400 V", "60 °C"],
  },
  "Heatpower 30": {
    tag: "Chauffage",
    alt: "Chauffage de chantier électrique Vernast Heatpower 30, 30 kW avec thermostat intégré",
    blurb: "Maintient la pièce à température pour que le séchage reste efficace.",
    chips: ["30 kW", "400 V", "75 °C"],
  },
};
const naarFr = (card: ProductCard): ProductCard => ({ ...card, ...FR_TEKST[card.name] });

/* En in het Engels, met dezelfde afspraak. */
const EN_TEKST: Record<string, Pick<ProductCard, "tag" | "alt" | "blurb" | "chips">> = {
  Boost: {
    tag: "Small rooms",
    alt: "Vernast Boost construction dehumidifier, condensation unit extracting 50 litres per day for rooms up to 250 m³",
    blurb: "Compact and on wheels, fits through any doorway. Ideal for one room or a flat.",
    chips: ["50 litres per day", "up to 250 m³"],
  },
  Performance: {
    tag: "Most hired",
    alt: "Vernast Performance construction dehumidifier, condensation unit extracting 70 litres per day for rooms up to 400 m³",
    blurb: "Our standard for new builds. Dries screed and plaster reliably and efficiently.",
    chips: ["70 litres per day", "up to 400 m³"],
  },
  Ultimate: {
    tag: "Large volumes",
    alt: "Vernast Ultimate construction dehumidifier, condensation unit extracting 110 litres per day for rooms up to 600 m³",
    blurb: "The heaviest unit in the range. For large sites, cellars and serious water damage.",
    chips: ["110 litres per day", "up to 600 m³"],
  },
  Revolution: {
    tag: "Local drying",
    alt: "Vernast Revolution, red desiccant dehumidifier with hose connections for local drying",
    blurb: "Dries in a targeted way through hoses: under floors, inside walls and in hard-to-reach places.",
    chips: ["Desiccant", "targeted drying"],
  },
  Highflow: {
    tag: "Air circulation",
    alt: "Vernast Highflow, site fan moving 4,500 m³/h of air",
    blurb: "Speeds up any drying by keeping the air moving continuously.",
    chips: ["4,500 m³/h", "3 speeds"],
  },
  Turbo: {
    tag: "Targeted drying",
    alt: "Vernast Turboflow, 2,250 m³/h, for drying floors and walls",
    blurb: "Blows directly across floors and screed, ideal in combination with a dryer.",
    chips: ["2,250 m³/h", "floors & screed"],
  },
  "Heatboost 20": {
    tag: "Heating",
    alt: "Vernast Heatboost 20 electric site heater, 20 kW with thermostat for smaller rooms",
    blurb: "Compact heating for smaller rooms during the drying period.",
    chips: ["20 kW", "400 V", "60 °C"],
  },
  "Heatpower 30": {
    tag: "Heating",
    alt: "Vernast Heatpower 30 electric site heater, 30 kW with built-in thermostat",
    blurb: "Keeps the room up to temperature so the drying stays effective.",
    chips: ["30 kW", "400 V", "75 °C"],
  },
};
const naarEn = (card: ProductCard): ProductCard => ({ ...card, ...EN_TEKST[card.name] });

interface ProdCopy {
  main: ProductCard[];
  support: ProductCard[];
  kick: string;
  h2: string;
  lede: (bedrag: string, label: string) => string;
  pnote: (link: (tekst: string) => ReactNode) => ReactNode;
  switchLabel: string;
  excl: string;
  incl: string;
  huren: string;
  vanaf: string;
  perDag: string;
  pkbAlt: string;
  pkbH3: string;
  pkbP: string;
  pkbBelofte: string;
  pkbBtn: string;
  pkbNote: string;
}

const COPY = {
  nl: {
    main: MAIN_NL,
    support: SUPPORT_NL,
    kick: "Het gamma",
    h2: "Professionele toestellen voor elke droogsituatie.",
    lede: (bedrag, label) =>
      `Van één kamer tot grotere werven, van nieuwbouw tot waterschade: u kiest geen toestel, maar een oplossing die past bij uw ruimte en droogdoel. Prijzen vanaf ${bedrag} per dag, ${label}.`,
    pnote: (link) => (
      <>
        <b>Losse toestellen huurt u af te halen in Aartselaar</b>, tegen lagere afhaalprijzen, via
        de {link("aparte afhaal-checkout")}. Leveren en installeren doen wij uitsluitend per
        pakket, alleen zo kunnen wij onze droog-garantie waarmaken.
      </>
    ),
    switchLabel: "Prijzen tonen met of zonder btw",
    excl: "Excl. btw",
    incl: "Incl. btw",
    huren: "Product huren",
    vanaf: "vanaf",
    perDag: "/dag",
    pkbAlt: "Zorgeloos drogen met Vernast",
    pkbH3: "Liever niet zelf puzzelen? Bouw uw pakket op maat.",
    pkbP: "Onze Calculator stelt het exacte pakket samen voor uw woning, drogers, ventilatoren en verwarming in de juiste verhouding. Geleverd, geplaatst en afgesteld. En met één belofte:",
    pkbBelofte: "100% droog binnen de berekende periode, of u huurt kosteloos verder.*",
    pkbBtn: "Bouw uw pakket op maat",
    pkbNote:
      "* Garantie geldt wanneer de externe omstandigheden (verwarming, ventilatie, stroom) aan onze richtlijnen voldoen.",
  },
  fr: {
    main: MAIN_NL.map(naarFr),
    support: SUPPORT_NL.map(naarFr),
    kick: "La gamme",
    h2: "Des appareils professionnels pour chaque situation de séchage.",
    lede: (bedrag, label) =>
      `D'une seule pièce aux grands chantiers, de la nouvelle construction aux dégâts des eaux\u202f: vous ne choisissez pas un appareil, mais une solution adaptée à votre espace et à votre objectif de séchage. Prix à partir de ${bedrag} par jour, ${label}.`,
    pnote: (link) => (
      <>
        <b>Les appareils seuls se louent à enlever à Aartselaar</b>, à des prix d'enlèvement plus
        bas, via le {link("parcours de commande séparé pour l'enlèvement")}. Nous livrons et
        installons uniquement par pack{"\u202f"}: c'est la seule façon de tenir notre garantie de séchage.
      </>
    ),
    switchLabel: "Afficher les prix avec ou sans TVA",
    excl: "HTVA",
    incl: "TVAC",
    huren: "Louer cet appareil",
    vanaf: "dès",
    perDag: "/jour",
    pkbAlt: "Sécher sans souci avec Vernast",
    pkbH3: "Pas envie de tout assembler vous-même ? Composez votre pack sur mesure.",
    pkbP: "Notre calculateur compose le pack exact pour votre habitation : déshumidificateurs, ventilateurs et chauffage dans les bonnes proportions. Livré, installé et réglé. Avec une seule promesse :",
    pkbBelofte: "sec à 100 % dans la période calculée, ou vous continuez à louer sans frais.*",
    pkbBtn: "Composez votre pack sur mesure",
    pkbNote:
      "* La garantie s'applique lorsque les conditions extérieures (chauffage, ventilation, électricité) respectent nos directives.",
  },
  en: {
    main: MAIN_NL.map(naarEn),
    support: SUPPORT_NL.map(naarEn),
    kick: "The range",
    h2: "Professional units for every drying situation.",
    lede: (bedrag, label) =>
      `From a single room to larger sites, from new builds to water damage: you are not choosing a unit, but a solution that fits your space and drying goal. Prices from ${bedrag} per day, ${label}.`,
    pnote: (link) => (
      <>
        <b>Individual units are hired for collection in Aartselaar</b>, at lower collection prices,
        via the {link("separate collection checkout")}. We only deliver and install per package,
        as that is the only way we can honour our drying guarantee.
      </>
    ),
    switchLabel: "Show prices with or without VAT",
    excl: "Excl. VAT",
    incl: "Incl. VAT",
    huren: "Hire this unit",
    vanaf: "from",
    perDag: "/day",
    pkbAlt: "Worry-free drying with Vernast",
    pkbH3: "Rather not piece it together yourself? Build your package to measure.",
    pkbP: "Our Calculator puts together the exact package for your home: dryers, fans and heating in the right proportions. Delivered, set up and adjusted. And with one promise:",
    pkbBelofte: "100% dry within the calculated period, or keep hiring at no extra cost.*",
    pkbBtn: "Build your package to measure",
    pkbNote:
      "* The guarantee applies when the external conditions (heating, ventilation, power) meet our guidelines.",
  },
} satisfies Copy<ProdCopy>;

/** The card body is identical for internal and external links. */
const CardBody = ({ card, toon }: { card: ProductCard; toon: Toon }) => {
  const t = useCopy(COPY);
  const live = tariff(card.key, useTaal());
  const prijs = toon(live?.day ?? card.day);
  return (
  <>
    <div className="pm">
      <span className="pt">{live?.tag ?? card.tag}</span>
      {/* De toestelfoto's zijn vierkant (600² of 1440²); zie V3Pickup. */}
      <img src={card.image} alt={card.alt} width={600} height={600} loading="lazy" />
    </div>
    <div className="pb">
      <h3>{live?.name ?? card.name}</h3>
      <p>{live?.blurb ?? card.blurb}</p>
      <div className="chips">
        {/*
          Blaadje en druppel als afbeelding en niet als lijnicoon: ze dragen hun
          eigen groen en blauw, waardoor de twee chips al aan hun vorm te
          herkennen zijn. 96x96 webp van elk zo'n 1,8 kB; `width`/`height` staan
          erop zodat de chip niet verspringt terwijl ze laden.
        */}
        {card.eco && (
          <span className="chip eco">
            <img src="/vernast/icoon-eco.webp" alt="" width={96} height={96} loading="lazy" /> Eco
          </span>
        )}
        {(live?.chips ?? card.chips).map((chip) => (
          <span className={isVochtafvoer(chip) ? "chip water" : "chip"} key={chip}>
            {isVochtafvoer(chip) && (
              <img src="/vernast/icoon-druppel.webp" alt="" width={96} height={96} loading="lazy" />
            )}
            {chip}
          </span>
        ))}
      </div>
      <div className="pf">
        <span className="bekijk">
          {t.huren} <ArrowRightIcon size={13} strokeWidth={2.6} />
        </span>
        <span className="pr">
          {t.vanaf}<b>{prijs.tekst}</b>
          <small>
            {t.perDag} {prijs.label}
          </small>
        </span>
      </div>
    </div>
  </>
  );
};

const Card = ({ card, toon, lp }: { card: ProductCard; toon: Toon; lp: (pad: string) => string }): ReactNode =>
  card.external ? (
    <a className={`pc${card.hot ? " hot" : ""}`} href={card.href} target="_blank" rel="noopener">
      <CardBody card={card} toon={toon} />
    </a>
  ) : (
    <Link className={`pc${card.hot ? " hot" : ""}`} to={lp(card.href)}>
      <CardBody card={card} toon={toon} />
    </Link>
  );

const V3Products = () => {
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const taal = useTaal();
  /*
    De weergave volgt de klantkeuze (particulier of bedrijf) van de hele site;
    zie `useToonBedrag`. Tijdens het prerenderen is er nog geen keuze en geldt
    particulier, dus incl. btw -- wat een AI-antwoordmachine citeert is dan de
    prijs die een consument ook echt betaalt. Was hier eerst een eigen
    schakelaar die op "excl." begon.
  */
  const toon = useToonBedrag();
  const klant = useKlant();
  const voorkeur = useVoorkeur();
  const kiesKlant = (k: Klant) =>
    bewaarVoorkeur({ taal: voorkeur?.taal ?? taal, land: voorkeur?.land ?? "BE", klant: k });
  const vanaf = toon(DAY_PRICE_MIN);

  return (
  <section className="prods" id="toestellen">
    <div className="wrap">
      <div className="phead-row">
        <div className="sec-head">
          <span className="kick">{t.kick}</span>
          <h2 className="sec">{t.h2}</h2>
          <p className="lede">{t.lede(vanaf.tekst, vanaf.label)}</p>
        </div>
        {/*
          De pnote staat in het design rechts naast de kop (phead-right), niet
          onder de lede. De knop "Niet zeker? Laat het berekenen" die hier ooit
          stond, staat niet in het design — de calculator-CTA staat al in de
          pakketbar onderaan de sectie.
        */}
        <div className="phead-right">
          <div className="pnote">
            <InfoIcon />
            <span>
              {t.pnote((tekst) => (
                <Link to={lp("/verhuur/afhalen")} style={{ color: "var(--red)", fontWeight: 700 }}>
                  {tekst}
                </Link>
              ))}
            </span>
          </div>

          {/*
            Twee knoppen in plaats van een schuifje: bij een schuifje moet de
            bezoeker raden welke kant "aan" is, twee knoppen tonen allebei de
            toestanden met de actieve ingedrukt. `aria-pressed` zegt hetzelfde
            tegen een schermlezer.
          */}
          {/*
            Sinds de keuzepopup zet deze schakelaar de klantkeuze van de hele
            site: excl. btw is de weergave voor bedrijven, incl. die voor
            particulieren. Zo spreken de homepage en de rest van de site elkaar
            niet tegen na één klik hier.
          */}
          <div className="btw-switch" role="group" aria-label={t.switchLabel}>
            <button type="button" aria-pressed={klant === "bedrijf"} onClick={() => kiesKlant("bedrijf")}>
              {t.excl}
            </button>
            <button type="button" aria-pressed={klant === "particulier"} onClick={() => kiesKlant("particulier")}>
              {t.incl}
            </button>
          </div>
        </div>
      </div>

      <div className="pgrid main">
        {t.main.map((card) => (
          <Card card={card} toon={toon} lp={lp} key={card.name} />
        ))}
      </div>

      {/*
        Hier stond een tussenkopje "Versnel de droging" met een streep
        (`.psub`/`.pst`/`.psl`). Geen van die drie klassen had ergens CSS, dus
        het kwam eruit als losse kleine tekst tussen twee kaartrijen en de
        streep tekende niets. De rijen lezen zonder tussenkop even goed.
      */}
      <div className="pgrid two">
        {t.support.map((card) => (
          <Card card={card} toon={toon} lp={lp} key={card.name} />
        ))}
      </div>

      <div className="pakketbar">
        <img
          className="pkb-man"
          src="/vernast/man-zen-crop.webp"
          alt={t.pkbAlt}
          width={1225}
          height={1440}
          loading="lazy"
        />
        <div>
          <h3>{t.pkbH3}</h3>
          <p>
            {t.pkbP} <b>{t.pkbBelofte}</b>
          </p>
        </div>
        <div className="pkb-b">
          <Link className="btn btn-white" to={lp("/verhuur/simulator")}>
            {t.pkbBtn}
            <ArrowRightIcon />
          </Link>
          <span className="pkb-note">{t.pkbNote}</span>
        </div>
      </div>
    </div>
  </section>
  );
};

export default V3Products;
