import { describe, expect, it } from "vitest";
import { CORRIDORS, ZONES } from "../data/levering.js";
import { LEVERZONES } from "../data/leverzones.js";
import {
  normaliseerPostcode,
  ritdagen,
  transportTarief,
  zoneVoor,
} from "../lib/levering.js";
import { EMPTY_OPTIONS, ONLINE_DISCOUNT, bookingSummary } from "../lib/booking.js";
import type { PackageConfig } from "../lib/verhuur.js";

const CONFIG: PackageConfig = {
  size: "180",
  wat: "chape",
  pd: "2",
  cd: "6",
  heat: true,
  weeks: 2,
};

/**
 * Het kostenmodel waaruit de tarieven komen, hier opnieuw uitgerekend.
 *
 * Staat met opzet in de test en niet in de productiecode: de tarieven in
 * `levering.ts` zijn bewust ronde, verkoopbare bedragen en geen formule. Wat
 * bewaakt moet worden is dat ze de kost blijven dekken — een dieselprijs die
 * stijgt of een loonindexering maakt een tarief van gisteren stil verlieslatend.
 * Loopt deze test rood, dan moeten de tarieven mee, niet de verwachting.
 *
 * Uitgangspunten (excl. btw):
 *  - € 0,4595 per kilometer bestelwagen, all-in: afschrijving 0,23 +
 *    brandstof 0,16 + onderhoud 0,06 + pneus en vloeistoffen 0,02
 *  - € 37,80 per toewijsbaar uur technicus, volledige werkgeverskost
 *  - 10% opslag voor planning, dispatch en administratie
 *  - per order twee ritten: de levering en, weken later, de ophaling
 *  - 2,5 stops per rit vanaf zone 2, 3 in de thuiszone: elk lopend order levert
 *    zelf een tweede stop, want zijn ophaling zit in een volgende rit
 */
const KM_KOST = 0.4595;
const UUR_KOST = 37.8;
const OPSLAG = 0.1;

/**
 * [enkele afstand in km, gemiddelde snelheid, stops per rit] per zonenummer.
 *
 * De stops lopen terug met de afstand: dichtbij rijdt de bestelwagen drie
 * adressen in één ronde, voorbij 200 km vindt ze er zelden meer dan anderhalf
 * en daar zit dan ook de sprong in het tarief.
 */
const RIT: Record<number, [number, number, number]> = {
  1: [18, 42, 3],
  2: [42, 55, 2.5],
  3: [62, 65, 2.5],
  4: [80, 72, 2.5],
  5: [105, 78, 2.5],
  6: [150, 85, 2.5],
  7: [250, 88, 1.5],
};

function ritKost(zone: number, stops?: number): number {
  const [afstand, snelheid, standaard] = RIT[zone];
  const n = stops ?? standaard;
  const kmPerRit = 2 * afstand + (n > 1 ? 8 * (n - 1) : 0);
  const kmPerOrder = kmPerRit / n;
  // Ter plaatse en in het magazijn: 1,00 u + 0,42 u bij de levering, 0,60 u +
  // 0,25 u bij de ophaling. Onafhankelijk van de afstand.
  const levering = kmPerOrder / snelheid + 1.0 + 0.42;
  const ophaling = kmPerOrder / snelheid + 0.6 + 0.25;
  const direct = 2 * kmPerOrder * KM_KOST + (levering + ophaling) * UUR_KOST;
  return direct * (1 + OPSLAG);
}

/** Wat de afstand méér kost dan een rit in de thuiszone. */
const meerkost = (zone: number, stops?: number) => ritKost(zone, stops) - ritKost(1);

describe("transportzones", () => {
  it("heeft voor elke zone in de data ook een zonegrens in de postcodetabel", () => {
    const gebruikt = new Set<number>();
    for (const runs of Object.values(LEVERZONES)) for (const [, z] of runs) gebruikt.add(z);
    for (const zone of gebruikt) {
      expect(ZONES.some((z) => z.nr === zone)).toBe(true);
    }
  });

  it("dekt met elk tarief de meerkost van die zone", () => {
    for (const zone of ZONES) {
      if (zone.tarief === null) continue;
      const nodig = meerkost(zone.nr);
      // Zone 1 en 2 zijn bewust inbegrepen: daar is de meerkost klein genoeg om
      // als commercieel argument weg te geven. Vanaf zone 3 moet ze gedekt zijn.
      if (zone.nr <= 2) {
        expect(nodig).toBeLessThan(60);
      } else {
        expect(zone.tarief).toBeGreaterThanOrEqual(Math.round(nodig));
      }
    }
  });

  it("dekt met elke spoedtoeslag het verschil tussen een losse rit en de ritdag", () => {
    for (const zone of ZONES) {
      if (zone.spoed === null) continue;
      const extra = meerkost(zone.nr, 1) - meerkost(zone.nr);
      expect(zone.spoed).toBeGreaterThanOrEqual(Math.round(extra) - 1);
    }
  });

  it("zet boven 200 km geen vast tarief maar een prijs op maat", () => {
    /*
      Niet omdat het bedrag te hoog is om te tonen, maar omdat het te veel
      uiteenloopt: of de rit alleen gaat of met een tweede adres erbij scheelt
      honderden euro's, en dat weten we pas bij het plannen. Eén vast bedrag zou
      dus óf de klant te veel vragen, óf ons verlies laten rijden.

      Dat het veel kost blijft waar — vandaar de controle op de meerkost, zodat
      niemand er later stilletjes € 199 van maakt.
    */
    for (const nr of [7, 8]) {
      const zone = ZONES.find((z) => z.nr === nr)!;
      expect(zone.tarief).toBeNull();
      expect(zone.ritme).toBe("geen");
    }
    expect(meerkost(7)).toBeGreaterThan(350);
    expect(ZONES[ZONES.length - 1].tot).toBeNull();
  });
});

describe("zoneVoor", () => {
  it.each([
    ["BE", "2630", 1, "het magazijn zelf"],
    ["BE", "2000", 1, "Antwerpen"],
    ["BE", "1000", 2, "Brussel"],
    ["BE", "9000", 3, "Gent"],
    ["BE", "3500", 4, "Hasselt"],
    ["BE", "5000", 5, "Namen"],
    ["BE", "4000", 6, "Luik"],
    ["BE", "8400", 6, "Oostende"],
    ["BE", "6700", 7, "Aarlen"],
    ["NL", "4811", 3, "Breda"],
    ["NL", "5611", 5, "Eindhoven"],
    ["NL", "6211", 5, "Maastricht"],
    ["NL", "9711", 8, "Groningen"],
  ])("legt %s %s in zone %i (%s)", (land, postcode, zone) => {
    expect(zoneVoor(land, postcode)?.zone.nr).toBe(zone);
  });

  it("kent dezelfde vier cijfers in twee landen een eigen zone toe", () => {
    /*
      3500 is Hasselt (87 km) én Utrecht (136 km), 5000 is Namen (103 km) én
      Eindhoven-noord (63 km). Zonder landveld gold de eerste van de twee en
      stond er twee zones te veel of te weinig op de factuur.
    */
    expect(zoneVoor("BE", "3500")?.zone.nr).toBe(4);
    expect(zoneVoor("NL", "3500")?.zone.nr).toBe(6);
    expect(zoneVoor("BE", "5000")?.zone.nr).toBe(5);
    expect(zoneVoor("NL", "5000")?.zone.nr).toBe(3);
  });

  it("leest een Nederlandse postcode met letters en een Belgische met landcode", () => {
    expect(normaliseerPostcode("4811 AB")).toBe("4811");
    expect(normaliseerPostcode("B-2630")).toBe("2630");
    expect(normaliseerPostcode(" 2630 ")).toBe("2630");
    expect(normaliseerPostcode("26")).toBeNull();
    expect(normaliseerPostcode("onzin")).toBeNull();
    expect(normaliseerPostcode(undefined)).toBeNull();
  });

  it("geeft niets terug zonder land of met rommel", () => {
    expect(zoneVoor(null, "2630")).toBeNull();
    expect(zoneVoor("FR", "75001")).toBeNull();
    expect(zoneVoor("BE", "abcd")).toBeNull();
    expect(zoneVoor("BE", "0100")).toBeNull();
  });
});

describe("ritdagen", () => {
  it("levert in de thuiszones elke werkdag", () => {
    const zone = ZONES[0];
    expect(ritdagen(zone, CORRIDORS[0])).toEqual([1, 2, 3, 4, 5]);
  });

  it("levert in de verste zones enkel op de dag van de corridor", () => {
    const zone = ZONES.find((z) => z.ritme === "een-dag")!;
    for (const corridor of CORRIDORS) {
      expect(ritdagen(zone, corridor)).toEqual([corridor.dag]);
    }
  });

  it("geeft elke corridor een eigen dag, anders valt er niets te bundelen", () => {
    const dagen = CORRIDORS.map((c) => c.dag);
    expect(new Set(dagen).size).toBe(CORRIDORS.length);
  });

  it("zet de offertezone op geen enkele dag", () => {
    const ver = ZONES[ZONES.length - 1];
    expect(ritdagen(ver, CORRIDORS[0])).toEqual([]);
  });
});

describe("transport in de prijsopbouw", () => {
  it("rekent de vergoeding van de zone aan en zet ze apart", () => {
    const zonder = bookingSummary(CONFIG, EMPTY_OPTIONS);
    const namen = bookingSummary(CONFIG, { ...EMPTY_OPTIONS, land: "BE", postcode: "5000" });
    expect(zonder.transport).toBe(0);
    expect(namen.transport).toBe(zoneVoor("BE", "5000")!.zone.tarief);
    expect(namen.total).toBe(zonder.total + namen.transport);
    expect(namen.lines.some((l) => l.l.includes("Transport zone 5"))).toBe(true);
  });

  it("geeft geen korting op de transportvergoeding", () => {
    /*
      De vergoeding dekt exact onze kost. 5% ervan weggeven is in zone 6 € 10
      verlies per order, en haalt de bodem onder de hele berekening weg. De
      korting moet dus in elke zone hetzelfde bedrag zijn.
    */
    const thuis = bookingSummary(CONFIG, { ...EMPTY_OPTIONS, land: "BE", postcode: "2630" });
    const luik = bookingSummary(CONFIG, { ...EMPTY_OPTIONS, land: "BE", postcode: "4000" });
    expect(luik.discount).toBe(thuis.discount);
    expect(luik.discount).toBe(Math.round(thuis.total * ONLINE_DISCOUNT * 100) / 100);
  });

  it("houdt na transport in elke zone evenveel over", () => {
    /*
      De toets op de hele constructie: het tarief neutraliseert de afstand. Wat
      er na de transportkost overblijft hoort in Boom en in Luik gelijk te zijn,
      want anders is het ene order winstgevender dan het andere en gaat de
      planning op prijs rijden in plaats van op droogtijd.
    */
    const over = (postcode: string, zone: number) => {
      const s = bookingSummary(CONFIG, { ...EMPTY_OPTIONS, land: "BE", postcode });
      return s.total - s.transport + (s.transport - meerkost(zone)) - ritKost(1);
    };
    const thuis = over("2630", 1);
    for (const [postcode, zone] of [
      ["1000", 2],
      ["9000", 3],
      ["3500", 4],
      ["5000", 5],
      ["4000", 6],
    ] as const) {
      // Binnen € 15: de tarieven zijn afgerond op verkoopbare bedragen, en in
      // zone 2 is de meerkost bewust niet doorgerekend.
      expect(Math.abs(over(postcode, zone) - thuis)).toBeLessThan(50);
    }
  });

  it("laat een adres zonder vast tarief niet stil op € 0 vallen", () => {
    /*
      Aarlen (zone 7) en Groningen (zone 8) krijgen een offerte. Dat mag nooit
      als gratis transport door de checkout glippen: `leverbaar` is false, de
      wizard stuurt naar `api/transport-offerte` en `api/checkout` weigert.
    */
    for (const [land, postcode, nr] of [
      ["BE", "6700", 7],
      ["BE", "6790", 7],
      ["NL", "9711", 8],
    ] as const) {
      const s = bookingSummary(CONFIG, { ...EMPTY_OPTIONS, land, postcode });
      expect(s.leverzone?.zone.nr).toBe(nr);
      expect(s.leverbaar).toBe(false);
      expect(s.transport).toBe(0);
    }
  });

  it("laat een boeking zonder postcode niet als leverbaar doorgaan", () => {
    const s = bookingSummary(CONFIG, EMPTY_OPTIONS);
    expect(s.leverbaar).toBe(false);
    expect(s.leverzone).toBeNull();
  });

  it("rekent spoed alleen aan in de zones die het aanbieden", () => {
    const gent = bookingSummary(CONFIG, {
      ...EMPTY_OPTIONS,
      land: "BE",
      postcode: "9000",
      spoed: true,
    });
    expect(gent.spoed).toBe(true);
    expect(gent.transport).toBe(transportTarief(gent.leverzone!.zone, true));

    /*
      Zone 5 biedt geen spoed aan. Zonder afvlakking gaf `transportTarief` daar
      `null` en viel het transport stil op € 0 terug — gratis vervoer voor wie
      een extra veld meestuurt.
    */
    const namen = bookingSummary(CONFIG, {
      ...EMPTY_OPTIONS,
      land: "BE",
      postcode: "5000",
      spoed: true,
    });
    expect(namen.spoed).toBe(false);
    expect(namen.transport).toBe(namen.leverzone!.zone.tarief);
  });
});
