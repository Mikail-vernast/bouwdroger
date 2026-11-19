import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { P as PageMeta } from "./PageMeta-BXulEWcY.js";
import { l as V3Header } from "./V3Header-BeIMcMg7.js";
import { V as V3Footer } from "./V3Footer-9z4J1I4x.js";
import { useRef, useEffect } from "react";
import { u as useCopy, b as useTaal, a as useLokaalPad, c as useToonBedrag } from "../main.mjs";
import { C as ContactBlok } from "./ContactBlok-ykYeBJgi.js";
import { o as organizationSchema, b as breadcrumbSchema } from "./schema-VJMHyxOJ.js";
import { u as useSeo } from "./seo-BMvlJeai.js";
import { t as toestelPad, b as PUMP, E as EXTRAS } from "./verhuur-CgnDb-wO.js";
import { a as euro } from "./verhuur-8XCQs1EE.js";
/* empty css                                */
import "vite-react-ssg";
import "./FontPreload-C6Rzq6ld.js";
import "lucide-react";
import "./AanvraagForm-CNDpbMyw.js";
import "./verhuur.fr-CrIPL5Eo.js";
import "./tarieven-ZrzMF0e-.js";
import "./packages-DdkKuPcF.js";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/hoe-drogen/KlimaatMeter.tsx");
const TEKST = {
  nl: {
    temperatuur: { eenheid: "°C", labelVan: "koude werf", labelNaar: "werkklimaat" },
    vocht: { eenheid: "% RV", labelVan: "verzadigde lucht", labelNaar: "opnamecapaciteit" },
    lucht: { eenheid: "m/s", labelVan: "stilstaande lucht", labelNaar: "langs elk oppervlak" }
  },
  fr: {
    temperatuur: { eenheid: "°C", labelVan: "chantier froid", labelNaar: "climat de travail" },
    vocht: { eenheid: "% HR", labelVan: "air saturé", labelNaar: "capacité d'absorption" },
    lucht: { eenheid: "m/s", labelVan: "air immobile", labelNaar: "sur chaque surface" }
  },
  en: {
    temperatuur: { eenheid: "°C", labelVan: "cold site", labelNaar: "working climate" },
    vocht: { eenheid: "% RH", labelVan: "saturated air", labelNaar: "absorption capacity" },
    lucht: { eenheid: "m/s", labelVan: "still air", labelNaar: "across every surface" }
  }
};
const METERS = {
  temperatuur: {
    van: -8,
    naar: 21.5,
    decimalen: 1,
    // Schaal −12 … 25 °C, zodat een vorstwerf ook nog zichtbaar vult.
    vulVan: 11,
    vulNaar: 90,
    icoon: /* @__PURE__ */ jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" }) })
  },
  vocht: {
    van: 98,
    naar: 45,
    decimalen: 0,
    vulVan: 98,
    vulNaar: 45,
    icoon: /* @__PURE__ */ jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" }) })
  },
  lucht: {
    van: 0.5,
    naar: 2.5,
    decimalen: 1,
    vulVan: 14,
    vulNaar: 71,
    icoon: /* @__PURE__ */ jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx("path", { d: "M9.6 4.6A2 2 0 1 1 11 8H2" }),
      /* @__PURE__ */ jsx("path", { d: "M12.6 19.4A2 2 0 1 0 14 16H2" }),
      /* @__PURE__ */ jsx("path", { d: "M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" })
    ] })
  }
};
const toon = (waarde, decimalen, taal) => {
  const vast = waarde.toFixed(decimalen);
  return (taal === "en" ? vast : vast.replace(".", ",")).replace("-", "−");
};
const DUUR = 1600;
const STAP = 550;
const KlimaatMeter = ({ variant, volgorde = 0 }) => {
  const m = METERS[variant];
  const tekst = useCopy(TEKST)[variant];
  const taal = useTaal();
  const wortel = useRef(null);
  const getal2 = useRef(null);
  useEffect(() => {
    const el = wortel.current;
    const cijfer = getal2.current;
    if (!el || !cijfer) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    let wacht = 0;
    let speelt = false;
    const zet = (p) => {
      el.style.setProperty("--p", String(p));
      el.style.setProperty("--f", String(m.vulVan + (m.vulNaar - m.vulVan) * p));
      cijfer.textContent = toon(m.van + (m.naar - m.van) * p, m.decimalen, taal);
    };
    const stop = () => {
      cancelAnimationFrame(frame);
      clearTimeout(wacht);
      speelt = false;
    };
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) {
          stop();
          zet(0);
          return;
        }
        if (speelt) return;
        speelt = true;
        zet(0);
        wacht = window.setTimeout(() => {
          const start = performance.now();
          const loop = (nu) => {
            const t = Math.min((nu - start) / DUUR, 1);
            zet(1 - Math.pow(1 - t, 3));
            if (t < 1) frame = requestAnimationFrame(loop);
          };
          frame = requestAnimationFrame(loop);
        }, volgorde * STAP);
      },
      { rootMargin: "0px 0px -12% 0px" }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      stop();
    };
  }, [m, volgorde, taal]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: wortel,
      className: "klm",
      "data-klm": variant,
      style: { "--p": "1", "--f": String(m.vulNaar) },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "klm-top", children: [
          /* @__PURE__ */ jsx("span", { className: "klm-ic", children: m.icoon }),
          /* @__PURE__ */ jsxs("span", { className: "klm-val", children: [
            /* @__PURE__ */ jsx("b", { ref: getal2, children: toon(m.naar, m.decimalen, taal) }),
            /* @__PURE__ */ jsx("i", { children: tekst.eenheid })
          ] })
        ] }),
        variant === "lucht" ? /* @__PURE__ */ jsxs("div", { className: "klm-wind", "aria-hidden": "true", children: [
          /* @__PURE__ */ jsx("s", {}),
          /* @__PURE__ */ jsx("s", {}),
          /* @__PURE__ */ jsx("s", {}),
          /* @__PURE__ */ jsx("s", {})
        ] }) : /* @__PURE__ */ jsx("div", { className: "klm-track", "aria-hidden": "true", children: /* @__PURE__ */ jsx("i", {}) }),
        /* @__PURE__ */ jsxs("div", { className: "klm-foot", children: [
          /* @__PURE__ */ jsx("span", { children: tekst.labelVan }),
          /* @__PURE__ */ jsx("span", { children: tekst.labelNaar })
        ] })
      ]
    }
  );
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/hoe-drogen/VochtGrafiek.tsx");
const COPY$1 = {
  nl: {
    aria: "Grafiek: hoeveel waterdamp lucht kan bevatten per temperatuur, bij 20 tot 100 procent relatieve luchtvochtigheid.",
    asT: "temperatuur (°C)",
    asG: "waterdamp in de lucht (g/m³)",
    verzadigd: "verzadigd: ",
    ruimte: "bij 60% nog ruimte voor ",
    bij: "Hoe warmer de lucht, hoe meer waterdamp ze kán dragen. Daarom zegt een percentage alleen iets samen met de temperatuur, en groeit de ruimte om vocht op te nemen zo sterk met elke graad erbij."
  },
  fr: {
    aria: "Graphique : quantité de vapeur d'eau que l'air peut contenir selon la température, entre 20 et 100 pour cent d'humidité relative.",
    asT: "température (°C)",
    asG: "vapeur d'eau dans l'air (g/m³)",
    verzadigd: "saturé : ",
    ruimte: "marge à 60 % : ",
    bij: "Plus l'air est chaud, plus il peut contenir de vapeur d'eau. C'est pourquoi un pourcentage ne veut rien dire sans la température, et pourquoi la marge pour absorber l'humidité augmente autant à chaque degré supplémentaire."
  },
  en: {
    aria: "Chart: how much water vapour air can hold at each temperature, at 20 to 100 percent relative humidity.",
    asT: "temperature (°C)",
    asG: "water vapour in the air (g/m³)",
    verzadigd: "saturated: ",
    ruimte: "room left at 60%: ",
    bij: "The warmer the air, the more water vapour it can carry. That is why a percentage only means something together with the temperature, and why the room to absorb moisture grows so much with every extra degree."
  }
};
const verzadiging = (t) => 216.7 * (6.112 * Math.exp(17.62 * t / (243.12 + t))) / (273.15 + t);
const B = { w: 540, h: 400, l: 50, r: 48, t: 18, b: 42 };
const T_MIN = -10;
const T_MAX = 30;
const G_MAX = 32;
const x = (t) => B.l + (t - T_MIN) / (T_MAX - T_MIN) * (B.w - B.l - B.r);
const y = (g) => B.h - B.b - Math.min(g, G_MAX) / G_MAX * (B.h - B.b - B.t);
const curve = (rv) => {
  const punten = [];
  for (let t = T_MIN; t <= T_MAX; t += 1) {
    punten.push(`${x(t).toFixed(1)},${y(verzadiging(t) * rv).toFixed(1)}`);
  }
  return "M" + punten.join(" L");
};
const LIJNEN = [
  { rv: 1, label: "100%", klasse: "vol" },
  { rv: 0.8, label: "80%", klasse: "" },
  { rv: 0.6, label: "60%", klasse: "ijk" },
  { rv: 0.4, label: "40%", klasse: "" },
  { rv: 0.2, label: "20%", klasse: "" }
];
const TEMP_TICKS = [-10, -5, 0, 5, 10, 15, 20, 25, 30];
const GRAM_TICKS = [0, 5, 10, 15, 20, 25, 30];
const getal = (w, taal, d = 1) => taal === "en" ? w.toFixed(d) : w.toFixed(d).replace(".", ",");
const graden = (t) => (t > 0 ? `+${t}` : `${t}`).replace("-", "−");
const START = 20;
const PERIODE = 15e3;
const VochtGrafiek = () => {
  const t = useCopy(COPY$1);
  const taal = useTaal();
  const wortel = useRef(null);
  const lijn = useRef(null);
  const spanLijn = useRef(null);
  const dotVol = useRef(null);
  const dotIjk = useRef(null);
  const tTekst = useRef(null);
  const volTekst = useRef(null);
  const ijkTekst = useRef(null);
  useEffect(() => {
    const el = wortel.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    let loopt = false;
    const zet = (t2) => {
      const vol = verzadiging(t2);
      const ijk = vol * 0.6;
      const px = x(t2);
      lijn.current?.setAttribute("x1", String(px));
      lijn.current?.setAttribute("x2", String(px));
      spanLijn.current?.setAttribute("x1", String(px));
      spanLijn.current?.setAttribute("x2", String(px));
      spanLijn.current?.setAttribute("y1", String(y(vol)));
      spanLijn.current?.setAttribute("y2", String(y(ijk)));
      dotVol.current?.setAttribute("cx", String(px));
      dotVol.current?.setAttribute("cy", String(y(vol)));
      dotIjk.current?.setAttribute("cx", String(px));
      dotIjk.current?.setAttribute("cy", String(y(ijk)));
      if (tTekst.current) tTekst.current.textContent = `${graden(Math.round(t2))} °C`;
      if (volTekst.current) volTekst.current.textContent = `${getal(vol, taal)} g/m³`;
      if (ijkTekst.current) ijkTekst.current.textContent = `${getal(vol - ijk, taal)} g/m³`;
    };
    const begin = performance.now();
    const loop = (nu) => {
      const fase = (nu - begin) % PERIODE / PERIODE;
      const p = (1 - Math.cos(fase * 2 * Math.PI)) / 2;
      zet(T_MIN + (T_MAX - T_MIN) * p);
      frame = requestAnimationFrame(loop);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        const zichtbaar = entries[0].isIntersecting;
        if (zichtbaar && !loopt) {
          loopt = true;
          frame = requestAnimationFrame(loop);
        } else if (!zichtbaar && loopt) {
          loopt = false;
          cancelAnimationFrame(frame);
        }
      },
      { rootMargin: "80px" }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [taal]);
  const volStart = verzadiging(START);
  return /* @__PURE__ */ jsxs("div", { className: "vgraf", ref: wortel, children: [
    /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 ${B.w} ${B.h}`, role: "img", "aria-label": t.aria, children: [
      GRAM_TICKS.map((g) => /* @__PURE__ */ jsx("line", { className: "vgraf-raster", x1: B.l, x2: B.w - B.r, y1: y(g), y2: y(g) }, `g${g}`)),
      TEMP_TICKS.map((t2) => /* @__PURE__ */ jsx("line", { className: "vgraf-raster", x1: x(t2), x2: x(t2), y1: B.t, y2: B.h - B.b }, `t${t2}`)),
      /* @__PURE__ */ jsx(
        "path",
        {
          className: "vgraf-vlak",
          d: `${curve(1)} L${x(T_MAX)},${y(verzadiging(T_MAX) * 0.6)} ${curve(0.6).replace("M", "L").split(" L").reverse().join(" L")} Z`
        }
      ),
      LIJNEN.map((l) => /* @__PURE__ */ jsxs("g", { children: [
        /* @__PURE__ */ jsx("path", { className: `vgraf-lijn ${l.klasse}`, d: curve(l.rv) }),
        /* @__PURE__ */ jsx("text", { className: `vgraf-rvlabel ${l.klasse}`, x: B.w - B.r + 7, y: y(verzadiging(T_MAX) * l.rv) + 4, children: l.label })
      ] }, l.label)),
      /* @__PURE__ */ jsx("line", { ref: lijn, className: "vgraf-scrub", x1: x(START), x2: x(START), y1: B.t, y2: B.h - B.b }),
      /* @__PURE__ */ jsx("line", { ref: spanLijn, className: "vgraf-span", x1: x(START), x2: x(START), y1: y(volStart), y2: y(volStart * 0.6) }),
      /* @__PURE__ */ jsx("circle", { ref: dotVol, className: "vgraf-dot vol", cx: x(START), cy: y(volStart), r: "5" }),
      /* @__PURE__ */ jsx("circle", { ref: dotIjk, className: "vgraf-dot ijk", cx: x(START), cy: y(volStart * 0.6), r: "5" }),
      /* @__PURE__ */ jsx("line", { className: "vgraf-as", x1: B.l, x2: B.w - B.r, y1: B.h - B.b, y2: B.h - B.b }),
      /* @__PURE__ */ jsx("line", { className: "vgraf-as", x1: B.l, x2: B.l, y1: B.t, y2: B.h - B.b }),
      TEMP_TICKS.map((t2) => /* @__PURE__ */ jsx("text", { className: "vgraf-tick", x: x(t2), y: B.h - B.b + 16, textAnchor: "middle", children: graden(t2) }, `tl${t2}`)),
      GRAM_TICKS.map((g) => /* @__PURE__ */ jsx("text", { className: "vgraf-tick", x: B.l - 9, y: y(g) + 4, textAnchor: "end", children: g }, `gl${g}`)),
      /* @__PURE__ */ jsx("text", { className: "vgraf-astitel", x: B.l + (B.w - B.l - B.r) / 2, y: B.h - 6, textAnchor: "middle", children: t.asT }),
      /* @__PURE__ */ jsx("text", { className: "vgraf-astitel", x: -188, y: 13, transform: "rotate(-90)", textAnchor: "middle", children: t.asG }),
      /* @__PURE__ */ jsxs("g", { className: "vgraf-chip", children: [
        /* @__PURE__ */ jsx("rect", { x: B.l + 10, y: B.t + 9, width: "188", height: "74", rx: "11" }),
        /* @__PURE__ */ jsxs("text", { ref: tTekst, className: "vgraf-chip-t", x: B.l + 24, y: B.t + 33, children: [
          graden(START),
          " °C"
        ] }),
        /* @__PURE__ */ jsxs("text", { className: "vgraf-chip-r", x: B.l + 24, y: B.t + 52, children: [
          t.verzadigd,
          /* @__PURE__ */ jsxs("tspan", { ref: volTekst, className: "vol", children: [
            getal(volStart, taal),
            " g/m³"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("text", { className: "vgraf-chip-r", x: B.l + 24, y: B.t + 70, children: [
          t.ruimte,
          /* @__PURE__ */ jsxs("tspan", { ref: ijkTekst, className: "ijk", children: [
            getal(volStart * 0.4, taal),
            " g/m³"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "vgraf-bij", children: t.bij })
  ] });
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/hoe-drogen/InBeeld.tsx");
const InBeeld = ({ as: Tag = "div", className, children }) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    el.dataset.inbeeld = "nee";
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();
        el.dataset.inbeeld = "ja";
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsx(Tag, { ref, className, "data-inbeeld": "ja", children });
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/HoeDrogenWerktPage.copy.tsx");
const COPY = {
  nl: ({ lp, pomp, rapport }) => ({
    crumbHome: "Home",
    crumb: "Hoe drogen werkt",
    heroKick: "Alles over drogen · de techniek",
    h1: "Niet het toestel droogt uw woning, maar het klimaat dat het maakt.",
    heroP: 'Tijdens bouwen en renoveren komen honderden liters water in uw woning terecht: in pleister, chape, mortel en beton. Professionele bouwdroging is niet "een toestel aanzetten", maar de combinatie van temperatuur, luchtvochtigheid en luchtbeweging zo sturen dat dat vocht gecontroleerd uit de constructie verdwijnt.',
    heroCta: "Bereken uw droogpakket",
    heroCta2: "Waarom bouwdroging?",
    heroAlt: "De Vernast vakmannen",
    badge: "Eco-condensdrogers",
    badgeSub: "Berekend op uw volume",
    prKick: "Het principe",
    prH2: "Uw woning wordt tijdelijk een gecontroleerde klimaatkamer.",
    prLede: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Een serre verandert het klimaat binnenin ten opzichte van buiten. Bij bouwdroging doen we iets vergelijkbaars: we creëren tijdelijk een binnenklimaat waarin vocht makkelijker uit ",
      /* @__PURE__ */ jsx(Link, { to: lp("/pleisterwerk-drogen"), children: "pleister" }),
      ", ",
      /* @__PURE__ */ jsx(Link, { to: lp("/chape-drogen"), children: "chape" }),
      " en muren naar de omgevingslucht beweegt, en daarna ook echt uit die lucht wordt verwijderd. Drie factoren werken daarvoor samen; geen enkele werkt optimaal op zichzelf."
    ] }),
    factoren: [
      { h3: "1. Temperatuur", p: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Voldoende warmte verhoogt het verdampingspotentieel en ondersteunt het vochttransport uit het materiaal. In koude ruimtes zetten we daarom een ",
        /* @__PURE__ */ jsx(Link, { to: lp(toestelPad("teddh30")), children: "bouwkachel" }),
        " bij."
      ] }) },
      { h3: "2. Relatieve luchtvochtigheid", p: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Door waterdamp actief uit de lucht te verwijderen, ontstaat telkens opnieuw ruimte voor vocht dat uit de materialen verdampt. Dat is het werk van de ",
        /* @__PURE__ */ jsx(Link, { to: lp("/machines"), children: "bouwdroger" }),
        "."
      ] }) },
      { h3: "3. Luchtbeweging", p: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Droge lucht moet álle vochtige oppervlakken bereiken; stilstaande lucht rond een wand of vloer remt het proces. Daarom horen bij veel pakketten ",
        /* @__PURE__ */ jsx(Link, { to: lp(toestelPad("ttv4500")), children: "ventilatoren" }),
        "."
      ] }) }
    ],
    prNote: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Daarom berekenen wij eerst, en plaatsen we pas daarna." }),
      " De ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "droogcalculator" }),
      " vertaalt uw oppervlakte, plafondhoogte en situatie naar de juiste combinatie van toestellen, het hart van elk ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/pakket"), children: "Vernast-droogpakket" }),
      "."
    ] }),
    m1Kick: "Misverstand nr. 1",
    m1H2: 'Waarom "de verwarming hoog zetten" geen bouwdroging is.',
    m1P1: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Warme lucht heeft bij dezelfde hoeveelheid waterdamp een veel lagere ",
      /* @__PURE__ */ jsx("b", { style: { color: "#fff" }, children: "relatieve" }),
      " luchtvochtigheid dan koude lucht. Dat klinkt alsof de lucht veel droger is geworden, maar er is nog geen gram water uit het gebouw verwijderd. Het water zit nog steeds in de lucht en in de bouwmaterialen."
    ] }),
    m1P2: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Verwarming kan het verdampingsproces ondersteunen, maar daarna moet de vrijgekomen waterdamp actief verwijderd worden door ontvochtiging. Ook de ramen openzetten is geen garantie: natuurlijke ventilatie hangt volledig af van het buitenklimaat en kan op een warme, vochtige zomerdag zelfs vocht bínnenbrengen. Professionele bouwdroging maakt het proces ",
      /* @__PURE__ */ jsx("b", { style: { color: "#fff" }, children: "controleerbaar in plaats van weersafhankelijk" }),
      "."
    ] }),
    koud: "Koude ruimte",
    koudBig: "10 °C · 80",
    rvUnit: "% RV",
    warm: "Zelfde lucht, verwarmd",
    warmBig: "20 °C · 42",
    waterPerKg: " water per kg lucht",
    koudSub: "vochtige binnenlucht",
    warmSub: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { style: { color: "var(--red)" }, children: "exact evenveel water" }),
      " in de lucht, enkel de verhouding veranderde"
    ] }),
    rvKick: "Even technisch",
    rvH2: "Wat betekent relatieve luchtvochtigheid?",
    rvP1: "Relatieve luchtvochtigheid (RV of RH) vertelt hoe dicht de lucht bij verzadiging zit bij een bepaalde temperatuur. Bij 100% RV is de lucht verzadigd met waterdamp; hoe lager de RV, hoe meer vocht de lucht nog kan opnemen.",
    rvP2: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Voor bouwdroging is dat verschil cruciaal. Veel bouwmaterialen zijn poreus en hygroscopisch: water zit niet alleen aan het oppervlak, maar ook diep in poriën en capillairen. Verlagen we de vochttoestand van de omgevingslucht, dan ontstaat een ",
      /* @__PURE__ */ jsx("b", { children: "vochtgradiënt" }),
      " tussen het natte materiaal en zijn omgeving, en beweegt het water geleidelijk naar buiten, waar het kan verdampen. Droging is daarbij nooit één proces:"
    ] }),
    chips: ["Capillaire stroming", "Verdamping", "Damptransport", "Diffusie"],
    drKick: "Twee soorten drogers",
    drH2: "De temperatuur op uw werf bepaalt welk toestel het water pakt.",
    drLede: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Beide halen water uit de lucht, maar niet op dezelfde manier, en dat verschil wordt zichtbaar zodra het kwik zakt. Daarom vraagt de ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "droogcalculator" }),
      " ook hoe koud uw ruimte staat."
    ] }),
    drogers: [
      { label: "Condensdroger · 15 – 25 °C", h3: "De standaard op een woningwerf.", p: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Hij koelt de binnenlucht onder haar dauwpunt en vangt de waterdamp op als condenswater. Boven 15 °C is dat de snelste en zuinigste manier om bouwvocht uit een woning te halen, en het is wat er in bijna elk pakket staat. ",
        /* @__PURE__ */ jsx("b", { children: "Hoe die kringloop precies loopt, ziet u in de volgende sectie." })
      ] }) },
      { label: "Adsorptiedroger · ook onder 10 °C", h3: "Voor koude ruimtes en kelders.", p: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Hij bindt de waterdamp aan een droogmiddel in plaats van ze te koelen, en werkt daardoor door bij temperaturen waar condensvorming nauwelijks nog op gang komt. Op een onverwarmde winterwerf of in een kelder haalt hij water waar een condensdroger stilvalt. Het volledige verschil staat in ",
        /* @__PURE__ */ jsx(Link, { to: lp("/gids/condensdroger-of-adsorptiedroger"), children: "condensdroger of adsorptiedroger" }),
        "."
      ] }) }
    ],
    cyKick: "De cyclus",
    cyH2: "Hoe een condensbouwdroger water uit uw woning haalt.",
    cyLede: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Binnenin stroomt de vochtige lucht langs een koud oppervlak, koelt onder haar dauwpunt en geeft haar waterdamp af als vloeibaar water. De lucht verlaat de machine iets warmer én droger, en de kringloop begint opnieuw: ",
      /* @__PURE__ */ jsx("b", { children: "materiaal → lucht → bouwdroger → condenswater → afvoer" }),
      "."
    ] }),
    cyclus: [
      { h3: "Vocht in het materiaal", p: "Water migreert via poriën en capillairen naar het oppervlak en verdampt naar de lucht." },
      { h3: "Aanzuigen", p: "De droger zuigt de vochtige binnenlucht met een krachtige ventilator door het toestel." },
      { h3: "Condenseren", p: "De lucht koelt langs een koud oppervlak onder haar dauwpunt; waterdamp wordt vloeibaar water." },
      { h3: "Afvoeren", p: "Het condenswater gaat naar een reservoir of wordt met een condenspomp rechtstreeks weggepompt." },
      { h3: "Opnieuw de ruimte in", p: "Drogere, licht opgewarmde lucht wordt verdeeld en neemt opnieuw vocht op uit de materialen." }
    ],
    cyNote: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Waar gaat al dat water naartoe?" }),
      " Bij eenvoudige toestellen in een reservoir dat u regelmatig leegmaakt. Bij langdurige professionele droging verkiezen wij continue condensafvoer: een ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/toebehoren/condenspomp"), children: "condenspomp" }),
      " (",
      pomp,
      " per bouwdroger per dag) pompt het water dag en nacht rechtstreeks naar een afvoer, zodat de cyclus onafgebroken doorloopt, ook 's nachts en in het weekend. U voegt hem toe tijdens het ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "berekenen van uw pakket" }),
      "."
    ] }),
    m2Kick: "Misverstand nr. 2",
    m2H2: "Een muur kan droog lijken en toch veel water bevatten.",
    m2Lede: "Een bouwmateriaal droogt niet overal even snel. Dit verklaart waarom een bouwdroger in het begin soms grote hoeveelheden water produceert en later aanzienlijk minder, zonder dat de machine slechter werkt.",
    fase1Label: "Fase 1 · snel",
    fase1H3: "Het oppervlak droogt.",
    fase1P: "Het makkelijk bereikbare vocht aan en vlak onder het oppervlak verdampt eerst. Na enkele dagen kan een wand al veel droger ogen, en produceert de droger veel water.",
    fase1Bar: "Hoge wateropbrengst per dag",
    fase2Label: "Fase 2 · traag",
    fase2H3: "De kern moet nog.",
    fase2P: "Water dat dieper zit moet eerst via de poriën naar het oppervlak migreren vóór het kan verdampen. Het oppervlak oogt droog, maar intern zit nog aanzienlijk vocht.",
    fase2Bar: "Vochttransport in het materiaal is de beperkende factor",
    meetKick: "Meten is weten",
    meetH3: "Daarom is meten belangrijker dan kijken.",
    meetP: /* @__PURE__ */ jsxs(Fragment, { children: [
      'Een witte pleisterlaag kan droog ogen, een chape kan stevig aanvoelen, dat zegt niets over wat er dieper in het materiaal gebeurt. Visueel beoordelen is onbetrouwbaar. Het einddoel is nooit "de droger heeft zeven dagen gedraaid", maar: ',
      /* @__PURE__ */ jsx("b", { children: "het materiaal is klaar voor de volgende bouwfase" }),
      ". Daarom zit bij elk pakket een vochtmeting voor én na, en kiest u optioneel een ",
      /* @__PURE__ */ jsxs(Link, { to: lp("/verhuur/calculator"), children: [
        "officieel vochtrapport",
        rapport ? ` (${rapport})` : ""
      ] }),
      " voor uw verzekering of huisbaas."
    ] }),
    meetAlt: "Vernast specialist meet het vochtgehalte van een muur",
    matKick: "Niet elk materiaal is gelijk",
    matH2: "Pleister, chape en beton drogen niet op dezelfde manier.",
    matLede: /* @__PURE__ */ jsxs(Fragment, { children: [
      'Niet ieder bouwmateriaal bevat hetzelfde type vocht. Een professionele droogstrategie luidt daarom nooit "machine aan zodra het materiaal geplaatst is", materiaal, leeftijd, technische voorschriften en de gewenste afwerking bepalen mee de aanpak. De ',
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "Calculator" }),
      " vraagt daarom ook wát u droogt."
    ] }),
    materialen: [
      { alt: "Vers nat gipspleister met zichtbare donkere vochtzones", h3: "Gipspleister", p: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Verliest zijn overtollige water vooral door verdamping. Laagdikte, temperatuur, luchtvochtigheid, ventilatie en de zuiging van de ondergrond bepalen de droogtijd van ",
        /* @__PURE__ */ jsx(Link, { to: lp("/pleisterwerk-drogen"), children: "gipspleister en pleisterwerk" }),
        "."
      ] }) },
      { alt: "Vochtige chape tijdens de noodzakelijke uithardingsfase", h3: "Chape & beton", p: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Cement heeft water nodig voor de hydratatiereactie waarmee het uithardt. Te vroeg agressief drogen verstoort dat, bij ",
        /* @__PURE__ */ jsx(Link, { to: lp("/chape-drogen"), children: "chape drogen" }),
        " starten we pas ná de noodzakelijke uithardingsfase."
      ] }) },
      { alt: "Droge chape met krimpscheuren door een te agressief droogproces", h3: "Te agressief drogen", p: "Grote vochtgradiënten tussen oppervlak en kern kunnen krimp en scheurvorming bevorderen. Daarom sturen we op RV en laten we die niet langdurig onder ±30% zakken." }
    ],
    optKick: "Het verschil",
    optH3: "Niet maximaal drogen. Optimaal drogen.",
    optP: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Overcapaciteit is geen kwaliteitskenmerk, de juiste capaciteit wel. Te veel vermogen op een verse laag trekt het oppervlak droog terwijl de kern nog nat is, en dat is precies hoe krimp en scheuren ontstaan. Waarom wij op het klimaat sturen en niet op het aantal toestellen, leest u bij ",
      /* @__PURE__ */ jsx(Link, { to: lp("/waarom-bouwdroging"), children: "waarom bouwdroging" }),
      "."
    ] }),
    optAlt: "Vernast-expert geeft een rode kaart aan te hard drogen",
    matNote2: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Lees verder in onze gidsen." }),
      " Hoeveel weken uw vloer nodig heeft, leest u in ",
      /* @__PURE__ */ jsx(Link, { to: lp("/gids/hoe-lang-moet-chape-drogen"), children: "hoe lang moet chape drogen" }),
      ", en voor de muren in ",
      /* @__PURE__ */ jsx(Link, { to: lp("/gids/hoe-lang-moet-pleisterwerk-drogen"), children: "hoe lang moet pleisterwerk drogen" }),
      ", allebei met de droogtijden per dikte. Werkt u in een koude kelder of zit het water onder de vloer, dan legt ",
      /* @__PURE__ */ jsx(Link, { to: lp("/gids/condensdroger-of-adsorptiedroger"), children: "condensdroger of adsorptiedroger" }),
      " het verschil uit. En wat een toestel dat dag en nacht draait aan stroom kost, rekenen we voor in ",
      /* @__PURE__ */ jsx(Link, { to: lp("/gids/stroomverbruik-bouwdroger"), children: "stroomverbruik van een bouwdroger" }),
      ". Alle gidsen staan op één plek onder ",
      /* @__PURE__ */ jsx(Link, { to: lp("/gids"), children: "gidsen over bouwdroging" }),
      "."
    ] }),
    samKick: "Samengevat",
    samH2: "Van nat materiaal naar droge constructie, in acht stappen.",
    stappen: [
      { b: "Vocht zit in het bouwmateriaal", rest: ", in poriën en capillairen, tot diep in de kern." },
      { b: "Het juiste klimaat", rest: " stimuleert het transport van vocht naar het oppervlak." },
      { b: "Het vocht verdampt", rest: " naar de omgevingslucht." },
      { b: "Luchtcirculatie", rest: " voert de vochtige lucht naar de droger." },
      { b: "De bouwdroger", rest: " haalt de waterdamp uit de lucht." },
      { b: "Het condenswater", rest: " wordt uit het gebouw afgevoerd." },
      { b: "Drogere lucht", rest: " komt opnieuw in contact met het materiaal." },
      { b: "Het proces herhaalt zich", rest: " tot het gewenste vochtniveau gemeten is." }
    ],
    werfKick: "Bouwdroger huren in Vlaanderen",
    werfH2: "Van theorie naar uw werf.",
    werfLede: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Bij Vernast huurt u geen losse machine, maar een berekend droogklimaat. Onze ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "droogcalculator" }),
      " bepaalt op basis van uw volume en situatie welk pakket u nodig heeft, voor ",
      /* @__PURE__ */ jsx(Link, { to: lp("/pleisterwerk-drogen"), children: "pleisterwerk" }),
      ", ",
      /* @__PURE__ */ jsx(Link, { to: lp("/chape-drogen"), children: "chape" }),
      ", ",
      /* @__PURE__ */ jsx(Link, { to: lp("/waterschade"), children: "waterschade" }),
      " of een ",
      /* @__PURE__ */ jsx(Link, { to: lp("/renovatie"), children: "koude kelder" }),
      ". Elk pakket wordt binnen 24 uur geleverd en geïnstalleerd, inclusief vochtmeting voor en na. Liever zelf aan de slag? Losse ",
      /* @__PURE__ */ jsx(Link, { to: lp("/machines"), children: "bouwdrogers, ventilatoren en bouwkachels" }),
      " haalt u voordelig af in ons ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/afhalen"), children: "afhaalpunt langs de A12 in Aartselaar" }),
      ". En met vragen tijdens de huur kunt u altijd terecht bij onze ",
      /* @__PURE__ */ jsx(Link, { to: lp("/klantservice"), children: "klantenservice" }),
      "."
    ] }),
    prinKick: "Het Vernast-principe",
    prinH3: "Geen machine omdat ze toevallig beschikbaar is. Een opstelling omdat ze bij uw gebouw past.",
    prinP: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Zo sturen we het klimaat rond uw bouwmateriaal, en verdwijnt het vocht gecontroleerd uit de constructie, met ",
      /* @__PURE__ */ jsx(Link, { to: lp("/waarom-bouwdroging"), children: "100% droog-garantie" }),
      ".*"
    ] }),
    prinCta: "Bereken uw droogpakket",
    prinAlt: "Vernast technicus noteert de meetresultaten",
    form: {
      kick: "Nog een vraag hierover?",
      h2: "Onze droogspecialisten denken graag mee.",
      lede: "Twijfelt u over de juiste aanpak voor uw project? Stel uw vraag, u krijgt binnen één werkdag antwoord van een specialist.",
      opties: ["Hoe werkt drogen in mijn situatie?", "Advies over het juiste pakket", "Vraag over prijzen of levering", "Iets anders"],
      situatiePh: "Bv. nieuwbouw 140 m², chape geplaatst vorige week, wanneer kan de vloerder starten?"
    }
  }),
  fr: ({ lp, pomp, rapport }) => ({
    crumbHome: "Accueil",
    crumb: "Comment fonctionne le séchage",
    heroKick: "Tout sur le séchage · la technique",
    h1: "Ce n'est pas l'appareil qui sèche votre maison, mais le climat qu'il crée.",
    heroP: "Pendant la construction et la rénovation, des centaines de litres d'eau se retrouvent dans votre habitation : dans le plafonnage, la chape, le mortier et le béton. Un séchage de chantier professionnel ne consiste pas à « allumer un appareil », mais à piloter ensemble la température, l'humidité de l'air et le mouvement de l'air pour que cette humidité quitte la construction de manière contrôlée.",
    heroCta: "Calculez votre pack de séchage",
    heroCta2: "Pourquoi sécher son chantier ?",
    heroAlt: "Les techniciens de Vernast",
    badge: "Déshumidificateurs à condensation éco",
    badgeSub: "Calculés sur votre volume",
    prKick: "Le principe",
    prH2: "Votre maison devient temporairement une chambre climatique contrôlée.",
    prLede: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Une serre modifie le climat intérieur par rapport à l'extérieur. Le séchage de chantier fait quelque chose de comparable : nous créons temporairement un climat intérieur dans lequel l'humidité passe plus facilement du ",
      /* @__PURE__ */ jsx(Link, { to: lp("/pleisterwerk-drogen"), children: "plafonnage" }),
      ", de la ",
      /* @__PURE__ */ jsx(Link, { to: lp("/chape-drogen"), children: "chape" }),
      " et des murs vers l'air ambiant, puis est réellement retirée de cet air. Trois facteurs agissent ensemble ; aucun ne fonctionne de manière optimale à lui seul."
    ] }),
    factoren: [
      { h3: "1. Température", p: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Une chaleur suffisante augmente le potentiel d'évaporation et favorise le transport de l'humidité hors du matériau. Dans les pièces froides, nous ajoutons donc un ",
        /* @__PURE__ */ jsx(Link, { to: lp(toestelPad("teddh30")), children: "chauffage de chantier" }),
        "."
      ] }) },
      { h3: "2. Humidité relative", p: /* @__PURE__ */ jsxs(Fragment, { children: [
        "En retirant activement la vapeur d'eau de l'air, on libère sans cesse de la place pour l'humidité qui s'évapore des matériaux. C'est le travail du ",
        /* @__PURE__ */ jsx(Link, { to: lp("/machines"), children: "déshumidificateur de chantier" }),
        "."
      ] }) },
      { h3: "3. Mouvement de l'air", p: /* @__PURE__ */ jsxs(Fragment, { children: [
        "L'air sec doit atteindre toutes les surfaces humides ; l'air immobile le long d'un mur ou d'un sol freine le processus. C'est pourquoi de nombreux packs comprennent des ",
        /* @__PURE__ */ jsx(Link, { to: lp(toestelPad("ttv4500")), children: "ventilateurs" }),
        "."
      ] }) }
    ],
    prNote: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "C'est pourquoi nous calculons d'abord, et n'installons qu'ensuite." }),
      " Le ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "calculateur de séchage" }),
      " traduit votre surface, votre hauteur sous plafond et votre situation en la bonne combinaison d'appareils, le cœur de chaque ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/pakket"), children: "pack de séchage Vernast" }),
      "."
    ] }),
    m1Kick: "Idée reçue n° 1",
    m1H2: "Pourquoi « monter le chauffage » n'est pas du séchage de chantier.",
    m1P1: /* @__PURE__ */ jsxs(Fragment, { children: [
      "À quantité de vapeur d'eau égale, l'air chaud a une humidité ",
      /* @__PURE__ */ jsx("b", { style: { color: "#fff" }, children: "relative" }),
      " bien plus basse que l'air froid. On dirait que l'air est devenu beaucoup plus sec, mais pas un gramme d'eau n'a encore quitté le bâtiment. L'eau se trouve toujours dans l'air et dans les matériaux de construction."
    ] }),
    m1P2: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Le chauffage peut soutenir l'évaporation, mais la vapeur d'eau libérée doit ensuite être retirée activement par déshumidification. Ouvrir les fenêtres n'est pas une garantie non plus : la ventilation naturelle dépend entièrement du climat extérieur et peut même faire entrer de l'humidité par une journée d'été chaude et humide. Un séchage de chantier professionnel rend le processus ",
      /* @__PURE__ */ jsx("b", { style: { color: "#fff" }, children: "contrôlable au lieu de dépendant de la météo" }),
      "."
    ] }),
    koud: "Pièce froide",
    koudBig: "10 °C · 80",
    rvUnit: " % HR",
    warm: "Même air, chauffé",
    warmBig: "20 °C · 42",
    waterPerKg: " d'eau par kg d'air",
    koudSub: "air intérieur humide",
    warmSub: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { style: { color: "var(--red)" }, children: "exactement autant d'eau" }),
      " dans l'air, seul le rapport a changé"
    ] }),
    rvKick: "Un peu de technique",
    rvH2: "Que signifie l'humidité relative ?",
    rvP1: "L'humidité relative (HR) indique à quel point l'air est proche de la saturation à une température donnée. À 100 % HR, l'air est saturé de vapeur d'eau ; plus l'HR est basse, plus l'air peut encore absorber d'humidité.",
    rvP2: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Pour le séchage de chantier, cette différence est cruciale. Beaucoup de matériaux de construction sont poreux et hygroscopiques : l'eau ne se trouve pas seulement en surface, mais aussi profondément dans les pores et les capillaires. Si l'on abaisse l'humidité de l'air ambiant, un ",
      /* @__PURE__ */ jsx("b", { children: "gradient d'humidité" }),
      " se crée entre le matériau mouillé et son environnement, et l'eau migre progressivement vers l'extérieur, où elle peut s'évaporer. Le séchage n'est jamais un processus unique :"
    ] }),
    chips: ["Écoulement capillaire", "Évaporation", "Transport de vapeur", "Diffusion"],
    drKick: "Deux types de déshumidificateurs",
    drH2: "La température de votre chantier détermine quel appareil capte l'eau.",
    drLede: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Les deux retirent l'eau de l'air, mais pas de la même manière, et la différence apparaît dès que le mercure descend. C'est pourquoi le ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "calculateur de séchage" }),
      " demande aussi à quelle température se trouve votre pièce."
    ] }),
    drogers: [
      { label: "À condensation · 15 – 25 °C", h3: "La norme sur un chantier d'habitation.", p: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Il refroidit l'air intérieur sous son point de rosée et recueille la vapeur d'eau sous forme de condensat. Au-dessus de 15 °C, c'est la manière la plus rapide et la plus économe de retirer l'humidité de construction d'une habitation, et c'est ce que contient presque chaque pack. ",
        /* @__PURE__ */ jsx("b", { children: "Le détail de ce cycle figure dans la section suivante." })
      ] }) },
      { label: "À adsorption · aussi sous 10 °C", h3: "Pour les locaux froids et les caves.", p: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Il fixe la vapeur d'eau sur un agent déshydratant au lieu de la refroidir, et continue donc à fonctionner à des températures où la condensation ne se forme presque plus. Sur un chantier d'hiver non chauffé ou dans une cave, il retire de l'eau là où un appareil à condensation s'arrête. La différence complète est expliquée dans ",
        /* @__PURE__ */ jsx(Link, { to: lp("/gids/condensdroger-of-adsorptiedroger"), children: "déshumidificateur à condensation ou à adsorption" }),
        "."
      ] }) }
    ],
    cyKick: "Le cycle",
    cyH2: "Comment un déshumidificateur à condensation retire l'eau de votre maison.",
    cyLede: /* @__PURE__ */ jsxs(Fragment, { children: [
      "À l'intérieur, l'air humide passe le long d'une surface froide, se refroidit sous son point de rosée et libère sa vapeur d'eau sous forme d'eau liquide. L'air quitte la machine un peu plus chaud et plus sec, et le cycle recommence : ",
      /* @__PURE__ */ jsx("b", { children: "matériau → air → déshumidificateur → eau de condensation → évacuation" }),
      "."
    ] }),
    cyclus: [
      { h3: "Humidité dans le matériau", p: "L'eau migre par les pores et les capillaires vers la surface et s'évapore dans l'air." },
      { h3: "Aspiration", p: "Le déshumidificateur aspire l'air intérieur humide à travers l'appareil grâce à un ventilateur puissant." },
      { h3: "Condensation", p: "L'air se refroidit le long d'une surface froide sous son point de rosée ; la vapeur d'eau devient de l'eau liquide." },
      { h3: "Évacuation", p: "L'eau de condensation est recueillie dans un réservoir ou pompée directement par une pompe à condensats." },
      { h3: "Retour dans la pièce", p: "L'air plus sec et légèrement réchauffé est diffusé et absorbe à nouveau l'humidité des matériaux." }
    ],
    cyNote: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Où va toute cette eau ?" }),
      " Avec des appareils simples, dans un réservoir que vous videz régulièrement. Pour un séchage professionnel de longue durée, nous préférons une évacuation continue des condensats : une ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/toebehoren/condenspomp"), children: "pompe à condensats" }),
      " (",
      pomp,
      " par déshumidificateur et par jour) pompe l'eau jour et nuit directement vers une évacuation, pour que le cycle tourne sans interruption, même la nuit et le week-end. Vous l'ajoutez lors du ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "calcul de votre pack" }),
      "."
    ] }),
    m2Kick: "Idée reçue n° 2",
    m2H2: "Un mur peut paraître sec et contenir encore beaucoup d'eau.",
    m2Lede: "Un matériau de construction ne sèche pas partout à la même vitesse. C'est pourquoi un déshumidificateur produit parfois de grandes quantités d'eau au début et nettement moins par la suite, sans que la machine fonctionne moins bien.",
    fase1Label: "Phase 1 · rapide",
    fase1H3: "La surface sèche.",
    fase1P: "L'humidité facilement accessible, en surface et juste en dessous, s'évapore en premier. Après quelques jours, un mur peut déjà paraître beaucoup plus sec, et le déshumidificateur produit beaucoup d'eau.",
    fase1Bar: "Beaucoup d'eau récupérée par jour",
    fase2Label: "Phase 2 · lente",
    fase2H3: "Le cœur doit encore suivre.",
    fase2P: "L'eau plus profonde doit d'abord migrer par les pores jusqu'à la surface avant de pouvoir s'évaporer. La surface paraît sèche, mais il reste beaucoup d'humidité à l'intérieur.",
    fase2Bar: "Le transport de l'humidité dans le matériau est le facteur limitant",
    meetKick: "Mesurer, c'est savoir",
    meetH3: "C'est pourquoi mesurer compte plus que regarder.",
    meetP: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Un enduit blanc peut paraître sec, une chape peut sembler dure : cela ne dit rien de ce qui se passe plus profondément dans le matériau. L'appréciation visuelle n'est pas fiable. L'objectif final n'est jamais « le déshumidificateur a tourné sept jours », mais : ",
      /* @__PURE__ */ jsx("b", { children: "le matériau est prêt pour la phase suivante du chantier" }),
      ". C'est pourquoi chaque pack comprend une mesure d'humidité avant et après, et vous pouvez choisir en option un ",
      /* @__PURE__ */ jsxs(Link, { to: lp("/verhuur/calculator"), children: [
        "rapport d'humidité officiel",
        rapport ? ` (${rapport})` : ""
      ] }),
      " pour votre assureur ou votre propriétaire."
    ] }),
    meetAlt: "Un spécialiste Vernast mesure le taux d'humidité d'un mur",
    matKick: "Chaque matériau est différent",
    matH2: "Le plafonnage, la chape et le béton ne sèchent pas de la même manière.",
    matLede: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Tous les matériaux de construction ne contiennent pas le même type d'humidité. Une stratégie de séchage professionnelle ne se résume donc jamais à « machine allumée dès que le matériau est posé » : le matériau, son âge, les prescriptions techniques et la finition souhaitée déterminent aussi l'approche. C'est pourquoi le ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "calculateur" }),
      " vous demande aussi ce que vous séchez."
    ] }),
    materialen: [
      { alt: "Plafonnage au plâtre frais et mouillé avec des zones d'humidité sombres visibles", h3: "Plâtre", p: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Perd son excès d'eau surtout par évaporation. L'épaisseur, la température, l'humidité de l'air, la ventilation et l'absorption du support déterminent le temps de ",
        /* @__PURE__ */ jsx(Link, { to: lp("/pleisterwerk-drogen"), children: "séchage du plafonnage" }),
        "."
      ] }) },
      { alt: "Chape humide pendant la phase de durcissement nécessaire", h3: "Chape et béton", p: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Le ciment a besoin d'eau pour la réaction d'hydratation qui le fait durcir. Un séchage agressif trop tôt la perturbe : pour le ",
        /* @__PURE__ */ jsx(Link, { to: lp("/chape-drogen"), children: "séchage d'une chape" }),
        ", nous ne commençons qu'après la phase de durcissement nécessaire."
      ] }) },
      { alt: "Chape sèche avec des fissures de retrait dues à un séchage trop agressif", h3: "Sécher trop agressivement", p: "De forts gradients d'humidité entre la surface et le cœur peuvent favoriser le retrait et la fissuration. C'est pourquoi nous pilotons l'HR et ne la laissons pas descendre durablement sous ±30 %." }
    ],
    optKick: "La différence",
    optH3: "Pas sécher au maximum. Sécher de façon optimale.",
    optP: /* @__PURE__ */ jsxs(Fragment, { children: [
      "La surcapacité n'est pas un gage de qualité, la bonne capacité l'est. Trop de puissance sur une couche fraîche assèche la surface alors que le cœur est encore humide, et c'est précisément ainsi qu'apparaissent le retrait et les fissures. Pourquoi nous pilotons le climat plutôt que le nombre d'appareils, vous le lirez sur la page ",
      /* @__PURE__ */ jsx(Link, { to: lp("/waarom-bouwdroging"), children: "pourquoi sécher son chantier" }),
      "."
    ] }),
    optAlt: "Un expert Vernast brandit un carton rouge contre un séchage trop agressif",
    matNote2: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Pour aller plus loin, lisez nos guides." }),
      " Le nombre de semaines dont votre sol a besoin figure dans ",
      /* @__PURE__ */ jsx(Link, { to: lp("/gids/hoe-lang-moet-chape-drogen"), children: "temps de séchage d'une chape" }),
      ", et pour les murs dans ",
      /* @__PURE__ */ jsx(Link, { to: lp("/gids/hoe-lang-moet-pleisterwerk-drogen"), children: "temps de séchage du plafonnage" }),
      ", tous deux avec les temps par épaisseur. Vous travaillez dans une cave froide ou l'eau se trouve sous le sol ? Le guide ",
      /* @__PURE__ */ jsx(Link, { to: lp("/gids/condensdroger-of-adsorptiedroger"), children: "déshumidificateur à condensation ou à adsorption" }),
      " explique la différence. Et ce que coûte en électricité un appareil qui tourne jour et nuit, nous le calculons dans ",
      /* @__PURE__ */ jsx(Link, { to: lp("/gids/stroomverbruik-bouwdroger"), children: "consommation électrique d'un déshumidificateur" }),
      ". Tous les guides sont réunis sous ",
      /* @__PURE__ */ jsx(Link, { to: lp("/gids"), children: "guides sur le séchage de chantier" }),
      "."
    ] }),
    samKick: "En résumé",
    samH2: "Du matériau mouillé à la construction sèche, en huit étapes.",
    stappen: [
      { b: "L'humidité se trouve dans le matériau", rest: ", dans les pores et les capillaires, jusqu'au cœur." },
      { b: "Le bon climat", rest: " stimule le transport de l'humidité vers la surface." },
      { b: "L'humidité s'évapore", rest: " dans l'air ambiant." },
      { b: "La circulation de l'air", rest: " amène l'air humide vers le déshumidificateur." },
      { b: "Le déshumidificateur", rest: " retire la vapeur d'eau de l'air." },
      { b: "L'eau de condensation", rest: " est évacuée du bâtiment." },
      { b: "L'air plus sec", rest: " entre à nouveau en contact avec le matériau." },
      { b: "Le processus se répète", rest: " jusqu'à ce que le taux d'humidité souhaité soit mesuré." }
    ],
    werfKick: "Location de déshumidificateur de chantier en Flandre",
    werfH2: "De la théorie à votre chantier.",
    werfLede: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Chez Vernast, vous ne louez pas une machine isolée, mais un climat de séchage calculé. Notre ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "calculateur de séchage" }),
      " détermine, d'après votre volume et votre situation, le pack dont vous avez besoin, pour du ",
      /* @__PURE__ */ jsx(Link, { to: lp("/pleisterwerk-drogen"), children: "plafonnage" }),
      ", une ",
      /* @__PURE__ */ jsx(Link, { to: lp("/chape-drogen"), children: "chape" }),
      ", des ",
      /* @__PURE__ */ jsx(Link, { to: lp("/waterschade"), children: "dégâts des eaux" }),
      " ou une ",
      /* @__PURE__ */ jsx(Link, { to: lp("/renovatie"), children: "cave froide" }),
      ". Chaque pack est livré et installé dans les 24 heures, mesure d'humidité avant et après comprise. Vous préférez vous en charger vous-même ? Vous enlevez à prix avantageux des ",
      /* @__PURE__ */ jsx(Link, { to: lp("/machines"), children: "déshumidificateurs, ventilateurs et chauffages de chantier" }),
      " à notre ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/afhalen"), children: "point d'enlèvement le long de l'A12 à Aartselaar" }),
      ". Et pour toute question pendant la location, notre ",
      /* @__PURE__ */ jsx(Link, { to: lp("/klantservice"), children: "service clientèle" }),
      " est toujours à votre disposition."
    ] }),
    prinKick: "Le principe Vernast",
    prinH3: "Pas une machine parce qu'elle se trouve être disponible. Une installation parce qu'elle convient à votre bâtiment.",
    prinP: /* @__PURE__ */ jsxs(Fragment, { children: [
      "C'est ainsi que nous pilotons le climat autour de vos matériaux, et que l'humidité quitte la construction de manière contrôlée, avec une ",
      /* @__PURE__ */ jsx(Link, { to: lp("/waarom-bouwdroging"), children: "garantie de séchage à 100 %" }),
      ".*"
    ] }),
    prinCta: "Calculez votre pack de séchage",
    prinAlt: "Un technicien Vernast note les résultats de mesure",
    form: {
      kick: "Encore une question ?",
      h2: "Nos spécialistes du séchage vous conseillent volontiers.",
      lede: "Vous hésitez sur la bonne approche pour votre projet ? Posez votre question, un spécialiste vous répond dans un délai d'un jour ouvrable.",
      opties: ["Comment fonctionne le séchage dans ma situation ?", "Conseil sur le bon pack", "Question sur les prix ou la livraison", "Autre chose"],
      situatiePh: "P. ex. nouvelle construction de 140 m², chape posée la semaine dernière : quand le poseur de sol peut-il commencer ?"
    }
  }),
  en: ({ lp, pomp, rapport }) => ({
    crumbHome: "Home",
    crumb: "How drying works",
    heroKick: "All about drying · the technology",
    h1: "It is not the unit that dries your home, but the climate it creates.",
    heroP: 'During construction and renovation, hundreds of litres of water end up in your home: in plaster, screed, mortar and concrete. Professional construction drying is not "switching on a unit", but controlling the combination of temperature, humidity and air movement so that this moisture leaves the structure in a controlled way.',
    heroCta: "Calculate your drying package",
    heroCta2: "Why construction drying?",
    heroAlt: "The Vernast technicians",
    badge: "Eco condensation dehumidifiers",
    badgeSub: "Calculated for your volume",
    prKick: "The principle",
    prH2: "Your home temporarily becomes a controlled climate chamber.",
    prLede: /* @__PURE__ */ jsxs(Fragment, { children: [
      "A greenhouse changes the climate inside compared with outside. Construction drying does something similar: we temporarily create an indoor climate in which moisture moves more easily from ",
      /* @__PURE__ */ jsx(Link, { to: lp("/pleisterwerk-drogen"), children: "plaster" }),
      ", ",
      /* @__PURE__ */ jsx(Link, { to: lp("/chape-drogen"), children: "screed" }),
      " and walls into the surrounding air, and is then actually removed from that air. Three factors work together to achieve this; none of them works optimally on its own."
    ] }),
    factoren: [
      { h3: "1. Temperature", p: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Sufficient warmth increases the evaporation potential and supports the transport of moisture out of the material. In cold rooms we therefore add a ",
        /* @__PURE__ */ jsx(Link, { to: lp(toestelPad("teddh30")), children: "site heater" }),
        "."
      ] }) },
      { h3: "2. Relative humidity", p: /* @__PURE__ */ jsxs(Fragment, { children: [
        "By actively removing water vapour from the air, room is created again and again for moisture evaporating from the materials. That is the job of the ",
        /* @__PURE__ */ jsx(Link, { to: lp("/machines"), children: "construction dehumidifier" }),
        "."
      ] }) },
      { h3: "3. Air movement", p: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Dry air has to reach ",
        /* @__PURE__ */ jsx("i", { children: "every" }),
        " damp surface; still air along a wall or floor slows the process down. That is why many packages include ",
        /* @__PURE__ */ jsx(Link, { to: lp(toestelPad("ttv4500")), children: "fans" }),
        "."
      ] }) }
    ],
    prNote: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "That is why we calculate first, and only then set up." }),
      " The ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "drying calculator" }),
      " translates your floor area, ceiling height and situation into the right combination of units, the heart of every ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/pakket"), children: "Vernast drying package" }),
      "."
    ] }),
    m1Kick: "Misconception no. 1",
    m1H2: 'Why "turning the heating up" is not construction drying.',
    m1P1: /* @__PURE__ */ jsxs(Fragment, { children: [
      "With the same amount of water vapour, warm air has a much lower ",
      /* @__PURE__ */ jsx("b", { style: { color: "#fff" }, children: "relative" }),
      " humidity than cold air. That sounds as if the air has become much drier, but not a single gram of water has been removed from the building yet. The water is still in the air and in the building materials."
    ] }),
    m1P2: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Heating can support evaporation, but the water vapour released then has to be actively removed by dehumidification. Opening the windows is no guarantee either: natural ventilation depends entirely on the outdoor climate and on a warm, humid summer's day can even bring moisture ",
      /* @__PURE__ */ jsx("i", { children: "in" }),
      ". Professional construction drying makes the process ",
      /* @__PURE__ */ jsx("b", { style: { color: "#fff" }, children: "controllable instead of weather-dependent" }),
      "."
    ] }),
    koud: "Cold room",
    koudBig: "10 °C · 80",
    rvUnit: "% RH",
    warm: "Same air, heated",
    warmBig: "20 °C · 42",
    waterPerKg: " of water per kg of air",
    koudSub: "humid indoor air",
    warmSub: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { style: { color: "var(--red)" }, children: "exactly the same amount of water" }),
      " in the air, only the ratio changed"
    ] }),
    rvKick: "A little technical",
    rvH2: "What does relative humidity mean?",
    rvP1: "Relative humidity (RH) tells you how close the air is to saturation at a given temperature. At 100% RH the air is saturated with water vapour; the lower the RH, the more moisture the air can still absorb.",
    rvP2: /* @__PURE__ */ jsxs(Fragment, { children: [
      "For construction drying, that difference is crucial. Many building materials are porous and hygroscopic: water is not only at the surface but also deep in pores and capillaries. If we lower the moisture level of the surrounding air, a ",
      /* @__PURE__ */ jsx("b", { children: "moisture gradient" }),
      " develops between the wet material and its surroundings, and the water gradually moves outwards, where it can evaporate. Drying is never a single process:"
    ] }),
    chips: ["Capillary flow", "Evaporation", "Vapour transport", "Diffusion"],
    drKick: "Two kinds of dehumidifier",
    drH2: "The temperature on your site decides which unit takes the water out.",
    drLede: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Both take water out of the air, but not in the same way, and the difference shows as soon as the temperature drops. That is why the ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "drying calculator" }),
      " also asks how cold your space is."
    ] }),
    drogers: [
      { label: "Condensation · 15 – 25 °C", h3: "The standard on a housing site.", p: /* @__PURE__ */ jsxs(Fragment, { children: [
        "It cools the indoor air below its dew point and collects the water vapour as condensate. Above 15 °C that is the fastest and most economical way to take construction moisture out of a home, and it is what almost every package contains. ",
        /* @__PURE__ */ jsx("b", { children: "How that cycle runs is shown in the next section." })
      ] }) },
      { label: "Desiccant · also below 10 °C", h3: "For cold rooms and cellars.", p: /* @__PURE__ */ jsxs(Fragment, { children: [
        "It binds the water vapour to a desiccant instead of cooling it, and therefore keeps working at temperatures where condensation barely forms. On an unheated winter site or in a cellar it takes out water where a condensation unit stalls. The full difference is set out in ",
        /* @__PURE__ */ jsx(Link, { to: lp("/gids/condensdroger-of-adsorptiedroger"), children: "condensation or desiccant dehumidifier" }),
        "."
      ] }) }
    ],
    cyKick: "The cycle",
    cyH2: "How a condensation dehumidifier removes water from your home.",
    cyLede: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Inside, the humid air flows past a cold surface, cools below its dew point and gives up its water vapour as liquid water. The air leaves the machine slightly warmer and drier, and the cycle starts again: ",
      /* @__PURE__ */ jsx("b", { children: "material → air → dehumidifier → condensate → drainage" }),
      "."
    ] }),
    cyclus: [
      { h3: "Moisture in the material", p: "Water migrates through pores and capillaries to the surface and evaporates into the air." },
      { h3: "Intake", p: "The dehumidifier draws the humid indoor air through the unit with a powerful fan." },
      { h3: "Condensing", p: "The air cools below its dew point along a cold surface; water vapour turns into liquid water." },
      { h3: "Draining", p: "The condensate goes into a tank or is pumped away directly with a condensate pump." },
      { h3: "Back into the room", p: "Drier, slightly warmed air is distributed and picks up moisture from the materials again." }
    ],
    cyNote: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Where does all that water go?" }),
      " With simple units, into a tank that you empty regularly. For long-term professional drying we prefer continuous condensate drainage: a ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/toebehoren/condenspomp"), children: "condensate pump" }),
      " (",
      pomp,
      " per dehumidifier per day) pumps the water day and night straight to a drain, so the cycle keeps running without interruption, at night and at weekends too. You add it while ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "calculating your package" }),
      "."
    ] }),
    m2Kick: "Misconception no. 2",
    m2H2: "A wall can look dry and still contain a lot of water.",
    m2Lede: "A building material does not dry equally fast everywhere. This explains why a construction dehumidifier sometimes produces large amounts of water at first and considerably less later on, without the machine performing any worse.",
    fase1Label: "Phase 1 · fast",
    fase1H3: "The surface dries.",
    fase1P: "The easily accessible moisture at and just below the surface evaporates first. After a few days a wall can already look much drier, and the dehumidifier produces a lot of water.",
    fase1Bar: "High water extraction per day",
    fase2Label: "Phase 2 · slow",
    fase2H3: "The core still has to follow.",
    fase2P: "Water deeper down first has to migrate through the pores to the surface before it can evaporate. The surface looks dry, but there is still considerable moisture inside.",
    fase2Bar: "Moisture transport within the material is the limiting factor",
    meetKick: "To measure is to know",
    meetH3: "That is why measuring matters more than looking.",
    meetP: /* @__PURE__ */ jsxs(Fragment, { children: [
      'A white coat of plaster can look dry and a screed can feel solid, but that says nothing about what is happening deeper in the material. Visual assessment is unreliable. The end goal is never "the dehumidifier has run for seven days", but: ',
      /* @__PURE__ */ jsx("b", { children: "the material is ready for the next construction phase" }),
      ". That is why every package includes a moisture reading before and after, and you can optionally choose an ",
      /* @__PURE__ */ jsxs(Link, { to: lp("/verhuur/calculator"), children: [
        "official moisture report",
        rapport ? ` (${rapport})` : ""
      ] }),
      " for your insurer or landlord."
    ] }),
    meetAlt: "Vernast specialist measuring the moisture content of a wall",
    matKick: "Not every material is the same",
    matH2: "Plaster, screed and concrete do not dry in the same way.",
    matLede: /* @__PURE__ */ jsxs(Fragment, { children: [
      'Not every building material contains the same type of moisture. A professional drying strategy is therefore never "machine on as soon as the material has been laid"; the material, its age, technical specifications and the desired finish all help determine the approach. That is why the ',
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "calculator" }),
      " also asks ",
      /* @__PURE__ */ jsx("i", { children: "what" }),
      " you are drying."
    ] }),
    materialen: [
      { alt: "Freshly applied wet gypsum plaster with visible dark damp patches", h3: "Gypsum plaster", p: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Loses its excess water mainly through evaporation. Layer thickness, temperature, humidity, ventilation and the suction of the substrate determine the drying time when ",
        /* @__PURE__ */ jsx(Link, { to: lp("/pleisterwerk-drogen"), children: "drying plasterwork" }),
        "."
      ] }) },
      { alt: "Damp screed during the necessary curing phase", h3: "Screed & concrete", p: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Cement needs water for the hydration reaction through which it hardens. Drying aggressively too early disrupts this; when ",
        /* @__PURE__ */ jsx(Link, { to: lp("/chape-drogen"), children: "drying screed" }),
        " we only start after the necessary curing phase."
      ] }) },
      { alt: "Dry screed with shrinkage cracks caused by an overly aggressive drying process", h3: "Drying too aggressively", p: "Large moisture gradients between the surface and the core can encourage shrinkage and cracking. That is why we control the RH and do not let it drop below ±30% for long periods." }
    ],
    optKick: "The difference",
    optH3: "Not maximum drying. Optimal drying.",
    optP: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Overcapacity is not a mark of quality; the right capacity is. Too much power on a fresh layer pulls the surface dry while the core is still wet, and that is exactly how shrinkage and cracks appear. Why we control the climate rather than the number of units, you can read under ",
      /* @__PURE__ */ jsx(Link, { to: lp("/waarom-bouwdroging"), children: "why construction drying" }),
      "."
    ] }),
    optAlt: "A Vernast expert holds up a red card against drying too aggressively",
    matNote2: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Read more in our guides." }),
      " How many weeks your floor needs is explained in ",
      /* @__PURE__ */ jsx(Link, { to: lp("/gids/hoe-lang-moet-chape-drogen"), children: "how long screed takes to dry" }),
      ", and for the walls in ",
      /* @__PURE__ */ jsx(Link, { to: lp("/gids/hoe-lang-moet-pleisterwerk-drogen"), children: "how long plasterwork takes to dry" }),
      ", both with the drying times per thickness. Working in a cold cellar, or is the water under the floor? Then ",
      /* @__PURE__ */ jsx(Link, { to: lp("/gids/condensdroger-of-adsorptiedroger"), children: "condensation or desiccant dehumidifier" }),
      " explains the difference. And what a unit running day and night costs in electricity, we work out in ",
      /* @__PURE__ */ jsx(Link, { to: lp("/gids/stroomverbruik-bouwdroger"), children: "power consumption of a construction dehumidifier" }),
      ". All guides are in one place under ",
      /* @__PURE__ */ jsx(Link, { to: lp("/gids"), children: "guides to construction drying" }),
      "."
    ] }),
    samKick: "In summary",
    samH2: "From wet material to a dry structure, in eight steps.",
    stappen: [
      { b: "Moisture is in the building material", rest: ", in pores and capillaries, deep into the core." },
      { b: "The right climate", rest: " stimulates the transport of moisture to the surface." },
      { b: "The moisture evaporates", rest: " into the surrounding air." },
      { b: "Air circulation", rest: " carries the humid air to the dehumidifier." },
      { b: "The construction dehumidifier", rest: " removes the water vapour from the air." },
      { b: "The condensate", rest: " is drained out of the building." },
      { b: "Drier air", rest: " comes into contact with the material again." },
      { b: "The process repeats itself", rest: " until the desired moisture level is measured." }
    ],
    werfKick: "Construction dehumidifier hire in Flanders",
    werfH2: "From theory to your site.",
    werfLede: /* @__PURE__ */ jsxs(Fragment, { children: [
      "At Vernast you do not hire a standalone machine, but a calculated drying climate. Based on your volume and situation, our ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "drying calculator" }),
      " determines which package you need, for ",
      /* @__PURE__ */ jsx(Link, { to: lp("/pleisterwerk-drogen"), children: "plasterwork" }),
      ", ",
      /* @__PURE__ */ jsx(Link, { to: lp("/chape-drogen"), children: "screed" }),
      ", ",
      /* @__PURE__ */ jsx(Link, { to: lp("/waterschade"), children: "water damage" }),
      " or a ",
      /* @__PURE__ */ jsx(Link, { to: lp("/renovatie"), children: "cold cellar" }),
      ". Every package is delivered and installed within 24 hours, including moisture readings before and after. Prefer to do it yourself? You can collect individual ",
      /* @__PURE__ */ jsx(Link, { to: lp("/machines"), children: "construction dehumidifiers, fans and site heaters" }),
      " at a good price from our ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/afhalen"), children: "collection point along the A12 in Aartselaar" }),
      ". And if you have questions during the hire, our ",
      /* @__PURE__ */ jsx(Link, { to: lp("/klantservice"), children: "customer service" }),
      " is always there for you."
    ] }),
    prinKick: "The Vernast principle",
    prinH3: "Not a machine because it happens to be available. A set-up because it suits your building.",
    prinP: /* @__PURE__ */ jsxs(Fragment, { children: [
      "That is how we control the climate around your building materials, and how the moisture leaves the structure in a controlled way, with a ",
      /* @__PURE__ */ jsx(Link, { to: lp("/waarom-bouwdroging"), children: "100% dry guarantee" }),
      ".*"
    ] }),
    prinCta: "Calculate your drying package",
    prinAlt: "Vernast technician noting down the measurement results",
    form: {
      kick: "Any more questions about this?",
      h2: "Our drying specialists are happy to help.",
      lede: "Not sure about the right approach for your project? Ask your question and you will get an answer from a specialist within one working day.",
      opties: ["How does drying work in my situation?", "Advice on the right package", "Question about prices or delivery", "Something else"],
      situatiePh: "E.g. new build of 140 m², screed laid last week: when can the floor fitter start?"
    }
  })
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/HoeDrogenWerktPage.tsx");
const RAPPORT = EXTRAS.find((x2) => x2.k === "rapport");
const HoeDrogenWerktPage = () => {
  const lp = useLokaalPad();
  const taal = useTaal();
  const toon2 = useToonBedrag();
  const pompBedrag = toon2(PUMP.price);
  const pomp = taal === "nl" ? euro(PUMP.price) : `${pompBedrag.tekst} ${pompBedrag.label}`;
  const rapportBedrag = toon2(RAPPORT ? RAPPORT.price : 0);
  const rapport = !RAPPORT ? "" : taal === "nl" ? euro(RAPPORT.price) : `${rapportBedrag.tekst} ${rapportBedrag.label}`;
  const waterGram = taal === "en" ? "6.2 g" : "6,2 g";
  const t = useCopy(COPY)({ lp, pomp, rapport });
  return /* @__PURE__ */ jsxs("div", { className: "hdw-page", children: [
    /* @__PURE__ */ jsx(
      PageMeta,
      {
        ...useSeo("hoeDrogenWerkt"),
        path: lp("/hoe-drogen-werkt"),
        jsonLd: [
          organizationSchema(),
          breadcrumbSchema([
            { name: t.crumbHome, path: lp("/") },
            { name: t.crumb, path: lp("/hoe-drogen-werkt") }
          ])
        ]
      }
    ),
    /* @__PURE__ */ jsx(V3Header, { lightAfter: 420 }),
    /* @__PURE__ */ jsx("div", { className: "redtop", children: /* @__PURE__ */ jsx("section", { className: "hero", "data-screen-label": "Hoe drogen hero", children: /* @__PURE__ */ jsxs("div", { className: "wrap hero-grid", children: [
      /* @__PURE__ */ jsxs("div", { className: "hero-copy", children: [
        /* @__PURE__ */ jsx("span", { className: "kick rv", children: t.heroKick }),
        /* @__PURE__ */ jsx("h1", { className: "rv", children: t.h1 }),
        /* @__PURE__ */ jsx("p", { className: "rv d1", children: t.heroP }),
        /* @__PURE__ */ jsxs("div", { className: "hcta rv d3", children: [
          /* @__PURE__ */ jsxs(Link, { className: "btn btn-white", to: lp("/verhuur/calculator"), children: [
            t.heroCta,
            /* @__PURE__ */ jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx("path", { d: "M5 12h14" }),
              /* @__PURE__ */ jsx("path", { d: "m12 5 7 7-7 7" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(Link, { className: "btn btn-ghost", to: lp("/waarom-bouwdroging"), children: t.heroCta2 })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hero-vis rv d2", children: [
        /* @__PURE__ */ jsx("img", { src: "/vernast/team-tools.webp", alt: t.heroAlt, width: 1400, height: 859, decoding: "async", style: { width: "min(100%,560px)" } }),
        /* @__PURE__ */ jsxs("div", { className: "fbadge", style: { top: "-34px", left: "4%" }, children: [
          /* @__PURE__ */ jsx("span", { className: "ic", children: /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsx("path", { d: "m9 12 2 2 4-4" }),
            /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            t.badge,
            /* @__PURE__ */ jsx("small", { children: t.badgeSub })
          ] })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "sw", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
        /* @__PURE__ */ jsx("span", { className: "kick rv", children: t.prKick }),
        /* @__PURE__ */ jsx("h2", { className: "sec rv", children: t.prH2 }),
        /* @__PURE__ */ jsx("p", { className: "lede rv d1", children: t.prLede })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "g3", children: t.factoren.map((k, n) => /* @__PURE__ */ jsxs("div", { className: ["kaart rv", "kaart rv d1", "kaart rv d2"][n], children: [
        /* @__PURE__ */ jsx(KlimaatMeter, { variant: ["temperatuur", "vocht", "lucht"][n], volgorde: n }),
        /* @__PURE__ */ jsx("h3", { children: k.h3 }),
        /* @__PURE__ */ jsx("p", { children: k.p })
      ] }, k.h3)) }),
      /* @__PURE__ */ jsx("div", { className: "note rv", children: t.prNote })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "sr", children: /* @__PURE__ */ jsxs("div", { className: "wrap splitv", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "kick rv", children: t.m1Kick }),
        /* @__PURE__ */ jsx("h2", { className: "sec rv", children: t.m1H2 }),
        /* @__PURE__ */ jsx("p", { className: "lede rv d1", children: t.m1P1 }),
        /* @__PURE__ */ jsx("p", { className: "lede rv d1", style: { marginTop: "12px" }, children: t.m1P2 })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rvh2", children: [
        /* @__PURE__ */ jsxs("div", { className: "rvbox rv", style: { "--w": "80%" }, children: [
          /* @__PURE__ */ jsxs("div", { className: "rvkop", children: [
            /* @__PURE__ */ jsx("span", { className: "rvb-ic ijs", "aria-hidden": "true", children: /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx("path", { d: "m10 20-1.25-2.5L6 18" }),
              /* @__PURE__ */ jsx("path", { d: "M10 4 8.75 6.5 6 6" }),
              /* @__PURE__ */ jsx("path", { d: "m14 20 1.25-2.5L18 18" }),
              /* @__PURE__ */ jsx("path", { d: "m14 4 1.25 2.5L18 6" }),
              /* @__PURE__ */ jsx("path", { d: "m17 21-3-6h-4" }),
              /* @__PURE__ */ jsx("path", { d: "m17 3-3 6 1.5 3" }),
              /* @__PURE__ */ jsx("path", { d: "M2 12h6.5L10 9" }),
              /* @__PURE__ */ jsx("path", { d: "m20 10-1.5 2 1.5 2" }),
              /* @__PURE__ */ jsx("path", { d: "M22 12h-6.5L14 15" }),
              /* @__PURE__ */ jsx("path", { d: "m4 10 1.5 2L4 14" }),
              /* @__PURE__ */ jsx("path", { d: "m7 21 3-6-1.5-3" }),
              /* @__PURE__ */ jsx("path", { d: "m7 3 3 6h4" })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "t", children: t.koud })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "big", children: [
            t.koudBig,
            /* @__PURE__ */ jsx("small", { children: t.rvUnit })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "rvmeet", children: /* @__PURE__ */ jsx("div", { className: "bar", children: /* @__PURE__ */ jsx("b", {}) }) }),
          /* @__PURE__ */ jsxs("div", { className: "rvmeet rvwater", children: [
            /* @__PURE__ */ jsxs("span", { className: "rvlab", children: [
              /* @__PURE__ */ jsx("b", { children: waterGram }),
              t.waterPerKg
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "water", "aria-hidden": "true", children: [
              /* @__PURE__ */ jsx("b", {}),
              /* @__PURE__ */ jsx("i", {}),
              /* @__PURE__ */ jsx("i", {}),
              /* @__PURE__ */ jsx("i", {}),
              /* @__PURE__ */ jsx("i", {})
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "sub", children: t.koudSub })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rvbox rv d1", style: { "--w": "42%" }, children: [
          /* @__PURE__ */ jsxs("div", { className: "rvkop", children: [
            /* @__PURE__ */ jsxs("span", { className: "rvb-ic vuur", "aria-hidden": "true", children: [
              /* @__PURE__ */ jsx("svg", { className: "vlam", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" }) }),
              /* @__PURE__ */ jsx("svg", { className: "kern", width: "8", height: "8", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12 3c.6 3 2.4 4.3 3.6 6.1C16.6 10.6 17 12 17 13.5a5 5 0 0 1-10 0c0-1.3.4-2.4 1.1-3.4.2 1 .8 1.8 1.6 2.2-.3-2.6.6-5.4 2.3-9.3z" }) })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "t", children: t.warm })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "big", children: [
            t.warmBig,
            /* @__PURE__ */ jsx("small", { children: t.rvUnit })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "rvmeet", children: /* @__PURE__ */ jsx("div", { className: "bar", children: /* @__PURE__ */ jsx("b", {}) }) }),
          /* @__PURE__ */ jsxs("div", { className: "rvmeet rvwater", children: [
            /* @__PURE__ */ jsxs("span", { className: "rvlab", children: [
              /* @__PURE__ */ jsx("b", { children: waterGram }),
              t.waterPerKg
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "water", "aria-hidden": "true", children: [
              /* @__PURE__ */ jsx("b", {}),
              /* @__PURE__ */ jsx("i", {}),
              /* @__PURE__ */ jsx("i", {}),
              /* @__PURE__ */ jsx("i", {}),
              /* @__PURE__ */ jsx("i", {})
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "sub", children: t.warmSub })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "sw", children: /* @__PURE__ */ jsxs("div", { className: "wrap rvsplit", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "kick rv", children: t.rvKick }),
        /* @__PURE__ */ jsx("h2", { className: "sec rv", children: t.rvH2 }),
        /* @__PURE__ */ jsx("p", { className: "lede rv d1", style: { marginTop: "16px" }, children: t.rvP1 }),
        /* @__PURE__ */ jsx("p", { className: "lede rv d1", style: { marginTop: "12px" }, children: t.rvP2 }),
        /* @__PURE__ */ jsx("div", { className: "rvchips rv d2", children: t.chips.map((c) => /* @__PURE__ */ jsx("span", { children: c }, c)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "rvimg rv d1", children: /* @__PURE__ */ jsx(VochtGrafiek, {}) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "sr", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
        /* @__PURE__ */ jsx("span", { className: "kick rv", children: t.drKick }),
        /* @__PURE__ */ jsx("h2", { className: "sec rv", children: t.drH2 }),
        /* @__PURE__ */ jsx("p", { className: "lede rv d1", children: t.drLede })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "fase2", children: t.drogers.map((d, n) => /* @__PURE__ */ jsxs("div", { className: n === 0 ? "fs f1 rv" : "fs rv d1", children: [
        /* @__PURE__ */ jsx("span", { className: "fl", children: d.label }),
        /* @__PURE__ */ jsx("h3", { children: d.h3 }),
        /* @__PURE__ */ jsx("p", { children: d.p })
      ] }, d.h3)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "sw", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
        /* @__PURE__ */ jsx("span", { className: "kick rv", children: t.cyKick }),
        /* @__PURE__ */ jsx("h2", { className: "sec rv", children: t.cyH2 }),
        /* @__PURE__ */ jsx("p", { className: "lede rv d1", children: t.cyLede })
      ] }),
      /* @__PURE__ */ jsxs(InBeeld, { className: "cyc", children: [
        /* @__PURE__ */ jsxs("div", { className: "cy rv", "data-stap": "1", children: [
          /* @__PURE__ */ jsx("i", { children: "01" }),
          /* @__PURE__ */ jsxs("div", { className: "ci2", children: [
            /* @__PURE__ */ jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx("path", { d: "M3 21h18" }),
              /* @__PURE__ */ jsx("path", { d: "M5 21V7l7-4 7 4v14" })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "cy-nat" }),
            /* @__PURE__ */ jsx("span", { className: "cy-nat" }),
            /* @__PURE__ */ jsx("span", { className: "cy-nat" })
          ] }),
          /* @__PURE__ */ jsx("h3", { children: t.cyclus[0].h3 }),
          /* @__PURE__ */ jsx("p", { children: t.cyclus[0].p })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "cy rv d1", "data-stap": "2", children: [
          /* @__PURE__ */ jsx("i", { children: "02" }),
          /* @__PURE__ */ jsxs("div", { className: "ci2", children: [
            /* @__PURE__ */ jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx("path", { d: "M9.6 4.6A2 2 0 1 1 11 8H2" }),
              /* @__PURE__ */ jsx("path", { d: "M12.6 19.4A2 2 0 1 0 14 16H2" })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "cy-zuig" }),
            /* @__PURE__ */ jsx("span", { className: "cy-zuig" }),
            /* @__PURE__ */ jsx("span", { className: "cy-zuig" })
          ] }),
          /* @__PURE__ */ jsx("h3", { children: t.cyclus[1].h3 }),
          /* @__PURE__ */ jsx("p", { children: t.cyclus[1].p })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "cy rv d2", "data-stap": "3", style: { position: "relative" }, children: [
          /* @__PURE__ */ jsx("i", { children: "03" }),
          /* @__PURE__ */ jsxs("div", { className: "ci2", children: [
            /* @__PURE__ */ jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" }) }),
            /* @__PURE__ */ jsx("span", { className: "drop", style: { left: "14px", top: "44px" }, children: /* @__PURE__ */ jsx("svg", { width: "10", height: "10", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" }) }) }),
            /* @__PURE__ */ jsx("span", { className: "drop", style: { left: "26px", top: "44px", animationDelay: "1.2s" }, children: /* @__PURE__ */ jsx("svg", { width: "8", height: "8", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" }) }) })
          ] }),
          /* @__PURE__ */ jsx("h3", { children: t.cyclus[2].h3 }),
          /* @__PURE__ */ jsx("p", { children: t.cyclus[2].p })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "cy rv d3", "data-stap": "4", children: [
          /* @__PURE__ */ jsx("i", { children: "04" }),
          /* @__PURE__ */ jsxs("div", { className: "ci2", children: [
            /* @__PURE__ */ jsx("span", { className: "cy-peil" }),
            /* @__PURE__ */ jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx("path", { d: "M19 14V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v8" }),
              /* @__PURE__ */ jsx("path", { d: "M5 14h14v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("h3", { children: t.cyclus[3].h3 }),
          /* @__PURE__ */ jsx("p", { children: t.cyclus[3].p })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "cy rv d3", "data-stap": "5", children: [
          /* @__PURE__ */ jsx("i", { children: "05" }),
          /* @__PURE__ */ jsx("div", { className: "ci2", children: /* @__PURE__ */ jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsx("path", { d: "M21 12a9 9 0 1 1-9-9" }),
            /* @__PURE__ */ jsx("path", { d: "M21 3v6h-6" })
          ] }) }),
          /* @__PURE__ */ jsx("h3", { children: t.cyclus[4].h3 }),
          /* @__PURE__ */ jsx("p", { children: t.cyclus[4].p })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "note rv", children: t.cyNote })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "sr", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
        /* @__PURE__ */ jsx("span", { className: "kick rv", children: t.m2Kick }),
        /* @__PURE__ */ jsx("h2", { className: "sec rv", children: t.m2H2 }),
        /* @__PURE__ */ jsx("p", { className: "lede rv d1", children: t.m2Lede })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "fase2", children: [
        /* @__PURE__ */ jsxs("div", { className: "fs f1 rv", style: { "--w": "78%" }, children: [
          /* @__PURE__ */ jsx("span", { className: "fl", children: t.fase1Label }),
          /* @__PURE__ */ jsx("h3", { children: t.fase1H3 }),
          /* @__PURE__ */ jsx("p", { children: t.fase1P }),
          /* @__PURE__ */ jsx("div", { className: "bar", children: /* @__PURE__ */ jsx("b", {}) }),
          /* @__PURE__ */ jsx("span", { className: "bl", children: t.fase1Bar })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "fs rv d1", style: { "--w": "26%" }, children: [
          /* @__PURE__ */ jsx("span", { className: "fl", children: t.fase2Label }),
          /* @__PURE__ */ jsx("h3", { children: t.fase2H3 }),
          /* @__PURE__ */ jsx("p", { children: t.fase2P }),
          /* @__PURE__ */ jsx("div", { className: "bar", children: /* @__PURE__ */ jsx("b", {}) }),
          /* @__PURE__ */ jsx("span", { className: "bl", children: t.fase2Bar })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "manband lite rv d2", style: { marginTop: "20px" }, children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-t", children: [
          /* @__PURE__ */ jsx("span", { className: "mbk", children: t.meetKick }),
          /* @__PURE__ */ jsx("h3", { children: t.meetH3 }),
          /* @__PURE__ */ jsx("p", { children: t.meetP })
        ] }),
        /* @__PURE__ */ jsx("img", { className: "mb-man", src: "/vernast/man-vochtmeter.webp", alt: t.meetAlt, width: 1400, height: 933, loading: "lazy", decoding: "async", style: { width: "min(44%,440px)" } })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "sw", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
        /* @__PURE__ */ jsx("span", { className: "kick rv", children: t.matKick }),
        /* @__PURE__ */ jsx("h2", { className: "sec rv", children: t.matH2 }),
        /* @__PURE__ */ jsx("p", { className: "lede rv d1", children: t.matLede })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "g3", children: [
        /* @__PURE__ */ jsxs("div", { className: "kaart materiaalkaart rv", children: [
          /* @__PURE__ */ jsx("img", { className: "materiaalfoto", src: "/vernast/droogproces-nat-pleister.webp", alt: t.materialen[0].alt, width: 1672, height: 941, loading: "lazy", decoding: "async" }),
          /* @__PURE__ */ jsxs("div", { className: "materiaaltekst", children: [
            /* @__PURE__ */ jsx("h3", { children: t.materialen[0].h3 }),
            /* @__PURE__ */ jsx("p", { children: t.materialen[0].p })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "kaart materiaalkaart rv d1", children: [
          /* @__PURE__ */ jsx("img", { className: "materiaalfoto", src: "/vernast/droogproces-vochtige-chape.webp", alt: t.materialen[1].alt, width: 1672, height: 941, loading: "lazy", decoding: "async" }),
          /* @__PURE__ */ jsxs("div", { className: "materiaaltekst", children: [
            /* @__PURE__ */ jsx("h3", { children: t.materialen[1].h3 }),
            /* @__PURE__ */ jsx("p", { children: t.materialen[1].p })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "kaart materiaalkaart rv d2", children: [
          /* @__PURE__ */ jsx("img", { className: "materiaalfoto", src: "/vernast/droogproces-te-snel-droog.webp", alt: t.materialen[2].alt, width: 1672, height: 941, loading: "lazy", decoding: "async" }),
          /* @__PURE__ */ jsxs("div", { className: "materiaaltekst", children: [
            /* @__PURE__ */ jsx("h3", { children: t.materialen[2].h3 }),
            /* @__PURE__ */ jsx("p", { children: t.materialen[2].p })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "manband rv d1", style: { marginTop: "26px" }, children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-t", children: [
          /* @__PURE__ */ jsx("span", { className: "mbk", children: t.optKick }),
          /* @__PURE__ */ jsx("h3", { children: t.optH3 }),
          /* @__PURE__ */ jsx("p", { children: t.optP })
        ] }),
        /* @__PURE__ */ jsx("img", { className: "mb-man", src: "/vernast/man-rode-kaart.webp", alt: t.optAlt, width: 1440, height: 1438, loading: "lazy", decoding: "async", style: { width: "min(34%,340px)" } })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "note rv", children: t.matNote2 })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "sr", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", style: { textAlign: "center", marginLeft: "auto", marginRight: "auto" }, children: [
        /* @__PURE__ */ jsx("span", { className: "kick rv", children: t.samKick }),
        /* @__PURE__ */ jsx("h2", { className: "sec rv", children: t.samH2 })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "stap8", children: t.stappen.map((s, n) => /* @__PURE__ */ jsxs("div", { className: ["s8 rv", "s8 rv", "s8 rv d1", "s8 rv d1", "s8 rv d2", "s8 rv d2", "s8 rv d3", "s8 rv d3"][n], children: [
        /* @__PURE__ */ jsx("i", {}),
        /* @__PURE__ */ jsxs("span", { children: [
          /* @__PURE__ */ jsx("b", { children: s.b }),
          s.rest
        ] })
      ] }, s.b)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "sw", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
        /* @__PURE__ */ jsx("span", { className: "kick rv", children: t.werfKick }),
        /* @__PURE__ */ jsx("h2", { className: "sec rv", children: t.werfH2 }),
        /* @__PURE__ */ jsx("p", { className: "lede rv d1", children: t.werfLede })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "manband rv d1", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-t", children: [
          /* @__PURE__ */ jsx("span", { className: "mbk", children: t.prinKick }),
          /* @__PURE__ */ jsx("h3", { children: t.prinH3 }),
          /* @__PURE__ */ jsx("p", { children: t.prinP }),
          /* @__PURE__ */ jsxs(Link, { className: "btn btn-white mb-cta", to: lp("/verhuur/calculator"), children: [
            t.prinCta,
            /* @__PURE__ */ jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx("path", { d: "M5 12h14" }),
              /* @__PURE__ */ jsx("path", { d: "m12 5 7 7-7 7" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("img", { className: "mb-man", src: "/vernast/man-klembord-pen.webp", alt: t.prinAlt, width: 1400, height: 934, loading: "lazy", decoding: "async", style: { width: "min(30%,320px)" } })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(
      ContactBlok,
      {
        kicker: t.form.kick,
        titel: t.form.h2,
        lede: t.form.lede,
        onderwerpen: t.form.opties,
        placeholder: t.form.situatiePh
      }
    ),
    /* @__PURE__ */ jsx(V3Footer, {})
  ] });
};
export {
  HoeDrogenWerktPage as default
};
