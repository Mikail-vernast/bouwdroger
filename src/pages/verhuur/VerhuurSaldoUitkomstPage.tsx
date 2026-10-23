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
import "@/styles/verhuur.css";
import "@/styles/verhuur-fixes.css";
import "@/styles/verhuur-betaling.css";

function Uitkomst({ geslaagd }: { geslaagd: boolean }) {
  return (
    <div className="vh-book vh-ext vh-saldo">
      <PageMeta
        title={geslaagd ? "Betaling ontvangen | Vernast" : "Betaling niet afgerond | Vernast"}
        description={
          geslaagd
            ? "Bedankt, uw betaling is ontvangen."
            : "Uw betaling is niet afgerond. Er is niets aangerekend."
        }
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
                <h2>Bedankt, uw betaling is ontvangen</h2>
                <p>
                  Het saldo van uw huur is afgerekend. Stripe stuurt een ontvangstbewijs naar uw
                  mailbox; dat kan een paar minuten onderweg zijn.
                </p>
              </div>
            ) : (
              <>
                <div className="blkh">
                  <h2>De betaling is niet afgerond</h2>
                </div>
                <p style={{ lineHeight: 1.7 }}>
                  Er is niets aangerekend. Scan de code van onze technieker opnieuw om het nog eens
                  te proberen, of bel ons op <a href="tel:+3236899065">03 689 90 65</a>.
                </p>
              </>
            )}
            <div className="fnav" style={{ marginTop: 20 }}>
              <Link className="btn btn-o" to="/">
                Terug naar de site
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
