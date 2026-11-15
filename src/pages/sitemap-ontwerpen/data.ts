/**
 * TIJDELIJK — gedeelde data voor de drie sitemap-ontwerpen (/sitemap-ontwerp/a, b, c).
 *
 * Dezelfde bronnen en dezelfde indeling als `src/pages/SitemapPage.tsx`, maar
 * als platte structuur zodat drie verschillende layouts er elk hun eigen vorm
 * aan kunnen geven. Zodra er een ontwerp gekozen is, gaat dit in SitemapPage
 * zelf op en verdwijnt deze map.
 */
import {
  ALLES_OVER_DROGEN,
  BEDRIJF,
  GAMMA,
  TOEBEHOREN_LINKS,
  TOEPASSINGEN,
  TOESTELLEN,
  type NavLinkItem,
} from "@/data/navigation";
import { gemeenteVanPlaats } from "@/data/gemeente-slugs";
import { REGIO_ROUTES } from "@/data/regio-slugs";
import {
  NEDERLANDSE_STREKEN,
  STREKEN_PER_REGIO,
  WAALSE_STREKEN,
  type Streek,
} from "@/data/provincie-gemeenten";
import { REALISATIES } from "@/data/realisaties";

export interface Plaats {
  naam: string;
  path?: string;
}

export interface Gebied {
  sleutel: string;
  kop: string;
  path?: string;
  aantal: number;
  streken: { naam: string; plaatsen: Plaats[] }[];
}

export interface Blok {
  id: string;
  titel: string;
  uitleg: string;
  items: NavLinkItem[];
}

export interface Land {
  id: string;
  titel: string;
  kort: string;
  uitleg: string;
  opAanvraag: boolean;
  gebieden: Gebied[];
}

export const slugId = (titel: string) =>
  "sm-" +
  titel
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const naarGebied = (
  sleutel: string,
  kop: string,
  streken: Streek[],
  path?: string
): Gebied => ({
  sleutel,
  kop,
  path,
  aantal: streken.reduce((n, s) => n + s.gemeenten.length, 0),
  streken: streken.map((s) => ({
    naam: s.naam,
    plaatsen: [...s.gemeenten]
      .sort((a, b) => a.localeCompare(b, "nl"))
      .map((naam) => ({ naam, path: path ? gemeenteVanPlaats(naam)?.path : undefined })),
  })),
});

const regioGebied = (regio: (typeof REGIO_ROUTES)[number]) =>
  naarGebied(regio.slug, regio.name, STREKEN_PER_REGIO[regio.slug] ?? [], regio.path);

const BESTELLEN: NavLinkItem[] = [
  { label: "Bereken uw droogpakket", path: "/verhuur/calculator" },
  { label: "Alles in één Droogservice", path: "/verhuur/pakket" },
  { label: "Losse toestellen afhalen", path: "/verhuur/afhalen" },
  { label: "Levering en installatie", path: "/levering" },
  { label: "Zelf afhalen in Aartselaar", path: "/afhalen" },
  { label: "Prijzen", path: "/prijzen" },
];

export const JURIDISCH: NavLinkItem[] = [
  { label: "Privacybeleid", path: "/privacy" },
  { label: "Algemene voorwaarden", path: "/algemene-voorwaarden" },
];

/* Elke link op één plek, zoals op de echte sitemap: het eerste blok wint. */
const gezien = new Set<string>();
export const BLOKKEN: Blok[] = [
  {
    titel: "Droogpakket bestellen",
    uitleg: "Van de berekening tot de levering op de werf.",
    items: BESTELLEN,
  },
  {
    titel: "Waarvoor u droogt",
    uitleg: "Elke situatie heeft een eigen aanpak en een eigen pagina.",
    items: TOEPASSINGEN,
  },
  {
    titel: "Toestellen huren",
    uitleg: "Elk toestel met zijn capaciteit, dagprijs en volledige fiche.",
    items: [...GAMMA.filter((i) => i.path === "/machines"), ...TOESTELLEN, ...TOEBEHOREN_LINKS],
  },
  { titel: "Over Vernast", uitleg: "Wie het werk doet en hoe u ons bereikt.", items: BEDRIJF },
  ...ALLES_OVER_DROGEN.map((g) => ({ titel: g.titel, uitleg: "", items: g.items })),
]
  .map((b) => ({
    ...b,
    id: slugId(b.titel),
    items: b.items.filter((i) => !gezien.has(i.path) && gezien.add(i.path)),
  }))
  .filter((b) => b.items.length > 0);

const WAALS: Gebied[] = [
  ["waals-brabant", "Waals-Brabant"],
  ["henegouwen", "Henegouwen"],
  ["luik", "Luik"],
  ["namen", "Namen"],
  ["luxemburg", "Provincie Luxemburg"],
].map(([sleutel, kop]) => {
  const regio = REGIO_ROUTES.find((r) => r.slug === sleutel);
  return regio ? regioGebied(regio) : naarGebied(sleutel, kop, WAALSE_STREKEN[sleutel] ?? []);
});

export const LANDEN: Land[] = [
  {
    id: "sm-vlaanderen",
    titel: "België: Vlaanderen",
    kort: "Vlaanderen",
    uitleg:
      "De vijf Vlaamse provincies en elke plaats waar we leveren, per streek. Een plaats met een eigen pagina is een link.",
    opAanvraag: false,
    gebieden: REGIO_ROUTES.filter((r) => !(r.slug in WAALSE_STREKEN) && r.slug !== "brussel").map(
      regioGebied
    ),
  },
  {
    id: "sm-brussel",
    titel: "België: Brussels Hoofdstedelijk Gewest",
    kort: "Brussel",
    uitleg: "De negentien gemeenten van het gewest.",
    opAanvraag: false,
    gebieden: REGIO_ROUTES.filter((r) => r.slug === "brussel").map(regioGebied),
  },
  {
    id: "sm-wallonie",
    titel: "België: Wallonië, op aanvraag",
    kort: "Wallonië",
    uitleg: "We komen als het gevraagd wordt, zonder de levertermijn van 24 uur.",
    opAanvraag: true,
    gebieden: WAALS,
  },
  {
    id: "sm-nederland",
    titel: "Nederland",
    kort: "Nederland",
    uitleg:
      "De drie provincies langs de Belgische grens. Geen levertermijn van 24 uur: de rit is langer en over de grens gelden andere btw-regels.",
    opAanvraag: true,
    gebieden: [
      naarGebied("nl-noord-brabant", "Noord-Brabant", NEDERLANDSE_STREKEN["noord-brabant"]),
      naarGebied("nl-zeeland", "Zeeland", NEDERLANDSE_STREKEN.zeeland),
      naarGebied("nl-limburg", "Nederlands Limburg", NEDERLANDSE_STREKEN["nederlands-limburg"]),
    ],
  },
];

export const REALISATIE_LINKS: NavLinkItem[] = [
  { label: "Alle realisaties", path: "/realisaties" },
  ...REALISATIES.map((r) => ({ label: r.titel, path: `/realisaties/${r.slug}` })),
];

/* Tellingen voor in de kop — uitgerekend, nooit getypt. */
const alleGebieden = LANDEN.flatMap((l) => l.gebieden);
export const TELLING = {
  paginas:
    BLOKKEN.reduce((n, b) => n + b.items.length, 0) +
    REALISATIE_LINKS.length +
    JURIDISCH.length +
    alleGebieden.filter((g) => g.path).length +
    alleGebieden.flatMap((g) => g.streken.flatMap((s) => s.plaatsen)).filter((p) => p.path).length,
  plaatsen: alleGebieden.reduce((n, g) => n + g.aantal, 0),
  regios: alleGebieden.filter((g) => g.path).length,
  realisaties: REALISATIES.length,
};

/** "/verhuur/toestel/x" → ["verhuur", "toestel", "x"] — voor de pad-weergave. */
export const padDelen = (path: string) => path.split("/").filter(Boolean);
