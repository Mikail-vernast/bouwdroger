/**
 * De catalogus van de afhaalpagina.
 *
 * Die pagina had een eigen prijslijst uit de designhandoff: "Small Bouwdroger
 * € 5/dag" naast dezelfde machine op /verhuur/toestel/ttk170 voor € 18/dag. Twee
 * prijzen voor één toestel, en enkel de tweede komt uit het portaal. Wie via de
 * afhaalpagina boekte, kreeg dus een bevestiging met een bedrag dat nergens
 * klopte — en een order die het depot niet kon herkennen, want die verzonnen
 * sleutels (`corov`, `haspel`, …) bestaan niet in `bouwdroger_equipment`.
 *
 * Daarom staat hier geen prijs meer. Alles komt uit `TARIEVEN.products`, precies
 * dezelfde bron als de toestelpagina's, en `key` is tegelijk de `product_key`
 * waarmee het portaal materieel toewijst.
 */
import { TARIEVEN } from "./tarieven.js";

/** Waar het toestel op de order als aantal meetelt. */
export type PickupKind = "droger" | "ventilator" | "verwarming";

export interface PickupProduct {
  /**
   * Sleutel uit de gepubliceerde tarieven — wat in de URL staat, en tegelijk de
   * `product_key` in `bouwdroger_equipment`. Daarmee wijst het portaal precies
   * het toestel toe dat de klant gekozen heeft.
   */
  key: string;
  group: string;
  name: string;
  short: string;
  sub: string;
  image: string;
  specs: string[];
  /** Afhaalprijs per dag, excl. btw. Komt uit het portaal. */
  day: number;
  kind: PickupKind;
  /**
   * Het hoogste aantal dat iemand van dit toestel kan reserveren: onze vloot,
   * afgetopt op {@link MAX_PER_PRODUCT}. Van de adsorptiedroger hebben we er
   * één — zonder dit plafond kon een bezoeker er acht bestellen.
   */
  max: number;
}

/** Wat niet uit de tarieven komt: indeling, specs en de koppeling met het depot. */
const META: Record<string, Omit<PickupProduct, "key" | "name" | "short" | "sub" | "image" | "day" | "max">> = {
  ttk170: {
    group: "Bouwdrogers",
    specs: ["50 l / 24 u", "tot 250 m³", "0,75 kW", "reservoir"],
    kind: "droger",
  },
  ttk350: {
    group: "Bouwdrogers",
    specs: ["70 l / 24 u", "tot 400 m³", "1,1 kW", "pompklaar"],
    kind: "droger",
  },
  ttk650: {
    /*
      110 en niet 90. De toestelpagina van de Ultimate geeft 110 l/24 u op als
      kerncijfer en in haar fiche; hier stond 90, en op de kaart van de
      homepage opnieuw 110. Twee geïndexeerde pagina's die elkaar tegenspreken
      over hetzelfde toestel -- de toestelpagina is de bron.
    */
    group: "Bouwdrogers",
    specs: ["110 l / 24 u", "tot 600 m³", "1,4 kW", "pompklaar"],
    kind: "droger",
  },
  ttv4500: {
    group: "Ventilatoren",
    specs: ["4 500 m³/u", "3 standen", "0,2 kW"],
    kind: "ventilator",
  },
  teddh30: {
    group: "Elektrische kachels",
    specs: ["30 kW", "thermostaat", "400 V"],
    kind: "verwarming",
  },
  /*
    De radiaalventilator en de kachel van 20 kW vullen geen pakketrol in: op die
    rol toewijzen zou even goed de axiaalventilator of de kachel van 30 kW mogen
    sturen. Wie hier expliciet een radiaal of de kleine kachel reserveert, moet
    net dat toestel krijgen — vandaar dat een afhaalregel op `product_key` gaat
    en niet op `device_key`. Zie `pickupDeviceLines`.
  */
  radiaal2250: {
    group: "Ventilatoren",
    specs: ["2 250 m³/u", "3 standen", "IP55"],
    kind: "ventilator",
  },
  teddh20: {
    group: "Elektrische kachels",
    specs: ["20 kW", "thermostaat", "400 V"],
    kind: "verwarming",
  },
  revolution: {
    group: "Bouwdrogers",
    specs: ["adsorptie", "via slangen", "koude ruimtes"],
    kind: "droger",
  },
};

/**
 * De volgorde waarin de afhaalpagina de toestellen toont — enkel wat het
 * portaal publiceert. Zet iemand daar een toestel op "niet te huur", dan
 * verdwijnt het hier mee in plaats van als lege kaart te blijven staan.
 */
export const PICKUP_ORDER = [
  "ttk170",
  "ttk350",
  "ttk650",
  "revolution",
  "ttv4500",
  "radiaal2250",
  "teddh30",
  "teddh20",
].filter((key) => TARIEVEN.products[key as keyof typeof TARIEVEN.products]);

/**
 * Het algemene plafond per toestelsoort op één afhaalreservatie. Wie er meer
 * nodig heeft, belt ons — dan kijken we of het logistiek haalbaar is.
 * Staan er minder in de vloot, dan wint dat aantal (zie `PickupProduct.max`).
 */
export const MAX_PER_PRODUCT = 8;

export const PICKUP_PRODUCTS: PickupProduct[] = PICKUP_ORDER.map((key) => {
  const t = TARIEVEN.products[key as keyof typeof TARIEVEN.products];
  /*
    `stock` kwam er pas bij in augustus 2026. Draait de build op een oudere
    momentopname, dan ontbreekt het veld en geldt gewoon het algemene plafond —
    dat is precies hoe de pagina zich daarvoor gedroeg.
  */
  const stock = "stock" in t ? Number((t as { stock: number }).stock) : MAX_PER_PRODUCT;
  return {
    key,
    ...META[key],
    name: t.name,
    short: t.short,
    sub: t.sum,
    image: t.img[0],
    day: Number(t.day),
    max: Math.max(0, Math.min(MAX_PER_PRODUCT, stock)),
  };
});

export const PICKUP_BY_KEY: Record<string, PickupProduct> = Object.fromEntries(
  PICKUP_PRODUCTS.map((p) => [p.key, p])
);

export const PICKUP_GROUPS = [...new Set(PICKUP_PRODUCTS.map((p) => p.group))];

/**
 * Huurperiodes. Gelijk aan die van de toestelpagina, zodat een keuze daar
 * ("1 maand") hier niet stilzwijgend iets anders wordt.
 *
 * Drie dagen stond hier als kortste keuze, maar zo kort verhuren wij niet: een
 * toestel dat heen en weer rijdt kost ons een volle dag logistiek, en in drie
 * dagen droogt er bij nieuwbouw niets dat het halen waard is. Een week is de
 * ondergrens. Drie weken ontbrak daarentegen helemaal, terwijl dat net de stap
 * is tussen twee weken en een maand -- wie zijn chape nog een week langer nodig
 * had, moest een volle maand nemen.
 */
export const PICKUP_PERIODS: [number, string][] = [
  [7, "1 week"],
  [14, "2 weken"],
  [21, "3 weken"],
  [30, "1 maand"],
  [60, "2 maanden"],
];

export const PICKUP_DAYS = PICKUP_PERIODS.map(([days]) => days);

/**
 * Vanaf vier weken zakt de dagprijs met 10%.
 *
 * Een lange huur kost ons per dag minder: één keer klaarzetten, één keer
 * innemen, geen rek dat tussendoor leegstaat. Dat voordeel gaat naar de klant,
 * en het maakt de stap van drie weken naar een maand een keuze in plaats van
 * een drempel.
 *
 * De grens staat op dagen en niet op "een maand": 28 is vier volle weken, en de
 * periode van 30 dagen haalt die grens dus ruim. Komt er ooit een keuze van
 * precies 28 dagen bij, dan telt ze vanzelf mee.
 */
export const LONG_STAY_DAYS = 28;

/** Hoeveel er dan af gaat, als fractie van de huurprijs excl. btw. */
export const LONG_STAY_DISCOUNT = 0.1;

export const PICKUP_SLOTS = [
  "07:30 – 08:00",
  "08:00 – 10:00",
  "10:00 – 12:00",
  "13:00 – 15:00",
  "15:00 – 17:00",
];
