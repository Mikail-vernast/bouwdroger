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
  LAGEN_PER_FASE,
  MAX_KAMERS,
  MAX_VERDIEPINGEN,
  MIN_KAMERS,
  RUIMTES,
  aantalKamers,
  geldig,
  kamersVoor,
  laagSoort,
  maxKamers,
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
import { SIZE_VALUES, baseItems, configPrice, configToQuery, parseConfig } from "../lib/verhuur";
import { EMPTY_OPTIONS, bookingSummary, extraNaarQuery, extraUitQuery } from "../lib/booking";

const BASIS: SimAnswers = {
  woning: "halfopen",
  verdiepingen: 2,
  dak: "zadeldak",
  size: SIZE_VALUES[2],
  wat: "chape",
  pd: "2",
  cd: "6",
  fase: "chape",
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
  it("toont exact wat de klant boekt: dezelfde toestellen, termijn en prijs als de boeking", () => {
    for (const size of SIZE_VALUES) {
      for (const wat of ["pleister", "chape", "beide", "waterschade"] as const) {
        for (const verwarmt of [true, false]) {
          for (const tempo of ["snel", "gemiddeld", "traag"] as const) {
            const r = simResultaat({ ...BASIS, size, wat, verwarmt, tempo });
            if (!r) continue;
            // Wat de checkout server-side rekent: het pakket uit de link, met de
            // extra toestellen die de link meedraagt.
            const qs = new URLSearchParams(configToQuery(r.config) + extraNaarQuery(r.extra));
            const boeking = bookingSummary(parseConfig(qs), { ...EMPTY_OPTIONS, dev: extraUitQuery(qs) });
            expect(r.prijs).toBe(boeking.base);
            expect(r.weken).toBe(boeking.weeks);
            expect(r.items).toEqual(boeking.items);
          }
        }
      }
    }
  });

  it("geeft ruwbouw en ramen geplaatst (geen chape, geen pleister) een vast waterschadepakket bij elke oppervlakte", () => {
    for (const fase of ["ruwbouw", "ramen"] as const) {
      expect(LAGEN_PER_FASE[fase]).toEqual([]);
      for (const size of SIZE_VALUES) {
        const r = simResultaat({ ...BASIS, size, fase, wat: "waterschade" });
        expect(r, `${fase} ${size} m²`).not.toBeNull();
        expect(r!.prijs).toBeGreaterThan(0);
        expect(r!.config.wat).toBe("waterschade");
      }
    }
    // Een chape zonder pleister vraagt enkel de chapedikte; vanaf het pleisteren beide.
    expect(LAGEN_PER_FASE.chape).toEqual(["cd"]);
    expect(LAGEN_PER_FASE.gepleisterd).toEqual(["pd", "cd"]);
  });

  it("zet bij 'snel' één droger bovenop het pakket, en verandert verder niets", () => {
    const gem = simResultaat({ ...BASIS, tempo: "gemiddeld" })!;
    const rustig = simResultaat({ ...BASIS, tempo: "traag" })!;
    const snel = simResultaat({ ...BASIS, tempo: "snel" })!;
    const drogers = (r: typeof snel) => r.items.filter((it) => it.k === "small" || it.k === "medium").reduce((n, it) => n + it.q, 0);
    expect(gem.items).toEqual(baseItems(gem.config));
    expect(rustig.prijs).toBe(gem.prijs);
    expect(drogers(snel)).toBe(drogers(gem) + 1);
    expect(snel.prijs).toBeGreaterThan(gem.prijs);
    expect(snel.weken).toBe(gem.weken);
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
            // Wat niet past (minimale breedte per ruimte) valt weg; maxKamers zegt hoeveel dat is.
            expect(laag.filter((k) => k.soort === "kamer" && !k.deel).length, `${woning} ${dak} laag ${v}`).toBe(Math.min(n, maxKamers(woning, v, lagen, dak)));
            // Een open zolder is één ruimte met de trap erin: daar is geen overloop.
            const openZolder = laag.length === 1 && laag[0].naam === "Zolder";
            expect(openZolder || laag.some((k) => k.soort === "circulatie")).toBe(true);
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
    const kamers = kamersVoor("halfopen", 2, "zadeldak").filter((k) => k.soort === "kamer" && !k.deel);
    expect(kamers.filter((k) => k.verdieping === 0)).toHaveLength(3);
    expect(kamers.filter((k) => k.verdieping === 1)).toHaveLength(4);
    expect(kamers.filter((k) => k.verdieping === 0).map((k) => k.naam).sort()).toEqual(["Keuken", "Leefruimte", "Toilet"]);
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
  // De deur- en maatregels van de indeling staan in droogIndeling.test.ts.


  it("houdt een programma binnen min, max en het maximum aantal kamers", () => {
    const p = geldig("boven", { Slaapkamer: 9, Badkamer: 5, Bureau: 1, Toilet: 1, Dressing: 1, Onbekend: 2 });
    expect(p.Slaapkamer).toBe(4);
    expect(p.Badkamer).toBe(2);
    expect(aantalKamers(p)).toBe(MAX_KAMERS);
    expect(p.Onbekend).toBeUndefined();
    expect(geldig("gelijkvloers", {}).Leefruimte).toBe(1);
  });

  it("toont de gekozen ruimtes, met de juiste namen", () => {
    const plan = planVoor("halfopen", 2, "zadeldak", [{ Leefruimte: 1, Keuken: 1, Toilet: 1 }, { Slaapkamer: 3, Badkamer: 1 }]);
    const namen = (v: number) => plan.kamers.filter((k) => k.verdieping === v && k.soort === "kamer" && !k.deel).map((k) => k.naam).sort();
    expect(namen(0)).toEqual(["Keuken", "Leefruimte", "Toilet"]);
    expect(namen(1)).toEqual(["Badkamer", "Slaapkamer", "Slaapkamer", "Slaapkamer"]);
    expect(laagSoort("halfopen", 1, 2, "zadeldak")).toBe("boven");
    expect(RUIMTES.boven.find((o) => o.naam === "Slaapkamer")!.min).toBe(1);
  });

  it("geeft elke ruimte minstens haar minimale breedte, en past de standaardindeling altijd", () => {
    for (const woning of WONINGEN) for (const dak of DAKEN) for (let lagen = 1; lagen <= MAX_VERDIEPINGEN; lagen++) {
      for (let v = 0; v < lagen; v++) {
        const soort = laagSoort(woning, v, lagen, dak);
        expect(aantalKamers(standaardProgramma(woning, v, lagen, dak)), `${woning} ${lagen} laag ${v}`).toBeLessThanOrEqual(maxKamers(woning, v, lagen, dak));
        const n = maxKamers(woning, v, lagen, dak);
        const plan = planVoor(woning, lagen, dak, Array.from({ length: lagen }, (_, i) => (i === v ? programmaVan(soort, n, lagen) : undefined)));
        for (const k of plan.kamers.filter((k) => k.verdieping === v && k.soort === "kamer")) {
          const min = RUIMTES[soort].find((o) => o.naam === k.naam)!.minB;
          expect(Math.min(k.w, k.l), `${woning} ${lagen} laag ${v} ${k.naam}`).toBeGreaterThanOrEqual(min - 1e-6);
        }
      }
    }
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

  it("maakt van een open zolder één ruimte en zet geen toestel in het trapgat", () => {
    const plan = planVoor("rijwoning", 3, "zadeldak");
    const zolder = plan.kamers.filter((k) => k.verdieping === 2);
    expect(zolder).toHaveLength(1);
    expect(zolder[0].naam).toBe("Zolder");
    const trap = plan.trappen.find((t) => t.verdieping === 2)!;
    const plaatsing = plaatsToestellen([{ k: "medium", q: 2 }, { k: "axiaal", q: 1 }, { k: "kachel", q: 1 }], zolder, plan.trappen);
    expect(plaatsing).toHaveLength(4);
    for (const p of plaatsing) {
      const ax = zolder[0].x + p.x, az = zolder[0].z + p.z;
      const inTrap = ax > trap.x && ax < trap.x + trap.w && az > trap.z && az < trap.z + trap.l;
      expect(inTrap).toBe(false);
    }
  });
});
