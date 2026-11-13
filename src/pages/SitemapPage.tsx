import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import { SEO } from "@/data/seo";
import { breadcrumbSchema, itemListSchema, organizationSchema } from "@/lib/schema";
import {
  ALLES_OVER_DROGEN,
  BEDRIJF,
  GAMMA,
  REGIOS,
  TOEPASSINGEN,
  TOESTELLEN,
  type NavLinkItem,
} from "@/data/navigation";
import { GEMEENTE_ROUTES } from "@/data/gemeente-slugs";
import { REALISATIES } from "@/data/realisaties";
import "@/styles/v3-content.css";
import "@/styles/sitemap.css";

/**
 * De zichtbare sitemap: elke pagina van de site, gegroepeerd.
 *
 * sitemap.xml bestond al en wordt na de build afgeleid uit dist/ — die is voor
 * zoekmachines. Deze is voor mensen én voor de antwoordmachines die geen
 * JavaScript draaien: één pagina waarop alles in twee klikken bereikbaar is.
 *
 * Alle lijsten komen uit dezelfde bronnen als de menu's en de footer
 * (`src/data/navigation.ts`, `gemeente-slugs.ts`, `realisaties.ts`), nooit
 * overgetypt. Een nieuwe pagina die in `navigation.ts` gezet wordt — en dat
 * hoort sowieso, anders is ze een wees — staat hier dus meteen bij.
 *
 * `scripts/audit-seo.mjs` controleert na de build dat elke URL uit sitemap.xml
 * ook écht vanaf deze pagina gelinkt wordt. Zo kan er niets stil uit vallen.
 */

/** Pagina's die geen menu-item zijn maar wel geïndexeerd worden. */
const BESTELLEN: NavLinkItem[] = [
  { label: "Bereken uw droogpakket", path: "/verhuur/calculator" },
  { label: "Alles in één Droogservice", path: "/verhuur/pakket" },
  { label: "Losse toestellen afhalen", path: "/verhuur/afhalen" },
  { label: "Levering en installatie", path: "/levering" },
  { label: "Zelf afhalen in Aartselaar", path: "/afhalen" },
  { label: "Prijzen", path: "/prijzen" },
];

const JURIDISCH: NavLinkItem[] = [
  { label: "Privacybeleid", path: "/privacy" },
  { label: "Algemene voorwaarden", path: "/algemene-voorwaarden" },
];

interface Blok {
  titel: string;
  uitleg: string;
  items: NavLinkItem[];
}

/** "Droogpakket bestellen" → "droogpakket-bestellen"; een id met een spatie
    erin is geen geldige `aria-labelledby`-verwijzing. */
const id = (titel: string) =>
  "sm-" +
  titel
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const BLOKKEN: Blok[] = [
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
    items: [...GAMMA.filter((item) => item.path === "/machines"), ...TOESTELLEN],
  },
  {
    titel: "Over Vernast",
    uitleg: "Wie het werk doet en hoe u ons bereikt.",
    items: BEDRIJF,
  },
];

const SitemapPage = () => {
  /*
    Elke pagina krijgt één plek. De blokken hierboven en de groepen uit het
    mega-menu overlappen elkaar flink — /chape-drogen staat zowel onder
    "Waarvoor u droogt" als onder "Toepassingen", /machines onder "Toestellen
    huren" én onder "Het gamma". Op een sitemap is diezelfde link drie keer
    geen extra wegwijzer maar ruis: wie zoekt, moet elk blok lezen om te weten
    of er iets nieuws in staat. Het eerste blok waarin een pad voorkomt houdt
    hem; wat daarna leeg valt, verdwijnt.
  */
  const gezien = new Set<string>();
  const blokken = [
    ...BLOKKEN,
    ...ALLES_OVER_DROGEN.map((groep) => ({
      titel: groep.titel,
      uitleg: "",
      items: groep.items,
    })),
  ]
    .map((blok) => ({
      ...blok,
      items: blok.items.filter((item) => !gezien.has(item.path) && gezien.add(item.path)),
    }))
    .filter((blok) => blok.items.length > 0);

  /* De volle titel, niet de chip: "Bouwdroging · Antwerpen" staat twee keer in
     de lijst en "Bouwdroging · woning" zegt niets. De titel is per werf uniek
     en vertelt meteen wat er gedroogd is. */
  const realisaties: NavLinkItem[] = REALISATIES.map((r) => ({
    label: r.titel,
    path: `/realisaties/${r.slug}`,
  }));

  const gemeenten: NavLinkItem[] = GEMEENTE_ROUTES.map((g) => ({
    label: g.name,
    path: g.path,
  }));

  const alles = blokken.flatMap((b) => b.items);

  return (
    <div className="v3c sm-page">
      <PageMeta
        {...SEO.sitemap}
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Sitemap", path: "/sitemap" },
          ]),
          /* De hoofdsecties als lijst: wat een antwoordmachine nodig heeft om
             de site als geheel te begrijpen in plaats van als losse pagina's. */
          itemListSchema(
            "Alle pagina's van Vernast Bouwdrogers",
            alles.map((item) => ({ name: item.label, path: item.path }))
          ),
        ]}
      />

      <V3Header lightAfter={330} />

      <main>
        <div className="redtop">
          <section className="hero">
            <div className="wrap">
              <div className="hero-copy">
                <nav aria-label="Kruimelpad" className="kruimels">
                  <ol>
                    <li>
                      <Link to="/">Home</Link>
                      <span aria-hidden="true"> /</span>
                    </li>
                    <li aria-current="page">Sitemap</li>
                  </ol>
                </nav>
                <span className="kick">Alle pagina's</span>
                <h1>Sitemap</h1>
                <p>
                  Elke pagina van vernast-bouwdrogers.be op één rij, gegroepeerd per onderwerp.
                  Zoekt u iets specifieks — een toestel, een gids, uw gemeente — dan staat het
                  hieronder.
                </p>
              </div>
            </div>
          </section>
        </div>

        <section className="sm-body">
          <div className="wrap">
            <div className="sm-grid">
              {blokken.map((blok) => (
                <nav className="sm-blok" key={blok.titel} aria-labelledby={id(blok.titel)}>
                  <h2 id={id(blok.titel)}>{blok.titel}</h2>
                  {blok.uitleg && <p className="sm-uit">{blok.uitleg}</p>}
                  <ul>
                    {blok.items.map((item) => (
                      <li key={item.path + item.label}>
                        <Link to={item.path}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>

            <nav className="sm-breed" aria-labelledby="sm-regio">
              <h2 id="sm-regio">Werkgebied</h2>
              <p className="sm-uit">
                Vijf provinciepagina's en de gemeenten waar we het vaakst leveren.
              </p>
              <ul className="sm-rij">
                {REGIOS.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path}>{item.label}</Link>
                  </li>
                ))}
              </ul>
              <ul className="sm-rij sm-klein">
                {gemeenten.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="sm-breed" aria-labelledby="sm-real">
              <h2 id="sm-real">Realisaties</h2>
              <p className="sm-uit">Werven die we hebben gedroogd, met de cijfers erbij.</p>
              <ul className="sm-rij sm-breed-2">
                <li>
                  <Link to="/realisaties">Alle realisaties</Link>
                </li>
                {realisaties.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="sm-breed sm-voet" aria-labelledby="sm-jur">
              <h2 id="sm-jur">Juridisch</h2>
              <ul className="sm-rij sm-klein">
                {JURIDISCH.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>
      </main>

      <V3Footer />
    </div>
  );
};

export default SitemapPage;
