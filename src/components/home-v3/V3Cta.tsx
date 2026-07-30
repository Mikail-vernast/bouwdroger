import { Link } from "react-router-dom";
import { ArrowRightIcon } from "./icons";

const V3Cta = () => (
  <section className="cta" aria-labelledby="cta-heading">
    <img className="cta-art" src="/design/cta-art.jpg" alt="" aria-hidden="true" />

    <div className="cta-copy">
      <div className="wrap">
        <div className="cta-inner">
          <span className="kick onred">Klaar om te starten?</span>
          <h2 id="cta-heading">Stop met schatten. Start met gericht drogen.</h2>
          <p>
            Nieuwbouw droog krijgen, sneller afwerken na pleister- of chapewerken, of snel reageren op
            waterschade: bereken online wat u nodig heeft, boek meteen en laat de rest aan ons over.
          </p>
          <div className="c-ctas">
            <Link className="btn btn-white" to="/calculator">
              Start de calculator
              <ArrowRightIcon />
            </Link>
            <a className="btn btn-glass" href="#toestellen">
              Bekijk het gamma
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default V3Cta;
