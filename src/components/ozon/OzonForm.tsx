import { useState, type ChangeEvent } from "react";
import { ArrowRightIcon, FileIcon, UploadIcon } from "@/components/home-v3/icons";
import { isValidEmail, maskEmail, maskPhone } from "@/lib/inputMask";
import {
  MAX_FILES,
  filterAcceptable,
  formatFileSize,
  uploadFormFiles,
} from "@/lib/formUploads";
import { CONTACT } from "@/lib/site";

/**
 * Het boekingsformulier van /ozonbehandeling.
 *
 * Opgebouwd zoals `V3Cta`: gegevens eerst, de situatie daarna, en alles wat de
 * bezoeker typte blijft op het scherm staan als het versturen faalt. Dat is
 * geen detail — wie na een schimmelprobleem tien velden invult en ze kwijt
 * raakt, vult ze geen tweede keer in.
 *
 * Versturen gaat naar `/api/ozon`, dat de aanvraag in het bouwdrogers-portaal
 * zet. Foto's lopen langs `/api/vraag-uploads` rechtstreeks naar storage; bij
 * schimmel is een foto vaak sneller dan een beschrijving, dus ze staan hier
 * prominenter dan op de homepage.
 */

/** Waarvoor de behandeling bedoeld is — de sleutels komen terug in `api/ozon.ts`. */
const SITUATIES = [
  { value: "schimmel", label: "Schimmel: ozon na het ontschimmelen" },
  { value: "geur", label: "Hardnekkige geur (vocht, rook, huisdier, brand)" },
  { value: "huisstofmijt", label: "Huisstofmijt of allergie" },
  { value: "waterschade", label: "Ontsmetting na waterschade" },
  { value: "overdracht", label: "Fris maken voor verhuur of verkoop" },
  { value: "advies", label: "Ik weet het nog niet — graag advies" },
] as const;

const TERMIJNEN = [
  { value: "zo_snel_mogelijk", label: "Zo snel mogelijk" },
  { value: "deze_week", label: "Deze week" },
  { value: "binnen_twee_weken", label: "Binnen twee weken" },
  { value: "later", label: "Later of nog te bepalen" },
] as const;

/*
  Of de schimmel al verwijderd is, bepaalt wat wij voorstellen: ozon ruimt op wat
  ná het ontschimmelen achterblijft. Staat de schimmel er nog, dan belt het team
  eerst daarover in plaats van een behandeling in te plannen die te vroeg komt.
  Die vraag hier stellen scheelt een plaatsbezoek met een voorspelbare uitkomst.
*/
const ONTSCHIMMELD = [
  { value: "ja", label: "Ja, de zichtbare schimmel is weg" },
  { value: "nee", label: "Nee, de schimmel zit er nog" },
  { value: "weet_niet", label: "Weet ik niet / niet van toepassing" },
] as const;

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

/** Telefoon en e-mail lopen door hun masker; de rest gaat zoals getypt. */
const MASKS: Partial<Record<keyof Details, (value: string) => string>> = {
  tel: maskPhone,
  mail: maskEmail,
};

const OzonForm = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [details, setDetails] = useState<Details>(EMPTY);
  const [situatie, setSituatie] = useState<string>(SITUATIES[0].value);
  const [termijn, setTermijn] = useState<string>(TERMIJNEN[0].value);
  const [ontschimmeld, setOntschimmeld] = useState<string>(ONTSCHIMMELD[2].value);
  const [ruimtes, setRuimtes] = useState("");
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
    Een ozonbehandeling wordt bij de mensen thuis uitgevoerd, dus het adres is
    hier geen bijzaak: zonder gemeente weet de planning niet of de rit past. Het
    e-mailadres is de harde eis omdat de Vernast-kant daarop een bestaande klant
    herkent; het telefoonnummer blijft optioneel.
  */
  const detailsComplete =
    details.voornaam.trim().length > 1 &&
    details.naam.trim().length > 1 &&
    isValidEmail(details.mail) &&
    details.post.trim().length > 3 &&
    details.gemeente.trim().length > 1;

  const addFiles = (event: ChangeEvent<HTMLInputElement>) => {
    const { accepted, rejected } = filterAcceptable(Array.from(event.target.files ?? []));

    setSkipped(rejected);
    setFiles((current) => [...current, ...accepted].slice(0, MAX_FILES));
    event.target.value = "";
  };

  const submit = async () => {
    setSending(true);
    setError(null);
    setSkipped([]);

    try {
      const { paths, failed } = await uploadFormFiles(files);

      const response = await fetch("/api/ozon", {
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
          situatie,
          termijn,
          ruimtes,
          ontschimmeld,
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
    <div className="ozf" id="boeken">
      <div className="ozf-steps">
        <span className={step === 1 ? "on" : undefined}>1. Uw gegevens</span>
        <span className={step === 2 ? "on" : undefined}>2. Uw situatie</span>
      </div>

      {step === 1 && (
        <div className="ozf-p">
          <div className="ozf-row two">
            <div className="ozf-f">
              <label htmlFor="ozVoor">Voornaam</label>
              <input
                type="text"
                id="ozVoor"
                autoComplete="given-name"
                placeholder="Voornaam"
                value={details.voornaam}
                onChange={set("voornaam")}
              />
            </div>
            <div className="ozf-f">
              <label htmlFor="ozNaam">Achternaam</label>
              <input
                type="text"
                id="ozNaam"
                autoComplete="family-name"
                placeholder="Achternaam"
                value={details.naam}
                onChange={set("naam")}
              />
            </div>
          </div>
          <div className="ozf-row two">
            <div className="ozf-f">
              <label htmlFor="ozTel">Telefoon</label>
              <input
                type="tel"
                id="ozTel"
                autoComplete="tel"
                inputMode="tel"
                placeholder="0470 00 00 00"
                value={details.tel}
                onChange={set("tel")}
              />
            </div>
            <div className="ozf-f">
              <label htmlFor="ozMail">E-mail</label>
              <input
                type="email"
                id="ozMail"
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
          <div className="ozf-row street">
            <div className="ozf-f">
              <label htmlFor="ozStraat">Straat</label>
              <input
                type="text"
                id="ozStraat"
                autoComplete="address-line1"
                placeholder="Straatnaam"
                value={details.straat}
                onChange={set("straat")}
              />
            </div>
            <div className="ozf-f">
              <label htmlFor="ozNr">Nr / bus</label>
              <input
                type="text"
                id="ozNr"
                placeholder="12 / A"
                value={details.nr}
                onChange={set("nr")}
              />
            </div>
          </div>
          <div className="ozf-row city">
            <div className="ozf-f">
              <label htmlFor="ozPost">Postcode</label>
              <input
                type="text"
                id="ozPost"
                inputMode="numeric"
                autoComplete="postal-code"
                placeholder="2630"
                value={details.post}
                onChange={set("post")}
              />
            </div>
            <div className="ozf-f">
              <label htmlFor="ozGem">Gemeente</label>
              <input
                type="text"
                id="ozGem"
                autoComplete="address-level2"
                placeholder="Bv. Aartselaar"
                value={details.gemeente}
                onChange={set("gemeente")}
              />
            </div>
          </div>
          <button
            type="button"
            className="ozbtn ozbtn-red ozf-next"
            disabled={!detailsComplete}
            onClick={() => setStep(2)}
          >
            Volgende: uw situatie <ArrowRightIcon size={13} strokeWidth={2.6} />
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="ozf-p">
          <div className="ozf-f">
            <label htmlFor="ozSit">Waarvoor heeft u een ozonbehandeling nodig?</label>
            <select id="ozSit" value={situatie} onChange={(e) => setSituatie(e.target.value)}>
              {SITUATIES.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="ozf-row two">
            <div className="ozf-f">
              <label htmlFor="ozTerm">Wanneer mag het gebeuren?</label>
              <select id="ozTerm" value={termijn} onChange={(e) => setTermijn(e.target.value)}>
                {TERMIJNEN.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="ozf-f">
              <label htmlFor="ozOnt">Is de schimmel al verwijderd?</label>
              <select
                id="ozOnt"
                value={ontschimmeld}
                onChange={(e) => setOntschimmeld(e.target.value)}
              >
                {ONTSCHIMMELD.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="ozf-f">
            <label htmlFor="ozRuim">Welke ruimtes, en hoe groot ongeveer?</label>
            <input
              type="text"
              id="ozRuim"
              placeholder="Bv. kelder 30 m² + slaapkamer 14 m², plafond 2,4 m"
              value={ruimtes}
              onChange={(e) => setRuimtes(e.target.value)}
            />
            <small className="ozf-hint">
              Het volume bepaalt het ozondebiet en de duur. Een schatting volstaat.
            </small>
          </div>
          <div className="ozf-f">
            <label htmlFor="ozMsg">Uw situatie</label>
            <textarea
              id="ozMsg"
              rows={4}
              placeholder="Bv. muffe geur in de kelder sinds de waterschade in oktober, muur is behandeld en droog, geur blijft."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <label className="ozf-drop" htmlFor="ozFiles">
            <UploadIcon />
            <b>Foto&apos;s van de schimmel of de ruimte toevoegen</b>
            <small>
              Eén foto zegt vaak meer dan drie zinnen (jpg, png, webp of pdf)
            </small>
            <input
              type="file"
              id="ozFiles"
              multiple
              accept="image/*,.pdf,.doc,.docx"
              onChange={addFiles}
            />
          </label>
          <div className="ozf-files">
            {files.map((file, i) => (
              <div className="ozfile" key={`${file.name}-${i}`}>
                <FileIcon />
                <b>{file.name}</b>
                <span>{formatFileSize(file.size)}</span>
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
            <p className="ozf-note" role="status">
              Niet toegevoegd: {skipped.join(", ")} — alleen jpg, png, webp, pdf of Word;
              foto&apos;s tot 30 MB, documenten tot 10 MB.
            </p>
          )}
          {error && (
            <p className="ozf-error" role="alert">
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

          <div className="ozf-nav">
            <button
              type="button"
              className="ozf-back"
              disabled={sending}
              onClick={() => setStep(1)}
            >
              ← Terug
            </button>
            <button
              type="button"
              className="ozbtn ozbtn-red"
              disabled={message.trim().length < 5 || sending}
              onClick={submit}
            >
              {sending ? "Versturen…" : "Vraag mijn ozonbehandeling aan"}
            </button>
          </div>
          <p className="ozf-legal">
            Wij gebruiken uw gegevens enkel om uw behandeling in te plannen.
          </p>
        </div>
      )}

      {step === 3 && (
        <div className="ozf-p">
          <div className="ozf-done">
            <span>✓</span>
            <h3>Uw aanvraag is verstuurd.</h3>
            <p>
              Bedankt! Een specialist belt u binnen één werkdag om de behandeling in te plannen en
              zegt eerlijk of ozon in uw situatie het juiste middel is. Dringend? Bel{" "}
              <a href={`tel:${CONTACT.phoneE164}`}>{CONTACT.phoneLocal}</a>.
            </p>
            {skipped.length > 0 && (
              <p className="ozf-note">
                Deze bijlagen konden niet mee: {skipped.join(", ")}. Mail ze gerust na naar{" "}
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default OzonForm;
