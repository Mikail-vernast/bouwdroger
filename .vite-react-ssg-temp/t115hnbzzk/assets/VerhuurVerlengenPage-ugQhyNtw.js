import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { P as PageMeta } from "./PageMeta-BXulEWcY.js";
import { l as V3Header } from "./V3Header-BeIMcMg7.js";
import { V as V3Footer } from "./V3Footer-9z4J1I4x.js";
import { C as CheckIcon, W as WarnIcon } from "./icons-DYrN4MjJ.js";
import { a as maskPhone, b as isValidPhone } from "./inputMask-BnLinOtl.js";
import { x as parseDeviceLines, u as isoDate, s as addDays, v as formatLongDate } from "./verhuur-8XCQs1EE.js";
import { b as useTaal, u as useCopy, a as useLokaalPad, N as NUMBER_LOCALE } from "../main.mjs";
/* empty css                       */
import "vite-react-ssg";
import "./FontPreload-C6Rzq6ld.js";
import "./verhuur-CgnDb-wO.js";
import "./tarieven-ZrzMF0e-.js";
import "./packages-DdkKuPcF.js";
import "lucide-react";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/verhuur/VerhuurVerlengenPage.tsx");
const MIN_TOELICHTING = 5;
const KEUZE_DAGEN = [7, 14, 21, 28];
const COPY = {
  nl: {
    titel: "Uw huur verlengen | Vernast",
    beschrijving: "Vraag aan om uw bouwdrogers langer te houden.",
    keuzes: ["1 week", "2 weken", "3 weken", "4 weken"],
    toestel: {
      small: "Small Bouwdroger",
      medium: "Medium Bouwdroger",
      axiaal: "Axiaalventilator",
      kachel: "Elektrische kachel"
    },
    ontbreektTel: "een telefoonnummer waarop wij u kunnen bereiken",
    ontbreektReden: "een korte reden waarom u wilt verlengen",
    missen: (lijst) => `Wij missen nog ${lijst.join(" en ")}.`,
    mislukt: "Versturen lukte niet. Bel ons gerust op 03 689 90 65.",
    teVeel: "Te veel aanvragen. Probeer het over een minuut opnieuw.",
    laden: "Even uw boeking ophalen…",
    onbekendKop: "Deze link werkt niet meer",
    onbekendUitleg: "Wij vinden geen lopende huur bij deze link. Gebruik de knop uit de mail die u twee dagen vóór het einde van uw huurperiode kreeg, of bel ons op ",
    onbekendSlot: ", dan regelen wij het telefonisch.",
    terug: "Terug naar de site",
    verstuurdKop: "Uw aanvraag staat genoteerd",
    verstuurdUitleg: (telefoon, afhaal) => `Wij kijken na of de toestellen langer bij u kunnen blijven en bellen u binnen één werkdag terug op ${telefoon}. Zolang u niets gehoord heeft, blijft ${afhaal ? "het terugbrengen" : "de ophaling"} op de oorspronkelijke datum staan.`,
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
    aanvraagUitleg: "Dit is een aanvraag, nog geen bevestiging: wij kijken eerst na of de toestellen langer bij u kunnen blijven. U hoort binnen één werkdag van ons, en de extra dagen komen op uw volgende factuur. Uw toelichting helpt ons meteen inschatten of één week volstaat.",
    versturen: "Versturen…",
    aanvragen: "Verlenging aanvragen"
  },
  fr: {
    titel: "Prolonger votre location | Vernast",
    beschrijving: "Demandez à garder vos déshumidificateurs de chantier plus longtemps.",
    keuzes: ["1 semaine", "2 semaines", "3 semaines", "4 semaines"],
    toestel: {
      small: "Déshumidificateur de chantier Small",
      medium: "Déshumidificateur de chantier Medium",
      axiaal: "Ventilateur axial",
      kachel: "Chauffage électrique"
    },
    ontbreektTel: "un numéro de téléphone auquel nous pouvons vous joindre",
    ontbreektReden: "une brève raison pour laquelle vous souhaitez prolonger",
    missen: (lijst) => `Il nous manque encore ${lijst.join(" et ")}.`,
    mislukt: "L'envoi n'a pas abouti. N'hésitez pas à nous appeler au 03 689 90 65.",
    teVeel: "Trop de demandes. Réessayez dans une minute.",
    laden: "Récupération de votre réservation…",
    onbekendKop: "Ce lien ne fonctionne plus",
    onbekendUitleg: "Nous ne trouvons aucune location en cours liée à ce lien. Utilisez le bouton de l'e-mail reçu deux jours avant la fin de votre période de location, ou appelez-nous au ",
    onbekendSlot: " : nous réglons cela par téléphone.",
    terug: "Retour au site",
    verstuurdKop: "Votre demande est enregistrée",
    verstuurdUitleg: (telefoon, afhaal) => `Nous vérifions si les appareils peuvent rester plus longtemps chez vous et vous rappelons dans un délai d'un jour ouvrable au ${telefoon}. Tant que vous n'avez pas de nouvelles de notre part, ${afhaal ? "le retour reste prévu" : "l'enlèvement reste prévu"} à la date initiale.`,
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
    aanvraagUitleg: "Ceci est une demande, pas encore une confirmation : nous vérifions d'abord si les appareils peuvent rester plus longtemps chez vous. Vous aurez de nos nouvelles dans un délai d'un jour ouvrable, et les jours supplémentaires figureront sur votre prochaine facture. Votre explication nous aide à estimer tout de suite si une semaine suffit.",
    versturen: "Envoi…",
    aanvragen: "Demander une prolongation"
  },
  en: {
    titel: "Extend your rental | Vernast",
    beschrijving: "Request to keep your construction dehumidifiers for longer.",
    keuzes: ["1 week", "2 weeks", "3 weeks", "4 weeks"],
    toestel: {
      small: "Small construction dehumidifier",
      medium: "Medium construction dehumidifier",
      axiaal: "Axial fan",
      kachel: "Electric heater"
    },
    ontbreektTel: "a phone number we can reach you on",
    ontbreektReden: "a short reason why you would like to extend",
    missen: (lijst) => `We still need ${lijst.join(" and ")}.`,
    mislukt: "Sending failed. Feel free to call us on 03 689 90 65.",
    teVeel: "Too many requests. Please try again in a minute.",
    laden: "Fetching your booking…",
    onbekendKop: "This link no longer works",
    onbekendUitleg: "We cannot find a current rental for this link. Use the button in the email you received two days before the end of your rental period, or call us on ",
    onbekendSlot: " and we will sort it out by phone.",
    terug: "Back to the site",
    verstuurdKop: "Your request has been noted",
    verstuurdUitleg: (telefoon, afhaal) => `We will check whether the units can stay with you for longer and call you back within one working day on ${telefoon}. Until you hear from us, ${afhaal ? "the return" : "the collection"} remains scheduled for the original date.`,
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
    aanvraagUitleg: "This is a request, not yet a confirmation: we first check whether the units can stay with you for longer. You will hear from us within one working day, and the extra days will appear on your next invoice. Your explanation helps us judge straight away whether one week is enough.",
    versturen: "Sending…",
    aanvragen: "Request an extension"
  }
};
const VerhuurVerlengenPage = () => {
  const [searchParams] = useSearchParams();
  const taal = useTaal();
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const langeDatum = (d) => taal === "nl" ? formatLongDate(d) : d.toLocaleDateString(NUMBER_LOCALE[taal], { weekday: "long", day: "numeric", month: "long" });
  const sessionId = searchParams.get("session_id") ?? "";
  const [status, setStatus] = useState("laden");
  const [huur, setHuur] = useState(null);
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
    fetch(`/api/extension?session_id=${encodeURIComponent(sessionId)}`).then((response) => response.ok ? response.json() : Promise.reject(new Error("niet gevonden"))).then((data) => {
      if (afgebroken) return;
      setHuur(data);
      if (data.telefoon) setTelefoon(maskPhone(data.telefoon));
      setStatus("klaar");
    }).catch(() => {
      if (!afgebroken) setStatus("onbekend");
    });
    return () => {
      afgebroken = true;
    };
  }, [sessionId]);
  const toestellen = useMemo(() => {
    if (huur?.machine) return huur.machine;
    const lines = parseDeviceLines(huur?.toestellen).filter((l) => l.device_key);
    return lines.map((l) => `${l.qty}× ${t.toestel[l.device_key] ?? l.device_key}`).join(", ");
  }, [huur?.toestellen, huur?.machine, t]);
  const voorstel = useMemo(() => {
    if (!huur?.huur_eind) return "";
    return isoDate(addDays(new Date(huur.huur_eind), dagen));
  }, [huur?.huur_eind, dagen]);
  const ontbreekt = [
    !isValidPhone(telefoon) && t.ontbreektTel,
    opmerking.trim().length < MIN_TOELICHTING && t.ontbreektReden
  ].filter((item) => Boolean(item));
  const verstuur = async (event) => {
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
        body: JSON.stringify({ sessionId, extraDagen: dagen, telefoon, opmerking, website, taal })
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setFout(response.status === 429 ? t.teVeel : data.error ?? t.mislukt);
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
  return /* @__PURE__ */ jsxs("div", { className: "vh-book vh-ext", children: [
    /* @__PURE__ */ jsx(
      PageMeta,
      {
        title: t.titel,
        description: t.beschrijving,
        noindex: true
      }
    ),
    /* @__PURE__ */ jsx(V3Header, { lightAfter: -1 }),
    /* @__PURE__ */ jsx("section", { className: "main", children: /* @__PURE__ */ jsx("div", { className: "wrap", style: { maxWidth: 760 }, children: /* @__PURE__ */ jsxs("div", { className: "blk", children: [
      status === "laden" && /* @__PURE__ */ jsx("div", { className: "blkh", children: /* @__PURE__ */ jsx("h2", { children: t.laden }) }),
      status === "onbekend" && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("div", { className: "blkh", children: /* @__PURE__ */ jsx("h2", { children: t.onbekendKop }) }),
        /* @__PURE__ */ jsxs("p", { style: { lineHeight: 1.7 }, children: [
          t.onbekendUitleg,
          /* @__PURE__ */ jsx("a", { href: "tel:+3236899065", children: "03 689 90 65" }),
          t.onbekendSlot
        ] }),
        /* @__PURE__ */ jsx("div", { className: "fnav", style: { marginTop: 20 }, children: /* @__PURE__ */ jsx(Link, { className: "btn btn-o", to: lp("/verhuur/calculator"), children: t.terug }) })
      ] }),
      status === "verstuurd" && /* @__PURE__ */ jsxs("div", { className: "done", children: [
        /* @__PURE__ */ jsx("div", { className: "dico", children: /* @__PURE__ */ jsx(CheckIcon, { size: 28 }) }),
        /* @__PURE__ */ jsx("h2", { children: t.verstuurdKop }),
        /* @__PURE__ */ jsx("p", { children: t.verstuurdUitleg(telefoon, Boolean(huur?.afhaal)) }),
        nieuwEinde && /* @__PURE__ */ jsxs("div", { className: "dref", children: [
          /* @__PURE__ */ jsx("span", { children: t.gevraagdTot }),
          /* @__PURE__ */ jsx("span", { children: langeDatum(new Date(nieuwEinde)) })
        ] })
      ] }),
      status === "klaar" && huur && /* @__PURE__ */ jsxs("form", { onSubmit: verstuur, children: [
        /* @__PURE__ */ jsx("div", { className: "blkh", children: /* @__PURE__ */ jsx("h2", { children: t.verlengKop }) }),
        /* @__PURE__ */ jsx(
          "dl",
          {
            style: {
              margin: "16px 0 26px",
              padding: "18px 20px",
              background: "var(--page)",
              borderRadius: 12,
              display: "grid",
              gap: 12
            },
            children: [
              [t.referentie, huur.referentie],
              [t.pakket, huur.pakket],
              [huur.afhaal ? t.uwToestellen : t.bijUGeplaatst, toestellen],
              [
                huur.afhaal ? t.terugbrengenGepland : t.ophalingGepland,
                huur.huur_eind ? langeDatum(new Date(huur.huur_eind)) : ""
              ]
            ].filter(([, waarde]) => waarde).map(([label, waarde]) => /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "dt",
                {
                  style: {
                    fontSize: 11,
                    letterSpacing: ".06em",
                    textTransform: "uppercase",
                    color: "var(--txt-dim)",
                    fontWeight: 600,
                    marginBottom: 3
                  },
                  children: label
                }
              ),
              /* @__PURE__ */ jsx("dd", { style: { margin: 0, fontSize: 15, fontWeight: 600, lineHeight: 1.5 }, children: waarde })
            ] }, label))
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "blkh", children: /* @__PURE__ */ jsx("h2", { children: t.hoeveelKop }) }),
        /* @__PURE__ */ jsx("div", { className: "payopts", children: KEUZE_DAGEN.map((keuzeDagen, i) => /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            className: `payopt${dagen === keuzeDagen ? " sel" : ""}`,
            onClick: () => setDagen(keuzeDagen),
            children: [
              /* @__PURE__ */ jsx("b", { children: t.keuzes[i] }),
              /* @__PURE__ */ jsxs("span", { children: [
                t.tot,
                " ",
                voorstel && langeDatum(new Date(isoDate(addDays(new Date(huur.huur_eind), keuzeDagen))))
              ] })
            ]
          },
          keuzeDagen
        )) }),
        /* @__PURE__ */ jsx("div", { className: "frow", style: { marginTop: 24 }, children: /* @__PURE__ */ jsxs("div", { className: "fld", style: { gridColumn: "span 3" }, children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "vTel", children: t.telLabel }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "tel",
              id: "vTel",
              placeholder: "0470 00 00 00",
              value: telefoon,
              onChange: (e) => {
                setTelefoon(maskPhone(e.target.value));
                setFout("");
              }
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "frow", style: { marginTop: 14 }, children: /* @__PURE__ */ jsxs("div", { className: "fld", style: { gridColumn: "span 3" }, children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "vNote", children: t.redenLabel }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              id: "vNote",
              rows: 3,
              placeholder: t.redenPlaceholder,
              value: opmerking,
              onChange: (e) => {
                setOpmerking(e.target.value);
                setFout("");
              },
              style: {
                width: "100%",
                padding: "13px 14px",
                border: "1.5px solid var(--line-2)",
                borderRadius: 11,
                fontFamily: "var(--fb)",
                fontSize: 14.5,
                resize: "vertical"
              }
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "website",
            tabIndex: -1,
            autoComplete: "off",
            "aria-hidden": "true",
            value: website,
            onChange: (e) => setWebsite(e.target.value),
            style: { position: "absolute", left: -9999, width: 1, height: 1 }
          }
        ),
        fout && /* @__PURE__ */ jsxs("div", { className: "warn", style: { marginTop: 18 }, children: [
          /* @__PURE__ */ jsx(WarnIcon, { size: 18 }),
          /* @__PURE__ */ jsx("span", { children: fout })
        ] }),
        /* @__PURE__ */ jsx("p", { style: { marginTop: 18, fontSize: 13.5, lineHeight: 1.6, color: "var(--txt-mid)" }, children: t.aanvraagUitleg }),
        /* @__PURE__ */ jsx("div", { className: "fnav", style: { marginTop: 20 }, children: /* @__PURE__ */ jsx("button", { className: "btn btn-r", type: "submit", disabled: bezig, children: bezig ? t.versturen : t.aanvragen }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx(V3Footer, {})
  ] });
};
export {
  VerhuurVerlengenPage as default
};
