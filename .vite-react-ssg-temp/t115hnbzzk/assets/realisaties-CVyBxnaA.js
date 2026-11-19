import { REALISATIES, REALISATIE_SOORTEN } from "./realisaties-eA_H-cxM.js";
import { jsxs, Fragment, jsx } from "react/jsx-runtime";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/realisatiesInTaal.ts");
let frans = null;
let fransBelofte = null;
let engels = null;
let engelsBelofte = null;
function laadRealisatiesFr() {
  fransBelofte ??= (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/realisaties.fr.ts"), import("./realisaties.fr-C6tO63tA.js")).then((m) => frans = m);
  return fransBelofte;
}
function laadRealisatiesEn() {
  engelsBelofte ??= (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/realisaties.en.ts"), import("./realisaties.en-DlEDaXZB.js")).then((m) => engels = m);
  return engelsBelofte;
}
function fransOfSchors() {
  if (frans) return frans;
  throw laadRealisatiesFr();
}
function engelsOfSchors() {
  if (engels) return engels;
  throw laadRealisatiesEn();
}
function realisatiesInTaal(taal) {
  if (taal === "fr") return fransOfSchors().REALISATIES_FR;
  if (taal === "en") return engelsOfSchors().REALISATIES_EN;
  return REALISATIES;
}
function realisatieSoortenInTaal(taal) {
  if (taal === "fr") return fransOfSchors().REALISATIE_SOORTEN_FR;
  if (taal === "en") return engelsOfSchors().REALISATIE_SOORTEN_EN;
  return REALISATIE_SOORTEN;
}
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/realisaties/icons.tsx");
const svg = (children, extra) => /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", width: "1em", height: "1em", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...extra, children });
const GridIcon = (p) => svg(
  /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("rect", { x: "3", y: "3", width: "7", height: "7", rx: "1.5" }),
    /* @__PURE__ */ jsx("rect", { x: "14", y: "3", width: "7", height: "7", rx: "1.5" }),
    /* @__PURE__ */ jsx("rect", { x: "3", y: "14", width: "7", height: "7", rx: "1.5" }),
    /* @__PURE__ */ jsx("rect", { x: "14", y: "14", width: "7", height: "7", rx: "1.5" })
  ] }),
  p
);
const DropIcon = (p) => svg(/* @__PURE__ */ jsx("path", { d: "M12 2.7s6 6.4 6 10.3a6 6 0 0 1-12 0c0-3.9 6-10.3 6-10.3Z" }), p);
const ShieldIcon = (p) => svg(/* @__PURE__ */ jsx("path", { d: "M12 2.5 20 6v6c0 5-3.4 8.4-8 9.5-4.6-1.1-8-4.5-8-9.5V6l8-3.5Z" }), p);
const FlowIcon = (p) => svg(
  /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M3 8h11a3 3 0 1 0-3-3" }),
    /* @__PURE__ */ jsx("path", { d: "M3 13h15a3 3 0 1 1-3 3" }),
    /* @__PURE__ */ jsx("path", { d: "M3 18h8" })
  ] }),
  p
);
const DryIcon = (p) => svg(/* @__PURE__ */ jsx("path", { d: "M12 22V8M5 15l7 7 7-7" }), p);
const MeasureIcon = (p) => svg(/* @__PURE__ */ jsx("path", { d: "M12 2v20M2 12h20" }), p);
const HouseIcon = (p) => svg(/* @__PURE__ */ jsx("path", { d: "M4 20h16M6 20V8l6-4 6 4v12" }), p);
const PinIcon = (p) => svg(
  /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M12 2a7 7 0 0 1 7 7c0 4-7 13-7 13S5 13 5 9a7 7 0 0 1 7-7Z" }),
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "9", r: "2.5" })
  ] }),
  p
);
const ArrowRight = (p) => svg(/* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx("path", { d: "M5 12h14" }),
  /* @__PURE__ */ jsx("path", { d: "m12 5 7 7-7 7" })
] }), { ...p, strokeWidth: 2.2 });
const ArrowLeft = (p) => svg(/* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx("path", { d: "M19 12H5" }),
  /* @__PURE__ */ jsx("path", { d: "m12 19-7-7 7-7" })
] }), { ...p, strokeWidth: 2.2 });
const XIcon = (p) => svg(/* @__PURE__ */ jsx("path", { d: "M18 6 6 18M6 6l12 12" }), { ...p, strokeWidth: 2.5 });
export {
  ArrowRight as A,
  DropIcon as D,
  FlowIcon as F,
  GridIcon as G,
  HouseIcon as H,
  MeasureIcon as M,
  PinIcon as P,
  ShieldIcon as S,
  XIcon as X,
  realisatieSoortenInTaal as a,
  ArrowLeft as b,
  DryIcon as c,
  realisatiesInTaal as r
};
