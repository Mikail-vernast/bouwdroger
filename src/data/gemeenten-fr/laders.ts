/**
 * De Franse gemeenteteksten per provincie, lui geladen.
 *
 * Elke provincie wordt zo een eigen chunk: wie de pagina van Mons opent, laadt
 * de teksten van Henegouwen en niets anders. Nederlandstaligen laden geen van
 * deze bestanden; zij krijgen `gemeenten.ts`.
 */
import type { Gemeente } from "../gemeenten.js";

type Laad = () => Promise<Record<string, Gemeente>>;

export const LAAD_GEMEENTEN_FR: Record<string, Laad> = {
  "antwerpen": async () => (await import("./antwerpen.js")).GEMEENTEN,
  "oost-vlaanderen": async () => (await import("./oost-vlaanderen.js")).GEMEENTEN,
  "vlaams-brabant": async () => (await import("./vlaams-brabant.js")).GEMEENTEN,
  "west-vlaanderen": async () => (await import("./west-vlaanderen.js")).GEMEENTEN,
  "limburg": async () => (await import("./limburg.js")).GEMEENTEN,
  "brussel": async () => (await import("./brussel.js")).GEMEENTEN,
  "waals-brabant": async () => (await import("./waals-brabant.js")).GEMEENTEN,
  "henegouwen": async () => (await import("./henegouwen.js")).GEMEENTEN,
  "namen": async () => (await import("./namen.js")).GEMEENTEN,
  "luxemburg": async () => (await import("./luxemburg.js")).GEMEENTEN,
  "luik": async () => (await import("./luik.js")).GEMEENTEN,
};
