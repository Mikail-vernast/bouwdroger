import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "react-router-dom";
import { P as PageMeta } from "./PageMeta-BXulEWcY.js";
import { l as V3Header } from "./V3Header-BeIMcMg7.js";
import { n as navigatie, v as vertaalLabel, r as regioNaam, V as V3Footer } from "./V3Footer-9z4J1I4x.js";
import { R as REGIO_ROUTES, v as vertaalPad, p as prefix, g as gemeenteVanPlaats, i as plaatsFr, u as useCopy, a as useLokaalPad, b as useTaal, A as ACTIEVE_TALEN } from "../main.mjs";
import { W as WAALSE_STREKEN, N as NEDERLANDSE_STREKEN, S as STREKEN_PER_REGIO } from "./provincie-gemeenten-Dl-UWRQV.js";
import { REALISATIES } from "./realisaties-eA_H-cxM.js";
import { a as STREEK_EN, c as PLAATS_EN } from "./V3Regio.copy-4H6GOpwk.js";
import { u as useSeo } from "./seo-BMvlJeai.js";
import { o as organizationSchema, b as breadcrumbSchema, i as itemListSchema } from "./schema-VJMHyxOJ.js";
/* empty css                    */
import "vite-react-ssg";
import "./FontPreload-C6Rzq6ld.js";
import "./verhuur-CgnDb-wO.js";
import "./tarieven-ZrzMF0e-.js";
import "./verhuur-8XCQs1EE.js";
import "./packages-DdkKuPcF.js";
import "lucide-react";
import "./verhuur.fr-CrIPL5Eo.js";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/sitemap.ts");
const slugId = (titel) => "sm-" + titel.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const STREEK_FR = {
  "Brussel-centrum en de eerste kroon": "Bruxelles-centre et la première couronne",
  "De kanaalzone en de westrand": "La zone du canal et la périphérie ouest",
  "De zuid- en oostrand": "Les périphéries sud et est",
  "Arrondissement Nijvel": "Arrondissement de Nivelles",
  "Arrondissement Zinnik": "Arrondissement de Soignies",
  "Arrondissement La Louvière": "Arrondissement de La Louvière",
  "Arrondissement Charleroi": "Arrondissement de Charleroi",
  "Arrondissement Bergen": "Arrondissement de Mons",
  "Arrondissement Aat": "Arrondissement d'Ath",
  "Arrondissement Doornik-Moeskroen": "Arrondissement de Tournai-Mouscron",
  "Arrondissement Thuin": "Arrondissement de Thuin",
  "Arrondissement Namen": "Arrondissement de Namur",
  "Arrondissement Dinant": "Arrondissement de Dinant",
  "Arrondissement Philippeville": "Arrondissement de Philippeville",
  "Arrondissement Marche-en-Famenne": "Arrondissement de Marche-en-Famenne",
  "Arrondissement Bastenaken": "Arrondissement de Bastogne",
  "Arrondissement Neufchâteau": "Arrondissement de Neufchâteau",
  "Arrondissement Aarlen": "Arrondissement d'Arlon",
  "Arrondissement Virton": "Arrondissement de Virton",
  "Arrondissement Borgworm": "Arrondissement de Waremme",
  "Arrondissement Luik": "Arrondissement de Liège",
  "Arrondissement Hoei": "Arrondissement de Huy",
  "Arrondissement Verviers": "Arrondissement de Verviers",
  "West-Brabant": "Ouest du Brabant",
  "Midden-Brabant": "Centre du Brabant",
  "Noordoost-Brabant": "Nord-est du Brabant",
  "Zuidoost-Brabant": "Sud-est du Brabant",
  "Zeeuws-Vlaanderen": "Flandre zélandaise",
  "De Zeeuwse eilanden": "Les îles zélandaises",
  "Noord-Limburg": "Nord du Limbourg",
  "Midden-Limburg": "Centre du Limbourg",
  "Zuid-Limburg": "Sud du Limbourg",
  "Stad Antwerpen en districten": "Ville d'Anvers et districts",
  "Zuidrand en Scheldeboord": "Périphérie sud et bords de l'Escaut",
  Rupelstreek: "Région du Rupel",
  "Klein-Brabant en Willebroek": "Petit-Brabant et Willebroek",
  "Noordrand en Noorderkempen": "Périphérie nord et Campine du Nord",
  "Mechelse regio en Netevallei": "Région de Malines et vallée de la Nèthe",
  "De Kempen": "La Campine",
  "Gent en de Gentse rand": "Gand et sa périphérie",
  "Het Waasland": "Le Pays de Waes",
  "Scheldeland en de Dendermondse regio": "Pays de l'Escaut et région de Termonde",
  "De Denderstreek": "La région de la Dendre",
  "Het Meetjesland": "Le Meetjesland",
  "De Vlaamse Ardennen": "Les Ardennes flamandes",
  "De Brusselse rand": "La périphérie bruxelloise",
  "Pajottenland en Zennevallei": "Pajottenland et vallée de la Senne",
  "Leuven en het Dijleland": "Louvain et la vallée de la Dyle",
  "Het Hageland": "Le Hageland",
  "Tienen en Vlaams-Haspengouw": "Tirlemont et la Hesbaye flamande",
  "De kust": "La côte",
  "Brugge en het Brugse Ommeland": "Bruges et ses environs",
  "De Westhoek": "Le Westhoek",
  "Kortrijk en de Leiestreek": "Courtrai et la région de la Lys",
  "Midden-West-Vlaanderen": "Centre de la Flandre occidentale",
  "Hasselt, Genk en Midden-Limburg": "Hasselt, Genk et le centre du Limbourg",
  "Noord-Limburg en de Limburgse Kempen": "Nord du Limbourg et Campine limbourgeoise",
  "Het Maasland": "Le pays mosan",
  "Haspengouw en de Voerstreek": "Hesbaye et les Fourons"
};
function plaatsEn(naam, gebied) {
  if (PLAATS_EN[naam]) return PLAATS_EN[naam];
  if (gebied === "brussel" || gebied in WAALSE_STREKEN) return plaatsFr(naam);
  return naam;
}
function plaatsIn(naam, gebied, taal) {
  if (taal === "fr") return plaatsFr(naam);
  if (taal === "en") return plaatsEn(naam, gebied);
  return naam;
}
function streekIn(naam, taal) {
  if (taal === "fr") return STREEK_FR[naam] ?? naam;
  if (taal === "en") return STREEK_EN[naam] ?? naam;
  return naam;
}
function padIn(nlPad, taal) {
  if (!nlPad) return void 0;
  if (taal === "nl") return nlPad;
  return vertaalPad(nlPad, taal) ?? void 0;
}
const naarGebied = (taal, sleutel, kop, streken, nlPath) => ({
  sleutel,
  kop,
  path: padIn(nlPath, taal),
  aantal: streken.reduce((n, s) => n + s.gemeenten.length, 0),
  streken: streken.map((s) => ({
    naam: streekIn(s.naam, taal),
    plaatsen: s.gemeenten.map((naam) => ({
      naam: plaatsIn(naam, sleutel, taal),
      path: nlPath ? padIn(gemeenteVanPlaats(naam)?.path, taal) : void 0
    })).sort((a, b) => a.naam.localeCompare(b.naam, taal))
  }))
});
const TEKSTEN = {
  nl: {
    bestellen: ["Droogpakket bestellen", "Van de berekening tot de levering op de werf."],
    waarvoor: ["Waarvoor u droogt", "Elke situatie heeft een eigen aanpak en een eigen pagina."],
    toestellen: ["Toestellen huren", "Elk toestel met zijn capaciteit, dagprijs en volledige fiche."],
    bedrijf: ["Over Vernast", "Wie het werk doet en hoe u ons bereikt."],
    juridisch: [
      { label: "Privacybeleid", path: "/privacy" },
      { label: "Algemene voorwaarden", path: "/algemene-voorwaarden" }
    ],
    vlaanderen: [
      "België: Vlaanderen",
      "Vlaanderen",
      "De vijf Vlaamse provincies en elke plaats waar we leveren, per streek. Een plaats met een eigen pagina is een link."
    ],
    brussel: ["België: Brussels Hoofdstedelijk Gewest", "Brussel", "De negentien gemeenten van het gewest."],
    wallonie: [
      "België: Wallonië, op aanvraag",
      "Wallonië",
      "We komen als het gevraagd wordt, zonder de levertermijn van 24 uur."
    ],
    nederland: [
      "Nederland",
      "Nederland",
      "De drie provincies langs de Belgische grens. Hier leveren we op afspraak, zonder levertermijn van 24 uur: de rit is langer en over de grens gelden andere btw-regels."
    ],
    alleRealisaties: "Alle realisaties"
  },
  fr: {
    bestellen: ["Commander un pack de séchage", "Du calcul à la livraison sur chantier."],
    waarvoor: ["Ce que vous séchez", "Chaque situation a sa propre approche et sa propre page."],
    toestellen: ["Louer un appareil", "Chaque appareil avec sa capacité, son prix journalier et sa fiche complète."],
    bedrijf: ["À propos de Vernast", "Qui fait le travail et comment nous joindre."],
    juridisch: [
      { label: "Politique de confidentialité", path: "/privacy" },
      { label: "Conditions générales", path: "/algemene-voorwaarden" }
    ],
    vlaanderen: [
      "Belgique : Flandre",
      "Flandre",
      "Les cinq provinces flamandes et chaque localité où nous livrons, par région. Une localité qui a sa propre page est un lien."
    ],
    brussel: [
      "Belgique : Région de Bruxelles-Capitale",
      "Bruxelles",
      "Les dix-neuf communes de la région."
    ],
    wallonie: [
      "Belgique : Wallonie, sur demande",
      "Wallonie",
      "Nous venons sur demande, sans le délai de livraison de 24 heures."
    ],
    nederland: [
      "Pays-Bas",
      "Pays-Bas",
      "Les trois provinces le long de la frontière belge. Nous y livrons sur rendez-vous, sans délai de 24 heures : le trajet est plus long et d'autres règles de TVA s'appliquent de l'autre côté de la frontière."
    ],
    alleRealisaties: "Toutes les réalisations"
  },
  en: {
    bestellen: ["Order a drying package", "From the calculation to delivery on site."],
    waarvoor: ["What you are drying", "Every situation has its own approach and its own page."],
    toestellen: ["Hire a unit", "Every unit with its capacity, daily price and full product sheet."],
    bedrijf: ["About Vernast", "Who does the work and how to reach us."],
    juridisch: [
      { label: "Privacy policy", path: "/privacy" },
      { label: "General terms and conditions", path: "/algemene-voorwaarden" }
    ],
    vlaanderen: [
      "Belgium: Flanders",
      "Flanders",
      "The five Flemish provinces and every place we deliver to, by area. A place with its own page is a link."
    ],
    brussel: ["Belgium: Brussels-Capital Region", "Brussels", "The nineteen municipalities of the region."],
    wallonie: [
      "Belgium: Wallonia, on request",
      "Wallonia",
      "We come when asked, without the 24-hour delivery time."
    ],
    nederland: [
      "The Netherlands",
      "Netherlands",
      "The three provinces along the Belgian border. We deliver here by appointment, without the 24-hour delivery time: the journey is longer and different VAT rules apply across the border."
    ],
    alleRealisaties: "All projects"
  }
};
const BESTELLEN = [
  { label: "Bereken uw droogpakket", path: "/verhuur/calculator" },
  { label: "Alles in één Droogservice", path: "/verhuur/pakket" },
  { label: "Losse toestellen afhalen", path: "/verhuur/afhalen" },
  { label: "Levering en installatie", path: "/levering" },
  { label: "Zelf afhalen in Aartselaar", path: "/afhalen" },
  { label: "Prijzen", path: "/prijzen" }
];
function bouw(taal) {
  const t = TEKSTEN[taal];
  const nav = navigatie(taal);
  const lokaal = (items) => taal === "nl" ? items : items.flatMap((i) => {
    const path = padIn(i.path, taal);
    return path ? [{ label: vertaalLabel(i.label, taal), path }] : [];
  });
  const bestaat = (items) => taal === "nl" ? items : items.filter((i) => i.path.startsWith(`${prefix(taal)}/`) || i.path === prefix(taal));
  const gezien = /* @__PURE__ */ new Set();
  const machines = padIn("/machines", taal);
  const BLOKKEN2 = [
    { titel: t.bestellen[0], uitleg: t.bestellen[1], items: lokaal(BESTELLEN) },
    { titel: t.waarvoor[0], uitleg: t.waarvoor[1], items: bestaat(nav.TOEPASSINGEN) },
    {
      titel: t.toestellen[0],
      uitleg: t.toestellen[1],
      items: bestaat([...nav.GAMMA.filter((i) => i.path === machines), ...nav.TOESTELLEN, ...nav.TOEBEHOREN_LINKS])
    },
    { titel: t.bedrijf[0], uitleg: t.bedrijf[1], items: bestaat(nav.BEDRIJF) },
    ...nav.ALLES_OVER_DROGEN.map((g) => ({ titel: g.titel, uitleg: "", items: bestaat(g.items) }))
  ].map((b) => ({
    ...b,
    id: slugId(b.titel),
    items: b.items.filter((i) => !gezien.has(i.path) && gezien.add(i.path))
  })).filter((b) => b.items.length > 0);
  const regioGebied = (regio) => naarGebied(taal, regio.slug, regioNaam(regio, taal), STREKEN_PER_REGIO[regio.slug] ?? [], regio.path);
  const gebiedVoor = (sleutel, kop, streken) => {
    const regio = REGIO_ROUTES.find((r) => r.slug === sleutel);
    return regio ? regioGebied(regio) : naarGebied(taal, sleutel, kop, streken[sleutel] ?? []);
  };
  const WAALS = [
    ["waals-brabant", "Waals-Brabant"],
    ["henegouwen", "Henegouwen"],
    ["luik", "Luik"],
    ["namen", "Namen"],
    ["luxemburg", "Provincie Luxemburg"]
  ].map(([sleutel, kop]) => gebiedVoor(sleutel, kop, WAALSE_STREKEN));
  const LANDEN2 = [
    {
      id: "sm-vlaanderen",
      titel: t.vlaanderen[0],
      kort: t.vlaanderen[1],
      uitleg: t.vlaanderen[2],
      opAanvraag: false,
      gebieden: REGIO_ROUTES.filter(
        (r) => !(r.slug in WAALSE_STREKEN) && !(r.slug in NEDERLANDSE_STREKEN) && r.slug !== "brussel"
      ).map(regioGebied)
    },
    {
      id: "sm-brussel",
      titel: t.brussel[0],
      kort: t.brussel[1],
      uitleg: t.brussel[2],
      opAanvraag: false,
      gebieden: REGIO_ROUTES.filter((r) => r.slug === "brussel").map(regioGebied)
    },
    {
      id: "sm-wallonie",
      titel: t.wallonie[0],
      kort: t.wallonie[1],
      uitleg: t.wallonie[2],
      opAanvraag: true,
      gebieden: WAALS
    },
    {
      id: "sm-nederland",
      titel: t.nederland[0],
      kort: t.nederland[1],
      uitleg: t.nederland[2],
      opAanvraag: true,
      // Sinds 15-11-2026 heeft elke Nederlandse provincie haar pagina; zonder
      // route valt ze terug op tekst, zoals de Waalse.
      gebieden: [
        ["noord-brabant", "Noord-Brabant"],
        ["zeeland", "Zeeland"],
        ["nederlands-limburg", "Nederlands Limburg"]
      ].map(([sleutel, kop]) => gebiedVoor(sleutel, kop, NEDERLANDSE_STREKEN))
    }
  ];
  const REALISATIE_LINKS2 = bestaat(
    lokaal([
      { label: t.alleRealisaties, path: "/realisaties" },
      ...REALISATIES.map((r) => ({ label: r.titel, path: `/realisaties/${r.slug}` }))
    ])
  );
  return { BLOKKEN: BLOKKEN2, JURIDISCH: bestaat(lokaal(t.juridisch)), LANDEN: LANDEN2, REALISATIE_LINKS: REALISATIE_LINKS2 };
}
const CACHE = /* @__PURE__ */ new Map();
function sitemapInhoud(taal) {
  let uit = CACHE.get(taal);
  if (!uit) CACHE.set(taal, uit = bouw(taal));
  return uit;
}
const { BLOKKEN, JURIDISCH, LANDEN, REALISATIE_LINKS } = sitemapInhoud("nl");
const padDelen = (path) => path.split("/").filter(Boolean);
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/sitemap/Pad.tsx");
const Pad = ({ path, stil = true }) => {
  const delen = padDelen(path);
  if (delen.length === 0) return /* @__PURE__ */ jsx("span", { className: "pad", children: /* @__PURE__ */ jsx("i", { children: "/" }) });
  return /* @__PURE__ */ jsx("span", { className: "pad", children: delen.map((deel, i) => /* @__PURE__ */ jsxs("span", { children: [
    /* @__PURE__ */ jsx("i", { children: "/" }),
    stil && i < delen.length - 1 ? /* @__PURE__ */ jsx("em", { children: deel }) : deel
  ] }, i)) });
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/SitemapPage.tsx");
const Tak = ({ laatste }) => /* @__PURE__ */ jsx("span", { className: "sm-tak", "aria-hidden": "true", children: laatste ? "└─" : "├─" });
const COPY = {
  nl: {
    home: "Home",
    sitemap: "Sitemap",
    kruimelpad: "Kruimelpad",
    h1: "sitemap",
    lede: "De hele site als mappenboom, in het Nederlands, Frans en Engels. Klik een map om ernaartoe te springen.",
    opDezePagina: "Op deze pagina",
    team: "Drie technici van Vernast in werkoverall",
    realisaties: "Realisaties",
    juridisch: "Juridisch",
    opAanvraag: "op aanvraag",
    binnen24: "levering binnen 24 uur",
    plaatsen: "plaatsen",
    lijst: "Alle pagina's van Vernast Bouwdrogers",
    talen: "Talen"
  },
  fr: {
    home: "Accueil",
    sitemap: "Plan du site",
    kruimelpad: "Fil d'Ariane",
    h1: "plan-du-site",
    lede: "Tout le site sous forme d'arborescence, en français, néerlandais et anglais. Cliquez sur un dossier pour y accéder.",
    opDezePagina: "Sur cette page",
    team: "Trois techniciens de Vernast en bleu de travail",
    realisaties: "Réalisations",
    juridisch: "Mentions légales",
    opAanvraag: "sur demande",
    binnen24: "livraison en 24 heures",
    plaatsen: "localités",
    lijst: "Toutes les pages de Vernast Bouwdrogers",
    talen: "Langues"
  },
  en: {
    home: "Home",
    sitemap: "Sitemap",
    kruimelpad: "Breadcrumb",
    h1: "sitemap",
    lede: "The whole site as a folder tree, in English, Dutch and French. Click a folder to jump to it.",
    opDezePagina: "On this page",
    team: "Three Vernast technicians in work overalls",
    realisaties: "Projects",
    juridisch: "Legal",
    opAanvraag: "on request",
    binnen24: "delivery within 24 hours",
    plaatsen: "places",
    lijst: "Every page of Vernast Bouwdrogers",
    talen: "Languages"
  }
};
const TaalBoom = ({ taal, idPrefix }) => {
  const t = COPY[taal];
  const { BLOKKEN: BLOKKEN2, JURIDISCH: JURIDISCH2, LANDEN: LANDEN2, REALISATIE_LINKS: REALISATIE_LINKS2 } = sitemapInhoud(taal);
  const id = (x) => idPrefix + x;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "sm-mappen", children: BLOKKEN2.map((blok) => /* @__PURE__ */ jsxs("nav", { className: "sm-map", id: id(blok.id), "aria-labelledby": id(`${blok.id}-k`), children: [
      /* @__PURE__ */ jsxs("h2", { id: id(`${blok.id}-k`), children: [
        /* @__PURE__ */ jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M3 6a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }) }),
        blok.titel
      ] }),
      /* @__PURE__ */ jsx("ul", { children: blok.items.map((item, i) => /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx(Tak, { laatste: i === blok.items.length - 1 }),
        /* @__PURE__ */ jsxs(Link, { to: item.path, children: [
          /* @__PURE__ */ jsx(Pad, { path: item.path }),
          /* @__PURE__ */ jsx("small", { children: item.label })
        ] })
      ] }, item.path + item.label)) })
    ] }, blok.id)) }),
    /* @__PURE__ */ jsxs("div", { className: "sm-mappen-2", children: [
      /* @__PURE__ */ jsxs("nav", { className: "sm-map sm-map-breed", id: id("sm-real"), "aria-labelledby": id("sm-real-k"), children: [
        /* @__PURE__ */ jsxs("h2", { id: id("sm-real-k"), children: [
          /* @__PURE__ */ jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M3 6a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }) }),
          t.realisaties
        ] }),
        /* @__PURE__ */ jsx("ul", { children: REALISATIE_LINKS2.map((item, i, alle) => /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx(Tak, { laatste: i === alle.length - 1 }),
          /* @__PURE__ */ jsxs(Link, { to: item.path, children: [
            /* @__PURE__ */ jsx(Pad, { path: item.path }),
            /* @__PURE__ */ jsx("small", { children: item.label })
          ] })
        ] }, item.path)) })
      ] }),
      /* @__PURE__ */ jsxs("nav", { className: "sm-map", id: id("sm-jur"), "aria-labelledby": id("sm-jur-k"), children: [
        /* @__PURE__ */ jsxs("h2", { id: id("sm-jur-k"), children: [
          /* @__PURE__ */ jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M3 6a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }) }),
          t.juridisch
        ] }),
        /* @__PURE__ */ jsx("ul", { children: JURIDISCH2.map((item, i, alle) => /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx(Tak, { laatste: i === alle.length - 1 }),
          /* @__PURE__ */ jsxs(Link, { to: item.path, children: [
            /* @__PURE__ */ jsx(Pad, { path: item.path }),
            /* @__PURE__ */ jsx("small", { children: item.label })
          ] })
        ] }, item.path)) })
      ] })
    ] }),
    LANDEN2.map((land) => /* @__PURE__ */ jsxs("section", { className: "sm-land", id: id(land.id), "aria-labelledby": id(`${land.id}-k`), children: [
      /* @__PURE__ */ jsxs("div", { className: "sm-land-kop", children: [
        /* @__PURE__ */ jsx("h2", { id: id(`${land.id}-k`), children: land.titel }),
        /* @__PURE__ */ jsx("span", { className: land.opAanvraag ? "sm-status uit" : "sm-status", children: land.opAanvraag ? t.opAanvraag : t.binnen24 })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "sm-uit", children: land.uitleg }),
      /* @__PURE__ */ jsx("div", { className: "sm-provs", children: land.gebieden.map((g) => /* @__PURE__ */ jsxs("div", { className: "sm-prov", children: [
        /* @__PURE__ */ jsxs("h3", { children: [
          g.path ? /* @__PURE__ */ jsx(Link, { to: g.path, children: /* @__PURE__ */ jsx(Pad, { path: g.path, stil: false }) }) : /* @__PURE__ */ jsxs("span", { className: "pad", children: [
            /* @__PURE__ */ jsx("i", { children: "~" }),
            " ",
            g.kop
          ] }),
          /* @__PURE__ */ jsxs("small", { children: [
            g.path ? g.kop + " · " : "",
            g.aantal,
            " ",
            t.plaatsen
          ] })
        ] }),
        g.streken.map((s) => /* @__PURE__ */ jsxs("div", { className: "sm-streek", children: [
          /* @__PURE__ */ jsxs("h4", { children: [
            /* @__PURE__ */ jsx(Tak, { laatste: false }),
            s.naam
          ] }),
          /* @__PURE__ */ jsx("ul", { children: s.plaatsen.map((p) => /* @__PURE__ */ jsx("li", { children: p.path ? /* @__PURE__ */ jsx(Link, { to: p.path, children: p.naam }) : /* @__PURE__ */ jsx("span", { children: p.naam }) }, p.naam)) })
        ] }, s.naam))
      ] }, g.sleutel)) })
    ] }, land.id))
  ] });
};
const TAALNAAM = { nl: "Nederlands", fr: "Français", en: "English" };
const SitemapPage = () => {
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const taal = useTaal();
  const { BLOKKEN: BLOKKEN2, LANDEN: LANDEN2, REALISATIE_LINKS: REALISATIE_LINKS2 } = sitemapInhoud(taal);
  const talen = ACTIEVE_TALEN;
  const [actief, setActief] = useState(taal);
  const alles = BLOKKEN2.flatMap((b) => b.items);
  return /* @__PURE__ */ jsxs("div", { className: "v3c sm-page", children: [
    /* @__PURE__ */ jsx(
      PageMeta,
      {
        ...useSeo("sitemap"),
        jsonLd: [
          organizationSchema(),
          breadcrumbSchema([
            { name: t.home, path: lp("/") },
            { name: t.sitemap, path: lp("/sitemap") }
          ]),
          /* De hoofdsecties als lijst: wat een antwoordmachine nodig heeft om
             de site als geheel te begrijpen in plaats van als losse pagina's. */
          itemListSchema(
            t.lijst,
            alles.map((item) => ({ name: item.label, path: item.path }))
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(V3Header, { darkUntil: ".sm-hero" }),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("section", { className: "sm-hero", children: /* @__PURE__ */ jsxs("div", { className: "wrap sm-hero-grid", children: [
        /* @__PURE__ */ jsxs("div", { className: "sm-hero-copy", children: [
          /* @__PURE__ */ jsxs("nav", { "aria-label": t.kruimelpad, className: "sm-kruimels", children: [
            /* @__PURE__ */ jsx(Link, { to: lp("/"), children: t.home }),
            " ",
            /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "/" }),
            " ",
            /* @__PURE__ */ jsx("span", { children: t.sitemap })
          ] }),
          /* @__PURE__ */ jsxs("h1", { children: [
            /* @__PURE__ */ jsx("i", { children: "/" }),
            t.h1
          ] }),
          /* @__PURE__ */ jsx("p", { children: t.lede }),
          /* @__PURE__ */ jsxs("nav", { className: "sm-boom", "aria-label": t.opDezePagina, children: [
            /* @__PURE__ */ jsx("span", { className: "sm-wortel", children: "vernast-bouwdrogers.be" }),
            [
              ...BLOKKEN2.map((b) => ({ href: `#${b.id}`, naam: b.titel, n: b.items.length })),
              { href: "#sm-real", naam: t.realisaties, n: REALISATIE_LINKS2.length },
              ...LANDEN2.map((l) => ({
                href: `#${l.id}`,
                naam: l.kort,
                n: l.gebieden.reduce((s, g) => s + g.aantal, 0)
              }))
            ].map((r, i, arr) => /* @__PURE__ */ jsxs("a", { href: r.href, onClick: () => setActief(taal), children: [
              /* @__PURE__ */ jsx(Tak, { laatste: i === arr.length - 1 }),
              /* @__PURE__ */ jsx("span", { children: r.naam }),
              /* @__PURE__ */ jsx("small", { children: r.n })
            ] }, r.href))
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "sm-team", children: /* @__PURE__ */ jsx("img", { src: "/vernast/drie-vakmannen.webp", alt: t.team, width: 1400, height: 934 }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "sm-body", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsx("div", { className: "sm-talen", role: "tablist", "aria-label": t.talen, children: talen.map((tl) => /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            role: "tab",
            id: `sm-tab-${tl}`,
            "aria-controls": `sm-paneel-${tl}`,
            "aria-selected": actief === tl,
            className: actief === tl ? "actief" : void 0,
            onClick: () => setActief(tl),
            children: [
              /* @__PURE__ */ jsx("span", { className: "sm-taal-code", children: tl.toUpperCase() }),
              TAALNAAM[tl],
              /* @__PURE__ */ jsx("small", { children: prefix(tl) || "/" })
            ]
          },
          tl
        )) }),
        talen.map((tl) => /* @__PURE__ */ jsx(
          "div",
          {
            role: "tabpanel",
            id: `sm-paneel-${tl}`,
            "aria-labelledby": `sm-tab-${tl}`,
            hidden: actief !== tl,
            children: /* @__PURE__ */ jsx(TaalBoom, { taal: tl, idPrefix: tl === taal ? "" : `${tl}-` })
          },
          tl
        ))
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(V3Footer, {})
  ] });
};
export {
  SitemapPage as default
};
