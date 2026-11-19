import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useCheckoutElements, ExpressCheckoutElement, PaymentElement } from "@stripe/react-stripe-js/checkout";
import { u as useCopy } from "../main.mjs";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/verhuur/BoekingBetaalformulier.tsx");
const COPY = {
  nl: { laden: "Betaalformulier laden…", of: "of betaal met", bezig: "Bezig met betalen…", betaal: "Betaal" },
  fr: { laden: "Chargement du formulaire de paiement…", of: "ou payez par", bezig: "Paiement en cours…", betaal: "Payer" },
  en: { laden: "Loading payment form…", of: "or pay with", bezig: "Processing payment…", betaal: "Pay" }
};
const EXPRESS_OPTIONS = {
  paymentMethods: {
    applePay: "always",
    googlePay: "auto"
  },
  buttonTheme: { applePay: "black" },
  buttonHeight: 48,
  // Eén knop per rij: naast elkaar worden ze op mobiel te smal voor hun label.
  layout: { maxColumns: 1, maxRows: 2 },
  /*
    Dit type eist álle zes de sleutels, ook die we niet invullen. Expliciet
    `undefined` houdt Stripe's eigen standaard aan — het label op de knop en de
    volgorde van de wallets blijven dus precies zoals ze nu op het scherm staan.
  */
  buttonType: void 0,
  paymentMethodOrder: void 0
};
function BoekingBetaalformulier({ bedrag }) {
  const state = useCheckoutElements();
  const t = useCopy(COPY);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [heeftWallets, setHeeftWallets] = useState(false);
  if (state.type === "loading") {
    return /* @__PURE__ */ jsx("p", { className: "payload", children: t.laden });
  }
  if (state.type === "error") {
    return /* @__PURE__ */ jsx("p", { className: "perr", children: state.error.message });
  }
  const { checkout } = state;
  const bevestig = async (expressCheckoutConfirmEvent) => {
    setError("");
    setBusy(true);
    const result = await checkout.confirm(
      expressCheckoutConfirmEvent ? { expressCheckoutConfirmEvent } : void 0
    );
    if (result.type === "error") {
      setError(result.error.message);
    }
    setBusy(false);
  };
  return /* @__PURE__ */ jsxs("div", { className: "payform", children: [
    /* @__PURE__ */ jsx(
      ExpressCheckoutElement,
      {
        options: EXPRESS_OPTIONS,
        onReady: ({ availablePaymentMethods }) => {
          setHeeftWallets(Boolean(availablePaymentMethods));
        },
        onConfirm: (event) => {
          void bevestig(event);
        }
      }
    ),
    heeftWallets && /* @__PURE__ */ jsx("div", { className: "paysplit", children: /* @__PURE__ */ jsx("span", { children: t.of }) }),
    /* @__PURE__ */ jsx(PaymentElement, { options: { layout: "accordion" } }),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "btn btn-r paysubmit",
        type: "button",
        disabled: busy,
        onClick: () => {
          void bevestig();
        },
        children: busy ? t.bezig : `${t.betaal} ${bedrag}`
      }
    ),
    error && /* @__PURE__ */ jsx("p", { className: "perr", children: error })
  ] });
}
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/lib/stripeAppearance.ts");
const STRIPE_APPEARANCE = {
  theme: "stripe",
  variables: {
    colorPrimary: "#C8102E",
    colorText: "#141414",
    colorDanger: "#C8102E",
    fontFamily: "'Plus Jakarta Sans', 'DM Sans', system-ui, sans-serif",
    borderRadius: "11px",
    spacingUnit: "4px"
  }
};
export {
  BoekingBetaalformulier as B,
  STRIPE_APPEARANCE as S
};
