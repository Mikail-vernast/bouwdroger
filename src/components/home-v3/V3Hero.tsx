import { Link } from "react-router-dom";
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

const V3Hero = () => (
  <section className="hero">
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
        <h1>Bouwdroging op maat. Drooggarantie inbegrepen.</h1>
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
    <img
      className="hero-art"
      src="/vernast/hero-banner.webp"
      alt="Het Vernast-team met het volledige toestellengamma"
      width={2400}
      height={665}
      fetchPriority="high"
      decoding="async"
    />
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
