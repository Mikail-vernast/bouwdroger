import type { ReactNode } from "react";
import { DEPOSIT_GROSS } from "@/lib/booking";
import { formatEuro, useCopy, type Copy } from "@/i18n/useTaal";
import { CalendarCheckIcon, CardIcon, CheckIcon, RefreshIcon } from "./icons";

const ICONS: ReactNode[] = [
  <CardIcon key="kaart" />,
  <CalendarCheckIcon key="kalender" />,
  <RefreshIcon key="verlengen" />,
];

/* Het bevestigingsbedrag in de Franse tekst komt uit de tarieven; zie V3Pickup. */
const voorschotFr = formatEuro(DEPOSIT_GROSS, "fr", Number.isInteger(DEPOSIT_GROSS) ? 0 : 2);

interface PayCopy {
  cards: { title: string; body: ReactNode }[];
  notes: string[];
  kick: string;
  h2: string;
  lede: string;
  alt: string;
}

const COPY = {
  nl: {
    cards: [
      {
        title: "Twee manieren om te betalen",
        body: (
          <>
            Betaal alles online en krijg <b>5% korting</b> op uw pakket, met uw factuur meteen in uw
            mailbox. Of bevestig met € 50 en betaal de rest bij levering.
          </>
        ),
      },
      {
        title: "Installatie zelf inplannen",
        body: "Kies bij uw boeking meteen de leverdatum en het tijdslot dat u past. U ontvangt direct uw bevestiging per e-mail.",
      },
      {
        title: "Verlengen of stoppen met één klik",
        body: "Uw droging beheert u online: verleng wanneer nodig of plan de ophaling in zodra alles droog gemeten is.",
      },
    ],
    notes: [
      "5% korting bij volledig online betalen",
      "Factuur direct in uw mailbox",
      "Of € 50 bevestiging + rest bij levering",
    ],
    kick: "Volledig digitaal",
    h2: "Boeken, betalen en plannen: alles online geregeld.",
    lede: "Geen offertes afwachten, geen heen-en-weer gebel. U regelt uw volledige droging digitaal, van berekening tot betaling en het inplannen van de installatie.",
    alt: "Ouder koppel regelt de droging online met laptop en bankkaart",
  },
  fr: {
    cards: [
      {
        title: "Deux façons de payer",
        body: (
          <>
            Payez tout en ligne et obtenez <b>5 % de réduction</b> sur votre pack, avec votre facture
            directement dans votre boîte mail. Ou confirmez avec {voorschotFr} et payez le reste à la
            livraison.
          </>
        ),
      },
      {
        title: "Planifiez vous-même l'installation",
        body: "Lors de votre réservation, choisissez directement la date de livraison et le créneau qui vous conviennent. Vous recevez immédiatement votre confirmation par e-mail.",
      },
      {
        title: "Prolonger ou arrêter en un clic",
        body: "Vous gérez votre séchage en ligne : prolongez si nécessaire ou planifiez l'enlèvement dès que tout est mesuré sec.",
      },
    ],
    notes: [
      "5 % de réduction en payant tout en ligne",
      "Facture directement dans votre boîte mail",
      `Ou ${voorschotFr} de confirmation + le reste à la livraison`,
    ],
    kick: "Entièrement numérique",
    h2: "Réserver, payer et planifier : tout se règle en ligne.",
    lede: "Pas besoin d'attendre des devis ni de multiplier les appels. Vous gérez tout votre séchage en ligne, du calcul au paiement et à la planification de l'installation.",
    alt: "Couple âgé qui organise le séchage en ligne avec un ordinateur portable et une carte bancaire",
  },
} satisfies Copy<PayCopy>;

const V3Pay = () => {
  const t = useCopy(COPY);
  return (
  <section className="pay" id="betalen">
    <div className="wrap">
      <div className="sec-head">
        <span className="kick">{t.kick}</span>
        <h2 className="sec">{t.h2}</h2>
        <p className="lede">{t.lede}</p>
      </div>

      <div className="pay-grid">
        {t.cards.map((card, i) => (
          <div className="pc" key={card.title}>
            <div className="pci">{ICONS[i]}</div>
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </div>
        ))}
      </div>

      <div className="pay-bottom">
        <div className="pay-note">
          {t.notes.map((note) => (
            <span key={note}>
              <CheckIcon size={14} strokeWidth={2.4} /> {note}
            </span>
          ))}
        </div>
        <img
          className="pay-couple"
          src="/vernast/koppel-digitaal.webp"
          alt={t.alt}
          width={1440}
          height={961}
          loading="lazy"
        />
      </div>
    </div>
  </section>
  );
};

export default V3Pay;
