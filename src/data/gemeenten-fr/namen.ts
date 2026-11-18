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
  gedinne: {
    slug: "gedinne",
    title: "Déshumidificateur à louer à Gedinne, en Ardenne | Vernast",
    description:
      "Location de déshumidificateur à Gedinne : maisons en schiste et secondes résidences sur les hauteurs de l'Ardenne namuroise. Installé, avec mesure au départ.",
    h1: "Location de déshumidificateur à Gedinne",
    kicker: "Province de Namur · le haut de l'Ardenne, contre la France",
    rit: { afstand: "environ 185 km", tijd: "environ deux heures" },
    intro: [
      "Gedinne se trouve **en Ardenne, à l'extrême sud de la province de Namur**, contre la frontière française. Sur son territoire se trouve **la Croix-Scaille**, le point culminant de la province. La commune comprend des villages comme Louette-Saint-Pierre, Bourseigne-Vieille, Willerzie, Rienne et Vencimont, dispersés entre de vastes forêts.",
      "La région est peu peuplée et très boisée, et beaucoup de gens y ont **une seconde résidence ou une maison de vacances**. Dans les villages se dressent de vieilles maisons en **schiste aux toits d'ardoise**. Depuis Aartselaar, il nous faut environ deux heures pour y arriver.",
    ],
    bouw: {
      kop: "Hivers froids, maisons en ardoise et logements vides pendant des mois",
      alineas: [
        "À cette altitude, **les hivers sont plus longs et plus humides** qu'en Flandre. Une maison de vacances fermée de novembre à Pâques se refroidit complètement, et l'humidité se dépose sur les murs froids, dans les armoires et dans les textiles. Au printemps, la maison sent le renfermé et des taches apparaissent parfois. **Faites tourner un déshumidificateur quelques semaines** avant le début de la saison.",
        "Les vieilles maisons ont **des murs épais en schiste** qui se réchauffent lentement. Lors d'une rénovation, un nouveau plafonnage ou un nouveau sol arrive dans une maison qui reste froide. **Sous 15 °C, un déshumidificateur à condensation perd de son rendement.** Lors de l'installation, le technicien regarde donc s'il faut ajouter un chauffage, ou si un déshumidificateur à adsorption est le meilleur choix.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**Le déshumidificateur pour une seconde résidence après l'hiver** : il fonctionne avec un dessiccant et absorbe l'humidité même dans un logement glacial." },
      { key: "ttk170", waarom: "Pour une petite maison de vacances ou un chalet : compact, 0,75 kW sur une prise standard et facile à placer dans une pièce." },
      { key: "teddh20", waarom: "**Pour une rénovation dans une maison en pierre froide** : le chauffage porte la pièce à température, pour que le déshumidificateur soit efficace. Il demande du 400 V ; vérifiez à l'avance que vous en disposez." },
      { key: "ttv4500", waarom: "Le long d'un mur froid en schiste, l'air humide stagne. Ce ventilateur maintient l'air en mouvement, aussi derrière les armoires et dans les coins." },
    ],
    levering: {
      kop: "Livraison à Gedinne : l'un de nos trajets les plus longs",
      alinea:
        "Gedinne se trouve **à la limite de notre zone d'activité** : environ deux heures de route, par Bruxelles et Namur vers le sud. C'est pourquoi **nous combinons les livraisons en Ardenne**. Vous choisissez une date de livraison lors de la réservation, et nous convenons du moment précis sur rendez-vous. Si vous n'êtes pas vous-même sur place, prévoyez à l'avance comment le technicien pourra entrer.",
    },
    afhalen: {
      kop: "Enlèvement : intéressant si vous venez de Flandre",
      alinea:
        "Depuis Gedinne, l'aller-retour jusqu'à notre point d'enlèvement vous prend **environ quatre heures**, et cela n'en vaut pas la peine. Si vous habitez près d'Anvers et avez une seconde résidence ici, l'enlèvement est plus logique : vous chargez l'appareil en route pour le week-end et le transportez debout.",
    },
    buren: ["beauraing", "bievre", "vresse-sur-semois"],
    faq: [
      {
        q: "Combien de temps faire tourner un déshumidificateur dans une maison de vacances après l'hiver ?",
        a: "En général deux à trois semaines, selon la taille et le degré d'humidité de la maison. Gardez fenêtres et portes fermées et ouvrez armoires et tiroirs, pour que les textiles sèchent aussi. À la reprise, le technicien mesure, pour que vous ayez un point de repère pour l'année suivante.",
      },
      {
        q: "Livrez-vous jusqu'à Gedinne ?",
        a: "Oui, même si c'est l'un de nos trajets les plus longs, environ deux heures depuis Aartselaar. C'est pourquoi nous planifions ensemble les livraisons en Ardenne. Vous choisissez une date de livraison lors de la réservation, et nous convenons avec vous de l'heure de livraison.",
      },
      {
        q: "Un déshumidificateur à condensation fonctionne-t-il dans une maison non chauffée sur les hauteurs ardennaises ?",
        a: "Il fonctionne, mais sous 15 °C il absorbe beaucoup moins d'eau. Dans une maison froide, nous préférons donc placer un déshumidificateur à adsorption, qui fonctionne avec un dessiccant et reste efficace à basse température. Si vous pouvez chauffer la pièce, un déshumidificateur à condensation avec un chauffage suffit.",
      },
      {
        q: "Et s'il n'y a pas de 400 V dans le logement ?",
        a: "Les chauffages de chantier sont alors exclus, car ils demandent du courant triphasé. Beaucoup de maisons de vacances n'ont pas ce raccordement. Le déshumidificateur à adsorption et les déshumidificateurs à condensation fonctionnent sur une prise standard : nous composons donc avec eux une installation adaptée à ce qui est disponible.",
      },
    ],
    realisaties: [],
  },
  hamois: {
    slug: "hamois",
    title: "Location de déshumidificateur à Hamois, en Condroz | Vernast",
    description:
      "Location de déshumidificateur à Hamois, Natoye, Emptinne ou Schaltin : maisons neuves sur parcelle et rénovations sur le plateau du Condroz. Livré et réglé.",
    h1: "Location de déshumidificateur à Hamois",
    kicker: "Province de Namur · villages sur le plateau condrusien",
    rit: { afstand: "environ 125 km", tijd: "près d'une heure et demie" },
    intro: [
      "Hamois est **une commune rurale du nord du Condroz**, entre Namur et Ciney. Elle se compose de villages : Hamois, Natoye, Emptinne, Schaltin, Achet, Mohiville et Scy. Entre les villages s'étendent des champs, de petits bois et des fermes isolées.",
      "La proximité de Namur attire **de nouveaux habitants**, et entre les anciens noyaux sont apparus **des lotissements de maisons individuelles**. À Hamois, les chantiers de construction neuve côtoient donc des rénovations de vieilles maisons en pierre. Depuis Aartselaar, il nous faut près d'une heure et demie pour y arriver.",
    ],
    bouw: {
      kop: "Constructions neuves entre les champs et vieilles maisons en pierre",
      alineas: [
        "Dans **une maison neuve**, la chape, le plafonnage et la maçonnerie apportent ensemble des centaines de litres d'eau. Si vous laissez cette eau s'évaporer d'elle-même, le démarrage du poseur de sol ou du peintre est repoussé, surtout lors d'un automne humide. **Un déshumidificateur au bon format** permet de tenir le planning.",
        "Dans les noyaux villageois se dressent **des maisons plus anciennes en grès et en calcaire**, souvent avec une cave sous une partie du logement. Lors d'une rénovation, l'humidité vient de deux côtés : du nouveau plafonnage et du vieux mur froid. Le technicien mesure au démarrage, pour que vous voyiez après le séchage ce qu'il reste.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Le choix habituel pour une maison neuve sur une parcelle** : 70 litres par jour et une portée jusqu'à environ 400 m³, suffisant pour un rez-de-chaussée avec une chape fraîche." },
      { key: "ttk650", waarom: "Pour une grande maison individuelle avec un espace de vie ouvert et un grand volume : 110 litres par jour, jusqu'à environ 600 m³." },
      { key: "revolution", waarom: "**Pour une cave sous une vieille maison de village** que vous ne pouvez pas chauffer : le déshumidificateur à adsorption absorbe l'humidité même à basse température." },
      { key: "radiaal2250", waarom: "Une chape fraîche sèche le plus lentement dans les coins. Ce ventilateur radial souffle de façon ciblée sur le sol, pour qu'il sèche uniformément." },
    ],
    levering: {
      kop: "Livraison à Hamois : par Namur jusqu'au plateau",
      alinea:
        "Nous passons **par Bruxelles et l'E411 jusqu'au-delà de Namur**, puis montons sur le plateau jusqu'à votre village, en tout près d'une heure et demie. Vous choisissez une date de livraison lors de la réservation, et comme Hamois est en Wallonie, nous convenons de l'heure **sur rendez-vous**. Le technicien place les appareils, les règle et vous montre où l'eau peut s'écouler s'il n'y a pas encore d'évacuation.",
    },
    afhalen: {
      kop: "Enlèvement depuis Hamois : faisable, mais un long trajet",
      alinea:
        "L'aller-retour jusqu'à notre point d'enlèvement à Aartselaar vous prend **près de trois heures**. Si vous devez de toute façon aller à Anvers ou à Bruxelles, cela peut convenir. Sinon, la livraison est le choix le plus serein : le technicien place les appareils dans la bonne pièce.",
    },
    buren: ["ciney", "havelange", "ohey", "assesse"],
    faq: [
      {
        q: "Quand le poseur de sol peut-il commencer sur une chape dans une maison neuve ?",
        a: "C'est le poseur de sol qui décide, sur la base d'une mesure de l'humidité résiduelle de la chape. Avec un déshumidificateur, ce délai d'attente est plus court que si la chape sèche d'elle-même. À la reprise, notre technicien mesure à nouveau, pour que vous puissiez donner un chiffre concret au poseur de sol.",
      },
      {
        q: "Où va l'eau s'il n'y a pas encore d'évacuation ?",
        a: "Dans une maison en construction, l'évacuation n'est souvent pas encore raccordée. Le déshumidificateur recueille alors l'eau dans un réservoir que vous videz régulièrement, ou le technicien pose un tuyau vers un endroit où elle peut s'écouler. Signalez lors de la réservation s'il y a déjà une évacuation.",
      },
      {
        q: "Livrez-vous aussi à Natoye, Emptinne et Schaltin ?",
        a: "Oui, tous les villages de Hamois font partie de la même livraison. Si votre chantier se trouve dans un nouveau lotissement sans plaque de rue, donnez une description claire ou une localisation. Le technicien trouve ainsi la parcelle sans chercher.",
      },
      {
        q: "La cave de ma vieille maison de village est toujours humide. Un déshumidificateur règle-t-il le problème ?",
        a: "Un déshumidificateur retire l'humidité de l'air et des murs. Si de l'eau entre à nouveau après chaque période de pluie, l'humidité revient. Lors d'une rénovation, il aide à éliminer l'humidité de construction, et la mesure au démarrage montre quelle part de l'humidité est structurelle.",
      },
    ],
    realisaties: [],
  },
  hastiere: {
    slug: "hastiere",
    title: "Hastière : location de déshumidificateur sur Meuse | Vernast",
    description:
      "Location de déshumidificateur à Hastière, Waulsort ou Heer : maisons au bord de la Meuse près de la France et secondes résidences. Livré, installé et repris.",
    h1: "Location de déshumidificateur à Hastière",
    kicker: "Namur · au bord de la Meuse, contre la frontière française",
    rit: { afstand: "environ 125 km", tijd: "environ une heure et demie" },
    intro: [
      "À Hastière, **la Meuse entre en Belgique depuis la France**. Les villages se trouvent sur les deux rives : Hastière-par-delà et son église romane, Hastière-Lavaux, Waulsort et, vers la frontière, Hermeton-sur-Meuse, Heer et Agimont.",
      "La vallée est profondément encaissée, avec des versants boisés et du calcaire de part et d'autre. À côté des habitants permanents, on compte beaucoup de **secondes résidences et de maisons de vacances**, qui restent parfois vides et non chauffées pendant des mois. Depuis Aartselaar, il nous faut environ une heure et demie pour rejoindre Hastière.",
    ],
    bouw: {
      kop: "Berges basses et maisons vides pendant des mois",
      alineas: [
        "Le long de la Meuse, le rez-de-chaussée de nombreuses maisons est bas, et lors des crues, la cave ou le débarras est le premier à être mouillé. Si l'eau est entrée, retirez **d'abord l'eau et la boue**. Séchez ensuite avec une capacité suffisante jusqu'à ce que sols et murs soient prêts pour la finition.",
        "Une **maison de vacances restée fermée tout l'hiver** a des murs froids et un air humide. Si vous rénovez une telle maison au printemps avec un nouveau plafonnage ou un nouveau sol, vous commencez dans une pièce froide. Un déshumidificateur à condensation n'y fonctionne bien qu'après avoir d'abord réchauffé. Un **déshumidificateur à adsorption** n'a pas besoin de cette chaleur.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**Pour une seconde résidence restée non chauffée tout l'hiver** : ce déshumidificateur à adsorption absorbe l'humidité même dans une pièce froide." },
      { key: "teddh30", waarom: "Réchauffe d'abord une grande maison froide au bord de la Meuse, pour qu'un déshumidificateur à condensation puisse faire son travail. Ce chauffage de 30 kW demande du 400 V." },
      { key: "ttk650", waarom: "**Après une inondation dans un rez-de-chaussée en bord de rive** : 110 litres par jour retirent rapidement l'humidité du sol et des murs." },
      { key: "ttv4500", waarom: "Maintient l'air en mouvement dans un rez-de-chaussée long et bas, pour qu'aucun coin humide ne subsiste derrière les armoires." },
    ],
    levering: {
      kop: "Livraison à Hastière : jusqu'à la frontière, sur rendez-vous",
      alinea:
        "Nous remontons la Meuse par Namur et Dinant, en tout environ une heure et demie. Vous choisissez **une date de livraison** lors de la réservation, et nous convenons de l'heure avec vous, car en Wallonie, nous livrons sur rendez-vous. Si vous n'y habitez pas en permanence, indiquez-nous **qui fera entrer le technicien**. Il place les appareils, installe l'évacuation et note les valeurs d'humidité.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : rarement rentable depuis Hastière",
      alinea:
        "L'aller-retour jusqu'à notre point d'enlèvement vous prend environ trois heures, au début puis à nouveau au retour du matériel. Si vous roulez vous-même depuis la Flandre vers votre seconde résidence, vous pouvez prendre l'appareil en route. Transportez-le **debout** et calez-le bien.",
    },
    buren: ["dinant", "onhaye", "doische"],
    faq: [
      {
        q: "Je n'habite pas en permanence à Hastière. Dois-je être présent à la livraison ?",
        a: "Quelqu'un doit faire entrer le technicien et savoir où les appareils peuvent être placés. Ce peut être un voisin, un entrepreneur ou un gestionnaire. Indiquez lors de la réservation de qui il s'agit et comment joindre cette personne, et nous prendrons rendez-vous avec elle.",
      },
      {
        q: "Comment sécher une maison de vacances restée vide tout l'hiver ?",
        a: "Portez d'abord la pièce à température, car des murs froids ne libèrent presque pas leur eau. Placez ensuite un déshumidificateur par étage et gardez les fenêtres fermées. Si la maison reste froide, nous choisissons un déshumidificateur à adsorption, qui continue de fonctionner sous 15 °C.",
      },
      {
        q: "Allez-vous jusqu'à Heer et Agimont, tout près de Givet ?",
        a: "Oui, nous livrons dans toutes les sections d'Hastière, jusqu'à la frontière. Communiquez votre adresse complète lors de la réservation. Nous planifions alors le trajet à l'avance et le combinons si possible avec d'autres adresses de la région.",
      },
      {
        q: "Le déshumidificateur peut-il continuer de tourner quand il n'y a personne dans la maison ?",
        a: "Oui. Le technicien pose le tuyau d'évacuation vers un siphon de sol, un évier ou l'extérieur, pour que le réservoir ne soit jamais plein. L'appareil s'arrête de lui-même dès que l'hygrostat atteint la valeur cible et redémarre quand l'humidité de l'air augmente.",
      },
    ],
    realisaties: [],
  },
  havelange: {
    slug: "havelange",
    title: "Louer un déshumidificateur de chantier à Havelange | Vernast",
    description:
      "Location de déshumidificateur à Havelange, Maffe, Méan ou Barvaux-Condroz : fermes et maisons de village du Condroz oriental, près de Liège. Livré et installé.",
    h1: "Location de déshumidificateur à Havelange",
    kicker: "Province de Namur · le Condroz oriental",
    rit: { afstand: "environ 135 km", tijd: "environ une heure et demie" },
    intro: [
      "Havelange se trouve **à l'est du Condroz**, là où la province de Namur touche celle de Liège. C'est **une vaste commune agricole** avec des villages comme Maffe, Méan, Barvaux-Condroz, Flostoy, Porcheresse et Verlée, reliés par d'étroites routes de campagne.",
      "Qui rénove ici travaille généralement **dans un vieux bâtiment en pierre** : une ferme, un presbytère ou une maison de village sur la place de l'église. Depuis Aartselaar, il nous faut environ une heure et demie pour y arriver. Des questions ? N'hésitez pas à nous écrire ou à nous appeler.",
    ],
    bouw: {
      kop: "Murs épais, hivers froids et une pièce sans chauffage",
      alineas: [
        "Sur le plateau du Condroz oriental, **il peut geler fort en hiver**, et une maison en rénovation n'a alors généralement pas encore de chauffage qui fonctionne. **Sous 15 °C, un déshumidificateur à condensation perd de son rendement**, et dans une maison en pierre non chauffée, vous atteignez rarement cette température en janvier. Un chauffage de chantier ou un déshumidificateur à adsorption fait alors la différence.",
        "Beaucoup de maisons ont **un rez-de-chaussée posé à même le sol** ou un vieux carrelage sans isolation. Si l'on y coule un sol isolé avec une chape, la plus grande partie de l'eau se trouve dans cette nouvelle couche, tandis que les murs autour restent froids et humides. Séchez alors pièce par pièce, portes fermées, plutôt que toute la maison à la fois.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**Pour un chantier d'hiver sans chauffage** : le déshumidificateur à adsorption fonctionne avec un dessiccant et continue d'absorber l'humidité même dans une pièce en pierre froide." },
      { key: "teddh20", waarom: "Pour une pièce fermée qui doit monter en température : 20 kW, pour que le déshumidificateur placé à côté retrouve son rendement. Le chauffage demande un raccordement en 400 V." },
      { key: "ttk350", waarom: "Pour une maison de village ou un presbytère où vous travaillez étage par étage : 70 litres par jour et une portée jusqu'à environ 400 m³." },
      { key: "ttv4500", waarom: "**Sur une nouvelle chape dans une vieille maison**, ce ventilateur met l'air en mouvement, pour que la couche humide au-dessus du sol ne stagne pas." },
    ],
    levering: {
      kop: "Livraison à Havelange : jusqu'au plateau, contre la province de Liège",
      alinea:
        "Nous prenons l'E411 jusqu'au-delà de Namur, puis encore un bout de routes de campagne, en tout **environ une heure et demie**. C'est pourquoi **nous combinons le trajet avec d'autres livraisons dans la région**. Vous choisissez une date de livraison lors de la réservation ; en Wallonie, l'heure de livraison est fixée sur rendez-vous.",
    },
    afhalen: {
      kop: "Enlèvement depuis Havelange : comptez une demi-journée",
      alinea:
        "L'aller-retour jusqu'à Aartselaar vous prend **environ trois heures**. Pour un seul appareil, cela en vaut rarement la peine. Lors d'une livraison, le technicien mesure la température de la pièce et choisit sur place entre chauffage et déshumidificateur à adsorption. Si vous venez chercher le matériel, vous devez en juger vous-même à l'avance.",
    },
    buren: ["hamois", "ohey", "somme-leuze"],
    faq: [
      {
        q: "Un déshumidificateur fonctionne-t-il dans une ferme non chauffée en hiver ?",
        a: "Un déshumidificateur à condensation fonctionne, mais lentement : sous 15 °C, son rendement chute fortement. Dans une pièce en pierre froide, nous plaçons donc un chauffage de chantier à côté du déshumidificateur, ou nous choisissons un déshumidificateur à adsorption, qui continue de sécher même à basse température.",
      },
      {
        q: "Une livraison dans un village isolé comme Méan ou Porcheresse est-elle possible ?",
        a: "Oui, tous les villages d'Havelange sont compris dans notre livraison. Les routes de campagne sont étroites : indiquez donc lors de la réservation si une camionnette peut aller jusqu'à la maison et s'il y a de la place pour s'arrêter un moment pendant le déchargement.",
      },
      {
        q: "Dois-je sécher toute la maison à la fois ?",
        a: "Non, dans une grande maison en pierre, c'est moins efficace. Travaillez plutôt par zone : fermez la pièce avec la nouvelle chape ou le plafonnage frais et séchez-y. L'énergie va ainsi là où se trouve l'eau.",
      },
      {
        q: "À quelle distance de votre entrepôt se trouve Havelange ?",
        a: "Environ 135 kilomètres, soit une heure et demie de route par Bruxelles et l'E411. C'est l'un des trajets les plus longs dans la province de Namur. C'est pourquoi nous combinons les livraisons dans le Condroz et convenons avec vous du moment de livraison.",
      },
    ],
    realisaties: [],
  },
  houyet: {
    slug: "houyet",
    title: "Déshumidificateur de chantier à louer à Houyet | Vernast",
    description:
      "Location de déshumidificateur à Houyet, Celles ou Wanlin : maisons en pierre dans la vallée de la Lesse et fermes qui deviennent maisons de vacances. Livré.",
    h1: "Location de déshumidificateur à Houyet",
    kicker: "Namur · sur la Lesse, entre Famenne et Condroz",
    rit: { afstand: "environ 130 km", tijd: "environ une heure et demie" },
    intro: [
      "Houyet se trouve **sur la Lesse** et est connu en été comme point de départ des descentes en kayak vers Anseremme. Le village s'est développé dans la vallée, autour de la rivière. Depuis notre entrepôt d'Aartselaar, il nous faut environ une heure et demie pour y arriver.",
      "La commune est vaste et rurale. **Celles**, avec son église romane et le château de Vêves tout proche, en fait aussi partie, tout comme Wanlin, Hulsonniaux, Custinne et Ciergnon. Ce sont des villages de pierre grise entre bois et prairies.",
    ],
    bouw: {
      kop: "Maisons dans la vallée de la Lesse et fermes sur les hauteurs",
      alineas: [
        "Dans la vallée de la Lesse, les maisons se trouvent près de la rivière et contre le versant. Après de fortes pluies, l'eau monte vite, et les caves et les rez-de-chaussée bas deviennent humides. Qui rénove ici a affaire à **des murs en pierre froids** qui libèrent lentement leur eau. Un ventilateur qui maintient l'air en mouvement le long de la paroi accélère le séchage.",
        "Sur les hauteurs autour de Celles et de Custinne, de vieilles fermes sont transformées en habitation ou en **logement de vacances**, avec de nouveaux sols et un nouveau plafonnage dans de grandes pièces en même temps. En hiver, un tel chantier n'est souvent pas chauffé. Il faut alors d'abord ajouter de la chaleur pour qu'un déshumidificateur à condensation fonctionne bien.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une ferme autour de Celles qui devient logement de vacances** : 110 litres par jour pour des volumes jusqu'à 600 m³." },
      { key: "ttv4500", waarom: "Maintient l'air en mouvement le long d'**un mur en pierre froid dans la vallée de la Lesse**, pour que l'humidité ne reste pas collée à la paroi." },
      { key: "revolution", waarom: "Pour **une cave proche de la Lesse** : ce déshumidificateur à adsorption fonctionne aussi dans une pièce froide, où un appareil à condensation a peu de rendement." },
      { key: "teddh20", waarom: "Réchauffe en hiver une petite maison de village non chauffée au-dessus de 15 °C, pour que le déshumidificateur puisse faire son travail. Demande du 400 V." },
    ],
    levering: {
      kop: "Livraison à Houyet : par Namur et Ciney jusqu'à la Lesse",
      alinea:
        "Nous prenons l'E411, puis passons par Ciney jusqu'à la Lesse, en tout environ une heure et demie. Vous choisissez **une date de livraison** lors de la réservation. Nous convenons de l'heure avec vous, pour pouvoir combiner le trajet avec d'autres adresses de la région. Le technicien place les appareils par zone de séchage, installe le tuyau d'évacuation et note les valeurs d'humidité comme point de comparaison pour la reprise.",
    },
    afhalen: {
      kop: "Enlèvement depuis Houyet : trois heures de route",
      alinea:
        "L'aller-retour jusqu'à Aartselaar vous prend environ trois heures, et cela deux fois par période de location. Ce n'est intéressant que si vous roulez vous-même depuis la Flandre vers votre seconde résidence. Transportez alors l'appareil **debout**, car couché, il peut perdre de l'eau résiduelle.",
    },
    buren: ["dinant", "ciney", "rochefort", "beauraing"],
    faq: [
      {
        q: "Ma maison au bord de la Lesse devient humide après une crue. Un déshumidificateur aide-t-il ?",
        a: "Pour l'humidité qui reste dans les murs et le sol après la crue, oui. Si l'eau revient chaque fois le long du mur ou par le sol, un déshumidificateur ne règle pas cela durablement. Lors de l'installation, le technicien mesure où se trouve l'humidité et à quelle profondeur.",
      },
      {
        q: "Je transforme une ferme en maison de vacances. De combien d'appareils ai-je besoin ?",
        a: "Comptez un grand appareil par espace ouvert, un ventilateur là où se trouve le nouveau sol et, en hiver, un chauffage de chantier. Indiquez lors de la réservation la surface et la hauteur sous plafond de chaque pièce. Nous calculons alors l'installation à l'avance.",
      },
      {
        q: "Venez-vous aussi à Ciergnon, Hulsonniaux et Wanlin ?",
        a: "Oui, nous livrons dans toutes les sections de Houyet, dans la vallée comme sur les hauteurs. Certaines routes le long de la Lesse sont étroites. Signalez lors de la réservation si la camionnette peut aller jusqu'à la porte, et le technicien emportera un diable.",
      },
      {
        q: "Puis-je louer en été, quand la région est pleine de touristes ?",
        a: "Oui. L'été est un bon moment pour sécher, car un déshumidificateur à condensation fonctionne mieux à des températures plus élevées. Seules les routes de la vallée sont plus fréquentées. C'est pourquoi nous convenons à l'avance avec vous de l'heure de livraison.",
      },
    ],
    realisaties: [],
  },
  onhaye: {
    slug: "onhaye",
    title: "Location de déshumidificateur à Onhaye et Falaën | Vernast",
    description:
      "Location de déshumidificateur à Onhaye, Anthée, Falaën ou Weillen : fermes et maisons de village sur le plateau à l'ouest de la Meuse, sous Montaigle.",
    h1: "Location de déshumidificateur à Onhaye",
    kicker: "Namur · villages sur le plateau au-dessus de la Meuse",
    rit: { afstand: "environ 120 km", tijd: "près d'une heure et demie" },
    intro: [
      "Onhaye se trouve **sur le plateau à l'ouest de Dinant**, au-dessus de la vallée de la Meuse. La commune rurale compte huit villages : Onhaye, Anthée, Falaën, Gerin, Miavoye, Serville, Sommière et Weillen. Ils sont dispersés entre champs, prairies et lisières de bois.",
      "Près de Falaën, dans la vallée de la Molignée, **les ruines du château fort de Montaigle** se dressent sur un éperon rocheux. Pour le reste, vous voyez surtout ici des fermes en calcaire, de vieilles maisons de village et des maisons plus récentes le long des routes vers Dinant et Philippeville. Depuis Aartselaar, il nous faut près d'une heure et demie.",
    ],
    bouw: {
      kop: "Fermes et maisons de village en calcaire",
      alineas: [
        "La maison typique ici est **une vieille ferme ou maison de village en calcaire**, avec des murs épais et un sol posé directement sur la terre. Lors d'une transformation, on coule souvent une nouvelle dalle avec isolation et chape, et les murs sont replafonnés. Vous apportez ainsi beaucoup d'eau dans un bâtiment qui, par nature, sèche déjà lentement.",
        "**Les étables et les granges** deviennent aussi plus souvent des espaces de vie. Ce sont de grandes pièces hautes avec peu de fenêtres, qui restent froides en hiver tant que le chauffage ne fonctionne pas. Combinez-y un grand appareil avec un chauffage de chantier et placez un ventilateur au-dessus du nouveau sol. Le planning du poseur de sol et du peintre reste ainsi tenable.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une grange ou une étable qui devient logement** : 110 litres par jour, adapté à des volumes jusqu'à 600 m³." },
      { key: "teddh30", waarom: "Réchauffe **une pièce haute non chauffée** en hiver au-dessus de 15 °C, pour que le déshumidificateur travaille à pleine capacité. Il faut pour cela du courant triphasé (400 V)." },
      { key: "radiaal2250", waarom: "Souffle au ras d'**une chape fraîche sur une nouvelle dalle**, la partie de la transformation qui contient le plus d'eau." },
      { key: "ttk350", waarom: "Pour une maison de village que vous rénovez pièce par pièce : 70 litres par jour pour une consommation de 1,1 kW." },
    ],
    levering: {
      kop: "Livraison à Onhaye : par Dinant jusqu'au plateau",
      alinea:
        "Depuis Aartselaar, nous passons par Namur et Dinant jusqu'au plateau, en tout près d'une heure et demie. Vous choisissez **une date de livraison** lors de la réservation et nous convenons de l'heure avec vous. Si votre ferme se trouve sur **un chemin de campagne ou une allée non revêtue**, signalez-le à l'avance. Le technicien sait ainsi où la camionnette peut stationner.",
    },
    afhalen: {
      kop: "Enlèvement : un long trajet pour un appareil lourd",
      alinea:
        "Jusqu'à notre point d'enlèvement à Aartselaar, il vous faut près d'une heure et demie de route, au début puis à nouveau à la fin de la location. Un grand appareil est lourd et doit voyager debout. Pour une ferme transformée avec plusieurs appareils, **la livraison est le choix raisonnable**.",
    },
    buren: ["dinant", "anhee", "hastiere", "florennes"],
    faq: [
      {
        q: "Combien de temps sèche un nouveau sol dans une vieille ferme à Anthée ou à Weillen ?",
        a: "Cela dépend de l'épaisseur et du type de chape, et de la température de la pièce. Dans une ferme froide, cela n'avance bien qu'après avoir d'abord réchauffé. Le technicien mesure au démarrage et à la reprise, pour que vous ayez un chiffre pour le poseur de sol.",
      },
      {
        q: "Un déshumidificateur fonctionne-t-il dans une étable sans chauffage ?",
        a: "Un déshumidificateur à condensation a besoin de chaleur : sous environ 15 °C, il retire beaucoup moins d'eau de l'air. Dans une étable non chauffée, nous combinons donc le déshumidificateur avec un chauffage de chantier électrique. Vérifiez toutefois qu'il y a un raccordement en 400 V pour le grand chauffage.",
      },
      {
        q: "Livrez-vous dans les huit villages d'Onhaye ?",
        a: "Oui, d'Onhaye même jusqu'à Falaën, Serville et Sommière. Beaucoup d'adresses du plateau se trouvent en dehors du centre. Indiquez lors de la réservation si la camionnette peut aller jusqu'à la porte, ou si les derniers mètres passent par un chemin de terre.",
      },
      {
        q: "Puis-je régler moi-même l'hygrostat pendant la location ?",
        a: "Oui, mais ne le mettez pas au maximum. Un mur en calcaire avec un enduit à la chaux frais sèche mieux à un rythme régulier ; sinon, le plafonnage peut se fissurer. Lors de l'installation, le technicien règle une valeur cible adaptée à votre chantier.",
      },
    ],
    realisaties: [],
  },
  rochefort: {
    slug: "rochefort",
    title: "Rochefort et Han-sur-Lesse : déshumidificateur | Vernast",
    description:
      "Location de déshumidificateur à Rochefort, Han-sur-Lesse ou Jemelle : maisons en pierre sur la Lesse et la Lomme, en Famenne. Livré, installé et réglé.",
    h1: "Location de déshumidificateur à Rochefort",
    kicker: "Province de Namur · Famenne, Lesse et Lomme",
    rit: { afstand: "environ 155 km", tijd: "un peu plus d'une heure et demie" },
    intro: [
      "Rochefort se trouve **en Famenne, sur la Lomme**. Hors de la région, on connaît la ville pour **les grottes de Han** à Han-sur-Lesse et pour **l'abbaye Saint-Remy**, où les trappistes brassent la bière Rochefort. La commune comprend aussi Jemelle, Éprave, Lessive, Wavreille et Villers-sur-Lesse.",
      "Les grottes se trouvent dans **une bande de calcaire**, où la Lesse disparaît en partie sous terre. Tout autour s'étend **le sol lourd et argileux de la Famenne**, et la Lesse comme la Lomme peuvent sortir de leur lit après de fortes pluies. Depuis Aartselaar, notre camionnette y arrive en un peu plus d'une heure et demie.",
    ],
    bouw: {
      kop: "Maisons au bord de l'eau et sur sol argileux",
      alineas: [
        "**Le long de la Lomme dans le centre et le long de la Lesse à Han**, de vieilles maisons en pierre se trouvent près de l'eau. Après une inondation, un tel rez-de-chaussée ou une telle cave doit sécher à fond. Retirez d'abord l'eau et la boue : **un déshumidificateur sert à l'humidité des murs et du sol**, pas à l'eau qui stagne encore par terre.",
        "Rochefort vit en grande partie **du tourisme**, avec des hôtels, des chambres d'hôtes et des maisons de vacances. Les exploitants rénovent généralement **hors saison**, et une chambre doit alors être sèche avant l'arrivée des premiers hôtes. Sur le sol argileux de la Famenne, un sol ou une cave sèche en outre plus lentement que sur du sable.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Après une inondation au bord de la Lomme ou de la Lesse** : avec 110 litres par jour, il retire la plus grande partie de l'humidité d'un rez-de-chaussée avant qu'elle ne pénètre profondément dans les murs." },
      { key: "radiaal2250", waarom: "Pour une cave ou un sol qui a été sous eau : le ventilateur radial souffle de façon ciblée sur le sol et dans les coins, où l'eau reste le plus longtemps." },
      { key: "ttk170", waarom: "**Pour une chambre d'hôtes rénovée entre deux saisons** : compact et sur une prise standard." },
      { key: "ttk350", waarom: "Pour une maison sur l'argile de la Famenne avec une nouvelle chape ou un nouveau plafonnage : 70 litres par jour et une portée jusqu'à environ 400 m³." },
    ],
    levering: {
      kop: "Livraison à Rochefort : l'E411 jusqu'en Famenne",
      alinea:
        "Rochefort se trouve **tout près de l'E411**, ce qui rend le trajet prévisible : un peu plus d'une heure et demie depuis Aartselaar. Vous choisissez une date de livraison lors de la réservation, et nous convenons avec vous de l'heure d'installation sur rendez-vous. Après une inondation, **indiquez-nous la hauteur atteinte par l'eau**, pour que le technicien apporte en une fois les bons appareils.",
    },
    afhalen: {
      kop: "Enlèvement depuis Rochefort : plus de trois heures de route",
      alinea:
        "L'aller-retour jusqu'à Aartselaar vous prend **plus de trois heures**. Pour un exploitant qui doit de toute façon aller à Anvers ou à Bruxelles, cela peut convenir. Après une inondation, la livraison est le meilleur choix : vous restez sur place et le technicien mesure tout de suite l'humidité des murs.",
    },
    buren: ["ciney", "houyet", "beauraing", "somme-leuze"],
    faq: [
      {
        q: "Notre maison au bord de la Lomme a été inondée. Quand le déshumidificateur peut-il être installé ?",
        a: "Dès que l'eau stagnante et la boue ont été retirées, même si les murs et le sol sont encore trempés. Plus vous commencez tôt, moins l'humidité pénètre profondément dans la maçonnerie. Indiquez lors de la réservation la hauteur atteinte par l'eau, et nous composerons la bonne combinaison.",
      },
      {
        q: "Nous rénovons des chambres d'hôtes hors saison. Comment planifier le séchage ?",
        a: "Planifiez le séchage entre le plafonneur et le peintre. Un déshumidificateur par chambre ou par étage, portes fermées, est le plus rapide. À la reprise, le technicien mesure l'humidité résiduelle, pour que vous sachiez si le peintre peut commencer.",
      },
      {
        q: "Livrez-vous aussi à Han-sur-Lesse et à Jemelle ?",
        a: "Oui, les deux font partie de Rochefort et sont compris dans la même livraison, tout comme Éprave, Wavreille et les autres villages. À Han, il y a beaucoup de monde pendant la saison touristique : indiquez donc un endroit où la camionnette peut s'arrêter un moment.",
      },
      {
        q: "Faut-il faire contrôler l'électricité après une inondation ?",
        a: "Oui, si des prises ou le tableau électrique ont été sous eau. Faites contrôler l'installation par un électricien avant de brancher les appareils. Un déshumidificateur et un ventilateur tournent sans interruption pendant des jours, ce qui demande un raccordement sûr et sec.",
      },
    ],
    realisaties: [],
  },
  "somme-leuze": {
    slug: "somme-leuze",
    title: "Déshumidificateur à louer à Somme-Leuze et Noiseux | Vernast",
    description:
      "Location de déshumidificateur à Somme-Leuze, Baillonville, Noiseux ou Sinsin : maisons sur le sol lourd de la Famenne et au bord de l'Ourthe. Livré et installé.",
    h1: "Location de déshumidificateur à Somme-Leuze",
    kicker: "Province de Namur · entre Condroz et Famenne",
    rit: { afstand: "environ 145 km", tijd: "un peu plus d'une heure et demie" },
    intro: [
      "Somme-Leuze se trouve **à la transition entre le Condroz et la Famenne**, à l'est de la province de Namur. La commune comprend Baillonville, Bonsin, Heure, Hogne, Nettinne, Noiseux, Sinsin et Waillet, des villages entre champs, prairies et bois.",
      "Au nord, on voit encore les crêtes et les vallons du Condroz. Vers le sud, le paysage devient plus plat et **le sol plus lourd** : c'est là que commence la Famenne. **Noiseux** se trouve dans l'étroite vallée de l'Ourthe. Depuis Aartselaar, il nous faut un peu plus d'une heure et demie pour y arriver.",
    ],
    bouw: {
      kop: "Sol lourd, une rivière et des secondes résidences dans la verdure",
      alineas: [
        "**La Famenne a un sol argileux et peu perméable.** L'eau de pluie s'y infiltre lentement, si bien qu'une cave ou un sol posé à même la terre reste longtemps humide. Qui rénove ici ou coule un nouveau sol sèche donc l'eau de gâchage contre un sous-sol humide. Une mesure au démarrage donne alors un point de repère.",
        "Le long de l'Ourthe et dans les parties boisées se trouvent **des maisons de vacances et des secondes résidences**. Elles restent vides et non chauffées tout l'hiver, et au printemps, elles sentent le renfermé. Si vous faites **tourner un déshumidificateur quelques semaines** avant le début de la saison, l'humidité quitte les murs, les matelas et les armoires avant l'apparition de moisissures.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**Pour une maison de vacances restée vide tout l'hiver** : le déshumidificateur à adsorption sèche même dans une pièce froide, sans que vous deviez d'abord chauffer." },
      { key: "ttk350", waarom: "Pour une rénovation sur le sol lourd de la Famenne : 70 litres par jour et une portée jusqu'à environ 400 m³, suffisant pour un rez-de-chaussée." },
      { key: "radiaal2250", waarom: "**Sur un sol au-dessus d'une terre humide**, ce ventilateur radial souffle de façon ciblée sur la surface et dans les coins, où l'humidité reste le plus longtemps." },
      { key: "ttk170", waarom: "Pour un chalet ou une petite maison de vacances : compact, 0,75 kW sur une prise standard et facile à mettre dans la voiture." },
    ],
    levering: {
      kop: "Livraison à Somme-Leuze : un long trajet, bien planifié",
      alinea:
        "Nous prenons l'E411 jusqu'au-delà de Namur, puis encore un bon bout de route vers Marche-en-Famenne, en tout **un peu plus d'une heure et demie**. C'est pourquoi **nous planifions ici les livraisons par région**. Vous choisissez une date de livraison lors de la réservation, et nous convenons de l'heure sur rendez-vous. Si vous n'êtes pas vous-même dans la maison de vacances, prévoyez à l'avance comment le technicien pourra entrer.",
    },
    afhalen: {
      kop: "Venir chercher à Aartselaar vaut rarement la peine depuis Somme-Leuze",
      alinea:
        "L'aller-retour jusqu'à notre point d'enlèvement représente **plus de trois heures de route**. Si vous habitez en Flandre et avez une seconde résidence ici, l'enlèvement peut toutefois convenir : vous prenez l'appareil en route pour le week-end. Transportez toujours un déshumidificateur debout.",
    },
    buren: ["havelange", "ciney", "rochefort"],
    faq: [
      {
        q: "Notre maison de vacances sent le renfermé après l'hiver. Un déshumidificateur aide-t-il ?",
        a: "Oui, s'il s'agit d'humidité accumulée dans un logement fermé et non chauffé. Faites tourner le déshumidificateur quelques semaines, fenêtres et portes fermées. Un déshumidificateur à adsorption fonctionne même s'il fait encore froid à l'intérieur. Les moisissures déjà présentes sur les murs doivent être traitées séparément.",
      },
      {
        q: "Puis-je louer un déshumidificateur si je ne suis pas moi-même sur place ?",
        a: "C'est possible, à condition que le technicien puisse entrer et qu'il y ait du courant. Convenez lors de la réservation de la façon dont il aura accès, par exemple via un voisin ou une boîte à clés. La reprise se déroule de la même manière.",
      },
      {
        q: "Pourquoi une cave en Famenne reste-t-elle si longtemps humide ?",
        a: "Le sol y est argileux et laisse mal passer l'eau. Après une période humide, l'eau reste autour de la cave et l'humidité traverse les murs. Un déshumidificateur élimine l'humidité de construction et l'humidité accumulée, mais ne résout pas un problème d'eau structurel.",
      },
      {
        q: "Livrez-vous aussi à Noiseux, au bord de l'Ourthe ?",
        a: "Oui, Noiseux fait partie de Somme-Leuze et est compris dans la même livraison. Dans la vallée, les routes sont étroites et parfois raides. Indiquez donc lors de la réservation si la camionnette peut aller jusqu'au logement.",
      },
    ],
    realisaties: [],
  },
  "vresse-sur-semois": {
    slug: "vresse-sur-semois",
    title: "Vresse-sur-Semois : location de déshumidificateur | Vernast",
    description:
      "Location de déshumidificateur à Vresse-sur-Semois, Alle, Bohan ou Laforêt : maisons et gîtes dans les méandres de la Semois. Livré et installé, après l'hiver.",
    h1: "Location de déshumidificateur à Vresse-sur-Semois",
    kicker: "Province de Namur · la vallée de la Semois",
    rit: { afstand: "environ 205 km", tijd: "un peu plus de deux heures" },
    intro: [
      "Vresse-sur-Semois se trouve **dans la vallée profonde et sinueuse de la Semois**, dans le coin le plus méridional de la province de Namur, contre la France. La commune comprend Alle, Bohan, Membre, Mouzaive, Laforêt, Orchimont, Sugny et Pussemange.",
      "La vallée a longtemps vécu de **la culture du tabac**, et dans les villages se dressent encore des **séchoirs à tabac** en bois. Aujourd'hui, la région vit surtout du **tourisme**, avec le kayak, la randonnée et de nombreuses maisons de vacances, campings et secondes résidences au bord de l'eau. Depuis Aartselaar, il nous faut un peu plus de deux heures pour y arriver.",
    ],
    bouw: {
      kop: "Maisons au bord de la rivière, sur le versant, et qui passent l'hiver vides",
      alineas: [
        "**Le long de la Semois**, des maisons se trouvent tout près de l'eau, dans une vallée où le brouillard et l'humidité persistent longtemps après le coucher du soleil. Après une crue, un rez-de-chaussée ou une cave doit sécher à fond. **Évacuez d'abord l'eau et la boue**, puis placez le déshumidificateur, car c'est lui qui retire l'humidité des murs et du sol.",
        "De nombreuses **maisons de vacances** restent par ailleurs fermées et froides tout l'hiver. Au printemps, **elles sentent le renfermé**, et textiles, matelas et armoires sont gorgés d'humidité. Une vieille maison **en schiste avec un toit d'ardoise** retient longtemps cette humidité. Faites tourner un déshumidificateur quelques semaines avant la saison, fenêtres et portes fermées, et le logement sera prêt pour les hôtes.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**Pour une maison de vacances qui a passé l'hiver sans chauffage** : le déshumidificateur à adsorption continue d'absorber l'humidité même dans un logement froid." },
      { key: "ttk650", waarom: "**Après une crue dans un rez-de-chaussée au bord de la Semois** : 110 litres par jour, pour que la plus grande partie de l'humidité soit partie avant de pénétrer profondément dans les murs." },
      { key: "radiaal2250", waarom: "Pour un sol qui a été sous eau : le ventilateur radial souffle de façon ciblée sur la surface et dans les coins, où l'humidité reste le plus longtemps." },
      { key: "ttk170", waarom: "Pour un petit gîte ou un studio au bord de l'eau : compact, 0,75 kW et sur une prise standard." },
    ],
    levering: {
      kop: "Livraison à Vresse-sur-Semois : notre coin le plus éloigné",
      alinea:
        "Vresse-sur-Semois est **l'une des adresses les plus éloignées où nous livrons** : un peu plus de deux heures depuis Aartselaar, avec pour finir les routes sinueuses qui descendent dans la vallée. C'est pourquoi **nous combinons les trajets vers l'Ardenne**. Vous choisissez une date de livraison lors de la réservation, et l'heure est fixée sur rendez-vous. Après une inondation, indiquez la hauteur atteinte par l'eau, pour que tout soit apporté en un seul trajet.",
    },
    afhalen: {
      kop: "L'enlèvement n'est intéressant qu'en route vers votre seconde résidence",
      alinea:
        "Depuis la vallée de la Semois, l'aller-retour jusqu'à Aartselaar représente **plus de quatre heures de route**. Pour un seul déshumidificateur, cela ne vaut pas la peine. Si vous habitez la région anversoise et avez une maison de vacances ici, vous mettez l'appareil dans le coffre et le transportez debout.",
    },
    buren: ["bievre", "gedinne"],
    faq: [
      {
        q: "Notre gîte au bord de la Semois doit être prêt pour les premiers hôtes. Quand commencer à sécher ?",
        a: "Commencez deux à trois semaines avant la première arrivée, et plus tôt si la maison est très humide après un hiver pluvieux. Faites tourner le déshumidificateur portes et fenêtres fermées, armoires et tiroirs ouverts. À la reprise, le technicien mesure à quel point les murs sont secs.",
      },
      {
        q: "L'eau de la Semois est entrée dans notre rez-de-chaussée. Par quoi commencer ?",
        a: "Évacuez d'abord l'eau et la boue, et faites contrôler l'électricité si elle a été sous eau. Commencez ensuite à sécher le plus vite possible, pour que l'humidité ne pénètre pas profondément dans les murs et le sol. Indiquez lors de la réservation jusqu'où l'eau est montée, et nous apporterons les bons appareils.",
      },
      {
        q: "Livrez-vous aussi à Alle, Bohan, Membre et Laforêt ?",
        a: "Oui, tous les villages de Vresse-sur-Semois sont compris dans notre livraison. Les routes de la vallée sont étroites et sinueuses. Signalez donc si la camionnette peut aller jusqu'à la maison, ou si le technicien doit faire le dernier bout avec un diable.",
      },
      {
        q: "Combien de temps dure le trajet d'Aartselaar à la vallée de la Semois ?",
        a: "Un peu plus de deux heures, par Bruxelles, Namur et l'E411, avec pour finir un tronçon de routes sinueuses. C'est l'un de nos trajets les plus longs. C'est pourquoi nous planifions ensemble les livraisons en Ardenne et fixons à l'avance avec vous le moment de livraison.",
      },
    ],
    realisaties: [],
  },
  yvoir: {
    slug: "yvoir",
    title: "Location de déshumidificateur à Yvoir et Godinne | Vernast",
    description:
      "Location de déshumidificateur à Yvoir, Godinne, Spontin ou Purnode : maisons au bord de la Meuse et du Bocq, fermes en pierre du plateau. Livré et installé.",
    h1: "Location de déshumidificateur à Yvoir",
    kicker: "Namur · là où le Bocq se jette dans la Meuse",
    rit: { afstand: "environ 105 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Yvoir se trouve **sur la Meuse, là où le Bocq s'y jette**. Le centre est dans la vallée, et Godinne aussi borde la Meuse. En remontant le Bocq vers l'intérieur des terres, on traverse Purnode et Spontin, où un château se dresse à côté de la rivière.",
      "Sur le plateau du Condroz se trouvent **Durnal, Dorinne, Evrehailles et Mont**, des villages avec beaucoup de maisons en pierre naturelle. De vieilles fermes, granges et étables y sont régulièrement transformées en habitations. Depuis Aartselaar, il nous faut un peu plus d'une heure pour rejoindre Yvoir.",
    ],
    bouw: {
      kop: "Berges basses sur la Meuse et le Bocq, fermes en calcaire",
      alineas: [
        "Dans les vallées de la Meuse et du Bocq, le rez-de-chaussée est bas et la nappe phréatique se trouve juste sous le sol. Après un hiver pluvieux, une cave ou un étage inférieur y est plus humide que le reste de la maison. Lors d'une rénovation, vous séchez là **des murs froids sans barrière d'humidité**. Un ventilateur qui chasse l'air humide de la paroi accélère le processus.",
        "Sur le plateau, il s'agit de volumes plus importants. Une ferme transformée reçoit souvent en même temps **une nouvelle dalle, une chape et du plafonnage**, derrière d'épais murs en calcaire qui libèrent lentement leur eau. Réglez l'hygrostat d'un grand appareil sur une valeur cible. Tout sèche ainsi uniformément et le plafonnage ne se fissure pas.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une ferme ou une grange du plateau qui devient habitation** : 110 litres par jour pour des volumes jusqu'à 600 m³." },
      { key: "ttv4500", waarom: "Évacue l'air humide le long d'un épais mur en calcaire, pour que toute la paroi sèche et qu'aucun coin humide ne subsiste." },
      { key: "revolution", waarom: "Pour **une cave basse dans la vallée du Bocq** qui reste fraîche même en été. Un déshumidificateur à adsorption y fonctionne mieux qu'un appareil à condensation." },
      { key: "ttk350", waarom: "Pour une maison à Godinne ou dans le centre d'Yvoir que vous rénovez étage par étage : 70 litres par jour, avec tuyau d'évacuation." },
    ],
    levering: {
      kop: "Livraison à Yvoir : le long de la Meuse ou par le plateau",
      alinea:
        "Nous passons par Namur, puis longeons la Meuse ou traversons le plateau, selon votre adresse. Vous choisissez **une date de livraison** lors de la réservation, et nous convenons avec vous de l'heure précise. Dans les vallées, certaines routes sont étroites et raides. Signalez à l'avance si la camionnette peut aller jusqu'à votre porte. Le technicien place les appareils par zone de séchage et note les valeurs d'humidité.",
    },
    afhalen: {
      kop: "Venir chercher soi-même : plus de route que de séchage",
      alinea:
        "Aartselaar se trouve à un peu plus d'une heure d'Yvoir. Ce trajet, vous le faites aller et retour, au début et au retour du matériel. Pour un seul appareil, cela peut valoir la peine si vous devez de toute façon aller vers Anvers. Pour une ferme avec plusieurs pièces, **la livraison est le choix logique**.",
    },
    buren: ["anhee", "dinant", "profondeville", "assesse"],
    faq: [
      {
        q: "Combien d'appareils faut-il pour une ferme transformée à Durnal ou à Spontin ?",
        a: "Cela dépend du volume et de la quantité de travaux humides effectués. Comptez un grand appareil par espace ouvert et un ventilateur là où se trouve la nouvelle chape. Indiquez lors de la réservation la surface et la hauteur sous plafond, et nous calculons l'installation à l'avance.",
      },
      {
        q: "Pourquoi ma cave au bord du Bocq reste-t-elle humide après le séchage ?",
        a: "Une cave si proche de la rivière reçoit de l'humidité de l'extérieur dès que la nappe phréatique monte. Un déshumidificateur élimine l'humidité de construction et garde la pièce utilisable. L'eau qui continue de traverser le mur se traite par l'extérieur. La mesure d'humidité montre lequel des deux est en jeu.",
      },
      {
        q: "À quelle vitesse sèche un mur en pierre naturelle après un nouvel enduit à la chaux ?",
        a: "Plus lentement qu'un mur intérieur en brique, car une paroi épaisse en calcaire retient beaucoup d'eau et la libère progressivement. Comptez plutôt en semaines qu'en jours. Réglez l'hygrostat sur une valeur cible et non au maximum, pour que le plafonnage ne sèche pas trop vite.",
      },
      {
        q: "Venez-vous aussi à Godinne et à Evrehailles ?",
        a: "Oui, nous livrons dans toutes les sections d'Yvoir, le long de la Meuse et sur le plateau. Si votre maison se trouve sur une route étroite ou raide, signalez-le lors de la réservation. Le technicien sait ainsi à l'avance où il peut décharger.",
      },
    ],
    realisaties: [],
  },
};
