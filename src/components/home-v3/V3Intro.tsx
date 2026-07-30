const FACTS = [
  {
    n: "1 500 L",
    title: "Water in een gemiddelde nieuwbouw",
    body: "Chape, pleister en beton brengen samen honderden tot duizenden liters vocht binnen die eruit moeten voor u afwerkt.",
  },
  {
    n: "48 u",
    title: "Voor schimmel begint te groeien",
    body: "Bij waterschade start schimmelvorming al na twee dagen. Snel starten met drogen is de goedkoopste ingreep die er is.",
  },
  {
    n: "≤ 2 %",
    title: "Restvocht voor u mag afwerken",
    body: "Vloerbekleding en verf vragen een droge ondergrond. Te vroeg afwerken betekent bladders, schimmel en opnieuw beginnen.",
  },
  {
    n: "60 %",
    title: "Tijdswinst met actieve droging",
    body: "Wat natuurlijk weken duurt, brengt een correct gedimensioneerd toestel terug tot een kwestie van dagen.",
  },
];

const V3Intro = () => (
  <section className="intro" aria-labelledby="intro-heading">
    <div className="wrap intro-grid">
      <div>
        <span className="kick">Natuurlijk vs actief drogen</span>
        <h2 className="sec" id="intro-heading">
          Natuurlijk of actief drogen? Het verschil is tijd, controle en zekerheid.
        </h2>
        <div className="intro-body" style={{ marginTop: 22 }}>
          <p>
            Natuurlijke droging kan in theorie werken, maar verloopt traag en onvoorspelbaar. Zeker
            bij nieuwbouw, renovatie, waterschade of vochtige afwerkingslagen blijft er dan{" "}
            <strong>te lang restvocht</strong> aanwezig — en begint de schade.
          </p>
          <p>
            Actieve bouwdroging versnelt dat proces: vocht wordt uit de lucht gehaald, de circulatie
            verbetert en het bouwvocht migreert sneller uit de materialen. Het resultaat:{" "}
            <strong>
              sneller afwerken, minder risico op schimmel en meer controle over uw timing
            </strong>
            .
          </p>
          <p>
            Vernast verhuurt niet alleen de toestellen. Wij berekenen vooraf welke capaciteit uw
            ruimte nodig heeft, leveren en installeren ter plaatse, en volgen op tot alles droog is —{" "}
            <strong>dagen in plaats van maanden</strong>.
          </p>
        </div>
      </div>

      <div className="factlist">
        {FACTS.map((fact) => (
          <div className="fact" key={fact.n}>
            <div className="fn">{fact.n}</div>
            <div>
              <h4>{fact.title}</h4>
              <p>{fact.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default V3Intro;
