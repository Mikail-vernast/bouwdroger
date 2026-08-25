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

export interface NavLinkItem {
  label: string;
  /** Intern pad; externe URL's horen hier niet. */
  path: string;
}

/**
 * De namen waarmee bezoekers de toestellen zoeken, en niet de modelcodes uit de
 * tarieven: iemand zoekt "radiaalventilator huren", niet "Radiaal 2250".
 * Ontbreekt een naam, dan valt het menu terug op de korte naam uit het portaal.
 */
const TOESTEL_LABEL: Record<string, string> = {
  ttk170: "Small bouwdroger",
  ttk350: "Medium bouwdroger",
  ttk650: "Large bouwdroger",
  ttv4500: "Turbo axiaalventilator",
  radiaal2250: "Turbo radiaalventilator",
  teddh30: "Elektrische kachel 30 kW",
  teddh20: "Elektrische kachel 20 kW",
};

/**
 * Het gamma in de menu's van beide headers.
 *
 * Stond eerder twee keer met de hand overgetypt, en liep daardoor uit de pas:
 * "Turbo radiaalventilator" linkte naar de pagina van de axiaalventilator en de
 * kachel stond er met een vermogen dat nergens anders voorkwam. Nu volgt de
 * lijst de gepubliceerde tarieven — een toestel dat in het portaal uit de
 * verhuur gaat, verdwijnt hier vanzelf mee.
 */
export const TOESTELLEN: NavLinkItem[] = PRODUCT_ORDER.map((key) => ({
  label: TOESTEL_LABEL[key] ?? PRODUCTS[key].short,
  path: `/verhuur/toestel/${key}`,
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

/** Waarvoor mensen drogen — elk een eigen zoekintentie en eigen pagina. */
export const TOEPASSINGEN: NavLinkItem[] = [
  { label: "Chape en pleisterwerk drogen", path: "/nieuwbouw" },
  { label: "Drogen na waterschade", path: "/waterschade" },
  { label: "Vochtige kelder of schimmel", path: "/renovatie" },
];

/** Hoe het toestel bij de klant raakt, en wat het kost. */
export const SERVICE: NavLinkItem[] = [
  { label: "Prijzen en voorwaarden", path: "/prijzen" },
  { label: "Levering en installatie", path: "/levering" },
  { label: "Zelf afhalen in Aartselaar", path: "/afhalen" },
  { label: "Online reserveren", path: "/reserveren" },
];

/** De twee rekenhulpen en het gamma. */
export const KIEZEN: NavLinkItem[] = [
  { label: "Bereken uw droogpakket", path: "/verhuur/calculator" },
  { label: "Welke capaciteit heb ik nodig?", path: "/calculator" },
  { label: "Ons volledige gamma", path: "/machines" },
];

/** Het bedrijf achter de toestellen. */
export const BEDRIJF: NavLinkItem[] = [
  { label: "Over Vernast", path: "/over-ons" },
  { label: "Realisaties", path: "/realisaties" },
  { label: "Contact", path: "/contact" },
];

/**
 * Uitleg- en servicepagina's die anders nergens vandaan gelinkt werden en zo
 * een wees dreigden te worden: /klantservice, /drooggarantie, /hoe-drogen-werkt
 * en /waarom-bouwdroging stonden wel in de sitemap, maar zonder interne link.
 */
export const ONTDEK: NavLinkItem[] = [
  { label: "Klantenservice", path: "/klantservice" },
  { label: "Drooggarantie", path: "/drooggarantie" },
  { label: "Hoe drogen werkt", path: "/hoe-drogen-werkt" },
  { label: "Waarom bouwdroging", path: "/waarom-bouwdroging" },
];

/**
 * De Vernast-groep: de zusterbedrijven, elk op hun eigen domein. Externe URL's,
 * dus bewust géén NavLinkItem (dat pad is intern). "Verhuur & bouwdroging" is
 * deze site zelf en blijft daarom een interne link (path).
 */
export const VERNAST_GROEP: { label: string; sub: string; href?: string; path?: string }[] = [
  { label: "Vernast.be", sub: "De groep", href: "https://www.vernast.be/" },
  { label: "Verhuur & bouwdroging", sub: "Toestellen en pakketten", path: "/" },
  { label: "Vochtbestrijding", sub: "Kelder · muren · gevel", href: "https://www.vernast-vochtbestrijding.be/" },
  { label: "Schilderwerken", sub: "Binnen & buiten", href: "https://www.vernast-schilderwerken.be/" },
];
