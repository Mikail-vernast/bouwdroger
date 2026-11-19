import type { SeoEntry, SeoSleutel } from "./seo";

/**
 * Titels en beschrijvingen in het Frans, met dezelfde sleutels als `SEO` in
 * `seo.ts` en dezelfde richtlijn: titel 50–60 tekens met het zoekwoord vooraan,
 * beschrijving 120–160 tekens. Belgisch Frans: « déshumidificateur de chantier »,
 * « chape », « plafonnage », vouvoiement.
 *
 * Het type is `Record<SeoSleutel, …>`: een nieuwe sleutel in `seo.ts` zonder
 * Franse tekst breekt de typecheck, in plaats van stil een Nederlandse titel op
 * een Franse pagina te zetten. De import is `import type`, dus er ontstaat geen
 * cirkel tussen deze module en `seo.ts` tijdens het uitvoeren.
 *
 * `noindex` volgt het Nederlands; `src/test/seoFr.test.ts` bewaakt dat.
 */
export const SEO_FR: Record<SeoSleutel, SeoEntry> = {
  home: {
    title: "Location déshumidificateur de chantier en 24 h | Vernast",
    description:
      "Calculez le déshumidificateur de chantier qu'il vous faut et réservez en ligne. Livraison, installation, mesure d'humidité et enlèvement compris, en 24 h.",
  },

  /* ---------- Applications ---------- */
  nieuwbouw: {
    title: "Séchage nouvelle construction, chape, plafonnage | Vernast",
    description:
      "Chape coulée ou plafonnage frais ? Séchez jusqu'à quatre fois plus vite avec un déshumidificateur de chantier. Livraison, installation et mesure gratuite.",
  },
  chapeDrogen: {
    title: "Séchage chape : pack avec déshumidificateur | Vernast",
    description:
      "Sécher une chape avec un pack de séchage : durée selon l'épaisseur, livraison et installation, mesure d'humidité avant et après, et la garantie de séchage.",
  },
  pleisterwerkDrogen: {
    title: "Séchage plafonnage avec un déshumidificateur | Vernast",
    description:
      "Sécher un plafonnage avec un pack de séchage : durée selon l'épaisseur, livraison et installation, mesure avant et après, et une date pour le peintre.",
  },
  waterschade: {
    title: "Dégâts des eaux : déshumidificateur livré aujourd'hui",
    description:
      "Fuite ou inondation ? Nous livrons déshumidificateur et ventilateurs le jour même. Les 48 premières heures décident si vous évitez moisissures et dégâts.",
  },
  renovatie: {
    title: "Rénovation : sécher une cave humide ou moisie | Vernast",
    description:
      "Murs humides, odeur de moisi ou moisissures dans la cave ? Traitez-les avec un déshumidificateur de chantier. Location avec livraison et mesure gratuite.",
  },
  ozonbehandeling: {
    title: "Traitement ozone contre moisissures et odeurs | Vernast",
    description:
      "Moisissures ou odeur de moisi qui reviennent ? Un traitement à l'ozone élimine les spores restantes dans toute la pièce. Réservation en ligne, par notre équipe.",
  },
  ontschimmeling: {
    title: "Élimination moisissures : traiter la source | Vernast",
    description:
      "Faire éliminer des moisissures ? Nous traitons la cause, retirons les matériaux atteints et séchons jusqu'à ce que la mesure le confirme. Visite gratuite.",
  },

  /* ---------- Offre ---------- */
  machines: {
    title: "Location déshumidificateurs, ventilateurs, chauffages",
    description:
      "Tous les appareils à louer : déshumidificateurs à condensation de 50 à 90 l par jour, ventilateurs axiaux et radiaux et chauffages de chantier électriques.",
  },
  prijzen: {
    title: "Prix location déshumidificateur et garantie | Vernast",
    description:
      "Le prix d'un déshumidificateur de chantier par jour, par semaine ou par pack de séchage. Sans caution, garantie de séchage à 100 % sur les packs installés.",
  },

  /* ---------- Service ---------- */
  levering: {
    title: "Livraison et installation de déshumidificateurs | Vernast",
    description:
      "Nous livrons votre pack de séchage sur chantier en 24 h, installons chaque appareil, raccordons l'évacuation des condensats et reprenons tout une fois sec.",
  },
  afhalen: {
    title: "Enlèvement déshumidificateur à Aartselaar | Vernast",
    description:
      "Enlever un déshumidificateur chez Vernast à Aartselaar : réservation en ligne, transport, créneaux, adresse et itinéraire vers notre dépôt le long de l'A12.",
  },

  /* ---------- Entreprise ---------- */
  overOns: {
    title: "À propos de Vernast, entreprise familiale belge de séchage",
    description:
      "Vernast est une entreprise familiale belge d'Aartselaar, forte de nombreuses années d'expérience en séchage de chantier, lutte contre l'humidité et peinture.",
  },
  contact: {
    title: "Contact : appelez le 03 689 90 65 ou écrivez-nous | Vernast",
    description:
      "Une question sur le séchage ou une livraison urgente ? Appelez le 03 689 90 65 en semaine entre 8 h et 17 h, ou envoyez-nous un message.",
  },
  klantservice: {
    title: "Service client : commande, livraison et appareil | Vernast",
    description:
      "Notre service client vous aide pour vos commandes, la livraison, le retour et l'utilisation de votre déshumidificateur. Appelez, écrivez ou consultez la FAQ.",
  },
  realisaties: {
    title: "Réalisations : 22 chantiers séchés avec photos | Vernast",
    description:
      "Du plafonnage d'une villa neuve à une cave inondée : 22 chantiers de séchage que nous avons réalisés, chacun avec les photos prises sur place.",
  },

  /* ---------- Tout sur le séchage ---------- */
  drooggarantie: {
    title: "Garantie de séchage : 100 % sec ou prolongé sans frais",
    description:
      "La garantie de séchage Vernast : votre logement est 100 % sec dans la période calculée, confirmé par une mesure. Pas sec ? Vous prolongez sans frais.",
  },
  hoeDrogenWerkt: {
    title: "Comment fonctionne le séchage d'un chantier ? | Vernast",
    description:
      "Comment fonctionne un déshumidificateur de chantier ? Température, humidité et circulation d'air : du plafonnage ou de la chape humide à une construction sèche.",
  },
  waaromBouwdroging: {
    title: "Pourquoi sécher son chantier ? Plus vite, plus sûr | Vernast",
    description:
      "Le séchage naturel est lent et imprévisible. Un séchage contrôlé protège vos finitions, accélère votre planning et se termine par une mesure, avec garantie.",
  },

  /* ---------- Guides ---------- */
  gids: {
    title: "Guides du séchage : durée et consommation | Vernast",
    description:
      "Guides pratiques : combien de temps sèchent chape et plafonnage, choisir un déshumidificateur à condensation ou à adsorption, et sa consommation électrique.",
  },
  gidsChapeDrogen: {
    title: "Temps de séchage d'une chape : durée par cm | Vernast",
    description:
      "Combien de temps sèche une chape ? Durée selon l'épaisseur, naturellement ou avec déshumidificateur, chape ciment ou anhydrite, et quand mesurer l'humidité.",
  },
  gidsPleisterDrogen: {
    title: "Temps de séchage d'un plafonnage avant peinture | Vernast",
    description:
      "Combien de temps sèche un plafonnage avant de peindre ? Durée selon l'épaisseur, enduit plâtre ou ciment, et pourquoi l'humidité reste dans une maison fermée.",
  },
  gidsCondensAdsorptie: {
    title: "Déshumidificateur à condensation ou à adsorption ? | Vernast",
    description:
      "Condensation ou adsorption ? Leur fonctionnement, pourquoi un appareil à condensation perd du rendement sous environ 15 °C et lequel convient à votre situation.",
  },
  gidsNatuurlijkDrogen: {
    title: "Séchage naturel ou déshumidificateur en construction neuve ?",
    description:
      "Combien de temps dure le séchage naturel d'une nouvelle construction, et que change un déshumidificateur ? La différence par saison, par couche et en semaines.",
  },
  gidsStroomverbruik: {
    title: "Consommation électrique d'un déshumidificateur | Vernast",
    description:
      "Combien consomme un déshumidificateur de chantier ? La puissance de nos appareils, un calcul par jour et par semaine, et pourquoi il peut tourner la nuit.",
  },
  luchtontvochtigerHuren: {
    title: "Location déshumidificateur d'air pour cave | Vernast",
    description:
      "Louer un déshumidificateur pour une cave humide, après un dégât des eaux ou en construction. Appareils à condensation de 50 à 110 l par jour, livrés.",
  },

  /* ---------- Juridique ---------- */
  algemeneVoorwaarden: {
    title: "Conditions générales de location | Vernast",
    description:
      "Les conditions générales de location de Vernast : durée de location, livraison et enlèvement, prix, responsabilité, assurances et politique de confidentialité.",
    noindex: true,
  },
  sitemap: {
    title: "Plan du site : toutes les pages | Vernast Bouwdrogers",
    description:
      "Toutes les pages de Vernast en un coup d'œil : packs de séchage, appareils et leur capacité, guides, réalisations et chaque commune où nous livrons.",
  },
  privacy: {
    title: "Politique de confidentialité | Vernast Bouwdrogers",
    description:
      "La politique de confidentialité de Vernast : quelles données personnelles nous traitons, pourquoi, combien de temps et quels sont vos droits selon le RGPD.",
    noindex: true,
  },

  /* ---------- Tunnel de location ---------- */
  verhuurCalculator: {
    title: "Composez votre pack de séchage en 5 questions | Vernast",
    description:
      "Répondez à cinq questions sur votre logement, ce que vous séchez et votre chauffage. Nous calculons les bons appareils, la durée de séchage et le prix.",
  },
  verhuurSimulator: {
    title: "Simulateur de séchage : vos déshumidificateurs à l'œuvre",
    description:
      "Choisissez votre logement, les niveaux, chape ou plafonnage et la phase du chantier. Voyez quel appareil va dans quelle pièce et le prix du pack de séchage.",
  },
  verhuurAfhalen: {
    title: "Location d'appareils à enlever à Aartselaar | Vernast",
    description:
      "Louez déshumidificateurs, ventilateurs et chauffages à prix d'enlèvement réduits et enlevez-les à notre dépôt d'Aartselaar. Réservation en ligne, 5 % de remise.",
  },
  toebehorenCondenspomp: {
    title: "Location pompe à condensats pour déshumidificateur | Vernast",
    description:
      "Louez une pompe à condensats pour évacuer l'eau automatiquement : 90 l/h, refoule jusqu'à 3,90 m. Avec un pack livré ou avec un appareil enlevé.",
  },
  verhuurBoeking: {
    title: "Finaliser votre réservation | Vernast",
    description: "Choisissez votre couverture, vos options et la date de livraison, puis finalisez votre réservation.",
    noindex: true,
  },

  /* ---------- Transactionnel ---------- */
  booking: {
    title: "Demander votre réservation | Vernast Bouwdrogers",
    description: "Complétez vos coordonnées ; nous vous contactons dans un jour ouvrable pour convenir de la livraison.",
    noindex: true,
  },
  bookingSuccess: {
    title: "Merci pour votre réservation | Vernast Bouwdrogers",
    description: "Votre réservation est bien reçue. Nous la confirmons par téléphone dans un jour ouvrable.",
    noindex: true,
  },
  notFound: {
    title: "Page introuvable | Vernast Bouwdrogers",
    description: "Cette page n'existe pas ou a été déplacée.",
    noindex: true,
  },
};
