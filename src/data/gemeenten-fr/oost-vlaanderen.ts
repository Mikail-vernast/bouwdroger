import type { Gemeente } from "../gemeenten.js";

/**
 * De Franse teksten van de gemeentepagina's in deze provincie, gesleuteld op
 * de Nederlandse slug. Zie README.md in deze map voor de regels en hoe een
 * gemeente aangezet wordt (`aan/oost-vlaanderen.ts`).
 */
export const GEMEENTEN: Record<string, Gemeente> = {
  gent: {
    slug: "gent",
    title: "Location de déshumidificateur de chantier à Gand | Vernast",
    description:
      "Déshumidificateur à louer à Gand ? Calculez votre pack de séchage Vernast, livraison et reprise incluses. Conseils en neuf, rénovation et dégâts des eaux.",
    h1: "Location de déshumidificateur de chantier à Gand",
    kicker: "Gand · livraison sur votre chantier",
    rit: { afstand: "environ 60 km", tijd: "environ cinquante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Gand pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Gand",
      alineas: [
        "Vernast livre à Gand et dans les localités voisines comme Destelbergen, Merelbeke-Melle et Lochristi. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "revolution",
        waarom: "**Pour un dispositif de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
      {
        key: "ttk350",
        waarom: "**Pour de plus grandes pièces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et des matériaux humides. La disposition de votre chantier détermine où les appareils seront placés.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Gand",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Gand, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Gand",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["destelbergen", "merelbeke-melle", "lochristi", "evergem"],
    faq: [
      {
        q: "Comment organiser une livraison à Gand ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Gand, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Gand ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  aalst: {
    slug: "aalst",
    title: "Location de déshumidificateur de chantier à Alost | Vernast",
    description:
      "Location de déshumidificateur à Alost, livraison, installation et reprise incluses. Votre pack de séchage Vernast pour neuf, rénovation ou dégâts des eaux.",
    h1: "Location de déshumidificateur de chantier à Alost",
    kicker: "Alost · livraison sur votre chantier",
    rit: { afstand: "environ 45 km", tijd: "environ quarante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Alost pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Alost",
      alineas: [
        "Vernast livre à Alost et dans les localités voisines comme Denderleeuw, Erpe-Mere et Lede. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "ttk170",
        waarom: "**Pour une pièce isolée ou une zone de séchage plus petite.** Indiquez les dimensions, la température et la quantité d'humidité pour déterminer si cet appareil a une capacité suffisante.",
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
      kop: "Livraison et installation à Alost",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Alost, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Alost",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["denderleeuw", "erpe-mere", "lede", "haaltert"],
    faq: [
      {
        q: "Comment organiser une livraison à Alost ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Alost, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Alost ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  oudenaarde: {
    slug: "oudenaarde",
    title: "Déshumidificateur de chantier à louer à Audenarde | Vernast",
    description:
      "Louez un déshumidificateur de chantier à Audenarde : pack de séchage Vernast avec livraison, installation et reprise. Pour chape, plafonnage et dégâts des eaux.",
    h1: "Location de déshumidificateur de chantier à Audenarde",
    kicker: "Audenarde · livraison sur votre chantier",
    rit: { afstand: "environ 80 km", tijd: "environ une heure et dix minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Audenarde pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Audenarde",
      alineas: [
        "Vernast livre à Audenarde et dans les localités voisines comme Maarkedal, Kluisbergen et Kruisem. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Face à une cave humide ou à une fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une chape neuve et le plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Précisez aussi quand le matériau a été posé. Le dispositif de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche superficielle sèche ne signifie pas automatiquement que tout le sol ou tout le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "revolution",
        waarom: "**Pour un dispositif de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
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
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Audenarde",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Audenarde, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Audenarde",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["maarkedal", "kluisbergen", "kruisem", "wortegem-petegem", "zwalm"],
    faq: [
      {
        q: "Comment organiser une livraison à Audenarde ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Audenarde, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Un déshumidificateur résout-il un problème d'humidité persistant ?",
        a: "Un déshumidificateur de chantier aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou l'absence de barrière contre l'humidité. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que l'appareil fonctionne.",
      },
      {
        q: "Quelle alimentation électrique me faut-il ?",
        a: "La puissance de raccordement diffère selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Audenarde ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  ronse: {
    slug: "ronse",
    title: "Déshumidificateur de chantier à louer à Renaix | Vernast",
    description:
      "Séchage de chantier à Renaix : neuf, rénovation ou dégâts des eaux. Vernast livre, installe et reprend vos déshumidificateurs. Calculez votre prix en ligne.",
    h1: "Location de déshumidificateur de chantier à Renaix",
    kicker: "Renaix · livraison sur votre chantier",
    rit: { afstand: "environ 90 km", tijd: "environ une heure et quart" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Renaix pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Renaix",
      alineas: [
        "Vernast livre à Renaix et dans les localités voisines comme Kluisbergen, Maarkedal et Brakel. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Face à une cave humide ou à une fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une chape neuve et le plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Précisez aussi quand le matériau a été posé. Le dispositif de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche superficielle sèche ne signifie pas automatiquement que tout le sol ou tout le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
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
        waarom: "**Pour de plus grandes pièces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et des matériaux humides. La disposition de votre chantier détermine où les appareils seront placés.",
      },
      {
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Renaix",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Renaix, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Renaix",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["kluisbergen", "maarkedal", "brakel", "oudenaarde"],
    faq: [
      {
        q: "Comment organiser une livraison à Renaix ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Renaix, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Un déshumidificateur résout-il un problème d'humidité persistant ?",
        a: "Un déshumidificateur de chantier aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou l'absence de barrière contre l'humidité. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que l'appareil fonctionne.",
      },
      {
        q: "Quelle alimentation électrique me faut-il ?",
        a: "La puissance de raccordement diffère selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Renaix ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  zottegem: {
    slug: "zottegem",
    title: "Louer un déshumidificateur de chantier à Zottegem | Vernast",
    description:
      "Séchage de chantier à Zottegem : neuf, rénovation ou dégâts des eaux. Vernast livre, installe et reprend vos déshumidificateurs. Calculez votre prix en ligne.",
    h1: "Location de déshumidificateur de chantier à Zottegem",
    kicker: "Zottegem · livraison sur votre chantier",
    rit: { afstand: "environ 63 km", tijd: "environ cinquante-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Zottegem pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Zottegem",
      alineas: [
        "Vernast livre à Zottegem et dans les localités voisines comme Herzele, Zwalm et Sint-Lievens-Houtem. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Face à une cave humide ou à une fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
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
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Zottegem",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Zottegem, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Zottegem",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["herzele", "zwalm", "sint-lievens-houtem", "oosterzele", "lierde"],
    faq: [
      {
        q: "Comment organiser une livraison à Zottegem ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Zottegem, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Un déshumidificateur résout-il un problème d'humidité persistant ?",
        a: "Un déshumidificateur de chantier aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou l'absence de barrière contre l'humidité. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que l'appareil fonctionne.",
      },
      {
        q: "Quelle alimentation électrique me faut-il ?",
        a: "La puissance de raccordement diffère selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Zottegem ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  brakel: {
    slug: "brakel",
    title: "Location de déshumidificateur de chantier à Brakel | Vernast",
    description:
      "Location de déshumidificateur à Brakel et environs, comme Maarkedal. Pack de séchage Vernast avec livraison, installation et reprise, prix calculé en ligne.",
    h1: "Location de déshumidificateur de chantier à Brakel",
    kicker: "Brakel · livraison sur votre chantier",
    rit: { afstand: "environ 75 km", tijd: "environ une heure" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Brakel pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Brakel",
      alineas: [
        "Vernast livre à Brakel et dans les localités voisines comme Maarkedal, Lierde et Horebeke. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Face à une cave humide ou à une fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une chape neuve et le plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Précisez aussi quand le matériau a été posé. Le dispositif de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche superficielle sèche ne signifie pas automatiquement que tout le sol ou tout le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
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
        waarom: "**Pour de plus grandes pièces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et des matériaux humides. La disposition de votre chantier détermine où les appareils seront placés.",
      },
      {
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Brakel",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Brakel, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Brakel",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["maarkedal", "lierde", "horebeke", "ronse", "geraardsbergen"],
    faq: [
      {
        q: "Comment organiser une livraison à Brakel ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Brakel, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Un déshumidificateur résout-il un problème d'humidité persistant ?",
        a: "Un déshumidificateur de chantier aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou l'absence de barrière contre l'humidité. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que l'appareil fonctionne.",
      },
      {
        q: "Quelle alimentation électrique me faut-il ?",
        a: "La puissance de raccordement diffère selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Brakel ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  kluisbergen: {
    slug: "kluisbergen",
    title: "Location de déshumidificateur à Kluisbergen | Vernast",
    description:
      "Chape, plafonnage ou dégâts des eaux à Kluisbergen ? Vernast loue des déshumidificateurs de chantier, livrés, installés et repris. Calculez votre pack en ligne.",
    h1: "Location de déshumidificateur de chantier à Kluisbergen",
    kicker: "Kluisbergen · livraison sur votre chantier",
    rit: { afstand: "environ 88 km", tijd: "environ une heure et quart" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Kluisbergen pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Kluisbergen",
      alineas: [
        "Vernast livre à Kluisbergen et dans les localités voisines comme Renaix, Audenarde et Maarkedal. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Face à une cave humide ou à une fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une chape neuve et le plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Précisez aussi quand le matériau a été posé. Le dispositif de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche superficielle sèche ne signifie pas automatiquement que tout le sol ou tout le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "revolution",
        waarom: "**Pour un dispositif de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
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
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Kluisbergen",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Kluisbergen, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Kluisbergen",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["ronse", "oudenaarde", "maarkedal", "wortegem-petegem"],
    faq: [
      {
        q: "Comment organiser une livraison à Kluisbergen ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Kluisbergen, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Un déshumidificateur résout-il un problème d'humidité persistant ?",
        a: "Un déshumidificateur de chantier aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou l'absence de barrière contre l'humidité. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que l'appareil fonctionne.",
      },
      {
        q: "Quelle alimentation électrique me faut-il ?",
        a: "La puissance de raccordement diffère selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Kluisbergen ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  kruisem: {
    slug: "kruisem",
    title: "Déshumidificateur de chantier à louer à Kruisem | Vernast",
    description:
      "Déshumidificateur à louer à Kruisem : livraison, installation et reprise comprises dans votre pack de séchage Vernast. Conseil pour neuf et rénovation.",
    h1: "Location de déshumidificateur de chantier à Kruisem",
    kicker: "Kruisem · livraison sur votre chantier",
    rit: { afstand: "environ 78 km", tijd: "environ une heure" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Kruisem pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Kruisem",
      alineas: [
        "Vernast livre à Kruisem et dans les localités voisines comme Audenarde, Wortegem-Petegem et Zulte. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Face à une cave humide ou à une fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
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
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
      {
        key: "teddh30",
        waarom: "**Pour un chauffage d'appoint sur un chantier froid.** Ce chauffage électrique demande un raccordement 400 V adapté. Faites vérifier à l'avance si l'alimentation disponible correspond à la puissance de raccordement.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Kruisem",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Kruisem, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Kruisem",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["oudenaarde", "wortegem-petegem", "zulte", "gavere", "zwalm"],
    faq: [
      {
        q: "Comment organiser une livraison à Kruisem ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Kruisem, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Un déshumidificateur résout-il un problème d'humidité persistant ?",
        a: "Un déshumidificateur de chantier aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou l'absence de barrière contre l'humidité. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que l'appareil fonctionne.",
      },
      {
        q: "Quelle alimentation électrique me faut-il ?",
        a: "La puissance de raccordement diffère selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Kruisem ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  horebeke: {
    slug: "horebeke",
    title: "Déshumidificateur de chantier à louer à Horebeke | Vernast",
    description:
      "Déshumidificateur à Horebeke ? Pack de séchage Vernast avec livraison, installation et reprise. Pour neuf, rénovation et dégâts des eaux.",
    h1: "Location de déshumidificateur de chantier à Horebeke",
    kicker: "Horebeke · livraison sur votre chantier",
    rit: { afstand: "environ 72 km", tijd: "environ une heure" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Horebeke pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Horebeke",
      alineas: [
        "Vernast livre à Horebeke et dans les localités voisines comme Brakel, Maarkedal et Zwalm. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Face à une cave humide ou à une fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
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
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Horebeke",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Horebeke, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Horebeke",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["brakel", "maarkedal", "zwalm", "oudenaarde"],
    faq: [
      {
        q: "Comment organiser une livraison à Horebeke ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Horebeke, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Un déshumidificateur résout-il un problème d'humidité persistant ?",
        a: "Un déshumidificateur de chantier aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou l'absence de barrière contre l'humidité. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que l'appareil fonctionne.",
      },
      {
        q: "Quelle alimentation électrique me faut-il ?",
        a: "La puissance de raccordement diffère selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Horebeke ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  lierde: {
    slug: "lierde",
    title: "Location de déshumidificateur de chantier à Lierde | Vernast",
    description:
      "Louez un déshumidificateur de chantier à Lierde : pack de séchage Vernast avec livraison, installation et reprise. Pour chape, plafonnage et dégâts des eaux.",
    h1: "Location de déshumidificateur de chantier à Lierde",
    kicker: "Lierde · livraison sur votre chantier",
    rit: { afstand: "environ 70 km", tijd: "environ une heure" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Lierde pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Lierde",
      alineas: [
        "Vernast livre à Lierde et dans les localités voisines comme Brakel, Grammont et Zottegem. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Face à une cave humide ou à une fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
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
      kop: "Livraison et installation à Lierde",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Lierde, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Lierde",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["brakel", "geraardsbergen", "zottegem", "herzele"],
    faq: [
      {
        q: "Comment organiser une livraison à Lierde ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Lierde, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Un déshumidificateur résout-il un problème d'humidité persistant ?",
        a: "Un déshumidificateur de chantier aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou l'absence de barrière contre l'humidité. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que l'appareil fonctionne.",
      },
      {
        q: "Quelle alimentation électrique me faut-il ?",
        a: "La puissance de raccordement diffère selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Lierde ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  maarkedal: {
    slug: "maarkedal",
    title: "Déshumidificateur de chantier à louer à Maarkedal | Vernast",
    description:
      "Séchage de chantier à Maarkedal : neuf, rénovation ou dégâts des eaux. Vernast livre, installe et reprend vos déshumidificateurs. Calculez votre prix en ligne.",
    h1: "Location de déshumidificateur de chantier à Maarkedal",
    kicker: "Maarkedal · livraison sur votre chantier",
    rit: { afstand: "environ 80 km", tijd: "environ une heure et dix minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Maarkedal pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Maarkedal",
      alineas: [
        "Vernast livre à Maarkedal et dans les localités voisines comme Audenarde, Brakel et Horebeke. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Face à une cave humide ou à une fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une chape neuve et le plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Précisez aussi quand le matériau a été posé. Le dispositif de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche superficielle sèche ne signifie pas automatiquement que tout le sol ou tout le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
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
        waarom: "**Pour de plus grandes pièces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et des matériaux humides. La disposition de votre chantier détermine où les appareils seront placés.",
      },
      {
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Maarkedal",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Maarkedal, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Maarkedal",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["oudenaarde", "brakel", "horebeke", "ronse", "kluisbergen"],
    faq: [
      {
        q: "Comment organiser une livraison à Maarkedal ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Maarkedal, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Un déshumidificateur résout-il un problème d'humidité persistant ?",
        a: "Un déshumidificateur de chantier aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou l'absence de barrière contre l'humidité. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que l'appareil fonctionne.",
      },
      {
        q: "Quelle alimentation électrique me faut-il ?",
        a: "La puissance de raccordement diffère selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Maarkedal ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  "wortegem-petegem": {
    slug: "wortegem-petegem",
    title: "Location de déshumidificateur à Wortegem-Petegem | Vernast",
    description:
      "Déshumidificateur à louer à Wortegem-Petegem : livraison, installation et reprise comprises dans votre pack de séchage Vernast. Conseil pour neuf et rénovation.",
    h1: "Location de déshumidificateur de chantier à Wortegem-Petegem",
    kicker: "Wortegem-Petegem · livraison sur votre chantier",
    rit: { afstand: "environ 82 km", tijd: "environ une heure et dix minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Wortegem-Petegem pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Wortegem-Petegem",
      alineas: [
        "Vernast livre à Wortegem-Petegem et dans les localités voisines comme Kruisem, Audenarde et Kluisbergen. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Face à une cave humide ou à une fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
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
    ],
    levering: {
      kop: "Livraison et installation à Wortegem-Petegem",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Wortegem-Petegem, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Wortegem-Petegem",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["kruisem", "oudenaarde", "kluisbergen", "zulte"],
    faq: [
      {
        q: "Comment organiser une livraison à Wortegem-Petegem ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Wortegem-Petegem, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Un déshumidificateur résout-il un problème d'humidité persistant ?",
        a: "Un déshumidificateur de chantier aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou l'absence de barrière contre l'humidité. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que l'appareil fonctionne.",
      },
      {
        q: "Quelle alimentation électrique me faut-il ?",
        a: "La puissance de raccordement diffère selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Wortegem-Petegem ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  zwalm: {
    slug: "zwalm",
    title: "Louer un déshumidificateur de chantier à Zwalm | Vernast",
    description:
      "Location de déshumidificateur à Zwalm et environs, comme Zottegem. Pack de séchage Vernast avec livraison, installation et reprise, prix calculé en ligne.",
    h1: "Location de déshumidificateur de chantier à Zwalm",
    kicker: "Zwalm · livraison sur votre chantier",
    rit: { afstand: "environ 70 km", tijd: "environ une heure" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Zwalm pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Zwalm",
      alineas: [
        "Vernast livre à Zwalm et dans les localités voisines comme Zottegem, Horebeke et Audenarde. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Face à une cave humide ou à une fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une chape neuve et le plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Précisez aussi quand le matériau a été posé. Le dispositif de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche superficielle sèche ne signifie pas automatiquement que tout le sol ou tout le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
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
        waarom: "**Pour de plus grandes pièces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et des matériaux humides. La disposition de votre chantier détermine où les appareils seront placés.",
      },
      {
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Zwalm",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Zwalm, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Zwalm",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["zottegem", "horebeke", "oudenaarde", "brakel", "kruisem"],
    faq: [
      {
        q: "Comment organiser une livraison à Zwalm ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Zwalm, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Un déshumidificateur résout-il un problème d'humidité persistant ?",
        a: "Un déshumidificateur de chantier aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou l'absence de barrière contre l'humidité. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que l'appareil fonctionne.",
      },
      {
        q: "Quelle alimentation électrique me faut-il ?",
        a: "La puissance de raccordement diffère selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Zwalm ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  eeklo: {
    slug: "eeklo",
    title: "Location de déshumidificateur de chantier à Eeklo | Vernast",
    description:
      "Chape, plafonnage ou dégâts des eaux à Eeklo ? Vernast loue des déshumidificateurs de chantier, livrés, installés et repris. Calculez votre pack en ligne.",
    h1: "Location de déshumidificateur de chantier à Eeklo",
    kicker: "Eeklo · livraison sur votre chantier",
    rit: { afstand: "environ 65 km", tijd: "environ cinquante-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Eeklo pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Eeklo",
      alineas: [
        "Vernast livre à Eeklo et dans les localités voisines comme Kaprijke, Lievegem et Maldegem. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
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
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
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
      kop: "Livraison et installation à Eeklo",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Eeklo, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Eeklo",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["kaprijke", "lievegem", "maldegem", "sint-laureins"],
    faq: [
      {
        q: "Comment organiser une livraison à Eeklo ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Eeklo, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Eeklo ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  maldegem: {
    slug: "maldegem",
    title: "Location de déshumidificateur à Maldegem | Vernast",
    description:
      "Déshumidificateur à louer à Maldegem : livraison, installation et reprise comprises dans votre pack de séchage Vernast. Conseil pour neuf et rénovation.",
    h1: "Location de déshumidificateur de chantier à Maldegem",
    kicker: "Maldegem · livraison sur votre chantier",
    rit: { afstand: "environ 72 km", tijd: "environ une heure" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Maldegem pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Maldegem",
      alineas: [
        "Vernast livre à Maldegem et dans les localités voisines comme Eeklo, Sint-Laureins et Aalter. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Face à une cave humide ou à une fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
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
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
      {
        key: "teddh30",
        waarom: "**Pour un chauffage d'appoint sur un chantier froid.** Ce chauffage électrique demande un raccordement 400 V adapté. Faites vérifier à l'avance si l'alimentation disponible correspond à la puissance de raccordement.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air à côté du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Maldegem",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Maldegem, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Maldegem",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["eeklo", "sint-laureins", "aalter", "kaprijke"],
    faq: [
      {
        q: "Comment organiser une livraison à Maldegem ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Maldegem, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Un déshumidificateur résout-il un problème d'humidité persistant ?",
        a: "Un déshumidificateur de chantier aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou l'absence de barrière contre l'humidité. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que l'appareil fonctionne.",
      },
      {
        q: "Quelle alimentation électrique me faut-il ?",
        a: "La puissance de raccordement diffère selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Maldegem ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  aalter: {
    slug: "aalter",
    title: "Location de déshumidificateur de chantier à Aalter | Vernast",
    description:
      "Déshumidificateur à Aalter ? Pack de séchage Vernast avec livraison, installation et reprise. Pour neuf, rénovation et dégâts des eaux.",
    h1: "Location de déshumidificateur de chantier à Aalter",
    kicker: "Aalter · livraison sur votre chantier",
    rit: { afstand: "environ 72 km", tijd: "environ une heure" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Aalter pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Aalter",
      alineas: [
        "Vernast livre à Aalter et dans les localités voisines comme Maldegem, Lievegem et Deinze. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Pour un commerce, un bureau ou un local professionnel, l'usage du bâtiment compte autant que le volume. Indiquez quelles zones doivent rester accessibles et quand les travaux ont lieu. Avec plusieurs pièces fermées, un dispositif réparti peut être nécessaire. Nous discutons à l'avance d'une réouverture prévue ; la mesure d'humidité détermine si la finition peut commencer.",
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
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air à côté du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk350",
        waarom: "**Pour de plus grandes pièces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et des matériaux humides. La disposition de votre chantier détermine où les appareils seront placés.",
      },
      {
        key: "teddh30",
        waarom: "**Pour un chauffage d'appoint sur un chantier froid.** Ce chauffage électrique demande un raccordement 400 V adapté. Faites vérifier à l'avance si l'alimentation disponible correspond à la puissance de raccordement.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Aalter",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Aalter, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Aalter",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["maldegem", "lievegem", "deinze", "eeklo"],
    faq: [
      {
        q: "Comment organiser une livraison à Aalter ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Aalter, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je faire sécher un local professionnel pendant les travaux ?",
        a: "Discutez à l'avance des pièces qui restent en usage, de l'alimentation électrique disponible et de votre planning. Nous adaptons l'installation en conséquence. Un grand espace ouvert demande une autre répartition que plusieurs pièces fermées ; la surface au sol totale ne suffit donc pas pour établir le conseil.",
      },
      {
        q: "Quelle alimentation électrique me faut-il ?",
        a: "La puissance de raccordement diffère selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Aalter ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  assenede: {
    slug: "assenede",
    title: "Déshumidificateur de chantier à louer à Assenede | Vernast",
    description:
      "Louez un déshumidificateur de chantier à Assenede : pack de séchage Vernast avec livraison, installation et reprise. Pour chape, plafonnage et dégâts des eaux.",
    h1: "Location de déshumidificateur de chantier à Assenede",
    kicker: "Assenede · livraison sur votre chantier",
    rit: { afstand: "environ 55 km", tijd: "environ cinquante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Assenede pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Assenede",
      alineas: [
        "Vernast livre à Assenede et dans les localités voisines comme Zelzate, Sint-Laureins et Kaprijke. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Face à une cave humide ou à une fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
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
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Assenede",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Assenede, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Assenede",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["zelzate", "sint-laureins", "kaprijke", "evergem"],
    faq: [
      {
        q: "Comment organiser une livraison à Assenede ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Assenede, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Un déshumidificateur résout-il un problème d'humidité persistant ?",
        a: "Un déshumidificateur de chantier aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou l'absence de barrière contre l'humidité. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que l'appareil fonctionne.",
      },
      {
        q: "Quelle alimentation électrique me faut-il ?",
        a: "La puissance de raccordement diffère selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Assenede ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  evergem: {
    slug: "evergem",
    title: "Déshumidificateur de chantier à louer à Evergem | Vernast",
    description:
      "Déshumidificateur de chantier à Evergem ? Calculez votre pack de séchage en ligne. Vernast livre, installe et reprend les appareils, aussi à Lievegem et Gand.",
    h1: "Location de déshumidificateur de chantier à Evergem",
    kicker: "Evergem · livraison sur votre chantier",
    rit: { afstand: "environ 55 km", tijd: "environ cinquante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Evergem pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Evergem",
      alineas: [
        "Vernast livre à Evergem et dans les localités voisines comme Lievegem, Gand et Zelzate. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Face à une cave humide ou à une fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
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
      kop: "Livraison et installation à Evergem",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Evergem, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Evergem",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["lievegem", "gent", "zelzate", "assenede"],
    faq: [
      {
        q: "Comment organiser une livraison à Evergem ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Evergem, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Un déshumidificateur résout-il un problème d'humidité persistant ?",
        a: "Un déshumidificateur de chantier aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou l'absence de barrière contre l'humidité. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que l'appareil fonctionne.",
      },
      {
        q: "Quelle alimentation électrique me faut-il ?",
        a: "La puissance de raccordement diffère selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Evergem ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  kaprijke: {
    slug: "kaprijke",
    title: "Déshumidificateur de chantier à louer à Kaprijke | Vernast",
    description:
      "Séchage de chantier à Kaprijke : neuf, rénovation ou dégâts des eaux. Vernast livre, installe et reprend vos déshumidificateurs. Calculez votre prix en ligne.",
    h1: "Location de déshumidificateur de chantier à Kaprijke",
    kicker: "Kaprijke · livraison sur votre chantier",
    rit: { afstand: "environ 62 km", tijd: "environ cinquante-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Kaprijke pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Kaprijke",
      alineas: [
        "Vernast livre à Kaprijke et dans les localités voisines comme Eeklo, Sint-Laureins et Assenede. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Face à une cave humide ou à une fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
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
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
      {
        key: "revolution",
        waarom: "**Pour un dispositif de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Kaprijke",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Kaprijke, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Kaprijke",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["eeklo", "sint-laureins", "assenede", "maldegem"],
    faq: [
      {
        q: "Comment organiser une livraison à Kaprijke ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Kaprijke, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Un déshumidificateur résout-il un problème d'humidité persistant ?",
        a: "Un déshumidificateur de chantier aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou l'absence de barrière contre l'humidité. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que l'appareil fonctionne.",
      },
      {
        q: "Quelle alimentation électrique me faut-il ?",
        a: "La puissance de raccordement diffère selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Kaprijke ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  "sint-laureins": {
    slug: "sint-laureins",
    title: "Location de déshumidificateur à Sint-Laureins | Vernast",
    description:
      "Déshumidificateur à louer à Sint-Laureins : livraison, installation et reprise comprises dans votre pack de séchage Vernast. Conseil pour neuf et rénovation.",
    h1: "Location de déshumidificateur de chantier à Sint-Laureins",
    kicker: "Sint-Laureins · livraison sur votre chantier",
    rit: { afstand: "environ 65 km", tijd: "environ cinquante-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Sint-Laureins pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Sint-Laureins",
      alineas: [
        "Vernast livre à Sint-Laureins et dans les localités voisines comme Sint-Gillis-Waas, Kaprijke et Assenede. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Face à une cave humide ou à une fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
        "Une chape neuve et le plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Précisez aussi quand le matériau a été posé. Le dispositif de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
        "**Le temps de séchage dépend des conditions sur votre chantier.** L'épaisseur et la composition du matériau, la température et l'humidité de l'air jouent toutes un rôle. Une couche superficielle sèche ne signifie pas automatiquement que tout le sol ou tout le mur est prêt pour la finition. Convenez du contrôle de l'humidité résiduelle avec votre poseur de sol ou votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "revolution",
        waarom: "**Pour un dispositif de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire.",
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
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Sint-Laureins",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Sint-Laureins, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Sint-Laureins",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["sint-gillis-waas", "kaprijke", "assenede", "eeklo", "maldegem"],
    faq: [
      {
        q: "Comment organiser une livraison à Sint-Laureins ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Sint-Laureins, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Un déshumidificateur résout-il un problème d'humidité persistant ?",
        a: "Un déshumidificateur de chantier aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou l'absence de barrière contre l'humidité. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que l'appareil fonctionne.",
      },
      {
        q: "Quelle alimentation électrique me faut-il ?",
        a: "La puissance de raccordement diffère selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Sint-Laureins ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  lievegem: {
    slug: "lievegem",
    title: "Louer un déshumidificateur de chantier à Lievegem | Vernast",
    description:
      "Chape, plafonnage ou dégâts des eaux à Lievegem ? Vernast loue des déshumidificateurs de chantier, livrés, installés et repris. Calculez votre pack en ligne.",
    h1: "Location de déshumidificateur de chantier à Lievegem",
    kicker: "Lievegem · livraison sur votre chantier",
    rit: { afstand: "environ 63 km", tijd: "environ cinquante-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Lievegem pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Lievegem",
      alineas: [
        "Vernast livre à Lievegem et dans les localités voisines comme Eeklo, Evergem et Aalter. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Face à une cave humide ou à une fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
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
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
      {
        key: "teddh30",
        waarom: "**Pour un chauffage d'appoint sur un chantier froid.** Ce chauffage électrique demande un raccordement 400 V adapté. Faites vérifier à l'avance si l'alimentation disponible correspond à la puissance de raccordement.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Lievegem",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Lievegem, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Lievegem",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["eeklo", "evergem", "aalter", "maldegem"],
    faq: [
      {
        q: "Comment organiser une livraison à Lievegem ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Lievegem, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Un déshumidificateur résout-il un problème d'humidité persistant ?",
        a: "Un déshumidificateur de chantier aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou l'absence de barrière contre l'humidité. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que l'appareil fonctionne.",
      },
      {
        q: "Quelle alimentation électrique me faut-il ?",
        a: "La puissance de raccordement diffère selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Lievegem ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  zelzate: {
    slug: "zelzate",
    title: "Déshumidificateur de chantier à louer à Zelzate | Vernast",
    description:
      "Déshumidificateur à louer à Zelzate : livraison, installation et reprise comprises dans votre pack de séchage Vernast. Conseil pour neuf et rénovation.",
    h1: "Location de déshumidificateur de chantier à Zelzate",
    kicker: "Zelzate · livraison sur votre chantier",
    rit: { afstand: "environ 50 km", tijd: "environ quarante-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Zelzate pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Zelzate",
      alineas: [
        "Vernast livre à Zelzate et dans les localités voisines comme Assenede, Evergem et Sint-Gillis-Waas. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Face à une cave humide ou à une fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
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
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Zelzate",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Zelzate, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Zelzate",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["assenede", "evergem", "sint-gillis-waas", "stekene"],
    faq: [
      {
        q: "Comment organiser une livraison à Zelzate ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Zelzate, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Un déshumidificateur résout-il un problème d'humidité persistant ?",
        a: "Un déshumidificateur de chantier aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou l'absence de barrière contre l'humidité. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que l'appareil fonctionne.",
      },
      {
        q: "Quelle alimentation électrique me faut-il ?",
        a: "La puissance de raccordement diffère selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Zelzate ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  denderleeuw: {
    slug: "denderleeuw",
    title: "Location de déshumidificateur à Denderleeuw | Vernast",
    description:
      "Déshumidificateur à Denderleeuw ? Pack de séchage Vernast avec livraison, installation et reprise. Pour neuf, rénovation et dégâts des eaux.",
    h1: "Location de déshumidificateur de chantier à Denderleeuw",
    kicker: "Denderleeuw · livraison sur votre chantier",
    rit: { afstand: "environ 50 km", tijd: "environ quarante-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Denderleeuw pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Denderleeuw",
      alineas: [
        "Vernast livre à Denderleeuw et dans les localités voisines comme Alost, Ninove et Haaltert. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
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
      kop: "Livraison et installation à Denderleeuw",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Denderleeuw, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Denderleeuw",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["aalst", "ninove", "haaltert", "liedekerke"],
    faq: [
      {
        q: "Comment organiser une livraison à Denderleeuw ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Denderleeuw, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Puis-je venir chercher un appareil pour un chantier à Denderleeuw ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  haaltert: {
    slug: "haaltert",
    title: "Déshumidificateur de chantier à Haaltert | Vernast",
    description:
      "Louez un déshumidificateur de chantier à Haaltert : pack de séchage Vernast avec livraison, installation et reprise. Pour chape, plafonnage et dégâts des eaux.",
    h1: "Location de déshumidificateur de chantier à Haaltert",
    kicker: "Haaltert · livraison sur votre chantier",
    rit: { afstand: "environ 52 km", tijd: "environ quarante-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Haaltert pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Haaltert",
      alineas: [
        "Vernast livre à Haaltert et dans les localités voisines comme Alost, Denderleeuw et Ninove. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Face à une cave humide ou à une fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
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
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
      {
        key: "teddh30",
        waarom: "**Pour un chauffage d'appoint sur un chantier froid.** Ce chauffage électrique demande un raccordement 400 V adapté. Faites vérifier à l'avance si l'alimentation disponible correspond à la puissance de raccordement.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Haaltert",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Haaltert, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Haaltert",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["aalst", "denderleeuw", "ninove", "erpe-mere"],
    faq: [
      {
        q: "Comment organiser une livraison à Haaltert ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Haaltert, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Un déshumidificateur résout-il un problème d'humidité persistant ?",
        a: "Un déshumidificateur de chantier aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou l'absence de barrière contre l'humidité. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que l'appareil fonctionne.",
      },
      {
        q: "Quelle alimentation électrique me faut-il ?",
        a: "La puissance de raccordement diffère selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Haaltert ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  "erpe-mere": {
    slug: "erpe-mere",
    title: "Déshumidificateur de chantier à louer à Erpe-Mere | Vernast",
    description:
      "Déshumidificateur de chantier à Erpe-Mere ? Calculez votre pack de séchage en ligne. Vernast livre, installe et reprend les appareils, aussi à Alost et Lede.",
    h1: "Location de déshumidificateur de chantier à Erpe-Mere",
    kicker: "Erpe-Mere · livraison sur votre chantier",
    rit: { afstand: "environ 50 km", tijd: "environ quarante-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Erpe-Mere pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Erpe-Mere",
      alineas: [
        "Vernast livre à Erpe-Mere et dans les localités voisines comme Alost, Lede et Herzele. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Face à une cave humide ou à une fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
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
      kop: "Livraison et installation à Erpe-Mere",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Erpe-Mere, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Erpe-Mere",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["aalst", "lede", "herzele", "haaltert"],
    faq: [
      {
        q: "Comment organiser une livraison à Erpe-Mere ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Erpe-Mere, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Un déshumidificateur résout-il un problème d'humidité persistant ?",
        a: "Un déshumidificateur de chantier aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou l'absence de barrière contre l'humidité. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que l'appareil fonctionne.",
      },
      {
        q: "Quelle alimentation électrique me faut-il ?",
        a: "La puissance de raccordement diffère selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Erpe-Mere ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  lede: {
    slug: "lede",
    title: "Location de déshumidificateur de chantier à Lede | Vernast",
    description:
      "Séchage de chantier à Lede : neuf, rénovation ou dégâts des eaux. Vernast livre, installe et reprend vos déshumidificateurs. Calculez votre prix en ligne.",
    h1: "Location de déshumidificateur de chantier à Lede",
    kicker: "Lede · livraison sur votre chantier",
    rit: { afstand: "environ 48 km", tijd: "environ quarante-cinq minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Lede pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Lede",
      alineas: [
        "Vernast livre à Lede et dans les localités voisines comme Alost, Erpe-Mere et Wichelen. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Face à une cave humide ou à une fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
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
      kop: "Livraison et installation à Lede",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Lede, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Lede",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["aalst", "erpe-mere", "wichelen", "wetteren"],
    faq: [
      {
        q: "Comment organiser une livraison à Lede ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Lede, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Un déshumidificateur résout-il un problème d'humidité persistant ?",
        a: "Un déshumidificateur de chantier aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou l'absence de barrière contre l'humidité. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que l'appareil fonctionne.",
      },
      {
        q: "Quelle alimentation électrique me faut-il ?",
        a: "La puissance de raccordement diffère selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Lede ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  ninove: {
    slug: "ninove",
    title: "Location de déshumidificateur de chantier à Ninove | Vernast",
    description:
      "Location de déshumidificateur à Ninove et environs, comme Denderleeuw. Pack de séchage Vernast avec livraison, installation et reprise, prix calculé en ligne.",
    h1: "Location de déshumidificateur de chantier à Ninove",
    kicker: "Ninove · livraison sur votre chantier",
    rit: { afstand: "environ 55 km", tijd: "environ cinquante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Ninove pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Ninove",
      alineas: [
        "Vernast livre à Ninove et dans les localités voisines comme Denderleeuw, Haaltert et Grammont. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Face à une cave humide ou à une fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
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
      kop: "Livraison et installation à Ninove",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Ninove, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Ninove",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["denderleeuw", "haaltert", "geraardsbergen", "roosdaal"],
    faq: [
      {
        q: "Comment organiser une livraison à Ninove ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Ninove, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Un déshumidificateur résout-il un problème d'humidité persistant ?",
        a: "Un déshumidificateur de chantier aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou l'absence de barrière contre l'humidité. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que l'appareil fonctionne.",
      },
      {
        q: "Quelle alimentation électrique me faut-il ?",
        a: "La puissance de raccordement diffère selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Ninove ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  geraardsbergen: {
    slug: "geraardsbergen",
    title: "Déshumidificateur de chantier à louer à Grammont | Vernast",
    description:
      "Chape, plafonnage ou dégâts des eaux à Grammont ? Vernast loue des déshumidificateurs de chantier, livrés, installés et repris. Calculez votre pack en ligne.",
    h1: "Location de déshumidificateur de chantier à Grammont",
    kicker: "Grammont · livraison sur votre chantier",
    rit: { afstand: "environ 65 km", tijd: "environ une heure" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Grammont pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Grammont",
      alineas: [
        "Vernast livre à Grammont et dans les localités voisines comme Ninove, Lierde et Brakel. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Face à une cave humide ou à une fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
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
      kop: "Livraison et installation à Grammont",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Grammont, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Grammont",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["ninove", "lierde", "brakel", "herzele"],
    faq: [
      {
        q: "Comment organiser une livraison à Grammont ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Grammont, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Un déshumidificateur résout-il un problème d'humidité persistant ?",
        a: "Un déshumidificateur de chantier aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou l'absence de barrière contre l'humidité. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que l'appareil fonctionne.",
      },
      {
        q: "Quelle alimentation électrique me faut-il ?",
        a: "La puissance de raccordement diffère selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Grammont ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  herzele: {
    slug: "herzele",
    title: "Louer un déshumidificateur de chantier à Herzele | Vernast",
    description:
      "Déshumidificateur à louer à Herzele : livraison, installation et reprise comprises dans votre pack de séchage Vernast. Conseil pour neuf et rénovation.",
    h1: "Location de déshumidificateur de chantier à Herzele",
    kicker: "Herzele · livraison sur votre chantier",
    rit: { afstand: "environ 58 km", tijd: "environ cinquante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Herzele pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Herzele",
      alineas: [
        "Vernast livre à Herzele et dans les localités voisines comme Sint-Lievens-Houtem, Zottegem et Erpe-Mere. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Face à une cave humide ou à une fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
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
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Herzele",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Herzele, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Herzele",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["sint-lievens-houtem", "zottegem", "erpe-mere", "geraardsbergen"],
    faq: [
      {
        q: "Comment organiser une livraison à Herzele ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Herzele, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Un déshumidificateur résout-il un problème d'humidité persistant ?",
        a: "Un déshumidificateur de chantier aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou l'absence de barrière contre l'humidité. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que l'appareil fonctionne.",
      },
      {
        q: "Quelle alimentation électrique me faut-il ?",
        a: "La puissance de raccordement diffère selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Herzele ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  "sint-lievens-houtem": {
    slug: "sint-lievens-houtem",
    title: "Location de déshumidificateur à Sint-Lievens-Houtem",
    description:
      "Déshumidificateur à Sint-Lievens-Houtem ? Pack de séchage Vernast avec livraison, installation et reprise. Pour neuf, rénovation et dégâts des eaux.",
    h1: "Location de déshumidificateur de chantier à Sint-Lievens-Houtem",
    kicker: "Sint-Lievens-Houtem · livraison sur votre chantier",
    rit: { afstand: "environ 57 km", tijd: "environ cinquante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Sint-Lievens-Houtem pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Sint-Lievens-Houtem",
      alineas: [
        "Vernast livre à Sint-Lievens-Houtem et dans les localités voisines comme Herzele, Oosterzele et Zottegem. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Face à une cave humide ou à une fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
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
        key: "ttv4500",
        waarom: "**Pour la circulation de l'air à côté du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur.",
      },
      {
        key: "ttk350",
        waarom: "**Pour de plus grandes pièces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et des matériaux humides. La disposition de votre chantier détermine où les appareils seront placés.",
      },
      {
        key: "teddh30",
        waarom: "**Pour un chauffage d'appoint sur un chantier froid.** Ce chauffage électrique demande un raccordement 400 V adapté. Faites vérifier à l'avance si l'alimentation disponible correspond à la puissance de raccordement.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Sint-Lievens-Houtem",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Sint-Lievens-Houtem, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Sint-Lievens-Houtem",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["herzele", "oosterzele", "zottegem", "wetteren"],
    faq: [
      {
        q: "Comment organiser une livraison à Sint-Lievens-Houtem ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Sint-Lievens-Houtem, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Un déshumidificateur résout-il un problème d'humidité persistant ?",
        a: "Un déshumidificateur de chantier aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou l'absence de barrière contre l'humidité. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que l'appareil fonctionne.",
      },
      {
        q: "Quelle alimentation électrique me faut-il ?",
        a: "La puissance de raccordement diffère selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Sint-Lievens-Houtem ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  dendermonde: {
    slug: "dendermonde",
    title: "Location de déshumidificateur à Termonde | Vernast",
    description:
      "Louez un déshumidificateur de chantier à Termonde : pack de séchage Vernast avec livraison, installation et reprise. Pour chape, plafonnage et dégâts des eaux.",
    h1: "Location de déshumidificateur de chantier à Termonde",
    kicker: "Termonde · livraison sur votre chantier",
    rit: { afstand: "environ 40 km", tijd: "environ quarante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Termonde pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Termonde",
      alineas: [
        "Vernast livre à Termonde et dans les localités voisines comme Lebbeke, Buggenhout et Hamme. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Face à une cave humide ou à une fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
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
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Termonde",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Termonde, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Termonde",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["lebbeke", "buggenhout", "hamme", "zele"],
    faq: [
      {
        q: "Comment organiser une livraison à Termonde ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Termonde, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Un déshumidificateur résout-il un problème d'humidité persistant ?",
        a: "Un déshumidificateur de chantier aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou l'absence de barrière contre l'humidité. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que l'appareil fonctionne.",
      },
      {
        q: "Quelle alimentation électrique me faut-il ?",
        a: "La puissance de raccordement diffère selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Termonde ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
  hamme: {
    slug: "hamme",
    title: "Location de déshumidificateur de chantier à Hamme | Vernast",
    description:
      "Déshumidificateur de chantier à Hamme ? Calculez votre pack de séchage en ligne. Vernast livre, installe et reprend les appareils, aussi à Termonde et Zele.",
    h1: "Location de déshumidificateur de chantier à Hamme",
    kicker: "Hamme · livraison sur votre chantier",
    rit: { afstand: "environ 37 km", tijd: "environ quarante minutes" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Hamme pour une construction neuve, une rénovation ou des dégâts des eaux ? Chez Vernast, vous louez des déshumidificateurs pour sécher une chape, un plafonnage et des pièces humides. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Calculez votre prix de location en ligne ou appelez-nous pour vous aider à choisir les bons appareils.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Hamme",
      alineas: [
        "Vernast livre à Hamme et dans les localités voisines comme Termonde, Zele et Waasmunster. Indiquez dans votre demande l'adresse complète du chantier et la personne qui peut nous accueillir sur place. Nous pouvons ainsi convenir à l'avance de la livraison et de l'installation.",
        "Face à une cave humide ou à une fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
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
        key: "ttk650",
        waarom: "**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Hamme",
      alinea: "**Avec votre pack de séchage, la livraison, l'installation et la reprise sont comprises.** Indiquez l'adresse à Hamme, la date de début souhaitée et l'accessibilité. Signalez à l'avance un étage sans escalier fixe, un passage étroit ou un stationnement limité. Le technicien installe les appareils et vous explique comment utiliser le dispositif et contrôler l'évacuation des condensats. La livraison convenue figure dans votre réservation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Hamme",
      alinea: "Vous pouvez retirer un appareil seul sur rendez-vous chez Vernast, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance**, pour que le bon appareil soit prêt. Consultez les tarifs d'enlèvement et tenez compte à la fois de l'aller et du retour de l'appareil. Vérifiez les dimensions et le poids, et suivez les instructions de transport. En cas de doute sur le dispositif ou si vous avez besoin de plusieurs appareils, discutez d'un pack de séchage avec installation.",
    },
    buren: ["dendermonde", "zele", "waasmunster", "temse"],
    faq: [
      {
        q: "Comment organiser une livraison à Hamme ?",
        a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Hamme, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
        q: "Un déshumidificateur résout-il un problème d'humidité persistant ?",
        a: "Un déshumidificateur de chantier aide à évacuer l'humidité, mais il ne répare pas une fuite, une infiltration d'eau ou l'absence de barrière contre l'humidité. Faites d'abord rechercher la cause. Si de l'eau continue d'entrer, le matériau peut à nouveau se mouiller, même pendant que l'appareil fonctionne.",
      },
      {
        q: "Quelle alimentation électrique me faut-il ?",
        a: "La puissance de raccordement diffère selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Hamme ?",
        a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
      },
    ],
    realisaties: [],
  },
};
