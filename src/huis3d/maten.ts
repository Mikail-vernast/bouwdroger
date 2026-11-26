import type { Dak } from "./woning";
import type { Periode } from "./periode";

/*
  Bouwmaten van de getekende woning, in meter. Gedeeld door de SVG-woning
  (IsoHouse) en de 3D-woning (IsoHouse3D): wie hier iets aanpast, past beide
  tekeningen tegelijk aan — anders tonen de geprerenderde SVG en de 3D die
  erna verschijnt een ander huis.
*/
export const H = 2.6; // vrije hoogte
export const SLAB = 0.3;
export const FH = H + SLAB;
export const T = 0.24; // buitenmuur
export const TI = 0.12; // binnenmuur
export const HC = 1.1; // snijhoogte opengewerkt
/** Dorpel en vensterbank liggen zo ver boven de onderkant van het raamgat: nooit in hetzelfde vlak (z-fighting). */
export const VENSTER_OP = 0.012;

/**
 * Height of the ridge above the top floor slab. A gable roof from before 1950 is
 * steep (± 45°), one after 1990 ± 40°, in between ± 37°. straat.py uses the same
 * formula: the neighbours' roofs join this one.
 */
export function nokHoogte(dak: Dak, l: number, periode: Periode = "1950-1990"): number {
  if (dak !== "zadeldak") return dak === "lessenaar" ? 2.4 : 0.4;
  return periode === "voor1950" ? Math.min(l * 0.5, 5.2) : periode === "na1990" ? Math.min(l * 0.42, 4.6) : Math.min(l * 0.38, 4.2);
}
