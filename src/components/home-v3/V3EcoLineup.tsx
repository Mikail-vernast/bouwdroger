import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  ClipboardIcon,
  HelmetIcon,
  PlanIcon,
  ShieldIcon,
} from "./icons";
import { toestelPad } from "@/data/verhuur";
import { useCopy, useLokaalPad, type Copy } from "@/i18n/useTaal";

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

const HOTSPOTS_NL: Hotspot[] = [
  {
    id: "h1",
    model: "ttk170",
    dot: { left: "24%", top: "56%" },
    card: { left: "calc(24% + 46px)", top: "38%" },
    name: "Boost – 50l /dag",
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
    name: "Performance – 80l /dag",
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
    name: "Ultimate – 110l /dag",
    context: "Grote volumes · tot 600 m³",
    rows: [
      ["Vochtafvoer", "110 l/dag"],
      ["Luchtdebiet", "700 m³/u"],
      ["Verbruik", "1,4 kW"],
    ],
  },
];

/*
 * Elk beroep zijn eigen icoon. Ze droegen alle vier hetzelfde groene vinkje:
 * dat zei vier keer "ja" en nul keer wie, en in een rij naast elkaar werd het
 * een streepjespatroon in plaats van vier herkenbare partijen.
 */
const TRUST_ICONS: ReactNode[] = [
  <PlanIcon key="plan" />,
  <ShieldIcon key="schild" />,
  <ClipboardIcon key="klembord" />,
  <HelmetIcon key="helm" />,
];

/*
  Zelfde spelden, zelfde getallen als HOTSPOTS_NL; alleen de woorden en de
  eenheden ("l/jour", "m³/h") volgen de taal. De "80l" bij de Performance is
  hier niet rechtgezet: dat is een vraag over de inhoud, niet over de vertaling.
*/
const HOTSPOTS_FR: Hotspot[] = HOTSPOTS_NL.map((spot, i) => ({
  ...spot,
  name: ["Boost – 50 l/jour", "Performance – 80 l/jour", "Ultimate – 110 l/jour"][i],
  context: [
    "Petites pièces · jusqu'à 250 m³",
    "Le plus loué · jusqu'à 400 m³",
    "Grands volumes · jusqu'à 600 m³",
  ][i],
  rows: spot.rows.map(([label, value]): [string, string] => [
    { Vochtafvoer: "Extraction d'humidité", Luchtdebiet: "Débit d'air", Verbruik: "Consommation" }[label] ?? label,
    value.replace(/ ?[lL]\/dag$/, " l/jour").replace("m³/u", "m³/h"),
  ]),
}));

/* En in het Engels, met dezelfde getallen ("L/day", "m³/h"). */
const HOTSPOTS_EN: Hotspot[] = HOTSPOTS_NL.map((spot, i) => ({
  ...spot,
  name: ["Boost – 50 L/day", "Performance – 80 L/day", "Ultimate – 110 L/day"][i],
  context: ["Small rooms · up to 250 m³", "Most hired · up to 400 m³", "Large volumes · up to 600 m³"][i],
  rows: spot.rows.map(([label, value]): [string, string] => [
    { Vochtafvoer: "Moisture extraction", Luchtdebiet: "Airflow", Verbruik: "Consumption" }[label] ?? label,
    value.replace(/ ?[lL]\/dag$/, " L/day").replace("m³/u", "m³/h").replace(/(\d),(\d)/, "$1.$2"),
  ]),
}));

const COPY = {
  nl: {
    hotspots: HOTSPOTS_NL,
    trusted: ["Architecten", "Verzekeringskantoren", "Bouwkundigen", "Aannemers"],
    seal: "Gecertificeerd",
    tbK: "Vertrouwd door wie het moet weten",
    tbH3: "Vertrouwd door professionals in de bouw.",
    kick: "Eco Bouwdrogers",
    h2: "Onze beste eco bouwdrogers op een rij.",
    lede: "Drie formaten, één familie. Klik op de punten voor de technische informatie per toestel.",
    alt: "Vernast eco bouwdrogers, drie formaten",
    bekijken: "Bekijken",
  },
  fr: {
    hotspots: HOTSPOTS_FR,
    trusted: ["Architectes", "Bureaux d'assurances", "Experts en construction", "Entrepreneurs"],
    seal: "Certifié",
    tbK: "La confiance de ceux qui s'y connaissent",
    tbH3: "La confiance des professionnels de la construction.",
    kick: "Déshumidificateurs de chantier éco",
    h2: "Nos meilleurs déshumidificateurs de chantier éco en un coup d'œil.",
    lede: "Trois formats, une seule famille. Cliquez sur les points pour les informations techniques de chaque appareil.",
    alt: "Déshumidificateurs de chantier éco Vernast, trois formats",
    bekijken: "Voir",
  },
  en: {
    hotspots: HOTSPOTS_EN,
    trusted: ["Architects", "Insurance offices", "Building surveyors", "Contractors"],
    seal: "Certified",
    tbK: "Trusted by those who need to know",
    tbH3: "Trusted by professionals in construction.",
    kick: "Eco construction dehumidifiers",
    h2: "Our best eco construction dehumidifiers side by side.",
    lede: "Three sizes, one family. Click the dots for the technical information on each unit.",
    alt: "Vernast eco construction dehumidifiers, three sizes",
    bekijken: "View",
  },
} satisfies Copy<{
  hotspots: Hotspot[];
  trusted: string[];
  seal: string;
  tbK: string;
  tbH3: string;
  kick: string;
  h2: string;
  lede: string;
  alt: string;
  bekijken: string;
}>;

const V3EcoLineup = () => {
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const HOTSPOTS = t.hotspots;
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
        <div className="trustbar">
          {/*
            Het zegel staat vóór de tekst, niet ertussen: het is het eerste wat
            het oog pakt op een rode balk, en daarna leest de bezoeker waarom.
            `alt=""` omdat het woord ernaast al staat -- een schermlezer die
            "gouden schild" hoort én "Gecertificeerd" leest, krijgt het twee keer.
          */}
          <div className="tb-seal">
            <img
              src="/vernast/schild-gecertificeerd.webp"
              alt=""
              width={360}
              height={360}
              loading="lazy"
            />
            <span>{t.seal}</span>
          </div>
          <div className="tb-l">
            <span className="tb-k">{t.tbK}</span>
            <h3>{t.tbH3}</h3>
          </div>
          <div className="tb-chips">
            {t.trusted.map((who, i) => (
              <span key={who}>
                {TRUST_ICONS[i]} {who}
              </span>
            ))}
          </div>
        </div>

        <div className="sec-head mid">
          <span className="kick">{t.kick}</span>
          <h2 className="sec">{t.h2}</h2>
          <p className="lede">{t.lede}</p>
        </div>

        <div className="eco-stage">
          <img
            src="/vernast/lineup-dryers.webp"
            alt={t.alt}
            width={1440}
            height={1183}
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
              <Link to={lp(toestelPad(spot.model))}>
                {t.bekijken} <ArrowRightIcon size={12} strokeWidth={2.6} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default V3EcoLineup;
