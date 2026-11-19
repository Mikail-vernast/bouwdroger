import { useState, type ChangeEvent } from "react";
import { useCopy, type Copy } from "@/i18n/useTaal";
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
const SITUATIES = ["schimmel", "geur", "huisstofmijt", "waterschade", "overdracht", "advies"] as const;

const TERMIJNEN = ["zo_snel_mogelijk", "deze_week", "binnen_twee_weken", "later"] as const;

/*
  Of de schimmel al verwijderd is, bepaalt wat wij voorstellen: ozon ruimt op wat
  ná het ontschimmelen achterblijft. Staat de schimmel er nog, dan belt het team
  eerst daarover in plaats van een behandeling in te plannen die te vroeg komt.
  Die vraag hier stellen scheelt een plaatsbezoek met een voorspelbare uitkomst.
*/
const ONTSCHIMMELD = ["ja", "nee", "weet_niet"] as const;

/*
  Alleen wat de bezoeker ziet is vertaald. De `value`s hierboven gaan
  onvertaald naar `api/ozon.ts`, dat er het Nederlandse label voor het portaal
  bij zoekt: een Franse of Engelse aanvraag komt bij het team dus in dezelfde woorden binnen.
*/
interface FormTekst {
  situaties: Record<(typeof SITUATIES)[number], string>;
  termijnen: Record<(typeof TERMIJNEN)[number], string>;
  ontschimmeld: Record<(typeof ONTSCHIMMELD)[number], string>;
  verstuurStandaard: string;
  /** `null`: de foutmelding van de server tonen (die is Nederlands). */
  serverFout: string | null;
  foutAlgemeen: string;
  foutVerbinding: string;
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
  vraagSituatie: string;
  vraagTermijn: string;
  vraagOntschimmeld: string;
  vraagRuimtes: string;
  ruimtesPh: string;
  ruimtesHint: string;
  uwSituatie: string;
  berichtPh: string;
  fotos: string;
  fotosSub: string;
  verwijder: string;
  nietToegevoegd: (namen: string) => string;
  terug: string;
  versturen: string;
  privacy: string;
  klaarTitel: string;
  klaarTekst: string;
  dringend: string;
  bijlagenNiet: (namen: string) => string;
}

const COPY = {
  nl: {
    situaties: {
      schimmel: "Schimmel: ozon na het ontschimmelen",
      geur: "Hardnekkige geur (vocht, rook, huisdier, brand)",
      huisstofmijt: "Huisstofmijt of allergie",
      waterschade: "Ontsmetting na waterschade",
      overdracht: "Fris maken voor verhuur of verkoop",
      advies: "Ik weet het nog niet, graag advies",
    },
    termijnen: {
      zo_snel_mogelijk: "Zo snel mogelijk",
      deze_week: "Deze week",
      binnen_twee_weken: "Binnen twee weken",
      later: "Later of nog te bepalen",
    },
    ontschimmeld: {
      ja: "Ja, de zichtbare schimmel is weg",
      nee: "Nee, de schimmel zit er nog",
      weet_niet: "Weet ik niet / niet van toepassing",
    },
    verstuurStandaard: "Vraag mijn ozonbehandeling aan",
    serverFout: null,
    foutAlgemeen: "Verzenden lukte niet. Probeer het opnieuw of bel 03 689 90 65.",
    foutVerbinding: "Verzenden lukte niet, controleer uw verbinding en probeer opnieuw.",
    stap1: "1. Uw gegevens",
    stap2: "2. Uw situatie",
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
    volgende: "Volgende: uw situatie",
    vraagSituatie: "Waarvoor heeft u een ozonbehandeling nodig?",
    vraagTermijn: "Wanneer mag het gebeuren?",
    vraagOntschimmeld: "Is de schimmel al verwijderd?",
    vraagRuimtes: "Welke ruimtes, en hoe groot ongeveer?",
    ruimtesPh: "Bv. kelder 30 m² + slaapkamer 14 m², plafond 2,4 m",
    ruimtesHint: "Het volume bepaalt het ozondebiet en de duur. Een schatting volstaat.",
    uwSituatie: "Uw situatie",
    berichtPh:
      "Bv. muffe geur in de kelder sinds de waterschade in oktober, muur is behandeld en droog, geur blijft.",
    fotos: "Foto's van de schimmel of de ruimte toevoegen",
    fotosSub: "Eén foto zegt vaak meer dan drie zinnen (jpg, png, webp of pdf)",
    verwijder: "Verwijder",
    nietToegevoegd: (namen) =>
      `Niet toegevoegd: ${namen} — alleen jpg, png, webp, pdf of Word; foto's tot 30 MB, documenten tot 10 MB.`,
    terug: "← Terug",
    versturen: "Versturen…",
    privacy: "Wij gebruiken uw gegevens enkel om uw behandeling in te plannen.",
    klaarTitel: "Uw aanvraag is verstuurd.",
    klaarTekst:
      "Bedankt! Een specialist belt u binnen één werkdag om de behandeling in te plannen en zegt eerlijk of ozon in uw situatie het juiste middel is.",
    dringend: "Dringend? Bel",
    bijlagenNiet: (namen) => `Deze bijlagen konden niet mee: ${namen}. Mail ze gerust na naar`,
  },
  fr: {
    situaties: {
      schimmel: "Moisissures : ozone après l'élimination des moisissures",
      geur: "Odeur tenace (humidité, fumée, animal, incendie)",
      huisstofmijt: "Acariens ou allergie",
      waterschade: "Désinfection après des dégâts des eaux",
      overdracht: "Assainir avant une location ou une vente",
      advies: "Je ne sais pas encore, j'aimerais un conseil",
    },
    termijnen: {
      zo_snel_mogelijk: "Dès que possible",
      deze_week: "Cette semaine",
      binnen_twee_weken: "Dans les deux semaines",
      later: "Plus tard ou à déterminer",
    },
    ontschimmeld: {
      ja: "Oui, les moisissures visibles ont disparu",
      nee: "Non, les moisissures sont toujours là",
      weet_niet: "Je ne sais pas / sans objet",
    },
    verstuurStandaard: "Demander mon traitement à l'ozone",
    /* De server antwoordt in het Nederlands; een Franse bezoeker krijgt de
       eigen melding, met hetzelfde advies. */
    serverFout: "L'envoi a échoué. Vérifiez vos données, réessayez ou appelez le 03 689 90 65.",
    foutAlgemeen: "L'envoi a échoué. Réessayez ou appelez le 03 689 90 65.",
    foutVerbinding: "L'envoi a échoué. Vérifiez votre connexion et réessayez.",
    stap1: "1. Vos coordonnées",
    stap2: "2. Votre situation",
    voornaam: "Prénom",
    achternaam: "Nom",
    telefoon: "Téléphone",
    email: "E-mail",
    emailPh: "nom@exemple.be",
    straat: "Rue",
    straatPh: "Nom de la rue",
    nr: "N° / boîte",
    postcode: "Code postal",
    gemeente: "Commune",
    gemeentePh: "P. ex. Aartselaar",
    volgende: "Suivant : votre situation",
    vraagSituatie: "Pour quoi avez-vous besoin d'un traitement à l'ozone ?",
    vraagTermijn: "Quand l'intervention peut-elle avoir lieu ?",
    vraagOntschimmeld: "Les moisissures ont-elles déjà été éliminées ?",
    vraagRuimtes: "Quelles pièces, et de quelle taille environ ?",
    ruimtesPh: "P. ex. cave 30 m² + chambre 14 m², plafond 2,4 m",
    ruimtesHint: "Le volume détermine le débit d'ozone et la durée. Une estimation suffit.",
    uwSituatie: "Votre situation",
    berichtPh:
      "P. ex. odeur de moisi dans la cave depuis les dégâts des eaux d'octobre, le mur est traité et sec, l'odeur persiste.",
    fotos: "Ajouter des photos des moisissures ou de la pièce",
    fotosSub: "Une photo en dit souvent plus que trois phrases (jpg, png, webp ou pdf)",
    verwijder: "Supprimer",
    nietToegevoegd: (namen) =>
      `Non ajouté\u00a0: ${namen}. Uniquement jpg, png, webp, pdf ou Word\u00a0; photos jusqu'à 30 Mo, documents jusqu'à 10 Mo.`,
    terug: "← Retour",
    versturen: "Envoi…",
    privacy: "Nous utilisons vos données uniquement pour planifier votre traitement.",
    klaarTitel: "Votre demande a été envoyée.",
    klaarTekst:
      "Merci ! Un spécialiste vous appelle dans un délai d'un jour ouvrable pour planifier le traitement et vous dit honnêtement si l'ozone est la bonne solution dans votre situation.",
    dringend: "Urgent ? Appelez le",
    bijlagenNiet: (namen) =>
      `Ces pièces jointes n'ont pas pu être envoyées\u00a0: ${namen}. N'hésitez pas à les envoyer par e-mail à`,
  },
  en: {
    situaties: {
      schimmel: "Mould: ozone after mould removal",
      geur: "Stubborn odour (damp, smoke, pets, fire)",
      huisstofmijt: "Dust mites or allergy",
      waterschade: "Disinfection after water damage",
      overdracht: "Freshening up before letting or selling",
      advies: "I'm not sure yet, I'd like advice",
    },
    termijnen: {
      zo_snel_mogelijk: "As soon as possible",
      deze_week: "This week",
      binnen_twee_weken: "Within two weeks",
      later: "Later or still to be decided",
    },
    ontschimmeld: {
      ja: "Yes, the visible mould has gone",
      nee: "No, the mould is still there",
      weet_niet: "Don't know / not applicable",
    },
    verstuurStandaard: "Request my ozone treatment",
    /* Zelfde reden als in het Frans: de server antwoordt in het Nederlands. */
    serverFout: "Sending failed. Please check your details, try again or call 03 689 90 65.",
    foutAlgemeen: "Sending failed. Please try again or call 03 689 90 65.",
    foutVerbinding: "Sending failed. Please check your connection and try again.",
    stap1: "1. Your details",
    stap2: "2. Your situation",
    voornaam: "First name",
    achternaam: "Surname",
    telefoon: "Phone",
    email: "Email",
    emailPh: "name@example.be",
    straat: "Street",
    straatPh: "Street name",
    nr: "No. / box",
    postcode: "Postcode",
    gemeente: "Town",
    gemeentePh: "E.g. Aartselaar",
    volgende: "Next: your situation",
    vraagSituatie: "What do you need an ozone treatment for?",
    vraagTermijn: "When can it take place?",
    vraagOntschimmeld: "Has the mould already been removed?",
    vraagRuimtes: "Which rooms, and roughly how big?",
    ruimtesPh: "E.g. cellar 30 m² + bedroom 14 m², ceiling 2.4 m",
    ruimtesHint: "The volume determines the ozone output and the duration. An estimate is fine.",
    uwSituatie: "Your situation",
    berichtPh:
      "E.g. musty smell in the cellar since the water damage in October, the wall has been treated and is dry, the smell remains.",
    fotos: "Add photos of the mould or the room",
    fotosSub: "One photo often says more than three sentences (jpg, png, webp or pdf)",
    verwijder: "Remove",
    nietToegevoegd: (namen) =>
      `Not added: ${namen}. Only jpg, png, webp, pdf or Word; photos up to 30 MB, documents up to 10 MB.`,
    terug: "← Back",
    versturen: "Sending…",
    privacy: "We only use your details to schedule your treatment.",
    klaarTitel: "Your request has been sent.",
    klaarTekst:
      "Thank you! A specialist will call you within one working day to schedule the treatment and tell you honestly whether ozone is the right solution in your situation.",
    dringend: "Urgent? Call",
    bijlagenNiet: (namen) => `These attachments could not be sent: ${namen}. Feel free to email them to`,
  },
} satisfies Copy<FormTekst>;

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

interface OzonFormProps {
  /**
   * Welke landingspagina het formulier draagt: `ozon` of `ontschimmeling`.
   * Gaat mee naar `api/ozon.ts` en bepaalt daar het onderwerp in het portaal —
   * zonder dit veld las elke aanvraag als "Ozonbehandeling", ook die van
   * /ontschimmeling.
   */
  dienst?: "ozon" | "ontschimmeling";
  /** Welke situatie vooraf aangevinkt staat. */
  situatieStandaard?: string;
  /** Tekst op de verstuurknop; de twee pagina's vragen iets anders. */
  verstuurLabel?: string;
}

const OzonForm = ({
  dienst = "ozon",
  situatieStandaard,
  verstuurLabel,
}: OzonFormProps) => {
  const t = useCopy(COPY);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [details, setDetails] = useState<Details>(EMPTY);
  const [situatie, setSituatie] = useState<string>(situatieStandaard ?? SITUATIES[0]);
  const [termijn, setTermijn] = useState<string>(TERMIJNEN[0]);
  const [ontschimmeld, setOntschimmeld] = useState<string>(ONTSCHIMMELD[2]);
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
          dienst,
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
        setError(data.error ? (t.serverFout ?? data.error) : t.foutAlgemeen);
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
    <div className="ozf" id="boeken">
      <div className="ozf-steps">
        <span className={step === 1 ? "on" : undefined}>{t.stap1}</span>
        <span className={step === 2 ? "on" : undefined}>{t.stap2}</span>
      </div>

      {step === 1 && (
        <div className="ozf-p">
          <div className="ozf-row two">
            <div className="ozf-f">
              <label htmlFor="ozVoor">{t.voornaam}</label>
              <input
                type="text"
                id="ozVoor"
                autoComplete="given-name"
                placeholder={t.voornaam}
                value={details.voornaam}
                onChange={set("voornaam")}
              />
            </div>
            <div className="ozf-f">
              <label htmlFor="ozNaam">{t.achternaam}</label>
              <input
                type="text"
                id="ozNaam"
                autoComplete="family-name"
                placeholder={t.achternaam}
                value={details.naam}
                onChange={set("naam")}
              />
            </div>
          </div>
          <div className="ozf-row two">
            <div className="ozf-f">
              <label htmlFor="ozTel">{t.telefoon}</label>
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
              <label htmlFor="ozMail">{t.email}</label>
              <input
                type="email"
                id="ozMail"
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
          <div className="ozf-row street">
            <div className="ozf-f">
              <label htmlFor="ozStraat">{t.straat}</label>
              <input
                type="text"
                id="ozStraat"
                autoComplete="address-line1"
                placeholder={t.straatPh}
                value={details.straat}
                onChange={set("straat")}
              />
            </div>
            <div className="ozf-f">
              <label htmlFor="ozNr">{t.nr}</label>
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
              <label htmlFor="ozPost">{t.postcode}</label>
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
              <label htmlFor="ozGem">{t.gemeente}</label>
              <input
                type="text"
                id="ozGem"
                autoComplete="address-level2"
                placeholder={t.gemeentePh}
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
            {t.volgende} <ArrowRightIcon size={13} strokeWidth={2.6} />
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="ozf-p">
          <div className="ozf-f">
            <label htmlFor="ozSit">{t.vraagSituatie}</label>
            <select id="ozSit" value={situatie} onChange={(e) => setSituatie(e.target.value)}>
              {SITUATIES.map((value) => (
                <option key={value} value={value}>
                  {t.situaties[value]}
                </option>
              ))}
            </select>
          </div>
          <div className="ozf-row two">
            <div className="ozf-f">
              <label htmlFor="ozTerm">{t.vraagTermijn}</label>
              <select id="ozTerm" value={termijn} onChange={(e) => setTermijn(e.target.value)}>
                {TERMIJNEN.map((value) => (
                  <option key={value} value={value}>
                    {t.termijnen[value]}
                  </option>
                ))}
              </select>
            </div>
            <div className="ozf-f">
              <label htmlFor="ozOnt">{t.vraagOntschimmeld}</label>
              <select
                id="ozOnt"
                value={ontschimmeld}
                onChange={(e) => setOntschimmeld(e.target.value)}
              >
                {ONTSCHIMMELD.map((value) => (
                  <option key={value} value={value}>
                    {t.ontschimmeld[value]}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="ozf-f">
            <label htmlFor="ozRuim">{t.vraagRuimtes}</label>
            <input
              type="text"
              id="ozRuim"
              placeholder={t.ruimtesPh}
              value={ruimtes}
              onChange={(e) => setRuimtes(e.target.value)}
            />
            <small className="ozf-hint">{t.ruimtesHint}</small>
          </div>
          <div className="ozf-f">
            <label htmlFor="ozMsg">{t.uwSituatie}</label>
            <textarea
              id="ozMsg"
              rows={4}
              placeholder={t.berichtPh}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <label className="ozf-drop" htmlFor="ozFiles">
            <UploadIcon />
            <b>{t.fotos}</b>
            <small>{t.fotosSub}</small>
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
                  aria-label={t.verwijder}
                  onClick={() => setFiles((current) => current.filter((_, j) => j !== i))}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          {skipped.length > 0 && (
            <p className="ozf-note" role="status">
              {t.nietToegevoegd(skipped.join(", "))}
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
              {t.terug}
            </button>
            <button
              type="button"
              className="ozbtn ozbtn-red"
              disabled={message.trim().length < 5 || sending}
              onClick={submit}
            >
              {sending ? t.versturen : (verstuurLabel ?? t.verstuurStandaard)}
            </button>
          </div>
          <p className="ozf-legal">{t.privacy}</p>
        </div>
      )}

      {step === 3 && (
        <div className="ozf-p">
          <div className="ozf-done">
            <span>✓</span>
            <h3>{t.klaarTitel}</h3>
            <p>
              {t.klaarTekst} {t.dringend}{" "}
              <a href={`tel:${CONTACT.phoneE164}`}>{CONTACT.phoneLocal}</a>.
            </p>
            {skipped.length > 0 && (
              <p className="ozf-note">
                {t.bijlagenNiet(skipped.join(", "))}{" "}
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
