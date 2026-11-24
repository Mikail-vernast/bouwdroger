/**
 * @vitest-environment node
 *
 * De regels van een woning die klopt, over élke combinatie die de bezoeker kan
 * kiezen: woningtype × gevelbreedte × bouwlagen × dak × programma per laag.
 * Een programma is welke ruimtes er op een bouwlaag zijn; per laag lopen alle
 * geldige programma's door, de andere lagen staan op hun standaard.
 *
 * De controles hier rekenen zelf (rechthoeken, en een raster van 10 cm voor de
 * bereikbaarheid) en lenen niets van de indelingscode: een fout in een hulpfunctie daar mag hier niet meeliften.
 */
import { describe, expect, it } from "vitest";
import {
  BREEDTES,
  MAX_KAMERS,
  MAX_VERDIEPINGEN,
  RUIMTES,
  WONING,
  laagSoort,
  planVoor,
  standaardProgramma,
  type Dak,
  type Kamer,
  type LaagSoort,
  type Opening,
  type Plan,
  type Programma,
  type Woning,
} from "../lib/droogSimulator";

const WONINGEN: Woning[] = ["rijwoning", "halfopen", "open", "appartement"];
const MOET_RAAM = ["Slaapkamer", "Leefruimte", "Keuken", "Bureau"];
const E = 1e-6;

interface R { x0: number; x1: number; z0: number; z1: number }
const vak = (k: Kamer): R => ({ x0: k.x, x1: k.x + k.w, z0: k.z, z1: k.z + k.l });
const snijdt = (a: R, b: R) => a.x0 < b.x1 - E && b.x0 < a.x1 - E && a.z0 < b.z1 - E && b.z0 < a.z1 - E;
/** Ligt `a` helemaal in de vakken samen? Exact: haal elk vak eraf en kijk wat overblijft. */
function binnen(a: R, vakken: R[]): boolean {
  let rest: R[] = [a];
  for (const b of vakken) {
    rest = rest.flatMap((r) => {
      if (!snijdt(r, b)) return [r];
      const uit: R[] = [];
      if (b.x0 > r.x0 + E) uit.push({ ...r, x1: b.x0 });
      if (b.x1 < r.x1 - E) uit.push({ ...r, x0: b.x1 });
      const x0 = Math.max(r.x0, b.x0), x1 = Math.min(r.x1, b.x1);
      if (b.z0 > r.z0 + E) uit.push({ x0, x1, z0: r.z0, z1: b.z0 });
      if (b.z1 < r.z1 - E) uit.push({ x0, x1, z0: b.z1, z1: r.z1 });
      return uit;
    });
  }
  // Wat overblijft mag hooguit een naad van een millimeter zijn.
  return rest.every((r) => r.x1 - r.x0 < 1e-3 || r.z1 - r.z0 < 1e-3);
}
/** Het vierkant dat een deurblad bestrijkt, of de strook aan de andere kant. */
function kantVak(o: Opening, diepte: number, kant: 1 | -1): R {
  const n0 = kant > 0 ? o.vast : o.vast - diepte, n1 = kant > 0 ? o.vast + diepte : o.vast;
  return o.as === "x" ? { x0: o.van, x1: o.tot, z0: n0, z1: n1 } : { x0: n0, x1: n1, z0: o.van, z1: o.tot };
}

/** Alle programma's die de bezoeker op een bouwlaag van deze soort kan kiezen. */
function allePrograms(soort: LaagSoort): Programma[] {
  const opties = RUIMTES[soort];
  const uit: Programma[] = [];
  const stap = (i: number, p: Programma, n: number) => {
    if (i === opties.length) {
      if (n >= 1 && n <= MAX_KAMERS) uit.push({ ...p });
      return;
    }
    const o = opties[i];
    for (let q = o.min; q <= o.max && n + q <= MAX_KAMERS; q++) {
      if (q) p[o.naam] = q;
      else delete p[o.naam];
      stap(i + 1, p, n + q);
    }
    delete p[o.naam];
  };
  stap(0, {}, 0);
  return uit;
}

interface Geval { woning: Woning; b: number; dak: Dak; lagen: number; v: number; programma: Programma; plan: Plan }

/** Elke combinatie, één bouwlaag tegelijk met al haar programma's. */
function* gevallen(): Generator<Geval> {
  for (const woning of WONINGEN) for (const b of BREEDTES[woning]) for (const dak of WONING[woning].dakToegelaten)
    for (let lagen = 1; lagen <= MAX_VERDIEPINGEN; lagen++) {
      const standaard = Array.from({ length: lagen }, (_, i) => standaardProgramma(woning, i, lagen, dak, b));
      for (let v = 0; v < lagen; v++) for (const programma of allePrograms(laagSoort(woning, v, lagen, dak))) {
        const programmas = standaard.map((p, i) => (i === v ? programma : p));
        yield { woning, b, dak, lagen, v, programma, plan: planVoor(woning, lagen, dak, programmas, b) };
      }
    }
}

/** De regels voor bouwlaag v van een plan; geeft de overtredingen terug. */
function overtredingen({ woning, b: w, lagen, v, dak, plan }: Geval): string[] {
  const fout: string[] = [];
  const { l, buren } = WONING[woning];
  const laag = plan.kamers.filter((k) => k.verdieping === v);
  const circ = laag.filter((k) => k.soort === "circulatie");
  const circV = circ.map(vak);
  const kamers = laag.filter((k) => k.soort === "kamer");
  const open = laag.length === 1 && laag[0].naam === "Zolder";
  const openingen = plan.openingen.filter((o) => o.verdieping === v);
  const trappen = plan.trappen.filter((t) => t.verdieping === v);
  const trapV = trappen.map((t) => ({ x0: t.x, x1: t.x + t.w, z0: t.z, z1: t.z + t.l }));
  const vrijeLoop = open ? [vak(laag[0])] : circV;

  // ── voordeur en hal
  if (v === 0) {
    const vd = openingen.filter((o) => o.soort === "voordeur");
    if (vd.length !== 1) fout.push(`${vd.length} voordeuren`);
    for (const o of vd) {
      // Een appartement komt binnen vanaf de trappenhal links: voordeur in de linkerwand.
      const app = woning === "appartement";
      const binnenkant = app ? { x0: 0, x1: 0.6, z0: o.van, z1: o.tot } : { x0: o.van, x1: o.tot, z0: l - 0.6, z1: l };
      const hal = circ.find((k) => binnen(binnenkant, [vak(k)]));
      if (app ? o.as !== "z" || Math.abs(o.vast) > E : o.as !== "x" || Math.abs(o.vast - l) > E) fout.push(app ? "voordeur niet in de linkerwand" : "voordeur niet in de voorgevel");
      if (!hal || hal.naam !== "Hal") fout.push(`voordeur komt uit in ${hal?.naam ?? "een kamer"}, niet in de hal`);
    }
  }

  // ── trap
  const op = trappen.filter((t) => t.op);
  const gat = trappen.filter((t) => !t.op);
  if (lagen > 1 && v < lagen - 1 && op.length !== 1) fout.push(`${op.length} trappen naar boven`);
  if (v === lagen - 1 && op.length) fout.push("trap naar boven op de bovenste laag");
  if (v > 0 && gat.length !== 1) fout.push(`${gat.length} trapgaten`);
  // Vrije vloer vóór de eerste trede en boven aan de trap, 80 cm, in de looprichting.
  const voorTrede = (t: (typeof trappen)[number]): R => (t.richting > 0
    ? { x0: t.x - 0.8, x1: t.x, z0: t.z, z1: t.z + t.l } : { x0: t.x + t.w, x1: t.x + t.w + 0.8, z0: t.z, z1: t.z + t.l });
  const naTrede = (t: (typeof trappen)[number]): R => (t.richting > 0
    ? { x0: t.x + t.w, x1: t.x + t.w + 0.8, z0: t.z, z1: t.z + t.l } : { x0: t.x - 0.8, x1: t.x, z0: t.z, z1: t.z + t.l });
  for (const t of op) {
    const r = { x0: t.x, x1: t.x + t.w, z0: t.z, z1: t.z + t.l };
    if (!binnen(r, circV)) fout.push("trap staat niet in hal, gang of overloop");
    const a = voorTrede(t);
    if (!binnen(a, circV) || trapV.some((x) => snijdt(a, x))) fout.push("geen 80 cm vrije vloer voor de eerste trede");
    const boven = plan.trappen.find((u) => u.verdieping === v + 1 && !u.op);
    if (!boven || boven.richting !== t.richting || [boven.x - t.x, boven.z - t.z, boven.w - t.w, boven.l - t.l].some((d) => Math.abs(d) > E)) fout.push("trapgat ligt niet recht boven de trap");
  }
  for (const t of gat) {
    const r = { x0: t.x, x1: t.x + t.w, z0: t.z, z1: t.z + t.l };
    if (!binnen(r, vrijeLoop)) fout.push("trapgat ligt niet in de overloop");
    const b = naTrede(t);
    if (!binnen(b, vrijeLoop) || trapV.some((x) => snijdt(b, x))) fout.push("trap komt boven niet uit op 80 cm overloop");
  }

  // ── bereikbaar: van de voordeur (gelijkvloers) of de aankomst van de trap
  // over de vrije vloer van hal, gang en overloop naar elke deur en elke trap.
  {
    const S = 0.1;
    const vrijPunt = (x: number, z: number) =>
      vrijeLoop.some((b) => x > b.x0 && x < b.x1 && z > b.z0 && z < b.z1) && !trapV.some((t) => x > t.x0 && x < t.x1 && z > t.z0 && z < t.z1);
    const sleutel = (i: number, j: number) => i * 10000 + j;
    const cel = (x: number, z: number) => [Math.floor(x / S), Math.floor(z / S)] as const;
    const start = v === 0
      ? openingen.filter((o) => o.soort === "voordeur").map((o) => (o.as === "z" ? [0.3, (o.van + o.tot) / 2] as const : [(o.van + o.tot) / 2, l - 0.3] as const))
      : gat.map((t) => { const b = naTrede(t); return [(b.x0 + b.x1) / 2, (b.z0 + b.z1) / 2] as const; });
    const gezien = new Set<number>();
    const rij: [number, number][] = [];
    for (const [x, z] of start) { const [i, j] = cel(x, z); if (vrijPunt((i + 0.5) * S, (j + 0.5) * S)) { gezien.add(sleutel(i, j)); rij.push([i, j]); } }
    while (rij.length) {
      const [i, j] = rij.pop()!;
      for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const ni = i + di, nj = j + dj, k = sleutel(ni, nj);
        if (gezien.has(k) || !vrijPunt((ni + 0.5) * S, (nj + 0.5) * S)) continue;
        gezien.add(k);
        rij.push([ni, nj]);
      }
    }
    const bereikt = (r: R) => {
      for (let x = r.x0 + S / 2; x < r.x1; x += S) for (let z = r.z0 + S / 2; z < r.z1; z += S) { const [i, j] = cel(x, z); if (gezien.has(sleutel(i, j))) return true; }
      return false;
    };
    if (start.length === 0 && !open) fout.push("geen ingang op deze laag");
    else if (!open) {
      for (const o of openingen.filter((x) => x.soort === "deur")) if (!bereikt(kantVak(o, 0.5, (-o.kant) as 1 | -1))) fout.push("deur niet bereikbaar vanaf de trap of de voordeur");
      for (const t of op) if (!bereikt(voorTrede(t))) fout.push("trap naar boven niet bereikbaar");
    }
  }

  // ── deuren
  const zwaai: R[] = [];
  for (const o of openingen.filter((x) => x.soort === "deur")) {
    const b = o.tot - o.van;
    if (b < 0.7 - E) fout.push(`deur van ${b.toFixed(2)} m`);
    const sq = kantVak(o, b, o.kant);
    const kamer = kamers.find((k) => binnen(sq, [vak(k)]));
    if (!kamer) { fout.push(`deur op ${o.vast.toFixed(2)} draait niet binnen één kamer`); continue; }
    // De deur zit minstens 10 cm van de hoeken van de kamer.
    const [a0, a1] = o.as === "x" ? [kamer.x, kamer.x + kamer.w] : [kamer.z, kamer.z + kamer.l];
    if (o.van < a0 + 0.1 - E || o.tot > a1 - 0.1 + E) fout.push(`deur van ${kamer.naam} tegen een hoek`);
    // Aan de andere kant: gang, hal of overloop, ook 10 cm voorbij de deur, en niet de trap.
    const gang = kantVak({ ...o, van: o.van - 0.1, tot: o.tot + 0.1 }, 0.8, (-o.kant) as 1 | -1);
    if (!binnen(gang, circV)) fout.push(`deur van ${kamer.naam} komt niet uit op de circulatie`);
    const voor = kantVak(o, 0.8, (-o.kant) as 1 | -1);
    if (trapV.some((t) => snijdt(voor, t))) fout.push(`deur van ${kamer.naam} in de trapzone`);
    if (zwaai.some((z) => snijdt(z, sq))) fout.push(`deur van ${kamer.naam} draait tegen een andere deur`);
    for (const p of openingen.filter((x) => x.soort === "open")) {
      if (snijdt(sq, kantVak(p, 0.4, 1)) || snijdt(sq, kantVak(p, 0.4, -1))) fout.push(`deur van ${kamer.naam} draait in een doorgang`);
    }
    zwaai.push(sq);
  }
  // Elke kamer bereikbaar: een eigen deur, of (keuken en leefruimte) via een open doorgang.
  const deurVan = (k: Kamer) => openingen.filter((o) => o.soort === "deur" && binnen(kantVak(o, o.tot - o.van, o.kant), [vak(k)]));
  const opWand = (k: Kamer, o: Opening) => {
    const r = vak(k);
    const opRand = o.as === "x" ? [r.z0, r.z1].some((z) => Math.abs(z - o.vast) < E) && o.van >= r.x0 - E && o.tot <= r.x1 + E
      : [r.x0, r.x1].some((x) => Math.abs(x - o.vast) < E) && o.van >= r.z0 - E && o.tot <= r.z1 + E;
    return opRand;
  };
  for (const k of kamers) {
    if (open) continue;
    const deuren = deurVan(k);
    const doorgangen = openingen.filter((o) => o.soort === "open" && opWand(k, o));
    if (deuren.length > 1) fout.push(`${k.naam} heeft ${deuren.length} deuren`);
    if (k.naam === "Slaapkamer" && deuren.length + doorgangen.length !== 1) fout.push("slaapkamer is doorloopbaar");
    if (deuren.length === 0) {
      const partner = doorgangen.length && kamers.find((p) => p !== k && doorgangen.some((o) => opWand(p, o)));
      const viaPartner = partner && ["Keuken", "Leefruimte"].includes(k.naam) && ["Keuken", "Leefruimte"].includes(partner.naam) && deurVan(partner).length === 1;
      if (!viaPartner) fout.push(`${k.naam} heeft geen deur`);
    }
  }
  for (const o of openingen.filter((x) => x.soort === "open")) {
    const kant = laag.filter((k) => opWand(k, o));
    const kamerKant = kant.filter((k) => k.soort === "kamer");
    if (kamerKant.length && !(kamerKant.length === 2 && kamerKant.every((k) => k.naam === "Keuken" || k.naam === "Leefruimte"))) {
      fout.push(`open doorgang bij ${kamerKant.map((k) => k.naam).join("/")}`);
    }
  }

  // ── ramen
  const vrij = { voor: true, achter: true, links: buren === 0, zij: buren < 2 };
  const ramen = plan.ramen.filter((r) => r.verdieping === v);
  for (const r of ramen) {
    const k = laag.find((kk) => kk.id === r.kamer);
    if (!k) { fout.push("raam zonder kamer"); continue; }
    if (!vrij[r.gevel]) fout.push(`raam in een gemene muur (${r.gevel})`);
    const tegen = r.gevel === "voor" ? k.z + k.l > l - E : r.gevel === "achter" ? k.z < E : r.gevel === "links" ? k.x < E : k.x + k.w > w - E;
    if (!tegen) fout.push(`raam van ${k.naam} in de ${r.gevel}gevel, maar de kamer ligt er niet tegen`);
    const [a0, a1] = r.gevel === "voor" || r.gevel === "achter" ? [k.x, k.x + k.w] : [k.z, k.z + k.l];
    if (r.van < a0 + 0.1 - E || r.tot > a1 - 0.1 + E) fout.push(`raam van ${k.naam} loopt over een binnenmuur`);
    const wand = { voor: "voor", achter: "achter", links: "links", zij: "rechts" }[r.gevel];
    if ((k.naam === "Keuken" || k.naam === "Badkamer") && k.inrichting === wand) fout.push(`raam achter de ${k.naam === "Keuken" ? "keukenkasten" : "badkamerinrichting"}`);
    if (ramen.some((s) => s !== r && s.gevel === r.gevel && s.van < r.tot - E && r.van < s.tot - E)) fout.push("twee ramen over elkaar");
  }
  for (const k of kamers) {
    const eigen = ramen.filter((r) => r.kamer === k.id);
    if (MOET_RAAM.includes(k.naam) && eigen.length === 0) fout.push(`${k.naam} zonder raam`);
    if ((k.naam === "Badkamer" || k.naam === "Toilet") && eigen.length === 0 && !k.rooster) fout.push(`${k.naam} zonder raam en zonder rooster`);
  }

  // ── maten
  for (const k of kamers) {
    const opt = RUIMTES[laagSoort(woning, v, lagen, dak)].find((o) => o.naam === k.naam)!;
    if (Math.min(k.w, k.l) < opt.minB - E) fout.push(`${k.naam} van ${k.w.toFixed(2)} × ${k.l.toFixed(2)} m is smaller dan ${opt.minB} m`);
    if (k.naam !== "Toilet" && !open && k.l < 2.6 - E) fout.push(`${k.naam} is maar ${k.l.toFixed(2)} m diep`);
  }
  return fout;
}

describe("indeling: regels over alle combinaties", () => {
  it("houdt zich aan alle regels, voor elke woning, breedte, laag, dak en elk programma", { timeout: 120_000 }, () => {
    const fouten = new Map<string, string>();
    let n = 0;
    for (const g of gevallen()) {
      n++;
      for (const f of overtredingen(g)) {
        if (!fouten.has(f)) fouten.set(f, `${g.woning} ${g.b} m, ${g.lagen} lagen, ${g.dak}, laag ${g.v}: ${JSON.stringify(g.programma)}`);
      }
    }
    expect(n).toBeGreaterThan(10_000);
    expect([...fouten].map(([f, waar]) => `${f} — bv. ${waar}`)).toEqual([]);
  });

  it("legt de badkamer boven de keuken of de wasplaats als die beneden aan de tuinkant ligt", () => {
    for (const woning of WONINGEN) for (const b of BREEDTES[woning]) for (let lagen = 2; lagen <= 3; lagen++) {
      const dak = WONING[woning].dakToegelaten[0];
      const plan = planVoor(woning, lagen, dak, [], b);
      const bad = plan.kamers.find((k) => k.verdieping === 1 && k.naam === "Badkamer");
      const nat = plan.kamers.filter((k) => k.verdieping === 0 && (k.naam === "Keuken" || k.naam === "Wasplaats"));
      if (!bad || !nat.length) continue;
      const erboven = nat.some((k) => Math.min(k.x + k.w, bad.x + bad.w) - Math.max(k.x, bad.x) > 0.3 && Math.min(k.z + k.l, bad.z + bad.l) - Math.max(k.z, bad.z) > 0.3);
      expect(erboven, `${woning} ${b} m, ${lagen} lagen`).toBe(true);
    }
  });

  it("geeft een woning zonder trap geen traphal: de gang blijft 1,2 m", () => {
    for (const woning of WONINGEN) {
      const plan = planVoor(woning, 1, "plat");
      expect(plan.trappen).toHaveLength(0);
      for (const g of plan.kamers.filter((k) => k.naam === "Gang")) expect(Math.min(g.w, g.l)).toBeCloseTo(1.2, 6);
    }
  });
});
