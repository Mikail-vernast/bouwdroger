import { describe, expect, test } from "vitest";
import { PICKUP_BY_KEY, PICKUP_PRODUCTS } from "@/data/afhalen";
import {
  parseSelection,
  pickupCounts,
  pickupDeviceLines,
  pickupLabel,
  pickupSummary,
  serializeSelection,
} from "@/lib/afhalen";
import { afhaalOrder } from "@/lib/orderIntake";
import { parseDeviceLines, serializeDeviceLines } from "@/lib/verhuur";
import { firstFreeDate } from "@/hooks/usePickupAvailability";
import { TARIEVEN } from "@/data/tarieven";

/** Morgen, zodat een test niet op de datumcontrole van vandaag struikelt. */
function tomorrow(): string {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().slice(0, 10);
}

describe("afhaalcatalogus — één prijs per toestel", () => {
  test("de dagprijs komt uit de gepubliceerde tarieven, niet uit de pagina", () => {
    for (const product of PICKUP_PRODUCTS) {
      const published = TARIEVEN.products[product.key as keyof typeof TARIEVEN.products];
      expect(product.day).toBe(Number(published.day));
    }
  });

  /*
    De sleutel van de pagina ís de sleutel waarmee het depot toewijst
    (`bouwdroger_equipment.product_key`). Zonder die gelijkloop reserveert een
    bezoeker een adsorptiedroger en zoekt het portaal een condensontvochtiger.
  */
  test("elke toestelsoort draagt de sleutel waarmee het depot toewijst", () => {
    for (const product of PICKUP_PRODUCTS) {
      expect(TARIEVEN.products[product.key as keyof typeof TARIEVEN.products]).toBeTruthy();
    }
  });

  /*
    Naast de beschikbaarheidscontrole is het voorraadplafond uit de gepubliceerde
    tarieven de tweede rem: die geldt ook als het portaal even niet antwoordt.
  */
  test("je kunt er niet meer reserveren dan er in het rek staan", () => {
    expect(PICKUP_BY_KEY.revolution.max).toBe(1);
    expect(PICKUP_BY_KEY.teddh20.max).toBe(1);
    // Vier TTK 650 in de vloot, dus het algemene plafond van acht geldt niet.
    expect(PICKUP_BY_KEY.ttk650.max).toBe(4);
    // Tweeëntwintig TTK 170: daar wint het algemene plafond.
    expect(PICKUP_BY_KEY.ttk170.max).toBe(8);
  });

  test("een te grote selectie zakt naar de voorraad, in de URL én op de server", () => {
    expect(parseSelection("revolution:5")[0].qty).toBe(1);
    expect(serializeSelection({ revolution: 5 })).toBe("revolution:1");
    expect(afhaalOrder({ lines: "revolution:5", days: 7 }).summary.units).toBe(1);
  });

  test("elk toestel in de lijst is bestelbaar: eigen sleutel, echte prijs", () => {
    const keys = PICKUP_PRODUCTS.map((p) => p.key);
    expect(new Set(keys).size).toBe(keys.length);
    for (const product of PICKUP_PRODUCTS) {
      expect(product.day).toBeGreaterThan(0);
      expect(product.name).not.toBe("");
      expect(product.image).not.toBe("");
    }
  });
});

/*
  Een toestel verschijnt pas op de site als het portaal het publiceert én er
  redactionele tekst voor bestaat. Loopt dat uit elkaar, dan staat er een prijs
  in een lijst waar geen pagina achter zit — of omgekeerd een pagina zonder
  prijs, en die rekent dan met `undefined`.
*/
describe("gamma — tarieven en toestelpagina's lopen gelijk", () => {
  test("elke afhaalbare sleutel heeft een toestelpagina", async () => {
    const { PRODUCTS } = await import("@/data/verhuur");
    for (const product of PICKUP_PRODUCTS) {
      expect(PRODUCTS[product.key], `pagina ontbreekt voor ${product.key}`).toBeDefined();
    }
  });

  test("elke toestelpagina heeft een gepubliceerde dagprijs", async () => {
    const { PRODUCTS, PRODUCT_ORDER } = await import("@/data/verhuur");
    for (const key of PRODUCT_ORDER) {
      expect(PRODUCTS[key].day, `dagprijs ontbreekt voor ${key}`).toBeGreaterThan(0);
    }
  });
});

describe("parseSelection", () => {
  test("leest wat de toestelpagina meestuurt", () => {
    const lines = parseSelection("ttk170:2,ttv4500:1");

    expect(lines).toHaveLength(2);
    expect(lines[0]).toMatchObject({ qty: 2 });
    expect(lines[0].product.key).toBe("ttk170");
  });

  test("laat onbekende sleutels en onzin vallen", () => {
    expect(parseSelection("corov:3,haspel:2")).toEqual([]);
    expect(parseSelection("ttk170:0")).toEqual([]);
    expect(parseSelection("ttk170:-4")).toEqual([]);
    expect(parseSelection("rommel")).toEqual([]);
    expect(parseSelection(null)).toEqual([]);
  });

  test("begrenst het aantal per toestel", () => {
    expect(parseSelection("ttk170:99")[0].qty).toBe(8);
  });

  test("is de tegenhanger van serializeSelection", () => {
    const query = serializeSelection({ ttk350: 2, onbekend: 5, ttv4500: 0 });

    expect(query).toBe("ttk350:2");
    expect(parseSelection(query)[0].product.key).toBe("ttk350");
  });
});

describe("pickupSummary", () => {
  test("rekent dagprijs × aantal × dagen, met btw erbovenop", () => {
    const lines = parseSelection("ttk170:2,ttv4500:1");
    const summary = pickupSummary(lines, 7);
    const net = (PICKUP_BY_KEY.ttk170.day * 2 + PICKUP_BY_KEY.ttv4500.day) * 7;

    expect(summary.units).toBe(3);
    expect(summary.net).toBe(net);
    expect(summary.vat).toBeCloseTo(net * 0.21, 2);
    expect(summary.gross).toBeCloseTo(net * 1.21, 2);
  });
});

describe("order voor het portaal", () => {
  test("telt de toestellen samen op de sleutel waarmee het depot toewijst", () => {
    const lines = parseSelection("ttk170:2,ttk350:1,ttv4500:3,teddh30:1");

    expect(pickupDeviceLines(lines)).toEqual([
      { product_key: "ttk170", qty: 2 },
      { product_key: "ttk350", qty: 1 },
      { product_key: "ttv4500", qty: 3 },
      { product_key: "teddh30", qty: 1 },
    ]);
    expect(pickupCounts(lines)).toEqual({ drogers: 3, ventilatoren: 3, verwarming: 1 });
  });

  /*
    Deze vier vulden vroeger geen enkele regel: ze dragen geen pakketrol, en de
    order kwam dus binnen zonder iets om automatisch toe te wijzen — de planner
    zag "1× droger, nog toe te wijzen" terwijl de klant allang gekozen had.
  */
  test("ook een toestel zonder pakketrol krijgt zijn eigen regel", () => {
    const lines = parseSelection("ttk650:1,revolution:1,radiaal2250:1,teddh20:1");

    expect(pickupDeviceLines(lines)).toEqual([
      { product_key: "ttk650", qty: 1 },
      { product_key: "revolution", qty: 1 },
      { product_key: "radiaal2250", qty: 1 },
      { product_key: "teddh20", qty: 1 },
    ]);
    expect(pickupCounts(lines)).toEqual({ drogers: 2, ventilatoren: 1, verwarming: 1 });
    expect(pickupLabel(lines)).toContain("1× TTK 650 S");
  });

  test("de regels overleven de reis door de Stripe-metadata", () => {
    const lines = pickupDeviceLines(parseSelection("revolution:1,ttv4500:2"));
    const raw = serializeDeviceLines(lines);

    expect(raw).toBe("p:revolution:1,p:ttv4500:2");
    expect(parseDeviceLines(raw)).toEqual(lines);
    // Een pakketregel blijft schrijven zoals ze altijd deed.
    expect(serializeDeviceLines([{ device_key: "small", qty: 2 }])).toBe("small:2");
    expect(parseDeviceLines("small:2,onzin:1,p:revolution:1")).toEqual([
      { device_key: "small", qty: 2 },
      { product_key: "revolution", qty: 1 },
    ]);
  });
});

/*
  Van de adsorptiedroger hebben we er één. Staat die op de gekozen dag al uit,
  dan moet de pagina dat zeggen én een dag voorstellen die wél kan — voorheen
  bleef "Direct beschikbaar" staan en volgde de weigering pas bij het afrekenen.
*/
describe("eerstvolgende vrije afhaaldatum", () => {
  const bezet = ["2026-08-12", "2026-08-13", "2026-08-14"];

  test("houdt de gekozen datum als die vrij is", () => {
    expect(firstFreeDate("2026-08-20", bezet, 60)).toBe("2026-08-20");
  });

  test("springt naar de eerste dag na de bezette reeks", () => {
    expect(firstFreeDate("2026-08-12", bezet, 60)).toBe("2026-08-15");
  });

  test("geeft niets terug wanneer de hele horizon vol zit", () => {
    const alles = Array.from({ length: 8 }, (_, i) => `2026-08-${String(12 + i).padStart(2, "0")}`);
    expect(firstFreeDate("2026-08-12", alles, 5)).toBeNull();
  });
});

describe("afhaalOrder — de server bepaalt het bedrag", () => {
  const base = {
    lines: "ttk170:2",
    days: 7,
    date: tomorrow(),
    slot: "10:00 – 12:00",
    name: "Jan Peeters",
    email: "jan@voorbeeld.be",
    phone: "0470 12 34 56",
    address: "Dorpsstraat 1, 2630 Aartselaar",
  };

  test("negeert een totaal dat de bezoeker meestuurt", () => {
    const order = afhaalOrder({ ...base, total_price: 1, prijs: 0 });

    expect(order.summary.net).toBe(PICKUP_BY_KEY.ttk170.day * 2 * 7);
    expect(order).not.toHaveProperty("total_price");
  });

  test("weigert een huurperiode die niet bestaat", () => {
    expect(afhaalOrder({ ...base, days: 999 }).days).toBe(7);
  });

  test("weigert een afhaalmoment dat niet bestaat", () => {
    expect(afhaalOrder({ ...base, slot: "03:00 – 04:00" }).slot).toBe("08:00 – 10:00");
  });

  test("weigert een datum in het verleden", () => {
    expect(afhaalOrder({ ...base, date: "2020-01-01" }).date).toBeNull();
    expect(afhaalOrder({ ...base, date: "morgen" }).date).toBeNull();
  });

  test("splitst de naam en houdt het klanttype bij de twee toegestane waarden", () => {
    const order = afhaalOrder({ ...base, name: "Jan Van den Broeck", customer_type: "admin" });

    expect(order.firstName).toBe("Jan");
    expect(order.lastName).toBe("Van den Broeck");
    expect(order.customerType).toBe("particulier");
    expect(afhaalOrder({ ...base, customer_type: "zakelijk" }).customerType).toBe("zakelijk");
  });

  test("kapt een onwaarschijnlijk grote bestelling af", () => {
    const order = afhaalOrder({
      ...base,
      lines: "ttk170:8,ttk350:8,ttk650:8,ttv4500:8",
    });

    expect(order.summary.units).toBe(20);
  });
});
