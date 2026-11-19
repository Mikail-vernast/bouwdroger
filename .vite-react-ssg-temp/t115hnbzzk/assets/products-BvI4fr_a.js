import { t as toestelPad, P as PRODUCTS } from "./verhuur-CgnDb-wO.js";
import "./tarieven-ZrzMF0e-.js";
import "../main.mjs";
import "vite-react-ssg";
import "react/jsx-runtime";
import "react";
import "react-router-dom";
import "lucide-react";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/products.ts");
const TARIEF_KEY = {
  "bd-1": "ttk170",
  "bd-2": "ttk350",
  "bd-3": "ttk650",
  "vt-1": "ttv4500",
  "vt-2": "radiaal2250",
  "vw-1": "teddh30"
};
const TOESTEL_PAGE = {
  "bd-1": "ttk170",
  "bd-2": "ttk350",
  "bd-3": "ttk650",
  "bd-4": "revolution",
  "vt-1": "ttv4500",
  "vt-2": "radiaal2250",
  "vw-1": "teddh30"
};
function productPath(id) {
  const model = TOESTEL_PAGE[id];
  return model ? toestelPad(model) : `/product/${id}`;
}
const CATALOGUS = [
  // Bouwdrogers
  {
    id: "bd-1",
    name: "Boost",
    capacity: "50L/dag",
    suitableFor: "Tot 250 m³",
    pricePerDay: 9,
    image: "/products/eco-boost-50.webp",
    gallery: ["/products/dim-eco-boost.webp"],
    imageAlt: "Vernast Boost bouwdroger, condensontvochtiger van 50 liter per dag voor ruimtes tot 250 m³",
    galleryAlt: ["Afmetingen van de Vernast Boost: 54 × 49 × 96,3 cm"],
    category: "bouwdrogers",
    features: ["Krachtige droging", "Automatische ontdooiing", "Robuuste stalen constructie"],
    specs: { "Afmetingen": "54 × 49 × 96,3 cm", "Gewicht": "32 kg", "Capaciteit": "50L/dag", "Bereik": "Tot 250 m³" }
  },
  {
    id: "bd-2",
    name: "Performance",
    capacity: "70L/dag",
    suitableFor: "Tot 400 m³",
    pricePerDay: 12,
    image: "/products/eco-performance-80.webp",
    gallery: ["/products/dim-eco-performance.webp"],
    imageAlt: "Vernast Performance bouwdroger, condensontvochtiger van 70 liter per dag voor ruimtes tot 400 m³",
    galleryAlt: ["Afmetingen van de Vernast Performance: 53 × 50 × 96,5 cm"],
    category: "bouwdrogers",
    features: ["Industriële capaciteit", "Rolzuigercompressor", "Heetgasontdooiing"],
    specs: { "Afmetingen": "53 × 50 × 96,5 cm", "Gewicht": "50 kg", "Capaciteit": "70L/dag", "Bereik": "Tot 400 m³" }
  },
  {
    id: "bd-3",
    name: "Ultimate",
    capacity: "110L/dag",
    suitableFor: "Tot 600 m³",
    pricePerDay: 16,
    image: "/products/eco-ultimate-150.webp",
    gallery: ["/products/dim-eco-ultimate.webp"],
    imageAlt: "Vernast Ultimate bouwdroger, condensontvochtiger van 110 liter per dag voor ruimtes tot 600 m³",
    galleryAlt: ["Afmetingen van de Vernast Ultimate: 61,6 × 51,1 × 102,2 cm"],
    category: "bouwdrogers",
    features: ["Maximale capaciteit", "Waterschade & nieuwbouw", "24/7 inzetbaar"],
    specs: { "Afmetingen": "61,6 × 51,1 × 102,2 cm", "Gewicht": "52 kg", "Capaciteit": "110L/dag", "Bereik": "Tot 600 m³" }
  },
  {
    id: "bd-4",
    name: "Revolution",
    capacity: "Plaatselijk drogen",
    suitableFor: "Gerichte droging",
    pricePerDay: 25,
    image: "/products/eco-revolution.webp",
    imageAlt: "Vernast Revolution, rode adsorptiedroger met slangaansluitingen voor plaatselijk drogen",
    category: "bouwdrogers",
    features: ["Absorptiedroger", "Waterschade specialist", "Geavanceerde technologie"]
  },
  // Ventilatoren
  {
    id: "vt-1",
    name: "Highflow",
    capacity: "4.500 m³/u",
    suitableFor: "Tot 200 m²",
    pricePerDay: 4,
    image: "/products/turbo-axiaal-5300.webp",
    gallery: ["/products/info-axiaal-ventilator.webp", "/products/dim-axiaal-ventilator.webp"],
    imageAlt: "Vernast Highflow, bouwventilator met 4.500 m³/u luchtverzet",
    galleryAlt: ["Kenmerken van de Vernast axiaalventilator: hoge luchtopbrengst, spatwaterdicht IP55, 230 V, drie standen", "Afmetingen van de Vernast axiaalventilator: 35,8 × 51,5 × 52 cm, 15 kg"],
    category: "ventilatoren",
    features: ["Hoge luchtopbrengst", "Spatwaterdicht (IP55)", "Eenvoudige voeding 230V", "3 Ventilatorstanden"],
    specs: { "Afmetingen": "35,8 × 51,5 × 52 cm", "Gewicht": "15 kg", "Capaciteit": "4.500 m³/u", "Bescherming": "IP55" }
  },
  {
    id: "vt-2",
    name: "Turboflow",
    capacity: "2.250 m³/u",
    suitableFor: "Vloer- en muurdroging",
    pricePerDay: 5,
    image: "/products/turbo-radiaal-2250.webp",
    gallery: ["/products/info-radiaal-ventilator.webp", "/products/dim-radiaal-ventilator.webp"],
    imageAlt: "Vernast Turboflow van 2.250 m³/u voor vloer- en muurdroging",
    galleryAlt: ["Kenmerken van de Vernast radiaalventilator: hoge luchtopbrengst, spatwaterdicht IP55, drie standen, extra stopcontact", "Afmetingen van de Vernast radiaalventilator: 54,5 × 51,5 × 49 cm, 20 kg"],
    category: "ventilatoren",
    features: ["Hoge luchtopbrengst", "Spatwaterdicht (IP55)", "3 Ventilatorstanden", "Extra stopcontact 6A"],
    specs: { "Afmetingen": "54,5 × 51,5 × 49 cm", "Gewicht": "15 kg", "Capaciteit": "2.250 m³/u", "Bescherming": "IP55" }
  },
  {
    id: "vt-3",
    name: "Turboflow Compact",
    capacity: "1.250 m³/u",
    suitableFor: "Tot 100 m²",
    pricePerDay: 5,
    image: "/products/turbo-radiaal-1250.webp",
    imageAlt: "Vernast Turboflow Compact van 1.250 m³/u voor vloerdroging tot 100 m²",
    category: "ventilatoren",
    features: ["Compact", "3 standen", "Vloerdroging"]
  },
  // Verwarming
  {
    id: "vw-1",
    name: "Heatpower 30",
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
      30 kW, want `TARIEF_KEY` haalt de dagprijs van deze rij bij de Heatpower 30
      op: /machines toonde "2,50 kW" naast € 12 per dag, terwijl
      /verhuur/toestel/teddh30 voor diezelfde € 12 een toestel van 30 kW op
      400 V beschrijft. Afmetingen en gewicht hieronder komen nog uit de
      oorspronkelijke Shopify-fiche en horen bij een kleiner toestel — die
      moeten nagekeken worden tegen de echte Heatpower 30.
    */
    specs: { "Afmetingen": "28 × 26 × 30 cm", "Gewicht": "10 kg", "Vermogen": "30 kW", "Type": "Elektrisch" }
  }
];
const products = CATALOGUS.map((product) => {
  const key = TARIEF_KEY[product.id];
  const published = key ? PRODUCTS[key] : void 0;
  return published ? { ...product, pricePerDay: published.day } : product;
});
export {
  productPath,
  products
};
