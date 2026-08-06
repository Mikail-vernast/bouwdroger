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
export interface NavLinkItem {
  label: string;
  /** Intern pad; externe URL's horen hier niet. */
  path: string;
}

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
