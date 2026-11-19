import { Link } from "react-router-dom";
import { useCopy, useLokaalPad, type Copy } from "@/i18n/useTaal";
import { ArrowRightIcon } from "./icons";

/** The spore, odour and O₃ particles are pure CSS keyframes in the design. */
const SPORES = ["s1", "s2", "s3", "s4", "s5", "s6"];
const ODORS = ["d1", "d2", "d3"];
const OZONE = ["a", "b", "c", "d", "e"];

const COPY = {
  nl: {
    kick: "Schimmel- & geurbehandeling",
    h2: "Ozonbehandeling: schimmel en geur bij de bron aangepakt.",
    p1: "Ozon is actieve zuurstof die schimmelsporen, bacteriën en geurmoleculen oxideert, ook op plaatsen waar u zelf niet bij kan: achter plinten, in kieren en in zachte materialen. Geen maskering met geurstoffen, maar een grondige neutralisatie.",
    p2: "Wij zetten ozonbehandeling in na waterschade, bij schimmelvorming en bij hardnekkige muffe geuren, altijd in combinatie met een correcte droging én het aanpakken van de vochtoorzaak.",
    cta: "Bekijk de ozonbehandeling",
    animLabel: "Animatie: ozon breekt schimmel en geuren af",
    photoAlt: "Vochtschade op een muur",
    capB: "Ozon aan het werk",
    capS: "Sporen en geurmoleculen worden afgebroken, tot in elke kier.",
    chips: ["Geurneutralisatie", "Reiniging na schimmel & vocht", "Nr. 1 oplossing voor rokerswoningen"],
  },
  fr: {
    kick: "Traitement des moisissures et des odeurs",
    h2: "Traitement à l'ozone : moisissures et odeurs traitées à la source.",
    p1: "L'ozone est un oxygène actif qui oxyde les spores de moisissures, les bactéries et les molécules odorantes, même là où vous ne pouvez pas accéder : derrière les plinthes, dans les fissures et dans les matériaux souples. Pas de masquage par des parfums, mais une neutralisation en profondeur.",
    p2: "Nous utilisons le traitement à l'ozone après des dégâts des eaux, en cas de moisissures et d'odeurs de moisi persistantes, toujours en combinaison avec un séchage correct et le traitement de la cause de l'humidité.",
    cta: "Voir le traitement à l'ozone",
    animLabel: "Animation : l'ozone détruit les moisissures et les odeurs",
    photoAlt: "Dégâts d'humidité sur un mur",
    capB: "L'ozone au travail",
    capS: "Les spores et les molécules odorantes sont détruites, jusque dans chaque fissure.",
    chips: ["Neutralisation des odeurs", "Nettoyage après moisissures et humidité", "Solution n° 1 pour les logements de fumeurs"],
  },
  en: {
    kick: "Mould & odour treatment",
    h2: "Ozone treatment: mould and odours tackled at the source.",
    p1: "Ozone is active oxygen that oxidises mould spores, bacteria and odour molecules, even in places you cannot reach yourself: behind skirting boards, in gaps and in soft materials. No masking with fragrances, but a thorough neutralisation.",
    p2: "We use ozone treatment after water damage, when mould forms and for stubborn musty smells, always combined with correct drying and tackling the cause of the damp.",
    cta: "View the ozone treatment",
    animLabel: "Animation: ozone breaks down mould and odours",
    photoAlt: "Damp damage on a wall",
    capB: "Ozone at work",
    capS: "Spores and odour molecules are broken down, into every gap.",
    chips: ["Odour neutralisation", "Cleaning after mould & damp", "No. 1 solution for smokers' homes"],
  },
} satisfies Copy<{
  kick: string;
  h2: string;
  p1: string;
  p2: string;
  cta: string;
  animLabel: string;
  photoAlt: string;
  capB: string;
  capS: string;
  chips: string[];
}>;

const V3Ozon = () => {
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  return (
  <section className="ozon" id="ozon">
    <div className="wrap ozon-grid">
      <div>
        <span className="kick">{t.kick}</span>
        <h2 className="sec">{t.h2}</h2>
        <div className="obody" style={{ marginTop: 20 }}>
          <p>{t.p1}</p>
          <p>{t.p2}</p>
        </div>
        {/*
          Wees naar de pagina, niet naar de telefoon. Deze knop belde meteen,
          terwijl /ozonbehandeling sindsdien het volledige verhaal draagt én het
          boekingsformulier. Wie toch liever belt, vindt het nummer daar bovenaan
          naast dezelfde knop.
        */}
        <Link className="btn btn-red" to={lp("/ozonbehandeling")}>
          {t.cta} <ArrowRightIcon size={13} strokeWidth={2.6} />
        </Link>
      </div>

      <div className="ozon-anim" aria-label={t.animLabel}>
        <div className="oa-stage">
          <img
            className="oa-photo"
            src="/vernast/schimmel-muur.webp"
            alt={t.photoAlt}
            width={1440}
            height={1080}
            loading="lazy"
          />
          {SPORES.map((s) => (
            <span className={`spore ${s}`} key={s} />
          ))}
          {ODORS.map((d) => (
            <span className={`odor ${d}`} key={d} />
          ))}
          {OZONE.map((o) => (
            <span className={`o3 ${o}`} key={o}>
              O₃
            </span>
          ))}
          <div className="oa-cap">
            <b>{t.capB}</b>
            <span>{t.capS}</span>
          </div>
        </div>
        <div className="oa-chips">
          {t.chips.map((chip) => (
            <span key={chip}>{chip}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

export default V3Ozon;
