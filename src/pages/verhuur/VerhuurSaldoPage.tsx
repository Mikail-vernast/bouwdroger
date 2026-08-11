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
 */
import { useCallback, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import { CheckIcon } from "@/components/verhuur/icons";
import { euro } from "@/lib/verhuur";
import "@/styles/verhuur.css";
import "@/styles/verhuur-fixes.css";

interface Saldo {
  referentie: string;
  pakket: string;
  totaal: number;
  betaald: number;
  saldo: number;
  voldaan: boolean;
}

type Status = "laden" | "open" | "voldaan" | "onbekend";

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
  const [bezig, setBezig] = useState(false);
  const [fout, setFout] = useState("");

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

  const betaal = async () => {
    setFout("");
    setBezig(true);
    try {
      const response = await fetch("/api/saldo", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ session_id: sessionId }),
      });
      const data = (await response.json()) as { url?: string; error?: string };
      if (!response.ok || !data.url) throw new Error(data.error ?? "mislukt");
      // Weg van onze pagina: vanaf hier staat Stripe aan het stuur.
      window.location.href = data.url;
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "";
      setFout(message || "Betalen lukte niet. Bel ons gerust op 03 689 90 65.");
      setBezig(false);
    }
  };

  return (
    <div className="vh-book vh-ext">
      <PageMeta
        title="Uw saldo betalen | Vernast Verhuur"
        description="Reken het openstaande bedrag van uw huur af."
        noindex
      />
      <V3Header lightAfter={-1} />

      <section className="main">
        <div className="wrap" style={{ maxWidth: 640 }}>
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
                <div className="blkh">
                  <h2>Uw saldo betalen</h2>
                </div>

                <dl
                  style={{
                    margin: "16px 0 24px",
                    padding: "18px 20px",
                    background: "var(--page)",
                    borderRadius: 12,
                    display: "grid",
                    gap: 12,
                  }}
                >
                  {[
                    ["Referentie", saldo.referentie],
                    ["Pakket", saldo.pakket],
                    ["Totaal incl. btw", euro(saldo.totaal)],
                    ["Reeds betaald", `− ${euro(saldo.betaald)}`],
                  ]
                    .filter(([, waarde]) => waarde)
                    .map(([label, waarde]) => (
                      <div
                        key={label}
                        style={{ display: "flex", justifyContent: "space-between", gap: 16 }}
                      >
                        <dt style={{ color: "var(--muted)" }}>{label}</dt>
                        <dd style={{ margin: 0, fontWeight: 600, textAlign: "right" }}>{waarde}</dd>
                      </div>
                    ))}

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 16,
                      borderTop: "1px solid rgba(0,0,0,.08)",
                      paddingTop: 12,
                      fontSize: 18,
                    }}
                  >
                    <dt style={{ fontWeight: 700 }}>Nu te betalen</dt>
                    <dd style={{ margin: 0, fontWeight: 800 }}>{euro(saldo.saldo)}</dd>
                  </div>
                </dl>

                {fout && (
                  <p style={{ color: "var(--red)", marginBottom: 16 }} role="alert">
                    {fout}
                  </p>
                )}

                <button className="btn" type="button" disabled={bezig} onClick={() => void betaal()}>
                  {bezig ? "Even geduld…" : `${euro(saldo.saldo)} betalen`}
                </button>

                <p style={{ marginTop: 14, fontSize: 13.5, color: "var(--muted)", lineHeight: 1.6 }}>
                  U betaalt met Bancontact, kaart, Apple Pay of Google Pay. Zodra de betaling
                  binnen is, sturen wij uw factuur automatisch per mail.
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
