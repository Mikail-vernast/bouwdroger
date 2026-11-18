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
  "sint-truiden": {
    slug: "sint-truiden",
    title: "Location de déshumidificateur à Saint-Trond | Vernast",
    description: "Un déshumidificateur de chantier à Saint-Trond ? Calculez votre pack de séchage Vernast en ligne : livraison, installation et reprise comprises.",
    h1: "Location de déshumidificateur de chantier à Saint-Trond",
    kicker: "Saint-Trond · livraison sur votre chantier",
    rit: {
      afstand: "environ 85 km",
      tijd: "environ une heure et cinq minutes",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Saint-Trond pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Saint-Trond",
      alineas: [
        "Vernast livre à Saint-Trond et dans les localités voisines comme Nieuwerkerken, Gingelom, Heers. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une nouvelle chape et un plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été posé. L'installation de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "revolution",
        waarom: "**Pour une installation de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttk650",
        waarom: "**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés.",
      },
      {
        key: "ttk350",
        waarom: "**Pour les grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et du matériau humide. L'agencement de votre chantier détermine où les appareils seront placés.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Saint-Trond",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Saint-Trond, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Saint-Trond",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["nieuwerkerken", "gingelom", "heers", "wellen", "alken", "tongeren-borgloon"],
    faq: [
      {
        q: "Comment organiser une livraison à Saint-Trond ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Saint-Trond, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Saint-Trond ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  "tongeren-borgloon": {
    slug: "tongeren-borgloon",
    title: "Location de déshumidificateur à Tongres-Looz | Vernast",
    description: "Besoin de sécher une chape ou un plafonnage à Tongres-Looz ? Louez un déshumidificateur de chantier chez Vernast, avec livraison, installation et reprise.",
    h1: "Location de déshumidificateur de chantier à Tongres-Looz",
    kicker: "Tongres-Looz · livraison sur votre chantier",
    rit: {
      afstand: "environ 105 km",
      tijd: "environ une heure et quart",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Tongres-Looz pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Tongres-Looz",
      alineas: [
        "Vernast livre à Tongres-Looz et dans les localités voisines comme Bilzen-Hoeselt, Riemst, Heers. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une nouvelle chape et un plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été posé. L'installation de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "revolution",
        waarom: "**Pour une installation de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
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
      kop: "Livraison et installation à Tongres-Looz",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Tongres-Looz, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Tongres-Looz",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["bilzen-hoeselt", "riemst", "heers", "wellen", "sint-truiden", "herstappe"],
    faq: [
      {
        q: "Comment organiser une livraison à Tongres-Looz ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Tongres-Looz, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Tongres-Looz ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  "bilzen-hoeselt": {
    slug: "bilzen-hoeselt",
    title: "Location de déshumidificateur à Bilzen-Hoeselt | Vernast",
    description: "Besoin de sécher une chape ou un plafonnage à Bilzen-Hoeselt ? Louez un déshumidificateur de chantier chez Vernast, avec livraison, installation et reprise.",
    h1: "Location de déshumidificateur de chantier à Bilzen-Hoeselt",
    kicker: "Bilzen-Hoeselt · livraison sur votre chantier",
    rit: {
      afstand: "environ 100 km",
      tijd: "environ une heure et dix minutes",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Bilzen-Hoeselt pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Bilzen-Hoeselt",
      alineas: [
        "Vernast livre à Bilzen-Hoeselt et dans les localités voisines comme Tongres-Looz, Riemst, Diepenbeek. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        waarom: "**Pour une installation de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttk350",
        waarom: "**Pour les grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et du matériau humide. L'agencement de votre chantier détermine où les appareils seront placés.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Bilzen-Hoeselt",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Bilzen-Hoeselt, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Bilzen-Hoeselt",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["tongeren-borgloon", "riemst", "diepenbeek", "zutendaal", "lanaken", "wellen"],
    faq: [
      {
        q: "Comment organiser une livraison à Bilzen-Hoeselt ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Bilzen-Hoeselt, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Bilzen-Hoeselt ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  riemst: {
    slug: "riemst",
    title: "Pack de séchage à Riemst : déshumidificateur | Vernast",
    description: "Location de déshumidificateur à Riemst pour construction neuve, rénovation ou dégâts des eaux. Livraison, installation et reprise comprises dans votre pack.",
    h1: "Location de déshumidificateur de chantier à Riemst",
    kicker: "Riemst · livraison sur votre chantier",
    rit: {
      afstand: "environ 115 km",
      tijd: "environ une heure et vingt minutes",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Riemst pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Riemst",
      alineas: [
        "Vernast livre à Riemst et dans les localités voisines comme Tongres-Looz, Bilzen-Hoeselt, Lanaken. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une nouvelle chape et un plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été posé. L'installation de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "revolution",
        waarom: "**Pour une installation de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
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
      kop: "Livraison et installation à Riemst",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Riemst, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Riemst",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["tongeren-borgloon", "bilzen-hoeselt", "lanaken", "voeren", "herstappe"],
    faq: [
      {
        q: "Comment organiser une livraison à Riemst ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Riemst, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Riemst ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  wellen: {
    slug: "wellen",
    title: "Déshumidificateur de chantier à Wellen, livraison incluse",
    description: "Besoin de sécher une chape ou un plafonnage à Wellen ? Louez un déshumidificateur de chantier chez Vernast, avec livraison, installation et reprise.",
    h1: "Location de déshumidificateur de chantier à Wellen",
    kicker: "Wellen · livraison sur votre chantier",
    rit: {
      afstand: "environ 95 km",
      tijd: "environ une heure et dix minutes",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Wellen pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Wellen",
      alineas: [
        "Vernast livre à Wellen et dans les localités voisines comme Saint-Trond, Alken, Tongres-Looz. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une nouvelle chape et un plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été posé. L'installation de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "revolution",
        waarom: "**Pour une installation de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
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
    ],
    levering: {
      kop: "Livraison et installation à Wellen",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Wellen, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Wellen",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["sint-truiden", "alken", "tongeren-borgloon", "heers", "nieuwerkerken"],
    faq: [
      {
        q: "Comment organiser une livraison à Wellen ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Wellen, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Wellen ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  heers: {
    slug: "heers",
    title: "Location de déshumidificateur de chantier à Heers | Vernast",
    description: "Un déshumidificateur de chantier à Heers ? Calculez votre pack de séchage Vernast en ligne : livraison, installation et reprise comprises.",
    h1: "Location de déshumidificateur de chantier à Heers",
    kicker: "Heers · livraison sur votre chantier",
    rit: {
      afstand: "environ 95 km",
      tijd: "environ une heure et dix minutes",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Heers pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Heers",
      alineas: [
        "Vernast livre à Heers et dans les localités voisines comme Saint-Trond, Gingelom, Wellen. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        waarom: "**Pour une installation de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttk350",
        waarom: "**Pour les grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et du matériau humide. L'agencement de votre chantier détermine où les appareils seront placés.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Heers",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Heers, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Heers",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["sint-truiden", "gingelom", "wellen", "tongeren-borgloon"],
    faq: [
      {
        q: "Comment organiser une livraison à Heers ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Heers, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Heers ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  gingelom: {
    slug: "gingelom",
    title: "Déshumidificateur de chantier à louer à Gingelom | Vernast",
    description: "Un déshumidificateur de chantier à Gingelom ? Calculez votre pack de séchage Vernast en ligne : livraison, installation et reprise comprises.",
    h1: "Location de déshumidificateur de chantier à Gingelom",
    kicker: "Gingelom · livraison sur votre chantier",
    rit: {
      afstand: "environ 90 km",
      tijd: "environ une heure et cinq minutes",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Gingelom pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Gingelom",
      alineas: [
        "Vernast livre à Gingelom et dans les localités voisines comme Saint-Trond, Heers, Nieuwerkerken. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        waarom: "**Pour une installation de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttk350",
        waarom: "**Pour les grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et du matériau humide. L'agencement de votre chantier détermine où les appareils seront placés.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Gingelom",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Gingelom, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Gingelom",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["sint-truiden", "heers", "nieuwerkerken"],
    faq: [
      {
        q: "Comment organiser une livraison à Gingelom ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Gingelom, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Gingelom ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  herstappe: {
    slug: "herstappe",
    title: "Déshumidificateur de chantier à louer à Herstappe | Vernast",
    description: "Vernast livre votre déshumidificateur de chantier à Herstappe et l'installe sur place, reprise comprise dans le pack de séchage. Calculez votre prix en ligne.",
    h1: "Location de déshumidificateur de chantier à Herstappe",
    kicker: "Herstappe · livraison sur votre chantier",
    rit: {
      afstand: "environ 110 km",
      tijd: "environ une heure et quart",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Herstappe pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Herstappe",
      alineas: [
        "Vernast livre à Herstappe et dans les localités voisines comme Tongres-Looz, Riemst. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "revolution",
        waarom: "**Pour une installation de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Herstappe",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Herstappe, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Herstappe",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["tongeren-borgloon", "riemst"],
    faq: [
      {
        q: "Comment organiser une livraison à Herstappe ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Herstappe, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Herstappe ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  voeren: {
    slug: "voeren",
    title: "Louer un déshumidificateur de chantier à Fourons | Vernast",
    description: "Vernast livre votre déshumidificateur de chantier à Fourons et l'installe sur place, reprise comprise dans le pack de séchage. Calculez votre prix en ligne.",
    h1: "Location de déshumidificateur de chantier à Fourons",
    kicker: "Fourons · livraison sur votre chantier",
    rit: {
      afstand: "environ 140 km",
      tijd: "environ deux heures",
    },
    intro: [
      "Vous souhaitez louer un déshumidificateur de chantier à Fourons pour une construction neuve, une rénovation ou des dégâts des eaux ? Vernast livre et installe les appareils sur votre chantier. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne et contactez-nous pour convenir du moment de livraison à votre adresse.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Fourons",
      alineas: [
        "Vernast livre à Fourons et dans les localités voisines comme Riemst, Tongres-Looz. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une nouvelle chape et un plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été posé. L'installation de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "revolution",
        waarom: "**Pour une installation de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
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
      kop: "Livraison et installation à Fourons",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Fourons, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Fourons",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["riemst", "tongeren-borgloon"],
    faq: [
      {
        q: "Comment organiser une livraison à Fourons ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Fourons, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Fourons ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  maaseik: {
    slug: "maaseik",
    title: "Pack de séchage à Maaseik : déshumidificateur | Vernast",
    description: "Location de déshumidificateur à Maaseik pour construction neuve, rénovation ou dégâts des eaux. Livraison, installation et reprise comprises dans votre pack.",
    h1: "Location de déshumidificateur de chantier à Maaseik",
    kicker: "Maaseik · livraison sur votre chantier",
    rit: {
      afstand: "environ 105 km",
      tijd: "environ une heure et quart",
    },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Maaseik pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs de chantier pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Maaseik",
      alineas: [
        "Vernast livre à Maaseik et dans les localités voisines comme Kinrooi, Dilsen-Stokkem, Bree. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        waarom: "**Pour une installation de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttk350",
        waarom: "**Pour les grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et du matériau humide. L'agencement de votre chantier détermine où les appareils seront placés.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Maaseik",
      alinea: "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse à Maaseik, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien place les appareils et explique comment utiliser l'installation et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Maaseik",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur l'installation ou il vous faut plusieurs appareils ? Envisagez alors un pack de séchage avec installation.",
    },
    buren: ["kinrooi", "dilsen-stokkem", "bree", "oudsbergen"],
    faq: [
      {
        q: "Comment organiser une livraison à Maaseik ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Maaseik, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Maaseik ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
};
