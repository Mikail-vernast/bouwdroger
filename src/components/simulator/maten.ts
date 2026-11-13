import type { Dak } from "@/lib/droogSimulator";

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

/** Hoogte van de nok boven de bovenste vloerplaat. */
export function nokHoogte(dak: Dak, l: number): number {
  return dak === "zadeldak" ? Math.min(l * 0.38, 4.2) : dak === "lessenaar" ? 2.4 : 0.4;
}
