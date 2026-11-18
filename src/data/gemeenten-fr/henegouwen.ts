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
  "aiseau-presles": {
    slug: "aiseau-presles",
    title: "Location de déshumidificateur à Aiseau-Presles | Vernast",
    description:
      "Déshumidificateur à louer à Aiseau-Presles, Pont-de-Loup et Roselies : maisons anciennes au bord de la Sambre, villas sur les coteaux boisés. Livré et installé.",
    h1: "Location de déshumidificateur de chantier à Aiseau-Presles",
    kicker: "Hainaut · là où le bassin cède la place à la verdure",
    rit: { afstand: "environ 110 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Aiseau-Presles se trouve **à la lisière est du bassin de Charleroi**, contre la province de Namur. La commune regroupe Aiseau, Presles, Pont-de-Loup et Roselies. Au nord, la Sambre forme une partie de la limite.",
      "Le long de la rivière se dressent les maisons plus anciennes de l'époque industrielle. Vers le sud, le paysage devient **vallonné et boisé**, avec le domaine du château de Presles et des habitations dispersées. Depuis Aartselaar, le trajet dure **un peu plus d'une heure**, un peu plus que jusqu'à Charleroi.",
    ],
    bouw: {
      kop: "En bas près de la rivière, en haut parmi les arbres",
      alineas: [
        "À Pont-de-Loup et à Aiseau, des maisons en briques se tiennent tout près de la Sambre, souvent avec **une cave sur un sol humide**. Une rénovation y tourne autour d'un nouveau plafonnage, d'un nouveau sol et d'une cave à rendre de nouveau utilisable. Au démarrage, le technicien mesure quelle part de l'humidité est de l'humidité de construction. Vous évitez ainsi de sécher pendant des semaines contre de l'eau qui continue de remonter du sol.",
        "Sur les coteaux boisés vers Presles, on trouve davantage de maisons isolées, parfois sous de grands arbres. Là, **l'air extérieur est souvent humide**, et fenêtres ouvertes, une maison ne sèche guère après les travaux. Un déshumidificateur fonctionne indépendamment du temps qu'il fait. Un ventilateur à côté extrait l'eau de la nouvelle chape ou du plafonnage.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour la maison isolée sur le coteau** : 70 litres par jour et une portée jusqu'à environ 400 m³, un appareil par étage." },
      { key: "revolution", waarom: "**Pour une cave proche de la Sambre** : ce déshumidificateur à adsorption continue d'absorber l'humidité à des températures où un appareil à condensation ne fait plus grand-chose." },
      { key: "radiaal2250", waarom: "Pour une nouvelle chape, souvent la dernière chose à sécher dans une maison. Le ventilateur radial souffle l'air au ras du sol." },
      { key: "teddh20", waarom: "Réchauffe d'abord une cave ou un garage froid en hiver. Ce chauffage de 20 kW fonctionne en 400 V ; vérifiez que ce raccordement est disponible." },
    ],
    levering: {
      kop: "Livrer à Aiseau-Presles : au-delà de Charleroi, direction Namur",
      alinea:
        "Nous roulons **un peu plus d'une heure**, par le ring, l'A54 et le contournement de Charleroi, ou par l'E411 et Namur si la circulation y est plus fluide. Lors de la réservation, vous fixez la date de livraison ; nous convenons de l'heure avec vous par téléphone. Votre maison se trouve dans un chemin forestier étroit ou en haut d'une allée raide ? Signalez-le à l'avance. Le technicien saura ainsi où il peut s'arrêter.",
    },
    afhalen: {
      kop: "Venir chercher n'est pas l'usage ici",
      alinea:
        "Aartselaar se trouve à plus de cent kilomètres d'Aiseau-Presles. Venir chercher puis rapporter vous coûte deux trajets de **plus de deux heures** aller-retour, et un déshumidificateur doit voyager debout dans la voiture. Laissez-nous apporter les appareils : le technicien mesure tout de suite si le séchage aide votre cave ou votre chape.",
    },
    buren: ["farciennes", "chatelet"],
    faq: [
      {
        q: "Une cave à Pont-de-Loup peut-elle redevenir utilisable avec un déshumidificateur ?",
        a: "Comme débarras ou espace de travail, cela réussit généralement, tant que l'appareil tourne et que l'hygrostat maintient l'humidité au bon niveau. Si l'eau pénètre depuis l'extérieur, elle revient dès que l'appareil est retiré. La mesure lors de la livraison montre quelle part de l'humidité disparaît.",
      },
      {
        q: "Une maison sous les arbres à Presles sèche-t-elle plus lentement ?",
        a: "Souvent, oui. Sous de grands arbres, l'air extérieur reste humide et la façade reçoit peu de soleil : aérer fenêtres ouvertes aide donc peu. Fenêtres fermées et avec un déshumidificateur à l'intérieur, vous retirez malgré tout l'humidité de construction.",
      },
      {
        q: "Combien de temps le déshumidificateur reste-t-il après une rénovation de salle de bains ?",
        a: "Cela dépend de l'épaisseur de la chape, du matériau et de la température. Nous ne pouvons pas donner de délai fixe à l'avance. La mesure à l'enlèvement montre si le sol et les murs sont prêts pour le carrelage ou la peinture.",
      },
      {
        q: "Venez-vous aussi jusqu'à Roselies et Aiseau-village ?",
        a: "Oui, toute la commune fait partie de notre zone de livraison, y compris les habitations dispersées en dehors des villages. Choisissez une date de livraison lors de la réservation et mentionnez une allée difficile d'accès. Nous convenons ensuite avec vous de l'heure de livraison.",
      },
    ],
    realisaties: [],
  },
  "chapelle-lez-herlaimont": {
    slug: "chapelle-lez-herlaimont",
    title: "Déshumidificateur à Chapelle-lez-Herlaimont | Vernast",
    description:
      "Déshumidificateur de chantier à louer à Chapelle-lez-Herlaimont, Godarville ou Piéton : maisons de mineurs et caves du bassin. Sur rendez-vous, avec mesure.",
    h1: "Louer un déshumidificateur de chantier à Chapelle-lez-Herlaimont",
    kicker: "Hainaut · entre le Centre et Charleroi",
    rit: { afstand: "environ 90 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Chapelle-lez-Herlaimont se situe **entre La Louvière et Charleroi**, avec **Godarville et Piéton** pour sections. La commune a grandi avec les charbonnages. Ils sont fermés depuis longtemps, mais les cités ouvrières de cette époque marquent encore le paysage des rues.",
      "Dans les villages se succèdent surtout des **rangées de maisons en briques**, et en périphérie des **lotissements d'après-guerre**. Depuis notre entrepôt d'Aartselaar, nous mettons un peu plus d'une heure pour y arriver.",
    ],
    bouw: {
      kop: "Des maisons de mineurs qui reçoivent une seconde vie",
      alineas: [
        "**Une maison de mineur** est étroite et ses murs de façade sont minces. La cave a souvent encore **un sol en pavés ou en terre battue**. Lors d'une transformation, on coule généralement une nouvelle dalle de béton ou une chape et on refait le plafonnage de tous les murs. Vous apportez ainsi beaucoup d'eau dans un petit volume, et sans déshumidificateur, elle reste des semaines dans l'air.",
        "Dans les **maisons de lotissement**, il s'agit plutôt d'une extension à l'arrière ou d'une nouvelle salle de bains. Le volume est limité, mais le planning est serré : **le carreleur veut un support sec**. Le technicien mesure l'humidité au démarrage et à l'enlèvement, pour que vous puissiez donner un chiffre au carreleur.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison de mineur entièrement rénovée** : 70 litres par jour pour des volumes jusqu'à 400 m³, assez pour un rez-de-chaussée avec nouvelle chape et plafonnage frais." },
      { key: "teddh20", waarom: "Une cave au sol en pierre reste froide en hiver. **Ce chauffage électrique de 20 kW** la réchauffe, pour que le déshumidificateur travaille mieux. Il demande un raccordement en 400 V." },
      { key: "ttk170", waarom: "Pour une nouvelle salle de bains ou une annexe : un déshumidificateur compact de 50 litres par jour qui ne consomme que 0,75 kW." },
      { key: "ttv4500", waarom: "Dans une maison étroite et profonde, l'air humide stagne à l'arrière. Ce ventilateur le met en mouvement, **de la pièce avant jusqu'à la cuisine**." },
    ],
    levering: {
      kop: "Livrer à Chapelle : par l'A54 et l'E42",
      alinea:
        "Nous roulons **par le ring de Bruxelles et l'A54**, le dernier tronçon par **l'E42**. Comptez un peu plus d'une heure. Vous choisissez une date de livraison lors de la réservation, nous convenons de l'heure avec vous. Le technicien place les appareils pièce par pièce, dirige l'évacuation vers un siphon ou laisse le réservoir en place, et note les valeurs d'humidité du mur et du sol.",
    },
    afhalen: {
      kop: "Venir chercher soi-même, c'est un long trajet",
      alinea:
        "Le point d'enlèvement d'Aartselaar se trouve à **un peu plus d'une heure de route**. L'aller-retour vous prend une demi-journée de travail, et au retour des appareils, vous refaites ce chemin. Un déshumidificateur doit en outre voyager debout dans la voiture. Pour un seul petit appareil, c'est faisable ; pour une maison entière, mieux vaut la livraison.",
    },
    buren: ["manage", "seneffe", "courcelles", "fontaine-l-eveque", "morlanwelz"],
    faq: [
      {
        q: "Ma cave a un sol en terre battue. Le séchage a-t-il un sens ?",
        a: "En partie. Un déshumidificateur retire l'humidité de l'air et des murs, mais un sol en terre amène de l'humidité du sol tant qu'il reste à nu. Si vous voulez une cave durablement sèche, posez d'abord une barrière contre l'humidité et une dalle de béton. Nous séchons ensuite cette dalle.",
      },
      {
        q: "Combien d'appareils faut-il pour une maison mitoyenne étroite de deux niveaux ?",
        a: "Généralement un déshumidificateur à condensation par étage, portes fermées, et un ventilateur au niveau où se trouve la nouvelle chape. Le technicien décide sur place, sur la base de la mesure d'humidité et du volume de chaque pièce.",
      },
      {
        q: "Venez-vous aussi à Godarville et à Piéton ?",
        a: "Oui. Ce sont deux sections de Chapelle-lez-Herlaimont et elles se trouvent dans notre zone de livraison. Indiquez lors de la réservation l'adresse complète avec la section, pour que le planning prévoie le bon trajet.",
      },
      {
        q: "Le déshumidificateur peut-il rester allumé quand personne n'est dans la maison ?",
        a: "Oui, c'est le but : un déshumidificateur de chantier tourne jour et nuit. Si vous dirigez le tuyau d'évacuation vers un siphon ou un évier, personne ne doit vider le réservoir et l'appareil continue de sécher pendant le week-end.",
      },
    ],
    realisaties: [],
  },
  chatelet: {
    slug: "chatelet",
    title: "Déshumidificateur de chantier à louer à Châtelet | Vernast",
    description:
      "Louer un déshumidificateur à Châtelet, Châtelineau et Bouffioulx : maisons anciennes sur les deux rives de la Sambre, caves en vallée. Livré, installé, repris.",
    h1: "Déshumidificateur de chantier à louer à Châtelet",
    kicker: "Hainaut · deux rives de la Sambre",
    rit: { afstand: "environ 105 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Châtelet se trouve **en aval de Charleroi**, de part et d'autre de la Sambre. La commune regroupe Châtelet, Châtelineau et Bouffioulx. Ce dernier village est connu depuis des siècles pour son **grès au sel**.",
      "Comme le reste du bassin, Châtelet a grandi autour des mines et de l'industrie métallurgique. Dans la vallée s'alignent des rangées serrées de maisons en briques, sur les coteaux davantage de maisons isolées. Depuis Aartselaar, nous mettons **un peu plus d'une heure** pour y arriver.",
    ],
    bouw: {
      kop: "Des rives basses et des coteaux au-dessus",
      alineas: [
        "Qui habite près de la Sambre a une maison sur un terrain bas. Une cave ou un rez-de-chaussée sans barrière contre l'humidité y reste plus humide que plus haut. Après une rénovation, on retrouve alors **humidité de construction et humidité du sol** dans le même mur. L'humidité de construction s'en va, celle du sol reste. Le technicien mesure lors de l'installation laquelle des deux vous voyez.",
        "À Bouffioulx et sur les coteaux, il s'agit plus souvent d'anciennes maisons de village et de dépendances transformées aux murs épais. De tels murs retiennent longtemps l'eau. Laissez-les **sécher progressivement** : un ventilateur contre le mur et un déshumidificateur avec l'hygrostat réglé sur une valeur cible, pour que le plafonnage ne se fissure pas.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison mitoyenne à Châtelet ou Châtelineau** : un par étage, 70 litres par jour. Avec la pompe à condensats, l'eau s'écoule par un tuyau vers l'évacuation." },
      { key: "revolution", waarom: "**Pour la cave froide dans la vallée** : ce déshumidificateur à adsorption absorbe encore l'humidité à basse température." },
      { key: "ttv4500", waarom: "Chasse la couche d'air humide le long d'un mur épais, pour que le mur rende son eau plus vite." },
      { key: "ttk170", waarom: "Pour une salle de bains ou une seule pièce rénovée à part : compact, 50 litres par jour, pour des pièces jusqu'à environ 250 m³." },
    ],
    levering: {
      kop: "Livrer à Châtelet : au-delà de Charleroi, le long de la Sambre",
      alinea:
        "Le trajet passe par le ring, l'A54 et le R3 autour de Charleroi, et dure **un peu plus d'une heure**. Vous choisissez une date de livraison lors de la réservation ; nous fixons l'heure ensemble. Votre maison se trouve dans **une rue en pente** ? Signalez-le à l'avance, pour que le technicien se prépare aux appareils plus lourds.",
    },
    afhalen: {
      kop: "Venir chercher depuis Châtelet vaut rarement la peine",
      alinea:
        "Aartselaar se trouve à plus de cent kilomètres, un peu plus d'une heure de route. Venir chercher et rapporter vous coûte deux fois un trajet de **plus de deux heures** aller-retour. Pour une cave ou une maison au bord de la Sambre, choisissez plutôt la livraison : la mesure d'humidité au démarrage montre si le séchage y a du sens.",
    },
    buren: ["charleroi", "farciennes", "aiseau-presles", "gerpinnes"],
    faq: [
      {
        q: "Ma maison à Châtelineau est proche de la Sambre. Un déshumidificateur de chantier aide-t-il ?",
        a: "Pour l'humidité de construction après une rénovation, oui : cette eau disparaît et ne revient pas. Si l'humidité vient du sol parce que le mur n'a pas de barrière, un déshumidificateur garde la pièce utilisable, mais la cause reste. La mesure lors de la livraison fait cette distinction.",
      },
      {
        q: "Comment sécher une vieille maison en pierre à Bouffioulx sans que le plafonnage se fissure ?",
        a: "Ne faites pas tourner le déshumidificateur à pleine puissance. Un mur qui sèche trop vite en surface se rétracte de façon inégale, et le plafonnage se fissure. Le technicien règle l'hygrostat sur une valeur cible et place un ventilateur contre le mur, pour que l'humidité sorte de la pierre de manière uniforme.",
      },
      {
        q: "Que dois-je signaler lors de la réservation ?",
        a: "Indiquez qui ouvrira la porte sur place et comment nous pouvons joindre cette personne, pour que la livraison se déroule sans accroc. Si votre maison se trouve dans une rue en pente, mentionnez-le aussi : le technicien se prépare alors aux appareils plus lourds.",
      },
      {
        q: "Et si l'eau revient dans ma cave après chaque averse ?",
        a: "Alors l'eau pénètre depuis l'extérieur, et un déshumidificateur ne règle pas cela : ce qu'il retire aujourd'hui revient à l'averse suivante. Nous mesurons lors de l'installation et suivons si le taux d'humidité baisse. S'il reste élevé, nous vous le disons. Un entrepreneur en étanchéité est alors l'étape suivante.",
      },
    ],
    realisaties: [],
  },
  courcelles: {
    slug: "courcelles",
    title: "Déshumidificateur de chantier à Courcelles | Vernast",
    description:
      "Déshumidificateur à louer à Courcelles, Trazegnies, Souvret ou Gouy-lez-Piéton : maisons de mineurs et lotissements récents à l'ouest de Charleroi. Livré.",
    h1: "Louer un déshumidificateur de chantier à Courcelles",
    kicker: "Hainaut · l'ouest du bassin",
    rit: { afstand: "environ 95 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Courcelles se trouve **juste à l'ouest de Charleroi**. Outre Courcelles même, Souvret, Trazegnies et Gouy-lez-Piéton font partie de la commune. Le bâtiment le plus connu est le **château de Trazegnies**.",
      "Longtemps, le charbon a été ici le grand employeur. Les rues de maisons de mineurs en briques en témoignent, avec entre elles les lotissements des dernières décennies. Depuis Aartselaar, Courcelles est à **un peu plus d'une heure** de route.",
    ],
    bouw: {
      kop: "Maisons de mineurs et le lotissement d'à côté",
      alineas: [
        "Une **maison de mineur** est petite et basse, souvent avec une annexe ajoutée plus tard. Qui remet une telle maison en état pose de nouveaux sols, refait le plafonnage et isole, dans un volume à peine plus grand qu'un appartement. Un appareil compact par étage suffit généralement, à condition que **les portes restent fermées**. Sinon, toute la maison sèche un peu et aucune pièce vraiment.",
        "Dans les quartiers plus récents, il s'agit d'une maison des années septante ou plus récente, ou d'une construction neuve. On y trouve souvent **une chape sur tout le rez-de-chaussée**, à côté de murs plafonnés et parfois d'une cave ou d'un garage. Un déshumidificateur avec un ventilateur au-dessus du sol en retire l'eau, et la mesure à l'enlèvement indique au poseur de sol s'il peut commencer.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**Pour une petite maison de mineur** : compact, 50 litres par jour et adapté aux pièces jusqu'à environ 250 m³." },
      { key: "radiaal2250", waarom: "**Sur une nouvelle chape** : le ventilateur radial souffle 2 250 m³ par heure, bas et dirigé, sur le sol, là où se trouve le plus d'eau." },
      { key: "ttk350", waarom: "Pour une construction neuve ou un étage plus spacieux : 70 litres par jour, pour des pièces jusqu'à environ 400 m³." },
      { key: "teddh20", waarom: "Chauffe un garage ou une annexe non chauffés en hiver, pour que le déshumidificateur travaille mieux. Ce chauffage de 20 kW demande un raccordement 400 V." },
    ],
    levering: {
      kop: "Livrer à Courcelles : par Nivelles et l'A54",
      alinea:
        "Courcelles se trouve à **un peu plus d'une heure** de notre entrepôt, par le ring et l'A54. Vous choisissez une date de livraison lors de la réservation, nous convenons de l'heure avec vous. Le technicien place les appareils par zone de séchage, pose le tuyau d'évacuation et mesure l'humidité du sol et des murs. Vous voyez ainsi plus tard les progrès accomplis.",
    },
    afhalen: {
      kop: "Venir chercher soi-même : comptez deux trajets",
      alinea:
        "Venir chercher soi-même signifie, depuis Courcelles, faire deux fois l'aller-retour vers Aartselaar, chaque fois **plus de deux heures** de route. Si vous emportez un seul petit appareil alors que vous devez de toute façon passer près d'Anvers, c'est faisable. Pour une chape, mieux vaut nous laisser livrer et mesurer.",
    },
    buren: ["charleroi", "pont-a-celles", "fontaine-l-eveque", "chapelle-lez-herlaimont"],
    faq: [
      {
        q: "Un seul déshumidificateur suffit-il pour une petite maison de mineur ?",
        a: "Souvent oui, si un seul étage à la fois est humide. Si le rez-de-chaussée et l'étage ont tous deux été rénovés, vous séchez plus vite avec un appareil par étage et les portes fermées. Le calculateur calcule le volume, le technicien adapte l'installation sur place.",
      },
      {
        q: "Quand mon poseur de sol peut-il commencer sur une nouvelle chape à Trazegnies ou Souvret ?",
        a: "Dès que l'humidité résiduelle passe sous la valeur limite indiquée par le poseur ou par le fabricant du revêtement. Elle varie selon le type de chape et la finition. Nous mesurons au démarrage et à l'enlèvement, pour que la décision repose sur un chiffre et non sur une supposition.",
      },
      {
        q: "Puis-je ouvrir les fenêtres pendant que le déshumidificateur fonctionne ?",
        a: "Mieux vaut pas. Un déshumidificateur travaille dans un espace fermé. Fenêtres ouvertes, il retire l'humidité de l'air extérieur et n'arrive guère à vos murs. Si vous voulez quand même aérer un moment, éteignez l'appareil pendant ce temps.",
      },
      {
        q: "Le technicien peut-il voir si la tache d'humidité dans ma vieille maison vient du sol ?",
        a: "Il mesure le taux d'humidité à différentes hauteurs dans le mur. L'humidité de construction est répartie dans le plafonnage, tandis que l'humidité ascensionnelle diminue de bas en haut. De ce schéma, il déduit si le séchage suffit ou si le mur doit aussi être traité.",
      },
    ],
    realisaties: [],
  },
  farciennes: {
    slug: "farciennes",
    title: "Location de déshumidificateur à Farciennes | Vernast",
    description:
      "Déshumidificateur à louer à Farciennes : maisons ouvrières en briques au bord de la Sambre, entre terrils et anciens charbonnages. Livré, installé et mesuré.",
    h1: "Location de déshumidificateur de chantier à Farciennes",
    kicker: "Hainaut · une commune minière sur la Sambre",
    rit: { afstand: "environ 105 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Farciennes est une **petite commune au bord de la Sambre**, entre Charleroi, Fleurus et Châtelet. Outre Farciennes même, seule Pironchamps en fait partie. La commune a été façonnée par les **charbonnages** qui ont tourné ici jusqu'au siècle dernier.",
      "Cela se voit encore partout : de longues rangées de maisons ouvrières en briques, des terrils couverts de végétation et la ruine du château de Farciennes. Le bâti est dense et ancien. Depuis Aartselaar, nous mettons **un peu plus d'une heure** pour rejoindre Farciennes.",
    ],
    bouw: {
      kop: "Des rangées de maisons anciennes sur un sol bas et humide",
      alineas: [
        "Beaucoup de maisons se trouvent **dans la vallée de la Sambre**, sur un terrain bas et sans barrière contre l'humidité dans le mur. Qui y décape un vieil enduit voit souvent des auréoles de sel et des plinthes humides. Un déshumidificateur retire l'humidité de construction du nouveau plafonnage, mais l'humidité du sol continue d'arriver tant que le mur n'est pas traité. Après la mesure, le technicien vous dit de laquelle des deux il s'agit.",
        "Un deuxième cas, ce sont les **dégâts des eaux** après une fuite ou une évacuation qui a débordé, dans une maison avec un plancher d'étage en bois. L'eau doit alors aussi sortir des poutres et du vide en dessous. Un déshumidificateur à adsorption souffle de l'air sec dans ce vide par des gaines, souvent sans qu'il faille ouvrir le plancher.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**Après des dégâts des eaux sous un plancher ou dans une cave froide** : ce déshumidificateur à adsorption sèche un vide par des gaines et fonctionne aussi dans le froid." },
      { key: "ttk170", waarom: "**Pour la petite maison ouvrière** : compact, 50 litres par jour pour des pièces jusqu'à environ 250 m³. Dans un escalier, mieux vaut le porter à deux." },
      { key: "ttk350", waarom: "Quand toute la maison est rénovée en même temps : un par étage, 70 litres par jour, pour des pièces jusqu'à environ 400 m³." },
      { key: "ttv4500", waarom: "Après le décapage d'un vieil enduit, chasse la couche d'air humide le long du mur, pour qu'il sèche plus vite. Il déplace 4 500 m³ d'air par heure." },
    ],
    levering: {
      kop: "Livrer à Farciennes : un trajet qui passe par Charleroi",
      alinea:
        "Nous roulons **un peu plus d'une heure**, par le ring, l'A54 et le contournement de Charleroi. Lors de la réservation, vous choisissez une date de livraison, puis nous prenons rendez-vous pour l'heure. Dans une rue de maisons mitoyennes sans jardinet, une place libre devant la porte aide. Le technicien installe les appareils, pose l'évacuation et note les valeurs d'humidité au démarrage.",
    },
    afhalen: {
      kop: "De Farciennes à Aartselaar, aller et retour",
      alinea:
        "Venir chercher soi-même vous coûte, depuis Farciennes, deux trajets de **plus de deux heures** aller-retour, soit plus de quatre cents kilomètres au total. Pour la plupart des travaux, la livraison est alors le choix logique, et certainement après des dégâts des eaux : la mesure y détermine les appareils nécessaires.",
    },
    buren: ["charleroi", "fleurus", "chatelet", "aiseau-presles"],
    faq: [
      {
        q: "Que sont ces auréoles blanches sur mon mur après le décapage de l'enduit ?",
        a: "Ce sont généralement des sels que l'eau du sol a amenés dans le mur. Ils restent là où l'eau s'évapore et signalent de l'humidité ascensionnelle. Un déshumidificateur retire l'humidité de construction, mais pour les sels et l'humidité du sol, le mur lui-même doit être traité.",
      },
      {
        q: "Mon plancher en bois doit-il être enlevé après une fuite d'eau ?",
        a: "Pas toujours. Si le plancher n'est pas déformé, un déshumidificateur à adsorption peut souffler de l'air sec sous les planches par des gaines. Le technicien mesure l'humidité dans le bois et dans le vide en dessous. À l'enlèvement, il mesure à nouveau, pour que vous sachiez si le plancher est assez sec.",
      },
      {
        q: "Est-ce lourd de monter un déshumidificateur de chantier à l'étage ?",
        a: "Même le modèle compact pèse déjà quelques dizaines de kilos. Il est monté sur roues, mais dans un escalier, mieux vaut le porter à deux. Lors d'une livraison, le technicien met lui-même les appareils en place ; signalez à l'avance s'il y a un escalier fixe.",
      },
      {
        q: "Comment savoir si le mur est assez sec pour être peint ?",
        a: "À l'œil, c'est impossible : un mur peut sembler sec au toucher et contenir encore beaucoup d'eau. Nous mesurons au démarrage et à l'enlèvement. Vous allez ainsi chez le peintre avec un chiffre plutôt qu'avec une impression.",
      },
    ],
    realisaties: [],
  },
  fleurus: {
    slug: "fleurus",
    title: "Déshumidificateur de chantier à louer à Fleurus | Vernast",
    description:
      "Louer un déshumidificateur à Fleurus, Wanfercée-Baulet, Heppignies ou Wangenies : fermes du plateau limoneux et maisons des anciens villages miniers.",
    h1: "Déshumidificateur de chantier à louer à Fleurus",
    kicker: "Hainaut · entre le bassin et le plateau limoneux",
    rit: { afstand: "environ 100 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Fleurus se trouve **au nord-est de Charleroi** et figure dans les livres d'histoire pour les batailles de 1690 et de 1794. La commune compte notamment Wanfercée-Baulet, Lambusart, Heppignies et Wangenies.",
      "Le sud appartient à **l'ancien bassin minier**, avec des rues ouvrières qui rejoignent Farciennes et Charleroi. Vers le nord, le paysage devient rural, avec des champs sur un limon fertile, des fermes et des villages. En camionnette, nous mettons **un peu plus d'une heure** depuis Aartselaar.",
    ],
    bouw: {
      kop: "Rues ouvrières au sud, fermes au nord",
      alineas: [
        "À Lambusart et à Wanfercée-Baulet, beaucoup de maisons en briques de l'époque minière se serrent les unes contre les autres. Une rénovation y signifie le plus souvent **du plafonnage et un nouveau sol** dans une maison aux petites pièces. Il y a souvent aussi une cave humide, parce que les murs n'ont pas de barrière contre l'humidité.",
        "Vers Wangenies et Brye, ce sont surtout des **fermes et des granges** qui sont transformées en habitation, ou on construit du neuf sur une parcelle spacieuse. Ce sont de grands volumes hauts avec une dalle entièrement neuve. Un seul appareil y sèche surtout son propre coin : le technicien en répartit donc plusieurs dans l'espace.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une grange ou une ferme transformée** : 110 litres par jour pour des pièces jusqu'à environ 600 m³." },
      { key: "radiaal2250", waarom: "Souffle bas et de façon dirigée sur une grande dalle neuve, pour que la chape au milieu ne reste pas à la traîne." },
      { key: "ttk350", waarom: "**Pour une maison dans les villages miniers** : un par étage, 70 litres par jour pour des pièces jusqu'à environ 400 m³." },
      { key: "teddh30", waarom: "Réchauffe d'abord une grange froide en hiver. Ce chauffage de 30 kW demande du courant triphasé (400 V), souvent déjà présent dans une ferme." },
    ],
    levering: {
      kop: "Livrer à Fleurus, à la campagne aussi",
      alinea:
        "Fleurus se trouve à **un peu plus d'une heure** de route d'Aartselaar, par le ring et l'A54. Vous choisissez une date de livraison, nous fixons l'heure ensemble. Dans une ferme avec cour intérieure ou au bout d'un long chemin de campagne, le technicien aime savoir à l'avance où il peut décharger. Il installe les appareils, règle l'hygrostat et mesure l'humidité au démarrage.",
    },
    afhalen: {
      kop: "Venir chercher est possible, mais le trajet est long",
      alinea:
        "Notre point d'enlèvement d'Aartselaar se trouve à une centaine de kilomètres. Venir chercher et rapporter vous coûte deux trajets de **plus de deux heures** aller-retour. Pour un seul appareil dans une maison, c'est faisable. Dans une grange ou une ferme, la disposition des appareils influence la vitesse de séchage, et le technicien la règle mieux sur place.",
    },
    buren: ["charleroi", "farciennes", "les-bons-villers"],
    faq: [
      {
        q: "Combien d'appareils faut-il pour une grange transformée à Wangenies ?",
        a: "Cela dépend du volume. Une grange de dix mètres sur vingt avec une hauteur moyenne de cinq mètres compte déjà mille mètres cubes. Un seul déshumidificateur n'y suffit pas : comptez plusieurs appareils et un ventilateur au-dessus du sol. Le calculateur vous donne une première estimation.",
      },
      {
        q: "Un déshumidificateur de chantier fonctionne-t-il dans un local non chauffé en hiver ?",
        a: "Un déshumidificateur à condensation a besoin d'une pièce au-dessus d'environ 15 °C pour bien fonctionner. Dans une grange ou une cave froide, nous ajoutons donc un chauffage, ou nous choisissons un déshumidificateur à adsorption, qui continue d'absorber l'humidité dans le froid.",
      },
      {
        q: "Où s'écoule l'eau du déshumidificateur ?",
        a: "Avec la pompe à condensats, vous n'avez pas de réservoir à vider. Le technicien dirige le tuyau d'évacuation vers un siphon, une évacuation ou l'extérieur. L'appareil ne s'arrête ainsi pas parce que le réservoir est plein alors que personne n'est sur le chantier.",
      },
      {
        q: "Allez-vous aussi à Lambusart et à Wanfercée-Baulet ?",
        a: "Oui, nous livrons dans toutes les sections de Fleurus, des villages miniers au sud aux villages agricoles au nord. Vous choisissez une date de livraison lors de la réservation. Signalez aussi un accès difficile, comme un chemin de campagne étroit.",
      },
    ],
    realisaties: [],
  },
  "fontaine-l-eveque": {
    slug: "fontaine-l-eveque",
    title: "Louer un déshumidificateur à Fontaine-l'Évêque | Vernast",
    description:
      "Déshumidificateur de chantier à louer à Fontaine-l'Évêque, Forchies-la-Marche ou Leernes : maisons en briques et lotissements à l'ouest de Charleroi.",
    h1: "Louer un déshumidificateur de chantier à Fontaine-l'Évêque",
    kicker: "Hainaut · la lisière ouest de Charleroi",
    rit: { afstand: "environ 100 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Fontaine-l'Évêque se trouve **juste à l'ouest de Charleroi**, avec **Forchies-la-Marche et Leernes** pour sections. La petite ville a un noyau historique, mais elle a surtout grandi grâce à l'exploitation du charbon.",
      "Autour du centre se trouvent des **maisons ouvrières et de petites maisons de maître** ; vers Leernes, le paysage devient plus rural. Depuis Aartselaar, nous y sommes en **un peu plus d'une heure**.",
    ],
    bouw: {
      kop: "Brique pleine et vieilles caves",
      alineas: [
        "Beaucoup de maisons sont ici **construites en briques pleines, sans creux**, et la façade absorbe l'eau lors des pluies battantes. Si vous isolez une telle maison par l'intérieur avec une contre-cloison, **le mur doit d'abord être sec**. Sinon, vous enfermez l'humidité, et vous ne la voyez qu'un hiver plus tard, sous forme de moisissures.",
        "**Les vieilles caves** ont rarement une barrière contre l'humidité. Si l'eau entre par une fissure ou un mauvais joint, un déshumidificateur ne règle pas le problème. **Après la réparation**, il retire l'humidité du mur et du sol, et la mesure à l'enlèvement montre si elle ne revient pas.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour un mur de façade qui doit être sec avant l'isolation** : 70 litres par jour, dans un rez-de-chaussée fermé, portes closes." },
      { key: "radiaal2250", waarom: "Souffle de façon dirigée contre un mur ou sur le sol d'une cave, **là où l'air resterait sinon immobile** et ralentirait le séchage." },
      { key: "teddh30", waarom: "Une cave en briques pleines reste froide en hiver. **Le chauffage électrique de 30 kW** l'amène à une température où un déshumidificateur est efficace. Il fonctionne en courant triphasé (400 V)." },
      { key: "ttk170", waarom: "Pour une seule pièce rénovée à l'étage d'une maison de maître : assez compact pour un escalier étroit et économe avec 0,75 kW." },
    ],
    levering: {
      kop: "Livrer à Fontaine-l'Évêque : au-delà de Charleroi",
      alinea:
        "Nous roulons **par Bruxelles et l'A54 en direction de Charleroi**, un peu plus d'une heure. Lors de la réservation, vous fixez une **date de livraison** ; nous convenons du moment précis avec vous par téléphone. Le technicien place les appareils près des murs les plus humides, règle l'hygrostat et vous dit quelle valeur il vise.",
    },
    afhalen: {
      kop: "Venir chercher : comptez une demi-journée",
      alinea:
        "Aartselaar se trouve à **un peu plus d'une heure de route** de Fontaine. Aller-retour, vous passez près de trois heures en voiture, et autant pour rapporter les appareils. Pour la plupart des clients d'ici, la livraison est donc le choix logique.",
    },
    buren: ["charleroi", "anderlues", "chapelle-lez-herlaimont", "courcelles", "montigny-le-tilleul"],
    faq: [
      {
        q: "Un mur doit-il être sec avant de poser une isolation intérieure ?",
        a: "Oui. Une contre-cloison isolée contre un mur humide enferme l'humidité, et le mur ne sèche alors presque plus. Laissez d'abord sécher le mur et faites mesurer le technicien. Pour un mur en briques pleines, cela peut prendre des semaines.",
      },
      {
        q: "Un déshumidificateur règle-t-il un mur de cave qui fuit ?",
        a: "Non. Si l'eau entre par une fissure ou un mauvais joint, il faut d'abord réparer. Le déshumidificateur intervient après : il retire l'humidité du mur et du sol, et la mesure à l'enlèvement montre si la réparation a fonctionné.",
      },
      {
        q: "Livrez-vous à Forchies-la-Marche et à Leernes ?",
        a: "Oui, ces deux sections font partie de Fontaine-l'Évêque et nous y livrons comme au centre. Indiquez lors de la réservation s'il y a un escalier ou si les appareils doivent aller dans une cave, le planning en tiendra compte.",
      },
      {
        q: "Pourquoi un chauffage avec le déshumidificateur en hiver ?",
        a: "Parce qu'un déshumidificateur à condensation retire beaucoup moins d'eau de l'air sous environ 15 °C. Dans une cave non chauffée ou une maison inoccupée, un chauffage de chantier met la pièce en température, et le déshumidificateur retrouve alors toute sa capacité.",
      },
    ],
    realisaties: [],
  },
  gerpinnes: {
    slug: "gerpinnes",
    title: "Location de déshumidificateur à Gerpinnes | Vernast",
    description:
      "Louer un déshumidificateur à Gerpinnes, Loverval ou Acoz : villas dans la verdure au sud de Charleroi et maisons de village en pierre. Sur rendez-vous, mesuré.",
    h1: "Location de déshumidificateur de chantier à Gerpinnes",
    kicker: "Hainaut · Entre-Sambre-et-Meuse",
    rit: { afstand: "environ 105 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Gerpinnes se trouve **au sud de Charleroi**, au bord de **l'Entre-Sambre-et-Meuse**. Loverval, Acoz, Gougnies, Joncret et Villers-Poterie font partie de la commune. La Marche Sainte-Rolende, l'un des cortèges folkloriques de la région, y est bien connue.",
      "Loverval est un **quartier de villas entre les bois**. Dans les autres villages, de **vieilles maisons en pierre naturelle** côtoient des habitations plus récentes sur de vastes parcelles. Le trajet depuis Aartselaar dure un peu plus d'une heure.",
    ],
    bouw: {
      kop: "Des villas aux grands volumes et des maisons de village en pierre",
      alineas: [
        "**Une villa des années septante ou quatre-vingt** est souvent rénovée d'un coup : chauffage par le sol avec nouvelle chape, nouveau plafonnage, parfois une extension avec un grand séjour. **Ce sont de grands volumes.** Un seul appareil au milieu ne parvient pas à sécher l'air dans les coins ; plusieurs déshumidificateurs, répartis par zone, fonctionnent mieux.",
        "**Les vieilles maisons de village en calcaire ou en grès** ont des murs épais qui sèchent lentement. Après une rénovation avec un enduit à la chaux, cela ne doit pas aller trop vite, sinon l'enduit se fissure. **Le technicien règle l'hygrostat sur une valeur cible**, et non sur le niveau le plus sec que l'appareil peut atteindre.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une villa avec séjour ouvert et nouveau chauffage par le sol** : 110 litres par jour, pour des volumes jusqu'à 600 m³." },
      { key: "ttk350", waarom: "Comme deuxième appareil dans une villa, ou comme seul déshumidificateur dans une maison de village en pierre où l'enduit doit durcir tranquillement." },
      { key: "ttv4500", waarom: "Un grand espace ouvert a des coins où l'air stagne. **Ce ventilateur répartit l'air sec** sur toute la chape." },
      { key: "radiaal2250", waarom: "Pour une extension avec une nouvelle dalle : ce ventilateur radial dirige le flux d'air à plat sur la dalle, là où se trouve le plus d'eau." },
    ],
    levering: {
      kop: "Livrer à Gerpinnes : au-delà du ring de Charleroi",
      alinea:
        "Nous roulons par Bruxelles, l'A54 et le ring de Charleroi, soit **un peu plus d'une heure** au total. Vous choisissez une **date de livraison**, et nous convenons de l'heure avec vous. Si la villa a une longue allée, dites-nous si le technicien peut rouler jusqu'à la porte. Il installe les appareils par zone et mesure l'humidité au démarrage.",
    },
    afhalen: {
      kop: "Venir chercher vaut rarement la peine ici",
      alinea:
        "Avec **un peu plus d'une heure de route** jusqu'à Aartselaar, venir chercher représente une sortie d'une demi-journée, et pour une villa, il vous faut de toute façon plusieurs appareils. Faites-les livrer : le technicien voit tout de suite si le nombre est le bon.",
    },
    buren: ["charleroi", "chatelet", "aiseau-presles", "ham-sur-heure-nalinnes"],
    faq: [
      {
        q: "Combien de déshumidificateurs faut-il pour une villa avec chauffage par le sol ?",
        a: "Cela dépend du volume et de l'épaisseur de la chape. Dans une villa spacieuse, il en faut souvent deux ou trois, complétés par un ventilateur. Le calculateur donne une première estimation ; le technicien ajuste le nombre sur place.",
      },
      {
        q: "Puis-je utiliser le chauffage par le sol pour sécher la chape plus vite ?",
        a: "C'est le chapiste ou l'installateur qui en décide : il existe un protocole de mise en chauffe qui augmente la température par paliers. Un déshumidificateur peut tourner en parallèle, car il évacue l'humidité que le chauffage chasse de la chape.",
      },
      {
        q: "Le séchage est-il dangereux pour un enduit à la chaux dans une vieille maison en pierre ?",
        a: "Pas s'il se fait de manière contrôlée. La chaux doit durcir tranquillement : le technicien règle donc l'hygrostat sur une valeur cible plutôt qu'au maximum. L'eau sort ainsi de façon uniforme et l'enduit ne présente pas de fissures de retrait.",
      },
      {
        q: "Livrez-vous aussi à Loverval et dans les autres sections ?",
        a: "Oui. Loverval, Acoz, Gougnies, Joncret et Villers-Poterie font partie de Gerpinnes et se trouvent dans notre zone de livraison. Mentionnez la section dans l'adresse, et le planning choisira le chemin le plus court.",
      },
    ],
    realisaties: [],
  },
  "les-bons-villers": {
    slug: "les-bons-villers",
    title: "Location de déshumidificateur aux Bons Villers | Vernast",
    description:
      "Déshumidificateur à louer aux Bons Villers, Frasnes-lez-Gosselies, Rèves ou Wayaux : fermes transformées et maisons de village au nord de Charleroi. Mesuré.",
    h1: "Location de déshumidificateur de chantier aux Bons Villers",
    kicker: "Hainaut · villages agricoles au nord de Charleroi",
    rit: { afstand: "environ 85 km", tijd: "environ une heure" },
    intro: [
      "Les Bons Villers est une **commune rurale au nord de Charleroi**. Elle regroupe **Frasnes-lez-Gosselies, Mellet, Rèves, Villers-Perwin et Wayaux**. Entre les villages s'étendent des champs, et l'aéroport de Charleroi est tout proche.",
      "Vous y trouvez des **fermes en carré**, d'anciennes maisons de village le long de la rue principale et des **habitations plus récentes** en bordure des villages. Depuis Aartselaar, nous y sommes en environ une heure.",
    ],
    bouw: {
      kop: "Des fermes qui deviennent des habitations",
      alineas: [
        "**Transformer une ferme en habitation**, c'est une étable ou une grange aux murs hauts, une nouvelle dalle et souvent une finition intérieure entièrement neuve. **Ce volume est grand et ouvert**, et l'humidité ne s'y répartit pas d'elle-même. Plusieurs appareils, répartis dans l'espace et complétés par un ventilateur, travaillent plus vite qu'un seul gros appareil dans un coin.",
        "**Dans une maison neuve en bordure de village**, l'humidité se trouve surtout dans la dalle, la chape et la maçonnerie. Dès que les fenêtres et les portes sont posées, **un déshumidificateur à condensation retire cette humidité résiduelle** avant le début des finitions. Tant que l'espace reste ouvert, le séchage n'a guère de sens.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une grange ou une étable qui devient habitation** : 110 litres par jour pour un grand volume haut avec une nouvelle dalle." },
      { key: "ttv4500", waarom: "Dans un espace de ferme ouvert, l'air stagne entre les hauts murs. Ce ventilateur **le met en mouvement**, pour que les déshumidificateurs trouvent de l'humidité partout." },
      { key: "ttk350", waarom: "Pour une maison neuve en bordure de village : 70 litres par jour, assez pour un rez-de-chaussée avec chape et plafonnage." },
      { key: "teddh30", waarom: "Une grange non chauffée est trop froide en hiver pour bien sécher. **Le chauffage de chantier de 30 kW** remet la température à niveau ; prévoyez un raccordement en 400 V." },
    ],
    levering: {
      kop: "Livrer aux Bons Villers : tout près de l'A54",
      alinea:
        "La commune se trouve **près de l'A54 entre Nivelles et Charleroi** ; depuis Aartselaar, le trajet dure environ une heure. Lors de la réservation, vous choisissez une **date de livraison**, nous fixons l'heure ensemble. Dans une ferme avec cour intérieure, le technicien roule jusqu'à l'espace concerné, installe les appareils et mesure l'humidité du sol et des murs.",
    },
    afhalen: {
      kop: "Venir chercher est possible, mais c'est une heure de route",
      alinea:
        "Aartselaar se trouve à **environ une heure**. L'aller-retour prend donc deux heures, et vous devez ensuite aussi rapporter les appareils. Pour un appareil dans une petite pièce, cela va ; pour une ferme, mieux vaut la livraison.",
    },
    buren: ["pont-a-celles", "fleurus", "charleroi", "genepien"],
    faq: [
      {
        q: "Comment sécher une grange transformée aux murs hauts ?",
        a: "Avec plusieurs appareils répartis dans l'espace et un ventilateur qui fait circuler l'air. Dans un volume haut, l'air chaud et humide monte, et sans mouvement d'air, il reste là-haut. Le technicien détermine la disposition sur place.",
      },
      {
        q: "Pourquoi une nouvelle cave sèche-t-elle si lentement ?",
        a: "Parce que le béton contient beaucoup d'eau et qu'une cave est peu ventilée. Tant que la cave n'est pas finie, un déshumidificateur à condensation retire l'humidité de l'air et des parois. La mesure à l'enlèvement montre si les valeurs sont assez basses.",
      },
      {
        q: "Livrez-vous dans tous les villages des Bons Villers ?",
        a: "Oui, Frasnes-lez-Gosselies, Mellet, Rèves, Villers-Perwin et Wayaux se trouvent tous dans notre zone de livraison. Si le technicien doit passer par une cour intérieure pour atteindre une ferme, signalez-le, pour qu'il prévoie le temps nécessaire.",
      },
      {
        q: "Un déshumidificateur peut-il tourner dans une grange sans chauffage ?",
        a: "Oui, mais sous environ 15 °C, un déshumidificateur à condensation retire beaucoup moins d'eau de l'air. En hiver, nous ajoutons donc un chauffage de chantier, ou nous choisissons un déshumidificateur à adsorption, qui fonctionne aussi dans les pièces froides.",
      },
    ],
    realisaties: [],
  },
  "montigny-le-tilleul": {
    slug: "montigny-le-tilleul",
    title: "Déshumidificateur à louer à Montigny-le-Tilleul | Vernast",
    description:
      "Louer un déshumidificateur à Montigny-le-Tilleul et Landelies : villas sur les coteaux de la Sambre et de l'Heure, caves dans la vallée. Installé et mesuré.",
    h1: "Déshumidificateur de chantier à louer à Montigny-le-Tilleul",
    kicker: "Hainaut · entre Sambre et Heure",
    rit: { afstand: "environ 100 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Montigny-le-Tilleul se trouve **juste au sud-ouest de Charleroi**, avec **Landelies** pour section au bord de la Sambre. L'Heure traverse la commune avant de se jeter plus loin dans la Sambre.",
      "Sur les coteaux s'étendent des **quartiers de villas** aux maisons isolées ; plus bas dans la vallée, des maisons plus anciennes se trouvent plus près de l'eau. Depuis Aartselaar, nous mettons **un peu plus d'une heure** pour y arriver.",
    ],
    bouw: {
      kop: "Des villas sur le coteau, des maisons dans la vallée",
      alineas: [
        "**Sur les coteaux**, on rénove surtout des villas : une nouvelle cuisine avec chape, une salle de bains, un nouveau plafonnage après le remplacement des conduites. Qui loge ailleurs pendant les travaux veut revenir vite. **Un déshumidificateur de la bonne taille** raccourcit l'attente jusqu'à ce que le poseur de sol puisse commencer.",
        "**Plus bas, dans la vallée de l'Heure et près de la Sambre**, les maisons sont plus proches de l'eau. Une cave peut y devenir humide lors de fortes pluies, et après une inondation, elle doit **sécher à fond avant d'y remettre quoi que ce soit**. Le technicien mesure lors de l'installation la profondeur de l'humidité dans le mur et le sol.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour la villa en rénovation** : 70 litres par jour pour un rez-de-chaussée avec une nouvelle cuisine et une chape fraîche." },
      { key: "ttk650", waarom: "Après une inondation dans une cave de la vallée : **110 litres par jour** retirent l'essentiel de l'humidité avant qu'elle ne pénètre plus profondément dans les murs." },
      { key: "revolution", waarom: "**Si de l'eau s'est infiltrée sous un plancher flottant ou derrière une contre-cloison** : ce déshumidificateur à adsorption souffle de l'air sec dans le vide par des gaines." },
      { key: "ttk170", waarom: "Pour une seule salle de bains ou chambre rénovée à l'étage : compact, avec 50 litres par jour." },
    ],
    levering: {
      kop: "Livrer à Montigny-le-Tilleul : par le ring de Charleroi",
      alinea:
        "Nous roulons **par Bruxelles, l'A54 et le ring de Charleroi**, un peu plus d'une heure. Vous choisissez une **date de livraison** lors de la réservation et nous prenons rendez-vous pour l'heure. S'il s'agit d'une cave après une inondation, indiquez jusqu'où l'eau est montée, pour que le technicien apporte les bons appareils en un seul trajet.",
    },
    afhalen: {
      kop: "Venir chercher est possible, mais c'est loin",
      alinea:
        "Notre point d'enlèvement d'Aartselaar se trouve à **un peu plus d'une heure de route**. Pour un seul appareil compact, le trajet peut en valoir la peine. Pour une cave inondée, la livraison est le meilleur choix : vous ne devez pas quitter la maison et le technicien mesure tout de suite.",
    },
    buren: ["charleroi", "fontaine-l-eveque", "ham-sur-heure-nalinnes"],
    faq: [
      {
        q: "Ma cave près de l'Heure a été inondée. Quand le déshumidificateur peut-il y aller ?",
        a: "Dès que l'eau stagnante est partie et que la cave est nettoyée. Un déshumidificateur agit sur l'humidité qui reste dans le sol et les murs, pas sur l'eau qui stagne encore. Indiquez lors de la réservation jusqu'où l'eau est montée, et le technicien choisira les bons appareils.",
      },
      {
        q: "Quand une nouvelle cuisine avec chape est-elle prête pour le carrelage ?",
        a: "Cela dépend de l'épaisseur de la chape et du type de sol, et c'est le carreleur qui fixe la valeur limite. Avec un déshumidificateur, cela va plus vite que sans. Le technicien mesure à l'enlèvement, pour que vous ayez une valeur à transmettre.",
      },
      {
        q: "Pouvez-vous sécher derrière une contre-cloison sans la démolir ?",
        a: "Souvent, oui. Un déshumidificateur à adsorption souffle de l'air sec par des gaines dans le vide derrière la cloison ou sous un plancher flottant, par quelques petits trous de forage. Le technicien juge après une mesure si cela suffit dans votre cas.",
      },
      {
        q: "Venez-vous aussi à Landelies ?",
        a: "Oui, Landelies est une section de Montigny-le-Tilleul au bord de la Sambre et se trouve dans notre zone de livraison. Mentionnez la section dans l'adresse, et le technicien se rendra directement du bon côté de la vallée.",
      },
    ],
    realisaties: [],
  },
  "pont-a-celles": {
    slug: "pont-a-celles",
    title: "Louer un déshumidificateur à Pont-à-Celles | Vernast",
    description:
      "Déshumidificateur de chantier à louer à Pont-à-Celles, Luttre ou Liberchies : maisons le long du canal Charleroi-Bruxelles et fermes sur le plateau. Mesuré.",
    h1: "Louer un déshumidificateur de chantier à Pont-à-Celles",
    kicker: "Hainaut · le long du canal Charleroi-Bruxelles",
    rit: { afstand: "environ 80 km", tijd: "environ une heure" },
    intro: [
      "Pont-à-Celles se trouve **au bord du canal Charleroi-Bruxelles**, au nord de Charleroi. La commune compte notamment **Luttre, Liberchies, Obaix, Buzet, Rosseignies, Thiméon et Viesville**. À l'époque romaine, Liberchies abritait une agglomération le long de la chaussée de Bavay à Cologne.",
      "À Pont-à-Celles et à Luttre, on trouve des **maisons le long de l'eau et du chemin de fer** ; dans les autres villages dominent **les champs et les fermes**. Notre entrepôt d'Aartselaar se trouve à environ une heure de route.",
    ],
    bouw: {
      kop: "Des maisons près du canal et des fermes sur le plateau",
      alineas: [
        "**Le long du canal et dans les parties basses** se trouvent des maisons plus anciennes avec des caves qui peuvent devenir humides en période pluvieuse. Qui rénove une telle maison sèche souvent **deux choses à la fois** : l'humidité de construction de la nouvelle chape et du plafonnage, et les murs humides de la cave. Le technicien mesure les deux séparément, pour que vous sachiez ce qui disparaît et ce qui reste.",
        "**Sur le plateau**, il s'agit plutôt de constructions neuves et de fermes transformées. Une maison neuve avec chauffage par le sol contient à la réception **beaucoup d'eau** dans la chape et la maçonnerie. Si vous posez le parquet avant que la chape soit sèche, vous risquez que les lames gondolent plus tard.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison près du canal en rénovation** : 70 litres par jour pour la chape, le plafonnage et un mur de cave humide à la fois." },
      { key: "ttk650", waarom: "Pour une construction neuve sur le plateau avec chauffage par le sol : **110 litres par jour**, pour que le parqueteur puisse commencer à temps." },
      { key: "radiaal2250", waarom: "Souffle de l'air sec de façon dirigée sur une nouvelle chape ou le long d'un mur de cave, **là où l'humidité reste le plus longtemps**." },
      { key: "teddh20", waarom: "Pour une cave ou un garage qui reste froid en hiver : **20 kW** amènent la pièce à une température où le déshumidificateur est efficace. Un raccordement en 400 V est nécessaire." },
    ],
    levering: {
      kop: "Livrer à Pont-à-Celles : au bord de l'A54",
      alinea:
        "**L'A54 longe la commune**, si bien que le trajet depuis Aartselaar dure environ une heure. Vous fixez une **date de livraison** lors de la réservation ; nous convenons de l'heure avec vous. Le technicien installe les appareils par zone, pose l'évacuation et note les valeurs de départ.",
    },
    afhalen: {
      kop: "Venir chercher à Aartselaar : une heure de route",
      alinea:
        "Notre point d'enlèvement se trouve à **environ une heure**, par l'A54 et le ring de Bruxelles. Un appareil tient dans une voiture, debout et bien calé. Pour une construction neuve ou une rénovation complète, il vous en faut plusieurs, et la livraison est alors plus simple.",
    },
    buren: ["seneffe", "courcelles", "charleroi", "les-bons-villers"],
    faq: [
      {
        q: "Quand peut-on poser le parquet sur une nouvelle chape avec chauffage par le sol ?",
        a: "Seulement quand la chape passe sous la valeur limite indiquée par le parqueteur, et avec un chauffage par le sol, elle est plus stricte. Un déshumidificateur avec un ventilateur accélère nettement le processus. Le technicien mesure à l'enlèvement, pour que le parqueteur dispose d'un chiffre.",
      },
      {
        q: "Ma maison est tout près du canal. L'humidité dans la cave est-elle normale ?",
        a: "Une cave dans une partie basse peut devenir humide en période pluvieuse, surtout dans une maison ancienne sans barrière contre l'humidité. Un déshumidificateur retire cette humidité de l'air et des murs. Si l'eau entre depuis l'extérieur, une réparation ou une étanchéité est aussi nécessaire.",
      },
      {
        q: "Allez-vous aussi à Luttre, Obaix et Viesville ?",
        a: "Oui, toutes les sections de Pont-à-Celles font partie de notre zone de livraison, y compris Liberchies, Buzet, Rosseignies et Thiméon. Mentionnez la section dans l'adresse, car certains noms de rue existent dans plus d'un village.",
      },
      {
        q: "Combien de temps un déshumidificateur reste-t-il dans une construction neuve ?",
        a: "Cela dépend de l'épaisseur de la chape, de la saison et du fait que la maison soit déjà chauffée ou non. Comptez quelques semaines. Nous convenons d'une date de fin, et la mesure à l'enlèvement montre si l'objectif est atteint.",
      },
    ],
    realisaties: [],
  },
};
