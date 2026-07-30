import { Link } from "react-router-dom";
import { ArrowRightIcon, CheckIcon, GoogleIcon } from "./icons";

const NOTES = [
  "Slim berekend op ruimte, situatie en droogdoel",
  "Levering, ophaling & installatie inbegrepen",
  "Geen verborgen kosten, geen voorschot",
  "Spoedlevering mogelijk",
];

const V3Hero = () => (
  <section className="hero" aria-labelledby="hero-heading">
    <div className="wrap">
      <div className="hero-inner">
        <div className="gsb">
          <GoogleIcon />
          <span className="stars" aria-hidden="true">
            ★★★★★
          </span>
          <span className="gt">
            <b>4,8/5</b> · 412 Google reviews
          </span>
        </div>

        <h1 id="hero-heading">Bereken exact wat u nodig heeft. Boek vandaag. Droog sneller.</h1>
        <p>
          Geen gokwerk meer bij bouwdroging. De slimme Vernast-calculator toont meteen welk toestel,
          hoeveel capaciteit en welke droogaanpak bij uw ruimte past. Wij leveren, plaatsen en halen
          op — binnen 24 uur in heel Vlaanderen.
        </p>

        <div className="h-ctas">
          <Link className="btn btn-white" to="/calculator">
            Start de calculator
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
            Bekijk het gamma
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

    <img
      className="hero-art"
      src="/design/team-cutout.png"
      alt="Het Vernast-team met het volledige toestellengamma"
      // React 18 does not map the camelCase prop, so set the attribute directly.
      {...{ fetchpriority: "high" }}
    />
  </section>
);

export default V3Hero;
