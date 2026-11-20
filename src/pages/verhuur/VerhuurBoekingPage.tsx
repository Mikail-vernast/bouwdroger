import { useCallback, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useSearchParams } from "react-router-dom";
import { CheckoutElementsProvider } from "@stripe/react-stripe-js/checkout";
import type { Stripe as StripeJs } from "@stripe/stripe-js";
import PageMeta from "@/components/PageMeta";
import BoekingBetaalformulier from "@/components/verhuur/BoekingBetaalformulier";
import LeverplaatsZoeker from "@/components/verhuur/LeverplaatsZoeker";
import LeverKalender from "@/components/verhuur/LeverKalender";
import OptieInfo from "@/components/verhuur/OptieInfo";
import { STRIPE_APPEARANCE } from "@/lib/stripeAppearance";
import V3Header from "@/components/home-v3/V3Header";
import V3Footer from "@/components/home-v3/V3Footer";
import { isValidEmail, isValidPhone, maskEmail, maskPhone } from "@/lib/inputMask";
import {
  ArrowRightIcon,
  BoltIcon,
  CalendarCheckIcon,
  TruckIcon,
  CheckIcon,
  CrossIcon,
  DropIcon,
  PulseIcon,
  ReportIcon,
  StairsIcon,
  WarnIcon,
} from "@/components/verhuur/icons";
import {
  CAT,
  DELIVERY,
  LADDER_FEE,
  MAX_FLOORS,
  PUMP,
  type DeviceKey,
} from "@/data/verhuur";
import {
  DEVICE_KEYS,
  addDays,
  configToQuery,
  configWeeks,
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
  extraNaarQuery,
  extraUitQuery,
  bookingFingerprint,
  bookingSummary,
  type Access,
  type BookingOptions,
  type PaymentChoice,
  DEPOSIT_GROSS,
  ONLINE_DISCOUNT,
  withVat,
} from "@/lib/booking";
import {
  GRATIS_LEVERING_VOETNOOT,
  leverzoneUitQuery,
  type Land,
} from "@/lib/levering";
import type { Plaats } from "@/lib/plaatsZoeker";
import { CONTACT } from "@/lib/site";
import { useSeo } from "@/data/seo";
import { catInTaal, coverInTaal, deliveryInTaal, extrasInTaal, packageSpecLineInTaal } from "@/data/verhuur.fr";
import { formatEuro, useCopy, useLokaalPad, useTaal } from "@/i18n/useTaal";
import { NUMBER_LOCALE, type Taal } from "@/i18n/taal";
import { BOEKING_COPY, regelInTaal } from "./VerhuurBoekingPage.copy";
import "@/styles/verhuur.css";
import "@/styles/verhuur-fixes.css";
import "@/styles/verhuur-betaling.css";
import { reportBookingEvent } from "@/lib/reportBookingEvent";

/** De extra's uit data/verhuur.ts, gekoppeld aan hun icoon uit het design. */
/*
  Welke uitleg en foto achter het i'tje van een extra hangt. De extra's zelf
  komen uit het portaal; een extra die hier niet staat, krijgt gewoon geen i.
*/
const EXTRA_INFO: Record<string, { sleutel: "rapport" | "stroom"; foto: string }> = {
  rapport: { sleutel: "rapport", foto: "/vernast/man-klembord-pen.webp" },
  stroom: { sleutel: "stroom", foto: "/vernast/man-duim-kabels.webp" },
};

const EXTRA_ICONS: Record<string, (props: { size?: number }) => JSX.Element> = {
  rapport: ReportIcon,
  stroom: BoltIcon,
};

/** 1 dekking · 2 extra's · 3 datum · 4 gegevens · 5 betaling · 6 bevestiging. */
const TOTAL_STEPS = 6;
const STEP_DETAILS = 4;
const STEP_PAY = 5;
const STEP_DONE = 6;
/**
 * Terug van Stripe, terwijl we bij Stripe navragen of er effectief betaald is.
 *
 * Geen echte stap in de wizard — vandaar het nummer buiten de reeks — maar hij
 * moet er wel zijn. Zonder deze tussenstand kwam de bezoeker na het betalen
 * eerst op stap 1 terecht ("Kies uw dekking"), omdat de wizard nu eenmaal daar
 * start en de bevestiging pas volgt als het antwoord van Stripe binnen is. Wie
 * net afgerekend heeft, ziet dan een halve seconde lang de vraag of hij een
 * dekking wil kiezen — precies het moment waarop je twijfelt of je betaling wel
 * door is.
 */
const STEP_VERIFY = 0;

const SLOTS = ["08:00 – 10:00", "10:00 – 12:00", "13:00 – 15:00", "15:00 – 17:00"];
/** Moet gelijk lopen met `HORIZON_DAYS` in `api/availability.ts`. */
const AVAILABILITY_HORIZON_DAYS = 60;


type CustomerType = "part" | "pro";

/** Wat de bezoeker koos, bewaard over de omweg langs Stripe heen. */
interface StoredBooking {
  options: BookingOptions;
  customer: Customer;
  customerType: CustomerType;
  startDate: string;
  slot: string;
  /**
   * De Stripe-sessie van de vorige poging, en dus de hold die daarbij hoort.
   *
   * Dit stond eerst alleen in React-state, en dat was precies één pagina-lading
   * te kort. Wie via Bancontact, iDEAL of Apple Pay betaalt, verlaat de pagina
   * en komt terug op een verse React-boom: het sessie-ID was dan weg, ging niet
   * meer mee als `previousSessionId`, en dus liet de server de oude hold staan.
   * De beschikbaarheidscontrole zag daarop zijn eigen reservatie, gaf een 409,
   * en de wizard schoof de bezoeker terug naar de datumstap — een half uur lang,
   * tot de hold vanzelf verliep. Hetzelfde gold na een refresh of een klik op
   * "terug" in de browser.
   */
  sessionId?: string;
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

function writeStored(booking: StoredBooking): void {
  if (typeof sessionStorage === "undefined") return;
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(booking));
  } catch {
    // Privémodus zonder sessionStorage: de betaling kan gewoon doorgaan.
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
  /**
   * Het land van de werf. Zonder dit veld is een postcode dubbelzinnig — 4000
   * is Luik én Tiel — en de transportvergoeding hangt eraan. Staat daarom
   * samen met de postcode in stap 1, vóór de prijs op het scherm komt.
   */
  land: Land;
  /**
   * De gemeente van de werf. Stond er lang niet bij, omdat het portaal genoeg
   * had aan straat en postcode. De bevestigingsmail toont het leveradres wél
   * volledig, en een adres zonder gemeente leest daar als een fout.
   */
  city: string;
  ok: boolean;
}

/**
 * De bestelling zoals `api/checkout-session` ze samenvat: wat er geleverd wordt
 * en wanneer, zonder wie het besteld heeft. Alles kan leeg zijn — een sessie van
 * vóór deze samenvatting draagt de metadata niet die ze uitleest.
 */
interface OrderSummary {
  package: string;
  devices: string[];
  deliveryDate: string;
  deliverySlot: string;
  rentalStart: string;
  rentalEnd: string;
  rentalDays: number | null;
  total: number | null;
  paid: number | null;
  balance: number | null;
}

const EMPTY_CUSTOMER: Customer = {
  name: "",
  tel: "",
  mail: "",
  company: "",
  vat: "",
  addr: "",
  post: "",
  land: "BE",
  city: "",
  ok: false,
};

/**
 * "donderdag 10 september" uit een ISO-datum uit de sessie.
 *
 * Middaguur erbij: een kale datum leest als UTC-middernacht, en dat is in
 * Brussel de dag ervoor — de klant zou zijn levering een dag te vroeg zien
 * staan. Wat geen datum blijkt, tonen we onveranderd; onleesbaar is beter dan
 * "Invalid Date" op een bevestiging.
 */
function longDate(iso: string, taal: Taal): string {
  const date = new Date(`${iso}T12:00:00`);
  return Number.isNaN(date.getTime()) ? iso : langeDatum(date, taal);
}

/** `formatLongDate` in de taal van de pagina; Nederlands blijft exact het oude. */
function langeDatum(date: Date, taal: Taal): string {
  return taal === "nl"
    ? formatLongDate(date)
    : date.toLocaleDateString(NUMBER_LOCALE[taal], { weekday: "long", day: "numeric", month: "long" });
}

/**
 * Mag de boeking afgerekend worden?
 *
 * `leverbaar` hoort hierbij en niet alleen in `api/checkout.ts`: zonder
 * bruikbare postcode staat er een totaal zónder transportvergoeding op het
 * scherm, en boven 200 km rijden we helemaal niet. Dat moet tegengehouden
 * worden vóór de betaling, niet erna.
 */
function isComplete(c: Customer, type: CustomerType, leverbaar: boolean): boolean {
  const proOk = type !== "pro" || (c.company.trim().length > 1 && c.vat.trim().length > 8);
  return (
    leverbaar &&
    c.name.trim().length > 1 &&
    isValidEmail(c.mail) &&
    isValidPhone(c.tel) &&
    c.addr.trim().length > 3 &&
    c.post.trim().length === 4 &&
    c.city.trim().length > 1 &&
    proOk &&
    c.ok
  );
}

const VerhuurBoekingPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const taal = useTaal();
  const t = useCopy(BOEKING_COPY);
  const lp = useLokaalPad();
  const seo = useSeo("verhuurBoeking");
  /*
    Alleen weergave. Nederlands houdt `euro()` ("€ 29,00"), zodat die pagina
    tekst-identiek blijft; Frans krijgt "29,00 €". Wat Stripe int, rekent
    `api/checkout.ts` zelf uit.
  */
  const eur = (n: number) => (taal === "nl" ? euro(n) : formatEuro(n, taal));
  const datumLang = (d: Date) => langeDatum(d, taal);
  const cover_ = useMemo(() => coverInTaal(taal), [taal]);
  const extras_ = useMemo(() => extrasInTaal(taal), [taal]);
  const delivery_ = useMemo(() => deliveryInTaal(taal), [taal]);
  const cat_ = useMemo(() => catInTaal(taal), [taal]);
  const ladderFee = taal === "nl" ? `€ ${LADDER_FEE}` : formatEuro(LADDER_FEE, taal, 0);
  const config = useMemo(() => parseConfig(searchParams), [searchParams]);

  // Na de omweg langs Stripe is de React-state weg; wat de bezoeker koos komt
  // dan terug uit sessionStorage.
  const stored = useMemo(readStored, []);

  /*
    Staat er een `session_id` in de adresbalk, dan komt de bezoeker net van de
    betaalpagina en start de wizard op de controlestand in plaats van op stap 1.
    Bewust in de initializer: één render later is te laat, dan heeft hij de
    dekkingsstap al zien staan.
  */
  const [step, setStep] = useState(() => (searchParams.get("session_id") ? STEP_VERIFY : 1));
  const [cover, setCover] = useState(stored?.options.cover ?? "comfort");
  const [toonStap1Fouten, setToonStap1Fouten] = useState(false);
  const [extras, setExtras] = useState<Record<string, boolean>>(() =>
    Object.fromEntries((stored?.options.extras ?? []).map((k) => [k, true]))
  );
  // Extra toestellen die de bezoeker op de pakketpagina al zag (uit de
  // droogsimulator) gaan voor; anders wat er na Stripe bewaard was.
  const [dev, setDev] = useState<Record<DeviceKey, number>>(() => {
    const uitLink = extraUitQuery(searchParams);
    const bron = Object.keys(uitLink).length > 0 ? uitLink : (stored?.options.dev ?? {});
    return { small: bron.small ?? 0, medium: bron.medium ?? 0, axiaal: bron.axiaal ?? 0, kachel: bron.kachel ?? 0 };
  });
  // null = de klant liet het standaardaantal staan: één pomp per bouwdroger.
  const [pumps, setPumps] = useState<number | null>(stored?.options.pumps ?? null);
  const [floors, setFloors] = useState(stored?.options.floors ?? 0);
  const [access, setAccess] = useState<Access>(stored?.options.access ?? "trap");
  const [delivery, setDelivery] = useState(stored?.options.delivery ?? DELIVERY[0].k);
  /*
    De standaarddatum (morgen) komt pas na mount: bij de prerender is "morgen"
    de dag na de build, in de browser de dag na vandaag. Uit de initializer gaf
    dat een hydratatiefout waarna React de hele pagina opnieuw opbouwde.
  */
  const [startDate, setStartDate] = useState(() => stored?.startDate ?? "");
  const [today, setToday] = useState("");
  useEffect(() => {
    setToday(isoDate(new Date()));
    setStartDate((current) => current || isoDate(addDays(new Date(), 1)));
  }, []);
  const [slot, setSlot] = useState(stored?.slot ?? SLOTS[1]);
  const [customerType, setCustomerType] = useState<CustomerType>(stored?.customerType ?? "part");
  const [payment, setPayment] = useState<PaymentChoice>(stored?.options.payment ?? "online");
  /*
    Samengevoegd en niet zomaar overgenomen: wie tijdens een betaling in
    sessionStorage staat met een boeking van vóór het gemeenteveld, mist die
    sleutel. Zonder deze merge komt dat veld als `undefined` terug — een input
    die van ongecontroleerd naar gecontroleerd springt, en een `.trim()` die
    eruit klapt.
  */
  /*
    De postcode die de calculator in de adresbalk zette. Alleen als beginwaarde:
    wat er al in sessionStorage staat wint, anders overschrijft een gedeelde
    link het adres dat de bezoeker zelf net getypt heeft.
  */
  const uitQuery = useMemo(() => leverzoneUitQuery(searchParams), [searchParams]);
  const [customer, setCustomer] = useState<Customer>(() => ({
    ...EMPTY_CUSTOMER,
    ...(uitQuery ? { post: uitQuery.postcode, land: uitQuery.land } : {}),
    ...stored?.customer,
  }));
  /*
    De werf zoals de zoeker ze toont. De postcode blijft de waarheid voor het
    tarief; de gemeente gaat mee naar het leveradres in stap 4, zodat de
    bezoeker ze daar niet nog eens hoeft te typen.
  */
  const leverplaats = useMemo<Plaats | null>(
    () =>
      /^\d{4}$/.test(customer.post)
        ? { land: customer.land, postcode: customer.post, naam: customer.city }
        : null,
    [customer.land, customer.post, customer.city],
  );
  const kiesLand = useCallback((land: Land) => {
    setCustomer((c) => ({ ...c, land }));
  }, []);
  const kiesLeverplaats = useCallback((p: Plaats | null) => {
    setCustomer((c) =>
      p
        ? { ...c, land: p.land, post: p.postcode, city: p.naam || c.city }
        : { ...c, post: "" },
    );
  }, []);
  const [fotoGroot, setFotoGroot] = useState(false);
  // Escape sluit de vergrote foto, en de pagina scrolt er niet onder mee.
  useEffect(() => {
    if (!fotoGroot) return;
    const toets = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFotoGroot(false);
    };
    const vorig = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", toets);
    return () => {
      document.body.style.overflow = vorig;
      window.removeEventListener("keydown", toets);
    };
  }, [fotoGroot]);
  const [reference, setReference] = useState("");
  /*
    Wat er effectief betaald is, zoals `api/checkout-session` het teruggeeft.
    Niet af te leiden uit `config`: die staat in de adresbalk en is een wens,
    geen bestelling. Blijft leeg zolang niemand van Stripe of uit de
    bevestigingsmail terugkomt.
  */
  const [ordered, setOrdered] = useState<OrderSummary | null>(null);
  const [paying, setPaying] = useState(false);
  const [payError, setPayError] = useState("");
  /*
    De transportofferte: boven 200 km rekent de bezoeker niet online af maar
    laat hij zijn gegevens achter. `verstuurd` schakelt het formulier om naar de
    bevestiging — in dezelfde stap, want een aparte bevestigingsstap zou langs
    de betaalstap moeten die er voor hem niet is.
  */
  const [offerteVerstuurd, setOfferteVerstuurd] = useState(false);

  /*
    Het betaalformulier van Stripe leeft in stap 5. De sleutel wordt pas
    opgehaald wanneer de bezoeker daar aankomt, zodat stripe.js niet meelaadt
    voor wie enkel aan het configureren is.

    De sessie blijft bewaard wanneer hij terugkeert naar zijn gegevens, samen met
    een vingerafdruk van de boeking waarvoor ze gemaakt is. Verandert er niets,
    dan gaat hij terug naar dezelfde sessie in plaats van een tweede aan te
    maken — zie `bookingFingerprint` voor waarom dat belangrijk is.

    Na een pagina-lading — terug van Bancontact, een refresh, de terugknop — komt
    alleen het ID terug uit sessionStorage. Het betaalformulier is dan niet meer
    te heropenen (`clientSecret` leeg), maar het ID is genoeg om de server de
    bijbehorende hold te laten lossen voor hij opnieuw kijkt wat vrij is. Zonder
    dat blokkeert de bezoeker zijn eigen leverdatum; zie `StoredBooking`.
  */
  const [session, setSession] = useState<{
    id: string;
    clientSecret: string;
    fingerprint: string;
  } | null>(() => (stored?.sessionId ? { id: stored.sessionId, clientSecret: "", fingerprint: "" } : null));
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
      land: customer.land,
      postcode: customer.post,
      /*
        De wizard verkoopt geen spoed: de klant plant zijn eigen datum en betaalt
        het tarief van zijn zone. Een losse rit buiten onze ronde regelen we aan
        de telefoon, met het bedrag uit `ZONES[].spoed` erbij.
      */
      spoed: false,
    }),
    [cover, extras, pumps, dev, floors, access, delivery, payment, customer.land, customer.post]
  );

  const summary = useMemo(() => bookingSummary(config, options), [config, options]);
  const {
    base,
    lines: rows,
    total,
    discount,
    netTotal,
    dryerCount,
    pumps: pumpCount,
    leverzone,
    leverbaar,
  } = summary;

  /*
    Boven 200 km ligt er geen vast tarief. De bezoeker wordt daar niet
    weggestuurd: hij stelt zijn pakket gewoon samen en ziet de huurprijs, alleen
    rekent hij niet online af — wij zetten er een vervoersprijs bij en bellen
    terug. Zie `api/transport-offerte.ts`.
  */
  const offerte = leverzone !== null && !leverbaar;

  const goTo = (n: number) => {
    setStep(n);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /*
    Stap 1 laat niemand door zonder werf: zonder werf is er geen transport en
    dus geen juist totaal. De dekking staat standaard op "Eigen risico € 250"
    (comfort) — daar rekent de samenvatting al mee, dus een lege keuze zou het
    totaal tegenspreken. De knop blijft klikbaar maar wijst aan wat ontbreekt;
    een grijze knop zonder uitleg leest als een kapotte wizard.
  */
  const naarStap2 = () => {
    if (!leverzone) {
      setToonStap1Fouten(true);
      document.getElementById("stap1-plaats")?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    goTo(2);
  };

  /*
    Deze pagina is opnieuw geladen terwijl er nog een betaalpoging openstond:
    een refresh, de terugknop, of een omweg langs Bancontact die niet op een
    betaling uitliep. De bezoeker staat dus niet meer op het betaalscherm, en de
    toestellen die daarvoor apart lagen horen terug in de pot.

    Zonder dit botst hij op zijn eigen reservatie: de datumstap ziet zijn hold
    als een volle dag en schuift zijn levering weken vooruit, en het afrekenen
    loopt op een 409 vast — een half uur lang, tot de hold vanzelf verliep.

    Niet wanneer Stripe hem terugstuurt met een `session_id`: dan gaat het net
    om die sessie en kan er zelfs betaald zijn. De server weigert een betaalde
    sessie los te laten, maar we hoeven er ook niet naar te vragen.
  */
  useEffect(() => {
    const staleId = stored?.sessionId;
    const email = stored?.customer.mail;
    if (!staleId || !email || searchParams.get("session_id")) return;
    void fetch("/api/booking-release", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ sessionId: staleId, email }),
    }).catch(() => {
      // Lukt het niet, dan valt de bezoeker terug op het oude gedrag: de hold
      // verloopt binnen het half uur vanzelf.
    });
    // Eén keer, bij het laden van de pagina: `stored` komt uit een useMemo zonder
    // afhankelijkheden en verandert dus niet meer.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /*
    Stripe.js alvast binnenhalen zodra de bezoeker zijn gegevens invult.

    Zonder dit liep het serieel: eerst `POST /api/checkout` (ruim een seconde,
    want daar zitten de beschikbaarheidscontrole en het aanmaken van de sessie
    in), en pas als die terug was begon js.stripe.com te downloaden. Gemeten op
    productie duurde het daardoor bijna vier seconden voor de betaalknoppen
    bruikbaar waren.

    Het gewone ingangspunt van `@stripe/stripe-js` injecteert het script als
    neveneffect van de import — `loadStripe` hoeft daar niet voor aangeroepen te
    worden, en de sleutel is hier dus nog niet nodig. Wie het formulier invult,
    heeft die tijd toch nodig; tegen de tijd dat hij op betalen klikt staat
    Stripe klaar. (`/pure` zou dit juist uitschakelen — niet gebruiken.)
  */
  useEffect(() => {
    if (step !== STEP_DETAILS) return;
    void import("@stripe/stripe-js");
  }, [step]);

  const days = dryingDays(config);
  /*
    De huurperiode is niet meer voor elk pakket twee weken: bij een vast pakket
    ligt ze in de catalogus, afgeleid uit de materiaaldikte. Stond hier nog de
    vaste `FIXED_WEEKS`, dan beloofde de boekingspagina veertien dagen terwijl er
    eenentwintig aangerekend werden.
  */
  const rentalWeeks = configWeeks(config);
  const rentalDays = rentalWeeks * 7;
  const start = startDate ? new Date(startDate) : null;
  const end = start ? addDays(start, rentalDays) : null;
  const tooShort = rentalDays < days;

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
  const [horizonDates, setHorizonDates] = useState<string[]>([]);
  const [datesError, setDatesError] = useState("");
  const [loadingDates, setLoadingDates] = useState(false);

  /*
    Datums die `api/checkout` hard heeft afgewezen. Die horen apart van de lijst
    hierboven: die reikt maar 60 dagen ver, en de fetch bij het terugkeren naar
    deze stap overschreef de afwijzing meteen. Gevolg: de bezoeker belandde na een
    409 op de datumstap zonder één woord uitleg, met de knop gewoon open — en liep
    zo opnieuw tegen dezelfde volle dag aan.
  */
  const [rejectedDates, setRejectedDates] = useState<string[]>([]);

  const blockedDates = useMemo(
    () => [...new Set([...horizonDates, ...rejectedDates])],
    [horizonDates, rejectedDates]
  );

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
        setHorizonDates(data.blocked_start_dates ?? []);
      })
      .catch(() => {
        if (!active) return;
        /*
          Wel zeggen dat we het niet weten, niet de stap sluiten. Dat laatste
          stond hier eerst, en op 13-08-2026 lag de boeking daardoor plat toen
          de pooler aan de Vernast-kant een minuut hikte: de wizard had een lege
          lijst, dus geen enkele datum kon nog verder. De harde controle in
          `api/checkout.ts` staat er nog steeds en stuurt de bezoeker met een
          409 terug naar deze stap — die mag deze route dus doorlaten, precies
          zoals `usePickupAvailability` dat op de afhaalpagina doet.
        */
        setHorizonDates([]);
        reportBookingEvent({ code: "wizard_beschikbaarheid_onbereikbaar", config, options });
        setDatesError(t.datesError);
      })
      .finally(() => {
        if (active) setLoadingDates(false);
      });

    return () => {
      active = false;
    };
    // `t` volgt de taal uit de URL en verandert niet binnen één pagina.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, config, options]);

  const dateBlocked = blockedDates.includes(startDate);

  /*
    Kan er op deze dag geleverd worden? Alleen volle dagen vallen af.

    Deze kalender zet géén dagen dicht omdat het onze ritdag niet is: de klant
    plant zijn levering zelf. Dat wij per corridor op een vaste dag rijden is
    onze planning en staat nergens op het scherm; de bundeling waar het tarief
    op steunt komt uit de dispatch en uit de telefonische bevestiging.
  */
  const datumKan = useCallback((iso: string) => !blockedDates.includes(iso), [blockedDates]);

  /**
   * Waarom de stap naar de gegevens dicht blijft — of `null` als hij open mag.
   *
   * Eén bron voor beide "Verder"-knoppen. Ze liepen uiteen: onderaan ging de
   * stap op slot zodra de beschikbaarheid ook maar hikte, terwijl dezelfde knop
   * in de samenvatting rechts álles doorliet, ook een dag die vol stond. Wie de
   * rechtse nam, kwam pas bij het afrekenen tegen een 409 aan.
   */
  const nextBlocked = step !== 3 ? null : loadingDates ? "laden" : dateBlocked ? "vol" : null;

  /**
   * Ligt de gekozen dag binnen het bereik dat `api/availability` nakijkt? Zo niet,
   * dan weten we alleen wat de harde controle bij het afrekenen ons vertelde en
   * kunnen we niets zeggen over de dagen eromheen.
   */
  const withinHorizon = useMemo(
    () => startDate <= isoDate(addDays(new Date(), AVAILABILITY_HORIZON_DAYS)),
    [startDate]
  );

  /**
   * Eerstvolgende dag waarop dit pakket wél vrij is. Zoekt niet verder dan de
   * horizon van `api/availability`: daarbuiten staat een datum niet in de lijst
   * omdat we het niet weten, niet omdat hij vrij is.
   */
  const nextFreeDate = useMemo(() => {
    if (!startDate || datumKan(startDate)) return null;
    const from = new Date(startDate);
    const horizon = isoDate(addDays(new Date(), AVAILABILITY_HORIZON_DAYS));
    for (let i = 1; i <= AVAILABILITY_HORIZON_DAYS; i++) {
      const candidate = isoDate(addDays(from, i));
      if (candidate > horizon) return null;
      if (datumKan(candidate)) return candidate;
    }
    return null;
  }, [startDate, datumKan]);

  /*
    Een volle dag hoeft de bezoeker niet zelf op te lossen: we schuiven de
    levering meteen naar de eerstvolgende vrije dag en zeggen dat erbij. Alleen
    als er binnen de horizon niets vrij is blijft de stap dicht — dan valt er
    niets te kiezen en moet er gebeld worden.
  */
  const [shiftedDate, setShiftedDate] = useState<{ from: string; to: string } | null>(null);

  useEffect(() => {
    if (step !== 3 || loadingDates || datesError) return;
    if (!dateBlocked) return;
    if (!nextFreeDate) {
      // Niets vrij binnen de horizon: de stap blijft dicht en de klant moet bellen.
      reportBookingEvent({
        code: "wizard_geen_vrije_datum",
        config,
        options,
        start: startDate,
        blocked: blockedDates.length,
      });
      return;
    }
    reportBookingEvent({
      code: "wizard_datum_verschoven",
      config,
      options,
      start: startDate,
      blocked: blockedDates.length,
    });
    setShiftedDate({ from: startDate, to: nextFreeDate });
    setStartDate(nextFreeDate);
  }, [step, loadingDates, datesError, dateBlocked, nextFreeDate, startDate, config, options, blockedDates]);

  const sessionId = searchParams.get("session_id");
  const cancelled = searchParams.get("betaling") === "geannuleerd";

  /**
   * Haalt `session_id` en `betaling` uit de adresbalk zodra we ze verwerkt
   * hebben. Blijven ze staan, dan draait deze hele afhandeling opnieuw bij elke
   * refresh of terugknop — en een sessie die intussen vervallen is, of die uit
   * een andere Stripe-omgeving komt, zet de bezoeker dan telkens weer op de
   * gegevensstap met een foutmelding die nergens meer op slaat.
   */
  const clearReturnParams = useCallback(() => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        next.delete("session_id");
        next.delete("betaling");
        return next;
      },
      { replace: true }
    );
  }, [setSearchParams]);

  // Terug van Stripe: pas de bevestiging tonen als Stripe zegt dat er betaald is.
  useEffect(() => {
    if (!sessionId) {
      if (cancelled) {
        setStep(4);
        setPayError(t.geannuleerd);
        clearReturnParams();
      }
      return;
    }
    let active = true;
    fetch(`/api/checkout-session?id=${encodeURIComponent(sessionId)}`)
      .then((r) => r.json())
      .then((data: { paid?: boolean; reference?: string; order?: OrderSummary; error?: string }) => {
        if (!active) return;
        if (data.paid && data.reference) {
          setReference(data.reference);
          setOrdered(data.order ?? null);
          setStep(STEP_DONE);
          sessionStorage.removeItem(STORAGE_KEY);
        } else {
          /*
            De reden van Stripe hoort in de console, niet op het scherm: "Sessie
            niet gevonden" zegt een klant niets en klinkt alsof zijn boeking weg
            is, terwijl zijn keuzes gewoon klaarstaan. Dit overkomt onder meer
            wie een oude boekings-URL uit zijn geschiedenis opent.
          */
          if (data.error) console.warn(`[boeking] betaalstatus: ${data.error}`);
          setStep(4);
          setPayError(t.nietTeruggevonden);
        }
        clearReturnParams();
      })
      .catch(() => {
        if (!active) return;
        setStep(4);
        setPayError(t.statusNietOpgehaald);
        clearReturnParams();
      });
    return () => {
      active = false;
    };
    // Zie hierboven: `t` hoort bij de URL.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId, cancelled, clearReturnParams]);

  /**
   * De sessie is niet meer bruikbaar om naar terug te keren — de server kan haar
   * bij deze poging al hebben laten vervallen. Het ID blijft wel staan, zodat een
   * volgende poging de bijbehorende hold alsnog kan laten opruimen.
   */
  const staleSession = () =>
    setSession((prev) => (prev ? { ...prev, clientSecret: "", fingerprint: "" } : null));

  /**
   * Stuurt de volledige configuratie door als transportofferte.
   *
   * Hetzelfde payload-formaat als `payAndConfirm`, zodat de route de huurprijs
   * met dezelfde functies kan herrekenen als de checkout. Wat de browser als
   * bedrag meestuurt telt ook hier nergens mee.
   */
  const vraagOfferte = async () => {
    setPaying(true);
    setPayError("");
    try {
      const response = await fetch("/api/transport-offerte", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          config: Object.fromEntries(new URLSearchParams(configToQuery(config))),
          options,
          customer: { ...customer, type: customerType },
          delivery: { date: startDate, slot },
          page_url: typeof window === "undefined" ? "" : window.location.href,
          website: "",
        }),
      });
      const data = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || !data.ok) {
        setPayError(data.error ?? "Verzenden lukte niet. Probeer het opnieuw of bel 03 689 90 65.");
        return;
      }
      setOfferteVerstuurd(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setPayError(
        "Wij konden uw aanvraag niet versturen. Controleer uw verbinding, of bel ons op 03 689 90 65.",
      );
    } finally {
      setPaying(false);
    }
  };

  /** Maakt een Stripe-sessie aan en toont het betaalformulier in stap 5. */
  const payAndConfirm = async () => {
    setPaying(true);
    setPayError("");
    const booking: StoredBooking = {
      options,
      customer,
      customerType,
      startDate,
      slot,
      sessionId: session?.id,
    };
    writeStored(booking);

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
        // `taal` bepaalt de taal van Stripe en de terugkeer-URL, nooit het
        // bedrag; hij zit bewust niet in de vingerafdruk van de boeking.
        body: JSON.stringify({ ...payload, previousSessionId: session?.id, taal }),
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
        /*
          Onthouden dat déze dag geweigerd is, los van de horizonlijst — die wordt
          bij het terugkeren naar stap 3 opnieuw opgehaald en zou de afwijzing
          anders meteen wegvegen. Zo ziet de bezoeker wél waarom hij terug is, en
          schuift de wizard hem naar de eerstvolgende vrije dag.
        */
        const geweigerd = data.blocked_start_dates?.length
          ? data.blocked_start_dates
          : [startDate];
        setRejectedDates((prev) => [...new Set([...prev, ...geweigerd])]);
        setPayError("");
        setPaying(false);
        staleSession();
        goTo(3);
        return;
      }
      if (!response.ok || !data.clientSecret || !data.publishableKey || !data.sessionId) {
        // Een 429 valt vóór de server de taal kent; die tekst vertalen we hier.
        setPayError(response.status === 429 ? t.teVeel : (data.error ?? t.nietGestart));
        setPaying(false);
        staleSession();
        return;
      }
      // Stripe.js pas hier binnenhalen: het is een externe bundel die niets
      // toevoegt zolang er geen betaalformulier op het scherm staat.
      const { loadStripe } = await import("@stripe/stripe-js");
      // `locale`: de velden en foutmeldingen van het formulier in de taal van de pagina.
      setStripeJs(loadStripe(data.publishableKey, { locale: taal }));
      setSession({ id: data.sessionId, clientSecret: data.clientSecret, fingerprint });
      // Meteen wegschrijven, niet pas bij een volgende poging: vanaf hier ligt er
      // een hold, en na de omweg langs Stripe is dit ID de enige weg om die weer
      // los te krijgen.
      writeStored({ ...booking, sessionId: data.sessionId });
      setPaying(false);
      goTo(STEP_PAY);
    } catch {
      setPayError(t.geenVerbinding);
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
      <PageMeta {...seo} path={lp("/verhuur/boeking")} />
      <V3Header lightAfter={-1} />

      <div className="rail">
        <div className="rwrap">
          {/* Tijdens de controle staat de balk vol: er valt niets meer te doen. */}
          <i
            style={{
              width: `${step === STEP_VERIFY ? 100 : Math.round((step / TOTAL_STEPS) * 100)}%`,
            }}
          />
        </div>
      </div>

      <section className="main">
        <div className="wrap mgrid">
          <div>
            {/* STAP 1 — waar leveren we, en welke dekking */}
            <div className={`pane${step === 1 ? " on" : ""}`}>
              {/*
                De postcode staat vóór de prijs, en niet pas bij de
                contactgegevens. Hij bepaalt de transportvergoeding én de dagen
                waarop we in die richting rijden, dus zonder hem is het totaal
                rechts onvolledig en de kalender in stap 3 te ruim.
              */}
              <div className="blk">
                <div className="blkh">
                  <h2>Waar wilt u de bouwdrogers geleverd?</h2>
                </div>
                <p className="bsub">
                  De huurprijs is overal dezelfde. Buiten onze eigen regio komt er een
                  transportvergoeding bij voor de rit heen en de ophaling terug.
                </p>
                <div id="stap1-plaats" />
                <LeverplaatsZoeker
                  waarde={leverplaats}
                  land={customer.land}
                  onLand={kiesLand}
                  onKies={kiesLeverplaats}
                />
                {toonStap1Fouten && !leverzone && (
                  <p className="stap1fout" role="alert">
                    {t.mistPlaats}
                  </p>
                )}

                {customer.post.length === 4 && leverzone && leverbaar && (
                  <div className="pcz ja">
                    <span className="pczd" />
                    <div>
                      <b>
                        {leverzone.zone.tarief === 0
                          ? "Gratis levering*"
                          : "Levering met transportvergoeding"}
                      </b>
                      <small>
                        {leverzone.zone.tarief === 0
                          ? "Levering, plaatsing en ophaling zijn inbegrepen. U kiest zelf uw leverdag in de agenda."
                          : "Plaatsing en ophaling blijven inbegrepen. Voor de rit heen en de ophaling terug komt er één vaste vergoeding bij. U kiest zelf uw leverdag in de agenda."}
                      </small>
                      {/*
                        Het bedrag incl. btw staat vooraan en niet als voetnoot.
                        De catalogus rekent excl. btw, maar wie hier zijn postcode
                        intypt wil weten wat hij betaalt — en voor een particulier
                        scheelt dat 21%.
                      */}
                      <span className="pczp">
                        {leverzone.zone.tarief === 0 ? (
                          <>
                            Levering, plaatsing en ophaling <b>inbegrepen</b>
                            <span className="pcznoot">{GRATIS_LEVERING_VOETNOOT}</span>
                          </>
                        ) : (
                          <>
                            Transportvergoeding <b>{euro(withVat(leverzone.zone.tarief ?? 0))}</b>{" "}
                            incl. btw <span className="excl">({euro(leverzone.zone.tarief ?? 0)}{" "}
                            excl. btw)</span> — levering en ophaling samen
                          </>
                        )}
                      </span>
                    </div>
                  </div>
                )}

                {/*
                  Boven 200 km rijden we niet zelf: een kostendekkend tarief landt
                  daar rond € 400 en dat verkoopt niemand. Het afhaalpunt is daar
                  het eerlijke aanbod, dus dat zegt dit blok ook.
                */}
                {customer.post.length === 4 && offerte && leverzone && (
                  <div className="pcz offerte">
                    <span className="pczd" />
                    <div>
                      <b>Levering met transportprijs op maat</b>
                      <small>
                        Plaatsing en ophaling blijven inbegrepen. De vervoerskost naar postcode{" "}
                        {leverzone.postcode} maken wij per order: zo ver loopt ze te veel uiteen voor
                        één vast bedrag.
                      </small>
                      <span className="pczp">
                        <b>Stel uw pakket gewoon verder samen.</b> U ziet de volledige huurprijs; het
                        transport staat er apart bij. Op het einde laat u uw gegevens achter en
                        bezorgen wij u binnen één werkdag een vaste prijs. Afhalen in Aartselaar kan
                        ook — <Link to="/verhuur/afhalen">bekijk de afhaalprijzen</Link>.
                      </span>
                    </div>
                  </div>
                )}

                {customer.post.length === 4 && !leverzone && (
                  <div className="pcz nee">
                    <span className="pczd" />
                    <div>
                      <b>Deze postcode kennen wij niet</b>
                      <small>
                        Controleer of het land klopt — een Belgische en een Nederlandse postcode van
                        vier cijfers kunnen op elkaar lijken.
                      </small>
                    </div>
                  </div>
                )}
              </div>

              <div className="blk">
                <div className="blkh">
                  <h2>{t.dekkingKop}</h2>
                </div>
                <p className="bsub">{t.dekkingSub}</p>
                <div className="cvs">
                  {cover_.map((c) => (
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
                      <div className="cvp">{c.price ? eur(c.price) : t.inbegrepen}</div>
                      <div className="cvd">{c.price ? t.eenmalig : t.inPakketprijs}</div>
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
                      {/*
                        De knop koos vroeger alleen de dekking en bleef dan staan
                        — op mobiel stond "Verder naar extra's" pas ná de drie
                        kaarten én de samenvatting, dus wie op "Selecteer" duwde
                        zag "Gekozen" verschijnen en dacht dat de wizard vastzat.
                        De knop kiest nu én schuift meteen door naar stap 2; het
                        kaartlichaam blijft louter selecteren, zodat vergelijken kan.
                      */}
                      <button
                        className="cvpick"
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCover(c.k);
                          naarStap2();
                        }}
                      >
                        {c.k === cover ? t.gekozen : t.selecteer}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="fnav">
                <Link className="btn btn-o" to={lp(`/verhuur/pakket?${configToQuery(config)}${extraNaarQuery(dev)}`)}>
                  {t.terugNaarPakket}
                </Link>
                <button className="btn btn-d" type="button" onClick={() => naarStap2()}>
                  {t.verderExtras}
                  <ArrowRightIcon />
                </button>
              </div>
            </div>

            {/* STAP 2 — extra's */}
            <div className={`pane${step === 2 ? " on" : ""}`}>
              <div className="blk">
                <div className="blkh">
                  <h2>{t.extrasKop}</h2>
                </div>
                <p className="bsub">{t.extrasSub}</p>

                <div className="inc-row">
                  <span className="exi">
                    <DropIcon />
                  </span>
                  <span className="ext">
                    <b className="ext-naam">
                      {t.vochtmetingKop}
                      <OptieInfo
                        knopLabel={t.infoKnop(t.vochtmetingKop)}
                        titel={t.optieInfo.vochtmeting.titel}
                        foto="/vernast/dienst-vochtmeting-voorbeeld.webp"
                        fotoAlt={t.optieInfo.vochtmeting.alt}
                        sluiten={t.fotoSluiten}
                      >
                        {t.optieInfo.vochtmeting.tekst}
                      </OptieInfo>
                    </b>
                    <small>{t.vochtmetingSub}</small>
                  </span>
                  <span className="inc-tag">{t.inbegrepenTag}</span>
                </div>

                <div>
                  {extras_.map((x) => {
                    const Icon = EXTRA_ICONS[x.k];
                    return (
                      <div className="ex" key={x.k}>
                        <span className="exi">{Icon && <Icon />}</span>
                        <span className="ext">
                          <b className="ext-naam">
                            {x.name}
                            {EXTRA_INFO[x.k] && (
                              <OptieInfo
                                knopLabel={t.infoKnop(x.name)}
                                titel={t.optieInfo[EXTRA_INFO[x.k].sleutel].titel}
                                foto={EXTRA_INFO[x.k].foto}
                                fotoAlt={t.optieInfo[EXTRA_INFO[x.k].sleutel].alt}
                                sluiten={t.fotoSluiten}
                              >
                                {t.optieInfo[EXTRA_INFO[x.k].sleutel].tekst}
                              </OptieInfo>
                            )}
                          </b>
                          <small>{x.sub}</small>
                        </span>
                        <span className="exp">
                          {eur(x.price)}
                          <small>{x.unit}</small>
                        </span>
                        <button
                          type="button"
                          className={`exadd${extras[x.k] ? " on" : ""}`}
                          onClick={() => setExtras((p) => ({ ...p, [x.k]: !p[x.k] }))}
                        >
                          {extras[x.k] ? t.toegevoegd : t.toevoegen}
                        </button>
                      </div>
                    );
                  })}

                  <div className="ex" style={{ opacity: 0.72 }}>
                    <span className="exi">
                      <PulseIcon />
                    </span>
                    <span className="ext">
                      <b className="ext-naam">
                        {t.monitoringKop}<span className="soon-tag">{t.binnenkort}</span>
                        <OptieInfo
                          knopLabel={t.infoKnop(t.monitoringKop)}
                          titel={t.optieInfo.monitoring.titel}
                          foto="/vernast/koppel-digitaal.webp"
                          fotoAlt={t.optieInfo.monitoring.alt}
                          sluiten={t.fotoSluiten}
                        >
                          {t.optieInfo.monitoring.tekst}
                        </OptieInfo>
                      </b>
                      <small>{t.monitoringSub}</small>
                    </span>
                    <button
                      type="button"
                      className="exadd"
                      disabled
                      style={{ opacity: 0.5, cursor: "default" }}
                    >
                      {t.binnenkort}
                    </button>
                  </div>
                </div>
              </div>

              <div className="blk">
                <div className="blkh">
                  <h2>{t.pompKop}</h2>
                </div>
                <p className="bsub">{t.pompSub}</p>
                {/*
                  Het aantal is het aantal bouwdrogers uit het pakket, vooraf
                  ingevuld. "Condenspomp per bouwdroger" als productnaam liet
                  de bezoeker rekenen; hier ziet hij gewoon "4 van de 4".
                */}
                <div>
                  <div className="ex">
                    <span className="exi foto">
                      <img src="/vernast/condenspomp-product-v2.webp" alt="" loading="lazy" decoding="async" />
                    </span>
                    <span className="ext">
                      <b className="ext-naam">
                        {t.pompNaam}
                        <OptieInfo
                          knopLabel={t.pompInfoKnop}
                          titel={t.pompInfoTitel}
                          foto="/vernast/condenspomp-slangopstelling.webp"
                          fotoAlt={t.pompFotoAlt}
                          sluiten={t.fotoSluiten}
                          link={{ to: lp("/verhuur/toebehoren/condenspomp"), tekst: t.pompMeerLink }}
                        >
                          {t.pompInfo}
                        </OptieInfo>
                      </b>
                      <small>
                        {pumpCount > 0 ? t.pompAantal(pumpCount, dryerCount) : t.pompUit(dryerCount)}
                      </small>
                    </span>
                    <span className="exp">
                      {eur(PUMP.price)}
                      <small>{t.perPompDag}</small>
                    </span>
                    {/*
                      Eén knop zoals bij de andere extra's, geen teller: een pomp
                      hoort bij elke bouwdroger, dus "Toevoegen" zet ze op alle
                      bouwdrogers uit het pakket en toont meteen hoeveel.
                    */}
                    <button
                      type="button"
                      className={`exadd${pumpCount > 0 ? " on" : ""}`}
                      aria-pressed={pumpCount > 0}
                      onClick={() => setPumps(pumpCount > 0 ? 0 : dryerCount)}
                    >
                      {pumpCount > 0 ? t.pompToegevoegd(pumpCount) : t.toevoegen}
                    </button>
                  </div>
                </div>
              </div>

              <div className="blk">
                <div className="blkh">
                  <h2>{t.verdiepingKop}</h2>
                </div>
                <p className="bsub">{t.verdiepingSub(ladderFee)}</p>
                <div className="ex" style={{ borderBottom: 0 }}>
                  <span className="exi">
                    <StairsIcon />
                  </span>
                  <span className="ext">
                    <b>{t.verdiepingenKop}</b>
                    <small>{t.verdiepingenSub}</small>
                  </span>
                  <span className="stp">
                    <button
                      type="button"
                      aria-label={t.verdiepingMinder}
                      onClick={() => setFloors((f) => Math.max(0, f - 1))}
                    >
                      −
                    </button>
                    <span>{floors}</span>
                    <button
                      type="button"
                      aria-label={t.verdiepingMeer}
                      onClick={() => setFloors((f) => Math.min(MAX_FLOORS, f + 1))}
                    >
                      +
                    </button>
                  </span>
                </div>
                {floors > 0 && (
                  <div style={{ padding: "2px 0 10px 51px" }}>
                    <div style={{ fontSize: 13.5, fontWeight: 600, marginBottom: 9 }}>
                      {t.hoeBoven}
                    </div>
                    <div style={{ display: "flex", gap: 9, flexWrap: "wrap" }}>
                      <button
                        type="button"
                        className={`acc${access === "trap" ? " on" : ""}`}
                        onClick={() => setAccess("trap")}
                      >
                        {t.viaTrap} <small>{t.inbegrepen}</small>
                      </button>
                      <button
                        type="button"
                        className={`acc${access === "ladder" ? " on" : ""}`}
                        onClick={() => setAccess("ladder")}
                      >
                        {t.viaLadder} <small>{t.ladderEenmalig(ladderFee)}</small>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="blk">
                <div className="blkh">
                  <h2>{t.extraToestellenKop}</h2>
                </div>
                <p className="bsub">{t.extraToestellenSub}</p>
                <div>
                  {DEVICE_KEYS.map((k) => (
                    <div className="ex" key={k}>
                      <span className="exi">
                        <img src={cat_[k].img} alt={cat_[k].name} loading="lazy" decoding="async" />
                      </span>
                      <span className="ext">
                        <b>{cat_[k].name}</b>
                        <small>{cat_[k].sub}</small>
                      </span>
                      <span className="exp">
                        {eur(CAT[k].w2)}
                        <small>{t.per2Weken}</small>
                      </span>
                      <span className="stp">
                        <button type="button" aria-label={t.eenMinder} onClick={() => bump(k, -1)}>
                          −
                        </button>
                        <span>{dev[k]}</span>
                        <button type="button" aria-label={t.eenMeer} onClick={() => bump(k, 1)}>
                          +
                        </button>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="fnav">
                <button className="btn btn-o" type="button" onClick={() => goTo(1)}>
                  {t.terug}
                </button>
                <button className="btn btn-d" type="button" onClick={() => goTo(3)}>
                  {t.verderDatum}
                  <ArrowRightIcon />
                </button>
              </div>
            </div>

            {/* STAP 3 — levering en datum */}
            <div className={`pane${step === 3 ? " on" : ""}`}>
              <div className="blk">
                <div className="blkh">
                  <h2>{t.leveringKop}</h2>
                </div>
                <p className="bsub">{t.leveringSub(lp)}</p>
                <div className="dopt">
                  {delivery_.map((d) => (
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
                  <h2>{t.leverdatumKop}</h2>
                </div>
                <p className="bsub">{t.leverdatumSub}</p>
                <LeverKalender
                  waarde={startDate}
                  onKies={setStartDate}
                  vanaf={today}
                  huurDagen={rentalDays}
                  isVol={(iso) => !datumKan(iso)}
                />
                <div className="frow two" style={{ marginTop: 18 }}>
                  <div className="fld">
                    <label htmlFor="dSlot">{t.tijdslotLevering}</label>
                    <select id="dSlot" value={slot} onChange={(e) => setSlot(e.target.value)}>
                      {SLOTS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/*
                    Geen invoerveld: de huurtermijn volgt uit het pakket. Een
                    readonly-input zag eruit als iets wat je kon aanpassen, kreeg
                    een cursor bij een klik en kapte de tekst af.
                  */}
                  <div className="fld">
                    <span className="fldl" id="dWeeks">{t.huurperiodeVast}</span>
                    <div className="vast" aria-labelledby="dWeeks">
                      <b>{t.huurperiodeDagen(rentalDays)}</b>
                      <small>{t.huurperiodeInbegrepen}</small>
                    </div>
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
                      {/*
                        Alleen zeggen dat er niets vrijkomt wanneer we dat ook echt
                        nagekeken hebben (`withinHorizon`). Buiten de horizon van
                        `api/availability` weten we het niet, en dan is "er komt
                        niets vrij" gewoon onwaar — zeker voor een datum een jaar verderop.
                      */}
                      {t.datumVol(start ? datumLang(start) : startDate, withinHorizon, AVAILABILITY_HORIZON_DAYS)}
                    </div>
                  </div>
                )}

                {!dateBlocked && shiftedDate && shiftedDate.to === startDate && (
                  <div className="plan pw" role="status">
                    <WarnIcon />
                    <div className="pt2">
                      {t.datumVerschoven(
                        datumLang(new Date(shiftedDate.from)),
                        datumLang(new Date(shiftedDate.to)),
                      )}
                    </div>
                  </div>
                )}

                {start && end && !dateBlocked && (
                  <div className="plan">
                    <CalendarCheckIcon />
                    <div className="pt2">
                      {t.planning({
                        start: datumLang(start),
                        slot,
                        dagen: rentalDays,
                        einde: datumLang(end),
                        droogtijd: days,
                      })}
                      {tooShort && (
                        <span className="pw">
                          <WarnIcon />
                          {t.teKort}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/*
                  De ophaaldag kiest de klant niet: hij volgt uit de leverdag en
                  de huurtermijn van het pakket. Een vaste weergave, geen
                  readonly-datumveld dat een kalender opende die niets deed.
                */}
                <div className="frow two" style={{ marginTop: 16 }}>
                  <div className="fld">
                    <span className="fldl" id="dEnd">{t.ophaaldatum}</span>
                    <div className="vast" aria-labelledby="dEnd">
                      <b>{end ? datumLang(end) : "—"}</b>
                      <small>{t.ophaalNa(rentalDays)}</small>
                    </div>
                  </div>
                  <div className="fld">
                    <span className="fldl" id="dEndSlot">{t.tijdslotOphaling}</span>
                    <div className="vast" aria-labelledby="dEndSlot">
                      <b>{slot}</b>
                      <small>{t.zelfdeSlot}</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="fnav">
                <button className="btn btn-o" type="button" onClick={() => goTo(2)}>
                  {t.terug}
                </button>
                <button
                  className="btn btn-d"
                  type="button"
                  disabled={nextBlocked !== null}
                  onClick={() => goTo(4)}
                >
                  {nextBlocked === "laden" ? t.beschikbaarheidLaden : t.verderGegevens}
                  <ArrowRightIcon />
                </button>
              </div>
            </div>

            {/* STAP 4 — gegevens, of de bevestiging van een transportofferte */}
            <div className={`pane${step === 4 ? " on" : ""}`}>
              {offerteVerstuurd && leverzone ? (
                /*
                  De aanvraag is binnen. Geen aparte stap hiervoor: die zou langs
                  de betaalstap moeten die voor deze bezoeker niet bestaat, en de
                  voortgangsbalk bovenaan zou dan een betaling beloven die er
                  niet komt.
                */
                <div className="blk">
                  <div className="blkh">
                    <h2>Uw aanvraag staat genoteerd</h2>
                  </div>
                  <p className="bsub">
                    Wij hebben uw volledige pakketsamenstelling ontvangen, samen met het werfadres in{" "}
                    <b>
                      {customer.post} {customer.city}
                    </b>
                    .
                  </p>
                  <div className="plan">
                    <CalendarCheckIcon />
                    <div className="pt2">
                      Een collega berekent de transportprijs voor{" "}
                      {leverzone.zone.band.toLowerCase()} en belt of mailt u{" "}
                      <b>binnen één werkdag</b> met een vaste prijs. De huurprijs van uw pakket ligt
                      al vast op <b>{euro(summary.grossTotal)} incl. btw</b> en verandert daar niet
                      door. Pas wanneer u de transportprijs aanvaardt, boeken wij de toestellen voor
                      u in — er is nu dus nog niets vastgelegd op{" "}
                      {start ? formatLongDate(start) : "uw gekozen datum"}.
                    </div>
                  </div>
                  <div className="plan">
                    <TruckIcon />
                    <div className="pt2">
                      Liever meteen weg? U kunt de toestellen ook zelf afhalen in Aartselaar, aan de
                      lagere afhaalprijs en zonder vervoerskost —{" "}
                      <Link to="/verhuur/afhalen" style={{ fontWeight: 600 }}>
                        bekijk afhalen
                      </Link>
                      . Vragen in tussentijd:{" "}
                      <a href={`tel:${CONTACT.phoneE164}`} style={{ fontWeight: 600 }}>
                        {CONTACT.phoneLocal}
                      </a>
                      .
                    </div>
                  </div>
                </div>
              ) : (
                <>
              <div className="blk">
                <div className="blkh">
                  <h2>{t.gegevensKop}</h2>
                </div>
                <p className="bsub">{t.gegevensSub}</p>

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
                    <label htmlFor="fName">{t.naam}</label>
                    <input
                      type="text"
                      id="fName"
                      placeholder={t.naamPlaceholder}
                      value={customer.name}
                      onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                    />
                  </div>
                  <div className="fld">
                    <label htmlFor="fTel">{t.telefoon}</label>
                    <input
                      type="tel"
                      id="fTel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="0470 00 00 00"
                      value={customer.tel}
                      onChange={(e) => setCustomer({ ...customer, tel: maskPhone(e.target.value) })}
                    />
                  </div>
                </div>

                <div className="frow two" style={{ marginTop: 14 }}>
                  <div className="fld" style={{ gridColumn: "span 2" }}>
                    <label htmlFor="fMail">{t.email}</label>
                    <input
                      type="email"
                      id="fMail"
                      inputMode="email"
                      autoComplete="email"
                      autoCapitalize="none"
                      spellCheck={false}
                      placeholder={t.emailPlaceholder}
                      value={customer.mail}
                      onChange={(e) => setCustomer({ ...customer, mail: maskEmail(e.target.value) })}
                    />
                  </div>
                </div>

                {customerType === "pro" && (
                  <div className="frow two" style={{ marginTop: 14 }}>
                    <div className="fld">
                      <label htmlFor="fComp">{t.bedrijfsnaam}</label>
                      <input
                        type="text"
                        id="fComp"
                        placeholder={t.bedrijfPlaceholder}
                        value={customer.company}
                        onChange={(e) => setCustomer({ ...customer, company: e.target.value })}
                      />
                    </div>
                    <div className="fld">
                      <label htmlFor="fBtw">{t.btwNummer}</label>
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
                  <div className="fld" style={{ gridColumn: "span 3" }}>
                    <label htmlFor="fAddr">{t.adresWerf}</label>
                    <input
                      type="text"
                      id="fAddr"
                      placeholder={t.adresPlaceholder}
                      value={customer.addr}
                      onChange={(e) => setCustomer({ ...customer, addr: e.target.value })}
                    />
                  </div>
                </div>
                <div className="frow" style={{ marginTop: 14 }}>
                  <div className="fld">
                    <label htmlFor="fPost">{t.postcode}</label>
                    <input
                      type="text"
                      id="fPost"
                      inputMode="numeric"
                      placeholder={t.postcodePlaceholder}
                      maxLength={4}
                      value={customer.post}
                      onChange={(e) =>
                        setCustomer({ ...customer, post: e.target.value.replace(/\D/g, "") })
                      }
                    />
                  </div>
                  <div className="fld" style={{ gridColumn: "span 2" }}>
                    <label htmlFor="fCity">{t.gemeente}</label>
                    <input
                      type="text"
                      id="fCity"
                      placeholder={t.gemeentePlaceholder}
                      value={customer.city}
                      onChange={(e) => setCustomer({ ...customer, city: e.target.value })}
                    />
                  </div>
                </div>

                {/*
                  Geen betaalkeuze bij een offerte: er wordt nu niets afgerekend,
                  en "5% korting bij online betalen" naast een knop die een
                  aanvraag verstuurt belooft iets wat deze stap niet doet. De
                  keuze komt terug zodra de transportprijs aanvaard is.
                */}
                <div className="blkh" style={{ marginTop: 24, display: offerte ? "none" : undefined }}>
                  <h2>{t.betalenKop}</h2>
                </div>
                <div className="payopts" style={offerte ? { display: "none" } : undefined}>
                  <button
                    type="button"
                    className={`payopt${payment === "online" ? " sel" : ""}`}
                    onClick={() => setPayment("online")}
                  >
                    <span className="pob">{t.korting}</span>
                    <b>{t.volledigOnline}</b>
                    <span>{t.volledigOnlineUitleg}</span>
                    {/*
                      Het bedrag uit de samenvatting, niet hier opnieuw 5% van het
                      totaal. Sinds de transportvergoeding in dat totaal zit — en
                      daar géén korting op gaat — liep een eigen berekening hier
                      een paar euro voor op wat de klant werkelijk bespaart.
                    */}
                    <span className="pos">
                      {t.uBespaart(
                        eur(withVat(Math.round(summary.total - summary.transport) * ONLINE_DISCOUNT))
                      )}
                    </span>
                  </button>
                  <button
                    type="button"
                    className={`payopt${payment === "levering" ? " sel" : ""}`}
                    onClick={() => setPayment("levering")}
                  >
                    <b>{t.voorschotKop(eur(DEPOSIT_GROSS))}</b>
                    {/* De QR is de weg naar het betaalscherm, geen betaalwijze:
                        daar staan dezelfde knoppen als hier. */}
                    <span>{t.voorschotUitleg(eur(DEPOSIT_GROSS))}</span>
                    <span className="pos">{t.factuurNaBetaling}</span>
                  </button>
                </div>

                <label className="cok">
                  <input
                    type="checkbox"
                    checked={customer.ok}
                    onChange={(e) => setCustomer({ ...customer, ok: e.target.checked })}
                  />{" "}
                  <span>{t.akkoord}</span>
                </label>

                {/*
                  Waarom de betaalknop dicht blijft. Een uitgeschakelde knop
                  zonder uitleg is de snelste manier om een boeking kwijt te
                  spelen; het ontbrekende of onleverbare adres staat in stap 1.
                */}
                {/*
                  Waarom de knop dicht blijft. Een uitgeschakelde knop zonder
                  uitleg is de snelste manier om een boeking kwijt te spelen.
                */}
                {!leverbaar && !offerte && (
                  <p className="perr">
                    Vul eerst de postcode van de werf in bij stap 1, die bepaalt de
                    transportvergoeding.
                  </p>
                )}

                {/*
                  De offertezone: geen betaalknop maar een aanvraag. Alles wat
                  hieronder verstuurd wordt heeft de bezoeker al ingevuld — hij
                  hoeft niets over te typen in een los contactformulier.
                */}
                {offerte && leverzone && !offerteVerstuurd && (
                  <div className="offbox">
                    <b>Transportprijs op maat</b>
                    <p>
                      Uw werf ligt {leverzone.zone.band.toLowerCase()} van ons magazijn. Het pakket
                      hierboven — <b>{euro(summary.grossTotal)} incl. btw</b> — staat vast; het
                      transport berekenen wij apart en bevestigen we binnen één werkdag. Wij sturen
                      uw volledige samenstelling mee, u hoeft niets opnieuw in te vullen.
                    </p>
                  </div>
                )}

                {payError && <p className="perr">{payError}</p>}
              </div>
              <div className="fnav">
                <button className="btn btn-o" type="button" onClick={() => goTo(3)}>
                  {t.terug}
                </button>
                {offerte ? (
                  <button
                    className="btn btn-r"
                    type="button"
                    disabled={
                      !isComplete(customer, customerType, true) || paying || offerteVerstuurd
                    }
                    onClick={vraagOfferte}
                  >
                    {offerteVerstuurd
                      ? t.offerteVerstuurd
                      : paying
                        ? t.offerteVersturen
                        : t.offerteVraag}
                    <ArrowRightIcon />
                  </button>
                ) : (
                  <button
                    className="btn btn-r"
                    type="button"
                    disabled={!isComplete(customer, customerType, leverbaar) || paying}
                    onClick={payAndConfirm}
                  >
                    {paying ? t.voorbereiden : t.naarBetaling(eur(summary.payableGross))}
                    <ArrowRightIcon />
                  </button>
                )}
              </div>
                </>
              )}
            </div>

            {/* STAP 5 — betaling, formulier van Stripe binnen onze eigen pagina */}
            <div className={`pane${step === STEP_PAY ? " on" : ""}`}>
              <div className="blk">
                <div className="blkh">
                  <h2>{t.betaalKop}</h2>
                </div>
                <p className="bsub">{t.betaalSub(eur(summary.payableGross))}</p>

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
                      <BoekingBetaalformulier bedrag={eur(summary.payableGross)} />
                    </CheckoutElementsProvider>
                  )}
                </div>

                <p className="paynote">
                  <CheckIcon size={13} strokeWidth={3} />
                  {/* De tekst hoort in één span: los in de flexbox wordt elk
                      stukje een eigen kolom zodra de ruimte krap wordt. */}
                  <span>{t.vastgelegd(start ? datumLang(start) : "", slot)}</span>
                </p>
              </div>
              <div className="fnav">
                <button className="btn btn-o" type="button" onClick={cancelPayment}>
                  {t.terugGegevens}
                </button>
              </div>
            </div>

            {/* STAP 6 — bevestiging */}
            {/*
              De tussenstand tussen betalen en bevestigd. Ze duurt zolang de
              navraag bij Stripe duurt — meestal een fractie van een seconde —
              maar ze moet iets zeggen, want de bezoeker heeft net geld
              overgemaakt en kijkt naar een scherm dat nog niets bevestigt.
            */}
            <div className={`pane${step === STEP_VERIFY ? " on" : ""}`}>
              <div className="done">
                <h2>{t.geduldKop}</h2>
                <p>{t.geduldSub}</p>
              </div>
            </div>

            <div className={`pane${step === STEP_DONE ? " on" : ""}`}>
              <div className="done">
                <div className="dic">
                  <CheckIcon size={30} strokeWidth={2.6} />
                </div>
                <h2>{t.vastKop}</h2>
                <p>{t.vastSub(eur(DEPOSIT_GROSS))}</p>
                <div className="dref">
                  <span>{t.referentie}</span>
                  <span>{reference}</span>
                </div>

                {/*
                  Wat er geleverd wordt, uit de betaalde sessie. De knop in de
                  bevestigingsmail brengt de klant hier dagen later terug; zonder
                  dit blok stond er alleen een referentie en moest hij de mail er
                  weer bij zoeken om te zien hoeveel drogers er komen.
                */}
                {ordered && (
                  <div className="dord">
                    {ordered.package && <h3>{ordered.package}</h3>}

                    {ordered.devices.length > 0 && (
                      <ul>
                        {ordered.devices.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    )}

                    <dl>
                      {ordered.deliveryDate && (
                        <>
                          <dt>{t.levering}</dt>
                          <dd>
                            {longDate(ordered.deliveryDate, taal)}
                            {ordered.deliverySlot ? ` · ${ordered.deliverySlot}` : ""}
                          </dd>
                        </>
                      )}
                      {ordered.rentalStart && ordered.rentalEnd && (
                        <>
                          <dt>{t.huurperiode}</dt>
                          <dd>
                            {longDate(ordered.rentalStart, taal)} {t.tem} {longDate(ordered.rentalEnd, taal)}
                            {ordered.rentalDays ? ` · ${ordered.rentalDays} ${t.dagen}` : ""}
                          </dd>
                        </>
                      )}
                      {ordered.paid !== null && (
                        <>
                          <dt>{t.betaald}</dt>
                          <dd>{eur(ordered.paid)}</dd>
                        </>
                      )}
                      {/*
                        Enkel bij een orderbevestiging: wie alles online betaalde
                        heeft hier een nul staan, en "nog te betalen € 0,00" laat
                        een afgeronde boeking lezen als een openstaande rekening.
                      */}
                      {ordered.balance !== null && ordered.balance > 0 && (
                        <>
                          <dt>{t.nogTeBetalen}</dt>
                          <dd>{eur(ordered.balance)}</dd>
                        </>
                      )}
                    </dl>
                  </div>
                )}

                <div className="fnav" style={{ justifyContent: "center" }}>
                  <Link className="btn btn-o" to={lp(`/verhuur/pakket?${configToQuery(config)}${extraNaarQuery(dev)}`)}>
                    {t.terugNaarPakket}
                  </Link>
                  <Link className="btn btn-d" to={lp("/")}>
                    {t.naarHome}
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
                {/*
                  De banner draagt de tellingen en de toestellen in het beeld,
                  en is in deze smalle kolom nauwelijks te lezen. Een klik zet
                  hem op volle grootte.
                */}
                <button
                  type="button"
                  className="sh-zoom"
                  onClick={() => setFotoGroot(true)}
                  aria-label={t.fotoVergroten}
                >
                  <img
                    src={packageImage(config, allItems(config, dev))}
                    alt={t.uwDroogpakket}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="sh-zoom-i" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3M11 8v6M8 11h6" /></svg>
                  </span>
                </button>
                {/*
                  Via een portal op <body>: de samenvatting is sticky en maakt
                  een eigen stapelcontext, waardoor een fixed overlay erin onder
                  de header bleef hangen.
                */}
                {fotoGroot && createPortal(
                  <div
                    className="sh-groot"
                    role="dialog"
                    aria-modal="true"
                    aria-label={t.uwDroogpakket}
                    onClick={() => setFotoGroot(false)}
                  >
                    <img src={packageImage(config, allItems(config, dev))} alt={t.uwDroogpakket} />
                    <button
                      type="button"
                      className="sh-groot-x"
                      aria-label={t.fotoSluiten}
                      onClick={() => setFotoGroot(false)}
                      autoFocus
                    >
                      ×
                    </button>
                  </div>,
                  document.body,
                )}
              </div>
              <div className="st">
                <div className="sl">{t.uwPakket}</div>
                {/* `packageTitle` blijft Nederlands (Stripe-productnaam, portaal); in het
                    Frans tonen we dezelfde opsomming uit verhuur.fr.ts. */}
                <h3>{taal === "nl" ? packageTitle(config) : packageSpecLineInTaal(config, taal)}</h3>
              </div>
              <div className="sb">
                {/*
                  Deze regel ging over het plaatsen en afstellen, niet over de
                  rit — maar naast een transportregel las "Inbegrepen" als een
                  tegenspraak, en in een offertezone zelfs als een belofte. Nu
                  zegt ze wat er wél in zit.
                */}
                <div className="sline inc">
                  <span>
                    {offerte || summary.transport > 0 ? t.plaatsingRegel : t.leveringRegel}
                  </span>
                  <b>{t.inbegrepen}</b>
                </div>
                {/*
                  Eerst wat er in de pakketprijs zit, dan pas wat er bij komt.
                  Door elkaar las de lijst als een reeks losse kosten waarvan de
                  helft toevallig nul was; zo zien de twee groepen eruit als wat
                  ze zijn — de inhoud van het pakket, en de keuzes erbovenop.
                */}
                <div>
                  {rows
                    .filter((r) => r.inc)
                    .map((r) => (
                      <div className="sline inc" key={r.l}>
                        <span>{regelInTaal(r.l, taal)}</span>
                        <b>{t.inbegrepen}</b>
                      </div>
                    ))}
                  {/*
                    De toestellen komen ná het inbegrepene: eerst leest de
                    bezoeker wat er sowieso bij zit, dan pas wat er aangerekend
                    wordt. Daarvoor opende de lijst met het grootste bedrag en
                    las alles eronder als meerwerk.
                  */}
                  <div className="sline">
                    <span>{t.pakketRegel(summary.deviceCount, summary.weeks)}</span>
                    <b>{eur(base)}</b>
                  </div>
                  {rows
                    .filter((r) => !r.inc)
                    .map((r) => (
                      <div className="sline" key={r.l}>
                        <span>{regelInTaal(r.l, taal)}</span>
                        <b>{eur(r.v)}</b>
                      </div>
                    ))}
                  {/*
                    Zonder deze regel leest het totaal als de volledige prijs,
                    terwijl het transport er nog bij komt. Liever één regel te
                    veel dan een klant die zich achteraf bekocht voelt.
                  */}
                  {offerte && (
                    <div className="sline opmaat">
                      <span>{t.transportRegel(leverzone?.zone.band ?? "")}</span>
                      <b>{t.opMaat}</b>
                    </div>
                  )}
                </div>
                {/*
                  Zelfde volgorde als de bevestigingsmail: huurprijs, dan de
                  korting eraf, dan de btw over wat overblijft. Stond de korting
                  boven een subtotaal dat ze al bevatte, dan leek ze twee keer
                  afgetrokken.
                */}
                <div className="stot">
                  <div className="tl" style={{ fontSize: 13 }}>
                    <span className="tll" style={{ fontWeight: 400 }}>
                      {t.huurprijsExcl}
                    </span>
                    <span className="tlv" style={{ fontSize: 14 }}>{eur(total)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="tl" style={{ fontSize: 13 }}>
                      <span className="tll" style={{ fontWeight: 400 }}>
                        {t.kortingOnline}
                      </span>
                      <span className="tlv" style={{ fontSize: 14, color: "#2e9e5b" }}>
                        − {eur(discount)}
                      </span>
                    </div>
                  )}
                  <div className="tl" style={{ fontSize: 13 }}>
                    <span className="tll" style={{ fontWeight: 400 }}>
                      {t.btw}
                    </span>
                    <span className="tlv" style={{ fontSize: 14 }}>{eur(summary.vat)}</span>
                  </div>
                  {/*
                    Het brutobedrag is wat er effectief afgerekend wordt, dus dat
                    is het bedrag dat groot mag staan. Stond hier lang het bedrag
                    excl. btw, terwijl een particulier de prijs incl. btw hoort te
                    zien — en Stripe rekende datzelfde te lage bedrag af.
                  */}
                  <div className="tl totaal">
                    <span className="tll">{t.totaalIncl}</span>
                    <span className="tlv">{eur(summary.grossTotal)}</span>
                  </div>
                  {/*
                    Geen bedrag per week onder het totaal: een pakket huurt u
                    voor zijn vaste termijn, en een weekprijs naast het totaal
                    las als een tweede, lagere prijs.
                  */}
                  {offerte && (
                    <div className="vat opmaat">
                      Transport komt hier nog bij — wij bezorgen u binnen één werkdag een vaste prijs.
                    </div>
                  )}
                </div>
              </div>
              <div className="sf">
                {/*
                  Niet tijdens de controle na het betalen: een "Verder"-knop
                  naast een afgeronde betaling nodigt uit tot een tweede ronde
                  door de wizard.
                */}
                {step >= 1 && step < 4 && (
                  <button
                    className="btn btn-r"
                    type="button"
                    disabled={nextBlocked !== null}
                    onClick={() => (step === 1 ? naarStap2() : goTo(step + 1))}
                  >
                    {nextBlocked === "laden" ? t.beschikbaarheidLaden : t.volgende[step] ?? t.verder}
                  </button>
                )}
                {/* "Geen voorschot" stond hier naast een betaalstap die om
                    precies dat voorschot vraagt. */}
                <div className="note">{t.noot}</div>
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
