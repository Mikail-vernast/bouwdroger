import type { Copy } from "@/i18n/useTaal";

/** De keuzes van de waterschade-aanvraag. De sleutels gaan als tekst naar het portaal. */
export interface Keuze {
  oorzaak: "lek" | "overstroming" | "dak" | "bluswater" | "anders";
  jaNee: "ja" | "nee";
  jaNeeWeet: "ja" | "nee" | "weet_niet";
  plek: "kelder" | "gelijkvloers" | "verdieping" | "zolder";
  ruimtes: "1" | "2-3" | "4+";
  nat: "vloer" | "muren" | "plafond" | "isolatie";
  sinds: "48u" | "week" | "langer";
  levering: "vandaag" | "morgen" | "later";
  verzekering: "ja" | "nee" | "nog_niet";
  klant: "particulier" | "bedrijf";
}

export interface Antwoorden {
  oorzaak: Keuze["oorzaak"] | null;
  waterStaat: Keuze["jaNee"] | null;
  hersteld: Keuze["jaNeeWeet"] | null;
  plekken: Keuze["plek"][];
  ruimtes: Keuze["ruimtes"] | null;
  nat: Keuze["nat"][];
  sinds: Keuze["sinds"] | null;
  schimmel: boolean;
  straat: string;
  nr: string;
  postcode: string;
  gemeente: string;
  levering: Keuze["levering"] | null;
  verzekering: Keuze["verzekering"] | null;
  dossier: string;
  stroom: Keuze["jaNeeWeet"] | null;
  voornaam: string;
  achternaam: string;
  telefoon: string;
  email: string;
  klant: Keuze["klant"];
  btw: string;
  opmerking: string;
}

export interface WaterschadeCopy {
  s0Kop: string;
  oorzaken: Record<Keuze["oorzaak"], string>;
  oorzaakSub: Record<Keuze["oorzaak"], string>;
  andersLink: string;
  waterStaatVraag: string;
  waterStaatTip: string;
  hersteldVraag: string;
  hersteldTip: string;
  jaNee: Record<Keuze["jaNee"], string>;
  jaNeeWeet: Record<Keuze["jaNeeWeet"], string>;
  s1Kop: string;
  waarVraag: string;
  plekken: Record<Keuze["plek"], string>;
  ruimtesVraag: string;
  ruimtes: Record<Keuze["ruimtes"], string>;
  natVraag: string;
  natOpties: Record<Keuze["nat"], string>;
  sindsVraag: string;
  sindsOpties: Record<Keuze["sinds"], string>;
  schimmel: string;
  snelTip: string;
  s2Kop: string;
  straat: string;
  nr: string;
  postcode: string;
  gemeente: string;
  leveringVraag: string;
  leveringOpties: Record<Keuze["levering"], string>;
  verzekeringVraag: string;
  verzekeringOpties: Record<Keuze["verzekering"], string>;
  dossier: string;
  rapportNoot: string;
  stroomVraag: string;
  fotosVraag: string;
  optioneel: string;
  fotosKies: string;
  fotosGekozen: (n: number) => string;
  fotosGeweigerd: (namen: string) => string;
  s3Kop: string;
  s3Sub: string;
  voornaam: string;
  achternaam: string;
  telefoon: string;
  email: string;
  klantOpties: Record<Keuze["klant"], string>;
  btw: string;
  opmerking: string;
  terug: string;
  volgende: string;
  verstuur: string;
  bezig: string;
  schermVan: (nr: number, totaal: number) => string;
  fout: (tel: string) => string;
  klaarKop: (voornaam: string) => string;
  klaarTekst: string;
  klaarDringend: string;
  bel: (tel: string) => string;
  naarBegin: string;
}

export const COPY: Copy<WaterschadeCopy> = {
  nl: {
    s0Kop: "Wat is er gebeurd?",
    oorzaken: { lek: "Lek of leiding", overstroming: "Overstroming", dak: "Dak of regen", bluswater: "Bluswater", anders: "Iets anders" },
    oorzaakSub: { lek: "Badkamer, buis, boiler", overstroming: "Kelder of grondwater", dak: "Via dak of gevel", bluswater: "Na een brand", anders: "Vertel het ons straks" },
    andersLink: "Iets anders gebeurd? →",
    waterStaatVraag: "Staat er nog water?",
    waterStaatTip: "Dan brengen we ook een waterzuiger of pomp mee: eerst het water weg, dan drogen.",
    hersteldVraag: "Is het lek of de oorzaak hersteld?",
    hersteldTip: "Drogen heeft pas zin als het water niet meer bijkomt. We helpen u graag met wie u daarvoor belt.",
    jaNee: { ja: "Ja", nee: "Nee" },
    jaNeeWeet: { ja: "Ja", nee: "Nee", weet_niet: "Weet niet" },
    s1Kop: "Waar is het nat?",
    waarVraag: "Op welke verdieping?",
    plekken: { kelder: "Kelder", gelijkvloers: "Gelijkvloers", verdieping: "Verdieping", zolder: "Zolder" },
    ruimtesVraag: "Hoeveel ruimtes?",
    ruimtes: { "1": "1 ruimte", "2-3": "2 tot 3", "4+": "4 of meer" },
    natVraag: "Wat is er nat?",
    natOpties: { vloer: "Vloer", muren: "Muren", plafond: "Plafond", isolatie: "Onder de vloer of vloerverwarming" },
    sindsVraag: "Sinds wanneer?",
    sindsOpties: { "48u": "< 2 dagen", week: "2–7 dagen", langer: "Langer" },
    schimmel: "Ik zie al schimmel",
    snelTip: "Goed dat u er snel bij bent: wie binnen 48 uur droogt, voorkomt meestal schimmel.",
    s2Kop: "Waar en wanneer leveren?",
    straat: "Straat",
    nr: "Nr.",
    postcode: "Postcode",
    gemeente: "Gemeente",
    leveringVraag: "Wanneer moeten de toestellen er zijn?",
    leveringOpties: { vandaag: "Vandaag", morgen: "Morgen", later: "Later deze week" },
    verzekeringVraag: "Hebt u het aangegeven bij uw verzekeraar?",
    verzekeringOpties: { ja: "Ja", nee: "Nee", nog_niet: "Nog niet" },
    dossier: "Dossiernummer (als u het hebt)",
    rapportNoot: "U krijgt van ons een droograpport met metingen voor uw verzekeraar.",
    stroomVraag: "Is er stroom in de natte ruimtes?",
    fotosVraag: "Foto's van de schade",
    optioneel: "niet verplicht",
    fotosKies: "Foto's toevoegen",
    fotosGekozen: (n) => `${n} ${n === 1 ? "foto" : "foto's"} gekozen · meer toevoegen`,
    fotosGeweigerd: (namen) => `Niet toegevoegd (te groot of geen foto): ${namen}`,
    s3Kop: "Hoe bereiken we u?",
    s3Sub: "We bellen u terug om de levering af te spreken.",
    voornaam: "Voornaam",
    achternaam: "Achternaam",
    telefoon: "Telefoon",
    email: "E-mail",
    klantOpties: { particulier: "Particulier", bedrijf: "Bedrijf of syndicus" },
    btw: "Btw-nummer",
    opmerking: "Nog iets dat we moeten weten?",
    terug: "← Terug",
    volgende: "Volgende →",
    verstuur: "Verstuur aanvraag →",
    bezig: "Versturen…",
    schermVan: (nr, totaal) => `Vraag ${nr} van ${totaal}`,
    fout: (tel) => `Versturen lukte niet. Probeer het opnieuw of bel ons op ${tel}.`,
    klaarKop: (voornaam) => (voornaam ? `Bedankt, ${voornaam}.` : "Bedankt."),
    klaarTekst: "Uw aanvraag is binnen. U krijgt binnen het uur bevestiging, en we leveren en installeren binnen 24 uur.",
    klaarDringend: "Staat het water hoog of komt het nog bij? Bel ons meteen.",
    bel: (tel) => `Bel ${tel}`,
    naarBegin: "← Naar het begin",
  },
  fr: {
    s0Kop: "Que s'est-il passé ?",
    oorzaken: { lek: "Fuite ou conduite", overstroming: "Inondation", dak: "Toit ou pluie", bluswater: "Eau d'extinction", anders: "Autre chose" },
    oorzaakSub: { lek: "Salle de bain, tuyau, boiler", overstroming: "Cave ou nappe phréatique", dak: "Par le toit ou la façade", bluswater: "Après un incendie", anders: "Expliquez-le-nous ensuite" },
    andersLink: "Autre chose ? →",
    waterStaatVraag: "Y a-t-il encore de l'eau ?",
    waterStaatTip: "Nous apportons alors aussi un aspirateur à eau ou une pompe : d'abord évacuer l'eau, ensuite sécher.",
    hersteldVraag: "La fuite ou la cause est-elle réparée ?",
    hersteldTip: "Sécher n'a de sens que si l'eau n'arrive plus. Nous vous aidons volontiers à trouver qui appeler.",
    jaNee: { ja: "Oui", nee: "Non" },
    jaNeeWeet: { ja: "Oui", nee: "Non", weet_niet: "Je ne sais pas" },
    s1Kop: "Où est-ce humide ?",
    waarVraag: "À quel niveau ?",
    plekken: { kelder: "Cave", gelijkvloers: "Rez-de-chaussée", verdieping: "Étage", zolder: "Grenier" },
    ruimtesVraag: "Combien de pièces ?",
    ruimtes: { "1": "1 pièce", "2-3": "2 à 3", "4+": "4 ou plus" },
    natVraag: "Qu'est-ce qui est mouillé ?",
    natOpties: { vloer: "Sol", muren: "Murs", plafond: "Plafond", isolatie: "Sous le sol ou chauffage par le sol" },
    sindsVraag: "Depuis quand ?",
    sindsOpties: { "48u": "< 2 jours", week: "2–7 jours", langer: "Plus longtemps" },
    schimmel: "Je vois déjà de la moisissure",
    snelTip: "Bien d'agir vite : sécher dans les 48 heures évite généralement la moisissure.",
    s2Kop: "Où et quand livrer ?",
    straat: "Rue",
    nr: "N°",
    postcode: "Code postal",
    gemeente: "Commune",
    leveringVraag: "Quand les appareils doivent-ils être là ?",
    leveringOpties: { vandaag: "Aujourd'hui", morgen: "Demain", later: "Plus tard cette semaine" },
    verzekeringVraag: "L'avez-vous déclaré à votre assureur ?",
    verzekeringOpties: { ja: "Oui", nee: "Non", nog_niet: "Pas encore" },
    dossier: "Numéro de dossier (si vous l'avez)",
    rapportNoot: "Vous recevez de notre part un rapport de séchage avec mesures pour votre assureur.",
    stroomVraag: "Y a-t-il du courant dans les pièces humides ?",
    fotosVraag: "Photos des dégâts",
    optioneel: "facultatif",
    fotosKies: "Ajouter des photos",
    fotosGekozen: (n) => `${n} photo${n === 1 ? "" : "s"} choisie${n === 1 ? "" : "s"} · en ajouter`,
    fotosGeweigerd: (namen) => `Non ajouté (trop lourd ou pas une photo) : ${namen}`,
    s3Kop: "Comment vous joindre ?",
    s3Sub: "Nous vous rappelons pour convenir de la livraison.",
    voornaam: "Prénom",
    achternaam: "Nom",
    telefoon: "Téléphone",
    email: "E-mail",
    klantOpties: { particulier: "Particulier", bedrijf: "Entreprise ou syndic" },
    btw: "Numéro de TVA",
    opmerking: "Autre chose à savoir ?",
    terug: "← Retour",
    volgende: "Suivant →",
    verstuur: "Envoyer la demande →",
    bezig: "Envoi…",
    schermVan: (nr, totaal) => `Question ${nr} sur ${totaal}`,
    fout: (tel) => `L'envoi a échoué. Réessayez ou appelez-nous au ${tel}.`,
    klaarKop: (voornaam) => (voornaam ? `Merci, ${voornaam}.` : "Merci."),
    klaarTekst: "Votre demande est bien arrivée. Vous recevez une confirmation dans l'heure, et nous livrons et installons dans les 24 heures.",
    klaarDringend: "L'eau est haute ou continue d'arriver ? Appelez-nous tout de suite.",
    bel: (tel) => `Appeler le ${tel}`,
    naarBegin: "← Retour au début",
  },
  en: {
    s0Kop: "What happened?",
    oorzaken: { lek: "Leak or pipe", overstroming: "Flooding", dak: "Roof or rain", bluswater: "Firefighting water", anders: "Something else" },
    oorzaakSub: { lek: "Bathroom, pipe, boiler", overstroming: "Basement or groundwater", dak: "Through roof or wall", bluswater: "After a fire", anders: "Tell us later on" },
    andersLink: "Something else? →",
    waterStaatVraag: "Is there still standing water?",
    waterStaatTip: "Then we also bring a water vacuum or pump: first the water out, then drying.",
    hersteldVraag: "Has the leak or cause been fixed?",
    hersteldTip: "Drying only makes sense once no more water comes in. We're happy to tell you who to call.",
    jaNee: { ja: "Yes", nee: "No" },
    jaNeeWeet: { ja: "Yes", nee: "No", weet_niet: "Not sure" },
    s1Kop: "Where is it wet?",
    waarVraag: "On which floor?",
    plekken: { kelder: "Basement", gelijkvloers: "Ground floor", verdieping: "Upper floor", zolder: "Attic" },
    ruimtesVraag: "How many rooms?",
    ruimtes: { "1": "1 room", "2-3": "2 to 3", "4+": "4 or more" },
    natVraag: "What is wet?",
    natOpties: { vloer: "Floor", muren: "Walls", plafond: "Ceiling", isolatie: "Under the floor or underfloor heating" },
    sindsVraag: "Since when?",
    sindsOpties: { "48u": "< 2 days", week: "2–7 days", langer: "Longer" },
    schimmel: "I can already see mould",
    snelTip: "Good that you're quick: drying within 48 hours usually prevents mould.",
    s2Kop: "Where and when to deliver?",
    straat: "Street",
    nr: "No.",
    postcode: "Postcode",
    gemeente: "Town",
    leveringVraag: "When do you need the units?",
    leveringOpties: { vandaag: "Today", morgen: "Tomorrow", later: "Later this week" },
    verzekeringVraag: "Have you reported it to your insurer?",
    verzekeringOpties: { ja: "Yes", nee: "No", nog_niet: "Not yet" },
    dossier: "Claim number (if you have it)",
    rapportNoot: "You'll get a drying report with measurements for your insurer from us.",
    stroomVraag: "Is there power in the wet rooms?",
    fotosVraag: "Photos of the damage",
    optioneel: "optional",
    fotosKies: "Add photos",
    fotosGekozen: (n) => `${n} photo${n === 1 ? "" : "s"} chosen · add more`,
    fotosGeweigerd: (namen) => `Not added (too large or not a photo): ${namen}`,
    s3Kop: "How can we reach you?",
    s3Sub: "We'll call you back to arrange the delivery.",
    voornaam: "First name",
    achternaam: "Last name",
    telefoon: "Phone",
    email: "Email",
    klantOpties: { particulier: "Private", bedrijf: "Company or property manager" },
    btw: "VAT number",
    opmerking: "Anything else we should know?",
    terug: "← Back",
    volgende: "Next →",
    verstuur: "Send request →",
    bezig: "Sending…",
    schermVan: (nr, totaal) => `Question ${nr} of ${totaal}`,
    fout: (tel) => `Sending failed. Try again or call us on ${tel}.`,
    klaarKop: (voornaam) => (voornaam ? `Thank you, ${voornaam}.` : "Thank you."),
    klaarTekst: "Your request is in. You'll get confirmation within the hour, and we deliver and install within 24 hours.",
    klaarDringend: "Is the water high or still coming in? Call us right away.",
    bel: (tel) => `Call ${tel}`,
    naarBegin: "← Back to the start",
  },
};
