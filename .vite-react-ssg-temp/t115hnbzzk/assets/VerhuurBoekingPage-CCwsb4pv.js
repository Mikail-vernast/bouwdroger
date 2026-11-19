import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useId, useState, useRef, useMemo, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { Link, useSearchParams } from "react-router-dom";
import { CheckoutElementsProvider } from "@stripe/react-stripe-js/checkout";
import { P as PageMeta, C as CONTACT } from "./PageMeta-BXulEWcY.js";
import { S as STRIPE_APPEARANCE, B as BoekingBetaalformulier } from "./stripeAppearance-DVUcXAUA.js";
import { u as useCopy, b as useTaal, a as useLokaalPad, h as formatEuro, N as NUMBER_LOCALE } from "../main.mjs";
import { l as V3Header } from "./V3Header-BeIMcMg7.js";
import { V as V3Footer } from "./V3Footer-9z4J1I4x.js";
import { a as maskPhone, m as maskEmail, i as isValidEmail, b as isValidPhone } from "./inputMask-BnLinOtl.js";
import { C as CheckIcon, b as CrossIcon, A as ArrowRightIcon, c as DropIcon, B as BoltIcon, d as ReportIcon, P as PulseIcon, e as PumpIcon, S as StairsIcon, W as WarnIcon, f as CalendarCheckIcon, T as TruckIcon } from "./icons-DYrN4MjJ.js";
import { L as LADDER_FEE, D as DELIVERY, b as PUMP, M as MAX_FLOORS, e as CAT } from "./verhuur-CgnDb-wO.js";
import { j as parseConfig, u as isoDate, s as addDays, o as dryingDays, c as configWeeks, a as euro, l as configToQuery, D as DEVICE_KEYS, v as formatLongDate, q as packageImage, b as allItems, w as packageTitle } from "./verhuur-8XCQs1EE.js";
import { a as extraUitQuery, b as bookingSummary, w as withVat, e as extraNaarQuery, O as ONLINE_DISCOUNT, M as MAX_EXTRA_DEVICES, c as bookingFingerprint, D as DEPOSIT_GROSS } from "./booking-CFp-lxcW.js";
import { l as leverzoneUitQuery, G as GRATIS_LEVERING_VOETNOOT } from "./levering-CO7G5c_f.js";
import { u as useSeo } from "./seo-BMvlJeai.js";
import { v as vertaalPortaal, c as coverInTaal, e as extrasInTaal, f as deliveryInTaal, a as catInTaal, d as packageSpecLineInTaal } from "./verhuur.fr-CrIPL5Eo.js";
/* empty css                       */
/* empty css                          */
import { r as reportBookingEvent } from "./reportBookingEvent-DNN9fzqH.js";
import "vite-react-ssg";
import "lucide-react";
import "./FontPreload-C6Rzq6ld.js";
import "./tarieven-ZrzMF0e-.js";
import "./packages-DdkKuPcF.js";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/lib/plaatsZoeker.ts");
const LANDEN = ["BE", "NL"];
function normaliseer(s) {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}
const gewichten = /* @__PURE__ */ new WeakMap();
function gewicht(lijst, naam) {
  let m = gewichten.get(lijst);
  if (!m) {
    m = /* @__PURE__ */ new Map();
    for (const [n] of lijst) m.set(n, (m.get(n) ?? 0) + 1);
    gewichten.set(lijst, m);
  }
  return m.get(naam) ?? 0;
}
function hoofdnaam(lijst, postcode) {
  let beste = null;
  for (const [n, p] of lijst) {
    if (p !== postcode) continue;
    if (beste === null || gewicht(lijst, n) > gewicht(lijst, beste)) beste = n;
  }
  return beste;
}
function zoekPlaatsen(lijst, invoer, max = 7) {
  const q = normaliseer(invoer);
  if (!q) return [];
  if (/^\d+$/.test(q)) {
    if (q.length > 4) return [];
    const uit = [];
    const gezien = /* @__PURE__ */ new Set();
    for (const land of LANDEN) {
      for (const [, p] of lijst[land]) {
        if (!p.startsWith(q) || gezien.has(land + p)) continue;
        gezien.add(land + p);
        uit.push({ land, postcode: p, naam: hoofdnaam(lijst[land], p) ?? "" });
      }
    }
    return uit.sort((a, b) => a.postcode.localeCompare(b.postcode) || a.land.localeCompare(b.land)).slice(0, max);
  }
  const kandidaten = /* @__PURE__ */ new Map();
  for (const land of LANDEN) {
    for (const [naam, postcode] of lijst[land]) {
      const n = normaliseer(naam);
      let score;
      if (n === q) score = 0;
      else if (n.startsWith(q)) score = 1;
      else if (n.split(" ").some((w) => w.startsWith(q))) score = 2;
      else continue;
      const sleutel = `${land}|${naam}`;
      const bestaand = kandidaten.get(sleutel);
      if (!bestaand || postcode < bestaand.postcode) {
        kandidaten.set(sleutel, { land, postcode, naam, score, gewicht: gewicht(lijst[land], naam) });
      }
    }
  }
  return [...kandidaten.values()].sort(
    (a, b) => a.score - b.score || b.gewicht - a.gewicht || a.naam.length - b.naam.length || a.naam.localeCompare(b.naam, "nl") || a.land.localeCompare(b.land)
  ).slice(0, max).map(({ land, postcode, naam }) => ({ land, postcode, naam }));
}
function herkenPlaats(lijst, invoer) {
  const q = normaliseer(invoer);
  if (!q) return null;
  if (/^\d{4}$/.test(q)) {
    const land = LANDEN.find((l) => lijst[l].some(([, p]) => p === q));
    if (!land) return null;
    return { land, postcode: q, naam: hoofdnaam(lijst[land], q) ?? "" };
  }
  let beste = null;
  for (const land of LANDEN) {
    let pc = null;
    let naam = "";
    for (const [n, p] of lijst[land]) {
      if (normaliseer(n) !== q) continue;
      if (pc === null || p < pc) {
        pc = p;
        naam = n;
      }
    }
    if (pc === null) continue;
    const g = gewicht(lijst[land], naam);
    if (!beste || g > beste.gewicht) beste = { land, postcode: pc, naam, gewicht: g };
  }
  return beste ? { land: beste.land, postcode: beste.postcode, naam: beste.naam } : null;
}
function plaatsLabel(p) {
  return p.naam ? `${p.naam} (${p.postcode})` : p.postcode;
}
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/verhuur/LeverplaatsZoeker.tsx");
const COPY = {
  nl: {
    landLabel: "Land",
    label: "Gemeente of postcode van de werf",
    placeholder: { BE: "bv. Hemiksem of 2620", NL: "bv. Breda of 4811" },
    laden: "Plaatsen laden…",
    geen: "Geen plaats gevonden. Controleer de spelling of typ de postcode.",
    land: { BE: "België", NL: "Nederland" }
  },
  fr: {
    landLabel: "Pays",
    label: "Commune ou code postal du chantier",
    placeholder: { BE: "p. ex. Hemiksem ou 2620", NL: "p. ex. Breda ou 4811" },
    laden: "Chargement des localités…",
    geen: "Aucune localité trouvée. Vérifiez l'orthographe ou tapez le code postal.",
    land: { BE: "Belgique", NL: "Pays-Bas" }
  },
  en: {
    landLabel: "Country",
    label: "Town or postcode of the site",
    placeholder: { BE: "e.g. Hemiksem or 2620", NL: "e.g. Breda or 4811" },
    laden: "Loading places…",
    geen: "No place found. Check the spelling or type the postcode.",
    land: { BE: "Belgium", NL: "Netherlands" }
  }
};
let lijstBelofte = null;
function laadLijst() {
  lijstBelofte ??= (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/plaatsen.ts"), import("./plaatsen-D7HdpUAW.js")).then((m) => m.PLAATSEN);
  return lijstBelofte;
}
function inLand(lijst, land) {
  return land === "BE" ? { BE: lijst.BE, NL: [] } : { BE: [], NL: lijst.NL };
}
const LeverplaatsZoeker = ({ waarde, land, onLand, onKies }) => {
  const t = useCopy(COPY);
  const id = useId();
  const [tekst, setTekst] = useState(() => waarde ? plaatsLabel(waarde) : "");
  const [lijst, setLijst] = useState(null);
  const [open, setOpen] = useState(false);
  const [actief, setActief] = useState(0);
  const wrap = useRef(null);
  const deel = useMemo(() => lijst ? inLand(lijst, land) : null, [lijst, land]);
  useEffect(() => {
    if (waarde && !waarde.naam) laadLijst().then(setLijst);
  }, [waarde]);
  useEffect(() => {
    if (!waarde || waarde.naam || !deel) return;
    const gevonden = herkenPlaats(deel, waarde.postcode);
    if (gevonden) {
      setTekst(plaatsLabel(gevonden));
      onKies(gevonden);
    }
  }, [waarde, deel, onKies]);
  useEffect(() => {
    const dicht = (e) => {
      if (wrap.current && !wrap.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", dicht);
    return () => document.removeEventListener("mousedown", dicht);
  }, []);
  const suggesties = deel ? zoekPlaatsen(deel, tekst) : [];
  const kies = (p) => {
    setTekst(plaatsLabel(p));
    setOpen(false);
    onKies(p);
  };
  const herken = (invoer, l) => {
    if (lijst) {
      onKies(herkenPlaats(inLand(lijst, l), invoer));
      return;
    }
    laadLijst().then((geladen) => {
      setLijst(geladen);
      onKies(herkenPlaats(inLand(geladen, l), invoer));
    });
  };
  const typ = (nieuw) => {
    setTekst(nieuw);
    setOpen(true);
    setActief(0);
    herken(nieuw, land);
  };
  const wisselLand = (nieuw) => {
    onLand(nieuw);
    const invoer = waarde && tekst === plaatsLabel(waarde) ? waarde.naam || waarde.postcode : tekst;
    setTekst(invoer);
    if (invoer.trim()) {
      setOpen(true);
      herken(invoer, nieuw);
    }
  };
  const toets = (e) => {
    if (!open || suggesties.length === 0) {
      if (e.key === "ArrowDown") setOpen(true);
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActief((i) => Math.min(i + 1, suggesties.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActief((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      kies(suggesties[actief]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };
  const lijstId = `${id}-lijst`;
  const toonLijst = open && tekst.trim().length > 0 && !(waarde && tekst === plaatsLabel(waarde));
  return /* @__PURE__ */ jsxs("div", { className: "lpz", ref: wrap, children: [
    /* @__PURE__ */ jsxs("div", { className: "lpz-land", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: `${id}-land`, children: t.landLabel }),
      /* @__PURE__ */ jsxs("select", { id: `${id}-land`, value: land, onChange: (e) => wisselLand(e.target.value), children: [
        /* @__PURE__ */ jsx("option", { value: "BE", children: t.land.BE }),
        /* @__PURE__ */ jsx("option", { value: "NL", children: t.land.NL })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "lpz-veld", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: id, children: t.label }),
      /* @__PURE__ */ jsx(
        "input",
        {
          id,
          type: "text",
          role: "combobox",
          "aria-expanded": toonLijst,
          "aria-controls": lijstId,
          "aria-autocomplete": "list",
          "aria-activedescendant": toonLijst && suggesties[actief] ? `${lijstId}-${actief}` : void 0,
          autoComplete: "off",
          placeholder: t.placeholder[land],
          value: tekst,
          onFocus: () => {
            laadLijst().then(setLijst);
            setOpen(true);
          },
          onChange: (e) => typ(e.target.value),
          onKeyDown: toets
        }
      ),
      toonLijst && /* @__PURE__ */ jsx("ul", { className: "lpz-lijst", id: lijstId, role: "listbox", children: !deel ? /* @__PURE__ */ jsx("li", { className: "lpz-leeg", children: t.laden }) : suggesties.length === 0 ? /* @__PURE__ */ jsx("li", { className: "lpz-leeg", children: t.geen }) : suggesties.map((p, i) => /* @__PURE__ */ jsxs(
        "li",
        {
          id: `${lijstId}-${i}`,
          role: "option",
          "aria-selected": i === actief,
          className: i === actief ? "on" : void 0,
          onMouseEnter: () => setActief(i),
          onMouseDown: (e) => {
            e.preventDefault();
            kies(p);
          },
          children: [
            /* @__PURE__ */ jsx("b", { children: p.naam || p.postcode }),
            /* @__PURE__ */ jsx("span", { children: p.postcode })
          ]
        },
        `${p.land}${p.postcode}${p.naam}`
      )) })
    ] })
  ] });
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/verhuur/VerhuurBoekingPage.copy.tsx");
const nl = {
  volgende: {
    1: "Verder naar extra's",
    2: "Verder naar datum",
    3: "Verder naar gegevens",
    4: "Boeking bevestigen"
  },
  verder: "Verder",
  beschikbaarheidLaden: "Beschikbaarheid nakijken…",
  datesError: "We kunnen op dit moment niet nakijken welke datums nog vrij zijn. U kunt gewoon verder, wij bevestigen uw leverdatum, of bel ons op 03 689 90 65.",
  geannuleerd: "De betaling is geannuleerd. Uw keuzes staan nog klaar.",
  nietTeruggevonden: "We konden deze betaling niet terugvinden bij Stripe. Uw keuzes staan nog klaar, probeer gerust opnieuw af te rekenen, of bel ons op 03 689 90 65.",
  statusNietOpgehaald: "De betaalstatus kon niet opgehaald worden. Probeer opnieuw.",
  nietGestart: "De betaling kon niet gestart worden.",
  geenVerbinding: "Geen verbinding met de betaalserver. Probeer het opnieuw.",
  teVeel: "Te veel aanvragen. Probeer het over een minuut opnieuw.",
  dekkingKop: "Kies uw dekking",
  dekkingSub: "Werfmateriaal loopt risico op schade, diefstal of vertraging. Kies hoeveel u zelf wilt dragen, net zoals bij een huurwagen.",
  inbegrepen: "Inbegrepen",
  eenmalig: "eenmalig, voor de volledige huur",
  inPakketprijs: "zit in uw pakketprijs",
  gekozen: "Gekozen",
  selecteer: "Selecteer",
  terugNaarPakket: "Terug naar het pakket",
  verderExtras: "Verder naar extra's",
  extrasKop: "Standaard inbegrepen & extra zekerheid",
  extrasSub: /* @__PURE__ */ jsxs(Fragment, { children: [
    "De professionele vochtmeting vóór de start én bij oplevering zit ",
    /* @__PURE__ */ jsx("b", { children: "standaard" }),
    " bij elke huur, zo weet u zeker dat alles droog is. Heeft u daar een officieel document van nodig, dan stellen wij dat op."
  ] }),
  vochtmetingKop: "Vochtmeting voor & na",
  vochtmetingSub: "Meting van muren, chape en luchtvochtigheid bij levering en bij oplevering, bij elk pakket.",
  inbegrepenTag: "✓ Inbegrepen",
  toegevoegd: "Toegevoegd",
  toevoegen: "Toevoegen",
  monitoringKop: "Digitale monitoring",
  binnenkort: "Binnenkort",
  monitoringSub: "Al onze toestellen krijgen digitale opvolging: u volgt de luchtvochtigheid en droogvoortgang binnenkort live online op, zonder meerkost, automatisch op elk toestel.",
  fotoVergroten: "Foto van uw pakket vergroten",
  fotoSluiten: "Sluiten",
  pompKop: "Condenspomp, automatische waterafvoer",
  pompSub: /* @__PURE__ */ jsxs(Fragment, { children: [
    "Zonder pomp moet u elke bouwdroger ",
    /* @__PURE__ */ jsx("b", { children: "gemiddeld twee keer per dag" }),
    " leegmaken. Met een condenspomp wordt het water automatisch afgevoerd en werkt de bouwdroger gewoon door, zonder te stoppen."
  ] }),
  pompNaam: "Bouwdrogers met condenspomp",
  pompAantal: (pompen, bouwdrogers) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("b", { children: [
      pompen,
      " van de ",
      bouwdrogers
    ] }),
    " ",
    "bouwdroger",
    bouwdrogers === 1 ? "" : "s",
    " uit uw pakket. Wij vullen ze standaard allemaal in."
  ] }),
  perPompDag: "per bouwdroger / dag",
  pompMinder: "Eén bouwdroger minder met een condenspomp",
  pompMeer: "Eén bouwdroger meer met een condenspomp",
  pompInfoKnop: "Meer uitleg over de condenspomp",
  pompInfoTitel: "Zo werkt de condenspomp",
  pompInfo: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("p", { children: [
      "Een bouwdroger vangt het water uit de lucht op in zijn reservoir. Is dat vol, dan schakelt hij zichzelf uit en staat hij stil tot iemand het leegmaakt, ",
      /* @__PURE__ */ jsx("b", { children: "gemiddeld twee keer per dag" }),
      ". Een weekend zonder legen is een weekend droogtijd kwijt."
    ] }),
    /* @__PURE__ */ jsx("p", { children: "De condenspomp hangt aan de bouwdroger en pompt het water via een slang naar een afvoer, gootsteen of putje, ook als die hoger ligt. Het is zuiver condenswater en mag gewoon in de afvoer. Onze technieker legt de slang bij de plaatsing." })
  ] }),
  pompFotoAlt: "Condenspomp op een bouwdroger, met de afvoerslang naar een putje",
  pompMeerLink: "Alles over de condenspomp",
  verdiepingKop: "Op welke verdieping werken we?",
  verdiepingSub: (ladderFee) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "Plaatsing op een verdieping is ",
    /* @__PURE__ */ jsx("b", { children: "inbegrepen in de prijs" }),
    " zolang er een trap aanwezig is. Moeten de toestellen via een ladder naar boven gedragen worden, dan rekenen wij eenmalig",
    " ",
    ladderFee,
    " extra draagwerk aan."
  ] }),
  verdiepingenKop: "Aantal verdiepingen",
  verdiepingenSub: "Gelijkvloers = 0. Wij dragen en plaatsen alle toestellen op de juiste verdieping.",
  verdiepingMinder: "Eén verdieping minder",
  verdiepingMeer: "Eén verdieping meer",
  hoeBoven: "Hoe geraken we boven?",
  viaTrap: "Via de trap",
  viaLadder: "Via een ladder",
  ladderEenmalig: (ladderFee) => `+ ${ladderFee} eenmalig`,
  extraToestellenKop: "Extra toestellen",
  extraToestellenSub: "Meer capaciteit betekent kortere droogtijd. Onze technicus bekijkt het bij levering en u betaalt enkel wat u gebruikt.",
  per2Weken: "per 2 weken",
  eenMinder: "Eén minder",
  eenMeer: "Eén meer",
  terug: "Terug",
  verderDatum: "Verder naar datum",
  leveringKop: "Levering & installatie",
  leveringSub: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "Pakketten worden altijd door ons geleverd, geplaatst en afgesteld, alleen zo kunnen wij de 100% droog-garantie waarmaken. Zelf afhalen kan enkel bij",
    " ",
    /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/afhalen"), style: { color: "var(--red)", fontWeight: 600 }, children: "losse toestellen" }),
    ", tegen een lagere afhaalprijs."
  ] }),
  leverdatumKop: "Kies uw leverdatum",
  leverdatumSub: "Kies een dag in onze agenda. Op basis van de droogtijd van dit pakket plannen wij de ophaling automatisch mee in, u hoeft daar niets voor te doen.",
  leverdatum: "Leverdatum",
  tijdslotLevering: "Tijdslot levering",
  huurperiodeVast: "Huurperiode (vast per pakket)",
  huurperiodeDagen: (dagen) => `${dagen} dagen`,
  huurperiodeInbegrepen: "inbegrepen in de pakketprijs",
  huurperiodeWaarde: (dagen) => `${dagen} dagen, inbegrepen in de pakketprijs`,
  datumVol: (datum, binnenHorizon, horizon) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "Op ",
    /* @__PURE__ */ jsx("b", { children: datum }),
    " staan onze toestellen voor dit pakket al ingepland",
    binnenHorizon ? `, en de komende ${horizon} dagen komt er niets vrij` : "",
    ". Kies een andere dag hierboven, of bel ons op 03 689 90 65, vaak kunnen we schuiven."
  ] }),
  datumVerschoven: (van, naar) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "Op ",
    /* @__PURE__ */ jsx("b", { children: van }),
    " staan onze toestellen voor dit pakket al ingepland. Wij hebben uw leverdatum daarom verzet naar de eerstvolgende vrije dag: ",
    /* @__PURE__ */ jsx("b", { children: naar }),
    ". Een andere dag kiezen kan gewoon hierboven."
  ] }),
  planning: ({ start, slot, dagen, einde, droogtijd }) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "Wij leveren en installeren op ",
    /* @__PURE__ */ jsx("b", { children: start }),
    " tussen ",
    /* @__PURE__ */ jsx("b", { children: slot }),
    ". Uw vaste huurperiode van",
    " ",
    /* @__PURE__ */ jsxs("b", { children: [
      dagen,
      " dagen"
    ] }),
    " loopt tot ",
    /* @__PURE__ */ jsx("b", { children: einde }),
    ", de ophaling staat automatisch ingepland op die dag, tussen ",
    /* @__PURE__ */ jsx("b", { children: slot }),
    ". Verwachte droogtijd van dit pakket: ",
    /* @__PURE__ */ jsxs("b", { children: [
      droogtijd,
      " dagen"
    ] }),
    "."
  ] }),
  teKort: "Korter dan de verwachte droogtijd, verlengen kan later met één klik.",
  ophaaldatum: "Ophaaldatum (automatisch)",
  tijdslotOphaling: "Tijdslot ophaling",
  verderGegevens: "Verder naar gegevens",
  gegevensKop: "Uw gegevens",
  gegevensSub: "Wij gebruiken dit om de levering te plannen en u de bevestiging te sturen.",
  particulier: "Particulier",
  professioneel: "Professioneel",
  naam: "Voornaam en naam",
  naamPlaceholder: "Jan Peeters",
  telefoon: "Telefoon",
  email: "E-mailadres",
  emailPlaceholder: "jan@voorbeeld.be",
  bedrijfsnaam: "Bedrijfsnaam",
  bedrijfPlaceholder: "Bouwbedrijf bv",
  btwNummer: "Btw-nummer",
  adresWerf: "Adres werf",
  adresPlaceholder: "Straat en nummer",
  postcode: "Postcode",
  postcodePlaceholder: "2630",
  gemeente: "Gemeente",
  gemeentePlaceholder: "Aartselaar",
  betalenKop: "Hoe wilt u betalen?",
  korting: "5% korting",
  volledigOnline: "Volledig online betalen",
  volledigOnlineUitleg: "Betaal nu met Bancontact, kaart, Apple Pay of iDEAL. U krijgt 5% korting op uw volledige pakket en uw factuur staat meteen in uw mailbox.",
  uBespaart: (bedrag) => `U bespaart ${bedrag}`,
  voorschotKop: (bedrag) => `${bedrag} nu, rest bij levering`,
  voorschotUitleg: (bedrag) => `Bevestig uw boeking met ${bedrag}. Het saldo scant en betaalt u ter plaatse bij levering: Bancontact, kaart of Apple Pay.`,
  factuurNaBetaling: "Factuur na volledige betaling",
  akkoord: "Ik ga akkoord met de algemene voorwaarden en geef Vernast toestemming om mij over deze boeking te contacteren.",
  voorbereiden: "Betaling voorbereiden…",
  naarBetaling: (bedrag) => `Naar de betaling · ${bedrag}`,
  betaalKop: "Betaal uw boeking",
  betaalSub: (bedrag) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "U betaalt ",
    /* @__PURE__ */ jsx("b", { children: bedrag }),
    " met Apple Pay, Bancontact, kaart, iDEAL of Klarna. De betaling loopt beveiligd via Stripe, wij zien uw kaartgegevens nooit."
  ] }),
  vastgelegd: (datum, slot) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "Uw levering op ",
    /* @__PURE__ */ jsx("b", { children: datum }),
    " tussen ",
    /* @__PURE__ */ jsx("b", { children: slot }),
    " wordt vastgelegd zodra de betaling bevestigd is."
  ] }),
  terugGegevens: "Terug naar mijn gegevens",
  geduldKop: "Even geduld",
  geduldSub: "We bevestigen uw betaling. Sluit dit venster niet.",
  vastKop: "Uw boeking staat vast",
  vastSub: (voorschot) => `Wij bevestigen uw levering telefonisch binnen één werkdag. Betaalde u volledig online, dan staat uw factuur meteen in uw mailbox, met 5% korting. Koos u voor ${voorschot} bevestiging, dan betaalt u het saldo bij levering.`,
  referentie: "Referentie",
  levering: "Levering",
  huurperiode: "Huurperiode",
  tem: "t.e.m.",
  dagen: "dagen",
  betaald: "Betaald",
  nogTeBetalen: "Nog te betalen bij levering",
  naarHome: "Naar de homepage",
  offerteVraag: "Vraag uw transportprijs aan",
  offerteVersturen: "Aanvraag versturen…",
  offerteVerstuurd: "Aanvraag verstuurd",
  uwDroogpakket: "Uw droogpakket",
  uwPakket: "Uw pakket",
  pakketRegel: (toestellen, weken) => `Pakket · ${toestellen} toestellen · ${weken} weken`,
  leveringRegel: "Levering, installatie & ophaling",
  plaatsingRegel: "Plaatsing & afstelling ter plaatse",
  transportRegel: (band) => `Transport ${band}`,
  opMaat: "Op maat",
  huurprijsExcl: "Huurprijs excl. btw",
  kortingOnline: "Korting online betalen (5%)",
  btw: "Btw 21%",
  totaalIncl: "Totaal incl. btw",
  perWeek: (bedrag) => `${bedrag} per week incl. btw`,
  noot: "5% korting bij online betalen · dagelijks opzegbaar"
};
const fr = {
  volgende: {
    1: "Continuer vers les extras",
    2: "Continuer vers la date",
    3: "Continuer vers vos coordonnées",
    4: "Confirmer la réservation"
  },
  verder: "Continuer",
  beschikbaarheidLaden: "Vérification des disponibilités…",
  datesError: "Nous ne pouvons pas vérifier pour le moment quelles dates sont encore libres. Vous pouvez simplement continuer, nous confirmerons votre date de livraison, ou appelez-nous au 03 689 90 65.",
  geannuleerd: "Le paiement a été annulé. Vos choix sont toujours enregistrés.",
  nietTeruggevonden: "Nous n'avons pas retrouvé ce paiement chez Stripe. Vos choix sont toujours enregistrés : vous pouvez réessayer de payer, ou appelez-nous au 03 689 90 65.",
  statusNietOpgehaald: "Le statut du paiement n'a pas pu être récupéré. Réessayez.",
  nietGestart: "Le paiement n'a pas pu démarrer.",
  geenVerbinding: "Pas de connexion avec le serveur de paiement. Réessayez.",
  teVeel: "Trop de demandes. Réessayez dans une minute.",
  dekkingKop: "Choisissez votre couverture",
  dekkingSub: "Le matériel de chantier court un risque de dégâts, de vol ou de retard. Choisissez la part que vous voulez assumer vous-même, comme pour une voiture de location.",
  inbegrepen: "Inclus",
  eenmalig: "une seule fois, pour toute la location",
  inPakketprijs: "compris dans le prix de votre pack",
  gekozen: "Choisi",
  selecteer: "Choisir",
  terugNaarPakket: "Retour au pack",
  verderExtras: "Continuer vers les extras",
  extrasKop: "Inclus d'office & sécurité supplémentaire",
  extrasSub: /* @__PURE__ */ jsxs(Fragment, { children: [
    "La mesure d'humidité professionnelle avant le début et à la fin est ",
    /* @__PURE__ */ jsx("b", { children: "incluse d'office" }),
    " dans chaque location : vous êtes ainsi certain que tout est sec. Si vous avez besoin d'un document officiel, nous l'établissons pour vous."
  ] }),
  vochtmetingKop: "Mesure d'humidité avant & après",
  vochtmetingSub: "Mesure des murs, de la chape et de l'humidité de l'air à la livraison et à la fin, avec chaque pack.",
  inbegrepenTag: "✓ Inclus",
  toegevoegd: "Ajouté",
  toevoegen: "Ajouter",
  monitoringKop: "Suivi numérique",
  binnenkort: "Bientôt",
  monitoringSub: "Tous nos appareils seront bientôt suivis numériquement : vous suivrez l'humidité de l'air et l'avancement du séchage en direct en ligne, sans supplément, automatiquement sur chaque appareil.",
  fotoVergroten: "Agrandir la photo de votre pack",
  fotoSluiten: "Fermer",
  pompKop: "Pompe à condensats, évacuation automatique de l'eau",
  pompSub: /* @__PURE__ */ jsxs(Fragment, { children: [
    "Sans pompe, vous devez vider chaque déshumidificateur ",
    /* @__PURE__ */ jsx("b", { children: "en moyenne deux fois par jour" }),
    ". Avec une pompe à condensats, l'eau est évacuée automatiquement et le déshumidificateur continue de tourner, sans s'arrêter."
  ] }),
  pompNaam: "Déshumidificateurs avec pompe à condensats",
  pompAantal: (pompen, bouwdrogers) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("b", { children: [
      pompen,
      " sur ",
      bouwdrogers
    ] }),
    " ",
    "déshumidificateur",
    bouwdrogers === 1 ? "" : "s",
    " de votre pack. Nous les cochons tous d'office."
  ] }),
  perPompDag: "par déshumidificateur / jour",
  pompMinder: "Un déshumidificateur de moins avec pompe",
  pompMeer: "Un déshumidificateur de plus avec pompe",
  pompInfoKnop: "Plus d'explications sur la pompe à condensats",
  pompInfoTitel: "Comment fonctionne la pompe à condensats",
  pompInfo: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("p", { children: [
      "Un déshumidificateur recueille l'eau de l'air dans son réservoir. Quand celui-ci est plein, il s'arrête jusqu'à ce que quelqu'un le vide, ",
      /* @__PURE__ */ jsx("b", { children: "en moyenne deux fois par jour" }),
      ". Un week-end sans vidange, c'est un week-end de séchage perdu."
    ] }),
    /* @__PURE__ */ jsx("p", { children: "La pompe se fixe au déshumidificateur et évacue l'eau par un tuyau vers une évacuation, un évier ou un siphon de sol, même situé plus haut. C'est de l'eau de condensation pure, elle peut aller à l'égout. Notre technicien pose le tuyau lors de l'installation." })
  ] }),
  pompFotoAlt: "Pompe à condensats sur un déshumidificateur, avec le tuyau vers un siphon",
  pompMeerLink: "Tout sur la pompe à condensats",
  verdiepingKop: "À quel étage travaillons-nous ?",
  verdiepingSub: (ladderFee) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "L'installation à l'étage est ",
    /* @__PURE__ */ jsx("b", { children: "comprise dans le prix" }),
    " tant qu'il y a un escalier. Si les appareils doivent être montés par une échelle, nous facturons une seule fois ",
    ladderFee,
    " de portage supplémentaire."
  ] }),
  verdiepingenKop: "Nombre d'étages",
  verdiepingenSub: "Rez-de-chaussée = 0. Nous portons et installons tous les appareils au bon étage.",
  verdiepingMinder: "Un étage de moins",
  verdiepingMeer: "Un étage de plus",
  hoeBoven: "Comment monte-t-on ?",
  viaTrap: "Par l'escalier",
  viaLadder: "Par une échelle",
  ladderEenmalig: (ladderFee) => `+ ${ladderFee} une seule fois`,
  extraToestellenKop: "Appareils supplémentaires",
  extraToestellenSub: "Plus de capacité, c'est un séchage plus court. Notre technicien évalue la situation à la livraison et vous ne payez que ce que vous utilisez.",
  per2Weken: "par 2 semaines",
  eenMinder: "Un de moins",
  eenMeer: "Un de plus",
  terug: "Retour",
  verderDatum: "Continuer vers la date",
  leveringKop: "Livraison & installation",
  leveringSub: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "Les packs sont toujours livrés, installés et réglés par nos soins : c'est la seule façon de tenir notre garantie 100 % sec. L'enlèvement par vos soins n'est possible que pour les",
    " ",
    /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/afhalen"), style: { color: "var(--red)", fontWeight: 600 }, children: "appareils à l'unité" }),
    ", à un tarif d'enlèvement plus bas."
  ] }),
  leverdatumKop: "Choisissez votre date de livraison",
  leverdatumSub: "Choisissez un jour dans notre agenda. Sur la base du temps de séchage de ce pack, nous planifions automatiquement l'enlèvement : vous n'avez rien à faire.",
  leverdatum: "Date de livraison",
  tijdslotLevering: "Créneau de livraison",
  huurperiodeVast: "Période de location (fixe par pack)",
  huurperiodeDagen: (dagen) => `${dagen} jours`,
  huurperiodeInbegrepen: "compris dans le prix du pack",
  huurperiodeWaarde: (dagen) => `${dagen} jours, compris dans le prix du pack`,
  datumVol: (datum, binnenHorizon, horizon) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "Le ",
    /* @__PURE__ */ jsx("b", { children: datum }),
    ", nos appareils pour ce pack sont déjà planifiés",
    binnenHorizon ? `, et rien ne se libère dans les ${horizon} prochains jours` : "",
    ". Choisissez un autre jour ci-dessus ou appelez-nous au 03 689 90 65 : nous pouvons souvent nous arranger."
  ] }),
  datumVerschoven: (van, naar) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "Le ",
    /* @__PURE__ */ jsx("b", { children: van }),
    ", nos appareils pour ce pack sont déjà planifiés. Nous avons donc déplacé votre livraison au premier jour libre : ",
    /* @__PURE__ */ jsx("b", { children: naar }),
    ". Vous pouvez toujours choisir un autre jour ci-dessus."
  ] }),
  planning: ({ start, slot, dagen, einde, droogtijd }) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "Nous livrons et installons le ",
    /* @__PURE__ */ jsx("b", { children: start }),
    " entre ",
    /* @__PURE__ */ jsx("b", { children: slot }),
    ". Votre période de location fixe de ",
    /* @__PURE__ */ jsxs("b", { children: [
      dagen,
      " jours"
    ] }),
    " court jusqu'au ",
    /* @__PURE__ */ jsx("b", { children: einde }),
    " ; l'enlèvement est automatiquement planifié ce jour-là, entre ",
    /* @__PURE__ */ jsx("b", { children: slot }),
    ". Temps de séchage prévu pour ce pack :",
    " ",
    /* @__PURE__ */ jsxs("b", { children: [
      droogtijd,
      " jours"
    ] }),
    "."
  ] }),
  teKort: "Plus court que le temps de séchage prévu : vous pourrez prolonger plus tard en un clic.",
  ophaaldatum: "Date d'enlèvement (automatique)",
  tijdslotOphaling: "Créneau d'enlèvement",
  verderGegevens: "Continuer vers vos coordonnées",
  gegevensKop: "Vos coordonnées",
  gegevensSub: "Nous les utilisons pour planifier la livraison et vous envoyer la confirmation.",
  particulier: "Particulier",
  professioneel: "Professionnel",
  naam: "Prénom et nom",
  naamPlaceholder: "Jean Dupont",
  telefoon: "Téléphone",
  email: "Adresse e-mail",
  emailPlaceholder: "jean@exemple.be",
  bedrijfsnaam: "Nom de la société",
  bedrijfPlaceholder: "Construction srl",
  btwNummer: "Numéro de TVA",
  adresWerf: "Adresse du chantier",
  adresPlaceholder: "Rue et numéro",
  postcode: "Code postal",
  postcodePlaceholder: "1300",
  gemeente: "Commune",
  gemeentePlaceholder: "Wavre",
  betalenKop: "Comment souhaitez-vous payer ?",
  korting: "5 % de réduction",
  volledigOnline: "Tout payer en ligne",
  volledigOnlineUitleg: "Payez maintenant par Bancontact, carte, Apple Pay ou iDEAL. Vous recevez 5 % de réduction sur l'ensemble de votre pack et votre facture arrive tout de suite dans votre boîte mail.",
  uBespaart: (bedrag) => `Vous économisez ${bedrag}`,
  voorschotKop: (bedrag) => `${bedrag} maintenant, le reste à la livraison`,
  voorschotUitleg: (bedrag) => `Confirmez votre réservation avec ${bedrag}. Vous scannez et payez le solde sur place à la livraison : Bancontact, carte ou Apple Pay.`,
  factuurNaBetaling: "Facture après paiement complet",
  akkoord: "J'accepte les conditions générales et j'autorise Vernast à me contacter au sujet de cette réservation.",
  voorbereiden: "Préparation du paiement…",
  naarBetaling: (bedrag) => `Vers le paiement · ${bedrag}`,
  betaalKop: "Payez votre réservation",
  betaalSub: (bedrag) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "Vous payez ",
    /* @__PURE__ */ jsx("b", { children: bedrag }),
    " par Apple Pay, Bancontact, carte, iDEAL ou Klarna. Le paiement est sécurisé par Stripe : nous ne voyons jamais les données de votre carte."
  ] }),
  vastgelegd: (datum, slot) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "Votre livraison le ",
    /* @__PURE__ */ jsx("b", { children: datum }),
    " entre ",
    /* @__PURE__ */ jsx("b", { children: slot }),
    " est fixée dès que le paiement est confirmé."
  ] }),
  terugGegevens: "Retour à mes coordonnées",
  geduldKop: "Un instant",
  geduldSub: "Nous confirmons votre paiement. Ne fermez pas cette fenêtre.",
  vastKop: "Votre réservation est confirmée",
  vastSub: (voorschot) => `Nous confirmons votre livraison par téléphone dans un délai d'un jour ouvrable. Si vous avez tout payé en ligne, votre facture se trouve déjà dans votre boîte mail, avec 5 % de réduction. Si vous avez choisi la confirmation de ${voorschot}, vous payez le solde à la livraison.`,
  referentie: "Référence",
  levering: "Livraison",
  huurperiode: "Période de location",
  tem: "au",
  dagen: "jours",
  betaald: "Payé",
  nogTeBetalen: "Reste à payer à la livraison",
  naarHome: "Vers la page d'accueil",
  offerteVraag: "Demandez votre prix de transport",
  offerteVersturen: "Envoi de la demande…",
  offerteVerstuurd: "Demande envoyée",
  uwDroogpakket: "Votre pack de séchage",
  uwPakket: "Votre pack",
  pakketRegel: (toestellen, weken) => `Pack · ${toestellen} appareils · ${weken} semaines`,
  leveringRegel: "Livraison, installation & enlèvement",
  plaatsingRegel: "Placement & réglage sur place",
  transportRegel: (band) => `Transport ${band}`,
  opMaat: "Sur mesure",
  huurprijsExcl: "Prix de location HTVA",
  kortingOnline: "Réduction paiement en ligne (5 %)",
  btw: "TVA 21 %",
  totaalIncl: "Total TVAC",
  perWeek: (bedrag) => `${bedrag} par semaine TVAC`,
  noot: "5 % de réduction en cas de paiement en ligne · résiliable chaque jour"
};
const en = {
  volgende: {
    1: "Continue to extras",
    2: "Continue to date",
    3: "Continue to your details",
    4: "Confirm booking"
  },
  verder: "Continue",
  beschikbaarheidLaden: "Checking availability…",
  datesError: "We can't check which dates are still free right now. You can simply continue and we will confirm your delivery date, or call us on 03 689 90 65.",
  geannuleerd: "The payment was cancelled. Your choices are still saved.",
  nietTeruggevonden: "We couldn't find this payment at Stripe. Your choices are still saved, so feel free to try paying again, or call us on 03 689 90 65.",
  statusNietOpgehaald: "The payment status could not be retrieved. Please try again.",
  nietGestart: "The payment could not be started.",
  geenVerbinding: "No connection to the payment server. Please try again.",
  teVeel: "Too many requests. Please try again in a minute.",
  dekkingKop: "Choose your cover",
  dekkingSub: "Site equipment is at risk of damage, theft or delay. Choose how much you want to bear yourself, just as with a hire car.",
  inbegrepen: "Included",
  eenmalig: "one-off, for the entire hire",
  inPakketprijs: "included in your package price",
  gekozen: "Selected",
  selecteer: "Select",
  terugNaarPakket: "Back to the package",
  verderExtras: "Continue to extras",
  extrasKop: "Included as standard & extra peace of mind",
  extrasSub: /* @__PURE__ */ jsxs(Fragment, { children: [
    "The professional moisture reading before the start and at handover is included",
    " ",
    /* @__PURE__ */ jsx("b", { children: "as standard" }),
    " with every hire, so you know for certain that everything is dry. If you need an official document of it, we will draw one up."
  ] }),
  vochtmetingKop: "Moisture reading before & after",
  vochtmetingSub: "Readings of walls, screed and air humidity at delivery and at handover, with every package.",
  inbegrepenTag: "✓ Included",
  toegevoegd: "Added",
  toevoegen: "Add",
  monitoringKop: "Digital monitoring",
  binnenkort: "Coming soon",
  monitoringSub: "All our units are getting digital monitoring: you will soon be able to follow the air humidity and drying progress live online, at no extra cost, automatically on every unit.",
  fotoVergroten: "Enlarge the photo of your package",
  fotoSluiten: "Close",
  pompKop: "Condensate pump, automatic water drainage",
  pompSub: /* @__PURE__ */ jsxs(Fragment, { children: [
    "Without a pump you have to empty every dehumidifier ",
    /* @__PURE__ */ jsx("b", { children: "about twice a day on average" }),
    ". With a condensate pump the water drains away automatically and the dehumidifier simply keeps running, without stopping."
  ] }),
  pompNaam: "Dehumidifiers with a condensate pump",
  pompAantal: (pompen, bouwdrogers) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("b", { children: [
      pompen,
      " of the ",
      bouwdrogers
    ] }),
    " ",
    "dehumidifier",
    bouwdrogers === 1 ? "" : "s",
    " in your package. We fill them all in as standard."
  ] }),
  perPompDag: "per dehumidifier / day",
  pompMinder: "One dehumidifier fewer with a pump",
  pompMeer: "One dehumidifier more with a pump",
  pompInfoKnop: "More about the condensate pump",
  pompInfoTitel: "How the condensate pump works",
  pompInfo: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("p", { children: [
      "A dehumidifier collects the water from the air in its tank. When the tank is full it switches itself off and stays off until someone empties it, ",
      /* @__PURE__ */ jsx("b", { children: "about twice a day on average" }),
      ". A weekend without emptying is a weekend of drying lost."
    ] }),
    /* @__PURE__ */ jsx("p", { children: "The pump attaches to the dehumidifier and pumps the water through a hose to a drain, sink or floor gully, even one at a higher level. It is pure condensate and can go down the drain. Our technician lays the hose during set-up." })
  ] }),
  pompFotoAlt: "Condensate pump on a dehumidifier, with the hose to a floor drain",
  pompMeerLink: "All about the condensate pump",
  verdiepingKop: "Which floor are we working on?",
  verdiepingSub: (ladderFee) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "Installation on an upper floor is ",
    /* @__PURE__ */ jsx("b", { children: "included in the price" }),
    " as long as there is a staircase. If the units have to be carried up by ladder, we charge a one-off ",
    ladderFee,
    " for the extra carrying."
  ] }),
  verdiepingenKop: "Number of floors",
  verdiepingenSub: "Ground floor = 0. We carry and install all units on the right floor.",
  verdiepingMinder: "One floor fewer",
  verdiepingMeer: "One floor more",
  hoeBoven: "How do we get upstairs?",
  viaTrap: "By the stairs",
  viaLadder: "By ladder",
  ladderEenmalig: (ladderFee) => `+ ${ladderFee} one-off`,
  extraToestellenKop: "Extra units",
  extraToestellenSub: "More capacity means a shorter drying time. Our technician assesses it at delivery and you only pay for what you use.",
  per2Weken: "per 2 weeks",
  eenMinder: "One fewer",
  eenMeer: "One more",
  terug: "Back",
  verderDatum: "Continue to date",
  leveringKop: "Delivery & installation",
  leveringSub: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "Packages are always delivered, installed and set up by us; that is the only way we can honour the 100% drying guarantee. Collecting it yourself is only possible for",
    " ",
    /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/afhalen"), style: { color: "var(--red)", fontWeight: 600 }, children: "individual units" }),
    ", at a lower collection price."
  ] }),
  leverdatumKop: "Choose your delivery date",
  leverdatumSub: "Choose a day in our diary. Based on the drying time of this package, we automatically schedule the collection too; you don't need to do anything.",
  leverdatum: "Delivery date",
  tijdslotLevering: "Delivery time slot",
  huurperiodeVast: "Hire period (fixed per package)",
  huurperiodeDagen: (dagen) => `${dagen} days`,
  huurperiodeInbegrepen: "included in the package price",
  huurperiodeWaarde: (dagen) => `${dagen} days, included in the package price`,
  datumVol: (datum, binnenHorizon, horizon) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "On ",
    /* @__PURE__ */ jsx("b", { children: datum }),
    " our units for this package are already booked",
    binnenHorizon ? `, and nothing comes free in the next ${horizon} days` : "",
    ". Choose another day above, or call us on 03 689 90 65; we can often move things around."
  ] }),
  datumVerschoven: (van, naar) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "On ",
    /* @__PURE__ */ jsx("b", { children: van }),
    " our units for this package are already booked. We have therefore moved your delivery date to the next free day: ",
    /* @__PURE__ */ jsx("b", { children: naar }),
    ". You can still choose another day above."
  ] }),
  planning: ({ start, slot, dagen, einde, droogtijd }) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "We deliver and install on ",
    /* @__PURE__ */ jsx("b", { children: start }),
    " between ",
    /* @__PURE__ */ jsx("b", { children: slot }),
    ". Your fixed hire period of",
    " ",
    /* @__PURE__ */ jsxs("b", { children: [
      dagen,
      " days"
    ] }),
    " runs until ",
    /* @__PURE__ */ jsx("b", { children: einde }),
    "; the collection is automatically scheduled for that day, between ",
    /* @__PURE__ */ jsx("b", { children: slot }),
    ". Expected drying time of this package: ",
    /* @__PURE__ */ jsxs("b", { children: [
      droogtijd,
      " days"
    ] }),
    "."
  ] }),
  teKort: "Shorter than the expected drying time; you can extend later with one click.",
  ophaaldatum: "Collection date (automatic)",
  tijdslotOphaling: "Collection time slot",
  verderGegevens: "Continue to your details",
  gegevensKop: "Your details",
  gegevensSub: "We use these to schedule the delivery and send you the confirmation.",
  particulier: "Private customer",
  professioneel: "Business",
  naam: "First name and surname",
  naamPlaceholder: "John Smith",
  telefoon: "Phone",
  email: "Email address",
  emailPlaceholder: "john@example.be",
  bedrijfsnaam: "Company name",
  bedrijfPlaceholder: "Construction Ltd",
  btwNummer: "VAT number",
  adresWerf: "Site address",
  adresPlaceholder: "Street and number",
  postcode: "Postcode",
  postcodePlaceholder: "2630",
  gemeente: "Town",
  gemeentePlaceholder: "Aartselaar",
  betalenKop: "How would you like to pay?",
  korting: "5% discount",
  volledigOnline: "Pay in full online",
  volledigOnlineUitleg: "Pay now with Bancontact, card, Apple Pay or iDEAL. You get a 5% discount on your entire package and your invoice lands in your inbox straight away.",
  uBespaart: (bedrag) => `You save ${bedrag}`,
  voorschotKop: (bedrag) => `${bedrag} now, the rest on delivery`,
  voorschotUitleg: (bedrag) => `Confirm your booking with ${bedrag}. You scan and pay the balance on site at delivery: Bancontact, card or Apple Pay.`,
  factuurNaBetaling: "Invoice after payment in full",
  akkoord: "I agree to the terms and conditions and give Vernast permission to contact me about this booking.",
  voorbereiden: "Preparing payment…",
  naarBetaling: (bedrag) => `Go to payment · ${bedrag}`,
  betaalKop: "Pay for your booking",
  betaalSub: (bedrag) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "You pay ",
    /* @__PURE__ */ jsx("b", { children: bedrag }),
    " with Apple Pay, Bancontact, card, iDEAL or Klarna. The payment is processed securely via Stripe; we never see your card details."
  ] }),
  vastgelegd: (datum, slot) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "Your delivery on ",
    /* @__PURE__ */ jsx("b", { children: datum }),
    " between ",
    /* @__PURE__ */ jsx("b", { children: slot }),
    " will be confirmed as soon as the payment is confirmed."
  ] }),
  terugGegevens: "Back to my details",
  geduldKop: "One moment",
  geduldSub: "We are confirming your payment. Please don't close this window.",
  vastKop: "Your booking is confirmed",
  vastSub: (voorschot) => `We will confirm your delivery by phone within one working day. If you paid in full online, your invoice is already in your inbox, with a 5% discount. If you chose the ${voorschot} confirmation, you pay the balance on delivery.`,
  referentie: "Reference",
  levering: "Delivery",
  huurperiode: "Hire period",
  tem: "to",
  dagen: "days",
  betaald: "Paid",
  nogTeBetalen: "Still to pay on delivery",
  naarHome: "Go to the homepage",
  offerteVraag: "Request your transport price",
  offerteVersturen: "Sending request…",
  offerteVerstuurd: "Request sent",
  uwDroogpakket: "Your drying package",
  uwPakket: "Your package",
  pakketRegel: (toestellen, weken) => `Package · ${toestellen} units · ${weken} weeks`,
  leveringRegel: "Delivery, installation & collection",
  plaatsingRegel: "On-site placement & setup",
  transportRegel: (band) => `Transport ${band}`,
  opMaat: "On request",
  huurprijsExcl: "Hire price excl. VAT",
  kortingOnline: "Online payment discount (5%)",
  btw: "VAT 21%",
  totaalIncl: "Total incl. VAT",
  perWeek: (bedrag) => `${bedrag} per week incl. VAT`,
  noot: "5% discount when paying online · cancellable daily"
};
const BOEKING_COPY = { nl, fr, en };
const REGEL_WOORDEN = {
  fr: {
    vast: {
      "Standaard dekking": "Couverture standard",
      "Vochtmeting bij start & oplevering": "Mesure d'humidité au début & à la fin",
      "Plaatsing verdieping via ladder": "Installation à l'étage par une échelle",
      "Plaatsing op verdieping (trap)": "Installation à l'étage (escalier)",
      "Zelf afhalen": "Enlèvement par vos soins"
    },
    dekking: (naam) => `Couverture ${naam}`,
    pomp: (aantal, dagen) => `${aantal}× pompe à condensats · ${dagen} jours`,
    extra: (naam, weken) => `${naam} · ${weken} sem.`
  },
  en: {
    vast: {
      "Standaard dekking": "Standard cover",
      "Vochtmeting bij start & oplevering": "Moisture reading at start & handover",
      "Plaatsing verdieping via ladder": "Upper-floor installation by ladder",
      "Plaatsing op verdieping (trap)": "Upper-floor installation (stairs)",
      "Zelf afhalen": "Self-collection"
    },
    dekking: (naam) => `${naam} cover`,
    pomp: (aantal, dagen) => `${aantal}× condensate pump · ${dagen} days`,
    extra: (naam, weken) => `${naam} · ${weken} wk`
  }
};
function regelInTaal(regel, taal) {
  if (taal === "nl") return regel;
  const w = REGEL_WOORDEN[taal];
  if (w.vast[regel]) return w.vast[regel];
  const dekking = /^Dekking (.+)$/.exec(regel);
  if (dekking) return w.dekking(vertaalPortaal(dekking[1], taal));
  const pomp = /^(\d+)× condenspomp · (\d+) dagen$/.exec(regel);
  if (pomp) return w.pomp(pomp[1], pomp[2]);
  const extra = /^(.+) · (\d+) wk$/.exec(regel);
  if (extra) return w.extra(vertaalPortaal(extra[1], taal), extra[2]);
  return vertaalPortaal(regel, taal);
}
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/verhuur/VerhuurBoekingPage.tsx");
const EXTRA_ICONS = {
  rapport: ReportIcon,
  stroom: BoltIcon
};
const TOTAL_STEPS = 6;
const STEP_DETAILS = 4;
const STEP_PAY = 5;
const STEP_DONE = 6;
const STEP_VERIFY = 0;
const SLOTS = ["08:00 – 10:00", "10:00 – 12:00", "13:00 – 15:00", "15:00 – 17:00"];
const AVAILABILITY_HORIZON_DAYS = 60;
const STORAGE_KEY = "vernast-boeking";
function readStored() {
  if (typeof sessionStorage === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
function writeStored(booking) {
  if (typeof sessionStorage === "undefined") return;
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(booking));
  } catch {
  }
}
const EMPTY_CUSTOMER = {
  name: "",
  tel: "",
  mail: "",
  company: "",
  vat: "",
  addr: "",
  post: "",
  land: "BE",
  city: "",
  ok: false
};
function longDate(iso, taal) {
  const date = /* @__PURE__ */ new Date(`${iso}T12:00:00`);
  return Number.isNaN(date.getTime()) ? iso : langeDatum(date, taal);
}
function langeDatum(date, taal) {
  return taal === "nl" ? formatLongDate(date) : date.toLocaleDateString(NUMBER_LOCALE[taal], { weekday: "long", day: "numeric", month: "long" });
}
function isComplete(c, type, leverbaar) {
  const proOk = type !== "pro" || c.company.trim().length > 1 && c.vat.trim().length > 8;
  return leverbaar && c.name.trim().length > 1 && isValidEmail(c.mail) && isValidPhone(c.tel) && c.addr.trim().length > 3 && c.post.trim().length === 4 && c.city.trim().length > 1 && proOk && c.ok;
}
const VerhuurBoekingPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const taal = useTaal();
  const t = useCopy(BOEKING_COPY);
  const lp = useLokaalPad();
  const seo = useSeo("verhuurBoeking");
  const eur = (n) => taal === "nl" ? euro(n) : formatEuro(n, taal);
  const datumLang = (d) => langeDatum(d, taal);
  const cover_ = useMemo(() => coverInTaal(taal), [taal]);
  const extras_ = useMemo(() => extrasInTaal(taal), [taal]);
  const delivery_ = useMemo(() => deliveryInTaal(taal), [taal]);
  const cat_ = useMemo(() => catInTaal(taal), [taal]);
  const ladderFee = taal === "nl" ? `€ ${LADDER_FEE}` : formatEuro(LADDER_FEE, taal, 0);
  const config = useMemo(() => parseConfig(searchParams), [searchParams]);
  const stored = useMemo(readStored, []);
  const [step, setStep] = useState(() => searchParams.get("session_id") ? STEP_VERIFY : 1);
  const [cover, setCover] = useState(stored?.options.cover ?? "comfort");
  const [extras, setExtras] = useState(
    () => Object.fromEntries((stored?.options.extras ?? []).map((k) => [k, true]))
  );
  const [dev, setDev] = useState(() => {
    const uitLink = extraUitQuery(searchParams);
    const bron = Object.keys(uitLink).length > 0 ? uitLink : stored?.options.dev ?? {};
    return { small: bron.small ?? 0, medium: bron.medium ?? 0, axiaal: bron.axiaal ?? 0, kachel: bron.kachel ?? 0 };
  });
  const [pumps, setPumps] = useState(stored?.options.pumps ?? null);
  const [floors, setFloors] = useState(stored?.options.floors ?? 0);
  const [access, setAccess] = useState(stored?.options.access ?? "trap");
  const [delivery, setDelivery] = useState(stored?.options.delivery ?? DELIVERY[0].k);
  const [startDate, setStartDate] = useState(() => stored?.startDate ?? "");
  const [today, setToday] = useState("");
  useEffect(() => {
    setToday(isoDate(/* @__PURE__ */ new Date()));
    setStartDate((current) => current || isoDate(addDays(/* @__PURE__ */ new Date(), 1)));
  }, []);
  const [slot, setSlot] = useState(stored?.slot ?? SLOTS[1]);
  const [customerType, setCustomerType] = useState(stored?.customerType ?? "part");
  const [payment, setPayment] = useState(stored?.options.payment ?? "online");
  const uitQuery = useMemo(() => leverzoneUitQuery(searchParams), [searchParams]);
  const [customer, setCustomer] = useState(() => ({
    ...EMPTY_CUSTOMER,
    ...uitQuery ? { post: uitQuery.postcode, land: uitQuery.land } : {},
    ...stored?.customer
  }));
  const leverplaats = useMemo(
    () => /^\d{4}$/.test(customer.post) ? { land: customer.land, postcode: customer.post, naam: customer.city } : null,
    [customer.land, customer.post, customer.city]
  );
  const kiesLand = useCallback((land) => {
    setCustomer((c) => ({ ...c, land }));
  }, []);
  const kiesLeverplaats = useCallback((p) => {
    setCustomer(
      (c) => p ? { ...c, land: p.land, post: p.postcode, city: p.naam || c.city } : { ...c, post: "" }
    );
  }, []);
  const [fotoGroot, setFotoGroot] = useState(false);
  const [pompInfo, setPompInfo] = useState(false);
  useEffect(() => {
    if (!fotoGroot) return;
    const toets = (e) => {
      if (e.key === "Escape") setFotoGroot(false);
    };
    const vorig = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", toets);
    return () => {
      document.body.style.overflow = vorig;
      window.removeEventListener("keydown", toets);
    };
  }, [fotoGroot]);
  const [reference, setReference] = useState("");
  const [ordered, setOrdered] = useState(null);
  const [paying, setPaying] = useState(false);
  const [payError, setPayError] = useState("");
  const [offerteVerstuurd, setOfferteVerstuurd] = useState(false);
  const [session, setSession] = useState(() => stored?.sessionId ? { id: stored.sessionId, clientSecret: "", fingerprint: "" } : null);
  const [stripeJs, setStripeJs] = useState(null);
  const options = useMemo(
    () => ({
      cover,
      // Gesorteerd: anders leest het om- en weer aanzetten van een extra als een
      // gewijzigde boeking, puur door de volgorde in het object.
      extras: Object.keys(extras).filter((k) => extras[k]).sort(),
      pumps,
      dev,
      floors,
      access,
      delivery,
      payment,
      land: customer.land,
      postcode: customer.post,
      /*
        De wizard verkoopt geen spoed: de klant plant zijn eigen datum en betaalt
        het tarief van zijn zone. Een losse rit buiten onze ronde regelen we aan
        de telefoon, met het bedrag uit `ZONES[].spoed` erbij.
      */
      spoed: false
    }),
    [cover, extras, pumps, dev, floors, access, delivery, payment, customer.land, customer.post]
  );
  const summary = useMemo(() => bookingSummary(config, options), [config, options]);
  const {
    base,
    lines: rows,
    total,
    discount,
    netTotal,
    dryerCount,
    pumps: pumpCount,
    leverzone,
    leverbaar
  } = summary;
  const offerte = leverzone !== null && !leverbaar;
  const goTo = (n) => {
    setStep(n);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    const staleId = stored?.sessionId;
    const email = stored?.customer.mail;
    if (!staleId || !email || searchParams.get("session_id")) return;
    void fetch("/api/booking-release", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ sessionId: staleId, email })
    }).catch(() => {
    });
  }, []);
  useEffect(() => {
    if (step !== STEP_DETAILS) return;
    void import("@stripe/stripe-js");
  }, [step]);
  const days = dryingDays(config);
  const rentalWeeks = configWeeks(config);
  const rentalDays = rentalWeeks * 7;
  const start = startDate ? new Date(startDate) : null;
  const end = start ? addDays(start, rentalDays) : null;
  const tooShort = rentalDays < days;
  const bump = (k, delta) => setDev((prev) => ({
    ...prev,
    [k]: Math.max(0, Math.min(MAX_EXTRA_DEVICES, prev[k] + delta))
  }));
  const [horizonDates, setHorizonDates] = useState([]);
  const [datesError, setDatesError] = useState("");
  const [loadingDates, setLoadingDates] = useState(false);
  const [rejectedDates, setRejectedDates] = useState([]);
  const blockedDates = useMemo(
    () => [.../* @__PURE__ */ new Set([...horizonDates, ...rejectedDates])],
    [horizonDates, rejectedDates]
  );
  useEffect(() => {
    if (step !== 3) return;
    let active = true;
    setLoadingDates(true);
    setDatesError("");
    fetch("/api/availability", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ config, options })
    }).then(async (r) => {
      const data = await r.json();
      if (!r.ok) throw new Error(data.error ?? "onbereikbaar");
      return data;
    }).then((data) => {
      if (!active) return;
      setHorizonDates(data.blocked_start_dates ?? []);
    }).catch(() => {
      if (!active) return;
      setHorizonDates([]);
      reportBookingEvent({ code: "wizard_beschikbaarheid_onbereikbaar", config, options });
      setDatesError(t.datesError);
    }).finally(() => {
      if (active) setLoadingDates(false);
    });
    return () => {
      active = false;
    };
  }, [step, config, options]);
  const dateBlocked = blockedDates.includes(startDate);
  const datumKan = useCallback((iso) => !blockedDates.includes(iso), [blockedDates]);
  const nextBlocked = step !== 3 ? null : loadingDates ? "laden" : dateBlocked ? "vol" : null;
  const withinHorizon = useMemo(
    () => startDate <= isoDate(addDays(/* @__PURE__ */ new Date(), AVAILABILITY_HORIZON_DAYS)),
    [startDate]
  );
  const nextFreeDate = useMemo(() => {
    if (!startDate || datumKan(startDate)) return null;
    const from = new Date(startDate);
    const horizon = isoDate(addDays(/* @__PURE__ */ new Date(), AVAILABILITY_HORIZON_DAYS));
    for (let i = 1; i <= AVAILABILITY_HORIZON_DAYS; i++) {
      const candidate = isoDate(addDays(from, i));
      if (candidate > horizon) return null;
      if (datumKan(candidate)) return candidate;
    }
    return null;
  }, [startDate, datumKan]);
  const [shiftedDate, setShiftedDate] = useState(null);
  useEffect(() => {
    if (step !== 3 || loadingDates || datesError) return;
    if (!dateBlocked) return;
    if (!nextFreeDate) {
      reportBookingEvent({
        code: "wizard_geen_vrije_datum",
        config,
        options,
        start: startDate,
        blocked: blockedDates.length
      });
      return;
    }
    reportBookingEvent({
      code: "wizard_datum_verschoven",
      config,
      options,
      start: startDate,
      blocked: blockedDates.length
    });
    setShiftedDate({ from: startDate, to: nextFreeDate });
    setStartDate(nextFreeDate);
  }, [step, loadingDates, datesError, dateBlocked, nextFreeDate, startDate, config, options, blockedDates]);
  const sessionId = searchParams.get("session_id");
  const cancelled = searchParams.get("betaling") === "geannuleerd";
  const clearReturnParams = useCallback(() => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        next.delete("session_id");
        next.delete("betaling");
        return next;
      },
      { replace: true }
    );
  }, [setSearchParams]);
  useEffect(() => {
    if (!sessionId) {
      if (cancelled) {
        setStep(4);
        setPayError(t.geannuleerd);
        clearReturnParams();
      }
      return;
    }
    let active = true;
    fetch(`/api/checkout-session?id=${encodeURIComponent(sessionId)}`).then((r) => r.json()).then((data) => {
      if (!active) return;
      if (data.paid && data.reference) {
        setReference(data.reference);
        setOrdered(data.order ?? null);
        setStep(STEP_DONE);
        sessionStorage.removeItem(STORAGE_KEY);
      } else {
        if (data.error) console.warn(`[boeking] betaalstatus: ${data.error}`);
        setStep(4);
        setPayError(t.nietTeruggevonden);
      }
      clearReturnParams();
    }).catch(() => {
      if (!active) return;
      setStep(4);
      setPayError(t.statusNietOpgehaald);
      clearReturnParams();
    });
    return () => {
      active = false;
    };
  }, [sessionId, cancelled, clearReturnParams]);
  const staleSession = () => setSession((prev) => prev ? { ...prev, clientSecret: "", fingerprint: "" } : null);
  const vraagOfferte = async () => {
    setPaying(true);
    setPayError("");
    try {
      const response = await fetch("/api/transport-offerte", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          config: Object.fromEntries(new URLSearchParams(configToQuery(config))),
          options,
          customer: { ...customer, type: customerType },
          delivery: { date: startDate, slot },
          page_url: typeof window === "undefined" ? "" : window.location.href,
          website: ""
        })
      });
      const data = await response.json();
      if (!response.ok || !data.ok) {
        setPayError(data.error ?? "Verzenden lukte niet. Probeer het opnieuw of bel 03 689 90 65.");
        return;
      }
      setOfferteVerstuurd(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setPayError(
        "Wij konden uw aanvraag niet versturen. Controleer uw verbinding, of bel ons op 03 689 90 65."
      );
    } finally {
      setPaying(false);
    }
  };
  const payAndConfirm = async () => {
    setPaying(true);
    setPayError("");
    const booking = {
      options,
      customer,
      customerType,
      startDate,
      slot,
      sessionId: session?.id
    };
    writeStored(booking);
    const payload = {
      config: Object.fromEntries(new URLSearchParams(configToQuery(config))),
      options,
      customer: { ...customer, type: customerType },
      delivery: { date: startDate, slot }
    };
    const fingerprint = bookingFingerprint(payload);
    if (session && session.fingerprint === fingerprint && stripeJs) {
      setPaying(false);
      goTo(STEP_PAY);
      return;
    }
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "content-type": "application/json" },
        // De vorige sessie gaat mee zodat de server haar laat vervallen en de
        // toestellen teruggeeft vóór hij opnieuw kijkt wat er vrij is.
        // `taal` bepaalt de taal van Stripe en de terugkeer-URL, nooit het
        // bedrag; hij zit bewust niet in de vingerafdruk van de boeking.
        body: JSON.stringify({ ...payload, previousSessionId: session?.id, taal })
      });
      const data = await response.json();
      if (response.status === 409 && data.code === "niet_beschikbaar") {
        const geweigerd = data.blocked_start_dates?.length ? data.blocked_start_dates : [startDate];
        setRejectedDates((prev) => [.../* @__PURE__ */ new Set([...prev, ...geweigerd])]);
        setPayError("");
        setPaying(false);
        staleSession();
        goTo(3);
        return;
      }
      if (!response.ok || !data.clientSecret || !data.publishableKey || !data.sessionId) {
        setPayError(response.status === 429 ? t.teVeel : data.error ?? t.nietGestart);
        setPaying(false);
        staleSession();
        return;
      }
      const { loadStripe } = await import("@stripe/stripe-js");
      setStripeJs(loadStripe(data.publishableKey, { locale: taal }));
      setSession({ id: data.sessionId, clientSecret: data.clientSecret, fingerprint });
      writeStored({ ...booking, sessionId: data.sessionId });
      setPaying(false);
      goTo(STEP_PAY);
    } catch {
      setPayError(t.geenVerbinding);
      setPaying(false);
    }
  };
  const cancelPayment = () => goTo(4);
  return /* @__PURE__ */ jsxs("div", { className: "vh-book", children: [
    /* @__PURE__ */ jsx(PageMeta, { ...seo, path: lp("/verhuur/boeking") }),
    /* @__PURE__ */ jsx(V3Header, { lightAfter: -1 }),
    /* @__PURE__ */ jsx("div", { className: "rail", children: /* @__PURE__ */ jsx("div", { className: "rwrap", children: /* @__PURE__ */ jsx(
      "i",
      {
        style: {
          width: `${step === STEP_VERIFY ? 100 : Math.round(step / TOTAL_STEPS * 100)}%`
        }
      }
    ) }) }),
    /* @__PURE__ */ jsx("section", { className: "main", children: /* @__PURE__ */ jsxs("div", { className: "wrap mgrid", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: `pane${step === 1 ? " on" : ""}`, children: [
          /* @__PURE__ */ jsxs("div", { className: "blk", children: [
            /* @__PURE__ */ jsx("div", { className: "blkh", children: /* @__PURE__ */ jsx("h2", { children: "Waar wilt u de bouwdrogers geleverd?" }) }),
            /* @__PURE__ */ jsx("p", { className: "bsub", children: "De huurprijs is overal dezelfde. Buiten onze eigen regio komt er een transportvergoeding bij voor de rit heen en de ophaling terug." }),
            /* @__PURE__ */ jsx(
              LeverplaatsZoeker,
              {
                waarde: leverplaats,
                land: customer.land,
                onLand: kiesLand,
                onKies: kiesLeverplaats
              }
            ),
            customer.post.length === 4 && leverzone && leverbaar && /* @__PURE__ */ jsxs("div", { className: "pcz ja", children: [
              /* @__PURE__ */ jsx("span", { className: "pczd" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("b", { children: leverzone.zone.tarief === 0 ? "Gratis levering*" : "Levering met transportvergoeding" }),
                /* @__PURE__ */ jsx("small", { children: leverzone.zone.tarief === 0 ? "Levering, plaatsing en ophaling zijn inbegrepen. U kiest zelf uw leverdag in de agenda." : "Plaatsing en ophaling blijven inbegrepen. Voor de rit heen en de ophaling terug komt er één vaste vergoeding bij. U kiest zelf uw leverdag in de agenda." }),
                /* @__PURE__ */ jsx("span", { className: "pczp", children: leverzone.zone.tarief === 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  "Levering, plaatsing en ophaling ",
                  /* @__PURE__ */ jsx("b", { children: "inbegrepen" }),
                  /* @__PURE__ */ jsx("span", { className: "pcznoot", children: GRATIS_LEVERING_VOETNOOT })
                ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                  "Transportvergoeding ",
                  /* @__PURE__ */ jsx("b", { children: euro(withVat(leverzone.zone.tarief ?? 0)) }),
                  " ",
                  "incl. btw ",
                  /* @__PURE__ */ jsxs("span", { className: "excl", children: [
                    "(",
                    euro(leverzone.zone.tarief ?? 0),
                    " ",
                    "excl. btw)"
                  ] }),
                  " — levering en ophaling samen"
                ] }) })
              ] })
            ] }),
            customer.post.length === 4 && offerte && leverzone && /* @__PURE__ */ jsxs("div", { className: "pcz offerte", children: [
              /* @__PURE__ */ jsx("span", { className: "pczd" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("b", { children: "Levering met transportprijs op maat" }),
                /* @__PURE__ */ jsxs("small", { children: [
                  "Plaatsing en ophaling blijven inbegrepen. De vervoerskost naar postcode",
                  " ",
                  leverzone.postcode,
                  " maken wij per order: zo ver loopt ze te veel uiteen voor één vast bedrag."
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "pczp", children: [
                  /* @__PURE__ */ jsx("b", { children: "Stel uw pakket gewoon verder samen." }),
                  " U ziet de volledige huurprijs; het transport staat er apart bij. Op het einde laat u uw gegevens achter en bezorgen wij u binnen één werkdag een vaste prijs. Afhalen in Aartselaar kan ook — ",
                  /* @__PURE__ */ jsx(Link, { to: "/verhuur/afhalen", children: "bekijk de afhaalprijzen" }),
                  "."
                ] })
              ] })
            ] }),
            customer.post.length === 4 && !leverzone && /* @__PURE__ */ jsxs("div", { className: "pcz nee", children: [
              /* @__PURE__ */ jsx("span", { className: "pczd" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("b", { children: "Deze postcode kennen wij niet" }),
                /* @__PURE__ */ jsx("small", { children: "Controleer of het land klopt — een Belgische en een Nederlandse postcode van vier cijfers kunnen op elkaar lijken." })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "blk", children: [
            /* @__PURE__ */ jsx("div", { className: "blkh", children: /* @__PURE__ */ jsx("h2", { children: t.dekkingKop }) }),
            /* @__PURE__ */ jsx("p", { className: "bsub", children: t.dekkingSub }),
            /* @__PURE__ */ jsx("div", { className: "cvs", children: cover_.map((c) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: `cv${c.k === cover ? " sel" : ""}`,
                onClick: () => setCover(c.k),
                role: "radio",
                "aria-checked": c.k === cover,
                tabIndex: 0,
                onKeyDown: (e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setCover(c.k);
                  }
                },
                children: [
                  c.badge && /* @__PURE__ */ jsx("span", { className: "cvb", children: c.badge }),
                  /* @__PURE__ */ jsx("div", { className: "cvn", children: c.name }),
                  /* @__PURE__ */ jsx("div", { className: "cvs2", children: c.sub }),
                  /* @__PURE__ */ jsx("div", { className: "cvp", children: c.price ? eur(c.price) : t.inbegrepen }),
                  /* @__PURE__ */ jsx("div", { className: "cvd", children: c.price ? t.eenmalig : t.inPakketprijs }),
                  /* @__PURE__ */ jsxs("ul", { children: [
                    c.inc.map((i) => /* @__PURE__ */ jsxs("li", { children: [
                      /* @__PURE__ */ jsx(CheckIcon, { size: 13, strokeWidth: 3 }),
                      i
                    ] }, i)),
                    c.off.map((i) => /* @__PURE__ */ jsxs("li", { className: "off", children: [
                      /* @__PURE__ */ jsx(CrossIcon, {}),
                      i
                    ] }, i))
                  ] }),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      className: "cvpick",
                      type: "button",
                      onClick: (e) => {
                        e.stopPropagation();
                        setCover(c.k);
                        goTo(2);
                      },
                      children: c.k === cover ? t.gekozen : t.selecteer
                    }
                  )
                ]
              },
              c.k
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "fnav", children: [
            /* @__PURE__ */ jsx(Link, { className: "btn btn-o", to: lp(`/verhuur/pakket?${configToQuery(config)}${extraNaarQuery(dev)}`), children: t.terugNaarPakket }),
            /* @__PURE__ */ jsxs("button", { className: "btn btn-d", type: "button", onClick: () => goTo(2), children: [
              t.verderExtras,
              /* @__PURE__ */ jsx(ArrowRightIcon, {})
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: `pane${step === 2 ? " on" : ""}`, children: [
          /* @__PURE__ */ jsxs("div", { className: "blk", children: [
            /* @__PURE__ */ jsx("div", { className: "blkh", children: /* @__PURE__ */ jsx("h2", { children: t.extrasKop }) }),
            /* @__PURE__ */ jsx("p", { className: "bsub", children: t.extrasSub }),
            /* @__PURE__ */ jsxs("div", { className: "inc-row", children: [
              /* @__PURE__ */ jsx("span", { className: "exi", children: /* @__PURE__ */ jsx(DropIcon, {}) }),
              /* @__PURE__ */ jsxs("span", { className: "ext", children: [
                /* @__PURE__ */ jsx("b", { children: t.vochtmetingKop }),
                /* @__PURE__ */ jsx("small", { children: t.vochtmetingSub })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "inc-tag", children: t.inbegrepenTag })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              extras_.map((x) => {
                const Icon = EXTRA_ICONS[x.k];
                return /* @__PURE__ */ jsxs("div", { className: "ex", children: [
                  /* @__PURE__ */ jsx("span", { className: "exi", children: Icon && /* @__PURE__ */ jsx(Icon, {}) }),
                  /* @__PURE__ */ jsxs("span", { className: "ext", children: [
                    /* @__PURE__ */ jsx("b", { children: x.name }),
                    /* @__PURE__ */ jsx("small", { children: x.sub })
                  ] }),
                  /* @__PURE__ */ jsxs("span", { className: "exp", children: [
                    eur(x.price),
                    /* @__PURE__ */ jsx("small", { children: x.unit })
                  ] }),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      type: "button",
                      className: `exadd${extras[x.k] ? " on" : ""}`,
                      onClick: () => setExtras((p) => ({ ...p, [x.k]: !p[x.k] })),
                      children: extras[x.k] ? t.toegevoegd : t.toevoegen
                    }
                  )
                ] }, x.k);
              }),
              /* @__PURE__ */ jsxs("div", { className: "ex", style: { opacity: 0.72 }, children: [
                /* @__PURE__ */ jsx("span", { className: "exi", children: /* @__PURE__ */ jsx(PulseIcon, {}) }),
                /* @__PURE__ */ jsxs("span", { className: "ext", children: [
                  /* @__PURE__ */ jsxs("b", { children: [
                    t.monitoringKop,
                    /* @__PURE__ */ jsx("span", { className: "soon-tag", children: t.binnenkort })
                  ] }),
                  /* @__PURE__ */ jsx("small", { children: t.monitoringSub })
                ] }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    className: "exadd",
                    disabled: true,
                    style: { opacity: 0.5, cursor: "default" },
                    children: t.binnenkort
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "blk", children: [
            /* @__PURE__ */ jsxs("div", { className: "blkh pomph", children: [
              /* @__PURE__ */ jsx("h2", { children: t.pompKop }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  className: `pompi${pompInfo ? " on" : ""}`,
                  "aria-label": t.pompInfoKnop,
                  "aria-expanded": pompInfo,
                  "aria-controls": "pompInfo",
                  onClick: () => setPompInfo((v) => !v),
                  children: "i"
                }
              )
            ] }),
            /* @__PURE__ */ jsx("p", { className: "bsub", children: t.pompSub }),
            pompInfo && /* @__PURE__ */ jsxs("div", { className: "pompinfo", id: "pompInfo", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: "/vernast/condenspomp-slangopstelling.webp",
                  alt: t.pompFotoAlt,
                  loading: "lazy",
                  decoding: "async"
                }
              ),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("b", { children: t.pompInfoTitel }),
                t.pompInfo,
                /* @__PURE__ */ jsxs(Link, { to: lp("/verhuur/toebehoren/condenspomp"), children: [
                  t.pompMeerLink,
                  " →"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "ex", children: [
              /* @__PURE__ */ jsx("span", { className: "exi", children: /* @__PURE__ */ jsx(PumpIcon, {}) }),
              /* @__PURE__ */ jsxs("span", { className: "ext", children: [
                /* @__PURE__ */ jsx("b", { children: t.pompNaam }),
                /* @__PURE__ */ jsx("small", { children: t.pompAantal(pumpCount, dryerCount) })
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "exp", children: [
                eur(PUMP.price),
                /* @__PURE__ */ jsx("small", { children: t.perPompDag })
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "stp", children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    "aria-label": t.pompMinder,
                    onClick: () => setPumps(Math.max(0, pumpCount - 1)),
                    children: "−"
                  }
                ),
                /* @__PURE__ */ jsx("span", { children: pumpCount }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    "aria-label": t.pompMeer,
                    onClick: () => setPumps(Math.min(dryerCount, pumpCount + 1)),
                    children: "+"
                  }
                )
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "blk", children: [
            /* @__PURE__ */ jsx("div", { className: "blkh", children: /* @__PURE__ */ jsx("h2", { children: t.verdiepingKop }) }),
            /* @__PURE__ */ jsx("p", { className: "bsub", children: t.verdiepingSub(ladderFee) }),
            /* @__PURE__ */ jsxs("div", { className: "ex", style: { borderBottom: 0 }, children: [
              /* @__PURE__ */ jsx("span", { className: "exi", children: /* @__PURE__ */ jsx(StairsIcon, {}) }),
              /* @__PURE__ */ jsxs("span", { className: "ext", children: [
                /* @__PURE__ */ jsx("b", { children: t.verdiepingenKop }),
                /* @__PURE__ */ jsx("small", { children: t.verdiepingenSub })
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "stp", children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    "aria-label": t.verdiepingMinder,
                    onClick: () => setFloors((f) => Math.max(0, f - 1)),
                    children: "−"
                  }
                ),
                /* @__PURE__ */ jsx("span", { children: floors }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    "aria-label": t.verdiepingMeer,
                    onClick: () => setFloors((f) => Math.min(MAX_FLOORS, f + 1)),
                    children: "+"
                  }
                )
              ] })
            ] }),
            floors > 0 && /* @__PURE__ */ jsxs("div", { style: { padding: "2px 0 10px 51px" }, children: [
              /* @__PURE__ */ jsx("div", { style: { fontSize: 13.5, fontWeight: 600, marginBottom: 9 }, children: t.hoeBoven }),
              /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 9, flexWrap: "wrap" }, children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    type: "button",
                    className: `acc${access === "trap" ? " on" : ""}`,
                    onClick: () => setAccess("trap"),
                    children: [
                      t.viaTrap,
                      " ",
                      /* @__PURE__ */ jsx("small", { children: t.inbegrepen })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    type: "button",
                    className: `acc${access === "ladder" ? " on" : ""}`,
                    onClick: () => setAccess("ladder"),
                    children: [
                      t.viaLadder,
                      " ",
                      /* @__PURE__ */ jsx("small", { children: t.ladderEenmalig(ladderFee) })
                    ]
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "blk", children: [
            /* @__PURE__ */ jsx("div", { className: "blkh", children: /* @__PURE__ */ jsx("h2", { children: t.extraToestellenKop }) }),
            /* @__PURE__ */ jsx("p", { className: "bsub", children: t.extraToestellenSub }),
            /* @__PURE__ */ jsx("div", { children: DEVICE_KEYS.map((k) => /* @__PURE__ */ jsxs("div", { className: "ex", children: [
              /* @__PURE__ */ jsx("span", { className: "exi", children: /* @__PURE__ */ jsx("img", { src: cat_[k].img, alt: cat_[k].name, loading: "lazy", decoding: "async" }) }),
              /* @__PURE__ */ jsxs("span", { className: "ext", children: [
                /* @__PURE__ */ jsx("b", { children: cat_[k].name }),
                /* @__PURE__ */ jsx("small", { children: cat_[k].sub })
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "exp", children: [
                eur(CAT[k].w2),
                /* @__PURE__ */ jsx("small", { children: t.per2Weken })
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "stp", children: [
                /* @__PURE__ */ jsx("button", { type: "button", "aria-label": t.eenMinder, onClick: () => bump(k, -1), children: "−" }),
                /* @__PURE__ */ jsx("span", { children: dev[k] }),
                /* @__PURE__ */ jsx("button", { type: "button", "aria-label": t.eenMeer, onClick: () => bump(k, 1), children: "+" })
              ] })
            ] }, k)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "fnav", children: [
            /* @__PURE__ */ jsx("button", { className: "btn btn-o", type: "button", onClick: () => goTo(1), children: t.terug }),
            /* @__PURE__ */ jsxs("button", { className: "btn btn-d", type: "button", onClick: () => goTo(3), children: [
              t.verderDatum,
              /* @__PURE__ */ jsx(ArrowRightIcon, {})
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: `pane${step === 3 ? " on" : ""}`, children: [
          /* @__PURE__ */ jsxs("div", { className: "blk", children: [
            /* @__PURE__ */ jsx("div", { className: "blkh", children: /* @__PURE__ */ jsx("h2", { children: t.leveringKop }) }),
            /* @__PURE__ */ jsx("p", { className: "bsub", children: t.leveringSub(lp) }),
            /* @__PURE__ */ jsx("div", { className: "dopt", children: delivery_.map((d) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: `dch${d.k === delivery ? " sel" : ""}`,
                onClick: () => setDelivery(d.k),
                role: "radio",
                "aria-checked": d.k === delivery,
                tabIndex: 0,
                onKeyDown: (e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setDelivery(d.k);
                  }
                },
                children: [
                  /* @__PURE__ */ jsx("span", { className: "dr" }),
                  /* @__PURE__ */ jsxs("span", { children: [
                    /* @__PURE__ */ jsx("b", { children: d.name }),
                    /* @__PURE__ */ jsx("small", { children: d.sub }),
                    /* @__PURE__ */ jsx("span", { className: "dpx", children: d.tag })
                  ] })
                ]
              },
              d.k
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "blk", children: [
            /* @__PURE__ */ jsx("div", { className: "blkh", children: /* @__PURE__ */ jsx("h2", { children: t.leverdatumKop }) }),
            /* @__PURE__ */ jsx("p", { className: "bsub", children: t.leverdatumSub }),
            /* @__PURE__ */ jsxs("div", { className: "frow", children: [
              /* @__PURE__ */ jsxs("div", { className: "fld", children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "dStart", children: t.leverdatum }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "date",
                    id: "dStart",
                    value: startDate,
                    min: today || void 0,
                    onChange: (e) => setStartDate(e.target.value)
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "fld", children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "dSlot", children: t.tijdslotLevering }),
                /* @__PURE__ */ jsx("select", { id: "dSlot", value: slot, onChange: (e) => setSlot(e.target.value), children: SLOTS.map((s) => /* @__PURE__ */ jsx("option", { value: s, children: s }, s)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "fld", children: [
                /* @__PURE__ */ jsx("span", { className: "fldl", id: "dWeeks", children: t.huurperiodeVast }),
                /* @__PURE__ */ jsxs("div", { className: "vast", "aria-labelledby": "dWeeks", children: [
                  /* @__PURE__ */ jsx("b", { children: t.huurperiodeDagen(rentalDays) }),
                  /* @__PURE__ */ jsx("small", { children: t.huurperiodeInbegrepen })
                ] })
              ] })
            ] }),
            datesError && /* @__PURE__ */ jsxs("div", { className: "plan pw", role: "status", children: [
              /* @__PURE__ */ jsx(WarnIcon, {}),
              /* @__PURE__ */ jsx("div", { className: "pt2", children: datesError })
            ] }),
            dateBlocked && /* @__PURE__ */ jsxs("div", { className: "plan pw", role: "status", children: [
              /* @__PURE__ */ jsx(WarnIcon, {}),
              /* @__PURE__ */ jsx("div", { className: "pt2", children: t.datumVol(start ? datumLang(start) : startDate, withinHorizon, AVAILABILITY_HORIZON_DAYS) })
            ] }),
            !dateBlocked && shiftedDate && shiftedDate.to === startDate && /* @__PURE__ */ jsxs("div", { className: "plan pw", role: "status", children: [
              /* @__PURE__ */ jsx(WarnIcon, {}),
              /* @__PURE__ */ jsx("div", { className: "pt2", children: t.datumVerschoven(
                datumLang(new Date(shiftedDate.from)),
                datumLang(new Date(shiftedDate.to))
              ) })
            ] }),
            start && end && !dateBlocked && /* @__PURE__ */ jsxs("div", { className: "plan", children: [
              /* @__PURE__ */ jsx(CalendarCheckIcon, {}),
              /* @__PURE__ */ jsxs("div", { className: "pt2", children: [
                t.planning({
                  start: datumLang(start),
                  slot,
                  dagen: rentalDays,
                  einde: datumLang(end),
                  droogtijd: days
                }),
                tooShort && /* @__PURE__ */ jsxs("span", { className: "pw", children: [
                  /* @__PURE__ */ jsx(WarnIcon, {}),
                  t.teKort
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "frow two", style: { marginTop: 16 }, children: [
              /* @__PURE__ */ jsxs("div", { className: "fld", children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "dEnd", children: t.ophaaldatum }),
                /* @__PURE__ */ jsx("input", { type: "date", id: "dEnd", readOnly: true, value: end ? isoDate(end) : "" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "fld", children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "dEndSlot", children: t.tijdslotOphaling }),
                /* @__PURE__ */ jsx("input", { type: "text", id: "dEndSlot", readOnly: true, value: slot })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "fnav", children: [
            /* @__PURE__ */ jsx("button", { className: "btn btn-o", type: "button", onClick: () => goTo(2), children: t.terug }),
            /* @__PURE__ */ jsxs(
              "button",
              {
                className: "btn btn-d",
                type: "button",
                disabled: nextBlocked !== null,
                onClick: () => goTo(4),
                children: [
                  nextBlocked === "laden" ? t.beschikbaarheidLaden : t.verderGegevens,
                  /* @__PURE__ */ jsx(ArrowRightIcon, {})
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: `pane${step === 4 ? " on" : ""}`, children: offerteVerstuurd && leverzone ? (
          /*
            De aanvraag is binnen. Geen aparte stap hiervoor: die zou langs
            de betaalstap moeten die voor deze bezoeker niet bestaat, en de
            voortgangsbalk bovenaan zou dan een betaling beloven die er
            niet komt.
          */
          /* @__PURE__ */ jsxs("div", { className: "blk", children: [
            /* @__PURE__ */ jsx("div", { className: "blkh", children: /* @__PURE__ */ jsx("h2", { children: "Uw aanvraag staat genoteerd" }) }),
            /* @__PURE__ */ jsxs("p", { className: "bsub", children: [
              "Wij hebben uw volledige pakketsamenstelling ontvangen, samen met het werfadres in",
              " ",
              /* @__PURE__ */ jsxs("b", { children: [
                customer.post,
                " ",
                customer.city
              ] }),
              "."
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "plan", children: [
              /* @__PURE__ */ jsx(CalendarCheckIcon, {}),
              /* @__PURE__ */ jsxs("div", { className: "pt2", children: [
                "Een collega berekent de transportprijs voor",
                " ",
                leverzone.zone.band.toLowerCase(),
                " en belt of mailt u",
                " ",
                /* @__PURE__ */ jsx("b", { children: "binnen één werkdag" }),
                " met een vaste prijs. De huurprijs van uw pakket ligt al vast op ",
                /* @__PURE__ */ jsxs("b", { children: [
                  euro(summary.grossTotal),
                  " incl. btw"
                ] }),
                " en verandert daar niet door. Pas wanneer u de transportprijs aanvaardt, boeken wij de toestellen voor u in — er is nu dus nog niets vastgelegd op",
                " ",
                start ? formatLongDate(start) : "uw gekozen datum",
                "."
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "plan", children: [
              /* @__PURE__ */ jsx(TruckIcon, {}),
              /* @__PURE__ */ jsxs("div", { className: "pt2", children: [
                "Liever meteen weg? U kunt de toestellen ook zelf afhalen in Aartselaar, aan de lagere afhaalprijs en zonder vervoerskost —",
                " ",
                /* @__PURE__ */ jsx(Link, { to: "/verhuur/afhalen", style: { fontWeight: 600 }, children: "bekijk afhalen" }),
                ". Vragen in tussentijd:",
                " ",
                /* @__PURE__ */ jsx("a", { href: `tel:${CONTACT.phoneE164}`, style: { fontWeight: 600 }, children: CONTACT.phoneLocal }),
                "."
              ] })
            ] })
          ] })
        ) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("div", { className: "blk", children: [
            /* @__PURE__ */ jsx("div", { className: "blkh", children: /* @__PURE__ */ jsx("h2", { children: t.gegevensKop }) }),
            /* @__PURE__ */ jsx("p", { className: "bsub", children: t.gegevensSub }),
            /* @__PURE__ */ jsxs("div", { className: "ktype", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  className: customerType === "part" ? "active" : void 0,
                  onClick: () => setCustomerType("part"),
                  children: t.particulier
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  className: customerType === "pro" ? "active" : void 0,
                  onClick: () => setCustomerType("pro"),
                  children: t.professioneel
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "frow two", children: [
              /* @__PURE__ */ jsxs("div", { className: "fld", children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "fName", children: t.naam }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    id: "fName",
                    placeholder: t.naamPlaceholder,
                    value: customer.name,
                    onChange: (e) => setCustomer({ ...customer, name: e.target.value })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "fld", children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "fTel", children: t.telefoon }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "tel",
                    id: "fTel",
                    inputMode: "tel",
                    autoComplete: "tel",
                    placeholder: "0470 00 00 00",
                    value: customer.tel,
                    onChange: (e) => setCustomer({ ...customer, tel: maskPhone(e.target.value) })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "frow two", style: { marginTop: 14 }, children: /* @__PURE__ */ jsxs("div", { className: "fld", style: { gridColumn: "span 2" }, children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "fMail", children: t.email }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "email",
                  id: "fMail",
                  inputMode: "email",
                  autoComplete: "email",
                  autoCapitalize: "none",
                  spellCheck: false,
                  placeholder: t.emailPlaceholder,
                  value: customer.mail,
                  onChange: (e) => setCustomer({ ...customer, mail: maskEmail(e.target.value) })
                }
              )
            ] }) }),
            customerType === "pro" && /* @__PURE__ */ jsxs("div", { className: "frow two", style: { marginTop: 14 }, children: [
              /* @__PURE__ */ jsxs("div", { className: "fld", children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "fComp", children: t.bedrijfsnaam }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    id: "fComp",
                    placeholder: t.bedrijfPlaceholder,
                    value: customer.company,
                    onChange: (e) => setCustomer({ ...customer, company: e.target.value })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "fld", children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "fBtw", children: t.btwNummer }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    id: "fBtw",
                    placeholder: "BE 0123.456.789",
                    value: customer.vat,
                    onChange: (e) => setCustomer({ ...customer, vat: e.target.value })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "frow", style: { marginTop: 14 }, children: /* @__PURE__ */ jsxs("div", { className: "fld", style: { gridColumn: "span 3" }, children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "fAddr", children: t.adresWerf }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  id: "fAddr",
                  placeholder: t.adresPlaceholder,
                  value: customer.addr,
                  onChange: (e) => setCustomer({ ...customer, addr: e.target.value })
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "frow", style: { marginTop: 14 }, children: [
              /* @__PURE__ */ jsxs("div", { className: "fld", children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "fPost", children: t.postcode }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    id: "fPost",
                    inputMode: "numeric",
                    placeholder: t.postcodePlaceholder,
                    maxLength: 4,
                    value: customer.post,
                    onChange: (e) => setCustomer({ ...customer, post: e.target.value.replace(/\D/g, "") })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "fld", style: { gridColumn: "span 2" }, children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "fCity", children: t.gemeente }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    id: "fCity",
                    placeholder: t.gemeentePlaceholder,
                    value: customer.city,
                    onChange: (e) => setCustomer({ ...customer, city: e.target.value })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "blkh", style: { marginTop: 24, display: offerte ? "none" : void 0 }, children: /* @__PURE__ */ jsx("h2", { children: t.betalenKop }) }),
            /* @__PURE__ */ jsxs("div", { className: "payopts", style: offerte ? { display: "none" } : void 0, children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  className: `payopt${payment === "online" ? " sel" : ""}`,
                  onClick: () => setPayment("online"),
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "pob", children: t.korting }),
                    /* @__PURE__ */ jsx("b", { children: t.volledigOnline }),
                    /* @__PURE__ */ jsx("span", { children: t.volledigOnlineUitleg }),
                    /* @__PURE__ */ jsx("span", { className: "pos", children: t.uBespaart(
                      eur(withVat(Math.round(summary.total - summary.transport) * ONLINE_DISCOUNT))
                    ) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  className: `payopt${payment === "levering" ? " sel" : ""}`,
                  onClick: () => setPayment("levering"),
                  children: [
                    /* @__PURE__ */ jsx("b", { children: t.voorschotKop(eur(DEPOSIT_GROSS)) }),
                    /* @__PURE__ */ jsx("span", { children: t.voorschotUitleg(eur(DEPOSIT_GROSS)) }),
                    /* @__PURE__ */ jsx("span", { className: "pos", children: t.factuurNaBetaling })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("label", { className: "cok", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "checkbox",
                  checked: customer.ok,
                  onChange: (e) => setCustomer({ ...customer, ok: e.target.checked })
                }
              ),
              " ",
              /* @__PURE__ */ jsx("span", { children: t.akkoord })
            ] }),
            !leverbaar && !offerte && /* @__PURE__ */ jsx("p", { className: "perr", children: "Vul eerst de postcode van de werf in bij stap 1, die bepaalt de transportvergoeding." }),
            offerte && leverzone && !offerteVerstuurd && /* @__PURE__ */ jsxs("div", { className: "offbox", children: [
              /* @__PURE__ */ jsx("b", { children: "Transportprijs op maat" }),
              /* @__PURE__ */ jsxs("p", { children: [
                "Uw werf ligt ",
                leverzone.zone.band.toLowerCase(),
                " van ons magazijn. Het pakket hierboven — ",
                /* @__PURE__ */ jsxs("b", { children: [
                  euro(summary.grossTotal),
                  " incl. btw"
                ] }),
                " — staat vast; het transport berekenen wij apart en bevestigen we binnen één werkdag. Wij sturen uw volledige samenstelling mee, u hoeft niets opnieuw in te vullen."
              ] })
            ] }),
            payError && /* @__PURE__ */ jsx("p", { className: "perr", children: payError })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "fnav", children: [
            /* @__PURE__ */ jsx("button", { className: "btn btn-o", type: "button", onClick: () => goTo(3), children: t.terug }),
            offerte ? /* @__PURE__ */ jsxs(
              "button",
              {
                className: "btn btn-r",
                type: "button",
                disabled: !isComplete(customer, customerType, true) || paying || offerteVerstuurd,
                onClick: vraagOfferte,
                children: [
                  offerteVerstuurd ? t.offerteVerstuurd : paying ? t.offerteVersturen : t.offerteVraag,
                  /* @__PURE__ */ jsx(ArrowRightIcon, {})
                ]
              }
            ) : /* @__PURE__ */ jsxs(
              "button",
              {
                className: "btn btn-r",
                type: "button",
                disabled: !isComplete(customer, customerType, leverbaar) || paying,
                onClick: payAndConfirm,
                children: [
                  paying ? t.voorbereiden : t.naarBetaling(eur(summary.payableGross)),
                  /* @__PURE__ */ jsx(ArrowRightIcon, {})
                ]
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: `pane${step === STEP_PAY ? " on" : ""}`, children: [
          /* @__PURE__ */ jsxs("div", { className: "blk", children: [
            /* @__PURE__ */ jsx("div", { className: "blkh", children: /* @__PURE__ */ jsx("h2", { children: t.betaalKop }) }),
            /* @__PURE__ */ jsx("p", { className: "bsub", children: t.betaalSub(eur(summary.payableGross)) }),
            /* @__PURE__ */ jsx("div", { className: "paybox", children: step === STEP_PAY && session?.clientSecret && stripeJs && /* @__PURE__ */ jsx(
              CheckoutElementsProvider,
              {
                stripe: stripeJs,
                options: {
                  clientSecret: session.clientSecret,
                  elementsOptions: { appearance: STRIPE_APPEARANCE }
                },
                children: /* @__PURE__ */ jsx(BoekingBetaalformulier, { bedrag: eur(summary.payableGross) })
              },
              session.clientSecret
            ) }),
            /* @__PURE__ */ jsxs("p", { className: "paynote", children: [
              /* @__PURE__ */ jsx(CheckIcon, { size: 13, strokeWidth: 3 }),
              /* @__PURE__ */ jsx("span", { children: t.vastgelegd(start ? datumLang(start) : "", slot) })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "fnav", children: /* @__PURE__ */ jsx("button", { className: "btn btn-o", type: "button", onClick: cancelPayment, children: t.terugGegevens }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: `pane${step === STEP_VERIFY ? " on" : ""}`, children: /* @__PURE__ */ jsxs("div", { className: "done", children: [
          /* @__PURE__ */ jsx("h2", { children: t.geduldKop }),
          /* @__PURE__ */ jsx("p", { children: t.geduldSub })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: `pane${step === STEP_DONE ? " on" : ""}`, children: /* @__PURE__ */ jsxs("div", { className: "done", children: [
          /* @__PURE__ */ jsx("div", { className: "dic", children: /* @__PURE__ */ jsx(CheckIcon, { size: 30, strokeWidth: 2.6 }) }),
          /* @__PURE__ */ jsx("h2", { children: t.vastKop }),
          /* @__PURE__ */ jsx("p", { children: t.vastSub(eur(DEPOSIT_GROSS)) }),
          /* @__PURE__ */ jsxs("div", { className: "dref", children: [
            /* @__PURE__ */ jsx("span", { children: t.referentie }),
            /* @__PURE__ */ jsx("span", { children: reference })
          ] }),
          ordered && /* @__PURE__ */ jsxs("div", { className: "dord", children: [
            ordered.package && /* @__PURE__ */ jsx("h3", { children: ordered.package }),
            ordered.devices.length > 0 && /* @__PURE__ */ jsx("ul", { children: ordered.devices.map((line) => /* @__PURE__ */ jsx("li", { children: line }, line)) }),
            /* @__PURE__ */ jsxs("dl", { children: [
              ordered.deliveryDate && /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx("dt", { children: t.levering }),
                /* @__PURE__ */ jsxs("dd", { children: [
                  longDate(ordered.deliveryDate, taal),
                  ordered.deliverySlot ? ` · ${ordered.deliverySlot}` : ""
                ] })
              ] }),
              ordered.rentalStart && ordered.rentalEnd && /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx("dt", { children: t.huurperiode }),
                /* @__PURE__ */ jsxs("dd", { children: [
                  longDate(ordered.rentalStart, taal),
                  " ",
                  t.tem,
                  " ",
                  longDate(ordered.rentalEnd, taal),
                  ordered.rentalDays ? ` · ${ordered.rentalDays} ${t.dagen}` : ""
                ] })
              ] }),
              ordered.paid !== null && /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx("dt", { children: t.betaald }),
                /* @__PURE__ */ jsx("dd", { children: eur(ordered.paid) })
              ] }),
              ordered.balance !== null && ordered.balance > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx("dt", { children: t.nogTeBetalen }),
                /* @__PURE__ */ jsx("dd", { children: eur(ordered.balance) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "fnav", style: { justifyContent: "center" }, children: [
            /* @__PURE__ */ jsx(Link, { className: "btn btn-o", to: lp(`/verhuur/pakket?${configToQuery(config)}${extraNaarQuery(dev)}`), children: t.terugNaarPakket }),
            /* @__PURE__ */ jsx(Link, { className: "btn btn-d", to: lp("/"), children: t.naarHome })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "sum", children: [
        /* @__PURE__ */ jsxs("div", { className: "sh", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              className: "sh-zoom",
              onClick: () => setFotoGroot(true),
              "aria-label": t.fotoVergroten,
              children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: packageImage(config, allItems(config, dev)),
                    alt: t.uwDroogpakket,
                    loading: "lazy",
                    decoding: "async"
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "sh-zoom-i", "aria-hidden": "true", children: /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                  /* @__PURE__ */ jsx("circle", { cx: "11", cy: "11", r: "7" }),
                  /* @__PURE__ */ jsx("path", { d: "M21 21l-4.3-4.3M11 8v6M8 11h6" })
                ] }) })
              ]
            }
          ),
          fotoGroot && createPortal(
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "sh-groot",
                role: "dialog",
                "aria-modal": "true",
                "aria-label": t.uwDroogpakket,
                onClick: () => setFotoGroot(false),
                children: [
                  /* @__PURE__ */ jsx("img", { src: packageImage(config, allItems(config, dev)), alt: t.uwDroogpakket }),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      type: "button",
                      className: "sh-groot-x",
                      "aria-label": t.fotoSluiten,
                      onClick: () => setFotoGroot(false),
                      autoFocus: true,
                      children: "×"
                    }
                  )
                ]
              }
            ),
            document.body
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "st", children: [
          /* @__PURE__ */ jsx("div", { className: "sl", children: t.uwPakket }),
          /* @__PURE__ */ jsx("h3", { children: taal === "nl" ? packageTitle(config) : packageSpecLineInTaal(config, taal) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "sb", children: [
          /* @__PURE__ */ jsxs("div", { className: "sline inc", children: [
            /* @__PURE__ */ jsx("span", { children: offerte || summary.transport > 0 ? t.plaatsingRegel : t.leveringRegel }),
            /* @__PURE__ */ jsx("b", { children: t.inbegrepen })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            rows.filter((r) => r.inc).map((r) => /* @__PURE__ */ jsxs("div", { className: "sline inc", children: [
              /* @__PURE__ */ jsx("span", { children: regelInTaal(r.l, taal) }),
              /* @__PURE__ */ jsx("b", { children: t.inbegrepen })
            ] }, r.l)),
            /* @__PURE__ */ jsxs("div", { className: "sline", children: [
              /* @__PURE__ */ jsx("span", { children: t.pakketRegel(summary.deviceCount, summary.weeks) }),
              /* @__PURE__ */ jsx("b", { children: eur(base) })
            ] }),
            rows.filter((r) => !r.inc).map((r) => /* @__PURE__ */ jsxs("div", { className: "sline", children: [
              /* @__PURE__ */ jsx("span", { children: regelInTaal(r.l, taal) }),
              /* @__PURE__ */ jsx("b", { children: eur(r.v) })
            ] }, r.l)),
            offerte && /* @__PURE__ */ jsxs("div", { className: "sline opmaat", children: [
              /* @__PURE__ */ jsx("span", { children: t.transportRegel(leverzone?.zone.band ?? "") }),
              /* @__PURE__ */ jsx("b", { children: t.opMaat })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "stot", children: [
            /* @__PURE__ */ jsxs("div", { className: "tl", style: { fontSize: 13 }, children: [
              /* @__PURE__ */ jsx("span", { className: "tll", style: { fontWeight: 400 }, children: t.huurprijsExcl }),
              /* @__PURE__ */ jsx("span", { className: "tlv", style: { fontSize: 14 }, children: eur(total) })
            ] }),
            discount > 0 && /* @__PURE__ */ jsxs("div", { className: "tl", style: { fontSize: 13 }, children: [
              /* @__PURE__ */ jsx("span", { className: "tll", style: { fontWeight: 400 }, children: t.kortingOnline }),
              /* @__PURE__ */ jsxs("span", { className: "tlv", style: { fontSize: 14, color: "#2e9e5b" }, children: [
                "− ",
                eur(discount)
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "tl", style: { fontSize: 13 }, children: [
              /* @__PURE__ */ jsx("span", { className: "tll", style: { fontWeight: 400 }, children: t.btw }),
              /* @__PURE__ */ jsx("span", { className: "tlv", style: { fontSize: 14 }, children: eur(summary.vat) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "tl totaal", children: [
              /* @__PURE__ */ jsx("span", { className: "tll", children: t.totaalIncl }),
              /* @__PURE__ */ jsx("span", { className: "tlv", children: eur(summary.grossTotal) })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "vat", children: t.perWeek(eur(Math.round(summary.grossTotal / summary.weeks * 100) / 100)) }),
            offerte && /* @__PURE__ */ jsx("div", { className: "vat opmaat", children: "Transport komt hier nog bij — wij bezorgen u binnen één werkdag een vaste prijs." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "sf", children: [
          step >= 1 && step < 4 && /* @__PURE__ */ jsx(
            "button",
            {
              className: "btn btn-r",
              type: "button",
              disabled: nextBlocked !== null,
              onClick: () => goTo(step + 1),
              children: nextBlocked === "laden" ? t.beschikbaarheidLaden : t.volgende[step] ?? t.verder
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "note", children: t.noot })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx(V3Footer, {})
  ] });
};
export {
  VerhuurBoekingPage as default
};
