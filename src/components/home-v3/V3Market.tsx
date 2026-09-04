const PILLARS = [
  {
    icon: "/vernast/icon-brain.webp",
    alt: "Hersenen: berekend in plaats van gegokt",
    title: "Geen overcapaciteit",
    body: "Een zware industriële droger in een rijwoning droogt niet sneller, hij verbruikt alleen meer. Onze calculatie dimensioneert het pakket exact op uw volume en droogdoel: wat u nodig heeft, niets meer.",
    foot: "Exact gedimensioneerd",
  },
  {
    icon: "/vernast/icon-leaf.webp",
    alt: "Groen blad: zuinig drogen, lager verbruik",
    title: "Zuinig voor u én het milieu",
    body: "Onze eco-toestellen halen meer liters vocht per kilowattuur, en doordat wij nooit overdimensioneren betaalt u minder stroom tijdens de volledige huurperiode. Duurzaam drogen is gewoon goedkoper drogen.",
    foot: "Lager verbruik, lagere factuur",
  },
  {
    icon: "/vernast/icon-shield.webp",
    alt: "Gouden schild: drooggarantie",
    title: "100% droog, gegarandeerd",
    body: "Omdat wij berekenen in plaats van gokken, durven wij beloven wat niemand anders belooft: uw pakket droogt uw woning binnen de berekende periode. Lukt dat niet, dan huurt u kosteloos verder.*",
    foot: "Of u huurt kosteloos verder",
  },
];

const V3Market = () => (
  <section className="mkt" id="duurzaam">
    <div className="wrap">
      <div className="sec-head">
        <span className="kick">Duurzaam &amp; berekend</span>
        <h2 className="sec">De markt zet toestellen. Wij zetten berekening.</h2>
        <p className="lede">
          In de sector worden vaak standaard zware drogers geplaatst, machines gedimensioneerd op
          grote volumes, terwijl de meeste woningen vandaag net compacter worden. Dat betekent
          onnodig verbruik, onnodige huur en onnodige belasting van het milieu. Wij draaien het om:
          eerst berekenen, dan pas plaatsen.
        </p>
      </div>
      <div className="mkt-grid">
        {PILLARS.map((pillar) => (
          <div className="mk" key={pillar.title}>
            <div className="mki">
              <img src={pillar.icon} alt={pillar.alt} loading="lazy" />
            </div>
            <h3>{pillar.title}</h3>
            <p>{pillar.body}</p>
            <div className="mkf">{pillar.foot}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default V3Market;
