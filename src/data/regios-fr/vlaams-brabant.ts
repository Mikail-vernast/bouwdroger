import { routeFr, dagFr, LADDER_FR, POMP_FR, provinceFr, type RegioFr } from "./basis.js";

/** Franse tekst van de provinciepagina Vlaams-Brabant, vertaald uit regios.ts. */
export const REGIO: RegioFr = {
  ...routeFr("vlaams-brabant"),
  dans: "en Brabant flamand",
  title: "Location de déshumidificateur en Brabant flamand | Vernast",
  description:
    "Déshumidificateur de chantier en Brabant flamand ? Calculez votre pack de séchage chez Vernast. Livraison, installation et reprise comprises, avec conseils.",
  h1: "Location de déshumidificateur de chantier en Brabant flamand",
  kicker: "Louvain · Vilvorde · Hal · Aarschot · la périphérie bruxelloise",
  intro: [
    "Louez un déshumidificateur de chantier pour votre construction neuve, votre rénovation ou après des dégâts des eaux en Brabant flamand. Vernast livre dans toute la province, de Louvain et Aarschot jusqu'à Hal et la périphérie bruxelloise. **La livraison, l'installation et la reprise sont comprises dans le prix de votre pack de séchage.** Calculez en ligne le pack adapté à votre chantier ou appelez-nous pour un conseil.",
  ],
  bouw: {
    kop: "Séchage de chantier pour votre projet en Brabant flamand",
    alineas: [
      "Pour un chantier à Louvain, dans la périphérie bruxelloise, le Hageland ou le Pajottenland, le point de départ est la situation à l'intérieur du bâtiment. S'agit-il d'un appartement habité, d'une maison en rénovation ou d'un chantier neuf ouvert ? Indiquez quelles pièces restent utilisées et quand le prochain entrepreneur arrive. Nous pourrons ainsi discuter avec vous de l'installation et du suivi.",
      "Une chape neuve et le plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été appliqué. Le dispositif de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
      "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
      "**La température et la circulation de l'air comptent aussi.** Sur un chantier froid, un chauffage d'appoint peut être nécessaire, selon le déshumidificateur et les conditions. Discutez de l'alimentation électrique avant de réserver un chauffage de chantier. La capacité maximale indiquée sur la fiche d'un appareil n'est pas une quantité d'eau fixe que l'appareil évacuera chaque jour sur n'importe quel chantier.",
    ],
  },
  beeld: {
    src: "/vernast/case-nieuwbouw.webp",
    alt: "Villa rénovée en cours de finition dans la périphérie bruxelloise",
  },
  toestellen: {
    kop: "Quels appareils conviennent à votre chantier ?",
    items: [
      {
        key: "ttk350",
        waarom: `**Pour de grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et des matériaux humides. L'agencement de votre chantier détermine l'emplacement des appareils. À partir de ${dagFr("ttk350")} par jour.`,
      },
      {
        key: "ttk650",
        waarom: `**Pour de grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées. À partir de ${dagFr("ttk650")} par jour.`,
      },
      {
        key: "radiaal2250",
        waarom: `**Pour une circulation d'air ciblée le long d'un sol ou d'un mur.** L'emplacement dépend de la zone à sécher. Combinez le déplacement d'air avec une capacité de déshumidification suffisante. À partir de ${dagFr("radiaal2250")} par jour.`,
      },
      {
        key: "ttk170",
        waarom: `**Pour une pièce séparée ou une zone de séchage plus petite.** Discutez des dimensions, de la température et de la quantité d'humidité pour déterminer si cet appareil a une capacité suffisante. À partir de ${dagFr("ttk170")} par jour.`,
      },
    ],
  },
  levering: {
    kop: "Livraison et installation en Brabant flamand",
    alineas: [
      "Nous livrons à Louvain, Vilvorde, Hal, Aarschot et dans les autres communes du Brabant flamand. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse complète du chantier, la date de début souhaitée et une personne de contact. Signalez les particularités comme un passage étroit, un étage sans escalier fixe ou une zone de chargement limitée avant que nous convenions de la livraison.",
      "Le technicien répartit les appareils sur les zones de séchage convenues et explique comment utiliser le dispositif. Nous parlons aussi de l'évacuation des condensats et de ce que vous contrôlez vous-même pendant la location. Gardez l'accès libre et veillez à ce que l'alimentation électrique convenue soit disponible. Si quelque chose change sur le chantier ou si de l'eau entre à nouveau, contactez-nous.",
    ],
    feiten: [
      { label: "Livraison, installation et reprise", waarde: "Comprises dans le pack de séchage" },
      { label: "Moment de livraison", waarde: "Selon votre réservation" },
      { label: "Étage sans escalier fixe", waarde: `À discuter au préalable ; supplément échelle de ${LADDER_FR} par étage` },
      { label: "Pompe à condensats", waarde: `${POMP_FR} par déshumidificateur et par jour, si choisie` },
    ],
  },
  afhalen: {
    kop: "Enlèvement depuis le Brabant flamand",
    alineas: [
      "Vous pouvez venir chercher un appareil seul sur rendez-vous à notre entrepôt, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance et consultez les tarifs d'enlèvement.** Pour choisir entre l'enlèvement et la livraison, tenez compte aussi du retour de l'appareil. Vérifiez que l'appareil tient dans votre véhicule et suivez les instructions de transport du modèle choisi.",
      "En cas d'enlèvement, vous installez l'appareil vous-même. Indiquez donc à l'avance ce qui doit sécher et de quel raccordement vous disposez. Pour plusieurs pièces, des zones difficiles d'accès ou un doute sur la capacité nécessaire, vous pouvez demander conseil pour un pack de séchage avec installation. La période de location convenue et les éventuelles options figurent dans votre réservation.",
    ],
    feiten: [
      { label: "Point d'enlèvement", waarde: "Boomsesteenweg 12, unit 11, Aartselaar" },
      { label: "Moment d'enlèvement", waarde: "Sur rendez-vous" },
      { label: "Transport", waarde: "Selon les instructions de l'appareil choisi" },
      { label: "Vous préférez la livraison ?", waarde: "Livraison et installation comprises avec votre pack de séchage" },
    ],
  },
  faq: [
    {
      q: "Comment organiser une livraison en Brabant flamand ?",
      a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse en Brabant flamand, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier.",
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
      q: "Puis-je venir chercher un appareil moi-même pour un chantier en Brabant flamand ?",
      a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise.",
    },
  ],
  realisaties: {
    kop: "Chantiers que nous avons séchés à Bruxelles et dans sa périphérie",
    intro: "Découvrez des exemples de la Région de Bruxelles-Capitale toute proche. Pour chaque projet, vous trouverez le lieu, les travaux réalisés et les photos disponibles.",
    slugs: ["pleisterwerk-drogen-sint-pieters-woluwe", "badkamer-drogen-brussel"],
  },
  areaServed: provinceFr("Brabant flamand"),
};
