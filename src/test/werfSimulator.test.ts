/**
 * @vitest-environment node
 *
 * De werfsimulator (/verhuur/simulator) eindigt altijd op een pakket uit de
 * catalogus, en wat de klant boekt is precies wat het droogplan toonde.
 *
 * Eén generator loopt alle antwoorden af die de pagina toelaat; beide blokken
 * hieronder gebruiken hem, zodat een nieuwe vraag niet in het ene blok wel en
 * in het andere niet meegeteld wordt. Het tempo wordt niet meer gevraagd (de
 * pagina rekent met "gemiddeld"), dus extra toestellen komen hier niet voor.
 */
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
  type SimAnswers,
  type SimResultaat,
  type Woning,
} from "../lib/droogSimulator";
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
} from "../lib/verhuur";
import { bookingSummary, extraNaarQuery, extraUitQuery, normalizeOptions } from "../lib/booking";
import { packageFor, packageItems } from "../lib/vastPakket";

const GROOTSTE = SIZE_VALUES[SIZE_VALUES.length - 1];

interface Antwoord {
  antwoorden: SimAnswers;
  resultaat: SimResultaat | null;
  beschrijving: string;
}

/** Elke combinatie die de werfsimulator toelaat en waarbij iets nat is. */
function* alleAntwoorden(): Generator<Antwoord> {
  const pds = [...PD_VALUES, "geen", "onbekend"];
  const cds = [...CD_VALUES, "geen", "onbekend"];
  for (const woning of Object.keys(WONING) as Woning[]) {
    // Zoals de pagina: een appartement heeft hoogstens twee bouwlagen.
    const maxLagen = woning === "appartement" ? 2 : MAX_VERDIEPINGEN;
    for (let verdiepingen = 1; verdiepingen <= maxLagen; verdiepingen++) {
      // De schuif biedt de catalogusmaten; de schatting is waar hij begint.
      const maten = new Set([...SIZE_VALUES, pakketMaat(geschatteOppervlakte(woning, verdiepingen))]);
      for (const dak of WONING[woning].dakToegelaten) {
        for (const size of maten) {
          for (const fase of Object.keys(FASE) as Fase[]) {
            for (const pd of pds) {
              for (const cd of cds) {
                const wat = watVoor(fase, pd, cd);
                // Niets nat: de simulator houdt bij die vraag halt en toont geen plan.
                if (!wat) continue;
                for (const verwarmt of [true, false]) {
                  const antwoorden: SimAnswers = {
                    woning, verdiepingen, dak, size, wat, fase, verwarmt, tempo: "gemiddeld",
                    pd: laagWaarde(pd, DEFAULT_PD),
                    cd: laagWaarde(cd, DEFAULT_CD),
                  };
                  yield {
                    antwoorden,
                    resultaat: simResultaat(antwoorden),
                    beschrijving: `${woning} ${verdiepingen}L ${dak} ${size}m² ${fase} pd=${pd} cd=${cd} warm=${verwarmt}`,
                  };
                }
              }
            }
          }
        }
      }
    }
  }
}

describe("pakketmaat van de werfsimulator", () => {
  it("rondt af naar de volgende catalogusmaat", () => {
    expect(pakketMaat(1)).toBe(SIZE_VALUES[0]);
    expect(pakketMaat(Number(SIZE_VALUES[1]))).toBe(SIZE_VALUES[1]);
    expect(pakketMaat(Number(SIZE_VALUES[1]) + 1)).toBe(SIZE_VALUES[2]);
  });
  it("gaat nooit boven het grootste pakket", () => {
    expect(pakketMaat(Number(GROOTSTE) + 1)).toBe(GROOTSTE);
    expect(pakketMaat(10_000)).toBe(GROOTSTE);
  });
});

describe("elk antwoord in de werfsimulator eindigt op een pakket uit de catalogus", () => {
  it("over alle woningen, bouwlagen, daken, maten, fases, diktes en verwarming", () => {
    let aantal = 0;
    const missers: string[] = [];
    for (const a of alleAntwoorden()) {
      aantal++;
      if (!a.resultaat || !packageFor(a.resultaat.config) || a.resultaat.items.length === 0) missers.push(a.beschrijving);
    }
    expect(aantal).toBeGreaterThan(10_000);
    expect(missers.slice(0, 10)).toEqual([]);
  });
});

/*
  De keten achter de werfsimulator, met de echte code in elke stap:

    droogplan → link naar /verhuur/pakket → parseConfig (pakket- en boekingspagina,
    api/checkout) → bookingSummary (wat aangerekend wordt) → toestelregels (Stripe-
    metadata "toestellen", die de webhook aan Vernast doorgeeft)
*/
describe("werfsimulator → pakketpagina → boeking → Vernast", () => {
  const perLink = new Map<string, { items: { k: string; q: number }[]; weken: number; beschrijving: string }>();
  for (const a of alleAntwoorden()) {
    if (!a.resultaat) continue;
    // Precies de link die de knop "Bekijk en boek" in het droogplan maakt.
    const link = `${configToQuery(a.resultaat.config)}${extraNaarQuery(a.resultaat.extra)}`;
    if (!perLink.has(link)) {
      perLink.set(link, {
        items: a.resultaat.items.filter((it) => it.q > 0).map((it) => ({ k: it.k, q: it.q })),
        weken: a.resultaat.weken,
        beschrijving: a.beschrijving,
      });
    }
  }
  const links = [...perLink.entries()];

  it("heeft minstens één link per pakket uit de catalogus", () => {
    expect(links.length).toBeGreaterThanOrEqual(64);
  });

  it.each(links)("%s boekt wat het droogplan toonde", (link, verwacht) => {
    const qs = new URLSearchParams(link);
    const config = parseConfig(qs);

    // De pakketpagina leest terug wat de simulator schreef.
    expect(`${configToQuery(config)}${extraNaarQuery(extraUitQuery(qs))}`).toBe(link);

    // Er bestaat een pakket voor, en zijn toestellen zitten in de boeking.
    const pakket = packageFor(config);
    expect(pakket, verwacht.beschrijving).not.toBeNull();
    const geboekt = bookingSummary(config, normalizeOptions({ land: "BE", postcode: "2630", dev: extraUitQuery(qs) }));
    const regels = toDeviceLines(geboekt.items);
    const perSleutel = new Map(regels.map((r) => [r.device_key, r.qty]));
    for (const it of packageItems(pakket!)) {
      expect(perSleutel.get(it.k) ?? 0, `${verwacht.beschrijving}: ${it.k}`).toBeGreaterThanOrEqual(it.q);
    }

    // Wat geboekt wordt (en naar Stripe en Vernast gaat) is wat het droogplan toonde.
    expect(regels.map((r) => ({ k: r.device_key, q: r.qty }))).toEqual(verwacht.items);
    expect(serializeDeviceLines(regels)).toBe(verwacht.items.map((it) => `${it.k}:${it.q}`).join(","));

    // Dezelfde huurtermijn als het droogplan, en leverbaar in België.
    expect(configWeeks(config)).toBe(verwacht.weken);
    expect(geboekt.leverbaar).toBe(true);
  });
});
