import type { Gemeente } from "../gemeenten.js";

/**
 * De Franse teksten van de gemeentepagina's in deze provincie, gesleuteld op
 * de Nederlandse slug. Zie README.md in deze map voor de regels en hoe een
 * gemeente aangezet wordt (`aan/limburg.ts`).
 */
export const GEMEENTEN: Record<string, Gemeente> = {
  hasselt: {
    slug: "hasselt",
    title: "Louer un déshumidificateur de chantier à Hasselt | Vernast",
    description: "Louer un déshumidificateur à Hasselt ? Pack de séchage Vernast avec livraison, installation et reprise, pour construction neuve, rénovation ou dégâts des eaux.",
    h1: "Location de déshumidificateur de chantier à Hasselt",
    kicker: "Hasselt · livraison sur votre chantier",
    rit: {
      afstand: "environ 85 km",
      tijd: "environ une heure",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Hasselt pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Hasselt",
      alineas: [
        "Vernast livre à Hasselt et dans les localités voisines comme Zonhoven, Diepenbeek, Alken. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Vous séchez un appartement ou un étage ? Indiquez s'il y a un ascenseur ou un escalier fixe et quelle est la largeur de l'accès. L'espace disponible détermine en partie quels appareils nous pouvons placer. Dans un bâtiment partagé, convenez à l'avance de qui ouvre la porte et de l'endroit où le matériel peut être déposé.",
        "Une nouvelle chape et un plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été posé. L'installation de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk350",
        waarom: "**Pour les grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et du matériau humide. L'agencement de votre chantier détermine où les appareils seront placés.",
      },
      {
        key: "ttk170",
        waarom: "**Pour une pièce séparée ou une zone de séchage plus petite.** Discutez des dimensions, de la température et de la quantité d'humidité pour déterminer si cet appareil a une capacité suffisante.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk650",
        waarom: "**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Hasselt",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Hasselt, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Hasselt",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["zonhoven", "diepenbeek", "alken", "lummen", "herk-de-stad", "genk"],
    faq: [
      {
        q: "Comment organiser une livraison à Hasselt ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Hasselt, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
      },
      {
        q: "De combien de déshumidificateurs ai-je besoin ?",
        a: "Cela dépend du volume, de l'agencement, du matériau et de la quantité d'humidité. Un étage ouvert demande une autre installation que plusieurs pièces fermées. Utilisez le calculateur pour votre pack et demandez conseil si votre situation est particulière, par exemple une pièce haute ou de l'humidité cachée.",
      },
      {
        q: "Comment savoir quand le sol ou le mur est assez sec ?",
        a: "La durée de location seule ne donne aucune certitude à ce sujet. Faites contrôler l'humidité résiduelle avec une méthode adaptée au matériau. Votre poseur de sol ou votre peintre évalue quelle valeur d'humidité et quelle mesure complémentaire éventuelle sont nécessaires avant de poser la finition choisie.",
      },
      {
        q: "Un déshumidificateur peut-il être placé à l'étage ?",
        a: "Cela dépend de l'accès et de l'appareil. Indiquez dans votre demande l'étage, un éventuel ascenseur et les passages étroits. S'il n'y a pas d'escalier fixe, discutez au préalable de la façon dont les appareils peuvent être montés et du supplément applicable.",
      },
      {
        q: "De quelle alimentation électrique ai-je besoin ?",
        a: "La puissance de raccordement varie selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW nécessitent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Hasselt ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  genk: {
    slug: "genk",
    title: "Déshumidificateur de chantier à louer à Genk | Vernast",
    description: "Un déshumidificateur de chantier à Genk ? Calculez votre pack de séchage chez Vernast : livraison, installation et reprise comprises, conseils inclus.",
    h1: "Location de déshumidificateur de chantier à Genk",
    kicker: "Genk · livraison sur votre chantier",
    rit: {
      afstand: "environ 95 km",
      tijd: "environ une heure et cinq minutes",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Genk pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Genk",
      alineas: [
        "Vernast livre à Genk et dans les localités voisines comme Hasselt, Zonhoven, Diepenbeek. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une nouvelle chape et un plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été posé. L'installation de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk170",
        waarom: "**Pour une pièce séparée ou une zone de séchage plus petite.** Discutez des dimensions, de la température et de la quantité d'humidité pour déterminer si cet appareil a une capacité suffisante.",
      },
      {
        key: "ttk350",
        waarom: "**Pour les grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et du matériau humide. L'agencement de votre chantier détermine où les appareils seront placés.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk650",
        waarom: "**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Genk",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Genk, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Genk",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["hasselt", "zonhoven", "diepenbeek", "zutendaal", "as", "oudsbergen"],
    faq: [
      {
        q: "Comment organiser une livraison à Genk ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Genk, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
      },
      {
        q: "De combien de déshumidificateurs ai-je besoin ?",
        a: "Cela dépend du volume, de l'agencement, du matériau et de la quantité d'humidité. Un étage ouvert demande une autre installation que plusieurs pièces fermées. Utilisez le calculateur pour votre pack et demandez conseil si votre situation est particulière, par exemple une pièce haute ou de l'humidité cachée.",
      },
      {
        q: "Comment savoir quand le sol ou le mur est assez sec ?",
        a: "La durée de location seule ne donne aucune certitude à ce sujet. Faites contrôler l'humidité résiduelle avec une méthode adaptée au matériau. Votre poseur de sol ou votre peintre évalue quelle valeur d'humidité et quelle mesure complémentaire éventuelle sont nécessaires avant de poser la finition choisie.",
      },
      {
        q: "Un déshumidificateur règle-t-il un problème d'humidité persistant ?",
        a: "Un déshumidificateur de chantier aide à évacuer l'humidité, mais ne répare pas une fuite, une infiltration d'eau ou une barrière contre l'humidité manquante. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau être mouillé, même pendant que le déshumidificateur fonctionne.",
      },
      {
        q: "De quelle alimentation électrique ai-je besoin ?",
        a: "La puissance de raccordement varie selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW nécessitent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Genk ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
};
