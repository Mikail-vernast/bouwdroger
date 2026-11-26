/*
  Kleur en materiaal per kamer. De woning was overal dezelfde beige; nu krijgt
  elke kamer gebroken wit als basis, één accentmuur in haar eigen tint, een
  vloer die bij de kamersoort hoort en textiel dat erbij past. Een warm,
  hedendaags Vlaams palet: salie, warme greige, zacht terracotta, mistig blauw,
  diep groen, met eik, linnen, wol, cognac, zwart metaal en messing.

  Geen twee kamers die een muur delen krijgen dezelfde accentkleur, en de
  volgorde verschuift per bouwlaag, zodat ook boven elkaar liggende kamers
  verschillen.
*/
import type { Kamer } from "../../woning";
import type { KamerPalet } from "./plaatsing";

export const KLEUR = {
  wit: "#f2eee7",
  salie: "#b3bea0",
  greige: "#cbbfae",
  terracotta: "#d39c80",
  mistblauw: "#a8b7c6",
  diepgroen: "#56664f",
  zand: "#e6d7c1",
  oker: "#d8b674",
  roze: "#dcb7aa",
} as const;
export type Accent = keyof typeof KLEUR;

/** De vloer per kamersoort: texturen uit public/simulator/3d/interieur. */
export type Vloer = "visgraat" | "planken" | "tegelwarm" | "tegelklein";

export interface Afwerking {
  /** basiskleur van de muren: gebroken wit met een vleug van het accent */
  muur: string;
  accent: string;
  accentNaam: Accent;
  vloer: Vloer;
  /** tint over de vloertextuur (wit = zoals gerenderd) */
  vloerTint: string;
  /** tegels tot het plafond in de natte zone */
  wandtegel: boolean;
  palet: KamerPalet;
}

const VOORKEUR: Record<string, Accent[]> = {
  Leefruimte: ["greige", "terracotta", "salie", "oker"],
  Keuken: ["salie", "greige", "oker", "terracotta"],
  Slaapkamer: ["mistblauw", "salie", "roze", "zand", "greige"],
  Bureau: ["diepgroen", "mistblauw", "oker"],
  Badkamer: ["zand", "salie"],
  Toilet: ["diepgroen", "terracotta", "mistblauw"],
  Wasplaats: ["zand", "salie"],
  Berging: ["zand", "greige"],
  Dressing: ["roze", "zand"],
  Zolder: ["zand", "greige"],
  Hal: ["zand", "greige", "salie"],
  Gang: ["zand", "greige"],
  Overloop: ["zand", "greige", "salie"],
  Vestiaire: ["zand", "greige"],
};

const VLOER: Record<string, Vloer> = {
  Leefruimte: "visgraat",
  Keuken: "tegelwarm",
  Hal: "tegelwarm",
  Gang: "tegelwarm",
  Vestiaire: "tegelwarm",
  Wasplaats: "tegelwarm",
  Berging: "tegelwarm",
  Badkamer: "tegelklein",
  Toilet: "tegelklein",
};

/** Mengt twee hexkleuren (t = aandeel van b). */
export function meng(a: string, b: string, t: number): string {
  const p = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  const [x, y] = [p(a), p(b)];
  return `#${x.map((v, i) => Math.round(v + (y[i] - v) * t).toString(16).padStart(2, "0")).join("")}`;
}

/** Textiel per kamersoort, afgestemd op het accent. */
function textiel(k: Kamer, accent: Accent, nr: number): KamerPalet {
  const a = KLEUR[accent];
  const diep = meng(a, "#3a3029", 0.35);
  switch (k.naam) {
    case "Leefruimte":
      return {
        textiel: {
          stof: nr % 2 ? "#a7744f" : "#cfc4b2", // cognac of linnen greige
          stof_accent: diep,
          wol: nr % 2 ? "#e3d6c0" : "#c4825e",
          kleed: meng("#e4d8c4", a, 0.25),
          kleed_rand: meng("#8c735a", a, 0.2),
          gordijn: meng("#c9b69c", a, 0.3),
        },
        hout: "#b78a5c",
      };
    case "Slaapkamer":
      return {
        textiel: {
          stof: meng(a, "#6f6458", 0.25), // gestoffeerd hoofdbord in het accent
          stof_accent: meng(a, "#ffffff", 0.2),
          linnen: "#f3eee6",
          linnen_2: meng("#e3d8c8", a, 0.2),
          wol: nr % 2 ? "#c7915f" : meng(a, "#2f2a26", 0.3),
          kleed: meng("#eee5d6", a, 0.3),
          kleed_rand: meng("#efe6d8", a, 0.45),
          gordijn: meng(a, "#7b6d60", 0.15),
        },
        hout: nr % 2 ? "#8a6244" : "#c19a70",
      };
    case "Bureau":
      return {
        textiel: { stof: meng(a, "#3a3029", 0.2), kleed: meng("#e7dcc9", a, 0.25), kleed_rand: meng("#e7dcc9", a, 0.25), gordijn: meng("#cdbca4", a, 0.2) },
        hout: nr % 2 ? "#8a6244" : "#a97c52",
      };
    case "Keuken":
      return { textiel: { stof: "#d9cdb9", gordijn: "#cdbca4" }, hout: "#b78a5c", front: meng(a, "#e9e5dc", 0.15) };
    default:
      // Hal, gang, badkamer, wasplaats: een loper of badmat in het accent, de schoenkast in eik.
      return { textiel: { gordijn: "#cdbca4", kleed: meng("#d9c6aa", a, 0.35), kleed_rand: meng("#8c735a", a, 0.25), stof: meng(a, "#7b6d60", 0.3) }, hout: "#b78a5c" };
  }
}

const raken = (a: Kamer, b: Kamer) =>
  a.verdieping === b.verdieping &&
  Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x) > -1e-6 &&
  Math.min(a.z + a.l, b.z + b.l) - Math.max(a.z, b.z) > -1e-6;

/**
 * De afwerking van alle kamers van een woning. De kamers worden per laag in
 * planvolgorde afgelopen; elke kamer neemt het eerste accent uit haar
 * voorkeurlijst dat geen buur al heeft, en de lijst schuift op per laag.
 */
export function afwerkingVoor(kamers: Kamer[]): Map<string, Afwerking> {
  const uit = new Map<string, Afwerking>();
  const perSoort = new Map<string, number>();
  for (const k of kamers) {
    const lijst = VOORKEUR[k.naam] ?? ["zand", "greige"];
    const nr = perSoort.get(k.naam) ?? 0;
    perSoort.set(k.naam, nr + 1);
    const buren = kamers.filter((b) => b !== k && uit.has(b.id) && raken(k, b)).map((b) => uit.get(b.id)!.accentNaam);
    const onder = kamers.filter((b) => b.verdieping === k.verdieping - 1 && uit.has(b.id) && Math.min(k.x + k.w, b.x + b.w) - Math.max(k.x, b.x) > 0.5 && Math.min(k.z + k.l, b.z + b.l) - Math.max(k.z, b.z) > 0.5)
      .map((b) => uit.get(b.id)!.accentNaam);
    const draai = (nr + k.verdieping) % lijst.length;
    const volgorde = [...lijst.slice(draai), ...lijst.slice(0, draai)];
    const accentNaam = volgorde.find((a) => !buren.includes(a) && !onder.includes(a)) ?? volgorde.find((a) => !buren.includes(a)) ?? volgorde[0];
    const accent = KLEUR[accentNaam];
    const vloer = VLOER[k.naam] ?? (k.naam === "Overloop" ? "planken" : "planken");
    uit.set(k.id, {
      accentNaam,
      accent,
      // Kalkverf: gebroken wit met een vleug van het accent, zodat de kamer één geheel is.
      muur: meng(KLEUR.wit, accent, k.soort === "circulatie" ? 0.12 : 0.08),
      vloer,
      vloerTint: vloer === "planken" && nr % 2 ? "#e9dccb" : "#ffffff",
      wandtegel: k.naam === "Badkamer" || k.naam === "Toilet",
      palet: textiel(k, accentNaam, nr),
    });
  }
  return uit;
}
