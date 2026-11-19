import { jsx, jsxs } from "react/jsx-runtime";
import { k as PhoneIcon } from "./V3Header-BeIMcMg7.js";
import { C as CONTACT } from "./PageMeta-BXulEWcY.js";
import { u as useCopy } from "../main.mjs";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/content/FaqBlok.tsx");
const COPY = {
  nl: {
    kicker: "Veelgestelde vragen",
    hulpKop: "Staat uw vraag er niet bij?",
    hulp: "Onze droogexperts helpen u meteen verder, met advies op maat van uw situatie.",
    bel: "Bel",
    stel: "Stel uw vraag online"
  },
  fr: {
    kicker: "Questions fréquentes",
    hulpKop: "Votre question n'y figure pas ?",
    hulp: "Nos experts du séchage vous aident tout de suite, avec un conseil adapté à votre situation.",
    bel: "Appelez le",
    stel: "Posez votre question en ligne"
  },
  en: {
    kicker: "Frequently asked questions",
    hulpKop: "Is your question not listed?",
    hulp: "Our drying experts will help you straight away, with advice tailored to your situation.",
    bel: "Call",
    stel: "Ask your question online"
  }
};
const FaqBlok = ({
  kicker,
  titel,
  vragen,
  sleutel,
  variant = "rood",
  vraagHref = "#formulier",
  id = "faq",
  children
}) => {
  const t = useCopy(COPY);
  return /* @__PURE__ */ jsx("section", { className: `fq ${variant}`, id, children: /* @__PURE__ */ jsxs("div", { className: "fq-wrap", children: [
    /* @__PURE__ */ jsxs("div", { className: "fq-grid", children: [
      /* @__PURE__ */ jsxs("div", { className: "fq-zij", children: [
        /* @__PURE__ */ jsx("span", { className: "fq-kick", children: kicker ?? t.kicker }),
        /* @__PURE__ */ jsx("h2", { className: "fq-titel", children: titel }),
        /* @__PURE__ */ jsxs("div", { className: "fq-help", children: [
          /* @__PURE__ */ jsx("h3", { children: t.hulpKop }),
          /* @__PURE__ */ jsx("p", { children: t.hulp }),
          /* @__PURE__ */ jsxs("div", { className: "fq-knoppen", children: [
            /* @__PURE__ */ jsxs("a", { className: "fq-bel", href: `tel:${CONTACT.phoneE164}`, children: [
              /* @__PURE__ */ jsx(PhoneIcon, {}),
              " ",
              t.bel,
              " ",
              CONTACT.phoneLocal
            ] }),
            /* @__PURE__ */ jsx("a", { className: "fq-stel", href: vraagHref, children: t.stel })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("dl", { className: "fq-lijst", children: vragen.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "fq-item", children: [
        /* @__PURE__ */ jsxs("dt", { children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "fq-toggle",
              type: "checkbox",
              id: `${sleutel}-${i}`,
              defaultChecked: i === 0
            }
          ),
          /* @__PURE__ */ jsxs("label", { htmlFor: `${sleutel}-${i}`, children: [
            item.q,
            /* @__PURE__ */ jsx("span", { className: "fq-pl", "aria-hidden": "true", children: "+" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("dd", { children: /* @__PURE__ */ jsx("p", { children: item.a }) })
      ] }, item.q)) })
    ] }),
    children
  ] }) });
};
export {
  FaqBlok as F
};
