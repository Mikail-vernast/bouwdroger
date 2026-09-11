import { useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { REGIOS } from "@/data/regios";
import { ArrowRightIcon } from "./icons";

interface Region {
  name: string;
  /** Pin position over the map of Flanders. */
  pin: CSSProperties;
  towns: string[];
  /** The region's own page, when it has one. Brussel has none (yet). */
  path?: string;
}

/*
  The five provinces come from the same data as their landing pages, so the
  towns on the map and the towns on /bouwdroger-huren-<regio> cannot drift
  apart. Brussel stays here only: we deliver there, but it has no page.
*/
const BRUSSEL: Region = {
  name: "Brussel",
  pin: { left: "33%", top: "53%" },
  towns: [
    "Brussel-stad", "Schaarbeek", "Anderlecht", "Ukkel", "Elsene", "Etterbeek", "Jette", "Evere",
    "Vorst", "Sint-Gillis", "Molenbeek", "Laken", "Woluwe", "Oudergem", "Ganshoren", "Koekelberg",
  ],
};

const bySlug = (slug: string): Region => {
  const r = REGIOS.find((x) => x.slug === slug)!;
  return { name: r.name, pin: r.pin, towns: r.towns, path: r.path };
};

/* Design order: west to east, Brussel between Vlaams-Brabant and Limburg. */
const REGIONS: Region[] = [
  bySlug("west-vlaanderen"),
  bySlug("oost-vlaanderen"),
  bySlug("antwerpen"),
  bySlug("vlaams-brabant"),
  BRUSSEL,
  bySlug("limburg"),
];

/** The design opens on Antwerpen — the province the depot sits in. */
const DEFAULT_REGION = 2;

const V3Regio = () => {
  const [active, setActive] = useState(DEFAULT_REGION);
  const region = REGIONS[active];

  return (
    <section className="regio" id="regio">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">Leveringsgebied</span>
          <h2 className="sec">Wij leveren in heel Vlaanderen en Brussel.</h2>
          <p className="lede">
            Klik op uw provincie en zie meteen de gemeenten waar wij leveren, installeren en ophalen.
            Twijfelt u? Bel ons even.
          </p>
        </div>

        <div className="regio-grid">
          <div className="rm-panel">
            {REGIONS.map((item, i) => (
              <button
                key={item.name}
                type="button"
                className={`pin${i === active ? " active" : ""}`}
                style={item.pin}
                onClick={() => setActive(i)}
              >
                <b />
                {item.name}
              </button>
            ))}
          </div>

          <div className="regio-info">
            <h3 id="rgName">{region.name}</h3>
            <p className="rg-sub">Een greep uit de gemeenten waar wij leveren en installeren:</p>
            <div className="rg-chips" id="rgChips">
              {region.towns.map((town) => (
                <span key={town}>{town}</span>
              ))}
            </div>
            <p className="rg-note">
              Staat uw gemeente er niet bij? Wij leveren in heel Vlaanderen en Brussel — bel ons op
              03 689 90 65 en we bekijken het meteen.
            </p>
            <div className="rg-actions">
              {region.path && (
                <Link className="btn btn-red" to={region.path}>
                  Bouwdroger huren in {region.name}
                  <ArrowRightIcon size={14} />
                </Link>
              )}
              <Link className="btn btn-out" to="/verhuur/calculator">
                Bereken uw pakket
                <ArrowRightIcon size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/*
          Plain links to all five region pages, always in the HTML. The map
          above shows one province at a time and only after a click, so a
          crawler that never clicks would otherwise see a single region link.
        */}
        <nav className="rg-links" aria-label="Werkgebied">
          <span>Bouwdroger huren in:</span>
          {REGIONS.filter((r) => r.path).map((r) => (
            <Link key={r.name} to={r.path!}>
              {r.name}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default V3Regio;
