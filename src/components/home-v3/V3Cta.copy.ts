import type { Copy } from "@/i18n/useTaal";

/**
 * Subject keys travel to `/api/vraag` unchanged, so they stay the same in every
 * language; only the label translates.
 */
export const SUBJECTS = [
  "waterschade",
  "droging_op_maat",
  "schimmel_geur",
  "verzekeringsrapport",
  "offerte_prijs",
  "andere_vraag",
] as const;
export type Subject = (typeof SUBJECTS)[number];

export interface CtaCopy {
  kick: string;
  h2: string;
  intro: string;
  subjects: Record<Subject, string>;
  naam: string;
  naamPh: string;
  email: string;
  emailPh: string;
  telefoon: string;
  straat: string;
  straatPh: string;
  adresSuggesties: string;
  nummer: string;
  postcode: string;
  gemeente: string;
  gemeentePh: string;
  onderwerp: string;
  bericht: string;
  berichtPh: string;
  verstuur: string;
  versturen: string;
  privacy: string;
  privacyLink: string;
  errNaam: string;
  errEmail: string;
  errTelefoon: string;
  errStraat: string;
  errNummer: string;
  errPostcode: string;
  errGemeente: string;
  errBericht: string;
  klaarH3: string;
  klaarP: string;
  fout: string;
  foutVerbinding: string;
}

export const COPY = {
  nl: {
    kick: "Klaar om te starten?",
    h2: "Uw woning drogen start hier.",
    intro:
      "Stuur ons uw vraag. Een droogexpert antwoordt dezelfde werkdag. Verplichte velden zijn gemarkeerd met *.",
    subjects: {
      waterschade: "Waterschade",
      droging_op_maat: "Chape of pleister drogen",
      schimmel_geur: "Schimmel of geur",
      verzekeringsrapport: "Rapport voor verzekering",
      offerte_prijs: "Offerte of prijs",
      andere_vraag: "Andere vraag",
    },
    naam: "Naam",
    naamPh: "Uw volledige naam",
    email: "E-mail",
    emailPh: "uw@email.be",
    telefoon: "Telefoon",
    straat: "Straat",
    straatPh: "Begin te typen, bv. Kerkstraat",
    adresSuggesties: "Adressuggesties",
    nummer: "Nr.",
    postcode: "Postcode",
    gemeente: "Gemeente",
    gemeentePh: "Uw gemeente",
    onderwerp: "Onderwerp",
    bericht: "Bericht",
    berichtPh: "Welke ruimte, wat is er gebeurd en tegen wanneer moet het droog zijn?",
    verstuur: "Bericht versturen",
    versturen: "Versturen…",
    privacy: "Door dit formulier te versturen gaat u akkoord met ons",
    privacyLink: "privacybeleid",
    errNaam: "Vul uw naam in.",
    errEmail: "Vul een geldig e-mailadres in.",
    errTelefoon: "Dit telefoonnummer klopt niet, of laat het leeg.",
    errStraat: "Vul uw straat in.",
    errNummer: "Vul het nr. in.",
    errPostcode: "Bv. 2630.",
    errGemeente: "Vul uw gemeente in.",
    errBericht: "Schrijf kort wat uw vraag is.",
    klaarH3: "Bedankt, uw bericht is verstuurd.",
    klaarP: "Een droogexpert neemt dezelfde werkdag contact met u op. Dringend? Bel",
    fout: "Verzenden lukte niet. Probeer het opnieuw of bel 03 689 90 65.",
    foutVerbinding: "Verzenden lukte niet. Controleer uw verbinding en probeer opnieuw.",
  },
  fr: {
    kick: "Prêt à commencer ?",
    h2: "Le séchage de votre habitation commence ici.",
    intro:
      "Envoyez-nous votre question. Un expert en séchage répond le jour ouvrable même. Les champs obligatoires sont marqués d'un *.",
    subjects: {
      waterschade: "Dégâts des eaux",
      droging_op_maat: "Séchage de chape ou de plâtre",
      schimmel_geur: "Moisissures ou odeurs",
      verzekeringsrapport: "Rapport pour l'assurance",
      offerte_prijs: "Devis ou prix",
      andere_vraag: "Autre question",
    },
    naam: "Nom",
    naamPh: "Votre nom complet",
    email: "E-mail",
    emailPh: "votre@email.be",
    telefoon: "Téléphone",
    straat: "Rue",
    straatPh: "Commencez à taper, ex. Rue Neuve",
    adresSuggesties: "Suggestions d'adresse",
    nummer: "N°",
    postcode: "Code postal",
    gemeente: "Commune",
    gemeentePh: "Votre commune",
    onderwerp: "Sujet",
    bericht: "Message",
    berichtPh: "Quelle pièce, que s'est-il passé et pour quand cela doit-il être sec ?",
    verstuur: "Envoyer le message",
    versturen: "Envoi…",
    privacy: "En envoyant ce formulaire, vous acceptez notre",
    privacyLink: "politique de confidentialité",
    errNaam: "Indiquez votre nom.",
    errEmail: "Indiquez une adresse e-mail valide.",
    errTelefoon: "Ce numéro ne semble pas correct, ou laissez le champ vide.",
    errStraat: "Indiquez votre rue.",
    errNummer: "N° manquant.",
    errPostcode: "Ex. 1000.",
    errGemeente: "Indiquez votre commune.",
    errBericht: "Décrivez brièvement votre question.",
    klaarH3: "Merci, votre message a été envoyé.",
    klaarP: "Un expert en séchage vous contacte le jour ouvrable même. Urgent ? Appelez le",
    fout: "L'envoi n'a pas abouti. Réessayez ou appelez le 03 689 90 65.",
    foutVerbinding: "L'envoi n'a pas abouti. Vérifiez votre connexion et réessayez.",
  },
  en: {
    kick: "Ready to start?",
    h2: "Drying your home starts here.",
    intro:
      "Send us your question. A drying expert replies the same working day. Required fields are marked with *.",
    subjects: {
      waterschade: "Water damage",
      droging_op_maat: "Screed or plaster drying",
      schimmel_geur: "Mould or odour",
      verzekeringsrapport: "Report for insurance",
      offerte_prijs: "Quote or price",
      andere_vraag: "Other question",
    },
    naam: "Name",
    naamPh: "Your full name",
    email: "Email",
    emailPh: "you@email.be",
    telefoon: "Phone",
    straat: "Street",
    straatPh: "Start typing, e.g. Kerkstraat",
    adresSuggesties: "Address suggestions",
    nummer: "No.",
    postcode: "Postcode",
    gemeente: "Town",
    gemeentePh: "Your town",
    onderwerp: "Subject",
    bericht: "Message",
    berichtPh: "Which room, what happened and when does it need to be dry?",
    verstuur: "Send message",
    versturen: "Sending…",
    privacy: "By sending this form you agree to our",
    privacyLink: "privacy policy",
    errNaam: "Please enter your name.",
    errEmail: "Please enter a valid email address.",
    errTelefoon: "This phone number doesn't look right, or leave it empty.",
    errStraat: "Please enter your street.",
    errNummer: "Enter the no.",
    errPostcode: "E.g. 2630.",
    errGemeente: "Please enter your town.",
    errBericht: "Briefly describe your question.",
    klaarH3: "Thank you, your message has been sent.",
    klaarP: "A drying expert will contact you the same working day. Urgent? Call",
    fout: "Sending failed. Please try again or call +32 3 689 90 65.",
    foutVerbinding: "Sending failed. Please check your connection and try again.",
  },
} satisfies Copy<CtaCopy>;
