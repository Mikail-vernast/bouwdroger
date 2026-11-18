/**
 * Alle Franse gemeenteteksten samen, gesleuteld op de Nederlandse slug.
 *
 * Voor tests en scripts. De pagina zelf gebruikt `laders.ts` en laadt alleen
 * haar eigen provincie: alle provincies samen worden zo groot als
 * `gemeenten.ts`, en die hoeft een bezoeker van Mons niet te krijgen.
 */
import type { Gemeente } from "../gemeenten.js";
import { GEMEENTEN as antwerpen } from "./antwerpen.js";
import { GEMEENTEN as oost_vlaanderen } from "./oost-vlaanderen.js";
import { GEMEENTEN as vlaams_brabant } from "./vlaams-brabant.js";
import { GEMEENTEN as west_vlaanderen } from "./west-vlaanderen.js";
import { GEMEENTEN as limburg } from "./limburg.js";
import { GEMEENTEN as brussel } from "./brussel.js";
import { GEMEENTEN as waals_brabant } from "./waals-brabant.js";
import { GEMEENTEN as henegouwen } from "./henegouwen.js";
import { GEMEENTEN as namen } from "./namen.js";
import { GEMEENTEN as luxemburg } from "./luxemburg.js";
import { GEMEENTEN as luik } from "./luik.js";

export const GEMEENTE_FR_PER_REGIO: Record<string, Record<string, Gemeente>> = {
  "antwerpen": antwerpen,
  "oost-vlaanderen": oost_vlaanderen,
  "vlaams-brabant": vlaams_brabant,
  "west-vlaanderen": west_vlaanderen,
  "limburg": limburg,
  "brussel": brussel,
  "waals-brabant": waals_brabant,
  "henegouwen": henegouwen,
  "namen": namen,
  "luxemburg": luxemburg,
  "luik": luik,
};

export const GEMEENTE_FR_BY_SLUG: Record<string, Gemeente> = Object.assign(
  {},
  ...Object.values(GEMEENTE_FR_PER_REGIO),
);
