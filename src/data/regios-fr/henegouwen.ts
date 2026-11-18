import { routeFr, dagFr, LADDER_FR, POMP_FR, provinceFr, type RegioFr } from "./basis.js";

/** Franse tekst van de provinciepagina Henegouwen, vertaald uit regios.ts. */
export const REGIO: RegioFr = {
  ...routeFr("henegouwen"),
  dans: "dans le Hainaut",
  title: "Location déshumidificateur dans le Hainaut | Vernast",
  description:
    "Location de déshumidificateur dans le Hainaut : Charleroi, Mons, Tournai et Mouscron. Livré, installé et repris depuis Aartselaar, sans caution.",
  h1: "Location de déshumidificateur de chantier dans le Hainaut",
  kicker: "Hainaut · 69 communes · d'Enghien à Chimay",
  intro: [
    "Vous cherchez un déshumidificateur de chantier à louer dans le Hainaut pour une rénovation, une nouvelle chape ou une cave après des dégâts des eaux ? Vernast livre et installe les appareils sur votre chantier, d'Enghien à Charleroi et de Mouscron à Chimay. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Le Hainaut est toutefois la province la plus étendue que nous desservons, et nous préférons le dire d'emblée : **Enghien et Braine-le-Comte sont à environ trois quarts d'heure de notre entrepôt**, Mons et Charleroi à une heure ou une heure et quart, et la Botte du Hainaut autour de Chimay est notre trajet le plus long.",
  ],
  bouw: {
    kop: "Pourquoi loue-t-on un déshumidificateur dans le Hainaut ?",
    alineas: [
      "Le Hainaut n'est pas une province de constructions neuves mais une province de rénovation. Beaucoup de maisons datent d'avant la Seconde Guerre mondiale, et qui y achète une maison aujourd'hui retire le plafonnage, pose un nouveau sol et isole par l'intérieur. **Tous ces travaux apportent de l'eau dans une maison dont les murs étaient déjà humides.** C'est de là que vient la demande de déshumidificateurs, bien plus que des lotissements.",
      "**Autour de Soignies, d'Écaussinnes et de Lessines, la pierre bleue est le matériau de construction.** La pierre elle-même absorbe peu d'eau, mais les murs derrière elle sont souvent d'épaisses maçonneries au mortier de chaux, et les joints et le remplissage retiennent bien l'humidité. Une ferme ou une maison de village en pierre naturelle sèche donc lentement de l'intérieur. À l'ouest, autour de Tournai et d'Antoing, c'est la pierre calcaire de Tournai qui marque le paysage, et ces murs-là ne rendent leur humidité qu'au bout de plusieurs semaines.",
      "**Dans le Borinage, autour de Mons, Frameries et Quaregnon, se dressent des rangées de maisons de mineurs du dix-neuvième siècle.** Elles ont été construites sans barrière d'étanchéité au pied des murs, si bien que l'humidité du sol remonte librement dans la maçonnerie. Qui rénove une telle maison fait souvent d'abord réaliser une injection contre l'humidité ascensionnelle, puis doit encore laisser sécher le mur. Un déshumidificateur accélère cette deuxième étape ; il ne résout pas la première, et le technicien vous le dit aussi.",
      "**Trois rivières traversent la province** : la Sambre à Charleroi et Thuin, l'Escaut à Tournai, et la Dendre à Ath et Lessines. En période de crue, les caves et les rez-de-chaussée de ces vallées sont inondés. À l'ouest se trouve Mouscron, avec son passé textile : d'anciens tissages et halls d'usine transformés en lofts ou en logements. Ce sont de grands espaces hauts, avec des sols en béton et une nouvelle chape, où un petit appareil ne fait pas grand-chose.",
    ],
  },
  beeld: {
    src: "/vernast/case-renovatie.webp",
    alt: "Rénovation d'une maison ancienne avec des déshumidificateurs de chantier contre les murs fraîchement plafonnés",
  },
  toestellen: {
    kop: "Quel déshumidificateur pour un chantier dans le Hainaut ?",
    items: [
      {
        key: "ttk350",
        waarom: `**Pour la maison mitoyenne ou la maison de village en rénovation** : 70 litres par jour et une portée jusqu'à environ 400 m³, assez pour un niveau d'une maison hennuyère moyenne. En général, on en place un par étage. À partir de ${dagFr("ttk350")} par jour.`,
      },
      {
        key: "ttk650",
        waarom: `**Pour le hall d'usine transformé ou la cave inondée** : 110 litres par jour, jusqu'à environ 600 m³. Dans un loft haut sous plafond à Mouscron ou une cave au bord de la Sambre, cet appareil fait le travail de deux plus petits. À partir de ${dagFr("ttk650")} par jour.`,
      },
      {
        key: "revolution",
        waarom: `**Le déshumidificateur à adsorption pour les caves froides et les murs épais**. Il souffle de l'air sec par des gaines jusqu'à l'endroit où se trouve l'humidité et continue de fonctionner à basse température, là où un déshumidificateur à condensation s'arrête. Mieux vaut l'examiner ensemble d'abord. À partir de ${dagFr("revolution")} par jour.`,
      },
      {
        key: "teddh30",
        waarom: `**Le chauffage de 30 kW pour une ferme en pierre naturelle en hiver.** Les murs épais restent froids, et sans chaleur dans la pièce, aucun déshumidificateur à condensation n'est efficace. Demande du courant triphasé (400 V) sur le chantier. À partir de ${dagFr("teddh30")} par jour.`,
      },
    ],
  },
  levering: {
    kop: "Livrer dans le Hainaut : une province, trois distances",
    alineas: [
      "Depuis Aartselaar, nous prenons le ring de Bruxelles vers le sud, puis l'itinéraire se divise. **Le nord de la province, avec Enghien, Silly et Braine-le-Comte, nous l'atteignons en environ trois quarts d'heure.** Mons et La Louvière par l'E19, Charleroi par l'A54 via Nivelles : cela représente une heure à une heure et quart ; Tournai et Mouscron, nous les rejoignons par l'E17 à peu près dans le même temps. Pour Thuin, Beaumont et la Botte du Hainaut, nous comptons environ deux heures, et nous planifions alors le trajet avec vous.",
      `Sur le chantier, le technicien mesure l'humidité des murs et du sol, place les appareils au bon endroit et raccorde l'évacuation à un siphon de sol, un évier ou vers l'extérieur. **La montée à l'étage par l'escalier est comprise** ; s'il n'y a pas encore d'escalier, un supplément de ${LADDER_FR} par étage s'applique pour l'accès par échelle. Nous ne facturons rien pour la distance : un chantier à Chimay coûte le même pack qu'un chantier à Enghien.`,
    ],
    feiten: [
      { label: "Livraison et installation", waarde: "Comprises dans le pack de séchage, sans frais kilométriques" },
      { label: "Délai de livraison", waarde: "Sur rendez-vous, nous fixons ensemble le jour de livraison" },
      { label: "Temps de trajet depuis notre entrepôt", waarde: "45 minutes (Enghien) à environ deux heures (Chimay)" },
      { label: "Étage par échelle", waarde: `${LADDER_FR} par étage, à signaler au préalable` },
      { label: "Pompe à condensats (conseillée)", waarde: `${POMP_FR} par déshumidificateur et par jour` },
    ],
  },
  afhalen: {
    kop: "Venir chercher depuis le Hainaut : rarement intéressant",
    alineas: [
      "Notre point d'enlèvement se trouve à Aartselaar, le long de l'A12 au sud d'Anvers. Depuis Enghien, cela représente trois quarts d'heure de route, depuis Charleroi ou Tournai plus d'une heure, et cela deux fois : à l'enlèvement et au retour. **Comme la livraison est déjà comprise dans le pack, vous n'y gagnez rien pour un séchage complet.** Si vous souhaitez tout de même venir chercher un seul déshumidificateur ou ventilateur pour une longue période, réservez un moment d'enlèvement fixe un jour ouvrable entre 07:30 et 17:00.",
    ],
    feiten: [
      { label: "Trajet jusqu'à notre point d'enlèvement", waarde: "Trois quarts d'heure (Enghien) à plus d'une heure (Charleroi, Tournai)" },
      { label: "Caution", waarde: "Aucune" },
      { label: "Transport", waarde: "Debout ; transporté couché, le laisser reposer 24 heures" },
      { label: "Vous préférez la livraison ?", waarde: "Le trajet est déjà compris dans chaque prix de pack" },
    ],
  },
  faq: [
    {
      q: "Livrez-vous aussi dans le sud du Hainaut, autour de Chimay ?",
      a: "Oui, également dans la Botte du Hainaut : Chimay, Momignies, Sivry-Rance et Froidchapelle. C'est toutefois notre trajet le plus long, environ deux heures depuis Aartselaar, c'est pourquoi nous convenons de l'heure avec vous plutôt que de vous donner un moment au hasard. Le prix ne change pas : la livraison, l'installation et la reprise sont comprises dans le pack de séchage.",
    },
    {
      q: "Je cherche Bergen, Doornik ou Moeskroen. Est-ce la même page ?",
      a: "Oui. Bergen, Doornik et Moeskroen sont les noms néerlandais de Mons, Tournai et Mouscron. Chaque commune a une seule page, sous son nom français dans la version française et sous son nom néerlandais dans la version néerlandaise. Le pack de séchage, la livraison et l'installation sont les mêmes.",
    },
    {
      q: "Un déshumidificateur règle-t-il l'humidité de ma maison de mineur ?",
      a: "Pas à lui seul. Dans une maison sans barrière d'étanchéité au pied des murs, l'humidité du sol remonte en permanence, et cela ne s'arrête qu'avec une injection ou une autre barrière contre l'humidité. Ce que fait un déshumidificateur, c'est sécher le mur plus vite ensuite, pour que vous puissiez plafonner et peindre plus tôt. Sans cette première étape, il sèche l'air, mais l'humidité revient.",
    },
    {
      q: "Combien de temps sèche un mur en pierre naturelle ou en pierre bleue ?",
      a: "Plus longtemps qu'un mur en briques, parce que l'humidité se trouve dans le mortier de chaux et le remplissage entre les pierres et ne remonte que lentement vers la surface. Comptez plutôt en semaines qu'en jours. Le technicien mesure au démarrage l'humidité du mur et à la reprise ce qu'il en reste, pour que vous sachiez si le peintre peut commencer.",
    },
    {
      q: "Ma cave au bord de la Sambre ou de la Dendre a été inondée. Que faire ?",
      a: "Faites d'abord pomper l'eau stagnante et sortez les objets mouillés. Ensuite, le temps compte : après un jour ou deux sur un matériau humide, les moisissures apparaissent. Appelez-nous le plus tôt possible, nous verrons quand le trajet est possible. Dans une cave froide, un déshumidificateur à adsorption fonctionne mieux qu'un déshumidificateur à condensation, et nous l'emportons alors.",
    },
    {
      q: "Combien d'appareils faut-il pour un hall d'usine transformé ?",
      a: "Cela dépend du volume, pas seulement de la surface au sol : un loft de cinq mètres de haut contient deux fois plus d'air qu'une maison ordinaire de même surface. Indiquez la hauteur sous plafond dans le calculateur, il calculera le pack en mètres cubes. Pour les grands halls, cela revient souvent à un grand appareil et un ventilateur.",
    },
  ],
  realisaties: {
    kop: "Chantiers près du Hainaut",
    intro:
      "Nous n'avons pas encore photographié de chantier dans le Hainaut même. Ces trois-ci se trouvent à Bruxelles, sur la route de notre entrepôt vers Enghien et Braine-le-Comte.",
    slugs: ["woning-drogen-brussel", "badkamer-drogen-brussel", "pleisterwerk-drogen-sint-pieters-woluwe"],
  },
  areaServed: provinceFr("Hainaut"),
};
