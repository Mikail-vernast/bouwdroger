import { jsx } from "react/jsx-runtime";
import { R as RegioSjabloon } from "./RegioSjabloon-ByyoygBv.js";
import { L as LAAD_REGIO_EN } from "./index-BhL29Cnl.js";
import { R as REGIO_ROUTES, z as regioInEn } from "../main.mjs";
import "react";
import "react-router-dom";
import "./PageMeta-BXulEWcY.js";
import "vite-react-ssg";
import "./V3Header-BeIMcMg7.js";
import "./FontPreload-C6Rzq6ld.js";
import "./V3Footer-9z4J1I4x.js";
import "./verhuur-CgnDb-wO.js";
import "./tarieven-ZrzMF0e-.js";
import "./verhuur-8XCQs1EE.js";
import "./packages-DdkKuPcF.js";
import "./Reveal-NNPkAe35.js";
import "./ContactBlok-ykYeBJgi.js";
import "./AanvraagForm-CNDpbMyw.js";
import "./FaqBlok-Bkr2MHqW.js";
import "./plaats.copy-DyBymlm-.js";
import "./icons-DTi5RvwE.js";
import "./schema-VJMHyxOJ.js";
import "./verhuur.fr-CrIPL5Eo.js";
import "./provincie-gemeenten-Dl-UWRQV.js";
import "./droogtijden-B2lUiF15.js";
import "./reviews-BlVWZu-x.js";
import "./realisaties-eA_H-cxM.js";
import "./realisatie-regio-Bhy0QiA0.js";
import "./levering-CO7G5c_f.js";
/* empty css                    */
import "lucide-react";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/RegioPageEn.tsx");
async function laadRegioPaginaEn(slug) {
  const laad = LAAD_REGIO_EN[slug];
  const route = REGIO_ROUTES.find((r) => r.slug === slug);
  if (!laad || !route) throw new Error(`Geen Engelse tekst voor provincie ${slug}`);
  const regio = await laad();
  const waar = regioInEn(route);
  const RegioPageEn = () => /* @__PURE__ */ jsx(RegioSjabloon, { regio, dans: waar });
  return RegioPageEn;
}
export {
  laadRegioPaginaEn
};
