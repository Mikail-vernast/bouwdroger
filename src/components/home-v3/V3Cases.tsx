import { Link } from "react-router-dom";
import { useCopy, useLokaalPad, type Copy } from "@/i18n/useTaal";
import { ArrowRightIcon } from "./icons";

interface CaseCard {
  id: string;
  image: string;
  alt: string;
  objectPosition?: string;
  tag: string;
  heading: string;
  body: string;
  cta: string;
}

const CASES_NL: CaseCard[] = [
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
    image: "/vernast/case-chape-v2.webp",
    alt: "Verse chape met grote natte plekken tijdens het drogen",
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
    image: "/vernast/case-waterschade-v3.webp",
    alt: "Waterschade vanaf het plafond met vochtstrepen op de muur",
    objectPosition: "50% 22%",
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

/* Zelfde volgorde, beelden en ankers als hierboven; alleen de tekst verschilt. */
const CASES_FR: CaseCard[] = [
  {
    id: "case-nieuwbouw",
    image: "/vernast/case-nieuwbouw.webp",
    alt: "Habitation neuve en cours de finition",
    tag: "Nouvelle construction",
    heading: "Avancer plus vite dans les finitions",
    body: "La chape, le plafonnage et le béton contiennent beaucoup d'humidité résiduelle. Un séchage actif permet de poursuivre plus vite avec les sols et la peinture.",
    cta: "En savoir plus sur la nouvelle construction",
  },
  {
    id: "case-chape",
    image: "/vernast/case-chape-v2.webp",
    alt: "Chape fraîche avec de grandes taches humides pendant le séchage",
    tag: "Sécher une chape",
    heading: "Sols et parquet posés à temps",
    body: "Si vous voulez poser vos sols plus tôt ou respecter le planning du chantier, un séchage contrôlé de la chape vous aide.",
    cta: "En savoir plus sur le séchage de chape",
  },
  {
    id: "case-keuken",
    image: "/vernast/case-keuken.webp",
    alt: "Pose d'une cuisine contre un mur sec",
    tag: "Pose de cuisine",
    heading: "Des murs secs avant l'arrivée de la cuisine",
    body: "Les cuisines sont souvent posées contre des murs insuffisamment secs, avec des dégâts aux armoires et aux plinthes pour conséquence.",
    cta: "En savoir plus sur la pose de cuisine",
  },
  {
    id: "case-waterschade",
    image: "/vernast/case-waterschade-v3.webp",
    alt: "Dégâts des eaux venant du plafond avec des traînées d'humidité sur le mur",
    objectPosition: "50% 22%",
    tag: "Dégâts des eaux",
    heading: "Sécher vite après une fuite ou une inondation",
    body: "En cas de dégâts des eaux, chaque jour compte : commencer à sécher dans les 48 heures évite les moisissures, les odeurs et les dégâts aux sols, aux murs et aux meubles. Nous livrons un pack de séchage intensif dans les 24 heures et vous accompagnons pour le dossier de votre assurance.",
    cta: "Calculez votre pack dégâts des eaux",
  },
  {
    id: "case-renovatie",
    image: "/vernast/case-renovatie.webp",
    alt: "Rénovation avec un plafonnage frais",
    tag: "Rénovation",
    heading: "Ne pas finir sur un support humide",
    body: "Après des travaux de plafonnage ou dans des pièces humides, le séchage évite que la peinture ou le papier peint soit posé trop tôt sur un support humide.",
    cta: "En savoir plus sur la rénovation",
  },
  {
    id: "case-kelder",
    image: "/vernast/case-kelder.webp",
    alt: "Cave avec des problèmes d'humidité",
    tag: "Caves et pièces froides",
    heading: "La bonne technique est ici essentielle",
    body: "Dans des pièces plus fraîches ou souterraines, le séchage par condensation est plus lent. Selon la situation, une autre approche ou un apport de chaleur est nécessaire.",
    cta: "En savoir plus sur les caves",
  },
];

const CASES_EN: CaseCard[] = [
  {
    id: "case-nieuwbouw",
    image: "/vernast/case-nieuwbouw.webp",
    alt: "New-build home being finished",
    tag: "New build",
    heading: "Move on to the finishing faster",
    body: "Screed, plaster and concrete hold a lot of residual moisture. Active drying helps you move on to flooring and painting sooner.",
    cta: "More about new builds",
  },
  {
    id: "case-chape",
    image: "/vernast/case-chape-v2.webp",
    alt: "Fresh screed with large wet patches while drying",
    tag: "Screed drying",
    heading: "Floors and parquet laid on time",
    body: "If you want to lay floors sooner or keep to the site schedule, controlled drying of the screed pays off.",
    cta: "More about screed drying",
  },
  {
    id: "case-keuken",
    image: "/vernast/case-keuken.webp",
    alt: "Kitchen being fitted against a dry wall",
    tag: "Kitchen fitting",
    heading: "Dry walls before the kitchen goes in",
    body: "Kitchens are often fitted against walls that are not dry enough, leading to damage to cabinets and skirting boards.",
    cta: "More about kitchen fitting",
  },
  {
    id: "case-waterschade",
    image: "/vernast/case-waterschade-v3.webp",
    alt: "Water damage from the ceiling with damp streaks on the wall",
    objectPosition: "50% 22%",
    tag: "Water damage",
    heading: "Dry fast after a leak or flood",
    body: "With water damage every day counts: starting to dry within 48 hours prevents mould, odours and damage to floors, walls and furniture. We deliver an intensive drying package within 24 hours and help you with the claim for your insurer.",
    cta: "Calculate your water damage package",
  },
  {
    id: "case-renovatie",
    image: "/vernast/case-renovatie.webp",
    alt: "Renovation with fresh plasterwork",
    tag: "Renovation",
    heading: "Do not finish on a damp surface",
    body: "After plastering or in damp rooms, drying prevents paint or wallpaper going onto a damp surface too early.",
    cta: "More about renovation",
  },
  {
    id: "case-kelder",
    image: "/vernast/case-kelder.webp",
    alt: "Cellar with damp problems",
    tag: "Cellars & cold rooms",
    heading: "The right technique is crucial here",
    body: "In cooler or underground rooms, condensation drying works more slowly. Depending on the situation, a different approach or extra heat is needed.",
    cta: "More about cellars",
  },
];

const COPY = {
  nl: {
    cases: CASES_NL,
    kick: "Voor welke situaties",
    h2: "Wanneer bouwdroging écht het verschil maakt.",
    schimmelAlt: "Vernast schimmelspecialist",
    schimmelKick: "Schimmel gezien?",
    schimmelH3: "Schimmel vraagt een totaal andere behandeling.",
    schimmelP:
      "Drogen alleen volstaat dan niet: de schimmel zelf moet behandeld en de sporen geneutraliseerd worden. Onze specialisten pakken de oorzaak aan en werken af met een professionele ozonbehandeling.",
    schimmelCta: "Ontdek de ozonbehandeling",
  },
  fr: {
    cases: CASES_FR,
    kick: "Pour quelles situations",
    h2: "Quand le séchage de chantier fait vraiment la différence.",
    schimmelAlt: "Spécialiste Vernast des moisissures",
    schimmelKick: "Des moisissures ?",
    schimmelH3: "Les moisissures demandent un tout autre traitement.",
    schimmelP:
      "Sécher seul ne suffit alors pas : la moisissure elle-même doit être traitée et les spores neutralisées. Nos spécialistes s'attaquent à la cause et terminent par un traitement professionnel à l'ozone.",
    schimmelCta: "Découvrir le traitement à l'ozone",
  },
  en: {
    cases: CASES_EN,
    kick: "Which situations",
    h2: "When building drying really makes the difference.",
    schimmelAlt: "Vernast mould specialist",
    schimmelKick: "Spotted mould?",
    schimmelH3: "Mould needs a completely different treatment.",
    schimmelP:
      "Drying alone is not enough then: the mould itself has to be treated and the spores neutralised. Our specialists tackle the cause and finish with a professional ozone treatment.",
    schimmelCta: "Discover the ozone treatment",
  },
} satisfies Copy<{
  cases: CaseCard[];
  kick: string;
  h2: string;
  schimmelAlt: string;
  schimmelKick: string;
  schimmelH3: string;
  schimmelP: string;
  schimmelCta: string;
}>;

const V3Cases = () => {
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  return (
  <section className="cases" id="toepassingen">
    <div className="wrap">
      <div className="sec-head">
        <span className="kick">{t.kick}</span>
        <h2 className="sec">{t.h2}</h2>
      </div>

      <div className="cgrid">
        {t.cases.map((item) => (
          <div className="cs" key={item.id}>
            <div className="csimg">
              {/* Alle case-foto's zijn vierkant (1200×1200); zie V3Pickup voor waarom dit erbij hoort. */}
              <img
                src={item.image}
                alt={item.alt}
                width={1200}
                height={1200}
                loading="lazy"
                style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
              />
            </div>
            <div className="csb">
              <div className="ct">{item.tag}</div>
              <h3>{item.heading}</h3>
              <p>{item.body}</p>
              <Link className="cgo" to={lp("/verhuur/simulator")}>
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
          alt={t.schimmelAlt}
          width={1440}
          height={961}
          loading="lazy"
        />
        <div className="sb-t">
          <span className="sb-k">{t.schimmelKick}</span>
          <h3>{t.schimmelH3}</h3>
          <p>{t.schimmelP}</p>
        </div>
        <Link className="btn btn-white" to={lp("/ozonbehandeling")}>
          {t.schimmelCta} <ArrowRightIcon size={13} strokeWidth={2.6} />
        </Link>
      </div>
    </div>
  </section>
  );
};

export default V3Cases;
