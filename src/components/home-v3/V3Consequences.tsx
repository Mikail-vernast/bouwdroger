import type { ReactNode } from "react";
import { BoltIcon, HouseIcon, MoldIcon } from "./icons";

interface Consequence {
  icon: ReactNode;
  title: string;
  body: string;
  tag: string;
}

const CONSEQUENCES: Consequence[] = [
  {
    icon: <BoltIcon />,
    title: "Uw planning loopt vast",
    body: "Vloerders, schilders en keukenbouwers kunnen niet starten op een vochtige ondergrond. Elke week wachten schuift uw hele bouwplanning én uw verhuisdatum op.",
    tag: "Gevolg — tijd & kosten",
  },
  {
    icon: <MoldIcon />,
    title: "Schimmel en ongezonde lucht",
    body: "Vanaf 48 uur vochtigheid begint schimmel te groeien — achter plinten, onder vloeren, in isolatie. Dat betekent muffe geur, allergieën en luchtwegklachten.",
    tag: "Gevolg — gezondheid",
  },
  {
    icon: <HouseIcon />,
    title: "Blijvende schade aan het gebouw",
    body: "Hout gaat rotten, chape scheurt, pleisterwerk komt los en isolatie verliest haar waarde. Herstellen kost een veelvoud van wat drogen zou hebben gekost.",
    tag: "Gevolg — structuur",
  },
];

const V3Consequences = () => (
  <section className="why" id="voordelen" aria-labelledby="voordelen-heading">
    <div className="wrap">
      <div className="sec-head">
        <span className="kick">Wat u vermijdt</span>
        <h2 className="sec" id="voordelen-heading">
          Wat u vermijdt door tijdig te drogen.
        </h2>
        <p className="lede">
          Vertraging van vloerder, schilder of keukenplaatser. Schimmel en muffe lucht. Schade aan
          plinten, vloeren en afwerkingslagen. Alle drie te vermijden met een ingreep van enkele
          dagen.
        </p>
      </div>

      <div className="why-grid">
        {CONSEQUENCES.map((item) => (
          <div className="wcard" key={item.title}>
            <div className="wi">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <span className="wtag">{item.tag}</span>
          </div>
        ))}

        <div className="wcard photo">
          <img className="wph" src="/design/worker-thumb.png" alt="Vernast droogexpert" />
          <div className="wpt">
            <b>Wij nemen het over</b>
            <span>Berekend, geleverd, geplaatst en opgevolgd — u hoeft niets te gokken.</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default V3Consequences;
