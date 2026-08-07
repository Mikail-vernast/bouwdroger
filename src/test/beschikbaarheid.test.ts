import { describe, expect, it } from "vitest";
import {
  allItems,
  parseConfig,
  parseDeviceLines,
  periodsOverlap,
  rentalWindow,
  serializeDeviceLines,
  toDeviceLines,
} from "../lib/verhuur";

const config = (qs: string) => parseConfig(new URLSearchParams(qs));

describe("toestelregels", () => {
  it("zet een pakket om naar regels met de sleutels van bouwdroger_equipment", () => {
    const lines = toDeviceLines(allItems(config("size=180&wat=beide&heat=1")));

    expect(lines.every((l) => ["small", "medium", "axiaal", "kachel"].includes(l.device_key))).toBe(true);
    expect(lines.every((l) => l.qty > 0)).toBe(true);
  });

  it("laat toestellen met aantal nul weg", () => {
    expect(toDeviceLines([{ k: "small", q: 0 }, { k: "medium", q: 2 }])).toEqual([
      { device_key: "medium", qty: 2 },
    ]);
  });

  it("overleeft een rondje serialiseren en teruglezen", () => {
    const lines = toDeviceLines(allItems(config("size=180&wat=waterschade&heat=1"), { medium: 2 }));

    expect(parseDeviceLines(serializeDeviceLines(lines))).toEqual(lines);
  });

  it("blijft binnen de 500 tekens die Stripe-metadata toelaat", () => {
    const lines = toDeviceLines(allItems(config("size=400&wat=waterschade&heat=1"), { small: 6, medium: 6 }));

    expect(serializeDeviceLines(lines).length).toBeLessThanOrEqual(500);
  });

  it("negeert onzin in plaats van erop te klappen", () => {
    expect(parseDeviceLines("small:2,onbekend:9,medium:x,axiaal:-1")).toEqual([
      { device_key: "small", qty: 2 },
    ]);
    expect(parseDeviceLines(null)).toEqual([]);
    expect(parseDeviceLines("")).toEqual([]);
  });
});

describe("huurperiode", () => {
  it("telt de duur bij de leverdatum op", () => {
    expect(rentalWindow("2026-08-08", 14)).toEqual({ start: "2026-08-08", end: "2026-08-22" });
  });

  it("rekent over een maandgrens heen", () => {
    expect(rentalWindow("2026-08-25", 14)).toEqual({ start: "2026-08-25", end: "2026-09-08" });
  });

  it("geeft niets terug bij een onbruikbare invoer, in plaats van iets te verzinnen", () => {
    expect(rentalWindow("morgen", 14)).toBeNull();
    expect(rentalWindow("", 14)).toBeNull();
    expect(rentalWindow("2026-08-08", 0)).toBeNull();
    expect(rentalWindow("2026-08-08", Number.NaN)).toBeNull();
  });
});

describe("overlap tussen huurperiodes", () => {
  const jens = { start: "2026-08-08", end: "2026-08-22" };

  it("ziet een volledig gelijk venster als overlap", () => {
    expect(periodsOverlap(jens, { start: "2026-08-08", end: "2026-08-22" })).toBe(true);
  });

  it("ziet een gedeeltelijke overlap", () => {
    expect(periodsOverlap(jens, { start: "2026-08-15", end: "2026-08-29" })).toBe(true);
    expect(periodsOverlap(jens, { start: "2026-08-01", end: "2026-08-15" })).toBe(true);
  });

  it("ziet een venster dat er volledig in ligt", () => {
    expect(periodsOverlap(jens, { start: "2026-08-10", end: "2026-08-12" })).toBe(true);
  });

  /*
    Het randgeval waar het echt om draait. Vernast haalt op en levert op dezelfde
    dag, dus 22 augustus is voor beide partijen bruikbaar. Wie deze vergelijking
    later "veiliger" maakt door er `<=` van te maken, gooit per verhuur een dag
    capaciteit weg zonder dat iemand het merkt — vandaar deze test.
  */
  it("laat ophalen en leveren op dezelfde dag toe", () => {
    expect(periodsOverlap(jens, { start: "2026-08-22", end: "2026-09-05" })).toBe(false);
    expect(periodsOverlap(jens, { start: "2026-07-25", end: "2026-08-08" })).toBe(false);
  });

  it("ziet losstaande periodes niet als overlap", () => {
    expect(periodsOverlap(jens, { start: "2026-09-01", end: "2026-09-15" })).toBe(false);
  });

  it("is symmetrisch", () => {
    const b = { start: "2026-08-15", end: "2026-08-29" };
    expect(periodsOverlap(jens, b)).toBe(periodsOverlap(b, jens));
  });
});
