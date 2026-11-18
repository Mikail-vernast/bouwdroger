import type { Copy } from "@/i18n/useTaal";

/**
 * De vaste teksten van de headers (`V3Header`, `VHeader`, `Navbar`) en het
 * mobiele menu, per taal.
 *
 * Eén bestand voor de drie schillen omdat ze dezelfde zinnen dragen: de
 * openingsuren, de knop naar de calculator, de menukoppen. Stonden ze per
 * component vertaald, dan liep de ene schil na de eerste tekstwijziging uit de
 * pas met de andere — zoals de menulijsten vóór `src/data/navigation.ts`.
 *
 * De links zelf staan in `navigation.ts`; hier alleen wat geen link is, en de
 * paar vaste menuregels die in geen lijst staan.
 */
export interface SchilTekst {
  uren: string;
  /** Rechts in de topregel van de homepage-schil. */
  belofteV3: string;
  /** Rechts in de topregel van de verhuurschil. */
  belofteV: string;
  hoofdnav: string;
  groep: string;
  groepVocht: [string, string];
  groepVerhuur: [string, string];
  groepSchilder: [string, string];
  bouwdroging: string;
  allesOverDrogen: string;
  kopToestellen: string;
  kopPakketten: string;
  kopToepassingen: string;
  kopService: string;
  levering: string;
  afhalen: string;
  vochtmeting: string;
  dekking: string;
  verlengen: string;
  megaVraag1: string;
  megaUitleg1: string;
  megaVraag2: string;
  megaUitleg2: string;
  calculatorKnop: string;
  realisaties: string;
  overOns: string;
  klantenservice: string;
  contact: string;
  winkelwagen: string;
  /* Mobiel menu */
  menuOpen: string;
  menuSluit: string;
  hoofdmenu: string;
  naarHome: string;
  bel: (nummer: string) => string;
  chipService: string;
  berekenPakket: string;
}

export const SCHIL_COPY = {
  nl: {
    uren: "Ma–Vr 08:00–17:00",
    belofteV3: "Droogpakket berekend op uw woning · u kiest zelf uw leverdatum",
    belofteV: "Erkend droogspecialist · u kiest uw leverdatum",
    hoofdnav: "Hoofdnavigatie",
    groep: "Group",
    groepVocht: ["Vochtbestrijding", "Kelder · muren · gevel"],
    groepVerhuur: ["Verhuur & bouwdroging", "Toestellen en pakketten"],
    groepSchilder: ["Schilderwerken", "Binnen & buiten"],
    bouwdroging: "Bouwdroging",
    allesOverDrogen: "Alles over drogen",
    kopToestellen: "Toestellen",
    kopPakketten: "Pakketten",
    kopToepassingen: "Toepassingen",
    kopService: "Service",
    levering: "Levering & installatie",
    afhalen: "Afhalen in Aartselaar",
    vochtmeting: "Vochtmeting inbegrepen",
    dekking: "Dekking & eigen risico",
    verlengen: "Verlengen of stoppen",
    megaVraag1: "Niet zeker welk pakket u nodig heeft?",
    megaUitleg1: "Onze Calculator bepaalt in 5 vragen de juiste toestellen, droogtijd en prijs.",
    megaVraag2: "Liever eerst weten wat het kost?",
    megaUitleg2:
      "De Calculator rekent uw volume uit en zegt welk toestel en welke droogtijd erbij horen.",
    calculatorKnop: "Gratis Calculator",
    realisaties: "Realisaties",
    overOns: "Over ons",
    klantenservice: "Klantenservice",
    contact: "Contact",
    winkelwagen: "Winkelwagen",
    menuOpen: "Menu openen",
    menuSluit: "Menu sluiten",
    hoofdmenu: "Hoofdmenu",
    naarHome: "Naar de homepage",
    bel: (nummer) => `Bel ${nummer}`,
    chipService: "Levering & service",
    berekenPakket: "Bereken uw droogpakket",
  },
  fr: {
    uren: "Lu–Ve 8 h–17 h",
    belofteV3: "Pack calculé pour votre logement · livraison à la date choisie",
    belofteV: "Spécialiste agréé du séchage · date de livraison au choix",
    hoofdnav: "Navigation principale",
    groep: "Groupe",
    groepVocht: ["Traitement de l'humidité", "Cave · murs · façade"],
    groepVerhuur: ["Location & séchage", "Appareils et packs"],
    groepSchilder: ["Travaux de peinture", "Intérieur & extérieur"],
    bouwdroging: "Séchage",
    allesOverDrogen: "Tout sur le séchage",
    kopToestellen: "Appareils",
    kopPakketten: "Packs",
    kopToepassingen: "Applications",
    kopService: "Service",
    levering: "Livraison & installation",
    afhalen: "Enlèvement à Aartselaar",
    vochtmeting: "Mesure d'humidité comprise",
    dekking: "Couverture & franchise",
    verlengen: "Prolonger ou arrêter",
    megaVraag1: "Vous ne savez pas quel pack choisir ?",
    megaUitleg1:
      "Notre calculateur détermine en 5 questions les bons appareils, la durée de séchage et le prix.",
    megaVraag2: "Vous voulez d'abord connaître le prix ?",
    megaUitleg2:
      "Le calculateur évalue votre volume et vous indique l'appareil et la durée de séchage qui conviennent.",
    calculatorKnop: "Calculateur gratuit",
    realisaties: "Réalisations",
    overOns: "À propos",
    klantenservice: "Service client",
    contact: "Contact",
    winkelwagen: "Panier",
    menuOpen: "Ouvrir le menu",
    menuSluit: "Fermer le menu",
    hoofdmenu: "Menu principal",
    naarHome: "Vers la page d'accueil",
    bel: (nummer) => `Appeler le ${nummer}`,
    chipService: "Livraison & service",
    berekenPakket: "Calculez votre pack de séchage",
  },
} satisfies Copy<SchilTekst>;
