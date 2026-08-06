import { ArrowRightIcon } from "./icons";

/** The spore, odour and O₃ particles are pure CSS keyframes in the design. */
const SPORES = ["s1", "s2", "s3", "s4", "s5", "s6"];
const ODORS = ["d1", "d2", "d3"];
const OZONE = ["a", "b", "c", "d", "e"];

const V3Ozon = () => (
  <section className="ozon" id="ozon">
    <div className="wrap ozon-grid">
      <div>
        <span className="kick">Schimmel- &amp; geurbehandeling</span>
        <h2 className="sec">Ozonbehandeling: schimmel en geur bij de bron aangepakt.</h2>
        <div className="obody" style={{ marginTop: 20 }}>
          <p>
            Ozon is actieve zuurstof die schimmelsporen, bacteriën en geurmoleculen oxideert, ook op
            plaatsen waar u zelf niet bij kan: achter plinten, in kieren en in zachte materialen.
            Geen maskering met geurstoffen, maar een grondige neutralisatie.
          </p>
          <p>
            Wij zetten ozonbehandeling in na waterschade, bij schimmelvorming en bij hardnekkige
            muffe geuren, altijd in combinatie met een correcte droging én het aanpakken van de
            vochtoorzaak.
          </p>
        </div>
        <a className="btn btn-red" href="tel:+3236899065">
          Vraag een ozonbehandeling aan <ArrowRightIcon size={13} strokeWidth={2.6} />
        </a>
      </div>

      <div className="ozon-anim" aria-label="Animatie: ozon breekt schimmel en geuren af">
        <div className="oa-stage">
          <img
            className="oa-photo"
            src="/vernast/schimmel-muur.webp"
            alt="Vochtschade op een muur"
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
            <b>Ozon aan het werk</b>
            <span>Sporen en geurmoleculen worden afgebroken, tot in elke kier.</span>
          </div>
        </div>
        <div className="oa-chips">
          <span>Geurneutralisatie</span>
          <span>Reiniging na schimmel &amp; vocht</span>
          <span>Nr. 1 oplossing voor rokerswoningen</span>
        </div>
      </div>
    </div>
  </section>
);

export default V3Ozon;
