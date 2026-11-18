import type { Copy } from "@/i18n/useTaal";

/**
 * Teksten van de toestelpagina die niet per toestel verschillen. De
 * toestelteksten zelf staan in `data/verhuur.ts` en `data/verhuur.fr.ts`.
 */
export interface ToestelCopy {
  /** Vragen over het afhalen, onder de toestelspecifieke FAQ. */
  pickupFaq: [string, string][];
  pickupSteps: { title: string; body: string }[];
  /** "1 week", "2 weken" … per periode in dagen. */
  periode: (dagen: number, nlLabel: string) => string;
  home: string;
  toestellen: string;
  afbeelding: (n: number) => string;
  promo: string;
  proforma: string;
  ctxBasis: string;
  ctxToestellen: (n: number) => string;
  ctxAanbevolen: string;
  opnieuw: string;
  afhaalreservatie: string;
  nakijken: string;
  bezet: string;
  beschikbaar: string;
  afhaalpunt: string;
  afhaalpuntSub: string;
  startdatum: string;
  huurperiode: string;
  /** [vóór de startdatum, tussen start en einde, na de einddatum] */
  retour: (dagen: number) => [string, string, string];
  aantal: string;
  minder: string;
  meer: string;
  afhaalmoment: string;
  datumBezet: (datum: string, meer: boolean) => string;
  eerstVrij: string;
  nietsVrij: string;
  aanbevolen: string;
  perDag: string;
  dagen: string;
  langhuur: (pct: number) => string;
  afhalenGratis: string;
  gratis: string;
  totaal: string;
  nietBeschikbaar: string;
  reserveer: string;
  noteVoor: string;
  perPakket: string;
  waarvoor: string;
  techFiche: string;
  volledigeSpecs: string;
  specsLede: string;
  afhalenKick: string;
  zoWerkt: string;
  afhalenLede: string;
  pickupbarTitel: string;
  pickupbarSub: string;
  route: string;
  goedOmTeWeten: string;
  zwaarTitel: string;
  zwaarTekst: string;
  zwaarCta: string;
  zwaarAlt: string;
  afNoteVoor: string;
  afNoteNa: string;
  combineer: string;
  combineerTitel: string;
  combineerLede: string;
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
    pickupFaq: [
      [
        "Waar haal ik het toestel af?",
        "Aan ons afhaalpunt: Boomsesteenweg 12 / Unit 11, 2630 Aartselaar, vlak langs de A12, vlot bereikbaar vanuit Antwerpen en Brussel. Open ma–vr van 08:00 tot 17:00.",
      ],
      [
        "Wat breng ik mee bij de afhaling?",
        "Uw identiteitskaart en uw reservatiebevestiging (op uw telefoon volstaat). Wij laden het toestel mee in uw wagen of aanhangwagen.",
      ],
      [
        "Kan dit toestel ook geleverd en geïnstalleerd worden?",
        "Ja, maar uitsluitend als onderdeel van een berekend droogpakket. Alleen zo kunnen wij onze 100% droog-garantie waarmaken. Bereken uw pakket via de Calculator.",
      ],
      [
        "Waarom zijn afhaalprijzen lager?",
        "U bespaart de transport- en installatiekost. Reserveren doet u online: betaal alles vooraf met 5% korting, of bevestig met een voorschot en reken de rest af bij de afhaling.",
      ],
    ],
    pickupSteps: [
      {
        title: "Reserveer online",
        body: "Kies uw toestel, huurperiode en afhaalmoment. U betaalt vooraf met 5% korting of enkel het voorschot.",
      },
      {
        title: "Bevestiging binnen het uur",
        body: "U ontvangt uw reservatiebevestiging met routebeschrijving en wat u meebrengt (identiteitskaart).",
      },
      {
        title: "Afhalen op de A12",
        body: "Uw toestel staat klaar aan ons afhaalpunt. Een openstaand saldo scant en betaalt u hier met Bancontact, kaart of Apple Pay. Breng een ruime koffer, break of aanhangwagen mee.",
      },
      {
        title: "Terugbrengen, klaar",
        body: "Breng het toestel terug op het afgesproken moment. Uw factuur staat dan al in uw mailbox.",
      },
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
    noteVoor:
      "5% korting bij online betalen · lagere afhaalprijzen · liever geleverd én geïnstalleerd? Dat kan",
    perPakket: "per pakket",
    waarvoor: "Waarvoor dit toestel",
    techFiche: "Technische fiche",
    volledigeSpecs: "Volledige specificaties",
    specsLede:
      "Alle waarden zoals opgemeten onder standaardomstandigheden. Vragen over uw specifieke situatie? Bel ons.",
    afhalenKick: "Afhalen in Aartselaar",
    zoWerkt: "Zo werkt afhalen.",
    afhalenLede:
      "Losse toestellen huurt u tegen lagere afhaalprijzen via onze afhaal-checkout. U reserveert online en haalt op wanneer het u past, wij zetten alles klaar.",
    pickupbarTitel: "Afhaalpunt Vernast, Boomsesteenweg 12 / Unit 11, 2630 Aartselaar",
    pickupbarSub: "Vlak langs de A12, vlot bereikbaar vanuit Antwerpen en Brussel · Ma–Vr 08:00–17:00",
    route: "Plan uw route",
    goedOmTeWeten: "Goed om te weten",
    zwaarTitel: "Sommige toestellen zijn zwaar. Til niet, laat leveren.",
    zwaarTekst:
      "Een professionele bouwdroger weegt al snel 30 tot 50 kg. Zelf tillen, zeker op een trap, is niet zonder risico. Bent u wat ouder of fysiek minder sterk? Kies dan voor een pakket met levering: wij dragen, plaatsen en stellen alles in, u hoeft niets te tillen.",
    zwaarCta: "Bekijk pakketten met levering",
    zwaarAlt: "Oudere man met rugpijn na het tillen van een zwaar toestel",
    afNoteVoor: "Leveren en installeren doen wij uitsluitend",
    afNoteNa: ", alleen zo kunnen wij onze 100% droog-garantie waarmaken.",
    combineer: "Combineer met",
    combineerTitel: "Sneller droog met de juiste combinatie",
    combineerLede:
      "Circulatie en temperatuur bepalen hoe snel het vocht uit de bouwmassa komt. Deze toestellen versterken elkaar.",
    bekijken: "Bekijken",
    faqKick: "Veelgestelde vragen",
    faqTitel: "Over dit toestel",
    ctaKick: "Nog niet zeker?",
    ctaTitel: "Laat de configurator het voor u uitrekenen.",
    ctaTekst:
      "Geef uw oppervlakte en plafondhoogte in, u ziet meteen welk toestel, hoeveel units en welke prijs bij uw ruimte hoort.",
    ctaKnop: "Naar de configurator",
    bel: "Bel 03 689 90 65",
    expertAlt: "Vernast droogexpert",
  },
  fr: {
    pickupFaq: [
      [
        "Où vais-je chercher l'appareil ?",
        "À notre point d'enlèvement : Boomsesteenweg 12 / Unit 11, 2630 Aartselaar, le long de l'A12, facilement accessible depuis Anvers et Bruxelles. Ouvert du lundi au vendredi de 08:00 à 17:00.",
      ],
      [
        "Que dois-je apporter à l'enlèvement ?",
        "Votre carte d'identité et votre confirmation de réservation (sur votre téléphone, cela suffit). Nous chargeons l'appareil dans votre voiture ou votre remorque.",
      ],
      [
        "Cet appareil peut-il aussi être livré et installé ?",
        "Oui, mais uniquement dans le cadre d'un pack de séchage calculé. C'est la seule façon pour nous de tenir notre garantie de séchage à 100 %. Calculez votre pack via le calculateur.",
      ],
      [
        "Pourquoi les prix à l'enlèvement sont-ils plus bas ?",
        "Vous économisez les frais de transport et d'installation. La réservation se fait en ligne : payez tout à l'avance avec 5 % de réduction, ou confirmez avec un acompte et réglez le reste à l'enlèvement.",
      ],
    ],
    pickupSteps: [
      {
        title: "Réservez en ligne",
        body: "Choisissez votre appareil, la période de location et le moment d'enlèvement. Vous payez à l'avance avec 5 % de réduction, ou seulement l'acompte.",
      },
      {
        title: "Confirmation dans l'heure",
        body: "Vous recevez votre confirmation de réservation avec l'itinéraire et ce qu'il faut apporter (carte d'identité).",
      },
      {
        title: "Enlèvement sur l'A12",
        body: "Votre appareil vous attend à notre point d'enlèvement. Un solde restant se scanne et se paie sur place par Bancontact, carte ou Apple Pay. Prévoyez un grand coffre, un break ou une remorque.",
      },
      {
        title: "Retour, c'est terminé",
        body: "Rapportez l'appareil au moment convenu. Votre facture est alors déjà dans votre boîte mail.",
      },
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
    datumBezet: (datum, meer) =>
      `Le ${datum}, ${meer ? "ce nombre d'appareils est" : "cet appareil est"} déjà planifié.`,
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
    noteVoor:
      "5 % de réduction en payant en ligne · prix plus bas à l'enlèvement · vous préférez la livraison et l'installation ? C'est possible",
    perPakket: "par pack",
    waarvoor: "À quoi sert cet appareil",
    techFiche: "Fiche technique",
    volledigeSpecs: "Spécifications complètes",
    specsLede:
      "Toutes les valeurs mesurées dans des conditions standard. Des questions sur votre situation ? Appelez-nous.",
    afhalenKick: "Enlèvement à Aartselaar",
    zoWerkt: "Comment fonctionne l'enlèvement.",
    afhalenLede:
      "Vous louez les appareils seuls à des prix plus bas via notre réservation pour enlèvement. Vous réservez en ligne et venez chercher quand cela vous convient, nous préparons tout.",
    pickupbarTitel: "Point d'enlèvement Vernast, Boomsesteenweg 12 / Unit 11, 2630 Aartselaar",
    pickupbarSub: "Le long de l'A12, facilement accessible depuis Anvers et Bruxelles · Lu–ve 08:00–17:00",
    route: "Planifiez votre itinéraire",
    goedOmTeWeten: "Bon à savoir",
    zwaarTitel: "Certains appareils sont lourds. Ne portez pas, faites livrer.",
    zwaarTekst:
      "Un déshumidificateur de chantier professionnel pèse vite 30 à 50 kg. Le porter soi-même, surtout dans un escalier, n'est pas sans risque. Vous êtes un peu plus âgé ou physiquement moins fort ? Choisissez alors un pack avec livraison : nous portons, plaçons et réglons tout, vous n'avez rien à soulever.",
    zwaarCta: "Voir les packs avec livraison",
    zwaarAlt: "Homme âgé avec un mal de dos après avoir soulevé un appareil lourd",
    afNoteVoor: "Nous livrons et installons uniquement",
    afNoteNa: ", c'est la seule façon de tenir notre garantie de séchage à 100 %.",
    combineer: "À combiner avec",
    combineerTitel: "Sécher plus vite avec la bonne combinaison",
    combineerLede:
      "La circulation et la température déterminent la vitesse à laquelle l'humidité quitte la maçonnerie. Ces appareils se renforcent mutuellement.",
    bekijken: "Voir",
    faqKick: "Questions fréquentes",
    faqTitel: "À propos de cet appareil",
    ctaKick: "Pas encore sûr ?",
    ctaTitel: "Laissez le configurateur faire le calcul pour vous.",
    ctaTekst:
      "Indiquez votre surface et la hauteur sous plafond, vous voyez tout de suite quel appareil, combien d'unités et quel prix correspondent à votre espace.",
    ctaKnop: "Vers le configurateur",
    bel: "Appelez le 03 689 90 65",
    expertAlt: "Expert en séchage Vernast",
  },
} satisfies Copy<ToestelCopy>;
