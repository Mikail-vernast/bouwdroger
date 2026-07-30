const STEPS = [
  {
    n: "01",
    title: "Aanzuigen",
    body: "Een krachtige ventilator trekt de vochtige binnenlucht door het toestel.",
  },
  {
    n: "02",
    title: "Vocht onttrekken",
    body: "De lucht koelt af onder het dauwpunt, waardoor het vocht condenseert tot water.",
  },
  {
    n: "03",
    title: "Afvoeren",
    body: "Het onttrokken water gaat naar een reservoir of rechtstreeks via een slang naar de afvoer.",
  },
  {
    n: "04",
    title: "Droge lucht terug",
    body: "De drogere lucht gaat de ruimte in en neemt opnieuw vocht op uit muur en vloer.",
  },
  {
    n: "05",
    title: "Herhalen tot droog",
    body: "Het proces loopt continu door tot de ruimte het gewenste droogstadium bereikt.",
  },
];

const COMPARISON: [string, string, string][] = [
  [
    "Beste keuze voor",
    "Nieuwbouw, pleisterwerk, chape, standaard renovaties en verwarmde binnenruimtes",
    "Koudere ruimtes, gerichte droging onder vloeren of in wanden, moeilijk bereikbare zones",
  ],
  [
    "Werkingsprincipe",
    "Koelt lucht af onder het dauwpunt; vocht condenseert tot water",
    "Voert lucht langs een droogwiel dat het vocht absorbeert",
  ],
  ["Temperatuur", "Best bij 15 – 30 °C", "Werkt ook bij lage temperaturen"],
  [
    "Luchtvochtigheid",
    "Verlaagt de RV effectief in normale omstandigheden",
    "Kan zeer lage RV-waarden bereiken, ook in koudere omstandigheden",
  ],
  [
    "Sterktes",
    "Energie-efficiënt, breed inzetbaar, ideaal voor klassieke bouwdroging",
    "Gerichte droging via slangen, ook waar condensdroging minder efficiënt werkt",
  ],
  ["Ons gamma", "ECO Boost · ECO Performance · ECO Ultimate", "ECO Revolution"],
];

const V3Technique = () => (
  <section className="tech" id="techniek" aria-labelledby="techniek-heading">
    <div className="wrap">
      <div className="sec-head">
        <span className="kick">De techniek</span>
        <h2 className="sec" id="techniek-heading">
          Hoe een bouwdroger werkt.
        </h2>
        <p className="lede">
          Een bouwdroger droogt niet "de muur rechtstreeks", maar verlaagt de luchtvochtigheid in de
          ruimte. Daardoor ontstaat een vochtverschil waardoor vocht uit muren, vloeren, chape en
          pleisterwerk sneller vrijkomt — een continu proces in vijf stappen.
        </p>
      </div>

      <div className="tflow">
        {STEPS.map((step) => (
          <div className="tf" key={step.n}>
            <div className="tn">{step.n}</div>
            <h4>{step.title}</h4>
            <p>{step.body}</p>
          </div>
        ))}
      </div>

      <div className="sec-head" style={{ marginBottom: 28 }}>
        <h2 className="sec" style={{ fontSize: "clamp(22px, 2.4vw, 30px)" }}>
          Luchtontvochtiger of adsorptiedroger?
        </h2>
        <p className="lede">
          Veel klanten kennen het verschil niet — terwijl het net bepaalt of uw droging slaagt.
        </p>
      </div>

      <div className="ctable">
        <table>
          <thead>
            <tr>
              <th>Eigenschap</th>
              <th className="col-a">
                Condensontvochtiger <span className="pill">Meest gebruikt</span>
              </th>
              <th>Adsorptiedroger</th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON.map(([property, condens, adsorption]) => (
              <tr key={property}>
                <td>{property}</td>
                <td className="col-a">{condens}</td>
                <td>{adsorption}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default V3Technique;
