import type { ComponentType } from "react";
import RegioSjabloon from "./plaats/RegioSjabloon";
import { LAAD_REGIO_FR } from "@/data/regios-fr";

/**
 * De Franse provinciepagina's (/fr/location-deshumidificateur-<provincie>).
 *
 * Geen gewone pagina maar een lader: App.tsx roept hem aan in de `lazy` van
 * elke Franse provincieroute, met de slug van die provincie. Zo laadt de route
 * alleen het tekstbestand van haar eigen provincie (`regios-fr/<slug>.ts`) en
 * nooit `regios.ts`. Omdat de tekst al binnen is vóór de route rendert, staat
 * ze bij de build gewoon in de geprerenderde HTML.
 */
export async function laadRegioPaginaFr(slug: string): Promise<ComponentType> {
  const laad = LAAD_REGIO_FR[slug];
  if (!laad) throw new Error(`Geen Franse tekst voor provincie ${slug}`);
  const regio = await laad();
  const RegioPageFr = () => <RegioSjabloon regio={regio} dans={regio.dans} />;
  return RegioPageFr;
}
