// @vitest-environment node
import { describe, expect, it } from "vitest";
import { toPackageConfig, type SimAnswers } from "@/lib/droogSimulator";
import { configToQuery, parseConfig } from "@/lib/verhuur";
import { ACCESS_TYPES, EMPTY_OPTIONS, bookingSummary, normalizeOptions } from "@/lib/booking";
import { ACCESS_PROVISION_FEE, LADDER_FEE, MAX_FLOORS } from "@/data/verhuur";

const answers: SimAnswers = {
  woning: "halfopen", verdiepingen: 4, dak: "zadeldak", size: "180",
  wat: "beide", pd: "2", cd: "6", fase: "gepleisterd", verwarmt: false,
};

describe("verdiepingen uit de simulator", () => {
  it.each([1, 2, 3, 4])("bewaart %i bouwlagen via pakket en boeking, inclusief de zolder", (lagen) => {
    const simulator = toPackageConfig({ ...answers, verdiepingen: lagen });
    const pakket = parseConfig(new URLSearchParams(configToQuery(simulator)));
    const boeking = parseConfig(new URLSearchParams(configToQuery(pakket)));
    expect(boeking.floors).toBe(lagen - 1);
  });

  it("laat oude calculatorlinks zonder verdieping werken", () => {
    expect(parseConfig(new URLSearchParams()).floors).toBeUndefined();
    expect(configToQuery(parseConfig(new URLSearchParams()))).not.toContain("floors=");
  });

  it("begrenst query-invoer en negeert ongeldige verdiepingen", () => {
    expect(parseConfig(new URLSearchParams("floors=999")).floors).toBe(MAX_FLOORS);
    for (const raw of ["-1", "abc", "1.5"]) {
      expect(parseConfig(new URLSearchParams(`floors=${raw}`)).floors).toBeUndefined();
    }
  });
});

describe("toegang bij de boeking", () => {
  it.each(ACCESS_TYPES)("bewaart de keuze %s bij normalisatie van de bestelling", (access) => {
    expect(normalizeOptions({ access }).access).toBe(access);
  });

  it.each([
    ["trap", "Plaatsing op verdieping (trap)", 0],
    ["lift", "Plaatsing op verdieping (lift)", 0],
    ["ladder", "Plaatsing verdieping via ladder", LADDER_FEE],
    ["geen", "Toegang voorzien door Vernast", 115],
  ] as const)("gebruikt de simulatorverdieping bij %s, ook als een oude boeking op gelijkvloers stond", (access, label, fee) => {
    const summary = bookingSummary(toPackageConfig(answers), { ...EMPTY_OPTIONS, floors: 0, access });
    expect(summary.lines).toContainEqual({ l: "Plaatsing tot verdieping 3", v: 0, inc: true });
    expect(summary.lines.find((line) => line.l === label)?.v).toBe(fee);
  });

  it("rekent geen toegangstoeslag voor een woning met alleen gelijkvloers", () => {
    const config = toPackageConfig({ ...answers, verdiepingen: 1 });
    const summary = bookingSummary(config, { ...EMPTY_OPTIONS, floors: 3, access: "geen" });
    expect(summary.lines.some((line) => /verdieping|Toegang/.test(line.l))).toBe(false);
  });

  it("rekent voor niets voorzien één keer 115 euro, zonder de laddertoeslag erbij te tellen", () => {
    const config = toPackageConfig(answers);
    const trap = bookingSummary(config, { ...EMPTY_OPTIONS, access: "trap" });
    const geen = bookingSummary(config, { ...EMPTY_OPTIONS, access: "geen" });
    expect(ACCESS_PROVISION_FEE).toBe(115);
    expect(geen.total - trap.total).toBeCloseTo(115, 2);
    expect(geen.lines.some((line) => line.l === "Plaatsing verdieping via ladder")).toBe(false);
  });
});
