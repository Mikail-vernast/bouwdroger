import { describe, expect, it } from "vitest";
import { nokHoogte } from "./maten";
import { periodeVan } from "./periode";
import { planVoor, WONING } from "./woning";
import { straatBeelden } from "./3d/bestanden";

describe("building period of the drawn house", () => {
  it("falls back to 1950–1990, the house it always drew, without a known period", () => {
    expect(periodeVan(null)).toBe("1950-1990");
    expect(periodeVan("onbekend")).toBe("1950-1990");
    expect(periodeVan("voor1950")).toBe("voor1950");
    expect(nokHoogte("zadeldak", 10)).toBe(nokHoogte("zadeldak", 10, "1950-1990"));
  });

  it("gives a house from before 1950 the steepest roof and one from 1950–1990 the flattest", () => {
    const voor = nokHoogte("zadeldak", 10, "voor1950"), mid = nokHoogte("zadeldak", 10, "1950-1990"), na = nokHoogte("zadeldak", 10, "na1990");
    expect(voor).toBeGreaterThan(na);
    expect(na).toBeGreaterThan(mid);
    // Only the gable roof changes: a flat roof stays flat.
    expect(nokHoogte("plat", 10, "voor1950")).toBe(nokHoogte("plat", 10));
  });

  it("changes only the front windows, never the rooms, so every later step still fits", () => {
    for (const woning of ["rijwoning", "halfopen", "open"] as const) {
      const basis = planVoor(woning, 2, "zadeldak", [], WONING[woning].w);
      for (const periode of ["voor1950", "na1990"] as const) {
        const plan = planVoor(woning, 2, "zadeldak", [], WONING[woning].w, periode);
        expect(plan.kamers, `${woning} ${periode}`).toEqual(basis.kamers);
        expect(plan.openingen).toEqual(basis.openingen);
        expect(plan.ramen.filter((r) => r.gevel !== "voor")).toEqual(basis.ramen.filter((r) => r.gevel !== "voor"));
      }
    }
  });

  it("draws upright windows before 1950 and wide ones down to the floor after 1990", () => {
    const voor = planVoor("open", 2, "zadeldak", [], 10, "voor1950").ramen.filter((r) => r.gevel === "voor" && r.soort === "raam");
    for (const r of voor) expect(r.boven - r.onder, "upright").toBeGreaterThan(r.tot - r.van);
    const na = planVoor("open", 2, "zadeldak", [], 10, "na1990").ramen.filter((r) => r.gevel === "voor" && r.verdieping === 0 && r.soort === "raam");
    expect(na.length).toBeGreaterThan(0);
    for (const r of na) expect(r.onder).toBeLessThan(0.1);
  });

  it("gives each period its own street, except 1950–1990 and the apartment", () => {
    expect(straatBeelden("halfopen", 8, "mini")[0]).toBe("/simulator/straat/halfopen-b80-achter-mini.webp");
    expect(straatBeelden("halfopen", 8, "mini", 1, "1950-1990")[0]).toBe("/simulator/straat/halfopen-b80-achter-mini.webp");
    expect(straatBeelden("halfopen", 8, "groot", 1, "voor1950")[1]).toBe("/simulator/straat/halfopen-b80-voor1950-voor.webp");
    expect(straatBeelden("appartement", 9, "mini", 2, "na1990")[0]).toBe("/simulator/straat/appartement-b90-l2-achter-mini.webp");
  });
});
