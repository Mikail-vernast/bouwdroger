import type { ComponentType } from "react";
import RegioSjabloon from "./plaats/RegioSjabloon";
import { LAAD_REGIO_EN } from "@/data/regios-en";
import { REGIO_ROUTES, regioInEn } from "@/data/regio-slugs";

/**
 * De Engelse provinciepagina's (/en/dehumidifier-hire-<provincie>).
 *
 * Een lader zoals `RegioPageFr`: App.tsx roept hem aan in de `lazy` van elke
 * Engelse provincieroute, zodat de route alleen het tekstbestand van haar
 * eigen provincie laadt (`regios-en/<slug>.ts`) en de tekst al in de
 * geprerenderde HTML staat.
 */
export async function laadRegioPaginaEn(slug: string): Promise<ComponentType> {
  const laad = LAAD_REGIO_EN[slug];
  const route = REGIO_ROUTES.find((r) => r.slug === slug);
  if (!laad || !route) throw new Error(`Geen Engelse tekst voor provincie ${slug}`);
  const regio = await laad();
  /* "in the province of Antwerp", "in East Flanders": zie `regioInEn`. */
  const waar = regioInEn(route);
  const RegioPageEn = () => <RegioSjabloon regio={regio} dans={waar} />;
  return RegioPageEn;
}
