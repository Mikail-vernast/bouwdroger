import { Head } from "vite-react-ssg";

/**
 * Haalt het font vooruit dat de pagina bóven de vouw gebruikt.
 *
 * Dit stond eerst vast in index.html, en dus op élke route: Plus Jakarta Sans
 * en DM Sans. Dat klopt voor de homepage en de verhuurfunnel, maar de
 * inhoudspagina's (/machines, /prijzen, /levering, …) zetten in src/index.css
 * hun body én h1–h3 op Inter. Daar werden dus 63 kB fonts vooruit gehaald die
 * niets tekenen, terwijl Inter zelf pas ontdekt werd nadat de CSS gelezen was
 * — op een trage lijn landde het rond 1,9 s, ruim ná de titel. Die titel is het
 * LCP-element, dus hij verscheen eerst in het systeemfont en tekende zich
 * daarna opnieuw; die tweede tekening telt als nieuwe LCP.
 *
 * Alleen de latin-varianten: de -ext-bestanden dekken tekens die in het
 * Nederlands nauwelijks voorkomen en mogen gewoon later komen.
 */
const FILES: Record<string, string[]> = {
  /* De shell van de inhoudspagina's — Navbar/Footer met shadcn/ui. */
  inter: ["/fonts/inter-latin.woff2"],
  /* De v3-vormtaal: homepage en verhuurfunnel. Titels in Plus Jakarta Sans, lopende tekst in DM Sans. */
  v3: ["/fonts/plus-jakarta-sans-latin.woff2", "/fonts/dm-sans-latin.woff2"],
};

const FontPreload = ({ set }: { set: keyof typeof FILES }) => (
  <Head>
    {FILES[set].map((href) => (
      <link key={href} rel="preload" href={href} as="font" type="font/woff2" crossOrigin="" />
    ))}
  </Head>
);

export default FontPreload;
