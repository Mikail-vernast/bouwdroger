/**
 * Eén bron van waarheid voor alles wat zoekmachines en AI-antwoordmachines over
 * dit bedrijf moeten weten: canonieke URL, NAP-gegevens, openingsuren en
 * servicegebied. Canonicals, og:url, sitemap.xml en de JSON-LD leiden hier
 * allemaal uit af.
 *
 * Het definitieve domein is nog niet gekocht. Zodra dat er is: zet
 * `VITE_SITE_URL` in Vercel (`vercel env add VITE_SITE_URL`) en alles — meta,
 * sitemap, schema — verhuist mee. Nergens anders staat een hardcoded domein.
 */

/** Zonder trailing slash, zodat `${SITE_URL}${pad}` altijd klopt. */
export const SITE_URL = (
  import.meta.env.VITE_SITE_URL || "https://bouwdroger.vercel.app"
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

/**
 * De goedkoopste en duurste dagprijs in het gamma, in het formaat dat
 * schema.org voor `priceRange` verwacht. Dit is wat een AI-assistent citeert
 * wanneer iemand vraagt "wat kost dat ongeveer".
 */
export const PRICE_RANGE = "€9–€34 per dag";

/** Waar wij leveren — voedt `areaServed` in de LocalBusiness-schema. */
export const SERVICE_AREA = [
  "Antwerpen",
  "Vlaams-Brabant",
  "Oost-Vlaanderen",
  "West-Vlaanderen",
  "Limburg",
] as const;

/**
 * De Google-beoordeling zoals ze in de hero en de statistiekbalk staat.
 *
 * Staat hier omdat drie plekken hetzelfde cijfer moeten tonen: de hero, de
 * statistiekbalk en `aggregateRating` in de schema. Zodra die uit elkaar lopen
 * claimt de gestructureerde data iets anders dan de pagina, en dat is precies
 * wat Google als misleidend aanmerkt. Bij een nieuwe telling: enkel hier.
 */
export const REVIEWS = {
  ratingValue: 4.8,
  reviewCount: 412,
  /** Zoals het in lopende tekst verschijnt — Belgisch decimaalteken. */
  display: "4,8",
  best: 5,
} as const;

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
