import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { useCopy, useLokaalPad, type Copy } from "@/i18n/useTaal";

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

/** De teksten in de mock-kaartjes, per taal; de opmaak blijft één keer staan. */
interface MockCopy {
  plan: string;
  opp: string;
  pakket: string;
  bedrag: ReactNode;
  wkn: string;
  knop: string;
  stap2: [string, string][];
  stap3: [string, string][];
  vocht: string;
  schema: string;
  nog: string;
  stap5: [string, string][];
}

type StepText = Omit<HiwStep, "mock">;

interface HiwCopy {
  kick: string;
  h2: string;
  lede: string;
  steps: StepText[];
  mock: MockCopy;
}

const COPY = {
  nl: {
    kick: "Zo werkt het",
    h2: "Van berekening tot droge woning, in vijf stappen.",
    lede: "Volledig digitaal: bereken, boek, betaal en plan de installatie online. Klik door de stappen of kijk gewoon mee.",
    steps: [
      {
        step: "Stap 01",
        tab: "Bereken uw pakket",
        heading: "U berekent, wij dimensioneren.",
        body: "Geef uw oppervlakte, plafondhoogte en situatie in. De Calculator berekent uw volume en stelt het exacte pakket samen: toestellen, droogtijd en één all-in prijs.",
        linkLabel: "Start de Calculator →",
        linkTo: "/verhuur/calculator",
      },
      {
        step: "Stap 02",
        tab: "Boek & betaal online",
        heading: "Boeken, betalen en inplannen in één flow.",
        body: "U kiest uw leverdatum en installatiemoment, betaalt veilig online en ontvangt meteen uw bevestiging. Geen offertes, geen telefoontjes nodig.",
        linkLabel: "Bekijk hoe het boeken werkt →",
        linkTo: "/verhuur/calculator",
      },
      {
        step: "Stap 03",
        tab: "Levering & installatie",
        heading: "Wij leveren, plaatsen en stellen af.",
        body: "Geleverd op uw gekozen datum. Onze technicus positioneert de toestellen, sluit de condensafvoer aan en stelt de streefvochtigheid in. U hoeft niets te tillen.",
        linkLabel: "Alles over levering →",
        linkTo: "/verhuur/calculator",
      },
      {
        step: "Stap 04",
        tab: "Droogfase",
        heading: "De toestellen doen het werk.",
        body: "Het vocht wordt continu uit de lucht gehaald en rechtstreeks weggepompt. U volgt de droging op, en binnenkort ook digitaal via monitoring op alle toestellen.",
        linkLabel: "Hoe de techniek werkt →",
        linkTo: "#natuurlijk-actief",
        anchor: true,
      },
      {
        step: "Stap 05",
        tab: "Ophaling of verlenging",
        heading: "Droog gemeten? Wij halen alles op.",
        body: "De eindmeting bevestigt dat uw woning 100% droog is. Wij plannen de ophaling en sluiten de huur af. Niet droog? Dan verlengt u maximaal kosteloos.",
        linkLabel: "Gratis Calculator →",
        linkTo: "/verhuur/calculator",
      },
    ],
    mock: {
      plan: "Uw droogplan",
      opp: "Woonoppervlakte",
      pakket: "Alles-in pakket",
      bedrag: "€ 352",
      wkn: "/ 2 wkn",
      knop: "Stel mijn pakket samen",
      stap2: [
        ["Pakket gekozen", "6 toestellen · 12 dagen"],
        ["Online betaald", "Bancontact · € 352"],
        ["Installatie ingepland", "Morgen, 09:00–11:00"],
      ],
      stap3: [
        ["Geleverd op uw datum", "Track & trace tot aan uw deur"],
        ["Geplaatst & afgesteld", "Incl. condensafvoer, geen kuip"],
        ["Uitleg ter plaatse", "Kort en duidelijk"],
      ],
      vocht: "Luchtvochtigheid",
      schema: "Op schema",
      nog: "Nog ± 4 dagen tot droog",
      /* "Geen voorschot betaald" beloofde iets wat de boekingspagina niet
         waarmaakt: daar kiest de klant tussen alles vooraf en een vaste
         orderbevestiging met saldo bij levering. */
      stap5: [
        ["Eindmeting: droog", "Restvocht ≤ 2%"],
        ["Ophaling ingepland", "Vrijdag, 13:00–15:00"],
        ["Factuur na volledige betaling", "Geen verrassingen achteraf"],
      ],
    },
  },
  fr: {
    kick: "Comment ça marche",
    h2: "Du calcul à une habitation sèche, en cinq étapes.",
    lede: "Entièrement numérique : calculez, réservez, payez et planifiez l'installation en ligne. Parcourez les étapes ou regardez simplement.",
    steps: [
      {
        step: "Étape 01",
        tab: "Calculez votre pack",
        heading: "Vous calculez, nous dimensionnons.",
        body: "Indiquez votre surface, la hauteur sous plafond et votre situation. Le calculateur détermine votre volume et compose le pack exact : appareils, durée de séchage et un prix tout compris.",
        linkLabel: "Lancer le calculateur →",
        linkTo: "/verhuur/calculator",
      },
      {
        step: "Étape 02",
        tab: "Réservez et payez en ligne",
        heading: "Réserver, payer et planifier en un seul parcours.",
        body: "Vous choisissez votre date de livraison et le moment de l'installation, payez en ligne en toute sécurité et recevez immédiatement votre confirmation. Pas de devis, pas d'appels nécessaires.",
        linkLabel: "Voir comment se passe la réservation →",
        linkTo: "/verhuur/calculator",
      },
      {
        step: "Étape 03",
        tab: "Livraison et installation",
        heading: "Nous livrons, installons et réglons.",
        body: "Livré à la date de votre choix. Notre technicien positionne les appareils, raccorde l'évacuation des condensats et règle l'humidité cible. Vous n'avez rien à porter.",
        linkLabel: "Tout sur la livraison →",
        linkTo: "/verhuur/calculator",
      },
      {
        step: "Étape 04",
        tab: "Phase de séchage",
        heading: "Les appareils font le travail.",
        body: "L'humidité est extraite de l'air en continu et évacuée directement par pompe. Vous suivez le séchage, et bientôt aussi en ligne grâce au monitoring sur tous les appareils.",
        linkLabel: "Comment fonctionne la technique →",
        linkTo: "#natuurlijk-actief",
        anchor: true,
      },
      {
        step: "Étape 05",
        tab: "Enlèvement ou prolongation",
        heading: "Mesuré sec ? Nous reprenons tout.",
        body: "La mesure finale confirme que votre habitation est sèche à 100 %. Nous planifions l'enlèvement et clôturons la location. Pas sec ? Vous prolongez alors au maximum sans frais.",
        linkLabel: "Calculateur gratuit →",
        linkTo: "/verhuur/calculator",
      },
    ],
    mock: {
      plan: "Votre plan de séchage",
      opp: "Surface habitable",
      pakket: "Pack tout compris",
      bedrag: "352 €",
      wkn: "/ 2 sem.",
      knop: "Composer mon pack",
      stap2: [
        ["Pack choisi", "6 appareils · 12 jours"],
        ["Payé en ligne", "Bancontact · 352 €"],
        ["Installation planifiée", "Demain, 09:00–11:00"],
      ],
      stap3: [
        ["Livré à votre date", "Suivi jusqu'à votre porte"],
        ["Installé et réglé", "Évacuation des condensats incluse, pas de bac"],
        ["Explications sur place", "Brèves et claires"],
      ],
      vocht: "Humidité de l'air",
      schema: "Dans les temps",
      nog: "Encore ± 4 jours avant le séchage complet",
      stap5: [
        ["Mesure finale : sec", "Humidité résiduelle ≤ 2 %"],
        ["Enlèvement planifié", "Vendredi, 13:00–15:00"],
        ["Facture après paiement complet", "Pas de surprise après coup"],
      ],
    },
  },
  en: {
    kick: "How it works",
    h2: "From calculation to a dry home, in five steps.",
    lede: "Fully digital: calculate, book, pay and schedule the installation online. Click through the steps or just watch.",
    steps: [
      {
        step: "Step 01",
        tab: "Calculate your package",
        heading: "You calculate, we size it.",
        body: "Enter your floor area, ceiling height and situation. The Calculator works out your volume and puts together the exact package: units, drying time and one all-in price.",
        linkLabel: "Start the Calculator →",
        linkTo: "/verhuur/calculator",
      },
      {
        step: "Step 02",
        tab: "Book & pay online",
        heading: "Booking, paying and scheduling in one flow.",
        body: "You choose your delivery date and installation slot, pay securely online and get your confirmation straight away. No quotes, no phone calls needed.",
        linkLabel: "See how booking works →",
        linkTo: "/verhuur/calculator",
      },
      {
        step: "Step 03",
        tab: "Delivery & installation",
        heading: "We deliver, set up and adjust.",
        body: "Delivered on the date you choose. Our technician positions the units, connects the condensate drain and sets the target humidity. You do not have to lift a thing.",
        linkLabel: "All about delivery →",
        linkTo: "/verhuur/calculator",
      },
      {
        step: "Step 04",
        tab: "Drying phase",
        heading: "The units do the work.",
        body: "Moisture is continuously drawn out of the air and pumped straight away. You follow the drying, and soon digitally too via monitoring on every unit.",
        linkLabel: "How the technology works →",
        linkTo: "#natuurlijk-actief",
        anchor: true,
      },
      {
        step: "Step 05",
        tab: "Collection or extension",
        heading: "Measured dry? We collect everything.",
        body: "The final reading confirms that your home is 100% dry. We schedule the collection and close the hire. Not dry? Then you extend at no extra cost, up to the maximum.",
        linkLabel: "Free Calculator →",
        linkTo: "/verhuur/calculator",
      },
    ],
    mock: {
      plan: "Your drying plan",
      opp: "Living area",
      pakket: "All-in package",
      bedrag: "€352",
      wkn: "/ 2 wks",
      knop: "Put together my package",
      stap2: [
        ["Package chosen", "6 units · 12 days"],
        ["Paid online", "Bancontact · €352"],
        ["Installation scheduled", "Tomorrow, 09:00–11:00"],
      ],
      stap3: [
        ["Delivered on your date", "Track & trace to your door"],
        ["Set up & adjusted", "Incl. condensate drain, no tank"],
        ["Explained on site", "Short and clear"],
      ],
      vocht: "Humidity",
      schema: "On schedule",
      nog: "About 4 more days until dry",
      stap5: [
        ["Final reading: dry", "Residual moisture ≤ 2%"],
        ["Collection scheduled", "Friday, 13:00–15:00"],
        ["Invoice after full payment", "No surprises afterwards"],
      ],
    },
  },
} satisfies Copy<HiwCopy>;

const Steps = ({ rows }: { rows: [string, string][] }) => (
  <>
    {rows.map(([title, sub], i) => (
      <Step key={title} tone={`s${i + 1}`} title={title} sub={sub} />
    ))}
  </>
);

/** The mock card the design draws next to each step, in volgorde van de stappen. */
const mocks = (m: MockCopy): ReactNode[] => [
  mockCard(
    <>
      <span className="mlab">{m.plan}</span>
      <div className="mrow">
        <span className="mlab">{m.opp}</span>
        <span className="mval">
          120 <small>m²</small>
        </span>
      </div>
      <div className="mslider">
        <b />
      </div>
      <div className="mrow" style={{ marginTop: 14 }}>
        <span className="mlab">{m.pakket}</span>
        <span className="mval">
          {m.bedrag} <small>{m.wkn}</small>
        </span>
      </div>
      <div className="mbtn">{m.knop}</div>
    </>,
  ),
  mockCard(<Steps rows={m.stap2} />),
  mockCard(<Steps rows={m.stap3} />),
  mockCard(
    <>
      <div className="mrow">
        <span className="mlab">{m.vocht}</span>
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
          <b>{m.schema}</b>
          <small>{m.nog}</small>
        </div>
      </div>
    </>,
  ),
  mockCard(<Steps rows={m.stap5} />),
];

const V3HowItWorks = () => {
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const STEPS: HiwStep[] = t.steps.map((step, i) => ({ ...step, mock: mocks(t.mock)[i] }));
  const [current, setCurrent] = useState(0);
  const [manual, setManual] = useState(false);

  useEffect(() => {
    if (manual) return;
    const timer = setInterval(() => setCurrent((i) => (i + 1) % t.steps.length), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [manual, t.steps.length]);

  return (
    <section className="hiw" id="werkwijze">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">{t.kick}</span>
          <h2 className="sec">{t.h2}</h2>
          <p className="lede">{t.lede}</p>
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
                  <Link to={lp(step.linkTo)}>{step.linkLabel}</Link>
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
