import type { RouteRecord } from "vite-react-ssg";
import Layout from "./Layout";
import ErrorPage from "./pages/ErrorPage";
import { REGIO_ROUTES } from "./data/regio-slugs";
import { GEMEENTE_ROUTES } from "./data/gemeente-slugs";

/**
 * De routes als data-array in plaats van als <Routes>-JSX. Dat is wat
 * vite-react-ssg nodig heeft om elke pagina bij de build als volledige HTML
 * weg te schrijven — zonder dat kunnen zoekmachines die geen JavaScript
 * uitvoeren (alle AI-antwoordmachines) niets van deze site lezen.
 *
 * Elke pagina wordt lui geladen, zodat een bezoeker alleen de code van de
 * route krijgt die hij opvraagt in plaats van de volledige app.
 *
 * `getStaticPaths` bepaalt welke varianten van een dynamische route
 * geprerenderd worden. Die functies draaien **alleen bij de build**, dus
 * halen ze hun data met een dynamische import op. Stonden die imports
 * bovenaan dit bestand, dan belandden ze in de entry-chunk — en die laadt
 * elke bezoeker op elke pagina. Alleen `data/tarieven.ts` is al 113 kB: de
 * volledige prijstabel, meegestuurd naar iemand die de homepage opent.
 */
export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    entry: "src/Layout.tsx",
    /*
     * Vangt elke fout in een onderliggende route op. Zonder dit toont
     * react-router zijn eigen scherm met een stacktrace en "Hey developer 👋"
     * — aan een klant midden in een boeking.
     *
     * Bewust niet lazy: als de app al struikelt, mag het vangnet niet
     * afhangen van een chunk die dan nog moet binnenkomen.
     */
    errorElement: <ErrorPage />,
    children: [
      { index: true, lazy: async () => ({ Component: (await import("./pages/Index")).default }) },
      {
        path: "levering",
        lazy: async () => ({ Component: (await import("./pages/LeveringPage")).default }),
      },
      {
        path: "afhalen",
        lazy: async () => ({ Component: (await import("./pages/AfhalenPage")).default }),
      },
      {
        path: "levering/pakket/:packageId",
        lazy: async () => ({ Component: (await import("./pages/PackageDetailPage")).default }),
        getStaticPaths: async () =>
          (await import("./data/packages")).getAllPackages().map((p) => `/levering/pakket/${p.id}`),
      },
      {
        path: "over-ons",
        lazy: async () => ({ Component: (await import("./pages/OverOnsPage")).default }),
      },
      {
        path: "realisaties",
        lazy: async () => ({ Component: (await import("./pages/RealisatiesPage")).default }),
      },
      {
        path: "realisaties/:slug",
        lazy: async () => ({ Component: (await import("./pages/RealisatieDetailPage")).default }),
        getStaticPaths: async () =>
          (await import("./data/realisaties")).REALISATIES.map((r) => `/realisaties/${r.slug}`),
      },
      {
        path: "contact",
        lazy: async () => ({ Component: (await import("./pages/ContactPage")).default }),
      },
      {
        path: "klantservice",
        lazy: async () => ({ Component: (await import("./pages/KlantservicePage")).default }),
      },
      {
        path: "drooggarantie",
        lazy: async () => ({ Component: (await import("./pages/DrooggarantiePage")).default }),
      },
      {
        path: "hoe-drogen-werkt",
        lazy: async () => ({ Component: (await import("./pages/HoeDrogenWerktPage")).default }),
      },
      {
        path: "waarom-bouwdroging",
        lazy: async () => ({ Component: (await import("./pages/WaaromBouwdrogingPage")).default }),
      },
      /*
       * Gidsen: elk één informatieve zoekvraag (droogtijd chape, droogtijd
       * pleisterwerk, toesteltype, verbruik). Vaste paden in plaats van
       * `gids/:slug` — het zijn aparte pagina's met een eigen opbouw, geen
       * sjabloon met data.
       */
      {
        path: "gids",
        lazy: async () => ({ Component: (await import("./pages/gids/GidsIndexPage")).default }),
      },
      {
        path: "gids/hoe-lang-moet-chape-drogen",
        lazy: async () => ({ Component: (await import("./pages/gids/ChapeDroogtijdPage")).default }),
      },
      {
        path: "gids/hoe-lang-moet-pleisterwerk-drogen",
        lazy: async () => ({ Component: (await import("./pages/gids/PleisterwerkDroogtijdPage")).default }),
      },
      {
        path: "gids/condensdroger-of-adsorptiedroger",
        lazy: async () => ({ Component: (await import("./pages/gids/CondensAdsorptiePage")).default }),
      },
      {
        path: "gids/natuurlijk-drogen-of-bouwdroger",
        lazy: async () => ({ Component: (await import("./pages/gids/NatuurlijkDrogenPage")).default }),
      },
      {
        path: "gids/stroomverbruik-bouwdroger",
        lazy: async () => ({ Component: (await import("./pages/gids/StroomverbruikPage")).default }),
      },
      {
        path: "luchtontvochtiger-huren",
        lazy: async () => ({ Component: (await import("./pages/LuchtontvochtigerHurenPage")).default }),
      },
      /*
        De zichtbare sitemap. Hij wordt geprerenderd zoals elke andere pagina,
        zodat een antwoordmachine zonder JavaScript hem gewoon kan uitlezen —
        dat is de helft van zijn nut.
      */
      {
        path: "sitemap",
        lazy: async () => ({ Component: (await import("./pages/SitemapPage")).default }),
      },
      {
        path: "privacy",
        lazy: async () => ({ Component: (await import("./pages/PrivacyPage")).default }),
      },
      {
        path: "algemene-voorwaarden",
        lazy: async () => ({ Component: (await import("./pages/AlgemeneVoorwaardenPage")).default }),
      },
      {
        path: "product/:id",
        lazy: async () => ({ Component: (await import("./pages/ProductDetail")).default }),
        getStaticPaths: async () =>
          (await import("./data/products")).products.map((p) => `/product/${p.id}`),
      },
      {
        path: "booking",
        lazy: async () => ({ Component: (await import("./pages/BookingPage")).default }),
      },
      {
        path: "booking/success",
        lazy: async () => ({ Component: (await import("./pages/BookingSuccess")).default }),
      },
      {
        path: "chape-drogen",
        lazy: async () => ({ Component: (await import("./pages/ChapeDrogenPage")).default }),
      },
      {
        path: "pleisterwerk-drogen",
        lazy: async () => ({ Component: (await import("./pages/PleisterwerkDrogenPage")).default }),
      },
      {
        path: "nieuwbouw-drogen",
        lazy: async () => ({ Component: (await import("./pages/NieuwbouwPage")).default }),
      },
      {
        path: "waterschade",
        lazy: async () => ({ Component: (await import("./pages/WaterschadePage")).default }),
      },
      {
        path: "renovatie",
        lazy: async () => ({ Component: (await import("./pages/RenovatiePage")).default }),
      },
      /*
       * Ozonbehandeling — de ontschimmeling. Een dienst, geen toestel: er staat
       * geen dagprijs tegenover, dus de pagina boekt via een aanvraag in plaats
       * van via de verhuurfunnel. Zelfde slug als op de zustersite, zodat beide
       * domeinen dezelfde term op hetzelfde pad voeren.
       */
      {
        path: "ozonbehandeling",
        lazy: async () => ({ Component: (await import("./pages/OzonbehandelingPage")).default }),
      },
      /*
       * Ontschimmeling — het handwerk vóór de ozonbehandeling. Eigen URL omdat
       * het een eigen zoekvraag is; de twee pagina's linken naar elkaar en
       * delen hun schil, niet hun copy.
       */
      {
        path: "ontschimmeling",
        lazy: async () => ({ Component: (await import("./pages/OntschimmelingPage")).default }),
      },
      {
        path: "machines",
        lazy: async () => ({ Component: (await import("./pages/MachinesPage")).default }),
      },
      {
        path: "prijzen",
        lazy: async () => ({ Component: (await import("./pages/PrijzenPage")).default }),
      },

      /*
       * Regiopagina's: /bouwdroger-huren-antwerpen enzovoort. Vijf vaste
       * routes naar één sjabloon, want een parameter in react-router moet een
       * heel segment zijn — `bouwdroger-huren-:regio` bestaat niet. De lijst
       * komt uit regio-slugs.ts (een paar regels); de teksten zelf laadt de
       * pagina pas als iemand ze opent.
       */
      ...REGIO_ROUTES.map(
        (regio): RouteRecord => ({
          path: regio.path.slice(1),
          lazy: async () => ({ Component: (await import("./pages/RegioPage")).default }),
        })
      ),

      /*
        De gemeentepagina's, op dezelfde manier: vaste routes in plaats van een
        parameter, want `bouwdroger-huren-:gemeente` kan React Router niet —
        een parameter moet een heel segment zijn. `gemeente-slugs.ts` is net als
        `regio-slugs.ts` een paar regels zonder proza; de teksten (`gemeenten.ts`)
        laadt de pagina pas als iemand ze opent.
      */
      ...GEMEENTE_ROUTES.map(
        (gemeente): RouteRecord => ({
          path: gemeente.path.slice(1),
          lazy: async () => ({ Component: (await import("./pages/GemeentePage")).default }),
        })
      ),

      /* Verhuurplatform — de conversie-funnel uit de Claude Design handoff */
      {
        path: "verhuur/calculator",
        lazy: async () => ({
          Component: (await import("./pages/verhuur/VerhuurCalculatorPage")).default,
        }),
      },
      {
        path: "verhuur/simulator",
        lazy: async () => ({
          Component: (await import("./pages/verhuur/VerhuurSimulatorPage")).default,
        }),
      },
      {
        path: "verhuur/pakket",
        lazy: async () => ({
          Component: (await import("./pages/verhuur/VerhuurPakketPage")).default,
        }),
      },
      {
        path: "verhuur/afhalen",
        lazy: async () => ({
          Component: (await import("./pages/verhuur/VerhuurAfhalenPage")).default,
        }),
      },
      {
        path: "verhuur/boeking",
        lazy: async () => ({
          Component: (await import("./pages/verhuur/VerhuurBoekingPage")).default,
        }),
      },
      {
        // De QR die de technieker bij de installatie toont; staat op noindex.
        path: "verhuur/saldo",
        lazy: async () => ({
          Component: (await import("./pages/verhuur/VerhuurSaldoPage")).default,
        }),
      },
      {
        // Terugkeer van Stripe na het saldo van een portaal-order
        // (`api/saldo-order.ts`); beide op noindex.
        path: "verhuur/saldo/betaald",
        lazy: async () => ({
          Component: (await import("./pages/verhuur/VerhuurSaldoUitkomstPage")).SaldoBetaaldPage,
        }),
      },
      {
        path: "verhuur/saldo/niet-betaald",
        lazy: async () => ({
          Component: (await import("./pages/verhuur/VerhuurSaldoUitkomstPage")).SaldoNietBetaaldPage,
        }),
      },
      {
        // Alleen bereikbaar via de link in de verlengmail; staat op noindex.
        path: "verhuur/verlengen",
        lazy: async () => ({
          Component: (await import("./pages/verhuur/VerhuurVerlengenPage")).default,
        }),
      },
      {
        path: "verhuur/toestel/:toestel",
        lazy: async () => ({
          Component: (await import("./pages/verhuur/VerhuurToestelPage")).default,
        }),
        getStaticPaths: async () => {
          const { PRODUCT_ORDER, toestelPad } = await import("./data/verhuur");
          return PRODUCT_ORDER.map(toestelPad);
        },
      },
      {
        /*
          Toebehoren staan náást de toestellen en niet eronder: de condenspomp
          komt niet uit `TARIEVEN.products` maar hangt aan de dagprijs die het
          portaal bij de pakketopties publiceert. Daarom een eigen pad en geen
          negende slug onder /verhuur/toestel.
        */
        path: "verhuur/toebehoren/condenspomp",
        lazy: async () => ({
          Component: (await import("./pages/verhuur/ToebehorenCondenspompPage")).default,
        }),
      },

      /*
       * Twee routes naar dezelfde pagina, met een verschillende taak.
       *
       * `/404` bestaat alleen om bij de build `dist/404.html` op te leveren.
       * Vercel serveert dat bestand voor elke URL die niet bestaat, mét status
       * 404. Zonder dat bestand zou de host op een onbekende URL de homepage
       * met status 200 teruggeven — een soft 404, en dus een indexeerbare
       * kopie van de homepage op elke typfout en elke kapotte backlink.
       *
       * `*` vangt hetzelfde geval op nadat de app in de browser draait, want
       * dan is er geen server meer die kan antwoorden.
       */
      /*
       * Een route die met opzet crasht, zodat de foutpagina te bekijken is
       * zonder er eerst een echte bug voor te moeten maken. Staat achter
       * `import.meta.env.DEV`: bij de build is die constante `false`, dus de
       * hele tak valt weg en er komt geen `/__fout` in dist terecht.
       */
      /*
       * Twee werkdocumenten, ook alleen onder `npm run dev`: een copydeck voor
       * de volledige site (/copy-v2) en een conceptversie van de
       * Drooggarantie (/drooggarantie-v2). Ze stonden tot oktober 2026 publiek
       * met alleen noindex; een copydeck vol voorgestelde teksten hoort niet
       * op het echte domein, en geen enkele pagina linkte ernaar.
       */
      ...(import.meta.env.DEV
        ? [
            {
              path: "__fout",
              Component: () => {
                throw new Error("Testfout, /__fout bestaat alleen om de foutpagina te tonen.");
              },
            } satisfies RouteRecord,
            {
              path: "drooggarantie-v2",
              lazy: async () => ({ Component: (await import("./pages/DrooggarantieV2Page")).default }),
            } satisfies RouteRecord,
            {
              path: "copy-v2",
              lazy: async () => ({ Component: (await import("./pages/CopyV2Page")).default }),
            } satisfies RouteRecord,
          ]
        : []),

      {
        path: "404",
        lazy: async () => ({ Component: (await import("./pages/NotFound")).default }),
      },
      {
        path: "*",
        lazy: async () => ({ Component: (await import("./pages/NotFound")).default }),
      },
    ],
  },
];

export default routes;
