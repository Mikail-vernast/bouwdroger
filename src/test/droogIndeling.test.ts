/**
 * @vitest-environment node
 *
 * De indeling van de droogsimulator volgt regels, geen vaste plattegrond: ze
 * moet ook kloppen bij het kleinste huis, het standaardhuis en het grootste huis
 * met alle extra ruimtes aan. Deze tests draaien de layout-functie over die drie
 * varianten (en over elke combinatie van woning, dak en bouwlagen) en houden de
 * regels vast: geen overlap, elke kamer een deur naar hal, gang of overloop,
 * minimale maten, en de trap op elke verdieping op dezelfde plek.
 */
import { describe, expect, it } from "vitest";
import {
  MAX_KAMERS,
  MAX_VERDIEPINGEN,
  MIN_KAMERS,
  MIN_MAAT,
  WONING,
  halBreedte,
  laagSoort,
  maxKamers,
  meubels,
  planVoor,
  plaatsToestellen,
  programmaVan,
  standaardProgramma,
  type Dak,
  type Kamer,
  type Opening,
  type Plan,
  type Woning,
} from "../lib/droogSimulator";

const WONINGEN: Woning[] = ["rijwoning", "halfopen", "open", "appartement"];
const DAKEN: Dak[] = ["zadeldak", "plat", "lessenaar"];

/** Zoveel kamers per bouwlaag als er passen, uit de standaardvolgorde. */
function vol(woning: Woning, lagen: number, dak: Dak): Plan {
  return planVoor(woning, lagen, dak, Array.from({ length: lagen }, (_, v) => programmaVan(laagSoort(woning, v, lagen, dak), maxKamers(woning, v, lagen, dak), lagen)));
}

const VARIANTEN: { naam: string; woning: Woning; lagen: number; dak: Dak; plan: () => Plan }[] = [
  { naam: "kleinste huis", woning: "rijwoning", lagen: 2, dak: "zadeldak", plan: () => planVoor("rijwoning", 2, "zadeldak", [programmaVan("gelijkvloers", MIN_KAMERS), programmaVan("boven", MIN_KAMERS)]) },
  { naam: "standaardhuis", woning: "halfopen", lagen: 2, dak: "zadeldak", plan: () => planVoor("halfopen", 2, "zadeldak") },
  { naam: "grootste huis, alles aan", woning: "open", lagen: MAX_VERDIEPINGEN, dak: "plat", plan: () => vol("open", MAX_VERDIEPINGEN, "plat") },
];

/** Alle plannen: elke woning, elk dak, elk aantal lagen, van weinig tot zoveel mogelijk kamers. */
function allePlannen(): { label: string; woning: Woning; plan: Plan }[] {
  const uit: { label: string; woning: Woning; plan: Plan }[] = [];
  for (const woning of WONINGEN) for (const dak of DAKEN) for (let lagen = 1; lagen <= MAX_VERDIEPINGEN; lagen++) {
    for (let n = MIN_KAMERS; n <= MAX_KAMERS; n++) {
      const plan = planVoor(woning, lagen, dak, Array.from({ length: lagen }, (_, v) => programmaVan(laagSoort(woning, v, lagen, dak), Math.min(n, maxKamers(woning, v, lagen, dak)), lagen)));
      uit.push({ label: `${woning} ${dak} ${lagen} lagen ${n} kamers`, woning, plan });
    }
  }
  return uit;
}

/** Liggen a en b aan weerskanten van de wand, en valt de opening binnen hun gedeelde stuk? */
function raakt(a: Kamer, b: Kamer, o: Opening): boolean {
  const e = 1e-6;
  if (o.as === "x") {
    const zijden = [a.z, a.z + a.l].some((z) => Math.abs(z - o.vast) < e) && [b.z, b.z + b.l].some((z) => Math.abs(z - o.vast) < e) && a.z !== b.z;
    return zijden && o.van >= Math.max(a.x, b.x) - e && o.tot <= Math.min(a.x + a.w, b.x + b.w) + e;
  }
  const zijden = [a.x, a.x + a.w].some((x) => Math.abs(x - o.vast) < e) && [b.x, b.x + b.w].some((x) => Math.abs(x - o.vast) < e) && a.x !== b.x;
  return zijden && o.van >= Math.max(a.z, b.z) - e && o.tot <= Math.min(a.z + a.l, b.z + b.l) + e;
}

/**
 * Een deur mag over de grens van twee vakken van dezelfde hal lopen (doorgang en
 * hal): aan elke kant van de wand moet het hele stuk door vakken gedekt zijn.
 */
function gedekt(laag: Kamer[], o: Opening): boolean {
  const e = 1e-6;
  const kant = (boven: boolean) => laag
    .filter((k) => (o.as === "x" ? Math.abs((boven ? k.z : k.z + k.l) - o.vast) < e : Math.abs((boven ? k.x : k.x + k.w) - o.vast) < e))
    .map((k) => (o.as === "x" ? [k.x, k.x + k.w] : [k.z, k.z + k.l]) as [number, number])
    .sort((p, q) => p[0] - q[0]);
  const dekt = (stukken: [number, number][]) => {
    let tot = o.van;
    for (const [a, b] of stukken) if (a <= tot + e && b > tot) tot = b;
    return tot >= o.tot - e;
  };
  return dekt(kant(true)) && dekt(kant(false));
}

const echteKamers = (plan: Plan) => plan.kamers.filter((k) => k.soort === "kamer" && !k.deel);

function controleer(label: string, woning: Woning, plan: Plan) {
  const { w, l } = WONING[woning];
  const lagen = Math.max(...plan.kamers.map((k) => k.verdieping)) + 1;
  for (let v = 0; v < lagen; v++) {
    const laag = plan.kamers.filter((k) => k.verdieping === v);
    const open = plan.openingen.filter((o) => o.verdieping === v);

    // Geen overlap, binnen de gevels, en samen precies de hele bouwlaag.
    expect(laag.reduce((s, k) => s + k.w * k.l, 0), `${label} laag ${v}: oppervlakte`).toBeCloseTo(w * l, 6);
    for (const k of laag) {
      expect(k.x >= -1e-9 && k.z >= -1e-9 && k.x + k.w <= w + 1e-9 && k.z + k.l <= l + 1e-9, `${label}: ${k.naam} buiten de gevels`).toBe(true);
    }
    for (let i = 0; i < laag.length; i++) for (let j = i + 1; j < laag.length; j++) {
      const a = laag[i], b = laag[j];
      const ox = Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x);
      const oz = Math.min(a.z + a.l, b.z + b.l) - Math.max(a.z, b.z);
      expect(ox > 1e-9 && oz > 1e-9, `${label}: ${a.naam} overlapt ${b.naam}`).toBe(false);
    }

    // Elke opening ligt in een wand tussen twee vakken (of in de voorgevel).
    for (const o of open) {
      expect(o.tot - o.van, `${label}: lege opening`).toBeGreaterThan(0);
      if (o.soort === "voordeur") continue;
      expect(laag.some((a) => laag.some((b) => a !== b && raakt(a, b, o))) || gedekt(laag, o), `${label} laag ${v}: opening ${JSON.stringify(o)} hangt in de lucht`).toBe(true);
    }

    const circulatie = laag.filter((k) => k.soort === "circulatie");
    for (const k of laag.filter((kk) => kk.soort === "kamer" && !kk.deel)) {
      // Een open zolder heeft de trap in zich; de keuken is open naar de leefruimte.
      if (k.naam === "Zolder" && laag.length === 1) continue;
      const naar = k.naam === "Keuken" ? laag.filter((kk) => kk.naam === "Leefruimte") : circulatie;
      const soorten = k.naam === "Keuken" ? ["open", "deur"] : ["deur"];
      const deur = open.some((o) => soorten.includes(o.soort) && naar.some((g) => raakt(k, g, o)));
      expect(deur, `${label} laag ${v}: ${k.naam} heeft geen deur naar hal, gang of overloop`).toBe(true);

      // Minimale maten, nooit kleiner.
      const [kort, lang] = MIN_MAAT[k.naam] ?? [0, 0];
      expect(Math.min(k.w, k.l), `${label}: ${k.naam} te smal (${k.w} × ${k.l})`).toBeGreaterThanOrEqual(kort - 1e-6);
      expect(Math.max(k.w, k.l), `${label}: ${k.naam} te kort (${k.w} × ${k.l})`).toBeGreaterThanOrEqual(lang - 1e-6);
    }
    // Een toilet gaat open op de hal of overloop, nooit op keuken of leefruimte.
    for (const t of laag.filter((k) => k.naam === "Toilet")) {
      const deuren = open.filter((o) => o.soort !== "voordeur" && laag.some((b) => b !== t && raakt(t, b, o)));
      for (const o of deuren) {
        const ander = laag.find((b) => b !== t && raakt(t, b, o))!;
        expect(ander.soort, `${label}: toilet opent op ${ander.naam}`).toBe("circulatie");
      }
    }
    // Hal minstens 1,8 m, gang en overloop minstens 1 m breed.
    for (const g of circulatie.filter((k) => !k.deel)) {
      const min = g.naam === "Hal" ? 1.8 : 1;
      expect(Math.min(g.w, g.l), `${label}: ${g.naam} te smal`).toBeGreaterThanOrEqual(min - 1e-6);
    }
  }
  // De trap staat op elke verdieping op dezelfde plek.
  expect(new Set(plan.trappen.map((t) => `${t.x}|${t.z}|${t.w}|${t.l}`)).size).toBeLessThanOrEqual(1);
  expect(plan.trappen).toHaveLength(lagen > 1 ? lagen : 0);
}

describe("indeling: drie varianten", () => {
  for (const vari of VARIANTEN) {
    it(`${vari.naam}: geen overlap, overal een deur, minimale maten, trap op zijn plek`, () => {
      controleer(vari.naam, vari.woning, vari.plan());
    });
  }

  it("het grootste huis heeft echt alle extra ruimtes: bureau, berging en wasplaats beneden, badkamer boven", () => {
    const plan = VARIANTEN[2].plan();
    const namen = (v: number) => echteKamers(plan).filter((k) => k.verdieping === v).map((k) => k.naam);
    expect(namen(0)).toEqual(expect.arrayContaining(["Leefruimte", "Keuken", "Toilet", "Bureau"]));
    expect(namen(1)).toEqual(expect.arrayContaining(["Slaapkamer", "Badkamer"]));
    expect(namen(1).filter((n) => n === "Slaapkamer").length).toBeGreaterThanOrEqual(3);
  });
});

describe("indeling: elke combinatie", () => {
  it("houdt de regels bij elke woning, elk dak, elk aantal lagen en kamers", () => {
    for (const { label, woning, plan } of allePlannen()) controleer(label, woning, plan);
  });
});

describe("indeling: een normale Belgische woning", () => {
  const plan = planVoor("halfopen", 2, "zadeldak");
  const { w, l } = WONING.halfopen;
  const laag0 = plan.kamers.filter((k) => k.verdieping === 0);
  const vind = (naam: string, v = 0) => plan.kamers.find((k) => k.verdieping === v && k.naam === naam && !k.deel)!;

  it("legt hal en voordeur aan de straatkant, en de leefzone over de volle breedte aan de tuinkant", () => {
    const hal = vind("Hal");
    expect(hal.z + hal.l).toBeCloseTo(l);
    expect(Math.min(hal.w, hal.l)).toBeGreaterThanOrEqual(1.8);
    const voordeur = plan.openingen.find((o) => o.soort === "voordeur")!;
    expect(voordeur.van).toBeGreaterThanOrEqual(hal.x);
    expect(voordeur.tot).toBeLessThanOrEqual(hal.x + hal.w);
    const tuin = laag0.filter((k) => k.z < 1e-6);
    expect(tuin.map((k) => k.naam).sort()).toEqual(["Keuken", "Leefruimte"]);
    expect(tuin.reduce((s, k) => s + k.w, 0)).toBeCloseTo(w);
  });

  it("zet de trap in de hal, tegen een muur, recht en met 14 treden van ongeveer 25 cm", () => {
    const hal = laag0.filter((k) => k.naam === "Hal");
    const t = plan.trappen.find((tt) => tt.verdieping === 0)!;
    expect(t.x).toBe(0); // tegen de linkermuur
    expect(t.l / 14).toBeCloseTo(0.25, 2);
    expect(t.w).toBeGreaterThanOrEqual(0.9);
    // De trap ligt helemaal binnen de hal, niet in de leefruimte.
    expect(hal.some((h) => t.x >= h.x - 1e-6 && t.x + t.w <= h.x + h.w + 1e-6 && t.z >= h.z - 1e-6 && t.z + t.l <= h.z + h.l + 1e-6)).toBe(true);
  });

  it("maakt van het toilet een hokje van 0,95 × 1,5 m naast de trap, met de deur naar de hal", () => {
    const t = vind("Toilet");
    expect([t.w, t.l].sort()).toEqual([0.95, 1.5]);
    const trap = plan.trappen.find((tt) => tt.verdieping === 0)!;
    expect(Math.abs(t.z + t.l - trap.z)).toBeLessThan(1e-6); // de trap begint (bovenaan) waar het toilet eindigt
    expect(t.x).toBe(trap.x);
  });

  it("gaat van de hal via één deur naar de leefruimte", () => {
    const leef = vind("Leefruimte");
    const hal = laag0.filter((k) => k.soort === "circulatie");
    const deuren = plan.openingen.filter((o) => o.verdieping === 0 && o.soort === "deur" && hal.some((h) => raakt(h, leef, o)));
    expect(deuren).toHaveLength(1);
  });

  it("legt de badkamer boven de keuken en de overloop boven de kern", () => {
    const bad = vind("Badkamer", 1), keuken = vind("Keuken");
    const overlap = Math.min(bad.x + bad.w, keuken.x + keuken.w) - Math.max(bad.x, keuken.x);
    expect(overlap).toBeGreaterThan(1);
    const overloop = vind("Overloop", 1), toilet = vind("Toilet");
    expect(overloop.z).toBeCloseTo(toilet.z);
  });

  it("legt elke slaapkamer en de leefruimte tegen een buitenmuur", () => {
    for (const k of plan.kamers.filter((kk) => kk.naam === "Slaapkamer" || (kk.naam === "Leefruimte" && !kk.deel))) {
      const buiten = k.z < 1e-6 || k.z + k.l > l - 1e-6 || k.x + k.w > w - 1e-6;
      expect(buiten, `${k.naam} op laag ${k.verdieping}`).toBe(true);
    }
  });

  it("laat de doorgang naast de trap breed genoeg: hal min trap is minstens 95 cm", () => {
    const t = plan.trappen[0];
    expect(halBreedte(w) - (t.x + t.w)).toBeGreaterThanOrEqual(0.95 - 1e-6);
  });

  it("draait elke binnendeur open tegen een muur: het scharnier zit 10 cm uit een hoek", () => {
    for (const o of plan.openingen.filter((oo) => oo.soort === "deur")) {
      expect(o.scharnier, JSON.stringify(o)).toBeDefined();
      expect(o.tot - o.van).toBeLessThanOrEqual(0.85 + 1e-6);
    }
  });
});

describe("indeling: als er kamers bijkomen", () => {
  it("houdt hal, trap en overloop op hun plek bij meer slaapkamers en een extra verdieping", () => {
    const klein = planVoor("halfopen", 2, "zadeldak", [standaardProgramma("halfopen", 0, 2, "zadeldak"), programmaVan("boven", 2)]);
    const groot = planVoor("halfopen", 3, "plat", [programmaVan("gelijkvloers", 6), programmaVan("boven", 6), programmaVan("boven", 6)]);
    const kern = (p: Plan, v: number) => p.kamers.filter((k) => k.verdieping === v && k.soort === "circulatie" && !k.deel && k.naam !== "Gang").map((k) => `${k.naam}@${k.x},${k.z}`);
    expect(kern(groot, 0)).toEqual(kern(klein, 0));
    expect(kern(groot, 1)[0].split("@")[1]).toBe(kern(klein, 1)[0].split("@")[1]);
    expect(`${groot.trappen[0].x},${groot.trappen[0].z}`).toBe(`${klein.trappen[0].x},${klein.trappen[0].z}`);
  });

  it("zet extra ruimtes beneden naast de hal of aan een gang, nooit in de leefzone aan de tuinkant", () => {
    for (const woning of WONINGEN) {
      const plan = vol(woning, 2, "zadeldak");
      const extra = echteKamers(plan).filter((k) => k.verdieping === 0 && !["Leefruimte", "Keuken", "Toilet"].includes(k.naam));
      for (const k of extra) expect(k.z, `${woning}: ${k.naam}`).toBeGreaterThan(0);
    }
  });

  it("verdeelt de slaapkamers boven over beide kanten van de overloop", () => {
    const plan = planVoor("open", 2, "zadeldak", [undefined, programmaVan("boven", 6)]);
    const overloop = plan.kamers.find((k) => k.verdieping === 1 && k.naam === "Overloop" && !k.deel)!;
    const slaap = plan.kamers.filter((k) => k.verdieping === 1 && k.naam === "Slaapkamer");
    expect(slaap.some((k) => k.z + k.l <= overloop.z + 1e-6)).toBe(true);
    expect(slaap.some((k) => k.z >= overloop.z + overloop.l - 1e-6)).toBe(true);
  });
});

describe("toestellen", () => {
  it("staan niet op de trap, niet in een deur en niet in de eettafel of zetel", () => {
    for (const vari of VARIANTEN) {
      const plan = vari.plan();
      const items = [{ k: "medium" as const, q: 4 }, { k: "small" as const, q: 3 }, { k: "axiaal" as const, q: 3 }, { k: "kachel" as const, q: 2 }];
      const plaatsing = plaatsToestellen(items, plan.kamers, plan.trappen, plan.openingen);
      expect(plaatsing).toHaveLength(12);
      for (const p of plaatsing) {
        const k = plan.kamers.find((kk) => kk.id === p.kamer)!;
        const ax = k.x + p.x, az = k.z + p.z;
        expect(p.x > 0 && p.x < k.w && p.z > 0 && p.z < k.l, `${vari.naam}: ${p.k} buiten ${k.naam}`).toBe(true);
        for (const t of plan.trappen.filter((tt) => tt.verdieping === k.verdieping)) {
          const op = ax > t.x - 0.3 && ax < t.x + t.w + 0.3 && az > t.z - 0.3 && az < t.z + t.l + 0.3;
          expect(op, `${vari.naam}: ${p.k} op de trap`).toBe(false);
        }
        for (const o of plan.openingen.filter((oo) => oo.verdieping === k.verdieping && oo.soort === "deur")) {
          const m = (o.van + o.tot) / 2;
          const [dx, dz] = o.as === "x" ? [m, o.vast] : [o.vast, m];
          expect(Math.hypot(dx - ax, dz - az), `${vari.naam}: ${p.k} in een deur van ${k.naam}`).toBeGreaterThan(0.6);
        }
        for (const m of meubels(k, plan.kamers)) {
          const z = m.zone;
          expect(p.x > z.x0 && p.x < z.x1 && p.z > z.z0 && p.z < z.z1, `${vari.naam}: ${p.k} in de ${m.soort}`).toBe(false);
        }
      }
    }
  });

  it("blijven zichtbaar: in een kamer met plaats minstens 1 m van de opengewerkte voor- en rechtermuur", () => {
    const plan = planVoor("halfopen", 2, "zadeldak");
    const plaatsing = plaatsToestellen([{ k: "medium", q: 3 }, { k: "axiaal", q: 2 }], plan.kamers, plan.trappen, plan.openingen);
    for (const p of plaatsing) {
      const k = plan.kamers.find((kk) => kk.id === p.kamer)!;
      if (k.w < 3 || k.l < 3) continue;
      expect(k.w - p.x, `${p.k} in ${k.naam}`).toBeGreaterThanOrEqual(1);
      expect(k.l - p.z, `${p.k} in ${k.naam}`).toBeGreaterThanOrEqual(1);
    }
  });
});
