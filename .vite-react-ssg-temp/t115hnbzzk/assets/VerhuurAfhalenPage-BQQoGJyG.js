import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useMemo, useState, useEffect, useRef } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { CheckoutElementsProvider } from "@stripe/react-stripe-js/checkout";
import { P as PageMeta } from "./PageMeta-BXulEWcY.js";
import { l as V3Header, h as PinIcon, e as CheckIcon } from "./V3Header-BeIMcMg7.js";
import { V as V3Footer } from "./V3Footer-9z4J1I4x.js";
import { S as STRIPE_APPEARANCE, B as BoekingBetaalformulier } from "./stripeAppearance-DVUcXAUA.js";
import { p as parseSelection, n as normalizeSlot, a as normalizeDays, e as earliestPickupDate, s as serializeSelection, b as pickupSummary, u as usePickupAvailability, f as firstFreeDate, c as pickupTotals, P as PICKUP_PRODUCTS, d as PICKUP_GROUPS, g as PICKUP_PERIODS, l as langhuurKorting, D as Datumkiezer, h as PICKUP_SLOTS, i as PICKUP_BY_KEY } from "./usePickupAvailability-DzPEIhz5.js";
import { u as useSeo } from "./seo-BMvlJeai.js";
import { b as useTaal, u as useCopy, a as useLokaalPad, N as NUMBER_LOCALE, h as formatEuro } from "../main.mjs";
import { v as vertaalPortaal } from "./verhuur.fr-CrIPL5Eo.js";
import { O as ONLINE_DISCOUNT, c as bookingFingerprint, D as DEPOSIT_GROSS } from "./booking-CFp-lxcW.js";
import { c as offerCatalogSchema, b as breadcrumbSchema } from "./schema-VJMHyxOJ.js";
import { b as isValidPhone, i as isValidEmail, a as maskPhone, m as maskEmail } from "./inputMask-BnLinOtl.js";
/* empty css                       */
/* empty css                          */
import "vite-react-ssg";
import "./FontPreload-C6Rzq6ld.js";
import "./verhuur-CgnDb-wO.js";
import "./tarieven-ZrzMF0e-.js";
import "./verhuur-8XCQs1EE.js";
import "./packages-DdkKuPcF.js";
import "./reportBookingEvent-DNN9fzqH.js";
import "lucide-react";
import "./levering-CO7G5c_f.js";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/verhuur/VerhuurAfhalenPage.copy.tsx");
const nl = {
  pompEen: "Graag een condenspomp bij dit toestel.",
  pompMeer: (aantal) => `Graag ${aantal} condenspompen bij deze toestellen.`,
  ontbreekt: {
    toestellen: "Kies minstens één toestel.",
    datum: "Kies een afhaaldatum.",
    datumVol: "Op die datum zijn deze toestellen niet vrij.",
    naam: "Vul uw naam in.",
    telefoon: "Vul een geldig telefoonnummer in.",
    email: "Vul een geldig e-mailadres in.",
    adres: "Vul uw adres in (voor de factuur).",
    firma: "Vul uw bedrijfsnaam in.",
    btw: "Vul uw btw-nummer in.",
    akkoord: "Bevestig de huurvoorwaarden."
  },
  week: "week",
  weken: "weken",
  samenvatting: (units, dagen, weekSuffix) => `${units} toestel${units === 1 ? "" : "len"} · ${dagen} dagen${weekSuffix} · afhalen`,
  nogGeenToestellen: "Nog geen toestellen gekozen",
  nietBevestigd: "Uw betaling is nog niet bevestigd. Duurt dit langer dan een paar minuten, bel ons dan op 03 689 90 65.",
  nietNagekeken: "We konden uw betaling niet nakijken. Bel ons gerust op 03 689 90 65.",
  nietDoorgegeven: "Uw reservatie kon niet doorgegeven worden. Probeer het opnieuw of bel ons op 03 689 90 65.",
  nietGestart: "Betaling kon niet gestart worden. Probeer het opnieuw of bel ons op 03 689 90 65.",
  nietVerstuurd: "Uw reservatie kon niet verstuurd worden. Controleer uw verbinding of bel ons op 03 689 90 65.",
  teVeel: "Te veel aanvragen. Probeer het over een minuut opnieuw.",
  catalogusNaam: "Afhaaltarieven losse toestellen, Aartselaar",
  kruimelHome: "Home",
  kruimelToestellen: "Toestellen",
  chip: "Zelf afhalen · Aartselaar",
  h1: "Losse toestellen huren en zelf afhalen.",
  intro: (pct, voorschot) => `Stel zelf samen wat u nodig heeft, bouwdrogers, ventilatoren en kachels, en haal alles af in ons magazijn. Betaal online met ${pct}% korting, of zet uw reservatie vast met ${voorschot} en reken de rest af bij de afhaling.`,
  teamAlt: "Het Vernast-team met bouwdrogers en ventilatoren",
  stap1: "1. Kies uw toestellen",
  stap1Sub: "Kies per categorie het aantal dat u nodig heeft. Alle prijzen zijn per dag, excl. btw.",
  gekozen: (n) => `${n} gekozen`,
  perDag: "per dag",
  nietBeschikbaar: "Tijdelijk niet beschikbaar",
  minder: (kort) => `Minder ${kort}`,
  meer: (kort) => `Meer ${kort}`,
  maxBereikt: (max) => `Wij hebben er ${max}, bel ons voor meer`,
  stap2: "2. Huurperiode & afhaalmoment",
  stap2Sub: "U haalt af en brengt terug in ons magazijn, op weekdagen tussen 7:30 en 17:00.",
  huurperiode: "Huurperiode",
  afhaaldatum: "Afhaaldatum",
  afhaalmoment: "Afhaalmoment",
  datumVol: (datum) => `Op ${datum} is deze samenstelling al ingepland.`,
  eerstVrij: "De eerstvolgende vrije afhaaldatum is",
  nietsVrij: " De komende weken is er niets vrij, bel ons op 03 689 90 65.",
  magazijn: "Vernast Bouwdrogers, magazijn",
  uitleg: "U krijgt bij afhaling korte uitleg over plaatsing en gebruik.",
  stap3: "3. Uw gegevens",
  stap3Sub: "Op naam van wie zetten we de reservatie en de factuur? Uw adres hebben we enkel voor de facturatie nodig, afhalen doet u in ons magazijn.",
  particulier: "Particulier",
  professioneel: "Professioneel",
  naam: "Naam",
  naamPlaceholder: "Voor- en achternaam",
  telefoon: "Telefoon",
  email: "E-mail",
  emailPlaceholder: "naam@voorbeeld.be",
  adres: "Adres",
  adresPlaceholder: "Straat, nr, gemeente",
  bedrijfsnaam: "Bedrijfsnaam",
  bedrijfPlaceholder: "Uw firma bv",
  btwNummer: "Btw-nummer",
  opmerking: "Opmerking (optioneel)",
  opmerkingPlaceholder: "Bv. ik kom met een aanhangwagen",
  pompHint: "Een condenspomp meenemen? Vraag het hier, dan leggen wij er een klaar.",
  pompLink: "Wat doet een condenspomp?",
  akkoord: "Ik ga akkoord met de huurvoorwaarden en breng de toestellen proper en onbeschadigd terug.",
  stap4: "4. Hoe wilt u betalen?",
  stap4Sub: (voorschot) => `Dezelfde twee keuzes als bij een pakket: alles vooraf met korting, of uw reservatie vastzetten met ${voorschot} en de rest afrekenen wanneer u de toestellen komt halen.`,
  korting: (pct) => `${pct}% korting`,
  volledigOnline: "Volledig online betalen",
  volledigOnlineUitleg: (pct) => `Betaal nu met Bancontact, kaart, Apple Pay of iDEAL. U krijgt ${pct}% korting op uw hele reservatie en uw factuur staat meteen in uw mailbox.`,
  uBespaart: (bedrag) => `U bespaart ${bedrag}`,
  voorschotKop: (bedrag) => `${bedrag} nu, rest bij afhaling`,
  voorschotUitleg: (bedrag) => `Bevestig uw reservatie met ${bedrag}. Het saldo scant en betaalt u in ons magazijn wanneer u de toestellen komt halen: Bancontact, kaart of Apple Pay.`,
  factuurNaBetaling: "Factuur na volledige betaling",
  betaalKop: "Betaal uw afhaalreservatie",
  betaalSub: (bedrag) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "U betaalt ",
    /* @__PURE__ */ jsx("b", { children: bedrag }),
    " met Apple Pay, Bancontact, kaart, iDEAL of Klarna. De betaling loopt beveiligd via Stripe, wij zien uw kaartgegevens nooit."
  ] }),
  saldoBijAfhaling: (bedrag) => /* @__PURE__ */ jsxs(Fragment, { children: [
    " ",
    "Het saldo van ",
    /* @__PURE__ */ jsx("b", { children: bedrag }),
    " rekent u af bij de afhaling."
  ] }),
  klaar: (datum, slot) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "Uw toestellen liggen klaar in Aartselaar op ",
    /* @__PURE__ */ jsx("b", { children: datum }),
    " tussen ",
    /* @__PURE__ */ jsx("b", { children: slot }),
    " zodra de betaling bevestigd is."
  ] }),
  terugGegevens: "Terug naar mijn gegevens",
  geduldKop: "Even geduld",
  geduldSub: "We kijken uw betaling na bij Stripe en zetten uw reservatie klaar.",
  vastKop: "Uw afhaalreservatie staat vast",
  vastSub: "Alles ligt voor u klaar in ons magazijn in Aartselaar op het gekozen moment. U ontvangt zo een bevestiging per e-mail met de afhaalinstructies en het adres.",
  vastSaldo: (bedrag) => /* @__PURE__ */ jsxs(Fragment, { children: [
    " ",
    "Het saldo van ",
    /* @__PURE__ */ jsx("b", { children: bedrag }),
    " rekent u af bij de afhaling: u scant onze QR-code en betaalt met Bancontact, kaart of Apple Pay."
  ] }),
  referentie: "Referentie",
  uwReservatie: "Uw afhaalreservatie",
  kiesLinks: "Kies links uw toestellen",
  dagAfkorting: "d",
  afhalenTerug: (start, slot, einde) => `Afhalen ${start} (${slot}) → terug ${einde}`,
  langhuurkorting: (pct) => `Langhuurkorting (${pct}%)`,
  kortingOnline: (pct) => `Korting online betalen (${pct}%)`,
  btw: "Btw 21%",
  totaalIncl: "Totaal reservatie incl. btw",
  nuTeBetalen: "Nu te betalen",
  incl: "incl. btw",
  evenGeduld: "Even geduld…",
  betalen: (bedrag) => `Betalen, ${bedrag}`,
  notaOnline: (bedrag) => `Huur ${bedrag} excl. btw · veilig betalen via Stripe`,
  notaAfhaling: (totaal, saldo) => `Reservatie ${totaal} incl. btw · saldo ${saldo} bij de afhaling`
};
const fr = {
  pompEen: "Merci de prévoir une pompe à condensats avec cet appareil.",
  pompMeer: (aantal) => `Merci de prévoir ${aantal} pompes à condensats avec ces appareils.`,
  ontbreekt: {
    toestellen: "Choisissez au moins un appareil.",
    datum: "Choisissez une date d'enlèvement.",
    datumVol: "Ces appareils ne sont pas libres à cette date.",
    naam: "Indiquez votre nom.",
    telefoon: "Indiquez un numéro de téléphone valable.",
    email: "Indiquez une adresse e-mail valable.",
    adres: "Indiquez votre adresse (pour la facture).",
    firma: "Indiquez le nom de votre société.",
    btw: "Indiquez votre numéro de TVA.",
    akkoord: "Acceptez les conditions de location."
  },
  week: "semaine",
  weken: "semaines",
  samenvatting: (units, dagen, weekSuffix) => `${units} appareil${units === 1 ? "" : "s"} · ${dagen} jours${weekSuffix} · enlèvement`,
  nogGeenToestellen: "Aucun appareil choisi",
  nietBevestigd: "Votre paiement n'est pas encore confirmé. Si cela prend plus de quelques minutes, appelez-nous au 03 689 90 65.",
  nietNagekeken: "Nous n'avons pas pu vérifier votre paiement. N'hésitez pas à nous appeler au 03 689 90 65.",
  nietDoorgegeven: "Votre réservation n'a pas pu être transmise. Réessayez ou appelez-nous au 03 689 90 65.",
  nietGestart: "Le paiement n'a pas pu démarrer. Réessayez ou appelez-nous au 03 689 90 65.",
  nietVerstuurd: "Votre réservation n'a pas pu être envoyée. Vérifiez votre connexion ou appelez-nous au 03 689 90 65.",
  teVeel: "Trop de demandes. Réessayez dans une minute.",
  catalogusNaam: "Tarifs d'enlèvement des appareils à l'unité, Aartselaar",
  kruimelHome: "Accueil",
  kruimelToestellen: "Appareils",
  chip: "Enlèvement · Aartselaar",
  h1: "Louer des appareils à l'unité et les enlever vous-même.",
  intro: (pct, voorschot) => `Composez vous-même ce dont vous avez besoin, déshumidificateurs de chantier, ventilateurs et chauffages, et enlevez le tout dans notre entrepôt. Payez en ligne avec ${pct} % de réduction, ou bloquez votre réservation avec ${voorschot} et réglez le reste à l'enlèvement.`,
  teamAlt: "L'équipe Vernast avec des déshumidificateurs de chantier et des ventilateurs",
  stap1: "1. Choisissez vos appareils",
  stap1Sub: "Choisissez par catégorie le nombre dont vous avez besoin. Tous les prix sont par jour, HTVA.",
  gekozen: (n) => `${n} choisi${n === 1 ? "" : "s"}`,
  perDag: "par jour",
  nietBeschikbaar: "Temporairement indisponible",
  minder: (kort) => `${kort} en moins`,
  meer: (kort) => `${kort} en plus`,
  maxBereikt: (max) => `Nous en avons ${max}, appelez-nous pour davantage`,
  stap2: "2. Période de location & moment d'enlèvement",
  stap2Sub: "Vous enlevez et rapportez le matériel dans notre entrepôt, les jours ouvrables entre 7 h 30 et 17 h.",
  huurperiode: "Période de location",
  afhaaldatum: "Date d'enlèvement",
  afhaalmoment: "Moment d'enlèvement",
  datumVol: (datum) => `Le ${datum}, cette composition est déjà planifiée.`,
  eerstVrij: "La première date d'enlèvement libre est le",
  nietsVrij: " Rien n'est libre dans les semaines à venir, appelez-nous au 03 689 90 65.",
  magazijn: "Vernast Bouwdrogers, entrepôt",
  uitleg: "À l'enlèvement, nous vous expliquons brièvement l'installation et l'utilisation.",
  stap3: "3. Vos coordonnées",
  stap3Sub: "Au nom de qui établissons-nous la réservation et la facture ? Nous n'avons besoin de votre adresse que pour la facturation : l'enlèvement se fait dans notre entrepôt.",
  particulier: "Particulier",
  professioneel: "Professionnel",
  naam: "Nom",
  naamPlaceholder: "Prénom et nom",
  telefoon: "Téléphone",
  email: "E-mail",
  emailPlaceholder: "nom@exemple.be",
  adres: "Adresse",
  adresPlaceholder: "Rue, n°, commune",
  bedrijfsnaam: "Nom de la société",
  bedrijfPlaceholder: "Votre société srl",
  btwNummer: "Numéro de TVA",
  opmerking: "Remarque (facultatif)",
  opmerkingPlaceholder: "Par ex. je viens avec une remorque",
  pompHint: "Emporter une pompe à condensats ? Demandez-le ici, nous en préparons une.",
  pompLink: "À quoi sert une pompe à condensats ?",
  akkoord: "J'accepte les conditions de location et je rapporte les appareils propres et en bon état.",
  stap4: "4. Comment souhaitez-vous payer ?",
  stap4Sub: (voorschot) => `Les deux mêmes choix que pour un pack : tout payer à l'avance avec réduction, ou bloquer votre réservation avec ${voorschot} et régler le reste quand vous venez chercher les appareils.`,
  korting: (pct) => `${pct} % de réduction`,
  volledigOnline: "Tout payer en ligne",
  volledigOnlineUitleg: (pct) => `Payez maintenant par Bancontact, carte, Apple Pay ou iDEAL. Vous recevez ${pct} % de réduction sur l'ensemble de votre réservation et votre facture arrive tout de suite dans votre boîte mail.`,
  uBespaart: (bedrag) => `Vous économisez ${bedrag}`,
  voorschotKop: (bedrag) => `${bedrag} maintenant, le reste à l'enlèvement`,
  voorschotUitleg: (bedrag) => `Confirmez votre réservation avec ${bedrag}. Vous scannez et payez le solde dans notre entrepôt quand vous venez chercher les appareils : Bancontact, carte ou Apple Pay.`,
  factuurNaBetaling: "Facture après paiement complet",
  betaalKop: "Payez votre réservation d'enlèvement",
  betaalSub: (bedrag) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "Vous payez ",
    /* @__PURE__ */ jsx("b", { children: bedrag }),
    " par Apple Pay, Bancontact, carte, iDEAL ou Klarna. Le paiement est sécurisé par Stripe : nous ne voyons jamais les données de votre carte."
  ] }),
  saldoBijAfhaling: (bedrag) => /* @__PURE__ */ jsxs(Fragment, { children: [
    " ",
    "Vous réglez le solde de ",
    /* @__PURE__ */ jsx("b", { children: bedrag }),
    " à l'enlèvement."
  ] }),
  klaar: (datum, slot) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "Vos appareils vous attendent à Aartselaar le ",
    /* @__PURE__ */ jsx("b", { children: datum }),
    " entre ",
    /* @__PURE__ */ jsx("b", { children: slot }),
    " dès que le paiement est confirmé."
  ] }),
  terugGegevens: "Retour à mes coordonnées",
  geduldKop: "Un instant",
  geduldSub: "Nous vérifions votre paiement chez Stripe et préparons votre réservation.",
  vastKop: "Votre réservation d'enlèvement est confirmée",
  vastSub: "Tout vous attend dans notre entrepôt d'Aartselaar au moment choisi. Vous recevez dans un instant une confirmation par e-mail avec les instructions d'enlèvement et l'adresse.",
  vastSaldo: (bedrag) => /* @__PURE__ */ jsxs(Fragment, { children: [
    " ",
    "Vous réglez le solde de ",
    /* @__PURE__ */ jsx("b", { children: bedrag }),
    " à l'enlèvement : vous scannez notre code QR et payez par Bancontact, carte ou Apple Pay."
  ] }),
  referentie: "Référence",
  uwReservatie: "Votre réservation d'enlèvement",
  kiesLinks: "Choisissez vos appareils à gauche",
  dagAfkorting: "j",
  afhalenTerug: (start, slot, einde) => `Enlèvement ${start} (${slot}) → retour ${einde}`,
  langhuurkorting: (pct) => `Réduction longue durée (${pct} %)`,
  kortingOnline: (pct) => `Réduction paiement en ligne (${pct} %)`,
  btw: "TVA 21 %",
  totaalIncl: "Total de la réservation TVAC",
  nuTeBetalen: "À payer maintenant",
  incl: "TVAC",
  evenGeduld: "Un instant…",
  betalen: (bedrag) => `Payer ${bedrag}`,
  notaOnline: (bedrag) => `Location ${bedrag} HTVA · paiement sécurisé via Stripe`,
  notaAfhaling: (totaal, saldo) => `Réservation ${totaal} TVAC · solde ${saldo} à l'enlèvement`
};
const en = {
  pompEen: "Please include a condensate pump with this unit.",
  pompMeer: (aantal) => `Please include ${aantal} condensate pumps with these units.`,
  ontbreekt: {
    toestellen: "Choose at least one unit.",
    datum: "Choose a collection date.",
    datumVol: "These units are not available on that date.",
    naam: "Enter your name.",
    telefoon: "Enter a valid phone number.",
    email: "Enter a valid email address.",
    adres: "Enter your address (for the invoice).",
    firma: "Enter your company name.",
    btw: "Enter your VAT number.",
    akkoord: "Confirm the rental terms."
  },
  week: "week",
  weken: "weeks",
  samenvatting: (units, dagen, weekSuffix) => `${units} unit${units === 1 ? "" : "s"} · ${dagen} days${weekSuffix} · collection`,
  nogGeenToestellen: "No units chosen yet",
  nietBevestigd: "Your payment has not been confirmed yet. If this takes longer than a few minutes, call us on 03 689 90 65.",
  nietNagekeken: "We could not check your payment. Feel free to call us on 03 689 90 65.",
  nietDoorgegeven: "Your booking could not be submitted. Please try again or call us on 03 689 90 65.",
  nietGestart: "Payment could not be started. Please try again or call us on 03 689 90 65.",
  nietVerstuurd: "Your booking could not be sent. Check your connection or call us on 03 689 90 65.",
  teVeel: "Too many requests. Please try again in a minute.",
  catalogusNaam: "Collection rates for individual units, Aartselaar",
  kruimelHome: "Home",
  kruimelToestellen: "Equipment",
  chip: "Self-collection · Aartselaar",
  h1: "Hire individual units and collect them yourself.",
  intro: (pct, voorschot) => `Put together what you need, construction dehumidifiers, fans and heaters, and collect everything from our warehouse. Pay online with ${pct}% discount, or secure your booking with ${voorschot} and pay the rest on collection.`,
  teamAlt: "The Vernast team with construction dehumidifiers and fans",
  stap1: "1. Choose your units",
  stap1Sub: "Choose how many you need in each category. All prices are per day, excl. VAT.",
  gekozen: (n) => `${n} chosen`,
  perDag: "per day",
  nietBeschikbaar: "Temporarily unavailable",
  minder: (kort) => `Fewer ${kort}`,
  meer: (kort) => `More ${kort}`,
  maxBereikt: (max) => `We have ${max}, call us for more`,
  stap2: "2. Rental period & collection time",
  stap2Sub: "You collect from and return to our warehouse, on weekdays between 7:30 and 17:00.",
  huurperiode: "Rental period",
  afhaaldatum: "Collection date",
  afhaalmoment: "Collection time",
  datumVol: (datum) => `This combination is already booked on ${datum}.`,
  eerstVrij: "The next available collection date is",
  nietsVrij: " Nothing is available in the coming weeks, call us on 03 689 90 65.",
  magazijn: "Vernast Bouwdrogers, warehouse",
  uitleg: "On collection you get a short explanation of setup and use.",
  stap3: "3. Your details",
  stap3Sub: "Whose name should the booking and invoice be in? We only need your address for invoicing, collection is at our warehouse.",
  particulier: "Private",
  professioneel: "Business",
  naam: "Name",
  naamPlaceholder: "First and last name",
  telefoon: "Phone",
  email: "Email",
  emailPlaceholder: "name@example.com",
  adres: "Address",
  adresPlaceholder: "Street, no., town",
  bedrijfsnaam: "Company name",
  bedrijfPlaceholder: "Your company Ltd",
  btwNummer: "VAT number",
  opmerking: "Note (optional)",
  opmerkingPlaceholder: "E.g. I'm coming with a trailer",
  pompHint: "Taking a condensate pump? Ask for it here and we will have one ready.",
  pompLink: "What does a condensate pump do?",
  akkoord: "I agree to the rental terms and will return the units clean and undamaged.",
  stap4: "4. How would you like to pay?",
  stap4Sub: (voorschot) => `The same two options as with a package: everything up front with a discount, or secure your booking with ${voorschot} and settle the rest when you come to collect the units.`,
  korting: (pct) => `${pct}% discount`,
  volledigOnline: "Pay in full online",
  volledigOnlineUitleg: (pct) => `Pay now with Bancontact, card, Apple Pay or iDEAL. You get ${pct}% off your entire booking and your invoice lands in your inbox straight away.`,
  uBespaart: (bedrag) => `You save ${bedrag}`,
  voorschotKop: (bedrag) => `${bedrag} now, the rest on collection`,
  voorschotUitleg: (bedrag) => `Confirm your booking with ${bedrag}. You scan and pay the balance at our warehouse when you come to collect the units: Bancontact, card or Apple Pay.`,
  factuurNaBetaling: "Invoice after payment in full",
  betaalKop: "Pay for your collection booking",
  betaalSub: (bedrag) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "You pay ",
    /* @__PURE__ */ jsx("b", { children: bedrag }),
    " with Apple Pay, Bancontact, card, iDEAL or Klarna. Payment is handled securely by Stripe, we never see your card details."
  ] }),
  saldoBijAfhaling: (bedrag) => /* @__PURE__ */ jsxs(Fragment, { children: [
    " ",
    "You settle the balance of ",
    /* @__PURE__ */ jsx("b", { children: bedrag }),
    " on collection."
  ] }),
  klaar: (datum, slot) => /* @__PURE__ */ jsxs(Fragment, { children: [
    "Your units will be ready in Aartselaar on ",
    /* @__PURE__ */ jsx("b", { children: datum }),
    " between ",
    /* @__PURE__ */ jsx("b", { children: slot }),
    " once the payment is confirmed."
  ] }),
  terugGegevens: "Back to my details",
  geduldKop: "One moment",
  geduldSub: "We are checking your payment with Stripe and preparing your booking.",
  vastKop: "Your collection booking is confirmed",
  vastSub: "Everything will be ready for you at our warehouse in Aartselaar at the chosen time. You will shortly receive a confirmation email with the collection instructions and the address.",
  vastSaldo: (bedrag) => /* @__PURE__ */ jsxs(Fragment, { children: [
    " ",
    "You settle the balance of ",
    /* @__PURE__ */ jsx("b", { children: bedrag }),
    " on collection: you scan our QR code and pay with Bancontact, card or Apple Pay."
  ] }),
  referentie: "Reference",
  uwReservatie: "Your collection booking",
  kiesLinks: "Choose your units on the left",
  dagAfkorting: "d",
  afhalenTerug: (start, slot, einde) => `Collect ${start} (${slot}) → return ${einde}`,
  langhuurkorting: (pct) => `Long-term discount (${pct}%)`,
  kortingOnline: (pct) => `Online payment discount (${pct}%)`,
  btw: "VAT 21%",
  totaalIncl: "Booking total incl. VAT",
  nuTeBetalen: "To pay now",
  incl: "incl. VAT",
  evenGeduld: "One moment…",
  betalen: (bedrag) => `Pay ${bedrag}`,
  notaOnline: (bedrag) => `Rental ${bedrag} excl. VAT · secure payment via Stripe`,
  notaAfhaling: (totaal, saldo) => `Booking ${totaal} incl. VAT · balance ${saldo} on collection`
};
const AFHAAL_COPY = { nl, fr, en };
const GROEP = {
  fr: {
    Bouwdrogers: "Déshumidificateurs de chantier",
    Ventilatoren: "Ventilateurs",
    "Elektrische kachels": "Chauffages électriques"
  },
  en: {
    Bouwdrogers: "Construction dehumidifiers",
    Ventilatoren: "Fans",
    "Elektrische kachels": "Electric heaters"
  }
};
const SPEC = {
  fr: {
    reservoir: "réservoir",
    pompklaar: "prêt pour pompe",
    "3 standen": "3 vitesses",
    thermostaat: "thermostat",
    adsorptie: "adsorption",
    "via slangen": "par gaines",
    "koude ruimtes": "pièces froides"
  },
  en: {
    reservoir: "tank",
    pompklaar: "pump-ready",
    "3 standen": "3 speeds",
    thermostaat: "thermostat",
    adsorptie: "desiccant",
    "via slangen": "ducted",
    "koude ruimtes": "cold rooms"
  }
};
function getalInTaal(getal, taal) {
  if (taal === "fr") return getal;
  return getal.replace(/(\d)\s(\d{3})/g, "$1,$2").replace(/(\d),(\d{1,2})(?!\d)/g, "$1.$2");
}
function specInTaal(spec, taal) {
  if (SPEC[taal][spec]) return SPEC[taal][spec];
  const perDag = /^(\d+) l \/ 24 u$/.exec(spec);
  if (perDag) return `${perDag[1]} l / 24 h`;
  const tot = /^tot (.+)$/.exec(spec);
  if (tot) return `${taal === "fr" ? "jusqu'à" : "up to"} ${getalInTaal(tot[1], taal)}`;
  const debiet = /^(.+) m³\/u$/.exec(spec);
  if (debiet) return `${getalInTaal(debiet[1], taal)} m³/h`;
  return getalInTaal(spec, taal);
}
function groepInTaal(groep, taal) {
  return taal === "nl" ? groep : GROEP[taal][groep] ?? groep;
}
function afhaalProductInTaal(product, taal) {
  if (taal === "nl") return product;
  return {
    ...product,
    // `group` blijft Nederlands: de pagina groepeert erop. Toon hem via `groepInTaal`.
    name: vertaalPortaal(product.name, taal),
    sub: vertaalPortaal(product.sub, taal),
    specs: product.specs.map((spec) => specInTaal(spec, taal))
  };
}
function periodeInTaal(dagen, label, taal) {
  if (taal === "nl") return label;
  const weken = dagen / 7;
  if (taal === "en") return Number.isInteger(weken) ? `${weken} week${weken === 1 ? "" : "s"}` : `${dagen} days`;
  return Number.isInteger(weken) ? `${weken} semaine${weken === 1 ? "" : "s"}` : `${dagen} jours`;
}
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/pages/verhuur/VerhuurAfhalenPage.tsx");
const euroIn = (n, taal) => taal === "nl" ? `€ ${n.toLocaleString("nl-BE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : formatEuro(n, taal);
const shortDate = (d, taal) => d.toLocaleDateString(NUMBER_LOCALE[taal], { day: "numeric", month: "short" });
const longDate = (d, taal) => d.toLocaleDateString(NUMBER_LOCALE[taal], { weekday: "long", day: "numeric", month: "long" });
const STORAGE_KEY = "vernast-afhaal";
function readStored() {
  if (typeof sessionStorage === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
function writeStored(value) {
  if (typeof sessionStorage === "undefined") return;
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch {
  }
}
function pompVraag(raw, t) {
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
  const euro = (n) => euroIn(n, taal);
  const preset = useMemo(() => {
    const lines = parseSelection(searchParams.get("d"));
    const quantities2 = {};
    for (const line of lines) quantities2[line.product.key] = line.qty;
    return {
      quantities: quantities2,
      days: normalizeDays(searchParams.get("days")),
      slot: normalizeSlot(searchParams.get("slot")),
      date: searchParams.get("date") ?? "",
      note: pompVraag(searchParams.get("pomp"), t)
    };
  }, []);
  const [quantities, setQuantities] = useState(preset.quantities);
  const [days, setDays] = useState(preset.days);
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState(preset.slot);
  const [customerType, setCustomerType] = useState("part");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [address, setAddress] = useState("");
  const [company, setCompany] = useState("");
  const [vat, setVat] = useState("");
  const [note, setNote] = useState(preset.note);
  const [agreed, setAgreed] = useState(false);
  const [payment, setPayment] = useState("online");
  const [reference, setReference] = useState(null);
  const [balanceDue, setBalanceDue] = useState(0);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [showMissing, setShowMissing] = useState(false);
  const [checking, setChecking] = useState(() => searchParams.has("session_id"));
  const [session, setSession] = useState(null);
  const [stripeJs, setStripeJs] = useState(null);
  const [payOpen, setPayOpen] = useState(false);
  const [minDate, setMinDate] = useState("");
  useEffect(() => {
    const min = earliestPickupDate();
    setMinDate(min);
    setDate((current) => {
      const wanted = current || preset.date;
      return wanted >= min ? wanted : min;
    });
  }, []);
  const formRef = useRef(null);
  const qty = (key) => quantities[key] ?? 0;
  const groupCount = (group) => PICKUP_PRODUCTS.filter((p) => p.group === group).reduce((total, p) => total + qty(p.key), 0);
  const step = (key, delta) => setQuantities((current) => ({
    ...current,
    [key]: Math.max(0, Math.min(PICKUP_BY_KEY[key]?.max ?? 0, (current[key] ?? 0) + delta))
  }));
  const selection = useMemo(() => serializeSelection(quantities), [quantities]);
  const summary = useMemo(() => pickupSummary(parseSelection(selection), days), [selection, days]);
  const { blocked, horizonDays } = usePickupAvailability(selection, days);
  const dateBlocked = Boolean(date) && blocked.includes(date);
  const suggestion = dateBlocked ? firstFreeDate(date, blocked, horizonDays) : null;
  const totals = useMemo(() => pickupTotals(summary.net, payment), [summary.net, payment]);
  const savings = useMemo(
    () => Math.round(
      (pickupTotals(summary.net, "afhaling").gross - pickupTotals(summary.net, "online").gross) * 100
    ) / 100,
    [summary.net]
  );
  const missing = [];
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
    const start = /* @__PURE__ */ new Date(`${date}T00:00:00`);
    if (Number.isNaN(start.getTime())) return null;
    const end = new Date(start);
    end.setDate(end.getDate() + days);
    return { start, end };
  }, [date, days]);
  useEffect(() => {
    if (reference || payOpen) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [reference, payOpen]);
  useEffect(() => {
    if (summary.units === 0) return;
    void import("@stripe/stripe-js");
  }, [summary.units]);
  useEffect(() => {
    const stale = readStored();
    if (!stale?.sessionId || !stale.email || searchParams.has("session_id")) return;
    void fetch("/api/booking-release", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ sessionId: stale.sessionId, email: stale.email })
    }).catch(() => {
    });
  }, []);
  useEffect(() => {
    const sessionId = searchParams.get("session_id");
    if (!sessionId) return;
    let cancelled = false;
    fetch(`/api/checkout-session?id=${encodeURIComponent(sessionId)}`).then((response) => response.json()).then((result) => {
      if (cancelled) return;
      if (result.paid && result.reference) {
        setReference(result.reference);
        setBalanceDue(Number(result.order?.balance) || 0);
      } else
        setError(t.nietBevestigd);
    }).catch(() => {
      if (!cancelled) setError(t.nietNagekeken);
    }).finally(() => {
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
      notes: note.trim()
    };
    const fingerprint = bookingFingerprint({ ...order, payment });
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
        body: JSON.stringify({ data: order, payment, previousSessionId: session?.id, taal })
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(response.status === 429 ? t.teVeel : result.error ?? t.nietDoorgegeven);
        setSession((prev) => prev ? { ...prev, clientSecret: "", fingerprint: "" } : null);
        return;
      }
      if (!result.clientSecret || !result.publishableKey || !result.sessionId) {
        setError(t.nietGestart);
        return;
      }
      const { loadStripe } = await import("@stripe/stripe-js");
      setStripeJs(loadStripe(result.publishableKey, { locale: taal }));
      setSession({ id: result.sessionId, clientSecret: result.clientSecret, fingerprint });
      writeStored({ sessionId: result.sessionId, email: mail });
      setPayOpen(true);
    } catch {
      setError(t.nietVerstuurd);
    } finally {
      setBusy(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "vh-pick", children: [
    /* @__PURE__ */ jsx(
      PageMeta,
      {
        ...seo,
        jsonLd: [
          offerCatalogSchema(
            t.catalogusNaam,
            PICKUP_PRODUCTS.map((product) => afhaalProductInTaal(product, taal)).map((product) => ({
              name: product.name,
              description: product.sub,
              path: lp("/verhuur/afhalen"),
              pricePerDay: product.day
            }))
          ),
          breadcrumbSchema([
            { name: t.kruimelHome, path: lp("/") },
            { name: t.kruimelToestellen, path: lp("/verhuur/afhalen") }
          ])
        ]
      }
    ),
    /* @__PURE__ */ jsx(V3Header, { lightAfter: 420, alwaysLightBelow: 900 }),
    /* @__PURE__ */ jsx("section", { className: "lead", children: /* @__PURE__ */ jsxs("div", { className: "wrap lh-grid", children: [
      /* @__PURE__ */ jsxs("div", { className: "lh-copy", children: [
        /* @__PURE__ */ jsx("span", { className: "chip", children: t.chip }),
        /* @__PURE__ */ jsx("h1", { children: t.h1 }),
        /* @__PURE__ */ jsx("p", { children: t.intro(Math.round(ONLINE_DISCOUNT * 100), euro(DEPOSIT_GROSS)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lh-vis", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/vernast/team-tools.webp",
          alt: t.teamAlt,
          width: 1400,
          height: 859,
          fetchPriority: "high",
          decoding: "async"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "wrap shell", children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "main",
          ref: formRef,
          style: reference || checking || payOpen ? { display: "none" } : void 0,
          children: [
            /* @__PURE__ */ jsxs("div", { className: "blk", children: [
              /* @__PURE__ */ jsx("h2", { children: t.stap1 }),
              /* @__PURE__ */ jsx("p", { className: "bs", children: t.stap1Sub }),
              /* @__PURE__ */ jsx("div", { id: "toestellen", children: PICKUP_GROUPS.map((group) => {
                const count = groupCount(group);
                return /* @__PURE__ */ jsxs("div", { className: "gsec", children: [
                  /* @__PURE__ */ jsxs("div", { className: "gsec-h", children: [
                    /* @__PURE__ */ jsx("span", { className: "gname", children: groepInTaal(group, taal) }),
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: `gst${count > 0 ? " ok" : ""}`,
                        style: count > 0 ? void 0 : { display: "none" },
                        children: t.gekozen(count)
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "pgrid", children: PICKUP_PRODUCTS.filter((p) => p.group === group).map((p) => afhaalProductInTaal(p, taal)).map((product) => /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: `pcard${qty(product.key) > 0 ? " has" : ""}`,
                      children: [
                        /* @__PURE__ */ jsx("span", { className: "ph", children: /* @__PURE__ */ jsx("img", { src: product.image, alt: product.name, loading: "lazy" }) }),
                        /* @__PURE__ */ jsxs("span", { className: "pi", children: [
                          /* @__PURE__ */ jsx("b", { children: product.name }),
                          /* @__PURE__ */ jsx("small", { children: product.sub }),
                          /* @__PURE__ */ jsx("span", { className: "sp", children: product.specs.map((spec) => /* @__PURE__ */ jsx("span", { children: spec }, spec)) })
                        ] }),
                        /* @__PURE__ */ jsxs("span", { className: "pr", children: [
                          /* @__PURE__ */ jsxs("span", { className: "px", children: [
                            euro(product.day),
                            " ",
                            /* @__PURE__ */ jsx("i", { children: t.perDag })
                          ] }),
                          product.max === 0 ? /* @__PURE__ */ jsx("span", { className: "stp-uit", children: t.nietBeschikbaar }) : /* @__PURE__ */ jsxs("span", { className: "stp", children: [
                            /* @__PURE__ */ jsx(
                              "button",
                              {
                                type: "button",
                                "aria-label": t.minder(product.short),
                                onClick: () => step(product.key, -1),
                                children: "−"
                              }
                            ),
                            /* @__PURE__ */ jsx("span", { children: qty(product.key) }),
                            /* @__PURE__ */ jsx(
                              "button",
                              {
                                type: "button",
                                "aria-label": t.meer(product.short),
                                disabled: qty(product.key) >= product.max,
                                title: qty(product.key) >= product.max ? t.maxBereikt(product.max) : void 0,
                                onClick: () => step(product.key, 1),
                                children: "+"
                              }
                            )
                          ] })
                        ] })
                      ]
                    },
                    product.key
                  )) })
                ] }, group);
              }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "blk", children: [
              /* @__PURE__ */ jsx("h2", { children: t.stap2 }),
              /* @__PURE__ */ jsx("p", { className: "bs", children: t.stap2Sub }),
              /* @__PURE__ */ jsxs("div", { className: "frow", children: [
                /* @__PURE__ */ jsxs("div", { className: "fld", children: [
                  /* @__PURE__ */ jsx("label", { htmlFor: "aDays", children: t.huurperiode }),
                  /* @__PURE__ */ jsx(
                    "select",
                    {
                      id: "aDays",
                      value: days,
                      onChange: (event) => setDays(Number(event.target.value)),
                      children: PICKUP_PERIODS.map(([value, label]) => {
                        const pct = Math.round(langhuurKorting(value) * 100);
                        return /* @__PURE__ */ jsxs("option", { value, children: [
                          periodeInTaal(value, label, taal),
                          pct > 0 ? ` · −${pct}${taal === "fr" ? " " : ""}%` : ""
                        ] }, value);
                      })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "fld", children: [
                  /* @__PURE__ */ jsx("label", { htmlFor: "aDate", children: t.afhaaldatum }),
                  /* @__PURE__ */ jsx(
                    Datumkiezer,
                    {
                      id: "aDate",
                      value: date,
                      min: minDate,
                      blocked,
                      rangeDays: days,
                      rangeLabel: (() => {
                        const periode = PICKUP_PERIODS.find(([v]) => v === days);
                        return periode ? periodeInTaal(periode[0], periode[1], taal) : void 0;
                      })(),
                      invalid: dateBlocked,
                      describedBy: dateBlocked ? "aDateWarn" : void 0,
                      onChange: setDate
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "fld", children: [
                  /* @__PURE__ */ jsx("label", { htmlFor: "aSlot", children: t.afhaalmoment }),
                  /* @__PURE__ */ jsx("select", { id: "aSlot", value: slot, onChange: (event) => setSlot(event.target.value), children: PICKUP_SLOTS.map((option) => /* @__PURE__ */ jsx("option", { children: option }, option)) })
                ] })
              ] }),
              dateBlocked && /* @__PURE__ */ jsxs("div", { className: "datewarn", id: "aDateWarn", role: "status", children: [
                /* @__PURE__ */ jsx("b", { children: t.datumVol(
                  (/* @__PURE__ */ new Date(`${date}T00:00:00`)).toLocaleDateString(NUMBER_LOCALE[taal], {
                    day: "numeric",
                    month: "long"
                  })
                ) }),
                suggestion ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  " ",
                  t.eerstVrij,
                  " ",
                  /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setDate(suggestion), children: (/* @__PURE__ */ new Date(`${suggestion}T00:00:00`)).toLocaleDateString(NUMBER_LOCALE[taal], {
                    day: "numeric",
                    month: "long"
                  }) }),
                  "."
                ] }) : t.nietsVrij
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "adres", children: [
                /* @__PURE__ */ jsx(PinIcon, { size: 17 }),
                /* @__PURE__ */ jsxs("span", { children: [
                  /* @__PURE__ */ jsx("b", { children: t.magazijn }),
                  /* @__PURE__ */ jsx("br", {}),
                  "Boomsesteenweg 12, Unit 11 · 2630 Aartselaar",
                  /* @__PURE__ */ jsx("br", {}),
                  t.uitleg
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "blk", children: [
              /* @__PURE__ */ jsx("h2", { children: t.stap3 }),
              /* @__PURE__ */ jsx("p", { className: "bs", children: t.stap3Sub }),
              /* @__PURE__ */ jsxs("div", { className: "ktype", children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    className: customerType === "part" ? "active" : void 0,
                    onClick: () => setCustomerType("part"),
                    children: t.particulier
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    className: customerType === "pro" ? "active" : void 0,
                    onClick: () => setCustomerType("pro"),
                    children: t.professioneel
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "frow two", children: [
                /* @__PURE__ */ jsxs("div", { className: "fld", children: [
                  /* @__PURE__ */ jsx("label", { htmlFor: "cNaam", children: t.naam }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      id: "cNaam",
                      placeholder: t.naamPlaceholder,
                      autoComplete: "name",
                      value: name,
                      onChange: (event) => setName(event.target.value)
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "fld", children: [
                  /* @__PURE__ */ jsx("label", { htmlFor: "cTel", children: t.telefoon }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "tel",
                      id: "cTel",
                      inputMode: "tel",
                      autoComplete: "tel",
                      placeholder: "0470 00 00 00",
                      value: phone,
                      onChange: (event) => setPhone(maskPhone(event.target.value))
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "frow two", style: { marginTop: 14 }, children: [
                /* @__PURE__ */ jsxs("div", { className: "fld", children: [
                  /* @__PURE__ */ jsx("label", { htmlFor: "cMail", children: t.email }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "email",
                      id: "cMail",
                      inputMode: "email",
                      autoComplete: "email",
                      autoCapitalize: "none",
                      spellCheck: false,
                      placeholder: t.emailPlaceholder,
                      value: mail,
                      onChange: (event) => setMail(maskEmail(event.target.value))
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "fld", children: [
                  /* @__PURE__ */ jsx("label", { htmlFor: "cAdres", children: t.adres }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      id: "cAdres",
                      placeholder: t.adresPlaceholder,
                      autoComplete: "street-address",
                      value: address,
                      onChange: (event) => setAddress(event.target.value)
                    }
                  )
                ] })
              ] }),
              customerType === "pro" && /* @__PURE__ */ jsxs("div", { className: "frow two", style: { marginTop: 14 }, children: [
                /* @__PURE__ */ jsxs("div", { className: "fld", children: [
                  /* @__PURE__ */ jsx("label", { htmlFor: "cFirma", children: t.bedrijfsnaam }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      id: "cFirma",
                      placeholder: t.bedrijfPlaceholder,
                      value: company,
                      onChange: (event) => setCompany(event.target.value)
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "fld", children: [
                  /* @__PURE__ */ jsx("label", { htmlFor: "cBtw", children: t.btwNummer }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      id: "cBtw",
                      placeholder: "BE 0123.456.789",
                      value: vat,
                      onChange: (event) => setVat(event.target.value)
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "fld", style: { marginTop: 14 }, children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "cNota", children: t.opmerking }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    id: "cNota",
                    placeholder: t.opmerkingPlaceholder,
                    value: note,
                    onChange: (event) => setNote(event.target.value)
                  }
                ),
                /* @__PURE__ */ jsxs("p", { className: "pomphint", children: [
                  t.pompHint,
                  " ",
                  /* @__PURE__ */ jsx(Link, { to: lp("/verhuur/toebehoren/condenspomp"), children: t.pompLink })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("label", { className: "chk", children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "checkbox",
                    id: "cAkkoord",
                    checked: agreed,
                    onChange: (event) => setAgreed(event.target.checked)
                  }
                ),
                " ",
                t.akkoord
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "blk", children: [
              /* @__PURE__ */ jsx("h2", { children: t.stap4 }),
              /* @__PURE__ */ jsx("p", { className: "bs", children: t.stap4Sub(euro(DEPOSIT_GROSS)) }),
              /* @__PURE__ */ jsxs("div", { className: "payopts", children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    type: "button",
                    className: `payopt${payment === "online" ? " sel" : ""}`,
                    onClick: () => setPayment("online"),
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "pob", children: t.korting(Math.round(ONLINE_DISCOUNT * 100)) }),
                      /* @__PURE__ */ jsx("b", { children: t.volledigOnline }),
                      /* @__PURE__ */ jsx("span", { children: t.volledigOnlineUitleg(Math.round(ONLINE_DISCOUNT * 100)) }),
                      savings > 0 && /* @__PURE__ */ jsx("span", { className: "pos", children: t.uBespaart(euro(savings)) })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    type: "button",
                    className: `payopt${payment === "afhaling" ? " sel" : ""}`,
                    onClick: () => setPayment("afhaling"),
                    children: [
                      /* @__PURE__ */ jsx("b", { children: t.voorschotKop(euro(DEPOSIT_GROSS)) }),
                      /* @__PURE__ */ jsx("span", { children: t.voorschotUitleg(euro(DEPOSIT_GROSS)) }),
                      /* @__PURE__ */ jsx("span", { className: "pos", children: t.factuurNaBetaling })
                    ]
                  }
                )
              ] })
            ] })
          ]
        }
      ),
      payOpen && !reference && !checking && /* @__PURE__ */ jsx("div", { className: "main", children: /* @__PURE__ */ jsxs("div", { className: "blk", children: [
        /* @__PURE__ */ jsx("h2", { children: t.betaalKop }),
        /* @__PURE__ */ jsxs("p", { className: "bs", children: [
          t.betaalSub(euro(totals.payableGross)),
          totals.balance > 0 && t.saldoBijAfhaling(euro(totals.balance))
        ] }),
        /* @__PURE__ */ jsx("div", { className: "paybox", children: session?.clientSecret && stripeJs && /* @__PURE__ */ jsx(
          CheckoutElementsProvider,
          {
            stripe: stripeJs,
            options: {
              clientSecret: session.clientSecret,
              elementsOptions: { appearance: STRIPE_APPEARANCE }
            },
            children: /* @__PURE__ */ jsx(BoekingBetaalformulier, { bedrag: euro(totals.payableGross) })
          },
          session.clientSecret
        ) }),
        /* @__PURE__ */ jsxs("p", { className: "paynote", children: [
          /* @__PURE__ */ jsx(CheckIcon, { size: 13 }),
          /* @__PURE__ */ jsx("span", { children: t.klaar(returnDate ? longDate(returnDate.start, taal) : "", slot) })
        ] }),
        error && /* @__PURE__ */ jsx("p", { className: "perr", children: error }),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "btn payback",
            type: "button",
            onClick: () => setPayOpen(false),
            children: t.terugGegevens
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: `done${reference || checking ? " on" : ""}`, children: checking && !reference ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("h2", { children: t.geduldKop }),
        /* @__PURE__ */ jsx("p", { children: t.geduldSub }),
        error && /* @__PURE__ */ jsx("p", { className: "err", children: error })
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("div", { className: "ic", children: /* @__PURE__ */ jsx(CheckIcon, { size: 30 }) }),
        /* @__PURE__ */ jsx("h2", { children: t.vastKop }),
        /* @__PURE__ */ jsxs("p", { children: [
          t.vastSub,
          balanceDue > 0 && t.vastSaldo(euro(balanceDue))
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "ref", children: [
          /* @__PURE__ */ jsx("span", { children: t.referentie }),
          /* @__PURE__ */ jsx("span", { children: reference ?? "" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("aside", { className: "side", style: reference || checking ? { display: "none" } : void 0, children: [
        summary.lines.length > 0 && /* @__PURE__ */ jsx("div", { className: "thumbs", children: summary.lines.map((line) => /* @__PURE__ */ jsxs("span", { className: "thumb", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: line.product.image,
              alt: afhaalProductInTaal(line.product, taal).name,
              loading: "lazy",
              decoding: "async"
            }
          ),
          line.qty > 1 && /* @__PURE__ */ jsxs("i", { children: [
            line.qty,
            "×"
          ] })
        ] }, line.product.key)) }),
        /* @__PURE__ */ jsxs("div", { className: "sh", children: [
          /* @__PURE__ */ jsx("div", { className: "l", children: t.uwReservatie }),
          /* @__PURE__ */ jsx("h3", { children: summaryTitle })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rows", children: [
          summary.lines.length === 0 && /* @__PURE__ */ jsx("div", { className: "srow mut", children: t.kiesLinks }),
          summary.lines.map((line) => /* @__PURE__ */ jsxs("div", { className: "srow", children: [
            /* @__PURE__ */ jsxs("span", { children: [
              line.qty,
              "× ",
              line.product.short,
              " · ",
              days,
              " ",
              t.dagAfkorting
            ] }),
            /* @__PURE__ */ jsx("b", { children: euro(line.product.day * line.qty * days) })
          ] }, line.product.key)),
          returnDate && /* @__PURE__ */ jsxs("div", { className: "srow", children: [
            /* @__PURE__ */ jsx("span", { children: t.afhalenTerug(shortDate(returnDate.start, taal), slot, shortDate(returnDate.end, taal)) }),
            /* @__PURE__ */ jsx("b", { children: "-" })
          ] }),
          summary.longStay > 0 && /* @__PURE__ */ jsxs("div", { className: "srow", children: [
            /* @__PURE__ */ jsx("span", { children: t.langhuurkorting(Math.round(langhuurKorting(days) * 100)) }),
            /* @__PURE__ */ jsxs("b", { children: [
              "− ",
              euro(summary.longStay)
            ] })
          ] }),
          totals.discount > 0 && /* @__PURE__ */ jsxs("div", { className: "srow", children: [
            /* @__PURE__ */ jsx("span", { children: t.kortingOnline(Math.round(ONLINE_DISCOUNT * 100)) }),
            /* @__PURE__ */ jsxs("b", { children: [
              "− ",
              euro(totals.discount)
            ] })
          ] }),
          summary.units > 0 && /* @__PURE__ */ jsxs("div", { className: "srow mut", children: [
            /* @__PURE__ */ jsx("span", { children: t.btw }),
            /* @__PURE__ */ jsx("b", { children: euro(totals.vat) })
          ] }),
          totals.balance > 0 && /* @__PURE__ */ jsxs("div", { className: "srow", children: [
            /* @__PURE__ */ jsx("span", { children: t.totaalIncl }),
            /* @__PURE__ */ jsx("b", { children: euro(totals.gross) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "tot", children: [
          /* @__PURE__ */ jsx("span", { className: "l", children: t.nuTeBetalen }),
          /* @__PURE__ */ jsxs("span", { className: "v", children: [
            euro(totals.payableGross),
            " ",
            /* @__PURE__ */ jsx("small", { children: t.incl })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bf", children: [
          !payOpen && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "btn",
                type: "button",
                disabled: busy || reference !== null,
                onClick: reserve,
                children: busy ? t.evenGeduld : t.betalen(euro(totals.payableGross))
              }
            ),
            showMissing && missing.length > 0 && /* @__PURE__ */ jsx("ul", { className: "miss", children: missing.map((item) => /* @__PURE__ */ jsx("li", { children: item.text }, item.field)) }),
            error && /* @__PURE__ */ jsx("div", { className: "err", children: error })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "nt", children: payment === "online" ? t.notaOnline(euro(totals.net)) : t.notaAfhaling(euro(totals.gross), euro(totals.balance)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(V3Footer, {})
  ] });
};
export {
  VerhuurAfhalenPage as default
};
