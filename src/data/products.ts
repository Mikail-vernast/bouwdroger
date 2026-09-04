import { PRODUCTS } from "./verhuur.js";

/**
 * Welke rij hier hetzelfde toestel is als op /verhuur/toestel/*.
 *
 * Deze lijst droeg haar eigen dagprijzen uit de eerste versie van de site: de
 * ECO Boost stond hier op € 9 terwijl diezelfde TTK 170 in het portaal € 18 per
 * dag kost, en de elektrische kachel op € 3 tegenover € 29. Dat is niet alleen
 * een verkeerd getal op het scherm — `bookingPrice()` in `orderIntake.ts`
 * rekent hiermee, dus een boeking via deze pagina's kwam voor de helft of
 * minder in het portaal terecht.
 *
 * Wat een tegenhanger heeft, neemt voortaan de gepubliceerde dagprijs over.
 * Wat er geen heeft (de ECO Revolution loopt via de webshop, de
 * radiaalventilatoren staan niet in de tarieven) houdt zijn eigen waarde.
 *
 * Diezelfde tegenhanger bepaalt sinds de SEO-audit ook `capacity` en
 * `suitableFor`. Dat was niet zo, en dan krijg je dit: /machines en /afhalen
 * schreven 80 L/dag en 1000 m³ voor de ECO Performance, terwijl
 * /verhuur/toestel/ttk350 over hetzelfde toestel 70 L/dag en 400 m³ zei — en
 * de ECO Ultimate stond op 150 L tegenover 90 L. Twee geïndexeerde pagina's
 * die elkaar tegenspreken over een machine die de klant komt huren. Een
 * AI-assistent die "hoeveel liter haalt hij eruit" beantwoordt, geeft dan het
 * cijfer van de pagina die hij toevallig las.
 *
 * De toestelpagina's zijn de bron: dat zijn de echte typespecificaties.
 * Wijkt hier iets af, dan is het hier fout, niet daar.
 */
const TARIEF_KEY: Record<string, string> = {
  "bd-1": "ttk170",
  "bd-2": "ttk350",
  "bd-3": "ttk650",
  "vt-1": "ttv4500",
  "vt-2": "radiaal2250",
  "vw-1": "teddh30",
};

/**
 * Waar "Bekijk details" op /machines naartoe wijst.
 *
 * Stond op `/product/:id`, en die pagina's staan alle acht op noindex. /machines
 * zelf heeft priority 0.9 in de sitemap, dus stuurde de zwaarste overzichts-
 * pagina van de site élke bezoeker én elke crawler naar een doodlopende
 * zoekingang — precies de reden waarom /shop indertijd uit de index ging. De
 * `ItemList` in de schema had hetzelfde probleem: acht items die alle acht naar
 * een niet-indexeerbare URL verwezen.
 *
 * Los van `TARIEF_KEY`: dat bepaalt de dagprijs en raakt `bookingPrice()`.
 * Dit gaat enkel over waar de link heen gaat. De ECO Revolution heeft daarom
 * hier wél een tegenhanger en daar niet.
 *
 * De Radiaalventilator Compact (`vt-3`) heeft geen eigen toestelpagina en houdt
 * daarom zijn /product-URL. Eén doodlopende van de acht in plaats van acht.
 */
const TOESTEL_PAGE: Record<string, string> = {
  "bd-1": "ttk170",
  "bd-2": "ttk350",
  "bd-3": "ttk650",
  "bd-4": "revolution",
  "vt-1": "ttv4500",
  "vt-2": "radiaal2250",
  "vw-1": "teddh30",
};

/** Het pad naar de detailpagina van een toestel uit deze catalogus. */
export function productPath(id: string): string {
  const model = TOESTEL_PAGE[id];
  return model ? `/verhuur/toestel/${model}` : `/product/${id}`;
}

export interface Product {
  id: string;
  name: string;
  capacity: string;
  suitableFor: string;
  pricePerDay: number;
  image: string;
  /** Omschrijving van `image` voor de alt-tekst: naam, soort toestel en capaciteit. */
  imageAlt: string;
  gallery?: string[];
  /** Eén omschrijving per beeld in `gallery`, in dezelfde volgorde. */
  galleryAlt?: string[];
  category: "bouwdrogers" | "ventilatoren" | "verwarming";
  features: string[];
  specs?: Record<string, string>;
}

const CATALOGUS: Product[] = [
  // Bouwdrogers
  {
    id: "bd-1",
    name: "ECO Boost",
    capacity: "50L/dag",
    suitableFor: "Tot 250 m³",
    pricePerDay: 9,
    image: "/products/eco-boost-50.webp",
    gallery: ["/products/dim-eco-boost.webp"],
    imageAlt: "Vernast ECO Boost bouwdroger, condensontvochtiger van 50 liter per dag voor ruimtes tot 250 m³",
    galleryAlt: ["Afmetingen van de Vernast ECO Boost: 54 × 49 × 96,3 cm"],
    category: "bouwdrogers",
    features: ["Krachtige droging", "Automatische ontdooiing", "Robuuste stalen constructie"],
    specs: { "Afmetingen": "54 × 49 × 96,3 cm", "Gewicht": "32 kg", "Capaciteit": "50L/dag", "Bereik": "Tot 250 m³" },
  },
  {
    id: "bd-2",
    name: "ECO Performance",
    capacity: "70L/dag",
    suitableFor: "Tot 400 m³",
    pricePerDay: 12,
    image: "/products/eco-performance-80.webp",
    gallery: ["/products/dim-eco-performance.webp"],
    imageAlt: "Vernast ECO Performance bouwdroger, condensontvochtiger van 70 liter per dag voor ruimtes tot 400 m³",
    galleryAlt: ["Afmetingen van de Vernast ECO Performance: 53 × 50 × 96,5 cm"],
    category: "bouwdrogers",
    features: ["Industriële capaciteit", "Rolzuigercompressor", "Heetgasontdooiing"],
    specs: { "Afmetingen": "53 × 50 × 96,5 cm", "Gewicht": "50 kg", "Capaciteit": "70L/dag", "Bereik": "Tot 400 m³" },
  },
  {
    id: "bd-3",
    name: "ECO Ultimate",
    capacity: "90L/dag",
    suitableFor: "Tot 600 m³",
    pricePerDay: 16,
    image: "/products/eco-ultimate-150.webp",
    gallery: ["/products/dim-eco-ultimate.webp"],
    imageAlt: "Vernast ECO Ultimate bouwdroger, condensontvochtiger van 90 liter per dag voor ruimtes tot 600 m³",
    galleryAlt: ["Afmetingen van de Vernast ECO Ultimate: 61,6 × 51,1 × 102,2 cm"],
    category: "bouwdrogers",
    features: ["Maximale capaciteit", "Waterschade & nieuwbouw", "24/7 inzetbaar"],
    specs: { "Afmetingen": "61,6 × 51,1 × 102,2 cm", "Gewicht": "52 kg", "Capaciteit": "90L/dag", "Bereik": "Tot 600 m³" },
  },
  {
    id: "bd-4",
    name: "ECO Revolution",
    capacity: "Plaatselijk drogen",
    suitableFor: "Gerichte droging",
    pricePerDay: 25,
    image: "/products/eco-revolution.webp",
    imageAlt: "Vernast ECO Revolution, rode adsorptiedroger met slangaansluitingen voor plaatselijk drogen",
    category: "bouwdrogers",
    features: ["Absorptiedroger", "Waterschade specialist", "Geavanceerde technologie"],
  },
  // Ventilatoren
  {
    id: "vt-1",
    name: "Turbo Axiaalventilator",
    capacity: "4.500 m³/u",
    suitableFor: "Tot 200 m²",
    pricePerDay: 4,
    image: "/products/turbo-axiaal-5300.webp",
    gallery: ["/products/info-axiaal-ventilator.webp", "/products/dim-axiaal-ventilator.webp"],
    imageAlt: "Vernast Turbo Axiaalventilator, bouwventilator met 4.500 m³/u luchtverzet",
    galleryAlt: ["Kenmerken van de Vernast axiaalventilator: hoge luchtopbrengst, spatwaterdicht IP55, 230 V, drie standen", "Afmetingen van de Vernast axiaalventilator: 35,8 × 51,5 × 52 cm, 15 kg"],
    category: "ventilatoren",
    features: ["Hoge luchtopbrengst", "Spatwaterdicht (IP55)", "Eenvoudige voeding 230V", "3 Ventilatorstanden"],
    specs: { "Afmetingen": "35,8 × 51,5 × 52 cm", "Gewicht": "15 kg", "Capaciteit": "4.500 m³/u", "Bescherming": "IP55" },
  },
  {
    id: "vt-2",
    name: "Turbo Radiaalventilator",
    capacity: "2.250 m³/u",
    suitableFor: "Vloer- en muurdroging",
    pricePerDay: 5,
    image: "/products/turbo-radiaal-2250.webp",
    gallery: ["/products/info-radiaal-ventilator.webp", "/products/dim-radiaal-ventilator.webp"],
    imageAlt: "Vernast Turbo Radiaalventilator van 2.250 m³/u voor vloer- en muurdroging",
    galleryAlt: ["Kenmerken van de Vernast radiaalventilator: hoge luchtopbrengst, spatwaterdicht IP55, drie standen, extra stopcontact", "Afmetingen van de Vernast radiaalventilator: 54,5 × 51,5 × 49 cm, 20 kg"],
    category: "ventilatoren",
    features: ["Hoge luchtopbrengst", "Spatwaterdicht (IP55)", "3 Ventilatorstanden", "Extra stopcontact 6A"],
    specs: { "Afmetingen": "54,5 × 51,5 × 49 cm", "Gewicht": "15 kg", "Capaciteit": "2.250 m³/u", "Bescherming": "IP55" },
  },
  {
    id: "vt-3",
    name: "Turbo Radiaalventilator Compact",
    capacity: "1.250 m³/u",
    suitableFor: "Tot 100 m²",
    pricePerDay: 5,
    image: "/products/turbo-radiaal-1250.webp",
    imageAlt: "Vernast Turbo Radiaalventilator Compact van 1.250 m³/u voor vloerdroging tot 100 m²",
    category: "ventilatoren",
    features: ["Compact", "3 standen", "Vloerdroging"],
  },
  // Verwarming
  {
    id: "vw-1",
    name: "Elektrische kachel",
    capacity: "30 kW",
    suitableFor: "Tot 50 m²",
    pricePerDay: 3,
    image: "/products/elektrische-kachel-2500.webp",
    gallery: ["/products/info-elektrische-kachel.webp", "/products/dim-elektrische-kachel.webp"],
    imageAlt: "Vernast elektrische bouwkachel met ingebouwde thermostaat, 30 kW, voor ruimtes tot 50 m²",
    galleryAlt: ["Kenmerken van de Vernast elektrische kachel: thermostaat, gelijkmatige warmteverdeling, veilig in gebruik", "Afmetingen van de Vernast elektrische kachel"],
    category: "verwarming",
    features: ["Ingebouwde thermostaat", "Gelijkmatige verdeling", "Direct warmte", "Veilig in gebruik"],
    /*
      30 kW, want `TARIEF_KEY` haalt de dagprijs van deze rij bij de TEddH 30 T
      op: /machines toonde "2,50 kW" naast € 12 per dag, terwijl
      /verhuur/toestel/teddh30 voor diezelfde € 12 een toestel van 30 kW op
      400 V beschrijft. Afmetingen en gewicht hieronder komen nog uit de
      oorspronkelijke Shopify-fiche en horen bij een kleiner toestel — die
      moeten nagekeken worden tegen de echte TEddH 30 T.
    */
    specs: { "Afmetingen": "28 × 26 × 30 cm", "Gewicht": "10 kg", "Vermogen": "30 kW", "Type": "Elektrisch" },
  },
];

/** De catalogus met de dagprijzen van het portaal erover. */
export const products: Product[] = CATALOGUS.map((product) => {
  const key = TARIEF_KEY[product.id];
  const published = key ? PRODUCTS[key] : undefined;
  return published ? { ...product, pricePerDay: published.day } : product;
});
