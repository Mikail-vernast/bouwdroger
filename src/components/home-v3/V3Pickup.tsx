import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, CalendarCheckIcon, MailIcon, PinIcon, RefreshIcon } from "./icons";

const STEPS: { icon: ReactNode; title: string; body: string; tag: string }[] = [
  {
    icon: <CalendarCheckIcon size={19} height={16} />,
    title: "Reserveer online",
    body: "Kies uw toestel, huurperiode en afhaalmoment (bv. tussen 08:00 en 10:00). U betaalt niets vooraf en reserveren is gratis.",
    tag: "Stap 01, reservatie",
  },
  {
    icon: <MailIcon size={19} strokeWidth={1.8} />,
    title: "Bevestiging binnen het uur",
    body: "U ontvangt uw reservatiebevestiging met routebeschrijving en wat u meebrengt: enkel uw identiteitskaart en de bevestiging op uw telefoon.",
    tag: "Stap 02, bevestiging",
  },
  {
    icon: <PinIcon />,
    title: "Afhalen langs de A12",
    body: "Uw toestel staat klaar aan ons afhaalpunt: Boomsesteenweg 12 / Unit 11, 2630 Aartselaar. Wij laden mee in en geven korte uitleg. Breng een ruime koffer of aanhangwagen mee.",
    tag: "Stap 03, afhaling",
  },
  {
    icon: <RefreshIcon size={19} />,
    title: "Terugbrengen, klaar",
    body: "Breng het toestel terug op het afgesproken moment, ma–vr tussen 08:00 en 17:00. De factuur volgt pas na de huurperiode.",
    tag: "Stap 04, retour",
  },
];

const V3Pickup = () => (
  <section className="why" id="voordelen">
    <div className="wrap">
      <div className="sec-head">
        <span className="kick">Zelf afhalen</span>
        <h2 className="sec">Liever zelf afhalen? Zo werkt het.</h2>
        <p className="lede">
          Losse toestellen haalt u zelf af aan ons afhaalpunt langs de A12 in Aartselaar — tegen
          lagere afhaalprijzen. Reserveren gaat online, betalen doet u pas na de huurperiode.
        </p>
      </div>

      <div className="why-grid">
        {STEPS.map((step) => (
          <div className="wcard" key={step.title}>
            <div className="wi">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
            <span className="wtag">{step.tag}</span>
          </div>
        ))}

        <div className="wcard form">
          <div className="wf-l">
            <b>Sommige toestellen zijn zwaar. Til niet, laat leveren.</b>
            <span>
              Een professionele bouwdroger weegt al snel 30 tot 50 kg. Zelf tillen, zeker op een
              trap, is niet zonder risico. Bent u wat ouder of fysiek minder sterk? Kies dan een
              pakket met levering: wij dragen, plaatsen en stellen alles in — u hoeft niets te
              tillen.
            </span>
            <Link className="btn btn-white" to="/verhuur/calculator">
              Bekijk pakketten met levering
              <ArrowRightIcon size={14} />
            </Link>
          </div>
          <img
            className="wf-men"
            src="/vernast/oudere-man.webp"
            alt="Oudere man met rugpijn na het tillen van een zwaar toestel"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

export default V3Pickup;
