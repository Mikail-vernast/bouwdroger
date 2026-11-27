import { Link } from "react-router-dom";
import { AanvraagDone, AanvraagError, AanvraagHoneypot } from "@/components/AanvraagForm";
import { useAanvraag } from "@/hooks/useAanvraag";
import { ArrowRightIcon, PhoneIcon } from "@/components/home-v3/icons";
import { CONTACT } from "@/lib/site";
import { useCopy, useLokaalPad, type Copy } from "@/i18n/useTaal";

const COPY = {
  nl: {
    kicker: "Een vraag over uw situatie?",
    doneTitel: "Vraag verzonden",
    doneTekst: "Bedankt. Een droogspecialist neemt binnen één werkdag contact met u op.",
    voornaam: "Voornaam",
    naam: "Naam",
    achternaam: "Achternaam",
    email: "E-mail",
    emailVb: "naam@voorbeeld.be",
    tel: "Telefoon",
    onderwerp: "Waarover gaat uw vraag?",
    situatie: "Uw situatie",
    privacy: "Wij gebruiken uw gegevens enkel om uw vraag te beantwoorden. Liever meteen een prijs?",
    bereken: "Bereken uw droogpakket",
    versturen: "Versturen…",
    verstuur: "Verstuur uw vraag",
  },
  fr: {
    kicker: "Une question sur votre situation ?",
    doneTitel: "Question envoyée",
    doneTekst: "Merci. Un spécialiste du séchage vous recontacte dans un délai d'un jour ouvrable.",
    voornaam: "Prénom",
    naam: "Nom",
    achternaam: "Nom de famille",
    email: "E-mail",
    emailVb: "nom@exemple.be",
    tel: "Téléphone",
    onderwerp: "Quel est l'objet de votre question ?",
    situatie: "Votre situation",
    privacy: "Nous utilisons vos données uniquement pour répondre à votre question. Vous préférez un prix tout de suite ?",
    bereken: "Calculez votre pack de séchage",
    versturen: "Envoi…",
    verstuur: "Envoyer votre question",
  },
  en: {
    kicker: "A question about your situation?",
    doneTitel: "Question sent",
    doneTekst: "Thank you. A drying specialist will contact you within one working day.",
    voornaam: "First name",
    naam: "Name",
    achternaam: "Surname",
    email: "Email",
    emailVb: "name@example.be",
    tel: "Phone",
    onderwerp: "What is your question about?",
    situatie: "Your situation",
    privacy: "We only use your details to answer your question. Rather have a price straight away?",
    bereken: "Calculate your drying package",
    versturen: "Sending…",
    verstuur: "Send your question",
  },
} satisfies Copy<Record<string, string>>;

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
  kicker,
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
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const { status, error, mailto, handleSubmit, sending } = useAanvraag({
    source: "levering",
    messageField: "situatie",
    mailSubject: "Vraag via de site",
  });

  return (
    <section className={achtergrond === "wit" ? "oform licht" : "oform"} id="formulier">
      <div className="wrap">
        <div className="sec-head mid">
          <span className="kick">{kicker ?? t.kicker}</span>
          <h2 className="sec">{titel}</h2>
          <p className="lede">{lede}</p>
        </div>
        <div className="fshell">
          {status === "done" ? (
            <AanvraagDone
              title={t.doneTitel}
              text={t.doneTekst}
            />
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <AanvraagHoneypot />
              <div className="frow">
                <div className="fld">
                  <label htmlFor="cb-voornaam">{t.voornaam}</label>
                  <input id="cb-voornaam" name="voornaam" type="text" autoComplete="given-name" required placeholder={t.voornaam} />
                </div>
                <div className="fld">
                  <label htmlFor="cb-naam">{t.naam}</label>
                  <input id="cb-naam" name="naam" type="text" autoComplete="family-name" required placeholder={t.achternaam} />
                </div>
              </div>
              <div className="frow">
                <div className="fld">
                  <label htmlFor="cb-email">{t.email}</label>
                  <input id="cb-email" name="email" type="email" autoComplete="email" required placeholder={t.emailVb} />
                </div>
                <div className="fld">
                  <label htmlFor="cb-tel">{t.tel}</label>
                  <input id="cb-tel" name="telefoon" type="tel" autoComplete="tel" placeholder="04.." />
                </div>
              </div>
              <div className="frow one">
                <div className="fld">
                  <label htmlFor="cb-onderwerp">{t.onderwerp}</label>
                  <select id="cb-onderwerp" name="onderwerp" defaultValue={onderwerpen[0]}>
                    {onderwerpen.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="frow one">
                <div className="fld">
                  <label htmlFor="cb-situatie">{t.situatie}</label>
                  <textarea id="cb-situatie" name="situatie" rows={5} required placeholder={placeholder} />
                </div>
              </div>
              <AanvraagError error={error} mailto={mailto} />
              <div className="fsend">
                <small>
                  {t.privacy} <Link to={lp("/verhuur/simulator")}>{t.bereken}</Link>.
                </small>
                <div className="fbtns">
                  <a className="btn btn-line" href={`tel:${CONTACT.phoneE164}`}>
                    <PhoneIcon /> {CONTACT.phoneLocal}
                  </a>
                  <button className="btn" type="submit" disabled={sending}>
                    {sending ? t.versturen : t.verstuur}
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
