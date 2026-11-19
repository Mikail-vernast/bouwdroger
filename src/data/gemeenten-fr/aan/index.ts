/**
 * Welke gemeenten een Franse pagina hebben, per provincie.
 *
 * Eén bestand per provincie, zodat wie de gemeenten van Luik vertaalt en wie
 * die van Gent vertaalt nooit hetzelfde bestand aanraken. Dit index-bestand
 * hoeft niemand bij te werken.
 *
 * Staat in de entry-chunk (`gemeente-slugs.ts` leest het voor de router), dus
 * alleen slugs, geen tekst. De tekst laadt pas op de pagina zelf.
 */
import { AAN as antwerpen } from "./antwerpen.js";
import { AAN as oost_vlaanderen } from "./oost-vlaanderen.js";
import { AAN as vlaams_brabant } from "./vlaams-brabant.js";
import { AAN as west_vlaanderen } from "./west-vlaanderen.js";
import { AAN as limburg } from "./limburg.js";
import { AAN as brussel } from "./brussel.js";
import { AAN as waals_brabant } from "./waals-brabant.js";
import { AAN as henegouwen } from "./henegouwen.js";
import { AAN as namen } from "./namen.js";
import { AAN as luxemburg } from "./luxemburg.js";
import { AAN as luik } from "./luik.js";

export const MET_FR_PER_REGIO: Record<string, readonly string[]> = {
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

export const GEMEENTEN_MET_FR: ReadonlySet<string> = new Set(Object.values(MET_FR_PER_REGIO).flat());
