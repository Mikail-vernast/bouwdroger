import type { Package } from "./packages.js";

/**
 * De teksten van de kant-en-klare pakketten in het Engels (Brits).
 *
 * Zelfde aanpak als `packages.fr.ts`: het portaal publiceert alleen
 * Nederlands, de pakketten volgen één vast patroon, dus vertalen we op dat
 * patroon. Wat niet herkend wordt, blijft Nederlands staan in plaats van te
 * verdwijnen. Alleen weergave: `id`, prijzen, aantallen en `type` blijven
 * onaangeroerd, en `api/order.ts` leest nooit uit deze module.
 *
 * Wordt aangeroepen via `pakketInTaal(pkg, "en")` in `packages.fr.ts`.
 */

const ZINNEN: Record<string, string> = {
  /* Categorieën */
  "Chape drogen": "Screed drying",
  "Pleisterwerk drogen": "Plaster drying",
  "Pleisterwerk + chape drogen": "Plaster + screed drying",
  "Waterschade drogen": "Water damage drying",

  /* Omschrijvingen */
  "Absorptiedroging na waterschade, met voorrang op de planning.":
    "Desiccant drying after water damage, with priority in the schedule.",
  "Chape drogen tot een veilige restvochtigheid, klaar voor vloerafwerking.":
    "Dry the screed to a safe residual moisture level, ready for floor finishing.",
  "Muren en vloer in één keer drogen, pleisterwerk en chape samen.":
    "Dry walls and floor in one go, plaster and screed together.",
  "Pleisterwerk drogen zodat schilderwerk en afwerking veilig kunnen starten.":
    "Dry the plaster so painting and finishing can start safely.",

  /* Wat altijd inbegrepen is */
  "Levering en installatie binnen 24 uur": "Delivery and installation within 24 hours",
  "Ophaling na afloop van de huurperiode": "Collection at the end of the hire period",
  "Plaatsing op de juiste posities door onze techniekers": "Placement in the right positions by our technicians",
  "Voor- en nameting van de restvochtigheid": "Residual moisture reading before and after",

  /* Toestellen */
  "Elektrische kachel": "Electric heater",
  "Small Bouwdroger": "Small construction dehumidifier",
  "Large Bouwdroger": "Large construction dehumidifier",
  "Axiaal Ventilator": "Axial fan",
  "Elektrische Kachel": "Electric heater",
};

const SPEC_SLEUTEL: Record<string, string> = {
  Bereik: "Coverage",
  Capaciteit: "Capacity",
  Luchtdebiet: "Airflow",
  Model: "Model",
  Standen: "Speeds",
  Thermostaat: "Thermostat",
  Vermogen: "Power",
  Gewicht: "Weight",
  Geluidsniveau: "Noise level",
  Diameter: "Diameter",
};

/** `tot 250 m³` → `up to 250 m³`, `50L/dag` → `50 l/day`, `5.300 m³/uur` → `5,300 m³/h`, `3,30 kW` → `3.30 kW`. */
function specWaarde(v: string): string {
  if (v === "ingebouwd") return "built in";
  if (v === "Ja") return "Yes";
  return v
    .replace(/^tot\s*(\d[\d.,]*)\s*m([²³])/i, "up to $1 m$2")
    .replace(/(\d)\s*L\/dag/, "$1 l/day")
    .replace(/m³\/uur/, "m³/h")
    .replace(/(\d)\.(\d{3})/, "$1,$2")
    .replace(/(\d),(\d{1,2})\b(?!\d)/, "$1.$2")
    .replace(/(\d)(W|mm|kg)\b/, "$1 $2");
}

const WERK_TITEL: Record<string, string> = {
  "Pleisterwerk + chape drogen": "plaster + screed",
  "Waterschade drogen": "water damage",
};

const WERK_KORT: Record<string, string> = {
  Chape: "Screed",
  "Pleisterwerk + chape": "Plaster + screed",
  Pleisterwerk: "Plaster",
  Waterschade: "Water damage",
};

/** "Gebouw tot 100 m²" → "Building up to 100 m²". */
function maatLabel(nl: string): string {
  const m = /^(Gebouw|Ruimte) tot (\d+) m²$/.exec(nl);
  if (!m) return nl;
  return `${m[1] === "Gebouw" ? "Building" : "Room"} up to ${m[2]} m²`;
}

/** "Gebouw tot 100 m², pleisterdikte 2 cm" → "Building up to 100 m², 2 cm plaster". */
function titel(nl: string): string {
  const m = /^((?:Gebouw|Ruimte) tot \d+ m²), (.+)$/.exec(nl);
  if (!m) return nl;
  const maat = maatLabel(m[1]);
  const rest = m[2];
  const chape = /^chape (\d+) cm$/.exec(rest);
  if (chape) return `${maat}, ${chape[1]} cm screed`;
  const pleister = /^pleisterdikte (\d+) cm$/.exec(rest);
  if (pleister) return `${maat}, ${pleister[1]} cm plaster`;
  const werk = WERK_TITEL[rest];
  return werk ? `${maat}, ${werk}` : nl;
}

/** "Pleisterwerk + chape 100 m²" → "Plaster + screed 100 m²". */
function kort(nl: string): string {
  const m = /^(.+) (\d+ m²)$/.exec(nl);
  const werk = m && WERK_KORT[m[1]];
  return werk ? `${werk} ${m[2]}` : nl;
}

const zin = (nl: string) => ZINNEN[nl] ?? nl;

/** Een kopie van het pakket met zijn teksten in het Engels; zie `pakketInTaal`. */
export function pakketInEngels(pkg: Package): Package {
  return {
    ...pkg,
    title: titel(pkg.title),
    shortTitle: kort(pkg.shortTitle),
    description: zin(pkg.description),
    category: zin(pkg.category),
    sizeLabel: maatLabel(pkg.sizeLabel),
    includes: pkg.includes.map(zin),
    equipment: pkg.equipment.map((e) => ({
      ...e,
      name: zin(e.name),
      specs: Object.fromEntries(Object.entries(e.specs).map(([k, v]) => [SPEC_SLEUTEL[k] ?? k, specWaarde(v)])),
    })),
  };
}

/** Engelse tegenhanger van `packageMetaTitle`. */
export function packageMetaTitleEn(pkgEn: Package): string {
  return `${pkgEn.shortTitle} drying package hire`;
}

/** Engelse tegenhanger van `equipmentSummary`: "2× Boost, 1× Highflow". */
export function equipmentSummaryEn(pkgEn: Package): string {
  return pkgEn.equipment.map((item) => `${item.count}× ${item.name}`).join(", ");
}
