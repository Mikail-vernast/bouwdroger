export interface Product {
  id: string;
  name: string;
  capacity: string;
  suitableFor: string;
  pricePerDay: number;
  image: string;
  gallery?: string[];
  category: "bouwdrogers" | "ventilatoren" | "verwarming";
  features: string[];
  specs?: Record<string, string>;
}

export const products: Product[] = [
  // Bouwdrogers
  {
    id: "bd-1",
    name: "ECO Boost",
    capacity: "50L/dag",
    suitableFor: "Tot 450 m³",
    pricePerDay: 9,
    image: "/products/eco-boost-50.webp",
    gallery: ["/products/dim-eco-boost.webp"],
    category: "bouwdrogers",
    features: ["Krachtige droging", "Automatische ontdooiing", "Robuuste stalen constructie"],
    specs: { "Afmetingen": "54 × 49 × 96,3 cm", "Gewicht": "32 kg", "Capaciteit": "50L/dag", "Bereik": "Tot 450 m³" },
  },
  {
    id: "bd-2",
    name: "ECO Performance",
    capacity: "80L/dag",
    suitableFor: "Tot 1000 m³",
    pricePerDay: 12,
    image: "/products/eco-performance-80.webp",
    gallery: ["/products/dim-eco-performance.webp"],
    category: "bouwdrogers",
    features: ["Industriële capaciteit", "Rolzuigercompressor", "Heetgasontdooiing"],
    specs: { "Afmetingen": "53 × 50 × 96,5 cm", "Gewicht": "50 kg", "Capaciteit": "80L/dag", "Bereik": "Tot 1000 m³" },
  },
  {
    id: "bd-3",
    name: "ECO Ultimate",
    capacity: "150L/dag",
    suitableFor: "Tot 1470 m³",
    pricePerDay: 16,
    image: "/products/eco-ultimate-150.webp",
    gallery: ["/products/dim-eco-ultimate.webp"],
    category: "bouwdrogers",
    features: ["Maximale capaciteit", "Waterschade & nieuwbouw", "24/7 inzetbaar"],
    specs: { "Afmetingen": "61,6 × 51,1 × 102,2 cm", "Gewicht": "52 kg", "Capaciteit": "150L/dag", "Bereik": "Tot 1470 m³" },
  },
  {
    id: "bd-4",
    name: "ECO Revolution",
    capacity: "Plaatselijk drogen",
    suitableFor: "Gerichte droging",
    pricePerDay: 25,
    image: "/products/eco-revolution.webp",
    category: "bouwdrogers",
    features: ["Absorptiedroger", "Waterschade specialist", "Geavanceerde technologie"],
  },
  // Ventilatoren
  {
    id: "vt-1",
    name: "Turbo Axiaalventilator",
    capacity: "5.300 m³/u",
    suitableFor: "Tot 200 m²",
    pricePerDay: 4,
    image: "/products/turbo-axiaal-5300.webp",
    gallery: ["/products/info-axiaal-ventilator.webp", "/products/dim-axiaal-ventilator.webp"],
    category: "ventilatoren",
    features: ["Hoge luchtopbrengst", "Spatwaterdicht (IP55)", "Eenvoudige voeding 230V", "3 Ventilatorstanden"],
    specs: { "Afmetingen": "35,8 × 51,5 × 52 cm", "Gewicht": "15 kg", "Capaciteit": "5.300 m³/u", "Bescherming": "IP55" },
  },
  {
    id: "vt-2",
    name: "Turbo Radiaalventilator",
    capacity: "2.250 m³/u",
    suitableFor: "Vloer- en muurdroging",
    pricePerDay: 5,
    image: "/products/turbo-radiaal-2250.webp",
    gallery: ["/products/info-radiaal-ventilator.webp", "/products/dim-radiaal-ventilator.webp"],
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
    category: "ventilatoren",
    features: ["Compact", "3 standen", "Vloerdroging"],
  },
  // Verwarming
  {
    id: "vw-1",
    name: "Elektrische kachel",
    capacity: "2,50 kW",
    suitableFor: "Tot 50 m²",
    pricePerDay: 3,
    image: "/products/elektrische-kachel-2500.webp",
    gallery: ["/products/info-elektrische-kachel.webp", "/products/dim-elektrische-kachel.webp"],
    category: "verwarming",
    features: ["Ingebouwde thermostaat", "Gelijkmatige verdeling", "Direct warmte", "Veilig in gebruik"],
    specs: { "Afmetingen": "28 × 26 × 30 cm", "Gewicht": "10 kg", "Vermogen": "2,50 kW", "Type": "Elektrisch" },
  },
];
