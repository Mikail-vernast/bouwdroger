const STEPS = [
  {
    title: "Online reserveren",
    body: "U kiest online uw toestel, of berekent eerst wat u nodig heeft. Zonder voorschot.",
  },
  {
    title: "Bevestiging en instructies",
    body: "U ontvangt snel een bevestiging met de praktische informatie rond levering en plaatsing.",
  },
  {
    title: "Levering en installatie",
    body: "Wij leveren, plaatsen en stellen het toestel correct op — inclusief condensafvoer en optimale positionering.",
  },
  {
    title: "Droogfase",
    body: "De toestellen doen hun werk. U volgt op, of laat ons weten wanneer de droogdoelstelling bereikt is.",
  },
  {
    title: "Ophaling of verlenging",
    body: "Wij halen de toestellen op volgens planning, of u verlengt met één klik indien nodig.",
  },
];

const V3Delivery = () => (
  <section className="dlv" id="levering" aria-labelledby="levering-heading">
    <div className="wrap dlv-grid">
      <div className="dlv-art">
        <img src="/design/delivery-art.png" alt="Vernast levering en installatie" />
      </div>

      <div>
        <div className="sec-head">
          <span className="kick">Zo werkt het</span>
          <h2 className="sec" id="levering-heading">
            Zo werkt huren bij Vernast.
          </h2>
          <p className="lede">
            Van online reserveren tot ophaling: u hoeft niets te sjouwen of in te stellen. Vernast
            neemt de volledige logistiek over.
          </p>
        </div>

        <div className="dtl" style={{ marginTop: 34 }}>
          {STEPS.map((step, index) => (
            <div className="ds" key={step.title}>
              <div className="dn">{index + 1}</div>
              <div>
                <h4>{step.title}</h4>
                <p>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default V3Delivery;
