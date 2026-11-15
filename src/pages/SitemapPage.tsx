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

/**
 * De blokken van het werkgebied waar we een pagina voor hebben.
 *
 * Alle zes dragen hun eigen pagina en hun kop is dus een link. Brussel stond
 * hier tot 13-11-2026 als blok zonder `path`, omdat een kop die naar een 404
 * wijst erger is dan een kop zonder link; sinds /bouwdroger-huren-brussel
 * bestaat, komt het gewest gewoon uit `REGIO_ROUTES` mee.
 */
interface Gebied {
  sleutel: string;
  kop: string;
  path?: string;
  streken: Streek[];
}

const alsGebied = (regio: (typeof REGIO_ROUTES)[number]): Gebied => ({
  sleutel: regio.slug,
  kop: `Bouwdroger huren in ${regio.name}`,
  path: regio.path,
  streken: STREKEN_PER_REGIO[regio.slug] ?? [],
});

/* Een Waalse provincie met een eigen pagina staat onder Wallonië, niet onder
   Vlaanderen, ook al komt ze uit dezelfde `REGIO_ROUTES`.

   Brussel staat apart. Tot 15-11-2026 stond het gewest als zesde gebied onder
   "België: Vlaanderen en Brussel", en las het daardoor als een Vlaamse
   provincie. Het is een gewest naast Vlaanderen en Wallonië, met een eigen
   kop. */
const VLAANDEREN: Gebied[] = REGIO_ROUTES.filter(
  (regio) => !(regio.slug in WAALSE_STREKEN) && regio.slug !== "brussel"
).map(alsGebied);
const BRUSSEL: Gebied[] = REGIO_ROUTES.filter((regio) => regio.slug === "brussel").map(alsGebied);

/**
 * Wallonië en de Nederlandse grensstreek: wél in de lijst, nog zonder pagina.
 *
 * Bewust zonder `path` en zonder levertermijn. Twee redenen. Een kop die naar
 * een onbestaande pagina linkt is erger dan een kop zonder link, dat was de les
 * van Brussel. En het ritme van de rest van de site, "binnen 24 uur geleverd",
 * geldt hier niet: Virton ligt op drie uur en Eindhoven achter een grens, met
 * andere btw-regels. Daarom staat er boven deze blokken "op aanvraag" en geen
 * belofte die we niet nakomen.
 *
 * Twee lijsten en niet één. Ze stonden tot 15-11-2026 samen onder de kop
 * "Wallonië en de Nederlandse grensstreek", met "(NL)" achter de twee
 * Nederlandse provincies als enige onderscheid. Wie de pagina doorliep, zag
 * daardoor niet in één oogopslag welk deel België was en welk Nederland, en
 * Zeeland las als de achtste Waalse provincie. Nu draagt elk land zijn eigen
 * sectie.
 */
/*
  Heeft een provincie haar pagina (Waals-Brabant sinds 15-11-2026), dan komt ze
  uit `REGIO_ROUTES` met kop en gemeenten als link, net als de Vlaamse. De rest
  blijft tekst tot haar pagina er is.
*/
const WALLONIE: Gebied[] = [
  { sleutel: "waals-brabant", kop: "Waals-Brabant", streken: WAALSE_STREKEN["waals-brabant"] },
  { sleutel: "henegouwen", kop: "Henegouwen", streken: WAALSE_STREKEN.henegouwen },
  { sleutel: "luik", kop: "Luik", streken: WAALSE_STREKEN.luik },
  { sleutel: "namen", kop: "Namen", streken: WAALSE_STREKEN.namen },
  // "Provincie" erbij: zonder dat leest het onder Wallonië als het groothertogdom.
  { sleutel: "luxemburg", kop: "Provincie Luxemburg", streken: WAALSE_STREKEN.luxemburg },
].map((gebied) => {
  const regio = REGIO_ROUTES.find((r) => r.slug === gebied.sleutel);
  return regio ? alsGebied(regio) : gebied;
});

const NEDERLAND: Gebied[] = [
  { sleutel: "nl-noord-brabant", kop: "Noord-Brabant", streken: NEDERLANDSE_STREKEN["noord-brabant"] },
  { sleutel: "nl-zeeland", kop: "Zeeland", streken: NEDERLANDSE_STREKEN.zeeland },
  // "Nederlands" erbij: zonder dat leest het als de Belgische provincie hierboven.
  {
    sleutel: "nl-limburg",
    kop: "Nederlands Limburg",
    streken: NEDERLANDSE_STREKEN["nederlands-limburg"],
  },
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
    items: [
      ...GAMMA.filter((item) => item.path === "/machines"),
      ...TOESTELLEN,
      // De toebehoren staan hier en niet in een eigen blok: één regel onder een
      // eigen kopje leest als een categorie waar niets in zit.
      ...TOEBEHOREN_LINKS,
    ],
  },
  {
    titel: "Over Vernast",
    uitleg: "Wie het werk doet en hoe u ons bereikt.",
    items: BEDRIJF,
  },
];

/** Een gebied met een eigen pagina: de kop is de link, en elke plaats met een
    eigen pagina ook. */
const GebiedMetPagina = ({ gebied }: { gebied: Gebied }) => {
  /*
    "Plaatsen" en niet "gemeenten". De provincie Antwerpen telt
    67 gemeenten, maar deze lijst noemt er 77: de districten van
    de stad staan er apart bij omdat mensen "bouwdroger huren
    Deurne" intikken. Het label "77 gemeenten" was dus gewoon
    onjuist. Nagerekend op 13-11-2026.
  */
  const aantal = gebied.streken.reduce((n, s) => n + s.gemeenten.length, 0);
  return (
    <div className="sm-prov">
      <h3>
        {gebied.path ? <Link to={gebied.path}>{gebied.kop}</Link> : gebied.kop}
        <span className="sm-telling">{aantal} plaatsen</span>
      </h3>
      <div className="sm-streken">
        {gebied.streken.map((streek) => (
          <div className="sm-streek" key={streek.naam}>
            <h4>{streek.naam}</h4>
            <ul>
              {/* Alfabetisch, en niet in de volgorde van
                `provincie-gemeenten.ts`: op de provinciepagina
                leest die lijst als een opsomming in een zin,
                hier zoekt iemand één naam tussen dertig. */}
              {[...streek.gemeenten]
                .sort((a, b) => a.localeCompare(b, "nl"))
                .map((naam) => {
                  const eigen = gemeenteVanPlaats(naam);
                  return (
                    <li key={naam}>
                      {eigen ? (
                        <Link to={eigen.path}>{naam}</Link>
                      ) : (
                        <span>{naam}</span>
                      )}
                    </li>
                  );
                })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

/** Een provincie buiten het vaste werkgebied: namen als tekst, want er is nog
    geen pagina om naar te linken. */
const GebiedOpAanvraag = ({ gebied }: { gebied: Gebied }) => {
  const aantal = gebied.streken.reduce((n, s) => n + s.gemeenten.length, 0);
  return (
    <div className="sm-prov">
      <h3>
        {gebied.kop}
        <span className="sm-telling">{aantal} gemeenten</span>
      </h3>
      <div className="sm-streken">
        {gebied.streken.map((streek) => (
          <div className="sm-streek" key={streek.naam}>
            <h4>{streek.naam}</h4>
            <ul>
              {[...streek.gemeenten]
                .sort((a, b) => a.localeCompare(b, "nl"))
                .map((naam) => (
                  <li key={naam}>
                    <span>{naam}</span>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

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
                  Zoekt u iets specifieks, een toestel, een gids of uw gemeente, dan staat het
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

            {/*
              Het werkgebied staat per provincie en per streek, dezelfde
              indeling als op de provinciepagina zelf.

              Waarom niet gewoon de vijf provincielinks: wie op een sitemap
              kijkt, zoekt zijn eigen gemeente. Die stonden hier als één rij
              van zeventien namen — de zeventien met een eigen pagina — en
              daarmee leek het werkgebied zeventien gemeenten groot in plaats
              van de ruim 290 waar we effectief leveren.

              De zeventien gemeenten met een eigen pagina stonden daarnaast
              nog eens als losse rij onderaan. Die rij viel onder de streeklijst
              van Limburg en las daardoor als "en dit zijn ook Limburgse
              gemeenten", terwijl het Aartselaar en Mechelen waren. Ze is weg:
              `provincieGemeenten.test.ts` bewaakt dat elke gemeentepagina hier
              net zo gespeld staat als in `gemeente-slugs.ts` en dus hoe dan ook
              een link krijgt — wat `audit-seo.mjs` na de build eist.

              De districten van Antwerpen (Berchem, Deurne, Ekeren, …) staan in
              de streek "Stad Antwerpen en districten" als gewone tekst, omdat
              ze nog geen eigen pagina hebben. Krijgen ze er één, dan is hier
              niets aan te passen: `gemeenteVanPlaats()` maakt er een link van
              zodra de naam in `gemeente-slugs.ts` staat — precies zoals Wilrijk
              nu al een link is.

              De streekomschrijving uit `provincie-gemeenten.ts` blijft hier
              weg, al staat ze op de provinciepagina wel bij elke streek: die
              zinnen een tweede keer afdrukken maakt van deze pagina een
              kopie van stukken provinciepagina, en dat is precies wat
              `audit-seo.mjs` als dubbele inhoud aanrekent. Een sitemap is een
              wegwijzer, geen tweede tekst.
            */}
            <section className="sm-breed" aria-labelledby="sm-regio">
              <h2 id="sm-regio">België: Vlaanderen</h2>
              <p className="sm-uit">
                De vijf Vlaamse provincies en elke plaats waar we leveren, per streek. Elke plaats
                hier heeft haar eigen pagina, en haar naam is de link erheen.
              </p>
              {/* Hier stond eerst nog een rij met dezelfde vijf
                  provincielinks uit `REGIOS`. Die dateert van toen dit blok
                  alleen die vijf links was; sinds elke provincie hieronder
                  haar eigen kop heeft — en die kop ís de link naar de
                  provinciepagina — stond elke provincie twee keer op dezelfde
                  pagina, één keer als losse regel en vijf regels later als
                  titel van haar eigen lijst. Twee links naar hetzelfde pad met
                  dezelfde ankertekst zeggen een bezoeker niets extra. */}
              {VLAANDEREN.map((gebied) => (
                <GebiedMetPagina key={gebied.sleutel} gebied={gebied} />
              ))}
            </section>

            <section className="sm-breed" aria-labelledby="sm-brussel">
              <h2 id="sm-brussel">België: Brussels Hoofdstedelijk Gewest</h2>
              {BRUSSEL.map((gebied) => (
                <GebiedMetPagina key={gebied.sleutel} gebied={gebied} />
              ))}
            </section>

            {/*
              Wallonië en de Nederlandse grensstreek staan elk in een eigen
              sectie en niet tussen de gebieden erboven, want ze zijn iets anders:
              een gebied waar we komen als het gevraagd wordt, zonder pagina en
              zonder de levertermijn van 24 uur die hierboven wél geldt. De
              namen zijn daarom tekst en geen link, en de kop zegt "op
              aanvraag" in plaats van iets te beloven.
            */}
            <section className="sm-breed" aria-labelledby="sm-wallonie">
              <h2 id="sm-wallonie">België: Wallonië, op aanvraag</h2>
              {WALLONIE.map((gebied) =>
                gebied.path ? (
                  <GebiedMetPagina key={gebied.sleutel} gebied={gebied} />
                ) : (
                  <GebiedOpAanvraag key={gebied.sleutel} gebied={gebied} />
                )
              )}
            </section>

            <section className="sm-breed" aria-labelledby="sm-nederland">
              <h2 id="sm-nederland">Nederland</h2>
              <p className="sm-uit">
                De gemeenten van Noord-Brabant, Zeeland en Nederlands Limburg, de drie
                provincies langs de Belgische grens. Ook hier geen
                levertermijn van 24 uur: de rit is langer en over de grens gelden andere
                btw-regels. Bel ons op <a href="tel:+3236899065">03 689 90 65</a> en we zeggen
                meteen wat er kan.
              </p>
              {NEDERLAND.map((gebied) => (
                <GebiedOpAanvraag key={gebied.sleutel} gebied={gebied} />
              ))}
            </section>

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
