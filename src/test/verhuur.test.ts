import { describe, expect, it } from "vitest";
import {
  allItems,
  baseItems,
  configToQuery,
  deviceCount,
  dryingDays,
  euro,
  euroInt,
  packagePrice,
  packageTitle,
  parseConfig,
  suggestedWeeks,
  totalAirflow,
  totalCapacity,
  CD_VALUES,
  PD_VALUES,
  WAT_VALUES,
  type PackageConfig,
} from "@/lib/verhuur";
import { isReference, newReference } from "@/lib/booking";
import { QUESTIONS } from "@/data/verhuur-calculator";

/** Het klantvoorbeeld waar de tarieflijst uit is afgeleid: € 616 voor 2 weken. */
const REFERENCE: PackageConfig = {
  size: "180",
  wat: "beide",
  pd: "3",
  cd: "6",
  heat: true,
  weeks: 2,
};

describe("euro", () => {
  it("gebruikt nl-BE-notatie met komma-decimalen", () => {
    expect(euro(616)).toBe("€ 616,00");
    expect(euro(1321)).toBe("€ 1.321,00");
  });

  it("zet een minteken vóór het euroteken bij een korting", () => {
    expect(euro(-25)).toBe("− € 25,00");
  });

  it("laat euroInt de decimalen weg", () => {
    expect(euroInt(1128)).toBe("€ 1.128");
  });
});

describe("parseConfig", () => {
  it("valt terug op de standaardconfiguratie bij een lege query", () => {
    expect(parseConfig(new URLSearchParams())).toEqual({
      size: "180",
      wat: "beide",
      pd: "3",
      cd: "6",
      heat: true,
      weeks: 2,
    });
  });

  it("negeert een onbekende bracket", () => {
    expect(parseConfig(new URLSearchParams("size=999")).size).toBe("180");
  });

  it("begrenst de huurperiode tot 1–4 weken", () => {
    expect(parseConfig(new URLSearchParams("weeks=9")).weeks).toBe(4);
    expect(parseConfig(new URLSearchParams("weeks=0")).weeks).toBe(2);
  });

  it("leest heat=0 als 'klant verwarmt niet zelf'", () => {
    expect(parseConfig(new URLSearchParams("heat=0")).heat).toBe(false);
  });

  it("is rondloopbaar via configToQuery", () => {
    expect(parseConfig(new URLSearchParams(configToQuery(REFERENCE)))).toEqual(REFERENCE);
  });
});

describe("pakketsamenstelling", () => {
  it("volgt de bracket-tabel", () => {
    expect(baseItems(REFERENCE)).toEqual([
      { k: "small", q: 2 },
      { k: "medium", q: 2 },
      { k: "axiaal", q: 4 },
      { k: "kachel", q: 2 },
    ]);
  });

  it("laat de kachels weg als de klant zelf verwarmt", () => {
    const items = baseItems({ ...REFERENCE, heat: false });
    expect(items.some((it) => it.k === "kachel")).toBe(false);
  });

  it("zet bij waterschade één small en één axiaal extra bij", () => {
    const items = baseItems({ ...REFERENCE, wat: "waterschade" });
    expect(items.find((it) => it.k === "small")?.q).toBe(3);
    expect(items.find((it) => it.k === "axiaal")?.q).toBe(5);
  });

  it("telt handmatig bijgezette toestellen bij het basispakket", () => {
    const items = allItems(REFERENCE, { small: 1 });
    expect(items.find((it) => it.k === "small")?.q).toBe(3);
    expect(deviceCount(items)).toBe(11);
  });

  it("voegt een toestel toe dat nog niet in het pakket zat", () => {
    const config = { ...REFERENCE, heat: false };
    const items = allItems(config, { kachel: 2 });
    expect(items.find((it) => it.k === "kachel")?.q).toBe(2);
  });

  it("sommeert capaciteit en luchtverzet", () => {
    const items = allItems(REFERENCE);
    expect(totalCapacity(items)).toBe(260);
    expect(totalAirflow(items)).toBe(21200);
  });
});

describe("prijs", () => {
  it("komt op het klantvoorbeeld van € 616 uit voor twee weken", () => {
    expect(packagePrice(allItems(REFERENCE), 2)).toBe(616);
  });

  it("past de week-multipliers toe", () => {
    const items = allItems(REFERENCE);
    expect(packagePrice(items, 1)).toBe(382); // 616 × 0,62
    expect(packagePrice(items, 3)).toBe(832); // 616 × 1,35
    expect(packagePrice(items, 4)).toBe(998); // 616 × 1,62
  });
});

describe("droogtijd", () => {
  it("rekent 16 dagen vanaf 180 m²", () => {
    expect(dryingDays(REFERENCE)).toBe(16);
  });

  it("rekent 12 dagen onder 180 m²", () => {
    expect(dryingDays({ ...REFERENCE, size: "140" })).toBe(12);
  });

  it("rekent 10 dagen bij waterschade, ook op een groot pand", () => {
    expect(dryingDays({ ...REFERENCE, wat: "waterschade" })).toBe(10);
  });

  it("stelt de huurperiode voor die de droogtijd dekt", () => {
    expect(suggestedWeeks(REFERENCE)).toBe(3); // 16 dagen → 3 weken
    expect(suggestedWeeks({ ...REFERENCE, size: "140" })).toBe(2);
  });
});

describe("packageTitle", () => {
  it("volgt de productnaamconventie", () => {
    expect(packageTitle(REFERENCE)).toBe(
      "Gebouw kleiner dan 180 m2 – Pleisterdikte 3 cm – chape 6 cm – incl. verwarming"
    );
  });

  it("vervangt de diktes door 'Waterschade'", () => {
    expect(packageTitle({ ...REFERENCE, wat: "waterschade", heat: false })).toBe(
      "Gebouw kleiner dan 180 m2 – Waterschade – excl. verwarming"
    );
  });
});

describe("parseConfig", () => {
  const parse = (qs: string) => parseConfig(new URLSearchParams(qs));

  it("neemt geldige keuzes over", () => {
    const c = parse("size=100&wat=chape&pd=1,5&cd=8&heat=0&weeks=4");
    expect(c).toEqual({ size: "100", wat: "chape", pd: "1,5", cd: "8", heat: false, weeks: 4 });
  });

  it("valt terug op de standaard bij een onbekende oppervlakte", () => {
    expect(parse("size=999").size).toBe("180");
  });

  it("weigert vrije tekst in wat, pd en cd", () => {
    const c = parse("wat=<script>&pd=" + encodeURIComponent("€ 0 gratis") + "&cd=999");
    expect(c.wat).toBe("beide");
    expect(c.pd).toBe("3");
    expect(c.cd).toBe("6");
  });

  it("laat niets van de bezoeker in de productnaam belanden", () => {
    const title = packageTitle(parse("wat=aaa&pd=bbb&cd=ccc&size=ddd"));
    expect(title).toBe("Gebouw kleiner dan 180 m2 – Pleisterdikte 3 cm – chape 6 cm – incl. verwarming");
  });

  it("begrenst het aantal weken", () => {
    expect(parse("weeks=99").weeks).toBe(4);
    expect(parse("weeks=-3").weeks).toBe(1);
  });
});

describe("calculator-antwoorden", () => {
  it("levert alleen waarden op die parseConfig aanvaardt", () => {
    const byKey = (k: string) => QUESTIONS.find((q) => q.key === k)?.options.map((o) => o.v) ?? [];

    expect(byKey("wat")).toEqual([...WAT_VALUES]);
    // "onbekend" zet de calculator zelf om naar de gemiddelde dikte.
    expect(byKey("pleisterdikte").filter((v) => v !== "onbekend")).toEqual([...PD_VALUES]);
    expect(byKey("chapedikte").filter((v) => v !== "onbekend")).toEqual([...CD_VALUES]);
    for (const size of byKey("size")) {
      expect(parseConfig(new URLSearchParams({ size })).size).toBe(size);
    }
  });
});

describe("newReference", () => {
  it("maakt referenties die isReference herkent", () => {
    for (let i = 0; i < 50; i++) expect(isReference(newReference())).toBe(true);
  });

  it("botst niet over duizend boekingen", () => {
    const seen = new Set(Array.from({ length: 1000 }, () => newReference()));
    expect(seen.size).toBe(1000);
  });

  it("wijst alles af wat niet uit newReference komt", () => {
    expect(isReference("VRN-2026-123")).toBe(false); // oude korte vorm
    expect(isReference("VRN-2026-AAAAAAA1")).toBe(false); // 1 zit niet in het alfabet
    expect(isReference("cs_test_123")).toBe(false);
    expect(isReference(null)).toBe(false);
    expect(isReference(undefined)).toBe(false);
  });
});
