import type { SeoEntry } from "./seo";

/**
 * Titels en beschrijvingen in het Engels (Brits), met dezelfde sleutels als
 * `SEO` in `seo.ts` en dezelfde richtlijn: titel 50–60 tekens met het zoekwoord
 * vooraan, beschrijving 120–160 tekens.
 *
 * Wat hier ontbreekt, valt terug op het Nederlands (zie `seoVoor`).
 */
export const SEO_EN: Partial<Record<string, SeoEntry>> = {};
