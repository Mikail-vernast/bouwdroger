/**
 * Welke gemeenten een Engelse pagina hebben, per provincie. Dezelfde opzet als
 * `gemeenten-fr/aan/`: één bestand per provincie, zodat twee mensen die elk
 * een provincie vertalen nooit hetzelfde bestand aanraken. Dit index-bestand
 * hoeft niemand bij te werken.
 *
 * Staat in de entry-chunk (`gemeente-slugs.ts` leest het voor de router), dus
 * alleen slugs, geen tekst.
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

export const MET_EN_PER_REGIO: Record<string, readonly string[]> = {
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

export const GEMEENTEN_MET_EN: ReadonlySet<string> = new Set(Object.values(MET_EN_PER_REGIO).flat());
