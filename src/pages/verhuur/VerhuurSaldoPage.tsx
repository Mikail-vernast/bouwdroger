/**
 * Het saldo afrekenen bij de installatie.
 *
 * De technieker toont de QR van deze pagina op de werf; de klant scant hem met
 * zijn eigen telefoon, ziet wat er nog openstaat en betaalt met Bancontact,
 * kaart of Apple Pay. Daarna maakt het portaal de factuur en die vertrekt
 * meteen per mail — dit scherm belooft precies dat.
 *
 * De link draagt het sessie-ID van de boeking, net als de verlengpagina. Alles
 * wat hier op het scherm komt, komt van de server: het bedrag valt niet in de
 * URL te veranderen.
 *
 * Het betaalformulier staat in deze pagina zelf, hetzelfde als in de
 * boekingswizard. Er stond hier eerst een knop naar de gehoste pagina van
 * Stripe: iemand die op een werf net een QR gescand heeft, kreeg dan nóg een
 * sprong naar een ander adres in een andere vormtaal. De betaalsessie wordt
 * daarom meteen aangemaakt zodra blijkt dat er iets openstaat.
 */
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CheckoutElementsProvider } from "@stripe/react-stripe-js/checkout";
import type { Stripe as StripeJs } from "@stripe/stripe-js";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import BoekingBetaalformulier from "@/components/verhuur/BoekingBetaalformulier";
import { CheckIcon } from "@/components/verhuur/icons";
import { STRIPE_APPEARANCE } from "@/lib/stripeAppearance";
import { euro } from "@/lib/verhuur";
import "@/styles/verhuur.css";
import "@/styles/verhuur-fixes.css";
import "@/styles/verhuur-betaling.css";

interface Saldo {
  referentie: string;
  pakket: string;
  totaal: number;
  betaald: number;
  saldo: number;
  voldaan: boolean;
  /** Huurperiode zoals ze op de bevestiging stond; leeg bij oudere sessies. */
  start?: string;
  eind?: string;
  dagen?: number;
}

type Status = "laden" | "open" | "voldaan" | "onbekend";

/** "2026-09-09" → "9 sep 2026". Leeg als de sessie de datum niet draagt. */
function datum(waarde: string | undefined): string {
  if (!waarde) return "";
  const parsed = new Date(`${waarde}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return "";
  return parsed.toLocaleDateString("nl-BE", { day: "numeric", month: "short", year: "numeric" });
}

const VerhuurSaldoPage = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id") ?? "";
  /*
    Staat er na de terugkeer van Stripe in. De server heeft hem nodig om de
    betaling af te handelen wanneer de webhook niet gereden heeft — lokaal is
    dat altijd het geval.
  */
  const balanceSession = searchParams.get("saldo_session") ?? "";

  const [status, setStatus] = useState<Status>("laden");
  const [saldo, setSaldo] = useState<Saldo | null>(null);
  const [clientSecret, setClientSecret] = useState("");
  const [stripeJs, setStripeJs] = useState<Promise<StripeJs | null> | null>(null);
  const [fout, setFout] = useState("");
  /*
    Eén betaalsessie per pagebezoek. Zonder deze vlag maakt elke her-render die
    `saldo` aanraakt een nieuwe sessie bij Stripe aan — en elke sessie telt mee
    voor de drempel per IP in `api/saldo.ts`.
  */
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
      const data = (await response.json()) as Saldo;
      setSaldo(data);
      setStatus(data.voldaan ? "voldaan" : "open");
    } catch {
      setStatus("onbekend");
    }
  }, [sessionId, balanceSession]);

  useEffect(() => {
    void laad();
  }, [laad]);

  /*
    Stripe.js alvast binnenhalen terwijl de boeking opgehaald wordt. Zie
    `VerhuurBoekingPage`: de import injecteert het script als neveneffect, zodat
    het laden van js.stripe.com niet achter onze eigen aanvraag komt te staan.
  */
  useEffect(() => {
    void import("@stripe/stripe-js");
  }, []);

  /* De betaalsessie zodra vaststaat dát er iets openstaat. */
  useEffect(() => {
    if (status !== "open" || sessieGevraagd.current) return;
    sessieGevraagd.current = true;

    const start = async () => {
      try {
        const response = await fetch("/api/saldo", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ session_id: sessionId }),
        });
        const data = (await response.json()) as {
          clientSecret?: string;
          publishableKey?: string;
          error?: string;
        };
        if (!response.ok || !data.clientSecret || !data.publishableKey) {
          throw new Error(data.error ?? "mislukt");
        }
        const { loadStripe } = await import("@stripe/stripe-js");
        setStripeJs(loadStripe(data.publishableKey));
        setClientSecret(data.clientSecret);
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "";
        setFout(message || "Betalen lukte niet. Bel ons gerust op 03 689 90 65.");
      }
    };

    void start();
  }, [status, sessionId]);

  const periode =
    saldo && datum(saldo.start) && datum(saldo.eind)
      ? `${datum(saldo.start)} — ${datum(saldo.eind)}${saldo.dagen ? ` · ${saldo.dagen} dagen` : ""}`
      : "";

  return (
    <div className="vh-book vh-ext vh-saldo">
      <PageMeta
        title="Uw saldo betalen | Vernast Verhuur"
        description="Reken het openstaande bedrag van uw huur af."
        noindex
      />
      <V3Header lightAfter={-1} />

      <section className="main">
        <div className="wrap" style={{ maxWidth: 680 }}>
          <div className="blk">
            {status === "laden" && (
              <div className="blkh">
                <h2>Even uw boeking ophalen…</h2>
              </div>
            )}

            {status === "onbekend" && (
              <>
                <div className="blkh">
                  <h2>Deze link werkt niet</h2>
                </div>
                <p style={{ lineHeight: 1.7 }}>
                  Wij vinden geen boeking bij deze link. Vraag onze technieker om de code opnieuw
                  te tonen, of bel ons op <a href="tel:+3236899065">03 689 90 65</a>.
                </p>
                <div className="fnav" style={{ marginTop: 20 }}>
                  <Link className="btn btn-o" to="/verhuur/calculator">
                    Terug naar de site
                  </Link>
                </div>
              </>
            )}

            {status === "voldaan" && saldo && (
              <div className="done">
                <div className="dico">
                  <CheckIcon size={28} />
                </div>
                <h2>Betaald — bedankt</h2>
                <p>
                  Uw huur is volledig afgerekend. De factuur vertrekt automatisch naar uw
                  mailbox; die kan een paar minuten onderweg zijn.
                </p>
                <div className="dref">
                  <span>Referentie</span>
                  <span>{saldo.referentie}</span>
                </div>
              </div>
            )}

            {status === "open" && saldo && (
              <>
                {/*
                  Het bedrag eerst en groot. Dit scherm wordt geopend met een
                  telefoon in de hand op een werf: de eerste vraag is "hoeveel",
                  niet "welke referentie".
                */}
                <div className="sldtop">
                  <span className="sldlabel">Nu te betalen</span>
                  <div className="sldsom">{euro(saldo.saldo)}</div>
                  <p className="sldsub">
                    van {euro(saldo.totaal)} incl. btw — {euro(saldo.betaald)} is al voldaan
                  </p>
                </div>

                <dl className="sldlines">
                  {[
                    ["Uw huur", saldo.pakket],
                    ["Periode", periode],
                    ["Referentie", saldo.referentie],
                  ]
                    .filter(([, waarde]) => waarde)
                    .map(([label, waarde]) => (
                      <div key={label} className="sldline">
                        <dt>{label}</dt>
                        <dd>{waarde}</dd>
                      </div>
                    ))}
                </dl>

                <div className="paybox">
                  {clientSecret && stripeJs ? (
                    <CheckoutElementsProvider
                      key={clientSecret}
                      stripe={stripeJs}
                      options={{ clientSecret, elementsOptions: { appearance: STRIPE_APPEARANCE } }}
                    >
                      <BoekingBetaalformulier bedrag={euro(saldo.saldo)} />
                    </CheckoutElementsProvider>
                  ) : fout ? (
                    <p className="perr" role="alert">
                      {fout}
                    </p>
                  ) : (
                    <p className="payload">Betaalformulier laden…</p>
                  )}
                </div>

                <p className="paynote">
                  <CheckIcon size={13} strokeWidth={3} />
                  <span>
                    Zodra de betaling binnen is, sturen wij uw factuur automatisch per mail.
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      <V3Footer />
    </div>
  );
};

export default VerhuurSaldoPage;
