export type BuildingSize = "100" | "140" | "180" | "220" | "260" | "300";
export type DryingType = "pleisterwerk" | "chape" | "beide" | "waterschade";
export type PlasterThickness = "1" | "2" | "3";
export type ScreedThickness = "5" | "6" | "7";
export type HeatingOption = "ja" | "nee";

export interface EquipmentItem {
  name: string;
  type: string;
  count: number;
  specs: Record<string, string>;
}

export interface Package {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  equipment: EquipmentItem[];
  pricePerTwoWeeks: number;
  pricePerDay: number;
  category: string;
  sizeLabel: string;
  includes: string[];
}

// Equipment templates
const smallDroger: (count: number) => EquipmentItem = (count) => ({
  name: "Small Bouwdroger",
  type: "bouwdroger",
  count,
  specs: {
    "Capaciteit": "26L/dag",
    "Vermogen": "560W",
    "Bereik": "tot 50m²",
    "Gewicht": "32 kg",
    "Geluidsniveau": "52 dB",
  },
});

const largeDroger: (count: number) => EquipmentItem = (count) => ({
  name: "Large Bouwdroger",
  type: "bouwdroger",
  count,
  specs: {
    "Capaciteit": "50L/dag",
    "Vermogen": "900W",
    "Bereik": "tot 100m²",
    "Gewicht": "52 kg",
    "Geluidsniveau": "56 dB",
  },
});

const axiaalVentilator: (count: number) => EquipmentItem = (count) => ({
  name: "Axiaal Ventilator",
  type: "ventilator",
  count,
  specs: {
    "Luchtdebiet": "3.900 m³/uur",
    "Vermogen": "245W",
    "Diameter": "400mm",
    "Gewicht": "12 kg",
  },
});

const kachel: (count: number) => EquipmentItem = (count) => ({
  name: "Elektrische Kachel",
  type: "kachel",
  count,
  specs: {
    "Vermogen": "3kW",
    "Thermostaat": "Ja",
    "Bereik": "tot 40m²",
    "Gewicht": "5 kg",
  },
});

// Package definitions keyed by a compound ID
const allPackages: Package[] = [
  // === CHAPE ONLY ===
  { id: "chape-100-5", title: "Chape drogen – Gebouw kleiner dan 100m² – Chape 5cm", shortTitle: "Chape 100m²", description: "Compact droogpakket voor chape tot 100m²", category: "Chape drogen", sizeLabel: "< 100m²", pricePerTwoWeeks: 399, pricePerDay: 29, equipment: [smallDroger(2), axiaalVentilator(1)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Installatie op locatie", "Telefonische ondersteuning"] },
  { id: "chape-100-6", title: "Chape drogen – Gebouw kleiner dan 100m² – Chape 6cm", shortTitle: "Chape 100m²", description: "Compact droogpakket voor chape tot 100m²", category: "Chape drogen", sizeLabel: "< 100m²", pricePerTwoWeeks: 449, pricePerDay: 32, equipment: [smallDroger(2), axiaalVentilator(2)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Installatie op locatie", "Telefonische ondersteuning"] },
  { id: "chape-100-7", title: "Chape drogen – Gebouw kleiner dan 100m² – Chape 7cm", shortTitle: "Chape 100m²", description: "Compact droogpakket voor chape tot 100m²", category: "Chape drogen", sizeLabel: "< 100m²", pricePerTwoWeeks: 499, pricePerDay: 36, equipment: [smallDroger(3), axiaalVentilator(2)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Installatie op locatie", "Telefonische ondersteuning"] },
  { id: "chape-140-5", title: "Chape drogen – Gebouw kleiner dan 140m² – Chape 5cm", shortTitle: "Chape 140m²", description: "Droogpakket voor chape tot 140m²", category: "Chape drogen", sizeLabel: "< 140m²", pricePerTwoWeeks: 499, pricePerDay: 36, equipment: [smallDroger(3), axiaalVentilator(2)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Installatie op locatie", "Telefonische ondersteuning"] },
  { id: "chape-140-6", title: "Chape drogen – Gebouw kleiner dan 140m² – Chape 6cm", shortTitle: "Chape 140m²", description: "Droogpakket voor chape tot 140m²", category: "Chape drogen", sizeLabel: "< 140m²", pricePerTwoWeeks: 549, pricePerDay: 39, equipment: [smallDroger(3), axiaalVentilator(2)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Installatie op locatie", "Telefonische ondersteuning"] },
  { id: "chape-140-7", title: "Chape drogen – Gebouw kleiner dan 140m² – Chape 7cm", shortTitle: "Chape 140m²", description: "Droogpakket voor chape tot 140m²", category: "Chape drogen", sizeLabel: "< 140m²", pricePerTwoWeeks: 599, pricePerDay: 43, equipment: [smallDroger(4), axiaalVentilator(3)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Installatie op locatie", "Telefonische ondersteuning"] },
  { id: "chape-180-5", title: "Chape drogen – Gebouw kleiner dan 180m²", shortTitle: "Chape 180m²", description: "Droogpakket voor chape tot 180m²", category: "Chape drogen", sizeLabel: "< 180m²", pricePerTwoWeeks: 599, pricePerDay: 43, equipment: [smallDroger(4), axiaalVentilator(3)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Installatie op locatie", "Telefonische ondersteuning"] },
  { id: "chape-180-6", title: "Chape drogen – Gebouw kleiner dan 180m²", shortTitle: "Chape 180m²", description: "Droogpakket voor chape tot 180m²", category: "Chape drogen", sizeLabel: "< 180m²", pricePerTwoWeeks: 649, pricePerDay: 46, equipment: [smallDroger(4), axiaalVentilator(3)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Installatie op locatie", "Telefonische ondersteuning"] },
  { id: "chape-180-7", title: "Chape drogen – Gebouw kleiner dan 180m²", shortTitle: "Chape 180m²", description: "Droogpakket voor chape tot 180m²", category: "Chape drogen", sizeLabel: "< 180m²", pricePerTwoWeeks: 699, pricePerDay: 50, equipment: [smallDroger(5), axiaalVentilator(3)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Installatie op locatie", "Telefonische ondersteuning"] },
  { id: "chape-220-5", title: "Chape drogen – Gebouw kleiner dan 220m²", shortTitle: "Chape 220m²", description: "Droogpakket voor chape tot 220m²", category: "Chape drogen", sizeLabel: "< 220m²", pricePerTwoWeeks: 699, pricePerDay: 50, equipment: [largeDroger(3), axiaalVentilator(3)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Installatie op locatie", "Telefonische ondersteuning"] },
  { id: "chape-220-6", title: "Chape drogen – Gebouw kleiner dan 220m²", shortTitle: "Chape 220m²", description: "Droogpakket voor chape tot 220m²", category: "Chape drogen", sizeLabel: "< 220m²", pricePerTwoWeeks: 749, pricePerDay: 54, equipment: [largeDroger(3), axiaalVentilator(4)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Installatie op locatie", "Telefonische ondersteuning"] },
  { id: "chape-220-7", title: "Chape drogen – Gebouw kleiner dan 220m²", shortTitle: "Chape 220m²", description: "Droogpakket voor chape tot 220m²", category: "Chape drogen", sizeLabel: "< 220m²", pricePerTwoWeeks: 799, pricePerDay: 57, equipment: [largeDroger(4), axiaalVentilator(4)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Installatie op locatie", "Telefonische ondersteuning"] },
  { id: "chape-260-6", title: "Chape drogen – Gebouw kleiner dan 260m²", shortTitle: "Chape 260m²", description: "Droogpakket voor chape tot 260m²", category: "Chape drogen", sizeLabel: "< 260m²", pricePerTwoWeeks: 849, pricePerDay: 61, equipment: [largeDroger(4), axiaalVentilator(4)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Installatie op locatie", "Telefonische ondersteuning"] },
  { id: "chape-300-6", title: "Chape drogen – Gebouw kleiner dan 300m²", shortTitle: "Chape 300m²", description: "Droogpakket voor chape tot 300m²", category: "Chape drogen", sizeLabel: "< 300m²", pricePerTwoWeeks: 949, pricePerDay: 68, equipment: [largeDroger(5), axiaalVentilator(5)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Installatie op locatie", "Telefonische ondersteuning"] },

  // === PLEISTERWERK ONLY ===
  { id: "pleister-100-1", title: "Pleister drogen – Gebouw kleiner dan 100m² – 1cm", shortTitle: "Pleister 100m²", description: "Droogpakket voor pleisterwerk tot 100m²", category: "Pleister drogen", sizeLabel: "< 100m²", pricePerTwoWeeks: 299, pricePerDay: 21, equipment: [smallDroger(1), axiaalVentilator(1)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Installatie op locatie", "Telefonische ondersteuning"] },
  { id: "pleister-100-2", title: "Pleister drogen – Gebouw kleiner dan 100m² – 2cm", shortTitle: "Pleister 100m²", description: "Droogpakket voor pleisterwerk tot 100m²", category: "Pleister drogen", sizeLabel: "< 100m²", pricePerTwoWeeks: 349, pricePerDay: 25, equipment: [smallDroger(2), axiaalVentilator(1)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Installatie op locatie", "Telefonische ondersteuning"] },
  { id: "pleister-100-3", title: "Pleister drogen – Gebouw kleiner dan 100m² – 3cm", shortTitle: "Pleister 100m²", description: "Droogpakket voor pleisterwerk tot 100m²", category: "Pleister drogen", sizeLabel: "< 100m²", pricePerTwoWeeks: 399, pricePerDay: 29, equipment: [smallDroger(2), axiaalVentilator(2)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Installatie op locatie", "Telefonische ondersteuning"] },
  { id: "pleister-140-1", title: "Pleister drogen – Gebouw kleiner dan 140m²", shortTitle: "Pleister 140m²", description: "Droogpakket voor pleisterwerk tot 140m²", category: "Pleister drogen", sizeLabel: "< 140m²", pricePerTwoWeeks: 349, pricePerDay: 25, equipment: [smallDroger(2), axiaalVentilator(1)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Installatie op locatie", "Telefonische ondersteuning"] },
  { id: "pleister-140-2", title: "Pleister drogen – Gebouw kleiner dan 140m²", shortTitle: "Pleister 140m²", description: "Droogpakket voor pleisterwerk tot 140m²", category: "Pleister drogen", sizeLabel: "< 140m²", pricePerTwoWeeks: 399, pricePerDay: 29, equipment: [smallDroger(2), axiaalVentilator(2)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Installatie op locatie", "Telefonische ondersteuning"] },
  { id: "pleister-140-3", title: "Pleister drogen – Gebouw kleiner dan 140m²", shortTitle: "Pleister 140m²", description: "Droogpakket voor pleisterwerk tot 140m²", category: "Pleister drogen", sizeLabel: "< 140m²", pricePerTwoWeeks: 449, pricePerDay: 32, equipment: [smallDroger(3), axiaalVentilator(2)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Installatie op locatie", "Telefonische ondersteuning"] },
  { id: "pleister-180-2", title: "Pleister drogen – Gebouw kleiner dan 180m²", shortTitle: "Pleister 180m²", description: "Droogpakket voor pleisterwerk tot 180m²", category: "Pleister drogen", sizeLabel: "< 180m²", pricePerTwoWeeks: 449, pricePerDay: 32, equipment: [smallDroger(3), axiaalVentilator(2)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Installatie op locatie", "Telefonische ondersteuning"] },
  { id: "pleister-220-2", title: "Pleister drogen – Gebouw kleiner dan 220m²", shortTitle: "Pleister 220m²", description: "Droogpakket voor pleisterwerk tot 220m²", category: "Pleister drogen", sizeLabel: "< 220m²", pricePerTwoWeeks: 549, pricePerDay: 39, equipment: [smallDroger(4), axiaalVentilator(3)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Installatie op locatie", "Telefonische ondersteuning"] },

  // === BEIDE (Pleister + Chape) ===
  { id: "beide-100-2-6", title: "Pleister & Chape – Gebouw kleiner dan 100m² – Pleister 2cm – Chape 6cm", shortTitle: "Beide 100m²", description: "Compleet droogpakket voor pleister en chape tot 100m²", category: "Chape & Pleister drogen", sizeLabel: "< 100m²", pricePerTwoWeeks: 549, pricePerDay: 39, equipment: [smallDroger(3), axiaalVentilator(2)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Installatie op locatie", "Telefonische ondersteuning"] },
  { id: "beide-140-2-6", title: "Pleister & Chape – Gebouw kleiner dan 140m² – Pleister 2cm – Chape 6cm", shortTitle: "Beide 140m²", description: "Compleet droogpakket voor pleister en chape tot 140m²", category: "Chape & Pleister drogen", sizeLabel: "< 140m²", pricePerTwoWeeks: 649, pricePerDay: 46, equipment: [smallDroger(4), axiaalVentilator(3)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Installatie op locatie", "Telefonische ondersteuning"] },
  { id: "beide-180-2-6", title: "Pleister & Chape – Gebouw kleiner dan 180m² – Pleister 2cm – Chape 6cm", shortTitle: "Beide 180m²", description: "Compleet droogpakket voor pleister en chape tot 180m²", category: "Chape & Pleister drogen", sizeLabel: "< 180m²", pricePerTwoWeeks: 749, pricePerDay: 54, equipment: [smallDroger(5), axiaalVentilator(3)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Installatie op locatie", "Telefonische ondersteuning"] },
  { id: "beide-220-2-6", title: "Pleister & Chape – Gebouw kleiner dan 220m² – Pleister 2cm – Chape 6cm", shortTitle: "Beide 220m²", description: "Compleet droogpakket voor pleister en chape tot 220m²", category: "Chape & Pleister drogen", sizeLabel: "< 220m²", pricePerTwoWeeks: 849, pricePerDay: 61, equipment: [largeDroger(3), smallDroger(2), axiaalVentilator(4)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Installatie op locatie", "Telefonische ondersteuning"] },
  { id: "beide-260-2-6", title: "Pleister & Chape – Gebouw kleiner dan 260m²", shortTitle: "Beide 260m²", description: "Compleet droogpakket voor pleister en chape tot 260m²", category: "Chape & Pleister drogen", sizeLabel: "< 260m²", pricePerTwoWeeks: 949, pricePerDay: 68, equipment: [largeDroger(4), smallDroger(2), axiaalVentilator(5)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Installatie op locatie", "Telefonische ondersteuning"] },
  { id: "beide-300-2-6", title: "Pleister & Chape – Gebouw kleiner dan 300m²", shortTitle: "Beide 300m²", description: "Compleet droogpakket voor pleister en chape tot 300m²", category: "Chape & Pleister drogen", sizeLabel: "< 300m²", pricePerTwoWeeks: 1049, pricePerDay: 75, equipment: [largeDroger(5), smallDroger(2), axiaalVentilator(6)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Installatie op locatie", "Telefonische ondersteuning"] },

  // === WITH HEATING variants — add kachels ===
  { id: "chape-verw-100-6", title: "Chape & Verwarming – Gebouw kleiner dan 100m²", shortTitle: "Chape+Verw 100m²", description: "Chape drogen inclusief verwarming tot 100m²", category: "Chape & Verwarming", sizeLabel: "< 100m²", pricePerTwoWeeks: 549, pricePerDay: 39, equipment: [smallDroger(2), axiaalVentilator(2), kachel(1)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Installatie op locatie", "Verwarming inbegrepen", "Telefonische ondersteuning"] },
  { id: "chape-verw-140-6", title: "Chape & Verwarming – Gebouw kleiner dan 140m²", shortTitle: "Chape+Verw 140m²", description: "Chape drogen inclusief verwarming tot 140m²", category: "Chape & Verwarming", sizeLabel: "< 140m²", pricePerTwoWeeks: 649, pricePerDay: 46, equipment: [smallDroger(3), axiaalVentilator(2), kachel(1)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Installatie op locatie", "Verwarming inbegrepen", "Telefonische ondersteuning"] },
  { id: "chape-verw-180-6", title: "Chape & Verwarming – Gebouw kleiner dan 180m²", shortTitle: "Chape+Verw 180m²", description: "Chape drogen inclusief verwarming tot 180m²", category: "Chape & Verwarming", sizeLabel: "< 180m²", pricePerTwoWeeks: 749, pricePerDay: 54, equipment: [smallDroger(4), axiaalVentilator(3), kachel(2)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Installatie op locatie", "Verwarming inbegrepen", "Telefonische ondersteuning"] },
  { id: "chape-verw-220-6", title: "Chape & Verwarming – Gebouw kleiner dan 220m²", shortTitle: "Chape+Verw 220m²", description: "Chape drogen inclusief verwarming tot 220m²", category: "Chape & Verwarming", sizeLabel: "< 220m²", pricePerTwoWeeks: 849, pricePerDay: 61, equipment: [largeDroger(3), axiaalVentilator(4), kachel(2)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Installatie op locatie", "Verwarming inbegrepen", "Telefonische ondersteuning"] },

  // === BEIDE + VERWARMING ===
  { id: "beide-verw-100-2-6", title: "Pleister & Chape & Verwarming – 100m²", shortTitle: "Alles 100m²", description: "Alles-in-één droogpakket met verwarming tot 100m²", category: "Chape & Pleister & Verwarming", sizeLabel: "< 100m²", pricePerTwoWeeks: 649, pricePerDay: 46, equipment: [smallDroger(3), axiaalVentilator(2), kachel(1)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Installatie op locatie", "Verwarming inbegrepen", "Telefonische ondersteuning"] },
  { id: "beide-verw-140-2-6", title: "Pleister & Chape & Verwarming – 140m²", shortTitle: "Alles 140m²", description: "Alles-in-één droogpakket met verwarming tot 140m²", category: "Chape & Pleister & Verwarming", sizeLabel: "< 140m²", pricePerTwoWeeks: 749, pricePerDay: 54, equipment: [smallDroger(4), axiaalVentilator(3), kachel(1)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Installatie op locatie", "Verwarming inbegrepen", "Telefonische ondersteuning"] },
  { id: "beide-verw-180-2-6", title: "Pleister & Chape & Verwarming – 180m²", shortTitle: "Alles 180m²", description: "Alles-in-één droogpakket met verwarming tot 180m²", category: "Chape & Pleister & Verwarming", sizeLabel: "< 180m²", pricePerTwoWeeks: 849, pricePerDay: 61, equipment: [smallDroger(5), axiaalVentilator(3), kachel(2)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Installatie op locatie", "Verwarming inbegrepen", "Telefonische ondersteuning"] },
  { id: "beide-verw-220-2-6", title: "Pleister & Chape & Verwarming – 220m²", shortTitle: "Alles 220m²", description: "Alles-in-één droogpakket met verwarming tot 220m²", category: "Chape & Pleister & Verwarming", sizeLabel: "< 220m²", pricePerTwoWeeks: 949, pricePerDay: 68, equipment: [largeDroger(3), smallDroger(2), axiaalVentilator(4), kachel(2)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Installatie op locatie", "Verwarming inbegrepen", "Telefonische ondersteuning"] },

  // === PLEISTER + VERWARMING ===
  { id: "pleister-verw-100-2", title: "Pleister & Verwarming – 100m²", shortTitle: "Pleister+Verw 100m²", description: "Pleisterwerk drogen met verwarming tot 100m²", category: "Pleister & Verwarming", sizeLabel: "< 100m²", pricePerTwoWeeks: 449, pricePerDay: 32, equipment: [smallDroger(2), axiaalVentilator(1), kachel(1)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Installatie op locatie", "Verwarming inbegrepen", "Telefonische ondersteuning"] },
  { id: "pleister-verw-140-2", title: "Pleister & Verwarming – 140m²", shortTitle: "Pleister+Verw 140m²", description: "Pleisterwerk drogen met verwarming tot 140m²", category: "Pleister & Verwarming", sizeLabel: "< 140m²", pricePerTwoWeeks: 499, pricePerDay: 36, equipment: [smallDroger(2), axiaalVentilator(2), kachel(1)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Installatie op locatie", "Verwarming inbegrepen", "Telefonische ondersteuning"] },

  // === WATERSCHADE ===
  { id: "waterschade-100", title: "Waterschade – Gebouw kleiner dan 100m²", shortTitle: "Waterschade 100m²", description: "Urgent droogpakket voor waterschade tot 100m²", category: "Waterschade", sizeLabel: "< 100m²", pricePerTwoWeeks: 549, pricePerDay: 39, equipment: [smallDroger(3), axiaalVentilator(2), kachel(1)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Spoed levering mogelijk", "Installatie op locatie", "Telefonische ondersteuning"] },
  { id: "waterschade-140", title: "Waterschade – Gebouw kleiner dan 140m²", shortTitle: "Waterschade 140m²", description: "Urgent droogpakket voor waterschade tot 140m²", category: "Waterschade", sizeLabel: "< 140m²", pricePerTwoWeeks: 649, pricePerDay: 46, equipment: [smallDroger(4), axiaalVentilator(3), kachel(1)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Spoed levering mogelijk", "Installatie op locatie", "Telefonische ondersteuning"] },
  { id: "waterschade-180", title: "Waterschade – Gebouw kleiner dan 180m²", shortTitle: "Waterschade 180m²", description: "Urgent droogpakket voor waterschade tot 180m²", category: "Waterschade", sizeLabel: "< 180m²", pricePerTwoWeeks: 749, pricePerDay: 54, equipment: [largeDroger(3), axiaalVentilator(3), kachel(2)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Spoed levering mogelijk", "Installatie op locatie", "Telefonische ondersteuning"] },
  { id: "waterschade-220", title: "Waterschade – Gebouw kleiner dan 220m²", shortTitle: "Waterschade 220m²", description: "Urgent droogpakket voor waterschade tot 220m²", category: "Waterschade", sizeLabel: "< 220m²", pricePerTwoWeeks: 849, pricePerDay: 61, equipment: [largeDroger(4), axiaalVentilator(4), kachel(2)], includes: ["Gratis levering & ophaling", "Vochtmeting bij levering en ophaling", "Spoed levering mogelijk", "Installatie op locatie", "Telefonische ondersteuning"] },
];

export function getPackageById(id: string): Package | undefined {
  return allPackages.find((p) => p.id === id);
}

export function getPackageByAnswers(
  size: BuildingSize,
  dryingType: DryingType,
  plasterThickness: PlasterThickness | null,
  screedThickness: ScreedThickness | null,
  heating: HeatingOption
): Package | undefined {
  const needsHeating = heating === "nee"; // "nee" = user does NOT provide own heating, so we include it

  if (dryingType === "waterschade") {
    return allPackages.find((p) => p.id === `waterschade-${size}`);
  }

  if (dryingType === "pleisterwerk") {
    const thickness = plasterThickness || "2";
    if (needsHeating) {
      return allPackages.find((p) => p.id === `pleister-verw-${size}-${thickness}`) 
        || allPackages.find((p) => p.id === `pleister-${size}-${thickness}`);
    }
    return allPackages.find((p) => p.id === `pleister-${size}-${thickness}`);
  }

  if (dryingType === "chape") {
    const thickness = screedThickness || "6";
    if (needsHeating) {
      return allPackages.find((p) => p.id === `chape-verw-${size}-${thickness}`)
        || allPackages.find((p) => p.id === `chape-${size}-${thickness}`);
    }
    return allPackages.find((p) => p.id === `chape-${size}-${thickness}`);
  }

  if (dryingType === "beide") {
    const pt = plasterThickness || "2";
    const st = screedThickness || "6";
    if (needsHeating) {
      return allPackages.find((p) => p.id === `beide-verw-${size}-${pt}-${st}`)
        || allPackages.find((p) => p.id === `beide-${size}-${pt}-${st}`);
    }
    return allPackages.find((p) => p.id === `beide-${size}-${pt}-${st}`);
  }

  return undefined;
}

export function getAllPackages(): Package[] {
  return allPackages;
}
