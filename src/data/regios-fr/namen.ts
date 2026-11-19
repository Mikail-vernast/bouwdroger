import { routeFr, dagFr, LADDER_FR, POMP_FR, provinceFr, type RegioFr } from "./basis.js";

/** Franse tekst van de provinciepagina Namen, vertaald uit regios.ts. Zegt "province de Namur" omdat de stad een eigen pagina heeft. */
export const REGIO: RegioFr = {
  ...routeFr("namen"),
  dans: "en province de Namur",
  title: "Location déshumidificateur en province de Namur | Vernast",
  description:
    "Location de déshumidificateur en province de Namur : Gembloux, Andenne, Dinant et Ciney. Livré, installé et repris depuis Aartselaar, sans caution.",
  h1: "Location de déshumidificateur en province de Namur",
  kicker: "Province de Namur · 38 communes · de la Hesbaye à la Semois",
  intro: [
    "Vous cherchez un déshumidificateur de chantier à louer en province de Namur, pour une ferme en rénovation, une nouvelle chape ou une cave inondée lors d'une crue ? Vernast apporte les appareils jusque sur votre chantier, d'Éghezée à Couvin et de Gembloux à Vresse-sur-Semois. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Quant à la distance, nous préférons être francs : **Gembloux et Éghezée sont à environ une heure par l'E411**, la ville de Namur un peu plus, Dinant et Philippeville à une heure et demie ou davantage, et Couvin et Vresse-sur-Semois font partie de nos trajets les plus longs. Cette page couvre toute la province ; la ville de Namur elle-même, avec Jambes et les quartiers au bord de l'eau, a sa propre page.",
  ],
  bouw: {
    kop: "Pourquoi loue-t-on un déshumidificateur en province de Namur ?",
    alineas: [
      "**À Namur, la Sambre se jette dans la Meuse**, et c'est le long des deux rivières que se trouve la partie la plus dense de la province : Sambreville, Jemeppe-sur-Sambre et Floreffe sur la Sambre, Andenne et Profondeville sur la Meuse. Ce sont d'anciens villages industriels et fluviaux, aux maisons mitoyennes souvent dotées d'une cave voûtée, à moitié sous le niveau de la berge. Lors d'une crue ou d'un gros orage, l'eau y entre, et chaque jour d'attente avant le séchage compte.",
      "**En amont, entre Yvoir et Hastière, la Meuse traverse des rochers calcaires.** Dinant est coincée entre la paroi rocheuse et le fleuve, et dans la vallée, beaucoup de maisons ont leur façade arrière contre le versant. L'eau du rocher s'infiltre le long du mur côté pente, si bien que ce mur arrière et la cave en dessous restent souvent humides alors que la façade avant est sèche. Un déshumidificateur placé près de ce mur en retire davantage qu'un appareil posé au milieu de la pièce.",
      "**Sur le plateau du Condroz**, autour de Ciney, Havelange et Hamois, les fermes et maisons de village sont en calcaire et en grès, avec des murs d'un demi-mètre d'épaisseur. Qui transforme un tel bâtiment en habitation coule de nouveaux sols et plafonne des murs intérieurs restés des années sans chauffage. Cette humidité ne ressort que lentement. **Plus au sud, en Famenne autour de Rochefort et en Ardenne autour de Gedinne et Bièvre, il s'agit souvent de secondes résidences** : des maisons restées vides tout un hiver, qui sentent le moisi et l'humidité au premier jour de printemps.",
      "Au nord s'étend **la Hesbaye namuroise, la partie wallonne de la Hesbaye** : un plateau limoneux aux grandes cultures autour d'Éghezée, Fernelmont et Gembloux. On y construit du neuf, dans des lotissements en bordure des villages, et il s'agit alors du séchage classique d'une construction neuve. Le plafonnage et la chape apportent ensemble des centaines de litres d'eau dans une maison, et cette eau doit sortir avant l'arrivée du poseur de parquet.",
    ],
  },
  beeld: {
    src: "/vernast/case-kelder.webp",
    alt: "Cave d'une maison ancienne avec un déshumidificateur de chantier contre le mur humide",
  },
  toestellen: {
    kop: "Quel déshumidificateur pour un chantier en province de Namur ?",
    items: [
      {
        key: "ttk350",
        waarom: `**Pour une construction neuve en Hesbaye ou un étage dans un village au bord de l'eau** : 70 litres par jour et une portée jusqu'à environ 400 m³. Dans une maison ordinaire, nous en plaçons un par niveau. À partir de ${dagFr("ttk350")} par jour.`,
      },
      {
        key: "ttk650",
        waarom: `**Pour une grange rénovée dans le Condroz ou une cave inondée** : 110 litres par jour, jusqu'à environ 600 m³. Un seul grand appareil là où deux plus petits devraient sinon se partager l'espace. À partir de ${dagFr("ttk650")} par jour.`,
      },
      {
        key: "revolution",
        waarom: `**Le déshumidificateur à adsorption pour la cave froide de la vallée de la Meuse ou la seconde résidence en Ardenne.** Il fonctionne aussi à basse température et souffle l'air sec par une gaine jusque contre le mur humide. Nous préférons examiner l'installation avec vous au préalable. À partir de ${dagFr("revolution")} par jour.`,
      },
      {
        key: "teddh30",
        waarom: `**Le chauffage électrique de 30 kW pour une ferme en pierre naturelle rénovée en hiver.** Ce n'est que lorsque la pièce est assez chaude qu'un déshumidificateur à condensation atteint sa pleine puissance. Nécessite du courant triphasé (400 V) sur le chantier. À partir de ${dagFr("teddh30")} par jour.`,
      },
    ],
  },
  levering: {
    kop: "Livraison en province de Namur : par l'E411, à une heure convenue",
    alineas: [
      "Depuis Aartselaar, nous prenons le ring de Bruxelles puis l'E411 vers le sud-est. **Gembloux, Éghezée et Sombreffe sont à environ une heure, la ville de Namur à une heure et quart.** Pour la vallée de la Meuse vers Dinant et pour le sud autour de Philippeville et Florennes, comptez une heure et demie ou plus. Couvin, Viroinval, Gedinne et Vresse-sur-Semois sont à environ deux heures ou un peu plus, et là, nous fixons l'heure de livraison avec vous.",
      `À son arrivée, le technicien mesure l'humidité des murs et du sol, place les appareils là où se trouve l'humidité et dirige l'évacuation vers un avaloir, un évier ou l'extérieur. **La montée par l'escalier est comprise** ; si l'escalier n'est pas encore posé, nous comptons ${LADDER_FR} par étage via l'échelle. Nous ne facturons pas les kilomètres : un chantier à Vresse-sur-Semois coûte le même pack de séchage qu'un chantier à Gembloux.`,
    ],
    feiten: [
      { label: "Livraison et installation", waarde: "Comprises dans le pack de séchage, sans frais kilométriques" },
      { label: "Délai de livraison", waarde: "Sur rendez-vous, nous convenons ensemble du jour de livraison" },
      { label: "Trajet depuis notre entrepôt", waarde: "Environ une heure (Gembloux, Éghezée) à plus de deux heures (Vresse-sur-Semois)" },
      { label: "Étage via l'échelle", waarde: `${LADDER_FR} par étage, à signaler à l'avance` },
      { label: "Pompe à condensats (recommandée)", waarde: `${POMP_FR} par déshumidificateur et par jour` },
    ],
  },
  afhalen: {
    kop: "Enlèvement depuis la province de Namur : rarement une bonne idée",
    alineas: [
      "Notre point d'enlèvement se trouve à Aartselaar, le long de l'A12, juste au sud d'Anvers. Depuis Gembloux, c'est une heure de route, depuis Dinant ou Ciney facilement le double, et ce trajet, vous le faites deux fois. **Avec un pack de séchage complet, vous n'y gagnez rien, car la livraison est déjà comprise dans le prix.** Si vous n'avez besoin que d'un déshumidificateur ou d'un ventilateur pour une longue période et que vous passez de toute façon près d'Anvers, réservez un créneau d'enlèvement fixe un jour ouvrable, entre 7 h 30 et 17 h.",
    ],
    feiten: [
      { label: "Trajet jusqu'à notre point d'enlèvement", waarde: "Une heure (Gembloux) à plus de deux heures (le sud)" },
      { label: "Caution", waarde: "Aucune" },
      { label: "Transport", waarde: "Debout ; transporté couché, laisser reposer 24 heures" },
      { label: "Vous préférez la livraison ?", waarde: "Le trajet est déjà compris dans chaque prix de pack" },
    ],
  },
  faq: [
    {
      q: "Cette page concerne-t-elle la ville de Namur ou la province ?",
      a: "La province : ses 38 communes, d'Éghezée au nord à Vresse-sur-Semois au sud. Pour la ville de Namur elle-même, avec Jambes, Salzinnes et les autres sections, il existe une page distincte. Le pack de séchage et le prix sont les mêmes sur les deux pages ; seule la description de la région diffère.",
    },
    {
      q: "Venez-vous aussi jusqu'à Couvin ou Vresse-sur-Semois ?",
      a: "Oui, même si, avec plus de deux heures de route depuis Aartselaar, c'est l'un de nos trajets les plus longs. C'est pourquoi nous convenons avec vous de l'heure de livraison, au lieu de vous donner une plage d'une demi-journée. Le prix reste le même : livraison, installation et reprise sont comprises dans le pack de séchage, sans supplément pour les kilomètres.",
    },
    {
      q: "Je cherche Namur ou Dinant. Suis-je sur la bonne page ?",
      a: "Oui. Chaque commune a une seule page, sous son nom français. En néerlandais, Namur s'appelle Namen et Gembloux Gembloers, mais il s'agit bien des mêmes communes. Le pack de séchage, la livraison et l'installation sont partout identiques.",
    },
    {
      q: "Ma maison est adossée au rocher dans la vallée de la Meuse. Un déshumidificateur aide-t-il contre le mur arrière humide ?",
      a: "Il retire l'humidité de l'air et du mur, de sorte que vous pouvez plafonner ou peindre. Si de l'eau continue d'arriver du versant derrière la maison, un déshumidificateur ne règle pas ce problème : il faut alors un drainage ou une étanchéité, après quoi le mur peut sécher. Au démarrage, le technicien mesure où se trouve l'humidité et vous dit franchement ce que l'appareil peut faire.",
    },
    {
      q: "Notre seconde résidence en Ardenne sent le moisi après l'hiver. Que nous conseillez-vous ?",
      a: "Le plus souvent, ce ne sont pas des dégâts des eaux mais de la condensation : une maison froide restée fermée pendant des mois. Un déshumidificateur à adsorption fonctionne alors mieux qu'un appareil à condensation, car il continue d'absorber l'humidité même à basse température. Entre-temps, chauffez et aérez autant que possible, et vérifiez derrière les armoires et dans les coins s'il n'y a pas déjà des moisissures.",
    },
    {
      q: "Combien de temps faut-il pour sécher une ferme rénovée dans le Condroz ?",
      a: "Plus longtemps qu'une construction neuve, car les épais murs en pierre naturelle ne libèrent leur humidité qu'après des semaines, et la nouvelle chape s'y ajoute. Comptez quelques semaines avec un déshumidificateur par niveau, et en hiver avec un chauffage en plus. À la reprise, le technicien mesure à nouveau, pour que vous sachiez si le poseur de sol ou le peintre peut commencer.",
    },
  ],
  realisaties: {
    kop: "Chantiers près de Namur",
    intro: "Nous n'avons encore photographié aucun chantier en province de Namur. Ces trois-là se trouvent à Bruxelles, sur notre route vers Gembloux et Namur.",
    slugs: ["woning-drogen-brussel", "badkamer-drogen-brussel", "pleisterwerk-drogen-sint-pieters-woluwe"],
  },
  areaServed: provinceFr("Namur"),
};
