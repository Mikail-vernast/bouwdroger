/**
 * De Engelse provinciepagina's, één bestand per provincie, met dezelfde opzet
 * en om dezelfde redenen als `regios-fr/index.ts`: een bezoeker laadt alleen
 * de tekst van zijn eigen provincie, en wie een provincie bijwerkt raakt geen
 * bestand aan waarin iemand anders tegelijk een andere bijwerkt.
 */
import type { RegioEn } from "./basis.js";

export type { RegioEn } from "./basis.js";

export const LAAD_REGIO_EN: Record<string, () => Promise<RegioEn>> = {
  antwerpen: async () => (await import("./antwerpen.js")).REGIO,
  "oost-vlaanderen": async () => (await import("./oost-vlaanderen.js")).REGIO,
  "vlaams-brabant": async () => (await import("./vlaams-brabant.js")).REGIO,
  brussel: async () => (await import("./brussel.js")).REGIO,
  "west-vlaanderen": async () => (await import("./west-vlaanderen.js")).REGIO,
  limburg: async () => (await import("./limburg.js")).REGIO,
  "waals-brabant": async () => (await import("./waals-brabant.js")).REGIO,
  henegouwen: async () => (await import("./henegouwen.js")).REGIO,
  namen: async () => (await import("./namen.js")).REGIO,
  luxemburg: async () => (await import("./luxemburg.js")).REGIO,
  luik: async () => (await import("./luik.js")).REGIO,
};
