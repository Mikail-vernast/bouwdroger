import { Link } from "react-router-dom";
import { REVIEWS } from "@/lib/site";
import { ArrowRightIcon, CheckIcon, GoogleIcon } from "./icons";

const NOTES = [
  "Online berekenen, boeken & betalen",
  "Installatie zelf ingepland, geleverd binnen 24 u",
  "Één all-in prijs, geen verborgen kosten",
  "100% droog-garantie",
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
        <h1>Bouwdroging, volledig digitaal geregeld. Van berekening tot droge woning.</h1>
        <p>
          Bereken uw pakket, boek, betaal en plan de installatie, alles online, in enkele minuten.
          Één all-in prijs, geleverd en geplaatst binnen 24 uur, met één garantie: 100% droog binnen
          de berekende periode, of u huurt kosteloos verder.
        </p>
        <div className="h-ctas">
          <Link className="btn btn-white" to="/verhuur/calculator">
            Uw woning drogen start hier
            <ArrowRightIcon />
          </Link>
          <a
            className="btn"
            href="#toestellen"
            style={{
              background: "rgba(255,255,255,.14)",
              color: "#fff",
              border: "1.5px solid rgba(255,255,255,.4)",
            }}
          >
            Ontdek onze toestellen
          </a>
        </div>
        <div className="h-note">
          {NOTES.map((note) => (
            <span key={note}>
              <CheckIcon /> {note}
            </span>
          ))}
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
      src="/vernast/team-cutout.webp"
      alt="Het Vernast-team met het volledige toestellengamma"
      width={1440}
      height={399}
      fetchPriority="high"
      decoding="async"
    />
  </section>
);

export default V3Hero;
