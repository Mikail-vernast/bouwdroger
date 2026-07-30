import { Link } from "react-router-dom";

const CASES = [
  {
    tag: "Nieuwbouw",
    title: "Sneller verder met de afwerking",
    body: "Chape, pleisterwerk en beton bevatten veel restvocht. Actieve droging helpt om sneller verder te kunnen met vloeren en schilderwerk.",
    advice: "ECO Performance",
  },
  {
    tag: "Chape drogen",
    title: "Vloeren en parket op tijd geplaatst",
    body: "Wie sneller wil vloeren of de werfplanning wil respecteren, heeft baat bij gecontroleerde droging van de chape.",
    advice: "ECO Performance + radiaal",
  },
  {
    tag: "Keukenplaatsing",
    title: "Droge muren vóór de keuken komt",
    body: "Keukens worden vaak geplaatst tegen muren die onvoldoende droog zijn — met schade aan kasten en plinten tot gevolg. Een droge ondergrond is essentieel.",
    advice: "ECO Boost",
  },
  {
    tag: "Waterschade",
    title: "Na een lek of overstroming",
    body: "Elke dag telt. Snel starten met drogen vermindert het risico op schimmel, geurhinder en vervolgschade.",
    advice: "ECO Ultimate + ventilator",
  },
  {
    tag: "Renovatie",
    title: "Niet afwerken op een natte ondergrond",
    body: "Na pleisterwerken of vochtige ruimtes voorkomt droging dat verf of behang te vroeg op een vochtige ondergrond komt.",
    advice: "ECO Boost",
  },
  {
    tag: "Schimmelgevoelig",
    title: "Vochtige omstandigheden terugdringen",
    body: "Gecontroleerde droging dringt de omstandigheden die schimmelgroei stimuleren sneller terug — naast het aanpakken van de oorzaak.",
    advice: "ECO Performance",
  },
  {
    tag: "Kelders & koude ruimtes",
    title: "De juiste techniek is hier cruciaal",
    body: "In koelere of ondergrondse ruimtes werkt condensdroging trager. Afhankelijk van de situatie is een andere aanpak of extra warmte nodig.",
    advice: "ECO Revolution / + kachel",
  },
];

const V3Cases = () => (
  <section className="cases" id="toepassingen" aria-labelledby="cases-heading">
    <div className="wrap">
      <div className="sec-head">
        <span className="kick">Voor welke situaties</span>
        <h2 className="sec" id="cases-heading">
          Wanneer bouwdroging écht het verschil maakt.
        </h2>
      </div>

      <div className="cgrid">
        {CASES.map((item) => (
          <div className="cs" key={item.tag}>
            <div className="ct">{item.tag}</div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <div className="cm">
              <span>Aanbevolen</span>
              <b>{item.advice}</b>
            </div>
          </div>
        ))}

        <div className="cs ctac">
          <div className="ct" style={{ color: "rgba(255,255,255,.75)" }}>
            Uw situatie
          </div>
          <h3>Twijfelt u wat u nodig heeft?</h3>
          <p>De calculator bepaalt het in vijf vragen — met meteen de prijs erbij.</p>
          <Link className="btn btn-white" to="/calculator" style={{ marginTop: 4 }}>
            Bereken mijn situatie
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default V3Cases;
