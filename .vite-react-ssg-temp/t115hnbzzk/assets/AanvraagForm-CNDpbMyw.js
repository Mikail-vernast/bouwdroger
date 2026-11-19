import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { b as useTaal, u as useCopy } from "../main.mjs";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/hooks/useAanvraag.ts");
const MAIL_TO = "info@vernast-bouwdrogers.be";
const FALLBACK_ERROR = "Verzenden lukte niet. Probeer het opnieuw of bel 03 689 90 65.";
const NETWORK_ERROR = "Verzenden lukte niet, controleer uw verbinding en probeer opnieuw.";
const FOUT_FR = {
  "Ongeldige aanvraag.": "Demande non valide.",
  "Vul uw naam en uw vraag in.": "Veuillez indiquer votre nom et votre question.",
  "Vul een geldig e-mailadres in, dan kunnen we u antwoorden.": "Veuillez indiquer une adresse e-mail valide, afin que nous puissions vous répondre.",
  [FALLBACK_ERROR]: "L'envoi a échoué. Réessayez ou appelez le 03 689 90 65.",
  [NETWORK_ERROR]: "L'envoi a échoué, vérifiez votre connexion et réessayez."
};
const FOUT_EN = {
  "Ongeldige aanvraag.": "Invalid request.",
  "Vul uw naam en uw vraag in.": "Please fill in your name and your question.",
  "Vul een geldig e-mailadres in, dan kunnen we u antwoorden.": "Please enter a valid email address so that we can reply to you.",
  [FALLBACK_ERROR]: "Sending failed. Please try again or call +32 3 689 90 65.",
  [NETWORK_ERROR]: "Sending failed, please check your connection and try again."
};
function inTaal(melding, taal) {
  if (taal === "nl") return melding;
  const tabel = taal === "fr" ? FOUT_FR : FOUT_EN;
  return tabel[melding] ?? tabel[FALLBACK_ERROR];
}
function useAanvraag({ source, messageField, mailSubject }) {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const [mailto, setMailto] = useState(null);
  const taal = useTaal();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const val = (name) => form.elements.namedItem(name)?.value ?? "";
    const fields = {
      voornaam: val("voornaam"),
      achternaam: val("naam"),
      email: val("email"),
      telefoon: val("telefoon"),
      onderwerp: val("onderwerp"),
      bericht: val(messageField)
    };
    setStatus("sending");
    setError(null);
    setMailto(null);
    const fail = (message) => {
      const body = [
        `Naam: ${fields.voornaam} ${fields.achternaam}`,
        `E-mail: ${fields.email}`,
        `Telefoon: ${fields.telefoon || "-"}`,
        `Onderwerp: ${fields.onderwerp}`,
        "",
        fields.bericht
      ].join("\n");
      setMailto(
        `mailto:${MAIL_TO}?subject=${encodeURIComponent(`${mailSubject}: ${fields.onderwerp}`)}&body=${encodeURIComponent(body)}`
      );
      setError(inTaal(message, taal));
      setStatus("error");
    };
    try {
      const response = await fetch("/api/aanvraag", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          source,
          ...fields,
          page_url: typeof window === "undefined" ? null : window.location.href,
          website: val("website")
        })
      });
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        fail(data.error ?? FALLBACK_ERROR);
        return;
      }
      setStatus("done");
    } catch {
      fail(NETWORK_ERROR);
    }
  };
  return { status, error, mailto, handleSubmit, sending: status === "sending" };
}
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/AanvraagForm.tsx");
const AanvraagHoneypot = () => /* @__PURE__ */ jsx(
  "input",
  {
    type: "text",
    name: "website",
    tabIndex: -1,
    autoComplete: "off",
    "aria-hidden": "true",
    defaultValue: "",
    className: "aanv-hp"
  }
);
const COPY = {
  nl: {
    of: "Of",
    mailRechtstreeks: "mail uw vraag rechtstreeks",
    naar: "naar",
    doneTitel: "Vraag verzonden",
    doneTekst: "Bedankt! We nemen binnen één werkdag contact met u op."
  },
  fr: {
    of: "Ou",
    mailRechtstreeks: "envoyez directement votre question par e-mail",
    naar: "à",
    doneTitel: "Question envoyée",
    doneTekst: "Merci ! Nous vous recontactons dans un délai d'un jour ouvrable."
  },
  en: {
    of: "Or",
    mailRechtstreeks: "email your question directly",
    naar: "to",
    doneTitel: "Question sent",
    doneTekst: "Thank you! We will contact you within one working day."
  }
};
const AanvraagError = ({ error, mailto }) => {
  const t = useCopy(COPY);
  return error ? /* @__PURE__ */ jsxs("p", { className: "aanv-err", role: "alert", children: [
    error,
    mailto && /* @__PURE__ */ jsxs(Fragment, { children: [
      " ",
      t.of,
      " ",
      /* @__PURE__ */ jsx("a", { href: mailto, children: t.mailRechtstreeks }),
      " ",
      t.naar,
      " ",
      MAIL_TO,
      "."
    ] })
  ] }) : null;
};
const AanvraagDone = ({
  title,
  text
}) => {
  const t = useCopy(COPY);
  return /* @__PURE__ */ jsxs("div", { className: "aanv-done", role: "status", children: [
    /* @__PURE__ */ jsx("div", { className: "aanv-done-ic", children: /* @__PURE__ */ jsx("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.6", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M20 6 9 17l-5-5" }) }) }),
    /* @__PURE__ */ jsx("h3", { children: title ?? t.doneTitel }),
    /* @__PURE__ */ jsx("p", { children: text ?? t.doneTekst })
  ] });
};
export {
  AanvraagHoneypot as A,
  AanvraagError as a,
  AanvraagDone as b,
  useAanvraag as u
};
