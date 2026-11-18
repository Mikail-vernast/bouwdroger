import type { Package } from "./packages.js";
import type { Taal } from "../i18n/taal.js";

/**
 * De teksten van de kant-en-klare pakketten in het Frans.
 *
 * Die teksten komen uit het portaal (`TARIEVEN.fixed`) en zijn daar alleen in
 * het Nederlands. Het portaal een tweede taal laten beheren zou een wijziging
 * aan het tarievencontract zijn; de pakketten volgen echter één vast patroon
 * ("Gebouw tot 100 m², chape 5 cm"), dus vertalen we hier op dat patroon.
 *
 * Wat niet herkend wordt, blijft Nederlands staan in plaats van te verdwijnen:
 * een nieuwe omschrijving in het portaal geeft zo hoogstens een Nederlandse
 * zin op een Franse pagina, nooit een lege. Vul dan de tabel hieronder aan.
 *
 * Alleen weergave. `id`, prijzen, aantallen en `type` blijven onaangeroerd, en
 * wat naar `api/order.ts` gaat leest nooit uit deze module.
 */

const ZINNEN: Record<string, string> = {
  /* Categorieën */
  "Chape drogen": "Séchage de chape",
  "Pleisterwerk drogen": "Séchage de plafonnage",
  "Pleisterwerk + chape drogen": "Séchage plafonnage + chape",
  "Waterschade drogen": "Séchage après dégâts des eaux",

  /* Omschrijvingen */
  "Absorptiedroging na waterschade, met voorrang op de planning.":
    "Séchage par adsorption après dégâts des eaux, en priorité dans le planning.",
  "Chape drogen tot een veilige restvochtigheid, klaar voor vloerafwerking.":
    "Sécher la chape jusqu'à une humidité résiduelle sûre, prête pour le revêtement de sol.",
  "Muren en vloer in één keer drogen, pleisterwerk en chape samen.":
    "Sécher murs et sol en une fois, plafonnage et chape ensemble.",
  "Pleisterwerk drogen zodat schilderwerk en afwerking veilig kunnen starten.":
    "Sécher le plafonnage pour que la peinture et la finition puissent commencer en toute sécurité.",

  /* Wat altijd inbegrepen is */
  "Levering en installatie binnen 24 uur": "Livraison et installation sous 24 heures",
  "Ophaling na afloop van de huurperiode": "Reprise à la fin de la période de location",
  "Plaatsing op de juiste posities door onze techniekers":
    "Placement aux bons endroits par nos techniciens",
  "Voor- en nameting van de restvochtigheid": "Mesure d'humidité résiduelle avant et après",

  /* Toestellen */
  "Elektrische kachel": "Chauffage électrique",
  "Small Bouwdroger": "Déshumidificateur de chantier Small",
  "Large Bouwdroger": "Déshumidificateur de chantier Large",
  "Axiaal Ventilator": "Ventilateur axial",
  "Elektrische Kachel": "Chauffage électrique",
};

const SPEC_SLEUTEL: Record<string, string> = {
  Bereik: "Portée",
  Capaciteit: "Capacité",
  Luchtdebiet: "Débit d'air",
  Model: "Modèle",
  Standen: "Vitesses",
  Thermostaat: "Thermostat",
  Vermogen: "Puissance",
  Gewicht: "Poids",
  Geluidsniveau: "Niveau sonore",
  Diameter: "Diamètre",
};

/** `tot 250 m³` → `jusqu'à 250 m³`, `50L/dag` → `50 l/jour`, `5.300 m³/uur` → `5 300 m³/h`. */
function specWaarde(v: string): string {
  if (v === "ingebouwd") return "intégré";
  if (v === "Ja") return "Oui";
  return v
    .replace(/^tot\s*(\d[\d.,]*)\s*m([²³])/i, "jusqu'à $1 m$2")
    .replace(/(\d)\s*L\/dag/, "$1 l/jour")
    .replace(/m³\/uur/, "m³/h")
    .replace(/(\d)\.(\d{3})/, "$1 $2")
    .replace(/(\d)(W|mm|kg)\b/, "$1 $2");
}

const WERK_TITEL: Record<string, string> = {
  "Pleisterwerk + chape drogen": "plafonnage + chape",
  "Waterschade drogen": "dégâts des eaux",
};

const WERK_KORT: Record<string, string> = {
  Chape: "Chape",
  "Pleisterwerk + chape": "Plafonnage + chape",
  Pleisterwerk: "Plafonnage",
  Waterschade: "Dégâts des eaux",
};

/** "Gebouw tot 100 m²" → "Bâtiment jusqu'à 100 m²". */
function maatLabel(nl: string): string {
  const m = /^(Gebouw|Ruimte) tot (\d+) m²$/.exec(nl);
  if (!m) return nl;
  return `${m[1] === "Gebouw" ? "Bâtiment" : "Pièce"} jusqu'à ${m[2]} m²`;
}

/** "Gebouw tot 100 m², pleisterdikte 2 cm" → "Bâtiment jusqu'à 100 m², plafonnage de 2 cm". */
function titel(nl: string): string {
  const m = /^((?:Gebouw|Ruimte) tot \d+ m²), (.+)$/.exec(nl);
  if (!m) return nl;
  const maat = maatLabel(m[1]);
  const rest = m[2];
  const chape = /^chape (\d+) cm$/.exec(rest);
  if (chape) return `${maat}, chape de ${chape[1]} cm`;
  const pleister = /^pleisterdikte (\d+) cm$/.exec(rest);
  if (pleister) return `${maat}, plafonnage de ${pleister[1]} cm`;
  const werk = WERK_TITEL[rest];
  return werk ? `${maat}, ${werk}` : nl;
}

/** "Pleisterwerk + chape 100 m²" → "Plafonnage + chape 100 m²". */
function kort(nl: string): string {
  const m = /^(.+) (\d+ m²)$/.exec(nl);
  const werk = m && WERK_KORT[m[1]];
  return werk ? `${werk} ${m[2]}` : nl;
}

const zin = (nl: string) => ZINNEN[nl] ?? nl;

/**
 * Een kopie van het pakket met zijn teksten in `taal`. Dezelfde volgorde en
 * lengte van `equipment` als het origineel, zodat een component het origineel
 * kan blijven gebruiken voor opzoekingen (foto per toestelnaam) en deze kopie
 * voor wat er op het scherm komt.
 */
export function pakketInTaal(pkg: Package, taal: Taal): Package {
  if (taal !== "fr") return pkg;
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
      specs: Object.fromEntries(
        Object.entries(e.specs).map(([k, v]) => [SPEC_SLEUTEL[k] ?? k, specWaarde(v)]),
      ),
    })),
  };
}

/** Franse tegenhanger van `packageMetaTitle`. */
export function packageMetaTitleFr(pkgFr: Package): string {
  return `${pkgFr.shortTitle}, location d'un pack de séchage`;
}

/** Franse tegenhanger van `equipmentSummary`: "2× Boost, 1× Highflow". */
export function equipmentSummaryFr(pkgFr: Package): string {
  return pkgFr.equipment.map((item) => `${item.count}× ${item.name}`).join(", ");
}
