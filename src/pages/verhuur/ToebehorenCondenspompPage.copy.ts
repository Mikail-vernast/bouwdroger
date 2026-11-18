import type { Copy } from "@/i18n/useTaal";

/**
 * Teksten van de condenspomppagina die niet in de fiche zelf staan; de fiche
 * staat in `data/toebehoren.ts` en `data/toebehoren.fr.ts`. `prijs` is het
 * bedrag zoals de pagina het toont, met zijn btw-label erbij.
 */
export interface PompCopy {
  home: string;
  toestellen: string;
  categorie: string;
  bekijk: (alt: string) => string;
  promo: (prijs: string) => string;
  aansluiting: string;
  pakketK: string;
  pakketTitel: string;
  pakketTekst: (prijs: string) => string;
  pakketCta: string;
  afhaalK: string;
  afhaalTitel: string;
  afhaalTekst: (prijs: string) => string;
  afhaalCta: string;
  opstKick: string;
  opstTitel: string;
  opstLede: string;
  opstNote: string;
  waarvoor: string;
  afvoerKick: string;
  afvoerTitel: string;
  afvoerLede: string;
  zonderK: string;
  zonderTitel: string;
  zonderTekst: string;
  of: string;
  metK: string;
  metTitel: string;
  metTekst: string;
  techFiche: string;
  volledigeSpecs: string;
  specsLede: string;
  afhalenKick: string;
  afhalenTitel: string;
  afhalenLede: string;
  pickupbarTitel: string;
  pickupbarSub: string;
  route: string;
  afNoteVoor: string;
  afNoteLink: string;
  afNoteNa: string;
  hoortBij: string;
  hoortBijTitel: string;
  hoortBijLede: string;
  perDag: string;
  bekijken: string;
  faqKick: string;
  faqTitel: string;
  ctaKick: string;
  ctaTitel: string;
  ctaTekst: string;
  ctaKnop: string;
  bel: string;
  expertAlt: string;
}

export const COPY = {
  nl: {
    home: "Home",
    toestellen: "Toestellen",
    categorie: "Toebehoren bouwdroger",
    bekijk: (alt) => `Bekijk: ${alt}`,
    promo: (prijs) => `${prijs} per bouwdroger per dag`,
    aansluiting: "aansluiting inbegrepen",
    pakketK: "Bij een geleverd pakket",
    pakketTitel: "Onze technieker sluit hem aan",
    pakketTekst: (prijs) =>
      `Standaard één pomp per bouwdroger, aan ${prijs} per dag. Bij de installatie legt de technieker de afvoer naar een lavabo, douche, vloerput of wasmachineaansluiting. U vinkt hem aan tijdens het berekenen van uw pakket.`,
    pakketCta: "Bereken uw pakket",
    afhaalK: "Bij een afhaling",
    afhaalTitel: "De pomp gaat mee met uw toestel",
    afhaalTekst: (prijs) =>
      `Haalt u een bouwdroger af in Aartselaar, dan kan de pomp mee. Vraag hem bij uw reservatie, dan leggen wij hem klaar; aansluiten is een slang in de bak en een stekker in het stopcontact. De ${prijs} per dag komt op de eindfactuur, samen met de werkelijke huurperiode.`,
    afhaalCta: "Reserveer een toestel met pomp",
    opstKick: "De aansluiting in beeld",
    opstTitel: "Van bouwdroger naar afvoer, zonder emmer legen.",
    opstLede:
      "Met een slang naar de pomp of met de pomp onder de condensafvoer: de juiste plaatsing hangt af van uw bouwdroger en de beschikbare ruimte.",
    opstNote:
      "Illustratieve voorbeeldopstellingen. Laat de aansluiting afstemmen op uw toestel. De toevoerslang moet naar de pomp aflopen; de pomp voert het water daarna verder af.",
    waarvoor: "Waarvoor deze pomp",
    afvoerKick: "Automatische waterafvoer",
    afvoerTitel: "Zo loopt het water weg.",
    afvoerLede: "Vier stappen die zich de hele huurperiode herhalen, zonder dat er iemand bij hoeft te zijn.",
    zonderK: "Zonder pomp",
    zonderTitel: "U leegt de opvangbak 2 à 3 keer per dag",
    zonderTekst:
      "Loopt de bak vol terwijl er niemand is, dan schakelt de bouwdroger zichzelf uit en staat hij stil tot u hem leegt. Een weekend stilstand kost u een weekend droogtijd.",
    of: "of",
    metK: "Met pomp",
    metTitel: "U kijkt ernaar, meer niet",
    metTekst:
      "Het condenswater loopt continu weg naar uw afvoer. Het toestel draait dag en nacht door, ook in het weekend, en haalt zo de droogtijd die ervoor berekend is.",
    techFiche: "Technische fiche",
    volledigeSpecs: "Volledige specificaties",
    specsLede:
      "Alle waarden zoals opgemeten onder standaardomstandigheden. Twijfelt u of uw afvoer haalbaar is? Bel ons, dan rekenen we het samen na.",
    afhalenKick: "Afhalen in Aartselaar",
    afhalenTitel: "Of neem hem gewoon mee.",
    afhalenLede:
      "Reserveer uw bouwdroger online, vermeld de condenspomp bij uw reservatie en wij zetten allebei klaar tegen uw afhaalmoment.",
    pickupbarTitel: "Afhaalpunt Vernast, Boomsesteenweg 12 / Unit 11, 2630 Aartselaar",
    pickupbarSub: "Vlak langs de A12, vlot bereikbaar vanuit Antwerpen en Brussel · Ma–Vr 08:00–17:00",
    route: "Plan uw route",
    afNoteVoor:
      "De pomp weegt geen 2 kg en past in elke koffer. Het toestel waar hij bij hoort niet: reken op 30 tot 50 kg. Liever niet tillen? Dan kiest u een",
    afNoteLink: "pakket met levering",
    afNoteNa: ", en sluiten wij de afvoer meteen zelf aan.",
    hoortBij: "Hoort bij",
    hoortBijTitel: "De bouwdrogers waar de pomp op werkt",
    hoortBijLede: "Elke bouwdroger vangt zijn eigen condenswater op, dus elke droger krijgt zijn eigen pomp.",
    perDag: "/dag",
    bekijken: "Bekijken",
    faqKick: "Veelgestelde vragen",
    faqTitel: "Over de condenspomp",
    ctaKick: "Nog niet zeker?",
    ctaTitel: "Laat de configurator het voor u uitrekenen.",
    ctaTekst:
      "Geef uw oppervlakte en plafondhoogte in. U ziet meteen welk toestel, hoeveel units en hoeveel condenspompen bij uw ruimte horen, met de prijs erbij.",
    ctaKnop: "Naar de configurator",
    bel: "Bel 03 689 90 65",
    expertAlt: "Vernast droogexpert",
  },
  fr: {
    home: "Accueil",
    toestellen: "Appareils",
    categorie: "Accessoire pour déshumidificateur de chantier",
    bekijk: (alt) => `Voir : ${alt}`,
    promo: (prijs) => `${prijs} par déshumidificateur et par jour`,
    aansluiting: "raccordement compris",
    pakketK: "Avec un pack livré",
    pakketTitel: "Notre technicien la raccorde",
    pakketTekst: (prijs) =>
      `D'office une pompe par déshumidificateur, à ${prijs} par jour. Lors de l'installation, le technicien tire l'évacuation vers un lavabo, une douche, un siphon de sol ou un raccordement de machine à laver. Vous la cochez en calculant votre pack.`,
    pakketCta: "Calculez votre pack",
    afhaalK: "Avec un enlèvement",
    afhaalTitel: "La pompe part avec votre appareil",
    afhaalTekst: (prijs) =>
      `Vous venez chercher un déshumidificateur à Aartselaar ? La pompe peut partir avec. Demandez-la lors de votre réservation et nous la préparons ; la raccorder, c'est un tuyau dans le bac et une fiche dans la prise. Les ${prijs} par jour figurent sur la facture finale, avec la période de location réelle.`,
    afhaalCta: "Réserver un appareil avec pompe",
    opstKick: "Le raccordement en images",
    opstTitel: "Du déshumidificateur à l'évacuation, sans vider de seau.",
    opstLede:
      "Avec un tuyau vers la pompe ou avec la pompe sous l'évacuation de condensat : le bon emplacement dépend de votre déshumidificateur et de la place disponible.",
    opstNote:
      "Exemples d'installation à titre d'illustration. Faites adapter le raccordement à votre appareil. Le tuyau d'arrivée doit descendre vers la pompe ; la pompe évacue ensuite l'eau plus loin.",
    waarvoor: "À quoi sert cette pompe",
    afvoerKick: "Évacuation automatique de l'eau",
    afvoerTitel: "Voici comment l'eau s'en va.",
    afvoerLede:
      "Quatre étapes qui se répètent pendant toute la période de location, sans que personne ne doive être présent.",
    zonderK: "Sans pompe",
    zonderTitel: "Vous videz le bac 2 à 3 fois par jour",
    zonderTekst:
      "Si le bac se remplit alors que personne n'est là, le déshumidificateur s'arrête de lui-même et reste à l'arrêt jusqu'à ce que vous le vidiez. Un week-end d'arrêt vous coûte un week-end de séchage.",
    of: "ou",
    metK: "Avec pompe",
    metTitel: "Vous y jetez un œil, rien de plus",
    metTekst:
      "L'eau de condensation s'écoule en continu vers votre évacuation. L'appareil tourne jour et nuit, week-end compris, et atteint ainsi le temps de séchage calculé pour lui.",
    techFiche: "Fiche technique",
    volledigeSpecs: "Spécifications complètes",
    specsLede:
      "Toutes les valeurs mesurées dans des conditions standard. Vous doutez que votre évacuation soit faisable ? Appelez-nous, nous ferons le calcul ensemble.",
    afhalenKick: "Enlèvement à Aartselaar",
    afhalenTitel: "Ou emportez-la simplement.",
    afhalenLede:
      "Réservez votre déshumidificateur en ligne, mentionnez la pompe à condensats dans votre réservation et nous préparons les deux pour votre moment d'enlèvement.",
    pickupbarTitel: "Point d'enlèvement Vernast, Boomsesteenweg 12 / Unit 11, 2630 Aartselaar",
    pickupbarSub: "Le long de l'A12, facilement accessible depuis Anvers et Bruxelles · Lu–ve 08:00–17:00",
    route: "Planifiez votre itinéraire",
    afNoteVoor:
      "La pompe pèse moins de 2 kg et tient dans n'importe quel coffre. L'appareil auquel elle est reliée, non : comptez 30 à 50 kg. Vous préférez ne pas porter ? Choisissez alors un",
    afNoteLink: "pack avec livraison",
    afNoteNa: ", et nous raccordons l'évacuation nous-mêmes sur place.",
    hoortBij: "Va avec",
    hoortBijTitel: "Les déshumidificateurs sur lesquels la pompe fonctionne",
    hoortBijLede:
      "Chaque déshumidificateur recueille sa propre eau de condensation, chaque déshumidificateur reçoit donc sa propre pompe.",
    perDag: "/jour",
    bekijken: "Voir",
    faqKick: "Questions fréquentes",
    faqTitel: "À propos de la pompe à condensats",
    ctaKick: "Pas encore sûr ?",
    ctaTitel: "Laissez le configurateur faire le calcul pour vous.",
    ctaTekst:
      "Indiquez votre surface et la hauteur sous plafond. Vous voyez tout de suite quel appareil, combien d'unités et combien de pompes à condensats correspondent à votre espace, avec le prix.",
    ctaKnop: "Vers le configurateur",
    bel: "Appelez le 03 689 90 65",
    expertAlt: "Expert en séchage Vernast",
  },
} satisfies Copy<PompCopy>;
