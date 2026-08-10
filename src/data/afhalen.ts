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
 * dezelfde bron als de toestelpagina's, en elke regel draagt de `device_key`
 * waarmee het portaal materieel toewijst.
 */
import { TARIEVEN } from "./tarieven.js";
import type { DeviceKey } from "./verhuur.js";

/** Waar het toestel op de order als aantal meetelt. */
export type PickupKind = "droger" | "ventilator" | "verwarming";

export interface PickupProduct {
  /** Sleutel uit de gepubliceerde tarieven — ook wat in de URL staat. */
  key: string;
  group: string;
  name: string;
  short: string;
  sub: string;
  image: string;
  specs: string[];
  /** Afhaalprijs per dag, excl. btw. Komt uit het portaal. */
  day: number;
  /**
   * De soort in `bouwdroger_equipment`. `null` betekent dat het portaal deze
   * soort nog niet als sleutel kent (de TTK 650 staat er als "Large Bouwdroger"
   * zonder `device_key`): de order komt gewoon binnen, maar de planner wijst het
   * toestel met de hand toe in plaats van automatisch.
   */
  device: DeviceKey | null;
  kind: PickupKind;
}

/** Wat niet uit de tarieven komt: indeling, specs en de koppeling met het depot. */
const META: Record<string, Omit<PickupProduct, "key" | "name" | "short" | "sub" | "image" | "day">> = {
  ttk170: {
    group: "Bouwdrogers",
    specs: ["50 l / 24 u", "tot 250 m³", "0,75 kW", "reservoir"],
    device: "small",
    kind: "droger",
  },
  ttk350: {
    group: "Bouwdrogers",
    specs: ["70 l / 24 u", "tot 400 m³", "1,1 kW", "pompklaar"],
    device: "medium",
    kind: "droger",
  },
  ttk650: {
    group: "Bouwdrogers",
    specs: ["90 l / 24 u", "tot 600 m³", "1,4 kW", "pompklaar"],
    device: null,
    kind: "droger",
  },
  ttv4500: {
    group: "Ventilatoren",
    specs: ["4 500 m³/u", "3 standen", "0,2 kW"],
    device: "axiaal",
    kind: "ventilator",
  },
  teddh30: {
    group: "Elektrische kachels",
    specs: ["30 kW", "thermostaat", "400 V"],
    device: "kachel",
    kind: "verwarming",
  },
};

/** De volgorde waarin de afhaalpagina de toestellen toont. */
export const PICKUP_ORDER = ["ttk170", "ttk350", "ttk650", "ttv4500", "teddh30"] as const;

export const PICKUP_PRODUCTS: PickupProduct[] = PICKUP_ORDER.map((key) => {
  const t = TARIEVEN.products[key as keyof typeof TARIEVEN.products];
  return {
    key,
    ...META[key],
    name: t.name,
    short: t.short,
    sub: t.sum,
    image: t.img[0],
    day: Number(t.day),
  };
});

export const PICKUP_BY_KEY: Record<string, PickupProduct> = Object.fromEntries(
  PICKUP_PRODUCTS.map((p) => [p.key, p])
);

export const PICKUP_GROUPS = [...new Set(PICKUP_PRODUCTS.map((p) => p.group))];

/** De grens per toestelsoort op één afhaalreservatie. */
export const MAX_PER_PRODUCT = 8;

/**
 * Huurperiodes. Gelijk aan die van de toestelpagina, zodat een keuze daar
 * ("1 maand") hier niet stilzwijgend iets anders wordt.
 */
export const PICKUP_PERIODS: [number, string][] = [
  [3, "3 dagen"],
  [7, "1 week"],
  [14, "2 weken"],
  [30, "1 maand"],
  [60, "2 maanden"],
];

export const PICKUP_DAYS = PICKUP_PERIODS.map(([days]) => days);

export const PICKUP_SLOTS = [
  "07:30 – 08:00",
  "08:00 – 10:00",
  "10:00 – 12:00",
  "13:00 – 15:00",
  "15:00 – 17:00",
];
