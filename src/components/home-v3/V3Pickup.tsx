import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { DEPOSIT_GROSS } from "@/lib/booking";
import { euroInt } from "@/lib/verhuur";
import { formatEuro, useCopy, useLokaalPad, type Copy } from "@/i18n/useTaal";
import { ArrowRightIcon, CalendarCheckIcon, MailIcon, PinIcon, RefreshIcon } from "./icons";

const ICONS: ReactNode[] = [
  <CalendarCheckIcon key="kalender" size={19} height={16} />,
  <MailIcon key="mail" size={19} strokeWidth={1.8} />,
  <PinIcon key="pin" />,
  <RefreshIcon key="retour" size={19} />,
];

type PickupStep = { title: string; body: string; tag: string };

interface PickupCopy {
  steps: PickupStep[];
  kick: string;
  h2: string;
  lede: string;
  zwaarB: string;
  zwaarS: string;
  zwaarBtn: string;
  zwaarAlt: string;
}

const COPY = {
  nl: {
    steps: [
      {
        title: "Reserveer online",
        // Reserveren kostte hier lang niets vooraf. Dat klopt niet meer: een
        // afhaalreservatie legt echte toestellen apart, dus ze wordt bevestigd met
        // hetzelfde voorschot als een pakket — of meteen volledig betaald.
        body: `Kies uw toestel, huurperiode en afhaalmoment (bv. tussen 08:00 en 10:00). U betaalt volledig online met 5% korting, of ${euroInt(DEPOSIT_GROSS)} voorschot.`,
        tag: "Stap 01, reservatie",
      },
      {
        title: "Bevestiging binnen het uur",
        body: "U ontvangt uw reservatiebevestiging met routebeschrijving en wat u meebrengt: enkel uw identiteitskaart en de bevestiging op uw telefoon.",
        tag: "Stap 02, bevestiging",
      },
      {
        title: "Afhalen langs de A12",
        body: "Uw toestel staat klaar aan ons afhaalpunt: Boomsesteenweg 12 / Unit 11, 2630 Aartselaar. Betaalde u een voorschot, dan scant u hier onze QR-code en rekent u af met Bancontact, kaart of Apple Pay. Wij laden mee in.",
        tag: "Stap 03, afhaling",
      },
      {
        title: "Terugbrengen, klaar",
        body: "Breng het toestel terug op het afgesproken moment, ma–vr tussen 08:00 en 17:00. Uw factuur staat dan al in uw mailbox.",
        tag: "Stap 04, retour",
      },
    ],
    kick: "Zelf afhalen",
    h2: "Liever zelf afhalen? Zo werkt het.",
    lede: "Losse toestellen haalt u zelf af aan ons afhaalpunt langs de A12 in Aartselaar, tegen lagere afhaalprijzen. Reserveren gaat online, betalen doet u vooraf of bij de afhaling.",
    zwaarB: "Sommige toestellen zijn zwaar. Til niet, laat leveren.",
    zwaarS: "Een professionele bouwdroger weegt al snel 30 tot 50 kg. Zelf tillen, zeker op een trap, is niet zonder risico. Bent u wat ouder of fysiek minder sterk? Kies dan een pakket met levering: wij dragen, plaatsen en stellen alles in. U hoeft niets te tillen.",
    zwaarBtn: "Bekijk pakketten met levering",
    zwaarAlt: "Oudere man met rugpijn na het tillen van een zwaar toestel",
  },
  fr: {
    steps: [
      {
        title: "Réservez en ligne",
        body: `Choisissez votre appareil, la période de location et le moment d'enlèvement (p. ex. entre 08:00 et 10:00). Vous payez tout en ligne avec 5 % de réduction, ou un acompte de ${formatEuro(DEPOSIT_GROSS, "fr", Number.isInteger(DEPOSIT_GROSS) ? 0 : 2)}.`,
        tag: "Étape 01, réservation",
      },
      {
        title: "Confirmation dans l'heure",
        body: "Vous recevez votre confirmation de réservation avec l'itinéraire et ce que vous devez apporter : uniquement votre carte d'identité et la confirmation sur votre téléphone.",
        tag: "Étape 02, confirmation",
      },
      {
        title: "Enlèvement le long de l'A12",
        body: "Votre appareil vous attend à notre point d'enlèvement : Boomsesteenweg 12 / Unit 11, 2630 Aartselaar. Si vous avez payé un acompte, vous scannez ici notre code QR et réglez par Bancontact, carte ou Apple Pay. Nous vous aidons à charger.",
        tag: "Étape 03, enlèvement",
      },
      {
        title: "Ramenez-le, c'est fini",
        body: "Ramenez l'appareil au moment convenu, du lundi au vendredi entre 08:00 et 17:00. Votre facture se trouve alors déjà dans votre boîte mail.",
        tag: "Étape 04, retour",
      },
    ],
    kick: "Enlèvement sur place",
    h2: "Vous préférez venir chercher l'appareil ? Voici comment faire.",
    lede: "Les appareils seuls s'enlèvent à notre point d'enlèvement le long de l'A12 à Aartselaar, à des prix d'enlèvement plus bas. La réservation se fait en ligne, le paiement à l'avance ou lors de l'enlèvement.",
    zwaarB: "Certains appareils sont lourds. Ne portez pas, faites livrer.",
    zwaarS: "Un déshumidificateur de chantier professionnel pèse vite 30 à 50 kg. Le porter vous-même, surtout dans un escalier, n'est pas sans risque. Vous êtes un peu plus âgé ou moins fort physiquement ? Choisissez alors un pack avec livraison : nous portons, installons et réglons tout. Vous n'avez rien à porter.",
    zwaarBtn: "Voir les packs avec livraison",
    zwaarAlt: "Homme âgé avec des douleurs au dos après avoir porté un appareil lourd",
  },
  en: {
    steps: [
      {
        title: "Book online",
        body: `Choose your unit, hire period and collection time (e.g. between 08:00 and 10:00). You pay in full online with a 5% discount, or a deposit of ${formatEuro(DEPOSIT_GROSS, "en", Number.isInteger(DEPOSIT_GROSS) ? 0 : 2)}.`,
        tag: "Step 01, booking",
      },
      {
        title: "Confirmation within the hour",
        body: "You receive your booking confirmation with directions and what to bring: just your ID card and the confirmation on your phone.",
        tag: "Step 02, confirmation",
      },
      {
        title: "Collect by the A12",
        body: "Your unit is ready at our collection point: Boomsesteenweg 12 / Unit 11, 2630 Aartselaar. If you paid a deposit, you scan our QR code here and pay by Bancontact, card or Apple Pay. We help you load up.",
        tag: "Step 03, collection",
      },
      {
        title: "Bring it back, done",
        body: "Return the unit at the agreed time, Mon–Fri between 08:00 and 17:00. Your invoice will already be in your inbox.",
        tag: "Step 04, return",
      },
    ],
    kick: "Collect it yourself",
    h2: "Rather collect it yourself? Here is how it works.",
    lede: "Individual units are collected from our collection point by the A12 in Aartselaar, at lower collection prices. Booking is online; you pay in advance or on collection.",
    zwaarB: "Some units are heavy. Do not lift, have it delivered.",
    zwaarS: "A professional construction dehumidifier easily weighs 30 to 50 kg. Lifting it yourself, especially on stairs, is not without risk. Are you a bit older or less physically strong? Then choose a package with delivery: we carry, set up and adjust everything. You do not have to lift a thing.",
    zwaarBtn: "View packages with delivery",
    zwaarAlt: "Older man with back pain after lifting a heavy unit",
  },
} satisfies Copy<PickupCopy>;

const V3Pickup = () => {
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const rooster = useRef<HTMLDivElement>(null);
  const [gelopen, setGelopen] = useState(false);

  /*
    De vier icoonvakjes lopen één voor één van rood naar groen zodra de rij in
    beeld komt: dat maakt van vier losse kaarten een volgorde die je afwerkt.
    Rood is de begintoestand en staat gewoon in de geprerenderde HTML -- een
    bezoeker zonder JavaScript ziet vier rode stappen, niet vier lege vakjes.
    Dat is dezelfde reden waarom `Reveal` zijn begintoestand pas ná mount zet.

    Loopt één keer. Een kringetje dat blijft draaien trekt de aandacht weg van
    de tekst ernaast, en de stappen zijn geen voortgangsbalk.
  */
  useEffect(() => {
    const el = rooster.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setGelopen(true);
      return;
    }
    const kijker = new IntersectionObserver(
      (rijen) => {
        if (!rijen.some((rij) => rij.isIntersecting)) return;
        setGelopen(true);
        kijker.disconnect();
      },
      { threshold: 0.35 },
    );
    kijker.observe(el);
    return () => kijker.disconnect();
  }, []);

  return (
  <section className="why" id="voordelen">
    <div className="wrap">
      <div className="sec-head">
        <span className="kick">{t.kick}</span>
        <h2 className="sec">{t.h2}</h2>
        <p className="lede">{t.lede}</p>
      </div>

      <div className={gelopen ? "why-grid stappen" : "why-grid"} ref={rooster}>
        {t.steps.map((step, i) => (
          <div className="wcard" key={step.title} style={{ "--stap": i } as CSSProperties}>
            <div className="wi">{ICONS[i]}</div>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
            <span className="wtag">{step.tag}</span>
          </div>
        ))}

        <div className="wcard form">
          <div className="wf-l">
            <b>{t.zwaarB}</b>
            <span>{t.zwaarS}</span>
            <Link className="btn btn-white" to={lp("/verhuur/calculator")}>
              {t.zwaarBtn}
              <ArrowRightIcon size={14} />
            </Link>
          </div>
          {/*
            `width`/`height` zijn hier geen opmaak maar de verhouding waarmee de
            browser de plek vrijhoudt vóór de foto binnen is. Op mobiel valt de
            `height: 330px` uit de desktopregel weg en bleef alleen
            `max-height`, dus stond deze afbeelding op nul tot ze laadde — en
            groeide de sectie op dat moment onder de vinger van de bezoeker weg.
            Dit blok alleen was goed voor 0,057 van de CLS. De CSS blijft de
            getekende maat bepalen; deze twee getallen alleen de verhouding.
          */}
          <img
            className="wf-men"
            src="/vernast/oudere-man.webp"
            alt={t.zwaarAlt}
            width={1360}
            height={1440}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
  );
};

export default V3Pickup;
