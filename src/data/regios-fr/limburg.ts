import { routeFr, dagFr, LADDER_FR, POMP_FR, provinceFr, type RegioFr } from "./basis.js";

/** Franse tekst van de provinciepagina Limburg, vertaald uit regios.ts. */
export const REGIO: RegioFr = {
  ...routeFr("limburg"),
  dans: "dans le Limbourg",
  title: "Location déshumidificateur Limbourg | Votre prix | Vernast",
  description:
    "Louer un déshumidificateur de chantier dans le Limbourg ? Calculez votre pack de séchage chez Vernast. Livraison, installation et reprise comprises.",
  h1: "Location de déshumidificateur de chantier dans le Limbourg",
  kicker: "Hasselt · Genk · Saint-Trond · Tongres · Maasland",
  intro: [
    "Besoin d'un déshumidificateur de chantier pour votre construction neuve, votre rénovation ou après des dégâts des eaux dans le Limbourg ? Vernast livre et installe des déshumidificateurs de chantier sur votre chantier, de Hasselt et Genk jusqu'à Saint-Trond et le Maasland. **Avec un pack de séchage, la livraison, l'installation et la reprise sont comprises.** Calculez votre pack et votre prix de location en ligne ou appelez-nous pour être conseillé sur les appareils dont vous avez besoin.",
  ],
  bouw: {
    kop: "Le séchage de chantier pour votre projet dans le Limbourg",
    alineas: [
      "Pour votre chantier dans le Limbourg, nous partons des dimensions et de l'agencement réels. Si un rez-de-chaussée, un étage et un garage doivent sécher en même temps, communiquez les données de chaque espace. Un appareil placé dans le couloir n'atteint pas d'office chaque pièce fermée. Le nombre de déshumidificateurs découle du projet ; il n'existe pas de pack fixe qui convienne à chaque habitation limbourgeoise.",
      "Une nouvelle chape et un plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été posé. L'installation de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
      "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
      "**La température et la circulation de l'air comptent aussi.** Sur un chantier froid, un chauffage d'appoint peut être nécessaire, selon le déshumidificateur et les conditions. Discutez de l'alimentation électrique avant de réserver un chauffage de chantier. La capacité maximale sur la fiche d'un appareil n'est pas une quantité d'eau fixe que l'appareil évacuera chaque jour sur n'importe quel chantier.",
    ],
  },
  beeld: {
    src: "/vernast/case-chape-v2.webp",
    alt: "Chape fraîche avec des zones humides pendant le séchage dans une construction neuve limbourgeoise",
  },
  toestellen: {
    kop: "Quels appareils conviennent à votre chantier ?",
    items: [
      {
        key: "ttk650",
        waarom: `**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter l'installation aux espaces qui doivent réellement être séchés. À partir de ${dagFr("ttk650")} par jour.`,
      },
      {
        key: "ttk350",
        waarom: `**Pour les grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et du matériau humide. L'agencement de votre chantier détermine où les appareils seront placés. À partir de ${dagFr("ttk350")} par jour.`,
      },
      {
        key: "teddh30",
        waarom: `**Pour un chauffage d'appoint sur un chantier froid.** Ce chauffage électrique nécessite un raccordement 400 V adapté. Faites vérifier à l'avance si l'alimentation disponible correspond à la puissance de raccordement. À partir de ${dagFr("teddh30")} par jour.`,
      },
      {
        key: "ttv4500",
        waarom: `**Pour la circulation de l'air en complément du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur. À partir de ${dagFr("ttv4500")} par jour.`,
      },
    ],
  },
  levering: {
    kop: "Livraison et installation dans le Limbourg",
    alineas: [
      "Nous livrons à Hasselt, Genk, Saint-Trond, Maaseik et dans les autres communes du Limbourg. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse complète du chantier, la date de début souhaitée et une personne de contact. Signalez les particularités, comme un passage étroit, un étage sans escalier fixe ou une zone de chargement limitée, avant que nous fixions la livraison.",
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
    kop: "Venir chercher vous-même depuis le Limbourg",
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
      q: "Comment organiser une livraison dans le Limbourg ?",
      a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse dans le Limbourg, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
      q: "Puis-je venir chercher un appareil pour un chantier dans le Limbourg ?",
      a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
    },
  ],
  realisaties: {
    kop: "Chantiers que nous avons séchés dans le Limbourg",
    intro: "Découvrez des projets réalisés dans cette région. Pour chaque projet, vous trouverez le lieu, les travaux effectués et les photos disponibles.",
    slugs: ["chape-pleisterwerk-drogen-hasselt", "waterschade-drogen-bocholt"],
  },
  areaServed: provinceFr("Limbourg"),
};
