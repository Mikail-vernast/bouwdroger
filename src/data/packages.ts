import { TARIEVEN } from "./tarieven.js";
import type { ImageRule } from "./verhuur.js";

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
  /**
   * Een toestel dat pas meegaat als de klant erom vraagt, en dus niet in het
   * pakkettarief zit.
   *
   * Gebeurt met de kachels: stap 4 van de calculator vraagt of de klant zelf
   * verwarmt, en pas bij "Nee, voeg kachels toe" horen ze erbij — tegen
   * meerprijs, zoals elk toestel dat iemand bovenop een pakket zet. Ontbreekt de
   * vlag, dan hoort het toestel gewoon bij het pakket.
   */
  optional?: boolean;
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
  /**
   * De fotogalerij, beheerd in het Vernast-portaal. Leeg zolang er nog geen
   * tarieven mét galerij gepubliceerd zijn; de pakketpagina valt dan terug op
   * haar eigen lijst per categorie.
   */
  images: string[];
  /**
   * Een andere hoofdfoto zodra de samenstelling afwijkt: de eerste passende
   * regel wint. Bestaat omdat de banners hun tellingen ín het beeld dragen —
   * komen er kachels bij, dan klopt de standaardfoto niet meer.
   */
  imgRules: ImageRule[];
  /**
   * De sleutels waarop de calculator een pakket opzoekt: oppervlakte, werksoort
   * en materiaaldikte. Optioneel in het type omdat een oudere momentopname ze
   * kan missen; de calculator draait er volledig op, dus zonder deze velden
   * valt er niets te kiezen.
   */
  sqm?: number;
  workType?: WorkType;
  /** null bij "beide" en waterschade: die kennen geen dikte. */
  thicknessCm?: number | null;
  /**
   * De huurtermijn in weken. Volgt uit de materiaaldikte — chape 5/6/7 cm loopt
   * 2/3/4 weken — en is dus geen keuze van de klant.
   */
  rentalWeeks?: number;
}

/** Werksoorten zoals het portaal ze kent. `pleister`, niet `pleisterwerk`. */
export type WorkType = "chape" | "pleister" | "beide" | "waterschade";

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
    "Gewicht": "15 kg",
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
    "Gewicht": "10 kg",
  },
});

/** Leest een optioneel veld uit de momentopname; oudere versies missen ze. */
function optioneel<T>(p: unknown, key: string): T | undefined {
  const waarde = (p as Record<string, unknown>)[key];
  return waarde === undefined || waarde === null ? undefined : (waarde as T);
}

/**
 * De kant-en-klare pakketten komen sinds 2026-08-07 uit het portaal (tab
 * Pakketten). Ze stonden hier als letterlijke lijst; elke prijswijziging vroeg
 * toen een codewijziging en een deploy.
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
    optional: (e as { optional?: boolean }).optional === true,
  })),
  includes: [...p.includes],
  images: [...(((p as { images?: readonly string[] }).images) ?? [])],
  imgRules: [...(((p as { imgRules?: readonly ImageRule[] }).imgRules) ?? [])],
  sqm: optioneel<number>(p, "sqm"),
  workType: optioneel<WorkType>(p, "workType"),
  thicknessCm: optioneel<number>(p, "thicknessCm") ?? null,
  rentalWeeks: optioneel<number>(p, "rentalWeeks"),
}));

export function getPackageById(id: string): Package | undefined {
  return allPackages.find((p) => p.id === id);
}

/**
 * De catalogus, gegroepeerd zoals de calculator ze bevraagt.
 *
 * Alles hieronder wordt uit de pakketten zelf afgeleid in plaats van uit een
 * lijst constanten. Dat is het hele punt: de shop bepaalt welke maten en diktes
 * er bestaan, dus mag de calculator er geen enkele aanbieden die er niet is.
 * Stond hier een vaste lijst, dan liep die weer uiteen — zo verkocht de shop
 * chape tot 7 cm terwijl de liniaal 8 cm aanbood, en bestond er voor die vraag
 * dus geen pakket.
 */
const metSleutels = allPackages.filter(
  (p) => p.sqm !== undefined && p.workType !== undefined,
);

/** De oppervlaktes waarvoor pakketten bestaan, oplopend. */
export function packageSizes(): number[] {
  return [...new Set(metSleutels.map((p) => p.sqm as number))].sort((a, b) => a - b);
}

/**
 * De diktes die voor deze werksoort bestaan, oplopend. Leeg bij "beide" en
 * waterschade — daar hangt het pakket alleen aan de oppervlakte.
 */
export function packageThicknesses(workType: WorkType): number[] {
  const uit = metSleutels
    .filter((p) => p.workType === workType && typeof p.thicknessCm === "number")
    .map((p) => p.thicknessCm as number);
  return [...new Set(uit)].sort((a, b) => a - b);
}

/**
 * Het pakket voor een antwoordcombinatie, of `undefined` als het niet bestaat.
 *
 * Geeft bewust niets terug in plaats van het dichtstbijzijnde pakket: een klant
 * die 7 cm chape opgeeft en stilzwijgend het pakket van 5 cm krijgt, huurt te
 * weinig capaciteit voor te kort. De oproeper hoort met een lege uitkomst om te
 * gaan, niet wij met een gok.
 */
export function findPackage(
  sqm: number,
  workType: WorkType,
  thicknessCm: number | null,
): Package | undefined {
  return metSleutels.find(
    (p) =>
      p.sqm === sqm &&
      p.workType === workType &&
      (thicknessCm === null
        ? p.thicknessCm === null
        : p.thicknessCm === thicknessCm),
  );
}

/** De oude vragenreeks van `/levering`, nu op dezelfde catalogus. */
export function getPackageByAnswers(
  size: BuildingSize,
  dryingType: DryingType,
  plasterThickness: PlasterThickness | null,
  screedThickness: ScreedThickness | null,
  // Verwarming bepaalt het pakket niet meer: de shop kent geen enkel
  // verwarmingspakket, kachels zijn daar een los toestel.
  _heating: HeatingOption,
): Package | undefined {
  const sqm = Number(size);
  if (dryingType === "waterschade") return findPackage(sqm, "waterschade", null);
  if (dryingType === "beide") return findPackage(sqm, "beide", null);
  if (dryingType === "pleisterwerk") {
    return findPackage(sqm, "pleister", Number(plasterThickness || "2"));
  }
  if (dryingType === "chape") {
    return findPackage(sqm, "chape", Number(screedThickness || "6"));
  }
  return undefined;
}

export function getAllPackages(): Package[] {
  return allPackages;
}
