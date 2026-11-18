import type { Gemeente } from "../gemeenten.js";

/**
 * De Franse teksten van de gemeentepagina's in deze provincie, gesleuteld op
 * de Nederlandse slug. Zie README.md in deze map voor de regels en hoe een
 * gemeente aangezet wordt (`aan/namen.ts`).
 */
export const GEMEENTEN: Record<string, Gemeente> = {
  "namen-stad": {
    slug: "namen-stad",
    title: "Location de déshumidificateur à Namur et Jambes | Vernast",
    description:
      "Location de déshumidificateur à Namur : maisons anciennes près de la Sambre et de la Meuse, caves humides, Jambes et Wépion. Livré et installé sur rendez-vous.",
    h1: "Location de déshumidificateur à Namur",
    kicker: "Province de Namur · la ville de la Sambre et de la Meuse",
    rit: { afstand: "environ 95 km", tijd: "environ une heure" },
    intro: [
      "**Namur** se trouve là où **la Sambre se jette dans la Meuse**. Au-dessus de ce confluent, la citadelle se dresse sur son éperon rocheux. À ses pieds, sur le Grognon, siège le Parlement de Wallonie. Namur est la capitale de la Wallonie et le chef-lieu de la province du même nom.",
      "Cette page concerne **la ville elle-même** : le vieux centre entre les deux rivières, **Jambes** de l'autre côté de la Meuse, et des quartiers et sections comme Salzinnes, Bouge, Saint-Servais, Wépion et Malonne. Depuis Aartselaar, notre camionnette met environ une heure. Pour le reste de la province de Namur, nous avons des pages distinctes.",
    ],
    bouw: {
      kop: "Maisons de ville au bord de l'eau et maisons contre le rocher",
      alineas: [
        "**Le vieux centre** se compose d'étroites maisons de ville et de maisons de maître en brique et en pierre bleue, souvent avec **une cave voûtée**. Ces caves sont proches du niveau de la Sambre et de la Meuse. Quand la rivière est haute, la nappe phréatique monte aussi sous les berges. Après une telle période, ou après une rénovation avec un nouveau plafonnage, la cave et le rez-de-chaussée restent longtemps humides.",
        "**Le long de la Meuse vers Wépion et au pied de la citadelle**, des maisons sont adossées au versant. L'humidité n'y vient pas seulement du bas, mais aussi **du côté de la colline**, à travers le mur arrière. Lors de l'installation, le technicien effectue une mesure d'humidité. Vous savez ainsi s'il s'agit d'humidité de construction, qu'un déshumidificateur élimine, ou d'eau venant du versant.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une cave voûtée inondée lors d'une crue** : ce déshumidificateur retire 110 litres par jour de l'air et convient jusqu'à environ 600 m³." },
      { key: "radiaal2250", waarom: "Sous une maison de maître, la cave a des coins où l'air stagne. **Ce ventilateur radial souffle de manière ciblée sur le sol** et jusque dans ces coins." },
      { key: "ttk170", waarom: "**Pour un appartement ou un étage dans le centre** : un déshumidificateur compact de 50 litres par jour qui fonctionne sur une prise standard." },
      { key: "teddh30", waarom: "Une cave contre le rocher reste fraîche même en été. **Sous 15 °C, un déshumidificateur à condensation perd en rendement.** Ce chauffage de 30 kW nécessite du courant triphasé (400 V)." },
    ],
    levering: {
      kop: "Livraison à Namur : par l'E411 jusqu'à votre porte",
      alinea:
        "Depuis Aartselaar, Namur est à **environ une heure de route**, par le ring de Bruxelles et l'E411. Vous choisissez une date de livraison lors de la réservation ; en Wallonie, nous livrons **sur rendez-vous**. Dans le vieux centre, les rues sont étroites et le stationnement limité. Signalez-nous à l'avance si la camionnette peut s'arrêter brièvement devant la porte. Le technicien porte les appareils jusqu'à leur emplacement, y compris à la cave.",
    },
    afhalen: {
      kop: "Venir chercher à Aartselaar est rarement rentable depuis Namur",
      alinea:
        "Notre point d'enlèvement est à **environ une heure de route**, un trajet à faire aller et retour, à l'enlèvement comme au retour du matériel. Un déshumidificateur doit en outre **être transporté debout**. Pour une cave au bord de la rivière, mieux vaut choisir la livraison : le technicien mesure alors au démarrage l'humidité des murs.",
    },
    buren: ["la-bruyere", "fernelmont", "profondeville", "floreffe", "assesse"],
    faq: [
      {
        q: "Ma cave a été inondée lors de la crue de la Meuse. Quand dois-je installer un déshumidificateur ?",
        a: "Seulement quand l'eau stagnante a disparu et que la cave a été vidée. Un déshumidificateur retire l'humidité du sol et des murs, pas l'eau qui se trouve encore sur le sol. Indiquez lors de la réservation jusqu'où l'eau est montée : le technicien apportera la bonne combinaison de déshumidificateur et de ventilateur.",
      },
      {
        q: "Livrez-vous aussi à Jambes, Wépion et Salzinnes ?",
        a: "Bien sûr, là aussi. Jambes, Wépion, Salzinnes, Bouge, Saint-Servais et les autres parties de la ville de Namur font partie de notre zone de livraison. Indiquez l'adresse complète lors de la réservation, et nous planifierons correctement le trajet.",
      },
      {
        q: "Ma maison est adossée au versant sous la citadelle. S'agit-il d'humidité de construction ?",
        a: "Tout dépend si elle revient. Après une rénovation avec un nouveau plafonnage, il s'agit en grande partie d'humidité de construction, qu'un appareil élimine. Si le mur côté colline redevient humide après chaque averse, l'eau vient du versant. La mesure d'humidité à l'installation montre de laquelle des deux il s'agit.",
      },
      {
        q: "Un déshumidificateur peut-il aller dans un appartement au-dessus d'un commerce du centre ?",
        a: "Oui. Le déshumidificateur compact de 50 litres par jour fonctionne sur une prise standard et trouve donc aussi sa place dans un petit appartement. S'il n'y a pas d'ascenseur, indiquez à quel étage l'appareil doit être installé, pour que le technicien en tienne compte.",
      },
      {
        q: "Je ne serai pas là à la livraison. Avec qui convenez-vous de l'installation ?",
        a: "Indiquez-nous qui sera présent à la livraison, par exemple votre entrepreneur. Nous savons ainsi avec qui convenir de l'installation. Pour toute question, n'hésitez pas à nous écrire ou à nous appeler.",
      },
    ],
    realisaties: [],
  },
  dinant: {
    slug: "dinant",
    title: "Déshumidificateur de chantier à louer à Dinant | Vernast",
    description:
      "Location de déshumidificateur à Dinant : maisons contre la paroi rocheuse, caves au bord de la Meuse, Anseremme et Bouvignes. Livraison, installation et mesure.",
    h1: "Location de déshumidificateur à Dinant",
    kicker: "Namur · la ville entre Meuse et rocher",
    rit: { afstand: "environ 115 km", tijd: "près d'une heure et demie" },
    intro: [
      "Dinant s'étire sur **une étroite bande entre la Meuse et une paroi rocheuse abrupte**. Au-dessus de la ville se dresse la citadelle, sous le rocher la collégiale et son clocher en forme de bulbe. Faute de place, la ville s'allonge le long de l'eau.",
      "La commune comprend aussi **Anseremme**, où la Lesse se jette dans la Meuse, Bouvignes et des villages du plateau comme Falmignoul, Sorinnes et Foy-Notre-Dame. Depuis notre entrepôt d'Aartselaar, il nous faut près d'une heure et demie pour y arriver.",
    ],
    bouw: {
      kop: "Maisons contre le rocher et caves sur le quai de Meuse",
      alineas: [
        "Dans le centre, beaucoup d'habitations ont **leur façade arrière contre le rocher**. Derrière ce mur, il y a du calcaire et de la terre, et quand il pleut, une humidité s'y infiltre qui n'a rien à voir avec les travaux. Après un nouveau plafonnage, vous voulez savoir quelle humidité vient des travaux et laquelle vient de la paroi. C'est pourquoi le technicien mesure les deux zones séparément.",
        "Sur le quai, le rez-de-chaussée est proche du niveau de la Meuse, et de fortes pluies inondent vite rues et caves. Après des **dégâts des eaux**, l'ordre est toujours le même : d'abord évacuer l'eau stagnante et la boue, ensuite sécher le sol, les murs et la cave jusqu'à ce que la finition puisse commencer.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Après une inondation d'un rez-de-chaussée sur le quai de Meuse** : 110 litres par jour retirent l'humidité du sol et des murs avant qu'elle ne monte plus haut dans la maçonnerie." },
      { key: "revolution", waarom: "Pour **la pièce contre la paroi rocheuse** qui reste froide : ce déshumidificateur à adsorption absorbe l'humidité là où un appareil à condensation ne fait presque plus rien." },
      { key: "radiaal2250", waarom: "Souffle de manière ciblée sur un sol mouillé et dans les coins d'une cave, là où l'eau reste le plus longtemps après une inondation." },
      { key: "ttk350", waarom: "Pour **une maison de ville étroite que vous rénovez étage par étage** : 70 litres par jour pour des volumes jusqu'à 400 m³." },
    ],
    levering: {
      kop: "Livraison à Dinant : par Namur et le long de la Meuse",
      alinea:
        "Nous passons par Namur puis remontons la Meuse, soit près d'une heure et demie au total. Vous choisissez **une date de livraison** lors de la réservation ; en Wallonie, nous livrons sur rendez-vous. Le long du quai et dans les rues étroites derrière la collégiale, la camionnette ne peut pas s'arrêter partout. Indiquez-nous à l'avance où nous pouvons décharger.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : près de trois heures aller-retour",
      alinea:
        "Notre point d'enlèvement est à près d'une heure et demie de route de Dinant. Ce trajet aller-retour, vous le faites au début, puis à nouveau pour rapporter le matériel. Avec la livraison, le technicien place les appareils par zone de séchage et effectue **une mesure d'humidité au démarrage**, ce dont vous avez besoin dans une maison adossée au rocher.",
    },
    buren: ["yvoir", "anhee", "onhaye", "hastiere", "houyet"],
    faq: [
      {
        q: "Ma maison touche la paroi rocheuse. Est-ce de l'humidité de construction ?",
        a: "Pas toujours. Le plafonnage et la chape libèrent leur eau une seule fois, puis ils sont secs. L'humidité du rocher et de la terre derrière le mur revient après chaque période de pluie. Lors de l'installation, le technicien mesure les deux côtés, pour que vous sachiez ce qu'un déshumidificateur peut résoudre ici.",
      },
      {
        q: "Que dois-je faire en premier si la Meuse a atteint mon rez-de-chaussée ?",
        a: "Faites pomper l'eau stagnante, enlevez la boue et faites vérifier que l'électricité est sûre. Ce n'est qu'ensuite que le séchage a du sens. Indiquez lors de la réservation jusqu'où l'eau est montée, et nous composerons la bonne combinaison de déshumidificateurs et de ventilateurs.",
      },
      {
        q: "Livrez-vous aussi sur le plateau, à Sorinnes ou Foy-Notre-Dame ?",
        a: "Oui, nous livrons dans toutes les sections de Dinant, y compris les villages au-dessus de la vallée. Il s'agit alors plus souvent d'une ferme rénovée que d'une maison sur le quai. Communiquez-nous la surface et la hauteur sous plafond, et nous adapterons les appareils à ce volume plus important.",
      },
      {
        q: "Un déshumidificateur peut-il tourner en continu dans la cave d'une maison de ville ?",
        a: "Oui. Le technicien raccorde le tuyau d'évacuation à un avaloir ou à un évier, pour que vous n'ayez pas de réservoir à vider. Dans une cave froide contre le rocher, nous préférons le déshumidificateur à adsorption, car il continue d'absorber l'humidité même à basse température.",
      },
    ],
    realisaties: [],
  },
  andenne: {
    slug: "andenne",
    title: "Andenne et Seilles : déshumidificateur à louer | Vernast",
    description:
      "Location de déshumidificateur à Andenne, Seilles ou Sclayn : maisons au bord de la Meuse, caves proches de la rivière, maisons contre le rocher. Livré.",
    h1: "Location de déshumidificateur à Andenne",
    kicker: "Namur · la cité mosane entre Namur et Huy",
    rit: { afstand: "environ 105 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Andenne se trouve **au bord de la Meuse, à mi-chemin entre Namur et Huy**. Le centre s'est développé autour de la collégiale Sainte-Begge, et l'ours de la légende de fondation revient chaque année lors du **carnaval des Ours**. Seilles, sur l'autre rive, fait partie de la même commune.",
      "La vallée est étroite ici, avec des rochers calcaires sur les deux rives. Sclayn, Namêche et Landenne s'accrochent au versant ou se nichent dans une vallée latérale, et plus loin de la rivière commence le plateau agricole. Depuis notre entrepôt d'Aartselaar, il nous faut **un peu plus d'une heure** pour rejoindre Andenne.",
    ],
    bouw: {
      kop: "Caves près de la Meuse et maisons contre le rocher",
      alineas: [
        "Le long des quais et dans les rues basses du centre se trouvent des maisons mitoyennes avec **une cave située à peine au-dessus du niveau de la rivière**. Quand la Meuse est haute, la nappe phréatique monte aussi. Une cave fraîchement rénovée reçoit alors cette humidité par le sol et le bas des murs. Faites donc d'abord mesurer s'il s'agit d'humidité de construction ou d'humidité venant du sol.",
        "À Sclayn, à Namêche et dans les rues à flanc de coteau, la façade arrière est souvent adossée au rocher ou à la terre. Ce mur reste froid et absorbe l'eau après une période humide. Si vous appliquez **un nouvel enduit sur un mur en pierre ou une nouvelle chape sur un vieux sol**, gardez les fenêtres fermées, ajoutez un chauffage en hiver et choisissez un déshumidificateur adapté au volume.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une cave au bord de la Meuse, mouillée après une crue.** Avec 110 litres par jour et une portée jusqu'à 600 m³, il retire l'humidité avant qu'elle ne pénètre profondément dans les murs." },
      { key: "radiaal2250", waarom: "Ce ventilateur radial résistant aux projections d'eau (IP55) **souffle sur un sol de cave mouillé** et dans les coins à côté de l'escalier, là où l'eau reste le plus longtemps." },
      { key: "teddh30", waarom: "**Pour une maison dont la façade arrière est adossée au rocher**, qui reste froide en hiver. Sans chaleur, le rendement du déshumidificateur chute et le mur libère lentement son eau. Ce chauffage nécessite un raccordement 400 V." },
      { key: "ttk170", waarom: "Pour une salle de bains ou une chambre dans une maison mitoyenne du centre. **Compact et économe (0,75 kW)**, il se monte donc facilement par un escalier étroit." },
    ],
    levering: {
      kop: "Livraison à Andenne : par l'E411 jusqu'à la Meuse",
      alinea:
        "Nous roulons **par le ring de Bruxelles et l'E411 jusqu'à Namur**, puis jusqu'à Andenne, soit un peu plus d'une heure au total. Lors de la réservation, vous choisissez une date de livraison ; nous convenons de l'heure exacte avec vous, car en Wallonie, nous livrons **sur rendez-vous**. Si vous habitez à Seilles ou haut sur le versant, dites-nous si la camionnette peut arriver jusqu'à la porte.",
    },
    afhalen: {
      kop: "Venir chercher à Aartselaar : un peu plus d'une heure par trajet",
      alinea:
        "Depuis Andenne, l'enlèvement signifie un peu plus d'une heure à l'aller et autant au retour, et un déshumidificateur doit voyager **debout dans le véhicule**. Si vous êtes de toute façon près d'Anvers, c'est possible. La livraison est généralement plus simple : le technicien installe les appareils et voit tout de suite à quel point la cave est humide.",
    },
    buren: ["namen-stad", "fernelmont", "ohey", "gesves"],
    faq: [
      {
        q: "Ma cave à Andenne est humide quand la Meuse est haute. Un déshumidificateur résout-il le problème ?",
        a: "Après une rénovation ou après de l'eau dans la cave, un déshumidificateur retire l'humidité accumulée dans les murs et le sol. Si l'eau revient chaque fois que la Meuse monte, il s'agit de la nappe phréatique et non d'humidité de construction. Une mesure d'humidité montre laquelle des deux joue le plus grand rôle.",
      },
      {
        q: "Livrez-vous aussi à Seilles, de l'autre côté de la Meuse ?",
        a: "Oui, Seilles fait partie d'Andenne et se trouve dans notre zone de livraison. Indiquez l'adresse complète lors de la réservation et précisez l'accès si vous habitez une rue étroite le long de la rivière. Nous convenons ensuite de l'heure de livraison avec vous.",
      },
      {
        q: "Comment sécher une maison dont la façade arrière est adossée au rocher ?",
        a: "Placez le déshumidificateur dans la pièce la plus froide, gardez les fenêtres fermées et ajoutez un chauffage pendant la saison de chauffe, car un mur en pierre froid libère lentement son eau. Comptez plutôt en semaines qu'en jours. Une mesure au démarrage et à la reprise montre de combien l'humidité du mur a baissé.",
      },
      {
        q: "Avec qui dois-je régler l'accès à la maison et l'emplacement des appareils ?",
        a: "Avec nous, tout simplement. N'hésitez pas à nous écrire ou à nous appeler : les questions pratiques, comme l'accès à l'habitation ou l'endroit où placer les appareils, nous les réglons ensemble avec vous.",
      },
    ],
    realisaties: [],
  },
  assesse: {
    slug: "assesse",
    title: "Location de déshumidificateur à Assesse et Crupet | Vernast",
    description:
      "Location de déshumidificateur à Assesse, Crupet, Courrière ou Maillen : constructions neuves le long de l'E411 et fermes en pierre du Condroz. Sur rendez-vous.",
    h1: "Location de déshumidificateur à Assesse",
    kicker: "Namur · le long de l'E411 dans le Condroz",
    rit: { afstand: "environ 110 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Assesse se trouve **dans le Condroz, au sud-est de Namur**, et est traversée par l'E411 et la N4. Grâce à cette situation, de **nouveaux lotissements** sont apparus autour de Courrière, Maillen et Sart-Bernard, souvent pour des personnes qui travaillent à Namur. Depuis Aartselaar, nous y sommes en un peu plus d'une heure.",
      "Les anciens villages sont pour leur part restés ruraux. **Crupet**, avec son donjon médiéval, fait partie des plus beaux villages de Wallonie, et à Florée et Sorinne-la-Longue aussi se dressent des **fermes et des maisons en pierre naturelle**. Vous trouvez ainsi dans une seule commune deux types de chantiers très différents.",
    ],
    bouw: {
      kop: "Constructions neuves sur le plateau, vieilles pierres dans les villages",
      alineas: [
        "**Dans les nouveaux quartiers**, il s'agit surtout de constructions neuves : une chape sur chauffage par le sol et du plafonnage sur chaque mur, qui doivent être secs avant l'arrivée du poseur de sol ou du peintre. Qui veut emménager peu après le gros œuvre gagne des semaines sur son planning grâce à un déshumidificateur. **C'est la chape qui contient le plus d'eau.**",
        "**À Crupet, à Florée et dans les autres vieux noyaux**, on rénove des maisons et des fermes en pierre. L'humidité s'y trouve dans des murs épais sans coulisse, qui réagissent lentement et restent froids en hiver. Un déshumidificateur accompagné d'un chauffage, et un peu de patience, y fonctionnent mieux qu'un appareil trop grand pour la pièce.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison neuve à Courrière ou Maillen** : 70 litres par jour pour des pièces jusqu'à 400 m³, de quoi traiter un rez-de-chaussée avec une chape fraîche." },
      { key: "radiaal2250", waarom: "**Souffler sur la chape** brise la fine couche d'air saturé juste au-dessus du sol. Ce ventilateur radial dirige le flux d'air sur la surface." },
      { key: "ttk650", waarom: "Pour **une grande construction neuve ou une maison avec cave** qui doit sécher en une fois : 110 litres par jour, pour des pièces jusqu'à 600 m³." },
      { key: "teddh30", waarom: "**Pour une maison en pierre à Crupet ou Florée** qui reste non chauffée pendant les travaux. Avec de la chaleur, le mur épais libère son eau plus vite. Prévoyez un raccordement 400 V." },
    ],
    levering: {
      kop: "Livraison à Assesse : directement par l'E411",
      alinea:
        "Assesse dispose de **sa propre sortie sur l'E411**. Depuis Aartselaar, nous prenons le ring de Bruxelles puis l'autoroute vers le sud, soit un peu plus d'une heure au total. Lors de la réservation, vous choisissez la date de livraison, et nous fixons l'heure avec vous, car en Wallonie nous travaillons **sur rendez-vous**. Si le chantier est encore en gros œuvre, indiquez-nous le raccordement électrique disponible.",
    },
    afhalen: {
      kop: "Enlèvement : l'E411 en sens inverse jusqu'à Aartselaar",
      alinea:
        "Par l'E411 et le ring, notre point d'enlèvement est à un peu plus d'une heure d'Assesse. Si vous devez de toute façon vous rendre en camionnette dans la région d'Anvers, vous pouvez emporter un appareil ; transportez-le **debout**. Pour une construction neuve complète avec plusieurs appareils, **la livraison est plus simple**.",
    },
    buren: ["namen-stad", "gesves", "profondeville", "yvoir"],
    faq: [
      {
        q: "Quand puis-je poser le revêtement de sol sur la chape d'une maison neuve à Assesse ?",
        a: "Quand une mesure montre que l'humidité résiduelle est sous la limite admise pour le revêtement, et non après un nombre fixe de semaines. Un déshumidificateur avec un ventilateur accélère fortement le processus. Demandez à votre poseur de sol quelle valeur il attend, et faites mesurer l'humidité résiduelle avant qu'il ne commence.",
      },
      {
        q: "Ai-je assez de courant sur un chantier neuf sans raccordement définitif ?",
        a: "Un déshumidificateur et un ventilateur fonctionnent sur une prise standard, y compris sur un coffret de chantier. Un chauffage de chantier de 30 kW nécessite un raccordement 400 V. Indiquez lors de la réservation ce qui est disponible sur le chantier, et nous adapterons le pack en conséquence.",
      },
      {
        q: "Un déshumidificateur fonctionne-t-il dans une vieille maison en pierre sans mur creux ?",
        a: "Oui, mais plus lentement que dans une construction neuve. Un mur massif libère son eau lentement et reste froid en hiver. Gardez les fenêtres fermées, ajoutez un chauffage par temps froid et faites mesurer au début, pour voir plus tard de combien le mur a réellement séché.",
      },
      {
        q: "Livrez-vous aussi à Crupet et Sorinne-la-Longue ?",
        a: "Oui, toutes les sections d'Assesse se trouvent dans notre zone de livraison. Dans le calculateur, vous voyez le montant complet de votre pack de séchage avant de réserver. Après la réservation, nous vous appelons pour fixer l'heure de livraison à votre adresse.",
      },
    ],
    realisaties: [],
  },
  fernelmont: {
    slug: "fernelmont",
    title: "Déshumidificateur de chantier à Fernelmont | Vernast",
    description:
      "Location de déshumidificateur à Fernelmont : fermes rénovées et maisons neuves à Noville-les-Bois, Hingeon, Franc-Waret et Marchovelette, à l'est de Namur.",
    h1: "Location de déshumidificateur à Fernelmont",
    kicker: "Province de Namur · villages agricoles à l'est de Namur",
    rit: { afstand: "environ 95 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Fernelmont est **une commune rurale au nord-est de Namur**, le long de l'E42 en direction de Liège. L'administration communale se trouve à **Noville-les-Bois**. Tout autour se trouvent des villages comme Hingeon, Franc-Waret, Marchovelette, Bierwart, Forville et Cortil-Wodon.",
      "C'est **une terre à céréales aux grandes cultures**, et les villages sont encore groupés autour de leurs fermes et de leur église. À Franc-Waret se dresse **un château**. Grâce à la proximité de Namur et de l'E42, beaucoup de nouvelles maisons sont apparues ces dernières décennies. Depuis Aartselaar, vous y êtes en un peu plus d'une heure.",
    ],
    bouw: {
      kop: "Fermes aux murs épais et maisons neuves sur le plateau",
      alineas: [
        "**Beaucoup de maisons à Fernelmont sont d'anciennes fermes ou maisons de village** en brique ou en pierre calcaire. Lors d'une rénovation, on pose **un nouveau sol et un nouveau plafonnage**, ou l'on intègre une étable à l'habitation. Ces murs n'ont souvent pas de barrière contre l'humidité et absorbent l'eau pendant un hiver humide. Faites donc mesurer combien d'humidité ils contenaient déjà avant les travaux.",
        "**Pour une construction neuve sur le plateau**, le sol limoneux joue un rôle : l'eau s'infiltre lentement, et une maison construite pendant une période humide ne sèche pas d'elle-même. **Un terrain ouvert et exposé** se refroidit vite en hiver. Un chauffage de chantier à côté du déshumidificateur permet alors à la chape de respecter le planning.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison neuve à Noville-les-Bois ou Hingeon** : 70 litres par jour, adapté jusqu'à environ 400 m³." },
      { key: "ttk650", waarom: "Pour **une étable intégrée à l'habitation** : beaucoup de volume et beaucoup de murs mouillés à la fois, donc 110 litres par jour." },
      { key: "teddh20", waarom: "Ce chauffage de 20 kW porte une pièce de ferme non chauffée au-dessus de 15 °C, pour que le déshumidificateur à condensation fasse son travail. **Il nécessite du courant triphasé (400 V).**" },
      { key: "ttv4500", waarom: "**Dans une maison aux murs intérieurs épais**, l'air sec n'atteint pas chaque pièce de lui-même. Ce ventilateur l'y pousse." },
    ],
    levering: {
      kop: "Livraison à Fernelmont : par Namur et l'E42",
      alinea:
        "Nous roulons **par l'E411 jusqu'à Namur, puis par l'E42**, un peu plus d'une heure depuis Aartselaar. Vous choisissez une date de livraison lors de la réservation, et nous livrons **sur rendez-vous**. Si le chantier se trouve sur un chemin de campagne étroit ou derrière un portail de cour, signalez-le à l'avance. Le technicien sait alors où il peut faire demi-tour et sur quelle distance il doit porter les appareils.",
    },
    afhalen: {
      kop: "L'enlèvement depuis Fernelmont, un sacré trajet",
      alinea:
        "Notre point d'enlèvement à Aartselaar est à **un peu plus d'une heure de route**. Vous faites ce trajet aller-retour à l'enlèvement, puis encore une fois au retour du matériel. **La livraison vous épargne ce temps**, et le technicien mesure à l'installation et à la reprise où en est le séchage.",
    },
    buren: ["eghezee", "namen-stad", "andenne"],
    faq: [
      {
        q: "Comment savoir si le mur de ma vieille ferme est assez sec pour être plafonné ?",
        a: "En mesurant, pas en touchant. Un mur épais peut sembler sec en surface alors qu'il est encore humide à l'intérieur. Le technicien mesure à l'installation et à la reprise, pour que vous ayez un chiffre à transmettre à votre plafonneur.",
      },
      {
        q: "Dois-je être présent quand le déshumidificateur est livré à Fernelmont ?",
        a: "Quelqu'un doit laisser entrer le technicien et lui montrer où placer les appareils. C'est pourquoi nous convenons à l'avance du moment de la livraison avec vous. Si votre entrepreneur est tous les jours sur le chantier, il peut aussi réceptionner la livraison.",
      },
      {
        q: "Le déshumidificateur peut-il tourner la nuit dans une ferme habitée ?",
        a: "Oui, les appareils sont faits pour tourner jour et nuit. Dans la même pièce, vous les entendez par contre. Placez donc le déshumidificateur dans la pièce en rénovation et fermez la porte : cette pièce sèchera aussi plus vite.",
      },
      {
        q: "Que faire de l'eau de condensation s'il n'y a pas d'évacuation ?",
        a: "L'appareil recueille l'eau dans un réservoir que vous videz à temps, ou la pompe par un tuyau vers un seau ou une évacuation extérieure. Sur un chantier sans sanitaires, le technicien choisit la solution la plus pratique lors de l'installation et vous explique à quelle fréquence vider.",
      },
    ],
    realisaties: [],
  },
  floreffe: {
    slug: "floreffe",
    title: "Floreffe : déshumidificateur de chantier à louer | Vernast",
    description:
      "Location de déshumidificateur à Floreffe, Franière ou Floriffoux : maisons de la vallée de la Sambre sous l'abbaye et maisons sur le versant. Sur rendez-vous.",
    h1: "Location de déshumidificateur à Floreffe",
    kicker: "Namur · l'abbaye au-dessus de la Sambre",
    rit: { afstand: "environ 100 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Floreffe se trouve **sur la Sambre, quelques kilomètres en amont de Namur**. Au-dessus de la vallée se dresse **l'abbaye de Floreffe**, fondée au douzième siècle par les prémontrés. Elle abrite aujourd'hui une école, et la bière d'abbaye perpétue son nom.",
      "La commune comprend Franière, Floriffoux et Soye. Franière et Floriffoux se trouvent **dans la vallée de la Sambre**, avec des maisons plus anciennes le long de l'eau et du chemin de fer. Soye et les parties hautes de Floreffe sont sur le versant, avec des maisons plus récentes et des lotissements. Depuis Aartselaar, il nous faut un peu plus d'une heure.",
    ],
    bouw: {
      kop: "La vallée de la Sambre et le versant au-dessus",
      alineas: [
        "**Dans la vallée, à Franière et Floriffoux**, des maisons mitoyennes et des maisons ouvrières se trouvent près de la rivière, avec une cave dans un sol humide. Qui rénove une telle maison trouve souvent un vieux plafonnage gorgé d'humidité et un sol sans isolation. Après le décapage et le nouveau plafonnage, **un déshumidificateur compact par pièce** suffit généralement, à condition que la porte reste fermée.",
        "**Sur le versant**, des maisons des dernières décennies sont rénovées ou agrandies : une nouvelle cuisine avec carrelage, des combles rendus habitables, une extension avec chape. Là, tout tourne autour du rythme. La finition doit suivre, et c'est la chape qui détermine quand elle peut commencer.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**Pour une maison mitoyenne à Franière avec un nouveau plafonnage** : 50 litres par jour sur une prise standard, et assez compact pour passer de pièce en pièce." },
      { key: "ttk350", waarom: "Pour **une extension ou des combles aménagés à Soye** : 70 litres par jour pour des pièces jusqu'à 400 m³." },
      { key: "radiaal2250", waarom: "**Souffle de manière ciblée et à ras du sol sur une nouvelle chape** dans une extension, pour que le carreleur puisse commencer plus tôt." },
      { key: "teddh20", waarom: "**Pour une cave humide de la vallée de la Sambre** qui reste fraîche toute l'année. Ce chauffage de 20 kW sur 400 V la porte à une température où le déshumidificateur est rentable." },
    ],
    levering: {
      kop: "Livraison à Floreffe : par l'E42 jusque dans la vallée de la Sambre",
      alinea:
        "Nous roulons **par le ring de Bruxelles jusqu'à l'E42**, qui passe tout près de Floreffe ; comptez un peu plus d'une heure. Lors de la réservation, vous choisissez une date de livraison. Nous convenons de l'heure avec vous, car en Wallonie nous livrons **sur rendez-vous**. Dans la vallée, certaines rues passent entre le chemin de fer et la rivière, avec peu de place pour s'arrêter. Dites-nous à l'avance où la camionnette peut stationner un instant.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : plus d'une heure dans chaque sens",
      alinea:
        "Notre point d'enlèvement est à un peu plus d'une heure de route de Floreffe. Aller-retour, un enlèvement vous coûte donc **vite une demi-journée**, et le déshumidificateur doit être transporté debout. La livraison est généralement le choix le plus raisonnable, surtout si vous avez besoin de plus d'un appareil.",
    },
    buren: ["namen-stad", "profondeville", "fosses-la-ville", "sambreville", "jemeppe-sur-sambre"],
    faq: [
      {
        q: "Comment sécher une vieille maison mitoyenne à Franière après le décapage du plafonnage ?",
        a: "Laissez d'abord sécher ce qui est mis à nu après le décapage, et ne replafonnez qu'ensuite. Un déshumidificateur par étage, fenêtres et portes fermées, est le plus rapide. Une mesure au démarrage et à la reprise montre si le mur est prêt pour la nouvelle couche.",
      },
      {
        q: "Combien d'appareils me faut-il pour une extension avec chape ?",
        a: "Pour une extension moyenne, un déshumidificateur avec un ventilateur qui souffle sur le sol suffit généralement. Le calculateur établit votre pack sur la base de la surface, de l'épaisseur de la couche et du matériau, et affiche le montant avant que vous ne réserviez.",
      },
      {
        q: "Ma cave tout près de la Sambre est toujours moite. Un déshumidificateur aide-t-il ?",
        a: "Un déshumidificateur retire l'humidité de l'air et des murs mouillés après une rénovation. Si la cave est moite parce que la nappe phréatique est haute, il ne sèche que temporairement : l'humidité revient dès que l'appareil est parti. Faites donc d'abord mesurer la cause.",
      },
      {
        q: "Venez-vous aussi jusqu'aux maisons près de l'abbaye ?",
        a: "Oui, tout Floreffe se trouve dans notre zone de livraison, y compris les rues sur le versant sous l'abbaye. Si elles sont étroites ou en pente raide, mentionnez-le lors de la réservation. Le technicien sait ainsi à l'avance où il peut décharger et comment amener les appareils à l'intérieur.",
      },
    ],
    realisaties: [],
  },
  "fosses-la-ville": {
    slug: "fosses-la-ville",
    title: "Location de déshumidificateur à Fosses-la-Ville | Vernast",
    description:
      "Location de déshumidificateur à Fosses-la-Ville, Vitrival ou Sart-Saint-Laurent : maisons en pierre autour de la collégiale et fermes du plateau. Livré.",
    h1: "Location de déshumidificateur à Fosses-la-Ville",
    kicker: "Namur · la cité des Chinels entre Sambre et Meuse",
    rit: { afstand: "environ 110 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Fosses-la-Ville se trouve **entre la Sambre et la Meuse, au sud de Floreffe**. La petite ville s'est développée autour de la collégiale Saint-Feuillen et est connue dans la région pour **les Chinels**, les personnages masqués du carnaval de la mi-carême. Depuis Aartselaar, il nous faut un peu plus d'une heure pour venir jusqu'ici.",
      "Autour du centre se trouvent Vitrival, Sart-Saint-Laurent, Sart-Eustache, Aisemont et Le Roux. Le paysage est **une zone agricole ouverte** aux lisières boisées, parcourue de petits ruisseaux. Des maisons de village et des fermes en pierre y côtoient des maisons des années septante et plus récentes.",
    ],
    bouw: {
      kop: "Un vieux centre-ville et la campagne ouverte autour",
      alineas: [
        "**Dans le centre autour de la collégiale**, des maisons mitoyennes en pierre et en brique ont des caves et un rez-de-chaussée souvent dépourvu de barrière contre l'humidité. Lors d'une rénovation, un nouveau plafonnage s'ajoute sur de vieux murs. Ce mélange d'humidité de construction et d'humidité ancienne sèche lentement : travaillez donc avec **un appareil par étage**, gardez les portes fermées et faites mesurer au démarrage.",
        "**Dans les villages du plateau**, on rénove des fermes et des maisons des années septante : nouveaux sols, chape isolée, salle de bains. Le terrain y est ouvert et venteux, et il fait froid en hiver. Un chantier qui reste alors non chauffé ne sèche qu'avec un apport de chaleur.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison des années septante avec une nouvelle chape** : 70 litres par jour pour des pièces jusqu'à 400 m³, adapté à un rez-de-chaussée complet." },
      { key: "ttk170", waarom: "Pour **une maison mitoyenne du centre autour de la collégiale** : compact, 0,75 kW, et facile à déplacer de pièce en pièce." },
      { key: "teddh30", waarom: "**Pour un chantier d'hiver sur le plateau ouvert**, où une maison non chauffée se refroidit vite. Avec un apport de chaleur, le déshumidificateur continue de tourner à pleine capacité. Ce chauffage nécessite du courant triphasé (400 V)." },
      { key: "ttv4500", waarom: "Dans **une longue ferme aux pièces en enfilade**, ce ventilateur met l'air en mouvement, pour que chaque pièce reçoive de l'air sec." },
    ],
    levering: {
      kop: "Livraison à Fosses-la-Ville : par l'E42 jusqu'au plateau",
      alinea:
        "Le trajet passe **par le ring de Bruxelles et l'E42**, puis vers le sud jusqu'au plateau, soit un peu plus d'une heure au total. À la réservation, vous choisissez la date de livraison, et nous réglons l'heure avec vous, car en Wallonie nous livrons **sur rendez-vous**. Pendant le carnaval, le centre est fermé. Si votre livraison tombe pendant cette période, signalez-le, pour que nous choisissions un autre jour.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar depuis l'Entre-Sambre-et-Meuse",
      alinea:
        "Depuis Fosses-la-Ville, vous roulez un peu plus d'une heure jusqu'à notre point d'enlèvement, puis autant pour revenir. Qui rénove une ferme a en outre souvent besoin de plus d'un appareil, et ils tiennent rarement ensemble dans une voiture. **Faites-vous livrer** : les appareils sont alors directement à leur place.",
    },
    buren: ["floreffe", "profondeville", "mettet", "sambreville"],
    faq: [
      {
        q: "Pouvez-vous livrer pendant le carnaval de Fosses-la-Ville ?",
        a: "Le centre est alors en grande partie fermé, et nous préférons donc planifier une livraison dans le centre un autre jour. Dans les villages alentour, ce n'est généralement pas un problème. Mentionnez lors de la réservation que votre adresse se trouve dans le centre, et nous chercherons ensemble une date qui convient.",
      },
      {
        q: "Comment sécher une maison des années septante après une nouvelle chape ?",
        a: "Avec un déshumidificateur adapté au volume et un ventilateur qui souffle à ras du sol, fenêtres fermées. Une chape de quelques centimètres a besoin de plusieurs semaines, et avec les bons appareils, cela va plus vite. Une mesure à la reprise montre si le poseur de sol peut commencer.",
      },
      {
        q: "Ai-je besoin d'un chauffage si je rénove en hiver sur le plateau ?",
        a: "Si la maison n'est pas chauffée pendant les travaux, oui. Sous 15 °C, un déshumidificateur à condensation fonctionne nettement moins bien et le mur libère lentement son eau. Le chauffage de 30 kW nécessite un raccordement 400 V : mentionnez donc lors de la réservation ce qui est disponible sur le chantier.",
      },
      {
        q: "Le Roux ou Aisemont font-ils aussi partie de votre zone de livraison ?",
        a: "Oui, toutes les sections de Fosses-la-Ville en font partie. Indiquez l'adresse complète lors de la réservation et choisissez une date de livraison. Nous fixons ensuite l'heure de la livraison ensemble.",
      },
    ],
    realisaties: [],
  },
  gembloers: {
    slug: "gembloers",
    title: "Déshumidificateur à louer à Gembloux en Hesbaye | Vernast",
    description:
      "Location de déshumidificateur à Gembloux : constructions neuves et fermes rénovées sur le plateau limoneux, de Grand-Leez à Corroy-le-Château. Livré, installé.",
    h1: "Location de déshumidificateur à Gembloux",
    kicker: "Province de Namur · le plateau limoneux de la Hesbaye",
    rit: { afstand: "environ 80 km", tijd: "environ une heure" },
    intro: [
      "**Gembloux** se trouve **sur le plateau limoneux de la Hesbaye**. La petite ville s'est développée autour d'une ancienne abbaye. Les bâtiments abbatiaux abritent aujourd'hui Gembloux Agro-Bio Tech, la faculté d'agronomie de l'université de Liège.",
      "Autour du centre se trouvent des villages agricoles comme **Grand-Leez, Lonzée, Sauvenière, Ernage et Corroy-le-Château**. Gembloux est située sur **la ligne de chemin de fer entre Bruxelles et Namur**. Beaucoup de nouvelles maisons et de lotissements y sont donc apparus. Depuis Aartselaar, nous y sommes en environ une heure.",
    ],
    bouw: {
      kop: "Constructions neuves sur limon et fermes transformées en habitations",
      alineas: [
        "**La plupart des travaux sont des constructions neuves** dans les lotissements autour du centre et dans les villages. **La chape et le plafonnage** doivent y être secs à temps pour le poseur de sol. Le limon laisse passer l'eau lentement. Après une semaine humide, une fouille reste longtemps sous eau, et une maison mise hors d'eau et hors d'air en hiver est pleine d'humidité.",
        "Par ailleurs, **d'anciennes fermes du plateau sont transformées** en habitations. Elles ont des murs épais en brique ou en pierre calcaire, **sans barrière contre l'humidité**, et souvent une étable ou une grange chauffée pour la première fois. Un tel mur libère son eau lentement. Qui plafonne trop tôt ou pose un parquet risque des moisissures ou un sol qui travaille.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison neuve dans un lotissement** : 70 litres par jour et adapté jusqu'à environ 400 m³, assez pour un rez-de-chaussée avec une chape fraîche." },
      { key: "ttk650", waarom: "Pour **une ferme ou une grange qui devient une habitation** : de grandes pièces hautes avec beaucoup de murs mouillés, où il vous faut 110 litres par jour." },
      { key: "ttv4500", waarom: "Dans une longue étable aux murs épais, l'air stagne. **Ce ventilateur (4 500 m³/h) amène l'air sec** jusque dans le coin le plus éloigné." },
      { key: "teddh30", waarom: "**Un chantier d'hiver sur le plateau ouvert** se refroidit fortement. Ce chauffage maintient la pièce au-dessus de 15 °C, pour que le déshumidificateur à condensation fonctionne bien. Le raccordement se fait sur du courant triphasé (400 V)." },
    ],
    levering: {
      kop: "Livraison à Gembloux : tout près de l'E411",
      alinea:
        "Gembloux se trouve **à quelques kilomètres de l'E411**. Depuis Aartselaar, nous y sommes en environ une heure. Vous choisissez une date de livraison lors de la réservation, et nous livrons **sur rendez-vous**. Si l'accès de votre lotissement n'est pas encore aménagé, indiquez où la camionnette peut s'arrêter. Le technicien ne doit ainsi pas traverser la boue avec un lourd déshumidificateur.",
    },
    afhalen: {
      kop: "L'enlèvement est possible, mais c'est une heure de route",
      alinea:
        "Notre point d'enlèvement à Aartselaar est à **environ une heure de route**, par l'E411 et le ring de Bruxelles. Si vous devez de toute façon vous rendre dans la région d'Anvers, vous pouvez emporter un appareil. Pour une construction neuve complète avec plusieurs appareils, **la livraison avec installation** est plus simple.",
    },
    buren: ["chastre", "walhain", "perwijs", "eghezee", "sombreffe"],
    faq: [
      {
        q: "Pourquoi ma fouille à Gembloux reste-t-elle si longtemps mouillée ?",
        a: "Parce que le sol limoneux de la Hesbaye laisse mal passer l'eau. Après une période humide, l'eau stagne dans la fouille et pénètre dans les murs de fondation. L'eau stagnante doit d'abord disparaître. Dès que la maison est hors d'eau et hors d'air, un déshumidificateur retire l'humidité de l'espace.",
      },
      {
        q: "Je rénove une ferme à Grand-Leez. Quand puis-je plafonner ?",
        a: "Seulement quand les vieux murs sont assez secs. Avec une brique épaisse ou de la pierre calcaire sans barrière contre l'humidité, cela prend plus de temps que dans une construction neuve. Demandez au technicien de mesurer lors de l'installation. Vous avez alors un point de départ et voyez à chaque mesure suivante où en est le séchage.",
      },
      {
        q: "Combien d'appareils me faut-il pour une maison neuve ?",
        a: "Généralement un déshumidificateur de 70 litres par étage avec chape fraîche, complété par un ventilateur si la pièce est longue ou cloisonnée. Indiquez la surface et le nombre d'étages lors de la réservation, et nous composerons la combinaison en conséquence.",
      },
      {
        q: "Livrez-vous aussi à Corroy-le-Château et Lonzée ?",
        a: "Toutes les sections de Gembloux font partie de notre zone de livraison, de Corroy-le-Château et Bossière à Lonzée, Sauvenière et Ernage. À la campagne, il est utile d'indiquer lors de la réservation par où le chantier est accessible.",
      },
    ],
    realisaties: [],
  },
  gesves: {
    slug: "gesves",
    title: "Gesves et Mozet : location de déshumidificateur | Vernast",
    description:
      "Location de déshumidificateur à Gesves, Mozet, Faulx-les-Tombes ou Haltinne : maisons de village en calcaire dans les vallées du Condroz. Livré sur rendez-vous.",
    h1: "Location de déshumidificateur à Gesves",
    kicker: "Namur · villages dans les vallées du Condroz",
    rit: { afstand: "environ 110 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Gesves se trouve **dans le nord du Condroz, à l'est de Namur**. La commune comprend Faulx-les-Tombes, Haltinne, Mozet et Sorée. Le relief est marqué, avec **des versants boisés et des vallées étroites**, comme celle du Samson, qui rejoint la Meuse.",
      "Mozet est reconnu comme l'un des plus beaux villages de Wallonie et est bâti en **pierre calcaire grise**. Ce matériau marque toute la commune : qui rénove à Gesves a généralement affaire à des murs massifs en pierre. Depuis Aartselaar, il nous faut **un peu plus d'une heure** pour venir jusqu'ici.",
    ],
    bouw: {
      kop: "Calcaire dans la vallée, murs froids sur le versant",
      alineas: [
        "**En fond de vallée**, les maisons se trouvent près d'un ruisseau, sur un sol humide. Une cave y prend parfois l'eau lors de pluies persistantes. Après une réparation ou une rénovation, une telle cave doit **être entièrement sèche avant d'y poser un nouveau sol**, sinon l'humidité se retrouvera sous le carrelage.",
        "**Contre le versant**, des maisons ont un côté à moitié enterré. Ce mur reste froid toute l'année et paraît moite après l'hiver. Si vous prévoyez un nouvel enduit intérieur ou une contre-cloison, laissez d'abord sécher le mur. Sinon, vous enfermez l'humidité derrière la finition.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison de village en calcaire après une transformation** : 70 litres par jour pour des pièces jusqu'à 400 m³, assez pour un rez-de-chaussée complet." },
      { key: "revolution", waarom: "**Pour une contre-cloison ou un sol flottant contre un mur froid.** Ce déshumidificateur à adsorption souffle de l'air sec dans la construction par des gaines et continue de fonctionner dans une pièce froide." },
      { key: "radiaal2250", waarom: "Après de l'eau dans une cave de la vallée, ce ventilateur radial souffle **de manière ciblée sur le sol**, pour que la chape ne reste pas sous une couche d'air humide." },
      { key: "teddh20", waarom: "**Pour une cave ou une pièce fermée contre le versant.** Ce chauffage de 20 kW porte le local à la bonne température pour le déshumidificateur et nécessite un raccordement 400 V." },
    ],
    levering: {
      kop: "Livraison à Gesves : par Namur jusque dans les vallées",
      alinea:
        "Le trajet passe **par l'E411 jusqu'au-delà de Namur**, puis par les routes régionales jusqu'aux villages, soit un peu plus d'une heure au total. À la réservation, vous choisissez la date de livraison ; nous vous appelons pour fixer l'heure, car en Wallonie nous livrons **sur rendez-vous**. Certaines rues de Mozet et de Faulx-les-Tombes sont étroites et pentues. Précisez l'accès, et le technicien en tiendra compte.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar depuis Gesves",
      alinea:
        "Notre point d'enlèvement est à un peu plus d'une heure de route de Gesves. Avec le chargement et le déchargement, un enlèvement vous coûte donc **vite une demi-journée**, et un déshumidificateur doit être transporté debout. Avec la livraison, tout cela disparaît et le technicien place directement les appareils au bon endroit.",
    },
    buren: ["namen-stad", "andenne", "ohey", "assesse"],
    faq: [
      {
        q: "Puis-je poser une contre-cloison contre un mur encore humide ?",
        a: "Mieux vaut pas. Derrière une contre-cloison ou une nouvelle couche d'enduit, l'humidité ne peut plus s'échapper, avec pour conséquence des moisissures ou une finition qui se décolle. Laissez d'abord le mur sécher et faites-le mesurer. Si la cloison est déjà posée, un déshumidificateur à adsorption peut souffler de l'air sec par des gaines dans le vide derrière elle.",
      },
      {
        q: "Un déshumidificateur fonctionne-t-il dans une cave froide de la vallée ?",
        a: "Sous 15 °C, un déshumidificateur à condensation perd une grande partie de son rendement. Dans une cave froide, ajoutez donc un chauffage, ou choisissez un déshumidificateur à adsorption, qui continue de fonctionner à basse température. Le bon choix dépend de la pièce et de la quantité d'humidité.",
      },
      {
        q: "Combien de temps un déshumidificateur reste-t-il dans une maison en calcaire à Mozet ?",
        a: "Cela dépend de l'épaisseur des murs, de la quantité de nouvel enduit et du fait que la maison soit chauffée ou non. Un mur épais en pierre sèche lentement : comptez plutôt quelques semaines. La bonne durée de séchage découle d'une mesure au démarrage et à la reprise, pas d'un délai fixe.",
      },
      {
        q: "Allez-vous aussi à Haltinne et Sorée ?",
        a: "Oui, tous les villages de Gesves se trouvent dans notre zone de livraison. Indiquez l'adresse complète lors de la réservation et, pour une maison isolée, décrivez comment la camionnette y accède le mieux. Nous convenons ensuite avec vous de l'heure précise de livraison.",
      },
    ],
    realisaties: [],
  },
  "jemeppe-sur-sambre": {
    slug: "jemeppe-sur-sambre",
    title: "Déshumidificateur à louer à Jemeppe-sur-Sambre | Vernast",
    description:
      "Location de déshumidificateur à Jemeppe-sur-Sambre, Spy, Moustier ou Ham-sur-Sambre : maisons de la vallée de la Sambre, caves près de l'eau. Mesure sur place.",
    h1: "Location de déshumidificateur à Jemeppe-sur-Sambre",
    kicker: "Province de Namur · la vallée de la Sambre",
    rit: { afstand: "environ 95 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Jemeppe-sur-Sambre se trouve **dans la vallée de la Sambre**, entre Namur et Charleroi. Outre Jemeppe elle-même, **Spy, Moustier-sur-Sambre, Ham-sur-Sambre, Mornimont, Onoz, Balâtre et Saint-Martin** font partie de la commune. Spy est connue pour la grotte où l'on a découvert des squelettes de Néandertaliens.",
      "Le long de la Sambre, **l'industrie lourde** a longtemps été présente, notamment des entreprises chimiques. **Les maisons ouvrières des villages au bord de l'eau** en témoignent. Plus loin de la rivière se trouvent les villages plus ruraux et les maisons plus récentes. Le trajet depuis Aartselaar dure un peu plus d'une heure.",
    ],
    bouw: {
      kop: "Maisons mitoyennes près de la Sambre et maisons sur le versant",
      alineas: [
        "**Dans les villages au bord de la Sambre**, on trouve beaucoup de maisons mitoyennes anciennes, construites pour ceux qui travaillaient dans les usines. Elles sont situées en contrebas, près de l'eau, et ont souvent **une cave ou un rez-de-chaussée sans barrière contre l'humidité**. Après une crue ou une rénovation, l'humidité reste longtemps dans les murs. Un rez-de-chaussée froid et humide ne sèche pas tout seul.",
        "**Sur les versants au-dessus de la vallée**, on construit davantage. Il s'agit alors de **chape et de plafonnage** dans une maison neuve, ou d'une cave dans le versant qui reçoit de l'eau du côté de la colline. Lors de l'installation, le technicien effectue une mesure d'humidité. Vous savez ainsi si l'humidité vient de la construction ou du sol.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour la cave d'une maison au bord de la Sambre** qui a été inondée : 110 litres par jour, pour que l'humidité sorte avant de pénétrer plus profondément dans les murs." },
      { key: "revolution", waarom: "**Pour un rez-de-chaussée froid près de l'eau** : ce déshumidificateur à adsorption continue d'absorber l'humidité, même si la température reste sous 15 °C." },
      { key: "ttk350", waarom: "Pour une construction neuve sur le versant : 70 litres par jour et adapté jusqu'à environ 400 m³, assez pour un étage complet." },
      { key: "radiaal2250", waarom: "Pour un sol de cave mouillé près de la rivière : **ce ventilateur radial souffle sur le sol** jusque dans les coins où l'eau reste le plus longtemps." },
    ],
    levering: {
      kop: "Livraison à Jemeppe-sur-Sambre : par Namur ou par Charleroi",
      alinea:
        "Nous roulons **par l'E411 et l'E42** et sommes en route un peu plus d'une heure depuis Aartselaar. Vous choisissez une date de livraison lors de la réservation, et nous livrons **sur rendez-vous**. S'il s'agit d'une cave après une inondation, indiquez jusqu'où l'eau est montée et si elle est déjà partie. Le technicien apporte alors directement les bons appareils.",
    },
    afhalen: {
      kop: "L'enlèvement depuis la vallée de la Sambre prend une demi-matinée",
      alinea:
        "Jusqu'à notre point d'enlèvement, vous roulez **un peu plus d'une heure**, et autant pour revenir. Cela n'en vaut la peine que si vous devez de toute façon vous rendre dans la région d'Anvers. Après un dégât des eaux, la livraison est le meilleur choix : **vous restez près de la cave** et le technicien apporte tout.",
    },
    buren: ["sambreville", "sombreffe", "gembloers", "floreffe"],
    faq: [
      {
        q: "Ma maison au bord de la Sambre a une cave humide. Humidité de construction ou nappe phréatique ?",
        a: "Les deux sont possibles, et la différence détermine si un déshumidificateur aide. Après une rénovation ou une crue, un déshumidificateur élimine l'humidité durablement. Si l'eau revient par le sol à chaque période de pluie, il s'agit de la nappe phréatique et vous devez d'abord traiter la cause.",
      },
      {
        q: "Livrez-vous aussi à Spy, Moustier et Ham-sur-Sambre ?",
        a: "Toutes les sections de Jemeppe-sur-Sambre font partie de notre zone de livraison, de Moustier et Ham-sur-Sambre au bord de la rivière jusqu'à Spy et Saint-Martin. Indiquez l'adresse complète lors de la réservation, et nous planifierons correctement le trajet.",
      },
      {
        q: "Combien de temps une vieille maison mitoyenne doit-elle sécher après une rénovation ?",
        a: "Une vieille maison aux murs épais en brique sans barrière contre l'humidité libère son eau lentement. Comptez quelques semaines, pas quelques jours. Le plus rapide : fenêtres fermées, un déshumidificateur par étage et un ventilateur dirigé vers le mur le plus humide.",
      },
      {
        q: "Un déshumidificateur à adsorption est-il meilleur qu'un appareil à condensation dans une cave ?",
        a: "Dans une cave froide, oui. Un déshumidificateur à condensation a besoin de chaleur et perd beaucoup de rendement sous 15 °C. Un déshumidificateur à adsorption absorbe aussi l'humidité à des températures plus basses. Dans une cave chauffée, un appareil à condensation convient parfaitement, éventuellement avec un chauffage de chantier.",
      },
    ],
    realisaties: [],
  },
  "la-bruyere": {
    slug: "la-bruyere",
    title: "La Bruyère, près de Namur : déshumidificateur | Vernast",
    description:
      "Location de déshumidificateur à La Bruyère : constructions neuves et rénovations à Rhisnes, Émines, Meux et Bovesse, sur le plateau agricole au nord de Namur.",
    h1: "Location de déshumidificateur à La Bruyère",
    kicker: "Province de Namur · le plateau au-dessus de Namur",
    rit: { afstand: "environ 88 km", tijd: "environ une heure" },
    intro: [
      "La Bruyère se trouve **sur le plateau juste au nord de Namur**, entre Gembloux et la ville. La maison communale se trouve à **Rhisnes**. Les autres villages sont Émines, Meux, Bovesse, Saint-Denis, Villers-lez-Heest et Warisoulx.",
      "C'est **une commune rurale aux champs et aux fermes dispersées**. Grâce à la courte distance jusqu'à Namur et aux autoroutes, elle a fortement grandi. À côté de **lotissements récents**, on trouve de vieilles maisons de village en pierre calcaire ou en brique. Depuis Aartselaar, nous y sommes en environ une heure.",
    ],
    bouw: {
      kop: "Lotissements sur limon et maisons de village en pierre",
      alineas: [
        "**Les nouvelles maisons de Rhisnes, Émines et Meux** reposent sur du limon, comme partout sur le plateau. Une fouille y reste donc longtemps mouillée, et **une maison qui se ferme contient beaucoup d'eau** provenant du béton, de la chape et du plafonnage. Si vous voulez que le poseur de sol vienne à temps, cette eau doit être activement retirée.",
        "**Les maisons plus anciennes des noyaux villageois** ont des murs épais sans coulisse. Lors d'une rénovation, on **démolit et renouvelle souvent le sol**, ou on pose une isolation contre la face intérieure du mur extérieur. Dans les deux cas, le mur doit être sec avant la finition. Sinon, l'humidité reste enfermée derrière l'isolation.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison neuve dans un lotissement du plateau** : 70 litres par jour, largement suffisant pour un rez-de-chaussée avec une chape fraîche." },
      { key: "ttk170", waarom: "Pour **une seule pièce d'une maison de village** que vous isolez par l'intérieur : un déshumidificateur compact de 50 litres par jour sur une prise standard." },
      { key: "radiaal2250", waarom: "**Pour une nouvelle chape** qui doit être sèche pour le poseur de sol : ce ventilateur radial souffle de l'air sec à ras de la surface." },
      { key: "teddh30", waarom: "Si votre construction neuve n'a pas encore de chauffage en hiver, ce chauffage de chantier porte la pièce à **la température à laquelle le déshumidificateur fonctionne bien**. Il fonctionne sur courant triphasé de 400 V." },
    ],
    levering: {
      kop: "Livraison à La Bruyère : tout près de l'autoroute",
      alinea:
        "La Bruyère se trouve **près de l'échangeur de l'E411 et de l'E42**, à environ une heure d'Aartselaar. Vous choisissez une date de livraison lors de la réservation, et nous convenons du moment de livraison **sur rendez-vous** avec vous. Sur un chantier neuf, signalez de préférence si l'allée est déjà stabilisée. Sinon, le technicien emporte un diable et cherche le chemin le plus court vers l'intérieur.",
    },
    afhalen: {
      kop: "Enlèvement : une heure aller, une heure retour",
      alinea:
        "Vous roulez **environ une heure** jusqu'à notre point d'enlèvement à Aartselaar. Un petit déshumidificateur qui tient debout dans votre voiture, vous pouvez venir le chercher vous-même. Un plus grand déshumidificateur, ou un chauffage avec un déshumidificateur, tient rarement dans une voiture. Dans ce cas, **la livraison est le choix pratique**.",
    },
    buren: ["namen-stad", "gembloers", "eghezee"],
    faq: [
      {
        q: "J'isole le mur extérieur de ma maison de village par l'intérieur. Doit-il d'abord sécher ?",
        a: "Oui, d'abord sécher. L'humidité enfermée derrière l'isolation ne peut plus s'échapper et provoque des moisissures ou un plafonnage endommagé. Faites mesurer le mur avant de le refermer. S'il est encore humide, un déshumidificateur avec un ventilateur le sèche dans les jours qui précèdent.",
      },
      {
        q: "Combien de temps une chape doit-elle sécher dans une maison neuve à Rhisnes ?",
        a: "Cela dépend de l'épaisseur, du type de chape et de la température. Le poseur de sol détermine quelle humidité résiduelle son revêtement admet. Avec un déshumidificateur et un ventilateur, cela va beaucoup plus vite que naturellement, et le technicien mesure à la reprise pour que vous ayez un chiffre.",
      },
      {
        q: "Combien coûte la location d'un déshumidificateur à La Bruyère ?",
        a: "Le prix de location par appareil et le prix de la livraison et de la reprise figurent sur notre page de prix et dans la réservation. Vous voyez le montant total avant de confirmer. Si vous hésitez sur les appareils nécessaires, appelez-nous ou écrivez-nous au préalable.",
      },
      {
        q: "Puis-je prolonger la location si la maison n'est pas encore sèche ?",
        a: "Bien sûr. Si la mesure lors de la reprise prévue montre que ce n'est pas encore assez sec, ou si vous le voyez venir vous-même, vous pouvez prolonger la location. Prévenez-nous de préférence quelques jours à l'avance, pour que nous adaptions le planning.",
      },
    ],
    realisaties: [],
  },
  mettet: {
    slug: "mettet",
    title: "Déshumidificateur à louer à Mettet et Saint-Gérard | Vernast",
    description:
      "Déshumidificateur de chantier à Mettet, Saint-Gérard ou Biesme : fermes et maisons de village sur le plateau de l'Entre-Sambre-et-Meuse. Livré et installé.",
    h1: "Location de déshumidificateur à Mettet",
    kicker: "Namur · le circuit sur le plateau",
    rit: { afstand: "environ 120 km", tijd: "près d'une heure et demie" },
    intro: [
      "Mettet se trouve **sur le plateau de l'Entre-Sambre-et-Meuse**, entre Fosses-la-Ville et Florennes. Hors de la région, on connaît surtout la commune pour son **circuit Jules Tacheny**, où se disputent des courses de motos et de voitures. Depuis Aartselaar, il nous faut près d'une heure et demie de route.",
      "C'est une commune rurale, avec des villages comme **Saint-Gérard**, et les vestiges de l'abbaye de Brogne, Biesme, Ermeton-sur-Biert, Furnaux, Graux et Oret. Sur le plateau ouvert, on cultive la terre, et cela se voit dans le bâti : de grandes fermes, des maisons de village en pierre et des constructions neuves dispersées.",
    ],
    bouw: {
      kop: "Grandes fermes et vent du large sur le plateau",
      alineas: [
        "Le projet typique ici, c'est **une ferme transformée en habitation ou en gîte** : des pièces hautes, des murs épais, une nouvelle dalle et beaucoup de plafonnage. Le volume est grand et les murs sont froids, si bien qu'un seul appareil suffit rarement. **Un déshumidificateur par zone**, avec un ventilateur qui pousse l'air à travers les longues pièces, permet de tenir le planning.",
        "Le plateau est haut et ouvert. En hiver, une maison non chauffée s'y refroidit plus vite que dans une vallée abritée. Pour **une construction neuve ou une rénovation pendant les mois froids**, cela signifie qu'il faut ajouter de la chaleur. Sinon, le déshumidificateur ne récupère que peu de litres, pendant que les travaux attendent.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une ferme ou un gîte transformé aux plafonds hauts** : 110 litres par jour, pour des volumes jusqu'à 600 m³." },
      { key: "teddh30", waarom: "**Sur le plateau ouvert, un chantier se refroidit vite.** Ce chauffage de 30 kW met une grande pièce à température pour que le déshumidificateur soit efficace, et fonctionne sur 400 V." },
      { key: "ttv4500", waarom: "Pour **une longue ferme aux pièces en enfilade** : avec 4 500 m³ d'air par heure, ce ventilateur pousse l'air sec jusque dans la pièce la plus éloignée." },
      { key: "revolution", waarom: "Pour **une chape ou une couche d'isolation qui a pris l'eau** : ce déshumidificateur à adsorption insuffle de l'air sec dans la structure par des gaines, même par temps froid." },
    ],
    levering: {
      kop: "Livraison à Mettet : le plateau au sud de la Sambre",
      alinea:
        "Nous passons **par le ring de Bruxelles et l'E42**, puis montons sur le plateau jusqu'à Mettet, soit près d'une heure et demie au total. Vous choisissez la date de livraison lors de la réservation ; l'heure, nous la fixons avec vous, car en Wallonie, nous livrons **sur rendez-vous**. Un week-end de course, il y a beaucoup de monde autour du circuit. Prévenez-nous si votre livraison tombe pendant une telle période.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : près d'une heure et demie dans chaque sens",
      alinea:
        "Mettet est à près d'une heure et demie de route de notre point d'enlèvement, et il vous faut encore rentrer. Pour une ferme transformée qui demande plusieurs appareils et un chauffage, le tout ne tient d'ailleurs pas dans une voiture. **La livraison s'impose ici** : le technicien installe tout et règle correctement l'ensemble.",
    },
    buren: ["fosses-la-ville", "gerpinnes", "florennes", "anhee"],
    faq: [
      {
        q: "Combien d'appareils me faut-il pour une ferme qui devient un gîte ?",
        a: "Cela dépend du volume, du nombre de pièces et de la quantité de chape et de plafonnage neufs. Pour une grande ferme, comptez généralement plusieurs déshumidificateurs et ventilateurs, répartis par zone. Le calculateur compose le pack à partir de vos dimensions.",
      },
      {
        q: "Un déshumidificateur fonctionne-t-il en hiver dans une ferme non chauffée sur le plateau ?",
        a: "Sans chaleur, il fonctionne mal. Sous 15 °C, un déshumidificateur à condensation retire peu d'eau de l'air. Un chauffage de chantier met la pièce à température, et le déshumidificateur retrouve alors toute sa capacité. Tenez compte du fait qu'un chauffage de 30 kW demande du courant triphasé.",
      },
      {
        q: "Que faire si l'isolation sous ma chape a pris l'eau ?",
        a: "Dans ce cas, un déshumidificateur à condensation ne sèche que la surface, et l'eau reste sous la chape. Un déshumidificateur à adsorption insuffle de l'air sec dans la structure du sol par des gaines. Seule une mesure sur place permet de dire si cela suffit ou si le sol doit être démoli.",
      },
      {
        q: "Livrez-vous à Saint-Gérard et à Ermeton-sur-Biert ?",
        a: "Oui, toutes les sections de Mettet font partie de notre zone de livraison, y compris les fermes isolées hors des villages. Indiquez l'adresse et l'accès lors de la réservation, aussi quand la ferme se trouve au bout d'une longue allée. Nous convenons ensuite avec vous de l'heure de livraison.",
      },
    ],
    realisaties: [],
  },
  ohey: {
    slug: "ohey",
    title: "Ohey : location de déshumidificateur de chantier | Vernast",
    description:
      "Location de déshumidificateur à Ohey, Haillot ou Évelette : fermes et maisons en pierre sur le plateau du Condroz, aux murs épais qui sèchent lentement.",
    h1: "Location de déshumidificateur à Ohey",
    kicker: "Namur · le Condroz rural au-dessus de la Meuse",
    rit: { afstand: "environ 115 km", tijd: "près d'une heure et demie" },
    intro: [
      "Ohey se trouve **sur le plateau du Condroz, au sud d'Andenne**. La commune se compose de villages dispersés : Haillot, Évelette, Goesnes, Jallet, Perwez et Ohey même. Le paysage alterne **longues crêtes et vallons**, avec des champs, des prairies et des lisières de bois.",
      "Les villages sont bâtis en **grès et en calcaire de la région**, souvent avec des fermes autour d'une cour. Qui rénove ici travaille donc le plus souvent sur une façade en pierre massive, et rarement sur un mur creux. Depuis Aartselaar, il nous faut **près d'une heure et demie** pour rejoindre Ohey.",
    ],
    bouw: {
      kop: "Fermes en pierre naturelle transformées en habitation",
      alineas: [
        "**Une ferme ou une grange transformée en habitation** reçoit d'un coup une nouvelle dalle, une chape, un plafonnage intérieur et souvent un mur intérieur contre l'ancienne façade. Cela apporte beaucoup d'eau dans un volume grand et haut, et les murs épais en pierre gardent la pièce fraîche. **Un grand appareil avec un ventilateur** y fonctionne mieux que trois petits.",
        "Dans une maison de village plus ancienne, l'humidité vient souvent de deux sources : la rénovation elle-même et **le pied du mur**, où aucune barrière d'étanchéité n'a jamais été posée. Après avoir décapé l'ancien enduit, faites d'abord mesurer. Un déshumidificateur élimine l'humidité de construction, mais l'humidité ascensionnelle demande ensuite sa propre solution.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une grange ou une étable transformée** : 110 litres par jour et une portée jusqu'à 600 m³, assez pour un grand volume avec une chape et un plafonnage neufs." },
      { key: "ttv4500", waarom: "Dans une longue ferme à charpente apparente, l'air humide stagne dans les coins. **Ce ventilateur déplace 4 500 m³ d'air par heure** et maintient toute la pièce en mouvement." },
      { key: "teddh30", waarom: "**La pierre naturelle retient le froid.** Sur un chantier d'hiver dans une ferme non chauffée, ce chauffage de 30 kW porte la pièce à une température où le déshumidificateur est efficace. Il fonctionne sur courant triphasé (400 V)." },
      { key: "ttk350", waarom: "Pour une **maison de village à Haillot ou Évelette** avec un nouveau plafonnage au rez-de-chaussée : 70 litres par jour, pour des volumes jusqu'à 400 m³." },
    ],
    levering: {
      kop: "Livraison à Ohey : par Namur ou Andenne jusqu'au plateau",
      alinea:
        "Nous prenons **l'E411 jusqu'à Namur** et montons sur le plateau par Andenne, soit près d'une heure et demie au total. Vous choisissez une date de livraison lors de la réservation, et nous fixons l'heure ensemble : en Wallonie, nous livrons **sur rendez-vous**. Si votre ferme se trouve sur un chemin de campagne ou au bout d'une allée étroite, mentionnez-le, pour que le technicien sache où il peut faire demi-tour.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : un long trajet pour un seul appareil",
      alinea:
        "Depuis Ohey, vous roulez près d'une heure et demie jusqu'à notre point d'enlèvement, et autant pour revenir. Pour une ferme transformée qui demande plusieurs appareils, le tout ne tient d'ailleurs pas dans une voiture. **La livraison est ici plus logique** : le technicien apporte tout et règle immédiatement l'installation.",
    },
    buren: ["andenne", "gesves", "havelange"],
    faq: [
      {
        q: "Combien d'appareils me faut-il pour une ferme condruzienne transformée ?",
        a: "Cela dépend du volume, de l'épaisseur de la chape et de la quantité de plafonnage neuf. Une grande grange au faîte élevé demande souvent un grand appareil et un ventilateur par zone. Le calculateur fait le compte à partir de vos dimensions, et le technicien ajuste là où c'est nécessaire lors de l'installation.",
      },
      {
        q: "Ma façade en pierre reste humide après la rénovation. Est-ce de l'humidité de construction ?",
        a: "En partie, peut-être. Le nouveau plafonnage et le mortier apportent de l'eau qu'un déshumidificateur élimine. Si l'humidité se concentre surtout dans le demi-mètre inférieur et revient sans cesse, il s'agit probablement d'humidité ascensionnelle. Une mesure d'humidité au démarrage permet de faire la différence.",
      },
      {
        q: "La camionnette peut-elle rouler jusqu'à une ferme isolée ?",
        a: "En général oui, même sur un chemin de campagne revêtu. Si l'accès n'est pas revêtu ou est très étroit, signalez-le lors de la réservation. Nous planifions alors la livraison de façon à ce que le technicien ne doive pas descendre une longue allée en marche arrière, et il sait jusqu'où il doit rouler les appareils.",
      },
      {
        q: "Sécher en hiver dans une maison non chauffée sur le plateau, cela a-t-il du sens ?",
        a: "Oui, à condition d'ajouter de la chaleur. Sous 15 °C, l'air absorbe peu d'humidité et le rendement d'un déshumidificateur à condensation chute fortement. Un chauffage de chantier met la pièce à température, et le déshumidificateur retire alors bien de l'air l'humidité libérée.",
      },
    ],
    realisaties: [],
  },
  profondeville: {
    slug: "profondeville",
    title: "Location de déshumidificateur à Profondeville | Vernast",
    description:
      "Location de déshumidificateur à Profondeville, Lustin ou Bois-de-Villers : maisons au bord de la Meuse, contre le rocher et neuves sur le plateau. Installé.",
    h1: "Location de déshumidificateur à Profondeville",
    kicker: "Namur · la boucle de la Meuse sous les rochers",
    rit: { afstand: "environ 105 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Profondeville se trouve **au bord de la Meuse, juste en amont de Namur**, dans une boucle où le fleuve coule entre des rives abruptes. À Lustin, les **rochers de Frênes** se dressent au-dessus de l'eau. Le long de la rive s'alignent des villas et des maisons plus anciennes, de l'époque où la vallée de la Meuse était une région de villégiature prisée.",
      "La commune comprend aussi Lustin, Rivière, Arbre, Lesve et Bois-de-Villers, en partie sur le versant et en partie sur le plateau. Cela donne **trois sortes d'habitations** : sur le quai, contre le rocher et dans un lotissement sur le plateau. Depuis Aartselaar, il nous faut un peu plus d'une heure pour rejoindre Profondeville.",
    ],
    bouw: {
      kop: "Au bord de l'eau, contre le rocher, sur le plateau",
      alineas: [
        "**Côté Meuse**, le rez-de-chaussée est bas et la cave proche du niveau du fleuve. Après une crue ou lors d'une rénovation avec un nouveau sol, cette cave doit sécher complètement. Un grand appareil et un ventilateur au sol en retirent la plus grande partie de l'eau, mais **la nappe phréatique, elle, reste**. Faites donc mesurer si les murs reçoivent encore de l'humidité de l'extérieur.",
        "Les maisons contre le rocher ont souvent une façade arrière dans le versant, et les pièces de ce côté sont froides et moites. **Sur le plateau autour de Bois-de-Villers et Lesve**, il s'agit plutôt de constructions neuves et d'extensions, avec une chape et un plafonnage sur un planning serré. Chaque situation demande un autre pack.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une cave côté Meuse après une crue** : 110 litres par jour, pour des volumes jusqu'à 600 m³. L'humidité disparaît ainsi avant de s'installer dans les murs." },
      { key: "ttv4500", waarom: "Dans une **villa aux plafonds hauts au bord de l'eau**, l'air reste sinon immobile. Ce ventilateur déplace 4 500 m³ par heure et maintient toute la pièce en mouvement." },
      { key: "teddh20", waarom: "**Pour une pièce froide côté rocher.** Ce chauffage de 20 kW met une pièce à température, pour que le déshumidificateur puisse faire son travail. Il fonctionne sur courant triphasé." },
      { key: "ttk350", waarom: "Pour **une construction neuve ou une extension sur le plateau de Bois-de-Villers** : 70 litres par jour pour un rez-de-chaussée avec une chape fraîche." },
    ],
    levering: {
      kop: "Livraison à Profondeville : par Namur, le long de la Meuse",
      alinea:
        "Nous prenons **l'E411 jusqu'à Namur**, puis suivons la Meuse jusqu'à Profondeville, soit un peu plus d'une heure au total. Vous choisissez la date de livraison lors de la réservation ; l'heure, nous la fixons ensuite par téléphone, car en Wallonie, nous livrons **sur rendez-vous**. La route le long du fleuve est étroite et chargée en saison. Indiquez-nous si la camionnette peut s'arrêter devant la porte.",
    },
    afhalen: {
      kop: "Venir chercher à Aartselaar depuis la vallée de la Meuse",
      alinea:
        "Jusqu'à notre point d'enlèvement, vous roulez un peu plus d'une heure, et autant pour revenir, si la circulation autour de Bruxelles le permet. Un déshumidificateur doit voyager debout, et pour une cave après une crue, il en faut généralement plus d'un. **La livraison vous épargne ce trajet**, et le technicien règle immédiatement l'installation.",
    },
    buren: ["namen-stad", "assesse", "yvoir", "floreffe", "fosses-la-ville"],
    faq: [
      {
        q: "Ma cave au bord de la Meuse a été inondée. Quand puis-je y installer le déshumidificateur ?",
        a: "Dès que l'eau stagnante a disparu et qu'il n'en entre plus de nouvelle. Pompez d'abord, enlevez la boue et commencez seulement ensuite à sécher ; sinon, vous séchez une cave qui se remplit à nouveau. Une mesure montre si les murs reçoivent encore de l'eau de l'extérieur.",
      },
      {
        q: "Le technicien peut-il apporter un appareil jusque dans une villa à flanc de coteau ?",
        a: "En général oui, même s'il y a des escaliers dans le jardin. Indiquez lors de la réservation combien de marches il y a et quelle est la largeur du passage. Le technicien sait alors à l'avance ce qui l'attend et apporte le bon matériel pour déplacer les appareils.",
      },
      {
        q: "Pourquoi la pièce côté rocher reste-t-elle moite, même après la rénovation ?",
        a: "Parce que ce mur est contre le versant et reste froid. Un déshumidificateur élimine l'humidité de construction du nouveau plafonnage, mais l'eau qui s'infiltre par le rocher revient. Une mesure au début et à la fin montre quelle part de l'humidité a durablement baissé.",
      },
      {
        q: "Livrez-vous aussi à Lustin, Rivière et Lesve ?",
        a: "Oui, toutes les sections de Profondeville font partie de notre zone de livraison, au bord du fleuve comme sur le plateau. Indiquez l'adresse complète et l'accès lors de la réservation. Nous convenons ensuite ensemble de l'heure de livraison à la date choisie.",
      },
    ],
    realisaties: [],
  },
  sambreville: {
    slug: "sambreville",
    title: "Déshumidificateur à Sambreville et Tamines | Vernast",
    description:
      "Location de déshumidificateur à Sambreville, Auvelais, Tamines ou Velaine : maisons ouvrières en brique le long de la Sambre, caves près de l'eau. Livré.",
    h1: "Location de déshumidificateur à Sambreville",
    kicker: "Province de Namur · Auvelais, Tamines et la Basse-Sambre",
    rit: { afstand: "environ 100 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Sambreville est **une commune fusionnée au bord de la Sambre**, entre Charleroi et Namur. Le nom est récent, les villages sont anciens : **Auvelais, Tamines, Arsimont, Falisolle, Keumiée, Moignelée et Velaine-sur-Sambre**. Ensemble, ils forment le cœur de la région qu'on appelle la Basse-Sambre.",
      "Cette région a longtemps vécu **du charbon, du verre et du métal**. **Les longues rangées de maisons ouvrières** de Tamines et d'Auvelais en témoignent. Aujourd'hui, on y rénove beaucoup, et qui achète une vieille maison mitoyenne commence souvent par les sols et le plafonnage. Depuis Aartselaar, il nous faut un peu plus d'une heure pour y arriver.",
    ],
    bouw: {
      kop: "Maisons ouvrières en brique et caves au bord de la rivière",
      alineas: [
        "**Les maisons mitoyennes de Tamines et d'Auvelais** sont construites en brique, souvent **sans mur creux et sans barrière d'étanchéité**, avec un escalier étroit et une cave sous la pièce avant. Une telle maison est souvent rénovée d'un seul coup : nouvelle chape, nouveau plafonnage, nouvelle salle de bains. Toute cette eau doit partir avant que le sol et la peinture puissent être posés.",
        "**Près de la Sambre**, le terrain est bas et la nappe phréatique haute. Les caves et les rez-de-chaussée des maisons au bord de l'eau restent donc frais et humides, surtout après un hiver pluvieux ou une crue. **Le technicien mesure lors de l'installation** à quel point les murs sont mouillés, pour que vous sachiez d'où vous partez.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**Pour une maison mitoyenne étroite avec un escalier raide** : ce déshumidificateur compact de 50 litres par jour convient jusqu'à environ 250 m³." },
      { key: "ttk350", waarom: "Pour **une maison mitoyenne rénovée d'un seul coup** : 70 litres par jour, assez pour un rez-de-chaussée avec une chape fraîche." },
      { key: "teddh30", waarom: "**Pour la cave sous la pièce avant**, qui reste froide près de la Sambre. Un déshumidificateur à condensation ne tourne à pleine puissance qu'au-dessus de 15 °C. Ce chauffage demande du courant triphasé (400 V)." },
      { key: "ttv4500", waarom: "Dans une maison mitoyenne étroite et profonde, l'air sec ne circule pas tout seul de l'avant vers l'arrière. **Ce ventilateur s'en charge.**" },
    ],
    levering: {
      kop: "Livraison à Sambreville : la camionnette devant la maison",
      alinea:
        "Depuis Aartselaar, il faut compter **un peu plus d'une heure de route**, par le ring de Bruxelles et l'E411 ou par Charleroi. Vous fixez la date de livraison lors de la réservation ; le moment précis, nous le convenons **sur rendez-vous**. Dans une rue de maisons mitoyennes, signalez à l'avance si la camionnette peut s'arrêter brièvement devant la porte. Le technicien porte les appareils à l'intérieur et les installe par étage.",
    },
    afhalen: {
      kop: "Venir chercher à Aartselaar depuis Sambreville : un long trajet",
      alinea:
        "Notre point d'enlèvement est à **un peu plus d'une heure de route**, et ce trajet aller-retour, vous le faites deux fois par période de location. C'est rarement rentable. Avec la livraison, vous recevez en outre **une mesure au démarrage et à l'enlèvement**, et dans une vieille maison en brique, elle en dit long.",
    },
    buren: ["jemeppe-sur-sambre", "fosses-la-ville", "fleurus", "aiseau-presles"],
    faq: [
      {
        q: "J'ai acheté une vieille maison mitoyenne à Tamines. Par où commencer le séchage ?",
        a: "Par une mesure. Dans une vieille maison sans barrière d'étanchéité, vous voulez savoir combien d'humidité les murs contenaient déjà avant le début de la rénovation. Ensuite, vous séchez par phase : d'abord après la chape, puis après le plafonnage. Le technicien mesure à chaque installation et à chaque enlèvement.",
      },
      {
        q: "Un déshumidificateur passe-t-il dans l'escalier étroit d'une maison ouvrière ?",
        a: "Le déshumidificateur compact de 50 litres par jour est conçu pour cela. Pour celui de 70 litres, il vous faut un peu plus de largeur. Indiquez lors de la réservation qu'il s'agit d'un escalier étroit ou raide, et nous choisirons l'appareil en conséquence.",
      },
      {
        q: "Comment sécher une cave froide près de la Sambre ?",
        a: "Avec un déshumidificateur à condensation associé à un chauffage de chantier électrique, ou avec un déshumidificateur à adsorption qui n'a pas besoin de chaleur. Sous 15 °C, un déshumidificateur à condensation fonctionne mal. Gardez la porte de la cave fermée, pour que l'appareil ne doive pas traiter l'air de toute la maison.",
      },
      {
        q: "Qui me montre comment utiliser l'appareil ?",
        a: "Le technicien, lors de l'installation : il vous montre comment commander l'appareil et vider le réservoir. Si votre entrepreneur travaille sur le chantier, faites en sorte qu'il soit présent lui aussi. Pour toute question sur l'appareil, n'hésitez pas à nous écrire ou à nous appeler.",
      },
    ],
    realisaties: [],
  },
  sombreffe: {
    slug: "sombreffe",
    title: "Sombreffe et Ligny : déshumidificateur à louer | Vernast",
    description:
      "Location de déshumidificateur à Sombreffe, Ligny, Tongrinne ou Boignée : fermes rénovées et maisons neuves sur le plateau limoneux entre Gembloux et Fleurus.",
    h1: "Location de déshumidificateur à Sombreffe",
    kicker: "Province de Namur · Ligny et le plateau près de Fleurus",
    rit: { afstand: "environ 85 km", tijd: "environ une heure" },
    intro: [
      "Sombreffe se trouve **à l'ouest de la province de Namur**, à la limite du Hainaut, entre Gembloux et Fleurus. La commune compte quatre villages : **Sombreffe, Ligny, Tongrinne et Boignée**. Ligny est connu pour la bataille de 1815, deux jours avant Waterloo.",
      "Le paysage est fait de **terres agricoles ouvertes sur limon**, avec de grandes fermes et des villages qui ont grandi le long des chaussées. Sombreffe possède aussi **un château**. Charleroi et Namur sont proches, et c'est pourquoi de nouvelles maisons apparaissent en bordure des villages. Une camionnette partie d'Aartselaar y arrive en environ une heure.",
    ],
    bouw: {
      kop: "Fermes le long de la chaussée et maisons neuves en bordure de village",
      alineas: [
        "**À Ligny et Tongrinne** se dressent de grandes fermes et d'anciennes maisons de village, souvent en brique. Lors d'une transformation, on y pose **de nouveaux sols, une nouvelle salle de bains et du plafonnage** sur des murs qui sont depuis longtemps sans barrière d'étanchéité. L'humidité de construction s'ajoute alors à celle que le mur contenait déjà. Cela sèche plus lentement que ne le prévoit le planning de l'entrepreneur.",
        "**En bordure des villages**, de nouvelles maisons se construisent sur limon. Après une période humide, **le sol reste saturé**, et une maison qu'on ferme à ce moment-là garde à l'intérieur l'eau de la chape et du plafonnage. Un déshumidificateur de la bonne taille retire cette eau avant le début des finitions, à condition que les fenêtres restent fermées.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison neuve en bordure de village à Sombreffe** : 70 litres par jour, adapté jusqu'à environ 400 m³." },
      { key: "ttk650", waarom: "Pour **une grande ferme à Ligny ou Tongrinne** rénovée d'un seul coup : plusieurs pièces et beaucoup de murs mouillés, donc 110 litres par jour." },
      { key: "ttv4500", waarom: "Dans une ferme aux pièces en enfilade, **ce ventilateur répartit l'air sec** sur tout le rez-de-chaussée." },
      { key: "ttk170", waarom: "**Pour une salle de bains ou une seule pièce** rénovée à part, pendant que vous continuez à habiter le reste de la maison." },
    ],
    levering: {
      kop: "Livraison à Sombreffe : par l'E411 et Gembloux",
      alinea:
        "Depuis Aartselaar, il nous faut **environ une heure**, par le ring de Bruxelles, l'E411 et Gembloux. Vous choisissez la date de livraison lors de la réservation ; nous venons **sur rendez-vous**. Si votre ferme a une cour intérieure, indiquez-nous par quel côté le technicien entre. Il ne doit ainsi pas porter les appareils à travers toute la cour.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : environ une heure de route",
      alinea:
        "Notre point d'enlèvement est à **environ une heure de route** de Sombreffe. Si vous devez de toute façon passer près d'Anvers, vous pouvez emporter un petit déshumidificateur. Tenez compte du fait qu'**un déshumidificateur doit être transporté debout**. Pour un appareil plus grand, il vous faut une camionnette ou un grand break.",
    },
    buren: ["gembloers", "jemeppe-sur-sambre", "fleurus"],
    faq: [
      {
        q: "Ma ferme à Ligny n'a pas de barrière d'étanchéité. Un déshumidificateur aide-t-il quand même ?",
        a: "Pour l'humidité de construction de la rénovation, oui : l'appareil la retire de la pièce. L'humidité ascensionnelle venant du sol, il ne la résout pas durablement, car elle revient après le séchage. Lors de l'installation, le technicien mesure si l'humidité est plus élevée en bas du mur qu'en haut.",
      },
      {
        q: "Pouvez-vous livrer à Boignée et Tongrinne ?",
        a: "Les quatre villages de Sombreffe font partie de notre zone de livraison : Sombreffe, Ligny, Tongrinne et Boignée. Indiquez l'adresse complète lors de la réservation. Pour une ferme hors du centre du village, une courte description de l'accès est utile.",
      },
      {
        q: "Le déshumidificateur peut-il rester dans une maison habitée pendant la rénovation de la salle de bains ?",
        a: "Pas de problème : le plus petit déshumidificateur, 50 litres par jour, est compact et se contente d'une prise standard. Placez-le dans la salle de bains et gardez porte et fenêtre fermées. Le nouveau plafonnage ou la colle à carrelage sèche ainsi sans que le reste de la maison devienne humide.",
      },
      {
        q: "Dois-je ouvrir les fenêtres pendant que le déshumidificateur tourne ?",
        a: "Non. Un déshumidificateur travaille dans une pièce fermée. Des fenêtres ouvertes laissent entrer l'air humide de l'extérieur, et l'appareil sèche alors l'air extérieur au lieu de vos murs. Aérer brièvement quand vous entrez dans la pièce ne pose pas de problème.",
      },
    ],
    realisaties: [],
  },
  eghezee: {
    slug: "eghezee",
    title: "Location de déshumidificateur à Éghezée et Leuze | Vernast",
    description:
      "Déshumidificateur à Éghezée : fermes en carré dans la plaine céréalière de Hesbaye, maisons neuves à Leuze et Longchamps, caves près de la Mehaigne. Installé.",
    h1: "Location de déshumidificateur à Éghezée",
    kicker: "Province de Namur · terres à blé le long de l'E411",
    rit: { afstand: "environ 85 km", tijd: "environ une heure" },
    intro: [
      "Éghezée se trouve **dans les terres à blé ouvertes de la Hesbaye**, au nord-est de Namur. Cette vaste commune rurale compte toute une série de villages, comme **Leuze, Longchamps, Aische-en-Refail, Taviers et Noville-sur-Mehaigne**. La Mehaigne, un affluent de la Meuse, traverse la commune.",
      "Le paysage se compose de **grands champs de céréales et de betteraves sucrières** et de **fermes en carré** : une cour fermée avec l'habitation, les étables et la grange autour d'une cour intérieure. L'E411 traverse la commune, et de nouvelles maisons sont venues s'ajouter le long de cet axe. Depuis Aartselaar, il nous faut environ une heure pour arriver ici.",
    ],
    bouw: {
      kop: "Transformer une ferme en carré et construire du neuf dans les villages",
      alineas: [
        "**Beaucoup de projets ici sont des transformations de fermes en carré** : la grange ou les étables deviennent une habitation, un cabinet ou un logement de vacances. Les murs font **un demi-mètre d'épaisseur**, sans mur creux ni barrière d'étanchéité, et les sols reposent directement sur la terre. Avec une nouvelle chape et un nouveau plafonnage, beaucoup d'eau arrive dans un espace qui n'a jamais été chauffé.",
        "**Dans les villages le long de l'E411**, il s'agit plus souvent de constructions neuves sur limon, et ce sol retient l'eau. **Dans la vallée de la Mehaigne**, les maisons plus anciennes sont plus basses et plus proches de l'eau. Lors d'une rénovation, vous y êtes souvent confronté à une cave humide ou à un rez-de-chaussée froid.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une grange ou une étable de ferme en carré** qui devient une habitation : des pièces hautes et grandes, où 110 litres par jour font la différence." },
      { key: "revolution", waarom: "**Pour une cave de ferme non chauffée** ou une étable en hiver : ce déshumidificateur à adsorption absorbe l'humidité même dans une pièce froide." },
      { key: "ttk350", waarom: "Pour une maison neuve à Leuze ou Longchamps : 70 litres par jour, largement suffisant pour un rez-de-chaussée avec une chape fraîche." },
      { key: "radiaal2250", waarom: "Dans une longue étable, une chape neuve sèche le plus lentement sur les bords. **Ce ventilateur radial souffle de manière ciblée sur le sol** jusque dans les coins." },
    ],
    levering: {
      kop: "Livraison à Éghezée : de l'E411 jusque dans la cour",
      alinea:
        "Éghezée a **sa propre sortie sur l'E411**. Depuis Aartselaar, le trajet dure environ une heure. Vous choisissez une date de livraison lors de la réservation, et nous livrons **sur rendez-vous**. Si votre ferme a une cour intérieure, indiquez par quel porche la camionnette peut y entrer. Le technicien installe les appareils par pièce et explique où doit aller l'eau de condensation.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : seulement si vous passez par là",
      alinea:
        "Depuis Éghezée, vous roulez **environ une heure** jusqu'à notre point d'enlèvement, et autant pour revenir. Pour un seul appareil, c'est possible si vous devez de toute façon aller vers Anvers. Pour une ferme avec plusieurs zones de séchage, mieux vaut la livraison : **le technicien mesure au démarrage**, et cette mesure, vous en avez besoin pour votre entrepreneur.",
    },
    buren: ["gembloers", "fernelmont", "la-bruyere", "perwijs", "ramillies"],
    faq: [
      {
        q: "Comment sécher une grange que nous transformons en habitation ?",
        a: "Gardez les fenêtres fermées, placez un grand déshumidificateur par pièce et laissez un ventilateur maintenir l'air en mouvement. Un vieux mur de grange sans barrière d'étanchéité libère l'eau lentement, comptez donc plutôt en semaines qu'en jours. Le technicien mesure au démarrage, pour que vous puissiez suivre les progrès.",
      },
      {
        q: "Un déshumidificateur fonctionne-t-il en hiver dans une ferme non chauffée ?",
        a: "Sous 15 °C, un déshumidificateur à condensation perd beaucoup de rendement. Dans une étable ou une cave froide, choisissez donc un déshumidificateur à adsorption, ou placez un chauffage de chantier électrique à côté du déshumidificateur à condensation. Indiquez lors de la réservation si la pièce est chauffée.",
      },
      {
        q: "Livrez-vous aussi dans les petits villages comme Taviers ou Branchon ?",
        a: "Là aussi, nous livrons. Toute la commune d'Éghezée fait partie de notre zone de livraison, y compris les petits villages de la vallée de la Mehaigne. Indiquez l'adresse complète et précisez s'il s'agit d'une ferme isolée : le planning tiendra alors compte des derniers kilomètres sur des chemins agricoles.",
      },
      {
        q: "Quelle puissance consomme un déshumidificateur dans une ferme à l'installation ancienne ?",
        a: "Le déshumidificateur de 70 litres par jour demande environ 1,1 kW, le grand de 110 litres environ 1,4 kW. Un chauffage de chantier de 20 ou 30 kW demande du courant triphasé (400 V). Répartissez plusieurs appareils sur différents circuits ; le technicien le vérifie lors de l'installation.",
      },
    ],
    realisaties: [],
  },
  anhee: {
    slug: "anhee",
    title: "Anhée et la Molignée : déshumidificateur à louer | Vernast",
    description:
      "Location de déshumidificateur à Anhée, Annevoie, Denée ou Warnant : maisons au bord de la Meuse et dans la vallée de la Molignée sous Maredsous. Livré.",
    h1: "Location de déshumidificateur à Anhée",
    kicker: "Namur · la vallée de la Molignée",
    rit: { afstand: "environ 110 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Anhée se trouve **sur la rive gauche de la Meuse**, là où la Molignée se jette dans la Meuse. Cette petite rivière serpente vers l'intérieur des terres dans une vallée boisée, par Warnant et Sosoye. Haut au-dessus de la vallée, à Denée, se dresse **l'abbaye de Maredsous**.",
      "Annevoie-Rouillon, connu pour ses jardins, Bioul et Haut-le-Wastia font aussi partie de la commune. Vous y trouvez des villages en calcaire gris, des fermes dispersées et des maisons contre le versant. Depuis Aartselaar, il nous faut un peu plus d'une heure pour rejoindre Anhée.",
    ],
    bouw: {
      kop: "Maisons de village dans la vallée, maisons dans le versant",
      alineas: [
        "Dans l'étroite vallée de la Molignée, les maisons sont proches de l'eau et souvent à moitié adossées au versant. Si l'arrière du rez-de-chaussée est enterré, **l'humidité traverse le mur** dès que le sol est saturé. Après une rénovation, vous voulez savoir s'il s'agit encore d'humidité de construction. Le technicien mesure donc séparément le mur côté versant et celui côté rue.",
        "Sur le plateau autour de Bioul et Denée se trouvent des maisons plus grandes et des fermes transformées aux murs épais en pierre. C'est là que **la nouvelle chape** contient le plus d'eau. Placez un grand appareil dans la pièce et un ventilateur qui souffle au ras du sol. Le sol atteint ainsi la valeur que demande le poseur de sol.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison de village à Warnant ou Sosoye** : 70 litres par jour, assez pour une maison de village jusqu'à 400 m³." },
      { key: "radiaal2250", waarom: "Souffle au ras du sol et de manière ciblée sur **une chape fraîche dans une ferme transformée**, la partie du chantier qui retient le plus d'eau." },
      { key: "ttk650", waarom: "Pour un espace de vie ouvert ou une ferme entièrement mise à nu : 110 litres par jour pour des volumes jusqu'à 600 m³." },
      { key: "teddh20", waarom: "Réchauffe en hiver **une maison non chauffée dans la vallée fraîche** au-dessus de 15 °C, pour qu'un déshumidificateur à condensation fonctionne bien. Fonctionne sur 400 V." },
    ],
    levering: {
      kop: "Livraison à Anhée : par Namur et la rive gauche de la Meuse",
      alinea:
        "Nous prenons l'autoroute jusqu'à Namur, puis suivons la Meuse sur la rive gauche. Vous choisissez **une date de livraison** lors de la réservation ; l'heure de livraison, nous la convenons avec vous. Dans la vallée de la Molignée, les routes sont sinueuses et étroites. Indiquez-nous si la camionnette peut aller jusqu'à votre porte. Le technicien pose le tuyau d'évacuation et règle l'hygrostat avant de repartir.",
    },
    afhalen: {
      kop: "Venir chercher depuis Anhée : deux fois un long trajet",
      alinea:
        "Jusqu'à notre point d'enlèvement à Aartselaar, vous roulez un peu plus d'une heure, et ce trajet, vous le faites deux fois par période de location. Un déshumidificateur doit en outre être transporté **debout**. Pour un seul appareil, l'enlèvement peut convenir. Pour toute une maison, mieux vaut la livraison.",
    },
    buren: ["yvoir", "dinant", "onhaye", "mettet", "profondeville"],
    faq: [
      {
        q: "Ma maison dans la vallée de la Molignée est adossée au versant. Que peut y faire un déshumidificateur ?",
        a: "Il élimine l'humidité de construction d'une rénovation. L'humidité qui traverse le mur depuis le versant après chaque période de pluie revient dès que l'appareil est parti. Lors de l'installation, le technicien mesure les deux côtés, pour que vous sachiez où vous en êtes.",
      },
      {
        q: "Comment sécher une nouvelle chape dans une ferme transformée près de Bioul ?",
        a: "Gardez les fenêtres fermées, placez un grand appareil dans la pièce et laissez un ventilateur radial souffler au ras du sol. Le poseur de sol détermine le taux d'humidité résiduelle dont il a besoin. À l'enlèvement, le technicien mesure à nouveau, pour que vous ayez un chiffre à transmettre.",
      },
      {
        q: "Un déshumidificateur fonctionne-t-il dans une maison froide et non chauffée en hiver ?",
        a: "Un déshumidificateur à condensation a besoin de plus de 15 °C pour bien fonctionner. Dans une maison froide, nous ajoutons donc un chauffage de chantier électrique, qui réchauffe d'abord la pièce. Dans une cave, nous préférons un déshumidificateur à adsorption, qui continue de fonctionner à basse température.",
      },
      {
        q: "Livrez-vous à Annevoie-Rouillon et à Haut-le-Wastia ?",
        a: "Oui, nous allons dans toutes les sections d'Anhée, y compris dans les fermes dispersées hors des villages. Si votre adresse se trouve au bout d'une allée non revêtue ou d'un chemin de campagne étroit, mentionnez-le lors de la réservation. Le technicien sait ainsi à l'avance où il peut décharger.",
      },
    ],
    realisaties: [],
  },
  beauraing: {
    slug: "beauraing",
    title: "Beauraing : déshumidificateur de chantier à louer | Vernast",
    description:
      "Location de déshumidificateur à Beauraing, Pondrôme ou Winenne : maisons autour du sanctuaire, fermes en pierre et constructions neuves en Famenne. Installé.",
    h1: "Location de déshumidificateur à Beauraing",
    kicker: "Namur · lieu de pèlerinage en Famenne",
    rit: { afstand: "environ 135 km", tijd: "plus d'une heure et demie" },
    intro: [
      "Beauraing est **un lieu de pèlerinage marial bien connu**. Depuis les apparitions des années trente, des pèlerins viennent chaque année au sanctuaire du centre. Autour de ce noyau s'étend une petite ville avec des commerces, des écoles et des rues résidentielles.",
      "Au-delà, la commune est vaste et rurale, avec des villages comme Pondrôme, Winenne, Felenne, Focant et Vonêche. Le paysage est celui de **la Famenne** : prairies vallonnées et bois, avec du calcaire et du schiste dans les anciens bâtiments. Depuis Aartselaar, il nous faut plus d'une heure et demie de route.",
    ],
    bouw: {
      kop: "Maisons de ville autour du sanctuaire, fermes dans les villages",
      alineas: [
        "Dans le centre, on rénove des maisons anciennes et des commerces, souvent pour en faire un appartement au-dessus d'un magasin. Il y a **un nouveau plafonnage par étage** et parfois un nouveau sol, alors qu'on habite ou travaille en bas ou à côté. Un appareil compact par pièce y convient le mieux.",
        "Dans les villages se trouvent des fermes et des maisons de village en pierre, et on construit du neuf sur le **sol lourd de la Famenne**, qui laisse mal passer l'eau. Une fouille ou une cave en construction reste donc longtemps mouillée. Un grand appareil et un ventilateur sur la chape fraîche permettent de tenir le planning du poseur de sol.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**Pour un appartement au-dessus d'un magasin dans le centre** : compact, 50 litres par jour et une consommation de 0,75 kW." },
      { key: "ttk650", waarom: "Pour **une construction neuve ou une ferme transformée dans les villages** : 110 litres par jour pour des volumes jusqu'à 600 m³." },
      { key: "radiaal2250", waarom: "Souffle de manière ciblée sur une chape fraîche, qui contient le plus d'eau dans une construction neuve sur le sol humide de la Famenne." },
      { key: "revolution", waarom: "Pour **une cave dans une vieille maison en pierre** qui reste fraîche toute l'année. Là, un déshumidificateur à adsorption retire plus d'humidité qu'un appareil à condensation." },
    ],
    levering: {
      kop: "Livraison à Beauraing : notre trajet vers la Famenne",
      alinea:
        "Nous passons par Namur et continuons vers le sud, soit plus d'une heure et demie au total. Vous choisissez **une date de livraison** lors de la réservation, et l'heure, nous la convenons avec vous. Nous pouvons ainsi combiner la livraison avec d'autres adresses de la région. Autour du sanctuaire, les rues sont pleines les jours d'affluence. Indiquez-nous donc où la camionnette peut décharger.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : trop loin depuis Beauraing",
      alinea:
        "Aller-retour jusqu'à notre point d'enlèvement, vous roulez plus de trois heures, sans embouteillages. Avec la livraison, le technicien installe **les appareils et mesure les taux d'humidité**, et vous vous épargnez deux longs trajets. L'enlèvement ne vaut la peine ici que si vous devez de toute façon passer près d'Anvers.",
    },
    buren: ["houyet", "gedinne"],
    faq: [
      {
        q: "Comment sécher un appartement au-dessus d'un magasin sans déranger le commerce ?",
        a: "Placez un appareil compact par pièce, gardez les portes fermées et faites aller le tuyau d'évacuation vers un évier ou un avaloir. Notre plus petit appareil est assez silencieux pour une pièce habitée. Indiquez lors de la réservation si l'accès passe par le magasin, et nous en tiendrons compte pour le rendez-vous.",
      },
      {
        q: "Pourquoi une fouille en Famenne reste-t-elle si longtemps mouillée ?",
        a: "Le sol contient ici beaucoup d'argile et de schiste et laisse mal passer l'eau. L'eau de pluie stagne dans et autour de la fouille et pénètre dans la dalle et les murs. Un déshumidificateur d'une capacité suffisante retire cette humidité, mais pompez d'abord l'eau stagnante.",
      },
      {
        q: "Livrez-vous aussi à Felenne, Focant et dans les autres villages ?",
        a: "Oui, nous livrons dans toutes les sections de Beauraing, y compris dans les petits villages. Si votre ferme se trouve sur une route étroite ou non revêtue, signalez-le lors de la réservation. Le technicien sait alors à l'avance où la camionnette peut se garer.",
      },
      {
        q: "Comment savoir quand je peux faire reprendre le déshumidificateur ?",
        a: "C'est la mesure qui le dit, pas l'impression. Lors de l'installation, le technicien note les taux d'humidité du mur et du sol, et il mesure à nouveau à l'enlèvement. Si votre poseur de sol ou votre peintre demande une valeur précise, communiquez-la-nous à l'avance.",
      },
    ],
    realisaties: [],
  },
  bievre: {
    slug: "bievre",
    title: "Bièvre : location de déshumidificateur en Ardenne | Vernast",
    description:
      "Location de déshumidificateur à Bièvre, Graide, Naomé ou Gros-Fays : villages ardennais entre les bois, maisons en ardoise et résidences de vacances.",
    h1: "Location de déshumidificateur à Bièvre",
    kicker: "Province de Namur · villages forestiers sur le plateau ardennais",
    rit: { afstand: "environ 185 km", tijd: "environ deux heures" },
    intro: [
      "Bièvre est **une commune très boisée de l'Ardenne**, au sud de la province de Namur, contre la province de Luxembourg. La commune comprend Graide, Naomé, Gros-Fays, Petit-Fays, Oizy, Cornimont, Baillamont, Bellefontaine et Monceau-en-Ardenne : de petits villages dans des clairières.",
      "La commune est **peu peuplée**. Qui construit ici transforme le plus souvent une vieille maison, et beaucoup d'habitations sont **des maisons de vacances ou des secondes résidences** pour l'été et les week-ends. Depuis Aartselaar, il nous faut environ deux heures pour y arriver. Des questions ? N'hésitez pas à nous écrire ou à nous appeler.",
    ],
    bouw: {
      kop: "Ardoise, forêt et maisons fermées tout l'hiver",
      alineas: [
        "Les vieilles maisons sont **bâties en schiste et en grès**, avec **des toits en ardoise** et de petites fenêtres. Ces murs absorbent beaucoup d'humidité et la libèrent lentement. Une maison **en pleine forêt** sèche en outre moins bien qu'une maison dans une clairière, parce qu'il y a plus d'ombre et que l'air reste plus humide.",
        "Une maison de vacances qui **reste fermée de l'automne au printemps** passe des mois au froid, sans aération. De la condensation se forme sur les murs les plus froids, et vous le voyez à **des armoires qui sentent le moisi et des taches** derrière les meubles. Faites tourner le déshumidificateur avant l'arrivée des premiers hôtes, et cette humidité disparaît avant que des moisissures ne se développent.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**Pour une maison restée fermée pendant des mois** : le déshumidificateur à adsorption absorbe l'humidité même dans une habitation froide et non chauffée." },
      { key: "ttk170", waarom: "Pour une petite maison de vacances : compact, 0,75 kW sur une prise standard et facile à déplacer d'une pièce à l'autre." },
      { key: "ttk350", waarom: "**Pour la rénovation d'une vieille maison de village** avec un nouveau plafonnage ou une nouvelle chape : 70 litres par jour et une portée jusqu'à environ 400 m³." },
      { key: "radiaal2250", waarom: "Derrière les meubles et dans les coins contre un mur froid, l'humidité stagne. Ce ventilateur radial y souffle de l'air sec de manière ciblée." },
    ],
    levering: {
      kop: "Livraison à Bièvre : loin, mais possible",
      alinea:
        "Bièvre est à **environ deux heures de route** de notre entrepôt, par Bruxelles, Namur et l'E411. C'est l'un de nos plus longs trajets, et nous **le combinons avec d'autres adresses en Ardenne**. Vous choisissez une date de livraison lors de la réservation ; l'heure, nous la convenons sur rendez-vous. Si la maison est inoccupée, indiquez comment le technicien peut entrer et où il trouve du courant.",
    },
    afhalen: {
      kop: "Enlèvement : seulement si vous venez de toute façon de Flandre",
      alinea:
        "De Bièvre à Aartselaar et retour, comptez **environ quatre heures de route**. Si vous avez une seconde résidence ici et habitez en Flandre, mieux vaut emporter le déshumidificateur en chemin. Transportez-le debout.",
    },
    buren: ["gedinne", "vresse-sur-semois"],
    faq: [
      {
        q: "Pourquoi une maison de vacances en forêt devient-elle si humide ?",
        a: "Elle reste des mois froide et fermée, dans un environnement où l'air reste humide. L'humidité se dépose sur les endroits les plus froids : les murs extérieurs, la paroi derrière les meubles et l'intérieur des armoires. Sans chauffage ni aération, elle s'accumule jusqu'au printemps.",
      },
      {
        q: "Un déshumidificateur peut-il tourner pendant mon absence ?",
        a: "Oui. Avec un tuyau vers une évacuation, le déshumidificateur ne s'arrête pas quand le réservoir est plein. S'il n'y a pas d'évacuation à proximité, quelqu'un doit vider le réservoir régulièrement. Parlez-en lors de la réservation, et le technicien réglera l'appareil en conséquence.",
      },
      {
        q: "Livrez-vous à Graide, Naomé et dans les autres villages de Bièvre ?",
        a: "Oui, toutes les sections font partie de notre zone de livraison. Les routes entre les villages traversent la forêt et sont parfois étroites. Indiquez lors de la réservation comment accéder à la maison et si la camionnette peut s'y garer.",
      },
      {
        q: "Un déshumidificateur aide-t-il contre les moisissures dans une maison en ardoise ?",
        a: "Il en supprime la cause : l'humidité dans l'air et dans les murs. Les moisissures déjà présentes doivent être nettoyées séparément. Ensuite, une maison sèche évite de nouvelles taches, surtout si vous aérez régulièrement après le séchage.",
      },
    ],
    realisaties: [],
  },
  ciney: {
    slug: "ciney",
    title: "Déshumidificateur à louer à Ciney, cœur du Condroz | Vernast",
    description:
      "Location de déshumidificateur à Ciney, Achêne ou Leignon : fermes condruziennes transformées et maisons du centre. Installé, avec mesure d'humidité au départ.",
    h1: "Location de déshumidificateur à Ciney",
    kicker: "Province de Namur · la capitale du Condroz",
    rit: { afstand: "environ 130 km", tijd: "environ une heure et demie" },
    intro: [
      "Ciney est **la capitale du Condroz**, le plateau ondulé entre Meuse et Ourthe. La ville se trouve sur **la ligne de chemin de fer Namur-Luxembourg** et est connue dans la région pour son **marché aux bestiaux**. La commune comprend des villages comme Achêne, Leignon, Chevetogne, Sovet et Braibant.",
      "Le paysage alterne **crêtes de grès** et **vallons calcaires**. Sur les crêtes se dressent de grandes fermes en carré, et beaucoup sont aujourd'hui transformées en habitation. Une telle transformation apporte beaucoup d'eau dans un bâtiment qui sèche lui-même lentement. Depuis notre entrepôt d'Aartselaar, il nous faut environ une heure et demie pour y arriver.",
    ],
    bouw: {
      kop: "Fermes en pierre bleue et maisons autour du marché",
      alineas: [
        "Une ferme condruzienne a **des murs épais en pierre naturelle** et généralement pas de barrière d'étanchéité. Qui transforme une étable ou une grange en habitation coule **une nouvelle chape** et monte des cloisons avec du plafonnage. Cette eau de gâchage doit partir, et **les murs épais et froids retiennent longtemps l'humidité**. Le technicien mesure lors de l'installation à quel point ils sont mouillés, pour que vous puissiez comparer à l'enlèvement.",
        "Dans le centre et vers la gare se trouvent **des maisons mitoyennes et des maisons bourgeoises** du dix-neuvième et du vingtième siècle. Il s'agit le plus souvent d'une nouvelle salle de bains, d'une cuisine ou d'un rez-de-chaussée rénové. Une cave sous une telle maison reste froide en hiver, et sous 15 °C, un déshumidificateur à condensation travaille nettement plus lentement.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une grange transformée aux pièces hautes** : 110 litres par jour et une portée jusqu'à environ 600 m³, adaptés au volume sous un toit de ferme." },
      { key: "teddh30", waarom: "Une étable aux murs de pierre est glaciale en hiver. Ce chauffage de 30 kW porte la pièce au-dessus de 15 °C, pour que le déshumidificateur soit efficace. **Il demande du 400 V** ; vérifiez que la ferme dispose de ce raccordement." },
      { key: "ttv4500", waarom: "Le long d'un mur épais en pierre naturelle, une couche d'air humide stagne. **Ce ventilateur la met en mouvement**, pour que le déshumidificateur puisse absorber l'humidité." },
      { key: "ttk350", waarom: "Pour une maison mitoyenne du centre avec un nouveau plafonnage : 70 litres par jour et une portée jusqu'à environ 400 m³, sur une prise standard." },
    ],
    levering: {
      kop: "Livraison à Ciney : par l'E411, au-delà de Namur",
      alinea:
        "Nous passons **par le ring de Bruxelles et l'E411** jusqu'au-delà de Namur, soit environ une heure et demie au total. En Wallonie, nous livrons **sur rendez-vous** : vous choisissez une date de livraison lors de la réservation et nous confirmons l'heure. Si la ferme se trouve sur un chemin de campagne ou dans une cour pavée, signalez-le. Le technicien emporte un diable et installe les appareils pièce par pièce.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : trois heures aller-retour",
      alinea:
        "Qui se rend lui-même à notre entrepôt depuis Ciney roule **environ trois heures**, aller et retour compris. Pour un seul déshumidificateur, c'est rarement rentable. Avec une livraison, le technicien installe les appareils et effectue immédiatement la mesure d'humidité.",
    },
    buren: ["hamois", "assesse", "yvoir", "dinant"],
    faq: [
      {
        q: "Nous transformons une ancienne étable condruzienne en habitation. Combien de déshumidificateurs nous faut-il ?",
        a: "Cela dépend du volume et du nombre de pièces, pas seulement de la surface au sol. Une étable a souvent des plafonds hauts, nous calculons donc en mètres cubes. Communiquez les dimensions lors de la réservation, et nous vous proposerons une combinaison de déshumidificateur, de ventilateur et éventuellement de chauffage.",
      },
      {
        q: "Pourquoi une ferme aux murs de pierre sèche-t-elle si lentement ?",
        a: "Les murs sont épais et froids. L'humidité du nouveau plafonnage et du mortier de maçonnerie y pénètre et n'en ressort que lentement, surtout si la pièce n'est pas chauffée. La chaleur et le mouvement de l'air accélèrent le processus. Pour une rénovation complète de ferme, comptez plutôt en semaines qu'en jours.",
      },
      {
        q: "Une ferme du Condroz a-t-elle assez de courant pour un chauffage de chantier ?",
        a: "Souvent oui, car beaucoup de fermes ont encore un raccordement triphasé datant de leur passé agricole. Renseignez-vous avant la réservation auprès du propriétaire ou de votre électricien. Les chauffages demandent du 400 V. S'il manque, nous choisissons un déshumidificateur à adsorption, qui fonctionne aussi dans le froid.",
      },
      {
        q: "Livrez-vous aussi à Chevetogne, Leignon et Achêne ?",
        a: "Oui, ces villages font partie de Ciney et sont compris dans la même livraison. Si votre adresse se trouve hors du centre du village, sur un chemin de campagne étroit, dites-le à l'avance. Le technicien sait ainsi où il peut accéder avec la camionnette.",
      },
    ],
    realisaties: [],
  },
};
