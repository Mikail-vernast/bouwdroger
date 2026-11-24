/**
 * @vitest-environment node
 *
 * De meubels uit de kit staan nooit in de weg: niet in de draaicirkel van een
 * deur, niet in een doorgang of op de trap, niet voor een raam (tenzij lager
 * dan de vensterbank), niet door een muur, niet in elkaar. Hoge kasten staan
 * alleen tegen een muur die in de opengewerkte laag op volle hoogte blijft.
 * Over elke woning, breedte, laag en dak, met de standaardindeling en met de
 * grootste en kleinste programma's.
 */
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import {
  BREEDTES, MAX_KAMERS, MAX_VERDIEPINGEN, WONING, laagSoort, planVoor, programmaVan, maxKamers,
  aanloopVak, bordesVak, doorgangVak, trapVak, zwaaiVak, type Vak, type Woning,
} from "../lib/droogSimulator";
import { richLaagIn, INGERICHTE_KAMERS, type Manifest } from "../components/simulator/3d/interieur/plaatsing";
import { afwerkingVoor } from "../components/simulator/3d/interieur/palet";

const kit = JSON.parse(readFileSync(new URL("../../public/simulator/3d/interieur/interieur.json", import.meta.url), "utf8")) as Manifest;
const meta = new Map(kit.objecten.map((o) => [o.naam, o]));
const E = 2e-3;
const snijdt = (a: Vak, b: Vak) => a.x0 < b.x1 - E && b.x0 < a.x1 - E && a.z0 < b.z1 - E && b.z0 < a.z1 - E;
const WONINGEN: Woning[] = ["rijwoning", "halfopen", "open", "appartement"];

function* plannen() {
  for (const woning of WONINGEN) for (const b of BREEDTES[woning]) for (const dak of WONING[woning].dakToegelaten)
    for (let lagen = 1; lagen <= MAX_VERDIEPINGEN; lagen++) {
      for (const n of [undefined, 1, 3, MAX_KAMERS]) {
        const programmas = Array.from({ length: lagen }, (_, v) => (n === undefined ? undefined : programmaVan(laagSoort(woning, v, lagen, dak), Math.min(n, maxKamers(woning, v, lagen, dak, b)), lagen)));
        yield { woning, b, dak, lagen, plan: planVoor(woning, lagen, dak, programmas, b) };
      }
    }
}

describe("interieur: plaatsing", () => {
  it("zet niets in de weg, en hoge kasten alleen tegen een hoge muur", { timeout: 120_000 }, () => {
    const fouten = new Map<string, string>();
    const tel = { leef: 0, zetel: 0, slaap: 0, bed: 0, keuken: 0, blok: 0 };
    for (const { woning, b: w, dak, lagen, plan } of plannen()) {
      const { l } = WONING[woning];
      const afw = afwerkingVoor(plan.kamers);
      for (let v = 0; v < lagen; v++) {
        const laag = plan.kamers.filter((k) => k.verdieping === v);
        const openingen = plan.openingen.filter((o) => o.verdieping === v);
        const ramen = plan.ramen.filter((r) => r.verdieping === v);
        const trappen = plan.trappen.filter((t) => t.verdieping === v);
        const ins = richLaagIn({ laag, openingen, ramen, trappen, w, l, kit, palet: (k) => afw.get(k.id)!.palet });
        const waar = `${woning} ${w} m, ${lagen} lagen, ${dak}, laag ${v}`;
        const fout = (f: string) => { if (!fouten.has(f)) fouten.set(f, waar); };
        const hinder: Vak[] = [
          ...openingen.filter((o) => o.soort === "deur").map(zwaaiVak),
          ...openingen.filter((o) => o.soort === "open").map((o) => doorgangVak(o, 0.4)),
          ...trappen.flatMap((t) => [trapVak(t), aanloopVak(t, 0.8), bordesVak(t, 0.8)]),
        ];
        for (const k of laag.filter((kk) => INGERICHTE_KAMERS.has(kk.naam))) {
          const hier = ins.stukken.filter((s) => s.kamer === k.id);
          if (k.naam === "Leefruimte") { tel.leef++; if (hier.some((s) => s.naam.startsWith("leefruimte_zetel"))) tel.zetel++; }
          if (k.naam === "Slaapkamer") { tel.slaap++; if (hier.some((s) => s.naam.startsWith("slaapkamer_bed"))) tel.bed++; }
          if (k.naam === "Keuken") { tel.keuken++; if (hier.some((s) => s.naam === "keuken_werkblad")) tel.blok++; }
          const kv: Vak = { x0: k.x, x1: k.x + k.w, z0: k.z, z1: k.z + k.l };
          for (const s of hier) {
            const o = meta.get(s.naam)!;
            // Hoog: alleen tegen de achtergevel (rug naar -z) of de linkergevel (rug naar -x).
            if (o.hoog) {
              const achter = Math.abs(s.rot) < 1e-6 && k.z < 1e-6 && s.z < 0.1;
              const links = Math.abs(s.rot - Math.PI / 2) < 1e-6 && k.x < 1e-6 && s.x < 0.1;
              if (!achter && !links) fout(`${s.naam} staat tegen een muur die doorgesneden wordt`);
            }
            if (!s.vak) continue;
            if (s.vak.x0 < kv.x0 - E || s.vak.x1 > kv.x1 + E || s.vak.z0 < kv.z0 - E || s.vak.z1 > kv.z1 + E) fout(`${s.naam} steekt door de muur van de ${k.naam.toLowerCase()}`);
            if (hinder.some((h) => snijdt(s.vak!, h))) fout(`${s.naam} staat in een deur, doorgang of op de trap`);
            for (const r of ramen.filter((rr) => rr.kamer === k.id)) {
              const diep = r.soort === "raamdeur" ? 0.6 : 0.25;
              const rv: Vak = r.gevel === "voor" ? { x0: r.van, x1: r.tot, z0: l - diep, z1: l } : r.gevel === "achter" ? { x0: r.van, x1: r.tot, z0: 0, z1: diep }
                : r.gevel === "links" ? { x0: 0, x1: diep, z0: r.van, z1: r.tot } : { x0: w - diep, x1: w, z0: r.van, z1: r.tot };
              if (snijdt(s.vak, rv) && (r.soort === "raamdeur" || s.top > r.onder + E)) fout(`${s.naam} staat voor een raam`);
            }
            if (o.plat) continue;
            for (const t of hier) {
              if (t === s || !t.vak || meta.get(t.naam)!.plat) continue;
              if (snijdt(s.vak, t.vak)) fout(`${s.naam} en ${t.naam} staan in elkaar`);
            }
          }
        }
        // Elke binnendeur krijgt een deur uit de kit.
        const deuren = ins.stukken.filter((s) => s.wand).length;
        if (deuren !== openingen.filter((o) => o.soort === "deur").length) fout("niet elke deuropening heeft een deur");
      }
    }
    expect([...fouten].map(([f, w]) => `${f} — bv. ${w}`)).toEqual([]);
    // Wat de kamer herkenbaar maakt, staat er bijna altijd.
    expect(tel.bed / tel.slaap, `bed in ${tel.bed}/${tel.slaap} slaapkamers`).toBeGreaterThan(0.95);
    expect(tel.zetel / tel.leef, `zetel in ${tel.zetel}/${tel.leef} leefruimtes`).toBeGreaterThan(0.9);
    expect(tel.blok / tel.keuken, `keukenblok in ${tel.blok}/${tel.keuken} keukens`).toBeGreaterThan(0.9);
  });
});
