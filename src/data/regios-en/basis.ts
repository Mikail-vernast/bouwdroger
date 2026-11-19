/**
 * Bouwstenen voor de Engelse provinciebestanden in deze map; het Engelse
 * evenbeeld van `regios-fr/basis.ts`. Importeert `regios.ts` bewust niet: dat
 * is 150 kB Nederlandse tekst, en die hoort niet in de chunk van een
 * Engelstalige.
 */
import { REGIO_ROUTES, type RegioRoute } from "../regio-slugs.js";
import { plaatsEn } from "../gemeente-slugs.js";
import { TARIEVEN } from "../tarieven.js";
import { PRODUCTS } from "../verhuur.js";
import type { Regio } from "../regios.js";

/**
 * Een provinciepagina in het Engels: dezelfde velden als in het Nederlands.
 * Hoe de provincie in een zin staat ("in the province of Antwerp", "in East
 * Flanders") volgt uit `zinEn` in `regio-slugs.ts`, zie `regioInEn` daar.
 */
export type RegioEn = Regio;

/**
 * De routegegevens van een Belgische provincie, met de Engelse naam en de
 * plaatsnamen van `towns` in het Engels. Het pad blijft het Nederlandse: het
 * sjabloon zet het om met `lokaalPad`, zoals elke interne link.
 */
export function routeEn(slug: string): RegioRoute {
  const r = REGIO_ROUTES.find((x) => x.slug === slug);
  if (!r?.nameEn) throw new Error(`Geen Engelse provincie: ${slug}`);
  return { ...r, name: r.nameEn, towns: r.towns.map(plaatsEn) };
}

/** `€29`, de Britse notatie. Geen centen: het zijn vanafprijzen. */
export const euroEn = (n: number) => `€${n.toLocaleString("en-GB")}`;

/** De dagprijs van een toestel uit `PRODUCTS`, nooit overgetypt. */
export const dagEn = (key: string) => euroEn(PRODUCTS[key].day);

export const LADDER_EN = euroEn(TARIEVEN.pricing.ladder_fee);
export const POMP_EN = euroEn(TARIEVEN.pricing.pump_price_per_day);

/** `areaServed` van de Service-schema, in de taal van de pagina. */
export const provinceEn = (name: string) => ({
  "@type": "AdministrativeArea",
  name,
  containedInPlace: { "@type": "Country", name: "Belgium" },
});
