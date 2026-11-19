import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { A as ArrowRightIcon } from "./V3Header-BeIMcMg7.js";
import { u as useCopy, a as useLokaalPad } from "../main.mjs";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/ToestelKaart.tsx");
const isVochtafvoer = (chip) => chip.endsWith("liter per dag") || chip.endsWith("litres par jour") || chip.endsWith("litres per day");
const COPY = { nl: { cta: "Product huren" }, fr: { cta: "Louer cet appareil" }, en: { cta: "Hire this unit" } };
const Inhoud = ({
  tag,
  image,
  alt,
  name,
  blurb,
  eco,
  chips = [],
  pricePrefix,
  price,
  priceNote,
  cta
}) => {
  const t = useCopy(COPY);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "tk-media", children: [
      tag && /* @__PURE__ */ jsx("span", { className: "tk-tag", children: tag }),
      /* @__PURE__ */ jsx("img", { src: image, alt, width: 600, height: 600, loading: "lazy", decoding: "async" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "tk-body", children: [
      /* @__PURE__ */ jsx("h3", { children: name }),
      blurb && /* @__PURE__ */ jsx("p", { children: blurb }),
      (eco || chips.length > 0) && /* @__PURE__ */ jsxs("div", { className: "tk-chips", children: [
        eco && /* @__PURE__ */ jsxs("span", { className: "tk-chip eco", children: [
          /* @__PURE__ */ jsx("img", { src: "/vernast/icoon-eco.webp", alt: "", width: 96, height: 96, loading: "lazy" }),
          " Eco"
        ] }),
        chips.map((chip) => /* @__PURE__ */ jsxs("span", { className: isVochtafvoer(chip) ? "tk-chip water" : "tk-chip", children: [
          isVochtafvoer(chip) && /* @__PURE__ */ jsx("img", { src: "/vernast/icoon-druppel.webp", alt: "", width: 96, height: 96, loading: "lazy" }),
          chip
        ] }, chip))
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "tk-foot", children: [
        /* @__PURE__ */ jsxs("span", { className: "tk-cta", children: [
          cta ?? t.cta,
          " ",
          /* @__PURE__ */ jsx(ArrowRightIcon, { size: 13, strokeWidth: 2.6 })
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "tk-price", children: [
          pricePrefix,
          /* @__PURE__ */ jsx("b", { children: price }),
          /* @__PURE__ */ jsx("small", { children: priceNote })
        ] })
      ] })
    ] })
  ] });
};
const ToestelKaart = (props) => props.external ? /* @__PURE__ */ jsx("a", { className: `tk${props.hot ? " hot" : ""}`, href: props.href, target: "_blank", rel: "noopener", children: /* @__PURE__ */ jsx(Inhoud, { ...props }) }) : /* @__PURE__ */ jsx(InterneKaart, { ...props });
const InterneKaart = (props) => {
  const lp = useLokaalPad();
  return /* @__PURE__ */ jsx(Link, { className: `tk${props.hot ? " hot" : ""}`, to: lp(props.href), children: /* @__PURE__ */ jsx(Inhoud, { ...props }) });
};
export {
  ToestelKaart as T
};
