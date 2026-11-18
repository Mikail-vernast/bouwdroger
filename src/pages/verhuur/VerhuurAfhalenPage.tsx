import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CheckoutElementsProvider } from "@stripe/react-stripe-js/checkout";
import type { Stripe as StripeJs } from "@stripe/stripe-js";
import PageMeta from "@/components/PageMeta";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import BoekingBetaalformulier from "@/components/verhuur/BoekingBetaalformulier";
import { CheckIcon, PinIcon } from "@/components/home-v3/icons";
import {
  PICKUP_BY_KEY,
  PICKUP_GROUPS,
  PICKUP_PERIODS,
  PICKUP_PRODUCTS,
  PICKUP_SLOTS,
} from "@/data/afhalen";
import Datumkiezer from "@/components/Datumkiezer";
import { useSeo } from "@/data/seo";
import { formatEuro, useCopy, useLokaalPad, useTaal } from "@/i18n/useTaal";
import { NUMBER_LOCALE, type Taal } from "@/i18n/taal";
import { AFHAAL_COPY, afhaalProductInTaal, groepInTaal, periodeInTaal } from "./VerhuurAfhalenPage.copy";
import {
  earliestPickupDate,
  langhuurKorting,
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
/*
  Alleen weergave. Nederlands houdt zijn oude notatie ("€ 29,00"), zodat die
  pagina tekst-identiek blijft; Frans krijgt "29,00 €". Wat Stripe int, rekent
  `api/afhaal-checkout.ts` zelf uit.
*/
const euroIn = (n: number, taal: Taal) =>
  taal === "nl"
    ? `€ ${n.toLocaleString("nl-BE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    : formatEuro(n, taal);

const shortDate = (d: Date, taal: Taal) =>
  d.toLocaleDateString(NUMBER_LOCALE[taal], { day: "numeric", month: "short" });

const longDate = (d: Date, taal: Taal) =>
  d.toLocaleDateString(NUMBER_LOCALE[taal], { weekday: "long", day: "numeric", month: "long" });

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

/** Wat er nog ontbreekt voor deze reservatie klaar is. */
interface Missing {
  field: string;
  text: string;
}

/**
 * De opmerking waarmee iemand van de condenspomp-fiche hier binnenkomt.
 *
 * De pomp zit niet in de toestellenlijst: ze staat niet in `TARIEVEN.products`
 * en `parseSelection` zou een sleutel die het depot niet kent stilzwijgend laten
 * vallen — de pagina zou dan een bedrag tonen dat `api/afhaal-checkout.ts`
 * nooit aanrekent. Daarom reist de vraag mee als opmerking bij de reservatie:
 * wij leggen de pomp klaar en rekenen haar af op de eindfactuur, net als de
 * extra dagen die pas bij het terugbrengen vastliggen.
 *
 * De bezoeker kan de zin gewoon overschrijven; het is een voorstel, geen veld
 * dat de pagina voor hem invult en bewaakt.
 */
function pompVraag(raw: string | null, t: { pompEen: string; pompMeer: (aantal: number) => string }): string {
  const aantal = Math.floor(Number(raw));
  if (!Number.isFinite(aantal) || aantal <= 0) return "";
  return aantal === 1 ? t.pompEen : t.pompMeer(aantal);
}

const VerhuurAfhalenPage = () => {
  const [searchParams] = useSearchParams();
  const taal = useTaal();
  const t = useCopy(AFHAAL_COPY);
  const lp = useLokaalPad();
  const seo = useSeo("verhuurAfhalen");
  const euro = (n: number) => euroIn(n, taal);

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
      note: pompVraag(searchParams.get("pomp"), t),
    };
    // Eén keer, bij het openen van de pagina: daarna stuurt de bezoeker.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [quantities, setQuantities] = useState<Record<string, number>>(preset.quantities);
  const [days, setDays] = useState(preset.days);
  /*
    Leeg bij de prerender én bij de eerste render in de browser, pas na mount
    ingevuld. "Vandaag" is bij de build een andere dag dan bij de bezoeker: een
    datum uit de initializer gaf een hydratatiefout (React #418/#423), waarna
    React de hele geprerenderde pagina weggooide en opnieuw opbouwde — met een
    zichtbare verspringing (CLS 0,11) en een tragere LCP als gevolg.
  */
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState(preset.slot);
  const [customerType, setCustomerType] = useState<"part" | "pro">("part");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [address, setAddress] = useState("");
  const [company, setCompany] = useState("");
  const [vat, setVat] = useState("");
  const [note, setNote] = useState(preset.note);
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

  /*
    Morgen en niet vandaag: wij zetten een toestel minstens 24 uur op voorhand
    klaar. De kiezer liet vandaag toe, en wie om 16.50 u voor dezelfde dag
    reserveerde stond tien minuten later voor een deur waar niets klaarstond.
    `pickupDate` in `orderIntake.ts` weigert diezelfde datum server-side.
  */
  const [minDate, setMinDate] = useState("");
  useEffect(() => {
    const min = earliestPickupDate();
    setMinDate(min);
    setDate((current) => {
      const wanted = current || preset.date;
      return wanted >= min ? wanted : min;
    });
    // Eén keer na mount; zie de uitleg bij `date`.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
  const o = t.ontbreekt;
  if (summary.units === 0) missing.push({ field: "toestellen", text: o.toestellen });
  if (!date) missing.push({ field: "aDate", text: o.datum });
  if (dateBlocked) missing.push({ field: "aDate", text: o.datumVol });
  if (!name.trim()) missing.push({ field: "cNaam", text: o.naam });
  if (!isValidPhone(phone)) missing.push({ field: "cTel", text: o.telefoon });
  if (!isValidEmail(mail)) missing.push({ field: "cMail", text: o.email });
  if (!address.trim()) missing.push({ field: "cAdres", text: o.adres });
  if (customerType === "pro" && !company.trim()) missing.push({ field: "cFirma", text: o.firma });
  if (customerType === "pro" && !vat.trim()) missing.push({ field: "cBtw", text: o.btw });
  if (!agreed) missing.push({ field: "cAkkoord", text: o.akkoord });

  const weekSuffix = days >= 7 && days % 7 === 0 ? ` (${days / 7} ${days === 7 ? t.week : t.weken})` : "";
  const summaryTitle = summary.units ? t.samenvatting(summary.units, days, weekSuffix) : t.nogGeenToestellen;

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
          setError(t.nietBevestigd);
      })
      .catch(() => {
        if (!cancelled) setError(t.nietNagekeken);
      })
      .finally(() => {
        if (!cancelled) setChecking(false);
      });

    return () => {
      cancelled = true;
    };
    // `t` volgt de taal uit de URL en verandert niet binnen één pagina.
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        // `taal` naast `data`, net als `payment`: de taal van Stripe en de
        // terugkeer-URL, nooit het bedrag. Niet in de vingerafdruk.
        body: JSON.stringify({ data: order, payment, previousSessionId: session?.id, taal }),
      });

      const result = (await response.json().catch(() => ({}))) as {
        reference?: string;
        clientSecret?: string;
        sessionId?: string;
        publishableKey?: string;
        error?: string;
      };

      if (!response.ok) {
        // Een 429 valt vóór de server de taal kent; die tekst vertalen we hier.
        setError(response.status === 429 ? t.teVeel : (result.error ?? t.nietDoorgegeven));
        /*
          De sessie is niet meer bruikbaar om naar terug te keren — de server kan
          haar bij deze poging al hebben laten vervallen. Het ID blijft staan,
          zodat een volgende poging de bijbehorende hold alsnog laat opruimen.
        */
        setSession((prev) => (prev ? { ...prev, clientSecret: "", fingerprint: "" } : null));
        return;
      }

      if (!result.clientSecret || !result.publishableKey || !result.sessionId) {
        setError(t.nietGestart);
        return;
      }
      // Stripe.js pas hier écht initialiseren: het script staat al klaar door
      // de import hierboven, de sleutel komt van de server.
      const { loadStripe } = await import("@stripe/stripe-js");
      // `locale`: de velden en foutmeldingen van het formulier in de taal van de pagina.
      setStripeJs(loadStripe(result.publishableKey, { locale: taal }));
      setSession({ id: result.sessionId, clientSecret: result.clientSecret, fingerprint });
      // Vanaf hier ligt er een hold, en na de omweg langs Bancontact is dit ID
      // de enige weg om die weer los te krijgen.
      writeStored({ sessionId: result.sessionId, email: mail });
      setPayOpen(true);
    } catch {
      setError(t.nietVerstuurd);
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
        {...seo}
        jsonLd={[
          offerCatalogSchema(
            t.catalogusNaam,
            PICKUP_PRODUCTS.map((product) => afhaalProductInTaal(product, taal)).map((product) => ({
              name: product.name,
              description: product.sub,
              path: lp("/verhuur/afhalen"),
              pricePerDay: product.day,
            }))
          ),
          breadcrumbSchema([
            { name: t.kruimelHome, path: lp("/") },
            { name: t.kruimelToestellen, path: lp("/verhuur/afhalen") },
          ]),
        ]}
      />
      {/*
        Eén schil, één menu. Deze pagina zette naast de gedeelde `V3Header` nog
        een eigen maroon `header.top` met een tweede logo en "terug naar het
        gamma" — samen twee menubalken boven elkaar. De boekings- en
        calculatorpagina's dragen enkel de `V3Header`; deze hoort daarbij.
      */}
      {/* Boven de rode hero staat de header donker (witte tekst) en flipt hij
          naar licht zodra je eronder scrolt — net als de juridische pagina's. */}
      {/* Onder 900px haalt `verhuur-fixes.css` de header uit `position:fixed`:
          hij staat dan boven de rode hero op de lichte pagina-achtergrond in
          plaats van erover, dus daar hoort de lichte variant. */}
      <V3Header lightAfter={420} alwaysLightBelow={900} />

      {/*
        Kleine rode hero in dezelfde vormtaal als de juridische pagina's
        (`.lhero`): rode achtergrond, witte titel en het team-cutout rechts.
        Eigen copy — deze pagina verkoopt zelf afhalen, niet voorwaarden.
      */}
      <section className="lead">
        <div className="wrap lh-grid">
          <div className="lh-copy">
            <span className="chip">{t.chip}</span>
            <h1>{t.h1}</h1>
            <p>{t.intro(Math.round(ONLINE_DISCOUNT * 100), euro(DEPOSIT_GROSS))}</p>
          </div>
          <div className="lh-vis">
            <img
              src="/vernast/team-tools.webp"
              alt={t.teamAlt}
              width={1400}
              height={859}
              fetchPriority="high"
              decoding="async"
            />
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
            <h2>{t.stap1}</h2>
            <p className="bs">{t.stap1Sub}</p>
            <div id="toestellen">
              {PICKUP_GROUPS.map((group) => {
                const count = groupCount(group);
                return (
                  <div className="gsec" key={group}>
                    <div className="gsec-h">
                      <span className="gname">{groepInTaal(group, taal)}</span>
                      <span
                        className={`gst${count > 0 ? " ok" : ""}`}
                        style={count > 0 ? undefined : { display: "none" }}
                      >
                        {t.gekozen(count)}
                      </span>
                    </div>
                    <div className="pgrid">
                      {PICKUP_PRODUCTS.filter((p) => p.group === group)
                        .map((p) => afhaalProductInTaal(p, taal))
                        .map((product) => (
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
                              {euro(product.day)} <i>{t.perDag}</i>
                            </span>
                            {/*
                              Staat het laatste exemplaar in onderhoud, dan is
                              de voorraad nul. Een teller die dan op nul blijft
                              hangen laat de bezoeker raden waarom; dit zegt het.
                            */}
                            {product.max === 0 ? (
                              <span className="stp-uit">{t.nietBeschikbaar}</span>
                            ) : (
                            <span className="stp">
                              <button
                                type="button"
                                aria-label={t.minder(product.short)}
                                onClick={() => step(product.key, -1)}
                              >
                                −
                              </button>
                              <span>{qty(product.key)}</span>
                              <button
                                type="button"
                                aria-label={t.meer(product.short)}
                                disabled={qty(product.key) >= product.max}
                                title={
                                  qty(product.key) >= product.max
                                    ? t.maxBereikt(product.max)
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
            <h2>{t.stap2}</h2>
            <p className="bs">{t.stap2Sub}</p>
            <div className="frow">
              <div className="fld">
                <label htmlFor="aDays">{t.huurperiode}</label>
                <select
                  id="aDays"
                  value={days}
                  onChange={(event) => setDays(Number(event.target.value))}
                >
                  {/*
                    De langhuurkorting staat in de keuzelijst zelf: dit is het
                    moment waarop de bezoeker de periode kiest, en een voordeel
                    dat hij pas in het overzicht ziet stuurt die keuze niet.
                  */}
                  {PICKUP_PERIODS.map(([value, label]) => {
                    const pct = Math.round(langhuurKorting(value) * 100);
                    return (
                      <option key={value} value={value}>
                        {periodeInTaal(value, label, taal)}
                        {pct > 0 ? ` · −${pct}${taal === "nl" ? "" : " "}%` : ""}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="fld">
                <label htmlFor="aDate">{t.afhaaldatum}</label>
                {/* Zie `components/Datumkiezer.tsx`: weekend en volle dagen
                    staan uit, en de kalender zegt onderaan waarom. */}
                <Datumkiezer
                  id="aDate"
                  value={date}
                  min={minDate}
                  blocked={blocked}
                  rangeDays={days}
                  rangeLabel={(() => {
                    const periode = PICKUP_PERIODS.find(([v]) => v === days);
                    return periode ? periodeInTaal(periode[0], periode[1], taal) : undefined;
                  })()}
                  invalid={dateBlocked}
                  describedBy={dateBlocked ? "aDateWarn" : undefined}
                  onChange={setDate}
                />
              </div>
              <div className="fld">
                <label htmlFor="aSlot">{t.afhaalmoment}</label>
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
                  {t.datumVol(
                    new Date(`${date}T00:00:00`).toLocaleDateString(NUMBER_LOCALE[taal], {
                      day: "numeric",
                      month: "long",
                    }),
                  )}
                </b>
                {suggestion ? (
                  <>
                    {" "}
                    {t.eerstVrij}{" "}
                    <button type="button" onClick={() => setDate(suggestion)}>
                      {new Date(`${suggestion}T00:00:00`).toLocaleDateString(NUMBER_LOCALE[taal], {
                        day: "numeric",
                        month: "long",
                      })}
                    </button>
                    .
                  </>
                ) : (
                  t.nietsVrij
                )}
              </div>
            )}
            <div className="adres">
              <PinIcon size={17} />
              <span>
                <b>{t.magazijn}</b>
                <br />
                Boomsesteenweg 12, Unit 11 · 2630 Aartselaar
                <br />
                {t.uitleg}
              </span>
            </div>
          </div>

          <div className="blk">
            <h2>{t.stap3}</h2>
            <p className="bs">{t.stap3Sub}</p>
            <div className="ktype">
              <button
                type="button"
                className={customerType === "part" ? "active" : undefined}
                onClick={() => setCustomerType("part")}
              >
                {t.particulier}
              </button>
              <button
                type="button"
                className={customerType === "pro" ? "active" : undefined}
                onClick={() => setCustomerType("pro")}
              >
                {t.professioneel}
              </button>
            </div>
            <div className="frow two">
              <div className="fld">
                <label htmlFor="cNaam">{t.naam}</label>
                <input
                  type="text"
                  id="cNaam"
                  placeholder={t.naamPlaceholder}
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="fld">
                <label htmlFor="cTel">{t.telefoon}</label>
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
                <label htmlFor="cMail">{t.email}</label>
                <input
                  type="email"
                  id="cMail"
                  inputMode="email"
                  autoComplete="email"
                  autoCapitalize="none"
                  spellCheck={false}
                  placeholder={t.emailPlaceholder}
                  value={mail}
                  onChange={(event) => setMail(maskEmail(event.target.value))}
                />
              </div>
              <div className="fld">
                <label htmlFor="cAdres">{t.adres}</label>
                <input
                  type="text"
                  id="cAdres"
                  placeholder={t.adresPlaceholder}
                  autoComplete="street-address"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                />
              </div>
            </div>
            {customerType === "pro" && (
              <div className="frow two" style={{ marginTop: 14 }}>
                <div className="fld">
                  <label htmlFor="cFirma">{t.bedrijfsnaam}</label>
                  <input
                    type="text"
                    id="cFirma"
                    placeholder={t.bedrijfPlaceholder}
                    value={company}
                    onChange={(event) => setCompany(event.target.value)}
                  />
                </div>
                <div className="fld">
                  <label htmlFor="cBtw">{t.btwNummer}</label>
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
              <label htmlFor="cNota">{t.opmerking}</label>
              <input
                type="text"
                id="cNota"
                placeholder={t.opmerkingPlaceholder}
                value={note}
                onChange={(event) => setNote(event.target.value)}
              />
              {/*
                De condenspomp staat niet in de toestellenlijst hierboven: ze
                komt niet uit `TARIEVEN.products` en zou daar een sleutel
                krijgen die het depot niet kent. Wie haar wil, vraagt ze hier —
                zie `pompVraag`, dat deze zin invult voor wie van de fiche komt.
              */}
              <p className="pomphint">
                {t.pompHint}{" "}
                <Link to={lp("/verhuur/toebehoren/condenspomp")}>{t.pompLink}</Link>
              </p>
            </div>
            <label className="chk">
              <input
                type="checkbox"
                id="cAkkoord"
                checked={agreed}
                onChange={(event) => setAgreed(event.target.checked)}
              />{" "}
              {t.akkoord}
            </label>
          </div>

          <div className="blk">
            <h2>{t.stap4}</h2>
            <p className="bs">{t.stap4Sub(euro(DEPOSIT_GROSS))}</p>
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
                <span className="pob">{t.korting(Math.round(ONLINE_DISCOUNT * 100))}</span>
                <b>{t.volledigOnline}</b>
                <span>{t.volledigOnlineUitleg(Math.round(ONLINE_DISCOUNT * 100))}</span>
                {savings > 0 && <span className="pos">{t.uBespaart(euro(savings))}</span>}
              </button>
              <button
                type="button"
                className={`payopt${payment === "afhaling" ? " sel" : ""}`}
                onClick={() => setPayment("afhaling")}
              >
                <b>{t.voorschotKop(euro(DEPOSIT_GROSS))}</b>
                {/*
                  "via Bancontact of QR-code" zette de QR naast de betaalwijzen,
                  terwijl die enkel de weg naar het betaalscherm is — daar staan
                  dezelfde knoppen als hier.
                */}
                <span>{t.voorschotUitleg(euro(DEPOSIT_GROSS))}</span>
                <span className="pos">{t.factuurNaBetaling}</span>
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
              <h2>{t.betaalKop}</h2>
              <p className="bs">
                {t.betaalSub(euro(totals.payableGross))}
                {totals.balance > 0 && t.saldoBijAfhaling(euro(totals.balance))}
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
                <span>{t.klaar(returnDate ? longDate(returnDate.start, taal) : "", slot)}</span>
              </p>

              {error && <p className="perr">{error}</p>}

              <button
                className="btn payback"
                type="button"
                onClick={() => setPayOpen(false)}
              >
                {t.terugGegevens}
              </button>
            </div>
          </div>
        )}

        <div className={`done${reference || checking ? " on" : ""}`}>
          {checking && !reference ? (
            <>
              <h2>{t.geduldKop}</h2>
              <p>{t.geduldSub}</p>
              {error && <p className="err">{error}</p>}
            </>
          ) : (
            <>
              <div className="ic">
                <CheckIcon size={30} />
              </div>
              <h2>{t.vastKop}</h2>
              <p>
                {t.vastSub}
                {balanceDue > 0 && t.vastSaldo(euro(balanceDue))}
              </p>
              <div className="ref">
                <span>{t.referentie}</span>
                <span>{reference ?? ""}</span>
              </div>
            </>
          )}
        </div>

        <aside className="side" style={reference || checking ? { display: "none" } : undefined}>
          {/*
            Net als de pakketsamenvatting draagt deze kaart nu de gekozen
            toestellen in beeld: wie afrekent ziet meteen wát er klaarligt,
            niet enkel een regel tekst. Bij één exemplaar blijft het aantal
            weg — dan zegt de foto alles.
          */}
          {summary.lines.length > 0 && (
            <div className="thumbs">
              {summary.lines.map((line) => (
                <span className="thumb" key={line.product.key}>
                  <img
                    src={line.product.image}
                    alt={afhaalProductInTaal(line.product, taal).name}
                    loading="lazy"
                    decoding="async"
                  />
                  {line.qty > 1 && <i>{line.qty}×</i>}
                </span>
              ))}
            </div>
          )}
          <div className="sh">
            <div className="l">{t.uwReservatie}</div>
            <h3>{summaryTitle}</h3>
          </div>
          <div className="rows">
            {summary.lines.length === 0 && <div className="srow mut">{t.kiesLinks}</div>}
            {summary.lines.map((line) => (
              <div className="srow" key={line.product.key}>
                <span>
                  {line.qty}× {line.product.short} · {days} {t.dagAfkorting}
                </span>
                <b>{euro(line.product.day * line.qty * days)}</b>
              </div>
            ))}
            {returnDate && (
              <div className="srow">
                <span>
                  {t.afhalenTerug(shortDate(returnDate.start, taal), slot, shortDate(returnDate.end, taal))}
                </span>
                <b>-</b>
              </div>
            )}
            {summary.longStay > 0 && (
              <div className="srow">
                <span>{t.langhuurkorting(Math.round(langhuurKorting(days) * 100))}</span>
                <b>− {euro(summary.longStay)}</b>
              </div>
            )}
            {totals.discount > 0 && (
              <div className="srow">
                <span>{t.kortingOnline(Math.round(ONLINE_DISCOUNT * 100))}</span>
                <b>− {euro(totals.discount)}</b>
              </div>
            )}
            {summary.units > 0 && (
              <div className="srow mut">
                <span>{t.btw}</span>
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
                <span>{t.totaalIncl}</span>
                <b>{euro(totals.gross)}</b>
              </div>
            )}
          </div>
          <div className="tot">
            <span className="l">{t.nuTeBetalen}</span>
            <span className="v">
              {euro(totals.payableGross)} <small>{t.incl}</small>
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
                  {busy ? t.evenGeduld : t.betalen(euro(totals.payableGross))}
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
                ? t.notaOnline(euro(totals.net))
                : t.notaAfhaling(euro(totals.gross), euro(totals.balance))}
            </div>
          </div>
        </aside>
      </div>

      <V3Footer />
    </div>
  );
};

export default VerhuurAfhalenPage;
