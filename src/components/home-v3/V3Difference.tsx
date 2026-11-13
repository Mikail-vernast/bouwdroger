import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { CalcIcon, GammaIcon, OpvolgIcon, PrijsIcon, VerlengIcon } from "./icons";

/*
 * De nummers 01 t/m 05 suggereerden een volgorde die er niet is: dit zijn
 * vijf losse redenen, niet vijf stappen. Een icoon zegt bovendien meteen
 * waar de kaart over gaat, een cijfer pas na het lezen van de kop.
 */
const POINTS: { id: string; icon: ReactNode; title: string; body: string }[] = [
  {
    id: "calculator",
    icon: <CalcIcon />,
    title: "Slimme droogcalculator",
    body: "Berekent op basis van volume, situatie en toepassing welke droogoplossing nodig is. Zo vermijdt u onder- én overcapaciteit.",
  },
  {
    id: "prijs",
    icon: <PrijsIcon />,
    title: "All-in prijs zonder verrassingen",
    body: "Levering, ophaling, installatie op gelijkvloers en standaard toebehoren zoals verlengkabels zijn inbegrepen.",
  },
  {
    id: "gamma",
    icon: <GammaIcon />,
    title: "Afgestemd gamma",
    body: "Geen overgedimensioneerde toestellen, maar eco-bouwdrogers afgestemd op uw ruimte: nieuwbouw, renovatie, waterschade of koude ruimtes.",
  },
  {
    id: "opvolging",
    icon: <OpvolgIcon />,
    title: "Praktische opvolging",
    body: "U boekt online, ontvangt snel bevestiging en duidelijke instructies, en wij plaatsen de toestellen correct op locatie.",
  },
  {
    id: "verlengen",
    icon: <VerlengIcon />,
    title: "Flexibel verlengen",
    body: "Niet op tijd droog? Met een beperkte verlengoptie loopt uw planning niet vast en houdt u uw project onder controle.",
  },
];

const V3Difference = () => (
  <section
    className="dif"
    id="anders"
    style={{ background: "url('/vernast/bg-anders.webp') center / cover no-repeat" }}
  >
    <div className="wrap">
      <div className="sec-head">
        <span className="kick">Waarom Vernast anders is</span>
        <h2 className="sec">Waarom klanten niet meer willen gokken op bouwdroging.</h2>
        <p className="lede">
          {/* De ankertekst "bouwdroging" wijst naar de ene pagina die op die term
              moet ranken. In september 2026 verdeelden vier pagina's de
              vertoningen op "bouwdroging" onder elkaar, geen enkele hoger dan
              plek 25. */}
          In <Link to="/hoe-drogen-werkt">bouwdroging</Link> gaat het vaak fout op drie punten: het verkeerde toestel, een fout
          ingeschatte huurtermijn en onverwachte extra kosten. Vernast pakt net die pijnpunten aan:
          berekenen, correct dimensioneren, professioneel plaatsen en helder communiceren.
        </p>
      </div>
      <div className="dif-grid">
        {POINTS.map((point) => (
          <div className="df" key={point.id}>
            <div className="dfi">{point.icon}</div>
            <h3>{point.title}</h3>
            <p>{point.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default V3Difference;
