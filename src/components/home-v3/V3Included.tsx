import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  ChecklistIcon,
  RefreshIcon,
  ShieldIcon,
  SupportIcon,
  TruckIcon,
} from "./icons";

/** Spoedlevering: een waarschuwingsdriehoek, want dit is voor wie haast heeft. */
const SpoedIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10.3 3.9 1.9 18a2 2 0 0 0 1.7 3h16.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
    <path d="M12 9v4M12 17h.01" />
  </svg>
);

/** Automatische waterafvoer: een druppel die door een slang wegloopt. */
const AfvoerIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2.6s5.4 6.2 5.4 10a5.4 5.4 0 0 1-10.8 0c0-3.8 5.4-10 5.4-10Z" />
    <path d="M3 21h18" />
  </svg>
);

const INCLUDED: { icon: ReactNode; title: string; body: string }[] = [
  {
    icon: <TruckIcon />,
    title: "Levering & ophaling",
    body: "Geleverd op uw gekozen datum en opgehaald wanneer u klaar bent. Gratis in onze regio.",
  },
  {
    icon: <ChecklistIcon />,
    title: "Installatie op gelijkvloers",
    body: "Onze technicus plaatst het toestel, sluit de condensafvoer aan en stelt alles correct af, met basisuitleg bij plaatsing.",
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

/*
 * De drie echte opties. Elk draagt een eigen icoon en een eigen toon, want ze
 * zeggen niet hetzelfde: spoed is dringend, waterafvoer is een verbetering,
 * rapportage is gewoon beschikbaar. Alle drie hetzelfde rode "OPTIE" las als
 * een waarschuwing -- zeker bij rapportage, waar niets mis mee is.
 */
const OPTIONS: {
  icon: ReactNode;
  toon?: string;
  label?: string;
  title: string;
  body: string;
  /* Alleen waar er een pagina achter zit die méér zegt dan deze drie regels. */
  link?: { label: string; path: string };
}[] = [
  {
    icon: <ShieldIcon size={18} />,
    toon: "winst",
    /*
      Staat in deze rij maar is geen optie: wie niet droog is binnen de
      berekende periode verlengt kosteloos. Dat staat zo in de drooggarantie en
      in de balk onderaan deze sectie. Als "Optie" gelabeld leek het iets dat
      bijbetaald moet worden.
    */
    label: "Inbegrepen",
    title: "Verlenggarantie",
    body: "Nog niet droog binnen de voorziene periode? Een verlengoptie geeft extra gemoedsrust.",
  },
  {
    icon: <SpoedIcon />,
    toon: "spoed",
    title: "Spoedlevering",
    body: "Bij dringende schadegevallen of strakke planningen voorzien wij een spoedlevering.",
  },
  {
    icon: <AfvoerIcon />,
    toon: "winst glans",
    title: "Automatische waterafvoer",
    body: "Bij langere trajecten pompt een condenspomp het water automatisch weg, zodat u geen reservoirs hoeft te ledigen.",
    link: { label: "Zo werkt de condenspomp", path: "/verhuur/toebehoren/condenspomp" },
  },
  {
    icon: <ChecklistIcon size={18} />,
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
          serviceformule die u ontzorgt. U ziet de prijs bij het berekenen en boekt tegen exact dat
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
          <div className={option.toon ? `ix ${option.toon}` : "ix"} key={option.title}>
            <div className="xt">
              {option.icon} {option.label ?? "Optie"}
            </div>
            <h3>{option.title}</h3>
            <p>{option.body}</p>
            {option.link && (
              <Link className="ix-link" to={option.link.path}>
                {option.link.label}
                <ArrowRightIcon size={12} />
              </Link>
            )}
          </div>
        ))}
      </div>

      <div className="ontzorgbar">
        <img
          className="ob-man"
          src="/vernast/man-klembord.webp"
          alt="Vernast technicus met klembord"
          width={1440}
          height={961}
          loading="lazy"
        />
        <div className="ob-body">
          <h3>Bij levering volledig ontzorgd. En 100% droog, gegarandeerd.*</h3>
          <p>
            Wij berekenen, leveren, installeren en volgen op. U hoeft niets te sjouwen of in te
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
