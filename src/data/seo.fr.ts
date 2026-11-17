import type { SeoEntry } from "./seo";

/**
 * Titels en beschrijvingen in het Frans, met dezelfde sleutels als `SEO` in
 * `seo.ts` en dezelfde richtlijn: titel 50–60 tekens met het zoekwoord vooraan,
 * beschrijving 120–160 tekens. Belgisch Frans: « déshumidificateur de chantier »,
 * « chape », « plafonnage », vouvoiement.
 *
 * Wat hier ontbreekt, valt terug op het Nederlands (zie `seoVoor`).
 */
export const SEO_FR: Partial<Record<string, SeoEntry>> = {};
