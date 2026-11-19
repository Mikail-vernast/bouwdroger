import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { A as ArrowRightIcon } from "./V3Header-BeIMcMg7.js";
import { R as Reveal } from "./Reveal-NNPkAe35.js";
import { P as PRODUCTS } from "./verhuur-CgnDb-wO.js";
import { u as useCopy, a as useLokaalPad } from "../main.mjs";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/VerderLezen.tsx");
const COPY = { nl: { kicker: "Verder lezen" }, fr: { kicker: "Pour aller plus loin" }, en: { kicker: "Further reading" } };
const VerderLezen = ({
  titel,
  groepen,
  /**
   * De sectieachtergrond: `sw` wit, `sw2` grijs, `sr` rood. De pagina kiest wat
   * in haar afwisseling past — de inhoudspagina's wisselen wit en rood af.
   */
  achtergrond = "sw",
  /** De rode kop boven de titel. `null` laat hem weg. */
  kicker,
  children
}) => {
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const kop = kicker === void 0 ? t.kicker : kicker;
  const zichtbaar = groepen.map((g) => ({ ...g, links: g.links.filter((l) => !l.toestel || PRODUCTS[l.toestel]) })).filter((g) => g.links.length > 0);
  return /* @__PURE__ */ jsx("section", { className: achtergrond, children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
    /* @__PURE__ */ jsxs("div", { className: "sec-head mid", children: [
      kop && /* @__PURE__ */ jsx("span", { className: "kick", children: kop }),
      /* @__PURE__ */ jsx("h2", { className: "sec", children: titel })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "vl", children: zichtbaar.map((groep, i) => /* @__PURE__ */ jsxs(Reveal, { from: "up", delay: i * 0.08, className: "vlcard", children: [
      /* @__PURE__ */ jsx("h3", { children: groep.kop }),
      /* @__PURE__ */ jsx("ul", { children: groep.links.map((link) => /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsxs(Link, { to: lp(link.to), children: [
          /* @__PURE__ */ jsx(ArrowRightIcon, { size: 13, strokeWidth: 2.6 }),
          /* @__PURE__ */ jsx("span", { children: link.label })
        ] }),
        link.sub && /* @__PURE__ */ jsx("p", { children: link.sub })
      ] }, link.to)) })
    ] }, groep.kop)) }),
    children
  ] }) });
};
export {
  VerderLezen as V
};
