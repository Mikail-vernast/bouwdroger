import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, ChecklistIcon, RefreshIcon, SupportIcon, TruckIcon } from "./icons";

const INCLUDED: { icon: ReactNode; title: string; body: string }[] = [
  {
    icon: <TruckIcon />,
    title: "Levering & ophaling",
    body: "Binnen 24 uur bij u geleverd en opgehaald wanneer u klaar bent. Gratis in onze regio.",
  },
  {
    icon: <ChecklistIcon />,
    title: "Installatie op gelijkvloers",
    body: "Onze technicus plaatst het toestel, sluit de condensafvoer aan en stelt alles correct af — met basisuitleg bij plaatsing.",
  },
  {
    icon: <RefreshIcon />,
    title: "Flexibele looptijd",
    body: "Verleng online met één klik of stop vroeger. U betaalt uitsluitend de dagen die u gebruikt.",
  },
  {
    icon: <SupportIcon />,
    title: "Toebehoren & ondersteuning",
    body: "Standaard toebehoren zoals verlengkabels zit erbij, en onze experts zijn bereikbaar zolang u huurt.",
  },
];

const OPTIONS = [
  {
    title: "Spoedlevering",
    body: "Bij dringende schadegevallen of strakke planningen voorzien wij een spoedlevering.",
  },
  {
    title: "Verlenggarantie",
    body: "Nog niet droog binnen de voorziene periode? Een verlengoptie geeft extra gemoedsrust.",
  },
  {
    title: "Automatische waterafvoer",
    body: "Bij langere trajecten pompt een afvoeroplossing het water automatisch weg — geen reservoirs ledigen.",
  },
  {
    title: "Rapportage",
    body: "Voor dossiers waarbij bewijs telt, ondersteunen wij met verslaggeving of technische documentatie.",
  },
];

const V3Included = () => (
  <section className="incl" id="prijzen">
    <div className="wrap">
      <div className="sec-head">
        <span className="kick">Prijzen &amp; voorwaarden</span>
        <h2 className="sec">Eén duidelijke prijs. Meer inbegrepen dan u denkt.</h2>
        <p className="lede">
          Bouwdroging moet duidelijk zijn. Daarom werken wij met transparante huurvoorwaarden en een
          serviceformule die u ontzorgt — u ziet de prijs bij het berekenen en boekt tegen exact dat
          tarief.
        </p>
      </div>

      <div className="incl-grid">
        {INCLUDED.map((item) => (
          <div className="ic" key={item.title}>
            <div className="ii">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>

      <div className="incl-x">
        {OPTIONS.map((option) => (
          <div className="ix" key={option.title}>
            <div className="xt">Optie</div>
            <h3>{option.title}</h3>
            <p>{option.body}</p>
          </div>
        ))}
      </div>

      <div className="ontzorgbar">
        <img
          className="ob-man"
          src="/vernast/man-klembord.webp"
          alt="Vernast technicus met klembord"
          loading="lazy"
        />
        <div className="ob-body">
          <h3>Bij levering volledig ontzorgd. En 100% droog, gegarandeerd.*</h3>
          <p>
            Wij berekenen, leveren, installeren en volgen op — u hoeft niets te sjouwen of in te
            stellen. Niet droog binnen de berekende periode? Dan verlengt u maximaal kosteloos.
          </p>
          <Link className="ob-btn" to="/verhuur/calculator">
            Start uw droging
            <ArrowRightIcon size={14} />
          </Link>
          <span className="ob-note">
            * Garantie geldt wanneer de externe omstandigheden aan onze richtlijnen voldoen.
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default V3Included;
