import { routeFr, dagFr, LADDER_FR, POMP_FR, provinceFr, type RegioFr } from "./basis.js";

/** Franse tekst van de provinciepagina Antwerpen, vertaald uit regios.ts. */
export const REGIO: RegioFr = {
  ...routeFr("antwerpen"),
  dans: "dans la province d'Anvers",
  title: "Location déshumidificateur province d'Anvers | Vernast",
  description:
    "Louer un déshumidificateur de chantier à Anvers ? Calculez votre pack de séchage chez Vernast. Livraison, installation et reprise incluses, avec conseils.",
  h1: "Location de déshumidificateur de chantier dans la province d'Anvers",
  kicker: "Toute la province · entrepôt à Aartselaar",
  intro: [
    "Vous cherchez à louer un déshumidificateur de chantier dans la province d'Anvers pour une construction neuve, une rénovation ou des dégâts des eaux ? Vernast livre sur votre chantier depuis Aartselaar, de Malines et Lierre jusqu'à Turnhout et aux districts d'Anvers. **Votre pack de séchage comprend la livraison, l'installation et la reprise.** Calculez votre prix de location en ligne ou demandez-nous conseil sur les appareils adaptés.",
  ],
  bouw: {
    kop: "Le séchage de chantier pour votre projet à Anvers",
    alineas: [
      "Pour un chantier dans la province d'Anvers, vous avez le choix entre la livraison et l'enlèvement à Aartselaar. Venir chercher l'appareil est surtout pratique lorsque vous n'en avez besoin que d'un seul et que vous pouvez le transporter vous-même. Pour un pack de séchage complet, le technicien se charge de l'installation. Indiquez à l'avance quelles pièces doivent sécher et si elles sont accessibles par un escalier fixe ou un ascenseur.",
      "Une chape neuve et le plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Précisez aussi quand le matériau a été posé. Le dispositif de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
      "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Ensuite, nous examinons quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
      "**La température et la circulation de l'air comptent aussi.** Sur un chantier froid, un chauffage d'appoint peut être nécessaire, selon le déshumidificateur et les conditions. Discutez de l'alimentation électrique avant de réserver un chauffage de chantier. La capacité maximale indiquée sur une fiche technique n'est pas une quantité d'eau fixe que l'appareil évacuera chaque jour sur chaque chantier.",
    ],
  },
  beeld: {
    src: "/vernast/case-renovatie.webp",
    alt: "Rénovation avec un plafonnage frais dans une maison mitoyenne anversoise",
  },
  toestellen: {
    kop: "Quels appareils conviennent à votre chantier ?",
    items: [
      {
        key: "ttk170",
        waarom: `**Pour une pièce isolée ou une zone de séchage plus petite.** Indiquez les dimensions, la température et la quantité d'humidité pour déterminer si cet appareil a une capacité suffisante. À partir de ${dagFr("ttk170")} par jour.`,
      },
      {
        key: "ttk350",
        waarom: `**Pour de plus grandes pièces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et des matériaux humides. La disposition de votre chantier détermine où les appareils seront placés. À partir de ${dagFr("ttk350")} par jour.`,
      },
      {
        key: "teddh30",
        waarom: `**Pour un chauffage d'appoint sur un chantier froid.** Ce chauffage électrique demande un raccordement 400 V adapté. Faites vérifier à l'avance si l'alimentation disponible correspond à la puissance de raccordement. À partir de ${dagFr("teddh30")} par jour.`,
      },
      {
        key: "ttv4500",
        waarom: `**Pour la circulation de l'air à côté du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur. À partir de ${dagFr("ttv4500")} par jour.`,
      },
    ],
  },
  levering: {
    kop: "Livraison et installation à Anvers",
    alineas: [
      "Nous livrons à Anvers ville, Malines, Lierre, Turnhout et dans les autres communes de la province. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse complète du chantier, la date de début souhaitée et une personne de contact. Signalez les particularités, comme un passage étroit, un étage sans escalier fixe ou une zone de chargement limitée, avant que nous convenions de la livraison.",
      "Le technicien répartit les appareils sur les zones de séchage convenues et explique comment utiliser le dispositif. Nous abordons aussi l'évacuation des condensats et ce que vous contrôlez vous-même pendant la location. Gardez l'accès libre et veillez à ce que l'alimentation électrique convenue soit disponible. Si quelque chose change sur le chantier ou si l'eau entre à nouveau, prenez contact avec nous.",
    ],
    feiten: [
      { label: "Livraison, installation et reprise", waarde: "Comprises dans le pack de séchage" },
      { label: "Moment de livraison", waarde: "Selon votre réservation" },
      { label: "Étage sans escalier fixe", waarde: `À discuter au préalable ; supplément échelle ${LADDER_FR} par étage` },
      { label: "Pompe à condensats", waarde: `${POMP_FR} par déshumidificateur et par jour, si choisie` },
    ],
  },
  afhalen: {
    kop: "Venir chercher vous-même depuis Anvers",
    alineas: [
      "Un appareil seul peut être retiré sur rendez-vous à notre entrepôt, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance et consultez les tarifs d'enlèvement.** Pour choisir entre enlèvement et livraison, tenez compte aussi du retour. Vérifiez que l'appareil entre dans votre véhicule et suivez les instructions de transport du modèle choisi.",
      "Si vous venez chercher l'appareil, vous l'installez vous-même. Indiquez donc à l'avance ce qui doit sécher et de quel raccordement vous disposez. Pour plusieurs pièces, des zones difficiles d'accès ou en cas de doute sur la capacité nécessaire, vous pouvez demander conseil pour un pack de séchage avec installation. La durée de location convenue et les éventuelles options figurent dans votre réservation.",
    ],
    feiten: [
      { label: "Point d'enlèvement", waarde: "Boomsesteenweg 12, unit 11, Aartselaar" },
      { label: "Moment d'enlèvement", waarde: "Sur rendez-vous" },
      { label: "Transport", waarde: "Selon les instructions de l'appareil choisi" },
      { label: "Vous préférez une livraison ?", waarde: "Livraison et installation comprises dans votre pack de séchage" },
    ],
  },
  faq: [
    {
      q: "Comment organiser une livraison dans la province d'Anvers ?",
      a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse dans la province d'Anvers, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
      q: "Puis-je venir chercher un appareil pour un chantier dans la province d'Anvers ?",
      a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
    },
  ],
  realisaties: {
    kop: "Chantiers que nous avons séchés à Anvers et dans les environs",
    intro: "Découvrez des projets réalisés dans cette région. Pour chaque projet, vous trouverez le lieu, les travaux effectués et les photos disponibles.",
    slugs: ["kelder-en-kamer-drogen-antwerpen", "nieuwbouw-drogen-kontich", "nieuwbouwvilla-drogen-schilde"],
  },
  areaServed: provinceFr("Anvers"),
};
