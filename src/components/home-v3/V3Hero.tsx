import { Link } from "react-router-dom";
import { REVIEWS } from "@/lib/site";
import { ArrowRightIcon, GoogleIcon } from "./icons";

/**
 * Home hero — "Home V3" uit de Claude Design-handoff.
 *
 * De drie zwevende trust-kaartjes (`.h-note`) liggen absoluut over de
 * teamfoto; boven 1080px zijn ze zichtbaar, daaronder verbergt het design ze.
 * Structuur volgt het designbestand exact: gsb → h1 → p → h-ctas binnen
 * `.hero-inner`, daarna de `.hero-art` (het LCP-beeld) en de `.h-note`.
 */
const NOTES = [
  {
    title: "Online berekenen & boeken",
    sub: "Betalen en plannen inbegrepen",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 7h8" />
        <path d="M8 11h8" />
        <path d="M8 15h5" />
      </svg>
    ),
  },
  {
    title: "Één all-in prijs",
    sub: "Geen verborgen kosten",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6 9 17l-5-5" />
      </svg>
    ),
  },
  {
    title: "100% droog-garantie*",
    sub: "Of kosteloos verlengen",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      </svg>
    ),
  },
];

const V3Hero = () => (
  <section className="hero">
    <div className="wrap">
      <div className="hero-inner">
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
      browser de ruimte al reserveren voordat de bytes binnen zijn. De CSS
      bepaalt de werkelijke weergavegrootte; deze waarden dienen enkel als
      beeldverhouding.
    */}
    <img
      className="hero-art"
      src="/vernast/team-cutout.webp"
      alt="Het Vernast-team met het volledige toestellengamma"
      width={2741}
      height={1173}
      fetchPriority="high"
      decoding="async"
    />
    <div className="h-note">
      {NOTES.map((note) => (
        <span key={note.title}>
          <i className="hni">{note.icon}</i>
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
