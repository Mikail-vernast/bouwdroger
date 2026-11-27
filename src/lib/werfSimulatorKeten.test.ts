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
import {
  CD_VALUES,
  DEFAULT_CD,
  DEFAULT_PD,
  PD_VALUES,
  SIZE_VALUES,
  configToQuery,
  configWeeks,
  parseConfig,
  serializeDeviceLines,
  toDeviceLines,
} from "./verhuur";
import { bookingSummary, extraNaarQuery, extraUitQuery, normalizeOptions } from "./booking";
import { packageFor, packageItems } from "./vastPakket";

/*
  The chain behind the werf simulator, with the real code at every step:

    simulator result → link to /verhuur/pakket (query) → parseConfig (package and
    booking page, api/checkout) → bookingSummary (what is charged) → device lines
    (Stripe metadata "toestellen", which the webhook passes to Vernast)

  For every distinct result the simulator can show, the devices the customer saw in
  the drying plan must be the devices that are booked, and the package must be the
  catalogue package for that size, work type and thickness.
*/

interface Uitkomst {
  query: string;
  items: { k: string; q: number }[];
  weken: number;
  beschrijving: string;
}

function alleUitkomsten(): Map<string, Uitkomst> {
  const uit = new Map<string, Uitkomst>();
  const pds = [...PD_VALUES, "geen", "onbekend"];
  const cds = [...CD_VALUES, "geen", "onbekend"];
  for (const woning of Object.keys(WONING) as Woning[]) {
    const maxLagen = woning === "appartement" ? 2 : MAX_VERDIEPINGEN;
    for (let verdiepingen = 1; verdiepingen <= maxLagen; verdiepingen++) {
      const maten = new Set([...SIZE_VALUES, pakketMaat(geschatteOppervlakte(woning, verdiepingen))]);
      for (const dak of WONING[woning].dakToegelaten) {
        for (const size of maten) {
          for (const fase of Object.keys(FASE) as Fase[]) {
            for (const pd of pds) {
              for (const cd of cds) {
                const wat = watVoor(fase, pd, cd);
                if (!wat) continue;
                for (const verwarmt of [true, false]) {
                  const r = simResultaat({
                    woning, verdiepingen, dak, size, wat, fase, verwarmt, tempo: "gemiddeld",
                    pd: laagWaarde(pd, DEFAULT_PD), cd: laagWaarde(cd, DEFAULT_CD),
                  });
                  if (!r) throw new Error(`geen resultaat: ${woning} ${size} ${fase}`);
                  // Exactly the link the "Bekijk en boek" button in the drying plan builds.
                  const query = `${configToQuery(r.config)}${extraNaarQuery(r.extra)}`;
                  if (!uit.has(query)) {
                    uit.set(query, {
                      query,
                      items: r.items.filter((it) => it.q > 0).map((it) => ({ k: it.k, q: it.q })),
                      weken: r.weken,
                      beschrijving: `${woning} ${verdiepingen}L ${size}m² ${fase} pd=${pd} cd=${cd} warm=${verwarmt}`,
                    });
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return uit;
}

describe("werf simulator → package page → checkout → Vernast", () => {
  const uitkomsten = [...alleUitkomsten().values()];

  it("has one distinct booking link per catalogue package and heating choice", () => {
    // 64 packages; the heating answer adds heaters or not.
    expect(uitkomsten.length).toBeGreaterThanOrEqual(64);
  });

  it.each(uitkomsten.map((u) => [u.query, u] as const))("%s books what the drying plan showed", (_q, u) => {
    const qs = new URLSearchParams(u.query);
    const config = parseConfig(qs);

    // The link survives the round trip: the package page reads what the simulator wrote.
    expect(configToQuery(config)).toBe(configToQuery(parseConfig(new URLSearchParams(configToQuery(config)))));
    expect(`${configToQuery(config)}${extraNaarQuery(extraUitQuery(qs))}`).toBe(u.query);

    // A catalogue package exists for it, and its devices are in the booking.
    const pakket = packageFor(config);
    expect(pakket, u.beschrijving).not.toBeNull();
    const geboekt = bookingSummary(config, normalizeOptions({ land: "BE", postcode: "2630", dev: extraUitQuery(qs) }));
    const lijnen = toDeviceLines(geboekt.items);
    const perSleutel = new Map(lijnen.map((l) => [l.device_key, l.qty]));
    for (const it of packageItems(pakket!)) {
      expect(perSleutel.get(it.k) ?? 0, `${u.beschrijving}: ${it.k}`).toBeGreaterThanOrEqual(it.q);
    }

    // What is booked (and sent to Stripe and Vernast) is what the drying plan showed.
    expect(lijnen.map((l) => ({ k: l.device_key, q: l.qty }))).toEqual(u.items);
    expect(serializeDeviceLines(lijnen)).toBe(u.items.map((it) => `${it.k}:${it.q}`).join(","));

    // Same rental term as the drying plan, delivered and bookable within Belgium.
    expect(configWeeks(config)).toBe(u.weken);
    expect(geboekt.leverbaar).toBe(true);
  });
});
