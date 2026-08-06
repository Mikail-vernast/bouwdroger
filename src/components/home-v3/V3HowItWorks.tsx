import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";

/**
 * "Zo werkt het" — five tabs that advance on their own until the visitor
 * clicks one. From then on the rail is manual (the design drops the running
 * progress bars by adding `.manual`).
 */
const AUTOPLAY_MS = 5200;

/** The mock card the design draws next to every step. */
const mockCard = (children: ReactNode) => (
  <div
    style={{
      background: "#fff",
      borderRadius: 12,
      padding: 22,
      width: "100%",
      maxWidth: 340,
      boxShadow: "0 14px 30px -18px rgba(0,0,0,.25)",
    }}
  >
    {children}
  </div>
);

const Step = ({ tone, title, sub }: { tone: string; title: string; sub: string }) => (
  <div className={`mstep ${tone}`}>
    <i>✓</i>
    <div>
      <b>{title}</b>
      <small>{sub}</small>
    </div>
  </div>
);

interface HiwStep {
  step: string;
  tab: string;
  heading: string;
  body: string;
  linkLabel: string;
  linkTo: string;
  /** Anchor links stay on the page; everything else routes. */
  anchor?: boolean;
  mock: ReactNode;
}

const STEPS: HiwStep[] = [
  {
    step: "Stap 01",
    tab: "Bereken uw pakket",
    heading: "U berekent, wij dimensioneren.",
    body: "Geef uw oppervlakte, plafondhoogte en situatie in. De calculator berekent uw volume en stelt het exacte pakket samen: toestellen, droogtijd en één all-in prijs.",
    linkLabel: "Start de calculator →",
    linkTo: "/verhuur/calculator",
    mock: mockCard(
      <>
        <span className="mlab">Uw droogplan</span>
        <div className="mrow">
          <span className="mlab">Woonoppervlakte</span>
          <span className="mval">
            120 <small>m²</small>
          </span>
        </div>
        <div className="mslider">
          <b />
        </div>
        <div className="mrow" style={{ marginTop: 14 }}>
          <span className="mlab">Alles-in pakket</span>
          <span className="mval">
            € 352 <small>/ 2 wkn</small>
          </span>
        </div>
        <div className="mbtn">Stel mijn pakket samen</div>
      </>,
    ),
  },
  {
    step: "Stap 02",
    tab: "Boek & betaal online",
    heading: "Boeken, betalen en inplannen in één flow.",
    body: "U kiest uw leverdatum en installatiemoment, betaalt veilig online en ontvangt meteen uw bevestiging. Geen offertes, geen telefoontjes nodig.",
    linkLabel: "Bekijk hoe het boeken werkt →",
    linkTo: "/verhuur/calculator",
    mock: mockCard(
      <>
        <Step tone="s1" title="Pakket gekozen" sub="6 toestellen · 12 dagen" />
        <Step tone="s2" title="Online betaald" sub="Bancontact · € 352" />
        <Step tone="s3" title="Installatie ingepland" sub="Morgen, 09:00–11:00" />
      </>,
    ),
  },
  {
    step: "Stap 03",
    tab: "Levering & installatie",
    heading: "Wij leveren, plaatsen en stellen af.",
    body: "Binnen 24 uur geleverd. Onze technicus positioneert de toestellen, sluit de condensafvoer aan en stelt de streefvochtigheid in. U hoeft niets te tillen.",
    linkLabel: "Alles over levering →",
    linkTo: "/verhuur/calculator",
    mock: mockCard(
      <>
        <Step tone="s1" title="Geleverd binnen 24 u" sub="Track & trace tot aan uw deur" />
        <Step tone="s2" title="Geplaatst & afgesteld" sub="Incl. condensafvoer, geen kuip" />
        <Step tone="s3" title="Uitleg ter plaatse" sub="Kort en duidelijk" />
      </>,
    ),
  },
  {
    step: "Stap 04",
    tab: "Droogfase",
    heading: "De toestellen doen het werk.",
    body: "Het vocht wordt continu uit de lucht gehaald en rechtstreeks weggepompt. U volgt de droging op, en binnenkort ook digitaal via monitoring op alle toestellen.",
    linkLabel: "Hoe de techniek werkt →",
    linkTo: "#natuurlijk-actief",
    anchor: true,
    mock: mockCard(
      <>
        <div className="mrow">
          <span className="mlab">Luchtvochtigheid</span>
          <span className="mval">
            42 <small>%</small>
          </span>
        </div>
        <div className="mslider">
          <b />
        </div>
        <div className="mstep s2" style={{ marginTop: 14 }}>
          <i>✓</i>
          <div>
            <b>Op schema</b>
            <small>Nog ± 4 dagen tot droog</small>
          </div>
        </div>
      </>,
    ),
  },
  {
    step: "Stap 05",
    tab: "Ophaling of verlenging",
    heading: "Droog gemeten? Wij halen alles op.",
    body: "De eindmeting bevestigt dat uw woning 100% droog is. Wij plannen de ophaling, u ontvangt de factuur pas na de huurperiode. Niet droog? Dan verlengt u maximaal kosteloos.",
    linkLabel: "Bereken uw pakket →",
    linkTo: "/verhuur/calculator",
    mock: mockCard(
      <>
        <Step tone="s1" title="Eindmeting: droog" sub="Restvocht ≤ 2%" />
        <Step tone="s2" title="Ophaling ingepland" sub="Vrijdag, 13:00–15:00" />
        <Step tone="s3" title="Factuur na huurperiode" sub="Geen voorschot betaald" />
      </>,
    ),
  },
];

const V3HowItWorks = () => {
  const [current, setCurrent] = useState(0);
  const [manual, setManual] = useState(false);

  useEffect(() => {
    if (manual) return;
    const timer = setInterval(() => setCurrent((i) => (i + 1) % STEPS.length), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [manual]);

  return (
    <section className="hiw" id="werkwijze">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">Zo werkt het</span>
          <h2 className="sec">Van berekening tot droge woning, in vijf stappen.</h2>
          <p className="lede">
            Volledig digitaal: bereken, boek, betaal en plan de installatie online. Klik door de
            stappen of kijk gewoon mee.
          </p>
        </div>

        <div className={`hiw-tabs${manual ? " manual" : ""}`} id="hiwTabs">
          {STEPS.map((step, i) => (
            <button
              key={step.step}
              type="button"
              className={i === current ? "active" : undefined}
              onClick={() => {
                setManual(true);
                setCurrent(i);
              }}
            >
              <i>{step.step}</i>
              {step.tab}
              <span className="tbar">
                <b />
              </span>
            </button>
          ))}
        </div>

        <div className="hiw-stage" id="hiwStage">
          {STEPS.map((step, i) => (
            <div className={`hiw-p${i === current ? " active" : ""}`} key={step.step}>
              <div className="hp-txt">
                <h3>{step.heading}</h3>
                <p>{step.body}</p>
                {step.anchor ? (
                  <a href={step.linkTo}>{step.linkLabel}</a>
                ) : (
                  <Link to={step.linkTo}>{step.linkLabel}</Link>
                )}
              </div>
              <div className="hp-mock">{step.mock}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default V3HowItWorks;
