import { jsx } from "react/jsx-runtime";
import { G as GemeenteSjabloon } from "./GemeenteSjabloon-BDU-8Re3.js";
import { B as GEMEENTE_ROUTES } from "../main.mjs";
import { L as LAAD_REGIO_FR } from "./index-BWIZi_FO.js";
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
import "./realisaties-eA_H-cxM.js";
import "./realisatie-regio-Bhy0QiA0.js";
import "./reviews-BlVWZu-x.js";
import "./droogtijden-B2lUiF15.js";
/* empty css                    */
import "lucide-react";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-fr/laders.ts");
const LAAD_GEMEENTEN_FR = {
  "antwerpen": async () => (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-fr/antwerpen.ts"), import("./antwerpen-jtYSvitz.js"))).GEMEENTEN,
  "oost-vlaanderen": async () => (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-fr/oost-vlaanderen.ts"), import("./oost-vlaanderen-CK0OVH2a.js"))).GEMEENTEN,
  "vlaams-brabant": async () => (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-fr/vlaams-brabant.ts"), import("./vlaams-brabant-BB6D4kCo.js"))).GEMEENTEN,
  "west-vlaanderen": async () => (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-fr/west-vlaanderen.ts"), import("./west-vlaanderen-Cam0amk7.js"))).GEMEENTEN,
  "limburg": async () => (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-fr/limburg.ts"), import("./limburg-CW71if1M.js"))).GEMEENTEN,
  "brussel": async () => (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-fr/brussel.ts"), import("./brussel-CjP1KXKM.js"))).GEMEENTEN,
  "waals-brabant": async () => (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-fr/waals-brabant.ts"), import("./waals-brabant-JxhpJiHd.js"))).GEMEENTEN,
  "henegouwen": async () => (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-fr/henegouwen.ts"), import("./henegouwen-CmGx1X3s.js"))).GEMEENTEN,
  "namen": async () => (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-fr/namen.ts"), import("./namen-BKeBQEar.js"))).GEMEENTEN,
  "luxemburg": async () => (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-fr/luxemburg.ts"), import("./luxemburg-BpeVUwV9.js"))).GEMEENTEN,
  "luik": async () => (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-fr/luik.ts"), import("./luik-BEXgUO4-.js"))).GEMEENTEN
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/GemeentePageFr.tsx");
async function laadGemeentePaginaFr(slug) {
  const route = GEMEENTE_ROUTES.find((g) => g.slug === slug);
  const laadTeksten = route && LAAD_GEMEENTEN_FR[route.regio];
  const laadRegio = route && LAAD_REGIO_FR[route.regio];
  if (!laadTeksten || !laadRegio) throw new Error(`Geen Franse tekst voor gemeente ${slug}`);
  const [teksten, regio] = await Promise.all([laadTeksten(), laadRegio()]);
  const gemeente = teksten[slug];
  if (!gemeente) throw new Error(`Geen Franse tekst voor gemeente ${slug}`);
  const GemeentePageFr = () => /* @__PURE__ */ jsx(GemeenteSjabloon, { gemeente, beeld: regio.beeld });
  return GemeentePageFr;
}
export {
  laadGemeentePaginaFr
};
