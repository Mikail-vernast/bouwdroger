import { Link } from "react-router-dom";
import GidsShell from "@/components/gids/GidsShell";
import { SEO } from "@/data/seo";
import { GIDSEN } from "@/data/navigation";
import { itemListSchema } from "@/lib/schema";

/**
 * Wat elke gids beantwoordt, in één zin. Staat hier en niet in navigation.ts:
 * de footer heeft alleen een label nodig, deze hub een samenvatting. Een gids
 * zonder samenvatting verschijnt nog steeds, alleen zonder uitleg eronder.
 */
const SAMENVATTING: Record<string, string> = {
  "/gids/hoe-lang-moet-chape-drogen":
    "Droogtijden per dikte, natuurlijk en met een bouwdroger, het verschil tussen cement- en anhydrietchape, vloerverwarming opstoken en restvocht meten. Met een aparte sectie over pleisterwerk.",
  "/gids/condensdroger-of-adsorptiedroger":
    "Hoe beide toestellen werken, waarom een condensdroger in de koude rendement verliest, en welk toestel past bij een kelder, een nieuwbouw of water onder de vloer.",
  "/gids/stroomverbruik-bouwdroger":
    "Het vermogen van onze toestellen, een rekenvoorbeeld in kWh en euro, en waarom een bouwdroger gewoon 24 uur per dag en 's nachts mag doordraaien.",
};

const GidsIndexPage = () => (
  <GidsShell
    seo={SEO.gids}
    path="/gids"
    crumbs={[
      { name: "Home", path: "/" },
      { name: "Gidsen", path: "/gids" },
    ]}
    kick="Alles over drogen · gidsen"
    h1="Gidsen over bouwdroging"
    intro={
      <p>
        Praktische antwoorden op veelgestelde vragen over bouwdroging: hoe lang iets moet drogen,
        welk toestel u nodig heeft en wat dat aan stroom kost. Zonder verkooppraat, met de cijfers uit onze
        eigen catalogus waar die er zijn.
      </p>
    }
    heroImg={{ src: "/vernast/team-tools.webp", alt: "De Vernast vakmannen met hun gereedschap" }}
    jsonLd={[itemListSchema("Gidsen over bouwdroging", GIDSEN.map((g) => ({ name: g.label, path: g.path })))]}
  >
    <section className="sw">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">De gidsen</span>
          <h2 className="sec">Kies uw vraag</h2>
        </div>
        <div className="g3">
          {GIDSEN.map((g) => (
            <div className="kaart" key={g.path}>
              <h3>
                <Link to={g.path}>{g.label}</Link>
              </h3>
              {SAMENVATTING[g.path] ? <p>{SAMENVATTING[g.path]}</p> : null}
              <Link className="meer" to={g.path}>
                Lees de gids
              </Link>
            </div>
          ))}
        </div>
        <div className="note">
          <b>Liever eerst de basis?</b> Op <Link to="/hoe-drogen-werkt">hoe drogen werkt</Link> leggen we
          uit hoe temperatuur, luchtvochtigheid en luchtbeweging samen een gebouw drogen, en op{" "}
          <Link to="/waarom-bouwdroging">waarom bouwdroging</Link> waarom wachten op goed weer geen
          droogstrategie is. Zoekt u meteen een toestel, kijk dan bij{" "}
          <Link to="/luchtontvochtiger-huren">luchtontvochtiger huren</Link> of bereken uw pakket in de{" "}
          <Link to="/verhuur/calculator">droogcalculator</Link>.
        </div>
      </div>
    </section>
  </GidsShell>
);

export default GidsIndexPage;
