import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useCallback, useEffect, Suspense } from "react";
import { u as useCopy, n as naarNl, b as useTaal, a as useLokaalPad } from "../main.mjs";
import { useParams, useLocation, Navigate, Link, useNavigate } from "react-router-dom";
import { P as PageMeta } from "./PageMeta-BXulEWcY.js";
import { l as V3Header } from "./V3Header-BeIMcMg7.js";
import { V as V3Footer } from "./V3Footer-9z4J1I4x.js";
import { b as breadcrumbSchema } from "./schema-VJMHyxOJ.js";
import { u as useSeo } from "./seo-BMvlJeai.js";
import { realisatieMeta } from "./realisaties-eA_H-cxM.js";
import { b as ArrowLeft, A as ArrowRight, r as realisatiesInTaal, c as DryIcon, M as MeasureIcon, H as HouseIcon, P as PinIcon, X as XIcon } from "./realisaties-CVyBxnaA.js";
import { r as regioVanRealisatie, a as realisatieSlugsIn } from "./realisatie-regio-Bhy0QiA0.js";
/* empty css                       */
import "vite-react-ssg";
import "lucide-react";
import "./FontPreload-C6Rzq6ld.js";
import "./verhuur-CgnDb-wO.js";
import "./tarieven-ZrzMF0e-.js";
import "./verhuur-8XCQs1EE.js";
import "./packages-DdkKuPcF.js";
import "./verhuur.fr-CrIPL5Eo.js";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/realisatie-redirects.ts");
const REALISATIE_REDIRECTS = {
  "vernissage-boom": "expositieruimte-drogen-boom",
  "mnr-w-antwerpen": "kelder-en-kamer-drogen-antwerpen",
  "mnr-s-brussel": "badkamer-drogen-brussel",
  "mnr-n-v-oostende": "pleisterwerk-drogen-oostende",
  "mnr-l-hasselt": "chape-pleisterwerk-drogen-hasselt",
  "mnr-k-putte": "nieuwbouw-drogen-putte",
  "mnr-j-bocholt": "waterschade-drogen-bocholt",
  "mnr-erdem-bedrijfsgebouw": "waterschade-drogen-bedrijfsgebouw",
  "mevr-k-wintam": "bouwvocht-drogen-wintam",
  "mevr-j-j-kontich": "nieuwbouw-drogen-kontich",
  "mevr-j-berchem": "pleisterwerk-drogen-berchem",
  "mevr-g-b-sint-pieters-woluwe": "pleisterwerk-drogen-sint-pieters-woluwe",
  "mevr-b-a-lokeren": "kelder-drogen-lokeren",
  "mevr-arlette": "woning-drogen-waterschade",
  "mevr-a-r-berlare": "berging-drogen-berlare",
  "mancave-brugge": "kelder-drogen-brugge",
  "levis": "schimmelsanering-winkelkelder",
  "dhr-p-merksem": "pleisterwerk-drogen-merksem",
  "dhr-h-brussel": "woning-drogen-brussel",
  "dhr-e-schilde": "nieuwbouwvilla-drogen-schilde",
  "dhr-d-c-antwerpen": "kelder-drogen-antwerpen",
  "bang-olufsen": "bouwdroging-winkelpand"
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/realisaties/RealisatieAlbum.tsx");
const COPY$1 = {
  nl: { vorige: "Vorige foto", volgende: "Volgende foto", foto: "Foto", fotoKlein: "foto", sluiten: "Sluiten" },
  fr: { vorige: "Photo précédente", volgende: "Photo suivante", foto: "Photo", fotoKlein: "photo", sluiten: "Fermer" },
  en: { vorige: "Previous photo", volgende: "Next photo", foto: "Photo", fotoKlein: "photo", sluiten: "Close" }
};
const RealisatieAlbum = ({ fotos, titel }) => {
  const t = useCopy(COPY$1);
  const [actief, setActief] = useState(0);
  const [vergroot, setVergroot] = useState(false);
  const ga = useCallback(
    (stap) => setActief((i) => (i + stap + fotos.length) % fotos.length),
    [fotos.length]
  );
  useEffect(() => {
    const toets = (e) => {
      if (e.key === "ArrowRight") ga(1);
      else if (e.key === "ArrowLeft") ga(-1);
      else if (e.key === "Escape") setVergroot(false);
    };
    window.addEventListener("keydown", toets);
    return () => window.removeEventListener("keydown", toets);
  }, [ga]);
  useEffect(() => {
    if (!vergroot) return;
    const vorige = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = vorige;
    };
  }, [vergroot]);
  if (!fotos.length) return null;
  const huidig = fotos[actief];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "album", children: [
      /* @__PURE__ */ jsxs("div", { className: "alb-stage", children: [
        fotos.map((f, i) => /* @__PURE__ */ jsxs("figure", { className: `alb-slide${i === actief ? " on" : ""}`, children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: f.src,
              alt: f.alt,
              loading: i === 0 ? "eager" : "lazy",
              width: 1100,
              height: 825,
              onClick: () => setVergroot(true)
            }
          ),
          /* @__PURE__ */ jsxs("figcaption", { className: "alb-cap", children: [
            /* @__PURE__ */ jsxs("span", { className: "alb-count", children: [
              i + 1,
              " / ",
              fotos.length
            ] }),
            f.bijschrift
          ] })
        ] }, f.src)),
        fotos.length > 1 && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("button", { type: "button", className: "alb-nav alb-prev", onClick: () => ga(-1), "aria-label": t.vorige, children: /* @__PURE__ */ jsx(ArrowLeft, {}) }),
          /* @__PURE__ */ jsx("button", { type: "button", className: "alb-nav alb-next", onClick: () => ga(1), "aria-label": t.volgende, children: /* @__PURE__ */ jsx(ArrowRight, {}) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "alb-thumbs", children: fotos.map((f, i) => /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          className: `alb-thumb${i === actief ? " on" : ""}`,
          onClick: () => setActief(i),
          "aria-label": `${t.foto} ${i + 1}: ${f.thumb}`,
          "aria-current": i === actief,
          children: [
            /* @__PURE__ */ jsx("span", { className: "tno", children: i + 1 }),
            f.thumb
          ]
        },
        f.src
      )) })
    ] }),
    vergroot && /* @__PURE__ */ jsxs("div", { className: "rz-lightbox", role: "dialog", "aria-modal": "true", "aria-label": `${titel}, ${t.fotoKlein} ${actief + 1}`, onClick: () => setVergroot(false), children: [
      /* @__PURE__ */ jsx("button", { type: "button", className: "lb-close", onClick: () => setVergroot(false), "aria-label": t.sluiten, children: "×" }),
      fotos.length > 1 && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("button", { type: "button", className: "lb-nav lb-prev", onClick: (e) => {
          e.stopPropagation();
          ga(-1);
        }, "aria-label": t.vorige, children: /* @__PURE__ */ jsx(ArrowLeft, {}) }),
        /* @__PURE__ */ jsx("button", { type: "button", className: "lb-nav lb-next", onClick: (e) => {
          e.stopPropagation();
          ga(1);
        }, "aria-label": t.volgende, children: /* @__PURE__ */ jsx(ArrowRight, {}) })
      ] }),
      /* @__PURE__ */ jsx("img", { src: huidig.src, alt: huidig.alt, onClick: (e) => e.stopPropagation() }),
      /* @__PURE__ */ jsxs("p", { className: "lb-cap", children: [
        actief + 1,
        " / ",
        fotos.length,
        ", ",
        huidig.bijschrift
      ] })
    ] })
  ] });
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/RealisatieDetailPage.tsx");
const TAG_ICONEN = [DryIcon, MeasureIcon, HouseIcon];
const TOEGESTAAN = /<(?!\/?(b|strong|em|i)>)[^>]*>/g;
const Alinea = ({ html }) => /* @__PURE__ */ jsx("p", { dangerouslySetInnerHTML: { __html: html.replace(TOEGESTAAN, "") } });
const COPY = {
  nl: {
    nietGevonden: "Project niet gevonden",
    terug: "Terug naar de realisaties",
    crumb: "Realisaties",
    kruimelpad: "Kruimelpad",
    bereken: "Bereken uw droogpakket",
    gamma: "Ons gamma toestellen",
    fiche: "Projectfiche",
    droogplan: "Vraag een droogplan aan",
    vrijblijvend: "Vrijblijvend, met een vaste prijs vooraf.",
    bekijk: "Bekijk project"
  },
  fr: {
    nietGevonden: "Projet introuvable",
    terug: "Retour aux réalisations",
    crumb: "Réalisations",
    kruimelpad: "Fil d'Ariane",
    bereken: "Calculez votre pack de séchage",
    gamma: "Notre gamme d'appareils",
    fiche: "Fiche du projet",
    droogplan: "Demandez un plan de séchage",
    vrijblijvend: "Sans engagement, avec un prix fixe connu d'avance.",
    bekijk: "Voir le projet"
  },
  en: {
    nietGevonden: "Project not found",
    terug: "Back to the projects",
    crumb: "Projects",
    kruimelpad: "Breadcrumb",
    bereken: "Calculate your drying package",
    gamma: "Our range of machines",
    fiche: "Project details",
    droogplan: "Request a drying plan",
    vrijblijvend: "No obligation, with a fixed price agreed in advance.",
    bekijk: "View project"
  }
};
const VOORZETSEL_FR = {
  antwerpen: "dans la province d'Anvers",
  "oost-vlaanderen": "en Flandre orientale",
  "west-vlaanderen": "en Flandre occidentale",
  "vlaams-brabant": "en Brabant flamand",
  brussel: "à Bruxelles",
  limburg: "dans le Limbourg"
};
const regioLinkFr = (regio) => VOORZETSEL_FR[regio.slug] ? `Louer un déshumidificateur de chantier ${VOORZETSEL_FR[regio.slug]}` : `Location de déshumidificateurs de chantier · ${regio.nameFr ?? regio.name}`;
const REGIO_EN = {
  antwerpen: "the province of Antwerp",
  "oost-vlaanderen": "East Flanders",
  "west-vlaanderen": "West Flanders",
  "vlaams-brabant": "Flemish Brabant",
  brussel: "Brussels",
  limburg: "Limburg"
};
const regioLink = (regio, taal) => {
  if (taal === "fr") return regioLinkFr(regio);
  if (taal === "en") return `Construction dehumidifier hire in ${REGIO_EN[regio.slug] ?? regio.name}`;
  return `Bouwdroger huren in ${regio.name}`;
};
const NietGevonden = () => {
  const navigate = useNavigate();
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  return /* @__PURE__ */ jsxs("div", { className: "v3 rz-page", children: [
    /* @__PURE__ */ jsx(PageMeta, { ...useSeo("notFound") }),
    /* @__PURE__ */ jsx(V3Header, {}),
    /* @__PURE__ */ jsxs("div", { className: "rz-wrap", style: { padding: "160px 0 120px", textAlign: "center" }, children: [
      /* @__PURE__ */ jsx("h1", { style: { fontSize: 28, marginBottom: 16 }, children: t.nietGevonden }),
      /* @__PURE__ */ jsx("button", { type: "button", className: "rz-btn rz-btn-red", onClick: () => navigate(lp("/realisaties")), children: t.terug })
    ] }),
    /* @__PURE__ */ jsx(V3Footer, {})
  ] });
};
const RealisatieDetailPage = () => /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(Project, {}) });
const Project = () => {
  const { slug: urlSlug } = useParams();
  const { pathname, search, hash } = useLocation();
  const slug = naarNl(pathname)?.split("/").pop() || urlSlug;
  const taal = useTaal();
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const nieuweSlug = slug ? REALISATIE_REDIRECTS[slug] : void 0;
  if (nieuweSlug) {
    return /* @__PURE__ */ jsx(Navigate, { replace: true, to: `${lp(`/realisaties/${nieuweSlug}`)}${search}${hash}` });
  }
  const REALISATIES = realisatiesInTaal(taal);
  const getRealisatie = (s) => REALISATIES.find((r) => r.slug === s);
  const project = slug ? getRealisatie(slug) : void 0;
  if (!project) return /* @__PURE__ */ jsx(NietGevonden, {});
  const regio = regioVanRealisatie(project.slug);
  const inRegio = regio ? realisatieSlugsIn(regio.slug) : [];
  const plek = inRegio.indexOf(project.slug);
  const buren = [...inRegio.slice(plek + 1), ...inRegio.slice(0, plek)];
  const meer = [
    ...buren.map((s) => getRealisatie(s)).filter((r) => !!r && r.slug !== project.slug),
    ...project.meer.slugs.map((s) => getRealisatie(s)).filter((r) => !!r && r.slug !== project.slug),
    ...REALISATIES.filter((r) => r.slug !== project.slug)
  ].filter((r, i, lijst) => lijst.findIndex((x) => x.slug === r.slug) === i).slice(0, 3);
  return /* @__PURE__ */ jsxs("div", { className: "v3 rz-page", children: [
    /* @__PURE__ */ jsx(
      PageMeta,
      {
        ...realisatieMeta(project),
        path: lp(`/realisaties/${project.slug}`),
        image: project.hero,
        ogType: "article",
        jsonLd: breadcrumbSchema([
          { name: "Home", path: lp("/") },
          { name: t.crumb, path: lp("/realisaties") },
          { name: project.titel, path: lp(`/realisaties/${project.slug}`) }
        ])
      }
    ),
    /* @__PURE__ */ jsx(V3Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("section", { className: "rz-hero", children: /* @__PURE__ */ jsxs("div", { className: "rz-wrap", children: [
        /* @__PURE__ */ jsxs("nav", { className: "rz-crumb", "aria-label": t.kruimelpad, children: [
          /* @__PURE__ */ jsx(Link, { to: lp("/"), children: "Home" }),
          /* @__PURE__ */ jsx("span", { className: "sep", children: "›" }),
          /* @__PURE__ */ jsx(Link, { to: lp("/realisaties"), children: t.crumb }),
          /* @__PURE__ */ jsx("span", { className: "sep", children: "›" }),
          /* @__PURE__ */ jsx("span", { className: "cur", children: project.titel })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rz-head", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "rz-tags", children: project.tags.map((t2, i) => {
              const Icoon = TAG_ICONEN[i] ?? DryIcon;
              return /* @__PURE__ */ jsxs("span", { className: "rz-tag", children: [
                /* @__PURE__ */ jsx(Icoon, {}),
                " ",
                t2
              ] }, t2);
            }) }),
            /* @__PURE__ */ jsx("h1", { children: project.titel }),
            /* @__PURE__ */ jsxs("span", { className: "rz-loc", children: [
              /* @__PURE__ */ jsx(PinIcon, {}),
              " ",
              project.locatie,
              regio && /* @__PURE__ */ jsxs(Fragment, { children: [
                " · ",
                /* @__PURE__ */ jsx(Link, { to: lp(regio.path), className: "rz-loc-link", children: regioLink(regio, taal) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "rz-lede", children: project.lede })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "rz-hero-media", children: /* @__PURE__ */ jsx("img", { src: project.hero, alt: project.heroAlt, loading: "eager", width: 1300, height: 975 }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "rz-facts-band", children: /* @__PURE__ */ jsx("div", { className: "rz-wrap", children: /* @__PURE__ */ jsx("div", { className: "rz-facts", children: project.facts.map((f) => /* @__PURE__ */ jsxs("div", { className: "rz-fact", children: [
        /* @__PURE__ */ jsx("div", { className: "k", children: f.label }),
        /* @__PURE__ */ jsxs("div", { className: "v", children: [
          f.waarde,
          f.detail && /* @__PURE__ */ jsx("small", { children: f.detail })
        ] })
      ] }, f.label)) }) }) }),
      /* @__PURE__ */ jsx("section", { className: "section", style: { paddingTop: 0 }, children: /* @__PURE__ */ jsx("div", { className: "rz-wrap", children: /* @__PURE__ */ jsxs("div", { className: "rz-grid", children: [
        /* @__PURE__ */ jsxs("div", { className: "rz-body", children: [
          /* @__PURE__ */ jsx("span", { className: "eyebrow", children: project.verhaal.eyebrow }),
          /* @__PURE__ */ jsx("h2", { children: project.verhaal.kop }),
          /* @__PURE__ */ jsx("p", { className: "lead", children: project.verhaal.lead }),
          /* @__PURE__ */ jsx("ul", { className: "rz-problems", children: project.verhaal.problemen.map((p) => /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("span", { className: "x", children: /* @__PURE__ */ jsx(XIcon, {}) }),
            p
          ] }, p)) }),
          project.verhaal.blokken.map((b) => /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { children: b.kop }),
            b.alineas.map((a, i) => /* @__PURE__ */ jsx(Alinea, { html: a }, i))
          ] }, b.kop)),
          /* @__PURE__ */ jsxs("div", { className: "svc-link", children: [
            /* @__PURE__ */ jsxs(Link, { to: lp("/verhuur/calculator"), children: [
              /* @__PURE__ */ jsx(DryIcon, {}),
              " ",
              t.bereken
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: lp("/machines"), children: [
              /* @__PURE__ */ jsx(HouseIcon, {}),
              " ",
              t.gamma
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("aside", { className: "rz-meta", children: [
          /* @__PURE__ */ jsx("h4", { children: t.fiche }),
          /* @__PURE__ */ jsx("dl", { children: project.fiche.map((f) => /* @__PURE__ */ jsxs("div", { className: "rz-mrow", children: [
            /* @__PURE__ */ jsx("dt", { children: f.label }),
            /* @__PURE__ */ jsx("dd", { children: f.waarde })
          ] }, f.label)) }),
          /* @__PURE__ */ jsxs(Link, { className: "rz-btn rz-btn-red", to: lp("/contact"), children: [
            t.droogplan,
            " ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "arr" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "m-note", children: t.vrijblijvend })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "section tech-section", children: /* @__PURE__ */ jsxs("div", { className: "rz-wrap", children: [
        /* @__PURE__ */ jsxs("div", { className: "shead center on-red", children: [
          /* @__PURE__ */ jsx("span", { className: "eyebrow center", children: project.album.eyebrow }),
          /* @__PURE__ */ jsx("h2", { children: project.album.kop }),
          /* @__PURE__ */ jsx("p", { children: project.album.intro })
        ] }),
        /* @__PURE__ */ jsx(RealisatieAlbum, { fotos: project.album.fotos, titel: project.titel })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "section rz-result", children: /* @__PURE__ */ jsxs("div", { className: "rz-wrap", children: [
        /* @__PURE__ */ jsxs("div", { className: "shead center", children: [
          /* @__PURE__ */ jsx("span", { className: "eyebrow center", children: project.resultaat.eyebrow }),
          /* @__PURE__ */ jsx("h2", { children: project.resultaat.kop })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "zlead", style: { marginTop: 44 }, children: /* @__PURE__ */ jsx("div", { className: "two", children: project.resultaat.kolommen.map((k) => /* @__PURE__ */ jsxs("div", { className: "zc", children: [
          /* @__PURE__ */ jsx("div", { className: "k", children: k.label }),
          /* @__PURE__ */ jsx("h3", { children: k.kop }),
          /* @__PURE__ */ jsx("p", { children: k.tekst })
        ] }, k.label)) }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "section tech-section", children: /* @__PURE__ */ jsxs("div", { className: "rz-wrap", children: [
        /* @__PURE__ */ jsxs("div", { className: "shead center on-red", children: [
          /* @__PURE__ */ jsx("span", { className: "eyebrow center", children: project.meer.eyebrow }),
          /* @__PURE__ */ jsx("h2", { children: project.meer.kop }),
          /* @__PURE__ */ jsx("p", { children: project.meer.intro })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "rel-grid", children: meer.map((r) => /* @__PURE__ */ jsxs(Link, { className: "rel-card", to: lp(`/realisaties/${r.slug}`), children: [
          /* @__PURE__ */ jsx("img", { src: r.kaart, alt: r.kaartAlt, loading: "lazy", width: 800, height: 600 }),
          /* @__PURE__ */ jsxs("div", { className: "rc-body", children: [
            /* @__PURE__ */ jsx("span", { className: "rc-tag", children: r.chip }),
            /* @__PURE__ */ jsx("h3", { children: r.titel }),
            /* @__PURE__ */ jsxs("span", { className: "rc-more", children: [
              t.bekijk,
              " ",
              /* @__PURE__ */ jsx(ArrowRight, {})
            ] })
          ] })
        ] }, r.slug)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(V3Footer, {})
  ] });
};
export {
  RealisatieDetailPage as default
};
