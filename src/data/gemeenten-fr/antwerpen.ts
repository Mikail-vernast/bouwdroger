import type { Gemeente } from "../gemeenten.js";

/**
 * De Franse teksten van de gemeentepagina's in deze provincie, gesleuteld op
 * de Nederlandse slug. Zie README.md in deze map voor de regels en hoe een
 * gemeente aangezet wordt (`aan/antwerpen.ts`).
 */
export const GEMEENTEN: Record<string, Gemeente> = {
  mechelen: {
    slug: "mechelen",
    title: "Location de déshumidificateur à Malines en 24 h | Vernast",
    description:
      "Déshumidificateur de chantier à Malines ? Pack de séchage Vernast avec livraison, installation et reprise. Conseils pour neuf, rénovation et dégâts des eaux.",
    h1: "Location de déshumidificateur de chantier à Malines",
    kicker: "Malines · livraison sur votre chantier",
    rit: { afstand: "environ 20 km", tijd: "environ une demi-heure" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Malines pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Malines",
      alineas: [
        "Vernast livre à Malines et dans les localités voisines comme Duffel, Lierre et Heist-op-den-Berg. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Vous séchez un appartement ou un étage ? Précisez s'il y a un ascenseur ou un escalier fixe et quelle est la largeur de l'accès. L'espace disponible détermine en partie quels appareils nous pouvons installer. Dans un immeuble partagé, convenez à l'avance de qui ouvre la porte et de l'endroit où le matériel peut être déposé.",
        "Une chape neuve et le plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Précisez aussi quand le matériau a été posé. Le dispositif de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche superficielle sèche ne signifie pas automatiquement que tout le sol ou tout le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk170",
        waarom: "**Pour une pièce isolée ou une zone de séchage plus petite.** Indiquez les dimensions, la température et la quantité d'humidité pour déterminer si cet appareil a une capacité suffisante.",
      },
      {
        key: "ttk350",
        waarom: "**Pour de plus grandes pièces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et des matériaux humides. La disposition de votre chantier détermine où les appareils seront placés.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air à côté du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "revolution",
        waarom: "**Pour un dispositif de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Malines",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Malines, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Malines",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["duffel", "lier", "heist-op-den-berg"],
    faq: [
      {
        q: "Comment organiser une livraison à Malines ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Malines, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
      },
      {
        q: "De combien de déshumidificateurs ai-je besoin ?",
        a: "Cela dépend du volume, de la disposition, du matériau et de la quantité d'humidité. Un étage ouvert demande un autre dispositif que plusieurs pièces fermées. Utilisez le calculateur pour votre pack et demandez conseil si votre situation est différente, par exemple en cas de pièce haute ou d'humidité cachée.",
      },
      {
        q: "Comment savoir quand le sol ou le mur est assez sec ?",
        a: "La durée de location seule ne donne aucune certitude à ce sujet. Faites contrôler l'humidité résiduelle avec une méthode adaptée au matériau. Votre poseur de sol ou votre peintre détermine quelle valeur d'humidité et quelle éventuelle mesure complémentaire sont nécessaires avant de pouvoir appliquer la finition choisie.",
      },
      {
        q: "Un déshumidificateur peut-il être installé à l'étage ?",
        a: "Cela dépend de l'accès et de l'appareil. Lors de votre demande, signalez l'étage, un éventuel ascenseur et les passages étroits. S'il n'y a pas d'escalier fixe, discutez à l'avance de la manière de monter les appareils et du supplément applicable.",
      },
      {
        q: "Quelle alimentation électrique me faut-il ?",
        a: "La puissance de raccordement diffère selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Malines ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  lier: {
    slug: "lier",
    title: "Louer un déshumidificateur à Lierre, livré en 24 h | Vernast",
    description:
      "Louer un déshumidificateur à Lierre : livraison, installation et reprise comprises. Conseils Vernast pour construction neuve, rénovation et dégâts des eaux.",
    h1: "Location de déshumidificateur de chantier à Lierre",
    kicker: "Lierre · livraison sur votre chantier",
    rit: { afstand: "environ 20 km", tijd: "environ une demi-heure" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Lierre pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Lierre",
      alineas: [
        "Vernast livre à Lierre et dans les localités voisines comme Duffel, Malines et Heist-op-den-Berg. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Ensuite, nous examinons quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une chape neuve et le plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Précisez aussi quand le matériau a été posé. Le dispositif de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche superficielle sèche ne signifie pas automatiquement que tout le sol ou tout le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk350",
        waarom: "**Pour de plus grandes pièces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et des matériaux humides. La disposition de votre chantier détermine où les appareils seront placés.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air à côté du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "revolution",
        waarom: "**Pour un dispositif de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttk170",
        waarom: "**Pour une pièce isolée ou une zone de séchage plus petite.** Indiquez les dimensions, la température et la quantité d'humidité pour déterminer si cet appareil a une capacité suffisante.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Lierre",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Lierre, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Lierre",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["duffel", "mechelen", "heist-op-den-berg"],
    faq: [
      {
        q: "Comment organiser une livraison à Lierre ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Lierre, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
      },
      {
        q: "De combien de déshumidificateurs ai-je besoin ?",
        a: "Cela dépend du volume, de la disposition, du matériau et de la quantité d'humidité. Un étage ouvert demande un autre dispositif que plusieurs pièces fermées. Utilisez le calculateur pour votre pack et demandez conseil si votre situation est différente, par exemple en cas de pièce haute ou d'humidité cachée.",
      },
      {
        q: "Comment savoir quand le sol ou le mur est assez sec ?",
        a: "La durée de location seule ne donne aucune certitude à ce sujet. Faites contrôler l'humidité résiduelle avec une méthode adaptée au matériau. Votre poseur de sol ou votre peintre détermine quelle valeur d'humidité et quelle éventuelle mesure complémentaire sont nécessaires avant de pouvoir appliquer la finition choisie.",
      },
      {
        q: "Un déshumidificateur résout-il un problème d'humidité permanent ?",
        a: "Un déshumidificateur aide à évacuer l'humidité, mais ne répare pas une fuite, une infiltration d'eau ou une barrière contre l'humidité manquante. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut être mouillé à nouveau, même pendant que le déshumidificateur fonctionne.",
      },
      {
        q: "Quelle alimentation électrique me faut-il ?",
        a: "La puissance de raccordement diffère selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Lierre ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  "antwerpen-stad": {
    slug: "antwerpen-stad",
    title: "Déshumidificateur à Anvers, ville et districts | Vernast",
    description:
      "Location de déshumidificateur à Anvers, en ville et dans les districts. Pack de séchage Vernast avec livraison, installation et reprise comprises.",
    h1: "Location de déshumidificateur de chantier à Anvers, ville et districts",
    kicker: "Anvers · livraison sur votre chantier",
    rit: { afstand: "environ 12 km", tijd: "environ vingt minutes" },
    intro: [
      "Vous voulez louer un déshumidificateur de chantier à Anvers pour votre maison, votre appartement ou votre chantier ? Vernast livre en ville et dans les districts pour sécher une chape, un plafonnage ou des pièces après des dégâts des eaux. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour discuter de votre situation.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Anvers",
      alineas: [
        "Vernast livre à Anvers et dans les localités voisines comme Wilrijk, Mortsel et Edegem. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Vous séchez un appartement ou un étage ? Précisez s'il y a un ascenseur ou un escalier fixe et quelle est la largeur de l'accès. L'espace disponible détermine en partie quels appareils nous pouvons installer. Dans un immeuble partagé, convenez à l'avance de qui ouvre la porte et de l'endroit où le matériel peut être déposé.",
        "Une chape neuve et le plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Précisez aussi quand le matériau a été posé. Le dispositif de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche superficielle sèche ne signifie pas automatiquement que tout le sol ou tout le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk170",
        waarom: "**Pour une pièce isolée ou une zone de séchage plus petite.** Indiquez les dimensions, la température et la quantité d'humidité pour déterminer si cet appareil a une capacité suffisante.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air à côté du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "teddh30",
        waarom: "**Pour un chauffage d'appoint sur un chantier froid.** Ce chauffage électrique demande un raccordement 400 V adapté. Faites vérifier à l'avance si l'alimentation disponible correspond à la puissance de raccordement.",
      },
      {
        key: "ttk350",
        waarom: "**Pour de plus grandes pièces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et des matériaux humides. La disposition de votre chantier détermine où les appareils seront placés.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Anvers",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Anvers, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Anvers",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["wilrijk", "mortsel", "edegem", "schoten"],
    faq: [
      {
        q: "Comment organiser une livraison à Anvers ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Anvers, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
      },
      {
        q: "De combien de déshumidificateurs ai-je besoin ?",
        a: "Cela dépend du volume, de la disposition, du matériau et de la quantité d'humidité. Un étage ouvert demande un autre dispositif que plusieurs pièces fermées. Utilisez le calculateur pour votre pack et demandez conseil si votre situation est différente, par exemple en cas de pièce haute ou d'humidité cachée.",
      },
      {
        q: "Comment savoir quand le sol ou le mur est assez sec ?",
        a: "La durée de location seule ne donne aucune certitude à ce sujet. Faites contrôler l'humidité résiduelle avec une méthode adaptée au matériau. Votre poseur de sol ou votre peintre détermine quelle valeur d'humidité et quelle éventuelle mesure complémentaire sont nécessaires avant de pouvoir appliquer la finition choisie.",
      },
      {
        q: "Un déshumidificateur peut-il être installé à l'étage ?",
        a: "Cela dépend de l'accès et de l'appareil. Lors de votre demande, signalez l'étage, un éventuel ascenseur et les passages étroits. S'il n'y a pas d'escalier fixe, discutez à l'avance de la manière de monter les appareils et du supplément applicable.",
      },
      {
        q: "Quelle alimentation électrique me faut-il ?",
        a: "La puissance de raccordement diffère selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Anvers ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  berchem: {
    slug: "berchem",
    title: "Déshumidificateur à Berchem et Zurenborg | Vernast",
    description:
      "Dégâts des eaux, chape ou plafonnage à Berchem : louez un déshumidificateur Vernast. Livraison, installation et reprise comprises dans le pack de séchage.",
    h1: "Location de déshumidificateur de chantier à Berchem",
    kicker: "Berchem · livraison sur votre chantier",
    rit: { afstand: "environ 9 km", tijd: "environ un quart d'heure" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Berchem pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Berchem",
      alineas: [
        "Vernast livre à Berchem et dans les localités voisines comme Anvers, Borgerhout et Deurne. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Vous séchez un appartement ou un étage ? Précisez s'il y a un ascenseur ou un escalier fixe et quelle est la largeur de l'accès. L'espace disponible détermine en partie quels appareils nous pouvons installer. Dans un immeuble partagé, convenez à l'avance de qui ouvre la porte et de l'endroit où le matériel peut être déposé.",
        "Une chape neuve et le plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Précisez aussi quand le matériau a été posé. Le dispositif de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche superficielle sèche ne signifie pas automatiquement que tout le sol ou tout le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk170",
        waarom: "**Pour une pièce isolée ou une zone de séchage plus petite.** Indiquez les dimensions, la température et la quantité d'humidité pour déterminer si cet appareil a une capacité suffisante.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air à côté du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "teddh30",
        waarom: "**Pour un chauffage d'appoint sur un chantier froid.** Ce chauffage électrique demande un raccordement 400 V adapté. Faites vérifier à l'avance si l'alimentation disponible correspond à la puissance de raccordement.",
      },
      {
        key: "ttk350",
        waarom: "**Pour de plus grandes pièces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et des matériaux humides. La disposition de votre chantier détermine où les appareils seront placés.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Berchem",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Berchem, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Berchem",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["antwerpen-stad", "borgerhout", "deurne", "mortsel"],
    faq: [
      {
        q: "Comment organiser une livraison à Berchem ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Berchem, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
      },
      {
        q: "De combien de déshumidificateurs ai-je besoin ?",
        a: "Cela dépend du volume, de la disposition, du matériau et de la quantité d'humidité. Un étage ouvert demande un autre dispositif que plusieurs pièces fermées. Utilisez le calculateur pour votre pack et demandez conseil si votre situation est différente, par exemple en cas de pièce haute ou d'humidité cachée.",
      },
      {
        q: "Comment savoir quand le sol ou le mur est assez sec ?",
        a: "La durée de location seule ne donne aucune certitude à ce sujet. Faites contrôler l'humidité résiduelle avec une méthode adaptée au matériau. Votre poseur de sol ou votre peintre détermine quelle valeur d'humidité et quelle éventuelle mesure complémentaire sont nécessaires avant de pouvoir appliquer la finition choisie.",
      },
      {
        q: "Un déshumidificateur peut-il être installé à l'étage ?",
        a: "Cela dépend de l'accès et de l'appareil. Lors de votre demande, signalez l'étage, un éventuel ascenseur et les passages étroits. S'il n'y a pas d'escalier fixe, discutez à l'avance de la manière de monter les appareils et du supplément applicable.",
      },
      {
        q: "Quelle alimentation électrique me faut-il ?",
        a: "La puissance de raccordement diffère selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Berchem ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  borgerhout: {
    slug: "borgerhout",
    title: "Louer un déshumidificateur de chantier, Borgerhout | Vernast",
    description:
      "Une chape ou un plafonnage à sécher à Borgerhout ? Vernast loue des déshumidificateurs de chantier, livrés, installés et repris. Calculez votre pack en ligne.",
    h1: "Location de déshumidificateur de chantier à Borgerhout",
    kicker: "Borgerhout · livraison sur votre chantier",
    rit: { afstand: "environ 11 km", tijd: "environ vingt minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Borgerhout pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Borgerhout",
      alineas: [
        "Vernast livre à Borgerhout et dans les localités voisines comme Anvers, Berchem et Deurne. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Vous séchez un appartement ou un étage ? Précisez s'il y a un ascenseur ou un escalier fixe et quelle est la largeur de l'accès. L'espace disponible détermine en partie quels appareils nous pouvons installer. Dans un immeuble partagé, convenez à l'avance de qui ouvre la porte et de l'endroit où le matériel peut être déposé.",
        "Une chape neuve et le plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Précisez aussi quand le matériau a été posé. Le dispositif de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche superficielle sèche ne signifie pas automatiquement que tout le sol ou tout le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk170",
        waarom: "**Pour une pièce isolée ou une zone de séchage plus petite.** Indiquez les dimensions, la température et la quantité d'humidité pour déterminer si cet appareil a une capacité suffisante.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air à côté du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk350",
        waarom: "**Pour de plus grandes pièces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et des matériaux humides. La disposition de votre chantier détermine où les appareils seront placés.",
      },
      {
        key: "revolution",
        waarom: "**Pour un dispositif de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Borgerhout",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Borgerhout, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Borgerhout",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["antwerpen-stad", "berchem", "deurne", "merksem"],
    faq: [
      {
        q: "Comment organiser une livraison à Borgerhout ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Borgerhout, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
      },
      {
        q: "De combien de déshumidificateurs ai-je besoin ?",
        a: "Cela dépend du volume, de la disposition, du matériau et de la quantité d'humidité. Un étage ouvert demande un autre dispositif que plusieurs pièces fermées. Utilisez le calculateur pour votre pack et demandez conseil si votre situation est différente, par exemple en cas de pièce haute ou d'humidité cachée.",
      },
      {
        q: "Comment savoir quand le sol ou le mur est assez sec ?",
        a: "La durée de location seule ne donne aucune certitude à ce sujet. Faites contrôler l'humidité résiduelle avec une méthode adaptée au matériau. Votre poseur de sol ou votre peintre détermine quelle valeur d'humidité et quelle éventuelle mesure complémentaire sont nécessaires avant de pouvoir appliquer la finition choisie.",
      },
      {
        q: "Un déshumidificateur peut-il être installé à l'étage ?",
        a: "Cela dépend de l'accès et de l'appareil. Lors de votre demande, signalez l'étage, un éventuel ascenseur et les passages étroits. S'il n'y a pas d'escalier fixe, discutez à l'avance de la manière de monter les appareils et du supplément applicable.",
      },
      {
        q: "Quelle alimentation électrique me faut-il ?",
        a: "La puissance de raccordement diffère selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Borgerhout ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  deurne: {
    slug: "deurne",
    title: "Déshumidificateur à Deurne, à 20 minutes | Vernast",
    description:
      "Location de déshumidificateur à Deurne pour construction neuve, rénovation ou dégâts des eaux. Pack de séchage Vernast avec livraison et reprise.",
    h1: "Location de déshumidificateur de chantier à Deurne",
    kicker: "Deurne · livraison sur votre chantier",
    rit: { afstand: "environ 13 km", tijd: "environ vingt minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Deurne pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Deurne",
      alineas: [
        "Vernast livre à Deurne et dans les localités voisines comme Anvers, Borgerhout et Berchem. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Vous séchez un appartement ou un étage ? Précisez s'il y a un ascenseur ou un escalier fixe et quelle est la largeur de l'accès. L'espace disponible détermine en partie quels appareils nous pouvons installer. Dans un immeuble partagé, convenez à l'avance de qui ouvre la porte et de l'endroit où le matériel peut être déposé.",
        "Une chape neuve et le plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Précisez aussi quand le matériau a été posé. Le dispositif de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche superficielle sèche ne signifie pas automatiquement que tout le sol ou tout le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk350",
        waarom: "**Pour de plus grandes pièces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et des matériaux humides. La disposition de votre chantier détermine où les appareils seront placés.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air à côté du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "teddh30",
        waarom: "**Pour un chauffage d'appoint sur un chantier froid.** Ce chauffage électrique demande un raccordement 400 V adapté. Faites vérifier à l'avance si l'alimentation disponible correspond à la puissance de raccordement.",
      },
      {
        key: "ttk170",
        waarom: "**Pour une pièce isolée ou une zone de séchage plus petite.** Indiquez les dimensions, la température et la quantité d'humidité pour déterminer si cet appareil a une capacité suffisante.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Deurne",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Deurne, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Deurne",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["antwerpen-stad", "borgerhout", "berchem", "merksem"],
    faq: [
      {
        q: "Comment organiser une livraison à Deurne ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Deurne, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
      },
      {
        q: "De combien de déshumidificateurs ai-je besoin ?",
        a: "Cela dépend du volume, de la disposition, du matériau et de la quantité d'humidité. Un étage ouvert demande un autre dispositif que plusieurs pièces fermées. Utilisez le calculateur pour votre pack et demandez conseil si votre situation est différente, par exemple en cas de pièce haute ou d'humidité cachée.",
      },
      {
        q: "Comment savoir quand le sol ou le mur est assez sec ?",
        a: "La durée de location seule ne donne aucune certitude à ce sujet. Faites contrôler l'humidité résiduelle avec une méthode adaptée au matériau. Votre poseur de sol ou votre peintre détermine quelle valeur d'humidité et quelle éventuelle mesure complémentaire sont nécessaires avant de pouvoir appliquer la finition choisie.",
      },
      {
        q: "Un déshumidificateur peut-il être installé à l'étage ?",
        a: "Cela dépend de l'accès et de l'appareil. Lors de votre demande, signalez l'étage, un éventuel ascenseur et les passages étroits. S'il n'y a pas d'escalier fixe, discutez à l'avance de la manière de monter les appareils et du supplément applicable.",
      },
      {
        q: "Quelle alimentation électrique me faut-il ?",
        a: "La puissance de raccordement diffère selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Deurne ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  merksem: {
    slug: "merksem",
    title: "Location de déshumidificateur de chantier, Merksem | Vernast",
    description:
      "À Merksem, Vernast livre et installe vos déshumidificateurs de chantier, puis vient les reprendre. Calculez votre pack de séchage en ligne ou demandez conseil.",
    h1: "Location de déshumidificateur de chantier à Merksem",
    kicker: "Merksem · livraison sur votre chantier",
    rit: { afstand: "environ 16 km", tijd: "environ vingt-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Merksem pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Merksem",
      alineas: [
        "Vernast livre à Merksem et dans les localités voisines comme Anvers, Deurne et Borgerhout. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Ensuite, nous examinons quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une chape neuve et le plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Précisez aussi quand le matériau a été posé. Le dispositif de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche superficielle sèche ne signifie pas automatiquement que tout le sol ou tout le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk350",
        waarom: "**Pour de plus grandes pièces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et des matériaux humides. La disposition de votre chantier détermine où les appareils seront placés.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air à côté du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "revolution",
        waarom: "**Pour un dispositif de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttk170",
        waarom: "**Pour une pièce isolée ou une zone de séchage plus petite.** Indiquez les dimensions, la température et la quantité d'humidité pour déterminer si cet appareil a une capacité suffisante.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Merksem",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Merksem, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Merksem",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["antwerpen-stad", "deurne", "borgerhout", "ekeren"],
    faq: [
      {
        q: "Comment organiser une livraison à Merksem ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Merksem, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
      },
      {
        q: "De combien de déshumidificateurs ai-je besoin ?",
        a: "Cela dépend du volume, de la disposition, du matériau et de la quantité d'humidité. Un étage ouvert demande un autre dispositif que plusieurs pièces fermées. Utilisez le calculateur pour votre pack et demandez conseil si votre situation est différente, par exemple en cas de pièce haute ou d'humidité cachée.",
      },
      {
        q: "Comment savoir quand le sol ou le mur est assez sec ?",
        a: "La durée de location seule ne donne aucune certitude à ce sujet. Faites contrôler l'humidité résiduelle avec une méthode adaptée au matériau. Votre poseur de sol ou votre peintre détermine quelle valeur d'humidité et quelle éventuelle mesure complémentaire sont nécessaires avant de pouvoir appliquer la finition choisie.",
      },
      {
        q: "Un déshumidificateur résout-il un problème d'humidité permanent ?",
        a: "Un déshumidificateur aide à évacuer l'humidité, mais ne répare pas une fuite, une infiltration d'eau ou une barrière contre l'humidité manquante. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut être mouillé à nouveau, même pendant que le déshumidificateur fonctionne.",
      },
      {
        q: "Quelle alimentation électrique me faut-il ?",
        a: "La puissance de raccordement diffère selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Merksem ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  hoboken: {
    slug: "hoboken",
    title: "Louer un déshumidificateur à Hoboken, à 10 minutes | Vernast",
    description:
      "Dégâts des eaux, chape ou plafonnage à Hoboken : louez un déshumidificateur Vernast. Livraison, installation et reprise comprises dans le pack de séchage.",
    h1: "Location de déshumidificateur de chantier à Hoboken",
    kicker: "Hoboken · livraison sur votre chantier",
    rit: { afstand: "environ 6 km", tijd: "environ dix minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Hoboken pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Hoboken",
      alineas: [
        "Vernast livre à Hoboken et dans les localités voisines comme Anvers, Wilrijk et Aartselaar. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Ensuite, nous examinons quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une chape neuve et le plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Précisez aussi quand le matériau a été posé. Le dispositif de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche superficielle sèche ne signifie pas automatiquement que tout le sol ou tout le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk350",
        waarom: "**Pour de plus grandes pièces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et des matériaux humides. La disposition de votre chantier détermine où les appareils seront placés.",
      },
      {
        key: "revolution",
        waarom: "**Pour un dispositif de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air à côté du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk170",
        waarom: "**Pour une pièce isolée ou une zone de séchage plus petite.** Indiquez les dimensions, la température et la quantité d'humidité pour déterminer si cet appareil a une capacité suffisante.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Hoboken",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Hoboken, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Hoboken",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["antwerpen-stad", "wilrijk", "aartselaar", "berchem"],
    faq: [
      {
        q: "Comment organiser une livraison à Hoboken ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Hoboken, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
      },
      {
        q: "De combien de déshumidificateurs ai-je besoin ?",
        a: "Cela dépend du volume, de la disposition, du matériau et de la quantité d'humidité. Un étage ouvert demande un autre dispositif que plusieurs pièces fermées. Utilisez le calculateur pour votre pack et demandez conseil si votre situation est différente, par exemple en cas de pièce haute ou d'humidité cachée.",
      },
      {
        q: "Comment savoir quand le sol ou le mur est assez sec ?",
        a: "La durée de location seule ne donne aucune certitude à ce sujet. Faites contrôler l'humidité résiduelle avec une méthode adaptée au matériau. Votre poseur de sol ou votre peintre détermine quelle valeur d'humidité et quelle éventuelle mesure complémentaire sont nécessaires avant de pouvoir appliquer la finition choisie.",
      },
      {
        q: "Un déshumidificateur résout-il un problème d'humidité permanent ?",
        a: "Un déshumidificateur aide à évacuer l'humidité, mais ne répare pas une fuite, une infiltration d'eau ou une barrière contre l'humidité manquante. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut être mouillé à nouveau, même pendant que le déshumidificateur fonctionne.",
      },
      {
        q: "Quelle alimentation électrique me faut-il ?",
        a: "La puissance de raccordement diffère selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Hoboken ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  ekeren: {
    slug: "ekeren",
    title: "Ekeren : location de déshumidificateur de chantier | Vernast",
    description:
      "Une chape ou un plafonnage à sécher à Ekeren ? Vernast loue des déshumidificateurs de chantier, livrés, installés et repris. Calculez votre pack en ligne.",
    h1: "Location de déshumidificateur de chantier à Ekeren",
    kicker: "Ekeren · livraison sur votre chantier",
    rit: { afstand: "environ 19 km", tijd: "environ vingt-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Ekeren pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Ekeren",
      alineas: [
        "Vernast livre à Ekeren et dans les localités voisines comme Anvers, Merksem et Brasschaat. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Ensuite, nous examinons quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une chape neuve et le plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Précisez aussi quand le matériau a été posé. Le dispositif de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche superficielle sèche ne signifie pas automatiquement que tout le sol ou tout le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
      {
        key: "ttk350",
        waarom: "**Pour de plus grandes pièces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et des matériaux humides. La disposition de votre chantier détermine où les appareils seront placés.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air à côté du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "teddh30",
        waarom: "**Pour un chauffage d'appoint sur un chantier froid.** Ce chauffage électrique demande un raccordement 400 V adapté. Faites vérifier à l'avance si l'alimentation disponible correspond à la puissance de raccordement.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Ekeren",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Ekeren, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Ekeren",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["antwerpen-stad", "merksem", "brasschaat", "schoten"],
    faq: [
      {
        q: "Comment organiser une livraison à Ekeren ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Ekeren, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
      },
      {
        q: "De combien de déshumidificateurs ai-je besoin ?",
        a: "Cela dépend du volume, de la disposition, du matériau et de la quantité d'humidité. Un étage ouvert demande un autre dispositif que plusieurs pièces fermées. Utilisez le calculateur pour votre pack et demandez conseil si votre situation est différente, par exemple en cas de pièce haute ou d'humidité cachée.",
      },
      {
        q: "Comment savoir quand le sol ou le mur est assez sec ?",
        a: "La durée de location seule ne donne aucune certitude à ce sujet. Faites contrôler l'humidité résiduelle avec une méthode adaptée au matériau. Votre poseur de sol ou votre peintre détermine quelle valeur d'humidité et quelle éventuelle mesure complémentaire sont nécessaires avant de pouvoir appliquer la finition choisie.",
      },
      {
        q: "Un déshumidificateur résout-il un problème d'humidité permanent ?",
        a: "Un déshumidificateur aide à évacuer l'humidité, mais ne répare pas une fuite, une infiltration d'eau ou une barrière contre l'humidité manquante. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut être mouillé à nouveau, même pendant que le déshumidificateur fonctionne.",
      },
      {
        q: "Quelle alimentation électrique me faut-il ?",
        a: "La puissance de raccordement diffère selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Ekeren ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  "berendrecht-zandvliet": {
    slug: "berendrecht-zandvliet",
    title: "Déshumidificateur à Berendrecht et Zandvliet | Vernast",
    description:
      "Louer un déshumidificateur à Berendrecht et Zandvliet ? Pack de séchage Vernast avec livraison, installation et reprise. Neuf, rénovation, dégâts des eaux.",
    h1: "Location de déshumidificateur de chantier à Berendrecht et Zandvliet",
    kicker: "Berendrecht et Zandvliet · livraison sur votre chantier",
    rit: { afstand: "environ 35 km", tijd: "environ quarante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Berendrecht et Zandvliet pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Berendrecht et Zandvliet",
      alineas: [
        "Vernast livre à Berendrecht, à Zandvliet et dans les localités voisines comme Ekeren, Merksem et Anvers. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Ensuite, nous examinons quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une chape neuve et le plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Précisez aussi quand le matériau a été posé. Le dispositif de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche superficielle sèche ne signifie pas automatiquement que tout le sol ou tout le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk350",
        waarom: "**Pour de plus grandes pièces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et des matériaux humides. La disposition de votre chantier détermine où les appareils seront placés.",
      },
      {
        key: "revolution",
        waarom: "**Pour un dispositif de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air à côté du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "teddh30",
        waarom: "**Pour un chauffage d'appoint sur un chantier froid.** Ce chauffage électrique demande un raccordement 400 V adapté. Faites vérifier à l'avance si l'alimentation disponible correspond à la puissance de raccordement.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Berendrecht et Zandvliet",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Berendrecht et Zandvliet, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Berendrecht et Zandvliet",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["ekeren", "merksem", "antwerpen-stad", "brasschaat"],
    faq: [
      {
        q: "Comment organiser une livraison à Berendrecht et Zandvliet ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Berendrecht et Zandvliet, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
      },
      {
        q: "De combien de déshumidificateurs ai-je besoin ?",
        a: "Cela dépend du volume, de la disposition, du matériau et de la quantité d'humidité. Un étage ouvert demande un autre dispositif que plusieurs pièces fermées. Utilisez le calculateur pour votre pack et demandez conseil si votre situation est différente, par exemple en cas de pièce haute ou d'humidité cachée.",
      },
      {
        q: "Comment savoir quand le sol ou le mur est assez sec ?",
        a: "La durée de location seule ne donne aucune certitude à ce sujet. Faites contrôler l'humidité résiduelle avec une méthode adaptée au matériau. Votre poseur de sol ou votre peintre détermine quelle valeur d'humidité et quelle éventuelle mesure complémentaire sont nécessaires avant de pouvoir appliquer la finition choisie.",
      },
      {
        q: "Un déshumidificateur résout-il un problème d'humidité permanent ?",
        a: "Un déshumidificateur aide à évacuer l'humidité, mais ne répare pas une fuite, une infiltration d'eau ou une barrière contre l'humidité manquante. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut être mouillé à nouveau, même pendant que le déshumidificateur fonctionne.",
      },
      {
        q: "Quelle alimentation électrique me faut-il ?",
        a: "La puissance de raccordement diffère selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Berendrecht et Zandvliet ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  borsbeek: {
    slug: "borsbeek",
    title: "Déshumidificateur à Borsbeek, à 20 minutes | Vernast",
    description:
      "Vous construisez ou rénovez à Borsbeek ? Louez un déshumidificateur de chantier chez Vernast : livraison, installation et reprise comprises. Prix en ligne.",
    h1: "Location de déshumidificateur de chantier à Borsbeek",
    kicker: "Borsbeek · livraison sur votre chantier",
    rit: { afstand: "environ 14 km", tijd: "environ vingt minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Borsbeek pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Borsbeek",
      alineas: [
        "Vernast livre à Borsbeek et dans les localités voisines comme Anvers, Deurne et Mortsel. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Vous séchez un appartement ou un étage ? Précisez s'il y a un ascenseur ou un escalier fixe et quelle est la largeur de l'accès. L'espace disponible détermine en partie quels appareils nous pouvons installer. Dans un immeuble partagé, convenez à l'avance de qui ouvre la porte et de l'endroit où le matériel peut être déposé.",
        "Une chape neuve et le plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Précisez aussi quand le matériau a été posé. Le dispositif de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche superficielle sèche ne signifie pas automatiquement que tout le sol ou tout le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk350",
        waarom: "**Pour de plus grandes pièces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et des matériaux humides. La disposition de votre chantier détermine où les appareils seront placés.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air à côté du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk170",
        waarom: "**Pour une pièce isolée ou une zone de séchage plus petite.** Indiquez les dimensions, la température et la quantité d'humidité pour déterminer si cet appareil a une capacité suffisante.",
      },
      {
        key: "teddh30",
        waarom: "**Pour un chauffage d'appoint sur un chantier froid.** Ce chauffage électrique demande un raccordement 400 V adapté. Faites vérifier à l'avance si l'alimentation disponible correspond à la puissance de raccordement.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Borsbeek",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Borsbeek, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Borsbeek",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["antwerpen-stad", "deurne", "mortsel", "berchem"],
    faq: [
      {
        q: "Comment organiser une livraison à Borsbeek ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Borsbeek, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
      },
      {
        q: "De combien de déshumidificateurs ai-je besoin ?",
        a: "Cela dépend du volume, de la disposition, du matériau et de la quantité d'humidité. Un étage ouvert demande un autre dispositif que plusieurs pièces fermées. Utilisez le calculateur pour votre pack et demandez conseil si votre situation est différente, par exemple en cas de pièce haute ou d'humidité cachée.",
      },
      {
        q: "Comment savoir quand le sol ou le mur est assez sec ?",
        a: "La durée de location seule ne donne aucune certitude à ce sujet. Faites contrôler l'humidité résiduelle avec une méthode adaptée au matériau. Votre poseur de sol ou votre peintre détermine quelle valeur d'humidité et quelle éventuelle mesure complémentaire sont nécessaires avant de pouvoir appliquer la finition choisie.",
      },
      {
        q: "Un déshumidificateur peut-il être installé à l'étage ?",
        a: "Cela dépend de l'accès et de l'appareil. Lors de votre demande, signalez l'étage, un éventuel ascenseur et les passages étroits. S'il n'y a pas d'escalier fixe, discutez à l'avance de la manière de monter les appareils et du supplément applicable.",
      },
      {
        q: "Quelle alimentation électrique me faut-il ?",
        a: "La puissance de raccordement diffère selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Borsbeek ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  aartselaar: {
    slug: "aartselaar",
    title: "Déshumidificateur à Aartselaar, notre entrepôt | Vernast",
    description:
      "Location de déshumidificateur à Aartselaar, où se trouve notre entrepôt : enlèvement sur rendez-vous ou pack de séchage livré, installé et repris.",
    h1: "Location de déshumidificateur de chantier à Aartselaar",
    kicker: "Aartselaar · livraison sur votre chantier",
    rit: { afstand: "0 km", tijd: "notre entrepôt est ici" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Aartselaar pour une construction neuve, une rénovation ou des dégâts des eaux ? Venez chercher votre appareil sur rendez-vous à notre entrepôt, Boomsesteenweg 12, unit 11, ou faites-le installer sur votre chantier. **Avec un pack de séchage, la livraison, l'installation et la reprise sont comprises.** Calculez votre prix de location en ligne ou appelez-nous pour un conseil.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Aartselaar",
      alineas: [
        "Vernast livre à Aartselaar et dans les localités voisines comme Kontich, Edegem et Wilrijk. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Ensuite, nous examinons quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une chape neuve et le plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Précisez aussi quand le matériau a été posé. Le dispositif de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche superficielle sèche ne signifie pas automatiquement que tout le sol ou tout le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk350",
        waarom: "**Pour de plus grandes pièces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et des matériaux humides. La disposition de votre chantier détermine où les appareils seront placés.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air à côté du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk170",
        waarom: "**Pour une pièce isolée ou une zone de séchage plus petite.** Indiquez les dimensions, la température et la quantité d'humidité pour déterminer si cet appareil a une capacité suffisante.",
      },
      {
        key: "revolution",
        waarom: "**Pour un dispositif de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Aartselaar",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Aartselaar, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement à notre entrepôt d'Aartselaar",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["kontich", "edegem", "wilrijk", "boom"],
    faq: [
      {
        q: "Comment organiser une livraison à Aartselaar ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Aartselaar, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
      },
      {
        q: "De combien de déshumidificateurs ai-je besoin ?",
        a: "Cela dépend du volume, de la disposition, du matériau et de la quantité d'humidité. Un étage ouvert demande un autre dispositif que plusieurs pièces fermées. Utilisez le calculateur pour votre pack et demandez conseil si votre situation est différente, par exemple en cas de pièce haute ou d'humidité cachée.",
      },
      {
        q: "Comment savoir quand le sol ou le mur est assez sec ?",
        a: "La durée de location seule ne donne aucune certitude à ce sujet. Faites contrôler l'humidité résiduelle avec une méthode adaptée au matériau. Votre poseur de sol ou votre peintre détermine quelle valeur d'humidité et quelle éventuelle mesure complémentaire sont nécessaires avant de pouvoir appliquer la finition choisie.",
      },
      {
        q: "Un déshumidificateur résout-il un problème d'humidité permanent ?",
        a: "Un déshumidificateur aide à évacuer l'humidité, mais ne répare pas une fuite, une infiltration d'eau ou une barrière contre l'humidité manquante. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut être mouillé à nouveau, même pendant que le déshumidificateur fonctionne.",
      },
      {
        q: "Quelle alimentation électrique me faut-il ?",
        a: "La puissance de raccordement diffère selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Aartselaar ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
};
