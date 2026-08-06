import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, InfoIcon, LeafIcon } from "./icons";

interface ProductCard {
  /** Internal device route, or an absolute URL for the shop-hosted model. */
  href: string;
  external?: boolean;
  tag: string;
  discount?: string;
  hot?: boolean;
  image: string;
  alt: string;
  name: string;
  blurb: string;
  eco?: boolean;
  chips: string[];
  price: string;
  /** Price the design strikes through next to the discounted day rate. */
  was?: string;
}

const MAIN: ProductCard[] = [
  {
    href: "/verhuur/toestel/ttk170",
    tag: "Kleine ruimtes",
    image: "/vernast/eco-boost.webp",
    alt: "ECO Boost",
    name: "ECO Boost",
    blurb:
      "Compact en verrijdbaar, past door elke deuropening. Ideaal voor één kamer of een appartement.",
    eco: true,
    chips: ["50 liter per dag", "tot 250 m³"],
    price: "€ 9,00",
  },
  {
    href: "/verhuur/toestel/ttk350",
    tag: "Meest gehuurd",
    discount: "− 8% korting",
    hot: true,
    image: "/vernast/eco-performance.webp",
    alt: "ECO Performance",
    name: "ECO Performance",
    blurb:
      "Onze standaard voor nieuwbouw. Droogt chape en pleisterwerk betrouwbaar en energiezuinig.",
    eco: true,
    chips: ["80 liter per dag", "tot 400 m³"],
    price: "€ 12,00",
    was: "€ 13,00",
  },
  {
    href: "/verhuur/toestel/ttk650",
    tag: "Grote volumes",
    image: "/vernast/eco-ultimate.webp",
    alt: "ECO Ultimate",
    name: "ECO Ultimate",
    blurb: "Het zwaarste toestel in het gamma. Voor grote werven, kelders en zware waterschade.",
    eco: true,
    chips: ["150 liter per dag", "tot 600 m³"],
    price: "€ 16,00",
  },
  {
    href: "https://www.bouwdrogerservice.be/collections/bouwdrogers/products/eco-revolution",
    external: true,
    tag: "Plaatselijk drogen",
    image: "/vernast/eco-revolution.webp",
    alt: "ECO Revolution",
    name: "ECO Revolution",
    blurb: "Droogt gericht via slangen: onder vloeren, in wanden en op moeilijk bereikbare plekken.",
    eco: true,
    chips: ["Adsorptie", "gericht drogen"],
    price: "€ 25,00",
  },
];

const SUPPORT: ProductCard[] = [
  {
    href: "/verhuur/toestel/ttv4500",
    tag: "Luchtcirculatie",
    image: "/vernast/vent-axiaal.webp",
    alt: "Turbo Axiaalventilator",
    name: "Turbo Axiaalventilator",
    blurb: "Versnelt elke droging door de lucht continu in beweging te houden.",
    chips: ["5 300 m³/u", "3 standen"],
    price: "€ 9,00",
  },
  {
    href: "/verhuur/toestel/ttv4500",
    tag: "Gericht drogen",
    image: "/vernast/vent-radiaal.webp",
    alt: "Turbo Radiaalventilator",
    name: "Turbo Radiaalventilator",
    blurb: "Blaast gericht over vloeren en chape, ideaal in combinatie met een droger.",
    chips: ["2 250 m³/u", "vloeren & chape"],
    price: "€ 8,00",
  },
  {
    href: "/verhuur/toestel/teddh30",
    tag: "Verwarming",
    image: "/vernast/kachel-30.webp",
    alt: "Elektrische kachel 30",
    name: "Elektrische kachel 30",
    blurb: "Houdt de ruimte op temperatuur zodat de droging effectief blijft.",
    chips: ["3,30 kW", "thermostaat"],
    price: "€ 12,00",
  },
  {
    href: "/verhuur/toestel/teddh30",
    tag: "Verwarming",
    image: "/vernast/kachel-20.webp",
    alt: "Elektrische kachel 20",
    name: "Elektrische kachel 20",
    blurb: "Compacte verwarming voor kleinere ruimtes tijdens de droogperiode.",
    chips: ["2,00 kW", "compact"],
    price: "€ 9,00",
  },
];

/** The card body is identical for internal and external links. */
const CardBody = ({ card }: { card: ProductCard }) => (
  <>
    <div className="pm">
      <span className="pt">{card.tag}</span>
      {card.discount && <span className="pk">{card.discount}</span>}
      <img src={card.image} alt={card.alt} loading="lazy" />
    </div>
    <div className="pb">
      <h3>{card.name}</h3>
      <p>{card.blurb}</p>
      <div className="chips">
        {card.eco && (
          <span className="chip eco">
            <LeafIcon /> Eco
          </span>
        )}
        {card.chips.map((chip) => (
          <span className="chip" key={chip}>
            {chip}
          </span>
        ))}
      </div>
      <div className="pf">
        <span className="bekijk">
          Product huren <ArrowRightIcon size={13} strokeWidth={2.6} />
        </span>
        <span className="pr">
          vanaf<b>{card.price}</b>
          <small>
            /dag excl. btw{card.was && <> · <s>{card.was}</s></>}
          </small>
        </span>
      </div>
    </div>
  </>
);

const Card = ({ card }: { card: ProductCard }): ReactNode =>
  card.external ? (
    <a className={`pc${card.hot ? " hot" : ""}`} href={card.href} target="_blank" rel="noopener">
      <CardBody card={card} />
    </a>
  ) : (
    <Link className={`pc${card.hot ? " hot" : ""}`} to={card.href}>
      <CardBody card={card} />
    </Link>
  );

const V3Products = () => (
  <section className="prods" id="toestellen">
    <div className="wrap">
      <div className="phead-row">
        <div className="sec-head">
          <span className="kick">Het gamma</span>
          <h2 className="sec">Professionele toestellen voor elke droogsituatie.</h2>
          <p className="lede">
            Van één kamer tot grotere werven, van nieuwbouw tot waterschade: u kiest geen toestel,
            maar een oplossing die past bij uw ruimte en droogdoel. Prijzen vanaf € 9 per dag, excl.
            btw.
          </p>
          <div className="pnote">
            <InfoIcon />
            <span>
              <b>Losse toestellen huurt u af te halen in Aartselaar</b>, tegen lagere afhaalprijzen,
              via de{" "}
              <Link to="/verhuur/afhalen" style={{ color: "var(--red)", fontWeight: 700 }}>
                aparte afhaal-checkout
              </Link>
              . Leveren en installeren doen wij uitsluitend per pakket, alleen zo kunnen wij onze
              droog-garantie waarmaken.
            </span>
          </div>
        </div>
        <Link className="btn btn-out" to="/verhuur/calculator">
          Niet zeker? Laat het berekenen
        </Link>
      </div>

      <div className="pgrid main">
        {MAIN.map((card) => (
          <Card card={card} key={card.name} />
        ))}
      </div>

      <div className="psub">
        <span className="pst">Versnel de droging</span>
        <span className="psl" />
      </div>

      <div className="pgrid two">
        {SUPPORT.map((card) => (
          <Card card={card} key={card.name} />
        ))}
      </div>

      <div className="pakketbar">
        <img
          className="pkb-man"
          src="/vernast/man-zen-crop.webp"
          alt="Zorgeloos drogen met Vernast"
          loading="lazy"
        />
        <div>
          <h3>Liever niet zelf puzzelen? Bouw uw pakket op maat.</h3>
          <p>
            Onze calculator stelt het exacte pakket samen voor uw woning, drogers, ventilatoren en
            verwarming in de juiste verhouding. Geleverd, geplaatst en afgesteld. En met één belofte:{" "}
            <b>100% droog binnen de berekende periode, of u huurt kosteloos verder.*</b>
          </p>
        </div>
        <div className="pkb-b">
          <Link className="btn btn-white" to="/verhuur/calculator">
            Bouw uw pakket op maat
            <ArrowRightIcon />
          </Link>
          <span className="pkb-note">
            * Garantie geldt wanneer de externe omstandigheden (verwarming, ventilatie, stroom) aan
            onze richtlijnen voldoen.
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default V3Products;
