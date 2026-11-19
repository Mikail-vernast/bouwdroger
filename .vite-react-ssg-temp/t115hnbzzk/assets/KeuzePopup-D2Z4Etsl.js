import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { t as taalUitPad, A as ACTIEVE_TALEN, o as kies, f as bewaarVoorkeur, w as wisselPad } from "../main.mjs";
import "vite-react-ssg";
import "lucide-react";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/KeuzePopup.tsx");
const LANDEN = ["BE", "NL", "LU", "FR", "XX"];
const COPY = {
  nl: {
    titel: "Welkom bij Vernast",
    sub: "Twee snelle keuzes, dan tonen we je de juiste prijzen en het juiste aanbod.",
    taal: "Taal",
    klant: "Je huurt als",
    particulier: "Particulier",
    bedrijf: "Bedrijf",
    inclBtw: "incl. btw",
    exclBtw: "excl. btw",
    hintParticulier: "Prijzen incl. btw",
    hintBedrijf: "Prijzen excl. btw · factuur op naam",
    werf: "Je werf ligt in",
    landLabel: "Land van je werf",
    landen: { BE: "België", NL: "Nederland", LU: "Luxemburg", FR: "Frankrijk", XX: "Ander land" },
    buitenBelgie: "We leveren en installeren in België. Vanuit dit land kun je een toestel afhalen in ons magazijn, of je neemt contact op voor een levering op maat.",
    verder: "Ga verder",
    sluiten: "Sluiten",
    badge: "Nr. 1 Droogservice"
  },
  fr: {
    titel: "Bienvenue chez Vernast",
    sub: "Deux choix rapides, et nous vous affichons les bons prix et la bonne offre.",
    taal: "Langue",
    klant: "Vous louez en tant que",
    particulier: "Particulier",
    bedrijf: "Professionnel",
    inclBtw: "TVAC",
    exclBtw: "HTVA",
    hintParticulier: "Prix TVAC",
    hintBedrijf: "Prix HTVA · facture au nom de votre société",
    werf: "Votre chantier :",
    landLabel: "Pays du chantier",
    landen: { BE: "Belgique", NL: "Pays-Bas", LU: "Luxembourg", FR: "France", XX: "Autre pays" },
    buitenBelgie: "Nous livrons et installons en Belgique. Depuis ce pays, vous pouvez venir chercher un appareil à notre dépôt, ou nous contacter pour une livraison sur mesure.",
    verder: "Continuer",
    sluiten: "Fermer",
    badge: "Service de séchage n° 1"
  },
  en: {
    titel: "Welcome to Vernast",
    sub: "Two quick choices, then we'll show you the right prices and the right offer.",
    taal: "Language",
    klant: "You're renting as",
    particulier: "Private customer",
    bedrijf: "Business",
    inclBtw: "incl. VAT",
    exclBtw: "excl. VAT",
    hintParticulier: "Prices incl. VAT",
    hintBedrijf: "Prices excl. VAT · invoice to your company",
    werf: "Your site is in",
    landLabel: "Country of your site",
    landen: { BE: "Belgium", NL: "Netherlands", LU: "Luxembourg", FR: "France", XX: "Other country" },
    buitenBelgie: "We deliver and install in Belgium. From this country, you can collect a unit from our depot, or contact us about a custom delivery.",
    verder: "Continue",
    sluiten: "Close",
    badge: "No. 1 Drying Service"
  }
};
const TAALNAAM = { nl: "Nederlands", fr: "Français", en: "English" };
const Vlag = ({ taal }) => {
  const id = `kp-vl-${taal}`;
  const inhoud = {
    nl: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("rect", { y: "3", width: "26", height: "6.7", fill: "#AE1C28" }),
      /* @__PURE__ */ jsx("rect", { y: "9.7", width: "26", height: "6.6", fill: "#fff" }),
      /* @__PURE__ */ jsx("rect", { y: "16.3", width: "26", height: "6.7", fill: "#21468B" })
    ] }),
    fr: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("rect", { y: "3", width: "8.7", height: "20", fill: "#0055A4" }),
      /* @__PURE__ */ jsx("rect", { x: "8.7", y: "3", width: "8.6", height: "20", fill: "#fff" }),
      /* @__PURE__ */ jsx("rect", { x: "17.3", y: "3", width: "8.7", height: "20", fill: "#EF4135" })
    ] }),
    en: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("rect", { y: "3", width: "26", height: "20", fill: "#012169" }),
      /* @__PURE__ */ jsx("path", { d: "M0 3l26 20M26 3L0 23", stroke: "#fff", strokeWidth: "4" }),
      /* @__PURE__ */ jsx("path", { d: "M0 3l26 20M26 3L0 23", stroke: "#C8102E", strokeWidth: "1.5" }),
      /* @__PURE__ */ jsx("path", { d: "M13 3v20M0 13h26", stroke: "#fff", strokeWidth: "6" }),
      /* @__PURE__ */ jsx("path", { d: "M13 3v20M0 13h26", stroke: "#C8102E", strokeWidth: "3.4" })
    ] })
  }[taal];
  return /* @__PURE__ */ jsxs("svg", { width: "30", height: "20", viewBox: "0 3 26 20", preserveAspectRatio: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id, children: /* @__PURE__ */ jsx("rect", { x: "0", y: "3", width: "26", height: "20", rx: "2.6" }) }) }),
    /* @__PURE__ */ jsx("g", { clipPath: `url(#${id})`, children: inhoud }),
    /* @__PURE__ */ jsx("rect", { x: ".5", y: "3.5", width: "25", height: "19", rx: "2.3", fill: "none", stroke: "rgba(0,0,0,.18)" })
  ] });
};
const IcoPersoon = () => /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 28 28", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
  /* @__PURE__ */ jsx("circle", { cx: "14", cy: "9", r: "4.5", fill: "currentColor", fillOpacity: ".14" }),
  /* @__PURE__ */ jsx("path", { d: "M5 25v-1.5a9 9 0 0 1 18 0V25", fill: "currentColor", fillOpacity: ".14" })
] });
const IcoTeam = () => /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 34 28", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
  /* @__PURE__ */ jsx("circle", { cx: "7.5", cy: "10", r: "3.4" }),
  /* @__PURE__ */ jsx("path", { d: "M1.5 23v-1a6 6 0 0 1 9-5.2" }),
  /* @__PURE__ */ jsx("circle", { cx: "26.5", cy: "10", r: "3.4" }),
  /* @__PURE__ */ jsx("path", { d: "M32.5 23v-1a6 6 0 0 0-9-5.2" }),
  /* @__PURE__ */ jsx("circle", { cx: "17", cy: "8.5", r: "4.2", fill: "currentColor", fillOpacity: ".14" }),
  /* @__PURE__ */ jsx("path", { d: "M9.5 25v-1.5a7.5 7.5 0 0 1 15 0V25", fill: "currentColor", fillOpacity: ".14" })
] });
const IcoPin = () => /* @__PURE__ */ jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
  /* @__PURE__ */ jsx("path", { d: "M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" }),
  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "9.5", r: "2.5" })
] });
const IcoCheck = () => /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "m5 12.5 4.5 4.5L19 7.5" }) });
const IcoPijl = () => /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M13 6l6 6-6 6" }) });
const IcoTruck = () => /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
  /* @__PURE__ */ jsx("path", { d: "M2 6h12v10H2zM14 10h4l3 3v3h-7" }),
  /* @__PURE__ */ jsx("circle", { cx: "6", cy: "17.5", r: "1.8" }),
  /* @__PURE__ */ jsx("circle", { cx: "17", cy: "17.5", r: "1.8" })
] });
function Schakelaar({
  label,
  klasse,
  waarde,
  opties,
  onKies
}) {
  const i = Math.max(0, opties.findIndex((o) => o.v === waarde));
  const pijl = (e, huidig) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const n = (huidig + (e.key === "ArrowRight" ? 1 : -1) + opties.length) % opties.length;
    onKies(opties[n].v);
    e.currentTarget.parentElement?.querySelectorAll("button")[n]?.focus();
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `kp-sw ${klasse}`,
      role: "radiogroup",
      "aria-label": label,
      style: { "--n": opties.length, "--i": i },
      children: [
        /* @__PURE__ */ jsx("span", { className: "kp-knob", "aria-hidden": "true" }),
        opties.map((o, n) => /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            role: "radio",
            "aria-checked": o.v === waarde,
            tabIndex: o.v === waarde ? 0 : -1,
            onClick: () => onKies(o.v),
            onKeyDown: (e) => pijl(e, n),
            children: o.inhoud
          },
          o.v
        ))
      ]
    }
  );
}
const KeuzePopup = ({ onKlaar }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const paginaTaal = taalUitPad(location.pathname);
  const [taal, setTaal] = useState(() => {
    if (paginaTaal !== "nl") return paginaTaal;
    const b = typeof navigator !== "undefined" ? navigator.language.slice(0, 2) : "";
    return ACTIEVE_TALEN.includes(b) ? b : paginaTaal;
  });
  const [klant, setKlant] = useState("particulier");
  const [land, setLand] = useState("BE");
  const t = kies(COPY, taal);
  const eerste = useRef(null);
  useEffect(() => {
    let weg = false;
    fetch("/api/land").then((r) => r.ok ? r.json() : null).then((d) => {
      const c = d && typeof d === "object" && "land" in d ? String(d.land) : "";
      if (!weg && c) setLand(LANDEN.includes(c) ? c : "XX");
    }).catch(() => void 0);
    return () => {
      weg = true;
    };
  }, []);
  useEffect(() => {
    eerste.current?.querySelector('button[aria-checked="true"]')?.focus();
    const esc = (e) => e.key === "Escape" && sluit();
    window.addEventListener("keydown", esc);
    const vorig = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", esc);
      document.body.style.overflow = vorig;
    };
  }, []);
  function sluit() {
    bewaarVoorkeur({ taal: paginaTaal, klant, land });
    onKlaar();
  }
  function verder() {
    bewaarVoorkeur({ taal, klant, land });
    onKlaar();
    if (taal !== paginaTaal) navigate(wisselPad(location.pathname, taal));
  }
  const talen = ACTIEVE_TALEN;
  return /* @__PURE__ */ jsx("div", { className: "kp-overlay", onMouseDown: (e) => e.target === e.currentTarget && sluit(), children: /* @__PURE__ */ jsxs("div", { className: "kp", role: "dialog", "aria-modal": "true", "aria-labelledby": "kp-titel", lang: taal, children: [
    /* @__PURE__ */ jsx("button", { type: "button", className: "kp-x", onClick: sluit, "aria-label": t.sluiten, children: /* @__PURE__ */ jsx("svg", { width: "12", height: "12", viewBox: "0 0 12 12", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M1.5 1.5l9 9M10.5 1.5l-9 9", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "kp-foto", children: [
      /* @__PURE__ */ jsx("img", { className: "kp-team", src: "/vernast/drie-vakmannen.webp", alt: "", width: 1400, height: 934 }),
      /* @__PURE__ */ jsxs("div", { className: "kp-badge", children: [
        /* @__PURE__ */ jsx("img", { src: "/vernast/schild-gecertificeerd.webp", alt: "", width: 24, height: 24 }),
        /* @__PURE__ */ jsx("span", { children: t.badge })
      ] }),
      /* @__PURE__ */ jsx("img", { className: "kp-logo", src: "/vernast/logo-horizontal-white.webp", alt: "Vernast", width: 838, height: 140 })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "kp-body", ref: eerste, children: [
      /* @__PURE__ */ jsx("h2", { id: "kp-titel", children: t.titel }),
      /* @__PURE__ */ jsx("p", { className: "kp-sub", children: t.sub }),
      /* @__PURE__ */ jsxs("div", { className: "kp-q", children: [
        /* @__PURE__ */ jsx("div", { className: "kp-lab", children: t.taal }),
        /* @__PURE__ */ jsx(
          Schakelaar,
          {
            label: t.taal,
            klasse: "taal",
            waarde: taal,
            onKies: setTaal,
            opties: talen.map((v) => ({
              v,
              inhoud: /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx("span", { className: "kp-ico", children: /* @__PURE__ */ jsx(Vlag, { taal: v }) }),
                /* @__PURE__ */ jsx("span", { className: "kp-t", children: TAALNAAM[v] })
              ] })
            }))
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "kp-q", children: [
        /* @__PURE__ */ jsx("div", { className: "kp-lab", children: t.klant }),
        /* @__PURE__ */ jsx(
          Schakelaar,
          {
            label: t.klant,
            klasse: "klant",
            waarde: klant,
            onKies: setKlant,
            opties: [
              {
                v: "particulier",
                inhoud: /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx("span", { className: "kp-ico", children: /* @__PURE__ */ jsx(IcoPersoon, {}) }),
                  /* @__PURE__ */ jsxs("span", { children: [
                    /* @__PURE__ */ jsx("span", { className: "kp-t", children: t.particulier }),
                    /* @__PURE__ */ jsx("span", { className: "kp-s", children: t.inclBtw })
                  ] })
                ] })
              },
              {
                v: "bedrijf",
                inhoud: /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx("span", { className: "kp-ico", children: /* @__PURE__ */ jsx(IcoTeam, {}) }),
                  /* @__PURE__ */ jsxs("span", { children: [
                    /* @__PURE__ */ jsx("span", { className: "kp-t", children: t.bedrijf }),
                    /* @__PURE__ */ jsx("span", { className: "kp-s", children: t.exclBtw })
                  ] })
                ] })
              }
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "kp-hint", children: [
          /* @__PURE__ */ jsx(IcoCheck, {}),
          " ",
          klant === "bedrijf" ? t.hintBedrijf : t.hintParticulier
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "kp-foot", children: [
        /* @__PURE__ */ jsxs("label", { className: "kp-werf", children: [
          /* @__PURE__ */ jsx(IcoPin, {}),
          " ",
          /* @__PURE__ */ jsx("span", { children: t.werf }),
          /* @__PURE__ */ jsx("select", { value: land, onChange: (e) => setLand(e.target.value), "aria-label": t.landLabel, children: LANDEN.map((l) => /* @__PURE__ */ jsx("option", { value: l, children: t.landen[l] }, l)) })
        ] }),
        /* @__PURE__ */ jsxs("button", { type: "button", className: "kp-cta", onClick: verder, children: [
          t.verder,
          " ",
          /* @__PURE__ */ jsx(IcoPijl, {})
        ] })
      ] }),
      land !== "BE" && /* @__PURE__ */ jsxs("div", { className: "kp-note", children: [
        /* @__PURE__ */ jsx(IcoTruck, {}),
        /* @__PURE__ */ jsx("span", { children: t.buitenBelgie })
      ] })
    ] })
  ] }) });
};
export {
  KeuzePopup as default
};
