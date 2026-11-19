import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useRef, useCallback, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { CheckoutElementsProvider } from "@stripe/react-stripe-js/checkout";
import { P as PageMeta } from "./PageMeta-BXulEWcY.js";
import { l as V3Header } from "./V3Header-BeIMcMg7.js";
import { V as V3Footer } from "./V3Footer-9z4J1I4x.js";
import { S as STRIPE_APPEARANCE, B as BoekingBetaalformulier } from "./stripeAppearance-DVUcXAUA.js";
import { C as CheckIcon } from "./icons-DYrN4MjJ.js";
import { a as euro } from "./verhuur-8XCQs1EE.js";
import { b as useTaal, u as useCopy, a as useLokaalPad, N as NUMBER_LOCALE, h as formatEuro } from "../main.mjs";
/* empty css                       */
/* empty css                          */
import "vite-react-ssg";
import "./FontPreload-C6Rzq6ld.js";
import "./verhuur-CgnDb-wO.js";
import "./tarieven-ZrzMF0e-.js";
import "./packages-DdkKuPcF.js";
import "lucide-react";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/verhuur/VerhuurSaldoPage.tsx");
const COPY = {
  nl: {
    titel: "Uw saldo betalen | Vernast",
    beschrijving: "Reken het openstaande bedrag van uw huur af.",
    laden: "Even uw boeking ophalen…",
    onbekendKop: "Deze link werkt niet",
    onbekendUitleg: "Wij vinden geen boeking bij deze link. Vraag onze technieker om de code opnieuw te tonen, of bel ons op ",
    terug: "Terug naar de site",
    betaaldKop: "Betaald, bedankt",
    betaaldUitleg: "Uw huur is volledig afgerekend. De factuur vertrekt automatisch naar uw mailbox; die kan een paar minuten onderweg zijn.",
    referentie: "Referentie",
    nuTeBetalen: "Nu te betalen",
    vanTotaal: (totaal, betaald) => `van ${totaal} incl. btw, ${betaald} is al voldaan`,
    uwHuur: "Uw huur",
    periode: "Periode",
    dagen: "dagen",
    mislukt: "Betalen lukte niet. Bel ons gerust op 03 689 90 65.",
    formulierLaden: "Betaalformulier laden…",
    factuurNote: "Zodra de betaling binnen is, sturen wij uw factuur automatisch per mail.",
    teVeel: "Te veel aanvragen. Probeer het over een minuut opnieuw."
  },
  fr: {
    titel: "Payer votre solde | Vernast",
    beschrijving: "Réglez le montant restant de votre location.",
    laden: "Récupération de votre réservation…",
    onbekendKop: "Ce lien ne fonctionne pas",
    onbekendUitleg: "Nous ne trouvons aucune réservation liée à ce lien. Demandez à notre technicien d'afficher à nouveau le code, ou appelez-nous au ",
    terug: "Retour au site",
    betaaldKop: "Payé, merci",
    betaaldUitleg: "Votre location est entièrement réglée. La facture part automatiquement vers votre boîte mail ; elle peut mettre quelques minutes à arriver.",
    referentie: "Référence",
    nuTeBetalen: "À payer maintenant",
    vanTotaal: (totaal, betaald) => `sur ${totaal} TVAC, ${betaald} déjà réglés`,
    uwHuur: "Votre location",
    periode: "Période",
    dagen: "jours",
    mislukt: "Le paiement n'a pas abouti. N'hésitez pas à nous appeler au 03 689 90 65.",
    formulierLaden: "Chargement du formulaire de paiement…",
    factuurNote: "Dès réception du paiement, nous vous envoyons automatiquement votre facture par e-mail.",
    teVeel: "Trop de demandes. Réessayez dans une minute."
  },
  en: {
    titel: "Pay your balance | Vernast",
    beschrijving: "Settle the outstanding amount for your rental.",
    laden: "Fetching your booking…",
    onbekendKop: "This link does not work",
    onbekendUitleg: "We cannot find a booking for this link. Ask our technician to show the code again, or call us on ",
    terug: "Back to the site",
    betaaldKop: "Paid, thank you",
    betaaldUitleg: "Your rental has been paid in full. The invoice is sent to your inbox automatically; it may take a few minutes to arrive.",
    referentie: "Reference",
    nuTeBetalen: "To pay now",
    vanTotaal: (totaal, betaald) => `of ${totaal} incl. VAT, ${betaald} already paid`,
    uwHuur: "Your rental",
    periode: "Period",
    dagen: "days",
    mislukt: "Payment did not go through. Feel free to call us on 03 689 90 65.",
    formulierLaden: "Loading payment form…",
    factuurNote: "As soon as the payment is received, we email your invoice automatically.",
    teVeel: "Too many requests. Please try again in a minute."
  }
};
function datum(waarde, taal) {
  if (!waarde) return "";
  const parsed = /* @__PURE__ */ new Date(`${waarde}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return "";
  return parsed.toLocaleDateString(NUMBER_LOCALE[taal], { day: "numeric", month: "short", year: "numeric" });
}
const VerhuurSaldoPage = () => {
  const [searchParams] = useSearchParams();
  const taal = useTaal();
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const eur = (n) => taal === "nl" ? euro(n) : formatEuro(n, taal);
  const sessionId = searchParams.get("session_id") ?? "";
  const balanceSession = searchParams.get("saldo_session") ?? "";
  const [status, setStatus] = useState("laden");
  const [saldo, setSaldo] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [stripeJs, setStripeJs] = useState(null);
  const [fout, setFout] = useState("");
  const sessieGevraagd = useRef(false);
  const laad = useCallback(async () => {
    if (!sessionId) {
      setStatus("onbekend");
      return;
    }
    const query = new URLSearchParams({ session_id: sessionId });
    if (balanceSession) query.set("saldo_session", balanceSession);
    try {
      const response = await fetch(`/api/saldo?${query}`);
      if (!response.ok) throw new Error("niet gevonden");
      const data = await response.json();
      setSaldo(data);
      setStatus(data.voldaan ? "voldaan" : "open");
    } catch {
      setStatus("onbekend");
    }
  }, [sessionId, balanceSession]);
  useEffect(() => {
    void laad();
  }, [laad]);
  useEffect(() => {
    void import("@stripe/stripe-js");
  }, []);
  useEffect(() => {
    if (status !== "open" || sessieGevraagd.current) return;
    sessieGevraagd.current = true;
    const start = async () => {
      try {
        const response = await fetch("/api/saldo", {
          method: "POST",
          headers: { "content-type": "application/json" },
          // De taal bepaalt het betaalformulier en waar Stripe de betaler terugstuurt.
          body: JSON.stringify({ session_id: sessionId, taal })
        });
        const data = await response.json();
        if (response.status === 429) throw new Error(t.teVeel);
        if (!response.ok || !data.clientSecret || !data.publishableKey) {
          throw new Error(data.error ?? "mislukt");
        }
        const { loadStripe } = await import("@stripe/stripe-js");
        setStripeJs(loadStripe(data.publishableKey, { locale: taal }));
        setClientSecret(data.clientSecret);
      } catch (error) {
        const message = error instanceof Error ? error.message : "";
        setFout(message || t.mislukt);
      }
    };
    void start();
  }, [status, sessionId]);
  const periode = saldo && datum(saldo.start, taal) && datum(saldo.eind, taal) ? `${datum(saldo.start, taal)}, ${datum(saldo.eind, taal)}${saldo.dagen ? ` · ${saldo.dagen} ${t.dagen}` : ""}` : "";
  return /* @__PURE__ */ jsxs("div", { className: "vh-book vh-ext vh-saldo", children: [
    /* @__PURE__ */ jsx(
      PageMeta,
      {
        title: t.titel,
        description: t.beschrijving,
        noindex: true
      }
    ),
    /* @__PURE__ */ jsx(V3Header, { lightAfter: -1 }),
    /* @__PURE__ */ jsx("section", { className: "main", children: /* @__PURE__ */ jsx("div", { className: "wrap", style: { maxWidth: 680 }, children: /* @__PURE__ */ jsxs("div", { className: "blk", children: [
      status === "laden" && /* @__PURE__ */ jsx("div", { className: "blkh", children: /* @__PURE__ */ jsx("h2", { children: t.laden }) }),
      status === "onbekend" && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("div", { className: "blkh", children: /* @__PURE__ */ jsx("h2", { children: t.onbekendKop }) }),
        /* @__PURE__ */ jsxs("p", { style: { lineHeight: 1.7 }, children: [
          t.onbekendUitleg,
          /* @__PURE__ */ jsx("a", { href: "tel:+3236899065", children: "03 689 90 65" }),
          "."
        ] }),
        /* @__PURE__ */ jsx("div", { className: "fnav", style: { marginTop: 20 }, children: /* @__PURE__ */ jsx(Link, { className: "btn btn-o", to: lp("/verhuur/calculator"), children: t.terug }) })
      ] }),
      status === "voldaan" && saldo && /* @__PURE__ */ jsxs("div", { className: "done", children: [
        /* @__PURE__ */ jsx("div", { className: "dico", children: /* @__PURE__ */ jsx(CheckIcon, { size: 28 }) }),
        /* @__PURE__ */ jsx("h2", { children: t.betaaldKop }),
        /* @__PURE__ */ jsx("p", { children: t.betaaldUitleg }),
        /* @__PURE__ */ jsxs("div", { className: "dref", children: [
          /* @__PURE__ */ jsx("span", { children: t.referentie }),
          /* @__PURE__ */ jsx("span", { children: saldo.referentie })
        ] })
      ] }),
      status === "open" && saldo && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs("div", { className: "sldtop", children: [
          /* @__PURE__ */ jsx("span", { className: "sldlabel", children: t.nuTeBetalen }),
          /* @__PURE__ */ jsx("div", { className: "sldsom", children: eur(saldo.saldo) }),
          /* @__PURE__ */ jsx("p", { className: "sldsub", children: t.vanTotaal(eur(saldo.totaal), eur(saldo.betaald)) })
        ] }),
        /* @__PURE__ */ jsx("dl", { className: "sldlines", children: [
          [t.uwHuur, saldo.pakket],
          [t.periode, periode],
          [t.referentie, saldo.referentie]
        ].filter(([, waarde]) => waarde).map(([label, waarde]) => /* @__PURE__ */ jsxs("div", { className: "sldline", children: [
          /* @__PURE__ */ jsx("dt", { children: label }),
          /* @__PURE__ */ jsx("dd", { children: waarde })
        ] }, label)) }),
        /* @__PURE__ */ jsx("div", { className: "paybox", children: clientSecret && stripeJs ? /* @__PURE__ */ jsx(
          CheckoutElementsProvider,
          {
            stripe: stripeJs,
            options: { clientSecret, elementsOptions: { appearance: STRIPE_APPEARANCE } },
            children: /* @__PURE__ */ jsx(BoekingBetaalformulier, { bedrag: eur(saldo.saldo) })
          },
          clientSecret
        ) : fout ? /* @__PURE__ */ jsx("p", { className: "perr", role: "alert", children: fout }) : /* @__PURE__ */ jsx("p", { className: "payload", children: t.formulierLaden }) }),
        /* @__PURE__ */ jsxs("p", { className: "paynote", children: [
          /* @__PURE__ */ jsx(CheckIcon, { size: 13, strokeWidth: 3 }),
          /* @__PURE__ */ jsx("span", { children: t.factuurNote })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx(V3Footer, {})
  ] });
};
export {
  VerhuurSaldoPage as default
};
