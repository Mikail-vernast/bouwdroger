import { Link } from "react-router-dom";
import GidsShell, { type GidsFaq } from "@/components/gids/GidsShell";
import { SEO } from "@/data/seo";
import { PRODUCTS } from "@/data/verhuur";
import { TARIEVEN_PUBLIEK, euro } from "@/data/tarieflijst";
import { itemListSchema } from "@/lib/schema";

const PATH = "/gids/condensdroger-of-adsorptiedroger";

/*
  Welk toestel welke techniek gebruikt, lezen we uit het `type` dat het portaal
  publiceert ("Condensontvochtiger", "Adsorptiedroger · …") in plaats van het
  hier vast te leggen. Staat de adsorptiedroger in het portaal op "niet te
  huur", dan verdwijnt hij uit TARIEVEN_PUBLIEK en dus ook uit deze gids —
  geen link naar een toestelpagina die niet bestaat.
*/
const CONDENS = TARIEVEN_PUBLIEK.filter((t) => /condens/i.test(t.type));
const ADSORPTIE = TARIEVEN_PUBLIEK.filter((t) => /adsorptie/i.test(t.type));
const GAMMA = [...CONDENS, ...ADSORPTIE];

/** Het werkbereik uit de technische fiche van het kleinste condenstoestel. */
const WERKBEREIK =
  CONDENS[0] && PRODUCTS[CONDENS[0].key]?.specs.find(([label]) => /werkingsbereik temperatuur/i.test(label))?.[1];

const FAQ: GidsFaq[] = [
  {
    question: "Wat is het verschil tussen een condensdroger en een adsorptiedroger?",
    answer:
      "Een condensdroger koelt de lucht af tot onder het dauwpunt, zodat de waterdamp condenseert tot water dat u afvoert. Een adsorptiedroger trekt de waterdamp uit de lucht met een vochtopnemend materiaal en blaast de vochtige lucht via een slang naar buiten. De eerste werkt best in een warme ruimte, de tweede blijft ook in de koude werken.",
  },
  {
    question: "Vanaf welke temperatuur werkt een condensdroger slecht?",
    answer:
      "Onder ongeveer 15 °C daalt het rendement van een condensdroger duidelijk, en onder 10 °C wordt de droging echt traag. In een koude kelder of een onverwarmde werf zetten we daarom een bouwkachel bij, of kiezen we voor adsorptie.",
  },
  {
    question: "Wanneer kies ik een adsorptiedroger?",
    answer:
      "Wanneer het koud is en u niet wil of kan verwarmen, en wanneer het vocht op een plek zit waar een gewone bouwdroger niet bij raakt, zoals onder een zwevende vloer of in een wandopbouw na waterschade. Via slangen blaast een adsorptiedroger droge lucht precies naar die plek.",
  },
  {
    question: "Is een luchtontvochtiger hetzelfde als een bouwdroger?",
    answer:
      "In de praktijk wel. Een bouwdroger is een krachtige luchtontvochtiger voor bouw- en renovatiewerk. Onze bouwdrogers zijn condensontvochtigers; de adsorptiedroger is een apart toestel voor gericht en koud drogen.",
  },
];

const CondensAdsorptiePage = () => (
  <GidsShell
    seo={SEO.gidsCondensAdsorptie}
    path={PATH}
    crumbs={[
      { name: "Home", path: "/" },
      { name: "Gidsen", path: "/gids" },
      { name: "Condensdroger of adsorptiedroger?", path: PATH },
    ]}
    kick="Gids · het juiste toestel"
    h1="Condensdroger of adsorptiedroger: welke heeft u nodig?"
    intro={
      <p>
        Beide toestellen halen vocht uit de lucht, maar op een totaal andere manier. Daardoor werkt de
        ene het best in een warme woning en de andere in een koude kelder of onder een vloer. Hier leest
        u hoe ze werken, waar de temperatuurgrens ligt en welk toestel uit ons gamma bij uw situatie past.
      </p>
    }
    heroImg={{ src: "/vernast/lineup-dryers.webp", alt: "Drie Vernast condensbouwdrogers naast elkaar" }}
    articlePublished="2026-09-29"
    faq={FAQ}
    jsonLd={[
      itemListSchema(
        "Condens- en adsorptiedrogers te huur",
        GAMMA.map((t) => ({ name: t.name, path: t.path })),
      ),
    ]}
  >
    <section className="sw">
      <div className="wrap prose">
        <h2>Zo werkt een condensdroger</h2>
        <p>
          Een condensdroger, ook condensontvochtiger genoemd, werkt als een kleine koelkast met een
          ventilator. Hij zuigt de vochtige binnenlucht aan en leidt ze langs een koud element. Daar koelt
          de lucht af tot onder haar <b>dauwpunt</b>, en de waterdamp slaat neer als vloeibaar water, net
          zoals een koud glas in de zomer aan de buitenkant nat wordt. Dat water loopt naar een reservoir
          of wordt met een condenspomp weggepompt. De lucht gaat daarna langs het warme deel van het
          koelcircuit en verlaat het toestel droger en iets warmer dan ze binnenkwam.
        </p>
        <p>
          Dat principe is efficiënt zolang de lucht warm en vochtig is. Warme lucht bevat veel waterdamp,
          dus elke keer dat ze langs het koude element gaat, condenseert er veel. Daarom is de
          condensdroger het standaardtoestel voor <Link to="/nieuwbouw">chape en pleisterwerk</Link> in een
          verwarmd gebouw en voor de meeste <Link to="/waterschade">waterschade</Link>.
        </p>

        <h2 style={{ marginTop: 40 }}>Waarom een condensdroger in de koude rendement verliest</h2>
        <p>
          Koude lucht bevat weinig waterdamp. Het verschil tussen de luchttemperatuur en het dauwpunt wordt
          kleiner, en het koude element kan bovendien gaan bevriezen; het toestel moet dan regelmatig
          ontdooien in plaats van drogen. <b>Onder ongeveer 15 °C daalt het rendement van een condensdroger
          duidelijk</b>, en onder 10 °C wordt de droging echt traag.
          {WERKBEREIK
            ? ` Onze condensdrogers mogen werken tussen ${WERKBEREIK}, maar aan de onderkant van dat bereik halen ze lang niet hun volle capaciteit.`
            : ""}
        </p>
        <p>
          In een koude kelder of een onverwarmde winterwerf is er dus een keuze: verwarm de ruimte met een{" "}
          <Link to="/verhuur/toestel/teddh30">elektrische bouwkachel</Link> zodat de condensdroger weer op
          volle kracht werkt, of kies een toestel dat de koude niet erg vindt.
        </p>

        <h2 style={{ marginTop: 40 }}>Zo werkt een adsorptiedroger</h2>
        <p>
          Een adsorptiedroger koelt niets af. Binnenin draait een rotor met een vochtopnemend materiaal,
          vaak silicagel. De waterdamp uit de lucht hecht zich aan dat materiaal, en de lucht die eruit komt
          is zeer droog. Een tweede, verwarmde luchtstroom haalt het vocht weer uit de rotor en voert het
          als vochtige lucht af, meestal via een slang naar buiten. Er komt dus geen condenswater in een bak
          terecht.
        </p>
        <p>
          Omdat dat proces niet op afkoeling steunt, <b>werkt adsorptie ook bij lage temperaturen</b> met
          weinig verlies. Bijkomend voordeel: de droge lucht kan via slangen precies naar een plek gebracht
          worden, zoals onder een zwevende vloer, achter een voorzetwand of in de isolatie. Dat maakt na
          waterschade vaak het verschil tussen drogen en uitbreken. Het nadeel: bij kamertemperatuur haalt
          een condensdroger doorgaans meer liter per kWh, en adsorptie vraagt een afvoer naar buiten.
        </p>

        <h2 style={{ marginTop: 40 }}>Welk toestel voor welke situatie?</h2>
        <div className="tbl">
          <table>
            <thead>
              <tr>
                <th scope="col">Situatie</th>
                <th scope="col">Beste keuze</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Chape of pleisterwerk in een verwarmde nieuwbouw</td>
                <td>Condensdroger, met ventilator</td>
              </tr>
              <tr>
                <td>Waterschade in een bewoonde, verwarmde woning</td>
                <td>Condensdroger, met ventilatoren</td>
              </tr>
              <tr>
                <td>Koude kelder of winterwerf, verwarmen kan</td>
                <td>Condensdroger met bouwkachel</td>
              </tr>
              <tr>
                <td>Koude ruimte waar u niet wil of kan verwarmen</td>
                <td>Adsorptiedroger</td>
              </tr>
              <tr>
                <td>Water onder een zwevende vloer, in een wand of in isolatie</td>
                <td>Adsorptiedroger via slangen</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Twijfelt u, bijvoorbeeld bij een kelder die half ingegraven en half verwarmd is? Dan is het
          meestal zinvol om eerst te meten wat de temperatuur en de luchtvochtigheid echt zijn. Onze{" "}
          <Link to="/klantservice">klantenservice</Link> denkt mee.
        </p>
      </div>
    </section>

    <section className="sw2">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">Uit ons gamma</span>
          <h2 className="sec">Deze toestellen kunt u bij ons huren</h2>
          <p className="lede">
            Dagprijzen exclusief btw, zoals ze op de toestelpagina's en in de boekingsmodule staan. Losse
            toestellen haalt u af in <Link to="/verhuur/afhalen">ons magazijn in Aartselaar</Link>; een
            volledig pakket met levering berekent u in de <Link to="/verhuur/calculator">droogcalculator</Link>.
          </p>
        </div>
        <div className={GAMMA.length === 4 ? "g4" : "g3"}>
          {GAMMA.map((t) => (
            <div className="kaart" key={t.key}>
              <h3>{t.name}</h3>
              <p>
                <b>{/adsorptie/i.test(t.type) ? "Adsorptie" : "Condensatie"}</b>
                {t.litersPerDay ? ` · tot ${t.litersPerDay} L per dag` : ""}
                {t.volume ? ` · ruimtes tot ${t.volume} m³` : ""}
              </p>
              <p className="prijs">
                {euro(t.perDay)} <small>per dag, excl. btw</small>
              </p>
              <p>{t.summary}</p>
              <Link className="meer" to={t.path}>
                Bekijk de {t.short}
              </Link>
            </div>
          ))}
        </div>
        <div className="note">
          Meer over de werking van bouwdroging in het algemeen leest u op{" "}
          <Link to="/hoe-drogen-werkt">hoe drogen werkt</Link>. Wat die toestellen aan stroom verbruiken,
          rekenen we voor in de gids <Link to="/gids/stroomverbruik-bouwdroger">stroomverbruik van een
          bouwdroger</Link>.
        </div>
      </div>
    </section>
  </GidsShell>
);

export default CondensAdsorptiePage;
