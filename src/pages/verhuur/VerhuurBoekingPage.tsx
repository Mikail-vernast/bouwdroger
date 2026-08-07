import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CheckoutElementsProvider } from "@stripe/react-stripe-js/checkout";
import type { Appearance, Stripe as StripeJs } from "@stripe/stripe-js";
import PageMeta from "@/components/PageMeta";
import BoekingBetaalformulier from "@/components/verhuur/BoekingBetaalformulier";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import {
  ArrowRightIcon,
  BoltIcon,
  CalendarCheckIcon,
  CheckIcon,
  CrossIcon,
  DropIcon,
  PulseIcon,
  PumpIcon,
  ReportIcon,
  StairsIcon,
  WarnIcon,
} from "@/components/verhuur/icons";
import {
  CAT,
  COVER,
  DELIVERY,
  EXTRAS,
  FIXED_WEEKS,
  LADDER_FEE,
  MAX_FLOORS,
  PUMP,
  type DeviceKey,
} from "@/data/verhuur";
import {
  DEVICE_KEYS,
  addDays,
  configToQuery,
  dryingDays,
  euro,
  formatLongDate,
  isoDate,
  allItems,
  packageImage,
  packageTitle,
  parseConfig,
} from "@/lib/verhuur";
import {
  MAX_EXTRA_DEVICES,
  bookingFingerprint,
  bookingSummary,
  type Access,
  type BookingOptions,
  type PaymentChoice,
  DEPOSIT,
  ONLINE_DISCOUNT,
} from "@/lib/booking";
import { SEO } from "@/data/seo";
import "@/styles/verhuur.css";
import "@/styles/verhuur-fixes.css";
import "@/styles/verhuur-betaling.css";

/** De extra's uit data/verhuur.ts, gekoppeld aan hun icoon uit het design. */
const EXTRA_ICONS: Record<string, (props: { size?: number }) => JSX.Element> = {
  rapport: ReportIcon,
  stroom: BoltIcon,
};

/** 1 dekking · 2 extra's · 3 datum · 4 gegevens · 5 betaling · 6 bevestiging. */
const TOTAL_STEPS = 6;
const STEP_PAY = 5;
const STEP_DONE = 6;

/**
 * Stripe rendert zijn velden in eigen iframes, dus onze stylesheet raakt er niet
 * aan; dit is de enige weg om ze op de rest van de wizard te laten lijken. De
 * waarden komen uit de tokens bovenaan `verhuur.css` — staan die daar ooit
 * anders, dan hoort dit mee te schuiven.
 */
const STRIPE_APPEARANCE: Appearance = {
  theme: "stripe",
  variables: {
    colorPrimary: "#C8102E",
    colorText: "#141414",
    colorDanger: "#C8102E",
    fontFamily: "'Plus Jakarta Sans', 'DM Sans', system-ui, sans-serif",
    borderRadius: "11px",
    spacingUnit: "4px",
  },
};
const RENTAL_DAYS = FIXED_WEEKS * 7;
const SLOTS = ["08:00 – 10:00", "10:00 – 12:00", "13:00 – 15:00", "15:00 – 17:00"];
/** Moet gelijk lopen met `HORIZON_DAYS` in `api/availability.ts`. */
const AVAILABILITY_HORIZON_DAYS = 60;

const NEXT_LABEL: Record<number, string> = {
  1: "Verder naar extra's",
  2: "Verder naar datum",
  3: "Verder naar gegevens",
  4: "Boeking bevestigen",
};

type CustomerType = "part" | "pro";

/** Wat de bezoeker koos, bewaard over de omweg langs Stripe heen. */
interface StoredBooking {
  options: BookingOptions;
  customer: Customer;
  customerType: CustomerType;
  startDate: string;
  slot: string;
}

const STORAGE_KEY = "vernast-boeking";

function readStored(): StoredBooking | null {
  if (typeof sessionStorage === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StoredBooking) : null;
  } catch {
    return null;
  }
}

interface Customer {
  name: string;
  tel: string;
  mail: string;
  company: string;
  vat: string;
  addr: string;
  post: string;
  ok: boolean;
}

const EMPTY_CUSTOMER: Customer = {
  name: "",
  tel: "",
  mail: "",
  company: "",
  vat: "",
  addr: "",
  post: "",
  ok: false,
};

function isComplete(c: Customer, type: CustomerType): boolean {
  const proOk = type !== "pro" || (c.company.trim().length > 1 && c.vat.trim().length > 8);
  return (
    c.name.trim().length > 1 &&
    /\S+@\S+\.\S+/.test(c.mail) &&
    c.tel.trim().length > 5 &&
    c.addr.trim().length > 3 &&
    proOk &&
    c.ok
  );
}

const VerhuurBoekingPage = () => {
  const [searchParams] = useSearchParams();
  const config = useMemo(() => parseConfig(searchParams), [searchParams]);

  // Na de omweg langs Stripe is de React-state weg; wat de bezoeker koos komt
  // dan terug uit sessionStorage.
  const stored = useMemo(readStored, []);

  const [step, setStep] = useState(1);
  const [cover, setCover] = useState(stored?.options.cover ?? "comfort");
  const [extras, setExtras] = useState<Record<string, boolean>>(() =>
    Object.fromEntries((stored?.options.extras ?? []).map((k) => [k, true]))
  );
  const [dev, setDev] = useState<Record<DeviceKey, number>>(() => ({
    small: stored?.options.dev.small ?? 0,
    medium: stored?.options.dev.medium ?? 0,
    axiaal: stored?.options.dev.axiaal ?? 0,
    kachel: stored?.options.dev.kachel ?? 0,
  }));
  // null = de klant liet het standaardaantal staan: één pomp per bouwdroger.
  const [pumps, setPumps] = useState<number | null>(stored?.options.pumps ?? null);
  const [floors, setFloors] = useState(stored?.options.floors ?? 0);
  const [access, setAccess] = useState<Access>(stored?.options.access ?? "trap");
  const [delivery, setDelivery] = useState(stored?.options.delivery ?? DELIVERY[0].k);
  const [startDate, setStartDate] = useState(
    () => stored?.startDate ?? isoDate(addDays(new Date(), 1))
  );
  const [slot, setSlot] = useState(stored?.slot ?? SLOTS[1]);
  const [customerType, setCustomerType] = useState<CustomerType>(stored?.customerType ?? "part");
  const [payment, setPayment] = useState<PaymentChoice>(stored?.options.payment ?? "online");
  const [customer, setCustomer] = useState<Customer>(stored?.customer ?? EMPTY_CUSTOMER);
  const [reference, setReference] = useState("");
  const [paying, setPaying] = useState(false);
  const [payError, setPayError] = useState("");

  /*
    Het betaalformulier van Stripe leeft in stap 5. De sleutel wordt pas
    opgehaald wanneer de bezoeker daar aankomt, zodat stripe.js niet meelaadt
    voor wie enkel aan het configureren is.

    De sessie blijft bewaard wanneer hij terugkeert naar zijn gegevens, samen met
    een vingerafdruk van de boeking waarvoor ze gemaakt is. Verandert er niets,
    dan gaat hij terug naar dezelfde sessie in plaats van een tweede aan te
    maken — zie `bookingFingerprint` voor waarom dat belangrijk is.
  */
  const [session, setSession] = useState<{
    id: string;
    clientSecret: string;
    fingerprint: string;
  } | null>(null);
  const [stripeJs, setStripeJs] = useState<Promise<StripeJs | null> | null>(null);

  const options: BookingOptions = useMemo(
    () => ({
      cover,
      // Gesorteerd: anders leest het om- en weer aanzetten van een extra als een
      // gewijzigde boeking, puur door de volgorde in het object.
      extras: Object.keys(extras).filter((k) => extras[k]).sort(),
      pumps,
      dev,
      floors,
      access,
      delivery,
      payment,
    }),
    [cover, extras, pumps, dev, floors, access, delivery, payment]
  );

  const summary = useMemo(() => bookingSummary(config, options), [config, options]);
  const { base, lines: rows, total, discount, netTotal, dryerCount, pumps: pumpCount } = summary;

  const goTo = (n: number) => {
    setStep(n);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const days = dryingDays(config);
  const start = startDate ? new Date(startDate) : null;
  const end = start ? addDays(start, RENTAL_DAYS) : null;
  const tooShort = RENTAL_DAYS < days;

  const bump = (k: DeviceKey, delta: number) =>
    setDev((prev) => ({
      ...prev,
      [k]: Math.max(0, Math.min(MAX_EXTRA_DEVICES, prev[k] + delta)),
    }));

  /*
    Volle leverdatums. Wordt opgehaald zodra de bezoeker bij de datumstap komt,
    zodat een dag waarop de toestellen al ingepland staan meteen zichtbaar is in
    plaats van pas bij het afrekenen. De harde controle staat in
    `api/checkout.ts`; dit is er om die 409 te voorkomen, niet om hem te vervangen.
  */
  const [blockedDates, setBlockedDates] = useState<string[]>([]);
  const [datesError, setDatesError] = useState("");
  const [loadingDates, setLoadingDates] = useState(false);

  useEffect(() => {
    if (step !== 3) return;
    let active = true;
    setLoadingDates(true);
    setDatesError("");

    fetch("/api/availability", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ config, options }),
    })
      .then(async (r) => {
        const data = (await r.json()) as { blocked_start_dates?: string[]; error?: string };
        if (!r.ok) throw new Error(data.error ?? "onbereikbaar");
        return data;
      })
      .then((data) => {
        if (!active) return;
        setBlockedDates(data.blocked_start_dates ?? []);
      })
      .catch(() => {
        if (!active) return;
        /*
          Bewust geen lege lijst bij een fout: dat leest als "alles is vrij" en is
          precies de stille fout die deze wijziging moest wegnemen. De bezoeker
          krijgt te zien dat we het niet weten, en de knop blijft dicht.
        */
        setBlockedDates([]);
        setDatesError(
          "We kunnen op dit moment niet nakijken welke datums nog vrij zijn. Probeer het zo opnieuw, of bel ons op 03 689 90 65."
        );
      })
      .finally(() => {
        if (active) setLoadingDates(false);
      });

    return () => {
      active = false;
    };
  }, [step, config, options]);

  const dateBlocked = blockedDates.includes(startDate);

  /**
   * Eerstvolgende dag waarop dit pakket wél vrij is. Zoekt niet verder dan de
   * horizon van `api/availability`: daarbuiten staat een datum niet in de lijst
   * omdat we het niet weten, niet omdat hij vrij is.
   */
  const nextFreeDate = useMemo(() => {
    if (!dateBlocked || !startDate) return null;
    const from = new Date(startDate);
    const horizon = isoDate(addDays(new Date(), AVAILABILITY_HORIZON_DAYS));
    for (let i = 1; i <= AVAILABILITY_HORIZON_DAYS; i++) {
      const candidate = isoDate(addDays(from, i));
      if (candidate > horizon) return null;
      if (!blockedDates.includes(candidate)) return candidate;
    }
    return null;
  }, [dateBlocked, startDate, blockedDates]);

  /*
    Een volle dag hoeft de bezoeker niet zelf op te lossen: we schuiven de
    levering meteen naar de eerstvolgende vrije dag en zeggen dat erbij. Alleen
    als er binnen de horizon niets vrij is blijft de stap dicht — dan valt er
    niets te kiezen en moet er gebeld worden.
  */
  const [shiftedDate, setShiftedDate] = useState<{ from: string; to: string } | null>(null);

  useEffect(() => {
    if (step !== 3 || loadingDates || datesError) return;
    if (!dateBlocked || !nextFreeDate) return;
    setShiftedDate({ from: startDate, to: nextFreeDate });
    setStartDate(nextFreeDate);
  }, [step, loadingDates, datesError, dateBlocked, nextFreeDate, startDate]);

  const sessionId = searchParams.get("session_id");
  const cancelled = searchParams.get("betaling") === "geannuleerd";

  // Terug van Stripe: pas de bevestiging tonen als Stripe zegt dat er betaald is.
  useEffect(() => {
    if (!sessionId) {
      if (cancelled) {
        setStep(4);
        setPayError("De betaling is geannuleerd. Uw keuzes staan nog klaar.");
      }
      return;
    }
    let active = true;
    fetch(`/api/checkout-session?id=${encodeURIComponent(sessionId)}`)
      .then((r) => r.json())
      .then((data: { paid?: boolean; reference?: string; error?: string }) => {
        if (!active) return;
        if (data.paid && data.reference) {
          setReference(data.reference);
          setStep(STEP_DONE);
          sessionStorage.removeItem(STORAGE_KEY);
        } else {
          setStep(4);
          setPayError(data.error ?? "De betaling is nog niet bevestigd door Stripe.");
        }
      })
      .catch(() => {
        if (!active) return;
        setStep(4);
        setPayError("De betaalstatus kon niet opgehaald worden. Probeer opnieuw.");
      });
    return () => {
      active = false;
    };
  }, [sessionId, cancelled]);

  /**
   * De sessie is niet meer bruikbaar om naar terug te keren — de server kan haar
   * bij deze poging al hebben laten vervallen. Het ID blijft wel staan, zodat een
   * volgende poging de bijbehorende hold alsnog kan laten opruimen.
   */
  const staleSession = () =>
    setSession((prev) => (prev ? { ...prev, clientSecret: "", fingerprint: "" } : null));

  /** Maakt een Stripe-sessie aan en toont het betaalformulier in stap 5. */
  const payAndConfirm = async () => {
    setPaying(true);
    setPayError("");
    const booking: StoredBooking = { options, customer, customerType, startDate, slot };
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(booking));
    } catch {
      // Privémodus zonder sessionStorage: de betaling kan gewoon doorgaan.
    }

    const payload = {
      config: Object.fromEntries(new URLSearchParams(configToQuery(config))),
      options,
      customer: { ...customer, type: customerType },
      delivery: { date: startDate, slot },
    };
    const fingerprint = bookingFingerprint(payload);

    /*
      Niets gewijzigd sinds de vorige keer: terug naar het betaalformulier dat er
      al staat. Een tweede sessie zou een tweede hold op dezelfde toestellen
      leggen, en dan blokkeert de bezoeker zijn eigen leverdatum.
    */
    if (session && session.fingerprint === fingerprint && stripeJs) {
      setPaying(false);
      goTo(STEP_PAY);
      return;
    }

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "content-type": "application/json" },
        // De vorige sessie gaat mee zodat de server haar laat vervallen en de
        // toestellen teruggeeft vóór hij opnieuw kijkt wat er vrij is.
        body: JSON.stringify({ ...payload, previousSessionId: session?.id }),
      });
      const data = (await response.json()) as {
        clientSecret?: string;
        sessionId?: string;
        publishableKey?: string;
        error?: string;
        code?: string;
        blocked_start_dates?: string[];
      };
      /*
        Iemand is ons voor geweest tussen het kiezen van de datum en het klikken
        op betalen. Terug naar de datumstap met de verse lijst, anders staat de
        bezoeker naar een foutmelding te kijken zonder te zien wat hij eraan kan
        doen.
      */
      if (response.status === 409 && data.code === "niet_beschikbaar") {
        setBlockedDates(data.blocked_start_dates ?? [startDate]);
        setPayError("");
        setPaying(false);
        staleSession();
        goTo(3);
        return;
      }
      if (!response.ok || !data.clientSecret || !data.publishableKey || !data.sessionId) {
        setPayError(data.error ?? "De betaling kon niet gestart worden.");
        setPaying(false);
        staleSession();
        return;
      }
      // Stripe.js pas hier binnenhalen: het is een externe bundel die niets
      // toevoegt zolang er geen betaalformulier op het scherm staat.
      const { loadStripe } = await import("@stripe/stripe-js");
      setStripeJs(loadStripe(data.publishableKey));
      setSession({ id: data.sessionId, clientSecret: data.clientSecret, fingerprint });
      setPaying(false);
      goTo(STEP_PAY);
    } catch {
      setPayError("Geen verbinding met de betaalserver. Probeer het opnieuw.");
      setPaying(false);
    }
  };

  /**
   * Terug naar de gegevens. De sessie blijft staan: komt de bezoeker zonder
   * wijzigingen terug, dan gebruikt `payAndConfirm` haar opnieuw in plaats van
   * een tweede reservatie op hetzelfde materieel te leggen.
   */
  const cancelPayment = () => goTo(4);

  return (
    <div className="vh-book">
      <PageMeta {...SEO.verhuurBoeking} path="/verhuur/boeking" />
      <V3Header lightAfter={-1} />

      <div className="rail">
        <div className="rwrap">
          <i style={{ width: `${Math.round((step / TOTAL_STEPS) * 100)}%` }} />
        </div>
      </div>

      <section className="main">
        <div className="wrap mgrid">
          <div>
            {/* STAP 1 — dekking */}
            <div className={`pane${step === 1 ? " on" : ""}`}>
              <div className="blk">
                <div className="blkh">
                  <h2>Kies uw dekking</h2>
                </div>
                <p className="bsub">
                  Werfmateriaal loopt risico op schade, diefstal of vertraging. Kies hoeveel u zelf
                  wilt dragen, net zoals bij een huurwagen.
                </p>
                <div className="cvs">
                  {COVER.map((c) => (
                    <div
                      key={c.k}
                      className={`cv${c.k === cover ? " sel" : ""}`}
                      onClick={() => setCover(c.k)}
                      role="radio"
                      aria-checked={c.k === cover}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setCover(c.k);
                        }
                      }}
                    >
                      {c.badge && <span className="cvb">{c.badge}</span>}
                      <div className="cvn">{c.name}</div>
                      <div className="cvs2">{c.sub}</div>
                      <div className="cvp">{c.price ? euro(c.price) : "Inbegrepen"}</div>
                      <div className="cvd">
                        {c.price ? "eenmalig, voor de volledige huur" : "zit in uw pakketprijs"}
                      </div>
                      <ul>
                        {c.inc.map((i) => (
                          <li key={i}>
                            <CheckIcon size={13} strokeWidth={3} />
                            {i}
                          </li>
                        ))}
                        {c.off.map((i) => (
                          <li className="off" key={i}>
                            <CrossIcon />
                            {i}
                          </li>
                        ))}
                      </ul>
                      <button className="cvpick" type="button">
                        {c.k === cover ? "Gekozen" : "Selecteer"}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="fnav">
                <Link className="btn btn-o" to={`/verhuur/pakket?${configToQuery(config)}`}>
                  Terug naar het pakket
                </Link>
                <button className="btn btn-d" type="button" onClick={() => goTo(2)}>
                  Verder naar extra's
                  <ArrowRightIcon />
                </button>
              </div>
            </div>

            {/* STAP 2 — extra's */}
            <div className={`pane${step === 2 ? " on" : ""}`}>
              <div className="blk">
                <div className="blkh">
                  <h2>Standaard inbegrepen &amp; extra zekerheid</h2>
                </div>
                <p className="bsub">
                  De professionele vochtmeting vóór de start én bij oplevering zit{" "}
                  <b>standaard</b> bij elke huur, zo weet u zeker dat alles droog is. Heeft u daar
                  een officieel document van nodig, dan stellen wij dat op.
                </p>

                <div className="inc-row">
                  <span className="exi">
                    <DropIcon />
                  </span>
                  <span className="ext">
                    <b>Vochtmeting voor &amp; na</b>
                    <small>
                      Meting van muren, chape en luchtvochtigheid bij levering en bij oplevering, bij
                      elk pakket.
                    </small>
                  </span>
                  <span className="inc-tag">✓ Inbegrepen</span>
                </div>

                <div>
                  {EXTRAS.map((x) => {
                    const Icon = EXTRA_ICONS[x.k];
                    return (
                      <div className="ex" key={x.k}>
                        <span className="exi">{Icon && <Icon />}</span>
                        <span className="ext">
                          <b>{x.name}</b>
                          <small>{x.sub}</small>
                        </span>
                        <span className="exp">
                          {euro(x.price)}
                          <small>{x.unit}</small>
                        </span>
                        <button
                          type="button"
                          className={`exadd${extras[x.k] ? " on" : ""}`}
                          onClick={() => setExtras((p) => ({ ...p, [x.k]: !p[x.k] }))}
                        >
                          {extras[x.k] ? "Toegevoegd" : "Toevoegen"}
                        </button>
                      </div>
                    );
                  })}

                  <div className="ex" style={{ opacity: 0.72 }}>
                    <span className="exi">
                      <PulseIcon />
                    </span>
                    <span className="ext">
                      <b>
                        Digitale monitoring<span className="soon-tag">Binnenkort</span>
                      </b>
                      <small>
                        Al onze toestellen krijgen digitale opvolging: u volgt de luchtvochtigheid
                        en droogvoortgang binnenkort live online op, zonder meerkost, automatisch op
                        elk toestel.
                      </small>
                    </span>
                    <button
                      type="button"
                      className="exadd"
                      disabled
                      style={{ opacity: 0.5, cursor: "default" }}
                    >
                      Binnenkort
                    </button>
                  </div>
                </div>
              </div>

              <div className="blk">
                <div className="blkh">
                  <h2>Condenspomp, standaard 1 per bouwdroger</h2>
                </div>
                <p className="bsub">
                  Nooit zelf een reservoir legen of werken met een kuip: de condenspomp voert het
                  water <b>rechtstreeks en automatisch af</b>, ook naar een hoger gelegen afvoer.
                  Goed om te weten: het water uit een bouwdroger is zuiver condenswater en mag gewoon
                  in de afvoer. Wij voorzien standaard één pomp per bouwdroger, aanpassen kan
                  hieronder.
                </p>
                <div>
                  <div className="ex">
                    <span className="exi">
                      <PumpIcon />
                    </span>
                    <span className="ext">
                      <b>{PUMP.name}</b>
                      <small>
                        {PUMP.sub} U heeft{" "}
                        <b>
                          {dryerCount} bouwdroger{dryerCount === 1 ? "" : "s"}
                        </b>{" "}
                        in dit pakket, wij zetten er standaard {dryerCount} pomp
                        {dryerCount === 1 ? "" : "en"} klaar.
                      </small>
                    </span>
                    <span className="exp">
                      {euro(PUMP.price)}
                      <small>per pomp / dag</small>
                    </span>
                    <span className="stp">
                      <button
                        type="button"
                        aria-label="Eén pomp minder"
                        onClick={() => setPumps(Math.max(0, pumpCount - 1))}
                      >
                        −
                      </button>
                      <span>{pumpCount}</span>
                      <button
                        type="button"
                        aria-label="Eén pomp meer"
                        onClick={() => setPumps(Math.min(dryerCount, pumpCount + 1))}
                      >
                        +
                      </button>
                    </span>
                  </div>
                </div>
              </div>

              <div className="blk">
                <div className="blkh">
                  <h2>Op welke verdieping werken we?</h2>
                </div>
                <p className="bsub">
                  Plaatsing op een verdieping is <b>inbegrepen in de prijs</b> zolang er een trap
                  aanwezig is. Moeten de toestellen via een ladder naar boven gedragen worden, dan
                  rekenen wij eenmalig € {LADDER_FEE} extra draagwerk aan.
                </p>
                <div className="ex" style={{ borderBottom: 0 }}>
                  <span className="exi">
                    <StairsIcon />
                  </span>
                  <span className="ext">
                    <b>Aantal verdiepingen</b>
                    <small>
                      Gelijkvloers = 0. Wij dragen en plaatsen alle toestellen op de juiste
                      verdieping.
                    </small>
                  </span>
                  <span className="stp">
                    <button
                      type="button"
                      aria-label="Eén verdieping minder"
                      onClick={() => setFloors((f) => Math.max(0, f - 1))}
                    >
                      −
                    </button>
                    <span>{floors}</span>
                    <button
                      type="button"
                      aria-label="Eén verdieping meer"
                      onClick={() => setFloors((f) => Math.min(MAX_FLOORS, f + 1))}
                    >
                      +
                    </button>
                  </span>
                </div>
                {floors > 0 && (
                  <div style={{ padding: "2px 0 10px 51px" }}>
                    <div style={{ fontSize: 13.5, fontWeight: 600, marginBottom: 9 }}>
                      Hoe geraken we boven?
                    </div>
                    <div style={{ display: "flex", gap: 9, flexWrap: "wrap" }}>
                      <button
                        type="button"
                        className={`acc${access === "trap" ? " on" : ""}`}
                        onClick={() => setAccess("trap")}
                      >
                        Via de trap <small>Inbegrepen</small>
                      </button>
                      <button
                        type="button"
                        className={`acc${access === "ladder" ? " on" : ""}`}
                        onClick={() => setAccess("ladder")}
                      >
                        Via een ladder <small>+ € {LADDER_FEE} eenmalig</small>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="blk">
                <div className="blkh">
                  <h2>Extra toestellen</h2>
                </div>
                <p className="bsub">
                  Meer capaciteit betekent kortere droogtijd. Onze technicus bekijkt het bij levering
                  en u betaalt enkel wat u gebruikt.
                </p>
                <div>
                  {DEVICE_KEYS.map((k) => (
                    <div className="ex" key={k}>
                      <span className="exi">
                        <img src={CAT[k].img} alt="" loading="lazy" decoding="async" />
                      </span>
                      <span className="ext">
                        <b>{CAT[k].name}</b>
                        <small>{CAT[k].sub}</small>
                      </span>
                      <span className="exp">
                        {euro(CAT[k].w2)}
                        <small>per 2 weken</small>
                      </span>
                      <span className="stp">
                        <button type="button" aria-label="Eén minder" onClick={() => bump(k, -1)}>
                          −
                        </button>
                        <span>{dev[k]}</span>
                        <button type="button" aria-label="Eén meer" onClick={() => bump(k, 1)}>
                          +
                        </button>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="fnav">
                <button className="btn btn-o" type="button" onClick={() => goTo(1)}>
                  Terug
                </button>
                <button className="btn btn-d" type="button" onClick={() => goTo(3)}>
                  Verder naar datum
                  <ArrowRightIcon />
                </button>
              </div>
            </div>

            {/* STAP 3 — levering en datum */}
            <div className={`pane${step === 3 ? " on" : ""}`}>
              <div className="blk">
                <div className="blkh">
                  <h2>Levering &amp; installatie</h2>
                </div>
                <p className="bsub">
                  Pakketten worden altijd door ons geleverd, geplaatst en afgesteld, alleen zo kunnen
                  wij de 100% droog-garantie waarmaken. Zelf afhalen kan enkel bij{" "}
                  <Link to="/afhalen" style={{ color: "var(--red)", fontWeight: 600 }}>
                    losse toestellen
                  </Link>
                  , tegen een lagere afhaalprijs.
                </p>
                <div className="dopt">
                  {DELIVERY.map((d) => (
                    <div
                      key={d.k}
                      className={`dch${d.k === delivery ? " sel" : ""}`}
                      onClick={() => setDelivery(d.k)}
                      role="radio"
                      aria-checked={d.k === delivery}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setDelivery(d.k);
                        }
                      }}
                    >
                      <span className="dr" />
                      <span>
                        <b>{d.name}</b>
                        <small>{d.sub}</small>
                        <span className="dpx">{d.tag}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="blk">
                <div className="blkh">
                  <h2>Kies uw leverdatum</h2>
                </div>
                <p className="bsub">
                  Kies een dag in onze agenda. Op basis van de droogtijd van dit pakket plannen wij de
                  ophaling automatisch mee in, u hoeft daar niets voor te doen.
                </p>
                <div className="frow">
                  <div className="fld">
                    <label htmlFor="dStart">Leverdatum</label>
                    <input
                      type="date"
                      id="dStart"
                      value={startDate}
                      min={isoDate(new Date())}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>
                  <div className="fld">
                    <label htmlFor="dSlot">Tijdslot levering</label>
                    <select id="dSlot" value={slot} onChange={(e) => setSlot(e.target.value)}>
                      {SLOTS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="fld">
                    <label htmlFor="dWeeks">Huurperiode (vast per pakket)</label>
                    <input
                      type="text"
                      id="dWeeks"
                      readOnly
                      value={`${RENTAL_DAYS} dagen, inbegrepen in de pakketprijs`}
                    />
                  </div>
                </div>

                {datesError && (
                  <div className="plan pw" role="status">
                    <WarnIcon />
                    <div className="pt2">{datesError}</div>
                  </div>
                )}

                {dateBlocked && (
                  <div className="plan pw" role="status">
                    <WarnIcon />
                    <div className="pt2">
                      Op <b>{start ? formatLongDate(start) : startDate}</b> staan onze toestellen voor
                      dit pakket al ingepland, en de komende {AVAILABILITY_HORIZON_DAYS} dagen komt er
                      niets vrij. Bel ons op 03 689 90 65 — vaak kunnen we schuiven.
                    </div>
                  </div>
                )}

                {!dateBlocked && shiftedDate && shiftedDate.to === startDate && (
                  <div className="plan pw" role="status">
                    <WarnIcon />
                    <div className="pt2">
                      Op <b>{formatLongDate(new Date(shiftedDate.from))}</b> staan onze toestellen voor
                      dit pakket al ingepland. Wij hebben uw leverdatum daarom verzet naar de
                      eerstvolgende vrije dag: <b>{formatLongDate(new Date(shiftedDate.to))}</b>. Een
                      andere dag kiezen kan gewoon hierboven.
                    </div>
                  </div>
                )}

                {start && end && !dateBlocked && (
                  <div className="plan">
                    <CalendarCheckIcon />
                    <div className="pt2">
                      Wij leveren en installeren op <b>{formatLongDate(start)}</b> tussen{" "}
                      <b>{slot}</b>. Uw vaste huurperiode van <b>{RENTAL_DAYS} dagen</b> loopt tot{" "}
                      <b>{formatLongDate(end)}</b>, de ophaling staat automatisch ingepland op die
                      dag, tussen <b>{slot}</b>. Verwachte droogtijd van dit pakket:{" "}
                      <b>{days} dagen</b>.
                      {tooShort && (
                        <span className="pw">
                          <WarnIcon />
                          Korter dan de verwachte droogtijd, verlengen kan later met één klik.
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <div className="frow two" style={{ marginTop: 16 }}>
                  <div className="fld">
                    <label htmlFor="dEnd">Ophaaldatum (automatisch)</label>
                    <input type="date" id="dEnd" readOnly value={end ? isoDate(end) : ""} />
                  </div>
                  <div className="fld">
                    <label htmlFor="dEndSlot">Tijdslot ophaling</label>
                    <input type="text" id="dEndSlot" readOnly value={slot} />
                  </div>
                </div>
              </div>

              <div className="fnav">
                <button className="btn btn-o" type="button" onClick={() => goTo(2)}>
                  Terug
                </button>
                <button
                  className="btn btn-d"
                  type="button"
                  disabled={loadingDates || dateBlocked || !!datesError}
                  onClick={() => goTo(4)}
                >
                  {loadingDates ? "Beschikbaarheid nakijken…" : "Verder naar gegevens"}
                  <ArrowRightIcon />
                </button>
              </div>
            </div>

            {/* STAP 4 — gegevens */}
            <div className={`pane${step === 4 ? " on" : ""}`}>
              <div className="blk">
                <div className="blkh">
                  <h2>Uw gegevens</h2>
                </div>
                <p className="bsub">
                  Wij gebruiken dit om de levering te plannen en u de bevestiging te sturen.
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
                    <label htmlFor="fName">Voornaam en naam</label>
                    <input
                      type="text"
                      id="fName"
                      placeholder="Jan Peeters"
                      value={customer.name}
                      onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                    />
                  </div>
                  <div className="fld">
                    <label htmlFor="fTel">Telefoon</label>
                    <input
                      type="tel"
                      id="fTel"
                      placeholder="0470 00 00 00"
                      value={customer.tel}
                      onChange={(e) => setCustomer({ ...customer, tel: e.target.value })}
                    />
                  </div>
                </div>

                <div className="frow two" style={{ marginTop: 14 }}>
                  <div className="fld" style={{ gridColumn: "span 2" }}>
                    <label htmlFor="fMail">E-mailadres</label>
                    <input
                      type="email"
                      id="fMail"
                      placeholder="jan@voorbeeld.be"
                      value={customer.mail}
                      onChange={(e) => setCustomer({ ...customer, mail: e.target.value })}
                    />
                  </div>
                </div>

                {customerType === "pro" && (
                  <div className="frow two" style={{ marginTop: 14 }}>
                    <div className="fld">
                      <label htmlFor="fComp">Bedrijfsnaam</label>
                      <input
                        type="text"
                        id="fComp"
                        placeholder="Bouwbedrijf bv"
                        value={customer.company}
                        onChange={(e) => setCustomer({ ...customer, company: e.target.value })}
                      />
                    </div>
                    <div className="fld">
                      <label htmlFor="fBtw">Btw-nummer</label>
                      <input
                        type="text"
                        id="fBtw"
                        placeholder="BE 0123.456.789"
                        value={customer.vat}
                        onChange={(e) => setCustomer({ ...customer, vat: e.target.value })}
                      />
                    </div>
                  </div>
                )}

                <div className="frow" style={{ marginTop: 14 }}>
                  <div className="fld" style={{ gridColumn: "span 2" }}>
                    <label htmlFor="fAddr">Adres werf</label>
                    <input
                      type="text"
                      id="fAddr"
                      placeholder="Straat en nummer"
                      value={customer.addr}
                      onChange={(e) => setCustomer({ ...customer, addr: e.target.value })}
                    />
                  </div>
                  <div className="fld">
                    <label htmlFor="fPost">Postcode</label>
                    <input
                      type="text"
                      id="fPost"
                      placeholder="2630"
                      maxLength={4}
                      value={customer.post}
                      onChange={(e) => setCustomer({ ...customer, post: e.target.value })}
                    />
                  </div>
                </div>

                <div className="blkh" style={{ marginTop: 24 }}>
                  <h2>Hoe wilt u betalen?</h2>
                </div>
                <div className="payopts">
                  <button
                    type="button"
                    className={`payopt${payment === "online" ? " sel" : ""}`}
                    onClick={() => setPayment("online")}
                  >
                    <span className="pob">5% korting</span>
                    <b>Volledig online betalen</b>
                    <span>
                      Betaal nu met Bancontact of kaart. U krijgt 5% korting op uw volledige pakket
                      en uw factuur staat meteen in uw mailbox.
                    </span>
                    <span className="pos">
                      U bespaart {euro(Math.round(total * ONLINE_DISCOUNT * 100) / 100)}
                    </span>
                  </button>
                  <button
                    type="button"
                    className={`payopt${payment === "levering" ? " sel" : ""}`}
                    onClick={() => setPayment("levering")}
                  >
                    <b>{euro(DEPOSIT)} nu, rest bij levering</b>
                    <span>
                      Bevestig uw boeking met {euro(DEPOSIT)}. Het saldo betaalt u ter plaatse bij
                      levering, via Bancontact of QR-code.
                    </span>
                    <span className="pos">Factuur na volledige betaling</span>
                  </button>
                </div>

                <label className="cok">
                  <input
                    type="checkbox"
                    checked={customer.ok}
                    onChange={(e) => setCustomer({ ...customer, ok: e.target.checked })}
                  />{" "}
                  <span>
                    Ik ga akkoord met de algemene voorwaarden en geef Vernast toestemming om mij over
                    deze boeking te contacteren.
                  </span>
                </label>

                {payError && <p className="perr">{payError}</p>}
              </div>
              <div className="fnav">
                <button className="btn btn-o" type="button" onClick={() => goTo(3)}>
                  Terug
                </button>
                <button
                  className="btn btn-r"
                  type="button"
                  disabled={!isComplete(customer, customerType) || paying}
                  onClick={payAndConfirm}
                >
                  {paying
                    ? "Betaling voorbereiden…"
                    : `Naar de betaling · ${euro(summary.payable)}`}
                  <ArrowRightIcon />
                </button>
              </div>
            </div>

            {/* STAP 5 — betaling, formulier van Stripe binnen onze eigen pagina */}
            <div className={`pane${step === STEP_PAY ? " on" : ""}`}>
              <div className="blk">
                <div className="blkh">
                  <h2>Betaal uw boeking</h2>
                </div>
                <p className="bsub">
                  U betaalt <b>{euro(summary.payable)}</b> met Apple Pay, Bancontact, kaart, iDEAL of
                  Klarna. De betaling loopt beveiligd via Stripe — wij zien uw kaartgegevens nooit.
                </p>

                <div className="paybox">
                  {step === STEP_PAY && session?.clientSecret && stripeJs && (
                    <CheckoutElementsProvider
                      key={session.clientSecret}
                      stripe={stripeJs}
                      options={{
                        clientSecret: session.clientSecret,
                        elementsOptions: { appearance: STRIPE_APPEARANCE },
                      }}
                    >
                      <BoekingBetaalformulier bedrag={euro(summary.payable)} />
                    </CheckoutElementsProvider>
                  )}
                </div>

                <p className="paynote">
                  <CheckIcon size={13} strokeWidth={3} />
                  {/* De tekst hoort in één span: los in de flexbox wordt elk
                      stukje een eigen kolom zodra de ruimte krap wordt. */}
                  <span>
                    Uw levering op <b>{start ? formatLongDate(start) : ""}</b> tussen <b>{slot}</b>{" "}
                    wordt vastgelegd zodra de betaling bevestigd is.
                  </span>
                </p>
              </div>
              <div className="fnav">
                <button className="btn btn-o" type="button" onClick={cancelPayment}>
                  Terug naar mijn gegevens
                </button>
              </div>
            </div>

            {/* STAP 6 — bevestiging */}
            <div className={`pane${step === STEP_DONE ? " on" : ""}`}>
              <div className="done">
                <div className="dic">
                  <CheckIcon size={30} strokeWidth={2.6} />
                </div>
                <h2>Uw boeking staat vast</h2>
                <p>
                  Wij bevestigen uw levering telefonisch binnen één werkdag. Betaalde u volledig
                  online, dan staat uw factuur meteen in uw mailbox — met 5% korting. Koos u voor
                  {" "}{euro(DEPOSIT)} bevestiging, dan betaalt u het saldo bij levering.
                </p>
                <div className="dref">
                  <span>Referentie</span>
                  <span>{reference}</span>
                </div>
                <div className="fnav" style={{ justifyContent: "center" }}>
                  <Link className="btn btn-o" to={`/verhuur/pakket?${configToQuery(config)}`}>
                    Terug naar het pakket
                  </Link>
                  <Link className="btn btn-d" to="/">
                    Naar de homepage
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* SAMENVATTING */}
          <div>
            <div className="sum">
              <div className="sh">
                {/* Met de bijgezette toestellen erbij: de banner draagt zijn
                    tellingen in het beeld, dus die moet meebewegen. */}
                <img
                  src={packageImage(config, allItems(config, dev))}
                  alt="Uw droogpakket"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="st">
                <div className="sl">Uw pakket</div>
                <h3>{packageTitle(config)}</h3>
              </div>
              <div className="sb">
                <div className="sline">
                  <span>
                    Pakket · {summary.deviceCount} toestellen · {FIXED_WEEKS} weken
                  </span>
                  <b>{euro(base)}</b>
                </div>
                <div className="sline inc">
                  <span>Levering, installatie &amp; ophaling</span>
                  <b>Inbegrepen</b>
                </div>
                <div>
                  {rows.map((r) => (
                    <div className={`sline${r.inc ? " inc" : ""}`} key={r.l}>
                      <span>{r.l}</span>
                      <b>{r.inc ? "Inbegrepen" : euro(r.v)}</b>
                    </div>
                  ))}
                </div>
                <div className="stot">
                  {discount > 0 && (
                    <div className="tl" style={{ fontSize: 13 }}>
                      <span className="tll" style={{ fontWeight: 400 }}>
                        Korting online betalen (5%)
                      </span>
                      <span className="tlv" style={{ fontSize: 14, color: "#2e9e5b" }}>
                        − {euro(discount)}
                      </span>
                    </div>
                  )}
                  <div className="tl">
                    <span className="tll">Totaal</span>
                    <span className="tlv">{euro(netTotal)}</span>
                  </div>
                  <div className="vat">
                    excl. btw · {euro(Math.round((netTotal / FIXED_WEEKS) * 100) / 100)} per week
                  </div>
                </div>
              </div>
              <div className="sf">
                {step < 4 && (
                  <button className="btn btn-r" type="button" onClick={() => goTo(step + 1)}>
                    {NEXT_LABEL[step] ?? "Verder"}
                  </button>
                )}
                <div className="note">Geen voorschot · dagelijks opzegbaar</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <V3Footer />
    </div>
  );
};

export default VerhuurBoekingPage;
