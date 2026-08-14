import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CheckoutElementsProvider } from "@stripe/react-stripe-js/checkout";
import type { Stripe as StripeJs } from "@stripe/stripe-js";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import BoekingBetaalformulier from "@/components/verhuur/BoekingBetaalformulier";
import { CheckIcon, InfoIcon, PinIcon } from "@/components/home-v3/icons";
import {
  PICKUP_BY_KEY,
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
  pickupTotals,
  serializeSelection,
  type PickupPayment,
} from "@/lib/afhalen";
import { bookingFingerprint, DEPOSIT_GROSS, ONLINE_DISCOUNT } from "@/lib/booking";
import { breadcrumbSchema, offerCatalogSchema } from "@/lib/schema";
import { isValidEmail, isValidPhone, maskEmail, maskPhone } from "@/lib/inputMask";
import { STRIPE_APPEARANCE } from "@/lib/stripeAppearance";
import { isoDate } from "@/lib/verhuur";
import { firstFreeDate, usePickupAvailability } from "@/hooks/usePickupAvailability";
import "@/styles/verhuur.css";
import "@/styles/verhuur-fixes.css";
import "@/styles/verhuur-betaling.css";

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
 * `/api/afhaal-checkout` en de Stripe-webhook naar het portaal, met een
 * referentie die van de server komt.
 *
 * Betalen gaat sinds kort langs dezelfde twee wegen als bij een pakket:
 * volledig vooruit met 5% korting, of een vaste orderbevestiging waarna het
 * saldo bij de afhaling betaald wordt. De tweede keuze heette hier "factuur na
 * de huurperiode" en kostte de klant vooraf niets — terwijl er wél toestellen
 * voor hem apart gingen liggen.
 *
 * Beide keuzes rekenen af in deze pagina zelf: hetzelfde Stripe-formulier als
 * bij een pakketboeking, in plaats van een doorverwijzing naar een hosted
 * Checkout-pagina met een andere huisstijl.
 */
const euro = (n: number) =>
  `€ ${n.toLocaleString("nl-BE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const shortDate = (d: Date) => d.toLocaleDateString("nl-BE", { day: "numeric", month: "short" });

const longDate = (d: Date) =>
  d.toLocaleDateString("nl-BE", { weekday: "long", day: "numeric", month: "long" });

/**
 * Waar de openstaande betaalpoging blijft staan tijdens de omweg langs
 * Bancontact, iDEAL of Klarna.
 *
 * Die omweg verlaat de pagina, dus React-state overleeft hem niet. Zonder dit
 * kwam de bezoeker terug op een verse pagina en bleef de hold op zijn toestellen
 * een half uur staan — waar hij bij een tweede poging zelf op botste. Zie
 * `api/booking-release.ts`.
 */
const STORAGE_KEY = "vernast-afhaal";

interface StoredPickup {
  sessionId: string;
  /** Het e-mailadres van de sessie; zonder dat laat de server niets los. */
  email: string;
}

function readStored(): StoredPickup | null {
  if (typeof sessionStorage === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StoredPickup) : null;
  } catch {
    return null;
  }
}

function writeStored(value: StoredPickup): void {
  if (typeof sessionStorage === "undefined") return;
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch {
    // Privémodus zonder sessionStorage: de betaling kan gewoon doorgaan.
  }
}

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
  const [payment, setPayment] = useState<PickupPayment>("online");
  const [reference, setReference] = useState<string | null>(null);
  /** Wat de klant bij de afhaling nog betaalt; nul als hij alles vooruitbetaalde. */
  const [balanceDue, setBalanceDue] = useState(0);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showMissing, setShowMissing] = useState(false);
  const [checking, setChecking] = useState(() => searchParams.has("session_id"));

  /*
    De betaalstap. `clientSecret` is wat het formulier van Stripe nodig heeft;
    de vingerafdruk zegt voor welke reservatie de sessie gemaakt is, zodat een
    bezoeker die terugkeert naar zijn gegevens en niets verandert hetzelfde
    formulier terugkrijgt in plaats van een tweede hold op dezelfde toestellen.
  */
  const [session, setSession] = useState<{
    id: string;
    clientSecret: string;
    fingerprint: string;
  } | null>(null);
  const [stripeJs, setStripeJs] = useState<Promise<StripeJs | null> | null>(null);
  const [payOpen, setPayOpen] = useState(false);

  const minDate = useMemo(() => isoDate(new Date()), []);
  const formRef = useRef<HTMLDivElement>(null);

  const qty = (key: string) => quantities[key] ?? 0;
  const groupCount = (group: string) =>
    PICKUP_PRODUCTS.filter((p) => p.group === group).reduce((total, p) => total + qty(p.key), 0);

  // Het plusje stopt bij wat er in het rek staat: van sommige toestellen hebben
  // we er één, en een teller die tot acht doorloopt belooft dan iets dat we niet
  // kunnen klaarzetten.
  const step = (key: string, delta: number) =>
    setQuantities((current) => ({
      ...current,
      [key]: Math.max(0, Math.min(PICKUP_BY_KEY[key]?.max ?? 0, (current[key] ?? 0) + delta)),
    }));

  const selection = useMemo(() => serializeSelection(quantities), [quantities]);
  const summary = useMemo(() => pickupSummary(parseSelection(selection), days), [selection, days]);

  /*
    Welke afhaaldatums al vol zitten voor déze selectie. Zonder dit koos iemand
    een datum, vulde het hele formulier in en kreeg pas bij het afrekenen te
    horen dat er niets vrij was — bij een toestel waarvan we er één hebben is dat
    het normale geval, niet de uitzondering.
  */
  const { blocked, horizonDays } = usePickupAvailability(selection, days);
  const dateBlocked = Boolean(date) && blocked.includes(date);
  const suggestion = dateBlocked ? firstFreeDate(date, blocked, horizonDays) : null;

  /*
    Wat er effectief afgerekend wordt. Korting en voorschot staan in de
    gepubliceerde tarieven, niet hier, en `pickupTotals` is dezelfde functie die
    `api/afhaal-checkout.ts` gebruikt — zo kan het bedrag op de knop niet
    afwijken van het bedrag bij Stripe.
  */
  const totals = useMemo(() => pickupTotals(summary.net, payment), [summary.net, payment]);

  /*
    Wat de kortingskaart belooft: het verschil tussen beide keuzes, bruto. De
    korting zelf staat excl. btw in de tarieven, en dat is niet wat de klant
    minder betaalt.
  */
  const savings = useMemo(
    () =>
      Math.round(
        (pickupTotals(summary.net, "afhaling").gross - pickupTotals(summary.net, "online").gross) *
          100,
      ) / 100,
    [summary.net],
  );

  /*
    Waarom de knop nog niet kan. Vroeger stond hij simpelweg uit: alles ingevuld
    en toch niets dat verklaarde welk veld tegenhield. Nu blijft hij klikbaar en
    zegt de pagina wat er ontbreekt.
  */
  const missing: Missing[] = [];
  if (summary.units === 0) missing.push({ field: "toestellen", text: "Kies minstens één toestel." });
  if (!date) missing.push({ field: "aDate", text: "Kies een afhaaldatum." });
  if (dateBlocked)
    missing.push({ field: "aDate", text: "Op die datum zijn deze toestellen niet vrij." });
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

  // Na een geslaagde reservatie staat de bevestiging bovenaan, net als het
  // betaalformulier wanneer dat opengaat.
  useEffect(() => {
    if (reference || payOpen) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [reference, payOpen]);

  /*
    Stripe.js alvast binnenhalen zodra iemand online wil betalen en toestellen
    gekozen heeft. Zonder dit liep het serieel: eerst de checkout-call met de
    beschikbaarheidscontrole erin, en pas daarna begon js.stripe.com te
    downloaden — samen goed voor enkele seconden voor de betaalknoppen bruikbaar
    waren. Het gewone ingangspunt injecteert het script al bij de import;
    `loadStripe` en de sleutel zijn hier dus nog niet nodig.
  */
  useEffect(() => {
    if (summary.units === 0) return;
    void import("@stripe/stripe-js");
  }, [summary.units]);

  /*
    Deze pagina is opnieuw geladen terwijl er nog een betaalpoging openstond: een
    refresh, de terugknop, of een omweg langs Bancontact die niet op een betaling
    uitliep. De toestellen die daarvoor apart lagen horen terug in de pot.

    Niet wanneer Stripe hem terugstuurt met een `session_id`: dan gaat het net om
    die sessie en kan er zelfs betaald zijn.
  */
  useEffect(() => {
    const stale = readStored();
    if (!stale?.sessionId || !stale.email || searchParams.has("session_id")) return;
    void fetch("/api/booking-release", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ sessionId: stale.sessionId, email: stale.email }),
    }).catch(() => {
      // Lukt het niet, dan verloopt de hold binnen het half uur vanzelf.
    });
    // Eén keer, bij het laden van de pagina.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      .then((result: { paid?: boolean; reference?: string; order?: { balance?: number | null } }) => {
        if (cancelled) return;
        if (result.paid && result.reference) {
          setReference(result.reference);
          /*
            Wat er nog openstaat komt uit de betaalde sessie, niet uit de state:
            na de omweg langs Bancontact staat deze pagina vers, en dan is de
            betaalwijze die de bezoeker koos hier niet meer bekend.
          */
          setBalanceDue(Number(result.order?.balance) || 0);
        } else
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

    const order: Record<string, string | number> = {
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

    /*
      Beide betaalwijzen lopen via Stripe: de ene rekent het volledige bedrag
      met korting af, de andere enkel de orderbevestiging. De server herrekent
      allebei zelf — wat hier op het scherm staat, is een weergave, geen invoer.

      De betaalwijze zit mee in de vingerafdruk. Zonder dat kreeg wie na de
      betaalstap terugging en van voorschot naar volledig betalen wisselde, de
      sessie van daarvoor terug — met het oude bedrag erop.
    */
    const fingerprint = bookingFingerprint({ ...order, payment });

    /*
      Niets gewijzigd sinds de vorige poging: terug naar het formulier dat er al
      staat. Een tweede sessie zou een tweede hold op dezelfde toestellen leggen,
      en dan blokkeert de bezoeker zijn eigen afhaaldatum.
    */
    if (session?.clientSecret && session.fingerprint === fingerprint && stripeJs) {
      setBusy(false);
      setPayOpen(true);
      return;
    }

    try {
      const response = await fetch("/api/afhaal-checkout", {
        method: "POST",
        headers: { "content-type": "application/json" },
        // De vorige sessie gaat mee zodat de server haar laat vervallen en de
        // toestellen teruggeeft vóór hij opnieuw kijkt wat vrij is.
        body: JSON.stringify({ data: order, payment, previousSessionId: session?.id }),
      });

      const result = (await response.json().catch(() => ({}))) as {
        reference?: string;
        clientSecret?: string;
        sessionId?: string;
        publishableKey?: string;
        error?: string;
      };

      if (!response.ok) {
        setError(
          result.error ??
            "Uw reservatie kon niet doorgegeven worden. Probeer het opnieuw of bel ons op 03 689 90 65."
        );
        /*
          De sessie is niet meer bruikbaar om naar terug te keren — de server kan
          haar bij deze poging al hebben laten vervallen. Het ID blijft staan,
          zodat een volgende poging de bijbehorende hold alsnog laat opruimen.
        */
        setSession((prev) => (prev ? { ...prev, clientSecret: "", fingerprint: "" } : null));
        return;
      }

      if (!result.clientSecret || !result.publishableKey || !result.sessionId) {
        setError("Betaling kon niet gestart worden. Probeer het opnieuw of bel ons op 03 689 90 65.");
        return;
      }
      // Stripe.js pas hier écht initialiseren: het script staat al klaar door
      // de import hierboven, de sleutel komt van de server.
      const { loadStripe } = await import("@stripe/stripe-js");
      setStripeJs(loadStripe(result.publishableKey));
      setSession({ id: result.sessionId, clientSecret: result.clientSecret, fingerprint });
      // Vanaf hier ligt er een hold, en na de omweg langs Bancontact is dit ID
      // de enige weg om die weer los te krijgen.
      writeStored({ sessionId: result.sessionId, email: mail });
      setPayOpen(true);
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
            <img src="/vernast/logo-horizontal-white.webp" alt="Vernast Bouwdrogers" loading="lazy" decoding="async" />
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
            zet uw reservatie vast met {euro(DEPOSIT_GROSS)} en reken de rest af bij de afhaling.
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
          style={reference || checking || payOpen ? { display: "none" } : undefined}
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
                            {/*
                              Deze foto is de enige afbeelding van dit toestel
                              op deze pagina, en de pagina wordt geïndexeerd met
                              een volledige OfferCatalog erin. Leeg gelaten
                              stond geen enkel toestel uit het afhaalgamma in
                              de afbeeldingszoekresultaten. Bij de miniaturen
                              elders blijft de alt wél leeg: daar draagt de
                              knop al een `aria-label` en staat de naam ernaast.
                            */}
                            <img src={product.image} alt={product.name} loading="lazy" />
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
                            {/*
                              Staat het laatste exemplaar in onderhoud, dan is
                              de voorraad nul. Een teller die dan op nul blijft
                              hangen laat de bezoeker raden waarom; dit zegt het.
                            */}
                            {product.max === 0 ? (
                              <span className="stp-uit">Tijdelijk niet beschikbaar</span>
                            ) : (
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
                                disabled={qty(product.key) >= product.max}
                                title={
                                  qty(product.key) >= product.max
                                    ? `Wij hebben er ${product.max} — bel ons voor meer`
                                    : undefined
                                }
                                onClick={() => step(product.key, 1)}
                              >
                                +
                              </button>
                            </span>
                            )}
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
                  className={dateBlocked ? "bezet" : undefined}
                  min={minDate}
                  value={date}
                  aria-invalid={dateBlocked}
                  aria-describedby={dateBlocked ? "aDateWarn" : undefined}
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
            {dateBlocked && (
              <div className="datewarn" id="aDateWarn" role="status">
                <b>
                  Op{" "}
                  {new Date(`${date}T00:00:00`).toLocaleDateString("nl-BE", {
                    day: "numeric",
                    month: "long",
                  })}{" "}
                  is deze samenstelling al ingepland.
                </b>
                {suggestion ? (
                  <>
                    {" "}
                    De eerstvolgende vrije afhaaldatum is{" "}
                    <button type="button" onClick={() => setDate(suggestion)}>
                      {new Date(`${suggestion}T00:00:00`).toLocaleDateString("nl-BE", {
                        day: "numeric",
                        month: "long",
                      })}
                    </button>
                    .
                  </>
                ) : (
                  " De komende weken is er niets vrij — bel ons op 03 689 90 65."
                )}
              </div>
            )}
            <div className="adres">
              <PinIcon size={17} />
              <span>
                <b>Vernast Bouwdrogers, magazijn</b>
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
            <h2>4. Hoe wilt u betalen?</h2>
            <p className="bs">
              Dezelfde twee keuzes als bij een pakket: alles vooraf met korting, of uw reservatie
              vastzetten met {euro(DEPOSIT_GROSS)} en de rest afrekenen wanneer u de toestellen
              komt halen.
            </p>
            {/*
              Dit waren twee pilknoppen met "Factuur na de huurperiode" ernaast,
              en daaronder de belofte dat u niets vooraf betaalde. Nu dezelfde
              twee kaarten als de boekingspagina: het bedrag dat nú door Stripe
              gaat staat op de kaart zelf, niet pas op de knop rechts.
            */}
            <div className="payopts">
              <button
                type="button"
                className={`payopt${payment === "online" ? " sel" : ""}`}
                onClick={() => setPayment("online")}
              >
                <span className="pob">{Math.round(ONLINE_DISCOUNT * 100)}% korting</span>
                <b>Volledig online betalen</b>
                <span>
                  Betaal nu met Bancontact, kaart, Apple Pay of iDEAL. U krijgt{" "}
                  {Math.round(ONLINE_DISCOUNT * 100)}% korting op uw hele reservatie en uw factuur
                  staat meteen in uw mailbox.
                </span>
                {savings > 0 && <span className="pos">U bespaart {euro(savings)}</span>}
              </button>
              <button
                type="button"
                className={`payopt${payment === "afhaling" ? " sel" : ""}`}
                onClick={() => setPayment("afhaling")}
              >
                <b>{euro(DEPOSIT_GROSS)} nu, rest bij afhaling</b>
                {/*
                  "via Bancontact of QR-code" zette de QR naast de betaalwijzen,
                  terwijl die enkel de weg naar het betaalscherm is — daar staan
                  dezelfde knoppen als hier.
                */}
                <span>
                  Bevestig uw reservatie met {euro(DEPOSIT_GROSS)}. Het saldo scant en betaalt u in
                  ons magazijn wanneer u de toestellen komt halen: Bancontact, kaart of Apple Pay.
                </span>
                <span className="pos">Factuur na volledige betaling</span>
              </button>
            </div>
          </div>
        </div>

        {/*
          De betaalstap. Hetzelfde formulier als bij een pakketboeking: wij
          plaatsen de knoppenrij en het veldenblok, Stripe houdt de
          kaartgegevens binnen zijn eigen iframes. De samenvatting rechts blijft
          staan, zodat de klant tijdens het betalen ziet waarvoor hij betaalt.
        */}
        {payOpen && !reference && !checking && (
          <div className="main">
            <div className="blk">
              <h2>Betaal uw afhaalreservatie</h2>
              <p className="bs">
                U betaalt <b>{euro(totals.payableGross)}</b> met Apple Pay, Bancontact, kaart,
                iDEAL of Klarna. De betaling loopt beveiligd via Stripe — wij zien uw kaartgegevens
                nooit.
                {totals.balance > 0 && (
                  <>
                    {" "}
                    Het saldo van <b>{euro(totals.balance)}</b> rekent u af bij de afhaling.
                  </>
                )}
              </p>

              <div className="paybox">
                {session?.clientSecret && stripeJs && (
                  <CheckoutElementsProvider
                    key={session.clientSecret}
                    stripe={stripeJs}
                    options={{
                      clientSecret: session.clientSecret,
                      elementsOptions: { appearance: STRIPE_APPEARANCE },
                    }}
                  >
                    <BoekingBetaalformulier bedrag={euro(totals.payableGross)} />
                  </CheckoutElementsProvider>
                )}
              </div>

              <p className="paynote">
                <CheckIcon size={13} />
                {/* De tekst hoort in één span: los in de flexbox wordt elk
                    stukje een eigen kolom zodra de ruimte krap wordt. */}
                <span>
                  Uw toestellen liggen klaar in Aartselaar op{" "}
                  <b>{returnDate ? longDate(returnDate.start) : ""}</b> tussen <b>{slot}</b> zodra
                  de betaling bevestigd is.
                </span>
              </p>

              {error && <p className="perr">{error}</p>}

              <button
                className="btn payback"
                type="button"
                onClick={() => setPayOpen(false)}
              >
                Terug naar mijn gegevens
              </button>
            </div>
          </div>
        )}

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
                {balanceDue > 0 && (
                  <>
                    {" "}
                    Het saldo van <b>{euro(balanceDue)}</b> rekent u af bij de afhaling: u scant
                    onze QR-code en betaalt met Bancontact, kaart of Apple Pay.
                  </>
                )}
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
            {totals.discount > 0 && (
              <div className="srow">
                <span>Korting online betalen ({Math.round(ONLINE_DISCOUNT * 100)}%)</span>
                <b>− {euro(totals.discount)}</b>
              </div>
            )}
            {summary.units > 0 && (
              <div className="srow mut">
                <span>Btw 21%</span>
                <b>{euro(totals.vat)}</b>
              </div>
            )}
            {/*
              Bij een voorschot staat er onderaan het bedrag dat nú door Stripe
              gaat. Zonder deze regel leek dat het hele plaatje, terwijl er nog
              een saldo openstaat dat de klant aan de balie betaalt.
            */}
            {totals.balance > 0 && (
              <div className="srow">
                <span>Totaal reservatie incl. btw</span>
                <b>{euro(totals.gross)}</b>
              </div>
            )}
          </div>
          <div className="tot">
            <span className="l">Nu te betalen</span>
            <span className="v">
              {euro(totals.payableGross)} <small>incl. btw</small>
            </span>
          </div>
          {/*
            Tijdens het betalen verdwijnt deze knop: het formulier links heeft
            er zelf een, en twee knoppen met hetzelfde bedrag erop laten de
            klant raden welke van de twee zijn betaling start.
          */}
          <div className="bf">
            {!payOpen && (
              <>
                <button
                  className="btn"
                  type="button"
                  disabled={busy || reference !== null}
                  onClick={reserve}
                >
                  {busy ? "Even geduld…" : `Betalen — ${euro(totals.payableGross)}`}
                </button>
                {showMissing && missing.length > 0 && (
                  <ul className="miss">
                    {missing.map((item) => (
                      <li key={item.field}>{item.text}</li>
                    ))}
                  </ul>
                )}
                {error && <div className="err">{error}</div>}
              </>
            )}
            <div className="nt">
              {payment === "online"
                ? `Huur ${euro(totals.net)} excl. btw · veilig betalen via Stripe`
                : `Reservatie ${euro(totals.gross)} incl. btw · saldo ${euro(totals.balance)} bij de afhaling`}
            </div>
          </div>
        </aside>
      </div>

      <footer className="site">
        <div className="wrap in">
          <span>© 2026 Vernast Bouwdrogers · Boomsesteenweg 12, Unit 11, Aartselaar</span>
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
