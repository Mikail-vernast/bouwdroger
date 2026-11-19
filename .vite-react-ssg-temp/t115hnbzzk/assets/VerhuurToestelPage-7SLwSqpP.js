import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useMemo } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { P as PageMeta, M as MAPS_URL } from "./PageMeta-BXulEWcY.js";
import { l as V3Header, h as PinIcon } from "./V3Header-BeIMcMg7.js";
import { t as toestelLabelIn, V as V3Footer } from "./V3Footer-9z4J1I4x.js";
import { C as CheckIcon, A as ArrowRightIcon } from "./icons-DYrN4MjJ.js";
import { i as PICKUP_BY_KEY, h as PICKUP_SLOTS, e as earliestPickupDate, j as longStayDiscount, s as serializeSelection, u as usePickupAvailability, f as firstFreeDate, D as Datumkiezer, g as PICKUP_PERIODS, l as langhuurKorting } from "./usePickupAvailability-DzPEIhz5.js";
import { T as ToestelKaart } from "./ToestelKaart-CnhGGTku.js";
import { i as toestelKey, d as PRODUCT_ORDER, P as PRODUCTS, p as productImageAlt, h as PRODUCT_ADDONS, t as toestelPad } from "./verhuur-CgnDb-wO.js";
import { p as productInTaal, g as toestelTitelFr, h as toestelTitelEn, t as toestelChipsInTaal, i as scLabelInTaal } from "./verhuur.fr-CrIPL5Eo.js";
import { b as useTaal, u as useCopy, a as useLokaalPad, c as useToonBedrag, N as NUMBER_LOCALE } from "../main.mjs";
import { s as addDays, e as euroInt } from "./verhuur-8XCQs1EE.js";
import { p as productSchema, f as faqSchema, b as breadcrumbSchema } from "./schema-VJMHyxOJ.js";
/* empty css                       */
import "./FontPreload-C6Rzq6ld.js";
import "./tarieven-ZrzMF0e-.js";
import "./booking-CFp-lxcW.js";
import "./levering-CO7G5c_f.js";
import "./reportBookingEvent-DNN9fzqH.js";
import "lucide-react";
import "./packages-DdkKuPcF.js";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/verhuur/VerhuurToestelPage.copy.ts");
const COPY = {
  nl: {
    pickupFaq: [
      [
        "Waar haal ik het toestel af?",
        "Aan ons afhaalpunt: Boomsesteenweg 12 / Unit 11, 2630 Aartselaar, vlak langs de A12, vlot bereikbaar vanuit Antwerpen en Brussel. Open ma–vr van 08:00 tot 17:00."
      ],
      [
        "Wat breng ik mee bij de afhaling?",
        "Uw identiteitskaart en uw reservatiebevestiging (op uw telefoon volstaat). Wij laden het toestel mee in uw wagen of aanhangwagen."
      ],
      [
        "Kan dit toestel ook geleverd en geïnstalleerd worden?",
        "Ja, maar uitsluitend als onderdeel van een berekend droogpakket. Alleen zo kunnen wij onze 100% droog-garantie waarmaken. Bereken uw pakket via de Calculator."
      ],
      [
        "Waarom zijn afhaalprijzen lager?",
        "U bespaart de transport- en installatiekost. Reserveren doet u online: betaal alles vooraf met 5% korting, of bevestig met een voorschot en reken de rest af bij de afhaling."
      ]
    ],
    pickupSteps: [
      {
        title: "Reserveer online",
        body: "Kies uw toestel, huurperiode en afhaalmoment. U betaalt vooraf met 5% korting of enkel het voorschot."
      },
      {
        title: "Bevestiging binnen het uur",
        body: "U ontvangt uw reservatiebevestiging met routebeschrijving en wat u meebrengt (identiteitskaart)."
      },
      {
        title: "Afhalen op de A12",
        body: "Uw toestel staat klaar aan ons afhaalpunt. Een openstaand saldo scant en betaalt u hier met Bancontact, kaart of Apple Pay. Breng een ruime koffer, break of aanhangwagen mee."
      },
      {
        title: "Terugbrengen, klaar",
        body: "Breng het toestel terug op het afgesproken moment. Uw factuur staat dan al in uw mailbox."
      }
    ],
    periode: (_dagen, nlLabel) => nlLabel,
    home: "Home",
    toestellen: "Toestellen",
    afbeelding: (n) => `Afbeelding ${n}`,
    promo: "5% korting bij online betalen",
    proforma: "proforma factuur meteen in uw mailbox",
    ctxBasis: "Op basis van uw berekening:",
    ctxToestellen: (n) => `${n} toestellen`,
    ctxAanbevolen: "aanbevolen",
    opnieuw: "Opnieuw berekenen",
    afhaalreservatie: "Afhaalreservatie",
    nakijken: "Beschikbaarheid nakijken…",
    bezet: "Bezet op deze datum",
    beschikbaar: "Beschikbaar",
    afhaalpunt: "Afhaalpunt: Boomsesteenweg 12 / Unit 11, 2630 Aartselaar",
    afhaalpuntSub: "Vlak langs de A12 · Ma–Vr 08:00–17:00",
    startdatum: "Startdatum",
    huurperiode: "Huurperiode",
    retour: (dagen) => ["Afhalen op ", ", terugbrengen op ", ` — ${dagen} dagen`],
    aantal: "Aantal toestellen",
    minder: "Minder",
    meer: "Meer",
    afhaalmoment: "Afhaalmoment",
    datumBezet: (datum, meer) => `Op ${datum} staat ${meer ? "dit aantal" : "dit toestel"} al ingepland.`,
    eerstVrij: "De eerstvolgende vrije startdatum is",
    nietsVrij: " De komende weken is er niets vrij, bel ons op 03 689 90 65.",
    aanbevolen: "Aanbevolen erbij",
    perDag: "/dag",
    dagen: "dagen",
    langhuur: (pct) => `Langhuurkorting (${pct}%)`,
    afhalenGratis: "Afhalen & terugbrengen in Aartselaar",
    gratis: "Gratis",
    totaal: "Totaal",
    nietBeschikbaar: "Niet beschikbaar op deze datum",
    reserveer: "Reserveer voor afhaling,",
    noteVoor: "5% korting bij online betalen · lagere afhaalprijzen · liever geleverd én geïnstalleerd? Dat kan",
    perPakket: "per pakket",
    waarvoor: "Waarvoor dit toestel",
    techFiche: "Technische fiche",
    volledigeSpecs: "Volledige specificaties",
    specsLede: "Alle waarden zoals opgemeten onder standaardomstandigheden. Vragen over uw specifieke situatie? Bel ons.",
    afhalenKick: "Afhalen in Aartselaar",
    zoWerkt: "Zo werkt afhalen.",
    afhalenLede: "Losse toestellen huurt u tegen lagere afhaalprijzen via onze afhaal-checkout. U reserveert online en haalt op wanneer het u past, wij zetten alles klaar.",
    pickupbarTitel: "Afhaalpunt Vernast, Boomsesteenweg 12 / Unit 11, 2630 Aartselaar",
    pickupbarSub: "Vlak langs de A12, vlot bereikbaar vanuit Antwerpen en Brussel · Ma–Vr 08:00–17:00",
    route: "Plan uw route",
    goedOmTeWeten: "Goed om te weten",
    zwaarTitel: "Sommige toestellen zijn zwaar. Til niet, laat leveren.",
    zwaarTekst: "Een professionele bouwdroger weegt al snel 30 tot 50 kg. Zelf tillen, zeker op een trap, is niet zonder risico. Bent u wat ouder of fysiek minder sterk? Kies dan voor een pakket met levering: wij dragen, plaatsen en stellen alles in, u hoeft niets te tillen.",
    zwaarCta: "Bekijk pakketten met levering",
    zwaarAlt: "Oudere man met rugpijn na het tillen van een zwaar toestel",
    afNoteVoor: "Leveren en installeren doen wij uitsluitend",
    afNoteNa: ", alleen zo kunnen wij onze 100% droog-garantie waarmaken.",
    combineer: "Combineer met",
    combineerTitel: "Sneller droog met de juiste combinatie",
    combineerLede: "Circulatie en temperatuur bepalen hoe snel het vocht uit de bouwmassa komt. Deze toestellen versterken elkaar.",
    bekijken: "Bekijken",
    faqKick: "Veelgestelde vragen",
    faqTitel: "Over dit toestel",
    ctaKick: "Nog niet zeker?",
    ctaTitel: "Laat de configurator het voor u uitrekenen.",
    ctaTekst: "Geef uw oppervlakte en plafondhoogte in, u ziet meteen welk toestel, hoeveel units en welke prijs bij uw ruimte hoort.",
    ctaKnop: "Naar de configurator",
    bel: "Bel 03 689 90 65",
    expertAlt: "Vernast droogexpert"
  },
  fr: {
    pickupFaq: [
      [
        "Où vais-je chercher l'appareil ?",
        "À notre point d'enlèvement : Boomsesteenweg 12 / Unit 11, 2630 Aartselaar, le long de l'A12, facilement accessible depuis Anvers et Bruxelles. Ouvert du lundi au vendredi de 08:00 à 17:00."
      ],
      [
        "Que dois-je apporter à l'enlèvement ?",
        "Votre carte d'identité et votre confirmation de réservation (sur votre téléphone, cela suffit). Nous chargeons l'appareil dans votre voiture ou votre remorque."
      ],
      [
        "Cet appareil peut-il aussi être livré et installé ?",
        "Oui, mais uniquement dans le cadre d'un pack de séchage calculé. C'est la seule façon pour nous de tenir notre garantie de séchage à 100 %. Calculez votre pack via le calculateur."
      ],
      [
        "Pourquoi les prix à l'enlèvement sont-ils plus bas ?",
        "Vous économisez les frais de transport et d'installation. La réservation se fait en ligne : payez tout à l'avance avec 5 % de réduction, ou confirmez avec un acompte et réglez le reste à l'enlèvement."
      ]
    ],
    pickupSteps: [
      {
        title: "Réservez en ligne",
        body: "Choisissez votre appareil, la période de location et le moment d'enlèvement. Vous payez à l'avance avec 5 % de réduction, ou seulement l'acompte."
      },
      {
        title: "Confirmation dans l'heure",
        body: "Vous recevez votre confirmation de réservation avec l'itinéraire et ce qu'il faut apporter (carte d'identité)."
      },
      {
        title: "Enlèvement sur l'A12",
        body: "Votre appareil vous attend à notre point d'enlèvement. Un solde restant se scanne et se paie sur place par Bancontact, carte ou Apple Pay. Prévoyez un grand coffre, un break ou une remorque."
      },
      {
        title: "Retour, c'est terminé",
        body: "Rapportez l'appareil au moment convenu. Votre facture est alors déjà dans votre boîte mail."
      }
    ],
    periode: (dagen) => {
      const weken = Math.round(dagen / 7);
      return `${weken} ${weken === 1 ? "semaine" : "semaines"}`;
    },
    home: "Accueil",
    toestellen: "Appareils",
    afbeelding: (n) => `Image ${n}`,
    promo: "5 % de réduction en payant en ligne",
    proforma: "facture pro forma immédiatement dans votre boîte mail",
    ctxBasis: "Sur la base de votre calcul :",
    ctxToestellen: (n) => `${n} appareils`,
    ctxAanbevolen: "recommandés",
    opnieuw: "Recalculer",
    afhaalreservatie: "Réservation pour enlèvement",
    nakijken: "Vérification de la disponibilité…",
    bezet: "Occupé à cette date",
    beschikbaar: "Disponible",
    afhaalpunt: "Point d'enlèvement : Boomsesteenweg 12 / Unit 11, 2630 Aartselaar",
    afhaalpuntSub: "Le long de l'A12 · Lu–ve 08:00–17:00",
    startdatum: "Date de début",
    huurperiode: "Période de location",
    retour: (dagen) => ["Enlèvement le ", ", retour le ", `, ${dagen} jours`],
    aantal: "Nombre d'appareils",
    minder: "Moins",
    meer: "Plus",
    afhaalmoment: "Moment d'enlèvement",
    datumBezet: (datum, meer) => `Le ${datum}, ${meer ? "ce nombre d'appareils est" : "cet appareil est"} déjà planifié.`,
    eerstVrij: "La prochaine date de début libre est le",
    nietsVrij: " Rien n'est libre dans les semaines à venir, appelez-nous au 03 689 90 65.",
    aanbevolen: "Recommandé en complément",
    perDag: "/jour",
    dagen: "jours",
    langhuur: (pct) => `Réduction longue durée (${pct} %)`,
    afhalenGratis: "Enlèvement & retour à Aartselaar",
    gratis: "Gratuit",
    totaal: "Total",
    nietBeschikbaar: "Pas disponible à cette date",
    reserveer: "Réserver pour enlèvement,",
    noteVoor: "5 % de réduction en payant en ligne · prix plus bas à l'enlèvement · vous préférez la livraison et l'installation ? C'est possible",
    perPakket: "par pack",
    waarvoor: "À quoi sert cet appareil",
    techFiche: "Fiche technique",
    volledigeSpecs: "Spécifications complètes",
    specsLede: "Toutes les valeurs mesurées dans des conditions standard. Des questions sur votre situation ? Appelez-nous.",
    afhalenKick: "Enlèvement à Aartselaar",
    zoWerkt: "Comment fonctionne l'enlèvement.",
    afhalenLede: "Vous louez les appareils seuls à des prix plus bas via notre réservation pour enlèvement. Vous réservez en ligne et venez chercher quand cela vous convient, nous préparons tout.",
    pickupbarTitel: "Point d'enlèvement Vernast, Boomsesteenweg 12 / Unit 11, 2630 Aartselaar",
    pickupbarSub: "Le long de l'A12, facilement accessible depuis Anvers et Bruxelles · Lu–ve 08:00–17:00",
    route: "Planifiez votre itinéraire",
    goedOmTeWeten: "Bon à savoir",
    zwaarTitel: "Certains appareils sont lourds. Ne portez pas, faites livrer.",
    zwaarTekst: "Un déshumidificateur de chantier professionnel pèse vite 30 à 50 kg. Le porter soi-même, surtout dans un escalier, n'est pas sans risque. Vous êtes un peu plus âgé ou physiquement moins fort ? Choisissez alors un pack avec livraison : nous portons, plaçons et réglons tout, vous n'avez rien à soulever.",
    zwaarCta: "Voir les packs avec livraison",
    zwaarAlt: "Homme âgé avec un mal de dos après avoir soulevé un appareil lourd",
    afNoteVoor: "Nous livrons et installons uniquement",
    afNoteNa: ", c'est la seule façon de tenir notre garantie de séchage à 100 %.",
    combineer: "À combiner avec",
    combineerTitel: "Sécher plus vite avec la bonne combinaison",
    combineerLede: "La circulation et la température déterminent la vitesse à laquelle l'humidité quitte la maçonnerie. Ces appareils se renforcent mutuellement.",
    bekijken: "Voir",
    faqKick: "Questions fréquentes",
    faqTitel: "À propos de cet appareil",
    ctaKick: "Pas encore sûr ?",
    ctaTitel: "Laissez le configurateur faire le calcul pour vous.",
    ctaTekst: "Indiquez votre surface et la hauteur sous plafond, vous voyez tout de suite quel appareil, combien d'unités et quel prix correspondent à votre espace.",
    ctaKnop: "Vers le configurateur",
    bel: "Appelez le 03 689 90 65",
    expertAlt: "Expert en séchage Vernast"
  },
  en: {
    pickupFaq: [
      [
        "Where do I collect the unit?",
        "At our collection point: Boomsesteenweg 12 / Unit 11, 2630 Aartselaar, right by the A12, easy to reach from Antwerp and Brussels. Open Mon–Fri from 08:00 to 17:00."
      ],
      [
        "What do I bring when collecting?",
        "Your identity card and your booking confirmation (on your phone is fine). We load the unit into your car or trailer."
      ],
      [
        "Can this unit also be delivered and installed?",
        "Yes, but only as part of a calculated drying package. That's the only way we can deliver on our 100% drying guarantee. Calculate your package with the Calculator."
      ],
      [
        "Why are collection prices lower?",
        "You save on transport and installation costs. Booking is done online: pay everything up front with a 5% discount, or confirm with a deposit and settle the rest when you collect."
      ]
    ],
    pickupSteps: [
      {
        title: "Book online",
        body: "Choose your unit, hire period and collection time. You pay up front with a 5% discount, or just the deposit."
      },
      {
        title: "Confirmation within the hour",
        body: "You receive your booking confirmation with directions and what to bring (identity card)."
      },
      {
        title: "Collect on the A12",
        body: "Your unit is ready at our collection point. Any outstanding balance you scan and pay here by Bancontact, card or Apple Pay. Bring a large boot, estate car or trailer."
      },
      {
        title: "Bring it back, done",
        body: "Return the unit at the agreed time. Your invoice will already be in your inbox."
      }
    ],
    periode: (dagen) => {
      const weken = Math.round(dagen / 7);
      return `${weken} ${weken === 1 ? "week" : "weeks"}`;
    },
    home: "Home",
    toestellen: "Units",
    afbeelding: (n) => `Image ${n}`,
    promo: "5% discount when paying online",
    proforma: "pro forma invoice straight to your inbox",
    ctxBasis: "Based on your calculation:",
    ctxToestellen: (n) => `${n} units`,
    ctxAanbevolen: "recommended",
    opnieuw: "Recalculate",
    afhaalreservatie: "Collection booking",
    nakijken: "Checking availability…",
    bezet: "Booked on this date",
    beschikbaar: "Available",
    afhaalpunt: "Collection point: Boomsesteenweg 12 / Unit 11, 2630 Aartselaar",
    afhaalpuntSub: "Right by the A12 · Mon–Fri 08:00–17:00",
    startdatum: "Start date",
    huurperiode: "Hire period",
    retour: (dagen) => ["Collect on ", ", return on ", `, ${dagen} days`],
    aantal: "Number of units",
    minder: "Fewer",
    meer: "More",
    afhaalmoment: "Collection time",
    datumBezet: (datum, meer) => `On ${datum}, ${meer ? "this number of units is" : "this unit is"} already booked.`,
    eerstVrij: "The next available start date is",
    nietsVrij: " Nothing is available in the coming weeks, call us on 03 689 90 65.",
    aanbevolen: "Recommended add-ons",
    perDag: "/day",
    dagen: "days",
    langhuur: (pct) => `Long-hire discount (${pct}%)`,
    afhalenGratis: "Collection & return in Aartselaar",
    gratis: "Free",
    totaal: "Total",
    nietBeschikbaar: "Not available on this date",
    reserveer: "Book for collection,",
    noteVoor: "5% discount when paying online · lower collection prices · prefer delivery and installation? That's possible",
    perPakket: "as a package",
    waarvoor: "What this unit is for",
    techFiche: "Technical data sheet",
    volledigeSpecs: "Full specifications",
    specsLede: "All values as measured under standard conditions. Questions about your specific situation? Call us.",
    afhalenKick: "Collection in Aartselaar",
    zoWerkt: "How collection works.",
    afhalenLede: "You hire individual units at lower collection prices through our collection checkout. You book online and collect whenever suits you; we get everything ready.",
    pickupbarTitel: "Vernast collection point, Boomsesteenweg 12 / Unit 11, 2630 Aartselaar",
    pickupbarSub: "Right by the A12, easy to reach from Antwerp and Brussels · Mon–Fri 08:00–17:00",
    route: "Plan your route",
    goedOmTeWeten: "Good to know",
    zwaarTitel: "Some units are heavy. Don't lift, have it delivered.",
    zwaarTekst: "A professional construction dehumidifier easily weighs 30 to 50 kg. Lifting it yourself, especially on stairs, is not without risk. Are you a bit older or physically less strong? Then choose a package with delivery: we carry, position and set up everything, you don't have to lift a thing.",
    zwaarCta: "View packages with delivery",
    zwaarAlt: "Older man with back pain after lifting a heavy unit",
    afNoteVoor: "We only deliver and install",
    afNoteNa: "; that's the only way we can deliver on our 100% drying guarantee.",
    combineer: "Combine with",
    combineerTitel: "Dry faster with the right combination",
    combineerLede: "Circulation and temperature determine how quickly moisture leaves the building fabric. These units reinforce each other.",
    bekijken: "View",
    faqKick: "Frequently asked questions",
    faqTitel: "About this unit",
    ctaKick: "Not sure yet?",
    ctaTitel: "Let the configurator work it out for you.",
    ctaTekst: "Enter your floor area and ceiling height, and you'll see straight away which unit, how many units and what price suit your space.",
    ctaKnop: "Go to the configurator",
    bel: "Call 03 689 90 65",
    expertAlt: "Vernast drying expert"
  }
};
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/lib/toestelTitel.ts");
const SOORT = [
  ["Condensontvochtiger", "Bouwdroger"],
  ["Adsorptiedroger", "Adsorptiedroger"],
  // "Bouwventilator" duwt "Radiaal 2250 … € 5/dag" over de 60 tekens.
  ["Bouwventilator", "Ventilator"],
  ["Elektrische bouwkachel", "Bouwkachel"]
];
function dagprijs(day) {
  return "€ " + day.toLocaleString("nl-BE", {
    minimumFractionDigits: Number.isInteger(day) ? 0 : 2,
    maximumFractionDigits: 2
  });
}
function toestelTitel({ short, type, day, spec }) {
  const soort = SOORT.find(([prefix]) => type.startsWith(prefix))?.[1];
  const naam = soort && !short.toLowerCase().includes(soort.toLowerCase()) ? `${soort} ${short}` : short;
  if (soort === "Adsorptiedroger" && naam.toLowerCase().startsWith(soort.toLowerCase() + " ")) {
    const rest = naam.slice(soort.length + 1);
    const prijs = day > 0 ? `, ${dagprijs(day)}/dag` : "";
    return `${soort} huren - ${rest}${prijs} | Vernast`;
  }
  const delen = [];
  const [, waarde = "", eenheid = ""] = spec ?? [];
  const kaal = (t) => t.replace(/\s/g, "");
  const zitInNaam = kaal(waarde).length >= 4 && kaal(short).includes(kaal(waarde));
  if (eenheid && !zitInNaam) delen.push(`${waarde} ${eenheid}`);
  if (day > 0) delen.push(`${dagprijs(day)}/dag`);
  const bouw = (stukken) => `${naam} huren${stukken.length ? ` - ${stukken.join(", ")}` : ""} | Vernast`;
  const MAX = 60;
  for (const poging of [delen, delen.slice(-1), []]) {
    const titel = bouw(poging);
    if (titel.length <= MAX) return titel;
  }
  return bouw([]);
}
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/verhuur/VerhuurToestelPage.tsx");
const MAX_QTY = 12;
const kortDatum = (d) => `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${String(
  d.getFullYear()
).slice(-2)}`;
const PERIODS = PICKUP_PERIODS;
function useGeld() {
  const toon = useToonBedrag();
  const taal = useTaal();
  return (excl) => {
    const { bedrag } = toon(excl);
    if (taal === "nl") return euroInt(bedrag);
    const centen = Math.round(bedrag * 100) % 100 !== 0;
    if (taal === "en") {
      return bedrag.toLocaleString(NUMBER_LOCALE.en, {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: centen ? 2 : 0,
        maximumFractionDigits: 2
      });
    }
    return `${bedrag.toLocaleString(NUMBER_LOCALE[taal], {
      minimumFractionDigits: centen ? 2 : 0,
      maximumFractionDigits: 2
    })} €`;
  };
}
const VerhuurToestelPage = () => {
  const { toestel } = useParams();
  const taal = useTaal();
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const toon = useToonBedrag();
  const geld = useGeld();
  const btw = toon(0).label;
  const scLabel = scLabelInTaal(taal);
  const [searchParams] = useSearchParams();
  const key = toestelKey(toestel) ?? PRODUCT_ORDER[0];
  const prod = productInTaal(key, taal);
  const questions = [...prod.faq, ...t.pickupFaq];
  const maxQty = Math.min(MAX_QTY, PICKUP_BY_KEY[key]?.max ?? MAX_QTY);
  const nl = PRODUCTS[key];
  const naam = toestelLabelIn(key, taal);
  const pageTitle = taal === "nl" ? toestelTitel({ short: nl.short, type: nl.type, day: nl.day, spec: nl.key[0] }) : taal === "fr" ? toestelTitelFr(naam, geld(prod.day)) : toestelTitelEn(naam, geld(prod.day));
  const shots = [
    ...prod.img.map((src, i) => ({ src, alt: productImageAlt(prod, i) })),
    ...prod.posts.map(([src, alt]) => ({ src, alt }))
  ];
  const [qty, setQty] = useState(
    () => Math.max(1, Math.min(maxQty, parseInt(searchParams.get("units") || "1", 10) || 1))
  );
  const [days, setDays] = useState(7);
  const [addons, setAddons] = useState({});
  const [shot, setShot] = useState(0);
  const [slot, setSlot] = useState(PICKUP_SLOTS[1]);
  const [openFaq, setOpenFaq] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [minDate, setMinDate] = useState("");
  useEffect(() => {
    const min = earliestPickupDate();
    setMinDate(min);
    setStartDate((current) => current && current >= min ? current : min);
  }, []);
  useEffect(() => {
    setAddons({});
    setShot(0);
    setOpenFaq(0);
  }, [key]);
  const addonKeys = PRODUCT_ADDONS[key] || [];
  const base = prod.day * qty * days;
  const chosenAddons = addonKeys.filter((k) => addons[k]);
  const addTotal = chosenAddons.reduce((s, k) => s + PRODUCTS[k].day * days, 0);
  const longStay = longStayDiscount(base + addTotal, days);
  const total = base + addTotal - longStay;
  const selection = serializeSelection({
    [key]: qty,
    ...Object.fromEntries(chosenAddons.map((k) => [k, 1]))
  });
  const pickupQuery = new URLSearchParams({
    d: selection,
    days: String(days),
    date: startDate,
    slot
  }).toString();
  const { blocked, loading: checkingDates, horizonDays } = usePickupAvailability(selection, days);
  const dateBlocked = blocked.includes(startDate);
  const suggestion = dateBlocked ? firstFreeDate(startDate, blocked, horizonDays) : null;
  const terug = useMemo(() => {
    const start = startDate ? /* @__PURE__ */ new Date(`${startDate}T00:00:00`) : null;
    if (!start || Number.isNaN(start.getTime())) return null;
    return { start, eind: addDays(start, days) };
  }, [startDate, days]);
  const cross = PRODUCT_ORDER.filter((k) => k !== key);
  const periodeLabel = (dagen) => t.periode(dagen, PERIODS.find(([v]) => v === dagen)?.[1] ?? String(dagen));
  const langeDatum = (iso) => (/* @__PURE__ */ new Date(`${iso}T00:00:00`)).toLocaleDateString(NUMBER_LOCALE[taal], { day: "numeric", month: "long" });
  const [retourVoor, retourMidden, retourNa] = t.retour(days);
  const vol = searchParams.get("vol");
  const sc = searchParams.get("sc");
  return /* @__PURE__ */ jsxs("div", { className: "vh-prod", children: [
    /* @__PURE__ */ jsx(
      PageMeta,
      {
        title: pageTitle,
        description: prod.sum,
        path: lp(toestelPad(key)),
        image: prod.img[0],
        ogType: "product",
        jsonLd: [
          productSchema({
            name: prod.name,
            description: prod.sum,
            image: prod.img[0],
            path: lp(toestelPad(key)),
            pricePerDay: prod.day,
            category: prod.type,
            specs: prod.specs
          }),
          faqSchema(questions.map(([question, answer]) => ({ question, answer }))),
          breadcrumbSchema([
            { name: t.home, path: lp("/") },
            { name: t.toestellen, path: lp("/machines") },
            { name: naam, path: lp(toestelPad(key)) }
          ])
        ]
      }
    ),
    /* @__PURE__ */ jsx(V3Header, { lightAfter: 320 }),
    /* @__PURE__ */ jsx("section", { className: "phero", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "crumb", children: [
        /* @__PURE__ */ jsx(Link, { to: lp("/"), children: t.home }),
        " ",
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx(Link, { to: `${lp("/")}#toestellen`, children: t.toestellen }),
        " ",
        /* @__PURE__ */ jsx("span", { children: "/" }),
        /* @__PURE__ */ jsx("span", { className: "cur", children: naam })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pgrid", children: [
        /* @__PURE__ */ jsxs("div", { className: "gal", children: [
          /* @__PURE__ */ jsxs("div", { className: "main", children: [
            /* @__PURE__ */ jsx("span", { className: "badge", children: prod.badge }),
            /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("link", { rel: "preload", href: "/vernast/bg-red-wide-2.webp", as: "image", type: "image/webp", fetchPriority: "high" }) }),
            /* @__PURE__ */ jsx("img", { src: shots[shot]?.src, alt: shots[shot]?.alt ?? "", fetchPriority: "high", decoding: "async" })
          ] }),
          shots.length > 1 && /* @__PURE__ */ jsx("div", { className: "thumbs", children: shots.map((s, i) => /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: i === shot ? "on" : void 0,
              onClick: () => setShot(i),
              "aria-label": t.afbeelding(i + 1),
              children: /* @__PURE__ */ jsx("img", { src: s.src, alt: s.alt, loading: "lazy", decoding: "async" })
            },
            s.src
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "pinfo", id: "boeken", children: [
          /* @__PURE__ */ jsx("div", { className: "ptype", children: prod.type }),
          /* @__PURE__ */ jsx("h1", { children: naam }),
          /* @__PURE__ */ jsxs("div", { className: "promo-online", children: [
            /* @__PURE__ */ jsx(CheckIcon, { size: 15, strokeWidth: 2.4 }),
            /* @__PURE__ */ jsx("b", { children: t.promo }),
            /* @__PURE__ */ jsxs("span", { children: [
              " · ",
              t.proforma
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "psum", children: prod.sum }),
          vol && /* @__PURE__ */ jsxs("div", { className: "ctx on", children: [
            /* @__PURE__ */ jsx(CheckIcon, { size: 16, strokeWidth: 2.2 }),
            /* @__PURE__ */ jsxs("p", { children: [
              t.ctxBasis,
              " ",
              /* @__PURE__ */ jsxs("b", { children: [
                Number(vol).toLocaleString(NUMBER_LOCALE[taal]),
                " m³"
              ] }),
              sc && scLabel[sc] && /* @__PURE__ */ jsxs(Fragment, { children: [
                " · ",
                /* @__PURE__ */ jsx("b", { children: scLabel[sc] })
              ] }),
              qty > 1 && /* @__PURE__ */ jsxs(Fragment, { children: [
                " · ",
                /* @__PURE__ */ jsx("b", { children: t.ctxToestellen(qty) }),
                " ",
                t.ctxAanbevolen
              ] }),
              ". ",
              /* @__PURE__ */ jsx(Link, { to: `${lp("/")}#configurator`, children: t.opnieuw })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "keyspec", children: prod.key.map(([label, value, unit]) => /* @__PURE__ */ jsxs("div", { className: "k", children: [
            /* @__PURE__ */ jsx("div", { className: "kl", children: label }),
            /* @__PURE__ */ jsxs("div", { className: "kv", children: [
              value,
              unit && /* @__PURE__ */ jsxs("small", { children: [
                " ",
                unit
              ] })
            ] })
          ] }, label)) }),
          /* @__PURE__ */ jsxs("div", { className: "book", children: [
            /* @__PURE__ */ jsxs("div", { className: "bh", children: [
              /* @__PURE__ */ jsx("span", { className: "bt", children: t.afhaalreservatie }),
              /* @__PURE__ */ jsxs("span", { className: `stock${dateBlocked ? " op" : ""}`, children: [
                /* @__PURE__ */ jsx("span", { className: "d" }),
                " ",
                checkingDates ? t.nakijken : dateBlocked ? t.bezet : t.beschikbaar
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bb", children: [
              /* @__PURE__ */ jsxs("div", { className: "pickupline", children: [
                /* @__PURE__ */ jsx(PinIcon, { size: 15 }),
                /* @__PURE__ */ jsxs("span", { children: [
                  t.afhaalpunt,
                  /* @__PURE__ */ jsx("small", { children: t.afhaalpuntSub })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "brow", children: [
                /* @__PURE__ */ jsxs("div", { className: "fld", children: [
                  /* @__PURE__ */ jsx("label", { htmlFor: "startDate", children: t.startdatum }),
                  /* @__PURE__ */ jsx(
                    Datumkiezer,
                    {
                      id: "startDate",
                      value: startDate,
                      min: minDate,
                      blocked,
                      rangeDays: days,
                      rangeLabel: periodeLabel(days),
                      invalid: dateBlocked,
                      describedBy: dateBlocked ? "dateWarn" : void 0,
                      onChange: setStartDate
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "fld", children: [
                  /* @__PURE__ */ jsx("label", { htmlFor: "period", children: t.huurperiode }),
                  /* @__PURE__ */ jsx(
                    "select",
                    {
                      id: "period",
                      value: days,
                      onChange: (e) => setDays(Number(e.target.value)),
                      children: PERIODS.map(([v]) => {
                        const pct = Math.round(langhuurKorting(v) * 100);
                        return /* @__PURE__ */ jsxs("option", { value: v, children: [
                          periodeLabel(v),
                          pct > 0 ? ` · −${pct}${taal === "fr" ? " " : ""}%` : ""
                        ] }, v);
                      })
                    }
                  )
                ] })
              ] }),
              terug && /* @__PURE__ */ jsxs("p", { className: "retour", children: [
                retourVoor,
                /* @__PURE__ */ jsx("b", { children: kortDatum(terug.start) }),
                retourMidden,
                /* @__PURE__ */ jsx("b", { children: kortDatum(terug.eind) }),
                retourNa
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "brow", children: [
                /* @__PURE__ */ jsxs("div", { className: "fld", children: [
                  /* @__PURE__ */ jsx("label", { htmlFor: "qtyIn", children: t.aantal }),
                  /* @__PURE__ */ jsxs("div", { className: "qty", children: [
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        type: "button",
                        "aria-label": t.minder,
                        onClick: () => setQty((q) => Math.max(1, q - 1)),
                        children: "−"
                      }
                    ),
                    /* @__PURE__ */ jsx("input", { type: "text", id: "qtyIn", value: qty, readOnly: true }),
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        type: "button",
                        "aria-label": t.meer,
                        disabled: qty >= maxQty,
                        onClick: () => setQty((q) => Math.min(maxQty, q + 1)),
                        children: "+"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "fld", children: [
                  /* @__PURE__ */ jsx("label", { htmlFor: "slot", children: t.afhaalmoment }),
                  /* @__PURE__ */ jsx("select", { id: "slot", value: slot, onChange: (e) => setSlot(e.target.value), children: PICKUP_SLOTS.map((option) => /* @__PURE__ */ jsx("option", { children: option }, option)) })
                ] })
              ] }),
              dateBlocked && /* @__PURE__ */ jsxs("div", { className: "datewarn", id: "dateWarn", role: "status", children: [
                /* @__PURE__ */ jsx("b", { children: t.datumBezet(langeDatum(startDate), qty > 1) }),
                suggestion ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  " ",
                  t.eerstVrij,
                  " ",
                  /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setStartDate(suggestion), children: langeDatum(suggestion) }),
                  "."
                ] }) : t.nietsVrij
              ] }),
              addonKeys.length > 0 && /* @__PURE__ */ jsxs("div", { className: "addons", children: [
                /* @__PURE__ */ jsx("div", { className: "al", children: t.aanbevolen }),
                /* @__PURE__ */ jsx("div", { children: addonKeys.map((k) => {
                  const a = productInTaal(k, taal);
                  return /* @__PURE__ */ jsxs("label", { className: `addon${addons[k] ? " on" : ""}`, children: [
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "checkbox",
                        checked: !!addons[k],
                        onChange: (e) => setAddons((p) => ({ ...p, [k]: e.target.checked }))
                      }
                    ),
                    /* @__PURE__ */ jsx("img", { src: a.img[0], alt: productImageAlt(a, 0), loading: "lazy", decoding: "async" }),
                    /* @__PURE__ */ jsxs("span", { className: "at", children: [
                      a.short,
                      /* @__PURE__ */ jsx("small", { children: a.type })
                    ] }),
                    /* @__PURE__ */ jsxs("span", { className: "ap", children: [
                      geld(a.day),
                      t.perDag
                    ] })
                  ] }, k);
                }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "total", children: [
                /* @__PURE__ */ jsxs("div", { className: "tline", children: [
                  /* @__PURE__ */ jsxs("span", { children: [
                    prod.short,
                    " × ",
                    qty,
                    " × ",
                    days,
                    " ",
                    t.dagen
                  ] }),
                  /* @__PURE__ */ jsx("span", { children: geld(base) })
                ] }),
                addTotal > 0 && /* @__PURE__ */ jsxs("div", { className: "tline", style: { display: "flex" }, children: [
                  /* @__PURE__ */ jsxs("span", { children: [
                    chosenAddons.map((k) => PRODUCTS[k].short).join(" + "),
                    " × ",
                    days,
                    " ",
                    t.dagen
                  ] }),
                  /* @__PURE__ */ jsx("span", { children: geld(addTotal) })
                ] }),
                longStay > 0 && /* @__PURE__ */ jsxs("div", { className: "tline", children: [
                  /* @__PURE__ */ jsx("span", { children: t.langhuur(Math.round(langhuurKorting(days) * 100)) }),
                  /* @__PURE__ */ jsxs("span", { className: "disc", children: [
                    "− ",
                    geld(longStay)
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "tline", children: [
                  /* @__PURE__ */ jsx("span", { children: t.afhalenGratis }),
                  /* @__PURE__ */ jsx("span", { className: "disc", children: t.gratis })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "tline big", children: [
                  /* @__PURE__ */ jsxs("span", { className: "tl-lab", children: [
                    t.totaal,
                    " ",
                    btw
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "tl-val", children: geld(total) })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bf", children: [
              dateBlocked ? /* @__PURE__ */ jsx("button", { className: "btn btn-red", type: "button", disabled: true, children: t.nietBeschikbaar }) : /* @__PURE__ */ jsxs(Link, { className: "btn btn-red", to: lp(`/verhuur/afhalen?${pickupQuery}`), children: [
                t.reserveer,
                " ",
                geld(total),
                /* @__PURE__ */ jsx(ArrowRightIcon, { strokeWidth: 2.4 })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "note", children: [
                t.noteVoor,
                " ",
                /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), style: { color: "var(--red)", fontWeight: 700 }, children: t.perPakket })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "about", children: /* @__PURE__ */ jsxs("div", { className: "wrap about-grid", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "kick", children: t.waarvoor }),
        /* @__PURE__ */ jsx("h2", { className: "sec", children: prod.aboutTitle }),
        /* @__PURE__ */ jsx("div", { className: "about-body", style: { marginTop: 22 }, children: prod.about.map((paragraph) => (
          // Vaste designtekst met <strong>-accenten — geen invoer van buitenaf.
          /* @__PURE__ */ jsx("p", { dangerouslySetInnerHTML: { __html: paragraph } }, paragraph.slice(0, 24))
        )) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "bullets", children: prod.bullets.map(([title, body]) => /* @__PURE__ */ jsxs("div", { className: "bl", children: [
        /* @__PURE__ */ jsx(CheckIcon, { size: 17, strokeWidth: 2.4 }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { children: title }),
          /* @__PURE__ */ jsx("p", { children: body })
        ] })
      ] }, title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "specs", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
        /* @__PURE__ */ jsx("span", { className: "kick", children: t.techFiche }),
        /* @__PURE__ */ jsx("h2", { className: "sec", children: t.volledigeSpecs }),
        /* @__PURE__ */ jsx("p", { className: "lede", children: t.specsLede })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "stable", children: /* @__PURE__ */ jsx("table", { children: /* @__PURE__ */ jsx("tbody", { children: prod.specs.map(([label, value]) => /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", { children: label }),
        /* @__PURE__ */ jsx("td", { children: value })
      ] }, label)) }) }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "incl afh", id: "afhalen", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
        /* @__PURE__ */ jsx("span", { className: "kick", children: t.afhalenKick }),
        /* @__PURE__ */ jsx("h2", { className: "sec", children: t.zoWerkt }),
        /* @__PURE__ */ jsx("p", { className: "lede", children: t.afhalenLede })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "astep-grid", children: t.pickupSteps.map((step, i) => /* @__PURE__ */ jsxs("div", { className: "astep", children: [
        /* @__PURE__ */ jsx("div", { className: "an", children: i + 1 }),
        /* @__PURE__ */ jsx("h3", { children: step.title }),
        /* @__PURE__ */ jsx("p", { children: step.body })
      ] }, step.title)) }),
      /* @__PURE__ */ jsxs("div", { className: "pickupbar", children: [
        /* @__PURE__ */ jsx(PinIcon, { size: 34 }),
        /* @__PURE__ */ jsxs("div", { className: "pb-t", children: [
          /* @__PURE__ */ jsx("b", { children: t.pickupbarTitel }),
          /* @__PURE__ */ jsx("span", { children: t.pickupbarSub })
        ] }),
        /* @__PURE__ */ jsx(
          "a",
          {
            className: "btn",
            href: MAPS_URL,
            target: "_blank",
            rel: "noopener",
            children: t.route
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "zwaarbar", children: [
        /* @__PURE__ */ jsxs("div", { className: "zb-t", children: [
          /* @__PURE__ */ jsx("span", { className: "zk", children: t.goedOmTeWeten }),
          /* @__PURE__ */ jsx("b", { children: t.zwaarTitel }),
          /* @__PURE__ */ jsx("p", { children: t.zwaarTekst }),
          /* @__PURE__ */ jsxs(Link, { className: "btn", to: lp("/verhuur/calculator"), children: [
            t.zwaarCta,
            /* @__PURE__ */ jsx(ArrowRightIcon, { size: 14, strokeWidth: 2.4 })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/vernast/oudere-man.webp",
            alt: t.zwaarAlt,
            loading: "lazy"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "af-note", children: [
        t.afNoteVoor,
        " ",
        /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/calculator"), children: t.perPakket }),
        t.afNoteNa
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "cross", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
        /* @__PURE__ */ jsx("span", { className: "kick", children: t.combineer }),
        /* @__PURE__ */ jsx("h2", { className: "sec", children: t.combineerTitel }),
        /* @__PURE__ */ jsx("p", { className: "lede", children: t.combineerLede })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "tk-grid", children: cross.map((k) => {
        const c = productInTaal(k, taal);
        return /* @__PURE__ */ jsx(
          ToestelKaart,
          {
            href: lp(toestelPad(k)),
            tag: c.badge,
            image: c.img[0],
            alt: productImageAlt(c, 0),
            name: toestelLabelIn(k, taal),
            blurb: c.sum,
            chips: toestelChipsInTaal(k, taal),
            price: geld(c.day),
            priceNote: `${t.perDag} ${btw}`,
            cta: t.bekijken
          },
          k
        );
      }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "faq", children: /* @__PURE__ */ jsxs("div", { className: "wrap faq-in", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
        /* @__PURE__ */ jsx("span", { className: "kick", children: t.faqKick }),
        /* @__PURE__ */ jsx("h2", { className: "sec", children: t.faqTitel })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { marginTop: 30 }, children: questions.map(([q, a], i) => /* @__PURE__ */ jsxs(
        "details",
        {
          className: "q",
          open: openFaq === i,
          onToggle: (e) => {
            if (e.currentTarget.open) setOpenFaq(i);
            else if (openFaq === i) setOpenFaq(-1);
          },
          children: [
            /* @__PURE__ */ jsxs("summary", { children: [
              q,
              " ",
              /* @__PURE__ */ jsx("span", { className: "pl", children: "+" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "a", children: /* @__PURE__ */ jsx("p", { children: a }) })
          ]
        },
        q
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "cta", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "cta-copy", children: [
        /* @__PURE__ */ jsx("span", { className: "kick onred", children: t.ctaKick }),
        /* @__PURE__ */ jsx("h2", { children: t.ctaTitel }),
        /* @__PURE__ */ jsx("p", { children: t.ctaTekst }),
        /* @__PURE__ */ jsxs("div", { className: "cb", children: [
          /* @__PURE__ */ jsxs(Link, { className: "btn btn-white", to: lp("/verhuur/calculator"), children: [
            t.ctaKnop,
            /* @__PURE__ */ jsx(ArrowRightIcon, { strokeWidth: 2.4 })
          ] }),
          /* @__PURE__ */ jsx("a", { className: "btn btn-dark", href: "tel:+3236899065", children: t.bel })
        ] })
      ] }),
      /* @__PURE__ */ jsx("img", { className: "cta-man", src: "/vernast/man-klembord.webp", alt: t.expertAlt, loading: "lazy", decoding: "async" })
    ] }) }),
    /* @__PURE__ */ jsx(V3Footer, {})
  ] });
};
export {
  VerhuurToestelPage as default
};
