import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, InfoIcon, LeafIcon } from "./icons";
import { PRODUCTS } from "@/data/verhuur";
import { DAY_PRICE_MIN } from "@/data/tarieflijst";

/**
 * Naam, tekst, prijs en specs van één kaart, uit de gepubliceerde tarieven.
 *
 * De kaarten droegen hun eigen bedragen uit de designhandoff: "vanaf € 9,00 per
 * dag" op de ECO Boost, terwijl diezelfde TTK 170 op de pagina waar de kaart
 * naartoe linkt € 18 per dag kost. Wie doorklikte zag zijn prijs verdubbelen.
 * Hetzelfde gold voor de specs (80 l/dag op een toestel dat er 70 haalt) en
 * voor een doorgestreepte "− 8% korting" die nergens op sloeg.
 *
 * Ook de naam kwam hier vandaan, en dus bleef een toestel dat in het portaal
 * hernoemd werd op de homepage zijn oude naam dragen — terwijl de detailpagina
 * waar de kaart naartoe linkt de nieuwe droeg. Alles wat in het portaal
 * bewerkbaar is, komt nu uit `PRODUCTS`; de kaart houdt enkel haar eigen beeld
 * en haar eco-label. Wat hier nog als tekst staat, geldt als terugval voor een
 * toestel dat (nog) niet te huur staat.
 */
function tariff(key: string | undefined) {
  const product = key ? PRODUCTS[key] : undefined;
  if (!product) return null;

  const label = ([name, value, unit]: [string, string, string]): string => {
    if (name === "Vochtafvoer") return `${value} liter per dag`;
    if (name === "Bereik") return `tot ${value} m³`;
    if (unit) return `${value} ${unit}`;
    if (/^\d/.test(value)) return `${value} ${name.toLowerCase()}`; // "Standen 3" → "3 standen"
    // "Thermostaat ja" → "thermostaat", maar "Techniek adsorptie" → "adsorptie".
    return value === "ja" ? name.toLowerCase() : value;
  };

  return {
    name: product.short,
    tag: product.badge,
    blurb: product.sum,
    price: `€ ${product.day.toLocaleString("nl-BE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`,
    chips: product.key.slice(0, 2).map(label),
  };
}

interface ProductCard {
  /** Internal device route, or an absolute URL for the shop-hosted model. */
  href: string;
  /**
   * Sleutel in `PRODUCTS`: waar prijs en specs vandaan komen. Ontbreekt hij,
   * dan staat het toestel niet in onze tarieven en houdt de kaart wat er hier
   * staat — dat geldt alleen voor het model dat via de webshop verhuurd wordt.
   */
  key?: string;
  external?: boolean;
  tag: string;
  hot?: boolean;
  image: string;
  alt: string;
  name: string;
  blurb: string;
  /** Enkel de condensontvochtigers uit de ECO-lijn; de adsorptiedroger niet. */
  eco?: boolean;
  chips: string[];
  price: string;
}

const MAIN: ProductCard[] = [
  {
    href: "/verhuur/toestel/ttk170",
    key: "ttk170",
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
    key: "ttk350",
    tag: "Meest gehuurd",
    hot: true,
    image: "/vernast/eco-performance.webp",
    alt: "ECO Performance",
    name: "ECO Performance",
    blurb:
      "Onze standaard voor nieuwbouw. Droogt chape en pleisterwerk betrouwbaar en energiezuinig.",
    eco: true,
    chips: ["80 liter per dag", "tot 400 m³"],
    price: "€ 12,00",
  },
  {
    href: "/verhuur/toestel/ttk650",
    key: "ttk650",
    tag: "Grote volumes",
    image: "/vernast/eco-ultimate.webp",
    alt: "ECO Ultimate",
    name: "ECO Ultimate",
    blurb: "Het zwaarste toestel in het gamma. Voor grote werven, kelders en zware waterschade.",
    eco: true,
    chips: ["150 liter per dag", "tot 600 m³"],
    price: "€ 16,00",
  },
  /*
    De ECO Revolution staat nog niet in ons depot, dus zolang het portaal hem
    niet te huur zet, blijft deze kaart naar de webshop wijzen. Zodra de
    schakelaar daar aan gaat, bestaat `PRODUCTS.revolution` en verwijst de kaart
    naar onze eigen pagina — met de prijs die in het portaal staat.
  */
  PRODUCTS.revolution
    ? {
        href: "/verhuur/toestel/revolution",
        key: "revolution",
        tag: "Plaatselijk drogen",
        image: "/vernast/eco-revolution.webp",
        alt: "ECO Revolution",
        name: "ECO Revolution",
        blurb:
          "Droogt gericht via slangen: onder vloeren, in wanden en op moeilijk bereikbare plekken.",
        chips: ["Adsorptie", "gericht drogen"],
        price: "€ 25,00",
      }
    : {
        href: "https://www.bouwdrogerservice.be/collections/bouwdrogers/products/eco-revolution",
        external: true,
        tag: "Plaatselijk drogen",
        image: "/vernast/eco-revolution.webp",
        alt: "ECO Revolution",
        name: "ECO Revolution",
        blurb:
          "Droogt gericht via slangen: onder vloeren, in wanden en op moeilijk bereikbare plekken.",
        chips: ["Adsorptie", "gericht drogen"],
        price: "€ 25,00",
      },
];

/*
  Enkel toestellen die wij zelf verhuren en die een eigen pagina hebben. De
  radiaalventilator en de kleine kachel stonden hier eerder met een verzonnen
  prijs en een link naar de pagina van een ánder toestel — wie op "Turbo
  Radiaalventilator € 8" klikte, kwam op de axiaalventilator uit. Nu zijn het
  echte producten in het portaal, met een eigen pagina en een prijs uit de
  gepubliceerde tarieven, dus staan ze hier weer.
*/
const SUPPORT: ProductCard[] = [
  {
    href: "/verhuur/toestel/ttv4500",
    key: "ttv4500",
    tag: "Luchtcirculatie",
    image: "/vernast/vent-axiaal.webp",
    alt: "Turbo Axiaalventilator",
    name: "Turbo Axiaalventilator",
    blurb: "Versnelt elke droging door de lucht continu in beweging te houden.",
    chips: ["5 300 m³/u", "3 standen"],
    price: "€ 9,00",
  },
  {
    href: "/verhuur/toestel/radiaal2250",
    key: "radiaal2250",
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
    key: "teddh30",
    tag: "Verwarming",
    image: "/vernast/kachel-30.webp",
    alt: "Elektrische kachel 30",
    name: "Elektrische kachel 30",
    blurb: "Houdt de ruimte op temperatuur zodat de droging effectief blijft.",
    chips: ["3,30 kW", "thermostaat"],
    price: "€ 12,00",
  },
  {
    href: "/verhuur/toestel/teddh20",
    key: "teddh20",
    tag: "Verwarming",
    image: "/vernast/kachel-20.webp",
    alt: "Elektrische kachel 20",
    name: "Elektrische kachel 20",
    blurb: "Compacte verwarming voor kleinere ruimtes tijdens de droogperiode.",
    chips: ["20 kW", "thermostaat"],
    price: "€ 9,00",
  },
];

/** The card body is identical for internal and external links. */
const CardBody = ({ card }: { card: ProductCard }) => {
  const live = tariff(card.key);
  return (
  <>
    <div className="pm">
      <span className="pt">{live?.tag ?? card.tag}</span>
      <img src={card.image} alt={card.alt} loading="lazy" />
    </div>
    <div className="pb">
      <h3>{live?.name ?? card.name}</h3>
      <p>{live?.blurb ?? card.blurb}</p>
      <div className="chips">
        {card.eco && (
          <span className="chip eco">
            <LeafIcon /> Eco
          </span>
        )}
        {(live?.chips ?? card.chips).map((chip) => (
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
          vanaf<b>{live?.price ?? card.price}</b>
          <small>/dag excl. btw</small>
        </span>
      </div>
    </div>
  </>
  );
};

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
            maar een oplossing die past bij uw ruimte en droogdoel. Prijzen vanaf € {DAY_PRICE_MIN} per
            dag, excl. btw.
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
