import { P as PRODUCTS, t as toestelPad } from "./verhuur-CgnDb-wO.js";
import { p as productInTaal } from "./verhuur.fr-CrIPL5Eo.js";
import { H as HEADQUARTERS, C as CONTACT, a as SAME_AS, b as SITE_LANG, c as SITE_URL, S as SITE_NAME, d as SERVICE_AREA, e as absoluteUrl, O as ORGANIZATION_IMAGE, f as ORGANIZATION_LOGO } from "./PageMeta-BXulEWcY.js";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/tarieflijst.ts");
const PUBLIC_KEYS = [
  "ttk170",
  "ttk350",
  "ttk650",
  "revolution",
  "ttv4500",
  "radiaal2250",
  "teddh30",
  "teddh20"
].filter((key) => PRODUCTS[key]);
const DRYER_KEYS = ["ttk170", "ttk350", "ttk650"].filter((key) => PRODUCTS[key]);
const RENTAL_WEEKS = [1, 2, 4];
function toTarief(key) {
  const p = PRODUCTS[key];
  const spec = (label) => p.key.find(([l]) => l === label)?.[1] ?? "0";
  return {
    key,
    name: p.name,
    short: p.short,
    type: p.type,
    summary: p.sum,
    badge: p.badge,
    perDay: p.day,
    litersPerDay: Number(spec("Vochtafvoer").replace(/\s/g, "")),
    volume: Number(spec("Bereik").replace(/\s/g, "")),
    path: toestelPad(key)
  };
}
const TARIEVEN_PUBLIEK = PUBLIC_KEYS.map(toTarief);
const DROGERS = DRYER_KEYS.map(toTarief);
function priceForWeeks(t, weeks) {
  return t.perDay * weeks * 7;
}
function euro(amount) {
  return `€ ${amount.toLocaleString("nl-BE")}`;
}
const DESC_FALLBACK = {
  ttk170: "Eén kamer, een appartement of een kleine renovatie",
  ttk350: "Een standaard gezinswoning of grote renovatie",
  ttk650: "Grote werven, ruime kelders en acute waterschade"
};
const DROGER_KAARTEN = DROGERS.map((t) => ({
  key: t.key,
  name: t.short,
  volume: `Tot ${t.volume} m³ · ${t.litersPerDay} L/dag`,
  desc: DESC_FALLBACK[t.key] ?? t.summary,
  badge: t.badge || null,
  highlight: t.badge === "Meest gehuurd",
  path: t.path,
  weekPrice: String(priceForWeeks(t, 1)),
  tiers: RENTAL_WEEKS.map((w) => ({
    label: `${w} ${w === 1 ? "week" : "weken"}`,
    price: String(priceForWeeks(t, w))
  }))
}));
function tariefInTaal(t, taal) {
  if (taal === "nl") return t;
  const p = productInTaal(t.key, taal);
  return { ...t, name: p.name, type: p.type, summary: p.sum, badge: p.badge };
}
function drogersInTaal(taal) {
  return taal === "nl" ? DROGERS : DROGERS.map((t) => tariefInTaal(t, taal));
}
const DAY_PRICE_MIN = Math.min(...TARIEVEN_PUBLIEK.map((t) => t.perDay));
const DAY_PRICE_MAX = Math.max(...TARIEVEN_PUBLIEK.map((t) => t.perDay));
const PRICE_RANGE = `€${DAY_PRICE_MIN}–€${DAY_PRICE_MAX} per dag`;
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/lib/schema.ts");
const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
function withOrganization(node) {
  const { "@context": _context, ...rest } = node;
  const { "@context": _orgContext, ...org } = organizationSchema();
  return { "@context": "https://schema.org", "@graph": [rest, org] };
}
function organizationSchema({ withRating = false } = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    url: SITE_URL,
    description: "Verhuur van professionele bouwdrogers, ventilatoren en bouwkachels voor nieuwbouw, renovatie en waterschade in Vlaanderen, inclusief levering, installatie en vochtmeting.",
    /*
      `image` is bij Google de voorwaarde om als LocalBusiness überhaupt in
      aanmerking te komen voor een rijke weergave; `logo` is wat het knowledge
      panel toont. Beide ontbraken.
    */
    image: [absoluteUrl(ORGANIZATION_IMAGE)],
    logo: absoluteUrl(ORGANIZATION_LOGO),
    telephone: CONTACT.phoneE164,
    email: CONTACT.email,
    priceRange: PRICE_RANGE,
    currenciesAccepted: "EUR",
    paymentAccepted: "Bancontact, Kredietkaart, Overschrijving",
    knowsLanguage: [SITE_LANG],
    /*
      Het adres van de organisatie is de zetel, niet het magazijn. De drie
      zustersites voeren Ballaarstraat 99; stond hier Aartselaar, dan had
      hetzelfde bedrijf op vier domeinen twee verschillende adressen en kon
      Google ze niet als één entiteit lezen. Het magazijn blijft bestaan als
      `location`: dat is waar een klant afhaalt en waar de openingsuren gelden.
    */
    address: {
      "@type": "PostalAddress",
      streetAddress: HEADQUARTERS.street,
      postalCode: HEADQUARTERS.postalCode,
      addressLocality: HEADQUARTERS.city,
      addressRegion: HEADQUARTERS.region,
      addressCountry: HEADQUARTERS.country
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: HEADQUARTERS.latitude,
      longitude: HEADQUARTERS.longitude
    },
    location: depotSchema(),
    openingHoursSpecification: OPENING_HOURS,
    areaServed: SERVICE_AREA.map((name) => ({ "@type": "AdministrativeArea", name })),
    /*
      Hetzelfde cijfer dat in de hero en de statistiekbalk staat. Google toont
      een zelfopgegeven beoordeling van een lokaal bedrijf niet meer als sterren
      in de zoekresultaten, maar AI-antwoordmachines citeren ze wél — en die
      lezen liever gestructureerde data dan een sterrenrij in HTML.
    */
    ...{},
    sameAs: [...SAME_AS],
    parentOrganization: {
      "@type": "Organization",
      name: HEADQUARTERS.name,
      url: HEADQUARTERS.url,
      telephone: CONTACT.phoneE164,
      address: {
        "@type": "PostalAddress",
        streetAddress: HEADQUARTERS.street,
        postalCode: HEADQUARTERS.postalCode,
        addressLocality: HEADQUARTERS.city,
        addressCountry: HEADQUARTERS.country
      }
    }
  };
}
const OPENING_HOURS = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00"
  }
];
function depotSchema() {
  return {
    "@type": "Place",
    name: "Magazijn en afhaalpunt Vernast Bouwdrogers",
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.street,
      postalCode: CONTACT.postalCode,
      addressLocality: CONTACT.city,
      addressRegion: CONTACT.region,
      addressCountry: CONTACT.country
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: CONTACT.latitude,
      longitude: CONTACT.longitude
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${CONTACT.latitude},${CONTACT.longitude}`,
    openingHoursSpecification: OPENING_HOURS
  };
}
function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: "nl-BE",
    publisher: { "@id": ORGANIZATION_ID }
  };
}
function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}
function productSchema(p) {
  return withOrganization({
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.description,
    image: absoluteUrl(p.image),
    url: absoluteUrl(p.path),
    ...p.category ? { category: p.category } : {},
    brand: { "@type": "Brand", name: SITE_NAME },
    ...p.specs?.length ? {
      additionalProperty: p.specs.map(([name, value]) => ({
        "@type": "PropertyValue",
        name,
        value
      }))
    } : {},
    offers: {
      "@type": "Offer",
      url: absoluteUrl(p.path),
      /*
        `price` staat hier náást `priceSpecification`. De specificatie zegt wat
        het cijfer betekent (per dag, huur), maar Google's validator verwacht
        het kale bedrag op de Offer zelf; zonder dat valt de prijs uit het
        zoekresultaat weg.
      */
      price: p.pricePerDay,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      businessFunction: "https://purl.org/goodrelations/v1#LeaseOut",
      seller: { "@id": ORGANIZATION_ID },
      areaServed: SERVICE_AREA.map((name) => ({ "@type": "AdministrativeArea", name })),
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: p.pricePerDay,
        priceCurrency: "EUR",
        unitCode: "DAY",
        referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "DAY" }
      }
    }
  });
}
function faqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
  };
}
function itemListSchema(name, items) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: absoluteUrl(item.path)
    }))
  };
}
function offerCatalogSchema(name, items) {
  return withOrganization({
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      "@type": "Offer",
      position: i + 1,
      name: item.name,
      description: item.description,
      url: absoluteUrl(item.path),
      price: item.pricePerDay,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      businessFunction: "https://purl.org/goodrelations/v1#LeaseOut",
      seller: { "@id": ORGANIZATION_ID },
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: item.pricePerDay,
        priceCurrency: "EUR",
        unitCode: "DAY",
        valueAddedTaxIncluded: false,
        referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "DAY" }
      }
    }))
  });
}
function serviceSchema(s) {
  return withOrganization({
    "@type": "Service",
    name: s.name,
    description: s.description,
    serviceType: s.serviceType,
    url: absoluteUrl(s.path),
    provider: { "@id": ORGANIZATION_ID },
    areaServed: s.areaServed ?? SERVICE_AREA.map((name) => ({ "@type": "AdministrativeArea", name })),
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: absoluteUrl(s.path),
      servicePhone: CONTACT.phoneE164
    }
  });
}
function articleSchema(a) {
  return withOrganization({
    "@type": "Article",
    headline: a.headline,
    description: a.description,
    url: absoluteUrl(a.path),
    mainEntityOfPage: absoluteUrl(a.path),
    inLanguage: SITE_LANG,
    datePublished: a.datePublished,
    dateModified: a.dateModified ?? a.datePublished,
    image: absoluteUrl(a.image ?? ORGANIZATION_IMAGE),
    author: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID }
  });
}
export {
  DAY_PRICE_MIN as D,
  RENTAL_WEEKS as R,
  TARIEVEN_PUBLIEK as T,
  priceForWeeks as a,
  breadcrumbSchema as b,
  offerCatalogSchema as c,
  drogersInTaal as d,
  euro as e,
  faqSchema as f,
  DROGERS as g,
  articleSchema as h,
  itemListSchema as i,
  DROGER_KAARTEN as j,
  organizationSchema as o,
  productSchema as p,
  serviceSchema as s,
  tariefInTaal as t,
  websiteSchema as w
};
