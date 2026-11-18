/**
 * De taal van een betaling: welke taal Stripe toont, waar de betaler daarna
 * terugkomt en in welke taal een weigering terug naar de browser gaat.
 *
 * Draait in `api/` — dus relatieve imports met `.js`, geen `@/`.
 *
 * Strikt genarrowed: alleen de letterlijke tekst "fr" maakt een betaling
 * Frans, alles anders (ontbrekend, "FR", "en", een getal, een object) wordt
 * Nederlands. Engels staat nog niet online (zie `ACTIEVE_TALEN`); een
 * `locale: "en"` met een return-URL naar een niet-bestaande `/en`-pagina zou
 * een betaler na het afrekenen op een 404 zetten.
 *
 * Wat hier NIET gebeurt: bedragen. De taal verandert alleen woorden en paden;
 * wat Stripe int, rekenen de routes zelf uit, zoals altijd.
 */
import { vertaalPad } from "../i18n/paden.js";

export type BetaalTaal = "nl" | "fr";

export function betaalTaal(waarde: unknown): BetaalTaal {
  return waarde === "fr" ? "fr" : "nl";
}

/**
 * Het pad van een betaalpagina in de taal van de betaler. `nlPad` mag een
 * querystring dragen; die blijft ongewijzigd. Bestaat er (nog) geen Franse
 * versie, dan blijft het Nederlandse pad staan: liever een werkende pagina in
 * de verkeerde taal dan een 404 na een geslaagde betaling.
 */
export function betaalPad(nlPad: string, taal: BetaalTaal): string {
  if (taal === "nl") return nlPad;
  return vertaalPad(nlPad, taal) ?? nlPad;
}

/**
 * Franse versie van de weigeringen die een betaalroute naar de browser stuurt.
 *
 * Gesleuteld op de Nederlandse tekst, zodat die in de routes letterlijk blijft
 * staan en een Nederlandse betaler precies hetzelfde antwoord krijgt als
 * vroeger. Ontbreekt een vertaling, dan gaat de Nederlandse tekst mee — nooit
 * een lege foutmelding.
 */
const FR: Record<string, string> = {
  "Stripe is nog niet geconfigureerd op deze omgeving.":
    "Le paiement n'est pas encore configuré sur cet environnement.",
  "Betalen is nog niet geconfigureerd op deze omgeving.":
    "Le paiement n'est pas encore configuré sur cet environnement.",
  "Ongeldige aanvraag.": "Demande non valable.",
  "Ongeldige sessie.": "Session non valable.",
  "Boeking niet gevonden.": "Réservation introuvable.",
  "Geen geldig e-mailadres opgegeven.": "Adresse e-mail non valable.",
  "Vul uw bedrijfsnaam en btw-nummer in.": "Indiquez le nom de votre société et votre numéro de TVA.",
  "Kies eerst een geldige leverdatum.": "Choisissez d'abord une date de livraison valable.",
  "We kunnen de beschikbaarheid nu niet controleren. Probeer het over enkele minuten opnieuw of bel ons op 03 689 90 65.":
    "Nous ne pouvons pas vérifier la disponibilité pour le moment. Réessayez dans quelques minutes ou appelez-nous au 03 689 90 65.",
  "Op deze leverdatum zijn onze toestellen al ingepland. Kies een andere datum, of bel ons op 03 689 90 65. Vaak kunnen we alsnog schuiven.":
    "Nos appareils sont déjà planifiés à cette date de livraison. Choisissez une autre date ou appelez-nous au 03 689 90 65 : nous pouvons souvent encore nous arranger.",
  "Op die datum staan deze toestellen al ingepland. Kies een andere afhaaldatum, of bel ons op 03 689 90 65.":
    "Ces appareils sont déjà planifiés à cette date. Choisissez une autre date d'enlèvement ou appelez-nous au 03 689 90 65.",
  "Betaling kon niet gestart worden. Probeer het opnieuw of bel ons op 03 689 90 65.":
    "Le paiement n'a pas pu démarrer. Réessayez ou appelez-nous au 03 689 90 65.",
  "Betaling kon niet gestart worden.": "Le paiement n'a pas pu démarrer.",
  "Geen ordergegevens ontvangen.": "Aucune donnée de commande reçue.",
  "Kies eerst minstens één toestel.": "Choisissez d'abord au moins un appareil.",
  "Kies een afhaaldatum vanaf morgen: wij zetten uw toestel minstens 24 uur op voorhand klaar.":
    "Choisissez une date d'enlèvement à partir de demain : nous préparons votre appareil au moins 24 heures à l'avance.",
  "Vul uw naam in.": "Indiquez votre nom.",
  "Vul uw telefoonnummer in.": "Indiquez votre numéro de téléphone.",
  "Kies een geldige afhaaldatum.": "Choisissez une date d'enlèvement valable.",
  "Deze boeking is al volledig betaald.": "Cette réservation est déjà entièrement payée.",
  "Kies hoeveel langer u de toestellen wilt houden.":
    "Choisissez combien de temps en plus vous souhaitez garder les appareils.",
  "Vul een telefoonnummer in waarop wij u kunnen bereiken.":
    "Indiquez un numéro de téléphone auquel nous pouvons vous joindre.",
  "Vertel kort waarom u wilt verlengen.": "Expliquez brièvement pourquoi vous souhaitez prolonger.",
  "Te veel aanvragen. Probeer het over een minuut opnieuw.":
    "Trop de demandes. Réessayez dans une minute.",
};

export function foutmelding(nl: string, taal: BetaalTaal): string {
  return taal === "fr" ? (FR[nl] ?? nl) : nl;
}
