import { useState, type ChangeEvent } from "react";
import { ArrowRightIcon, FileIcon, UploadIcon } from "./icons";
import { isValidEmail, maskEmail, maskPhone } from "@/lib/inputMask";
import {
  MAX_FILES,
  filterAcceptable,
  formatFileSize,
  uploadFormFiles,
} from "@/lib/formUploads";
import { CONTACT } from "@/lib/site";
import { useCopy, useTaal, type Copy } from "@/i18n/useTaal";

/**
 * The closing contact block: address details first, question second.
 *
 * Submitting posts to `/api/vraag`, which forwards the question to the
 * bouwdroger portal in Vernast as a request with source `vraag` (decision of
 * 15-10-2026; it used to become an admin lead via `contact-submission`). Attachments
 * go straight to storage over a signed URL handed out by `/api/vraag-uploads`,
 * so a 10 MB photo never travels through the serverless function.
 *
 * Every value the visitor typed stays on screen when sending fails: this form
 * used to swallow the whole thing, and losing it twice is worse than once.
 */
const SUBJECTS = [
  "droging_op_maat",
  "waterschade",
  "schimmel_geur",
  "offerte_prijs",
  "verzekeringsrapport",
  "andere_vraag",
] as const;
type Subject = (typeof SUBJECTS)[number];

/*
  De waarde van een onderwerp gaat zo naar het portaal en blijft dus in elke
  taal dezelfde sleutel; alleen het label vertaalt.
*/
interface CtaCopy {
  subjects: Record<Subject, string>;
  kick: string;
  h2: string;
  intro: string;
  stap1: string;
  stap2: string;
  voornaam: string;
  achternaam: string;
  telefoon: string;
  email: string;
  emailPh: string;
  straat: string;
  straatPh: string;
  nr: string;
  postcode: string;
  gemeente: string;
  gemeentePh: string;
  volgende: string;
  onderwerp: string;
  vraag: string;
  vraagPh: string;
  bijlagen: string;
  bijlagenSub: string;
  verwijder: string;
  nietToegevoegd: (namen: string) => string;
  terug: string;
  versturen: string;
  verstuur: string;
  klaarH3: string;
  klaarP: string;
  nietMee: (namen: string) => string;
  fout: string;
  foutVerbinding: string;
}

const COPY = {
  nl: {
    subjects: {
      droging_op_maat: "Droging op maat",
      waterschade: "Waterschade",
      schimmel_geur: "Schimmel of geur",
      offerte_prijs: "Offerte of prijs",
      verzekeringsrapport: "Rapport voor verzekering",
      andere_vraag: "Andere vraag",
    },
    kick: "Klaar om te starten?",
    h2: "Uw woning drogen start hier.",
    intro:
      "Stel hieronder meteen uw vraag. Foto’s en documenten meesturen mag. Onze droogexperts antwoorden dezelfde werkdag.",
    stap1: "1. Uw gegevens",
    stap2: "2. Uw vraag",
    voornaam: "Voornaam",
    achternaam: "Achternaam",
    telefoon: "Telefoon",
    email: "E-mail",
    emailPh: "naam@voorbeeld.be",
    straat: "Straat",
    straatPh: "Straatnaam",
    nr: "Nr / bus",
    postcode: "Postcode",
    gemeente: "Gemeente",
    gemeentePh: "Bv. Aartselaar",
    volgende: "Volgende: uw vraag",
    onderwerp: "Waarover gaat uw vraag?",
    vraag: "Uw vraag",
    vraagPh:
      "Omschrijf kort uw situatie: welke ruimte, wat is er gebeurd, wanneer moet het droog zijn?",
    bijlagen: "Foto's of documenten toevoegen",
    bijlagenSub: "Foto's van de ruimte, plannen of verzekeringsdocumenten (pdf, jpg, png)",
    verwijder: "Verwijder",
    nietToegevoegd: (namen) =>
      `Niet toegevoegd: ${namen}. Alleen jpg, png, webp, pdf of Word; foto's tot 30 MB, documenten tot 10 MB.`,
    terug: "← Terug",
    versturen: "Versturen…",
    verstuur: "Verstuur mijn vraag",
    klaarH3: "Uw vraag is verstuurd.",
    klaarP: "Bedankt! Een droogexpert neemt dezelfde werkdag contact met u op. Dringend? Bel",
    nietMee: (namen) => `Deze bijlagen konden niet mee: ${namen}. Mail ze gerust na naar`,
    fout: "Verzenden lukte niet. Probeer het opnieuw of bel 03 689 90 65.",
    foutVerbinding: "Verzenden lukte niet. Controleer uw verbinding en probeer opnieuw.",
  },
  fr: {
    subjects: {
      droging_op_maat: "Séchage sur mesure",
      waterschade: "Dégâts des eaux",
      schimmel_geur: "Moisissures ou odeurs",
      offerte_prijs: "Devis ou prix",
      verzekeringsrapport: "Rapport pour l'assurance",
      andere_vraag: "Autre question",
    },
    kick: "Prêt à commencer ?",
    h2: "Le séchage de votre habitation commence ici.",
    intro:
      "Posez directement votre question ci-dessous. Vous pouvez joindre des photos et des documents. Nos experts en séchage répondent le jour ouvrable même.",
    stap1: "1. Vos coordonnées",
    stap2: "2. Votre question",
    voornaam: "Prénom",
    achternaam: "Nom",
    telefoon: "Téléphone",
    email: "E-mail",
    emailPh: "nom@exemple.be",
    straat: "Rue",
    straatPh: "Nom de rue",
    nr: "N° / boîte",
    postcode: "Code postal",
    gemeente: "Commune",
    gemeentePh: "P. ex. Aartselaar",
    volgende: "Suivant : votre question",
    onderwerp: "Sur quoi porte votre question ?",
    vraag: "Votre question",
    vraagPh:
      "Décrivez brièvement votre situation : quelle pièce, que s'est-il passé, pour quand cela doit-il être sec ?",
    bijlagen: "Ajouter des photos ou des documents",
    bijlagenSub: "Photos de la pièce, plans ou documents d'assurance (pdf, jpg, png)",
    verwijder: "Supprimer",
    nietToegevoegd: (namen) =>
      `Non ajouté\u202f: ${namen}. Uniquement jpg, png, webp, pdf ou Word\u202f; photos jusqu'à 30 Mo, documents jusqu'à 10 Mo.`,
    terug: "← Retour",
    versturen: "Envoi…",
    verstuur: "Envoyer ma question",
    klaarH3: "Votre question a été envoyée.",
    klaarP: "Merci ! Un expert en séchage vous contacte le jour ouvrable même. Urgent ? Appelez le",
    nietMee: (namen) => `Ces pièces jointes n'ont pas pu être envoyées\u202f: ${namen}. N'hésitez pas à les envoyer par e-mail à`,
    fout: "L'envoi n'a pas abouti. Réessayez ou appelez le 03 689 90 65.",
    foutVerbinding: "L'envoi n'a pas abouti. Vérifiez votre connexion et réessayez.",
  },
} satisfies Copy<CtaCopy>;

/*
  De bijlagen gaan via `src/lib/formUploads.ts` naar storage — dezelfde module
  als het ozonformulier op /ozonbehandeling. De grenzen en de reden erachter
  staan daar; ze hoorden niet twee keer in de app te staan.
*/

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

/** Phone and e-mail run through their mask; the rest is typed as-is. */
const MASKS: Partial<Record<keyof Details, (value: string) => string>> = {
  tel: maskPhone,
  mail: maskEmail,
};

const V3Cta = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [details, setDetails] = useState<Details>(EMPTY);
  const t = useCopy(COPY);
  const taal = useTaal();
  const [subject, setSubject] = useState<string>(SUBJECTS[0]);
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
        /* De foutmelding van `api/vraag.ts` is Nederlands; op een Franse
           pagina tonen we liever de algemene Franse melding. */
        setError((taal === "nl" ? data.error : undefined) ?? t.fout);
        return;
      }

      setSkipped(failed);
      setStep(3);
    } catch {
      setError(t.foutVerbinding);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="cta" id="contact">
      <div className="wrap cta-grid">
        <div className="cta-l">
          <span className="kick">{t.kick}</span>
          <h2>{t.h2}</h2>
          <p>{t.intro}</p>
        </div>

        <div className="cta-r">
          <div className="cform" id="cform">
            <div className="cf-steps">
              <span className={step === 1 ? "on" : undefined}>{t.stap1}</span>
              <span className={step === 2 ? "on" : undefined}>{t.stap2}</span>
            </div>

            {step === 1 && (
              <div className="cf-p">
                <div className="cf-row two">
                  <div className="cf-f">
                    <label htmlFor="ctVoor">{t.voornaam}</label>
                    <input
                      type="text"
                      id="ctVoor"
                      autoComplete="given-name"
                      placeholder={t.voornaam}
                      value={details.voornaam}
                      onChange={set("voornaam")}
                    />
                  </div>
                  <div className="cf-f">
                    <label htmlFor="ctNaam">{t.achternaam}</label>
                    <input
                      type="text"
                      id="ctNaam"
                      autoComplete="family-name"
                      placeholder={t.achternaam}
                      value={details.naam}
                      onChange={set("naam")}
                    />
                  </div>
                </div>
                <div className="cf-row two">
                  <div className="cf-f">
                    <label htmlFor="ctTel">{t.telefoon}</label>
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
                    <label htmlFor="ctMail">{t.email}</label>
                    <input
                      type="email"
                      id="ctMail"
                      autoComplete="email"
                      inputMode="email"
                      autoCapitalize="none"
                      spellCheck={false}
                      placeholder={t.emailPh}
                      value={details.mail}
                      onChange={set("mail")}
                    />
                  </div>
                </div>
                <div className="cf-row two" style={{ gridTemplateColumns: "1.6fr .6fr" }}>
                  <div className="cf-f">
                    <label htmlFor="ctStraat">{t.straat}</label>
                    <input
                      type="text"
                      id="ctStraat"
                      autoComplete="address-line1"
                      placeholder={t.straatPh}
                      value={details.straat}
                      onChange={set("straat")}
                    />
                  </div>
                  <div className="cf-f">
                    <label htmlFor="ctNr">{t.nr}</label>
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
                    <label htmlFor="ctPost">{t.postcode}</label>
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
                    <label htmlFor="ctGem">{t.gemeente}</label>
                    <input
                      type="text"
                      id="ctGem"
                      autoComplete="address-level2"
                      placeholder={t.gemeentePh}
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
                  {t.volgende} <ArrowRightIcon size={13} strokeWidth={2.6} />
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="cf-p">
                <div className="cf-f">
                  <label htmlFor="ctSub">{t.onderwerp}</label>
                  <select
                    id="ctSub"
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                  >
                    {SUBJECTS.map((option) => (
                      <option key={option} value={option}>
                        {t.subjects[option]}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="cf-f">
                  <label htmlFor="ctMsg">{t.vraag}</label>
                  <textarea
                    id="ctMsg"
                    rows={4}
                    placeholder={t.vraagPh}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                  />
                </div>
                <label className="cf-drop" htmlFor="ctFiles">
                  <UploadIcon />
                  <b>{t.bijlagen}</b>
                  <small>{t.bijlagenSub}</small>
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
                      <span>{formatFileSize(file.size)}</span>
                      <button
                        type="button"
                        aria-label={t.verwijder}
                        onClick={() => setFiles((current) => current.filter((_, j) => j !== i))}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
                {skipped.length > 0 && (
                  <p className="cf-note" role="status">
                    {t.nietToegevoegd(skipped.join(", "))}
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
                    {t.terug}
                  </button>
                  <button
                    type="button"
                    className="btn btn-red"
                    disabled={message.trim().length < 5 || sending}
                    onClick={submit}
                  >
                    {sending ? t.versturen : t.verstuur}
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="cf-p">
                <div className="cf-done">
                  <span>✓</span>
                  <h3>{t.klaarH3}</h3>
                  <p>
                    {t.klaarP} <a href="tel:+3236899065">03 689 90 65</a>.
                  </p>
                  {skipped.length > 0 && (
                    <p className="cf-note">
                      {t.nietMee(skipped.join(", "))}{" "}
                      <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
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
