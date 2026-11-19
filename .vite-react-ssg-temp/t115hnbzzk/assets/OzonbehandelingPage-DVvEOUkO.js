import { jsxs, jsx } from "react/jsx-runtime";
import { P as PageMeta, C as CONTACT } from "./PageMeta-BXulEWcY.js";
import { l as V3Header, A as ArrowRightIcon, k as PhoneIcon, j as StarIcon, i as GoogleIcon } from "./V3Header-BeIMcMg7.js";
import { V as V3Footer } from "./V3Footer-9z4J1I4x.js";
import { R as Reveal } from "./Reveal-NNPkAe35.js";
import { S as SchildIcon, O as OzonForm, a as OZON_COPY, b as SporenIcon, M as MijtIcon, N as NeusIcon, K as KelderIcon, W as WaterschadeIcon, c as SleutelIcon } from "./ozonbehandeling-DjJEeHiw.js";
import { o as organizationSchema, s as serviceSchema, f as faqSchema, b as breadcrumbSchema } from "./schema-VJMHyxOJ.js";
import { u as useSeo } from "./seo-BMvlJeai.js";
import { u as useCopy, a as useLokaalPad } from "../main.mjs";
import { e as eersteReviews } from "./reviews-BlVWZu-x.js";
import "vite-react-ssg";
import "react-router-dom";
import "react";
import "./FontPreload-C6Rzq6ld.js";
import "./verhuur-CgnDb-wO.js";
import "./tarieven-ZrzMF0e-.js";
import "./verhuur-8XCQs1EE.js";
import "./packages-DdkKuPcF.js";
import "./inputMask-BnLinOtl.js";
import "./formUploads-ncau7rQh.js";
import "./verhuur.fr-CrIPL5Eo.js";
import "lucide-react";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/OzonbehandelingPage.tsx");
const INZET_ICONEN = [
  /* @__PURE__ */ jsx(SporenIcon, {}, "sporen"),
  /* @__PURE__ */ jsx(MijtIcon, {}, "mijt"),
  /* @__PURE__ */ jsx(NeusIcon, {}, "neus"),
  /* @__PURE__ */ jsx(KelderIcon, {}, "kelder"),
  /* @__PURE__ */ jsx(WaterschadeIcon, {}, "water"),
  /* @__PURE__ */ jsx(SleutelIcon, {}, "sleutel")
];
const SPAKEN = [
  { id: "p1", style: { "--a": "-90deg", animationDelay: "0s" } },
  { id: "p2", style: { "--a": "-30deg", animationDelay: "1s" } },
  { id: "p3", style: { "--a": "30deg", animationDelay: "2s" } },
  { id: "p4", style: { "--a": "90deg", animationDelay: "3s" } },
  { id: "p5", style: { "--a": "150deg", animationDelay: "4s" } },
  { id: "p6", style: { "--a": "210deg", animationDelay: "5s" } }
];
const MOLECULEN = [
  { id: "m1", style: { left: "8%", top: "18%", "--s": "58px", "--dur": "11s", "--dx": "26px", "--dy": "-20px", "--dr": "34deg" } },
  { id: "m2", style: { left: "62%", top: "12%", "--s": "44px", "--dur": "9s", "--dx": "-22px", "--dy": "26px", "--dr": "-42deg" } },
  { id: "m3", style: { left: "78%", top: "58%", "--s": "66px", "--dur": "13s", "--dx": "-30px", "--dy": "-24px", "--dr": "28deg" } },
  { id: "m4", style: { left: "26%", top: "68%", "--s": "40px", "--dur": "10s", "--dx": "24px", "--dy": "-18px", "--dr": "-30deg" } },
  { id: "m5", style: { left: "46%", top: "38%", "--s": "52px", "--dur": "12s", "--dx": "18px", "--dy": "22px", "--dr": "46deg" } }
];
const SPOREN = [
  { id: "s1", style: { left: "20%", top: "40%", "--ss": "42px", "--sd": "9s", animationDelay: "0s" } },
  { id: "s2", style: { left: "37%", top: "72%", "--ss": "34px", "--sd": "9s", animationDelay: "1.5s" } },
  { id: "s3", style: { left: "55%", top: "26%", "--ss": "48px", "--sd": "9s", animationDelay: "3s" } },
  { id: "s4", style: { left: "70%", top: "76%", "--ss": "30px", "--sd": "9s", animationDelay: "4.5s" } },
  { id: "s5", style: { left: "86%", top: "34%", "--ss": "38px", "--sd": "9s", animationDelay: "6s" } },
  { id: "s6", style: { left: "12%", top: "76%", "--ss": "34px", "--sd": "9s", animationDelay: "7.5s" } }
];
const OzonbehandelingPage = () => {
  const t = useCopy(OZON_COPY);
  const lp = useLokaalPad();
  return /* @__PURE__ */ jsxs("div", { className: "oz-page", children: [
    /* @__PURE__ */ jsx(
      PageMeta,
      {
        ...useSeo("ozonbehandeling"),
        path: lp("/ozonbehandeling"),
        jsonLd: [
          organizationSchema(),
          serviceSchema({
            name: t.schemaNaam,
            description: t.schemaBeschrijving,
            path: lp("/ozonbehandeling"),
            serviceType: t.schemaType
          }),
          faqSchema(t.faq),
          breadcrumbSchema([
            { name: t.kruimelHome, path: lp("/") },
            { name: t.kruimel, path: lp("/ozonbehandeling") }
          ])
        ]
      }
    ),
    /* @__PURE__ */ jsx(V3Header, { lightAfter: 460 }),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("div", { className: "oz-top", children: /* @__PURE__ */ jsx("section", { className: "oz-hero", children: /* @__PURE__ */ jsxs("div", { className: "oz-wrap oz-hero-grid", children: [
        /* @__PURE__ */ jsxs("div", { className: "oz-hero-copy", children: [
          /* @__PURE__ */ jsx("span", { className: "oz-kick", children: t.heroKick }),
          /* @__PURE__ */ jsx("h1", { children: t.h1 }),
          /* @__PURE__ */ jsx("p", { children: t.heroTekst }),
          /* @__PURE__ */ jsxs("div", { className: "oz-hero-cta", children: [
            /* @__PURE__ */ jsxs("a", { className: "ozbtn ozbtn-white", href: "#boeken", children: [
              t.heroCta,
              " ",
              /* @__PURE__ */ jsx(ArrowRightIcon, { size: 13, strokeWidth: 2.6 })
            ] }),
            /* @__PURE__ */ jsxs("a", { className: "ozbtn ozbtn-ghost", href: `tel:${CONTACT.phoneE164}`, children: [
              /* @__PURE__ */ jsx(PhoneIcon, { size: 14 }),
              " ",
              CONTACT.phoneLocal
            ] })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "oz-hero-usp", children: t.heroUsp.map((usp) => /* @__PURE__ */ jsx("li", { children: usp }, usp)) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "oz-hero-vis", "aria-hidden": "true", children: /* @__PURE__ */ jsxs("div", { className: "oz-orbit", children: [
          /* @__PURE__ */ jsx("span", { className: "oz-ring r1" }),
          /* @__PURE__ */ jsx("span", { className: "oz-ring r2" }),
          /* @__PURE__ */ jsx("span", { className: "oz-ring r3" }),
          /* @__PURE__ */ jsx("span", { className: "oz-core", children: "O₃" }),
          SPAKEN.map((spaak) => /* @__PURE__ */ jsxs("span", { className: "oz-spoke", style: spaak.style, children: [
            /* @__PURE__ */ jsx("i", { className: "oz-shot" }),
            /* @__PURE__ */ jsx("i", { className: "oz-target" })
          ] }, spaak.id))
        ] }) })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "oz-sec oz-light", children: /* @__PURE__ */ jsxs("div", { className: "oz-wrap", children: [
        /* @__PURE__ */ jsxs(Reveal, { className: "oz-head", children: [
          /* @__PURE__ */ jsx("span", { className: "oz-kick red", children: t.herkenKick }),
          /* @__PURE__ */ jsx("h2", { className: "oz-h2", children: t.herkenH2 }),
          /* @__PURE__ */ jsx("p", { className: "oz-lede", children: t.herkenLede })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "oz-three", children: t.herkenKaarten.map((kaart, i) => /* @__PURE__ */ jsxs(Reveal, { className: "oz-card", delay: i ? i * 0.08 : void 0, children: [
          /* @__PURE__ */ jsx("span", { className: "oz-num", children: `0${i + 1}` }),
          /* @__PURE__ */ jsx("h3", { children: kaart.title }),
          /* @__PURE__ */ jsx("p", { children: kaart.text })
        ] }, kaart.title)) }),
        /* @__PURE__ */ jsx(Reveal, { className: "oz-note", delay: 0.1, children: t.noot(lp) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "oz-sec oz-red", children: /* @__PURE__ */ jsxs("div", { className: "oz-wrap oz-split", children: [
        /* @__PURE__ */ jsxs(Reveal, { className: "oz-split-copy", children: [
          /* @__PURE__ */ jsx("span", { className: "oz-kick onred", children: t.watKick }),
          /* @__PURE__ */ jsx("h2", { className: "oz-h2", children: t.watH2 }),
          /* @__PURE__ */ jsx("p", { className: "oz-lede", children: t.watLede }),
          /* @__PURE__ */ jsx("p", { className: "oz-body", children: t.watBody })
        ] }),
        /* @__PURE__ */ jsx(Reveal, { className: "oz-split-vis", delay: 0.1, children: /* @__PURE__ */ jsxs("div", { className: "oz-mol", "aria-hidden": "true", children: [
          /* @__PURE__ */ jsxs("div", { className: "oz-mol-side", children: [
            /* @__PURE__ */ jsxs("div", { className: "oz-mol-atoms two", children: [
              /* @__PURE__ */ jsx("i", {}),
              /* @__PURE__ */ jsx("i", {})
            ] }),
            /* @__PURE__ */ jsx("b", { children: "O₂" }),
            /* @__PURE__ */ jsx("small", { children: t.molO2 })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "oz-mol-arrow", children: [
            /* @__PURE__ */ jsx("span", { className: "oz-spark" }),
            /* @__PURE__ */ jsxs("svg", { width: "30", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx("path", { d: "M5 12h14" }),
              /* @__PURE__ */ jsx("path", { d: "m12 5 7 7-7 7" })
            ] }),
            /* @__PURE__ */ jsx("small", { children: t.molEnergie })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "oz-mol-side hot", children: [
            /* @__PURE__ */ jsxs("div", { className: "oz-mol-atoms three", children: [
              /* @__PURE__ */ jsx("i", {}),
              /* @__PURE__ */ jsx("i", {}),
              /* @__PURE__ */ jsx("i", { className: "loose" })
            ] }),
            /* @__PURE__ */ jsx("b", { children: "O₃" }),
            /* @__PURE__ */ jsx("small", { children: t.molO3 })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "oz-sec oz-light", children: /* @__PURE__ */ jsxs("div", { className: "oz-wrap", children: [
        /* @__PURE__ */ jsxs(Reveal, { className: "oz-head oz-head-mid", children: [
          /* @__PURE__ */ jsx("span", { className: "oz-kick red", children: t.hoeKick }),
          /* @__PURE__ */ jsx("h2", { className: "oz-h2", children: t.hoeH2 }),
          /* @__PURE__ */ jsx("p", { className: "oz-lede", children: t.hoeLede })
        ] }),
        /* @__PURE__ */ jsxs(Reveal, { className: "oz-stage-wrap", delay: 0.08, children: [
          /* @__PURE__ */ jsxs("div", { className: "oz-stage", "aria-label": t.stageLabel, children: [
            /* @__PURE__ */ jsx("span", { className: "oz-glow", "aria-hidden": "true" }),
            MOLECULEN.map((mol) => /* @__PURE__ */ jsxs("span", { className: "oz-mol3", style: mol.style, "aria-hidden": "true", children: [
              /* @__PURE__ */ jsx("i", { className: "oz-bond b1" }),
              /* @__PURE__ */ jsx("i", { className: "oz-bond b2" }),
              /* @__PURE__ */ jsx("i", { className: "oz-at a1" }),
              /* @__PURE__ */ jsx("i", { className: "oz-at a2" }),
              /* @__PURE__ */ jsx("i", { className: "oz-at a3" })
            ] }, mol.id)),
            SPOREN.map((spore) => /* @__PURE__ */ jsxs("span", { className: "oz-spore", style: spore.style, "aria-hidden": "true", children: [
              /* @__PURE__ */ jsx("i", { className: "oz-spore-body" }),
              /* @__PURE__ */ jsx("i", { className: "oz-zap" })
            ] }, spore.id))
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "oz-legend", children: [
            /* @__PURE__ */ jsxs("span", { className: "oz-lg o3", children: [
              /* @__PURE__ */ jsx("i", {}),
              " ",
              /* @__PURE__ */ jsx("b", { children: "O₃" }),
              " ",
              t.legO3
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "oz-lg sp", children: [
              /* @__PURE__ */ jsx("i", {}),
              " ",
              t.legSpore
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(Reveal, { className: "oz-after", delay: 0.12, children: /* @__PURE__ */ jsx("p", { children: t.hoeNa }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "oz-sec oz-red", children: /* @__PURE__ */ jsxs("div", { className: "oz-wrap", children: [
        /* @__PURE__ */ jsxs(Reveal, { className: "oz-head", children: [
          /* @__PURE__ */ jsx("span", { className: "oz-kick onred", children: t.cirkelKick }),
          /* @__PURE__ */ jsx("h2", { className: "oz-h2", children: t.cirkelH2 }),
          /* @__PURE__ */ jsx("p", { className: "oz-lede", children: t.cirkelLede })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "oz-steps", children: [
          /* @__PURE__ */ jsxs(Reveal, { className: "oz-step", children: [
            /* @__PURE__ */ jsx("span", { className: "oz-step-n", children: "1" }),
            /* @__PURE__ */ jsx("h3", { children: t.stap1Titel }),
            /* @__PURE__ */ jsx("p", { children: t.stap1(lp) })
          ] }),
          /* @__PURE__ */ jsxs(Reveal, { className: "oz-step", delay: 0.08, children: [
            /* @__PURE__ */ jsx("span", { className: "oz-step-n", children: "2" }),
            /* @__PURE__ */ jsx("h3", { children: t.stap2Titel }),
            /* @__PURE__ */ jsx("p", { children: t.stap2 })
          ] }),
          /* @__PURE__ */ jsxs(Reveal, { className: "oz-step", delay: 0.16, children: [
            /* @__PURE__ */ jsx("span", { className: "oz-step-n", children: "3" }),
            /* @__PURE__ */ jsx("h3", { children: t.stap3Titel }),
            /* @__PURE__ */ jsx("p", { children: t.stap3 })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Reveal, { className: "oz-band", delay: 0.1, children: [
          /* @__PURE__ */ jsxs("div", { className: "oz-band-t", children: [
            /* @__PURE__ */ jsx("span", { className: "oz-kick onred", children: t.bandKick }),
            /* @__PURE__ */ jsx("h3", { children: t.bandH3 }),
            /* @__PURE__ */ jsx("p", { children: t.band(lp) }),
            /* @__PURE__ */ jsxs("a", { className: "ozbtn ozbtn-white", href: "#boeken", children: [
              t.bandCta,
              " ",
              /* @__PURE__ */ jsx(ArrowRightIcon, { size: 13, strokeWidth: 2.6 })
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            "img",
            {
              className: "oz-band-man",
              src: "/vernast/man-schimmelpak.webp",
              alt: t.bandAlt,
              width: 700,
              height: 900,
              loading: "lazy"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "oz-sec oz-light", children: /* @__PURE__ */ jsxs("div", { className: "oz-wrap", children: [
        /* @__PURE__ */ jsxs(Reveal, { className: "oz-head", children: [
          /* @__PURE__ */ jsx("span", { className: "oz-kick red", children: t.inzetKick }),
          /* @__PURE__ */ jsx("h2", { className: "oz-h2", children: t.inzetH2 }),
          /* @__PURE__ */ jsx("p", { className: "oz-lede", children: t.inzetLede })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "oz-grid6", children: t.inzet.map((item, i) => /* @__PURE__ */ jsxs(Reveal, { className: "oz-use", delay: i % 3 * 0.07, children: [
          /* @__PURE__ */ jsx("span", { className: "oz-use-ic", children: INZET_ICONEN[i] }),
          /* @__PURE__ */ jsx("h3", { children: item.title }),
          /* @__PURE__ */ jsx("p", { children: item.text })
        ] }, item.title)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "oz-sec oz-red", children: /* @__PURE__ */ jsxs("div", { className: "oz-wrap oz-split", children: [
        /* @__PURE__ */ jsxs(Reveal, { className: "oz-split-copy", children: [
          /* @__PURE__ */ jsx("span", { className: "oz-kick onred", children: t.techKick }),
          /* @__PURE__ */ jsx("h2", { className: "oz-h2", children: t.techH2 }),
          /* @__PURE__ */ jsx("p", { className: "oz-lede", children: t.techLede }),
          /* @__PURE__ */ jsx("p", { className: "oz-body", children: t.techBody })
        ] }),
        /* @__PURE__ */ jsx(Reveal, { className: "oz-split-vis", delay: 0.1, children: /* @__PURE__ */ jsx("dl", { className: "oz-specs oz-specs-card", children: t.techniek.map(([label, value]) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("dt", { children: label }),
          /* @__PURE__ */ jsx("dd", { children: value })
        ] }, label)) }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "oz-sec oz-light", children: /* @__PURE__ */ jsxs("div", { className: "oz-wrap", children: [
        /* @__PURE__ */ jsxs(Reveal, { className: "oz-head oz-head-mid", children: [
          /* @__PURE__ */ jsxs("span", { className: "oz-kick red", children: [
            /* @__PURE__ */ jsx(SchildIcon, {}),
            " ",
            t.veiligKick
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "oz-h2", children: t.veiligH2 }),
          /* @__PURE__ */ jsx("p", { className: "oz-lede", children: t.veiligLede })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "oz-four", children: t.veiligKaarten.map((kaart, i) => /* @__PURE__ */ jsxs(Reveal, { className: "oz-safe-card", delay: i ? i * 0.06 : void 0, children: [
          /* @__PURE__ */ jsx("b", { children: kaart.title }),
          /* @__PURE__ */ jsx("p", { children: kaart.text })
        ] }, kaart.title)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "oz-sec oz-red", children: /* @__PURE__ */ jsxs("div", { className: "oz-wrap", children: [
        /* @__PURE__ */ jsxs(Reveal, { className: "oz-head oz-head-mid", children: [
          /* @__PURE__ */ jsx("span", { className: "oz-kick onred", children: t.reviewKick }),
          /* @__PURE__ */ jsx("h2", { className: "oz-h2", children: t.reviewH2 }),
          /* @__PURE__ */ jsx("p", { className: "oz-lede", children: t.reviewLede })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "oz-reviews", children: eersteReviews(3).map((review, i) => /* @__PURE__ */ jsxs(Reveal, { className: "oz-review", delay: i % 3 * 0.07, children: [
          /* @__PURE__ */ jsx("div", { className: "oz-review-stars", "aria-label": t.sterren(review.rating), children: Array.from({ length: review.rating }, (_, star) => /* @__PURE__ */ jsx(StarIcon, { size: 14 }, star)) }),
          /* @__PURE__ */ jsx("p", { children: review.text }),
          /* @__PURE__ */ jsxs("div", { className: "oz-review-by", children: [
            /* @__PURE__ */ jsx("span", { className: "oz-review-ini", "aria-hidden": "true", children: review.initials }),
            /* @__PURE__ */ jsxs("span", { children: [
              /* @__PURE__ */ jsx("b", { children: review.name }),
              /* @__PURE__ */ jsxs("small", { children: [
                review.source === "Google" && /* @__PURE__ */ jsx(GoogleIcon, { size: 12 }),
                " ",
                review.source,
                " ·",
                " ",
                t.datum(review.date)
              ] })
            ] })
          ] })
        ] }, review.name)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "oz-sec oz-light", id: "faq", children: /* @__PURE__ */ jsxs("div", { className: "oz-wrap faq-grid", children: [
        /* @__PURE__ */ jsxs("div", { className: "faq-side", children: [
          /* @__PURE__ */ jsx("span", { className: "oz-kick red", children: t.faqKick }),
          /* @__PURE__ */ jsx("h2", { className: "oz-h2", children: t.faqH2 }),
          /* @__PURE__ */ jsxs("div", { className: "faq-help", children: [
            /* @__PURE__ */ jsx("h3", { children: t.faqHelpH3 }),
            /* @__PURE__ */ jsx("p", { children: t.faqHelp }),
            /* @__PURE__ */ jsxs("div", { className: "fh-btns", children: [
              /* @__PURE__ */ jsxs("a", { className: "fh-call", href: `tel:${CONTACT.phoneE164}`, children: [
                /* @__PURE__ */ jsx(PhoneIcon, {}),
                " ",
                t.bel,
                " ",
                CONTACT.phoneLocal
              ] }),
              /* @__PURE__ */ jsx("a", { className: "fh-form", href: "#boeken", children: t.online })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "faq-list", children: t.faq.map((item, i) => /* @__PURE__ */ jsxs("details", { className: "q", open: i === 0, children: [
          /* @__PURE__ */ jsxs("summary", { children: [
            item.question,
            " ",
            /* @__PURE__ */ jsx("span", { className: "pl", children: "+" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "a", children: /* @__PURE__ */ jsx("p", { children: item.answer }) })
        ] }, item.question)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "oz-sec oz-book", children: /* @__PURE__ */ jsxs("div", { className: "oz-wrap oz-book-grid", children: [
        /* @__PURE__ */ jsxs(Reveal, { className: "oz-book-l", children: [
          /* @__PURE__ */ jsx("span", { className: "oz-kick onred", children: t.boekKick }),
          /* @__PURE__ */ jsx("h2", { className: "oz-h2", children: t.boekH2 }),
          /* @__PURE__ */ jsx("p", { children: t.boekTekst }),
          /* @__PURE__ */ jsx("ul", { className: "oz-book-usp", children: t.boekUsp.map((usp) => /* @__PURE__ */ jsx("li", { children: usp }, usp)) }),
          /* @__PURE__ */ jsxs("p", { className: "oz-book-call", children: [
            t.liever,
            " ",
            /* @__PURE__ */ jsx("a", { href: `tel:${CONTACT.phoneE164}`, children: CONTACT.phoneLocal }),
            ", ",
            t.uren(CONTACT.openingHours)
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "oz-book-r", children: /* @__PURE__ */ jsx(OzonForm, {}) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(V3Footer, {})
  ] });
};
export {
  OzonbehandelingPage as default
};
