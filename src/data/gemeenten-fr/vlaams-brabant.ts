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

  glabbeek: {
    slug: "glabbeek",
    title: "Louer un déshumidificateur de chantier à Glabbeek | Vernast",
    description:
      "Location de déshumidificateur à Glabbeek : pack de séchage avec livraison, installation et reprise. Pour construction neuve, rénovation et dégâts des eaux.",
    h1: "Location de déshumidificateur à Glabbeek",
    kicker: "Glabbeek · livraison sur votre chantier",
    rit: { afstand: "environ 58 km", tijd: "environ cinquante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Glabbeek pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Glabbeek",
      alineas: [
        "Vernast livre à Glabbeek et dans les communes voisines comme Tielt-Winge, Bekkevoort et Kortenaken. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
      {
        key: "revolution",
        waarom: "**Pour un dispositif de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Glabbeek",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Glabbeek, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Glabbeek",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["tielt-winge", "bekkevoort", "kortenaken", "boutersem", "tienen"],
    faq: [
      {
        q: "Comment organiser une livraison à Glabbeek ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Glabbeek, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Glabbeek ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  kortenaken: {
    slug: "kortenaken",
    title: "Location de déshumidificateur à Kortenaken | Vernast",
    description:
      "Besoin d'un déshumidificateur de chantier à Kortenaken ? Calculez votre pack de séchage en ligne, livraison, installation et reprise comprises.",
    h1: "Location de déshumidificateur à Kortenaken",
    kicker: "Kortenaken · livraison sur votre chantier",
    rit: { afstand: "environ 62 km", tijd: "environ cinquante-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Kortenaken pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Kortenaken",
      alineas: [
        "Vernast livre à Kortenaken et dans les communes voisines comme Glabbeek, Bekkevoort et Diest. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
      kop: "Livraison et installation à Kortenaken",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Kortenaken, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Kortenaken",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["glabbeek", "bekkevoort", "diest", "geetbets", "zoutleeuw", "linter"],
    faq: [
      {
        q: "Comment organiser une livraison à Kortenaken ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Kortenaken, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Kortenaken ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  geetbets: {
    slug: "geetbets",
    title: "Location de déshumidificateur à Geetbets | Vernast",
    description:
      "Vernast loue des déshumidificateurs de chantier à Geetbets : livraison, installation et reprise comprises, ou enlèvement sur rendez-vous à Aartselaar.",
    h1: "Location de déshumidificateur à Geetbets",
    kicker: "Geetbets · livraison sur votre chantier",
    rit: { afstand: "environ 65 km", tijd: "environ cinquante-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Geetbets pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Geetbets",
      alineas: [
        "Vernast livre à Geetbets et dans les communes voisines comme Kortenaken, Léau et Diest. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "revolution",
        waarom: "**Pour un dispositif de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Geetbets",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Geetbets, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Geetbets",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["kortenaken", "zoutleeuw", "diest"],
    faq: [
      {
        q: "Comment organiser une livraison à Geetbets ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Geetbets, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Geetbets ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  boortmeerbeek: {
    slug: "boortmeerbeek",
    title: "Déshumidificateurs de chantier à Boortmeerbeek | Vernast",
    description:
      "Location de déshumidificateur à Boortmeerbeek : pack de séchage avec livraison, installation et reprise. Pour construction neuve, rénovation et dégâts des eaux.",
    h1: "Location de déshumidificateur à Boortmeerbeek",
    kicker: "Boortmeerbeek · livraison sur votre chantier",
    rit: { afstand: "environ 37 km", tijd: "environ trente-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Boortmeerbeek pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Boortmeerbeek",
      alineas: [
        "Vernast livre à Boortmeerbeek et dans les communes voisines comme Haacht, Zemst et Keerbergen. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "revolution",
        waarom: "**Pour un dispositif de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air à côté du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Boortmeerbeek",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Boortmeerbeek, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Boortmeerbeek",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["haacht", "zemst", "keerbergen", "kampenhout", "mechelen"],
    faq: [
      {
        q: "Comment organiser une livraison à Boortmeerbeek ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Boortmeerbeek, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Boortmeerbeek ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  keerbergen: {
    slug: "keerbergen",
    title: "Déshumidificateur de chantier à louer à Keerbergen | Vernast",
    description:
      "Location de déshumidificateur à Keerbergen : pack de séchage avec livraison, installation et reprise. Pour construction neuve, rénovation et dégâts des eaux.",
    h1: "Location de déshumidificateur à Keerbergen",
    kicker: "Keerbergen · livraison sur votre chantier",
    rit: { afstand: "environ 35 km", tijd: "environ trente-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Keerbergen pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Keerbergen",
      alineas: [
        "Vernast livre à Keerbergen et dans les communes voisines comme Tremelo, Boortmeerbeek et Haacht. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
      kop: "Livraison et installation à Keerbergen",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Keerbergen, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Keerbergen",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["tremelo", "boortmeerbeek", "haacht", "putte", "begijnendijk"],
    faq: [
      {
        q: "Comment organiser une livraison à Keerbergen ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Keerbergen, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Keerbergen ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  begijnendijk: {
    slug: "begijnendijk",
    title: "Déshumidificateurs de chantier à Begijnendijk | Vernast",
    description:
      "Séchez votre chantier à Begijnendijk avec un pack de séchage Vernast : déshumidificateurs livrés, installés et repris. Calculez votre prix de location en ligne.",
    h1: "Location de déshumidificateur à Begijnendijk",
    kicker: "Begijnendijk · livraison sur votre chantier",
    rit: { afstand: "environ 35 km", tijd: "environ trente-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Begijnendijk pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Begijnendijk",
      alineas: [
        "Vernast livre à Begijnendijk et dans les communes voisines comme Tremelo, Aarschot et Heist-op-den-Berg. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "revolution",
        waarom: "**Pour un dispositif de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "teddh30",
        waarom: "**Pour un chauffage d'appoint sur un chantier froid.** Ce chauffage électrique demande un raccordement 400 V adapté. Faites vérifier à l'avance si l'alimentation disponible correspond à la puissance de raccordement.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Begijnendijk",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Begijnendijk, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Begijnendijk",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["tremelo", "aarschot", "heist-op-den-berg", "keerbergen", "rotselaar"],
    faq: [
      {
        q: "Comment organiser une livraison à Begijnendijk ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Begijnendijk, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Begijnendijk ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  tremelo: {
    slug: "tremelo",
    title: "Déshumidificateurs de chantier à Tremelo | Vernast",
    description:
      "Déshumidificateurs de chantier à Tremelo pour le neuf, la rénovation ou les dégâts des eaux. Vernast livre, installe et reprend les appareils de votre pack.",
    h1: "Location de déshumidificateur à Tremelo",
    kicker: "Tremelo · livraison sur votre chantier",
    rit: { afstand: "environ 38 km", tijd: "environ trente-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Tremelo pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Tremelo",
      alineas: [
        "Vernast livre à Tremelo et dans les communes voisines comme Keerbergen, Begijnendijk et Haacht. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "teddh30",
        waarom: "**Pour un chauffage d'appoint sur un chantier froid.** Ce chauffage électrique demande un raccordement 400 V adapté. Faites vérifier à l'avance si l'alimentation disponible correspond à la puissance de raccordement.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air à côté du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Tremelo",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Tremelo, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Tremelo",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["keerbergen", "begijnendijk", "haacht", "rotselaar", "putte"],
    faq: [
      {
        q: "Comment organiser une livraison à Tremelo ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Tremelo, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Tremelo ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  haacht: {
    slug: "haacht",
    title: "Déshumidificateur à Haacht, livré et installé | Vernast",
    description:
      "Votre chantier à Haacht doit sécher ? Pack de séchage Vernast avec livraison, installation et reprise des déshumidificateurs. Prix calculé en ligne.",
    h1: "Location de déshumidificateur à Haacht",
    kicker: "Haacht · livraison sur votre chantier",
    rit: { afstand: "environ 40 km", tijd: "environ quarante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Haacht pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Haacht",
      alineas: [
        "Vernast livre à Haacht et dans les communes voisines comme Boortmeerbeek, Keerbergen et Tremelo. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "revolution",
        waarom: "**Pour un dispositif de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air à côté du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Haacht",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Haacht, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Haacht",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["boortmeerbeek", "keerbergen", "tremelo", "rotselaar", "kampenhout", "herent"],
    faq: [
      {
        q: "Comment organiser une livraison à Haacht ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Haacht, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Haacht ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  rotselaar: {
    slug: "rotselaar",
    title: "Déshumidificateur de chantier à Rotselaar | Vernast",
    description:
      "Louez un déshumidificateur de chantier à Rotselaar chez Vernast. Livraison, installation et reprise comprises dans votre pack de séchage. Prix calculé en ligne.",
    h1: "Location de déshumidificateur à Rotselaar",
    kicker: "Rotselaar · livraison sur votre chantier",
    rit: { afstand: "environ 45 km", tijd: "environ quarante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Rotselaar pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Rotselaar",
      alineas: [
        "Vernast livre à Rotselaar et dans les communes voisines comme Haacht, Tremelo et Begijnendijk. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
      kop: "Livraison et installation à Rotselaar",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Rotselaar, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Rotselaar",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["haacht", "tremelo", "begijnendijk", "aarschot", "holsbeek"],
    faq: [
      {
        q: "Comment organiser une livraison à Rotselaar ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Rotselaar, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Rotselaar ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  holsbeek: {
    slug: "holsbeek",
    title: "Déshumidificateur à Holsbeek, livré et installé | Vernast",
    description:
      "Location de déshumidificateur à Holsbeek : pack de séchage avec livraison, installation et reprise. Pour construction neuve, rénovation et dégâts des eaux.",
    h1: "Location de déshumidificateur à Holsbeek",
    kicker: "Holsbeek · livraison sur votre chantier",
    rit: { afstand: "environ 50 km", tijd: "environ quarante-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Holsbeek pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Holsbeek",
      alineas: [
        "Vernast livre à Holsbeek et dans les communes voisines comme Louvain, Lubbeek et Rotselaar. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "ttk350",
        waarom: "**Pour de grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et des matériaux humides. L'agencement de votre chantier détermine l'emplacement des appareils.",
      },
      {
        key: "revolution",
        waarom: "**Pour un dispositif de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Holsbeek",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Holsbeek, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Holsbeek",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["leuven", "lubbeek", "rotselaar", "herent", "tielt-winge", "aarschot"],
    faq: [
      {
        q: "Comment organiser une livraison à Holsbeek ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Holsbeek, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Holsbeek ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  herent: {
    slug: "herent",
    title: "Louer un déshumidificateur de chantier à Herent | Vernast",
    description:
      "Besoin d'un déshumidificateur de chantier à Herent ? Calculez votre pack de séchage en ligne, livraison, installation et reprise comprises.",
    h1: "Location de déshumidificateur à Herent",
    kicker: "Herent · livraison sur votre chantier",
    rit: { afstand: "environ 48 km", tijd: "environ quarante-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Herent pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Herent",
      alineas: [
        "Vernast livre à Herent et dans les communes voisines comme Louvain, Bertem et Kortenberg. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "ttk170",
        waarom: "**Pour une pièce séparée ou une zone de séchage plus petite.** Discutez des dimensions, de la température et de la quantité d'humidité pour déterminer si cet appareil a une capacité suffisante.",
      },
      {
        key: "teddh30",
        waarom: "**Pour un chauffage d'appoint sur un chantier froid.** Ce chauffage électrique demande un raccordement 400 V adapté. Faites vérifier à l'avance si l'alimentation disponible correspond à la puissance de raccordement.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Herent",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Herent, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Herent",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["leuven", "bertem", "kortenberg", "haacht", "holsbeek"],
    faq: [
      {
        q: "Comment organiser une livraison à Herent ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Herent, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Herent ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  bertem: {
    slug: "bertem",
    title: "Déshumidificateur de chantier à Bertem : location | Vernast",
    description:
      "Vernast loue des déshumidificateurs de chantier à Bertem : livraison, installation et reprise comprises, ou enlèvement sur rendez-vous à Aartselaar.",
    h1: "Location de déshumidificateur à Bertem",
    kicker: "Bertem · livraison sur votre chantier",
    rit: { afstand: "environ 52 km", tijd: "environ quarante-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Bertem pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Bertem",
      alineas: [
        "Vernast livre à Bertem et dans les communes voisines comme Louvain, Herent et Tervuren. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "revolution",
        waarom: "**Pour un dispositif de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air à côté du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Bertem",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Bertem, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Bertem",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["leuven", "herent", "tervuren", "oud-heverlee", "kortenberg"],
    faq: [
      {
        q: "Comment organiser une livraison à Bertem ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Bertem, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Bertem ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  "oud-heverlee": {
    slug: "oud-heverlee",
    title: "Location de déshumidificateur à Oud-Heverlee | Vernast",
    description:
      "Location de déshumidificateur à Oud-Heverlee : pack de séchage avec livraison, installation et reprise. Pour construction neuve, rénovation et dégâts des eaux.",
    h1: "Location de déshumidificateur à Oud-Heverlee",
    kicker: "Oud-Heverlee · livraison sur votre chantier",
    rit: { afstand: "environ 55 km", tijd: "environ cinquante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Oud-Heverlee pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Oud-Heverlee",
      alineas: [
        "Vernast livre à Oud-Heverlee et dans les communes voisines comme Louvain, Bertem et Huldenberg. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Oud-Heverlee",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Oud-Heverlee, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Oud-Heverlee",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["leuven", "bertem", "huldenberg", "bierbeek"],
    faq: [
      {
        q: "Comment organiser une livraison à Oud-Heverlee ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Oud-Heverlee, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Oud-Heverlee ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  huldenberg: {
    slug: "huldenberg",
    title: "Déshumidificateur de chantier à louer à Huldenberg | Vernast",
    description:
      "Location de déshumidificateur à Huldenberg : pack de séchage avec livraison, installation et reprise. Pour construction neuve, rénovation et dégâts des eaux.",
    h1: "Location de déshumidificateur à Huldenberg",
    kicker: "Huldenberg · livraison sur votre chantier",
    rit: { afstand: "environ 57 km", tijd: "environ cinquante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Huldenberg pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Huldenberg",
      alineas: [
        "Vernast livre à Huldenberg et dans les communes voisines comme Oud-Heverlee, Overijse et Tervuren. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Huldenberg",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Huldenberg, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Huldenberg",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["oud-heverlee", "overijse", "tervuren", "bierbeek"],
    faq: [
      {
        q: "Comment organiser une livraison à Huldenberg ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Huldenberg, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Huldenberg ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  bierbeek: {
    slug: "bierbeek",
    title: "Déshumidificateur de chantier à louer à Bierbeek | Vernast",
    description:
      "Séchez votre chantier à Bierbeek avec un pack de séchage Vernast : déshumidificateurs livrés, installés et repris. Calculez votre prix de location en ligne.",
    h1: "Location de déshumidificateur à Bierbeek",
    kicker: "Bierbeek · livraison sur votre chantier",
    rit: { afstand: "environ 57 km", tijd: "environ cinquante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Bierbeek pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Bierbeek",
      alineas: [
        "Vernast livre à Bierbeek et dans les communes voisines comme Louvain, Oud-Heverlee et Boutersem. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "ttk170",
        waarom: "**Pour une pièce séparée ou une zone de séchage plus petite.** Discutez des dimensions, de la température et de la quantité d'humidité pour déterminer si cet appareil a une capacité suffisante.",
      },
      {
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Bierbeek",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Bierbeek, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Bierbeek",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["leuven", "oud-heverlee", "boutersem", "huldenberg", "lubbeek"],
    faq: [
      {
        q: "Comment organiser une livraison à Bierbeek ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Bierbeek, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Bierbeek ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  boutersem: {
    slug: "boutersem",
    title: "Déshumidificateur de chantier à louer à Boutersem | Vernast",
    description:
      "Déshumidificateurs de chantier à Boutersem pour le neuf, la rénovation ou les dégâts des eaux. Vernast livre, installe et reprend les appareils de votre pack.",
    h1: "Location de déshumidificateur à Boutersem",
    kicker: "Boutersem · livraison sur votre chantier",
    rit: { afstand: "environ 60 km", tijd: "environ cinquante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Boutersem pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Boutersem",
      alineas: [
        "Vernast livre à Boutersem et dans les communes voisines comme Bierbeek, Lubbeek et Tirlemont. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
      {
        key: "revolution",
        waarom: "**Pour un dispositif de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Boutersem",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Boutersem, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Boutersem",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["bierbeek", "lubbeek", "tienen", "hoegaarden", "glabbeek"],
    faq: [
      {
        q: "Comment organiser une livraison à Boutersem ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Boutersem, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Boutersem ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  lubbeek: {
    slug: "lubbeek",
    title: "Déshumidificateurs de chantier à Lubbeek | Vernast",
    description:
      "Votre chantier à Lubbeek doit sécher ? Pack de séchage Vernast avec livraison, installation et reprise des déshumidificateurs. Prix calculé en ligne.",
    h1: "Location de déshumidificateur à Lubbeek",
    kicker: "Lubbeek · livraison sur votre chantier",
    rit: { afstand: "environ 55 km", tijd: "environ cinquante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Lubbeek pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Lubbeek",
      alineas: [
        "Vernast livre à Lubbeek et dans les communes voisines comme Louvain, Holsbeek et Bierbeek. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "revolution",
        waarom: "**Pour un dispositif de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air à côté du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Lubbeek",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Lubbeek, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Lubbeek",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["leuven", "holsbeek", "bierbeek", "boutersem", "tielt-winge"],
    faq: [
      {
        q: "Comment organiser une livraison à Lubbeek ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Lubbeek, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Lubbeek ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  londerzeel: {
    slug: "londerzeel",
    title: "Déshumidificateur de chantier à Londerzeel | Vernast",
    description:
      "Location de déshumidificateur à Londerzeel : pack de séchage avec livraison, installation et reprise. Pour construction neuve, rénovation et dégâts des eaux.",
    h1: "Location de déshumidificateur à Londerzeel",
    kicker: "Londerzeel · livraison sur votre chantier",
    rit: { afstand: "environ 25 km", tijd: "environ vingt-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Londerzeel pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Londerzeel",
      alineas: [
        "Vernast livre à Londerzeel et dans les communes voisines comme Kapelle-op-den-Bos, Merchtem et Meise. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
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
      kop: "Livraison et installation à Londerzeel",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Londerzeel, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Londerzeel",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["kapelle-op-den-bos", "merchtem", "meise", "puurs-sint-amands", "buggenhout"],
    faq: [
      {
        q: "Comment organiser une livraison à Londerzeel ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Londerzeel, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Londerzeel ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  "kapelle-op-den-bos": {
    slug: "kapelle-op-den-bos",
    title: "Déshumidificateur de chantier à Kapelle-op-den-Bos | Vernast",
    description:
      "Besoin d'un déshumidificateur de chantier à Kapelle-op-den-Bos ? Calculez votre pack de séchage en ligne, livraison, installation et reprise comprises.",
    h1: "Location de déshumidificateur à Kapelle-op-den-Bos",
    kicker: "Kapelle-op-den-Bos · livraison sur votre chantier",
    rit: { afstand: "environ 25 km", tijd: "environ vingt-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Kapelle-op-den-Bos pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Kapelle-op-den-Bos",
      alineas: [
        "Vernast livre à Kapelle-op-den-Bos et dans les communes voisines comme Londerzeel, Willebroek et Meise. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "revolution",
        waarom: "**Pour un dispositif de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttk170",
        waarom: "**Pour une pièce séparée ou une zone de séchage plus petite.** Discutez des dimensions, de la température et de la quantité d'humidité pour déterminer si cet appareil a une capacité suffisante.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Kapelle-op-den-Bos",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Kapelle-op-den-Bos, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Kapelle-op-den-Bos",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["londerzeel", "willebroek", "meise", "grimbergen", "zemst"],
    faq: [
      {
        q: "Comment organiser une livraison à Kapelle-op-den-Bos ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Kapelle-op-den-Bos, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Kapelle-op-den-Bos ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  merchtem: {
    slug: "merchtem",
    title: "Déshumidificateur à Merchtem, livré et installé | Vernast",
    description:
      "Besoin d'un déshumidificateur de chantier à Merchtem ? Calculez votre pack de séchage en ligne, livraison, installation et reprise comprises.",
    h1: "Location de déshumidificateur à Merchtem",
    kicker: "Merchtem · livraison sur votre chantier",
    rit: { afstand: "environ 32 km", tijd: "environ trente-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Merchtem pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Merchtem",
      alineas: [
        "Vernast livre à Merchtem et dans les communes voisines comme Asse, Londerzeel et Opwijk. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
      {
        key: "teddh30",
        waarom: "**Pour un chauffage d'appoint sur un chantier froid.** Ce chauffage électrique demande un raccordement 400 V adapté. Faites vérifier à l'avance si l'alimentation disponible correspond à la puissance de raccordement.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Merchtem",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Merchtem, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Merchtem",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["asse", "londerzeel", "opwijk", "wemmel", "meise"],
    faq: [
      {
        q: "Comment organiser une livraison à Merchtem ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Merchtem, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Merchtem ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  opwijk: {
    slug: "opwijk",
    title: "Louer un déshumidificateur de chantier à Opwijk | Vernast",
    description:
      "Vernast loue des déshumidificateurs de chantier à Opwijk : livraison, installation et reprise comprises, ou enlèvement sur rendez-vous à Aartselaar.",
    h1: "Location de déshumidificateur à Opwijk",
    kicker: "Opwijk · livraison sur votre chantier",
    rit: { afstand: "environ 35 km", tijd: "environ trente-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Opwijk pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Opwijk",
      alineas: [
        "Vernast livre à Opwijk et dans les communes voisines comme Merchtem, Asse et Affligem. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Opwijk",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Opwijk, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Opwijk",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["merchtem", "asse", "affligem", "lebbeke", "buggenhout"],
    faq: [
      {
        q: "Comment organiser une livraison à Opwijk ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Opwijk, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Opwijk ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  affligem: {
    slug: "affligem",
    title: "Location de déshumidificateur à Affligem | Vernast",
    description:
      "Déshumidificateur à Affligem : calculez votre pack de séchage Vernast en ligne. Livraison, installation et reprise comprises. Conseils pour neuf et rénovation.",
    h1: "Location de déshumidificateur à Affligem",
    kicker: "Affligem · livraison sur votre chantier",
    rit: { afstand: "environ 42 km", tijd: "environ quarante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Affligem pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Affligem",
      alineas: [
        "Vernast livre à Affligem et dans les communes voisines comme Opwijk, Ternat et Liedekerke. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
      {
        key: "teddh30",
        waarom: "**Pour un chauffage d'appoint sur un chantier froid.** Ce chauffage électrique demande un raccordement 400 V adapté. Faites vérifier à l'avance si l'alimentation disponible correspond à la puissance de raccordement.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Affligem",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Affligem, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Affligem",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["opwijk", "ternat", "liedekerke", "aalst", "asse"],
    faq: [
      {
        q: "Comment organiser une livraison à Affligem ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Affligem, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Affligem ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  pepingen: {
    slug: "pepingen",
    title: "Location de déshumidificateur à Pepingen | Vernast",
    description:
      "Chape, plafonnage ou dégâts des eaux à Pepingen ? Vernast livre et installe vos déshumidificateurs de chantier, reprise comprise. Calculez votre pack en ligne.",
    h1: "Location de déshumidificateur à Pepingen",
    kicker: "Pepingen · livraison sur votre chantier",
    rit: { afstand: "environ 50 km", tijd: "environ quarante-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Pepingen pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Pepingen",
      alineas: [
        "Vernast livre à Pepingen et dans les communes voisines comme Lennik, Hal et Pajottegem. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "revolution",
        waarom: "**Pour un dispositif de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Pepingen",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Pepingen, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Pepingen",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["lennik", "halle", "pajottegem", "sint-pieters-leeuw"],
    faq: [
      {
        q: "Comment organiser une livraison à Pepingen ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Pepingen, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Pepingen ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  pajottegem: {
    slug: "pajottegem",
    title: "Déshumidificateur de chantier à louer à Pajottegem | Vernast",
    description:
      "Séchez votre chantier à Pajottegem avec un pack de séchage Vernast : déshumidificateurs livrés, installés et repris. Calculez votre prix de location en ligne.",
    h1: "Location de déshumidificateur à Pajottegem",
    kicker: "Pajottegem · livraison sur votre chantier",
    rit: { afstand: "environ 57 km", tijd: "environ cinquante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Pajottegem pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Pajottegem",
      alineas: [
        "Vernast livre à Pajottegem et dans les communes voisines comme Pepingen, Lennik et Roosdaal. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
      kop: "Livraison et installation à Pajottegem",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Pajottegem, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Pajottegem",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["pepingen", "lennik", "roosdaal", "bever", "geraardsbergen"],
    faq: [
      {
        q: "Comment organiser une livraison à Pajottegem ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Pajottegem, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Pajottegem ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  bever: {
    slug: "bever",
    title: "Déshumidificateur de chantier à louer à Biévène | Vernast",
    description:
      "Déshumidificateurs de chantier à Biévène pour le neuf, la rénovation ou les dégâts des eaux. Vernast livre, installe et reprend les appareils de votre pack.",
    h1: "Location de déshumidificateur à Biévène",
    kicker: "Biévène · livraison sur votre chantier",
    rit: { afstand: "environ 60 km", tijd: "environ cinquante-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Biévène pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Biévène",
      alineas: [
        "Vernast livre à Biévène et dans les communes voisines comme Pajottegem, Pepingen et Grammont. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
      kop: "Livraison et installation à Biévène",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Biévène, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Biévène",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["pajottegem", "pepingen", "geraardsbergen"],
    faq: [
      {
        q: "Comment organiser une livraison à Biévène ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Biévène, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Biévène ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  asse: {
    slug: "asse",
    title: "Déshumidificateur de chantier à louer à Asse | Vernast",
    description:
      "Votre chantier à Asse doit sécher ? Pack de séchage Vernast avec livraison, installation et reprise des déshumidificateurs. Prix calculé en ligne.",
    h1: "Location de déshumidificateur à Asse",
    kicker: "Asse · livraison sur votre chantier",
    rit: { afstand: "environ 35 km", tijd: "environ trente-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Asse pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Asse",
      alineas: [
        "Vernast livre à Asse et dans les communes voisines comme Ternat, Merchtem et Dilbeek. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
      {
        key: "teddh30",
        waarom: "**Pour un chauffage d'appoint sur un chantier froid.** Ce chauffage électrique demande un raccordement 400 V adapté. Faites vérifier à l'avance si l'alimentation disponible correspond à la puissance de raccordement.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Asse",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Asse, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Asse",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["ternat", "merchtem", "dilbeek", "opwijk", "wemmel"],
    faq: [
      {
        q: "Comment organiser une livraison à Asse ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Asse, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Asse ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  ternat: {
    slug: "ternat",
    title: "Déshumidificateur à Ternat, livré et installé | Vernast",
    description:
      "Louez un déshumidificateur de chantier à Ternat chez Vernast. Livraison, installation et reprise comprises dans votre pack de séchage. Prix calculé en ligne.",
    h1: "Location de déshumidificateur à Ternat",
    kicker: "Ternat · livraison sur votre chantier",
    rit: { afstand: "environ 40 km", tijd: "environ quarante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Ternat pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Ternat",
      alineas: [
        "Vernast livre à Ternat et dans les communes voisines comme Asse, Dilbeek et Liedekerke. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
      {
        key: "teddh30",
        waarom: "**Pour un chauffage d'appoint sur un chantier froid.** Ce chauffage électrique demande un raccordement 400 V adapté. Faites vérifier à l'avance si l'alimentation disponible correspond à la puissance de raccordement.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Ternat",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Ternat, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Ternat",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["asse", "dilbeek", "liedekerke", "roosdaal", "affligem"],
    faq: [
      {
        q: "Comment organiser une livraison à Ternat ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Ternat, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Ternat ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  dilbeek: {
    slug: "dilbeek",
    title: "Déshumidificateur à Dilbeek, livré et installé | Vernast",
    description:
      "Location de déshumidificateur à Dilbeek : pack de séchage avec livraison, installation et reprise. Pour construction neuve, rénovation et dégâts des eaux.",
    h1: "Location de déshumidificateur à Dilbeek",
    kicker: "Dilbeek · livraison sur votre chantier",
    rit: { afstand: "environ 42 km", tijd: "environ quarante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Dilbeek pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Dilbeek",
      alineas: [
        "Vernast livre à Dilbeek et dans les communes voisines comme Asse, Ternat et Leeuw-Saint-Pierre. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "revolution",
        waarom: "**Pour un dispositif de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air à côté du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Dilbeek",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Dilbeek, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Dilbeek",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["asse", "ternat", "sint-pieters-leeuw", "lennik"],
    faq: [
      {
        q: "Comment organiser une livraison à Dilbeek ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Dilbeek, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Dilbeek ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  "sint-pieters-leeuw": {
    slug: "sint-pieters-leeuw",
    title: "Déshumidificateur de chantier à Leeuw-Saint-Pierre | Vernast",
    description:
      "Besoin d'un déshumidificateur de chantier à Leeuw-Saint-Pierre ? Calculez votre pack de séchage en ligne, livraison, installation et reprise comprises.",
    h1: "Location de déshumidificateur à Leeuw-Saint-Pierre",
    kicker: "Leeuw-Saint-Pierre · livraison sur votre chantier",
    rit: { afstand: "environ 43 km", tijd: "environ quarante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Leeuw-Saint-Pierre pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Leeuw-Saint-Pierre",
      alineas: [
        "Vernast livre à Leeuw-Saint-Pierre et dans les communes voisines comme Dilbeek, Beersel et Hal. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "revolution",
        waarom: "**Pour un dispositif de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air à côté du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Leeuw-Saint-Pierre",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Leeuw-Saint-Pierre, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Leeuw-Saint-Pierre",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["dilbeek", "beersel", "halle", "lennik", "drogenbos"],
    faq: [
      {
        q: "Comment organiser une livraison à Leeuw-Saint-Pierre ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Leeuw-Saint-Pierre, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Leeuw-Saint-Pierre ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  beersel: {
    slug: "beersel",
    title: "Déshumidificateur à Beersel, livré et installé | Vernast",
    description:
      "Vernast loue des déshumidificateurs de chantier à Beersel : livraison, installation et reprise comprises, ou enlèvement sur rendez-vous à Aartselaar.",
    h1: "Location de déshumidificateur à Beersel",
    kicker: "Beersel · livraison sur votre chantier",
    rit: { afstand: "environ 43 km", tijd: "environ quarante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Beersel pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Beersel",
      alineas: [
        "Vernast livre à Beersel et dans les communes voisines comme Leeuw-Saint-Pierre, Hal et Rhode-Saint-Genèse. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Beersel",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Beersel, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Beersel",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["sint-pieters-leeuw", "halle", "sint-genesius-rode", "linkebeek", "drogenbos"],
    faq: [
      {
        q: "Comment organiser une livraison à Beersel ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Beersel, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Beersel ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  liedekerke: {
    slug: "liedekerke",
    title: "Location de déshumidificateur à Liedekerke | Vernast",
    description:
      "Location de déshumidificateur à Liedekerke : pack de séchage avec livraison, installation et reprise. Pour construction neuve, rénovation et dégâts des eaux.",
    h1: "Location de déshumidificateur à Liedekerke",
    kicker: "Liedekerke · livraison sur votre chantier",
    rit: { afstand: "environ 43 km", tijd: "environ quarante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Liedekerke pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Liedekerke",
      alineas: [
        "Vernast livre à Liedekerke et dans les communes voisines comme Ternat, Roosdaal et Affligem. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
      kop: "Livraison et installation à Liedekerke",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Liedekerke, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Liedekerke",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["ternat", "roosdaal", "affligem", "denderleeuw", "asse"],
    faq: [
      {
        q: "Comment organiser une livraison à Liedekerke ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Liedekerke, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Liedekerke ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  lennik: {
    slug: "lennik",
    title: "Déshumidificateur de chantier à Lennik : location | Vernast",
    description:
      "Chape, plafonnage ou dégâts des eaux à Lennik ? Vernast livre et installe vos déshumidificateurs de chantier, reprise comprise. Calculez votre pack en ligne.",
    h1: "Location de déshumidificateur à Lennik",
    kicker: "Lennik · livraison sur votre chantier",
    rit: { afstand: "environ 47 km", tijd: "environ quarante-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Lennik pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Lennik",
      alineas: [
        "Vernast livre à Lennik et dans les communes voisines comme Dilbeek, Roosdaal et Pepingen. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
      {
        key: "revolution",
        waarom: "**Pour un dispositif de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Lennik",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Lennik, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Lennik",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["dilbeek", "roosdaal", "pepingen", "sint-pieters-leeuw", "pajottegem"],
    faq: [
      {
        q: "Comment organiser une livraison à Lennik ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Lennik, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Lennik ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  roosdaal: {
    slug: "roosdaal",
    title: "Location de déshumidificateur à Roosdaal | Vernast",
    description:
      "Séchez votre chantier à Roosdaal avec un pack de séchage Vernast : déshumidificateurs livrés, installés et repris. Calculez votre prix de location en ligne.",
    h1: "Location de déshumidificateur à Roosdaal",
    kicker: "Roosdaal · livraison sur votre chantier",
    rit: { afstand: "environ 47 km", tijd: "environ quarante-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Roosdaal pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Roosdaal",
      alineas: [
        "Vernast livre à Roosdaal et dans les communes voisines comme Lennik, Liedekerke et Ninove. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
      {
        key: "teddh30",
        waarom: "**Pour un chauffage d'appoint sur un chantier froid.** Ce chauffage électrique demande un raccordement 400 V adapté. Faites vérifier à l'avance si l'alimentation disponible correspond à la puissance de raccordement.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Roosdaal",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Roosdaal, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Roosdaal",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["lennik", "liedekerke", "ninove", "ternat", "pajottegem"],
    faq: [
      {
        q: "Comment organiser une livraison à Roosdaal ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Roosdaal, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Roosdaal ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  halle: {
    slug: "halle",
    title: "Séchage de chantier à Hal : déshumidificateurs | Vernast",
    description:
      "Déshumidificateurs de chantier à Hal pour le neuf, la rénovation ou les dégâts des eaux. Vernast livre, installe et reprend les appareils de votre pack.",
    h1: "Location de déshumidificateur à Hal",
    kicker: "Hal · livraison sur votre chantier",
    rit: { afstand: "environ 48 km", tijd: "environ quarante-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Hal pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Hal",
      alineas: [
        "Vernast livre à Hal et dans les communes voisines comme Beersel, Leeuw-Saint-Pierre et Pepingen. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Vous séchez un appartement ou un étage ? Précisez s'il y a un ascenseur ou un escalier fixe et quelle est la largeur de l'accès. L'espace disponible détermine en partie les appareils que nous pouvons installer. Dans un immeuble partagé, convenez à l'avance de qui ouvre la porte et de l'endroit où le matériel peut être déposé.",
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
      kop: "Livraison et installation à Hal",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Hal, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Hal",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["beersel", "sint-pieters-leeuw", "pepingen", "sint-genesius-rode"],
    faq: [
      {
        q: "Comment organiser une livraison à Hal ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Hal, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Hal ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  kortenberg: {
    slug: "kortenberg",
    title: "Déshumidificateur de chantier à louer à Kortenberg | Vernast",
    description:
      "Votre chantier à Kortenberg doit sécher ? Pack de séchage Vernast avec livraison, installation et reprise des déshumidificateurs. Prix calculé en ligne.",
    h1: "Location de déshumidificateur à Kortenberg",
    kicker: "Kortenberg · livraison sur votre chantier",
    rit: { afstand: "environ 45 km", tijd: "environ quarante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Kortenberg pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Kortenberg",
      alineas: [
        "Vernast livre à Kortenberg et dans les communes voisines comme Steenokkerzeel, Kampenhout et Zaventem. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
      {
        key: "teddh30",
        waarom: "**Pour un chauffage d'appoint sur un chantier froid.** Ce chauffage électrique demande un raccordement 400 V adapté. Faites vérifier à l'avance si l'alimentation disponible correspond à la puissance de raccordement.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Kortenberg",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Kortenberg, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Kortenberg",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["steenokkerzeel", "kampenhout", "zaventem", "bertem", "herent"],
    faq: [
      {
        q: "Comment organiser une livraison à Kortenberg ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Kortenberg, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Kortenberg ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  kraainem: {
    slug: "kraainem",
    title: "Déshumidificateur de chantier à louer à Kraainem | Vernast",
    description:
      "Louez un déshumidificateur de chantier à Kraainem chez Vernast. Livraison, installation et reprise comprises dans votre pack de séchage. Prix calculé en ligne.",
    h1: "Location de déshumidificateur à Kraainem",
    kicker: "Kraainem · livraison sur votre chantier",
    rit: { afstand: "environ 42 km", tijd: "environ quarante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Kraainem pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Kraainem",
      alineas: [
        "Vernast livre à Kraainem et dans les communes voisines comme Wezembeek-Oppem, Zaventem et Tervuren. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
      kop: "Livraison et installation à Kraainem",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Kraainem, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Kraainem",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["wezembeek-oppem", "zaventem", "tervuren"],
    faq: [
      {
        q: "Comment organiser une livraison à Kraainem ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Kraainem, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Kraainem ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  "wezembeek-oppem": {
    slug: "wezembeek-oppem",
    title: "Déshumidificateurs de chantier à Wezembeek-Oppem | Vernast",
    description:
      "Besoin d'un déshumidificateur de chantier à Wezembeek-Oppem ? Calculez votre pack de séchage en ligne, livraison, installation et reprise comprises.",
    h1: "Location de déshumidificateur à Wezembeek-Oppem",
    kicker: "Wezembeek-Oppem · livraison sur votre chantier",
    rit: { afstand: "environ 43 km", tijd: "environ quarante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Wezembeek-Oppem pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Wezembeek-Oppem",
      alineas: [
        "Vernast livre à Wezembeek-Oppem et dans les communes voisines comme Kraainem, Tervuren et Zaventem. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "revolution",
        waarom: "**Pour un dispositif de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air à côté du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Wezembeek-Oppem",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Wezembeek-Oppem, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Wezembeek-Oppem",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["kraainem", "tervuren", "zaventem"],
    faq: [
      {
        q: "Comment organiser une livraison à Wezembeek-Oppem ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Wezembeek-Oppem, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Wezembeek-Oppem ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  tervuren: {
    slug: "tervuren",
    title: "Déshumidificateur de chantier à Tervuren | Vernast",
    description:
      "Besoin d'un déshumidificateur de chantier à Tervuren ? Calculez votre pack de séchage en ligne, livraison, installation et reprise comprises.",
    h1: "Location de déshumidificateur à Tervuren",
    kicker: "Tervuren · livraison sur votre chantier",
    rit: { afstand: "environ 48 km", tijd: "environ quarante-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Tervuren pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Tervuren",
      alineas: [
        "Vernast livre à Tervuren et dans les communes voisines comme Wezembeek-Oppem, Overijse et Huldenberg. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "revolution",
        waarom: "**Pour un dispositif de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Tervuren",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Tervuren, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Tervuren",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["wezembeek-oppem", "overijse", "huldenberg", "bertem", "kraainem"],
    faq: [
      {
        q: "Comment organiser une livraison à Tervuren ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Tervuren, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Tervuren ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  hoeilaart: {
    slug: "hoeilaart",
    title: "Déshumidificateur de chantier à Hoeilaart | Vernast",
    description:
      "Vernast loue des déshumidificateurs de chantier à Hoeilaart : livraison, installation et reprise comprises, ou enlèvement sur rendez-vous à Aartselaar.",
    h1: "Location de déshumidificateur à Hoeilaart",
    kicker: "Hoeilaart · livraison sur votre chantier",
    rit: { afstand: "environ 50 km", tijd: "environ quarante-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Hoeilaart pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Hoeilaart",
      alineas: [
        "Vernast livre à Hoeilaart et dans les communes voisines comme Overijse, Rhode-Saint-Genèse et Tervuren. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Hoeilaart",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Hoeilaart, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Hoeilaart",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["overijse", "sint-genesius-rode", "tervuren", "linkebeek"],
    faq: [
      {
        q: "Comment organiser une livraison à Hoeilaart ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Hoeilaart, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Hoeilaart ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  overijse: {
    slug: "overijse",
    title: "Déshumidificateur à Overijse, livré et installé | Vernast",
    description:
      "Déshumidificateur à Overijse : calculez votre pack de séchage Vernast en ligne. Livraison, installation et reprise comprises. Conseils pour neuf et rénovation.",
    h1: "Location de déshumidificateur à Overijse",
    kicker: "Overijse · livraison sur votre chantier",
    rit: { afstand: "environ 52 km", tijd: "environ quarante-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Overijse pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Overijse",
      alineas: [
        "Vernast livre à Overijse et dans les communes voisines comme Hoeilaart, Tervuren et Huldenberg. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Overijse",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Overijse, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Overijse",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["hoeilaart", "tervuren", "huldenberg", "sint-genesius-rode"],
    faq: [
      {
        q: "Comment organiser une livraison à Overijse ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Overijse, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Overijse ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
};
