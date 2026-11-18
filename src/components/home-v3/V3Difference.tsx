import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useCopy, useLokaalPad, type Copy } from "@/i18n/useTaal";
import { CalcIcon, GammaIcon, OpvolgIcon, PrijsIcon, VerlengIcon } from "./icons";

/*
 * De nummers 01 t/m 05 suggereerden een volgorde die er niet is: dit zijn
 * vijf losse redenen, niet vijf stappen. Een icoon zegt bovendien meteen
 * waar de kaart over gaat, een cijfer pas na het lezen van de kop.
 */
const ICONS: Record<string, ReactNode> = {
  calculator: <CalcIcon />,
  prijs: <PrijsIcon />,
  gamma: <GammaIcon />,
  opvolging: <OpvolgIcon />,
  verlengen: <VerlengIcon />,
};

type Point = { id: string; title: string; body: string };

interface DifCopy {
  points: Point[];
  kick: string;
  h2: string;
  /** De lede met de ankerlink in het midden; zie het commentaar in de JSX. */
  lede: (link: (tekst: string) => ReactNode) => ReactNode;
}

const COPY = {
  nl: {
    points: [
      {
        id: "calculator",
        title: "Slimme droogcalculator",
        body: "Berekent op basis van volume, situatie en toepassing welke droogoplossing nodig is. Zo vermijdt u onder- én overcapaciteit.",
      },
      {
        id: "prijs",
        title: "All-in prijs zonder verrassingen",
        body: "Levering, ophaling, installatie op gelijkvloers en standaard toebehoren zoals verlengkabels zijn inbegrepen.",
      },
      {
        id: "gamma",
        title: "Afgestemd gamma",
        body: "Geen overgedimensioneerde toestellen, maar eco-bouwdrogers afgestemd op uw ruimte: nieuwbouw, renovatie, waterschade of koude ruimtes.",
      },
      {
        id: "opvolging",
        title: "Praktische opvolging",
        body: "U boekt online, ontvangt snel bevestiging en duidelijke instructies, en wij plaatsen de toestellen correct op locatie.",
      },
      {
        id: "verlengen",
        title: "Flexibel verlengen",
        body: "Niet op tijd droog? Met een beperkte verlengoptie loopt uw planning niet vast en houdt u uw project onder controle.",
      },
    ],
    kick: "Waarom Vernast anders is",
    h2: "Waarom klanten niet meer willen gokken op bouwdroging.",
    lede: (link) => (
      <>
        In {link("bouwdroging")} gaat het vaak fout op drie punten: het verkeerde toestel, een fout
        ingeschatte huurtermijn en onverwachte extra kosten. Vernast pakt net die pijnpunten aan:
        berekenen, correct dimensioneren, professioneel plaatsen en helder communiceren.
      </>
    ),
  },
  fr: {
    points: [
      {
        id: "calculator",
        title: "Calculateur de séchage intelligent",
        body: "Détermine, sur la base du volume, de la situation et de l'application, quelle solution de séchage est nécessaire. Vous évitez ainsi la sous-capacité comme la surcapacité.",
      },
      {
        id: "prijs",
        title: "Un prix tout compris sans surprises",
        body: "La livraison, l'enlèvement, l'installation au rez-de-chaussée et les accessoires standard comme les rallonges sont inclus.",
      },
      {
        id: "gamma",
        title: "Une gamme adaptée",
        body: "Pas d'appareils surdimensionnés, mais des déshumidificateurs de chantier éco adaptés à votre espace : nouvelle construction, rénovation, dégâts des eaux ou pièces froides.",
      },
      {
        id: "opvolging",
        title: "Un suivi pratique",
        body: "Vous réservez en ligne, recevez rapidement une confirmation et des instructions claires, et nous installons correctement les appareils sur place.",
      },
      {
        id: "verlengen",
        title: "Prolongation flexible",
        body: "Pas sec à temps ? Grâce à une option de prolongation limitée, votre planning ne se bloque pas et vous gardez votre projet sous contrôle.",
      },
    ],
    kick: "Pourquoi Vernast est différent",
    h2: "Pourquoi les clients ne veulent plus jouer à la loterie avec le séchage de chantier.",
    lede: (link) => (
      <>
        En {link("séchage de chantier")}, les choses tournent souvent mal sur trois points{"\u202f"}: le
        mauvais appareil, une durée de location mal estimée et des frais supplémentaires imprévus.
        Vernast s'attaque justement à ces points sensibles : calculer, dimensionner correctement,
        installer de manière professionnelle et communiquer clairement.
      </>
    ),
  },
} satisfies Copy<DifCopy>;

const V3Difference = () => {
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  return (
  <section
    className="dif"
    id="anders"
    style={{ background: "url('/vernast/bg-anders.webp') center / cover no-repeat" }}
  >
    <div className="wrap">
      <div className="sec-head">
        <span className="kick">{t.kick}</span>
        <h2 className="sec">{t.h2}</h2>
        <p className="lede">
          {/* De ankertekst "bouwdroging" wijst naar de ene pagina die op die term
              moet ranken. In september 2026 verdeelden vier pagina's de
              vertoningen op "bouwdroging" onder elkaar, geen enkele hoger dan
              plek 25. */}
          {t.lede((tekst) => <Link to={lp("/hoe-drogen-werkt")}>{tekst}</Link>)}
        </p>
      </div>
      <div className="dif-grid">
        {t.points.map((point) => (
          <div className="df" key={point.id}>
            <div className="dfi">{ICONS[point.id]}</div>
            <h3>{point.title}</h3>
            <p>{point.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default V3Difference;
