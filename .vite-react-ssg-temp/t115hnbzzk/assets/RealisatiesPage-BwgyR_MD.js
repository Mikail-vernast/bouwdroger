import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Suspense } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { P as PageMeta } from "./PageMeta-BXulEWcY.js";
import { l as V3Header } from "./V3Header-BeIMcMg7.js";
import { V as V3Footer } from "./V3Footer-9z4J1I4x.js";
import { b as breadcrumbSchema, i as itemListSchema } from "./schema-VJMHyxOJ.js";
import { u as useSeo } from "./seo-BMvlJeai.js";
import { REALISATIE_SOORTEN } from "./realisaties-eA_H-cxM.js";
import { r as realisatiesInTaal, a as realisatieSoortenInTaal, G as GridIcon, F as FlowIcon, S as ShieldIcon, D as DropIcon, A as ArrowRight } from "./realisaties-CVyBxnaA.js";
import { b as useTaal, u as useCopy, a as useLokaalPad } from "../main.mjs";
/* empty css                       */
import "vite-react-ssg";
import "./FontPreload-C6Rzq6ld.js";
import "./verhuur-CgnDb-wO.js";
import "./tarieven-ZrzMF0e-.js";
import "./verhuur-8XCQs1EE.js";
import "./packages-DdkKuPcF.js";
import "./verhuur.fr-CrIPL5Eo.js";
import "lucide-react";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/RealisatiesPage.tsx");
const SOORT_ICOON = {
  bouwvocht: DropIcon,
  waterschade: ShieldIcon,
  vochtbeheersing: FlowIcon
};
const isSoort = (w) => REALISATIE_SOORTEN.some((s) => s.key === w);
const COPY = {
  nl: {
    crumb: "Realisaties",
    lijstNaam: "Uitgevoerde droogprojecten",
    eyebrow: "Onze realisaties",
    h1: "Echte werven, echte resultaten",
    intro: /* @__PURE__ */ jsx(Fragment, { children: "Bekijk onze afgewerkte projecten: bouwvocht na pleister- en chapewerken, waterschade na een lek en ruimtes die te vochtig stonden. Elk project toont het probleem, de aanpak en het resultaat, met de foto's van de werf zelf." }),
    filter: "Filter op soort werk",
    alle: "Alle projecten",
    ctaH2: "Zelf vocht weg te krijgen?",
    ctaP: /* @__PURE__ */ jsx(Fragment, { children: "Bereken in vijf vragen welke toestellen u nodig heeft, met de droogtijd en de prijs erbij. Vrijblijvend." }),
    ctaKnop: "Bereken uw droogpakket",
    project: "project",
    projecten: "projecten",
    bekijk: "Bekijk project"
  },
  fr: {
    crumb: "Réalisations",
    lijstNaam: "Projets de séchage réalisés",
    eyebrow: "Nos réalisations",
    h1: "De vrais chantiers, de vrais résultats",
    intro: /* @__PURE__ */ jsx(Fragment, { children: "Découvrez nos projets terminés : humidité de construction après des travaux de plafonnage et de chape, dégâts des eaux après une fuite et des pièces trop humides. Chaque projet montre le problème, l'approche et le résultat, avec les photos du chantier lui-même." }),
    filter: "Filtrer par type de travaux",
    alle: "Tous les projets",
    ctaH2: "De l'humidité à éliminer vous-même ?",
    ctaP: /* @__PURE__ */ jsx(Fragment, { children: "Calculez en cinq questions les appareils dont vous avez besoin, avec la durée de séchage et le prix. Sans engagement." }),
    ctaKnop: "Calculez votre pack de séchage",
    project: "projet",
    projecten: "projets",
    bekijk: "Voir le projet"
  },
  en: {
    crumb: "Projects",
    lijstNaam: "Completed drying projects",
    eyebrow: "Our projects",
    h1: "Real sites, real results",
    intro: /* @__PURE__ */ jsx(Fragment, { children: "Take a look at our completed projects: construction moisture after plastering and screed work, water damage after a leak and rooms that were too damp. Each project shows the problem, the approach and the result, with photos from the site itself." }),
    filter: "Filter by type of work",
    alle: "All projects",
    ctaH2: "Got moisture to get rid of yourself?",
    ctaP: /* @__PURE__ */ jsx(Fragment, { children: "Work out in five questions which machines you need, with the drying time and the price included. No obligation." }),
    ctaKnop: "Calculate your drying package",
    project: "project",
    projecten: "projects",
    bekijk: "View project"
  }
};
const RealisatiesPage = () => /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(Overzicht, {}) });
const Overzicht = () => {
  const taal = useTaal();
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const seo = useSeo("realisaties");
  const REALISATIES = realisatiesInTaal(taal);
  const soorten = realisatieSoortenInTaal(taal);
  const telPerSoort = (soort) => REALISATIES.filter((r) => r.soort === soort).length;
  const [params, setParams] = useSearchParams();
  const ruw = params.get("soort");
  const gekozen = isSoort(ruw) ? ruw : null;
  const zichtbaar = gekozen ? REALISATIES.filter((r) => r.soort === gekozen) : REALISATIES;
  const kies = (soort) => {
    const volgende = new URLSearchParams(params);
    if (soort) volgende.set("soort", soort);
    else volgende.delete("soort");
    setParams(volgende, { replace: true });
  };
  return /* @__PURE__ */ jsxs("div", { className: "v3 rz-page", children: [
    /* @__PURE__ */ jsx(
      PageMeta,
      {
        ...seo,
        path: lp("/realisaties"),
        image: REALISATIES[0].kaart,
        jsonLd: [
          breadcrumbSchema([
            { name: "Home", path: lp("/") },
            { name: t.crumb, path: lp("/realisaties") }
          ]),
          itemListSchema(
            t.lijstNaam,
            REALISATIES.map((r) => ({ name: r.titel, path: lp(`/realisaties/${r.slug}`) }))
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(V3Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("section", { className: "section tech-section", style: { padding: "170px 0 90px" }, children: /* @__PURE__ */ jsx("div", { className: "rz-wrap", children: /* @__PURE__ */ jsxs("div", { className: "shead center on-red", style: { marginBottom: 0 }, children: [
        /* @__PURE__ */ jsx("span", { className: "eyebrow center", children: t.eyebrow }),
        /* @__PURE__ */ jsx("h1", { children: t.h1 }),
        /* @__PURE__ */ jsx("p", { children: t.intro })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "section", style: { background: "#f4f4f4" }, children: /* @__PURE__ */ jsx("div", { className: "rz-wrap", children: /* @__PURE__ */ jsxs("div", { className: "rl-layout", children: [
        /* @__PURE__ */ jsxs("aside", { className: "rl-side", children: [
          /* @__PURE__ */ jsxs("div", { className: "rl-filter", children: [
            /* @__PURE__ */ jsx("div", { className: "tt", children: t.filter }),
            /* @__PURE__ */ jsxs("div", { className: "fl", role: "group", "aria-label": t.filter, children: [
              /* @__PURE__ */ jsxs("button", { type: "button", className: gekozen === null ? "on" : void 0, "aria-pressed": gekozen === null, onClick: () => kies(null), children: [
                /* @__PURE__ */ jsx(GridIcon, {}),
                t.alle,
                /* @__PURE__ */ jsx("span", { className: "n", children: REALISATIES.length })
              ] }),
              soorten.map((s) => {
                const Icoon = SOORT_ICOON[s.key];
                return /* @__PURE__ */ jsxs("button", { type: "button", className: gekozen === s.key ? "on" : void 0, "aria-pressed": gekozen === s.key, onClick: () => kies(s.key), children: [
                  /* @__PURE__ */ jsx(Icoon, {}),
                  s.label,
                  /* @__PURE__ */ jsx("span", { className: "n", children: telPerSoort(s.key) })
                ] }, s.key);
              })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rl-cta", children: [
            /* @__PURE__ */ jsx("h2", { children: t.ctaH2 }),
            /* @__PURE__ */ jsx("p", { children: t.ctaP }),
            /* @__PURE__ */ jsx(Link, { className: "rz-btn rz-btn-white", to: lp("/verhuur/calculator"), children: t.ctaKnop })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("p", { className: "rl-count", children: [
            zichtbaar.length,
            " ",
            zichtbaar.length === 1 ? t.project : t.projecten
          ] }),
          /* @__PURE__ */ jsx("div", { className: "rl-grid", children: zichtbaar.map((r, i) => /* @__PURE__ */ jsxs("article", { className: "rl-card", children: [
            /* @__PURE__ */ jsx(Link, { to: lp(`/realisaties/${r.slug}`), "aria-label": r.titel, children: /* @__PURE__ */ jsx("img", { src: r.kaart, alt: r.kaartAlt, loading: i < 3 ? "eager" : "lazy", width: 800, height: 600 }) }),
            /* @__PURE__ */ jsxs("div", { className: "rl-body", children: [
              /* @__PURE__ */ jsx("div", { className: "rl-chips", children: /* @__PURE__ */ jsx("span", { className: "rl-chip", children: r.chip }) }),
              /* @__PURE__ */ jsx("h3", { children: /* @__PURE__ */ jsx(Link, { to: lp(`/realisaties/${r.slug}`), children: r.titel }) }),
              /* @__PURE__ */ jsxs(Link, { className: "rl-go", to: lp(`/realisaties/${r.slug}`), children: [
                t.bekijk,
                " ",
                /* @__PURE__ */ jsx(ArrowRight, {})
              ] })
            ] })
          ] }, r.slug)) })
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(V3Footer, {})
  ] });
};
export {
  RealisatiesPage as default
};
