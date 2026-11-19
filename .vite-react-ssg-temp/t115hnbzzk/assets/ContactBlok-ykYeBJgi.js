import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { u as useAanvraag, b as AanvraagDone, A as AanvraagHoneypot, a as AanvraagError } from "./AanvraagForm-CNDpbMyw.js";
import { k as PhoneIcon, A as ArrowRightIcon } from "./V3Header-BeIMcMg7.js";
import { C as CONTACT } from "./PageMeta-BXulEWcY.js";
import { u as useCopy, a as useLokaalPad } from "../main.mjs";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/content/ContactBlok.tsx");
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
    verstuur: "Verstuur uw vraag"
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
    verstuur: "Envoyer votre question"
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
    verstuur: "Send your question"
  }
};
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
  achtergrond = "rood"
}) => {
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const { status, error, mailto, handleSubmit, sending } = useAanvraag({
    source: "levering",
    messageField: "situatie",
    mailSubject: "Vraag via de site"
  });
  return /* @__PURE__ */ jsx("section", { className: achtergrond === "wit" ? "oform licht" : "oform", id: "formulier", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
    /* @__PURE__ */ jsxs("div", { className: "sec-head mid", children: [
      /* @__PURE__ */ jsx("span", { className: "kick", children: kicker ?? t.kicker }),
      /* @__PURE__ */ jsx("h2", { className: "sec", children: titel }),
      /* @__PURE__ */ jsx("p", { className: "lede", children: lede })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "fshell", children: status === "done" ? /* @__PURE__ */ jsx(
      AanvraagDone,
      {
        title: t.doneTitel,
        text: t.doneTekst
      }
    ) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, noValidate: true, children: [
      /* @__PURE__ */ jsx(AanvraagHoneypot, {}),
      /* @__PURE__ */ jsxs("div", { className: "frow", children: [
        /* @__PURE__ */ jsxs("div", { className: "fld", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "cb-voornaam", children: t.voornaam }),
          /* @__PURE__ */ jsx("input", { id: "cb-voornaam", name: "voornaam", type: "text", autoComplete: "given-name", required: true, placeholder: t.voornaam })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "fld", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "cb-naam", children: t.naam }),
          /* @__PURE__ */ jsx("input", { id: "cb-naam", name: "naam", type: "text", autoComplete: "family-name", required: true, placeholder: t.achternaam })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "frow", children: [
        /* @__PURE__ */ jsxs("div", { className: "fld", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "cb-email", children: t.email }),
          /* @__PURE__ */ jsx("input", { id: "cb-email", name: "email", type: "email", autoComplete: "email", required: true, placeholder: t.emailVb })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "fld", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "cb-tel", children: t.tel }),
          /* @__PURE__ */ jsx("input", { id: "cb-tel", name: "telefoon", type: "tel", autoComplete: "tel", placeholder: "04.." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "frow one", children: /* @__PURE__ */ jsxs("div", { className: "fld", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "cb-onderwerp", children: t.onderwerp }),
        /* @__PURE__ */ jsx("select", { id: "cb-onderwerp", name: "onderwerp", defaultValue: onderwerpen[0], children: onderwerpen.map((o) => /* @__PURE__ */ jsx("option", { children: o }, o)) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "frow one", children: /* @__PURE__ */ jsxs("div", { className: "fld", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "cb-situatie", children: t.situatie }),
        /* @__PURE__ */ jsx("textarea", { id: "cb-situatie", name: "situatie", rows: 5, required: true, placeholder })
      ] }) }),
      /* @__PURE__ */ jsx(AanvraagError, { error, mailto }),
      /* @__PURE__ */ jsxs("div", { className: "fsend", children: [
        /* @__PURE__ */ jsxs("small", { children: [
          t.privacy,
          " ",
          /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: t.bereken }),
          "."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "fbtns", children: [
          /* @__PURE__ */ jsxs("a", { className: "btn btn-line", href: `tel:${CONTACT.phoneE164}`, children: [
            /* @__PURE__ */ jsx(PhoneIcon, {}),
            " ",
            CONTACT.phoneLocal
          ] }),
          /* @__PURE__ */ jsxs("button", { className: "btn", type: "submit", disabled: sending, children: [
            sending ? t.versturen : t.verstuur,
            /* @__PURE__ */ jsx(ArrowRightIcon, {})
          ] })
        ] })
      ] })
    ] }) })
  ] }) });
};
export {
  ContactBlok as C
};
