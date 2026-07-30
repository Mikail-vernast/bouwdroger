import { Link } from "react-router-dom";
import { ArrowRightIcon } from "./icons";

interface Spec {
  k: string;
  v: string;
}

interface ProductCard {
  /** Route target — internal product id, or an absolute URL for the webshop. */
  to: string;
  external?: boolean;
  tag: string;
  badge?: string;
  hot?: boolean;
  image: string;
  name: string;
  caption: string;
  blurb?: string;
  specs: Spec[];
  price: string;
  priceNote: string;
  wasPrice?: string;
}

const MAIN: ProductCard[] = [
  {
    to: "/product/bd-1",
    tag: "Kleine ruimtes",
    image: "/design/eco-boost.jpg",
    name: "ECO Boost – 50l /dag",
    caption: "50 l/dag · tot 250 m³",
    blurb: "Compact en verrijdbaar. Voor één kamer, een appartement of een kleinere renovatie.",
    specs: [
      { k: "Vochtafvoer", v: "50 l/dag" },
      { k: "Luchtdebiet", v: "300 m³/u" },
      { k: "Verbruik", v: "0,75 kW" },
    ],
    price: "€ 9,00",
    priceNote: " /dag excl. btw",
  },
  {
    to: "/product/bd-2",
    tag: "Meest gehuurd",
    badge: "− 8% korting",
    hot: true,
    image: "/design/eco-performance.jpg",
    name: "ECO Performance – 80l /dag",
    caption: "80 l/dag · tot 400 m³",
    blurb: "Onze standaard voor nieuwbouw. Droogt chape en pleisterwerk betrouwbaar en snel.",
    specs: [
      { k: "Vochtafvoer", v: "80 l/dag" },
      { k: "Luchtdebiet", v: "550 m³/u" },
      { k: "Verbruik", v: "1,1 kW" },
    ],
    price: "€ 12,00",
    priceNote: " /dag excl. btw",
    wasPrice: "€ 13,00",
  },
  {
    to: "/product/bd-3",
    tag: "Grote volumes",
    image: "/design/eco-ultimate.jpg",
    name: "ECO Ultimate – 150l /dag",
    caption: "150 l/dag · tot 600 m³",
    blurb: "Het zwaarste toestel in het gamma. Voor grote werven, kelders en waterschade.",
    specs: [
      { k: "Vochtafvoer", v: "150 l/dag" },
      { k: "Luchtdebiet", v: "700 m³/u" },
      { k: "Verbruik", v: "1,4 kW" },
    ],
    price: "€ 16,00",
    priceNote: " /dag excl. btw",
  },
  {
    to: "https://www.bouwdrogerservice.be/collections/bouwdrogers/products/eco-revolution",
    external: true,
    tag: "Plaatselijk drogen",
    image: "/design/eco-revolution.jpg",
    name: "ECO Revolution – Plaatselijk drogen",
    caption: "Adsorptie · gericht drogen",
    blurb:
      "Droogt gericht via slangen — onder vloeren, in wanden en op moeilijk bereikbare plekken.",
    specs: [
      { k: "Techniek", v: "Adsorptie" },
      { k: "Inzet", v: "Vloeren · wanden" },
      { k: "Temperatuur", v: "Ook onder 15 °C" },
    ],
    price: "€ 25,00",
    priceNote: " /dag excl. btw",
  },
];

const ACCESSORIES: ProductCard[] = [
  {
    to: "/product/vt-1",
    tag: "Luchtcirculatie",
    image: "/design/vent-axiaal.jpg",
    name: "Turbo Axiaalventilator",
    caption: "5 300 m³/u luchtverzet",
    specs: [
      { k: "Luchtverzet", v: "5 300 m³/u" },
      { k: "Standen", v: "3" },
      { k: "Verbruik", v: "0,25 kW" },
    ],
    price: "€ 9,00",
    priceNote: " /dag",
  },
  {
    to: "/product/vt-2",
    tag: "Gericht drogen",
    image: "/design/vent-radiaal.jpg",
    name: "Turbo Radiaalventilator",
    caption: "2 250 m³/u · vloeren & chape",
    specs: [
      { k: "Luchtverzet", v: "2 250 m³/u" },
      { k: "Standen", v: "3" },
      { k: "Verbruik", v: "0,50 kW" },
    ],
    price: "€ 8,00",
    priceNote: " /dag",
  },
  {
    to: "/product/vw-1",
    tag: "Verwarming",
    image: "/design/kachel-30.jpg",
    name: "Elektrische kachel 30",
    caption: "3,30 kW · met thermostaat",
    specs: [
      { k: "Vermogen", v: "3,30 kW" },
      { k: "Thermostaat", v: "Ingebouwd" },
      { k: "Aansluiting", v: "230 V" },
    ],
    price: "€ 12,00",
    priceNote: " /dag",
  },
  {
    to: "/product/vw-1",
    tag: "Verwarming",
    image: "/design/kachel-20.jpg",
    name: "Elektrische kachel 20",
    caption: "2,00 kW · compact",
    specs: [
      { k: "Vermogen", v: "2,00 kW" },
      { k: "Thermostaat", v: "Ingebouwd" },
      { k: "Aansluiting", v: "230 V" },
    ],
    price: "€ 9,00",
    priceNote: " /dag",
  },
];

const CardBody = ({ card, compactArrow }: { card: ProductCard; compactArrow: boolean }) => (
  <>
    <div className="pm">
      <span className="pt">{card.tag}</span>
      {card.badge && <span className="pk">{card.badge}</span>}
      <img src={card.image} alt={card.name} />
    </div>
    <div className="pb">
      <h3>{card.name}</h3>
      <div className="pcap">{card.caption}</div>
      {card.blurb && <p>{card.blurb}</p>}
      <div className="pspec">
        {card.specs.map((spec) => (
          <div key={spec.k}>
            <span className="k">{spec.k}</span>
            <span className="v">{spec.v}</span>
          </div>
        ))}
      </div>
      <div className="pf">
        <span className="pr">
          <small>vanaf</small> {card.price}
          <small>{card.priceNote}</small>
          {card.wasPrice && <> <s>{card.wasPrice}</s></>}
        </span>
        <span className="bekijk">
          Bekijken <ArrowRightIcon size={compactArrow ? 12 : 13} strokeWidth={2.6} />
        </span>
      </div>
    </div>
  </>
);

const Card = ({ card, compactArrow = false }: { card: ProductCard; compactArrow?: boolean }) => {
  const className = `pc${card.hot ? " hot" : ""}`;

  if (card.external) {
    return (
      <a className={className} href={card.to} target="_blank" rel="noopener noreferrer">
        <CardBody card={card} compactArrow={compactArrow} />
      </a>
    );
  }

  return (
    <Link className={className} to={card.to}>
      <CardBody card={card} compactArrow={compactArrow} />
    </Link>
  );
};

const V3Products = () => (
  <section className="prods" id="toestellen" aria-labelledby="gamma-heading">
    <div className="wrap">
      <div className="phead-row">
        <div className="sec-head">
          <span className="kick">Het gamma</span>
          <h2 className="sec" id="gamma-heading">
            Professionele toestellen voor elke droogsituatie.
          </h2>
          <p className="lede">
            Van één kamer tot grotere werven, van nieuwbouw tot waterschade: u kiest geen toestel,
            maar een oplossing die past bij uw ruimte en droogdoel. Prijzen vanaf € 9 per dag, excl.
            btw.
          </p>
        </div>
        <a className="btn btn-out" href="#configurator">
          Niet zeker? Laat het berekenen
        </a>
      </div>

      <div className="pgrid main">
        {MAIN.map((card) => (
          <Card key={card.name} card={card} />
        ))}
      </div>

      <div className="psub">
        <span className="pst">Versnel de droging</span>
        <span className="psl" />
      </div>

      <div className="pgrid two">
        {ACCESSORIES.map((card) => (
          <Card key={card.name} card={card} compactArrow />
        ))}
      </div>
    </div>
  </section>
);

export default V3Products;
