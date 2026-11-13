import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import Reveal from "@/components/Reveal";
import OzonForm from "@/components/ozon/OzonForm";
import { ArrowRightIcon, GoogleIcon, PhoneIcon, StarIcon } from "@/components/home-v3/icons";
import {
  KelderIcon,
  MijtIcon,
  NeusIcon,
  SchildIcon,
  SleutelIcon,
  SporenIcon,
  WaterschadeIcon,
} from "@/components/ozon/ozonIcons";
import { breadcrumbSchema, faqSchema, organizationSchema, serviceSchema } from "@/lib/schema";
import { CONTACT } from "@/lib/site";
import { SEO } from "@/data/seo";
import { eersteReviews } from "@/data/reviews";
import "@/styles/ozonbehandeling.css";

/**
 * Ontschimmeling — het verwijderen van de schimmel zelf.
 *
 * Zustepagina van /ozonbehandeling, en bewust een eigen URL. Het zijn twee
 * verschillende zoekvragen en twee verschillende momenten in hetzelfde
 * traject: wie "schimmel verwijderen" intikt staat vóór het werk, wie
 * "ozonbehandeling" intikt weet al wat ozon is en zoekt de afronding. Eén
 * pagina voor allebei zou op geen van beide scherp staan — zie de toelichting
 * bovenaan `src/data/seo.ts` over kannibalisatie.
 *
 * Ze delen de schil (`.oz-page`, `src/styles/ozonbehandeling.css`), het
 * boekingsformulier en de iconen, zodat de twee pagina's herkenbaar één familie
 * zijn. De copy is van deze pagina alleen: hier staat het handwerk centraal —
 * oorzaak zoeken, afschermen, verwijderen, behandelen — en is ozon het
 * sluitstuk in plaats van het onderwerp.
 *
 * Twee dingen bewust zo, net als bij de zusterpagina:
 *  - geen `opacity:0` als begintoestand in de HTML (de pagina wordt
 *    geprerenderd; een animatiebibliotheek met een beginstaat zet die letterlijk
 *    in `dist/ontschimmeling/index.html` en levert onzichtbare inhoud op voor
 *    precies de AI-antwoordmachines waarvoor we prerenderen),
 *  - de FAQ in `<details>`, zodat elk antwoord in de HTML staat.
 */

/* Eén lijst voor het scherm én de JSON-LD. Twee kopieën zouden uit de pas lopen,
   en dan markeert de schema iets wat de bezoeker niet ziet. */
const FAQ: { question: string; answer: string }[] = [
  {
    question: "Kan ik schimmel niet gewoon zelf wegpoetsen?",
    answer:
      "Oppervlakkig reinigen haalt de zwarte vlek weg, maar niet de schimmel. De draden zitten in de poriën van pleister en voeg, en bij droogwrijven komen er juist sporen vrij die zich elders in de ruimte afzetten. Daarom werken wij afgeschermd, met onderdruk waar nodig, en verwijderen we eerst het aangetaste materiaal voor we behandelen.",
  },
  {
    question: "Wat kost een ontschimmeling?",
    answer:
      "Dat hangt af van de oppervlakte, hoe diep de aantasting zit en of het aangetaste materiaal weg moet. Een muur van enkele vierkante meters in een slaapkamer is iets anders dan een kelder waar het pleisterwerk eraf moet. Onze specialist komt kijken en geeft een vaste prijs voordat er iets gebeurt.",
  },
  {
    question: "Moet ik het huis uit tijdens de werken?",
    answer:
      "Meestal niet. Wij schermen de werkzone af zodat het stof en de sporen niet door de woning trekken, en werken kamer per kamer. Alleen tijdens een eventuele ozonbehandeling achteraf moet de behandelde ruimte enkele uren leeg zijn, ook van huisdieren en planten.",
  },
  {
    question: "Hoe weet ik of het vochtprobleem opgelost is?",
    answer:
      "Door te meten, niet te kijken. Wij meten het vochtgehalte in de ondergrond voor en na het drogen. Een muur die droog oogt kan vanbinnen nog nat zijn, en dan komt de schimmel terug, hoe grondig het oppervlak ook behandeld is. Pas als de meting droog zegt, werken we af.",
  },
  {
    question: "Wat is het verschil met een ozonbehandeling?",
    answer:
      "Ontschimmelen is het handwerk: de zichtbare schimmel en het aangetaste materiaal gaan weg, en de ondergrond wordt behandeld. Een ozonbehandeling is de afronding daarna: die ruimt de sporen op die in de lucht, in kieren en in textiel achterbleven. Ze vervangen elkaar niet, ze volgen op elkaar.",
  },
  {
    question: "Is schimmel in huis echt ongezond?",
    answer:
      "Schimmelsporen kunnen luchtwegklachten, hoofdpijn en vermoeidheid uitlokken, en ze treffen kinderen, ouderen en mensen met astma of een allergie het hardst. Dat is ook de reden om niet te wachten: hoe langer de ruimte vochtig blijft, hoe groter de kolonie en hoe meer sporen er in de lucht komen.",
  },
];

/*
 * De zes spaken van de hero-animatie: elke spore op de kring krijgt een
 * O₃-deeltje dat ernaartoe vertrekt. Identiek aan /ozonbehandeling — het is
 * dezelfde behandeling, dus hetzelfde beeld.
 *
 * Vaste hoeken en vertragingen, geen `Math.random()`: deze pagina wordt
 * geprerenderd en een willekeurige waarde levert bij hydratatie andere HTML op
 * dan in dist.
 */
const SPAKEN: { id: string; style: CSSProperties }[] = [
  { id: "p1", style: { "--a": "-90deg", animationDelay: "0s" } as CSSProperties },
  { id: "p2", style: { "--a": "-30deg", animationDelay: "1s" } as CSSProperties },
  { id: "p3", style: { "--a": "30deg", animationDelay: "2s" } as CSSProperties },
  { id: "p4", style: { "--a": "90deg", animationDelay: "3s" } as CSSProperties },
  { id: "p5", style: { "--a": "150deg", animationDelay: "4s" } as CSSProperties },
  { id: "p6", style: { "--a": "210deg", animationDelay: "5s" } as CSSProperties },
];

/** De sporen op de muur in het afrondingsblok, en de geurslierten ertussen. */
const SPOREN: { id: string; style: CSSProperties }[] = [
  { id: "s1", style: { left: "20%", top: "40%", "--ss": "42px", "--sd": "9s", animationDelay: "0s" } as CSSProperties },
  { id: "s2", style: { left: "37%", top: "72%", "--ss": "34px", "--sd": "9s", animationDelay: "1.5s" } as CSSProperties },
  { id: "s3", style: { left: "55%", top: "26%", "--ss": "48px", "--sd": "9s", animationDelay: "3s" } as CSSProperties },
  { id: "s4", style: { left: "70%", top: "76%", "--ss": "30px", "--sd": "9s", animationDelay: "4.5s" } as CSSProperties },
  { id: "s5", style: { left: "86%", top: "34%", "--ss": "38px", "--sd": "9s", animationDelay: "6s" } as CSSProperties },
  { id: "s6", style: { left: "12%", top: "76%", "--ss": "34px", "--sd": "9s", animationDelay: "7.5s" } as CSSProperties },
];

const MOLECULEN: { id: string; style: CSSProperties }[] = [
  { id: "m1", style: { left: "8%", top: "18%", "--s": "58px", "--dur": "11s", "--dx": "26px", "--dy": "-20px", "--dr": "34deg" } as CSSProperties },
  { id: "m2", style: { left: "62%", top: "12%", "--s": "44px", "--dur": "9s", "--dx": "-22px", "--dy": "26px", "--dr": "-42deg" } as CSSProperties },
  { id: "m3", style: { left: "78%", top: "58%", "--s": "66px", "--dur": "13s", "--dx": "-30px", "--dy": "-24px", "--dr": "28deg" } as CSSProperties },
  { id: "m4", style: { left: "26%", top: "68%", "--s": "40px", "--dur": "10s", "--dx": "24px", "--dy": "-18px", "--dr": "-30deg" } as CSSProperties },
  { id: "m5", style: { left: "46%", top: "38%", "--s": "52px", "--dur": "12s", "--dx": "18px", "--dy": "22px", "--dr": "46deg" } as CSSProperties },
];

/** De vier stappen van een ontschimmeling, in de volgorde waarin ze gebeuren. */
const STAPPEN: { titel: string; tekst: string }[] = [
  {
    titel: "De oorzaak zoeken",
    tekst:
      "Eerst meten: waar komt het vocht vandaan? Een lek, optrekkend vocht, een koudebrug of gewoon te weinig ventilatie. Zonder dat antwoord is elke behandeling tijdelijk.",
  },
  {
    titel: "Afschermen en verwijderen",
    tekst:
      "De werkzone wordt afgeschermd zodat sporen niet door de woning trekken. Aangetast pleisterwerk, behang of gipskarton gaat eruit, tot op een gezonde ondergrond.",
  },
  {
    titel: "Behandelen en drogen",
    tekst:
      "De ondergrond wordt behandeld tegen hergroei en de constructie droogt met bouwdrogers tot de vochtmeting het bevestigt. Meten, niet gokken.",
  },
  {
    titel: "Afronden met ozon",
    tekst:
      "Tot slot een ozonbehandeling: die doodt de sporen die in de lucht, in kieren en in textiel achterbleven, zodat de schimmel geen herstart krijgt.",
  },
];

/** Waar we ontschimmelen — dezelfde zes situaties als de zusterpagina kent. */
const INZET: { icon: JSX.Element; title: string; text: string }[] = [
  {
    icon: <SporenIcon />,
    title: "Zwarte plekken op de muur",
    text: "De klassieker: een koude buitenmuur achter een kast, of de hoek van een slaapkamer die nooit opdroogt.",
  },
  {
    icon: <KelderIcon />,
    title: "Kelders & kruipruimtes",
    text: "Vochtige, slecht verluchte ruimtes waar schimmel maanden ongezien zijn gang kan gaan voor iemand het ruikt.",
  },
  {
    icon: <WaterschadeIcon />,
    title: "Na waterschade",
    text: "Na een lek of een overstroming begint schimmel binnen 24 tot 48 uur. Snel drogen en ontschimmelen scheelt een renovatie.",
  },
  {
    icon: <NeusIcon />,
    title: "Muffe geur zonder vlek",
    text: "U ruikt het wel maar ziet niets: dan zit de schimmel achter de plint, onder de vloer of in de spouw.",
  },
  {
    icon: <MijtIcon />,
    title: "Allergie en luchtwegen",
    text: "Terugkerende klachten bij kinderen of bij wie astma heeft, die thuis erger zijn dan elders.",
  },
  {
    icon: <SleutelIcon />,
    title: "Bij aankoop of verhuur",
    text: "Schimmel vastgesteld in een plaatsbeschrijving, of ontdekt net voor de overdracht van een woning.",
  },
];

/** Wat de bezoeker van ons mag verwachten, in de taal van de werf. */
const AANPAK: [string, string][] = [
  ["Plaatsbezoek", "Gratis en vrijblijvend"],
  ["Prijs", "Vast, vooraf afgesproken"],
  ["Werkzone", "Afgeschermd, kamer per kamer"],
  ["Oplevering", "Met vochtmeting als bewijs"],
];

const OntschimmelingPage = () => (
  <div className="oz-page">
    <PageMeta
      {...SEO.ontschimmeling}
      path="/ontschimmeling"
      jsonLd={[
        organizationSchema(),
        serviceSchema({
          name: "Ontschimmeling",
          description:
            "Schimmel verwijderen aan de bron: oorzaak opsporen, aangetast materiaal weghalen, de ondergrond behandelen, drogen tot de meting het bevestigt en afronden met ozon.",
          path: "/ontschimmeling",
          serviceType: "Ontschimmeling",
        }),
        faqSchema(FAQ),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Ontschimmeling", path: "/ontschimmeling" },
        ]),
      ]}
    />

    <V3Header lightAfter={460} />

    <main>
      {/* ================= HERO ================= */}
      <div className="oz-top">
        <section className="oz-hero">
          <div className="oz-wrap oz-hero-grid">
            <div className="oz-hero-copy">
              <span className="oz-kick">Ontschimmeling · schimmel verwijderen</span>
              <h1>Schimmel verdwijnt pas echt als de oorzaak mee weggaat.</h1>
              <p>
                Wij halen de schimmel weg tot op een gezonde ondergrond, drogen de constructie tot
                de vochtmeting het bevestigt en ronden af met ozon. Zo blijft het weg, in plaats van
                terug te komen zodra de verf droog is.
              </p>
              <div className="oz-hero-cta">
                <a className="ozbtn ozbtn-white" href="#boeken">
                  Vraag een plaatsbezoek <ArrowRightIcon size={13} strokeWidth={2.6} />
                </a>
                <a className="ozbtn ozbtn-ghost" href={`tel:${CONTACT.phoneE164}`}>
                  <PhoneIcon size={14} /> {CONTACT.phoneLocal}
                </a>
              </div>
              <ul className="oz-hero-usp">
                <li>Gratis plaatsbezoek</li>
                <li>Vaste prijs vooraf</li>
                <li>Heel Vlaanderen</li>
              </ul>
            </div>

            {/*
              Dezelfde hero-animatie als op /ozonbehandeling: de behandeling in
              het midden slaat pulsen uit in álle richtingen, en elke spore op
              de kring klapt dicht op het moment dat het deeltje bij hem
              aankomt. Twee pagina's over hetzelfde werk horen hetzelfde beeld
              te dragen.

              `aria-hidden` omdat het decor is: de tekst ernaast zegt hetzelfde,
              en een schermlezer heeft niets aan twaalf lege spans. Alles draait
              op CSS-keyframes, dus er staat geen begintoestand in de
              geprerenderde HTML.
            */}
            <div className="oz-hero-vis" aria-hidden="true">
              <div className="oz-orbit">
                <span className="oz-ring r1" />
                <span className="oz-ring r2" />
                <span className="oz-ring r3" />
                <span className="oz-core">O₃</span>
                {SPAKEN.map((spaak) => (
                  <span className="oz-spoke" key={spaak.id} style={spaak.style}>
                    <i className="oz-shot" />
                    <i className="oz-target" />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ================= HERKENBAAR ================= */}
      <section className="oz-sec oz-light">
        <div className="oz-wrap">
          <Reveal className="oz-head">
            <span className="oz-kick red">Herkenbaar?</span>
            <h2 className="oz-h2">Weggepoetst, overgeschilderd, en na een maand staat hij er weer.</h2>
            <p className="oz-lede">
              Dat ligt niet aan hoe grondig u geschrobd heeft. Het ligt aan wat eronder zit, en wat
              er nog steeds voor zorgt dat die muur vochtig blijft.
            </p>
          </Reveal>

          <div className="oz-three">
            <Reveal className="oz-card">
              <span className="oz-num">01</span>
              <h3>De oorzaak staat er nog</h3>
              <p>
                Een lek, optrekkend vocht of een koudebrug blijft water aanvoeren. Zolang dat
                doorgaat, is elke behandeling van het oppervlak tijdelijk.
              </p>
            </Reveal>
            <Reveal className="oz-card" delay={0.08}>
              <span className="oz-num">02</span>
              <h3>De schimmel zit dieper</h3>
              <p>
                Wat u ziet is de bloei aan de oppervlakte. De draden zitten in de poriën van
                pleister en voeg; een doek haalt daar niets weg.
              </p>
            </Reveal>
            <Reveal className="oz-card" delay={0.16}>
              <span className="oz-num">03</span>
              <h3>Verf sluit hem op</h3>
              <p>
                Overschilderen verbergt de vlek een paar maanden. Daaronder groeit hij door, en
                daarna komt hij dwars door de nieuwe laag terug.
              </p>
            </Reveal>
          </div>

          <Reveal className="oz-note" delay={0.1}>
            <b>Droog eerst, behandel daarna.</b> Een muur die droog oogt kan vanbinnen nog nat zijn.
            Daarom meten wij het vochtgehalte in de ondergrond, en drogen we zo nodig eerst met{" "}
            <Link to="/verhuur/calculator">een berekend droogpakket</Link>. Pas als de meting droog
            zegt, heeft afwerken zin.
          </Reveal>
        </div>
      </section>

      {/* ================= WAAROM NU ================= */}
      <section className="oz-sec oz-red">
        <div className="oz-wrap oz-split">
          <Reveal className="oz-split-copy">
            <span className="oz-kick onred">Waarom wachten niet helpt</span>
            <h2 className="oz-h2">Een schimmel die blijft staan, wordt groter.</h2>
            <p className="oz-lede">
              Op vochtig materiaal begint schimmel na 24 tot 48 uur. Daarna groeit de kolonie door
              zolang het vocht er is, en elke dag komen er sporen in de lucht die zich elders in de
              woning afzetten.
            </p>
            <p className="oz-body">
              Die sporen zijn het echte probleem. Ze veroorzaken luchtwegklachten, hoofdpijn en
              vermoeidheid, en treffen kinderen, ouderen en mensen met astma het hardst. Daar komt
              de schade aan het gebouw bij: aangetast pleisterwerk, loskomend behang en, in een
              kelder of kruipruimte, houtrot in de vloerstructuur.
            </p>
          </Reveal>

          <Reveal className="oz-split-vis" delay={0.1}>
            <dl className="oz-specs oz-specs-card">
              {AANPAK.map(([label, waarde]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{waarde}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ================= DE AANPAK ================= */}
      <section className="oz-sec oz-light">
        <div className="oz-wrap">
          <Reveal className="oz-head">
            <span className="oz-kick red">Onze aanpak</span>
            <h2 className="oz-h2">Vier stappen, en de laatste is niet de verf.</h2>
            <p className="oz-lede">
              Ontschimmelen is geen schoonmaakbeurt maar een volgorde. Wie een stap overslaat, doet
              het binnen het jaar opnieuw.
            </p>
          </Reveal>

          <div className="oz-four">
            {STAPPEN.map((stap, i) => (
              <Reveal className="oz-safe-card" key={stap.titel} delay={i * 0.06}>
                <span className="oz-num">{`0${i + 1}`}</span>
                <b>{stap.titel}</b>
                <p>{stap.tekst}</p>
              </Reveal>
            ))}
          </div>

          {/*
            Dezelfde animatie als op /ozonbehandeling, hier op de plek waar ze
            hoort: stap vier. De schimmelmuur maakt de praktijksituatie
            zichtbaar, een O₃-deeltje vliegt op een spore af, en pas als het
            raakt klapt de spore dicht. De legende eronder zegt wie wie is.

            De posities staan hard in de lijsten bovenaan en niet op
            `Math.random()`: deze pagina wordt geprerenderd, en een willekeurige
            waarde zou bij hydratatie niet overeenkomen met de HTML.
          */}
          <Reveal className="oz-stage-wrap" delay={0.08}>
            <div
              className="oz-stage"
              aria-label="Schimmelmuur met animatie: actieve zuurstof breekt de achtergebleven sporen af"
            >
              <span className="oz-glow" aria-hidden="true" />

              {MOLECULEN.map((mol) => (
                <span className="oz-mol3" key={mol.id} style={mol.style} aria-hidden="true">
                  <i className="oz-bond b1" />
                  <i className="oz-bond b2" />
                  <i className="oz-at a1" />
                  <i className="oz-at a2" />
                  <i className="oz-at a3" />
                </span>
              ))}

              {SPOREN.map((spore) => (
                <span className="oz-spore" key={spore.id} style={spore.style} aria-hidden="true">
                  <i className="oz-spore-body" />
                  <i className="oz-zap" />
                </span>
              ))}
            </div>

            <div className="oz-legend">
              <span className="oz-lg o3">
                <i /> <b>O₃</b> actieve zuurstof
              </span>
              <span className="oz-lg sp">
                <i /> schimmelspore
              </span>
            </div>
          </Reveal>

          <Reveal className="oz-after" delay={0.12}>
            <p>
              Dat laatste is wat een gewone schoonmaakbeurt nooit haalt: ozon is een gas, dus het
              komt tot in kieren, voegen, textiel en het ventilatiekanaal. Daarna vervalt het
              vanzelf tot gewone zuurstof, zonder residu. Meer daarover op{" "}
              <Link to="/ozonbehandeling">de pagina over ozonbehandeling</Link>.
            </p>
          </Reveal>

          <Reveal className="oz-band" delay={0.1}>
            <div className="oz-band-t">
              <span className="oz-kick onred">Waar drogen bij hoort</span>
              <h3>Wij zijn in de eerste plaats droogspecialisten.</h3>
              <p>
                Dat is ook waarom we bij schimmel eerst naar het vocht kijken. Na{" "}
                <Link to="/waterschade">waterschade</Link> of in een{" "}
                <Link to="/renovatie">vochtige kelder</Link> is de droging het halve werk; zonder
                droge ondergrond is ontschimmelen een behandeling met een houdbaarheidsdatum.
              </p>
              <a className="ozbtn ozbtn-white" href="#boeken">
                Vraag een plaatsbezoek <ArrowRightIcon size={13} strokeWidth={2.6} />
              </a>
            </div>
            <img
              className="oz-band-man"
              src="/vernast/man-spuitbus.webp"
              alt="Vernast-specialist behandelt een muur tegen schimmel"
              width={700}
              height={900}
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      {/* ================= WAARVOOR ================= */}
      <section className="oz-sec oz-red">
        <div className="oz-wrap">
          <Reveal className="oz-head">
            <span className="oz-kick onred">Waar we voor komen</span>
            <h2 className="oz-h2">Van één hoek tot een hele kelder.</h2>
            <p className="oz-lede">
              Schimmel ziet er overal anders uit. Dit zijn de situaties waarvoor men ons belt.
            </p>
          </Reveal>

          <div className="oz-grid6">
            {INZET.map((item, i) => (
              <Reveal className="oz-use" key={item.title} delay={(i % 3) * 0.07}>
                <span className="oz-use-ic">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VEILIG & VERANTWOORD ================= */}
      <section className="oz-sec oz-light">
        <div className="oz-wrap">
          <Reveal className="oz-head oz-head-mid">
            <span className="oz-kick red">
              <SchildIcon /> Veilig &amp; verantwoord
            </span>
            <h2 className="oz-h2">Zonder dat de rest van uw woning besmet raakt.</h2>
            <p className="oz-lede">
              Schimmel verwijderen doet sporen opwaaien. Daarom werken we afgeschermd, met de juiste
              bescherming, en gaat het aangetaste materiaal gesloten de deur uit.
            </p>
          </Reveal>
          <div className="oz-four">
            <Reveal className="oz-safe-card">
              <b>Afgeschermde werkzone</b>
              <p>
                De kamer wordt afgesloten van de rest van de woning, zodat stof en sporen niet
                meereizen naar de gang of de slaapkamers.
              </p>
            </Reveal>
            <Reveal className="oz-safe-card" delay={0.06}>
              <b>Beschermd werken</b>
              <p>
                Onze techniekers dragen pak en masker. Niet voor de show: bij het verwijderen komen
                er sporen vrij die u niet wilt inademen.
              </p>
            </Reveal>
            <Reveal className="oz-safe-card" delay={0.12}>
              <b>Afval gaat gesloten weg</b>
              <p>
                Aangetast pleisterwerk, behang of gipskarton verlaat de woning verpakt, zodat de
                besmetting niet onderweg alsnog loskomt.
              </p>
            </Reveal>
            <Reveal className="oz-safe-card" delay={0.18}>
              <b>Eerlijk over de oorzaak</b>
              <p>
                Zit het probleem in de constructie, dan zeggen we dat. Soms is een muurinjectie of
                betere ventilatie het echte antwoord, en niet onze behandeling.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= REVIEWS ================= */}
      <section className="oz-sec oz-red">
        <div className="oz-wrap">
          <Reveal className="oz-head oz-head-mid">
            <span className="oz-kick onred">Wat klanten zeggen</span>
            <h2 className="oz-h2">Hoe wij werken, in hun woorden.</h2>
            <p className="oz-lede">
              Beoordelingen van Vernast op Google en Solvari, letterlijk overgenomen. Over snelheid,
              opvolging en afspraken nakomen, want dat is wat werk bij u thuis vraagt.
            </p>
          </Reveal>
          <div className="oz-reviews">
            {eersteReviews(3).map((review, i) => (
              <Reveal className="oz-review" key={review.name} delay={(i % 3) * 0.07}>
                <div className="oz-review-stars" aria-label={`${review.rating} van 5 sterren`}>
                  {Array.from({ length: review.rating }, (_, star) => (
                    <StarIcon key={star} size={14} />
                  ))}
                </div>
                <p>{review.text}</p>
                <div className="oz-review-by">
                  <span className="oz-review-ini" aria-hidden="true">
                    {review.initials}
                  </span>
                  <span>
                    <b>{review.name}</b>
                    <small>
                      {review.source === "Google" && <GoogleIcon size={12} />} {review.source},{" "}
                      {review.date}
                    </small>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="oz-sec oz-light" id="faq">
        <div className="oz-wrap faq-grid">
          <div className="faq-side">
            <span className="oz-kick red">Veelgestelde vragen</span>
            <h2 className="oz-h2">Uw vragen over ontschimmeling.</h2>
            <div className="faq-help">
              <h3>Staat uw vraag er niet bij?</h3>
              <p>
                Onze specialist komt gratis kijken en zegt eerlijk wat er moet gebeuren, en in welke
                volgorde.
              </p>
              <div className="fh-btns">
                <a className="fh-call" href={`tel:${CONTACT.phoneE164}`}>
                  <PhoneIcon /> Bel {CONTACT.phoneLocal}
                </a>
                <a className="fh-form" href="#boeken">
                  Stel uw vraag online
                </a>
              </div>
            </div>
          </div>

          <div className="faq-list">
            {FAQ.map((item, i) => (
              <details className="q" key={item.question} open={i === 0}>
                <summary>
                  {item.question} <span className="pl">+</span>
                </summary>
                <div className="a">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BOEKEN ================= */}
      <section className="oz-sec oz-book">
        <div className="oz-wrap oz-book-grid">
          <Reveal className="oz-book-l">
            <span className="oz-kick onred">Vraag een plaatsbezoek</span>
            <h2 className="oz-h2">Schimmel in huis? Laat er eerst iemand naar kijken.</h2>
            <p>
              Vul hieronder uw situatie in, dan belt een specialist u binnen één werkdag. Het bezoek
              is gratis en vrijblijvend, en u krijgt een vaste prijs voordat er iets gebeurt.
            </p>
            <ul className="oz-book-usp">
              <li>Reactie binnen één werkdag</li>
              <li>Eerlijk advies: soms is drogen of ventileren het echte antwoord</li>
              <li>Werkzaam in heel Vlaanderen</li>
            </ul>
            <p className="oz-book-call">
              Liever meteen bellen?{" "}
              <a href={`tel:${CONTACT.phoneE164}`}>{CONTACT.phoneLocal}</a>,{" "}
              {CONTACT.openingHours.replace("Mo-Fr", "ma–vr").replace(" 08:00-17:00", ", 8u–17u")}
            </p>
          </Reveal>
          <div className="oz-book-r">
            <OzonForm
              dienst="ontschimmeling"
              situatieStandaard="schimmel"
              verstuurLabel="Vraag een plaatsbezoek aan"
            />
          </div>
        </div>
      </section>
    </main>

    <V3Footer />
  </div>
);

export default OntschimmelingPage;
