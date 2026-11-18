import { useLocation } from "react-router-dom";
import GemeenteSjabloon from "./plaats/GemeenteSjabloon";
import { GEMEENTE_BY_PATH, GEMEENTE_ROUTES } from "@/data/gemeente-slugs";
import { GEMEENTE_BY_SLUG } from "@/data/gemeenten";
import { REGIO_BY_SLUG } from "@/data/regios";

/**
 * De Nederlandse gemeentepagina's (/bouwdroger-huren-<gemeente>).
 *
 * Dun met opzet: deze pagina kiest alleen de tekst uit `gemeenten.ts` en de
 * werffoto van de provincie, de vorm staat in `plaats/GemeenteSjabloon.tsx`.
 * Het Frans heeft zijn eigen dunne pagina (`GemeentePageFr.tsx`), zodat
 * `gemeenten.ts` (megabytes Nederlandse tekst) nooit in de chunk van een
 * Franstalige belandt, en de Franse teksten nooit in die van een
 * Nederlandstalige.
 */
const GemeentePage = () => {
  const { pathname } = useLocation();
  const route = GEMEENTE_BY_PATH[pathname.replace(/\/$/, "")] ?? GEMEENTE_ROUTES[0];
  return (
    <GemeenteSjabloon
      gemeente={GEMEENTE_BY_SLUG[route.slug]}
      beeld={REGIO_BY_SLUG[route.regio].beeld}
    />
  );
};

export default GemeentePage;
