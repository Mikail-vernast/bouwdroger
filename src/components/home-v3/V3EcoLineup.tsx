import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "./icons";

interface Unit {
  id: string;
  title: string;
  subtitle: string;
  rows: [string, string][];
  to: string;
  /**
   * Hotspot placement, and where its card opens, as percentages of the stage.
   * These track the three dryers in `lineup-dryers.png` and come straight from
   * the design — they only line up against that exact artwork.
   */
  hotspot: { left: string; top: string };
  card: { left?: string; right?: string; top: string };
}

const UNITS: Unit[] = [
  {
    id: "eco-boost",
    title: "ECO Boost – 50l /dag",
    subtitle: "Kleine ruimtes · tot 250 m³",
    rows: [
      ["Vochtafvoer", "50 L/dag"],
      ["Luchtdebiet", "300 m³/u"],
      ["Verbruik", "0,75 kW"],
    ],
    to: "/product/bd-1",
    hotspot: { left: "24%", top: "56%" },
    card: { left: "calc(24% + 46px)", top: "38%" },
  },
  {
    id: "eco-performance",
    title: "ECO Performance – 80l /dag",
    subtitle: "Meest gehuurd · tot 400 m³",
    rows: [
      ["Vochtafvoer", "80 l/dag"],
      ["Luchtdebiet", "550 m³/u"],
      ["Verbruik", "1,1 kW"],
    ],
    to: "/product/bd-2",
    hotspot: { left: "49%", top: "46%" },
    card: { left: "calc(49% + 46px)", top: "28%" },
  },
  {
    id: "eco-ultimate",
    title: "ECO Ultimate – 150l /dag",
    subtitle: "Grote volumes · tot 600 m³",
    rows: [
      ["Vochtafvoer", "150 l/dag"],
      ["Luchtdebiet", "700 m³/u"],
      ["Verbruik", "1,4 kW"],
    ],
    to: "/product/bd-3",
    hotspot: { left: "72%", top: "34%" },
    card: { right: "2%", top: "16%" },
  },
];

const V3EcoLineup = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  // Any click outside a hotspot or its card dismisses the open card.
  useEffect(() => {
    if (!openId) return;
    const onDocClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest(".hs") || target?.closest(".hs-card")) return;
      setOpenId(null);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [openId]);

  return (
    <section className="eco" id="eco" aria-labelledby="eco-heading">
      <div className="wrap">
        <div className="sec-head mid">
          <span className="kick">Eco Bouwdrogers</span>
          <h2 className="sec" id="eco-heading">
            Onze beste eco bouwdrogers op een rij.
          </h2>
          <p className="lede">
            Drie formaten, één familie. Klik op de punten voor de technische informatie per toestel.
          </p>
        </div>

        <div className="eco-stage">
          <img
            src="/design/lineup-dryers.png"
            alt="Vernast eco bouwdrogers — drie formaten"
          />

          {UNITS.map((unit) => (
            <button
              key={`hs-${unit.id}`}
              type="button"
              className="hs"
              style={{ left: unit.hotspot.left, top: unit.hotspot.top }}
              aria-label={`Specificaties ${unit.title}`}
              aria-expanded={openId === unit.id}
              onClick={() => setOpenId((current) => (current === unit.id ? null : unit.id))}
            >
              +
            </button>
          ))}

          {UNITS.map((unit) => (
            <div
              key={`card-${unit.id}`}
              className={`hs-card${openId === unit.id ? " on" : ""}`}
              style={{ left: unit.card.left, right: unit.card.right, top: unit.card.top }}
            >
              <div className="hn">{unit.title}</div>
              <div className="hc">{unit.subtitle}</div>
              {unit.rows.map(([key, value]) => (
                <div className="hrow" key={key}>
                  <span>{key}</span>
                  <span>{value}</span>
                </div>
              ))}
              <Link to={unit.to}>
                Bekijken <ArrowRightIcon size={12} strokeWidth={2.6} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default V3EcoLineup;
