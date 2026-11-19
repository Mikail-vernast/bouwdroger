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
import { formatEuro, useCopy, useLokaalPad, useTaal, type Copy } from "@/i18n/useTaal";
import { NUMBER_LOCALE, type Taal } from "@/i18n/taal";
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

interface Teksten {
  titel: string;
  beschrijving: string;
  laden: string;
  onbekendKop: string;
  onbekendUitleg: string;
  terug: string;
  betaaldKop: string;
  betaaldUitleg: string;
  referentie: string;
  nuTeBetalen: string;
  vanTotaal: (totaal: string, betaald: string) => string;
  uwHuur: string;
  periode: string;
  dagen: string;
  mislukt: string;
  formulierLaden: string;
  factuurNote: string;
  teVeel: string;
}

const COPY = {
  nl: {
    titel: "Uw saldo betalen | Vernast",
    beschrijving: "Reken het openstaande bedrag van uw huur af.",
    laden: "Even uw boeking ophalen…",
    onbekendKop: "Deze link werkt niet",
    onbekendUitleg:
      "Wij vinden geen boeking bij deze link. Vraag onze technieker om de code opnieuw te tonen, of bel ons op ",
    terug: "Terug naar de site",
    betaaldKop: "Betaald, bedankt",
    betaaldUitleg:
      "Uw huur is volledig afgerekend. De factuur vertrekt automatisch naar uw mailbox; die kan een paar minuten onderweg zijn.",
    referentie: "Referentie",
    nuTeBetalen: "Nu te betalen",
    vanTotaal: (totaal, betaald) => `van ${totaal} incl. btw, ${betaald} is al voldaan`,
    uwHuur: "Uw huur",
    periode: "Periode",
    dagen: "dagen",
    mislukt: "Betalen lukte niet. Bel ons gerust op 03 689 90 65.",
    formulierLaden: "Betaalformulier laden…",
    factuurNote: "Zodra de betaling binnen is, sturen wij uw factuur automatisch per mail.",
    teVeel: "Te veel aanvragen. Probeer het over een minuut opnieuw.",
  },
  fr: {
    titel: "Payer votre solde | Vernast",
    beschrijving: "Réglez le montant restant de votre location.",
    laden: "Récupération de votre réservation…",
    onbekendKop: "Ce lien ne fonctionne pas",
    onbekendUitleg:
      "Nous ne trouvons aucune réservation liée à ce lien. Demandez à notre technicien d'afficher à nouveau le code, ou appelez-nous au ",
    terug: "Retour au site",
    betaaldKop: "Payé, merci",
    betaaldUitleg:
      "Votre location est entièrement réglée. La facture part automatiquement vers votre boîte mail ; elle peut mettre quelques minutes à arriver.",
    referentie: "Référence",
    nuTeBetalen: "À payer maintenant",
    vanTotaal: (totaal, betaald) => `sur ${totaal} TVAC, ${betaald} déjà réglés`,
    uwHuur: "Votre location",
    periode: "Période",
    dagen: "jours",
    mislukt: "Le paiement n'a pas abouti. N'hésitez pas à nous appeler au 03 689 90 65.",
    formulierLaden: "Chargement du formulaire de paiement…",
    factuurNote: "Dès réception du paiement, nous vous envoyons automatiquement votre facture par e-mail.",
    teVeel: "Trop de demandes. Réessayez dans une minute.",
  },
  en: {
    titel: "Pay your balance | Vernast",
    beschrijving: "Settle the outstanding amount for your rental.",
    laden: "Fetching your booking…",
    onbekendKop: "This link does not work",
    onbekendUitleg:
      "We cannot find a booking for this link. Ask our technician to show the code again, or call us on ",
    terug: "Back to the site",
    betaaldKop: "Paid, thank you",
    betaaldUitleg:
      "Your rental has been paid in full. The invoice is sent to your inbox automatically; it may take a few minutes to arrive.",
    referentie: "Reference",
    nuTeBetalen: "To pay now",
    vanTotaal: (totaal, betaald) => `of ${totaal} incl. VAT, ${betaald} already paid`,
    uwHuur: "Your rental",
    periode: "Period",
    dagen: "days",
    mislukt: "Payment did not go through. Feel free to call us on 03 689 90 65.",
    formulierLaden: "Loading payment form…",
    factuurNote: "As soon as the payment is received, we email your invoice automatically.",
    teVeel: "Too many requests. Please try again in a minute.",
  },
} satisfies Copy<Teksten>;

/** "2026-09-09" → "9 sep 2026". Leeg als de sessie de datum niet draagt. */
function datum(waarde: string | undefined, taal: Taal): string {
  if (!waarde) return "";
  const parsed = new Date(`${waarde}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return "";
  return parsed.toLocaleDateString(NUMBER_LOCALE[taal], { day: "numeric", month: "short", year: "numeric" });
}

const VerhuurSaldoPage = () => {
  const [searchParams] = useSearchParams();
  const taal = useTaal();
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  // Nederlands blijft op de oude notatie ("€ 29,00"), zodat die pagina tekst-identiek blijft.
  const eur = (n: number) => (taal === "nl" ? euro(n) : formatEuro(n, taal));
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
          // De taal bepaalt het betaalformulier en waar Stripe de betaler terugstuurt.
          body: JSON.stringify({ session_id: sessionId, taal }),
        });
        const data = (await response.json()) as {
          clientSecret?: string;
          publishableKey?: string;
          error?: string;
        };
        if (response.status === 429) throw new Error(t.teVeel);
        if (!response.ok || !data.clientSecret || !data.publishableKey) {
          throw new Error(data.error ?? "mislukt");
        }
        const { loadStripe } = await import("@stripe/stripe-js");
        // `locale` vertaalt de velden en foutmeldingen van het formulier zelf.
        setStripeJs(loadStripe(data.publishableKey, { locale: taal }));
        setClientSecret(data.clientSecret);
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "";
        setFout(message || t.mislukt);
      }
    };

    void start();
    // `t` en `taal` volgen de URL en veranderen niet zonder nieuwe pagina.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, sessionId]);

  const periode =
    saldo && datum(saldo.start, taal) && datum(saldo.eind, taal)
      ? `${datum(saldo.start, taal)}, ${datum(saldo.eind, taal)}${saldo.dagen ? ` · ${saldo.dagen} ${t.dagen}` : ""}`
      : "";

  return (
    <div className="vh-book vh-ext vh-saldo">
      <PageMeta
        title={t.titel}
        description={t.beschrijving}
        noindex
      />
      <V3Header lightAfter={-1} />

      <section className="main">
        <div className="wrap" style={{ maxWidth: 680 }}>
          <div className="blk">
            {status === "laden" && (
              <div className="blkh">
                <h2>{t.laden}</h2>
              </div>
            )}

            {status === "onbekend" && (
              <>
                <div className="blkh">
                  <h2>{t.onbekendKop}</h2>
                </div>
                <p style={{ lineHeight: 1.7 }}>
                  {t.onbekendUitleg}
                  <a href="tel:+3236899065">03 689 90 65</a>.
                </p>
                <div className="fnav" style={{ marginTop: 20 }}>
                  <Link className="btn btn-o" to={lp("/verhuur/calculator")}>
                    {t.terug}
                  </Link>
                </div>
              </>
            )}

            {status === "voldaan" && saldo && (
              <div className="done">
                <div className="dico">
                  <CheckIcon size={28} />
                </div>
                <h2>{t.betaaldKop}</h2>
                <p>{t.betaaldUitleg}</p>
                <div className="dref">
                  <span>{t.referentie}</span>
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
                  <span className="sldlabel">{t.nuTeBetalen}</span>
                  <div className="sldsom">{eur(saldo.saldo)}</div>
                  <p className="sldsub">{t.vanTotaal(eur(saldo.totaal), eur(saldo.betaald))}</p>
                </div>

                <dl className="sldlines">
                  {[
                    [t.uwHuur, saldo.pakket],
                    [t.periode, periode],
                    [t.referentie, saldo.referentie],
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
                      <BoekingBetaalformulier bedrag={eur(saldo.saldo)} />
                    </CheckoutElementsProvider>
                  ) : fout ? (
                    <p className="perr" role="alert">
                      {fout}
                    </p>
                  ) : (
                    <p className="payload">{t.formulierLaden}</p>
                  )}
                </div>

                <p className="paynote">
                  <CheckIcon size={13} strokeWidth={3} />
                  <span>{t.factuurNote}</span>
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
