import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { R as REVIEWS, C as CONTACT, P as PageMeta } from "./PageMeta-BXulEWcY.js";
import { A as ArrowRightIcon, I as InfoIcon, P as PlanIcon, S as ShieldIcon, C as ClipboardIcon, H as HelmetIcon, V as VerlengIcon, O as OpvolgIcon, G as GammaIcon, a as PrijsIcon, b as CalcIcon, c as ChecklistIcon, T as TruckIcon, R as RefreshIcon, d as SupportIcon, e as CheckIcon, f as CardIcon, g as CalendarCheckIcon, M as MailIcon, h as PinIcon, i as GoogleIcon, j as StarIcon, k as PhoneIcon, U as UploadIcon, F as FileIcon, l as V3Header } from "./V3Header-BeIMcMg7.js";
import { Link } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { u as useCopy, a as useLokaalPad, b as useTaal, c as useToonBedrag, d as useKlant, e as useVoorkeur, f as bewaarVoorkeur, g as gemeenteVanPlaats, R as REGIO_ROUTES, k as kaartVoor, h as formatEuro, H as HTML_LANG } from "../main.mjs";
import { useRef, useEffect, useState } from "react";
import { t as toestelPad, P as PRODUCTS, a as toestelChips } from "./verhuur-CgnDb-wO.js";
import { D as DAY_PRICE_MIN, o as organizationSchema, f as faqSchema, w as websiteSchema } from "./schema-VJMHyxOJ.js";
import { S as STREKEN_PER_REGIO } from "./provincie-gemeenten-Dl-UWRQV.js";
import { S as STREEK_FR, a as STREEK_EN, C as COPY$g, P as PROVINCIE_EN, b as PROVINCIE_FR, c as PLAATS_EN } from "./V3Regio.copy-4H6GOpwk.js";
import { D as DEPOSIT_GROSS } from "./booking-CFp-lxcW.js";
import { e as euroInt } from "./verhuur-8XCQs1EE.js";
import { R as REVIEWS_LIST } from "./reviews-BlVWZu-x.js";
import { i as isValidEmail, m as maskEmail, a as maskPhone } from "./inputMask-BnLinOtl.js";
import { f as formatFileSize, a as filterAcceptable, M as MAX_FILES, u as uploadFormFiles } from "./formUploads-ncau7rQh.js";
import { V as V3Footer } from "./V3Footer-9z4J1I4x.js";
/* empty css                       */
import { u as useSeo } from "./seo-BMvlJeai.js";
import "./FontPreload-C6Rzq6ld.js";
import "lucide-react";
import "./tarieven-ZrzMF0e-.js";
import "./verhuur.fr-CrIPL5Eo.js";
import "./levering-CO7G5c_f.js";
import "./packages-DdkKuPcF.js";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/home-v3/V3Hero.tsx");
const ICONS$3 = [
  {
    icon: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("rect", { x: "4", y: "3", width: "16", height: "18", rx: "2" }),
      /* @__PURE__ */ jsx("path", { d: "M8 7h8" }),
      /* @__PURE__ */ jsx("path", { d: "M8 11h8" }),
      /* @__PURE__ */ jsx("path", { d: "M8 15h5" })
    ] })
  },
  { icon: /* @__PURE__ */ jsx("path", { d: "M20 6 9 17l-5-5" }) },
  { icon: /* @__PURE__ */ jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" }) }
];
const COPY$f = {
  nl: {
    notes: [
      { title: "Online berekenen & boeken", sub: "Betalen en plannen inbegrepen" },
      { title: "Één all-in prijs", sub: "Geen verborgen kosten" },
      { title: "100% droog-garantie*", sub: "Of kosteloos verlengen" }
    ],
    reviews: "Google reviews",
    h1: "Bouwdroger huren op maat. Drooggarantie inbegrepen.",
    intro: "Geen standaard bouwdroger, maar een compleet droogpakket op maat van uw woning. Digitaal geboekt, energiezuinig gedimensioneerd, professioneel geïnstalleerd en één vaste all-in prijs. Niet droog binnen de berekende periode? Kosteloos verder huren.",
    cta: "Bereken uw bouwdroging",
    garantie: "Bekijk de drooggarantie",
    alt: "Het Vernast-team met het volledige toestellengamma"
  },
  fr: {
    notes: [
      { title: "Calculez et réservez en ligne", sub: "Paiement et planification inclus" },
      { title: "Un prix tout compris", sub: "Aucun frais caché" },
      { title: "Garantie de séchage 100 %*", sub: "Ou prolongation sans frais" }
    ],
    reviews: "avis Google",
    h1: "Location de déshumidificateur de chantier sur mesure. Garantie de séchage incluse.",
    intro: "Pas un simple déshumidificateur de chantier, mais un pack de séchage complet adapté à votre habitation. Réservé en ligne, dimensionné pour consommer peu, installé par des professionnels et un prix fixe tout compris. Pas sec dans la période calculée ? Vous continuez à louer sans frais.",
    cta: "Calculez votre séchage",
    garantie: "Voir la garantie de séchage",
    alt: "L'équipe Vernast avec toute la gamme d'appareils"
  },
  en: {
    notes: [
      { title: "Calculate & book online", sub: "Payment and scheduling included" },
      { title: "One all-in price", sub: "No hidden costs" },
      { title: "100% drying guarantee*", sub: "Or extended at no cost" }
    ],
    reviews: "Google reviews",
    h1: "Construction dehumidifier hire, tailored to you. Drying guarantee included.",
    intro: "Not a standard construction dehumidifier, but a complete drying package tailored to your home. Booked online, sized to save energy, professionally installed and one fixed all-in price. Not dry within the calculated period? Keep hiring at no extra cost.",
    cta: "Calculate your building drying",
    garantie: "View the drying guarantee",
    alt: "The Vernast team with the full range of units"
  }
};
const HERO_BG = "/vernast/bg-red-wide-2.webp";
const V3Hero = () => {
  const t = useCopy(COPY$f);
  const lp = useLokaalPad();
  return /* @__PURE__ */ jsxs("section", { className: "hero", children: [
    /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("link", { rel: "preload", href: HERO_BG, as: "image", type: "image/webp", fetchPriority: "high" }) }),
    /* @__PURE__ */ jsx("div", { className: "wrap", children: /* @__PURE__ */ jsxs("div", { className: "hero-inner", children: [
      REVIEWS,
      /* @__PURE__ */ jsx("h1", { children: t.h1 }),
      /* @__PURE__ */ jsx("p", { children: t.intro }),
      /* @__PURE__ */ jsxs("div", { className: "h-ctas", children: [
        /* @__PURE__ */ jsxs(Link, { className: "btn btn-white", to: lp("/verhuur/calculator"), children: [
          t.cta,
          /* @__PURE__ */ jsx(ArrowRightIcon, {})
        ] }),
        /* @__PURE__ */ jsx(Link, { className: "btn btn-dark", to: lp("/drooggarantie"), children: t.garantie })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(
      "img",
      {
        className: "hero-art",
        src: "/vernast/team-hero-wide-v2.webp",
        srcSet: "/vernast/team-hero-wide-v2-1100.webp 1100w, /vernast/team-hero-wide-v2.webp 2000w",
        sizes: "(max-width: 767px) 139vw, 100vw",
        alt: t.alt,
        width: 2e3,
        height: 617,
        fetchPriority: "high",
        decoding: "async"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "h-note", children: t.notes.map((note, i) => /* @__PURE__ */ jsxs("span", { children: [
      /* @__PURE__ */ jsx("i", { className: "hni", children: /* @__PURE__ */ jsx(
        "svg",
        {
          width: "17",
          height: "17",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: ICONS$3[i].icon
        }
      ) }),
      /* @__PURE__ */ jsxs("span", { className: "hnt", children: [
        /* @__PURE__ */ jsx("b", { children: note.title }),
        /* @__PURE__ */ jsx("small", { children: note.sub })
      ] })
    ] }, note.title)) })
  ] });
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/home-v3/V3StatRule.tsx");
const COPY$e = {
  nl: [
    { count: "450", suffix: "+", label: "Woningen en werven ondersteund" },
    { count: "24", suffix: "u", label: "Levering én installatie aan huis" },
    { count: "100", suffix: "%", label: "Droog, of u huurt kosteloos verder" },
    { count: "0", suffix: "€", label: "Voorschot · geen verborgen kosten" }
  ],
  fr: [
    { count: "450", suffix: "+", label: "Habitations et chantiers accompagnés" },
    { count: "24", suffix: "h", label: "Livraison et installation à domicile" },
    { count: "100", suffix: "%", label: "Sec, ou vous continuez à louer sans frais" },
    { count: "0", suffix: "€", label: "Acompte · aucun frais caché" }
  ],
  en: [
    { count: "450", suffix: "+", label: "Homes and sites supported" },
    { count: "24", suffix: "h", label: "Delivery and installation at your door" },
    { count: "100", suffix: "%", label: "Dry, or keep hiring at no extra cost" },
    { count: "0", suffix: "€", label: "Deposit · no hidden costs" }
  ]
};
const DURATION = 1300;
const V3StatRule = () => {
  const bandRef = useRef(null);
  const stats = useCopy(COPY$e);
  useEffect(() => {
    const blocks = Array.from(bandRef.current?.querySelectorAll(".st") ?? []);
    if (!blocks.length) return;
    if (!("IntersectionObserver" in window)) {
      blocks.forEach((el) => el.classList.add("vis"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          el.classList.add("vis");
          const num = el.querySelector("[data-count]");
          if (num && !num.dataset.done) {
            num.dataset.done = "1";
            const raw = num.dataset.count ?? "0";
            const decimal = raw.includes(",");
            const target = parseFloat(raw.replace(",", "."));
            const start = performance.now();
            const tick = (now) => {
              const linear = Math.min(1, (now - start) / DURATION);
              const eased = 1 - Math.pow(1 - linear, 3);
              const value = target * eased;
              num.textContent = decimal ? value.toFixed(1).replace(".", ",") : String(Math.round(value));
              if (linear < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
          io.unobserve(el);
        });
      },
      { threshold: 0.4 }
    );
    blocks.forEach((el, i) => {
      el.style.transitionDelay = `${i * 90}ms`;
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "statrule", children: /* @__PURE__ */ jsx("div", { className: "wrap", children: /* @__PURE__ */ jsx("div", { className: "band", ref: bandRef, children: stats.map((stat) => /* @__PURE__ */ jsxs("div", { className: "st", children: [
    /* @__PURE__ */ jsxs("div", { className: "n", children: [
      /* @__PURE__ */ jsx("span", { "data-count": stat.count, children: "0" }),
      /* @__PURE__ */ jsx("em", { children: stat.suffix })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "l", children: stat.label })
  ] }, stat.label)) }) }) });
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/home-v3/V3Products.tsx");
function tariff(key, taal) {
  const product = key ? PRODUCTS[key] : void 0;
  if (!product) return null;
  const vertaald = key ? PORTAAL[taal]?.[key] : void 0;
  return {
    name: product.short,
    tag: vertaald?.tag ?? product.badge,
    blurb: vertaald?.blurb ?? product.sum,
    day: product.day,
    // Drie in plaats van twee: de kachels dragen hun maximumtemperatuur als
    // derde spec, en dat is naast het vermogen het cijfer waarop iemand kiest.
    // Bij de drogers levert het de stroomopname op, bij de ventilatoren het
    // verbruik -- allebei zinvol, en de chips lopen netjes door naar een
    // tweede regel.
    chips: taal === "fr" ? chipsFr(product) : taal === "en" ? chipsEn(product) : toestelChips(product)
  };
}
const PORTAAL_FR = {
  ttk170: {
    tag: "Petites pièces",
    blurb: "Déshumidificateur à condensation compact et mobile. Le bon choix pour une pièce, un appartement ou une petite rénovation."
  },
  ttk350: {
    tag: "Le plus loué",
    blurb: "Notre appareil le plus loué et la référence pour la nouvelle construction. Sèche la chape et le plafonnage de manière fiable en quelques jours."
  },
  ttk650: {
    tag: "Grands volumes",
    blurb: "L'appareil le plus puissant de la gamme. Pour les grands chantiers, les caves et les dégâts des eaux où chaque jour compte."
  },
  revolution: {
    tag: "Séchage localisé",
    blurb: "Sèche de manière ciblée via des gaines : sous les sols, dans les murs et aux endroits difficiles d'accès. Fonctionne aussi à basse température."
  },
  ttv4500: {
    tag: "Accélère chaque séchage",
    blurb: "Ventilateur de chantier puissant avec un débit d'air de 4 500 m³/h. Veille à ce que l'air sec passe réellement le long des murs et des sols."
  },
  radiaal2250: {
    tag: "Séchage ciblé",
    blurb: "Souffle l'air de manière ciblée sur les sols et la chape, même sous les meubles et dans les coins. Le partenaire attitré d'un déshumidificateur pour le séchage des sols."
  },
  teddh20: {
    tag: "Pièces plus petites",
    blurb: "Chauffage de chantier électrique de 20 kW avec thermostat. Amène les petites pièces froides à température pour que le séchage continue."
  },
  teddh30: {
    tag: "Pour les pièces froides",
    blurb: "Chauffage de chantier électrique de 30 kW avec thermostat intégré. Amène les pièces froides à température pour que le séchage soit efficace."
  }
};
const PORTAAL_EN = {
  ttk170: {
    tag: "Small rooms",
    blurb: "Compact condensation dehumidifier on wheels. The right choice for one room, a flat or a smaller renovation."
  },
  ttk350: {
    tag: "Most hired",
    blurb: "Our most hired unit and the standard for new builds. Dries screed and plaster reliably within a few days."
  },
  ttk650: {
    tag: "Large volumes",
    blurb: "The heaviest unit in the range. For large sites, cellars and water damage where every day counts."
  },
  revolution: {
    tag: "Local drying",
    blurb: "Dries in a targeted way through hoses: under floors, inside walls and in hard-to-reach places. Also works at low temperatures."
  },
  ttv4500: {
    tag: "Speeds up any drying",
    blurb: "Powerful site fan moving 4,500 m³/h of air. Makes sure the dry air actually sweeps along walls and floors."
  },
  radiaal2250: {
    tag: "Targeted drying",
    blurb: "Blows air directly across floors and screed, including under cupboards and into corners. The regular partner of a dehumidifier when drying floors."
  },
  teddh20: {
    tag: "Smaller rooms",
    blurb: "20 kW electric site heater with thermostat. Brings smaller cold rooms up to temperature so the drying keeps going."
  },
  teddh30: {
    tag: "For cold rooms",
    blurb: "30 kW electric site heater with built-in thermostat. Brings cold rooms up to temperature so drying becomes effective."
  }
};
const PORTAAL = {
  fr: PORTAAL_FR,
  en: PORTAAL_EN
};
const VELD_FR = {
  Standen: "vitesses",
  Thermostaat: "thermostat",
  "Koude ruimtes": "pièces froides"
};
const WAARDE_FR = {
  Adsorptie: "Adsorption",
  "via slangen": "via des gaines"
};
const EENHEID_FR = { "L/dag": "l/jour", "m³/u": "m³/h" };
function chipsFr(product, aantal = 3) {
  return product.key.slice(0, aantal).map(([name, value, unit]) => {
    if (name === "Vochtafvoer") return `${value} litres par jour`;
    if (name === "Bereik") return `jusqu'à ${value} m³`;
    if (unit) return `${value} ${EENHEID_FR[unit] ?? unit}`;
    if (/^\d/.test(value)) return `${value} ${VELD_FR[name] ?? name.toLowerCase()}`;
    return value === "ja" ? VELD_FR[name] ?? name.toLowerCase() : WAARDE_FR[value] ?? value;
  });
}
const VELD_EN = {
  Standen: "speeds",
  Thermostaat: "thermostat",
  "Koude ruimtes": "cold rooms"
};
const WAARDE_EN = {
  Adsorptie: "Desiccant",
  "via slangen": "via hoses"
};
const EENHEID_EN = { "L/dag": "L/day", "m³/u": "m³/h" };
function chipsEn(product, aantal = 3) {
  return product.key.slice(0, aantal).map(([name, value, unit]) => {
    if (name === "Vochtafvoer") return `${value} litres per day`;
    if (name === "Bereik") return `up to ${value} m³`;
    if (unit) return `${value} ${EENHEID_EN[unit] ?? unit}`;
    if (/^\d/.test(value)) return `${value} ${VELD_EN[name] ?? name.toLowerCase()}`;
    return value === "ja" ? VELD_EN[name] ?? name.toLowerCase() : WAARDE_EN[value] ?? value;
  });
}
const isVochtafvoer = (chip) => chip.endsWith("liter per dag") || chip.endsWith("litres par jour") || chip.endsWith("litres per day");
const MAIN_NL = [
  {
    href: toestelPad("ttk170"),
    key: "ttk170",
    tag: "Kleine ruimtes",
    image: "/vernast/eco-boost.webp",
    alt: "Vernast Boost bouwdroger, condensontvochtiger van 50 liter per dag voor ruimtes tot 250 m³",
    name: "Boost",
    blurb: "Compact en verrijdbaar, past door elke deuropening. Ideaal voor één kamer of een appartement.",
    eco: true,
    chips: ["50 liter per dag", "tot 250 m³"],
    day: 9
  },
  {
    href: toestelPad("ttk350"),
    key: "ttk350",
    tag: "Meest gehuurd",
    hot: true,
    image: "/vernast/eco-performance.webp",
    alt: "Vernast Performance bouwdroger, condensontvochtiger van 70 liter per dag voor ruimtes tot 400 m³",
    name: "Performance",
    blurb: "Onze standaard voor nieuwbouw. Droogt chape en pleisterwerk betrouwbaar en energiezuinig.",
    eco: true,
    chips: ["70 liter per dag", "tot 400 m³"],
    day: 12
  },
  {
    href: toestelPad("ttk650"),
    key: "ttk650",
    tag: "Grote volumes",
    image: "/vernast/eco-ultimate.webp",
    alt: "Vernast Ultimate bouwdroger, condensontvochtiger van 110 liter per dag voor ruimtes tot 600 m³",
    name: "Ultimate",
    blurb: "Het zwaarste toestel in het gamma. Voor grote werven, kelders en zware waterschade.",
    eco: true,
    chips: ["110 liter per dag", "tot 600 m³"],
    day: 16
  },
  /*
    De Revolution staat nog niet in ons depot, dus zolang het portaal hem
    niet te huur zet, blijft deze kaart naar de webshop wijzen. Zodra de
    schakelaar daar aan gaat, bestaat `PRODUCTS.revolution` en verwijst de kaart
    naar onze eigen pagina — met de prijs die in het portaal staat.
  */
  PRODUCTS.revolution ? {
    href: toestelPad("revolution"),
    key: "revolution",
    tag: "Plaatselijk drogen",
    image: "/vernast/eco-revolution.webp",
    alt: "Vernast Revolution, rode adsorptiedroger met slangaansluitingen voor plaatselijk drogen",
    name: "Revolution",
    blurb: "Droogt gericht via slangen: onder vloeren, in wanden en op moeilijk bereikbare plekken.",
    chips: ["Adsorptie", "gericht drogen"],
    day: 25
  } : {
    href: "https://www.bouwdrogerservice.be/collections/bouwdrogers/products/eco-revolution",
    external: true,
    tag: "Plaatselijk drogen",
    image: "/vernast/eco-revolution.webp",
    alt: "Vernast Revolution, rode adsorptiedroger met slangaansluitingen voor plaatselijk drogen",
    name: "Revolution",
    blurb: "Droogt gericht via slangen: onder vloeren, in wanden en op moeilijk bereikbare plekken.",
    chips: ["Adsorptie", "gericht drogen"],
    day: 25
  }
];
const SUPPORT_NL = [
  {
    href: toestelPad("ttv4500"),
    key: "ttv4500",
    tag: "Luchtcirculatie",
    image: "/vernast/vent-axiaal.webp",
    alt: "Vernast Highflow, bouwventilator met 4.500 m³/u luchtverzet",
    name: "Highflow",
    blurb: "Versnelt elke droging door de lucht continu in beweging te houden.",
    chips: ["4 500 m³/u", "3 standen"],
    day: 9
  },
  {
    href: toestelPad("radiaal2250"),
    key: "radiaal2250",
    tag: "Gericht drogen",
    image: "/vernast/vent-radiaal.webp",
    alt: "Vernast Turboflow van 2.250 m³/u voor vloer- en muurdroging",
    name: "Turbo",
    blurb: "Blaast gericht over vloeren en chape, ideaal in combinatie met een droger.",
    chips: ["2 250 m³/u", "vloeren & chape"],
    day: 8
  },
  {
    href: toestelPad("teddh20"),
    key: "teddh20",
    tag: "Verwarming",
    image: "/vernast/kachel-20.webp",
    alt: "Vernast Heatboost 20 elektrische bouwkachel, 20 kW met thermostaat voor kleinere ruimtes",
    name: "Heatboost 20",
    blurb: "Compacte verwarming voor kleinere ruimtes tijdens de droogperiode.",
    chips: ["20 kW", "400 V", "60 °C"],
    day: 9
  },
  {
    href: toestelPad("teddh30"),
    key: "teddh30",
    tag: "Verwarming",
    image: "/vernast/kachel-30.webp",
    alt: "Vernast Heatpower 30 elektrische bouwkachel, 30 kW met ingebouwde thermostaat",
    name: "Heatpower 30",
    blurb: "Houdt de ruimte op temperatuur zodat de droging effectief blijft.",
    chips: ["30 kW", "400 V", "75 °C"],
    day: 12
  }
];
const FR_TEKST = {
  Boost: {
    tag: "Petites pièces",
    alt: "Déshumidificateur de chantier Vernast Boost, à condensation, 50 litres par jour pour des pièces jusqu'à 250 m³",
    blurb: "Compact et mobile, passe par chaque porte. Idéal pour une pièce ou un appartement.",
    chips: ["50 litres par jour", "jusqu'à 250 m³"]
  },
  Performance: {
    tag: "Le plus loué",
    alt: "Déshumidificateur de chantier Vernast Performance, à condensation, 70 litres par jour pour des pièces jusqu'à 400 m³",
    blurb: "Notre référence pour la nouvelle construction. Sèche la chape et le plafonnage de manière fiable et économe.",
    chips: ["70 litres par jour", "jusqu'à 400 m³"]
  },
  Ultimate: {
    tag: "Grands volumes",
    alt: "Déshumidificateur de chantier Vernast Ultimate, à condensation, 110 litres par jour pour des pièces jusqu'à 600 m³",
    blurb: "L'appareil le plus puissant de la gamme. Pour les grands chantiers, les caves et les gros dégâts des eaux.",
    chips: ["110 litres par jour", "jusqu'à 600 m³"]
  },
  Revolution: {
    tag: "Séchage localisé",
    alt: "Vernast Revolution, déshumidificateur à adsorption rouge avec raccords de gaines pour un séchage localisé",
    blurb: "Sèche de manière ciblée via des gaines : sous les sols, dans les murs et aux endroits difficiles d'accès.",
    chips: ["Adsorption", "séchage ciblé"]
  },
  Highflow: {
    tag: "Circulation d'air",
    alt: "Vernast Highflow, ventilateur de chantier avec un débit d'air de 4 500 m³/h",
    blurb: "Accélère chaque séchage en gardant l'air en mouvement en continu.",
    chips: ["4 500 m³/h", "3 vitesses"]
  },
  Turbo: {
    tag: "Séchage ciblé",
    alt: "Vernast Turboflow de 2 250 m³/h pour le séchage des sols et des murs",
    blurb: "Souffle de manière ciblée sur les sols et la chape, idéal en combinaison avec un déshumidificateur.",
    chips: ["2 250 m³/h", "sols et chape"]
  },
  "Heatboost 20": {
    tag: "Chauffage",
    alt: "Chauffage de chantier électrique Vernast Heatboost 20, 20 kW avec thermostat pour les petites pièces",
    blurb: "Chauffage compact pour les petites pièces pendant la période de séchage.",
    chips: ["20 kW", "400 V", "60 °C"]
  },
  "Heatpower 30": {
    tag: "Chauffage",
    alt: "Chauffage de chantier électrique Vernast Heatpower 30, 30 kW avec thermostat intégré",
    blurb: "Maintient la pièce à température pour que le séchage reste efficace.",
    chips: ["30 kW", "400 V", "75 °C"]
  }
};
const naarFr = (card) => ({ ...card, ...FR_TEKST[card.name] });
const EN_TEKST = {
  Boost: {
    tag: "Small rooms",
    alt: "Vernast Boost construction dehumidifier, condensation unit extracting 50 litres per day for rooms up to 250 m³",
    blurb: "Compact and on wheels, fits through any doorway. Ideal for one room or a flat.",
    chips: ["50 litres per day", "up to 250 m³"]
  },
  Performance: {
    tag: "Most hired",
    alt: "Vernast Performance construction dehumidifier, condensation unit extracting 70 litres per day for rooms up to 400 m³",
    blurb: "Our standard for new builds. Dries screed and plaster reliably and efficiently.",
    chips: ["70 litres per day", "up to 400 m³"]
  },
  Ultimate: {
    tag: "Large volumes",
    alt: "Vernast Ultimate construction dehumidifier, condensation unit extracting 110 litres per day for rooms up to 600 m³",
    blurb: "The heaviest unit in the range. For large sites, cellars and serious water damage.",
    chips: ["110 litres per day", "up to 600 m³"]
  },
  Revolution: {
    tag: "Local drying",
    alt: "Vernast Revolution, red desiccant dehumidifier with hose connections for local drying",
    blurb: "Dries in a targeted way through hoses: under floors, inside walls and in hard-to-reach places.",
    chips: ["Desiccant", "targeted drying"]
  },
  Highflow: {
    tag: "Air circulation",
    alt: "Vernast Highflow, site fan moving 4,500 m³/h of air",
    blurb: "Speeds up any drying by keeping the air moving continuously.",
    chips: ["4,500 m³/h", "3 speeds"]
  },
  Turbo: {
    tag: "Targeted drying",
    alt: "Vernast Turboflow, 2,250 m³/h, for drying floors and walls",
    blurb: "Blows directly across floors and screed, ideal in combination with a dryer.",
    chips: ["2,250 m³/h", "floors & screed"]
  },
  "Heatboost 20": {
    tag: "Heating",
    alt: "Vernast Heatboost 20 electric site heater, 20 kW with thermostat for smaller rooms",
    blurb: "Compact heating for smaller rooms during the drying period.",
    chips: ["20 kW", "400 V", "60 °C"]
  },
  "Heatpower 30": {
    tag: "Heating",
    alt: "Vernast Heatpower 30 electric site heater, 30 kW with built-in thermostat",
    blurb: "Keeps the room up to temperature so the drying stays effective.",
    chips: ["30 kW", "400 V", "75 °C"]
  }
};
const naarEn = (card) => ({ ...card, ...EN_TEKST[card.name] });
const COPY$d = {
  nl: {
    main: MAIN_NL,
    support: SUPPORT_NL,
    kick: "Het gamma",
    h2: "Professionele toestellen voor elke droogsituatie.",
    lede: (bedrag, label) => `Van één kamer tot grotere werven, van nieuwbouw tot waterschade: u kiest geen toestel, maar een oplossing die past bij uw ruimte en droogdoel. Prijzen vanaf ${bedrag} per dag, ${label}.`,
    pnote: (link) => /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Losse toestellen huurt u af te halen in Aartselaar" }),
      ", tegen lagere afhaalprijzen, via de ",
      link("aparte afhaal-checkout"),
      ". Leveren en installeren doen wij uitsluitend per pakket, alleen zo kunnen wij onze droog-garantie waarmaken."
    ] }),
    switchLabel: "Prijzen tonen met of zonder btw",
    excl: "Excl. btw",
    incl: "Incl. btw",
    huren: "Product huren",
    vanaf: "vanaf",
    perDag: "/dag",
    pkbAlt: "Zorgeloos drogen met Vernast",
    pkbH3: "Liever niet zelf puzzelen? Bouw uw pakket op maat.",
    pkbP: "Onze Calculator stelt het exacte pakket samen voor uw woning, drogers, ventilatoren en verwarming in de juiste verhouding. Geleverd, geplaatst en afgesteld. En met één belofte:",
    pkbBelofte: "100% droog binnen de berekende periode, of u huurt kosteloos verder.*",
    pkbBtn: "Bouw uw pakket op maat",
    pkbNote: "* Garantie geldt wanneer de externe omstandigheden (verwarming, ventilatie, stroom) aan onze richtlijnen voldoen."
  },
  fr: {
    main: MAIN_NL.map(naarFr),
    support: SUPPORT_NL.map(naarFr),
    kick: "La gamme",
    h2: "Des appareils professionnels pour chaque situation de séchage.",
    lede: (bedrag, label) => `D'une seule pièce aux grands chantiers, de la nouvelle construction aux dégâts des eaux : vous ne choisissez pas un appareil, mais une solution adaptée à votre espace et à votre objectif de séchage. Prix à partir de ${bedrag} par jour, ${label}.`,
    pnote: (link) => /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Les appareils seuls se louent à enlever à Aartselaar" }),
      ", à des prix d'enlèvement plus bas, via le ",
      link("parcours de commande séparé pour l'enlèvement"),
      ". Nous livrons et installons uniquement par pack",
      " ",
      ": c'est la seule façon de tenir notre garantie de séchage."
    ] }),
    switchLabel: "Afficher les prix avec ou sans TVA",
    excl: "HTVA",
    incl: "TVAC",
    huren: "Louer cet appareil",
    vanaf: "dès",
    perDag: "/jour",
    pkbAlt: "Sécher sans souci avec Vernast",
    pkbH3: "Pas envie de tout assembler vous-même ? Composez votre pack sur mesure.",
    pkbP: "Notre calculateur compose le pack exact pour votre habitation : déshumidificateurs, ventilateurs et chauffage dans les bonnes proportions. Livré, installé et réglé. Avec une seule promesse :",
    pkbBelofte: "sec à 100 % dans la période calculée, ou vous continuez à louer sans frais.*",
    pkbBtn: "Composez votre pack sur mesure",
    pkbNote: "* La garantie s'applique lorsque les conditions extérieures (chauffage, ventilation, électricité) respectent nos directives."
  },
  en: {
    main: MAIN_NL.map(naarEn),
    support: SUPPORT_NL.map(naarEn),
    kick: "The range",
    h2: "Professional units for every drying situation.",
    lede: (bedrag, label) => `From a single room to larger sites, from new builds to water damage: you are not choosing a unit, but a solution that fits your space and drying goal. Prices from ${bedrag} per day, ${label}.`,
    pnote: (link) => /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Individual units are hired for collection in Aartselaar" }),
      ", at lower collection prices, via the ",
      link("separate collection checkout"),
      ". We only deliver and install per package, as that is the only way we can honour our drying guarantee."
    ] }),
    switchLabel: "Show prices with or without VAT",
    excl: "Excl. VAT",
    incl: "Incl. VAT",
    huren: "Hire this unit",
    vanaf: "from",
    perDag: "/day",
    pkbAlt: "Worry-free drying with Vernast",
    pkbH3: "Rather not piece it together yourself? Build your package to measure.",
    pkbP: "Our Calculator puts together the exact package for your home: dryers, fans and heating in the right proportions. Delivered, set up and adjusted. And with one promise:",
    pkbBelofte: "100% dry within the calculated period, or keep hiring at no extra cost.*",
    pkbBtn: "Build your package to measure",
    pkbNote: "* The guarantee applies when the external conditions (heating, ventilation, power) meet our guidelines."
  }
};
const CardBody = ({ card, toon }) => {
  const t = useCopy(COPY$d);
  const live = tariff(card.key, useTaal());
  const prijs = toon(live?.day ?? card.day);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "pm", children: [
      /* @__PURE__ */ jsx("span", { className: "pt", children: live?.tag ?? card.tag }),
      /* @__PURE__ */ jsx("img", { src: card.image, alt: card.alt, width: 600, height: 600, loading: "lazy" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "pb", children: [
      /* @__PURE__ */ jsx("h3", { children: live?.name ?? card.name }),
      /* @__PURE__ */ jsx("p", { children: live?.blurb ?? card.blurb }),
      /* @__PURE__ */ jsxs("div", { className: "chips", children: [
        card.eco && /* @__PURE__ */ jsxs("span", { className: "chip eco", children: [
          /* @__PURE__ */ jsx("img", { src: "/vernast/icoon-eco.webp", alt: "", width: 96, height: 96, loading: "lazy" }),
          " Eco"
        ] }),
        (live?.chips ?? card.chips).map((chip) => /* @__PURE__ */ jsxs("span", { className: isVochtafvoer(chip) ? "chip water" : "chip", children: [
          isVochtafvoer(chip) && /* @__PURE__ */ jsx("img", { src: "/vernast/icoon-druppel.webp", alt: "", width: 96, height: 96, loading: "lazy" }),
          chip
        ] }, chip))
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pf", children: [
        /* @__PURE__ */ jsxs("span", { className: "bekijk", children: [
          t.huren,
          " ",
          /* @__PURE__ */ jsx(ArrowRightIcon, { size: 13, strokeWidth: 2.6 })
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "pr", children: [
          t.vanaf,
          /* @__PURE__ */ jsx("b", { children: prijs.tekst }),
          /* @__PURE__ */ jsxs("small", { children: [
            t.perDag,
            " ",
            prijs.label
          ] })
        ] })
      ] })
    ] })
  ] });
};
const Card = ({ card, toon, lp }) => card.external ? /* @__PURE__ */ jsx("a", { className: `pc${card.hot ? " hot" : ""}`, href: card.href, target: "_blank", rel: "noopener", children: /* @__PURE__ */ jsx(CardBody, { card, toon }) }) : /* @__PURE__ */ jsx(Link, { className: `pc${card.hot ? " hot" : ""}`, to: lp(card.href), children: /* @__PURE__ */ jsx(CardBody, { card, toon }) });
const V3Products = () => {
  const t = useCopy(COPY$d);
  const lp = useLokaalPad();
  const taal = useTaal();
  const toon = useToonBedrag();
  const klant = useKlant();
  const voorkeur = useVoorkeur();
  const kiesKlant = (k) => bewaarVoorkeur({ taal: voorkeur?.taal ?? taal, land: voorkeur?.land ?? "BE", klant: k });
  const vanaf = toon(DAY_PRICE_MIN);
  return /* @__PURE__ */ jsx("section", { className: "prods", id: "toestellen", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
    /* @__PURE__ */ jsxs("div", { className: "phead-row", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
        /* @__PURE__ */ jsx("span", { className: "kick", children: t.kick }),
        /* @__PURE__ */ jsx("h2", { className: "sec", children: t.h2 }),
        /* @__PURE__ */ jsx("p", { className: "lede", children: t.lede(vanaf.tekst, vanaf.label) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "phead-right", children: [
        /* @__PURE__ */ jsxs("div", { className: "pnote", children: [
          /* @__PURE__ */ jsx(InfoIcon, {}),
          /* @__PURE__ */ jsx("span", { children: t.pnote((tekst) => /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/afhalen"), style: { color: "var(--red)", fontWeight: 700 }, children: tekst })) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "btw-switch", role: "group", "aria-label": t.switchLabel, children: [
          /* @__PURE__ */ jsx("button", { type: "button", "aria-pressed": klant === "bedrijf", onClick: () => kiesKlant("bedrijf"), children: t.excl }),
          /* @__PURE__ */ jsx("button", { type: "button", "aria-pressed": klant === "particulier", onClick: () => kiesKlant("particulier"), children: t.incl })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "pgrid main", children: t.main.map((card) => /* @__PURE__ */ jsx(Card, { card, toon, lp }, card.name)) }),
    /* @__PURE__ */ jsx("div", { className: "pgrid two", children: t.support.map((card) => /* @__PURE__ */ jsx(Card, { card, toon, lp }, card.name)) }),
    /* @__PURE__ */ jsxs("div", { className: "pakketbar", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "pkb-man",
          src: "/vernast/man-zen-crop.webp",
          alt: t.pkbAlt,
          width: 1225,
          height: 1440,
          loading: "lazy"
        }
      ),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { children: t.pkbH3 }),
        /* @__PURE__ */ jsxs("p", { children: [
          t.pkbP,
          " ",
          /* @__PURE__ */ jsx("b", { children: t.pkbBelofte })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pkb-b", children: [
        /* @__PURE__ */ jsxs(Link, { className: "btn btn-white", to: lp("/verhuur/calculator"), children: [
          t.pkbBtn,
          /* @__PURE__ */ jsx(ArrowRightIcon, {})
        ] }),
        /* @__PURE__ */ jsx("span", { className: "pkb-note", children: t.pkbNote })
      ] })
    ] })
  ] }) });
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/home-v3/V3HowItWorks.tsx");
const AUTOPLAY_MS$1 = 5200;
const mockCard = (children) => /* @__PURE__ */ jsx(
  "div",
  {
    style: {
      background: "#fff",
      borderRadius: 12,
      padding: 22,
      width: "100%",
      maxWidth: 340,
      boxShadow: "0 14px 30px -18px rgba(0,0,0,.25)"
    },
    children
  }
);
const Step = ({ tone, title, sub }) => /* @__PURE__ */ jsxs("div", { className: `mstep ${tone}`, children: [
  /* @__PURE__ */ jsx("i", { children: "✓" }),
  /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("b", { children: title }),
    /* @__PURE__ */ jsx("small", { children: sub })
  ] })
] });
const COPY$c = {
  nl: {
    kick: "Zo werkt het",
    h2: "Van berekening tot droge woning, in vijf stappen.",
    lede: "Volledig digitaal: bereken, boek, betaal en plan de installatie online. Klik door de stappen of kijk gewoon mee.",
    steps: [
      {
        step: "Stap 01",
        tab: "Bereken uw pakket",
        heading: "U berekent, wij dimensioneren.",
        body: "Geef uw oppervlakte, plafondhoogte en situatie in. De Calculator berekent uw volume en stelt het exacte pakket samen: toestellen, droogtijd en één all-in prijs.",
        linkLabel: "Start de Calculator →",
        linkTo: "/verhuur/calculator"
      },
      {
        step: "Stap 02",
        tab: "Boek & betaal online",
        heading: "Boeken, betalen en inplannen in één flow.",
        body: "U kiest uw leverdatum en installatiemoment, betaalt veilig online en ontvangt meteen uw bevestiging. Geen offertes, geen telefoontjes nodig.",
        linkLabel: "Bekijk hoe het boeken werkt →",
        linkTo: "/verhuur/calculator"
      },
      {
        step: "Stap 03",
        tab: "Levering & installatie",
        heading: "Wij leveren, plaatsen en stellen af.",
        body: "Geleverd op uw gekozen datum. Onze technicus positioneert de toestellen, sluit de condensafvoer aan en stelt de streefvochtigheid in. U hoeft niets te tillen.",
        linkLabel: "Alles over levering →",
        linkTo: "/verhuur/calculator"
      },
      {
        step: "Stap 04",
        tab: "Droogfase",
        heading: "De toestellen doen het werk.",
        body: "Het vocht wordt continu uit de lucht gehaald en rechtstreeks weggepompt. U volgt de droging op, en binnenkort ook digitaal via monitoring op alle toestellen.",
        linkLabel: "Hoe de techniek werkt →",
        linkTo: "#natuurlijk-actief",
        anchor: true
      },
      {
        step: "Stap 05",
        tab: "Ophaling of verlenging",
        heading: "Droog gemeten? Wij halen alles op.",
        body: "De eindmeting bevestigt dat uw woning 100% droog is. Wij plannen de ophaling en sluiten de huur af. Niet droog? Dan verlengt u maximaal kosteloos.",
        linkLabel: "Gratis Calculator →",
        linkTo: "/verhuur/calculator"
      }
    ],
    mock: {
      plan: "Uw droogplan",
      opp: "Woonoppervlakte",
      pakket: "Alles-in pakket",
      bedrag: "€ 352",
      wkn: "/ 2 wkn",
      knop: "Stel mijn pakket samen",
      stap2: [
        ["Pakket gekozen", "6 toestellen · 12 dagen"],
        ["Online betaald", "Bancontact · € 352"],
        ["Installatie ingepland", "Morgen, 09:00–11:00"]
      ],
      stap3: [
        ["Geleverd op uw datum", "Track & trace tot aan uw deur"],
        ["Geplaatst & afgesteld", "Incl. condensafvoer, geen kuip"],
        ["Uitleg ter plaatse", "Kort en duidelijk"]
      ],
      vocht: "Luchtvochtigheid",
      schema: "Op schema",
      nog: "Nog ± 4 dagen tot droog",
      /* "Geen voorschot betaald" beloofde iets wat de boekingspagina niet
         waarmaakt: daar kiest de klant tussen alles vooraf en een vaste
         orderbevestiging met saldo bij levering. */
      stap5: [
        ["Eindmeting: droog", "Restvocht ≤ 2%"],
        ["Ophaling ingepland", "Vrijdag, 13:00–15:00"],
        ["Factuur na volledige betaling", "Geen verrassingen achteraf"]
      ]
    }
  },
  fr: {
    kick: "Comment ça marche",
    h2: "Du calcul à une habitation sèche, en cinq étapes.",
    lede: "Entièrement numérique : calculez, réservez, payez et planifiez l'installation en ligne. Parcourez les étapes ou regardez simplement.",
    steps: [
      {
        step: "Étape 01",
        tab: "Calculez votre pack",
        heading: "Vous calculez, nous dimensionnons.",
        body: "Indiquez votre surface, la hauteur sous plafond et votre situation. Le calculateur détermine votre volume et compose le pack exact : appareils, durée de séchage et un prix tout compris.",
        linkLabel: "Lancer le calculateur →",
        linkTo: "/verhuur/calculator"
      },
      {
        step: "Étape 02",
        tab: "Réservez et payez en ligne",
        heading: "Réserver, payer et planifier en un seul parcours.",
        body: "Vous choisissez votre date de livraison et le moment de l'installation, payez en ligne en toute sécurité et recevez immédiatement votre confirmation. Pas de devis, pas d'appels nécessaires.",
        linkLabel: "Voir comment se passe la réservation →",
        linkTo: "/verhuur/calculator"
      },
      {
        step: "Étape 03",
        tab: "Livraison et installation",
        heading: "Nous livrons, installons et réglons.",
        body: "Livré à la date de votre choix. Notre technicien positionne les appareils, raccorde l'évacuation des condensats et règle l'humidité cible. Vous n'avez rien à porter.",
        linkLabel: "Tout sur la livraison →",
        linkTo: "/verhuur/calculator"
      },
      {
        step: "Étape 04",
        tab: "Phase de séchage",
        heading: "Les appareils font le travail.",
        body: "L'humidité est extraite de l'air en continu et évacuée directement par pompe. Vous suivez le séchage, et bientôt aussi en ligne grâce au monitoring sur tous les appareils.",
        linkLabel: "Comment fonctionne la technique →",
        linkTo: "#natuurlijk-actief",
        anchor: true
      },
      {
        step: "Étape 05",
        tab: "Enlèvement ou prolongation",
        heading: "Mesuré sec ? Nous reprenons tout.",
        body: "La mesure finale confirme que votre habitation est sèche à 100 %. Nous planifions l'enlèvement et clôturons la location. Pas sec ? Vous prolongez alors au maximum sans frais.",
        linkLabel: "Calculateur gratuit →",
        linkTo: "/verhuur/calculator"
      }
    ],
    mock: {
      plan: "Votre plan de séchage",
      opp: "Surface habitable",
      pakket: "Pack tout compris",
      bedrag: "352 €",
      wkn: "/ 2 sem.",
      knop: "Composer mon pack",
      stap2: [
        ["Pack choisi", "6 appareils · 12 jours"],
        ["Payé en ligne", "Bancontact · 352 €"],
        ["Installation planifiée", "Demain, 09:00–11:00"]
      ],
      stap3: [
        ["Livré à votre date", "Suivi jusqu'à votre porte"],
        ["Installé et réglé", "Évacuation des condensats incluse, pas de bac"],
        ["Explications sur place", "Brèves et claires"]
      ],
      vocht: "Humidité de l'air",
      schema: "Dans les temps",
      nog: "Encore ± 4 jours avant le séchage complet",
      stap5: [
        ["Mesure finale : sec", "Humidité résiduelle ≤ 2 %"],
        ["Enlèvement planifié", "Vendredi, 13:00–15:00"],
        ["Facture après paiement complet", "Pas de surprise après coup"]
      ]
    }
  },
  en: {
    kick: "How it works",
    h2: "From calculation to a dry home, in five steps.",
    lede: "Fully digital: calculate, book, pay and schedule the installation online. Click through the steps or just watch.",
    steps: [
      {
        step: "Step 01",
        tab: "Calculate your package",
        heading: "You calculate, we size it.",
        body: "Enter your floor area, ceiling height and situation. The Calculator works out your volume and puts together the exact package: units, drying time and one all-in price.",
        linkLabel: "Start the Calculator →",
        linkTo: "/verhuur/calculator"
      },
      {
        step: "Step 02",
        tab: "Book & pay online",
        heading: "Booking, paying and scheduling in one flow.",
        body: "You choose your delivery date and installation slot, pay securely online and get your confirmation straight away. No quotes, no phone calls needed.",
        linkLabel: "See how booking works →",
        linkTo: "/verhuur/calculator"
      },
      {
        step: "Step 03",
        tab: "Delivery & installation",
        heading: "We deliver, set up and adjust.",
        body: "Delivered on the date you choose. Our technician positions the units, connects the condensate drain and sets the target humidity. You do not have to lift a thing.",
        linkLabel: "All about delivery →",
        linkTo: "/verhuur/calculator"
      },
      {
        step: "Step 04",
        tab: "Drying phase",
        heading: "The units do the work.",
        body: "Moisture is continuously drawn out of the air and pumped straight away. You follow the drying, and soon digitally too via monitoring on every unit.",
        linkLabel: "How the technology works →",
        linkTo: "#natuurlijk-actief",
        anchor: true
      },
      {
        step: "Step 05",
        tab: "Collection or extension",
        heading: "Measured dry? We collect everything.",
        body: "The final reading confirms that your home is 100% dry. We schedule the collection and close the hire. Not dry? Then you extend at no extra cost, up to the maximum.",
        linkLabel: "Free Calculator →",
        linkTo: "/verhuur/calculator"
      }
    ],
    mock: {
      plan: "Your drying plan",
      opp: "Living area",
      pakket: "All-in package",
      bedrag: "€352",
      wkn: "/ 2 wks",
      knop: "Put together my package",
      stap2: [
        ["Package chosen", "6 units · 12 days"],
        ["Paid online", "Bancontact · €352"],
        ["Installation scheduled", "Tomorrow, 09:00–11:00"]
      ],
      stap3: [
        ["Delivered on your date", "Track & trace to your door"],
        ["Set up & adjusted", "Incl. condensate drain, no tank"],
        ["Explained on site", "Short and clear"]
      ],
      vocht: "Humidity",
      schema: "On schedule",
      nog: "About 4 more days until dry",
      stap5: [
        ["Final reading: dry", "Residual moisture ≤ 2%"],
        ["Collection scheduled", "Friday, 13:00–15:00"],
        ["Invoice after full payment", "No surprises afterwards"]
      ]
    }
  }
};
const Steps = ({ rows }) => /* @__PURE__ */ jsx(Fragment, { children: rows.map(([title, sub], i) => /* @__PURE__ */ jsx(Step, { tone: `s${i + 1}`, title, sub }, title)) });
const mocks = (m) => [
  mockCard(
    /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("span", { className: "mlab", children: m.plan }),
      /* @__PURE__ */ jsxs("div", { className: "mrow", children: [
        /* @__PURE__ */ jsx("span", { className: "mlab", children: m.opp }),
        /* @__PURE__ */ jsxs("span", { className: "mval", children: [
          "120 ",
          /* @__PURE__ */ jsx("small", { children: "m²" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mslider", children: /* @__PURE__ */ jsx("b", {}) }),
      /* @__PURE__ */ jsxs("div", { className: "mrow", style: { marginTop: 14 }, children: [
        /* @__PURE__ */ jsx("span", { className: "mlab", children: m.pakket }),
        /* @__PURE__ */ jsxs("span", { className: "mval", children: [
          m.bedrag,
          " ",
          /* @__PURE__ */ jsx("small", { children: m.wkn })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mbtn", children: m.knop })
    ] })
  ),
  mockCard(/* @__PURE__ */ jsx(Steps, { rows: m.stap2 })),
  mockCard(/* @__PURE__ */ jsx(Steps, { rows: m.stap3 })),
  mockCard(
    /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { className: "mrow", children: [
        /* @__PURE__ */ jsx("span", { className: "mlab", children: m.vocht }),
        /* @__PURE__ */ jsxs("span", { className: "mval", children: [
          "42 ",
          /* @__PURE__ */ jsx("small", { children: "%" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mslider", children: /* @__PURE__ */ jsx("b", {}) }),
      /* @__PURE__ */ jsxs("div", { className: "mstep s2", style: { marginTop: 14 }, children: [
        /* @__PURE__ */ jsx("i", { children: "✓" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("b", { children: m.schema }),
          /* @__PURE__ */ jsx("small", { children: m.nog })
        ] })
      ] })
    ] })
  ),
  mockCard(/* @__PURE__ */ jsx(Steps, { rows: m.stap5 }))
];
const V3HowItWorks = () => {
  const t = useCopy(COPY$c);
  const lp = useLokaalPad();
  const STEPS = t.steps.map((step, i) => ({ ...step, mock: mocks(t.mock)[i] }));
  const [current, setCurrent] = useState(0);
  const [manual, setManual] = useState(false);
  useEffect(() => {
    if (manual) return;
    const timer = setInterval(() => setCurrent((i) => (i + 1) % t.steps.length), AUTOPLAY_MS$1);
    return () => clearInterval(timer);
  }, [manual, t.steps.length]);
  return /* @__PURE__ */ jsx("section", { className: "hiw", id: "werkwijze", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
    /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
      /* @__PURE__ */ jsx("span", { className: "kick", children: t.kick }),
      /* @__PURE__ */ jsx("h2", { className: "sec", children: t.h2 }),
      /* @__PURE__ */ jsx("p", { className: "lede", children: t.lede })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `hiw-tabs${manual ? " manual" : ""}`, id: "hiwTabs", children: STEPS.map((step, i) => /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        className: i === current ? "active" : void 0,
        onClick: () => {
          setManual(true);
          setCurrent(i);
        },
        children: [
          /* @__PURE__ */ jsx("i", { children: step.step }),
          step.tab,
          /* @__PURE__ */ jsx("span", { className: "tbar", children: /* @__PURE__ */ jsx("b", {}) })
        ]
      },
      step.step
    )) }),
    /* @__PURE__ */ jsx("div", { className: "hiw-stage", id: "hiwStage", children: STEPS.map((step, i) => /* @__PURE__ */ jsxs("div", { className: `hiw-p${i === current ? " active" : ""}`, children: [
      /* @__PURE__ */ jsxs("div", { className: "hp-txt", children: [
        /* @__PURE__ */ jsx("h3", { children: step.heading }),
        /* @__PURE__ */ jsx("p", { children: step.body }),
        step.anchor ? /* @__PURE__ */ jsx("a", { href: step.linkTo, children: step.linkLabel }) : /* @__PURE__ */ jsx(Link, { to: lp(step.linkTo), children: step.linkLabel })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "hp-mock", children: step.mock })
    ] }, step.step)) })
  ] }) });
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/home-v3/V3Cases.tsx");
const CASES_NL = [
  {
    id: "case-nieuwbouw",
    image: "/vernast/case-nieuwbouw.webp",
    alt: "Nieuwbouwwoning in afwerking",
    tag: "Nieuwbouw",
    heading: "Sneller verder met de afwerking",
    body: "Chape, pleisterwerk en beton bevatten veel restvocht. Actieve droging helpt om sneller verder te kunnen met vloeren en schilderwerk.",
    cta: "Meer over nieuwbouw"
  },
  {
    id: "case-chape",
    image: "/vernast/case-chape-v2.webp",
    alt: "Verse chape met grote natte plekken tijdens het drogen",
    tag: "Chape drogen",
    heading: "Vloeren en parket op tijd geplaatst",
    body: "Wie sneller wil vloeren of de werfplanning wil respecteren, heeft baat bij gecontroleerde droging van de chape.",
    cta: "Meer over chape drogen"
  },
  {
    id: "case-keuken",
    image: "/vernast/case-keuken.webp",
    alt: "Keukenplaatsing tegen een droge muur",
    tag: "Keukenplaatsing",
    heading: "Droge muren vóór de keuken komt",
    body: "Keukens worden vaak geplaatst tegen muren die onvoldoende droog zijn, met schade aan kasten en plinten tot gevolg.",
    cta: "Meer over keukenplaatsing"
  },
  {
    id: "case-waterschade",
    image: "/vernast/case-waterschade-v3.webp",
    alt: "Waterschade vanaf het plafond met vochtstrepen op de muur",
    objectPosition: "50% 22%",
    tag: "Waterschade",
    heading: "Snel drogen na een lek of overstroming",
    body: "Bij waterschade telt elke dag: binnen 48 uur starten met drogen voorkomt schimmel, geurhinder en schade aan vloeren, muren en meubels. Wij leveren binnen 24 uur een intensief droogpakket en begeleiden u bij het dossier voor uw verzekering.",
    cta: "Bereken uw waterschadepakket"
  },
  {
    id: "case-renovatie",
    image: "/vernast/case-renovatie.webp",
    alt: "Renovatie met vers pleisterwerk",
    tag: "Renovatie",
    heading: "Niet afwerken op een natte ondergrond",
    body: "Na pleisterwerken of vochtige ruimtes voorkomt droging dat verf of behang te vroeg op een vochtige ondergrond komt.",
    cta: "Meer over renovatie"
  },
  {
    id: "case-kelder",
    image: "/vernast/case-kelder.webp",
    alt: "Kelder met vochtproblemen",
    tag: "Kelders & koude ruimtes",
    heading: "De juiste techniek is hier cruciaal",
    body: "In koelere of ondergrondse ruimtes werkt condensdroging trager. Afhankelijk van de situatie is een andere aanpak of extra warmte nodig.",
    cta: "Meer over kelders"
  }
];
const CASES_FR = [
  {
    id: "case-nieuwbouw",
    image: "/vernast/case-nieuwbouw.webp",
    alt: "Habitation neuve en cours de finition",
    tag: "Nouvelle construction",
    heading: "Avancer plus vite dans les finitions",
    body: "La chape, le plafonnage et le béton contiennent beaucoup d'humidité résiduelle. Un séchage actif permet de poursuivre plus vite avec les sols et la peinture.",
    cta: "En savoir plus sur la nouvelle construction"
  },
  {
    id: "case-chape",
    image: "/vernast/case-chape-v2.webp",
    alt: "Chape fraîche avec de grandes taches humides pendant le séchage",
    tag: "Sécher une chape",
    heading: "Sols et parquet posés à temps",
    body: "Si vous voulez poser vos sols plus tôt ou respecter le planning du chantier, un séchage contrôlé de la chape vous aide.",
    cta: "En savoir plus sur le séchage de chape"
  },
  {
    id: "case-keuken",
    image: "/vernast/case-keuken.webp",
    alt: "Pose d'une cuisine contre un mur sec",
    tag: "Pose de cuisine",
    heading: "Des murs secs avant l'arrivée de la cuisine",
    body: "Les cuisines sont souvent posées contre des murs insuffisamment secs, avec des dégâts aux armoires et aux plinthes pour conséquence.",
    cta: "En savoir plus sur la pose de cuisine"
  },
  {
    id: "case-waterschade",
    image: "/vernast/case-waterschade-v3.webp",
    alt: "Dégâts des eaux venant du plafond avec des traînées d'humidité sur le mur",
    objectPosition: "50% 22%",
    tag: "Dégâts des eaux",
    heading: "Sécher vite après une fuite ou une inondation",
    body: "En cas de dégâts des eaux, chaque jour compte : commencer à sécher dans les 48 heures évite les moisissures, les odeurs et les dégâts aux sols, aux murs et aux meubles. Nous livrons un pack de séchage intensif dans les 24 heures et vous accompagnons pour le dossier de votre assurance.",
    cta: "Calculez votre pack dégâts des eaux"
  },
  {
    id: "case-renovatie",
    image: "/vernast/case-renovatie.webp",
    alt: "Rénovation avec un plafonnage frais",
    tag: "Rénovation",
    heading: "Ne pas finir sur un support humide",
    body: "Après des travaux de plafonnage ou dans des pièces humides, le séchage évite que la peinture ou le papier peint soit posé trop tôt sur un support humide.",
    cta: "En savoir plus sur la rénovation"
  },
  {
    id: "case-kelder",
    image: "/vernast/case-kelder.webp",
    alt: "Cave avec des problèmes d'humidité",
    tag: "Caves et pièces froides",
    heading: "La bonne technique est ici essentielle",
    body: "Dans des pièces plus fraîches ou souterraines, le séchage par condensation est plus lent. Selon la situation, une autre approche ou un apport de chaleur est nécessaire.",
    cta: "En savoir plus sur les caves"
  }
];
const CASES_EN = [
  {
    id: "case-nieuwbouw",
    image: "/vernast/case-nieuwbouw.webp",
    alt: "New-build home being finished",
    tag: "New build",
    heading: "Move on to the finishing faster",
    body: "Screed, plaster and concrete hold a lot of residual moisture. Active drying helps you move on to flooring and painting sooner.",
    cta: "More about new builds"
  },
  {
    id: "case-chape",
    image: "/vernast/case-chape-v2.webp",
    alt: "Fresh screed with large wet patches while drying",
    tag: "Screed drying",
    heading: "Floors and parquet laid on time",
    body: "If you want to lay floors sooner or keep to the site schedule, controlled drying of the screed pays off.",
    cta: "More about screed drying"
  },
  {
    id: "case-keuken",
    image: "/vernast/case-keuken.webp",
    alt: "Kitchen being fitted against a dry wall",
    tag: "Kitchen fitting",
    heading: "Dry walls before the kitchen goes in",
    body: "Kitchens are often fitted against walls that are not dry enough, leading to damage to cabinets and skirting boards.",
    cta: "More about kitchen fitting"
  },
  {
    id: "case-waterschade",
    image: "/vernast/case-waterschade-v3.webp",
    alt: "Water damage from the ceiling with damp streaks on the wall",
    objectPosition: "50% 22%",
    tag: "Water damage",
    heading: "Dry fast after a leak or flood",
    body: "With water damage every day counts: starting to dry within 48 hours prevents mould, odours and damage to floors, walls and furniture. We deliver an intensive drying package within 24 hours and help you with the claim for your insurer.",
    cta: "Calculate your water damage package"
  },
  {
    id: "case-renovatie",
    image: "/vernast/case-renovatie.webp",
    alt: "Renovation with fresh plasterwork",
    tag: "Renovation",
    heading: "Do not finish on a damp surface",
    body: "After plastering or in damp rooms, drying prevents paint or wallpaper going onto a damp surface too early.",
    cta: "More about renovation"
  },
  {
    id: "case-kelder",
    image: "/vernast/case-kelder.webp",
    alt: "Cellar with damp problems",
    tag: "Cellars & cold rooms",
    heading: "The right technique is crucial here",
    body: "In cooler or underground rooms, condensation drying works more slowly. Depending on the situation, a different approach or extra heat is needed.",
    cta: "More about cellars"
  }
];
const COPY$b = {
  nl: {
    cases: CASES_NL,
    kick: "Voor welke situaties",
    h2: "Wanneer bouwdroging écht het verschil maakt.",
    schimmelAlt: "Vernast schimmelspecialist",
    schimmelKick: "Schimmel gezien?",
    schimmelH3: "Schimmel vraagt een totaal andere behandeling.",
    schimmelP: "Drogen alleen volstaat dan niet: de schimmel zelf moet behandeld en de sporen geneutraliseerd worden. Onze specialisten pakken de oorzaak aan en werken af met een professionele ozonbehandeling.",
    schimmelCta: "Ontdek de ozonbehandeling"
  },
  fr: {
    cases: CASES_FR,
    kick: "Pour quelles situations",
    h2: "Quand le séchage de chantier fait vraiment la différence.",
    schimmelAlt: "Spécialiste Vernast des moisissures",
    schimmelKick: "Des moisissures ?",
    schimmelH3: "Les moisissures demandent un tout autre traitement.",
    schimmelP: "Sécher seul ne suffit alors pas : la moisissure elle-même doit être traitée et les spores neutralisées. Nos spécialistes s'attaquent à la cause et terminent par un traitement professionnel à l'ozone.",
    schimmelCta: "Découvrir le traitement à l'ozone"
  },
  en: {
    cases: CASES_EN,
    kick: "Which situations",
    h2: "When building drying really makes the difference.",
    schimmelAlt: "Vernast mould specialist",
    schimmelKick: "Spotted mould?",
    schimmelH3: "Mould needs a completely different treatment.",
    schimmelP: "Drying alone is not enough then: the mould itself has to be treated and the spores neutralised. Our specialists tackle the cause and finish with a professional ozone treatment.",
    schimmelCta: "Discover the ozone treatment"
  }
};
const V3Cases = () => {
  const t = useCopy(COPY$b);
  const lp = useLokaalPad();
  return /* @__PURE__ */ jsx("section", { className: "cases", id: "toepassingen", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
    /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
      /* @__PURE__ */ jsx("span", { className: "kick", children: t.kick }),
      /* @__PURE__ */ jsx("h2", { className: "sec", children: t.h2 })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "cgrid", children: t.cases.map((item) => /* @__PURE__ */ jsxs("div", { className: "cs", children: [
      /* @__PURE__ */ jsx("div", { className: "csimg", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: item.image,
          alt: item.alt,
          width: 1200,
          height: 1200,
          loading: "lazy",
          style: item.objectPosition ? { objectPosition: item.objectPosition } : void 0
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "csb", children: [
        /* @__PURE__ */ jsx("div", { className: "ct", children: item.tag }),
        /* @__PURE__ */ jsx("h3", { children: item.heading }),
        /* @__PURE__ */ jsx("p", { children: item.body }),
        /* @__PURE__ */ jsxs(Link, { className: "cgo", to: lp("/verhuur/calculator"), children: [
          item.cta,
          " ",
          /* @__PURE__ */ jsx(ArrowRightIcon, { size: 13, strokeWidth: 2.6 })
        ] })
      ] })
    ] }, item.id)) }),
    /* @__PURE__ */ jsxs("div", { className: "schimmelbar", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "sb-man",
          src: "/vernast/man-schimmelpak.webp",
          alt: t.schimmelAlt,
          width: 1440,
          height: 961,
          loading: "lazy"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "sb-t", children: [
        /* @__PURE__ */ jsx("span", { className: "sb-k", children: t.schimmelKick }),
        /* @__PURE__ */ jsx("h3", { children: t.schimmelH3 }),
        /* @__PURE__ */ jsx("p", { children: t.schimmelP })
      ] }),
      /* @__PURE__ */ jsxs(Link, { className: "btn btn-white", to: lp("/ozonbehandeling"), children: [
        t.schimmelCta,
        " ",
        /* @__PURE__ */ jsx(ArrowRightIcon, { size: 13, strokeWidth: 2.6 })
      ] })
    ] })
  ] }) });
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/home-v3/V3Market.tsx");
const PILLARS_NL = [
  {
    icon: "/vernast/icon-brain.webp",
    alt: "Hersenen: berekend in plaats van gegokt",
    title: "Geen overcapaciteit",
    body: "Een zware industriële droger in een rijwoning droogt niet sneller, hij verbruikt alleen meer. Onze calculatie dimensioneert het pakket exact op uw volume en droogdoel: wat u nodig heeft, niets meer.",
    foot: "Exact gedimensioneerd"
  },
  {
    icon: "/vernast/icon-leaf.webp",
    alt: "Groen blad: zuinig drogen, lager verbruik",
    title: "Zuinig voor u én het milieu",
    body: "Onze eco-toestellen halen meer liters vocht per kilowattuur, en doordat wij nooit overdimensioneren betaalt u minder stroom tijdens de volledige huurperiode. Duurzaam drogen is gewoon goedkoper drogen.",
    foot: "Lager verbruik, lagere factuur"
  },
  {
    icon: "/vernast/icon-shield.webp",
    alt: "Gouden schild: drooggarantie",
    title: "100% droog, gegarandeerd",
    body: "Omdat wij berekenen in plaats van gokken, durven wij beloven wat niemand anders belooft: uw pakket droogt uw woning binnen de berekende periode. Lukt dat niet, dan huurt u kosteloos verder.*",
    foot: "Of u huurt kosteloos verder"
  }
];
const PILLARS_FR = [
  {
    icon: "/vernast/icon-brain.webp",
    alt: "Cerveau : calculé plutôt que deviné",
    title: "Pas de surcapacité",
    body: "Un lourd déshumidificateur industriel dans une maison mitoyenne ne sèche pas plus vite, il consomme seulement davantage. Notre calcul dimensionne le pack exactement selon votre volume et votre objectif de séchage : ce dont vous avez besoin, rien de plus.",
    foot: "Dimensionné avec précision"
  },
  {
    icon: "/vernast/icon-leaf.webp",
    alt: "Feuille verte : séchage économe, consommation réduite",
    title: "Économe pour vous et pour l'environnement",
    body: "Nos appareils éco extraient plus de litres d'humidité par kilowattheure, et comme nous ne surdimensionnons jamais, vous payez moins d'électricité pendant toute la durée de location. Sécher durablement, c'est tout simplement sécher moins cher.",
    foot: "Moins de consommation, facture plus basse"
  },
  {
    icon: "/vernast/icon-shield.webp",
    alt: "Bouclier doré : garantie de séchage",
    title: "Sec à 100 %, garanti",
    body: "Parce que nous calculons au lieu de deviner, nous osons promettre ce que personne d'autre ne promet : votre pack sèche votre habitation dans la période calculée. Si ce n'est pas le cas, vous continuez à louer sans frais.*",
    foot: "Ou vous continuez à louer sans frais"
  }
];
const PILLARS_EN = [
  {
    icon: "/vernast/icon-brain.webp",
    alt: "Brain: calculated instead of guessed",
    title: "No overcapacity",
    body: "A heavy industrial dryer in a terraced house does not dry any faster, it just uses more. Our calculation sizes the package exactly to your volume and drying goal: what you need, nothing more.",
    foot: "Sized exactly"
  },
  {
    icon: "/vernast/icon-leaf.webp",
    alt: "Green leaf: economical drying, lower consumption",
    title: "Economical for you and the environment",
    body: "Our eco units extract more litres of moisture per kilowatt hour, and because we never oversize, you pay for less electricity over the whole hire period. Sustainable drying is simply cheaper drying.",
    foot: "Lower consumption, lower bill"
  },
  {
    icon: "/vernast/icon-shield.webp",
    alt: "Gold shield: drying guarantee",
    title: "100% dry, guaranteed",
    body: "Because we calculate instead of guessing, we dare to promise what nobody else does: your package dries your home within the calculated period. If it does not, you keep hiring at no extra cost.*",
    foot: "Or keep hiring at no extra cost"
  }
];
const COPY$a = {
  nl: {
    pillars: PILLARS_NL,
    kick: "Duurzaam & berekend",
    h2: "De markt zet toestellen. Wij zetten berekening.",
    lede: "In de sector worden vaak standaard zware drogers geplaatst, machines gedimensioneerd op grote volumes, terwijl de meeste woningen vandaag net compacter worden. Dat betekent onnodig verbruik, onnodige huur en onnodige belasting van het milieu. Wij draaien het om: eerst berekenen, dan pas plaatsen."
  },
  fr: {
    pillars: PILLARS_FR,
    kick: "Durable et calculé",
    h2: "Le marché place des appareils. Nous plaçons un calcul.",
    lede: "Dans le secteur, on installe souvent par défaut de lourds déshumidificateurs, des machines dimensionnées pour de grands volumes, alors que la plupart des habitations sont aujourd'hui justement plus compactes. Résultat : une consommation inutile, une location inutile et une charge inutile pour l'environnement. Nous faisons l'inverse : d'abord calculer, ensuite seulement installer."
  },
  en: {
    pillars: PILLARS_EN,
    kick: "Sustainable & calculated",
    h2: "The market places units. We place a calculation.",
    lede: "In this sector, heavy standard dryers are often installed by default, machines sized for large volumes, while most homes today are actually getting more compact. That means unnecessary consumption, unnecessary hire and an unnecessary burden on the environment. We turn it around: calculate first, only then install."
  }
};
const V3Market = () => {
  const t = useCopy(COPY$a);
  return /* @__PURE__ */ jsx("section", { className: "mkt", id: "duurzaam", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
    /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
      /* @__PURE__ */ jsx("span", { className: "kick", children: t.kick }),
      /* @__PURE__ */ jsx("h2", { className: "sec", children: t.h2 }),
      /* @__PURE__ */ jsx("p", { className: "lede", children: t.lede })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mkt-grid", children: t.pillars.map((pillar) => /* @__PURE__ */ jsxs("div", { className: "mk", children: [
      /* @__PURE__ */ jsx("div", { className: "mki", children: /* @__PURE__ */ jsx("img", { src: pillar.icon, alt: pillar.alt, loading: "lazy" }) }),
      /* @__PURE__ */ jsx("h3", { children: pillar.title }),
      /* @__PURE__ */ jsx("p", { children: pillar.body }),
      /* @__PURE__ */ jsx("div", { className: "mkf", children: pillar.foot })
    ] }, pillar.title)) })
  ] }) });
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/home-v3/V3Intro.tsx");
const AUTOPLAY_MS = 4600;
const PANELS_NL = [
  {
    key: "nat",
    tab: "Natuurlijk drogen",
    tone: "bad",
    rows: [
      [
        "Droogtijd",
        "Weken tot maanden, volledig afhankelijk van weer, temperatuur en ventilatie."
      ],
      ["Controle", "Geen. U weet nooit wanneer de ruimte écht droog is."],
      ["Schimmelrisico", "Hoog: vocht blijft wekenlang in muren en chape hangen."],
      [
        "Afwerken",
        "Wachten, of te vroeg afwerken met blazen en loskomende verf als gevolg."
      ]
    ],
    /*
      Stond als: "«Gratis» natuurlijk drogen betaalt u in tijd, stookkosten en
      risico op schade." Daarin is het drogen het onderwerp van "betaalt", dus
      las de zin alsof het drogen ú iets betaalt. Nu staat de klant waar hij
      hoort, en spiegelt de zin die van het andere tabblad ("verdient zichzelf
      terug").
    */
    verdict: "Natuurlijk drogen is niet gratis: u betaalt in tijd, stookkosten en risico op schade.",
    verdictOk: false
  },
  {
    key: "act",
    tab: "Actieve bouwdroging",
    tone: "good",
    rows: [
      ["Droogtijd", "Dagen in plaats van weken, vooraf berekend en voorspelbaar."],
      ["Controle", "Volledig: vochtmeting voor en na bevestigt wanneer alles écht droog is."],
      ["Schimmelrisico", "Minimaal: vocht wordt continu afgevoerd voor schimmel kan groeien."],
      [
        "Afwerken",
        "Afwerken zodra de meting het toelaat, zonder blazen of loskomende verf."
      ]
    ],
    verdict: "Actief drogen verdient zichzelf terug in tijd, stookkosten en zekerheid.",
    verdictOk: true
  }
];
const FACTS_NL = [
  {
    n: "1 500 L",
    toon: "water",
    title: "Water in een gemiddelde nieuwbouw",
    body: "Chape, pleister en beton brengen samen honderden tot duizenden liters vocht binnen die eruit moeten voor u afwerkt."
  },
  {
    n: "48 u",
    title: "Voor schimmel begint te groeien",
    body: "Bij waterschade start schimmelvorming al na twee dagen. Snel starten met drogen is de goedkoopste ingreep die er is."
  },
  {
    n: "≤ 2 %",
    toon: "waarschuwing",
    title: "Restvocht voor u mag afwerken",
    body: "Vloerbekleding en verf vragen een droge ondergrond. Te vroeg afwerken betekent bladders, schimmel en opnieuw beginnen."
  },
  {
    n: "60 %",
    toon: "winst",
    title: "Tijdswinst met actieve droging",
    body: "Wat natuurlijk weken duurt, brengt een correct gedimensioneerd toestel terug tot een kwestie van dagen."
  }
];
const PANELS_FR = [
  {
    key: "nat",
    tab: "Séchage naturel",
    tone: "bad",
    rows: [
      [
        "Durée de séchage",
        "Des semaines, voire des mois, entièrement selon la météo, la température et la ventilation."
      ],
      ["Contrôle", "Aucun. Vous ne savez jamais quand la pièce est vraiment sèche."],
      ["Risque de moisissures", "Élevé : l'humidité reste des semaines dans les murs et la chape."],
      [
        "Finitions",
        "Attendre, ou finir trop tôt avec des cloques et de la peinture qui se décolle."
      ]
    ],
    verdict: "Le séchage naturel n'est pas gratuit : vous le payez en temps, en frais de chauffage et en risque de dégâts.",
    verdictOk: false
  },
  {
    key: "act",
    tab: "Séchage de chantier actif",
    tone: "good",
    rows: [
      ["Durée de séchage", "Des jours au lieu de semaines, calculés à l'avance et prévisibles."],
      ["Contrôle", "Total : une mesure d'humidité avant et après confirme quand tout est vraiment sec."],
      ["Risque de moisissures", "Minimal : l'humidité est évacuée en continu avant que la moisissure ne puisse se développer."],
      [
        "Finitions",
        "Finir dès que la mesure le permet, sans cloques ni peinture qui se décolle."
      ]
    ],
    verdict: "Le séchage actif est rentable en temps, en frais de chauffage et en sécurité.",
    verdictOk: true
  }
];
const FACTS_FR = [
  {
    n: "1 500 L",
    toon: "water",
    title: "D'eau dans une construction neuve moyenne",
    body: "La chape, le plafonnage et le béton apportent ensemble des centaines, voire des milliers de litres d'humidité qui doivent sortir avant les finitions."
  },
  {
    n: "48 h",
    title: "Avant que les moisissures ne se développent",
    body: "En cas de dégâts des eaux, les moisissures apparaissent déjà après deux jours. Commencer vite à sécher est l'intervention la moins chère qui soit."
  },
  {
    n: "≤ 2 %",
    toon: "waarschuwing",
    title: "Humidité résiduelle avant de pouvoir finir",
    body: "Les revêtements de sol et la peinture exigent un support sec. Finir trop tôt, c'est des cloques, des moisissures et tout recommencer."
  },
  {
    n: "60 %",
    toon: "winst",
    title: "De temps gagné avec un séchage actif",
    body: "Ce qui prend des semaines naturellement, un appareil correctement dimensionné le ramène à une question de jours."
  }
];
const PANELS_EN = [
  {
    key: "nat",
    tab: "Natural drying",
    tone: "bad",
    rows: [
      ["Drying time", "Weeks to months, entirely dependent on weather, temperature and ventilation."],
      ["Control", "None. You never know when the room is really dry."],
      ["Mould risk", "High: moisture lingers in walls and screed for weeks."],
      ["Finishing", "Waiting, or finishing too early with blistering and peeling paint as a result."]
    ],
    verdict: "Natural drying is not free: you pay in time, heating costs and the risk of damage.",
    verdictOk: false
  },
  {
    key: "act",
    tab: "Active building drying",
    tone: "good",
    rows: [
      ["Drying time", "Days instead of weeks, calculated in advance and predictable."],
      ["Control", "Complete: moisture readings before and after confirm when everything is really dry."],
      ["Mould risk", "Minimal: moisture is removed continuously before mould can grow."],
      ["Finishing", "Finish as soon as the reading allows, without blistering or peeling paint."]
    ],
    verdict: "Active drying pays for itself in time, heating costs and certainty.",
    verdictOk: true
  }
];
const FACTS_EN = [
  {
    n: "1,500 L",
    toon: "water",
    title: "Of water in an average new build",
    body: "Screed, plaster and concrete together bring in hundreds to thousands of litres of moisture that have to come out before you finish."
  },
  {
    n: "48 h",
    title: "Before mould starts to grow",
    body: "With water damage, mould starts forming after just two days. Starting to dry quickly is the cheapest intervention there is."
  },
  {
    n: "≤ 2%",
    toon: "waarschuwing",
    title: "Residual moisture before you can finish",
    body: "Floor coverings and paint need a dry surface. Finishing too early means blistering, mould and starting again."
  },
  {
    n: "60%",
    toon: "winst",
    title: "Time saved with active drying",
    body: "What takes weeks naturally, a correctly sized unit brings down to a matter of days."
  }
];
const COPY$9 = {
  nl: {
    panels: PANELS_NL,
    facts: FACTS_NL,
    kick: "Natuurlijk vs actief drogen",
    h2: "Natuurlijk of actief drogen? Het verschil is tijd, controle en zekerheid."
  },
  fr: {
    panels: PANELS_FR,
    facts: FACTS_FR,
    kick: "Séchage naturel ou actif",
    h2: "Séchage naturel ou actif ? La différence, c'est le temps, le contrôle et la certitude."
  },
  en: {
    panels: PANELS_EN,
    facts: FACTS_EN,
    kick: "Natural vs active drying",
    h2: "Natural or active drying? The difference is time, control and certainty."
  }
};
const V3Intro = () => {
  const t = useCopy(COPY$9);
  const PANELS = t.panels;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setActive((i) => (i + 1) % PANELS.length), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, PANELS.length]);
  return /* @__PURE__ */ jsx("section", { className: "intro", id: "natuurlijk-actief", children: /* @__PURE__ */ jsxs("div", { className: "wrap intro-grid", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("span", { className: "kick", children: t.kick }),
      /* @__PURE__ */ jsx("h2", { className: "sec", children: t.h2 }),
      /* @__PURE__ */ jsx("div", { className: `vs-tabs${paused ? " paused" : ""}`, id: "vsTabs", children: PANELS.map((panel, i) => /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          "data-v": panel.key,
          className: i === active ? "active" : void 0,
          onClick: () => {
            setPaused(true);
            setActive(i);
          },
          children: panel.tab
        },
        panel.key
      )) }),
      /* @__PURE__ */ jsx("div", { className: "vs-stage", children: PANELS.map((panel, i) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: `vs-panel${i === active ? " active" : ""}`,
          "data-vp": panel.key,
          children: [
            panel.rows.map(([label, text]) => /* @__PURE__ */ jsxs("div", { className: `vs-row ${panel.tone}`, children: [
              /* @__PURE__ */ jsx("b", { children: label }),
              /* @__PURE__ */ jsx("span", { children: text })
            ] }, label)),
            /* @__PURE__ */ jsx("div", { className: `vs-verdict${panel.verdictOk ? " ok" : ""}`, children: panel.verdict })
          ]
        },
        panel.key
      )) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "factlist", children: t.facts.map((fact) => /* @__PURE__ */ jsxs("div", { className: fact.toon ? `fact ${fact.toon}` : "fact", children: [
      /* @__PURE__ */ jsx("div", { className: "fn", children: fact.n }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { children: fact.title }),
        /* @__PURE__ */ jsx("p", { children: fact.body })
      ] })
    ] }, fact.n)) })
  ] }) });
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/home-v3/V3EcoLineup.tsx");
const HOTSPOTS_NL = [
  {
    id: "h1",
    model: "ttk170",
    dot: { left: "24%", top: "56%" },
    card: { left: "calc(24% + 46px)", top: "38%" },
    name: "Boost – 50l /dag",
    context: "Kleine ruimtes · tot 250 m³",
    rows: [
      ["Vochtafvoer", "50 L/dag"],
      ["Luchtdebiet", "300 m³/u"],
      ["Verbruik", "0,75 kW"]
    ]
  },
  {
    id: "h2",
    model: "ttk350",
    dot: { left: "49%", top: "46%" },
    card: { left: "calc(49% + 46px)", top: "28%" },
    name: "Performance – 80l /dag",
    context: "Meest gehuurd · tot 400 m³",
    rows: [
      ["Vochtafvoer", "80 l/dag"],
      ["Luchtdebiet", "550 m³/u"],
      ["Verbruik", "1,1 kW"]
    ]
  },
  {
    id: "h3",
    model: "ttk650",
    dot: { left: "72%", top: "34%" },
    card: { left: "auto", right: "2%", top: "16%" },
    name: "Ultimate – 110l /dag",
    context: "Grote volumes · tot 600 m³",
    rows: [
      ["Vochtafvoer", "110 l/dag"],
      ["Luchtdebiet", "700 m³/u"],
      ["Verbruik", "1,4 kW"]
    ]
  }
];
const TRUST_ICONS = [
  /* @__PURE__ */ jsx(PlanIcon, {}, "plan"),
  /* @__PURE__ */ jsx(ShieldIcon, {}, "schild"),
  /* @__PURE__ */ jsx(ClipboardIcon, {}, "klembord"),
  /* @__PURE__ */ jsx(HelmetIcon, {}, "helm")
];
const HOTSPOTS_FR = HOTSPOTS_NL.map((spot, i) => ({
  ...spot,
  name: ["Boost – 50 l/jour", "Performance – 80 l/jour", "Ultimate – 110 l/jour"][i],
  context: [
    "Petites pièces · jusqu'à 250 m³",
    "Le plus loué · jusqu'à 400 m³",
    "Grands volumes · jusqu'à 600 m³"
  ][i],
  rows: spot.rows.map(([label, value]) => [
    { Vochtafvoer: "Extraction d'humidité", Luchtdebiet: "Débit d'air", Verbruik: "Consommation" }[label] ?? label,
    value.replace(/ ?[lL]\/dag$/, " l/jour").replace("m³/u", "m³/h")
  ])
}));
const HOTSPOTS_EN = HOTSPOTS_NL.map((spot, i) => ({
  ...spot,
  name: ["Boost – 50 L/day", "Performance – 80 L/day", "Ultimate – 110 L/day"][i],
  context: ["Small rooms · up to 250 m³", "Most hired · up to 400 m³", "Large volumes · up to 600 m³"][i],
  rows: spot.rows.map(([label, value]) => [
    { Vochtafvoer: "Moisture extraction", Luchtdebiet: "Airflow", Verbruik: "Consumption" }[label] ?? label,
    value.replace(/ ?[lL]\/dag$/, " L/day").replace("m³/u", "m³/h").replace(/(\d),(\d)/, "$1.$2")
  ])
}));
const COPY$8 = {
  nl: {
    hotspots: HOTSPOTS_NL,
    trusted: ["Architecten", "Verzekeringskantoren", "Bouwkundigen", "Aannemers"],
    seal: "Gecertificeerd",
    tbK: "Vertrouwd door wie het moet weten",
    tbH3: "Vertrouwd door professionals in de bouw.",
    kick: "Eco Bouwdrogers",
    h2: "Onze beste eco bouwdrogers op een rij.",
    lede: "Drie formaten, één familie. Klik op de punten voor de technische informatie per toestel.",
    alt: "Vernast eco bouwdrogers, drie formaten",
    bekijken: "Bekijken"
  },
  fr: {
    hotspots: HOTSPOTS_FR,
    trusted: ["Architectes", "Bureaux d'assurances", "Experts en construction", "Entrepreneurs"],
    seal: "Certifié",
    tbK: "La confiance de ceux qui s'y connaissent",
    tbH3: "La confiance des professionnels de la construction.",
    kick: "Déshumidificateurs de chantier éco",
    h2: "Nos meilleurs déshumidificateurs de chantier éco en un coup d'œil.",
    lede: "Trois formats, une seule famille. Cliquez sur les points pour les informations techniques de chaque appareil.",
    alt: "Déshumidificateurs de chantier éco Vernast, trois formats",
    bekijken: "Voir"
  },
  en: {
    hotspots: HOTSPOTS_EN,
    trusted: ["Architects", "Insurance offices", "Building surveyors", "Contractors"],
    seal: "Certified",
    tbK: "Trusted by those who need to know",
    tbH3: "Trusted by professionals in construction.",
    kick: "Eco construction dehumidifiers",
    h2: "Our best eco construction dehumidifiers side by side.",
    lede: "Three sizes, one family. Click the dots for the technical information on each unit.",
    alt: "Vernast eco construction dehumidifiers, three sizes",
    bekijken: "View"
  }
};
const V3EcoLineup = () => {
  const t = useCopy(COPY$8);
  const lp = useLokaalPad();
  const HOTSPOTS = t.hotspots;
  const [open, setOpen] = useState(null);
  useEffect(() => {
    if (!open) return;
    const close = (event) => {
      const target = event.target;
      if (!target.closest(".hs-card") && !target.closest(".hs")) setOpen(null);
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [open]);
  return /* @__PURE__ */ jsx("section", { className: "eco", id: "eco", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
    /* @__PURE__ */ jsxs("div", { className: "trustbar", children: [
      /* @__PURE__ */ jsxs("div", { className: "tb-seal", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/vernast/schild-gecertificeerd.webp",
            alt: "",
            width: 360,
            height: 360,
            loading: "lazy"
          }
        ),
        /* @__PURE__ */ jsx("span", { children: t.seal })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "tb-l", children: [
        /* @__PURE__ */ jsx("span", { className: "tb-k", children: t.tbK }),
        /* @__PURE__ */ jsx("h3", { children: t.tbH3 })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "tb-chips", children: t.trusted.map((who, i) => /* @__PURE__ */ jsxs("span", { children: [
        TRUST_ICONS[i],
        " ",
        who
      ] }, who)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "sec-head mid", children: [
      /* @__PURE__ */ jsx("span", { className: "kick", children: t.kick }),
      /* @__PURE__ */ jsx("h2", { className: "sec", children: t.h2 }),
      /* @__PURE__ */ jsx("p", { className: "lede", children: t.lede })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "eco-stage", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/vernast/lineup-dryers.webp",
          alt: t.alt,
          width: 1440,
          height: 1183,
          loading: "lazy"
        }
      ),
      HOTSPOTS.map((spot) => /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          className: "hs",
          style: spot.dot,
          "aria-label": spot.name,
          onClick: (event) => {
            event.stopPropagation();
            setOpen((current) => current === spot.id ? null : spot.id);
          },
          children: "+"
        },
        `dot-${spot.id}`
      )),
      HOTSPOTS.map((spot) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: `hs-card${open === spot.id ? " on" : ""}`,
          id: spot.id,
          style: spot.card,
          children: [
            /* @__PURE__ */ jsx("div", { className: "hn", children: spot.name }),
            /* @__PURE__ */ jsx("div", { className: "hc", children: spot.context }),
            spot.rows.map(([label, value]) => /* @__PURE__ */ jsxs("div", { className: "hrow", children: [
              /* @__PURE__ */ jsx("span", { children: label }),
              /* @__PURE__ */ jsx("span", { children: value })
            ] }, label)),
            /* @__PURE__ */ jsxs(Link, { to: lp(toestelPad(spot.model)), children: [
              t.bekijken,
              " ",
              /* @__PURE__ */ jsx(ArrowRightIcon, { size: 12, strokeWidth: 2.6 })
            ] })
          ]
        },
        spot.id
      ))
    ] })
  ] }) });
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/home-v3/V3Difference.tsx");
const ICONS$2 = {
  calculator: /* @__PURE__ */ jsx(CalcIcon, {}),
  prijs: /* @__PURE__ */ jsx(PrijsIcon, {}),
  gamma: /* @__PURE__ */ jsx(GammaIcon, {}),
  opvolging: /* @__PURE__ */ jsx(OpvolgIcon, {}),
  verlengen: /* @__PURE__ */ jsx(VerlengIcon, {})
};
const COPY$7 = {
  nl: {
    points: [
      {
        id: "calculator",
        title: "Slimme droogcalculator",
        body: "Berekent op basis van volume, situatie en toepassing welke droogoplossing nodig is. Zo vermijdt u onder- én overcapaciteit."
      },
      {
        id: "prijs",
        title: "All-in prijs zonder verrassingen",
        body: "Levering, ophaling, installatie op gelijkvloers en standaard toebehoren zoals verlengkabels zijn inbegrepen."
      },
      {
        id: "gamma",
        title: "Afgestemd gamma",
        body: "Geen overgedimensioneerde toestellen, maar eco-bouwdrogers afgestemd op uw ruimte: nieuwbouw, renovatie, waterschade of koude ruimtes."
      },
      {
        id: "opvolging",
        title: "Praktische opvolging",
        body: "U boekt online, ontvangt snel bevestiging en duidelijke instructies, en wij plaatsen de toestellen correct op locatie."
      },
      {
        id: "verlengen",
        title: "Flexibel verlengen",
        body: "Niet op tijd droog? Met een beperkte verlengoptie loopt uw planning niet vast en houdt u uw project onder controle."
      }
    ],
    kick: "Waarom Vernast anders is",
    h2: "Waarom klanten niet meer willen gokken op bouwdroging.",
    lede: (link) => /* @__PURE__ */ jsxs(Fragment, { children: [
      "In ",
      link("bouwdroging"),
      " gaat het vaak fout op drie punten: het verkeerde toestel, een fout ingeschatte huurtermijn en onverwachte extra kosten. Vernast pakt net die pijnpunten aan: berekenen, correct dimensioneren, professioneel plaatsen en helder communiceren."
    ] })
  },
  fr: {
    points: [
      {
        id: "calculator",
        title: "Calculateur de séchage intelligent",
        body: "Détermine, sur la base du volume, de la situation et de l'application, quelle solution de séchage est nécessaire. Vous évitez ainsi la sous-capacité comme la surcapacité."
      },
      {
        id: "prijs",
        title: "Un prix tout compris sans surprises",
        body: "La livraison, l'enlèvement, l'installation au rez-de-chaussée et les accessoires standard comme les rallonges sont inclus."
      },
      {
        id: "gamma",
        title: "Une gamme adaptée",
        body: "Pas d'appareils surdimensionnés, mais des déshumidificateurs de chantier éco adaptés à votre espace : nouvelle construction, rénovation, dégâts des eaux ou pièces froides."
      },
      {
        id: "opvolging",
        title: "Un suivi pratique",
        body: "Vous réservez en ligne, recevez rapidement une confirmation et des instructions claires, et nous installons correctement les appareils sur place."
      },
      {
        id: "verlengen",
        title: "Prolongation flexible",
        body: "Pas sec à temps ? Grâce à une option de prolongation limitée, votre planning ne se bloque pas et vous gardez votre projet sous contrôle."
      }
    ],
    kick: "Pourquoi Vernast est différent",
    h2: "Pourquoi les clients ne veulent plus jouer à la loterie avec le séchage de chantier.",
    lede: (link) => /* @__PURE__ */ jsxs(Fragment, { children: [
      "En ",
      link("séchage de chantier"),
      ", les choses tournent souvent mal sur trois points",
      " ",
      ": le mauvais appareil, une durée de location mal estimée et des frais supplémentaires imprévus. Vernast s'attaque justement à ces points sensibles : calculer, dimensionner correctement, installer de manière professionnelle et communiquer clairement."
    ] })
  },
  en: {
    points: [
      {
        id: "calculator",
        title: "Smart drying calculator",
        body: "Works out which drying solution is needed based on volume, situation and application. That way you avoid both under- and overcapacity."
      },
      {
        id: "prijs",
        title: "All-in price without surprises",
        body: "Delivery, collection, ground-floor installation and standard accessories such as extension leads are included."
      },
      {
        id: "gamma",
        title: "A matched range",
        body: "No oversized units, but eco construction dehumidifiers matched to your space: new build, renovation, water damage or cold rooms."
      },
      {
        id: "opvolging",
        title: "Practical follow-up",
        body: "You book online, get a quick confirmation and clear instructions, and we set the units up correctly on site."
      },
      {
        id: "verlengen",
        title: "Flexible extension",
        body: "Not dry in time? With a limited extension option your schedule does not grind to a halt and you keep your project under control."
      }
    ],
    kick: "Why Vernast is different",
    h2: "Why customers no longer want to gamble on building drying.",
    lede: (link) => /* @__PURE__ */ jsxs(Fragment, { children: [
      "In ",
      link("building drying"),
      ", things often go wrong on three points: the wrong unit, a badly estimated hire period and unexpected extra costs. Vernast tackles exactly those pain points: calculating, sizing correctly, installing professionally and communicating clearly."
    ] })
  }
};
const V3Difference = () => {
  const t = useCopy(COPY$7);
  const lp = useLokaalPad();
  return /* @__PURE__ */ jsx(
    "section",
    {
      className: "dif",
      id: "anders",
      style: { background: "url('/vernast/bg-anders.webp') center / cover no-repeat" },
      children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
          /* @__PURE__ */ jsx("span", { className: "kick", children: t.kick }),
          /* @__PURE__ */ jsx("h2", { className: "sec", children: t.h2 }),
          /* @__PURE__ */ jsx("p", { className: "lede", children: t.lede((tekst) => /* @__PURE__ */ jsx(Link, { to: lp("/hoe-drogen-werkt"), children: tekst })) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "dif-grid", children: t.points.map((point) => /* @__PURE__ */ jsxs("div", { className: "df", children: [
          /* @__PURE__ */ jsx("div", { className: "dfi", children: ICONS$2[point.id] }),
          /* @__PURE__ */ jsx("h3", { children: point.title }),
          /* @__PURE__ */ jsx("p", { children: point.body })
        ] }, point.id)) })
      ] })
    }
  );
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/home-v3/V3Included.tsx");
const SpoedIcon = ({ size = 18 }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ jsx("path", { d: "M10.3 3.9 1.9 18a2 2 0 0 0 1.7 3h16.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" }),
      /* @__PURE__ */ jsx("path", { d: "M12 9v4M12 17h.01" })
    ]
  }
);
const AfvoerIcon = ({ size = 18 }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ jsx("path", { d: "M12 2.6s5.4 6.2 5.4 10a5.4 5.4 0 0 1-10.8 0c0-3.8 5.4-10 5.4-10Z" }),
      /* @__PURE__ */ jsx("path", { d: "M3 21h18" })
    ]
  }
);
const INCLUDED_NL = [
  {
    icon: /* @__PURE__ */ jsx(TruckIcon, {}),
    title: "Levering & ophaling",
    body: "Geleverd op uw gekozen datum en opgehaald wanneer u klaar bent. Gratis in onze regio."
  },
  {
    icon: /* @__PURE__ */ jsx(ChecklistIcon, {}),
    title: "Installatie op gelijkvloers",
    body: "Onze technicus plaatst het toestel, sluit de condensafvoer aan en stelt alles correct af, met basisuitleg bij plaatsing."
  },
  {
    icon: /* @__PURE__ */ jsx(RefreshIcon, {}),
    title: "Flexibele looptijd",
    body: "Verleng online met één klik of stop vroeger. U betaalt uitsluitend de dagen die u gebruikt."
  },
  {
    icon: /* @__PURE__ */ jsx(SupportIcon, {}),
    title: "Toebehoren & ondersteuning",
    body: "Standaard toebehoren zoals verlengkabels zit erbij, en onze experts zijn bereikbaar zolang u huurt."
  }
];
const OPTIONS_NL = [
  {
    icon: /* @__PURE__ */ jsx(ShieldIcon, { size: 18 }),
    toon: "winst",
    /*
      Staat in deze rij maar is geen optie: wie niet droog is binnen de
      berekende periode verlengt kosteloos. Dat staat zo in de drooggarantie en
      in de balk onderaan deze sectie. Als "Optie" gelabeld leek het iets dat
      bijbetaald moet worden.
    */
    label: "Inbegrepen",
    title: "Verlenggarantie",
    body: "Nog niet droog binnen de voorziene periode? Een verlengoptie geeft extra gemoedsrust."
  },
  {
    icon: /* @__PURE__ */ jsx(SpoedIcon, {}),
    toon: "spoed",
    title: "Spoedlevering",
    body: "Bij dringende schadegevallen of strakke planningen voorzien wij een spoedlevering."
  },
  {
    icon: /* @__PURE__ */ jsx(AfvoerIcon, {}),
    toon: "winst glans",
    title: "Automatische waterafvoer",
    body: "Bij langere trajecten pompt een condenspomp het water automatisch weg, zodat u geen reservoirs hoeft te ledigen.",
    link: { label: "Zo werkt de condenspomp", path: "/verhuur/toebehoren/condenspomp" }
  },
  {
    icon: /* @__PURE__ */ jsx(ChecklistIcon, { size: 18 }),
    title: "Rapportage",
    body: "Voor dossiers waarbij bewijs telt, ondersteunen wij met verslaggeving of technische documentatie."
  }
];
const INCLUDED_FR = INCLUDED_NL.map((item, i) => ({
  ...item,
  ...[
    {
      title: "Livraison et enlèvement",
      body: "Livré à la date de votre choix et repris quand vous avez terminé. Gratuit dans notre région."
    },
    {
      title: "Installation au rez-de-chaussée",
      body: "Notre technicien installe l'appareil, raccorde l'évacuation des condensats et règle tout correctement, avec une explication de base lors de l'installation."
    },
    {
      title: "Durée flexible",
      body: "Prolongez en ligne en un clic ou arrêtez plus tôt. Vous payez uniquement les jours que vous utilisez."
    },
    {
      title: "Accessoires et assistance",
      body: "Les accessoires standard comme les rallonges sont compris, et nos experts restent joignables pendant toute la location."
    }
  ][i]
}));
const OPTIONS_FR = OPTIONS_NL.map((option, i) => ({
  ...option,
  ...[
    {
      label: "Inclus",
      title: "Garantie de prolongation",
      body: "Pas encore sec dans la période prévue ? Une option de prolongation vous apporte une tranquillité d'esprit supplémentaire."
    },
    {
      title: "Livraison express",
      body: "Pour les sinistres urgents ou les plannings serrés, nous prévoyons une livraison express."
    },
    {
      title: "Évacuation automatique de l'eau",
      body: "Pour les séchages plus longs, une pompe à condensats évacue l'eau automatiquement, sans réservoirs à vider.",
      link: { label: "Comment fonctionne la pompe à condensats", path: "/verhuur/toebehoren/condenspomp" }
    },
    {
      title: "Rapport",
      body: "Pour les dossiers où la preuve compte, nous vous aidons avec un rapport ou une documentation technique."
    }
  ][i]
}));
const INCLUDED_EN = INCLUDED_NL.map((item, i) => ({
  ...item,
  ...[
    {
      title: "Delivery & collection",
      body: "Delivered on the date you choose and collected when you are done. Free in our region."
    },
    {
      title: "Ground-floor installation",
      body: "Our technician sets up the unit, connects the condensate drain and adjusts everything correctly, with a basic explanation at installation."
    },
    {
      title: "Flexible duration",
      body: "Extend online with one click or stop sooner. You only pay for the days you use."
    },
    {
      title: "Accessories & support",
      body: "Standard accessories such as extension leads are included, and our experts are available for as long as you hire."
    }
  ][i]
}));
const OPTIONS_EN = OPTIONS_NL.map((option, i) => ({
  ...option,
  ...[
    {
      label: "Included",
      title: "Extension guarantee",
      body: "Not dry yet within the expected period? An extension option gives extra peace of mind."
    },
    {
      title: "Express delivery",
      body: "For urgent damage cases or tight schedules, we arrange an express delivery."
    },
    {
      title: "Automatic water drainage",
      body: "On longer jobs a condensate pump drains the water away automatically, so you do not have to empty any tanks.",
      link: { label: "How the condensate pump works", path: "/verhuur/toebehoren/condenspomp" }
    },
    {
      title: "Reporting",
      body: "For cases where evidence counts, we support you with reports or technical documentation."
    }
  ][i]
}));
const COPY$6 = {
  nl: {
    included: INCLUDED_NL,
    options: OPTIONS_NL,
    optie: "Optie",
    kick: "Prijzen & voorwaarden",
    h2: "Eén duidelijke prijs. Meer inbegrepen dan u denkt.",
    lede: "Bouwdroging moet duidelijk zijn. Daarom werken wij met transparante huurvoorwaarden en een serviceformule die u ontzorgt. U ziet de prijs bij het berekenen en boekt tegen exact dat tarief.",
    obAlt: "Vernast technicus met klembord",
    obH3: "Bij levering volledig ontzorgd. En 100% droog, gegarandeerd.*",
    obP: "Wij berekenen, leveren, installeren en volgen op. U hoeft niets te sjouwen of in te stellen. Niet droog binnen de berekende periode? Dan verlengt u maximaal kosteloos.",
    obBtn: "Start uw droging",
    obNote: "* Garantie geldt wanneer de externe omstandigheden aan onze richtlijnen voldoen."
  },
  fr: {
    included: INCLUDED_FR,
    options: OPTIONS_FR,
    optie: "Option",
    kick: "Prix et conditions",
    h2: "Un prix clair. Plus de choses incluses que vous ne le pensez.",
    lede: "Le séchage de chantier doit être clair. C'est pourquoi nous travaillons avec des conditions de location transparentes et une formule de service qui vous décharge de tout. Vous voyez le prix au moment du calcul et réservez exactement à ce tarif.",
    obAlt: "Technicien Vernast avec un porte-bloc",
    obH3: "Entièrement pris en charge dès la livraison. Et sec à 100 %, garanti.*",
    obP: "Nous calculons, livrons, installons et assurons le suivi. Vous n'avez rien à porter ni à régler. Pas sec dans la période calculée ? Vous prolongez alors au maximum sans frais.",
    obBtn: "Lancez votre séchage",
    obNote: "* La garantie s'applique lorsque les conditions extérieures respectent nos directives."
  },
  en: {
    included: INCLUDED_EN,
    options: OPTIONS_EN,
    optie: "Option",
    kick: "Prices & terms",
    h2: "One clear price. More included than you think.",
    lede: "Building drying should be clear. That is why we work with transparent hire terms and a service formula that takes the work off your hands. You see the price when you calculate and book at exactly that rate.",
    obAlt: "Vernast technician with a clipboard",
    obH3: "Fully taken care of on delivery. And 100% dry, guaranteed.*",
    obP: "We calculate, deliver, install and follow up. You do not have to carry or set up anything. Not dry within the calculated period? Then you extend at no extra cost, up to the maximum.",
    obBtn: "Start your drying",
    obNote: "* The guarantee applies when the external conditions meet our guidelines."
  }
};
const V3Included = () => {
  const t = useCopy(COPY$6);
  const lp = useLokaalPad();
  return /* @__PURE__ */ jsx("section", { className: "incl", id: "prijzen", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
    /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
      /* @__PURE__ */ jsx("span", { className: "kick", children: t.kick }),
      /* @__PURE__ */ jsx("h2", { className: "sec", children: t.h2 }),
      /* @__PURE__ */ jsx("p", { className: "lede", children: t.lede })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "incl-grid", children: t.included.map((item) => /* @__PURE__ */ jsxs("div", { className: "ic", children: [
      /* @__PURE__ */ jsx("div", { className: "ii", children: item.icon }),
      /* @__PURE__ */ jsx("h3", { children: item.title }),
      /* @__PURE__ */ jsx("p", { children: item.body })
    ] }, item.title)) }),
    /* @__PURE__ */ jsx("div", { className: "incl-x", children: t.options.map((option) => /* @__PURE__ */ jsxs("div", { className: option.toon ? `ix ${option.toon}` : "ix", children: [
      /* @__PURE__ */ jsxs("div", { className: "xt", children: [
        option.icon,
        " ",
        option.label ?? t.optie
      ] }),
      /* @__PURE__ */ jsx("h3", { children: option.title }),
      /* @__PURE__ */ jsx("p", { children: option.body }),
      option.link && /* @__PURE__ */ jsxs(Link, { className: "ix-link", to: lp(option.link.path), children: [
        option.link.label,
        /* @__PURE__ */ jsx(ArrowRightIcon, { size: 12 })
      ] })
    ] }, option.title)) }),
    /* @__PURE__ */ jsxs("div", { className: "ontzorgbar", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "ob-man",
          src: "/vernast/man-klembord.webp",
          alt: t.obAlt,
          width: 1440,
          height: 961,
          loading: "lazy"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "ob-body", children: [
        /* @__PURE__ */ jsx("h3", { children: t.obH3 }),
        /* @__PURE__ */ jsx("p", { children: t.obP }),
        /* @__PURE__ */ jsxs(Link, { className: "ob-btn", to: lp("/verhuur/calculator"), children: [
          t.obBtn,
          /* @__PURE__ */ jsx(ArrowRightIcon, { size: 14 })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "ob-note", children: t.obNote })
      ] })
    ] })
  ] }) });
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/home-v3/V3Ozon.tsx");
const SPORES = ["s1", "s2", "s3", "s4", "s5", "s6"];
const ODORS = ["d1", "d2", "d3"];
const OZONE = ["a", "b", "c", "d", "e"];
const COPY$5 = {
  nl: {
    kick: "Schimmel- & geurbehandeling",
    h2: "Ozonbehandeling: schimmel en geur bij de bron aangepakt.",
    p1: "Ozon is actieve zuurstof die schimmelsporen, bacteriën en geurmoleculen oxideert, ook op plaatsen waar u zelf niet bij kan: achter plinten, in kieren en in zachte materialen. Geen maskering met geurstoffen, maar een grondige neutralisatie.",
    p2: "Wij zetten ozonbehandeling in na waterschade, bij schimmelvorming en bij hardnekkige muffe geuren, altijd in combinatie met een correcte droging én het aanpakken van de vochtoorzaak.",
    cta: "Bekijk de ozonbehandeling",
    animLabel: "Animatie: ozon breekt schimmel en geuren af",
    photoAlt: "Vochtschade op een muur",
    capB: "Ozon aan het werk",
    capS: "Sporen en geurmoleculen worden afgebroken, tot in elke kier.",
    chips: ["Geurneutralisatie", "Reiniging na schimmel & vocht", "Nr. 1 oplossing voor rokerswoningen"]
  },
  fr: {
    kick: "Traitement des moisissures et des odeurs",
    h2: "Traitement à l'ozone : moisissures et odeurs traitées à la source.",
    p1: "L'ozone est un oxygène actif qui oxyde les spores de moisissures, les bactéries et les molécules odorantes, même là où vous ne pouvez pas accéder : derrière les plinthes, dans les fissures et dans les matériaux souples. Pas de masquage par des parfums, mais une neutralisation en profondeur.",
    p2: "Nous utilisons le traitement à l'ozone après des dégâts des eaux, en cas de moisissures et d'odeurs de moisi persistantes, toujours en combinaison avec un séchage correct et le traitement de la cause de l'humidité.",
    cta: "Voir le traitement à l'ozone",
    animLabel: "Animation : l'ozone détruit les moisissures et les odeurs",
    photoAlt: "Dégâts d'humidité sur un mur",
    capB: "L'ozone au travail",
    capS: "Les spores et les molécules odorantes sont détruites, jusque dans chaque fissure.",
    chips: ["Neutralisation des odeurs", "Nettoyage après moisissures et humidité", "Solution n° 1 pour les logements de fumeurs"]
  },
  en: {
    kick: "Mould & odour treatment",
    h2: "Ozone treatment: mould and odours tackled at the source.",
    p1: "Ozone is active oxygen that oxidises mould spores, bacteria and odour molecules, even in places you cannot reach yourself: behind skirting boards, in gaps and in soft materials. No masking with fragrances, but a thorough neutralisation.",
    p2: "We use ozone treatment after water damage, when mould forms and for stubborn musty smells, always combined with correct drying and tackling the cause of the damp.",
    cta: "View the ozone treatment",
    animLabel: "Animation: ozone breaks down mould and odours",
    photoAlt: "Damp damage on a wall",
    capB: "Ozone at work",
    capS: "Spores and odour molecules are broken down, into every gap.",
    chips: ["Odour neutralisation", "Cleaning after mould & damp", "No. 1 solution for smokers' homes"]
  }
};
const V3Ozon = () => {
  const t = useCopy(COPY$5);
  const lp = useLokaalPad();
  return /* @__PURE__ */ jsx("section", { className: "ozon", id: "ozon", children: /* @__PURE__ */ jsxs("div", { className: "wrap ozon-grid", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("span", { className: "kick", children: t.kick }),
      /* @__PURE__ */ jsx("h2", { className: "sec", children: t.h2 }),
      /* @__PURE__ */ jsxs("div", { className: "obody", style: { marginTop: 20 }, children: [
        /* @__PURE__ */ jsx("p", { children: t.p1 }),
        /* @__PURE__ */ jsx("p", { children: t.p2 })
      ] }),
      /* @__PURE__ */ jsxs(Link, { className: "btn btn-red", to: lp("/ozonbehandeling"), children: [
        t.cta,
        " ",
        /* @__PURE__ */ jsx(ArrowRightIcon, { size: 13, strokeWidth: 2.6 })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "ozon-anim", "aria-label": t.animLabel, children: [
      /* @__PURE__ */ jsxs("div", { className: "oa-stage", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "oa-photo",
            src: "/vernast/schimmel-muur.webp",
            alt: t.photoAlt,
            width: 1440,
            height: 1080,
            loading: "lazy"
          }
        ),
        SPORES.map((s) => /* @__PURE__ */ jsx("span", { className: `spore ${s}` }, s)),
        ODORS.map((d) => /* @__PURE__ */ jsx("span", { className: `odor ${d}` }, d)),
        OZONE.map((o) => /* @__PURE__ */ jsx("span", { className: `o3 ${o}`, children: "O₃" }, o)),
        /* @__PURE__ */ jsxs("div", { className: "oa-cap", children: [
          /* @__PURE__ */ jsx("b", { children: t.capB }),
          /* @__PURE__ */ jsx("span", { children: t.capS })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "oa-chips", children: t.chips.map((chip) => /* @__PURE__ */ jsx("span", { children: chip }, chip)) })
    ] })
  ] }) });
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/kaart-provincies.ts");
const KAART_BREEDTE = 1200;
const KAART_HOOGTE = 1228;
const PROVINCIE_PADEN = {
  "west-vlaanderen": "M34,589 25,586 21,578 14,572 18,562 11,540 13,536 22,526 21,516 5,496 2,487 -1,466 -6,454 1,450 12,446 54,414 119,377 181,336 251,314 254,333 252,356 257,369 267,379 256,385 262,398 254,403 263,406 270,419 259,439 245,448 280,473 274,478 283,494 275,506 280,513 270,517 285,524 279,524 284,529 282,531 274,530 277,536 273,540 275,547 282,542 287,544 290,553 282,561 302,577 298,582 305,592 304,596 271,620 257,635 255,639 250,637 243,632 243,625 237,616 224,618 211,610 193,619 188,610 183,605 175,602 150,610 147,592 142,589 124,596 124,598 130,606 119,611 117,615 108,617 104,613 94,618 101,643 77,632 71,627 63,611 52,600 47,590 43,588 34,589Z",
  "henegouwen": "M108,645 101,643 94,618 104,613 108,617 117,615 119,611 130,606 124,598 124,596 142,589 147,592 150,610 134,615 127,620 121,626 112,642 108,645ZM255,746 236,737 227,728 225,722 225,706 216,679 214,665 218,657 215,645 212,641 204,639 201,636 193,619 211,610 224,618 237,616 243,625 243,632 250,637 255,639 257,635 271,620 285,610 296,615 308,611 310,626 331,627 339,633 352,608 361,603 364,610 378,604 383,619 395,618 399,622 417,618 420,627 418,635 419,640 424,646 430,648 449,649 456,644 461,646 469,642 471,645 475,637 488,640 482,642 481,648 481,666 484,674 490,677 497,676 506,662 510,661 516,669 514,679 531,683 529,693 539,695 547,707 556,707 555,719 563,710 581,708 584,712 598,712 599,714 598,726 609,721 608,725 613,727 632,720 626,744 637,741 635,745 639,751 634,762 630,763 633,766 630,769 644,777 639,787 634,789 641,796 633,809 635,827 614,831 608,823 600,824 593,835 576,833 574,842 568,842 564,849 554,850 541,859 546,866 558,872 560,872 566,866 572,867 577,870 573,886 576,893 564,902 576,923 572,931 572,951 574,959 579,960 581,986 590,1004 585,1017 539,1004 515,1007 494,997 496,997 494,982 492,982 495,972 503,964 518,955 518,952 514,943 509,922 506,921 496,924 492,922 492,913 501,881 505,876 515,867 516,862 510,855 503,851 499,853 500,859 497,862 492,859 483,841 470,831 460,820 454,817 447,817 427,826 420,826 403,816 390,815 377,816 373,817 370,820 362,835 360,836 359,839 348,829 345,809 345,786 342,767 337,758 331,752 324,749 317,747 297,747 294,744 297,739 297,735 295,732 291,731 286,731 276,740 262,745 255,746Z",
  "namen": "M711,914 707,913 706,906 697,910 664,943 662,952 664,961 661,976 656,990 653,992 640,994 597,1016 585,1017 590,1004 581,986 579,960 574,959 572,951 572,931 576,923 564,902 576,893 573,886 577,870 572,867 566,866 560,872 558,872 546,866 541,859 554,850 564,849 568,842 574,842 576,833 593,835 600,824 608,823 614,831 635,827 633,809 641,796 634,789 639,787 644,777 630,769 633,766 630,763 634,762 639,751 635,745 637,741 626,744 632,720 630,711 636,707 641,706 652,710 659,709 656,694 659,688 662,688 671,694 672,689 680,686 682,696 695,691 698,696 697,691 699,689 732,680 732,677 740,678 748,669 757,671 756,683 771,697 779,720 774,725 791,726 795,737 800,738 807,734 803,738 805,746 811,745 810,750 813,755 824,751 830,758 836,771 831,780 835,787 850,791 850,800 854,806 871,794 884,799 887,805 881,814 885,820 868,832 871,835 874,829 882,829 885,837 885,844 876,853 854,867 851,863 847,863 841,868 841,874 832,873 827,877 839,884 835,889 839,889 838,894 849,907 847,915 838,918 846,926 844,931 836,930 827,936 821,937 792,940 785,937 783,924 779,942 781,945 778,953 768,964 765,965 762,962 760,970 754,969 762,977 766,993 769,994 782,992 785,998 794,1003 793,1014 800,1021 784,1027 776,1035 781,1040 758,1057 757,1061 759,1070 755,1072 753,1083 747,1084 727,1090 719,1088 716,1085 716,1066 712,1056 719,1037 719,1027 715,1018 700,1011 696,1005 697,997 709,967 709,953 715,940 717,940 720,943 723,916 720,912 711,914Z",
  "luxemburg": "M822,1139 815,1137 805,1128 788,1105 777,1102 771,1098 759,1086 753,1083 755,1072 759,1070 757,1061 758,1057 781,1040 776,1035 784,1027 800,1021 793,1014 794,1003 785,998 782,992 769,994 766,993 762,977 754,969 760,970 762,962 765,965 768,964 778,953 781,945 779,942 783,924 785,937 792,940 821,937 827,936 836,930 844,931 846,926 838,918 847,915 849,907 838,894 839,889 835,889 839,884 827,877 832,873 841,874 841,868 847,863 851,863 854,867 876,853 885,844 885,837 882,829 874,829 871,835 868,832 885,820 881,814 887,805 884,799 895,789 889,778 890,775 895,774 908,785 921,777 923,786 929,787 928,792 929,793 934,794 945,789 962,805 972,804 971,810 986,810 981,822 981,828 986,836 995,838 986,856 1005,853 1010,855 1012,860 1014,855 1034,852 1036,847 1025,846 1032,829 1026,824 1029,815 1066,823 1067,827 1077,832 1075,878 1077,883 1083,885 1079,889 1081,896 1080,911 1077,910 1072,899 1068,903 1061,904 1058,908 1055,922 1050,927 1038,932 1033,937 1031,951 1023,961 1022,975 1014,981 1012,983 1011,990 1015,995 1011,1002 1009,1004 1002,1007 1000,1010 984,1042 995,1049 998,1053 990,1053 988,1060 991,1063 987,1065 986,1070 988,1082 992,1087 998,1089 1004,1095 1011,1110 1013,1120 1021,1124 1026,1124 1029,1130 1026,1134 1024,1143 1025,1147 1027,1148 1033,1149 1036,1151 1037,1158 1036,1162 1030,1168 1024,1184 1020,1188 1025,1191 1022,1198 1015,1206 1008,1210 994,1204 991,1206 987,1211 983,1213 963,1207 955,1211 951,1216 950,1221 942,1221 933,1217 911,1230 904,1229 902,1224 904,1210 902,1206 887,1178 882,1173 867,1167 863,1173 855,1173 853,1166 854,1160 858,1156 856,1149 843,1135 836,1135 822,1139Z",
  "luik": "M1085,912 1080,911 1081,896 1079,889 1083,885 1077,883 1075,878 1077,832 1067,827 1066,823 1029,815 1026,824 1032,829 1025,846 1036,847 1034,852 1014,855 1012,860 1010,855 1005,853 986,856 995,838 986,836 981,828 981,822 986,810 971,810 972,804 962,805 945,789 934,794 929,793 928,792 929,787 923,786 921,777 908,785 895,774 890,775 889,778 895,789 884,799 871,794 854,806 850,800 850,791 835,787 831,780 836,771 830,758 824,751 813,755 810,750 811,745 805,746 803,738 807,734 800,738 795,737 791,726 774,725 779,720 771,697 756,683 757,671 763,660 763,645 768,642 760,631 768,627 769,618 776,622 776,631 781,638 786,640 794,638 815,645 819,640 815,632 834,634 836,629 838,635 848,629 858,634 860,629 866,623 880,618 884,620 888,630 896,633 903,632 906,624 912,630 917,629 925,622 925,614 951,606 967,591 980,597 976,614 985,617 988,617 990,615 995,620 1003,618 1017,636 1028,634 1035,638 1038,637 1045,626 1039,618 1065,620 1071,619 1071,622 1076,625 1075,635 1076,639 1081,640 1093,636 1098,637 1104,643 1123,671 1119,674 1122,681 1129,684 1150,685 1151,688 1145,698 1128,710 1123,719 1128,726 1125,730 1126,732 1132,733 1129,737 1137,747 1140,748 1152,743 1158,747 1177,750 1174,753 1173,757 1176,767 1178,771 1182,773 1182,781 1177,799 1178,805 1188,824 1189,831 1185,835 1177,836 1166,834 1162,836 1156,845 1156,850 1157,854 1151,859 1132,866 1129,871 1122,876 1118,880 1123,885 1124,890 1124,896 1122,900 1120,902 1114,902 1111,904 1109,913 1112,916 1113,919 1109,926 1105,924 1103,911 1099,907 1097,907 1092,911 1085,912Z",
  "nederlands-limburg": "M1056,133 1054,135 1054,140 1057,142 1066,141 1080,151 1076,165 1083,174 1104,183 1098,201 1100,207 1120,235 1133,249 1137,274 1133,303 1137,308 1133,329 1130,333 1119,342 1103,371 1093,384 1090,394 1090,405 1092,414 1099,418 1114,407 1122,410 1112,417 1119,423 1114,429 1096,438 1068,461 1063,465 1057,478 1054,482 1048,483 1040,474 1036,472 1027,476 1029,488 1034,502 1034,514 1050,508 1063,511 1074,510 1075,512 1072,521 1073,531 1083,539 1093,542 1090,550 1092,560 1090,569 1087,573 1080,572 1076,575 1073,580 1074,588 1072,594 1068,598 1063,597 1064,603 1072,613 1071,619 1065,620 1043,619 1036,617 1009,618 999,609 996,607 988,617 985,617 976,614 980,597 968,592 961,587 956,580 956,569 978,544 987,540 1000,517 994,515 987,517 999,497 1004,486 1000,480 1002,469 1005,467 1008,470 1010,467 1015,457 1012,450 1019,450 1025,447 1018,439 1019,434 1023,429 1020,421 1015,420 1005,423 994,411 989,408 967,410 957,401 939,396 934,391 946,387 949,387 954,384 955,381 958,364 972,343 1034,325 1053,309 1045,294 1034,279 1027,251 1023,221 1034,222 1049,226 1058,224 1073,219 1083,225 1088,221 1088,217 1081,195 1075,185 1067,177 1069,173 1065,167 1060,150 1056,146 1043,145 1038,142 1036,136 1037,130 1030,127 1030,120 1038,118 1047,129 1055,134 1056,133Z",
  "zeeland": "M283,382 273,381 264,377 257,369 252,356 254,333 251,314 301,298 306,295 310,294 330,306 360,315 370,324 377,326 389,326 401,330 409,329 439,316 443,311 445,301 448,297 454,297 462,300 466,303 474,316 485,319 491,322 501,323 509,313 515,314 521,318 517,336 505,352 490,364 451,383 437,394 430,397 393,397 390,395 385,390 385,379 383,373 377,369 340,357 332,356 302,360 299,364 298,380 283,382ZM540,317 534,317 532,316 530,310 529,295 525,293 522,298 515,300 487,299 474,293 457,278 452,276 439,275 435,278 422,300 418,302 406,303 399,306 396,305 387,296 369,287 356,276 352,275 339,280 332,280 314,276 309,273 296,253 286,244 282,239 281,231 285,227 316,207 400,198 407,199 416,207 421,213 423,220 413,226 413,229 443,232 458,238 470,249 481,274 485,280 493,282 509,280 515,283 521,281 535,280 536,288 534,293 535,308 538,310 540,317ZM524,244 513,242 500,236 481,236 474,232 449,209 465,202 474,199 501,201 510,203 517,209 526,220 528,226 528,232 524,244ZM510,196 495,195 489,190 487,182 493,176 514,186 510,196ZM464,163 477,166 483,170 484,178 480,183 470,189 446,193 440,193 429,189 422,184 417,171 412,168 400,163 394,156 389,156 380,166 366,167 360,165 356,159 356,144 368,137 395,132 400,133 404,135 434,136 441,137 446,141 464,163Z",
  "oost-vlaanderen": "M266,378 273,381 283,382 298,380 299,364 302,360 332,356 340,357 377,369 383,373 385,379 385,390 390,395 393,397 430,397 437,394 451,383 490,364 505,352 517,336 521,318 527,323 532,337 543,348 548,356 547,362 542,371 549,392 546,394 554,405 555,411 556,414 555,425 551,433 538,437 520,438 510,446 509,448 510,455 514,470 511,476 519,480 525,475 527,478 520,502 513,505 503,502 498,511 503,525 502,531 495,536 481,530 484,540 476,546 480,550 480,555 465,576 473,577 476,584 471,598 462,606 457,608 452,604 447,611 439,604 435,607 431,615 438,624 437,627 427,629 420,627 417,618 399,622 395,618 383,619 378,604 364,610 361,603 352,608 339,633 331,627 310,626 308,611 296,615 285,610 304,596 305,592 298,582 302,577 282,561 290,553 287,544 282,542 275,547 273,540 277,536 274,530 282,531 284,529 279,524 285,524 270,517 280,513 275,506 283,494 274,478 280,473 245,448 259,439 270,419 263,406 254,403 262,398 256,385 267,379 266,378Z",
  "noord-brabant": "M708,295 706,287 709,273 708,265 705,261 694,256 690,255 679,260 655,289 648,293 643,294 633,291 620,292 614,288 618,277 618,269 616,265 612,264 603,266 586,272 570,281 573,285 571,293 571,297 580,310 582,315 580,323 574,326 560,325 543,317 540,317 538,310 535,308 534,293 536,288 535,280 541,279 545,268 542,257 536,249 524,244 528,234 528,226 526,220 517,210 516,200 510,196 514,186 527,182 540,181 556,177 568,169 578,152 610,158 622,158 652,147 662,146 678,128 682,120 698,106 715,106 723,103 735,93 743,93 758,96 766,95 767,102 783,115 794,115 805,122 805,130 802,138 805,139 861,133 867,130 873,125 877,119 881,102 887,98 900,99 918,90 929,96 948,93 962,96 968,107 977,111 998,125 1030,127 1037,130 1036,136 1038,142 1043,145 1056,146 1060,150 1065,167 1069,173 1067,177 1075,185 1081,195 1088,217 1088,221 1083,225 1073,219 1058,224 1049,226 1034,222 1023,221 1027,251 1034,279 1045,294 1053,309 1034,325 972,343 958,364 955,381 954,384 949,387 946,387 934,391 932,390 929,369 923,362 916,357 909,357 890,369 883,371 847,369 835,372 830,371 829,354 824,347 806,347 801,344 795,326 784,315 782,310 783,299 786,291 788,283 781,272 771,265 767,266 761,279 757,287 750,297 742,304 735,306 717,299 696,298 689,296 691,290 694,289 708,295Z",
  "antwerpen": "M690,255 700,258 705,261 708,265 709,273 706,287 708,295 694,289 691,290 689,296 696,298 717,299 735,306 742,304 750,297 761,279 767,266 771,265 781,272 788,283 786,291 783,299 782,310 784,315 795,326 801,344 806,347 824,347 829,354 830,371 837,372 833,375 830,394 843,405 844,425 836,432 826,429 819,439 803,440 791,456 766,460 766,467 757,480 753,474 747,475 735,480 726,487 723,485 707,492 703,489 697,478 687,485 680,484 668,497 672,489 663,485 641,491 637,501 632,501 622,495 616,500 606,492 600,501 593,494 575,498 573,491 567,489 570,482 561,488 559,487 561,484 545,477 538,476 527,478 525,475 519,480 515,479 511,476 514,470 510,455 509,448 510,446 520,438 538,437 551,433 555,425 556,414 554,405 546,394 549,392 542,371 544,367 548,365 551,362 555,353 542,346 540,326 534,317 543,317 560,325 574,326 580,323 582,315 580,310 571,297 571,293 573,285 570,281 586,272 603,266 612,264 616,265 618,269 618,277 614,288 620,292 633,291 643,294 648,293 655,289 679,260 690,255Z",
  "limburg": "M934,391 939,396 957,401 967,410 989,408 994,411 1005,423 1015,420 1020,421 1023,429 1019,434 1018,439 1025,447 1019,450 1012,450 1015,457 1010,467 1008,470 1005,467 1002,469 1000,480 1004,486 999,497 987,517 994,515 1000,517 987,540 978,544 956,569 956,580 961,587 967,591 951,606 925,614 925,622 917,629 912,630 906,624 903,632 896,633 888,630 884,620 880,618 866,623 860,629 858,634 848,629 838,635 836,629 834,634 815,632 819,640 815,645 794,638 800,626 794,622 798,612 796,603 810,589 803,586 805,570 810,556 816,558 818,556 821,543 816,539 805,539 804,535 792,540 787,535 782,537 780,535 776,525 788,514 788,503 801,497 799,486 802,485 804,489 812,486 803,475 797,472 788,473 788,485 782,489 776,485 770,487 765,477 757,480 766,467 766,460 791,456 803,440 819,439 826,429 836,432 844,425 843,405 830,394 833,375 837,372 847,369 883,371 890,369 909,357 916,357 923,362 929,369 932,390 934,391ZM996,607 999,609 1009,618 1036,617 1039,618 1045,626 1038,637 1035,638 1028,634 1017,636 1003,618 995,620 991,616 990,615 996,607Z",
  "brussel": "M601,597 576,610 570,612 563,611 554,605 546,587 540,590 529,584 533,577 540,575 542,567 539,561 545,550 556,544 570,546 578,539 583,543 588,551 588,556 583,561 595,569 600,584 594,585 591,589 601,597Z",
  "vlaams-brabant": "M484,640 475,637 471,645 469,642 461,646 456,644 449,649 430,648 424,646 419,640 418,635 420,627 427,629 437,627 438,624 431,615 435,607 439,604 447,611 452,604 457,608 462,606 471,598 476,584 473,577 465,576 480,555 480,550 476,546 484,540 481,530 495,536 502,531 503,525 498,511 503,502 513,505 520,502 527,478 538,476 545,477 561,484 559,487 561,488 570,482 567,489 573,491 575,498 593,494 600,501 606,492 616,500 622,495 632,501 637,501 641,491 663,485 672,489 668,497 680,484 687,485 697,478 703,489 707,492 723,485 726,487 735,480 747,475 753,474 757,480 765,477 770,487 776,485 782,489 788,485 788,473 797,472 803,475 812,486 804,489 802,485 799,486 801,497 788,503 788,514 776,525 780,535 782,537 787,535 792,540 804,535 805,539 816,539 821,543 818,556 816,558 810,556 805,570 803,586 810,589 796,603 798,612 794,622 800,626 794,638 786,640 781,638 776,631 776,622 757,609 742,621 737,621 733,618 734,609 711,612 712,606 705,606 698,595 685,590 677,593 674,599 673,596 667,599 651,595 650,607 656,615 650,622 639,622 638,612 630,620 617,623 616,629 606,623 605,621 606,615 602,615 595,617 583,625 569,628 567,635 561,635 555,627 553,629 556,634 549,634 548,642 546,644 542,646 533,643 527,647 517,639 509,639 502,630 499,628 496,630 494,635 486,635 484,640ZM601,597 591,589 594,585 600,584 595,569 583,561 588,556 588,551 583,543 578,539 570,546 556,544 545,550 539,561 542,567 540,575 533,577 529,584 540,590 546,587 554,605 563,611 570,612 576,610 601,597Z",
  "waals-brabant": "M484,640 486,635 494,635 496,630 499,628 502,630 509,639 517,639 527,647 533,643 542,646 546,644 548,642 549,634 556,634 553,629 555,627 561,635 567,635 569,628 583,625 595,617 602,615 606,615 605,621 606,623 616,629 617,623 630,620 638,612 639,622 650,622 656,615 650,607 651,595 667,599 673,596 674,599 677,593 685,590 698,595 705,606 712,606 711,612 734,609 733,618 737,621 742,621 757,609 769,618 768,627 760,631 768,642 763,645 763,660 757,671 748,669 740,678 732,677 732,680 699,689 697,691 698,696 695,691 682,696 680,686 672,689 671,694 662,688 659,688 656,694 659,709 652,710 641,706 636,707 630,711 632,720 613,727 608,725 609,721 598,726 599,714 598,712 584,712 581,708 563,710 555,719 556,707 547,707 539,695 529,693 531,683 514,679 516,669 510,661 506,662 497,676 490,677 484,674 481,666 481,648 482,642 488,640 484,640Z"
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/home-v3/V3Regio.tsx");
const bySlug = (slug) => {
  const r = REGIO_ROUTES.find((x) => x.slug === slug);
  const pin = kaartVoor({ pin: r.pin, metNederland: true }).pin;
  return { name: r.name, pin, towns: r.towns, path: r.path, slug };
};
const GROEPEN = [
  {
    /* De zichtbare groepsnaam staat in `COPY.groepen`, in dezelfde volgorde. */
    naam: "Vlaanderen en Brussel",
    regios: ["west-vlaanderen", "oost-vlaanderen", "antwerpen", "vlaams-brabant", "brussel", "limburg"].map(bySlug),
    /** Opent op Antwerpen, de provincie van het magazijn. */
    start: 2
  },
  {
    naam: "Wallonië",
    regios: ["henegouwen", "waals-brabant", "namen", "luik", "luxemburg"].map(bySlug),
    start: 0
  },
  {
    naam: "Nederland",
    regios: ["zeeland", "noord-brabant", "nederlands-limburg"].map(bySlug),
    start: 0
  }
];
const ALLE = GROEPEN.flatMap((g) => g.regios);
const NEDERLAND = new Set(GROEPEN[2].regios.map((r) => r.slug));
const FRANSTALIG = /* @__PURE__ */ new Set(["brussel", ...GROEPEN[1].regios.map((r) => r.slug)]);
function regioNaam(r, taal) {
  if (taal === "en") return PROVINCIE_EN[r.slug]?.naam ?? r.name;
  if (taal !== "fr") return r.name;
  const bron = REGIO_ROUTES.find((x) => x.slug === r.slug);
  return bron?.nameFr ?? PROVINCIE_FR[r.slug]?.naam ?? r.name;
}
function plaatsNaam(town, regioSlug, taal) {
  if (taal === "en" && !FRANSTALIG.has(regioSlug)) return PLAATS_EN[town] ?? town;
  if (taal === "nl" || NEDERLAND.has(regioSlug)) return town;
  const eigen = gemeenteVanPlaats(town);
  if (eigen?.nameFr && eigen.name === town) return eigen.nameFr;
  const haakjes = /^.+ \((.+)\)$/.exec(town);
  return haakjes ? haakjes[1] : town;
}
const V3Regio = () => {
  const t = useCopy(COPY$g);
  const lp = useLokaalPad();
  const taal = useTaal();
  const naam = (r) => regioNaam(r, taal);
  const inRegio = (r) => t.inRegio(r.slug, naam(r));
  const [groep, setGroep] = useState(0);
  const REGIONS = GROEPEN[groep].regios;
  const [active, setActive] = useState(GROEPEN[0].start);
  const [streek, setStreek] = useState(0);
  const region = REGIONS[active];
  const plaats = (town) => plaatsNaam(town, region.slug, taal);
  const streken = STREKEN_PER_REGIO[region.slug] ?? [];
  const actieveStreek = streken[Math.min(streek, streken.length - 1)];
  const plaatsen = actieveStreek ? actieveStreek.gemeenten : region.towns;
  const kiesGroep = (g) => {
    setGroep(g);
    setActive(GROEPEN[g].start);
    setStreek(0);
  };
  const kiesRegio = (i) => {
    setActive(i);
    setStreek(0);
  };
  return /* @__PURE__ */ jsx("section", { className: "regio", id: "regio", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
    /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
      /* @__PURE__ */ jsx("span", { className: "kick", children: t.kick }),
      /* @__PURE__ */ jsx("h2", { className: "sec", children: t.h2 }),
      /* @__PURE__ */ jsx("p", { className: "lede", children: t.lede })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "rg-streken rg-landen", role: "tablist", "aria-label": t.gebied, children: GROEPEN.map((g, i) => /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        role: "tab",
        "aria-selected": i === groep,
        className: i === groep ? "actief" : void 0,
        onClick: () => kiesGroep(i),
        children: t.groepen[i] ?? g.naam
      },
      g.naam
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "regio-grid", children: [
      /* @__PURE__ */ jsxs("div", { className: "rm-panel", children: [
        /* @__PURE__ */ jsx(
          "svg",
          {
            className: "rm-kaart",
            viewBox: `0 0 ${KAART_BREEDTE} ${KAART_HOOGTE}`,
            "aria-hidden": "true",
            focusable: "false",
            children: Object.entries(PROVINCIE_PADEN).map(([slug, d]) => /* @__PURE__ */ jsx("path", { d, fillRule: "evenodd", className: slug === region.slug ? "actief" : void 0 }, slug))
          }
        ),
        REGIONS.map(
          (item, i) => i === active ? /* @__PURE__ */ jsxs(
            Link,
            {
              className: "pin active",
              style: item.pin,
              to: lp(item.path),
              "aria-label": t.pinLabel(inRegio(item)),
              children: [
                /* @__PURE__ */ jsx("b", {}),
                naam(item),
                /* @__PURE__ */ jsx(ArrowRightIcon, { size: 12 })
              ]
            },
            item.name
          ) : /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              className: `pin${i === active ? " active" : ""}`,
              style: item.pin,
              onClick: () => kiesRegio(i),
              children: [
                /* @__PURE__ */ jsx("b", {}),
                naam(item)
              ]
            },
            item.name
          )
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "regio-info", children: [
        /* @__PURE__ */ jsx("h3", { id: "rgName", children: /* @__PURE__ */ jsxs(Link, { to: lp(region.path), children: [
          naam(region),
          /* @__PURE__ */ jsx(ArrowRightIcon, { size: 15 })
        ] }) }),
        streken.length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("p", { className: "rg-sub", children: t.kiesStreek(naam(region)) }),
          /* @__PURE__ */ jsx("div", { className: "rg-streken", role: "tablist", "aria-label": t.strekenIn(naam(region)), children: streken.map((st, i) => /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              role: "tab",
              id: `rgStreek-${i}`,
              "aria-selected": i === Math.min(streek, streken.length - 1),
              "aria-controls": "rgChips",
              className: i === Math.min(streek, streken.length - 1) ? "actief" : void 0,
              onClick: () => setStreek(i),
              children: taal === "fr" && STREEK_FR[st.naam] || taal === "en" && STREEK_EN[st.naam] || st.naam
            },
            st.naam
          )) }),
          actieveStreek && /* @__PURE__ */ jsx("p", { className: "rg-kenmerk", children: t.kenmerk(actieveStreek.kenmerk, actieveStreek.gemeenten.slice(0, 3).map(plaats)) })
        ] }) : /* @__PURE__ */ jsx("p", { className: "rg-sub", children: t.greep }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "rg-chips",
            id: "rgChips",
            role: streken.length > 0 ? "tabpanel" : void 0,
            "aria-labelledby": streken.length > 0 ? `rgStreek-${Math.min(streek, streken.length - 1)}` : void 0,
            children: plaatsen.map((town) => {
              const eigen = gemeenteVanPlaats(town);
              const doel = eigen?.path ?? region.path;
              return /* @__PURE__ */ jsx(
                Link,
                {
                  to: lp(doel),
                  "aria-label": eigen ? t.chipEigen(plaats(town)) : t.chipRegio(plaats(town), inRegio(region)),
                  children: plaats(town)
                },
                town
              );
            })
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "rg-note", children: t.noot }),
        /* @__PURE__ */ jsxs("div", { className: "rg-actions", children: [
          /* @__PURE__ */ jsxs(Link, { className: "btn btn-red", to: lp(region.path), children: [
            t.huren(inRegio(region)),
            /* @__PURE__ */ jsx(ArrowRightIcon, { size: 14 })
          ] }),
          /* @__PURE__ */ jsxs(Link, { className: "btn btn-out", to: lp("/verhuur/calculator"), children: [
            t.calculator,
            /* @__PURE__ */ jsx(ArrowRightIcon, { size: 14 })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("nav", { className: "rg-links", "aria-label": t.werkgebied, children: [
      /* @__PURE__ */ jsx("span", { children: t.hurenIn }),
      ALLE.map((r) => /* @__PURE__ */ jsx(Link, { to: lp(r.path), children: naam(r) }, r.name))
    ] })
  ] }) });
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/home-v3/V3Pay.tsx");
const ICONS$1 = [
  /* @__PURE__ */ jsx(CardIcon, {}, "kaart"),
  /* @__PURE__ */ jsx(CalendarCheckIcon, {}, "kalender"),
  /* @__PURE__ */ jsx(RefreshIcon, {}, "verlengen")
];
const voorschotFr = formatEuro(DEPOSIT_GROSS, "fr", Number.isInteger(DEPOSIT_GROSS) ? 0 : 2);
const voorschotEn = formatEuro(DEPOSIT_GROSS, "en", Number.isInteger(DEPOSIT_GROSS) ? 0 : 2);
const COPY$4 = {
  nl: {
    cards: [
      {
        title: "Twee manieren om te betalen",
        body: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Betaal alles online en krijg ",
          /* @__PURE__ */ jsx("b", { children: "5% korting" }),
          " op uw pakket, met uw factuur meteen in uw mailbox. Of bevestig met € 50 en betaal de rest bij levering."
        ] })
      },
      {
        title: "Installatie zelf inplannen",
        body: "Kies bij uw boeking meteen de leverdatum en het tijdslot dat u past. U ontvangt direct uw bevestiging per e-mail."
      },
      {
        title: "Verlengen of stoppen met één klik",
        body: "Uw droging beheert u online: verleng wanneer nodig of plan de ophaling in zodra alles droog gemeten is."
      }
    ],
    notes: [
      "5% korting bij volledig online betalen",
      "Factuur direct in uw mailbox",
      "Of € 50 bevestiging + rest bij levering"
    ],
    kick: "Volledig digitaal",
    h2: "Boeken, betalen en plannen: alles online geregeld.",
    lede: "Geen offertes afwachten, geen heen-en-weer gebel. U regelt uw volledige droging digitaal, van berekening tot betaling en het inplannen van de installatie.",
    alt: "Ouder koppel regelt de droging online met laptop en bankkaart"
  },
  fr: {
    cards: [
      {
        title: "Deux façons de payer",
        body: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Payez tout en ligne et obtenez ",
          /* @__PURE__ */ jsx("b", { children: "5 % de réduction" }),
          " sur votre pack, avec votre facture directement dans votre boîte mail. Ou confirmez avec ",
          voorschotFr,
          " et payez le reste à la livraison."
        ] })
      },
      {
        title: "Planifiez vous-même l'installation",
        body: "Lors de votre réservation, choisissez directement la date de livraison et le créneau qui vous conviennent. Vous recevez immédiatement votre confirmation par e-mail."
      },
      {
        title: "Prolonger ou arrêter en un clic",
        body: "Vous gérez votre séchage en ligne : prolongez si nécessaire ou planifiez l'enlèvement dès que tout est mesuré sec."
      }
    ],
    notes: [
      "5 % de réduction en payant tout en ligne",
      "Facture directement dans votre boîte mail",
      `Ou ${voorschotFr} de confirmation + le reste à la livraison`
    ],
    kick: "Entièrement numérique",
    h2: "Réserver, payer et planifier : tout se règle en ligne.",
    lede: "Pas besoin d'attendre des devis ni de multiplier les appels. Vous gérez tout votre séchage en ligne, du calcul au paiement et à la planification de l'installation.",
    alt: "Couple âgé qui organise le séchage en ligne avec un ordinateur portable et une carte bancaire"
  },
  en: {
    cards: [
      {
        title: "Two ways to pay",
        body: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Pay everything online and get ",
          /* @__PURE__ */ jsx("b", { children: "5% off" }),
          " your package, with your invoice straight in your inbox. Or confirm with ",
          voorschotEn,
          " and pay the rest on delivery."
        ] })
      },
      {
        title: "Schedule the installation yourself",
        body: "When you book, choose the delivery date and time slot that suit you straight away. You receive your confirmation by email immediately."
      },
      {
        title: "Extend or stop with one click",
        body: "You manage your drying online: extend when needed or schedule the collection as soon as everything is measured dry."
      }
    ],
    notes: [
      "5% off when you pay in full online",
      "Invoice straight in your inbox",
      `Or ${voorschotEn} to confirm + the rest on delivery`
    ],
    kick: "Fully digital",
    h2: "Booking, paying and scheduling: all sorted online.",
    lede: "No waiting for quotes, no back-and-forth phone calls. You arrange your entire drying digitally, from calculation to payment and scheduling the installation.",
    alt: "Older couple arranging the drying online with a laptop and a bank card"
  }
};
const V3Pay = () => {
  const t = useCopy(COPY$4);
  return /* @__PURE__ */ jsx("section", { className: "pay", id: "betalen", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
    /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
      /* @__PURE__ */ jsx("span", { className: "kick", children: t.kick }),
      /* @__PURE__ */ jsx("h2", { className: "sec", children: t.h2 }),
      /* @__PURE__ */ jsx("p", { className: "lede", children: t.lede })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "pay-grid", children: t.cards.map((card, i) => /* @__PURE__ */ jsxs("div", { className: "pc", children: [
      /* @__PURE__ */ jsx("div", { className: "pci", children: ICONS$1[i] }),
      /* @__PURE__ */ jsx("h3", { children: card.title }),
      /* @__PURE__ */ jsx("p", { children: card.body })
    ] }, card.title)) }),
    /* @__PURE__ */ jsxs("div", { className: "pay-bottom", children: [
      /* @__PURE__ */ jsx("div", { className: "pay-note", children: t.notes.map((note) => /* @__PURE__ */ jsxs("span", { children: [
        /* @__PURE__ */ jsx(CheckIcon, { size: 14, strokeWidth: 2.4 }),
        " ",
        note
      ] }, note)) }),
      /* @__PURE__ */ jsx(
        "img",
        {
          className: "pay-couple",
          src: "/vernast/koppel-digitaal.webp",
          alt: t.alt,
          width: 1440,
          height: 961,
          loading: "lazy"
        }
      )
    ] })
  ] }) });
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/home-v3/V3Pickup.tsx");
const ICONS = [
  /* @__PURE__ */ jsx(CalendarCheckIcon, { size: 19, height: 16 }, "kalender"),
  /* @__PURE__ */ jsx(MailIcon, { size: 19, strokeWidth: 1.8 }, "mail"),
  /* @__PURE__ */ jsx(PinIcon, {}, "pin"),
  /* @__PURE__ */ jsx(RefreshIcon, { size: 19 }, "retour")
];
const COPY$3 = {
  nl: {
    steps: [
      {
        title: "Reserveer online",
        // Reserveren kostte hier lang niets vooraf. Dat klopt niet meer: een
        // afhaalreservatie legt echte toestellen apart, dus ze wordt bevestigd met
        // hetzelfde voorschot als een pakket — of meteen volledig betaald.
        body: `Kies uw toestel, huurperiode en afhaalmoment (bv. tussen 08:00 en 10:00). U betaalt volledig online met 5% korting, of ${euroInt(DEPOSIT_GROSS)} voorschot.`,
        tag: "Stap 01, reservatie"
      },
      {
        title: "Bevestiging binnen het uur",
        body: "U ontvangt uw reservatiebevestiging met routebeschrijving en wat u meebrengt: enkel uw identiteitskaart en de bevestiging op uw telefoon.",
        tag: "Stap 02, bevestiging"
      },
      {
        title: "Afhalen langs de A12",
        body: "Uw toestel staat klaar aan ons afhaalpunt: Boomsesteenweg 12 / Unit 11, 2630 Aartselaar. Betaalde u een voorschot, dan scant u hier onze QR-code en rekent u af met Bancontact, kaart of Apple Pay. Wij laden mee in.",
        tag: "Stap 03, afhaling"
      },
      {
        title: "Terugbrengen, klaar",
        body: "Breng het toestel terug op het afgesproken moment, ma–vr tussen 08:00 en 17:00. Uw factuur staat dan al in uw mailbox.",
        tag: "Stap 04, retour"
      }
    ],
    kick: "Zelf afhalen",
    h2: "Liever zelf afhalen? Zo werkt het.",
    lede: "Losse toestellen haalt u zelf af aan ons afhaalpunt langs de A12 in Aartselaar, tegen lagere afhaalprijzen. Reserveren gaat online, betalen doet u vooraf of bij de afhaling.",
    zwaarB: "Sommige toestellen zijn zwaar. Til niet, laat leveren.",
    zwaarS: "Een professionele bouwdroger weegt al snel 30 tot 50 kg. Zelf tillen, zeker op een trap, is niet zonder risico. Bent u wat ouder of fysiek minder sterk? Kies dan een pakket met levering: wij dragen, plaatsen en stellen alles in. U hoeft niets te tillen.",
    zwaarBtn: "Bekijk pakketten met levering",
    zwaarAlt: "Oudere man met rugpijn na het tillen van een zwaar toestel"
  },
  fr: {
    steps: [
      {
        title: "Réservez en ligne",
        body: `Choisissez votre appareil, la période de location et le moment d'enlèvement (p. ex. entre 08:00 et 10:00). Vous payez tout en ligne avec 5 % de réduction, ou un acompte de ${formatEuro(DEPOSIT_GROSS, "fr", Number.isInteger(DEPOSIT_GROSS) ? 0 : 2)}.`,
        tag: "Étape 01, réservation"
      },
      {
        title: "Confirmation dans l'heure",
        body: "Vous recevez votre confirmation de réservation avec l'itinéraire et ce que vous devez apporter : uniquement votre carte d'identité et la confirmation sur votre téléphone.",
        tag: "Étape 02, confirmation"
      },
      {
        title: "Enlèvement le long de l'A12",
        body: "Votre appareil vous attend à notre point d'enlèvement : Boomsesteenweg 12 / Unit 11, 2630 Aartselaar. Si vous avez payé un acompte, vous scannez ici notre code QR et réglez par Bancontact, carte ou Apple Pay. Nous vous aidons à charger.",
        tag: "Étape 03, enlèvement"
      },
      {
        title: "Ramenez-le, c'est fini",
        body: "Ramenez l'appareil au moment convenu, du lundi au vendredi entre 08:00 et 17:00. Votre facture se trouve alors déjà dans votre boîte mail.",
        tag: "Étape 04, retour"
      }
    ],
    kick: "Enlèvement sur place",
    h2: "Vous préférez venir chercher l'appareil ? Voici comment faire.",
    lede: "Les appareils seuls s'enlèvent à notre point d'enlèvement le long de l'A12 à Aartselaar, à des prix d'enlèvement plus bas. La réservation se fait en ligne, le paiement à l'avance ou lors de l'enlèvement.",
    zwaarB: "Certains appareils sont lourds. Ne portez pas, faites livrer.",
    zwaarS: "Un déshumidificateur de chantier professionnel pèse vite 30 à 50 kg. Le porter vous-même, surtout dans un escalier, n'est pas sans risque. Vous êtes un peu plus âgé ou moins fort physiquement ? Choisissez alors un pack avec livraison : nous portons, installons et réglons tout. Vous n'avez rien à porter.",
    zwaarBtn: "Voir les packs avec livraison",
    zwaarAlt: "Homme âgé avec des douleurs au dos après avoir porté un appareil lourd"
  },
  en: {
    steps: [
      {
        title: "Book online",
        body: `Choose your unit, hire period and collection time (e.g. between 08:00 and 10:00). You pay in full online with a 5% discount, or a deposit of ${formatEuro(DEPOSIT_GROSS, "en", Number.isInteger(DEPOSIT_GROSS) ? 0 : 2)}.`,
        tag: "Step 01, booking"
      },
      {
        title: "Confirmation within the hour",
        body: "You receive your booking confirmation with directions and what to bring: just your ID card and the confirmation on your phone.",
        tag: "Step 02, confirmation"
      },
      {
        title: "Collect by the A12",
        body: "Your unit is ready at our collection point: Boomsesteenweg 12 / Unit 11, 2630 Aartselaar. If you paid a deposit, you scan our QR code here and pay by Bancontact, card or Apple Pay. We help you load up.",
        tag: "Step 03, collection"
      },
      {
        title: "Bring it back, done",
        body: "Return the unit at the agreed time, Mon–Fri between 08:00 and 17:00. Your invoice will already be in your inbox.",
        tag: "Step 04, return"
      }
    ],
    kick: "Collect it yourself",
    h2: "Rather collect it yourself? Here is how it works.",
    lede: "Individual units are collected from our collection point by the A12 in Aartselaar, at lower collection prices. Booking is online; you pay in advance or on collection.",
    zwaarB: "Some units are heavy. Do not lift, have it delivered.",
    zwaarS: "A professional construction dehumidifier easily weighs 30 to 50 kg. Lifting it yourself, especially on stairs, is not without risk. Are you a bit older or less physically strong? Then choose a package with delivery: we carry, set up and adjust everything. You do not have to lift a thing.",
    zwaarBtn: "View packages with delivery",
    zwaarAlt: "Older man with back pain after lifting a heavy unit"
  }
};
const V3Pickup = () => {
  const t = useCopy(COPY$3);
  const lp = useLokaalPad();
  return /* @__PURE__ */ jsx("section", { className: "why", id: "voordelen", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
    /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
      /* @__PURE__ */ jsx("span", { className: "kick", children: t.kick }),
      /* @__PURE__ */ jsx("h2", { className: "sec", children: t.h2 }),
      /* @__PURE__ */ jsx("p", { className: "lede", children: t.lede })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "why-grid", children: [
      t.steps.map((step, i) => /* @__PURE__ */ jsxs("div", { className: "wcard", children: [
        /* @__PURE__ */ jsx("div", { className: "wi", children: ICONS[i] }),
        /* @__PURE__ */ jsx("h3", { children: step.title }),
        /* @__PURE__ */ jsx("p", { children: step.body }),
        /* @__PURE__ */ jsx("span", { className: "wtag", children: step.tag })
      ] }, step.title)),
      /* @__PURE__ */ jsxs("div", { className: "wcard form", children: [
        /* @__PURE__ */ jsxs("div", { className: "wf-l", children: [
          /* @__PURE__ */ jsx("b", { children: t.zwaarB }),
          /* @__PURE__ */ jsx("span", { children: t.zwaarS }),
          /* @__PURE__ */ jsxs(Link, { className: "btn btn-white", to: lp("/verhuur/calculator"), children: [
            t.zwaarBtn,
            /* @__PURE__ */ jsx(ArrowRightIcon, { size: 14 })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "wf-men",
            src: "/vernast/oudere-man.webp",
            alt: t.zwaarAlt,
            width: 1360,
            height: 1440,
            loading: "lazy"
          }
        )
      ] })
    ] })
  ] }) });
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/home-v3/V3Reviews.tsx");
const DIENST_FR = {
  "Bouwdroger geïnstalleerd": "Déshumidificateur de chantier installé"
};
const MAAND_FR = {
  jan: "janv.",
  feb: "févr.",
  mrt: "mars",
  apr: "avr.",
  mei: "mai",
  jun: "juin",
  jul: "juil.",
  aug: "août",
  sep: "sept.",
  okt: "oct.",
  nov: "nov.",
  dec: "déc."
};
const DIENST_EN = {
  "Bouwdroger geïnstalleerd": "Construction dehumidifier installed"
};
const MAAND_EN = {
  jan: "Jan",
  feb: "Feb",
  mrt: "Mar",
  apr: "Apr",
  mei: "May",
  jun: "Jun",
  jul: "Jul",
  aug: "Aug",
  sep: "Sep",
  okt: "Oct",
  nov: "Nov",
  dec: "Dec"
};
const COPY$2 = {
  nl: {
    sterren: (rating) => `${rating} van de 5 sterren`,
    datum: (date) => date,
    dienst: (service) => service,
    via: "via",
    kick: "Wat klanten zeggen",
    h2: "Klanten gingen u voor.",
    lede: "Echte beoordelingen van Vernast, bij Google en Solvari. Onbewerkt, met naam en datum."
  },
  fr: {
    sterren: (rating) => `${rating} étoiles sur 5`,
    datum: (date) => {
      const [maand, jaar] = date.split(" ");
      return MAAND_FR[maand] ? `${MAAND_FR[maand]} ${jaar}` : date;
    },
    dienst: (service) => DIENST_FR[service] ?? service,
    via: "via",
    kick: "Ce que disent nos clients",
    h2: "D'autres clients vous ont précédé.",
    lede: "De vrais avis sur Vernast, sur Google et Solvari. Non retouchés, avec nom et date. Les avis sont affichés dans leur langue d'origine."
  },
  en: {
    sterren: (rating) => `${rating} out of 5 stars`,
    datum: (date) => {
      const [maand, jaar] = date.split(" ");
      return MAAND_EN[maand] ? `${MAAND_EN[maand]} ${jaar}` : date;
    },
    dienst: (service) => DIENST_EN[service] ?? service,
    via: "via",
    kick: "What customers say",
    h2: "Customers who went before you.",
    lede: "Genuine reviews of Vernast, on Google and Solvari. Unedited, with name and date. Reviews are shown in their original language."
  }
};
const Stars = ({ rating, size }) => {
  const t = useCopy(COPY$2);
  return /* @__PURE__ */ jsx("div", { className: "rv-stars", role: "img", "aria-label": t.sterren(rating), children: Array.from({ length: rating }).map((_, index) => /* @__PURE__ */ jsx(StarIcon, { size }, index)) });
};
const ReviewCard = ({ review }) => {
  const t = useCopy(COPY$2);
  return /* @__PURE__ */ jsxs("figure", { className: review.featured ? "rv-card rv-big" : "rv-card", children: [
    /* @__PURE__ */ jsxs("div", { className: "rv-head", children: [
      /* @__PURE__ */ jsx(Stars, { rating: review.rating, size: review.featured ? 16 : 14 }),
      review.source === "Google" ? /* @__PURE__ */ jsx(GoogleIcon, { size: review.featured ? 20 : 17 }) : /* @__PURE__ */ jsx("span", { className: "rv-src", children: review.source })
    ] }),
    /* @__PURE__ */ jsxs("blockquote", { children: [
      "“",
      review.text,
      "”"
    ] }),
    /* @__PURE__ */ jsxs("figcaption", { children: [
      /* @__PURE__ */ jsx("span", { className: "rv-av", "aria-hidden": "true", children: review.initials }),
      /* @__PURE__ */ jsxs("span", { className: "rv-who", children: [
        /* @__PURE__ */ jsx("b", { children: review.name }),
        /* @__PURE__ */ jsxs("small", { children: [
          review.service ? `${t.dienst(review.service)} · ` : "",
          t.datum(review.date),
          " · ",
          t.via,
          " ",
          review.source
        ] })
      ] })
    ] })
  ] });
};
const V3Reviews = () => {
  const t = useCopy(COPY$2);
  return /* @__PURE__ */ jsx("section", { className: "revs", id: "reviews", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
    /* @__PURE__ */ jsxs("div", { className: "sec-head mid", children: [
      /* @__PURE__ */ jsx("span", { className: "kick", children: t.kick }),
      /* @__PURE__ */ jsx("h2", { className: "sec", children: t.h2 }),
      /* @__PURE__ */ jsx("p", { className: "lede", children: t.lede })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "rv-grid", children: REVIEWS_LIST.map((review) => /* @__PURE__ */ jsx(ReviewCard, { review }, review.name)) })
  ] }) });
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/home-v3/V3Faq.tsx");
const QUESTIONS = [
  {
    q: "Hoe weet ik welk toestel ik nodig heb?",
    a: "Onze slimme Calculator geeft een eerste berekening op basis van volume, toepassing en situatie. Zo kiest u gerichter en sneller, en komt u meteen op de pagina met het juiste pakket en de prijs."
  },
  {
    q: "Hoelang duurt bouwdroging?",
    a: "Dat hangt af van het volume, het materiaal, de beginsituatie, de temperatuur en de gewenste eindtoestand. Actieve droging verloopt doorgaans aanzienlijk sneller dan natuurlijke droging, de Calculator geeft u een realistische inschatting."
  },
  {
    q: "Is levering inbegrepen?",
    a: "Ja. Levering, ophaling en installatie op gelijkvloers zijn standaard inbegrepen binnen de voorziene servicevoorwaarden, net als standaard toebehoren zoals verlengkabels."
  },
  {
    q: "Moet ik het waterreservoir zelf leegmaken?",
    a: "Niet altijd. Afhankelijk van het toestel en de situatie kan automatische waterafvoer voorzien worden, zodat het water rechtstreeks wegloopt en u niets hoeft te ledigen."
  },
  {
    q: "Kan ik verlengen als het nog niet droog is?",
    a: "Ja, verlengen is mogelijk met één klik. Zo blijft uw planning flexibel en loopt uw project niet vast op een te krap ingeschatte huurtermijn."
  },
  {
    q: "Kan ik ook spoedlevering aanvragen?",
    a: "Ja. Bij dringende schadegevallen of strakke planningen voorzien wij een spoedlevering."
  },
  {
    q: "Wat als ik een dossier nodig heb voor verzekering of expertise?",
    a: "In bepaalde situaties ondersteunen wij met aanvullende verslaggeving of technische documentatie voor uw dossier."
  },
  {
    q: "Is bouwdroging nuttig bij schimmel?",
    a: "Ja, bouwdroging speelt een belangrijke rol in het terugdringen van de vochtige omstandigheden die schimmelgroei bevorderen. Bij actieve schimmel moet uiteraard ook de oorzaak correct aangepakt worden, daarvoor staat Vernast Vochtbestrijding klaar."
  },
  {
    q: "Werkt een klassieke ontvochtiger ook in een kelder of koude ruimte?",
    a: "Dat hangt af van de temperatuur en de situatie. In koudere omstandigheden kan een andere techniek, zoals de Revolution adsorptiedroger, of extra verwarming nodig zijn."
  },
  {
    q: "Waarom moet een ruimte droog zijn voor afwerking?",
    a: "Omdat vochtige ondergronden problemen geven bij schilderwerken, vloeren, keukenplaatsing en andere afwerkingen: bladders, loskomende afwerking en schade aan kasten of plinten."
  }
];
const QUESTIONS_FR = [
  {
    q: "Comment savoir de quel appareil j'ai besoin ?",
    a: "Notre calculateur intelligent fait un premier calcul sur la base du volume, de l'application et de la situation. Vous choisissez ainsi de manière plus ciblée et plus rapide, et arrivez directement sur la page avec le bon pack et le prix."
  },
  {
    q: "Combien de temps dure un séchage de chantier ?",
    a: "Cela dépend du volume, du matériau, de la situation de départ, de la température et de l'état final souhaité. Un séchage actif est généralement nettement plus rapide qu'un séchage naturel, le calculateur vous donne une estimation réaliste."
  },
  {
    q: "La livraison est-elle comprise ?",
    a: "Oui. La livraison, l'enlèvement et l'installation au rez-de-chaussée sont inclus par défaut dans les conditions de service prévues, tout comme les accessoires standard comme les rallonges."
  },
  {
    q: "Dois-je vider moi-même le réservoir d'eau ?",
    a: "Pas toujours. Selon l'appareil et la situation, une évacuation automatique de l'eau peut être prévue, de sorte que l'eau s'écoule directement et que vous n'avez rien à vider."
  },
  {
    q: "Puis-je prolonger si ce n'est pas encore sec ?",
    a: "Oui, la prolongation est possible en un clic. Votre planning reste ainsi flexible et votre projet ne se bloque pas sur une durée de location estimée trop juste."
  },
  {
    q: "Puis-je aussi demander une livraison express ?",
    a: "Oui. Pour les sinistres urgents ou les plannings serrés, nous prévoyons une livraison express."
  },
  {
    q: "Et si j'ai besoin d'un dossier pour l'assurance ou une expertise ?",
    a: "Dans certaines situations, nous vous aidons avec un rapport complémentaire ou une documentation technique pour votre dossier."
  },
  {
    q: "Le séchage de chantier est-il utile en cas de moisissures ?",
    a: "Oui, le séchage de chantier joue un rôle important pour réduire les conditions humides qui favorisent le développement des moisissures. En cas de moisissures actives, la cause doit bien sûr aussi être traitée correctement, et Vernast Vochtbestrijding est là pour cela."
  },
  {
    q: "Un déshumidificateur classique fonctionne-t-il aussi dans une cave ou une pièce froide ?",
    a: "Cela dépend de la température et de la situation. Dans des conditions plus froides, une autre technique, comme le déshumidificateur à adsorption Revolution, ou un chauffage supplémentaire peut être nécessaire."
  },
  {
    q: "Pourquoi une pièce doit-elle être sèche avant les finitions ?",
    a: "Parce que les supports humides posent problème pour la peinture, les sols, la pose de cuisine et d'autres finitions : cloques, finitions qui se décollent et dégâts aux armoires ou aux plinthes."
  }
];
const QUESTIONS_EN = [
  {
    q: "How do I know which unit I need?",
    a: "Our smart Calculator gives a first calculation based on volume, application and situation. That way you choose more precisely and faster, and land straight on the page with the right package and price."
  },
  {
    q: "How long does building drying take?",
    a: "That depends on the volume, the material, the starting situation, the temperature and the desired end state. Active drying is generally considerably faster than natural drying, and the Calculator gives you a realistic estimate."
  },
  {
    q: "Is delivery included?",
    a: "Yes. Delivery, collection and ground-floor installation are included as standard within the stated service terms, as are standard accessories such as extension leads."
  },
  {
    q: "Do I have to empty the water tank myself?",
    a: "Not always. Depending on the unit and the situation, automatic water drainage can be provided, so the water runs straight away and you do not have to empty anything."
  },
  {
    q: "Can I extend if it is not dry yet?",
    a: "Yes, you can extend with one click. That keeps your schedule flexible and stops your project grinding to a halt on a hire period that was estimated too tightly."
  },
  {
    q: "Can I request express delivery?",
    a: "Yes. For urgent damage cases or tight schedules, we arrange an express delivery."
  },
  {
    q: "What if I need a file for insurance or an expert assessment?",
    a: "In certain situations we support you with additional reporting or technical documentation for your file."
  },
  {
    q: "Is building drying useful when there is mould?",
    a: "Yes, building drying plays an important role in reducing the damp conditions that encourage mould growth. With active mould the cause also has to be tackled properly, of course, and Vernast Vochtbestrijding is there for that."
  },
  {
    q: "Does a conventional dehumidifier also work in a cellar or cold room?",
    a: "That depends on the temperature and the situation. In colder conditions a different technique, such as the Revolution desiccant dehumidifier, or extra heating may be needed."
  },
  {
    q: "Why does a room need to be dry before finishing?",
    a: "Because damp surfaces cause problems with painting, flooring, kitchen fitting and other finishes: blistering, finishes coming loose and damage to cabinets or skirting boards."
  }
];
const COPY$1 = {
  nl: {
    vragen: QUESTIONS,
    kick: "Veelgestelde vragen",
    h2: "Alles wat u wilt weten.",
    helpH3: "Staat uw vraag er niet bij?",
    helpP: "Onze droogexperts helpen u meteen verder, met advies op maat van uw situatie.",
    bel: "Bel 03 689 90 65",
    online: "Stel uw vraag online"
  },
  fr: {
    vragen: QUESTIONS_FR,
    kick: "Questions fréquentes",
    h2: "Tout ce que vous voulez savoir.",
    helpH3: "Votre question n'y figure pas ?",
    helpP: "Nos experts en séchage vous aident immédiatement, avec un conseil adapté à votre situation.",
    bel: "Appelez le 03 689 90 65",
    online: "Posez votre question en ligne"
  },
  en: {
    vragen: QUESTIONS_EN,
    kick: "Frequently asked questions",
    h2: "Everything you want to know.",
    helpH3: "Is your question not listed?",
    helpP: "Our drying experts will help you straight away, with advice tailored to your situation.",
    bel: "Call +32 3 689 90 65",
    online: "Ask your question online"
  }
};
function useFaqVragen() {
  return useCopy(COPY$1).vragen;
}
const V3Faq = () => {
  const t = useCopy(COPY$1);
  return /* @__PURE__ */ jsx("section", { className: "faq", id: "faq", children: /* @__PURE__ */ jsxs("div", { className: "wrap faq-grid", children: [
    /* @__PURE__ */ jsxs("div", { className: "faq-side", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", style: { marginBottom: 0 }, children: [
        /* @__PURE__ */ jsx("span", { className: "kick", children: t.kick }),
        /* @__PURE__ */ jsx("h2", { className: "sec", children: t.h2 })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "faq-help", children: [
        /* @__PURE__ */ jsx("h3", { children: t.helpH3 }),
        /* @__PURE__ */ jsx("p", { children: t.helpP }),
        /* @__PURE__ */ jsxs("div", { className: "fh-btns", children: [
          /* @__PURE__ */ jsxs("a", { className: "fh-call", href: "tel:+3236899065", children: [
            /* @__PURE__ */ jsx(PhoneIcon, {}),
            " ",
            t.bel
          ] }),
          /* @__PURE__ */ jsx("a", { className: "fh-form", href: "#contact", children: t.online })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "faq-list", children: t.vragen.map((item, i) => /* @__PURE__ */ jsxs("details", { className: "q", open: i === 0, children: [
      /* @__PURE__ */ jsxs("summary", { children: [
        item.q,
        " ",
        /* @__PURE__ */ jsx("span", { className: "pl", children: "+" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "a", children: /* @__PURE__ */ jsx("p", { children: item.a }) })
    ] }, item.q)) })
  ] }) });
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/home-v3/V3Cta.tsx");
const SUBJECTS = [
  "droging_op_maat",
  "waterschade",
  "schimmel_geur",
  "offerte_prijs",
  "verzekeringsrapport",
  "andere_vraag"
];
const COPY = {
  nl: {
    subjects: {
      droging_op_maat: "Droging op maat",
      waterschade: "Waterschade",
      schimmel_geur: "Schimmel of geur",
      offerte_prijs: "Offerte of prijs",
      verzekeringsrapport: "Rapport voor verzekering",
      andere_vraag: "Andere vraag"
    },
    kick: "Klaar om te starten?",
    h2: "Uw woning drogen start hier.",
    intro: "Stel hieronder meteen uw vraag. Foto’s en documenten meesturen mag. Onze droogexperts antwoorden dezelfde werkdag.",
    stap1: "1. Uw gegevens",
    stap2: "2. Uw vraag",
    voornaam: "Voornaam",
    achternaam: "Achternaam",
    telefoon: "Telefoon",
    email: "E-mail",
    emailPh: "naam@voorbeeld.be",
    straat: "Straat",
    straatPh: "Straatnaam",
    nr: "Nr / bus",
    postcode: "Postcode",
    gemeente: "Gemeente",
    gemeentePh: "Bv. Aartselaar",
    volgende: "Volgende: uw vraag",
    onderwerp: "Waarover gaat uw vraag?",
    vraag: "Uw vraag",
    vraagPh: "Omschrijf kort uw situatie: welke ruimte, wat is er gebeurd, wanneer moet het droog zijn?",
    bijlagen: "Foto's of documenten toevoegen",
    bijlagenSub: "Foto's van de ruimte, plannen of verzekeringsdocumenten (pdf, jpg, png)",
    verwijder: "Verwijder",
    nietToegevoegd: (namen) => `Niet toegevoegd: ${namen}. Alleen jpg, png, webp, pdf of Word; foto's tot 30 MB, documenten tot 10 MB.`,
    terug: "← Terug",
    versturen: "Versturen…",
    verstuur: "Verstuur mijn vraag",
    klaarH3: "Uw vraag is verstuurd.",
    klaarP: "Bedankt! Een droogexpert neemt dezelfde werkdag contact met u op. Dringend? Bel",
    nietMee: (namen) => `Deze bijlagen konden niet mee: ${namen}. Mail ze gerust na naar`,
    fout: "Verzenden lukte niet. Probeer het opnieuw of bel 03 689 90 65.",
    foutVerbinding: "Verzenden lukte niet. Controleer uw verbinding en probeer opnieuw."
  },
  fr: {
    subjects: {
      droging_op_maat: "Séchage sur mesure",
      waterschade: "Dégâts des eaux",
      schimmel_geur: "Moisissures ou odeurs",
      offerte_prijs: "Devis ou prix",
      verzekeringsrapport: "Rapport pour l'assurance",
      andere_vraag: "Autre question"
    },
    kick: "Prêt à commencer ?",
    h2: "Le séchage de votre habitation commence ici.",
    intro: "Posez directement votre question ci-dessous. Vous pouvez joindre des photos et des documents. Nos experts en séchage répondent le jour ouvrable même.",
    stap1: "1. Vos coordonnées",
    stap2: "2. Votre question",
    voornaam: "Prénom",
    achternaam: "Nom",
    telefoon: "Téléphone",
    email: "E-mail",
    emailPh: "nom@exemple.be",
    straat: "Rue",
    straatPh: "Nom de rue",
    nr: "N° / boîte",
    postcode: "Code postal",
    gemeente: "Commune",
    gemeentePh: "P. ex. Aartselaar",
    volgende: "Suivant : votre question",
    onderwerp: "Sur quoi porte votre question ?",
    vraag: "Votre question",
    vraagPh: "Décrivez brièvement votre situation : quelle pièce, que s'est-il passé, pour quand cela doit-il être sec ?",
    bijlagen: "Ajouter des photos ou des documents",
    bijlagenSub: "Photos de la pièce, plans ou documents d'assurance (pdf, jpg, png)",
    verwijder: "Supprimer",
    nietToegevoegd: (namen) => `Non ajouté : ${namen}. Uniquement jpg, png, webp, pdf ou Word ; photos jusqu'à 30 Mo, documents jusqu'à 10 Mo.`,
    terug: "← Retour",
    versturen: "Envoi…",
    verstuur: "Envoyer ma question",
    klaarH3: "Votre question a été envoyée.",
    klaarP: "Merci ! Un expert en séchage vous contacte le jour ouvrable même. Urgent ? Appelez le",
    nietMee: (namen) => `Ces pièces jointes n'ont pas pu être envoyées : ${namen}. N'hésitez pas à les envoyer par e-mail à`,
    fout: "L'envoi n'a pas abouti. Réessayez ou appelez le 03 689 90 65.",
    foutVerbinding: "L'envoi n'a pas abouti. Vérifiez votre connexion et réessayez."
  },
  en: {
    subjects: {
      droging_op_maat: "Tailored drying",
      waterschade: "Water damage",
      schimmel_geur: "Mould or odour",
      offerte_prijs: "Quote or price",
      verzekeringsrapport: "Report for insurance",
      andere_vraag: "Other question"
    },
    kick: "Ready to start?",
    h2: "Drying your home starts here.",
    intro: "Ask your question below straight away. You are welcome to send photos and documents. Our drying experts reply the same working day.",
    stap1: "1. Your details",
    stap2: "2. Your question",
    voornaam: "First name",
    achternaam: "Surname",
    telefoon: "Phone",
    email: "Email",
    emailPh: "name@example.be",
    straat: "Street",
    straatPh: "Street name",
    nr: "No. / box",
    postcode: "Postcode",
    gemeente: "Town",
    gemeentePh: "E.g. Aartselaar",
    volgende: "Next: your question",
    onderwerp: "What is your question about?",
    vraag: "Your question",
    vraagPh: "Briefly describe your situation: which room, what happened, when does it need to be dry?",
    bijlagen: "Add photos or documents",
    bijlagenSub: "Photos of the room, plans or insurance documents (pdf, jpg, png)",
    verwijder: "Remove",
    nietToegevoegd: (namen) => `Not added: ${namen}. Only jpg, png, webp, pdf or Word; photos up to 30 MB, documents up to 10 MB.`,
    terug: "← Back",
    versturen: "Sending…",
    verstuur: "Send my question",
    klaarH3: "Your question has been sent.",
    klaarP: "Thank you! A drying expert will contact you the same working day. Urgent? Call",
    nietMee: (namen) => `These attachments could not be sent: ${namen}. Feel free to email them to`,
    fout: "Sending failed. Please try again or call +32 3 689 90 65.",
    foutVerbinding: "Sending failed. Please check your connection and try again."
  }
};
const EMPTY = {
  voornaam: "",
  naam: "",
  tel: "",
  mail: "",
  straat: "",
  nr: "",
  post: "",
  gemeente: ""
};
const MASKS = {
  tel: maskPhone,
  mail: maskEmail
};
const V3Cta = () => {
  const [step, setStep] = useState(1);
  const [details, setDetails] = useState(EMPTY);
  const t = useCopy(COPY);
  const taal = useTaal();
  const [subject, setSubject] = useState(SUBJECTS[0]);
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState([]);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);
  const [skipped, setSkipped] = useState([]);
  const [honeypot, setHoneypot] = useState("");
  const set = (key) => (event) => {
    const value = event.target.value;
    setDetails((current) => ({ ...current, [key]: MASKS[key]?.(value) ?? value }));
  };
  const detailsComplete = details.voornaam.trim().length > 1 && details.naam.trim().length > 1 && isValidEmail(details.mail) && details.post.trim().length > 3 && details.gemeente.trim().length > 1;
  const addFiles = (event) => {
    const { accepted, rejected } = filterAcceptable(Array.from(event.target.files ?? []));
    setSkipped(rejected);
    setFiles((current) => [...current, ...accepted].slice(0, MAX_FILES));
    event.target.value = "";
  };
  const submit = async () => {
    setSending(true);
    setError(null);
    setSkipped([]);
    try {
      const { paths, failed } = await uploadFormFiles(files);
      const response = await fetch("/api/vraag", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          voornaam: details.voornaam,
          achternaam: details.naam,
          email: details.mail,
          telefoon: details.tel,
          straat: details.straat,
          nummer: details.nr,
          postcode: details.post,
          gemeente: details.gemeente,
          onderwerp: subject,
          bericht: message,
          attachments: paths,
          page_url: typeof window === "undefined" ? null : window.location.href,
          website: honeypot
        })
      });
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        setError((taal === "nl" ? data.error : void 0) ?? t.fout);
        return;
      }
      setSkipped(failed);
      setStep(3);
    } catch {
      setError(t.foutVerbinding);
    } finally {
      setSending(false);
    }
  };
  return /* @__PURE__ */ jsx("section", { className: "cta", id: "contact", children: /* @__PURE__ */ jsxs("div", { className: "wrap cta-grid", children: [
    /* @__PURE__ */ jsxs("div", { className: "cta-l", children: [
      /* @__PURE__ */ jsx("span", { className: "kick", children: t.kick }),
      /* @__PURE__ */ jsx("h2", { children: t.h2 }),
      /* @__PURE__ */ jsx("p", { children: t.intro })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "cta-r", children: /* @__PURE__ */ jsxs("div", { className: "cform", id: "cform", children: [
      /* @__PURE__ */ jsxs("div", { className: "cf-steps", children: [
        /* @__PURE__ */ jsx("span", { className: step === 1 ? "on" : void 0, children: t.stap1 }),
        /* @__PURE__ */ jsx("span", { className: step === 2 ? "on" : void 0, children: t.stap2 })
      ] }),
      step === 1 && /* @__PURE__ */ jsxs("div", { className: "cf-p", children: [
        /* @__PURE__ */ jsxs("div", { className: "cf-row two", children: [
          /* @__PURE__ */ jsxs("div", { className: "cf-f", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "ctVoor", children: t.voornaam }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                id: "ctVoor",
                autoComplete: "given-name",
                placeholder: t.voornaam,
                value: details.voornaam,
                onChange: set("voornaam")
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "cf-f", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "ctNaam", children: t.achternaam }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                id: "ctNaam",
                autoComplete: "family-name",
                placeholder: t.achternaam,
                value: details.naam,
                onChange: set("naam")
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "cf-row two", children: [
          /* @__PURE__ */ jsxs("div", { className: "cf-f", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "ctTel", children: t.telefoon }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "tel",
                id: "ctTel",
                autoComplete: "tel",
                inputMode: "tel",
                placeholder: "0470 00 00 00",
                value: details.tel,
                onChange: set("tel")
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "cf-f", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "ctMail", children: t.email }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                id: "ctMail",
                autoComplete: "email",
                inputMode: "email",
                autoCapitalize: "none",
                spellCheck: false,
                placeholder: t.emailPh,
                value: details.mail,
                onChange: set("mail")
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "cf-row two", style: { gridTemplateColumns: "1.6fr .6fr" }, children: [
          /* @__PURE__ */ jsxs("div", { className: "cf-f", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "ctStraat", children: t.straat }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                id: "ctStraat",
                autoComplete: "address-line1",
                placeholder: t.straatPh,
                value: details.straat,
                onChange: set("straat")
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "cf-f", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "ctNr", children: t.nr }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                id: "ctNr",
                placeholder: "12 / A",
                value: details.nr,
                onChange: set("nr")
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "cf-row two", style: { gridTemplateColumns: ".6fr 1.6fr" }, children: [
          /* @__PURE__ */ jsxs("div", { className: "cf-f", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "ctPost", children: t.postcode }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                id: "ctPost",
                inputMode: "numeric",
                autoComplete: "postal-code",
                placeholder: "2630",
                value: details.post,
                onChange: set("post")
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "cf-f", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "ctGem", children: t.gemeente }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                id: "ctGem",
                autoComplete: "address-level2",
                placeholder: t.gemeentePh,
                value: details.gemeente,
                onChange: set("gemeente")
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            className: "btn btn-red cf-next",
            disabled: !detailsComplete,
            onClick: () => setStep(2),
            children: [
              t.volgende,
              " ",
              /* @__PURE__ */ jsx(ArrowRightIcon, { size: 13, strokeWidth: 2.6 })
            ]
          }
        )
      ] }),
      step === 2 && /* @__PURE__ */ jsxs("div", { className: "cf-p", children: [
        /* @__PURE__ */ jsxs("div", { className: "cf-f", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "ctSub", children: t.onderwerp }),
          /* @__PURE__ */ jsx(
            "select",
            {
              id: "ctSub",
              value: subject,
              onChange: (event) => setSubject(event.target.value),
              children: SUBJECTS.map((option) => /* @__PURE__ */ jsx("option", { value: option, children: t.subjects[option] }, option))
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "cf-f", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "ctMsg", children: t.vraag }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              id: "ctMsg",
              rows: 4,
              placeholder: t.vraagPh,
              value: message,
              onChange: (event) => setMessage(event.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "cf-drop", htmlFor: "ctFiles", children: [
          /* @__PURE__ */ jsx(UploadIcon, {}),
          /* @__PURE__ */ jsx("b", { children: t.bijlagen }),
          /* @__PURE__ */ jsx("small", { children: t.bijlagenSub }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "file",
              id: "ctFiles",
              multiple: true,
              accept: "image/*,.pdf,.doc,.docx",
              onChange: addFiles
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "cf-files", children: files.map((file, i) => /* @__PURE__ */ jsxs("div", { className: "cfile", children: [
          /* @__PURE__ */ jsx(FileIcon, {}),
          /* @__PURE__ */ jsx("b", { children: file.name }),
          /* @__PURE__ */ jsx("span", { children: formatFileSize(file.size) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              "aria-label": t.verwijder,
              onClick: () => setFiles((current) => current.filter((_, j) => j !== i)),
              children: "×"
            }
          )
        ] }, `${file.name}-${i}`)) }),
        skipped.length > 0 && /* @__PURE__ */ jsx("p", { className: "cf-note", role: "status", children: t.nietToegevoegd(skipped.join(", ")) }),
        error && /* @__PURE__ */ jsx("p", { className: "cf-error", role: "alert", children: error }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            tabIndex: -1,
            autoComplete: "off",
            "aria-hidden": "true",
            value: honeypot,
            onChange: (event) => setHoneypot(event.target.value),
            style: { position: "absolute", left: "-9999px", width: 1, height: 1 }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "cf-nav", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: "cf-back",
              disabled: sending,
              onClick: () => setStep(1),
              children: t.terug
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: "btn btn-red",
              disabled: message.trim().length < 5 || sending,
              onClick: submit,
              children: sending ? t.versturen : t.verstuur
            }
          )
        ] })
      ] }),
      step === 3 && /* @__PURE__ */ jsx("div", { className: "cf-p", children: /* @__PURE__ */ jsxs("div", { className: "cf-done", children: [
        /* @__PURE__ */ jsx("span", { children: "✓" }),
        /* @__PURE__ */ jsx("h3", { children: t.klaarH3 }),
        /* @__PURE__ */ jsxs("p", { children: [
          t.klaarP,
          " ",
          /* @__PURE__ */ jsx("a", { href: "tel:+3236899065", children: "03 689 90 65" }),
          "."
        ] }),
        skipped.length > 0 && /* @__PURE__ */ jsxs("p", { className: "cf-note", children: [
          t.nietMee(skipped.join(", ")),
          " ",
          /* @__PURE__ */ jsx("a", { href: `mailto:${CONTACT.email}`, children: CONTACT.email }),
          "."
        ] })
      ] }) })
    ] }) })
  ] }) });
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/Index.tsx");
const ORG_OMSCHRIJVING_FR = "Location de déshumidificateurs de chantier, ventilateurs et chauffages de chantier professionnels pour la nouvelle construction, la rénovation et les dégâts des eaux en Flandre, avec livraison, installation et mesure d'humidité.";
const ORG_OMSCHRIJVING_EN = "Hire of professional construction dehumidifiers, fans and site heaters for new builds, renovation and water damage in Flanders, with delivery, installation and moisture reading.";
const ORG_OMSCHRIJVING = { fr: ORG_OMSCHRIJVING_FR, en: ORG_OMSCHRIJVING_EN };
const Index = () => {
  const taal = useTaal();
  const vragen = useFaqVragen();
  const organisatie = organizationSchema({ withRating: true });
  const website = websiteSchema();
  return /* @__PURE__ */ jsxs("div", { className: "v3", children: [
    /* @__PURE__ */ jsx(
      PageMeta,
      {
        ...useSeo("home"),
        jsonLd: [
          // Enige pagina die "4,8" en "412" zichtbaar toont, dus de enige die de
          // beoordeling in de schema mag zetten — zie `OrganizationOptions`.
          taal === "nl" ? organisatie : { ...organisatie, description: ORG_OMSCHRIJVING[taal] },
          taal === "nl" ? website : { ...website, inLanguage: HTML_LANG[taal] },
          faqSchema(vragen.map((item) => ({ question: item.q, answer: item.a })))
        ]
      }
    ),
    /* @__PURE__ */ jsx(V3Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(V3Hero, {}),
      /* @__PURE__ */ jsx(V3StatRule, {}),
      /* @__PURE__ */ jsx(V3Products, {}),
      /* @__PURE__ */ jsx(V3HowItWorks, {}),
      /* @__PURE__ */ jsx(V3Cases, {}),
      /* @__PURE__ */ jsx(V3Market, {}),
      /* @__PURE__ */ jsx(V3Intro, {}),
      /* @__PURE__ */ jsx(V3EcoLineup, {}),
      /* @__PURE__ */ jsx(V3Difference, {}),
      /* @__PURE__ */ jsx(V3Included, {}),
      /* @__PURE__ */ jsx(V3Ozon, {}),
      /* @__PURE__ */ jsx(V3Regio, {}),
      /* @__PURE__ */ jsx(V3Pay, {}),
      /* @__PURE__ */ jsx(V3Pickup, {}),
      /* @__PURE__ */ jsx(V3Reviews, {}),
      /* @__PURE__ */ jsx(V3Faq, {}),
      /* @__PURE__ */ jsx(V3Cta, {})
    ] }),
    /* @__PURE__ */ jsx(V3Footer, {})
  ] });
};
export {
  Index as default
};
