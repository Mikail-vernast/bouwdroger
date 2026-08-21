import { useState, type ChangeEvent } from "react";
import { ArrowRightIcon, FileIcon, UploadIcon } from "./icons";

/**
 * The closing contact block: address details first, question second.
 *
 * The design ships this without a backend — sending only swaps in the
 * confirmation panel. Wiring it to a real mail endpoint is a separate job;
 * until then nothing here leaves the browser.
 */
const SUBJECTS = [
  "Droging op maat",
  "Waterschade",
  "Schimmel of geur",
  "Offerte of prijs",
  "Rapport voor verzekering",
  "Andere vraag",
];

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

const V3Cta = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [details, setDetails] = useState<Details>(EMPTY);
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<File[]>([]);

  const set = (key: keyof Details) => (event: ChangeEvent<HTMLInputElement>) =>
    setDetails((current) => ({ ...current, [key]: event.target.value }));

  const detailsComplete =
    details.voornaam.trim().length > 1 &&
    details.naam.trim().length > 1 &&
    (details.tel.trim().length > 5 || /\S+@\S+\.\S+/.test(details.mail)) &&
    details.post.trim().length > 3 &&
    details.gemeente.trim().length > 1;

  const addFiles = (event: ChangeEvent<HTMLInputElement>) => {
    const picked = Array.from(event.target.files ?? []);
    setFiles((current) => [...current, ...picked]);
    event.target.value = "";
  };

  return (
    <section className="cta" id="contact">
      <div className="wrap cta-grid">
        <div className="cta-l">
          <span className="kick">Klaar om te starten?</span>
          <h2>Uw woning drogen start hier.</h2>
          <p>
            Stel hieronder meteen uw vraag, foto’s en documenten meesturen mag. Onze droogexperts
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
                      placeholder="04.."
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
                  <select id="ctSub">
                    {SUBJECTS.map((subject) => (
                      <option key={subject}>{subject}</option>
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
                <div className="cf-nav">
                  <button type="button" className="cf-back" onClick={() => setStep(1)}>
                    ← Terug
                  </button>
                  <button
                    type="button"
                    className="btn btn-red"
                    disabled={message.trim().length < 5}
                    onClick={() => setStep(3)}
                  >
                    Verstuur mijn vraag
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
