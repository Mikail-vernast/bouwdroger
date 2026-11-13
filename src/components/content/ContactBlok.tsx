import { Link } from "react-router-dom";
import { AanvraagDone, AanvraagError, AanvraagHoneypot } from "@/components/AanvraagForm";
import { useAanvraag } from "@/hooks/useAanvraag";
import { ArrowRightIcon, PhoneIcon } from "@/components/home-v3/icons";
import { CONTACT } from "@/lib/site";

/**
 * Het vraagformulier onderaan een inhoudspagina.
 *
 * Verzendt via `useAanvraag` naar `/api/aanvraag`, zodat de vraag in het
 * Vernast-portaal landt. `source` is bewust `"levering"` en geen nieuwe waarde:
 * de webhook aan de portaalkant valideert `source` tegen zijn eigen lijst, en
 * een onbekende waarde zou daar geweigerd worden. Welke pagina de vraag
 * stelde, staat in `page_url`, dat de hook meestuurt.
 *
 * Let op het verschil met het formulier op /hoe-drogen-werkt: dat is markup uit
 * de designtranscriptie zónder handler en verstuurt dus niets. Dit blok wél.
 */
const ContactBlok = ({
  kicker = "Een vraag over uw situatie?",
  titel,
  lede,
  onderwerpen,
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
  /** De keuzes in "Waarover gaat uw vraag?" — per pagina anders. */
  onderwerpen: string[];
  placeholder: string;
  achtergrond?: "rood" | "wit";
}) => {
  const { status, error, mailto, handleSubmit, sending } = useAanvraag({
    source: "levering",
    messageField: "situatie",
    mailSubject: "Vraag via de site",
  });

  return (
    <section className={achtergrond === "wit" ? "oform licht" : "oform"} id="formulier">
      <div className="wrap">
        <div className="sec-head mid">
          <span className="kick">{kicker}</span>
          <h2 className="sec">{titel}</h2>
          <p className="lede">{lede}</p>
        </div>
        <div className="fshell">
          {status === "done" ? (
            <AanvraagDone
              title="Vraag verzonden"
              text="Bedankt. Een droogspecialist neemt binnen één werkdag contact met u op."
            />
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <AanvraagHoneypot />
              <div className="frow">
                <div className="fld">
                  <label htmlFor="cb-voornaam">Voornaam</label>
                  <input id="cb-voornaam" name="voornaam" type="text" autoComplete="given-name" required placeholder="Voornaam" />
                </div>
                <div className="fld">
                  <label htmlFor="cb-naam">Naam</label>
                  <input id="cb-naam" name="naam" type="text" autoComplete="family-name" required placeholder="Achternaam" />
                </div>
              </div>
              <div className="frow">
                <div className="fld">
                  <label htmlFor="cb-email">E-mail</label>
                  <input id="cb-email" name="email" type="email" autoComplete="email" required placeholder="naam@voorbeeld.be" />
                </div>
                <div className="fld">
                  <label htmlFor="cb-tel">Telefoon</label>
                  <input id="cb-tel" name="telefoon" type="tel" autoComplete="tel" placeholder="04.." />
                </div>
              </div>
              <div className="frow one">
                <div className="fld">
                  <label htmlFor="cb-onderwerp">Waarover gaat uw vraag?</label>
                  <select id="cb-onderwerp" name="onderwerp" defaultValue={onderwerpen[0]}>
                    {onderwerpen.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="frow one">
                <div className="fld">
                  <label htmlFor="cb-situatie">Uw situatie</label>
                  <textarea id="cb-situatie" name="situatie" rows={5} required placeholder={placeholder} />
                </div>
              </div>
              <AanvraagError error={error} mailto={mailto} />
              <div className="fsend">
                <small>
                  Wij gebruiken uw gegevens enkel om uw vraag te beantwoorden. Liever meteen een
                  prijs? <Link to="/verhuur/calculator">Bereken uw droogpakket</Link>.
                </small>
                <div className="fbtns">
                  <a className="btn btn-line" href={`tel:${CONTACT.phoneE164}`}>
                    <PhoneIcon /> {CONTACT.phoneLocal}
                  </a>
                  <button className="btn" type="submit" disabled={sending}>
                    {sending ? "Versturen…" : "Verstuur uw vraag"}
                    <ArrowRightIcon />
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactBlok;
