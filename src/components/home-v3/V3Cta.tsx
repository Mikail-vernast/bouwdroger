import { useState, type ChangeEvent } from "react";
import { ArrowRightIcon, FileIcon, UploadIcon } from "./icons";
import { isValidEmail, maskEmail, maskPhone } from "@/lib/inputMask";

/**
 * The closing contact block: address details first, question second.
 *
 * Submitting posts to `/api/vraag`, which forwards the question to the Vernast
 * inbox — a support ticket for admin plus a lead for the qualifier. Attachments
 * go straight to storage over a signed URL handed out by `/api/vraag-uploads`,
 * so a 10 MB photo never travels through the serverless function.
 *
 * Every value the visitor typed stays on screen when sending fails: this form
 * used to swallow the whole thing, and losing it twice is worse than once.
 */
const SUBJECTS = [
  { value: "droging_op_maat", label: "Droging op maat" },
  { value: "waterschade", label: "Waterschade" },
  { value: "schimmel_geur", label: "Schimmel of geur" },
  { value: "offerte_prijs", label: "Offerte of prijs" },
  { value: "verzekeringsrapport", label: "Rapport voor verzekering" },
  { value: "andere_vraag", label: "Andere vraag" },
] as const;

/** Wat storage aanvaardt (zie de bucket `contact-attachments`). */
const ACCEPTED_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const MAX_FILES = 6;
const MAX_FILE_BYTES = 10 * 1024 * 1024;

interface UploadTicket {
  path: string;
  name: string;
  signed_url: string;
}

/**
 * Zet de gekozen bestanden in storage en geeft de paden terug die met de vraag
 * meegaan. Wat niet lukt, wordt overgeslagen — de vraag zelf is belangrijker dan
 * de bijlage, en de bezoeker leest achteraf welke bestanden niet meekonden.
 */
async function uploadFiles(files: File[]): Promise<{ paths: string[]; failed: string[] }> {
  if (files.length === 0) return { paths: [], failed: [] };

  const response = await fetch("/api/vraag-uploads", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ files: files.map((file) => ({ name: file.name, type: file.type })) }),
  });
  const data = (await response.json().catch(() => ({}))) as { uploads?: UploadTicket[] };
  const uploads = data.uploads ?? [];
  if (uploads.length === 0) return { paths: [], failed: files.map((file) => file.name) };

  const paths: string[] = [];
  const failed: string[] = [];

  await Promise.all(
    uploads.map(async (ticket, index) => {
      const file = files[index];
      if (!file) return;
      try {
        const put = await fetch(ticket.signed_url, {
          method: "PUT",
          headers: { "content-type": file.type || "application/octet-stream" },
          body: file,
        });
        if (put.ok) paths.push(ticket.path);
        else failed.push(file.name);
      } catch {
        failed.push(file.name);
      }
    }),
  );

  return { paths, failed };
}

interface Details {
  voornaam: string;
  naam: string;
  tel: string;
  mail: string;
  straat: string;
  nr: string;
  post: string;
  gemeente: string;
}

const EMPTY: Details = {
  voornaam: "",
  naam: "",
  tel: "",
  mail: "",
  straat: "",
  nr: "",
  post: "",
  gemeente: "",
};

/** Formats a file size the way the design writes it: kB under a megabyte. */
const fileSize = (bytes: number) =>
  bytes / 1024 > 999 ? `${(bytes / 1048576).toFixed(1)} MB` : `${Math.round(bytes / 1024)} kB`;

/** Phone and e-mail run through their mask; the rest is typed as-is. */
const MASKS: Partial<Record<keyof Details, (value: string) => string>> = {
  tel: maskPhone,
  mail: maskEmail,
};

const V3Cta = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [details, setDetails] = useState<Details>(EMPTY);
  const [subject, setSubject] = useState<string>(SUBJECTS[0].value);
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [skipped, setSkipped] = useState<string[]>([]);
  const [honeypot, setHoneypot] = useState("");

  const set = (key: keyof Details) => (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setDetails((current) => ({ ...current, [key]: MASKS[key]?.(value) ?? value }));
  };

  /*
    De Vernast-inbox herkent een bestaande lead op het e-mailadres, dus zonder
    adres kan de vraag niet door. Het formulier vroeg eerder telefoon óf mail;
    mail is nu de harde eis en het telefoonnummer blijft optioneel.
  */
  const detailsComplete =
    details.voornaam.trim().length > 1 &&
    details.naam.trim().length > 1 &&
    isValidEmail(details.mail) &&
    details.post.trim().length > 3 &&
    details.gemeente.trim().length > 1;

  const addFiles = (event: ChangeEvent<HTMLInputElement>) => {
    const picked = Array.from(event.target.files ?? []);
    const rejected: string[] = [];
    const accepted = picked.filter((file) => {
      const ok = ACCEPTED_TYPES.has(file.type) && file.size <= MAX_FILE_BYTES;
      if (!ok) rejected.push(file.name);
      return ok;
    });

    setSkipped(rejected);
    setFiles((current) => [...current, ...accepted].slice(0, MAX_FILES));
    event.target.value = "";
  };

  const submit = async () => {
    setSending(true);
    setError(null);
    setSkipped([]);

    try {
      const { paths, failed } = await uploadFiles(files);

      const response = await fetch("/api/vraag", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          voornaam: details.voornaam,
          achternaam: details.naam,
          email: details.mail,
          telefoon: details.tel,
          straat: details.straat,
          nummer: details.nr,
          postcode: details.post,
          gemeente: details.gemeente,
          onderwerp: subject,
          bericht: message,
          attachments: paths,
          page_url: typeof window === "undefined" ? null : window.location.href,
          website: honeypot,
        }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as { error?: string };
        setError(data.error ?? "Verzenden lukte niet. Probeer het opnieuw of bel 03 689 90 65.");
        return;
      }

      setSkipped(failed);
      setStep(3);
    } catch {
      setError("Verzenden lukte niet — controleer uw verbinding en probeer opnieuw.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="cta" id="contact">
      <div className="wrap cta-grid">
        <div className="cta-l">
          <span className="kick">Klaar om te starten?</span>
          <h2>Uw woning drogen start hier.</h2>
          <p>
            Stel hieronder meteen uw vraag — foto’s en documenten meesturen mag. Onze droogexperts
            antwoorden dezelfde werkdag.
          </p>
        </div>

        <div className="cta-r">
          <div className="cform" id="cform">
            <div className="cf-steps">
              <span className={step === 1 ? "on" : undefined}>1. Uw gegevens</span>
              <span className={step === 2 ? "on" : undefined}>2. Uw vraag</span>
            </div>

            {step === 1 && (
              <div className="cf-p">
                <div className="cf-row two">
                  <div className="cf-f">
                    <label htmlFor="ctVoor">Voornaam</label>
                    <input
                      type="text"
                      id="ctVoor"
                      autoComplete="given-name"
                      placeholder="Voornaam"
                      value={details.voornaam}
                      onChange={set("voornaam")}
                    />
                  </div>
                  <div className="cf-f">
                    <label htmlFor="ctNaam">Achternaam</label>
                    <input
                      type="text"
                      id="ctNaam"
                      autoComplete="family-name"
                      placeholder="Achternaam"
                      value={details.naam}
                      onChange={set("naam")}
                    />
                  </div>
                </div>
                <div className="cf-row two">
                  <div className="cf-f">
                    <label htmlFor="ctTel">Telefoon</label>
                    <input
                      type="tel"
                      id="ctTel"
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="0470 00 00 00"
                      value={details.tel}
                      onChange={set("tel")}
                    />
                  </div>
                  <div className="cf-f">
                    <label htmlFor="ctMail">E-mail</label>
                    <input
                      type="email"
                      id="ctMail"
                      autoComplete="email"
                      inputMode="email"
                      autoCapitalize="none"
                      spellCheck={false}
                      placeholder="naam@voorbeeld.be"
                      value={details.mail}
                      onChange={set("mail")}
                    />
                  </div>
                </div>
                <div className="cf-row two" style={{ gridTemplateColumns: "1.6fr .6fr" }}>
                  <div className="cf-f">
                    <label htmlFor="ctStraat">Straat</label>
                    <input
                      type="text"
                      id="ctStraat"
                      autoComplete="address-line1"
                      placeholder="Straatnaam"
                      value={details.straat}
                      onChange={set("straat")}
                    />
                  </div>
                  <div className="cf-f">
                    <label htmlFor="ctNr">Nr / bus</label>
                    <input
                      type="text"
                      id="ctNr"
                      placeholder="12 / A"
                      value={details.nr}
                      onChange={set("nr")}
                    />
                  </div>
                </div>
                <div className="cf-row two" style={{ gridTemplateColumns: ".6fr 1.6fr" }}>
                  <div className="cf-f">
                    <label htmlFor="ctPost">Postcode</label>
                    <input
                      type="text"
                      id="ctPost"
                      inputMode="numeric"
                      autoComplete="postal-code"
                      placeholder="2630"
                      value={details.post}
                      onChange={set("post")}
                    />
                  </div>
                  <div className="cf-f">
                    <label htmlFor="ctGem">Gemeente</label>
                    <input
                      type="text"
                      id="ctGem"
                      autoComplete="address-level2"
                      placeholder="Bv. Aartselaar"
                      value={details.gemeente}
                      onChange={set("gemeente")}
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-red cf-next"
                  disabled={!detailsComplete}
                  onClick={() => setStep(2)}
                >
                  Volgende: uw vraag <ArrowRightIcon size={13} strokeWidth={2.6} />
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="cf-p">
                <div className="cf-f">
                  <label htmlFor="ctSub">Waarover gaat uw vraag?</label>
                  <select
                    id="ctSub"
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                  >
                    {SUBJECTS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="cf-f">
                  <label htmlFor="ctMsg">Uw vraag</label>
                  <textarea
                    id="ctMsg"
                    rows={4}
                    placeholder="Omschrijf kort uw situatie: welke ruimte, wat is er gebeurd, wanneer moet het droog zijn?"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                  />
                </div>
                <label className="cf-drop" htmlFor="ctFiles">
                  <UploadIcon />
                  <b>Foto&apos;s of documenten toevoegen</b>
                  <small>
                    Foto&apos;s van de ruimte, plannen of verzekeringsdocumenten (pdf, jpg, png)
                  </small>
                  <input
                    type="file"
                    id="ctFiles"
                    multiple
                    accept="image/*,.pdf,.doc,.docx"
                    onChange={addFiles}
                  />
                </label>
                <div className="cf-files">
                  {files.map((file, i) => (
                    <div className="cfile" key={`${file.name}-${i}`}>
                      <FileIcon />
                      <b>{file.name}</b>
                      <span>{fileSize(file.size)}</span>
                      <button
                        type="button"
                        aria-label="Verwijder"
                        onClick={() => setFiles((current) => current.filter((_, j) => j !== i))}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
                {skipped.length > 0 && (
                  <p className="cf-note" role="status">
                    Niet toegevoegd: {skipped.join(", ")} — alleen jpg, png, webp, pdf of Word tot
                    10 MB.
                  </p>
                )}
                {error && (
                  <p className="cf-error" role="alert">
                    {error}
                  </p>
                )}

                {/* Honeypot: onzichtbaar voor bezoekers, ingevuld door bots. */}
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  value={honeypot}
                  onChange={(event) => setHoneypot(event.target.value)}
                  style={{ position: "absolute", left: "-9999px", width: 1, height: 1 }}
                />

                <div className="cf-nav">
                  <button
                    type="button"
                    className="cf-back"
                    disabled={sending}
                    onClick={() => setStep(1)}
                  >
                    ← Terug
                  </button>
                  <button
                    type="button"
                    className="btn btn-red"
                    disabled={message.trim().length < 5 || sending}
                    onClick={submit}
                  >
                    {sending ? "Versturen…" : "Verstuur mijn vraag"}
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="cf-p">
                <div className="cf-done">
                  <span>✓</span>
                  <h3>Uw vraag is verstuurd.</h3>
                  <p>
                    Bedankt! Een droogexpert neemt dezelfde werkdag contact met u op. Dringend? Bel{" "}
                    <a href="tel:+3236899065">03 689 90 65</a>.
                  </p>
                  {skipped.length > 0 && (
                    <p className="cf-note">
                      Deze bijlagen konden niet mee: {skipped.join(", ")}. Mail ze gerust na naar{" "}
                      <a href="mailto:info@vernast.be">info@vernast.be</a>.
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default V3Cta;
