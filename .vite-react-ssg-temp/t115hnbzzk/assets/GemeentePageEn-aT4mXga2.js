import { jsx } from "react/jsx-runtime";
import { G as GemeenteSjabloon } from "./GemeenteSjabloon-BDU-8Re3.js";
import { B as GEMEENTE_ROUTES } from "../main.mjs";
import { L as LAAD_REGIO_EN } from "./index-BhL29Cnl.js";
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
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-en/laders.ts");
const LAAD_GEMEENTEN_EN = {
  "antwerpen": async () => (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-en/antwerpen.ts"), import("./antwerpen-DzgJTZAg.js"))).GEMEENTEN,
  "oost-vlaanderen": async () => (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-en/oost-vlaanderen.ts"), import("./oost-vlaanderen-B2AvzyJ4.js"))).GEMEENTEN,
  "vlaams-brabant": async () => (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-en/vlaams-brabant.ts"), import("./vlaams-brabant-D4WDj0T4.js"))).GEMEENTEN,
  "west-vlaanderen": async () => (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-en/west-vlaanderen.ts"), import("./west-vlaanderen-BOi51fix.js"))).GEMEENTEN,
  "limburg": async () => (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-en/limburg.ts"), import("./limburg-ptmYwRbb.js"))).GEMEENTEN,
  "brussel": async () => (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-en/brussel.ts"), import("./brussel-CD8maCjv.js"))).GEMEENTEN,
  "waals-brabant": async () => (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-en/waals-brabant.ts"), import("./waals-brabant-Cht1117C.js"))).GEMEENTEN,
  "henegouwen": async () => (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-en/henegouwen.ts"), import("./henegouwen-DKo8gTza.js"))).GEMEENTEN,
  "namen": async () => (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-en/namen.ts"), import("./namen-BJZrT-1M.js"))).GEMEENTEN,
  "luxemburg": async () => (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-en/luxemburg.ts"), import("./luxemburg-B8FYQuYr.js"))).GEMEENTEN,
  "luik": async () => (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-en/luik.ts"), import("./luik-Dr31HNZU.js"))).GEMEENTEN
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/GemeentePageEn.tsx");
async function laadGemeentePaginaEn(slug) {
  const route = GEMEENTE_ROUTES.find((g) => g.slug === slug);
  const laadTeksten = route && LAAD_GEMEENTEN_EN[route.regio];
  const laadRegio = route && LAAD_REGIO_EN[route.regio];
  if (!laadTeksten || !laadRegio) throw new Error(`Geen Engelse tekst voor gemeente ${slug}`);
  const [teksten, regio] = await Promise.all([laadTeksten(), laadRegio()]);
  const gemeente = teksten[slug];
  if (!gemeente) throw new Error(`Geen Engelse tekst voor gemeente ${slug}`);
  const GemeentePageEn = () => /* @__PURE__ */ jsx(GemeenteSjabloon, { gemeente, beeld: regio.beeld });
  return GemeentePageEn;
}
export {
  laadGemeentePaginaEn
};
