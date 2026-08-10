import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import { CheckIcon, InfoIcon, PinIcon } from "@/components/home-v3/icons";
import {
  MAX_PER_PRODUCT,
  PICKUP_GROUPS,
  PICKUP_PERIODS,
  PICKUP_PRODUCTS,
  PICKUP_SLOTS,
} from "@/data/afhalen";
import { SEO } from "@/data/seo";
import {
  normalizeDays,
  normalizeSlot,
  parseSelection,
  pickupSummary,
  serializeSelection,
} from "@/lib/afhalen";
import { ONLINE_DISCOUNT, VAT_RATE } from "@/lib/booking";
import { breadcrumbSchema, offerCatalogSchema } from "@/lib/schema";
import { isValidEmail, isValidPhone, maskEmail, maskPhone } from "@/lib/inputMask";
import { isoDate } from "@/lib/verhuur";
import "@/styles/verhuur.css";
import "@/styles/verhuur-fixes.css";

/**
 * Zelf afhalen — losse toestellen huren en ophalen in Aartselaar.
 *
 * Deze pagina was een demo: ze rekende met een eigen prijslijst uit de
 * designhandoff en bevestigde met een verzonnen referentienummer, zonder ooit
 * iets te versturen. Wie hier reserveerde, kreeg "uw afhaalreservatie staat
 * vast" te zien terwijl er nergens een order stond.
 *
 * Nu komt de catalogus uit dezelfde gepubliceerde tarieven als de
 * toestelpagina's (zie `data/afhalen.ts`) en gaat de reservatie via
 * `/api/order` naar het portaal, met een referentie die van de server komt.
 *
 * Betaald wordt er nog altijd niets vooraf: bij afhalen volgt de factuur na de
 * huurperiode.
 */
const euro = (n: number) =>
  `€ ${n.toLocaleString("nl-BE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const shortDate = (d: Date) => d.toLocaleDateString("nl-BE", { day: "numeric", month: "short" });

/** Tomorrow, as the pickup date the page starts on. */
function tomorrow(): string {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return isoDate(d);
}

/** Wat er nog ontbreekt voor deze reservatie klaar is. */
interface Missing {
  field: string;
  text: string;
}

const VerhuurAfhalenPage = () => {
  const [searchParams] = useSearchParams();

  /*
    De toestelpagina stuurt de keuze mee in de URL. Zonder dit begon de bezoeker
    hier met een lege lijst en moest hij alles opnieuw aanduiden — precies wat
    hij op de vorige pagina net had ingesteld.
  */
  const preset = useMemo(() => {
    const lines = parseSelection(searchParams.get("d"));
    const quantities: Record<string, number> = {};
    for (const line of lines) quantities[line.product.key] = line.qty;
    return {
      quantities,
      days: normalizeDays(searchParams.get("days")),
      slot: normalizeSlot(searchParams.get("slot")),
      date: searchParams.get("date") ?? "",
    };
    // Eén keer, bij het openen van de pagina: daarna stuurt de bezoeker.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [quantities, setQuantities] = useState<Record<string, number>>(preset.quantities);
  const [days, setDays] = useState(preset.days);
  const [date, setDate] = useState(() => {
    const min = isoDate(new Date());
    return preset.date >= min ? preset.date : tomorrow();
  });
  const [slot, setSlot] = useState(preset.slot);
  const [customerType, setCustomerType] = useState<"part" | "pro">("part");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [address, setAddress] = useState("");
  const [company, setCompany] = useState("");
  const [vat, setVat] = useState("");
  const [note, setNote] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [payment, setPayment] = useState<"online" | "factuur">("online");
  const [reference, setReference] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showMissing, setShowMissing] = useState(false);
  const [checking, setChecking] = useState(() => searchParams.has("session_id"));

  const minDate = useMemo(() => isoDate(new Date()), []);
  const formRef = useRef<HTMLDivElement>(null);

  const qty = (key: string) => quantities[key] ?? 0;
  const groupCount = (group: string) =>
    PICKUP_PRODUCTS.filter((p) => p.group === group).reduce((total, p) => total + qty(p.key), 0);

  const step = (key: string, delta: number) =>
    setQuantities((current) => ({
      ...current,
      [key]: Math.max(0, Math.min(MAX_PER_PRODUCT, (current[key] ?? 0) + delta)),
    }));

  const selection = useMemo(() => serializeSelection(quantities), [quantities]);
  const summary = useMemo(() => pickupSummary(parseSelection(selection), days), [selection, days]);

  /*
    Wat er effectief afgerekend wordt. Online betalen geeft dezelfde korting als
    bij een pakket; die staat in de gepubliceerde tarieven, niet hier. De server
    rekent hetzelfde uit — dit is enkel wat de bezoeker ziet.
  */
  const round = (amount: number) => Math.round(amount * 100) / 100;
  const discount = payment === "online" ? round(summary.net * ONLINE_DISCOUNT) : 0;
  const payable = useMemo(() => {
    const net = round(summary.net - discount);
    const vat = round(net * VAT_RATE);
    return { net, vat, gross: round(net + vat) };
  }, [summary.net, discount]);

  /*
    Waarom de knop nog niet kan. Vroeger stond hij simpelweg uit: alles ingevuld
    en toch niets dat verklaarde welk veld tegenhield. Nu blijft hij klikbaar en
    zegt de pagina wat er ontbreekt.
  */
  const missing: Missing[] = [];
  if (summary.units === 0) missing.push({ field: "toestellen", text: "Kies minstens één toestel." });
  if (!date) missing.push({ field: "aDate", text: "Kies een afhaaldatum." });
  if (!name.trim()) missing.push({ field: "cNaam", text: "Vul uw naam in." });
  if (!isValidPhone(phone))
    missing.push({ field: "cTel", text: "Vul een geldig telefoonnummer in." });
  if (!isValidEmail(mail)) missing.push({ field: "cMail", text: "Vul een geldig e-mailadres in." });
  if (!address.trim()) missing.push({ field: "cAdres", text: "Vul uw adres in (voor de factuur)." });
  if (customerType === "pro" && !company.trim())
    missing.push({ field: "cFirma", text: "Vul uw bedrijfsnaam in." });
  if (customerType === "pro" && !vat.trim())
    missing.push({ field: "cBtw", text: "Vul uw btw-nummer in." });
  if (!agreed) missing.push({ field: "cAkkoord", text: "Bevestig de huurvoorwaarden." });

  const weekSuffix = days >= 7 && days % 7 === 0 ? ` (${days / 7} ${days === 7 ? "week" : "weken"})` : "";
  const summaryTitle = summary.units
    ? `${summary.units} toestel${summary.units === 1 ? "" : "len"} · ${days} dagen${weekSuffix} · afhalen`
    : "Nog geen toestellen gekozen";

  const returnDate = useMemo(() => {
    if (!date) return null;
    const start = new Date(`${date}T00:00:00`);
    if (Number.isNaN(start.getTime())) return null;
    const end = new Date(start);
    end.setDate(end.getDate() + days);
    return { start, end };
  }, [date, days]);

  // Na een geslaagde reservatie staat de bevestiging bovenaan.
  useEffect(() => {
    if (reference) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [reference]);

  /*
    Terug van Stripe. De betaling zelf wordt hier niet geloofd op basis van de
    URL: `/api/checkout-session` vraagt het aan Stripe zelf en zet meteen de
    order in het portaal. Zonder die controle zou iemand het bevestigingsscherm
    kunnen openen door zelf een `session_id` in de adresbalk te zetten.
  */
  useEffect(() => {
    const sessionId = searchParams.get("session_id");
    if (!sessionId) return;

    let cancelled = false;
    fetch(`/api/checkout-session?id=${encodeURIComponent(sessionId)}`)
      .then((response) => response.json())
      .then((result: { paid?: boolean; reference?: string }) => {
        if (cancelled) return;
        if (result.paid && result.reference) setReference(result.reference);
        else
          setError(
            "Uw betaling is nog niet bevestigd. Duurt dit langer dan een paar minuten, bel ons dan op 03 689 90 65."
          );
      })
      .catch(() => {
        if (!cancelled)
          setError("We konden uw betaling niet nakijken. Bel ons gerust op 03 689 90 65.");
      })
      .finally(() => {
        if (!cancelled) setChecking(false);
      });

    return () => {
      cancelled = true;
    };
  }, [searchParams]);

  const reserve = async () => {
    if (busy || reference) return;

    if (missing.length > 0) {
      setShowMissing(true);
      const target = document.getElementById(missing[0].field) ?? formRef.current;
      target?.scrollIntoView({ behavior: "smooth", block: "center" });
      if (target instanceof HTMLInputElement || target instanceof HTMLSelectElement) target.focus();
      return;
    }

    setBusy(true);
    setError(null);

    const order = {
      lines: selection,
      days,
      date,
      slot,
      customer_type: customerType === "pro" ? "zakelijk" : "particulier",
      name: name.trim(),
      phone,
      email: mail,
      address: address.trim(),
      company_name: company.trim(),
      vat_number: vat.trim(),
      notes: note.trim(),
    };

    try {
      /*
        Online betalen loopt via Stripe (met 5% korting), de andere keuze zet de
        reservatie meteen in het portaal en factureert achteraf. Beide routes
        herrekenen het bedrag zelf — wat hier op het scherm staat, is een
        weergave, geen invoer.
      */
      const online = payment === "online";
      const response = await fetch(online ? "/api/afhaal-checkout" : "/api/order", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(online ? { data: order } : { kind: "afhaal", data: order }),
      });

      const result = (await response.json().catch(() => ({}))) as {
        reference?: string;
        url?: string;
        error?: string;
      };

      if (!response.ok) {
        setError(
          result.error ??
            "Uw reservatie kon niet doorgegeven worden. Probeer het opnieuw of bel ons op 03 689 90 65."
        );
        return;
      }

      if (online) {
        if (!result.url) {
          setError("Betaling kon niet gestart worden. Probeer het opnieuw of bel ons op 03 689 90 65.");
          return;
        }
        // Blijft "bezig" staan tot de browser weg is: geen tweede klik.
        window.location.href = result.url;
        return;
      }

      setReference(result.reference ?? null);
    } catch {
      setError(
        "Uw reservatie kon niet verstuurd worden. Controleer uw verbinding of bel ons op 03 689 90 65."
      );
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="vh-pick">
      {/*
        Deze pagina had als enige indexeerbare pagina van de verhuurfunnel
        géén gestructureerde data — geen kruimelpad, geen prijzen. Terwijl ze
        precies het antwoord bevat op "waar kan ik een bouwdroger afhalen":
        een adres, openingsuren en een tarieflijst.
      */}
      <PageMeta
        {...SEO.verhuurAfhalen}
        jsonLd={[
          offerCatalogSchema(
            "Afhaaltarieven losse toestellen, Aartselaar",
            PICKUP_PRODUCTS.map((product) => ({
              name: product.name,
              description: product.sub,
              path: "/verhuur/afhalen",
              pricePerDay: product.day,
            }))
          ),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Toestellen", path: "/verhuur/afhalen" },
          ]),
        ]}
      />
      <V3Header />

      <header className="top">
        <div className="wrap in">
          <Link to="/">
            <img src="/vernast/logo-horizontal-white.webp" alt="Vernast Verhuur" loading="lazy" decoding="async" />
          </Link>
          <a className="bk" href="/#toestellen">
            ← Terug naar het gamma
          </a>
        </div>
      </header>

      <section className="lead">
        <div className="wrap">
          <span className="chip">Zelf afhalen · Aartselaar</span>
          <h1>Losse toestellen huren en zelf afhalen.</h1>
          <p>
            Stel zelf samen wat u nodig heeft, bouwdrogers, ventilatoren en kachels, en haal alles
            af in ons magazijn. Betaal online met {Math.round(ONLINE_DISCOUNT * 100)}% korting, of
            laat achteraf factureren.
          </p>
          <div className="note">
            <InfoIcon />
            <span>
              <b>Let op:</b> bij afhalen plaatst en volgt u zelf op, de 100% droog-garantie geldt
              enkel bij onze <Link to="/verhuur/calculator">geleverde en geïnstalleerde pakketten</Link>.
            </span>
          </div>
        </div>
      </section>

      <div className="wrap shell">
        <div
          className="main"
          ref={formRef}
          style={reference || checking ? { display: "none" } : undefined}
        >
          <div className="blk">
            <h2>1. Kies uw toestellen</h2>
            <p className="bs">
              Kies per categorie het aantal dat u nodig heeft. Alle prijzen zijn per dag, excl. btw.
            </p>
            <div id="toestellen">
              {PICKUP_GROUPS.map((group) => {
                const count = groupCount(group);
                return (
                  <div className="gsec" key={group}>
                    <div className="gsec-h">
                      <span className="gname">{group}</span>
                      <span
                        className={`gst${count > 0 ? " ok" : ""}`}
                        style={count > 0 ? undefined : { display: "none" }}
                      >
                        {count} gekozen
                      </span>
                    </div>
                    <div className="pgrid">
                      {PICKUP_PRODUCTS.filter((p) => p.group === group).map((product) => (
                        <div
                          className={`pcard${qty(product.key) > 0 ? " has" : ""}`}
                          key={product.key}
                        >
                          <span className="ph">
                            <img src={product.image} alt="" loading="lazy" />
                          </span>
                          <span className="pi">
                            <b>{product.name}</b>
                            <small>{product.sub}</small>
                            <span className="sp">
                              {product.specs.map((spec) => (
                                <span key={spec}>{spec}</span>
                              ))}
                            </span>
                          </span>
                          <span className="pr">
                            <span className="px">
                              {euro(product.day)} <i>per dag</i>
                            </span>
                            <span className="stp">
                              <button
                                type="button"
                                aria-label={`Minder ${product.short}`}
                                onClick={() => step(product.key, -1)}
                              >
                                −
                              </button>
                              <span>{qty(product.key)}</span>
                              <button
                                type="button"
                                aria-label={`Meer ${product.short}`}
                                onClick={() => step(product.key, 1)}
                              >
                                +
                              </button>
                            </span>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="blk">
            <h2>2. Huurperiode &amp; afhaalmoment</h2>
            <p className="bs">
              U haalt af en brengt terug in ons magazijn, op weekdagen tussen 7:30 en 17:00.
            </p>
            <div className="frow">
              <div className="fld">
                <label htmlFor="aDays">Huurperiode</label>
                <select
                  id="aDays"
                  value={days}
                  onChange={(event) => setDays(Number(event.target.value))}
                >
                  {PICKUP_PERIODS.map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="fld">
                <label htmlFor="aDate">Afhaaldatum</label>
                <input
                  type="date"
                  id="aDate"
                  min={minDate}
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                />
              </div>
              <div className="fld">
                <label htmlFor="aSlot">Afhaalmoment</label>
                <select id="aSlot" value={slot} onChange={(event) => setSlot(event.target.value)}>
                  {PICKUP_SLOTS.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="adres">
              <PinIcon size={17} />
              <span>
                <b>Vernast Verhuur, magazijn</b>
                <br />
                Boomsesteenweg 12, Unit 11 · 2630 Aartselaar
                <br />
                U krijgt bij afhaling korte uitleg over plaatsing en gebruik.
              </span>
            </div>
          </div>

          <div className="blk">
            <h2>3. Uw gegevens</h2>
            <p className="bs">
              Op naam van wie zetten we de reservatie en de factuur? Uw adres hebben we enkel voor
              de facturatie nodig — afhalen doet u in ons magazijn.
            </p>
            <div className="ktype">
              <button
                type="button"
                className={customerType === "part" ? "active" : undefined}
                onClick={() => setCustomerType("part")}
              >
                Particulier
              </button>
              <button
                type="button"
                className={customerType === "pro" ? "active" : undefined}
                onClick={() => setCustomerType("pro")}
              >
                Professioneel
              </button>
            </div>
            <div className="frow two">
              <div className="fld">
                <label htmlFor="cNaam">Naam</label>
                <input
                  type="text"
                  id="cNaam"
                  placeholder="Voor- en achternaam"
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="fld">
                <label htmlFor="cTel">Telefoon</label>
                <input
                  type="tel"
                  id="cTel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="0470 00 00 00"
                  value={phone}
                  onChange={(event) => setPhone(maskPhone(event.target.value))}
                />
              </div>
            </div>
            <div className="frow two" style={{ marginTop: 14 }}>
              <div className="fld">
                <label htmlFor="cMail">E-mail</label>
                <input
                  type="email"
                  id="cMail"
                  inputMode="email"
                  autoComplete="email"
                  autoCapitalize="none"
                  spellCheck={false}
                  placeholder="naam@voorbeeld.be"
                  value={mail}
                  onChange={(event) => setMail(maskEmail(event.target.value))}
                />
              </div>
              <div className="fld">
                <label htmlFor="cAdres">Adres</label>
                <input
                  type="text"
                  id="cAdres"
                  placeholder="Straat, nr, gemeente"
                  autoComplete="street-address"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                />
              </div>
            </div>
            {customerType === "pro" && (
              <div className="frow two" style={{ marginTop: 14 }}>
                <div className="fld">
                  <label htmlFor="cFirma">Bedrijfsnaam</label>
                  <input
                    type="text"
                    id="cFirma"
                    placeholder="Uw firma bv"
                    value={company}
                    onChange={(event) => setCompany(event.target.value)}
                  />
                </div>
                <div className="fld">
                  <label htmlFor="cBtw">Btw-nummer</label>
                  <input
                    type="text"
                    id="cBtw"
                    placeholder="BE 0123.456.789"
                    value={vat}
                    onChange={(event) => setVat(event.target.value)}
                  />
                </div>
              </div>
            )}
            <div className="fld" style={{ marginTop: 14 }}>
              <label htmlFor="cNota">Opmerking (optioneel)</label>
              <input
                type="text"
                id="cNota"
                placeholder="Bv. ik kom met een aanhangwagen"
                value={note}
                onChange={(event) => setNote(event.target.value)}
              />
            </div>
            <label className="chk">
              <input
                type="checkbox"
                id="cAkkoord"
                checked={agreed}
                onChange={(event) => setAgreed(event.target.checked)}
              />{" "}
              Ik ga akkoord met de huurvoorwaarden en breng de toestellen proper en onbeschadigd
              terug.
            </label>
          </div>

          <div className="blk">
            <h2>4. Betaling</h2>
            <p className="bs">
              Online betalen levert {Math.round(ONLINE_DISCOUNT * 100)}% korting op en uw factuur
              komt meteen in uw mailbox. Liever achteraf? Dan factureren wij na de huurperiode.
            </p>
            <div className="ktype">
              <button
                type="button"
                className={payment === "online" ? "active" : undefined}
                onClick={() => setPayment("online")}
              >
                Nu online betalen — {Math.round(ONLINE_DISCOUNT * 100)}% korting
              </button>
              <button
                type="button"
                className={payment === "factuur" ? "active" : undefined}
                onClick={() => setPayment("factuur")}
              >
                Factuur na de huurperiode
              </button>
            </div>
            <p className="bs" style={{ margin: "14px 0 0" }}>
              {payment === "online"
                ? "U rekent af met Bancontact, kaart of iDEAL. Uw toestellen liggen meteen vast."
                : "U betaalt niets vooraf. Wij bevestigen uw afhaalmoment en factureren achteraf."}
            </p>
          </div>
        </div>

        <div className={`done${reference || checking ? " on" : ""}`}>
          {checking && !reference ? (
            <>
              <h2>Even geduld</h2>
              <p>We kijken uw betaling na bij Stripe en zetten uw reservatie klaar.</p>
              {error && <p className="err">{error}</p>}
            </>
          ) : (
            <>
              <div className="ic">
                <CheckIcon size={30} />
              </div>
              <h2>Uw afhaalreservatie staat vast</h2>
              <p>
                Alles ligt voor u klaar in ons magazijn in Aartselaar op het gekozen moment. U
                ontvangt zo een bevestiging per e-mail met de afhaalinstructies en het adres.
              </p>
              <div className="ref">
                <span>Referentie</span>
                <span>{reference ?? ""}</span>
              </div>
            </>
          )}
        </div>

        <aside className="side" style={reference || checking ? { display: "none" } : undefined}>
          <div className="sh">
            <div className="l">Uw afhaalreservatie</div>
            <h3>{summaryTitle}</h3>
          </div>
          <div className="rows">
            {summary.lines.length === 0 && <div className="srow mut">Kies links uw toestellen</div>}
            {summary.lines.map((line) => (
              <div className="srow" key={line.product.key}>
                <span>
                  {line.qty}× {line.product.short} · {days} d
                </span>
                <b>{euro(line.product.day * line.qty * days)}</b>
              </div>
            ))}
            {returnDate && (
              <div className="srow">
                <span>
                  Afhalen {shortDate(returnDate.start)} ({slot}) → terug{" "}
                  {shortDate(returnDate.end)}
                </span>
                <b>-</b>
              </div>
            )}
            {discount > 0 && (
              <div className="srow">
                <span>Korting online betalen ({Math.round(ONLINE_DISCOUNT * 100)}%)</span>
                <b>− {euro(discount)}</b>
              </div>
            )}
            {summary.units > 0 && (
              <div className="srow mut">
                <span>Btw 21%</span>
                <b>{euro(payable.vat)}</b>
              </div>
            )}
          </div>
          <div className="tot">
            <span className="l">{payment === "online" ? "Nu te betalen" : "Totaal excl. btw"}</span>
            <span className="v">
              {payment === "online" ? euro(payable.gross) : euro(payable.net)}{" "}
              <small>{payment === "online" ? "incl. btw" : "excl. btw"}</small>
            </span>
          </div>
          <div className="bf">
            <button className="btn" type="button" disabled={busy || reference !== null} onClick={reserve}>
              {busy
                ? "Even geduld…"
                : payment === "online"
                  ? `Betalen — ${euro(payable.gross)}`
                  : "Reserveer voor afhaling"}
            </button>
            {showMissing && missing.length > 0 && (
              <ul className="miss">
                {missing.map((item) => (
                  <li key={item.field}>{item.text}</li>
                ))}
              </ul>
            )}
            {error && <div className="err">{error}</div>}
            <div className="nt">
              {payment === "online"
                ? `Huur ${euro(payable.net)} excl. btw · veilig betalen via Stripe`
                : `${euro(payable.gross)} incl. btw · geen voorschot · factuur na de huurperiode`}
            </div>
          </div>
        </aside>
      </div>

      <footer className="site">
        <div className="wrap in">
          <span>© 2026 Vernast Verhuur · Boomsesteenweg 12, Unit 11, Aartselaar</span>
          <span>
            Liever geleverd én geïnstalleerd met droog-garantie?{" "}
            <Link to="/verhuur/calculator">Bereken uw pakket</Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default VerhuurAfhalenPage;
