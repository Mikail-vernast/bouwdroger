import { Link } from "react-router-dom";
import GidsShell, { type GidsFaq } from "@/components/gids/GidsShell";
import { SEO } from "@/data/seo";
import { DROGERS, euro, priceForWeeks } from "@/data/tarieflijst";
import { REGIO_ROUTES } from "@/data/regio-slugs";
import { CONTACT } from "@/lib/site";
import { offerCatalogSchema } from "@/lib/schema";

const PATH = "/luchtontvochtiger-huren";

/*
  Alle bedragen en capaciteiten komen uit DROGERS (tarieflijst.ts), dat zelf
  uit PRODUCTS en dus uit het portaal leest. Deze pagina bestaat voor een
  ander woord ("luchtontvochtiger", "ontvochtiger huren"), niet voor andere
  prijzen: wat hier staat, is per definitie wat /prijzen en de toestelpagina's
  zeggen.
*/
const VANAF = DROGERS.length ? Math.min(...DROGERS.map((t) => t.perDay)) : null;
const LITERS = DROGERS.map((t) => t.litersPerDay).filter(Boolean);
const LITERS_MIN = LITERS.length ? Math.min(...LITERS) : null;
const LITERS_MAX = LITERS.length ? Math.max(...LITERS) : null;
const GOEDKOOPSTE = DROGERS.find((t) => t.perDay === VANAF);

const FAQ: GidsFaq[] = [
  ...(GOEDKOOPSTE
    ? [
        {
          question: "Wat kost een ontvochtiger huren?",
          answer: `Onze luchtontvochtigers huurt u vanaf ${euro(GOEDKOOPSTE.perDay)} per dag exclusief btw, voor de ${GOEDKOOPSTE.short}. Een week kost daarmee ${euro(priceForWeeks(GOEDKOOPSTE, 1))} exclusief btw. De grotere modellen en alle huurperiodes staan op onze prijspagina.`,
        },
      ]
    : []),
  {
    question: "Is een luchtontvochtiger hetzelfde als een bouwdroger?",
    answer:
      "Een bouwdroger is een professionele luchtontvochtiger: hetzelfde principe, maar met veel meer capaciteit en gebouwd om dag en nacht te draaien op een werf. Onze toestellen zijn condensontvochtigers.",
  },
  {
    question: "Welke luchtontvochtiger heb ik nodig voor mijn kelder?",
    answer:
      "Dat hangt af van het volume van de kelder en hoe nat hij is. Kijk naar het bereik in m³ van elk toestel, of laat de calculator het uitrekenen. Is de kelder kouder dan ongeveer 15 °C, zet er dan een bouwkachel bij: in de koude verliest een condensontvochtiger veel rendement.",
  },
  {
    question: "Kan ik een luchtontvochtiger zelf ophalen?",
    answer: `Ja. Losse toestellen haalt u af in ons magazijn aan de ${CONTACT.street} in ${CONTACT.city}, op werkdagen van 08:00 tot 17:00. Liever geleverd en geplaatst? Kies dan een droogpakket met levering en installatie.`,
  },
];

const LuchtontvochtigerHurenPage = () => (
  <GidsShell
    seo={SEO.luchtontvochtigerHuren}
    path={PATH}
    crumbs={[
      { name: "Home", path: "/" },
      { name: "Luchtontvochtiger huren", path: PATH },
    ]}
    kick="Verhuur · luchtontvochtigers"
    h1="Luchtontvochtiger huren voor kelder, waterschade en nieuwbouw"
    intro={
      <p>
        Een vochtige kelder, een lek dat de vloer onder water zette of een nieuwbouw vol natte chape: een
        professionele luchtontvochtiger haalt het vocht eruit, dag en nacht.
        {LITERS_MIN && LITERS_MAX ? ` Onze condensontvochtigers verwijderen ${LITERS_MIN} tot ${LITERS_MAX} liter water per dag` : ""}
        {VANAF !== null ? `, te huur vanaf ${euro(VANAF)} per dag exclusief btw.` : "."} Zelf afhalen of laten
        leveren en installeren, in heel Vlaanderen.
      </p>
    }
    heroImg={{ src: "/vernast/eco-performance.webp", alt: "Vernast ECO Performance condensontvochtiger" }}
    faq={FAQ}
    jsonLd={[
      offerCatalogSchema(
        "Luchtontvochtigers te huur",
        DROGERS.map((t) => ({
          name: t.name,
          description: t.summary,
          path: t.path,
          pricePerDay: t.perDay,
        })),
      ),
    ]}
  >
    <section className="sw">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">Ons gamma</span>
          <h2 className="sec">Welke luchtontvochtiger huurt u?</h2>
          <p className="lede">
            Drie condensontvochtigers, van een appartement tot een grote werf. De capaciteit is het maximum
            in liter per 24 uur uit de technische fiche; het bereik is het ruimtevolume waarvoor het toestel
            bedoeld is. Alle prijzen exclusief btw.
          </p>
        </div>
        <div className="g3">
          {DROGERS.map((t) => (
            <div className="kaart" key={t.key}>
              {t.badge ? <span className="kick">{t.badge}</span> : null}
              <h3>{t.name}</h3>
              <p>
                Tot <b>{t.litersPerDay} liter per dag</b> · ruimtes tot <b>{t.volume} m³</b>
              </p>
              <p className="prijs">
                {euro(t.perDay)} <small>per dag · {euro(priceForWeeks(t, 1))} per week</small>
              </p>
              <p>{t.summary}</p>
              <Link className="meer" to={t.path}>
                Bekijk de {t.short}
              </Link>
            </div>
          ))}
        </div>
        <div className="note">
          <b>Niet zeker welk formaat?</b> De <Link to="/calculator">capaciteitscalculator</Link> rekent uit
          hoeveel liter per dag uw ruimte nodig heeft. Wil u meteen een volledig pakket met ventilatoren en
          levering, gebruik dan de <Link to="/verhuur/calculator">droogcalculator</Link>. Alle bedragen per
          periode staan op <Link to="/prijzen">onze prijspagina</Link>.
        </div>
      </div>
    </section>

    <section className="sw2">
      <div className="wrap prose">
        <h2>Waarvoor huurt u een luchtontvochtiger?</h2>

        <h3>Een vochtige kelder</h3>
        <p>
          Kelders zijn koel en vaak slecht verlucht, waardoor de luchtvochtigheid hoog blijft en er een
          muffe geur of schimmel ontstaat. Een luchtontvochtiger haalt die vochtige lucht omlaag. Let op
          de temperatuur: onder ongeveer 15 °C werkt een condensontvochtiger duidelijk minder goed. In een
          koude kelder zetten we daarom een <Link to="/verhuur/toestel/teddh20">elektrische bouwkachel</Link>{" "}
          bij. Meer over kelders en schimmel leest u op <Link to="/renovatie">vochtige kelder of
          schimmel drogen</Link>. Blijft een kelder telkens opnieuw nat, dan zit de oorzaak meestal in de
          muren zelf; ontvochtigen verhelpt dan het gevolg, niet de bron.
        </p>

        <h3>Na waterschade</h3>
        <p>
          Na een lek of overstroming telt elke dag. Hoe langer vloeren, muren en isolatie nat blijven, hoe
          groter de kans op schimmel en blijvende schade. Een luchtontvochtiger samen met één of meer
          ventilatoren droogt het snelst: de ventilator maakt het vocht los van de oppervlakken, de
          ontvochtiger haalt het uit de lucht. Zit het water onder een zwevende vloer of in een wand, lees
          dan <Link to="/gids/condensdroger-of-adsorptiedroger">condensdroger of adsorptiedroger</Link>.
          Alles over de aanpak staat op <Link to="/waterschade">drogen na waterschade</Link>.
        </p>

        <h3>Nieuwbouw en renovatie</h3>
        <p>
          Chape en pleisterwerk brengen honderden liters water in een woning. Zonder ontvochtiging droogt
          dat traag en kan de vloerlegger of schilder niet starten. Hoe lang dat duurt per dikte, staat in{" "}
          <Link to="/gids/hoe-lang-moet-chape-drogen">hoe lang moet chape drogen</Link>; wat we op de werf
          doen, leest u op <Link to="/nieuwbouw">chape en pleisterwerk drogen</Link>.
        </p>

        <h2 style={{ marginTop: 40 }}>Professioneel of huishoudelijk?</h2>
        <p>
          Een luchtontvochtiger uit de winkel is gemaakt voor een slaapkamer of een wasplaats en haalt
          doorgaans maar een fractie op van wat een bouwdroger per dag verwijdert. Voor een kelder die echt
          nat is, voor waterschade of voor een nieuwbouw loopt zo'n toestel achter de feiten aan. Een
          professionele condensontvochtiger draait continu, voert het water af via een slang of condenspomp
          en is gemaakt voor weken aan een stuk. Wat hij aan stroom verbruikt, rekenen we voor in{" "}
          <Link to="/gids/stroomverbruik-bouwdroger">stroomverbruik van een bouwdroger</Link>.
        </p>

        <h2 style={{ marginTop: 40 }}>Zelf afhalen of laten leveren</h2>
        <ul>
          <li>
            <b>Zelf afhalen.</b> Losse toestellen reserveert u online en haalt u op in ons magazijn in{" "}
            {CONTACT.city}. Zie <Link to="/verhuur/afhalen">losse toestellen huren en afhalen</Link>.
          </li>
          <li>
            <b>Laten leveren en installeren.</b> Kiest u een droogpakket, dan brengen onze techniekers de
            toestellen binnen 24 uur, plaatsen ze ze, meten ze het vocht voor en na en halen ze alles weer
            op. Zie <Link to="/levering">levering en installatie</Link>.
          </li>
        </ul>

        <h2 style={{ marginTop: 40 }}>Luchtontvochtiger huren in uw provincie</h2>
        <p>
          We leveren in heel Vlaanderen. Per provincie:{" "}
          {REGIO_ROUTES.map((r, i) => (
            <span key={r.path}>
              <Link to={r.path}>bouwdroger huren in {r.name}</Link>
              {i < REGIO_ROUTES.length - 2 ? ", " : i === REGIO_ROUTES.length - 2 ? " en " : "."}
            </span>
          ))}
        </p>
      </div>
    </section>
  </GidsShell>
);

export default LuchtontvochtigerHurenPage;
