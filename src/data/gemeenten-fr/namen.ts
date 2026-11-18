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
};
