import type { Gemeente } from "../gemeenten.js";

/**
 * De Franse teksten van de gemeentepagina's in deze provincie, gesleuteld op
 * de Nederlandse slug. Zie README.md in deze map voor de regels en hoe een
 * gemeente aangezet wordt (`aan/henegouwen.ts`).
 */
export const GEMEENTEN: Record<string, Gemeente> = {
  charleroi: {
    slug: "charleroi",
    title: "Location de déshumidificateur à Charleroi | Vernast",
    description:
      "Déshumidificateur à louer à Charleroi : maisons mitoyennes en Ville Basse, maisons de maître en Ville Haute, lofts d'usine. Livré et installé étage par étage.",
    h1: "Location de déshumidificateur de chantier à Charleroi",
    kicker: "Hainaut · la ville sur la Sambre",
    rit: { afstand: "environ 95 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Charleroi est la plus grande ville de Wallonie et le cœur de l'ancien bassin houiller, le **Pays Noir**. La ville se compose de la Ville Haute sur la colline et de la **Ville Basse** en contrebas, au bord de la Sambre, où débouche aussi le canal vers Bruxelles.",
      "Depuis la fusion de 1977, Marcinelle, Jumet, Gilly, Gosselies et Marchienne-au-Pont font aussi partie de Charleroi. Entre les rues de maisons mitoyennes se dressent encore les terrils des anciennes mines. Depuis notre entrepôt d'Aartselaar, nous mettons **un peu plus d'une heure** pour rejoindre Charleroi.",
    ],
    bouw: {
      kop: "Maisons mitoyennes, maisons de maître et anciens halls d'usine",
      alineas: [
        "La plupart des maisons de Charleroi sont des **maisons mitoyennes en briques** de l'époque des mines et de la sidérurgie : étroites, profondes et souvent avec une cave voûtée sous la pièce avant. Lors d'une rénovation s'ajoutent un nouveau plafonnage et une nouvelle chape, dans une maison où l'air circule mal. Placez donc **un déshumidificateur par étage** et gardez les portes fermées. Cela fonctionne mieux qu'un seul gros appareil dans le couloir.",
        "En Ville Haute se trouvent des maisons de maître avec des plafonds de trois mètres et plus. En Ville Basse, d'anciens halls d'usine et entrepôts sont transformés en lofts ou en locaux professionnels. De tels volumes demandent plusieurs appareils, répartis dans l'espace. **Le technicien mesure lors de l'installation** la quantité d'humidité dans le sol et les murs.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour la maison mitoyenne classique** : un appareil par étage, 70 litres par jour pour des pièces jusqu'à environ 400 m³." },
      { key: "ttk650", waarom: "**Pour un loft ou un hall** en Ville Basse : 110 litres par jour pour des pièces jusqu'à environ 600 m³. Pour un volume plus grand, nous en plaçons plusieurs." },
      { key: "teddh30", waarom: "Met d'abord un hall froid en température en hiver, pour que les déshumidificateurs puissent faire leur travail. Le chauffage de 30 kW demande un raccordement 400 V." },
      { key: "ttv4500", waarom: "Pousse l'air de la pièce avant vers l'annexe arrière dans une maison mitoyenne étroite et profonde, là où un déshumidificateur seul n'arrive guère." },
    ],
    levering: {
      kop: "Livrer à Charleroi : par le ring et l'A54",
      alinea:
        "Nous partons d'Aartselaar par le ring de Bruxelles et l'A54 en passant par Nivelles, soit **un peu plus d'une heure** de route. Vous choisissez une date de livraison lors de la réservation. Nous convenons avec vous de l'heure précise, car en Wallonie nous livrons **sur rendez-vous**. Dans une rue étroite, gardez si possible une place libre devant la porte. Le technicien installe les appareils, pose l'évacuation et mesure l'humidité.",
    },
    afhalen: {
      kop: "Venir chercher à Aartselaar, c'est une demi-journée",
      alinea:
        "Notre point d'enlèvement se trouve à un peu plus d'une heure de route de Charleroi. Aller-retour, vous roulez donc **plus de deux heures**, et cela deux fois : à l'enlèvement et au retour. Un déshumidificateur se transporte debout. Pour un seul petit appareil, cela peut se faire si vous devez de toute façon aller vers Anvers. Pour une maison entière ou un hall, mieux vaut la livraison.",
    },
    buren: ["courcelles", "fleurus", "chatelet", "farciennes", "montigny-le-tilleul"],
    faq: [
      {
        q: "Pourquoi la cave voûtée de ma maison à Charleroi reste-t-elle humide ?",
        a: "Une cave voûtée en briques a ses murs contre la terre, n'est pas ventilée et reste fraîche toute l'année. L'humidité de l'air se condense sur les pierres froides et l'humidité du sol pénètre dans la maçonnerie. Un déshumidificateur garde la cave utilisable. Le technicien mesure d'abord s'il s'agit d'humidité de construction ou d'humidité du sol.",
      },
      {
        q: "Pouvez-vous sécher un loft dans un ancien hall d'usine ?",
        a: "Oui, dès que l'espace est fermé par des fenêtres et des portes, ou provisoirement par une bâche. Dans un hall ouvert, un appareil sèche surtout l'air extérieur. Communiquez à l'avance la surface et la hauteur. Nous calculons alors le nombre de déshumidificateurs nécessaires et s'il faut ajouter un chauffage.",
      },
      {
        q: "Quelle hauteur de plafond pour un seul déshumidificateur ?",
        a: "Ce n'est pas la hauteur qui compte mais le volume en mètres cubes. Une pièce de maison de maître avec un plafond de trois mètres contient bien plus d'air qu'une pièce de même taille dans une maison mitoyenne. Le calculateur travaille avec ce volume. Sur place, le technicien décide s'il faut un appareil plus grand ou un deuxième déshumidificateur.",
      },
      {
        q: "Livrez-vous aussi à Marcinelle, Jumet ou Gosselies ?",
        a: "Oui, nous livrons dans toutes les sections de Charleroi, de Gosselies au nord jusqu'à Marcinelle et Couillet au sud. Vous choisissez une date de livraison lors de la réservation et nous convenons de l'heure avec vous. Signalez à l'avance une rue étroite ou un accès difficile.",
      },
    ],
    realisaties: [],
  },
  bergen: {
    slug: "bergen",
    title: "Déshumidificateur de chantier à louer à Mons | Vernast",
    description:
      "Louer un déshumidificateur à Mons : maisons de maître et caves du centre historique, maisons à Jemappes, Cuesmes et Ghlin. Livraison et installation sur place.",
    h1: "Location de déshumidificateur de chantier à Mons",
    kicker: "Hainaut · le chef-lieu de la province",
    rit: { afstand: "environ 100 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Mons est le chef-lieu du Hainaut. La vieille ville est bâtie sur une colline, couronnée par **le beffroi**, inscrit sur la liste de l'UNESCO. Chaque année, le Doudou parcourt ces rues, avec sur la Grand-Place le combat entre saint Georges et le dragon.",
      "Autour du centre se trouvent des sections d'un autre genre : **Jemappes, Cuesmes et Flénu** du côté du Borinage, Nimy, Ghlin et Obourg au nord, et des villages ruraux comme Spiennes et Harmignies au sud. Depuis notre entrepôt d'Aartselaar, nous roulons **un peu plus d'une heure** jusqu'à Mons.",
    ],
    bouw: {
      kop: "Maisons de maître sur la colline, caves sous la vieille ville",
      alineas: [
        "Le centre-ville compte de **profondes maisons de maître et maisons bourgeoises** aux plafonds hauts, souvent avec une cave voûtée. Qui divise un tel bâtiment en appartements ou le fait replafonner apporte beaucoup d'humidité de construction dans un grand volume. Avec les plafonds hauts, ce volume est plus grand que ne le laisse penser la surface au sol. **Le technicien le calcule sur place.**",
        "Une cave voûtée en vieilles briques reste **fraîche même en été**. Un déshumidificateur à condensation y travaille lentement, un **déshumidificateur à adsorption** en retire bien l'humidité. Si la cave doit devenir habitable, comme studio ou comme bar, nous vérifions d'abord si l'humidité vient de l'extérieur.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une maison de maître aux plafonds hauts** rénovée étage par étage : 110 litres par jour, pour des pièces jusqu'à environ 600 m³." },
      { key: "revolution", waarom: "**Pour la cave voûtée** sous un bâtiment du centre-ville. Un déshumidificateur à adsorption continue d'évacuer l'humidité même dans une pièce fraîche et humide." },
      { key: "ttk350", waarom: "Pour un appartement dans une maison bourgeoise divisée ou une maison à Jemappes ou Cuesmes : 70 litres par jour, jusqu'à environ 400 m³." },
      { key: "ttv4500", waarom: "Dans une pièce haute, l'air humide reste en bas. Ce ventilateur déplace 4 500 m³ d'air par heure, pour que **le plafonnage jusqu'au plafond** sèche de façon homogène." },
    ],
    levering: {
      kop: "Livrer à Mons : par l'E19, jusque dans le centre",
      alinea:
        "Nous roulons un peu plus d'une heure, par le ring de Bruxelles et **l'E19 en direction de Paris**. Vous choisissez une date de livraison lors de la réservation ; en Wallonie, nous livrons sur rendez-vous, donc nous fixons l'heure ensemble. Les rues de la colline sont étroites et en pente. Indiquez à l'avance où la camionnette peut s'arrêter, pour que le technicien puisse décharger et mesurer sans encombre.",
    },
    afhalen: {
      kop: "Venir chercher : plus d'une heure par trajet",
      alinea:
        "Aartselaar se trouve à un peu plus d'une heure de route de Mons, et vous faites ce trajet deux fois : à l'enlèvement et au retour. Cela ne vaut la peine que si vous devez de toute façon aller vers Anvers. Pour une maison de maître ou une cave, **mieux vaut la livraison**, car le dispositif compte autant que l'appareil.",
    },
    buren: ["jurbeke", "frameries", "quevy", "saint-ghislain", "le-roeulx"],
    faq: [
      {
        q: "Combien de déshumidificateurs pour une maison de maître aux plafonds hauts ?",
        a: "Cela dépend du volume, pas de la surface au sol. Une pièce de quatre mètres de haut contient un tiers d'air en plus qu'une pièce de trois mètres. En général, nous plaçons un grand déshumidificateur par étage et les portes restent fermées. Le technicien vérifie le calcul lors de l'installation.",
      },
      {
        q: "Un déshumidificateur peut-il tourner dans une cave voûtée ?",
        a: "Oui, si vous choisissez le bon type. Un déshumidificateur à condensation fonctionne mal dans une cave qui reste sous 15 °C. Un déshumidificateur à adsorption y retire bien l'humidité de l'air. Nous mesurons aussi si l'humidité continue d'entrer par le mur, car cela, un déshumidificateur ne le résout pas.",
      },
      {
        q: "Comment livrez-vous dans les rues étroites du centre-ville ?",
        a: "Indiquez lors de la réservation l'adresse et les règles de stationnement de votre rue. Le technicien gare la camionnette le plus près possible de la porte et rentre les appareils sur le dernier bout avec un diable. Si un appareil doit aller à un étage sans ascenseur, mieux vaut le signaler à l'avance.",
      },
      {
        q: "Livrez-vous aussi dans des sections comme Obourg ou Spiennes ?",
        a: "Oui, nous livrons dans tout Mons, y compris dans les sections rurales en dehors de la ville. Si le chantier se trouve sur un chemin étroit ou non revêtu, décrivez l'accès lors de la réservation. Le technicien sait ainsi à l'avance où il peut charger et décharger.",
      },
    ],
    realisaties: [],
  },
};
