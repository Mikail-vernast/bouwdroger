import { jsx } from "react/jsx-runtime";
import { useLocation } from "react-router-dom";
import { R as RegioSjabloon } from "./RegioSjabloon-ByyoygBv.js";
import { m as REGIO_BY_PATH, R as REGIO_ROUTES } from "../main.mjs";
import { R as REGIO_BY_SLUG } from "./regios-DRy2k9--.js";
import "react";
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
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/RegioPage.tsx");
const RegioPage = () => {
  const { pathname } = useLocation();
  const route = REGIO_BY_PATH[pathname.replace(/\/$/, "")] ?? REGIO_ROUTES[0];
  return /* @__PURE__ */ jsx(RegioSjabloon, { regio: REGIO_BY_SLUG[route.slug] });
};
export {
  RegioPage as default
};
