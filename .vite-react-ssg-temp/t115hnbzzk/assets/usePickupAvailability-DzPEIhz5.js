import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useId, useEffect, useMemo } from "react";
import { s as addDays, u as isoDate } from "./verhuur-8XCQs1EE.js";
import { u as useCopy } from "../main.mjs";
import { T as TARIEVEN } from "./tarieven-ZrzMF0e-.js";
import { D as DEPOSIT_GROSS, O as ONLINE_DISCOUNT } from "./booking-CFp-lxcW.js";
import { r as reportBookingEvent } from "./reportBookingEvent-DNN9fzqH.js";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/afhalen.ts");
const META = {
  ttk170: {
    group: "Bouwdrogers",
    specs: ["50 l / 24 u", "tot 250 m³", "0,75 kW", "reservoir"],
    kind: "droger"
  },
  ttk350: {
    group: "Bouwdrogers",
    specs: ["70 l / 24 u", "tot 400 m³", "1,1 kW", "pompklaar"],
    kind: "droger"
  },
  ttk650: {
    /*
      110 en niet 90. De toestelpagina van de Ultimate geeft 110 l/24 u op als
      kerncijfer en in haar fiche; hier stond 90, en op de kaart van de
      homepage opnieuw 110. Twee geïndexeerde pagina's die elkaar tegenspreken
      over hetzelfde toestel -- de toestelpagina is de bron.
    */
    group: "Bouwdrogers",
    specs: ["110 l / 24 u", "tot 600 m³", "1,4 kW", "pompklaar"],
    kind: "droger"
  },
  ttv4500: {
    group: "Ventilatoren",
    specs: ["4 500 m³/u", "3 standen", "0,2 kW"],
    kind: "ventilator"
  },
  teddh30: {
    group: "Elektrische kachels",
    specs: ["30 kW", "thermostaat", "400 V"],
    kind: "verwarming"
  },
  /*
    De radiaalventilator en de kachel van 20 kW vullen geen pakketrol in: op die
    rol toewijzen zou even goed de axiaalventilator of de kachel van 30 kW mogen
    sturen. Wie hier expliciet een radiaal of de kleine kachel reserveert, moet
    net dat toestel krijgen — vandaar dat een afhaalregel op `product_key` gaat
    en niet op `device_key`. Zie `pickupDeviceLines`.
  */
  radiaal2250: {
    group: "Ventilatoren",
    specs: ["2 250 m³/u", "3 standen", "IP55"],
    kind: "ventilator"
  },
  teddh20: {
    group: "Elektrische kachels",
    specs: ["20 kW", "thermostaat", "400 V"],
    kind: "verwarming"
  },
  revolution: {
    group: "Bouwdrogers",
    specs: ["adsorptie", "via slangen", "koude ruimtes"],
    kind: "droger"
  }
};
const PICKUP_ORDER = [
  "ttk170",
  "ttk350",
  "ttk650",
  "revolution",
  "ttv4500",
  "radiaal2250",
  "teddh30",
  "teddh20"
].filter((key) => TARIEVEN.products[key]);
const MAX_PER_PRODUCT = 8;
const PICKUP_PRODUCTS = PICKUP_ORDER.map((key) => {
  const t = TARIEVEN.products[key];
  const stock = "stock" in t ? Number(t.stock) : MAX_PER_PRODUCT;
  return {
    key,
    ...META[key],
    name: t.name,
    short: t.short,
    sub: t.sum,
    image: t.img[0],
    day: Number(t.day),
    max: Math.max(0, Math.min(MAX_PER_PRODUCT, stock))
  };
});
const PICKUP_BY_KEY = Object.fromEntries(
  PICKUP_PRODUCTS.map((p) => [p.key, p])
);
const PICKUP_GROUPS = [...new Set(PICKUP_PRODUCTS.map((p) => p.group))];
const PICKUP_PERIODS = [
  [7, "1 week"],
  [14, "2 weken"],
  [21, "3 weken"],
  [28, "4 weken"],
  [35, "5 weken"],
  [42, "6 weken"],
  [49, "7 weken"],
  [56, "8 weken"]
];
const PICKUP_DAYS = PICKUP_PERIODS.map(([days]) => days);
const LANGHUUR_STAFFEL = [
  [28, 0.1],
  [35, 0.12],
  [42, 0.12],
  [49, 0.14],
  [56, 0.15]
];
LANGHUUR_STAFFEL[0][0];
LANGHUUR_STAFFEL[LANGHUUR_STAFFEL.length - 1][1];
const PICKUP_SLOTS = [
  "07:30 – 08:00",
  "08:00 – 10:00",
  "10:00 – 12:00",
  "13:00 – 15:00",
  "15:00 – 17:00"
];
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/Datumkiezer.tsx");
const COPY = {
  nl: {
    dagen: ["ma", "di", "wo", "do", "vr", "za", "zo"],
    maanden: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
    kies: "Kies een datum",
    paneel: "Kies een afhaaldatum",
    vorige: "Vorige maand",
    volgende: "Volgende maand",
    weekend: "Het magazijn is in het weekend gesloten",
    vol: "Deze dag is volgeboekt voor uw selectie",
    vroeg: "Wij zetten uw toestel minstens 24 uur op voorhand klaar",
    afhalen: "Afhalen",
    terug: "Terugbrengen",
    volzet: "Volzet",
    weekendGesloten: "Weekend gesloten"
  },
  fr: {
    dagen: ["lu", "ma", "me", "je", "ve", "sa", "di"],
    maanden: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
    kies: "Choisissez une date",
    paneel: "Choisissez une date d'enlèvement",
    vorige: "Mois précédent",
    volgende: "Mois suivant",
    weekend: "L'entrepôt est fermé le week-end",
    vol: "Ce jour est complet pour votre sélection",
    vroeg: "Nous préparons votre appareil au moins 24 heures à l'avance",
    afhalen: "Enlèvement",
    terug: "Retour",
    volzet: "Complet",
    weekendGesloten: "Fermé le week-end"
  },
  en: {
    dagen: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    maanden: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    kies: "Choose a date",
    paneel: "Choose a collection date",
    vorige: "Previous month",
    volgende: "Next month",
    weekend: "The warehouse is closed at weekends",
    vol: "This day is fully booked for your selection",
    vroeg: "We get your unit ready at least 24 hours in advance",
    afhalen: "Collection",
    terug: "Return",
    volzet: "Fully booked",
    weekendGesloten: "Closed at weekends"
  }
};
function parse(iso) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return null;
  const d = /* @__PURE__ */ new Date(`${iso}T00:00:00`);
  return Number.isNaN(d.getTime()) ? null : d;
}
function isWeekend(d) {
  const dag = d.getDay();
  return dag === 0 || dag === 6;
}
function kolom(d) {
  return (d.getDay() + 6) % 7;
}
function kortDatum(d) {
  const tweeCijfers = (n) => String(n).padStart(2, "0");
  return `${tweeCijfers(d.getDate())}/${tweeCijfers(d.getMonth() + 1)}/${String(
    d.getFullYear()
  ).slice(-2)}`;
}
function datumMetDag(d, dagen) {
  return `${dagen[(d.getDay() + 6) % 7]} ${kortDatum(d)}`;
}
const Datumkiezer = ({
  id,
  value,
  min,
  blocked = [],
  rangeDays,
  rangeLabel,
  invalid,
  describedBy,
  onChange
}) => {
  const t = useCopy(COPY);
  const [open, setOpen] = useState(false);
  const wrap = useRef(null);
  const knop = useRef(null);
  const paneelId = useId();
  const gekozen = parse(value);
  const minDatum = parse(min);
  const [maand, setMaand] = useState(() => {
    const basis = gekozen ?? minDatum ?? /* @__PURE__ */ new Date();
    return new Date(basis.getFullYear(), basis.getMonth(), 1);
  });
  useEffect(() => {
    const basis = parse(value) ?? parse(min);
    if (basis) setMaand(new Date(basis.getFullYear(), basis.getMonth(), 1));
  }, [value, min]);
  useEffect(() => {
    if (!open) return;
    const buiten = (e) => {
      if (wrap.current && !wrap.current.contains(e.target)) setOpen(false);
    };
    const toets = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        knop.current?.focus();
      }
    };
    document.addEventListener("mousedown", buiten);
    document.addEventListener("keydown", toets);
    return () => {
      document.removeEventListener("mousedown", buiten);
      document.removeEventListener("keydown", toets);
    };
  }, [open]);
  const vol = useMemo(() => new Set(blocked), [blocked]);
  const cellen = useMemo(() => {
    const eerste = new Date(maand.getFullYear(), maand.getMonth(), 1);
    const start = addDays(eerste, -kolom(eerste));
    return Array.from({ length: 42 }, (_, i) => addDays(start, i));
  }, [maand]);
  const vorigeKan = useMemo(() => {
    if (!minDatum) return true;
    const vorige = new Date(maand.getFullYear(), maand.getMonth() - 1, 1);
    const laatste = new Date(maand.getFullYear(), maand.getMonth(), 0);
    return isoDate(laatste) >= isoDate(minDatum) && vorige <= laatste;
  }, [maand, minDatum]);
  const staat = (d) => {
    const iso = isoDate(d);
    if (d.getMonth() !== maand.getMonth()) return "buiten";
    if (minDatum && iso < isoDate(minDatum)) return "vroeg";
    if (isWeekend(d)) return "weekend";
    if (vol.has(iso)) return "vol";
    return "vrij";
  };
  const eind = gekozen && rangeDays ? addDays(gekozen, rangeDays) : null;
  const eindIso = eind ? isoDate(eind) : null;
  const kies = (d) => {
    onChange(isoDate(d));
    setOpen(false);
    knop.current?.focus();
  };
  const label = gekozen ? datumMetDag(gekozen, t.dagen) : t.kies;
  return /* @__PURE__ */ jsxs("div", { className: "dk", ref: wrap, children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        id,
        ref: knop,
        className: `dk-knop${invalid ? " bezet" : ""}`,
        "aria-haspopup": "dialog",
        "aria-expanded": open,
        "aria-controls": open ? paneelId : void 0,
        "aria-invalid": invalid,
        "aria-describedby": describedBy,
        onClick: () => setOpen((o) => !o),
        children: [
          /* @__PURE__ */ jsx("span", { className: gekozen ? "dk-waarde" : "dk-waarde leeg", children: label }),
          /* @__PURE__ */ jsxs("svg", { className: "dk-icoon", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
            /* @__PURE__ */ jsx("rect", { x: "3", y: "5", width: "18", height: "16", rx: "3", stroke: "currentColor", strokeWidth: "1.7" }),
            /* @__PURE__ */ jsx("path", { d: "M3 10h18M8 3v4M16 3v4", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round" })
          ] })
        ]
      }
    ),
    open && /* @__PURE__ */ jsxs("div", { className: "dk-paneel", id: paneelId, role: "dialog", "aria-label": t.paneel, children: [
      /* @__PURE__ */ jsxs("div", { className: "dk-kop", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            className: "dk-nav",
            "aria-label": t.vorige,
            disabled: !vorigeKan,
            onClick: () => setMaand((m) => new Date(m.getFullYear(), m.getMonth() - 1, 1)),
            children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M15 5l-7 7 7 7", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) })
          }
        ),
        /* @__PURE__ */ jsxs("strong", { "aria-live": "polite", children: [
          t.maanden[maand.getMonth()],
          " ",
          maand.getFullYear()
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            className: "dk-nav",
            "aria-label": t.volgende,
            onClick: () => setMaand((m) => new Date(m.getFullYear(), m.getMonth() + 1, 1)),
            children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M9 5l7 7-7 7", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) })
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "dk-dagen", "aria-hidden": "true", children: t.dagen.map((d) => /* @__PURE__ */ jsx("span", { children: d }, d)) }),
      /* @__PURE__ */ jsx("div", { className: "dk-raster", role: "grid", children: cellen.map((d) => {
        const s = staat(d);
        const iso = isoDate(d);
        if (s === "buiten") return /* @__PURE__ */ jsx("span", { className: "dk-dag buiten" }, iso);
        const uit = s !== "vrij";
        const inReeks = Boolean(eindIso && value && iso > value && iso < eindIso);
        const isEind = iso === eindIso;
        return /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            className: `dk-dag ${s}${iso === value ? " aan" : ""}${inReeks ? " reeks" : ""}${isEind ? " eind" : ""}`,
            disabled: uit,
            "aria-current": iso === value ? "date" : void 0,
            title: s === "weekend" ? t.weekend : s === "vol" ? t.vol : s === "vroeg" ? t.vroeg : datumMetDag(d, t.dagen),
            onClick: () => kies(d),
            children: d.getDate()
          },
          iso
        );
      }) }),
      eind && gekozen && /* @__PURE__ */ jsxs("div", { className: "dk-reeks", children: [
        /* @__PURE__ */ jsxs("span", { children: [
          t.afhalen,
          " ",
          /* @__PURE__ */ jsx("b", { children: datumMetDag(gekozen, t.dagen) })
        ] }),
        /* @__PURE__ */ jsxs("span", { children: [
          t.terug,
          " ",
          /* @__PURE__ */ jsx("b", { children: datumMetDag(eind, t.dagen) }),
          rangeLabel ? ` · ${rangeLabel}` : ""
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "dk-legende", children: [
        /* @__PURE__ */ jsxs("span", { children: [
          /* @__PURE__ */ jsx("i", { className: "dk-stip vol" }),
          " ",
          t.volzet
        ] }),
        /* @__PURE__ */ jsxs("span", { children: [
          /* @__PURE__ */ jsx("i", { className: "dk-stip weekend" }),
          " ",
          t.weekendGesloten
        ] })
      ] })
    ] })
  ] });
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/lib/afhalen.ts");
const VAT_RATE = 0.21;
function parseSelection(raw) {
  if (!raw) return [];
  const seen = /* @__PURE__ */ new Map();
  for (const part of String(raw).split(",")) {
    const [key, count] = part.split(":");
    const product = PICKUP_BY_KEY[(key ?? "").trim()];
    const qty = Math.floor(Number(count));
    if (!product || !Number.isFinite(qty) || qty <= 0) continue;
    const total = Math.min(product.max, (seen.get(product.key) ?? 0) + qty);
    seen.set(product.key, total);
  }
  return [...seen].filter(([, qty]) => qty > 0).map(([key, qty]) => ({ product: PICKUP_BY_KEY[key], qty }));
}
function serializeSelection(quantities) {
  return Object.entries(quantities).filter(([key, qty]) => PICKUP_BY_KEY[key] && qty > 0).map(([key, qty]) => `${key}:${Math.min(PICKUP_BY_KEY[key].max, Math.floor(qty))}`).filter((part) => !part.endsWith(":0")).join(",");
}
const OUDE_PERIODES = { 3: 7, 30: 28, 60: 56 };
function normalizeDays(raw) {
  const days = Math.floor(Number(raw));
  if (PICKUP_DAYS.includes(days)) return days;
  const oud = OUDE_PERIODES[days];
  return oud !== void 0 && PICKUP_DAYS.includes(oud) ? oud : 7;
}
const PICKUP_LEAD_DAYS = 1;
function isPickupDay(d) {
  const dag = d.getDay();
  return dag !== 0 && dag !== 6;
}
function earliestPickupDate(today = /* @__PURE__ */ new Date()) {
  let d = addDays(today, PICKUP_LEAD_DAYS);
  while (!isPickupDay(d)) d = addDays(d, 1);
  return isoDate(d);
}
function normalizeSlot(raw) {
  const slot = String(raw ?? "").trim();
  return PICKUP_SLOTS.includes(slot) ? slot : PICKUP_SLOTS[1];
}
function round(amount) {
  return Math.round(amount * 100) / 100;
}
function langhuurKorting(days) {
  let fractie = 0;
  for (const [dagen, f] of LANGHUUR_STAFFEL) if (days >= dagen) fractie = f;
  return fractie;
}
function longStayDiscount(net, days) {
  return round(net * langhuurKorting(days));
}
function pickupSummary(lines, days) {
  const listNet = round(lines.reduce((sum, l) => sum + l.product.day * l.qty * days, 0));
  const longStay = longStayDiscount(listNet, days);
  const net = round(listNet - longStay);
  const vat = round(net * VAT_RATE);
  return {
    lines,
    units: lines.reduce((sum, l) => sum + l.qty, 0),
    listNet,
    longStay,
    net,
    vat,
    gross: round(net + vat)
  };
}
function pickupTotals(netBeforeDiscount, payment) {
  const discount = payment === "online" ? round(netBeforeDiscount * ONLINE_DISCOUNT) : 0;
  const net = round(netBeforeDiscount - discount);
  const vat = round(net * VAT_RATE);
  const gross = round(net + vat);
  const payableGross = payment === "online" ? gross : Math.min(DEPOSIT_GROSS, gross);
  return { discount, net, vat, gross, payableGross, balance: round(gross - payableGross) };
}
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/hooks/usePickupAvailability.ts");
const EMPTY = [];
function usePickupAvailability(selection, days) {
  const [blocked, setBlocked] = useState(EMPTY);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const [horizonDays, setHorizonDays] = useState(60);
  useEffect(() => {
    if (!selection) {
      setBlocked(EMPTY);
      setFailed(false);
      return;
    }
    let current = true;
    setLoading(true);
    fetch("/api/availability", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ lines: selection, days })
    }).then(async (response) => {
      const data = await response.json();
      if (!current) return;
      if (!response.ok) {
        setFailed(true);
        setBlocked(EMPTY);
        reportBookingEvent({ code: "wizard_beschikbaarheid_onbereikbaar", lines: selection, days });
        return;
      }
      const list = data.blocked_start_dates ?? EMPTY;
      const horizon = data.horizon_days ?? 60;
      setFailed(false);
      setBlocked(list);
      if (data.horizon_days) setHorizonDays(data.horizon_days);
      const tomorrow = new Date(Date.now() + 864e5).toISOString().slice(0, 10);
      if (list.length && firstFreeDate(tomorrow, list, horizon) === null) {
        reportBookingEvent({
          code: "wizard_geen_vrije_datum",
          lines: selection,
          days,
          start: tomorrow,
          blocked: list.length
        });
      }
    }).catch(() => {
      if (!current) return;
      setFailed(true);
      setBlocked(EMPTY);
      reportBookingEvent({ code: "wizard_beschikbaarheid_onbereikbaar", lines: selection, days });
    }).finally(() => {
      if (current) setLoading(false);
    });
    return () => {
      current = false;
    };
  }, [selection, days]);
  return { blocked, loading, failed, horizonDays };
}
function firstFreeDate(from, blocked, horizonDays) {
  if (!blocked.includes(from)) return from;
  const start = /* @__PURE__ */ new Date(`${from}T00:00:00`);
  for (let i = 1; i <= horizonDays; i++) {
    const candidate = new Date(start.getTime() + i * 864e5).toISOString().slice(0, 10);
    if (!blocked.includes(candidate)) return candidate;
  }
  return null;
}
export {
  Datumkiezer as D,
  PICKUP_PRODUCTS as P,
  normalizeDays as a,
  pickupSummary as b,
  pickupTotals as c,
  PICKUP_GROUPS as d,
  earliestPickupDate as e,
  firstFreeDate as f,
  PICKUP_PERIODS as g,
  PICKUP_SLOTS as h,
  PICKUP_BY_KEY as i,
  longStayDiscount as j,
  langhuurKorting as l,
  normalizeSlot as n,
  parseSelection as p,
  serializeSelection as s,
  usePickupAvailability as u
};
