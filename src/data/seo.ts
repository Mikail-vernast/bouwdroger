/**
 * Titel en beschrijving per route, op één plek.
 *
 * Eén pagina = één zoekintentie. Door ze hier naast elkaar te zetten is meteen
 * zichtbaar wanneer twee pagina's op dezelfde zoekopdracht mikken; dat is de
 * enige manier om kannibalisatie voor te blijven.
 *
 * Richtlijn: titel 50–60 tekens met het belangrijkste begrip vooraan,
 * beschrijving 120–160 tekens die eerlijk zegt wat de pagina biedt.
 */
export interface SeoEntry {
  title: string;
  description: string;
  /** Pagina's zonder zoekwaarde: bevestigingen, checkout-stappen, 404. */
  noindex?: boolean;
}

export const SEO = {
  home: {
    title: "Bouwdroger huren in Vlaanderen — geleverd in 24 u | Vernast",
    description:
      "Bereken exact welke bouwdroger u nodig heeft en boek meteen online. Levering, installatie, vochtmeting en ophaling inbegrepen — binnen 24 uur in heel Vlaanderen.",
  },

  /* ---------- Toepassingen: elk een eigen zoekintentie ---------- */
  nieuwbouw: {
    title: "Bouwdroger voor chape en pleisterwerk drogen | Vernast",
    description:
      "Chape gelegd of net gepleisterd? Droog tot vier keer sneller met een professionele bouwdroger. Levering aan huis, installatie en gratis vochtmeting inbegrepen.",
  },
  waterschade: {
    title: "Bouwdroger bij waterschade — vandaag nog geleverd | Vernast",
    description:
      "Waterlek of overstroming? Wij leveren uw bouwdroger en ventilatoren vandaag nog. De eerste 48 uur bepalen of u schimmel en structurele schade voorblijft.",
  },
  renovatie: {
    title: "Vochtige kelder of schimmel drogen | Vernast",
    description:
      "Vochtige muren, muffe geur of schimmel in kelder of renovatie? Pak het aan met een professionele bouwdroger. Verhuur met levering en gratis vochtmeting.",
  },

  /* ---------- Aanbod ---------- */
  machines: {
    title: "Ons gamma: bouwdrogers, ventilatoren en bouwkachels | Vernast",
    description:
      "Bekijk alle toestellen die u bij ons huurt: condensontvochtigers van 50 tot 90 l per dag, axiaal- en radiaalventilatoren en elektrische bouwkachels.",
  },
  prijzen: {
    title: "Wat kost een bouwdroger huren? Alle prijzen | Vernast",
    description:
      "Eén dagprijs, alles inbegrepen: geen waarborg, geen verborgen kosten. Bekijk de huurprijzen per toestel en per droogpakket, met korting bij langere huur.",
  },
  /*
     De catalogus van de ECO-reeks. Uit de index gehouden zolang die reeks
     naast /verhuur/toestel/* bestaat: /machines vertelt hetzelfde gamma met
     meer inhoud, en deze pagina linkt enkel door naar /product/*, dat om
     dezelfde reden op noindex staat. Een overzicht indexeren waarvan geen van
     de bestemmingen indexeerbaar is, levert een doodlopende zoekingang op. */
  shop: {
    title: "Bouwdrogers, ventilatoren en toebehoren huren | Vernast",
    description:
      "Blader door het volledige verhuuraanbod: bouwdrogers, ventilatoren, bouwkachels, condenspompen en toebehoren. Direct beschikbaar met levering binnen 24 uur.",
    noindex: true,
  },

  /* ---------- Service ---------- */
  levering: {
    title: "Bouwdroger laten leveren en installeren | Vernast",
    description:
      "Wij brengen uw droogpakket binnen 24 uur naar de werf, plaatsen elk toestel, sluiten de condensafvoer aan en halen alles weer op zodra u droog bent.",
  },
  afhalen: {
    title: "Bouwdroger afhalen in Aartselaar — € 25 korting | Vernast",
    description:
      "Zelf ophalen in Aartselaar, Boomsesteenweg 12? Dat kan elke werkdag van 08:00 tot 17:00, met uitleg bij afhaling en € 25 korting op uw huurprijs.",
  },
  reserveren: {
    title: "Bouwdroger online reserveren in 3 stappen | Vernast",
    description:
      "Kies uw toestel, vul uw gegevens in en bevestig. Geen voorschot, dagelijks opzegbaar en levering binnen 24 uur. Wij bellen u binnen één werkdag na.",
  },

  /* ---------- Rekenhulpen ----------
     Twee calculators met een verschillende intentie: deze rekent uit hoeveel
     capaciteit een ruimte nodig heeft, de verhuurcalculator stelt een compleet
     pakket samen. Overlappen ze in de praktijk toch, dan is er één te veel. */
  calculator: {
    title: "Welke bouwdroger heb ik nodig? Bereken het | Vernast",
    description:
      "Geef uw oppervlakte en plafondhoogte in en zie meteen hoeveel liter vochtafvoer per dag u nodig heeft, welk toestel daarbij past en hoeveel units.",
  },
  calculatorDetail: {
    title: "Uw berekende droogadvies | Vernast Bouwdrogers",
    description: "Het resultaat van uw capaciteitsberekening, met de toestellen die daarbij passen.",
    noindex: true,
  },

  /* ---------- Bedrijf ---------- */
  overOns: {
    title: "Over Vernast — Belgisch familiebedrijf in bouwdroging",
    description:
      "Vernast Bouwdrogers is een Belgisch familiebedrijf uit Aartselaar met jarenlange ervaring in bouwdroging, vochtbestrijding en schilderwerken.",
  },
  contact: {
    title: "Contact — bel 03 689 90 65 of mail ons | Vernast",
    description:
      "Vragen over bouwdroging of een dringende levering nodig? Bel 03 689 90 65 op werkdagen tussen 08:00 en 17:00, of stuur ons een bericht.",
  },
  klantservice: {
    title: "Klantenservice: bestelling, levering en toestel | Vernast",
    description:
      "Onze klantenservice helpt u met bestellingen, levering, retour en het bedienen van uw bouwdroger. Bel, mail of vind meteen antwoord op de veelgestelde vragen.",
  },
  realisaties: {
    title: "Realisaties: droogprojecten in heel Vlaanderen | Vernast",
    description:
      "Van nieuwbouwwoning tot ondergelopen kelder: bekijk droogprojecten die wij uitvoerden, met de toestellen die er stonden en de behaalde droogtijd.",
  },

  /* ---------- Verhuurfunnel ---------- */
  verhuurCalculator: {
    title: "Stel uw droogpakket samen in 5 vragen | Vernast Verhuur",
    description:
      "Beantwoord vijf vragen over uw woning, wat u droogt en uw verwarming. Wij berekenen automatisch de juiste toestellen, de droogtijd en de prijs.",
  },
  verhuurAfhalen: {
    title: "Losse toestellen huren en afhalen in Aartselaar | Vernast",
    description:
      "Huur losse bouwdrogers, ventilatoren en kachels tegen lagere afhaalprijzen en haal ze op in ons magazijn in Aartselaar. Online reserveren met 5% korting of een voorschot.",
  },
  verhuurBoeking: {
    title: "Uw boeking afronden | Vernast Verhuur",
    description: "Kies uw dekking, extra's en leverdatum en rond uw boeking af.",
    noindex: true,
  },

  /* ---------- Transactioneel ---------- */
  booking: {
    title: "Uw boeking aanvragen | Vernast Bouwdrogers",
    description: "Vul uw gegevens in; wij nemen binnen één werkdag contact op om de levering af te spreken.",
    noindex: true,
  },
  bookingSuccess: {
    title: "Bedankt voor uw reservatie | Vernast Bouwdrogers",
    description: "Uw reservatie is ontvangen. Wij bevestigen telefonisch binnen één werkdag.",
    noindex: true,
  },
  notFound: {
    title: "Pagina niet gevonden | Vernast Bouwdrogers",
    description: "Deze pagina bestaat niet of is verplaatst.",
    noindex: true,
  },
} satisfies Record<string, SeoEntry>;
