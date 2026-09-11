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

/**
 * Waar het toestel staat: het magazijn en afhaalpunt in Aartselaar. Dit is wat
 * op elke pagina zichtbaar is (footer, contact, afhalen) en waar een klant
 * naartoe rijdt. De maatschappelijke zetel staat apart in `HEADQUARTERS`.
 */
export const CONTACT = {
  phone: "+32 3 689 90 65",
  /** E.164, voor `tel:`-links en schema.org. */
  phoneE164: "+3236899065",
  /**
   * Zoals het op het scherm staat. De internationale notatie hoort bij
   * schema.org en bij bezoekers van buiten België; in de balk en het menu
   * schrijft de site zelf het lokale nummer, en dat stond tot nu toe op elke
   * plek apart overgetypt.
   */
  phoneLocal: "03 689 90 65",
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
 * De maatschappelijke zetel — hetzelfde adres dat vernast.be, de vochtsite en
 * de schildersite in hun JSON-LD voeren, letter voor letter en met dezelfde
 * coördinaten. Tot 2026-09-11 stond op deze site enkel het magazijn in
 * Aartselaar als bedrijfsadres, terwijl de drie zustersites Ballaarstraat 99
 * voerden: vier domeinen, twee adressen, en Google die niet kon zien dat het
 * één bedrijf is. Nu is de zetel het adres van de organisatie en Aartselaar de
 * `location` (het depot) — beide waar, elk met zijn eigen rol.
 */
export const HEADQUARTERS = {
  name: "Vernast",
  url: "https://www.vernast.be/",
  street: "Ballaarstraat 99",
  postalCode: "2018",
  city: "Antwerpen",
  region: "Antwerpen",
  country: "BE",
  latitude: 51.2024,
  longitude: 4.4018,
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

/**
 * Wat Google en de AI-assistenten nodig hebben om deze host aan hetzelfde
 * bedrijf te koppelen als de drie andere.
 *
 * Alleen de zustersites volstaat niet: dan staat deze site in de grafiek als
 * een knoop die naar twee andere wijst en waar niets naar terugwijst. De
 * hoofdsite en de sociale profielen horen er ook in, en in hun canonieke vorm --
 * `https://www.vernast-vochtbestrijding.be/` stuurt een 308 naar de host zonder
 * www, en een sameAs die eerst omleidt is een zwakker signaal dan een die direct
 * aankomt.
 *
 * Het Google-Maps-profiel van de andere drie staat hier bewust NIET bij: dat
 * profiel hoort bij Vernast Vochtbestrijding op de Ballaarstraat, en deze site
 * heeft nog geen eigen Google Business Profile. De zetel zelf staat sinds
 * 2026-09-11 wél in de schema (`HEADQUARTERS`), zodat het adres, het nummer en
 * de schrijfwijze op alle vier de domeinen gelijk zijn.
 */
export const SAME_AS = [
  "https://www.vernast.be/",
  "https://vernast-vochtbestrijding.be/",
  "https://www.vernast-schilderwerken.be/",
  "https://www.linkedin.com/company/vernast",
  "https://www.facebook.com/people/Vernastbe/61559074829852/",
  "https://www.instagram.com/vernast.be/",
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
