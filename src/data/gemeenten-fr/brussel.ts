import type { Gemeente } from "../gemeenten.js";

/**
 * De Franse teksten van de gemeentepagina's in deze provincie, gesleuteld op
 * de Nederlandse slug. Zie README.md in deze map voor de regels en hoe een
 * gemeente aangezet wordt (`aan/brussel.ts`).
 */
export const GEMEENTEN: Record<string, Gemeente> = {
  "brussel-stad": {
    slug: "brussel-stad",
    title: "Location de déshumidificateur à Bruxelles-Ville | Vernast",
    description:
      "Déshumidificateur à Bruxelles-Ville, Laeken ou Haren ? Pack de séchage Vernast avec livraison, installation et reprise, et conseils pour votre chantier.",
    h1: "Location de déshumidificateur à Bruxelles-Ville et dans le Pentagone",
    kicker: "Bruxelles · livraison sur votre chantier",
    rit: { afstand: "environ 45 km", tijd: "environ quarante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Bruxelles-Ville, Laeken, Haren ou Neder-Over-Heembeek ? Louez chez Vernast pour une construction neuve, une rénovation ou le séchage après des dégâts des eaux. **Votre pack de séchage comprend la livraison, l'installation et la reprise.** Calculez votre prix de location en ligne ou appelez-nous pour un conseil. Indiquez aussi dans votre demande l'étage et l'accès au bâtiment.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Bruxelles",
      alineas: [
        "Vernast livre à Bruxelles et dans les communes voisines comme Saint-Josse-ten-Noode, Schaerbeek et Saint-Gilles. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "revolution",
        waarom: "**Pour un dispositif de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air à côté du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Bruxelles",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Bruxelles, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Bruxelles",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["sint-joost-ten-node", "schaarbeek", "sint-gillis", "sint-jans-molenbeek", "elsene"],
    faq: [
      {
        q: "Comment organiser une livraison à Bruxelles ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Bruxelles, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Bruxelles ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  elsene: {
    slug: "elsene",
    title: "Louer un déshumidificateur à Ixelles (Elsene) | Vernast",
    description:
      "Louer un déshumidificateur à Ixelles ? Calculez votre pack de séchage Vernast, livraison, installation et reprise comprises. Neuf, rénovation, dégâts des eaux.",
    h1: "Location de déshumidificateur à Ixelles",
    kicker: "Ixelles · livraison sur votre chantier",
    rit: { afstand: "environ 48 km", tijd: "environ quarante-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Ixelles pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Ixelles",
      alineas: [
        "Vernast livre à Ixelles et dans les communes voisines comme Saint-Gilles, Bruxelles et Etterbeek. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
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
        key: "ttk350",
        waarom: "**Pour de grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et des matériaux humides. L'agencement de votre chantier détermine l'emplacement des appareils.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air à côté du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Ixelles",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Ixelles, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Ixelles",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["sint-gillis", "brussel-stad", "etterbeek", "watermaal-bosvoorde", "ukkel"],
    faq: [
      {
        q: "Comment organiser une livraison à Ixelles ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Ixelles, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Un déshumidificateur règle-t-il un problème d'humidité permanent ?",
        a: "Un déshumidificateur aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou une barrière contre l'humidité manquante. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que le déshumidificateur fonctionne.",
      },
      {
        q: "De quelle alimentation électrique ai-je besoin ?",
        a: "La puissance de raccordement varie selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW nécessitent une alimentation 400 V adaptée. En cas de doute, faites contrôler la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Ixelles ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  anderlecht: {
    slug: "anderlecht",
    title: "Location de déshumidificateur à Anderlecht | Vernast",
    description:
      "Un déshumidificateur à louer à Anderlecht ? Calculez votre pack de séchage Vernast, avec livraison, installation et reprise. Conseils pour neuf et rénovation.",
    h1: "Location de déshumidificateur à Anderlecht",
    kicker: "Anderlecht · livraison sur votre chantier",
    rit: { afstand: "environ 45 km", tijd: "environ quarante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Anderlecht pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Anderlecht",
      alineas: [
        "Vernast livre à Anderlecht et dans les communes voisines comme Molenbeek-Saint-Jean, Saint-Gilles et Forest. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Vous séchez un appartement ou un étage ? Précisez s'il y a un ascenseur ou un escalier fixe et quelle est la largeur de l'accès. L'espace disponible détermine en partie les appareils que nous pouvons installer. Dans un immeuble partagé, convenez à l'avance de qui ouvre la porte et de l'endroit où le matériel peut être déposé.",
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
        key: "ttk170",
        waarom: "**Pour une pièce séparée ou une zone de séchage plus petite.** Discutez des dimensions, de la température et de la quantité d'humidité pour déterminer si cet appareil a une capacité suffisante.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air à côté du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Anderlecht",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Anderlecht, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Anderlecht",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["sint-jans-molenbeek", "sint-gillis", "vorst", "koekelberg"],
    faq: [
      {
        q: "Comment organiser une livraison à Anderlecht ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Anderlecht, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Anderlecht ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  etterbeek: {
    slug: "etterbeek",
    title: "Déshumidificateur de chantier à louer à Etterbeek | Vernast",
    description:
      "Louer un déshumidificateur à Etterbeek ? Vernast livre, installe et reprend votre pack de séchage. Conseils pour neuf, rénovation et dégâts des eaux.",
    h1: "Location de déshumidificateur à Etterbeek",
    kicker: "Etterbeek · livraison sur votre chantier",
    rit: { afstand: "environ 48 km", tijd: "environ quarante-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Etterbeek pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Etterbeek",
      alineas: [
        "Vernast livre à Etterbeek et dans les communes voisines comme Ixelles, Bruxelles et Schaerbeek. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
      {
        key: "revolution",
        waarom: "**Pour un dispositif de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Etterbeek",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Etterbeek, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Etterbeek",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["elsene", "brussel-stad", "schaarbeek", "oudergem", "sint-lambrechts-woluwe"],
    faq: [
      {
        q: "Comment organiser une livraison à Etterbeek ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Etterbeek, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Etterbeek ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  evere: {
    slug: "evere",
    title: "Location de déshumidificateur de chantier à Evere | Vernast",
    description:
      "Déshumidificateur de chantier à Evere : calculez votre pack de séchage Vernast, livraison, installation et reprise comprises. Neuf, rénovation, dégâts des eaux.",
    h1: "Location de déshumidificateur à Evere",
    kicker: "Evere · livraison sur votre chantier",
    rit: { afstand: "environ 43 km", tijd: "environ quarante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Evere pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Evere",
      alineas: [
        "Vernast livre à Evere et dans les communes voisines comme Schaerbeek, Woluwe-Saint-Lambert et Bruxelles. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Vous séchez un appartement ou un étage ? Précisez s'il y a un ascenseur ou un escalier fixe et quelle est la largeur de l'accès. L'espace disponible détermine en partie les appareils que nous pouvons installer. Dans un immeuble partagé, convenez à l'avance de qui ouvre la porte et de l'endroit où le matériel peut être déposé.",
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
    ],
    levering: {
      kop: "Livraison et installation à Evere",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Evere, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Evere",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["schaarbeek", "sint-lambrechts-woluwe", "brussel-stad"],
    faq: [
      {
        q: "Comment organiser une livraison à Evere ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Evere, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Evere ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  ganshoren: {
    slug: "ganshoren",
    title: "Louer un déshumidificateur de chantier à Ganshoren | Vernast",
    description:
      "Besoin d'un déshumidificateur à Ganshoren ? Vernast compose votre pack de séchage avec livraison, installation et reprise, et vous conseille sur le dispositif.",
    h1: "Location de déshumidificateur à Ganshoren",
    kicker: "Ganshoren · livraison sur votre chantier",
    rit: { afstand: "environ 42 km", tijd: "environ quarante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Ganshoren pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Ganshoren",
      alineas: [
        "Vernast livre à Ganshoren et dans les communes voisines comme Koekelberg, Jette et Berchem-Sainte-Agathe. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "ttk170",
        waarom: "**Pour une pièce séparée ou une zone de séchage plus petite.** Discutez des dimensions, de la température et de la quantité d'humidité pour déterminer si cet appareil a une capacité suffisante.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air à côté du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Ganshoren",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Ganshoren, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Ganshoren",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["koekelberg", "jette", "sint-agatha-berchem", "sint-jans-molenbeek"],
    faq: [
      {
        q: "Comment organiser une livraison à Ganshoren ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Ganshoren, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Un déshumidificateur règle-t-il un problème d'humidité permanent ?",
        a: "Un déshumidificateur aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou une barrière contre l'humidité manquante. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que le déshumidificateur fonctionne.",
      },
      {
        q: "De quelle alimentation électrique ai-je besoin ?",
        a: "La puissance de raccordement varie selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW nécessitent une alimentation 400 V adaptée. En cas de doute, faites contrôler la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Ganshoren ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  jette: {
    slug: "jette",
    title: "Déshumidificateur de chantier en location à Jette | Vernast",
    description:
      "Louer un déshumidificateur à Jette pour une chape, un plafonnage ou des dégâts des eaux ? Pack de séchage Vernast avec livraison, installation et reprise.",
    h1: "Location de déshumidificateur à Jette",
    kicker: "Jette · livraison sur votre chantier",
    rit: { afstand: "environ 41 km", tijd: "environ trente-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Jette pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Jette",
      alineas: [
        "Vernast livre à Jette et dans les communes voisines comme Ganshoren, Koekelberg et Molenbeek-Saint-Jean. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Vous séchez un appartement ou un étage ? Précisez s'il y a un ascenseur ou un escalier fixe et quelle est la largeur de l'accès. L'espace disponible détermine en partie les appareils que nous pouvons installer. Dans un immeuble partagé, convenez à l'avance de qui ouvre la porte et de l'endroit où le matériel peut être déposé.",
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
    ],
    levering: {
      kop: "Livraison et installation à Jette",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Jette, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Jette",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["ganshoren", "koekelberg", "sint-jans-molenbeek", "brussel-stad"],
    faq: [
      {
        q: "Comment organiser une livraison à Jette ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Jette, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Jette ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  koekelberg: {
    slug: "koekelberg",
    title: "Déshumidificateur de chantier à Koekelberg | Vernast",
    description:
      "Un déshumidificateur de chantier à Koekelberg ? Calculez votre pack de séchage Vernast en ligne : livraison, installation et reprise sont comprises.",
    h1: "Location de déshumidificateur à Koekelberg",
    kicker: "Koekelberg · livraison sur votre chantier",
    rit: { afstand: "environ 43 km", tijd: "environ quarante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Koekelberg pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Koekelberg",
      alineas: [
        "Vernast livre à Koekelberg et dans les communes voisines comme Molenbeek-Saint-Jean, Ganshoren et Jette. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
      kop: "Livraison et installation à Koekelberg",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Koekelberg, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Koekelberg",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["sint-jans-molenbeek", "ganshoren", "jette", "anderlecht"],
    faq: [
      {
        q: "Comment organiser une livraison à Koekelberg ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Koekelberg, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Koekelberg ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  oudergem: {
    slug: "oudergem",
    title: "Location de déshumidificateur à Auderghem | Vernast",
    description:
      "Déshumidificateur à louer à Auderghem : pack de séchage Vernast livré, installé et repris. Conseils pour construction neuve, rénovation et dégâts des eaux.",
    h1: "Location de déshumidificateur à Auderghem",
    kicker: "Auderghem · livraison sur votre chantier",
    rit: { afstand: "environ 52 km", tijd: "environ quarante-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Auderghem pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Auderghem",
      alineas: [
        "Vernast livre à Auderghem et dans les communes voisines comme Watermael-Boitsfort, Etterbeek et Woluwe-Saint-Pierre. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Vous séchez un appartement ou un étage ? Précisez s'il y a un ascenseur ou un escalier fixe et quelle est la largeur de l'accès. L'espace disponible détermine en partie les appareils que nous pouvons installer. Dans un immeuble partagé, convenez à l'avance de qui ouvre la porte et de l'endroit où le matériel peut être déposé.",
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
        key: "ttk170",
        waarom: "**Pour une pièce séparée ou une zone de séchage plus petite.** Discutez des dimensions, de la température et de la quantité d'humidité pour déterminer si cet appareil a une capacité suffisante.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air à côté du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Auderghem",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Auderghem, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Auderghem",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["watermaal-bosvoorde", "etterbeek", "sint-pieters-woluwe", "elsene"],
    faq: [
      {
        q: "Comment organiser une livraison à Auderghem ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Auderghem, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Auderghem ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  schaarbeek: {
    slug: "schaarbeek",
    title: "Déshumidificateur de chantier à louer à Schaerbeek | Vernast",
    description:
      "Louer un déshumidificateur à Schaerbeek ? Calculez votre pack de séchage chez Vernast, avec livraison, installation et reprise. Pour neuf, rénovation ou fuite.",
    h1: "Location de déshumidificateur à Schaerbeek",
    kicker: "Schaerbeek · livraison sur votre chantier",
    rit: { afstand: "environ 45 km", tijd: "environ quarante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Schaerbeek pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Schaerbeek",
      alineas: [
        "Vernast livre à Schaerbeek et dans les communes voisines comme Bruxelles, Saint-Josse-ten-Noode et Evere. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Vous séchez un appartement ou un étage ? Précisez s'il y a un ascenseur ou un escalier fixe et quelle est la largeur de l'accès. L'espace disponible détermine en partie les appareils que nous pouvons installer. Dans un immeuble partagé, convenez à l'avance de qui ouvre la porte et de l'endroit où le matériel peut être déposé.",
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
        key: "ttk170",
        waarom: "**Pour une pièce séparée ou une zone de séchage plus petite.** Discutez des dimensions, de la température et de la quantité d'humidité pour déterminer si cet appareil a une capacité suffisante.",
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
      kop: "Livraison et installation à Schaerbeek",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Schaerbeek, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Schaerbeek",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["brussel-stad", "sint-joost-ten-node", "evere", "etterbeek"],
    faq: [
      {
        q: "Comment organiser une livraison à Schaerbeek ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Schaerbeek, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Schaerbeek ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  "sint-agatha-berchem": {
    slug: "sint-agatha-berchem",
    title: "Déshumidificateur à Berchem-Sainte-Agathe | Vernast",
    description:
      "Louer un déshumidificateur à Berchem-Sainte-Agathe ? Vernast livre, installe et reprend votre pack de séchage, avec des conseils pour neuf et rénovation.",
    h1: "Location de déshumidificateur à Berchem-Sainte-Agathe",
    kicker: "Berchem-Sainte-Agathe · livraison sur votre chantier",
    rit: { afstand: "environ 43 km", tijd: "environ quarante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Berchem-Sainte-Agathe pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Berchem-Sainte-Agathe",
      alineas: [
        "Vernast livre à Berchem-Sainte-Agathe et dans les communes voisines comme Ganshoren, Jette et Molenbeek-Saint-Jean. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
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
      kop: "Livraison et installation à Berchem-Sainte-Agathe",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Berchem-Sainte-Agathe, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Berchem-Sainte-Agathe",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["ganshoren", "jette", "sint-jans-molenbeek", "koekelberg"],
    faq: [
      {
        q: "Comment organiser une livraison à Berchem-Sainte-Agathe ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Berchem-Sainte-Agathe, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Un déshumidificateur règle-t-il un problème d'humidité permanent ?",
        a: "Un déshumidificateur aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou une barrière contre l'humidité manquante. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que le déshumidificateur fonctionne.",
      },
      {
        q: "De quelle alimentation électrique ai-je besoin ?",
        a: "La puissance de raccordement varie selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW nécessitent une alimentation 400 V adaptée. En cas de doute, faites contrôler la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Berchem-Sainte-Agathe ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  "sint-gillis": {
    slug: "sint-gillis",
    title: "Louer un déshumidificateur à Saint-Gilles | Vernast",
    description:
      "Déshumidificateur à Saint-Gilles ? Calculez votre pack de séchage Vernast, livraison, installation et reprise comprises. Neuf, rénovation, dégâts des eaux.",
    h1: "Location de déshumidificateur à Saint-Gilles",
    kicker: "Saint-Gilles · livraison sur votre chantier",
    rit: { afstand: "environ 47 km", tijd: "environ quarante-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Saint-Gilles pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Saint-Gilles",
      alineas: [
        "Vernast livre à Saint-Gilles et dans les communes voisines comme Bruxelles, Ixelles et Forest. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Vous séchez un appartement ou un étage ? Précisez s'il y a un ascenseur ou un escalier fixe et quelle est la largeur de l'accès. L'espace disponible détermine en partie les appareils que nous pouvons installer. Dans un immeuble partagé, convenez à l'avance de qui ouvre la porte et de l'endroit où le matériel peut être déposé.",
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
    ],
    levering: {
      kop: "Livraison et installation à Saint-Gilles",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Saint-Gilles, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Saint-Gilles",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["brussel-stad", "elsene", "vorst", "anderlecht"],
    faq: [
      {
        q: "Comment organiser une livraison à Saint-Gilles ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Saint-Gilles, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Saint-Gilles ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  "sint-jans-molenbeek": {
    slug: "sint-jans-molenbeek",
    title: "Location de déshumidificateur à Molenbeek | Vernast",
    description:
      "Louer un déshumidificateur à Molenbeek-Saint-Jean ? Pack de séchage Vernast avec livraison, installation et reprise, et conseils pour votre chantier.",
    h1: "Location de déshumidificateur à Molenbeek-Saint-Jean",
    kicker: "Molenbeek-Saint-Jean · livraison sur votre chantier",
    rit: { afstand: "environ 44 km", tijd: "environ quarante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Molenbeek-Saint-Jean pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Molenbeek-Saint-Jean",
      alineas: [
        "Vernast livre à Molenbeek-Saint-Jean et dans les communes voisines comme Anderlecht, Koekelberg et Bruxelles. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
      kop: "Livraison et installation à Molenbeek-Saint-Jean",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Molenbeek-Saint-Jean, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Molenbeek-Saint-Jean",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["anderlecht", "koekelberg", "brussel-stad", "jette", "sint-agatha-berchem"],
    faq: [
      {
        q: "Comment organiser une livraison à Molenbeek-Saint-Jean ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Molenbeek-Saint-Jean, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Un déshumidificateur règle-t-il un problème d'humidité permanent ?",
        a: "Un déshumidificateur aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou une barrière contre l'humidité manquante. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que le déshumidificateur fonctionne.",
      },
      {
        q: "De quelle alimentation électrique ai-je besoin ?",
        a: "La puissance de raccordement varie selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW nécessitent une alimentation 400 V adaptée. En cas de doute, faites contrôler la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Molenbeek-Saint-Jean ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  "sint-joost-ten-node": {
    slug: "sint-joost-ten-node",
    title: "Déshumidificateur à Saint-Josse-ten-Noode | Vernast",
    description:
      "Un déshumidificateur à Saint-Josse-ten-Noode ? Vernast compose votre pack de séchage, livré, installé et repris. Pour neuf, rénovation ou dégâts des eaux.",
    h1: "Location de déshumidificateur à Saint-Josse-ten-Noode",
    kicker: "Saint-Josse-ten-Noode · livraison sur votre chantier",
    rit: { afstand: "environ 45 km", tijd: "environ quarante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Saint-Josse-ten-Noode pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Saint-Josse-ten-Noode",
      alineas: [
        "Vernast livre à Saint-Josse-ten-Noode et dans les communes voisines comme Bruxelles, Schaerbeek et Etterbeek. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
    ],
    levering: {
      kop: "Livraison et installation à Saint-Josse-ten-Noode",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Saint-Josse-ten-Noode, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Saint-Josse-ten-Noode",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["brussel-stad", "schaarbeek", "etterbeek"],
    faq: [
      {
        q: "Comment organiser une livraison à Saint-Josse-ten-Noode ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Saint-Josse-ten-Noode, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Saint-Josse-ten-Noode ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  "sint-lambrechts-woluwe": {
    slug: "sint-lambrechts-woluwe",
    title: "Déshumidificateur à Woluwe-Saint-Lambert | Vernast",
    description:
      "Louer un déshumidificateur à Woluwe-Saint-Lambert ? Calculez votre pack de séchage Vernast, avec livraison, installation et reprise comprises.",
    h1: "Location de déshumidificateur à Woluwe-Saint-Lambert",
    kicker: "Woluwe-Saint-Lambert · livraison sur votre chantier",
    rit: { afstand: "environ 48 km", tijd: "environ quarante-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Woluwe-Saint-Lambert pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Woluwe-Saint-Lambert",
      alineas: [
        "Vernast livre à Woluwe-Saint-Lambert et dans les communes voisines comme Woluwe-Saint-Pierre, Evere et Etterbeek. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "revolution",
        waarom: "**Pour un dispositif de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air à côté du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Woluwe-Saint-Lambert",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Woluwe-Saint-Lambert, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Woluwe-Saint-Lambert",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["sint-pieters-woluwe", "evere", "etterbeek", "schaarbeek", "oudergem"],
    faq: [
      {
        q: "Comment organiser une livraison à Woluwe-Saint-Lambert ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Woluwe-Saint-Lambert, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Woluwe-Saint-Lambert ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  "sint-pieters-woluwe": {
    slug: "sint-pieters-woluwe",
    title: "Louer un déshumidificateur à Woluwe-Saint-Pierre | Vernast",
    description:
      "Déshumidificateur de chantier à Woluwe-Saint-Pierre : pack de séchage Vernast livré, installé et repris. Conseils pour neuf, rénovation et dégâts des eaux.",
    h1: "Location de déshumidificateur à Woluwe-Saint-Pierre",
    kicker: "Woluwe-Saint-Pierre · livraison sur votre chantier",
    rit: { afstand: "environ 50 km", tijd: "environ quarante-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Woluwe-Saint-Pierre pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Woluwe-Saint-Pierre",
      alineas: [
        "Vernast livre à Woluwe-Saint-Pierre et dans les communes voisines comme Woluwe-Saint-Lambert, Auderghem et Etterbeek. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "revolution",
        waarom: "**Pour un dispositif de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air à côté du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Woluwe-Saint-Pierre",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Woluwe-Saint-Pierre, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Woluwe-Saint-Pierre",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["sint-lambrechts-woluwe", "oudergem", "etterbeek", "watermaal-bosvoorde"],
    faq: [
      {
        q: "Comment organiser une livraison à Woluwe-Saint-Pierre ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Woluwe-Saint-Pierre, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Un déshumidificateur règle-t-il un problème d'humidité permanent ?",
        a: "Un déshumidificateur aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou une barrière contre l'humidité manquante. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que le déshumidificateur fonctionne.",
      },
      {
        q: "De quelle alimentation électrique ai-je besoin ?",
        a: "La puissance de raccordement varie selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW nécessitent une alimentation 400 V adaptée. En cas de doute, faites contrôler la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Woluwe-Saint-Pierre ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  ukkel: {
    slug: "ukkel",
    title: "Location de déshumidificateur de chantier à Uccle | Vernast",
    description:
      "Louer un déshumidificateur à Uccle ? Calculez votre pack de séchage chez Vernast : livraison, installation et reprise comprises, conseils pour votre chantier.",
    h1: "Location de déshumidificateur à Uccle",
    kicker: "Uccle · livraison sur votre chantier",
    rit: { afstand: "environ 50 km", tijd: "environ quarante-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Uccle pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Uccle",
      alineas: [
        "Vernast livre à Uccle et dans les communes voisines comme Forest, Watermael-Boitsfort et Ixelles. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "revolution",
        waarom: "**Pour un dispositif de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air à côté du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Uccle",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Uccle, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Uccle",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["vorst", "watermaal-bosvoorde", "elsene", "sint-gillis"],
    faq: [
      {
        q: "Comment organiser une livraison à Uccle ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Uccle, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Un déshumidificateur règle-t-il un problème d'humidité permanent ?",
        a: "Un déshumidificateur aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou une barrière contre l'humidité manquante. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que le déshumidificateur fonctionne.",
      },
      {
        q: "De quelle alimentation électrique ai-je besoin ?",
        a: "La puissance de raccordement varie selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW nécessitent une alimentation 400 V adaptée. En cas de doute, faites contrôler la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Uccle ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  vorst: {
    slug: "vorst",
    title: "Louer un déshumidificateur de chantier à Forest | Vernast",
    description:
      "Un déshumidificateur à louer à Forest ? Vernast livre, installe et reprend votre pack de séchage. Pour du neuf, une rénovation ou des dégâts des eaux.",
    h1: "Location de déshumidificateur à Forest",
    kicker: "Forest · livraison sur votre chantier",
    rit: { afstand: "environ 48 km", tijd: "environ quarante-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Forest pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Forest",
      alineas: [
        "Vernast livre à Forest et dans les communes voisines comme Saint-Gilles, Uccle et Anderlecht. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air à côté du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Forest",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Forest, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Forest",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["sint-gillis", "ukkel", "anderlecht", "watermaal-bosvoorde"],
    faq: [
      {
        q: "Comment organiser une livraison à Forest ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Forest, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Un déshumidificateur règle-t-il un problème d'humidité permanent ?",
        a: "Un déshumidificateur aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou une barrière contre l'humidité manquante. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que le déshumidificateur fonctionne.",
      },
      {
        q: "De quelle alimentation électrique ai-je besoin ?",
        a: "La puissance de raccordement varie selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW nécessitent une alimentation 400 V adaptée. En cas de doute, faites contrôler la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Forest ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },

  "watermaal-bosvoorde": {
    slug: "watermaal-bosvoorde",
    title: "Déshumidificateur à louer à Watermael-Boitsfort | Vernast",
    description:
      "Déshumidificateur de chantier à Watermael-Boitsfort ? Calculez votre pack de séchage Vernast en ligne, avec livraison, installation et reprise comprises.",
    h1: "Location de déshumidificateur à Watermael-Boitsfort",
    kicker: "Watermael-Boitsfort · livraison sur votre chantier",
    rit: { afstand: "environ 52 km", tijd: "environ cinquante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Watermael-Boitsfort pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher chapes, plafonnages et pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Séchage de chantier pour votre projet à Watermael-Boitsfort",
      alineas: [
        "Vernast livre à Watermael-Boitsfort et dans les communes voisines comme Auderghem, Uccle et Ixelles. Indiquez dans votre demande l'adresse complète du chantier et la personne qui pourra nous accueillir sur place. Nous pourrons ainsi convenir à l'avance de la livraison et de l'installation.",
        "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
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
        key: "revolution",
        waarom: "**Pour un dispositif de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air à côté du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Watermael-Boitsfort",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Communiquez l'adresse à Watermael-Boitsfort, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Watermael-Boitsfort",
      alinea: "Vous pouvez venir chercher un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois du trajet aller et du retour de l'appareil. Vérifiez les dimensions et le poids et suivez les instructions de transport. Vous hésitez sur le dispositif ou il vous faut plusieurs appareils ? Discutez alors d'un pack de séchage avec installation.",
    },
    buren: ["oudergem", "ukkel", "elsene", "vorst"],
    faq: [
      {
        q: "Comment organiser une livraison à Watermael-Boitsfort ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Watermael-Boitsfort, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Un déshumidificateur règle-t-il un problème d'humidité permanent ?",
        a: "Un déshumidificateur aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou une barrière contre l'humidité manquante. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que le déshumidificateur fonctionne.",
      },
      {
        q: "De quelle alimentation électrique ai-je besoin ?",
        a: "La puissance de raccordement varie selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW nécessitent une alimentation 400 V adaptée. En cas de doute, faites contrôler la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil moi-même pour un chantier à Watermael-Boitsfort ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
};
