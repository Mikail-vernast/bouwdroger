import { Link } from "react-router-dom";
import { ArrowRightIcon } from "./icons";

interface CaseCard {
  id: string;
  image: string;
  alt: string;
  tag: string;
  heading: string;
  body: string;
  cta: string;
}

const CASES: CaseCard[] = [
  {
    id: "case-nieuwbouw",
    image: "/vernast/case-nieuwbouw.webp",
    alt: "Nieuwbouwwoning in afwerking",
    tag: "Nieuwbouw",
    heading: "Sneller verder met de afwerking",
    body: "Chape, pleisterwerk en beton bevatten veel restvocht. Actieve droging helpt om sneller verder te kunnen met vloeren en schilderwerk.",
    cta: "Meer over nieuwbouw",
  },
  {
    id: "case-chape",
    image: "/vernast/case-chape.webp",
    alt: "Chape drogen met een bouwdroger",
    tag: "Chape drogen",
    heading: "Vloeren en parket op tijd geplaatst",
    body: "Wie sneller wil vloeren of de werfplanning wil respecteren, heeft baat bij gecontroleerde droging van de chape.",
    cta: "Meer over chape drogen",
  },
  {
    id: "case-keuken",
    image: "/vernast/case-keuken.webp",
    alt: "Keukenplaatsing tegen een droge muur",
    tag: "Keukenplaatsing",
    heading: "Droge muren vóór de keuken komt",
    body: "Keukens worden vaak geplaatst tegen muren die onvoldoende droog zijn, met schade aan kasten en plinten tot gevolg.",
    cta: "Meer over keukenplaatsing",
  },
  {
    id: "case-waterschade",
    image: "/vernast/case-waterschade.webp",
    alt: "Waterschade in een woning",
    tag: "Waterschade",
    heading: "Snel drogen na een lek of overstroming",
    body: "Bij waterschade telt elke dag: binnen 48 uur starten met drogen voorkomt schimmel, geurhinder en schade aan vloeren, muren en meubels. Wij leveren binnen 24 uur een intensief droogpakket en begeleiden u bij het dossier voor uw verzekering.",
    cta: "Bereken uw waterschadepakket",
  },
  {
    id: "case-renovatie",
    image: "/vernast/case-renovatie.webp",
    alt: "Renovatie met vers pleisterwerk",
    tag: "Renovatie",
    heading: "Niet afwerken op een natte ondergrond",
    body: "Na pleisterwerken of vochtige ruimtes voorkomt droging dat verf of behang te vroeg op een vochtige ondergrond komt.",
    cta: "Meer over renovatie",
  },
  {
    id: "case-kelder",
    image: "/vernast/case-kelder.webp",
    alt: "Kelder met vochtproblemen",
    tag: "Kelders & koude ruimtes",
    heading: "De juiste techniek is hier cruciaal",
    body: "In koelere of ondergrondse ruimtes werkt condensdroging trager. Afhankelijk van de situatie is een andere aanpak of extra warmte nodig.",
    cta: "Meer over kelders",
  },
];

const V3Cases = () => (
  <section className="cases" id="toepassingen">
    <div className="wrap">
      <div className="sec-head">
        <span className="kick">Voor welke situaties</span>
        <h2 className="sec">Wanneer bouwdroging écht het verschil maakt.</h2>
      </div>

      <div className="cgrid">
        {CASES.map((item) => (
          <div className="cs" key={item.id}>
            <div className="csimg">
              <img src={item.image} alt={item.alt} loading="lazy" />
            </div>
            <div className="csb">
              <div className="ct">{item.tag}</div>
              <h3>{item.heading}</h3>
              <p>{item.body}</p>
              <Link className="cgo" to="/verhuur/calculator">
                {item.cta} <ArrowRightIcon size={13} strokeWidth={2.6} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="schimmelbar">
        <img
          className="sb-man"
          src="/vernast/man-schimmelpak.webp"
          alt="Vernast schimmelspecialist"
          loading="lazy"
        />
        <div className="sb-t">
          <span className="sb-k">Schimmel gezien?</span>
          <h3>Schimmel vraagt een totaal andere behandeling.</h3>
          <p>
            Drogen alleen volstaat dan niet: de schimmel zelf moet behandeld en de sporen
            geneutraliseerd worden. Onze specialisten pakken de oorzaak aan en werken af met een
            professionele ozonbehandeling.
          </p>
        </div>
        <a className="btn btn-white" href="#ozon">
          Ontdek de ozonbehandeling <ArrowRightIcon size={13} strokeWidth={2.6} />
        </a>
      </div>
    </div>
  </section>
);

export default V3Cases;
