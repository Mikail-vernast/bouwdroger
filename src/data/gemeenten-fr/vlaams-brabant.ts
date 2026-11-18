import type { Gemeente } from "../gemeenten.js";

/**
 * De Franse teksten van de gemeentepagina's in deze provincie, gesleuteld op
 * de Nederlandse slug. Zie README.md in deze map voor de regels en hoe een
 * gemeente aangezet wordt (`aan/vlaams-brabant.ts`).
 */
export const GEMEENTEN: Record<string, Gemeente> = {
  leuven: {
    slug: "leuven",
    title: "Louer un déshumidificateur de chantier à Louvain | Vernast",
    description:
      "Déshumidificateur à Louvain : calculez votre pack de séchage chez Vernast, livraison, installation et reprise comprises. Neuf, rénovation, dégâts des eaux.",
    h1: "Location de déshumidificateur à Louvain",
    kicker: "Louvain · livraison sur votre chantier",
    rit: { afstand: "environ 50 km", tijd: "environ quarante-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Louvain pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Louvain",
      alineas: [
        "Vernast livre à Louvain et dans les communes voisines comme Herent, Oud-Heverlee et Bierbeek. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Vous séchez un appartement ou un étage ? Précisez s'il y a un ascenseur ou un escalier fixe et quelle est la largeur de l'accès. L'espace disponible détermine en partie les appareils que nous pouvons installer. Dans un immeuble partagé, convenez à l'avance de qui ouvre la porte et de l'endroit où le matériel peut être déposé.",
        "Une chape neuve et le plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été appliqué. Le dispositif de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou tout le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk170",
        waarom: "**Pour une pièce séparée ou une zone de séchage plus petite.** Discutez des dimensions, de la température et de la quantité d'humidité pour déterminer si cet appareil a une capacité suffisante.",
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
        key: "ttk350",
        waarom: "**Pour de grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et des matériaux humides. L'agencement de votre chantier détermine l'emplacement des appareils.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Louvain",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Louvain, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Louvain",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["herent", "oud-heverlee", "bierbeek", "holsbeek", "bertem"],
    faq: [
      {
        q: "Comment organiser une livraison à Louvain ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Louvain, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
      },
      {
        q: "De combien de déshumidificateurs ai-je besoin ?",
        a: "Cela dépend du volume, de l'agencement, du matériau et de la quantité d'humidité. Un étage ouvert demande un autre dispositif que plusieurs pièces fermées. Utilisez le calculateur pour votre pack et demandez conseil si votre situation est particulière, par exemple une pièce haute ou une humidité cachée.",
      },
      {
        q: "Comment savoir si le sol ou le mur est assez sec ?",
        a: "La durée de location seule ne donne aucune certitude à ce sujet. Faites contrôler l'humidité résiduelle avec une méthode adaptée au matériau. Votre poseur de sol ou votre peintre détermine quelle valeur d'humidité et quelle mesure complémentaire éventuelle sont nécessaires avant d'appliquer la finition choisie.",
      },
      {
        q: "Un déshumidificateur peut-il être installé à l'étage ?",
        a: "Cela dépend de l'accès et de l'appareil. Signalez dans votre demande l'étage, un éventuel ascenseur et les passages étroits. S'il n'y a pas d'escalier fixe, discutez à l'avance de la manière de monter les appareils et du supplément applicable.",
      },
      {
        q: "De quelle alimentation électrique ai-je besoin ?",
        a: "La puissance de raccordement varie selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW nécessitent une alimentation 400 V adaptée. En cas de doute, faites contrôler la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Louvain ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  vilvoorde: {
    slug: "vilvoorde",
    title: "Déshumidificateur de chantier à Vilvorde | Vernast",
    description:
      "Déshumidificateur de chantier à Vilvorde ? Pack de séchage Vernast avec livraison, installation et reprise. Conseils en neuf, rénovation et dégâts des eaux.",
    h1: "Location de déshumidificateur à Vilvorde",
    kicker: "Vilvorde · livraison sur votre chantier",
    rit: { afstand: "environ 35 km", tijd: "environ trente-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Vilvorde pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Vilvorde",
      alineas: [
        "Vernast livre à Vilvorde et dans les communes voisines comme Machelen, Grimbergen et Zaventem. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Vous séchez un appartement ou un étage ? Précisez s'il y a un ascenseur ou un escalier fixe et quelle est la largeur de l'accès. L'espace disponible détermine en partie les appareils que nous pouvons installer. Dans un immeuble partagé, convenez à l'avance de qui ouvre la porte et de l'endroit où le matériel peut être déposé.",
        "Une chape neuve et le plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été appliqué. Le dispositif de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou tout le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk170",
        waarom: "**Pour une pièce séparée ou une zone de séchage plus petite.** Discutez des dimensions, de la température et de la quantité d'humidité pour déterminer si cet appareil a une capacité suffisante.",
      },
      {
        key: "ttk350",
        waarom: "**Pour de grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et des matériaux humides. L'agencement de votre chantier détermine l'emplacement des appareils.",
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
      kop: "Livraison et installation à Vilvorde",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Vilvorde, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Vilvorde",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["machelen", "grimbergen", "zaventem", "steenokkerzeel", "zemst"],
    faq: [
      {
        q: "Comment organiser une livraison à Vilvorde ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Vilvorde, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
      },
      {
        q: "De combien de déshumidificateurs ai-je besoin ?",
        a: "Cela dépend du volume, de l'agencement, du matériau et de la quantité d'humidité. Un étage ouvert demande un autre dispositif que plusieurs pièces fermées. Utilisez le calculateur pour votre pack et demandez conseil si votre situation est particulière, par exemple une pièce haute ou une humidité cachée.",
      },
      {
        q: "Comment savoir si le sol ou le mur est assez sec ?",
        a: "La durée de location seule ne donne aucune certitude à ce sujet. Faites contrôler l'humidité résiduelle avec une méthode adaptée au matériau. Votre poseur de sol ou votre peintre détermine quelle valeur d'humidité et quelle mesure complémentaire éventuelle sont nécessaires avant d'appliquer la finition choisie.",
      },
      {
        q: "Un déshumidificateur peut-il être installé à l'étage ?",
        a: "Cela dépend de l'accès et de l'appareil. Signalez dans votre demande l'étage, un éventuel ascenseur et les passages étroits. S'il n'y a pas d'escalier fixe, discutez à l'avance de la manière de monter les appareils et du supplément applicable.",
      },
      {
        q: "De quelle alimentation électrique ai-je besoin ?",
        a: "La puissance de raccordement varie selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW nécessitent une alimentation 400 V adaptée. En cas de doute, faites contrôler la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Vilvorde ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  tienen: {
    slug: "tienen",
    title: "Louer un déshumidificateur de chantier à Tirlemont | Vernast",
    description:
      "Louez un déshumidificateur de chantier à Tirlemont chez Vernast. Livraison, installation et reprise comprises dans votre pack de séchage. Prix calculé en ligne.",
    h1: "Location de déshumidificateur à Tirlemont",
    kicker: "Tirlemont · livraison sur votre chantier",
    rit: { afstand: "environ 65 km", tijd: "environ cinquante-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Tirlemont pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Tirlemont",
      alineas: [
        "Vernast livre à Tirlemont et dans les communes voisines comme Boutersem, Hoegaarden et Linter. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Pour un magasin, un bureau ou un local professionnel, l'utilisation du bâtiment compte autant que son volume. Indiquez quelles zones doivent rester accessibles et à quels moments les travaux ont lieu. Avec plusieurs pièces fermées, un dispositif réparti peut être nécessaire. Nous discutons à l'avance d'une réouverture prévue ; la mesure d'humidité détermine si la finition peut commencer.",
        "Une chape neuve et le plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été appliqué. Le dispositif de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou tout le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air à côté du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk350",
        waarom: "**Pour de grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et des matériaux humides. L'agencement de votre chantier détermine l'emplacement des appareils.",
      },
      {
        key: "revolution",
        waarom: "**Pour un dispositif de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Tirlemont",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Tirlemont, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Tirlemont",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["boutersem", "hoegaarden", "linter", "glabbeek", "zoutleeuw"],
    faq: [
      {
        q: "Comment organiser une livraison à Tirlemont ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Tirlemont, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
      },
      {
        q: "De combien de déshumidificateurs ai-je besoin ?",
        a: "Cela dépend du volume, de l'agencement, du matériau et de la quantité d'humidité. Un étage ouvert demande un autre dispositif que plusieurs pièces fermées. Utilisez le calculateur pour votre pack et demandez conseil si votre situation est particulière, par exemple une pièce haute ou une humidité cachée.",
      },
      {
        q: "Comment savoir si le sol ou le mur est assez sec ?",
        a: "La durée de location seule ne donne aucune certitude à ce sujet. Faites contrôler l'humidité résiduelle avec une méthode adaptée au matériau. Votre poseur de sol ou votre peintre détermine quelle valeur d'humidité et quelle mesure complémentaire éventuelle sont nécessaires avant d'appliquer la finition choisie.",
      },
      {
        q: "Puis-je faire sécher un local professionnel pendant les travaux ?",
        a: "Discutez à l'avance des pièces qui restent en service, de l'alimentation électrique disponible et de votre planning. Nous adaptons l'installation en conséquence. Un grand espace ouvert demande une autre répartition que plusieurs pièces fermées ; la surface au sol totale ne suffit donc pas, à elle seule, pour vous conseiller.",
      },
      {
        q: "De quelle alimentation électrique ai-je besoin ?",
        a: "La puissance de raccordement varie selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW nécessitent une alimentation 400 V adaptée. En cas de doute, faites contrôler la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Tirlemont ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  linter: {
    slug: "linter",
    title: "Déshumidificateur de chantier à Linter : location | Vernast",
    description:
      "Location de déshumidificateur à Linter : pack de séchage avec livraison, installation et reprise. Pour construction neuve, rénovation et dégâts des eaux.",
    h1: "Location de déshumidificateur à Linter",
    kicker: "Linter · livraison sur votre chantier",
    rit: { afstand: "environ 65 km", tijd: "environ cinquante-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Linter pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Linter",
      alineas: [
        "Vernast livre à Linter et dans les communes voisines comme Tirlemont, Léau et Kortenaken. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une chape neuve et le plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été appliqué. Le dispositif de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou tout le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air à côté du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk350",
        waarom: "**Pour de grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et des matériaux humides. L'agencement de votre chantier détermine l'emplacement des appareils.",
      },
      {
        key: "revolution",
        waarom: "**Pour un dispositif de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Linter",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Linter, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Linter",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["tienen", "zoutleeuw", "kortenaken", "glabbeek"],
    faq: [
      {
        q: "Comment organiser une livraison à Linter ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Linter, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
      },
      {
        q: "De combien de déshumidificateurs ai-je besoin ?",
        a: "Cela dépend du volume, de l'agencement, du matériau et de la quantité d'humidité. Un étage ouvert demande un autre dispositif que plusieurs pièces fermées. Utilisez le calculateur pour votre pack et demandez conseil si votre situation est particulière, par exemple une pièce haute ou une humidité cachée.",
      },
      {
        q: "Comment savoir si le sol ou le mur est assez sec ?",
        a: "La durée de location seule ne donne aucune certitude à ce sujet. Faites contrôler l'humidité résiduelle avec une méthode adaptée au matériau. Votre poseur de sol ou votre peintre détermine quelle valeur d'humidité et quelle mesure complémentaire éventuelle sont nécessaires avant d'appliquer la finition choisie.",
      },
      {
        q: "Un déshumidificateur résout-il un problème d'humidité persistant ?",
        a: "Un déshumidificateur aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou une barrière d'étanchéité manquante. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que le déshumidificateur fonctionne.",
      },
      {
        q: "De quelle alimentation électrique ai-je besoin ?",
        a: "La puissance de raccordement varie selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW nécessitent une alimentation 400 V adaptée. En cas de doute, faites contrôler la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Linter ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  zoutleeuw: {
    slug: "zoutleeuw",
    title: "Séchage de chantier à Léau : déshumidificateurs | Vernast",
    description:
      "Besoin d'un déshumidificateur de chantier à Léau ? Calculez votre pack de séchage en ligne, livraison, installation et reprise comprises.",
    h1: "Location de déshumidificateur à Léau",
    kicker: "Léau · livraison sur votre chantier",
    rit: { afstand: "environ 68 km", tijd: "environ une heure" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Léau pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Léau",
      alineas: [
        "Vernast livre à Léau et dans les communes voisines comme Linter, Tirlemont et Kortenaken. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une chape neuve et le plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été appliqué. Le dispositif de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou tout le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air à côté du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "revolution",
        waarom: "**Pour un dispositif de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttk350",
        waarom: "**Pour de grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et des matériaux humides. L'agencement de votre chantier détermine l'emplacement des appareils.",
      },
      {
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Léau",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Léau, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Léau",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["linter", "tienen", "kortenaken", "geetbets"],
    faq: [
      {
        q: "Comment organiser une livraison à Léau ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Léau, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
      },
      {
        q: "De combien de déshumidificateurs ai-je besoin ?",
        a: "Cela dépend du volume, de l'agencement, du matériau et de la quantité d'humidité. Un étage ouvert demande un autre dispositif que plusieurs pièces fermées. Utilisez le calculateur pour votre pack et demandez conseil si votre situation est particulière, par exemple une pièce haute ou une humidité cachée.",
      },
      {
        q: "Comment savoir si le sol ou le mur est assez sec ?",
        a: "La durée de location seule ne donne aucune certitude à ce sujet. Faites contrôler l'humidité résiduelle avec une méthode adaptée au matériau. Votre poseur de sol ou votre peintre détermine quelle valeur d'humidité et quelle mesure complémentaire éventuelle sont nécessaires avant d'appliquer la finition choisie.",
      },
      {
        q: "Un déshumidificateur résout-il un problème d'humidité persistant ?",
        a: "Un déshumidificateur aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou une barrière d'étanchéité manquante. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que le déshumidificateur fonctionne.",
      },
      {
        q: "De quelle alimentation électrique ai-je besoin ?",
        a: "La puissance de raccordement varie selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW nécessitent une alimentation 400 V adaptée. En cas de doute, faites contrôler la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Léau ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  hoegaarden: {
    slug: "hoegaarden",
    title: "Déshumidificateur de chantier à louer à Hoegaarden | Vernast",
    description:
      "Vernast loue des déshumidificateurs de chantier à Hoegaarden : livraison, installation et reprise comprises, ou enlèvement sur rendez-vous à Aartselaar.",
    h1: "Location de déshumidificateur à Hoegaarden",
    kicker: "Hoegaarden · livraison sur votre chantier",
    rit: { afstand: "environ 70 km", tijd: "environ une heure" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Hoegaarden pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Hoegaarden",
      alineas: [
        "Vernast livre à Hoegaarden et dans les communes voisines comme Tirlemont, Boutersem et Landen. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une chape neuve et le plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été appliqué. Le dispositif de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou tout le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "revolution",
        waarom: "**Pour un dispositif de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air à côté du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk350",
        waarom: "**Pour de grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et des matériaux humides. L'agencement de votre chantier détermine l'emplacement des appareils.",
      },
      {
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Hoegaarden",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Hoegaarden, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Hoegaarden",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["tienen", "boutersem", "landen"],
    faq: [
      {
        q: "Comment organiser une livraison à Hoegaarden ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Hoegaarden, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
      },
      {
        q: "De combien de déshumidificateurs ai-je besoin ?",
        a: "Cela dépend du volume, de l'agencement, du matériau et de la quantité d'humidité. Un étage ouvert demande un autre dispositif que plusieurs pièces fermées. Utilisez le calculateur pour votre pack et demandez conseil si votre situation est particulière, par exemple une pièce haute ou une humidité cachée.",
      },
      {
        q: "Comment savoir si le sol ou le mur est assez sec ?",
        a: "La durée de location seule ne donne aucune certitude à ce sujet. Faites contrôler l'humidité résiduelle avec une méthode adaptée au matériau. Votre poseur de sol ou votre peintre détermine quelle valeur d'humidité et quelle mesure complémentaire éventuelle sont nécessaires avant d'appliquer la finition choisie.",
      },
      {
        q: "Un déshumidificateur résout-il un problème d'humidité persistant ?",
        a: "Un déshumidificateur aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou une barrière d'étanchéité manquante. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que le déshumidificateur fonctionne.",
      },
      {
        q: "De quelle alimentation électrique ai-je besoin ?",
        a: "La puissance de raccordement varie selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW nécessitent une alimentation 400 V adaptée. En cas de doute, faites contrôler la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Hoegaarden ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  landen: {
    slug: "landen",
    title: "Landen : location de déshumidificateur de chantier | Vernast",
    description:
      "Déshumidificateur à Landen : calculez votre pack de séchage Vernast en ligne. Livraison, installation et reprise comprises. Conseils pour neuf et rénovation.",
    h1: "Location de déshumidificateur à Landen",
    kicker: "Landen · livraison sur votre chantier",
    rit: { afstand: "environ 78 km", tijd: "environ une heure cinq" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Landen pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Landen",
      alineas: [
        "Vernast livre à Landen et dans les communes voisines comme Hoegaarden, Léau et Tirlemont. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une chape neuve et le plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été appliqué. Le dispositif de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou tout le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
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
        key: "ttk350",
        waarom: "**Pour de grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et des matériaux humides. L'agencement de votre chantier détermine l'emplacement des appareils.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Landen",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Landen, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Landen",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["hoegaarden", "zoutleeuw", "tienen"],
    faq: [
      {
        q: "Comment organiser une livraison à Landen ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Landen, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
      },
      {
        q: "De combien de déshumidificateurs ai-je besoin ?",
        a: "Cela dépend du volume, de l'agencement, du matériau et de la quantité d'humidité. Un étage ouvert demande un autre dispositif que plusieurs pièces fermées. Utilisez le calculateur pour votre pack et demandez conseil si votre situation est particulière, par exemple une pièce haute ou une humidité cachée.",
      },
      {
        q: "Comment savoir si le sol ou le mur est assez sec ?",
        a: "La durée de location seule ne donne aucune certitude à ce sujet. Faites contrôler l'humidité résiduelle avec une méthode adaptée au matériau. Votre poseur de sol ou votre peintre détermine quelle valeur d'humidité et quelle mesure complémentaire éventuelle sont nécessaires avant d'appliquer la finition choisie.",
      },
      {
        q: "Un déshumidificateur résout-il un problème d'humidité persistant ?",
        a: "Un déshumidificateur aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou une barrière d'étanchéité manquante. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que le déshumidificateur fonctionne.",
      },
      {
        q: "De quelle alimentation électrique ai-je besoin ?",
        a: "La puissance de raccordement varie selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW nécessitent une alimentation 400 V adaptée. En cas de doute, faites contrôler la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Landen ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  aarschot: {
    slug: "aarschot",
    title: "Déshumidificateur de chantier à louer à Aarschot | Vernast",
    description:
      "Chape, plafonnage ou dégâts des eaux à Aarschot ? Vernast livre et installe vos déshumidificateurs de chantier, reprise comprise. Calculez votre pack en ligne.",
    h1: "Location de déshumidificateur à Aarschot",
    kicker: "Aarschot · livraison sur votre chantier",
    rit: { afstand: "environ 45 km", tijd: "environ quarante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Aarschot pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Aarschot",
      alineas: [
        "Vernast livre à Aarschot et dans les communes voisines comme Rotselaar, Begijnendijk et Scherpenheuvel-Zichem. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une chape neuve et le plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été appliqué. Le dispositif de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou tout le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
      {
        key: "ttk350",
        waarom: "**Pour de grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et des matériaux humides. L'agencement de votre chantier détermine l'emplacement des appareils.",
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
      kop: "Livraison et installation à Aarschot",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Aarschot, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Aarschot",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["rotselaar", "begijnendijk", "scherpenheuvel-zichem", "tielt-winge", "holsbeek"],
    faq: [
      {
        q: "Comment organiser une livraison à Aarschot ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Aarschot, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
      },
      {
        q: "De combien de déshumidificateurs ai-je besoin ?",
        a: "Cela dépend du volume, de l'agencement, du matériau et de la quantité d'humidité. Un étage ouvert demande un autre dispositif que plusieurs pièces fermées. Utilisez le calculateur pour votre pack et demandez conseil si votre situation est particulière, par exemple une pièce haute ou une humidité cachée.",
      },
      {
        q: "Comment savoir si le sol ou le mur est assez sec ?",
        a: "La durée de location seule ne donne aucune certitude à ce sujet. Faites contrôler l'humidité résiduelle avec une méthode adaptée au matériau. Votre poseur de sol ou votre peintre détermine quelle valeur d'humidité et quelle mesure complémentaire éventuelle sont nécessaires avant d'appliquer la finition choisie.",
      },
      {
        q: "Un déshumidificateur résout-il un problème d'humidité persistant ?",
        a: "Un déshumidificateur aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou une barrière d'étanchéité manquante. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que le déshumidificateur fonctionne.",
      },
      {
        q: "De quelle alimentation électrique ai-je besoin ?",
        a: "La puissance de raccordement varie selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW nécessitent une alimentation 400 V adaptée. En cas de doute, faites contrôler la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Aarschot ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  "tielt-winge": {
    slug: "tielt-winge",
    title: "Déshumidificateurs de chantier à Tielt-Winge | Vernast",
    description:
      "Séchez votre chantier à Tielt-Winge avec un pack de séchage Vernast : déshumidificateurs livrés, installés et repris. Calculez votre prix de location en ligne.",
    h1: "Location de déshumidificateur à Tielt-Winge",
    kicker: "Tielt-Winge · livraison sur votre chantier",
    rit: { afstand: "environ 52 km", tijd: "environ quarante-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Tielt-Winge pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Tielt-Winge",
      alineas: [
        "Vernast livre à Tielt-Winge et dans les communes voisines comme Aarschot, Holsbeek et Lubbeek. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une chape neuve et le plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été appliqué. Le dispositif de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou tout le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
      {
        key: "ttk350",
        waarom: "**Pour de grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et des matériaux humides. L'agencement de votre chantier détermine l'emplacement des appareils.",
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
      kop: "Livraison et installation à Tielt-Winge",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Tielt-Winge, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Tielt-Winge",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["aarschot", "holsbeek", "lubbeek", "bekkevoort", "glabbeek"],
    faq: [
      {
        q: "Comment organiser une livraison à Tielt-Winge ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Tielt-Winge, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
      },
      {
        q: "De combien de déshumidificateurs ai-je besoin ?",
        a: "Cela dépend du volume, de l'agencement, du matériau et de la quantité d'humidité. Un étage ouvert demande un autre dispositif que plusieurs pièces fermées. Utilisez le calculateur pour votre pack et demandez conseil si votre situation est particulière, par exemple une pièce haute ou une humidité cachée.",
      },
      {
        q: "Comment savoir si le sol ou le mur est assez sec ?",
        a: "La durée de location seule ne donne aucune certitude à ce sujet. Faites contrôler l'humidité résiduelle avec une méthode adaptée au matériau. Votre poseur de sol ou votre peintre détermine quelle valeur d'humidité et quelle mesure complémentaire éventuelle sont nécessaires avant d'appliquer la finition choisie.",
      },
      {
        q: "Un déshumidificateur résout-il un problème d'humidité persistant ?",
        a: "Un déshumidificateur aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou une barrière d'étanchéité manquante. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que le déshumidificateur fonctionne.",
      },
      {
        q: "De quelle alimentation électrique ai-je besoin ?",
        a: "La puissance de raccordement varie selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW nécessitent une alimentation 400 V adaptée. En cas de doute, faites contrôler la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Tielt-Winge ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  "scherpenheuvel-zichem": {
    slug: "scherpenheuvel-zichem",
    title: "Louer un déshumidificateur à Scherpenheuvel-Zichem | Vernast",
    description:
      "Besoin d'un déshumidificateur de chantier à Scherpenheuvel-Zichem ? Calculez votre pack de séchage en ligne, livraison, installation et reprise comprises.",
    h1: "Location de déshumidificateur à Scherpenheuvel-Zichem",
    kicker: "Scherpenheuvel-Zichem · livraison sur votre chantier",
    rit: { afstand: "environ 52 km", tijd: "environ quarante-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Scherpenheuvel-Zichem pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Scherpenheuvel-Zichem",
      alineas: [
        "Vernast livre à Scherpenheuvel-Zichem et dans les communes voisines comme Aarschot, Bekkevoort et Diest. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Pour un magasin, un bureau ou un local professionnel, l'utilisation du bâtiment compte autant que son volume. Indiquez quelles zones doivent rester accessibles et à quels moments les travaux ont lieu. Avec plusieurs pièces fermées, un dispositif réparti peut être nécessaire. Nous discutons à l'avance d'une réouverture prévue ; la mesure d'humidité détermine si la finition peut commencer.",
        "Une chape neuve et le plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été appliqué. Le dispositif de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou tout le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk170",
        waarom: "**Pour une pièce séparée ou une zone de séchage plus petite.** Discutez des dimensions, de la température et de la quantité d'humidité pour déterminer si cet appareil a une capacité suffisante.",
      },
      {
        key: "ttk350",
        waarom: "**Pour de grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et des matériaux humides. L'agencement de votre chantier détermine l'emplacement des appareils.",
      },
      {
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
      {
        key: "teddh30",
        waarom: "**Pour un chauffage d'appoint sur un chantier froid.** Ce chauffage électrique demande un raccordement 400 V adapté. Faites vérifier à l'avance si l'alimentation disponible correspond à la puissance de raccordement.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Scherpenheuvel-Zichem",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Scherpenheuvel-Zichem, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Scherpenheuvel-Zichem",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["aarschot", "bekkevoort", "diest", "laakdal", "tielt-winge"],
    faq: [
      {
        q: "Comment organiser une livraison à Scherpenheuvel-Zichem ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Scherpenheuvel-Zichem, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
      },
      {
        q: "De combien de déshumidificateurs ai-je besoin ?",
        a: "Cela dépend du volume, de l'agencement, du matériau et de la quantité d'humidité. Un étage ouvert demande un autre dispositif que plusieurs pièces fermées. Utilisez le calculateur pour votre pack et demandez conseil si votre situation est particulière, par exemple une pièce haute ou une humidité cachée.",
      },
      {
        q: "Comment savoir si le sol ou le mur est assez sec ?",
        a: "La durée de location seule ne donne aucune certitude à ce sujet. Faites contrôler l'humidité résiduelle avec une méthode adaptée au matériau. Votre poseur de sol ou votre peintre détermine quelle valeur d'humidité et quelle mesure complémentaire éventuelle sont nécessaires avant d'appliquer la finition choisie.",
      },
      {
        q: "Puis-je faire sécher un local professionnel pendant les travaux ?",
        a: "Discutez à l'avance des pièces qui restent en service, de l'alimentation électrique disponible et de votre planning. Nous adaptons l'installation en conséquence. Un grand espace ouvert demande une autre répartition que plusieurs pièces fermées ; la surface au sol totale ne suffit donc pas, à elle seule, pour vous conseiller.",
      },
      {
        q: "De quelle alimentation électrique ai-je besoin ?",
        a: "La puissance de raccordement varie selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW nécessitent une alimentation 400 V adaptée. En cas de doute, faites contrôler la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Scherpenheuvel-Zichem ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  bekkevoort: {
    slug: "bekkevoort",
    title: "Déshumidificateur de chantier à Bekkevoort | Vernast",
    description:
      "Votre chantier à Bekkevoort doit sécher ? Pack de séchage Vernast avec livraison, installation et reprise des déshumidificateurs. Prix calculé en ligne.",
    h1: "Location de déshumidificateur à Bekkevoort",
    kicker: "Bekkevoort · livraison sur votre chantier",
    rit: { afstand: "environ 55 km", tijd: "environ cinquante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Bekkevoort pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Bekkevoort",
      alineas: [
        "Vernast livre à Bekkevoort et dans les communes voisines comme Scherpenheuvel-Zichem, Diest et Tielt-Winge. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une chape neuve et le plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été appliqué. Le dispositif de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou tout le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk350",
        waarom: "**Pour de grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et des matériaux humides. L'agencement de votre chantier détermine l'emplacement des appareils.",
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
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Bekkevoort",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Bekkevoort, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Bekkevoort",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["scherpenheuvel-zichem", "diest", "tielt-winge", "glabbeek", "kortenaken"],
    faq: [
      {
        q: "Comment organiser une livraison à Bekkevoort ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Bekkevoort, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
      },
      {
        q: "De combien de déshumidificateurs ai-je besoin ?",
        a: "Cela dépend du volume, de l'agencement, du matériau et de la quantité d'humidité. Un étage ouvert demande un autre dispositif que plusieurs pièces fermées. Utilisez le calculateur pour votre pack et demandez conseil si votre situation est particulière, par exemple une pièce haute ou une humidité cachée.",
      },
      {
        q: "Comment savoir si le sol ou le mur est assez sec ?",
        a: "La durée de location seule ne donne aucune certitude à ce sujet. Faites contrôler l'humidité résiduelle avec une méthode adaptée au matériau. Votre poseur de sol ou votre peintre détermine quelle valeur d'humidité et quelle mesure complémentaire éventuelle sont nécessaires avant d'appliquer la finition choisie.",
      },
      {
        q: "Un déshumidificateur résout-il un problème d'humidité persistant ?",
        a: "Un déshumidificateur aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou une barrière d'étanchéité manquante. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que le déshumidificateur fonctionne.",
      },
      {
        q: "De quelle alimentation électrique ai-je besoin ?",
        a: "La puissance de raccordement varie selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW nécessitent une alimentation 400 V adaptée. En cas de doute, faites contrôler la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Bekkevoort ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  diest: {
    slug: "diest",
    title: "Déshumidificateur à Diest, livré et installé | Vernast",
    description:
      "Louez un déshumidificateur de chantier à Diest chez Vernast. Livraison, installation et reprise comprises dans votre pack de séchage. Prix calculé en ligne.",
    h1: "Location de déshumidificateur à Diest",
    kicker: "Diest · livraison sur votre chantier",
    rit: { afstand: "environ 58 km", tijd: "environ cinquante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Diest pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Diest",
      alineas: [
        "Vernast livre à Diest et dans les communes voisines comme Bekkevoort, Scherpenheuvel-Zichem et Kortenaken. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une chape neuve et le plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été appliqué. Le dispositif de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche supérieure sèche ne signifie pas automatiquement que tout le sol ou tout le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "revolution",
        waarom: "**Pour un dispositif de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttk350",
        waarom: "**Pour de grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et des matériaux humides. L'agencement de votre chantier détermine l'emplacement des appareils.",
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
      kop: "Livraison et installation à Diest",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Diest, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Diest",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["bekkevoort", "scherpenheuvel-zichem", "kortenaken", "geetbets"],
    faq: [
      {
        q: "Comment organiser une livraison à Diest ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Diest, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
      },
      {
        q: "De combien de déshumidificateurs ai-je besoin ?",
        a: "Cela dépend du volume, de l'agencement, du matériau et de la quantité d'humidité. Un étage ouvert demande un autre dispositif que plusieurs pièces fermées. Utilisez le calculateur pour votre pack et demandez conseil si votre situation est particulière, par exemple une pièce haute ou une humidité cachée.",
      },
      {
        q: "Comment savoir si le sol ou le mur est assez sec ?",
        a: "La durée de location seule ne donne aucune certitude à ce sujet. Faites contrôler l'humidité résiduelle avec une méthode adaptée au matériau. Votre poseur de sol ou votre peintre détermine quelle valeur d'humidité et quelle mesure complémentaire éventuelle sont nécessaires avant d'appliquer la finition choisie.",
      },
      {
        q: "Un déshumidificateur résout-il un problème d'humidité persistant ?",
        a: "Un déshumidificateur aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou une barrière d'étanchéité manquante. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que le déshumidificateur fonctionne.",
      },
      {
        q: "De quelle alimentation électrique ai-je besoin ?",
        a: "La puissance de raccordement varie selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW nécessitent une alimentation 400 V adaptée. En cas de doute, faites contrôler la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Diest ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
};
