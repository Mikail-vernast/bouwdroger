import { jsxs, jsx } from "react/jsx-runtime";
import { useRef, useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { P as PageMeta } from "./PageMeta-BXulEWcY.js";
import { l as V3Header } from "./V3Header-BeIMcMg7.js";
import { V as V3Footer } from "./V3Footer-9z4J1I4x.js";
import { u as useCopy, a as useLokaalPad } from "../main.mjs";
import { g as DEFAULT_CD, k as DEFAULT_PD, h as DEFAULT_SIZE, C as CD_VALUES, P as PD_VALUES, S as SIZE_VALUES, l as configToQuery } from "./verhuur-8XCQs1EE.js";
import { u as useSeo } from "./seo-BMvlJeai.js";
import { s as serviceSchema, b as breadcrumbSchema } from "./schema-VJMHyxOJ.js";
/* empty css                       */
import "vite-react-ssg";
import "./FontPreload-C6Rzq6ld.js";
import "./verhuur-CgnDb-wO.js";
import "./tarieven-ZrzMF0e-.js";
import "lucide-react";
import "./packages-DdkKuPcF.js";
import "./verhuur.fr-CrIPL5Eo.js";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/verhuur/Ruler.tsx");
const COPY$1 = {
  nl: { maatwerk: "maatwerk", weetNiet: "Weet ik niet" },
  fr: { maatwerk: "sur mesure", weetNiet: "Je ne sais pas" },
  en: { maatwerk: "custom", weetNiet: "I don't know" }
};
const Ruler = ({ config, onChange }) => {
  const t = useCopy(COPY$1);
  const trackRef = useRef(null);
  const [value, setValue] = useState(config.snaps[Math.floor(config.snaps.length / 2)]);
  const [mode, setMode] = useState("value");
  const [dragging, setDragging] = useState(false);
  const ticks = useMemo(() => {
    const out = [];
    for (let t2 = config.min; t2 <= config.max + 1e-9; t2 += config.tick) {
      const big = Math.abs(t2 / config.bigEvery - Math.round(t2 / config.bigEvery)) < 1e-6;
      out.push({
        left: (t2 - config.min) / (config.max - config.min) * 100,
        big,
        label: big ? config.format(Math.round(t2 * 10) / 10) : ""
      });
    }
    return out;
  }, [config]);
  const percent = (v) => (v - config.min) / (config.max - config.min) * 100;
  const needleLeft = mode === "custom" ? "calc(100% - 1.5px)" : `calc(${percent(value).toFixed(2)}% - 1.5px)`;
  const snapUp = (raw) => {
    const hit = config.snaps.find((s) => s >= raw - 1e-9);
    if (hit !== void 0) return hit;
    return config.custom ? "custom" : config.snaps[config.snaps.length - 1];
  };
  const commit = (v) => {
    setValue(v);
    setMode("value");
    onChange(config.format(v));
  };
  const chooseCustom = () => {
    setMode("custom");
    setValue(config.max);
    onChange("custom");
  };
  const chooseUnknown = () => {
    if (config.unknown === void 0) return;
    setMode("unknown");
    setValue(config.unknown);
    onChange("onbekend");
  };
  const valueAt = (event) => {
    const rect = trackRef.current?.getBoundingClientRect();
    if (!rect) return config.min;
    const x = event.clientX - rect.left;
    return config.min + Math.min(1, Math.max(0, x / rect.width)) * (config.max - config.min);
  };
  const shown = Math.round(value * 10) / 10;
  const displayValue = mode === "custom" ? `${config.snaps[config.snaps.length - 1]}+` : mode === "unknown" ? `± ${config.format(shown)}` : config.format(shown);
  const caption = mode === "custom" ? config.label(NaN) : mode === "unknown" ? config.unknownLabel ?? "" : config.label(shown);
  const marked = mode === "custom" ? "custom" : mode === "unknown" ? "unk" : String(value);
  return /* @__PURE__ */ jsxs("div", { className: "ruler", children: [
    /* @__PURE__ */ jsxs("div", { className: "rv", children: [
      /* @__PURE__ */ jsx("span", { className: "val", children: displayValue }),
      /* @__PURE__ */ jsx("small", { children: config.unit })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "rvl", children: caption }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "rtrack",
        ref: trackRef,
        onPointerDown: (event) => {
          setDragging(true);
          event.currentTarget.setPointerCapture(event.pointerId);
          setMode("value");
          setValue(valueAt(event));
        },
        onPointerMove: (event) => {
          if (!dragging) return;
          setValue(valueAt(event));
        },
        onPointerUp: (event) => {
          setDragging(false);
          const snapped = snapUp(valueAt(event));
          if (snapped === "custom") chooseCustom();
          else commit(snapped);
        },
        children: [
          /* @__PURE__ */ jsx("div", { className: "rticks", children: ticks.map((tick, i) => /* @__PURE__ */ jsx(
            "span",
            {
              className: `rt${tick.big ? " big" : ""}${tick.left > 93 ? " edge-r" : tick.left < 7 ? " edge-l" : ""}`,
              style: { left: `${tick.left.toFixed(2)}%`, height: tick.big ? "40%" : "21%" },
              children: tick.big && /* @__PURE__ */ jsx("span", { className: "lb", children: tick.label })
            },
            i
          )) }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "rneedle",
              style: { left: needleLeft, transition: dragging ? "none" : void 0 }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "rsnaps", children: [
      config.snaps.map((snap) => /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          className: marked === String(snap) ? "on" : void 0,
          onClick: () => commit(snap),
          children: [
            config.format(snap),
            config.unit
          ]
        },
        snap
      )),
      config.custom && /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          className: marked === "custom" ? "on" : void 0,
          onClick: chooseCustom,
          children: [
            config.snaps[config.snaps.length - 1],
            "+",
            config.unit,
            " · ",
            t.maatwerk
          ]
        }
      ),
      config.unknown !== void 0 && /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          className: marked === "unk" ? "on" : void 0,
          onClick: chooseUnknown,
          children: t.weetNiet
        }
      )
    ] })
  ] });
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/verhuur/VerhuurCalculatorPage.tsx");
const ADVANCE_DELAY = 240;
const SIZES = SIZE_VALUES.map(Number);
const PLASTERS = PD_VALUES.map((v) => Number(v.replace(",", ".")));
const SCREEDS = CD_VALUES.map((v) => Number(v.replace(",", ".")));
const grootste = (reeks) => reeks[reeks.length - 1] ?? 0;
const middelste = (reeks) => reeks[Math.floor(reeks.length / 2)] ?? 0;
const COPY = {
  nl: {
    komma: ",",
    meerDan: (n) => `Meer dan ${n} m², maatwerkofferte`,
    gebouw: (v) => `Gebouw kleiner dan ${v} m²`,
    gemiddelde: (n) => `Wij rekenen met een gemiddelde van ${n} cm`,
    dunPleister: "Dun pleisterwerk",
    dikPleister: "Dik pleisterwerk",
    gangbarePleister: "Gangbare pleisterdikte",
    dunneChape: "Dunne chape",
    dikkeChape: "Dikke chape",
    gangbareChape: "Gangbare chapedikte",
    what: [
      { alt: "Vers gepleisterde muren in een woning in afwerking", title: "Pleisterwerk", sub: "Muren drogen" },
      { alt: "Verse chapevloer in een nieuwbouwwoning", title: "Vloer drogen", sub: "Chape" },
      {
        alt: "Leefruimte met vers pleisterwerk én een verse chapevloer",
        title: "Pleisterwerk + chape",
        sub: "Muren + vloer drogen"
      },
      {
        alt: "Muur met vochtschade en schimmel na waterschade",
        title: "Waterschade",
        sub: "Absorptiedroging, snel geleverd"
      }
    ],
    serviceName: "Droogpakket samenstellen",
    serviceDesc: "Bereken in vijf vragen welke toestellen uw woning nodig heeft, hoe lang het drogen duurt en wat het kost.",
    serviceType: "Bouwdroging",
    home: "Home",
    h1: "Droogpakket samenstellen, bereken uw toestellen, droogtijd en prijs",
    workerAlt: "Vernast technieker draagt een bouwdroger op zijn rug",
    terug: "← Terug",
    stap: (n, van) => `Stap ${n} / ${van}`,
    q1: "Hoe groot is uw woning",
    q1sub: "Sleep over de liniaal tot de oppervlakte die het best past.",
    verder: "Verder →",
    q2: "Wat wilt u drogen",
    q2sub: "Pleisterwerk en chape geven hun vocht anders af.",
    q3: "Hoe dik is het pleisterwerk",
    q3sub: "Dikker pleisterwerk bevat meer water en vraagt meer droogtijd. Sleep naar de juiste dikte.",
    q4: "Hoe dik is de chape",
    q4sub: "Chape is meestal de grootste vochtbron. Sleep naar de juiste dikte.",
    q5: "Zorgt u zelf voor verwarming?",
    q5sub: "Drogen werkt enkel goed boven 15 °C. Zo niet, voegen wij elektrische kachels toe.",
    ja: "Ja, ik verwarm zelf",
    jaSub: "De ruimte is boven 15 °C, uw eigen verwarming staat aan",
    kachelAlt: "Vernast elektrische kachel",
    nee: "Nee, voeg kachels toe",
    neeSub: "Onze elektrische kachels komen mee in het pakket",
    maatH: "Groot project? Dat is maatwerk.",
    maatP: "Boven 260 m² stellen wij het droogplan persoonlijk samen, met plaatsbezoek indien nodig, projectprijs en planning op maat. Vertel ons kort over uw project en wij nemen binnen één werkdag contact op.",
    maatCta: "Vraag uw maatwerkofferte aan →",
    bel: "Bel 03 689 90 65"
  },
  fr: {
    komma: ",",
    meerDan: (n) => `Plus de ${n} m², devis sur mesure`,
    gebouw: (v) => `Bâtiment de moins de ${v} m²`,
    gemiddelde: (n) => `Nous calculons avec une moyenne de ${n} cm`,
    dunPleister: "Plafonnage fin",
    dikPleister: "Plafonnage épais",
    gangbarePleister: "Épaisseur de plafonnage courante",
    dunneChape: "Chape fine",
    dikkeChape: "Chape épaisse",
    gangbareChape: "Épaisseur de chape courante",
    what: [
      {
        alt: "Murs fraîchement plafonnés dans une habitation en finition",
        title: "Plafonnage",
        sub: "Sécher les murs"
      },
      { alt: "Chape fraîche dans une maison neuve", title: "Sécher le sol", sub: "Chape" },
      {
        alt: "Séjour avec un plafonnage frais et une chape fraîche",
        title: "Plafonnage + chape",
        sub: "Sécher murs + sol"
      },
      {
        alt: "Mur avec dégâts d'humidité et moisissures après des dégâts des eaux",
        title: "Dégâts des eaux",
        sub: "Séchage par absorption, livraison rapide"
      }
    ],
    serviceName: "Composer votre pack de séchage",
    serviceDesc: "Calculez en cinq questions de quels appareils votre habitation a besoin, combien de temps dure le séchage et ce qu'il coûte.",
    serviceType: "Séchage de chantier",
    home: "Accueil",
    h1: "Composer votre pack de séchage : calculez vos appareils, le temps de séchage et le prix",
    workerAlt: "Technicien Vernast portant un déshumidificateur de chantier sur le dos",
    terug: "← Retour",
    stap: (n, van) => `Étape ${n} / ${van}`,
    q1: "Quelle est la superficie de votre habitation",
    q1sub: "Faites glisser la règle jusqu'à la superficie qui correspond le mieux.",
    verder: "Suivant →",
    q2: "Que voulez-vous sécher",
    q2sub: "Le plafonnage et la chape ne libèrent pas leur humidité de la même manière.",
    q3: "Quelle est l'épaisseur du plafonnage",
    q3sub: "Un plafonnage plus épais contient plus d'eau et demande plus de temps de séchage. Faites glisser jusqu'à la bonne épaisseur.",
    q4: "Quelle est l'épaisseur de la chape",
    q4sub: "La chape est généralement la principale source d'humidité. Faites glisser jusqu'à la bonne épaisseur.",
    q5: "Chauffez-vous vous-même ?",
    q5sub: "Le séchage ne fonctionne bien qu'au-dessus de 15 °C. Sinon, nous ajoutons des chauffages électriques.",
    ja: "Oui, je chauffe moi-même",
    jaSub: "La pièce est à plus de 15 °C, votre propre chauffage est allumé",
    kachelAlt: "Chauffage électrique Vernast",
    nee: "Non, ajoutez des chauffages",
    neeSub: "Nos chauffages électriques sont inclus dans le pack",
    maatH: "Grand projet ? C'est du sur-mesure.",
    maatP: "Au-delà de 260 m², nous établissons le plan de séchage personnellement, avec visite sur place si nécessaire, prix de projet et planning sur mesure. Décrivez-nous brièvement votre projet et nous vous recontactons dans un délai d'un jour ouvrable.",
    maatCta: "Demandez votre devis sur mesure →",
    bel: "Appelez le 03 689 90 65"
  },
  en: {
    komma: ".",
    meerDan: (n) => `More than ${n} m², bespoke quote`,
    gebouw: (v) => `Building smaller than ${v} m²`,
    gemiddelde: (n) => `We calculate with an average of ${n} cm`,
    dunPleister: "Thin plasterwork",
    dikPleister: "Thick plasterwork",
    gangbarePleister: "Usual plaster thickness",
    dunneChape: "Thin screed",
    dikkeChape: "Thick screed",
    gangbareChape: "Usual screed thickness",
    what: [
      { alt: "Freshly plastered walls in a home being finished", title: "Plasterwork", sub: "Drying walls" },
      { alt: "Fresh screed floor in a new-build home", title: "Drying floors", sub: "Screed" },
      {
        alt: "Living room with fresh plasterwork and a fresh screed floor",
        title: "Plasterwork + screed",
        sub: "Drying walls + floor"
      },
      {
        alt: "Wall with damp damage and mould after water damage",
        title: "Water damage",
        sub: "Desiccant drying, delivered fast"
      }
    ],
    serviceName: "Build your drying package",
    serviceDesc: "Work out in five questions which units your home needs, how long drying takes and what it costs.",
    serviceType: "Construction drying",
    home: "Home",
    h1: "Build your drying package: work out your units, drying time and price",
    workerAlt: "Vernast technician carrying a construction dehumidifier on his back",
    terug: "← Back",
    stap: (n, van) => `Step ${n} / ${van}`,
    q1: "How big is your home",
    q1sub: "Drag the ruler to the floor area that fits best.",
    verder: "Next →",
    q2: "What do you want to dry",
    q2sub: "Plasterwork and screed release their moisture differently.",
    q3: "How thick is the plasterwork",
    q3sub: "Thicker plasterwork holds more water and needs more drying time. Drag to the right thickness.",
    q4: "How thick is the screed",
    q4sub: "Screed is usually the biggest source of moisture. Drag to the right thickness.",
    q5: "Will you provide the heating yourself?",
    q5sub: "Drying only works well above 15 °C. If not, we add electric heaters.",
    ja: "Yes, I'll heat it myself",
    jaSub: "The room is above 15 °C, your own heating is on",
    kachelAlt: "Vernast electric heater",
    nee: "No, add heaters",
    neeSub: "Our electric heaters come with the package",
    maatH: "Large project? That's bespoke.",
    maatP: "Above 260 m² we put the drying plan together personally, with a site visit if needed, a project price and a tailored schedule. Tell us briefly about your project and we will be in touch within one working day.",
    maatCta: "Request your bespoke quote →",
    bel: "Call 03 689 90 65"
  }
};
function linialen(t) {
  return {
    size: {
      min: Math.max(0, SIZES[0] - 20),
      max: grootste(SIZES) + 20,
      snaps: SIZES,
      custom: true,
      unit: " m²",
      format: (v) => String(v),
      label: (v) => Number.isNaN(v) ? t.meerDan(grootste(SIZES)) : t.gebouw(v),
      bigEvery: 40,
      tick: 10
    },
    plaster: {
      min: Math.max(0, PLASTERS[0] - 0.5),
      max: grootste(PLASTERS) + 0.5,
      snaps: PLASTERS,
      unknown: middelste(PLASTERS),
      unknownLabel: t.gemiddelde(middelste(PLASTERS)),
      unit: " cm",
      format: (v) => String(v).replace(".", t.komma),
      label: (v) => v <= PLASTERS[0] ? t.dunPleister : v >= grootste(PLASTERS) ? t.dikPleister : t.gangbarePleister,
      bigEvery: 0.5,
      tick: 0.1
    },
    screed: {
      min: Math.max(0, SCREEDS[0] - 1),
      max: grootste(SCREEDS) + 1,
      snaps: SCREEDS,
      unknown: middelste(SCREEDS),
      unknownLabel: t.gemiddelde(middelste(SCREEDS)),
      unit: " cm",
      format: (v) => String(v),
      label: (v) => v <= SCREEDS[0] ? t.dunneChape : v >= grootste(SCREEDS) ? t.dikkeChape : t.gangbareChape,
      bigEvery: 1,
      tick: 0.25
    }
  };
}
const WHAT = [
  { v: "pleister", image: "/vernast/wat-pleister.webp" },
  { v: "chape", image: "/vernast/wat-chape.webp" },
  { v: "beide", image: "/vernast/wat-beide.webp" },
  { v: "waterschade", image: "/vernast/wat-waterschade.webp" }
];
const START = {
  size: DEFAULT_SIZE,
  wat: null,
  pd: DEFAULT_PD,
  cd: DEFAULT_CD,
  heat: null
};
const needsPlaster = (wat) => wat === "pleister" || wat === "beide";
const needsScreed = (wat) => wat === "chape" || wat === "beide";
function sequence(answers) {
  if (answers.size === "custom") return [0, 5];
  const steps = [0, 1];
  if (needsPlaster(answers.wat)) steps.push(2);
  if (needsScreed(answers.wat)) steps.push(3);
  steps.push(4);
  return steps;
}
const VerhuurCalculatorPage = () => {
  const navigate = useNavigate();
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const seo = useSeo("verhuurCalculator");
  const { size: SIZE, plaster: PLASTER, screed: SCREED } = useMemo(() => linialen(t), [t]);
  const [answers, setAnswers] = useState(START);
  const [pos, setPos] = useState(0);
  const steps = sequence(answers);
  const index = steps[Math.min(pos, steps.length - 1)];
  const finish = (next) => {
    const config = {
      size: next.size,
      wat: next.wat ?? "beide",
      pd: next.pd === "onbekend" ? DEFAULT_PD : next.pd,
      cd: next.cd === "onbekend" ? DEFAULT_CD : next.cd,
      // "nee" means: the visitor does not heat, so the package carries heaters.
      heat: next.heat === "nee",
      weeks: 2
    };
    navigate(`${lp("/verhuur/pakket")}?${configToQuery(config)}`);
  };
  const advance = (next) => {
    const seq = sequence(next);
    if (pos < seq.length - 1) setPos((p) => p + 1);
    else finish(next);
  };
  const advanceTimer = useRef(null);
  useEffect(() => () => {
    if (advanceTimer.current !== null) window.clearTimeout(advanceTimer.current);
  }, []);
  const answer = (patch) => {
    const next = { ...answers, ...patch };
    setAnswers(next);
    if (advanceTimer.current !== null) window.clearTimeout(advanceTimer.current);
    advanceTimer.current = window.setTimeout(() => advance(next), ADVANCE_DELAY);
  };
  const step = (n, className = "astep") => `${className}${index === n ? " on" : ""}`;
  return /* @__PURE__ */ jsxs("div", { className: "vh-calc", children: [
    /* @__PURE__ */ jsx(
      PageMeta,
      {
        ...seo,
        jsonLd: [
          serviceSchema({
            name: t.serviceName,
            description: t.serviceDesc,
            path: lp("/verhuur/calculator"),
            serviceType: t.serviceType
          }),
          breadcrumbSchema([
            { name: t.home, path: lp("/") },
            { name: t.serviceName, path: lp("/verhuur/calculator") }
          ])
        ]
      }
    ),
    /* @__PURE__ */ jsx(V3Header, { lightAfter: -1 }),
    /* @__PURE__ */ jsx("section", { className: "fstage", id: "flow", children: /* @__PURE__ */ jsxs("div", { className: "shell", children: [
      /* @__PURE__ */ jsx("h1", { className: "sr-only", children: t.h1 }),
      /* @__PURE__ */ jsxs("div", { className: "acard", children: [
        /* @__PURE__ */ jsx("img", { className: "worker", src: "/vernast/worker-carry.webp", alt: t.workerAlt, loading: "lazy", decoding: "async" }),
        /* @__PURE__ */ jsxs("div", { className: "inner", children: [
          /* @__PURE__ */ jsxs("div", { className: "aptop", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "aback",
                type: "button",
                hidden: pos === 0,
                onClick: () => setPos((p) => Math.max(0, p - 1)),
                children: t.terug
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "adots", children: steps.map((_, i) => /* @__PURE__ */ jsx("i", { className: i < pos ? "done" : i === pos ? "on" : void 0 }, i)) }),
            /* @__PURE__ */ jsx("span", { className: "acount", children: t.stap(Math.min(pos, steps.length - 1) + 1, steps.length) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "aq", children: [
            /* @__PURE__ */ jsxs("div", { className: step(0), "data-a": "0", children: [
              /* @__PURE__ */ jsxs("div", { className: "aqh", children: [
                /* @__PURE__ */ jsx("span", { className: "aqn", children: "1" }),
                /* @__PURE__ */ jsxs("h2", { children: [
                  t.q1,
                  /* @__PURE__ */ jsx("sup", { children: "*" })
                ] })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "asub", children: t.q1sub }),
              /* @__PURE__ */ jsx(
                Ruler,
                {
                  config: SIZE,
                  onChange: (value) => setAnswers((prev) => ({ ...prev, size: value }))
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "anext", children: /* @__PURE__ */ jsx("button", { className: "btn btn-r", type: "button", onClick: () => advance(answers), children: t.verder }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: step(1), "data-a": "1", children: [
              /* @__PURE__ */ jsxs("div", { className: "aqh", children: [
                /* @__PURE__ */ jsx("span", { className: "aqn", children: "2" }),
                /* @__PURE__ */ jsxs("h2", { children: [
                  t.q2,
                  /* @__PURE__ */ jsx("sup", { children: "*" })
                ] })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "asub", children: t.q2sub }),
              /* @__PURE__ */ jsx("div", { className: "wcards", children: WHAT.map((option, i) => /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  className: `wcard${answers.wat === option.v ? " sel" : ""}`,
                  onClick: () => answer({ wat: option.v }),
                  children: [
                    /* @__PURE__ */ jsx("img", { src: option.image, alt: t.what[i].alt, loading: "lazy", decoding: "async" }),
                    /* @__PURE__ */ jsxs("span", { className: "wb", children: [
                      /* @__PURE__ */ jsx("span", { className: "oc" }),
                      /* @__PURE__ */ jsxs("span", { children: [
                        /* @__PURE__ */ jsx("b", { children: t.what[i].title }),
                        /* @__PURE__ */ jsx("small", { children: t.what[i].sub })
                      ] })
                    ] })
                  ]
                },
                option.v
              )) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: step(2), "data-a": "2", children: [
              /* @__PURE__ */ jsxs("div", { className: "aqh", children: [
                /* @__PURE__ */ jsx("span", { className: "aqn", children: "3" }),
                /* @__PURE__ */ jsxs("h2", { children: [
                  t.q3,
                  /* @__PURE__ */ jsx("sup", { children: "*" })
                ] })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "asub", children: t.q3sub }),
              /* @__PURE__ */ jsx(
                Ruler,
                {
                  config: PLASTER,
                  onChange: (value) => setAnswers((prev) => ({ ...prev, pd: value }))
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "anext", children: /* @__PURE__ */ jsx("button", { className: "btn btn-r", type: "button", onClick: () => advance(answers), children: t.verder }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: step(3), "data-a": "3", children: [
              /* @__PURE__ */ jsxs("div", { className: "aqh", children: [
                /* @__PURE__ */ jsx("span", { className: "aqn", children: "4" }),
                /* @__PURE__ */ jsxs("h2", { children: [
                  t.q4,
                  /* @__PURE__ */ jsx("sup", { children: "*" })
                ] })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "asub", children: t.q4sub }),
              /* @__PURE__ */ jsx(
                Ruler,
                {
                  config: SCREED,
                  onChange: (value) => setAnswers((prev) => ({ ...prev, cd: value }))
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "anext", children: /* @__PURE__ */ jsx("button", { className: "btn btn-r", type: "button", onClick: () => advance(answers), children: t.verder }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: step(4), "data-a": "4", children: [
              /* @__PURE__ */ jsxs("div", { className: "aqh", children: [
                /* @__PURE__ */ jsx("span", { className: "aqn", children: "5" }),
                /* @__PURE__ */ jsx("h2", { children: t.q5 })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "asub", children: t.q5sub }),
              /* @__PURE__ */ jsxs("div", { className: "wcards", children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    type: "button",
                    className: `wcard${answers.heat === "ja" ? " sel" : ""}`,
                    onClick: () => answer({ heat: "ja" }),
                    children: [
                      /* @__PURE__ */ jsxs("span", { className: "hstage", children: [
                        /* @__PURE__ */ jsx("span", { className: "hwave", style: { left: "42%", animationDelay: "0s" } }),
                        /* @__PURE__ */ jsx("span", { className: "hwave", style: { left: "50%", animationDelay: ".8s" } }),
                        /* @__PURE__ */ jsx("span", { className: "hwave", style: { left: "58%", animationDelay: "1.5s" } }),
                        /* @__PURE__ */ jsx("span", { className: "hglow" }),
                        /* @__PURE__ */ jsxs("span", { className: "radiator", children: [
                          /* @__PURE__ */ jsx("span", {}),
                          /* @__PURE__ */ jsx("span", {}),
                          /* @__PURE__ */ jsx("span", {}),
                          /* @__PURE__ */ jsx("span", {}),
                          /* @__PURE__ */ jsx("span", {}),
                          /* @__PURE__ */ jsx("span", {}),
                          /* @__PURE__ */ jsx("span", {}),
                          /* @__PURE__ */ jsx("i", { className: "rad-dial" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("span", { className: "wb", children: [
                        /* @__PURE__ */ jsx("span", { className: "oc" }),
                        /* @__PURE__ */ jsxs("span", { children: [
                          /* @__PURE__ */ jsx("b", { children: t.ja }),
                          /* @__PURE__ */ jsx("small", { children: t.jaSub })
                        ] })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    type: "button",
                    className: `wcard${answers.heat === "nee" ? " sel" : ""}`,
                    onClick: () => answer({ heat: "nee" }),
                    children: [
                      /* @__PURE__ */ jsxs("span", { className: "hstage", children: [
                        /* @__PURE__ */ jsx("span", { className: "hwave", style: { left: "44%", animationDelay: ".4s" } }),
                        /* @__PURE__ */ jsx("span", { className: "hwave", style: { left: "52%", animationDelay: "1.1s" } }),
                        /* @__PURE__ */ jsx("span", { className: "hwave", style: { left: "60%", animationDelay: "1.8s" } }),
                        /* @__PURE__ */ jsx("span", { className: "hglow" }),
                        /* @__PURE__ */ jsx("img", { src: "/vernast/kachel-30.webp", alt: t.kachelAlt, loading: "lazy", decoding: "async" })
                      ] }),
                      /* @__PURE__ */ jsxs("span", { className: "wb", children: [
                        /* @__PURE__ */ jsx("span", { className: "oc" }),
                        /* @__PURE__ */ jsxs("span", { children: [
                          /* @__PURE__ */ jsx("b", { children: t.nee }),
                          /* @__PURE__ */ jsx("small", { children: t.neeSub })
                        ] })
                      ] })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: step(5), "data-a": "5", children: [
              /* @__PURE__ */ jsxs("div", { className: "aqh", children: [
                /* @__PURE__ */ jsx("span", { className: "aqn", children: "★" }),
                /* @__PURE__ */ jsx("h2", { children: t.maatH })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "asub", children: t.maatP }),
              /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 11, flexWrap: "wrap", maxWidth: 460 }, children: [
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    className: "btn btn-w",
                    href: "https://survey.typeform.com/to/QJgaZgHX",
                    target: "_blank",
                    rel: "noopener",
                    children: t.maatCta
                  }
                ),
                /* @__PURE__ */ jsx("a", { className: "btn btn-r", href: "tel:+3236899065", children: t.bel })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(V3Footer, {})
  ] });
};
export {
  VerhuurCalculatorPage as default
};
