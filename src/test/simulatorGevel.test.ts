/**
 * @vitest-environment node
 *
 * De gevelindeling van de droogsimulator-woning (gevel.ts), die de SVG- en de
 * 3D-woning delen: beneden deur, zijlicht en een breed leefruimteraam, boven
 * slaapkamerramen op hun eigen verdeling. Bij elke gevelbreedte en elke
 * plaats van de voordeur uit het plan.
 */
import { describe, expect, it } from "vitest";
import { BREEDTES, MAX_VERDIEPINGEN, WONING, planVoor, type Woning } from "../lib/droogSimulator";
import { voorgevelGaten, zijgevelGaten, type GevelGat } from "../components/simulator/gevel";

const WONINGEN: Woning[] = ["rijwoning", "halfopen", "open", "appartement"];

const geenOverlap = (gaten: GevelGat[]) => {
  const s = [...gaten].sort((a, b) => a.a0 - b.a0);
  for (let i = 1; i < s.length; i++) expect(s[i].a0, JSON.stringify(s)).toBeGreaterThanOrEqual(s[i - 1].a1 + 0.1);
};

describe("voorgevelGaten", () => {
  const gevallen = WONINGEN.flatMap((woning) =>
    BREEDTES[woning].flatMap((w) => {
      const plan = planVoor(woning, MAX_VERDIEPINGEN, "zadeldak", [], w);
      const deur = woning === "appartement" ? null : plan.openingen.find((o) => o.soort === "voordeur" && o.verdieping === 0) ?? null;
      return [{ woning, w, deur }];
    }),
  );

  it("houdt elke opening binnen de gevel en onder de latei, zonder overlap", () => {
    for (const { w, deur } of gevallen) {
      for (let v = 0; v < MAX_VERDIEPINGEN; v++) {
        const gaten = voorgevelGaten(w, v, deur);
        for (const g of gaten) {
          // De voordeur komt uit het plan (vanaf 0,15 m); de ramen houden een penant aan de hoek.
          const penant = g.soort === "deur" ? 0.05 : 0.3;
          expect(g.a0).toBeGreaterThanOrEqual(penant);
          expect(g.a1).toBeLessThanOrEqual(w - penant);
          expect(g.a1 - g.a0).toBeGreaterThan(0.3);
          expect(g.b1).toBeGreaterThan(g.b0);
        }
        geenOverlap(gaten);
      }
    }
  });

  it("geeft het gelijkvloers de voordeur en een breed leefruimteraam met een lage borstwering", () => {
    for (const { woning, w, deur } of gevallen) {
      const gaten = voorgevelGaten(w, 0, deur);
      expect(gaten.filter((g) => g.soort === "deur"), woning).toHaveLength(deur ? 1 : 0);
      const breed = gaten.filter((g) => g.soort === "raam" && g.a1 - g.a0 >= 2.0);
      expect(breed, `${woning} ${w} m`).toHaveLength(1);
      expect(breed[0].a1 - breed[0].a0).toBeLessThanOrEqual(2.6);
      const slaap = voorgevelGaten(w, 1, deur).filter((g) => g.soort === "raam");
      expect(breed[0].b0).toBeLessThan(Math.min(...slaap.map((g) => g.b0)));
    }
  });

  it("zet de slaapkamerramen boven niet recht boven de ramen beneden, en maakt ze 1 tot 1,4 m breed", () => {
    for (const { woning, w, deur } of gevallen) {
      const beneden = voorgevelGaten(w, 0, deur);
      const boven = voorgevelGaten(w, 1, deur).filter((g) => g.a1 - g.a0 >= 0.9);
      expect(boven.length, `${woning} ${w} m`).toBeGreaterThan(0);
      for (const g of boven) expect(g.a1 - g.a0).toBeLessThanOrEqual(1.4);
      const zelfde = (a: GevelGat, b: GevelGat) => Math.abs(a.a0 - b.a0) < 0.05 && Math.abs(a.a1 - b.a1) < 0.05;
      expect(boven.some((g) => beneden.some((b) => zelfde(g, b))), `${woning} ${w} m`).toBe(false);
    }
  });

  it("zet een zijlicht naast de voordeur zodra het leefruimteraam er nog naast past", () => {
    const deur = { van: 0.25, tot: 1.15 };
    for (const w of [5, 6, 8, 12.5]) {
      const smal = voorgevelGaten(w, 0, deur).filter((g) => g.soort === "raam" && g.a1 - g.a0 < 0.5);
      expect(smal).toHaveLength(1);
      expect(smal[0].a0).toBeGreaterThan(deur.tot);
    }
  });
});

describe("zijgevelGaten", () => {
  it("geeft beneden en boven een andere indeling, binnen de zijgevel", () => {
    for (const woning of ["halfopen", "open"] as Woning[]) {
      const { l } = WONING[woning];
      const beneden = zijgevelGaten(l, 0), boven = zijgevelGaten(l, 1);
      for (const g of [...beneden, ...boven]) {
        expect(g.a0).toBeGreaterThan(0.2);
        expect(g.a1).toBeLessThan(l - 0.2);
      }
      expect(boven.some((g) => beneden.some((b) => Math.abs(g.a0 - b.a0) < 0.05))).toBe(false);
    }
  });
});
