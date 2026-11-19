import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { u as useCopy } from "../main.mjs";
import { A as ArrowRightIcon, U as UploadIcon, F as FileIcon } from "./V3Header-BeIMcMg7.js";
import { i as isValidEmail, m as maskEmail, a as maskPhone } from "./inputMask-BnLinOtl.js";
import { f as formatFileSize, a as filterAcceptable, M as MAX_FILES, u as uploadFormFiles } from "./formUploads-ncau7rQh.js";
import { C as CONTACT } from "./PageMeta-BXulEWcY.js";
import { Link } from "react-router-dom";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/ozon/OzonForm.tsx");
const SITUATIES = ["schimmel", "geur", "huisstofmijt", "waterschade", "overdracht", "advies"];
const TERMIJNEN = ["zo_snel_mogelijk", "deze_week", "binnen_twee_weken", "later"];
const ONTSCHIMMELD = ["ja", "nee", "weet_niet"];
const COPY = {
  nl: {
    situaties: {
      schimmel: "Schimmel: ozon na het ontschimmelen",
      geur: "Hardnekkige geur (vocht, rook, huisdier, brand)",
      huisstofmijt: "Huisstofmijt of allergie",
      waterschade: "Ontsmetting na waterschade",
      overdracht: "Fris maken voor verhuur of verkoop",
      advies: "Ik weet het nog niet, graag advies"
    },
    termijnen: {
      zo_snel_mogelijk: "Zo snel mogelijk",
      deze_week: "Deze week",
      binnen_twee_weken: "Binnen twee weken",
      later: "Later of nog te bepalen"
    },
    ontschimmeld: {
      ja: "Ja, de zichtbare schimmel is weg",
      nee: "Nee, de schimmel zit er nog",
      weet_niet: "Weet ik niet / niet van toepassing"
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
    berichtPh: "Bv. muffe geur in de kelder sinds de waterschade in oktober, muur is behandeld en droog, geur blijft.",
    fotos: "Foto's van de schimmel of de ruimte toevoegen",
    fotosSub: "Eén foto zegt vaak meer dan drie zinnen (jpg, png, webp of pdf)",
    verwijder: "Verwijder",
    nietToegevoegd: (namen) => `Niet toegevoegd: ${namen} — alleen jpg, png, webp, pdf of Word; foto's tot 30 MB, documenten tot 10 MB.`,
    terug: "← Terug",
    versturen: "Versturen…",
    privacy: "Wij gebruiken uw gegevens enkel om uw behandeling in te plannen.",
    klaarTitel: "Uw aanvraag is verstuurd.",
    klaarTekst: "Bedankt! Een specialist belt u binnen één werkdag om de behandeling in te plannen en zegt eerlijk of ozon in uw situatie het juiste middel is.",
    dringend: "Dringend? Bel",
    bijlagenNiet: (namen) => `Deze bijlagen konden niet mee: ${namen}. Mail ze gerust na naar`
  },
  fr: {
    situaties: {
      schimmel: "Moisissures : ozone après l'élimination des moisissures",
      geur: "Odeur tenace (humidité, fumée, animal, incendie)",
      huisstofmijt: "Acariens ou allergie",
      waterschade: "Désinfection après des dégâts des eaux",
      overdracht: "Assainir avant une location ou une vente",
      advies: "Je ne sais pas encore, j'aimerais un conseil"
    },
    termijnen: {
      zo_snel_mogelijk: "Dès que possible",
      deze_week: "Cette semaine",
      binnen_twee_weken: "Dans les deux semaines",
      later: "Plus tard ou à déterminer"
    },
    ontschimmeld: {
      ja: "Oui, les moisissures visibles ont disparu",
      nee: "Non, les moisissures sont toujours là",
      weet_niet: "Je ne sais pas / sans objet"
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
    berichtPh: "P. ex. odeur de moisi dans la cave depuis les dégâts des eaux d'octobre, le mur est traité et sec, l'odeur persiste.",
    fotos: "Ajouter des photos des moisissures ou de la pièce",
    fotosSub: "Une photo en dit souvent plus que trois phrases (jpg, png, webp ou pdf)",
    verwijder: "Supprimer",
    nietToegevoegd: (namen) => `Non ajouté : ${namen}. Uniquement jpg, png, webp, pdf ou Word ; photos jusqu'à 30 Mo, documents jusqu'à 10 Mo.`,
    terug: "← Retour",
    versturen: "Envoi…",
    privacy: "Nous utilisons vos données uniquement pour planifier votre traitement.",
    klaarTitel: "Votre demande a été envoyée.",
    klaarTekst: "Merci ! Un spécialiste vous appelle dans un délai d'un jour ouvrable pour planifier le traitement et vous dit honnêtement si l'ozone est la bonne solution dans votre situation.",
    dringend: "Urgent ? Appelez le",
    bijlagenNiet: (namen) => `Ces pièces jointes n'ont pas pu être envoyées : ${namen}. N'hésitez pas à les envoyer par e-mail à`
  },
  en: {
    situaties: {
      schimmel: "Mould: ozone after mould removal",
      geur: "Stubborn odour (damp, smoke, pets, fire)",
      huisstofmijt: "Dust mites or allergy",
      waterschade: "Disinfection after water damage",
      overdracht: "Freshening up before letting or selling",
      advies: "I'm not sure yet, I'd like advice"
    },
    termijnen: {
      zo_snel_mogelijk: "As soon as possible",
      deze_week: "This week",
      binnen_twee_weken: "Within two weeks",
      later: "Later or still to be decided"
    },
    ontschimmeld: {
      ja: "Yes, the visible mould has gone",
      nee: "No, the mould is still there",
      weet_niet: "Don't know / not applicable"
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
    berichtPh: "E.g. musty smell in the cellar since the water damage in October, the wall has been treated and is dry, the smell remains.",
    fotos: "Add photos of the mould or the room",
    fotosSub: "One photo often says more than three sentences (jpg, png, webp or pdf)",
    verwijder: "Remove",
    nietToegevoegd: (namen) => `Not added: ${namen}. Only jpg, png, webp, pdf or Word; photos up to 30 MB, documents up to 10 MB.`,
    terug: "← Back",
    versturen: "Sending…",
    privacy: "We only use your details to schedule your treatment.",
    klaarTitel: "Your request has been sent.",
    klaarTekst: "Thank you! A specialist will call you within one working day to schedule the treatment and tell you honestly whether ozone is the right solution in your situation.",
    dringend: "Urgent? Call",
    bijlagenNiet: (namen) => `These attachments could not be sent: ${namen}. Feel free to email them to`
  }
};
const EMPTY = {
  voornaam: "",
  naam: "",
  tel: "",
  mail: "",
  straat: "",
  nr: "",
  post: "",
  gemeente: ""
};
const MASKS = {
  tel: maskPhone,
  mail: maskEmail
};
const OzonForm = ({
  dienst = "ozon",
  situatieStandaard,
  verstuurLabel
}) => {
  const t = useCopy(COPY);
  const [step, setStep] = useState(1);
  const [details, setDetails] = useState(EMPTY);
  const [situatie, setSituatie] = useState(situatieStandaard ?? SITUATIES[0]);
  const [termijn, setTermijn] = useState(TERMIJNEN[0]);
  const [ontschimmeld, setOntschimmeld] = useState(ONTSCHIMMELD[2]);
  const [ruimtes, setRuimtes] = useState("");
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState([]);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);
  const [skipped, setSkipped] = useState([]);
  const [honeypot, setHoneypot] = useState("");
  const set = (key) => (event) => {
    const value = event.target.value;
    setDetails((current) => ({ ...current, [key]: MASKS[key]?.(value) ?? value }));
  };
  const detailsComplete = details.voornaam.trim().length > 1 && details.naam.trim().length > 1 && isValidEmail(details.mail) && details.post.trim().length > 3 && details.gemeente.trim().length > 1;
  const addFiles = (event) => {
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
          website: honeypot
        })
      });
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        setError(data.error ? t.serverFout ?? data.error : t.foutAlgemeen);
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
  return /* @__PURE__ */ jsxs("div", { className: "ozf", id: "boeken", children: [
    /* @__PURE__ */ jsxs("div", { className: "ozf-steps", children: [
      /* @__PURE__ */ jsx("span", { className: step === 1 ? "on" : void 0, children: t.stap1 }),
      /* @__PURE__ */ jsx("span", { className: step === 2 ? "on" : void 0, children: t.stap2 })
    ] }),
    step === 1 && /* @__PURE__ */ jsxs("div", { className: "ozf-p", children: [
      /* @__PURE__ */ jsxs("div", { className: "ozf-row two", children: [
        /* @__PURE__ */ jsxs("div", { className: "ozf-f", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "ozVoor", children: t.voornaam }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              id: "ozVoor",
              autoComplete: "given-name",
              placeholder: t.voornaam,
              value: details.voornaam,
              onChange: set("voornaam")
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "ozf-f", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "ozNaam", children: t.achternaam }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              id: "ozNaam",
              autoComplete: "family-name",
              placeholder: t.achternaam,
              value: details.naam,
              onChange: set("naam")
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "ozf-row two", children: [
        /* @__PURE__ */ jsxs("div", { className: "ozf-f", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "ozTel", children: t.telefoon }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "tel",
              id: "ozTel",
              autoComplete: "tel",
              inputMode: "tel",
              placeholder: "0470 00 00 00",
              value: details.tel,
              onChange: set("tel")
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "ozf-f", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "ozMail", children: t.email }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              id: "ozMail",
              autoComplete: "email",
              inputMode: "email",
              autoCapitalize: "none",
              spellCheck: false,
              placeholder: t.emailPh,
              value: details.mail,
              onChange: set("mail")
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "ozf-row street", children: [
        /* @__PURE__ */ jsxs("div", { className: "ozf-f", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "ozStraat", children: t.straat }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              id: "ozStraat",
              autoComplete: "address-line1",
              placeholder: t.straatPh,
              value: details.straat,
              onChange: set("straat")
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "ozf-f", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "ozNr", children: t.nr }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              id: "ozNr",
              placeholder: "12 / A",
              value: details.nr,
              onChange: set("nr")
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "ozf-row city", children: [
        /* @__PURE__ */ jsxs("div", { className: "ozf-f", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "ozPost", children: t.postcode }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              id: "ozPost",
              inputMode: "numeric",
              autoComplete: "postal-code",
              placeholder: "2630",
              value: details.post,
              onChange: set("post")
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "ozf-f", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "ozGem", children: t.gemeente }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              id: "ozGem",
              autoComplete: "address-level2",
              placeholder: t.gemeentePh,
              value: details.gemeente,
              onChange: set("gemeente")
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          className: "ozbtn ozbtn-red ozf-next",
          disabled: !detailsComplete,
          onClick: () => setStep(2),
          children: [
            t.volgende,
            " ",
            /* @__PURE__ */ jsx(ArrowRightIcon, { size: 13, strokeWidth: 2.6 })
          ]
        }
      )
    ] }),
    step === 2 && /* @__PURE__ */ jsxs("div", { className: "ozf-p", children: [
      /* @__PURE__ */ jsxs("div", { className: "ozf-f", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "ozSit", children: t.vraagSituatie }),
        /* @__PURE__ */ jsx("select", { id: "ozSit", value: situatie, onChange: (e) => setSituatie(e.target.value), children: SITUATIES.map((value) => /* @__PURE__ */ jsx("option", { value, children: t.situaties[value] }, value)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "ozf-row two", children: [
        /* @__PURE__ */ jsxs("div", { className: "ozf-f", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "ozTerm", children: t.vraagTermijn }),
          /* @__PURE__ */ jsx("select", { id: "ozTerm", value: termijn, onChange: (e) => setTermijn(e.target.value), children: TERMIJNEN.map((value) => /* @__PURE__ */ jsx("option", { value, children: t.termijnen[value] }, value)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "ozf-f", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "ozOnt", children: t.vraagOntschimmeld }),
          /* @__PURE__ */ jsx(
            "select",
            {
              id: "ozOnt",
              value: ontschimmeld,
              onChange: (e) => setOntschimmeld(e.target.value),
              children: ONTSCHIMMELD.map((value) => /* @__PURE__ */ jsx("option", { value, children: t.ontschimmeld[value] }, value))
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "ozf-f", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "ozRuim", children: t.vraagRuimtes }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            id: "ozRuim",
            placeholder: t.ruimtesPh,
            value: ruimtes,
            onChange: (e) => setRuimtes(e.target.value)
          }
        ),
        /* @__PURE__ */ jsx("small", { className: "ozf-hint", children: t.ruimtesHint })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "ozf-f", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "ozMsg", children: t.uwSituatie }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            id: "ozMsg",
            rows: 4,
            placeholder: t.berichtPh,
            value: message,
            onChange: (e) => setMessage(e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("label", { className: "ozf-drop", htmlFor: "ozFiles", children: [
        /* @__PURE__ */ jsx(UploadIcon, {}),
        /* @__PURE__ */ jsx("b", { children: t.fotos }),
        /* @__PURE__ */ jsx("small", { children: t.fotosSub }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "file",
            id: "ozFiles",
            multiple: true,
            accept: "image/*,.pdf,.doc,.docx",
            onChange: addFiles
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "ozf-files", children: files.map((file, i) => /* @__PURE__ */ jsxs("div", { className: "ozfile", children: [
        /* @__PURE__ */ jsx(FileIcon, {}),
        /* @__PURE__ */ jsx("b", { children: file.name }),
        /* @__PURE__ */ jsx("span", { children: formatFileSize(file.size) }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            "aria-label": t.verwijder,
            onClick: () => setFiles((current) => current.filter((_, j) => j !== i)),
            children: "×"
          }
        )
      ] }, `${file.name}-${i}`)) }),
      skipped.length > 0 && /* @__PURE__ */ jsx("p", { className: "ozf-note", role: "status", children: t.nietToegevoegd(skipped.join(", ")) }),
      error && /* @__PURE__ */ jsx("p", { className: "ozf-error", role: "alert", children: error }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          tabIndex: -1,
          autoComplete: "off",
          "aria-hidden": "true",
          value: honeypot,
          onChange: (event) => setHoneypot(event.target.value),
          style: { position: "absolute", left: "-9999px", width: 1, height: 1 }
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "ozf-nav", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            className: "ozf-back",
            disabled: sending,
            onClick: () => setStep(1),
            children: t.terug
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            className: "ozbtn ozbtn-red",
            disabled: message.trim().length < 5 || sending,
            onClick: submit,
            children: sending ? t.versturen : verstuurLabel ?? t.verstuurStandaard
          }
        )
      ] }),
      /* @__PURE__ */ jsx("p", { className: "ozf-legal", children: t.privacy })
    ] }),
    step === 3 && /* @__PURE__ */ jsx("div", { className: "ozf-p", children: /* @__PURE__ */ jsxs("div", { className: "ozf-done", children: [
      /* @__PURE__ */ jsx("span", { children: "✓" }),
      /* @__PURE__ */ jsx("h3", { children: t.klaarTitel }),
      /* @__PURE__ */ jsxs("p", { children: [
        t.klaarTekst,
        " ",
        t.dringend,
        " ",
        /* @__PURE__ */ jsx("a", { href: `tel:${CONTACT.phoneE164}`, children: CONTACT.phoneLocal }),
        "."
      ] }),
      skipped.length > 0 && /* @__PURE__ */ jsxs("p", { className: "ozf-note", children: [
        t.bijlagenNiet(skipped.join(", ")),
        " ",
        /* @__PURE__ */ jsx("a", { href: `mailto:${CONTACT.email}`, children: CONTACT.email }),
        "."
      ] })
    ] }) })
  ] });
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/ozon/ozonIcons.tsx");
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const SchildIcon = ({ size = 13 }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", strokeWidth: 2, ...stroke, children: [
  /* @__PURE__ */ jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }),
  /* @__PURE__ */ jsx("path", { d: "m9 12 2 2 4-4" })
] });
const SporenIcon = ({ size = 18 }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", strokeWidth: 1.7, ...stroke, children: [
  /* @__PURE__ */ jsx("circle", { cx: "9", cy: "9.5", r: "4" }),
  /* @__PURE__ */ jsx("circle", { cx: "16.5", cy: "14", r: "3" }),
  /* @__PURE__ */ jsx("circle", { cx: "7", cy: "17.5", r: "2.2" }),
  /* @__PURE__ */ jsx("path", { d: "M16.5 5.5h.01M20 9h.01M12.5 19.5h.01", strokeWidth: 2.2 })
] });
const MijtIcon = ({ size = 18 }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", strokeWidth: 1.7, ...stroke, children: [
  /* @__PURE__ */ jsx("ellipse", { cx: "12", cy: "13", rx: "4.2", ry: "5.6" }),
  /* @__PURE__ */ jsx("path", { d: "M12 7.6v10.6" }),
  /* @__PURE__ */ jsx("path", { d: "M7.9 9.8 5.6 7.9 4 8.9M7.8 13H5.3l-1.5 1.2M7.9 16.2 5.6 18.1 4 17.1" }),
  /* @__PURE__ */ jsx("path", { d: "M16.1 9.8l2.3-1.9 1.6 1M16.2 13h2.5l1.5 1.2M16.1 16.2l2.3 1.9 1.6-1" })
] });
const NeusIcon = ({ size = 18 }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", strokeWidth: 1.7, ...stroke, children: [
  /* @__PURE__ */ jsx("path", { d: "M9 4v3.6c0 2.2-2 3.3-2 6 0 1.7 1.3 3 3 3h4c1.7 0 3-1.3 3-3 0-2.7-2-3.8-2-6V4" }),
  /* @__PURE__ */ jsx("path", { d: "M9.6 14.2c.8.7 1.6 1 2.4 1s1.6-.3 2.4-1" })
] });
const KelderIcon = ({ size = 18 }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", strokeWidth: 1.7, ...stroke, children: [
  /* @__PURE__ */ jsx("path", { d: "M3 4v16h18" }),
  /* @__PURE__ */ jsx("path", { d: "M7 8v4h4v4h4v4" }),
  /* @__PURE__ */ jsx("path", { d: "M7 8h4" })
] });
const WaterschadeIcon = ({ size = 18 }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", strokeWidth: 1.7, ...stroke, children: [
  /* @__PURE__ */ jsx("path", { d: "M4 20V8l8-5 8 5v12" }),
  /* @__PURE__ */ jsx("path", { d: "M3.5 15c1.4 0 1.4 1.4 2.8 1.4S7.7 15 9.1 15s1.4 1.4 2.8 1.4S13.3 15 14.7 15s1.4 1.4 2.8 1.4S18.9 15 20.3 15" }),
  /* @__PURE__ */ jsx("path", { d: "M3.5 19c1.4 0 1.4 1.4 2.8 1.4S7.7 19 9.1 19s1.4 1.4 2.8 1.4S13.3 19 14.7 19s1.4 1.4 2.8 1.4S18.9 19 20.3 19" })
] });
const SleutelIcon = ({ size = 18 }) => /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", strokeWidth: 1.7, ...stroke, children: [
  /* @__PURE__ */ jsx("circle", { cx: "7.5", cy: "16.5", r: "3.5" }),
  /* @__PURE__ */ jsx("path", { d: "M10 14 20 4" }),
  /* @__PURE__ */ jsx("path", { d: "M17 7l2.5 2.5M14.5 9.5 17 12" })
] });
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/OzonbehandelingPage.copy.tsx");
const MAAND_EN = {
  jan: "Jan",
  feb: "Feb",
  mrt: "Mar",
  apr: "Apr",
  mei: "May",
  jun: "Jun",
  jul: "Jul",
  aug: "Aug",
  sep: "Sep",
  okt: "Oct",
  nov: "Nov",
  dec: "Dec"
};
function reviewDatumEn(datum) {
  const [maand, jaar] = datum.split(" ");
  return MAAND_EN[maand] ? `${MAAND_EN[maand]} ${jaar}` : datum;
}
const OZON_COPY = {
  nl: {
    faq: [
      {
        question: "Waarom komt mijn schimmel steeds terug na het reinigen?",
        answer: "Omdat oppervlakkig reinigen alleen de zichtbare schimmel verwijdert. De microscopische sporen blijven achter in kieren, voegen, textiel en in de lucht, en zetten zich opnieuw af zodra de omstandigheden goed zijn. Een ozonbehandeling doodt die achtergebleven sporen in de hele ruimte. Belangrijk: los altijd eerst de vochtoorzaak op en droog de constructie, anders keert schimmel sowieso terug."
      },
      {
        question: "Is een ozonbehandeling veilig?",
        answer: "Ja, mits professioneel uitgevoerd. Tijdens de behandeling mag er niemand in de ruimte, geen mensen, huisdieren of planten: ozon is krachtig juist omdat het reactief is. Na de behandeling vervalt het vanzelf tot gewone zuurstof en volstaat een korte verluchting. Daarna is de ruimte weer veilig te gebruiken en blijven er geen chemische residu's achter op oppervlakken of in textiel."
      },
      {
        question: "Vervangt ozon het drogen van mijn woning?",
        answer: "Nee. Ozon is de afronding: het ruimt de bestaande besmetting op, maar lost de oorzaak niet op. Blijft de muur of de chape vochtig, dan keert schimmel terug. Daarom drogen we eerst de constructie met bouwdrogers tot de vochtmeting het bevestigt, en zetten we ozon in als sluitstuk."
      },
      {
        question: "Waarvoor gebruiken jullie ozon nog meer?",
        answer: "Naast schimmel zetten we ozon in tegen huisstofmijt in matrassen, tapijt en textiel, tegen hardnekkige geuren van vocht, rook, huisdieren of brand, voor de ontsmetting van kelders en kruipruimtes, na waterschade, en om een woning fris en geurvrij te maken voor verhuur of verkoop."
      },
      {
        question: "Welk toestel gebruiken jullie?",
        answer: "Wij werken met professionele ozongeneratoren van Duitse makelij, geen hobbytoestellen. Ze leveren een hoog, regelbaar ozondebiet dat we afstemmen op het volume van de ruimte, zodat de behandeling grondig en gecontroleerd verloopt. De inzet gebeurt altijd door onze techniekers, met de nodige veiligheidsmaatregelen."
      },
      {
        question: "Hoelang duurt het en kan ik er daarna meteen in?",
        answer: "Een behandeling duurt doorgaans enkele uren, afhankelijk van het volume van de ruimte. Tijdens de werking is de ruimte onbemand en afgesloten. Daarna verluchten we kort; zodra de waarden veilig zijn, is de ruimte weer normaal te gebruiken. Onze technieker zegt u ter plaatse hoelang dat in uw situatie is."
      }
    ],
    inzet: [
      {
        title: "Schimmel & sporen",
        text: "Na het ontschimmelen: de sporen die achterbleven in lucht, voegen en textiel worden gedood, zodat de schimmel geen herstart krijgt."
      },
      {
        title: "Huisstofmijt",
        text: "Ozon bestrijdt huisstofmijt in matrassen, tapijt en textiel. Een verademing voor wie allergisch is en niet weet waar het vandaan komt."
      },
      {
        title: "Hardnekkige geuren",
        text: "Vocht-, rook-, huisdier- of brandgeur wordt geneutraliseerd op molecuulniveau. Niet overdekt met een geurstof, maar afgebroken."
      },
      {
        title: "Kelders & kruipruimtes",
        text: "Vochtige, slecht verluchte ruimtes waar schimmel en muffe lucht zich vastzetten, en waar u met een borstel niet overal bij kunt."
      },
      {
        title: "Na waterschade",
        text: "Na een lek of een overstroming: ontsmetting van de ruimte en het wegnemen van de vochtgeur die na het drogen blijft hangen."
      },
      {
        title: "Voor verhuur of verkoop",
        text: "Een frisse, ontsmette en geurvrije woning bij de overdracht. Geen muffe eerste indruk bij een bezoek of een plaatsbeschrijving."
      }
    ],
    techniek: [
      ["Herkomst", "Duitse makelij"],
      ["Vermogen", "Hoog ozondebiet"],
      ["Regeling", "Timer & debiet"],
      ["Inzet", "Onbemand, door onze technieker"]
    ],
    schemaNaam: "Ozonbehandeling en ontschimmeling",
    schemaBeschrijving: "Professionele ozonbehandeling tegen schimmelsporen, huisstofmijt en hardnekkige geuren, als sluitstuk na het drogen en ontschimmelen van een ruimte.",
    schemaType: "Ontschimmeling",
    kruimelHome: "Home",
    kruimel: "Ozonbehandeling",
    heroKick: "Ontschimmeling · schimmel & geur",
    h1: "Schimmel weggeschrobd en tóch terug? Dan zit het dieper dan de muur.",
    heroTekst: "Een ozonbehandeling verspreidt actieve zuurstof (O₃) tot in elke kier van de ruimte, doodt schimmelsporen, bacteriën en huisstofmijt, en breekt de muffe vochtgeur af, ook daar waar borstel en verf niet raken.",
    heroCta: "Boek uw ozonbehandeling",
    heroUsp: ["Uitgevoerd door onze eigen techniekers", "Geen chemische residu's", "Heel Vlaanderen"],
    herkenKick: "Herkenbaar?",
    herkenH2: "U heeft ontschimmeld, en toch komt hij terug.",
    herkenLede: "Dat ligt zelden aan hoe grondig u geschrobd heeft. Schimmel werkt met sporen, en die zitten op plaatsen waar een doek nooit komt.",
    herkenKaarten: [
      {
        title: "Sporen blijven achter",
        text: "Schimmel plant zich voort via microscopische sporen die in kieren, voegen en poriën zitten. Wat u wegveegt is maar het topje."
      },
      {
        title: "De ruimte blijft besmet",
        text: "Sporen zweven ook in de lucht en zetten zich elders opnieuw af. U reinigt één muur, maar de kamer blijft een broedplaats."
      },
      {
        title: "De geur komt telkens terug",
        text: "De muffe schimmelgeur zit vastgezet in materialen en textiel. Luchten en schilderen maskeren het even, daarna is het er weer."
      }
    ],
    noot: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Eerst droog, dan ozon." }),
      " Ozon doodt wat er is en doorbreekt de cirkel, maar zonder een droge constructie keert schimmel terug. Zit er nog vocht in muur of chape, dan drogen we eerst, met",
      " ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "een berekend droogpakket" }),
      ", bevestigd door een vochtmeting. Pas daarna heeft een behandeling zin."
    ] }),
    watKick: "Wat is ozon?",
    watH2: "Zuurstof met een extra atoom.",
    watLede: "De lucht die u inademt is O₂: zuurstof met twee atomen. Ozon is O₃, met een derde, los gebonden atoom. Net dat extra atoom maakt ozon zo krachtig.",
    watBody: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Dat derde atoom laat makkelijk los en valt schimmelsporen, bacteriën en geurmoleculen aan. Daarna vervalt ozon vanzelf weer tot gewone zuurstof, ",
      /* @__PURE__ */ jsx("b", { children: "zonder residu" }),
      ". En omdat het een gas is, verspreidt het zich uit zichzelf naar élke hoek van de ruimte."
    ] }),
    molO2: "Gewone lucht, stabiel",
    molEnergie: "+ energie",
    molO3: "Reactief, kortstondig, krachtig",
    hoeKick: "Hoe werkt het?",
    hoeH2: "Een gas dat overal komt waar u niet bij kunt.",
    hoeLede: "Een ozongenerator zet de zuurstof in de kamer om in ozon. Omdat het een gas is, verspreidt het zich vanzelf: tot in kieren, voegen, achter meubels, in textiel en in het ventilatiekanaal, plekken die u met een borstel nooit bereikt.",
    stageLabel: "Schimmelmuur met animatie: actieve zuurstof breekt schimmelsporen af",
    legO3: "actieve zuurstof",
    legSpore: "schimmelspore",
    hoeNa: "Tijdens de behandeling is de ruimte onbemand. Daarna vervalt de ozon vanzelf terug tot gewone zuurstof, en na een korte verluchting is de ruimte weer veilig te gebruiken. Er blijven geen chemische residu's achter op oppervlakken of in textiel.",
    cirkelKick: "De cirkel doorbreken",
    cirkelH2: "Waarom ozon ná het drogen en ontschimmelen komt.",
    cirkelLede: "Ontschimmelen verwijdert de zichtbare schimmel. Ozon ruimt op wat achterblijft, zodat de schimmel geen herstart krijgt.",
    stap1Titel: "Droog en ontschimmel eerst",
    stap1: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
      "De constructie droogt tot de vochtmeting het bevestigt en de zichtbare schimmel wordt verwijderd. Zie ",
      /* @__PURE__ */ jsx(Link, { to: lp("/ontschimmeling"), children: "ontschimmeling" }),
      ". Het oppervlak oogt weer proper."
    ] }),
    stap2Titel: "Ozon ruimt de rest op",
    stap2: "De behandeling doodt de achtergebleven sporen in de lucht, in kieren en in textiel, in de hele ruimte, niet alleen op de muur.",
    stap3Titel: "Geen herbesmetting",
    stap3: "Zonder levende sporen die zich opnieuw kunnen vestigen blijft de ruimte, mits droog, langdurig schimmelvrij en geurloos.",
    bandKick: "Waar drogen ophoudt",
    bandH3: "Eerst meten, dan drogen, dan ozon.",
    band: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
      "Wij zijn in de eerste plaats droogspecialisten. Daarom kijken we eerst of het vocht echt weg is: na ",
      /* @__PURE__ */ jsx(Link, { to: lp("/waterschade"), children: "waterschade" }),
      " of in een",
      " ",
      /* @__PURE__ */ jsx(Link, { to: lp("/renovatie"), children: "vochtige kelder" }),
      " is dat het halve werk. Pas als de meting droog zegt, is ozon het sluitstuk dat de geur en de sporen wegneemt."
    ] }),
    bandCta: "Vraag uw behandeling aan",
    bandAlt: "Vernast-specialist in beschermpak bij een ozonbehandeling",
    inzetKick: "Waarvoor zetten wij het in?",
    inzetH2: "Meer dan alleen schimmel.",
    inzetLede: "Omdat ozon microben én geurmoleculen aanpakt, gebruiken we het voor uiteenlopende situaties, altijd als aanvulling op een gezonde, droge ruimte.",
    techKick: "Onze techniek",
    techH2: "Professionele Duitse ozongeneratoren.",
    techLede: "Wij werken met krachtige, professionele ozongeneratoren van Duitse makelij, geen hobbytoestellen. Ze produceren een hoog, regelbaar ozondebiet, afgestemd op het volume van de ruimte, zodat de behandeling grondig én gecontroleerd verloopt.",
    techBody: "De inzet gebeurt altijd door onze eigen techniekers, met de nodige veiligheidsmaatregelen. Tijdens de werking mogen mensen en huisdieren niet in de ruimte.",
    veiligKick: "Veilig & verantwoord",
    veiligH2: "Krachtig tijdens, ongevaarlijk erna.",
    veiligLede: "Ozon is juist zo krachtig omdat het reactief is. Daarom hoort een behandeling in professionele handen, en volgen wij een vast protocol.",
    veiligKaarten: [
      {
        title: "Onbemande behandeling",
        text: "Tijdens de werking is de ruimte afgesloten: geen mensen, geen huisdieren, geen planten. Wij bewaken de timing."
      },
      {
        title: "Vervalt tot zuurstof",
        text: "Ozon breekt na de behandeling vanzelf af tot gewone zuurstof (O₂). Geen chemische residu's op oppervlakken of textiel."
      },
      {
        title: "Korte verluchting",
        text: "Na afloop verluchten we de ruimte. Zodra de waarden veilig zijn, is ze weer normaal te gebruiken."
      },
      {
        title: "Altijd na het drogen",
        text: "Ozon is de finishing touch. Een blijvend resultaat vraagt eerst een droge constructie, en daar adviseren we u eerlijk in."
      }
    ],
    reviewKick: "Wat klanten zeggen",
    reviewH2: "Hoe wij werken, in hun woorden.",
    reviewLede: "Beoordelingen van Vernast op Google en Solvari, letterlijk overgenomen. Over snelheid, opvolging en afspraken nakomen, want dat is wat een behandeling bij u thuis vraagt.",
    sterren: (n) => `${n} van 5 sterren`,
    datum: (d) => d,
    faqKick: "Veelgestelde vragen",
    faqH2: "Uw vragen over ozonbehandeling.",
    faqHelpH3: "Staat uw vraag er niet bij?",
    faqHelp: "Wij bekijken uw situatie en zeggen eerlijk of een behandeling zin heeft, en wat er eventueel eerst moet gebeuren.",
    bel: "Bel",
    online: "Stel uw vraag online",
    boekKick: "Boek uw behandeling",
    boekH2: "Schimmel of geur die maar blijft terugkomen?",
    boekTekst: "Vul hieronder uw situatie in, dan belt een specialist u binnen één werkdag om de behandeling in te plannen. Wij pakken eerst de oorzaak aan en zetten ozon in als grondige afronding, duidelijk, correct en zonder valse verwachtingen.",
    boekUsp: [
      "Reactie binnen één werkdag",
      "Eerlijk advies: soms is drogen het echte antwoord",
      "Werkzaam in heel Vlaanderen"
    ],
    liever: "Liever meteen bellen?",
    uren: (u) => u.replace("Mo-Fr", "ma–vr").replace(" 08:00-17:00", ", 8u–17u")
  },
  fr: {
    faq: [
      {
        question: "Pourquoi mes moisissures reviennent-elles toujours après le nettoyage ?",
        answer: "Parce qu'un nettoyage en surface n'enlève que les moisissures visibles. Les spores microscopiques restent dans les fissures, les joints, les textiles et dans l'air, et se redéposent dès que les conditions s'y prêtent. Un traitement à l'ozone tue ces spores résiduelles dans toute la pièce. Important : réglez toujours d'abord la cause de l'humidité et faites sécher la construction, sinon les moisissures reviendront de toute façon."
      },
      {
        question: "Un traitement à l'ozone est-il sûr ?",
        answer: "Oui, à condition d'être réalisé par des professionnels. Pendant le traitement, personne ne peut se trouver dans la pièce, ni personnes, ni animaux, ni plantes : l'ozone est efficace justement parce qu'il est réactif. Après le traitement, il se décompose de lui-même en oxygène ordinaire et une courte aération suffit. La pièce peut ensuite être utilisée en toute sécurité et aucun résidu chimique ne subsiste sur les surfaces ou dans les textiles."
      },
      {
        question: "L'ozone remplace-t-il le séchage de mon habitation ?",
        answer: "Non. L'ozone est la finition : il élimine la contamination existante, mais ne règle pas la cause. Si le mur ou la chape reste humide, les moisissures reviennent. C'est pourquoi nous séchons d'abord la construction avec des déshumidificateurs de chantier jusqu'à ce que la mesure d'humidité le confirme, et utilisons l'ozone en dernière étape."
      },
      {
        question: "Pour quoi d'autre utilisez-vous l'ozone ?",
        answer: "Outre les moisissures, nous utilisons l'ozone contre les acariens dans les matelas, tapis et textiles, contre les odeurs tenaces d'humidité, de fumée, d'animaux ou d'incendie, pour désinfecter les caves et vides ventilés, après des dégâts des eaux, et pour rendre une habitation fraîche et sans odeur avant une location ou une vente."
      },
      {
        question: "Quel appareil utilisez-vous ?",
        answer: "Nous travaillons avec des générateurs d'ozone professionnels de fabrication allemande, pas avec des appareils grand public. Ils fournissent un débit d'ozone élevé et réglable, que nous adaptons au volume de la pièce, pour un traitement approfondi et contrôlé. L'intervention est toujours réalisée par nos techniciens, avec les mesures de sécurité nécessaires."
      },
      {
        question: "Combien de temps cela dure-t-il et puis-je réintégrer la pièce tout de suite ?",
        answer: "Un traitement dure généralement quelques heures, selon le volume de la pièce. Pendant le fonctionnement, la pièce est inoccupée et fermée. Nous aérons ensuite brièvement ; dès que les valeurs sont sûres, la pièce peut être utilisée normalement. Notre technicien vous indique sur place combien de temps cela prend dans votre situation."
      }
    ],
    inzet: [
      {
        title: "Moisissures & spores",
        text: "Après l'élimination des moisissures : les spores restées dans l'air, les joints et les textiles sont détruites, pour que les moisissures ne puissent pas repartir."
      },
      {
        title: "Acariens",
        text: "L'ozone combat les acariens dans les matelas, tapis et textiles. Un soulagement pour les personnes allergiques qui ne savent pas d'où cela vient."
      },
      {
        title: "Odeurs tenaces",
        text: "Les odeurs d'humidité, de fumée, d'animaux ou d'incendie sont neutralisées au niveau moléculaire. Pas masquées par un parfum, mais décomposées."
      },
      {
        title: "Caves & vides ventilés",
        text: "Des espaces humides et mal aérés où moisissures et air confiné s'installent, et où une brosse ne peut pas tout atteindre."
      },
      {
        title: "Après des dégâts des eaux",
        text: "Après une fuite ou une inondation : désinfection de la pièce et élimination de l'odeur d'humidité qui persiste après le séchage."
      },
      {
        title: "Avant une location ou une vente",
        text: "Une habitation fraîche, désinfectée et sans odeur lors de la remise. Pas de première impression de moisi lors d'une visite ou d'un état des lieux."
      }
    ],
    techniek: [
      ["Origine", "Fabrication allemande"],
      ["Puissance", "Débit d'ozone élevé"],
      ["Réglage", "Minuterie & débit"],
      ["Intervention", "Sans occupant, par notre technicien"]
    ],
    schemaNaam: "Traitement à l'ozone et élimination des moisissures",
    schemaBeschrijving: "Traitement professionnel à l'ozone contre les spores de moisissures, les acariens et les odeurs tenaces, en dernière étape après le séchage et l'élimination des moisissures d'une pièce.",
    schemaType: "Élimination des moisissures",
    kruimelHome: "Accueil",
    kruimel: "Traitement à l'ozone",
    heroKick: "Élimination des moisissures · moisissures & odeurs",
    h1: "Moisissures frottées et pourtant revenues ? Le problème est plus profond que le mur.",
    heroTekst: "Un traitement à l'ozone diffuse de l'oxygène actif (O₃) jusque dans chaque recoin de la pièce, tue les spores de moisissures, les bactéries et les acariens, et décompose l'odeur de moisi, même là où la brosse et la peinture n'arrivent pas.",
    heroCta: "Réservez votre traitement à l'ozone",
    heroUsp: ["Réalisé par nos propres techniciens", "Aucun résidu chimique", "Toute la Flandre"],
    herkenKick: "Cela vous parle ?",
    herkenH2: "Vous avez éliminé les moisissures, et pourtant elles reviennent.",
    herkenLede: "Cela tient rarement à la minutie de votre nettoyage. Les moisissures se propagent par des spores, et celles-ci se logent là où un chiffon ne passe jamais.",
    herkenKaarten: [
      {
        title: "Les spores restent",
        text: "Les moisissures se reproduisent par des spores microscopiques logées dans les fissures, les joints et les pores. Ce que vous essuyez n'est que la partie visible."
      },
      {
        title: "La pièce reste contaminée",
        text: "Les spores flottent aussi dans l'air et se redéposent ailleurs. Vous nettoyez un mur, mais la pièce reste un foyer."
      },
      {
        title: "L'odeur revient toujours",
        text: "L'odeur de moisi est incrustée dans les matériaux et les textiles. Aérer et repeindre la masquent un temps, puis elle revient."
      }
    ],
    noot: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "D'abord sécher, ensuite l'ozone." }),
      " L'ozone tue ce qui est présent et brise le cercle, mais sans construction sèche les moisissures reviennent. S'il reste de l'humidité dans le mur ou la chape, nous séchons d'abord, avec",
      " ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "un pack de séchage calculé" }),
      ", confirmé par une mesure d'humidité. Ce n'est qu'ensuite qu'un traitement a du sens."
    ] }),
    watKick: "Qu'est-ce que l'ozone ?",
    watH2: "De l'oxygène avec un atome en plus.",
    watLede: "L'air que vous respirez est de l'O₂ : de l'oxygène à deux atomes. L'ozone est de l'O₃, avec un troisième atome faiblement lié. C'est justement cet atome supplémentaire qui rend l'ozone si efficace.",
    watBody: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Ce troisième atome se détache facilement et attaque les spores de moisissures, les bactéries et les molécules odorantes. L'ozone se décompose ensuite de lui-même en oxygène ordinaire, ",
      /* @__PURE__ */ jsx("b", { children: "sans résidu" }),
      ". Et comme c'est un gaz, il se répand de lui-même dans chaque recoin de la pièce."
    ] }),
    molO2: "Air ordinaire, stable",
    molEnergie: "+ énergie",
    molO3: "Réactif, éphémère, puissant",
    hoeKick: "Comment ça marche ?",
    hoeH2: "Un gaz qui va partout où vous ne pouvez pas aller.",
    hoeLede: "Un générateur d'ozone transforme l'oxygène de la pièce en ozone. Comme c'est un gaz, il se répand de lui-même : jusque dans les fissures, les joints, derrière les meubles, dans les textiles et dans le conduit de ventilation, des endroits qu'une brosse n'atteint jamais.",
    stageLabel: "Mur moisi avec animation : l'oxygène actif détruit les spores de moisissures",
    legO3: "oxygène actif",
    legSpore: "spore de moisissure",
    hoeNa: "Pendant le traitement, la pièce est inoccupée. L'ozone se décompose ensuite de lui-même en oxygène ordinaire, et après une courte aération la pièce peut à nouveau être utilisée en toute sécurité. Aucun résidu chimique ne subsiste sur les surfaces ou dans les textiles.",
    cirkelKick: "Briser le cercle",
    cirkelH2: "Pourquoi l'ozone vient après le séchage et l'élimination des moisissures.",
    cirkelLede: "L'élimination des moisissures enlève ce qui est visible. L'ozone nettoie ce qui reste, pour que les moisissures ne puissent pas repartir.",
    stap1Titel: "D'abord sécher et éliminer les moisissures",
    stap1: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
      "La construction sèche jusqu'à ce que la mesure d'humidité le confirme et les moisissures visibles sont enlevées. Voir",
      " ",
      /* @__PURE__ */ jsx(Link, { to: lp("/ontschimmeling"), children: "élimination des moisissures" }),
      ". La surface a de nouveau l'air propre."
    ] }),
    stap2Titel: "L'ozone élimine le reste",
    stap2: "Le traitement tue les spores restées dans l'air, dans les fissures et dans les textiles, dans toute la pièce, pas seulement sur le mur.",
    stap3Titel: "Pas de recontamination",
    stap3: "Sans spores vivantes capables de s'installer à nouveau, la pièce, si elle reste sèche, reste durablement sans moisissures et sans odeur.",
    bandKick: "Là où le séchage s'arrête",
    bandH3: "D'abord mesurer, puis sécher, puis l'ozone.",
    band: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
      "Nous sommes avant tout des spécialistes du séchage. C'est pourquoi nous vérifions d'abord si l'humidité a vraiment disparu : après des",
      " ",
      /* @__PURE__ */ jsx(Link, { to: lp("/waterschade"), children: "dégâts des eaux" }),
      " ou dans une",
      " ",
      /* @__PURE__ */ jsx(Link, { to: lp("/renovatie"), children: "cave humide" }),
      ", c'est la moitié du travail. Ce n'est que lorsque la mesure indique « sec » que l'ozone vient en dernière étape éliminer l'odeur et les spores."
    ] }),
    bandCta: "Demandez votre traitement",
    bandAlt: "Spécialiste Vernast en combinaison de protection lors d'un traitement à l'ozone",
    inzetKick: "Pour quoi l'utilisons-nous ?",
    inzetH2: "Bien plus que les moisissures.",
    inzetLede: "Comme l'ozone s'attaque aux microbes et aux molécules odorantes, nous l'utilisons dans des situations très diverses, toujours en complément d'une pièce saine et sèche.",
    techKick: "Notre technique",
    techH2: "Des générateurs d'ozone professionnels allemands.",
    techLede: "Nous travaillons avec de puissants générateurs d'ozone professionnels de fabrication allemande, pas avec des appareils grand public. Ils produisent un débit d'ozone élevé et réglable, adapté au volume de la pièce, pour un traitement approfondi et contrôlé.",
    techBody: "L'intervention est toujours réalisée par nos propres techniciens, avec les mesures de sécurité nécessaires. Pendant le fonctionnement, ni personnes ni animaux ne peuvent se trouver dans la pièce.",
    veiligKick: "Sûr & responsable",
    veiligH2: "Puissant pendant, inoffensif après.",
    veiligLede: "L'ozone est si efficace justement parce qu'il est réactif. C'est pourquoi un traitement doit être confié à des professionnels, et nous suivons un protocole fixe.",
    veiligKaarten: [
      {
        title: "Traitement sans occupant",
        text: "Pendant le fonctionnement, la pièce est fermée : ni personnes, ni animaux, ni plantes. Nous surveillons la durée."
      },
      {
        title: "Se décompose en oxygène",
        text: "Après le traitement, l'ozone se décompose de lui-même en oxygène ordinaire (O₂). Aucun résidu chimique sur les surfaces ou les textiles."
      },
      {
        title: "Courte aération",
        text: "À la fin, nous aérons la pièce. Dès que les valeurs sont sûres, elle peut être utilisée normalement."
      },
      {
        title: "Toujours après le séchage",
        text: "L'ozone est la touche finale. Un résultat durable demande d'abord une construction sèche, et nous vous conseillons honnêtement à ce sujet."
      }
    ],
    reviewKick: "Ce que disent nos clients",
    reviewH2: "Notre façon de travailler, avec leurs mots.",
    reviewLede: "Avis sur Vernast publiés sur Google et Solvari, repris tels quels (en néerlandais). Sur la rapidité, le suivi et le respect des engagements, car c'est ce que demande un traitement chez vous.",
    sterren: (n) => `${n} étoiles sur 5`,
    datum: (d) => d,
    faqKick: "Questions fréquentes",
    faqH2: "Vos questions sur le traitement à l'ozone.",
    faqHelpH3: "Votre question n'y figure pas ?",
    faqHelp: "Nous examinons votre situation et vous disons honnêtement si un traitement a du sens, et ce qui doit éventuellement être fait avant.",
    bel: "Appelez le",
    online: "Posez votre question en ligne",
    boekKick: "Réservez votre traitement",
    boekH2: "Des moisissures ou une odeur qui reviennent sans cesse ?",
    boekTekst: "Décrivez votre situation ci-dessous et un spécialiste vous appelle dans un délai d'un jour ouvrable pour planifier le traitement. Nous nous attaquons d'abord à la cause et utilisons l'ozone comme finition approfondie, de façon claire, correcte et sans fausses promesses.",
    boekUsp: [
      "Réponse dans un délai d'un jour ouvrable",
      "Un conseil honnête : parfois, le séchage est la vraie réponse",
      "Actifs dans toute la Flandre"
    ],
    liever: "Vous préférez appeler tout de suite ?",
    uren: (u) => u.replace("Mo-Fr", "lun–ven").replace(" 08:00-17:00", ", 8 h–17 h")
  },
  en: {
    faq: [
      {
        question: "Why does my mould keep coming back after cleaning?",
        answer: "Because surface cleaning only removes the visible mould. The microscopic spores stay behind in cracks, joints, fabrics and in the air, and settle again as soon as conditions are right. An ozone treatment kills those remaining spores throughout the room. Important: always deal with the cause of the damp first and dry the structure, otherwise the mould will come back regardless."
      },
      {
        question: "Is an ozone treatment safe?",
        answer: "Yes, provided it is carried out by professionals. During the treatment nobody may be in the room, no people, pets or plants: ozone is powerful precisely because it is reactive. After the treatment it breaks down by itself into ordinary oxygen and a short airing is enough. The room is then safe to use again and no chemical residues are left on surfaces or in fabrics."
      },
      {
        question: "Does ozone replace drying my home?",
        answer: "No. Ozone is the finishing step: it clears up the existing contamination, but does not solve the cause. If the wall or the screed stays damp, the mould comes back. That is why we first dry the structure with construction dehumidifiers until a moisture reading confirms it, and use ozone as the final step."
      },
      {
        question: "What else do you use ozone for?",
        answer: "Besides mould, we use ozone against dust mites in mattresses, carpets and fabrics, against stubborn odours from damp, smoke, pets or fire, to disinfect cellars and crawl spaces, after water damage, and to make a home fresh and odour-free before it is let or sold."
      },
      {
        question: "Which equipment do you use?",
        answer: "We work with professional German-made ozone generators, not hobby units. They deliver a high, adjustable ozone output that we match to the volume of the room, so the treatment is thorough and controlled. They are always operated by our technicians, with the necessary safety measures."
      },
      {
        question: "How long does it take and can I go back in straight away?",
        answer: "A treatment usually takes a few hours, depending on the volume of the room. While it runs, the room is unoccupied and closed off. Afterwards we air it briefly; as soon as the levels are safe, the room can be used normally again. Our technician will tell you on site how long that is in your situation."
      }
    ],
    inzet: [
      {
        title: "Mould & spores",
        text: "After mould removal: the spores left behind in the air, joints and fabrics are killed, so the mould gets no chance to restart."
      },
      {
        title: "Dust mites",
        text: "Ozone tackles dust mites in mattresses, carpets and fabrics. A relief for allergy sufferers who don't know where it comes from."
      },
      {
        title: "Stubborn odours",
        text: "Smells of damp, smoke, pets or fire are neutralised at molecular level. Not covered up with a fragrance, but broken down."
      },
      {
        title: "Cellars & crawl spaces",
        text: "Damp, poorly ventilated spaces where mould and stale air take hold, and where a brush can't reach everywhere."
      },
      {
        title: "After water damage",
        text: "After a leak or a flood: disinfecting the room and removing the damp smell that lingers after drying."
      },
      {
        title: "Before letting or selling",
        text: "A fresh, disinfected and odour-free home at handover. No musty first impression at a viewing or an inventory check."
      }
    ],
    techniek: [
      ["Origin", "German-made"],
      ["Output", "High ozone output"],
      ["Control", "Timer & output"],
      ["Operation", "Unoccupied, by our technician"]
    ],
    schemaNaam: "Ozone treatment and mould removal",
    schemaBeschrijving: "Professional ozone treatment against mould spores, dust mites and stubborn odours, as the final step after drying a room and removing the mould.",
    schemaType: "Mould removal",
    kruimelHome: "Home",
    kruimel: "Ozone treatment",
    heroKick: "Mould removal · mould & odour",
    h1: "Scrubbed the mould off and it still came back? Then it goes deeper than the wall.",
    heroTekst: "An ozone treatment spreads active oxygen (O₃) into every crack of the room, kills mould spores, bacteria and dust mites, and breaks down the musty damp smell, even where brush and paint can't reach.",
    heroCta: "Book your ozone treatment",
    heroUsp: ["Carried out by our own technicians", "No chemical residues", "Throughout Flanders"],
    herkenKick: "Sound familiar?",
    herkenH2: "You removed the mould, and still it comes back.",
    herkenLede: "That is rarely down to how thoroughly you scrubbed. Mould works through spores, and they sit in places a cloth never reaches.",
    herkenKaarten: [
      {
        title: "Spores stay behind",
        text: "Mould reproduces through microscopic spores lodged in cracks, joints and pores. What you wipe away is only the tip."
      },
      {
        title: "The room stays contaminated",
        text: "Spores also float in the air and settle again elsewhere. You clean one wall, but the room remains a breeding ground."
      },
      {
        title: "The smell keeps coming back",
        text: "The musty smell of mould is trapped in materials and fabrics. Airing and painting mask it for a while, then it's back."
      }
    ],
    noot: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("b", { children: "Dry first, then ozone." }),
      " Ozone kills what is there and breaks the cycle, but without a dry structure the mould comes back. If there is still moisture in the wall or screed, we dry first, with",
      " ",
      /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: "a calculated drying package" }),
      ", confirmed by a moisture reading. Only then does a treatment make sense."
    ] }),
    watKick: "What is ozone?",
    watH2: "Oxygen with an extra atom.",
    watLede: "The air you breathe is O₂: oxygen with two atoms. Ozone is O₃, with a third, loosely bound atom. It is exactly that extra atom that makes ozone so powerful.",
    watBody: /* @__PURE__ */ jsxs(Fragment, { children: [
      "That third atom lets go easily and attacks mould spores, bacteria and odour molecules. Ozone then breaks down by itself into ordinary oxygen, ",
      /* @__PURE__ */ jsx("b", { children: "without residue" }),
      ". And because it is a gas, it spreads by itself into every corner of the room."
    ] }),
    molO2: "Ordinary air, stable",
    molEnergie: "+ energy",
    molO3: "Reactive, short-lived, powerful",
    hoeKick: "How does it work?",
    hoeH2: "A gas that gets everywhere you can't.",
    hoeLede: "An ozone generator converts the oxygen in the room into ozone. Because it is a gas, it spreads by itself: into cracks, joints, behind furniture, into fabrics and the ventilation duct, places you never reach with a brush.",
    stageLabel: "Mouldy wall with animation: active oxygen breaks down mould spores",
    legO3: "active oxygen",
    legSpore: "mould spore",
    hoeNa: "During the treatment the room is unoccupied. Afterwards the ozone breaks down by itself into ordinary oxygen, and after a short airing the room is safe to use again. No chemical residues are left on surfaces or in fabrics.",
    cirkelKick: "Breaking the cycle",
    cirkelH2: "Why ozone comes after drying and mould removal.",
    cirkelLede: "Mould removal takes away the visible mould. Ozone clears up what is left, so the mould gets no chance to restart.",
    stap1Titel: "Dry and remove the mould first",
    stap1: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
      "The structure dries until a moisture reading confirms it and the visible mould is removed. See",
      " ",
      /* @__PURE__ */ jsx(Link, { to: lp("/ontschimmeling"), children: "mould removal" }),
      ". The surface looks clean again."
    ] }),
    stap2Titel: "Ozone clears up the rest",
    stap2: "The treatment kills the remaining spores in the air, in cracks and in fabrics, throughout the room, not just on the wall.",
    stap3Titel: "No recontamination",
    stap3: "Without living spores that can settle again, the room stays free of mould and odour for a long time, provided it stays dry.",
    bandKick: "Where drying stops",
    bandH3: "Measure first, then dry, then ozone.",
    band: (lp) => /* @__PURE__ */ jsxs(Fragment, { children: [
      "We are drying specialists first and foremost. That is why we first check whether the moisture has really gone: after ",
      /* @__PURE__ */ jsx(Link, { to: lp("/waterschade"), children: "water damage" }),
      " or in a",
      " ",
      /* @__PURE__ */ jsx(Link, { to: lp("/renovatie"), children: "damp cellar" }),
      " that is half the job. Only when the reading says dry is ozone the final step that removes the smell and the spores."
    ] }),
    bandCta: "Request your treatment",
    bandAlt: "Vernast specialist in a protective suit during an ozone treatment",
    inzetKick: "What do we use it for?",
    inzetH2: "More than just mould.",
    inzetLede: "Because ozone tackles microbes and odour molecules alike, we use it in a wide range of situations, always in addition to a healthy, dry room.",
    techKick: "Our equipment",
    techH2: "Professional German ozone generators.",
    techLede: "We work with powerful, professional German-made ozone generators, not hobby units. They produce a high, adjustable ozone output, matched to the volume of the room, so the treatment is thorough and controlled.",
    techBody: "They are always operated by our own technicians, with the necessary safety measures. While the generator is running, people and pets must stay out of the room.",
    veiligKick: "Safe & responsible",
    veiligH2: "Powerful during, harmless after.",
    veiligLede: "Ozone is so powerful precisely because it is reactive. That is why a treatment belongs in professional hands, and we follow a fixed protocol.",
    veiligKaarten: [
      {
        title: "Unoccupied treatment",
        text: "While it runs, the room is closed off: no people, no pets, no plants. We keep an eye on the timing."
      },
      {
        title: "Breaks down to oxygen",
        text: "After the treatment, ozone breaks down by itself into ordinary oxygen (O₂). No chemical residues on surfaces or fabrics."
      },
      {
        title: "Short airing",
        text: "Afterwards we air the room. As soon as the levels are safe, it can be used normally again."
      },
      {
        title: "Always after drying",
        text: "Ozone is the finishing touch. A lasting result first needs a dry structure, and we will give you honest advice on that."
      }
    ],
    reviewKick: "What customers say",
    reviewH2: "How we work, in their words.",
    reviewLede: "Reviews of Vernast on Google and Solvari, quoted word for word (in Dutch). About speed, follow-up and keeping appointments, because that is what a treatment in your home requires.",
    sterren: (n) => `${n} out of 5 stars`,
    datum: reviewDatumEn,
    faqKick: "Frequently asked questions",
    faqH2: "Your questions about ozone treatment.",
    faqHelpH3: "Can't find your question?",
    faqHelp: "We look at your situation and tell you honestly whether a treatment makes sense, and what may need to happen first.",
    bel: "Call",
    online: "Ask your question online",
    boekKick: "Book your treatment",
    boekH2: "Mould or a smell that just keeps coming back?",
    boekTekst: "Describe your situation below and a specialist will call you within one working day to schedule the treatment. We tackle the cause first and use ozone as a thorough finish, clearly, correctly and without false expectations.",
    boekUsp: [
      "Response within one working day",
      "Honest advice: sometimes drying is the real answer",
      "Working throughout Flanders"
    ],
    liever: "Rather call straight away?",
    uren: (u) => u.replace("Mo-Fr", "Mon–Fri").replace(" 08:00-17:00", ", 8am–5pm")
  }
};
export {
  KelderIcon as K,
  MijtIcon as M,
  NeusIcon as N,
  OzonForm as O,
  SchildIcon as S,
  WaterschadeIcon as W,
  OZON_COPY as a,
  SporenIcon as b,
  SleutelIcon as c,
  reviewDatumEn as r
};
