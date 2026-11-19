import type { ComponentType } from "react";
import GemeenteSjabloon from "./plaats/GemeenteSjabloon";
import { GEMEENTE_ROUTES } from "@/data/gemeente-slugs";
import { LAAD_GEMEENTEN_FR } from "@/data/gemeenten-fr/laders";
import { LAAD_REGIO_FR } from "@/data/regios-fr";

/**
 * De Franse gemeentepagina's (/fr/location-deshumidificateur-<gemeente>).
 *
 * Een lader in plaats van een gewone pagina, zoals `RegioPageFr`: App.tsx
 * roept hem aan in de `lazy` van de Franse route met de slug van de gemeente.
 * Hij laadt de Franse teksten van alleen die provincie (`gemeenten-fr/<regio>`)
 * en de Franse provinciepagina voor de werffoto met haar Franse alt-tekst.
 * `gemeenten.ts` en `regios.ts` komen er niet aan te pas.
 */
export async function laadGemeentePaginaFr(slug: string): Promise<ComponentType> {
  const route = GEMEENTE_ROUTES.find((g) => g.slug === slug);
  const laadTeksten = route && LAAD_GEMEENTEN_FR[route.regio];
  const laadRegio = route && LAAD_REGIO_FR[route.regio];
  if (!laadTeksten || !laadRegio) throw new Error(`Geen Franse tekst voor gemeente ${slug}`);
  const [teksten, regio] = await Promise.all([laadTeksten(), laadRegio()]);
  const gemeente = teksten[slug];
  if (!gemeente) throw new Error(`Geen Franse tekst voor gemeente ${slug}`);
  const GemeentePageFr = () => <GemeenteSjabloon gemeente={gemeente} beeld={regio.beeld} />;
  return GemeentePageFr;
}
