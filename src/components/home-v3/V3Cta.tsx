import { useCopy } from "@/i18n/useTaal";
import { COPY } from "./V3Cta.copy";
import VraagFormulier from "./VraagFormulier";

/**
 * Het slotblok van de homepage: kop links, vraagformulier rechts.
 *
 * Het formulier zelf staat in `VraagFormulier`, zodat de inhoudspagina's
 * (`ContactBlok`) precies hetzelfde formulier tonen.
 */
const V3Cta = () => {
  const t = useCopy(COPY);

  return (
    <section className="cta" id="contact">
      <div className="wrap cta-grid">
        <div className="cta-l">
          <span className="kick">{t.kick}</span>
          <h2>{t.h2}</h2>
          <p>{t.intro}</p>
        </div>

        <div className="cta-r vq-r">
          <VraagFormulier id="cform" />
        </div>
      </div>
    </section>
  );
};

export default V3Cta;
