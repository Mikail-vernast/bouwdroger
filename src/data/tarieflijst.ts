/**
 * De publieke tarieflijst — één rij bedragen die overal hetzelfde is.
 *
 * Op /prijzen, /nieuwbouw, /waterschade en /renovatie stond tot nu toe een
 * verzonnen reeks ("DF 200", "DF 400", "DF 800") met `€ XX` als prijs. Dat zijn
 * vier indexeerbare pagina's die in hun titel een prijs beloven en er geen
 * geven — voor een zoekmachine dun, voor een AI-assistent onciteerbaar, en voor
 * een bezoeker die "wat kost een bouwdroger huren" intikte simpelweg fout.
 *
 * Wat hier staat, is afgeleid van `PRODUCTS` in `verhuur.ts`: dezelfde
 * toestellen, dezelfde dagprijzen die al op /verhuur/toestel/* gepubliceerd
 * staan en waarop de boekingsmodule rekent. Eén bron dus — een prijs die hier
 * verschijnt, kan niet afwijken van wat de klant straks betaalt.
 *
 * Alle bedragen zijn exclusief btw, net als in de boekingsmodule.
 */
import { PRODUCTS } from "./verhuur.js";

/** De toestellen die op de publieke pagina's getoond worden, in gamma-volgorde. */
const PUBLIC_KEYS = ["ttk170", "ttk350", "ttk650", "ttv4500", "teddh30"] as const;

/** Enkel de ontvochtigers — dat is wat "een bouwdroger huren" betekent. */
const DRYER_KEYS = ["ttk170", "ttk350", "ttk650"] as const;

/** De huurperiodes die de prijstabel toont, in dagen. */
export const RENTAL_WEEKS = [1, 2, 4] as const;

export interface Tarief {
  /** Sleutel in `PRODUCTS`, tevens de slug van /verhuur/toestel/<key>. */
  key: string;
  /** Volledige naam, zoals op de detailpagina. */
  name: string;
  /** Korte naam voor tabellen en kaarten. */
  short: string;
  /** Bijvoorbeeld "Condensontvochtiger". */
  type: string;
  /** Eén zin die zegt voor wie dit toestel is. */
  summary: string;
  /** Kort label uit het gamma, bijvoorbeeld "Meest gehuurd". */
  badge: string;
  /** Huurprijs per dag in euro, exclusief btw. */
  perDay: number;
  /** Vochtafvoer in liter per 24 u; 0 voor ventilator en kachel. */
  litersPerDay: number;
  /** Aanbevolen ruimtevolume in m³; 0 wanneer niet van toepassing. */
  volume: number;
  /** Pad naar de detailpagina. */
  path: string;
}

function toTarief(key: string): Tarief {
  const p = PRODUCTS[key];
  const spec = (label: string) => p.key.find(([l]) => l === label)?.[1] ?? "0";
  return {
    key,
    name: p.name,
    short: p.short,
    type: p.type,
    summary: p.sum,
    badge: p.badge,
    perDay: p.day,
    litersPerDay: Number(spec("Vochtafvoer").replace(/\s/g, "")),
    volume: Number(spec("Bereik").replace(/\s/g, "")),
    path: `/verhuur/toestel/${key}`,
  };
}

export const TARIEVEN_PUBLIEK: Tarief[] = PUBLIC_KEYS.map(toTarief);

/** De drie ontvochtigers, klein naar groot — de kern van elke prijstabel. */
export const DROGERS: Tarief[] = DRYER_KEYS.map(toTarief);

/**
 * Huurprijs voor een aantal weken.
 *
 * Losse toestellen rekenen per dag, zonder staffel — precies zoals
 * `VerhuurToestelPage` het berekent (`day × dagen`). Er wordt hier dus niets
 * bijgeteld of afgetrokken; het is dezelfde som, alleen vooraf getoond.
 */
export function priceForWeeks(t: Tarief, weeks: number): number {
  return t.perDay * weeks * 7;
}

/** "€ 126" — Belgische notatie, zonder cijfers na de komma. */
export function euro(amount: number): string {
  return `€ ${amount.toLocaleString("nl-BE")}`;
}

/**
 * Kaartgegevens voor de drie ontvochtigers, zoals `MachineCard` ze verwacht.
 *
 * Op /nieuwbouw, /waterschade en /renovatie stond hiervoor telkens een eigen,
 * met de hand onderhouden lijstje met dezelfde verzonnen toestellen erin. Nu
 * staat het één keer hier, zodat een prijswijziging in het portaal ook op die
 * pagina's doorloopt in plaats van er stil achter te blijven.
 *
 * `price` is bewust zonder euroteken: `MachineCard` zet dat er zelf voor.
 */
export interface DrogerKaart {
  key: string;
  name: string;
  volume: string;
  desc: string;
  badge: string | null;
  highlight: boolean;
  path: string;
  /** Prijs per week, als kaal getal. */
  weekPrice: string;
  tiers: { label: string; price: string }[];
}

const DESC_FALLBACK: Record<string, string> = {
  ttk170: "Eén kamer, een appartement of een kleine renovatie",
  ttk350: "Een standaard gezinswoning of grote renovatie",
  ttk650: "Grote werven, ruime kelders en acute waterschade",
};

export const DROGER_KAARTEN: DrogerKaart[] = DROGERS.map((t) => ({
  key: t.key,
  name: t.short,
  volume: `Tot ${t.volume} m³ · ${t.litersPerDay} L/dag`,
  desc: DESC_FALLBACK[t.key] ?? t.summary,
  badge: t.badge || null,
  highlight: t.badge === "Meest gehuurd",
  path: t.path,
  weekPrice: String(priceForWeeks(t, 1)),
  tiers: RENTAL_WEEKS.map((w) => ({
    label: `${w} ${w === 1 ? "week" : "weken"}`,
    price: String(priceForWeeks(t, w)),
  })),
}));

/** De laagste en hoogste dagprijs in het gamma, voor `priceRange` en samenvattingen. */
export const DAY_PRICE_MIN = Math.min(...TARIEVEN_PUBLIEK.map((t) => t.perDay));
export const DAY_PRICE_MAX = Math.max(...TARIEVEN_PUBLIEK.map((t) => t.perDay));
