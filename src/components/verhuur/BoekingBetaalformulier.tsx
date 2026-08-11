/**
 * Het betaalformulier van de boekingsflow.
 *
 * Tot voor kort stond hier het ingebedde Checkout-formulier van Stripe. Dat
 * regelde alles zelf, maar toonde Apple Pay enkel in Safari 17+: in Chrome
 * verscheen de knop wél en liep ze dood op een foutpagina van Apple. Sindsdien
 * draait de betaalstap op `ui_mode: "elements"`, waarbij wij de knoppenrij en
 * het formulier zelf plaatsen. Stripe houdt de kaartgegevens binnen zijn eigen
 * iframes — wij zien ze nog steeds nooit.
 */
import { useState } from "react";
import {
  ExpressCheckoutElement,
  PaymentElement,
  useCheckoutElements,
} from "@stripe/react-stripe-js/checkout";
import type {
  StripeCheckoutExpressCheckoutElementOptions,
  StripeExpressCheckoutElementConfirmEvent,
} from "@stripe/stripe-js";

interface BoekingBetaalformulierProps {
  /** Bedrag dat nu afgerekend wordt, al opgemaakt als "€ 652,65". */
  bedrag: string;
}

/**
 * `always` in plaats van `auto` is de hele reden van deze migratie. Op `auto`
 * toont Stripe de Apple Pay-knop enkel waar de browser hem native ondersteunt,
 * en dat is alleen Safari. Op `always` verschijnt hij ook in Chrome, Edge,
 * Firefox en Opera, waar Apple de betaling afhandelt via een code die de klant
 * met zijn iPhone scant.
 *
 * De keerzijde: iemand op Windows zonder Apple-toestel krijgt de knop nu ook te
 * zien en loopt vast op de scanstap. Google Pay blijft daarom bewust op `auto`
 * — daar is geen vraag naar en het zou hetzelfde probleem omgekeerd opleveren.
 */
/*
  Bewust het `Checkout`-type en niet `StripeExpressCheckoutElementOptions`: het
  element draait hier binnen `useCheckoutElements`, en die variant eist
  `buttonHeight`. Met het algemene type compileerde dit bestand niet.
*/
const EXPRESS_OPTIONS: StripeCheckoutExpressCheckoutElementOptions = {
  paymentMethods: {
    applePay: "always",
    googlePay: "auto",
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
  buttonType: undefined,
  paymentMethodOrder: undefined,
};

export default function BoekingBetaalformulier({ bedrag }: BoekingBetaalformulierProps) {
  const state = useCheckoutElements();
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  /*
    Stripe laadt de knoppenrij ná het formulier en weet pas dan of er iets te
    tonen valt. Zolang dat niet bekend is blijft de scheidingslijn eronder weg,
    anders staat er even een "of betaal met" boven een lege plek.
  */
  const [heeftWallets, setHeeftWallets] = useState(false);

  if (state.type === "loading") {
    return <p className="payload">Betaalformulier laden…</p>;
  }

  if (state.type === "error") {
    return <p className="perr">{state.error.message}</p>;
  }

  const { checkout } = state;

  /*
    Twee wegen naar dezelfde bevestiging. De wallet-knop levert een event mee dat
    de betaalgegevens al bevat; het formulier eronder bevestigt zonder. Beide
    eindigen bij `return_url`, waar de boekingspagina de sessie natrekt.
  */
  const bevestig = async (expressCheckoutConfirmEvent?: StripeExpressCheckoutElementConfirmEvent) => {
    setError("");
    setBusy(true);
    const result = await checkout.confirm(
      expressCheckoutConfirmEvent ? { expressCheckoutConfirmEvent } : undefined,
    );
    /*
      Bij een geslaagde betaling stuurt Stripe de bezoeker zelf door en komen we
      hier niet meer. Blijft de pagina staan, dan is er iets misgegaan en is de
      knop weer nodig — een formulier dat na een geweigerde kaart uitgeschakeld
      blijft, is een doodlopende straat.
    */
    if (result.type === "error") {
      setError(result.error.message);
    }
    setBusy(false);
  };

  return (
    <div className="payform">
      <ExpressCheckoutElement
        options={EXPRESS_OPTIONS}
        onReady={({ availablePaymentMethods }) => {
          setHeeftWallets(Boolean(availablePaymentMethods));
        }}
        onConfirm={(event) => {
          void bevestig(event);
        }}
      />

      {heeftWallets && (
        <div className="paysplit">
          <span>of betaal met</span>
        </div>
      )}

      <PaymentElement options={{ layout: "accordion" }} />

      <button
        className="btn btn-r paysubmit"
        type="button"
        disabled={busy}
        onClick={() => {
          void bevestig();
        }}
      >
        {busy ? "Bezig met betalen…" : `Betaal ${bedrag}`}
      </button>

      {error && <p className="perr">{error}</p>}
    </div>
  );
}
