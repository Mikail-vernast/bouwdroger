/**
 * Eén bron van waarheid voor alles wat zoekmachines en AI-antwoordmachines over
 * dit bedrijf moeten weten: canonieke URL, NAP-gegevens, openingsuren en
 * servicegebied. Canonicals, og:url, sitemap.xml en de JSON-LD leiden hier
 * allemaal uit af.
 *
 * Het domein zit in `VITE_SITE_URL` in Vercel (`vercel env add VITE_SITE_URL`),
 * zodat meta, sitemap en schema in één keer meeverhuizen. De fallback hieronder
 * is het domein zoals het nu draait; nergens anders staat een hardcoded domein.
 */

/** Zonder trailing slash, zodat `${SITE_URL}${pad}` altijd klopt. */
export const SITE_URL = (
  import.meta.env.VITE_SITE_URL || "https://vernast-bouwdrogers.be"
).replace(/\/$/, "");

export const SITE_NAME = "Vernast Bouwdrogers";
export const SITE_LOCALE = "nl_BE";
export const SITE_LANG = "nl-BE";

/**
 * Standaard deelafbeelding; per pagina te overschrijven.
 *
 * 1200×630 — de verhouding waar Facebook, LinkedIn, WhatsApp en X allemaal op
 * uitsnijden. Een bredere bronafbeelding levert een preview op waar de kop van
 * de mensen afgesneden is.
 */
export const DEFAULT_OG_IMAGE = "/design/og-default.png";
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

export const CONTACT = {
  phone: "+32 3 689 90 65",
  /** E.164, voor `tel:`-links en schema.org. */
  phoneE164: "+3236899065",
  email: "info@vernast-verhuur.be",
  street: "Boomsesteenweg 12, Unit 11",
  postalCode: "2630",
  city: "Aartselaar",
  region: "Antwerpen",
  country: "BE",
  /** Openingsuren zoals ze op elke pagina in de topbalk staan. */
  openingHours: "Mo-Fr 08:00-17:00",
  /**
   * Coördinaten van het magazijn (OpenStreetMap, gebouw Boomsesteenweg 12).
   *
   * Zonder `geo` moet Google het adres zelf geolokaliseren, en "Boomsesteenweg"
   * loopt door vier gemeenten. Voor een bedrijf dat het van "bouwdroger huren
   * in de buurt" moet hebben, is dat het verschil tussen wel en niet in de
   * lokale resultaten staan.
   */
  latitude: 51.13598,
  longitude: 4.37512,
} as const;

/**
 * Logo en gevelbeeld voor `Organization` / `LocalBusiness`.
 *
 * Google vraagt bij een LocalBusiness om minstens één `image`; zonder dat komt
 * het bedrijf niet in aanmerking voor de rijke weergave. Het logo hoort apart
 * omdat het knowledge panel dáár naar kijkt.
 */
export const ORGANIZATION_LOGO = "/vernast/logo-horizontal-black.webp";
export const ORGANIZATION_IMAGE = "/vernast/lineup-dryers.webp";

/*
 * `PRICE_RANGE` staat bewust niet meer hier maar in `src/data/tarieflijst.ts`:
 * het is een afgeleide van de tarieven, geen bedrijfsgegeven. Als vaste tekst
 * liep het achter op het gamma.
 */

/** Waar wij leveren — voedt `areaServed` in de LocalBusiness-schema. */
export const SERVICE_AREA = [
  "Antwerpen",
  "Vlaams-Brabant",
  "Oost-Vlaanderen",
  "West-Vlaanderen",
  "Limburg",
] as const;

export interface ReviewSummary {
  ratingValue: number;
  reviewCount: number;
  /** Zoals het in lopende tekst verschijnt — Belgisch decimaalteken. */
  display: string;
  best: number;
}

/**
 * De Google-beoordeling in de hero, de statistiekbalk en `aggregateRating`.
 *
 * **Staat bewust uit.** Hier stond "4,8 uit 412 Google reviews", maar dat cijfer
 * was van geen enkele bron hard te maken: Trustindex bevestigt enkel "boven
 * 4,5" zonder aantal en Solvari toont 4,8 op **5** ervaringen. De 412 komt van
 * de groep — dezelfde 412 staat op de vochtbestrijdingssite — terwijl de schema
 * ze aan Vernast Bouwdrogers toeschreef, dat nog geen eigen Google Business
 * Profile heeft.
 *
 * Twee risico's, en geen van beide theoretisch: Google rekent een rating die
 * niet bij de gemarkeerde entiteit hoort af als spammy structured data, en een
 * niet hard te maken cijfer op een handelssite is een misleidende
 * handelspraktijk.
 *
 * Zodra het Google Business Profile er is: zet hier het werkelijke cijfer terug
 * en alles — hero, statistiekbalk, schema — komt vanzelf mee. Alle drie de
 * plekken guarden op `null`, dus dit is de enige regel die hoeft te wijzigen.
 */
export const REVIEWS: ReviewSummary | null = null;

/** Zustersites binnen Vernast Group; `sameAs` verankert de entiteit. */
export const SAME_AS = [
  "https://www.vernast-vochtbestrijding.be/",
  "https://www.vernast-schilderwerken.be/",
] as const;

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Canonieke URL van een route: zonder querystring, zonder trailing slash
 * (behalve de homepage). Query-parameters zoals `?size=180` zijn configuratie,
 * geen aparte pagina — die horen niet in de index.
 */
export function canonicalUrl(pathname: string): string {
  const clean = pathname.split("?")[0].split("#")[0];
  const trimmed = clean !== "/" ? clean.replace(/\/$/, "") : "/";
  return `${SITE_URL}${trimmed}`;
}
