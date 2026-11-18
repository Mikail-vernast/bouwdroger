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

  bevekom: {
    slug: "bevekom",
    title: "Louer un déshumidificateur à Beauvechain | Vernast",
    description:
      "Déshumidificateur à louer à Beauvechain : séchage après la rénovation d'une ferme, une construction neuve ou dans une maison habitée. Livraison sur rendez-vous.",
    h1: "Location de déshumidificateur de chantier à Beauvechain",
    kicker: "Brabant wallon · à la frontière linguistique",
    rit: { afstand: "environ 60 km", tijd: "environ une heure" },
    intro: [
      "**Beauvechain** se trouve au nord-est du Brabant wallon et touche Bierbeek, Boutersem et Hoegaarden. La commune compte notamment Hamme-Mille, Nodebais, Tourinnes-la-Grosse et L'Écluse. En dehors de la région, on connaît surtout Beauvechain pour sa base aérienne.",
      "Depuis Aartselaar, nous mettons **environ une heure** pour rejoindre Beauvechain. Nous livrons dans chaque village de la commune, et comme partout en Wallonie, sur rendez-vous.",
    ],
    bouw: {
      kop: "Fermes, maisons de village et nouveaux lotissements",
      alineas: [
        "Qui transforme **une ancienne ferme ou une grange** en habitation doit faire sécher des murs épais et un nouveau sol dans des espaces restés longtemps non chauffés. Dans un local aussi froid, un déshumidificateur à adsorption retire plus d'humidité qu'un déshumidificateur à condensation. Un ventilateur garde l'air en mouvement dans une grange haute, pour qu'aucun coin humide ne subsiste.",
        "Dans les quartiers plus récents, il s'agit le plus souvent d'une construction neuve ou d'une extension avec une chape fraîche. Si vous continuez à habiter la maison pendant qu'une seule pièce sèche, **un déshumidificateur compact** qui prend peu de place suffit souvent.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**Pour une ferme rénovée aux grands volumes.** Ce déshumidificateur retire jusqu'à 110 litres par jour de l'air, dans des pièces jusqu'à environ 600 m³.",
      },
      {
        key: "ttv4500",
        waarom: "Dans une grange haute, l'air humide reste en bas. Ce ventilateur déplace 4 500 m³ d'air par heure et le brasse, pour que le déshumidificateur puisse le capter.",
      },
      {
        key: "revolution",
        waarom: "**Pour des murs anciens et froids.** Ce déshumidificateur à adsorption continue d'absorber l'humidité à basse température et sèche aussi, par des gaines, un espace fermé.",
      },
      {
        key: "ttk170",
        waarom: "**Pour une seule pièce dans une maison habitée.** Ce déshumidificateur compact retire 50 litres par jour de l'air et fonctionne sur une prise de courant standard.",
      },
    ],
    levering: {
      kop: "Livraison à Beauvechain sur rendez-vous",
      alinea:
        "D'Aartselaar à Beauvechain, nous roulons **environ une heure**. Vous fixez la date de livraison lors de la réservation, et nous vous appelons pour convenir de l'heure. Le technicien installe les appareils, place le tuyau d'évacuation vers un point d'écoulement et mesure l'humidité du sol et des murs. La reprise est elle aussi comprise dans votre pack de séchage.",
    },
    afhalen: {
      kop: "Venir chercher vous-même à Aartselaar",
      alinea:
        "L'enlèvement est possible sur rendez-vous, Boomsesteenweg 12, unit 11 à Aartselaar. Depuis Beauvechain, vous roulez **environ une heure**, et ce trajet, vous le faites deux fois. Pour le déshumidificateur compact, l'enlèvement peut être un bon choix. Pour une ferme avec plusieurs appareils, mieux vaut la livraison avec installation.",
    },
    buren: ["graven", "geldenaken", "bierbeek", "boutersem", "hoegaarden"],
    faq: [
      {
        q: "Un déshumidificateur peut-il sécher une grange transformée ?",
        a: "Oui, mais une grange est haute et souvent froide. Un déshumidificateur à adsorption y fonctionne mieux qu'un déshumidificateur à condensation, de préférence avec un ventilateur. Communiquez-nous les dimensions et dites-nous s'il y a déjà un chauffage, et nous composerons le dispositif.",
      },
      {
        q: "Le déshumidificateur compact peut-il rester dans une chambre pendant que nous sommes à la maison ?",
        a: "Oui. Il fonctionne sur une prise standard et prend peu de place. Fermez la porte et les fenêtres de la pièce à sécher, sinon il sèche aussi l'air de toute la maison et le séchage dure plus longtemps.",
      },
      {
        q: "Les taches d'humidité au bas du vieux mur reviendront-elles après le séchage ?",
        a: "S'il s'agit d'humidité ascensionnelle, oui. Un vieux mur sans barrière d'étanchéité aspire l'eau du sol, et un déshumidificateur ne l'en empêche pas. La mesure d'humidité lors de l'installation montre s'il s'agit d'humidité de construction ou d'humidité ascensionnelle.",
      },
      {
        q: "Combien de temps une nouvelle chape doit-elle sécher ?",
        a: "Cela dépend de l'épaisseur, du type de chape, de la température et de la ventilation. C'est pourquoi nous n'avançons pas de délai fixe. Une mesure d'humidité indique quand le sol est prêt pour le carrelage, le parquet ou le vinyle.",
      },
    ],
    realisaties: [],
  },

  chastre: {
    slug: "chastre",
    title: "Déshumidificateur de chantier à louer à Chastre | Vernast",
    description:
      "Louer un déshumidificateur à Chastre ? Vernast livre sur rendez-vous, installe les appareils et les reprend. Conseils pour neuf, rénovation ou chantier froid.",
    h1: "Location de déshumidificateur de chantier à Chastre",
    kicker: "Chastre · livraison sur rendez-vous",
    rit: { afstand: "environ 80 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Vous construisez ou rénovez à Chastre, et une chape ou un plafonnage doit sécher ? Chez Vernast, vous louez déshumidificateurs de chantier, ventilateurs et chauffages de chantier en un seul pack. **La livraison, l'installation et la reprise sont comprises.**",
      "Chastre se trouve à un peu plus d'une heure de notre entrepôt d'Aartselaar. Vous choisissez une date de livraison lors de la réservation ; pour une livraison en Wallonie, nous convenons ensuite de l'heure avec vous.",
    ],
    bouw: {
      kop: "Le séchage de votre projet à Chastre",
      alineas: [
        "Chastre est une commune rurale entre Mont-Saint-Guibert, Walhain et Villers-la-Ville. Pour une construction neuve ou une maison quatre façades, il est utile de nous dire si l'allée est déjà stabilisée et où nous pouvons nous arrêter. Notez aussi qui nous accueillera sur le chantier.",
        "Sur un chantier neuf, il n'y a parfois pas encore de chauffage. **En dessous de 15 °C, un déshumidificateur à condensation sèche lentement**, et un chauffage de chantier électrique de 20 kW peut alors amener la pièce à température. Ce chauffage demande toutefois du courant triphasé de 400 V ; demandez à votre électricien si le coffret de chantier le permet.",
      ],
    },
    toestellen: [
      {
        key: "ttk350",
        waarom: "**Pour une maison neuve avec une chape fraîche.** Il retire 70 litres par jour dans des pièces jusqu'à 400 m³. Placez-le au centre et laissez les portes intérieures ouvertes : il sèche alors plusieurs pièces.",
      },
      {
        key: "teddh20",
        waarom: "**Pour un appoint de chaleur sur un chantier froid.** Ce chauffage de chantier électrique fournit 20 kW en 400 V. La chaleur aide au séchage, mais c'est le déshumidificateur qui capte l'humidité.",
      },
      {
        key: "ttk650",
        waarom: "**Pour une grande maison ou un étage ouvert.** Jusqu'à 110 litres par jour dans des volumes jusqu'à 600 m³, pour une consommation de 1,4 kW.",
      },
      {
        key: "radiaal2250",
        waarom: "**Pour faire circuler l'air sur la chape.** Le ventilateur radial déplace 2 250 m³ par heure et résiste aux projections d'eau (IP55). Sa prise supplémentaire permet de raccorder un deuxième appareil en série.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Chastre",
      alinea:
        "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Après votre réservation avec date de livraison, nous vous contactons pour fixer l'heure de la livraison à Chastre. Depuis Aartselaar, nous sommes en route un peu plus d'une heure. Signalez à l'avance si le chantier a déjà du courant et s'il dispose du triphasé pour un chauffage. Le technicien installe tout et vous explique comment suivre le déshumidificateur.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Chastre",
      alinea:
        "Un appareil seul se retire sur rendez-vous, Boomsesteenweg 12, unit 11 à Aartselaar. Depuis Chastre, cela représente un peu plus d'une heure de route dans chaque sens, à l'enlèvement comme au retour. **Réservez à l'avance** et comparez le poids et les dimensions avec votre véhicule. Pour toute une construction neuve, un pack avec livraison est généralement plus pratique.",
    },
    buren: ["villers-la-ville", "mont-saint-guibert", "walhain"],
    faq: [
      {
        q: "Puis-je sécher un chantier sans chauffage ?",
        a: "Oui, mais dans le froid, un déshumidificateur à condensation travaille lentement. Un chauffage de chantier électrique amène la pièce à température, à condition de disposer d'un raccordement de 400 V. Parlez-nous de la température sur votre chantier lors de votre demande.",
      },
      {
        q: "Comment organiser une livraison à Chastre ?",
        a: "Faites votre réservation en ligne et indiquez une date de livraison. Comme Chastre se trouve en Wallonie, nous convenons ensuite d'une heure. Communiquez l'adresse, l'accès au chantier et les raccordements électriques disponibles.",
      },
      {
        q: "Quand puis-je commencer à sécher après le coulage de la chape ?",
        a: "Suivez pour cela les prescriptions de votre fournisseur de chape ou de votre entrepreneur. Certaines chapes doivent d'abord durcir quelques jours au calme avant qu'un déshumidificateur n'entre en jeu. Indiquez-nous la date du coulage, et nous en tiendrons compte.",
      },
      {
        q: "Combien de déshumidificateurs faut-il pour une construction neuve ?",
        a: "Cela dépend du volume de la maison, de l'épaisseur de la chape et de la température. Le calculateur fait une première proposition sur la base de vos données. Pour un chantier grand ou froid, nous la vérifions volontiers avec vous.",
      },
      {
        q: "Comment savoir si le sol est prêt pour la finition ?",
        a: "Une surface sèche ne dit rien de l'humidité au fond de la chape. Demandez à votre poseur de faire une mesure d'humidité et attendez que la valeur requise pour votre revêtement de sol soit atteinte.",
      },
    ],
    realisaties: [],
  },

  "chaumont-gistoux": {
    slug: "chaumont-gistoux",
    title: "Location de déshumidificateur à Chaumont-Gistoux | Vernast",
    description:
      "Déshumidificateur à louer à Chaumont-Gistoux : séchage après la rénovation d'une maison, une nouvelle chape ou des dégâts des eaux. Livraison sur rendez-vous.",
    h1: "Location de déshumidificateur de chantier à Chaumont-Gistoux",
    kicker: "Brabant wallon · à l'est de Wavre",
    rit: { afstand: "environ 65 km", tijd: "environ une heure" },
    intro: [
      "Chaumont-Gistoux se trouve à l'est de Wavre, au cœur verdoyant du Brabant wallon. La commune compte notamment Bonlez, Corroy-le-Grand, Dion-Valmont et Longueville, avec de nombreuses maisons quatre façades entre bois et champs.",
      "Nous livrons des déshumidificateurs de chantier dans tous les villages de la commune. Depuis notre entrepôt d'Aartselaar, nous mettons **environ une heure** pour y arriver. En Wallonie, la livraison et l'installation se font sur rendez-vous.",
    ],
    bouw: {
      kop: "Maisons quatre façades, grandes rénovations",
      alineas: [
        "Une maison quatre façades entièrement rénovée reçoit souvent en une fois **une nouvelle chape sur tout le rez-de-chaussée** et un nouveau plafonnage sur les murs. Cela fait beaucoup d'eau dans un seul volume. Un grand déshumidificateur au centre et un ventilateur qui fait circuler l'air au-dessus du sol l'évacuent plus vite que des appareils séparés dans chaque pièce.",
        "Si les travaux ont lieu en hiver et que le chauffage n'est pas encore en service, une maison vide se refroidit vite. Un déshumidificateur à condensation ne fonctionne bien qu'au-dessus de 15 °C. Un chauffage de chantier électrique maintient la pièce à température, à condition qu'il y ait **un raccordement de 400 V** sur le chantier.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**Pour un rez-de-chaussée entièrement rénové.** Ce déshumidificateur retire jusqu'à 110 litres d'eau par jour de l'air et est conçu pour des pièces jusqu'à environ 600 m³.",
      },
      {
        key: "ttk350",
        waarom: "Pour un étage ou une partie fermée de la maison, ce déshumidificateur suffit souvent : jusqu'à 70 litres par jour, dans des pièces jusqu'à environ 400 m³.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour un grand plateau ouvert.** Le ventilateur déplace 4 500 m³ d'air par heure au-dessus d'une chape fraîche. Il ne sèche pas lui-même, il aide le déshumidificateur.",
      },
      {
        key: "teddh30",
        waarom: "**Pour un chantier froid en hiver.** Ce chauffage de chantier électrique fournit 30 kW et demande du courant triphasé (400 V). Demandez à l'avance à votre électricien si le raccordement le permet.",
      },
    ],
    levering: {
      kop: "Livraison à Chaumont-Gistoux sur rendez-vous",
      alinea:
        "Depuis Aartselaar, nous mettons **environ une heure** pour rejoindre Chaumont-Gistoux. Vous choisissez la date de livraison lors de la réservation ; l'heure de livraison, nous la convenons ensuite avec vous. Sur place, le technicien installe les appareils, raccorde l'évacuation et effectue une mesure d'humidité. La livraison, l'installation et la reprise font partie de votre pack de séchage.",
    },
    afhalen: {
      kop: "Venir chercher vous-même à Aartselaar",
      alinea:
        "Vous pouvez retirer les appareils sur rendez-vous à notre entrepôt, Boomsesteenweg 12, unit 11 à Aartselaar. Depuis Chaumont-Gistoux, cela représente **environ une heure de route**, à l'aller pour l'enlèvement et à nouveau pour le retour. Pour un seul déshumidificateur, cela peut valoir la peine. Pour une maison avec plusieurs appareils et un chauffage de chantier, mieux vaut la livraison.",
    },
    buren: ["waver", "graven", "incourt", "walhain"],
    faq: [
      {
        q: "Combien de déshumidificateurs faut-il pour une maison entièrement rénovée ?",
        a: "Cela dépend du volume et de la quantité de chape et de plafonnage encore humides. Pour un rez-de-chaussée ouvert, un grand déshumidificateur avec un ventilateur suffit souvent. Des pièces fermées à l'étage demandent parfois un appareil de plus. Communiquez-nous la surface et la hauteur, et nous composerons le pack.",
      },
      {
        q: "Pourquoi un déshumidificateur fonctionne-t-il mal dans une maison froide ?",
        a: "Un déshumidificateur à condensation refroidit l'air pour en extraire l'eau. Si la pièce est déjà froide, en dessous d'environ 15 °C, il se condense peu d'eau et le rendement baisse. Un chauffage de chantier ou un déshumidificateur à adsorption résout ce problème.",
      },
      {
        q: "De quel raccordement le chauffage de chantier a-t-il besoin ?",
        a: "Le chauffage de 30 kW fonctionne sur du courant triphasé de 400 V, avec une fiche et un fusible adaptés. Une prise standard ne suffit pas. Faites vérifier à l'avance par votre électricien ce que votre coffret de chantier ou votre tableau électrique peut fournir.",
      },
      {
        q: "Quand le parquet peut-il être posé sur la nouvelle chape ?",
        a: "Seulement quand la chape est assez sèche pour le revêtement choisi, et c'est une mesure d'humidité qui le détermine, pas le calendrier. Une surface sèche en dit peu sur le cœur du sol. Convenez de la mesure et de la valeur limite avec votre poseur.",
      },
    ],
    realisaties: [],
  },

  "court-saint-etienne": {
    slug: "court-saint-etienne",
    title: "Louer un déshumidificateur à Court-Saint-Étienne | Vernast",
    description:
      "Déshumidificateur à louer à Court-Saint-Étienne ? Vernast livre votre pack de séchage sur rendez-vous, l'installe et le reprend. Pour cave, chape, plafonnage.",
    h1: "Location de déshumidificateur de chantier à Court-Saint-Étienne",
    kicker: "Court-Saint-Étienne · livraison sur rendez-vous",
    rit: { afstand: "environ 72 km", tijd: "environ une heure" },
    intro: [
      "Une cave inondée à Court-Saint-Étienne, ou une nouvelle chape à faire sécher ? Vernast loue des déshumidificateurs de chantier sous forme de pack complet. **La livraison, l'installation et la reprise sont comprises.**",
      "Notre entrepôt d'Aartselaar se trouve à environ une heure de route. Vous fixez une date de livraison lors de la réservation, et comme le chantier se trouve en Wallonie, nous convenons ensuite d'un rendez-vous pour l'heure.",
    ],
    bouw: {
      kop: "Le séchage de votre projet à Court-Saint-Étienne",
      alineas: [
        "Court-Saint-Étienne se trouve dans la vallée de la Dyle, entre Ottignies-Louvain-la-Neuve et Genappe. Pour une cave humide, le travail commence par la cause : tant que l'eau entre, sécher n'a guère de sens. Faites d'abord réparer la fuite ou l'infiltration et pompez l'eau stagnante.",
        "Ensuite, nous regardons quels matériaux sont mouillés et si l'humidité se trouve aussi sous le sol ou derrière l'enduit. **Une cave froide demande un autre appareil qu'une pièce de vie chauffée.** En dessous de 15 °C, un déshumidificateur à condensation travaille lentement, et nous optons alors pour le déshumidificateur à adsorption.",
      ],
    },
    toestellen: [
      {
        key: "ttk170",
        waarom: "**Pour une buanderie, une salle de bains ou une petite cave.** Ce déshumidificateur à condensation compact convient jusqu'à 250 m³ et retire jusqu'à 50 litres d'eau par jour de l'air.",
      },
      {
        key: "ttk350",
        waarom: "**Pour une maison dont le rez-de-chaussée est mouillé.** Avec 70 litres par jour et une portée jusqu'à 400 m³, il sèche plusieurs pièces à la fois si les portes intérieures restent ouvertes.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour diriger l'air le long des murs et des sols mouillés.** Avec 4 500 m³ par heure, la surface sèche plus vite. Sans déshumidificateur à côté, l'humidité reste toutefois dans la pièce.",
      },
      {
        key: "revolution",
        waarom: "**Pour une cave qui reste froide et humide.** Ce déshumidificateur à adsorption fonctionne aussi à basse température. Avec ses gaines, il sèche de manière ciblée sous un sol.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Court-Saint-Étienne",
      alinea:
        "**La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Choisissez une date de livraison lors de la réservation ; le moment précis de la livraison à Court-Saint-Étienne, nous le fixons ensuite ensemble. Depuis Aartselaar, nous roulons environ une heure. Signalez à l'avance un escalier de cave étroit ou une entrée difficile d'accès. Sur place, le technicien installe tout et vous explique comment évacuer l'eau récupérée.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Court-Saint-Étienne",
      alinea:
        "Un appareil seul, vous pouvez aussi venir le chercher vous-même, sur rendez-vous, Boomsesteenweg 12, unit 11 à Aartselaar. Depuis Court-Saint-Étienne, vous roulez environ une heure, et encore autant pour le retour. **Réservez à l'avance**, pour que l'appareil soit prêt. Après des dégâts des eaux, la livraison avec installation est généralement le meilleur choix, car le dispositif est alors tout de suite correct.",
    },
    buren: ["ottignies-louvain-la-neuve", "mont-saint-guibert", "villers-la-ville", "genepien"],
    faq: [
      {
        q: "Que faire en premier après une inondation dans ma cave ?",
        a: "Arrêtez la cause et évacuez l'eau stagnante. Sortez les objets mouillés de la pièce et notez quels murs et quels sols sont mouillés. Contactez-nous ensuite, et nous vous proposerons un dispositif de séchage adapté à votre cave.",
      },
      {
        q: "Un déshumidificateur résout-il un problème d'humidité dans la cave ?",
        a: "Pas si l'eau continue d'entrer. Un déshumidificateur retire l'humidité de l'air et des matériaux, mais il ne répare ni une fuite, ni une fissure, ni une étanchéité manquante. Faites donc d'abord traiter la cause.",
      },
      {
        q: "Quel déshumidificateur convient à une cave froide ?",
        a: "En dessous de 15 °C, un déshumidificateur à condensation a peu de rendement. Dans une cave non chauffée, nous utilisons donc le déshumidificateur à adsorption, qui continue de fonctionner à basse température.",
      },
      {
        q: "Comment organiser une livraison à Court-Saint-Étienne ?",
        a: "Réservez votre pack et choisissez une date de livraison. Nous vous contactons ensuite pour convenir de l'heure, car en Wallonie nous travaillons sur rendez-vous. Indiquez l'adresse, l'accès à la cave ou à l'étage et les prises disponibles.",
      },
      {
        q: "Quel raccordement électrique faut-il ?",
        a: "Les déshumidificateurs et les ventilateurs fonctionnent sur une prise standard de 230 V. Répartissez-les sur différents circuits si vous en placez plusieurs. Les chauffages de chantier électriques demandent un raccordement de 400 V.",
      },
    ],
    realisaties: [],
  },

  eigenbrakel: {
    slug: "eigenbrakel",
    title: "Déshumidificateur à louer à Braine-l'Alleud | Vernast",
    description:
      "Louer un déshumidificateur à Braine-l'Alleud ? Vernast livre votre pack de séchage sur rendez-vous, même en appartement, l'installe et le reprend ensuite.",
    h1: "Location de déshumidificateur de chantier à Braine-l'Alleud",
    kicker: "Braine-l'Alleud · livraison sur rendez-vous",
    rit: { afstand: "environ 60 km", tijd: "environ cinquante minutes" },
    intro: [
      "Braine-l'Alleud est une ville du Brabant wallon, à côté de Waterloo. On y trouve, à côté des maisons unifamiliales, beaucoup d'appartements, où il faut souvent sécher un seul étage ou un seul logement. Vernast loue des déshumidificateurs de chantier de toutes tailles, de l'appareil compact pour une seule pièce au déshumidificateur pour une grande construction neuve.",
      "Depuis Aartselaar, nous roulons environ cinquante minutes jusqu'à Braine-l'Alleud. Vous choisissez une date de livraison lors de la réservation, et comme nous livrons **sur rendez-vous** en Wallonie, nous vous appelons ensuite pour l'heure. La livraison, l'installation et la reprise font partie de votre pack de séchage.",
    ],
    bouw: {
      kop: "Sécher un appartement ou un étage",
      alineas: [
        "Vous faites sécher un appartement ? Dites-nous à quel étage il se trouve, s'il y a un ascenseur et quelle est la largeur des portes et des couloirs. Dans un immeuble partagé, convenez de qui ouvrira l'accès et de l'endroit où les appareils peuvent être placés. L'installation se déroule ainsi sans encombre et les parties communes restent libres.",
        "Un appartement est généralement bien isolé et fermé. C'est un atout, car un déshumidificateur à condensation fonctionne le mieux dans une pièce chaude et fermée, au-dessus de 15 °C. Gardez fenêtres et portes fermées pendant qu'il tourne, sinon de l'air extérieur humide entre sans cesse. **Videz régulièrement le bac de récupération** ou faites aboutir le tuyau d'évacuation dans un écoulement.",
      ],
    },
    toestellen: [
      {
        key: "ttk170",
        waarom: "**Pour une seule pièce ou un petit studio.** Compact et facile à déplacer, jusqu'à 50 litres par jour et adapté aux pièces jusqu'à environ 250 m³. Il consomme 0,75 kW sur une prise standard.",
      },
      {
        key: "ttk350",
        waarom: "**Pour un appartement entier ou une maison.** Jusqu'à 70 litres d'humidité par jour, pour environ 400 m³, avec une consommation de 1,1 kW. Dans un appartement aux pièces séparées, nous le plaçons au centre et laissons les portes intérieures ouvertes.",
      },
      {
        key: "radiaal2250",
        waarom: "**Pour un sol mouillé après une fuite.** Le ventilateur radial envoie 2 250 m³ d'air par heure sur la surface et résiste aux projections d'eau (IP55). L'humidité ainsi libérée, le déshumidificateur la capte.",
      },
      {
        key: "ttk650",
        waarom: "**Pour une grande construction neuve ou un espace professionnel ouvert.** Ce déshumidificateur à condensation retire jusqu'à 110 litres par jour dans des volumes jusqu'à environ 600 m³ et consomme 1,4 kW.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Braine-l'Alleud",
      alinea:
        "**À Braine-l'Alleud, nous livrons sur rendez-vous.** Après votre réservation avec date de livraison, nous convenons de l'heure par téléphone. Le technicien roule environ cinquante minutes depuis Aartselaar. Signalez à l'avance l'étage, la présence ou non d'un ascenseur et l'endroit où il peut se garer. Il rentre les appareils, les installe et vous montre comment suivre l'évacuation des condensats.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Braine-l'Alleud",
      alinea:
        "Un appareil seul, vous pouvez le retirer vous-même sur rendez-vous à Aartselaar, Boomsesteenweg 12, unit 11. Depuis Braine-l'Alleud, le trajet dure environ cinquante minutes, et vous le refaites pour rapporter l'appareil. **Réservez-le à l'avance**, il vous attendra. Si l'appareil doit monter dans un appartement situé haut dans un immeuble, la livraison avec installation vous évite de le porter.",
    },
    buren: ["waterloo", "kasteelbrakel", "itter", "nijvel", "genepien"],
    faq: [
      {
        q: "Comment organiser une livraison à Braine-l'Alleud ?",
        a: "Choisissez en ligne votre pack de séchage et une date de livraison. Nous vous appelons ensuite pour fixer l'heure. Indiquez l'adresse, le numéro de l'appartement et l'étage, ainsi que la personne qui nous fera entrer ce jour-là.",
      },
      {
        q: "Un déshumidificateur peut-il monter à un étage sans ascenseur ?",
        a: "Oui, mais signalez-le à l'avance. Un déshumidificateur de chantier est grand et lourd, le technicien doit donc savoir ce qui l'attend. S'il n'y a pas d'escalier fixe, nous voyons ensemble comment monter les appareils.",
      },
      {
        q: "Peut-on ouvrir les fenêtres pendant que le déshumidificateur tourne ?",
        a: "Mieux vaut pas. Un déshumidificateur à condensation retire l'humidité de l'air de la pièce, et des fenêtres ouvertes laissent sans cesse entrer de l'air extérieur humide. Aérez brièvement si nécessaire, et gardez sinon la pièce fermée et chaude.",
      },
      {
        q: "Comment savoir quand la chape est assez sèche ?",
        a: "Une surface sèche en dit peu sur le cœur du sol. Faites faire une mesure d'humidité avant de poser le revêtement de sol. Votre poseur connaît la valeur limite admise par son matériau.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Braine-l'Alleud ?",
        a: "Oui, sur rendez-vous à notre entrepôt d'Aartselaar. Comptez environ cinquante minutes de route dans chaque sens. Réservez à l'avance et suivez les consignes de transport, pour que l'appareil arrive debout et en bon état.",
      },
    ],
    realisaties: [],
  },

  geldenaken: {
    slug: "geldenaken",
    title: "Déshumidificateur de chantier à louer à Jodoigne | Vernast",
    description:
      "Louer un déshumidificateur à Jodoigne : séchage après rénovation d'une maison ou d'un commerce, une nouvelle chape ou une cave inondée. Sur rendez-vous.",
    h1: "Location de déshumidificateur de chantier à Jodoigne",
    kicker: "Brabant wallon · petite ville sur la Grande Gette",
    rit: { afstand: "environ 72 km", tijd: "environ une heure" },
    intro: [
      "**Jodoigne** est une petite ville sur la Grande Gette, tout près de la frontière linguistique avec Hoegaarden. Autour du centre se trouvent des villages comme Dongelberg, Jauchelette, Lathuy, Mélin, Piétrain et Zétrud-Lumay.",
      "Depuis notre entrepôt d'Aartselaar, Jodoigne est à **environ une heure** de route. Nous livrons au centre et dans tous les villages, toujours sur rendez-vous.",
    ],
    bouw: {
      kop: "Commerces au centre, maisons le long de la Gette",
      alineas: [
        "Au centre, on rénove **des magasins, des bureaux et des logements au-dessus d'un commerce**. Le planning y compte : quels espaces doivent rester accessibles, et quand le commerce veut-il rouvrir ? Dites-le-nous à l'avance, et nous placerons les appareils là où ils ne gênent personne.",
        "Après **une inondation dans une cave**, un déshumidificateur à adsorption sèche le local frais sous terre, tandis qu'un déshumidificateur à condensation s'occupe de la pièce de vie au-dessus. Un ventilateur au-dessus du sol mouillé accélère les deux.",
      ],
    },
    toestellen: [
      {
        key: "ttk350",
        waarom: "**Pour un commerce ou une maison au centre.** Ce déshumidificateur retire jusqu'à 70 litres par jour de l'air, dans des pièces jusqu'à environ 400 m³.",
      },
      {
        key: "revolution",
        waarom: "**Pour une cave fraîche après une inondation.** Le déshumidificateur à adsorption continue d'absorber l'humidité à basse température et sèche par des gaines.",
      },
      {
        key: "ttv4500",
        waarom: "Pour un magasin ouvert ou une grande pièce de vie : ce ventilateur déplace 4 500 m³ d'air par heure au-dessus du sol mouillé.",
      },
      {
        key: "ttk650",
        waarom: "Pour un grand volume en une fois, comme un rez-de-chaussée complet : jusqu'à 110 litres par jour, dans des pièces jusqu'à environ 600 m³.",
      },
    ],
    levering: {
      kop: "Livraison à Jodoigne sur rendez-vous",
      alinea:
        "Jusqu'à Jodoigne, nous roulons **environ une heure**. Lors de la réservation, vous indiquez la date de livraison souhaitée ; l'heure, nous la convenons ensuite, en tenant compte aussi des heures d'ouverture de votre commerce. Le technicien installe les appareils, règle l'évacuation et mesure l'humidité du sol et des murs. La livraison et la reprise sont elles aussi comprises dans le prix de votre pack de séchage.",
    },
    afhalen: {
      kop: "Venir chercher vous-même à Aartselaar",
      alinea:
        "Sur rendez-vous, vous retirez les appareils Boomsesteenweg 12, unit 11 à Aartselaar. Depuis Jodoigne, vous êtes en route **environ une heure**, et cela deux fois : à l'enlèvement et au retour. Pour un seul déshumidificateur dans un appartement, cela peut valoir la peine. Pour un commerce avec plusieurs appareils, confiez-nous la livraison.",
    },
    buren: ["bevekom", "hoegaarden", "orp-jauche", "incourt", "helecine"],
    faq: [
      {
        q: "Mon magasin peut-il rester ouvert pendant que le déshumidificateur tourne ?",
        a: "Souvent oui, si la zone de séchage peut être isolée de l'espace de vente. Un déshumidificateur fonctionne le mieux dans une pièce fermée. Dites-nous à l'avance quelles parties doivent rester accessibles, et nous déciderons où placer les appareils et l'évacuation.",
      },
      {
        q: "Ma cave a été inondée. Quand puis-je commencer à sécher ?",
        a: "Dès que l'eau a disparu et que la cause est réparée. Pompez d'abord l'eau stagnante et sortez de la cave les objets et l'isolation mouillés. Un déshumidificateur à adsorption sèche ensuite le local frais, même s'il n'est pas chauffé.",
      },
      {
        q: "Comment savoir si le nouveau sol du magasin est prêt pour la finition ?",
        a: "En mesurant. Une chape peut paraître sèche en surface alors que le cœur est encore humide. Demandez au poseur de mesurer l'humidité résiduelle avant de poser un revêtement qui ne supporte pas l'humidité, comme le PVC ou le parquet.",
      },
      {
        q: "Livrez-vous aussi à Piétrain et à Zétrud-Lumay ?",
        a: "Oui, au centre de Jodoigne et dans toutes les sections de la commune. Indiquez l'adresse complète lors de la réservation et signalez s'il y a un endroit où garer brièvement la camionnette.",
      },
    ],
    realisaties: [],
  },

  genepien: {
    slug: "genepien",
    title: "Louer un déshumidificateur de chantier à Genappe | Vernast",
    description:
      "Location de déshumidificateur à Genappe : Vernast livre et installe sur rendez-vous votre pack de séchage, avec chauffage pour chantier froid, puis le reprend.",
    h1: "Location de déshumidificateur de chantier à Genappe",
    kicker: "Genappe · livraison sur rendez-vous",
    rit: { afstand: "environ 70 km", tijd: "environ une heure" },
    intro: [
      "Genappe est une commune rurale du Brabant wallon, avec des villages dispersés, des fermes et des champs ouverts. Qui y rénove une ancienne ferme ou y construit une nouvelle maison travaille souvent dans de grands espaces froids. Vernast loue les déshumidificateurs de chantier, ventilateurs et chauffages de chantier qui permettent, là aussi, de faire sécher chape et plafonnage.",
      "Depuis Aartselaar, nous roulons environ une heure jusqu'à Genappe. En Wallonie, nous livrons **sur rendez-vous** : vous choisissez une date de livraison lors de la réservation et nous vous appelons pour fixer l'heure. Le prix du pack de séchage couvre la livraison, l'installation et la reprise.",
    ],
    bouw: {
      kop: "Rénover et construire en hiver à Genappe",
      alineas: [
        "Une ferme rénovée a souvent des murs épais et des pièces hautes. Les murs épais retiennent longtemps l'humidité, et un grand volume demande une grande capacité de séchage. Choisissez donc un appareil adapté au volume et gardez la pièce aussi fermée que possible pendant le séchage.",
        "Sur un chantier non chauffé en hiver, la température descend vite sous les 15 °C au-dessus desquels un déshumidificateur à condensation fonctionne le mieux. **Un chauffage de chantier électrique fait monter la température**, après quoi le déshumidificateur évacue l'humidité. Ce chauffage demande du courant triphasé : vérifiez à l'avance qu'il y a un raccordement de 400 V sur le chantier.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**Pour une grande ferme rénovée ou une construction neuve.** Ce déshumidificateur à condensation retire jusqu'à 110 litres par jour de l'air dans des volumes jusqu'à environ 600 m³. Il consomme 1,4 kW.",
      },
      {
        key: "radiaal2250",
        waarom: "**Pour diriger l'air le long de murs épais ou sur un grand sol.** Le ventilateur radial déplace 2 250 m³ par heure et résiste aux projections d'eau grâce à l'IP55. Il accélère l'évaporation, le déshumidificateur capte l'humidité.",
      },
      {
        key: "teddh30",
        waarom: "**Pour un chantier froid.** Ce chauffage de chantier électrique fournit 30 kW et fonctionne en 400 V (triphasé). La pièce devient ainsi assez chaude pour qu'un déshumidificateur à condensation fonctionne bien.",
      },
      {
        key: "ttk350",
        waarom: "**Pour les petites pièces ou l'étage.** Jusqu'à 70 litres par jour, pour des pièces jusqu'à environ 400 m³, avec une consommation de 1,1 kW. À côté d'un déshumidificateur plus grand au rez-de-chaussée, il prend l'étage en charge.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Genappe",
      alinea:
        "**À Genappe aussi, nous livrons sur rendez-vous.** Vous choisissez la date de livraison en réservant, nous vous appelons pour l'heure. Le technicien roule environ une heure depuis Aartselaar. Si le chantier se trouve le long d'un chemin de campagne ou est difficile à trouver, communiquez-nous un itinéraire ou une localisation GPS. Sur place, il installe les appareils et vous explique à quoi faire attention pendant le séchage.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Genappe",
      alinea:
        "Un appareil seul peut être retiré sur rendez-vous à notre entrepôt, Boomsesteenweg 12, unit 11 à Aartselaar. Depuis Genappe, cela représente environ une heure de route, et vous refaites ce trajet pour le rapporter. **Réservez à l'avance**, il sera prêt. Pour un chauffage de chantier et plusieurs déshumidificateurs, mieux vaut la livraison avec installation.",
    },
    buren: ["nijvel", "eigenbrakel", "lasne", "villers-la-ville", "court-saint-etienne"],
    faq: [
      {
        q: "Comment se passe la livraison à Genappe ?",
        a: "Sur rendez-vous. Vous composez en ligne un pack de séchage et choisissez une date de livraison, puis nous vous appelons pour fixer l'heure. Pour un chantier isolé, joignez un itinéraire clair.",
      },
      {
        q: "Un déshumidificateur fonctionne-t-il sur un chantier froid en hiver ?",
        a: "En dessous de 15 °C, un déshumidificateur à condensation perd beaucoup de rendement. Réchauffez la pièce avec un chauffage de chantier électrique, ou choisissez un déshumidificateur à adsorption qui absorbe l'humidité même dans le froid. Gardez la pièce aussi fermée que possible.",
      },
      {
        q: "Quel raccordement faut-il pour le chauffage de chantier de 30 kW ?",
        a: "Un raccordement en 400 V, donc du courant triphasé. Une prise standard ne peut pas fournir cette puissance. Faites vérifier par votre électricien ou votre entrepreneur que le coffret de chantier convient avant la livraison.",
      },
      {
        q: "Pourquoi les murs épais sèchent-ils si lentement ?",
        a: "L'humidité doit migrer du cœur du mur vers la surface avant de pouvoir s'évaporer. Plus le mur est épais, plus ce chemin est long. Un déshumidificateur et un ventilateur accélèrent l'évaporation en surface, mais la patience reste de mise.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Genappe ?",
        a: "Oui, sur rendez-vous à Aartselaar, à environ une heure de route dans chaque sens. Réservez à l'avance et vérifiez que le déshumidificateur entre dans votre voiture. Pour un chauffage de chantier de 30 kW, mieux vaut la livraison.",
      },
    ],
    realisaties: [],
  },

  graven: {
    slug: "graven",
    title: "Location de déshumidificateur à Grez-Doiceau | Vernast",
    description:
      "Déshumidificateur à louer à Grez-Doiceau : séchage après une rénovation, une nouvelle chape ou l'humidité d'une maison le long du Train. Sur rendez-vous.",
    h1: "Location de déshumidificateur de chantier à Grez-Doiceau",
    kicker: "Brabant wallon · vallées de la Dyle et du Train",
    rit: { afstand: "environ 60 km", tijd: "environ une heure" },
    intro: [
      "**Grez-Doiceau** se trouve juste à la frontière linguistique, à côté d'Oud-Heverlee et de Huldenberg. La commune compte notamment Archennes, Biez, Bossut-Gottechain, Doiceau, Nethen et Pécrot. Le Train et la Néthen y rejoignent la Dyle, avec des coteaux boisés et des champs entre les deux.",
      "Nous livrons des déshumidificateurs de chantier dans toute la commune, des villages de la vallée aux quartiers résidentiels sur les coteaux. Depuis notre entrepôt d'Aartselaar, nous mettons **environ une heure** pour y arriver. En Wallonie, nous livrons et installons sur rendez-vous.",
    ],
    bouw: {
      kop: "Maisons anciennes dans la vallée, villas sur les coteaux",
      alineas: [
        "**Dans les vallées du Train et de la Dyle**, des maisons de village plus anciennes se trouvent près de la nappe phréatique. Si le mur n'a pas de barrière d'étanchéité, il aspire cette eau, et une auréole d'humidité réapparaît au bas du mur après la rénovation. Un déshumidificateur évacue l'humidité de construction, mais n'arrête pas l'humidité ascensionnelle. C'est pourquoi le technicien effectue une mesure d'humidité lors de l'installation.",
        "Sur les coteaux, il s'agit plus souvent d'**une villa rénovée en profondeur**, avec une nouvelle chape et un nouveau plafonnage. Si un demi-sous-sol est encastré dans la pente, c'est cette partie qui sèche le plus lentement. Il y reste frais, et d'un côté la terre est contre le mur.",
      ],
    },
    toestellen: [
      {
        key: "ttk350",
        waarom: "**Pour une villa rénovée sur plusieurs niveaux.** Ce déshumidificateur retire jusqu'à 70 litres d'eau par jour de l'air et convient aux pièces jusqu'à environ 400 m³.",
      },
      {
        key: "revolution",
        waarom: "**Pour un demi-sous-sol frais dans la pente.** Ce déshumidificateur à adsorption continue d'absorber l'humidité à basse température, là où un déshumidificateur à condensation ralentit.",
      },
      {
        key: "ttv4500",
        waarom: "Une nouvelle chape dans une pièce de vie ouverte sèche plus uniformément si l'air au-dessus reste en mouvement. Ce ventilateur déplace 4 500 m³ d'air par heure.",
      },
      {
        key: "ttk170",
        waarom: "**Pour une maison de village qui reste habitée.** Ce déshumidificateur compact retire 50 litres par jour de l'air et fonctionne sur une prise de courant standard.",
      },
    ],
    levering: {
      kop: "Livraison à Grez-Doiceau sur rendez-vous",
      alinea:
        "Depuis Aartselaar, nous roulons **environ une heure** jusqu'à Grez-Doiceau, par l'E40 ou l'E411. Vous choisissez une date de livraison lors de la réservation, puis nous convenons de l'heure avec vous. Le technicien installe les appareils, dirige l'évacuation vers un avaloir ou un évier et mesure l'humidité du sol et des murs. La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.",
    },
    afhalen: {
      kop: "Venir chercher vous-même à Aartselaar",
      alinea:
        "L'enlèvement est possible sur rendez-vous à notre entrepôt, Boomsesteenweg 12, unit 11 à Aartselaar. Cela représente **environ une heure de route** depuis Grez-Doiceau, et vous faites ce trajet deux fois : à l'enlèvement et au retour. Pour un seul petit appareil, cela peut valoir la peine. Pour un pack complet, mieux vaut choisir la livraison avec installation.",
    },
    buren: ["waver", "chaumont-gistoux", "bevekom", "oud-heverlee", "huldenberg"],
    faq: [
      {
        q: "Ma maison est située en contrebas, près du Train. Le mur humide, est-ce de l'humidité de construction ?",
        a: "Pas toujours. Dans une vallée, la nappe phréatique est peu profonde, et un vieux mur sans barrière d'étanchéité l'aspire. L'humidité de construction disparaît avec le temps, l'humidité ascensionnelle revient sans cesse. La mesure d'humidité lors de l'installation montre laquelle des deux vous avez.",
      },
      {
        q: "Pourquoi mon demi-sous-sol sèche-t-il plus lentement que le reste de la maison ?",
        a: "Un demi-sous-sol encastré dans la pente est plus frais que les étages au-dessus, et côté pente, la terre est contre le mur. Un déshumidificateur à condensation a besoin d'une température supérieure à 15 °C pour bien fonctionner. Dans un demi-sous-sol frais, nous plaçons donc souvent un déshumidificateur à adsorption.",
      },
      {
        q: "Le déshumidificateur peut-il continuer à tourner pendant que nous habitons la maison ?",
        a: "Oui. Le déshumidificateur compact fonctionne sur une prise standard et peut rester dans une maison habitée. Gardez fermée la porte de la pièce à sécher. Sinon, l'appareil sèche aussi l'air du reste de la maison et le séchage dure plus longtemps.",
      },
      {
        q: "Que faut-il nous indiquer lors de la réservation ?",
        a: "Précisez qui sera présent lors de la livraison, pour que nous sachions avec qui convenir de l'heure et de l'installation. Pour toute question, n'hésitez pas à nous écrire ou à nous appeler.",
      },
    ],
    realisaties: [],
  },

  helecine: {
    slug: "helecine",
    title: "Déshumidificateur de chantier à Hélécine | Vernast",
    description:
      "Déshumidificateur à louer à Hélécine, près de Tirlemont et Linter : séchage après une rénovation, une nouvelle chape ou des dégâts des eaux. Sur rendez-vous.",
    h1: "Location de déshumidificateur de chantier à Hélécine",
    kicker: "Brabant wallon · à la frontière linguistique, près de Tirlemont",
    rit: { afstand: "environ 75 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Hélécine est une petite commune à l'extrême est du Brabant wallon, sur la frontière linguistique, tout près de Tirlemont et de Linter. Elle se compose de Linsmeau, Neerheylissem et Opheylissem, le long de la Petite Gette.",
      "D'Aartselaar à Hélécine, nous sommes en route **un peu plus d'une heure**. Ici aussi, nous livrons et installons sur rendez-vous, comme dans le reste de la Wallonie.",
    ],
    bouw: {
      kop: "Vieilles maisons en briques et caves humides",
      alineas: [
        "Qui rénove à Hélécine **une maison ancienne en briques** décroche souvent l'ancien enduit et fait poser un nouveau plafonnage. Les murs contiennent alors beaucoup d'eau. Un déshumidificateur par étage et un ventilateur qui dirige l'air le long des murs les font sécher de manière uniforme.",
        "Si la maison est située en contrebas, près de la Petite Gette, **une cave ou un rez-de-chaussée humide** peut aussi être lié à la nappe phréatique. Une mesure d'humidité fait la différence entre l'humidité de construction qui sèche et une humidité qui revient à chaque fois.",
      ],
    },
    toestellen: [
      {
        key: "ttk350",
        waarom: "**Pour un étage avec un nouveau plafonnage.** Ce déshumidificateur retire jusqu'à 70 litres par jour de l'air, dans des pièces jusqu'à environ 400 m³.",
      },
      {
        key: "ttv4500",
        waarom: "Un ventilateur de 4 500 m³ par heure dirige l'air le long des murs fraîchement plafonnés, pour qu'ils sèchent uniformément.",
      },
      {
        key: "revolution",
        waarom: "**Pour une cave ou un rez-de-chaussée frais.** Le déshumidificateur à adsorption fonctionne aussi à basse température et sèche par des gaines.",
      },
      {
        key: "ttk650",
        waarom: "Pour une maison entièrement rénovée avec beaucoup de chape : jusqu'à 110 litres par jour, pour des pièces jusqu'à environ 600 m³.",
      },
    ],
    levering: {
      kop: "Livraison à Hélécine sur rendez-vous",
      alinea:
        "D'Aartselaar à Hélécine, il faut compter **un peu plus d'une heure** de route. Lors de la réservation, vous indiquez une date de livraison, et nous fixons l'heure ensemble par téléphone. Le technicien installe les appareils, évacue l'eau de condensation et mesure l'humidité des murs et du sol. La livraison, l'installation et la reprise font partie de votre pack de séchage.",
    },
    afhalen: {
      kop: "Venir chercher vous-même à Aartselaar",
      alinea:
        "L'enlèvement est aussi possible, sur rendez-vous à notre entrepôt, Boomsesteenweg 12, unit 11 à Aartselaar. Depuis Hélécine, vous roulez **un peu plus d'une heure**, aussi bien pour l'enlèvement que pour le retour. Si vous avez besoin de plus d'un appareil, la livraison avec installation vous épargne ces trajets.",
    },
    buren: ["tienen", "landen", "linter", "orp-jauche", "geldenaken"],
    faq: [
      {
        q: "Mon mur est encore humide après le décrochage de l'ancien enduit. Est-ce normal ?",
        a: "C'est possible. Les vieux murs retiennent l'humidité, surtout dans le bas. S'il s'agit d'humidité de construction, elle disparaît avec un déshumidificateur et de l'aération. Si elle vient du sol, elle revient. Une mesure d'humidité montre de laquelle des deux il s'agit.",
      },
      {
        q: "Combien de déshumidificateurs placer dans une maison à deux étages ?",
        a: "En général un par étage, et un ventilateur en plus s'il y a beaucoup de nouveau plafonnage. Des pièces fermées peuvent demander leur propre appareil. Communiquez-nous la surface et la hauteur de chaque étage, et nous calculerons le pack.",
      },
      {
        q: "Combien de temps un nouveau plafonnage doit-il sécher avant de peindre ?",
        a: "Cela dépend de l'épaisseur, du type de plâtre, de la température et de la ventilation. Une teinte claire en surface ne signifie pas encore que le mur est sec. Faites mesurer avant la première couche de peinture, vous éviterez ainsi une peinture qui cloque.",
      },
      {
        q: "Livrez-vous aussi du côté flamand, à Tirlemont ou à Linter ?",
        a: "Oui. Tirlemont, Linter et Landen sont tout proches d'Hélécine et font aussi partie de notre zone de livraison. Indiquez l'adresse du chantier lors de la réservation, et nous planifierons la livraison.",
      },
    ],
    realisaties: [],
  },

  ramillies: {
    slug: "ramillies",
    title: "Location de déshumidificateur à Ramillies | Vernast",
    description:
      "Déshumidificateur à louer à Ramillies : appareils et chauffages électriques pour un chantier froid, une ferme rénovée ou des dégâts des eaux. Sur rendez-vous.",
    h1: "Location de déshumidificateur de chantier à Ramillies",
    kicker: "Brabant wallon · région agricole ouverte",
    rit: { afstand: "environ 85 km", tijd: "environ une heure et quart" },
    intro: [
      "Ramillies se trouve à l'extrême est du Brabant wallon, à la limite des provinces de Namur et de Liège. La commune compte notamment Bomal, Gérompont, Grand-Rosière-Hottomont, Huppaye, Mont-Saint-André et Offus. C'est une région agricole ouverte, avec de grandes fermes.",
      "Depuis Aartselaar, nous sommes en route **environ une heure et quart** jusqu'à Ramillies. Nous livrons dans toutes les sections de la commune, le jour et à l'heure que nous convenons ensemble.",
    ],
    bouw: {
      kop: "Chantiers froids et grandes fermes",
      alineas: [
        "Dans ce paysage ouvert, un chantier est exposé au vent en hiver, et une maison vide sans chauffage se refroidit vite. Un déshumidificateur à condensation retire alors peu d'eau de l'air. **Un chauffage de chantier électrique** met d'abord la pièce à température, puis le déshumidificateur fait son travail. Si chauffer n'est pas possible, un déshumidificateur à adsorption est l'alternative.",
        "Lors de la **transformation d'une ferme**, beaucoup d'eau entre dans le bâtiment : nouvelle chape, plafonnage et parfois une nouvelle dalle en béton. Dans un tel volume, mieux vaut placer un grand déshumidificateur, avec un ventilateur qui fait circuler l'air.",
      ],
    },
    toestellen: [
      {
        key: "revolution",
        waarom: "**Pour un chantier qu'il n'est pas possible de chauffer.** Ce déshumidificateur à adsorption continue d'absorber l'humidité dans des pièces froides et sèche aussi par des gaines.",
      },
      {
        key: "teddh30",
        waarom: "**Pour un chantier froid en hiver.** Ce chauffage de chantier fournit 30 kW de chaleur sur courant triphasé (400 V). Vérifiez à l'avance que votre coffret de chantier dispose de ce raccordement.",
      },
      {
        key: "ttk650",
        waarom: "Pour les grands espaces d'une ferme rénovée : jusqu'à 110 litres par jour, dans des volumes jusqu'à environ 600 m³.",
      },
      {
        key: "ttv4500",
        waarom: "Ce ventilateur déplace 4 500 m³ d'air par heure et répartit l'air chaud et sec dans toute la pièce.",
      },
    ],
    levering: {
      kop: "Livraison à Ramillies sur rendez-vous",
      alinea:
        "Nous roulons **environ une heure et quart** d'Aartselaar à Ramillies. Lors de la réservation, vous choisissez le jour de livraison, et nous convenons de l'heure avec vous par téléphone. Le technicien installe le chauffage et les déshumidificateurs, contrôle le raccordement et mesure l'humidité. La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.",
    },
    afhalen: {
      kop: "Venir chercher vous-même à Aartselaar",
      alinea:
        "L'enlèvement est possible sur rendez-vous à Aartselaar, Boomsesteenweg 12, unit 11. Depuis Ramillies, cela représente **environ une heure et quart** de route, un trajet que vous faites à l'enlèvement et à nouveau au retour. Un chauffage de chantier et un grand déshumidificateur demandent en outre un véhicule spacieux. Mieux vaut donc les faire livrer.",
    },
    buren: ["perwijs", "orp-jauche", "geldenaken"],
    faq: [
      {
        q: "Pourquoi chauffer d'abord, puis sécher ?",
        a: "L'air chaud peut contenir plus d'humidité que l'air froid, et un déshumidificateur à condensation ne retire vraiment de l'eau de l'air qu'au-dessus d'environ 15 °C. Dans une maison glaciale, le chauffage fait d'abord passer l'humidité dans l'air, puis le déshumidificateur la capte.",
      },
      {
        q: "Puis-je brancher le chauffage de chantier sur une prise standard ?",
        a: "Non. Le chauffage de 30 kW fonctionne sur courant triphasé de 400 V, tout comme celui de 20 kW. Sur beaucoup de chantiers, il y a un coffret de chantier avec ce raccordement. Dans une habitation existante, mieux vaut demander à un électricien ce qui est possible.",
      },
      {
        q: "Et si je n'ai pas de courant triphasé sur le chantier ?",
        a: "Choisissez alors un déshumidificateur à adsorption. Il sèche aussi dans une pièce froide, sans qu'il faille chauffer d'abord. Signalez-le lors de la réservation, et nous composerons un pack sans chauffage.",
      },
      {
        q: "Combien de temps le dispositif reste-t-il sur un chantier de ferme ?",
        a: "Jusqu'à ce qu'une mesure d'humidité montre que le sol et les murs sont prêts pour la finition. Lors d'une grande transformation avec beaucoup de chape neuve, cela dure généralement plus longtemps que pour une petite rénovation. S'il faut plus de temps, vous pouvez prolonger la location.",
      },
    ],
    realisaties: [],
  },

  rebecq: {
    slug: "rebecq",
    title: "Déshumidificateur de chantier à louer à Rebecq | Vernast",
    description:
      "Louer un déshumidificateur à Rebecq ? Vernast livre et installe votre pack de séchage sur rendez-vous, puis le reprend. Chape, plafonnage ou cave humide.",
    h1: "Location de déshumidificateur de chantier à Rebecq",
    kicker: "Rebecq · livraison sur rendez-vous",
    rit: { afstand: "environ 65 km", tijd: "près d'une heure" },
    intro: [
      "Rebecq se trouve dans l'ouest du Brabant wallon, dans la vallée de la Senne et tout près de Tubize. Qui y rénove une maison ancienne ou construit du neuf apporte beaucoup d'eau dans la maison avec la chape et le plafonnage. Vernast loue les déshumidificateurs de chantier, les ventilateurs et les chauffages de chantier pour retirer cette humidité.",
      "Notre entrepôt d'Aartselaar se trouve à près d'une heure de route de Rebecq. En Wallonie, nous travaillons **sur rendez-vous** : lors de la réservation, vous choisissez une date de livraison, puis nous fixons l'heure ensemble. La livraison, l'installation et la reprise sont comprises dans le prix du pack de séchage.",
    ],
    bouw: {
      kop: "Sécher la chape et le plafonnage à Rebecq",
      alineas: [
        "Une nouvelle chape apporte plus d'eau dans la maison que la plupart des maîtres d'ouvrage ne le pensent. La vitesse à laquelle elle s'en va dépend de l'épaisseur, du type de mortier et de la température dans la pièce. Indiquez dans votre demande quand le sol a été coulé ou le plafonnage appliqué, et nous adapterons le dispositif en conséquence.",
        "Pour le moment du démarrage, suivez les consignes de votre chapiste ou du fournisseur du mortier : certaines chapes ne peuvent pas être séchées de manière forcée les premiers jours. **Une surface sèche n'est pas un sol sec.** Faites vérifier par une mesure d'humidité que le cœur est prêt avant que le carreleur ou le parqueteur ne commence.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**Pour un grand espace ouvert ou une construction neuve complète.** Ce déshumidificateur à condensation retire de l'air jusqu'à 110 litres d'humidité par jour et est prévu pour des volumes jusqu'à environ 600 m³. Il consomme 1,4 kW.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour garder l'air en mouvement.** Ce ventilateur déplace 4 500 m³ d'air par heure pour une consommation de 0,2 kW. L'humidité sort ainsi plus vite de la chape, mais c'est le déshumidificateur qui l'évacue.",
      },
      {
        key: "ttk350",
        waarom: "**Pour un étage ou une maison de taille moyenne.** Jusqu'à 70 litres par jour, adapté à environ 400 m³, pour une consommation de 1,1 kW. Nous répartissons deux appareils ou plus entre les pièces fermées.",
      },
      {
        key: "teddh20",
        waarom: "**Quand il fait trop froid sur le chantier pour bien sécher.** Ce chauffage de chantier électrique fournit 20 kW et demande un raccordement en 400 V (courant triphasé). La chaleur accélère le séchage, l'humidité elle-même est évacuée par le déshumidificateur.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Rebecq",
      alinea:
        "**À Rebecq, nous livrons sur rendez-vous.** Vous choisissez une date de livraison lors de la réservation, puis nous vous appelons pour fixer l'heure. Depuis Aartselaar, le technicien est en route près d'une heure. Prévenez-nous à l'avance s'il y a un escalier sans rampe, un couloir étroit ou peu de place pour stationner. Il installe les appareils, les raccorde et vous montre comment contrôler l'évacuation des condensats.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Rebecq",
      alinea:
        "Vous n'avez besoin que d'un appareil ? Vous pouvez venir le chercher sur rendez-vous au Boomsesteenweg 12, unit 11 à Aartselaar. Depuis Rebecq, cela représente près d'une heure de route dans chaque sens, et vous faites ce trajet deux fois : à l'enlèvement et au retour. **Réservez à l'avance** pour que l'appareil soit prêt, et vérifiez qu'il tient dans votre voiture.",
    },
    buren: ["tubeke", "itter"],
    faq: [
      {
        q: "Comment réserver une livraison à Rebecq ?",
        a: "Composez votre pack de séchage en ligne et choisissez une date de livraison. Nous vous appelons ensuite pour fixer l'heure de livraison. Indiquez l'adresse complète du chantier, l'étage et la personne qui nous laissera entrer ce jour-là.",
      },
      {
        q: "Puis-je placer un déshumidificateur tout de suite sur une chape fraîche ?",
        a: "Cela dépend du mortier. Certaines chapes doivent d'abord durcir tranquillement quelques jours avant un séchage forcé. Renseignez-vous auprès de votre chapiste ou dans la fiche technique du produit, et communiquez-nous la date de coulage.",
      },
      {
        q: "Comment savoir si le sol est assez sec pour la finition ?",
        a: "Ni à la surface, ni au nombre de jours de location. Une mesure d'humidité au cœur de la chape tranche la question. Votre carreleur ou votre parqueteur sait quelle valeur son matériau demande.",
      },
      {
        q: "Quel raccordement faut-il pour un chauffage de chantier ?",
        a: "Les chauffages de chantier électriques de 20 et 30 kW fonctionnent en 400 V, donc sur courant triphasé. Une prise standard ne suffit pas. En cas de doute, demandez à votre électricien de vérifier si le coffret de chantier supporte cette puissance.",
      },
      {
        q: "Puis-je venir chercher un appareil pour un chantier à Rebecq ?",
        a: "Oui, sur rendez-vous à notre entrepôt d'Aartselaar. Comptez près d'une heure de route dans chaque sens. Réservez l'appareil à l'avance et suivez pendant le transport les instructions que vous recevez.",
      },
    ],
    realisaties: [],
  },

  rixensart: {
    slug: "rixensart",
    title: "Louer un déshumidificateur de chantier à Rixensart | Vernast",
    description:
      "Louer un déshumidificateur à Rixensart, Genval ou Rosières ? Vernast installe votre pack de séchage sur rendez-vous, puis le reprend. Conseils chape et fuites.",
    h1: "Location de déshumidificateur de chantier à Rixensart",
    kicker: "Rixensart · livraison sur rendez-vous",
    rit: { afstand: "environ 58 km", tijd: "environ cinquante minutes" },
    intro: [
      "Une chape, un mur plafonné ou une cave humide doit sécher à Rixensart ? Chez Vernast, vous louez pour cela un pack de séchage complet. **Nous apportons les appareils, les mettons en place et venons les reprendre ensuite.**",
      "Depuis notre entrepôt d'Aartselaar, nous sommes à Rixensart en environ cinquante minutes. Lors de la réservation, vous indiquez une date de livraison ; pour la Wallonie, nous fixons ensuite le moment de livraison en concertation avec vous.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Rixensart",
      alineas: [
        "Rixensart comprend aussi Genval et Rosières. Notez donc dans votre demande l'adresse complète avec la section, ainsi que la personne qui nous accueillera sur le chantier. Vous faites sécher un appartement ? Signalez s'il y a un ascenseur et quelle est la largeur de la cage d'escalier.",
        "Une chape fraîche libère de l'humidité dans l'air pendant des semaines. Combien de temps exactement dépend de l'épaisseur, de la composition et de la température dans la pièce. **Gardez portes et fenêtres fermées tant que le déshumidificateur tourne**, sinon il fait entrer l'humidité de l'extérieur. Faites mesurer l'humidité résiduelle avant de poser un revêtement de sol.",
      ],
    },
    toestellen: [
      {
        key: "ttk350",
        waarom: "**Pour une maison entière ou un appartement.** Retire jusqu'à 70 litres par jour dans des pièces jusqu'à 400 m³. Avec plusieurs pièces fermées, nous répartissons la capacité entre les zones.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour faire sécher plus vite les surfaces humides.** Ce ventilateur souffle 4 500 m³ d'air par heure le long du sol et des murs. Combinez-le toujours avec un déshumidificateur, car lui-même ne capte pas d'eau.",
      },
      {
        key: "revolution",
        waarom: "**Pour une cave froide et non chauffée.** Le déshumidificateur à adsorption continue d'absorber l'humidité là où un déshumidificateur à condensation a peu de rendement, et peut sécher de manière ciblée sous un sol grâce à des gaines.",
      },
      {
        key: "ttk170",
        waarom: "**Pour une salle de bains, une chambre ou une autre pièce isolée.** Ce déshumidificateur compact retire jusqu'à 50 litres par jour dans des pièces jusqu'à 250 m³ et consomme 0,75 kW.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Rixensart",
      alinea:
        "**Votre pack de séchage comprend la livraison, l'installation et la reprise.** Après votre réservation avec date de livraison, nous vous contactons pour fixer le moment de livraison à Rixensart. Comptez environ cinquante minutes de route depuis Aartselaar. Dites-nous à l'avance si le stationnement est limité ou l'accès difficile. Lors de l'installation, le technicien vous montre comment contrôler le bac à eau ou le tuyau d'évacuation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Rixensart",
      alinea:
        "Vous préférez faire la route vous-même ? Vous venez alors chercher un appareil seul sur rendez-vous au Boomsesteenweg 12, unit 11 à Aartselaar. Depuis Rixensart, cela représente environ cinquante minutes, à l'aller pour l'enlèvement et à nouveau pour le retour. **Réservez à l'avance** et vérifiez que l'appareil tient dans votre voiture. S'il s'agit de plusieurs appareils, la livraison vous épargne ces trajets.",
    },
    buren: ["terhulpen", "lasne", "overijse", "waver"],
    faq: [
      {
        q: "Livrez-vous aussi à Genval et à Rosières ?",
        a: "Oui, ces deux sections de Rixensart font partie de notre zone de livraison. Vous choisissez une date de livraison lors de la réservation, et comme il s'agit de la Wallonie, nous convenons ensuite avec vous du moment précis.",
      },
      {
        q: "Comment choisir entre un petit et un grand déshumidificateur ?",
        a: "Regardez le volume de la pièce et la quantité d'humidité. Le déshumidificateur compact suffit jusqu'à 250 m³, celui de 70 litres jusqu'à 400 m³. En cas de doute, le calculateur vous aide, ou passez-nous un coup de fil.",
      },
      {
        q: "Puis-je aérer pendant que le déshumidificateur tourne ?",
        a: "Gardez de préférence portes et fenêtres fermées. Les fenêtres ouvertes laissent entrer l'air extérieur, et par temps humide, le déshumidificateur doit alors capter cette humidité aussi. Une courte aération en fin de journée de travail reste possible.",
      },
      {
        q: "Ai-je besoin du courant triphasé ?",
        a: "Pas pour les déshumidificateurs et les ventilateurs : ils fonctionnent sur une prise standard de 230 V. Le courant triphasé de 400 V n'est nécessaire que pour les chauffages de chantier électriques. Ne mettez pas trop d'appareils sur le même circuit.",
      },
      {
        q: "Quand la chape est-elle assez sèche pour carreler ou poser un parquet ?",
        a: "C'est une mesure d'humidité qui le détermine, pas le nombre de jours de location. Votre poseur de sol sait quelle humidité résiduelle son revêtement demande et peut la mesurer. Laissez tourner le déshumidificateur jusqu'à ce que cette valeur soit atteinte.",
      },
    ],
    realisaties: [],
  },

  terhulpen: {
    slug: "terhulpen",
    title: "Location de déshumidificateur à La Hulpe | Vernast",
    description:
      "Déshumidificateur à louer à La Hulpe : livraison sur rendez-vous, installation et reprise par Vernast. Pour une chape, un plafonnage ou des dégâts des eaux.",
    h1: "Location de déshumidificateur de chantier à La Hulpe",
    kicker: "La Hulpe · livraison sur rendez-vous",
    rit: { afstand: "environ 55 km", tijd: "environ cinquante minutes" },
    intro: [
      "Vous faites sécher une chape, un plafonnage ou une pièce après des dégâts des eaux à La Hulpe ? Vernast loue des déshumidificateurs de chantier, des ventilateurs et des chauffages de chantier sous forme de pack de séchage. **La livraison, l'installation et la reprise sont comprises.**",
      "Notre entrepôt d'Aartselaar se trouve à environ cinquante minutes de route. La Hulpe étant en Wallonie, nous livrons sur rendez-vous : vous choisissez une date de livraison lors de la réservation, et nous fixons ensuite ensemble le moment de livraison.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à La Hulpe",
      alineas: [
        "La Hulpe se trouve entre Hoeilaart, Overijse et Rixensart, en bordure de la forêt de Soignes. Indiquez dans votre demande l'adresse complète du chantier et la personne qui accueillera le technicien sur place. Si le chantier se trouve dans une rue étroite ou en cul-de-sac, mentionnez-le aussi.",
        "Après une fuite ou dans une cave humide, commencez par traiter la cause et évacuer l'eau stagnante. Ce n'est qu'ensuite que le séchage a du sens. **Un déshumidificateur à condensation fonctionne au mieux au-dessus de 15 °C** ; dans une cave froide, nous préférons installer un déshumidificateur à adsorption.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**Pour un étage complet ou un grand chantier.** Ce déshumidificateur retire de l'air jusqu'à 110 litres d'eau par jour et convient aux pièces jusqu'à 600 m³. Il fonctionne sur une prise standard.",
      },
      {
        key: "ttk350",
        waarom: "**Pour une maison avec une chape fraîche.** Jusqu'à 70 litres par jour dans des pièces jusqu'à 400 m³, pour une consommation de 1,1 kW. S'il y a plusieurs pièces, nous répartissons les appareils entre les zones.",
      },
      {
        key: "revolution",
        waarom: "**Pour une cave froide ou un sol après des dégâts des eaux.** Ce déshumidificateur à adsorption fonctionne aussi à basse température et sèche de manière ciblée sous un sol grâce à des gaines.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour garder l'air en mouvement.** Le ventilateur déplace 4 500 m³ d'air par heure le long des murs et des sols humides. Il ne retire pas lui-même l'humidité de l'air ; c'est le déshumidificateur placé à côté qui s'en charge.",
      },
    ],
    levering: {
      kop: "Livraison et installation à La Hulpe",
      alinea:
        "**La livraison, l'installation et la reprise font partie de votre pack de séchage.** Vous choisissez une date de livraison lors de la réservation ; comme La Hulpe se trouve en Wallonie, nous convenons ensuite avec vous du moment précis de la livraison. Le trajet depuis Aartselaar dure environ cinquante minutes. Signalez à l'avance un étage sans escalier fixe ou un accès difficile. Le technicien installe les appareils et vous montre comment contrôler l'évacuation des condensats.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis La Hulpe",
      alinea:
        "Vous pouvez venir chercher un appareil seul sur rendez-vous à notre entrepôt, Boomsesteenweg 12, unit 11 à Aartselaar. Depuis La Hulpe, comptez environ cinquante minutes de route, un trajet que vous faites deux fois : à l'enlèvement et au retour. **Réservez à l'avance**, pour que votre appareil soit prêt. Pour plusieurs appareils, un pack de séchage avec livraison est généralement plus pratique.",
    },
    buren: ["hoeilaart", "overijse", "rixensart", "lasne", "waterloo"],
    faq: [
      {
        q: "Quand pouvez-vous livrer à La Hulpe ?",
        a: "Vous choisissez vous-même une date de livraison lors de la réservation. Comme La Hulpe se trouve en Wallonie, nous fixons ensuite avec vous l'heure de livraison. Communiquez l'adresse du chantier, l'étage et la date de début souhaitée.",
      },
      {
        q: "De combien de déshumidificateurs ai-je besoin pour ma maison ?",
        a: "Cela dépend du volume, du nombre de pièces fermées et de la quantité d'humidité dans la chape ou le plafonnage. Le calculateur vous permet de composer un pack ; si votre chantier sort de l'ordinaire, appelez-nous pour un conseil.",
      },
      {
        q: "Un déshumidificateur fonctionne-t-il dans une cave froide ?",
        a: "Un déshumidificateur à condensation a besoin d'une température supérieure à 15 °C pour bien fonctionner. Dans une cave froide ou une annexe non chauffée, nous choisissons donc le déshumidificateur à adsorption, qui absorbe l'humidité même à basse température.",
      },
      {
        q: "De quel raccordement ai-je besoin ?",
        a: "Les déshumidificateurs et les ventilateurs fonctionnent sur une prise standard de 230 V. Seuls les chauffages de chantier électriques de 20 et 30 kW demandent du courant triphasé de 400 V. En cas de doute, faites vérifier le raccordement par votre électricien.",
      },
      {
        q: "Que dois-je indiquer dans ma demande pour un chantier à La Hulpe ?",
        a: "L'adresse complète du chantier, les pièces à sécher et la personne qui accueillera le technicien sur place. Si le chantier se trouve dans une rue étroite ou en cul-de-sac, mentionnez-le aussi. Nous pourrons ainsi vous répondre de manière ciblée.",
      },
    ],
    realisaties: [],
  },

  tubeke: {
    slug: "tubeke",
    title: "Déshumidificateur de chantier à louer à Tubize | Vernast",
    description:
      "Louer un déshumidificateur à Tubize ? Vernast livre, installe et reprend votre pack de séchage sur rendez-vous. Pour chape, plafonnage et dégâts des eaux.",
    h1: "Location de déshumidificateur de chantier à Tubize",
    kicker: "Tubize · livraison sur rendez-vous",
    rit: { afstand: "environ 55 km", tijd: "environ cinquante minutes" },
    intro: [
      "Tubize se trouve sur la Senne, juste de l'autre côté de la frontière linguistique, près de Hal. Vous y construisez ou transformez une maison, ou il y a de l'eau dans la cave ? Chez Vernast, vous louez les déshumidificateurs de chantier et les ventilateurs pour faire sécher chape, plafonnage et pièces humides.",
      "Depuis notre entrepôt d'Aartselaar, nous roulons environ cinquante minutes jusqu'à Tubize. En Wallonie, nous livrons **sur rendez-vous** : vous choisissez une date de livraison lors de la réservation et nous convenons de l'heure avec vous. La livraison, l'installation et la reprise sont comprises dans le prix de votre pack de séchage.",
    ],
    bouw: {
      kop: "Sécher après des dégâts des eaux ou une construction neuve à Tubize",
      alineas: [
        "Après une inondation dans une cave ou au rez-de-chaussée, commencez par traiter la cause. Faites réparer la fuite et évacuez l'eau stagnante avant de démarrer le déshumidificateur. Sinon, le mur absorbe de nouvelle humidité et l'appareil tourne pour rien. Si l'humidité se trouve sous le sol ou derrière une contre-cloison, signalez-le : il faut alors un autre dispositif.",
        "Pour une construction neuve, l'épaisseur de la chape, le type de plafonnage, la température et l'aération déterminent la durée du séchage. Un déshumidificateur à condensation fonctionne au mieux au-dessus de 15 °C. **Faites mesurer l'humidité résiduelle** avant que le poseur de sol ou le peintre ne commence, car une surface sèche en dit peu sur le cœur du sol.",
      ],
    },
    toestellen: [
      {
        key: "ttk350",
        waarom: "**Pour une maison entière en phase de finition.** Ce déshumidificateur à condensation retire de l'air jusqu'à 70 litres d'humidité par jour et suffit pour environ 400 m³. Sur plusieurs étages, nous répartissons les appareils entre les pièces.",
      },
      {
        key: "revolution",
        waarom: "**Pour une cave froide ou de l'humidité sous le sol.** Ce déshumidificateur à adsorption continue de fonctionner à basse température et sèche, grâce à des gaines, aussi les endroits qu'un dispositif ordinaire n'atteint pas.",
      },
      {
        key: "ttk170",
        waarom: "**Pour une seule pièce ou un appartement.** Compact, jusqu'à 50 litres par jour et prévu pour des pièces jusqu'à environ 250 m³. Il consomme 0,75 kW et fonctionne sur une prise standard.",
      },
      {
        key: "radiaal2250",
        waarom: "**Pour un flux d'air ciblé sur un sol ou un mur humide.** Ce ventilateur radial déplace 2 250 m³ d'air par heure et résiste aux projections d'eau (IP55). Il accélère l'évaporation, l'humidité elle-même est retirée par le déshumidificateur.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Tubize",
      alinea:
        "**À Tubize, la livraison se fait sur rendez-vous.** Vous choisissez une date de livraison lors de la réservation, puis nous vous appelons pour fixer l'heure. Notre technicien roule environ cinquante minutes depuis Aartselaar. Signalez à l'avance un passage étroit, un escalier raide ou peu de place pour stationner. Sur place, il met les appareils en place et vous montre comment contrôler l'évacuation des condensats.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Tubize",
      alinea:
        "Un appareil seul, vous pouvez venir le chercher sur rendez-vous à notre entrepôt, Boomsesteenweg 12, unit 11 à Aartselaar. Depuis Tubize, cela représente environ cinquante minutes de route, un trajet que vous refaites pour ramener l'appareil. **Réservez à l'avance**, et il sera prêt. Si vous avez besoin de plusieurs appareils, la livraison avec installation est généralement le meilleur choix.",
    },
    buren: ["halle", "rebecq", "kasteelbrakel", "itter"],
    faq: [
      {
        q: "Comment se déroule une livraison à Tubize ?",
        a: "Vous composez un pack de séchage en ligne et choisissez une date de livraison. Comme nous livrons sur rendez-vous en Wallonie, nous vous appelons ensuite pour convenir de l'heure. Communiquez l'adresse complète du chantier et dites-nous qui nous accueillera sur place.",
      },
      {
        q: "De combien de déshumidificateurs ai-je besoin pour ma maison ?",
        a: "Cela dépend du volume, du nombre de pièces fermées et de l'humidité du matériau. Un étage ouvert sèche avec moins d'appareils que cinq pièces séparées. Le calculateur établit votre pack. Si votre situation est différente, appelez-nous.",
      },
      {
        q: "Un déshumidificateur fonctionne-t-il dans une cave froide ?",
        a: "Un déshumidificateur à condensation fonctionne au mieux au-dessus de 15 °C et perd une grande partie de son rendement dans une cave froide. Mieux vaut y louer le déshumidificateur à adsorption, qui retire l'humidité de l'air même à basse température. Ajouter un chauffage de chantier est une autre possibilité.",
      },
      {
        q: "Un déshumidificateur règle-t-il durablement l'humidité de ma cave ?",
        a: "Pas tant que l'eau continue d'entrer. Un déshumidificateur évacue l'humidité, mais il ne colmate aucune fissure et ne remplace pas une barrière contre l'humidité manquante. Faites d'abord réparer la cause ; la cave séchera ensuite durablement.",
      },
      {
        q: "Puis-je venir chercher moi-même un appareil pour un chantier à Tubize ?",
        a: "Oui, sur rendez-vous à Aartselaar. Comptez environ cinquante minutes de route dans chaque sens. Vérifiez à l'avance que l'appareil tient dans votre voiture et suivez les instructions de transport que vous recevez à l'enlèvement.",
      },
    ],
    realisaties: [],
  },

  "villers-la-ville": {
    slug: "villers-la-ville",
    title: "Louer un déshumidificateur à Villers-la-Ville | Vernast",
    description:
      "Déshumidificateur à Villers-la-Ville : appareils et chauffages de chantier livrés sur rendez-vous, installés et repris par Vernast. Aussi pour maison froide.",
    h1: "Location de déshumidificateur de chantier à Villers-la-Ville",
    kicker: "Villers-la-Ville · livraison sur rendez-vous",
    rit: { afstand: "environ 78 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Vous rénovez une maison ancienne à Villers-la-Ville, ou une construction neuve doit sécher ? Vernast loue des déshumidificateurs de chantier, des ventilateurs et des chauffages de chantier électriques. **Nous apportons le pack, l'installons et venons le reprendre.**",
      "Notre entrepôt d'Aartselaar se trouve à un peu plus d'une heure de route. Lors de la réservation, vous choisissez une date de livraison, et pour cette commune wallonne, nous fixons ensuite ensemble le moment de livraison.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Villers-la-Ville",
      alineas: [
        "Villers-la-Ville est connue pour les ruines de son abbaye cistercienne. Pour un chantier dans l'un des villages de la commune, indiquez l'adresse complète, et précisez aussi si nous devons emprunter un chemin de campagne ou une allée étroite.",
        "Dans une maison froide ou non chauffée, une chape sèche lentement. **En dessous de 15 °C, un déshumidificateur à condensation perd beaucoup de rendement** ; en hiver, un chauffage de chantier électrique peut donc d'abord mettre la pièce à température. Tenez compte du raccordement en 400 V qu'un tel chauffage demande.",
      ],
    },
    toestellen: [
      {
        key: "teddh30",
        waarom: "**Pour un chantier froid en hiver.** Ce chauffage de chantier électrique fournit 30 kW et fonctionne sur courant triphasé (400 V). Il chauffe la pièce, le déshumidificateur en retire l'humidité.",
      },
      {
        key: "ttk650",
        waarom: "**Pour une grande maison ou un étage complet.** Jusqu'à 110 litres par jour dans des pièces jusqu'à 600 m³. Avec un chauffage de chantier, il garde son rendement même en hiver.",
      },
      {
        key: "revolution",
        waarom: "**Pour des pièces impossibles à chauffer.** Ce déshumidificateur à adsorption fonctionne aussi dans le froid, par exemple dans une cave ou une ancienne étable. Grâce à ses gaines, il atteint aussi l'humidité sous un sol.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour faire circuler l'air le long des murs humides.** Le ventilateur déplace 4 500 m³ d'air par heure. Il ne remplace pas le déshumidificateur, mais aide la surface à sécher plus vite.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Villers-la-Ville",
      alinea:
        "**La livraison, l'installation et la reprise font partie de votre pack de séchage.** Vous indiquez une date de livraison lors de la réservation ; nous vous appelons ou vous écrivons ensuite pour fixer le moment de livraison à Villers-la-Ville. Le trajet depuis Aartselaar dure un peu plus d'une heure. Faites-nous savoir à l'avance s'il y a du courant triphasé pour un chauffage de chantier et comment le chantier est accessible. Après l'installation, le technicien explique comment suivre les appareils.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Villers-la-Ville",
      alinea:
        "L'enlèvement est possible sur rendez-vous au Boomsesteenweg 12, unit 11 à Aartselaar. Depuis Villers-la-Ville, vous roulez un peu plus d'une heure, et cela deux fois : à l'enlèvement et à nouveau au retour. **Réservez à l'avance**, pour que l'appareil soit prêt. Un chauffage de chantier ou plusieurs déshumidificateurs, mieux vaut les faire livrer et installer.",
    },
    buren: ["court-saint-etienne", "genepien", "chastre"],
    faq: [
      {
        q: "Ai-je besoin d'un chauffage de chantier pour sécher en hiver ?",
        a: "Pas toujours, mais dans une maison non chauffée, cela aide. Un déshumidificateur à condensation travaille lentement en dessous de 15 °C. Un chauffage de chantier électrique met la pièce à température, ou nous choisissons le déshumidificateur à adsorption, qui fonctionne aussi dans le froid.",
      },
      {
        q: "Quel raccordement demande le chauffage de chantier de 30 kW ?",
        a: "Ce chauffage fonctionne sur courant triphasé de 400 V. Faites vérifier à l'avance si votre chantier dispose de ce raccordement et si la protection suffit. Les déshumidificateurs eux-mêmes fonctionnent sur une prise standard de 230 V.",
      },
      {
        q: "Comment organiser une livraison à Villers-la-Ville ?",
        a: "Réservez votre pack de séchage et choisissez une date de livraison. En Wallonie, nous livrons sur rendez-vous, nous vous contactons donc ensuite pour l'heure. Communiquez l'adresse, le chemin d'accès et les raccordements disponibles.",
      },
      {
        q: "De combien de déshumidificateurs ai-je besoin ?",
        a: "Cela dépend du volume, du nombre de pièces, de la température et de la quantité d'humidité. Un étage ouvert demande un autre dispositif que des pièces fermées. Utilisez le calculateur pour une première proposition et appelez-nous si votre chantier sort de l'ordinaire.",
      },
      {
        q: "Comment savoir si la chape est assez sèche ?",
        a: "Seule une mesure d'humidité permet de trancher. Votre poseur de sol connaît l'humidité résiduelle que son revêtement demande et peut la mesurer. Tant que cette valeur n'est pas atteinte, mieux vaut laisser tourner le déshumidificateur.",
      },
    ],
    realisaties: [],
  },

  walhain: {
    slug: "walhain",
    title: "Louer un déshumidificateur de chantier à Walhain | Vernast",
    description:
      "Louer un déshumidificateur à Walhain ? Vernast apporte votre pack de séchage sur rendez-vous, l'installe et le reprend. Pour chape, plafonnage et rénovation.",
    h1: "Location de déshumidificateur de chantier à Walhain",
    kicker: "Walhain · livraison sur rendez-vous",
    rit: { afstand: "environ 78 km", tijd: "environ une heure" },
    intro: [
      "Besoin d'un déshumidificateur de chantier à Walhain pour une rénovation, une construction neuve ou après des dégâts des eaux ? Vernast loue les appareils sous forme de pack de séchage, adapté à votre chantier. **Nous livrons les appareils, les installons et venons les reprendre ensuite.**",
      "Walhain se trouve à environ une heure de route de notre entrepôt d'Aartselaar. Vous choisissez une date de livraison lors de la réservation, et nous convenons ensuite du moment de livraison, comme pour toute livraison en Wallonie.",
    ],
    bouw: {
      kop: "Le séchage de chantier pour votre projet à Walhain",
      alineas: [
        "Walhain est une commune rurale aux villages dispersés entre Chastre, Mont-Saint-Guibert et Chaumont-Gistoux. Vous rénovez une maison ancienne ou une ferme ? Dites-nous quelles pièces sont humides et quelle est l'épaisseur des murs. Indiquez aussi l'adresse complète et la personne qui nous accueillera.",
        "Une chape fraîche et un nouveau plafonnage libèrent de l'humidité pendant des semaines. **La durée du séchage dépend de l'épaisseur, de la composition, de la température et de l'humidité de l'air.** Une surface sèche ne signifie pas que le sol ou le mur est prêt pour la finition ; c'est à cela que sert la mesure d'humidité de votre poseur de sol ou de votre peintre.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**Pour une maison entière ou une grande transformation.** Jusqu'à 110 litres par jour dans des pièces jusqu'à 600 m³, branché sur une prise standard.",
      },
      {
        key: "radiaal2250",
        waarom: "**Pour diriger l'air le long d'un plafonnage ou d'une chape.** Le ventilateur radial déplace 2 250 m³ par heure et résiste aux projections d'eau (IP55). Il travaille avec un déshumidificateur, pas à sa place.",
      },
      {
        key: "ttk350",
        waarom: "**Pour une maison dont plusieurs pièces sèchent en même temps.** Ce déshumidificateur retire jusqu'à 70 litres par jour dans des pièces jusqu'à 400 m³ et consomme 1,1 kW.",
      },
      {
        key: "teddh30",
        waarom: "**Pour une ferme froide ou une construction neuve sans chauffage.** Ce chauffage de chantier fournit 30 kW et demande un raccordement triphasé de 400 V. La chaleur accélère le séchage, le déshumidificateur capte l'humidité.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Walhain",
      alinea:
        "**Votre pack de séchage comprend la livraison, l'installation et la reprise.** Lors de la réservation, vous choisissez une date de livraison ; nous fixons ensuite avec vous le moment précis de la livraison à Walhain. Depuis Aartselaar, nous roulons environ une heure. Signalez à l'avance un accès étroit, un chemin de campagne ou un étage sans escalier fixe. Lors de l'installation, le technicien vous montre comment utiliser les appareils.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Walhain",
      alinea:
        "L'enlèvement est possible sur rendez-vous à notre entrepôt, Boomsesteenweg 12, unit 11 à Aartselaar. Depuis Walhain, cela représente environ une heure de route, à l'enlèvement et une nouvelle fois au retour. **Réservez à l'avance**, et votre appareil sera prêt. Vous avez besoin d'un chauffage de chantier ou de plusieurs déshumidificateurs ? Optez plutôt pour la livraison avec installation.",
    },
    buren: ["chastre", "mont-saint-guibert", "chaumont-gistoux", "perwijs"],
    faq: [
      {
        q: "Comment organiser une livraison à Walhain ?",
        a: "Calculez votre pack de séchage en ligne et choisissez une date de livraison. Nous vous contactons ensuite pour convenir de l'heure. Communiquez l'adresse du chantier, l'étage et les raccordements électriques disponibles.",
      },
      {
        q: "Un déshumidificateur sèche-t-il aussi les murs épais d'une vieille ferme ?",
        a: "Un déshumidificateur retire l'humidité de l'air, après quoi les murs libèrent lentement leur humidité. Les murs épais sèchent donc plus lentement qu'une chape mince. Parlez-nous de la composition des murs, et nous adapterons le dispositif et la durée de location.",
      },
      {
        q: "Combien d'appareils faut-il pour ma rénovation ?",
        a: "Cela dépend du volume, de l'agencement et de la quantité d'humidité dans les sols et les murs. Utilisez le calculateur pour une première proposition. Si votre situation est particulière, par exemple avec de hauts plafonds ou une humidité cachée, demandez conseil.",
      },
      {
        q: "Quel raccordement demande un chauffage de chantier ?",
        a: "Les chauffages de chantier électriques de 20 et 30 kW fonctionnent sur courant triphasé de 400 V. Demandez à votre électricien de vérifier si le chantier dispose de ce raccordement. Pour les déshumidificateurs et les ventilateurs, une prise standard suffit.",
      },
      {
        q: "Un déshumidificateur règle-t-il l'humidité ascensionnelle ?",
        a: "Non. Un déshumidificateur sèche l'air et les matériaux, mais n'arrête pas l'arrivée de nouvelle humidité. En cas d'humidité ascensionnelle ou de fuite, faites d'abord traiter la cause ; ce n'est qu'ensuite que le séchage donne un résultat durable.",
      },
    ],
    realisaties: [],
  },

  waterloo: {
    slug: "waterloo",
    title: "Location de déshumidificateur à Waterloo | Vernast",
    description:
      "Déshumidificateur à louer à Waterloo ? Vernast livre et installe votre pack de séchage sur rendez-vous, aussi pour grandes maisons et caves, puis le reprend.",
    h1: "Location de déshumidificateur de chantier à Waterloo",
    kicker: "Waterloo · livraison sur rendez-vous",
    rit: { afstand: "environ 55 km", tijd: "environ cinquante minutes" },
    intro: [
      "Waterloo est une commune résidentielle du Brabant wallon, en bordure de la forêt de Soignes. Beaucoup de maisons y sont spacieuses et ont une cave. Vous rénovez une villa, vous faites couler une nouvelle chape ou une cave doit sécher après une fuite ? Chez Vernast, vous louez les appareils adaptés à ce volume.",
      "Notre technicien roule environ cinquante minutes d'Aartselaar à Waterloo. En Wallonie, la livraison se fait **sur rendez-vous** : lors de la réservation, vous choisissez un jour, puis nous vous appelons pour fixer l'heure. L'installation et la reprise font partie du pack de séchage.",
    ],
    bouw: {
      kop: "Sécher de grandes maisons et des caves à Waterloo",
      alineas: [
        "Dans une maison spacieuse aux plafonds hauts, le volume grimpe vite. Un séjour de 80 m² avec 3 mètres de hauteur fait déjà 240 m³, sans compter le reste de la maison. C'est pourquoi, dans les grandes maisons, nous combinons souvent un déshumidificateur puissant dans la pièce centrale avec un plus petit dans les pièces fermées.",
        "Les caves demandent une approche propre. Elles sont fraîches, si bien qu'un déshumidificateur à condensation y a moins de rendement, et l'humidité vient souvent de l'extérieur. **Faites d'abord vérifier si de l'eau s'infiltre** par les murs ou le sol. Choisissez ensuite entre un déshumidificateur à adsorption pour une cave froide et un déshumidificateur à condensation si la pièce est chauffée.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**Pour un séjour spacieux ou une villa entière en phase de finition.** Retire jusqu'à 110 litres d'humidité par jour dans des volumes jusqu'à environ 600 m³, pour une consommation de 1,4 kW.",
      },
      {
        key: "ttk350",
        waarom: "**En complément dans les pièces fermées ou à l'étage.** Jusqu'à 70 litres par jour et adapté à environ 400 m³. Il consomme 1,1 kW.",
      },
      {
        key: "revolution",
        waarom: "**Pour la cave.** Ce déshumidificateur à adsorption retire l'humidité de l'air même à basse température et sèche, grâce à des gaines, les espaces sous un sol ou derrière une paroi.",
      },
      {
        key: "ttv4500",
        waarom: "**Pour faire circuler l'air dans un grand espace.** Ce ventilateur déplace 4 500 m³ par heure pour 0,2 kW. Il veille à ce que l'air humide atteigne le déshumidificateur, et ne retire lui-même aucune humidité.",
      },
    ],
    levering: {
      kop: "Livraison et installation à Waterloo",
      alinea:
        "**À Waterloo, nous livrons sur rendez-vous.** Vous fixez la date de livraison lors de la réservation, nous vous appelons pour l'heure. Depuis Aartselaar, nous sommes en route environ cinquante minutes. Dites-nous s'il y a une allée, si les appareils doivent descendre à la cave et si l'escalier de la cave est raide. Le technicien installe tout et vous montre comment garder un œil sur l'évacuation des condensats.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Waterloo",
      alinea:
        "Vous voulez transporter vous-même un appareil ? Vous venez le chercher sur rendez-vous au Boomsesteenweg 12, unit 11 à Aartselaar. Depuis Waterloo, comptez environ cinquante minutes de route, et cela deux fois : à l'enlèvement et au retour. **Réservez à l'avance**, pour qu'il soit prêt. Pour une grande maison avec plusieurs appareils, la livraison avec installation est le choix logique.",
    },
    buren: ["eigenbrakel", "lasne", "sint-genesius-rode"],
    faq: [
      {
        q: "Comment planifier une livraison à Waterloo ?",
        a: "Composez votre pack de séchage en ligne et choisissez la date de livraison. En Wallonie, nous livrons sur rendez-vous : nous vous appelons donc ensuite pour convenir de l'heure. Indiquez clairement l'adresse et l'accès à la maison.",
      },
      {
        q: "Quel déshumidificateur placer dans une cave froide ?",
        a: "Un déshumidificateur à adsorption. Un déshumidificateur à condensation fonctionne au mieux au-dessus de 15 °C et retire trop peu d'humidité de l'air dans une cave fraîche. Un déshumidificateur à adsorption n'en souffre pas et sèche aussi, grâce à des gaines, les endroits difficiles d'accès.",
      },
      {
        q: "Combien d'appareils faut-il pour une grande maison ?",
        a: "Calculez d'abord le volume : surface multipliée par la hauteur sous plafond, pièce par pièce. Un séjour ouvert sèche avec un grand appareil, les pièces fermées en demandent chacune un. Le calculateur compose un pack, et pour une maison hors du commun, nous réfléchissons avec vous par téléphone.",
      },
      {
        q: "Un déshumidificateur règle-t-il durablement l'humidité de la cave ?",
        a: "Seulement si l'eau ne continue pas d'entrer. Un déshumidificateur retire l'humidité présente, mais ne répare pas un mur fissuré ni une barrière contre l'humidité manquante. Faites donc d'abord traiter la cause.",
      },
      {
        q: "Puis-je venir chercher moi-même un appareil pour un chantier à Waterloo ?",
        a: "Oui, sur rendez-vous à notre entrepôt d'Aartselaar, à environ cinquante minutes de route de Waterloo. Réservez à l'avance et vérifiez que l'appareil tient dans votre voiture. Vous recevez les instructions de transport à l'enlèvement.",
      },
    ],
    realisaties: [],
  },
};
