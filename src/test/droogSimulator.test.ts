/**
 * @vitest-environment node
 *
 * De droogsimulator stelt andere vragen dan de calculator, maar mag nergens een
 * eigen bedrag of toestelaantal verzinnen: alles komt uit dezelfde catalogus.
 * Daarnaast: de kamers vullen elke bouwlaag precies, en de verdeling over de
 * kamers verliest of verzint geen toestellen.
 */
import { describe, expect, it } from "vitest";
import {
  MAX_KAMERS,
  MAX_VERDIEPINGEN,
  MIN_KAMERS,
  RUIMTES,
  aantalKamers,
  geldig,
  kamersVoor,
  laagSoort,
  planVoor,
  programmaVan,
  plaatsToestellen,
  standaardProgramma,
  simResultaat,
  snapOppervlakte,
  toPackageConfig,
  type Dak,
  type Kamer,
  type SimAnswers,
  type Woning,
  WONING,
} from "../lib/droogSimulator";
import { SIZE_VALUES, baseItems, configPrice } from "../lib/verhuur";

const BASIS: SimAnswers = {
  woning: "halfopen",
  verdiepingen: 2,
  dak: "zadeldak",
  size: SIZE_VALUES[2],
  wat: "chape",
  pd: "2",
  cd: "6",
  fase: "vers",
  verwarmt: false,
};

const WONINGEN: Woning[] = ["rijwoning", "halfopen", "open", "appartement"];
const DAKEN: Dak[] = ["zadeldak", "plat", "lessenaar"];

describe("toPackageConfig", () => {
  it("zet 'zelf verwarmd' om naar een pakket zonder kachels, en omgekeerd", () => {
    expect(toPackageConfig({ ...BASIS, verwarmt: true }).heat).toBe(false);
    expect(toPackageConfig({ ...BASIS, verwarmt: false }).heat).toBe(true);
  });

  it("valt terug op de standaarddikte bij een dikte die niet in de catalogus staat", () => {
    const c = toPackageConfig({ ...BASIS, pd: "9", cd: "onbekend" });
    expect(c.pd).not.toBe("9");
    expect(c.cd).not.toBe("onbekend");
  });
});

describe("simResultaat", () => {
  it("rekent exact wat de calculator rekent voor dezelfde configuratie", () => {
    for (const wat of ["pleister", "chape", "beide"] as const) {
      for (const verwarmt of [true, false]) {
        const r = simResultaat({ ...BASIS, wat, verwarmt });
        expect(r).not.toBeNull();
        const config = toPackageConfig({ ...BASIS, wat, verwarmt });
        expect(r!.items).toEqual(baseItems(config));
        expect(r!.prijs).toBe(configPrice(config, baseItems(config)));
      }
    }
  });

  it("geeft geen pakket bij maatwerk", () => {
    expect(simResultaat({ ...BASIS, size: "custom" })).toBeNull();
  });
});

describe("snapOppervlakte", () => {
  it("rondt naar boven af op de volgende catalogusmaat", () => {
    const maten = SIZE_VALUES.map(Number);
    expect(snapOppervlakte(maten[0])).toBe(String(maten[0]));
    expect(snapOppervlakte(maten[0] + 1)).toBe(String(maten[1]));
    expect(snapOppervlakte(1)).toBe(String(maten[0]));
  });

  it("geeft maatwerk boven de grootste maat", () => {
    expect(snapOppervlakte(Number(SIZE_VALUES[SIZE_VALUES.length - 1]) + 1)).toBe("custom");
  });
});

describe("kamersVoor", () => {
  it("vult elke bouwlaag precies, zonder overlap en binnen de gevels", () => {
    for (const woning of WONINGEN) {
      for (const dak of DAKEN) {
        for (let lagen = 1; lagen <= MAX_VERDIEPINGEN; lagen++) {
         for (let n = MIN_KAMERS; n <= MAX_KAMERS + 1; n++) {
          const kamers = kamersVoor(woning, lagen, dak, Array(lagen).fill(n));
          const xs = kamers.map((k) => k.x + k.w);
          const zs = kamers.map((k) => k.z + k.l);
          const w = Math.max(...xs);
          const l = Math.max(...zs);
          for (let v = 0; v < lagen; v++) {
            const laag = kamers.filter((k) => k.verdieping === v);
            // Boven het maximum wordt afgekapt, niet stil genegeerd. Hal, gang
            // en overloop komen erbij en tellen niet mee.
            expect(laag.filter((k) => k.soort === "kamer").length, `${woning} ${dak} laag ${v}`).toBe(Math.min(n, MAX_KAMERS));
            expect(laag.some((k) => k.soort === "circulatie")).toBe(true);
            const som = laag.reduce((s, k) => s + k.w * k.l, 0);
            expect(som, `${woning} ${dak} ${lagen} laag ${v}`).toBeCloseTo(w * l, 6);
            for (const k of laag) {
              expect(k.x).toBeGreaterThanOrEqual(0);
              expect(k.z).toBeGreaterThanOrEqual(0);
              expect(k.x + k.w).toBeLessThanOrEqual(w + 1e-9);
              expect(k.z + k.l).toBeLessThanOrEqual(l + 1e-9);
            }
            for (let i = 0; i < laag.length; i++) {
              for (let j = i + 1; j < laag.length; j++) {
                const a = laag[i], b = laag[j];
                const ox = Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x);
                const oz = Math.min(a.z + a.l, b.z + b.l) - Math.max(a.z, b.z);
                expect(ox > 1e-9 && oz > 1e-9, `${a.naam} overlapt ${b.naam}`).toBe(false);
              }
            }
          }
         }
        }
      }
    }
  });

  it("begint met de standaardindeling als er geen aantallen gegeven zijn", () => {
    const kamers = kamersVoor("halfopen", 2, "zadeldak").filter((k) => k.soort === "kamer");
    expect(kamers.filter((k) => k.verdieping === 0)).toHaveLength(3);
    expect(kamers.filter((k) => k.verdieping === 1)).toHaveLength(4);
    expect(kamers[0].naam).toBe("Leefruimte");
  });
});

describe("plaatsToestellen", () => {
  it("plaatst precies de toestellen uit het pakket, elk binnen zijn kamer", () => {
    for (const woning of WONINGEN) {
      for (const size of SIZE_VALUES) {
        const r = simResultaat({ ...BASIS, woning, size, wat: "beide" });
        if (!r) continue;
        const kamers = kamersVoor(woning, 2, "zadeldak");
        const plaatsing = plaatsToestellen(r.items, kamers);
        for (const it of r.items) {
          expect(plaatsing.filter((p) => p.k === it.k)).toHaveLength(it.q);
        }
        expect(plaatsing).toHaveLength(r.items.reduce((n, it) => n + it.q, 0));
        for (const p of plaatsing) {
          const k = kamers.find((kk) => kk.id === p.kamer)!;
          expect(p.x).toBeGreaterThan(0);
          expect(p.x).toBeLessThan(k.w);
          expect(p.z).toBeGreaterThan(0);
          expect(p.z).toBeLessThan(k.l);
        }
      }
    }
  });

  it("geeft elke kamer één droger voor er ergens een tweede bij komt", () => {
    // Halfopen gelijkvloers: leefruimte, keuken en toilet. Een toilet krijgt geen
    // droger (de lucht komt er via de open deur), dus twee drogers = één per kamer.
    const kamers = kamersVoor("halfopen", 1, "plat");
    const echte = kamers.filter((k) => k.soort === "kamer" && k.naam !== "Toilet");
    const plaatsing = plaatsToestellen([{ k: "small", q: echte.length }], kamers);
    const perKamer = new Set(plaatsing.map((p) => p.kamer));
    expect(perKamer.size).toBe(echte.length);
    expect(plaatsing.every((p) => echte.some((k) => k.id === p.kamer))).toBe(true);
  });

  it("zet geen droger in een gang of toilet zolang er een andere kamer is", () => {
    const kamer = (id: string, naam: string, x: number): Kamer => ({ id, naam, verdieping: 0, x, z: 0, w: 3, l: 3 });
    const kamers = [kamer("a", "Leefruimte", 0), kamer("b", "Toilet", 3), { ...kamer("c", "Gang", 6), soort: "circulatie" as const }];
    const plaatsing = plaatsToestellen([{ k: "medium", q: 4 }, { k: "kachel", q: 2 }], kamers);
    expect(plaatsing.every((p) => p.kamer === "a")).toBe(true);
  });
});

describe("planVoor", () => {
  const raakt = (a: Kamer, b: Kamer, as: "x" | "z", vast: number, van: number, tot: number) => {
    // a ligt aan de ene kant van de wand, b aan de andere, en de opening valt binnen hun gedeelde stuk.
    if (as === "x") {
      const zijden = [a.z + a.l, a.z].some((z) => Math.abs(z - vast) < 1e-6) && [b.z + b.l, b.z].some((z) => Math.abs(z - vast) < 1e-6);
      return zijden && van >= Math.max(a.x, b.x) - 1e-6 && tot <= Math.min(a.x + a.w, b.x + b.w) + 1e-6;
    }
    const zijden = [a.x + a.w, a.x].some((x) => Math.abs(x - vast) < 1e-6) && [b.x + b.w, b.x].some((x) => Math.abs(x - vast) < 1e-6);
    return zijden && van >= Math.max(a.z, b.z) - 1e-6 && tot <= Math.min(a.z + a.l, b.z + b.l) + 1e-6;
  };

  it("geeft elke kamer een deur naar de gang, en elke opening ligt in een gedeelde wand", () => {
    for (const woning of WONINGEN) {
      for (const dak of DAKEN) {
        for (let lagen = 1; lagen <= MAX_VERDIEPINGEN; lagen++) {
          for (let n = 1; n <= MAX_KAMERS; n++) {
            const plan = planVoor(woning, lagen, dak, Array.from({ length: lagen }, () => undefined).map((_, v) => {
              const p = standaardProgramma(woning, v, lagen, dak);
              return aantalKamers(p) === n ? p : undefined;
            }));
            const { w, l } = WONING[woning];
            for (const o of plan.openingen) {
              expect(o.tot).toBeGreaterThan(o.van);
              if (o.soort === "voordeur") {
                expect(o.vast).toBe(l);
                const hal = plan.kamers.find((k) => k.verdieping === o.verdieping && k.soort === "circulatie" && k.z + k.l === l && k.x <= o.van && k.x + k.w >= o.tot);
                expect(hal, `${woning} voordeur zonder hal`).toBeDefined();
                continue;
              }
              const laag = plan.kamers.filter((k) => k.verdieping === o.verdieping);
              const paren = laag.flatMap((a) => laag.filter((b) => b !== a && raakt(a, b, o.as, o.vast, o.van, o.tot)));
              expect(paren.length, `${woning} ${dak} ${lagen} opening ${JSON.stringify(o)}`).toBeGreaterThan(0);
              expect(o.vast).toBeLessThanOrEqual(o.as === "x" ? l : w);
            }
            for (const k of plan.kamers.filter((kk) => kk.soort === "kamer")) {
              const laag = plan.kamers.filter((kk) => kk.verdieping === k.verdieping && kk.soort === "circulatie");
              const deur = plan.openingen.some((o) => o.verdieping === k.verdieping && o.soort === "deur" && laag.some((g) => raakt(k, g, o.as, o.vast, o.van, o.tot)));
              expect(deur, `${woning} ${dak} ${lagen}: ${k.naam} zonder deur naar de gang`).toBe(true);
            }
            // gelijkvloers heeft altijd een voordeur; een trap zodra er meer dan één laag is
            expect(plan.openingen.filter((o) => o.verdieping === 0 && o.soort === "voordeur")).toHaveLength(1);
            expect(plan.trappen).toHaveLength(lagen > 1 ? lagen : 0);
          }
        }
      }
    }
  });

  it("houdt een programma binnen min, max en het maximum aantal kamers", () => {
    const p = geldig("boven", { Slaapkamer: 9, Badkamer: 5, Bureau: 1, Toilet: 1, Dressing: 1, Onbekend: 2 });
    expect(p.Slaapkamer).toBe(4);
    expect(p.Badkamer).toBe(2);
    expect(aantalKamers(p)).toBe(MAX_KAMERS);
    expect(p.Onbekend).toBeUndefined();
    expect(geldig("gelijkvloers", {}).Leefruimte).toBe(1);
  });

  it("toont de gekozen ruimtes, met de juiste namen", () => {
    const plan = planVoor("rijwoning", 2, "zadeldak", [{ Leefruimte: 1, Keuken: 1, Toilet: 1 }, { Slaapkamer: 3, Badkamer: 1 }]);
    const namen = (v: number) => plan.kamers.filter((k) => k.verdieping === v && k.soort === "kamer").map((k) => k.naam).sort();
    expect(namen(0)).toEqual(["Keuken", "Leefruimte", "Toilet"]);
    expect(namen(1)).toEqual(["Badkamer", "Slaapkamer", "Slaapkamer", "Slaapkamer"]);
    expect(laagSoort("rijwoning", 1, 2, "zadeldak")).toBe("boven");
    expect(RUIMTES.boven.find((o) => o.naam === "Slaapkamer")!.min).toBe(1);
  });

  it("zet de trap op elke verdieping recht boven die van de vorige laag", () => {
    for (const woning of ["rijwoning", "halfopen", "open"] as Woning[]) {
      for (const n of [MIN_KAMERS, 3, MAX_KAMERS]) {
        const plan = planVoor(woning, 3, "zadeldak", [0, 1, 2].map((v) => programmaVan(laagSoort(woning, v, 3, "zadeldak"), n)));
        const plekken = new Set(plan.trappen.map((t) => `${t.x}|${t.z}|${t.w}|${t.l}`));
        expect(plan.trappen).toHaveLength(3);
        expect(plekken.size).toBe(1);
      }
    }
  });

  it("geeft twee verdiepingen met evenveel kamers toch een andere indeling", () => {
    const plan = planVoor("open", 3, "plat", [undefined, programmaVan("boven", 5), programmaVan("boven", 5)]);
    const vorm = (v: number) => plan.kamers.filter((k) => k.verdieping === v).map((k) => `${k.naam}@${k.x.toFixed(2)},${k.z.toFixed(2)},${k.w.toFixed(2)}`).join(";");
    expect(vorm(1)).not.toBe(vorm(2));
  });
});
