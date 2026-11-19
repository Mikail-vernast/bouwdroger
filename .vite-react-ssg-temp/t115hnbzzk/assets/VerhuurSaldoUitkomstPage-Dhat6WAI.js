import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { P as PageMeta } from "./PageMeta-BXulEWcY.js";
import { l as V3Header } from "./V3Header-BeIMcMg7.js";
import { V as V3Footer } from "./V3Footer-9z4J1I4x.js";
import { C as CheckIcon } from "./icons-DYrN4MjJ.js";
import { u as useCopy, a as useLokaalPad } from "../main.mjs";
/* empty css                       */
/* empty css                          */
import "vite-react-ssg";
import "react";
import "./FontPreload-C6Rzq6ld.js";
import "./verhuur-CgnDb-wO.js";
import "./tarieven-ZrzMF0e-.js";
import "./verhuur-8XCQs1EE.js";
import "./packages-DdkKuPcF.js";
import "lucide-react";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/verhuur/VerhuurSaldoUitkomstPage.tsx");
const COPY = {
  nl: {
    titelOk: "Betaling ontvangen | Vernast",
    titelNee: "Betaling niet afgerond | Vernast",
    beschrijvingOk: "Bedankt, uw betaling is ontvangen.",
    beschrijvingNee: "Uw betaling is niet afgerond. Er is niets aangerekend.",
    kopOk: "Bedankt, uw betaling is ontvangen",
    uitlegOk: "Uw betaling staat op uw huur. Stripe stuurt een ontvangstbewijs naar uw mailbox; dat kan een paar minuten onderweg zijn.",
    kopNee: "De betaling is niet afgerond",
    uitlegNee: "Er is niets aangerekend. Probeer het opnieuw via de knop in uw mail of de code van onze technieker, of bel ons op ",
    bel: "03 689 90 65",
    terug: "Terug naar de site"
  },
  fr: {
    titelOk: "Paiement reçu | Vernast",
    titelNee: "Paiement non finalisé | Vernast",
    beschrijvingOk: "Merci, votre paiement a bien été reçu.",
    beschrijvingNee: "Votre paiement n'a pas été finalisé. Rien n'a été débité.",
    kopOk: "Merci, votre paiement a bien été reçu",
    uitlegOk: "Votre paiement a été imputé à votre location. Stripe envoie un reçu dans votre boîte mail ; il peut mettre quelques minutes à arriver.",
    kopNee: "Le paiement n'a pas été finalisé",
    uitlegNee: "Rien n'a été débité. Réessayez via le bouton dans votre e-mail ou le code de notre technicien, ou appelez-nous au ",
    bel: "03 689 90 65",
    terug: "Retour au site"
  },
  en: {
    titelOk: "Payment received | Vernast",
    titelNee: "Payment not completed | Vernast",
    beschrijvingOk: "Thank you, your payment has been received.",
    beschrijvingNee: "Your payment was not completed. Nothing has been charged.",
    kopOk: "Thank you, your payment has been received",
    uitlegOk: "Your payment has been applied to your rental. Stripe sends a receipt to your inbox; it may take a few minutes to arrive.",
    kopNee: "The payment was not completed",
    uitlegNee: "Nothing has been charged. Try again using the button in your email or our technician's code, or call us on ",
    bel: "03 689 90 65",
    terug: "Back to the site"
  }
};
function Uitkomst({ geslaagd }) {
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  return /* @__PURE__ */ jsxs("div", { className: "vh-book vh-ext vh-saldo", children: [
    /* @__PURE__ */ jsx(
      PageMeta,
      {
        title: geslaagd ? t.titelOk : t.titelNee,
        description: geslaagd ? t.beschrijvingOk : t.beschrijvingNee,
        noindex: true
      }
    ),
    /* @__PURE__ */ jsx(V3Header, { lightAfter: -1 }),
    /* @__PURE__ */ jsx("section", { className: "main", children: /* @__PURE__ */ jsx("div", { className: "wrap", style: { maxWidth: 680 }, children: /* @__PURE__ */ jsxs("div", { className: "blk", children: [
      geslaagd ? /* @__PURE__ */ jsxs("div", { className: "done", children: [
        /* @__PURE__ */ jsx("div", { className: "dico", children: /* @__PURE__ */ jsx(CheckIcon, { size: 28 }) }),
        /* @__PURE__ */ jsx("h2", { children: t.kopOk }),
        /* @__PURE__ */ jsx("p", { children: t.uitlegOk })
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("div", { className: "blkh", children: /* @__PURE__ */ jsx("h2", { children: t.kopNee }) }),
        /* @__PURE__ */ jsxs("p", { style: { lineHeight: 1.7 }, children: [
          t.uitlegNee,
          /* @__PURE__ */ jsx("a", { href: "tel:+3236899065", children: t.bel }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "fnav", style: { marginTop: 20 }, children: /* @__PURE__ */ jsx(Link, { className: "btn btn-o", to: lp("/"), children: t.terug }) })
    ] }) }) }),
    /* @__PURE__ */ jsx(V3Footer, {})
  ] });
}
const SaldoBetaaldPage = () => /* @__PURE__ */ jsx(Uitkomst, { geslaagd: true });
const SaldoNietBetaaldPage = () => /* @__PURE__ */ jsx(Uitkomst, { geslaagd: false });
export {
  SaldoBetaaldPage,
  SaldoNietBetaaldPage
};
