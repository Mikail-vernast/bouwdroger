import { useEffect, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, CheckIcon } from "./icons";

interface Hotspot {
  id: string;
  model: string;
  /** Position of the "+" button over the line-up photo. */
  dot: CSSProperties;
  /** Position of the spec card that button opens. */
  card: CSSProperties;
  name: string;
  context: string;
  rows: [string, string][];
}

const HOTSPOTS: Hotspot[] = [
  {
    id: "h1",
    model: "ttk170",
    dot: { left: "24%", top: "56%" },
    card: { left: "calc(24% + 46px)", top: "38%" },
    name: "ECO Boost – 50l /dag",
    context: "Kleine ruimtes · tot 250 m³",
    rows: [
      ["Vochtafvoer", "50 L/dag"],
      ["Luchtdebiet", "300 m³/u"],
      ["Verbruik", "0,75 kW"],
    ],
  },
  {
    id: "h2",
    model: "ttk350",
    dot: { left: "49%", top: "46%" },
    card: { left: "calc(49% + 46px)", top: "28%" },
    name: "ECO Performance – 80l /dag",
    context: "Meest gehuurd · tot 400 m³",
    rows: [
      ["Vochtafvoer", "80 l/dag"],
      ["Luchtdebiet", "550 m³/u"],
      ["Verbruik", "1,1 kW"],
    ],
  },
  {
    id: "h3",
    model: "ttk650",
    dot: { left: "72%", top: "34%" },
    card: { left: "auto", right: "2%", top: "16%" },
    name: "ECO Ultimate – 150l /dag",
    context: "Grote volumes · tot 600 m³",
    rows: [
      ["Vochtafvoer", "150 l/dag"],
      ["Luchtdebiet", "700 m³/u"],
      ["Verbruik", "1,4 kW"],
    ],
  },
];

const TRUSTED = ["Architecten", "Verzekeringskantoren", "Bouwkundigen", "Aannemers"];

const V3EcoLineup = () => {
  const [open, setOpen] = useState<string | null>(null);

  // A click anywhere outside a hotspot closes the open spec card.
  useEffect(() => {
    if (!open) return;
    const close = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".hs-card") && !target.closest(".hs")) setOpen(null);
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [open]);

  return (
    <section className="eco" id="eco">
      <div className="wrap">
        <div className="sec-head mid">
          <span className="kick">Eco Bouwdrogers</span>
          <h2 className="sec">Onze beste eco bouwdrogers op een rij.</h2>
          <p className="lede">
            Drie formaten, één familie. Klik op de punten voor de technische informatie per toestel.
          </p>
        </div>

        <div className="eco-stage">
          <img
            src="/vernast/lineup-dryers.webp"
            alt="Vernast eco bouwdrogers, drie formaten"
            loading="lazy"
          />
          {HOTSPOTS.map((spot) => (
            <button
              key={`dot-${spot.id}`}
              type="button"
              className="hs"
              style={spot.dot}
              aria-label={spot.name}
              onClick={(event) => {
                event.stopPropagation();
                setOpen((current) => (current === spot.id ? null : spot.id));
              }}
            >
              +
            </button>
          ))}
          {HOTSPOTS.map((spot) => (
            <div
              className={`hs-card${open === spot.id ? " on" : ""}`}
              id={spot.id}
              key={spot.id}
              style={spot.card}
            >
              <div className="hn">{spot.name}</div>
              <div className="hc">{spot.context}</div>
              {spot.rows.map(([label, value]) => (
                <div className="hrow" key={label}>
                  <span>{label}</span>
                  <span>{value}</span>
                </div>
              ))}
              <Link to={`/verhuur/toestel/${spot.model}`}>
                Bekijken <ArrowRightIcon size={12} strokeWidth={2.6} />
              </Link>
            </div>
          ))}
        </div>

        <div className="trustbar">
          <div className="tb-l">
            <span className="tb-k">Vertrouwd door wie het moet weten</span>
            <h3>Vertrouwd door professionals in de bouw.</h3>
          </div>
          <div className="tb-chips">
            {TRUSTED.map((who) => (
              <span key={who}>
                <CheckIcon size={15} strokeWidth={2.4} /> {who}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default V3EcoLineup;
