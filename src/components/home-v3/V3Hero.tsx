import { Link } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { REVIEWS } from "@/lib/site";
import { ArrowRightIcon, GoogleIcon } from "./icons";

/**
 * De drie zwevende trust-kaartjes over de team-banner. In het design staan ze
 * absoluut gepositioneerd in de hoeken van de hero (`.h-note > span`), elk met
 * een icoonvakje (`.hni`) en een titel + ondertitel (`.hnt`). Onder 1080px
 * verbergt het design ze — vandaar dat de HTML géén begintoestand mag dragen
 * die de prerender onzichtbaar maakt; deze markup is altijd zichtbaar.
 */
const NOTES = [
  {
    icon: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 7h8" />
        <path d="M8 11h8" />
        <path d="M8 15h5" />
      </>
    ),
    title: "Online berekenen & boeken",
    sub: "Betalen en plannen inbegrepen",
  },
  {
    icon: <path d="M20 6 9 17l-5-5" />,
    title: "Één all-in prijs",
    sub: "Geen verborgen kosten",
  },
  {
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />,
    title: "100% droog-garantie*",
    sub: "Of kosteloos verlengen",
  },
];

/**
 * De achtergrond van de hero is het LCP-element van de homepage, maar hij staat
 * als `background` in home-v3.css. De browser ontdekt hem dus pas nadat die CSS
 * binnen is: op een trage gsm-lijn 2,3 s "load delay" voor een bestand van 6 kB
 * (Lighthouse, 28-09-2026). De preload laat hem meteen met de HTML meekomen.
 */
const HERO_BG = "/vernast/bg-red-wide-2.webp";

/* Breedtes van de teamfoto in public/vernast/ — zie het commentaar bij <picture>. */
const HERO_WIDTHS = [800, 1280, 2000, 2800, 4238];
const HERO_SIZES = "(min-width: 2120px) 2120px, 100vw";
const heroSrcSet = (ext: "avif" | "webp") =>
  HERO_WIDTHS.map((w) => `/vernast/hero-team-v2-${w}.${ext} ${w}w`).join(", ");

const V3Hero = () => (
  <section className="hero">
    <Head>
      <link rel="preload" href={HERO_BG} as="image" type="image/webp" fetchPriority="high" />
    </Head>
    <div className="wrap">
      <div className="hero-inner">
        {/*
          Verdwijnt zolang er geen te verantwoorden cijfer is; zie `REVIEWS` in
          src/lib/site.ts. De badge is bewust niet vervangen door een andere
          claim — de drie kaartjes over de banner dragen het vertrouwen al.
        */}
        {REVIEWS && (
          <div className="gsb">
            <GoogleIcon />
            <span className="stars">★★★★★</span>
            <span className="gt">
              <b>
                {REVIEWS.display}/{REVIEWS.best}
              </b>{" "}
              · {REVIEWS.reviewCount} Google reviews
            </span>
          </div>
        )}
        {/* "Bouwdroger huren" is de zoekvraag waarop deze pagina moet landen (Search
            Console, sep 2026: pos. 45-68). Het stond in de titel, niet in de H1. */}
        <h1>Bouwdroger huren op maat. Drooggarantie inbegrepen.</h1>
        <p>
          Geen standaard bouwdroger, maar een compleet droogpakket op maat van uw woning. Digitaal
          geboekt, energiezuinig gedimensioneerd, professioneel geïnstalleerd en één vaste all-in
          prijs. Niet droog binnen de berekende periode? Kosteloos verder huren.
        </p>
        <div className="h-ctas">
          <Link className="btn btn-white" to="/verhuur/calculator">
            Bereken uw bouwdroging
            <ArrowRightIcon />
          </Link>
          <Link
            className="btn"
            to="/drooggarantie"
            style={{
              background: "rgba(255,255,255,.14)",
              color: "#fff",
              border: "1.5px solid rgba(255,255,255,.4)",
            }}
          >
            Bekijk de drooggarantie
          </Link>
        </div>
      </div>
    </div>
    {/*
      Dit is het LCP-element van de homepage: de grootste afbeelding boven de
      vouw, en dus wat Google klokt als "de pagina is geladen". `fetchpriority`
      haalt hem uit de rij achter de scripts vandaan, `width`/`height` laten de
      browser de ruimte al reserveren voordat de bytes binnen zijn — zonder die
      twee getallen springt alles eronder omlaag zodra de afbeelding landt.
      De CSS bepaalt de werkelijke weergavegrootte; deze waarden dienen enkel
      als beeldverhouding.
    */}
    {/*
      De teamfoto heeft een transparante achtergrond (enkel het team, de
      toestellen en de grijze vloer). hero-banner.webp had een dichte zwarte
      studio-achtergrond die als een zwarte band over het rood viel — vooral
      op mobiel. Met de cutout loopt het rood van de hero gewoon door.

      De halfdoorzichtige randpixels van de vorige uitsnede droegen nog het
      wit van de studio-achtergrond, wat op het rood als een witte lijn rond
      haar en armen lag. In hero-team-v2 kreeg elke randpixel de kleur van de
      dichtstbijzijnde volle pixel en is de lichtste waas weggesneden.
    */}
    {/*
      Elke schermgrootte moet een variant krijgen die minstens zo breed is als
      de weergave in schermpixels -- oprekken maakt deze foto meteen wazig.

      Op gsm meldde `sizes` vroeger 67vw in plaats van de echte 100vw, om een
      toestel met pixeldichtheid 3 de variant van 800 px te geven. Die moest
      daar tot 1080 px opgerekt worden. Met AVIF kost de variant van 1280 px
      44 kB, minder dan de 93 kB van de oude 1440, dus `sizes` zegt nu gewoon
      wat waar is.

      Op desktop staat de afbeelding over de volle breedte (tot 2120 px, zie
      .hero-art in home-v3.css), en de 1440 werd op een retina-scherm tot
      bijna het dubbele opgerekt en zag er gepixeld uit. Een reeks tot 2800 px bleek niet genoeg: een
      scherm van 1720 px breed met pixeldichtheid 2 vraagt 3440 px, en ook
      1,23× oprekken maakt deze foto wazig. Daarom loopt de reeks tot de
      volle bron van 4238 px, zodat de browser alleen nog verkleint.

      AVIF eerst, met 4:4:4: webp halveert altijd de kleurresolutie, en dat
      maakte de grens tussen rode overall en wit T-shirt zacht. Bovendien is
      de AVIF van 4238 px kleiner (300 kB) dan de webp (490 kB). Webp blijft
      de terugval voor browsers zonder AVIF.
    */}
    <picture>
      <source type="image/avif" srcSet={heroSrcSet("avif")} sizes={HERO_SIZES} />
      <img
        className="hero-art"
        src="/vernast/hero-team-v2-2000.webp"
        srcSet={heroSrcSet("webp")}
        sizes={HERO_SIZES}
        alt="Het Vernast-team met het volledige toestellengamma"
        width={4238}
        height={1173}
        fetchPriority="high"
        decoding="async"
      />
    </picture>
    {/* De drie zwevende kaartjes over de banner — zie NOTES en .h-note in home-v3.css. */}
    <div className="h-note">
      {NOTES.map((note) => (
        <span key={note.title}>
          <i className="hni">
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {note.icon}
            </svg>
          </i>
          <span className="hnt">
            <b>{note.title}</b>
            <small>{note.sub}</small>
          </span>
        </span>
      ))}
    </div>
  </section>
);

export default V3Hero;
