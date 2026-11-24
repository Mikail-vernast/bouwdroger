import { Link } from "react-router-dom";
import VraagFormulier from "@/components/home-v3/VraagFormulier";
import type { Subject } from "@/components/home-v3/V3Cta.copy";
import { useCopy, useLokaalPad, type Copy } from "@/i18n/useTaal";

const COPY = {
  nl: {
    kicker: "Een vraag over uw situatie?",
    prijs: "Liever meteen een prijs?",
    bereken: "Bereken uw droogpakket",
  },
  fr: {
    kicker: "Une question sur votre situation ?",
    prijs: "Vous préférez un prix tout de suite ?",
    bereken: "Calculez votre pack de séchage",
  },
  en: {
    kicker: "A question about your situation?",
    prijs: "Rather have a price straight away?",
    bereken: "Calculate your drying package",
  },
} satisfies Copy<Record<string, string>>;

/**
 * Het vraagformulier onderaan een inhoudspagina: de kop van de pagina, met
 * daaronder hetzelfde formulier als op de homepage (`VraagFormulier`).
 *
 * Tot 24-11-2026 had dit blok een eigen formulier zonder adres dat naar
 * `/api/aanvraag` ging met `source: "levering"`. Een lead zonder adres kan de
 * qualifier niet inplannen, en de bezoeker kreeg een ander formulier dan op
 * de homepage. Nu gaat elke vraag via `/api/vraag`; `page_url` vertelt het
 * portaal van welke pagina ze kwam.
 */
const ContactBlok = ({
  kicker,
  titel,
  lede,
  onderwerp,
  placeholder,
  /**
   * `rood` is het slotakkoord van een pagina; `wit` als het formulier op een
   * rode sectie volgt en twee rode blokken op elkaar zouden staan.
   */
  achtergrond = "rood",
}: {
  kicker?: string;
  titel: string;
  lede: string;
  /** Het onderwerp dat vooraf gekozen staat — het meest waarschijnlijke voor deze pagina. */
  onderwerp?: Subject;
  placeholder?: string;
  achtergrond?: "rood" | "wit";
}) => {
  const t = useCopy(COPY);
  const lp = useLokaalPad();

  return (
    <section className={achtergrond === "wit" ? "oform licht" : "oform"} id="formulier">
      <div className="wrap">
        <div className="sec-head mid" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
          <span className="kick">{kicker ?? t.kicker}</span>
          <h2 className="sec">{titel}</h2>
          <p className="lede" style={{ marginLeft: "auto", marginRight: "auto" }}>{lede}</p>
        </div>
        <VraagFormulier onderwerp={onderwerp} berichtPh={placeholder} />
        <p className="vq-na">
          {t.prijs} <Link to={lp("/verhuur/calculator")}>{t.bereken}</Link>.
        </p>
      </div>
    </section>
  );
};

export default ContactBlok;
