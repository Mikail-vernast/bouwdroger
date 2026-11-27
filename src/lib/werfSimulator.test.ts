import { describe, expect, it } from "vitest";
import {
  FASE,
  MAX_VERDIEPINGEN,
  WONING,
  geschatteOppervlakte,
  laagWaarde,
  pakketMaat,
  simResultaat,
  watVoor,
  type Fase,
  type Woning,
} from "./droogSimulator";
import { DEFAULT_CD, DEFAULT_PD, CD_VALUES, PD_VALUES, SIZE_VALUES } from "./verhuur";
import { packageFor } from "./vastPakket";

const GROOTSTE = SIZE_VALUES[SIZE_VALUES.length - 1];

describe("package size of the werf simulator", () => {
  it("rounds up to the next catalogue size", () => {
    expect(pakketMaat(1)).toBe(SIZE_VALUES[0]);
    expect(pakketMaat(Number(SIZE_VALUES[1]))).toBe(SIZE_VALUES[1]);
    expect(pakketMaat(Number(SIZE_VALUES[1]) + 1)).toBe(SIZE_VALUES[2]);
  });
  it("never goes past the largest package", () => {
    expect(pakketMaat(Number(GROOTSTE) + 1)).toBe(GROOTSTE);
    expect(pakketMaat(10_000)).toBe(GROOTSTE);
  });
});

describe("every answer in the werf simulator ends on a package in the catalogue", () => {
  const woningen = Object.keys(WONING) as Woning[];
  const fases = Object.keys(FASE) as Fase[];
  const pds = [...PD_VALUES, "geen", "onbekend"];
  const cds = [...CD_VALUES, "geen", "onbekend"];

  it("covers all house types, floors, roofs, sizes, phases, thicknesses and heating", () => {
    let combinaties = 0;
    const missers: string[] = [];
    for (const woning of woningen) {
      const maxLagen = woning === "appartement" ? 2 : MAX_VERDIEPINGEN;
      for (let verdiepingen = 1; verdiepingen <= maxLagen; verdiepingen++) {
        // The slider offers the catalogue sizes; the estimate is where it starts.
        const maten = new Set([...SIZE_VALUES, pakketMaat(geschatteOppervlakte(woning, verdiepingen))]);
        for (const dak of WONING[woning].dakToegelaten) {
          for (const size of maten) {
            for (const fase of fases) {
              for (const pd of pds) {
                for (const cd of cds) {
                  const wat = watVoor(fase, pd, cd);
                  // Nothing wet: the simulator stops at the question and never shows a plan.
                  if (!wat) continue;
                  for (const verwarmt of [true, false]) {
                    combinaties++;
                    const r = simResultaat({
                      woning, verdiepingen, dak, size, wat, fase, verwarmt, tempo: "gemiddeld",
                      pd: laagWaarde(pd, DEFAULT_PD),
                      cd: laagWaarde(cd, DEFAULT_CD),
                    });
                    if (!r || !packageFor(r.config) || r.items.length === 0) {
                      missers.push(`${woning} ${verdiepingen}L ${dak} ${size}m² ${fase} pd=${pd} cd=${cd} warm=${verwarmt}`);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    expect(combinaties).toBeGreaterThan(10_000);
    expect(missers.slice(0, 10)).toEqual([]);
  });
});
