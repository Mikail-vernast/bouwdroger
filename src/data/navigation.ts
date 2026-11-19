/**
 * De sitewide links, op één plek.
 *
 * De site heeft twee schillen: de v3-header/footer op de homepage en de
 * verhuurfunnel, en de oudere Navbar/Footer op de inhoudspagina's. Die zijn uit
 * elkaar gegroeid, met als gevolg dat /prijzen, /calculator en /reserveren
 * nergens vandaan gelinkt werden — indexeerbaar, in de sitemap, maar zonder één
 * interne link. Een pagina die alleen via de sitemap bestaat krijgt geen enkel
 * signaal mee en blijft onderaan hangen.
 *
 * Beide footers lezen nu deze lijsten. Komt er een pagina bij, dan hoort ze
 * hier; dan kan ze niet opnieuw een wees worden.
 *
 * Ankertekst beschrijft de bestemming. "Bereken uw pakket" zegt een zoekmachine
 * meer over /verhuur/calculator dan "Meer info", en dezelfde tekst hoort niet
 * naar twee verschillende URL's te wijzen.
 */
import { PRODUCTS, PRODUCT_ORDER } from "./verhuur.js";
import { REGIO_ROUTES, type RegioRoute } from "./regio-slugs.js";
import { TOEBEHOREN, toebehorenPad } from "./toebehoren.js";
import { toestelPad } from "./verhuur";
import { vertaalPad } from "../i18n/paden.js";
import type { Taal } from "../i18n/taal.js";

export interface NavLinkItem {
  label: string;
  /** Intern pad; externe URL's horen hier niet. */
  path: string;
}

/**
 * De namen waarmee bezoekers de toestellen zoeken, en niet de modelcodes uit de
 * tarieven: iemand zoekt "radiaalventilator huren", niet "Radiaal 2250".
 * Ontbreekt een naam, dan valt het terug op de korte naam uit het portaal.
 *
 * Lees ze via `toestelLabel()` hieronder, nooit via `PRODUCTS[key].name`. Dat
 * veld komt rechtstreeks uit het portaal en is de typecode van de fabrikant —
 * "Ontvochtiger TTK 170 S", "Elektrische kachel TEddH 30 T". Die stonden tot
 * 12-11-2026 op de regiopagina's als koptekst en op de knop ("Bekijk TTK 170
 * S"), en tot 13-11-2026 nog als <h1> op de toestelpagina zelf. Niemand huurt
 * een typenummer.
 *
 * Het merk is wat het portaal als `short` publiceert: Boost, Performance,
 * Ultimate, Highflow, Turboflow, Heatpower. Daar stond hier Small, Medium en
 * Large tegenover — een tweede namenstelsel voor dezelfde drie machines, dat
 * op /sitemap en in de footer onder elkaar stond terwijl de kaarten op de
 * homepage, de kruisverkoop en de afrekenregels Boost, Performance en Ultimate
 * zeiden. Eén stelsel: het merk, met het soortwoord erachter waarop gezocht
 * wordt.
 */
const TOESTEL_LABEL: Record<string, string> = {
  ttk170: "Boost bouwdroger",
  ttk350: "Performance bouwdroger",
  ttk650: "Ultimate bouwdroger",
  // Het soortwoord blijft erachter staan: niemand zoekt op "Turboflow huren",
  // wel op "radiaalventilator huren".
  ttv4500: "Highflow axiaalventilator",
  radiaal2250: "Turboflow radiaalventilator",
  // Het portaal kort dit toestel af tot "Revolution". Dat is de modelnaam en
  // verder niets: in de footer, het menu en op /sitemap stond één regel
  // tussen zeven bouwdrogers en ventilatoren waaraan niet te zien was wat ze
  // is. Het soortwoord erachter, net als bij de twee ventilatoren hierboven.
  revolution: "Revolution adsorptiedroger",
  teddh30: "Heatpower 30 elektrische kachel",
  teddh20: "Heatboost 20 elektrische kachel",
};

/**
 * Het gamma in de menu's van beide headers.
 *
 * Stond eerder twee keer met de hand overgetypt, en liep daardoor uit de pas:
 * "Turboflow" linkte naar de pagina van de axiaalventilator en de
 * kachel stond er met een vermogen dat nergens anders voorkwam. Nu volgt de
 * lijst de gepubliceerde tarieven — een toestel dat in het portaal uit de
 * verhuur gaat, verdwijnt hier vanzelf mee.
 */
/**
 * De naam van één toestel, zoals de klant hem kent.
 *
 * `Object.prototype.hasOwnProperty` en niet `TOESTEL_LABEL[key]`: met een
 * sleutel als `"constructor"` geeft die laatste een functie terug in plaats van
 * een naam.
 */
export function toestelLabel(key: string): string {
  if (Object.prototype.hasOwnProperty.call(TOESTEL_LABEL, key)) return TOESTEL_LABEL[key];
  return PRODUCTS[key]?.short ?? key;
}

export const TOESTELLEN: NavLinkItem[] = PRODUCT_ORDER.map((key) => ({
  label: toestelLabel(key),
  path: toestelPad(key),
}));

/**
 * Toebehoren: wat bij een toestel hoort maar zelf geen toestel is.
 *
 * Afgeleid uit `TOEBEHOREN`, zodat een tweede fiche hier niet vergeten wordt.
 * "huren" staat in de ankertekst omdat dat de zoekopdracht is waarop deze
 * pagina's mikken — "Condenspomp" alleen zou evengoed naar een webshop kunnen
 * wijzen.
 */
export const TOEBEHOREN_LINKS: NavLinkItem[] = TOEBEHOREN.map((toebehoren) => ({
  label: `${toebehoren.naam} huren`,
  path: toebehorenPad(toebehoren.slug),
}));

/**
 * De pakketten zoals ze in het mega-menu staan. Stonden tot nu toe alleen daar,
 * twee keer overgetypt (V3Header en VHeader); het mobiele menu is de derde
 * plaats en dat is er één te veel om met de hand bij te houden.
 */
export const PAKKETTEN: NavLinkItem[] = [
  { label: "Pleisterwerk drogen", path: "/verhuur/calculator" },
  { label: "Chape drogen", path: "/verhuur/calculator" },
  { label: "Pleisterwerk + chape", path: "/verhuur/calculator" },
  { label: "Waterschade drogen", path: "/verhuur/calculator" },
  { label: "Alles in één Droogservice", path: "/verhuur/pakket" },
];

/**
 * Waarvoor mensen drogen — elk een eigen zoekintentie en eigen pagina.
 *
 * Twee van deze labels omschreven de situatie in plaats van ze te benoemen:
 * /nieuwbouw-drogen heette "Chape en pleisterwerk samen" en /renovatie
 * "Vochtige kelder of schimmel". Daardoor kwamen de woorden nieuwbouw en
 * renovatie in geen enkel menu voor, niet in de footer en niet op /sitemap —
 * wie de pagina zocht, vond haar niet terug in de lijst. Alle acht volgen nu
 * hetzelfde patroon: de situatie plus "drogen".
 *
 * /renovatie mikt in `seo.ts` nog altijd op "vochtige kelder" en "schimmel";
 * dat staat in de titel en de H1, waar het zwaarder weegt dan in ankertekst.
 */
export const TOEPASSINGEN: NavLinkItem[] = [
  { label: "Luchtkussen drogen", path: "/waterschade/luchtkussen-drogen" },
  { label: "Chape drogen", path: "/chape-drogen" },
  { label: "Pleisterwerk drogen", path: "/pleisterwerk-drogen" },
  { label: "Nieuwbouw drogen", path: "/nieuwbouw-drogen" },
  { label: "Drogen na waterschade", path: "/waterschade" },
  { label: "Renovatie drogen", path: "/renovatie" },
  { label: "Ontschimmeling", path: "/ontschimmeling" },
  { label: "Ozonbehandeling", path: "/ozonbehandeling" },
  { label: "Luchtontvochtiger huren", path: "/luchtontvochtiger-huren" },
];

/**
 * Schimmel en geur — wat ná het drogen komt.
 *
 * Eigen groep in het mega-menu en niet onder "Service": ozonbehandeling is geen
 * onderdeel van een huur maar een losse dienst, en wie met schimmel zoekt komt
 * niet kijken bij levering en verlengen. De groep is er al op voorzien dat er
 * meer bij komt (geurneutralisatie, ontschimmeling als aparte pagina).
 */
export const SCHIMMELS: NavLinkItem[] = [
  { label: "Ontschimmeling", path: "/ontschimmeling" },
  { label: "Ozonbehandeling", path: "/ozonbehandeling" },
  { label: "Renovatie drogen", path: "/renovatie" },
  { label: "Drogen na waterschade", path: "/waterschade" },
];

/**
 * De situatiekolom van het menu "Bouwdroging".
 *
 * Die kolom heette "Schimmels" en toonde `SCHIMMELS`: ozon, /renovatie en
 * /waterschade. Ze was intussen de situatiekolom geworden — twee van haar
 * links waren toepassingspagina's — met één gat erin: /nieuwbouw-drogen, de
 * grootste van de drie, stond er niet in. Wie het menu Bouwdroging opende kon
 * wel naar waterschade en naar de vochtige kelder, maar niet naar chape en
 * pleisterwerk.
 *
 * Daarom de twee lijsten samen, zonder dubbels: `TOEPASSINGEN` is de volgorde
 * die ook "Alles over drogen", de footer, het mobiele menu en /gids tonen, en
 * wat `SCHIMMELS` daarbovenop heeft (ontschimmeling) volgt vanzelf. Een nieuwe
 * toepassing hoeft dus nog altijd maar op één plek bij.
 */
export const MENU_SITUATIES: NavLinkItem[] = [
  ...TOEPASSINGEN,
  ...SCHIMMELS.filter((item) => !TOEPASSINGEN.some((t) => t.path === item.path)),
];

/** Hoe het toestel bij de klant raakt, en wat het kost. */
export const SERVICE: NavLinkItem[] = [
  { label: "Prijzen", path: "/prijzen" },
  { label: "Levering en installatie", path: "/levering" },
  { label: "Zelf afhalen in Aartselaar", path: "/afhalen" },
];

/**
 * De rekenhulp en het gamma.
 *
 * Hier stonden twee rekenhulpen: "Bereken uw droogpakket" en "Welke capaciteit
 * heb ik nodig?", die laatste naar /calculator. Die pagina is op 10-11-2026
 * verwijderd omdat ze op dezelfde zoekintentie mikte als de verhuurcalculator.
 * Twee regels naar hetzelfde pad is bovendien een dubbele link in de footer —
 * en in dit bestand ook een dubbele React-sleutel, want de footer sleutelt op
 * `path`.
 */
export const KIEZEN: NavLinkItem[] = [
  { label: "Bereken uw droogpakket", path: "/verhuur/calculator" },
  { label: "Droogsimulator voor uw woning", path: "/verhuur/simulator" },
  { label: "Ons volledige gamma", path: "/machines" },
];

/**
 * Het gamma als kolom in het menu "Alles over drogen".
 *
 * /machines zat in geen enkel menu van de header. Van de 32 links daarin was
 * het de enige indexeerbare inhoudspagina die ontbrak: de toestelpagina's
 * stonden er wel (menu Bouwdroging), de pagina die ze alle acht naast elkaar
 * zet niet. Wie "alles over drogen" opende, kreeg de uitleg, de gidsen, de
 * toepassingen en de prijzen — maar nergens het gamma zelf.
 *
 * Dezelfde controle leverde nog een gat op: /verhuur/afhalen stond in geen
 * enkel menu én niet in de footer, terwijl het een eigen indexeerbare pagina
 * is met een eigen zoekintentie ("losse toestellen huren en afhalen in
 * Aartselaar"). Hij was alleen bereikbaar via links in lopende tekst. De
 * verwante infopagina /afhalen staat bij Prijzen & service; dit is de
 * reservering zelf.
 *
 * Twee links en niet vier: "Alles in één Droogservice" en "Bereken uw
 * droogpakket" stonden er ook in, en dat zijn bestelstappen. In een menu dat
 * "Alles over drogen" heet — naast Uitleg, Gidsen en Toepassingen — lezen ze
 * als een aanbod tussen de informatie. Ze staan allebei in het menu
 * Bouwdroging (`PAKKETTEN`), op /sitemap en in de voet, en de calculator
 * bovendien als knop rechts in de balk; er gaat dus niets verloren.
 */
export const GAMMA: NavLinkItem[] = [
  { label: "Ons volledige gamma", path: "/machines" },
  { label: "Losse toestellen afhalen", path: "/verhuur/afhalen" },
  ...TOEBEHOREN_LINKS,
];

/** Het bedrijf achter de toestellen. */
export const BEDRIJF: NavLinkItem[] = [
  { label: "Over Vernast", path: "/over-ons" },
  { label: "Realisaties", path: "/realisaties" },
  { label: "Contact", path: "/contact" },
];

/**
 * De gidsen onder /gids — elk één informatieve zoekvraag. Ook de hub
 * (/gids) leest deze lijst, zodat een nieuwe gids niet op de ene plek wel en
 * op de andere niet verschijnt. Het label is de vraag zoals mensen ze
 * intikken, niet de paginatitel.
 */
export const GIDSEN: NavLinkItem[] = [
  { label: "Hoe lang moet chape drogen?", path: "/gids/hoe-lang-moet-chape-drogen" },
  { label: "Hoe lang moet pleisterwerk drogen?", path: "/gids/hoe-lang-moet-pleisterwerk-drogen" },
  { label: "Natuurlijk drogen of een bouwdroger?", path: "/gids/natuurlijk-drogen-of-bouwdroger" },
  { label: "Condensdroger of adsorptiedroger?", path: "/gids/condensdroger-of-adsorptiedroger" },
  { label: "Stroomverbruik van een bouwdroger", path: "/gids/stroomverbruik-bouwdroger" },
];

/**
 * Uitleg- en servicepagina's die anders nergens vandaan gelinkt werden en zo
 * een wees dreigden te worden: /klantservice, /drooggarantie, /hoe-drogen-werkt
 * en /waarom-bouwdroging stonden wel in de sitemap, maar zonder interne link.
 */
export const UITLEG: NavLinkItem[] = [
  { label: "Hoe drogen werkt", path: "/hoe-drogen-werkt" },
  { label: "Waarom bouwdroging", path: "/waarom-bouwdroging" },
  { label: "Drooggarantie", path: "/drooggarantie" },
  { label: "Klantenservice", path: "/klantservice" },
];

export const ONTDEK: NavLinkItem[] = [
  ...UITLEG,
  { label: "Gidsen over bouwdroging", path: "/gids" },
  ...GIDSEN,
];

/** Eén kolom in een mega-menu: een kopje met de links eronder. */
export interface NavGroep {
  titel: string;
  items: NavLinkItem[];
}

/**
 * Het mega-menu "Alles over drogen".
 *
 * Dit was een uitklapper met vier vaste links, terwijl de helft van de
 * inhoudelijke pagina's — de gidsen, de toepassingen, /prijzen — er niet in
 * stond. Wie op "alles over drogen" klikte, kreeg dus niet alles. Nu leest het
 * menu dezelfde lijsten als de footer en het mobiele menu, zodat een nieuwe
 * informatiepagina op één plek wordt toegevoegd en overal verschijnt.
 *
 * De volgorde volgt de vraag van de bezoeker: eerst begrijpen, dan de gidsen
 * met één concrete vraag, dan de situatie waarin hij zit, dan het gamma dat
 * daarbij hoort, en pas daarna wat het kost.
 *
 * Met deze vijf kolommen is elke indexeerbare pagina vanuit de header
 * bereikbaar, op de vijf regiopagina's na — die staan in de footer, met het
 * volledige zoekwoord in de ankertekst.
 */
export const ALLES_OVER_DROGEN: NavGroep[] = [
  { titel: "Uitleg", items: UITLEG },
  {
    titel: "Gidsen",
    items: [{ label: "Alle gidsen", path: "/gids" }, ...GIDSEN],
  },
  { titel: "Toepassingen", items: TOEPASSINGEN },
  { titel: "Het gamma", items: GAMMA },
  { titel: "Prijzen & service", items: SERVICE },
];

/**
 * De vijf regiopagina's als gewone tekstlinks.
 *
 * Ze stonden alleen als spelden op de kaart in `V3Footer`, en die kaart draagt
 * `aria-hidden="true"` met `tabIndex={-1}` op elke speld — expliciet sierwerk.
 * Een crawler volgt zulke links doorgaans nog, maar ze dragen geen ankertekst
 * (er staat enkel "Antwerpen") en met de toetsenbord of een schermlezer zijn ze
 * onbereikbaar. Daarom staan ze nu óók als tekst in de sitemapkolom, met het
 * volledige zoekwoord in de ankertekst: dat is waar deze pagina's op mikken.
 *
 * Afgeleid uit `REGIO_ROUTES`, zodat een zesde regio hier niet vergeten wordt.
 */
export const REGIOS: NavLinkItem[] = REGIO_ROUTES.map((regio) => ({
  label: `Bouwdroger huren in ${regio.name}`,
  path: regio.path,
}));

/**
 * De sitemapkolom van de footer.
 *
 * De footer las eerder `SERVICE` en `ONTDEK` achter elkaar: dertien links in
 * één kolom, waarvan zes naar een gids. Die gidsen staan op /gids en linken
 * naar elkaar, en zijn elk al vanaf vijf andere pagina's bereikbaar — in de
 * footer voegden ze niets toe behalve lengte.
 *
 * Deze lijst is wat er overblijft: de weg naar een bestelling, plus de drie
 * pagina's waar de rest van de site op uitkomt. Eén regel per bestemming, in
 * de volgorde waarin iemand ze nodig heeft.
 */
export const FOOTER_SITEMAP: NavLinkItem[] = [
  { label: "Home", path: "/" },
  // De calculator en het gamma: de twee manieren waarop iemand aan een toestel
  // komt. /machines ontbrak hier evengoed als in de header — de enige
  // inhoudspagina die vanuit geen van beide bereikbaar was.
  ...KIEZEN,
  ...SERVICE,
  { label: "Realisaties", path: "/realisaties" },
  { label: "Gidsen over bouwdroging", path: "/gids" },
  { label: "Contact", path: "/contact" },
  // De zichtbare sitemap staat bewust niet hier maar in de onderste balk van
  // de voet, naast Privacy en de voorwaarden: een regel "Sitemap" ín de kolom
  // die al "Sitemap" heet leest als een verwijzing naar zichzelf.
];

/**
 * De Vernast-groep: de zusterbedrijven, elk op hun eigen domein. Externe URL's,
 * dus bewust géén NavLinkItem (dat pad is intern). "Verhuur & bouwdroging" is
 * deze site zelf en blijft daarom een interne link (path).
 */
export const VERNAST_GROEP: { label: string; sub: string; href?: string; path?: string }[] = [
  { label: "Vernast.be", sub: "De groep", href: "https://www.vernast.be/" },
  // "Verhuur & bouwdroging" heette deze site hier, maar de groep noemt haar
  // overal elders bij haar merknaam — op vernast.be staat ze in de lijst als
  // vernast-bouwdrogers.be. In de footerkolom "Vernast Groep" naast de twee
  // zusterbedrijven las de oude omschrijving als een dienst in plaats van als
  // het vierde merk.
  { label: "Vernast Bouwdrogers", sub: "Toestellen en pakketten", path: "/" },
  { label: "Vochtbestrijding", sub: "Kelder · muren · gevel", href: "https://vernast-vochtbestrijding.be/" },
  { label: "Schilderwerken", sub: "Binnen & buiten", href: "https://www.vernast-schilderwerken.be/" },
];

/* ------------------------------------------------------------------ */
/* Dezelfde lijsten in het Frans.                                       */
/* ------------------------------------------------------------------ */

/*
  Waarom een vertaaltabel op het Nederlandse label en geen tweede set lijsten:
  de lijsten hierboven zijn afgeleid (uit PRODUCT_ORDER, REGIO_ROUTES,
  TOEBEHOREN) en dragen elk een reden in hun commentaar. Een tweede, Franse
  kopie zou daar na de eerste wijziging naast lopen — precies het probleem dat
  dit bestand oploste. Nu verschijnt een nieuwe link in beide talen tegelijk;
  ontbreekt zijn Franse label, dan faalt `src/test/navigatieFr.test.ts`.

  Paden gaan door `vertaalPad`: een pagina die (nog) geen Franse versie heeft,
  houdt haar Nederlandse pad, net als `lokaalPad` in een component.
*/
/** Nederlands label → Frans label, voor elke vaste link en elk kopje hierboven. */
export const LABEL_FR: Record<string, string> = {
  /* Pakketten */
  "Pleisterwerk drogen": "Séchage plafonnage",
  "Chape drogen": "Séchage chape",
  "Pleisterwerk + chape": "Plafonnage + chape",
  "Waterschade drogen": "Séchage dégâts des eaux",
  "Alles in één Droogservice": "Service de séchage tout compris",
  /* Toepassingen en schimmels */
  "Nieuwbouw drogen": "Séchage nouvelle construction",
  "Drogen na waterschade": "Séchage après dégâts des eaux",
  "Luchtkussen drogen": "Séchage sous film",
  "Renovatie drogen": "Séchage rénovation",
  Ontschimmeling: "Élimination des moisissures",
  Ozonbehandeling: "Traitement à l'ozone",
  "Luchtontvochtiger huren": "Location déshumidificateur d'air",
  /* Service en kiezen */
  Prijzen: "Prix",
  "Levering en installatie": "Livraison et installation",
  "Zelf afhalen in Aartselaar": "Enlèvement à Aartselaar",
  "Bereken uw droogpakket": "Calculez votre pack de séchage",
  "Droogsimulator voor uw woning": "Simulateur de séchage pour votre logement",
  "Ons volledige gamma": "Toute notre gamme",
  "Losse toestellen afhalen": "Appareils à enlever",
  /* Bedrijf */
  "Over Vernast": "À propos de Vernast",
  Realisaties: "Réalisations",
  Contact: "Contact",
  Home: "Accueil",
  /* Gidsen en uitleg */
  "Hoe lang moet chape drogen?": "Combien de temps sèche une chape ?",
  "Hoe lang moet pleisterwerk drogen?": "Combien de temps sèche un plafonnage ?",
  "Natuurlijk drogen of een bouwdroger?": "Séchage naturel ou déshumidificateur ?",
  "Condensdroger of adsorptiedroger?": "Condensation ou adsorption ?",
  "Stroomverbruik van een bouwdroger": "Consommation électrique d'un déshumidificateur",
  "Hoe drogen werkt": "Comment fonctionne le séchage",
  "Waarom bouwdroging": "Pourquoi sécher son chantier",
  Drooggarantie: "Garantie de séchage",
  Klantenservice: "Service client",
  "Gidsen over bouwdroging": "Guides du séchage de chantier",
  "Alle gidsen": "Tous les guides",
  /* Kopjes van het mega-menu */
  Uitleg: "Comprendre",
  Gidsen: "Guides",
  Toepassingen: "Applications",
  "Het gamma": "La gamme",
  "Prijzen & service": "Prix & service",
};

/**
 * Toestelnamen in het Frans. Zelfde regel als `TOESTEL_LABEL`: het merk uit
 * het portaal plus het soortwoord waarop gezocht wordt — in het Frans staat
 * dat soortwoord vooraan.
 */
const TOESTEL_LABEL_FR: Record<string, string> = {
  ttk170: "Déshumidificateur Boost",
  ttk350: "Déshumidificateur Performance",
  ttk650: "Déshumidificateur Ultimate",
  ttv4500: "Ventilateur axial Highflow",
  radiaal2250: "Ventilateur radial Turboflow",
  revolution: "Déshumidificateur à adsorption Revolution",
  teddh30: "Chauffage électrique Heatpower 30",
  teddh20: "Chauffage électrique Heatboost 20",
};

/**
 * Een regio "in een zin", zoals `RegioRoute.name` dat in het Nederlands doet.
 * Het voorzetsel verschilt per naam (à Bruxelles, en Hainaut, au Limbourg),
 * daarom de hele woordgroep. Provincies met de naam van een stad krijgen
 * « province de », anders leest « à Anvers » als de stad alleen.
 */
export const REGIO_IN_FR: Record<string, string> = {
  antwerpen: "en province d'Anvers",
  "oost-vlaanderen": "en Flandre orientale",
  "vlaams-brabant": "en Brabant flamand",
  brussel: "à Bruxelles",
  "west-vlaanderen": "en Flandre occidentale",
  limburg: "au Limbourg",
  "waals-brabant": "en Brabant wallon",
  henegouwen: "en Hainaut",
  namen: "en province de Namur",
  luxemburg: "en province de Luxembourg",
  luik: "en province de Liège",
  "noord-brabant": "au Brabant-Septentrional",
  zeeland: "en Zélande",
  "nederlands-limburg": "au Limbourg néerlandais",
};

/**
 * De naam van de regio zelf, voor de kaart en de lijst "Werkgebied". De
 * Belgische provincies dragen hun Franse naam in `regio-slugs.ts` (`nameFr`);
 * de drie Nederlandse hebben (nog) geen Franse pagina en dus geen `nameFr`,
 * maar in een Franse lijst hoort hun naam toch in het Frans.
 */
const NL_PROVINCIE_FR: Record<string, string> = {
  "noord-brabant": "Brabant-Septentrional",
  zeeland: "Zélande",
  "nederlands-limburg": "Limbourg néerlandais",
};

const TOEBEHOREN_LABEL_FR: Record<string, string> = {
  condenspomp: "Location pompe à condensats externe",
};

const GROEP_FR: Record<string, { label: string; sub: string }> = {
  "Vernast.be": { label: "Vernast.be", sub: "Le groupe" },
  "Vernast Bouwdrogers": { label: "Vernast Bouwdrogers", sub: "Appareils et packs" },
  Vochtbestrijding: { label: "Traitement de l'humidité", sub: "Cave · murs · façade" },
  Schilderwerken: { label: "Travaux de peinture", sub: "Intérieur & extérieur" },
};

/* ------------------------------------------------------------------ */
/* Dezelfde lijsten in het Engels (Brits).                              */
/* ------------------------------------------------------------------ */

/*
  Zelfde aanpak als het Frans: een vertaaltabel op het Nederlandse label.
  Hoofdterm "construction dehumidifier", zoekwoord "dehumidifier hire"; zie
  docs/vertalen.md. Ontbreekt een Engels label, dan faalt
  `src/test/navigatieEn.test.ts`.
*/
/** Nederlands label → Engels label, voor elke vaste link en elk kopje hierboven. */
export const LABEL_EN: Record<string, string> = {
  /* Pakketten */
  "Pleisterwerk drogen": "Plaster drying",
  "Chape drogen": "Screed drying",
  "Pleisterwerk + chape": "Plaster + screed",
  "Waterschade drogen": "Water damage drying",
  "Alles in één Droogservice": "All-in-one drying service",
  /* Toepassingen en schimmels */
  "Nieuwbouw drogen": "New-build drying",
  "Drogen na waterschade": "Drying after water damage",
  "Luchtkussen drogen": "Air cushion drying",
  "Renovatie drogen": "Renovation drying",
  Ontschimmeling: "Mould removal",
  Ozonbehandeling: "Ozone treatment",
  "Luchtontvochtiger huren": "Dehumidifier hire",
  /* Service en kiezen */
  Prijzen: "Prices",
  "Levering en installatie": "Delivery and installation",
  "Zelf afhalen in Aartselaar": "Collect it yourself in Aartselaar",
  "Bereken uw droogpakket": "Calculate your drying package",
  "Droogsimulator voor uw woning": "Drying simulator for your home",
  "Ons volledige gamma": "Our full range",
  "Losse toestellen afhalen": "Collect individual units",
  /* Bedrijf */
  "Over Vernast": "About Vernast",
  Realisaties: "Projects",
  Contact: "Contact",
  Home: "Home",
  /* Gidsen en uitleg */
  "Hoe lang moet chape drogen?": "How long does screed take to dry?",
  "Hoe lang moet pleisterwerk drogen?": "How long does plaster take to dry?",
  "Natuurlijk drogen of een bouwdroger?": "Natural drying or a dehumidifier?",
  "Condensdroger of adsorptiedroger?": "Condensation or desiccant dehumidifier?",
  "Stroomverbruik van een bouwdroger": "Power consumption of a dehumidifier",
  "Hoe drogen werkt": "How drying works",
  "Waarom bouwdroging": "Why building drying",
  Drooggarantie: "Drying guarantee",
  Klantenservice: "Customer service",
  "Gidsen over bouwdroging": "Guides to building drying",
  "Alle gidsen": "All guides",
  /* Kopjes van het mega-menu */
  Uitleg: "Explained",
  Gidsen: "Guides",
  Toepassingen: "Applications",
  "Het gamma": "The range",
  "Prijzen & service": "Prices & service",
};

/** Toestelnamen in het Engels: merk plus soortwoord, zoals `TOESTEL_LABEL`. */
const TOESTEL_LABEL_EN: Record<string, string> = {
  ttk170: "Boost construction dehumidifier",
  ttk350: "Performance construction dehumidifier",
  ttk650: "Ultimate construction dehumidifier",
  ttv4500: "Highflow axial fan",
  radiaal2250: "Turboflow radial fan",
  revolution: "Revolution desiccant dehumidifier",
  teddh30: "Heatpower 30 electric heater",
  teddh20: "Heatboost 20 electric heater",
};

/**
 * De Belgische provincies dragen hun Engelse naam in `regio-slugs.ts`
 * (`nameEn`, en `zinEn` voor "the province of Antwerp"). De drie Nederlandse
 * hebben er geen, net als bij `nameFr`; hun Engelse naam staat hier.
 */
const NL_PROVINCIE_EN: Record<string, string> = {
  "noord-brabant": "North Brabant",
  zeeland: "Zeeland",
  "nederlands-limburg": "Dutch Limburg",
};

const TOEBEHOREN_LABEL_EN: Record<string, string> = {
  condenspomp: "External condensate pump hire",
};

const GROEP_EN: Record<string, { label: string; sub: string }> = {
  "Vernast.be": { label: "Vernast.be", sub: "The group" },
  "Vernast Bouwdrogers": { label: "Vernast Bouwdrogers", sub: "Units and packages" },
  Vochtbestrijding: { label: "Damp control", sub: "Cellar · walls · façade" },
  Schilderwerken: { label: "Painting", sub: "Interior & exterior" },
};

/** De naam van de regio in de gevraagde taal, voor de kaart en "Werkgebied". */
export function regioNaam(
  regio: Pick<RegioRoute, "slug" | "name" | "nameFr" | "nameEn">,
  taal: Taal,
): string {
  if (taal === "fr") return regio.nameFr ?? NL_PROVINCIE_FR[regio.slug] ?? regio.name;
  if (taal === "en") return regio.nameEn ?? NL_PROVINCIE_EN[regio.slug] ?? regio.name;
  return regio.name;
}

/** Een vast menulabel in de gevraagde taal; onbekend blijft het Nederlands. */
export function vertaalLabel(label: string, taal: Taal): string {
  if (taal === "fr") return LABEL_FR[label] ?? label;
  if (taal === "en") return LABEL_EN[label] ?? label;
  return label;
}

/** De naam van een toestel in de gevraagde taal. Zie `toestelLabel`. */
export function toestelLabelIn(key: string, taal: Taal): string {
  const tabel = taal === "fr" ? TOESTEL_LABEL_FR : taal === "en" ? TOESTEL_LABEL_EN : null;
  if (tabel && Object.prototype.hasOwnProperty.call(tabel, key)) return tabel[key];
  return toestelLabel(key);
}

export interface Navigatie {
  TOESTELLEN: NavLinkItem[];
  TOEBEHOREN_LINKS: NavLinkItem[];
  PAKKETTEN: NavLinkItem[];
  TOEPASSINGEN: NavLinkItem[];
  SCHIMMELS: NavLinkItem[];
  MENU_SITUATIES: NavLinkItem[];
  SERVICE: NavLinkItem[];
  KIEZEN: NavLinkItem[];
  GAMMA: NavLinkItem[];
  BEDRIJF: NavLinkItem[];
  GIDSEN: NavLinkItem[];
  UITLEG: NavLinkItem[];
  ONTDEK: NavLinkItem[];
  ALLES_OVER_DROGEN: NavGroep[];
  REGIOS: NavLinkItem[];
  FOOTER_SITEMAP: NavLinkItem[];
  VERNAST_GROEP: typeof VERNAST_GROEP;
}

const NL: Navigatie = {
  TOESTELLEN,
  TOEBEHOREN_LINKS,
  PAKKETTEN,
  TOEPASSINGEN,
  SCHIMMELS,
  MENU_SITUATIES,
  SERVICE,
  KIEZEN,
  GAMMA,
  BEDRIJF,
  GIDSEN,
  UITLEG,
  ONTDEK,
  ALLES_OVER_DROGEN,
  REGIOS,
  FOOTER_SITEMAP,
  VERNAST_GROEP,
};

type Vreemd = Exclude<Taal, "nl">;

/** Per taal: de tabellen waaruit `bouw()` de lijsten vertaalt. */
const TABELLEN: Record<
  Vreemd,
  {
    labels: Record<string, string>;
    toebehoren: Record<string, string>;
    groep: Record<string, { label: string; sub: string }>;
    regio: (regio: RegioRoute) => string;
  }
> = {
  fr: {
    labels: LABEL_FR,
    toebehoren: TOEBEHOREN_LABEL_FR,
    groep: GROEP_FR,
    regio: (regio) => `Location déshumidificateur ${REGIO_IN_FR[regio.slug] ?? regio.name}`,
  },
  en: {
    labels: LABEL_EN,
    toebehoren: TOEBEHOREN_LABEL_EN,
    groep: GROEP_EN,
    regio: (regio) => `Dehumidifier hire in ${regio.zinEn ?? regioNaam(regio, "en")}`,
  },
};

const GEBOUWD: Partial<Record<Vreemd, Navigatie>> = {};

function bouw(taal: Vreemd): Navigatie {
  const t = TABELLEN[taal];
  const pad = (nlPad: string) => vertaalPad(nlPad, taal) ?? nlPad;
  /** Eén link: label uit de tabel, pad vertaald. */
  const een = (item: NavLinkItem): NavLinkItem => ({ label: t.labels[item.label] ?? item.label, path: pad(item.path) });
  const lijst = (items: NavLinkItem[]) => items.map(een);
  const toebehoren = TOEBEHOREN.map((tb) => ({
    label: t.toebehoren[tb.slug] ?? `${tb.naam} huren`,
    path: pad(toebehorenPad(tb.slug)),
  }));
  // GAMMA en het mega-menu bevatten de toebehorenlinks; die hebben hun eigen
  // label per taal (het Nederlandse is samengesteld, "… huren").
  const perPad = new Map(TOEBEHOREN_LINKS.map((tb, i) => [tb.path, toebehoren[i]]));
  const vervang = (items: NavLinkItem[]) => items.map((item) => perPad.get(item.path) ?? een(item));
  return {
    TOESTELLEN: PRODUCT_ORDER.map((key) => ({ label: toestelLabelIn(key, taal), path: pad(toestelPad(key)) })),
    TOEBEHOREN_LINKS: toebehoren,
    PAKKETTEN: lijst(PAKKETTEN),
    TOEPASSINGEN: lijst(TOEPASSINGEN),
    SCHIMMELS: lijst(SCHIMMELS),
    MENU_SITUATIES: lijst(MENU_SITUATIES),
    SERVICE: lijst(SERVICE),
    KIEZEN: lijst(KIEZEN),
    GAMMA: vervang(GAMMA),
    BEDRIJF: lijst(BEDRIJF),
    GIDSEN: lijst(GIDSEN),
    UITLEG: lijst(UITLEG),
    ONTDEK: lijst(ONTDEK),
    ALLES_OVER_DROGEN: ALLES_OVER_DROGEN.map((g) => ({
      titel: t.labels[g.titel] ?? g.titel,
      items: vervang(g.items),
    })),
    REGIOS: REGIO_ROUTES.map((regio) => ({ label: t.regio(regio), path: pad(regio.path) })),
    FOOTER_SITEMAP: lijst(FOOTER_SITEMAP),
    VERNAST_GROEP: VERNAST_GROEP.map((g) => ({
      ...g,
      ...(t.groep[g.label] ?? {}),
      ...(g.path ? { path: pad(g.path) } : {}),
    })),
  };
}

/**
 * Alle menulijsten in één taal. De Nederlandse zijn de constanten hierboven,
 * ongewijzigd; de andere worden één keer opgebouwd en daarna hergebruikt.
 */
export function navigatie(taal: Taal): Navigatie {
  if (taal === "nl") return NL;
  return (GEBOUWD[taal] ??= bouw(taal));
}
