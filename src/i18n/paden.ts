import { ACTIEVE_TALEN, prefix, taalUitPad, zonderPrefix, type Taal } from "./taal.js";

/**
 * Welke URL een pagina in elke taal heeft — op één plek.
 *
 * De router (`App.tsx`), de taalwissel, `hreflang` in `PageMeta` en de sitemap
 * leiden zich hieruit af. Een pagina toevoegen = hier een regel bij; zonder regel
 * bestaat de pagina alleen in het Nederlands, en springt de taalwissel daar naar
 * de homepage van de gekozen taal in plaats van naar een 404.
 *
 * De slugs zijn vertaald omdat het zoekwoord in de URL meetelt: een Waal zoekt
 * "séchage chape", niet "chape drogen". Ze zijn — net als de toestelslugs in
 * `data/verhuur.ts` — **bevroren** zodra ze live staan: een URL die verspringt
 * verliest zijn posities. Hernoemen kan alleen met een redirect in vercel.json.
 *
 * Staat in de entry-chunk (de header leest hem), dus alleen paden, geen proza.
 */

type Vertaling = { fr: string; en: string };

/** Nederlands pad (zonder prefix) → pad in het Frans en Engels (ook zonder prefix). */
export const STATISCH: Record<string, Vertaling> = {
  "/waterschade-luchtkussen-techniek": { fr: "/degats-des-eaux/sechage-sous-film", en: "/water-damage/air-cushion-drying" },
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
    en: "/rental/accessories/condensate-pump",
  },

  /* Uitleg en vertrouwen */
  "/hoe-drogen-werkt": { fr: "/comment-fonctionne-le-sechage", en: "/how-drying-works" },
  "/waarom-bouwdroging": { fr: "/pourquoi-secher-son-chantier", en: "/why-construction-drying" },
  "/drooggarantie": { fr: "/garantie-sechage", en: "/drying-guarantee" },
  "/gids": { fr: "/guide", en: "/guide" },
  "/gids/hoe-lang-moet-chape-drogen": { fr: "/guide/temps-de-sechage-chape", en: "/guide/screed-drying-time" },
  "/gids/hoe-lang-moet-pleisterwerk-drogen": {
    fr: "/guide/temps-de-sechage-plafonnage",
    en: "/guide/plaster-drying-time",
  },
  "/gids/condensdroger-of-adsorptiedroger": {
    fr: "/guide/deshumidificateur-condensation-ou-adsorption",
    en: "/guide/condensation-or-desiccant-dehumidifier",
  },
  "/gids/natuurlijk-drogen-of-bouwdroger": {
    fr: "/guide/sechage-naturel-ou-deshumidificateur",
    en: "/guide/natural-drying-or-dehumidifier",
  },
  "/gids/stroomverbruik-bouwdroger": {
    fr: "/guide/consommation-electrique-deshumidificateur",
    en: "/guide/dehumidifier-power-consumption",
  },
  "/realisaties": { fr: "/realisations", en: "/projects" },

  /* Bedrijf en service */
  "/over-ons": { fr: "/a-propos", en: "/about-us" },
  "/contact": { fr: "/contact", en: "/contact" },
  "/klantservice": { fr: "/service-client", en: "/customer-service" },
  "/sitemap": { fr: "/plan-du-site", en: "/sitemap" },
  "/privacy": { fr: "/confidentialite", en: "/privacy" },
  "/algemene-voorwaarden": { fr: "/conditions-generales", en: "/terms-and-conditions" },
};

/**
 * Pagina's onder een vaste map met een variabel laatste segment. Het segment
 * zelf blijft gelijk (pakket-id's, realisatie-slugs, product-id's), behalve
 * waar `slug` het vertaalt.
 */
interface MapRegel {
  nl: string;
  fr: string;
  en: string;
  /** Vertaalt het laatste segment; ontbreekt hij, dan blijft het gelijk. */
  slug?: Record<string, Vertaling>;
}

/**
 * Toestelslugs per taal. Bevroren zoals `TOESTEL_SLUG` in data/verhuur.ts:
 * de sleutel (`ttk350`) blijft overal elders staan, alleen de URL vertaalt.
 */
export const TOESTEL_SLUG_VERTAALD: Record<string, Vertaling> = {
  "bouwdroger-50-liter": { fr: "deshumidificateur-chantier-50-litres", en: "construction-dehumidifier-50-litre" },
  "bouwdroger-70-liter": { fr: "deshumidificateur-chantier-70-litres", en: "construction-dehumidifier-70-litre" },
  "bouwdroger-110-liter": { fr: "deshumidificateur-chantier-110-litres", en: "construction-dehumidifier-110-litre" },
  adsorptiedroger: { fr: "deshumidificateur-adsorption", en: "desiccant-dehumidifier" },
  "axiaalventilator-4500-m3": { fr: "ventilateur-axial-4500-m3", en: "axial-fan-4500-m3" },
  "radiaalventilator-2250-m3": { fr: "ventilateur-radial-2250-m3", en: "radial-fan-2250-m3" },
  "bouwkachel-30-kw": { fr: "chauffage-de-chantier-30-kw", en: "site-heater-30-kw" },
  "bouwkachel-20-kw": { fr: "chauffage-de-chantier-20-kw", en: "site-heater-20-kw" },
};

/**
 * Realisatieslugs per taal. Tot 19-11-2026 bleef het laatste segment Nederlands
 * (/fr/realisations/pleisterwerk-drogen-berchem): een Franstalige zoeker ziet
 * die URL in Google en leest er niets in. De oude URL's verwijzen in
 * `vercel.json` permanent door. De slug in de data blijft de Nederlandse.
 */
export const REALISATIE_SLUG_VERTAALD: Record<string, Vertaling> = {
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
  "bouwdroging-winkelpand": { fr: "sechage-chantier-commerce", en: "construction-drying-retail-unit" },
};

export const MAPPEN: MapRegel[] = [
  { nl: "/verhuur/toestel/", fr: "/location/appareil/", en: "/rental/unit/", slug: TOESTEL_SLUG_VERTAALD },
  { nl: "/levering/pakket/", fr: "/livraison/pack/", en: "/delivery/package/" },
  { nl: "/realisaties/", fr: "/realisations/", en: "/projects/", slug: REALISATIE_SLUG_VERTAALD },
  { nl: "/product/", fr: "/produit/", en: "/product/" },
];

/**
 * Losse paden die niet in een vaste tabel passen — de provincie- en
 * gemeentepagina's (`bouwdroger-huren-mechelen`). Hun vertaling staat bij hun
 * eigen slugbestand en wordt daar geregistreerd, zodat deze module er niet van
 * hoeft te weten.
 */
const EXTRA = new Map<string, Vertaling>();
export function registreerPaden(paden: Record<string, Vertaling>): void {
  for (const [nl, v] of Object.entries(paden)) EXTRA.set(nl, v);
  omgekeerd = null;
}

/** Omgekeerde opzoeking, lui opgebouwd. */
let omgekeerd: Map<string, string> | null = null;
function omgekeerdeTabel(): Map<string, string> {
  if (omgekeerd) return omgekeerd;
  omgekeerd = new Map();
  for (const [nl, v] of [...Object.entries(STATISCH), ...EXTRA.entries()]) {
    if (v.fr) omgekeerd.set(`fr:${v.fr}`, nl);
    if (v.en) omgekeerd.set(`en:${v.en}`, nl);
  }
  return omgekeerd;
}

function zonderSlash(pad: string): string {
  return pad.length > 1 && pad.endsWith("/") ? pad.slice(0, -1) : pad;
}

/**
 * Het pad van een Nederlandse pagina in een andere taal, mét prefix.
 * `null` als de pagina in die taal (nog) niet bestaat.
 */
export function vertaalPad(nlPad: string, taal: Taal): string | null {
  if (!ACTIEVE_TALEN.includes(taal)) return null;
  const [basis, rest = ""] = splitsQuery(zonderSlash(nlPad));
  if (taal === "nl") return basis + rest;
  const vast = STATISCH[basis] ?? EXTRA.get(basis);
  /*
    Een leeg pad betekent: in die taal (nog) niet. Een gemeente met een Franse
    maar zonder Engelse tekst registreert `en: ""`; dat gaf `/en` terug, en
    App.tsx maakte er een tweede Engelse homepage van (19-11-2026).
  */
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

/** Het Nederlandse pad achter een pad in eender welke taal. `null` als onbekend. */
export function naarNl(pad: string): string | null {
  const taal = taalUitPad(pad);
  const [kaal, rest = ""] = splitsQuery(zonderSlash(zonderPrefix(pad)));
  if (taal === "nl") return kaal + rest;
  const nl = omgekeerdeTabel().get(`${taal}:${kaal}`);
  if (nl) return nl + rest;
  for (const m of MAPPEN) {
    const p = m[taal];
    if (kaal.startsWith(p) && kaal.length > p.length) {
      const seg = kaal.slice(p.length);
      const nlSeg = m.slug ? Object.keys(m.slug).find((k) => m.slug![k][taal] === seg) : seg;
      if (!nlSeg) return null;
      return m.nl + nlSeg + rest;
    }
  }
  return null;
}

/**
 * Waar de taalwissel heen gaat: dezelfde pagina in de andere taal, of de
 * homepage van die taal als de pagina daar niet bestaat. Nooit een 404.
 */
export function wisselPad(huidigPad: string, doel: Taal): string {
  const nl = naarNl(huidigPad);
  return (nl && vertaalPad(nl, doel)) || plak(doel, "/");
}

/** Alle talen waarin een pagina bestaat, voor `hreflang`. */
export function alternatieven(huidigPad: string): Partial<Record<Taal, string>> {
  const nl = naarNl(huidigPad);
  if (!nl) return {};
  const uit: Partial<Record<Taal, string>> = {};
  for (const t of ACTIEVE_TALEN) {
    const p = vertaalPad(nl, t);
    if (p) uit[t] = p;
  }
  return uit;
}

function plak(taal: Taal, pad: string): string {
  if (taal === "nl") return pad;
  return pad === "/" ? `${prefix(taal)}` : `${prefix(taal)}${pad}`;
}

function splitsQuery(pad: string): [string, string?] {
  const i = pad.search(/[?#]/);
  return i < 0 ? [pad] : [pad.slice(0, i), pad.slice(i)];
}
