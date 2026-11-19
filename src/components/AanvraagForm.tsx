import { MAIL_TO } from "@/hooks/useAanvraag";
import { useCopy, type Copy } from "@/i18n/useTaal";
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

const COPY = {
  nl: {
    of: "Of",
    mailRechtstreeks: "mail uw vraag rechtstreeks",
    naar: "naar",
    doneTitel: "Vraag verzonden",
    doneTekst: "Bedankt! We nemen binnen één werkdag contact met u op.",
  },
  fr: {
    of: "Ou",
    mailRechtstreeks: "envoyez directement votre question par e-mail",
    naar: "à",
    doneTitel: "Question envoyée",
    doneTekst: "Merci ! Nous vous recontactons dans un délai d'un jour ouvrable.",
  },
  en: {
    of: "Or",
    mailRechtstreeks: "email your question directly",
    naar: "to",
    doneTitel: "Question sent",
    doneTekst: "Thank you! We will contact you within one working day.",
  },
} satisfies Copy<{ of: string; mailRechtstreeks: string; naar: string; doneTitel: string; doneTekst: string }>;

/** De foutmelding, met de mailto als laatste uitweg. */
export const AanvraagError = ({ error, mailto }: { error: string | null; mailto: string | null }) => {
  const t = useCopy(COPY);
  return error ? (
    <p className="aanv-err" role="alert">
      {error}
      {mailto && (
        <>
          {" "}
          {t.of} <a href={mailto}>{t.mailRechtstreeks}</a> {t.naar} {MAIL_TO}.
        </>
      )}
    </p>
  ) : null;
};

/** Het bevestigingspaneel na verzenden. */
export const AanvraagDone = ({
  title,
  text,
}: {
  title?: string;
  text?: string;
}) => {
  const t = useCopy(COPY);
  return (
  <div className="aanv-done" role="status">
    <div className="aanv-done-ic">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </div>
    <h3>{title ?? t.doneTitel}</h3>
    <p>{text ?? t.doneTekst}</p>
  </div>
  );
};
