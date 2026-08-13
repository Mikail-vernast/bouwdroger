/**
 * JSON-LD-bouwstenen (schema.org).
 *
 * Twee doelen. Voor klassieke zoekresultaten leveren deze blokken rich results
 * (prijzen, beoordelingen, kruimelpaden). Voor AI-antwoordmachines zijn ze
 * belangrijker: die halen hun feiten liever uit gestructureerde data dan uit
 * lopende tekst. Wat hier staat, moet dus ook echt op de pagina staan —
 * schema voor onzichtbare content is een overtreding, geen truc.
 */
import { PRICE_RANGE } from "../data/tarieflijst.js";
import {
  CONTACT,
  ORGANIZATION_IMAGE,
  ORGANIZATION_LOGO,
  REVIEWS,
  SAME_AS,
  SERVICE_AREA,
  SITE_LANG,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
} from "./site";

/** Vaste @id's, zodat losse blokken naar dezelfde entiteit verwijzen. */
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

type Json = Record<string, unknown>;

/**
 * Zet een blok in een `@graph` samen met het bedrijf zelf.
 *
 * `seller` op een Offer en `provider` op een Service verwezen met
 * `{"@id": ORGANIZATION_ID}` naar een knoop die op zestien geprerenderde
 * pagina's helemaal niet bestond — alle acht toestelpagina's en elke
 * dienstpagina. Een verwijzing naar niets: wie leest wie dit toestel verhuurt,
 * krijgt een URL terug in plaats van een bedrijf. Op de homepage viel het niet
 * op, want daar staat de organisatie wél in de head.
 *
 * Zonder beoordeling, want die hoort alleen op een pagina waar ze zichtbaar is
 * — zie `OrganizationOptions`.
 */
function withOrganization(node: Json): Json {
  const { "@context": _context, ...rest } = node;
  const { "@context": _orgContext, ...org } = organizationSchema();
  return { "@context": "https://schema.org", "@graph": [rest, org] };
}

export interface OrganizationOptions {
  /**
   * Neem `aggregateRating` mee.
   *
   * Standaard uit, en dat is geen voorzichtigheid maar beleid: Google eist dat
   * een beoordeling overeenkomt met wat er **op die pagina** te zien is. Het
   * cijfer stond mee op /contact, /klantservice en /over-ons, waar noch de
   * score noch één review zichtbaar is — precies het geval waarvoor de rich
   * results van een heel bedrijf onderdrukt worden. Alleen de homepage toont
   * "4,8" en "412" in de hero en de statistiekbalk, dus alleen die zet het aan.
   */
  withRating?: boolean;
}

/**
 * Het bedrijf zelf. `HomeAndConstructionBusiness` is het specifieke subtype van
 * LocalBusiness dat bij bouwdienstverlening hoort.
 */
export function organizationSchema({ withRating = false }: OrganizationOptions = {}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Verhuur van professionele bouwdrogers, ventilatoren en bouwkachels voor nieuwbouw, renovatie en waterschade in Vlaanderen, inclusief levering, installatie en vochtmeting.",
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
    geo: {
      "@type": "GeoCoordinates",
      latitude: CONTACT.latitude,
      longitude: CONTACT.longitude,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${CONTACT.latitude},${CONTACT.longitude}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.street,
      postalCode: CONTACT.postalCode,
      addressLocality: CONTACT.city,
      addressRegion: CONTACT.region,
      addressCountry: CONTACT.country,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    areaServed: SERVICE_AREA.map((name) => ({ "@type": "AdministrativeArea", name })),
    /*
      Hetzelfde cijfer dat in de hero en de statistiekbalk staat. Google toont
      een zelfopgegeven beoordeling van een lokaal bedrijf niet meer als sterren
      in de zoekresultaten, maar AI-antwoordmachines citeren ze wél — en die
      lezen liever gestructureerde data dan een sterrenrij in HTML.
    */
    ...(withRating
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: REVIEWS.ratingValue,
            reviewCount: REVIEWS.reviewCount,
            bestRating: REVIEWS.best,
          },
        }
      : {}),
    sameAs: [...SAME_AS],
    parentOrganization: { "@type": "Organization", name: "Vernast Group" },
  };
}

export function websiteSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: "nl-BE",
    publisher: { "@id": ORGANIZATION_ID },
  };
}

/** Kruimelpad; geef de items in volgorde, zonder de huidige pagina weg te laten. */
export function breadcrumbSchema(items: { name: string; path: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export interface ProductSchemaInput {
  name: string;
  description: string;
  image: string;
  path: string;
  /** Huurprijs per dag in euro. */
  pricePerDay: number;
  /** Bijvoorbeeld "Condensontvochtiger". */
  category?: string;
  /** Technische kenmerken die ook zichtbaar op de pagina staan. */
  specs?: [string, string][];
}

/**
 * Een toestel dat verhuurd wordt. De prijs is een dagprijs, uitgedrukt met
 * `UnitPriceSpecification` — dat is wat een huurtarief onderscheidt van een
 * verkoopprijs, en wat AI-antwoorden correct laat citeren.
 */
export function productSchema(p: ProductSchemaInput): Json {
  return withOrganization({
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.description,
    image: absoluteUrl(p.image),
    url: absoluteUrl(p.path),
    ...(p.category ? { category: p.category } : {}),
    brand: { "@type": "Brand", name: SITE_NAME },
    ...(p.specs?.length
      ? {
          additionalProperty: p.specs.map(([name, value]) => ({
            "@type": "PropertyValue",
            name,
            value,
          })),
        }
      : {}),
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
        referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "DAY" },
      },
    },
  });
}

/**
 * Alleen gebruiken als de vragen en antwoorden ook echt zichtbaar op de pagina
 * staan — dat is de voorwaarde die Google eraan stelt.
 */
export function faqSchema(items: { question: string; answer: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

/**
 * Een overzichtspagina die naar detailpagina's leidt (het gamma, de shop).
 * Voor een AI-antwoord is dit de kortste weg van "welke toestellen hebben
 * jullie" naar de pagina met het antwoord per toestel.
 */
export function itemListSchema(name: string, items: { name: string; path: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}

export interface OfferCatalogItem {
  name: string;
  description: string;
  path: string;
  /** Huurprijs per dag in euro. */
  pricePerDay: number;
}

/**
 * De volledige tarieflijst als machineleesbaar blok.
 *
 * "Wat kost een bouwdroger huren" is de vraag waarmee dit bedrijf gevonden
 * wordt, en het antwoord is een rij bedragen. In lopende tekst moet een
 * AI-assistent die uit een tabel puzzelen; hier staan ze eenduidig, elk met
 * hun eenheid (per dag) en hun toestel. Elk bedrag hier staat ook zichtbaar
 * op /prijzen — anders zou het schema iets anders beweren dan de pagina.
 */
export function offerCatalogSchema(name: string, items: OfferCatalogItem[]): Json {
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
        referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "DAY" },
      },
    })),
  });
}

export interface ServiceSchemaInput {
  name: string;
  description: string;
  path: string;
  /** Bijvoorbeeld "Bouwdroging" of "Waterschadeherstel". */
  serviceType: string;
}

/** Een dienst die op een landingspagina wordt aangeboden. */
export function serviceSchema(s: ServiceSchemaInput): Json {
  return withOrganization({
    "@type": "Service",
    name: s.name,
    description: s.description,
    serviceType: s.serviceType,
    url: absoluteUrl(s.path),
    provider: { "@id": ORGANIZATION_ID },
    areaServed: SERVICE_AREA.map((name) => ({ "@type": "AdministrativeArea", name })),
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: absoluteUrl(s.path),
      servicePhone: CONTACT.phoneE164,
    },
  });
}
