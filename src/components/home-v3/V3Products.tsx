import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, InfoIcon } from "./icons";
import { PRODUCTS, toestelChips } from "@/data/verhuur";
import { DAY_PRICE_MIN } from "@/data/tarieflijst";
import { VAT_RATE } from "@/lib/booking";

/**
 * Naam, tekst, prijs en specs van één kaart, uit de gepubliceerde tarieven.
 *
 * De kaarten droegen hun eigen bedragen uit de designhandoff: "vanaf € 9,00 per
 * dag" op de Boost, terwijl diezelfde TTK 170 op de pagina waar de kaart
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

  return {
    name: product.short,
    tag: product.badge,
    blurb: product.sum,
    day: product.day,
    // Drie in plaats van twee: de kachels dragen hun maximumtemperatuur als
    // derde spec, en dat is naast het vermogen het cijfer waarop iemand kiest.
    // Bij de drogers levert het de stroomopname op, bij de ventilatoren het
    // verbruik -- allebei zinvol, en de chips lopen netjes door naar een
    // tweede regel.
    chips: toestelChips(product),
  };
}

/*
 * De vochtafvoer is het cijfer waarop bouwdrogers vergeleken worden -- het
 * verschil tussen 50 en 110 liter per dag bepaalt of een toestel bij de werf
 * past. Het stond tussen de andere chips in dezelfde grijze pil en viel
 * daardoor niet op. Herkenning op het achtervoegsel: zowel de chip uit de
 * tarieven als de terugvaltekst hierboven eindigt op "liter per dag".
 */
/*
 * De catalogus rekent excl. btw -- zo staan de bedragen in het portaal en zo
 * rekent de checkout ze server-side opnieuw uit. Particulieren vergelijken
 * echter brutobedragen, en wie "€ 9,00" leest en bij het afrekenen € 10,89
 * betaalt, voelt zich beetgenomen. Vandaar de schakelaar: hetzelfde getal, de
 * bezoeker kiest zelf in welke vorm.
 *
 * Alleen weergave. Er wordt hier niets doorgegeven aan een bestelling; de
 * bedragen die werkelijk afgerekend worden komen uit `src/lib/booking.ts`.
 */
const euro = (bedrag: number) =>
  `€ ${bedrag.toLocaleString("nl-BE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const metBtw = (bedrag: number, incl: boolean) =>
  incl ? Math.round(bedrag * (1 + VAT_RATE) * 100) / 100 : bedrag;

const isVochtafvoer = (chip: string) => chip.endsWith("liter per dag");

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
  /** Dagprijs excl. btw; de weergave bepaalt of er btw op komt. */
  day: number;
}

/*
 * De chips herhalen de kerncijfers van de toestelpagina waar de kaart naartoe
 * linkt. Ze liepen daar op vier kaarten van weg: 80 in plaats van 70 liter,
 * 150 in plaats van 90, "3,30 kW" op de kaart die naar de kachel van 30 kW
 * wijst, en 5 300 m³/u waar de TTV 4500 er 4 500 opgeeft. Zelfde toestel,
 * zelfde prijs, ander getal — en de homepage is de pagina die het vaakst
 * geciteerd wordt. Wijzigt een specificatie, wijzig ze op de toestelpagina en
 * neem ze hier over, nooit omgekeerd.
 */
const MAIN: ProductCard[] = [
  {
    href: "/verhuur/toestel/ttk170",
    key: "ttk170",
    tag: "Kleine ruimtes",
    image: "/vernast/eco-boost.webp",
    alt: "Vernast Boost bouwdroger, condensontvochtiger van 50 liter per dag voor ruimtes tot 250 m³",
    name: "Boost",
    blurb:
      "Compact en verrijdbaar, past door elke deuropening. Ideaal voor één kamer of een appartement.",
    eco: true,
    chips: ["50 liter per dag", "tot 250 m³"],
    day: 9,
  },
  {
    href: "/verhuur/toestel/ttk350",
    key: "ttk350",
    tag: "Meest gehuurd",
    hot: true,
    image: "/vernast/eco-performance.webp",
    alt: "Vernast Performance bouwdroger, condensontvochtiger van 70 liter per dag voor ruimtes tot 400 m³",
    name: "Performance",
    blurb:
      "Onze standaard voor nieuwbouw. Droogt chape en pleisterwerk betrouwbaar en energiezuinig.",
    eco: true,
    chips: ["70 liter per dag", "tot 400 m³"],
    day: 12,
  },
  {
    href: "/verhuur/toestel/ttk650",
    key: "ttk650",
    tag: "Grote volumes",
    image: "/vernast/eco-ultimate.webp",
    alt: "Vernast Ultimate bouwdroger, condensontvochtiger van 110 liter per dag voor ruimtes tot 600 m³",
    name: "Ultimate",
    blurb: "Het zwaarste toestel in het gamma. Voor grote werven, kelders en zware waterschade.",
    eco: true,
    chips: ["110 liter per dag", "tot 600 m³"],
    day: 16,
  },
  /*
    De Revolution staat nog niet in ons depot, dus zolang het portaal hem
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
        alt: "Vernast Revolution, rode adsorptiedroger met slangaansluitingen voor plaatselijk drogen",
        name: "Revolution",
        blurb:
          "Droogt gericht via slangen: onder vloeren, in wanden en op moeilijk bereikbare plekken.",
        chips: ["Adsorptie", "gericht drogen"],
        day: 25,
      }
    : {
        href: "https://www.bouwdrogerservice.be/collections/bouwdrogers/products/eco-revolution",
        external: true,
        tag: "Plaatselijk drogen",
        image: "/vernast/eco-revolution.webp",
        alt: "Vernast Revolution, rode adsorptiedroger met slangaansluitingen voor plaatselijk drogen",
        name: "Revolution",
        blurb:
          "Droogt gericht via slangen: onder vloeren, in wanden en op moeilijk bereikbare plekken.",
        chips: ["Adsorptie", "gericht drogen"],
        day: 25,
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
    alt: "Vernast Highflow, bouwventilator met 4.500 m³/u luchtverzet",
    name: "Highflow",
    blurb: "Versnelt elke droging door de lucht continu in beweging te houden.",
    chips: ["4 500 m³/u", "3 standen"],
    day: 9,
  },
  {
    href: "/verhuur/toestel/radiaal2250",
    key: "radiaal2250",
    tag: "Gericht drogen",
    image: "/vernast/vent-radiaal.webp",
    alt: "Vernast Turboflow van 2.250 m³/u voor vloer- en muurdroging",
    name: "Turbo",
    blurb: "Blaast gericht over vloeren en chape, ideaal in combinatie met een droger.",
    chips: ["2 250 m³/u", "vloeren & chape"],
    day: 8,
  },
  {
    href: "/verhuur/toestel/teddh20",
    key: "teddh20",
    tag: "Verwarming",
    image: "/vernast/kachel-20.webp",
    alt: "Vernast Heatboost 20 elektrische bouwkachel, 20 kW met thermostaat voor kleinere ruimtes",
    name: "Heatboost 20",
    blurb: "Compacte verwarming voor kleinere ruimtes tijdens de droogperiode.",
    chips: ["20 kW", "400 V", "60 °C"],
    day: 9,
  },
  {
    href: "/verhuur/toestel/teddh30",
    key: "teddh30",
    tag: "Verwarming",
    image: "/vernast/kachel-30.webp",
    alt: "Vernast Heatpower 30 elektrische bouwkachel, 30 kW met ingebouwde thermostaat",
    name: "Heatpower 30",
    blurb: "Houdt de ruimte op temperatuur zodat de droging effectief blijft.",
    chips: ["30 kW", "400 V", "75 °C"],
    day: 12,
  },
];

/** The card body is identical for internal and external links. */
const CardBody = ({ card, incl }: { card: ProductCard; incl: boolean }) => {
  const live = tariff(card.key);
  return (
  <>
    <div className="pm">
      <span className="pt">{live?.tag ?? card.tag}</span>
      {/* De toestelfoto's zijn vierkant (600² of 1440²); zie V3Pickup. */}
      <img src={card.image} alt={card.alt} width={600} height={600} loading="lazy" />
    </div>
    <div className="pb">
      <h3>{live?.name ?? card.name}</h3>
      <p>{live?.blurb ?? card.blurb}</p>
      <div className="chips">
        {/*
          Blaadje en druppel als afbeelding en niet als lijnicoon: ze dragen hun
          eigen groen en blauw, waardoor de twee chips al aan hun vorm te
          herkennen zijn. 96x96 webp van elk zo'n 1,8 kB; `width`/`height` staan
          erop zodat de chip niet verspringt terwijl ze laden.
        */}
        {card.eco && (
          <span className="chip eco">
            <img src="/vernast/icoon-eco.webp" alt="" width={96} height={96} loading="lazy" /> Eco
          </span>
        )}
        {(live?.chips ?? card.chips).map((chip) => (
          <span className={isVochtafvoer(chip) ? "chip water" : "chip"} key={chip}>
            {isVochtafvoer(chip) && (
              <img src="/vernast/icoon-druppel.webp" alt="" width={96} height={96} loading="lazy" />
            )}
            {chip}
          </span>
        ))}
      </div>
      <div className="pf">
        <span className="bekijk">
          Product huren <ArrowRightIcon size={13} strokeWidth={2.6} />
        </span>
        <span className="pr">
          vanaf<b>{euro(metBtw(live?.day ?? card.day, incl))}</b>
          <small>/dag {incl ? "incl." : "excl."} btw</small>
        </span>
      </div>
    </div>
  </>
  );
};

const Card = ({ card, incl }: { card: ProductCard; incl: boolean }): ReactNode =>
  card.external ? (
    <a className={`pc${card.hot ? " hot" : ""}`} href={card.href} target="_blank" rel="noopener">
      <CardBody card={card} incl={incl} />
    </a>
  ) : (
    <Link className={`pc${card.hot ? " hot" : ""}`} to={card.href}>
      <CardBody card={card} incl={incl} />
    </Link>
  );

const V3Products = () => {
  /*
    Begint op "excl. btw" -- hetzelfde als wat er in de geprerenderde HTML
    staat. Zou de beginstand "incl." zijn, dan zag de bezoeker het bedrag
    bij het laden onder zijn ogen verspringen, en citeerden de AI-antwoord-
    machines die geen JavaScript uitvoeren de verkeerde prijs.
  */
  const [incl, setIncl] = useState(false);

  return (
  <section className="prods" id="toestellen">
    <div className="wrap">
      <div className="phead-row">
        <div className="sec-head">
          <span className="kick">Het gamma</span>
          <h2 className="sec">Professionele toestellen voor elke droogsituatie.</h2>
          <p className="lede">
            Van één kamer tot grotere werven, van nieuwbouw tot waterschade: u kiest geen toestel,
            maar een oplossing die past bij uw ruimte en droogdoel. Prijzen vanaf{" "}
            {euro(metBtw(DAY_PRICE_MIN, incl))} per dag, {incl ? "incl." : "excl."} btw.
          </p>
        </div>
        {/*
          De pnote staat in het design rechts naast de kop (phead-right), niet
          onder de lede. De knop "Niet zeker? Laat het berekenen" die hier ooit
          stond, staat niet in het design — de calculator-CTA staat al in de
          pakketbar onderaan de sectie.
        */}
        <div className="phead-right">
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

          {/*
            Twee knoppen in plaats van een schuifje: bij een schuifje moet de
            bezoeker raden welke kant "aan" is, twee knoppen tonen allebei de
            toestanden met de actieve ingedrukt. `aria-pressed` zegt hetzelfde
            tegen een schermlezer.
          */}
          <div className="btw-switch" role="group" aria-label="Prijzen tonen met of zonder btw">
            <button type="button" aria-pressed={!incl} onClick={() => setIncl(false)}>
              Excl. btw
            </button>
            <button type="button" aria-pressed={incl} onClick={() => setIncl(true)}>
              Incl. btw
            </button>
          </div>
        </div>
      </div>

      <div className="pgrid main">
        {MAIN.map((card) => (
          <Card card={card} incl={incl} key={card.name} />
        ))}
      </div>

      {/*
        Hier stond een tussenkopje "Versnel de droging" met een streep
        (`.psub`/`.pst`/`.psl`). Geen van die drie klassen had ergens CSS, dus
        het kwam eruit als losse kleine tekst tussen twee kaartrijen en de
        streep tekende niets. De rijen lezen zonder tussenkop even goed.
      */}
      <div className="pgrid two">
        {SUPPORT.map((card) => (
          <Card card={card} incl={incl} key={card.name} />
        ))}
      </div>

      <div className="pakketbar">
        <img
          className="pkb-man"
          src="/vernast/man-zen-crop.webp"
          alt="Zorgeloos drogen met Vernast"
          width={1225}
          height={1440}
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
};

export default V3Products;
