import { ViteReactSSG } from "vite-react-ssg";
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useCallback, useSyncExternalStore, useState, useEffect, lazy, useRef, Suspense } from "react";
import { useLocation, Outlet, useRouteError, isRouteErrorResponse } from "react-router-dom";
import { ArrowUp } from "lucide-react";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/i18n/taal.ts");
const ACTIEVE_TALEN = ["nl", "fr", "en"];
function prefix(taal) {
  return taal === "nl" ? "" : `/${taal}`;
}
function taalUitPad(pad) {
  const eerste = pad.split("/")[1];
  return eerste === "fr" || eerste === "en" ? eerste : "nl";
}
function zonderPrefix(pad) {
  const taal = taalUitPad(pad);
  if (taal === "nl") return pad || "/";
  const rest = pad.slice(prefix(taal).length);
  return rest === "" ? "/" : rest;
}
const HTML_LANG = { nl: "nl-BE", fr: "fr-BE", en: "en" };
const OG_LOCALE = { nl: "nl_BE", fr: "fr_BE", en: "en_GB" };
const NUMBER_LOCALE = { nl: "nl-BE", fr: "fr-BE", en: "en-GB" };
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/i18n/paden.ts");
const STATISCH = {
  "/": { fr: "/", en: "/" },
  /* Toepassingen */
  "/chape-drogen": { fr: "/sechage-chape", en: "/screed-drying" },
  "/pleisterwerk-drogen": { fr: "/sechage-plafonnage", en: "/plaster-drying" },
  "/nieuwbouw-drogen": { fr: "/sechage-nouvelle-construction", en: "/new-build-drying" },
  "/waterschade": { fr: "/degats-des-eaux", en: "/water-damage" },
  "/renovatie": { fr: "/renovation", en: "/renovation" },
  "/ozonbehandeling": { fr: "/traitement-ozone", en: "/ozone-treatment" },
  "/ontschimmeling": { fr: "/elimination-moisissures", en: "/mould-removal" },
  "/luchtontvochtiger-huren": { fr: "/location-deshumidificateur", en: "/dehumidifier-hire" },
  /* Aanbod en bestellen */
  "/machines": { fr: "/machines", en: "/machines" },
  "/prijzen": { fr: "/prix", en: "/prices" },
  "/levering": { fr: "/livraison", en: "/delivery" },
  "/afhalen": { fr: "/enlevement", en: "/collection" },
  "/booking": { fr: "/reservation", en: "/booking" },
  "/booking/success": { fr: "/reservation/confirmation", en: "/booking/success" },
  /* Verhuurfunnel */
  "/verhuur/calculator": { fr: "/location/calculateur", en: "/rental/calculator" },
  "/verhuur/simulator": { fr: "/location/simulateur", en: "/rental/simulator" },
  "/verhuur/pakket": { fr: "/location/pack", en: "/rental/package" },
  "/verhuur/afhalen": { fr: "/location/enlevement", en: "/rental/collection" },
  "/verhuur/boeking": { fr: "/location/reservation", en: "/rental/booking" },
  "/verhuur/saldo": { fr: "/location/solde", en: "/rental/balance" },
  "/verhuur/saldo/betaald": { fr: "/location/solde/paye", en: "/rental/balance/paid" },
  "/verhuur/saldo/niet-betaald": { fr: "/location/solde/non-paye", en: "/rental/balance/unpaid" },
  "/verhuur/verlengen": { fr: "/location/prolonger", en: "/rental/extend" },
  "/verhuur/toebehoren/condenspomp": {
    fr: "/location/accessoires/pompe-a-condensats",
    en: "/rental/accessories/condensate-pump"
  },
  /* Uitleg en vertrouwen */
  "/hoe-drogen-werkt": { fr: "/comment-fonctionne-le-sechage", en: "/how-drying-works" },
  "/waarom-bouwdroging": { fr: "/pourquoi-secher-son-chantier", en: "/why-construction-drying" },
  "/drooggarantie": { fr: "/garantie-sechage", en: "/drying-guarantee" },
  "/gids": { fr: "/guide", en: "/guide" },
  "/gids/hoe-lang-moet-chape-drogen": { fr: "/guide/temps-de-sechage-chape", en: "/guide/screed-drying-time" },
  "/gids/hoe-lang-moet-pleisterwerk-drogen": {
    fr: "/guide/temps-de-sechage-plafonnage",
    en: "/guide/plaster-drying-time"
  },
  "/gids/condensdroger-of-adsorptiedroger": {
    fr: "/guide/deshumidificateur-condensation-ou-adsorption",
    en: "/guide/condensation-or-desiccant-dehumidifier"
  },
  "/gids/natuurlijk-drogen-of-bouwdroger": {
    fr: "/guide/sechage-naturel-ou-deshumidificateur",
    en: "/guide/natural-drying-or-dehumidifier"
  },
  "/gids/stroomverbruik-bouwdroger": {
    fr: "/guide/consommation-electrique-deshumidificateur",
    en: "/guide/dehumidifier-power-consumption"
  },
  "/realisaties": { fr: "/realisations", en: "/projects" },
  /* Bedrijf en service */
  "/over-ons": { fr: "/a-propos", en: "/about-us" },
  "/contact": { fr: "/contact", en: "/contact" },
  "/klantservice": { fr: "/service-client", en: "/customer-service" },
  "/sitemap": { fr: "/plan-du-site", en: "/sitemap" },
  "/privacy": { fr: "/confidentialite", en: "/privacy" },
  "/algemene-voorwaarden": { fr: "/conditions-generales", en: "/terms-and-conditions" }
};
const TOESTEL_SLUG_VERTAALD = {
  "bouwdroger-50-liter": { fr: "deshumidificateur-chantier-50-litres", en: "construction-dehumidifier-50-litre" },
  "bouwdroger-70-liter": { fr: "deshumidificateur-chantier-70-litres", en: "construction-dehumidifier-70-litre" },
  "bouwdroger-110-liter": { fr: "deshumidificateur-chantier-110-litres", en: "construction-dehumidifier-110-litre" },
  adsorptiedroger: { fr: "deshumidificateur-adsorption", en: "desiccant-dehumidifier" },
  "axiaalventilator-4500-m3": { fr: "ventilateur-axial-4500-m3", en: "axial-fan-4500-m3" },
  "radiaalventilator-2250-m3": { fr: "ventilateur-radial-2250-m3", en: "radial-fan-2250-m3" },
  "bouwkachel-30-kw": { fr: "chauffage-de-chantier-30-kw", en: "site-heater-30-kw" },
  "bouwkachel-20-kw": { fr: "chauffage-de-chantier-20-kw", en: "site-heater-20-kw" }
};
const REALISATIE_SLUG_VERTAALD = {
  "expositieruimte-drogen-boom": { fr: "sechage-salle-exposition-boom", en: "showroom-drying-boom" },
  "kelder-en-kamer-drogen-antwerpen": { fr: "sechage-cave-et-chambre-anvers", en: "basement-and-room-drying-antwerp" },
  "badkamer-drogen-brussel": { fr: "sechage-salle-de-bains-bruxelles", en: "bathroom-drying-brussels" },
  "pleisterwerk-drogen-oostende": { fr: "sechage-plafonnage-ostende", en: "plaster-drying-ostend" },
  "chape-pleisterwerk-drogen-hasselt": { fr: "sechage-chape-plafonnage-hasselt", en: "screed-plaster-drying-hasselt" },
  "nieuwbouw-drogen-putte": { fr: "sechage-nouvelle-construction-putte", en: "new-build-drying-putte" },
  "waterschade-drogen-bocholt": { fr: "sechage-degats-des-eaux-bocholt", en: "water-damage-drying-bocholt" },
  "waterschade-drogen-bedrijfsgebouw": { fr: "sechage-degats-des-eaux-batiment-entreprise", en: "water-damage-drying-commercial-building" },
  "bouwvocht-drogen-wintam": { fr: "sechage-humidite-construction-wintam", en: "construction-moisture-drying-wintam" },
  "nieuwbouw-drogen-kontich": { fr: "sechage-nouvelle-construction-kontich", en: "new-build-drying-kontich" },
  "pleisterwerk-drogen-berchem": { fr: "sechage-plafonnage-berchem", en: "plaster-drying-berchem" },
  "pleisterwerk-drogen-sint-pieters-woluwe": { fr: "sechage-plafonnage-woluwe-saint-pierre", en: "plaster-drying-woluwe-saint-pierre" },
  "kelder-drogen-lokeren": { fr: "sechage-cave-lokeren", en: "basement-drying-lokeren" },
  "woning-drogen-waterschade": { fr: "sechage-habitation-degats-des-eaux", en: "home-drying-water-damage" },
  "berging-drogen-berlare": { fr: "sechage-debarras-berlare", en: "storage-room-drying-berlare" },
  "kelder-drogen-brugge": { fr: "sechage-cave-bruges", en: "basement-drying-bruges" },
  "schimmelsanering-winkelkelder": { fr: "elimination-moisissures-cave-commerce", en: "mould-removal-shop-basement" },
  "pleisterwerk-drogen-merksem": { fr: "sechage-plafonnage-merksem", en: "plaster-drying-merksem" },
  "woning-drogen-brussel": { fr: "sechage-habitation-bruxelles", en: "home-drying-brussels" },
  "nieuwbouwvilla-drogen-schilde": { fr: "sechage-villa-neuve-schilde", en: "new-villa-drying-schilde" },
  "kelder-drogen-antwerpen": { fr: "sechage-cave-anvers", en: "basement-drying-antwerp" },
  "bouwdroging-winkelpand": { fr: "sechage-chantier-commerce", en: "construction-drying-retail-unit" }
};
const MAPPEN = [
  { nl: "/verhuur/toestel/", fr: "/location/appareil/", en: "/rental/unit/", slug: TOESTEL_SLUG_VERTAALD },
  { nl: "/levering/pakket/", fr: "/livraison/pack/", en: "/delivery/package/" },
  { nl: "/realisaties/", fr: "/realisations/", en: "/projects/", slug: REALISATIE_SLUG_VERTAALD },
  { nl: "/product/", fr: "/produit/", en: "/product/" }
];
const EXTRA = /* @__PURE__ */ new Map();
function registreerPaden(paden) {
  for (const [nl, v] of Object.entries(paden)) EXTRA.set(nl, v);
  omgekeerd = null;
}
let omgekeerd = null;
function omgekeerdeTabel() {
  if (omgekeerd) return omgekeerd;
  omgekeerd = /* @__PURE__ */ new Map();
  for (const [nl, v] of [...Object.entries(STATISCH), ...EXTRA.entries()]) {
    if (v.fr) omgekeerd.set(`fr:${v.fr}`, nl);
    if (v.en) omgekeerd.set(`en:${v.en}`, nl);
  }
  return omgekeerd;
}
function zonderSlash(pad) {
  return pad.length > 1 && pad.endsWith("/") ? pad.slice(0, -1) : pad;
}
function vertaalPad(nlPad, taal) {
  if (!ACTIEVE_TALEN.includes(taal)) return null;
  const [basis, rest = ""] = splitsQuery(zonderSlash(nlPad));
  if (taal === "nl") return basis + rest;
  const vast = STATISCH[basis] ?? EXTRA.get(basis);
  if (vast) return vast[taal] ? plak(taal, vast[taal]) + rest : null;
  for (const m of MAPPEN) {
    if (basis.startsWith(m.nl) && basis.length > m.nl.length) {
      const seg = basis.slice(m.nl.length);
      const doel = m.slug ? m.slug[seg]?.[taal] : seg;
      if (!doel) return null;
      return plak(taal, m[taal] + doel) + rest;
    }
  }
  return null;
}
function naarNl(pad) {
  const taal = taalUitPad(pad);
  const [kaal, rest = ""] = splitsQuery(zonderSlash(zonderPrefix(pad)));
  if (taal === "nl") return kaal + rest;
  const nl = omgekeerdeTabel().get(`${taal}:${kaal}`);
  if (nl) return nl + rest;
  for (const m of MAPPEN) {
    const p = m[taal];
    if (kaal.startsWith(p) && kaal.length > p.length) {
      const seg = kaal.slice(p.length);
      const nlSeg = m.slug ? Object.keys(m.slug).find((k) => m.slug[k][taal] === seg) : seg;
      if (!nlSeg) return null;
      return m.nl + nlSeg + rest;
    }
  }
  return null;
}
function wisselPad(huidigPad, doel) {
  const nl = naarNl(huidigPad);
  return nl && vertaalPad(nl, doel) || plak(doel, "/");
}
function alternatieven(huidigPad) {
  const nl = naarNl(huidigPad);
  if (!nl) return {};
  const uit = {};
  for (const t of ACTIEVE_TALEN) {
    const p = vertaalPad(nl, t);
    if (p) uit[t] = p;
  }
  return uit;
}
function plak(taal, pad) {
  if (taal === "nl") return pad;
  return pad === "/" ? `${prefix(taal)}` : `${prefix(taal)}${pad}`;
}
function splitsQuery(pad) {
  const i = pad.search(/[?#]/);
  return i < 0 ? [pad] : [pad.slice(0, i), pad.slice(i)];
}
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/i18n/useTaal.ts");
function useTaal() {
  return taalUitPad(useLocation().pathname);
}
function kies(copy, taal) {
  return copy[taal] ?? copy.nl;
}
function useCopy(copy) {
  return kies(copy, useTaal());
}
function useLokaalPad() {
  const taal = useTaal();
  return useCallback((nlPad) => lokaalPad(nlPad, taal), [taal]);
}
function lokaalPad(nlPad, taal) {
  if (taal === "nl") return nlPad;
  return vertaalPad(nlPad, taal) ?? nlPad;
}
function formatEuro(bedrag, taal, decimalen = 2) {
  return bedrag.toLocaleString(NUMBER_LOCALE[taal], {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: decimalen,
    maximumFractionDigits: decimalen
  });
}
const SLEUTEL = "vernast.voorkeur";
const luisteraars = /* @__PURE__ */ new Set();
function lees() {
  try {
    const ruw = localStorage.getItem(SLEUTEL);
    if (!ruw) return null;
    const v = JSON.parse(ruw);
    if (v && typeof v === "object" && "klant" in v && "taal" in v) return v;
  } catch {
  }
  return null;
}
let cache;
function snapshot() {
  if (cache === void 0) cache = lees();
  return cache;
}
function bewaarVoorkeur(v) {
  cache = v;
  try {
    localStorage.setItem(SLEUTEL, JSON.stringify(v));
  } catch {
  }
  luisteraars.forEach((f) => f());
}
function abonneer(f) {
  luisteraars.add(f);
  return () => luisteraars.delete(f);
}
function useVoorkeur() {
  return useSyncExternalStore(abonneer, snapshot, () => null);
}
function useKlant() {
  return useVoorkeur()?.klant ?? "particulier";
}
const BTW = 0.21;
function useToonBedrag() {
  const klant = useKlant();
  const taal = useTaal();
  return useCallback(
    (excl) => {
      const bedrag = klant === "bedrijf" ? excl : Math.round(excl * (1 + BTW) * 100) / 100;
      const label = BTW_LABEL[taal][klant];
      return { bedrag, label, tekst: formatEuro(bedrag, taal) };
    },
    [klant, taal]
  );
}
const BTW_LABEL = {
  nl: { particulier: "incl. btw", bedrijf: "excl. btw" },
  fr: { particulier: "TVAC", bedrijf: "HTVA" },
  en: { particulier: "incl. VAT", bedrijf: "excl. VAT" }
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/FloatingWhatsApp.tsx");
const COPY$1 = { nl: { label: "WhatsApp ons" }, fr: { label: "Écrivez-nous sur WhatsApp" }, en: { label: "WhatsApp us" } };
const WhatsAppGlyph = ({ className }) => /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className, "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" }) });
const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { pathname } = useLocation();
  const t = useCopy(COPY$1);
  const nlPad = naarNl(pathname) ?? pathname;
  const [hideForFooter, setHideForFooter] = useState(false);
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHideForFooter(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, [pathname]);
  const isWaterschade = nlPad === "/waterschade";
  if (nlPad === "/verhuur/simulator") return null;
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href: "https://wa.me/3236899065",
      target: "_blank",
      rel: "noopener noreferrer",
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      className: [
        /*
          #25D366 is het groen van WhatsApp zelf. De knop stond op een eigen
          hsl-waarde die er net naast lag; met het merkteken erop valt dat op.
        */
        "fixed right-4 z-40 flex items-center gap-2 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#1DA851]",
        isHovered ? "px-5 py-3" : "p-3.5",
        hideForFooter ? "opacity-0 pointer-events-none" : "",
        isWaterschade ? "bottom-[4.5rem] lg:bottom-6" : "bottom-6"
      ].join(" "),
      "aria-label": t.label,
      children: [
        /* @__PURE__ */ jsx(WhatsAppGlyph, { className: "h-6 w-6 flex-shrink-0" }),
        isHovered && /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold whitespace-nowrap animate-fade-in", children: t.label })
      ]
    }
  );
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/ScrollToTop.tsx");
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const { pathname, hash } = useLocation();
  const isWaterschade = pathname === "/waterschade";
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);
  useEffect(() => {
    if (hash) {
      let raf2 = 0;
      let tries = 0;
      const jump = () => {
        let target = null;
        try {
          target = document.querySelector(hash);
        } catch {
          target = null;
        }
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (tries++ < 20) {
          raf2 = requestAnimationFrame(jump);
        }
      };
      jump();
      return () => cancelAnimationFrame(raf2);
    }
    const toTop = () => window.scrollTo({ top: 0, behavior: "instant" });
    toTop();
    const raf = requestAnimationFrame(toTop);
    return () => cancelAnimationFrame(raf);
  }, [pathname, hash]);
  if (!visible) return null;
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
      className: "fixed right-4 z-40 w-10 h-10 rounded-full bg-muted border border-border text-muted-foreground hover:bg-foreground hover:text-background shadow-md transition-all duration-200 flex items-center justify-center animate-fade-in " + (isWaterschade ? "bottom-[7.5rem] lg:bottom-20" : "bottom-20"),
      "aria-label": "Scroll naar boven",
      children: /* @__PURE__ */ jsx(ArrowUp, { className: "h-4 w-4" })
    }
  );
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/Layout.tsx");
const KeuzePopup = lazy(() => (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/KeuzePopup.tsx"), import("./assets/KeuzePopup-D2Z4Etsl.js")));
const ZONDER_POPUP = /\/(saldo|solde|balance|verlengen|prolonger|extend|success|confirmation)(\/|$)/;
const Layout = () => {
  const location = useLocation();
  const initialPath = useRef(location.pathname);
  const voorkeur = useVoorkeur();
  const [gemount, setGemount] = useState(false);
  const [popupDicht, setPopupDicht] = useState(false);
  useEffect(() => setGemount(true), []);
  const opnieuw = gemount && new URLSearchParams(location.search).has("taalkeuze");
  const toonPopup = gemount && (!voorkeur || opnieuw) && !popupDicht && !ZONDER_POPUP.test(location.pathname);
  const navigated = useRef(false);
  if (!navigated.current && location.pathname !== initialPath.current) {
    navigated.current = true;
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ScrollToTop, {}),
    toonPopup && /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(KeuzePopup, { onKlaar: () => setPopupDicht(true) }) }),
    /* @__PURE__ */ jsx(FloatingWhatsApp, {}),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: navigated.current ? "page-shell page-enter" : "page-shell",
        children: /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(Outlet, {}) })
      },
      location.pathname
    )
  ] });
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/ErrorPage.tsx");
const PHONE = "+3236899065";
const PHONE_LABEL = "03 689 90 65";
const MAIL = "info@vernast-bouwdrogers.be";
const COPY = {
  nl: {
    fouten: {
      nietGevonden: {
        badge: "Pagina niet gevonden",
        title: "Deze pagina bestaat niet (meer)",
        lead: "De link is verlopen of er zit een typfout in het adres. Via de startpagina vindt u alle toestellen en pakketten terug."
      },
      server: {
        badge: "Er ging iets mis",
        title: "We konden deze pagina niet laden",
        lead: "Onze server gaf een fout terug. Probeer het zo dadelijk opnieuw, blijft het misgaan, bel of mail ons dan even, dan regelen we het manueel."
      },
      client: {
        badge: "Er ging iets mis",
        title: "Er liep iets mis aan onze kant",
        lead: "Dit ligt niet aan u. Probeer de pagina opnieuw te laden, lukt dat niet, bel of mail ons dan even, dan helpen we u meteen verder."
      }
    },
    tag: "Bouwdroogservice",
    opnieuw: "Probeer opnieuw",
    start: "Naar de startpagina",
    hulp: "Liever meteen iemand spreken?",
    details: "Technische details (alleen zichtbaar in ontwikkeling)"
  },
  fr: {
    fouten: {
      nietGevonden: {
        badge: "Page introuvable",
        title: "Cette page n'existe pas (ou plus)",
        lead: "Le lien a expiré ou l'adresse contient une faute de frappe. Depuis la page d'accueil, vous retrouvez tous nos appareils et packs."
      },
      server: {
        badge: "Un problème est survenu",
        title: "Nous n'avons pas pu charger cette page",
        lead: "Notre serveur a renvoyé une erreur. Réessayez dans un instant ; si le problème persiste, appelez-nous ou écrivez-nous et nous réglerons cela manuellement."
      },
      client: {
        badge: "Un problème est survenu",
        title: "Un problème est survenu de notre côté",
        lead: "Vous n'y êtes pour rien. Rechargez la page ; si cela ne fonctionne pas, appelez-nous ou écrivez-nous et nous vous aidons tout de suite."
      }
    },
    tag: "Service de séchage de chantier",
    opnieuw: "Réessayer",
    start: "Vers la page d'accueil",
    hulp: "Vous préférez parler à quelqu'un tout de suite ?",
    details: "Détails techniques (visibles uniquement en développement)"
  },
  en: {
    fouten: {
      nietGevonden: {
        badge: "Page not found",
        title: "This page does not exist (any more)",
        lead: "The link has expired or there is a typo in the address. From the homepage you will find all our units and packages again."
      },
      server: {
        badge: "Something went wrong",
        title: "We could not load this page",
        lead: "Our server returned an error. Please try again in a moment; if it keeps going wrong, give us a call or send an email and we will sort it out manually."
      },
      client: {
        badge: "Something went wrong",
        title: "Something went wrong on our side",
        lead: "This is not your fault. Try reloading the page; if that does not work, give us a call or send an email and we will help you straight away."
      }
    },
    tag: "Building drying service",
    opnieuw: "Try again",
    start: "To the homepage",
    hulp: "Rather speak to someone straight away?",
    details: "Technical details (only visible in development)"
  }
};
function describe(error, t) {
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) return { code: "404", ...t.fouten.nietGevonden };
    return { code: String(error.status), ...t.fouten.server };
  }
  return { code: "500", ...t.fouten.client };
}
function technicalDetails(error) {
  if (isRouteErrorResponse(error)) {
    return { message: `${error.status} ${error.statusText}`, stack: String(error.data ?? "") };
  }
  if (error instanceof Error) {
    return { message: error.message, stack: error.stack };
  }
  return { message: String(error) };
}
const ErrorPage = () => {
  const error = useRouteError();
  const t = useCopy(COPY);
  const taal = useTaal();
  const copy = describe(error, t);
  technicalDetails(error);
  return /* @__PURE__ */ jsxs("div", { className: "err", children: [
    /* @__PURE__ */ jsxs("header", { className: "err-top", children: [
      /* @__PURE__ */ jsxs("span", { className: "err-mark", children: [
        "VERNAST",
        /* @__PURE__ */ jsx("span", { children: "." })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "err-tag", children: t.tag })
    ] }),
    /* @__PURE__ */ jsx("main", { className: "err-main", children: /* @__PURE__ */ jsxs("div", { className: "err-wrap", children: [
      /* @__PURE__ */ jsx("div", { className: "err-code", "data-code": copy.code, "aria-hidden": "true", children: copy.code }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("span", { className: "err-pill", children: [
          /* @__PURE__ */ jsx("i", {}),
          copy.badge
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "err-title", children: copy.title }),
        /* @__PURE__ */ jsx("p", { className: "err-lead", children: copy.lead }),
        /* @__PURE__ */ jsxs("div", { className: "err-actions", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: "err-btn err-btn-r",
              onClick: () => window.location.reload(),
              children: t.opnieuw
            }
          ),
          /* @__PURE__ */ jsx("a", { className: "err-btn err-btn-o", href: lokaalPad("/", taal), children: t.start })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "err-help", children: [
          /* @__PURE__ */ jsx("span", { children: t.hulp }),
          /* @__PURE__ */ jsx("a", { href: `tel:${PHONE}`, children: PHONE_LABEL }),
          /* @__PURE__ */ jsx("a", { href: `mailto:${MAIL}`, children: MAIL })
        ] })
      ] })
    ] }) }),
    false
  ] });
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/regio-slugs.ts");
function kaartVoor(route) {
  if (!route.metNederland) {
    return { src: "/vernast/belgie-kaart-rood.webp", width: 1200, height: 980, pin: route.pin };
  }
  const top = (0.51 + parseFloat(route.pin.top) / 100 * 2.01) / 2.52;
  return {
    src: "/vernast/kaart-belgie-nederland-v2.svg",
    width: 1200,
    height: 1228,
    pin: { left: route.pin.left, top: `${(top * 100).toFixed(1)}%` }
  };
}
const REGIO_ROUTES = [
  {
    slug: "antwerpen",
    name: "Antwerpen",
    nameFr: "Anvers",
    slugFr: "anvers",
    nameEn: "Antwerp",
    zinEn: "the province of Antwerp",
    slugEn: "antwerp",
    path: "/bouwdroger-huren-antwerpen",
    towns: [
      "Antwerpen",
      "Aartselaar",
      "Mechelen",
      "Turnhout",
      "Lier",
      "Boom",
      "Kontich",
      "Geel",
      "Mol",
      "Herentals",
      "Heist-op-den-Berg",
      "Brasschaat",
      "Schoten",
      "Wilrijk",
      "Edegem",
      "Duffel",
      "Mortsel"
    ],
    pin: { left: "57%", top: "12%" }
  },
  {
    slug: "oost-vlaanderen",
    name: "Oost-Vlaanderen",
    nameFr: "Flandre orientale",
    slugFr: "flandre-orientale",
    nameEn: "East Flanders",
    slugEn: "east-flanders",
    path: "/bouwdroger-huren-oost-vlaanderen",
    towns: [
      "Gent",
      "Aalst",
      "Sint-Niklaas",
      "Dendermonde",
      "Lokeren",
      "Wetteren",
      "Deinze",
      "Eeklo",
      "Ninove",
      "Geraardsbergen",
      "Oudenaarde",
      "Ronse",
      "Zottegem",
      "Temse",
      "Beveren",
      "Zelzate"
    ],
    pin: { left: "34%", top: "20%" }
  },
  {
    slug: "vlaams-brabant",
    name: "Vlaams-Brabant",
    nameFr: "Brabant flamand",
    slugFr: "brabant-flamand",
    nameEn: "Flemish Brabant",
    slugEn: "flemish-brabant",
    path: "/bouwdroger-huren-vlaams-brabant",
    towns: [
      "Leuven",
      "Vilvoorde",
      "Halle",
      "Aarschot",
      "Tienen",
      "Zaventem",
      "Dilbeek",
      "Grimbergen",
      "Diest",
      "Asse",
      "Overijse",
      "Tervuren",
      "Machelen",
      "Beersel",
      "Sint-Pieters-Leeuw",
      "Haacht"
    ],
    pin: { left: "58%", top: "32%" }
  },
  {
    slug: "brussel",
    name: "Brussel",
    nameFr: "Bruxelles",
    slugFr: "bruxelles",
    nameEn: "Brussels-Capital Region",
    zinEn: "the Brussels-Capital Region",
    slugEn: "brussels",
    path: "/bouwdroger-huren-brussel",
    towns: [
      "Brussel",
      "Schaarbeek",
      "Elsene",
      "Anderlecht",
      "Sint-Gillis",
      "Sint-Jans-Molenbeek",
      "Etterbeek",
      "Jette",
      "Vorst",
      "Ukkel",
      "Evere",
      "Oudergem",
      "Sint-Lambrechts-Woluwe",
      "Sint-Pieters-Woluwe",
      "Watermaal-Bosvoorde",
      "Ganshoren",
      "Koekelberg",
      "Sint-Agatha-Berchem",
      "Sint-Joost-ten-Node"
    ],
    /*
      Brussel ligt midden in Vlaams-Brabant, dus de twee spelden kunnen niet
      allebei exact staan zonder over elkaar te vallen. Deze staat net ten
      zuidwesten van die van de provincie, in de richting van Halle. Stond
      eerder hardgecodeerd in `V3Regio`; nu de gewestpagina bestaat hoort hij
      hier, bij de vijf andere.
    */
    pin: { left: "43%", top: "41%" }
  },
  {
    slug: "west-vlaanderen",
    name: "West-Vlaanderen",
    nameFr: "Flandre occidentale",
    slugFr: "flandre-occidentale",
    nameEn: "West Flanders",
    slugEn: "west-flanders",
    path: "/bouwdroger-huren-west-vlaanderen",
    towns: [
      "Brugge",
      "Kortrijk",
      "Oostende",
      "Roeselare",
      "Ieper",
      "Waregem",
      "Knokke-Heist",
      "Veurne",
      "Torhout",
      "Menen",
      "Izegem",
      "Diksmuide",
      "Blankenberge",
      "Poperinge",
      "Tielt",
      "Harelbeke"
    ],
    pin: { left: "15%", top: "30%" }
  },
  {
    slug: "limburg",
    name: "Limburg",
    nameFr: "Limbourg",
    slugFr: "limbourg",
    nameEn: "Limburg",
    slugEn: "limburg",
    path: "/bouwdroger-huren-limburg",
    towns: [
      "Hasselt",
      "Genk",
      "Sint-Truiden",
      "Tongeren",
      "Beringen",
      "Lommel",
      "Bilzen",
      "Maasmechelen",
      "Houthalen",
      "Heusden-Zolder",
      "Diepenbeek",
      "Bree",
      "Peer",
      "Maaseik",
      "Lanaken",
      "Leopoldsburg"
    ],
    pin: { left: "76%", top: "23%" }
  },
  /*
      De eerste Waalse provincie, sinds 15-11-2026. Ze ligt dichter bij ons
      magazijn dan het Maasland: Waterloo en Waver zitten op een klein uur over
      de ring. De namen staan hier in het Nederlands, zoals de rest van de site;
      de Franse naam hangt via `ookVoor` aan elke gemeentepagina.
  
      De speld staat ten zuidoosten van die van Brussel, op Ottignies, het
      midden van de provincie (4,57 OL, 50,67 NB in de grenzen hierboven).
    */
  {
    slug: "waals-brabant",
    name: "Waals-Brabant",
    nameFr: "Brabant wallon",
    slugFr: "brabant-wallon",
    nameEn: "Walloon Brabant",
    slugEn: "walloon-brabant",
    path: "/bouwdroger-huren-waals-brabant",
    opAanvraag: true,
    towns: [
      "Waver",
      "Nijvel",
      "Eigenbrakel",
      "Waterloo",
      "Ottignies-Louvain-la-Neuve",
      "Tubeke",
      "Rixensart",
      "Lasne",
      "Terhulpen",
      "Genepiën",
      "Geldenaken",
      "Perwijs",
      "Court-Saint-Étienne",
      "Villers-la-Ville",
      "Graven",
      "Chaumont-Gistoux"
    ],
    pin: { left: "53%", top: "44%" }
  },
  /*
    Henegouwen, sinds 15-11-2026. De speld staat tussen Bergen en Charleroi
    (4,0 OL, 50,45 NB), het zwaartepunt van de provincie.
  */
  {
    slug: "henegouwen",
    name: "Henegouwen",
    nameFr: "Hainaut",
    slugFr: "hainaut",
    nameEn: "Hainaut",
    slugEn: "hainaut",
    path: "/bouwdroger-huren-henegouwen",
    opAanvraag: true,
    towns: [
      "Charleroi",
      "Bergen",
      "Doornik",
      "La Louvière",
      "Moeskroen",
      "Aat",
      "Edingen",
      "Zinnik",
      "'s-Gravenbrakel",
      "Binche",
      "Lessen",
      "Komen-Waasten",
      "Fleurus",
      "Châtelet",
      "Thuin",
      "Saint-Ghislain"
    ],
    pin: { left: "38%", top: "54%" }
  },
  /*
    Namen, sinds 15-11-2026. De speld staat tussen Namen en Dinant
    (4,8 OL, 50,25 NB).
  */
  {
    slug: "namen",
    name: "Namen",
    nameFr: "Namur",
    slugFr: "namur",
    nameEn: "Namur",
    zinEn: "the province of Namur",
    slugEn: "namur",
    path: "/bouwdroger-huren-namen",
    opAanvraag: true,
    towns: ["Namen", "Gembloers", "Dinant", "Andenne", "Sambreville", "Ciney", "Éghezée", "Jemeppe-sur-Sambre", "Rochefort", "Walcourt", "Philippeville", "Couvin", "Fosses-la-Ville", "Profondeville", "Florennes", "Yvoir"],
    pin: { left: "58%", top: "63%" }
  },
  /*
    De Belgische provincie Luxemburg, sinds 15-11-2026: onze verste ritten. De
    speld staat bij Libramont (5,0 OL, 49,9 NB).
  */
  {
    slug: "luxemburg",
    name: "Luxemburg",
    nameFr: "Luxembourg",
    slugFr: "luxembourg",
    nameEn: "Luxembourg",
    zinEn: "the province of Luxembourg",
    slugEn: "luxembourg",
    path: "/bouwdroger-huren-luxemburg",
    opAanvraag: true,
    towns: ["Aarlen", "Bastenaken", "Marche-en-Famenne", "Libramont-Chevigny", "Virton", "Durbuy", "Bouillon", "Neufchâteau", "Saint-Hubert", "Vielsalm", "Houffalize", "La Roche-en-Ardenne", "Bertrix", "Aubange", "Florenville", "Habay"],
    pin: { left: "62%", top: "80%" }
  },
  /*
    Luik, sinds 15-11-2026. De speld staat op Luik (5,6 OL, 50,5 NB).
  */
  {
    slug: "luik",
    name: "Luik",
    nameFr: "Liège",
    slugFr: "liege",
    nameEn: "Liège",
    zinEn: "the province of Liège",
    slugEn: "liege",
    path: "/bouwdroger-huren-luik",
    opAanvraag: true,
    towns: ["Luik", "Verviers", "Seraing", "Herstal", "Hoei", "Eupen", "Borgworm", "Hannuit", "Wezet", "Spa", "Malmedy", "Ans", "Flémalle", "Sankt Vith", "Aywaille", "Chaudfontaine"],
    pin: { left: "80%", top: "52%" }
  },
  /*
    Noord-Brabant, de eerste Nederlandse provincie met een pagina (15-11-2026).
    De speld valt net boven de Belgische grens, tussen Breda en Tilburg.
  */
  {
    slug: "noord-brabant",
    name: "Noord-Brabant",
    path: "/bouwdroger-huren-noord-brabant",
    opAanvraag: true,
    metNederland: true,
    towns: ["Breda", "Eindhoven", "Tilburg", "'s-Hertogenbosch", "Bergen op Zoom", "Roosendaal", "Helmond", "Oss", "Oosterhout", "Etten-Leur", "Waalwijk", "Veldhoven", "Woensdrecht", "Zundert", "Valkenswaard", "Meierijstad"],
    pin: { left: "57%", top: "4%" }
  },
  /*
    Zeeland, sinds 15-11-2026. De speld staat boven Zeeuws-Vlaanderen.
  */
  {
    slug: "zeeland",
    name: "Zeeland",
    path: "/bouwdroger-huren-zeeland",
    opAanvraag: true,
    metNederland: true,
    towns: ["Middelburg", "Vlissingen", "Goes", "Terneuzen", "Hulst", "Sluis", "Tholen", "Schouwen-Duiveland", "Veere", "Reimerswaal", "Borsele", "Kapelle", "Noord-Beveland"],
    pin: { left: "33%", top: "4%" }
  },
  /*
    Nederlands Limburg, sinds 15-11-2026. De speld staat op de Maas tussen
    Roermond en Maastricht, oostelijk van die van het Belgische Limburg.
  */
  {
    slug: "nederlands-limburg",
    name: "Nederlands Limburg",
    path: "/bouwdroger-huren-nederlands-limburg",
    opAanvraag: true,
    metNederland: true,
    towns: ["Maastricht", "Venlo", "Roermond", "Heerlen", "Sittard-Geleen", "Weert", "Kerkrade", "Venray", "Valkenburg aan de Geul", "Echt-Susteren", "Landgraaf", "Brunssum", "Eijsden-Margraten", "Gulpen-Wittem", "Vaals", "Meerssen"],
    pin: { left: "86%", top: "30%" }
  }
];
function regioPadFr(route) {
  return route.slugFr ? `/location-deshumidificateur-${route.slugFr}` : null;
}
function regioPadEn(route) {
  return route.slugEn ? `/dehumidifier-hire-${route.slugEn}` : null;
}
function regioNaamIn(route, taal) {
  if (taal === "fr") return route.nameFr ?? route.name;
  if (taal === "en") return route.nameEn ?? route.name;
  return route.name;
}
function regioInEn(route) {
  return `in ${route.zinEn ?? route.nameEn ?? route.name}`;
}
registreerPaden(
  Object.fromEntries(
    REGIO_ROUTES.flatMap((r) => {
      const fr = regioPadFr(r) ?? "";
      const en = regioPadEn(r) ?? "";
      return fr || en ? [[r.path, { fr, en }]] : [];
    })
  )
);
const REGIO_BY_PATH = Object.fromEntries(
  REGIO_ROUTES.map((r) => [r.path, r])
);
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-fr/aan/antwerpen.ts");
const AAN$l = [
  "mechelen",
  "lier",
  "antwerpen-stad",
  "berchem",
  "borgerhout",
  "deurne",
  "merksem",
  "hoboken",
  "ekeren",
  "berendrecht-zandvliet",
  "borsbeek",
  "aartselaar",
  "grobbendonk",
  "herenthout",
  "vorselaar",
  "lille",
  "vosselaar",
  "beerse",
  "rijkevorsel",
  "merksplas",
  "hoogstraten",
  "oud-turnhout",
  "arendonk",
  "ravels",
  "baarle-hertog",
  "retie",
  "dessel",
  "kasterlee",
  "olen",
  "westerlo",
  "herselt",
  "hulshout",
  "laakdal",
  "meerhout",
  "balen",
  "wommelgem",
  "wijnegem",
  "ranst",
  "schilde",
  "zoersel",
  "zandhoven",
  "malle",
  "brecht",
  "kapellen",
  "stabroek",
  "kalmthout",
  "wuustwezel",
  "essen",
  "boechout",
  "hove",
  "lint",
  "hemiksem",
  "niel",
  "rumst",
  "schelle",
  "bornem",
  "puurs-sint-amands",
  "willebroek",
  "berlaar",
  "bonheiden",
  "nijlen",
  "putte",
  "sint-katelijne-waver",
  "turnhout",
  "boom",
  "kontich",
  "geel",
  "mol",
  "herentals",
  "heist-op-den-berg",
  "brasschaat",
  "schoten",
  "wilrijk",
  "edegem",
  "duffel",
  "mortsel"
];
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-fr/aan/oost-vlaanderen.ts");
const AAN$k = [
  "gent",
  "aalst",
  "oudenaarde",
  "ronse",
  "zottegem",
  "brakel",
  "kluisbergen",
  "kruisem",
  "horebeke",
  "lierde",
  "maarkedal",
  "wortegem-petegem",
  "zwalm",
  "eeklo",
  "maldegem",
  "aalter",
  "assenede",
  "evergem",
  "kaprijke",
  "sint-laureins",
  "lievegem",
  "zelzate",
  "denderleeuw",
  "haaltert",
  "erpe-mere",
  "lede",
  "ninove",
  "geraardsbergen",
  "herzele",
  "sint-lievens-houtem",
  "dendermonde",
  "hamme",
  "zele",
  "berlare",
  "buggenhout",
  "lebbeke",
  "wichelen",
  "laarne",
  "wetteren",
  "destelbergen",
  "lochristi",
  "merelbeke-melle",
  "oosterzele",
  "sint-martens-latem",
  "nazareth-de-pinte",
  "gavere",
  "deinze",
  "zulte",
  "temse",
  "beveren-kruibeke-zwijndrecht",
  "sint-niklaas",
  "waasmunster",
  "lokeren",
  "sint-gillis-waas",
  "stekene"
];
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-fr/aan/vlaams-brabant.ts");
const AAN$j = [
  "leuven",
  "vilvoorde",
  "tienen",
  "linter",
  "zoutleeuw",
  "hoegaarden",
  "landen",
  "aarschot",
  "tielt-winge",
  "scherpenheuvel-zichem",
  "bekkevoort",
  "diest",
  "glabbeek",
  "kortenaken",
  "geetbets",
  "boortmeerbeek",
  "keerbergen",
  "begijnendijk",
  "tremelo",
  "haacht",
  "rotselaar",
  "holsbeek",
  "herent",
  "bertem",
  "oud-heverlee",
  "huldenberg",
  "bierbeek",
  "boutersem",
  "lubbeek",
  "londerzeel",
  "kapelle-op-den-bos",
  "merchtem",
  "opwijk",
  "affligem",
  "pepingen",
  "pajottegem",
  "bever",
  "asse",
  "ternat",
  "dilbeek",
  "sint-pieters-leeuw",
  "beersel",
  "liedekerke",
  "lennik",
  "roosdaal",
  "halle",
  "kortenberg",
  "kraainem",
  "wezembeek-oppem",
  "tervuren",
  "hoeilaart",
  "overijse",
  "sint-genesius-rode",
  "drogenbos",
  "linkebeek",
  "zemst",
  "meise",
  "grimbergen",
  "wemmel",
  "machelen",
  "kampenhout",
  "zaventem",
  "steenokkerzeel"
];
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-fr/aan/west-vlaanderen.ts");
const AAN$i = [
  "brugge",
  "kortrijk",
  "tielt",
  "wingene",
  "pittem",
  "ardooie",
  "dentergem",
  "oostrozebeke",
  "wielsbeke",
  "roeselare",
  "izegem",
  "ingelmunster",
  "lichtervelde",
  "hooglede",
  "staden",
  "moorslede",
  "ledegem",
  "menen",
  "wervik",
  "zwevegem",
  "anzegem",
  "avelgem",
  "spiere-helkijn",
  "harelbeke",
  "kuurne",
  "deerlijk",
  "lendelede",
  "waregem",
  "wevelgem",
  "diksmuide",
  "veurne",
  "alveringem",
  "lo-reninge",
  "houthulst",
  "kortemark",
  "koekelare",
  "ieper",
  "zonnebeke",
  "langemark-poelkapelle",
  "mesen",
  "heuvelland",
  "poperinge",
  "vleteren",
  "jabbeke",
  "zedelgem",
  "oostkamp",
  "beernem",
  "torhout",
  "damme",
  "zuienkerke",
  "oudenburg",
  "gistel",
  "ichtegem",
  "knokke-heist",
  "blankenberge",
  "de-haan",
  "bredene",
  "oostende",
  "middelkerke",
  "nieuwpoort",
  "koksijde",
  "de-panne"
];
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-fr/aan/limburg.ts");
const AAN$h = [
  "hasselt",
  "genk",
  "sint-truiden",
  "tongeren-borgloon",
  "bilzen-hoeselt",
  "riemst",
  "wellen",
  "heers",
  "gingelom",
  "herstappe",
  "voeren",
  "maaseik",
  "kinrooi",
  "dilsen-stokkem",
  "maasmechelen",
  "lanaken",
  "peer",
  "pelt",
  "hamont-achel",
  "bocholt",
  "bree",
  "oudsbergen",
  "as",
  "tessenderlo-ham",
  "beringen",
  "heusden-zolder",
  "houthalen-helchteren",
  "leopoldsburg",
  "hechtel-eksel",
  "lommel",
  "zonhoven",
  "diepenbeek",
  "alken",
  "zutendaal",
  "lummen",
  "herk-de-stad",
  "halen",
  "nieuwerkerken"
];
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-fr/aan/brussel.ts");
const AAN$g = [
  "brussel-stad",
  "elsene",
  "anderlecht",
  "etterbeek",
  "evere",
  "ganshoren",
  "jette",
  "koekelberg",
  "oudergem",
  "schaarbeek",
  "sint-agatha-berchem",
  "sint-gillis",
  "sint-jans-molenbeek",
  "sint-joost-ten-node",
  "sint-lambrechts-woluwe",
  "sint-pieters-woluwe",
  "ukkel",
  "vorst",
  "watermaal-bosvoorde"
];
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-fr/aan/waals-brabant.ts");
const AAN$f = [
  "waver",
  "nijvel",
  "bevekom",
  "chastre",
  "chaumont-gistoux",
  "court-saint-etienne",
  "eigenbrakel",
  "geldenaken",
  "genepien",
  "graven",
  "helecine",
  "ramillies",
  "rebecq",
  "rixensart",
  "terhulpen",
  "tubeke",
  "villers-la-ville",
  "walhain",
  "waterloo",
  "incourt",
  "itter",
  "kasteelbrakel",
  "lasne",
  "mont-saint-guibert",
  "orp-jauche",
  "ottignies-louvain-la-neuve",
  "perwijs"
];
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-fr/aan/henegouwen.ts");
const AAN$e = [
  "charleroi",
  "bergen",
  "aiseau-presles",
  "chapelle-lez-herlaimont",
  "chatelet",
  "courcelles",
  "farciennes",
  "fleurus",
  "fontaine-l-eveque",
  "gerpinnes",
  "les-bons-villers",
  "montigny-le-tilleul",
  "pont-a-celles",
  "boussu",
  "colfontaine",
  "dour",
  "frameries",
  "hensies",
  "honnelles",
  "jurbeke",
  "lens",
  "quaregnon",
  "quievrain",
  "quevy",
  "saint-ghislain",
  "s-gravenbrakel",
  "le-roeulx",
  "manage",
  "seneffe",
  "zinnik",
  "ecaussinnes",
  "binche",
  "estinnes",
  "la-louviere",
  "morlanwelz",
  "anderlues",
  "beaumont",
  "chimay",
  "erquelinnes",
  "froidchapelle",
  "ham-sur-heure-nalinnes",
  "lobbes",
  "merbes-le-chateau",
  "momignies",
  "sivry-rance",
  "thuin",
  "aat",
  "beloeil",
  "bernissart",
  "brugelette",
  "chievres",
  "edingen",
  "elzele",
  "frasnes-lez-anvaing",
  "lessen",
  "opzullik",
  "vloesberg",
  "antoing",
  "brunehaut",
  "celles",
  "doornik",
  "estaimpuis",
  "komen-waasten",
  "leuze-en-hainaut",
  "moeskroen",
  "mont-de-l-enclus",
  "pecq",
  "peruwelz",
  "rumes"
];
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-fr/aan/namen.ts");
const AAN$d = [
  "namen-stad",
  "dinant",
  "andenne",
  "assesse",
  "fernelmont",
  "floreffe",
  "fosses-la-ville",
  "gembloers",
  "gesves",
  "jemeppe-sur-sambre",
  "la-bruyere",
  "mettet",
  "ohey",
  "profondeville",
  "sambreville",
  "sombreffe",
  "eghezee",
  "anhee",
  "beauraing",
  "bievre",
  "ciney",
  "gedinne",
  "hamois",
  "hastiere",
  "havelange",
  "houyet",
  "onhaye",
  "rochefort",
  "somme-leuze",
  "vresse-sur-semois",
  "yvoir",
  "cerfontaine",
  "couvin",
  "doische",
  "florennes",
  "philippeville",
  "viroinval",
  "walcourt"
];
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-fr/aan/luxemburg.ts");
const AAN$c = [
  "aarlen",
  "bastenaken",
  "durbuy",
  "hotton",
  "la-roche-en-ardenne",
  "manhay",
  "marche-en-famenne",
  "nassogne",
  "rendeux",
  "tenneville",
  "erezee",
  "fauvillers",
  "gouvy",
  "houffalize",
  "sainte-ode",
  "vaux-sur-sure",
  "vielsalm",
  "bertrix",
  "bouillon",
  "daverdisse",
  "herbeumont",
  "libin",
  "libramont-chevigny",
  "leglise",
  "neufchateau",
  "paliseul",
  "saint-hubert",
  "tellin",
  "wellin",
  "attert",
  "aubange",
  "martelange",
  "messancy",
  "chiny",
  "florenville",
  "habay",
  "meix-devant-virton",
  "musson",
  "rouvroy",
  "saint-leger",
  "tintigny",
  "virton",
  "etalle"
];
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-fr/aan/luik.ts");
const AAN$b = [
  "luik-stad",
  "verviers",
  "berloz",
  "borgworm",
  "braives",
  "crisnee",
  "donceel",
  "faimes",
  "fexhe-le-haut-clocher",
  "geer",
  "hannuit",
  "lijsem",
  "chaudfontaine",
  "comblain-au-pont",
  "dalhem",
  "esneux",
  "flemalle",
  "fleron",
  "grace-hollogne",
  "herstal",
  "juprelle",
  "neupre",
  "oerle",
  "remicourt",
  "saint-georges-sur-meuse",
  "wasseiges",
  "ans",
  "awans",
  "aywaille",
  "beyne-heusay",
  "bitsingen",
  "blegny",
  "tinlot",
  "verlaine",
  "villers-le-bouillet",
  "wanze",
  "amel",
  "aubel",
  "baelen",
  "burg-reuland",
  "buellingen",
  "buetgenbach",
  "oupeye",
  "saint-nicolas",
  "seraing",
  "soumagne",
  "sprimont",
  "trooz",
  "wezet",
  "amay",
  "anthisnes",
  "burdinne",
  "clavier",
  "engis",
  "ferrieres",
  "hamoir",
  "hoei",
  "heron",
  "marchin",
  "modave",
  "nandrin",
  "ouffet",
  "pepinster",
  "plombieres",
  "raeren",
  "sankt-vith",
  "spa",
  "stavelot",
  "stoumont",
  "theux",
  "thimister-clermont",
  "trois-ponts",
  "weismes",
  "welkenraedt",
  "dison",
  "eupen",
  "herve",
  "jalhay",
  "kelmis",
  "lierneux",
  "limbourg",
  "lontzen",
  "malmedy",
  "olne"
];
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-fr/aan/index.ts");
const MET_FR_PER_REGIO = {
  "antwerpen": AAN$l,
  "oost-vlaanderen": AAN$k,
  "vlaams-brabant": AAN$j,
  "west-vlaanderen": AAN$i,
  "limburg": AAN$h,
  "brussel": AAN$g,
  "waals-brabant": AAN$f,
  "henegouwen": AAN$e,
  "namen": AAN$d,
  "luxemburg": AAN$c,
  "luik": AAN$b
};
const GEMEENTEN_MET_FR = new Set(Object.values(MET_FR_PER_REGIO).flat());
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-en/aan/antwerpen.ts");
const AAN$a = [
  "antwerpen-stad",
  "mechelen",
  "berchem",
  "borgerhout",
  "deurne",
  "merksem",
  "hoboken",
  "ekeren",
  "berendrecht-zandvliet",
  "borsbeek",
  "aartselaar",
  "grobbendonk",
  "herenthout",
  "vorselaar",
  "lille",
  "vosselaar",
  "beerse",
  "rijkevorsel",
  "merksplas",
  "hoogstraten",
  "oud-turnhout",
  "arendonk",
  "ravels",
  "baarle-hertog",
  "retie",
  "dessel",
  "kasterlee",
  "olen",
  "westerlo",
  "herselt",
  "hulshout",
  "laakdal",
  "meerhout",
  "balen",
  "wommelgem",
  "wijnegem",
  "ranst",
  "schilde",
  "zoersel",
  "zandhoven",
  "malle",
  "brecht",
  "kapellen",
  "stabroek",
  "kalmthout",
  "wuustwezel",
  "essen",
  "boechout",
  "hove",
  "lint",
  "hemiksem",
  "niel",
  "rumst",
  "schelle",
  "bornem",
  "puurs-sint-amands",
  "willebroek",
  "berlaar",
  "bonheiden",
  "nijlen",
  "putte",
  "sint-katelijne-waver",
  "turnhout",
  "lier",
  "boom",
  "kontich",
  "geel",
  "mol",
  "herentals",
  "heist-op-den-berg",
  "brasschaat",
  "schoten",
  "wilrijk",
  "edegem",
  "duffel",
  "mortsel"
];
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-en/aan/oost-vlaanderen.ts");
const AAN$9 = [
  "gent",
  "aalst",
  "oudenaarde",
  "ronse",
  "zottegem",
  "brakel",
  "kluisbergen",
  "kruisem",
  "horebeke",
  "lierde",
  "maarkedal",
  "wortegem-petegem",
  "zwalm",
  "eeklo",
  "maldegem",
  "aalter",
  "assenede",
  "evergem",
  "kaprijke",
  "sint-laureins",
  "lievegem",
  "zelzate",
  "denderleeuw",
  "haaltert",
  "erpe-mere",
  "lede",
  "ninove",
  "geraardsbergen",
  "herzele",
  "sint-lievens-houtem",
  "dendermonde",
  "hamme",
  "zele",
  "berlare",
  "buggenhout",
  "lebbeke",
  "wichelen",
  "laarne",
  "wetteren",
  "destelbergen",
  "lochristi",
  "merelbeke-melle",
  "oosterzele",
  "sint-martens-latem",
  "nazareth-de-pinte",
  "gavere",
  "deinze",
  "zulte",
  "temse",
  "beveren-kruibeke-zwijndrecht",
  "sint-niklaas",
  "waasmunster",
  "lokeren",
  "sint-gillis-waas",
  "stekene"
];
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-en/aan/vlaams-brabant.ts");
const AAN$8 = [
  "leuven",
  "vilvoorde",
  "tienen",
  "linter",
  "zoutleeuw",
  "hoegaarden",
  "landen",
  "aarschot",
  "tielt-winge",
  "scherpenheuvel-zichem",
  "bekkevoort",
  "diest",
  "glabbeek",
  "kortenaken",
  "geetbets",
  "boortmeerbeek",
  "keerbergen",
  "begijnendijk",
  "tremelo",
  "haacht",
  "rotselaar",
  "holsbeek",
  "herent",
  "bertem",
  "oud-heverlee",
  "huldenberg",
  "bierbeek",
  "boutersem",
  "lubbeek",
  "londerzeel",
  "kapelle-op-den-bos",
  "merchtem",
  "opwijk",
  "affligem",
  "pepingen",
  "pajottegem",
  "bever",
  "asse",
  "ternat",
  "dilbeek",
  "sint-pieters-leeuw",
  "beersel",
  "liedekerke",
  "lennik",
  "roosdaal",
  "halle",
  "kortenberg",
  "kraainem",
  "wezembeek-oppem",
  "tervuren",
  "hoeilaart",
  "overijse",
  "sint-genesius-rode",
  "drogenbos",
  "linkebeek",
  "zemst",
  "meise",
  "grimbergen",
  "wemmel",
  "machelen",
  "kampenhout",
  "zaventem",
  "steenokkerzeel"
];
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-en/aan/west-vlaanderen.ts");
const AAN$7 = [
  "brugge",
  "oostende",
  "tielt",
  "wingene",
  "pittem",
  "ardooie",
  "dentergem",
  "oostrozebeke",
  "wielsbeke",
  "roeselare",
  "izegem",
  "ingelmunster",
  "lichtervelde",
  "hooglede",
  "staden",
  "moorslede",
  "ledegem",
  "menen",
  "wervik",
  "zwevegem",
  "anzegem",
  "avelgem",
  "spiere-helkijn",
  "kortrijk",
  "harelbeke",
  "kuurne",
  "deerlijk",
  "lendelede",
  "waregem",
  "wevelgem",
  "diksmuide",
  "veurne",
  "alveringem",
  "lo-reninge",
  "houthulst",
  "kortemark",
  "koekelare",
  "ieper",
  "zonnebeke",
  "langemark-poelkapelle",
  "mesen",
  "heuvelland",
  "poperinge",
  "vleteren",
  "jabbeke",
  "zedelgem",
  "oostkamp",
  "beernem",
  "torhout",
  "damme",
  "zuienkerke",
  "oudenburg",
  "gistel",
  "ichtegem",
  "knokke-heist",
  "blankenberge",
  "de-haan",
  "bredene",
  "middelkerke",
  "nieuwpoort",
  "koksijde",
  "de-panne"
];
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-en/aan/limburg.ts");
const AAN$6 = [
  "hasselt",
  "genk",
  "sint-truiden",
  "tongeren-borgloon",
  "bilzen-hoeselt",
  "riemst",
  "wellen",
  "heers",
  "gingelom",
  "herstappe",
  "voeren",
  "maaseik",
  "kinrooi",
  "dilsen-stokkem",
  "maasmechelen",
  "lanaken",
  "peer",
  "pelt",
  "hamont-achel",
  "bocholt",
  "bree",
  "oudsbergen",
  "as",
  "tessenderlo-ham",
  "beringen",
  "heusden-zolder",
  "houthalen-helchteren",
  "leopoldsburg",
  "hechtel-eksel",
  "lommel",
  "zonhoven",
  "diepenbeek",
  "alken",
  "zutendaal",
  "lummen",
  "herk-de-stad",
  "halen",
  "nieuwerkerken"
];
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-en/aan/brussel.ts");
const AAN$5 = [
  "brussel-stad",
  "elsene",
  "vorst",
  "ukkel",
  "watermaal-bosvoorde",
  "oudergem",
  "sint-pieters-woluwe",
  "sint-lambrechts-woluwe",
  "evere",
  "anderlecht",
  "sint-jans-molenbeek",
  "koekelberg",
  "ganshoren",
  "jette",
  "sint-agatha-berchem",
  "schaarbeek",
  "sint-joost-ten-node",
  "sint-gillis",
  "etterbeek"
];
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-en/aan/waals-brabant.ts");
const AAN$4 = [
  "waver",
  "waterloo",
  "tubeke",
  "rebecq",
  "kasteelbrakel",
  "itter",
  "eigenbrakel",
  "nijvel",
  "genepien",
  "lasne",
  "terhulpen",
  "rixensart",
  "ottignies-louvain-la-neuve",
  "court-saint-etienne",
  "mont-saint-guibert",
  "villers-la-ville",
  "chastre",
  "walhain",
  "graven",
  "chaumont-gistoux",
  "bevekom",
  "incourt",
  "perwijs",
  "ramillies",
  "geldenaken",
  "orp-jauche",
  "helecine"
];
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-en/aan/henegouwen.ts");
const AAN$3 = [
  "bergen",
  "charleroi",
  "s-gravenbrakel",
  "le-roeulx",
  "manage",
  "montigny-le-tilleul",
  "pont-a-celles",
  "boussu",
  "colfontaine",
  "dour",
  "frameries",
  "hensies",
  "honnelles",
  "jurbeke",
  "lens",
  "quaregnon",
  "quievrain",
  "quevy",
  "saint-ghislain",
  "anderlues",
  "beaumont",
  "seneffe",
  "zinnik",
  "ecaussinnes",
  "binche",
  "estinnes",
  "la-louviere",
  "morlanwelz",
  "aiseau-presles",
  "chapelle-lez-herlaimont",
  "chatelet",
  "courcelles",
  "farciennes",
  "fleurus",
  "fontaine-l-eveque",
  "gerpinnes",
  "les-bons-villers",
  "aat",
  "beloeil",
  "bernissart",
  "brugelette",
  "chievres",
  "edingen",
  "elzele",
  "frasnes-lez-anvaing",
  "lessen",
  "opzullik",
  "vloesberg",
  "antoing",
  "brunehaut",
  "celles",
  "doornik",
  "estaimpuis",
  "komen-waasten",
  "leuze-en-hainaut",
  "moeskroen",
  "mont-de-l-enclus",
  "pecq",
  "peruwelz",
  "rumes",
  "chimay",
  "erquelinnes",
  "froidchapelle",
  "ham-sur-heure-nalinnes",
  "lobbes",
  "merbes-le-chateau",
  "momignies",
  "sivry-rance",
  "thuin"
];
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-en/aan/namen.ts");
const AAN$2 = [
  "namen-stad",
  "dinant",
  "gedinne",
  "hamois",
  "hastiere",
  "havelange",
  "houyet",
  "onhaye",
  "rochefort",
  "somme-leuze",
  "vresse-sur-semois",
  "yvoir",
  "cerfontaine",
  "couvin",
  "doische",
  "florennes",
  "philippeville",
  "viroinval",
  "walcourt",
  "andenne",
  "assesse",
  "fernelmont",
  "floreffe",
  "fosses-la-ville",
  "gembloers",
  "gesves",
  "jemeppe-sur-sambre",
  "la-bruyere",
  "mettet",
  "ohey",
  "profondeville",
  "sambreville",
  "sombreffe",
  "eghezee",
  "anhee",
  "beauraing",
  "bievre",
  "ciney"
];
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-en/aan/luxemburg.ts");
const AAN$1 = [
  "aarlen",
  "bastenaken",
  "durbuy",
  "hotton",
  "la-roche-en-ardenne",
  "manhay",
  "marche-en-famenne",
  "nassogne",
  "rendeux",
  "tenneville",
  "erezee",
  "fauvillers",
  "gouvy",
  "houffalize",
  "sainte-ode",
  "vaux-sur-sure",
  "vielsalm",
  "bertrix",
  "bouillon",
  "daverdisse",
  "herbeumont",
  "libin",
  "libramont-chevigny",
  "leglise",
  "neufchateau",
  "paliseul",
  "saint-hubert",
  "tellin",
  "wellin",
  "attert",
  "aubange",
  "martelange",
  "messancy",
  "chiny",
  "florenville",
  "habay",
  "meix-devant-virton",
  "musson",
  "rouvroy",
  "saint-leger",
  "tintigny",
  "virton",
  "etalle"
];
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-en/aan/luik.ts");
const AAN = [
  "luik-stad",
  "verviers",
  "berloz",
  "borgworm",
  "braives",
  "crisnee",
  "donceel",
  "faimes",
  "fexhe-le-haut-clocher",
  "geer",
  "hannuit",
  "lijsem",
  "oerle",
  "remicourt",
  "saint-georges-sur-meuse",
  "wasseiges",
  "ans",
  "awans",
  "aywaille",
  "beyne-heusay",
  "bitsingen",
  "blegny",
  "chaudfontaine",
  "comblain-au-pont",
  "dalhem",
  "esneux",
  "flemalle",
  "fleron",
  "grace-hollogne",
  "herstal",
  "juprelle",
  "neupre",
  "oupeye",
  "saint-nicolas",
  "seraing",
  "soumagne",
  "sprimont",
  "trooz",
  "wezet",
  "amay",
  "anthisnes",
  "burdinne",
  "clavier",
  "engis",
  "ferrieres",
  "hamoir",
  "hoei",
  "heron",
  "marchin",
  "modave",
  "nandrin",
  "ouffet",
  "tinlot",
  "verlaine",
  "villers-le-bouillet",
  "wanze",
  "amel",
  "aubel",
  "baelen",
  "burg-reuland",
  "buellingen",
  "buetgenbach",
  "dison",
  "eupen",
  "herve",
  "jalhay",
  "kelmis",
  "lierneux",
  "limbourg",
  "lontzen",
  "malmedy",
  "olne",
  "pepinster",
  "plombieres",
  "raeren",
  "sankt-vith",
  "spa",
  "stavelot",
  "stoumont",
  "theux",
  "thimister-clermont",
  "trois-ponts",
  "weismes",
  "welkenraedt"
];
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeenten-en/aan/index.ts");
const MET_EN_PER_REGIO = {
  "antwerpen": AAN$a,
  "oost-vlaanderen": AAN$9,
  "vlaams-brabant": AAN$8,
  "west-vlaanderen": AAN$7,
  "limburg": AAN$6,
  "brussel": AAN$5,
  "waals-brabant": AAN$4,
  "henegouwen": AAN$3,
  "namen": AAN$2,
  "luxemburg": AAN$1,
  "luik": AAN
};
const GEMEENTEN_MET_EN = new Set(Object.values(MET_EN_PER_REGIO).flat());
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/gemeente-slugs.ts");
const NAAM_FR = {
  /* Vlaanderen */
  Antwerpen: "Anvers",
  Mechelen: "Malines",
  Lier: "Lierre",
  "Sint-Katelijne-Waver": "Wavre-Sainte-Catherine",
  "Baarle-Hertog": "Baerle-Duc",
  Gent: "Gand",
  Aalst: "Alost",
  Dendermonde: "Termonde",
  "Sint-Niklaas": "Saint-Nicolas",
  Temse: "Tamise",
  Geraardsbergen: "Grammont",
  Ronse: "Renaix",
  Oudenaarde: "Audenarde",
  "Sint-Martens-Latem": "Laethem-Saint-Martin",
  Brugge: "Bruges",
  Kortrijk: "Courtrai",
  Oostende: "Ostende",
  Ieper: "Ypres",
  Veurne: "Furnes",
  Diksmuide: "Dixmude",
  Nieuwpoort: "Nieuport",
  "De Panne": "La Panne",
  Koksijde: "Coxyde",
  Roeselare: "Roulers",
  Menen: "Menin",
  Wervik: "Wervicq",
  Mesen: "Messines",
  Poperinge: "Poperinghe",
  Torhout: "Thourout",
  "Spiere-Helkijn": "Espierres-Helchin",
  Leuven: "Louvain",
  Vilvoorde: "Vilvorde",
  Halle: "Hal",
  Tienen: "Tirlemont",
  Zoutleeuw: "Léau",
  Bever: "Biévène",
  "Sint-Genesius-Rode": "Rhode-Saint-Genèse",
  "Sint-Pieters-Leeuw": "Leeuw-Saint-Pierre",
  "Sint-Truiden": "Saint-Trond",
  Tongeren: "Tongres",
  "Tongeren-Borgloon": "Tongres-Looz",
  Voeren: "Fourons",
  /* Brussel */
  Brussel: "Bruxelles",
  Schaarbeek: "Schaerbeek",
  Elsene: "Ixelles",
  "Sint-Gillis": "Saint-Gilles",
  "Sint-Joost-ten-Node": "Saint-Josse-ten-Noode",
  "Sint-Jans-Molenbeek": "Molenbeek-Saint-Jean",
  "Sint-Agatha-Berchem": "Berchem-Sainte-Agathe",
  Vorst: "Forest",
  Ukkel: "Uccle",
  Oudergem: "Auderghem",
  "Watermaal-Bosvoorde": "Watermael-Boitsfort",
  "Sint-Lambrechts-Woluwe": "Woluwe-Saint-Lambert",
  "Sint-Pieters-Woluwe": "Woluwe-Saint-Pierre",
  /* Waals-Brabant */
  Waver: "Wavre",
  Nijvel: "Nivelles",
  Eigenbrakel: "Braine-l'Alleud",
  Kasteelbrakel: "Braine-le-Château",
  Tubeke: "Tubize",
  Itter: "Ittre",
  Genepiën: "Genappe",
  Terhulpen: "La Hulpe",
  Graven: "Grez-Doiceau",
  Bevekom: "Beauvechain",
  Perwijs: "Perwez",
  Geldenaken: "Jodoigne",
  /* Henegouwen */
  Bergen: "Mons",
  Doornik: "Tournai",
  Moeskroen: "Mouscron",
  "Komen-Waasten": "Comines-Warneton",
  Aat: "Ath",
  Edingen: "Enghien",
  Elzele: "Ellezelles",
  Lessen: "Lessines",
  Opzullik: "Silly",
  Vloesberg: "Flobecq",
  Zinnik: "Soignies",
  "'s-Gravenbrakel": "Braine-le-Comte",
  Jurbeke: "Jurbise",
  /* Namen en Luxemburg */
  Namen: "Namur",
  Gembloers: "Gembloux",
  Aarlen: "Arlon",
  Bastenaken: "Bastogne",
  /* Luik */
  Luik: "Liège",
  Hoei: "Huy",
  Borgworm: "Waremme",
  Hannuit: "Hannut",
  Lijsem: "Lincent",
  Oerle: "Oreye",
  Bitsingen: "Bassenge",
  Wezet: "Visé",
  "Sankt Vith": "Saint-Vith",
  Weismes: "Waimes",
  Amel: "Amblève",
  Büllingen: "Bullange",
  Bütgenbach: "Butgenbach",
  Kelmis: "La Calamine"
};
function plaatsFr(naam) {
  const tweetalig = /^.+ \((.+)\)$/.exec(naam);
  return tweetalig ? tweetalig[1] : NAAM_FR[naam] ?? naam;
}
const NAAM_EN = {
  /* Vlaanderen: alleen de Engelse exoniemen */
  Antwerpen: "Antwerp",
  Gent: "Ghent",
  Brugge: "Bruges",
  Oostende: "Ostend",
  Ieper: "Ypres",
  /* Brussel */
  Brussel: "Brussels",
  Schaarbeek: "Schaerbeek",
  Elsene: "Ixelles",
  "Sint-Gillis": "Saint-Gilles",
  "Sint-Joost-ten-Node": "Saint-Josse-ten-Noode",
  "Sint-Jans-Molenbeek": "Molenbeek-Saint-Jean",
  "Sint-Agatha-Berchem": "Berchem-Sainte-Agathe",
  Vorst: "Forest",
  Ukkel: "Uccle",
  Oudergem: "Auderghem",
  "Watermaal-Bosvoorde": "Watermael-Boitsfort",
  "Sint-Lambrechts-Woluwe": "Woluwe-Saint-Lambert",
  "Sint-Pieters-Woluwe": "Woluwe-Saint-Pierre",
  /* Waals-Brabant */
  Waver: "Wavre",
  Nijvel: "Nivelles",
  Eigenbrakel: "Braine-l'Alleud",
  Kasteelbrakel: "Braine-le-Château",
  Tubeke: "Tubize",
  Itter: "Ittre",
  Genepiën: "Genappe",
  Terhulpen: "La Hulpe",
  Graven: "Grez-Doiceau",
  Bevekom: "Beauvechain",
  Perwijs: "Perwez",
  Geldenaken: "Jodoigne",
  /* Henegouwen */
  Bergen: "Mons",
  Doornik: "Tournai",
  Moeskroen: "Mouscron",
  "Komen-Waasten": "Comines-Warneton",
  Aat: "Ath",
  Edingen: "Enghien",
  Elzele: "Ellezelles",
  Lessen: "Lessines",
  Opzullik: "Silly",
  Vloesberg: "Flobecq",
  Zinnik: "Soignies",
  "'s-Gravenbrakel": "Braine-le-Comte",
  Jurbeke: "Jurbise",
  /* Namen en Luxemburg */
  Namen: "Namur",
  Gembloers: "Gembloux",
  Aarlen: "Arlon",
  Bastenaken: "Bastogne",
  /* Luik */
  Luik: "Liège",
  Hoei: "Huy",
  Borgworm: "Waremme",
  Hannuit: "Hannut",
  Lijsem: "Lincent",
  Oerle: "Oreye",
  Bitsingen: "Bassenge",
  Wezet: "Visé",
  Weismes: "Waimes",
  /* De Oostkantons houden hun Duitse naam, ook in de tweetalige streeklijst. */
  "Sankt Vith": "Sankt Vith"
};
function plaatsEn(naam) {
  const tweetalig = /^(.+) \((.+)\)$/.exec(naam);
  if (tweetalig) return NAAM_EN[tweetalig[1]] ?? tweetalig[2];
  return NAAM_EN[naam] ?? naam;
}
function plaatsIn(naam, taal) {
  if (taal === "fr") return plaatsFr(naam);
  if (taal === "en") return plaatsEn(naam);
  return naam;
}
const BELGISCH = /* @__PURE__ */ new Set([
  "antwerpen",
  "oost-vlaanderen",
  "vlaams-brabant",
  "west-vlaanderen",
  "limburg",
  "brussel",
  "waals-brabant",
  "henegouwen",
  "namen",
  "luxemburg",
  "luik"
]);
const gemeente = (name, slug, postcode, regio = "antwerpen") => ({
  slug,
  name,
  path: `/bouwdroger-huren-${slug}`,
  regio,
  postcode,
  ...BELGISCH.has(regio) ? { nameFr: NAAM_FR[name] ?? name, nameEn: NAAM_EN[name] ?? name } : {}
});
const GEMEENTE_ROUTES = [
  { ...gemeente("Antwerpen", "antwerpen-stad", "2000"), kruimel: "Antwerpen stad" },
  /*
      De districten. Ze stonden als gewone tekst in de streeklijst omdat ze geen
      eigen pagina hadden, terwijl mensen wel degelijk "bouwdroger huren Deurne"
      intikken en niet "bouwdroger huren Antwerpen district Deurne" -- dat is ook
      de reden dat `provincie-gemeenten.ts` ze apart telt.
  
      Ze staan hier alleen omdat er per district iets eigens te zeggen valt: het
      souterrain van een Zurenborgs herenhuis is een ander probleem dan de
      tuinwijk van Deurne of de kelder van Merksem tegen het Albertkanaal. Waar
      dat niet zo is -- Berendrecht, Zandvliet, Lillo -- blijft de naam gewone
      tekst, want een dunne pagina kost meer dan ze opbrengt.
  
      /bouwdroger-huren-antwerpen-stad blijft de koepel: hij gaat over de stad en
      haar districten samen, deze pagina's over één district.
    */
  gemeente("Berchem", "berchem", "2600"),
  gemeente("Borgerhout", "borgerhout", "2140"),
  gemeente("Deurne", "deurne", "2100"),
  gemeente("Merksem", "merksem", "2170"),
  gemeente("Hoboken", "hoboken", "2660"),
  gemeente("Ekeren", "ekeren", "2180"),
  {
    ...gemeente("Berendrecht", "berendrecht-zandvliet", "2040"),
    ookVoor: ["Zandvliet"]
  },
  gemeente("Borsbeek", "borsbeek", "2150"),
  gemeente("Aartselaar", "aartselaar", "2630"),
  /*
    De Brusselse zuid- en oostrand, en daarmee staan alle negentien gemeenten
    van het gewest op de kaart. Het verhaal hier is hoogteverschil: deze
    gemeenten liggen tegen het Zonienwoud op hellingen, en bij een hevige bui
    krijgt een diepe kelder of garage het water van de helling erboven. In de
    Woluwedal- en Vorstvallei komt daar een ondergrondse beek bij. Onze eigen
    werf in Sint-Pieters-Woluwe staat op die pagina.
  */
  gemeente("Vorst", "vorst", "1190", "brussel"),
  gemeente("Ukkel", "ukkel", "1180", "brussel"),
  gemeente("Watermaal-Bosvoorde", "watermaal-bosvoorde", "1170", "brussel"),
  gemeente("Oudergem", "oudergem", "1160", "brussel"),
  gemeente("Sint-Pieters-Woluwe", "sint-pieters-woluwe", "1150", "brussel"),
  gemeente("Sint-Lambrechts-Woluwe", "sint-lambrechts-woluwe", "1200", "brussel"),
  gemeente("Evere", "evere", "1140", "brussel"),
  /*
    De Brusselse kanaalzone en de westrand. Hier zit het vocht vaker onderaan
    dan boven: de Zennevallei loopt door Anderlecht en Molenbeek en is het
    laagste punt van het gewest, met kelders half onder het maaiveld. Naar de
    westrand toe wordt het ruimer en hoger, met tuinwijken uit het interbellum
    die licht gebouwd zijn en dus anders drogen dan een herenhuis.
  */
  gemeente("Anderlecht", "anderlecht", "1070", "brussel"),
  gemeente("Sint-Jans-Molenbeek", "sint-jans-molenbeek", "1080", "brussel"),
  gemeente("Koekelberg", "koekelberg", "1081", "brussel"),
  gemeente("Ganshoren", "ganshoren", "1083", "brussel"),
  gemeente("Jette", "jette", "1090", "brussel"),
  gemeente("Sint-Agatha-Berchem", "sint-agatha-berchem", "1082", "brussel"),
  /*
      De negentien Brusselse gemeenten, te beginnen met de eerste kroon.
  
      Ze stonden tot 14-11-2026 als dode tekst op /sitemap terwijl elke Vlaamse
      gemeente een link was, en dat is precies de indruk die we niet willen
      wekken. /bouwdroger-huren-brussel blijft de koepel over het gewest; deze
      pagina's gaan over één gemeente, zoals antwerpen-stad naast de provincie.
  
      Twee dingen die alleen hier gelden. De Franse naam staat in elke intro,
      want wie "Ixelles" of "Saint-Gilles" intikt zoekt dezelfde droger. En de
      stad Brussel heet hier `brussel-stad`: de slug `brussel` is van de
      gewestpagina, en twee pagina's met dezelfde titel vechten om dezelfde
      zoekopdracht.
    */
  /*
    `brussel-stad`, want `brussel` is de slug van de gewestpagina. Zelfde reden
    als bij Antwerpen: het kruimelpad las anders "Home / Brussel / Brussel".
  */
  { ...gemeente("Brussel", "brussel-stad", "1000", "brussel"), kruimel: "Brussel stad" },
  gemeente("Schaarbeek", "schaarbeek", "1030", "brussel"),
  gemeente("Sint-Joost-ten-Node", "sint-joost-ten-node", "1210", "brussel"),
  gemeente("Sint-Gillis", "sint-gillis", "1060", "brussel"),
  gemeente("Elsene", "elsene", "1050", "brussel"),
  gemeente("Etterbeek", "etterbeek", "1040", "brussel"),
  /*
    Haspengouw en de Voerstreek, en daarmee is Limburg rond en heel Vlaanderen
    gedekt. Drie dingen die hier eigen zijn. De leembodem laat water traag door,
    dus hangwater tegen een kelderwand is regel. Riemst en Voeren hebben
    mergel in de ondergrond, met kelders en gangen die het hele jaar rond de
    honderd procent luchtvochtigheid zitten: daar werkt alleen een
    adsorptiedroger. En Voeren is met bijna twee uur onze verste rit in
    Vlaanderen; dat staat op de pagina in plaats van een tijdslot dat we niet
    halen.
  */
  gemeente("Sint-Truiden", "sint-truiden", "3800", "limburg"),
  gemeente("Tongeren-Borgloon", "tongeren-borgloon", "3700", "limburg"),
  gemeente("Bilzen-Hoeselt", "bilzen-hoeselt", "3740", "limburg"),
  gemeente("Riemst", "riemst", "3770", "limburg"),
  gemeente("Wellen", "wellen", "3830", "limburg"),
  gemeente("Heers", "heers", "3870", "limburg"),
  gemeente("Gingelom", "gingelom", "3890", "limburg"),
  gemeente("Herstappe", "herstappe", "3717", "limburg"),
  gemeente("Voeren", "voeren", "3798", "limburg"),
  /*
    Het Maasland. Eén ding bepaalt hier alle vijf de pagina's, en het is iets
    wat elders niet bestaat: de ondergrond is grind, en grind laat water
    razendsnel door. Staat de Maas hoog, dan stijgt het grondwater mee en komt
    het water niet langs de muur maar *door de vloer* naar binnen. Een
    dompelpomp en een droger houden dat beheersbaar, maar niemand stopt het,
    en dat zeggen we hier op elke pagina.
  */
  gemeente("Maaseik", "maaseik", "3680", "limburg"),
  gemeente("Kinrooi", "kinrooi", "3640", "limburg"),
  gemeente("Dilsen-Stokkem", "dilsen-stokkem", "3650", "limburg"),
  gemeente("Maasmechelen", "maasmechelen", "3630", "limburg"),
  gemeente("Lanaken", "lanaken", "3620", "limburg"),
  /*
    Noord-Limburg, tweede helft: de grensgemeenten en de Limburgse Kempen.
    Dezelfde zandbodem en dezelfde koude winters als hierboven, maar met een
    ander gebouwtype: hier zijn het landbouwloodsen, stallen en hoeves die in
    herbestemming gaan, en dat is een volumeverhaal in plaats van een
    kelderverhaal.
  */
  gemeente("Peer", "peer", "3990", "limburg"),
  gemeente("Pelt", "pelt", "3900", "limburg"),
  gemeente("Hamont-Achel", "hamont-achel", "3930", "limburg"),
  gemeente("Bocholt", "bocholt", "3950", "limburg"),
  gemeente("Bree", "bree", "3960", "limburg"),
  gemeente("Oudsbergen", "oudsbergen", "3670", "limburg"),
  gemeente("As", "as", "3665", "limburg"),
  /*
    Noord-Limburg, eerste helft. Twee dingen bepalen hier elke pagina. Het zand
    draineert, dus de kelder is zelden de klacht en het gesprek gaat over
    ventilatie in plaats van over grondwater. En dit zijn de koudste
    winterwerven van Vlaanderen: tussen november en maart gaat er bijna altijd
    een kachel mee, en die vraagt 400 V. De mijngemeenten Beringen,
    Heusden-Zolder en Houthalen-Helchteren hebben daarbij hun cités: dunne
    muren, lichte constructie, dus kleiner toestel en langer drogen.
  */
  gemeente("Tessenderlo-Ham", "tessenderlo-ham", "3980", "limburg"),
  gemeente("Beringen", "beringen", "3580", "limburg"),
  gemeente("Heusden-Zolder", "heusden-zolder", "3550", "limburg"),
  gemeente("Houthalen-Helchteren", "houthalen-helchteren", "3530", "limburg"),
  gemeente("Leopoldsburg", "leopoldsburg", "3970", "limburg"),
  gemeente("Hechtel-Eksel", "hechtel-eksel", "3940", "limburg"),
  gemeente("Lommel", "lommel", "3920", "limburg"),
  /*
    Hasselt, Genk en Midden-Limburg: de drukste Limburgse streek voor ons. Twee
    dingen die hier eigen zijn. Genk heeft de cité-woningen van het
    mijnverleden, en die hebben dunne muren en een vloer op volle grond, dus ze
    drogen sneller maar worden ook sneller weer vochtig. En de Demervallei van
    Herk-de-Stad en Halen loopt bij een langere regenperiode vol; daar gaat de
    pagina over waterschade en niet over chape.
  */
  gemeente("Hasselt", "hasselt", "3500", "limburg"),
  gemeente("Genk", "genk", "3600", "limburg"),
  gemeente("Zonhoven", "zonhoven", "3520", "limburg"),
  gemeente("Diepenbeek", "diepenbeek", "3590", "limburg"),
  gemeente("Alken", "alken", "3570", "limburg"),
  gemeente("Zutendaal", "zutendaal", "3690", "limburg"),
  gemeente("Lummen", "lummen", "3560", "limburg"),
  gemeente("Herk-de-Stad", "herk-de-stad", "3540", "limburg"),
  gemeente("Halen", "halen", "3545", "limburg"),
  gemeente("Nieuwerkerken", "nieuwerkerken", "3850", "limburg"),
  /*
    Midden-West-Vlaanderen, tweede helft, en daarmee is West-Vlaanderen rond.
    Tielt en Wingene zijn na Waregem en Beernem onze kortste West-Vlaamse
    ritten: negentig kilometer. Wielsbeke en Oostrozebeke hebben de grootste
    industriële vloeren van de streek; daar gaat het om droogzones en niet om
    toestellen.
  */
  gemeente("Tielt", "tielt", "8700", "west-vlaanderen"),
  gemeente("Wingene", "wingene", "8750", "west-vlaanderen"),
  gemeente("Pittem", "pittem", "8740", "west-vlaanderen"),
  gemeente("Ardooie", "ardooie", "8850", "west-vlaanderen"),
  gemeente("Dentergem", "dentergem", "8720", "west-vlaanderen"),
  gemeente("Oostrozebeke", "oostrozebeke", "8780", "west-vlaanderen"),
  gemeente("Wielsbeke", "wielsbeke", "8710", "west-vlaanderen"),
  /*
    Midden-West-Vlaanderen, eerste helft. De streek waar chape en pleisterwerk
    bijna altijd samen moeten drogen omdat de vloerlegger al in de agenda
    staat; dat bepaalt de pakketten hier. Moorslede is de uitzondering: dat
    ligt al op de Ieperse klei en krijgt daarom het hangwaterverhaal.
  */
  gemeente("Roeselare", "roeselare", "8800", "west-vlaanderen"),
  gemeente("Izegem", "izegem", "8870", "west-vlaanderen"),
  gemeente("Ingelmunster", "ingelmunster", "8770", "west-vlaanderen"),
  gemeente("Lichtervelde", "lichtervelde", "8810", "west-vlaanderen"),
  gemeente("Hooglede", "hooglede", "8830", "west-vlaanderen"),
  gemeente("Staden", "staden", "8840", "west-vlaanderen"),
  gemeente("Moorslede", "moorslede", "8890", "west-vlaanderen"),
  gemeente("Ledegem", "ledegem", "8880", "west-vlaanderen"),
  /*
    Kortrijk en de Leiestreek, tweede helft: de grensgemeenten en de zuidrand
    tegen de Schelde. Wervik heeft iets wat nergens anders bestaat, namelijk
    tabaksdrogerijen in herbestemming: gebouwen die ontworpen zijn om lucht
    door te laten, en dus het tegenovergestelde van wat een bouwdroger nodig
    heeft. Avelgem en Spiere-Helkijn liggen in het winterbed van de Schelde.
  */
  gemeente("Menen", "menen", "8930", "west-vlaanderen"),
  gemeente("Wervik", "wervik", "8940", "west-vlaanderen"),
  gemeente("Zwevegem", "zwevegem", "8550", "west-vlaanderen"),
  gemeente("Anzegem", "anzegem", "8570", "west-vlaanderen"),
  gemeente("Avelgem", "avelgem", "8580", "west-vlaanderen"),
  gemeente("Spiere-Helkijn", "spiere-helkijn", "8587", "west-vlaanderen"),
  /*
    Kortrijk en de Leiestreek, eerste helft. Wat deze streek van de rest van
    West-Vlaanderen onderscheidt is de maat van de vloeren: bedrijfsgebouwen en
    nieuwbouw met oppervlakken waar één droger in een hoek niets uithaalt. Op
    deze pagina's staat daarom hoe we zo'n vloer in droogzones opdelen, met een
    berekende droger en een ventilator per zone.
  */
  gemeente("Kortrijk", "kortrijk", "8500", "west-vlaanderen"),
  gemeente("Harelbeke", "harelbeke", "8530", "west-vlaanderen"),
  gemeente("Kuurne", "kuurne", "8520", "west-vlaanderen"),
  gemeente("Deerlijk", "deerlijk", "8540", "west-vlaanderen"),
  gemeente("Lendelede", "lendelede", "8860", "west-vlaanderen"),
  gemeente("Waregem", "waregem", "8790", "west-vlaanderen"),
  gemeente("Wevelgem", "wevelgem", "8560", "west-vlaanderen"),
  /*
    De Westhoek, noordelijke helft: de IJzervlakte en de rand van het Houtland.
    Hier is de hoogte boven de zeespiegel het verhaal. De IJzerbroeken van
    Diksmuide en Lo-Reninge zijn gecontroleerd overstromingsgebied, en de
    Handzamevallei in Kortemark loopt bij elke langere regenperiode vol. Op die
    pagina's staat waterschade voorop; op Houthulst en Koekelare, een rug hoger,
    gewoon chape en renovatie.
  */
  gemeente("Diksmuide", "diksmuide", "8600", "west-vlaanderen"),
  gemeente("Veurne", "veurne", "8630", "west-vlaanderen"),
  gemeente("Alveringem", "alveringem", "8690", "west-vlaanderen"),
  gemeente("Lo-Reninge", "lo-reninge", "8647", "west-vlaanderen"),
  gemeente("Houthulst", "houthulst", "8650", "west-vlaanderen"),
  gemeente("Kortemark", "kortemark", "8610", "west-vlaanderen"),
  gemeente("Koekelare", "koekelare", "8680", "west-vlaanderen"),
  /*
    De Westhoek, zuidelijke helft. Twee dingen die hier en nergens anders
    gelden. De Ieperiaanse klei in de ondergrond laat vrijwel geen water door,
    dus hangwater tegen een kelderwand is hier regel en geen uitzondering. En
    de bebouwing van Ieper, Zonnebeke, Langemark en Mesen is grotendeels
    heropbouw uit de jaren twintig: massief baksteenwerk, vaak zonder
    waterkering in de muurvoet, en dus opstijgend vocht dat geen bouwvocht is.
  */
  gemeente("Ieper", "ieper", "8900", "west-vlaanderen"),
  gemeente("Zonnebeke", "zonnebeke", "8980", "west-vlaanderen"),
  gemeente("Langemark-Poelkapelle", "langemark-poelkapelle", "8920", "west-vlaanderen"),
  gemeente("Mesen", "mesen", "8957", "west-vlaanderen"),
  gemeente("Heuvelland", "heuvelland", "8950", "west-vlaanderen"),
  gemeente("Poperinge", "poperinge", "8970", "west-vlaanderen"),
  gemeente("Vleteren", "vleteren", "8640", "west-vlaanderen"),
  /*
    Het Houtland: de zandstreek achter Brugge. Hier is de kelder zelden het
    probleem omdat zand draineert, en dat maakt deze vijf pagina's inhoudelijk
    het tegenovergestelde van de polderpagina's hierboven. Beernem is de
    uitzondering: de kleirug van Oedelem gedraagt zich als polder.
  */
  gemeente("Jabbeke", "jabbeke", "8490", "west-vlaanderen"),
  gemeente("Zedelgem", "zedelgem", "8210", "west-vlaanderen"),
  gemeente("Oostkamp", "oostkamp", "8020", "west-vlaanderen"),
  gemeente("Beernem", "beernem", "8730", "west-vlaanderen"),
  gemeente("Torhout", "torhout", "8820", "west-vlaanderen"),
  /*
    Brugge en de polderrand errond. De historische binnenstad en de polder
    delen hetzelfde probleem om een andere reden: in Brugge staat het water van
    de reien vlak naast de keldermuur, in de polder houdt de klei het vast. Op
    beide soorten pagina's staat daarom dat een droger vocht uit de lucht haalt
    en niet uit de grond.
  */
  gemeente("Brugge", "brugge", "8000", "west-vlaanderen"),
  gemeente("Damme", "damme", "8340", "west-vlaanderen"),
  gemeente("Zuienkerke", "zuienkerke", "8377", "west-vlaanderen"),
  gemeente("Oudenburg", "oudenburg", "8460", "west-vlaanderen"),
  gemeente("Gistel", "gistel", "8470", "west-vlaanderen"),
  gemeente("Ichtegem", "ichtegem", "8480", "west-vlaanderen"),
  /*
    De kust, en daarmee de eerste gemeentepagina's van West-Vlaanderen. Drie
    dingen gelden hier en nergens anders, en ze staan daarom op alle negen:
    de zeelucht is zo vochtig dat ventileren met open ramen tegen je werkt,
    zeezout in een muur is hygroscopisch en houdt die muur vochtig ook nadat
    het water weg is, en de rit duurt ruim een uur. Afhalen raden we hier dus
    af in plaats van de korting te verkopen, en we plannen de provincie in een
    vaste toer.
  */
  gemeente("Knokke-Heist", "knokke-heist", "8300", "west-vlaanderen"),
  gemeente("Blankenberge", "blankenberge", "8370", "west-vlaanderen"),
  gemeente("De Haan", "de-haan", "8420", "west-vlaanderen"),
  gemeente("Bredene", "bredene", "8450", "west-vlaanderen"),
  gemeente("Oostende", "oostende", "8400", "west-vlaanderen"),
  gemeente("Middelkerke", "middelkerke", "8430", "west-vlaanderen"),
  gemeente("Nieuwpoort", "nieuwpoort", "8620", "west-vlaanderen"),
  gemeente("Koksijde", "koksijde", "8670", "west-vlaanderen"),
  gemeente("De Panne", "de-panne", "8660", "west-vlaanderen"),
  /*
    Tienen en Vlaams-Haspengouw, en daarmee is Vlaams-Brabant rond. Dit is de
    verste hoek van ons werkgebied in deze provincie: Landen ligt op ruim een
    uur. De grote hoeves in herbestemming bepalen hier het pakket, want in een
    volume van zes meter hoog moet de droge lucht met een ventilator verdeeld
    worden of ze blijft hangen waar het toestel staat.
  */
  gemeente("Tienen", "tienen", "3300", "vlaams-brabant"),
  gemeente("Linter", "linter", "3350", "vlaams-brabant"),
  gemeente("Zoutleeuw", "zoutleeuw", "3440", "vlaams-brabant"),
  gemeente("Hoegaarden", "hoegaarden", "3320", "vlaams-brabant"),
  gemeente("Landen", "landen", "3400", "vlaams-brabant"),
  /*
    Het Hageland. De winter bepaalt hier de pakketsamenstelling: de ruwbouwen
    staan op open heuvelflanken zonder beschutting, en onder 15 °C haalt een
    condensdroger te weinig rendement. Op elke pagina van deze streek staat
    daarom dat er dan bijverwarming bij hoort, en dat die 400 V vraagt.
  */
  gemeente("Aarschot", "aarschot", "3200", "vlaams-brabant"),
  gemeente("Tielt-Winge", "tielt-winge", "3390", "vlaams-brabant"),
  gemeente("Scherpenheuvel-Zichem", "scherpenheuvel-zichem", "3270", "vlaams-brabant"),
  gemeente("Bekkevoort", "bekkevoort", "3460", "vlaams-brabant"),
  gemeente("Diest", "diest", "3290", "vlaams-brabant"),
  gemeente("Glabbeek", "glabbeek", "3380", "vlaams-brabant"),
  gemeente("Kortenaken", "kortenaken", "3470", "vlaams-brabant"),
  gemeente("Geetbets", "geetbets", "3450", "vlaams-brabant"),
  /*
    Leuven en het Dijleland, noordelijke helft. Hier draait de bodem om: na de
    leem van het Dijleplateau komt met Keerbergen, Tremelo en Begijnendijk weer
    zand, dezelfde grond als onze eigen Kempen. Dat verandert het antwoord op
    de kelderklacht, en daarom staat het per gemeente in de bouw-sectie.
  */
  gemeente("Boortmeerbeek", "boortmeerbeek", "3190", "vlaams-brabant"),
  gemeente("Keerbergen", "keerbergen", "3140", "vlaams-brabant"),
  gemeente("Begijnendijk", "begijnendijk", "3130", "vlaams-brabant"),
  gemeente("Tremelo", "tremelo", "3120", "vlaams-brabant"),
  gemeente("Haacht", "haacht", "3150", "vlaams-brabant"),
  gemeente("Rotselaar", "rotselaar", "3110", "vlaams-brabant"),
  gemeente("Holsbeek", "holsbeek", "3220", "vlaams-brabant"),
  /*
    Leuven en het Dijleland, eerste helft. Twee dingen keren hier terug: de
    verbouwing per kamer voor studentenverhuur, waar het toestel stil moet zijn
    en op 230 V moet draaien, en de Dijlevallei met vijvers en moerassen waar
    het grondwater vlak onder het maaiveld zit.
  */
  gemeente("Leuven", "leuven", "3000", "vlaams-brabant"),
  gemeente("Herent", "herent", "3020", "vlaams-brabant"),
  gemeente("Bertem", "bertem", "3060", "vlaams-brabant"),
  gemeente("Oud-Heverlee", "oud-heverlee", "3050", "vlaams-brabant"),
  gemeente("Huldenberg", "huldenberg", "3040", "vlaams-brabant"),
  gemeente("Bierbeek", "bierbeek", "3360", "vlaams-brabant"),
  gemeente("Boutersem", "boutersem", "3370", "vlaams-brabant"),
  gemeente("Lubbeek", "lubbeek", "3210", "vlaams-brabant"),
  /*
    Pajottenland en Zennevallei, tweede helft. Londerzeel en Kapelle-op-den-Bos
    liggen op vijfentwintig kilometer langs de A12 en zijn daarmee de kortste
    ritten van heel Vlaams-Brabant; Bever en Pajottegem zijn met een uur de
    langste. Dat verschil staat op de pagina's, want het bepaalt of afhalen
    voor een klant loont.
  */
  gemeente("Londerzeel", "londerzeel", "1840", "vlaams-brabant"),
  gemeente("Kapelle-op-den-Bos", "kapelle-op-den-bos", "1880", "vlaams-brabant"),
  gemeente("Merchtem", "merchtem", "1785", "vlaams-brabant"),
  gemeente("Opwijk", "opwijk", "1745", "vlaams-brabant"),
  gemeente("Affligem", "affligem", "1790", "vlaams-brabant"),
  gemeente("Pepingen", "pepingen", "1670", "vlaams-brabant"),
  gemeente("Pajottegem", "pajottegem", "1570", "vlaams-brabant"),
  gemeente("Bever", "bever", "1547", "vlaams-brabant"),
  /*
    Pajottenland en Zennevallei, eerste helft. De leembodem is hier het
    terugkerende punt: leem laat water traag door, dus een chape op leem droogt
    zonder hulp opvallend traag en een kelder in de helling krijgt hangwater
    tegen de muur. Dat staat per gemeente anders uitgelegd, niet elf keer
    hetzelfde.
  */
  gemeente("Asse", "asse", "1730", "vlaams-brabant"),
  gemeente("Ternat", "ternat", "1740", "vlaams-brabant"),
  gemeente("Dilbeek", "dilbeek", "1700", "vlaams-brabant"),
  gemeente("Sint-Pieters-Leeuw", "sint-pieters-leeuw", "1600", "vlaams-brabant"),
  gemeente("Beersel", "beersel", "1650", "vlaams-brabant"),
  gemeente("Liedekerke", "liedekerke", "1770", "vlaams-brabant"),
  gemeente("Lennik", "lennik", "1750", "vlaams-brabant"),
  gemeente("Roosdaal", "roosdaal", "1760", "vlaams-brabant"),
  gemeente("Halle", "halle", "1500", "vlaams-brabant"),
  /*
    De Brusselse rand, zuidelijke helft. Eén praktisch punt loopt door al deze
    pagina's: de rit gaat over de ring, en die staat tussen zeven en negen uur
    stil. We plannen deze gemeenten daarom buiten de spits, en dat zeggen we op
    de pagina in plaats van een tijdslot te beloven dat we niet halen.
  */
  gemeente("Kortenberg", "kortenberg", "3070", "vlaams-brabant"),
  gemeente("Kraainem", "kraainem", "1950", "vlaams-brabant"),
  gemeente("Wezembeek-Oppem", "wezembeek-oppem", "1970", "vlaams-brabant"),
  gemeente("Tervuren", "tervuren", "3080", "vlaams-brabant"),
  gemeente("Hoeilaart", "hoeilaart", "1560", "vlaams-brabant"),
  gemeente("Overijse", "overijse", "3090", "vlaams-brabant"),
  gemeente("Sint-Genesius-Rode", "sint-genesius-rode", "1640", "vlaams-brabant"),
  gemeente("Drogenbos", "drogenbos", "1620", "vlaams-brabant"),
  gemeente("Linkebeek", "linkebeek", "1630", "vlaams-brabant"),
  /*
    De Brusselse rand, noordelijke helft. Dichtst bij ons magazijn van heel
    Vlaams-Brabant: Zemst ligt op een halfuur, dichter dan de helft van de
    Kempen. Wat deze rand apart maakt is niet de bodem maar het gebouwtype:
    kantoren en logistiek langs de ring, en villa's uit de jaren zestig tot
    tachtig die nu grondig gerenoveerd worden.
  */
  gemeente("Zemst", "zemst", "1980", "vlaams-brabant"),
  gemeente("Meise", "meise", "1860", "vlaams-brabant"),
  gemeente("Grimbergen", "grimbergen", "1850", "vlaams-brabant"),
  gemeente("Wemmel", "wemmel", "1780", "vlaams-brabant"),
  gemeente("Vilvoorde", "vilvoorde", "1800", "vlaams-brabant"),
  gemeente("Machelen", "machelen", "1830", "vlaams-brabant"),
  gemeente("Kampenhout", "kampenhout", "1910", "vlaams-brabant"),
  gemeente("Zaventem", "zaventem", "1930", "vlaams-brabant"),
  gemeente("Steenokkerzeel", "steenokkerzeel", "1820", "vlaams-brabant"),
  /*
    De Vlaamse Ardennen, en daarmee is Oost-Vlaanderen rond. Deze streek heeft
    één terugkerend probleem dat elders niet bestaat: een woning in de helling
    heeft aan één zijde grond tegen de muur, en op leem perst hangwater daar
    tegenaan. Dat is geen bouwvocht, en drogen lost het niet op. Het staat op
    elke pagina van deze streek, omdat we het anders elf keer uitleggen aan de
    telefoon.
  */
  gemeente("Oudenaarde", "oudenaarde", "9700", "oost-vlaanderen"),
  gemeente("Ronse", "ronse", "9600", "oost-vlaanderen"),
  gemeente("Zottegem", "zottegem", "9620", "oost-vlaanderen"),
  gemeente("Brakel", "brakel", "9660", "oost-vlaanderen"),
  gemeente("Kluisbergen", "kluisbergen", "9690", "oost-vlaanderen"),
  gemeente("Kruisem", "kruisem", "9770", "oost-vlaanderen"),
  gemeente("Horebeke", "horebeke", "9667", "oost-vlaanderen"),
  gemeente("Lierde", "lierde", "9570", "oost-vlaanderen"),
  gemeente("Maarkedal", "maarkedal", "9680", "oost-vlaanderen"),
  gemeente("Wortegem-Petegem", "wortegem-petegem", "9790", "oost-vlaanderen"),
  gemeente("Zwalm", "zwalm", "9630", "oost-vlaanderen"),
  /*
    Het Meetjesland. Twee bodems door elkaar: zand in de binnenlanden en
    polderklei richting de kreken en de Nederlandse grens. Dat verschil bepaalt
    of een kelder hier het probleem is of niet, en daarom staat het op elke
    pagina van deze streek expliciet in de bouw-sectie.
  */
  gemeente("Eeklo", "eeklo", "9900", "oost-vlaanderen"),
  gemeente("Maldegem", "maldegem", "9990", "oost-vlaanderen"),
  gemeente("Aalter", "aalter", "9880", "oost-vlaanderen"),
  gemeente("Assenede", "assenede", "9960", "oost-vlaanderen"),
  gemeente("Evergem", "evergem", "9940", "oost-vlaanderen"),
  gemeente("Kaprijke", "kaprijke", "9970", "oost-vlaanderen"),
  gemeente("Sint-Laureins", "sint-laureins", "9980", "oost-vlaanderen"),
  gemeente("Lievegem", "lievegem", "9930", "oost-vlaanderen"),
  gemeente("Zelzate", "zelzate", "9060", "oost-vlaanderen"),
  /*
    De Denderstreek. Twee dingen bepalen hier de tekst: er wordt meer nieuw
    gebouwd dan bijna overal in Vlaanderen, en de Dender zelf is in 2010 en
    2016 buiten haar oevers gekomen. De pagina's van Ninove en Geraardsbergen
    gaan daarom over waterschade, de landelijke gemeenten over chape.
  */
  gemeente("Aalst", "aalst", "9300", "oost-vlaanderen"),
  gemeente("Denderleeuw", "denderleeuw", "9470", "oost-vlaanderen"),
  gemeente("Haaltert", "haaltert", "9450", "oost-vlaanderen"),
  gemeente("Erpe-Mere", "erpe-mere", "9420", "oost-vlaanderen"),
  gemeente("Lede", "lede", "9340", "oost-vlaanderen"),
  gemeente("Ninove", "ninove", "9400", "oost-vlaanderen"),
  gemeente("Geraardsbergen", "geraardsbergen", "9500", "oost-vlaanderen"),
  gemeente("Herzele", "herzele", "9550", "oost-vlaanderen"),
  gemeente("Sint-Lievens-Houtem", "sint-lievens-houtem", "9520", "oost-vlaanderen"),
  /*
    Scheldeland en de Dendermondse regio. Hier gaat het vaker over water dat er
    niet hoort te zijn dan over bouwvocht: Schelde, Durme en Dender komen samen
    en de meersen zijn gecontroleerd overstromingsgebied. Op deze pagina's
    staat daarom bij elke gemeente hetzelfde eerlijke voorbehoud: een droger
    haalt vocht uit de lucht, niet uit de grond.
  */
  gemeente("Dendermonde", "dendermonde", "9200", "oost-vlaanderen"),
  gemeente("Hamme", "hamme", "9220", "oost-vlaanderen"),
  gemeente("Zele", "zele", "9240", "oost-vlaanderen"),
  gemeente("Berlare", "berlare", "9290", "oost-vlaanderen"),
  gemeente("Buggenhout", "buggenhout", "9255", "oost-vlaanderen"),
  gemeente("Lebbeke", "lebbeke", "9280", "oost-vlaanderen"),
  gemeente("Wichelen", "wichelen", "9260", "oost-vlaanderen"),
  gemeente("Laarne", "laarne", "9270", "oost-vlaanderen"),
  gemeente("Wetteren", "wetteren", "9230", "oost-vlaanderen"),
  /*
    Gent en de Gentse rand. De eerste streek van Oost-Vlaanderen buiten het
    Waasland, en de eerste waar afhalen voor een klant niet meer loont: een uur
    heen en een uur terug voor een toestel van 30 kg weegt niet op tegen een
    levering die al in het pakket zit. Dat staat ook zo op deze pagina's.
  */
  gemeente("Gent", "gent", "9000", "oost-vlaanderen"),
  gemeente("Destelbergen", "destelbergen", "9070", "oost-vlaanderen"),
  gemeente("Lochristi", "lochristi", "9080", "oost-vlaanderen"),
  gemeente("Merelbeke-Melle", "merelbeke-melle", "9820", "oost-vlaanderen"),
  gemeente("Oosterzele", "oosterzele", "9860", "oost-vlaanderen"),
  gemeente("Sint-Martens-Latem", "sint-martens-latem", "9830", "oost-vlaanderen"),
  gemeente("Nazareth-De Pinte", "nazareth-de-pinte", "9810", "oost-vlaanderen"),
  gemeente("Gavere", "gavere", "9890", "oost-vlaanderen"),
  gemeente("Deinze", "deinze", "9800", "oost-vlaanderen"),
  gemeente("Zulte", "zulte", "9870", "oost-vlaanderen"),
  /*
    Oost-Vlaanderen, te beginnen bij het Waasland. Dat is geen willekeurige
    keuze: het Waasland ligt dichter bij ons magazijn dan de helft van de
    Kempen, het is de streek waar we na onze eigen provincie het vaakst rijden,
    en het is de enige plek buiten Antwerpen waar afhalen voor een klant echt
    loont. De rest van de provincie volgt per streek.
  */
  gemeente("Temse", "temse", "9140", "oost-vlaanderen"),
  gemeente("Beveren-Kruibeke-Zwijndrecht", "beveren-kruibeke-zwijndrecht", "9120", "oost-vlaanderen"),
  gemeente("Sint-Niklaas", "sint-niklaas", "9100", "oost-vlaanderen"),
  gemeente("Waasmunster", "waasmunster", "9250", "oost-vlaanderen"),
  gemeente("Lokeren", "lokeren", "9160", "oost-vlaanderen"),
  gemeente("Sint-Gillis-Waas", "sint-gillis-waas", "9170", "oost-vlaanderen"),
  gemeente("Stekene", "stekene", "9190", "oost-vlaanderen"),
  /*
    De Kempen. Zandgrond, vrijstaande bebouwing en de koudste winterwerven van
    Vlaanderen -- behalve in Beerse en Rijkevorsel, waar de steenbakkerijen hun
    klei uit eigen putten halen, en in de valleien van de Nete en de Laak, waar
    het water terugkomt. Die drie situaties vragen drie opstellingen, en dat is
    wat deze pagina's uit elkaar houdt.
  */
  gemeente("Grobbendonk", "grobbendonk", "2280"),
  gemeente("Herenthout", "herenthout", "2270"),
  gemeente("Vorselaar", "vorselaar", "2290"),
  gemeente("Lille", "lille", "2275"),
  gemeente("Vosselaar", "vosselaar", "2350"),
  gemeente("Beerse", "beerse", "2340"),
  gemeente("Rijkevorsel", "rijkevorsel", "2310"),
  gemeente("Merksplas", "merksplas", "2330"),
  gemeente("Hoogstraten", "hoogstraten", "2320"),
  gemeente("Oud-Turnhout", "oud-turnhout", "2360"),
  gemeente("Arendonk", "arendonk", "2370"),
  gemeente("Ravels", "ravels", "2380"),
  gemeente("Baarle-Hertog", "baarle-hertog", "2387"),
  gemeente("Retie", "retie", "2470"),
  gemeente("Dessel", "dessel", "2480"),
  gemeente("Kasterlee", "kasterlee", "2460"),
  gemeente("Olen", "olen", "2250"),
  gemeente("Westerlo", "westerlo", "2260"),
  gemeente("Herselt", "herselt", "2230"),
  gemeente("Hulshout", "hulshout", "2235"),
  gemeente("Laakdal", "laakdal", "2430"),
  gemeente("Meerhout", "meerhout", "2450"),
  gemeente("Balen", "balen", "2490"),
  /*
    De Noordrand en de Noorderkempen. Villagebied met grote volumes en
    kelderverdiepingen aan de ene kant, polder en zandgrond aan de andere: de
    kaart van Stabroek is een andere werf dan die van Kalmthout, en dat is ook
    waarom ze elk een eigen pagina hebben.
  */
  gemeente("Wommelgem", "wommelgem", "2160"),
  gemeente("Wijnegem", "wijnegem", "2110"),
  gemeente("Ranst", "ranst", "2520"),
  gemeente("Schilde", "schilde", "2970"),
  gemeente("Zoersel", "zoersel", "2980"),
  gemeente("Zandhoven", "zandhoven", "2240"),
  gemeente("Malle", "malle", "2390"),
  gemeente("Brecht", "brecht", "2960"),
  gemeente("Kapellen", "kapellen", "2950"),
  gemeente("Stabroek", "stabroek", "2940"),
  gemeente("Kalmthout", "kalmthout", "2920"),
  gemeente("Wuustwezel", "wuustwezel", "2990"),
  gemeente("Essen", "essen", "2910"),
  /*
    De tweede ring: de gemeenten rond het magazijn, de Rupelstreek, Klein-
    Brabant en de Netevallei. Ze staan er pas sinds 13-11-2026 en alleen omdat
    er per gemeente iets eigens te zeggen viel -- de kleiputten van Niel en
    Hemiksem, het hoogwater van de Nete in Berlaar, de serres van
    Sint-Katelijne-Waver. Dat blijft de lat: geen pagina zonder eigen verhaal.
  */
  gemeente("Boechout", "boechout", "2530"),
  gemeente("Hove", "hove", "2540"),
  gemeente("Lint", "lint", "2547"),
  gemeente("Hemiksem", "hemiksem", "2620"),
  gemeente("Niel", "niel", "2845"),
  gemeente("Rumst", "rumst", "2840"),
  gemeente("Schelle", "schelle", "2627"),
  gemeente("Bornem", "bornem", "2880"),
  gemeente("Puurs-Sint-Amands", "puurs-sint-amands", "2870"),
  gemeente("Willebroek", "willebroek", "2830"),
  gemeente("Berlaar", "berlaar", "2590"),
  gemeente("Bonheiden", "bonheiden", "2820"),
  gemeente("Nijlen", "nijlen", "2560"),
  gemeente("Putte", "putte", "2580"),
  gemeente("Sint-Katelijne-Waver", "sint-katelijne-waver", "2860"),
  gemeente("Mechelen", "mechelen", "2800"),
  gemeente("Turnhout", "turnhout", "2300"),
  gemeente("Lier", "lier", "2500"),
  gemeente("Boom", "boom", "2850"),
  gemeente("Kontich", "kontich", "2550"),
  gemeente("Geel", "geel", "2440"),
  gemeente("Mol", "mol", "2400"),
  gemeente("Herentals", "herentals", "2200"),
  gemeente("Heist-op-den-Berg", "heist-op-den-berg", "2220"),
  gemeente("Brasschaat", "brasschaat", "2930"),
  gemeente("Schoten", "schoten", "2900"),
  gemeente("Wilrijk", "wilrijk", "2610"),
  gemeente("Edegem", "edegem", "2650"),
  gemeente("Duffel", "duffel", "2570"),
  gemeente("Mortsel", "mortsel", "2640"),
  /*
      Waals-Brabant, sinds 15-11-2026: de 27 gemeenten van de eerste Waalse
      provincie met een eigen pagina.
  
      De naam is de Nederlandse ("Waver", "Eigenbrakel"), omdat die in elke zin
      van de pagina en in de titel staat. In de streeklijst staat de gemeente
      tweetalig, "Waver (Wavre)", want wie op de Franse naam zoekt, zoekt
      dezelfde droger; `ookVoor` verbindt die schrijfwijze met deze pagina,
      zodat ze op de provinciepagina en op /sitemap een link wordt.
  
      De slug volgt de Nederlandse naam, zoals bij Brussel (`elsene`, niet
      `ixelles`). Waar er geen Nederlandse naam is, is het de Franse.
    */
  { ...gemeente("Tubeke", "tubeke", "1480", "waals-brabant"), ookVoor: ["Tubeke (Tubize)"] },
  gemeente("Rebecq", "rebecq", "1430", "waals-brabant"),
  { ...gemeente("Kasteelbrakel", "kasteelbrakel", "1440", "waals-brabant"), ookVoor: ["Kasteelbrakel (Braine-le-Château)"] },
  gemeente("Itter", "itter", "1460", "waals-brabant"),
  { ...gemeente("Eigenbrakel", "eigenbrakel", "1420", "waals-brabant"), ookVoor: ["Eigenbrakel (Braine-l'Alleud)"] },
  gemeente("Waterloo", "waterloo", "1410", "waals-brabant"),
  { ...gemeente("Nijvel", "nijvel", "1400", "waals-brabant"), ookVoor: ["Nijvel (Nivelles)"] },
  { ...gemeente("Genepiën", "genepien", "1470", "waals-brabant"), ookVoor: ["Genepiën (Genappe)"] },
  gemeente("Lasne", "lasne", "1380", "waals-brabant"),
  { ...gemeente("Terhulpen", "terhulpen", "1310", "waals-brabant"), ookVoor: ["Terhulpen (La Hulpe)"] },
  gemeente("Rixensart", "rixensart", "1330", "waals-brabant"),
  { ...gemeente("Waver", "waver", "1300", "waals-brabant"), ookVoor: ["Waver (Wavre)"] },
  gemeente("Ottignies-Louvain-la-Neuve", "ottignies-louvain-la-neuve", "1340", "waals-brabant"),
  gemeente("Court-Saint-Étienne", "court-saint-etienne", "1490", "waals-brabant"),
  gemeente("Mont-Saint-Guibert", "mont-saint-guibert", "1435", "waals-brabant"),
  gemeente("Villers-la-Ville", "villers-la-ville", "1495", "waals-brabant"),
  gemeente("Chastre", "chastre", "1450", "waals-brabant"),
  gemeente("Walhain", "walhain", "1457", "waals-brabant"),
  { ...gemeente("Graven", "graven", "1390", "waals-brabant"), ookVoor: ["Graven (Grez-Doiceau)"] },
  gemeente("Chaumont-Gistoux", "chaumont-gistoux", "1325", "waals-brabant"),
  { ...gemeente("Bevekom", "bevekom", "1320", "waals-brabant"), ookVoor: ["Bevekom (Beauvechain)"] },
  gemeente("Incourt", "incourt", "1315", "waals-brabant"),
  { ...gemeente("Perwijs", "perwijs", "1360", "waals-brabant"), ookVoor: ["Perwijs (Perwez)"] },
  gemeente("Ramillies", "ramillies", "1367", "waals-brabant"),
  { ...gemeente("Geldenaken", "geldenaken", "1370", "waals-brabant"), ookVoor: ["Geldenaken (Jodoigne)"] },
  gemeente("Orp-Jauche", "orp-jauche", "1350", "waals-brabant"),
  gemeente("Hélécine", "helecine", "1357", "waals-brabant"),
  /*
    Henegouwen, sinds 15-11-2026, op dezelfde manier als Waals-Brabant: de
    Nederlandse naam op de pagina ("Bergen", "Doornik"), de tweetalige naam uit
    de streeklijst via `ookVoor`. Jurbeke en Vloesberg staan in die lijst al
    alleen in het Nederlands, dus hebben ze geen alias nodig.
  */
  { ...gemeente("'s-Gravenbrakel", "s-gravenbrakel", "7090", "henegouwen"), ookVoor: ["'s-Gravenbrakel (Braine-le-Comte)"] },
  gemeente("Le Rœulx", "le-roeulx", "7070", "henegouwen"),
  gemeente("Manage", "manage", "7170", "henegouwen"),
  gemeente("Seneffe", "seneffe", "7180", "henegouwen"),
  { ...gemeente("Zinnik", "zinnik", "7060", "henegouwen"), ookVoor: ["Zinnik (Soignies)"] },
  gemeente("Écaussinnes", "ecaussinnes", "7190", "henegouwen"),
  gemeente("Binche", "binche", "7130", "henegouwen"),
  gemeente("Estinnes", "estinnes", "7120", "henegouwen"),
  gemeente("La Louvière", "la-louviere", "7100", "henegouwen"),
  gemeente("Morlanwelz", "morlanwelz", "7140", "henegouwen"),
  gemeente("Aiseau-Presles", "aiseau-presles", "6250", "henegouwen"),
  gemeente("Chapelle-lez-Herlaimont", "chapelle-lez-herlaimont", "7160", "henegouwen"),
  gemeente("Charleroi", "charleroi", "6000", "henegouwen"),
  gemeente("Châtelet", "chatelet", "6200", "henegouwen"),
  gemeente("Courcelles", "courcelles", "6180", "henegouwen"),
  gemeente("Farciennes", "farciennes", "6240", "henegouwen"),
  gemeente("Fleurus", "fleurus", "6220", "henegouwen"),
  gemeente("Fontaine-l'Évêque", "fontaine-l-eveque", "6140", "henegouwen"),
  gemeente("Gerpinnes", "gerpinnes", "6280", "henegouwen"),
  gemeente("Les Bons Villers", "les-bons-villers", "6210", "henegouwen"),
  gemeente("Montigny-le-Tilleul", "montigny-le-tilleul", "6110", "henegouwen"),
  gemeente("Pont-à-Celles", "pont-a-celles", "6230", "henegouwen"),
  { ...gemeente("Bergen", "bergen", "7000", "henegouwen"), ookVoor: ["Bergen (Mons)"] },
  gemeente("Boussu", "boussu", "7300", "henegouwen"),
  gemeente("Colfontaine", "colfontaine", "7340", "henegouwen"),
  gemeente("Dour", "dour", "7370", "henegouwen"),
  gemeente("Frameries", "frameries", "7080", "henegouwen"),
  gemeente("Hensies", "hensies", "7350", "henegouwen"),
  gemeente("Honnelles", "honnelles", "7387", "henegouwen"),
  gemeente("Jurbeke", "jurbeke", "7050", "henegouwen"),
  gemeente("Lens", "lens", "7870", "henegouwen"),
  gemeente("Quaregnon", "quaregnon", "7390", "henegouwen"),
  gemeente("Quiévrain", "quievrain", "7380", "henegouwen"),
  gemeente("Quévy", "quevy", "7040", "henegouwen"),
  gemeente("Saint-Ghislain", "saint-ghislain", "7330", "henegouwen"),
  { ...gemeente("Aat", "aat", "7800", "henegouwen"), ookVoor: ["Aat (Ath)"] },
  gemeente("Belœil", "beloeil", "7970", "henegouwen"),
  gemeente("Bernissart", "bernissart", "7320", "henegouwen"),
  gemeente("Brugelette", "brugelette", "7940", "henegouwen"),
  gemeente("Chièvres", "chievres", "7950", "henegouwen"),
  { ...gemeente("Edingen", "edingen", "7850", "henegouwen"), ookVoor: ["Edingen (Enghien)"] },
  { ...gemeente("Elzele", "elzele", "7890", "henegouwen"), ookVoor: ["Elzele (Ellezelles)"] },
  gemeente("Frasnes-lez-Anvaing", "frasnes-lez-anvaing", "7911", "henegouwen"),
  { ...gemeente("Lessen", "lessen", "7860", "henegouwen"), ookVoor: ["Lessen (Lessines)"] },
  { ...gemeente("Opzullik", "opzullik", "7830", "henegouwen"), ookVoor: ["Opzullik (Silly)"] },
  gemeente("Vloesberg", "vloesberg", "7880", "henegouwen"),
  gemeente("Antoing", "antoing", "7640", "henegouwen"),
  gemeente("Brunehaut", "brunehaut", "7620", "henegouwen"),
  gemeente("Celles", "celles", "7760", "henegouwen"),
  { ...gemeente("Doornik", "doornik", "7500", "henegouwen"), ookVoor: ["Doornik (Tournai)"] },
  gemeente("Estaimpuis", "estaimpuis", "7730", "henegouwen"),
  { ...gemeente("Komen-Waasten", "komen-waasten", "7780", "henegouwen"), ookVoor: ["Komen-Waasten (Comines-Warneton)"] },
  gemeente("Leuze-en-Hainaut", "leuze-en-hainaut", "7900", "henegouwen"),
  { ...gemeente("Moeskroen", "moeskroen", "7700", "henegouwen"), ookVoor: ["Moeskroen (Mouscron)"] },
  gemeente("Mont-de-l'Enclus", "mont-de-l-enclus", "7750", "henegouwen"),
  gemeente("Pecq", "pecq", "7740", "henegouwen"),
  gemeente("Péruwelz", "peruwelz", "7600", "henegouwen"),
  gemeente("Rumes", "rumes", "7618", "henegouwen"),
  gemeente("Anderlues", "anderlues", "6150", "henegouwen"),
  gemeente("Beaumont", "beaumont", "6500", "henegouwen"),
  gemeente("Chimay", "chimay", "6460", "henegouwen"),
  gemeente("Erquelinnes", "erquelinnes", "6560", "henegouwen"),
  gemeente("Froidchapelle", "froidchapelle", "6440", "henegouwen"),
  gemeente("Ham-sur-Heure-Nalinnes", "ham-sur-heure-nalinnes", "6120", "henegouwen"),
  gemeente("Lobbes", "lobbes", "6540", "henegouwen"),
  gemeente("Merbes-le-Château", "merbes-le-chateau", "6567", "henegouwen"),
  gemeente("Momignies", "momignies", "6590", "henegouwen"),
  gemeente("Sivry-Rance", "sivry-rance", "6470", "henegouwen"),
  gemeente("Thuin", "thuin", "6530", "henegouwen"),
  /*
    Namen, sinds 15-11-2026, zoals Henegouwen. De stad heet `namen-stad`,
    om dezelfde reden als `antwerpen-stad`: /bouwdroger-huren-namen is de
    provincie.
  */
  gemeente("Andenne", "andenne", "5300", "namen"),
  gemeente("Assesse", "assesse", "5330", "namen"),
  gemeente("Fernelmont", "fernelmont", "5380", "namen"),
  gemeente("Floreffe", "floreffe", "5150", "namen"),
  gemeente("Fosses-la-Ville", "fosses-la-ville", "5070", "namen"),
  { ...gemeente("Gembloers", "gembloers", "5030", "namen"), ookVoor: ["Gembloers (Gembloux)"] },
  gemeente("Gesves", "gesves", "5340", "namen"),
  gemeente("Jemeppe-sur-Sambre", "jemeppe-sur-sambre", "5190", "namen"),
  gemeente("La Bruyère", "la-bruyere", "5080", "namen"),
  gemeente("Mettet", "mettet", "5640", "namen"),
  { ...gemeente("Namen", "namen-stad", "5000", "namen"), kruimel: "Namen stad" },
  gemeente("Ohey", "ohey", "5350", "namen"),
  gemeente("Profondeville", "profondeville", "5170", "namen"),
  gemeente("Sambreville", "sambreville", "5060", "namen"),
  gemeente("Sombreffe", "sombreffe", "5140", "namen"),
  gemeente("Éghezée", "eghezee", "5310", "namen"),
  gemeente("Anhée", "anhee", "5537", "namen"),
  gemeente("Beauraing", "beauraing", "5570", "namen"),
  gemeente("Bièvre", "bievre", "5555", "namen"),
  gemeente("Ciney", "ciney", "5590", "namen"),
  gemeente("Dinant", "dinant", "5500", "namen"),
  gemeente("Gedinne", "gedinne", "5575", "namen"),
  gemeente("Hamois", "hamois", "5360", "namen"),
  gemeente("Hastière", "hastiere", "5540", "namen"),
  gemeente("Havelange", "havelange", "5370", "namen"),
  gemeente("Houyet", "houyet", "5560", "namen"),
  gemeente("Onhaye", "onhaye", "5520", "namen"),
  gemeente("Rochefort", "rochefort", "5580", "namen"),
  gemeente("Somme-Leuze", "somme-leuze", "5377", "namen"),
  gemeente("Vresse-sur-Semois", "vresse-sur-semois", "5550", "namen"),
  gemeente("Yvoir", "yvoir", "5530", "namen"),
  gemeente("Cerfontaine", "cerfontaine", "5630", "namen"),
  gemeente("Couvin", "couvin", "5660", "namen"),
  gemeente("Doische", "doische", "5680", "namen"),
  gemeente("Florennes", "florennes", "5620", "namen"),
  gemeente("Philippeville", "philippeville", "5600", "namen"),
  gemeente("Viroinval", "viroinval", "5670", "namen"),
  gemeente("Walcourt", "walcourt", "5650", "namen"),
  /*
    De provincie Luxemburg, sinds 15-11-2026, zoals Namen. Bastenaken is sinds
    de fusie met Bertogne (2025) één gemeente; de oude naam heeft geen eigen
    pagina.
  */
  gemeente("Durbuy", "durbuy", "6940", "luxemburg"),
  gemeente("Hotton", "hotton", "6990", "luxemburg"),
  gemeente("La Roche-en-Ardenne", "la-roche-en-ardenne", "6980", "luxemburg"),
  gemeente("Manhay", "manhay", "6960", "luxemburg"),
  gemeente("Marche-en-Famenne", "marche-en-famenne", "6900", "luxemburg"),
  gemeente("Nassogne", "nassogne", "6950", "luxemburg"),
  gemeente("Rendeux", "rendeux", "6987", "luxemburg"),
  gemeente("Tenneville", "tenneville", "6970", "luxemburg"),
  gemeente("Érezée", "erezee", "6997", "luxemburg"),
  { ...gemeente("Bastenaken", "bastenaken", "6600", "luxemburg"), ookVoor: ["Bastenaken (Bastogne)"] },
  gemeente("Fauvillers", "fauvillers", "6637", "luxemburg"),
  gemeente("Gouvy", "gouvy", "6670", "luxemburg"),
  gemeente("Houffalize", "houffalize", "6660", "luxemburg"),
  gemeente("Sainte-Ode", "sainte-ode", "6680", "luxemburg"),
  gemeente("Vaux-sur-Sûre", "vaux-sur-sure", "6640", "luxemburg"),
  gemeente("Vielsalm", "vielsalm", "6690", "luxemburg"),
  gemeente("Bertrix", "bertrix", "6880", "luxemburg"),
  gemeente("Bouillon", "bouillon", "6830", "luxemburg"),
  gemeente("Daverdisse", "daverdisse", "6929", "luxemburg"),
  gemeente("Herbeumont", "herbeumont", "6887", "luxemburg"),
  gemeente("Libin", "libin", "6890", "luxemburg"),
  gemeente("Libramont-Chevigny", "libramont-chevigny", "6800", "luxemburg"),
  gemeente("Léglise", "leglise", "6860", "luxemburg"),
  gemeente("Neufchâteau", "neufchateau", "6840", "luxemburg"),
  gemeente("Paliseul", "paliseul", "6850", "luxemburg"),
  gemeente("Saint-Hubert", "saint-hubert", "6870", "luxemburg"),
  gemeente("Tellin", "tellin", "6927", "luxemburg"),
  gemeente("Wellin", "wellin", "6920", "luxemburg"),
  { ...gemeente("Aarlen", "aarlen", "6700", "luxemburg"), ookVoor: ["Aarlen (Arlon)"] },
  gemeente("Attert", "attert", "6717", "luxemburg"),
  gemeente("Aubange", "aubange", "6790", "luxemburg"),
  gemeente("Martelange", "martelange", "6630", "luxemburg"),
  gemeente("Messancy", "messancy", "6780", "luxemburg"),
  gemeente("Chiny", "chiny", "6810", "luxemburg"),
  gemeente("Florenville", "florenville", "6820", "luxemburg"),
  gemeente("Habay", "habay", "6720", "luxemburg"),
  gemeente("Meix-devant-Virton", "meix-devant-virton", "6769", "luxemburg"),
  gemeente("Musson", "musson", "6750", "luxemburg"),
  gemeente("Rouvroy", "rouvroy", "6767", "luxemburg"),
  gemeente("Saint-Léger", "saint-leger", "6747", "luxemburg"),
  gemeente("Tintigny", "tintigny", "6730", "luxemburg"),
  gemeente("Virton", "virton", "6760", "luxemburg"),
  gemeente("Étalle", "etalle", "6740", "luxemburg"),
  /*
    Luik, sinds 15-11-2026. De stad heet `luik-stad`, zoals `namen-stad`.
    De gemeente Limbourg heet hier zo en niet "Limburg": die naam is al onze
    Belgische provincie, en een pagina "Bouwdroger huren in Limburg" over
    een stadje bij Verviers zou de twee door elkaar halen.
    De Duitstalige gemeenten staan onder hun Duitse naam.
  */
  gemeente("Berloz", "berloz", "4257", "luik"),
  { ...gemeente("Borgworm", "borgworm", "4300", "luik"), ookVoor: ["Borgworm (Waremme)"] },
  gemeente("Braives", "braives", "4260", "luik"),
  gemeente("Crisnée", "crisnee", "4367", "luik"),
  gemeente("Donceel", "donceel", "4357", "luik"),
  gemeente("Faimes", "faimes", "4317", "luik"),
  gemeente("Fexhe-le-Haut-Clocher", "fexhe-le-haut-clocher", "4347", "luik"),
  gemeente("Geer", "geer", "4250", "luik"),
  { ...gemeente("Hannuit", "hannuit", "4280", "luik"), ookVoor: ["Hannuit (Hannut)"] },
  { ...gemeente("Lijsem", "lijsem", "4287", "luik"), ookVoor: ["Lijsem (Lincent)"] },
  { ...gemeente("Oerle", "oerle", "4360", "luik"), ookVoor: ["Oerle (Oreye)"] },
  gemeente("Remicourt", "remicourt", "4350", "luik"),
  gemeente("Saint-Georges-sur-Meuse", "saint-georges-sur-meuse", "4470", "luik"),
  gemeente("Wasseiges", "wasseiges", "4219", "luik"),
  gemeente("Ans", "ans", "4430", "luik"),
  gemeente("Awans", "awans", "4340", "luik"),
  gemeente("Aywaille", "aywaille", "4920", "luik"),
  gemeente("Beyne-Heusay", "beyne-heusay", "4610", "luik"),
  { ...gemeente("Bitsingen", "bitsingen", "4690", "luik"), ookVoor: ["Bitsingen (Bassenge)"] },
  gemeente("Blegny", "blegny", "4670", "luik"),
  gemeente("Chaudfontaine", "chaudfontaine", "4050", "luik"),
  gemeente("Comblain-au-Pont", "comblain-au-pont", "4170", "luik"),
  gemeente("Dalhem", "dalhem", "4607", "luik"),
  gemeente("Esneux", "esneux", "4130", "luik"),
  gemeente("Flémalle", "flemalle", "4400", "luik"),
  gemeente("Fléron", "fleron", "4620", "luik"),
  gemeente("Grâce-Hollogne", "grace-hollogne", "4460", "luik"),
  gemeente("Herstal", "herstal", "4040", "luik"),
  gemeente("Juprelle", "juprelle", "4450", "luik"),
  { ...gemeente("Luik", "luik-stad", "4000", "luik"), ookVoor: ["Luik (Liège)"], kruimel: "Luik stad" },
  gemeente("Neupré", "neupre", "4120", "luik"),
  gemeente("Oupeye", "oupeye", "4680", "luik"),
  gemeente("Saint-Nicolas", "saint-nicolas", "4420", "luik"),
  gemeente("Seraing", "seraing", "4100", "luik"),
  gemeente("Soumagne", "soumagne", "4630", "luik"),
  gemeente("Sprimont", "sprimont", "4140", "luik"),
  gemeente("Trooz", "trooz", "4870", "luik"),
  { ...gemeente("Wezet", "wezet", "4600", "luik"), ookVoor: ["Wezet (Visé)"] },
  gemeente("Amay", "amay", "4540", "luik"),
  gemeente("Anthisnes", "anthisnes", "4160", "luik"),
  gemeente("Burdinne", "burdinne", "4210", "luik"),
  gemeente("Clavier", "clavier", "4560", "luik"),
  gemeente("Engis", "engis", "4480", "luik"),
  gemeente("Ferrières", "ferrieres", "4190", "luik"),
  gemeente("Hamoir", "hamoir", "4180", "luik"),
  { ...gemeente("Hoei", "hoei", "4500", "luik"), ookVoor: ["Hoei (Huy)"] },
  gemeente("Héron", "heron", "4217", "luik"),
  gemeente("Marchin", "marchin", "4570", "luik"),
  gemeente("Modave", "modave", "4577", "luik"),
  gemeente("Nandrin", "nandrin", "4550", "luik"),
  gemeente("Ouffet", "ouffet", "4590", "luik"),
  gemeente("Tinlot", "tinlot", "4557", "luik"),
  gemeente("Verlaine", "verlaine", "4537", "luik"),
  gemeente("Villers-le-Bouillet", "villers-le-bouillet", "4530", "luik"),
  gemeente("Wanze", "wanze", "4520", "luik"),
  gemeente("Amel", "amel", "4770", "luik"),
  gemeente("Aubel", "aubel", "4880", "luik"),
  gemeente("Baelen", "baelen", "4837", "luik"),
  gemeente("Burg-Reuland", "burg-reuland", "4790", "luik"),
  gemeente("Büllingen", "buellingen", "4760", "luik"),
  gemeente("Bütgenbach", "buetgenbach", "4750", "luik"),
  gemeente("Dison", "dison", "4820", "luik"),
  gemeente("Eupen", "eupen", "4700", "luik"),
  gemeente("Herve", "herve", "4650", "luik"),
  gemeente("Jalhay", "jalhay", "4845", "luik"),
  gemeente("Kelmis", "kelmis", "4720", "luik"),
  gemeente("Lierneux", "lierneux", "4990", "luik"),
  { ...gemeente("Limbourg", "limbourg", "4830", "luik"), ookVoor: ["Limburg (Limbourg)"] },
  gemeente("Lontzen", "lontzen", "4710", "luik"),
  gemeente("Malmedy", "malmedy", "4960", "luik"),
  gemeente("Olne", "olne", "4877", "luik"),
  gemeente("Pepinster", "pepinster", "4860", "luik"),
  gemeente("Plombières", "plombieres", "4850", "luik"),
  gemeente("Raeren", "raeren", "4730", "luik"),
  { ...gemeente("Sankt Vith", "sankt-vith", "4780", "luik"), ookVoor: ["Sankt Vith (Saint-Vith)"] },
  gemeente("Spa", "spa", "4900", "luik"),
  gemeente("Stavelot", "stavelot", "4970", "luik"),
  gemeente("Stoumont", "stoumont", "4987", "luik"),
  gemeente("Theux", "theux", "4910", "luik"),
  gemeente("Thimister-Clermont", "thimister-clermont", "4890", "luik"),
  gemeente("Trois-Ponts", "trois-ponts", "4980", "luik"),
  gemeente("Verviers", "verviers", "4800", "luik"),
  { ...gemeente("Weismes", "weismes", "4950", "luik"), ookVoor: ["Weismes (Waimes)"] },
  gemeente("Welkenraedt", "welkenraedt", "4840", "luik"),
  /*
    Nederlandse gemeenten, sinds 15-11-2026. De slug volgt de naam; waar die
    botst met een Belgische pagina krijgt ze een achtervoegsel (`deurne-nb`,
    `bergen-limburg`). Levering is hier op afspraak, zie `opAanvraag`.
  */
  gemeente("Alphen-Chaam", "alphen-chaam", "5131", "noord-brabant"),
  gemeente("Altena", "altena", "4251", "noord-brabant"),
  gemeente("Baarle-Nassau", "baarle-nassau", "5111", "noord-brabant"),
  gemeente("Bergen op Zoom", "bergen-op-zoom", "4611", "noord-brabant"),
  gemeente("Breda", "breda", "4811", "noord-brabant"),
  gemeente("Drimmelen", "drimmelen", "4921", "noord-brabant"),
  gemeente("Etten-Leur", "etten-leur", "4871", "noord-brabant"),
  gemeente("Geertruidenberg", "geertruidenberg", "4931", "noord-brabant"),
  gemeente("Halderberge", "halderberge", "4731", "noord-brabant"),
  gemeente("Moerdijk", "moerdijk", "4782", "noord-brabant"),
  gemeente("Oosterhout", "oosterhout", "4901", "noord-brabant"),
  gemeente("Roosendaal", "roosendaal", "4701", "noord-brabant"),
  gemeente("Rucphen", "rucphen", "4715", "noord-brabant"),
  gemeente("Steenbergen", "steenbergen", "4651", "noord-brabant"),
  gemeente("Woensdrecht", "woensdrecht", "4631", "noord-brabant"),
  gemeente("Zundert", "zundert", "4881", "noord-brabant"),
  gemeente("Dongen", "dongen", "5101", "noord-brabant"),
  gemeente("Gilze en Rijen", "gilze-en-rijen", "5126", "noord-brabant"),
  gemeente("Goirle", "goirle", "5051", "noord-brabant"),
  gemeente("Heusden", "heusden", "5251", "noord-brabant"),
  gemeente("Hilvarenbeek", "hilvarenbeek", "5081", "noord-brabant"),
  gemeente("Loon op Zand", "loon-op-zand", "5175", "noord-brabant"),
  gemeente("Oisterwijk", "oisterwijk", "5061", "noord-brabant"),
  gemeente("Tilburg", "tilburg", "5011", "noord-brabant"),
  gemeente("Waalwijk", "waalwijk", "5141", "noord-brabant"),
  gemeente("'s-Hertogenbosch", "s-hertogenbosch", "5211", "noord-brabant"),
  gemeente("Bernheze", "bernheze", "5384", "noord-brabant"),
  gemeente("Boekel", "boekel", "5427", "noord-brabant"),
  gemeente("Boxtel", "boxtel", "5281", "noord-brabant"),
  gemeente("Gemert-Bakel", "gemert-bakel", "5421", "noord-brabant"),
  gemeente("Land van Cuijk", "land-van-cuijk", "5431", "noord-brabant"),
  gemeente("Maashorst", "maashorst", "5401", "noord-brabant"),
  gemeente("Meierijstad", "meierijstad", "5461", "noord-brabant"),
  gemeente("Oss", "oss", "5341", "noord-brabant"),
  gemeente("Sint-Michielsgestel", "sint-michielsgestel", "5271", "noord-brabant"),
  gemeente("Vught", "vught", "5261", "noord-brabant"),
  gemeente("Asten", "asten", "5721", "noord-brabant"),
  gemeente("Bergeijk", "bergeijk", "5571", "noord-brabant"),
  gemeente("Best", "best", "5681", "noord-brabant"),
  gemeente("Bladel", "bladel", "5531", "noord-brabant"),
  gemeente("Cranendonck", "cranendonck", "6021", "noord-brabant"),
  { ...gemeente("Deurne", "deurne-nb", "5751", "noord-brabant"), ookVoor: ["Deurne (Noord-Brabant)"] },
  gemeente("Eersel", "eersel", "5521", "noord-brabant"),
  gemeente("Eindhoven", "eindhoven", "5611", "noord-brabant"),
  gemeente("Geldrop-Mierlo", "geldrop-mierlo", "5664", "noord-brabant"),
  gemeente("Heeze-Leende", "heeze-leende", "5591", "noord-brabant"),
  gemeente("Helmond", "helmond", "5701", "noord-brabant"),
  gemeente("Laarbeek", "laarbeek", "5741", "noord-brabant"),
  { ...gemeente("Nuenen", "nuenen", "5671", "noord-brabant"), ookVoor: ["Nuenen c.a."] },
  gemeente("Oirschot", "oirschot", "5688", "noord-brabant"),
  gemeente("Reusel-De Mierden", "reusel-de-mierden", "5541", "noord-brabant"),
  gemeente("Someren", "someren", "5711", "noord-brabant"),
  gemeente("Son en Breugel", "son-en-breugel", "5691", "noord-brabant"),
  gemeente("Valkenswaard", "valkenswaard", "5551", "noord-brabant"),
  gemeente("Veldhoven", "veldhoven", "5501", "noord-brabant"),
  gemeente("Waalre", "waalre", "5581", "noord-brabant"),
  /*
    Zeeland, sinds 15-11-2026, zoals Noord-Brabant.
  */
  gemeente("Hulst", "hulst", "4561", "zeeland"),
  gemeente("Sluis", "sluis", "4524", "zeeland"),
  gemeente("Terneuzen", "terneuzen", "4531", "zeeland"),
  gemeente("Borsele", "borsele", "4451", "zeeland"),
  gemeente("Goes", "goes", "4461", "zeeland"),
  gemeente("Kapelle", "kapelle", "4421", "zeeland"),
  gemeente("Middelburg", "middelburg", "4331", "zeeland"),
  gemeente("Noord-Beveland", "noord-beveland", "4484", "zeeland"),
  gemeente("Reimerswaal", "reimerswaal", "4401", "zeeland"),
  gemeente("Schouwen-Duiveland", "schouwen-duiveland", "4301", "zeeland"),
  gemeente("Tholen", "tholen", "4691", "zeeland"),
  gemeente("Veere", "veere", "4351", "zeeland"),
  gemeente("Vlissingen", "vlissingen", "4381", "zeeland"),
  /*
    Nederlands Limburg, sinds 15-11-2026. Sleutel en slug zijn `nederlands-limburg`,
    niet `limburg`: dat is onze Belgische provincie.
  */
  gemeente("Beesel", "beesel", "5951", "nederlands-limburg"),
  { ...gemeente("Bergen", "bergen-limburg", "5854", "nederlands-limburg"), ookVoor: ["Bergen (L.)"] },
  gemeente("Gennep", "gennep", "6591", "nederlands-limburg"),
  gemeente("Horst aan de Maas", "horst-aan-de-maas", "5961", "nederlands-limburg"),
  gemeente("Mook en Middelaar", "mook-en-middelaar", "6585", "nederlands-limburg"),
  gemeente("Peel en Maas", "peel-en-maas", "5981", "nederlands-limburg"),
  gemeente("Venlo", "venlo", "5911", "nederlands-limburg"),
  gemeente("Venray", "venray", "5801", "nederlands-limburg"),
  gemeente("Echt-Susteren", "echt-susteren", "6101", "nederlands-limburg"),
  gemeente("Leudal", "leudal", "6093", "nederlands-limburg"),
  gemeente("Maasgouw", "maasgouw", "6051", "nederlands-limburg"),
  gemeente("Nederweert", "nederweert", "6031", "nederlands-limburg"),
  gemeente("Roerdalen", "roerdalen", "6074", "nederlands-limburg"),
  gemeente("Roermond", "roermond", "6041", "nederlands-limburg"),
  gemeente("Weert", "weert", "6001", "nederlands-limburg"),
  gemeente("Beek", "beek", "6191", "nederlands-limburg"),
  gemeente("Beekdaelen", "beekdaelen", "6361", "nederlands-limburg"),
  gemeente("Brunssum", "brunssum", "6441", "nederlands-limburg"),
  gemeente("Eijsden-Margraten", "eijsden-margraten", "6269", "nederlands-limburg"),
  gemeente("Gulpen-Wittem", "gulpen-wittem", "6271", "nederlands-limburg"),
  gemeente("Heerlen", "heerlen", "6411", "nederlands-limburg"),
  gemeente("Kerkrade", "kerkrade", "6461", "nederlands-limburg"),
  gemeente("Landgraaf", "landgraaf", "6371", "nederlands-limburg"),
  gemeente("Maastricht", "maastricht", "6211", "nederlands-limburg"),
  gemeente("Meerssen", "meerssen", "6231", "nederlands-limburg"),
  gemeente("Simpelveld", "simpelveld", "6369", "nederlands-limburg"),
  gemeente("Sittard-Geleen", "sittard-geleen", "6131", "nederlands-limburg"),
  gemeente("Stein", "stein", "6171", "nederlands-limburg"),
  gemeente("Vaals", "vaals", "6291", "nederlands-limburg"),
  gemeente("Valkenburg aan de Geul", "valkenburg-aan-de-geul", "6301", "nederlands-limburg"),
  gemeente("Voerendaal", "voerendaal", "6367", "nederlands-limburg")
];
const SLUG_FR = {
  "antwerpen-stad": "anvers-ville",
  "brussel-stad": "bruxelles-ville",
  "namen-stad": "namur-ville",
  "luik-stad": "liege-ville",
  "sint-niklaas": "saint-nicolas-waes",
  limbourg: "limbourg-ville"
};
const KRUIMEL_FR = {
  "antwerpen-stad": "Anvers ville",
  "brussel-stad": "Bruxelles-Ville",
  "namen-stad": "Namur ville",
  "luik-stad": "Liège ville"
};
const slugVan = (naam) => naam.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/œ/gi, "oe").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
function gemeentePadFr(route) {
  if (!route.nameFr) return null;
  const slug = SLUG_FR[route.slug] ?? (route.nameFr === route.name ? route.slug : slugVan(route.nameFr));
  return `/location-deshumidificateur-${slug}`;
}
function kruimelFr(route) {
  return KRUIMEL_FR[route.slug] ?? route.nameFr ?? route.name;
}
const SLUG_EN = {
  "antwerpen-stad": "antwerp-city",
  "brussel-stad": "brussels-city",
  "namen-stad": "namur-city",
  "luik-stad": "liege-city"
};
const KRUIMEL_EN = {
  "antwerpen-stad": "Antwerp City",
  "brussel-stad": "Brussels City",
  "namen-stad": "Namur City",
  "luik-stad": "Liège City"
};
function gemeentePadEn(route) {
  if (!route.nameEn) return null;
  const slug = SLUG_EN[route.slug] ?? (route.nameEn === route.name ? route.slug : slugVan(route.nameEn));
  return `/dehumidifier-hire-${slug}`;
}
function kruimelEn(route) {
  return KRUIMEL_EN[route.slug] ?? route.nameEn ?? route.name;
}
function gemeenteNaamIn(route, taal) {
  if (taal === "fr") return route.nameFr ?? route.name;
  if (taal === "en") return route.nameEn ?? route.name;
  return route.name;
}
function kruimelIn(route, taal) {
  if (taal === "fr") return kruimelFr(route);
  if (taal === "en") return kruimelEn(route);
  return route.kruimel ?? route.name;
}
registreerPaden(
  Object.fromEntries(
    GEMEENTE_ROUTES.flatMap((g) => {
      const fr = GEMEENTEN_MET_FR.has(g.slug) && gemeentePadFr(g) || "";
      const en = GEMEENTEN_MET_EN.has(g.slug) && gemeentePadEn(g) || "";
      return fr || en ? [[g.path, { fr, en }]] : [];
    })
  )
);
const GEMEENTE_BY_PATH = Object.fromEntries(
  GEMEENTE_ROUTES.map((g) => [g.path, g])
);
function gemeenteVanPlaats(plaats) {
  return GEMEENTE_ROUTES.find((g) => g.name === plaats || g.ookVoor?.includes(plaats));
}
const DISTRICTEN = ["Antwerpen", "Berchem", "Merksem", "Deurne", "Hoboken", "Ekeren", "Borgerhout"];
function plaatsenVanRoute(route) {
  return route.slug === "antwerpen-stad" ? DISTRICTEN : [route.name];
}
function gemeentenInRegio(regioSlug) {
  return GEMEENTE_ROUTES.filter((g) => g.regio === regioSlug);
}
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/App.tsx");
const NL_ROUTES = [
  { index: true, lazy: async () => ({ Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/Index.tsx"), import("./assets/Index-C1s-nH45.js"))).default }) },
  {
    path: "levering",
    lazy: async () => ({ Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/LeveringPage.tsx"), import("./assets/LeveringPage-BRY0q7D0.js"))).default })
  },
  {
    path: "afhalen",
    lazy: async () => ({ Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/AfhalenPage.tsx"), import("./assets/AfhalenPage-B96t8b3_.js"))).default })
  },
  {
    path: "levering/pakket/:packageId",
    lazy: async () => ({ Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/PackageDetailPage.tsx"), import("./assets/PackageDetailPage-DAgp2CZx.js"))).default }),
    getStaticPaths: async () => (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/packages.ts"), import("./assets/packages-DdkKuPcF.js"))).getAllPackages().map((p) => `/levering/pakket/${p.id}`)
  },
  {
    path: "over-ons",
    lazy: async () => ({ Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/OverOnsPage.tsx"), import("./assets/OverOnsPage-DnM4karu.js"))).default })
  },
  {
    path: "realisaties",
    lazy: async () => ({ Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/RealisatiesPage.tsx"), import("./assets/RealisatiesPage-BwgyR_MD.js"))).default })
  },
  {
    path: "realisaties/:slug",
    lazy: async () => ({ Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/RealisatieDetailPage.tsx"), import("./assets/RealisatieDetailPage-CYp-wbvD.js"))).default }),
    getStaticPaths: async () => (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/realisaties.ts"), import("./assets/realisaties-eA_H-cxM.js"))).REALISATIES.map((r) => `/realisaties/${r.slug}`)
  },
  {
    path: "contact",
    lazy: async () => ({ Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/ContactPage.tsx"), import("./assets/ContactPage-D461clLJ.js"))).default })
  },
  {
    path: "klantservice",
    lazy: async () => ({ Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/KlantservicePage.tsx"), import("./assets/KlantservicePage-BklayLo8.js"))).default })
  },
  {
    path: "drooggarantie",
    lazy: async () => ({ Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/DrooggarantiePage.tsx"), import("./assets/DrooggarantiePage-ByzCUb91.js"))).default })
  },
  {
    path: "hoe-drogen-werkt",
    lazy: async () => ({ Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/HoeDrogenWerktPage.tsx"), import("./assets/HoeDrogenWerktPage-B_YOGQrz.js"))).default })
  },
  {
    path: "waarom-bouwdroging",
    lazy: async () => ({ Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/WaaromBouwdrogingPage.tsx"), import("./assets/WaaromBouwdrogingPage-BQzkY1Og.js"))).default })
  },
  /*
   * Gidsen: elk één informatieve zoekvraag (droogtijd chape, droogtijd
   * pleisterwerk, toesteltype, verbruik). Vaste paden in plaats van
   * `gids/:slug` — het zijn aparte pagina's met een eigen opbouw, geen
   * sjabloon met data.
   */
  {
    path: "gids",
    lazy: async () => ({ Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/gids/GidsIndexPage.tsx"), import("./assets/GidsIndexPage-BCmX0ngz.js"))).default })
  },
  {
    path: "gids/hoe-lang-moet-chape-drogen",
    lazy: async () => ({ Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/gids/ChapeDroogtijdPage.tsx"), import("./assets/ChapeDroogtijdPage-Bo4SW9sD.js"))).default })
  },
  {
    path: "gids/hoe-lang-moet-pleisterwerk-drogen",
    lazy: async () => ({ Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/gids/PleisterwerkDroogtijdPage.tsx"), import("./assets/PleisterwerkDroogtijdPage-sZWUKtBX.js"))).default })
  },
  {
    path: "gids/condensdroger-of-adsorptiedroger",
    lazy: async () => ({ Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/gids/CondensAdsorptiePage.tsx"), import("./assets/CondensAdsorptiePage-TgXR_aim.js"))).default })
  },
  {
    path: "gids/natuurlijk-drogen-of-bouwdroger",
    lazy: async () => ({ Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/gids/NatuurlijkDrogenPage.tsx"), import("./assets/NatuurlijkDrogenPage-C6JV8CX8.js"))).default })
  },
  {
    path: "gids/stroomverbruik-bouwdroger",
    lazy: async () => ({ Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/gids/StroomverbruikPage.tsx"), import("./assets/StroomverbruikPage-CD1iks6p.js"))).default })
  },
  {
    path: "luchtontvochtiger-huren",
    lazy: async () => ({ Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/LuchtontvochtigerHurenPage.tsx"), import("./assets/LuchtontvochtigerHurenPage-IJUQEUoP.js"))).default })
  },
  /*
    De zichtbare sitemap. Hij wordt geprerenderd zoals elke andere pagina,
    zodat een antwoordmachine zonder JavaScript hem gewoon kan uitlezen —
    dat is de helft van zijn nut.
  */
  {
    path: "sitemap",
    lazy: async () => ({ Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/SitemapPage.tsx"), import("./assets/SitemapPage-CH9iKKtQ.js"))).default })
  },
  /*
    TIJDELIJK — drie ontwerpvoorstellen voor /sitemap, onder `npm run dev`
    of in een preview-build met VITE_ONTWERPEN=1. Een gewone productiebuild
    laat ze weg; en ook in de preview staan ze op noindex, dus buiten
    sitemap.xml. Weg zodra er gekozen is.
  */
  ...[],
  {
    path: "privacy",
    lazy: async () => ({ Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/PrivacyPage.tsx"), import("./assets/PrivacyPage-CTHznRPa.js"))).default })
  },
  {
    path: "algemene-voorwaarden",
    lazy: async () => ({ Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/AlgemeneVoorwaardenPage.tsx"), import("./assets/AlgemeneVoorwaardenPage-DiRRL7uW.js"))).default })
  },
  {
    path: "product/:id",
    lazy: async () => ({ Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/ProductDetail.tsx"), import("./assets/ProductDetail-DZUm3w_U.js"))).default }),
    getStaticPaths: async () => (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/products.ts"), import("./assets/products-BvI4fr_a.js"))).products.map((p) => `/product/${p.id}`)
  },
  {
    path: "booking",
    lazy: async () => ({ Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/BookingPage.tsx"), import("./assets/BookingPage-1tnjXXeZ.js"))).default })
  },
  {
    path: "booking/success",
    lazy: async () => ({ Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/BookingSuccess.tsx"), import("./assets/BookingSuccess-DTxL_Nra.js"))).default })
  },
  {
    path: "chape-drogen",
    lazy: async () => ({ Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/ChapeDrogenPage.tsx"), import("./assets/ChapeDrogenPage-BbaAWvGz.js"))).default })
  },
  {
    path: "pleisterwerk-drogen",
    lazy: async () => ({ Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/PleisterwerkDrogenPage.tsx"), import("./assets/PleisterwerkDrogenPage-Cf2bkdg1.js"))).default })
  },
  {
    path: "nieuwbouw-drogen",
    lazy: async () => ({ Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/NieuwbouwPage.tsx"), import("./assets/NieuwbouwPage-Cndjlk2r.js"))).default })
  },
  {
    path: "waterschade",
    lazy: async () => ({ Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/WaterschadePage.tsx"), import("./assets/WaterschadePage-Oi8zUSeV.js"))).default })
  },
  {
    path: "renovatie",
    lazy: async () => ({ Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/RenovatiePage.tsx"), import("./assets/RenovatiePage-jTSegOfM.js"))).default })
  },
  /*
   * Ozonbehandeling — de ontschimmeling. Een dienst, geen toestel: er staat
   * geen dagprijs tegenover, dus de pagina boekt via een aanvraag in plaats
   * van via de verhuurfunnel. Zelfde slug als op de zustersite, zodat beide
   * domeinen dezelfde term op hetzelfde pad voeren.
   */
  {
    path: "ozonbehandeling",
    lazy: async () => ({ Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/OzonbehandelingPage.tsx"), import("./assets/OzonbehandelingPage-DVvEOUkO.js"))).default })
  },
  /*
   * Ontschimmeling — het handwerk vóór de ozonbehandeling. Eigen URL omdat
   * het een eigen zoekvraag is; de twee pagina's linken naar elkaar en
   * delen hun schil, niet hun copy.
   */
  {
    path: "ontschimmeling",
    lazy: async () => ({ Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/OntschimmelingPage.tsx"), import("./assets/OntschimmelingPage-D2JXhs-t.js"))).default })
  },
  {
    path: "machines",
    lazy: async () => ({ Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/MachinesPage.tsx"), import("./assets/MachinesPage-C95w-XT4.js"))).default })
  },
  {
    path: "prijzen",
    lazy: async () => ({ Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/PrijzenPage.tsx"), import("./assets/PrijzenPage-CvH4tYvI.js"))).default })
  },
  /*
   * Regiopagina's: /bouwdroger-huren-antwerpen enzovoort. Vijf vaste
   * routes naar één sjabloon, want een parameter in react-router moet een
   * heel segment zijn — `bouwdroger-huren-:regio` bestaat niet. De lijst
   * komt uit regio-slugs.ts (een paar regels); de teksten zelf laadt de
   * pagina pas als iemand ze opent.
   */
  ...REGIO_ROUTES.map(
    (regio) => ({
      path: regio.path.slice(1),
      lazy: async () => ({ Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/RegioPage.tsx"), import("./assets/RegioPage-CSF0l7O_.js"))).default }),
      /*
        De Franse en Engelse versie laden een eigen pagina, met alleen de
        tekst van deze ene provincie in die taal; zie `vertaaldeRoutes`
        hieronder.
      */
      handle: {
        perTaal: {
          fr: async () => ({
            Component: await (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/RegioPageFr.tsx"), import("./assets/RegioPageFr-BB3CN98a.js"))).laadRegioPaginaFr(regio.slug)
          }),
          en: async () => ({
            Component: await (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/RegioPageEn.tsx"), import("./assets/RegioPageEn-FHfuStMV.js"))).laadRegioPaginaEn(regio.slug)
          })
        }
      }
    })
  ),
  /*
    De gemeentepagina's, op dezelfde manier: vaste routes in plaats van een
    parameter, want `bouwdroger-huren-:gemeente` kan React Router niet —
    een parameter moet een heel segment zijn. `gemeente-slugs.ts` is net als
    `regio-slugs.ts` een paar regels zonder proza; de teksten (`gemeenten.ts`)
    laadt de pagina pas als iemand ze opent.
  */
  ...GEMEENTE_ROUTES.map(
    (gemeente2) => ({
      path: gemeente2.path.slice(1),
      lazy: async () => ({ Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/GemeentePage.tsx"), import("./assets/GemeentePage-yMXRdxcL.js"))).default }),
      /* Idem: de Franse en Engelse pagina laden de teksten van hun eigen provincie. */
      handle: {
        perTaal: {
          fr: async () => ({
            Component: await (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/GemeentePageFr.tsx"), import("./assets/GemeentePageFr-DxilrwS_.js"))).laadGemeentePaginaFr(
              gemeente2.slug
            )
          }),
          en: async () => ({
            Component: await (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/GemeentePageEn.tsx"), import("./assets/GemeentePageEn-aT4mXga2.js"))).laadGemeentePaginaEn(
              gemeente2.slug
            )
          })
        }
      }
    })
  ),
  /* Verhuurplatform — de conversie-funnel uit de Claude Design handoff */
  {
    path: "verhuur/calculator",
    lazy: async () => ({
      Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/verhuur/VerhuurCalculatorPage.tsx"), import("./assets/VerhuurCalculatorPage-BV-csWPc.js"))).default
    })
  },
  {
    path: "verhuur/simulator",
    lazy: async () => ({
      Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/verhuur/VerhuurSimulatorPage.tsx"), import("./assets/VerhuurSimulatorPage-BwFG6J4z.js").then((n) => n.l))).default
    })
  },
  {
    path: "verhuur/pakket",
    lazy: async () => ({
      Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/verhuur/VerhuurPakketPage.tsx"), import("./assets/VerhuurPakketPage-DsaKaeD1.js"))).default
    })
  },
  {
    path: "verhuur/afhalen",
    lazy: async () => ({
      Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/verhuur/VerhuurAfhalenPage.tsx"), import("./assets/VerhuurAfhalenPage-BQQoGJyG.js"))).default
    })
  },
  {
    path: "verhuur/boeking",
    lazy: async () => ({
      Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/verhuur/VerhuurBoekingPage.tsx"), import("./assets/VerhuurBoekingPage-CCwsb4pv.js"))).default
    })
  },
  {
    // De QR die de technieker bij de installatie toont; staat op noindex.
    path: "verhuur/saldo",
    lazy: async () => ({
      Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/verhuur/VerhuurSaldoPage.tsx"), import("./assets/VerhuurSaldoPage-BRv34Eu9.js"))).default
    })
  },
  {
    // Terugkeer van Stripe na het saldo van een portaal-order
    // (`api/saldo-order.ts`); beide op noindex.
    path: "verhuur/saldo/betaald",
    lazy: async () => ({
      Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/verhuur/VerhuurSaldoUitkomstPage.tsx"), import("./assets/VerhuurSaldoUitkomstPage-Dhat6WAI.js"))).SaldoBetaaldPage
    })
  },
  {
    path: "verhuur/saldo/niet-betaald",
    lazy: async () => ({
      Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/verhuur/VerhuurSaldoUitkomstPage.tsx"), import("./assets/VerhuurSaldoUitkomstPage-Dhat6WAI.js"))).SaldoNietBetaaldPage
    })
  },
  {
    // Alleen bereikbaar via de link in de verlengmail; staat op noindex.
    path: "verhuur/verlengen",
    lazy: async () => ({
      Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/verhuur/VerhuurVerlengenPage.tsx"), import("./assets/VerhuurVerlengenPage-ugQhyNtw.js"))).default
    })
  },
  {
    path: "verhuur/toestel/:toestel",
    lazy: async () => ({
      Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/verhuur/VerhuurToestelPage.tsx"), import("./assets/VerhuurToestelPage-7SLwSqpP.js"))).default
    }),
    getStaticPaths: async () => {
      const { PRODUCT_ORDER, toestelPad } = await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/verhuur.ts"), import("./assets/verhuur-CgnDb-wO.js").then((n) => n.v));
      return PRODUCT_ORDER.map(toestelPad);
    }
  },
  {
    /*
      Toebehoren staan náást de toestellen en niet eronder: de condenspomp
      komt niet uit `TARIEVEN.products` maar hangt aan de dagprijs die het
      portaal bij de pakketopties publiceert. Daarom een eigen pad en geen
      negende slug onder /verhuur/toestel.
    */
    path: "verhuur/toebehoren/condenspomp",
    lazy: async () => ({
      Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/verhuur/ToebehorenCondenspompPage.tsx"), import("./assets/ToebehorenCondenspompPage-CFVoicxO.js"))).default
    })
  },
  /*
   * Twee routes naar dezelfde pagina, met een verschillende taak.
   *
   * `/404` bestaat alleen om bij de build `dist/404.html` op te leveren.
   * Vercel serveert dat bestand voor elke URL die niet bestaat, mét status
   * 404. Zonder dat bestand zou de host op een onbekende URL de homepage
   * met status 200 teruggeven — een soft 404, en dus een indexeerbare
   * kopie van de homepage op elke typfout en elke kapotte backlink.
   *
   * `*` vangt hetzelfde geval op nadat de app in de browser draait, want
   * dan is er geen server meer die kan antwoorden.
   */
  /*
   * Een route die met opzet crasht, zodat de foutpagina te bekijken is
   * zonder er eerst een echte bug voor te moeten maken. Staat achter
   * `import.meta.env.DEV`: bij de build is die constante `false`, dus de
   * hele tak valt weg en er komt geen `/__fout` in dist terecht.
   */
  /*
   * Twee werkdocumenten, ook alleen onder `npm run dev`: een copydeck voor
   * de volledige site (/copy-v2) en een conceptversie van de
   * Drooggarantie (/drooggarantie-v2). Ze stonden tot oktober 2026 publiek
   * met alleen noindex; een copydeck vol voorgestelde teksten hoort niet
   * op het echte domein, en geen enkele pagina linkte ernaar.
   */
  ...[],
  {
    path: "404",
    lazy: async () => ({ Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/NotFound.tsx"), import("./assets/NotFound-DUR1yxjm.js"))).default })
  },
  {
    path: "*",
    lazy: async () => ({ Component: (await (globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/NotFound.tsx"), import("./assets/NotFound-DUR1yxjm.js"))).default })
  }
];
function vertaaldeRoutes(nl) {
  const uit = [];
  for (const taal of ACTIEVE_TALEN) {
    if (taal === "nl") continue;
    for (const r of nl) {
      if (r.index) {
        uit.push({ ...r, index: void 0, path: taal });
        continue;
      }
      const pad = r.path;
      if (!pad || pad === "*" || pad === "404" || pad.startsWith("__") || pad.includes("ontwerp") || pad.endsWith("-v2")) continue;
      const param = pad.indexOf("/:");
      if (param >= 0) {
        const map = MAPPEN.find((m) => m.nl === `/${pad.slice(0, param + 1)}`);
        if (!map) continue;
        const origineel = r.getStaticPaths;
        uit.push({
          ...r,
          path: `${taal}${map[taal]}${pad.slice(param + 1)}`,
          getStaticPaths: origineel ? async () => (await origineel()).map((p) => vertaalPad(p, taal)).filter((p) => Boolean(p)) : void 0
        });
        continue;
      }
      const doel = vertaalPad(`/${pad}`, taal);
      if (!doel) continue;
      const eigen = r.handle?.perTaal?.[taal];
      uit.push({ ...r, path: doel.slice(1), ...eigen ? { lazy: eigen, handle: void 0 } : {} });
    }
  }
  return uit;
}
const routes = [
  {
    path: "/",
    element: /* @__PURE__ */ jsx(Layout, {}),
    entry: "src/Layout.tsx",
    /*
     * Vangt elke fout in een onderliggende route op. Zonder dit toont
     * react-router zijn eigen scherm met een stacktrace en "Hey developer 👋"
     * — aan een klant midden in een boeking.
     *
     * Bewust niet lazy: als de app al struikelt, mag het vangnet niet
     * afhangen van een chunk die dan nog moet binnenkomen.
     */
    errorElement: /* @__PURE__ */ jsx(ErrorPage, {}),
    children: [...NL_ROUTES, ...vertaaldeRoutes(NL_ROUTES)]
  }
];
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/main.tsx");
const createRoot = ViteReactSSG({ routes });
export {
  ACTIEVE_TALEN as A,
  GEMEENTE_ROUTES as B,
  kruimelIn as C,
  plaatsenVanRoute as D,
  GEMEENTE_BY_PATH as G,
  HTML_LANG as H,
  NUMBER_LOCALE as N,
  OG_LOCALE as O,
  REGIO_ROUTES as R,
  TOESTEL_SLUG_VERTAALD as T,
  useLokaalPad as a,
  useTaal as b,
  useToonBedrag as c,
  createRoot,
  useKlant as d,
  useVoorkeur as e,
  bewaarVoorkeur as f,
  gemeenteVanPlaats as g,
  formatEuro as h,
  plaatsFr as i,
  alternatieven as j,
  kaartVoor as k,
  lokaalPad as l,
  REGIO_BY_PATH as m,
  naarNl as n,
  kies as o,
  prefix as p,
  gemeentenInRegio as q,
  plaatsIn as r,
  gemeenteNaamIn as s,
  taalUitPad as t,
  useCopy as u,
  vertaalPad as v,
  wisselPad as w,
  regioNaamIn as x,
  plaatsEn as y,
  regioInEn as z
};
