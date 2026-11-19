import { describe, expect, it } from "vitest";
import { PLAATSEN } from "@/data/plaatsen";
import { herkenPlaats, normaliseer, plaatsLabel, zoekPlaatsen } from "@/lib/plaatsZoeker";
import { inWerkgebiedNL, zoneVoor } from "@/lib/levering";

describe("herkenPlaats", () => {
  it("herkent een gemeente zonder dat de bezoeker hoeft te klikken", () => {
    expect(herkenPlaats(PLAATSEN, "Hemiksem")).toEqual({ land: "BE", postcode: "2620", naam: "Hemiksem" });
  });

  it("negeert hoofdletters en accenten", () => {
    expect(herkenPlaats(PLAATSEN, "liege")?.postcode).toBe("4000");
    expect(herkenPlaats(PLAATSEN, "  ANTWERPEN ")?.postcode).toBe("2000");
  });

  it("kent de Nederlandse naam van Waalse en Brusselse plaatsen", () => {
    expect(herkenPlaats(PLAATSEN, "Luik")?.postcode).toBe("4000");
    expect(herkenPlaats(PLAATSEN, "Namen")?.postcode).toBe("5000");
    expect(herkenPlaats(PLAATSEN, "Brussel")?.postcode).toBe("1000");
    expect(herkenPlaats(PLAATSEN, "Elsene")?.postcode).toBe("1050");
    expect(herkenPlaats(PLAATSEN, "Aarlen")?.postcode).toBe("6700");
  });

  it("herkent een postcode die maar in één land bestaat", () => {
    expect(herkenPlaats(PLAATSEN, "2620")).toMatchObject({ land: "BE", postcode: "2620" });
    expect(herkenPlaats(PLAATSEN, "1011")).toMatchObject({ land: "NL", naam: "Amsterdam" });
  });

  it("kiest bij een postcode uit beide landen België", () => {
    // 9051 is Sint-Denijs-Westrem (Gent) en Stiens (Friesland).
    expect(herkenPlaats(PLAATSEN, "9051")).toMatchObject({ land: "BE", postcode: "9051" });
  });

  it("kiest bij een naam uit beide landen de grootste plaats", () => {
    // Mechelen en Hasselt bestaan ook in Nederlands Limburg, met één postcode.
    expect(herkenPlaats(PLAATSEN, "Mechelen")).toMatchObject({ land: "BE", postcode: "2800" });
    expect(herkenPlaats(PLAATSEN, "Hasselt")).toMatchObject({ land: "BE", postcode: "3500" });
    expect(herkenPlaats(PLAATSEN, "Utrecht")).toMatchObject({ land: "NL" });
  });

  it("Bergen is voor een Vlaming Mons", () => {
    expect(herkenPlaats(PLAATSEN, "Bergen")).toMatchObject({ land: "BE", postcode: "7000" });
  });

  it("geeft niets terug voor een half getypte naam", () => {
    expect(herkenPlaats(PLAATSEN, "Hemik")).toBeNull();
    expect(herkenPlaats(PLAATSEN, "26")).toBeNull();
    expect(herkenPlaats(PLAATSEN, "")).toBeNull();
  });

  it("elke herkende postcode heeft ook een leverzone", () => {
    for (const land of ["BE", "NL"] as const) {
      for (const [, pc] of PLAATSEN[land]) expect(zoneVoor(land, pc), `${land} ${pc}`).not.toBeNull();
    }
  });
});

describe("zoekPlaatsen", () => {
  it("toont de plaats die met de invoer begint bovenaan", () => {
    expect(zoekPlaatsen(PLAATSEN, "hemik")[0]).toMatchObject({ naam: "Hemiksem", postcode: "2620" });
  });

  it("zet een grote stad één keer in de lijst, met haar laagste postcode", () => {
    const antwerpen = zoekPlaatsen(PLAATSEN, "antwerpen").filter((p) => p.naam === "Antwerpen");
    expect(antwerpen).toEqual([{ land: "BE", postcode: "2000", naam: "Antwerpen" }]);
  });

  it("vindt een plaats op een woord midden in de naam", () => {
    expect(zoekPlaatsen(PLAATSEN, "lambrechts").map((p) => p.naam)).toContain("Sint-Lambrechts-Woluwe");
  });

  it("toont bij een postcode uit beide landen allebei, België eerst", () => {
    const uit = zoekPlaatsen(PLAATSEN, "9051");
    expect(uit.map((p) => p.land)).toEqual(["BE", "NL"]);
    expect(uit[1].naam).toBe("Stiens");
  });

  it("laat de Nederlandse naamgenoot van een Belgische stad in de lijst staan", () => {
    const mechelen = zoekPlaatsen(PLAATSEN, "Mechelen").filter((p) => p.naam === "Mechelen");
    expect(mechelen.map((p) => p.land)).toEqual(["BE", "NL"]);
  });

  it("noemt een postcode naar haar hoofdplaats, niet naar het eerste dorp", () => {
    // Op 4000 staan Glain, Liège en Rocourt; alfabetisch zou Glain winnen.
    expect(zoekPlaatsen(PLAATSEN, "4000")[0].naam).toBe("Liège");
  });

  it("blijft binnen het maximum", () => {
    expect(zoekPlaatsen(PLAATSEN, "s").length).toBeLessThanOrEqual(7);
    expect(zoekPlaatsen(PLAATSEN, "12345")).toEqual([]);
  });
});

describe("normaliseer en plaatsLabel", () => {
  it("maakt van een naam met accenten en streepjes een zoeksleutel", () => {
    expect(normaliseer("Woluwe-Saint-Lambert")).toBe("woluwe saint lambert");
    expect(normaliseer("Liège")).toBe("liege");
  });

  it("toont naam en postcode, of alleen de postcode", () => {
    expect(plaatsLabel({ naam: "Hemiksem", postcode: "2620" })).toBe("Hemiksem (2620)");
    expect(plaatsLabel({ naam: "", postcode: "2620" })).toBe("2620");
  });
});

describe("werkgebied in Nederland", () => {
  it("levert online boekbaar in Noord-Brabant, Zeeland en Limburg", () => {
    for (const pc of ["4811", "5611", "4331", "4531", "6211", "5911", "6041"]) {
      expect(inWerkgebiedNL(pc), pc).toBe(true);
      expect(zoneVoor("NL", pc)?.zone.tarief, pc).not.toBeNull();
    }
  });

  it("maakt het transport op maat daarbuiten, ook binnen 200 km", () => {
    // Amsterdam, Utrecht, Rotterdam, Nijmegen, Zaltbommel, Gorinchem.
    for (const pc of ["1011", "3511", "3011", "6511", "5301", "4201"]) {
      expect(inWerkgebiedNL(pc), pc).toBe(false);
      const z = zoneVoor("NL", pc);
      expect(z, pc).not.toBeNull();
      expect(z!.zone.tarief, pc).toBeNull();
    }
  });

  it("raakt België niet", () => {
    expect(zoneVoor("BE", "2620")?.zone.tarief).toBe(0);
  });
});
