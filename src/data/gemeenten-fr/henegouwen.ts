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
  boussu: {
    slug: "boussu",
    title: "Location de déshumidificateur à Boussu et Hornu | Vernast",
    description:
      "Louer un déshumidificateur à Boussu ou Hornu ? Nous livrons et installons dans les maisons de mineurs et la vallée de la Haine, avec mesure d'humidité.",
    h1: "Location de déshumidificateur de chantier à Boussu",
    kicker: "Hainaut · Borinage, Grand-Hornu et la Haine",
    rit: { afstand: "environ 105 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Boussu se trouve dans **l'ouest du Borinage**, entre Mons et la frontière française. Outre Boussu même, la commune comprend aussi Hornu. C'est là que se dresse **le Grand-Hornu**, un site minier du XIXe siècle inscrit sur la liste du patrimoine mondial de l'UNESCO.",
      "Autour des charbonnages, on a construit **de longues rangées de maisons ouvrières**, et ces rues marquent toujours le visage de la commune. Vers le nord, le terrain descend vers la vallée de la Haine. Depuis notre entrepôt d'Aartselaar, nous sommes chez vous en un peu plus d'une heure.",
    ],
    bouw: {
      kop: "Maisons de mineurs en rangées et caves dans la vallée de la Haine",
      alineas: [
        "Une maison de mineur du XIXe siècle a des murs pleins en briques, sans creux et souvent sans barrière contre l'humidité. Un nouveau plafonnage et une nouvelle chape apportent beaucoup d'eau dans une telle maison, et les murs la rendent lentement. **Lors de l'installation, le technicien mesure l'humidité dans les murs et le sol**, pour que vous sachiez s'il s'agit d'humidité de construction ou d'humidité ascensionnelle.",
        "**Plus bas dans la commune, vers la Haine**, les caves et les rez-de-chaussée sont souvent frais et humides. Après une inondation de la cave, une telle pièce ne sèche pas d'elle-même. Nous y plaçons un déshumidificateur qui fonctionne aussi à basse température, avec un ventilateur au-dessus du sol.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison de mineur entièrement rénovée** : 70 litres par jour pour des pièces jusqu'à 400 m³, assez pour un rez-de-chaussée avec un nouveau plafonnage." },
      { key: "revolution", waarom: "**Pour une cave froide et humide vers la Haine** : ce déshumidificateur à adsorption continue de fonctionner à basse température et sèche par des gaines là où se trouve l'humidité." },
      { key: "radiaal2250", waarom: "Une maison mitoyenne est longue et étroite. Ce ventilateur radial de 2 250 m³/h souffle de façon ciblée sur le sol humide, jusqu'au fond de la maison." },
      { key: "ttk170", waarom: "Pour une seule chambre ou une salle de bain à l'étage : compact, 50 litres par jour et une consommation de 0,75 kW." },
    ],
    levering: {
      kop: "Livrer à Boussu : par l'E19 au-delà de Mons",
      alinea:
        "Nous passons par Bruxelles et **l'E19 en direction de Mons**, et sommes chez vous en un peu plus d'une heure. Vous choisissez une date de livraison lors de la réservation. Nous convenons avec vous de l'heure précise, car en Wallonie nous livrons **sur rendez-vous**. Dans une rue de maisons mitoyennes, une place libre devant la porte nous aide.",
    },
    afhalen: {
      kop: "Venir chercher à Aartselaar : plus de deux heures aller-retour",
      alinea:
        "Notre point d'enlèvement à Aartselaar se trouve à **un peu plus d'une heure de route** de Boussu. Si vous devez de toute façon aller vers Anvers, vous pouvez emporter vous-même un petit appareil. Pour une maison entière ou une cave inondée, mieux vaut la livraison : le technicien détermine alors sur place combien d'appareils il faut.",
    },
    buren: ["saint-ghislain", "quaregnon", "colfontaine", "dour", "hensies"],
    faq: [
      {
        q: "Travaillez-vous aussi à Hornu, près du Grand-Hornu ?",
        a: "Oui. Hornu est une section de Boussu et fait partie de notre zone de livraison. Autour de l'ancien site minier, on trouve beaucoup de maisons mitoyennes aux murs en briques sans barrière contre l'humidité, et nous y faisons particulièrement attention lors de l'installation.",
      },
      {
        q: "Une vieille maison de mineur sèche-t-elle aussi vite qu'une construction neuve ?",
        a: "Généralement pas. Un mur plein en briques de plus de cent ans absorbe beaucoup d'eau lors d'une rénovation et la rend lentement. Une mesure d'humidité au début et à l'enlèvement vous montre si le peintre ou le poseur de sol peut commencer.",
      },
      {
        q: "Un déshumidificateur a-t-il du sens dans une cave toujours humide ?",
        a: "Cela dépend de la cause. L'humidité de construction et l'eau après une fuite, un déshumidificateur de chantier les élimine. Si l'humidité vient en permanence du sol, un déshumidificateur ne garde la cave sèche que tant qu'il tourne. Le technicien vous le dit après la mesure.",
      },
      {
        q: "Quel appareil pour une cave fraîche près de la Haine ?",
        a: "Un appareil qui fonctionne aussi à basse température. Pour une cave froide et humide, nous plaçons un déshumidificateur à adsorption, qui sèche par des gaines là où se trouve l'humidité, avec un ventilateur au-dessus du sol.",
      },
    ],
    realisaties: [],
  },
  colfontaine: {
    slug: "colfontaine",
    title: "Déshumidificateur de chantier à Colfontaine | Vernast",
    description:
      "Location de déshumidificateur à Colfontaine, Pâturages, Wasmes ou Warquignies : pour les maisons ouvrières des collines du Borinage, livré et installé.",
    h1: "Location de déshumidificateur de chantier à Colfontaine",
    kicker: "Hainaut · Pâturages, Wasmes et Warquignies",
    rit: { afstand: "environ 105 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Colfontaine est née de la fusion de **Pâturages, Wasmes et Warquignies** et se trouve au cœur du Borinage, à l'ouest de Mons. La commune est densément bâtie et vallonnée, avec le bois de Colfontaine au sud.",
      "Les charbonnages ont façonné le paysage des rues : **des rangées de maisons ouvrières**, des églises et des écoles de la même époque, et çà et là un terril. À Wasmes, Vincent van Gogh a vécu un temps comme évangéliste parmi les mineurs. Depuis Aartselaar, nous mettons un peu plus d'une heure pour y arriver.",
    ],
    bouw: {
      kop: "Des maisons étroites à flanc de colline, avec une cave à moitié enterrée",
      alineas: [
        "Beaucoup de maisons à Pâturages et Wasmes sont **adossées à une pente**, avec la façade arrière ou la cave en partie dans la terre. Ce côté reçoit de l'humidité de l'extérieur et sèche plus lentement que la façade avant après des travaux. Nous plaçons donc le déshumidificateur du côté humide, avec un ventilateur dirigé vers le mur.",
        "Quand une maison ouvrière est **entièrement mise à nu et replafonnée**, il y a en peu de temps beaucoup d'eau dans un petit volume. Dans une maison étroite, un déshumidificateur compact par étage, portes fermées, fonctionne mieux qu'un seul gros appareil dans le séjour. Le technicien adapte le dispositif à la disposition de votre maison.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**Pour les étages d'une maison ouvrière étroite** : 50 litres par jour pour une consommation de 0,75 kW, et assez compact pour une porte étroite et un escalier raide." },
      { key: "ttk350", waarom: "Pour le rez-de-chaussée après une rénovation complète : 70 litres par jour pour des pièces jusqu'à 400 m³, avec le tuyau d'évacuation vers un avaloir." },
      { key: "ttv4500", waarom: "**Pour le mur côté pente**, qui reste humide le plus longtemps : le ventilateur de 4 500 m³/h garde l'air en mouvement le long de la surface." },
      { key: "teddh20", waarom: "Pour une cave à moitié enterrée qui reste froide en hiver. Ce chauffage de chantier de 20 kW demande un raccordement 400 V (courant triphasé)." },
    ],
    levering: {
      kop: "Livrer à Colfontaine : jusque sur les collines à l'ouest de Mons",
      alinea:
        "Par l'E19 et la sortie de Mons, nous entrons dans le Borinage, un trajet d'un peu plus d'une heure. Vous choisissez une date de livraison lors de la réservation, et nous convenons avec vous de l'heure de livraison. **Votre maison se trouve dans une rue étroite ou en pente ?** Mentionnez-le, le technicien saura où il peut décharger.",
    },
    afhalen: {
      kop: "Venir chercher soi-même : un long trajet pour un appareil",
      alinea:
        "Aartselaar se trouve à **un peu plus d'une heure de route** de Colfontaine. Venir chercher et rapporter, cela fait donc deux fois un aller-retour. Un déshumidificateur doit en outre être transporté debout. S'il vous faut plus d'un appareil, faites-vous livrer.",
    },
    buren: ["boussu", "quaregnon", "frameries", "dour"],
    faq: [
      {
        q: "Livrez-vous à Pâturages, Wasmes et Warquignies ?",
        a: "Oui, les trois sections de Colfontaine font partie de notre zone de livraison. Indiquez lors de la réservation si votre rue est raide ou étroite, pour que le technicien sache où il peut s'arrêter pour décharger.",
      },
      {
        q: "Pourquoi le mur arrière reste-t-il humide plus longtemps que le reste de la maison ?",
        a: "Dans une maison adossée à une pente, le mur arrière ou le mur de la cave est en partie contre la terre. L'humidité de l'extérieur s'y ajoute à l'humidité de construction de la rénovation. Nous y ajoutons un ventilateur et mesurons ce mur à part, pour que vous voyiez comment il sèche.",
      },
      {
        q: "Un grand déshumidificateur vaut-il mieux que deux petits dans une maison étroite ?",
        a: "Dans une maison étroite sur plusieurs étages, généralement pas. L'air sec ne monte pas tout seul l'escalier. Un déshumidificateur compact par étage, portes fermées, fonctionne donc mieux. Pour un rez-de-chaussée ouvert, un seul appareil plus grand suffit parfois.",
      },
      {
        q: "Me faut-il aussi un chauffage dans une cave froide ?",
        a: "Oui, si la cave reste en hiver sous environ 15 °C. Un déshumidificateur à condensation a besoin d'une température supérieure à 15 °C pour bien fonctionner, et des murs froids rendent lentement leur humidité. Un chauffage de chantier met la pièce en température.",
      },
    ],
    realisaties: [],
  },
  dour: {
    slug: "dour",
    title: "Louer un déshumidificateur de chantier à Dour | Vernast",
    description:
      "Déshumidificateur à louer à Dour, Élouges, Wihéries ou Blaugies : pour maisons de mineurs et fermes près de la frontière, livré et installé avec mesure.",
    h1: "Location de déshumidificateur de chantier à Dour",
    kicker: "Hainaut · bassin minier contre la frontière française",
    rit: { afstand: "environ 115 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Dour se trouve dans **le sud-ouest du Borinage**, contre la frontière française. Élouges, Wihéries et Blaugies font aussi partie de la commune. Le nord est un ancien bassin minier densément bâti, le sud est plus rural.",
      "Autour du centre et à Élouges, vous voyez **des rangées de maisons ouvrières et des terrils**. À Blaugies et Wihéries se trouvent plutôt des fermes et des maisons isolées. Depuis Aartselaar, nous sommes à Dour en un peu plus d'une heure, et nous y installons des déshumidificateurs dans de petites maisons mitoyennes comme dans de grandes fermes.",
    ],
    bouw: {
      kop: "D'une maison mitoyenne à Élouges à une ferme à Blaugies",
      alineas: [
        "Dans **les anciennes cités minières**, les maisons sont étroites et ont d'épais murs en briques sans creux. Un nouveau plafonnage et une nouvelle chape les rendent temporairement très humides. Comme les murs latéraux sont contre les voisins, l'humidité ne peut partir que par la façade avant et arrière. Un déshumidificateur par pièce y fonctionne le plus vite.",
        "**Une ferme ou une étable transformée** a de grandes pièces hautes et souvent des murs en maçonnerie mixte. Là, c'est le volume en mètres cubes qui compte, et un seul grand appareil avec un ventilateur est alors plus efficace que trois petits. Communiquez les dimensions de la pièce lors de la réservation, nous composons le pack en conséquence.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une ferme ou une grange transformée** au grand volume ouvert : 110 litres par jour pour des pièces jusqu'à 600 m³." },
      { key: "ttk350", waarom: "Pour une maison mitoyenne rénovée dans les anciennes cités minières : 70 litres par jour, suffisant pour un rez-de-chaussée avec une chape fraîche." },
      { key: "radiaal2250", waarom: "**Pour une nouvelle chape dans une pièce en longueur** : le ventilateur radial souffle bas au-dessus du sol, pour que les coins sèchent aussi de façon homogène." },
      { key: "teddh30", waarom: "Pour une grange ou une étable non chauffée en hiver : 30 kW en 400 V mettent un grand volume en température, pour que le déshumidificateur retire à nouveau l'humidité de l'air." },
    ],
    levering: {
      kop: "Livrer à Dour, tout près de la frontière française",
      alinea:
        "Dour se trouve au-delà de Mons et de Boussu, à un peu plus d'une heure de route de notre entrepôt. Vous choisissez une date de livraison lors de la réservation, et nous convenons de l'heure avec vous à l'avance. **Votre ferme a une allée ou une cour intérieure ?** Dites-nous où la camionnette peut faire demi-tour.",
    },
    afhalen: {
      kop: "Venir chercher depuis Dour : comptez une demi-journée",
      alinea:
        "Le point d'enlèvement à Aartselaar se trouve à **un peu plus d'une heure de route**. Avec l'aller-retour et le chargement, vous perdez une demi-journée, et cela deux fois : à l'enlèvement et au retour. Pour une ferme ou une maison entière, la livraison est donc le meilleur choix.",
    },
    buren: ["boussu", "colfontaine", "quievrain", "honnelles"],
    faq: [
      {
        q: "Comment sécher une grande étable transformée en habitation ?",
        a: "Avec un déshumidificateur calculé sur le volume, un ventilateur au-dessus du sol et, en hiver, un chauffage de chantier. Une pièce haute et ouverte se refroidit vite, et un déshumidificateur à condensation sèche alors lentement. Le calculateur travaille en mètres cubes ; le technicien ajuste sur place.",
      },
      {
        q: "Allez-vous jusqu'à Blaugies et Wihéries, tout près de la frontière ?",
        a: "Oui. Blaugies, Wihéries et Élouges sont des sections de Dour et font partie de notre zone de livraison. Si votre maison se trouve sur un chemin de campagne, joignez une brève description de l'itinéraire à la réservation.",
      },
      {
        q: "Pourquoi une maison mitoyenne entre deux voisins sèche-t-elle si lentement ?",
        a: "Parce que l'humidité ne peut partir que par la façade avant et arrière et l'air intérieur. Les murs latéraux sont contre les voisins et ne rendent rien vers l'extérieur. Un déshumidificateur dans chaque pièce humide, portes fermées, retire l'eau de l'air avant qu'elle ne passe dans les autres pièces.",
      },
      {
        q: "Quand le technicien vient-il reprendre les appareils ?",
        a: "À une date que nous fixons ensemble lors de la réservation. À l'enlèvement, le technicien mesure à nouveau, pour que vous sachiez où en est le séchage. Si le sol ou le mur n'est pas encore assez sec, vous pouvez prolonger la location.",
      },
    ],
    realisaties: [],
  },
  frameries: {
    slug: "frameries",
    title: "Location de déshumidificateur à Frameries | Vernast",
    description:
      "Déshumidificateur à louer à Frameries et La Bouverie : pour rénover les maisons ouvrières du Borinage, avec cave et murs humides. Livré et installé.",
    h1: "Location de déshumidificateur de chantier à Frameries",
    kicker: "Hainaut · le Borinage, au sud-ouest de Mons",
    rit: { afstand: "environ 105 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Frameries se trouve au sud-ouest de Mons, **dans le Borinage**, l'ancien bassin houiller. La commune comprend aussi **La Bouverie, Eugies, Noirchain et Sars-la-Bruyère**. Le passé minier se voit partout : terrils, anciens sites miniers et longues rangées de maisons construites pour les mineurs.",
      "Sur l'ancien site minier du Crachet-Picquery se trouve aujourd'hui le centre de sciences Sparkoh!. Les quartiers ouvriers alentour sont **densément bâtis et de petite taille**, et sont rénovés maison par maison. Depuis Aartselaar, nous y sommes en **un peu plus d'une heure**.",
    ],
    bouw: {
      kop: "Maisons ouvrières dans le Borinage",
      alineas: [
        "**Une maison ouvrière de l'époque des mines** est étroite et a un petit plan, souvent avec une annexe arrière ajoutée plus tard. Les murs en briques sans barrière contre l'humidité étaient alors la règle. Lors d'une rénovation avec un nouveau plafonnage et un nouveau sol, l'humidité de construction s'ajoute donc à **l'humidité présente dans le mur depuis des années**.",
        "Lors de l'installation, le technicien mesure l'humidité des **murs et du sol** et d'où elle vient. Dans une petite maison, un déshumidificateur compact par étage, portes fermées, suffit souvent. Dans l'annexe arrière, où l'air stagne, un ventilateur aide.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**À la mesure d'une petite maison ouvrière** : 50 litres par jour pour des pièces jusqu'à environ 250 m³, compact et avec une consommation de 0,75 kW." },
      { key: "ttk350", waarom: "Pour une rénovation complète du rez-de-chaussée et de l'étage en même temps : 70 litres par jour, jusqu'à environ 400 m³." },
      { key: "ttv4500", waarom: "Pour **l'annexe arrière**, où l'air stagne : il amène l'air sec du déshumidificateur jusque contre le mur humide." },
      { key: "revolution", waarom: "Pour une cave fraîche : un déshumidificateur à adsorption continue d'y évacuer l'humidité là où un appareil à condensation ralentit." },
    ],
    levering: {
      kop: "Livrer à Frameries : en passant par Mons, jusque dans le quartier",
      alinea:
        "Nous roulons un peu plus d'une heure, **par l'E19 et en passant par Mons**. Vous choisissez une date de livraison lors de la réservation, et nous convenons de l'heure avec vous. Dans une rue de maisons mitoyennes, cela aide si vous **gardez une place libre devant la porte**. Le technicien rentre les appareils, pose l'évacuation et mesure avant de partir.",
    },
    afhalen: {
      kop: "Venir chercher, c'est possible pour un petit appareil",
      alinea:
        "Aartselaar se trouve à un peu plus d'une heure de route de Frameries. Pour un seul déshumidificateur compact que vous placez vous-même dans une pièce, l'enlèvement est possible. Transportez l'appareil **debout**, pour que l'eau ne s'écoule pas du réservoir. Pour une maison entière, faites-vous livrer.",
    },
    buren: ["bergen", "quaregnon", "colfontaine", "quevy"],
    faq: [
      {
        q: "Un déshumidificateur tient-il dans une petite maison ouvrière ?",
        a: "Oui. Le déshumidificateur compact prend peu de place et passe par une porte étroite. Pour un escalier raide, mieux vaut être à deux. Dans une petite maison, le technicien place généralement un appareil par étage, pour qu'il reste de la place pour travailler.",
      },
      {
        q: "L'humidité de mon mur vient-elle des travaux ou du sol ?",
        a: "C'est la première question à laquelle le technicien répond. L'humidité de construction est répartie dans le nouveau plafonnage et le sol, et elle diminue. L'humidité ascensionnelle se trouve surtout en bas du mur et reste. La mesure lors de l'installation montre laquelle des deux domine.",
      },
      {
        q: "Combien d'électricité consomme un déshumidificateur dans une petite maison ?",
        a: "Le déshumidificateur à condensation compact a une puissance de 0,75 kW. Ce que vous consommez au final dépend de la durée de fonctionnement et de l'humidité de la pièce. Il fonctionne sur une prise de 230 V, sans raccordement séparé.",
      },
      {
        q: "Que faire de l'eau de condensation ?",
        a: "Le déshumidificateur la recueille dans un réservoir que vous videz. Vous pouvez aussi louer une pompe à condensats qui envoie l'eau vers une évacuation. Si vous ne passez pas tous les jours dans la maison, cette pompe est conseillée, car avec un réservoir plein le déshumidificateur s'arrête.",
      },
    ],
    realisaties: [],
  },
  hensies: {
    slug: "hensies",
    title: "Déshumidificateur de chantier à louer à Hensies | Vernast",
    description:
      "Location de déshumidificateur à Hensies, Thulin, Hainin ou Montrœul-sur-Haine : pour les maisons sur les terres basses de la Haine. Livré et installé.",
    h1: "Location de déshumidificateur de chantier à Hensies",
    kicker: "Hainaut · la vallée de la Haine à la frontière française",
    rit: { afstand: "environ 110 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Hensies se trouve **dans la vallée de la Haine**, tout près de la frontière française. Outre Hensies même, Thulin, Hainin et Montrœul-sur-Haine font partie de la commune.",
      "Le paysage est **bas et plat**, avec des prairies, des fossés et des zones humides le long de la rivière. Dans les villages, d'anciennes maisons ouvrières de l'époque des mines côtoient des maisons isolées sur des parcelles plus grandes. Hensies se trouve à un peu plus d'une heure de route de notre entrepôt d'Aartselaar.",
    ],
    bouw: {
      kop: "Terrain bas, nappe phréatique haute et vieux sols",
      alineas: [
        "Sur **les terres humides le long de la Haine**, la nappe phréatique est proche de la surface. Une vieille maison sans barrière contre l'humidité, ou avec un sol posé directement sur la terre, le ressent dans le mètre inférieur des murs. Lors d'une rénovation, le technicien mesure d'abord s'il s'agit d'humidité de construction ou d'humidité venant du sol.",
        "Si vous posez **un nouveau sol avec isolation et chape**, il y a temporairement beaucoup d'eau dans ce sol. Il doit être sec avant la pose du parquet ou du carrelage. Dans une pièce basse et froide, un chauffage de chantier maintient le déshumidificateur en température, car un appareil à condensation a besoin de plus de 15 °C.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une nouvelle chape au rez-de-chaussée** : 70 litres par jour pour des pièces jusqu'à 400 m³, avec le tuyau d'évacuation vers un avaloir ou un évier." },
      { key: "radiaal2250", waarom: "Souffle de l'air sec de façon ciblée sur le sol. Dans la vallée de la Haine, c'est là que se trouve la plus grande partie de l'humidité, et c'est là qu'elle reste le plus longtemps." },
      { key: "teddh20", waarom: "**Pour une pièce froide sans chauffage** : 20 kW en 400 V amènent la pièce au-dessus de 15 °C, la température dont un déshumidificateur à condensation a besoin." },
      { key: "revolution", waarom: "De l'eau sous un plancher flottant ou derrière une contre-cloison ? Ce déshumidificateur à adsorption souffle de l'air sec dans le vide par des gaines." },
    ],
    levering: {
      kop: "Livrer à Hensies, jusqu'à la frontière française",
      alinea:
        "Nous roulons **par l'E19 au-delà de Mons**, puis plus loin vers l'ouest, un trajet d'un peu plus d'une heure. Lors de la réservation, vous choisissez une date de livraison ; nous convenons avec vous de l'heure de livraison. Si votre maison se trouve en dehors du centre du village, joignez une brève description de l'itinéraire.",
    },
    afhalen: {
      kop: "Venir chercher, c'est possible, mais c'est un long trajet",
      alinea:
        "Depuis Hensies, Aartselaar est à **un peu plus d'une heure** de route. Si vous devez de toute façon aller du côté d'Anvers, vous pouvez emporter vous-même un petit appareil. Pour un sol entier ou plusieurs pièces, la livraison vous épargne deux longs trajets.",
    },
    buren: ["quievrain", "boussu", "saint-ghislain", "bernissart"],
    faq: [
      {
        q: "Un déshumidificateur résout-il l'humidité en bas de mes murs à Thulin ?",
        a: "Seulement s'il s'agit d'humidité de construction ou d'eau de fuite. Si l'humidité vient du sol parce que le mur n'a pas de barrière, elle revient. Lors de l'installation, le technicien mesure à différentes hauteurs, pour que vous sachiez à quel type d'humidité vous avez affaire.",
      },
      {
        q: "Combien de temps une nouvelle chape doit-elle sécher avant le parqueteur ?",
        a: "Cela dépend du type et de l'épaisseur de la chape, et c'est le parqueteur qui détermine quelle humidité résiduelle il accepte. Avec un déshumidificateur et un ventilateur, cela va plus vite que sans. À l'enlèvement, nous mesurons, pour que vous puissiez transmettre une valeur.",
      },
      {
        q: "Un déshumidificateur fonctionne-t-il dans une maison non chauffée en hiver ?",
        a: "Moins bien. Sous environ 15 °C, un déshumidificateur à condensation retire beaucoup moins d'eau de l'air. Dans une maison vide et froide, nous y ajoutons donc un chauffage de chantier électrique. Il demande toutefois un raccordement 400 V.",
      },
      {
        q: "Puis-je moi-même déplacer les appareils dans une autre pièce ?",
        a: "C'est possible, mais gardez-les debout, laissez le tuyau d'évacuation s'écouler librement et fermez les portes de la pièce où ils se trouvent. En cas de doute, appelez-nous : le technicien les a placés exprès près des parties les plus humides.",
      },
    ],
    realisaties: [],
  },
  honnelles: {
    slug: "honnelles",
    title: "Louer un déshumidificateur de chantier à Honnelles | Vernast",
    description:
      "Déshumidificateur à louer à Honnelles, Roisin, Angre ou Onnezies : pour vieilles maisons en pierre et fermes des vallées de l'Honnelle, livré et installé.",
    h1: "Location de déshumidificateur de chantier à Honnelles",
    kicker: "Hainaut · des villages dans les vallées de l'Honnelle",
    rit: { afstand: "environ 120 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Honnelles est **une commune rurale** contre la frontière française, avec des villages comme Roisin, Angre, Onnezies, Montignies-sur-Roc et Fayt-le-Franc. Son nom vient de la Grande et de la Petite Honnelle, deux ruisseaux qui traversent des vallées boisées.",
      "Un peu plus au nord se trouvent les cités minières du Borinage. Honnelles même se compose de **fermes, de centres de village et de maisons isolées**, souvent avec des murs en pierre naturelle ou en vieille brique. Nous y livrons depuis Aartselaar, un trajet d'un peu plus d'une heure.",
    ],
    bouw: {
      kop: "Vieilles fermes et maisons en pierre le long des ruisseaux",
      alineas: [
        "**Un mur de ferme en maçonnerie mixte** absorbe beaucoup d'eau lors d'une rénovation et la rend de façon inégale. La pierre naturelle, la brique et le joint à la chaux sèchent chacun à leur rythme. Nous y travaillons avec un déshumidificateur par pièce et un ventilateur dirigé vers le mur, et nous vous disons à l'avance que cela prend plus de temps qu'avec une paroi moderne.",
        "**Au fond de la vallée, près des ruisseaux**, les caves et les rez-de-chaussée sont plus bas et plus frais. Une cave qui reste fraîche toute l'année sèche lentement avec un déshumidificateur à condensation. Un déshumidificateur à adsorption, ou un chauffage de chantier en plus, maintient le séchage à basse température.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une grande ferme ou une grange transformée** : 110 litres par jour pour des pièces hautes et ouvertes jusqu'à 600 m³." },
      { key: "ttv4500", waarom: "Pour un épais mur en pierre qui sèche lentement : le ventilateur garde l'air en mouvement le long du mur, pour qu'il sèche de façon plus homogène." },
      { key: "revolution", waarom: "**Pour une cave fraîche au fond de la vallée** : un déshumidificateur à adsorption continue de fonctionner à basse température, là où un appareil à condensation rend beaucoup moins." },
      { key: "ttk350", waarom: "Pour une maison de village après une rénovation : 70 litres par jour, assez pour un rez-de-chaussée avec un nouveau plafonnage ou une nouvelle chape." },
    ],
    levering: {
      kop: "Livrer à Honnelles : jusque dans les plus petits villages",
      alinea:
        "Après l'E19 jusqu'au-delà de Mons, nous continuons **par des routes de campagne vers le sud**, soit au total un peu plus d'une heure de route. Vous choisissez une date de livraison lors de la réservation, et nous fixons ensemble l'heure de livraison. Si votre ferme se trouve sur un chemin étroit ou derrière une cour intérieure, indiquez où la camionnette peut s'arrêter.",
    },
    afhalen: {
      kop: "Venir chercher depuis Honnelles : plus d'une heure par trajet",
      alinea:
        "Aartselaar se trouve à **un peu plus d'une heure de route**, et ce trajet, vous le faites aller et retour, à l'enlèvement comme au retour. Pour une ferme avec plusieurs pièces, la livraison avec installation est le choix le plus simple.",
    },
    buren: ["quievrain", "dour", "quevy", "colfontaine"],
    faq: [
      {
        q: "Pourquoi un mur de ferme en pierre sèche-t-il de façon si inégale ?",
        a: "Parce que la pierre naturelle, la vieille brique et le mortier de chaux absorbent et rendent chacun l'humidité différemment. Les joints restent souvent humides plus longtemps que les pierres. Un ventilateur dirigé vers le mur et une mesure à plusieurs endroits montrent où en est le séchage.",
      },
      {
        q: "Livrez-vous dans tous les villages de Honnelles, aussi à Fayt-le-Franc et Montignies-sur-Roc ?",
        a: "Oui, tous les villages de la commune font partie de notre zone de livraison. Si votre adresse se trouve en dehors du centre ou sur un chemin de campagne, joignez une brève description lors de la réservation, pour que le technicien trouve directement le bon accès.",
      },
      {
        q: "Puis-je utiliser un déshumidificateur sur un mur enduit à la chaux ?",
        a: "Oui, mais avec mesure. Un enduit à la chaux a besoin de temps pour durcir et ne doit pas sécher trop vite. Nous adaptons le dispositif en conséquence et conseillons de ne pas trop chauffer la pièce. Mentionnez lors de la réservation qu'il s'agit de chaux.",
      },
      {
        q: "Un déshumidificateur fonctionne-t-il aussi dans une ferme sans chauffage ?",
        a: "Oui, mais plus lentement en hiver. Un déshumidificateur à condensation a besoin d'une température supérieure à 15 °C pour bien fonctionner. Dans une ferme froide, nous y ajoutons un chauffage de chantier, ou nous choisissons un déshumidificateur à adsorption.",
      },
    ],
    realisaties: [],
  },
  jurbeke: {
    slug: "jurbeke",
    title: "Louer un déshumidificateur de chantier à Jurbise | Vernast",
    description:
      "Déshumidificateur à louer à Jurbise : constructions neuves des lotissements et fermes rénovées à Herchies et Masnuy, juste au nord de Mons. Livré et installé.",
    h1: "Location de déshumidificateur de chantier à Jurbise",
    kicker: "Hainaut · juste au nord de Mons",
    rit: { afstand: "environ 90 km", tijd: "environ une heure" },
    intro: [
      "**Jurbise** se trouve juste au nord de Mons, le long de l'E19. Outre Jurbise même, **Erbaut, Erbisœul, Herchies, Masnuy-Saint-Jean et Masnuy-Saint-Pierre** font partie de la commune : des villages au milieu des champs, avec une gare sur la ligne de chemin de fer entre Bruxelles et Mons.",
      "Beaucoup d'habitants travaillent à Mons ou à Bruxelles. On y construit et rénove donc beaucoup, des nouveaux lotissements en bordure de village aux **vieilles fermes** transformées en habitation. Depuis Aartselaar, nous y sommes en **environ une heure**.",
    ],
    bouw: {
      kop: "Construction neuve dans le lotissement, rénovation dans la ferme",
      alineas: [
        "Dans une **construction neuve**, l'humidité se trouve surtout dans la chape et le plafonnage. Si vous voulez poser les sols ou peindre avant la date du déménagement, cette eau doit d'abord partir. Les déshumidificateurs travaillent **fenêtres et portes extérieures fermées**. Au départ, le technicien mesure la chape, pour que vous sachiez où vous en êtes face au poseur de sol.",
        "Une **ferme à Herchies ou à Masnuy** demande une autre approche. Les murs sont épais et ont rarement une barrière contre l'humidité, une étable devient séjour et parfois un nouveau sol est posé sur terre-plein. **L'humidité de ces murs est plus ancienne que les travaux.** La mesure lors de l'installation montre si un déshumidificateur suffit ou si le mur demande d'abord une intervention.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une construction neuve avec une chape fraîche** : 70 litres par jour, pour des pièces jusqu'à environ 400 m³, avec un tuyau d'évacuation vers un avaloir ou la douche." },
      { key: "radiaal2250", waarom: "Souffle 2 250 m³ d'air par heure au ras d'**une nouvelle chape**, pour que le sol sèche de façon plus homogène, et pas seulement en surface." },
      { key: "ttk650", waarom: "Pour l'étable ou la grange transformée d'une ferme : un grand volume ouvert demande un déshumidificateur de 110 litres par jour." },
      { key: "teddh30", waarom: "Pour un chantier d'hiver dans une ferme sans chauffage. Sous 15 °C, un déshumidificateur à condensation perd en rendement ; ce chauffage de 30 kW sur courant triphasé (400 V) réchauffe la pièce." },
    ],
    levering: {
      kop: "Livrer à Jurbise : tout près de l'autoroute",
      alinea:
        "Le trajet dure environ une heure, presque entièrement **par l'E19**. Vous choisissez une date de livraison lors de la réservation et nous convenons de l'heure avec vous, comme partout en Wallonie. Votre parcelle dans un nouveau lotissement n'a pas encore de numéro ? Joignez **une description ou un repère de localisation**.",
    },
    afhalen: {
      kop: "Venir chercher : une heure, presque tout en autoroute",
      alinea:
        "Comme Jurbise se trouve tout près de l'E19, le trajet vers Aartselaar est simple : environ une heure, presque tout en autoroute. Si vous placez vous-même un seul déshumidificateur dans une construction neuve, l'enlèvement est possible. Pour une ferme ou une maison entière, **mieux vaut la livraison et l'installation**.",
    },
    buren: ["bergen", "lens", "zinnik", "brugelette"],
    faq: [
      {
        q: "Quand le poseur de sol peut-il commencer après une nouvelle chape ?",
        a: "Cela dépend de l'humidité résiduelle qu'accepte le poseur ou le fournisseur du revêtement, pas d'un nombre fixe de semaines. Nous mesurons la chape lors de l'installation. Vous avez ainsi un chiffre à discuter avec le poseur.",
      },
      {
        q: "Peut-on ouvrir les fenêtres pendant que le déshumidificateur tourne ?",
        a: "Mieux vaut pas. Un déshumidificateur à condensation retire l'humidité de l'air de la pièce. Si les fenêtres sont ouvertes, il sèche surtout l'air extérieur. Aérer brièvement de temps en temps est permis, mais gardez sinon fenêtres et portes extérieures fermées tant que l'appareil fonctionne.",
      },
      {
        q: "Nous transformons une vieille étable en habitation. Par où commencer ?",
        a: "Par une mesure d'humidité. Dans une vieille étable, l'humidité vient souvent du sol et du pied de mur, en plus de l'humidité de construction du nouveau plafonnage et du nouveau sol. Lors de l'installation, le technicien vous dit quelle partie un déshumidificateur peut traiter et laquelle demande une autre approche.",
      },
      {
        q: "Pouvez-vous livrer sur un chantier sans numéro de maison ?",
        a: "Oui. Indiquez lors de la réservation la rue, le numéro de lot ou un repère de localisation, et le numéro de téléphone de quelqu'un sur le chantier. Le technicien n'a alors pas à chercher et peut directement installer et mesurer.",
      },
    ],
    realisaties: [],
  },
  lens: {
    slug: "lens",
    title: "Déshumidificateur de chantier à louer à Lens | Vernast",
    description:
      "Location de déshumidificateur à Lens (Hainaut) : fermes et maisons de village à Cambron-Saint-Vincent, Lombise et Bauffe, entre Ath et Mons. Livré et installé.",
    h1: "Location de déshumidificateur de chantier à Lens",
    kicker: "Hainaut · à la campagne, entre Ath et Mons",
    rit: { afstand: "environ 95 km", tijd: "environ une heure" },
    intro: [
      "Lens se trouve **entre Ath et Mons**, dans une région agricole ouverte et vallonnée. La commune se compose de **Lens, Bauffe, Cambron-Saint-Vincent, Lombise et Montignies-lez-Lens**, cinq petits villages avec des fermes, des maisons de village le long de la route principale et çà et là une maison neuve.",
      "Qui rénove ici travaille souvent sur une ferme ou une maison de village d'un siècle ou plus. Depuis notre entrepôt d'Aartselaar, nous mettons **environ une heure** pour rejoindre Lens.",
    ],
    bouw: {
      kop: "Fermes et maisons de village dans une région agricole",
      alineas: [
        "**Une ferme à Lens** a souvent un corps de logis aux épais murs en briques et des dépendances qui deviennent aujourd'hui habitation ou cabinet. Lors d'une telle transformation, on pose **un nouveau sol sur terre-plein** et un nouveau plafonnage sur de vieux murs. Vous avez alors affaire à deux sortes d'humidité : l'eau des travaux et l'humidité qui se trouvait déjà dans le mur.",
        "Une **maison de village à rue** est plus petite et plus simple à sécher. Un déshumidificateur par étage y suffit souvent. Si vous rénovez en hiver, dans une maison sans chauffage, **nous ajoutons un chauffage au déshumidificateur**. Dans une pièce froide, un déshumidificateur à condensation n'atteint qu'une partie de ce qu'il peut faire.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une grange ou une étable transformée** : beaucoup de volume sous un toit haut demande 110 litres par jour, pour des pièces jusqu'à environ 600 m³." },
      { key: "ttk350", waarom: "**Pour une maison de village en rénovation** : 70 litres par jour, jusqu'à environ 400 m³, avec l'évacuation vers un avaloir." },
      { key: "teddh30", waarom: "Pour une transformation en hiver, dans une ferme sans chauffage en service : ce chauffage de 30 kW en 400 V amène la pièce à une température où un déshumidificateur fonctionne bien." },
      { key: "radiaal2250", waarom: "Au-dessus d'**un nouveau sol sur terre-plein** dans une dépendance transformée : il souffle de façon ciblée le long de la chape." },
    ],
    levering: {
      kop: "Livrer à Lens : par l'E19 et Jurbise",
      alinea:
        "Nous roulons environ une heure, **par l'E19 et Jurbise**. Vous choisissez une date de livraison lors de la réservation, et nous fixons l'heure par téléphone. Une ferme sur un chemin de campagne étroit ne pose pas de problème, mais **décrivez l'accès à l'avance**, pour que le technicien sache où il peut charger et décharger.",
    },
    afhalen: {
      kop: "Venir chercher : une heure, surtout par l'autoroute",
      alinea:
        "Aartselaar se trouve à environ une heure de route de Lens, la plus grande partie par l'autoroute. L'enlèvement est donc possible pour un seul appareil que vous placez vous-même. Pour une ferme aux murs épais, **faites-nous livrer et mesurer**.",
    },
    buren: ["jurbeke", "brugelette", "zinnik"],
    faq: [
      {
        q: "Cette page concerne-t-elle Lens dans le Hainaut ou Lens en France ?",
        a: "La commune belge de Lens entre Ath et Mons, avec Bauffe, Cambron-Saint-Vincent, Lombise et Montignies-lez-Lens. Si vous avez un chantier en France, contactez-nous avant de réserver.",
      },
      {
        q: "Nous transformons une étable en habitation. Combien de temps le nouveau sol doit-il sécher ?",
        a: "Cela dépend de l'épaisseur de la chape, de la saison et de la ventilation. Avec des déshumidificateurs et un ventilateur, cela va nettement plus vite que sans. Le technicien mesure le sol au départ, pour que vous puissiez convenir avec le poseur de sol du moment où il peut commencer.",
      },
      {
        q: "Est-il utile de placer un déshumidificateur dans une ferme froide ?",
        a: "Seulement avec de la chaleur en plus. Un déshumidificateur à condensation a besoin d'une pièce au-dessus de 15 °C pour bien fonctionner. Dans une ferme non chauffée, nous plaçons en hiver un chauffage électrique à côté, et le déshumidificateur retire alors bien l'humidité de l'air.",
      },
      {
        q: "Puis-je louer un seul déshumidificateur pour une pièce dans une maison de village ?",
        a: "Oui. Pour une chambre ou une salle de bain, un déshumidificateur compact suffit. Vous pouvez le faire livrer ou venir le chercher vous-même à Aartselaar. En cas de doute sur la taille, remplissez le calculateur sur le site ou indiquez les dimensions lors de la réservation.",
      },
    ],
    realisaties: [],
  },
  quaregnon: {
    slug: "quaregnon",
    title: "Location de déshumidificateur à Quaregnon | Vernast",
    description:
      "Louer un déshumidificateur à Quaregnon et Wasmuël : pour rénover les maisons mitoyennes de l'époque minière du Borinage, avec mesure d'humidité sur place.",
    h1: "Location de déshumidificateur de chantier à Quaregnon",
    kicker: "Hainaut · le Borinage, au bord de la Haine",
    rit: { afstand: "environ 105 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Quaregnon se trouve avec Wasmuël au cœur du **Borinage**, entre Mons et Saint-Ghislain. La commune a grandi avec les charbonnages. Dans l'histoire de Belgique, elle est connue pour **la Charte de Quaregnon** de 1894, le programme du Parti ouvrier belge.",
      "Quaregnon est **densément bâtie** : rue après rue de maisons mitoyennes, de petits commerces et çà et là une maison bourgeoise. Beaucoup de ces maisons sont anciennes et sont aujourd'hui rénovées. Depuis Aartselaar, nous mettons **un peu plus d'une heure** pour y arriver.",
    ],
    bouw: {
      kop: "Maisons mitoyennes dans la vallée de la Haine",
      alineas: [
        "Le nord de Quaregnon descend vers **la vallée de la Haine**. Si une vieille maison y a une cave ou un rez-de-chaussée humide, la question est de savoir d'où vient cette humidité. **Le technicien mesure si elle diminue après les travaux** ou si elle continue d'entrer de l'extérieur.",
        "Quand une **maison mitoyenne est entièrement mise à nu**, avec de nouvelles conduites, un nouveau plafonnage et une nouvelle chape, beaucoup d'eau se libère d'un coup. Nous travaillons alors **par zone de séchage** : un déshumidificateur par étage, portes fermées, et un ventilateur au-dessus du nouveau sol. L'équipe suivante peut ainsi continuer plus vite.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison mitoyenne entièrement rénovée** : 70 litres par jour, jusqu'à environ 400 m³, avec un tuyau d'évacuation vers un avaloir." },
      { key: "radiaal2250", waarom: "Pour **une nouvelle chape** dans le plan long et étroit d'une maison mitoyenne : il souffle de façon ciblée, au ras du sol." },
      { key: "revolution", waarom: "Pour une cave froide, où un déshumidificateur à condensation ralentit : l'appareil à adsorption continue d'y retirer l'humidité de l'air." },
      { key: "ttk170", waarom: "Pour une chambre, une salle de bain ou l'étage d'une maison étroite : 50 litres par jour, compact, jusqu'à environ 250 m³." },
    ],
    levering: {
      kop: "Livrer à Quaregnon : même dans une rue animée",
      alinea:
        "Nous roulons un peu plus d'une heure, **par l'E19 jusqu'à Mons**. Vous choisissez une date de livraison lors de la réservation, et comme en Wallonie nous livrons sur rendez-vous, nous fixons l'heure ensemble. Dans une rue animée de maisons mitoyennes, la camionnette s'arrête brièvement devant la porte, donc **gardez une place libre** si possible. Le technicien place les appareils, pose l'évacuation et mesure l'humidité des murs et du sol.",
    },
    afhalen: {
      kop: "Venir chercher : deux allers-retours",
      alinea:
        "Aartselaar se trouve à un peu plus d'une heure de route de Quaregnon. Qui vient chercher fait cette distance quatre fois : aller-retour pour prendre l'appareil, et encore une fois pour le rapporter. Pour un seul petit déshumidificateur, c'est faisable, mais **pour une maison mitoyenne entière, nous livrons**, avec la mesure qui détermine combien d'appareils il faut.",
    },
    buren: ["bergen", "saint-ghislain", "frameries", "colfontaine"],
    faq: [
      {
        q: "Ma maison mitoyenne est entièrement mise à nu. Combien de déshumidificateurs me faut-il ?",
        a: "Généralement un par étage, portes fermées, et un ventilateur là où se trouve une nouvelle chape. Dans une petite maison, un seul déshumidificateur plus grand au rez-de-chaussée suffit parfois. Le technicien calcule le volume lors de l'installation et adapte le nombre d'appareils en conséquence.",
      },
      {
        q: "Pourquoi ma cave reste-t-elle humide après les travaux ?",
        a: "Parce que cette humidité ne vient peut-être pas des travaux. Un vieux mur sans barrière contre l'humidité peut absorber l'eau du sol. Un déshumidificateur garde l'air sec, mais n'arrête pas cette eau. Une mesure montre si l'humidité diminue ou reste.",
      },
      {
        q: "Le déshumidificateur peut-il continuer à tourner quand personne n'est à la maison ?",
        a: "Oui, il est fait pour cela. Quand le réservoir est plein, il s'arrête de lui-même. Si vous voulez qu'il travaille jour et nuit sans que personne ne passe, louez une pompe à condensats qui envoie l'eau vers une évacuation.",
      },
      {
        q: "Puis-je prolonger la location si la chape sèche plus lentement ?",
        a: "Oui. Signalez-le avant la fin de la période de location, les appareils restent alors en place et la location continue. Faites d'abord mesurer à nouveau la chape, vous saurez ainsi si une semaine de plus est nécessaire.",
      },
    ],
    realisaties: [],
  },
  quievrain: {
    slug: "quievrain",
    title: "Location de déshumidificateur à Quiévrain | Vernast",
    description:
      "Location de déshumidificateur à Quiévrain, Baisieux ou Audregnies : maisons et commerces du centre, fermes à l'extérieur. Livré et installé chez vous.",
    h1: "Location de déshumidificateur de chantier à Quiévrain",
    kicker: "Hainaut · petite ville frontalière sur la route de Valenciennes",
    rit: { afstand: "environ 115 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Quiévrain est **une commune frontalière** dans l'ouest du Hainaut, avec Baisieux et Audregnies comme sections. De l'autre côté de la frontière se trouve Quiévrechain, en France ; les deux agglomérations se rejoignent presque.",
      "Le centre est **une petite ville de maisons mitoyennes et de commerces**. Vers Baisieux et Audregnies, cela devient rural, avec des fermes et des maisons dispersées. De notre entrepôt d'Aartselaar jusqu'à Quiévrain, il y a un peu plus d'une heure de route.",
    ],
    bouw: {
      kop: "Maisons avec commerce au rez-de-chaussée et fermes en périphérie",
      alineas: [
        "Dans le centre, beaucoup de **bâtiments ont un commerce au rez-de-chaussée** et un logement au-dessus. Lors d'une transformation, on traite souvent un étage à la fois, pendant que le reste reste en usage. Un déshumidificateur compact à l'étage où l'on travaille, porte fermée, évite que l'humidité ne se répande dans tout le bâtiment.",
        "**En dehors du centre, à Baisieux et Audregnies**, il s'agit plutôt de vieilles fermes et de maisons isolées. Les pièces y sont plus grandes et les murs plus épais, et un grand appareil avec un ventilateur s'y justifie. Qui transforme une étable ou une grange en habitation doit compter sur une période de séchage plus longue.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**Pour le logement au-dessus d'un commerce** : compact, 50 litres par jour et 0,75 kW, pour que le magasin en bas puisse rester ouvert." },
      { key: "ttk350", waarom: "Pour un rez-de-chaussée entièrement rénové : 70 litres par jour pour des pièces jusqu'à 400 m³." },
      { key: "ttk650", waarom: "**Pour une ferme à Baisieux ou Audregnies** aux grandes pièces hautes : 110 litres par jour pour des volumes jusqu'à 600 m³." },
      { key: "ttv4500", waarom: "Dans une maison mitoyenne profonde, ce ventilateur de 4 500 m³/h pousse l'air de l'avant vers l'arrière, où il resterait sinon immobile." },
    ],
    levering: {
      kop: "Livrer à Quiévrain : jusque juste avant la frontière française",
      alinea:
        "Nous roulons **par l'E19 en passant par Mons** puis plus loin vers l'ouest jusqu'à la frontière, en tout un peu plus d'une heure. Lors de la réservation, vous choisissez une date de livraison, et nous fixons l'heure ensemble. Pour un commerce dans le centre, nous cherchons un moment où nous pouvons charger devant la porte.",
    },
    afhalen: {
      kop: "Venir chercher à Aartselaar : pesez le trajet",
      alinea:
        "De Quiévrain à notre point d'enlèvement, il y a **un peu plus d'une heure de route**. Pour un déshumidificateur dans le coffre, c'est faisable, si vous combinez le trajet avec autre chose. Pour une ferme ou une transformation complète, mieux vaut faire livrer, installer et reprendre les appareils.",
    },
    buren: ["hensies", "boussu", "dour", "honnelles"],
    faq: [
      {
        q: "Puis-je faire tourner un déshumidificateur à l'étage pendant que le magasin est ouvert en bas ?",
        a: "Oui. Un déshumidificateur compact fonctionne sur une prise standard et se place à l'étage où l'on travaille. Gardez la porte de cette pièce fermée, l'humidité reste alors en haut et le magasin n'en remarque presque rien.",
      },
      {
        q: "Livrez-vous aussi à Baisieux et Audregnies ?",
        a: "Oui, les deux sections de Quiévrain font partie de notre zone de livraison. Pour une ferme en dehors du centre, indiquez où la camionnette peut s'arrêter ou faire demi-tour, le déchargement se passera alors sans encombre.",
      },
      {
        q: "Livrez-vous aussi du côté français, à Quiévrechain ?",
        a: "Nous livrons en Belgique et dans le sud des Pays-Bas. Pour un chantier juste de l'autre côté de la frontière, en France, contactez-nous à l'avance, nous verrons ensemble si une livraison est possible.",
      },
      {
        q: "Combien d'appareils me faut-il pour une grange transformée ?",
        a: "Cela dépend du volume et du matériau. Une grange haute et ouverte demande généralement un grand appareil et un ventilateur, complétés en hiver par un chauffage de chantier. Calculez le volume avec le calculateur ; le technicien adapte le dispositif sur place.",
      },
    ],
    realisaties: [],
  },
  quevy: {
    slug: "quevy",
    title: "Louer un déshumidificateur de chantier à Quévy | Vernast",
    description:
      "Déshumidificateur à louer à Quévy : fermes et maisons de village à Givry, Blaregnies et Quévy-le-Grand, au sud de Mons près de la France. Livré et installé.",
    h1: "Location de déshumidificateur de chantier à Quévy",
    kicker: "Hainaut · à la campagne, contre la frontière française",
    rit: { afstand: "environ 115 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Quévy se trouve **au sud de Mons, contre la frontière française**. La commune compte dix villages, dont **Givry, Blaregnies, Genly, Havay, Quévy-le-Grand et Quévy-le-Petit**. Entre eux s'étendent des champs et des prairies, et l'autoroute vers Paris les traverse.",
      "Il n'y a pas de centre principal. La plupart des gens habitent **une ferme, une vieille maison de village en pierre naturelle ou en briques** ou une maison plus récente en bordure de village. Depuis Aartselaar, nous mettons **un peu plus d'une heure** pour rejoindre Quévy.",
    ],
    bouw: {
      kop: "Fermes et maisons de village dans la campagne hennuyère",
      alineas: [
        "**Une ferme à Quévy** a des murs épais, souvent sans barrière contre l'humidité, et une partie habitable agrandie au fil des ans dans l'étable ou la grange. Lors d'une rénovation, l'ancien et le neuf se rencontrent : un nouveau sol humide à cause de la chape, à côté d'un vieux mur qui absorbe l'humidité du sol. **Le technicien mesure les deux** et vous dit ce qu'un déshumidificateur peut résoudre.",
        "À la campagne, on rénove souvent **en hiver, dans une maison sans chauffage**. Il fait alors trop froid pour un déshumidificateur à condensation. Si vous y ajoutez un chauffage, la température monte et la pièce sèche bien. Pour une grande grange ouverte, nous choisissons un déshumidificateur de plus grande capacité.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une ferme ou une grange au grand volume ouvert** : 110 litres par jour, pour des pièces jusqu'à environ 600 m³." },
      { key: "teddh30", waarom: "**Pour un chantier d'hiver dans une maison de village non chauffée** : 30 kW sur courant triphasé (400 V). Sans chaleur, le rendement d'un déshumidificateur à condensation chute." },
      { key: "ttk350", waarom: "Pour une maison de taille moyenne ou une construction neuve en bordure de village : 70 litres par jour, jusqu'à environ 400 m³." },
      { key: "ttv4500", waarom: "Le long d'un épais mur en pierre et en briques, il renouvelle l'air en surface, pour que ce mur sèche de façon plus homogène." },
    ],
    levering: {
      kop: "Livrer à Quévy : au-delà de Mons, jusque dans la cour",
      alinea:
        "Nous roulons un peu plus d'une heure, **par l'E19 jusqu'au-delà de Mons**. Vous choisissez une date de livraison lors de la réservation ; comme en Wallonie nous livrons sur rendez-vous, nous vous appelons pour fixer l'heure. Si la ferme se trouve sur un chemin de campagne étroit ou derrière un portail, **décrivez l'accès**. Le technicien saura ainsi s'il peut rouler jusque dans la cour.",
    },
    afhalen: {
      kop: "Venir chercher : deux fois plus d'une heure aller-retour",
      alinea:
        "Aartselaar se trouve à un peu plus d'une heure de route de Quévy. Venir chercher et rapporter vous coûte donc deux fois un aller-retour, et cela en vaut rarement la peine. Pour une ferme ou une transformation, **nous livrons**, et le technicien détermine sur place combien d'appareils il faut.",
    },
    buren: ["bergen", "frameries", "estinnes", "honnelles"],
    faq: [
      {
        q: "Un déshumidificateur fonctionne-t-il dans une ferme non chauffée en hiver ?",
        a: "Moins bien. Sous 15 °C, un déshumidificateur à condensation perd une grande partie de son rendement. Avec un chauffage électrique en plus, la pièce monte en température, et le déshumidificateur retire à nouveau assez d'humidité de l'air.",
      },
      {
        q: "Une ferme à la campagne a-t-elle assez de courant pour plusieurs déshumidificateurs ?",
        a: "Généralement oui, mais cela dépend de l'installation. Un déshumidificateur demande de 0,75 à 1,4 kW, un chauffage de chantier de 20 ou 30 kW a besoin de courant triphasé en 400 V. Répartissez les déshumidificateurs sur différents circuits et signalez lors de la réservation si vous travaillez sur un coffret de chantier.",
      },
      {
        q: "Pouvez-vous rouler jusque dans la cour ?",
        a: "Généralement oui, avec une camionnette. Si la ferme se trouve sur un chemin non revêtu ou derrière un portail bas, signalez-le lors de la réservation. Le technicien amène alors les appareils sur le dernier bout avec un diable jusqu'à leur place.",
      },
      {
        q: "Combien de temps un vieux mur doit-il sécher après une rénovation ?",
        a: "Il n'y a pas de délai fixe. Un épais mur en pierre et en briques rend son humidité lentement et de façon inégale, donc mesurez entre-temps plutôt que d'estimer. Si le mur aspire l'humidité du sol, il ne sèche pas complètement sans intervention au pied du mur.",
      },
    ],
    realisaties: [],
  },
  "saint-ghislain": {
    slug: "saint-ghislain",
    title: "Déshumidificateur de chantier à Saint-Ghislain | Vernast",
    description:
      "Location de déshumidificateur à Saint-Ghislain, Baudour et Tertre : rénovations et dégâts des eaux dans la vallée de la Haine et le long du canal. Livré.",
    h1: "Location de déshumidificateur de chantier à Saint-Ghislain",
    kicker: "Hainaut · la vallée de la Haine et le canal",
    rit: { afstand: "environ 110 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Saint-Ghislain se trouve **dans la vallée de la Haine**, à l'ouest de Mons. La rivière et le canal Nimy-Blaton-Péronnes traversent la commune, et la gare se trouve sur la ligne de chemin de fer vers Tournai. La commune comprend notamment **Baudour, Hautrage, Tertre, Sirault, Villerot et Neufmaison**.",
      "Le sud fait partie du Borinage, avec des quartiers résidentiels de l'époque des mines. Le nord, autour de Baudour et Sirault, est plus vert et plus boisé. Entre les deux s'étend la vallée plate, avec de l'industrie le long du canal. Depuis Aartselaar, le trajet dure **un peu plus d'une heure**.",
    ],
    bouw: {
      kop: "Une vallée plate et des caves humides",
      alineas: [
        "Une maison dans la vallée a parfois **une cave humide ou un sol froid et humide**. Après une rénovation, vous voulez savoir quelle humidité vient des travaux et laquelle continue d'entrer de l'extérieur. **Le technicien le mesure lors de l'installation**, pour que vous sachiez si le séchage suffit.",
        "Après **des dégâts des eaux** ou une cave inondée, c'est un autre travail. D'abord, l'eau stagnante doit partir, ensuite nous séchons. Sous **un plancher flottant ou derrière une contre-cloison**, un déshumidificateur à adsorption souffle de l'air sec dans le vide par des gaines. Il ne faut ainsi pas tout démolir.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**Après de l'eau dans une cave ou sous un sol** : le déshumidificateur à adsorption souffle dans le vide par des gaines et continue de fonctionner dans une pièce froide." },
      { key: "ttk350", waarom: "**Pour une maison en rénovation** à Saint-Ghislain ou Tertre : 70 litres par jour, jusqu'à environ 400 m³." },
      { key: "radiaal2250", waarom: "Au-dessus d'un sol mouillé après des dégâts des eaux ou d'une nouvelle chape : ce ventilateur radial souffle bas et de façon ciblée le long de la surface." },
      { key: "ttk650", waarom: "Pour une grande maison dans la verdure autour de Baudour ou une pièce ouverte au grand volume : 110 litres par jour, jusqu'à environ 600 m³." },
    ],
    levering: {
      kop: "Livrer à Saint-Ghislain : au-delà de Mons, vers Tournai",
      alinea:
        "Le trajet dure un peu plus d'une heure, **par l'E19 jusqu'au-delà de Mons** en direction de Tournai. Vous choisissez une date de livraison lors de la réservation ; nous convenons de l'heure, car en Wallonie nous livrons sur rendez-vous. Après des dégâts des eaux, indiquez **la taille de la zone humide**, le technicien emporte alors les bons appareils et les bonnes gaines.",
    },
    afhalen: {
      kop: "Venir chercher : un peu plus d'une heure de route par trajet",
      alinea:
        "Aartselaar se trouve à un peu plus d'une heure de route de Saint-Ghislain. Après des dégâts des eaux, nous déconseillons l'enlèvement : il faut mesurer, et le dispositif dépend de **l'endroit où se trouve l'eau**. Pour un seul petit déshumidificateur dans une pièce ordinaire, c'est possible.",
    },
    buren: ["bergen", "quaregnon", "boussu", "hensies", "beloeil"],
    faq: [
      {
        q: "Notre cave a été inondée. Un déshumidificateur peut-il régler cela ?",
        a: "Un déshumidificateur retire l'humidité qui reste dans les murs et le sol après le pompage. L'eau qui continue d'entrer, il ne l'arrête pas. Lors de l'installation, le technicien mesure l'humidité des murs et vous dit si la cave peut sécher ou demande d'abord une intervention.",
      },
      {
        q: "Notre plancher flottant doit-il être enlevé après des dégâts des eaux ?",
        a: "Pas toujours. Avec un déshumidificateur à adsorption et des gaines, nous soufflons de l'air sec dans le vide sous le sol. Si cela suffit dépend de la durée pendant laquelle l'eau y est restée et du matériau. Après la mesure, vous savez si le sol peut rester en place.",
      },
      {
        q: "Comment savoir quand les murs sont secs ?",
        a: "En mesurant, pas en touchant. Un mur qui semble sec en surface peut encore être humide plus en profondeur. Nous mesurons au départ, pour que vous ayez un point de référence. Votre peintre ou votre assureur détermine quelle valeur est nécessaire pour la finition.",
      },
      {
        q: "Les appareils sont-ils bruyants si nous continuons à habiter la maison ?",
        a: "Vous les entendez, surtout les ventilateurs. Dans une chambre, nous préférons ne pas placer d'appareil la nuit. Nous cherchons avec vous un dispositif qui ne ralentit pas le séchage et qui permet de continuer à vivre dans la maison.",
      },
    ],
    realisaties: [],
  },
  "s-gravenbrakel": {
    slug: "s-gravenbrakel",
    title: "Déshumidificateur de chantier à Braine-le-Comte | Vernast",
    description:
      "Déshumidificateur à louer à Braine-le-Comte, Ronquières ou Hennuyères ? Livraison sur rendez-vous, installation par zone de séchage et reprise des appareils.",
    h1: "Location de déshumidificateur de chantier à Braine-le-Comte",
    kicker: "Hainaut · le plan incliné de Ronquières",
    rit: { afstand: "environ 75 km", tijd: "environ une heure" },
    intro: [
      "**Braine-le-Comte** s'est développée autour de la gare, sur **la ligne de chemin de fer Bruxelles-Mons**. Beaucoup d'habitants font la navette vers Bruxelles. Qui s'installe ici achète souvent une maison ancienne à transformer.",
      "À Ronquières se trouve **le plan incliné** du canal Bruxelles-Charleroi, où les bateaux montent et descendent la pente dans de grands bacs. Autour du canal et à Henripont, Hennuyères et Steenkerque, la commune est **rurale**, avec des fermes et des maisons de village sur un terrain vallonné. Depuis Aartselaar, nous y sommes en une heure environ.",
    ],
    bouw: {
      kop: "Quartiers de gare en briques, villages le long du canal",
      alineas: [
        "Autour de la gare et dans le vieux centre se trouvent des **maisons mitoyennes et maisons de maître en briques** aux plafonds hauts, souvent avec une cave sous la pièce avant. Qui met une telle maison à nu jusqu'aux murs et la fait replafonner y apporte d'un coup des centaines de litres d'eau. Placez alors **un déshumidificateur par étage** et gardez les portes fermées. Cela fonctionne mieux qu'un seul gros appareil dans la cage d'escalier.",
        "Dans les villages le long du canal, il s'agit plus souvent d'**une ferme ou d'une vieille maison de village** aux murs pleins, sans coulisse. L'humidité du sol s'y ajoute parfois à l'humidité de construction. Lors de l'installation, le technicien effectue **une mesure d'humidité** dans le mur et le sol. Vous savez ainsi quelle part un déshumidificateur élimine et quelle part demande une autre approche.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison de maître près de la gare** rénovée étage par étage : 70 litres par jour, pour des pièces jusqu'à environ 400 m³." },
      { key: "ttv4500", waarom: "Sous **les plafonds hauts d'une vieille maison de ville**, l'air humide reste collé au mur fraîchement plafonné. Ce ventilateur le maintient en mouvement." },
      { key: "revolution", waarom: "Pour **la cave sous la pièce avant**. Elle reste froide, et un déshumidificateur à adsorption y fonctionne mieux qu'un déshumidificateur à condensation." },
      { key: "ttk650", waarom: "Pour **une ferme autour de Ronquières ou Henripont** avec un grand espace ouvert : 110 litres par jour, pour des pièces jusqu'à environ 600 m³." },
    ],
    levering: {
      kop: "Livrer à Braine-le-Comte : par le ring et l'E19 vers Mons",
      alinea:
        "Le trajet passe **par le ring de Bruxelles et l'E19** et dure environ une heure. Vous choisissez une date de livraison lors de la réservation ; en Wallonie, nous livrons **sur rendez-vous**. Le technicien installe les appareils par zone de séchage, pose le tuyau d'évacuation et note une première mesure d'humidité. Si vous habitez une rue étroite du centre, gardez une place libre devant la porte.",
    },
    afhalen: {
      kop: "Venir chercher à Aartselaar : deux heures de route pour un appareil",
      alinea:
        "Depuis Braine-le-Comte, l'aller-retour jusqu'à notre entrepôt vous prend **environ deux heures**. Si vous travaillez à Bruxelles ou à Anvers et que vous allez de toute façon dans cette direction, l'enlèvement peut valoir la peine pour un appareil compact. Pour une maison entière, mieux vaut faire livrer et installer les appareils.",
    },
    buren: ["zinnik", "ecaussinnes", "edingen", "rebecq"],
    faq: [
      {
        q: "Combien de déshumidificateurs pour une maison de maître sur trois niveaux ?",
        a: "Le plus souvent un déshumidificateur par niveau, portes fermées, plus un ventilateur dans les pièces où le plafonnage ou la chape est le plus humide. Le calculateur du site travaille avec le volume en mètres cubes. Sur place, le technicien adapte la répartition à l'escalier et à l'agencement.",
      },
      {
        q: "Livrez-vous aussi à Ronquières, Henripont et Steenkerque ?",
        a: "Oui, dans toute la commune, y compris dans les villages au bord du canal. Indiquez lors de la réservation si votre maison se trouve sur un chemin de campagne ou a une cour intérieure. Le technicien sait alors à l'avance où il peut garer la camionnette.",
      },
      {
        q: "Ma cave sent le moisi après l'hiver. Un déshumidificateur de chantier peut-il aider ?",
        a: "Un déshumidificateur retire l'humidité de l'air de la cave et des murs, et l'odeur de moisi disparaît généralement avec elle. Si l'eau entre par un mur de cave fissuré ou une mauvaise évacuation, elle revient dès que l'appareil est parti. La mesure d'humidité lors de l'installation montre de quel cas il s'agit.",
      },
      {
        q: "Puis-je laisser tourner le déshumidificateur la nuit dans une maison habitée ?",
        a: "Oui. Placez-le dans la pièce à sécher, fermez la porte et dormez dans une autre chambre. L'hygrostat coupe l'appareil dès que l'air est assez sec. Avec le tuyau d'évacuation vers un avaloir, personne ne doit vider de réservoir la nuit.",
      },
    ],
    realisaties: [],
  },
  "le-roeulx": {
    slug: "le-roeulx",
    title: "Louer un déshumidificateur de chantier au Rœulx | Vernast",
    description:
      "Déshumidificateur à louer au Rœulx, à Thieu ou à Mignault ? Pour vieilles maisons en pierre et sols sur terre-plein près du canal. Livré, installé et repris.",
    h1: "Location de déshumidificateur de chantier au Rœulx",
    kicker: "Hainaut · la ville des Croÿ et l'ascenseur de Thieu",
    rit: { afstand: "environ 90 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Le Rœulx est **une petite ville** blottie autour du château des **princes de Croÿ** et de son parc. Dans le centre, de vieilles maisons en pierre se serrent les unes contre les autres. Au-delà s'étendent les villages de Thieu, Mignault, Gottignies et Ville-sur-Haine.",
      "À **Thieu** se trouve l'un des quatre **ascenseurs à bateaux historiques** du Canal du Centre, inscrits ensemble au patrimoine mondial de l'UNESCO. Dans les parties basses le long du canal et de la Haine, le sol reste humide. Depuis Aartselaar, nous sommes ici en un peu plus d'une heure.",
    ],
    bouw: {
      kop: "Vieilles maisons de ville et villages près du canal",
      alineas: [
        "Autour du château se trouvent des **maisons aux murs épais** en briques et en pierre naturelle, souvent avec une cave voûtée. Un tel mur absorbe beaucoup d'eau lors d'une rénovation et la rend lentement. **Un enduit à la chaux sur un vieux mur** sèche mieux avec de l'air en mouvement qu'avec un déshumidificateur poussé au maximum. Le technicien règle donc l'hygrostat sur une valeur modérée, pour que l'enduit ne se fissure pas.",
        "À Thieu et à Ville-sur-Haine, les maisons de village ont souvent **un sol sur terre-plein**. Une nouvelle chape y sèche lentement, surtout dans une pièce froide et humide. Placez à côté du déshumidificateur **un ventilateur qui souffle à ras du sol**. Le sol sera ainsi plus vite prêt pour la finition.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison de ville autour du château** : 70 litres par jour, pour des pièces jusqu'à environ 400 m³, avec l'évacuation vers un avaloir." },
      { key: "radiaal2250", waarom: "Sur **une nouvelle chape sur terre-plein** à Thieu ou à Ville-sur-Haine : il souffle bas et de façon ciblée sur le sol." },
      { key: "teddh20", waarom: "Met d'abord **une cave voûtée ou un rez-de-chaussée non chauffé** en température. Il demande un raccordement 400 V." },
      { key: "ttk170", waarom: "Pour **une seule pièce ou une salle de bains** dans une maison plus petite : 50 litres par jour, compact et sur une prise de 230 V." },
    ],
    levering: {
      kop: "Livrer au Rœulx : par l'E19 et la sortie vers La Louvière",
      alinea:
        "Le trajet dure un peu plus d'une heure, **par le ring et l'E19 en direction de Mons**. Vous choisissez une date de livraison lors de la réservation, et nous convenons de l'heure avec vous. Le technicien installe les appareils, pose l'évacuation et effectue **une mesure d'humidité dans le mur et le sol**. À la reprise des appareils, vous disposez ainsi d'un point de comparaison.",
    },
    afhalen: {
      kop: "Venir chercher soi-même : une demi-journée depuis Le Rœulx",
      alinea:
        "Avec **plus de deux heures de route aller-retour**, venir chercher à Aartselaar n'a de sens que si vous devez de toute façon passer près d'Anvers. Un déshumidificateur se transporte debout dans la voiture. Pour une chape ou une cave, mieux vaut nous laisser livrer.",
    },
    buren: ["zinnik", "la-louviere", "bergen"],
    faq: [
      {
        q: "Comment sécher un enduit à la chaux sur un vieux mur en pierre sans fissures ?",
        a: "Pas trop vite. L'enduit à la chaux doit durcir, et un mur asséché trop fort peut se fissurer ou se décoller. Le technicien règle donc l'hygrostat sur une valeur modérée et place un ventilateur à distance. L'air circule ainsi sans que la surface ne se dessèche.",
      },
      {
        q: "Un déshumidificateur de chantier fonctionne-t-il dans une cave voûtée ?",
        a: "Oui, mais une cave voûtée est froide, et sous environ 15 °C un déshumidificateur à condensation retire peu d'eau de l'air. Nous y ajoutons donc un chauffage de chantier ou choisissons un déshumidificateur à adsorption. Gardez la porte de la cave fermée, sinon l'appareil sèche aussi le reste de la maison.",
      },
      {
        q: "Pouvez-vous sécher une chape sur terre-plein à Thieu ?",
        a: "Oui. Une chape sur terre-plein sèche surtout vers le haut. Nous plaçons donc un déshumidificateur dans la pièce et un ventilateur radial qui souffle sur le sol. La mesure d'humidité au départ et à la reprise vous aide, vous et votre poseur de sol, à décider si la chape est prête pour la finition.",
      },
      {
        q: "Comment se passe la reprise des appareils ?",
        a: "Vous nous prévenez quand la pièce est assez sèche ou quand la période de location se termine, et nous convenons d'un moment. Le technicien mesure encore une fois, vide les appareils et les emporte. Vous ne devez ni les nettoyer ni les emballer vous-même.",
      },
    ],
    realisaties: [],
  },
  manage: {
    slug: "manage",
    title: "Déshumidificateur de chantier à louer à Manage | Vernast",
    description:
      "Déshumidificateur à louer à Manage, Fayt-lez-Manage, La Hestre ou Bois-d'Haine ? Pour rénover une maison mitoyenne dans la région du Centre. Livré et installé.",
    h1: "Location de déshumidificateur de chantier à Manage",
    kicker: "Hainaut · nœud ferroviaire de la région du Centre",
    rit: { afstand: "environ 85 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Manage se trouve **au cœur de la région du Centre**, entre La Louvière, Seneffe et Chapelle-lez-Herlaimont. Au XIXe siècle, elle est devenue **un nœud ferroviaire et une commune industrielle**, avec des charbonnages et des industries métallurgiques à proximité.",
      "Avec **Fayt-lez-Manage, La Hestre et Bois-d'Haine**, Manage forme une seule zone d'habitat, avec **de longues rangées de maisons ouvrières**, d'anciens commerces le long des grands axes et des quartiers plus récents en périphérie. Beaucoup d'acheteurs y acquièrent une maison qui demande une rénovation en profondeur. Nous y sommes en un peu plus d'une heure.",
    ],
    bouw: {
      kop: "Maisons mitoyennes de l'ère industrielle, et ce que libère une rénovation",
      alineas: [
        "La maison typique de Manage est **une maison mitoyenne étroite en briques** avec une annexe profonde, une petite cour et souvent une cave sous la pièce avant. L'annexe a été ajoutée plus tard, avec un mur plus mince et parfois un sol sur terre-plein. **C'est là que se loge le plus d'humidité après une rénovation**, et c'est là que le technicien place le premier appareil.",
        "Si la maison est entièrement ouverte, avec un nouveau plafonnage, une nouvelle chape et une nouvelle salle de bains, séchez **par zone** et pas toute la maison à la fois. L'annexe n'attend ainsi pas un appareil posé dans la pièce avant. La mesure d'humidité au départ montre quelle pièce a besoin du plus de temps.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison mitoyenne entière en rénovation** : 70 litres par jour, pour des pièces jusqu'à environ 400 m³." },
      { key: "ttk170", waarom: "**Pour l'annexe ou une nouvelle salle de bains** à part : 50 litres par jour et assez compact pour un couloir étroit." },
      { key: "radiaal2250", waarom: "Sur **la nouvelle chape d'une maison profonde et étroite**, où l'air n'atteint sinon guère le fond." },
      { key: "revolution", waarom: "Pour **la cave sous la pièce avant** : ce déshumidificateur à adsorption continue de fonctionner dans une pièce froide tout l'hiver." },
    ],
    levering: {
      kop: "Livrer à Manage : l'E19, puis l'A501 vers la région du Centre",
      alinea:
        "Le trajet dure un peu plus d'une heure, **par le ring et l'E19**. Vous choisissez une date de livraison lors de la réservation ; nous convenons ensemble de l'heure de livraison. Dans une rue de maisons mitoyennes, cela aide si vous gardez **une place libre devant la porte**. Le technicien installe les appareils par zone, pose le tuyau d'évacuation vers un avaloir et vous montre comment les suivre.",
    },
    afhalen: {
      kop: "Venir chercher à Aartselaar vaut rarement la peine depuis Manage",
      alinea:
        "Notre entrepôt d'Aartselaar se trouve à **un peu plus d'une heure de route** de Manage. L'enlèvement peut se faire pour un appareil compact que vous placez vous-même dans une pièce, si vous allez de toute façon vers Anvers. Pour une maison mitoyenne avec une nouvelle chape, mieux vaut choisir la livraison avec installation.",
    },
    buren: ["seneffe", "la-louviere", "morlanwelz", "chapelle-lez-herlaimont"],
    faq: [
      {
        q: "Pourquoi l'annexe de ma maison mitoyenne reste-t-elle humide plus longtemps ?",
        a: "Une annexe a souvent été ajoutée plus tard, avec un mur plus mince, un toit plat et un sol sur terre-plein. Elle est plus froide que le reste de la maison, et les murs froids sèchent plus lentement. Un déshumidificateur séparé dans l'annexe, porte vers la maison fermée, résout généralement le problème.",
      },
      {
        q: "Puis-je sécher tout en continuant à habiter la maison ?",
        a: "Oui, si vous fermez la zone de séchage. Placez les appareils dans les pièces où des travaux ont eu lieu et gardez les portes fermées. Sinon, l'appareil sèche surtout l'air de votre pièce de vie, et moins les murs et les sols humides.",
      },
      {
        q: "Comment savoir si mon mur contient de l'humidité de construction ou de l'humidité ascensionnelle ?",
        a: "L'humidité de construction est répartie dans le nouveau plafonnage et la nouvelle chape, et diminue dès qu'on sèche. L'humidité ascensionnelle se trouve dans le bas du mur, est la plus forte près du sol et revient. Le technicien mesure à différentes hauteurs et vous dit ce qu'il constate.",
      },
      {
        q: "Combien d'électricité consomme un déshumidificateur pendant une rénovation ?",
        a: "L'appareil compact absorbe environ 0,75 kW, le plus grand environ 1,4 kW. Ils ne tournent pas en permanence à pleine puissance : l'hygrostat coupe l'appareil dès que l'air est assez sec, et la consommation baisse alors aussi.",
      },
    ],
    realisaties: [],
  },
  seneffe: {
    slug: "seneffe",
    title: "Louer un déshumidificateur de chantier à Seneffe | Vernast",
    description:
      "Déshumidificateur à louer à Seneffe, Feluy, Arquennes ou Familleureux ? Pour maisons en pierre bleue et constructions neuves. Livré, placé par zone et repris.",
    h1: "Location de déshumidificateur de chantier à Seneffe",
    kicker: "Hainaut · château, canaux et pierre bleue de Feluy",
    rit: { afstand: "environ 80 km", tijd: "environ une heure" },
    intro: [
      "Seneffe est connue pour **son château du XVIIIe siècle** et son parc, ainsi que pour ses canaux : le **canal Bruxelles-Charleroi** et le Canal du Centre traversent la commune. Près de Feluy se trouve un grand zoning industriel.",
      "À **Feluy et Arquennes**, on a longtemps extrait la **pierre bleue**. Cela se voit aux maisons, avec des seuils, des plinthes et des encadrements de fenêtres en pierre grise. Familleureux et Petit-Rœulx-lez-Nivelles sont surtout des villages de fermes et de lotissements. Depuis Aartselaar, nous y sommes en une heure environ.",
    ],
    bouw: {
      kop: "Maisons de village en pierre bleue et constructions neuves sur le plateau",
      alineas: [
        "Une **vieille maison de village à Feluy ou Arquennes** a souvent un soubassement en pierre bleue sous une façade en briques. La pierre bleue absorbe peu d'eau, mais **les joints et le mur derrière**, eux, en absorbent. Cette humidité ne peut pas sortir à travers la pierre. Après une rénovation, un tel mur sèche donc surtout vers l'intérieur, là où se trouve le déshumidificateur.",
        "Autour de Seneffe et de Familleureux, on **construit et on agrandit**. Il s'agit alors d'humidité de construction venant du béton, de la chape et du plafonnage, qui ne revient pas une fois séchée. Avec un déshumidificateur par étage et un ventilateur sur la chape, votre poseur de sol peut mieux planifier, même par un automne pluvieux.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison neuve** : 70 litres par jour par étage, pour des pièces jusqu'à environ 400 m³." },
      { key: "radiaal2250", waarom: "**Sur une chape fraîche** dans une maison neuve : ce ventilateur souffle à ras du sol, pour que le poseur de sol puisse commencer plus tôt." },
      { key: "ttv4500", waarom: "Contre **un vieux mur derrière une plinthe en pierre bleue** : il garde l'air en mouvement le long de la surface, pour que l'humidité puisse partir vers l'intérieur." },
      { key: "ttk650", waarom: "Pour **une ferme ou un grand espace ouvert** dans les villages : 110 litres par jour, pour des pièces jusqu'à environ 600 m³." },
    ],
    levering: {
      kop: "Livrer à Seneffe : par l'E19 jusqu'à Nivelles, puis vers l'ouest",
      alinea:
        "Le trajet dure environ une heure, **par le ring et l'E19 en direction de Nivelles**. Vous choisissez une date de livraison lors de la réservation ; la livraison elle-même se fait sur rendez-vous. Sur un chantier dans un nouveau lotissement, le technicien veut savoir **qui lui ouvre** et s'il y a du courant. Il installe les appareils, pose l'évacuation et mesure au départ l'humidité de la chape.",
    },
    afhalen: {
      kop: "Venir chercher, c'est possible, mais à une heure de route par trajet",
      alinea:
        "Notre entrepôt d'Aartselaar se trouve à **environ une heure**. Pour un seul appareil, l'enlèvement peut se faire. Une maison neuve avec chape sèche mieux avec des appareils bien répartis, et c'est le technicien qui les place sur place.",
    },
    buren: ["nijvel", "ecaussinnes", "manage", "pont-a-celles"],
    faq: [
      {
        q: "Pourquoi le mur derrière une plinthe en pierre bleue sèche-t-il si lentement ?",
        a: "La pierre bleue est dense et laisse passer peu d'humidité. L'eau des joints et de la maçonnerie derrière ne peut donc pas sortir par l'extérieur et doit sécher vers l'intérieur. Un déshumidificateur avec un ventilateur du côté intérieur du mur aide, mais comptez plus de temps que pour un mur en briques.",
      },
      {
        q: "En combien de temps une nouvelle chape sèche-t-elle avec vos appareils ?",
        a: "Cela dépend de l'épaisseur, du type de chape et de la température. Avec un déshumidificateur et un ventilateur, cela va nettement plus vite que sans. Nous mesurons le taux d'humidité au départ et pouvons mesurer à nouveau plus tard, pour que votre poseur de sol décide sur la base d'un chiffre.",
      },
      {
        q: "Faut-il du courant sur le chantier pour un déshumidificateur ?",
        a: "Oui, une prise de 230 V suffit pour les déshumidificateurs et les ventilateurs. Seuls les chauffages de chantier électriques demandent un raccordement 400 V. Si vous travaillez avec un coffret de chantier provisoire, vérifiez qu'il a assez de puissance pour tous les appareils ensemble.",
      },
      {
        q: "Venez-vous aussi à Feluy et Arquennes ?",
        a: "Oui, nous livrons dans toutes les sections de Seneffe. Dans les vieux centres de village, les rues sont parfois étroites. Signalez lors de la réservation s'il y a peu de place pour s'arrêter, et le technicien prendra un diable.",
      },
    ],
    realisaties: [],
  },
  zinnik: {
    slug: "zinnik",
    title: "Location de déshumidificateur à Soignies | Vernast",
    description:
      "Déshumidificateur à louer à Soignies ou Casteau ? Pour maisons de maître en pierre bleue, fermes et logements loués. Livré sur rendez-vous, installé et repris.",
    h1: "Location de déshumidificateur de chantier à Soignies",
    kicker: "Hainaut · la cité de la pierre bleue",
    rit: { afstand: "environ 80 km", tijd: "environ une heure" },
    intro: [
      "**Soignies** est la ville de **la pierre bleue**. De grandes carrières bordent la ville, et la pierre est partout dans les rues : dans les seuils, les plinthes, les façades et dans la collégiale romane Saint-Vincent.",
      "Autour du centre se trouvent des sections comme Naast, Horrues, Neufvilles et **Casteau**, où est établi le quartier général militaire de l'OTAN, le **SHAPE**. Beaucoup de familles étrangères y vivent donc, souvent dans un logement loué. Depuis Aartselaar, nous rejoignons Soignies en une heure environ.",
    ],
    bouw: {
      kop: "La pierre de ses propres carrières, et ce que cela change pour le séchage",
      alineas: [
        "Dans le centre de Soignies se trouvent des **maisons de maître et maisons mitoyennes** avec beaucoup de pierre bleue en façade. La pierre est dense, mais **le mur en briques derrière** absorbe beaucoup d'eau du plafonnage et du mortier lors d'une rénovation. Cette humidité ne peut pas sortir à travers la pierre bleue et se libère du côté intérieur. C'est là qu'un déshumidificateur et un ventilateur l'éliminent, portes fermées.",
        "Dans les villages autour de la ville se trouvent des **fermes et des maisons anciennes** sur un sol limoneux humide, souvent sans barrière contre l'humidité. Après une rénovation, l'humidité de construction s'y mêle à celle du sol. Lors de l'installation, le technicien mesure **en bas et plus haut dans le mur**, pour que vous sachiez ce qui restera après le séchage.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison de maître du centre** : 70 litres par jour par étage, pour des pièces jusqu'à environ 400 m³." },
      { key: "ttv4500", waarom: "**Contre un mur derrière de la pierre bleue**, il chasse la couche d'air humide, pour que le déshumidificateur puisse capter l'humidité." },
      { key: "ttk170", waarom: "Pour **un appartement ou un logement loué** qui doit vite redevenir habitable : compact, 50 litres par jour, sur une prise de 230 V." },
      { key: "teddh30", waarom: "Pour **une étable ou une grange à Horrues ou Naast** qui devient une habitation : il met d'abord le grand volume froid en température (400 V)." },
    ],
    levering: {
      kop: "Livrer à Soignies : une heure par le ring et l'E19",
      alinea:
        "Le trajet dure environ une heure, **par le ring et l'E19 en direction de Mons**. Vous choisissez une date de livraison lors de la réservation, et nous convenons de l'heure. Le technicien installe les appareils par zone de séchage, pose le tuyau d'évacuation et **note la mesure d'humidité** qui vous servira de comparaison plus tard. Dans les rues étroites autour de la collégiale, cela aide de dire à l'avance où il peut s'arrêter.",
    },
    afhalen: {
      kop: "Venir chercher à Aartselaar : seulement si vous montez vers le nord",
      alinea:
        "Depuis Soignies, Aartselaar est à **environ une heure de route**, donc deux heures aller-retour. Si vous faites la navette vers Bruxelles ou plus loin, l'enlèvement peut convenir pour un appareil compact. Pour une maison de maître ou une ferme, mieux vaut nous laisser livrer et mesurer.",
    },
    buren: ["s-gravenbrakel", "ecaussinnes", "le-roeulx", "jurbeke"],
    faq: [
      {
        q: "J'habite temporairement à Casteau pour le SHAPE. Puis-je louer un déshumidificateur pour un logement loué ?",
        a: "Oui. Après une fuite d'eau ou un rafraîchissement, nous plaçons un déshumidificateur aussi longtemps que nécessaire. Convenez avec le propriétaire de qui paie la location.",
      },
      {
        q: "La pierre bleue absorbe-t-elle l'humidité ?",
        a: "À peine : c'est un calcaire dense. L'humidité se trouve dans les joints, le mortier et le mur en briques derrière. Comme elle ne peut pas sortir à travers la pierre bleue, un tel mur sèche surtout vers l'intérieur. C'est pourquoi le déshumidificateur et le ventilateur se placent du côté intérieur.",
      },
      {
        q: "Puis-je faire sécher en hiver une étable transformée en habitation ?",
        a: "Oui, dès que l'étable est fermée, avec des fenêtres et des portes ou une fermeture provisoire. En hiver, un grand espace froid est trop froid pour un déshumidificateur à condensation. Un chauffage de chantier électrique le met d'abord en température. Il demande un raccordement 400 V, vérifiez donc à l'avance qu'il est présent.",
      },
      {
        q: "Combien de temps loue-t-on un déshumidificateur en moyenne ?",
        a: "Pour une pièce avec un nouveau plafonnage, une semaine à dix jours suffisent souvent. Une maison entière avec une nouvelle chape demande plusieurs semaines. La mesure d'humidité au départ donne une première idée, et vous pouvez prolonger tant que les murs ou le sol ne sont pas assez secs.",
      },
    ],
    realisaties: [],
  },
  ecaussinnes: {
    slug: "ecaussinnes",
    title: "Déshumidificateur de chantier à Écaussinnes | Vernast",
    description:
      "Déshumidificateur à louer à Écaussinnes ou Marche-lez-Écaussinnes ? Pour maisons en pierre à flanc de coteau et caves toujours froides. Livré sur rendez-vous.",
    h1: "Location de déshumidificateur de chantier à Écaussinnes",
    kicker: "Hainaut · les carrières et le château fort de Lalaing",
    rit: { afstand: "environ 80 km", tijd: "environ une heure" },
    intro: [
      "Écaussinnes se trouve entre Soignies et Seneffe, dans une région où l'on extrait **la pierre bleue** depuis des siècles. La commune regroupe Écaussinnes-d'Enghien, Marche-lez-Écaussinnes et **Écaussinnes-Lalaing**, avec son château fort médiéval qui domine la vallée.",
      "Les villages sont bâtis **en pierre et en briques le long de rues en pente**, avec des jardins qui descendent vers la vallée de **la Sennette**. Depuis notre entrepôt d'Aartselaar, nous y sommes en une heure environ.",
    ],
    bouw: {
      kop: "Maisons de carriers le long des rues en pente",
      alineas: [
        "Beaucoup de maisons d'Écaussinnes sont de **simples maisons en briques** avec de la pierre bleue dans la plinthe et les seuils. Certaines sont en partie construites dans la pente. Côté talus, **la terre touche alors le mur**, et une cave ou un rez-de-chaussée de ce côté est naturellement plus humide que le reste de la maison.",
        "Lors d'une rénovation, le technicien cherche d'abord **d'où vient l'eau**. L'humidité de construction d'un nouveau plafonnage et d'une nouvelle chape disparaît avec un déshumidificateur. L'eau qui pousse contre le mur depuis la pente après chaque averse demande une solution du côté extérieur. La mesure d'humidité à la livraison fait la différence entre les deux.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**Pour le rez-de-chaussée ou la cave contre la pente** : ce déshumidificateur à adsorption fonctionne aussi dans un espace froid, à moitié enterré." },
      { key: "ttk350", waarom: "Pour **une maison de village rénovée**, étage par étage : 70 litres par jour, pour des pièces jusqu'à environ 400 m³." },
      { key: "ttk170", waarom: "Pour **une petite chambre ou une salle de bains** dans une maison étroite : compact et adapté à une prise de 230 V." },
      { key: "ttv4500", waarom: "Pour **un mur fraîchement plafonné avec une plinthe en pierre bleue**, où l'humidité ne peut sécher que vers l'intérieur." },
    ],
    levering: {
      kop: "Livrer à Écaussinnes, même dans les rues en pente",
      alinea:
        "Le trajet dure environ une heure, **par le ring et l'E19**, avec le dernier tronçon sur des routes régionales. Vous choisissez une date de livraison lors de la réservation ; la livraison se fait sur rendez-vous. Si votre maison se trouve dans **une rue raide ou s'il y a des marches jusqu'à la porte d'entrée**, signalez-le. Le technicien prend un diable et prévoit le temps nécessaire.",
    },
    afhalen: {
      kop: "Venir chercher à Aartselaar, si vous allez de toute façon à Anvers",
      alinea:
        "Notre entrepôt se trouve à **environ une heure de route** d'Écaussinnes. Pour un appareil compact, l'enlèvement peut valoir la peine si vous êtes de toute façon dans le coin. Pour une cave ou un rez-de-chaussée contre la pente, nous conseillons la livraison, car c'est la mesure d'humidité qui détermine si le séchage y a du sens.",
    },
    buren: ["s-gravenbrakel", "zinnik", "seneffe", "le-roeulx"],
    faq: [
      {
        q: "Mon rez-de-chaussée est à moitié dans la pente. Un déshumidificateur peut-il le garder sec ?",
        a: "Un déshumidificateur retire l'humidité de l'air et du mur, même dans un espace enterré. Si de l'eau nouvelle arrive contre le mur après chaque pluie, l'humidité revient dès que l'appareil est parti. Un drainage ou une étanchéité côté extérieur aide alors. La mesure lors de l'installation montre de quel cas il s'agit.",
      },
      {
        q: "Le technicien peut-il porter les appareils en haut d'un escalier ?",
        a: "Oui, les appareils arrivent jusque dans la pièce où ils doivent se trouver. Pour un escalier intérieur raide ou un escalier extérieur avec beaucoup de marches, il prend un diable ou vient avec un collègue. Signalez-le lors de la réservation, nous en tiendrons compte dans le planning.",
      },
      {
        q: "Quand puis-je arrêter de sécher ?",
        a: "Regardez l'humidité dans le mur et le sol, pas celle de l'air. Une pièce peut sembler sèche alors que la chape est encore trop humide pour un parquet. Nous mesurons le matériau lui-même, pour que vous arrêtiez sur une valeur mesurée et non au jugé.",
      },
      {
        q: "Que se passe-t-il si le courant est coupé pendant que le déshumidificateur tourne ?",
        a: "Le séchage s'arrête alors un moment. Après la coupure, vérifiez que l'appareil tourne à nouveau et que l'hygrostat est toujours bien réglé. Si vous travaillez avec un coffret de chantier, vérifiez qu'il ne saute pas quand le déshumidificateur et un ventilateur démarrent ensemble.",
      },
    ],
    realisaties: [],
  },
  binche: {
    slug: "binche",
    title: "Location de déshumidificateur de chantier à Binche | Vernast",
    description:
      "Déshumidificateur à louer à Binche ? Pour maisons de ville dans les remparts et maisons de mineurs à Ressaix et Leval-Trahegnies. Livré, installé et repris.",
    h1: "Louer un déshumidificateur de chantier à Binche",
    kicker: "Hainaut · la ville des Gilles",
    rit: { afstand: "environ 100 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Binche est connue pour **son carnaval** et ses **Gilles**, reconnu par l'UNESCO comme patrimoine immatériel. La ville a aussi conservé une grande partie de ses remparts médiévaux, avec des tours autour du vieux centre.",
      "À l'intérieur de ces remparts, **de vieilles maisons de ville se serrent les unes contre les autres**. Au-delà se trouvent des sections comme **Ressaix, Leval-Trahegnies, Waudrez et Péronnes**. Une partie d'entre elles s'est développée autour des charbonnages, avec des rangées de maisons ouvrières. Depuis Aartselaar, nous y sommes en un peu plus d'une heure.",
    ],
    bouw: {
      kop: "Dans les remparts et dans les anciens villages miniers",
      alineas: [
        "Dans le **vieux centre entre les remparts** se trouvent des maisons de ville étroites et profondes, avec des caves voûtées et des murs épais. Lors d'une rénovation, l'air humide y reste coincé entre les murs. **Un déshumidificateur par étage et un ventilateur** mettent cet air en mouvement. Gardez les portes vers l'escalier fermées.",
        "Dans les **villages miniers** s'alignent des maisons ouvrières, souvent petites et avec un sol posé directement sur la terre. Après une rénovation avec un nouveau sol et un nouveau plafonnage, beaucoup d'humidité se libère dans un petit espace. En général, **un appareil compact pour deux pièces** suffit. Le technicien mesure aussi si l'humidité du sol joue un rôle.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**Pour une petite maison de mineur à Ressaix ou Leval** : 50 litres par jour, assez compact pour une porte étroite, sur 230 V." },
      { key: "ttk350", waarom: "**Pour une maison de ville dans les remparts** sur plusieurs étages : 70 litres par jour par niveau, pour des pièces jusqu'à environ 400 m³." },
      { key: "revolution", waarom: "Pour **une cave voûtée du vieux centre**, trop froide pour un déshumidificateur à condensation." },
      { key: "radiaal2250", waarom: "Sur **un nouveau sol sur terre-plein** : il souffle bas et de façon ciblée, pour que la chape sèche plus vite." },
    ],
    levering: {
      kop: "Livrer à Binche : l'E19, puis l'E42 vers l'est",
      alinea:
        "Le trajet dure un peu plus d'une heure, **par le ring, l'E19 et l'E42**. Vous fixez la date de livraison lors de la réservation ; nous vous appelons pour convenir de l'heure précise. Autour du carnaval, le vieux centre est en partie fermé. **Pendant cette période, réservez plus longtemps à l'avance** et dites-nous où le technicien peut s'arrêter. Il installe les appareils, pose l'évacuation et mesure l'humidité au départ.",
    },
    afhalen: {
      kop: "Venir chercher depuis Binche : plus de deux heures aller-retour",
      alinea:
        "Aartselaar se trouve à **un peu plus d'une heure de route** de Binche. L'aller-retour vous prend vite une demi-matinée, et un déshumidificateur doit voyager debout dans la voiture. Pour un appareil compact, c'est possible. Pour une maison de ville ou une maison de mineur en rénovation, mieux vaut nous laisser livrer.",
    },
    buren: ["estinnes", "morlanwelz", "la-louviere", "anderlues"],
    faq: [
      {
        q: "Livrez-vous aussi pendant le carnaval de Binche ?",
        a: "Dans le vieux centre, c'est difficile autour des jours de carnaval, car les rues sont fermées et il y a foule. Prévoyez de préférence votre livraison avant ou après cette période, ou indiquez une adresse en dehors du centre. Dans les sections, peu de choses changent en général.",
      },
      {
        q: "Combien de déshumidificateurs pour une petite maison de mineur ?",
        a: "Souvent un appareil compact pour le rez-de-chaussée et un second pour l'étage, portes fermées. S'il y a une nouvelle chape, un ventilateur s'y ajoute. Le calculateur du site travaille avec le volume, et le technicien vérifie sur place que cela correspond.",
      },
      {
        q: "Pourquoi ma cave voûtée sent-elle le moisi ?",
        a: "Une cave voûtée a ses murs contre la terre, est peu aérée et reste froide. L'air se sature d'humidité, et cela sent le moisi. Un déshumidificateur à adsorption retire cette humidité. Si l'eau traverse le mur, l'odeur revient. La mesure d'humidité à la livraison permet de le savoir.",
      },
      {
        q: "Un déshumidificateur peut-il rester en place après la fin des travaux ?",
        a: "Oui. Vous louez aussi longtemps que nécessaire, et nous reprenons l'appareil quand vous le demandez. Beaucoup de clients laissent l'appareil encore quelques jours après le passage du peintre, car la peinture fraîche sur un mur tout juste séché libère aussi de l'humidité.",
      },
    ],
    realisaties: [],
  },
  estinnes: {
    slug: "estinnes",
    title: "Déshumidificateur de chantier à louer à Estinnes | Vernast",
    description:
      "Déshumidificateur à louer à Estinnes, Haulchin, Rouveroy ou Vellereille ? Pour fermes, étables rénovées et maisons de village au sud de Binche. Livré et placé.",
    h1: "Location de déshumidificateur de chantier à Estinnes",
    kicker: "Hainaut · des fermes sur le plateau ouvert",
    rit: { afstand: "environ 105 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Estinnes est **une vaste commune rurale** entre Binche et Mons. Elle compte une série de villages, dont Estinnes-au-Mont, Estinnes-au-Val, Haulchin, Vellereille, Rouveroy, Fauroeulx, Peissant et Croix-lez-Rouveroy. En la traversant, on voit surtout **des champs, des fermes et des éoliennes**.",
      "La commune compte peu d'habitants sur une grande superficie. La plupart des habitations sont **de vieilles fermes et maisons de village en briques**, avec des maisons plus récentes en bordure des villages. Le chantier, ici, c'est souvent **une ferme en transformation** ou une vieille maison en rénovation. Depuis Aartselaar, nous y sommes en un peu plus d'une heure.",
    ],
    bouw: {
      kop: "Des fermes qui deviennent des logements, et des pièces froides en hiver",
      alineas: [
        "Une **ferme à Estinnes** a souvent, à côté de la maison d'habitation, de grandes dépendances : une étable, une grange, une remise. Qui les transforme en logement y apporte **une nouvelle dalle, une chape et du plafonnage** dans un volume haut aux murs épais. Un seul appareil au milieu sèche alors surtout l'air autour de lui. Des appareils répartis fonctionnent mieux.",
        "Sur le plateau ouvert, le vent frappe librement les façades, et une **pièce non chauffée** se refroidit fortement en hiver. Sous environ 15 °C, un déshumidificateur à condensation retire peu d'eau de l'air. Dans une étable ou une grange froide, nous plaçons donc **d'abord un chauffage de chantier**, puis le déshumidificateur. Le chantier peut ainsi continuer en hiver aussi.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une étable ou une grange transformée** : 110 litres par jour, pour un volume haut et ouvert jusqu'à environ 600 m³." },
      { key: "teddh30", waarom: "**Pour une ferme froide en hiver** : 30 kW pour amener l'espace à température de travail, sur du courant triphasé 400 V." },
      { key: "radiaal2250", waarom: "Sur **la nouvelle dalle ou la chape** d'un grand espace, où l'air reste sinon immobile juste au-dessus du sol." },
      { key: "ttk350", waarom: "Pour **la maison d'habitation elle-même**, étage par étage : 70 litres par jour, pour des pièces jusqu'à environ 400 m³." },
    ],
    levering: {
      kop: "Livrer à Estinnes : par l'E19 et l'E42, puis les routes de campagne",
      alinea:
        "Le trajet dure un peu plus d'une heure, **par le ring, l'E19 et l'E42**, avec le dernier tronçon sur des routes de campagne. Vous fixez une date de livraison lors de la réservation, et nous convenons ensemble d'une heure. Si vous avez **une ferme avec une cour intérieure ou une longue allée**, dites à l'avance où le technicien peut charger. S'il faut un chauffage, indiquez aussi où se trouve le raccordement 400 V.",
    },
    afhalen: {
      kop: "Venir chercher depuis Estinnes n'est pas un bon calcul",
      alinea:
        "Aartselaar se trouve à **un peu plus d'une heure de route** d'Estinnes, et pour une ferme il vous faut généralement plusieurs appareils. Ils tiennent rarement dans une seule voiture. L'enlèvement n'a de sens que pour un appareil compact dans une pièce. Dans tous les autres cas, la livraison avec installation est le choix logique.",
    },
    buren: ["binche", "bergen", "quevy", "merbes-le-chateau"],
    faq: [
      {
        q: "Combien d'appareils pour une étable transformée ?",
        a: "Cela dépend du volume et de la quantité de travaux humides réalisés. Une étable avec une nouvelle dalle et du plafonnage demande généralement un grand déshumidificateur, un ventilateur sur le sol et, en hiver, un chauffage de chantier. Communiquez les dimensions et la hauteur, et nous calculons la répartition à l'avance.",
      },
      {
        q: "Ma ferme a-t-elle besoin d'un raccordement 400 V pour le chauffage ?",
        a: "Oui, les chauffages de chantier électriques fonctionnent en 400 V. Beaucoup de fermes ont déjà ce raccordement, pour les machines agricoles ou un atelier. Sinon, un coffret de chantier de l'entrepreneur peut aider. Les déshumidificateurs et les ventilateurs fonctionnent sur une prise de 230 V.",
      },
      {
        q: "Le technicien se rend-il jusqu'à Rouveroy et Croix-lez-Rouveroy ?",
        a: "Oui, nous livrons dans tous les villages d'Estinnes, même les plus petits. Indiquez lors de la réservation si l'accès passe par un chemin de campagne étroit ou une allée non revêtue. Le technicien sait alors à quoi s'attendre.",
      },
      {
        q: "Un déshumidificateur fonctionne-t-il sous une charpente apparente ?",
        a: "Oui, tant que l'espace lui-même est fermé. Une charpente ouverte augmente toutefois le volume à sécher, et l'air chaud et humide monte. Un ventilateur qui brasse l'air évite que l'humidité ne reste sous le toit.",
      },
    ],
    realisaties: [],
  },
  "la-louviere": {
    slug: "la-louviere",
    title: "Location de déshumidificateur à La Louvière | Vernast",
    description:
      "Déshumidificateur à louer à La Louvière, Houdeng ou Strépy-Bracquegnies ? Pour maisons ouvrières et maisons de ville en rénovation près du Canal du Centre.",
    h1: "Location de déshumidificateur de chantier à La Louvière",
    kicker: "Hainaut · ascenseurs à bateaux et cités minières",
    rit: { afstand: "environ 90 km", tijd: "un peu plus d'une heure" },
    intro: [
      "La Louvière est **une ville jeune**. Elle n'est devenue une commune à part entière qu'au XIXe siècle, quand **le charbon, l'acier et la faïence** ont fait la prospérité de la région du Centre. L'ancien site minier du Bois-du-Luc, à Houdeng-Aimeries, est inscrit au patrimoine mondial de l'UNESCO.",
      "La ville est traversée par **le Canal du Centre**, avec trois des quatre ascenseurs à bateaux historiques et le grand **ascenseur funiculaire de Strépy-Thieu**. Autour des mines et des usines sont nés des quartiers de maisons ouvrières en rangées, à Houdeng, Haine-Saint-Paul, Strépy-Bracquegnies et Trivières. Depuis Aartselaar, nous rejoignons La Louvière en un peu plus d'une heure.",
    ],
    bouw: {
      kop: "Quartiers ouvriers, cités et une ville en rénovation",
      alineas: [
        "Les **maisons ouvrières et les cités** autour des anciennes mines sont petites, bâties en briques et souvent avec un sol sur terre-plein ou une cave basse. Beaucoup de ces maisons sont aujourd'hui rénovées en profondeur : isolation, nouveaux sols, une salle de bains là où se trouvait autrefois une toilette extérieure. **Beaucoup d'eau se libère alors dans un petit volume**, et elle doit partir avant que la finition ne commence.",
        "Dans **le centre** aussi, des maisons de ville anciennes et des commerces avec un appartement à l'étage sont rénovés. Les escaliers y sont étroits et la place manque. Nous y plaçons **des appareils compacts** sur une prise de 230 V. Le technicien pose l'évacuation vers un évier ou un avaloir, pour que vous n'ayez pas de réservoir à vider.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**Pour une maison ouvrière ou un appartement au-dessus d'un commerce** : 50 litres par jour et assez compact pour un escalier étroit." },
      { key: "ttk350", waarom: "Pour **une maison mitoyenne entière à Houdeng ou Strépy** rénovée de l'avant à l'arrière : 70 litres par jour." },
      { key: "radiaal2250", waarom: "Sur **la nouvelle chape** qui remplace l'ancien sol sur terre-plein : il souffle bas et de façon ciblée sur la surface." },
      { key: "revolution", waarom: "Pour **une cave basse et froide** sous une vieille maison, où un déshumidificateur à condensation a peu de rendement." },
    ],
    levering: {
      kop: "Livrer à La Louvière : l'E19, puis l'A501 jusque dans la ville",
      alinea:
        "Le trajet dure un peu plus d'une heure, **par le ring, l'E19 et l'A501** jusqu'à La Louvière. Vous choisissez le jour lors de la réservation ; nous convenons avec vous de l'heure de livraison. Le technicien installe les appareils par zone, pose le tuyau d'évacuation et mesure l'humidité. Dans une cité aux rues étroites, cela aide de **garder une place de stationnement libre à l'avance**.",
    },
    afhalen: {
      kop: "Venir chercher depuis La Louvière vous coûte une demi-journée",
      alinea:
        "Aartselaar se trouve à **un peu plus d'une heure de route**, vous roulez donc plus de deux heures aller-retour. Pour un appareil, c'est possible, à condition que le déshumidificateur tienne debout dans votre voiture. Pour une maison en rénovation complète, mieux vaut faire livrer et installer les appareils.",
    },
    buren: ["le-roeulx", "binche", "morlanwelz", "manage"],
    faq: [
      {
        q: "Comment sécher une maison ouvrière après le remplacement du sol ?",
        a: "Avec un déshumidificateur dans la pièce et un ventilateur radial qui souffle sur la nouvelle chape, fenêtres et portes fermées. Un sol sur terre-plein sèche surtout vers le haut, l'air au-dessus doit donc rester sec. Nous mesurons la chape au départ et avant la reprise.",
      },
      {
        q: "Un déshumidificateur passe-t-il dans un appartement au-dessus d'un commerce avec un escalier étroit ?",
        a: "L'appareil compact passe généralement. Pour les plus grands modèles, nous préférons voir l'escalier à l'avance. Signalez lors de la réservation qu'il s'agit d'un escalier étroit, et le technicien adaptera le choix des appareils.",
      },
      {
        q: "Puis-je prolonger la location si les murs sont encore humides ?",
        a: "Oui. Prévenez-nous avant la date de fin convenue, et l'appareil reste en place. En cas de doute, le technicien revient mesurer. Vous ne louez ainsi pas plus longtemps que nécessaire et vous n'arrêtez pas trop tôt.",
      },
      {
        q: "Dois-je chauffer la pièce pendant que le déshumidificateur fonctionne ?",
        a: "Dans une maison habitée et chauffée, généralement pas davantage. Dans une maison non chauffée en hiver, si : sous environ 15 °C, un déshumidificateur à condensation retire peu d'eau de l'air. Nous ajoutons alors un chauffage de chantier ou choisissons un déshumidificateur à adsorption.",
      },
    ],
    realisaties: [],
  },
  morlanwelz: {
    slug: "morlanwelz",
    title: "Déshumidificateur de chantier à Morlanwelz | Vernast",
    description:
      "Morlanwelz, Carnières ou Mont-Sainte-Aldegonde : déshumidificateur à louer pour maisons de mineurs au sol refait dans la vallée de la Haine. Livré et installé.",
    h1: "Location de déshumidificateur de chantier à Morlanwelz",
    kicker: "Hainaut · le domaine de Mariemont",
    rit: { afstand: "environ 95 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Morlanwelz se trouve entre La Louvière et Binche, dans **la vallée de la Haine**. Le lieu le plus connu est le **domaine de Mariemont**, avec son parc et le Musée royal de Mariemont.",
      "La région autour du domaine a longtemps vécu **des charbonnages**. Morlanwelz, Carnières et Mont-Sainte-Aldegonde en ont gardé **des rangées de maisons de mineurs**. Beaucoup de ces maisons trouvent aujourd'hui de nouveaux propriétaires qui les rénovent en profondeur. Depuis Aartselaar, nous y sommes en un peu plus d'une heure.",
    ],
    bouw: {
      kop: "Maisons de mineurs dans la vallée de la Haine",
      alineas: [
        "Une **maison de mineur** à Morlanwelz ou Carnières est généralement petite et profonde, avec une façade étroite, une arrière-cuisine et un sol posé sur la terre. Lors d'une rénovation, ce sol est souvent démoli et remplacé par un sol isolé avec chape. **Cette chape contient le plus d'humidité de la maison**, et c'est elle qui détermine quand le poseur de sol peut commencer.",
        "Plus bas dans la vallée, le sol est plus humide, et les murs sans barrière contre l'humidité y restent humides plus longtemps. Un déshumidificateur élimine l'humidité de construction, mais l'humidité qui remonte du sol revient. Lors de l'installation, le technicien mesure **en bas et plus haut dans le mur**. Vous ne séchez ainsi pas pendant des semaines une humidité qui revient sans cesse.",
      ],
    },
    toestellen: [
      { key: "radiaal2250", waarom: "**Sur la nouvelle chape d'une maison de mineur**, où le sol contient la plus grande partie de l'humidité." },
      { key: "ttk350", waarom: "Pour **une maison entière en rénovation** : 70 litres par jour, pour des pièces jusqu'à environ 400 m³." },
      { key: "ttk170", waarom: "Pour **l'arrière-cuisine ou une nouvelle salle de bains** à part : compact, 50 litres par jour, sur 230 V." },
      { key: "teddh20", waarom: "Pour **une maison vide rénovée en hiver** : 20 kW pour mettre l'espace froid en température, sur 400 V." },
    ],
    levering: {
      kop: "Livrer à Morlanwelz : par l'E19 et l'E42",
      alinea:
        "Le trajet dure un peu plus d'une heure, **par le ring, l'E19 et l'E42**. Vous choisissez une date de livraison lors de la réservation, et nous livrons à une heure convenue. Le technicien installe les appareils par zone, pose le tuyau d'évacuation et note **la mesure d'humidité de la chape**, qui vous servira de comparaison plus tard. Dans une rue étroite de maisons mitoyennes, une place libre devant la porte aide.",
    },
    afhalen: {
      kop: "Venir chercher à Aartselaar depuis Morlanwelz, c'est un long trajet",
      alinea:
        "Avec **un peu plus d'une heure de route dans chaque sens**, l'enlèvement n'a de sens que si vous allez de toute façon vers Anvers. Pour une maison de mineur avec un nouveau sol, il vous faut généralement un déshumidificateur et un ventilateur. La livraison avec installation et mesure d'humidité est alors le meilleur choix.",
    },
    buren: ["la-louviere", "binche", "manage", "chapelle-lez-herlaimont", "anderlues"],
    faq: [
      {
        q: "Combien de temps faut-il pour sécher une maison de mineur après une rénovation complète ?",
        a: "Comptez quelques semaines s'il y a une nouvelle chape et un nouveau plafonnage. C'est généralement la chape qui détermine la durée : plus elle est épaisse, plus c'est long. Avec un déshumidificateur et un ventilateur, cela va nettement plus vite, et la mesure montre quand le sol est prêt pour la finition.",
      },
      {
        q: "Puis-je sécher une maison qui n'est pas encore habitée ni chauffée ?",
        a: "Oui. Dans une maison vide et froide, nous plaçons en hiver un chauffage de chantier à côté du déshumidificateur, car sous environ 15 °C un déshumidificateur à condensation sèche à peine. Le chauffage demande un raccordement 400 V. Si la maison n'en a pas, nous envisageons ensemble un déshumidificateur à adsorption.",
      },
      {
        q: "Pourquoi le tuyau d'évacuation débite-t-il encore autant d'eau après une semaine ?",
        a: "Le déshumidificateur continue de retirer de l'eau de l'air tant que les murs et le sol libèrent de l'humidité. Si la quantité baisse après quelques jours, cela va dans le bon sens. Si elle reste la même, demandez-nous de revenir mesurer.",
      },
      {
        q: "Le déshumidificateur peut-il tourner dans la même pièce qu'une cuisine fraîchement posée ?",
        a: "Oui, mais ne le placez pas contre les armoires et ne dirigez pas la sortie d'air vers le plan de travail. Un réglage modéré de l'hygrostat suffit. Le bois et l'aggloméré supportent un séchage trop rapide aussi mal qu'un excès d'humidité.",
      },
    ],
    realisaties: [],
  },
};
