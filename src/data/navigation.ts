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
import { REGIO_ROUTES } from "./regio-slugs.js";
import { toestelPad } from "./verhuur";

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
 * Lees ze via `toestelLabel()` hieronder, nooit via `PRODUCTS[key].short`. Dat
 * veld komt rechtstreeks uit het portaal en is de typecode van de fabrikant —
 * "TTK 170 S", "TEddH 30 T". Die stonden tot 12-11-2026 op de regiopagina's als
 * koptekst en op de knop ("Bekijk TTK 170 S"), terwijl het menu, de footer en de
 * toestelpagina's al "Small bouwdroger" zeiden. Niemand huurt een typenummer.
 */
const TOESTEL_LABEL: Record<string, string> = {
  ttk170: "Small bouwdroger",
  ttk350: "Medium bouwdroger",
  ttk650: "Large bouwdroger",
  // De twee ventilatoren heten sinds 11-2026 Highflow en Turboflow. Het
  // soortwoord blijft erachter staan: niemand zoekt op "Turboflow huren", wel
  // op "radiaalventilator huren".
  ttv4500: "Highflow axiaalventilator",
  radiaal2250: "Turboflow radiaalventilator",
  teddh30: "Elektrische kachel 30 kW",
  teddh20: "Elektrische kachel 20 kW",
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
 * De volgorde is de ladder die een bezoeker afgaat: eerst zien wat er is, dan
 * één toestel, dan een volledig pakket, dan het laten berekenen.
 */
export const GAMMA: NavLinkItem[] = [
  { label: "Ons volledige gamma", path: "/machines" },
  { label: "Losse toestellen afhalen", path: "/verhuur/afhalen" },
  { label: "Alles in één Droogservice", path: "/verhuur/pakket" },
  { label: "Bereken uw droogpakket", path: "/verhuur/calculator" },
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
