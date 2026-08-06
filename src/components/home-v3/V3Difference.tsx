const POINTS = [
  {
    n: "01",
    title: "Slimme droogcalculator",
    body: "Berekent op basis van volume, situatie en toepassing welke droogoplossing nodig is. Zo vermijdt u onder- én overcapaciteit.",
  },
  {
    n: "02",
    title: "All-in prijs zonder verrassingen",
    body: "Levering, ophaling, installatie op gelijkvloers en standaard toebehoren zoals verlengkabels zijn inbegrepen.",
  },
  {
    n: "03",
    title: "Afgestemd gamma",
    body: "Geen overgedimensioneerde toestellen, maar eco-bouwdrogers afgestemd op uw ruimte: nieuwbouw, renovatie, waterschade of koude ruimtes.",
  },
  {
    n: "04",
    title: "Praktische opvolging",
    body: "U boekt online, ontvangt snel bevestiging en duidelijke instructies, en wij plaatsen de toestellen correct op locatie.",
  },
  {
    n: "05",
    title: "Flexibel verlengen",
    body: "Niet op tijd droog? Met een beperkte verlengoptie loopt uw planning niet vast en houdt u uw project onder controle.",
  },
];

const V3Difference = () => (
  <section
    className="dif"
    id="anders"
    style={{ background: "url('/vernast/bg-anders.webp') center / cover no-repeat" }}
  >
    <div className="wrap">
      <div className="sec-head">
        <span className="kick">Waarom Vernast anders is</span>
        <h2 className="sec">Waarom klanten niet meer willen gokken op bouwdroging.</h2>
        <p className="lede">
          In bouwdroging gaat het vaak fout op drie punten: het verkeerde toestel, een fout
          ingeschatte huurtermijn en onverwachte extra kosten. Vernast pakt net die pijnpunten aan:
          berekenen, correct dimensioneren, professioneel plaatsen en helder communiceren.
        </p>
      </div>
      <div className="dif-grid">
        {POINTS.map((point) => (
          <div className="df" key={point.n}>
            <div className="dn2">{point.n}</div>
            <h3>{point.title}</h3>
            <p>{point.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default V3Difference;
