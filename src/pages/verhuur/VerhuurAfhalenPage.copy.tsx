/**
 * Teksten van de afhaalpagina (`VerhuurAfhalenPage`), per taal.
 *
 * Zoals bij de boekingswizard: de Nederlandse teksten zijn letterlijk die van
 * vóór de vertaling, en bedragen komen al opgemaakt binnen. Niets hier rekent.
 */
import type { ReactNode } from "react";
import type { Copy } from "@/i18n/useTaal";
import type { Taal } from "@/i18n/taal";
import type { PickupProduct } from "@/data/afhalen";
import { vertaalPortaal } from "@/data/verhuur.fr";
import { toestelLabelIn } from "@/data/navigation";

export interface AfhaalTeksten {
  pompEen: string;
  pompMeer: (aantal: number) => string;
  ontbreekt: {
    toestellen: string;
    datum: string;
    datumVol: string;
    naam: string;
    telefoon: string;
    email: string;
    adres: string;
    firma: string;
    btw: string;
    akkoord: string;
  };
  week: string;
  weken: string;
  samenvatting: (units: number, dagen: number, weekSuffix: string) => string;
  nogGeenToestellen: string;
  nietBevestigd: string;
  nietNagekeken: string;
  nietDoorgegeven: string;
  nietGestart: string;
  nietVerstuurd: string;
  teVeel: string;
  catalogusNaam: string;
  kruimelHome: string;
  kruimelToestellen: string;
  chip: string;
  h1: string;
  intro: (pct: number, voorschot: string) => string;
  teamAlt: string;
  stap1: string;
  stap1Sub: string;
  gekozen: (n: number) => string;
  perDag: string;
  nietBeschikbaar: string;
  minder: (kort: string) => string;
  meer: (kort: string) => string;
  maxBereikt: (max: number) => string;
  stap2: string;
  stap2Sub: string;
  huurperiode: string;
  afhaaldatum: string;
  afhaalmoment: string;
  datumVol: (datum: string) => string;
  eerstVrij: string;
  nietsVrij: string;
  magazijn: string;
  uitleg: string;
  stap3: string;
  stap3Sub: string;
  particulier: string;
  professioneel: string;
  naam: string;
  naamPlaceholder: string;
  telefoon: string;
  email: string;
  emailPlaceholder: string;
  adres: string;
  adresPlaceholder: string;
  bedrijfsnaam: string;
  bedrijfPlaceholder: string;
  btwNummer: string;
  opmerking: string;
  opmerkingPlaceholder: string;
  pompHint: string;
  pompLink: string;
  akkoord: string;
  stap4: string;
  stap4Sub: (voorschot: string) => string;
  korting: (pct: number) => string;
  volledigOnline: string;
  volledigOnlineUitleg: (pct: number) => string;
  uBespaart: (bedrag: string) => string;
  voorschotKop: (bedrag: string) => string;
  voorschotUitleg: (bedrag: string) => string;
  factuurNaBetaling: string;
  betaalKop: string;
  betaalSub: (bedrag: string) => ReactNode;
  saldoBijAfhaling: (bedrag: string) => ReactNode;
  klaar: (datum: string, slot: string) => ReactNode;
  terugGegevens: string;
  geduldKop: string;
  geduldSub: string;
  vastKop: string;
  vastSub: string;
  vastSaldo: (bedrag: string) => ReactNode;
  referentie: string;
  uwReservatie: string;
  kiesLinks: string;
  dagAfkorting: string;
  afhalenTerug: (start: string, slot: string, einde: string) => string;
  langhuurkorting: (pct: number) => string;
  kortingOnline: (pct: number) => string;
  btw: string;
  totaalIncl: string;
  nuTeBetalen: string;
  incl: string;
  evenGeduld: string;
  betalen: (bedrag: string) => string;
  notaOnline: (bedrag: string) => string;
  notaAfhaling: (totaal: string, saldo: string) => string;
}

const nl: AfhaalTeksten = {
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
    akkoord: "Bevestig de huurvoorwaarden.",
  },
  week: "week",
  weken: "weken",
  samenvatting: (units, dagen, weekSuffix) =>
    `${units} toestel${units === 1 ? "" : "len"} · ${dagen} dagen${weekSuffix} · afhalen`,
  nogGeenToestellen: "Nog geen toestellen gekozen",
  nietBevestigd:
    "Uw betaling is nog niet bevestigd. Duurt dit langer dan een paar minuten, bel ons dan op 03 689 90 65.",
  nietNagekeken: "We konden uw betaling niet nakijken. Bel ons gerust op 03 689 90 65.",
  nietDoorgegeven:
    "Uw reservatie kon niet doorgegeven worden. Probeer het opnieuw of bel ons op 03 689 90 65.",
  nietGestart: "Betaling kon niet gestart worden. Probeer het opnieuw of bel ons op 03 689 90 65.",
  nietVerstuurd:
    "Uw reservatie kon niet verstuurd worden. Controleer uw verbinding of bel ons op 03 689 90 65.",
  teVeel: "Te veel aanvragen. Probeer het over een minuut opnieuw.",
  catalogusNaam: "Afhaaltarieven losse toestellen, Aartselaar",
  kruimelHome: "Home",
  kruimelToestellen: "Toestellen",
  chip: "Zelf afhalen · Aartselaar",
  h1: "Losse toestellen huren en zelf afhalen.",
  intro: (pct, voorschot) =>
    `Stel zelf samen wat u nodig heeft, bouwdrogers, ventilatoren en kachels, en haal alles af in ons magazijn. Betaal online met ${pct}% korting, of zet uw reservatie vast met ${voorschot} en reken de rest af bij de afhaling.`,
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
  stap3Sub:
    "Op naam van wie zetten we de reservatie en de factuur? Uw adres hebben we enkel voor de facturatie nodig, afhalen doet u in ons magazijn.",
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
  akkoord:
    "Ik ga akkoord met de huurvoorwaarden en breng de toestellen proper en onbeschadigd terug.",
  stap4: "4. Hoe wilt u betalen?",
  stap4Sub: (voorschot) =>
    `Dezelfde twee keuzes als bij een pakket: alles vooraf met korting, of uw reservatie vastzetten met ${voorschot} en de rest afrekenen wanneer u de toestellen komt halen.`,
  korting: (pct) => `${pct}% korting`,
  volledigOnline: "Volledig online betalen",
  volledigOnlineUitleg: (pct) =>
    `Betaal nu met Bancontact, kaart, Apple Pay of iDEAL. U krijgt ${pct}% korting op uw hele reservatie en uw factuur staat meteen in uw mailbox.`,
  uBespaart: (bedrag) => `U bespaart ${bedrag}`,
  voorschotKop: (bedrag) => `${bedrag} nu, rest bij afhaling`,
  voorschotUitleg: (bedrag) =>
    `Bevestig uw reservatie met ${bedrag}. Het saldo scant en betaalt u in ons magazijn wanneer u de toestellen komt halen: Bancontact, kaart of Apple Pay.`,
  factuurNaBetaling: "Factuur na volledige betaling",
  betaalKop: "Betaal uw afhaalreservatie",
  betaalSub: (bedrag) => (
    <>
      U betaalt <b>{bedrag}</b> met Apple Pay, Bancontact, kaart, iDEAL of Klarna. De betaling loopt
      beveiligd via Stripe, wij zien uw kaartgegevens nooit.
    </>
  ),
  saldoBijAfhaling: (bedrag) => (
    <>
      {" "}
      Het saldo van <b>{bedrag}</b> rekent u af bij de afhaling.
    </>
  ),
  klaar: (datum, slot) => (
    <>
      Uw toestellen liggen klaar in Aartselaar op <b>{datum}</b> tussen <b>{slot}</b> zodra de
      betaling bevestigd is.
    </>
  ),
  terugGegevens: "Terug naar mijn gegevens",
  geduldKop: "Even geduld",
  geduldSub: "We kijken uw betaling na bij Stripe en zetten uw reservatie klaar.",
  vastKop: "Uw afhaalreservatie staat vast",
  vastSub:
    "Alles ligt voor u klaar in ons magazijn in Aartselaar op het gekozen moment. U ontvangt zo een bevestiging per e-mail met de afhaalinstructies en het adres.",
  vastSaldo: (bedrag) => (
    <>
      {" "}
      Het saldo van <b>{bedrag}</b> rekent u af bij de afhaling: u scant onze QR-code en betaalt met
      Bancontact, kaart of Apple Pay.
    </>
  ),
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
  notaAfhaling: (totaal, saldo) => `Reservatie ${totaal} incl. btw · saldo ${saldo} bij de afhaling`,
};

const fr: AfhaalTeksten = {
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
    akkoord: "Acceptez les conditions de location.",
  },
  week: "semaine",
  weken: "semaines",
  samenvatting: (units, dagen, weekSuffix) =>
    `${units} appareil${units === 1 ? "" : "s"} · ${dagen} jours${weekSuffix} · enlèvement`,
  nogGeenToestellen: "Aucun appareil choisi",
  nietBevestigd:
    "Votre paiement n'est pas encore confirmé. Si cela prend plus de quelques minutes, appelez-nous au 03 689 90 65.",
  nietNagekeken: "Nous n'avons pas pu vérifier votre paiement. N'hésitez pas à nous appeler au 03 689 90 65.",
  nietDoorgegeven:
    "Votre réservation n'a pas pu être transmise. Réessayez ou appelez-nous au 03 689 90 65.",
  nietGestart: "Le paiement n'a pas pu démarrer. Réessayez ou appelez-nous au 03 689 90 65.",
  nietVerstuurd:
    "Votre réservation n'a pas pu être envoyée. Vérifiez votre connexion ou appelez-nous au 03 689 90 65.",
  teVeel: "Trop de demandes. Réessayez dans une minute.",
  catalogusNaam: "Tarifs d'enlèvement des appareils à l'unité, Aartselaar",
  kruimelHome: "Accueil",
  kruimelToestellen: "Appareils",
  chip: "Enlèvement · Aartselaar",
  h1: "Louer des appareils à l'unité et les enlever vous-même.",
  intro: (pct, voorschot) =>
    `Composez vous-même ce dont vous avez besoin, déshumidificateurs de chantier, ventilateurs et chauffages, et enlevez le tout dans notre entrepôt. Payez en ligne avec ${pct} % de réduction, ou bloquez votre réservation avec ${voorschot} et réglez le reste à l'enlèvement.`,
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
  stap2Sub:
    "Vous enlevez et rapportez le matériel dans notre entrepôt, les jours ouvrables entre 7 h 30 et 17 h.",
  huurperiode: "Période de location",
  afhaaldatum: "Date d'enlèvement",
  afhaalmoment: "Moment d'enlèvement",
  datumVol: (datum) => `Le ${datum}, cette composition est déjà planifiée.`,
  eerstVrij: "La première date d'enlèvement libre est le",
  nietsVrij: " Rien n'est libre dans les semaines à venir, appelez-nous au 03 689 90 65.",
  magazijn: "Vernast Bouwdrogers, entrepôt",
  uitleg: "À l'enlèvement, nous vous expliquons brièvement l'installation et l'utilisation.",
  stap3: "3. Vos coordonnées",
  stap3Sub:
    "Au nom de qui établissons-nous la réservation et la facture ? Nous n'avons besoin de votre adresse que pour la facturation : l'enlèvement se fait dans notre entrepôt.",
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
  akkoord:
    "J'accepte les conditions de location et je rapporte les appareils propres et en bon état.",
  stap4: "4. Comment souhaitez-vous payer ?",
  stap4Sub: (voorschot) =>
    `Les deux mêmes choix que pour un pack : tout payer à l'avance avec réduction, ou bloquer votre réservation avec ${voorschot} et régler le reste quand vous venez chercher les appareils.`,
  korting: (pct) => `${pct} % de réduction`,
  volledigOnline: "Tout payer en ligne",
  volledigOnlineUitleg: (pct) =>
    `Payez maintenant par Bancontact, carte, Apple Pay ou iDEAL. Vous recevez ${pct} % de réduction sur l'ensemble de votre réservation et votre facture arrive tout de suite dans votre boîte mail.`,
  uBespaart: (bedrag) => `Vous économisez ${bedrag}`,
  voorschotKop: (bedrag) => `${bedrag} maintenant, le reste à l'enlèvement`,
  voorschotUitleg: (bedrag) =>
    `Confirmez votre réservation avec ${bedrag}. Vous scannez et payez le solde dans notre entrepôt quand vous venez chercher les appareils : Bancontact, carte ou Apple Pay.`,
  factuurNaBetaling: "Facture après paiement complet",
  betaalKop: "Payez votre réservation d'enlèvement",
  betaalSub: (bedrag) => (
    <>
      Vous payez <b>{bedrag}</b> par Apple Pay, Bancontact, carte, iDEAL ou Klarna. Le paiement est
      sécurisé par Stripe : nous ne voyons jamais les données de votre carte.
    </>
  ),
  saldoBijAfhaling: (bedrag) => (
    <>
      {" "}
      Vous réglez le solde de <b>{bedrag}</b> à l'enlèvement.
    </>
  ),
  klaar: (datum, slot) => (
    <>
      Vos appareils vous attendent à Aartselaar le <b>{datum}</b> entre <b>{slot}</b> dès que le
      paiement est confirmé.
    </>
  ),
  terugGegevens: "Retour à mes coordonnées",
  geduldKop: "Un instant",
  geduldSub: "Nous vérifions votre paiement chez Stripe et préparons votre réservation.",
  vastKop: "Votre réservation d'enlèvement est confirmée",
  vastSub:
    "Tout vous attend dans notre entrepôt d'Aartselaar au moment choisi. Vous recevez dans un instant une confirmation par e-mail avec les instructions d'enlèvement et l'adresse.",
  vastSaldo: (bedrag) => (
    <>
      {" "}
      Vous réglez le solde de <b>{bedrag}</b> à l'enlèvement : vous scannez notre code QR et payez par
      Bancontact, carte ou Apple Pay.
    </>
  ),
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
  notaAfhaling: (totaal, saldo) => `Réservation ${totaal} TVAC · solde ${saldo} à l'enlèvement`,
};

const en: AfhaalTeksten = {
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
    akkoord: "Confirm the rental terms.",
  },
  week: "week",
  weken: "weeks",
  samenvatting: (units, dagen, weekSuffix) =>
    `${units} unit${units === 1 ? "" : "s"} · ${dagen} days${weekSuffix} · collection`,
  nogGeenToestellen: "No units chosen yet",
  nietBevestigd:
    "Your payment has not been confirmed yet. If this takes longer than a few minutes, call us on 03 689 90 65.",
  nietNagekeken: "We could not check your payment. Feel free to call us on 03 689 90 65.",
  nietDoorgegeven:
    "Your booking could not be submitted. Please try again or call us on 03 689 90 65.",
  nietGestart: "Payment could not be started. Please try again or call us on 03 689 90 65.",
  nietVerstuurd:
    "Your booking could not be sent. Check your connection or call us on 03 689 90 65.",
  teVeel: "Too many requests. Please try again in a minute.",
  catalogusNaam: "Collection rates for individual units, Aartselaar",
  kruimelHome: "Home",
  kruimelToestellen: "Equipment",
  chip: "Self-collection · Aartselaar",
  h1: "Hire individual units and collect them yourself.",
  intro: (pct, voorschot) =>
    `Put together what you need, construction dehumidifiers, fans and heaters, and collect everything from our warehouse. Pay online with ${pct}% discount, or secure your booking with ${voorschot} and pay the rest on collection.`,
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
  stap3Sub:
    "Whose name should the booking and invoice be in? We only need your address for invoicing, collection is at our warehouse.",
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
  akkoord:
    "I agree to the rental terms and will return the units clean and undamaged.",
  stap4: "4. How would you like to pay?",
  stap4Sub: (voorschot) =>
    `The same two options as with a package: everything up front with a discount, or secure your booking with ${voorschot} and settle the rest when you come to collect the units.`,
  korting: (pct) => `${pct}% discount`,
  volledigOnline: "Pay in full online",
  volledigOnlineUitleg: (pct) =>
    `Pay now with Bancontact, card, Apple Pay or iDEAL. You get ${pct}% off your entire booking and your invoice lands in your inbox straight away.`,
  uBespaart: (bedrag) => `You save ${bedrag}`,
  voorschotKop: (bedrag) => `${bedrag} now, the rest on collection`,
  voorschotUitleg: (bedrag) =>
    `Confirm your booking with ${bedrag}. You scan and pay the balance at our warehouse when you come to collect the units: Bancontact, card or Apple Pay.`,
  factuurNaBetaling: "Invoice after payment in full",
  betaalKop: "Pay for your collection booking",
  betaalSub: (bedrag) => (
    <>
      You pay <b>{bedrag}</b> with Apple Pay, Bancontact, card, iDEAL or Klarna. Payment is
      handled securely by Stripe, we never see your card details.
    </>
  ),
  saldoBijAfhaling: (bedrag) => (
    <>
      {" "}
      You settle the balance of <b>{bedrag}</b> on collection.
    </>
  ),
  klaar: (datum, slot) => (
    <>
      Your units will be ready in Aartselaar on <b>{datum}</b> between <b>{slot}</b> once the
      payment is confirmed.
    </>
  ),
  terugGegevens: "Back to my details",
  geduldKop: "One moment",
  geduldSub: "We are checking your payment with Stripe and preparing your booking.",
  vastKop: "Your collection booking is confirmed",
  vastSub:
    "Everything will be ready for you at our warehouse in Aartselaar at the chosen time. You will shortly receive a confirmation email with the collection instructions and the address.",
  vastSaldo: (bedrag) => (
    <>
      {" "}
      You settle the balance of <b>{bedrag}</b> on collection: you scan our QR code and pay with
      Bancontact, card or Apple Pay.
    </>
  ),
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
  notaAfhaling: (totaal, saldo) => `Booking ${totaal} incl. VAT · balance ${saldo} on collection`,
};

export const AFHAAL_COPY = { nl, fr, en } satisfies Copy<AfhaalTeksten>;

const GROEP: Record<"fr" | "en", Record<string, string>> = {
  fr: {
    Bouwdrogers: "Déshumidificateurs de chantier",
    Ventilatoren: "Ventilateurs",
    "Elektrische kachels": "Chauffages électriques",
  },
  en: {
    Bouwdrogers: "Construction dehumidifiers",
    Ventilatoren: "Fans",
    "Elektrische kachels": "Electric heaters",
  },
};

/** De specs uit `data/afhalen.ts` die woorden bevatten; cijfers en eenheden vertalen apart. */
const SPEC: Record<"fr" | "en", Record<string, string>> = {
  fr: {
    reservoir: "réservoir",
    pompklaar: "prêt pour pompe",
    "3 standen": "3 vitesses",
    thermostaat: "thermostat",
    adsorptie: "adsorption",
    "via slangen": "par gaines",
    "koude ruimtes": "pièces froides",
  },
  en: {
    reservoir: "tank",
    pompklaar: "pump-ready",
    "3 standen": "3 speeds",
    thermostaat: "thermostat",
    adsorptie: "desiccant",
    "via slangen": "ducted",
    "koude ruimtes": "cold rooms",
  },
};

/*
  Engels schrijft getallen anders: "0,75 kW" wordt "0.75 kW" en "4 500" wordt
  "4,500". Frans deelt de Nederlandse notatie, dus daar blijft het getal staan.
*/
function getalInTaal(getal: string, taal: "fr" | "en"): string {
  if (taal === "fr") return getal;
  return getal.replace(/(\d)\s(\d{3})/g, "$1,$2").replace(/(\d),(\d{1,2})(?!\d)/g, "$1.$2");
}

function specInTaal(spec: string, taal: "fr" | "en"): string {
  if (SPEC[taal][spec]) return SPEC[taal][spec];
  const perDag = /^(\d+) l \/ 24 u$/.exec(spec);
  if (perDag) return `${perDag[1]} l / 24 h`;
  const tot = /^tot (.+)$/.exec(spec);
  if (tot) return `${taal === "fr" ? "jusqu'à" : "up to"} ${getalInTaal(tot[1], taal)}`;
  const debiet = /^(.+) m³\/u$/.exec(spec);
  if (debiet) return `${getalInTaal(debiet[1], taal)} m³/h`;
  return getalInTaal(spec, taal);
}

/** De categorienaam van een afhaaltoestel in de taal van de pagina. */
export function groepInTaal(groep: string, taal: Taal): string {
  return taal === "nl" ? groep : (GROEP[taal][groep] ?? groep);
}

/**
 * Een afhaaltoestel met zijn teksten in de taal van de pagina. Sleutel, prijs,
 * voorraad en foto blijven ongewijzigd — alleen wat op het scherm staat
 * verandert. Een tekst zonder vertaling blijft Nederlands.
 */
export function afhaalProductInTaal(product: PickupProduct, taal: Taal): PickupProduct {
  /*
    De naam komt uit `toestelLabelIn` en niet uit het portaal. `product.name` is
    de typecode van de fabrikant ("Ontvochtiger TTK 170 S"), en die stond hier
    als kaarttitel, als alt-tekst en in de OfferCatalog van een geïndexeerde
    pagina — terwijl het menu, de toestelpagina en de bevestigingsmail Boost,
    Performance en Ultimate zeggen. Ook in het Nederlands, waar deze functie
    anders meteen teruggaf.
  */
  const naam = toestelLabelIn(product.key, taal);
  if (taal === "nl") return { ...product, name: naam };
  return {
    ...product,
    // `group` blijft Nederlands: de pagina groepeert erop. Toon hem via `groepInTaal`.
    name: naam,
    sub: vertaalPortaal(product.sub, taal),
    specs: product.specs.map((spec) => specInTaal(spec, taal)),
  };
}

/** "1 week", "2 weken" … uit `PICKUP_PERIODS`, in de taal van de pagina. */
export function periodeInTaal(dagen: number, label: string, taal: Taal): string {
  if (taal === "nl") return label;
  const weken = dagen / 7;
  if (taal === "en") return Number.isInteger(weken) ? `${weken} week${weken === 1 ? "" : "s"}` : `${dagen} days`;
  return Number.isInteger(weken) ? `${weken} semaine${weken === 1 ? "" : "s"}` : `${dagen} jours`;
}
