import type { Gemeente } from "../gemeenten.js";

/**
 * De Franse teksten van de gemeentepagina's in deze provincie, gesleuteld op
 * de Nederlandse slug. Zie README.md in deze map voor de regels en hoe een
 * gemeente aangezet wordt (`aan/luik.ts`).
 */
export const GEMEENTEN: Record<string, Gemeente> = {
  "luik-stad": {
    slug: "luik-stad",
    title: "Déshumidificateur de chantier à louer à Liège | Vernast",
    description:
      "Déshumidificateur à louer à Liège pour le souterrain d'une maison de maître, une cave près de la Meuse ou de l'Ourthe, une maison des Coteaux. Livré, installé.",
    h1: "Location de déshumidificateur à Liège",
    kicker: "Liège ville · au confluent de la Meuse et de l'Ourthe",
    rit: { afstand: "environ 125 km", tijd: "un peu plus d'une heure" },
    intro: [
      "**Liège** s'étend dans la vallée de la Meuse, à l'endroit où l'Ourthe se jette dans la Meuse. Entre les bras de la rivière se trouve l'île d'**Outremeuse**. Autour du centre, les quartiers grimpent en pente raide : les Coteaux de la Citadelle avec les escaliers de la Montagne de Bueren, Sainte-Walburge et Cointe.",
      "Cette page concerne la ville elle-même. Vous y trouvez un bâti dense, des **rues étroites en pente** et beaucoup de maisons de plus de cent ans. Un déshumidificateur doit ici venir à bout de l'humidité, mais il doit aussi pouvoir monter l'escalier et entrer dans la maison. Depuis notre entrepôt d'Aartselaar, nous mettons un peu plus d'une heure pour rejoindre Liège.",
    ],
    bouw: {
      kop: "Maisons de maître avec souterrain, caves au niveau de la rivière",
      alineas: [
        "Beaucoup de **maisons de maître du XIXe siècle** dans le centre et autour des Guillemins ont un souterrain : un demi-niveau sous la rue, avec des murs contre la terre. Si vous aménagez un tel souterrain en espace de vie, un plafonnage frais doit sécher dans une pièce fraîche et peu ventilée. Un déshumidificateur à condensation y travaille lentement. Avec un **chauffage de chantier en appui** ou avec un déshumidificateur à adsorption, cela va plus vite.",
        "En Outremeuse et le long des quais, les caves sont basses, près de la rivière. Après une crue ou une fuite, l'humidité se trouve surtout **dans le bas des murs**. Lors de l'installation, le technicien vérifie si l'eau entre encore. Tant que c'est le cas, un déshumidificateur ne retire que ce qui est aussitôt réapporté.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**Pour un souterrain sous une maison de maître**, frais et peu ventilé. Ce déshumidificateur à adsorption continue de fonctionner dans une pièce froide, là où un appareil à condensation récupère beaucoup moins d'eau." },
      { key: "ttk350", waarom: "Pour un étage dans une maison de maître divisée en logements, avec de **hauts plafonds** : 70 litres par jour, pour des volumes jusqu'à environ 400 m³ avec un plafonnage neuf." },
      { key: "ttk170", waarom: "Pour un appartement sur les Coteaux ou en Outremeuse : un **appareil compact** qui monte sans peine un escalier étroit, avec une capacité de 50 litres par jour." },
      { key: "teddh30", waarom: "**Pour une cave près des quais** qui reste froide en hiver. Ce chauffage de 30 kW réchauffe la pièce, pour que le déshumidificateur à côté travaille mieux. Il demande un raccordement en 400 V." },
    ],
    levering: {
      kop: "Livraison à Liège : par l'E313, jusque dans la pente",
      alinea:
        "Nous passons **par l'E313 via Hasselt** et, hors heures de pointe, nous sommes en route un peu plus d'une heure. Vous choisissez une date de livraison lors de la réservation ; en Wallonie, nous livrons sur rendez-vous. Si la maison se trouve dans une rue raide ou une ruelle étroite sur les Coteaux, **signalez-le à l'avance**. Le technicien porte l'appareil sur les derniers mètres et le met en place.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : un peu plus d'une heure de route",
      alinea:
        "Depuis Liège, vous roulez **un peu plus d'une heure** jusqu'à notre point d'enlèvement à Aartselaar, et autant pour revenir. Pour un seul déshumidificateur, cela en vaut rarement la peine. Pour un souterrain ou une cave au bord de la Meuse, mieux vaut choisir la livraison, car c'est le type d'appareil et son installation qui font le résultat.",
    },
    buren: ["herstal", "ans", "saint-nicolas", "seraing", "chaudfontaine"],
    faq: [
      {
        q: "Comment faites-vous entrer un déshumidificateur dans une maison des escaliers de la Montagne de Bueren ou sur les Coteaux ?",
        a: "Là où la camionnette ne peut pas aller jusqu'à la porte, le technicien porte l'appareil sur le dernier tronçon, avec un diable ou à la main. Décrivez lors de la réservation comment la maison est accessible, avec escaliers ou ruelles, et nous en tiendrons compte dans le planning.",
      },
      {
        q: "Mon souterrain devient un studio. Quel déshumidificateur convient ?",
        a: "Un souterrain est frais et reçoit peu d'air neuf. Un déshumidificateur à condensation y récupère moins d'eau que dans une pièce chaude. Un déshumidificateur à adsorption, ou un appareil à condensation avec un chauffage de chantier en appui, fonctionne mieux. Si de l'humidité remonte encore du sol à travers le mur, faites d'abord résoudre ce problème.",
      },
      {
        q: "Travaillez-vous aussi en Outremeuse, à Chênée et à Angleur ?",
        a: "Oui. Outremeuse, Chênée et Angleur font partie de la ville de Liège et se trouvent dans notre zone de livraison. Près de l'Ourthe et de la Meuse, il s'agit souvent de caves. Indiquez lors de la réservation si l'eau a stagné et jusqu'à quelle hauteur, et le technicien apportera les appareils adaptés.",
      },
      {
        q: "Puis-je me faire livrer dans le centre de Liège sans place de parking ?",
        a: "La plupart du temps, oui. La camionnette ne s'arrête que brièvement pendant que le technicien décharge, et pour un ou deux appareils, cela ne prend pas longtemps. Si votre rue a une plage horaire de livraison ou si la maison est dans un piétonnier, signalez-le. Nous convenons avec vous du moment de livraison.",
      },
      {
        q: "Puis-je poser mes questions en français ?",
        a: "Des questions en français ? Écrivez-nous ou appelez-nous sans hésiter. Indiquez aussi lors de la réservation qui accueille le technicien sur place et comment il peut joindre cette personne, pour que la livraison à Liège se déroule sans accroc.",
      },
    ],
    realisaties: [],
  },

  verviers: {
    slug: "verviers",
    title: "Location de déshumidificateur à Verviers | Vernast",
    description:
      "Louez un déshumidificateur à Verviers pour un loft dans une ancienne usine lainière, une maison en pente ou une cave de la vallée de la Vesdre. Livré, installé.",
    h1: "Location de déshumidificateur à Verviers",
    kicker: "Liège · la cité lainière au bord de la Vesdre",
    rit: { afstand: "environ 150 km", tijd: "un peu plus d'une heure et demie" },
    intro: [
      "Au XIXe siècle, Verviers est devenue **la capitale lainière du pays**. L'eau douce de la Vesdre se prêtait au lavage de la laine, et le long de la rivière se sont installés filatures, lavoirs et tissages. Beaucoup de ces bâtiments industriels sont toujours debout et reçoivent une nouvelle affectation en lofts ou en bureaux.",
      "Autour du vieux centre, les rues grimpent en pente raide vers **Heusy, Stembert, Ensival et Lambermont**. En juillet 2021, la crue de la Vesdre a touché beaucoup de maisons dans les quartiers bas. Depuis notre entrepôt d'Aartselaar, nous mettons un peu plus d'une heure et demie pour rejoindre Verviers.",
    ],
    bouw: {
      kop: "Halls d'usine, maisons à flanc de coteau et caves près de la rivière",
      alineas: [
        "**Transformer une usine lainière en lofts**, c'est des façades épaisses en brique, des sols en béton avec une nouvelle chape et une finition intérieure entièrement neuve. Les volumes sont grands et les plafonds hauts, donc un seul appareil compact par étage ne suffit pas. Le technicien divise l'espace en zones de séchage et place pour chaque zone la bonne capacité.",
        "**Dans la pente**, la façade arrière d'une maison mitoyenne est souvent à moitié enterrée. L'eau de pluie qui dévale la pente pousse contre ce mur, et c'est un autre problème que l'humidité de construction. Dans les maisons inondées en 2021, les murs et les sols sont parfois encore humides jusqu'à cœur. Ils doivent sécher avant toute nouvelle finition.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour un étage dans une usine lainière transformée** : 110 litres par jour et une portée jusqu'à environ 600 m³, adaptés aux hauts plafonds et aux plateaux ouverts." },
      { key: "ttv4500", waarom: "Dans un hall d'usine, l'air humide stagne dans les coins. Ce ventilateur déplace **4 500 m³ d'air par heure**, pour que le déshumidificateur atteigne tout l'espace." },
      { key: "ttk350", waarom: "**Pour une maison mitoyenne à flanc de coteau**, par niveau : 70 litres par jour, suffisant pour un rez-de-chaussée avec un plafonnage ou une chape neufs." },
      { key: "revolution", waarom: "**Pour une cave froide adossée à la pente**, où un appareil à condensation rend peu : ce déshumidificateur à adsorption continue d'extraire l'humidité même à basse température." },
    ],
    levering: {
      kop: "Livraison à Verviers : par l'E40 jusque dans la vallée",
      alinea:
        "Depuis Aartselaar, nous roulons un peu plus d'une heure et demie, **par l'E313 et l'E40**, jusqu'à la sortie de Verviers. Vous choisissez une date de livraison lors de la réservation, et nous convenons de l'heure avec vous. Dans le centre, les rues sont raides et étroites. Faites-nous savoir à l'avance si le technicien peut s'arrêter devant la porte ; il emportera alors un diable pour les derniers mètres.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : plus de trois heures aller-retour",
      alinea:
        "Notre point d'enlèvement est à un peu plus d'une heure et demie de route de Verviers. Vous êtes donc **plus de trois heures en route aller-retour**, à l'enlèvement comme au retour du matériel. Pour un loft industriel avec plusieurs appareils, ce n'est pas une option. Si vous choisissez la livraison, le technicien installe les appareils et mesure l'humidité dans les murs et le sol.",
    },
    buren: ["dison", "pepinster", "limbourg", "jalhay"],
    faq: [
      {
        q: "Pouvez-vous sécher un loft dans une ancienne usine lainière ?",
        a: "Oui. En raison des grands volumes et des hauts plafonds, nous y plaçons généralement par zone un déshumidificateur à condensation puissant avec un ventilateur, plutôt qu'un seul appareil pour tout l'espace. Indiquez lors de la réservation la surface et la hauteur sous plafond, et nous composerons la combinaison à l'avance.",
      },
      {
        q: "Notre maison a été inondée en 2021. Le séchage a-t-il encore un sens aujourd'hui ?",
        a: "Souvent, oui. Des murs détrempés jusqu'à cœur à l'époque, puis vite refinis, peuvent encore contenir de l'humidité qui se libère lors d'une nouvelle rénovation. Lors de l'installation, le technicien mesure l'humidité restante dans les murs et le sol, pour que vous sachiez si un déshumidificateur est utile ici.",
      },
      {
        q: "L'humidité de ma maison à flanc de coteau vient-elle de l'intérieur ou de l'extérieur ?",
        a: "C'est ce que le technicien vérifie d'abord. S'il s'agit d'humidité de construction venant du plafonnage ou de la chape, un déshumidificateur l'élimine. Si l'eau de la pente traverse le mur arrière, un déshumidificateur garde la pièce utilisable, mais la cause demeure. Il faut alors un drainage ou une étanchéité côté extérieur.",
      },
      {
        q: "Livrez-vous aussi à Heusy, Stembert et Ensival ?",
        a: "Oui, nous livrons dans toutes les anciennes communes de Verviers, y compris dans les quartiers haut perchés au-dessus de la vallée. Indiquez lors de la réservation l'adresse complète et si la rue est en pente, et le technicien en tiendra compte pour le chargement et le déchargement.",
      },
    ],
    realisaties: [],
  },
};
