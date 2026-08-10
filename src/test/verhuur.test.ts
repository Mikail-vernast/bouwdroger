import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  allItems,
  baseItems,
  configToQuery,
  deviceCount,
  dryingDays,
  euro,
  euroInt,
  packageGallery,
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
import { configPrice } from "@/lib/verhuur";
import {
  packageFor,
  packageItems,
  packageOptionalItems,
  packageTotal,
  packageWeeks,
} from "@/lib/vastPakket";
import { CAT, WEEKS } from "@/data/verhuur";
import type { Package } from "@/data/packages";
import { isReference, newReference } from "@/lib/booking";
import { QUESTIONS } from "@/data/verhuur-calculator";

/**
 * De referentieconfiguratie: 180 m², pleisterwerk + chape, met verwarming.
 *
 * `pd` en `cd` staan er nog in omdat elke config ze draagt, maar bij "beide"
 * sturen ze het pakket niet — de shop verkoopt die per oppervlakte.
 */
const REFERENCE: PackageConfig = {
  size: "180",
  wat: "beide",
  pd: "3",
  cd: "6",
  heat: true,
  weeks: 2,
};

/*
  De site draait op de momentopname die het portaal publiceerde, en die bepaalt
  of de catalogus haar werk kan doen. Publiceerde het portaal nog geen pakketten
  mét zoeksleutels, dan valt alles terug op de oude brackettabel en gelden er
  andere getallen. Beide paden horen getest, elk tegen de data waar het voor
  bedoeld is — anders staat de suite rood om een reden die niets met de code te
  maken heeft.
*/

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
      // 2 cm, net als de calculator zelf: die stond op 2 terwijl parseConfig op
      // 3 terugviel, dus toonde een link zonder `pd` een andere dikte dan de
      // wizard die hem gemaakt had.
      pd: "2",
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
  it("laat de kachels weg als de klant zelf verwarmt", () => {
    const items = baseItems({ ...REFERENCE, heat: false });
    expect(items.some((it) => it.k === "kachel")).toBe(false);
  });

  it("voegt een toestel toe dat nog niet in het pakket zat", () => {
    const config = { ...REFERENCE, heat: false };
    const items = allItems(config, { kachel: 2 });
    expect(items.find((it) => it.k === "kachel")?.q).toBe(2);
  });
});

/*
  Deze tests lezen de échte catalogus uit `data/tarieven.ts`, en dat bestand
  ververst bij elke build. Er stonden hier eerder harde aantallen in — 3 medium
  drogers, 13 toestellen, 340 l, € 756 — en die braken zodra iemand in het
  portaal een toestel bijzette. Ze zeiden ook niets: dat de site toont wat er
  gepubliceerd is, bewijs je door de twee met elkaar te vergelijken, niet door
  het cijfer van gisteren te herhalen.
*/
describe("pakketsamenstelling volgens de catalogus", () => {
  const pakket = packageFor(REFERENCE);

  it("vindt een pakket voor de referentieconfiguratie", () => {
    expect(pakket).not.toBeNull();
  });

  it("neemt de toestellen over van het pakket dat de shop verkoopt", () => {
    expect(baseItems({ ...REFERENCE, heat: false })).toEqual(packageItems(pakket as Package));
  });

  it("levert daarbovenop de kachels die het portaal als optie meegaf", () => {
    const opties = packageOptionalItems(pakket as Package);
    expect(opties.length).toBeGreaterThan(0);
    expect(baseItems(REFERENCE)).toEqual([...packageItems(pakket as Package), ...opties]);
  });

  it("zet bij waterschade niets extra bij", () => {
    // De shop heeft een eigen waterschadepakket; dat is al zwaar genoeg.
    const wet = { ...REFERENCE, wat: "waterschade", heat: false };
    expect(baseItems(wet)).toEqual(packageItems(packageFor(wet) as Package));
  });

  it("telt handmatig bijgezette toestellen bij het basispakket", () => {
    const basis = baseItems(REFERENCE);
    const items = allItems(REFERENCE, { small: 1 });
    const eerder = basis.find((it) => it.k === "small")?.q ?? 0;
    expect(items.find((it) => it.k === "small")?.q).toBe(eerder + 1);
    expect(deviceCount(items)).toBe(deviceCount(basis) + 1);
  });

  it("sommeert capaciteit en luchtverzet over alle toestellen", () => {
    const items = allItems(REFERENCE);
    const cap = items.reduce((n, it) => n + CAT[it.k].cap * it.q, 0);
    const air = items.reduce((n, it) => n + CAT[it.k].air * it.q, 0);
    expect(totalCapacity(items)).toBe(cap);
    expect(totalAirflow(items)).toBe(air);
  });
});


describe("prijs", () => {
  it("rekent per toestel af tegen het tarief uit de toestelcatalogus", () => {
    const items = allItems(REFERENCE);
    const twee = packagePrice(items, 2);
    // De multipliers staan los van de samenstelling, dus die verhoudingen
    // gelden ongeacht welke momentopname er ligt.
    expect(packagePrice(items, 1)).toBe(Math.round(twee * 0.62));
    expect(packagePrice(items, 3)).toBe(Math.round(twee * 1.35));
    expect(packagePrice(items, 4)).toBe(Math.round(twee * 1.62));
  });
});

describe("prijs volgens de catalogus", () => {
  it("rekent het pakkettarief, plus de kachels aan het toesteltarief", () => {
    const pakket = packageFor(REFERENCE) as Package;
    const kachels = packageOptionalItems(pakket).reduce((n, it) => n + CAT[it.k].w2 * it.q, 0);
    const weken = packageWeeks(pakket);
    const verwacht = packageTotal(pakket) + kachels * (WEEKS[weken] ?? 1);
    expect(configPrice(REFERENCE, baseItems(REFERENCE))).toBeCloseTo(verwacht, 2);
  });
});


describe("droogtijd volgens de catalogus", () => {
  it("is de huurtermijn die de shop aan het pakket hangt", () => {
    // beide-180 en waterschade-180 lopen allebei vier weken.
    expect(dryingDays(REFERENCE)).toBe(28);
    expect(dryingDays({ ...REFERENCE, size: "140" })).toBe(28);
    expect(dryingDays({ ...REFERENCE, wat: "waterschade" })).toBe(28);
  });

  it("volgt de materiaaldikte bij chape", () => {
    // 5 cm → 2 weken, 6 cm → 3 weken, 7 cm → 4 weken.
    expect(dryingDays({ ...REFERENCE, wat: "chape", cd: "5" })).toBe(14);
    expect(dryingDays({ ...REFERENCE, wat: "chape", cd: "6" })).toBe(21);
    expect(dryingDays({ ...REFERENCE, wat: "chape", cd: "7" })).toBe(28);
  });

  it("stelt de huurperiode voor die de droogtijd dekt", () => {
    expect(suggestedWeeks(REFERENCE)).toBe(4);
    expect(suggestedWeeks({ ...REFERENCE, wat: "chape", cd: "5" })).toBe(2);
  });
});


describe("packageTitle", () => {
  it("volgt de productnaamconventie", () => {
    // Alleen de dikte die dit pakket stuurt. REFERENCE staat op "beide", en
    // daar verkoopt de shop per oppervlakte — zonder dikte dus.
    expect(packageTitle(REFERENCE)).toBe(
      "Gebouw kleiner dan 180 m2 – Pleisterwerk + chape – incl. verwarming"
    );
    expect(packageTitle({ ...REFERENCE, wat: "chape" })).toBe(
      "Gebouw kleiner dan 180 m2 – Chapedikte 6 cm – incl. verwarming"
    );
    expect(packageTitle({ ...REFERENCE, wat: "pleister", pd: "3" })).toBe(
      "Gebouw kleiner dan 180 m2 – Pleisterdikte 3 cm – incl. verwarming"
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
    // De diktes komen uit de catalogus, dus neemt de test er twee die er
    // gegarandeerd in zitten in plaats van een vaste waarde die eruit kan vallen.
    const pd = PD_VALUES[0];
    const cd = CD_VALUES[0];
    const c = parse(`size=100&wat=chape&pd=${pd}&cd=${cd}&heat=0&weeks=4`);
    expect(c).toEqual({ size: "100", wat: "chape", pd, cd, heat: false, weeks: 4 });
  });

  it("valt terug op de standaard bij een onbekende oppervlakte", () => {
    expect(parse("size=999").size).toBe("180");
  });

  it("weigert vrije tekst in wat, pd en cd", () => {
    const c = parse("wat=<script>&pd=" + encodeURIComponent("€ 0 gratis") + "&cd=999");
    expect(c.wat).toBe("beide");
    expect(c.pd).toBe("2");
    expect(c.cd).toBe("6");
  });

  it("laat niets van de bezoeker in de productnaam belanden", () => {
    const title = packageTitle(parse("wat=aaa&pd=bbb&cd=ccc&size=ddd"));
    expect(title).toBe("Gebouw kleiner dan 180 m2 – Pleisterwerk + chape – incl. verwarming");
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

