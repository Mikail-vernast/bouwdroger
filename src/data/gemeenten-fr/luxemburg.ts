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
};
