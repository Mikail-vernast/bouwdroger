import type { ComponentType } from "react";
import GemeenteSjabloon from "./plaats/GemeenteSjabloon";
import { GEMEENTE_ROUTES } from "@/data/gemeente-slugs";
import { LAAD_GEMEENTEN_EN } from "@/data/gemeenten-en/laders";
import { LAAD_REGIO_EN } from "@/data/regios-en";

/**
 * De Engelse gemeentepagina's (/en/dehumidifier-hire-<gemeente>).
 *
 * Zoals `GemeentePageFr`: hij laadt de Engelse teksten van alleen die
 * provincie (`gemeenten-en/<regio>`) en de Engelse provinciepagina voor de
 * werffoto met haar Engelse alt-tekst.
 */
export async function laadGemeentePaginaEn(slug: string): Promise<ComponentType> {
  const route = GEMEENTE_ROUTES.find((g) => g.slug === slug);
  const laadTeksten = route && LAAD_GEMEENTEN_EN[route.regio];
  const laadRegio = route && LAAD_REGIO_EN[route.regio];
  if (!laadTeksten || !laadRegio) throw new Error(`Geen Engelse tekst voor gemeente ${slug}`);
  const [teksten, regio] = await Promise.all([laadTeksten(), laadRegio()]);
  const gemeente = teksten[slug];
  if (!gemeente) throw new Error(`Geen Engelse tekst voor gemeente ${slug}`);
  const GemeentePageEn = () => <GemeenteSjabloon gemeente={gemeente} beeld={regio.beeld} />;
  return GemeentePageEn;
}
