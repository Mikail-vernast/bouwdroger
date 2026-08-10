/**
 * Verlengen van een lopende huur.
 *
 * De knop in de verlengmail (sjabloon 200) komt hier binnen met het sessie-ID
 * van de boeking. Daarmee haalt de pagina de huur op, zodat de klant niets moet
 * intikken wat hij al gegeven heeft: hij kiest hoeveel langer, bevestigt zijn
 * telefoonnummer en is klaar.
 *
 * Bewust geen directe bevestiging. Of verlengen kan, hangt af van wat er voor
 * de volgende klant ingepland staat; dat weet deze pagina niet. Ze belooft dus
 * een terugbelafspraak en geen zekerheid.
 */
import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import { CheckIcon, WarnIcon } from "@/components/verhuur/icons";
import { isValidPhone, maskPhone } from "@/lib/inputMask";
import { addDays, formatLongDate, isoDate, parseDeviceLines } from "@/lib/verhuur";
import "@/styles/verhuur.css";
import "@/styles/verhuur-fixes.css";

interface Huur {
  referentie: string;
  pakket: string;
  toestellen: string;
  huur_start: string;
  huur_eind: string;
  tijdslot: string;
  /** Het nummer uit de boeking; het formulier vult het alvast in. */
  telefoon: string;
}

/** Kort genoeg om niemand op te houden, lang genoeg om iets te zeggen. */
const MIN_TOELICHTING = 5;

/** De keuzes die de klant krijgt; in weken, want zo verhuren wij. */
const KEUZES = [
  { dagen: 7, label: "1 week" },
  { dagen: 14, label: "2 weken" },
  { dagen: 21, label: "3 weken" },
  { dagen: 28, label: "4 weken" },
];

const DEVICE_LABEL: Record<string, string> = {
  small: "Small Bouwdroger",
  medium: "Medium Bouwdroger",
  axiaal: "Axiaalventilator",
  kachel: "Elektrische kachel",
};

type Status = "laden" | "klaar" | "onbekend" | "verstuurd";

const VerhuurVerlengenPage = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id") ?? "";

  const [status, setStatus] = useState<Status>("laden");
  const [huur, setHuur] = useState<Huur | null>(null);
  const [dagen, setDagen] = useState(14);
  const [telefoon, setTelefoon] = useState("");
  const [opmerking, setOpmerking] = useState("");
  const [website, setWebsite] = useState("");
  const [bezig, setBezig] = useState(false);
  const [fout, setFout] = useState("");
  const [nieuwEinde, setNieuwEinde] = useState("");

  useEffect(() => {
    if (!sessionId) {
      setStatus("onbekend");
      return;
    }

    let afgebroken = false;
    fetch(`/api/extension?session_id=${encodeURIComponent(sessionId)}`)
      .then((response) => (response.ok ? response.json() : Promise.reject(new Error("niet gevonden"))))
      .then((data: Huur) => {
        if (afgebroken) return;
        setHuur(data);
        // Wat hij bij het boeken opgaf staat er alvast in; overtypen mag.
        if (data.telefoon) setTelefoon(maskPhone(data.telefoon));
        setStatus("klaar");
      })
      .catch(() => {
        if (!afgebroken) setStatus("onbekend");
      });

    return () => {
      afgebroken = true;
    };
  }, [sessionId]);

  /** Wat de klant nu heeft staan, in leesbare vorm. */
  const toestellen = useMemo(() => {
    const lines = parseDeviceLines(huur?.toestellen);
    return lines.map((l) => `${l.qty}× ${DEVICE_LABEL[l.device_key] ?? l.device_key}`).join(", ");
  }, [huur?.toestellen]);

  /*
    De einddatum die de klant zou krijgen. Onder voorbehoud, want pas de
    planning in het portaal bepaalt of het kan — vandaar dat de tekst eronder
    over een aanvraag spreekt en niet over een bevestiging.
  */
  const voorstel = useMemo(() => {
    if (!huur?.huur_eind) return "";
    return isoDate(addDays(new Date(huur.huur_eind), dagen));
  }, [huur?.huur_eind, dagen]);

  /*
    De toelichting telt mee: de planner moet weten waarom er verlengd wordt,
    anders belt hij toch terug om precies dat te vragen.
  */
  const kanVersturen =
    isValidPhone(telefoon) && opmerking.trim().length >= MIN_TOELICHTING && !bezig;

  const verstuur = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!kanVersturen) return;

    setBezig(true);
    setFout("");

    try {
      const response = await fetch("/api/extension", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ sessionId, extraDagen: dagen, telefoon, opmerking, website }),
      });
      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
        nieuw_einde?: string;
      };

      if (!response.ok) {
        setFout(data.error ?? "Versturen lukte niet. Bel ons gerust op 03 689 90 65.");
        return;
      }

      setNieuwEinde(data.nieuw_einde ?? voorstel);
      setStatus("verstuurd");
    } catch {
      setFout("Versturen lukte niet. Bel ons gerust op 03 689 90 65.");
    } finally {
      setBezig(false);
    }
  };

  return (
    <div className="vh-book">
      <PageMeta
        title="Uw huur verlengen | Vernast Verhuur"
        description="Vraag aan om uw bouwdrogers langer te houden."
        noindex
      />
      <V3Header />

      {/*
        `main` en `wrap` zijn dezelfde bouwstenen als de boekingspagina, met de
        marge bovenaan die daar van de stappenbalk komt — zonder die ruimte
        schuift de vaste header over de inhoud heen.
      */}
      <section className="main" style={{ marginTop: "clamp(96px, 12vw, 146px)" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <div className="blk">
            {status === "laden" && (
              <div className="blkh">
                <h2>Even uw boeking ophalen…</h2>
              </div>
            )}

            {status === "onbekend" && (
              <>
                <div className="blkh">
                  <h2>Deze link werkt niet meer</h2>
                </div>
                <p style={{ lineHeight: 1.7 }}>
                  Wij vinden geen lopende huur bij deze link. Gebruik de knop uit de mail die u
                  twee dagen vóór het einde van uw huurperiode kreeg, of bel ons op{" "}
                  <a href="tel:+3236899065">03 689 90 65</a> — dan regelen wij het telefonisch.
                </p>
                <div className="fnav" style={{ marginTop: 20 }}>
                  <Link className="btn btn-o" to="/verhuur/calculator">
                    Terug naar de site
                  </Link>
                </div>
              </>
            )}

            {status === "verstuurd" && (
              <div className="done">
                <div className="dico">
                  <CheckIcon size={28} />
                </div>
                <h2>Uw aanvraag staat genoteerd</h2>
                <p>
                  Wij kijken na of de toestellen langer bij u kunnen blijven en bellen u binnen één
                  werkdag terug op {telefoon}. Zolang u niets gehoord heeft, blijft de ophaling op
                  de oorspronkelijke datum staan.
                </p>
                {nieuwEinde && (
                  <div className="dref">
                    <span>Gevraagd tot</span>
                    <span>{formatLongDate(new Date(nieuwEinde))}</span>
                  </div>
                )}
              </div>
            )}

            {status === "klaar" && huur && (
              <form onSubmit={verstuur}>
                <div className="blkh">
                  <h2>Uw huur verlengen</h2>
                </div>

                {/*
                  Eigen opmaak in plaats van de `.sb`-samenvatting van de
                  boekingspagina: die staat daar in een donkere zijbalk en zet
                  haar tekst dus wit — hier op een witte kaart is ze onleesbaar.
                */}
                <dl
                  style={{
                    margin: "16px 0 26px",
                    padding: "18px 20px",
                    background: "var(--page)",
                    borderRadius: 12,
                    display: "grid",
                    gap: 12,
                  }}
                >
                  {[
                    ["Referentie", huur.referentie],
                    ["Pakket", huur.pakket],
                    ["Bij u geplaatst", toestellen],
                    [
                      "Ophaling nu gepland op",
                      huur.huur_eind ? formatLongDate(new Date(huur.huur_eind)) : "",
                    ],
                  ]
                    .filter(([, waarde]) => waarde)
                    .map(([label, waarde]) => (
                      <div key={label}>
                        <dt
                          style={{
                            fontSize: 11,
                            letterSpacing: ".06em",
                            textTransform: "uppercase",
                            color: "var(--txt-dim)",
                            fontWeight: 600,
                            marginBottom: 3,
                          }}
                        >
                          {label}
                        </dt>
                        <dd style={{ margin: 0, fontSize: 15, fontWeight: 600, lineHeight: 1.5 }}>
                          {waarde}
                        </dd>
                      </div>
                    ))}
                </dl>

                <div className="blkh">
                  <h2>Hoeveel langer wilt u ze houden?</h2>
                </div>
                <div className="payopts">
                  {KEUZES.map((keuze) => (
                    <button
                      key={keuze.dagen}
                      type="button"
                      className={`payopt${dagen === keuze.dagen ? " sel" : ""}`}
                      onClick={() => setDagen(keuze.dagen)}
                    >
                      <b>{keuze.label}</b>
                      <span>
                        tot {voorstel && formatLongDate(new Date(isoDate(addDays(new Date(huur.huur_eind), keuze.dagen))))}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="frow" style={{ marginTop: 24 }}>
                  <div className="fld" style={{ gridColumn: "span 3" }}>
                    <label htmlFor="vTel">Telefoonnummer waarop wij u kunnen bereiken</label>
                    <input
                      type="tel"
                      id="vTel"
                      placeholder="0470 00 00 00"
                      value={telefoon}
                      onChange={(e) => setTelefoon(maskPhone(e.target.value))}
                    />
                  </div>
                </div>

                <div className="frow" style={{ marginTop: 14 }}>
                  <div className="fld" style={{ gridColumn: "span 3" }}>
                    <label htmlFor="vNote">Waarom wilt u verlengen?</label>
                    <textarea
                      id="vNote"
                      rows={3}
                      placeholder="Bijvoorbeeld: de chape is nog niet droog op de kelderverdieping."
                      value={opmerking}
                      onChange={(e) => setOpmerking(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "13px 14px",
                        border: "1.5px solid var(--line-2)",
                        borderRadius: 11,
                        fontFamily: "var(--fb)",
                        fontSize: 14.5,
                        resize: "vertical",
                      }}
                    />
                  </div>
                </div>

                {/* Honeypot: onzichtbaar voor een bezoeker, ingevuld door een bot. */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  style={{ position: "absolute", left: -9999, width: 1, height: 1 }}
                />

                {fout && (
                  <div className="warn" style={{ marginTop: 18 }}>
                    <WarnIcon size={18} />
                    <span>{fout}</span>
                  </div>
                )}

                <p style={{ marginTop: 18, fontSize: 13.5, lineHeight: 1.6, color: "var(--txt-mid)" }}>
                  Dit is een aanvraag, nog geen bevestiging: wij kijken eerst na of de toestellen
                  langer bij u kunnen blijven. U hoort binnen één werkdag van ons, en de extra
                  dagen komen op uw volgende factuur. Uw toelichting helpt ons meteen inschatten
                  of één week volstaat.
                </p>

                <div className="fnav" style={{ marginTop: 20 }}>
                  <button className="btn btn-r" type="submit" disabled={!kanVersturen}>
                    {bezig ? "Versturen…" : "Verlenging aanvragen"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <V3Footer />
    </div>
  );
};

export default VerhuurVerlengenPage;
