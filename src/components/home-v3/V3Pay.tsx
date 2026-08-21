import type { ReactNode } from "react";
import { CalendarCheckIcon, CardIcon, CheckIcon, RefreshIcon } from "./icons";

const CARDS: { icon: ReactNode; title: string; body: ReactNode }[] = [
  {
    icon: <CardIcon />,
    title: "Twee manieren om te betalen",
    body: (
      <>
        Betaal alles online en krijg <b>5% korting</b> op uw pakket, met uw factuur meteen in uw
        mailbox. Of bevestig met € 50 en betaal de rest bij levering.
      </>
    ),
  },
  {
    icon: <CalendarCheckIcon />,
    title: "Installatie zelf inplannen",
    body: "Kies bij uw boeking meteen de leverdatum en het tijdslot dat u past. U ontvangt direct uw bevestiging per e-mail.",
  },
  {
    icon: <RefreshIcon />,
    title: "Verlengen of stoppen met één klik",
    body: "Uw droging beheert u online: verleng wanneer nodig of plan de ophaling in zodra alles droog gemeten is.",
  },
];

const NOTES = [
  "5% korting bij volledig online betalen",
  "Factuur direct in uw mailbox",
];

const V3Pay = () => (
  <section className="pay" id="betalen">
    <div className="wrap">
      <div className="sec-head">
        <span className="kick">Volledig digitaal</span>
        <h2 className="sec">Boeken, betalen en plannen: alles online geregeld.</h2>
        <p className="lede">
          Geen offertes afwachten, geen heen-en-weer gebel. U regelt uw volledige droging digitaal,
          van berekening tot betaling en het inplannen van de installatie.
        </p>
      </div>

      <div className="pay-grid">
        {CARDS.map((card) => (
          <div className="pc" key={card.title}>
            <div className="pci">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </div>
        ))}
      </div>

      <div className="pay-bottom">
        <div className="pay-note">
          {NOTES.map((note) => (
            <span key={note}>
              <CheckIcon size={14} strokeWidth={2.4} /> {note}
            </span>
          ))}
        </div>
        <img
          className="pay-couple"
          src="/vernast/koppel-digitaal.webp"
          alt="Ouder koppel regelt de droging online met laptop en bankkaart"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default V3Pay;
