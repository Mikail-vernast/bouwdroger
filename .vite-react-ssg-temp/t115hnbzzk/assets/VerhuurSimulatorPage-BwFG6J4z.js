import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useId, useRef, Suspense, Component, lazy, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { P as PageMeta, C as CONTACT } from "./PageMeta-BXulEWcY.js";
import { m as baseItems, b as allItems, c as configWeeks, t as totalAirflow, n as totalCapacity, o as dryingDays, d as configPrice, S as SIZE_VALUES, g as DEFAULT_CD, k as DEFAULT_PD, C as CD_VALUES, P as PD_VALUES, l as configToQuery } from "./verhuur-8XCQs1EE.js";
import { e as CAT, W as WEEKS } from "./verhuur-CgnDb-wO.js";
import { b as useTaal, u as useCopy, a as useLokaalPad, c as useToonBedrag, N as NUMBER_LOCALE } from "../main.mjs";
import { a as catInTaal } from "./verhuur.fr-CrIPL5Eo.js";
import { e as extraNaarQuery } from "./booking-CFp-lxcW.js";
import { u as useSeo } from "./seo-BMvlJeai.js";
import { s as serviceSchema, b as breadcrumbSchema } from "./schema-VJMHyxOJ.js";
/* empty css                       */
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/lib/droogTempo.ts");
const TEMPO = {
  snel: { label: "Snel", min: 14, max: 21, tekst: "2 – 3 weken", uitleg: "Meer toestellen, zo snel als het materiaal toelaat." },
  gemiddeld: { label: "Gemiddeld", min: 28, max: 35, tekst: "4 – 5 weken", uitleg: "Minder toestellen, ruim genoeg voor de meeste nieuwbouw." },
  traag: { label: "Rustig", min: 42, max: 56, tekst: "6 – 8 weken", uitleg: "Zo weinig toestellen als mogelijk. Het goedkoopst." }
};
const TEMPO_ORDER = ["snel", "gemiddeld", "traag"];
const VOORGESTELD = { 5: 1.85, 6: 2.05, 7: 2.22, 8: 2.37 };
function staffel(weken) {
  return WEEKS[weken] ?? VOORGESTELD[weken] ?? weken / 2;
}
const TOESTEL = {
  small: { nominaal: 35.5 },
  medium: { nominaal: 63.5 }
};
const WATER_PER_CM = { chape: 1, pleister: 0.45 };
const MAX_DAGEN = 112;
const WANDFACTOR = { appartement: 0.72, rijwoning: 0.76, halfopen: 0.88, open: 1 };
const PLAFONDHOOGTE = { appartement: 2.6, rijwoning: 2.6, halfopen: 2.6, open: 2.7 };
const KLIMAAT = { verwarmd: { temp: 20, rv: 60 }, kachels: { temp: 22, rv: 60 } };
function lees(tab, x) {
  if (x <= tab[0][0]) return tab[0][1];
  if (x >= tab[tab.length - 1][0]) return tab[tab.length - 1][1];
  for (let i = 1; i < tab.length; i++) {
    const [x0, y0] = tab[i - 1], [x1, y1] = tab[i];
    if (x <= x1) return y0 + (y1 - y0) * (x - x0) / (x1 - x0);
  }
  return 1;
}
function rendement(t, rv) {
  const fT = [[5, 0.18], [10, 0.33], [15, 0.5], [20, 0.68], [25, 0.84], [30, 1], [35, 1.08]];
  const gRV = [[40, 0.34], [50, 0.48], [60, 0.65], [70, 0.82], [80, 1], [90, 1.15]];
  return Math.max(0.1, Math.min(1.2, lees(fT, t) * lees(gRV, rv)));
}
function diffusie(soort, cm) {
  if (soort === "chape") return cm <= 5 ? 14 : 14 + (cm - 5) * 7;
  return Math.max(7, cm * 7);
}
function pleisterFactor(s, hoog) {
  const perVerd = s.opp / s.verd;
  const omtrek = 4.1 * Math.sqrt(perVerd) * WANDFACTOR[s.type];
  const buiten = omtrek * hoog * s.verd;
  const rpv = Math.max(1, s.ruim / s.verd);
  const binnenL = Math.max(0, rpv - 1) * Math.sqrt(perVerd / rpv) * 1.15;
  const binnen = binnenL * hoog * 2 * s.verd;
  return ((buiten + binnen) * 0.88 + s.opp) / s.opp;
}
function droogTempo(s) {
  const hoog = PLAFONDHOOGTE[s.type];
  const cd = s.wat === "chape" || s.wat === "beide" ? s.cd : 0;
  const pd = s.wat === "pleister" || s.wat === "beide" ? s.pd : 0;
  const pleisterOpp = pd > 0 ? Math.round(s.opp * pleisterFactor(s, hoog)) : 0;
  const water = Math.round((cd > 0 ? s.opp * cd * WATER_PER_CM.chape : 0) + pleisterOpp * pd * WATER_PER_CM.pleister);
  const marge = pd > 0 ? 7 : 0;
  const diff = marge + Math.max(cd > 0 ? diffusie("chape", cd) : 0, pd > 0 ? diffusie("pleister", pd) : 0);
  const kl = s.verwarmt ? KLIMAAT.verwarmd : KLIMAAT.kachels;
  const rend = rendement(kl.temp, kl.rv);
  const effS = TOESTEL.small.nominaal * rend;
  const effM = TOESTEL.medium.nominaal * rend;
  const band = TEMPO[s.tempo];
  const bandOnhaalbaar = diff > band.max;
  const nV = Math.max(s.verd, Math.ceil(s.opp / 50), Math.ceil(s.ruim * 2 / 3));
  const nK = s.verwarmt ? 0 : Math.max(1, Math.round(s.opp * hoog / 160));
  const kandidaten = [];
  for (let a = 0; a <= 10; a++) {
    for (let m = 0; m <= 10; m++) {
      if (a + m === 0) continue;
      const cap = a * effS + m * effM;
      const dagen2 = Math.max(diff, Math.ceil(water / cap));
      const wk = Math.max(1, Math.ceil(dagen2 / 7));
      kandidaten.push({
        nS: a,
        nM: m,
        cap,
        dagen: dagen2,
        prijs: (a * CAT.small.w2 + m * CAT.medium.w2) * staffel(wk),
        past: true,
        inBand: dagen2 >= band.min && dagen2 <= band.max
      });
    }
  }
  const rangschik = (l) => [...l].sort((x, y) => x.nS + x.nM - (y.nS + y.nM) || x.prijs - y.prijs || x.nS - y.nS);
  const past = kandidaten.filter((k) => k.past);
  const inBand = rangschik(past.filter((k) => k.inBand));
  const snelste = past.length ? Math.min(...past.map((k) => k.dagen)) : 0;
  const traagste = past.length ? Math.max(...past.map((k) => k.dagen)) : 0;
  const teTraag = !bandOnhaalbaar && past.length > 0 && traagste < band.min;
  const terugval = bandOnhaalbaar ? rangschik(past.filter((k) => k.dagen === snelste)) : teTraag ? rangschik(past.filter((k) => k.dagen === traagste)) : rangschik(past);
  const gekozen = inBand[0] ?? terugval[0] ?? rangschik(kandidaten)[0];
  const dagen = Math.min(gekozen.dagen, MAX_DAGEN);
  const weken = Math.max(1, Math.ceil(dagen / 7));
  const items = [
    { k: "small", q: gekozen.nS },
    { k: "medium", q: gekozen.nM },
    { k: "axiaal", q: nV },
    { k: "kachel", q: nK }
  ].filter((it) => it.q > 0);
  const basis = items.reduce((som, it) => som + CAT[it.k].w2 * it.q, 0);
  return {
    items,
    dagen,
    weken,
    prijs: Math.round(basis * staffel(weken) * 100) / 100,
    capaciteit: Math.round(gekozen.cap),
    water,
    teSnel: bandOnhaalbaar
  };
}
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/lib/droogSimulator.ts");
const WATERSCHADE_CM = 2;
const MAX_VERDIEPINGEN = 4;
const WONING = {
  rijwoning: { label: "Rijwoning", sub: "Twee gemene muren", w: 6, l: 10, buren: 2, dakToegelaten: ["zadeldak", "plat", "lessenaar"] },
  halfopen: { label: "Halfopen", sub: "Eén gemene muur", w: 8, l: 10, buren: 1, dakToegelaten: ["zadeldak", "plat", "lessenaar"] },
  open: { label: "Open bebouwing", sub: "Vrijstaand", w: 10, l: 11, buren: 0, dakToegelaten: ["zadeldak", "plat", "lessenaar"] },
  appartement: { label: "Appartement", sub: "Eén of twee bouwlagen", w: 9, l: 10, buren: 0, dakToegelaten: ["plat"] }
};
const DAK_LABEL = {
  zadeldak: { label: "Zadeldak", sub: "Twee hellende vlakken" },
  plat: { label: "Plat dak", sub: "Of een appartement erboven" },
  lessenaar: { label: "Lessenaarsdak", sub: "Eén hellend vlak" }
};
const WAT_LABEL = {
  pleister: { label: "Pleisterwerk", sub: "Muren en plafonds" },
  chape: { label: "Chape", sub: "Dekvloer" },
  beide: { label: "Pleisterwerk + chape", sub: "Muren én vloer" },
  waterschade: { label: "Metselwerk en vloerplaat", sub: "Regenwater in de ruwbouw" }
};
const LAGEN_PER_FASE = {
  ruwbouw: [],
  ramen: [],
  chape: ["cd"],
  gepleisterd: ["pd", "cd"],
  tegels: ["pd", "cd"],
  afgewerkt: ["pd", "cd"]
};
const FASE = {
  ruwbouw: {
    label: "Ruwbouw, ramen nog open",
    kort: "Ruwbouw",
    vocht: 0.85,
    verwarmtWaarschijnlijk: false,
    advies: "Metselwerk en vloerplaat zitten vol regenwater. Drogen kan pas als de openingen dicht zijn, anders droogt u de buitenlucht.",
    foto: "/simulator/fase-ruwbouw.webp",
    druppels: 3,
    druppelsTekst: "regenwater",
    pin: { x: 34, y: 70, tekst: "Regenwater op de vloerplaat" },
    starten: "Na afsluiten met folie",
    meten: "Nog niet",
    letOp: "Openingen eerst dicht"
  },
  ramen: {
    label: "Ramen geplaatst",
    kort: "Ramen geplaatst",
    vocht: 0.75,
    verwarmtWaarschijnlijk: false,
    advies: "Het goede moment om metselwerk en vloerplaat uit te drogen, vóór de chape erop komt.",
    foto: "/simulator/fase-ramen.webp",
    druppels: 2,
    druppelsTekst: "matig",
    pin: { x: 22, y: 52, tekst: "Vocht in het metselwerk" },
    starten: "Meteen",
    meten: "Niet nodig",
    letOp: "Regenwater op de vloerplaat"
  },
  chape: {
    label: "Chape gegoten",
    kort: "Chape",
    vocht: 1,
    verwarmtWaarschijnlijk: false,
    advies: "Een chape brengt het meeste water in huis: ongeveer een week per centimeter om te drogen.",
    foto: "/simulator/fase-chape.webp",
    druppels: 5,
    druppelsTekst: "het meest",
    pin: { x: 48, y: 68, tekst: "Water in de chape" },
    starten: "Na ± 1 week uitharden",
    meten: "Vóór tegels of parket",
    letOp: "Niet te vroeg forceren"
  },
  tegels: {
    label: "Tegels gelegd",
    kort: "Tegels",
    vocht: 0.7,
    verwarmtWaarschijnlijk: false,
    advies: "Tegels sluiten het vocht in de chape op. Het kan enkel nog via de voegen en de muren weg.",
    foto: "/simulator/fase-tegels.webp",
    druppels: 4,
    druppelsTekst: "opgesloten",
    pin: { x: 42, y: 66, tekst: "Vocht onder de tegels" },
    starten: "Meteen",
    meten: "Chape onder de tegels",
    letOp: "Vocht zit opgesloten"
  },
  gepleisterd: {
    label: "Net gepleisterd",
    kort: "Gepleisterd",
    vocht: 0.9,
    verwarmtWaarschijnlijk: true,
    advies: "Pleisterwerk droogt ongeveer een week per centimeter. Pas daarna kan er geschilderd worden.",
    foto: "/simulator/fase-pleister.webp",
    druppels: 4,
    druppelsTekst: "veel",
    pin: { x: 72, y: 34, tekst: "Nat pleisterwerk" },
    starten: "Na 2 à 3 dagen",
    meten: "Vóór het schilderen",
    letOp: "Verf op nat pleister bladdert"
  },
  afgewerkt: {
    label: "Afgewerkt of bewoond",
    kort: "Afgewerkt",
    vocht: 0.4,
    verwarmtWaarschijnlijk: true,
    advies: "Verf en vloer houden het laatste vocht vast: vochtplekken, condens of schimmel in de hoeken. De drogers werken ook terwijl u er woont, en ze zijn stil genoeg voor een slaapkamer.",
    foto: "/simulator/fase-afgewerkt.webp",
    druppels: 2,
    druppelsTekst: "verborgen",
    pin: { x: 14, y: 66, tekst: "Restvocht achter de verf" },
    starten: "Meteen, rustig",
    meten: "Eerst: waar zit het?",
    letOp: "Stil genoeg voor een slaapkamer"
  }
};
const FASE_ORDER = ["ruwbouw", "ramen", "chape", "gepleisterd", "tegels", "afgewerkt"];
function geschatteOppervlakte(woning, verdiepingen) {
  const { w, l } = WONING[woning];
  return Math.round(w * l * 0.85 * Math.max(1, verdiepingen));
}
function snapOppervlakte(m2) {
  const hit = SIZE_VALUES.find((s) => Number(s) >= m2);
  return hit ?? "custom";
}
function isMaatwerk(a) {
  return a.size === "custom";
}
function toPackageConfig(a) {
  return {
    size: a.size,
    wat: a.wat,
    pd: PD_VALUES.includes(a.pd) ? a.pd : DEFAULT_PD,
    cd: CD_VALUES.includes(a.cd) ? a.cd : DEFAULT_CD,
    // `heat` in de catalogus betekent "kachels in het pakket" — het omgekeerde
    // van de vraag die we de bezoeker stellen.
    heat: !a.verwarmt,
    weeks: 2
  };
}
function simResultaat(a) {
  if (isMaatwerk(a)) return null;
  const opp = Number(a.size);
  if (!Number.isFinite(opp) || opp <= 0) return null;
  const config = toPackageConfig(a);
  const basis = baseItems(config);
  const extra = a.tempo === "snel" ? { [basis.some((it) => it.k === "medium") || !basis.some((it) => it.k === "small") ? "medium" : "small"]: 1 } : {};
  const items = allItems(config, extra);
  const weken = configWeeks(config);
  const { water } = droogTempo({
    type: a.woning,
    opp,
    verd: Math.max(1, a.verdiepingen),
    ruim: Math.max(1, a.ruimtes ?? a.verdiepingen * 4),
    // De liters dienen alleen voor de film. Regenwater in de ruwbouw rekenen we als een
    // vaste, dunne natte laag: een chapedikte die de bezoeker eerder koos, ligt er nog niet.
    wat: a.wat === "waterschade" ? "chape" : a.wat,
    cd: a.wat === "waterschade" ? WATERSCHADE_CM : Number(config.cd),
    pd: Number(config.pd),
    verwarmt: a.verwarmt,
    tempo: "gemiddeld"
  });
  return {
    config: { ...config, weeks: weken },
    items,
    prijs: configPrice(config, items),
    weken,
    dagen: dryingDays(config),
    capaciteit: totalCapacity(items),
    luchtverzet: totalAirflow(items),
    extra,
    water
  };
}
const MIN_KAMERS = 1;
const MAX_KAMERS = 6;
const MIN_B = {
  Leefruimte: 3.6,
  Keuken: 2.4,
  Slaapkamer: 2.6,
  Bureau: 2.2,
  Badkamer: 1.8,
  Toilet: 1,
  Berging: 1.4,
  Wasplaats: 1.4,
  Dressing: 1.4,
  Zolder: 3
};
const opt = (naam, meervoud2, min, max, gewicht, kant) => ({ naam, meervoud: meervoud2, min, max, gewicht, kant, minB: MIN_B[naam] ?? 1.5 });
const RUIMTES = {
  gelijkvloers: [
    opt("Leefruimte", "Leefruimte", 1, 1, 3, "achter"),
    opt("Keuken", "Aparte keuken", 0, 1, 1.6, "achter"),
    opt("Slaapkamer", "Slaapkamers", 0, 2, 1.4, "vrij"),
    opt("Bureau", "Bureau", 0, 1, 1.1, "voor"),
    // Berging en wasplaats liggen achter, naast de keuken: daar komt de was en de
    // voorraad binnen. Aan de straatkant liggen hal, toilet en bureau.
    opt("Berging", "Berging", 0, 1, 0.8, "achter"),
    opt("Wasplaats", "Wasplaats", 0, 1, 0.8, "achter"),
    opt("Badkamer", "Badkamer", 0, 1, 1, "voor"),
    opt("Toilet", "Toilet", 0, 1, 0.45, "voor")
  ],
  // Boven: de grote slaapkamer aan de straatkant, badkamer en toilet aan de
  // tuinkant — recht boven de keuken, op dezelfde afvoer, zoals in de meeste
  // Vlaamse woningen.
  boven: [
    opt("Slaapkamer", "Slaapkamers", 1, 4, 1.5, "vrij"),
    opt("Badkamer", "Badkamers", 0, 2, 1, "achter"),
    opt("Bureau", "Bureau", 0, 1, 1, "vrij"),
    opt("Dressing", "Dressing", 0, 1, 0.7, "voor"),
    opt("Berging", "Berging", 0, 1, 0.7, "voor"),
    opt("Toilet", "Toilet", 0, 1, 0.45, "achter")
  ],
  zolder: [
    opt("Zolder", "Open zolder", 1, 1, 2, "achter"),
    opt("Slaapkamer", "Slaapkamers", 0, 2, 1.4, "voor"),
    opt("Badkamer", "Badkamer", 0, 1, 0.9, "voor"),
    opt("Bureau", "Bureau", 0, 1, 0.9, "vrij"),
    opt("Berging", "Berging", 0, 1, 0.6, "voor")
  ],
  appartement: [
    opt("Leefruimte", "Leefruimte", 1, 1, 2.6, "achter"),
    opt("Keuken", "Aparte keuken", 0, 1, 1.3, "achter"),
    opt("Slaapkamer", "Slaapkamers", 0, 3, 1.4, "vrij"),
    opt("Badkamer", "Badkamers", 0, 2, 0.9, "voor"),
    opt("Bureau", "Bureau", 0, 1, 1, "vrij"),
    opt("Berging", "Berging", 0, 1, 0.6, "voor"),
    opt("Toilet", "Toilet", 0, 1, 0.45, "voor")
  ]
};
const VOLGORDE = {
  // Elke woning heeft beneden een toilet; een berging is pas de vijfde ruimte.
  gelijkvloers: ["Leefruimte", "Keuken", "Toilet", "Bureau", "Berging", "Wasplaats"],
  boven: ["Slaapkamer", "Slaapkamer", "Badkamer", "Slaapkamer", "Bureau", "Toilet"],
  zolder: ["Zolder", "Slaapkamer", "Badkamer", "Berging", "Slaapkamer", "Bureau"],
  appartement: ["Leefruimte", "Keuken", "Slaapkamer", "Badkamer", "Slaapkamer", "Berging"]
};
const VOLGORDE_ENKEL = ["Leefruimte", "Keuken", "Slaapkamer", "Badkamer", "Toilet", "Slaapkamer"];
function isZolder(v, verdiepingen, dak) {
  return v === verdiepingen - 1 && dak !== "plat" && verdiepingen > 2;
}
function laagSoort(woning, v, verdiepingen, dak) {
  if (isZolder(v, verdiepingen, dak)) return "zolder";
  if (v === 0) return woning === "appartement" ? "appartement" : "gelijkvloers";
  return "boven";
}
function standaardKamers(woning, v, verdiepingen, dak) {
  if (isZolder(v, verdiepingen, dak)) return 1;
  const smal = WONING[woning].w < 7;
  if (woning === "appartement" && v === 0) return verdiepingen === 1 ? 4 : 3;
  if (v === 0 && verdiepingen === 1) return smal ? 3 : 4;
  if (v === 0) return smal ? 2 : 3;
  return smal ? 3 : 4;
}
function programmaVan(soort, n, lagen = 2) {
  const p = {};
  const volgorde = soort === "gelijkvloers" && lagen === 1 ? VOLGORDE_ENKEL : VOLGORDE[soort];
  for (const naam of volgorde.slice(0, Math.min(MAX_KAMERS, Math.max(MIN_KAMERS, Math.round(n))))) {
    p[naam] = (p[naam] ?? 0) + 1;
  }
  return geldig(soort, p);
}
function standaardProgramma(woning, v, verdiepingen, dak) {
  return programmaVan(laagSoort(woning, v, verdiepingen, dak), standaardKamers(woning, v, verdiepingen, dak), verdiepingen);
}
function aantalKamers(p) {
  return Object.values(p).reduce((a, b) => a + b, 0);
}
function geldig(soort, p) {
  const uit = {};
  let totaal = 0;
  for (const o of RUIMTES[soort]) {
    const n = Math.min(o.max, Math.max(o.min, Math.round(p[o.naam] ?? 0)));
    const plaats = Math.max(o.min, Math.min(n, MAX_KAMERS - totaal));
    if (plaats > 0) uit[o.naam] = plaats;
    totaal += plaats;
  }
  return uit;
}
const GANG = 1.2;
const HAL = 1.2;
const TRAP_L = 3;
const MIN_BREEDTE = 1.5;
const MIN_DIEPTE = 2.6;
const TOILET_B = 1;
const TOILET_L = 1.5;
function gangDiepte(l) {
  const z = (l - GANG) * 0.56;
  return Math.round(Math.min(l - GANG - MIN_DIEPTE, Math.max(MIN_DIEPTE, z)) * 10) / 10;
}
function rij(x0, x1, stukken) {
  const totaal = stukken.reduce((t, s) => t + s.gewicht, 0);
  const vast = stukken.reduce((t, s) => t + (s.minB ?? 0), 0);
  const over = Math.max(0, x1 - x0 - vast);
  let x = x0;
  return stukken.map((s, i) => {
    const w = i === stukken.length - 1 ? x1 - x : (s.minB ?? 0) + over * s.gewicht / totaal;
    const uit = { naam: s.naam, x, w };
    x += w;
    return uit;
  });
}
function laagPlan(woning, v, lagen, dak, programma) {
  const { w, l } = WONING[woning];
  const soort = laagSoort(woning, v, lagen, dak);
  const p = geldig(soort, programma);
  const opties = RUIMTES[soort];
  const ruimtes = [];
  for (const o of opties) for (let i = 0; i < (p[o.naam] ?? 0); i++) ruimtes.push({ naam: o.naam, gewicht: o.gewicht, kant: o.kant, minB: o.minB });
  const metHal = v === 0;
  const kamers = [];
  const openingen = [];
  const trappen = [];
  let n = 0;
  const id = () => `${v}-${n++}`;
  const som = (r) => r.reduce((t, s) => t + s.gewicht, 0);
  const zb = gangDiepte(l);
  const zf = zb + GANG;
  const trapX0 = w - TRAP_L - 0.1, trapX1 = w - 0.1;
  if (lagen > 1) trappen.push({ verdieping: v, x: trapX0, z: zb + 0.05, w: TRAP_L, l: GANG - 0.1, op: v < lagen - 1 });
  if (soort === "zolder" && ruimtes.length === 1 && ruimtes[0].naam === "Zolder") {
    kamers.push({ id: id(), naam: "Zolder", verdieping: v, x: 0, z: 0, w, l, soort: "kamer" });
    return { kamers, openingen, trappen };
  }
  const zuil = !metHal && ruimtes.length === 1;
  let gx = 0;
  if (zuil) {
    const grootste = ruimtes.reduce((g, r) => r.gewicht > g.gewicht ? r : g, ruimtes[0]);
    ruimtes.splice(ruimtes.indexOf(grootste), 1);
    const max = w - TRAP_L - 0.3;
    const wd = ruimtes.length === 0 ? max : Math.min(max, Math.max(MIN_DIEPTE, w * grootste.gewicht / (som(ruimtes) + grootste.gewicht) * 1.4));
    gx = Math.round(wd * 10) / 10;
    kamers.push({ id: id(), naam: grootste.naam, verdieping: v, x: 0, z: 0, w: gx, l, soort: "kamer" });
    openingen.push({ verdieping: v, as: "z", vast: gx, van: zb + 0.15, tot: zf - 0.15, soort: "deur", kant: -1 });
  }
  const breed = w - gx;
  const ruimte = { achter: breed, voor: breed - (metHal ? HAL : 0) };
  const achter = [], voor = [];
  const bezet = (band) => band.reduce((t, s) => t + (s.minB ?? MIN_BREEDTE), 0);
  const past = (band, r) => bezet(band) + (r.minB ?? MIN_BREEDTE) <= (band === achter ? ruimte.achter : ruimte.voor) + 1e-9;
  const opVolgorde = [...ruimtes.filter((r) => r.kant !== "vrij"), ...ruimtes.filter((r) => r.kant === "vrij")];
  for (const r of opVolgorde) {
    let band = r.kant === "achter" ? achter : r.kant === "voor" ? voor : som(achter) <= som(voor) ? achter : voor;
    const ander = band === achter ? voor : achter;
    if (!past(band, r) || r.kant === "vrij" && som(band) > som(ander) + 2.5 * r.gewicht && past(ander, r)) band = ander;
    if (!past(band, r)) continue;
    if (metHal && band === voor && (r.naam === "Berging" || r.naam === "Wasplaats")) continue;
    band.push(r);
  }
  if (achter.length === 0 && voor.length > 1) achter.push(voor.shift());
  if (metHal) voor.sort((a, b) => Number(b.naam === "Toilet") - Number(a.naam === "Toilet"));
  if (v >= 2) {
    achter.reverse();
    voor.reverse();
  }
  let toiletInGang = false;
  if (!metHal && achter.length && voor.length) {
    for (const band of [achter, voor]) {
      const i = band.findIndex((r) => r.naam === "Toilet");
      if (i < 0 || band.length < 2) continue;
      const [t] = band.splice(i, 1);
      const kan = [achter, voor].every((b) => {
        const vakken = rij(gx, w, b);
        return vakken.every((r) => r.x + r.w >= gx + TOILET_B + 1 - 1e-9);
      });
      if (kan) {
        toiletInGang = true;
        break;
      }
      band.splice(i, 0, t);
    }
  }
  const gangX0 = gx + (toiletInGang ? TOILET_B : 0);
  const deurIn = (x0In, x1) => {
    const x0 = Math.max(x0In, gangX0);
    const breedte = Math.min(0.9, x1 - x0 - 0.3);
    const kandidaten = [x0 + 0.15 + breedte / 2 + 0.1, x1 - 0.15 - breedte / 2 - 0.1];
    const vrij = (c2) => lagen < 2 || c2 + breedte / 2 < trapX0 - 0.1 || c2 - breedte / 2 > trapX1;
    const c = kandidaten.find(vrij) ?? kandidaten[0];
    return [c - breedte / 2, c + breedte / 2];
  };
  const achterVakken = achter.length ? rij(gx, w, achter) : [];
  achterVakken.forEach((r) => {
    kamers.push({ id: id(), naam: r.naam, verdieping: v, x: r.x, z: 0, w: r.w, l: zb, soort: "kamer" });
    const [a, b] = deurIn(r.x, r.x + r.w);
    openingen.push({ verdieping: v, as: "x", vast: zb, van: a, tot: b, soort: "deur", kant: -1 });
  });
  achterVakken.forEach((r, i) => {
    const buur = achterVakken[i + 1];
    if (!buur) return;
    const paar = [r.naam, buur.naam];
    if (paar.includes("Leefruimte") && paar.includes("Keuken")) {
      const breedte = Math.min(1.6, zb - 1.2);
      openingen.push({ verdieping: v, as: "z", vast: buur.x, van: zb / 2 - breedte / 2, tot: zb / 2 + breedte / 2, soort: "open", kant: 1 });
    }
  });
  const gangNaam = soort === "boven" || soort === "zolder" ? "Overloop" : voor.length === 0 ? "Hal" : "Gang";
  const g0 = achterVakken.length ? zb : 0;
  const g1 = voor.length ? zf : l;
  kamers.push({ id: id(), naam: gangNaam, verdieping: v, x: gangX0, z: g0, w: w - gangX0, l: g1 - g0, soort: "circulatie" });
  if (toiletInGang) {
    kamers.push({ id: id(), naam: "Toilet", verdieping: v, x: gx, z: zb, w: TOILET_B, l: GANG, soort: "kamer" });
    openingen.push({ verdieping: v, as: "z", vast: gangX0, van: zb + 0.15, tot: zf - 0.15, soort: "deur", kant: 1 });
  }
  if (metHal && voor.length === 0) {
    openingen.push({ verdieping: v, as: "x", vast: l, van: 0.25, tot: 1.15, soort: "voordeur", kant: -1 });
  }
  if (voor.length > 0) {
    const x0 = gx + (metHal ? HAL : 0);
    if (metHal) {
      kamers.push({ id: id(), naam: "Hal", verdieping: v, x: gx, z: zf, w: HAL, l: l - zf, soort: "circulatie" });
      openingen.push({ verdieping: v, as: "x", vast: zf, van: gx, tot: gx + HAL, soort: "open", kant: 1 });
      openingen.push({ verdieping: v, as: "x", vast: l, van: gx + 0.15, tot: gx + HAL - 0.15, soort: "voordeur", kant: -1 });
    }
    rij(x0, w, voor).forEach((r) => {
      if (metHal && r.naam === "Toilet" && Math.abs(r.x - x0) < 1e-9 && l - zf >= TOILET_L + 1.1) {
        kamers.push({ id: id(), naam: "Toilet", verdieping: v, x: r.x, z: zf, w: r.w, l: TOILET_L, soort: "kamer" });
        openingen.push({ verdieping: v, as: "z", vast: r.x, van: zf + 0.3, tot: zf + 0.3 + Math.min(0.8, TOILET_L - 0.45), soort: "deur", kant: 1 });
        kamers.push({ id: id(), naam: "Vestiaire", verdieping: v, x: r.x, z: zf + TOILET_L, w: r.w, l: l - zf - TOILET_L, soort: "circulatie" });
        openingen.push({ verdieping: v, as: "z", vast: r.x, van: zf + TOILET_L + 0.1, tot: l - 0.15, soort: "open", kant: 1 });
        return;
      }
      kamers.push({ id: id(), naam: r.naam, verdieping: v, x: r.x, z: zf, w: r.w, l: l - zf, soort: "kamer" });
      const [a, b] = deurIn(r.x, r.x + r.w);
      openingen.push({ verdieping: v, as: "x", vast: zf, van: a, tot: b, soort: "deur", kant: 1 });
    });
  }
  return { kamers, openingen, trappen };
}
function planVoor(woning, verdiepingen, dak, programmas = []) {
  const lagen = Math.min(MAX_VERDIEPINGEN, Math.max(1, verdiepingen));
  const uit = { kamers: [], openingen: [], trappen: [] };
  for (let v = 0; v < lagen; v++) {
    const p = programmas[v] ?? standaardProgramma(woning, v, lagen, dak);
    const laag = laagPlan(woning, v, lagen, dak, p);
    uit.kamers.push(...laag.kamers);
    uit.openingen.push(...laag.openingen);
    uit.trappen.push(...laag.trappen);
  }
  return uit;
}
function maxKamers(woning, v, verdiepingen, dak) {
  const soort = laagSoort(woning, v, verdiepingen, dak);
  for (let n = MAX_KAMERS; n > MIN_KAMERS; n--) {
    const p = programmaVan(soort, n, verdiepingen);
    const kamers = laagPlan(woning, v, verdiepingen, dak, p).kamers.filter((k) => k.soort === "kamer").length;
    if (kamers === aantalKamers(p)) return n;
  }
  return MIN_KAMERS;
}
function plaatsToestellen(items, kamers, trappen = []) {
  if (kamers.length === 0) return [];
  const opp = (k) => k.w * k.l;
  const bezet = /* @__PURE__ */ new Map();
  const uit = [];
  const drogersIn = /* @__PURE__ */ new Map();
  const isDroger = (k) => k === "small" || k === "medium";
  const doorloop = (kamer) => kamer.soort === "circulatie" || kamer.naam === "Toilet";
  const geschikt = (kamer, k) => isDroger(k) || k === "kachel" ? !doorloop(kamer) : true;
  const kies = (k) => {
    let kandidaten = kamers.filter((kamer) => geschikt(kamer, k));
    if (kandidaten.length === 0) kandidaten = kamers;
    if (isDroger(k)) {
      const min = Math.min(...kandidaten.map((kamer) => drogersIn.get(kamer.id) ?? 0));
      kandidaten = kandidaten.filter((kamer) => (drogersIn.get(kamer.id) ?? 0) === min);
    }
    const factor = (kamer) => kamer.naam === "Badkamer" ? k === "kachel" ? 0.3 : 0.4 : 1;
    const score = (kamer) => opp(kamer) * factor(kamer) / ((bezet.get(kamer.id) ?? 0) + 1);
    return kandidaten.reduce((best, kamer) => score(kamer) > score(best) + 1e-9 ? kamer : best);
  };
  const volgorde = ["medium", "small", "axiaal", "kachel"];
  const perSoort = /* @__PURE__ */ new Map();
  for (const k of volgorde) {
    const q = items.find((it) => it.k === k)?.q ?? 0;
    for (let i = 0; i < q; i++) {
      const kamer = kies(k);
      const plek2 = bezet.get(kamer.id) ?? 0;
      bezet.set(kamer.id, plek2 + 1);
      if (isDroger(k)) drogersIn.set(kamer.id, (drogersIn.get(kamer.id) ?? 0) + 1);
      const [fx, fz] = SLOTS[plek2 % SLOTS.length];
      const n = perSoort.get(k) ?? 0;
      perSoort.set(k, n + 1);
      const [x, z] = naastTrap(kamer, kamer.w * fx, kamer.l * fz, trappen);
      uit.push({ k, kamer: kamer.id, x, z, n });
    }
  }
  return uit;
}
function naastTrap(kamer, x, z, trappen) {
  const marge = 0.6;
  for (const t of trappen) {
    if (t.verdieping !== kamer.verdieping) continue;
    const ax = kamer.x + x, az = kamer.z + z;
    if (ax < t.x - marge || ax > t.x + t.w + marge || az < t.z - marge || az > t.z + t.l + marge) continue;
    const achter = t.z - marge - kamer.z;
    const voor = t.z + t.l + marge - kamer.z;
    const ruimAchter = achter >= marge, ruimVoor = voor <= kamer.l - marge;
    if (ruimAchter && (!ruimVoor || achter >= kamer.l - voor)) return [x, achter];
    if (ruimVoor) return [x, voor];
  }
  return [x, z];
}
const SLOTS = [
  [0.5, 0.5],
  [0.25, 0.3],
  [0.75, 0.7],
  [0.75, 0.3],
  [0.25, 0.7]
];
function verdiepingNaam(v, totaal, dak, taal = "nl") {
  if (taal === "fr") {
    if (v === 0) return "Rez-de-chaussée";
    if (isZolder(v, totaal, dak)) return "Grenier";
    return v === 1 ? "1er étage" : `${v}e étage`;
  }
  if (taal === "en") {
    if (v === 0) return "Ground floor";
    if (isZolder(v, totaal, dak)) return "Attic";
    return v === 1 ? "1st floor" : v === 2 ? "2nd floor" : v === 3 ? "3rd floor" : `${v}th floor`;
  }
  if (v === 0) return "Gelijkvloers";
  if (isZolder(v, totaal, dak)) return "Zolder";
  return v === 1 ? "1e verdieping" : `${v}e verdieping`;
}
const WONING_FR = {
  rijwoning: { label: "Maison mitoyenne", sub: "Deux murs mitoyens" },
  halfopen: { label: "Semi-mitoyenne", sub: "Un mur mitoyen" },
  open: { label: "Maison quatre façades", sub: "Isolée" },
  appartement: { label: "Appartement", sub: "Un ou deux niveaux" }
};
const DAK_FR = {
  zadeldak: { label: "Toit à deux versants", sub: "Deux pans inclinés" },
  plat: { label: "Toit plat", sub: "Ou un appartement au-dessus" },
  lessenaar: { label: "Toit en appentis", sub: "Un seul pan incliné" }
};
const WAT_FR = {
  pleister: { label: "Plafonnage", sub: "Murs et plafonds" },
  chape: { label: "Chape", sub: "Chape de sol" },
  beide: { label: "Plafonnage + chape", sub: "Murs et sol" },
  waterschade: { label: "Maçonnerie et dalle", sub: "Eau de pluie dans le gros œuvre" }
};
const FASE_FR = {
  ruwbouw: {
    label: "Gros œuvre, fenêtres encore ouvertes",
    kort: "Gros œuvre",
    advies: "La maçonnerie et la dalle sont gorgées d'eau de pluie. Le séchage n'est possible qu'une fois les ouvertures fermées, sinon vous séchez l'air extérieur.",
    druppelsTekst: "eau de pluie",
    pin: "Eau de pluie sur la dalle",
    starten: "Après fermeture avec du film",
    meten: "Pas encore",
    letOp: "Fermer d'abord les ouvertures"
  },
  ramen: {
    label: "Fenêtres posées",
    kort: "Fenêtres posées",
    advies: "Le bon moment pour sécher la maçonnerie et la dalle, avant que la chape soit coulée.",
    druppelsTekst: "modéré",
    pin: "Humidité dans la maçonnerie",
    starten: "Tout de suite",
    meten: "Pas nécessaire",
    letOp: "Eau de pluie sur la dalle"
  },
  chape: {
    label: "Chape coulée",
    kort: "Chape",
    advies: "Une chape apporte le plus d'eau dans la maison : environ une semaine par centimètre pour sécher.",
    druppelsTekst: "le plus",
    pin: "Eau dans la chape",
    starten: "Après ± 1 semaine de prise",
    meten: "Avant carrelage ou parquet",
    letOp: "Ne pas forcer trop tôt"
  },
  tegels: {
    label: "Carrelage posé",
    kort: "Carrelage",
    advies: "Le carrelage enferme l'humidité dans la chape. Elle ne peut plus s'échapper que par les joints et les murs.",
    druppelsTekst: "enfermée",
    pin: "Humidité sous le carrelage",
    starten: "Tout de suite",
    meten: "Chape sous le carrelage",
    letOp: "L'humidité est enfermée"
  },
  gepleisterd: {
    label: "Fraîchement plafonné",
    kort: "Plafonné",
    advies: "Le plafonnage sèche environ une semaine par centimètre. Ce n'est qu'ensuite qu'on peut peindre.",
    druppelsTekst: "beaucoup",
    pin: "Plafonnage humide",
    starten: "Après 2 à 3 jours",
    meten: "Avant de peindre",
    letOp: "La peinture sur plafonnage humide s'écaille"
  },
  afgewerkt: {
    label: "Fini ou habité",
    kort: "Fini",
    advies: "La peinture et le sol retiennent la dernière humidité : taches d'humidité, condensation ou moisissures dans les coins. Les déshumidificateurs fonctionnent aussi pendant que vous y habitez, et ils sont assez silencieux pour une chambre.",
    druppelsTekst: "cachée",
    pin: "Humidité résiduelle derrière la peinture",
    starten: "Tout de suite, en douceur",
    meten: "D'abord : où se trouve-t-elle ?",
    letOp: "Assez silencieux pour une chambre"
  }
};
const KAMER_FR = {
  Leefruimte: "Séjour",
  Keuken: "Cuisine",
  Slaapkamer: "Chambre",
  Bureau: "Bureau",
  Berging: "Rangement",
  Wasplaats: "Buanderie",
  Badkamer: "Salle de bain",
  Toilet: "WC",
  Dressing: "Dressing",
  Zolder: "Grenier",
  Overloop: "Palier",
  Hal: "Hall",
  Gang: "Couloir",
  Vestiaire: "Vestiaire"
};
const WONING_EN = {
  rijwoning: { label: "Terraced house", sub: "Two party walls" },
  halfopen: { label: "Semi-detached", sub: "One party wall" },
  open: { label: "Detached house", sub: "Free-standing" },
  appartement: { label: "Apartment", sub: "One or two storeys" }
};
const DAK_EN = {
  zadeldak: { label: "Pitched roof", sub: "Two sloping planes" },
  plat: { label: "Flat roof", sub: "Or an apartment above" },
  lessenaar: { label: "Mono-pitch roof", sub: "One sloping plane" }
};
const WAT_EN = {
  pleister: { label: "Plasterwork", sub: "Walls and ceilings" },
  chape: { label: "Screed", sub: "Floor screed" },
  beide: { label: "Plasterwork + screed", sub: "Walls and floor" },
  waterschade: { label: "Masonry and floor slab", sub: "Rainwater in the shell" }
};
const FASE_EN = {
  ruwbouw: {
    label: "Shell, windows still open",
    kort: "Shell",
    advies: "The masonry and floor slab are soaked with rainwater. Drying only works once the openings are closed, otherwise you are drying the outside air.",
    druppelsTekst: "rainwater",
    pin: "Rainwater on the floor slab",
    starten: "After sealing with sheeting",
    meten: "Not yet",
    letOp: "Close the openings first"
  },
  ramen: {
    label: "Windows fitted",
    kort: "Windows fitted",
    advies: "The right moment to dry out the masonry and floor slab, before the screed goes down.",
    druppelsTekst: "moderate",
    pin: "Moisture in the masonry",
    starten: "Straight away",
    meten: "Not needed",
    letOp: "Rainwater on the floor slab"
  },
  chape: {
    label: "Screed poured",
    kort: "Screed",
    advies: "A screed brings the most water into the house: roughly a week per centimetre to dry.",
    druppelsTekst: "the most",
    pin: "Water in the screed",
    starten: "After ± 1 week of curing",
    meten: "Before tiles or parquet",
    letOp: "Don't force it too early"
  },
  tegels: {
    label: "Tiles laid",
    kort: "Tiles",
    advies: "Tiles lock the moisture into the screed. It can only escape through the joints and the walls.",
    druppelsTekst: "trapped",
    pin: "Moisture under the tiles",
    starten: "Straight away",
    meten: "Screed under the tiles",
    letOp: "Moisture is trapped"
  },
  gepleisterd: {
    label: "Freshly plastered",
    kort: "Plastered",
    advies: "Plasterwork dries at roughly a week per centimetre. Only then can it be painted.",
    druppelsTekst: "a lot",
    pin: "Wet plasterwork",
    starten: "After 2 to 3 days",
    meten: "Before painting",
    letOp: "Paint on wet plaster peels"
  },
  afgewerkt: {
    label: "Finished or lived in",
    kort: "Finished",
    advies: "Paint and flooring hold on to the last moisture: damp patches, condensation or mould in the corners. The dehumidifiers also work while you live there, and they are quiet enough for a bedroom.",
    druppelsTekst: "hidden",
    pin: "Residual moisture behind the paint",
    starten: "Straight away, gently",
    meten: "First: where is it?",
    letOp: "Quiet enough for a bedroom"
  }
};
const KAMER_EN = {
  Leefruimte: "Living room",
  Keuken: "Kitchen",
  Slaapkamer: "Bedroom",
  Bureau: "Study",
  Berging: "Storage room",
  Wasplaats: "Utility room",
  Badkamer: "Bathroom",
  Toilet: "WC",
  Dressing: "Dressing room",
  Zolder: "Attic",
  Overloop: "Landing",
  Hal: "Hall",
  Gang: "Corridor",
  Vestiaire: "Cloakroom"
};
function woningTekst(w, taal = "nl") {
  return taal === "fr" ? WONING_FR[w] : taal === "en" ? WONING_EN[w] : WONING[w];
}
function dakTekst(d, taal = "nl") {
  return taal === "fr" ? DAK_FR[d] : taal === "en" ? DAK_EN[d] : DAK_LABEL[d];
}
function watTekst(w, taal = "nl") {
  return taal === "fr" ? WAT_FR[w] : taal === "en" ? WAT_EN[w] : WAT_LABEL[w];
}
function faseInTaal(f, taal = "nl") {
  if (taal === "nl") return FASE[f];
  const { pin, ...t } = taal === "fr" ? FASE_FR[f] : FASE_EN[f];
  return { ...FASE[f], ...t, pin: { ...FASE[f].pin, tekst: pin } };
}
function kamerNaam(naam, taal = "nl") {
  if (taal === "fr") return KAMER_FR[naam] ?? naam;
  if (taal === "en") return KAMER_EN[naam] ?? naam;
  return naam;
}
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/simulator/maten.ts");
const H = 2.6;
const SLAB = 0.3;
const FH = H + SLAB;
const T = 0.24;
const TI = 0.12;
const HC = 1.1;
function nokHoogte(dak, l) {
  return dak === "zadeldak" ? Math.min(l * 0.38, 4.2) : dak === "lessenaar" ? 2.4 : 0.4;
}
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/hooks/useReducedMotion.ts");
function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/simulator/IsoHouse.tsx");
const S = 20;
const ISO = Math.sqrt(3) / 2;
const SEG = 0.6;
function P([x, y, z]) {
  return [(x - z) * ISO * S, ((x + z) / 2 - y) * S];
}
const pts = (vs) => vs.map((v) => P(v).map((n) => n.toFixed(2)).join(",")).join(" ");
function Poly({ v, fill, stroke = "#00000022", sw = 0.6, className, style, opacity }) {
  return /* @__PURE__ */ jsx(
    "polygon",
    {
      points: pts(v),
      fill,
      stroke,
      strokeWidth: sw,
      strokeLinejoin: "round",
      className,
      style,
      opacity
    }
  );
}
function Blok({ x0, x1, y0, y1, z0, z1, c }) {
  return /* @__PURE__ */ jsxs("g", { children: [
    /* @__PURE__ */ jsx(Poly, { v: [[x1, y0, z0], [x1, y1, z0], [x1, y1, z1], [x1, y0, z1]], fill: c.px, stroke: c.stroke }),
    /* @__PURE__ */ jsx(Poly, { v: [[x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]], fill: c.pz, stroke: c.stroke }),
    /* @__PURE__ */ jsx(Poly, { v: [[x0, y1, z0], [x1, y1, z0], [x1, y1, z1], [x0, y1, z1]], fill: c.top, stroke: c.stroke })
  ] });
}
function useTween(target, ms, reduced) {
  const [value, setValue] = useState(target);
  const cur = useRef(target);
  useEffect(() => {
    if (reduced) {
      cur.current = target;
      setValue(target);
      return;
    }
    const from = cur.current;
    if (Math.abs(from - target) < 1e-6) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t) => {
      const k = Math.min(1, (t - start) / ms);
      const e = 1 - Math.pow(1 - k, 3);
      cur.current = from + (target - from) * e;
      setValue(cur.current);
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, ms, reduced]);
  return value;
}
const ARDUIN = { top: "#717980", px: "#4e555b", pz: "#5d656c", stroke: "#00000033" };
const KADER = "#f4f1ec";
const PLAAT = { top: "#d9d2c6", px: "#b9b0a3", pz: "#c9c1b4", stroke: "#7a706433" };
const SNEDE = "#2a2422";
const DEURBLAD = { top: "#5b4a3f", px: "#8a7464", pz: "#9b8676", stroke: "none" };
const TREDE = { top: "#b59a7e", px: "#8f765f", pz: "#a0866d", stroke: "#00000022" };
const LEUNING = { top: "#2a2422", px: "#4a403b", pz: "#5a4e48", stroke: "none" };
const GLAS = "#33424d";
const DAK = { vlak: "#36393d", licht: "#45494e", lijn: "#25272a", zink: "#9aa1a6" };
const MATEN$1 = {
  // Iets groter dan in het echt: op de schaal van een hele bouwlaag zou een
  // droger van 40 cm een stipje zijn.
  small: [0.62, 1.05, 0.55],
  medium: [0.72, 1.2, 0.62],
  axiaal: [1, 1, 0.4],
  kachel: [0.52, 0.72, 0.5]
};
function Toestel({ k, x, y, z, n, werkend, uid }) {
  const [w, h, d] = MATEN$1[k];
  const x0 = x - w / 2, x1 = x + w / 2, z0 = z - d / 2, z1 = z + d / 2;
  const delay = `${-(n * 0.37 + (k === "medium" ? 0.2 : 0)) % 2}s`;
  if (k === "axiaal") {
    const [ox, oy] = P([x0, y, z1]);
    const [ax, ay] = P([x0 + 1, y, z1]);
    const [bx, by] = P([x0, y + 1, z1]);
    const m = `matrix(${(ax - ox).toFixed(3)} ${(ay - oy).toFixed(3)} ${(bx - ox).toFixed(3)} ${(by - oy).toFixed(3)} ${ox.toFixed(2)} ${oy.toFixed(2)})`;
    const cx = w / 2, cy = h * 0.52, r = Math.min(w, h) * 0.4;
    return /* @__PURE__ */ jsxs("g", { children: [
      /* @__PURE__ */ jsx(Blok, { x0, x1, y0: y + 0.04, y1: y + h, z0, z1, c: { top: "#f6f5f2", px: "#d4d2ce", pz: "#efeeea", stroke: "#00000033" } }),
      /* @__PURE__ */ jsxs("g", { transform: m, children: [
        /* @__PURE__ */ jsx("circle", { cx, cy, r, fill: "#1c1b1b" }),
        /* @__PURE__ */ jsxs("g", { children: [
          [0, 72, 144, 216, 288].map((a) => /* @__PURE__ */ jsx(
            "path",
            {
              d: `M${cx} ${cy} q ${r * 0.5} ${r * 0.15} ${r * 0.92} 0 q ${-r * 0.3} ${r * 0.28} ${-r * 0.92} 0`,
              fill: "#4a4848",
              transform: `rotate(${a} ${cx} ${cy})`
            },
            a
          )),
          werkend && /* @__PURE__ */ jsx("animateTransform", { attributeName: "transform", type: "rotate", from: `0 ${cx} ${cy}`, to: `360 ${cx} ${cy}`, dur: "0.45s", repeatCount: "indefinite" })
        ] }),
        /* @__PURE__ */ jsx("circle", { cx, cy, r: r * 0.2, fill: "#c8102e" }),
        /* @__PURE__ */ jsx("circle", { cx, cy, r, fill: "none", stroke: "#9a9894", strokeWidth: 0.05 })
      ] }),
      /* @__PURE__ */ jsx(Poly, { v: [[x0 + 0.06, y, z1 - 0.02], [x0 + 0.1, y, z1 - 0.02], [x0 + 0.1, y + 0.08, z1 - 0.02], [x0 + 0.06, y + 0.08, z1 - 0.02]], fill: "#222" }),
      /* @__PURE__ */ jsx(Poly, { v: [[x1 - 0.1, y, z1 - 0.02], [x1 - 0.06, y, z1 - 0.02], [x1 - 0.06, y + 0.08, z1 - 0.02], [x1 - 0.1, y + 0.08, z1 - 0.02]], fill: "#222" })
    ] });
  }
  if (k === "kachel") {
    return /* @__PURE__ */ jsxs("g", { children: [
      /* @__PURE__ */ jsx(Blok, { x0, x1, y0: y, y1: y + h, z0, z1, c: { top: "#4b4846", px: "#2f2d2c", pz: "#3b3937", stroke: "#00000055" } }),
      /* @__PURE__ */ jsx(
        Poly,
        {
          v: [[x0 + 0.06, y + 0.12, z1 + 1e-3], [x1 - 0.06, y + 0.12, z1 + 1e-3], [x1 - 0.06, y + h - 0.1, z1 + 1e-3], [x0 + 0.06, y + h - 0.1, z1 + 1e-3]],
          fill: `url(#${uid}-gloed)`,
          stroke: "none",
          className: werkend ? "ds-gloei" : void 0
        }
      ),
      werkend && [0, 1, 2].map((i) => {
        const [sx, sy] = P([x + (i - 1) * 0.12, y + h + 0.05, z]);
        return /* @__PURE__ */ jsx(
          "path",
          {
            d: `M${sx.toFixed(1)} ${sy.toFixed(1)} q 2.5 -4 0 -8 q -2.5 -4 0 -8`,
            className: "ds-warmte",
            style: { animationDelay: `${-i * 0.5}s` }
          },
          i
        );
      })
    ] });
  }
  const [lx, ly] = P([x1 - 0.1, y + h - 0.14, z1]);
  return /* @__PURE__ */ jsxs("g", { children: [
    /* @__PURE__ */ jsx(
      "polyline",
      {
        points: pts([[x0 + 0.04, y + 0.1, z0], [x0 + 0.04, y + h + 0.28, z0], [x1 - 0.04, y + h + 0.28, z0], [x1 - 0.04, y + 0.1, z0]]),
        fill: "none",
        stroke: "#1f1f1f",
        strokeWidth: 1.1,
        strokeLinejoin: "round"
      }
    ),
    /* @__PURE__ */ jsx(Blok, { x0, x1, y0: y + 0.1, y1: y + h, z0, z1, c: { top: "#fbfbfa", px: "#dcdad6", pz: "#f1f0ed", stroke: "#00000040" } }),
    /* @__PURE__ */ jsx(Poly, { v: [[x1 + 1e-3, y + h * 0.45, z0 + 0.05], [x1 + 1e-3, y + h - 0.06, z0 + 0.05], [x1 + 1e-3, y + h - 0.06, z1 - 0.05], [x1 + 1e-3, y + h * 0.45, z1 - 0.05]], fill: "#2a2a2a", stroke: "none" }),
    /* @__PURE__ */ jsx(Poly, { v: [[x1 + 1e-3, y + 0.16, z0 + 0.07], [x1 + 1e-3, y + h * 0.4, z0 + 0.07], [x1 + 1e-3, y + h * 0.4, z1 - 0.07], [x1 + 1e-3, y + 0.16, z1 - 0.07]], fill: "#3d4a55", stroke: "none" }),
    werkend && /* @__PURE__ */ jsx(
      Poly,
      {
        v: [[x1 + 2e-3, y + 0.16, z0 + 0.07], [x1 + 2e-3, y + h * 0.4, z0 + 0.07], [x1 + 2e-3, y + h * 0.4, z1 - 0.07], [x1 + 2e-3, y + 0.16, z1 - 0.07]],
        fill: "#6fa8d6",
        stroke: "none",
        className: "ds-tank",
        style: { animationDelay: delay }
      }
    ),
    /* @__PURE__ */ jsx(Poly, { v: [[x0 + 0.1, y + h + 1e-3, z0 + 0.12], [x1 - 0.12, y + h + 1e-3, z0 + 0.12], [x1 - 0.12, y + h + 1e-3, z0 + 0.2], [x0 + 0.1, y + h + 1e-3, z0 + 0.2]], fill: "#c8102e", stroke: "none" }),
    [z0 + 0.08, z1 - 0.08].map((wz, i) => {
      const [cx, cy] = P([x1 + 0.02, y + 0.09, wz]);
      return /* @__PURE__ */ jsx("ellipse", { cx, cy, rx: 1.6, ry: 1.9, fill: "#1c1c1c" }, i);
    }),
    /* @__PURE__ */ jsx("circle", { cx: lx, cy: ly, r: 0.9, className: werkend ? "ds-led on" : "ds-led", style: { animationDelay: delay } })
  ] });
}
const STANDAARD_MATERIAAL = {
  muur: "#ddd6cb",
  vloer: "#c9c2b6",
  vocht: 0,
  muurNat: false,
  vloerNat: false,
  parket: false,
  meubels: false
};
function IsoHouse({
  woning,
  verdiepingen,
  dak,
  kamers,
  openingen = [],
  trappen = [],
  open,
  actief,
  plaatsingen = [],
  werkend = false,
  materiaal = STANDAARD_MATERIAAL,
  mini = false,
  cyclus = 10,
  className
}) {
  const uid = useId().replace(/:/g, "");
  const reduced = useReducedMotion();
  const taal = useTaal();
  const { w, l, buren } = WONING[woning];
  const lagen = Math.max(1, verdiepingen);
  const act = Math.min(actief, lagen - 1);
  const o = useTween(open ? 1 : 0, 900, reduced || mini);
  const gevel = mini ? { top: "#e9e2d7", px: "#9a4a33", pz: "#b05a3d", stroke: "#00000022" } : { top: "#e9e2d7", px: `url(#${uid}-bx)`, pz: `url(#${uid}-bz)`, stroke: "#00000022" };
  const vloerband = (v) => v === 0 ? ARDUIN : { ...PLAAT, px: gevel.px, pz: gevel.pz, stroke: "#00000022" };
  const daktop = lagen * FH;
  const nok = nokHoogte(dak, l);
  const bbox = (topY) => {
    const corners = [
      [-T, 0, -T],
      [w + T, 0, -T],
      [-T, 0, l + T],
      [w + T, 0, l + T],
      [-T, topY, -T],
      [w + T, topY, -T],
      [-T, topY, l + T],
      [w + T, topY, l + T]
    ];
    const ps = corners.map(P);
    const xs = ps.map((p) => p[0]), ys = ps.map((p) => p[1]);
    const pad = mini ? 6 : 26;
    return [Math.min(...xs) - pad, Math.min(...ys) - pad, Math.max(...xs) - Math.min(...xs) + pad * 2, Math.max(...ys) - Math.min(...ys) + pad * 2];
  };
  const dicht = bbox(daktop + nok + 0.3);
  const opengewerkt = bbox(act * FH + SLAB + H + 0.4);
  const camT = useTween(open ? 1 : 0, 900, reduced || mini);
  const camA = useTween(act, 900, reduced || mini);
  const openNu = bbox(camA * FH + SLAB + H + 0.4);
  const cam = dicht.map((d, i) => d + ((open ? openNu : opengewerkt)[i] - d) * camT);
  const viewBox = cam.map((n) => n.toFixed(1)).join(" ");
  const lift = (H + 3) * o;
  const buurBlok = (x0, x1) => {
    const y1 = Math.max(2, lagen) * FH + 0.4;
    return /* @__PURE__ */ jsxs("g", { className: "ds-buur", children: [
      /* @__PURE__ */ jsx(Poly, { v: [[x0, 0, l], [x1, 0, l], [x1, y1, l], [x0, y1, l]], fill: "#00000006", stroke: "#8a827888", sw: 0.6 }),
      /* @__PURE__ */ jsx(Poly, { v: [[x0, y1, 0], [x1, y1, 0], [x1, y1, l], [x0, y1, l]], fill: "#00000004", stroke: "#8a827888", sw: 0.6 }),
      /* @__PURE__ */ jsx(Poly, { v: [[x1, 0, 0], [x1, y1, 0], [x1, y1, l], [x1, 0, l]], fill: "#00000005", stroke: "#8a827888", sw: 0.6 })
    ] });
  };
  const voordeur = openingen.find((o2) => o2.soort === "voordeur" && o2.verdieping === 0);
  const zf = l + T + 0.01;
  const xf = w + T + 0.01;
  const raamZ = (x0, x1, y0, y1, key) => /* @__PURE__ */ jsxs("g", { children: [
    /* @__PURE__ */ jsx(Poly, { v: [[x0, y0, zf], [x1, y0, zf], [x1, y1, zf], [x0, y1, zf]], fill: KADER, stroke: "#00000022", sw: 0.4 }),
    /* @__PURE__ */ jsx(Poly, { v: [[x0 + 0.08, y0 + 0.08, zf + 5e-3], [x1 - 0.08, y0 + 0.08, zf + 5e-3], [x1 - 0.08, y1 - 0.08, zf + 5e-3], [x0 + 0.08, y1 - 0.08, zf + 5e-3]], fill: GLAS, stroke: "none" }),
    /* @__PURE__ */ jsx("polyline", { points: pts([[(x0 + x1) / 2, y0 + 0.08, zf + 0.01], [(x0 + x1) / 2, y1 - 0.08, zf + 0.01]]), stroke: KADER, strokeWidth: 1.2, fill: "none" }),
    /* @__PURE__ */ jsx("polyline", { points: pts([[x0 + 0.08, y1 - 0.5, zf + 0.01], [x1 - 0.08, y1 - 0.5, zf + 0.01]]), stroke: KADER, strokeWidth: 1, fill: "none" }),
    /* @__PURE__ */ jsx(Blok, { x0: x0 - 0.07, x1: x1 + 0.07, y0: y0 - 0.1, y1: y0, z0: l + T, z1: l + T + 0.09, c: ARDUIN })
  ] }, key);
  const raamX = (z0, z1, y0, y1, key) => /* @__PURE__ */ jsxs("g", { children: [
    /* @__PURE__ */ jsx(Poly, { v: [[xf, y0, z0], [xf, y1, z0], [xf, y1, z1], [xf, y0, z1]], fill: KADER, stroke: "#00000022", sw: 0.4 }),
    /* @__PURE__ */ jsx(Poly, { v: [[xf + 5e-3, y0 + 0.08, z0 + 0.08], [xf + 5e-3, y1 - 0.08, z0 + 0.08], [xf + 5e-3, y1 - 0.08, z1 - 0.08], [xf + 5e-3, y0 + 0.08, z1 - 0.08]], fill: GLAS, stroke: "none" }),
    /* @__PURE__ */ jsx("polyline", { points: pts([[xf + 0.01, y1 - 0.45, z0 + 0.08], [xf + 0.01, y1 - 0.45, z1 - 0.08]]), stroke: KADER, strokeWidth: 1, fill: "none" }),
    /* @__PURE__ */ jsx(Blok, { x0: w + T, x1: w + T + 0.09, y0: y0 - 0.1, y1: y0, z0: z0 - 0.07, z1: z1 + 0.07, c: ARDUIN })
  ] }, key);
  const ramenZ = (yb, v) => {
    const deurKolom = voordeur && woning !== "appartement" ? voordeur : null;
    const n = w < 7 ? 2 : w < 9.5 ? 3 : 4;
    let kolommen;
    let stap;
    if (deurKolom) {
      const links = deurKolom.van - 0.3, rechts = w - (deurKolom.tot + 0.3);
      const [s0, s1] = rechts >= links ? [deurKolom.tot + 0.3, w] : [0, deurKolom.van - 0.3];
      stap = (s1 - s0) / (n - 1);
      kolommen = Array.from({ length: n - 1 }, (_, i) => s0 + stap * (i + 0.5));
    } else {
      stap = w / n;
      kolommen = Array.from({ length: n }, (_, i) => stap * (i + 0.5));
    }
    const bw = Math.min(1.3, stap * 0.58);
    const ramen = kolommen.map((cx, i) => raamZ(cx - bw / 2, cx + bw / 2, yb + 0.75, yb + 2.3, `z${i}`));
    if (deurKolom && v > 0) {
      const dc = (deurKolom.van + deurKolom.tot) / 2, dw = Math.min(bw, deurKolom.tot - deurKolom.van + 0.12);
      ramen.push(raamZ(dc - dw / 2, dc + dw / 2, yb + 0.75, yb + 2.3, "zd"));
    }
    const deur = v === 0 ? deurKolom : null;
    if (!deur) return ramen;
    return [
      ...ramen,
      /* @__PURE__ */ jsxs("g", { children: [
        /* @__PURE__ */ jsx(Poly, { v: [[deur.van - 0.06, yb, zf], [deur.tot + 0.06, yb, zf], [deur.tot + 0.06, yb + 2.3, zf], [deur.van - 0.06, yb + 2.3, zf]], fill: KADER, stroke: "#00000022", sw: 0.4 }),
        /* @__PURE__ */ jsx(Poly, { v: [[deur.van + 0.04, yb, zf + 5e-3], [deur.tot - 0.04, yb, zf + 5e-3], [deur.tot - 0.04, yb + 2.2, zf + 5e-3], [deur.van + 0.04, yb + 2.2, zf + 5e-3]], fill: "#3b2a22", stroke: "none" }),
        /* @__PURE__ */ jsx(Poly, { v: [[deur.van + 0.2, yb + 1.3, zf + 0.01], [deur.tot - 0.2, yb + 1.3, zf + 0.01], [deur.tot - 0.2, yb + 2, zf + 0.01], [deur.van + 0.2, yb + 2, zf + 0.01]], fill: GLAS, stroke: "none" }),
        /* @__PURE__ */ jsx(Blok, { x0: deur.van - 0.15, x1: deur.tot + 0.15, y0: yb - SLAB, y1: yb - SLAB + 0.16, z0: l + T, z1: l + T + 0.4, c: ARDUIN })
      ] }, "deur")
    ];
  };
  const ramenX = (yb) => {
    if (buren === 2) return null;
    const n = l > 10.5 ? 2 : 1;
    return Array.from({ length: n }, (_, i) => {
      const cz = l * (i + 1) / (n + 1);
      return raamX(cz - 0.45, cz + 0.45, yb + 0.9, yb + 2.3, `x${i}`);
    });
  };
  const geslotenLaag = (v) => {
    const yb = v * FH;
    return /* @__PURE__ */ jsxs("g", { children: [
      /* @__PURE__ */ jsx(Blok, { x0: -T, x1: w + T, y0: yb, y1: yb + SLAB, z0: -T, z1: l + T, c: vloerband(v) }),
      /* @__PURE__ */ jsx(Blok, { x0: -T, x1: w + T, y0: yb + SLAB, y1: yb + FH, z0: -T, z1: l + T, c: gevel }),
      ramenZ(yb + SLAB, v),
      ramenX(yb + SLAB)
    ] }, `dicht-${v}`);
  };
  const actieveLaag = (v) => {
    const yb = v * FH;
    const yf = yb + SLAB;
    const laagKamers = kamers.filter((k) => k.verdieping === v);
    const items = [];
    const wandH = HC + (H - HC) * (1 - o);
    const laagOpeningen = openingen.filter((o2) => o2.verdieping === v);
    const laagTrappen = trappen.filter((t) => t.verdieping === v);
    const wand = (as, vast, a0, a1, buiten, id) => {
      const hoogteVol = buiten ? HC : wandH;
      const dikte = buiten ? T : TI;
      const kleur = buiten ? { top: SNEDE, px: gevel.px, pz: gevel.pz, stroke: "none" } : { top: SNEDE, px: materiaal.muur, pz: materiaal.muur, stroke: "none" };
      const gaten = laagOpeningen.filter((o2) => o2.as === as && Math.abs(o2.vast - vast) < 1e-6 && o2.tot > a0 && o2.van < a1).sort((a, b) => a.van - b.van);
      const vast_ = [];
      let c = a0;
      for (const g of gaten) {
        if (g.van > c) vast_.push([c, g.van]);
        c = Math.max(c, g.tot);
      }
      if (c < a1) vast_.push([c, a1]);
      const laagTrap = laagTrappen.find((t) => !buiten && as === "x" && Math.abs(vast - (t.z + t.l + 0.05)) < 0.12);
      if (laagTrap) {
        const knip = [laagTrap.x, laagTrap.x + laagTrap.w];
        for (let i = vast_.length - 1; i >= 0; i--) {
          const [b0, b1] = vast_[i];
          const delen = [b0, ...knip.filter((k) => k > b0 + 0.02 && k < b1 - 0.02), b1];
          vast_.splice(i, 1, ...delen.slice(1).map((e, j) => [delen[j], e]));
        }
      }
      vast_.forEach(([b0, b1], j) => {
        const len = b1 - b0;
        if (len < 0.02) return;
        const borst = laagTrap && b0 >= laagTrap.x - 0.02 && b1 <= laagTrap.x + laagTrap.w + 0.02;
        const hoogte = borst ? 0.2 : hoogteVol;
        if (borst) {
          const n = Math.max(2, Math.round(len / 0.45));
          for (let i = 0; i <= n; i++) {
            const x = Math.min(b0 + len * i / n, b1 - 0.04);
            items.push({ key: `${id}-spijl-${j}-${i}`, diepte: x + vast + 0.06, node: /* @__PURE__ */ jsx(Blok, { x0: x, x1: x + 0.04, y0: yf, y1: yf + 0.9, z0: vast - 0.02, z1: vast + 0.02, c: LEUNING }) });
          }
          items.push({ key: `${id}-leuning-${j}`, diepte: b1 + vast + 0.07, node: /* @__PURE__ */ jsx(Blok, { x0: b0, x1: b1, y0: yf + 0.88, y1: yf + 0.94, z0: vast - 0.03, z1: vast + 0.03, c: LEUNING }) });
        }
        const stukken = Math.max(1, Math.ceil(len / SEG));
        for (let i = 0; i < stukken; i++) {
          const s0 = b0 + len * i / stukken;
          const s1 = b0 + len * (i + 1) / stukken;
          const mid = (s0 + s1) / 2;
          const node = as === "x" ? /* @__PURE__ */ jsx(Blok, { x0: s0, x1: s1, y0: yf, y1: yf + hoogte, z0: buiten ? vast : vast - dikte / 2, z1: buiten ? vast + dikte : vast + dikte / 2, c: kleur }) : /* @__PURE__ */ jsx(Blok, { x0: buiten ? vast : vast - dikte / 2, x1: buiten ? vast + dikte : vast + dikte / 2, y0: yf, y1: yf + hoogte, z0: s0, z1: s1, c: kleur });
          items.push({ key: `${id}-${j}-${i}`, diepte: mid + vast + 0.05, node });
        }
      });
      gaten.filter((g) => g.soort === "deur").forEach((g, i) => {
        const blad = Math.min(0.85, g.tot - g.van);
        const hb = Math.min(2.05, hoogteVol);
        const node = as === "x" ? /* @__PURE__ */ jsx(Blok, { x0: g.van, x1: g.van + 0.05, y0: yf, y1: yf + hb, z0: g.kant > 0 ? vast : vast - blad, z1: g.kant > 0 ? vast + blad : vast, c: DEURBLAD }) : /* @__PURE__ */ jsx(Blok, { x0: g.kant > 0 ? vast : vast - blad, x1: g.kant > 0 ? vast + blad : vast, y0: yf, y1: yf + hb, z0: g.van, z1: g.van + 0.05, c: DEURBLAD });
        items.push({ key: `${id}-blad-${i}`, diepte: g.van + vast + g.kant * blad * 0.5 + 0.06, node });
      });
    };
    laagKamers.forEach((k) => {
      const front = k.z + k.l, rechts = k.x + k.w;
      wand("x", front, k.x, rechts, front >= l - 1e-6, `${k.id}-f`);
      wand("z", rechts, k.z, front, rechts >= w - 1e-6, `${k.id}-r`);
    });
    trappen.filter((t) => t.verdieping === v).forEach((t, ti) => {
      if (!t.op) {
        const treden2 = 13;
        const aan2 = t.w / treden2;
        const op2 = FH / treden2;
        const gat = [[t.x, yf + 0.01, t.z], [t.x + t.w, yf + 0.01, t.z], [t.x + t.w, yf + 0.01, t.z + t.l], [t.x, yf + 0.01, t.z + t.l]];
        const clip = `${uid}-gat-${v}-${ti}`;
        const spijlen = Math.max(3, Math.round(t.w / 0.5));
        items.push({
          key: `trapgat-${ti}`,
          diepte: t.x + t.z + 0.01,
          node: /* @__PURE__ */ jsxs("g", { children: [
            /* @__PURE__ */ jsx("clipPath", { id: clip, children: /* @__PURE__ */ jsx("polygon", { points: pts(gat) }) }),
            /* @__PURE__ */ jsx(Poly, { v: gat, fill: "#2a2321", stroke: "none" }),
            /* @__PURE__ */ jsx("g", { clipPath: `url(#${clip})`, children: Array.from({ length: treden2 }, (_, i) => {
              const top = yf - FH + op2 * (i + 1);
              const x0 = t.x + aan2 * i;
              return /* @__PURE__ */ jsx(Blok, { x0, x1: t.x + t.w, y0: top - op2, y1: top, z0: t.z, z1: t.z + t.l, c: TREDE }, i);
            }) }),
            /* @__PURE__ */ jsx(Blok, { x0: t.x, x1: t.x + t.w, y0: yf + 0.86, y1: yf + 0.92, z0: t.z + t.l - 0.05, z1: t.z + t.l, c: LEUNING }),
            Array.from({ length: spijlen + 1 }, (_, i) => {
              const x = t.x + t.w * i / spijlen;
              return /* @__PURE__ */ jsx(Blok, { x0: Math.min(x, t.x + t.w - 0.04), x1: Math.min(x + 0.04, t.x + t.w), y0: yf, y1: yf + 0.86, z0: t.z + t.l - 0.04, z1: t.z + t.l, c: LEUNING }, `s${i}`);
            }),
            /* @__PURE__ */ jsx(Blok, { x0: t.x, x1: t.x + 0.05, y0: yf, y1: yf + 0.92, z0: t.z, z1: t.z + t.l, c: LEUNING })
          ] })
        });
        return;
      }
      const treden = 13;
      const aan = t.w / treden;
      const op = FH / treden;
      for (let i = 0; i < treden; i++) {
        const top = op * (i + 1);
        const x0 = t.x + aan * i;
        if (top <= Math.min(HC, wandH) + 0.01) {
          items.push({ key: `trede-${ti}-${i}`, diepte: x0 + t.z + 0.02, node: /* @__PURE__ */ jsx(Blok, { x0, x1: t.x + t.w, y0: yf + top - op, y1: yf + top, z0: t.z, z1: t.z + t.l, c: TREDE }) });
        } else {
          items.push({ key: `trede-${ti}-${i}`, diepte: x0 + t.z, node: /* @__PURE__ */ jsx("polyline", { points: pts([[x0, yf + 5e-3, t.z], [x0, yf + 5e-3, t.z + t.l]]), stroke: "#00000040", strokeWidth: 0.6, fill: "none" }) });
        }
      }
    });
    plaatsingen.filter((p) => laagKamers.some((k) => k.id === p.kamer)).forEach((p, i) => {
      const k = laagKamers.find((kk) => kk.id === p.kamer);
      const x = k.x + p.x, z = k.z + p.z;
      items.push({
        key: `t-${p.k}-${i}`,
        diepte: x + z,
        node: /* @__PURE__ */ jsx(Toestel, { k: p.k, x, y: yf, z, n: p.n + i, werkend: werkend && !reduced, uid })
      });
    });
    items.sort((a, b) => a.diepte - b.diepte);
    const vochtStijl = {
      ["--v"]: String(materiaal.vocht * 0.7),
      animationDuration: `${cyclus}s`
    };
    const droogKlasse = werkend && !reduced ? "ds-vocht ds-droogt" : "ds-vocht";
    return /* @__PURE__ */ jsxs("g", { children: [
      /* @__PURE__ */ jsx(Blok, { x0: -T, x1: w + T, y0: yb, y1: yf, z0: -T, z1: l + T, c: vloerband(v) }),
      /* @__PURE__ */ jsx(Blok, { x0: -T, x1: w, y0: yf, y1: yf + H, z0: -T, z1: 0, c: { top: SNEDE, px: gevel.px, pz: materiaal.muur, stroke: "#00000033" } }),
      /* @__PURE__ */ jsx(Blok, { x0: -T, x1: 0, y0: yf, y1: yf + H, z0: 0, z1: l, c: { top: SNEDE, px: materiaal.muur, pz: gevel.pz, stroke: "#00000033" } }),
      materiaal.muurNat && /* @__PURE__ */ jsxs("g", { className: droogKlasse, style: vochtStijl, children: [
        /* @__PURE__ */ jsx(Poly, { v: [[0, yf, 1e-3], [w, yf, 1e-3], [w, yf + H, 1e-3], [0, yf + H, 1e-3]], fill: `url(#${uid}-natmuur)`, stroke: "none" }),
        /* @__PURE__ */ jsx(Poly, { v: [[1e-3, yf, 0], [1e-3, yf + H, 0], [1e-3, yf + H, l], [1e-3, yf, l]], fill: `url(#${uid}-natmuur)`, stroke: "none" })
      ] }),
      laagKamers.map((k) => /* @__PURE__ */ jsxs("g", { children: [
        /* @__PURE__ */ jsx(Poly, { v: [[k.x, yf, k.z], [k.x + k.w, yf, k.z], [k.x + k.w, yf, k.z + k.l], [k.x, yf, k.z + k.l]], fill: materiaal.vloer, stroke: "#00000018", opacity: k.soort === "circulatie" ? 0.8 : 1 }),
        materiaal.parket && Array.from({ length: Math.floor(k.w / 0.6) }, (_, i) => /* @__PURE__ */ jsx("polyline", { points: pts([[k.x + (i + 1) * 0.6, yf, k.z], [k.x + (i + 1) * 0.6, yf, k.z + k.l]]), stroke: "#00000014", strokeWidth: 0.5, fill: "none" }, i))
      ] }, `v-${k.id}`)),
      materiaal.vloerNat && /* @__PURE__ */ jsx("g", { className: droogKlasse, style: vochtStijl, children: laagKamers.map((k) => /* @__PURE__ */ jsx(Poly, { v: [[k.x, yf + 2e-3, k.z], [k.x + k.w, yf + 2e-3, k.z], [k.x + k.w, yf + 2e-3, k.z + k.l], [k.x, yf + 2e-3, k.z + k.l]], fill: `url(#${uid}-natvloer)`, stroke: "none" }, k.id)) }),
      werkend && !reduced && /* @__PURE__ */ jsx(Luchtstroom, { kamers: laagKamers, plaatsingen, yf }),
      werkend && !reduced && /* @__PURE__ */ jsx(Druppels, { kamers: laagKamers, plaatsingen, yf, vocht: materiaal.vocht }),
      items.map((it) => /* @__PURE__ */ jsx("g", { children: it.node }, it.key)),
      !mini && o > 0.01 && laagKamers.map((k) => {
        const [tx, ty] = P([k.x + k.w * 0.5, yf + HC + 0.15, k.z + k.l * 0.5]);
        return /* @__PURE__ */ jsx("text", { x: tx, y: ty, className: `ds-kamerlabel${k.soort === "circulatie" ? " ds-kamerlabel--gang" : ""}`, textAnchor: "middle", style: { opacity: o }, children: kamerNaam(k.naam, taal).toUpperCase() }, `l-${k.id}`);
      }),
      /* @__PURE__ */ jsxs("g", { style: { opacity: 1 - o }, pointerEvents: "none", children: [
        /* @__PURE__ */ jsx(Blok, { x0: 0, x1: w + T, y0: yf + HC, y1: yf + H, z0: l, z1: l + T, c: gevel }),
        /* @__PURE__ */ jsx(Blok, { x0: w, x1: w + T, y0: yf + HC, y1: yf + H, z0: -T, z1: l, c: gevel }),
        ramenZ(yf, v),
        ramenX(yf)
      ] })
    ] }, `open-${v}`);
  };
  const dakNode = () => {
    const y = daktop, ov = 0.35;
    if (dak === "plat") {
      return /* @__PURE__ */ jsxs("g", { children: [
        /* @__PURE__ */ jsx(Blok, { x0: -T - 0.1, x1: w + T + 0.1, y0: y, y1: y + 0.42, z0: -T - 0.1, z1: l + T + 0.1, c: { top: "#77716c", px: "#8d9499", pz: "#a3a9ad", stroke: "#00000033" } }),
        /* @__PURE__ */ jsx(Poly, { v: [[0.2, y + 0.43, 0.2], [w - 0.2, y + 0.43, 0.2], [w - 0.2, y + 0.43, l - 0.2], [0.2, y + 0.43, l - 0.2]], fill: `url(#${uid}-grind)`, stroke: "none" })
      ] });
    }
    if (dak === "lessenaar") {
      const hb = nok, hf = 0.45;
      return /* @__PURE__ */ jsxs("g", { children: [
        /* @__PURE__ */ jsx(Poly, { v: [[w + T, y, -T], [w + T, y + hb, -T], [w + T, y + hf, l + T], [w + T, y, l + T]], fill: gevel.px }),
        /* @__PURE__ */ jsx(Poly, { v: [[-T - ov, y + hb + 0.05, -T - ov], [w + T + ov, y + hb + 0.05, -T - ov], [w + T + ov, y + hf - 0.05, l + T + ov], [-T - ov, y + hf - 0.05, l + T + ov]], fill: DAK.licht, stroke: DAK.lijn }),
        /* @__PURE__ */ jsx(Poly, { v: [[-T - ov, y + hf - 0.05, l + T + ov], [w + T + ov, y + hf - 0.05, l + T + ov], [w + T + ov, y + hf - 0.2, l + T + ov], [-T - ov, y + hf - 0.2, l + T + ov]], fill: DAK.zink })
      ] });
    }
    const mz = l / 2;
    const pannen = 6;
    return /* @__PURE__ */ jsxs("g", { children: [
      /* @__PURE__ */ jsx(Poly, { v: [[-T - ov, y - 0.05, -T - ov], [w + T + ov, y - 0.05, -T - ov], [w + T + ov, y + nok, mz], [-T - ov, y + nok, mz]], fill: DAK.vlak, stroke: DAK.lijn }),
      !mini && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Blok, { x0: w * 0.68, x1: w * 0.68 + 0.6, y0: y + nok * 0.55, y1: y + nok + 0.75, z0: mz - 1.3, z1: mz - 0.7, c: { top: "#7a3a28", px: gevel.px, pz: gevel.pz, stroke: "#00000033" } }),
        /* @__PURE__ */ jsx(Blok, { x0: w * 0.68 - 0.06, x1: w * 0.68 + 0.66, y0: y + nok + 0.75, y1: y + nok + 0.85, z0: mz - 1.36, z1: mz - 0.64, c: ARDUIN })
      ] }),
      /* @__PURE__ */ jsx(Poly, { v: [[w + T, y, -T], [w + T, y + nok * ((mz + T) / (mz + T + ov)), mz], [w + T, y, l + T]], fill: gevel.px }),
      /* @__PURE__ */ jsx(Poly, { v: [[-T - ov, y + nok, mz], [w + T + ov, y + nok, mz], [w + T + ov, y - 0.05, l + T + ov], [-T - ov, y - 0.05, l + T + ov]], fill: DAK.licht, stroke: DAK.lijn }),
      Array.from({ length: pannen }, (_, i) => {
        const f = (i + 1) / (pannen + 1);
        const zz = mz + (l + T + ov - mz) * f, yy = y + nok - (nok + 0.05) * f;
        return /* @__PURE__ */ jsx("polyline", { points: pts([[-T - ov, yy, zz], [w + T + ov, yy, zz]]), stroke: DAK.lijn, strokeWidth: 0.6, fill: "none", opacity: 0.6 }, i);
      }),
      /* @__PURE__ */ jsx("polyline", { points: pts([[-T - ov, y + nok, mz], [w + T + ov, y + nok, mz]]), stroke: DAK.lijn, strokeWidth: 2, fill: "none" }),
      /* @__PURE__ */ jsx("polyline", { points: pts([[-T - ov, y - 0.12, l + T + ov], [w + T + ov, y - 0.12, l + T + ov]]), stroke: DAK.zink, strokeWidth: 2.4, fill: "none" })
    ] });
  };
  const gebouwOnder = woning === "appartement" ? /* @__PURE__ */ jsxs("g", { className: "ds-buur", children: [
    /* @__PURE__ */ jsx(Poly, { v: [[-T, -2 * FH, l + T], [w + T, -2 * FH, l + T], [w + T, 0, l + T], [-T, 0, l + T]], fill: "#00000005", stroke: "#8a827888" }),
    /* @__PURE__ */ jsx(Poly, { v: [[w + T, -2 * FH, -T], [w + T, 0, -T], [w + T, 0, l + T], [w + T, -2 * FH, l + T]], fill: "#00000004", stroke: "#8a827888" })
  ] }) : null;
  const [g0x, g0y] = P([w / 2, 0, l / 2]);
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className: `ds-iso${mini ? " ds-iso--mini" : ""}${className ? ` ${className}` : ""}`,
      viewBox,
      role: "img",
      "aria-label": taal === "fr" ? `Dessin isométrique : ${woningTekst(woning, taal).label.toLowerCase()}, ${lagen} niveau${lagen === 1 ? "" : "x"}` : taal === "en" ? `Isometric drawing: ${woningTekst(woning, taal).label.toLowerCase()}, ${lagen} storey${lagen === 1 ? "" : "s"}` : `Isometrische tekening van een ${WONING[woning].label.toLowerCase()} met ${lagen} bouwla${lagen === 1 ? "ag" : "gen"}`,
      preserveAspectRatio: "xMidYMid meet",
      children: [
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsxs("linearGradient", { id: `${uid}-natmuur`, x1: "0", y1: "1", x2: "0", y2: "0", children: [
            /* @__PURE__ */ jsx("stop", { offset: "0", stopColor: "#3c4042", stopOpacity: "0.3" }),
            /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#3c4042", stopOpacity: "0.3" })
          ] }),
          /* @__PURE__ */ jsxs("radialGradient", { id: `${uid}-natvloer`, cx: "50%", cy: "55%", r: "65%", children: [
            /* @__PURE__ */ jsx("stop", { offset: "0", stopColor: "#3c4042", stopOpacity: "0.34" }),
            /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#3c4042", stopOpacity: "0.34" })
          ] }),
          /* @__PURE__ */ jsxs("linearGradient", { id: `${uid}-gloed`, x1: "0", y1: "1", x2: "0", y2: "0", children: [
            /* @__PURE__ */ jsx("stop", { offset: "0", stopColor: "#ff7a1a" }),
            /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#c8102e" })
          ] }),
          [["bz", 30, "#b05a3d", "#9b4a31"], ["bx", -30, "#94452e", "#833c27"]].map(([id, hoek, steen, donker]) => /* @__PURE__ */ jsxs("pattern", { id: `${uid}-${id}`, width: "6.4", height: "4.4", patternUnits: "userSpaceOnUse", patternTransform: `skewY(${hoek})`, children: [
            /* @__PURE__ */ jsx("rect", { width: "6.4", height: "4.4", fill: steen }),
            /* @__PURE__ */ jsx("rect", { x: "3.3", y: "0.15", width: "2.9", height: "1.9", fill: donker, opacity: "0.55" }),
            /* @__PURE__ */ jsx("rect", { x: "0.15", y: "2.35", width: "2.9", height: "1.9", fill: donker, opacity: "0.35" }),
            /* @__PURE__ */ jsx("path", { d: "M0 0.05H6.4M0 2.25H6.4M0.05 0V2.2M3.25 2.2V4.4", stroke: "#e7d8c6", strokeOpacity: "0.6", strokeWidth: "0.32", fill: "none" })
          ] }, id)),
          /* @__PURE__ */ jsxs("pattern", { id: `${uid}-grind`, width: "3", height: "3", patternUnits: "userSpaceOnUse", children: [
            /* @__PURE__ */ jsx("rect", { width: "3", height: "3", fill: "#8a847e" }),
            /* @__PURE__ */ jsx("circle", { cx: "1", cy: "1", r: "0.5", fill: "#a29b94" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("ellipse", { cx: g0x + 8, cy: g0y + 10, rx: (w + l) * S * 0.62, ry: (w + l) * S * 0.2, fill: "#5a3a2a", opacity: mini ? 0.06 : 0.08 }),
        /* @__PURE__ */ jsxs("g", { style: { opacity: 1 - o }, children: [
          buren >= 1 && buurBlok(-6, -T),
          buren === 2 && buurBlok(w + T, w + T + 6),
          gebouwOnder
        ] }),
        Array.from({ length: lagen }, (_, v) => {
          if (v < act) return geslotenLaag(v);
          if (v === act) return kamers.some((k) => k.verdieping === v) ? actieveLaag(v) : geslotenLaag(v);
          return /* @__PURE__ */ jsx("g", { style: { transform: `translate(0px, ${-lift}px)`, opacity: 1 - o }, pointerEvents: "none", children: geslotenLaag(v) }, `boven-${v}`);
        }),
        /* @__PURE__ */ jsx("g", { style: { transform: `translate(0px, ${-lift * 1.3}px)`, opacity: 1 - o }, pointerEvents: "none", children: dakNode() })
      ]
    }
  );
}
function Luchtstroom({ kamers, plaatsingen, yf }) {
  return /* @__PURE__ */ jsx("g", { className: "ds-lucht", pointerEvents: "none", children: plaatsingen.filter((p) => p.k === "axiaal").map((p, i) => {
    const k = kamers.find((kk) => kk.id === p.kamer);
    if (!k) return null;
    const x = k.x + p.x, z = k.z + p.z;
    const rest = Math.max(1.2, k.z + k.l - z - 0.3);
    return [-0.25, 0, 0.25].map((dx, j) => {
      const a = P([x + dx, yf + 0.35, z + 0.25]);
      const b = P([x + dx * 3, yf + 0.25, z + rest * 0.5]);
      const c = P([x + dx * 5, yf + 0.1, z + rest]);
      return /* @__PURE__ */ jsx(
        "path",
        {
          d: `M${a[0].toFixed(1)} ${a[1].toFixed(1)} Q${b[0].toFixed(1)} ${b[1].toFixed(1)} ${c[0].toFixed(1)} ${c[1].toFixed(1)}`,
          style: { animationDelay: `${-j * 0.3}s` }
        },
        `${i}-${j}`
      );
    });
  }) });
}
function Druppels({ kamers, plaatsingen, yf, vocht }) {
  if (vocht <= 0) return null;
  const drogers = plaatsingen.filter((p) => p.k === "small" || p.k === "medium");
  return /* @__PURE__ */ jsx("g", { className: "ds-druppels", pointerEvents: "none", children: drogers.flatMap((p, i) => {
    const k = kamers.find((kk) => kk.id === p.kamer);
    if (!k) return [];
    const doel = P([k.x + p.x, yf + 0.8, k.z + p.z]);
    const n = Math.max(3, Math.round(6 * vocht));
    return Array.from({ length: n }, (_, j) => {
      const f = (j * 0.618 + i * 0.31) % 1;
      const g = (j * 0.382 + i * 0.17) % 1;
      const start = j % 2 === 0 ? [k.x + 0.3 + f * (k.w - 0.6), yf + 0.05, k.z + 0.3 + g * (k.l - 0.6)] : [k.x + 0.2 + f * (k.w - 0.4), yf + 0.5 + g * 1.6, k.z + 0.05];
      const s = P(start);
      return /* @__PURE__ */ jsx(
        "circle",
        {
          cx: s[0],
          cy: s[1],
          r: 1.7,
          style: {
            ["--dx"]: `${(doel[0] - s[0]).toFixed(1)}px`,
            ["--dy"]: `${(doel[1] - s[1]).toFixed(1)}px`,
            animationDelay: `${-(j * 0.47 + i * 0.29) % 2.8}s`
          }
        },
        `${i}-${j}`
      );
    });
  }) });
}
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/simulator/3d/bestanden.ts");
const TEXTUUR = {
  baksteen: "/simulator/3d/baksteen.webp",
  arduin: "/simulator/3d/arduin.webp",
  pannen: "/simulator/3d/dakpannen.webp",
  pleister: "/simulator/3d/pleister.webp",
  chape: "/simulator/3d/chape.webp",
  parket: "/simulator/3d/parket.webp",
  grind: "/simulator/3d/grind.webp",
  // Bouwfasen (stap 3): wat er op muur en vloer zit, van ruwbouw tot afgewerkt.
  pleisternat: "/simulator/3d/pleisternat.webp",
  verf: "/simulator/3d/verf.webp",
  vloerplaat: "/simulator/3d/vloerplaat.webp",
  tegelvloer: "/simulator/3d/tegelvloer.webp"
};
function budget3D() {
  const n = navigator;
  const c = n.connection;
  if (c?.saveData || c?.effectiveType === "2g" || c?.effectiveType === "slow-2g") return "geen";
  if (n.deviceMemory !== void 0 && n.deviceMemory <= 2) return "geen";
  return c?.effectiveType === "3g" ? "later" : "meteen";
}
const gevraagd = /* @__PURE__ */ new Set();
function voorlaad(urls, als = "fetch") {
  for (const href of urls) {
    if (gevraagd.has(href)) continue;
    gevraagd.add(href);
    const l = document.createElement("link");
    l.rel = "preload";
    l.as = als;
    l.href = href;
    l.crossOrigin = "anonymous";
    l.setAttribute("fetchpriority", "low");
    document.head.appendChild(l);
  }
}
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/simulator/IsoHouseAuto.tsx");
const laad3D = () => (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/simulator/3d/IsoHouse3D.tsx"), import("./IsoHouse3D-DsRlsn9l.js"));
const IsoHouse3D = lazy(laad3D);
function webglMogelijk() {
  try {
    if (new URLSearchParams(window.location.search).get("weergave") === "svg") return false;
    const c = document.createElement("canvas");
    const gl = c.getContext("webgl2") || c.getContext("webgl");
    gl?.getExtension("WEBGL_lose_context")?.loseContext();
    return !!gl;
  } catch {
    return false;
  }
}
function opRustigMoment(fn) {
  const w = window;
  if (w.requestIdleCallback) {
    const id = w.requestIdleCallback(fn, { timeout: 2500 });
    return () => w.cancelIdleCallback?.(id);
  }
  const t = window.setTimeout(fn, 1200);
  return () => window.clearTimeout(t);
}
class Vangnet extends Component {
  state = { fout: false };
  static getDerivedStateFromError() {
    return { fout: true };
  }
  componentDidCatch(err) {
    console.warn("[droogsimulator] 3D-weergave uitgeschakeld:", err);
    this.props.onFout();
  }
  render() {
    return this.state.fout ? null : this.props.children;
  }
}
function IsoHouseAuto(props) {
  const [kan3d, setKan3d] = useState(false);
  const [klaar, setKlaar] = useState(false);
  const [fout, setFout] = useState(false);
  useEffect(() => {
    if (props.mini || !webglMogelijk()) return;
    const budget = budget3D();
    if (budget === "geen") return;
    const haal = () => {
      voorlaad(Object.values(TEXTUUR), "image");
      return laad3D();
    };
    let chunk = budget === "meteen" ? haal() : null;
    let weg = () => {
    };
    const start = () => {
      chunk ??= haal();
      const c = chunk;
      weg = opRustigMoment(() => {
        c.then(() => setKan3d(true), () => setFout(true));
      });
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => {
      window.removeEventListener("load", start);
      weg();
    };
  }, [props.mini]);
  const toon3d = kan3d && !fout;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    (!toon3d || !klaar) && /* @__PURE__ */ jsx(IsoHouse, { ...props }),
    toon3d && /* @__PURE__ */ jsx(Vangnet, { onFout: () => setFout(true), children: /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(
      IsoHouse3D,
      {
        ...props,
        className: `${props.className ?? ""}${klaar ? "" : " ds-iso3d--laden"}`.trim() || void 0,
        onKlaar: () => setKlaar(true),
        onFout: () => setFout(true)
      }
    ) }) })
  ] });
}
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/simulator/materiaal.ts");
const FASE_BEELD = {
  // bare brick, rain on the slab, openings still open
  ruwbouw: { muurTegel: "baksteen", muur: "#e6d2c6", vloerTegel: "vloerplaat", vloer: "#b3aea6", glas: false, inrichting: false },
  ramen: { muurTegel: "baksteen", muur: "#f3e2d8", vloerTegel: "vloerplaat", vloer: "#c9c4bc", glas: true, inrichting: false },
  // fresh screed: the darkest floor
  chape: { muurTegel: "baksteen", muur: "#f3e2d8", vloerTegel: "chape", vloer: "#8d877e", glas: true, inrichting: false },
  // wet, blotchy plaster on a screed that has had time
  gepleisterd: { muurTegel: "pleisternat", muur: "#d9cdc1", vloerTegel: "chape", vloer: "#b4ada2", glas: true, inrichting: false },
  // walls stay as the plasterer left them: they are only finished at "afgewerkt"
  tegels: { muurTegel: "pleisternat", muur: "#d9cdc1", vloerTegel: "tegelvloer", vloer: "#ffffff", glas: true, inrichting: false },
  afgewerkt: { muurTegel: "verf", muur: "#f2eee7", vloerTegel: "parket", vloer: "#ffffff", glas: true, inrichting: true }
};
function materiaalVoor(wat, fase, vochtStart) {
  const muurNat = wat === "pleister" || wat === "beide" || wat === "waterschade";
  const vloerNat = wat === "chape" || wat === "beide" || wat === "waterschade";
  const vocht = wat ? vochtStart : 0;
  if (fase) {
    const b = FASE_BEELD[fase];
    return { ...b, vocht, muurNat, vloerNat, parket: b.vloerTegel === "parket", meubels: fase === "afgewerkt" };
  }
  return {
    muur: "#ddd6cb",
    vloer: "#c9c2b6",
    vocht,
    muurNat,
    vloerNat,
    parket: false,
    meubels: false
  };
}
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/simulator/3d/modellen.ts");
const TOESTEL_MODEL = {
  small: "/simulator/3d/droger-small.glb",
  medium: "/simulator/3d/droger-medium.glb",
  axiaal: "/simulator/3d/ventilator.glb",
  kachel: "/simulator/3d/kachel.glb"
};
const al = /* @__PURE__ */ new Set();
function voorlaadToestellen(toestellen) {
  if (!document.querySelector(".ds-stage canvas")) return;
  const c = navigator.connection;
  if (c?.saveData || c?.effectiveType === "2g" || c?.effectiveType === "slow-2g") return;
  for (const k of toestellen) {
    const url = TOESTEL_MODEL[k];
    if (al.has(url)) continue;
    al.add(url);
    fetch(url, { priority: "low" }).catch(() => al.delete(url));
  }
}
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/simulator/Bouwfilm.tsx");
const COPY$1 = {
  nl: { bouwfase: "Bouwfase", starten: "Starten", meten: "Meten", letOp: "Let op", veeg: "← Veeg door de bouw →", bekijk: "Bekijk de bouw", fase: "Fase", van: "van", uwWerf: " · uw werf", vocht: "Vocht" },
  fr: { bouwfase: "Phase du chantier", starten: "Démarrer", meten: "Mesurer", letOp: "Attention", veeg: "← Faites défiler le chantier →", bekijk: "Voir le chantier", fase: "Phase", van: "sur", uwWerf: " · votre chantier", vocht: "Humidité" },
  en: { bouwfase: "Build stage", starten: "Start", meten: "Measure", letOp: "Please note", veeg: "← Swipe through the build →", bekijk: "Watch the build", fase: "Stage", van: "of", uwWerf: " · your site", vocht: "Moisture" }
};
const LAATSTE = FASE_ORDER.length - 1;
const plek = (f) => FASE_ORDER.indexOf(f);
const PICTO = {
  ruwbouw: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("rect", { x: "3", y: "5", width: "18", height: "14", rx: "1.5" }),
    /* @__PURE__ */ jsx("path", { d: "M3 9.7h18M3 14.3h18M9 5v4.7M15 5v4.7M6 9.7v4.6M12 9.7v4.6M18 9.7v4.6M9 14.3V19M15 14.3V19" })
  ] }),
  ramen: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("rect", { x: "5", y: "3.5", width: "14", height: "15", rx: "1.2" }),
    /* @__PURE__ */ jsx("path", { d: "M12 3.5v15M5 11h14M3.5 20.5h17" })
  ] }),
  chape: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M3 16.5h18v3.5H3z", fill: "currentColor", fillOpacity: ".28" }),
    /* @__PURE__ */ jsx("path", { d: "M8 7.2c0 0-2 2.3-2 3.6a2 2 0 0 0 4 0c0-1.3-2-3.6-2-3.6zM16 4.2c0 0-2 2.3-2 3.6a2 2 0 0 0 4 0c0-1.3-2-3.6-2-3.6z" })
  ] }),
  tegels: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M6 7h12l3.5 12h-19z" }),
    /* @__PURE__ */ jsx("path", { d: "M4.5 12.6h15M12 7v12M8.8 7 7.2 19M15.2 7l1.6 12" })
  ] }),
  gepleisterd: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M3.5 4.5h10M3.5 7.5h6" }),
    /* @__PURE__ */ jsx("rect", { x: "3", y: "15", width: "17", height: "3.6", rx: "1" }),
    /* @__PURE__ */ jsx("path", { d: "M12 15v-3.2" }),
    /* @__PURE__ */ jsx("rect", { x: "8", y: "9", width: "9", height: "2.8", rx: "1.4" })
  ] }),
  afgewerkt: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("path", { d: "M3.5 11 12 4l8.5 7" }),
    /* @__PURE__ */ jsx("path", { d: "M5.5 9.5V20h13V9.5" }),
    /* @__PURE__ */ jsx("path", { d: "m9 14.5 2.2 2.2L15.5 12" })
  ] })
};
function Picto({ fase }) {
  return /* @__PURE__ */ jsx("svg", { className: "ds-fk-ic", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: PICTO[fase] });
}
const Vink$1 = () => /* @__PURE__ */ jsx("svg", { width: "11", height: "11", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M3.5 8.5l3 3 6-7", stroke: "#fff", strokeWidth: "2.8", strokeLinecap: "round", strokeLinejoin: "round" }) });
const Druppel = () => /* @__PURE__ */ jsx("svg", { viewBox: "0 0 12 15", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M6 0C6 0 0 6.6 0 9.6A6 6 0 0 0 12 9.6C12 6.6 6 0 6 0z" }) });
function FaseKnoppen({ fase, onKies, onToon }) {
  const taal = useTaal();
  const t = useCopy(COPY$1);
  return /* @__PURE__ */ jsx("div", { className: `ds-fk-rij${fase ? " gekozen" : " uitnodig"}`, role: "radiogroup", "aria-label": t.bouwfase, onMouseLeave: () => onToon(null), children: FASE_ORDER.map((f, i) => /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      role: "radio",
      "aria-checked": fase === f,
      "aria-label": faseInTaal(f, taal).label,
      className: `ds-fk${fase === f ? " on" : ""}`,
      style: { animationDelay: `${i * 0.12}s` },
      onClick: () => onKies(f),
      onMouseEnter: () => onToon(f),
      onFocus: () => onToon(f),
      onBlur: () => onToon(null),
      children: [
        /* @__PURE__ */ jsx("span", { className: "ds-fk-nr", "aria-hidden": "true", children: i + 1 }),
        /* @__PURE__ */ jsx("span", { className: "ds-fk-vk", "aria-hidden": "true", children: /* @__PURE__ */ jsx(Vink$1, {}) }),
        /* @__PURE__ */ jsx("span", { className: "ds-fk-tegel", children: /* @__PURE__ */ jsx(Picto, { fase: f }) }),
        /* @__PURE__ */ jsx("b", { children: faseInTaal(f, taal).kort })
      ]
    },
    f
  )) });
}
function FaseRegels({ fase }) {
  const F = faseInTaal(fase, useTaal());
  const t = useCopy(COPY$1);
  return /* @__PURE__ */ jsxs("div", { className: "ds-fr", "aria-live": "polite", children: [
    /* @__PURE__ */ jsxs("p", { className: "ds-fr-tekst", children: [
      /* @__PURE__ */ jsxs("b", { children: [
        F.kort,
        "."
      ] }),
      " ",
      F.advies
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "ds-fr-regels", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { children: t.starten }),
        /* @__PURE__ */ jsx("b", { children: F.starten })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { children: t.meten }),
        /* @__PURE__ */ jsx("b", { children: F.meten })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "let", children: [
        /* @__PURE__ */ jsx("span", { children: t.letOp }),
        /* @__PURE__ */ jsx("b", { children: F.letOp })
      ] })
    ] })
  ] });
}
const zonderBeweging = () => typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
function Bouwfilm({ fase, toon, onKies }) {
  const taal = useTaal();
  const t = useCopy(COPY$1);
  const fotos = useRef([]);
  const pin = useRef(null);
  const pos = useRef(fase ? plek(fase) : 0);
  const anim = useRef(0);
  const speelt = useRef(false);
  const [toont, setToont] = useState(Math.round(pos.current));
  const [spelen, setSpelen] = useState(false);
  const [geveegd, setGeveegd] = useState(false);
  const teken = useCallback(() => {
    const t2 = pos.current;
    fotos.current.forEach((img, i) => {
      if (img) img.style.opacity = String(Math.max(0, 1 - Math.abs(t2 - i)));
    });
    const d = Math.round(t2);
    pin.current?.classList.toggle("weg", Math.abs(t2 - d) > 0.15);
    setToont((v) => v === d ? v : d);
  }, []);
  const naar = useCallback(
    (doel, ms = 450, klaar) => {
      cancelAnimationFrame(anim.current);
      const duur = zonderBeweging() ? 0 : ms;
      const van = pos.current;
      const t0 = performance.now();
      const stap = (nu) => {
        const k = duur === 0 ? 1 : Math.min(1, (nu - t0) / duur);
        pos.current = van + (doel - van) * (1 - Math.pow(1 - k, 3));
        teken();
        if (k < 1) anim.current = requestAnimationFrame(stap);
        else klaar?.();
      };
      anim.current = requestAnimationFrame(stap);
    },
    [teken]
  );
  useEffect(() => {
    teken();
    return () => cancelAnimationFrame(anim.current);
  }, [teken]);
  useEffect(() => {
    if (speelt.current) return;
    naar(plek(toon ?? fase ?? FASE_ORDER[0]), toon ? 380 : 450);
  }, [fase, toon, naar]);
  const sleep = useRef(null);
  const neer = (e) => {
    if (e.target.closest("button")) return;
    cancelAnimationFrame(anim.current);
    stopSpelen();
    sleep.current = { x: e.clientX, t: pos.current, bewogen: false };
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const beweeg = (e) => {
    const s = sleep.current;
    if (!s) return;
    const dx = e.clientX - s.x;
    if (Math.abs(dx) > 4) s.bewogen = true;
    pos.current = Math.max(0, Math.min(LAATSTE, s.t - dx / e.currentTarget.clientWidth * 3));
    teken();
  };
  const los = () => {
    const s = sleep.current;
    sleep.current = null;
    if (!s?.bewogen) return;
    setGeveegd(true);
    const d = Math.round(pos.current);
    naar(d, 260);
    onKies(FASE_ORDER[d]);
  };
  const stopSpelen = () => {
    speelt.current = false;
    setSpelen(false);
  };
  const speel = () => {
    speelt.current = true;
    setSpelen(true);
    pos.current = 0;
    teken();
    const volgende = (i) => {
      if (!speelt.current) return;
      if (i > LAATSTE) {
        window.setTimeout(() => speelt.current && naar(fase ? plek(fase) : 0, 900, stopSpelen), 700);
        return;
      }
      naar(i, 850, () => window.setTimeout(() => volgende(i + 1), 450));
    };
    volgende(1);
  };
  const F = faseInTaal(FASE_ORDER[toont], taal);
  const pinKant = F.pin.x > 55 ? " links" : F.pin.x > 28 ? " onder" : "";
  return /* @__PURE__ */ jsxs("div", { className: "ds-bf", onPointerDown: neer, onPointerMove: beweeg, onPointerUp: los, onPointerCancel: los, children: [
    FASE_ORDER.map((f, i) => /* @__PURE__ */ jsx(
      "img",
      {
        ref: (el) => fotos.current[i] = el,
        src: FASE[f].foto,
        alt: i === toont ? faseInTaal(f, taal).label : "",
        draggable: false,
        decoding: "async"
      },
      f
    )),
    /* @__PURE__ */ jsx("span", { ref: pin, className: `ds-bf-pin${pinKant}`, style: { left: `${F.pin.x}%`, top: `${F.pin.y}%` }, "aria-hidden": "true", children: /* @__PURE__ */ jsx("span", { children: F.pin.tekst }) }),
    /* @__PURE__ */ jsx("span", { className: `ds-bf-veeg${geveegd || fase ? " weg" : ""}`, "aria-hidden": "true", children: t.veeg }),
    /* @__PURE__ */ jsxs("button", { type: "button", className: `ds-bf-speel${spelen ? " weg" : ""}`, onClick: speel, children: [
      /* @__PURE__ */ jsx("svg", { viewBox: "0 0 16 16", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M4 2.5v11l9-5.5z", fill: "currentColor" }) }),
      t.bekijk
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "ds-bf-cap", "aria-hidden": "true", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("span", { children: [
          /* @__PURE__ */ jsxs("span", { className: "ds-bf-cap-fase", children: [
            t.fase,
            " ",
            toont + 1,
            " ",
            t.van,
            " ",
            FASE_ORDER.length,
            fase && FASE_ORDER[toont] === fase ? t.uwWerf : ""
          ] }),
          /* @__PURE__ */ jsx("span", { className: "ds-bf-cap-pin", children: F.pin.tekst })
        ] }),
        /* @__PURE__ */ jsx("b", { children: F.kort })
      ] }),
      /* @__PURE__ */ jsxs("span", { className: "ds-bf-meter", children: [
        /* @__PURE__ */ jsx("small", { children: t.vocht }),
        /* @__PURE__ */ jsx("span", { className: "ds-bf-drup", children: [1, 2, 3, 4, 5].map((n) => /* @__PURE__ */ jsx("span", { className: n <= F.druppels ? "vol" : void 0, children: /* @__PURE__ */ jsx(Druppel, {}) }, n)) }),
        /* @__PURE__ */ jsx("b", { children: F.druppelsTekst })
      ] })
    ] })
  ] });
}
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/simulator/film.ts");
const FILM_START = "ds-film-start";
const FILM_WACHT = "ds-film-wacht";
const filmStatus = { wacht: false };
const PLAATSEN = 2.2;
const VAL = 0.6;
const EERSTE = 0.3;
const NAKIJKEN = 0.35;
function aankomst(i, n) {
  return EERSTE + i * Math.min(0.3, (PLAATSEN - VAL - EERSTE) / Math.max(1, n - 1));
}
function plaatsDuur(n, nakijken = true) {
  return n > 0 ? aankomst(n - 1, n) + VAL + (nakijken ? NAKIJKEN : 0.05) : 0.8;
}
function stuit(p) {
  const n = 7.5625, d = 2.75;
  if (p < 1 / d) return n * p * p;
  if (p < 2 / d) return n * (p -= 1.5 / d) * p + 0.75;
  if (p < 2.5 / d) return n * (p -= 2.25 / d) * p + 0.9375;
  return n * (p -= 2.625 / d) * p + 0.984375;
}
const DROOG_DUUR = 6;
const GEEN_PLAN = { modus: "drogen", van: 0, tot: 1, duur: DROOG_DUUR };
function filmTijd(film) {
  if (film.vast) return film.duur;
  if (film.start < 0) return 0;
  return Math.min(film.duur, (performance.now() - film.start) / 1e3);
}
function voortgangNa(plan, sec) {
  if (plan.modus === "plaatsen") {
    const n = plan.toestellen ?? 0;
    if (n === 0) return Math.min(1, Math.max(0, sec / Math.max(0.1, plan.duur - NAKIJKEN)));
    let som = 0;
    for (let i = 0; i < n; i++) som += Math.min(1, Math.max(0, (sec - aankomst(i, n)) / VAL));
    return som / n;
  }
  const k = Math.min(1, Math.max(0, (sec - 0.15) / (plan.duur - 0.15 - (plan.naloop ?? 0))));
  return k;
}
function segmentVoortgang(film) {
  return voortgangNa(film, filmTijd(film));
}
function droogStand(film) {
  if (film.modus === "plaatsen") return film.van;
  return film.van + (film.tot - film.van) * segmentVoortgang(film);
}
function aanVoortgang(film, aankomst2) {
  if (film.modus !== "drogen") return 0;
  return Math.min(1, Math.max(0, (filmTijd(film) - (aankomst2 - EERSTE) * 0.2) / 0.35));
}
function toestelTijd(film) {
  return film.modus === "drogen" ? PLAATSEN + filmTijd(film) : filmTijd(film);
}
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/simulator/fotos.ts");
const BESCHIKBAAR = [
  "woning-rijwoning",
  "woning-halfopen",
  "woning-open",
  "woning-appartement",
  "dak-zadeldak",
  "dak-plat",
  "dak-lessenaar",
  "lagen-1",
  "lagen-2",
  "lagen-3",
  "huis-plat-1",
  "huis-plat-3",
  "huis-lessenaar-1",
  "huis-lessenaar-3"
];
const VERSIE = {
  "dak-lessenaar": "-v2",
  "huis-lessenaar-1": "-v2",
  "huis-lessenaar-3": "-v2"
};
const bestand = (sleutel) => `${sleutel}${VERSIE[sleutel] ?? ""}.webp`;
function fotoVoor(sleutel) {
  return BESCHIKBAAR.includes(sleutel) ? `/simulator/${bestand(sleutel)}` : null;
}
function huisFoto(woning, dak, lagen) {
  const n = Math.min(4, Math.max(1, lagen));
  const m = Math.min(3, n);
  const kandidaten = [
    ...woning === "appartement" ? ["woning-appartement"] : [],
    `huis-${dak}-${n}`,
    // nog geen foto met vier bouwlagen: toon er drie
    `huis-${dak}-${m}`,
    ...dak === "zadeldak" ? [`lagen-${m}`] : [],
    ...m === 2 ? [`dak-${dak}`] : [],
    `dak-${dak}`
  ];
  for (const k of kandidaten) {
    if (fotoVoor(k)) return `/simulator/breed-${bestand(k)}`;
  }
  return "/simulator/breed-lagen-2.webp";
}
function fotoSrcSet(src) {
  return `${src.replace(/\.webp$/, "-640.webp")} 640w, ${src} 1448w`;
}
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/verhuur/VerhuurSimulatorPage.copy.ts");
const meervoud = (n, een, meer) => n === 1 ? een : meer;
const COPY = {
  nl: {
    stappen: ["Woning", "Verdiepingen", "Bouwfase", "Materiaal", "Droogplan"],
    dakKort: { zadeldak: "Zadeldak", plat: "Plat", lessenaar: "Lessenaar" },
    toestelKort: { small: "Bouwdroger", medium: "Droger medium", axiaal: "Ventilator", kachel: "Kachel" },
    tempo: {
      snel: { label: "Snel", tekst: "2 – 3 weken" },
      gemiddeld: { label: "Gemiddeld", tekst: "4 – 5 weken" },
      traag: { label: "Rustig", tekst: "6 – 8 weken" }
    },
    kop: {
      stap1: "Stap 1 · Woning",
      welkeWoning: "Welke woning droogt u?",
      stap2: "Stap 2 · Verdiepingen",
      lagenKamers: (lagen, kamers) => `${lagen}, ${kamers} kamers`,
      stap3: "Stap 3 · Bouwfase",
      hoeVer: "Hoe ver staat de werf?",
      stap4: "Stap 4 · Materiaal",
      nogNat: (wat) => `${wat}: nog nat`,
      watNat: "Wat is er nat?",
      planKlaar: "Droogplan · klaar",
      plan: (modus, verdieping) => `Droogplan · ${modus === "plaatsen" ? "plaatsen" : "drogen"} · ${verdieping}`,
      maatwerk: "Maatwerk",
      droogKlaar: "Droog en klaar om af te werken",
      geplaatst: "De toestellen worden geplaatst",
      aanHetWerk: (n) => `${n} toestellen aan het werk`
    },
    volgende: "Volgende →",
    toonPlan: "Toon mijn droogplan →",
    minstensEen: "Kies minstens één laag die nat is.",
    nietsNat: "Niets nat? Dan hoeft er niets te drogen.",
    totaal: "Totaal, alles inbegrepen",
    voorHuur: (w) => `voor ${w} ${w === 1 ? "week" : "weken"} huur`,
    service: {
      name: "Droogsimulator",
      description: "Zie in vijf stappen welke bouwdrogers uw woning nodig heeft, waar ze komen te staan en wat het pakket kost.",
      serviceType: "Bouwdroging"
    },
    kruimelHome: "Home",
    kruimel: "Droogsimulator",
    h1: "Droogsimulator: zie welke bouwdrogers uw woning nodig heeft",
    vragen: "Vragen",
    stapVan: (nr, totaal, naam) => `Stap ${nr} van ${totaal}: ${naam}`,
    vraagVan: (nr, totaal) => `Vraag ${nr} van ${totaal}`,
    droogplan: "Droogplan",
    s1Kop: "Wat voor woning droogt u?",
    s1Sub: "Zo weten we hoe de ruimtes liggen en waar de toestellen komen.",
    typeWoning: "Type woning",
    s2Kop: "Hoe ziet uw woning eruit?",
    kamers: (n) => `${n} kamers`,
    dak: "Dak",
    dakAppartement: " · bij een appartement altijd plat",
    daktype: "Daktype",
    verdiepen: "Verdiepen boven het gelijkvloers",
    gelijkvloers: "Gelijkvloers",
    verdiepKort: (n) => n === 1 ? "verdiep" : "verdiepen",
    kamersPerVerdieping: "Aantal kamers per verdieping",
    inTotaal: (n) => `${n} in totaal`,
    toonInTekening: (naam) => `Toon ${naam.toLowerCase()} in de tekening`,
    minderKamers: (naam) => `Minder kamers ${naam.toLowerCase()}`,
    meerKamers: (naam) => `Meer kamers ${naam.toLowerCase()}`,
    vloeroppervlakte: "Vloeroppervlakte",
    maatwerkKlein: "maatwerk",
    pastBij: "past bij uw woning",
    geschat: (m2) => `geschat ± ${m2} m²`,
    meerDan: (m2) => `meer dan ${m2} m²`,
    tot: (m2) => `tot ${m2} m²`,
    s3Kop: "Hoe ver staat de werf?",
    s3Sub: "Kies hoe ver de werken staan. De foto toont waar het vocht zit.",
    kiesFase: "Kies uw fase",
    verwarming: "Is er verwarming?",
    ja: "Ja",
    nee: "Nee",
    kachelsErbij: ["Kachels", " erbij in uw pakket."],
    hoeSnel: ["Hoe snel", " moet het droog zijn"],
    hoeSnelVol: "Hoe snel moet het droog zijn?",
    plusDroger: "+1 droger",
    weken: (n) => `${n} weken`,
    s4Kop: "Hoe dik is het nat?",
    perLaag: "Kies per laag de dikte.",
    eenLaag: "Kies de dikte.",
    weetNiet: " Weet u het niet, dan rekenen wij met de gangbare maat.",
    droogIn: "Droog in",
    weekOfWeken: (n) => `± ${n} ${meervoud(n, "week", "weken")}`,
    toestellen: (n) => `${n} toestellen`,
    ontvochtiging: "Ontvochtiging",
    lucht: "Lucht",
    m3u: "m³/u",
    l24u: "l/24u",
    letOp: "Let op",
    maatwerkKop: "Groot project? Dan maken we het droogplan op maat.",
    geenPakketKop: "Voor deze combinatie hebben we geen vast pakket.",
    maatwerkTekst: (m2) => `Boven ${m2} m² stellen wij het droogplan persoonlijk samen, met plaatsbezoek indien nodig. Wij nemen binnen één werkdag contact op.`,
    geenPakketTekst: "Stel uw pakket samen in de Calculator, of bel ons: we rekenen het samen uit.",
    maatwerkKnop: "Vraag uw maatwerkofferte aan →",
    naarCalculator: "Naar de Calculator →",
    bel: (nr) => `Bel ${nr}`,
    terug: "Terug",
    terugKnop: "← Terug",
    boek: "Boek dit pakket →",
    opnieuwBeginnen: "Opnieuw beginnen",
    opnieuw: "Opnieuw",
    tekening: "Tekening van uw woning",
    lagen: (n) => `${n} ${n === 1 ? "laag" : "lagen"}`,
    opnieuwAfspelen: "Opnieuw afspelen",
    verdieping: "Verdieping",
    toestelTel: (n) => `${n} ${n === 1 ? "toestel" : "toestellen"}`,
    legende: "Legende",
    droger: "Droger",
    ventilator: "Ventilator",
    kachel: "Kachel",
    vocht: "Vocht",
    uwPakket: "Uw pakket",
    alleenGelijkvloers: "Alleen gelijkvloers",
    gelijkvloersMet: (uitleg) => `Gelijkvloers ${uitleg}`,
    plusVerdiep: (n) => `+ ${n} ${n === 1 ? "verdiep" : "verdiepen"}`,
    plusZolder: "+ zolder",
    laag: {
      pd: {
        titel: "Pleisterwerk",
        wat: "De gladde laag gips op uw muren en plafonds. Vers aangebracht zit ze vol water.",
        onderschrift: "Gips op de muur, nog vochtig",
        tip: "Waar zie ik dat? In een inbouwdoos of naast een deurlijst."
      },
      cd: {
        titel: "Chape",
        wat: "De dekvloer van zand en cement onder uw tegels of parket.",
        onderschrift: "Zandcement op de isolatie",
        tip: "Waar zie ik dat? Aan de dorpel, of vraag het aan uw chapeur."
      }
    },
    geen: "Geen",
    droogKlein: "droog",
    nietNat: "niet nat",
    meest: "meest",
    weetNietKlein: "weet niet",
    droog: "Droog",
    nietNatBadge: "Niet nat",
    dikteSleep: "Dikte in cm · sleep of kies",
    laagDroog: (titel) => `${titel}: droog`,
    telNiet: "Deze laag telt niet mee in uw droogplan.",
    dikte: (titel) => `Dikte ${titel.toLowerCase()}`,
    dikteCm: (titel) => `Dikte ${titel.toLowerCase()} in cm`,
    geenPleister: "Geen nat pleisterwerk: niets te drogen.",
    geenChape: "Geen natte chape: niets te drogen.",
    zonderDroger: (w) => `± ${w} ${w === 1 ? "week" : "weken"} drogen zonder droger`,
    gerekendMet: (cm) => ` · gerekend met ${cm} cm`,
    doorsnede: "Doorsnede van muur en vloer",
    detailA: "Detail A · doorsnede",
    cmPleister: (v) => `${v} cm pleister`,
    cmChape: (v) => `${v} cm chape`,
    vanGeplaatst: (n) => ` van ${n} geplaatst`,
    dag: "Dag",
    van: (n) => ` van ${n}`,
    allesDroog: "Alles droog",
    droogt: (naam) => `${naam} droogt`,
    afgevoerd: " l water afgevoerd",
    stempel: "Droog",
    stempelDag: (naam, dag) => `${naam} · dag ${dag}`
  },
  fr: {
    stappen: ["Logement", "Étages", "Phase du chantier", "Matériau", "Plan de séchage"],
    dakKort: { zadeldak: "Deux pans", plat: "Plat", lessenaar: "Appentis" },
    // Zacht afbreekstreepje (\u00ad): op een gsm-tegel past het woord niet in één stuk.
    toestelKort: { small: "Déshumi­dificateur", medium: "Déshumi­dificateur medium", axiaal: "Ventilateur", kachel: "Chauffage" },
    tempo: {
      snel: { label: "Rapide", tekst: "2 – 3 semaines" },
      gemiddeld: { label: "Moyen", tekst: "4 – 5 semaines" },
      traag: { label: "Tranquille", tekst: "6 – 8 semaines" }
    },
    kop: {
      stap1: "Étape 1 · Logement",
      welkeWoning: "Quel logement séchez-vous ?",
      stap2: "Étape 2 · Étages",
      lagenKamers: (lagen, kamers) => `${lagen}, ${kamers} pièces`,
      stap3: "Étape 3 · Phase du chantier",
      hoeVer: "Où en est le chantier ?",
      stap4: "Étape 4 · Matériau",
      nogNat: (wat) => `${wat} : encore humide`,
      watNat: "Qu'est-ce qui est humide ?",
      planKlaar: "Plan de séchage · terminé",
      plan: (modus, verdieping) => `Plan de séchage · ${modus === "plaatsen" ? "installation" : "séchage"} · ${verdieping}`,
      maatwerk: "Sur mesure",
      droogKlaar: "Sec et prêt pour la finition",
      geplaatst: "Les appareils sont installés",
      aanHetWerk: (n) => `${n} appareils au travail`
    },
    volgende: "Suivant →",
    toonPlan: "Voir mon plan de séchage →",
    minstensEen: "Choisissez au moins une couche humide.",
    nietsNat: "Rien d'humide ? Alors il n'y a rien à sécher.",
    totaal: "Total, tout compris",
    voorHuur: (w) => `pour ${w} ${w === 1 ? "semaine" : "semaines"} de location`,
    service: {
      name: "Simulateur de séchage",
      description: "Découvrez en cinq étapes de quels déshumidificateurs de chantier votre logement a besoin, où ils seront placés et ce que coûte le pack.",
      serviceType: "Séchage de chantier"
    },
    kruimelHome: "Accueil",
    kruimel: "Simulateur de séchage",
    h1: "Simulateur de séchage : découvrez de quels déshumidificateurs votre logement a besoin",
    vragen: "Questions",
    stapVan: (nr, totaal, naam) => `Étape ${nr} sur ${totaal} : ${naam}`,
    vraagVan: (nr, totaal) => `Question ${nr} sur ${totaal}`,
    droogplan: "Plan de séchage",
    s1Kop: "Quel type de logement séchez-vous ?",
    s1Sub: "Nous savons ainsi comment les pièces sont disposées et où placer les appareils.",
    typeWoning: "Type de logement",
    s2Kop: "À quoi ressemble votre logement ?",
    kamers: (n) => `${n} pièces`,
    dak: "Toit",
    dakAppartement: " · toujours plat pour un appartement",
    daktype: "Type de toit",
    verdiepen: "Étages au-dessus du rez-de-chaussée",
    gelijkvloers: "Rez-de-chaussée",
    verdiepKort: (n) => n === 1 ? "étage" : "étages",
    kamersPerVerdieping: "Nombre de pièces par étage",
    inTotaal: (n) => `${n} au total`,
    toonInTekening: (naam) => `Afficher ${naam.toLowerCase()} dans le dessin`,
    minderKamers: (naam) => `Moins de pièces, ${naam.toLowerCase()}`,
    meerKamers: (naam) => `Plus de pièces, ${naam.toLowerCase()}`,
    vloeroppervlakte: "Surface au sol",
    maatwerkKlein: "sur mesure",
    pastBij: "correspond à votre logement",
    geschat: (m2) => `estimation ± ${m2} m²`,
    meerDan: (m2) => `plus de ${m2} m²`,
    tot: (m2) => `jusqu'à ${m2} m²`,
    s3Kop: "Où en est le chantier ?",
    s3Sub: "Indiquez où en sont les travaux. La photo montre où se trouve l'humidité.",
    kiesFase: "Choisissez votre phase",
    verwarming: "Y a-t-il du chauffage ?",
    ja: "Oui",
    nee: "Non",
    kachelsErbij: ["Chauffages", " ajoutés à votre pack."],
    hoeSnel: ["Délai", " pour que ce soit sec"],
    hoeSnelVol: "En combien de temps cela doit-il être sec ?",
    plusDroger: "+1 déshumidificateur",
    weken: (n) => `${n} semaines`,
    s4Kop: "Quelle épaisseur est humide ?",
    perLaag: "Choisissez l'épaisseur de chaque couche.",
    eenLaag: "Choisissez l'épaisseur.",
    weetNiet: " Vous ne savez pas ? Nous calculons avec l'épaisseur courante.",
    droogIn: "Sec en",
    weekOfWeken: (n) => `± ${n} ${meervoud(n, "semaine", "semaines")}`,
    toestellen: (n) => `${n} appareils`,
    ontvochtiging: "Déshumidification",
    lucht: "Air",
    m3u: "m³/h",
    l24u: "l/24 h",
    letOp: "Attention",
    maatwerkKop: "Grand projet ? Nous établissons alors le plan de séchage sur mesure.",
    geenPakketKop: "Pour cette combinaison, nous n'avons pas de pack standard.",
    maatwerkTekst: (m2) => `Au-delà de ${m2} m², nous composons le plan de séchage personnellement, avec une visite sur place si nécessaire. Nous vous contactons dans un délai d'un jour ouvrable.`,
    geenPakketTekst: "Composez votre pack dans le calculateur, ou appelez-nous : nous le calculons ensemble.",
    maatwerkKnop: "Demandez votre devis sur mesure →",
    naarCalculator: "Vers le calculateur →",
    bel: (nr) => `Appelez le ${nr}`,
    terug: "Retour",
    terugKnop: "← Retour",
    boek: "Réserver ce pack →",
    opnieuwBeginnen: "Recommencer",
    opnieuw: "Recommencer",
    tekening: "Dessin de votre logement",
    lagen: (n) => `${n} ${n === 1 ? "niveau" : "niveaux"}`,
    opnieuwAfspelen: "Rejouer",
    verdieping: "Étage",
    toestelTel: (n) => `${n} ${n === 1 ? "appareil" : "appareils"}`,
    legende: "Légende",
    droger: "Déshumidificateur",
    ventilator: "Ventilateur",
    kachel: "Chauffage",
    vocht: "Humidité",
    uwPakket: "Votre pack",
    alleenGelijkvloers: "Rez-de-chaussée seul",
    gelijkvloersMet: (uitleg) => `Rez-de-chaussée ${uitleg}`,
    plusVerdiep: (n) => `+ ${n} ${n === 1 ? "étage" : "étages"}`,
    plusZolder: "+ grenier",
    laag: {
      pd: {
        titel: "Plafonnage",
        wat: "La couche lisse de plâtre sur vos murs et plafonds. Fraîchement appliquée, elle est pleine d'eau.",
        onderschrift: "Plâtre sur le mur, encore humide",
        tip: "Où le voir ? Dans une boîte d'encastrement ou à côté d'un chambranle."
      },
      cd: {
        titel: "Chape",
        wat: "La chape de sable et de ciment sous votre carrelage ou votre parquet.",
        onderschrift: "Mortier sable-ciment sur l'isolation",
        tip: "Où le voir ? Au seuil de porte, ou demandez à votre chapiste."
      }
    },
    geen: "Aucune",
    droogKlein: "sèche",
    nietNat: "pas humide",
    meest: "courant",
    weetNietKlein: "je ne sais pas",
    droog: "Sèche",
    nietNatBadge: "Pas humide",
    dikteSleep: "Épaisseur en cm · faites glisser ou choisissez",
    laagDroog: (titel) => `${titel} : sec`,
    telNiet: "Cette couche n'est pas prise en compte dans votre plan de séchage.",
    dikte: (titel) => `Épaisseur ${titel.toLowerCase()}`,
    dikteCm: (titel) => `Épaisseur ${titel.toLowerCase()} en cm`,
    geenPleister: "Pas de plafonnage humide : rien à sécher.",
    geenChape: "Pas de chape humide : rien à sécher.",
    zonderDroger: (w) => `± ${w} ${w === 1 ? "semaine" : "semaines"} de séchage sans déshumidificateur`,
    gerekendMet: (cm) => ` · calculé avec ${cm} cm`,
    doorsnede: "Coupe du mur et du sol",
    detailA: "Détail A · coupe",
    cmPleister: (v) => `${v} cm de plafonnage`,
    cmChape: (v) => `${v} cm de chape`,
    vanGeplaatst: (n) => ` sur ${n} installés`,
    dag: "Jour",
    van: (n) => ` sur ${n}`,
    allesDroog: "Tout est sec",
    droogt: (naam) => `${naam} sèche`,
    afgevoerd: " l d'eau évacués",
    stempel: "Sec",
    stempelDag: (naam, dag) => `${naam} · jour ${dag}`
  },
  en: {
    stappen: ["Property", "Floors", "Build stage", "Material", "Drying plan"],
    dakKort: { zadeldak: "Pitched", plat: "Flat", lessenaar: "Mono-pitch" },
    // Zacht afbreekstreepje (­), net als in het Frans: smalle tegels op een gsm.
    toestelKort: { small: "Dehumi­difier", medium: "Dehumidifier medium", axiaal: "Fan", kachel: "Heater" },
    tempo: {
      snel: { label: "Fast", tekst: "2 – 3 weeks" },
      gemiddeld: { label: "Average", tekst: "4 – 5 weeks" },
      traag: { label: "Steady", tekst: "6 – 8 weeks" }
    },
    kop: {
      stap1: "Step 1 · Property",
      welkeWoning: "Which property are you drying?",
      stap2: "Step 2 · Floors",
      lagenKamers: (lagen, kamers) => `${lagen}, ${kamers} rooms`,
      stap3: "Step 3 · Build stage",
      hoeVer: "How far along is the site?",
      stap4: "Step 4 · Material",
      nogNat: (wat) => `${wat}: still wet`,
      watNat: "What is wet?",
      planKlaar: "Drying plan · done",
      plan: (modus, verdieping) => `Drying plan · ${modus === "plaatsen" ? "setting up" : "drying"} · ${verdieping}`,
      maatwerk: "Bespoke",
      droogKlaar: "Dry and ready for finishing",
      geplaatst: "The units are being set up",
      aanHetWerk: (n) => `${n} units at work`
    },
    volgende: "Next →",
    toonPlan: "Show my drying plan →",
    minstensEen: "Choose at least one layer that is wet.",
    nietsNat: "Nothing wet? Then there is nothing to dry.",
    totaal: "Total, all inclusive",
    voorHuur: (w) => `for ${w} ${w === 1 ? "week" : "weeks"} of hire`,
    service: {
      name: "Drying simulator",
      description: "See in five steps which construction dehumidifiers your home needs, where they will stand and what the package costs.",
      serviceType: "Construction drying"
    },
    kruimelHome: "Home",
    kruimel: "Drying simulator",
    h1: "Drying simulator: see which construction dehumidifiers your home needs",
    vragen: "Questions",
    stapVan: (nr, totaal, naam) => `Step ${nr} of ${totaal}: ${naam}`,
    vraagVan: (nr, totaal) => `Question ${nr} of ${totaal}`,
    droogplan: "Drying plan",
    s1Kop: "What kind of property are you drying?",
    s1Sub: "That tells us how the rooms are laid out and where the units will go.",
    typeWoning: "Type of property",
    s2Kop: "What does your home look like?",
    kamers: (n) => `${n} rooms`,
    dak: "Roof",
    dakAppartement: " · always flat for an apartment",
    daktype: "Roof type",
    verdiepen: "Floors above the ground floor",
    gelijkvloers: "Ground floor",
    verdiepKort: (n) => n === 1 ? "floor" : "floors",
    kamersPerVerdieping: "Number of rooms per floor",
    inTotaal: (n) => `${n} in total`,
    toonInTekening: (naam) => `Show ${naam.toLowerCase()} in the drawing`,
    minderKamers: (naam) => `Fewer rooms, ${naam.toLowerCase()}`,
    meerKamers: (naam) => `More rooms, ${naam.toLowerCase()}`,
    vloeroppervlakte: "Floor area",
    maatwerkKlein: "bespoke",
    pastBij: "fits your home",
    geschat: (m2) => `estimated ± ${m2} m²`,
    meerDan: (m2) => `more than ${m2} m²`,
    tot: (m2) => `up to ${m2} m²`,
    s3Kop: "How far along is the site?",
    s3Sub: "Choose how far the works have got. The photo shows where the moisture is.",
    kiesFase: "Choose your stage",
    verwarming: "Is there heating?",
    ja: "Yes",
    nee: "No",
    kachelsErbij: ["Heaters", " added to your package."],
    hoeSnel: ["How fast", " does it need to be dry"],
    hoeSnelVol: "How fast does it need to be dry?",
    plusDroger: "+1 dehumidifier",
    weken: (n) => `${n} weeks`,
    s4Kop: "How thick is the wet layer?",
    perLaag: "Choose the thickness of each layer.",
    eenLaag: "Choose the thickness.",
    weetNiet: " Not sure? Then we calculate with the usual thickness.",
    droogIn: "Dry in",
    weekOfWeken: (n) => `± ${n} ${meervoud(n, "week", "weeks")}`,
    toestellen: (n) => `${n} units`,
    ontvochtiging: "Dehumidification",
    lucht: "Air",
    m3u: "m³/h",
    l24u: "l/24h",
    letOp: "Please note",
    maatwerkKop: "Large project? Then we tailor the drying plan.",
    geenPakketKop: "We have no standard package for this combination.",
    maatwerkTekst: (m2) => `Above ${m2} m² we put the drying plan together personally, with a site visit if needed. We will be in touch within one working day.`,
    geenPakketTekst: "Put your package together in the Calculator, or call us: we'll work it out together.",
    maatwerkKnop: "Request your bespoke quote →",
    naarCalculator: "Go to the Calculator →",
    bel: (nr) => `Call ${nr}`,
    terug: "Back",
    terugKnop: "← Back",
    boek: "Book this package →",
    opnieuwBeginnen: "Start again",
    opnieuw: "Start again",
    tekening: "Drawing of your home",
    lagen: (n) => `${n} ${n === 1 ? "storey" : "storeys"}`,
    opnieuwAfspelen: "Replay",
    verdieping: "Floor",
    toestelTel: (n) => `${n} ${n === 1 ? "unit" : "units"}`,
    legende: "Key",
    droger: "Dehumidifier",
    ventilator: "Fan",
    kachel: "Heater",
    vocht: "Moisture",
    uwPakket: "Your package",
    alleenGelijkvloers: "Ground floor only",
    gelijkvloersMet: (uitleg) => `Ground floor ${uitleg}`,
    plusVerdiep: (n) => `+ ${n} ${n === 1 ? "floor" : "floors"}`,
    plusZolder: "+ attic",
    laag: {
      pd: {
        titel: "Plasterwork",
        wat: "The smooth layer of plaster on your walls and ceilings. Freshly applied, it is full of water.",
        onderschrift: "Plaster on the wall, still damp",
        tip: "Where can I see it? In a flush-mounted box or next to a door frame."
      },
      cd: {
        titel: "Screed",
        wat: "The sand and cement floor screed under your tiles or parquet.",
        onderschrift: "Sand-cement on the insulation",
        tip: "Where can I see it? At the threshold, or ask your screed layer."
      }
    },
    geen: "None",
    droogKlein: "dry",
    nietNat: "not wet",
    meest: "most common",
    weetNietKlein: "don't know",
    droog: "Dry",
    nietNatBadge: "Not wet",
    dikteSleep: "Thickness in cm · drag or choose",
    laagDroog: (titel) => `${titel}: dry`,
    telNiet: "This layer does not count towards your drying plan.",
    dikte: (titel) => `${titel} thickness`,
    dikteCm: (titel) => `${titel} thickness in cm`,
    geenPleister: "No wet plasterwork: nothing to dry.",
    geenChape: "No wet screed: nothing to dry.",
    zonderDroger: (w) => `± ${w} ${w === 1 ? "week" : "weeks"} drying without a dehumidifier`,
    gerekendMet: (cm) => ` · calculated with ${cm} cm`,
    doorsnede: "Cross-section of wall and floor",
    detailA: "Detail A · cross-section",
    cmPleister: (v) => `${v} cm plaster`,
    cmChape: (v) => `${v} cm screed`,
    vanGeplaatst: (n) => ` of ${n} set up`,
    dag: "Day",
    van: (n) => ` of ${n}`,
    allesDroog: "All dry",
    droogt: (naam) => `${naam} drying`,
    afgevoerd: " l of water removed",
    stempel: "Dry",
    stempelDag: (naam, dag) => `${naam} · day ${dag}`
  }
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/verhuur/VerhuurSimulatorPage.tsx");
const CYCLUS = 12;
function droogfilm(lagen, dagen, perLaag) {
  const uit = [];
  for (let v = 0; v < lagen; v++) uit.push({ v, modus: "plaatsen", van: 0, tot: 0, duur: plaatsDuur(perLaag[v] ?? 0, v < lagen - 1), toestellen: perLaag[v] ?? 0, dagVan: 0, dagTot: 0 });
  const klaarOp = (v) => lagen === 1 ? dagen : Math.round(dagen * (0.6 + 0.4 * (lagen - 1 - v) / (lagen - 1)));
  let vorige = 0;
  for (let v = lagen - 1; v >= 0; v--) {
    const dag = klaarOp(v);
    uit.push({ v, modus: "drogen", van: 0, tot: 1, duur: DROOG_DUUR, naloop: v > 0 ? 0.5 : 0, dagVan: vorige, dagTot: dag });
    vorige = dag;
  }
  return uit;
}
const GEEN_PLAATSINGEN = [];
const WONINGEN = ["rijwoning", "halfopen", "open", "appartement"];
const DAKEN = ["zadeldak", "plat", "lessenaar"];
const MATEN = SIZE_VALUES.map(Number);
const OPP_STAPPEN = [...MATEN.map(String), "custom"];
const GROOTSTE = MATEN[MATEN.length - 1] ?? 300;
const START = {
  woning: null,
  verdiepingen: 2,
  dak: "zadeldak",
  size: snapOppervlakte(geschatteOppervlakte("halfopen", 2)),
  pd: DEFAULT_PD,
  cd: DEFAULT_CD,
  fase: null,
  verwarmt: null,
  tempo: null,
  kamers: []
};
function watVoor(fase, pd, cd) {
  const lagen = LAGEN_PER_FASE[fase];
  if (lagen.length === 0) return "waterschade";
  const muur = lagen.includes("pd") && pd !== "geen";
  const vloer = lagen.includes("cd") && cd !== "geen";
  return muur && vloer ? "beide" : muur ? "pleister" : vloer ? "chape" : null;
}
function volledig(s, wat) {
  const fase = s.fase ?? "chape";
  return {
    woning: s.woning ?? "halfopen",
    verdiepingen: s.verdiepingen,
    dak: s.dak,
    size: s.size,
    wat: wat ?? "beide",
    // "geen" = die laag is droog; wat laat ze al weg, de waarde moet alleen geldig zijn.
    pd: s.pd === "onbekend" || s.pd === "geen" ? DEFAULT_PD : s.pd,
    cd: s.cd === "onbekend" || s.cd === "geen" ? DEFAULT_CD : s.cd,
    fase,
    verwarmt: s.verwarmt ?? FASE[fase].verwarmtWaarschijnlijk,
    tempo: s.tempo ?? "gemiddeld"
  };
}
const VerhuurSimulatorPage = () => {
  const t = useCopy(COPY);
  const taal = useTaal();
  const lp = useLokaalPad();
  const toon = useToonBedrag();
  const seo = useSeo("verhuurSimulator");
  const cat = catInTaal(taal);
  const STAPPEN = t.stappen;
  const [s, setS] = useState(START);
  const [stap, setStap] = useState(0);
  const [actief, setActief] = useState(0);
  const [handmatig, setHandmatig] = useState(false);
  const [seg, setSeg] = useState(0);
  const [filmKlaar, setFilmKlaar] = useState(false);
  const [ronde, setRonde] = useState(0);
  const [faseToon, setFaseToon] = useState(null);
  const [toonPlan, setToonPlan] = useState(false);
  const root = useRef(null);
  const wat = s.fase ? watVoor(s.fase, s.pd, s.cd) : null;
  const antwoorden = volledig(s, wat);
  const woning = antwoorden.woning;
  const lagen = antwoorden.verdiepingen;
  const dak = antwoorden.dak;
  const maxPer = Array.from({ length: lagen }, (_, v) => maxKamers(woning, v, lagen, dak));
  const programma = (v) => {
    const p = s.kamers[v] ?? standaardProgramma(woning, v, lagen, dak);
    return aantalKamers(p) > maxPer[v] ? programmaVan(laagSoort(woning, v, lagen, dak), maxPer[v], lagen) : p;
  };
  const programmas = Array.from({ length: lagen }, (_, v) => programma(v));
  const aantallen = programmas.map(aantalKamers);
  const sleutelPlan = JSON.stringify(programmas);
  const plan = useMemo(
    () => planVoor(woning, lagen, dak, programmas),
    // programmas is elke render een nieuwe array; de inhoud telt.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [woning, lagen, dak, sleutelPlan]
  );
  const kamers = plan.kamers;
  const resultaat = useMemo(
    () => wat ? simResultaat({ ...antwoorden, ruimtes: aantallen.reduce((a, b) => a + b, 0) }) : null,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [wat, s.size, s.pd, s.cd, s.fase, s.verwarmt, s.tempo, woning, lagen, sleutelPlan]
  );
  const aantalToestellen = resultaat ? resultaat.items.reduce((n, it) => n + it.q, 0) : 0;
  const plaatsingen = useMemo(
    () => resultaat && stap === 4 ? plaatsToestellen(resultaat.items, kamers, plan.trappen) : [],
    [resultaat, kamers, plan.trappen, stap]
  );
  const materiaal = materiaalVoor(stap >= 3 ? wat : null, stap >= 2 ? s.fase : null, FASE[antwoorden.fase].vocht);
  useEffect(() => {
    if ((stap === 2 || stap === 3) && resultaat) voorlaadToestellen([...new Set(resultaat.items.map((it) => it.k))]);
  }, [stap, resultaat]);
  const perLaag = useMemo(() => {
    const verdiepVan = new Map(kamers.map((k) => [k.id, k.verdieping]));
    return Array.from({ length: lagen }, (_, v) => plaatsingen.filter((p) => verdiepVan.get(p.kamer) === v).length);
  }, [kamers, plaatsingen, lagen]);
  const segmenten = useMemo(() => resultaat ? droogfilm(lagen, resultaat.dagen, perLaag) : [], [resultaat, lagen, perLaag]);
  useEffect(() => setSeg(0), [segmenten]);
  const segment = segmenten[Math.min(seg, segmenten.length - 1)];
  useEffect(() => {
    if (stap !== 4 || handmatig || filmKlaar || !segment) return;
    let id = 0;
    const stop = () => window.clearTimeout(id);
    const volgende2 = (e) => {
      stop();
      if (filmStatus.wacht) return;
      const start = e ? e.detail : performance.now();
      id = window.setTimeout(() => {
        if (seg + 1 < segmenten.length) setSeg(seg + 1);
        else setFilmKlaar(true);
      }, Math.max(0, segment.duur * 1e3 - (performance.now() - start)));
    };
    volgende2();
    window.addEventListener(FILM_START, volgende2);
    window.addEventListener(FILM_WACHT, stop);
    return () => {
      stop();
      window.removeEventListener(FILM_START, volgende2);
      window.removeEventListener(FILM_WACHT, stop);
    };
  }, [stap, handmatig, filmKlaar, seg, segment, segmenten, ronde]);
  const opnieuwAfspelen = () => {
    setFilmKlaar(false);
    setHandmatig(false);
    setSeg(0);
    setActief(0);
    setRonde((r) => r + 1);
  };
  const naar = (n) => {
    setStap(n);
    setToonPlan(false);
    setActief(0);
    setSeg(0);
    setHandmatig(false);
    setFilmKlaar(false);
  };
  const kiesFase = (f) => setS((p) => ({ ...p, fase: f }));
  const kiesWoning = (w) => setS((prev) => {
    if (w === prev.woning) return prev;
    const verdiepingen = w === "appartement" ? 1 : Math.max(2, prev.verdiepingen);
    const d = w === prev.woning ? prev.dak : WONING[w].dakToegelaten[0];
    return { ...prev, woning: w, verdiepingen, dak: d, kamers: [], size: snapOppervlakte(geschatteOppervlakte(w, verdiepingen)) };
  });
  const herschik = (prev, n, d) => prev.kamers.slice(0, n).map(
    (k, v) => laagSoort(prev.woning ?? "halfopen", v, n, d) === laagSoort(prev.woning ?? "halfopen", v, prev.verdiepingen, prev.dak) && // naar of van één bouwlaag: het gelijkvloers krijgt (of verliest) de slaapkamers
    !(v === 0 && n === 1 !== (prev.verdiepingen === 1)) ? k : void 0
  );
  const zetLagen = (n) => {
    setToonPlan(false);
    setActief((a) => Math.min(a, n - 1));
    setS((prev) => ({
      ...prev,
      verdiepingen: n,
      kamers: herschik(prev, n, prev.dak),
      size: snapOppervlakte(geschatteOppervlakte(prev.woning ?? "halfopen", n))
    }));
  };
  const zetDak = (d) => {
    setToonPlan(false);
    setS((prev) => ({ ...prev, dak: d, kamers: herschik(prev, prev.verdiepingen, d) }));
  };
  const zetAantal = (v, n) => {
    setToonPlan(true);
    setActief(v);
    setS((prev) => {
      const k = Array.from({ length: lagen }, (_, i) => prev.kamers[i] ?? standaardProgramma(woning, i, lagen, dak));
      k[v] = programmaVan(laagSoort(woning, v, lagen, dak), n, lagen);
      return { ...prev, kamers: k };
    });
  };
  const kiesVerdieping = (v) => {
    setToonPlan(true);
    setActief(v);
  };
  const verd = Math.min(actief, lagen - 1);
  const handSeg = segmenten.find((sg) => sg.modus === "drogen" && sg.v === verd);
  const filmSeg = stap === 4 ? handmatig ? handSeg : segment : void 0;
  const toonVerd = stap === 4 && filmSeg ? filmSeg.v : verd;
  const maxLagen = woning === "appartement" ? 2 : MAX_VERDIEPINGEN;
  const maatwerk = isMaatwerk(antwoorden);
  const totaalKamers = aantallen.reduce((a, b) => a + b, 0);
  const maat = maatwerk ? `${GROOTSTE}+ m²` : `± ${s.size} m²`;
  const heldFoto = huisFoto(woning, dak, lagen);
  const schatting = geschatteOppervlakte(woning, lagen);
  const opIk = Math.max(0, OPP_STAPPEN.indexOf(maatwerk ? "custom" : s.size));
  const opSchat = Math.max(0, OPP_STAPPEN.indexOf(snapOppervlakte(schatting)));
  const verwarmd = s.verwarmt ?? (s.fase ? FASE[s.fase].verwarmtWaarschijnlijk : null);
  const kop = [
    { eyebrow: t.kop.stap1, titel: s.woning ? woningTekst(s.woning, taal).label : t.kop.welkeWoning },
    { eyebrow: t.kop.stap2, titel: t.kop.lagenKamers(woningLagen(lagen, dak, t), totaalKamers) },
    { eyebrow: t.kop.stap3, titel: s.fase ? faseInTaal(s.fase, taal).label : t.kop.hoeVer },
    { eyebrow: t.kop.stap4, titel: wat ? t.kop.nogNat(watTekst(wat, taal).label) : t.kop.watNat },
    {
      eyebrow: filmKlaar ? t.kop.planKlaar : t.kop.plan(filmSeg?.modus === "plaatsen" ? "plaatsen" : "drogen", verdiepingNaam(toonVerd, lagen, dak, taal)),
      titel: !resultaat ? t.kop.maatwerk : filmKlaar ? t.kop.droogKlaar : filmSeg?.modus === "plaatsen" ? t.kop.geplaatst : t.kop.aanHetWerk(aantalToestellen)
    }
  ][stap];
  const faseLagen = s.fase ? LAGEN_PER_FASE[s.fase] : ["pd", "cd"];
  const zonderLagen = faseLagen.length === 0;
  const verder = stap === 2 && zonderLagen ? 4 : stap + 1;
  const zichtbareStappen = STAPPEN.map((naam, i) => ({ naam, i })).filter(({ i }) => !(zonderLagen && i === 3));
  const stapNr = zichtbareStappen.findIndex(({ i }) => i === stap) + 1;
  const terug = stap === 4 && zonderLagen ? 2 : Math.max(0, stap - 1);
  const volgende = stap === 0 ? { ok: !!s.woning, label: t.volgende } : stap === 2 ? { ok: !!s.fase && !!s.tempo, label: zonderLagen ? t.toonPlan : t.volgende } : stap === 3 ? { ok: !!wat, label: t.toonPlan, melding: wat ? void 0 : faseLagen.length > 1 ? t.minstensEen : t.nietsNat } : { ok: true, label: t.volgende };
  const prijs = resultaat ? toon(resultaat.prijs) : null;
  const totaal = resultaat && /* @__PURE__ */ jsxs("div", { className: "ds-tot", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("span", { children: t.totaal }),
      /* @__PURE__ */ jsxs("small", { children: [
        t.voorHuur(resultaat.weken),
        " · ",
        prijs?.label
      ] })
    ] }),
    /* @__PURE__ */ jsx("b", { children: prijs?.tekst })
  ] });
  return /* @__PURE__ */ jsxs("div", { className: "vh-calc ds-sim", "data-stap": stap, ref: root, children: [
    /* @__PURE__ */ jsx(
      PageMeta,
      {
        ...seo,
        jsonLd: [
          serviceSchema({
            name: t.service.name,
            description: t.service.description,
            path: lp("/verhuur/simulator"),
            serviceType: t.service.serviceType
          }),
          breadcrumbSchema([
            { name: t.kruimelHome, path: lp("/") },
            { name: t.kruimel, path: lp("/verhuur/simulator") }
          ])
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "ds-app", children: /* @__PURE__ */ jsxs("main", { className: "ds-main", children: [
      /* @__PURE__ */ jsx("h1", { className: "sr-only", children: t.h1 }),
      /* @__PURE__ */ jsxs("section", { className: "ds-panel", "aria-label": t.vragen, children: [
        /* @__PURE__ */ jsxs("div", { className: "ds-ptop", children: [
          /* @__PURE__ */ jsx("ol", { className: "ds-bar", "aria-label": t.stapVan(stapNr, zichtbareStappen.length, STAPPEN[stap]), children: zichtbareStappen.map(({ naam, i }) => /* @__PURE__ */ jsx("li", { className: i < stap ? "done" : i === stap ? "on" : void 0, "aria-current": i === stap ? "step" : void 0 }, naam)) }),
          /* @__PURE__ */ jsx("span", { className: "ds-count", children: stap < 4 ? t.vraagVan(stapNr, zichtbareStappen.length - 1) : t.droogplan })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "ds-body", children: [
          stap === 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("h2", { children: t.s1Kop }),
            /* @__PURE__ */ jsx("p", { className: "ds-sub", children: t.s1Sub }),
            /* @__PURE__ */ jsx("div", { className: "ds-cards", role: "radiogroup", "aria-label": t.typeWoning, children: WONINGEN.map((w) => /* @__PURE__ */ jsxs("button", { type: "button", role: "radio", "aria-checked": s.woning === w, className: `ds-card${s.woning === w ? " sel" : ""}`, onClick: () => kiesWoning(w), children: [
              /* @__PURE__ */ jsx("span", { className: `ds-art${fotoVoor(`woning-${w}`) ? " ds-art--foto" : ""}`, children: /* @__PURE__ */ jsx(Foto, { sleutel: `woning-${w}`, children: /* @__PURE__ */ jsx(IsoHouse, { mini: true, woning: w, verdiepingen: w === "appartement" ? 1 : 2, dak: w === "appartement" ? "plat" : "zadeldak", kamers: [], open: false, actief: 0 }) }) }),
              /* @__PURE__ */ jsxs("span", { className: "ds-t", children: [
                /* @__PURE__ */ jsx("b", { children: woningTekst(w, taal).label }),
                /* @__PURE__ */ jsx("small", { children: woningTekst(w, taal).sub })
              ] })
            ] }, w)) })
          ] }),
          stap === 1 && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("h2", { children: t.s2Kop }),
            /* @__PURE__ */ jsxs("figure", { className: "ds-held", "aria-hidden": "true", children: [
              /* @__PURE__ */ jsx("img", { className: "ds-held-foto", onAnimationEnd: (e) => e.currentTarget.style.animation = "none", src: heldFoto, srcSet: fotoSrcSet(heldFoto), sizes: "(max-width: 899px) 100vw, 46vw", alt: "", loading: "lazy", decoding: "async" }, heldFoto),
              /* @__PURE__ */ jsxs("figcaption", { className: "ds-held-cap", children: [
                dakTekst(dak, taal).label,
                /* @__PURE__ */ jsxs("i", { children: [
                  " · ",
                  woningLagen(lagen, dak, t).toLowerCase(),
                  " · ",
                  t.kamers(totaalKamers)
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "ds-keuzerij", children: [
              /* @__PURE__ */ jsxs("div", { className: "ds-lbl", children: [
                t.dak,
                woning === "appartement" && /* @__PURE__ */ jsx("span", { children: t.dakAppartement })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "ds-hkset", role: "radiogroup", "aria-label": t.daktype, children: DAKEN.map((d) => /* @__PURE__ */ jsxs("button", { type: "button", role: "radio", "aria-checked": dak === d, disabled: !WONING[woning].dakToegelaten.includes(d), className: `ds-hk${dak === d ? " on" : ""}`, onClick: () => zetDak(d), children: [
                /* @__PURE__ */ jsx(HuisIcoon, { dak: d, lagen: 2 }),
                /* @__PURE__ */ jsxs("b", { children: [
                  /* @__PURE__ */ jsx("span", { className: "ds-lang", children: dakTekst(d, taal).label }),
                  /* @__PURE__ */ jsx("span", { className: "ds-kort", children: t.dakKort[d] })
                ] })
              ] }, d)) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "ds-keuzerij", children: [
              /* @__PURE__ */ jsx("div", { className: "ds-lbl", children: t.verdiepen }),
              /* @__PURE__ */ jsx("div", { className: "ds-hkset ds-hkset--lagen", role: "radiogroup", "aria-label": t.verdiepen, children: Array.from({ length: MAX_VERDIEPINGEN }, (_, i) => i + 1).map((n) => /* @__PURE__ */ jsxs("button", { type: "button", role: "radio", "aria-checked": lagen === n, "aria-label": woningLagen(n, dak, t), disabled: n > maxLagen, className: `ds-hk ds-hk--laag${lagen === n ? " on" : ""}`, onClick: () => zetLagen(n), children: [
                /* @__PURE__ */ jsx(HuisIcoon, { dak, lagen: n }),
                n === 1 ? /* @__PURE__ */ jsx("b", { children: t.gelijkvloers }) : /* @__PURE__ */ jsxs("b", { children: [
                  "+",
                  n - 1,
                  /* @__PURE__ */ jsx("small", { children: t.verdiepKort(n - 1) })
                ] })
              ] }, n)) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "ds-groei", children: [
              /* @__PURE__ */ jsxs("div", { className: "ds-lbl ds-lbl--rij", children: [
                t.kamersPerVerdieping,
                /* @__PURE__ */ jsx("span", { children: t.inTotaal(totaalKamers) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: `ds-gebouw ds-gebouw--${dak}`, children: [
                /* @__PURE__ */ jsx("span", { className: "ds-gebouw-dak", "aria-hidden": "true" }),
                /* @__PURE__ */ jsx("div", { className: "ds-verdrijen", children: aantallen.map((n, v) => ({ n, v })).reverse().map(({ n, v }) => {
                  const naam = verdiepingNaam(v, lagen, dak, taal);
                  return /* @__PURE__ */ jsxs("div", { className: `ds-verdrij${toonPlan && verd === v ? " on" : ""}`, children: [
                    /* @__PURE__ */ jsx("button", { type: "button", className: "ds-verdrij-naam", onClick: () => kiesVerdieping(v), "aria-label": t.toonInTekening(naam), children: /* @__PURE__ */ jsx("b", { children: naam }) }),
                    /* @__PURE__ */ jsx("span", { className: "ds-deuren", "aria-hidden": "true", children: Array.from({ length: n }, (_, k) => /* @__PURE__ */ jsx("i", {}, k)) }),
                    /* @__PURE__ */ jsxs("span", { className: "ds-tel", children: [
                      /* @__PURE__ */ jsx("button", { type: "button", "aria-label": t.minderKamers(naam), disabled: n <= MIN_KAMERS, onClick: () => zetAantal(v, n - 1), children: "−" }),
                      /* @__PURE__ */ jsx("output", { "aria-live": "polite", children: n }),
                      /* @__PURE__ */ jsx("button", { type: "button", "aria-label": t.meerKamers(naam), disabled: n >= maxPer[v], onClick: () => zetAantal(v, n + 1), children: "+" })
                    ] })
                  ] }, v);
                }) })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "ds-opp", children: /* @__PURE__ */ jsxs("div", { className: "ds-opp-rij", children: [
              /* @__PURE__ */ jsxs("div", { className: "ds-opp-waarde", children: [
                /* @__PURE__ */ jsx("span", { className: "ds-opp-cap", children: t.vloeroppervlakte }),
                /* @__PURE__ */ jsxs("b", { children: [
                  maatwerk ? `${GROOTSTE}+` : s.size,
                  /* @__PURE__ */ jsx("span", { children: " m²" })
                ] }),
                /* @__PURE__ */ jsx("small", { children: maatwerk ? t.maatwerkKlein : opIk === opSchat ? t.pastBij : /* @__PURE__ */ jsx("button", { type: "button", className: "ds-opp-terug", onClick: () => setS((p) => ({ ...p, size: OPP_STAPPEN[opSchat] })), children: t.geschat(schatting) }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "ds-opp-schuif", style: { "--pos": `${opIk / (OPP_STAPPEN.length - 1) * 100}%`, "--schat": `${opSchat / (OPP_STAPPEN.length - 1) * 100}%` }, children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "range",
                    min: 0,
                    max: OPP_STAPPEN.length - 1,
                    step: 1,
                    value: opIk,
                    "aria-label": t.vloeroppervlakte,
                    "aria-valuetext": maatwerk ? t.meerDan(GROOTSTE) : t.tot(s.size),
                    onChange: (e) => setS((p) => ({ ...p, size: OPP_STAPPEN[Number(e.target.value)] }))
                  }
                ),
                /* @__PURE__ */ jsx("i", { className: "ds-opp-tick", "aria-hidden": "true" }),
                /* @__PURE__ */ jsxs("span", { className: "ds-opp-schaal", "aria-hidden": "true", children: [
                  /* @__PURE__ */ jsx("span", { children: MATEN[0] }),
                  /* @__PURE__ */ jsxs("span", { children: [
                    GROOTSTE,
                    "+"
                  ] })
                ] })
              ] })
            ] }) })
          ] }),
          stap === 2 && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("h2", { children: t.s3Kop }),
            /* @__PURE__ */ jsx("p", { className: "ds-sub", children: t.s3Sub }),
            /* @__PURE__ */ jsx(Bouwfilm, { fase: s.fase, toon: faseToon, onKies: kiesFase }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "ds-lbl", children: t.kiesFase }),
              /* @__PURE__ */ jsx(FaseKnoppen, { fase: s.fase, onKies: kiesFase, onToon: setFaseToon })
            ] }),
            s.fase && /* @__PURE__ */ jsx(FaseRegels, { fase: s.fase }, s.fase),
            /* @__PURE__ */ jsxs("div", { className: "ds-vragen", children: [
              /* @__PURE__ */ jsxs("div", { className: "ds-vraag", children: [
                /* @__PURE__ */ jsx("span", { children: t.verwarming }),
                /* @__PURE__ */ jsxs("div", { className: "ds-jn", role: "radiogroup", "aria-label": t.verwarming, children: [
                  /* @__PURE__ */ jsx("button", { type: "button", role: "radio", "aria-checked": verwarmd === true, className: verwarmd === true ? "on" : void 0, onClick: () => setS((p) => ({ ...p, verwarmt: true })), children: t.ja }),
                  /* @__PURE__ */ jsx("button", { type: "button", role: "radio", "aria-checked": verwarmd === false, className: verwarmd === false ? "on" : void 0, onClick: () => setS((p) => ({ ...p, verwarmt: false })), children: t.nee })
                ] }),
                verwarmd === false && /* @__PURE__ */ jsxs("p", { className: "ds-gevolg", children: [
                  /* @__PURE__ */ jsx("i", { children: "+" }),
                  /* @__PURE__ */ jsxs("span", { children: [
                    /* @__PURE__ */ jsx("b", { children: t.kachelsErbij[0] }),
                    t.kachelsErbij[1]
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "ds-vraag ds-vraag--tempo", children: [
                /* @__PURE__ */ jsxs("span", { children: [
                  t.hoeSnel[0],
                  /* @__PURE__ */ jsx("span", { className: "ds-lang", children: t.hoeSnel[1] }),
                  taal === "fr" ? " ?" : "?"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "ds-tempo", role: "radiogroup", "aria-label": t.hoeSnelVol, children: TEMPO_ORDER.map((tp) => /* @__PURE__ */ jsxs("button", { type: "button", role: "radio", "aria-checked": s.tempo === tp, className: s.tempo === tp ? "on" : void 0, onClick: () => setS((p) => ({ ...p, tempo: tp })), children: [
                  /* @__PURE__ */ jsx("b", { children: t.tempo[tp].label }),
                  /* @__PURE__ */ jsx("small", { children: tp === "snel" ? t.plusDroger : resultaat ? t.weken(resultaat.weken) : t.tempo[tp].tekst })
                ] }, tp)) })
              ] })
            ] })
          ] }),
          stap === 3 && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("h2", { children: t.s4Kop }),
            /* @__PURE__ */ jsxs("p", { className: "ds-sub", children: [
              faseLagen.length > 1 ? t.perLaag : t.eenLaag,
              t.weetNiet
            ] }),
            faseLagen.map((laag) => /* @__PURE__ */ jsx(
              LaagKaart,
              {
                laag,
                solo: faseLagen.length === 1,
                gekozen: s[laag],
                onKies: (v) => setS((p) => ({ ...p, [laag]: v }))
              },
              laag
            ))
          ] }),
          stap === 4 && resultaat && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("span", { className: `ds-tempo-label ds-tempo-label--${antwoorden.tempo}`, children: t.tempo[antwoorden.tempo ?? "gemiddeld"].label }),
            /* @__PURE__ */ jsxs("h2", { className: "ds-plan-kop", children: [
              t.droogIn,
              " ",
              /* @__PURE__ */ jsx("em", { children: t.weekOfWeken(resultaat.weken) })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "ds-sub ds-sub--altijd", children: [
              woningTekst(woning, taal).label,
              " · ",
              maat,
              " · ",
              t.toestellen(aantalToestellen)
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "ds-bon", children: resultaat.items.filter((it) => it.q > 0).map((it) => /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("img", { src: CAT[it.k].img.replace(/\.png$/, ".webp"), alt: "", loading: "lazy", decoding: "async" }),
              /* @__PURE__ */ jsxs("span", { className: "q", children: [
                it.q,
                "×"
              ] }),
              /* @__PURE__ */ jsx("b", { children: t.toestelKort[it.k] }),
              /* @__PURE__ */ jsx("small", { children: cat[it.k].name.split(", ")[1] ?? "" })
            ] }, it.k)) }),
            /* @__PURE__ */ jsxs("dl", { className: "ds-stats", children: [
              resultaat.capaciteit > 0 && /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("dt", { children: t.ontvochtiging }),
                /* @__PURE__ */ jsxs("dd", { children: [
                  resultaat.capaciteit,
                  " ",
                  /* @__PURE__ */ jsx("small", { children: t.l24u })
                ] })
              ] }),
              resultaat.luchtverzet > 0 && /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("dt", { children: t.lucht }),
                /* @__PURE__ */ jsxs("dd", { children: [
                  resultaat.luchtverzet.toLocaleString(NUMBER_LOCALE[taal]),
                  " ",
                  /* @__PURE__ */ jsx("small", { children: t.m3u })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "ds-advies ds-advies--plan", children: [
              /* @__PURE__ */ jsxs("b", { children: [
                t.letOp,
                " · ",
                faseInTaal(antwoorden.fase, taal).label.toLowerCase()
              ] }),
              faseInTaal(antwoorden.fase, taal).advies
            ] }),
            totaal
          ] }),
          stap === 4 && !resultaat && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("h2", { children: maatwerk ? t.maatwerkKop : t.geenPakketKop }),
            /* @__PURE__ */ jsx("p", { className: "ds-sub ds-sub--altijd", children: maatwerk ? t.maatwerkTekst(GROOTSTE) : t.geenPakketTekst }),
            /* @__PURE__ */ jsxs("div", { className: "ds-chips", children: [
              maatwerk ? /* @__PURE__ */ jsx("a", { className: "ds-book", href: "https://survey.typeform.com/to/QJgaZgHX", target: "_blank", rel: "noopener", children: t.maatwerkKnop }) : /* @__PURE__ */ jsx(Link, { className: "ds-book", to: lp("/verhuur/calculator"), children: t.naarCalculator }),
              /* @__PURE__ */ jsx("a", { className: "ds-chip", href: `tel:${CONTACT.phoneE164}`, children: t.bel(CONTACT.phoneLocal) })
            ] })
          ] })
        ] }, stap),
        /* @__PURE__ */ jsxs("div", { className: "ds-foot", children: [
          /* @__PURE__ */ jsx("button", { className: stap === 4 && resultaat ? "ds-rond" : "ds-back", type: "button", hidden: stap === 0, "aria-label": t.terug, onClick: () => naar(terug), children: stap === 4 && resultaat ? /* @__PURE__ */ jsx("svg", { viewBox: "0 0 20 20", width: "18", height: "18", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M12 4l-6 6 6 6" }) }) : t.terugKnop }),
          volgende.melding && /* @__PURE__ */ jsx("p", { className: "ds-melding", role: "status", children: volgende.melding }),
          stap < 4 ? /* @__PURE__ */ jsx("button", { className: "ds-next", type: "button", disabled: !volgende.ok, onClick: () => naar(verder), children: volgende.label }) : resultaat ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Link, { className: "ds-boek", to: lp(`/verhuur/pakket?${configToQuery(resultaat.config)}${extraNaarQuery(resultaat.extra)}`), children: t.boek }),
            /* @__PURE__ */ jsx("button", { className: "ds-rond", type: "button", "aria-label": t.opnieuwBeginnen, title: t.opnieuw, onClick: () => {
              setS(START);
              naar(0);
            }, children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 20 20", width: "18", height: "18", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M4 10a6 6 0 1 0 2-4.5M4 3v3.5h3.5" }) }) })
          ] }) : /* @__PURE__ */ jsx(
            "button",
            {
              className: "ds-back ds-back--rechts",
              type: "button",
              onClick: () => {
                setS(START);
                naar(0);
              },
              children: t.opnieuw
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "ds-stage", "aria-label": t.tekening, children: [
        /* @__PURE__ */ jsxs("div", { className: "ds-shead", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "ds-eyebrow", children: kop.eyebrow }),
            /* @__PURE__ */ jsx("p", { className: "ds-stitel", "aria-live": "polite", children: kop.titel })
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "ds-badge", children: [
            woningTekst(woning, taal).label,
            " · ",
            t.lagen(lagen),
            " · ",
            maat
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "ds-canvas", children: [
          /* @__PURE__ */ jsx(
            IsoHouseAuto,
            {
              woning,
              verdiepingen: lagen,
              dak,
              kamers,
              openingen: plan.openingen,
              trappen: plan.trappen,
              open: stap >= 2 && !(stap === 4 && filmKlaar) || stap === 1 && toonPlan,
              actief: stap === 4 ? toonVerd : stap === 1 ? verd : 0,
              plaatsingen: filmKlaar ? GEEN_PLAATSINGEN : plaatsingen,
              werkend: stap === 4 && !!resultaat && !filmKlaar,
              materiaal: stap === 4 && filmKlaar ? { ...materiaal, vocht: 0 } : materiaal,
              cyclus: CYCLUS,
              filmPlan: filmSeg,
              filmRonde: ronde
            }
          ),
          stap === 3 && wat && /* @__PURE__ */ jsx(Doorsnede, { wat, pd: antwoorden.pd, cd: antwoorden.cd }),
          stap === 4 && resultaat && /* @__PURE__ */ jsx(
            DagTeller,
            {
              segment: filmSeg,
              naam: verdiepingNaam(toonVerd, lagen, dak, taal),
              geplaatst: perLaag[toonVerd] ?? 0,
              dagen: resultaat.dagen,
              water: resultaat.water,
              klaar: filmKlaar
            },
            `${filmSeg?.modus}-${toonVerd}-${resultaat.dagen}-${ronde}-${filmKlaar}-${handmatig}`
          ),
          stap === 4 && resultaat && filmKlaar && /* @__PURE__ */ jsxs("button", { type: "button", className: "ds-herhaal", onClick: opnieuwAfspelen, children: [
            /* @__PURE__ */ jsx("svg", { width: "13", height: "13", viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M2.5 8a5.5 5.5 0 1 0 1.7-4M2.5 2.5v3h3" }) }),
            t.opnieuwAfspelen
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "ds-sfoot", children: [
          stap === 4 && lagen > 1 && /* @__PURE__ */ jsx("div", { className: "ds-tabs", role: "tablist", "aria-label": t.verdieping, children: Array.from({ length: lagen }, (_, v) => {
            const n = perLaag[v] ?? 0;
            return /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                role: "tab",
                "aria-selected": !filmKlaar && toonVerd === v,
                className: !filmKlaar && toonVerd === v ? "on" : void 0,
                onClick: () => {
                  setActief(v);
                  setHandmatig(true);
                  setFilmKlaar(false);
                  setRonde((r) => r + 1);
                },
                children: [
                  verdiepingNaam(v, lagen, dak, taal),
                  /* @__PURE__ */ jsx("small", { children: t.toestelTel(n) })
                ]
              },
              v
            );
          }) }),
          /* @__PURE__ */ jsxs("div", { className: "ds-cart", children: [
            /* @__PURE__ */ jsxs("div", { className: "ds-legend", children: [
              /* @__PURE__ */ jsx("p", { children: t.legende }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("span", { children: [
                  /* @__PURE__ */ jsx("i", { className: "ds-l-droger" }),
                  t.droger
                ] }),
                /* @__PURE__ */ jsxs("span", { children: [
                  /* @__PURE__ */ jsx("i", { className: "ds-l-fan" }),
                  t.ventilator
                ] }),
                /* @__PURE__ */ jsxs("span", { children: [
                  /* @__PURE__ */ jsx("i", { className: "ds-l-kachel" }),
                  t.kachel
                ] }),
                /* @__PURE__ */ jsxs("span", { children: [
                  /* @__PURE__ */ jsx("i", { className: "ds-l-nat" }),
                  t.vocht
                ] })
              ] })
            ] }),
            stap === 4 && /* @__PURE__ */ jsxs("div", { className: "ds-cart-prijs", children: [
              /* @__PURE__ */ jsx("p", { children: t.uwPakket }),
              prijs ? /* @__PURE__ */ jsx("b", { children: prijs.tekst }) : /* @__PURE__ */ jsx("b", { className: "dim", children: t.kop.maatwerk })
            ] })
          ] })
        ] })
      ] })
    ] }) })
  ] });
};
function Foto({ sleutel, children }) {
  const src = fotoVoor(sleutel);
  return src ? /* @__PURE__ */ jsx("img", { className: "ds-foto", src: src.replace(/\.webp$/, "-640.webp"), srcSet: fotoSrcSet(src), sizes: "(max-width: 899px) 45vw, 22vw", alt: "", decoding: "async", ...{ fetchpriority: "high" } }) : /* @__PURE__ */ jsx(Fragment, { children });
}
function woningLagen(n, dak, t) {
  return n === 1 ? t.alleenGelijkvloers : t.gelijkvloersMet(lagenUitleg(n, dak, t));
}
function lagenUitleg(n, dak, t) {
  if (n === 1) return t.gelijkvloers;
  const zolder = isZolder(n - 1, n, dak);
  const verd = n - 1 - (zolder ? 1 : 0);
  return [verd > 0 ? t.plusVerdiep(verd) : "", zolder ? t.plusZolder : ""].filter(Boolean).join(" ");
}
function HuisIcoon({ dak, lagen }) {
  const W = 36, x = 6, lh = 8, y1 = 38, y0 = y1 - lagen * lh;
  return /* @__PURE__ */ jsxs("svg", { className: "ds-hk-ico", viewBox: "0 0 48 42", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx("rect", { className: "muur", x, y: y0, width: W, height: lagen * lh, rx: 1 }),
    Array.from({ length: lagen - 1 }, (_, i) => /* @__PURE__ */ jsx("line", { className: "vloer", x1: x, x2: x + W, y1: y1 - (i + 1) * lh, y2: y1 - (i + 1) * lh }, `v${i}`)),
    Array.from({ length: lagen }, (_, i) => {
      const y = y1 - (i + 1) * lh + 2.5;
      return /* @__PURE__ */ jsxs("g", { children: [
        i === 0 ? /* @__PURE__ */ jsx("rect", { className: "raam", x: x + 5, y: y - 0.5, width: 4, height: lh - 2 }) : /* @__PURE__ */ jsx("rect", { className: "raam", x: x + 5, y, width: 5, height: 3.5 }),
        /* @__PURE__ */ jsx("rect", { className: "raam", x: x + 15, y, width: 5, height: 3.5 }),
        /* @__PURE__ */ jsx("rect", { className: "raam", x: x + 25, y, width: 5, height: 3.5 })
      ] }, `r${i}`);
    }),
    dak === "zadeldak" && /* @__PURE__ */ jsx("path", { className: "dak", d: `M${x - 3} ${y0}L${x + W / 2} ${y0 - 11}L${x + W + 3} ${y0}Z` }),
    dak === "plat" && /* @__PURE__ */ jsx("rect", { className: "dak", x: x - 2, y: y0 - 3, width: W + 4, height: 3 }),
    dak === "lessenaar" && /* @__PURE__ */ jsx("path", { className: "dak", d: `M${x - 3} ${y0}L${x - 3} ${y0 - 10}L${x + W + 3} ${y0 - 2}L${x + W + 3} ${y0}Z` }),
    /* @__PURE__ */ jsx("line", { className: "grond", x1: 2, x2: 46, y1: y1 + 0.8, y2: y1 + 0.8 })
  ] });
}
const LAAG = {
  pd: {
    waarden: PD_VALUES,
    standaard: DEFAULT_PD,
    foto: "/simulator/dikte-pleister-v2.webp",
    fotoKlein: "/simulator/dikte-pleister-v2-360.webp",
    fotoBreedte: 1024,
    fotoPositie: "48% 50%",
    // Vuistregel: ± 1 week per cm zonder droger.
    weken: (cm) => cm
  },
  cd: {
    waarden: CD_VALUES,
    standaard: DEFAULT_CD,
    // Nieuwe bestandsnaam, niet de oude overschreven: zie VERSIE in fotos.ts.
    foto: "/simulator/dikte-chape-v2.webp",
    fotoKlein: "/simulator/dikte-chape-v2-360.webp",
    // Staand 1024×1536: scherp genoeg voor de banner over de volle breedte als chape de enige laag is.
    fotoBreedte: 1024,
    fotoPositie: "50% 72%",
    // Vuistregel: 1 week per cm tot 4 cm, daarboven 2 weken per extra cm.
    weken: (cm) => cm <= 4 ? cm : 4 + 2 * (cm - 4)
  }
};
const Vink = ({ grootte = 10 }) => /* @__PURE__ */ jsx("svg", { width: grootte, height: grootte, viewBox: "0 0 12 12", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M2.5 6.3l2.3 2.3 4.7-5" }) });
function LaagKaart({ laag, gekozen, onKies, solo = false }) {
  const t = useCopy(COPY);
  const L = { ...LAAG[laag], ...t.laag[laag] };
  const droog = gekozen === "geen";
  const onbekend = gekozen === "onbekend";
  const cm = droog ? 0 : Number(onbekend ? L.standaard : gekozen);
  const max = Math.max(...L.waarden.map(Number));
  const weken = L.weken(cm);
  const keuzes = [
    { v: "geen", groot: t.geen, klein: droog ? t.droogKlein : t.nietNat },
    ...L.waarden.map((v) => ({ v, groot: /* @__PURE__ */ jsxs(Fragment, { children: [
      v,
      /* @__PURE__ */ jsx("small", { children: " cm" })
    ] }), klein: v === L.standaard ? t.meest : "" })),
    { v: "onbekend", groot: "?", klein: t.weetNietKlein }
  ];
  const dikte = droog ? /* @__PURE__ */ jsx("span", { className: "ok", children: t.droog }) : /* @__PURE__ */ jsxs(Fragment, { children: [
    onbekend ? "± " : "",
    cm,
    /* @__PURE__ */ jsx("small", { children: " cm" })
  ] });
  return /* @__PURE__ */ jsxs("section", { className: `ds-laagk${droog ? " uit" : ""}${solo ? " ds-laagk--solo" : ""}`, "aria-label": L.titel, children: [
    /* @__PURE__ */ jsxs("figure", { className: "ds-laagk-foto", children: [
      /* @__PURE__ */ jsx("img", { src: L.fotoKlein, srcSet: `${L.fotoKlein} 360w, ${L.foto.replace(/\.webp$/, "-640.webp")} 640w, ${L.foto} ${L.fotoBreedte}w`, sizes: solo ? "(max-width: 899px) 92vw, 640px" : "(max-width: 899px) 30vw, 260px", alt: "", style: { objectPosition: L.fotoPositie }, loading: "lazy", decoding: "async" }),
      droog && /* @__PURE__ */ jsx("span", { className: "ds-laagk-badge", children: t.nietNatBadge }),
      solo ? /* @__PURE__ */ jsxs("figcaption", { className: "ds-laagk-band", children: [
        /* @__PURE__ */ jsxs("span", { children: [
          /* @__PURE__ */ jsx("h3", { children: L.titel }),
          L.onderschrift
        ] }),
        /* @__PURE__ */ jsx("output", { children: dikte })
      ] }) : /* @__PURE__ */ jsxs("figcaption", { children: [
        /* @__PURE__ */ jsx("b", { children: L.titel }),
        L.onderschrift
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "ds-laagk-inh", children: [
      !solo && /* @__PURE__ */ jsxs("div", { className: "ds-laagk-kop", children: [
        /* @__PURE__ */ jsx("h3", { children: L.titel }),
        /* @__PURE__ */ jsx("output", { children: dikte })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "ds-laagk-wat", children: L.wat }),
      /* @__PURE__ */ jsxs("div", { className: "ds-ware", style: { "--max": max }, children: [
        /* @__PURE__ */ jsx("em", { children: t.dikteSleep }),
        /* @__PURE__ */ jsxs("div", { className: "ds-ware-lat", children: [
          /* @__PURE__ */ jsx("i", { style: { width: `${cm / max * 100}%` } }),
          /* @__PURE__ */ jsx(WareSchuif, { laag, cm, max, onKies })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "ds-ware-schaal", children: Array.from({ length: max + 1 }, (_, i) => /* @__PURE__ */ jsx("span", { children: i }, i)) }),
        /* @__PURE__ */ jsxs("div", { className: "ds-ware-droog", "aria-hidden": !droog, children: [
          /* @__PURE__ */ jsx("span", { className: "bol", children: /* @__PURE__ */ jsx(Vink, { grootte: 14 }) }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("b", { children: t.laagDroog(L.titel) }),
            /* @__PURE__ */ jsx("small", { children: t.telNiet })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "ds-dk", role: "radiogroup", "aria-label": t.dikte(L.titel), children: keuzes.map((k) => /* @__PURE__ */ jsxs("button", { type: "button", role: "radio", "aria-checked": gekozen === k.v, className: `${k.v === "geen" ? "geen" : ""}${gekozen === k.v ? " on" : ""}`, onClick: () => onKies(k.v), children: [
        k.v === "geen" && /* @__PURE__ */ jsx("span", { className: "vink", children: /* @__PURE__ */ jsx(Vink, {}) }),
        /* @__PURE__ */ jsx("b", { children: k.groot }),
        /* @__PURE__ */ jsx("i", { children: k.klein || " " })
      ] }, k.v)) }),
      /* @__PURE__ */ jsxs("div", { className: "ds-laagk-info", "aria-live": "polite", children: [
        /* @__PURE__ */ jsxs("span", { className: "tijd", children: [
          droog ? /* @__PURE__ */ jsx("span", { className: "ok-bol", children: /* @__PURE__ */ jsx(Vink, { grootte: 8 }) }) : /* @__PURE__ */ jsxs("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "1.6", "aria-hidden": "true", children: [
            /* @__PURE__ */ jsx("circle", { cx: "8", cy: "8", r: "6.5" }),
            /* @__PURE__ */ jsx("path", { d: "M8 4.5V8l2.4 1.6" })
          ] }),
          /* @__PURE__ */ jsx("span", { children: droog ? laag === "pd" ? t.geenPleister : t.geenChape : /* @__PURE__ */ jsxs(Fragment, { children: [
            t.zonderDroger(weken),
            onbekend && /* @__PURE__ */ jsx("em", { children: t.gerekendMet(cm) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "tip", children: L.tip })
      ] })
    ] })
  ] });
}
function WareSchuif({ laag, cm, max, onKies }) {
  const t = useCopy(COPY);
  const L = { ...LAAG[laag], ...t.laag[laag] };
  const stops = [{ cm: 0, v: "geen" }, ...L.waarden.map((v) => ({ cm: Number(v), v }))];
  const dichtst = (x) => stops.reduce((b, s) => Math.abs(s.cm - x) < Math.abs(b.cm - x) ? s : b, stops[0]);
  const huidig = stops.findIndex((s) => s.cm === cm);
  const naar = (i) => onKies(stops[Math.max(0, Math.min(stops.length - 1, i))].v);
  return /* @__PURE__ */ jsx(
    "input",
    {
      type: "range",
      className: "ds-ware-schuif",
      min: 0,
      max,
      step: 0.05,
      value: cm,
      "aria-label": t.dikteCm(L.titel),
      "aria-valuetext": cm === 0 ? t.nietNat : `${cm} cm`,
      onChange: (e) => {
        const s = dichtst(Number(e.target.value));
        if (s.cm !== cm) onKies(s.v);
      },
      onKeyDown: (e) => {
        const d = e.key === "ArrowRight" || e.key === "ArrowUp" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowDown" ? -1 : 0;
        if (!d) return;
        e.preventDefault();
        naar((huidig < 0 ? stops.indexOf(dichtst(cm)) : huidig) + d);
      }
    }
  );
}
function Doorsnede({ wat, pd, cd }) {
  const t = useCopy(COPY);
  const p = Number(pd.replace(",", ".")) || 2;
  const c = Number(cd.replace(",", ".")) || 6;
  const muur = wat !== "chape";
  const vloer = wat !== "pleister";
  const k = 4;
  return /* @__PURE__ */ jsxs("figure", { className: "ds-detail", "aria-label": t.doorsnede, children: [
    /* @__PURE__ */ jsx("figcaption", { children: t.detailA }),
    /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 150 110", children: [
      /* @__PURE__ */ jsx("rect", { x: "20", y: "8", width: "30", height: "72", fill: "#c9bfb2" }),
      Array.from({ length: 6 }, (_, i) => /* @__PURE__ */ jsx("line", { x1: "20", x2: "50", y1: 8 + i * 12, y2: 8 + i * 12, stroke: "#a89c8d", strokeWidth: "0.6" }, i)),
      /* @__PURE__ */ jsx("rect", { x: "50", y: "8", width: p * k, height: "72", fill: muur ? "#6f8fab" : "#ddd6cb" }),
      /* @__PURE__ */ jsx("rect", { x: "20", y: "88", width: "125", height: "14", fill: "#b9b0a3" }),
      /* @__PURE__ */ jsx("rect", { x: "20", y: 88 - c * k * 0.5, width: "125", height: c * k * 0.5, fill: vloer ? "#6f8fab" : "#c9c2b6" }),
      muur && /* @__PURE__ */ jsxs("g", { className: "ds-maat", children: [
        /* @__PURE__ */ jsx("line", { x1: "50", x2: 50 + p * k, y1: "4", y2: "4" }),
        /* @__PURE__ */ jsx("text", { x: 52 + p * k, y: "6", children: t.cmPleister(pd.replace(".", ",")) })
      ] }),
      vloer && /* @__PURE__ */ jsxs("g", { className: "ds-maat", children: [
        /* @__PURE__ */ jsx("line", { x1: "140", x2: "140", y1: 88 - c * k * 0.5, y2: "88" }),
        /* @__PURE__ */ jsx("text", { x: "138", y: 84 - c * k * 0.5, textAnchor: "end", children: t.cmChape(cd) })
      ] })
    ] })
  ] });
}
function DagTeller({ segment, naam, geplaatst, dagen, water, klaar }) {
  const t = useCopy(COPY);
  const taal = useTaal();
  const [k, setK] = useState(klaar || !segment ? 1 : 0);
  useEffect(() => {
    if (klaar || !segment || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setK(1);
      return;
    }
    let start = filmStatus.wacht ? Infinity : performance.now();
    const opStart = (e) => {
      start = e.detail;
    };
    const opWacht = () => {
      start = Infinity;
    };
    window.addEventListener(FILM_START, opStart);
    window.addEventListener(FILM_WACHT, opWacht);
    const id = window.setInterval(() => setK(voortgangNa(segment, Math.max(0, (performance.now() - start) / 1e3))), 120);
    return () => {
      window.clearInterval(id);
      window.removeEventListener(FILM_START, opStart);
      window.removeEventListener(FILM_WACHT, opWacht);
    };
  }, [segment, klaar]);
  if (!klaar && segment?.modus === "plaatsen") {
    return /* @__PURE__ */ jsxs("div", { className: "ds-teller", children: [
      /* @__PURE__ */ jsxs("span", { children: [
        /* @__PURE__ */ jsx("b", { children: Math.floor(k * geplaatst + 1e-6) }),
        t.vanGeplaatst(geplaatst)
      ] }),
      /* @__PURE__ */ jsx("div", { className: "ds-meter ds-meter--plaats", "aria-hidden": "true", children: /* @__PURE__ */ jsx("i", { style: { width: `${Math.max(3, k * 100)}%` } }) }),
      /* @__PURE__ */ jsx("small", { children: naam })
    ] });
  }
  const dag = klaar || !segment ? dagen : Math.max(1, Math.floor(segment.dagVan + (segment.dagTot - segment.dagVan) * k + 1e-6));
  const alles = dag >= dagen;
  const laagDroog = !klaar && !!segment && k >= 1;
  return /* @__PURE__ */ jsxs("div", { className: "ds-teller", children: [
    /* @__PURE__ */ jsxs("span", { children: [
      t.dag,
      " ",
      /* @__PURE__ */ jsx("b", { children: dag }),
      t.van(dagen)
    ] }),
    /* @__PURE__ */ jsx("div", { className: alles ? "ds-meter ds-meter--droog" : "ds-meter", "aria-hidden": "true", children: /* @__PURE__ */ jsx("i", { style: { width: alles ? "100%" : `${Math.max(3, (1 - dag / dagen) * 100)}%` } }) }),
    /* @__PURE__ */ jsx("small", { children: alles ? t.allesDroog : t.droogt(naam) }),
    /* @__PURE__ */ jsxs("p", { className: "ds-liter", children: [
      /* @__PURE__ */ jsx("b", { children: Math.round(dag / dagen * water).toLocaleString(NUMBER_LOCALE[taal]) }),
      t.afgevoerd
    ] }),
    laagDroog && /* @__PURE__ */ jsxs("div", { className: "ds-stempel", "aria-hidden": "true", children: [
      t.stempel,
      /* @__PURE__ */ jsx("small", { children: t.stempelDag(naam, segment.dagTot) })
    ] })
  ] });
}
const VerhuurSimulatorPage$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: VerhuurSimulatorPage
}, Symbol.toStringTag, { value: "Module" }));
export {
  FILM_START as F,
  GEEN_PLAN as G,
  HC as H,
  SLAB as S,
  TOESTEL_MODEL as T,
  VAL as V,
  WONING as W,
  aanVoortgang as a,
  FILM_WACHT as b,
  FH as c,
  droogStand as d,
  H as e,
  filmStatus as f,
  aankomst as g,
  TEXTUUR as h,
  T as i,
  TI as j,
  kamerNaam as k,
  VerhuurSimulatorPage$1 as l,
  nokHoogte as n,
  stuit as s,
  toestelTijd as t,
  useReducedMotion as u,
  woningTekst as w
};
