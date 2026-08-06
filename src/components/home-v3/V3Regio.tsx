import { useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "./icons";

interface Region {
  name: string;
  /** Pin position over the map of Flanders. */
  pin: CSSProperties;
  towns: string[];
}

const REGIONS: Region[] = [
  {
    name: "West-Vlaanderen",
    pin: { left: "8%", top: "34%" },
    towns: [
      "Brugge", "Kortrijk", "Oostende", "Roeselare", "Ieper", "Waregem", "Knokke-Heist", "Veurne",
      "Torhout", "Menen", "Izegem", "Diksmuide", "Blankenberge", "Poperinge", "Tielt", "Harelbeke",
    ],
  },
  {
    name: "Oost-Vlaanderen",
    pin: { left: "24%", top: "25%" },
    towns: [
      "Gent", "Aalst", "Sint-Niklaas", "Dendermonde", "Lokeren", "Wetteren", "Deinze", "Eeklo",
      "Ninove", "Geraardsbergen", "Oudenaarde", "Ronse", "Zottegem", "Temse", "Beveren", "Zelzate",
    ],
  },
  {
    name: "Antwerpen",
    pin: { left: "42%", top: "12%" },
    towns: [
      "Antwerpen", "Aartselaar", "Mechelen", "Turnhout", "Lier", "Boom", "Kontich", "Geel", "Mol",
      "Herentals", "Heist-op-den-Berg", "Brasschaat", "Schoten", "Wilrijk", "Edegem", "Duffel",
    ],
  },
  {
    name: "Vlaams-Brabant",
    pin: { left: "44%", top: "40%" },
    towns: [
      "Leuven", "Vilvoorde", "Halle", "Aarschot", "Tienen", "Zaventem", "Dilbeek", "Grimbergen",
      "Diest", "Asse", "Overijse", "Tervuren", "Machelen", "Beersel", "Sint-Pieters-Leeuw", "Haacht",
    ],
  },
  {
    name: "Brussel",
    pin: { left: "33%", top: "53%" },
    towns: [
      "Brussel-stad", "Schaarbeek", "Anderlecht", "Ukkel", "Elsene", "Etterbeek", "Jette", "Evere",
      "Vorst", "Sint-Gillis", "Molenbeek", "Laken", "Woluwe", "Oudergem", "Ganshoren", "Koekelberg",
    ],
  },
  {
    name: "Limburg",
    pin: { left: "68%", top: "21%" },
    towns: [
      "Hasselt", "Genk", "Sint-Truiden", "Tongeren", "Beringen", "Lommel", "Bilzen", "Maasmechelen",
      "Houthalen", "Heusden-Zolder", "Diepenbeek", "Bree", "Peer", "Maaseik", "Lanaken",
      "Leopoldsburg",
    ],
  },
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
            <Link className="btn btn-red" to="/verhuur/calculator">
              Bereken uw pakket
              <ArrowRightIcon size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default V3Regio;
