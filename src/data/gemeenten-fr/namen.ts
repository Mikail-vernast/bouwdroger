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
};
