/**
 * Van een postcode naar een zone, een tarief en de dagen waarop we daar rijden.
 *
 * Relatief geïmporteerd met expliciete `.js`: dit draait ook in de serverless
 * functies in /api, en die staan buiten de Vite-alias. De browser rekent
 * hiermee wat de bezoeker ziet, `api/checkout.ts` rekent hetzelfde opnieuw —
 * het bedrag uit de browser telt nergens mee.
 */
import {
  CORRIDORS,
  INHAALDAG,
  WERKDAGEN,
  ZONES,
  type Corridor,
  type Land,
  type Zone,
} from "../data/levering.js";
import { LEVERREGIOS, LEVERZONES } from "../data/leverzones.js";

export type { Land, Zone, Corridor };

/**
 * Maakt van ruwe invoer een postcode van vier cijfers, of `null`.
 *
 * Nederlandse postcodes zijn "4811 AB" en Belgische soms "B-2630"; de zone
 * hangt aan de vier cijfers. Alles wat daar niet uit op te maken valt levert
 * `null` op — dan vraagt de pagina het opnieuw in plaats van een zone te gokken.
 */
export function normaliseerPostcode(raw: unknown): string | null {
  const cijfers = String(raw ?? "")
    .trim()
    .replace(/^[A-Za-z]{1,2}[-\s]?/, "")
    .match(/^(\d{4})/);
  return cijfers ? cijfers[1] : null;
}

export function isLand(raw: unknown): raw is Land {
  return raw === "BE" || raw === "NL";
}

export function zoneNr(nr: number): Zone {
  return ZONES.find((z) => z.nr === nr) ?? ZONES[ZONES.length - 1];
}

export function corridorNr(nr: number): Corridor {
  return CORRIDORS.find((c) => c.nr === nr) ?? CORRIDORS[0];
}

export interface Leverzone {
  zone: Zone;
  corridor: Corridor;
  postcode: string;
  land: Land;
}

/**
 * De zone van een postcode.
 *
 * `LEVERZONES` is run-length gecodeerd: elke regel geldt vanaf haar postcode
 * tot de volgende. Een postcode die er niet letterlijk in staat — een nieuwe,
 * of een die GeoNames niet kent — erft dus de zone van de postcode vlak
 * eronder. In een land waar postcodes per streek genummerd zijn is dat het
 * juiste antwoord, en in het slechtste geval zit hij één zone naast de
 * werkelijkheid in plaats van helemaal nergens.
 *
 * Een postcode onder de laagste regel bestaat niet (België begint bij 1000,
 * Nederland bij 1011) en levert `null` op.
 */
export function zoneVoor(land: unknown, postcode: unknown): Leverzone | null {
  if (!isLand(land)) return null;
  const pc = normaliseerPostcode(postcode);
  if (!pc) return null;

  const runs = LEVERZONES[land];
  let lo = 0;
  let hi = runs.length - 1;
  let gevonden = -1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (runs[mid][0] <= pc) {
      gevonden = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  if (gevonden < 0) return null;

  const [, zn, cn] = runs[gevonden];
  return { zone: zoneNr(zn), corridor: corridorNr(cn), postcode: pc, land };
}

/** Levert dit adres een eigen rit op, of verwijzen we naar het afhaalpunt? */
export function levertWij(zone: Zone): boolean {
  return zone.tarief !== null;
}

/**
 * De transportvergoeding excl. btw. `null` wanneer we er niet zelf leveren —
 * de aanroeper hoort dat af te handelen en niet stil op 0 te vallen.
 */
export function transportTarief(zone: Zone, spoed = false): number | null {
  if (zone.tarief === null) return null;
  if (!spoed) return zone.tarief;
  if (zone.spoed === null) return null;
  return zone.tarief + zone.spoed;
}

/**
 * Op welke dagen van de week we in deze zone leveren.
 *
 * Dichtbij elke werkdag. Vanaf 50 km de dag waarop we die corridor rijden, met
 * vrijdag erbij zolang de rit binnen 90 km blijft — verder dan dat kost een
 * tweede dag per week meer dan de bundeling opbrengt.
 */
export function ritdagen(zone: Zone, corridor: Corridor): number[] {
  switch (zone.ritme) {
    case "dagelijks":
      return [...WERKDAGEN];
    case "twee-dagen":
      return corridor.dag === INHAALDAG
        ? [corridor.dag]
        : [corridor.dag, INHAALDAG].sort((a, b) => a - b);
    case "een-dag":
      return [corridor.dag];
    default:
      return [];
  }
}

const DAGNAMEN = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"];

/** "dinsdag" of "woensdag en vrijdag" — voor de tekst naast de kalender. */
export function ritdagenTekst(zone: Zone, corridor: Corridor): string {
  const namen = ritdagen(zone, corridor).map((d) => DAGNAMEN[d]);
  if (namen.length === 0) return "";
  if (namen.length >= WERKDAGEN.length) return "elke werkdag";
  if (namen.length === 1) return namen[0];
  return namen.slice(0, -1).join(", ") + " en " + namen[namen.length - 1];
}

/** De regel in de prijsopbouw: "Transport zone 5 · 90 – 120 km". */
export function transportLabel(zone: Zone, spoed = false): string {
  return `Transport zone ${zone.nr} · ${zone.band}${spoed ? " · spoedrit" : ""}`;
}

/**
 * Tot hoe ver levering in de pakketprijs zit — de bovengrens van de laatste
 * zone zonder tarief. Afgeleid en niet overgetypt: verschuif je een zonegrens,
 * dan verspringt de voetnoot op elke pagina mee.
 */
export const GRATIS_TOT_KM: number =
  ZONES.filter((z) => z.tarief === 0).at(-1)?.tot ?? 0;

/** Het laagste tarief dat we buiten die grens aanrekenen, excl. btw. */
export const LAAGSTE_TARIEF: number = Math.min(
  ...ZONES.map((z) => z.tarief).filter((t): t is number => typeof t === "number" && t > 0),
);

/**
 * De asterisk bij "gratis levering", en wat eronder hoort te staan.
 *
 * Stond jarenlang zonder voorbehoud op de homepage, de pakketkaarten en de
 * calculator: "Gratis levering & ophaling". Dat klopt binnen vijftig kilometer
 * en nergens daarbuiten — en een klant in Namen die dat leest en pas bij het
 * afrekenen € 139 ziet staan, voelt zich terecht bekocht. Vandaar één tekst die
 * overal hetzelfde zegt, afgeleid uit de zones zelf.
 */
export const GRATIS_LEVERING_KOP = "Gratis levering & ophaling*";

export const GRATIS_LEVERING_VOETNOOT =
  `* Gratis binnen ${GRATIS_TOT_KM} km van ons magazijn in Aartselaar — Antwerpen, ` +
  `Mechelen, Brussel, het Waasland, Leuven en de Kempen. Daarbuiten rekenen wij een ` +
  `transportvergoeding vanaf € ${LAAGSTE_TARIEF} excl. btw voor levering én ophaling ` +
  `samen. Het exacte bedrag hangt af van uw postcode en staat in de boeking, vóór u betaalt.`;

/** Korte variant, voor een kaart waar geen plaats is voor de volle zin. */
export const GRATIS_LEVERING_KORT = `* binnen ${GRATIS_TOT_KM} km; daarbuiten vanaf € ${LAAGSTE_TARIEF}`;

/**
 * De postcode reist met de configuratie mee door de trechter.
 *
 * De calculator vraagt hem als laatste stap, de pakketpagina toont er de
 * transportvergoeding mee, en de boekingswizard vult hem voor. Zonder dit
 * stond de prijs op /verhuur/pakket zonder transport en zag de bezoeker het
 * bedrag pas twee stappen later verschijnen — precies het soort verrassing
 * waar "transparante prijzen zonder verrassingen" naast staat.
 *
 * Twee korte sleutels, want ze komen naast de pakketconfiguratie in dezelfde
 * adresbalk te staan.
 */
export function leverzoneNaarQuery(land: Land | null, postcode: string | null): string {
  const pc = normaliseerPostcode(postcode);
  if (!pc || !isLand(land)) return "";
  return `&land=${land}&pc=${pc}`;
}

/** Leest `land` en `pc` terug uit de adresbalk; `null` wanneer er niets bruikbaars staat. */
export function leverzoneUitQuery(qs: URLSearchParams): Leverzone | null {
  return zoneVoor(qs.get("land"), qs.get("pc"));
}

/**
 * De leveringsbelofte van een regiopagina, uit de gemeten zones van die regio.
 *
 * Stond eerder op een handmatig vlaggetje `opAanvraag` in `regio-slugs.ts`:
 * aan voor Wallonië en Nederland, uit voor Vlaanderen. Daardoor beloofde
 * /bouwdroger-huren-west-vlaanderen "levering binnen 24 uur" terwijl Brugge in
 * zone 5 ligt en er € 139 transport geldt, en /bouwdroger-huren-limburg
 * hetzelfde voor Hasselt op 87 km.
 *
 * Nu komt de tekst uit `LEVERREGIOS`, dezelfde meting als het tarief in de
 * boeking. Drie gevallen:
 *
 *  - de hele regio gratis  → "levering binnen 24 uur", en dat klopt dan ook
 *  - deels gratis          → "vanaf € X, afhankelijk van uw postcode"
 *  - nergens gratis        → "vanaf € X" zonder voorbehoud
 */
export interface RegioLevering {
  /** Laagste tarief in die regio, `0` als er gratis geleverd wordt. */
  vanaf: number | null;
  /** Hoogste tarief, `null` wanneer de verste hoek een prijs op maat krijgt. */
  tot: number | null;
  minKm: number;
  maxKm: number;
  /** Korte regel voor een badge: "Levering binnen 24 uur" of "Transport vanaf € 79". */
  badge: string;
  /** Volle zin voor de inleiding van de regiopagina. */
  zin: string;
}

export function regioLevering(slug: string): RegioLevering | null {
  const regio = LEVERREGIOS[slug];
  if (!regio) return null;

  const zones = regio.zones.map((nr) => zoneNr(nr));
  const tarieven = zones.map((z) => z.tarief);
  const vanaf = tarieven[0];
  const tot = tarieven[tarieven.length - 1];
  const opMaat = tarieven.some((t) => t === null);
  const laagsteBetaald = tarieven.find((t): t is number => typeof t === "number" && t > 0) ?? null;

  let badge: string;
  let zin: string;
  if (vanaf === 0 && tot === 0) {
    badge = "Levering binnen 24 uur";
    zin = `Levering, plaatsing en ophaling zitten hier in de pakketprijs; wij rijden er elke werkdag naartoe.`;
  } else if (vanaf === 0) {
    /*
      De helft van Antwerpen en Vlaams-Brabant ligt binnen de gratis zone.
      "Transport vanaf € 79" verkoopt dat te laag: wat er klopt én telt is dat
      levering daar inbegrepen is, en pas verderop iets kost.
    */
    badge = `Levering inbegrepen tot ${GRATIS_TOT_KM} km`;
    zin =
      `Dichtbij — ${regio.minKm} km van ons magazijn — zit levering en ophaling in de pakketprijs. ` +
      `Verderop, tot ${regio.maxKm} km, komt er een transportvergoeding bij vanaf ${euroKort(laagsteBetaald)} excl. btw` +
      `${opMaat ? ", en in de verste hoek maken wij de prijs per order" : ""}. ` +
      `Uw postcode bepaalt het bedrag, en u ziet het in de boeking vóór u betaalt.`;
  } else if (laagsteBetaald === null) {
    badge = "Transportprijs op maat";
    zin =
      `Deze regio ligt ${regio.minKm} tot ${regio.maxKm} km van ons magazijn. Wij leveren er, maar ` +
      `de transportprijs maken wij per order: u stelt uw pakket samen en krijgt binnen één werkdag ` +
      `een vaste prijs.`;
  } else {
    badge = `Transport vanaf ${euroKort(laagsteBetaald)}`;
    zin =
      `Deze regio ligt ${regio.minKm} tot ${regio.maxKm} km van ons magazijn. De huurprijs is ` +
      `dezelfde als overal; daarbovenop komt een transportvergoeding vanaf ${euroKort(laagsteBetaald)} excl. btw ` +
      `voor de rit heen en de ophaling terug` +
      `${opMaat ? ", en in de verste hoek maken wij de prijs per order" : ""}. ` +
      `Uw postcode bepaalt het bedrag, en u ziet het in de boeking vóór u betaalt.`;
  }

  return { vanaf, tot, minKm: regio.minKm, maxKm: regio.maxKm, badge, zin };
}

/** "€ 79" — zonder centen, want deze tarieven zijn hele euro's. */
function euroKort(bedrag: number | null): string {
  return bedrag === null ? "een prijs op maat" : `€ ${bedrag}`;
}
