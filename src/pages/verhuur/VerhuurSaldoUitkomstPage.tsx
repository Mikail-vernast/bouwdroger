/**
 * Waar de klant belandt na het saldo van een portaal-order.
 *
 * `api/saldo-order.ts` stuurt hem naar de gehoste pagina van Stripe; daarna
 * komt hij hier terug. Er staat bewust niets uit de URL of uit een API op dit
 * scherm: de order bestaat enkel in het portaal, en de betaling zelf landt via
 * de Stripe-webhook. Daardoor is de pagina volledig statisch en geprerenderd —
 * wie geen JavaScript uitvoert, ziet hetzelfde.
 *
 * Twee routes in plaats van één met een `?status=`: een querystring leest pas
 * na de hydratatie, en tot dan zou de geprerenderde HTML "betaald" tonen aan
 * iemand die net geannuleerd heeft.
 */
import { Link } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import { CheckIcon } from "@/components/verhuur/icons";
import { useCopy, useLokaalPad, type Copy } from "@/i18n/useTaal";
import "@/styles/verhuur.css";
import "@/styles/verhuur-fixes.css";
import "@/styles/verhuur-betaling.css";

interface Teksten {
  titelOk: string;
  titelNee: string;
  beschrijvingOk: string;
  beschrijvingNee: string;
  kopOk: string;
  uitlegOk: string;
  kopNee: string;
  uitlegNee: string;
  bel: string;
  terug: string;
}

const COPY = {
  nl: {
    titelOk: "Betaling ontvangen | Vernast",
    titelNee: "Betaling niet afgerond | Vernast",
    beschrijvingOk: "Bedankt, uw betaling is ontvangen.",
    beschrijvingNee: "Uw betaling is niet afgerond. Er is niets aangerekend.",
    kopOk: "Bedankt, uw betaling is ontvangen",
    uitlegOk:
      "Uw betaling staat op uw huur. Stripe stuurt een ontvangstbewijs naar uw mailbox; dat kan een paar minuten onderweg zijn.",
    kopNee: "De betaling is niet afgerond",
    uitlegNee:
      "Er is niets aangerekend. Probeer het opnieuw via de knop in uw mail of de code van onze technieker, of bel ons op ",
    bel: "03 689 90 65",
    terug: "Terug naar de site",
  },
  fr: {
    titelOk: "Paiement reçu | Vernast",
    titelNee: "Paiement non finalisé | Vernast",
    beschrijvingOk: "Merci, votre paiement a bien été reçu.",
    beschrijvingNee: "Votre paiement n'a pas été finalisé. Rien n'a été débité.",
    kopOk: "Merci, votre paiement a bien été reçu",
    uitlegOk:
      "Votre paiement a été imputé à votre location. Stripe envoie un reçu dans votre boîte mail ; il peut mettre quelques minutes à arriver.",
    kopNee: "Le paiement n'a pas été finalisé",
    uitlegNee:
      "Rien n'a été débité. Réessayez via le bouton dans votre e-mail ou le code de notre technicien, ou appelez-nous au ",
    bel: "03 689 90 65",
    terug: "Retour au site",
  },
  en: {
    titelOk: "Payment received | Vernast",
    titelNee: "Payment not completed | Vernast",
    beschrijvingOk: "Thank you, your payment has been received.",
    beschrijvingNee: "Your payment was not completed. Nothing has been charged.",
    kopOk: "Thank you, your payment has been received",
    uitlegOk:
      "Your payment has been applied to your rental. Stripe sends a receipt to your inbox; it may take a few minutes to arrive.",
    kopNee: "The payment was not completed",
    uitlegNee:
      "Nothing has been charged. Try again using the button in your email or our technician's code, or call us on ",
    bel: "03 689 90 65",
    terug: "Back to the site",
  },
} satisfies Copy<Teksten>;

function Uitkomst({ geslaagd }: { geslaagd: boolean }) {
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  return (
    <div className="vh-book vh-ext vh-saldo">
      <PageMeta
        title={geslaagd ? t.titelOk : t.titelNee}
        description={geslaagd ? t.beschrijvingOk : t.beschrijvingNee}
        noindex
      />
      <V3Header lightAfter={-1} />

      <section className="main">
        <div className="wrap" style={{ maxWidth: 680 }}>
          <div className="blk">
            {geslaagd ? (
              <div className="done">
                <div className="dico">
                  <CheckIcon size={28} />
                </div>
                <h2>{t.kopOk}</h2>
                <p>{t.uitlegOk}</p>
              </div>
            ) : (
              <>
                <div className="blkh">
                  <h2>{t.kopNee}</h2>
                </div>
                <p style={{ lineHeight: 1.7 }}>
                  {t.uitlegNee}
                  <a href="tel:+3236899065">{t.bel}</a>.
                </p>
              </>
            )}
            <div className="fnav" style={{ marginTop: 20 }}>
              <Link className="btn btn-o" to={lp("/")}>
                {t.terug}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <V3Footer />
    </div>
  );
}

export const SaldoBetaaldPage = () => <Uitkomst geslaagd />;
export const SaldoNietBetaaldPage = () => <Uitkomst geslaagd={false} />;
