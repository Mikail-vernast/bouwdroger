/**
 * Bouwstenen voor de Franse provinciebestanden in deze map.
 *
 * Hetzelfde als bovenaan `regios.ts`, maar in het Frans: de routegegevens met
 * de Franse naam erin, bedragen in de Franse notatie (`29 €`), en een
 * `areaServed` die "Belgique" zegt. Importeert `regios.ts` bewust niet: dat is
 * 150 kB Nederlandse tekst, en die hoort niet in de chunk van een Franstalige.
 */
import { REGIO_ROUTES, type RegioRoute } from "../regio-slugs.js";
import { plaatsFr } from "../gemeente-slugs.js";
import { TARIEVEN } from "../tarieven.js";
import { PRODUCTS } from "../verhuur.js";
import type { Regio } from "../regios.js";

/**
 * Een provinciepagina in het Frans: dezelfde velden als in het Nederlands, plus
 * hoe de provincie in een Franse zin staat. Het Frans zegt niet overal "in":
 * "dans la province d'Anvers", "en Flandre orientale", "à Bruxelles", "dans le
 * Hainaut". Het sjabloon kan dat niet raden, dus staat het bij de tekst.
 */
export interface RegioFr extends Regio {
  /** "dans la province d'Anvers", "en Brabant wallon", "à Bruxelles". */
  dans: string;
}

/**
 * De routegegevens van een Belgische provincie, met de Franse naam en de
 * plaatsnamen van `towns` in het Frans. Het pad blijft het Nederlandse: het
 * sjabloon zet het om met `lokaalPad`, zoals elke interne link.
 */
export function routeFr(slug: string): RegioRoute {
  const r = REGIO_ROUTES.find((x) => x.slug === slug);
  if (!r?.nameFr) throw new Error(`Geen Franse provincie: ${slug}`);
  return { ...r, name: r.nameFr, towns: r.towns.map(plaatsFr) };
}

/** `29 €`, de Belgisch-Franse notatie. Geen centen: het zijn vanafprijzen. */
export const euroFr = (n: number) => `${n.toLocaleString("fr-BE")} €`;

/** De dagprijs van een toestel uit `PRODUCTS`, nooit overgetypt. */
export const dagFr = (key: string) => euroFr(PRODUCTS[key].day);

export const LADDER_FR = euroFr(TARIEVEN.pricing.ladder_fee);
export const POMP_FR = euroFr(TARIEVEN.pricing.pump_price_per_day);

/** `areaServed` van de Service-schema, in de taal van de pagina. */
export const provinceFr = (name: string) => ({
  "@type": "AdministrativeArea",
  name,
  containedInPlace: { "@type": "Country", name: "Belgique" },
});
