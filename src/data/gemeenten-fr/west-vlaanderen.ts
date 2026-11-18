import type { Gemeente } from "../gemeenten.js";

/**
 * De Franse teksten van de gemeentepagina's in deze provincie, gesleuteld op
 * de Nederlandse slug. Zie README.md in deze map voor de regels en hoe een
 * gemeente aangezet wordt (`aan/west-vlaanderen.ts`).
 */
export const GEMEENTEN: Record<string, Gemeente> = {
  brugge: {
    slug: "brugge",
    title: "Location de déshumidificateur de chantier à Bruges | Vernast",
    description: "Louer un déshumidificateur de chantier à Bruges ? Calculez votre pack de séchage chez Vernast, livraison, installation et reprise comprises.",
    h1: "Location de déshumidificateur de chantier à Bruges",
    kicker: "Bruges · livraison sur votre chantier",
    rit: {
      afstand: "environ 95 km",
      tijd: "environ une heure",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Bruges pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Bruges",
      alineas: [
        "Vernast livre à Bruges et dans les localités voisines comme Damme, Zuienkerke, Oostkamp. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Vous séchez un appartement ou un étage ? Indiquez s'il y a un ascenseur ou un escalier fixe et quelle est la largeur de l'accès. L'espace disponible détermine en partie quels appareils nous pouvons placer. Dans un bâtiment partagé, convenez à l'avance de qui ouvre la porte et de l'endroit où le matériel peut être déposé.",
        "Une nouvelle chape et un plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été posé. L'installation de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "revolution",
        waarom: "**Pour une installation de séchage après des dégâts des eaux.** Discutez d'abord de l'endroit où se trouve l'humidité et de la composition de la construction. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk350",
        waarom: "**Pour les grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et du matériau humide. L'agencement de votre chantier détermine où les appareils seront placés.",
      },
      {
        key: "ttk170",
        waarom: "**Pour une pièce séparée ou une zone de séchage plus petite.** Discutez des dimensions, de la température et de la quantité d'humidité pour déterminer si cet appareil a une capacité suffisante.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Bruges",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Bruges, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Bruges",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["damme", "zuienkerke", "oostkamp", "jabbeke", "beernem", "blankenberge"],
    faq: [
      {
        q: "Comment organiser une livraison à Bruges ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Bruges, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Bruges ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  kortrijk: {
    slug: "kortrijk",
    title: "Déshumidificateur de chantier à louer à Courtrai | Vernast",
    description: "Déshumidificateur de chantier à Courtrai : votre pack de séchage Vernast avec livraison, installation et reprise. Conseils pour rénovation et dégâts des eaux.",
    h1: "Location de déshumidificateur de chantier à Courtrai",
    kicker: "Courtrai · livraison sur votre chantier",
    rit: {
      afstand: "environ 105 km",
      tijd: "environ une heure et dix minutes",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Courtrai pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Courtrai",
      alineas: [
        "Vernast livre à Courtrai et dans les localités voisines comme Harelbeke, Kuurne, Wevelgem. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une nouvelle chape et un plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été posé. L'installation de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk350",
        waarom: "**Pour les grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et du matériau humide. L'agencement de votre chantier détermine où les appareils seront placés.",
      },
      {
        key: "teddh30",
        waarom: "**Pour un chauffage d'appoint sur un chantier froid.** Ce chauffage électrique nécessite un raccordement 400 V adapté. Faites vérifier à l'avance si l'alimentation disponible correspond à la puissance de raccordement.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Courtrai",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Courtrai, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Courtrai",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["harelbeke", "kuurne", "wevelgem", "zwevegem", "menen", "lendelede"],
    faq: [
      {
        q: "Comment organiser une livraison à Courtrai ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Courtrai, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Courtrai ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  tielt: {
    slug: "tielt",
    title: "Location de déshumidificateur de chantier à Tielt | Vernast",
    description: "Louer un déshumidificateur de chantier à Tielt ? Calculez votre pack de séchage chez Vernast, livraison, installation et reprise comprises.",
    h1: "Location de déshumidificateur de chantier à Tielt",
    kicker: "Tielt · livraison sur votre chantier",
    rit: {
      afstand: "environ 90 km",
      tijd: "environ une heure",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Tielt pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Tielt",
      alineas: [
        "Vernast livre à Tielt et dans les localités voisines comme Pittem, Wingene, Ardooie. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Pour un commerce, un bureau ou un espace professionnel, l'usage du bâtiment compte autant que le volume. Indiquez quelles zones doivent rester accessibles et quand les travaux ont lieu. Avec plusieurs pièces fermées, une installation répartie peut être nécessaire. Nous discutons à l'avance d'une réouverture prévue ; la mesure d'humidité détermine si la finition peut commencer.",
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
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk650",
        waarom: "**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés.",
      },
      {
        key: "teddh30",
        waarom: "**Pour un chauffage d'appoint sur un chantier froid.** Ce chauffage électrique nécessite un raccordement 400 V adapté. Faites vérifier à l'avance si l'alimentation disponible correspond à la puissance de raccordement.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Tielt",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Tielt, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Tielt",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["pittem", "wingene", "ardooie", "dentergem", "aalter", "lichtervelde"],
    faq: [
      {
        q: "Comment organiser une livraison à Tielt ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Tielt, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je faire sécher un espace professionnel pendant les travaux ?",
        a: "Discutez à l'avance des pièces qui restent en service, de l'alimentation électrique disponible et de votre planning. Nous adaptons l'installation en conséquence. Un grand espace ouvert demande une autre répartition que plusieurs pièces fermées ; la surface au sol totale ne suffit donc pas pour établir un conseil.",
      },
      {
        q: "De quelle alimentation électrique ai-je besoin ?",
        a: "La puissance de raccordement varie selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW nécessitent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Tielt ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  wingene: {
    slug: "wingene",
    title: "Déshumidificateur de chantier à louer à Wingene | Vernast",
    description: "Déshumidificateur de chantier à Wingene : votre pack de séchage Vernast avec livraison, installation et reprise. Conseils pour rénovation et dégâts des eaux.",
    h1: "Location de déshumidificateur de chantier à Wingene",
    kicker: "Wingene · livraison sur votre chantier",
    rit: {
      afstand: "environ 90 km",
      tijd: "environ une heure",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Wingene pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Wingene",
      alineas: [
        "Vernast livre à Wingene et dans les localités voisines comme Tielt, Pittem, Lichtervelde. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une nouvelle chape et un plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été posé. L'installation de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés.",
      },
      {
        key: "ttk350",
        waarom: "**Pour les grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et du matériau humide. L'agencement de votre chantier détermine où les appareils seront placés.",
      },
      {
        key: "teddh30",
        waarom: "**Pour un chauffage d'appoint sur un chantier froid.** Ce chauffage électrique nécessite un raccordement 400 V adapté. Faites vérifier à l'avance si l'alimentation disponible correspond à la puissance de raccordement.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Wingene",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Wingene, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Wingene",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["tielt", "pittem", "lichtervelde", "torhout", "oostkamp", "beernem", "aalter"],
    faq: [
      {
        q: "Comment organiser une livraison à Wingene ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Wingene, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Wingene ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  pittem: {
    slug: "pittem",
    title: "Louer un déshumidificateur de chantier à Pittem | Vernast",
    description: "Besoin d'un déshumidificateur de chantier à Pittem ? Vernast livre, installe et reprend votre pack de séchage. Conseils pour construction neuve et rénovation.",
    h1: "Location de déshumidificateur de chantier à Pittem",
    kicker: "Pittem · livraison sur votre chantier",
    rit: {
      afstand: "environ 95 km",
      tijd: "environ une heure",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Pittem pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Pittem",
      alineas: [
        "Vernast livre à Pittem et dans les localités voisines comme Tielt, Ardooie, Wingene. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
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
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk650",
        waarom: "**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés.",
      },
      {
        key: "teddh30",
        waarom: "**Pour un chauffage d'appoint sur un chantier froid.** Ce chauffage électrique nécessite un raccordement 400 V adapté. Faites vérifier à l'avance si l'alimentation disponible correspond à la puissance de raccordement.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Pittem",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Pittem, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Pittem",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["tielt", "ardooie", "wingene", "lichtervelde"],
    faq: [
      {
        q: "Comment organiser une livraison à Pittem ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Pittem, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Pittem ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  ardooie: {
    slug: "ardooie",
    title: "Déshumidificateur de chantier à Ardooie : location | Vernast",
    description: "Séchage de chantier à Ardooie : louez un déshumidificateur chez Vernast, livraison, installation et reprise comprises. Conseils en cas de dégâts des eaux.",
    h1: "Location de déshumidificateur de chantier à Ardooie",
    kicker: "Ardooie · livraison sur votre chantier",
    rit: {
      afstand: "environ 100 km",
      tijd: "environ une heure et cinq minutes",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Ardooie pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Ardooie",
      alineas: [
        "Vernast livre à Ardooie et dans les localités voisines comme Pittem, Tielt, Roulers. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une nouvelle chape et un plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été posé. L'installation de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "revolution",
        waarom: "**Pour une installation de séchage après des dégâts des eaux.** Discutez d'abord de l'endroit où se trouve l'humidité et de la composition de la construction. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttk350",
        waarom: "**Pour les grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et du matériau humide. L'agencement de votre chantier détermine où les appareils seront placés.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Ardooie",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Ardooie, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Ardooie",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["pittem", "tielt", "roeselare", "izegem", "ingelmunster", "lichtervelde"],
    faq: [
      {
        q: "Comment organiser une livraison à Ardooie ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Ardooie, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Ardooie ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  dentergem: {
    slug: "dentergem",
    title: "Location de déshumidificateur à Dentergem | Vernast",
    description: "Déshumidificateur de chantier à Dentergem : calculez votre pack de séchage Vernast en ligne. Livraison, installation et reprise comprises dans le prix.",
    h1: "Location de déshumidificateur de chantier à Dentergem",
    kicker: "Dentergem · livraison sur votre chantier",
    rit: {
      afstand: "environ 90 km",
      tijd: "environ une heure",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Dentergem pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Dentergem",
      alineas: [
        "Vernast livre à Dentergem et dans les localités voisines comme Tielt, Oostrozebeke, Wielsbeke. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
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
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "revolution",
        waarom: "**Pour une installation de séchage après des dégâts des eaux.** Discutez d'abord de l'endroit où se trouve l'humidité et de la composition de la construction. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttk650",
        waarom: "**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Dentergem",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Dentergem, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Dentergem",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["tielt", "oostrozebeke", "wielsbeke", "waregem", "zulte", "ardooie"],
    faq: [
      {
        q: "Comment organiser une livraison à Dentergem ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Dentergem, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Dentergem ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  oostrozebeke: {
    slug: "oostrozebeke",
    title: "Déshumidificateur à louer à Oostrozebeke | Vernast",
    description: "Louer un déshumidificateur de chantier à Oostrozebeke ? Calculez votre pack de séchage chez Vernast, livraison, installation et reprise comprises.",
    h1: "Location de déshumidificateur de chantier à Oostrozebeke",
    kicker: "Oostrozebeke · livraison sur votre chantier",
    rit: {
      afstand: "environ 92 km",
      tijd: "environ une heure",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Oostrozebeke pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Oostrozebeke",
      alineas: [
        "Vernast livre à Oostrozebeke et dans les localités voisines comme Wielsbeke, Dentergem, Ingelmunster. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une nouvelle chape et un plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été posé. L'installation de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk350",
        waarom: "**Pour les grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et du matériau humide. L'agencement de votre chantier détermine où les appareils seront placés.",
      },
      {
        key: "revolution",
        waarom: "**Pour une installation de séchage après des dégâts des eaux.** Discutez d'abord de l'endroit où se trouve l'humidité et de la composition de la construction. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Oostrozebeke",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Oostrozebeke, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Oostrozebeke",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["wielsbeke", "dentergem", "ingelmunster", "izegem", "waregem"],
    faq: [
      {
        q: "Comment organiser une livraison à Oostrozebeke ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Oostrozebeke, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Oostrozebeke ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  wielsbeke: {
    slug: "wielsbeke",
    title: "Déshumidificateur de chantier à louer à Wielsbeke | Vernast",
    description: "Déshumidificateur de chantier à Wielsbeke : votre pack de séchage Vernast avec livraison, installation et reprise. Conseils pour rénovation et dégâts des eaux.",
    h1: "Location de déshumidificateur de chantier à Wielsbeke",
    kicker: "Wielsbeke · livraison sur votre chantier",
    rit: {
      afstand: "environ 90 km",
      tijd: "environ une heure",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Wielsbeke pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Wielsbeke",
      alineas: [
        "Vernast livre à Wielsbeke et dans les localités voisines comme Oostrozebeke, Dentergem, Waregem. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une nouvelle chape et un plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été posé. L'installation de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "teddh30",
        waarom: "**Pour un chauffage d'appoint sur un chantier froid.** Ce chauffage électrique nécessite un raccordement 400 V adapté. Faites vérifier à l'avance si l'alimentation disponible correspond à la puissance de raccordement.",
      },
      {
        key: "ttk350",
        waarom: "**Pour les grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et du matériau humide. L'agencement de votre chantier détermine où les appareils seront placés.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Wielsbeke",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Wielsbeke, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Wielsbeke",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["oostrozebeke", "dentergem", "waregem", "harelbeke", "izegem"],
    faq: [
      {
        q: "Comment organiser une livraison à Wielsbeke ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Wielsbeke, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Wielsbeke ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  roeselare: {
    slug: "roeselare",
    title: "Déshumidificateur de chantier à louer à Roulers | Vernast",
    description: "Besoin d'un déshumidificateur de chantier à Roulers ? Vernast livre, installe et reprend votre pack de séchage. Conseils pour construction neuve et rénovation.",
    h1: "Location de déshumidificateur de chantier à Roulers",
    kicker: "Roulers · livraison sur votre chantier",
    rit: {
      afstand: "environ 105 km",
      tijd: "environ une heure et dix minutes",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Roulers pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Roulers",
      alineas: [
        "Vernast livre à Roulers et dans les localités voisines comme Izegem, Hooglede, Staden. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Pour un commerce, un bureau ou un espace professionnel, l'usage du bâtiment compte autant que le volume. Indiquez quelles zones doivent rester accessibles et quand les travaux ont lieu. Avec plusieurs pièces fermées, une installation répartie peut être nécessaire. Nous discutons à l'avance d'une réouverture prévue ; la mesure d'humidité détermine si la finition peut commencer.",
        "Une nouvelle chape et un plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été posé. L'installation de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk350",
        waarom: "**Pour les grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et du matériau humide. L'agencement de votre chantier détermine où les appareils seront placés.",
      },
      {
        key: "teddh30",
        waarom: "**Pour un chauffage d'appoint sur un chantier froid.** Ce chauffage électrique nécessite un raccordement 400 V adapté. Faites vérifier à l'avance si l'alimentation disponible correspond à la puissance de raccordement.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Roulers",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Roulers, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Roulers",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["izegem", "hooglede", "staden", "ingelmunster", "lichtervelde", "moorslede"],
    faq: [
      {
        q: "Comment organiser une livraison à Roulers ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Roulers, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je faire sécher un espace professionnel pendant les travaux ?",
        a: "Discutez à l'avance des pièces qui restent en service, de l'alimentation électrique disponible et de votre planning. Nous adaptons l'installation en conséquence. Un grand espace ouvert demande une autre répartition que plusieurs pièces fermées ; la surface au sol totale ne suffit donc pas pour établir un conseil.",
      },
      {
        q: "De quelle alimentation électrique ai-je besoin ?",
        a: "La puissance de raccordement varie selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW nécessitent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Roulers ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  izegem: {
    slug: "izegem",
    title: "Louer un déshumidificateur de chantier à Izegem | Vernast",
    description: "Séchage de chantier à Izegem : louez un déshumidificateur chez Vernast, livraison, installation et reprise comprises. Conseils en cas de dégâts des eaux.",
    h1: "Location de déshumidificateur de chantier à Izegem",
    kicker: "Izegem · livraison sur votre chantier",
    rit: {
      afstand: "environ 100 km",
      tijd: "environ une heure et cinq minutes",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Izegem pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Izegem",
      alineas: [
        "Vernast livre à Izegem et dans les localités voisines comme Roulers, Ingelmunster, Lendelede. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une nouvelle chape et un plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été posé. L'installation de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "revolution",
        waarom: "**Pour une installation de séchage après des dégâts des eaux.** Discutez d'abord de l'endroit où se trouve l'humidité et de la composition de la construction. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttk350",
        waarom: "**Pour les grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et du matériau humide. L'agencement de votre chantier détermine où les appareils seront placés.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Izegem",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Izegem, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Izegem",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["roeselare", "ingelmunster", "lendelede", "ledegem", "ardooie"],
    faq: [
      {
        q: "Comment organiser une livraison à Izegem ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Izegem, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Izegem ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  ingelmunster: {
    slug: "ingelmunster",
    title: "Location de déshumidificateur à Ingelmunster | Vernast",
    description: "Déshumidificateur de chantier à Ingelmunster : calculez votre pack de séchage Vernast en ligne. Livraison, installation et reprise comprises dans le prix.",
    h1: "Location de déshumidificateur de chantier à Ingelmunster",
    kicker: "Ingelmunster · livraison sur votre chantier",
    rit: {
      afstand: "environ 98 km",
      tijd: "environ une heure et cinq minutes",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Ingelmunster pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Ingelmunster",
      alineas: [
        "Vernast livre à Ingelmunster et dans les localités voisines comme Izegem, Roulers, Oostrozebeke. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une nouvelle chape et un plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été posé. L'installation de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk350",
        waarom: "**Pour les grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et du matériau humide. L'agencement de votre chantier détermine où les appareils seront placés.",
      },
      {
        key: "revolution",
        waarom: "**Pour une installation de séchage après des dégâts des eaux.** Discutez d'abord de l'endroit où se trouve l'humidité et de la composition de la construction. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Ingelmunster",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Ingelmunster, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Ingelmunster",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["izegem", "roeselare", "oostrozebeke", "lendelede", "ardooie"],
    faq: [
      {
        q: "Comment organiser une livraison à Ingelmunster ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Ingelmunster, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Ingelmunster ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  lichtervelde: {
    slug: "lichtervelde",
    title: "Location de déshumidificateur à Lichtervelde | Vernast",
    description: "Louer un déshumidificateur de chantier à Lichtervelde ? Calculez votre pack de séchage chez Vernast, livraison, installation et reprise comprises.",
    h1: "Location de déshumidificateur de chantier à Lichtervelde",
    kicker: "Lichtervelde · livraison sur votre chantier",
    rit: {
      afstand: "environ 105 km",
      tijd: "environ une heure et dix minutes",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Lichtervelde pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Lichtervelde",
      alineas: [
        "Vernast livre à Lichtervelde et dans les localités voisines comme Thourout, Hooglede, Roulers. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
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
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk650",
        waarom: "**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés.",
      },
      {
        key: "teddh30",
        waarom: "**Pour un chauffage d'appoint sur un chantier froid.** Ce chauffage électrique nécessite un raccordement 400 V adapté. Faites vérifier à l'avance si l'alimentation disponible correspond à la puissance de raccordement.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Lichtervelde",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Lichtervelde, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Lichtervelde",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["torhout", "hooglede", "roeselare", "ardooie", "kortemark", "wingene"],
    faq: [
      {
        q: "Comment organiser une livraison à Lichtervelde ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Lichtervelde, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Lichtervelde ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  hooglede: {
    slug: "hooglede",
    title: "Déshumidificateur de chantier à louer à Hooglede | Vernast",
    description: "Déshumidificateur de chantier à Hooglede : votre pack de séchage Vernast avec livraison, installation et reprise. Conseils pour rénovation et dégâts des eaux.",
    h1: "Location de déshumidificateur de chantier à Hooglede",
    kicker: "Hooglede · livraison sur votre chantier",
    rit: {
      afstand: "environ 105 km",
      tijd: "environ une heure et dix minutes",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Hooglede pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Hooglede",
      alineas: [
        "Vernast livre à Hooglede et dans les localités voisines comme Roulers, Lichtervelde, Staden. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
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
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk650",
        waarom: "**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés.",
      },
      {
        key: "teddh30",
        waarom: "**Pour un chauffage d'appoint sur un chantier froid.** Ce chauffage électrique nécessite un raccordement 400 V adapté. Faites vérifier à l'avance si l'alimentation disponible correspond à la puissance de raccordement.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Hooglede",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Hooglede, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Hooglede",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["roeselare", "lichtervelde", "staden", "kortemark"],
    faq: [
      {
        q: "Comment organiser une livraison à Hooglede ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Hooglede, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Hooglede ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  staden: {
    slug: "staden",
    title: "Location de déshumidificateur de chantier à Staden | Vernast",
    description: "Besoin d'un déshumidificateur de chantier à Staden ? Vernast livre, installe et reprend votre pack de séchage. Conseils pour construction neuve et rénovation.",
    h1: "Location de déshumidificateur de chantier à Staden",
    kicker: "Staden · livraison sur votre chantier",
    rit: {
      afstand: "environ 115 km",
      tijd: "environ une heure et quart",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Staden pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Staden",
      alineas: [
        "Vernast livre à Staden et dans les localités voisines comme Hooglede, Roulers, Houthulst. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une nouvelle chape et un plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été posé. L'installation de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "revolution",
        waarom: "**Pour une installation de séchage après des dégâts des eaux.** Discutez d'abord de l'endroit où se trouve l'humidité et de la composition de la construction. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttk350",
        waarom: "**Pour les grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et du matériau humide. L'agencement de votre chantier détermine où les appareils seront placés.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Staden",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Staden, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Staden",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["hooglede", "roeselare", "houthulst", "langemark-poelkapelle", "moorslede", "kortemark"],
    faq: [
      {
        q: "Comment organiser une livraison à Staden ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Staden, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Staden ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  moorslede: {
    slug: "moorslede",
    title: "Déshumidificateur de chantier à louer à Moorslede | Vernast",
    description: "Séchage de chantier à Moorslede : louez un déshumidificateur chez Vernast, livraison, installation et reprise comprises. Conseils en cas de dégâts des eaux.",
    h1: "Location de déshumidificateur de chantier à Moorslede",
    kicker: "Moorslede · livraison sur votre chantier",
    rit: {
      afstand: "environ 115 km",
      tijd: "environ une heure et quart",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Moorslede pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Moorslede",
      alineas: [
        "Vernast livre à Moorslede et dans les localités voisines comme Roulers, Staden, Ledegem. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une nouvelle chape et un plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été posé. L'installation de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "revolution",
        waarom: "**Pour une installation de séchage après des dégâts des eaux.** Discutez d'abord de l'endroit où se trouve l'humidité et de la composition de la construction. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
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
      kop: "Livraison et installation à Moorslede",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Moorslede, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Moorslede",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["roeselare", "staden", "ledegem", "wervik", "zonnebeke", "wevelgem"],
    faq: [
      {
        q: "Comment organiser une livraison à Moorslede ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Moorslede, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Moorslede ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  ledegem: {
    slug: "ledegem",
    title: "Louer un déshumidificateur de chantier à Ledegem | Vernast",
    description: "Déshumidificateur de chantier à Ledegem : calculez votre pack de séchage Vernast en ligne. Livraison, installation et reprise comprises dans le prix.",
    h1: "Location de déshumidificateur de chantier à Ledegem",
    kicker: "Ledegem · livraison sur votre chantier",
    rit: {
      afstand: "environ 110 km",
      tijd: "environ une heure et quart",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Ledegem pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Ledegem",
      alineas: [
        "Vernast livre à Ledegem et dans les localités voisines comme Moorslede, Wevelgem, Izegem. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
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
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk650",
        waarom: "**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés.",
      },
      {
        key: "teddh30",
        waarom: "**Pour un chauffage d'appoint sur un chantier froid.** Ce chauffage électrique nécessite un raccordement 400 V adapté. Faites vérifier à l'avance si l'alimentation disponible correspond à la puissance de raccordement.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Ledegem",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Ledegem, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Ledegem",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["moorslede", "wevelgem", "izegem", "roeselare", "lendelede"],
    faq: [
      {
        q: "Comment organiser une livraison à Ledegem ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Ledegem, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Ledegem ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  menen: {
    slug: "menen",
    title: "Déshumidificateur de chantier à Menin : location | Vernast",
    description: "Louer un déshumidificateur de chantier à Menin ? Calculez votre pack de séchage chez Vernast, livraison, installation et reprise comprises.",
    h1: "Location de déshumidificateur de chantier à Menin",
    kicker: "Menin · livraison sur votre chantier",
    rit: {
      afstand: "environ 115 km",
      tijd: "environ une heure et quart",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Menin pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Menin",
      alineas: [
        "Vernast livre à Menin et dans les localités voisines comme Wevelgem, Wervicq, Courtrai. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
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
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk170",
        waarom: "**Pour une pièce séparée ou une zone de séchage plus petite.** Discutez des dimensions, de la température et de la quantité d'humidité pour déterminer si cet appareil a une capacité suffisante.",
      },
      {
        key: "revolution",
        waarom: "**Pour une installation de séchage après des dégâts des eaux.** Discutez d'abord de l'endroit où se trouve l'humidité et de la composition de la construction. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Menin",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Menin, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Menin",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["wevelgem", "wervik", "kortrijk"],
    faq: [
      {
        q: "Comment organiser une livraison à Menin ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Menin, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Menin ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  wervik: {
    slug: "wervik",
    title: "Déshumidificateur de chantier à louer à Wervicq | Vernast",
    description: "Déshumidificateur de chantier à Wervicq : votre pack de séchage Vernast avec livraison, installation et reprise. Conseils pour rénovation et dégâts des eaux.",
    h1: "Location de déshumidificateur de chantier à Wervicq",
    kicker: "Wervicq · livraison sur votre chantier",
    rit: {
      afstand: "environ 120 km",
      tijd: "environ une heure et vingt minutes",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Wervicq pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Wervicq",
      alineas: [
        "Vernast livre à Wervicq et dans les localités voisines comme Menin, Wevelgem, Ypres. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une nouvelle chape et un plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été posé. L'installation de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "revolution",
        waarom: "**Pour une installation de séchage après des dégâts des eaux.** Discutez d'abord de l'endroit où se trouve l'humidité et de la composition de la construction. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttk350",
        waarom: "**Pour les grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et du matériau humide. L'agencement de votre chantier détermine où les appareils seront placés.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Wervicq",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Wervicq, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Wervicq",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["menen", "wevelgem", "ieper", "mesen", "moorslede"],
    faq: [
      {
        q: "Comment organiser une livraison à Wervicq ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Wervicq, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Wervicq ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  zwevegem: {
    slug: "zwevegem",
    title: "Déshumidificateur de chantier à louer à Zwevegem | Vernast",
    description: "Besoin d'un déshumidificateur de chantier à Zwevegem ? Vernast livre, installe et reprend votre pack de séchage. Conseils pour construction neuve et rénovation.",
    h1: "Location de déshumidificateur de chantier à Zwevegem",
    kicker: "Zwevegem · livraison sur votre chantier",
    rit: {
      afstand: "environ 100 km",
      tijd: "environ une heure et cinq minutes",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Zwevegem pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Zwevegem",
      alineas: [
        "Vernast livre à Zwevegem et dans les localités voisines comme Courtrai, Avelgem, Anzegem. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une nouvelle chape et un plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été posé. L'installation de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "revolution",
        waarom: "**Pour une installation de séchage après des dégâts des eaux.** Discutez d'abord de l'endroit où se trouve l'humidité et de la composition de la construction. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
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
      kop: "Livraison et installation à Zwevegem",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Zwevegem, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Zwevegem",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["kortrijk", "avelgem", "anzegem", "deerlijk", "spiere-helkijn"],
    faq: [
      {
        q: "Comment organiser une livraison à Zwevegem ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Zwevegem, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Zwevegem ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  anzegem: {
    slug: "anzegem",
    title: "Déshumidificateur de chantier à louer à Anzegem | Vernast",
    description: "Séchage de chantier à Anzegem : louez un déshumidificateur chez Vernast, livraison, installation et reprise comprises. Conseils en cas de dégâts des eaux.",
    h1: "Location de déshumidificateur de chantier à Anzegem",
    kicker: "Anzegem · livraison sur votre chantier",
    rit: {
      afstand: "environ 95 km",
      tijd: "environ une heure",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Anzegem pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Anzegem",
      alineas: [
        "Vernast livre à Anzegem et dans les localités voisines comme Waregem, Deerlijk, Zwevegem. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
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
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "revolution",
        waarom: "**Pour une installation de séchage après des dégâts des eaux.** Discutez d'abord de l'endroit où se trouve l'humidité et de la composition de la construction. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttk650",
        waarom: "**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Anzegem",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Anzegem, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Anzegem",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["waregem", "deerlijk", "zwevegem", "avelgem", "kruisem", "wortegem-petegem"],
    faq: [
      {
        q: "Comment organiser une livraison à Anzegem ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Anzegem, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Anzegem ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  avelgem: {
    slug: "avelgem",
    title: "Déshumidificateur de chantier à louer à Avelgem | Vernast",
    description: "Déshumidificateur de chantier à Avelgem : calculez votre pack de séchage Vernast en ligne. Livraison, installation et reprise comprises dans le prix.",
    h1: "Location de déshumidificateur de chantier à Avelgem",
    kicker: "Avelgem · livraison sur votre chantier",
    rit: {
      afstand: "environ 95 km",
      tijd: "environ une heure",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Avelgem pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Avelgem",
      alineas: [
        "Vernast livre à Avelgem et dans les localités voisines comme Zwevegem, Anzegem, Espierres-Helchin. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une nouvelle chape et un plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été posé. L'installation de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk350",
        waarom: "**Pour les grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et du matériau humide. L'agencement de votre chantier détermine où les appareils seront placés.",
      },
      {
        key: "revolution",
        waarom: "**Pour une installation de séchage après des dégâts des eaux.** Discutez d'abord de l'endroit où se trouve l'humidité et de la composition de la construction. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Avelgem",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Avelgem, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Avelgem",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["zwevegem", "anzegem", "spiere-helkijn", "kluisbergen"],
    faq: [
      {
        q: "Comment organiser une livraison à Avelgem ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Avelgem, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Avelgem ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  "spiere-helkijn": {
    slug: "spiere-helkijn",
    title: "Location de déshumidificateur à Espierres-Helchin | Vernast",
    description: "Louer un déshumidificateur de chantier à Espierres-Helchin ? Calculez votre pack de séchage chez Vernast, livraison, installation et reprise comprises.",
    h1: "Location de déshumidificateur de chantier à Espierres-Helchin",
    kicker: "Espierres-Helchin · livraison sur votre chantier",
    rit: {
      afstand: "environ 100 km",
      tijd: "environ une heure et cinq minutes",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Espierres-Helchin pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Espierres-Helchin",
      alineas: [
        "Vernast livre à Espierres-Helchin et dans les localités voisines comme Avelgem, Zwevegem, Kluisbergen. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une nouvelle chape et un plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été posé. L'installation de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk350",
        waarom: "**Pour les grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et du matériau humide. L'agencement de votre chantier détermine où les appareils seront placés.",
      },
      {
        key: "revolution",
        waarom: "**Pour une installation de séchage après des dégâts des eaux.** Discutez d'abord de l'endroit où se trouve l'humidité et de la composition de la construction. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Espierres-Helchin",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Espierres-Helchin, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Espierres-Helchin",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["avelgem", "zwevegem", "kluisbergen"],
    faq: [
      {
        q: "Comment organiser une livraison à Espierres-Helchin ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Espierres-Helchin, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Espierres-Helchin ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  harelbeke: {
    slug: "harelbeke",
    title: "Location de déshumidificateur à Harelbeke | Vernast",
    description: "Séchage de chantier à Harelbeke : louez un déshumidificateur chez Vernast, livraison, installation et reprise comprises. Conseils en cas de dégâts des eaux.",
    h1: "Location de déshumidificateur de chantier à Harelbeke",
    kicker: "Harelbeke · livraison sur votre chantier",
    rit: {
      afstand: "environ 100 km",
      tijd: "environ une heure et cinq minutes",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Harelbeke pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Harelbeke",
      alineas: [
        "Vernast livre à Harelbeke et dans les localités voisines comme Courtrai, Kuurne, Deerlijk. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une nouvelle chape et un plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été posé. L'installation de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk350",
        waarom: "**Pour les grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et du matériau humide. L'agencement de votre chantier détermine où les appareils seront placés.",
      },
      {
        key: "teddh30",
        waarom: "**Pour un chauffage d'appoint sur un chantier froid.** Ce chauffage électrique nécessite un raccordement 400 V adapté. Faites vérifier à l'avance si l'alimentation disponible correspond à la puissance de raccordement.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Harelbeke",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Harelbeke, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Harelbeke",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["kortrijk", "kuurne", "deerlijk", "waregem", "lendelede"],
    faq: [
      {
        q: "Comment organiser une livraison à Harelbeke ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Harelbeke, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Harelbeke ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  kuurne: {
    slug: "kuurne",
    title: "Location de déshumidificateur de chantier à Kuurne | Vernast",
    description: "Séchage de chantier à Kuurne : louez un déshumidificateur chez Vernast, livraison, installation et reprise comprises. Conseils en cas de dégâts des eaux.",
    h1: "Location de déshumidificateur de chantier à Kuurne",
    kicker: "Kuurne · livraison sur votre chantier",
    rit: {
      afstand: "environ 100 km",
      tijd: "environ une heure et cinq minutes",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Kuurne pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Kuurne",
      alineas: [
        "Vernast livre à Kuurne et dans les localités voisines comme Courtrai, Harelbeke, Lendelede. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Vous séchez un appartement ou un étage ? Indiquez s'il y a un ascenseur ou un escalier fixe et quelle est la largeur de l'accès. L'espace disponible détermine en partie quels appareils nous pouvons placer. Dans un bâtiment partagé, convenez à l'avance de qui ouvre la porte et de l'endroit où le matériel peut être déposé.",
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
      kop: "Livraison et installation à Kuurne",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Kuurne, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Kuurne",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["kortrijk", "harelbeke", "lendelede"],
    faq: [
      {
        q: "Comment organiser une livraison à Kuurne ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Kuurne, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Kuurne ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  deerlijk: {
    slug: "deerlijk",
    title: "Déshumidificateur de chantier à louer à Deerlijk | Vernast",
    description: "Déshumidificateur de chantier à Deerlijk : calculez votre pack de séchage Vernast en ligne. Livraison, installation et reprise comprises dans le prix.",
    h1: "Location de déshumidificateur de chantier à Deerlijk",
    kicker: "Deerlijk · livraison sur votre chantier",
    rit: {
      afstand: "environ 98 km",
      tijd: "environ une heure et cinq minutes",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Deerlijk pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Deerlijk",
      alineas: [
        "Vernast livre à Deerlijk et dans les localités voisines comme Harelbeke, Waregem, Anzegem. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
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
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "revolution",
        waarom: "**Pour une installation de séchage après des dégâts des eaux.** Discutez d'abord de l'endroit où se trouve l'humidité et de la composition de la construction. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttk650",
        waarom: "**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Deerlijk",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Deerlijk, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Deerlijk",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["harelbeke", "waregem", "anzegem", "zwevegem", "kortrijk"],
    faq: [
      {
        q: "Comment organiser une livraison à Deerlijk ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Deerlijk, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Deerlijk ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  lendelede: {
    slug: "lendelede",
    title: "Déshumidificateur de chantier à louer à Lendelede | Vernast",
    description: "Louer un déshumidificateur de chantier à Lendelede ? Calculez votre pack de séchage chez Vernast, livraison, installation et reprise comprises.",
    h1: "Location de déshumidificateur de chantier à Lendelede",
    kicker: "Lendelede · livraison sur votre chantier",
    rit: {
      afstand: "environ 100 km",
      tijd: "environ une heure et cinq minutes",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Lendelede pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Lendelede",
      alineas: [
        "Vernast livre à Lendelede et dans les localités voisines comme Kuurne, Harelbeke, Izegem. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
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
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk170",
        waarom: "**Pour une pièce séparée ou une zone de séchage plus petite.** Discutez des dimensions, de la température et de la quantité d'humidité pour déterminer si cet appareil a une capacité suffisante.",
      },
      {
        key: "teddh30",
        waarom: "**Pour un chauffage d'appoint sur un chantier froid.** Ce chauffage électrique nécessite un raccordement 400 V adapté. Faites vérifier à l'avance si l'alimentation disponible correspond à la puissance de raccordement.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Lendelede",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Lendelede, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Lendelede",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["kuurne", "harelbeke", "izegem", "ingelmunster", "kortrijk"],
    faq: [
      {
        q: "Comment organiser une livraison à Lendelede ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Lendelede, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Lendelede ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  waregem: {
    slug: "waregem",
    title: "Louer un déshumidificateur de chantier à Waregem | Vernast",
    description: "Déshumidificateur de chantier à Waregem : votre pack de séchage Vernast avec livraison, installation et reprise. Conseils pour rénovation et dégâts des eaux.",
    h1: "Location de déshumidificateur de chantier à Waregem",
    kicker: "Waregem · livraison sur votre chantier",
    rit: {
      afstand: "environ 90 km",
      tijd: "environ une heure",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Waregem pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Waregem",
      alineas: [
        "Vernast livre à Waregem et dans les localités voisines comme Deerlijk, Harelbeke, Anzegem. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une nouvelle chape et un plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été posé. L'installation de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk350",
        waarom: "**Pour les grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et du matériau humide. L'agencement de votre chantier détermine où les appareils seront placés.",
      },
      {
        key: "teddh30",
        waarom: "**Pour un chauffage d'appoint sur un chantier froid.** Ce chauffage électrique nécessite un raccordement 400 V adapté. Faites vérifier à l'avance si l'alimentation disponible correspond à la puissance de raccordement.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Waregem",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Waregem, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Waregem",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["deerlijk", "harelbeke", "anzegem", "zulte", "dentergem", "wielsbeke"],
    faq: [
      {
        q: "Comment organiser une livraison à Waregem ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Waregem, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Waregem ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  wevelgem: {
    slug: "wevelgem",
    title: "Location de déshumidificateur à Wevelgem | Vernast",
    description: "Besoin d'un déshumidificateur de chantier à Wevelgem ? Vernast livre, installe et reprend votre pack de séchage. Conseils pour construction neuve et rénovation.",
    h1: "Location de déshumidificateur de chantier à Wevelgem",
    kicker: "Wevelgem · livraison sur votre chantier",
    rit: {
      afstand: "environ 110 km",
      tijd: "environ une heure et quart",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Wevelgem pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Wevelgem",
      alineas: [
        "Vernast livre à Wevelgem et dans les localités voisines comme Courtrai, Menin, Wervicq. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une nouvelle chape et un plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été posé. L'installation de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk350",
        waarom: "**Pour les grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et du matériau humide. L'agencement de votre chantier détermine où les appareils seront placés.",
      },
      {
        key: "teddh30",
        waarom: "**Pour un chauffage d'appoint sur un chantier froid.** Ce chauffage électrique nécessite un raccordement 400 V adapté. Faites vérifier à l'avance si l'alimentation disponible correspond à la puissance de raccordement.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Wevelgem",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Wevelgem, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Wevelgem",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["kortrijk", "menen", "wervik", "ledegem", "moorslede"],
    faq: [
      {
        q: "Comment organiser une livraison à Wevelgem ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Wevelgem, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Wevelgem ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  diksmuide: {
    slug: "diksmuide",
    title: "Déshumidificateur de chantier à louer à Dixmude | Vernast",
    description: "Séchage de chantier à Dixmude : louez un déshumidificateur chez Vernast, livraison, installation et reprise comprises. Conseils en cas de dégâts des eaux.",
    h1: "Location de déshumidificateur de chantier à Dixmude",
    kicker: "Dixmude · livraison sur votre chantier",
    rit: {
      afstand: "environ 125 km",
      tijd: "environ une heure et vingt minutes",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Dixmude pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Dixmude",
      alineas: [
        "Vernast livre à Dixmude et dans les localités voisines comme Lo-Reninge, Houthulst, Kortemark. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une nouvelle chape et un plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été posé. L'installation de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "revolution",
        waarom: "**Pour une installation de séchage après des dégâts des eaux.** Discutez d'abord de l'endroit où se trouve l'humidité et de la composition de la construction. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttk350",
        waarom: "**Pour les grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et du matériau humide. L'agencement de votre chantier détermine où les appareils seront placés.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Dixmude",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Dixmude, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Dixmude",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["lo-reninge", "houthulst", "kortemark", "veurne", "middelkerke", "koekelare"],
    faq: [
      {
        q: "Comment organiser une livraison à Dixmude ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Dixmude, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Dixmude ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  veurne: {
    slug: "veurne",
    title: "Location de déshumidificateur de chantier à Furnes | Vernast",
    description: "Déshumidificateur de chantier à Furnes : calculez votre pack de séchage Vernast en ligne. Livraison, installation et reprise comprises dans le prix.",
    h1: "Location de déshumidificateur de chantier à Furnes",
    kicker: "Furnes · livraison sur votre chantier",
    rit: {
      afstand: "environ 130 km",
      tijd: "environ une heure et trente minutes",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Furnes pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Furnes",
      alineas: [
        "Vernast livre à Furnes et dans les localités voisines comme Dixmude, Alveringem, Coxyde. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une nouvelle chape et un plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été posé. L'installation de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "revolution",
        waarom: "**Pour une installation de séchage après des dégâts des eaux.** Discutez d'abord de l'endroit où se trouve l'humidité et de la composition de la construction. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk350",
        waarom: "**Pour les grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et du matériau humide. L'agencement de votre chantier détermine où les appareils seront placés.",
      },
      {
        key: "ttk650",
        waarom: "**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Furnes",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Furnes, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Furnes",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["diksmuide", "alveringem", "koksijde", "nieuwpoort", "de-panne"],
    faq: [
      {
        q: "Comment organiser une livraison à Furnes ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Furnes, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Furnes ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  alveringem: {
    slug: "alveringem",
    title: "Déshumidificateur de chantier à louer à Alveringem | Vernast",
    description: "Louer un déshumidificateur de chantier à Alveringem ? Calculez votre pack de séchage chez Vernast, livraison, installation et reprise comprises.",
    h1: "Location de déshumidificateur de chantier à Alveringem",
    kicker: "Alveringem · livraison sur votre chantier",
    rit: {
      afstand: "environ 135 km",
      tijd: "environ une heure et trente minutes",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Alveringem pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Alveringem",
      alineas: [
        "Vernast livre à Alveringem et dans les localités voisines comme Furnes, Lo-Reninge, Vleteren. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une nouvelle chape et un plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été posé. L'installation de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk350",
        waarom: "**Pour les grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et du matériau humide. L'agencement de votre chantier détermine où les appareils seront placés.",
      },
      {
        key: "revolution",
        waarom: "**Pour une installation de séchage après des dégâts des eaux.** Discutez d'abord de l'endroit où se trouve l'humidité et de la composition de la construction. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Alveringem",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Alveringem, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Alveringem",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["veurne", "lo-reninge", "vleteren", "poperinge", "koksijde", "de-panne"],
    faq: [
      {
        q: "Comment organiser une livraison à Alveringem ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Alveringem, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Alveringem ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  "lo-reninge": {
    slug: "lo-reninge",
    title: "Déshumidificateur de chantier à louer à Lo-Reninge | Vernast",
    description: "Déshumidificateur de chantier à Lo-Reninge : votre pack de séchage Vernast avec livraison, installation et reprise. Conseils pour rénovation et dégâts des eaux.",
    h1: "Location de déshumidificateur de chantier à Lo-Reninge",
    kicker: "Lo-Reninge · livraison sur votre chantier",
    rit: {
      afstand: "environ 130 km",
      tijd: "environ une heure et trente minutes",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Lo-Reninge pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Lo-Reninge",
      alineas: [
        "Vernast livre à Lo-Reninge et dans les localités voisines comme Dixmude, Alveringem, Vleteren. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une nouvelle chape et un plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été posé. L'installation de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk350",
        waarom: "**Pour les grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et du matériau humide. L'agencement de votre chantier détermine où les appareils seront placés.",
      },
      {
        key: "revolution",
        waarom: "**Pour une installation de séchage après des dégâts des eaux.** Discutez d'abord de l'endroit où se trouve l'humidité et de la composition de la construction. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Lo-Reninge",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Lo-Reninge, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Lo-Reninge",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["diksmuide", "alveringem", "vleteren", "houthulst", "veurne"],
    faq: [
      {
        q: "Comment organiser une livraison à Lo-Reninge ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Lo-Reninge, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Lo-Reninge ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  houthulst: {
    slug: "houthulst",
    title: "Louer un déshumidificateur de chantier à Houthulst | Vernast",
    description: "Séchage de chantier à Houthulst : louez un déshumidificateur chez Vernast, livraison, installation et reprise comprises. Conseils en cas de dégâts des eaux.",
    h1: "Location de déshumidificateur de chantier à Houthulst",
    kicker: "Houthulst · livraison sur votre chantier",
    rit: {
      afstand: "environ 125 km",
      tijd: "environ une heure et vingt minutes",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Houthulst pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Houthulst",
      alineas: [
        "Vernast livre à Houthulst et dans les localités voisines comme Dixmude, Lo-Reninge, Langemark-Poelkapelle. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
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
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk650",
        waarom: "**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés.",
      },
      {
        key: "teddh30",
        waarom: "**Pour un chauffage d'appoint sur un chantier froid.** Ce chauffage électrique nécessite un raccordement 400 V adapté. Faites vérifier à l'avance si l'alimentation disponible correspond à la puissance de raccordement.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Houthulst",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Houthulst, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Houthulst",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["diksmuide", "lo-reninge", "langemark-poelkapelle", "staden", "kortemark", "vleteren"],
    faq: [
      {
        q: "Comment organiser une livraison à Houthulst ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Houthulst, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Houthulst ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  kortemark: {
    slug: "kortemark",
    title: "Location de déshumidificateur à Kortemark | Vernast",
    description: "Séchage de chantier à Kortemark : louez un déshumidificateur chez Vernast, livraison, installation et reprise comprises. Conseils en cas de dégâts des eaux.",
    h1: "Location de déshumidificateur de chantier à Kortemark",
    kicker: "Kortemark · livraison sur votre chantier",
    rit: {
      afstand: "environ 115 km",
      tijd: "environ une heure et quart",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Kortemark pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Kortemark",
      alineas: [
        "Vernast livre à Kortemark et dans les localités voisines comme Dixmude, Houthulst, Koekelare. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une nouvelle chape et un plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été posé. L'installation de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk350",
        waarom: "**Pour les grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et du matériau humide. L'agencement de votre chantier détermine où les appareils seront placés.",
      },
      {
        key: "revolution",
        waarom: "**Pour une installation de séchage après des dégâts des eaux.** Discutez d'abord de l'endroit où se trouve l'humidité et de la composition de la construction. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Kortemark",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Kortemark, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Kortemark",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["diksmuide", "houthulst", "koekelare", "torhout", "lichtervelde", "staden"],
    faq: [
      {
        q: "Comment organiser une livraison à Kortemark ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Kortemark, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Kortemark ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  koekelare: {
    slug: "koekelare",
    title: "Location de déshumidificateur à Koekelare | Vernast",
    description: "Déshumidificateur de chantier à Koekelare : calculez votre pack de séchage Vernast en ligne. Livraison, installation et reprise comprises dans le prix.",
    h1: "Location de déshumidificateur de chantier à Koekelare",
    kicker: "Koekelare · livraison sur votre chantier",
    rit: {
      afstand: "environ 115 km",
      tijd: "environ une heure et quart",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Koekelare pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Koekelare",
      alineas: [
        "Vernast livre à Koekelare et dans les localités voisines comme Kortemark, Ichtegem, Gistel. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
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
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk650",
        waarom: "**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés.",
      },
      {
        key: "teddh30",
        waarom: "**Pour un chauffage d'appoint sur un chantier froid.** Ce chauffage électrique nécessite un raccordement 400 V adapté. Faites vérifier à l'avance si l'alimentation disponible correspond à la puissance de raccordement.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Koekelare",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Koekelare, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Koekelare",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["kortemark", "ichtegem", "gistel", "diksmuide", "torhout"],
    faq: [
      {
        q: "Comment organiser une livraison à Koekelare ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Koekelare, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Koekelare ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  ieper: {
    slug: "ieper",
    title: "Location de déshumidificateur de chantier à Ypres | Vernast",
    description: "Louer un déshumidificateur de chantier à Ypres ? Calculez votre pack de séchage chez Vernast, livraison, installation et reprise comprises.",
    h1: "Location de déshumidificateur de chantier à Ypres",
    kicker: "Ypres · livraison sur votre chantier",
    rit: {
      afstand: "environ 135 km",
      tijd: "environ une heure et demie",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Ypres pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Ypres",
      alineas: [
        "Vernast livre à Ypres et dans les localités voisines comme Zonnebeke, Langemark-Poelkapelle, Poperinghe. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une nouvelle chape et un plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été posé. L'installation de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "revolution",
        waarom: "**Pour une installation de séchage après des dégâts des eaux.** Discutez d'abord de l'endroit où se trouve l'humidité et de la composition de la construction. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk350",
        waarom: "**Pour les grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et du matériau humide. L'agencement de votre chantier détermine où les appareils seront placés.",
      },
      {
        key: "ttk650",
        waarom: "**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Ypres",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Ypres, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Ypres",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["zonnebeke", "langemark-poelkapelle", "poperinge", "heuvelland", "mesen", "vleteren"],
    faq: [
      {
        q: "Comment organiser une livraison à Ypres ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Ypres, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Ypres ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  zonnebeke: {
    slug: "zonnebeke",
    title: "Déshumidificateur de chantier à louer à Zonnebeke | Vernast",
    description: "Déshumidificateur de chantier à Zonnebeke : votre pack de séchage Vernast avec livraison, installation et reprise. Conseils pour rénovation et dégâts des eaux.",
    h1: "Location de déshumidificateur de chantier à Zonnebeke",
    kicker: "Zonnebeke · livraison sur votre chantier",
    rit: {
      afstand: "environ 130 km",
      tijd: "environ une heure et demie",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Zonnebeke pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Zonnebeke",
      alineas: [
        "Vernast livre à Zonnebeke et dans les localités voisines comme Ypres, Langemark-Poelkapelle, Moorslede. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une nouvelle chape et un plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été posé. L'installation de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "revolution",
        waarom: "**Pour une installation de séchage après des dégâts des eaux.** Discutez d'abord de l'endroit où se trouve l'humidité et de la composition de la construction. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk350",
        waarom: "**Pour les grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et du matériau humide. L'agencement de votre chantier détermine où les appareils seront placés.",
      },
      {
        key: "ttk650",
        waarom: "**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Zonnebeke",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Zonnebeke, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Zonnebeke",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["ieper", "langemark-poelkapelle", "moorslede", "heuvelland"],
    faq: [
      {
        q: "Comment organiser une livraison à Zonnebeke ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Zonnebeke, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Zonnebeke ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  "langemark-poelkapelle": {
    slug: "langemark-poelkapelle",
    title: "Déshumidificateur à louer à Langemark-Poelkapelle | Vernast",
    description: "Louer un déshumidificateur de chantier à Langemark-Poelkapelle ? Calculez votre pack de séchage chez Vernast, livraison, installation et reprise comprises.",
    h1: "Location de déshumidificateur de chantier à Langemark-Poelkapelle",
    kicker: "Langemark-Poelkapelle · livraison sur votre chantier",
    rit: {
      afstand: "environ 130 km",
      tijd: "environ une heure et demie",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Langemark-Poelkapelle pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Langemark-Poelkapelle",
      alineas: [
        "Vernast livre à Langemark-Poelkapelle et dans les localités voisines comme Ypres, Zonnebeke, Houthulst. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une nouvelle chape et un plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été posé. L'installation de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk350",
        waarom: "**Pour les grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et du matériau humide. L'agencement de votre chantier détermine où les appareils seront placés.",
      },
      {
        key: "revolution",
        waarom: "**Pour une installation de séchage après des dégâts des eaux.** Discutez d'abord de l'endroit où se trouve l'humidité et de la composition de la construction. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Langemark-Poelkapelle",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Langemark-Poelkapelle, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Langemark-Poelkapelle",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["ieper", "zonnebeke", "houthulst", "staden", "poperinge"],
    faq: [
      {
        q: "Comment organiser une livraison à Langemark-Poelkapelle ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Langemark-Poelkapelle, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Langemark-Poelkapelle ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  mesen: {
    slug: "mesen",
    title: "Louer un déshumidificateur de chantier à Messines | Vernast",
    description: "Séchage de chantier à Messines : louez un déshumidificateur chez Vernast, livraison, installation et reprise comprises. Conseils en cas de dégâts des eaux.",
    h1: "Location de déshumidificateur de chantier à Messines",
    kicker: "Messines · livraison sur votre chantier",
    rit: {
      afstand: "environ 145 km",
      tijd: "environ une heure et quarante minutes",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Messines pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Messines",
      alineas: [
        "Vernast livre à Messines et dans les localités voisines comme Heuvelland, Ypres, Wervicq. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
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
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "revolution",
        waarom: "**Pour une installation de séchage après des dégâts des eaux.** Discutez d'abord de l'endroit où se trouve l'humidité et de la composition de la construction. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttk650",
        waarom: "**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Messines",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Messines, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Messines",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["heuvelland", "ieper", "wervik"],
    faq: [
      {
        q: "Comment organiser une livraison à Messines ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Messines, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Messines ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  heuvelland: {
    slug: "heuvelland",
    title: "Location de déshumidificateur à Heuvelland | Vernast",
    description: "Déshumidificateur de chantier à Heuvelland : calculez votre pack de séchage Vernast en ligne. Livraison, installation et reprise comprises dans le prix.",
    h1: "Location de déshumidificateur de chantier à Heuvelland",
    kicker: "Heuvelland · livraison sur votre chantier",
    rit: {
      afstand: "environ 145 km",
      tijd: "environ une heure et quarante minutes",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Heuvelland pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Heuvelland",
      alineas: [
        "Vernast livre à Heuvelland et dans les localités voisines comme Ypres, Messines, Poperinghe. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une nouvelle chape et un plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été posé. L'installation de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "revolution",
        waarom: "**Pour une installation de séchage après des dégâts des eaux.** Discutez d'abord de l'endroit où se trouve l'humidité et de la composition de la construction. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk350",
        waarom: "**Pour les grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et du matériau humide. L'agencement de votre chantier détermine où les appareils seront placés.",
      },
      {
        key: "ttk650",
        waarom: "**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Heuvelland",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Heuvelland, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Heuvelland",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["ieper", "mesen", "poperinge", "zonnebeke"],
    faq: [
      {
        q: "Comment organiser une livraison à Heuvelland ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Heuvelland, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Heuvelland ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  poperinge: {
    slug: "poperinge",
    title: "Location de déshumidificateur à Poperinghe | Vernast",
    description: "Louer un déshumidificateur de chantier à Poperinghe ? Calculez votre pack de séchage chez Vernast, livraison, installation et reprise comprises.",
    h1: "Location de déshumidificateur de chantier à Poperinghe",
    kicker: "Poperinghe · livraison sur votre chantier",
    rit: {
      afstand: "environ 145 km",
      tijd: "environ une heure et quarante minutes",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Poperinghe pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Poperinghe",
      alineas: [
        "Vernast livre à Poperinghe et dans les localités voisines comme Ypres, Heuvelland, Vleteren. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une nouvelle chape et un plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été posé. L'installation de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "revolution",
        waarom: "**Pour une installation de séchage après des dégâts des eaux.** Discutez d'abord de l'endroit où se trouve l'humidité et de la composition de la construction. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttk350",
        waarom: "**Pour les grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et du matériau humide. L'agencement de votre chantier détermine où les appareils seront placés.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Poperinghe",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Poperinghe, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Poperinghe",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["ieper", "heuvelland", "vleteren", "alveringem", "langemark-poelkapelle"],
    faq: [
      {
        q: "Comment organiser une livraison à Poperinghe ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Poperinghe, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Poperinghe ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

};
