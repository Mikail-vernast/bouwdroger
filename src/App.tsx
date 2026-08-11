import type { RouteRecord } from "vite-react-ssg";
import Layout from "./Layout";
import ErrorPage from "./pages/ErrorPage";
import { getAllPackages } from "./data/packages";
import { products } from "./data/products";
import { PRODUCT_ORDER } from "./data/verhuur";

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
 * geprerenderd worden.
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
        path: "levering/pakket/:packageId",
        lazy: async () => ({ Component: (await import("./pages/PackageDetailPage")).default }),
        getStaticPaths: () => getAllPackages().map((p) => `/levering/pakket/${p.id}`),
      },
      {
        path: "afhalen",
        lazy: async () => ({ Component: (await import("./pages/AfhalenPage")).default }),
      },
      {
        path: "shop",
        lazy: async () => ({ Component: (await import("./pages/ShopPage")).default }),
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
        path: "contact",
        lazy: async () => ({ Component: (await import("./pages/ContactPage")).default }),
      },
      {
        path: "klantservice",
        lazy: async () => ({ Component: (await import("./pages/KlantservicePage")).default }),
      },
      {
        path: "calculator",
        lazy: async () => ({ Component: (await import("./pages/CalculatorPage")).default }),
      },
      {
        path: "calculator/detail",
        lazy: async () => ({ Component: (await import("./pages/CalculatorDetailPage")).default }),
      },
      {
        path: "product/:id",
        lazy: async () => ({ Component: (await import("./pages/ProductDetail")).default }),
        getStaticPaths: () => products.map((p) => `/product/${p.id}`),
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
        path: "nieuwbouw",
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
      {
        path: "machines",
        lazy: async () => ({ Component: (await import("./pages/MachinesPage")).default }),
      },
      {
        path: "prijzen",
        lazy: async () => ({ Component: (await import("./pages/PrijzenPage")).default }),
      },
      {
        path: "reserveren",
        lazy: async () => ({ Component: (await import("./pages/ReserverenPage")).default }),
      },

      /* Verhuurplatform — de conversie-funnel uit de Claude Design handoff */
      {
        path: "verhuur/calculator",
        lazy: async () => ({
          Component: (await import("./pages/verhuur/VerhuurCalculatorPage")).default,
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
        // Alleen bereikbaar via de link in de verlengmail; staat op noindex.
        path: "verhuur/verlengen",
        lazy: async () => ({
          Component: (await import("./pages/verhuur/VerhuurVerlengenPage")).default,
        }),
      },
      {
        path: "verhuur/toestel/:model",
        lazy: async () => ({
          Component: (await import("./pages/verhuur/VerhuurToestelPage")).default,
        }),
        getStaticPaths: () => PRODUCT_ORDER.map((m) => `/verhuur/toestel/${m}`),
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
      ...(import.meta.env.DEV
        ? [
            {
              path: "__fout",
              Component: () => {
                throw new Error("Testfout — /__fout bestaat alleen om de foutpagina te tonen.");
              },
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
