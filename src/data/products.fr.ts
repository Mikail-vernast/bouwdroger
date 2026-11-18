import type { Product } from "./products.js";
import type { Taal } from "../i18n/taal.js";

/**
 * De teksten van de catalogus in `products.ts` in het Frans, per id.
 *
 * Een apart bestand in plaats van een tweede veld per rij: `products.ts` wordt
 * ook door `orderIntake.ts` (server) gelezen voor de dagprijs, en die hoeft van
 * geen enkele vertaling te weten. Naam, prijs, beelden en categorie blijven
 * uit het origineel komen; hier staan alleen de woorden.
 *
 * Specificatiesleutels en -waarden staan in dezelfde volgorde als het origineel.
 * Ontbreekt een id, dan blijft de Nederlandse tekst staan.
 */
type ProductTekst = Pick<Product, "capacity" | "suitableFor" | "imageAlt" | "features"> &
  Partial<Pick<Product, "galleryAlt" | "specs">>;

const FR: Record<string, ProductTekst> = {
  "bd-1": {
    capacity: "50 l/jour",
    suitableFor: "Jusqu'à 250 m³",
    imageAlt:
      "Déshumidificateur de chantier Vernast Boost, déshumidificateur à condensation de 50 litres par jour pour des volumes jusqu'à 250 m³",
    galleryAlt: ["Dimensions du Vernast Boost : 54 × 49 × 96,3 cm"],
    features: ["Séchage puissant", "Dégivrage automatique", "Construction robuste en acier"],
    specs: { Dimensions: "54 × 49 × 96,3 cm", Poids: "32 kg", Capacité: "50 l/jour", Portée: "Jusqu'à 250 m³" },
  },
  "bd-2": {
    capacity: "70 l/jour",
    suitableFor: "Jusqu'à 400 m³",
    imageAlt:
      "Déshumidificateur de chantier Vernast Performance, déshumidificateur à condensation de 70 litres par jour pour des volumes jusqu'à 400 m³",
    galleryAlt: ["Dimensions du Vernast Performance : 53 × 50 × 96,5 cm"],
    features: ["Capacité industrielle", "Compresseur à piston roulant", "Dégivrage par gaz chaud"],
    specs: { Dimensions: "53 × 50 × 96,5 cm", Poids: "50 kg", Capacité: "70 l/jour", Portée: "Jusqu'à 400 m³" },
  },
  "bd-3": {
    capacity: "110 l/jour",
    suitableFor: "Jusqu'à 600 m³",
    imageAlt:
      "Déshumidificateur de chantier Vernast Ultimate, déshumidificateur à condensation de 110 litres par jour pour des volumes jusqu'à 600 m³",
    galleryAlt: ["Dimensions du Vernast Ultimate : 61,6 × 51,1 × 102,2 cm"],
    features: ["Capacité maximale", "Dégâts des eaux et nouvelle construction", "Utilisable 24 h/24, 7 j/7"],
    specs: { Dimensions: "61,6 × 51,1 × 102,2 cm", Poids: "52 kg", Capacité: "110 l/jour", Portée: "Jusqu'à 600 m³" },
  },
  "bd-4": {
    capacity: "Séchage localisé",
    suitableFor: "Séchage ciblé",
    imageAlt: "Vernast Revolution, déshumidificateur à adsorption rouge avec raccords de gaine pour un séchage localisé",
    features: ["Déshumidificateur à adsorption", "Spécialiste des dégâts des eaux", "Technologie avancée"],
  },
  "vt-1": {
    capacity: "4 500 m³/h",
    suitableFor: "Jusqu'à 200 m²",
    imageAlt: "Vernast Highflow, ventilateur de chantier avec un débit d'air de 4 500 m³/h",
    galleryAlt: [
      "Caractéristiques du ventilateur axial Vernast : débit d'air élevé, étanche aux projections IP55, 230 V, trois vitesses",
      "Dimensions du ventilateur axial Vernast : 35,8 × 51,5 × 52 cm, 15 kg",
    ],
    features: ["Débit d'air élevé", "Étanche aux projections (IP55)", "Alimentation simple en 230 V", "3 vitesses de ventilation"],
    specs: { Dimensions: "35,8 × 51,5 × 52 cm", Poids: "15 kg", Capacité: "4 500 m³/h", Protection: "IP55" },
  },
  "vt-2": {
    capacity: "2 250 m³/h",
    suitableFor: "Séchage des sols et des murs",
    imageAlt: "Vernast Turboflow de 2 250 m³/h pour le séchage des sols et des murs",
    galleryAlt: [
      "Caractéristiques du ventilateur radial Vernast : débit d'air élevé, étanche aux projections IP55, trois vitesses, prise supplémentaire",
      "Dimensions du ventilateur radial Vernast : 54,5 × 51,5 × 49 cm, 20 kg",
    ],
    features: ["Débit d'air élevé", "Étanche aux projections (IP55)", "3 vitesses de ventilation", "Prise supplémentaire 6 A"],
    specs: { Dimensions: "54,5 × 51,5 × 49 cm", Poids: "15 kg", Capacité: "2 250 m³/h", Protection: "IP55" },
  },
  "vt-3": {
    capacity: "1 250 m³/h",
    suitableFor: "Jusqu'à 100 m²",
    imageAlt: "Vernast Turboflow Compact de 1 250 m³/h pour le séchage des sols jusqu'à 100 m²",
    features: ["Compact", "3 vitesses", "Séchage des sols"],
  },
  "vw-1": {
    capacity: "30 kW",
    suitableFor: "Jusqu'à 50 m²",
    imageAlt: "Chauffage de chantier électrique Vernast avec thermostat intégré, 30 kW, pour des pièces jusqu'à 50 m²",
    galleryAlt: [
      "Caractéristiques du chauffage électrique Vernast : thermostat, répartition homogène de la chaleur, utilisation sûre",
      "Dimensions du chauffage électrique Vernast",
    ],
    features: ["Thermostat intégré", "Répartition homogène", "Chaleur immédiate", "Utilisation sûre"],
    specs: { Dimensions: "28 × 26 × 30 cm", Poids: "10 kg", Puissance: "30 kW", Type: "Électrique" },
  },
};

/** Het product met zijn teksten in `taal`; prijs, beelden en id blijven gelijk. */
export function productInTaal(product: Product, taal: Taal): Product {
  if (taal !== "fr") return product;
  const t = FR[product.id];
  return t ? { ...product, ...t } : product;
}
