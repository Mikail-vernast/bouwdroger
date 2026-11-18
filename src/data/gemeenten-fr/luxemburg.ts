import type { Gemeente } from "../gemeenten.js";

/**
 * De Franse teksten van de gemeentepagina's in deze provincie, gesleuteld op
 * de Nederlandse slug. Zie README.md in deze map voor de regels en hoe een
 * gemeente aangezet wordt (`aan/luxemburg.ts`).
 */
export const GEMEENTEN: Record<string, Gemeente> = {
  aarlen: {
    slug: "aarlen",
    title: "Location de déshumidificateur de chantier à Arlon | Vernast",
    description:
      "Location de déshumidificateur à Arlon : maisons bourgeoises de la vieille ville et constructions neuves dans les sections. Livraison, installation et reprise.",
    h1: "Location de déshumidificateur à Arlon",
    kicker: "Province de Luxembourg · le chef-lieu sur la colline",
    rit: { afstand: "environ 225 km", tijd: "un peu plus de deux heures" },
    intro: [
      "**Arlon** est le chef-lieu de la province belge de Luxembourg. La ville remonte à la localité romaine d'Orolaunum, sur la route de Reims à Trèves. À quelques endroits du centre, on voit encore des **vestiges romains**.",
      "La vieille ville est bâtie sur une colline autour de l'église Saint-Donat, avec des rues en pente raide. La commune comprend aussi **Autelbas, Bonnert, Guirsch, Heinsch et Toernich**. Beaucoup d'habitants travaillent au Grand-Duché, et on construit donc beaucoup dans ces sections. Depuis Aartselaar, il nous faut un peu plus de deux heures pour y arriver.",
    ],
    bouw: {
      kop: "Maisons bourgeoises sur la colline, lotissements pour les frontaliers",
      alineas: [
        "Dans la vieille ville se dressent des **maisons bourgeoises en pierre naturelle**, aux pièces hautes, avec une cave en partie creusée dans la pente. Qui divise une telle maison ou la fait replafonner doit sécher un grand volume entre des murs épais et froids. Face à une cave humide, vérifiez d'abord s'il s'agit d'humidité de construction ou d'eau qui continue d'arriver derrière le mur. Un déshumidificateur ne résout que la première.",
        "Dans les sections, de nouvelles maisons et des appartements sortent de terre. L'eau s'y trouve dans **la chape et le plafonnage**, alors que le poseur de sol et le peintre sont déjà planifiés. Arlon est en altitude et les hivers y sont froids. Un chantier non chauffé sèche alors lentement, à moins d'y ajouter de la chaleur.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une maison bourgeoise aux plafonds hauts** dans la vieille ville : 110 litres par jour, pour un volume jusqu'à environ 600 m³." },
      { key: "ttk350", waarom: "Pour **une maison neuve à Heinsch ou Toernich** avec une chape fraîche : 70 litres par jour, jusqu'à environ 400 m³." },
      { key: "teddh30", waarom: "**Pour un chantier d'hiver non chauffé** : ce chauffage électrique de 30 kW sur courant triphasé (400 V) porte la pièce au-dessus de 15 °C, pour qu'un déshumidificateur à condensation fonctionne bien." },
      { key: "revolution", waarom: "Pour **une cave froide côté colline** : un déshumidificateur à adsorption continue d'y absorber l'humidité, même là où un appareil à condensation s'arrête." },
    ],
    levering: {
      kop: "Livraison à Arlon : par l'E411 jusqu'à la frontière",
      alinea:
        "Il nous faut un peu plus de deux heures pour rejoindre Arlon, via Bruxelles, Namur et l'E411. Vous choisissez **une date de livraison** lors de la réservation, et comme Arlon est en Wallonie, nous convenons de l'heure avec vous. Si le bâtiment se trouve dans une rue en pente de la vieille ville, signalez-le à l'avance. Le technicien rentre les appareils et les installe par zone de séchage.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : une journée entière de route",
      alinea:
        "Depuis Arlon, l'aller-retour vous prend **plus de quatre heures**, sans compter les embouteillages autour de Bruxelles. Cela n'en vaut la peine que si vous passez de toute façon près d'Anvers. Dans tous les autres cas, mieux vaut la livraison : le technicien place alors immédiatement les appareils au bon endroit.",
    },
    buren: ["attert", "habay", "messancy"],
    faq: [
      {
        q: "Livrez-vous à Arlon en Belgique ou aussi au Grand-Duché ?",
        a: "Arlon est le chef-lieu de la province belge de Luxembourg, pas la ville de Luxembourg au Grand-Duché. Nous livrons à Arlon et dans toutes ses sections. Si votre chantier se trouve de l'autre côté de la frontière, contactez-nous d'abord.",
      },
      {
        q: "Arlon n'est-il pas trop loin pour faire livrer un déshumidificateur ?",
        a: "C'est un long trajet de plus de deux heures, mais nous y livrons bel et bien. Lors de la réservation, vous choisissez une date de livraison, et nous fixons l'heure ensemble. Le technicien installe et règle les appareils, comme plus près d'Anvers.",
      },
      {
        q: "Un déshumidificateur fonctionne-t-il pendant un hiver froid à Arlon ?",
        a: "Un déshumidificateur à condensation fonctionne bien au-dessus d'environ 15 °C. Sur un chantier non chauffé, la température descend en hiver bien en dessous. Ajoutez alors un chauffage de chantier électrique, ou choisissez un déshumidificateur à adsorption, qui continue d'absorber l'humidité dans le froid.",
      },
      {
        q: "Ma cave dans la vieille ville reste humide après la rénovation. Que faire ?",
        a: "Cherchez d'abord d'où vient l'humidité. L'humidité de construction d'un nouveau plafonnage disparaît avec un déshumidificateur et la porte fermée. Si de l'eau traverse le mur côté colline, elle revient après chaque période de pluie et un déshumidificateur n'aide que temporairement.",
      },
    ],
    realisaties: [],
  },
  bastenaken: {
    slug: "bastenaken",
    title: "Déshumidificateur à louer à Bastogne et Bertogne | Vernast",
    description:
      "Location de déshumidificateur à Bastogne et Bertogne : neuf et rénovation sur le plateau ardennais froid, chauffage si besoin et mesure d'humidité au départ.",
    h1: "Location de déshumidificateur à Bastogne",
    kicker: "Province de Luxembourg · ville du plateau ardennais",
    rit: { afstand: "environ 210 km", tijd: "un peu plus de deux heures" },
    intro: [
      "**Bastogne** se trouve sur le haut plateau ardennais, à quelque 500 mètres d'altitude. La ville est connue dans le monde entier pour **la bataille des Ardennes** de l'hiver 1944. À sa périphérie se dressent le Mémorial du Mardasson et le Bastogne War Museum. Depuis notre entrepôt d'Aartselaar, il nous faut un peu plus de deux heures pour y arriver.",
      "Depuis 2025, **Bertogne** fait aussi partie de la commune, avec des villages comme Longchamps, Flamierge et Givry. Dans le centre, on trouve des maisons mitoyennes et des commerces. Autour s'étendent des fermes, des lotissements et des constructions neuves sur des terres ouvertes et venteuses.",
    ],
    bouw: {
      kop: "Construire là où l'hiver commence tôt",
      alineas: [
        "À cette altitude, **il gèle plus souvent et plus longtemps** qu'à l'intérieur du pays, et la neige en mars n'est pas rare. L'air froid absorbe peu d'humidité, et un déshumidificateur à condensation a besoin de plus de 15 °C pour bien fonctionner. Un gros œuvre qui entre dans l'hiver ne sèche donc presque pas sans chauffage d'appoint. Si vous coulez une chape ici en automne, prévoyez **un chauffage à côté du déshumidificateur**.",
        "Les maisons anciennes du centre et des villages sont bâties en **pierre naturelle**, avec des murs épais qui retiennent longtemps l'eau. Lors d'une rénovation avec un nouvel enduit ou un nouveau sol, le technicien mesure d'abord l'humidité du mur lui-même. Vous savez ainsi quelle humidité vient des travaux et laquelle le mur porte déjà depuis des années.",
      ],
    },
    toestellen: [
      { key: "teddh30", waarom: "**Pour un gros œuvre qui passe l'hiver sur le plateau.** Le chauffage de 30 kW amène un bâtiment brut et froid à une température qui permet le séchage. Il fonctionne en 400 V : vérifiez qu'il y a du courant triphasé sur le chantier." },
      { key: "ttk650", waarom: "Pour une maison neuve avec une chape sur tout le rez-de-chaussée : 110 litres par jour, pour des volumes jusqu'à environ 600 m³." },
      { key: "revolution", waarom: "Pour **une cave en pierre ou une ferme non chauffée à Bertogne**. Un déshumidificateur à adsorption continue d'absorber l'humidité même dans une pièce froide." },
      { key: "ttk350", waarom: "Pour une maison du centre rénovée étage par étage : 70 litres par jour, pour des volumes jusqu'à environ 400 m³." },
    ],
    levering: {
      kop: "Livraison à Bastogne sur rendez-vous",
      alinea:
        "Depuis Aartselaar, il faut **un peu plus de deux heures de route**. En Wallonie, nous livrons sur rendez-vous : vous choisissez une **date de livraison** lors de la réservation et nous confirmons l'heure à l'avance. Le technicien place les appareils par zone de séchage, installe l'évacuation et note les valeurs d'humidité des murs et du sol. La reprise se fait ainsi sur la base d'une mesure.",
    },
    afhalen: {
      kop: "Venir chercher le matériel depuis Bastogne",
      alinea:
        "Pour l'aller-retour jusqu'à notre entrepôt, comptez **plus de quatre heures** de route, et autant pour rapporter le matériel. Venir le chercher n'est donc intéressant que si vous devez de toute façon passer près d'Anvers. Si vous avez aussi besoin d'un chauffage, choisissez la livraison : il fonctionne en 400 V et le technicien vérifie le raccordement sur place.",
    },
    buren: ["houffalize", "gouvy", "vaux-sur-sure", "sainte-ode"],
    faq: [
      {
        q: "Un déshumidificateur fonctionne-t-il en hiver dans un gros œuvre non chauffé à Bastogne ?",
        a: "Dans une pièce glaciale, seul un déshumidificateur à adsorption garde un rendement correct. Un appareil à condensation a besoin de chaleur. Pendant les mois froids, nous ajoutons donc un chauffage, ou vous réchauffez d'abord la pièce avant que le déshumidificateur ne démarre.",
      },
      {
        q: "Livrez-vous aussi à Bertogne, désormais rattachée à Bastogne ?",
        a: "Oui. Depuis la fusion de 2025, Bertogne, Longchamps, Flamierge et les autres villages font partie de Bastogne, et nous y livrons de la même manière. Indiquez lors de la réservation l'adresse complète avec le nom du village, et nous planifierons correctement l'itinéraire.",
      },
      {
        q: "Avons-nous besoin de courant triphasé pour le chauffage ?",
        a: "Pour le chauffage de 30 kW, oui, car il fonctionne en 400 V. Beaucoup de chantiers disposent d'un coffret de chantier avec ce raccordement. S'il n'y a qu'une prise ordinaire, signalez-le à l'avance. Nous composerons alors une installation qui fonctionne avec celle-ci.",
      },
      {
        q: "Ma maison est construite en pierre naturelle. Combien de temps un nouvel enduit doit-il sécher ?",
        a: "Plus longtemps que sur un mur en brique, car le mur épais en pierre retient lui-même l'humidité et la libère lentement. Comptez plutôt en semaines qu'en jours. La mesure au démarrage et à la reprise montre si c'est l'enduit qui sèche ou le mur derrière.",
      },
      {
        q: "Je ne suis pas sur le chantier pendant la location. Qui suit les appareils ?",
        a: "Indiquez-le-nous lors de la réservation : la personne qui suit les appareils pendant la location si vous n'êtes pas vous-même sur le chantier, par exemple votre entrepreneur ou un voisin. Pour toute question, n'hésitez pas à nous écrire ou à nous appeler.",
      },
    ],
    realisaties: [],
  },
  durbuy: {
    slug: "durbuy",
    title: "Déshumidificateur à louer à Durbuy et Barvaux | Vernast",
    description:
      "Location de déshumidificateur à Durbuy, Barvaux, Bomal ou Wéris, aussi pour une seconde résidence ou un gîte. Livraison sur rendez-vous et mesure d'humidité.",
    h1: "Location de déshumidificateur à Durbuy",
    kicker: "Province de Luxembourg · la petite ville au bord de l'Ourthe",
    rit: { afstand: "environ 155 km", tijd: "près de deux heures" },
    intro: [
      "Le vieux Durbuy est **une petite ville au bord de l'Ourthe**, avec des ruelles étroites en pierre naturelle, un château et de nombreux restaurants et hébergements. La commune s'étend au-delà de ce centre : Barvaux, Bomal, Grandhan, Septon, Tohogne, Villers-Sainte-Gertrude et Wéris en font aussi partie.",
      "À Bomal, l'Aisne se jette dans l'Ourthe, et autour de Wéris se dressent les célèbres mégalithes. Grâce au tourisme, la commune compte **beaucoup de gîtes et de secondes résidences**. Les propriétaires les rénovent généralement hors saison. Depuis Aartselaar, il nous faut près de deux heures pour y arriver.",
    ],
    bouw: {
      kop: "Maisons en pierre dans la vallée et gîtes inoccupés",
      alineas: [
        "Dans le centre et dans les villages le long de la rivière se dressent des **maisons en pierre naturelle sans barrière anti-humidité**. Lors d'une crue de l'Ourthe, les caves et les rez-de-chaussée situés plus bas peuvent être inondés. Il faut d'abord évacuer l'eau. Ensuite, le technicien vérifie si de l'humidité remonte encore du sol, et ce n'est qu'alors qu'il règle les appareils.",
        "Une maison de vacances qui reste vide et non chauffée tout l'hiver a des murs froids. Un plafonnage frais n'y sèche presque pas. Si vous rénovez entre deux saisons, la maison doit être sèche avant l'arrivée des premiers hôtes. **Un déshumidificateur accompagné d'un chauffage** et une mesure d'humidité à la reprise rendent ce planning réaliste.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Après des dégâts des eaux dans une maison au bord de l'Ourthe.** Avec 110 litres par jour, il retire l'essentiel de l'humidité avant qu'elle ne pénètre plus loin dans les murs." },
      { key: "radiaal2250", waarom: "Pour **un sol mouillé à Barvaux ou Bomal**. Il souffle 2 250 m³ d'air par heure, dirigés sur le carrelage et dans les coins, là où l'eau reste le plus longtemps." },
      { key: "ttk170", waarom: "**Pour un gîte ou un studio dans la vieille ville.** Assez compact pour une porte ou un escalier étroits, et adapté aux volumes jusqu'à 250 m³." },
      { key: "teddh20", waarom: "Remet à température une maison de vacances restée **non chauffée tout l'hiver**, pour que le déshumidificateur soit efficace. Ce chauffage demande un raccordement 400 V." },
    ],
    levering: {
      kop: "Livraison à Durbuy : un de nos plus longs trajets",
      alinea:
        "Durbuy est à **près de deux heures de route** d'Aartselaar. Nous regroupons les livraisons dans la vallée de l'Ourthe : vous choisissez une date de livraison et nous convenons de l'heure avec vous. Si vous n'habitez pas sur place, dites-nous **qui a la clé**. Le technicien installe les appareils, mesure et laisse une courte explication à la personne qui les suit.",
    },
    afhalen: {
      kop: "Venir chercher vous-même : une demi-journée aller-retour",
      alinea:
        "Depuis Durbuy, un aller-retour jusqu'à Aartselaar prend **près de quatre heures**. Si vous habitez en Flandre et que vous vous rendez de toute façon à votre seconde résidence, vous pouvez prendre l'appareil en chemin. Transportez toujours un déshumidificateur **debout**.",
    },
    buren: ["hotton", "erezee", "somme-leuze"],
    faq: [
      {
        q: "J'ai une seconde résidence à Durbuy mais j'habite en Flandre. Comment m'organiser ?",
        a: "Vous réservez vous-même et indiquez l'adresse de la maison à Durbuy, avec le nom de la personne qui ouvrira la porte sur place. Il peut s'agir d'un voisin, d'un entrepreneur ou d'un gestionnaire. Le technicien installe les appareils, mesure l'humidité et laisse des explications.",
      },
      {
        q: "Ma cave au bord de l'Ourthe a été inondée. Quand le déshumidificateur peut-il venir ?",
        a: "Dès que l'eau stagnante et la boue ont été évacuées. Un déshumidificateur sert à traiter l'humidité qui reste ensuite dans les murs et le sol. Indiquez lors de la réservation jusqu'à quelle hauteur l'eau est montée, et le technicien apportera un déshumidificateur et un ventilateur.",
      },
      {
        q: "Comment rendre un gîte sec pour la nouvelle saison après une rénovation ?",
        a: "Intégrez le séchage dans votre planning de rénovation au lieu d'en faire la dernière étape. Un plafonnage frais dans une maison froide demande vite deux à trois semaines, souvent moins avec un chauffage. La mesure à la reprise montre si le peintre peut commencer.",
      },
      {
        q: "Venez-vous aussi dans les villages plus élevés comme Wéris et Villers-Sainte-Gertrude ?",
        a: "Oui, nous livrons dans toute la commune de Durbuy, y compris dans les villages au-dessus de la vallée. Signalez lors de la réservation si votre maison se trouve sur un chemin raide ou non revêtu, pour que le technicien sache comment arriver jusqu'à la porte.",
      },
    ],
    realisaties: [],
  },
  hotton: {
    slug: "hotton",
    title: "Location de déshumidificateur à Hotton et Melreux | Vernast",
    description:
      "Location de déshumidificateur à Hotton, Melreux ou Hampteau, pour les maisons de la vallée de l'Ourthe et sur le calcaire. Livraison sur rendez-vous et mesure.",
    h1: "Location de déshumidificateur à Hotton",
    kicker: "Province de Luxembourg · vallée de l'Ourthe et grottes",
    rit: { afstand: "environ 160 km", tijd: "près de deux heures" },
    intro: [
      "Hotton se trouve **dans la vallée de l'Ourthe**, entre Durbuy et La Roche-en-Ardenne. Le village est surtout connu pour les grottes de Hotton, que l'eau a creusées dans le calcaire sous les collines. Depuis Aartselaar, il nous faut près de deux heures pour y arriver.",
      "Melreux, Hampteau et Fronville font aussi partie de la commune. On y trouve **d'anciens noyaux villageois en pierre naturelle** et de plus en plus de maisons neuves le long des routes vers Marche et Érezée.",
    ],
    bouw: {
      kop: "Du calcaire sous terre, la rivière dans la vallée",
      alineas: [
        "Le calcaire laisse passer l'eau. La pluie s'y infiltre et se fraie un chemin par les fissures et les cavités, comme le montrent les grottes. Dans une maison à flanc de colline, **l'humidité entre donc parfois à un endroit inattendu**. Lors de l'installation, le technicien mesure où se trouve l'humidité et y place le déshumidificateur.",
        "En bas dans la vallée, près de l'Ourthe, les caves et les rez-de-chaussée peuvent être inondés lors des crues. Les vieilles maisons en pierre naturelle sans barrière anti-humidité rendent cette eau lentement. Après la remise en état, **un ventilateur dirigé vers le mur le plus humide** aide à en chasser l'air humide.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison de village à Hotton ou Melreux** que vous rénovez étage par étage : 70 litres par jour, pour des volumes jusqu'à 400 m³." },
      { key: "ttv4500", waarom: "Chasse **la couche d'air humide d'un épais mur en calcaire**, pour que le déshumidificateur absorbe l'humidité plus vite." },
      { key: "ttk650", waarom: "**Après une crue dans une maison proche de l'Ourthe.** Avec 110 litres par jour et une portée jusqu'à 600 m³, il couvre un rez-de-chaussée complet." },
      { key: "revolution", waarom: "Pour **un plancher flottant ou une paroi isolée** qui a pris l'eau. Il souffle de l'air sec par des tuyaux sous le sol ou derrière la paroi, sans que vous deviez démolir quoi que ce soit." },
    ],
    levering: {
      kop: "Livraison à Hotton : par la Famenne jusqu'à la vallée de l'Ourthe",
      alinea:
        "Notre itinéraire passe par l'E411 et la N4 jusqu'à Marche, d'où nous descendons vers l'Ourthe. Comptez **près de deux heures** depuis Aartselaar. Lors de la réservation, vous choisissez la date de livraison ; nous fixons l'heure ensemble. Le technicien installe et règle les appareils et **mesure l'humidité au démarrage**, pour que vous puissiez comparer à la reprise.",
    },
    afhalen: {
      kop: "L'enlèvement est possible, mais le trajet est long",
      alinea:
        "Pour aller jusqu'à notre point d'enlèvement à Aartselaar et revenir, vous êtes **près de quatre heures** sur la route depuis Hotton. Cela n'en vaut la peine que si vous devez de toute façon passer près d'Anvers. Sinon, une livraison est plus simple, avec l'installation et la mesure comprises.",
    },
    buren: ["durbuy", "erezee", "marche-en-famenne", "rendeux"],
    faq: [
      {
        q: "Ma maison est bâtie sur du calcaire. Pourquoi l'humidité traverse-t-elle le mur arrière ?",
        a: "Le calcaire laisse passer l'eau par ses fissures, et sur une pente cette eau s'écoule vers le mur le plus bas. Ce n'est pas de l'humidité de construction mais de l'humidité venant de l'extérieur. Un déshumidificateur aide après une rénovation, mais contre une eau qui revient sans cesse, il faut un drainage ou une barrière anti-humidité.",
      },
      {
        q: "Travaillez-vous aussi à Melreux et Hampteau ?",
        a: "Oui, ces villages font partie de Hotton et nous y livrons, comme dans le reste de la commune. Indiquez lors de la réservation si votre maison est au bord de la rivière ou plus haut, car cela détermine les appareils qu'apporte le technicien.",
      },
      {
        q: "Combien de temps un déshumidificateur reste-t-il après une crue de l'Ourthe ?",
        a: "Cela dépend de la hauteur de l'eau et de la durée de l'inondation. Un carrelage sur chape et des murs mouillés jusqu'à hauteur de genou demandent souvent deux à quatre semaines. Le technicien mesure au démarrage et à la reprise, pour que vous sachiez quand les réparations ont du sens.",
      },
      {
        q: "Dois-je être présent quand le technicien vient ?",
        a: "Quelqu'un doit ouvrir la porte et montrer où se trouve l'humidité. Pas forcément vous : un entrepreneur ou un voisin peut s'en charger. Comme nous convenons de l'heure avec vous à l'avance, personne ne doit attendre toute la journée.",
      },
    ],
    realisaties: [],
  },
  "la-roche-en-ardenne": {
    slug: "la-roche-en-ardenne",
    title: "La Roche-en-Ardenne : déshumidificateur à louer | Vernast",
    description:
      "Location de déshumidificateur à La Roche-en-Ardenne, Samrée ou Ortho, pour les maisons de la boucle de l'Ourthe et les logements froids du plateau.",
    h1: "Location de déshumidificateur à La Roche-en-Ardenne",
    kicker: "Province de Luxembourg · la petite ville dans la boucle de l'Ourthe",
    rit: { afstand: "environ 175 km", tijd: "environ deux heures" },
    intro: [
      "La Roche-en-Ardenne se niche **dans une boucle profonde de l'Ourthe**, entre des versants boisés et escarpés. Au-dessus des maisons, les ruines du château se dressent sur un éperon rocheux. La petite ville vit du tourisme, avec des hôtels, des campings, des gîtes et des secondes résidences. Depuis Aartselaar, il faut environ deux heures de route.",
      "Hors de la vallée, Samrée, Hives, Beausaint et Ortho font partie de la commune. Ces villages se trouvent **sur le haut plateau ardennais**, où d'anciennes fermes côtoient des maisons de vacances et où les hivers sont plus froids qu'en bas.",
    ],
    bouw: {
      kop: "Maisons contre la paroi rocheuse et logements froids sur le plateau",
      alineas: [
        "Dans la petite ville, des maisons en moellons sombres se serrent entre la rivière et le versant. Le niveau le plus bas se trouve souvent **contre la paroi rocheuse ou tout près de l'eau**. Quand l'Ourthe sort de son lit, les parties basses du centre sont inondées. Une telle maison doit sécher à fond avant les réparations.",
        "Sur le plateau, on rénove souvent **des maisons froides restées longtemps vides**. Dans une pièce non chauffée sous 15 °C, un déshumidificateur à condensation perd de son rendement. Avec un chauffage en plus ou un déshumidificateur à adsorption, le séchage continue aussi en hiver.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**Pour une pièce froide contre la paroi rocheuse.** Le déshumidificateur à adsorption continue d'absorber l'humidité à des températures où un appareil à condensation ne fait plus grand-chose." },
      { key: "ttk650", waarom: "**Après une crue dans une maison du centre.** Avec 110 litres par jour, il retire l'essentiel de l'humidité avant qu'elle ne pénètre dans les murs." },
      { key: "teddh30", waarom: "Pour **une maison de vacances à Samrée ou Hives** restée vide tout l'hiver : d'abord réchauffer, ensuite sécher. Il fonctionne sur courant triphasé 400 V." },
      { key: "radiaal2250", waarom: "Souffle **sur un sol mouillé dans une maison au bord de la rivière**, là où l'air stagnerait sinon. Il est protégé contre la poussière et les projections d'eau (IP55)." },
    ],
    levering: {
      kop: "Livraison à La Roche : environ deux heures par la N4",
      alinea:
        "Depuis Aartselaar, nous passons par l'E411 et la N4, puis descendons dans la vallée, **environ deux heures** au total. Nous regroupons les trajets vers l'Ardenne : vous choisissez une date de livraison et nous convenons de l'heure avec vous. Dans le centre, les rues sont étroites et il est difficile de se garer. **Signalez-le lors de la réservation**, pour que le technicien en tienne compte.",
    },
    afhalen: {
      kop: "Venir à Aartselaar depuis La Roche vous coûte une demi-journée",
      alinea:
        "L'aller-retour représente **environ quatre heures de route**. Cela n'en vaut la peine que si, en tant que propriétaire d'une seconde résidence, vous venez de toute façon de Flandre. Prenez alors l'appareil à l'aller et transportez-le debout.",
    },
    buren: ["rendeux", "manhay", "houffalize", "tenneville"],
    faq: [
      {
        q: "J'ai une maison de vacances à La Roche. Le déshumidificateur peut-il tourner en mon absence ?",
        a: "Oui. Un déshumidificateur de chantier fonctionne jour et nuit sans surveillance, et avec un tuyau d'évacuation vers un siphon de sol, personne ne doit vider de réservoir. Veillez toutefois à ce que quelqu'un laisse entrer le technicien et qu'une prise soit libre.",
      },
      {
        q: "Pourquoi ma maison dans la vallée sèche-t-elle si mal ?",
        a: "La vallée est étroite et le soleil y entre peu en hiver. Les maisons adossées au versant ont des murs froids et peu de circulation d'air. Ouvrir les fenêtres n'aide alors presque pas. Un déshumidificateur, fenêtres fermées, retire bel et bien l'humidité.",
      },
      {
        q: "Que faire si l'eau de l'Ourthe est entrée jusque dans mon rez-de-chaussée ?",
        a: "Faites d'abord évacuer l'eau et la boue, et ne remettez l'électricité qu'après contrôle par un électricien. Ensuite, le technicien vient avec un déshumidificateur et un ventilateur. Indiquez lors de la réservation jusqu'à quelle hauteur l'eau est montée.",
      },
      {
        q: "Livrez-vous aussi à Ortho et Beausaint, sur le plateau ?",
        a: "Oui, nous livrons dans tous les villages de La Roche-en-Ardenne. Sur le plateau, il fait plus froid en hiver. Si votre maison n'est pas chauffée, louez aussi un chauffage, sinon le plafonnage ne sèche presque pas.",
      },
    ],
    realisaties: [],
  },
  manhay: {
    slug: "manhay",
    title: "Location de déshumidificateur de chantier à Manhay | Vernast",
    description:
      "Location de déshumidificateur à Manhay, Dochamps ou Grandménil, pour les maisons froides du plateau ardennais. Livraison sur rendez-vous et mesure d'humidité.",
    h1: "Location de déshumidificateur à Manhay",
    kicker: "Province de Luxembourg · le haut plateau le long de l'E25",
    rit: { afstand: "environ 170 km", tijd: "près de deux heures" },
    intro: [
      "Manhay se trouve **sur le haut plateau ardennais**, dans le nord de la province de Luxembourg, à la limite de la province de Liège. L'E25 de Liège vers le sud traverse la commune. Depuis Aartselaar, nous y sommes en près de deux heures.",
      "Dochamps, Grandménil, Malempré, Odeigne, Vaux-Chavanne et Harre font partie de la commune. Ce sont de petits villages entre bois et prairies, avec **des fermes en moellons** et çà et là une maison de vacances. À cette altitude, les hivers sont longs et froids.",
    ],
    bouw: {
      kop: "En altitude, froid et souvent vide en hiver",
      alineas: [
        "Sur le haut plateau, il fait nettement plus froid qu'en Flandre. Une maison non chauffée y reste froide pendant des semaines en hiver, et un plafonnage frais ou une nouvelle chape ne sèchent alors presque pas. **Un déshumidificateur à condensation perd de son rendement sous 15 °C.** C'est pourquoi nous ajoutons souvent un chauffage ici, ou choisissons un déshumidificateur à adsorption.",
        "Beaucoup d'anciennes fermes ont **des murs épais en moellons** sans coulisse ni barrière anti-humidité. Si vous transformez une telle ferme en habitation ou en gîte, ce sont des murs froids et massifs qui doivent sécher. Cela prend plus de temps que dans une construction neuve. Une mesure d'humidité au démarrage montre votre point de départ.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**Pour une ferme froide sur le haut plateau.** Le déshumidificateur à adsorption continue de sécher à des températures où un appareil à condensation ne donne plus grand-chose." },
      { key: "teddh30", waarom: "Amène **une pièce non chauffée à Dochamps ou Odeigne** au-dessus de 15 °C, pour qu'un déshumidificateur à condensation puisse faire son travail. Il demande un raccordement 400 V." },
      { key: "ttk350", waarom: "Pour **une maison transformée avec une chape fraîche** au rez-de-chaussée : 70 litres par jour, pour des volumes jusqu'à 400 m³." },
      { key: "ttv4500", waarom: "Chasse **l'air humide d'un épais mur en moellons**, pour que l'humidité en sorte de manière plus uniforme." },
    ],
    levering: {
      kop: "Livraison à Manhay : par Liège et l'E25",
      alinea:
        "Nous passons par l'E313 jusqu'à Liège, puis prenons l'E25, soit **près de deux heures** depuis Aartselaar. Vous choisissez vous-même la date de livraison lors de la réservation, et nous convenons ensuite de l'heure exacte. Si votre maison se trouve sur **un chemin forestier ou une allée non revêtue**, signalez-le, pour que le technicien sache s'il peut rouler jusqu'à la porte.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : près de quatre heures aller-retour",
      alinea:
        "Depuis Manhay, un enlèvement vous coûte **une demi-journée**. Si vous venez de toute façon de Flandre vers une seconde résidence en Ardenne, vous pouvez prendre l'appareil à l'aller. Pensez alors aussi à un chauffage, car sans chaleur le séchage est lent ici.",
    },
    buren: ["erezee", "la-roche-en-ardenne", "houffalize"],
    faq: [
      {
        q: "Un déshumidificateur fonctionne-t-il vraiment pendant le froid hiver ardennais ?",
        a: "Un déshumidificateur à condensation perd nettement de son rendement sous 15 °C, et une maison non chauffée à Manhay est souvent sous cette limite en hiver. Nous ajoutons donc un chauffage, ou choisissons un déshumidificateur à adsorption qui continue de fonctionner dans le froid.",
      },
      {
        q: "Combien de temps faut-il pour sécher une ancienne ferme en moellons ?",
        a: "Plus longtemps qu'une construction neuve, car les murs épais en pierre rendent leur eau lentement et il fait froid ici. Comptez plutôt en semaines qu'en jours. Une mesure au démarrage et à la reprise montre les progrès et indique si la finition peut commencer.",
      },
      {
        q: "Manhay n'est-il pas trop loin pour une livraison ?",
        a: "C'est un de nos longs trajets, près de deux heures aller simple par Liège et l'E25. Nous regroupons donc la livraison avec d'autres adresses en Ardenne et convenons du moment avec vous. La méthode reste la même : installation, mesure et reprise.",
      },
      {
        q: "Le déshumidificateur peut-il rester allumé si la maison est inoccupée ?",
        a: "Oui. Raccordez le tuyau d'évacuation à un égout ou à un siphon de sol : l'eau s'écoule et personne ne doit vider de réservoir. Si vous louez aussi un chauffage, vérifiez à l'avance qu'il y a un raccordement 400 V, car ce chauffage ne fonctionne pas sur une prise ordinaire.",
      },
    ],
    realisaties: [],
  },
  "marche-en-famenne": {
    slug: "marche-en-famenne",
    title: "Déshumidificateur de chantier à Marche-en-Famenne | Vernast",
    description:
      "Location de déshumidificateur à Marche-en-Famenne, Marloie, Waha ou Aye ? Nous livrons sur rendez-vous, installons les appareils et mesurons l'humidité.",
    h1: "Location de déshumidificateur à Marche-en-Famenne",
    kicker: "Province de Luxembourg · la ville principale de la Famenne",
    rit: { afstand: "environ 150 km", tijd: "près de deux heures" },
    intro: [
      "Marche-en-Famenne est **la ville centrale de la Famenne**, la dépression entre le Condroz et l'Ardenne. La ville se trouve sur la N4 entre Namur et Arlon et compte des écoles, un hôpital et des zonings. Depuis Aartselaar, nous y sommes en près de deux heures.",
      "Marloie, Waha, Aye, Hargimont, On, Humain, Roy et Verdenne font aussi partie de la commune. Dans ces villages, **d'anciennes fermes en pierre naturelle** côtoient de nouveaux lotissements. Waha possède une église romane réputée.",
    ],
    bouw: {
      kop: "Sol lourd et murs épais en pierre naturelle",
      alineas: [
        "La Famenne repose sur **le schiste**, une roche qui s'altère en un sol lourd et peu perméable. L'eau de pluie s'y infiltre lentement, si bien que les caves et les vides sanitaires restent longtemps humides. Après une rénovation, vous voulez donc savoir si l'humidité vient du nouveau sol ou de l'extérieur. Le technicien le mesure lors de l'installation.",
        "Les anciennes fermes et maisons de village contiennent beaucoup de calcaire de la région. **Un mur épais en pierre** ne rend que lentement l'eau d'un nouveau plafonnage. Dans les quartiers neufs, il s'agit surtout de chape et d'enduit au plâtre qui doivent être secs avant que le poseur de sol ou le peintre ne commence.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison neuve en périphérie de Marche** avec une chape fraîche au rez-de-chaussée. Il retire jusqu'à 70 litres par jour de l'air dans des volumes jusqu'à 400 m³." },
      { key: "ttk650", waarom: "Pour **une ferme transformée à Aye ou Waha** où plusieurs pièces sèchent en même temps : 110 litres par jour, pour des volumes jusqu'à 600 m³." },
      { key: "revolution", waarom: "**Pour un vide sanitaire humide.** Le déshumidificateur à adsorption reste à l'extérieur de l'espace et souffle de l'air sec par des tuyaux là où aucun appareil ordinaire ne passe." },
      { key: "teddh30", waarom: "Amène **une ferme non chauffée** au-dessus de 15 °C en hiver, pour que le déshumidificateur à condensation puisse faire son travail. Ce chauffage demande un raccordement 400 V." },
    ],
    levering: {
      kop: "Livraison à Marche : par l'E411 et la N4",
      alinea:
        "Nous passons par Bruxelles et l'E411 jusqu'à Namur, puis prenons la N4 vers le sud. Cela représente **près de deux heures de route**, c'est pourquoi nous regroupons les trajets vers la Famenne. Vous choisissez une date de livraison lors de la réservation et nous convenons de l'heure avec vous. Le technicien place les appareils pièce par pièce, mesure l'humidité au démarrage et vous montre comment contrôler le tuyau d'évacuation.",
    },
    afhalen: {
      kop: "Venir à Aartselaar depuis Marche en vaut rarement la peine",
      alinea:
        "Aller-retour, vous êtes **près de quatre heures sur la route**, sans embouteillages. Pour un seul appareil, cela vous coûte une demi-journée de travail. Avec une livraison, vous bénéficiez en outre de l'installation et de la mesure d'humidité.",
    },
    buren: ["hotton", "nassogne", "rochefort", "somme-leuze"],
    faq: [
      {
        q: "Pourquoi ma cave en Famenne reste-t-elle humide si longtemps ?",
        a: "La Famenne repose sur du schiste qui s'altère en un sol lourd et compact. L'eau s'y infiltre lentement et reste contre les murs de cave et sous les sols. Un déshumidificateur retire l'humidité de construction d'un nouveau sol ou d'un nouveau plafonnage, mais il ne règle pas durablement l'humidité qui revient sans cesse de l'extérieur.",
      },
      {
        q: "Livrez-vous aussi à Marloie, Hargimont et On ?",
        a: "Oui, nous livrons dans toutes les sections de Marche-en-Famenne. Indiquez l'adresse complète lors de la réservation et signalez une allée étroite ou un porche de ferme bas. Le technicien sait alors à l'avance où il peut décharger.",
      },
      {
        q: "Comment sécher une ferme transformée en pierre naturelle ?",
        a: "Gardez les fenêtres fermées, placez un déshumidificateur dans la plus grande pièce et éventuellement un second dans la pièce la plus éloignée. Un mur épais en calcaire rend son eau lentement, comptez donc quelques semaines. La mesure au démarrage sert de point de comparaison à la reprise.",
      },
      {
        q: "Marche n'est-il pas trop loin pour un déshumidificateur venant de la province d'Anvers ?",
        a: "C'est un de nos plus longs trajets, près de deux heures aller simple. Nous planifions donc ensemble les livraisons en Famenne et convenons du moment de livraison avec vous. La méthode reste la même : installation, mesure d'humidité au démarrage et reprise.",
      },
    ],
    realisaties: [],
  },
  nassogne: {
    slug: "nassogne",
    title: "Louer un déshumidificateur à Nassogne et Forrières | Vernast",
    description:
      "Location de déshumidificateur à Nassogne, Forrières, Ambly ou Bande, pour les maisons entre la Famenne et les forêts ardennaises. Livraison sur rendez-vous.",
    h1: "Location de déshumidificateur à Nassogne",
    kicker: "Province de Luxembourg · là où la Famenne rejoint l'Ardenne",
    rit: { afstand: "environ 160 km", tijd: "près de deux heures" },
    intro: [
      "Nassogne se trouve **à la transition entre la Famenne et l'Ardenne**. Le nord, autour de Forrières et d'Ambly, appartient à la dépression ouverte. Vers le sud, le terrain monte et les vastes forêts commencent en direction de Saint-Hubert. Depuis Aartselaar, il nous faut près de deux heures pour y arriver.",
      "Bande, Grune, Harsin, Lesterny et Masbourg font aussi partie de la commune. Dans ces villages ruraux se dressent **des fermes et des maisons de village en pierre naturelle**, et dans les parties boisées aussi des maisons de vacances et des chalets.",
    ],
    bouw: {
      kop: "Maisons de village à la limite de deux sols",
      alineas: [
        "Au nord se trouve **le sol de schiste compact de la Famenne**, où l'eau s'infiltre lentement. Les caves et les vides sanitaires de Forrières et d'Ambly restent donc longtemps humides. Après une rénovation, le technicien mesure si l'humidité vient du nouveau sol ou du terrain en dessous.",
        "Plus haut, des maisons se trouvent en lisière de forêt, où le soleil entre peu. **Ces murs restent frais et humides**, et un chalet ou une annexe inoccupés n'y sèchent presque pas d'eux-mêmes. Un déshumidificateur à condensation avec un chauffage, ou un déshumidificateur à adsorption, y lance bel et bien le séchage.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison de village à Forrières ou Ambly** avec une nouvelle chape et un nouveau plafonnage : 70 litres par jour, pour des volumes jusqu'à 400 m³." },
      { key: "revolution", waarom: "**Pour un vide sanitaire sur sol de schiste** ou un sol isolé par en dessous. Il souffle de l'air sec par des tuyaux jusqu'à l'endroit où se trouve l'humidité." },
      { key: "ttk170", waarom: "Pour **un chalet ou une petite maison de vacances en lisière de forêt** : compact, avec une consommation de 0,75 kW, pour des volumes jusqu'à 250 m³." },
      { key: "teddh20", waarom: "Pour **une pièce fraîche à l'ombre de la forêt**. D'abord au-dessus de 15 °C, ensuite le déshumidificateur à condensation sèche comme il se doit. Il demande un raccordement 400 V." },
    ],
    levering: {
      kop: "Livraison à Nassogne : par la N4 et Marche",
      alinea:
        "Par l'E411 et la N4, nous roulons jusqu'à Marche, puis bifurquons vers le sud. Cela fait **près de deux heures** depuis Aartselaar. Après votre réservation avec date de livraison, nous convenons de l'heure avec vous. Le technicien place les appareils pièce par pièce, mesure au démarrage et pose **le tuyau d'évacuation pour que l'eau s'écoule d'elle-même**.",
    },
    afhalen: {
      kop: "Enlèvement depuis Nassogne : comptez une demi-journée",
      alinea:
        "Un aller-retour jusqu'à notre point d'enlèvement prend **près de quatre heures**. Pour un seul appareil, cela vaut rarement mieux qu'une livraison avec installation et mesure. Laissez-nous donc livrer, sauf si vous devez de toute façon aller vers Anvers.",
    },
    buren: ["marche-en-famenne", "rochefort", "tellin", "saint-hubert", "tenneville"],
    faq: [
      {
        q: "Mon chalet en lisière de forêt est toujours humide. Un déshumidificateur peut-il aider ?",
        a: "Un déshumidificateur retire l'humidité de l'air et des murs. À l'ombre de la forêt, elle revient toutefois vite si la maison reste ensuite non chauffée. Après une rénovation, un déshumidificateur aide donc, mais pour un confort durable, il faut du chauffage et de la ventilation.",
      },
      {
        q: "Livrez-vous dans tous les villages de Nassogne, y compris Masbourg et Grune ?",
        a: "Oui, nous livrons dans toutes les sections. Si votre adresse se trouve sur un chemin forestier ou dans une rue de village étroite, indiquez-le lors de la réservation. Le technicien sait ainsi par quelle route arriver et où décharger.",
      },
      {
        q: "Quel déshumidificateur choisir pour un vide sanitaire ?",
        a: "Un appareil ordinaire entre difficilement dans un vide sanitaire bas. Un déshumidificateur à adsorption reste à l'extérieur et y souffle de l'air sec par des tuyaux. Il fonctionne aussi à la basse température qui y règne généralement. Le technicien regarde sur place où placer au mieux les tuyaux.",
      },
      {
        q: "Mon entrepreneur ou un voisin peut-il accueillir le technicien à ma place ?",
        a: "Oui. Communiquez alors son nom et son numéro de téléphone lors de la réservation, pour que nous sachions qui est sur place. Pour toute autre question, n'hésitez pas à nous écrire ou à nous appeler.",
      },
    ],
    realisaties: [],
  },
  rendeux: {
    slug: "rendeux",
    title: "Rendeux et Marcourt : déshumidificateur à louer | Vernast",
    description:
      "Location de déshumidificateur à Rendeux, Marcourt ou Beffe, pour les maisons et gîtes de l'étroite vallée de l'Ourthe. Livraison sur rendez-vous.",
    h1: "Location de déshumidificateur à Rendeux",
    kicker: "Province de Luxembourg · l'étroite vallée de l'Ourthe",
    rit: { afstand: "environ 165 km", tijd: "près de deux heures" },
    intro: [
      "Rendeux se trouve **sur l'Ourthe, entre La Roche-en-Ardenne et Hotton**, là où la rivière serpente dans une vallée étroite et boisée. Les villages sont au pied de versants escarpés, souvent le long d'une seule route au bord de l'eau. Depuis Aartselaar, il faut près de deux heures de route.",
      "Marcourt, Beffe et Hodister font aussi partie de la commune. Vous y trouvez **des campings, des maisons de vacances et des secondes résidences**, à côté de maisons plus anciennes de familles qui y vivent depuis des générations.",
    ],
    bouw: {
      kop: "Des maisons entre la rivière et le versant",
      alineas: [
        "Dans une vallée étroite, l'eau vient de deux côtés : **de la rivière lors des crues** et du versant après une période pluvieuse. Les maisons le long de l'Ourthe ont donc parfois un rez-de-chaussée mouillé ou un mur arrière humide. Lors de l'installation, le technicien mesure quel mur est le plus humide et y place les appareils.",
        "Une maison de vacances fermée pendant des mois reçoit peu de soleil et d'air frais dans une telle vallée. Si vous la rénovez entre deux saisons, vous posez un nouveau plafonnage contre **des murs froids**, et il reste mouillé pendant des semaines. Avec un chauffage en plus et les fenêtres fermées, le séchage va nettement plus vite.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Après une crue dans une maison le long de l'Ourthe.** Avec 110 litres par jour, il retire l'humidité des murs et du sol avant les réparations." },
      { key: "radiaal2250", waarom: "Pour **un carrelage mouillé à Marcourt ou Rendeux**. Il envoie 2 250 m³ d'air par heure, dirigés sur le sol et dans les coins." },
      { key: "ttk170", waarom: "**Pour une petite maison de vacances ou un studio.** Assez compact pour être monté par l'escalier, pour des volumes jusqu'à 250 m³." },
      { key: "teddh20", waarom: "Remet à température une maison de vacances **restée fermée tout l'hiver**. Ce chauffage de 20 kW demande un raccordement 400 V." },
    ],
    levering: {
      kop: "Livraison à Rendeux : par Marche jusque dans la vallée",
      alinea:
        "Nous passons par l'E411 et la N4 jusqu'à Marche, puis vers l'Ourthe. Comptez **près de deux heures** de route. Vous réservez avec la date de livraison de votre choix, et la livraison elle-même se fait sur rendez-vous. Si votre maison se trouve sur une route étroite au bord de l'eau ou en haut d'une allée raide, **signalez-le à l'avance**.",
    },
    afhalen: {
      kop: "Venir chercher vous-même : un trajet d'une demi-journée",
      alinea:
        "Depuis Rendeux, l'aller-retour vous prend **près de quatre heures**. Si vous habitez en Flandre et vous rendez de toute façon à votre maison de vacances, vous pouvez prendre l'appareil en chemin à Aartselaar. Transportez-le debout et laissez-le reposer un moment à l'arrivée avant de l'allumer.",
    },
    buren: ["hotton", "la-roche-en-ardenne", "marche-en-famenne"],
    faq: [
      {
        q: "Pourquoi mon mur arrière est-il mouillé alors que l'Ourthe n'est pas sortie de son lit ?",
        a: "Dans une vallée étroite, l'eau de pluie descend du versant et pousse contre le mur côté montagne. Cette humidité revient après chaque période pluvieuse. Un déshumidificateur aide après une rénovation, mais contre l'eau du versant, la solution durable est un drainage ou une barrière anti-humidité.",
      },
      {
        q: "Comment traiter une maison de vacances à Rendeux restée vide pendant des années ?",
        a: "Réchauffez d'abord la maison, car les murs froids retiennent beaucoup d'humidité. Le séchage peut ensuite commencer. Le technicien mesure au démarrage, place un déshumidificateur et au besoin un chauffage, puis mesure à nouveau à la reprise.",
      },
      {
        q: "Livrez-vous aussi à Hodister et Chéoux ?",
        a: "Oui, nous livrons dans toute la commune de Rendeux. Certains villages sont plus haut et accessibles uniquement par des routes étroites. Signalez lors de la réservation s'il y a près de chez vous un endroit où la camionnette peut faire demi-tour.",
      },
      {
        q: "Combien d'appareils me faut-il pour un rez-de-chaussée après une crue ?",
        a: "Pour un rez-de-chaussée de taille moyenne, un grand déshumidificateur et un ventilateur suffisent généralement. Si l'eau est montée haut ou si plusieurs pièces sont mouillées, un second déshumidificateur s'ajoute. Indiquez lors de la réservation la superficie et la hauteur atteinte par l'eau.",
      },
    ],
    realisaties: [],
  },
  tenneville: {
    slug: "tenneville",
    title: "Tenneville : déshumidificateur de chantier à louer | Vernast",
    description:
      "Location de déshumidificateur à Tenneville, Champlon ou Erneuville, pour les maisons du plateau froid le long de la N4. Livraison sur rendez-vous et mesure.",
    h1: "Location de déshumidificateur à Tenneville",
    kicker: "Province de Luxembourg · le plateau le long de la N4",
    rit: { afstand: "environ 175 km", tijd: "environ deux heures" },
    intro: [
      "Tenneville se trouve **sur le plateau ardennais, le long de la N4**, la route de Marche-en-Famenne à Bastogne. Qui roule de Namur vers le sud de la province de Luxembourg passe par Champlon. Depuis Aartselaar, nous y sommes en environ deux heures.",
      "La commune est **peu peuplée et très boisée**. Outre Tenneville, Champlon et Erneuville en font partie, avec d'anciennes fermes, des maisons neuves le long de la N4 et des maisons de vacances entre les bois.",
    ],
    bouw: {
      kop: "Haut plateau, longs hivers et murs froids",
      alineas: [
        "Sur le plateau, il fait **plus froid que dans les vallées**, et l'hiver y dure plus longtemps. Une maison non chauffée en construction ou en rénovation atteint alors rarement la température à laquelle un déshumidificateur à condensation fonctionne bien. Un chauffage en plus ou un déshumidificateur à adsorption maintient le séchage.",
        "Pour une construction neuve le long de la N4, il s'agit généralement de **chape et de plafonnage** qui doivent être secs avant la finition. Dans une ancienne ferme, ce sont des murs épais en pierre qui rendent lentement leur humidité. Dans les deux cas, la mesure au démarrage montre l'ampleur du travail.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une construction neuve le long de la N4 à Champlon ou Tenneville.** Il retire jusqu'à 70 litres par jour de la chape et du plafonnage au rez-de-chaussée." },
      { key: "teddh30", waarom: "Amène **un chantier non chauffé sur le plateau** au-dessus de 15 °C, pour que le déshumidificateur à condensation soit efficace. Ce chauffage de 30 kW fonctionne sur courant triphasé 400 V." },
      { key: "revolution", waarom: "**Pour une ancienne ferme aux murs froids.** Le déshumidificateur à adsorption continue de fonctionner là où il fait trop froid pour un appareil à condensation." },
      { key: "ttv4500", waarom: "Répartit **l'air sec dans une longue ferme** dont les pièces se suivent. Il ne consomme que 0,2 kW." },
    ],
    levering: {
      kop: "Livraison à Tenneville : tout droit par la N4",
      alinea:
        "Nous passons par l'E411 jusqu'à Namur, puis par la N4 au-delà de Marche jusque sur le plateau. Comptez **environ deux heures** depuis Aartselaar. Vous choisissez le jour lors de la réservation, l'heure est fixée d'un commun accord. Le technicien installe les appareils, règle le chauffage et mesure l'humidité au démarrage.",
    },
    afhalen: {
      kop: "Venir chercher depuis Tenneville, c'est quatre heures de route",
      alinea:
        "L'aller-retour jusqu'à Aartselaar représente depuis Tenneville **environ quatre heures de route**. Cela en vaut rarement la peine. Avec une livraison, vous bénéficiez en outre de l'installation et de la mesure d'humidité.",
    },
    buren: ["la-roche-en-ardenne", "sainte-ode", "nassogne", "saint-hubert"],
    faq: [
      {
        q: "Pourquoi mon chantier à Tenneville sèche-t-il plus lentement qu'en Flandre ?",
        a: "Le plateau est en altitude et il y fait plus froid, surtout de novembre à mars. Sous 15 °C, un déshumidificateur à condensation absorbe nettement moins d'eau. Avec un chauffage ou un déshumidificateur à adsorption en plus, vous retrouvez ce rendement.",
      },
      {
        q: "Une livraison à Tenneville est-elle possible, si loin d'Anvers ?",
        a: "Oui. C'est un de nos trajets les plus longs, environ deux heures aller simple. Nous regroupons les livraisons dans la région et convenons du moment avec vous. Le technicien installe les appareils, mesure l'humidité et vient tout reprendre plus tard.",
      },
      {
        q: "Livrez-vous aussi à Champlon et Erneuville ?",
        a: "Oui, nous livrons dans tous les villages de la commune de Tenneville. Si votre maison est un peu à l'écart de la N4, sur un chemin forestier, indiquez-le lors de la réservation. Le technicien saura alors comment s'y rendre.",
      },
      {
        q: "De quel raccordement électrique ai-je besoin pour un déshumidificateur et un chauffage ?",
        a: "Un déshumidificateur à condensation fonctionne sur une prise ordinaire de 230 V. Le chauffage de chantier électrique demande un raccordement 400 V (courant triphasé). Vérifiez donc à l'avance si votre chantier ou votre maison en dispose, ou renseignez-vous auprès de votre électricien avant de réserver.",
      },
    ],
    realisaties: [],
  },
  erezee: {
    slug: "erezee",
    title: "Location de déshumidificateur à Érezée et Soy | Vernast",
    description:
      "Location de déshumidificateur à Érezée, Soy, Mormont ou Amonines, pour les maisons de la vallée de l'Aisne et des collines. Livraison sur rendez-vous et mesure.",
    h1: "Location de déshumidificateur à Érezée",
    kicker: "Province de Luxembourg · la vallée de l'Aisne",
    rit: { afstand: "environ 165 km", tijd: "près de deux heures" },
    intro: [
      "Érezée se trouve **dans la vallée de l'Aisne**, un affluent de l'Ourthe, entre Hotton et le haut plateau de Manhay. La commune est connue pour son tram touristique qui longe la rivière. Depuis Aartselaar, il faut près de deux heures de route.",
      "Soy, Mormont et Amonines font aussi partie de la commune. La région est vallonnée et boisée, avec **des villages en moellons gris**, des campings et des maisons de vacances. De plus en plus de gens viennent s'y installer à demeure.",
    ],
    bouw: {
      kop: "Vallons étroits et maisons en moellons",
      alineas: [
        "Dans les vallées de l'Aisne et de ses affluents, des maisons se trouvent **près de l'eau et à l'ombre des versants**. Après une période pluvieuse ou une crue, une cave ou un rez-de-chaussée peut être mouillé. Une maison froide sans soleil ne rend cette humidité que lentement. Lors de l'installation, le technicien mesure où se trouve précisément l'humidité.",
        "Beaucoup de maisons anciennes sont bâties **en moellons sans coulisse**. Lors d'une transformation, un nouveau plafonnage vient contre un mur lui-même encore humide. Séchez donc d'abord le mur et ne faites la finition qu'ensuite. Avec un déshumidificateur, un ventilateur et une mesure à la reprise, vous savez quand le peintre peut venir.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison de village à Érezée ou Soy** que vous rénovez entièrement : 70 litres par jour, pour des volumes jusqu'à 400 m³." },
      { key: "ttv4500", waarom: "Souffle 4 500 m³ d'air par heure **le long d'un mur en moellons sans coulisse**, pour que le déshumidificateur absorbe l'humidité plus vite." },
      { key: "radiaal2250", waarom: "**Pour un sol de cave mouillé dans la vallée de l'Aisne.** Il souffle de façon ciblée sur le sol et dans les coins, là où l'eau reste le plus longtemps." },
      { key: "teddh20", waarom: "Réchauffe d'abord **une maison ombragée adossée au versant**, pour que le déshumidificateur soit ensuite efficace. Ce chauffage demande un raccordement 400 V." },
    ],
    levering: {
      kop: "Livraison à Érezée : par la Famenne jusqu'à l'Aisne",
      alinea:
        "Par l'E411, la N4 et Hotton, nous arrivons dans la vallée de l'Aisne, à **près de deux heures** d'Aartselaar. Vous choisissez la date de livraison, et nous convenons à l'avance de l'heure précise avec vous. Si les pièces à sécher se trouvent à différents étages, **signalez-le**, pour que le technicien apporte assez d'appareils.",
    },
    afhalen: {
      kop: "Enlèvement depuis Érezée : près de quatre heures aller-retour",
      alinea:
        "Depuis Érezée, un enlèvement à Aartselaar vous coûte **une demi-journée**. Pour un seul appareil, cela en vaut rarement la peine. Avec une livraison, le technicien apporte directement la combinaison de déshumidificateur, ventilateur et chauffage adaptée à votre maison.",
    },
    buren: ["durbuy", "hotton", "manhay"],
    faq: [
      {
        q: "Ma cave dans la vallée de l'Aisne a été inondée. Par quoi commencer ?",
        a: "Évacuez d'abord l'eau et la boue et faites contrôler l'électricité. Ensuite, le déshumidificateur peut retirer l'humidité du sol et des murs. Indiquez lors de la réservation jusqu'à quelle hauteur l'eau est montée, et le technicien apportera aussi un ventilateur.",
      },
      {
        q: "Puis-je poser un nouveau plafonnage sur un vieux mur en moellons ?",
        a: "Oui, mais laissez d'abord le mur devenir aussi sec que possible, sinon l'humidité reste piégée derrière la nouvelle couche. Un déshumidificateur avec un ventilateur dirigé vers le mur accélère cela. Une mesure avant et après montre quand vous pouvez plafonner.",
      },
      {
        q: "Livrez-vous aussi à Amonines et Mormont ?",
        a: "Oui, nous livrons dans tous les villages d'Érezée, y compris dans les noyaux situés plus haut. Signalez lors de la réservation si votre maison se trouve sur une route étroite ou raide, pour que le technicien sache où il peut s'arrêter.",
      },
      {
        q: "Combien de semaines prévoir pour une maison rénovée à Érezée ?",
        a: "Un nouveau plafonnage dans une maison chauffée demande souvent deux à trois semaines. Une maison froide aux murs épais en moellons demande généralement plus. La mesure au démarrage et à la reprise vous donne des chiffres, pour que vous ne deviez pas décider à l'instinct.",
      },
    ],
    realisaties: [],
  },
  fauvillers: {
    slug: "fauvillers",
    title: "Déshumidificateur à louer à Fauvillers sur la Sûre | Vernast",
    description:
      "Location de déshumidificateur à Fauvillers, dans la vallée de la Sûre : fermes, granges et secondes résidences. Livraison et installation sur rendez-vous.",
    h1: "Location de déshumidificateur à Fauvillers",
    kicker: "Province de Luxembourg · la Sûre près de la frontière",
    rit: { afstand: "environ 240 km", tijd: "environ deux heures et demie" },
    intro: [
      "Fauvillers est une commune rurale et peu peuplée de **la province belge de Luxembourg**, non loin de la frontière avec le Grand-Duché. La Sûre serpente ici dans une vallée boisée, et la commune fait partie du **parc naturel Haute-Sûre Forêt d'Anlier**. Depuis Aartselaar, comptez environ deux heures et demie de route.",
      "Outre Fauvillers, des villages comme **Hollange, Tintange et Bodange** font partie de la commune. Vous y trouvez des fermes, des granges et des maisons de village en pierre, et entre les bois des maisons de vacances inoccupées une grande partie de l'année.",
    ],
    bouw: {
      kop: "Anciennes fermes, maisons de vacances vides et vallée fraîche",
      alineas: [
        "Ici, beaucoup de chantiers concernent **une ferme ou une grange transformée en habitation**. On y coule une nouvelle dalle, une chape et beaucoup de plafonnage dans un grand volume, derrière des murs en pierre qui retiennent eux-mêmes l'humidité. Un grand appareil par espace ouvert et un ventilateur soufflant bas sur le sol forment l'installation habituelle.",
        "Une maison inutilisée pendant des mois ne se réchauffe pas en hiver et prend une odeur de renfermé et des taches d'humidité. Si vous rénovez une telle seconde résidence, amenez d'abord la pièce à température, car sous 15 °C un déshumidificateur à condensation perd une grande partie de son rendement. Dans la vallée de la Sûre, l'air reste en outre humide plus longtemps que sur le plateau.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une grange transformée en habitation.** Avec 110 litres par jour et une portée jusqu'à environ 600 m³, cet appareil vient à bout d'un grand volume avec une chape fraîche." },
      { key: "radiaal2250", waarom: "Souffle de façon ciblée sur la dalle fraîche d'une étable transformée, là où se trouve le plus d'eau et où l'air se renouvelle le plus lentement." },
      { key: "revolution", waarom: "Pour **une maison de vacances restée froide et vide**. Le déshumidificateur à adsorption absorbe l'humidité même à basse température." },
      { key: "teddh20", waarom: "Réchauffe une maison en pierre non chauffée avant que le déshumidificateur à condensation ne démarre. Ce chauffage de 20 kW fonctionne en 400 V." },
    ],
    levering: {
      kop: "Livraison à Fauvillers sur rendez-vous",
      alinea:
        "Fauvillers se trouve à **environ deux heures et demie** de notre entrepôt. En Wallonie, nous livrons sur rendez-vous : vous choisissez une **date de livraison** lors de la réservation, et nous convenons de l'heure à l'avance avec vous. Le technicien place les appareils, mesure le mur et le sol et explique le fonctionnement de l'évacuation.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : cinq heures aller-retour",
      alinea:
        "Depuis Fauvillers, un aller-retour jusqu'à notre entrepôt prend **environ cinq heures**. Si vous habitez en Flandre et rénovez une seconde résidence dans la région, l'enlèvement peut toutefois valoir la peine : vous prenez l'appareil en route vers la maison. Transportez toujours un déshumidificateur debout.",
    },
    buren: ["vaux-sur-sure", "leglise", "martelange"],
    faq: [
      {
        q: "J'habite en Flandre et j'ai une seconde résidence à Fauvillers. Dois-je être présent à la livraison ?",
        a: "Quelqu'un doit laisser entrer le technicien et montrer où les appareils peuvent être placés. Cela peut être un voisin ou l'entrepreneur. Convenez-en lors de la réservation : le technicien saura alors qui il rencontre sur place et avec qui il discute du suivi.",
      },
      {
        q: "Parlez-vous de la province de Luxembourg en Belgique ou du Grand-Duché ?",
        a: "Cette page concerne Fauvillers, dans la province belge de Luxembourg. Si votre chantier se trouve de l'autre côté de la frontière, au Grand-Duché, contactez-nous d'abord, et nous verrons ensemble si et comment nous pouvons livrer.",
      },
      {
        q: "Combien d'appareils faut-il pour une grange transformée en habitation ?",
        a: "Cela dépend du volume, de l'épaisseur de la chape et de la quantité de plafonnage. Comptez un grand appareil par espace ouvert et un ventilateur au-dessus du nouveau sol. Indiquez la superficie et la hauteur lors de la réservation, et nous ferons le calcul à l'avance.",
      },
      {
        q: "Pourquoi une maison de vacances restée vide tout l'hiver sent-elle le renfermé ?",
        a: "L'air froid et immobile ne se débarrasse pas de son humidité. Celle-ci se dépose sur les murs et les meubles, et c'est là que les moisissures apparaissent. Quelques semaines de séchage, fenêtres fermées, l'éliminent. Sans chauffage ni ventilation pendant les mois d'hiver, elle revient toutefois.",
      },
    ],
    realisaties: [],
  },
  gouvy: {
    slug: "gouvy",
    title: "Déshumidificateur à louer à Gouvy, est ardennais | Vernast",
    description:
      "Location de déshumidificateur à Gouvy, Beho, Bovigny ou Cherain : fermes en pierre et constructions neuves sur le plateau ardennais froid. Mesure au départ.",
    h1: "Location de déshumidificateur à Gouvy",
    kicker: "Province de Luxembourg · la lisière est de l'Ardenne",
    rit: { afstand: "environ 210 km", tijd: "un peu plus de deux heures" },
    intro: [
      "Gouvy se trouve **au nord-est de la province belge de Luxembourg**, contre la frontière avec le Grand-Duché. C'est une vaste commune rurale sur le plateau ardennais, avec des forêts, des prairies et des villages dispersés comme **Beho, Bovigny, Cherain et Limerlé**. Depuis Aartselaar, il vous faut un peu plus de deux heures pour y arriver.",
      "C'est dans la commune que prend sa source **l'Ourthe orientale**, qui coule ensuite vers Houffalize. Gouvy possède une gare sur la ligne de chemin de fer de Liège à Luxembourg. Les hivers y sont longs, le vent souffle librement sur les champs ouverts et, en janvier, les routes sont parfois blanches.",
    ],
    bouw: {
      kop: "Des fermes en altitude et des chantiers qui entrent dans l'hiver",
      alineas: [
        "Ici, on construit surtout **à la campagne** : fermes et maisons de village en pierre naturelle, souvent agrandies d'une nouvelle aile, et habitations plus récentes en bordure des villages. Lors d'une transformation, la nouvelle chape est souvent coulée sur un ancien sol sans isolation ni barrière contre l'humidité. Ce support reste froid, et la chape sèche donc plus lentement que ce qu'indique le fabricant.",
        "Si un chantier n'est pas encore fermé en octobre, il ne sèche pas tout seul pendant l'hiver. Les gelées nocturnes et les journées qui dépassent à peine zéro degré gardent un bâtiment ouvert dans le froid. C'est pourquoi on voit à Gouvy, plus souvent qu'à l'intérieur du pays, **un chauffage et un déshumidificateur** sur le même chantier : le chauffage met la pièce à température, le déshumidificateur retire ensuite l'humidité.",
      ],
    },
    toestellen: [
      { key: "teddh30", waarom: "**Pour un chantier qui se ferme en hiver sur le plateau.** Le chauffage de 30 kW en 400 V réchauffe un bâtiment brut et froid, pour que le déshumidificateur atteigne ensuite un bon rendement." },
      { key: "ttk350", waarom: "Pour une maison de village à Beho ou Cherain rénovée étage par étage : 70 litres par jour, pour des volumes jusqu'à environ 400 m³." },
      { key: "revolution", waarom: "Pour **une ferme en pierre qui ne devient jamais vraiment chaude**. Un déshumidificateur à adsorption continue de fonctionner là où un appareil à condensation perd son rendement dans le froid." },
      { key: "ttv4500", waarom: "Évacue la couche d'air humide le long d'une façade froide en pierre, pour que le déshumidificateur retire plus vite l'humidité de la pièce." },
    ],
    levering: {
      kop: "Livraison à Gouvy par Liège et l'E25",
      alinea:
        "Nous rejoignons Gouvy **par Liège et l'E25**, à un peu plus de deux heures d'Aartselaar. La livraison se fait sur rendez-vous : vous choisissez une **date de livraison** lors de la réservation, et nous convenons de l'heure avec vous à l'avance. Le technicien amène les appareils jusque dans la bonne pièce, contrôle le raccordement et mesure l'humidité avant de repartir.",
    },
    afhalen: {
      kop: "Venir chercher le matériel depuis Gouvy coûte deux demi-journées",
      alinea:
        "Venir chercher un appareil à Aartselaar, c'est **plus de quatre heures de route aller-retour**, et autant pour le rapporter. Cela en vaut rarement la peine. Avec la livraison, vous n'avez pas non plus à charger et décharger vous-même un appareil lourd.",
    },
    buren: ["vielsalm", "houffalize", "bastenaken"],
    faq: [
      {
        q: "Venez-vous aussi à Gouvy en hiver quand il y a de la neige ?",
        a: "Oui, mais en cas de neige ou de verglas, une livraison peut être reportée, surtout sur les petites routes vers les villages. Dans ce cas, nous vous appelons à l'avance pour convenir d'une nouvelle date de livraison, pour que vous n'attendiez pas en vain sur le chantier.",
      },
      {
        q: "Livrez-vous aussi au Grand-Duché, juste de l'autre côté de la frontière près de Gouvy ?",
        a: "Cette page concerne Gouvy et ses villages dans la province belge de Luxembourg. Si vous avez un chantier à Troisvierges ou ailleurs au Grand-Duché, contactez-nous, et nous verrons ce qui est possible.",
      },
      {
        q: "Pourquoi ma nouvelle chape sèche-t-elle si lentement dans une ancienne ferme ?",
        a: "La chape repose sur un support froid, souvent non isolé, qui retient l'eau et refroidit le sol. Un chauffage combiné à un déshumidificateur maintient une température suffisante. Lors de la reprise, le technicien mesure l'humidité qui reste encore dans le sol.",
      },
      {
        q: "Combien de temps dure le trajet entre Aartselaar et Gouvy ?",
        a: "Comptez un peu plus de deux heures par Liège et l'E25, et un peu plus en cas d'embouteillages autour de Liège. C'est pourquoi nous livrons à Gouvy sur rendez-vous et convenons à l'avance avec vous de l'heure de livraison.",
      },
    ],
    realisaties: [],
  },
  houffalize: {
    slug: "houffalize",
    title: "Houffalize : location de déshumidificateur | Vernast",
    description:
      "Déshumidificateur à louer à Houffalize, Nadrin, Tavigny ou Wibrin : maisons et gîtes dans la vallée de l'Ourthe, fermes en altitude. Livré, installé et mesuré.",
    h1: "Location de déshumidificateur à Houffalize",
    kicker: "Province de Luxembourg · la petite ville dans la vallée de l'Ourthe",
    rit: { afstand: "environ 195 km", tijd: "environ deux heures" },
    intro: [
      "Houffalize se trouve dans la vallée de l'Ourthe, entourée par le plateau ardennais. La petite ville a été **durement touchée pendant la bataille des Ardennes**, puis reconstruite, si bien que le centre compte beaucoup d'habitations d'après-guerre. Autour de la vallée se trouvent des villages comme **Nadrin, Mabompré, Tavigny et Wibrin**. Depuis Aartselaar, il nous faut environ deux heures pour y arriver.",
      "À Achouffe se trouve la brasserie avec **le lutin sur l'étiquette**, et la région vit en grande partie du tourisme. Le long de la rivière s'alignent maisons de vacances, gîtes et campings. Près de Nadrin, un point de vue vous offre un panorama sur **les méandres de l'Ourthe**.",
    ],
    bouw: {
      kop: "Une vallée qui retient l'humidité, et des hauteurs qui restent froides",
      alineas: [
        "Dans le centre, les maisons se trouvent **près de l'Ourthe** et contre le flanc de la vallée. Le sol y est humide, et en hiver le soleil ne passe que brièvement au-dessus de la colline. Une cave ou un rez-de-chaussée côté pente reste donc humide. Lors d'une rénovation, vous voulez savoir quelle humidité vient des travaux et laquelle vient de l'extérieur. C'est ce que **le technicien mesure** lors de l'installation.",
        "**Les gîtes et maisons de vacances** sont rafraîchis entre deux saisons, et ce sont les premiers hôtes qui fixent l'échéance. Une nouvelle salle de bains ou un plafonnage frais doit être sec avant que le peintre et l'aménagement suivent. Plusieurs petits appareils, un par chambre, y fonctionnent souvent mieux qu'un seul grand appareil dans le hall.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**Pour un gîte rafraîchi entre deux saisons.** Un appareil compact par chambre, qui retire jusqu'à 50 litres par jour de l'air." },
      { key: "revolution", waarom: "Pour **une cave du centre, tout près de l'Ourthe**. Une telle cave reste fraîche toute l'année, et un déshumidificateur à adsorption y absorbe malgré tout l'humidité." },
      { key: "ttk350", waarom: "Pour une habitation d'après-guerre de la petite ville entièrement rénovée : 70 litres par jour, pour des volumes jusqu'à environ 400 m³." },
      { key: "teddh20", waarom: "Porte d'abord une maison non chauffée du côté ombragé de la vallée au-dessus de 15 °C, pour que le déshumidificateur puisse faire son travail. Fonctionne en 400 V." },
    ],
    levering: {
      kop: "Livraison à Houffalize, tout près de l'E25",
      alinea:
        "Houffalize se trouve **tout près de l'E25**, à environ deux heures de route par Liège. Nous livrons sur rendez-vous : vous choisissez une **date de livraison** lors de la réservation, et nous confirmons l'heure à l'avance. Si l'habitation se trouve sur une pente raide ou dans un petit chemin étroit de la vallée, signalez-le. Le technicien sait ainsi où il peut charger et décharger.",
    },
    afhalen: {
      kop: "L'enlèvement vous coûte une demi-journée par trajet",
      alinea:
        "Notre entrepôt d'Aartselaar se trouve à **environ deux heures** de Houffalize, vous êtes donc sur la route quelque quatre heures aller-retour. Si, comme gestionnaire d'une maison de vacances, vous faites de toute façon la navette entre Anvers et les Ardennes, vous pouvez emporter un appareil isolé. Pour plusieurs gîtes à la fois, la livraison est plus simple : le technicien place le bon appareil dans chaque chambre.",
    },
    buren: ["bastenaken", "gouvy", "vielsalm", "la-roche-en-ardenne"],
    faq: [
      {
        q: "Mon gîte à Houffalize doit être sec pour les premiers hôtes. Comment planifier ?",
        a: "Comptez à rebours à partir de la date d'arrivée. Un nouveau plafonnage dans une pièce chauffée est généralement prêt pour le peintre après une à deux semaines, une chape demande plus de temps. Réservez le plus tôt possible et indiquez la date, nous adapterons le nombre d'appareils en conséquence.",
      },
      {
        q: "Ma cave dans le centre est-elle humide à cause de l'Ourthe ?",
        a: "C'est possible. Les maisons proches de la rivière sont basses, avec la nappe phréatique juste sous la cave. Un déshumidificateur garde la pièce utilisable, mais l'humidité venue de l'extérieur revient dès que l'appareil est parti. La mesure lors de l'installation montre à quelle profondeur l'humidité se trouve dans le mur.",
      },
      {
        q: "Venez-vous aussi jusqu'à Nadrin ou Wibrin ?",
        a: "Oui, nous livrons dans tous les villages de la commune. Les routes vers les villages situés plus haut sont étroites et sinueuses. Communiquez donc l'adresse exacte et dites-nous si une camionnette peut rouler jusqu'à la porte.",
      },
      {
        q: "De combien d'appareils ai-je besoin pour plusieurs maisons de vacances à la fois ?",
        a: "En général, un appareil compact par pièce où des travaux humides ont été faits, et éventuellement un ventilateur dans la plus grande pièce. Indiquez lors de la réservation la surface et le type de travaux pour chaque maison. Nous calculons alors le total, et le technicien apporte tout en un seul trajet.",
      },
    ],
    realisaties: [],
  },
  "sainte-ode": {
    slug: "sainte-ode",
    title: "Déshumidificateur de chantier à Sainte-Ode | Vernast",
    description:
      "Location de déshumidificateur à Sainte-Ode, Amberloup, Lavacherie ou Tillet : maisons en pierre le long de l'Ourthe occidentale. Livré et installé.",
    h1: "Location de déshumidificateur à Sainte-Ode",
    kicker: "Province de Luxembourg · des villages le long de l'Ourthe occidentale",
    rit: { afstand: "environ 200 km", tijd: "environ deux heures" },
    intro: [
      "Sainte-Ode est une commune rurale située entre Bastogne et Saint-Hubert, sur le plateau ardennais. Elle compte des villages comme **Amberloup, Lavacherie et Tillet**, et **l'Ourthe occidentale** y coule, rivière étroite dans une vallée verdoyante. Depuis Aartselaar, notre camionnette y arrive en environ deux heures.",
      "Il n'y a pas de véritable centre urbain. Fermes, maisons de village et lotissements se succèdent le long des routes, entre prairies et vastes forêts. Les hivers sont rudes, et dans une maison mal chauffée, vous le remarquez d'abord sur **les murs côté nord**.",
    ],
    bouw: {
      kop: "Maisons de village en pierre et constructions neuves sur le plateau",
      alineas: [
        "Les habitations plus anciennes sont bâties en **pierre naturelle**, avec des murs épais et de petites fenêtres. Lors d'une rénovation, on ajoute de l'isolation, un nouveau plafonnage et souvent un nouveau sol. Un mur qui a retenu l'humidité pendant des années la libère lentement. Si vous peignez trop tôt, la peinture risque de **s'écailler après quelques mois**.",
        "**Les constructions neuves dans les villages** suivent les saisons : le gros œuvre monte en été, la chape arrive en automne. La température baisse alors vite sur le plateau, et sans chauffage d'appoint, un déshumidificateur à condensation perd une grande partie de son rendement. Réchauffez d'abord la pièce avec un chauffage, et le planning reste tenable.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une maison neuve avec une chape sur tout le rez-de-chaussée.** Retire jusqu'à 110 litres par jour de l'air, dans des volumes jusqu'à environ 600 m³." },
      { key: "teddh30", waarom: "Pour un bâtiment brut sur le plateau en automne. Le chauffage réchauffe la pièce froide, pour que la chape continue de sécher. Il demande du courant triphasé en 400 V." },
      { key: "ttk350", waarom: "Pour **une maison de village en pierre à Amberloup ou Tillet** rénovée étage par étage : 70 litres par jour dans des volumes jusqu'à environ 400 m³." },
      { key: "radiaal2250", waarom: "Souffle de manière ciblée le long d'un mur nord froid ou sur un sol frais, les endroits où l'humidité persiste le plus longtemps." },
    ],
    levering: {
      kop: "Livraison à Sainte-Ode sur rendez-vous",
      alinea:
        "Il nous faut **environ deux heures** pour rejoindre Sainte-Ode. Lors de la réservation, vous choisissez une **date de livraison**, et comme nous livrons en Wallonie sur rendez-vous, nous vous appelons à l'avance pour fixer l'heure. Le technicien place les appareils, pose le tuyau d'évacuation et note les valeurs de départ. La reprise peut ainsi se faire sur la base d'une mesure.",
    },
    afhalen: {
      kop: "Venir chercher soi-même : quatre heures de route pour un appareil",
      alinea:
        "Aartselaar est trop loin pour un simple passage : vous êtes sur la route **environ quatre heures** aller-retour. Si vous avez besoin d'un chauffage ou d'un grand appareil, choisissez la livraison. Le technicien raccorde tout correctement sur place.",
    },
    buren: ["bastenaken", "vaux-sur-sure", "tenneville"],
    faq: [
      {
        q: "Pourquoi la peinture s'écaille-t-elle sur mon mur en pierre rénové à Sainte-Ode ?",
        a: "Souvent, le mur n'était pas encore sec au moment de peindre. Un mur épais en pierre naturelle libère lentement son humidité, et cette humidité pousse la couche de peinture vers l'extérieur. Faites donc mesurer avant de peindre. Le technicien le fait lors de la reprise du déshumidificateur.",
      },
      {
        q: "Puis-je placer un déshumidificateur dans une construction neuve sans fenêtres ?",
        a: "Mieux vaut pas. Un déshumidificateur fonctionne dans une pièce fermée, sinon il sèche l'air extérieur. Tant que les fenêtres et les portes manquent, vous pouvez fermer provisoirement les ouvertures avec une bâche. L'appareil peut ensuite faire son travail.",
      },
      {
        q: "Livrez-vous dans tous les villages de Sainte-Ode ?",
        a: "Oui, à Amberloup, Lavacherie, Tillet et dans les hameaux entre eux. Communiquez l'adresse exacte et l'accès, surtout pour un chantier le long d'un chemin de campagne. Le technicien sait alors où il peut garer la camionnette.",
      },
      {
        q: "Quand ai-je besoin d'un chauffage en plus du déshumidificateur ?",
        a: "Dès que la pièce reste sous 15 °C. Sur un chantier non chauffé sur le plateau, c'est presque toujours le cas à partir de l'automne. Le chauffage fait monter la température, le déshumidificateur retire l'humidité. Ensemble, ils vont beaucoup plus vite que chacun séparément.",
      },
    ],
    realisaties: [],
  },
  "vaux-sur-sure": {
    slug: "vaux-sur-sure",
    title: "Location de déshumidificateur à Vaux-sur-Sûre | Vernast",
    description:
      "Déshumidificateur à louer à Vaux-sur-Sûre, Sibret, Hompré ou Juseret : neuf et fermes près de la source de la Sûre, au sud de Bastogne. Livré et installé.",
    h1: "Location de déshumidificateur à Vaux-sur-Sûre",
    kicker: "Province de Luxembourg · près de la source de la Sûre",
    rit: { afstand: "environ 225 km", tijd: "un peu plus de deux heures" },
    intro: [
      "Vaux-sur-Sûre se trouve **au sud de Bastogne**, sur le plateau ardennais ouvert, le long de la N4 vers Arlon. C'est dans la commune que prend sa source **la Sûre**, la rivière qui coule plus loin par Fauvillers vers le Grand-Duché. Notre entrepôt d'Aartselaar est à un peu plus de deux heures de route.",
      "La commune est étendue, avec des villages comme **Sibret, Hompré, Juseret, Morhet et Nives**. À côté des fermes et des maisons de village en pierre naturelle, on trouve aussi **des lotissements plus récents** en bordure des villages.",
    ],
    bouw: {
      kop: "Des constructions neuves en terrain ouvert, et des sources sous la prairie",
      alineas: [
        "Autour des sources de la Sûre, le sol est humide. Dans les creux, les prairies sont gorgées d'eau en hiver, et une fouille ou une cave en construction s'y remplit vite. **Pompez d'abord l'eau, séchez ensuite.** Un déshumidificateur retire l'humidité du sol et des murs, pas l'eau qui stagne encore dans la fouille.",
        "Sur le plateau ouvert, **le vent** joue son rôle. Un gros œuvre se refroidit fortement, et une chape fraîche se trouve dans une pièce qui peut descendre la nuit jusqu'au point de congélation. Si vous coulez ici en automne, fermez les fenêtres et les portes avec une bâche et placez un chauffage à côté du déshumidificateur. La chape sera ainsi prête à temps pour le poseur de sol.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une nouvelle maison en bordure de Sibret ou Hompré.** Avec 110 litres par jour, cet appareil sèche des volumes jusqu'à environ 600 m³." },
      { key: "teddh30", waarom: "Maintient un gros œuvre sur le plateau venteux à température de travail, pour qu'une chape fraîche ne reste pas humide jusqu'au printemps. Fonctionne en 400 V." },
      { key: "radiaal2250", waarom: "Pour **un sol de cave dans un creux humide**. Le ventilateur radial souffle de manière ciblée sur le sol et dans les coins, là où l'humidité persiste le plus longtemps." },
      { key: "revolution", waarom: "Pour une ferme en pierre qui reste fraîche toute l'année. Un déshumidificateur à adsorption continue d'y absorber l'humidité, même quand il fait trop froid pour un appareil à condensation." },
    ],
    levering: {
      kop: "Livraison à Vaux-sur-Sûre sur rendez-vous",
      alinea:
        "Vaux-sur-Sûre se trouve à **un peu plus de deux heures de route** d'Aartselaar. Vous choisissez une **date de livraison** lors de la réservation, et nous convenons à l'avance avec vous de l'heure de livraison. Sur le chantier, le technicien place les appareils par pièce, contrôle le raccordement électrique pour un chauffage et mesure les valeurs d'humidité.",
    },
    afhalen: {
      kop: "Venir chercher le matériel depuis Vaux-sur-Sûre en vaut rarement la peine",
      alinea:
        "L'aller-retour jusqu'à Aartselaar représente **plus de quatre heures de route**, et encore autant pour rapporter le matériel. Venir le chercher vous-même n'a de sens que si vous n'avez besoin que d'un seul appareil et que vous devez de toute façon aller du côté d'Anvers. Pour un chantier avec chauffage et déshumidificateur, mieux vaut choisir la livraison avec installation.",
    },
    buren: ["bastenaken", "sainte-ode", "fauvillers", "leglise", "neufchateau"],
    faq: [
      {
        q: "Ma fouille à Vaux-sur-Sûre est pleine d'eau. Un déshumidificateur de chantier peut-il aider ?",
        a: "Pas tant que l'eau est là. Faites-la d'abord pomper. Ce n'est que lorsqu'il n'y a plus d'eau stagnante et que le sol et les murs sont encore humides qu'un déshumidificateur a du sens. Indiquez lors de la réservation à quel point la pièce est encore humide.",
      },
      {
        q: "Comment protéger une chape fraîche du gel sur le plateau ?",
        a: "Fermez la pièce, aussi avec une bâche provisoire dans les ouvertures de fenêtre, et maintenez-la au-dessus du point de congélation avec un chauffage. Une chape qui gèle peut perdre de sa résistance. Dès que la température est bonne, un déshumidificateur retire l'humidité.",
      },
      {
        q: "Venez-vous à Sibret, Morhet et Nives ?",
        a: "Oui, nous livrons dans tous les villages de Vaux-sur-Sûre. Les distances au sein de la commune sont grandes. Communiquez donc l'adresse précise lors de la réservation, et le technicien planifiera son itinéraire en passant par votre chantier.",
      },
      {
        q: "Qui mesure si mon sol est assez sec pour le poseur de sol ?",
        a: "Notre technicien mesure lors de l'installation et à nouveau lors de la reprise. La valeur que le sol doit atteindre est fixée par votre poseur de sol, selon le type de revêtement. Avec cette mesure en main, vous savez où vous en êtes.",
      },
    ],
    realisaties: [],
  },
  vielsalm: {
    slug: "vielsalm",
    title: "Vielsalm, vallée de la Salm : déshumidificateur | Vernast",
    description:
      "Location de déshumidificateur à Vielsalm, Grand-Halleux, Bihain ou Salmchâteau : maisons en pierre de la vallée de la Salm et neuf en altitude. Livré.",
    h1: "Location de déshumidificateur à Vielsalm",
    kicker: "Province de Luxembourg · la vallée de la Salm et le coticule",
    rit: { afstand: "environ 190 km", tijd: "environ deux heures" },
    intro: [
      "Vielsalm se trouve dans la vallée de la Salm, au nord de la province de Luxembourg. La région est connue pour **le coticule**, une pierre à aiguiser jaune extraite du sous-sol ardennais. À Salmchâteau, vous pouvez en apprendre davantage. Chaque année en juillet, les **Macralles**, les sorcières de Vielsalm, défilent dans les rues. Le trajet depuis Aartselaar dure environ deux heures.",
      "La commune comprend **Grand-Halleux, Salmchâteau, Bihain et Petit-Thier**. Dans la vallée, les habitations s'alignent le long de la rivière et de la ligne de chemin de fer. Plus haut, des villages occupent le plateau, où les hivers sont froids et longs.",
    ],
    bouw: {
      kop: "Des murs en pierre et une vallée où le soleil arrive tard",
      alineas: [
        "Beaucoup de maisons anciennes ont des murs épais en **moellons sombres** et un toit en ardoises. De tels murs retiennent longtemps l'humidité. Si vous posez un nouveau plafonnage ou une isolation par l'intérieur lors d'une rénovation, laissez **d'abord sécher le mur lui-même**. Sinon, l'humidité restera enfermée derrière la nouvelle couche.",
        "**Dans la vallée de la Salm, l'air reste frais et humide**, et une habitation du côté ombragé reçoit peu de soleil en hiver. Sur les hauteurs autour de Bihain, les hivers durent longtemps. Un gros œuvre encore ouvert en novembre n'y sèche pas tout seul, et un déshumidificateur à condensation seul ne suffit pas. Réchauffez d'abord la pièce, séchez ensuite.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**Pour une maison en pierre du côté ombragé de la vallée de la Salm.** Le déshumidificateur à adsorption continue d'absorber l'humidité dans une pièce froide." },
      { key: "teddh30", waarom: "Pour un chantier sur les hauteurs autour de Bihain, où l'hiver commence tôt. Le chauffage de 30 kW en 400 V réchauffe un bâtiment brut et froid jusqu'à ce que le déshumidificateur puisse fonctionner." },
      { key: "ttk350", waarom: "Pour une habitation à Vielsalm ou Grand-Halleux rénovée étage par étage : 70 litres par jour, pour des volumes jusqu'à environ 400 m³." },
      { key: "ttv4500", waarom: "Déplace 4 500 m³ d'air par heure le long d'**un mur épais en pierre** qui sèche lentement après une rénovation intérieure." },
    ],
    levering: {
      kop: "Livraison à Vielsalm par Liège",
      alinea:
        "Nous rejoignons Vielsalm **en environ deux heures** par Liège. Vous choisissez une **date de livraison** lors de la réservation, et comme nous livrons en Wallonie sur rendez-vous, nous fixons l'heure avec vous à l'avance. Le technicien amène les appareils jusque dans la bonne pièce, pose l'évacuation et mesure les murs. Cette mesure vous dira plus tard si vous pouvez peindre ou s'il vaut mieux attendre encore.",
    },
    afhalen: {
      kop: "Venir chercher le matériel depuis Vielsalm : une journée sur la route",
      alinea:
        "L'aller-retour jusqu'à notre point d'enlèvement d'Aartselaar prend **environ quatre heures**, et pour rapporter le matériel, vous refaites ce trajet. Pour un seul déshumidificateur, c'est beaucoup. Avec la livraison, nous venons aussi reprendre les appareils, et vous n'avez pas à les charger et décharger vous-même.",
    },
    buren: ["gouvy", "houffalize"],
    faq: [
      {
        q: "Puis-je isoler tout de suite par l'intérieur un mur en pierre à Vielsalm ?",
        a: "Seulement quand le mur est suffisamment sec. Si vous isolez un mur humide par l'intérieur, vous enfermez l'humidité entre la pierre et l'isolation, avec un risque de moisissures. Faites d'abord mesurer le mur. Le technicien le fait lors de l'installation.",
      },
      {
        q: "Un déshumidificateur à adsorption est-il meilleur qu'un appareil à condensation dans une maison froide ?",
        a: "Dans une pièce froide, oui. Un déshumidificateur à condensation perd beaucoup de rendement sous 15 °C, alors qu'un déshumidificateur à adsorption fonctionne aussi à basse température. Dans une pièce chauffée, un appareil à condensation est plus économique. Le technicien choisit en fonction de la température qu'il mesure.",
      },
      {
        q: "Venez-vous aussi à Bihain et dans les autres villages en altitude ?",
        a: "Oui, nous livrons dans toute la commune. En hiver, la neige peut ralentir le trajet vers les villages plus élevés. Nous vous appelons alors pour déplacer la livraison, pour que vous n'attendiez pas pour rien sur le chantier.",
      },
      {
        q: "Quelqu'un d'autre peut-il signer à ma place lors de la livraison à Vielsalm ?",
        a: "Oui, un entrepreneur, un voisin ou un membre de la famille peut accueillir le technicien. Indiquez son nom et son numéro de téléphone lors de la réservation, pour que le technicien sache qui il rencontrera sur place et qui suit les appareils pendant la location.",
      },
    ],
    realisaties: [],
  },
  bertrix: {
    slug: "bertrix",
    title: "Bertrix et la Semois : déshumidificateur à louer | Vernast",
    description:
      "Location de déshumidificateur à Bertrix, Cugnon ou Auby-sur-Semois : toits en ardoises, neuf sur le plateau et maisons au bord de la Semois. Installé chez vous.",
    h1: "Location de déshumidificateur à Bertrix",
    kicker: "Province de Luxembourg · la commune ardoisière sur le plateau",
    rit: { afstand: "environ 195 km", tijd: "environ deux heures" },
    intro: [
      "Bertrix est **une commune ardoisière**. Pendant des siècles, on y a extrait l'ardoise dans des carrières souterraines, dont l'une se visite aujourd'hui comme musée. Dans les villages, on le voit encore : presque chaque maison ancienne a un toit en ardoises, souvent aussi une façade revêtue d'ardoises.",
      "Le centre se trouve **sur le plateau ardennais**, avec des quartiers résidentiels plus récents et un zoning en périphérie. Vers le sud, la commune descend vers la Semois, où Cugnon et Auby-sur-Semois se trouvent dans la vallée. Jehonville et Orgeo font aussi partie de Bertrix. Depuis Aartselaar, il nous faut environ deux heures pour y arriver.",
    ],
    bouw: {
      kop: "De l'ardoise sur le toit, des constructions neuves sur le plateau",
      alineas: [
        "Sur le plateau, de **nouvelles habitations** s'ajoutent régulièrement, avec une chape fraîche et un nouveau plafonnage. Le climat y est plus frais et plus humide qu'en Flandre. Une construction neuve mise hors d'eau et hors d'air en automne sèche rarement sans aide avant l'hiver. **Un déshumidificateur avec un ventilateur** sur le sol rattrape ce retard.",
        "Dans une maison ancienne avec **une façade revêtue d'ardoises**, l'humidité se trouve souvent derrière les ardoises, dans un mur qui a du mal à évaporer. Si vous renouvelez la façade ou replafonnez l'intérieur, ce mur sèche lentement. À Cugnon et Auby s'y ajoute **l'air humide de la Semois**, et les maisons sont souvent à moitié adossées à la pente.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une construction neuve sur le plateau** avec une chape sur tout le rez-de-chaussée. L'Ultimate retire jusqu'à 110 litres par jour d'un volume jusqu'à environ 600 m³." },
      { key: "radiaal2250", waarom: "Souffle **bas et de manière ciblée sur une chape fraîche**, pour que le sol sèche uniformément et pas seulement en surface." },
      { key: "ttk350", waarom: "**Pour une maison ancienne à façade en ardoises** que vous rénovez étage par étage : jusqu'à 70 litres par jour, pour des volumes jusqu'à environ 400 m³." },
      { key: "teddh30", waarom: "Porte **un gros œuvre non chauffé** à température pendant l'hiver ardennais, pour que le déshumidificateur à condensation fonctionne bien. Il a besoin d'un raccordement en 400 V." },
    ],
    levering: {
      kop: "Livraison à Bertrix : par l'E411 jusque sur le plateau",
      alinea:
        "Depuis Aartselaar, nous passons par Bruxelles et Namur, puis descendons l'E411 jusqu'au cœur de la province de Luxembourg. **Comptez environ deux heures.** Vous choisissez une date de livraison lors de la réservation, et nous convenons de l'heure avec vous, pour pouvoir combiner les trajets dans la région. Le technicien place les appareils par zone de séchage et note au démarrage les valeurs d'humidité du sol et des murs.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : quatre heures de route pour un appareil",
      alinea:
        "Notre point d'enlèvement se trouve à environ deux heures de Bertrix. Venir chercher un appareil vous coûte donc **environ quatre heures de route**, et le rapporter autant. Pour un chantier sur le plateau, la livraison est le choix logique : le technicien apporte les appareils et les règle sur place.",
    },
    buren: ["paliseul", "herbeumont", "libramont-chevigny", "neufchateau"],
    faq: [
      {
        q: "Combien de temps une chape doit-elle sécher dans une construction neuve à Bertrix ?",
        a: "En règle générale, comptez environ une semaine par centimètre d'épaisseur, et plutôt plus longtemps dans le climat ardennais frais. Avec un déshumidificateur et un ventilateur sur le sol, cela va plus vite. Faites mesurer l'humidité avant de poser du parquet ou du carrelage ; le technicien fait une première mesure au démarrage.",
      },
      {
        q: "Un mur derrière un revêtement de façade en ardoises sèche-t-il aussi avec un déshumidificateur de chantier ?",
        a: "Par l'intérieur, oui : le déshumidificateur retire l'humidité du plafonnage et du mur côté intérieur. Si de l'eau passe derrière les ardoises parce que la façade fuit, faites d'abord réparer cette fuite. Sinon, vous séchez à l'intérieur ce qui est mouillé à chaque fois à l'extérieur.",
      },
      {
        q: "Un déshumidificateur à condensation fonctionne-t-il dans un gros œuvre froid sur le plateau ?",
        a: "En dessous d'environ quinze degrés, un déshumidificateur à condensation perd beaucoup de rendement, et pendant l'hiver ardennais, un gros œuvre est presque toujours plus froid. Ajoutez alors un chauffage de chantier électrique, ou choisissez un déshumidificateur à adsorption, qui continue de fonctionner dans le froid.",
      },
      {
        q: "Livrez-vous jusque dans la province de Luxembourg ?",
        a: "Oui, même si c'est l'un de nos trajets les plus longs. Vous choisissez une date de livraison en ligne, puis nous convenons de l'heure avec vous. Nous pouvons ainsi combiner les livraisons à Bertrix et dans les communes voisines, et vous n'avez pas à attendre toute la journée sur le chantier.",
      },
    ],
    realisaties: [],
  },
  bouillon: {
    slug: "bouillon",
    title: "Bouillon : déshumidificateur de chantier à louer | Vernast",
    description:
      "Location de déshumidificateur à Bouillon, sur la Semois sous le château : maisons en pierre, gîtes à Rochehaut et Corbion. Livré, installé et mesuré.",
    h1: "Location de déshumidificateur à Bouillon",
    kicker: "Province de Luxembourg · la boucle de la Semois sous le château",
    rit: { afstand: "environ 205 km", tijd: "un peu plus de deux heures" },
    intro: [
      "Bouillon se trouve dans **une boucle profonde de la Semois**, tout près de la frontière française. Au-dessus de la petite ville, le château de Godefroy de Bouillon se dresse sur une crête rocheuse. En contrebas, les maisons suivent la courbe de la rivière, avec leurs toits en ardoises et leurs façades en pierre ardennaise sombre. Depuis Aartselaar, il nous faut un peu plus de deux heures pour y arriver.",
      "Autour de la petite ville se trouvent des villages comme **Rochehaut, Corbion, Noirefontaine et Poupehan**, certains haut sur le plateau, d'autres au fond, au bord de l'eau. Beaucoup d'habitations de la région sont des secondes résidences, des gîtes ou des maisons de vacances. Elles restent vides une partie de l'année, et cela se remarque à l'humidité.",
    ],
    bouw: {
      kop: "Ardoise, schiste et maisons vides pendant des mois",
      alineas: [
        "Les maisons anciennes de la vallée ont des murs épais en **moellons de la région**, schiste et grès, le plus souvent sans barrière contre l'humidité. Côté pente, le mur arrière est souvent en partie contre la terre. Ce mur reste longtemps frais et humide après un automne pluvieux, et un nouveau plafonnage y sèche lentement. Lors de l'installation, le technicien effectue une **mesure d'humidité**, pour que vous sachiez quelle part est de l'humidité de construction et quelle part vient de la pente.",
        "Une maison de vacances restée fermée et non chauffée tout l'hiver sent le renfermé au printemps et se couvre de moisissures derrière les armoires. Avec **un chauffage et un déshumidificateur**, vous remettez une telle maison en ordre avant le début de la saison. Si vous transformez pour la location d'été, prévoyez assez de temps de séchage : chape et plafonnage doivent être secs avant l'arrivée des premiers hôtes.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**Pour une maison de vacances froide dans la vallée de la Semois.** Ce déshumidificateur à adsorption continue d'absorber l'humidité dans des pièces où il fait à peine cinq degrés en hiver." },
      { key: "teddh20", waarom: "Réchauffe une seconde résidence restée des mois sans chauffage. Un déshumidificateur à condensation ne fonctionne bien qu'**au-dessus de 15 °C**. Ce chauffage demande un raccordement en 400 V (courant triphasé)." },
      { key: "ttk350", waarom: "**Pour une maison en pierre que vous rénovez étage par étage.** Il retire jusqu'à 70 litres par jour d'un volume jusqu'à environ 400 m³." },
      { key: "ttv4500", waarom: "Maintient l'air en mouvement le long **du mur arrière contre la pente**, pour que la couche d'air humide ne reste pas collée au plafonnage." },
    ],
    levering: {
      kop: "Livraison à Bouillon : par l'E411, puis dans la vallée",
      alinea:
        "Bouillon est l'une de nos adresses les plus éloignées : un peu plus de deux heures de route par Bruxelles et Namur, avec pour finir les routes sinueuses qui descendent dans la vallée. Lors de la réservation, vous choisissez **une date de livraison** ; nous convenons de l'heure avec vous. Dans le centre et dans les villages le long de la rivière, les rues sont étroites et raides. Dites-nous à l'avance si la camionnette peut aller jusqu'à la porte, et le technicien emportera **un diable**.",
    },
    afhalen: {
      kop: "L'enlèvement à Aartselaar n'est pas une option depuis Bouillon",
      alinea:
        "Notre point d'enlèvement se trouve à un peu plus de deux heures de route de Bouillon. Vous êtes donc **plus de quatre heures sur la route** pour venir chercher un appareil, et encore autant après la location pour le rapporter. Faites plutôt livrer : le technicien place les appareils, pose l'évacuation et reprend tout au moment convenu.",
    },
    buren: ["paliseul", "herbeumont", "florenville", "vresse-sur-semois"],
    faq: [
      {
        q: "S'agit-il bien de Bouillon en Belgique, et pas en France ?",
        a: "Oui. Cette page concerne Bouillon dans la province belge de Luxembourg, tout près de la frontière française. Si votre chantier se trouve juste de l'autre côté de la frontière, en France, contactez-nous avant de réserver. Nous verrons ensemble ce qui est possible.",
      },
      {
        q: "Ma maison de vacances est restée vide tout l'hiver et sent le renfermé. Qu'est-ce qui aide ?",
        a: "D'abord réchauffer, ensuite sécher. Un chauffage porte les pièces au-dessus de quinze degrés, puis un déshumidificateur retire l'humidité de l'air, des murs et des meubles. Les moisissures derrière les armoires doivent être nettoyées séparément. Le déshumidificateur aide à éviter qu'elles reviennent, mais ne les élimine pas.",
      },
      {
        q: "Pouvez-vous livrer à Rochehaut ou Poupehan ?",
        a: "Oui, dans tous les villages de la commune. Les routes vers les villages au bord de la rivière sont étroites et raides. Indiquez l'adresse complète lors de la réservation et décrivez brièvement l'accès, pour que le technicien sache à l'avance s'il a besoin d'un diable.",
      },
      {
        q: "Pourquoi le séchage d'une vieille maison dans la vallée prend-il autant de temps ?",
        a: "Les murs épais en moellons retiennent beaucoup d'eau et la libèrent lentement, surtout du côté où la terre touche le mur. L'air humide de la vallée ralentit encore le processus. Comptez quelques semaines. Avec une mesure d'humidité au démarrage, vous voyez plus tard combien de progrès ont été faits.",
      },
    ],
    realisaties: [],
  },
  daverdisse: {
    slug: "daverdisse",
    title: "Location de déshumidificateur à Daverdisse | Vernast",
    description:
      "Déshumidificateur à louer à Daverdisse, Gembes, Haut-Fays ou Porcheresse : maisons en pierre de la vallée de la Lesse et du plateau. Livré et repris.",
    h1: "Location de déshumidificateur à Daverdisse",
    kicker: "Province de Luxembourg · le village sur la Lesse",
    rit: { afstand: "environ 175 km", tijd: "près de deux heures" },
    intro: [
      "Daverdisse se trouve **sur la Lesse**, à l'ouest de la province de Luxembourg, là où la rivière traverse une vallée étroite et boisée. Outre Daverdisse elle-même, Gembes, Haut-Fays et Porcheresse font partie de la commune. Depuis Aartselaar, il nous faut près de deux heures pour y arriver.",
      "Le village dans la vallée et les villages du plateau sont très différents. En bas, les maisons sont proches de l'eau et de la lisière de la forêt. En haut, le paysage est ouvert, avec des prairies et **des fermes dispersées**. Partout, vous voyez des moellons gris et des toits en ardoises.",
    ],
    bouw: {
      kop: "Maisons de village en pierre, dans la vallée et en hauteur",
      alineas: [
        "Le long de la Lesse, le terrain est bas, et le soir et le matin, **de l'air froid et humide** descend dans la vallée. Une maison de village au bord de la rivière a souvent une cave ou un rez-de-chaussée en moellons sans barrière contre l'humidité. Après une rénovation, un tel mur retient longtemps l'eau. **Un ventilateur le long de la paroi** aide le déshumidificateur à avancer.",
        "Sur le plateau, à Haut-Fays et Gembes, il s'agit plus souvent d'**une ferme ou d'une étable en transformation**. Une nouvelle chape y couvre une grande surface, dans une pièce qui n'est pas encore chauffée. Pendant le long hiver froid, **un grand déshumidificateur avec un chauffage de chantier** permet à un tel chantier d'avancer.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une étable ou une ferme transformée sur le plateau.** Jusqu'à 110 litres par jour, pour des volumes jusqu'à environ 600 m³." },
      { key: "teddh30", waarom: "Porte **un grand volume non chauffé** à une température à laquelle le déshumidificateur fonctionne bien. Ce chauffage a besoin d'un raccordement en 400 V (courant triphasé)." },
      { key: "ttv4500", waarom: "Chasse l'air humide le long **du mur épais en pierre d'une maison de village au bord de la Lesse**, pour que le plafonnage sèche plus vite." },
      { key: "ttk350", waarom: "**Pour une maison de village dans la vallée** que vous rénovez étage par étage : jusqu'à 70 litres par jour, pour des volumes jusqu'à environ 400 m³." },
    ],
    levering: {
      kop: "Livraison à Daverdisse : par l'E411, puis dans la vallée",
      alinea:
        "Nous passons par Namur, prenons l'E411 vers le sud et descendons le dernier tronçon vers la Lesse. **Comptez près de deux heures.** Lors de la réservation, vous choisissez une date de livraison, et nous convenons de l'heure avec vous. Si le chantier se trouve dans une cour de ferme ou le long d'une route étroite dans la vallée, **décrivez l'accès**. Le technicien sait ainsi où il peut décharger et comment faire entrer les appareils.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : près de quatre heures de route",
      alinea:
        "Notre point d'enlèvement se trouve à près de deux heures de Daverdisse. L'aller-retour vous prend **près de quatre heures**, et cela deux fois : pour venir chercher le matériel et pour le rapporter. Faites plutôt livrer. Le technicien apporte les appareils, mesure au démarrage et les reprend après la location.",
    },
    buren: ["wellin", "libin", "paliseul"],
    faq: [
      {
        q: "Ma maison est tout près de la Lesse. Pourquoi le rez-de-chaussée reste-t-il humide ?",
        a: "L'air froid et humide descend dans la vallée, et les vieux murs en moellons n'ont généralement pas de barrière contre l'humidité. Le rez-de-chaussée reste donc frais et absorbe l'humidité. Un déshumidificateur retire l'humidité de construction après une rénovation. Si l'humidité vient d'en dessous, c'est le mur lui-même qui doit être traité.",
      },
      {
        q: "Quel déshumidificateur choisir pour une étable transformée ?",
        a: "Une étable a généralement un grand volume et une nouvelle chape sur toute la surface. L'Ultimate est alors le choix logique, avec un chauffage de chantier tant que la pièce n'est pas chauffée. Communiquez les dimensions, et nous verrons si un deuxième appareil est nécessaire.",
      },
      {
        q: "Livrez-vous à Porcheresse et Haut-Fays ?",
        a: "Oui, dans tous les villages de la commune de Daverdisse. Indiquez lors de la réservation le bon village et la rue, car les villages sont à quelques kilomètres les uns des autres. Vous choisissez une date de livraison, et nous convenons ensuite de l'heure avec vous.",
      },
      {
        q: "Comment savoir quand les murs sont assez secs pour peindre ?",
        a: "En mesurant, pas au toucher. Un mur qui semble sec peut encore être humide à l'intérieur. Le technicien note les valeurs d'humidité lors de l'installation. Comparez-les après quelques semaines, et pour la peinture ou le papier peint, respectez la valeur limite du fabricant.",
      },
    ],
    realisaties: [],
  },
  herbeumont: {
    slug: "herbeumont",
    title: "Location de déshumidificateur à Herbeumont | Vernast",
    description:
      "Location de déshumidificateur à Herbeumont, Martilly ou Saint-Médard : maisons contre le versant de la vallée de la Semois, gîtes en forêt. Livré et installé.",
    h1: "Location de déshumidificateur à Herbeumont",
    kicker: "Province de Luxembourg · les ruines du château au-dessus de la Semois",
    rit: { afstand: "environ 205 km", tijd: "un peu plus de deux heures" },
    intro: [
      "Herbeumont se trouve **dans un grand méandre de la Semois**. Au-dessus du village se dressent sur les rochers les ruines d'un château médiéval. De là, vous voyez la rivière serpenter en boucles à travers les forêts. Outre Herbeumont, Martilly et Saint-Médard font partie de la commune. Depuis Aartselaar, il nous faut un peu plus de deux heures pour y arriver.",
      "La région est faite de **forêts profondes et de versants abrupts**, avec peu de terrain plat. Beaucoup de maisons se trouvent à la lisière de la forêt ou à mi-pente. Une bonne partie d'entre elles sont des secondes résidences et des gîtes pour randonneurs et kayakistes.",
    ],
    bouw: {
      kop: "Une maison contre le versant, et la forêt jusqu'au mur",
      alineas: [
        "Une habitation **construite contre le versant** a à l'arrière un mur en partie enterré. L'eau de pluie et l'eau souterraine y ruissellent, et ce mur reste humide la plus grande partie de l'année. Après une rénovation avec un nouveau plafonnage, vous voulez savoir si vous séchez de l'humidité de construction ou une humidité qui revient sans cesse. Pour cela, le technicien effectue **une mesure d'humidité au démarrage**.",
        "Là où la forêt est proche de la maison, la façade reçoit peu de soleil et sèche lentement après la pluie. À l'intérieur, vous le sentez à **l'air frais et humide** dans les pièces côté forêt. Dans une maison de vacances longtemps fermée, des moisissures apparaissent aux plafonds. Avec **un chauffage et un déshumidificateur**, vous rendez une telle maison à nouveau habitable.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**Pour la pièce froide côté versant.** Ce déshumidificateur à adsorption absorbe aussi l'humidité quand la température reste basse." },
      { key: "ttv4500", waarom: "Maintient l'air en mouvement le long **du mur arrière à moitié enterré dans le versant**, pour que l'humidité ne reste pas collée au plafonnage." },
      { key: "ttk170", waarom: "**Pour un gîte ou une petite maison de vacances.** Ce déshumidificateur compact retire jusqu'à 50 litres par jour dans des volumes jusqu'à environ 250 m³." },
      { key: "teddh20", waarom: "Réchauffe **une maison en forêt** restée sans chauffage tout l'hiver, jusqu'à ce que le déshumidificateur fonctionne bien. Il demande un raccordement en 400 V." },
    ],
    levering: {
      kop: "Livraison à Herbeumont : les derniers kilomètres à travers la forêt",
      alinea:
        "Il faut **un peu plus de deux heures de route**, avec après l'E411 encore un tronçon sur des routes étroites et sinueuses qui descendent dans la vallée. Lors de la réservation, vous choisissez une date de livraison, et nous convenons de l'heure avec vous. Nous pouvons ainsi combiner votre livraison avec d'autres adresses de la région. Si la maison se trouve le long d'un chemin forestier ou en haut d'une allée raide, **mentionnez-le lors de la réservation**, et le technicien emportera le bon matériel.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : plus de quatre heures aller-retour",
      alinea:
        "Notre point d'enlèvement se trouve à un peu plus de deux heures d'Herbeumont. Venir chercher un appareil vous coûte donc **plus de quatre heures aller-retour**, et après la location, vous devez encore le rapporter. Faites plutôt livrer : le technicien place le déshumidificateur, pose le tuyau d'évacuation et reprend tout après la location.",
    },
    buren: ["bertrix", "bouillon", "florenville", "chiny"],
    faq: [
      {
        q: "Le mur arrière de ma maison est enterré dans le versant. Puis-je l'assécher ?",
        a: "L'humidité de construction après une rénovation, oui, vous pouvez l'éliminer. Si, après chaque averse, de l'eau du versant ruisselle contre le mur, l'humidité revient à chaque fois. Il faut alors d'abord un drainage ou une barrière contre l'humidité. Une mesure d'humidité vous montre de quel cas il s'agit.",
      },
      {
        q: "Comment rendre une maison de vacances en forêt sèche avant la saison ?",
        a: "Commencez quelques semaines avant l'arrivée des premiers hôtes. Réchauffez d'abord la maison avec un chauffage, placez ensuite un déshumidificateur par étage et gardez fenêtres et portes fermées. Vous retirez ainsi l'humidité des murs et des textiles, et l'odeur de renfermé a disparu avant le début de la saison.",
      },
      {
        q: "La camionnette peut-elle aller jusqu'à une maison le long d'un chemin forestier ?",
        a: "Souvent oui, mais tous les chemins forestiers ne sont pas assez larges ou stabilisés. Décrivez l'accès lors de la réservation. Le technicien sait alors à l'avance s'il doit faire un bout à pied, et il emporte un diable pour les appareils.",
      },
      {
        q: "Pourquoi des moisissures apparaissent-elles au plafond de ma maison en lisière de forêt ?",
        a: "L'air intérieur chaud et humide se condense sur la surface la plus froide. Dans une maison à l'ombre de la forêt, c'est souvent le plafond sous un toit mal isolé. Un déshumidificateur fait baisser l'humidité de l'air, pour qu'il y ait moins de condensation. Les moisissures elles-mêmes, vous devez d'abord les nettoyer.",
      },
    ],
    realisaties: [],
  },
  libin: {
    slug: "libin",
    title: "Location de déshumidificateur à Libin et Redu | Vernast",
    description:
      "Location de déshumidificateur à Libin, Redu, Transinne ou Anloy ? Nous livrons et installons pour les maisons en pierre ardennaise et les fermes transformées.",
    h1: "Location de déshumidificateur à Libin",
    kicker: "Province de Luxembourg · Redu et Transinne",
    rit: { afstand: "environ 180 km", tijd: "environ deux heures" },
    intro: [
      "Libin se compose de villages ardennais dispersés sur le plateau entre Saint-Hubert et Daverdisse. Deux d'entre eux sont connus bien au-delà de la région : Transinne, avec l'**Euro Space Center** tout près de l'E411, et Redu, le **village du livre** avec ses bouquinistes dans d'anciennes fermes.",
      "Anloy, Ochamps et Villance font aussi partie de la commune. Ce sont de petits villages entre forêts et prairies, avec des maisons anciennes rénovées peu à peu et des constructions neuves en bordure. Depuis Aartselaar, il nous faut **environ deux heures** pour y arriver.",
    ],
    bouw: {
      kop: "Des fermes en pierre qui reçoivent une seconde vie",
      alineas: [
        "Typiques de la région, **les fermes en moellons** réunissent l'habitation et l'étable sous un même toit. Qui transforme une telle maison fait de l'étable un espace de vie, avec une nouvelle dalle en béton, une chape et de l'isolation. Beaucoup d'eau arrive ainsi d'un coup dans une pièce où les vieux murs restent froids tant que la maison n'a pas été chauffée un certain temps.",
        "À Redu et Anloy, les maisons sont serrées les unes contre les autres, certaines avec **une cave voûtée** qui reste fraîche même en été. Si le rez-de-chaussée devient un commerce ou un atelier après une transformation, il vous faut un déshumidificateur qui continue de fonctionner dans une pièce fraîche.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une étable transformée en espace de vie.** Retire jusqu'à 110 litres par jour de l'air, pour des volumes jusqu'à environ 600 m³." },
      { key: "radiaal2250", waarom: "Envoie un flux d'air **à ras de la nouvelle chape** dans une étable transformée, pour qu'elle sèche uniformément." },
      { key: "revolution", waarom: "Pour **une cave voûtée à Redu ou Anloy**, qui reste trop fraîche pour un appareil à condensation, même en été. Ce déshumidificateur à adsorption, lui, y fonctionne." },
      { key: "ttk170", waarom: "Un appareil compact pour **un commerce ou un atelier au rez-de-chaussée** après une petite transformation : 50 litres par jour, jusqu'à environ 250 m³." },
    ],
    levering: {
      kop: "Livraison à Libin, Redu et Transinne",
      alinea:
        "Libin se trouve tout près de l'E411, à **environ deux heures** d'Aartselaar. Vous choisissez une date de livraison lors de la réservation, et nous convenons avec vous de l'heure de livraison. Dans le centre étroit de Redu, il y a peu de place pour charger. Dites-nous donc à l'avance s'il y a **une allée ou une place de parking** près de la maison.",
    },
    afhalen: {
      kop: "Venir chercher le matériel à Aartselaar depuis Libin",
      alinea:
        "L'aller-retour vous prend **environ quatre heures**, et cela deux fois. Venir chercher le matériel vous coûte ainsi plus de temps que le suivi du séchage lui-même. **Faites livrer les appareils** : le technicien les installe et vient les reprendre le jour convenu.",
    },
    buren: ["saint-hubert", "libramont-chevigny", "daverdisse", "tellin"],
    faq: [
      {
        q: "Comment sécher une étable que j'intègre à mon habitation à Libin ?",
        a: "Placez un grand déshumidificateur au milieu de la pièce, un ventilateur sur le nouveau sol, et gardez fenêtres et portes fermées. Une nouvelle dalle en béton avec chape contient beaucoup d'eau, et les vieux murs restent longtemps froids. Une mesure d'humidité au démarrage vous montre plus tard combien de progrès ont été faits.",
      },
      {
        q: "Y a-t-il de la place à Redu pour garer la camionnette ?",
        a: "Au cœur du village du livre, les rues sont étroites et animées le week-end. Signalez lors de la réservation s'il y a une allée ou une place de parking près de la maison. En semaine, la livraison se passe généralement plus facilement, et le technicien emporte un diable pour le dernier bout de chemin.",
      },
      {
        q: "Un déshumidificateur à condensation fonctionne-t-il dans une cave voûtée ?",
        a: "Un déshumidificateur à condensation perd du rendement dès que la température descend sous environ 15 °C, et une cave voûtée reste souvent plus fraîche. Un déshumidificateur à adsorption y fonctionne mieux, car il absorbe l'humidité avec un dessiccant plutôt que par une surface froide.",
      },
      {
        q: "Combien de temps faut-il au technicien pour tout installer ?",
        a: "Pour une habitation, comptez une demi-heure à une heure. Il place les appareils par zone de séchage, installe l'évacuation de l'eau de condensation, effectue une première mesure d'humidité et vous montre comment tout utiliser. Pour une grande transformation, cela prend plus de temps.",
      },
    ],
    realisaties: [],
  },
  "libramont-chevigny": {
    slug: "libramont-chevigny",
    title: "Location de déshumidificateur à Libramont-Chevigny | Vernast",
    description:
      "Déshumidificateur à louer à Libramont-Chevigny, Recogne ou Bras : livré et installé sur le plateau ardennais, pour le neuf et les fermes rénovées.",
    h1: "Location de déshumidificateur à Libramont-Chevigny",
    kicker: "Province de Luxembourg · le plateau le long de l'E411",
    rit: { afstand: "environ 195 km", tijd: "environ deux heures" },
    intro: [
      "Libramont-Chevigny se trouve **au cœur de la province belge de Luxembourg**, sur le plateau ardennais et tout près de l'E411. En dehors de la région, on connaît surtout la commune pour **la Foire agricole de Libramont**, qui attire chaque été des visiteurs de tout le pays. Depuis Aartselaar, il nous faut environ deux heures pour y arriver.",
      "La commune comprend aussi Recogne, Bras, Freux, Moircy, Remagne, Saint-Pierre et Sainte-Marie-Chevigny. Avec une gare sur la ligne Bruxelles-Luxembourg, un hôpital et des écoles, Libramont est **le centre de la région**. De nouveaux lotissements apparaissent donc autour du centre.",
    ],
    bouw: {
      kop: "Constructions neuves autour du centre, vieilles fermes dans les villages",
      alineas: [
        "Dans les lotissements autour de Libramont et de Recogne, le séchage concerne surtout **la chape et le plafonnage**, qui doivent être prêts à temps pour le poseur de sol et le peintre. Sur le plateau, il fait plus froid au printemps et en automne qu'autour d'Anvers. Une chape froide libère lentement son humidité, et un déshumidificateur à condensation ne fonctionne bien qu'au-dessus d'environ 15 °C. **Un chauffage de chantier en plus** porte d'abord la pièce à température.",
        "Dans les villages se dressent des fermes en moellons aux toits d'ardoises, et souvent l'étable ou la grange est intégrée à l'habitation. Avec une nouvelle dalle, une chape et de l'isolation, on introduit **beaucoup d'eau dans un grand volume**, alors que les murs épais en pierre restent longtemps froids. Nous y plaçons un grand déshumidificateur au centre et un ventilateur qui envoie l'air le long du mur le plus froid.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison neuve dans un lotissement autour de Libramont.** Retire jusqu'à 70 litres par jour de l'air dans des pièces jusqu'à environ 400 m³, adapté à un rez-de-chaussée avec une chape fraîche." },
      { key: "ttk650", waarom: "Pour **une grange ou une étable rénovée à Bras ou Moircy** : 110 litres par jour, pour des volumes jusqu'à environ 600 m³." },
      { key: "teddh30", waarom: "Un chantier non chauffé sur le plateau descend sous 15 °C à l'entre-saison. Ce chauffage électrique de 30 kW ramène **un grand volume** à température et demande un raccordement en 400 V (courant triphasé)." },
      { key: "radiaal2250", waarom: "Souffle **bas et de manière ciblée sur une chape neuve**, pour qu'elle sèche sur toute sa surface et pas seulement sur les bords." },
    ],
    levering: {
      kop: "Livraison à Libramont-Chevigny",
      alinea:
        "Libramont se trouve à **environ deux heures** de notre entrepôt d'Aartselaar, via le ring de Bruxelles et l'E411. Vous choisissez une date de livraison lors de la réservation. En Wallonie, nous livrons **sur rendez-vous**, ce qui nous permet de combiner le trajet avec d'autres adresses dans la province. Le technicien met les appareils en place, effectue une première mesure d'humidité et vous explique comment les utiliser.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar depuis Libramont",
      alinea:
        "L'enlèvement est possible, mais vous roulez alors **environ quatre heures** aller-retour, et cela deux fois : à l'enlèvement et au retour. Un déshumidificateur est en outre lourd et doit être transporté debout. Pour une telle distance, **la livraison est le choix raisonnable**.",
    },
    buren: ["neufchateau", "bertrix", "libin", "saint-hubert", "sainte-ode"],
    faq: [
      {
        q: "Un déshumidificateur fonctionne-t-il sur le plateau froid de Libramont ?",
        a: "Oui, mais un déshumidificateur à condensation perd du rendement sous environ 15 °C. Sur un chantier non chauffé au printemps ou en automne, nous ajoutons donc un chauffage de chantier électrique. La pièce se réchauffe d'abord, ensuite le déshumidificateur retire l'humidité de l'air.",
      },
      {
        q: "Livrez-vous jusqu'à Libramont, si loin d'Anvers ?",
        a: "Oui. C'est l'un de nos plus longs trajets, environ deux heures par l'E411. Vous choisissez une date de livraison lors de la réservation et nous convenons avec vous de l'heure de livraison. Le coût de la livraison s'affiche à l'avance lors de la réservation.",
      },
      {
        q: "Comment sécher une étable transformée en habitation avant l'arrivée du poseur de sol ?",
        a: "Avec un grand déshumidificateur au centre, un ventilateur qui souffle sur la chape, et les fenêtres et les portes fermées. Une étable aux murs épais en pierre avec une nouvelle dalle en béton contient beaucoup d'eau. Faites mesurer l'humidité résiduelle avant que le poseur de sol commence, et convenez du moment où vous mesurerez à nouveau.",
      },
      {
        q: "Parlez-vous de la province belge de Luxembourg ou du Grand-Duché ?",
        a: "De la province belge. Libramont-Chevigny se trouve dans la province belge de Luxembourg, et c'est là que nous livrons. La province partage son nom avec le pays voisin, mais le Grand-Duché de Luxembourg ne fait pas partie de notre zone de livraison.",
      },
    ],
    realisaties: [],
  },
  leglise: {
    slug: "leglise",
    title: "Déshumidificateur de chantier à louer à Léglise | Vernast",
    description:
      "Déshumidificateur à louer à Léglise, Mellier, Witry ou Ebly : maisons près de la forêt d'Anlier, vieilles fermes et neuf. Livré et installé par un technicien.",
    h1: "Location de déshumidificateur à Léglise",
    kicker: "Province de Luxembourg · en bordure de la forêt d'Anlier",
    rit: { afstand: "environ 215 km", tijd: "un peu plus de deux heures" },
    intro: [
      "Léglise se trouve dans le sud de la province de Luxembourg, **entre Neufchâteau et Habay**. Une grande partie de la commune s'étend dans **la forêt d'Anlier**, un vaste massif boisé avec des étangs dans les clairières. Depuis Aartselaar, il nous faut un peu plus de deux heures pour y arriver.",
      "La commune est grande et rurale, avec des villages dispersés. Outre Léglise, elle comprend **Assenois, Ebly, Mellier et Witry**. Autour des anciens noyaux se dressent des fermes ardennaises en pierre, et en bordure des villages, de nouvelles maisons apparaissent, souvent près de la forêt.",
    ],
    bouw: {
      kop: "Fermes en lisière de forêt et constructions neuves sur sol humide",
      alineas: [
        "Près de la forêt, **l'air reste humide**, et une façade sèche lentement après la pluie. Une vieille ferme en bordure de la forêt d'Anlier, aux murs épais en pierre, est donc rarement tout à fait sèche. Si vous rénovez une telle ferme, le nouveau plafonnage reste longtemps humide. **Un déshumidificateur avec un ventilateur** à côté accélère les choses.",
        "Par endroits, le sol est lourd et humide, avec des étangs et des ruisseaux à proximité. Pour une construction neuve sur une telle parcelle, l'air extérieur est rarement sec, et **aérer ne suffit pas** pour sécher la chape ou le plafonnage. Lors de l'installation, le technicien effectue une **mesure d'humidité** du sol et du mur, pour que vous sachiez plus tard quand vous pourrez passer aux finitions.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une ferme rénovée en lisière de forêt**, étage par étage : jusqu'à 70 litres par jour, pour des pièces jusqu'à environ 400 m³." },
      { key: "ttk650", waarom: "**Pour une construction neuve avec une chape sur tout le rez-de-chaussée.** Jusqu'à 110 litres par jour, pour des pièces jusqu'à environ 600 m³." },
      { key: "radiaal2250", waarom: "Souffle de manière ciblée **sur une chape fraîche**, pour que le sol sèche uniformément, même dans un environnement humide." },
      { key: "revolution", waarom: "**Pour une cave froide ou une annexe** d'une vieille ferme. Ce déshumidificateur à adsorption continue de fonctionner là où il fait trop froid pour un appareil à condensation." },
    ],
    levering: {
      kop: "Livraison à Léglise : l'un de nos trajets les plus longs",
      alinea:
        "Léglise se trouve dans le sud de la province. Le trajet depuis Aartselaar par Bruxelles, Namur et l'E411 dure **un peu plus de deux heures**. Lors de la réservation, vous choisissez une date de livraison, et nous convenons de l'heure avec vous, afin de pouvoir combiner les livraisons dans la région. Indiquez le bon village et l'adresse complète : les villages sont **très éloignés les uns des autres**, parfois de part et d'autre de la forêt.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : pas pour qui habite à Léglise",
      alinea:
        "Notre point d'enlèvement se trouve à un peu plus de deux heures de Léglise. Aller-retour, vous êtes **plus de quatre heures sur la route**, et vous faites ce trajet deux fois. Cela ne vaut pas une livraison. Le technicien apporte les appareils jusque sur le chantier, les règle et vient les reprendre après la période de location.",
    },
    buren: ["neufchateau", "habay", "fauvillers", "vaux-sur-sure"],
    faq: [
      {
        q: "S'agit-il de la province de Luxembourg en Belgique ou du Grand-Duché ?",
        a: "Léglise se trouve dans la province belge de Luxembourg, pas au Grand-Duché. Les deux sont souvent confondus, parce qu'ils sont voisins et portent le même nom. Si votre chantier se trouve au Grand-Duché, contactez-nous d'abord.",
      },
      {
        q: "Pourquoi ma construction neuve en lisière de forêt sèche-t-elle si lentement ?",
        a: "Parce que l'air extérieur y est rarement sec. En aérant, vous faites entrer de l'air humide au lieu d'évacuer l'humidité. Gardez les fenêtres fermées et placez un déshumidificateur de chantier au rez-de-chaussée. Un ventilateur au-dessus du sol accélère le séchage de la chape et du plafonnage.",
      },
      {
        q: "Livrez-vous aussi à Assenois et Ebly ?",
        a: "Oui, dans tous les villages de Léglise. La commune est grande, indiquez donc l'adresse complète lors de la réservation. Vous choisissez une date de livraison, nous convenons de l'heure avec vous et planifions le trajet pour que le technicien arrive directement à la bonne adresse.",
      },
      {
        q: "Pendant combien de semaines louer un déshumidificateur pour une vieille ferme en pierre ?",
        a: "Comptez plutôt en semaines qu'en jours. Les murs épais en pierre au mortier de chaux libèrent leur eau lentement, surtout dans un environnement forestier humide. Louez pour une première période et utilisez la mesure du départ comme point de comparaison. Si les murs sont encore trop humides, vous pouvez prolonger.",
      },
    ],
    realisaties: [],
  },
  neufchateau: {
    slug: "neufchateau",
    title: "Neufchâteau : location de déshumidificateur | Vernast",
    description:
      "Déshumidificateur de chantier à louer à Neufchâteau, Longlier ou Hamipré : maisons de village en pierre et constructions neuves en province de Luxembourg.",
    h1: "Location de déshumidificateur à Neufchâteau",
    kicker: "Province de Luxembourg · chef-lieu d'arrondissement en altitude",
    rit: { afstand: "environ 205 km", tijd: "un peu plus de deux heures" },
    intro: [
      "Neufchâteau est **le chef-lieu de l'arrondissement du même nom** dans la province belge de Luxembourg. La petite ville se trouve au sud de Libramont, tout près de l'E411, et en dehors du centre, **le lac de Neufchâteau** s'étend dans la forêt. Depuis Aartselaar, nous y sommes en un peu plus de deux heures.",
      "La commune comprend aussi Longlier, Hamipré, Grapfontaine et Tournay. C'est une commune rurale avec **beaucoup de forêts et de prairies**, où vieilles maisons de village et habitations plus récentes le long des routes d'accès se côtoient.",
    ],
    bouw: {
      kop: "Maisons de village en pierre et habitations en lisière de forêt",
      alineas: [
        "Les maisons plus anciennes du centre et des villages sont construites en pierre naturelle, avec des ardoises sur le toit et des murs qui font parfois un demi-mètre d'épaisseur. Un tel mur n'a **pas de barrière contre l'humidité** et reste froid en hiver. Qui y fait poser un nouveau plafonnage sèche donc une masse froide et lourde, et non une fine cloison intérieure.",
        "En lisière de forêt et autour du lac, l'air est souvent humide, et le brouillard y persiste longtemps le matin. Une maison neuve qui y est mise sous toit ne se débarrasse pas de son humidité de construction en aérant. **Un déshumidificateur avec fenêtres et portes fermées** agit plus vite qu'une fenêtre ouverte qui laisse entrer l'air humide extérieur.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**Pour une seule pièce avec un nouveau plafonnage dans une maison de village en pierre.** Compact, jusqu'à 50 litres par jour dans des pièces jusqu'à environ 250 m³." },
      { key: "ttk350", waarom: "Pour **une maison neuve le long des routes d'accès de Neufchâteau**, où la chape et le plafonnage doivent sécher en même temps : 70 litres par jour." },
      { key: "ttv4500", waarom: "Contre un mur épais en pierre naturelle, une couche d'air saturé reste en place. Ce ventilateur de 4 500 m³/h la chasse, pour que le déshumidificateur puisse agir." },
      { key: "teddh20", waarom: "**Pour une pièce plus petite** dans une vieille maison restée non chauffée pendant l'hiver. Ce chauffage de 20 kW en 400 V porte d'abord la pièce au-dessus de 15 °C, puis le séchage commence." },
    ],
    levering: {
      kop: "Livraison à Neufchâteau et dans les villages",
      alinea:
        "Nous roulons **un peu plus de deux heures** jusqu'à Neufchâteau. Vous choisissez une date de livraison lors de la réservation, et comme nous livrons en Wallonie **sur rendez-vous**, nous vous appelons à l'avance pour fixer l'heure. Dans un centre de village aux rues étroites, le technicien emporte un diable. Il place chaque appareil dans la pièce où il doit se trouver et le met en marche.",
    },
    afhalen: {
      kop: "Venir chercher le matériel depuis Neufchâteau",
      alinea:
        "Jusqu'à Aartselaar et retour, vous êtes **plus de quatre heures sur la route**. Ajoutez-y le retour du matériel, et l'enlèvement vous coûte deux demi-journées. Un déshumidificateur est en outre lourd et doit voyager debout dans la voiture. **La livraison s'impose ici.**",
    },
    buren: ["libramont-chevigny", "leglise", "bertrix", "vaux-sur-sure"],
    faq: [
      {
        q: "Pourquoi ma maison en pierre à Neufchâteau sèche-t-elle si lentement après une rénovation ?",
        a: "Un mur en pierre naturelle sans barrière contre l'humidité est épais et froid, et libère son eau lentement. Cela ne tient pas au déshumidificateur mais au mur. Comptez plutôt en semaines qu'en jours, et faites faire une mesure d'humidité au départ comme point de comparaison.",
      },
      {
        q: "Puis-je ouvrir la fenêtre pendant que le déshumidificateur fonctionne ?",
        a: "Mieux vaut pas. Autour de Neufchâteau, l'air extérieur est souvent humide lui-même, surtout près de la forêt et du lac. Avec une fenêtre ouverte, l'appareil sèche aussi l'air extérieur et le séchage est plus lent. Gardez fenêtres et portes fermées tant que le déshumidificateur fonctionne.",
      },
      {
        q: "Qui doit accueillir le technicien sur place ?",
        a: "Indiquez lors de la réservation qui accueille le technicien sur place, pour que nous puissions convenir de la livraison et de la reprise avec la bonne personne. Pour toute autre question, n'hésitez pas à nous écrire ou à nous appeler.",
      },
      {
        q: "Combien d'appareils me faut-il pour une maison de village à Longlier ou Hamipré ?",
        a: "Pour une maison de deux niveaux, un déshumidificateur par étage suffit souvent, éventuellement avec un ventilateur dans la pièce la plus humide. Indiquez lors de la réservation la superficie et ce qui a été rénové, et nous composerons la combinaison pour votre maison.",
      },
    ],
    realisaties: [],
  },
  paliseul: {
    slug: "paliseul",
    title: "Louer un déshumidificateur à Paliseul et Maissin | Vernast",
    description:
      "Déshumidificateur à louer à Paliseul, Maissin, Carlsbourg ou Opont : villages ardennais au-dessus de la Semois, fermes et neuf. Livré par un technicien.",
    h1: "Location de déshumidificateur à Paliseul",
    kicker: "Province de Luxembourg · villages du plateau entre forêts et prairies",
    rit: { afstand: "environ 190 km", tijd: "environ deux heures" },
    intro: [
      "Paliseul se trouve **sur le plateau ardennais**, au nord de la vallée de la Semois. Outre Paliseul même, la commune comprend Carlsbourg, Maissin, Offagne, Fays-les-Veneurs, Nollevaux et Opont. Chaque village a un noyau de maisons en pierre, entouré de prairies et de forêts. Depuis Aartselaar, il nous faut environ deux heures pour y arriver.",
      "Sur les hauteurs, le paysage est ouvert, sur les versants boisé. Vous habitez ici plus haut et plus au sec que dans la vallée, mais **l'hiver ardennais est froid et humide**. Un chantier y reste donc plus longtemps à l'arrêt qu'en Flandre, et ce qui est coulé ou plafonné en automne sèche lentement.",
    ],
    bouw: {
      kop: "Vieilles fermes en moellons et transformations en habitation",
      alineas: [
        "Les villages comptent beaucoup de **fermes en long et de vieilles granges** en moellons, au toit d'ardoises. Si vous transformez une telle grange en habitation, vous coulez un nouveau sol sur une terre qui n'a jamais été sèche et vous plafonnez des murs qui n'ont connu que le foin et le bétail. Il y a là beaucoup d'humidité de construction. Lors de l'installation, le technicien effectue une **mesure d'humidité** et place les appareils là où l'humidité est la plus élevée.",
        "Sur le plateau, de nouvelles maisons sortent aussi de terre, souvent avec **une chape sur chauffage par le sol**. Ce chauffage ne peut être allumé que lorsque la chape est assez âgée, et alors selon le schéma de mise en chauffe du fournisseur. Pendant les semaines qui précèdent, **un déshumidificateur et un ventilateur** sèchent le sol.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une ferme ou une grange transformée.** Jusqu'à 70 litres par jour dans des pièces jusqu'à environ 400 m³, suffisant pour un rez-de-chaussée en moellons avec un nouveau plafonnage." },
      { key: "radiaal2250", waarom: "Souffle **sur une chape sur chauffage par le sol** tant que le chauffage ne peut pas encore être allumé, pour que le sol sèche uniformément." },
      { key: "teddh20", waarom: "Une **grange non isolée** ne dépasse pas d'elle-même quinze degrés en hiver. Ce chauffage en 400 V porte d'abord la pièce à température." },
      { key: "ttk170", waarom: "**Pour une seule pièce ou une salle de bains** dans une maison de village. Compact, jusqu'à 50 litres par jour, pour des pièces jusqu'à environ 250 m³." },
    ],
    levering: {
      kop: "Livraison à Paliseul : de l'E411 aux villages",
      alinea:
        "Nous passons par Namur, descendons l'E411 et prenons pour le dernier tronçon les routes de campagne du plateau. **Comptez environ deux heures.** Lors de la réservation, vous choisissez une date de livraison ; nous convenons de l'heure avec vous. Les villages sont très éloignés les uns des autres, indiquez donc **le bon village et l'accès au chantier**. Si la ferme a une cour ou une allée non revêtue, mentionnez-le, pour que le technicien sache où il peut décharger.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : une longue journée sur la route",
      alinea:
        "Notre point d'enlèvement se trouve à environ deux heures de Paliseul. Aller-retour, vous êtes **environ quatre heures sur la route**, et encore autant pour rapporter le matériel. Faites-vous livrer : vous ne perdez pas une journée sur l'E411, et le technicien place immédiatement le déshumidificateur au bon endroit.",
    },
    buren: ["bouillon", "bertrix", "libin", "bievre"],
    faq: [
      {
        q: "Je transforme une vieille grange en habitation. Combien de déshumidificateurs me faut-il ?",
        a: "Cela dépend du volume et de la quantité de nouvelle chape et de plafonnage. Une grange est souvent haute et ouverte, si bien que le volume est plus grand que ne le laisse supposer la surface au sol. Indiquez les dimensions lors de la réservation, et nous adapterons le nombre d'appareils en conséquence.",
      },
      {
        q: "Puis-je utiliser le chauffage par le sol pour sécher la chape ?",
        a: "Seulement lorsque la chape est assez âgée, et alors selon le schéma de mise en chauffe du fournisseur. Chauffer trop tôt ou trop fort peut provoquer des fissures. Pendant les semaines qui précèdent, un déshumidificateur de chantier et un ventilateur sèchent le sol sans ce risque, même par un hiver ardennais froid.",
      },
      {
        q: "Livrez-vous aussi à Opont et Nollevaux ?",
        a: "Oui, dans tous les villages de Paliseul. Ils sont dispersés sur le plateau, c'est pourquoi nous vous demandons l'adresse complète et une brève description de l'accès. Vous choisissez une date de livraison, nous convenons de l'heure avec vous et le technicien sait à l'avance où il doit se rendre.",
      },
      {
        q: "Pouvez-vous m'aider pour la réservation ou le choix des appareils ?",
        a: "Oui. Écrivez-nous ou appelez-nous. En cas de doute sur une étape de la réservation ou sur le choix des appareils, nous vous aidons volontiers.",
      },
    ],
    realisaties: [],
  },
  "saint-hubert": {
    slug: "saint-hubert",
    title: "Location de déshumidificateur à Saint-Hubert | Vernast",
    description:
      "Déshumidificateur à louer à Saint-Hubert, Arville ou Mirwart : installé dans les maisons anciennes près de la basilique et dans les villages forestiers.",
    h1: "Location de déshumidificateur à Saint-Hubert",
    kicker: "Province de Luxembourg · la basilique au cœur de la forêt",
    rit: { afstand: "environ 185 km", tijd: "environ deux heures" },
    intro: [
      "Saint-Hubert s'est développée autour de **la basilique de saint Hubert**, le patron des chasseurs. La petite ville se trouve au milieu **des vastes forêts** de l'Ardenne, à environ deux heures de route de notre entrepôt d'Aartselaar.",
      "La commune comprend aussi Arville, Awenne, Hatrival, Mirwart et Vesqueville, des villages installés dans des clairières de la forêt. Mirwart est connu pour son château. C'est une région peu peuplée, où **les maisons sont souvent très éloignées les unes des autres**.",
    ],
    bouw: {
      kop: "Maisons de ville anciennes autour de la basilique et maisons des villages forestiers",
      alineas: [
        "Dans le centre, des maisons plus anciennes en pierre et en brique se serrent autour de la basilique et de la place. Beaucoup ont une cave et des murs sans barrière contre l'humidité. Lors d'une rénovation, vous voulez savoir si l'eau dans le mur est de l'humidité de construction ou si elle remonte du sol. **Une mesure d'humidité à différentes hauteurs** rend cette différence visible.",
        "Dans les villages forestiers, l'humidité persiste longtemps après une période de pluie, car les arbres arrêtent le soleil et le sol sèche lentement. Une seconde résidence restée non chauffée pendant l'hiver a **des murs froids et de l'air humide** à l'intérieur. Le séchage y commence par la chaleur, et seulement ensuite par un déshumidificateur.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**Pour une cave froide dans le centre.** Ce déshumidificateur à adsorption absorbe encore l'humidité à basse température et sèche par des gaines." },
      { key: "teddh20", waarom: "Pour **une maison de vacances en forêt restée non chauffée pendant l'hiver**. Le chauffage de 20 kW en 400 V porte la pièce au-dessus de 15 °C, pour que le déshumidificateur atteigne ensuite son rendement." },
      { key: "ttk350", waarom: "Pour une maison de ville près de la basilique rénovée étage par étage : 70 litres par jour, dans des pièces jusqu'à environ 400 m³." },
      { key: "ttv4500", waarom: "Met en mouvement l'air immobile et humide d'une maison restée longtemps fermée, pour que **le déshumidificateur atteigne tout le volume**." },
    ],
    levering: {
      kop: "Livraison à Saint-Hubert et dans les villages forestiers",
      alinea:
        "Depuis Aartselaar, nous roulons **environ deux heures**, le dernier tronçon en quittant l'E411 et à travers la forêt. Vous choisissez une date de livraison lors de la réservation, et nous convenons de l'heure avec vous sur rendez-vous. Si votre maison se trouve le long d'un chemin forestier ou d'une allée non revêtue, **mentionnez-le lors de la réservation**. Le technicien saura alors jusqu'où la camionnette peut aller.",
    },
    afhalen: {
      kop: "Venir chercher le matériel depuis Saint-Hubert",
      alinea:
        "Notre point d'enlèvement se trouve à Aartselaar, à environ deux heures de route. Aller le chercher et le rapporter vous coûte en tout **environ huit heures en voiture**. Faites plutôt livrer les appareils : le technicien les place immédiatement dans la bonne pièce.",
    },
    buren: ["libin", "libramont-chevigny", "nassogne", "tellin", "tenneville"],
    faq: [
      {
        q: "Un déshumidificateur peut-il assécher une maison de vacances dans la forêt autour de Saint-Hubert ?",
        a: "Oui, tant que l'humidité vient de l'intérieur : condensation après un hiver froid ou humidité de construction après des travaux. Commencez par un chauffage pour réchauffer les murs, puis mettez le déshumidificateur en marche. Si de l'eau entre par le toit ou par un mur, faites d'abord réparer.",
      },
      {
        q: "Quel appareil convient à une cave froide dans le centre ?",
        a: "Dans une cave froide, un déshumidificateur à adsorption fonctionne mieux qu'un appareil à condensation, parce qu'il travaille avec un dessiccant et dépend moins de la température. Si l'eau revient après chaque averse, il s'agit d'humidité du sol, et sécher ne résout pas le problème durablement.",
      },
      {
        q: "La camionnette peut-elle accéder à une maison le long d'un chemin forestier ?",
        a: "Souvent oui, mais tous les chemins forestiers ne s'y prêtent pas. Indiquez lors de la réservation si le chemin est revêtu et à quelle distance de la rue se trouve la maison. Le technicien emportera alors un diable et conviendra avec vous de l'endroit où il peut s'arrêter.",
      },
      {
        q: "Tenez-vous compte de la chasse autour de Saint-Hubert ?",
        a: "Pendant une chasse en battue, certains chemins forestiers sont temporairement fermés. Si vous savez qu'une chasse a lieu près de chez vous le jour de la livraison ou de la reprise, prévenez-nous. Nous adapterons alors l'itinéraire et l'heure de livraison.",
      },
    ],
    realisaties: [],
  },
  tellin: {
    slug: "tellin",
    title: "Location de déshumidificateur à Tellin et Bure | Vernast",
    description:
      "Déshumidificateur de chantier à louer à Tellin, Bure, Grupont ou Resteigne : livraison et installation dans les maisons en calcaire entre Famenne et Ardenne.",
    h1: "Location de déshumidificateur à Tellin",
    kicker: "Province de Luxembourg · entre Famenne et Ardenne",
    rit: { afstand: "environ 170 km", tijd: "près de deux heures" },
    intro: [
      "Tellin se trouve **à la limite entre la Famenne et l'Ardenne**, sur l'étroite bande calcaire que l'on appelle **la Calestienne**. Au sud du village commence la forêt qui s'étend jusqu'à Saint-Hubert. Depuis Aartselaar, il nous faut près de deux heures pour y arriver.",
      "La commune comprend aussi Bure, Grupont et Resteigne. Grupont se trouve dans la vallée de la Lomme, Resteigne et son château au bord de la Lesse. En quelques kilomètres, vous passez ici **des pelouses calcaires ouvertes aux forêts denses**.",
    ],
    bouw: {
      kop: "Maisons en calcaire et maisons dans la vallée",
      alineas: [
        "Les habitations plus anciennes sont souvent construites ici en **calcaire gris** de la région. C'est une pierre dure et froide, et dans un mur sans barrière contre l'humidité, l'humidité du sol peut remonter par le bas. Après une rénovation avec un nouveau plafonnage, vous voulez évacuer rapidement l'humidité de construction, sans la confondre avec l'humidité ascensionnelle.",
        "À Grupont et à Resteigne, des maisons se trouvent près de l'eau, là où le sol est humide et l'air chargé d'humidité le matin. Un rez-de-chaussée ou une cave dans la vallée sèche au mieux après des travaux avec fenêtres et portes fermées, et avec **un déshumidificateur qui continue de fonctionner à basse température**.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison de village en calcaire entièrement rénovée.** Jusqu'à 70 litres par jour, dans des pièces jusqu'à environ 400 m³." },
      { key: "revolution", waarom: "Pour **une cave dans la vallée de la Lomme ou de la Lesse**, où il fait trop froid pour un appareil à condensation. Ce déshumidificateur à adsorption fonctionne par des gaines." },
      { key: "ttv4500", waarom: "Contre un mur froid en calcaire, une couche d'air humide reste en place. Ce ventilateur la chasse, pour que **le mur sèche plus vite**." },
      { key: "teddh30", waarom: "Pour **une grande transformation à Bure ou à Tellin** au printemps. Le chauffage de 30 kW sur courant triphasé porte un volume non chauffé au-dessus de 15 °C, là où le déshumidificateur atteint son rendement." },
    ],
    levering: {
      kop: "Livraison à Tellin, Bure, Grupont et Resteigne",
      alinea:
        "Tellin se trouve tout près de l'E411, à **près de deux heures** d'Aartselaar. Lors de la réservation, vous fixez la date de livraison. Comme nous livrons en Wallonie **sur rendez-vous**, nous fixons l'heure ensemble et combinons votre adresse avec d'autres livraisons autour de la Famenne. Le technicien place les appareils et vous montre où s'écoule l'eau de condensation.",
    },
    afhalen: {
      kop: "Venir chercher le matériel depuis Tellin",
      alinea:
        "Jusqu'à Aartselaar et retour, vous roulez **près de quatre heures**, sans embouteillages sur le ring de Bruxelles. Qui vient chercher le matériel fait ce trajet deux fois. **La livraison est ici le choix pratique.**",
    },
    buren: ["wellin", "rochefort", "nassogne", "saint-hubert"],
    faq: [
      {
        q: "L'humidité dans un mur en calcaire à Tellin, est-ce de l'humidité de construction ou de l'humidité ascensionnelle ?",
        a: "Cela dépend de l'endroit où elle se trouve et du fait qu'elle revienne ou non. L'humidité de construction est répartie dans le plafonnage frais et disparaît au séchage. L'humidité ascensionnelle se trouve au bas du mur et revient chaque fois. Une mesure d'humidité à différentes hauteurs fait clairement la différence.",
      },
      {
        q: "Comment sécher une maison à Grupont, près de la Lomme ?",
        a: "Gardez fenêtres et portes fermées, car l'air de la vallée est souvent humide lui-même. Placez le déshumidificateur dans la pièce la plus humide et un ventilateur contre le mur le plus froid. Dans une cave froide, un déshumidificateur à adsorption fonctionne mieux qu'un appareil à condensation.",
      },
      {
        q: "Combien de temps un déshumidificateur reste-t-il dans une maison en calcaire rénovée ?",
        a: "Cela dépend de l'épaisseur du plafonnage ou de la chape, de la température et de l'humidité de l'air. Des murs épais et froids sèchent plus lentement qu'une fine cloison intérieure. Faites mesurer l'humidité résiduelle avant les finitions, et prolongez la location si les valeurs sont encore trop élevées.",
      },
      {
        q: "Livrez-vous aussi en Famenne ?",
        a: "Oui, Tellin fait partie de notre zone de livraison, même si c'est l'un des trajets les plus longs. C'est pourquoi nous regroupons les livraisons dans la région. Vous choisissez une date de livraison et nous convenons de l'heure avec vous, pour que vous ne deviez pas attendre toute la journée chez vous.",
      },
    ],
    realisaties: [],
  },
  wellin: {
    slug: "wellin",
    title: "Déshumidificateur de chantier à Wellin et Sohier | Vernast",
    description:
      "Location de déshumidificateur à Wellin, Halma, Chanly ou Sohier : installé dans les maisons en pierre et les fermes rénovées de la Calestienne.",
    h1: "Location de déshumidificateur à Wellin",
    kicker: "Province de Luxembourg · villages en pierre sur la Calestienne",
    rit: { afstand: "environ 165 km", tijd: "un peu plus d'une heure et demie" },
    intro: [
      "Wellin se trouve **au nord-ouest de la province belge de Luxembourg**, contre la limite avec la province de Namur et tout près de l'E411. La commune s'étend sur la crête calcaire de **la Calestienne**, entre la Famenne plane au nord et l'Ardenne boisée au sud. Depuis Aartselaar, nous y sommes en un peu plus d'une heure et demie.",
      "La commune comprend aussi Halma, Chanly, Lomprez et Sohier. Ce sont de **petits villages en pierre grise**, avec des fermes et des maisons de village autour de l'église, et entre eux des prairies et des forêts.",
    ],
    bouw: {
      kop: "Pierre naturelle, sol calcaire et vieilles fermes",
      alineas: [
        "Sur la Calestienne, l'eau de pluie s'infiltre rapidement dans le sous-sol calcaire, mais les maisons elles-mêmes sont bâties en **calcaire froid**. Une maison de village rénovée à Sohier ou à Chanly a donc des murs épais qui restent longtemps froids, même quand le chauffage est rallumé. Avec **un chauffage de chantier au départ**, le déshumidificateur atteint plus vite son rendement.",
        "Beaucoup de vieilles fermes sont transformées ici en habitation ou en maison de vacances. Cela implique un nouveau sol, de l'isolation et beaucoup de plafonnage, dans **un volume grand et haut**. Nous y plaçons un grand déshumidificateur et un ventilateur qui fait circuler l'air, pour qu'aucun coin humide ne subsiste.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une ferme transformée en maison de vacances.** Jusqu'à 110 litres par jour, pour des volumes jusqu'à environ 600 m³." },
      { key: "teddh20", waarom: "Réchauffe **une pièce froide en pierre naturelle** à Sohier ou à Chanly au-dessus de 15 °C, pour qu'un déshumidificateur à condensation atteigne son rendement. Demande un raccordement en 400 V." },
      { key: "ttk170", waarom: "Pour **une salle de bains ou une chambre** dans une maison de village de Wellin : compact, 50 litres par jour et 0,75 kW." },
      { key: "ttv4500", waarom: "Fait circuler l'air dans **une pièce haute sous le toit d'une ferme**, avec 4 500 m³/h pour une consommation de 0,2 kW." },
    ],
    levering: {
      kop: "Livraison à Wellin et dans les villages alentour",
      alinea:
        "Wellin se trouve à **un peu plus d'une heure et demie** d'Aartselaar, via le ring de Bruxelles et l'E411. Vous choisissez vous-même la date de livraison lors de la réservation. En Wallonie, nous livrons sur rendez-vous, ce qui nous permet de combiner votre adresse avec d'autres livraisons autour de Rochefort et de la Famenne. Le technicien place les appareils pièce par pièce et effectue **une première mesure d'humidité**.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar depuis Wellin",
      alinea:
        "Depuis Wellin, vous êtes **plus de trois heures sur la route** aller-retour, et vous faites ce trajet deux fois. Un déshumidificateur est lourd et doit être transporté debout. **Faites plutôt livrer les appareils.**",
    },
    buren: ["tellin", "rochefort", "daverdisse"],
    faq: [
      {
        q: "Comment aborder une ferme rénovée à Wellin avec des déshumidificateurs de chantier ?",
        a: "Travaillez par zone : un grand déshumidificateur dans la pièce avec le nouveau sol, un plus petit dans les chambres au plafonnage frais et un ventilateur pour les pièces hautes. Indiquez lors de la réservation la superficie et ce qui a été rénové, et nous composerons la combinaison.",
      },
      {
        q: "Pourquoi un mur en pierre naturelle à Sohier reste-t-il si longtemps froid ?",
        a: "Le calcaire est lourd et dense, et un mur d'un demi-mètre ou plus se réchauffe lentement. Tant que le mur est froid, l'humidité s'y dépose. Un chauffage au départ et un déshumidificateur avec fenêtres et portes fermées règlent cela plus vite.",
      },
      {
        q: "Puis-je louer un déshumidificateur pour une maison de vacances que je n'habite pas moi-même ?",
        a: "Oui. Convenez lors de la réservation de qui ouvre au technicien à la livraison et à la reprise. Demandez lors de l'installation comment l'eau de condensation est évacuée, pour que le déshumidificateur ne s'arrête pas avec un bac plein pendant votre absence.",
      },
      {
        q: "Combien de temps dure le trajet d'Aartselaar à Wellin ?",
        a: "Un peu plus d'une heure et demie via le ring de Bruxelles et l'E411, plus longtemps aux heures de pointe. Après votre réservation avec date de livraison, nous vous appelons pour convenir de l'heure. Vous ne devez ainsi pas bloquer toute la journée.",
      },
    ],
    realisaties: [],
  },
  attert: {
    slug: "attert",
    title: "Attert : déshumidificateur de chantier à louer | Vernast",
    description:
      "Déshumidificateur à louer à Attert, au nord d'Arlon : neuf et fermes rénovées dans la vallée de l'Attert. Livraison sur rendez-vous et installation.",
    h1: "Location de déshumidificateur à Attert",
    kicker: "Province de Luxembourg · la vallée de l'Attert",
    rit: { afstand: "environ 230 km", tijd: "un peu plus de deux heures" },
    intro: [
      "Attert se trouve **au nord d'Arlon**, dans la vallée de la rivière du même nom, qui coule plus loin vers le Grand-Duché. La commune comprend des villages comme Nobressart, Nothomb, Thiaumont et Tontelange. La vallée est un **parc naturel**.",
      "Beaucoup d'habitants travaillent au Grand-Duché. De **nouvelles maisons** côtoient donc les anciennes fermes allongées, et chacune demande une autre approche pour le séchage. Notre technicien met un peu plus de deux heures pour y arriver.",
    ],
    bouw: {
      kop: "Nouvelles maisons en bordure des villages, vieilles fermes dans la vallée",
      alineas: [
        "Dans une maison neuve, l'eau se trouve surtout dans **la chape et le plafonnage**. Elle doit en sortir avant la pose du parquet ou du carrelage. Une maison en terrain ouvert se refroidit vite, et dans une pièce froide, une chape fraîche sèche lentement. Un ventilateur radial qui souffle bas au-dessus du sol fait sécher la couche supérieure uniformément.",
        "Dans les **fermes en pierre naturelle**, on transforme surtout : une grange ou une étable devient un espace de vie, avec des murs épais sans barrière contre l'humidité et souvent une nouvelle dalle. Une partie de cette humidité était là bien avant les travaux. Faites donc d'abord mesurer quelle part est de l'humidité de construction, car c'est la seule qu'un déshumidificateur élimine.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison neuve en bordure du village** : 70 litres par jour, pour un volume jusqu'à environ 400 m³." },
      { key: "radiaal2250", waarom: "Ce ventilateur radial (2 250 m³/h) souffle **bas et de manière ciblée sur une chape fraîche**, pour que le sol sèche uniformément." },
      { key: "ttk650", waarom: "Pour **une grange ou une étable transformée** au grand volume et aux murs épais en pierre : 110 litres par jour, jusqu'à environ 600 m³." },
      { key: "teddh20", waarom: "Porte **une maison non chauffée** au-dessus de 15 °C, pour que le déshumidificateur fonctionne bien. Ce chauffage de 20 kW demande du courant triphasé (400 V)." },
    ],
    levering: {
      kop: "Livraison à Attert : un long trajet, bien planifié",
      alinea:
        "Attert se trouve à un peu plus de deux heures de route d'Aartselaar, au-delà de Namur et d'Arlon. Lors de la réservation, vous choisissez **une date de livraison**. Nous convenons ensuite de l'heure de livraison par téléphone ou par e-mail. Si la maison se trouve le long d'un chemin de campagne étroit ou derrière une cour avec un portail, décrivez l'accès. Le technicien saura ainsi à l'avance comment rentrer les appareils.",
    },
    afhalen: {
      kop: "Venir chercher le matériel depuis Attert a rarement du sens",
      alinea:
        "L'aller-retour jusqu'à Aartselaar vous prend **plus de quatre heures**, et cela vous coûte une journée de travail. Un déshumidificateur doit en outre être transporté debout. Faites-le plutôt livrer, il sera alors immédiatement bien installé.",
    },
    buren: ["aarlen", "habay"],
    faq: [
      {
        q: "Combien de temps une chape doit-elle sécher dans une construction neuve à Attert ?",
        a: "Cela dépend de l'épaisseur, du type de chape et de la température dans la maison. Avec un déshumidificateur, les fenêtres fermées et un ventilateur au-dessus du sol, cela va plus vite que naturellement. Faites mesurer l'humidité résiduelle avant que le poseur de sol commence.",
      },
      {
        q: "Puis-je utiliser un déshumidificateur de chantier dans une ferme rénovée ?",
        a: "Oui, pour l'humidité de construction de la nouvelle chape, du plafonnage et du mortier. Un vieux mur en pierre sans barrière contre l'humidité aspire toutefois l'humidité du sol, et un déshumidificateur ne résout pas cela durablement. Faites donc mesurer l'humidité des murs et d'où elle provient.",
      },
      {
        q: "Livrez-vous aussi dans les plus petits villages de la vallée de l'Attert ?",
        a: "Oui, dans toute la commune, y compris dans les plus petits hameaux. Indiquez l'adresse complète lors de la réservation et décrivez l'accès. Une allée étroite ou une cour avec un portail ne pose pas de problème si le technicien le sait à l'avance.",
      },
      {
        q: "S'agit-il bien d'Attert en Belgique ?",
        a: "Oui. Attert est une commune de la province belge de Luxembourg, entre Arlon et la frontière avec le Grand-Duché. Pour un chantier de l'autre côté de la frontière, mieux vaut nous contacter d'abord.",
      },
    ],
    realisaties: [],
  },
  aubange: {
    slug: "aubange",
    title: "Location de déshumidificateur à Aubange et Athus | Vernast",
    description:
      "Déshumidificateur à louer à Aubange, Athus ou Halanzy : maisons ouvrières rénovées et neuf près des trois frontières. Livré et installé sur rendez-vous.",
    h1: "Location de déshumidificateur à Aubange",
    kicker: "Province de Luxembourg · au point des trois frontières",
    rit: { afstand: "environ 245 km", tijd: "environ deux heures et demie" },
    intro: [
      "Aubange se trouve dans le coin sud-est de la province de Luxembourg. À Athus, la Belgique, la France et le Grand-Duché se rejoignent en un **point des trois frontières**. **Aix-sur-Cloie, Battincourt, Halanzy et Rachecourt** font aussi partie de la commune.",
      "Athus a longtemps été une ville sidérurgique : les hauts fourneaux y ont marqué le paysage urbain jusqu'à leur fermeture dans les années septante. Aujourd'hui, beaucoup d'habitants **travaillent de l'autre côté de la frontière**. Les bâtiments anciens sont rénovés et des constructions neuves apparaissent en bordure des villages. Il nous faut environ deux heures et demie pour y arriver.",
    ],
    bouw: {
      kop: "Maisons ouvrières à Athus, constructions neuves en périphérie",
      alineas: [
        "À Athus, on trouve beaucoup de **maisons mitoyennes de l'époque de la sidérurgie** : étroites, profondes et souvent avec une cave sans barrière contre l'humidité. Qui rénove une telle maison pose un nouveau plafonnage et parfois une nouvelle chape dans de petites pièces. Un appareil compact par étage, porte fermée, y sèche mieux qu'un seul grand appareil dans le couloir.",
        "En bordure des sections sortent de terre **de nouvelles maisons et des appartements**. La date de réception y est fixée et la chape doit être sèche avant l'arrivée du poseur de sol. Un ventilateur qui fait circuler l'air dans toute la maison aide aussi à sécher les coins les plus humides.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**Pour une maison ouvrière à Athus** rénovée pièce par pièce : 50 litres par jour, assez compact pour un escalier étroit." },
      { key: "ttk350", waarom: "Pour **une construction neuve à Halanzy ou à Aix-sur-Cloie** avec une chape et un plafonnage frais : 70 litres par jour, jusqu'à environ 400 m³." },
      { key: "ttv4500", waarom: "Dans **une maison mitoyenne étroite et profonde**, ce ventilateur (4 500 m³/h) envoie l'air sec vers l'arrière, là où le déshumidificateur lui-même n'arrive pas." },
      { key: "teddh30", waarom: "**Pour une cave ou un rez-de-chaussée qui reste froid en hiver** : d'abord réchauffer au-dessus de 15 °C, puis sécher. Ce chauffage demande du courant triphasé (400 V)." },
    ],
    levering: {
      kop: "Livraison à Aubange : jusqu'au coin sud-est du pays",
      alinea:
        "Jusqu'à Aubange, nous roulons environ deux heures et demie, par l'E411 jusqu'au-delà d'Arlon. C'est l'un de nos plus longs trajets. Vous choisissez **une date de livraison** lors de la réservation, et comme il s'agit de la Wallonie, nous livrons sur rendez-vous. Le technicien met les appareils en place et les règle.",
    },
    afhalen: {
      kop: "Venir chercher le matériel depuis Aubange : préférez la livraison",
      alinea:
        "Jusqu'à notre point d'enlèvement à Aartselaar et retour, vous êtes **environ cinq heures sur la route**, sans embouteillages. Pour un ou deux déshumidificateurs, cela en vaut rarement la peine. Avec la livraison, vous n'avez en outre pas à charger un appareil lourd debout dans votre voiture.",
    },
    buren: ["messancy", "musson"],
    faq: [
      {
        q: "Livrez-vous aussi en France ou au Grand-Duché depuis Aubange ?",
        a: "Nous livrons dans tout Aubange, y compris à Athus, tout près du point des trois frontières. Si votre chantier se trouve du côté français ou luxembourgeois de la frontière, contactez-nous d'abord. Nous verrons ensemble ce qui est possible.",
      },
      {
        q: "Comment sécher une vieille maison mitoyenne à Athus après une rénovation ?",
        a: "Placez un déshumidificateur compact par étage, gardez fenêtres et portes fermées et laissez éventuellement un ventilateur envoyer l'air de l'avant vers l'arrière. Une cave sans barrière contre l'humidité reste fraîche et sèche plus lentement. Un chauffage de chantier à côté du déshumidificateur y aide.",
      },
      {
        q: "Comment planifier une livraison à Aubange ?",
        a: "Vous réservez en ligne et choisissez une date de livraison. Comme le trajet dure environ deux heures et demie, nous convenons de l'heure de livraison avec vous. Réservez de préférence à temps, surtout si le poseur de sol est déjà planifié.",
      },
      {
        q: "Mon entrepreneur suit le chantier. Que dois-je vous communiquer ?",
        a: "Si vous travaillez avec un entrepreneur ou un poseur de sol, il est utile de nous indiquer à l'avance qui est la personne de contact sur le chantier, et à quel moment. Pour toute question, n'hésitez pas à nous écrire ou à nous appeler.",
      },
    ],
    realisaties: [],
  },
  martelange: {
    slug: "martelange",
    title: "Déshumidificateur de chantier à Martelange | Vernast",
    description:
      "Déshumidificateur à Martelange : maisons en pierre dans la vallée de la Sûre et neuf le long de la N4. Livraison sur rendez-vous, appareils réglés.",
    h1: "Location de déshumidificateur à Martelange",
    kicker: "Province de Luxembourg · au bord de la Sûre et de la N4",
    rit: { afstand: "environ 210 km", tijd: "un peu plus de deux heures" },
    intro: [
      "Martelange est une petite commune dans la vallée de **la Sûre**, qui forme ici la frontière avec le Grand-Duché. Qui roule vers le sud par la **N4** connaît la rangée de stations-service du côté luxembourgeois de la route.",
      "Le village a une longue histoire de **village ardoisier**. Dans les collines autour de la vallée, on extrayait l'ardoise, et cela se voit encore sur les toits et les façades des maisons plus anciennes. Depuis Aartselaar, nous y sommes en un peu plus de deux heures.",
    ],
    bouw: {
      kop: "Ardoise et pierre naturelle dans une étroite vallée",
      alineas: [
        "Beaucoup de maisons anciennes sont adossées **à la pente de la vallée**, avec des murs en pierre naturelle et une cave à moitié enterrée. Côté colline, cette cave est froide et humide. Après une rénovation avec un nouveau plafonnage, vous voulez savoir quelle humidité vient des travaux et laquelle vient de la pente. Une mesure d'humidité le montre clairement.",
        "Le long de la N4 et en bordure du village, on transforme et on construit aussi. Dans une vallée, **l'air humide stagne longtemps**, et les hivers sont froids. Gardez les fenêtres fermées, laissez un ventilateur faire circuler l'air et ajoutez en hiver un chauffage de chantier.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**Pour une cave froide côté colline** : ce déshumidificateur à adsorption continue d'absorber l'humidité même dans le froid et peut sécher de manière ciblée par des gaines." },
      { key: "ttk170", waarom: "Pour **une pièce ou une salle de bains dans une vieille maison en pierre** : compact, 50 litres par jour, pour un volume jusqu'à environ 250 m³." },
      { key: "teddh20", waarom: "Porte d'abord **un étage non chauffé** au-dessus de 15 °C, pour qu'un déshumidificateur à condensation se mette en route. Ce chauffage de 20 kW fonctionne en 400 V." },
      { key: "ttv4500", waarom: "Le long d'**un mur épais en pierre naturelle**, ce ventilateur maintient l'air en mouvement, pour que le déshumidificateur absorbe l'humidité plus vite." },
    ],
    levering: {
      kop: "Livraison à Martelange : par l'E411 et la N4",
      alinea:
        "Nous roulons un peu plus de deux heures, par Bruxelles et Namur vers l'E411, et le dernier tronçon par la N4. Vous fixez **une date de livraison** lors de la réservation, et nous fixons l'heure ensemble. Si la maison se trouve du côté raide de la vallée, signalez-le à l'avance. Le technicien saura ainsi comment rentrer les appareils.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : quatre heures de route pour un appareil",
      alinea:
        "L'aller-retour jusqu'à notre point d'enlèvement vous prend **plus de quatre heures**. C'est une journée entière pour un appareil que nous venons apporter et installer en un seul trajet. L'enlèvement n'en vaut la peine que si vous êtes de toute façon dans les environs d'Anvers.",
    },
    buren: ["fauvillers", "attert"],
    faq: [
      {
        q: "Martelange est à la frontière. Livrez-vous des deux côtés de la Sûre ?",
        a: "Nous livrons dans tout Martelange, du côté belge de la rivière. S'il s'agit d'une adresse de l'autre côté, au Grand-Duché, contactez-nous d'abord. Nous verrons alors si et quand nous pouvons livrer.",
      },
      {
        q: "Un déshumidificateur aide-t-il dans une vieille maison en ardoise et en pierre naturelle ?",
        a: "Pour l'humidité de construction après une rénovation, oui : celle d'un nouveau plafonnage, d'une nouvelle chape ou d'un mortier frais entre les pierres. Un mur sans barrière contre l'humidité adossé à la pente peut toutefois continuer d'apporter de l'humidité. Une mesure d'humidité montre lequel des deux vous avez.",
      },
      {
        q: "Combien de temps dure le trajet d'Aartselaar à Martelange ?",
        a: "Comptez un peu plus de deux heures, et davantage aux heures de pointe autour de Bruxelles ou de Namur. C'est pourquoi nous convenons de l'heure de livraison avec vous, pour que vous ne deviez pas attendre le technicien toute la journée.",
      },
      {
        q: "Ma cave reste froide, même en été. Quel déshumidificateur choisir ?",
        a: "Si la cave reste toute l'année sous environ 15 °C, un déshumidificateur à condensation y retire peu d'humidité. Un déshumidificateur à adsorption, lui, y fonctionne. Si vous pouvez chauffer la cave, un chauffage de chantier à côté d'un appareil à condensation est aussi possible.",
      },
    ],
    realisaties: [],
  },
  messancy: {
    slug: "messancy",
    title: "Louer un déshumidificateur à Messancy et Habergy | Vernast",
    description:
      "Déshumidificateur à louer à Messancy, Habergy ou Wolkrange : constructions neuves avec chape et maisons de village rénovées au sud d'Arlon. Livré et installé.",
    h1: "Location de déshumidificateur à Messancy",
    kicker: "Province de Luxembourg · au sud d'Arlon",
    rit: { afstand: "environ 235 km", tijd: "un peu plus de deux heures" },
    intro: [
      "Messancy se trouve **entre Arlon et Aubange**, dans le sud de la province de Luxembourg, avec la frontière du Grand-Duché à l'est. La commune comprend aussi **Habergy, Hondelange, Sélange, Turpange et Wolkrange**.",
      "La commune a fortement grandi ces dernières décennies. La ville de Luxembourg est toute proche, ce qui attire des familles qui travaillent de l'autre côté de la frontière. Autour des anciens noyaux villageois se sont donc développés de **nouveaux lotissements**. Depuis Aartselaar, il vous faut un peu plus de deux heures pour y arriver.",
    ],
    bouw: {
      kop: "Quartiers neufs autour des vieilles rues de village",
      alineas: [
        "La plupart des chantiers à Messancy sont des **constructions neuves**, avec chape, plafonnage et souvent chauffage par le sol. L'eau se trouve alors surtout dans le sol. Avec un chauffage par le sol, la chape doit d'abord être suffisamment sèche avant que vous puissiez le mettre en route. Un ventilateur radial qui souffle sur le sol accélère le séchage.",
        "Les **maisons de village plus anciennes** sont longues et profondes, avec l'habitation à l'avant et une grange derrière. Qui intègre cette grange à la maison doit sécher un grand volume avec de nouveaux sols et de vieux murs. Placez alors un grand appareil par zone et fermez les portes intérieures. Cela fonctionne mieux qu'un seul appareil au milieu.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison neuve dans un lotissement** : 70 litres par jour, pour un volume jusqu'à environ 400 m³." },
      { key: "radiaal2250", waarom: "Souffle **sur une chape fraîche posée sur chauffage par le sol**, pour que la couche supérieure sèche de manière uniforme. Il débite 2 250 m³/h et est conçu en IP55." },
      { key: "ttk650", waarom: "Pour **une maison de village dont la grange devient habitable** : beaucoup de sol neuf dans un grand volume, 110 litres par jour." },
      { key: "ttv4500", waarom: "Dans **une maison de village longue et profonde**, ce ventilateur pousse l'air sec de la partie habitée vers la grange transformée." },
    ],
    levering: {
      kop: "Livraison à Messancy : par l'E411, au-delà d'Arlon",
      alinea:
        "Messancy est à un peu plus de deux heures de route d'Aartselaar, et c'est l'un des endroits les plus éloignés où nous livrons. Vous choisissez **une date de livraison** lors de la réservation, et nous convenons avec vous de l'heure de livraison. Le technicien met les appareils en place et les règle.",
    },
    afhalen: {
      kop: "Enlèvement depuis Messancy : une journée sur la route",
      alinea:
        "L'aller-retour jusqu'à Aartselaar vous prend **plus de quatre heures**. Si vous devez de toute façon passer près d'Anvers, c'est possible. Sinon, mieux vaut la livraison, surtout pour une construction neuve où il faut un ventilateur en plus du déshumidificateur.",
    },
    buren: ["aarlen", "aubange", "musson"],
    faq: [
      {
        q: "Puis-je utiliser le chauffage par le sol pour sécher la chape plus vite ?",
        a: "Seulement lorsque le chapiste ou le fabricant du système l'autorise, et alors selon un protocole de mise en chauffe. Chauffer trop tôt ou trop vite peut faire fissurer la chape. Entre-temps, un déshumidificateur avec un ventilateur sur le sol retire l'humidité de l'air, sans ce risque.",
      },
      {
        q: "Combien de déshumidificateurs me faut-il pour une construction neuve à Messancy ?",
        a: "Pour une maison familiale ordinaire, un déshumidificateur de taille moyenne par étage suffit généralement, avec les fenêtres fermées et un ventilateur sur le sol le plus humide. Pour un grand volume ou une date de réception serrée, mieux vaut choisir un appareil plus grand. Le calculateur vous permet de composer votre pack.",
      },
      {
        q: "Venez-vous depuis Anvers jusqu'à Messancy ?",
        a: "Oui. C'est un trajet d'un peu plus de deux heures par l'E411. Vous choisissez une date de livraison lors de la réservation et nous convenons de l'heure avec vous. La reprise après la période de location se planifie de la même manière.",
      },
      {
        q: "Comment sécher une grange intégrée à l'habitation ?",
        a: "Traitez la grange comme une zone de séchage distincte, avec un grand appareil et la porte intérieure fermée. Les murs d'une grange sont souvent épais et froids, et le nouveau sol contient beaucoup d'eau. Un ventilateur qui souffle bas sur le sol accélère le séchage de la chape.",
      },
    ],
    realisaties: [],
  },
  chiny: {
    slug: "chiny",
    title: "Déshumidificateur de chantier à louer à Chiny | Vernast",
    description:
      "Location de déshumidificateur à Chiny, Jamoigne, Izel ou Suxy : maisons en pierre dans la boucle de la Semois et secondes résidences en lisière de forêt.",
    h1: "Location de déshumidificateur à Chiny",
    kicker: "Province de Luxembourg · dans une boucle de la Semois",
    rit: { afstand: "environ 215 km", tijd: "un peu plus de deux heures" },
    intro: [
      "Chiny se trouve **dans une boucle de la Semois**, là où la Gaume rejoint l'Ardenne. Le village est connu pour **la descente en barque sur la Semois** jusqu'à Lacuisine. Au nord commence la forêt de Chiny.",
      "**Jamoigne, Izel, Les Bulles, Termes et Suxy** font aussi partie de la commune. Autour de Jamoigne et d'Izel, on reconnaît le sol calcaire et les villages de la Gaume. Vers Suxy, le paysage devient **plus boisé et plus rude**. Depuis Aartselaar, il nous faut un peu plus de deux heures pour arriver chez vous.",
    ],
    bouw: {
      kop: "Maisons au fond de la vallée et secondes résidences",
      alineas: [
        "Le long de la Semois se dressent **de vieilles maisons en pierre au fond de la vallée**. Au printemps et en automne, le brouillard plane souvent sur la rivière et l'air extérieur est humide. Une cave ou un rez-de-chaussée tout près de l'eau sèche donc lentement. Gardez dès lors **portes et fenêtres fermées** tant que le déshumidificateur tourne, même si aérer semble logique.",
        "Beaucoup de maisons de la région sont des **secondes résidences** qui restent vides hors saison. Si vous faites rénover une telle maison en hiver, vous séchez **un bâtiment froid**. Le plafonnage et la chape libèrent peu d'humidité dans le froid. Un chauffage de chantier à côté du déshumidificateur porte d'abord la pièce au-dessus de 15 °C.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**Pour une maison de vacances rénovée pièce par pièce** : compact, 50 litres par jour pour des pièces jusqu'à 250 m³, et économe sur une prise ordinaire." },
      { key: "teddh30", waarom: "Une maison restée vide tout l'hiver est froide jusque dans les murs. **Ce chauffage de 30 kW** porte un grand volume à température. Il demande du 400 V, signalez donc à l'avance si ce raccordement est disponible." },
      { key: "revolution", waarom: "Pour **la cave d'une maison toute proche de la Semois**. Le déshumidificateur à adsorption absorbe l'humidité même dans une pièce froide et peut sécher de manière ciblée grâce à des gaines." },
      { key: "ttk350", waarom: "Lors d'une rénovation complète à Jamoigne ou Izel, cet appareil sèche **un rez-de-chaussée avec chape et plafonnage neufs** en une fois : 70 litres par jour, jusqu'à environ 400 m³." },
    ],
    levering: {
      kop: "Livraison à Chiny : par l'E411 et Neufchâteau",
      alinea:
        "Le trajet depuis Aartselaar passe **par Bruxelles, Namur et l'E411**, puis par les routes régionales jusqu'à la Semois : environ 215 km, un peu plus de deux heures. Vous fixez la date de livraison lors de la réservation, et nous convenons de l'heure avec vous **sur rendez-vous**. Si la maison se trouve dans une rue étroite ou en pente, signalez-le à l'avance. Le technicien saura ainsi comment rentrer les appareils.",
    },
    afhalen: {
      kop: "Un enlèvement depuis Chiny vous coûte une journée entière",
      alinea:
        "L'aller-retour jusqu'à notre point d'enlèvement à Aartselaar représente **plus de quatre heures de route**, et autant pour le retour des appareils. Pour une maison de vacances que vous faites rénover à distance, c'est rarement faisable. Avec un pack de séchage, **la livraison, l'installation et la reprise sont comprises**.",
    },
    buren: ["florenville", "tintigny", "herbeumont", "neufchateau", "leglise"],
    faq: [
      {
        q: "Je n'habite pas à Chiny. La livraison dans ma maison de vacances peut-elle se faire sans moi ?",
        a: "C'est possible si quelqu'un sur place ouvre la porte, par exemple votre entrepreneur ou un voisin, et si le courant est branché. Indiquez lors de la réservation qui sera présent et comment joindre cette personne. Le technicien lui explique le fonctionnement des appareils.",
      },
      {
        q: "Dois-je aérer ma maison au bord de la Semois pendant que le déshumidificateur fonctionne ?",
        a: "Non. Avec les fenêtres ouvertes, le déshumidificateur retire l'humidité de l'air extérieur, qui est souvent lui-même humide dans la vallée de la Semois. Gardez fenêtres et portes extérieures fermées. Aérez tout au plus brièvement si le technicien le conseille lors de l'installation.",
      },
      {
        q: "Un déshumidificateur de chantier fonctionne-t-il dans une maison restée non chauffée tout l'hiver ?",
        a: "Lentement, tant que les murs sont froids. Un déshumidificateur à condensation a besoin de plus de 15 °C pour bien fonctionner. Dans une maison non chauffée, nous ajoutons donc un chauffage de chantier. Dans une cave froide, un déshumidificateur à adsorption reste le meilleur choix.",
      },
      {
        q: "Combien de temps êtes-vous en route jusqu'à Chiny ?",
        a: "Un peu plus de deux heures pour environ 215 km, et davantage en cas d'embouteillages autour de Bruxelles. Vous choisissez vous-même la date lors de la réservation. Comme nous livrons en Wallonie sur rendez-vous, nous vous indiquons à l'avance l'heure d'arrivée du technicien.",
      },
    ],
    realisaties: [],
  },
  florenville: {
    slug: "florenville",
    title: "Florenville : location de déshumidificateur | Vernast",
    description:
      "Déshumidificateur à louer à Florenville, Chassepierre, Lacuisine ou Villers-devant-Orval près de l'abbaye d'Orval : maisons en pierre au-dessus de la Semois.",
    h1: "Location de déshumidificateur à Florenville",
    kicker: "Province de Luxembourg · au-dessus de la Semois, près d'Orval",
    rit: { afstand: "environ 220 km", tijd: "un peu plus de deux heures" },
    intro: [
      "Florenville se trouve **sur une hauteur au-dessus de la Semois**, avec vue sur la vallée. En contrebas, au bord de la rivière, se trouvent Chassepierre et Lacuisine. Au sud, contre la frontière française, se trouve **Villers-devant-Orval** avec l'abbaye d'Orval, connue pour sa bière trappiste et son fromage.",
      "**Muno, Fontenoille et Sainte-Cécile** font aussi partie de la commune. Ce sont des villages dans une bande boisée où la Gaume et l'Ardenne se rejoignent. Depuis notre entrepôt d'Aartselaar, il nous faut **un peu plus de deux heures** pour rejoindre Florenville.",
    ],
    bouw: {
      kop: "Villages au bord de la rivière et maisons à flanc de coteau",
      alineas: [
        "À Chassepierre et Lacuisine, les maisons sont **tout près de la Semois**. Les plus anciennes ont une cave ou un rez-de-chaussée sans barrière contre l'humidité. Après une rénovation, une telle maison sèche en deux couches : le nouveau plafonnage libère vite son humidité, le mur épais en pierre derrière lui **lentement et pendant des semaines**. Une mesure d'humidité rend cette différence visible.",
        "Sur la pente vers le plateau, la terre arrive souvent **contre la façade arrière**. Une pièce de ce côté a de la terre contre le mur et devient froide et humide après une période de pluie. Si vous y aménagez une salle de bains ou une chambre, placez le déshumidificateur dans cette pièce même et **un ventilateur contre le mur côté pente**.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison en pierre au bord de la Semois entièrement rénovée** : 70 litres par jour, jusqu'à environ 400 m³. Suffisant pour un rez-de-chaussée avec un nouveau plafonnage et une chape fraîche." },
      { key: "ttv4500", waarom: "Contre **le mur froid côté pente**, ce ventilateur évacue la couche d'air saturée. Le déshumidificateur a ainsi prise sur l'humidité de ce mur." },
      { key: "revolution", waarom: "Pour une cave ou un vide sanitaire tout près de la rivière. **Le déshumidificateur à adsorption fonctionne aussi dans le froid** et sèche grâce à des gaines jusque sous un plancher." },
      { key: "ttk170", waarom: "Pour **une seule pièce à l'étage** ou une salle de bains dans une maison de vacances : compact, jusqu'à 250 m³ et économe sur une prise ordinaire." },
    ],
    levering: {
      kop: "Livraison à Florenville : un long trajet, bien convenu",
      alinea:
        "Florenville se trouve à **environ 220 km** d'Aartselaar, par le ring de Bruxelles, l'E411 et la route régionale depuis Neufchâteau. Vous choisissez une date de livraison lors de la réservation ; en Wallonie, nous convenons de l'heure de livraison **sur rendez-vous**. Si une rue raide ou étroite mène à votre maison à Chassepierre ou Lacuisine, signalez-le à l'avance.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : de la Semois à l'A12",
      alinea:
        "Enlever un appareil seul signifie **plus de quatre heures de route aller-retour**, et autant pour le retour. Depuis Florenville, cela en vaut rarement la peine. Si vous choisissez un pack de séchage, **la livraison, l'installation et la reprise sont comprises**.",
    },
    buren: ["chiny", "herbeumont", "bouillon", "meix-devant-virton"],
    faq: [
      {
        q: "Livrez-vous aussi à Villers-devant-Orval, tout près de la frontière française ?",
        a: "Oui, Villers-devant-Orval fait partie de Florenville et se trouve dans notre zone de livraison. Indiquez l'adresse complète lors de la réservation et précisez comment accéder au chantier. Nous convenons de l'heure de livraison avec vous à l'avance.",
      },
      {
        q: "Ma maison est au bord de la Semois. Combien de temps le déshumidificateur doit-il rester ?",
        a: "Cela dépend de ce qui est humide. Un nouveau plafonnage sèche plus vite qu'un mur épais en pierre sans barrière contre l'humidité, qui libère son eau beaucoup plus lentement. C'est une mesure d'humidité qui vous dit quand c'est assez sec, pas le calendrier.",
      },
      {
        q: "Que faire d'une pièce dont le mur arrière est adossé à la pente ?",
        a: "Faites d'abord mesurer si l'humidité vient de la rénovation ou de la terre contre le mur. L'humidité de construction se sèche avec un déshumidificateur et un ventilateur contre ce mur. Si l'eau revient après chaque averse, un déshumidificateur n'est pas une solution durable.",
      },
      {
        q: "À quelle distance de votre entrepôt se trouve Florenville ?",
        a: "Environ 220 km, soit un peu plus de deux heures de route en dehors des heures de pointe. C'est l'un de nos trajets les plus longs. Avec un pack de séchage, la livraison et la reprise sont comprises, et vous choisissez vous-même la date de livraison.",
      },
    ],
    realisaties: [],
  },
  habay: {
    slug: "habay",
    title: "Louer un déshumidificateur à Habay, près d'Anlier | Vernast",
    description:
      "Location de déshumidificateur à Habay, Anlier ou Rulles : constructions neuves en lisière de la forêt d'Anlier et maisons de village rénovées. Livré, installé.",
    h1: "Location de déshumidificateur à Habay",
    kicker: "Province de Luxembourg · à la forêt d'Anlier",
    rit: { afstand: "environ 215 km", tijd: "un peu plus de deux heures" },
    intro: [
      "Habay se trouve **à la lisière sud de la forêt d'Anlier**, un grand massif forestier de la province de Luxembourg. La commune compte six villages : **Habay-la-Neuve, Habay-la-Vieille, Anlier, Hachy, Houdemont et Rulles**.",
      "L'**E411** longe la commune de près. Beaucoup d'habitants travaillent donc à Arlon ou au Grand-Duché, et de nouveaux lotissements ont poussé autour des villages. Dans les centres se dressent encore les anciennes maisons en pierre naturelle. Depuis Aartselaar, nous y sommes en un peu plus de deux heures.",
    ],
    bouw: {
      kop: "Lotissements en lisière de forêt, vieilles maisons au centre",
      alineas: [
        "En **lisière de forêt**, l'air est plus humide et plus frais qu'en ville. Une maison neuve avec une chape et un plafonnage frais n'y sèche pas d'elle-même à temps, et encore moins en automne. Gardez les fenêtres fermées, mettez un déshumidificateur au travail et faites souffler un ventilateur sur le sol. Faites mesurer l'humidité résiduelle avant que le poseur de sol ne commence.",
        "Dans les **anciens noyaux villageois** se dressent des maisons en pierre naturelle, parfois avec une étable attenante. Après une rénovation, le rez-de-chaussée y reste froid, avec des murs épais. Un déshumidificateur à condensation ne fonctionne bien qu'au-dessus de 15 °C ; en hiver, il faut donc souvent **un chauffage de chantier** en plus.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison neuve à Habay-la-Neuve ou Hachy** : 70 litres par jour, pour un volume jusqu'à environ 400 m³." },
      { key: "radiaal2250", waarom: "Pour **la chape d'une construction neuve en lisière de forêt** : ce ventilateur radial souffle bas sur le sol, pour qu'elle sèche de manière uniforme." },
      { key: "teddh30", waarom: "Pour **une maison en pierre froide en hiver** : ce chauffage de 30 kW sur 400 V porte la pièce au-dessus de 15 °C, pour que le déshumidificateur fonctionne bien." },
      { key: "ttk170", waarom: "Pour **une salle de bains ou une cuisine** dans une maison de village rénovée : compact, 50 litres par jour, porte fermée." },
    ],
    levering: {
      kop: "Livraison à Habay : juste à côté de l'E411",
      alinea:
        "Habay se trouve le long de l'E411, à un peu plus de deux heures de route de notre entrepôt. Vous choisissez **une date de livraison** lors de la réservation, et comme Habay est en Wallonie, nous livrons sur rendez-vous. Si l'habitation se trouve sur un chemin forestier ou dans une nouvelle rue non revêtue, signalez-le. Le technicien pourra ainsi placer immédiatement les appareils au bon endroit.",
    },
    afhalen: {
      kop: "Enlèvement depuis Habay : plus de quatre heures de route",
      alinea:
        "L'aller-retour jusqu'à Aartselaar vous prend **plus de quatre heures**, et davantage avec les embouteillages autour de Bruxelles. La livraison est plus logique : le technicien apporte les appareils, les règle et les reprend après la période de location.",
    },
    buren: ["aarlen", "attert", "etalle", "leglise"],
    faq: [
      {
        q: "Une construction neuve en lisière de forêt sèche-t-elle plus lentement ?",
        a: "Souvent, oui. En lisière de forêt, l'air est plus humide et plus frais, et peu d'humidité sort alors par les fenêtres ouvertes. Avec les fenêtres fermées et un déshumidificateur au travail, la météo extérieure joue beaucoup moins. Un ventilateur sur la chape aide encore davantage.",
      },
      {
        q: "Comment la camionnette accède-t-elle à une habitation sur un chemin forestier ?",
        a: "Généralement sans problème. Signalez-le toutefois lors de la réservation si les derniers mètres ne sont pas revêtus ou si l'allée est étroite. Le technicien sait alors à l'avance où se garer et comment rentrer les appareils sur le dernier tronçon.",
      },
      {
        q: "Me faut-il du courant triphasé pour un chauffage de chantier à Habay ?",
        a: "Oui, nos chauffages de chantier électriques de 20 et 30 kW fonctionnent sur 400 V. Les déshumidificateurs et les ventilateurs tournent sur une prise ordinaire. S'il n'y a pas de courant triphasé sur le chantier, signalez-le lors de la réservation, pour que nous adaptions l'installation en conséquence.",
      },
      {
        q: "À partir de quand puis-je planifier une livraison à Habay ?",
        a: "Vous réservez en ligne et choisissez une date de livraison. Nous convenons ensuite de l'heure avec vous, car le trajet est long. Plus vous réservez tôt, plus vous avez de choix parmi les dates de livraison.",
      },
    ],
    realisaties: [],
  },
  "meix-devant-virton": {
    slug: "meix-devant-virton",
    title: "Déshumidificateur à louer à Meix-devant-Virton | Vernast",
    description:
      "Location de déshumidificateur à Meix-devant-Virton, Gérouville, Sommethonne ou Robelmont : longues fermes lorraines de Gaume, livré et installé avec mesure.",
    h1: "Location de déshumidificateur à Meix-devant-Virton",
    kicker: "Province de Luxembourg · Gaume rurale contre la France",
    rit: { afstand: "environ 250 km", tijd: "près de trois heures" },
    intro: [
      "Meix-devant-Virton est **une commune rurale de la Gaume**, entre Virton, Florenville et la frontière française. Outre Meix même, **Gérouville, Sommethonne, Robelmont et Villers-la-Loue** en font partie. Ce sont de petits villages entre prairies et forêts.",
      "Typiques de la région sont **les longues fermes** où l'habitation, l'étable et la grange se suivent sous un même toit. Beaucoup de ces bâtiments sont transformés en habitation ou en logement de vacances. Depuis Aartselaar, il nous faut **près de trois heures** pour y arriver, et nous planifions donc chaque livraison à l'avance avec vous.",
    ],
    bouw: {
      kop: "Une étable ou une grange qui devient habitation",
      alineas: [
        "Si vous intégrez une ancienne **étable ou grange à l'habitation**, vous construisez en fait une nouvelle maison entre de vieux murs. Il y a une dalle isolée, une chape, de nouveaux murs intérieurs et beaucoup de plafonnage. Toute cette eau doit sortir avant l'arrivée du poseur de sol. Avec le faîte élevé, le volume est en outre **plus grand que ne le laisse penser la surface au sol**.",
        "Les murs extérieurs sont **épais et en pierre naturelle**. Ils restent froids et libèrent lentement leur humidité. Un déshumidificateur seul n'a guère de prise. **Un ventilateur le long des murs** et, pendant la saison froide, un chauffage de chantier font la différence. Communiquez les dimensions de la pièce, pour que nous prévoyions le bon pack.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une grange entièrement transformée en habitation** : 110 litres par jour et une portée jusqu'à 600 m³, pour le grand volume sous un faîte élevé." },
      { key: "radiaal2250", waarom: "Une chape épaisse dans une ancienne étable sèche par le haut. **Ce ventilateur radial souffle au ras du sol** et entretient le séchage jusque dans les coins." },
      { key: "teddh30", waarom: "Une grange non chauffée aux murs de pierre ne dépasse pas **d'elle-même 15 °C** en hiver. Ce chauffage de 30 kW, si. Il demande du 400 V, un raccordement souvent présent dans une ferme." },
      { key: "ttv4500", waarom: "Le long **des longs murs extérieurs froids** d'une ferme lorraine, ce ventilateur maintient l'air en mouvement. L'humidité ne reste ainsi pas collée à la pierre." },
    ],
    levering: {
      kop: "Livraison à Meix-devant-Virton : près de trois heures, un bon rendez-vous",
      alinea:
        "Le trajet depuis Aartselaar fait **environ 250 km**, par Bruxelles et l'E411, avec le dernier tronçon à travers la Gaume. Vous choisissez une date de livraison lors de la réservation et nous convenons de l'heure avec vous **sur rendez-vous**. Veillez à ce qu'il y ait du courant et que quelqu'un accueille le technicien. Il place les appareils par zone de séchage et explique comment ils doivent tourner.",
    },
    afhalen: {
      kop: "Enlever vous-même ? Depuis la Gaume, une longue journée",
      alinea:
        "L'aller-retour jusqu'à Aartselaar représente **près de six heures de route**, et autant pour le retour des appareils. Pour un grand déshumidificateur, il vous faut en outre une camionnette. Avec un pack de séchage, **la livraison, l'installation et la reprise sont comprises**, et les appareils sont tout de suite au bon endroit.",
    },
    buren: ["virton", "florenville", "chiny"],
    faq: [
      {
        q: "Combien d'appareils me faut-il pour une grange transformée ?",
        a: "Cela dépend du volume sous le toit, pas seulement de la surface au sol. Une grange au faîte élevé compte vite plus de mètres cubes qu'une maison ordinaire. Communiquez les dimensions lors de la réservation, et nous adaptons le pack en conséquence.",
      },
      {
        q: "Faut-il du courant triphasé pour le chauffage de chantier dans ma ferme ?",
        a: "Oui, nos chauffages de chantier électriques demandent du 400 V. Dans une ancienne ferme, ce raccordement existe souvent encore, mais pas toujours. Vérifiez-le dans le tableau électrique ou demandez-le à votre électricien, et signalez-le lors de la réservation s'il manque.",
      },
      {
        q: "Quand le poseur de sol peut-il travailler sur une chape dans une ancienne étable ?",
        a: "Seulement lorsqu'une mesure d'humidité montre que la chape est assez sèche pour le revêtement choisi. Une chape épaisse sur un support froid met plus de temps que dans une construction neuve. Votre poseur de sol détermine la valeur dont il a besoin.",
      },
      {
        q: "Venez-vous aussi jusqu'à Gérouville ou Sommethonne ?",
        a: "Oui. Tous les villages de Meix-devant-Virton se trouvent dans notre zone de livraison, même s'il nous faut près de trois heures pour y arriver. Comme nous livrons en Wallonie sur rendez-vous, nous convenons de l'heure à l'avance. Vous ne devez ainsi pas attendre toute la journée.",
      },
    ],
    realisaties: [],
  },
  musson: {
    slug: "musson",
    title: "Musson : déshumidificateur de chantier à louer | Vernast",
    description:
      "Location de déshumidificateur à Musson, Mussy-la-Ville, Baranzy ou Signeulx : villages du Luxembourg belge contre la frontière française. Livré et installé.",
    h1: "Location de déshumidificateur à Musson",
    kicker: "Province de Luxembourg · Gaume du sud, à la frontière",
    rit: { afstand: "environ 250 km", tijd: "près de trois heures" },
    intro: [
      "Musson se trouve **dans le sud de la province de Luxembourg**, entre Virton et Aubange, avec la frontière française au sud. Outre Musson même, **Mussy-la-Ville, Baranzy, Signeulx et Willancourt** font partie de la commune.",
      "Ce sont des **villages-rues gaumais** : les maisons sont accolées le long de la rue et se prolongent à l'arrière par des jardins et des prairies. Depuis Aartselaar, il nous faut près de trois heures pour rejoindre Musson. Vous choisissez une date de livraison, et nous convenons de l'heure avec vous à l'avance.",
    ],
    bouw: {
      kop: "Des rangées de maisons le long de la rue, chacune avec sa cave",
      alineas: [
        "Dans un village-rue gaumais, chaque maison partage **ses murs latéraux avec les voisins**. Cela retient la chaleur, mais l'habitation n'a de ce fait **que deux façades** pour aérer. Après une rénovation, l'humidité reste plus longtemps à l'intérieur, surtout dans les pièces du milieu. Un déshumidificateur avec un ventilateur qui fait circuler l'air dans la maison y fonctionne mieux que des fenêtres ouvertes.",
        "Sous beaucoup de maisons se trouve **une cave en pierre naturelle**, fraîche et souvent un peu humide. Si vous en faites une buanderie ou un débarras avec un nouveau sol, vous séchez une pièce froide. En dessous de 15 °C, un déshumidificateur à condensation a peu de rendement. Dans une telle cave, **un déshumidificateur à adsorption** fait mieux.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**Pour une maison mitoyenne rénovée étage par étage** : compact, 50 litres par jour et économe sur une prise ordinaire." },
      { key: "ttv4500", waarom: "Une maison aux murs latéraux mitoyens n'a que deux façades. **Ce ventilateur pousse l'air à travers les pièces du milieu**, où l'humidité resterait sinon stagnante." },
      { key: "revolution", waarom: "Pour **la cave en pierre naturelle** sous la maison. Le déshumidificateur à adsorption continue d'absorber l'humidité à des températures où un appareil à condensation a peu de rendement." },
      { key: "ttk350", waarom: "Pour une rénovation complète avec une nouvelle chape au rez-de-chaussée : **70 litres par jour**, suffisant pour une maison mitoyenne profonde jusqu'à environ 400 m³." },
    ],
    levering: {
      kop: "Livraison à Musson : tout au sud par l'E411",
      alinea:
        "Depuis Aartselaar, nous roulons **par Bruxelles et l'E411 jusqu'à Arlon**, puis vers l'ouest jusqu'à Musson : environ 250 km, près de trois heures. Lors de la réservation, vous choisissez une date de livraison. En Wallonie, nous livrons **sur rendez-vous**, nous fixons donc l'heure ensemble. Sur place, le technicien installe les appareils par zone de séchage et explique comment ils doivent tourner jusqu'à la reprise.",
    },
    afhalen: {
      kop: "Enlèvement depuis Musson : près de six heures de route",
      alinea:
        "L'aller-retour jusqu'à notre point d'enlèvement à Aartselaar vous coûte **une journée de travail entière**, et autant pour le retour des appareils. Cela compense rarement un pack de séchage, dans lequel **la livraison, l'installation et la reprise sont comprises**.",
    },
    buren: ["virton", "saint-leger", "aubange"],
    faq: [
      {
        q: "Musson se trouve-t-il dans votre zone de livraison ?",
        a: "Oui. Musson et ses villages se trouvent dans la province belge de Luxembourg, pas au Grand-Duché, et font partie de notre zone de livraison. Si votre chantier se trouve de l'autre côté de la frontière, contactez-nous d'abord pour discuter des possibilités.",
      },
      {
        q: "Pourquoi ma maison mitoyenne à Mussy-la-Ville sèche-t-elle si lentement après le plafonnage ?",
        a: "Une maison aux murs latéraux mitoyens ne peut s'aérer que par la façade avant et la façade arrière. Les pièces du milieu reçoivent donc peu de flux d'air. Un déshumidificateur avec un ventilateur qui pousse l'air de pièce en pièce accélère nettement le séchage.",
      },
      {
        q: "Quel appareil placer dans une cave froide en pierre ?",
        a: "Un déshumidificateur à adsorption. Un appareil à condensation perd beaucoup de rendement en dessous de 15 °C, et une cave en pierre naturelle atteint rarement cette température. Le déshumidificateur à adsorption continue d'absorber l'humidité dans le froid et peut sécher de manière ciblée grâce à des gaines.",
      },
      {
        q: "Quelle distance sépare Aartselaar de Musson ?",
        a: "Environ 250 km, soit près de trois heures de route sans embouteillages autour de Bruxelles. C'est l'un de nos trajets les plus longs. C'est pourquoi nous fixons l'heure de livraison avec vous à l'avance, et non au dernier moment.",
      },
    ],
    realisaties: [],
  },
  rouvroy: {
    slug: "rouvroy",
    title: "Location de déshumidificateur à Rouvroy et Torgny | Vernast",
    description:
      "Location de déshumidificateur à Rouvroy, Torgny, Lamorteau ou Dampicourt : le coin le plus au sud de la Belgique, maisons en calcaire. Livré, installé, mesuré.",
    h1: "Location de déshumidificateur à Rouvroy",
    kicker: "Province de Luxembourg · le village le plus au sud de la Belgique",
    rit: { afstand: "environ 255 km", tijd: "près de trois heures" },
    intro: [
      "La commune de Rouvroy abrite **Torgny, le village le plus au sud de la Belgique**. Il se trouve sur un versant exposé au sud contre la frontière française, avec un climat plus doux que dans le reste du pays et même **des vignobles**. Lamorteau, Dampicourt et Harnoncourt font aussi partie de la commune.",
      "Les villages sont bâtis en **pierre calcaire**, avec des maisons accolées par leurs murs latéraux. Rouvroy fait partie de nos adresses les plus éloignées : depuis Aartselaar, il nous faut **près de trois heures** pour y arriver. C'est pourquoi nous convenons toujours de l'heure de livraison avec vous à l'avance.",
    ],
    bouw: {
      kop: "Un climat plus doux, mais les mêmes murs épais",
      alineas: [
        "Le climat doux aide lors d'une rénovation. Au printemps et en automne, il fait souvent un peu plus chaud ici, et **un déshumidificateur à condensation fonctionne mieux dans une pièce chaude**. Les maisons sont toutefois anciennes, avec des murs épais en calcaire sans barrière contre l'humidité. Ils libèrent leur eau **lentement**, même dans le coin le plus au sud du pays.",
        "Beaucoup de maisons à Torgny et Lamorteau sont **rénovées en habitation ou en chambres d'hôtes**, en conservant l'ancienne façade. À l'intérieur, on pose un nouveau plafonnage sur la vieille pierre et souvent un nouveau sol. Faites mesurer à la fois la nouvelle couche et le mur derrière. **Une mesure d'humidité** vous dit quand le peintre peut commencer.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une ancienne maison en calcaire à Torgny entièrement replafonnée** : 70 litres par jour, jusqu'à environ 400 m³ sur un rez-de-chaussée et un étage." },
      { key: "ttk170", waarom: "Pour **une chambre d'hôtes ou une salle de bains** finie séparément : compact et économe, pour des pièces jusqu'à 250 m³." },
      { key: "ttv4500", waarom: "Contre **un mur épais en calcaire avec un plafonnage frais**, ce ventilateur chasse la couche d'air humide. Le séchage en surface ne s'arrête ainsi pas." },
      { key: "radiaal2250", waarom: "Si **un nouveau sol** est posé dans la vieille maison, ce ventilateur radial maintient le flux d'air au ras de la chape, même sous un escalier ou dans une niche." },
    ],
    levering: {
      kop: "Livraison à Rouvroy : le trajet le plus long, convenu à l'avance",
      alinea:
        "Depuis Aartselaar, nous roulons **par Bruxelles et l'E411 jusqu'au sud de la Gaume** : environ 255 km, près de trois heures. Lors de la réservation, vous choisissez vous-même la date de livraison. En Wallonie, la livraison se fait **sur rendez-vous**, pour que vous sachiez à l'avance quand le technicien arrive. Sur place, il installe les appareils par zone de séchage et vous montre comment les utiliser.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : déconseillé depuis Torgny",
      alinea:
        "Enlever un appareil seul signifie **près de six heures de route** aller-retour, et cela deux fois. Un déshumidificateur de chantier doit en outre voyager debout. Avec un pack de séchage, **la livraison, l'installation et la reprise sont comprises**.",
    },
    buren: ["virton", "meix-devant-virton"],
    faq: [
      {
        q: "Livrez-vous jusqu'à Torgny, le village le plus au sud de la Belgique ?",
        a: "Oui. Torgny fait partie de la commune de Rouvroy et se trouve dans notre zone de livraison, même si c'est l'une des adresses les plus éloignées que nous desservons. Comptez près de trois heures de route depuis Aartselaar. C'est pourquoi nous convenons de l'heure de livraison avec vous à l'avance.",
      },
      {
        q: "Une maison à Torgny sèche-t-elle plus vite grâce au climat plus doux ?",
        a: "Un peu. Un déshumidificateur à condensation fonctionne mieux dans une pièce plus chaude, et le climat doux du printemps et de l'automne y aide. Un mur épais en calcaire sans barrière contre l'humidité continue toutefois de sécher lentement. En hiver, il fait ici aussi assez froid pour un chauffage de chantier.",
      },
      {
        q: "Quand le peintre peut-il intervenir sur un nouveau plafonnage contre un vieux mur en pierre ?",
        a: "Lorsqu'une mesure d'humidité montre que la couche de plafonnage est assez sèche. Regardez aussi le mur derrière. S'il est encore humide, l'humidité migre plus tard vers la surface et une peinture étanche à la vapeur peut se décoller.",
      },
      {
        q: "Combien de temps laisser un déshumidificateur dans des chambres d'hôtes à Lamorteau ?",
        a: "Cela dépend de l'épaisseur du plafonnage, d'une éventuelle chape et de la température. Une vieille maison restée longtemps inoccupée met généralement plus de temps. Faites mesurer avant la finition, vous saurez alors si le logement est prêt.",
      },
    ],
    realisaties: [],
  },
  "saint-leger": {
    slug: "saint-leger",
    title: "Louer un déshumidificateur en Gaume à Saint-Léger | Vernast",
    description:
      "Déshumidificateur à louer à Saint-Léger, Châtillon ou Meix-le-Tige : villages gaumais entre Virton et Arlon, en Luxembourg belge. Livré, installé et repris.",
    h1: "Location de déshumidificateur à Saint-Léger",
    kicker: "Province de Luxembourg · entre Virton et Arlon",
    rit: { afstand: "environ 240 km", tijd: "environ deux heures et demie" },
    intro: [
      "Saint-Léger se trouve **entre Virton et Arlon**, en Gaume. Outre le village principal, **Châtillon et Meix-le-Tige** font partie de la commune. Le paysage est vallonné, avec des prairies, des forêts et des villages groupés chacun autour de son église.",
      "Arlon et la frontière du Grand-Duché sont proches, et beaucoup d'habitants travaillent de l'autre côté de la frontière. À côté des anciennes maisons lorraines s'élèvent donc **de nouvelles habitations**. Depuis Aartselaar, il nous faut environ deux heures et demie pour rejoindre Saint-Léger.",
    ],
    bouw: {
      kop: "Constructions neuves à côté de vieilles maisons gaumaises",
      alineas: [
        "Dans **une maison neuve**, il s'agit d'un séchage de chantier classique. La chape et le plafonnage apportent ensemble des centaines de litres d'eau dans la maison, et le poseur de sol ou le peintre veut commencer à une date fixe. Ce qui fonctionne, c'est un grand appareil par étage, avec **un ventilateur au ras de la chape**.",
        "Dans les anciens noyaux villageois se dressent des **maisons lorraines en calcaire**, souvent avec une cave sous une partie de la maison. Une rénovation y demande une autre approche : moins de volume, mais **des murs froids et épais** qui sèchent lentement. Indiquez lors de la réservation quelles pièces sont froides ou très humides, et nous adaptons le pack en conséquence.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une construction neuve avec chape et plafonnage sur deux niveaux** : 110 litres par jour et une portée jusqu'à 600 m³, pour une date de réception fixée." },
      { key: "radiaal2250", waarom: "Une chape fraîche sèche par le haut. **Ce ventilateur radial souffle au ras du sol** et maintient un séchage uniforme jusque dans les coins." },
      { key: "ttk350", waarom: "Pour **la rénovation d'une vieille maison à Châtillon ou Meix-le-Tige** : 70 litres par jour, largement suffisant pour un rez-de-chaussée avec un nouveau plafonnage." },
      { key: "teddh20", waarom: "Sur un chantier d'hiver en Gaume, la température descend la nuit sous 15 °C. **Ce chauffage de 20 kW garde la pièce au chaud**. Il demande du 400 V, généralement présent sur un chantier." },
    ],
    levering: {
      kop: "Livraison à Saint-Léger : par l'E411 en direction d'Arlon",
      alinea:
        "Depuis Aartselaar, nous roulons **par Bruxelles et l'E411 jusqu'à Arlon**, puis le dernier tronçon à travers la Gaume : environ 240 km, deux heures et demie. Vous choisissez une date de livraison, et nous convenons de l'heure **sur rendez-vous**. Sur un chantier de construction neuve, dites-nous qui accueille le technicien, pour que les appareils soient tout de suite au bon étage.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : cinq heures aller-retour",
      alinea:
        "Enlever un appareil seul depuis Saint-Léger signifie **environ cinq heures en voiture**, et à nouveau pour le retour. Pour plusieurs appareils, il vous faut en outre une camionnette. Avec un pack de séchage, **la livraison, l'installation et la reprise sont comprises**.",
    },
    buren: ["virton", "musson", "etalle", "aarlen"],
    faq: [
      {
        q: "Mon poseur de sol veut poser à une date fixe. Est-ce faisable à Saint-Léger ?",
        a: "Cela dépend de l'épaisseur de la chape, de la température et du temps disponible. Indiquez la date de réception lors de la réservation, et nous adaptons le pack en conséquence. Faites mesurer la chape avant que le poseur de sol ne commence, pour qu'il dispose d'un chiffre plutôt que d'une estimation.",
      },
      {
        q: "Livrez-vous aussi de l'autre côté de la frontière, au Grand-Duché, tout près de Saint-Léger ?",
        a: "Saint-Léger, Châtillon et Meix-le-Tige se trouvent dans notre zone de livraison. Nous livrons aussi dans le sud des Pays-Bas. Pour un chantier au Grand-Duché, mieux vaut nous contacter d'abord, et nous examinons ce qui est possible.",
      },
      {
        q: "Combien d'appareils placer dans une construction neuve sur deux niveaux ?",
        a: "Généralement un grand déshumidificateur par étage, avec un ventilateur au-dessus de la chape fraîche. Le volume et la quantité de chape déterminent le pack exact. Le calculateur sur notre site le calcule pour vous à l'avance.",
      },
      {
        q: "Un déshumidificateur fonctionne-t-il autrement dans une vieille maison lorraine que dans une construction neuve ?",
        a: "Oui. Dans une construction neuve, l'eau se trouve surtout dans la chape fraîche et le plafonnage. Dans une vieille maison en calcaire s'y ajoute un mur froid et épais qui libère lentement son humidité. Un ventilateur contre le mur et, en hiver, un chauffage y aident.",
      },
    ],
    realisaties: [],
  },
  tintigny: {
    slug: "tintigny",
    title: "Déshumidificateur à louer à Tintigny et Rossignol | Vernast",
    description:
      "Location de déshumidificateur à Tintigny, Bellefontaine, Rossignol ou Saint-Vincent : villages de la vallée de la Semois en Gaume. Livré, installé et mesuré.",
    h1: "Location de déshumidificateur à Tintigny",
    kicker: "Province de Luxembourg · sur le cours supérieur de la Semois",
    rit: { afstand: "environ 225 km", tijd: "un peu plus de deux heures" },
    intro: [
      "Tintigny se trouve **dans la vallée de la Semois**, entre Étalle et Chiny. La rivière coule ici large et calme à travers les prairies de la Gaume. **Bellefontaine, Rossignol et Saint-Vincent** font aussi partie de la commune, avec de vastes forêts au nord.",
      "Les villages sont **typiquement gaumais**. Des maisons en calcaire et en grès s'alignent côte à côte le long de la rue, souvent avec **un large usoir** entre la façade et la route. Depuis Aartselaar, il nous faut un peu plus de deux heures pour rejoindre Tintigny, et nous en tenons compte dans la planification.",
    ],
    bouw: {
      kop: "Des maisons dans une large vallée de prairies",
      alineas: [
        "Dans une vallée large et plate, **la nappe phréatique est souvent haute**, surtout après un hiver humide. Les vieilles maisons y ont un rez-de-chaussée sans barrière contre l'humidité et parfois une cave qui devient humide au printemps. Après une rénovation, vous devez alors savoir **si l'humidité vient des travaux ou du sol**.",
        "Sur les flancs de la vallée, vers Rossignol et Bellefontaine, se trouvent **des habitations plus récentes et des fermes transformées**. Il s'agit alors généralement d'**humidité de construction issue de la chape et du plafonnage**. Vous la séchez avec un grand appareil par étage et un ventilateur au ras du sol.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison au bord de la Semois replafonnée après une rénovation** : 70 litres par jour, pour des pièces jusqu'à environ 400 m³." },
      { key: "revolution", waarom: "Pour **une cave qui devient humide au printemps**. Le déshumidificateur à adsorption fonctionne aussi dans une pièce froide et sèche grâce à des gaines jusque sous un plancher." },
      { key: "radiaal2250", waarom: "Pour **une nouvelle chape dans une ferme transformée à Rossignol ou Bellefontaine**, ce ventilateur maintient le flux d'air au ras du sol, là où l'humidité se libère." },
      { key: "teddh30", waarom: "Un grand volume non chauffé dans une ferme transformée ne dépasse pas **de lui-même 15 °C** en hiver. Ce chauffage de 30 kW, si. Il demande du courant triphasé 400 V." },
    ],
    levering: {
      kop: "Livraison à Tintigny : par l'E411 jusque dans la vallée de la Semois",
      alinea:
        "Le trajet depuis Aartselaar passe **par Bruxelles et l'E411** vers le sud de la province, puis descend dans la vallée : environ 225 km, un peu plus de deux heures. Vous choisissez une date de livraison lors de la réservation, et nous convenons de l'heure **sur rendez-vous**. Si le chantier se trouve derrière un usoir ou dans une cour, dites-nous où la camionnette peut se garer.",
    },
    afhalen: {
      kop: "Enlèvement depuis Tintigny : comptez une journée entière",
      alinea:
        "L'aller-retour jusqu'à Aartselaar vous prend **plus de quatre heures**, et autant pour le retour des appareils. Pour un chauffage de chantier ou plusieurs déshumidificateurs, il vous faut en outre une camionnette. Avec un pack de séchage, **la livraison, l'installation et la reprise sont comprises**.",
    },
    buren: ["chiny", "leglise", "habay", "etalle"],
    faq: [
      {
        q: "Mon rez-de-chaussée à Tintigny reste humide après la rénovation. Est-ce de l'humidité de construction ?",
        a: "C'est possible, mais dans une large vallée, la nappe phréatique est parfois haute et l'humidité remonte aussi par le bas. Faites mesurer au départ et après quelques semaines de séchage. Si la valeur ne baisse pas, la cause se trouve dans le sol et non dans les travaux.",
      },
      {
        q: "Quel déshumidificateur choisir pour une ferme transformée à Rossignol ?",
        a: "Pour un grand volume avec une nouvelle chape, généralement un grand déshumidificateur à condensation par étage, avec un ventilateur radial au-dessus du sol. Si la ferme reste non chauffée en hiver, on ajoute un chauffage de chantier. Communiquez les dimensions, et nous composons le pack.",
      },
      {
        q: "Où se gare la camionnette si ma maison se trouve derrière un large usoir ?",
        a: "Généralement sur cet usoir ou en bordure, tant que la route reste libre. Signalez lors de la réservation si l'usoir n'est pas revêtu ou s'il est détrempé. Le technicien sait alors à l'avance qu'il devra porter les appareils sur le dernier tronçon.",
      },
      {
        q: "Tintigny n'est-il pas trop loin pour une location de déshumidificateurs depuis Aartselaar ?",
        a: "C'est loin, environ 225 km et un peu plus de deux heures de route, mais Tintigny se trouve dans notre zone de livraison. Avec un pack de séchage, la livraison et la reprise sont comprises. Nous convenons de l'heure à l'avance, pour que le technicien ne trouve pas porte close.",
      },
    ],
    realisaties: [],
  },
  virton: {
    slug: "virton",
    title: "Location de déshumidificateur à Virton, en Gaume | Vernast",
    description:
      "Louer un déshumidificateur à Virton, Ethe, Saint-Mard ou Latour : maisons lorraines profondes en Gaume. Livraison, installation et reprise dans votre pack.",
    h1: "Location de déshumidificateur à Virton",
    kicker: "Province de Luxembourg · chef-lieu de la Gaume",
    rit: { afstand: "environ 245 km", tijd: "environ deux heures et demie" },
    intro: [
      "Virton est **le chef-lieu de la Gaume**, la région la plus au sud de la Belgique, contre la frontière française. La ville se trouve dans la vallée du Ton. **Ethe, Bleid, Latour, Ruette et Saint-Mard** font aussi partie de la commune.",
      "La Gaume a un **climat plus doux** que l'Ardenne et un sol calcaire. Les villages sont bâtis dans le **style lorrain** : les maisons sont accolées par leurs murs latéraux, avec l'habitation, l'étable et la grange sous un même long toit. Depuis Aartselaar, il nous faut environ deux heures et demie pour y arriver. C'est pourquoi nous planifions chaque livraison à l'avance avec vous.",
    ],
    bouw: {
      kop: "Des maisons lorraines au plan profond",
      alineas: [
        "Une maison gaumaise est **étroite côté rue et profonde**. Les pièces se suivent, et celles du milieu reçoivent peu de lumière du jour et peu d'air frais. Après un nouveau plafonnage, c'est là que l'humidité reste le plus longtemps. Placez le déshumidificateur dans cette pièce du milieu et laissez **un ventilateur faire circuler l'air vers l'avant et l'arrière**. Cela fonctionne mieux que deux appareils contre les façades.",
        "Les murs sont généralement en calcaire ou en grès épais, sans barrière contre l'humidité. Si vous intégrez l'ancienne étable ou grange à l'habitation, vous posez une nouvelle dalle avec chape sur un sol qui a toujours été humide. Faites donc mesurer si l'humidité dans le mur est de l'**humidité de construction** ou de l'**humidité ascensionnelle** venant du sol. Cette dernière, un déshumidificateur ne la résout pas durablement.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison mitoyenne profonde au centre de Virton** : 70 litres par jour et une portée jusqu'à environ 400 m³. Suffisant pour un rez-de-chaussée replafonné de l'avant à l'arrière." },
      { key: "ttv4500", waarom: "Dans un plan lorrain, l'air ne circule pas de lui-même de la rue au jardin. **Ce ventilateur déplace 4 500 m³ d'air par heure** à travers les pièces du milieu, où l'humidité resterait sinon stagnante." },
      { key: "radiaal2250", waarom: "Pour **la nouvelle chape dans une étable transformée**. Le ventilateur radial chasse la couche d'air humide au ras du sol, même sous l'escalier et dans les coins." },
      { key: "teddh20", waarom: "Une grange qui devient habitation est en hiver **un volume froid aux murs de pierre épais**. Ce chauffage de 20 kW porte la pièce au-dessus de 15 °C. Il demande un raccordement en courant triphasé 400 V." },
    ],
    levering: {
      kop: "Livraison à Virton : un long trajet, planifié à l'avance",
      alinea:
        "Depuis Aartselaar, nous roulons **par le ring de Bruxelles et l'E411** vers le sud de la province, environ 245 km ou deux heures et demie. Vous choisissez une date de livraison lors de la réservation. Comme la livraison en Wallonie se fait **sur rendez-vous**, nous convenons de l'heure avec vous à l'avance. Le technicien installe les appareils par zone de séchage et explique quelles portes doivent rester fermées.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : rarement utile depuis Virton",
      alinea:
        "Enlever un appareil seul est possible, mais depuis Virton, vous êtes **environ cinq heures sur la route**, aller-retour. Pour le retour des appareils, vous refaites ce trajet. Un déshumidificateur de chantier doit en outre être transporté debout. Avec un pack de séchage, **la livraison, l'installation et la reprise sont comprises**.",
    },
    buren: ["meix-devant-virton", "rouvroy", "musson", "saint-leger"],
    faq: [
      {
        q: "Livrez-vous jusqu'à Virton depuis Aartselaar ?",
        a: "Oui. Virton se trouve dans notre zone de livraison, à environ 245 km ou deux heures et demie de route par Bruxelles et l'E411. Vous choisissez une date de livraison lors de la réservation, et comme nous livrons en Wallonie sur rendez-vous, nous convenons de l'heure avec vous à l'avance.",
      },
      {
        q: "Comment sécher la pièce du milieu d'une maison lorraine profonde ?",
        a: "Placez le déshumidificateur dans cette pièce du milieu même et laissez un ventilateur pousser l'air vers les pièces avant et arrière. Gardez portes extérieures et fenêtres fermées. Sans mouvement d'air, l'humidité reste contre les murs, quelle que soit la taille de l'appareil.",
      },
      {
        q: "Un déshumidificateur de chantier aide-t-il contre l'humidité ascensionnelle dans un vieux mur en calcaire ?",
        a: "Pas durablement. Un déshumidificateur retire l'humidité de construction d'un nouveau plafonnage et d'une chape fraîche. L'eau qui remonte du sol à travers un mur sans barrière contre l'humidité revient après le séchage. Une mesure d'humidité montre lequel des deux vous avez chez vous.",
      },
      {
        q: "Que dois-je indiquer en réservant pour un chantier à Virton ?",
        a: "Vous faites votre réservation via notre site web, avec l'adresse du chantier, la date de livraison souhaitée et les pièces à sécher. Pour toute question, n'hésitez pas à nous envoyer un e-mail ou à nous appeler.",
      },
    ],
    realisaties: [],
  },
};
