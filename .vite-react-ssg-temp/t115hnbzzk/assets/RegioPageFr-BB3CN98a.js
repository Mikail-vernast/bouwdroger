import { jsx } from "react/jsx-runtime";
import { R as RegioSjabloon } from "./RegioSjabloon-ByyoygBv.js";
import { L as LAAD_REGIO_FR } from "./index-BWIZi_FO.js";
import "react";
import "react-router-dom";
import "./PageMeta-BXulEWcY.js";
import "vite-react-ssg";
import "../main.mjs";
import "lucide-react";
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
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/RegioPageFr.tsx");
async function laadRegioPaginaFr(slug) {
  const laad = LAAD_REGIO_FR[slug];
  if (!laad) throw new Error(`Geen Franse tekst voor provincie ${slug}`);
  const regio = await laad();
  const RegioPageFr = () => /* @__PURE__ */ jsx(RegioSjabloon, { regio, dans: regio.dans });
  return RegioPageFr;
}
export {
  laadRegioPaginaFr
};
