import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { A as ArrowRightIcon, L as LeafIcon } from "./V3Header-BeIMcMg7.js";
import { R as Reveal } from "./Reveal-NNPkAe35.js";
import { j as DROGER_KAARTEN } from "./schema-VJMHyxOJ.js";
import { P as PRODUCTS, p as productImageAlt } from "./verhuur-CgnDb-wO.js";
import { u as useCopy, b as useTaal, a as useLokaalPad, h as formatEuro } from "../main.mjs";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/content/Pakketkaarten.tsx");
const COPY = {
  nl: {
    cta: "Bekijk dit toestel",
    perWeek: "/week",
    onderPrijs: "excl. btw · levering en vochtmeting inbegrepen",
    voet: "Alle drie zijn eco-condensdrogers, te huur per dag of per week. Levering, plaatsing en de vochtmeting zitten in de prijs.",
    pakketKop: "Een volledige woning? Dan wordt het een droogpakket.",
    pakketVoor: "Een pakket combineert droger, ventilator en indien nodig een bouwkachel, berekend op uw oppervlakte en op wat er moet drogen. Alleen op zo'n berekend pakket geldt onze",
    garantie: "100 % drooggarantie",
    pakketNa: ": bij een los toestel kunnen we het resultaat niet garanderen.",
    samenstellen: "Stel uw pakket samen",
    volume: null,
    badge: {},
    desc: {}
  },
  fr: {
    cta: "Voir cet appareil",
    perWeek: "/semaine",
    onderPrijs: "HTVA · livraison et mesure d'humidité comprises",
    voet: "Ce sont tous trois des déshumidificateurs à condensation éco, à louer à la journée ou à la semaine. Livraison, installation et mesure d'humidité sont comprises dans le prix.",
    pakketKop: "Un logement entier ? Il vous faut alors un pack de séchage.",
    pakketVoor: "Un pack combine déshumidificateur, ventilateur et si nécessaire un chauffage de chantier, calculés selon votre surface et ce qui doit sécher. Notre",
    garantie: "garantie de séchage à 100 %",
    pakketNa: " ne s'applique qu'à un tel pack calculé : avec un appareil seul, nous ne pouvons pas garantir le résultat.",
    samenstellen: "Composez votre pack",
    // "Tot 250 m³ · 50 L/dag" uit tarieflijst.ts; de getallen blijven, de woorden niet.
    volume: (nl) => nl.replace(/^Tot /, "Jusqu'à ").replace(/ L\/dag$/, " l/jour"),
    badge: { "Meest gehuurd": "Le plus loué" },
    desc: {
      ttk170: "Une pièce, un appartement ou une petite rénovation",
      ttk350: "Une maison familiale standard ou une grande rénovation",
      ttk650: "Grands chantiers, caves spacieuses et dégâts des eaux urgents"
    }
  },
  en: {
    cta: "View this unit",
    perWeek: "/week",
    onderPrijs: "excl. VAT · delivery and moisture reading included",
    voet: "All three are eco condensation dryers, available by the day or by the week. Delivery, installation and the moisture reading are included in the price.",
    pakketKop: "A whole home? Then it becomes a drying package.",
    pakketVoor: "A package combines a dryer, a fan and if needed a site heater, calculated on your floor area and on what needs to dry. Our",
    garantie: "100% drying guarantee",
    pakketNa: " only applies to a calculated package like that: with a single unit we cannot guarantee the result.",
    samenstellen: "Put together your package",
    volume: (nl) => nl.replace(/^Tot /, "Up to ").replace(/ L\/dag$/, " L/day"),
    badge: { "Meest gehuurd": "Most hired" },
    desc: {
      ttk170: "One room, a flat or a small renovation",
      ttk350: "A standard family home or a large renovation",
      ttk650: "Large sites, spacious cellars and urgent water damage"
    }
  }
};
const Pakketkaarten = ({ ctaLabel }) => {
  const t = useCopy(COPY);
  const taal = useTaal();
  const lp = useLokaalPad();
  return /* @__PURE__ */ jsxs("div", { className: "pkgs", children: [
    DROGER_KAARTEN.map((kaart, i) => {
      const product = PRODUCTS[kaart.key];
      return /* @__PURE__ */ jsxs(
        Reveal,
        {
          from: "up",
          delay: i * 0.08,
          className: `pkg${kaart.highlight ? " top" : ""}`,
          children: [
            kaart.badge && /* @__PURE__ */ jsx("span", { className: "plab", children: t.badge[kaart.badge] ?? kaart.badge }),
            product && /* @__PURE__ */ jsx(
              "img",
              {
                src: product.img[0],
                alt: productImageAlt(product, 0),
                width: 420,
                height: 420,
                loading: "lazy",
                decoding: "async"
              }
            ),
            /* @__PURE__ */ jsx("h3", { children: kaart.name }),
            /* @__PURE__ */ jsx("span", { className: "pvol", children: t.volume ? t.volume(kaart.volume) : kaart.volume }),
            /* @__PURE__ */ jsx("p", { className: "pdesc", children: t.desc[kaart.key] ?? kaart.desc }),
            /* @__PURE__ */ jsxs("div", { className: "pprice", children: [
              /* @__PURE__ */ jsx("b", { children: taal === "nl" ? `€ ${kaart.weekPrice}` : formatEuro(Number(kaart.weekPrice), taal, 0) }),
              /* @__PURE__ */ jsx("span", { children: t.perWeek }),
              /* @__PURE__ */ jsx("small", { children: t.onderPrijs })
            ] }),
            /* @__PURE__ */ jsxs(Link, { className: `btn${kaart.highlight ? "" : " btn-line"}`, to: lp(kaart.path), children: [
              ctaLabel ?? t.cta,
              /* @__PURE__ */ jsx(ArrowRightIcon, { size: 13 })
            ] })
          ]
        },
        kaart.key
      );
    }),
    /* @__PURE__ */ jsxs("p", { className: "pkgs-foot", children: [
      /* @__PURE__ */ jsx(LeafIcon, { size: 13 }),
      /* @__PURE__ */ jsx("span", { children: t.voet })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "pkgcta", children: [
      /* @__PURE__ */ jsxs("div", { className: "pc-t", children: [
        /* @__PURE__ */ jsx("b", { children: t.pakketKop }),
        /* @__PURE__ */ jsxs("p", { children: [
          t.pakketVoor,
          " ",
          /* @__PURE__ */ jsx(Link, { to: lp("/drooggarantie"), children: t.garantie }),
          t.pakketNa
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Link, { className: "btn btn-white", to: lp("/verhuur/calculator"), children: [
        t.samenstellen,
        /* @__PURE__ */ jsx(ArrowRightIcon, {})
      ] })
    ] })
  ] });
};
export {
  Pakketkaarten as P
};
