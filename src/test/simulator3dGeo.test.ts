import { describe, expect, it } from "vitest";
import { Bouwer, muurMinGaten } from "@/components/simulator/3d/geo";

const opp = (rs: { a0: number; a1: number; b0: number; b1: number }[]) =>
  rs.reduce((t, r) => t + (r.a1 - r.a0) * (r.b1 - r.b0), 0);

describe("muurMinGaten", () => {
  it("laat een muur zonder gaten heel", () => {
    expect(muurMinGaten(0, 10, 0, 2.6, [])).toEqual([{ a0: 0, a1: 10, b0: 0, b1: 2.6 }]);
  });

  it("haalt een raam eruit: de muur is precies de muur min het raam", () => {
    const rs = muurMinGaten(0, 10, 0, 2.6, [{ a0: 4, a1: 5.5, b0: 0.75, b1: 2.3 }]);
    expect(opp(rs)).toBeCloseTo(10 * 2.6 - 1.5 * 1.55, 6);
    // Niets van de muur ligt in het raam.
    for (const r of rs) {
      const overlapA = Math.min(r.a1, 5.5) - Math.max(r.a0, 4);
      const overlapB = Math.min(r.b1, 2.3) - Math.max(r.b0, 0.75);
      expect(overlapA > 1e-9 && overlapB > 1e-9).toBe(false);
    }
  });

  it("knipt een deur die tot de vloer loopt en een gat dat buiten de muur steekt", () => {
    const rs = muurMinGaten(0, 6, 0, 2.6, [
      { a0: 1, a1: 2, b0: -1, b1: 2.3 }, // deur, begint onder de muur
      { a0: 5.5, a1: 7, b0: 1, b1: 2 }, // steekt rechts buiten de muur
    ]);
    expect(opp(rs)).toBeCloseTo(6 * 2.6 - 1 * 2.3 - 0.5 * 1, 6);
  });

  it("overlappende gaten tellen niet dubbel", () => {
    const rs = muurMinGaten(0, 4, 0, 2, [
      { a0: 1, a1: 3, b0: 0.5, b1: 1.5 },
      { a0: 2, a1: 3.5, b0: 1, b1: 1.8 },
    ]);
    // Unie van de twee: 2×1 + 1.5×0.8 − 1×0.5 overlap.
    expect(opp(rs)).toBeCloseTo(8 - (2 + 1.2 - 0.5), 6);
  });
});

describe("Bouwer", () => {
  it("geeft een blok zes vlakken met normalen naar buiten (zonder onderkant: vijf)", () => {
    const b = new Bouwer();
    b.blok("x", 0, 1, 0, 1, 0, 1);
    const g = b.bouw().get("x")!;
    const pos = g.getAttribute("position"), nrm = g.getAttribute("normal");
    expect(pos.count).toBe(5 * 6);
    for (let i = 0; i < pos.count; i++) {
      // Vanuit het midden (0.5) gezien wijst elke normaal weg van het blok.
      const d = (pos.getX(i) - 0.5) * nrm.getX(i) + (pos.getY(i) - 0.5) * nrm.getY(i) + (pos.getZ(i) - 0.5) * nrm.getZ(i);
      expect(d).toBeGreaterThan(0);
    }
  });

  it("verdeelt per materiaal en geeft UV's in meter", () => {
    const b = new Bouwer();
    b.blok("baksteen", 0, 3, 0, 2, 0, 0.24, { boven: "snede" });
    const m = b.bouw();
    expect([...m.keys()].sort()).toEqual(["baksteen", "snede"]);
    const uv = m.get("baksteen")!.getAttribute("uv");
    let maxU = 0;
    for (let i = 0; i < uv.count; i++) maxU = Math.max(maxU, uv.getX(i));
    expect(maxU).toBeCloseTo(3, 6);
  });
});
