import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, BrushIcon, CellarIcon, DropIcon, HouseSmallIcon } from "./icons";

type Scenario = "nieuwbouw" | "waterschade" | "renovatie" | "kelder";
type Period = "dag" | "week" | "maand";

interface Tier {
  id: string;
  name: string;
  short: string;
  /** Moisture extraction in litres per day. */
  cap: number;
  /** Largest room volume (m³) this tier still covers on its own. */
  maxVol: number;
  day: number;
  sub: string;
}

const TIERS: Tier[] = [
  {
    id: "bd-1",
    name: "ECO Boost – 50l /dag",
    short: "ECO Boost",
    cap: 50,
    maxVol: 250,
    day: 9,
    sub: "Compacte condensontvochtiger — voor volumes tot 250 m³.",
  },
  {
    id: "bd-2",
    name: "ECO Performance – 80l /dag",
    short: "ECO Performance",
    cap: 80,
    maxVol: 400,
    day: 12,
    sub: "Onze standaard voor nieuwbouw — volumes tot 400 m³.",
  },
  {
    id: "bd-3",
    name: "ECO Ultimate – 150l /dag",
    short: "ECO Ultimate",
    cap: 150,
    maxVol: 600,
    day: 16,
    sub: "Zwaarste toestel in het gamma — volumes tot 600 m³.",
  },
];

interface Addon {
  name: string;
  why: string;
  day: number;
}

const ADDONS: Record<Scenario, Addon | null> = {
  nieuwbouw: null,
  waterschade: {
    name: "Ventilator TTV 4500",
    why: "voor snelle luchtcirculatie",
    day: 9,
  },
  renovatie: null,
  kelder: {
    name: "Elektrische kachel TEddH 30 T",
    why: "om de temperatuur op peil te brengen",
    day: 29,
  },
};

const DRYING_DAYS: Record<Scenario, string> = {
  nieuwbouw: "5–7",
  waterschade: "3–5",
  renovatie: "6–9",
  kelder: "8–12",
};

const SCENARIOS: { key: Scenario; icon: JSX.Element; label: string; hint: string }[] = [
  { key: "nieuwbouw", icon: <HouseSmallIcon />, label: "Nieuwbouw", hint: "Chape & pleister" },
  { key: "waterschade", icon: <DropIcon />, label: "Waterschade", hint: "Snel & intensief" },
  { key: "renovatie", icon: <BrushIcon />, label: "Renovatie", hint: "Vochtige ruimtes" },
  { key: "kelder", icon: <CellarIcon />, label: "Kelder / koud", hint: "Adsorptie" },
];

const PERIODS: { key: Period; label: string }[] = [
  { key: "dag", label: "Dag" },
  { key: "week", label: "Week" },
  { key: "maand", label: "Maand" },
];

/** Effective billable days in a week / month once the long-rental discount applies. */
const WEEK_FACTOR = 6.3;
const MONTH_FACTOR = 22;

const formatNumber = (value: number) => value.toLocaleString("nl-BE");

/** Picks the smallest tier that covers the volume, scaling up in units past the top tier. */
const pickTier = (volume: number): { tier: Tier; units: number } => {
  const match = TIERS.find((tier) => volume <= tier.maxVol);
  if (match) return { tier: match, units: 1 };

  const largest = TIERS[TIERS.length - 1];
  return { tier: largest, units: Math.ceil(volume / largest.maxVol) };
};

const V3Configurator = () => {
  const [area, setArea] = useState(80);
  const [height, setHeight] = useState(2.6);
  const [scenario, setScenario] = useState<Scenario>("nieuwbouw");
  const [period, setPeriod] = useState<Period>("dag");

  const result = useMemo(() => {
    const volume = Math.round(area * height);
    const { tier, units } = pickTier(volume);
    const addon = ADDONS[scenario];

    const perDay = tier.day * units + (addon ? addon.day : 0);
    const price =
      period === "dag"
        ? perDay
        : period === "week"
          ? Math.round(perDay * WEEK_FACTOR)
          : Math.round(perDay * MONTH_FACTOR);

    return { volume, tier, units, addon, price };
  }, [area, height, scenario, period]);

  const { volume, tier, units, addon, price } = result;
  const productHref = `/product/${tier.id}?vol=${volume}&units=${units}&sc=${scenario}`;

  return (
    <section className="cfg" id="configurator" aria-labelledby="configurator-heading">
      <div className="wrap">
        <div className="sec-head mid">
          <span className="kick">Onze methodiek</span>
          <h2 className="sec" id="configurator-heading">
            Berekenen in plaats van schatten.
          </h2>
          <p className="lede">
            Te vaak wordt bouwdroging op gevoel bepaald — met verkeerde toestellen of onnodige
            huurkosten als gevolg. Onze calculator schat de droogvraag in op meetbare gegevens:
            ruimtevolume, toepassing en omstandigheden. Ontwikkeld vanuit praktijkervaring en
            technische inzichten uit de sector.
          </p>
        </div>

        <div className="cfg-shell">
          <div className="cfg-form">
            <div className="cfg-steps">
              <span className="sn on">01 Ruimte</span>
              <span className="sep" />
              <span className="sn on">02 Situatie</span>
              <span className="sep" />
              <span className="sn">Volume {formatNumber(volume)} m³</span>
            </div>

            <div className="f">
              <label htmlFor="cfg-area">Oppervlakte van de ruimte</label>
              <div className="h">Het te drogen vloeroppervlak in vierkante meter.</div>
              <div className="rr">
                <input
                  type="range"
                  id="cfg-area"
                  min={10}
                  max={400}
                  step={5}
                  value={area}
                  onChange={(event) => setArea(Number(event.target.value))}
                />
                <div className="rv">
                  <span>{formatNumber(area)}</span>
                  <small> m²</small>
                </div>
              </div>
            </div>

            <div className="f">
              <label htmlFor="cfg-height">Plafondhoogte</label>
              <div className="h">Gemiddelde vrije hoogte van de ruimte.</div>
              <div className="rr">
                <input
                  type="range"
                  id="cfg-height"
                  min={2}
                  max={6}
                  step={0.1}
                  value={height}
                  onChange={(event) => setHeight(Number(event.target.value))}
                />
                <div className="rv">
                  <span>{height.toFixed(1).replace(".", ",")}</span>
                  <small> m</small>
                </div>
              </div>
            </div>

            <div className="f">
              {/* Labels the segmented control below; the group carries the ARIA name. */}
              <label>Waarvoor droogt u?</label>
              <div className="h">Dit bepaalt de techniek en de intensiteit van de droging.</div>
              <div className="seg" role="group" aria-label="Droogsituatie">
                {SCENARIOS.map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    className={scenario === item.key ? "active" : undefined}
                    aria-pressed={scenario === item.key}
                    onClick={() => setScenario(item.key)}
                  >
                    <span className="si">{item.icon}</span>
                    <span className="st">
                      {item.label}
                      <small>{item.hint}</small>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="cfg-res">
            <div className="rl">Aanbevolen toestel</div>
            <div className="rm">{tier.name}</div>
            <div className="rs">{tier.sub}</div>

            <div className="rspecs">
              <div className="c">
                <div className="k">Vochtafvoer</div>
                <div className="v">
                  {formatNumber(tier.cap * units)} <small>L/dag</small>
                </div>
              </div>
              <div className="c">
                <div className="k">Aantal units</div>
                <div className="v">{units}×</div>
              </div>
              <div className="c">
                <div className="k">Uw volume</div>
                <div className="v">
                  {formatNumber(volume)} <small>m³</small>
                </div>
              </div>
              <div className="c">
                <div className="k">Droogtijd</div>
                <div className="v">
                  {DRYING_DAYS[scenario]} <small>dagen</small>
                </div>
              </div>
            </div>

            <div className={`radd${addon ? " on" : ""}`}>
              <span className="ra-l">Aanbevolen erbij</span>
              <span className="ra-v">{addon ? `${addon.name} — ${addon.why}` : "—"}</span>
            </div>

            <div className="rprice">
              <div className="p">
                € {formatNumber(price)}
                <small> / {period}</small>
              </div>
              <div className="ptog" role="group" aria-label="Huurperiode">
                {PERIODS.map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    className={period === item.key ? "active" : undefined}
                    aria-pressed={period === item.key}
                    onClick={() => setPeriod(item.key)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <Link className="btn btn-red" to={productHref}>
              Bekijk {tier.short} &amp; boek
              <ArrowRightIcon />
            </Link>
            <div className="rnote">Volledige uitleg, specificaties en beschikbaarheid</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default V3Configurator;
