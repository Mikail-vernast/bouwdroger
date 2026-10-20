import { MAIL_TO } from "@/hooks/useAanvraag";
import "@/styles/aanvraag.css";

/**
 * De markup die de drie aanvraagformulieren (contact, klantenservice, levering)
 * delen. De verzendlogica zit in `useAanvraag`.
 */

/**
 * Honeypot: verborgen voor bezoekers, een bot vult hem in. De server antwoordt
 * dan met succes en stuurt niets door (zie `api/aanvraag.ts`).
 */
export const AanvraagHoneypot = () => (
  <input
    type="text"
    name="website"
    tabIndex={-1}
    autoComplete="off"
    aria-hidden="true"
    defaultValue=""
    className="aanv-hp"
  />
);

/** De foutmelding, met de mailto als laatste uitweg. */
export const AanvraagError = ({ error, mailto }: { error: string | null; mailto: string | null }) =>
  error ? (
    <p className="aanv-err" role="alert">
      {error}
      {mailto && (
        <>
          {" "}
          Of <a href={mailto}>mail uw vraag rechtstreeks</a> naar {MAIL_TO}.
        </>
      )}
    </p>
  ) : null;

/** Het bevestigingspaneel na verzenden. */
export const AanvraagDone = ({
  title = "Vraag verzonden",
  text = "Bedankt! We nemen binnen één werkdag contact met u op.",
}: {
  title?: string;
  text?: string;
}) => (
  <div className="aanv-done" role="status">
    <div className="aanv-done-ic">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </div>
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
);
