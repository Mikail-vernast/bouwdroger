import { describe, expect, it } from "vitest";
import { droogTempo, staffel, type TempoInvoer } from "@/lib/droogTempo";
import { CAT } from "@/data/verhuur";

const RIJ: TempoInvoer = { type: "rijwoning", opp: 140, verd: 2, ruim: 8, wat: "beide", cd: 6, pd: 2, verwarmt: true };

describe("droogTempo", () => {
  /*
    Het materiaal zet de termijn, niet een venster dat de klant koos. De
    tempokeuze (snel / gemiddeld / rustig) is er op 26-11-2026 uit: ze werd niet
    meer gevraagd, en op 200 m² gaven alle drie dezelfde set.
  */
  it("kiest een set die het water binnen de diffusietijd wegkrijgt", () => {
    const r = droogTempo(RIJ);
    expect(r.water / r.capaciteit).toBeLessThanOrEqual(r.dagen);
    // Chape 6 cm = 21 dagen, plus 7 dagen marge omdat er ook pleisterwerk ligt.
    expect(r.dagen).toBe(28);
  });

  it("laat een dikke chape niet sneller drogen dan ze kan", () => {
    const dun = droogTempo({ ...RIJ, wat: "chape", cd: 5 });
    const dik = droogTempo({ ...RIJ, wat: "chape", cd: 8 });
    expect(dun.dagen).toBe(14);
    expect(dik.dagen).toBe(35);
  });

  it("zet meer toestellen bij wanneer de klant niet verwarmt", () => {
    const warm = droogTempo(RIJ);
    const koud = droogTempo({ ...RIJ, verwarmt: false });
    expect(koud.items.some((it) => it.k === "kachel")).toBe(true);
    expect(warm.items.some((it) => it.k === "kachel")).toBe(false);
  });

  it("rekent elk toestel aan zijn rolprijs maal de weekstaffel", () => {
    const r = droogTempo(RIJ);
    const basis = r.items.reduce((s, it) => s + CAT[it.k].w2 * it.q, 0);
    expect(r.prijs).toBeCloseTo(basis * staffel(r.weken), 2);
  });

  it("gebruikt de staffel uit de tarieflijst tot vier weken en het voorstel daarboven", () => {
    expect(staffel(2)).toBe(1);
    expect(staffel(4)).toBe(1.62);
    expect(staffel(8)).toBe(2.37);
  });
});
