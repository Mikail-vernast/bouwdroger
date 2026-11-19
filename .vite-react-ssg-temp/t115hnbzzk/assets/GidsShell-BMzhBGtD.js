import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { P as PageMeta } from "./PageMeta-BXulEWcY.js";
import { l as V3Header } from "./V3Header-BeIMcMg7.js";
import { V as V3Footer } from "./V3Footer-9z4J1I4x.js";
import { F as FaqBlok } from "./FaqBlok-Bkr2MHqW.js";
import { h as articleSchema, o as organizationSchema, b as breadcrumbSchema, f as faqSchema } from "./schema-VJMHyxOJ.js";
import { u as useCopy, a as useLokaalPad, b as useTaal, H as HTML_LANG } from "../main.mjs";
/* empty css                                */
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/gids/GidsShell.tsx");
const COPY = {
  nl: {
    kruimelpad: "Kruimelpad",
    bereken: "Bereken uw droogpakket",
    afhalen: "Losse toestellen afhalen",
    faqKick: "Veelgestelde vragen",
    faqTitel: "Kort beantwoord"
  },
  fr: {
    kruimelpad: "Fil d'Ariane",
    bereken: "Calculez votre pack de séchage",
    afhalen: "Appareils à enlever",
    faqKick: "Questions fréquentes",
    faqTitel: "En bref"
  },
  en: {
    kruimelpad: "Breadcrumb",
    bereken: "Calculate your drying package",
    afhalen: "Collect individual units",
    faqKick: "Frequently asked questions",
    faqTitel: "In short"
  }
};
function inTaal(blok, taal) {
  if (taal === "nl" || !Array.isArray(blok["@graph"])) return blok;
  return {
    ...blok,
    "@graph": blok["@graph"].map(
      (knoop) => knoop["@type"] === "Article" ? { ...knoop, inLanguage: HTML_LANG[taal] } : knoop
    )
  };
}
const Arrow = () => /* @__PURE__ */ jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsx("path", { d: "M5 12h14" }),
  /* @__PURE__ */ jsx("path", { d: "m12 5 7 7-7 7" })
] });
const GidsFaqSectie = ({
  faq,
  kick,
  titel,
  variant = "grijs"
}) => {
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  return (
    /*
      Hetzelfde vragenblok als op de homepage en op de inhoudspagina's. Hier
      stond een eigen accordeon met een rond pijltje; dat was de derde vorm van
      de FAQ op dezelfde site. Zie src/components/content/FaqBlok.tsx voor
      waarom het één component is.
    */
    /* @__PURE__ */ jsx(
      FaqBlok,
      {
        kicker: kick ?? t.faqKick,
        titel,
        vragen: faq.map((item) => ({ q: item.question, a: item.answer })),
        sleutel: "gids-faq",
        variant: variant === "rood" ? "rood" : "grijs",
        vraagHref: lp("/contact")
      }
    )
  );
};
const GidsShell = ({
  seo,
  path,
  crumbs,
  kick,
  h1,
  intro,
  heroImg,
  heroBadge,
  articlePublished,
  articleModified,
  faq = [],
  faqZelfPlaatsen = false,
  jsonLd = [],
  children
}) => {
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const taal = useTaal();
  const pad = lp(path);
  const kruimels = crumbs.map((c) => ({ name: c.name, path: lp(c.path) }));
  return /* @__PURE__ */ jsxs("div", { className: "hdw-page gids", children: [
    /* @__PURE__ */ jsx(
      PageMeta,
      {
        ...seo,
        path: pad,
        ogType: articlePublished ? "article" : "website",
        jsonLd: [
          articlePublished ? inTaal(
            articleSchema({
              headline: h1,
              description: seo.description,
              path: pad,
              datePublished: articlePublished,
              dateModified: articleModified
            }),
            taal
          ) : (
            // Een @graph uit withOrganization() draagt het bedrijf al mee.
            jsonLd.some((blok) => Array.isArray(blok["@graph"])) ? null : organizationSchema()
          ),
          breadcrumbSchema(kruimels),
          ...faq.length ? [faqSchema(faq)] : [],
          ...jsonLd
        ].filter((blok) => blok !== null)
      }
    ),
    /* @__PURE__ */ jsx(V3Header, { lightAfter: 420 }),
    /* @__PURE__ */ jsx("div", { className: "redtop", children: /* @__PURE__ */ jsx("section", { className: "hero", children: /* @__PURE__ */ jsxs("div", { className: heroImg ? "wrap hero-grid" : "wrap hero-grid nopic", children: [
      /* @__PURE__ */ jsxs("div", { className: "hero-copy", children: [
        /* @__PURE__ */ jsx("nav", { "aria-label": t.kruimelpad, children: /* @__PURE__ */ jsx("ol", { className: "crumbs", children: kruimels.map((c, i) => /* @__PURE__ */ jsx("li", { children: i === kruimels.length - 1 ? /* @__PURE__ */ jsx("span", { "aria-current": "page", children: c.name }) : /* @__PURE__ */ jsx(Link, { to: c.path, children: c.name }) }, c.path)) }) }),
        /* @__PURE__ */ jsx("span", { className: "kick", children: kick }),
        /* @__PURE__ */ jsx("h1", { children: h1 }),
        intro,
        /* @__PURE__ */ jsxs("div", { className: "hcta", children: [
          /* @__PURE__ */ jsxs(Link, { className: "btn btn-white", to: lp("/verhuur/calculator"), children: [
            t.bereken,
            /* @__PURE__ */ jsx(Arrow, {})
          ] }),
          /* @__PURE__ */ jsx(Link, { className: "btn btn-ghost", to: lp("/verhuur/afhalen"), children: t.afhalen })
        ] })
      ] }),
      heroImg && /* @__PURE__ */ jsxs("div", { className: "hero-vis", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            className: heroImg.rond ? "rond" : void 0,
            src: heroImg.src,
            alt: heroImg.alt,
            style: { width: heroImg.width ?? "min(100%,520px)", position: "relative", zIndex: 1 }
          }
        ),
        heroBadge
      ] })
    ] }) }) }),
    children,
    faq.length > 0 && !faqZelfPlaatsen && /* @__PURE__ */ jsx(GidsFaqSectie, { faq, titel: t.faqTitel }),
    /* @__PURE__ */ jsx(V3Footer, {})
  ] });
};
export {
  GidsShell as G,
  GidsFaqSectie as a
};
