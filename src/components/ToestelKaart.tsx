import { Link } from "react-router-dom";
import { ArrowRightIcon } from "./home-v3/icons";
import "@/styles/toestel-kaart.css";
import { useCopy, useLokaalPad } from "@/i18n/useTaal";

/**
 * Eén toestel als kaart: foto, label, naam, chips, prijs en knop.
 *
 * De kruisverkoop onderaan de toestelpagina tekende haar eigen kaart — rode
 * fotokader, geen chips, "BEKIJKEN" als klein rood woord — terwijl de homepage
 * dezelfde zeven toestellen als witte kaart met chips en een rode knop toonde.
 * Wie van de homepage naar een toestelpagina klikte, zag hetzelfde gamma twee
 * keer in een ander jasje. De opmaak staat in `styles/toestel-kaart.css` en
 * hangt aan het component, niet aan een paginawortel.
 */
export interface ToestelKaartProps {
  href: string;
  /** Naar de webshop in plaats van een eigen route. */
  external?: boolean;
  /** Pil linksboven op de foto. */
  tag?: string;
  /** Rood in plaats van wit, voor het meest gehuurde toestel. */
  hot?: boolean;
  image: string;
  alt: string;
  name: string;
  /** Eén zin onder de naam; mag weg waar de kaart naast een lopende tekst staat. */
  blurb?: string;
  eco?: boolean;
  chips?: string[];
  /** Boven het bedrag, bijvoorbeeld "vanaf". */
  pricePrefix?: string;
  /** Het bedrag zoals het op het scherm hoort, inclusief euroteken. */
  price: string;
  /** Onder het bedrag, bijvoorbeeld "/dag excl. btw". */
  priceNote: string;
  cta?: string;
}

/** De vochtafvoer krijgt een eigen kleur; herkenning op het achtervoegsel,
    in het Nederlands, Frans ("50 litres par jour") en Engels ("50 litres per day"). */
const isVochtafvoer = (chip: string) =>
  chip.endsWith("liter per dag") || chip.endsWith("litres par jour") || chip.endsWith("litres per day");

const COPY = { nl: { cta: "Product huren" }, fr: { cta: "Louer cet appareil" }, en: { cta: "Hire this unit" } };

const Inhoud = ({
  tag,
  image,
  alt,
  name,
  blurb,
  eco,
  chips = [],
  pricePrefix,
  price,
  priceNote,
  cta,
}: ToestelKaartProps) => {
  const t = useCopy(COPY);
  return (
  <>
    <div className="tk-media">
      {tag && <span className="tk-tag">{tag}</span>}
      {/* De toestelfoto's zijn vierkant (600² of 1440²); zie V3Pickup. */}
      <img src={image} alt={alt} width={600} height={600} loading="lazy" decoding="async" />
    </div>
    <div className="tk-body">
      <h3>{name}</h3>
      {blurb && <p>{blurb}</p>}
      {(eco || chips.length > 0) && (
        <div className="tk-chips">
          {eco && (
            <span className="tk-chip eco">
              <img src="/vernast/icoon-eco.webp" alt="" width={96} height={96} loading="lazy" /> Eco
            </span>
          )}
          {chips.map((chip) => (
            <span className={isVochtafvoer(chip) ? "tk-chip water" : "tk-chip"} key={chip}>
              {isVochtafvoer(chip) && (
                <img src="/vernast/icoon-druppel.webp" alt="" width={96} height={96} loading="lazy" />
              )}
              {chip}
            </span>
          ))}
        </div>
      )}
      <div className="tk-foot">
        <span className="tk-cta">
          {cta ?? t.cta} <ArrowRightIcon size={13} strokeWidth={2.6} />
        </span>
        <span className="tk-price">
          {pricePrefix}
          <b>{price}</b>
          <small>{priceNote}</small>
        </span>
      </div>
    </div>
  </>
  );
};

const ToestelKaart = (props: ToestelKaartProps) =>
  props.external ? (
    <a className={`tk${props.hot ? " hot" : ""}`} href={props.href} target="_blank" rel="noopener">
      <Inhoud {...props} />
    </a>
  ) : (
    <InterneKaart {...props} />
  );

/* `lp` laat een pad dat al vertaald is ongemoeid, dus de pagina mag ook een
   Frans pad meegeven. */
const InterneKaart = (props: ToestelKaartProps) => {
  const lp = useLokaalPad();
  return (
    <Link className={`tk${props.hot ? " hot" : ""}`} to={lp(props.href)}>
      <Inhoud {...props} />
    </Link>
  );
};

export default ToestelKaart;
