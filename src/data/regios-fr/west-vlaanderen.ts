import { routeFr, dagFr, LADDER_FR, POMP_FR, provinceFr, type RegioFr } from "./basis.js";

/** Franse tekst van de provinciepagina West-Vlaanderen, vertaald uit regios.ts. */
export const REGIO: RegioFr = {
  ...routeFr("west-vlaanderen"),
  dans: "en Flandre occidentale",
  title: "Location déshumidificateur en Flandre occidentale | Vernast",
  description:
    "Louer un déshumidificateur de chantier en Flandre occidentale ? Calculez votre pack de séchage chez Vernast. Livraison, installation et reprise incluses.",
  h1: "Location de déshumidificateur de chantier en Flandre occidentale",
  kicker: "Bruges · Courtrai · Ostende · Roulers · la côte",
  intro: [
    "Besoin d'un déshumidificateur de chantier pour une chape, un plafonnage ou des dégâts des eaux en Flandre occidentale ? Vernast livre sur votre chantier, de Bruges et Ostende jusqu'à Courtrai et Roulers. **Le prix de votre pack de séchage comprend la livraison, l'installation et la reprise.** Calculez votre pack en ligne ou contactez-nous pour vous aider à choisir les bons appareils.",
  ],
  heroFacts: [
    "Livraison et installation avec votre pack de séchage",
    "Mesure avant et après comprise",
    "Reprise après la période de location",
  ],
  bouw: {
    kop: "Le séchage de chantier pour votre projet en Flandre occidentale",
    alineas: [
      "D'un appartement à la côte à une rénovation à Courtrai ou une construction neuve près de Roulers : indiquez-nous quel espace vous souhaitez sécher et comment il est accessible. Pour une résidence secondaire, il est utile de convenir à l'avance de qui réceptionne les appareils et peut contrôler l'installation pendant la location. Accordez-vous avec le gestionnaire pour un éventuel accès par les parties communes.",
      "Une nouvelle chape et un plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été posé. L'installation de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
      "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
      "**La température et la circulation de l'air comptent aussi.** Sur un chantier froid, un chauffage d'appoint peut être nécessaire, selon le déshumidificateur et les conditions. Discutez de l'alimentation électrique avant de réserver un chauffage de chantier. La capacité maximale sur la fiche d'un appareil n'est pas une quantité d'eau fixe que l'appareil évacuera chaque jour sur n'importe quel chantier.",
    ],
  },
  beeld: {
    src: "/vernast/case-keuken.webp",
    alt: "Pose d'une cuisine contre un mur asséché dans un appartement à la côte",
  },
  toestellen: {
    kop: "Quels appareils conviennent à votre chantier ?",
    items: [
      {
        key: "ttk650",
        waarom: `**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés. À partir de ${dagFr("ttk650")} par jour.`,
      },
      {
        key: "revolution",
        waarom: `**Pour une installation de séchage après des dégâts des eaux.** Discutez d'abord de l'endroit où se trouve l'humidité et de la composition de la construction. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire. À partir de ${dagFr("revolution")} par jour.`,
      },
      {
        key: "ttk350",
        waarom: `**Pour les grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et du matériau humide. L'agencement de votre chantier détermine où les appareils seront placés. À partir de ${dagFr("ttk350")} par jour.`,
      },
      {
        key: "ttv4500",
        waarom: `**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur. À partir de ${dagFr("ttv4500")} par jour.`,
      },
    ],
  },
  levering: {
    kop: "Livraison et installation en Flandre occidentale",
    alineas: [
      "Nous livrons à Bruges, Courtrai, Roulers, Ostende et dans les autres communes de Flandre occidentale. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse complète du chantier, la date de début souhaitée et une personne de contact. Signalez les particularités, comme un passage étroit, un étage sans escalier fixe ou une zone de chargement limitée, avant que nous fixions la livraison.",
      "Le technicien répartit les appareils sur les zones de séchage convenues et explique comment utiliser l'installation. Nous abordons aussi l'évacuation des condensats et ce que vous contrôlez vous-même pendant la location. Gardez l'accès libre et veillez à ce que l'alimentation électrique convenue soit disponible. Si quelque chose change sur le chantier ou si de l'eau entre à nouveau, contactez-nous.",
    ],
    feiten: [
      { label: "Livraison, installation et reprise", waarde: "Comprises dans le pack de séchage" },
      { label: "Moment de livraison", waarde: "Selon votre réservation" },
      { label: "Étage sans escalier fixe", waarde: `À discuter au préalable ; supplément échelle de ${LADDER_FR} par étage` },
      { label: "Pompe à condensats", waarde: `${POMP_FR} par déshumidificateur et par jour, si choisie` },
    ],
  },
  afhalen: {
    kop: "Venir chercher vous-même depuis la Flandre occidentale",
    alineas: [
      "Vous pouvez venir chercher un appareil seul sur rendez-vous à notre entrepôt, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance et consultez les tarifs d'enlèvement.** Pour choisir entre l'enlèvement et la livraison, tenez aussi compte du retour. Vérifiez que l'appareil entre dans votre véhicule et suivez les instructions de transport du modèle choisi.",
      "Si vous venez le chercher vous-même, vous installez l'appareil vous-même. Indiquez donc à l'avance ce qui doit sécher et de quel raccordement vous disposez. Pour plusieurs pièces, des zones difficiles d'accès ou un doute sur la capacité nécessaire, vous pouvez demander conseil pour un pack de séchage avec installation. La période de location convenue et les éventuelles options figurent dans votre réservation.",
    ],
    feiten: [
      { label: "Point d'enlèvement", waarde: "Boomsesteenweg 12, unit 11, Aartselaar" },
      { label: "Moment d'enlèvement", waarde: "Sur rendez-vous" },
      { label: "Transport", waarde: "Selon les instructions de l'appareil choisi" },
      { label: "Vous préférez la livraison ?", waarde: "Livraison et installation comprises dans votre pack de séchage" },
    ],
  },
  faq: [
    {
      q: "Comment organiser une livraison en Flandre occidentale ?",
      a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse en Flandre occidentale, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
      q: "Puis-je faire sécher un local professionnel pendant les travaux ?",
      a: "Discutez au préalable des espaces qui restent en service, de l'alimentation électrique disponible et de votre planning. Nous adaptons l'installation en conséquence. Un grand espace ouvert demande une autre répartition que plusieurs pièces fermées ; la seule surface totale au sol ne suffit donc pas pour vous conseiller.",
    },
    {
      q: "De quelle alimentation électrique ai-je besoin ?",
      a: "La puissance de raccordement varie selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW nécessitent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection.",
    },
    {
      q: "Puis-je venir chercher un appareil pour un chantier en Flandre occidentale ?",
      a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
    },
  ],
  realisaties: {
    kop: "Chantiers que nous avons séchés en Flandre occidentale",
    intro: "Découvrez des projets réalisés dans cette région. Pour chaque projet, vous trouverez le lieu, les travaux effectués et les photos disponibles.",
    slugs: ["pleisterwerk-drogen-oostende", "kelder-drogen-brugge"],
  },
  areaServed: provinceFr("Flandre occidentale"),
};
