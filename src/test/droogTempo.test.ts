import { describe, expect, it } from "vitest";
import { TEMPO, droogTempo, staffel, type TempoInvoer } from "@/lib/droogTempo";
import { CAT } from "@/data/verhuur";

const RIJ: TempoInvoer = { type: "rijwoning", opp: 140, verd: 2, ruim: 8, wat: "beide", cd: 6, pd: 2, verwarmt: true, tempo: "gemiddeld" };

describe("droogTempo", () => {
  it("lands inside the chosen window when the material allows it", () => {
    for (const tempo of ["gemiddeld", "traag"] as const) {
      const r = droogTempo({ ...RIJ, tempo });
      expect(r.dagen).toBeGreaterThanOrEqual(TEMPO[tempo].min);
      expect(r.dagen).toBeLessThanOrEqual(TEMPO[tempo].max);
    }
  });

  it("thick screed cannot be fast: it gives the fastest set and says so", () => {
    const r = droogTempo({ ...RIJ, wat: "chape", cd: 8, tempo: "snel" });
    expect(r.teSnel).toBe(true);
    expect(r.dagen).toBeGreaterThan(TEMPO.snel.max);
  });

  it("prices every device at its role price times the week multiplier", () => {
    const r = droogTempo(RIJ);
    const basis = r.items.reduce((s, it) => s + CAT[it.k].w2 * it.q, 0);
    expect(r.prijs).toBeCloseTo(basis * staffel(r.weken), 2);
  });

  it("uses the tariff multipliers up to four weeks and the proposal beyond", () => {
    expect(staffel(2)).toBe(1);
    expect(staffel(4)).toBe(1.62);
    expect(staffel(8)).toBe(2.37);
  });
});
