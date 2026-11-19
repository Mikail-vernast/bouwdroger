/**
 * De Franse provinciepagina's, één bestand per provincie.
 *
 * Eén bestand per provincie in plaats van één `regios-fr.ts`, om twee redenen.
 * Een bezoeker van /fr/location-deshumidificateur-liege laadt alleen de tekst
 * van Luik, niet die van tien andere provincies. En wie een provincie bijwerkt,
 * raakt geen bestand aan waarin iemand anders tegelijk een andere bijwerkt.
 *
 * De laders staan hier uitgeschreven en niet als `import.meta.glob`: zo is in
 * één oogopslag te zien welke provincies een Franse pagina hebben, en vindt
 * TypeScript een tikfout in een bestandsnaam.
 */
import type { RegioFr } from "./basis.js";

export type { RegioFr } from "./basis.js";

export const LAAD_REGIO_FR: Record<string, () => Promise<RegioFr>> = {
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
