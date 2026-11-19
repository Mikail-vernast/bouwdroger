import type { ProductTekst } from "./products.fr.js";

/**
 * De teksten van de catalogus in `products.ts` in het Engels (Brits), per id.
 * Gelezen door `productInTaal` in `products.fr.ts`; naam, prijs, beelden en
 * categorie blijven uit het origineel komen. Specificatiesleutels en -waarden
 * in dezelfde volgorde als het origineel.
 */
export const PRODUCTEN_EN: Record<string, ProductTekst> = {
  "bd-1": {
    capacity: "50 l/day",
    suitableFor: "Up to 250 m³",
    imageAlt:
      "Vernast Boost construction dehumidifier, condensation dehumidifier extracting 50 litres a day for rooms up to 250 m³",
    galleryAlt: ["Dimensions of the Vernast Boost: 54 × 49 × 96.3 cm"],
    features: ["Powerful drying", "Automatic defrosting", "Sturdy steel construction"],
    specs: { Dimensions: "54 × 49 × 96.3 cm", Weight: "32 kg", Capacity: "50 l/day", Coverage: "Up to 250 m³" },
  },
  "bd-2": {
    capacity: "70 l/day",
    suitableFor: "Up to 400 m³",
    imageAlt:
      "Vernast Performance construction dehumidifier, condensation dehumidifier extracting 70 litres a day for rooms up to 400 m³",
    galleryAlt: ["Dimensions of the Vernast Performance: 53 × 50 × 96.5 cm"],
    features: ["Industrial capacity", "Rolling piston compressor", "Hot gas defrosting"],
    specs: { Dimensions: "53 × 50 × 96.5 cm", Weight: "50 kg", Capacity: "70 l/day", Coverage: "Up to 400 m³" },
  },
  "bd-3": {
    capacity: "110 l/day",
    suitableFor: "Up to 600 m³",
    imageAlt:
      "Vernast Ultimate construction dehumidifier, condensation dehumidifier extracting 110 litres a day for rooms up to 600 m³",
    galleryAlt: ["Dimensions of the Vernast Ultimate: 61.6 × 51.1 × 102.2 cm"],
    features: ["Maximum capacity", "Water damage & new builds", "Can run 24/7"],
    specs: { Dimensions: "61.6 × 51.1 × 102.2 cm", Weight: "52 kg", Capacity: "110 l/day", Coverage: "Up to 600 m³" },
  },
  "bd-4": {
    capacity: "Local drying",
    suitableFor: "Targeted drying",
    imageAlt: "Vernast Revolution, red desiccant dehumidifier with hose connections for local drying",
    features: ["Desiccant dehumidifier", "Water damage specialist", "Advanced technology"],
  },
  "vt-1": {
    capacity: "4,500 m³/h",
    suitableFor: "Up to 200 m²",
    imageAlt: "Vernast Highflow, site fan moving 4,500 m³/h of air",
    galleryAlt: [
      "Features of the Vernast axial fan: high airflow, splash-proof IP55, 230 V, three speeds",
      "Dimensions of the Vernast axial fan: 35.8 × 51.5 × 52 cm, 15 kg",
    ],
    features: ["High airflow", "Splash-proof (IP55)", "Simple 230 V supply", "3 fan speeds"],
    specs: { Dimensions: "35.8 × 51.5 × 52 cm", Weight: "15 kg", Capacity: "4,500 m³/h", Protection: "IP55" },
  },
  "vt-2": {
    capacity: "2,250 m³/h",
    suitableFor: "Floor and wall drying",
    imageAlt: "Vernast Turboflow, 2,250 m³/h, for floor and wall drying",
    galleryAlt: [
      "Features of the Vernast radial fan: high airflow, splash-proof IP55, three speeds, extra socket",
      "Dimensions of the Vernast radial fan: 54.5 × 51.5 × 49 cm, 20 kg",
    ],
    features: ["High airflow", "Splash-proof (IP55)", "3 fan speeds", "Extra 6 A socket"],
    specs: { Dimensions: "54.5 × 51.5 × 49 cm", Weight: "15 kg", Capacity: "2,250 m³/h", Protection: "IP55" },
  },
  "vt-3": {
    capacity: "1,250 m³/h",
    suitableFor: "Up to 100 m²",
    imageAlt: "Vernast Turboflow Compact, 1,250 m³/h, for floor drying up to 100 m²",
    features: ["Compact", "3 speeds", "Floor drying"],
  },
  "vw-1": {
    capacity: "30 kW",
    suitableFor: "Up to 50 m²",
    imageAlt: "Vernast electric site heater with built-in thermostat, 30 kW, for rooms up to 50 m²",
    galleryAlt: [
      "Features of the Vernast electric heater: thermostat, even heat distribution, safe to use",
      "Dimensions of the Vernast electric heater",
    ],
    features: ["Built-in thermostat", "Even distribution", "Instant heat", "Safe to use"],
    specs: { Dimensions: "28 × 26 × 30 cm", Weight: "10 kg", Power: "30 kW", Type: "Electric" },
  },
};
