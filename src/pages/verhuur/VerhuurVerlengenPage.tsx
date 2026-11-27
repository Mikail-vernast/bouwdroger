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
import { useCopy, useLokaalPad, useTaal, type Copy } from "@/i18n/useTaal";
import { NUMBER_LOCALE } from "@/i18n/taal";
import "@/styles/verhuur.css";
import "@/styles/verhuur-fixes.css";

interface Huur {
  referentie: string;
  pakket: string;
  toestellen: string;
  /** Readable device line ("1× Boost"); set for pickup bookings. */
  machine?: string;
  /** Pickup booking: the customer brings the devices back himself. */
  afhaal?: boolean;
  huur_start: string;
  huur_eind: string;
  tijdslot: string;
  /** Het nummer uit de boeking; het formulier vult het alvast in. */
  telefoon: string;
}

/** Kort genoeg om niemand op te houden, lang genoeg om iets te zeggen. */
const MIN_TOELICHTING = 5;

/** De keuzes die de klant krijgt; in weken, want zo verhuren wij. */
const KEUZE_DAGEN = [7, 14, 21, 28];

interface Teksten {
  titel: string;
  beschrijving: string;
  keuzes: string[];
  toestel: Record<string, string>;
  ontbreektTel: string;
  ontbreektReden: string;
  missen: (lijst: string[]) => string;
  mislukt: string;
  teVeel: string;
  laden: string;
  onbekendKop: string;
  onbekendUitleg: string;
  /** Wat na het telefoonnummer komt. */
  onbekendSlot: string;
  terug: string;
  verstuurdKop: string;
  verstuurdUitleg: (telefoon: string, afhaal: boolean) => string;
  gevraagdTot: string;
  verlengKop: string;
  referentie: string;
  pakket: string;
  uwToestellen: string;
  bijUGeplaatst: string;
  terugbrengenGepland: string;
  ophalingGepland: string;
  hoeveelKop: string;
  tot: string;
  telLabel: string;
  redenLabel: string;
  redenPlaceholder: string;
  aanvraagUitleg: string;
  versturen: string;
  aanvragen: string;
}

const COPY = {
  nl: {
    titel: "Uw huur verlengen | Vernast",
    beschrijving: "Vraag aan om uw bouwdrogers langer te houden.",
    keuzes: ["1 week", "2 weken", "3 weken", "4 weken"],
    toestel: {
      small: "Small Bouwdroger",
      medium: "Medium Bouwdroger",
      axiaal: "Axiaalventilator",
      kachel: "Elektrische kachel",
    },
    ontbreektTel: "een telefoonnummer waarop wij u kunnen bereiken",
    ontbreektReden: "een korte reden waarom u wilt verlengen",
    missen: (lijst) => `Wij missen nog ${lijst.join(" en ")}.`,
    mislukt: "Versturen lukte niet. Bel ons gerust op 03 689 90 65.",
    teVeel: "Te veel aanvragen. Probeer het over een minuut opnieuw.",
    laden: "Even uw boeking ophalen…",
    onbekendKop: "Deze link werkt niet meer",
    onbekendUitleg:
      "Wij vinden geen lopende huur bij deze link. Gebruik de knop uit de mail die u twee dagen vóór het einde van uw huurperiode kreeg, of bel ons op ",
    onbekendSlot: ", dan regelen wij het telefonisch.",
    terug: "Terug naar de site",
    verstuurdKop: "Uw aanvraag staat genoteerd",
    verstuurdUitleg: (telefoon, afhaal) =>
      `Wij kijken na of de toestellen langer bij u kunnen blijven en bellen u binnen één werkdag terug op ${telefoon}. Zolang u niets gehoord heeft, blijft ${afhaal ? "het terugbrengen" : "de ophaling"} op de oorspronkelijke datum staan.`,
    gevraagdTot: "Gevraagd tot",
    verlengKop: "Uw huur verlengen",
    referentie: "Referentie",
    pakket: "Pakket",
    uwToestellen: "Uw toestellen",
    bijUGeplaatst: "Bij u geplaatst",
    terugbrengenGepland: "Terugbrengen nu gepland op",
    ophalingGepland: "Ophaling nu gepland op",
    hoeveelKop: "Hoeveel langer wilt u ze houden?",
    tot: "tot",
    telLabel: "Telefoonnummer waarop wij u kunnen bereiken",
    redenLabel: "Waarom wilt u verlengen?",
    redenPlaceholder: "Bijvoorbeeld: de chape is nog niet droog op de kelderverdieping.",
    aanvraagUitleg:
      "Dit is een aanvraag, nog geen bevestiging: wij kijken eerst na of de toestellen langer bij u kunnen blijven. U hoort binnen één werkdag van ons, en de extra dagen komen op uw volgende factuur. Uw toelichting helpt ons meteen inschatten of één week volstaat.",
    versturen: "Versturen…",
    aanvragen: "Verlenging aanvragen",
  },
  fr: {
    titel: "Prolonger votre location | Vernast",
    beschrijving: "Demandez à garder vos déshumidificateurs de chantier plus longtemps.",
    keuzes: ["1 semaine", "2 semaines", "3 semaines", "4 semaines"],
    toestel: {
      small: "Déshumidificateur de chantier Small",
      medium: "Déshumidificateur de chantier Medium",
      axiaal: "Ventilateur axial",
      kachel: "Chauffage électrique",
    },
    ontbreektTel: "un numéro de téléphone auquel nous pouvons vous joindre",
    ontbreektReden: "une brève raison pour laquelle vous souhaitez prolonger",
    missen: (lijst) => `Il nous manque encore ${lijst.join(" et ")}.`,
    mislukt: "L'envoi n'a pas abouti. N'hésitez pas à nous appeler au 03 689 90 65.",
    teVeel: "Trop de demandes. Réessayez dans une minute.",
    laden: "Récupération de votre réservation…",
    onbekendKop: "Ce lien ne fonctionne plus",
    onbekendUitleg:
      "Nous ne trouvons aucune location en cours liée à ce lien. Utilisez le bouton de l'e-mail reçu deux jours avant la fin de votre période de location, ou appelez-nous au ",
    onbekendSlot: " : nous réglons cela par téléphone.",
    terug: "Retour au site",
    verstuurdKop: "Votre demande est enregistrée",
    verstuurdUitleg: (telefoon, afhaal) =>
      `Nous vérifions si les appareils peuvent rester plus longtemps chez vous et vous rappelons dans un délai d'un jour ouvrable au ${telefoon}. Tant que vous n'avez pas de nouvelles de notre part, ${afhaal ? "le retour reste prévu" : "l'enlèvement reste prévu"} à la date initiale.`,
    gevraagdTot: "Demandé jusqu'au",
    verlengKop: "Prolonger votre location",
    referentie: "Référence",
    pakket: "Pack",
    uwToestellen: "Vos appareils",
    bijUGeplaatst: "Installés chez vous",
    terugbrengenGepland: "Retour actuellement prévu le",
    ophalingGepland: "Enlèvement actuellement prévu le",
    hoeveelKop: "Combien de temps en plus souhaitez-vous les garder ?",
    tot: "jusqu'au",
    telLabel: "Numéro de téléphone auquel nous pouvons vous joindre",
    redenLabel: "Pourquoi souhaitez-vous prolonger ?",
    redenPlaceholder: "Par exemple : la chape n'est pas encore sèche au sous-sol.",
    aanvraagUitleg:
      "Ceci est une demande, pas encore une confirmation : nous vérifions d'abord si les appareils peuvent rester plus longtemps chez vous. Vous aurez de nos nouvelles dans un délai d'un jour ouvrable, et les jours supplémentaires figureront sur votre prochaine facture. Votre explication nous aide à estimer tout de suite si une semaine suffit.",
    versturen: "Envoi…",
    aanvragen: "Demander une prolongation",
  },
  en: {
    titel: "Extend your rental | Vernast",
    beschrijving: "Request to keep your construction dehumidifiers for longer.",
    keuzes: ["1 week", "2 weeks", "3 weeks", "4 weeks"],
    toestel: {
      small: "Small construction dehumidifier",
      medium: "Medium construction dehumidifier",
      axiaal: "Axial fan",
      kachel: "Electric heater",
    },
    ontbreektTel: "a phone number we can reach you on",
    ontbreektReden: "a short reason why you would like to extend",
    missen: (lijst) => `We still need ${lijst.join(" and ")}.`,
    mislukt: "Sending failed. Feel free to call us on 03 689 90 65.",
    teVeel: "Too many requests. Please try again in a minute.",
    laden: "Fetching your booking…",
    onbekendKop: "This link no longer works",
    onbekendUitleg:
      "We cannot find a current rental for this link. Use the button in the email you received two days before the end of your rental period, or call us on ",
    onbekendSlot: " and we will sort it out by phone.",
    terug: "Back to the site",
    verstuurdKop: "Your request has been noted",
    verstuurdUitleg: (telefoon, afhaal) =>
      `We will check whether the units can stay with you for longer and call you back within one working day on ${telefoon}. Until you hear from us, ${afhaal ? "the return" : "the collection"} remains scheduled for the original date.`,
    gevraagdTot: "Requested until",
    verlengKop: "Extend your rental",
    referentie: "Reference",
    pakket: "Package",
    uwToestellen: "Your units",
    bijUGeplaatst: "Installed at your site",
    terugbrengenGepland: "Return currently scheduled for",
    ophalingGepland: "Collection currently scheduled for",
    hoeveelKop: "How much longer would you like to keep them?",
    tot: "until",
    telLabel: "Phone number we can reach you on",
    redenLabel: "Why would you like to extend?",
    redenPlaceholder: "For example: the screed in the basement is not dry yet.",
    aanvraagUitleg:
      "This is a request, not yet a confirmation: we first check whether the units can stay with you for longer. You will hear from us within one working day, and the extra days will appear on your next invoice. Your explanation helps us judge straight away whether one week is enough.",
    versturen: "Sending…",
    aanvragen: "Request an extension",
  },
} satisfies Copy<Teksten>;

type Status = "laden" | "klaar" | "onbekend" | "verstuurd";

const VerhuurVerlengenPage = () => {
  const [searchParams] = useSearchParams();
  const taal = useTaal();
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const langeDatum = (d: Date) =>
    taal === "nl"
      ? formatLongDate(d)
      : d.toLocaleDateString(NUMBER_LOCALE[taal], { weekday: "long", day: "numeric", month: "long" });
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
    if (huur?.machine) return huur.machine;
    // Product lines (pickup) have no device_key; never print "undefined".
    const lines = parseDeviceLines(huur?.toestellen).filter((l) => l.device_key);
    return lines.map((l) => `${l.qty}× ${t.toestel[l.device_key] ?? l.device_key}`).join(", ");
  }, [huur?.toestellen, huur?.machine, t]);

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
    Wat er nog ontbreekt, en niet of de knop aan mag. De toelichting telt mee:
    de planner moet weten waaróm er verlengd wordt, anders belt hij toch terug
    om precies dat te vragen.

    Zelfde keuze als op de afhaalpagina: de knop blijft klikbaar en zegt wat er
    mist. Een dode knop zonder uitleg laat wie alles ingevuld dacht te hebben
    tegen niets duwen.
  */
  const ontbreekt = [
    !isValidPhone(telefoon) && t.ontbreektTel,
    opmerking.trim().length < MIN_TOELICHTING && t.ontbreektReden,
  ].filter((item): item is string => Boolean(item));

  const verstuur = async (event: React.FormEvent) => {
    event.preventDefault();
    if (bezig) return;
    if (ontbreekt.length) {
      setFout(t.missen(ontbreekt));
      return;
    }

    setBezig(true);
    setFout("");

    try {
      const response = await fetch("/api/extension", {
        method: "POST",
        headers: { "content-type": "application/json" },
        // `taal`: een weigering komt terug in de taal van deze pagina.
        body: JSON.stringify({ sessionId, extraDagen: dagen, telefoon, opmerking, website, taal }),
      });
      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
        nieuw_einde?: string;
      };

      if (!response.ok) {
        // Een 429 valt vóór de server de taal kent; die tekst vertalen we hier.
        setFout(response.status === 429 ? t.teVeel : (data.error ?? t.mislukt));
        return;
      }

      setNieuwEinde(data.nieuw_einde ?? voorstel);
      setStatus("verstuurd");
    } catch {
      setFout(t.mislukt);
    } finally {
      setBezig(false);
    }
  };

  return (
    <div className="vh-book vh-ext">
      <PageMeta
        title={t.titel}
        description={t.beschrijving}
        noindex
      />
      {/*
        `lightAfter={-1}`, net als de andere verhuurpagina's: deze pagina heeft
        geen donkere hero, dus de nav-pil moet meteen in zijn lichte variant
        staan. De contactregel erboven blijft wit, maar krijgt in
        verhuur-fixes.css een eigen rode balk om op te staan.
      */}
      <V3Header lightAfter={-1} />

      {/*
        `main` en `wrap` zijn dezelfde bouwstenen als de boekingspagina, met de
        marge bovenaan die daar van de stappenbalk komt — zonder die ruimte
        schuift de vaste header over de inhoud heen. Die marge staat in
        verhuur-fixes.css, want onder 900px staat de header in de flow en moet
        ze juist weg.
      */}
      <section className="main">
        <div className="wrap" style={{ maxWidth: 760 }}>
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
                  <a href="tel:+3236899065">03 689 90 65</a>
                  {t.onbekendSlot}
                </p>
                <div className="fnav" style={{ marginTop: 20 }}>
                  <Link className="btn btn-o" to={lp("/verhuur/simulator")}>
                    {t.terug}
                  </Link>
                </div>
              </>
            )}

            {status === "verstuurd" && (
              <div className="done">
                <div className="dico">
                  <CheckIcon size={28} />
                </div>
                <h2>{t.verstuurdKop}</h2>
                <p>{t.verstuurdUitleg(telefoon, Boolean(huur?.afhaal))}</p>
                {nieuwEinde && (
                  <div className="dref">
                    <span>{t.gevraagdTot}</span>
                    <span>{langeDatum(new Date(nieuwEinde))}</span>
                  </div>
                )}
              </div>
            )}

            {status === "klaar" && huur && (
              <form onSubmit={verstuur}>
                <div className="blkh">
                  <h2>{t.verlengKop}</h2>
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
                    [t.referentie, huur.referentie],
                    [t.pakket, huur.pakket],
                    [huur.afhaal ? t.uwToestellen : t.bijUGeplaatst, toestellen],
                    [
                      huur.afhaal ? t.terugbrengenGepland : t.ophalingGepland,
                      huur.huur_eind ? langeDatum(new Date(huur.huur_eind)) : "",
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
                  <h2>{t.hoeveelKop}</h2>
                </div>
                <div className="payopts">
                  {KEUZE_DAGEN.map((keuzeDagen, i) => (
                    <button
                      key={keuzeDagen}
                      type="button"
                      className={`payopt${dagen === keuzeDagen ? " sel" : ""}`}
                      onClick={() => setDagen(keuzeDagen)}
                    >
                      <b>{t.keuzes[i]}</b>
                      <span>
                        {t.tot} {voorstel && langeDatum(new Date(isoDate(addDays(new Date(huur.huur_eind), keuzeDagen))))}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="frow" style={{ marginTop: 24 }}>
                  <div className="fld" style={{ gridColumn: "span 3" }}>
                    <label htmlFor="vTel">{t.telLabel}</label>
                    <input
                      type="tel"
                      id="vTel"
                      placeholder="0470 00 00 00"
                      value={telefoon}
                      onChange={(e) => {
                        setTelefoon(maskPhone(e.target.value));
                        setFout("");
                      }}
                    />
                  </div>
                </div>

                <div className="frow" style={{ marginTop: 14 }}>
                  <div className="fld" style={{ gridColumn: "span 3" }}>
                    <label htmlFor="vNote">{t.redenLabel}</label>
                    <textarea
                      id="vNote"
                      rows={3}
                      placeholder={t.redenPlaceholder}
                      value={opmerking}
                      onChange={(e) => {
                        setOpmerking(e.target.value);
                        setFout("");
                      }}
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
                  {t.aanvraagUitleg}
                </p>

                <div className="fnav" style={{ marginTop: 20 }}>
                  <button className="btn btn-r" type="submit" disabled={bezig}>
                    {bezig ? t.versturen : t.aanvragen}
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
