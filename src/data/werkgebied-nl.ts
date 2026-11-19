/**
 * GEGENEREERD door `scripts/fetch-plaatsen.mjs` op 2026-11-19. Niet met de
 * hand aanpassen — de provincies staan in `NL_WERKGEBIED` in dat script.
 *
 * Welke Nederlandse postcodes in ons werkgebied liggen: Noord-Brabant, Zeeland
 * en Nederlands Limburg, de drie provincies uit de sitemap. Elke regel geldt
 * vanaf haar postcode tot de volgende. Daarbuiten is het transport op maat
 * (`zoneVoor` in `src/lib/levering.ts`).
 *
 * Bron: GeoNames postcodes (CC BY 4.0).
 */
export const NL_WERKGEBIED: readonly (readonly [string, boolean])[] = [
  ["1011", false],
  ["4251", true],
  ["5301", false],
  ["5341", true],
  ["6511", false],
  ["6584", true],
  ["6601", false],
];
