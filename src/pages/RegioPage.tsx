import { useLocation } from "react-router-dom";
import RegioSjabloon from "./plaats/RegioSjabloon";
import { REGIO_BY_PATH, REGIO_ROUTES } from "@/data/regio-slugs";
import { REGIO_BY_SLUG } from "@/data/regios";

/**
 * De Nederlandse provinciepagina's (/bouwdroger-huren-<provincie>).
 *
 * Dun met opzet: deze pagina kiest alleen de tekst uit `regios.ts`, de vorm
 * staat in `plaats/RegioSjabloon.tsx`. Het Frans heeft zijn eigen dunne pagina
 * (`RegioPageFr.tsx`), zodat de 150 kB Nederlandse tekst alleen in déze chunk
 * zit en een Franstalige hem nooit laadt.
 *
 * Welke provincie getoond wordt volgt uit het pad: React Router kan geen
 * `bouwdroger-huren-:regio`, dus App.tsx registreert vaste routes die
 * allemaal hier uitkomen.
 */
const RegioPage = () => {
  const { pathname } = useLocation();
  const route = REGIO_BY_PATH[pathname.replace(/\/$/, "")] ?? REGIO_ROUTES[0];
  return <RegioSjabloon regio={REGIO_BY_SLUG[route.slug]} />;
};

export default RegioPage;
