import { TARIEVEN } from "./tarieven.js";

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

/**
 * Het stuk van de titel dat deze variant onderscheidt van de pakketten voor
 * dezelfde woninggrootte — meestal de laagdikte. Pakketten die als enige voor
 * hun oppervlakte bestaan hebben zo'n onderscheid niet nodig.
 */
function variantLabel(pkg: Package): string | null {
  const parts = pkg.title.split("–").map((part) => part.trim());
  return parts.length > 2 ? parts[parts.length - 1] : null;
}

/**
 * De paginatitel van een pakket. Moet de variant benoemen: drie pakketten voor
 * dezelfde woning verschillen enkel in laagdikte, en zonder dat onderscheid
 * mikken drie pagina's op precies dezelfde zoekopdracht.
 */
export function packageMetaTitle(pkg: Package): string {
  const variant = variantLabel(pkg);
  return variant
    ? `${pkg.shortTitle} · ${variant.toLowerCase()} — droogpakket huren`
    : `${pkg.shortTitle} — droogpakket huren`;
}

/**
 * "2× small droger, 1× axiaal ventilator" — kort genoeg om samen met prijs en
 * leveringsvoorwaarden binnen een meta description van 160 tekens te blijven.
 */
export function equipmentSummary(pkg: Package): string {
  return pkg.equipment
    .map((item) => `${item.count}× ${item.name.toLowerCase().replace("bouwdroger", "droger")}`)
    .join(", ");
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

/**
 * De 42 kant-en-klare pakketten komen sinds 2026-08-07 uit het portaal (tab
 * Pakketten → Tarieven bewerken). Ze stonden hier als letterlijke lijst; elke
 * prijswijziging vroeg toen een codewijziging en een deploy.
 *
 * De toestellijst komt mee uit de momentopname, inclusief de specs die de
 * pakketpagina toont.
 */
const allPackages: Package[] = TARIEVEN.fixed.map((p) => ({
  id: p.id,
  title: p.title,
  shortTitle: p.shortTitle,
  description: p.description,
  category: p.category,
  sizeLabel: p.sizeLabel,
  pricePerTwoWeeks: Number(p.pricePerTwoWeeks),
  pricePerDay: Number(p.pricePerDay),
  equipment: p.equipment.map((e) => ({
    name: e.name,
    type: e.type,
    count: Number(e.count),
    specs: { ...e.specs },
  })),
  includes: [...p.includes],
}));

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
