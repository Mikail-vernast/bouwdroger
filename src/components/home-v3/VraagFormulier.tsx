import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  isValidEmail,
  isValidHouseNumber,
  isValidPhone,
  isValidPostcode,
  maskEmail,
  maskHouseNumber,
  maskName,
  maskPhone,
  maskPostcode,
  maskStreet,
} from "@/lib/inputMask";
import { CONTACT } from "@/lib/site";
import { useCopy, useLokaalPad, useTaal } from "@/i18n/useTaal";
import type { Adres } from "@/lib/adresZoeker";
import { COPY, SUBJECTS, type Subject } from "./V3Cta.copy";
import StraatVeld from "./StraatVeld";
import "@/styles/vraagformulier.css";

/**
 * Het vraagformulier van de site: één kaart, adres verplicht, adressuggesties
 * en invoermaskers. Staat onderaan de homepage (`V3Cta`) en onderaan elke
 * inhoudspagina (`ContactBlok`), zodat een vraag overal op dezelfde manier
 * binnenkomt (beslissing 24-11-2026).
 *
 * Versturen gaat naar `/api/vraag`: dat landt in het bouwdrogers-portaal
 * (`bouwdroger_requests`), via `bouwdroger-request-webhook` als lead in de
 * Lead Planner van de qualifier, en de bezoeker krijgt een
 * ontvangstbevestiging. `page_url` vertelt het portaal van welke pagina de
 * vraag kwam.
 *
 * De knop wordt nooit grijs bij foute invoer: klikken wijst het foute veld
 * aan. Mislukt het versturen, dan blijft alles staan.
 *
 * De opmaak hangt onder `.vq` (vraagformulier.css) en leunt alleen op de
 * tokens `--red`, `--txt`, `--txt-mid`, `--fb` en `--fd`, die elke schil zet.
 */

export interface VraagFormulierProps {
  /** Het onderwerp dat bij het openen gekozen staat — per pagina het meest waarschijnlijke. */
  onderwerp?: Subject;
  /** Voorbeeldtekst in het berichtveld; standaard die van de homepage. */
  berichtPh?: string;
  /** `id` van de kaart; de homepage linkt naar `#cform`. */
  id?: string;
}

interface Fields {
  naam: string;
  mail: string;
  tel: string;
  straat: string;
  nr: string;
  post: string;
  gemeente: string;
  bericht: string;
}

type Field = keyof Fields;
type Errors = Partial<Record<Field, string>>;

const EMPTY: Fields = { naam: "", mail: "", tel: "", straat: "", nr: "", post: "", gemeente: "", bericht: "" };

/** Every field except the message is formatted while typing. */
const MASKS: Partial<Record<Field, (value: string) => string>> = {
  naam: maskName,
  mail: maskEmail,
  tel: maskPhone,
  straat: maskStreet,
  nr: maskHouseNumber,
  post: maskPostcode,
  gemeente: maskName,
};

/** "Jan Van den Broeck" → ["Jan", "Van den Broeck"]; the API joins them again. */
function splitName(full: string): [string, string] {
  const [first = "", ...rest] = full.trim().split(/\s+/);
  return [first, rest.join(" ")];
}

const VraagFormulier = ({ onderwerp = SUBJECTS[0], berichtPh, id }: VraagFormulierProps) => {
  const t = useCopy(COPY);
  const taal = useTaal();
  const lp = useLokaalPad();

  const [fields, setFields] = useState<Fields>(EMPTY);
  const [subject, setSubject] = useState<Subject>(onderwerp);
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");

  const validate = (values: Fields): Errors => {
    const found: Errors = {};
    if (values.naam.trim().length < 2) found.naam = t.errNaam;
    if (!isValidEmail(values.mail)) found.mail = t.errEmail;
    // Phone is optional, but a half-typed number is worse than none.
    if (values.tel.trim() && !isValidPhone(values.tel)) found.tel = t.errTelefoon;
    // The address is required: a drying job needs a site, and the qualifier
    // cannot plan a visit for a lead without one (trg_sap_require_address).
    if (values.straat.trim().length < 2) found.straat = t.errStraat;
    if (!isValidHouseNumber(values.nr)) found.nr = t.errNummer;
    if (!isValidPostcode(values.post)) found.post = t.errPostcode;
    if (values.gemeente.trim().length < 2) found.gemeente = t.errGemeente;
    if (values.bericht.trim().length < 5) found.bericht = t.errBericht;
    return found;
  };

  const set = (key: Field) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const raw = event.target.value;
    const value = MASKS[key]?.(raw) ?? raw;
    setFields((current) => ({ ...current, [key]: value }));
    // Clear a field's error as soon as it is fixed, not on the next submit.
    if (errors[key]) setErrors((current) => ({ ...current, [key]: undefined }));
  };

  // A picked suggestion fills the whole address; a field the service leaves
  // empty keeps what the visitor already typed.
  const kiesAdres = (adres: Adres) => {
    setFields((current) => ({
      ...current,
      straat: maskStreet(adres.straat) || current.straat,
      nr: maskHouseNumber(adres.nr) || current.nr,
      post: maskPostcode(adres.postcode) || current.post,
      gemeente: maskName(adres.gemeente) || current.gemeente,
    }));
    setErrors((current) => ({ ...current, straat: undefined, nr: undefined, post: undefined, gemeente: undefined }));
    // A street without a number: the number is the one thing still missing.
    if (!adres.nr && !fields.nr) document.getElementById("ct-nr")?.focus();
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate(fields);
    setErrors(found);
    const first = (Object.keys(found) as Field[])[0];
    if (first) {
      document.getElementById(`ct-${first}`)?.focus();
      return;
    }

    setSending(true);
    setError(null);
    const [voornaam, achternaam] = splitName(fields.naam);

    try {
      const response = await fetch("/api/vraag", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          voornaam,
          achternaam,
          // maskName keeps a trailing space while typing; splitName already trims.
          email: fields.mail,
          telefoon: fields.tel,
          straat: fields.straat.trim(),
          nummer: fields.nr.trim(),
          postcode: fields.post,
          gemeente: fields.gemeente.trim(),
          onderwerp: subject,
          bericht: fields.bericht.trim(),
          attachments: [],
          page_url: typeof window === "undefined" ? null : window.location.href,
          website: honeypot,
        }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as { error?: string };
        // The API answers in Dutch; other languages get their own generic line.
        setError((taal === "nl" ? data.error : undefined) ?? t.fout);
        return;
      }
      setSent(true);
    } catch {
      setError(t.foutVerbinding);
    } finally {
      setSending(false);
    }
  };

  const input = (
    key: Field,
    props: { label: string; required?: boolean; placeholder?: string; type?: string; autoComplete?: string; inputMode?: "tel" | "email" | "numeric" },
  ) => (
    <div className={errors[key] ? "vq-f is-err" : "vq-f"} key={key}>
      <label htmlFor={`ct-${key}`}>
        {props.label} {props.required && <span className="vq-req">*</span>}
      </label>
      <input
        id={`ct-${key}`}
        type={props.type ?? "text"}
        autoComplete={props.autoComplete}
        inputMode={props.inputMode}
        placeholder={props.placeholder}
        value={fields[key]}
        onChange={set(key)}
        aria-invalid={errors[key] ? true : undefined}
        aria-describedby={errors[key] ? `ct-${key}-err` : undefined}
        {...(key === "mail" ? { autoCapitalize: "none", spellCheck: false } : {})}
      />
      {errors[key] && <span className="vq-err" id={`ct-${key}-err`}>{errors[key]}</span>}
    </div>
  );

  return (
    <div className="vq">
    {sent ? (
      <div className="vq-card vq-done" id={id} role="status">
        <span className="vq-check" aria-hidden="true">✓</span>
        <h3>{t.klaarH3}</h3>
        <p>
          {t.klaarP} <a href={`tel:${CONTACT.phoneE164}`}>{CONTACT.phoneLocal}</a>.
        </p>
      </div>
    ) : (
      <form className="vq-card" id={id} noValidate onSubmit={submit}>
        <div className="vq-grid">
          {input("naam", { label: t.naam, required: true, placeholder: t.naamPh, autoComplete: "name" })}
          {input("mail", { label: t.email, required: true, placeholder: t.emailPh, type: "email", autoComplete: "email", inputMode: "email" })}
          {input("tel", { label: t.telefoon, placeholder: "0470 00 00 00", type: "tel", autoComplete: "tel", inputMode: "tel" })}

          <div className="vq-f">
            <label htmlFor="ct-onderwerp">{t.onderwerp}</label>
            <select
              id="ct-onderwerp"
              value={subject}
              onChange={(event) => setSubject(event.target.value as Subject)}
            >
              {SUBJECTS.map((value) => (
                <option key={value} value={value}>
                  {t.subjects[value]}
                </option>
              ))}
            </select>
          </div>

          <div className="vq-pair vq-pair-straat vq-full">
            <StraatVeld
              value={fields.straat}
              nr={fields.nr}
              label={t.straat}
              placeholder={t.straatPh}
              lijstLabel={t.adresSuggesties}
              error={errors.straat}
              onChange={set("straat")}
              onKies={kiesAdres}
            />
            {input("nr", { label: t.nummer, required: true, placeholder: "12", autoComplete: "off" })}
          </div>
          <div className="vq-pair vq-pair-gemeente vq-full">
            {input("post", { label: t.postcode, required: true, placeholder: "2630", autoComplete: "postal-code" })}
            {input("gemeente", { label: t.gemeente, required: true, placeholder: t.gemeentePh, autoComplete: "address-level2" })}
          </div>

          <div className={errors.bericht ? "vq-f vq-full is-err" : "vq-f vq-full"}>
            <label htmlFor="ct-bericht">
              {t.bericht} <span className="vq-req">*</span>
            </label>
            <textarea
              id="ct-bericht"
              rows={5}
              maxLength={4000}
              placeholder={berichtPh ?? t.berichtPh}
              value={fields.bericht}
              onChange={set("bericht")}
              aria-invalid={errors.bericht ? true : undefined}
              aria-describedby={errors.bericht ? "ct-bericht-err" : undefined}
            />
            {errors.bericht && <span className="vq-err" id="ct-bericht-err">{errors.bericht}</span>}
          </div>
        </div>

        {/* Honeypot: invisible to visitors, filled in by bots. */}
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
          style={{ position: "absolute", left: "-9999px", width: 1, height: 1 }}
        />

        {error && <p className="vq-error" role="alert">{error}</p>}

        <button type="submit" className="vq-send" disabled={sending}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m22 2-7 20-4-9-9-4z" />
            <path d="M22 2 11 13" />
          </svg>
          {sending ? t.versturen : t.verstuur}
        </button>
        <p className="vq-legal">
          {t.privacy} <Link to={lp("/privacy")}>{t.privacyLink}</Link>.
        </p>
      </form>
    )}
    </div>
  );
};

export default VraagFormulier;
