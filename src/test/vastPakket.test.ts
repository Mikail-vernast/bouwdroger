/**
 * De catalogusweg: van antwoorden naar een vast pakket, en wat dat kost.
 *
 * De catalogus wordt hier gestubd in plaats van uit `data/tarieven.ts` gelezen.
 * Dat bestand is een momentopname die bij elke build ververst wordt, dus zouden
 * deze tests anders meebewegen met wat er toevallig gepubliceerd is — en groen
 * blijven staan terwijl de rekenregels stuk zijn.
 */
import { describe, expect, it, vi } from "vitest";

const CHAPE_100_6 = {
  id: "chape-100-6",
  title: "Gebouw tot 100 m² — chape 6 cm",
  shortTitle: "Chape 100 m²",
  description: "",
  category: "Chape drogen",
  sizeLabel: "Gebouw tot 100 m²",
  pricePerTwoWeeks: 380.8,
  pricePerDay: 27.2,
  includes: [],
  images: [],
  // Leeg, maar wel aanwezig: `Package` eist het veld, en zonder deze regel
  // compileert de hele test niet meer.
  imgRules: [],
  sqm: 100,
  workType: "chape" as const,
  thicknessCm: 6,
  rentalWeeks: 3,
  equipment: [
    { name: "ECO Boost", type: "bouwdroger", count: 1, specs: { Capaciteit: "50L/dag" } },
    { name: "Turbo Axiaalventilator", type: "ventilator", count: 3, specs: {} },
    { name: "ECO Performance", type: "bouwdroger", count: 1, specs: { Capaciteit: "80L/dag" } },
  ],
};

/**
 * Hetzelfde materiaal, maar met de kachels als optie erbij — zoals het portaal
 * ze zet zodra je in de pakketeditor op "+ Elektrische kachel" duwt.
 */
const PLEISTER_100_2 = {
  ...CHAPE_100_6,
  id: "pleister-100-2",
  workType: "pleister" as const,
  thicknessCm: 2,
  images: ["/eigen/zonder-kachel.webp", "/eigen/met-kachel.webp", "/eigen/detail.webp"],
  imgRules: [{ device: "kachel" as const, min: 1, image: "/eigen/met-kachel.webp" }],
  equipment: [
    ...CHAPE_100_6.equipment,
    { name: "Elektrische kachel", type: "kachel", count: 2, specs: {}, optional: true },
  ],
};

const CATALOGUS = [CHAPE_100_6, PLEISTER_100_2];

vi.mock("@/data/packages", async (origineel) => {
  const echt = await origineel<typeof import("@/data/packages")>();
  return {
    ...echt,
    packageSizes: () => [100],
    packageThicknesses: (soort: string) => (soort === "chape" ? [6] : [2]),
    findPackage: (sqm: number, workType: string, dikte: number | null) =>
      CATALOGUS.find(
        (p) => p.sqm === sqm && p.workType === workType && p.thicknessCm === dikte,
      ),
  };
});

const MET_KACHELOPTIE = PLEISTER_100_2;

const { packageFor, packageItems, packageOptionalItems, packageTotal, packageWeeks, deviceKeyFor } =
  await import("@/lib/vastPakket");
const { baseItems, configPrice, packageImage, packageGallery } = await import("@/lib/verhuur");
const { CAT, WEEKS } = await import("@/data/verhuur");

const CONFIG = { size: "100", wat: "chape", pd: "2", cd: "6", heat: false, weeks: 2 };

describe("packageFor", () => {
  it("vindt het pakket voor maat, werksoort en dikte", () => {
    expect(packageFor(CONFIG)?.id).toBe("chape-100-6");
  });

  it("geeft niets terug voor een dikte die niet verkocht wordt", () => {
    // Bewust géén dichtstbijzijnde match: wie 7 cm opgeeft en stilzwijgend het
    // pakket van 6 cm krijgt, huurt te weinig capaciteit voor te kort.
    expect(packageFor({ ...CONFIG, cd: "7" })).toBeNull();
  });

  it("negeert de pleisterdikte bij een chape-pakket", () => {
    expect(packageFor({ ...CONFIG, pd: "3" })?.id).toBe("chape-100-6");
  });

  it("geeft niets terug voor een onbekende werksoort", () => {
    expect(packageFor({ ...CONFIG, wat: "onzin" })).toBeNull();
  });
});

describe("packageTotal", () => {
  it("rekent dagprijs × dagen, zonder staffelkorting", () => {
    // 27,20 × 21 = 571,20 — exact het bedrag dat de webshop aanrekent.
    expect(packageTotal(CHAPE_100_6)).toBe(571.2);
  });

  it("neemt de huurtermijn uit het pakket, niet uit de configuratie", () => {
    expect(packageWeeks(CHAPE_100_6)).toBe(3);
  });

  it("valt terug op twee weken als de termijn nog niet ingevuld is", () => {
    expect(packageWeeks({ ...CHAPE_100_6, rentalWeeks: undefined })).toBe(2);
  });
});

describe("deviceKeyFor", () => {
  it("herkent ventilator en kachel aan het type", () => {
    expect(deviceKeyFor({ name: "Turbo Axiaalventilator", type: "ventilator" })).toBe("axiaal");
    expect(deviceKeyFor({ name: "Elektrische Kachel", type: "kachel" })).toBe("kachel");
  });

  it("scheidt de twee drogers op capaciteit, niet op naam", () => {
    // Op de naam matchen zou breken zodra marketing het toestel hernoemt.
    expect(
      deviceKeyFor({ name: "Wat dan ook", type: "bouwdroger", specs: { Capaciteit: "50L/dag" } }),
    ).toBe("small");
    expect(
      deviceKeyFor({ name: "Wat dan ook", type: "bouwdroger", specs: { Capaciteit: "80L/dag" } }),
    ).toBe("medium");
  });
});

describe("packageItems", () => {
  it("zet de toestellen om naar de sleutels waarmee de rest van de site rekent", () => {
    expect(packageItems(CHAPE_100_6)).toEqual([
      { k: "small", q: 1 },
      { k: "medium", q: 1 },
      { k: "axiaal", q: 3 },
    ]);
  });

  it("houdt de volgorde vast, ongeacht hoe het portaal ze opslaat", () => {
    const omgedraaid = { ...CHAPE_100_6, equipment: [...CHAPE_100_6.equipment].reverse() };
    expect(packageItems(omgedraaid).map((i) => i.k)).toEqual(["small", "medium", "axiaal"]);
  });

  it("laat toestellen die als optie gemarkeerd staan buiten het pakket", () => {
    // Zaten ze er wél in, dan zag `configPrice` ze als inbegrepen en leverde de
    // site de kachels gratis mee.
    expect(packageItems(MET_KACHELOPTIE)).toEqual([
      { k: "small", q: 1 },
      { k: "medium", q: 1 },
      { k: "axiaal", q: 3 },
    ]);
  });
});

describe("packageOptionalItems", () => {
  it("geeft precies de toestellen die het portaal als optie zette", () => {
    expect(packageOptionalItems(MET_KACHELOPTIE)).toEqual([{ k: "kachel", q: 2 }]);
  });

  it("geeft niets terug voor een pakket zonder opties", () => {
    expect(packageOptionalItems(CHAPE_100_6)).toEqual([]);
  });
});

describe("optionele toestellen in de calculator", () => {
  const KOUD = { size: "100", wat: "pleister", pd: "2", cd: "6", heat: false, weeks: 2 };
  const WARM = { ...KOUD, heat: true };

  it("laat de kachels weg zolang de klant zelf verwarmt", () => {
    expect(baseItems(KOUD)).toEqual([
      { k: "small", q: 1 },
      { k: "medium", q: 1 },
      { k: "axiaal", q: 3 },
    ]);
  });

  it("levert het aantal uit het pakket zodra de klant ze laat meekomen", () => {
    // Niet de vuistregel (één kachel per twee drogers → 1), maar de twee die in
    // het portaal ingesteld staan.
    expect(baseItems(WARM)).toEqual([
      { k: "small", q: 1 },
      { k: "medium", q: 1 },
      { k: "axiaal", q: 3 },
      { k: "kachel", q: 2 },
    ]);
  });

  it("rekent die kachels bovenop het pakkettarief", () => {
    const meerprijs = configPrice(WARM, baseItems(WARM)) - configPrice(KOUD, baseItems(KOUD));
    expect(meerprijs).toBeCloseTo(CAT.kachel.w2 * 2 * WEEKS[3], 2);
  });

  it("neemt de hoofdfoto van het pakket zelf zodra dat er een heeft", () => {
    expect(packageImage(KOUD, baseItems(KOUD))).toBe("/eigen/zonder-kachel.webp");
  });

  it("wisselt naar het beeld mét kachels zodra die meegaan", () => {
    // Anders staat er een banner zonder kachel bij een pakket dat er twee levert.
    expect(packageImage(WARM, baseItems(WARM))).toBe("/eigen/met-kachel.webp");
  });

  it("laat de andere variant uit de galerij weg", () => {
    expect(packageGallery(WARM, baseItems(WARM))).toEqual([
      "/eigen/met-kachel.webp",
      "/eigen/detail.webp",
    ]);
  });

  it("valt terug op één neutraal beeld voor een pakket zonder eigen foto's", () => {
    const chape = { size: "100", wat: "chape", pd: "2", cd: "6", heat: false, weeks: 2 };
    expect(packageImage(chape, baseItems(chape))).not.toContain("/eigen/");
  });
});
