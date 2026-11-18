/**
 * De inhoud van de zichtbare sitemap (/sitemap), los van de opmaak.
 *
 * Alle lijsten komen uit dezelfde bronnen als de menu's en de footer
 * (`navigation.ts`, `gemeente-slugs.ts`, `provincie-gemeenten.ts`,
 * `realisaties.ts`), nooit overgetypt. Een nieuwe pagina die in
 * `navigation.ts` gezet wordt — en dat hoort sowieso, anders is ze een wees —
 * staat op de sitemap dus meteen bij.
 *
 * `scripts/audit-seo.mjs` controleert na de build dat elke URL uit sitemap.xml
 * ook echt vanaf /sitemap gelinkt wordt. Zo kan er niets stil uit vallen.
 *
 * Staat apart van `SitemapPage.tsx` sinds het mappenboom-ontwerp van
 * 15-11-2026: de pagina toont elke link als pad en de streken als takken, en
 * dat leest makkelijker van een platte structuur dan van de lijsten zelf.
 */
import { LABEL_FR, navigatie, regioNaam, type NavLinkItem } from "@/data/navigation";
import { gemeenteVanPlaats, plaatsFr } from "@/data/gemeente-slugs";
import { REGIO_ROUTES } from "@/data/regio-slugs";
import {
  NEDERLANDSE_STREKEN,
  STREKEN_PER_REGIO,
  WAALSE_STREKEN,
  type Streek,
} from "@/data/provincie-gemeenten";
import { REALISATIES } from "@/data/realisaties";
import { vertaalPad } from "@/i18n/paden";
import type { Taal } from "@/i18n/taal";

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

/*
  Plaatsen en geen gemeenten: de provincie Antwerpen telt 67 gemeenten, maar
  de lijst noemt er 77, omdat de districten van de stad apart staan — mensen
  tikken "bouwdroger huren Deurne" in. Alfabetisch, en niet in de volgorde van
  `provincie-gemeenten.ts`: hier zoekt iemand één naam tussen dertig.

  Een plaats krijgt alleen een link als haar gebied zelf een pagina heeft. Een
  Waalse of Nederlandse provincie zonder pagina is tekst: een kop of naam die
  naar een onbestaande pagina wijst, is erger dan geen link.

  In het Frans geldt hetzelfde per taal: een link alleen als de pagina een
  Franse versie heeft (`vertaalPad`). Een Nederlandse pagina op /fr/plan-du-site
  zou de Franse bezoeker zonder waarschuwing van taal doen wisselen; daar staat
  de plaatsnaam dan als tekst, net als bij een gebied zonder pagina.
*/

/** De streeknamen uit `provincie-gemeenten.ts` in het Frans. */
const STREEK_FR: Record<string, string> = {
  "Brussel-centrum en de eerste kroon": "Bruxelles-centre et la première couronne",
  "De kanaalzone en de westrand": "La zone du canal et la périphérie ouest",
  "De zuid- en oostrand": "Les périphéries sud et est",
  "Arrondissement Nijvel": "Arrondissement de Nivelles",
  "Arrondissement Zinnik": "Arrondissement de Soignies",
  "Arrondissement La Louvière": "Arrondissement de La Louvière",
  "Arrondissement Charleroi": "Arrondissement de Charleroi",
  "Arrondissement Bergen": "Arrondissement de Mons",
  "Arrondissement Aat": "Arrondissement d'Ath",
  "Arrondissement Doornik-Moeskroen": "Arrondissement de Tournai-Mouscron",
  "Arrondissement Thuin": "Arrondissement de Thuin",
  "Arrondissement Namen": "Arrondissement de Namur",
  "Arrondissement Dinant": "Arrondissement de Dinant",
  "Arrondissement Philippeville": "Arrondissement de Philippeville",
  "Arrondissement Marche-en-Famenne": "Arrondissement de Marche-en-Famenne",
  "Arrondissement Bastenaken": "Arrondissement de Bastogne",
  "Arrondissement Neufchâteau": "Arrondissement de Neufchâteau",
  "Arrondissement Aarlen": "Arrondissement d'Arlon",
  "Arrondissement Virton": "Arrondissement de Virton",
  "Arrondissement Borgworm": "Arrondissement de Waremme",
  "Arrondissement Luik": "Arrondissement de Liège",
  "Arrondissement Hoei": "Arrondissement de Huy",
  "Arrondissement Verviers": "Arrondissement de Verviers",
  "West-Brabant": "Ouest du Brabant",
  "Midden-Brabant": "Centre du Brabant",
  "Noordoost-Brabant": "Nord-est du Brabant",
  "Zuidoost-Brabant": "Sud-est du Brabant",
  "Zeeuws-Vlaanderen": "Flandre zélandaise",
  "De Zeeuwse eilanden": "Les îles zélandaises",
  "Noord-Limburg": "Nord du Limbourg",
  "Midden-Limburg": "Centre du Limbourg",
  "Zuid-Limburg": "Sud du Limbourg",
  "Stad Antwerpen en districten": "Ville d'Anvers et districts",
  "Zuidrand en Scheldeboord": "Périphérie sud et bords de l'Escaut",
  Rupelstreek: "Région du Rupel",
  "Klein-Brabant en Willebroek": "Petit-Brabant et Willebroek",
  "Noordrand en Noorderkempen": "Périphérie nord et Campine du Nord",
  "Mechelse regio en Netevallei": "Région de Malines et vallée de la Nèthe",
  "De Kempen": "La Campine",
  "Gent en de Gentse rand": "Gand et sa périphérie",
  "Het Waasland": "Le Pays de Waes",
  "Scheldeland en de Dendermondse regio": "Pays de l'Escaut et région de Termonde",
  "De Denderstreek": "La région de la Dendre",
  "Het Meetjesland": "Le Meetjesland",
  "De Vlaamse Ardennen": "Les Ardennes flamandes",
  "De Brusselse rand": "La périphérie bruxelloise",
  "Pajottenland en Zennevallei": "Pajottenland et vallée de la Senne",
  "Leuven en het Dijleland": "Louvain et la vallée de la Dyle",
  "Het Hageland": "Le Hageland",
  "Tienen en Vlaams-Haspengouw": "Tirlemont et la Hesbaye flamande",
  "De kust": "La côte",
  "Brugge en het Brugse Ommeland": "Bruges et ses environs",
  "De Westhoek": "Le Westhoek",
  "Kortrijk en de Leiestreek": "Courtrai et la région de la Lys",
  "Midden-West-Vlaanderen": "Centre de la Flandre occidentale",
  "Hasselt, Genk en Midden-Limburg": "Hasselt, Genk et le centre du Limbourg",
  "Noord-Limburg en de Limburgse Kempen": "Nord du Limbourg et Campine limbourgeoise",
  "Het Maasland": "Le pays mosan",
  "Haspengouw en de Voerstreek": "Hesbaye et les Fourons",
};

/** Een Nederlands pad in de taal van de sitemap, of `undefined` als die pagina daar niet bestaat. */
function padIn(nlPad: string | undefined, taal: Taal): string | undefined {
  if (!nlPad) return undefined;
  if (taal === "nl") return nlPad;
  return vertaalPad(nlPad, taal) ?? undefined;
}

const naarGebied = (
  taal: Taal,
  sleutel: string,
  kop: string,
  streken: Streek[],
  nlPath?: string
): Gebied => ({
  sleutel,
  kop,
  path: padIn(nlPath, taal),
  aantal: streken.reduce((n, s) => n + s.gemeenten.length, 0),
  streken: streken.map((s) => ({
    naam: taal === "fr" ? (STREEK_FR[s.naam] ?? s.naam) : s.naam,
    plaatsen: s.gemeenten
      .map((naam) => ({
        naam: taal === "fr" ? plaatsFr(naam) : naam,
        path: nlPath ? padIn(gemeenteVanPlaats(naam)?.path, taal) : undefined,
      }))
      .sort((a, b) => a.naam.localeCompare(b.naam, taal)),
  })),
});

interface Teksten {
  bestellen: [string, string];
  waarvoor: [string, string];
  toestellen: [string, string];
  bedrijf: [string, string];
  juridisch: NavLinkItem[];
  vlaanderen: [string, string, string];
  brussel: [string, string, string];
  wallonie: [string, string, string];
  nederland: [string, string, string];
  alleRealisaties: string;
}

/* Titel, korte naam en uitleg per sectie. De titels worden ook de ankers
   (`slugId`), dus elke taal heeft zijn eigen #sm-… op zijn eigen pagina. */
const TEKSTEN: Record<"nl" | "fr", Teksten> = {
  nl: {
    bestellen: ["Droogpakket bestellen", "Van de berekening tot de levering op de werf."],
    waarvoor: ["Waarvoor u droogt", "Elke situatie heeft een eigen aanpak en een eigen pagina."],
    toestellen: ["Toestellen huren", "Elk toestel met zijn capaciteit, dagprijs en volledige fiche."],
    bedrijf: ["Over Vernast", "Wie het werk doet en hoe u ons bereikt."],
    juridisch: [
      { label: "Privacybeleid", path: "/privacy" },
      { label: "Algemene voorwaarden", path: "/algemene-voorwaarden" },
    ],
    vlaanderen: [
      "België: Vlaanderen",
      "Vlaanderen",
      "De vijf Vlaamse provincies en elke plaats waar we leveren, per streek. Een plaats met een eigen pagina is een link.",
    ],
    brussel: ["België: Brussels Hoofdstedelijk Gewest", "Brussel", "De negentien gemeenten van het gewest."],
    wallonie: [
      "België: Wallonië, op aanvraag",
      "Wallonië",
      "We komen als het gevraagd wordt, zonder de levertermijn van 24 uur.",
    ],
    nederland: [
      "Nederland",
      "Nederland",
      "De drie provincies langs de Belgische grens. Hier leveren we op afspraak, zonder levertermijn van 24 uur: de rit is langer en over de grens gelden andere btw-regels.",
    ],
    alleRealisaties: "Alle realisaties",
  },
  fr: {
    bestellen: ["Commander un pack de séchage", "Du calcul à la livraison sur chantier."],
    waarvoor: ["Ce que vous séchez", "Chaque situation a sa propre approche et sa propre page."],
    toestellen: ["Louer un appareil", "Chaque appareil avec sa capacité, son prix journalier et sa fiche complète."],
    bedrijf: ["À propos de Vernast", "Qui fait le travail et comment nous joindre."],
    juridisch: [
      { label: "Politique de confidentialité", path: "/privacy" },
      { label: "Conditions générales", path: "/algemene-voorwaarden" },
    ],
    vlaanderen: [
      "Belgique : Flandre",
      "Flandre",
      "Les cinq provinces flamandes et chaque localité où nous livrons, par région. Une localité qui a sa propre page est un lien.",
    ],
    brussel: [
      "Belgique : Région de Bruxelles-Capitale",
      "Bruxelles",
      "Les dix-neuf communes de la région.",
    ],
    wallonie: [
      "Belgique : Wallonie, sur demande",
      "Wallonie",
      "Nous venons sur demande, sans le délai de livraison de 24 heures.",
    ],
    nederland: [
      "Pays-Bas",
      "Pays-Bas",
      "Les trois provinces le long de la frontière belge. Nous y livrons sur rendez-vous, sans délai de 24 heures : le trajet est plus long et d'autres règles de TVA s'appliquent de l'autre côté de la frontière.",
    ],
    alleRealisaties: "Toutes les réalisations",
  },
};

const BESTELLEN: NavLinkItem[] = [
  { label: "Bereken uw droogpakket", path: "/verhuur/calculator" },
  { label: "Alles in één Droogservice", path: "/verhuur/pakket" },
  { label: "Losse toestellen afhalen", path: "/verhuur/afhalen" },
  { label: "Levering en installatie", path: "/levering" },
  { label: "Zelf afhalen in Aartselaar", path: "/afhalen" },
  { label: "Prijzen", path: "/prijzen" },
];

export interface SitemapInhoud {
  BLOKKEN: Blok[];
  JURIDISCH: NavLinkItem[];
  LANDEN: Land[];
  REALISATIE_LINKS: NavLinkItem[];
}

function bouw(taal: "nl" | "fr"): SitemapInhoud {
  const t = TEKSTEN[taal];
  const nav = navigatie(taal);
  /* De menulijsten uit `navigatie()` zijn al vertaald (label en pad). Wat hier
     extra staat, gaat door dezelfde tabel. */
  const lokaal = (items: NavLinkItem[]) =>
    taal === "nl"
      ? items
      : items.flatMap((i) => {
          const path = padIn(i.path, taal);
          return path ? [{ label: LABEL_FR[i.label] ?? i.label, path }] : [];
        });
  /* Een link naar een pagina die in deze taal niet bestaat, valt weg — zie hierboven. */
  const bestaat = (items: NavLinkItem[]) =>
    taal === "nl" ? items : items.filter((i) => i.path.startsWith("/fr"));

  /*
    Elke pagina krijgt één plek. De blokken en de groepen uit het mega-menu
    overlappen flink — /chape-drogen staat zowel onder "Waarvoor u droogt" als
    onder "Toepassingen". Op een sitemap is dezelfde link drie keer geen extra
    wegwijzer maar ruis. Het eerste blok waarin een pad voorkomt houdt hem; wat
    daarna leeg valt, verdwijnt.
  */
  const gezien = new Set<string>();
  const machines = padIn("/machines", taal);
  const BLOKKEN: Blok[] = [
    { titel: t.bestellen[0], uitleg: t.bestellen[1], items: lokaal(BESTELLEN) },
    { titel: t.waarvoor[0], uitleg: t.waarvoor[1], items: bestaat(nav.TOEPASSINGEN) },
    {
      titel: t.toestellen[0],
      uitleg: t.toestellen[1],
      items: bestaat([...nav.GAMMA.filter((i) => i.path === machines), ...nav.TOESTELLEN, ...nav.TOEBEHOREN_LINKS]),
    },
    { titel: t.bedrijf[0], uitleg: t.bedrijf[1], items: bestaat(nav.BEDRIJF) },
    ...nav.ALLES_OVER_DROGEN.map((g) => ({ titel: g.titel, uitleg: "", items: bestaat(g.items) })),
  ]
    .map((b) => ({
      ...b,
      id: slugId(b.titel),
      items: b.items.filter((i) => !gezien.has(i.path) && gezien.add(i.path)),
    }))
    .filter((b) => b.items.length > 0);

  const regioGebied = (regio: (typeof REGIO_ROUTES)[number]) =>
    naarGebied(taal, regio.slug, regioNaam(regio, taal), STREKEN_PER_REGIO[regio.slug] ?? [], regio.path);
  const gebiedVoor = (sleutel: string, kop: string, streken: Record<string, Streek[]>) => {
    const regio = REGIO_ROUTES.find((r) => r.slug === sleutel);
    return regio ? regioGebied(regio) : naarGebied(taal, sleutel, kop, streken[sleutel] ?? []);
  };

  const WAALS: Gebied[] = [
    ["waals-brabant", "Waals-Brabant"],
    ["henegouwen", "Henegouwen"],
    ["luik", "Luik"],
    ["namen", "Namen"],
    ["luxemburg", "Provincie Luxemburg"],
  ].map(([sleutel, kop]) => gebiedVoor(sleutel, kop, WAALSE_STREKEN));

  /*
    Vier secties en niet één. Brussel stond tot 15-11-2026 als zesde gebied onder
    "Vlaanderen en Brussel" en las daardoor als een Vlaamse provincie. Wallonië en
    Nederland stonden samen, met "(NL)" als enige onderscheid, en Zeeland las als
    de achtste Waalse provincie. Wallonië en Nederland dragen "op aanvraag": de
    levertermijn van 24 uur geldt daar niet, en die belofte doen we dus ook niet.
  */
  const LANDEN: Land[] = [
    {
      id: "sm-vlaanderen",
      titel: t.vlaanderen[0],
      kort: t.vlaanderen[1],
      uitleg: t.vlaanderen[2],
      opAanvraag: false,
      gebieden: REGIO_ROUTES.filter(
        (r) => !(r.slug in WAALSE_STREKEN) && !(r.slug in NEDERLANDSE_STREKEN) && r.slug !== "brussel"
      ).map(regioGebied),
    },
    {
      id: "sm-brussel",
      titel: t.brussel[0],
      kort: t.brussel[1],
      uitleg: t.brussel[2],
      opAanvraag: false,
      gebieden: REGIO_ROUTES.filter((r) => r.slug === "brussel").map(regioGebied),
    },
    {
      id: "sm-wallonie",
      titel: t.wallonie[0],
      kort: t.wallonie[1],
      uitleg: t.wallonie[2],
      opAanvraag: true,
      gebieden: WAALS,
    },
    {
      id: "sm-nederland",
      titel: t.nederland[0],
      kort: t.nederland[1],
      uitleg: t.nederland[2],
      opAanvraag: true,
      // Sinds 15-11-2026 heeft elke Nederlandse provincie haar pagina; zonder
      // route valt ze terug op tekst, zoals de Waalse.
      gebieden: [
        ["noord-brabant", "Noord-Brabant"],
        ["zeeland", "Zeeland"],
        ["nederlands-limburg", "Nederlands Limburg"],
      ].map(([sleutel, kop]) => gebiedVoor(sleutel, kop, NEDERLANDSE_STREKEN)),
    },
  ];

  const REALISATIE_LINKS: NavLinkItem[] = bestaat(
    lokaal([
      { label: t.alleRealisaties, path: "/realisaties" },
      ...REALISATIES.map((r) => ({ label: r.titel, path: `/realisaties/${r.slug}` })),
    ])
  );

  return { BLOKKEN, JURIDISCH: bestaat(lokaal(t.juridisch)), LANDEN, REALISATIE_LINKS };
}

const CACHE = new Map<Taal, SitemapInhoud>();

/** De volledige sitemap in één taal; Engels valt terug op Nederlands zolang het niet online staat. */
export function sitemapInhoud(taal: Taal): SitemapInhoud {
  const t = taal === "fr" ? "fr" : "nl";
  let uit = CACHE.get(t);
  if (!uit) CACHE.set(t, (uit = bouw(t)));
  return uit;
}

/* De Nederlandse inhoud onder de oude namen, voor wie ze rechtstreeks importeert. */
export const { BLOKKEN, JURIDISCH, LANDEN, REALISATIE_LINKS } = sitemapInhoud("nl");

/** "/verhuur/toestel/x" → ["verhuur", "toestel", "x"] — voor de pad-weergave. */
export const padDelen = (path: string) => path.split("/").filter(Boolean);
