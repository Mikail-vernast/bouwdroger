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
};
