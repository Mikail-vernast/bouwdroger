import type { Gemeente } from "../gemeenten.js";

/**
 * De Franse teksten van de gemeentepagina's in deze provincie, gesleuteld op
 * de Nederlandse slug. Zie README.md in deze map voor de regels en hoe een
 * gemeente aangezet wordt (`aan/waals-brabant.ts`).
 */
export const GEMEENTEN: Record<string, Gemeente> = {
  waver: {
    slug: "waver",
    title: "Déshumidificateur de chantier à louer à Wavre | Vernast",
    description:
      "Louer un déshumidificateur à Wavre ? Vernast livre sur rendez-vous un pack de séchage avec installation et reprise, pour maison, appartement ou commerce.",
    h1: "Location de déshumidificateur de chantier à Wavre",
    kicker: "Wavre · livraison sur rendez-vous",
    rit: { afstand: "environ 62 km", tijd: "environ cinquante minutes" },
    intro: [
      "Une nouvelle chape, un plafonnage frais ou des dégâts des eaux à faire sécher à Wavre ? Vernast loue des déshumidificateurs de chantier et des ventilateurs et compose avec eux un pack de séchage adapté à votre chantier. **La livraison, l'installation et la reprise sont comprises.**",
      "Wavre se trouve à environ cinquante minutes de notre entrepôt d'Aartselaar. Lors de la réservation, vous choisissez une date de livraison, et nous fixons ensuite le moment exact de la livraison à Wavre par téléphone ou par e-mail.",
    ],
    bouw: {
      kop: "Le séchage de votre projet à Wavre",
      alineas: [
        "Chef-lieu du Brabant wallon, Wavre compte, à côté de ses quartiers résidentiels, des immeubles à appartements, des commerces et des bureaux. Indiquez dans votre demande le type de bâtiment, l'étage et la présence ou non d'un ascenseur. Dans un immeuble partagé, mieux vaut convenir à l'avance de qui nous ouvrira.",
        "Un grand espace ouvert sèche autrement qu'une enfilade de petites pièces. Dans un plan ouvert, un seul déshumidificateur puissant avec un ventilateur peut suffire ; des pièces fermées demandent un dispositif réparti. **Expliquez-nous comment les pièces communiquent entre elles**, et nous adapterons le pack en conséquence.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**Pour un bureau, un commerce ou un grand étage ouvert.** Avec 110 litres par jour et une portée jusqu'à 600 m³, c'est le déshumidificateur à condensation le plus puissant de notre gamme. Il consomme 1,4 kW.",
      },
      {
        key: "radiaal2250",
        waarom: "**Pour un flux d'air ciblé le long d'un sol ou d'un mur humide.** Le ventilateur radial déplace 2 250 m³ par heure et résiste aux projections d'eau (IP55). Il accélère l'évaporation, le déshumidificateur capte l'humidité.",
      },
      {
        key: "ttk350",
        waarom: "**Pour une maison unifamiliale ou un appartement.** Jusqu'à 70 litres par jour et adapté aux pièces jusqu'à 400 m³. Le déshumidificateur fonctionne sur une prise de courant standard.",
      },
      {
        key: "ttk170",
        waarom: "**Pour une seule pièce ou une petite surface commerciale.** Ce déshumidificateur compact convient aux pièces jusqu'à 250 m³, avec un rendement jusqu'à 50 litres par jour.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Wavre",
      alinea:
        "**La livraison, l'installation et la reprise font partie de votre pack de séchage.** Vous indiquez une date de livraison lors de la réservation ; comme Wavre se trouve en Wallonie, nous fixons ensuite un rendez-vous pour l'heure précise. Depuis Aartselaar, nous sommes en route environ cinquante minutes. Faites-nous savoir à l'avance s'il y a une zone de chargement ou une place de stationnement devant la porte. Le technicien installe tout et explique comment suivre l'évacuation des condensats.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Wavre",
      alinea:
        "L'enlèvement est aussi possible : sur rendez-vous à notre entrepôt, Boomsesteenweg 12, unit 11 à Aartselaar. Depuis Wavre, cela représente chaque fois environ cinquante minutes de route, à l'enlèvement et au retour. **Réservez à l'avance** et comparez les dimensions de l'appareil avec votre coffre. Pour un bâtiment plus grand, la livraison avec installation est le choix le plus simple.",
    },
    buren: ["rixensart", "ottignies-louvain-la-neuve", "chaumont-gistoux", "graven"],
    faq: [
      {
        q: "Mon commerce à Wavre peut-il rester ouvert pendant le séchage ?",
        a: "Souvent oui, si nous savons à l'avance quelles zones restent en service. Nous plaçons alors les appareils en dehors des zones de passage et tenons compte des prises disponibles. Parlez-nous de votre planning et de vos heures d'ouverture lors de votre demande.",
      },
      {
        q: "Comment organiser la livraison à Wavre ?",
        a: "Réservez en ligne et choisissez une date de livraison. Nous vous contactons ensuite pour fixer le moment de livraison, car en Wallonie nous livrons sur rendez-vous. Gardez sous la main l'adresse du chantier et l'étage.",
      },
      {
        q: "Combien d'appareils faut-il pour un étage ouvert ?",
        a: "Cela dépend du volume et de la quantité d'humidité dans le sol et les murs. Pour un espace ouvert jusqu'à 600 m³, un grand déshumidificateur avec un ventilateur peut suffire. Le calculateur donne une première proposition, et nous la vérifions volontiers.",
      },
      {
        q: "De quel courant les appareils ont-ils besoin ?",
        a: "Les déshumidificateurs et les ventilateurs fonctionnent en 230 V, donc sur une prise standard. Répartissez plusieurs appareils sur différents circuits électriques. Les chauffages de chantier de 20 ou 30 kW demandent un raccordement triphasé de 400 V.",
      },
      {
        q: "Comment savoir si le plafonnage est prêt à être peint ?",
        a: "Une surface sèche en dit peu sur l'humidité plus profonde dans le mur. Demandez à votre peintre une mesure d'humidité et respectez la valeur indiquée par le fabricant de peinture. Ce n'est qu'alors que le plafonnage est prêt pour la finition.",
      },
    ],
    realisaties: [],
  },
  nijvel: {
    slug: "nijvel",
    title: "Location de déshumidificateur à Nivelles | Vernast",
    description:
      "Déshumidificateur à louer à Nivelles : livré sur rendez-vous, installé et repris par Vernast. Pour une maison de ville, une chape ou des dégâts des eaux.",
    h1: "Location de déshumidificateur de chantier à Nivelles",
    kicker: "Nivelles · livraison sur rendez-vous",
    rit: { afstand: "environ 70 km", tijd: "environ une heure" },
    intro: [
      "Nivelles est la ville de la collégiale Sainte-Gertrude, dans le Brabant wallon. Le centre-ville compte des maisons mitoyennes anciennes, et au-delà des lotissements et des constructions neuves. Pour les unes comme pour les autres, Vernast loue des déshumidificateurs de chantier et des ventilateurs pour sécher la chape, le plafonnage et les murs humides.",
      "Le trajet d'Aartselaar à Nivelles dure environ une heure. En Wallonie, nous livrons **sur rendez-vous** : vous choisissez une date de livraison lors de la réservation, et nous vous appelons ensuite pour l'heure. La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.",
    ],
    bouw: {
      kop: "Rénover une maison ancienne à Nivelles",
      alineas: [
        "Qui rénove une maison ancienne décroche souvent le plafonnage, coule une nouvelle chape et pose de nouveaux châssis. Ces châssis ferment mieux que les anciens, si bien que l'humidité des travaux s'évacue moins facilement. Un déshumidificateur la capte avant qu'elle n'apparaisse en condensation sur les vitres ou en moisissures dans les coins.",
        "Dans une maison mitoyenne, pensez à l'accès : une façade étroite, un escalier raide ou pas de stationnement devant la porte. **Signalez-le lors de la réservation**, et le technicien en tiendra compte. Après les travaux, faites mesurer l'humidité résiduelle avant de peindre ou de poser un parquet.",
      ],
    },
    toestellen: [
      {
        key: "ttk350",
        waarom: "**Pour une maison mitoyenne que vous rénovez entièrement.** Ce déshumidificateur à condensation retire jusqu'à 70 litres d'humidité par jour dans des pièces jusqu'à environ 400 m³ et consomme 1,1 kW.",
      },
      {
        key: "revolution",
        waarom: "**Pour une cave humide ou une pièce non chauffée.** Ce déshumidificateur à adsorption fonctionne aussi dans le froid et sèche, par des gaines, l'humidité sous un sol ou derrière une contre-cloison.",
      },
      {
        key: "ttk170",
        waarom: "**Pour une salle de bains ou une seule chambre.** Compact, jusqu'à 50 litres par jour, pour des pièces jusqu'à environ 250 m³. Il fonctionne sur une prise standard et consomme 0,75 kW.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour faire sécher plus vite un plafonnage frais.** Le ventilateur déplace 4 500 m³ d'air par heure le long des murs et ne consomme que 0,2 kW. L'humidité qu'il libère, le déshumidificateur la capte.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Nivelles",
      alinea:
        "**À Nivelles, la livraison se fait sur rendez-vous.** Lors de la réservation, vous choisissez la date, puis nous vous appelons pour fixer l'heure. Notre technicien est en route environ une heure depuis Aartselaar. Indiquez s'il est possible de stationner devant la porte et si les appareils doivent monter un escalier étroit. Il installe les appareils, les met en marche et explique comment contrôler l'évacuation des condensats.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Nivelles",
      alinea:
        "Pour un seul appareil, vous pouvez venir vous-même sur rendez-vous à notre entrepôt, Boomsesteenweg 12, unit 11 à Aartselaar. Depuis Nivelles, cela représente environ une heure de route, et autant pour le retour avec l'appareil. **Réservez à l'avance** pour que nous le préparions. Si vous avez besoin de plusieurs appareils, la livraison avec installation vous épargne ces trajets.",
    },
    buren: ["eigenbrakel", "itter", "genepien"],
    faq: [
      {
        q: "Comment se déroule la livraison à Nivelles ?",
        a: "Vous réservez en ligne et indiquez une date de livraison. Nous convenons ensuite de l'heure par téléphone, comme partout en Wallonie. Veillez à ce que quelqu'un soit présent ce jour-là pour laisser entrer le technicien et lui montrer le chantier.",
      },
      {
        q: "Pourquoi mes nouveaux châssis se couvrent-ils de buée après la rénovation ?",
        a: "Un nouveau plafonnage et une chape fraîche dégagent de l'humidité pendant des semaines. Les nouveaux châssis gardent cet air humide à l'intérieur, et il se condense sur le vitrage froid. Un déshumidificateur retire l'humidité de l'air avant qu'elle ne provoque des moisissures.",
      },
      {
        q: "Un déshumidificateur fonctionne-t-il dans une maison non chauffée ?",
        a: "Un déshumidificateur à condensation préfère une température supérieure à 15 °C. Dans une maison froide et non chauffée, mieux vaut un déshumidificateur à adsorption, ou réchauffer la pièce avec un chauffage de chantier. La chaleur accélère en outre le séchage de la chape et du plafonnage.",
      },
      {
        q: "Quand puis-je peindre sur un nouveau plafonnage ?",
        a: "Seulement quand le plafonnage est sec aussi en profondeur. Une teinte claire en surface ne le prouve pas. Faites faire une mesure d'humidité et suivez l'avis de votre peintre ou du fournisseur de peinture sur l'humidité résiduelle admise.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Nivelles ?",
        a: "Oui, vous pouvez venir le chercher sur rendez-vous à Aartselaar. Depuis Nivelles, comptez environ une heure de route dans chaque sens. Réservez à l'avance et demandez lors de l'enlèvement comment transporter l'appareil en toute sécurité.",
      },
    ],
    realisaties: [],
  },
};
