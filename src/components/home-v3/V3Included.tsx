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
import { useCopy, useLokaalPad, type Copy } from "@/i18n/useTaal";

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

const INCLUDED_NL: { icon: ReactNode; title: string; body: string }[] = [
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
type Option = {
  icon: ReactNode;
  toon?: string;
  label?: string;
  title: string;
  body: string;
  /* Alleen waar er een pagina achter zit die méér zegt dan deze drie regels. */
  link?: { label: string; path: string };
};

const OPTIONS_NL: Option[] = [
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

/* Zelfde volgorde, iconen en tonen als hierboven; alleen de tekst verschilt. */
const INCLUDED_FR: typeof INCLUDED_NL = INCLUDED_NL.map((item, i) => ({
  ...item,
  ...[
    {
      title: "Livraison et enlèvement",
      body: "Livré à la date de votre choix et repris quand vous avez terminé. Gratuit dans notre région.",
    },
    {
      title: "Installation au rez-de-chaussée",
      body: "Notre technicien installe l'appareil, raccorde l'évacuation des condensats et règle tout correctement, avec une explication de base lors de l'installation.",
    },
    {
      title: "Durée flexible",
      body: "Prolongez en ligne en un clic ou arrêtez plus tôt. Vous payez uniquement les jours que vous utilisez.",
    },
    {
      title: "Accessoires et assistance",
      body: "Les accessoires standard comme les rallonges sont compris, et nos experts restent joignables pendant toute la location.",
    },
  ][i],
}));

const OPTIONS_FR: Option[] = OPTIONS_NL.map((option, i) => ({
  ...option,
  ...[
    {
      label: "Inclus",
      title: "Garantie de prolongation",
      body: "Pas encore sec dans la période prévue ? Une option de prolongation vous apporte une tranquillité d'esprit supplémentaire.",
    },
    {
      title: "Livraison express",
      body: "Pour les sinistres urgents ou les plannings serrés, nous prévoyons une livraison express.",
    },
    {
      title: "Évacuation automatique de l'eau",
      body: "Pour les séchages plus longs, une pompe à condensats évacue l'eau automatiquement, sans réservoirs à vider.",
      link: { label: "Comment fonctionne la pompe à condensats", path: "/verhuur/toebehoren/condenspomp" },
    },
    {
      title: "Rapport",
      body: "Pour les dossiers où la preuve compte, nous vous aidons avec un rapport ou une documentation technique.",
    },
  ][i],
}));

const INCLUDED_EN: typeof INCLUDED_NL = INCLUDED_NL.map((item, i) => ({
  ...item,
  ...[
    {
      title: "Delivery & collection",
      body: "Delivered on the date you choose and collected when you are done. Free in our region.",
    },
    {
      title: "Ground-floor installation",
      body: "Our technician sets up the unit, connects the condensate drain and adjusts everything correctly, with a basic explanation at installation.",
    },
    {
      title: "Flexible duration",
      body: "Extend online with one click or stop sooner. You only pay for the days you use.",
    },
    {
      title: "Accessories & support",
      body: "Standard accessories such as extension leads are included, and our experts are available for as long as you hire.",
    },
  ][i],
}));

const OPTIONS_EN: Option[] = OPTIONS_NL.map((option, i) => ({
  ...option,
  ...[
    {
      label: "Included",
      title: "Extension guarantee",
      body: "Not dry yet within the expected period? An extension option gives extra peace of mind.",
    },
    {
      title: "Express delivery",
      body: "For urgent damage cases or tight schedules, we arrange an express delivery.",
    },
    {
      title: "Automatic water drainage",
      body: "On longer jobs a condensate pump drains the water away automatically, so you do not have to empty any tanks.",
      link: { label: "How the condensate pump works", path: "/verhuur/toebehoren/condenspomp" },
    },
    {
      title: "Reporting",
      body: "For cases where evidence counts, we support you with reports or technical documentation.",
    },
  ][i],
}));

const COPY = {
  nl: {
    included: INCLUDED_NL,
    options: OPTIONS_NL,
    optie: "Optie",
    kick: "Prijzen & voorwaarden",
    h2: "Eén duidelijke prijs. Meer inbegrepen dan u denkt.",
    lede: "Bouwdroging moet duidelijk zijn. Daarom werken wij met transparante huurvoorwaarden en een serviceformule die u ontzorgt. U ziet de prijs bij het berekenen en boekt tegen exact dat tarief.",
    obAlt: "Vernast technicus met klembord",
    obH3: "Bij levering volledig ontzorgd. En 100% droog, gegarandeerd.*",
    obP: "Wij berekenen, leveren, installeren en volgen op. U hoeft niets te sjouwen of in te stellen. Niet droog binnen de berekende periode? Dan verlengt u maximaal kosteloos.",
    obBtn: "Start uw droging",
    obNote: "* Garantie geldt wanneer de externe omstandigheden aan onze richtlijnen voldoen.",
  },
  fr: {
    included: INCLUDED_FR,
    options: OPTIONS_FR,
    optie: "Option",
    kick: "Prix et conditions",
    h2: "Un prix clair. Plus de choses incluses que vous ne le pensez.",
    lede: "Le séchage de chantier doit être clair. C'est pourquoi nous travaillons avec des conditions de location transparentes et une formule de service qui vous décharge de tout. Vous voyez le prix au moment du calcul et réservez exactement à ce tarif.",
    obAlt: "Technicien Vernast avec un porte-bloc",
    obH3: "Entièrement pris en charge dès la livraison. Et sec à 100 %, garanti.*",
    obP: "Nous calculons, livrons, installons et assurons le suivi. Vous n'avez rien à porter ni à régler. Pas sec dans la période calculée ? Vous prolongez alors au maximum sans frais.",
    obBtn: "Lancez votre séchage",
    obNote: "* La garantie s'applique lorsque les conditions extérieures respectent nos directives.",
  },
  en: {
    included: INCLUDED_EN,
    options: OPTIONS_EN,
    optie: "Option",
    kick: "Prices & terms",
    h2: "One clear price. More included than you think.",
    lede: "Building drying should be clear. That is why we work with transparent hire terms and a service formula that takes the work off your hands. You see the price when you calculate and book at exactly that rate.",
    obAlt: "Vernast technician with a clipboard",
    obH3: "Fully taken care of on delivery. And 100% dry, guaranteed.*",
    obP: "We calculate, deliver, install and follow up. You do not have to carry or set up anything. Not dry within the calculated period? Then you extend at no extra cost, up to the maximum.",
    obBtn: "Start your drying",
    obNote: "* The guarantee applies when the external conditions meet our guidelines.",
  },
} satisfies Copy<{
  included: typeof INCLUDED_NL;
  options: Option[];
  optie: string;
  kick: string;
  h2: string;
  lede: string;
  obAlt: string;
  obH3: string;
  obP: string;
  obBtn: string;
  obNote: string;
}>;

const V3Included = () => {
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  return (
  <section className="incl" id="prijzen">
    <div className="wrap">
      <div className="sec-head">
        <span className="kick">{t.kick}</span>
        <h2 className="sec">{t.h2}</h2>
        <p className="lede">{t.lede}</p>
      </div>

      <div className="incl-grid">
        {t.included.map((item) => (
          <div className="ic" key={item.title}>
            <div className="ii">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>

      <div className="incl-x">
        {t.options.map((option) => (
          <div className={option.toon ? `ix ${option.toon}` : "ix"} key={option.title}>
            <div className="xt">
              {option.icon} {option.label ?? t.optie}
            </div>
            <h3>{option.title}</h3>
            <p>{option.body}</p>
            {option.link && (
              <Link className="ix-link" to={lp(option.link.path)}>
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
          alt={t.obAlt}
          width={1440}
          height={961}
          loading="lazy"
        />
        <div className="ob-body">
          <h3>{t.obH3}</h3>
          <p>{t.obP}</p>
          <Link className="ob-btn" to={lp("/verhuur/simulator")}>
            {t.obBtn}
            <ArrowRightIcon size={14} />
          </Link>
          <span className="ob-note">{t.obNote}</span>
        </div>
      </div>
    </div>
  </section>
  );
};

export default V3Included;
