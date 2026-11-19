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
        q: "Que dois-je prévoir pour que la livraison à Liège se passe bien ?",
        a: "Indiquez lors de la réservation qui accueille le technicien sur place et comment il peut joindre cette personne. Pour toute question avant la livraison, écrivez-nous ou appelez-nous sans hésiter.",
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

  berloz: {
    slug: "berloz",
    title: "Déshumidificateur de chantier à louer à Berloz | Vernast",
    description:
      "Un déshumidificateur à Berloz, Corswarem ou Rosoux-Crenwick ? Livré et installé pour vos rénovations, chapes neuves et fermes, près de Gingelom et Waremme.",
    h1: "Location de déshumidificateur à Berloz",
    kicker: "Province de Liège · à la frontière du Limbourg",
    rit: { afstand: "environ 100 km", tijd: "environ une heure" },
    intro: [
      "Berloz est une petite commune agricole qui compte trois villages : **Berloz, Corswarem et Rosoux-Crenwick**. Elle touche au nord **Gingelom**, dans le Limbourg, et Waremme est la ville la plus proche. Depuis Aartselaar, nous y sommes en **environ une heure**.",
      "Des deux côtés de la frontière linguistique, le paysage est le même : **des champs limoneux vallonnés**, de la betterave et des céréales, çà et là des arbres fruitiers. Les villages se sont formés autour d'une église et de quelques grandes **fermes**. Le long des routes d'accès s'alignent des maisons de la seconde moitié du siècle dernier, et quelques nouveaux terrains à bâtir sont venus s'y ajouter.",
    ],
    bouw: {
      kop: "Fermes, maisons d'après-guerre et le limon en dessous",
      alineas: [
        "**Les maisons des années soixante et septante** sont ici en pleine rénovation : isolation, nouveaux châssis et souvent un nouveau sol avec chauffage par le sol. Il faut pour cela **une chape épaisse**, et elle doit être assez sèche avant que vous mettiez le chauffage par le sol en route ou que vous y posiez du carrelage ou du parquet.",
        "Sur un **sol limoneux**, l'eau de pluie s'infiltre lentement. Un vide sanitaire ou un sol posé sur terre-plein peut donc être plus humide que vous ne le pensez. **L'humidité de construction disparaît avec un déshumidificateur**, mais l'humidité qui continue de remonter du sol demande une autre approche.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une chape neuve avec chauffage par le sol** dans une maison rénovée : 70 litres par jour, pour tout un rez-de-chaussée." },
      { key: "ttv4500", waarom: "Sur une grande surface au sol, ce ventilateur garde l'air en mouvement, pour que **la chape sèche partout de la même façon** et pas seulement à côté du déshumidificateur." },
      { key: "ttk170", waarom: "**Pour une salle de bains ou une chambre** dont on refait le plafonnage : compact, économe avec 0,75 kW et facile à monter à l'étage." },
      { key: "ttk650", waarom: "Pour **une ferme à Corswarem ou à Rosoux-Crenwick** avec de grands volumes sous la toiture : 110 litres par jour." },
    ],
    levering: {
      kop: "Livraison à Berloz : par l'E40 jusqu'à Waremme",
      alinea:
        "Nous roulons **environ une heure** depuis Aartselaar, par l'E40 jusqu'à la sortie de Waremme, puis quelques kilomètres vers le nord. Nous planifions le trajet selon la **date de livraison** que vous choisissez lors de la réservation ; l'heure exacte est fixée sur rendez-vous. Le technicien installe et règle les appareils, et vous explique **comment vider le réservoir** ou où doit aboutir le tuyau d'évacuation.",
    },
    afhalen: {
      kop: "L'enlèvement est possible, mais le trajet est long",
      alinea:
        "Notre point d'enlèvement à Aartselaar est à **environ une heure** de route de Berloz : vous passez donc deux heures en voiture. Pour un seul petit appareil destiné à une salle de bains, c'est faisable, à condition que le déshumidificateur tienne debout dans votre voiture. Pour une chape avec chauffage par le sol, mieux vaut choisir la livraison, car l'installation compte aussi.",
    },
    buren: ["gingelom", "borgworm", "geer"],
    faq: [
      {
        q: "Quand peut-on allumer le chauffage par le sol après la coulée de la chape ?",
        a: "C'est le fournisseur de la chape ou du chauffage par le sol qui le détermine. En général, cela se fait après quelques semaines, selon un protocole de mise en chauffe où la température monte par paliers. Un déshumidificateur accélère le séchage, mais ne remplace pas ce protocole. Demandez ses consignes à votre chapiste.",
      },
      {
        q: "Un vide sanitaire sur sol limoneux est-il souvent humide ?",
        a: "Sur un sol limoneux, un vide sanitaire contient souvent plus d'humidité que sur du sable, parce que l'eau s'y infiltre lentement. Lors d'une rénovation, vérifiez si l'humidité du sol est de l'humidité de construction ou si elle vient du terrain. Si elle vient du terrain, une ventilation ou une barrière anti-humidité aidera davantage qu'un déshumidificateur.",
      },
      {
        q: "Livrez-vous aussi du côté limbourgeois, à Gingelom ?",
        a: "Oui. Gingelom et les autres communes limbourgeoises le long de la frontière linguistique ont chacune leur propre page, et nous y livrons aussi. Des deux côtés de la frontière, vous trouvez le même limon et le même type de maisons, donc l'approche est la même.",
      },
      {
        q: "Puis-je monter moi-même un déshumidificateur à l'étage ?",
        a: "Notre plus petit déshumidificateur, de 50 litres par jour, se monte dans l'escalier à deux personnes. Les appareils plus grands sont nettement plus lourds. En cas de livraison, le technicien les porte lui-même jusque dans la bonne pièce, même à l'étage.",
      },
    ],
    realisaties: [],
  },

  borgworm: {
    slug: "borgworm",
    title: "Louer un déshumidificateur de chantier à Waremme | Vernast",
    description:
      "Déshumidificateur à louer à Waremme : maison neuve en lotissement, vieille maison près de la gare ou ferme rénovée. Livré sur rendez-vous, installé.",
    h1: "Location de déshumidificateur à Waremme",
    kicker: "Liège · le cœur de la Hesbaye",
    rit: { afstand: "environ 105 km", tijd: "un peu plus d'une heure" },
    intro: [
      "**Waremme** est la ville centrale de la Hesbaye. Elle est traversée par le Geer et possède une gare sur **la ligne Bruxelles-Liège**. Par l'E40, vous êtes vite à Liège ou à Bruxelles. Depuis notre entrepôt d'Aartselaar, nous y sommes en un peu plus d'une heure.",
      "La commune comprend aussi Bettincourt, Bleret, Bovenistier, Grand-Axhe, Lantremange et Oleye. Vous y voyez encore des **fermes en carré** au milieu des champs, à côté de nouveaux quartiers résidentiels habités par des gens qui travaillent à Liège ou à Bruxelles.",
    ],
    bouw: {
      kop: "Quartier de la gare, lotissements et fermes",
      alineas: [
        "Autour de la gare se trouvent **des maisons mitoyennes anciennes et des maisons bourgeoises**, souvent avec une cave et sans barrière contre l'humidité. Si vous y démolissez une salle de bains ou refaites le plafonnage, la vieille brique rend son eau lentement. Un déshumidificateur avec un ventilateur à côté fait alors plus qu'une fenêtre ouverte.",
        "Dans les villages, il s'agit plus souvent d'une construction neuve en lotissement ou d'**une grange transformée en habitation**. Une telle grange a de grands volumes hauts et souvent une chape épaisse. Pour composer le pack de séchage, partez du volume de la pièce, et pas seulement de la surface au sol.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison neuve dans un lotissement** : 70 litres par jour et adapté jusqu'à environ 400 m³, assez pour un rez-de-chaussée avec une chape fraîche." },
      { key: "ttk650", waarom: "Pour **une grange ou une étable transformée** avec de hauts plafonds et une chape épaisse : 110 litres par jour et adapté jusqu'à environ 600 m³." },
      { key: "ttv4500", waarom: "Met l'air en mouvement le long des **vieux murs en brique d'une maison du quartier de la gare**, pour que le plafonnage sèche uniformément." },
      { key: "ttk170", waarom: "Pour un appartement ou un étage dans le centre : compact, 0,75 kW sur une prise ordinaire et facile à monter dans l'escalier." },
    ],
    levering: {
      kop: "Livraison à Waremme : sur rendez-vous, par l'E40",
      alinea:
        "Nous rejoignons Waremme **par l'E40**, en un peu plus d'une heure depuis Aartselaar. Vous choisissez une date de livraison lors de la réservation. En Wallonie, nous livrons **sur rendez-vous** : nous fixons donc l'heure avec vous. Pour une ferme avec cour intérieure, signalez si la camionnette passe sous le porche. Le technicien installe directement les appareils dans les pièces les plus humides.",
    },
    afhalen: {
      kop: "Un enlèvement depuis Waremme vous coûte une demi-journée",
      alinea:
        "Notre point d'enlèvement à Aartselaar est à **un peu plus d'une heure de route**. Avec le retour du matériel, vous faites ce trajet quatre fois. Un déshumidificateur doit en outre être **transporté debout**. Pour un seul petit appareil, c'est possible, mais pour un pack complet, la livraison est le choix le plus raisonnable.",
    },
    buren: ["berloz", "oerle", "remicourt", "donceel", "faimes"],
    faq: [
      {
        q: "Nous transformons la grange d'une ferme en carré. Combien de déshumidificateurs faut-il ?",
        a: "Cela dépend du volume de la grange et de l'épaisseur de la chape. Avec de hauts plafonds, nous calculons en mètres cubes, pas en mètres carrés. Indiquez les dimensions lors de la réservation, et nous composerons à l'avance la combinaison de déshumidificateurs et de ventilateurs.",
      },
      {
        q: "Venez-vous aussi à Bovenistier, Oleye ou Grand-Axhe ?",
        a: "Oui, nous livrons dans toutes les anciennes communes de Waremme. Pour une adresse à la campagne, signalez s'il y a un portail ou une allée étroite. Le technicien saura ainsi jusqu'où il peut approcher la camionnette de la porte.",
      },
      {
        q: "Que faire d'abord s'il y a de l'eau dans mes fondations ou ma cave ?",
        a: "Pompez d'abord l'eau stagnante et veillez à ce qu'il n'en arrive plus. Un déshumidificateur de chantier retire l'humidité de l'air, de la chape et des murs, mais pas les flaques. Ensuite, nous installons le déshumidificateur et le technicien mesure l'humidité restante du sol et des murs.",
      },
      {
        q: "Puis-je louer un déshumidificateur pour une vieille maison près de la gare ?",
        a: "Oui. Dans une maison mitoyenne ancienne sans barrière contre l'humidité, le technicien mesure au départ l'humidité des murs. Lors de la reprise, vous voyez alors si l'humidité de construction a disparu, ou si de l'humidité continue de remonter et demande une autre approche.",
      },
    ],
    realisaties: [],
  },

  braives: {
    slug: "braives",
    title: "Déshumidificateur en location à Braives, Mehaigne | Vernast",
    description:
      "Louez un déshumidificateur à Braives, Fallais, Latinne ou Avennes : livré et installé pour fermes, maisons en pierre et neuf dans la vallée de la Mehaigne.",
    h1: "Location de déshumidificateur à Braives",
    kicker: "Province de Liège · la Mehaigne et l'ancienne chaussée romaine",
    rit: { afstand: "environ 105 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Braives se trouve dans **la vallée de la Mehaigne**, là où le plateau ouvert de la Hesbaye fait place à un paysage plus vallonné. La commune comprend **Avennes, Ciplet, Fallais, Fumal, Latinne, Tourinne et Ville-en-Hesbaye**. Depuis Aartselaar, nous y sommes en **un peu plus d'une heure**.",
      "À l'époque romaine, **la chaussée de Bavay à Tongres** passait par ici. Aujourd'hui, Braives est une commune agricole avec des **fermes en brique et en calcaire**, des villages dans le fond de la vallée et des maisons plus récentes sur les versants au-dessus.",
    ],
    bouw: {
      kop: "Maisons en pierre dans la vallée, constructions neuves sur le versant",
      alineas: [
        "**Dans la vallée de la Mehaigne**, les maisons anciennes ont un soubassement en **calcaire** et des murs en brique. Des murs épais restent longtemps froids, et un mur froid rend son humidité lentement. Après une rénovation, une telle maison reste donc longtemps fraîche et humide. **La chaleur et le mouvement de l'air** y aident souvent davantage qu'un deuxième déshumidificateur.",
        "Sur les versants et le plateau, il s'agit surtout de **constructions neuves et de transformations**. Là, tout tourne autour du planning : **la chape et le plafonnage** doivent être secs avant la finition, et par un automne ou un hiver humide, cela prend du retard. Un déshumidificateur adapté au volume de la maison vous aide à tenir ce planning.",
      ],
    },
    toestellen: [
      { key: "teddh30", waarom: "**Pour une maison en pierre qui reste longtemps froide** : ce chauffage de 30 kW en 400 V amène le rez-de-chaussée à une température où le déshumidificateur travaille bien." },
      { key: "ttv4500", waarom: "Le long d'**un mur épais avec un soubassement en calcaire**, il chasse la couche d'air humide, pour que la paroi rende son humidité plus vite." },
      { key: "ttk350", waarom: "Pour **une construction neuve sur le versant** au-dessus de la Mehaigne : 70 litres par jour, pour des pièces jusqu'à environ 400 m³." },
      { key: "ttk650", waarom: "Pour **une ferme rénovée en une seule fois**, avec de nouveaux sols et du plafonnage dans toutes les ailes : 110 litres par jour." },
    ],
    levering: {
      kop: "Livraison à Braives : l'E40, puis la descente dans la vallée",
      alinea:
        "Nous roulons **un peu plus d'une heure** depuis Aartselaar, par l'E40 puis vers le sud dans la vallée de la Mehaigne. Vous fixez une **date de livraison** lors de la réservation, et comme nous livrons sur rendez-vous en Wallonie, nous convenons encore de l'heure avec vous. Dans les rues étroites des villages, indiquez-nous où la camionnette peut s'arrêter un moment. Le technicien installe ensuite les appareils pièce par pièce.",
    },
    afhalen: {
      kop: "Enlèvement : plus de deux heures aller-retour",
      alinea:
        "Notre point d'enlèvement à Aartselaar est à **un peu plus d'une heure** de Braives. Si vous devez de toute façon aller à Anvers, vous pouvez emporter un petit déshumidificateur. Pour une maison en pierre ou une ferme, mieux vaut choisir la **livraison** : c'est la disposition du déshumidificateur, du chauffage et du ventilateur qui détermine la vitesse de séchage.",
    },
    buren: ["hannuit", "wasseiges", "burdinne", "geer"],
    faq: [
      {
        q: "Pourquoi ma maison en pierre au bord de la Mehaigne sèche-t-elle si lentement ?",
        a: "Le calcaire et les murs épais en brique retiennent le froid, et des murs froids rendent leur humidité lentement. Tant que la pièce reste sous 15 °C, un déshumidificateur à condensation fonctionne en outre moins bien. Un chauffage en appui et un ventilateur le long du mur le plus humide font alors plus de différence qu'un appareil plus grand.",
      },
      {
        q: "Comment abordez-vous une ferme à plusieurs ailes ?",
        a: "Aile par aile, avec les portes fermées entre les parties. Un déshumidificateur dans une aile fait peu pour l'aile voisine. Nous examinons le volume de chaque pièce et ajoutons, si nécessaire, un appareil ou un ventilateur supplémentaire.",
      },
      {
        q: "Une cave dans la vallée de la Mehaigne est-elle toujours humide ?",
        a: "Pas toujours. Près de la rivière, la nappe phréatique peut toutefois être plus haute, et une vieille cave sans couche étanche le ressent. Après une rénovation, un déshumidificateur retire l'humidité de construction. Si le bas du mur reste humide, de l'eau arrive de l'extérieur et il faut d'abord traiter cette cause.",
      },
      {
        q: "Quand le peintre peut-il commencer après le plafonnage ?",
        a: "Dès que le plafonnage est assez sec pour la peinture qu'il utilise. Le temps nécessaire dépend de l'épaisseur de la couche, de la température et de l'humidité de l'air. Un déshumidificateur dans une pièce fermée et chauffée accélère le séchage, mais laissez le peintre mesurer avant de commencer.",
      },
    ],
    realisaties: [],
  },

  crisnee: {
    slug: "crisnee",
    title: "Votre déshumidificateur de chantier à Crisnée | Vernast",
    description:
      "Déshumidificateur à Crisnée, Kemexhe, Odeur, Thys ou Fize-le-Marsal : maison neuve en lotissement ou rénovation au village. Livré et installé sur rendez-vous.",
    h1: "Location de déshumidificateur à Crisnée",
    kicker: "Liège · entre le plateau et la périphérie liégeoise",
    rit: { afstand: "environ 110 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Crisnée se trouve **à l'extrémité est de la Hesbaye**, là où le plateau agricole ouvert rejoint la périphérie de Liège. La commune comprend Fize-le-Marsal, Kemexhe, Odeur et Thys, des villages qui ont grandi autour de leurs fermes.",
      "La proximité de **l'E40** a amené ces dernières décennies des lotissements, pour des familles qui travaillent à Liège et veulent vivre à la campagne. À côté des anciennes fermes, on trouve donc beaucoup de constructions neuves. Depuis Aartselaar, nous y sommes en un peu plus d'une heure.",
    ],
    bouw: {
      kop: "Construction neuve en lotissement, rénovation au cœur du village",
      alineas: [
        "**Dans un nouveau lotissement**, le séchage du chantier est une question de planning. La chape doit être sèche avant que le parqueteur ou le carreleur commence, le plafonnage avant l'arrivée du peintre. Et toute cette humidité de construction doit avoir quitté la maison avant que vous vous y installiez.",
        "**Au cœur des villages**, il s'agit de maisons anciennes et de fermes en brique. On y refait souvent une cuisine ou une salle de bains pendant que la famille continue d'habiter la maison. Un appareil compact sur une prise ordinaire convient alors mieux que le plus gros déshumidificateur.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une construction neuve dans un lotissement près de Crisnée** : avec 70 litres par jour, il garde dans les délais un rez-de-chaussée avec une chape fraîche." },
      { key: "ttv4500", waarom: "Dans un plan ouvert neuf, il met l'air en mouvement sur tout le sol, pour que la chape sèche **partout de manière uniforme** et pas seulement à côté du déshumidificateur." },
      { key: "ttk170", waarom: "Pour une **salle de bains ou une cuisine dans une maison habitée** : compact, 0,75 kW, et il trouve sa place dans la pièce que vous rénovez." },
      { key: "ttk650", waarom: "Pour une grande maison ou une ferme transformée où chape et plafonnage se font en même temps partout : 110 litres par jour, adapté jusqu'à environ 600 m³." },
    ],
    levering: {
      kop: "Livraison à Crisnée : tout près de l'E40",
      alinea:
        "Crisnée se trouve **près de l'E40**, à un peu plus d'une heure de route d'Aartselaar. Vous choisissez **une date de livraison** au moment de réserver. Comme nous livrons sur rendez-vous en Wallonie, nous fixons le moment avec vous à l'avance. Dans une construction neuve, le technicien demande où la chape est la plus épaisse. C'est là qu'il place le déshumidificateur, avec le ventilateur à côté.",
    },
    afhalen: {
      kop: "Un enlèvement à Aartselaar, c'est un long trajet depuis Crisnée",
      alinea:
        "Notre point d'enlèvement est à **un peu plus d'une heure de route** : rien que l'enlèvement vous coûte déjà une demi-journée. Un déshumidificateur doit en outre voyager debout dans la voiture. Pour une construction neuve avec plusieurs appareils, la livraison est plus simple : tout arrive en un seul trajet et est réglé sur place.",
    },
    buren: ["oerle", "fexhe-le-haut-clocher", "awans", "juprelle"],
    faq: [
      {
        q: "Quand peut-on poser le parquet sur la chape de notre maison neuve à Crisnée ?",
        a: "Dès que la chape descend sous la valeur indiquée par le parqueteur. Il mesure lui-même l'humidité résiduelle, mais avec un déshumidificateur de la bonne taille, vous atteignez cette valeur plus vite. Notre technicien mesure au départ, pour que vous sachiez d'où vous partez.",
      },
      {
        q: "Un déshumidificateur peut-il tourner pendant que nous habitons la maison ?",
        a: "Oui. Placez le déshumidificateur dans la pièce en rénovation et gardez la porte fermée. Cette pièce sèche alors plus vite et le reste de la maison n'en remarque presque rien. Le plus petit déshumidificateur fonctionne sur une prise ordinaire.",
      },
      {
        q: "Combien d'appareils faut-il pour une maison neuve ?",
        a: "Cela dépend du volume, de l'épaisseur de la chape et de la quantité de plafonnage. Pour une maison familiale, c'est souvent un déshumidificateur par niveau avec un ventilateur. Dans le calculateur, vous voyez le prix du pack avant de réserver.",
      },
      {
        q: "Allez-vous aussi à Kemexhe et à Odeur ?",
        a: "Oui, nous livrons dans toutes les anciennes communes de Crisnée, y compris dans les plus petits villages. Si l'adresse se trouve sur un chemin de campagne, signalez si la camionnette peut y faire demi-tour. Le technicien en tiendra compte.",
      },
    ],
    realisaties: [],
  },

  donceel: {
    slug: "donceel",
    title: "Location d'un déshumidificateur à Donceel | Vernast",
    description:
      "Déshumidificateur à louer à Donceel, Haneffe, Jeneffe ou Limont : vieilles fermes aux murs épais et maisons neuves sur le plateau hesbignon. Mesure au départ.",
    h1: "Location de déshumidificateur à Donceel",
    kicker: "Liège · une commune rurale près de Waremme",
    rit: { afstand: "environ 110 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Donceel est une petite commune agricole proche de Waremme, avec les villages de Haneffe, Jeneffe et Limont. Vous y trouvez **le plateau limoneux ouvert** de la Hesbaye : des champs, des fermes dispersées et des villages le long de quelques routes.",
      "Il n'y a pas de centre urbain. Qui construit ou rénove ici travaille le plus souvent sur **une vieille maison aux murs épais** ou sur une nouvelle habitation en bordure de village. Depuis Aartselaar, nous y sommes en un peu plus d'une heure.",
    ],
    bouw: {
      kop: "Murs épais, pièces froides et chape fraîche",
      alineas: [
        "Une vieille ferme ou une maison de village a **des murs épais en brique** qui retiennent beaucoup d'eau. Après un nouveau plafonnage ou une fuite de toiture, un tel mur sèche lentement. Une mesure d'humidité au départ montre d'où vous partez, pour que vous puissiez voir plus tard où en est le séchage.",
        "Sur le plateau ouvert, le vent a le champ libre, et **un bâtiment en gros œuvre sans châssis se refroidit vite**. Si vous coulez une chape en hiver, le séchage ralentit dès qu'il fait moins de 15 °C à l'intérieur. Un chauffage électrique à côté du déshumidificateur garde le chantier à température.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "Pour **une maison ancienne rénovée étage par étage** : 70 litres par jour, adapté jusqu'à environ 400 m³." },
      { key: "teddh30", waarom: "**Pour un chantier d'hiver sur le plateau** : il maintient un bâtiment en gros œuvre au-dessus de 15 °C, pour que le déshumidificateur à condensation garde son rendement. Il fonctionne en 400 V." },
      { key: "ttv4500", waarom: "Évacue l'air saturé le long d'**un mur épais en brique**, pour que ce mur sèche de manière plus uniforme." },
      { key: "ttk170", waarom: "Pour un plus petit chantier, comme une salle de bains ou une chambre après une fuite de toiture : compact, 0,75 kW et facile à déplacer." },
    ],
    levering: {
      kop: "Livraison à Donceel : par l'E40 et les routes de campagne",
      alinea:
        "Nous roulons par l'E40 jusqu'aux environs de Waremme, puis montons sur le plateau, soit un peu plus d'une heure au total. Vous indiquez **une date de livraison** lors de la réservation ; nous convenons avec vous du moment précis. Si l'adresse se trouve sur un chemin de campagne étroit ou derrière le porche d'une ferme, dites-le à l'avance. Le technicien saura ainsi comment y accéder.",
    },
    afhalen: {
      kop: "Un enlèvement depuis Donceel prend une bonne partie de la journée",
      alinea:
        "Aartselaar est à **un peu plus d'une heure de route**, et l'enlèvement puis le retour du matériel représentent deux allers-retours. Pour une vieille maison qui doit sécher longtemps, cela en vaut rarement la peine. En cas de livraison, le technicien mesure **les murs au départ**, et dans une vieille maison, c'est une information utile.",
    },
    buren: ["faimes", "remicourt", "borgworm", "verlaine"],
    faq: [
      {
        q: "Combien de temps faut-il pour sécher une vieille ferme après une rénovation ?",
        a: "Cela dépend de l'épaisseur des murs, du matériau, de la température et de la quantité d'humidité. Nous ne donnons donc pas de délai fixe. Le technicien mesure au départ, pour que vous puissiez comparer plus tard la quantité d'humidité déjà retirée.",
      },
      {
        q: "Puis-je faire sécher une chape en hiver dans une construction neuve non chauffée ?",
        a: "Oui, mais avec un apport de chaleur. L'air froid absorbe peu d'humidité, et sous 15 °C, un déshumidificateur à condensation travaille lentement. Un chauffage électrique à côté du déshumidificateur garde la pièce à température. Attention : ce chauffage demande un raccordement en 400 V.",
      },
      {
        q: "Livrez-vous aussi à Haneffe, Jeneffe et Limont ?",
        a: "Oui, ces anciennes communes de Donceel font partie de notre zone de livraison. Pour une adresse à la campagne, nous demandons lors de la réservation comment la camionnette peut le mieux accéder à la maison, surtout pour une ferme avec cour intérieure.",
      },
      {
        q: "Mon toit a fui et une chambre est humide. Un seul déshumidificateur suffit-il ?",
        a: "Pour une seule pièce, le plus petit déshumidificateur suffit généralement, éventuellement avec un ventilateur contre le mur le plus humide. Faites d'abord réparer la toiture, sinon l'eau continuera d'entrer. Si l'isolation sous le toit est aussi mouillée, signalez-le, car elle ne sèche pas comme un mur.",
      },
    ],
    realisaties: [],
  },

  faimes: {
    slug: "faimes",
    title: "Déshumidificateur de chantier en location à Faimes | Vernast",
    description:
      "Déshumidificateur à Faimes, Celles, Viemme, Les Waleffes, Borlez ou Aineffe : pour fermes et maisons de village en Hesbaye. Livré et réglé sur rendez-vous.",
    h1: "Location de déshumidificateur à Faimes",
    kicker: "Liège · cinq villages sur le plateau limoneux",
    rit: { afstand: "environ 105 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Faimes se trouve **au sud de Waremme** et regroupe Aineffe, Borlez, Celles, Les Waleffes et Viemme. C'est une commune agricole de Hesbaye, avec des champs sur le plateau limoneux et de grandes fermes dans chaque village.",
      "Les villages sont petits et proches les uns des autres. Pour leur travail, les habitants se rendent le plus souvent à **Waremme, Huy ou Liège**. On y transforme surtout des maisons anciennes, et de temps en temps une construction neuve s'y ajoute. Depuis Aartselaar, le trajet prend un peu plus d'une heure.",
    ],
    bouw: {
      kop: "Des fermes qui deviennent des habitations",
      alineas: [
        "Beaucoup de fermes de Faimes sont des **fermes en carré** : logis, étables et grange autour d'une cour intérieure. Qui transforme une étable ou une grange en espace de vie y met de nouveaux sols, de l'isolation et beaucoup de plafonnage, dans de grands volumes qui n'ont jamais été chauffés.",
        "**Le logis lui-même** a des murs épais en brique, parfois avec une cave sous une partie de la maison. Si vous retirez un vieux plafonnage ou un sol, de l'humidité longtemps restée dans le mur se libère. Une mesure au départ montre s'il s'agit d'humidité de construction ou d'humidité qui remonte par le bas.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une étable ou une grange qui devient espace de vie** : 110 litres par jour pour un grand volume, jusqu'à environ 600 m³." },
      { key: "radiaal2250", waarom: "Souffle de manière ciblée sur le nouveau sol d'une étable transformée, pour que **les bords et les coins** sèchent aussi vite que le centre. Avec son indice IP55, il supporte la poussière d'un chantier." },
      { key: "teddh30", waarom: "Amène une pièce qui n'a jamais été chauffée **au-dessus de 15 °C**, pour que le déshumidificateur atteigne sa capacité. Prévoyez un raccordement en 400 V." },
      { key: "ttk350", waarom: "Pour le logis de la ferme ou une maison de village en rénovation : 70 litres par jour et utilisable jusqu'à environ 400 m³." },
    ],
    levering: {
      kop: "Livraison à Faimes : jusque dans la cour",
      alinea:
        "Nous roulons **par l'E40 jusqu'aux environs de Waremme**, puis vers le village, soit un peu plus d'une heure depuis Aartselaar. Vous choisissez une date de livraison au moment de réserver. Nous convenons de l'heure avec vous, pour que quelqu'un puisse ouvrir au technicien. Pour une ferme, signalez si la camionnette peut entrer dans la cour. Le technicien installe les appareils pièce par pièce et oriente les ventilateurs vers les sols les plus humides.",
    },
    afhalen: {
      kop: "Un enlèvement depuis Faimes en vaut rarement la peine",
      alinea:
        "Le trajet jusqu'à Aartselaar prend **un peu plus d'une heure**, et pour une grange transformée, il vous faut vite plusieurs appareils. Ils ne tiennent pas tous dans une voiture. Choisissez la livraison : tout arrive en un seul trajet et est réglé sur place.",
    },
    buren: ["borgworm", "donceel", "geer"],
    faq: [
      {
        q: "Nous transformons une étable en habitation. Par où commence le séchage ?",
        a: "Par la nouvelle chape, car c'est là que se trouve le plus d'eau. Ce n'est que lorsqu'elle est assez sèche que le revêtement de sol peut être posé. Un gros déshumidificateur avec un ventilateur radial au-dessus du sol fonctionne bien ici ; en hiver, on y ajoute un chauffage.",
      },
      {
        q: "Comment savoir si mon vieux mur contient de l'humidité de construction ou des remontées capillaires ?",
        a: "En mesurant à différentes hauteurs. L'humidité de construction est répartie dans le mur et diminue avec un déshumidificateur. L'humidité ascensionnelle est la plus forte en bas et revient sans cesse. Le technicien mesure au départ et vous dit ce qu'il constate.",
      },
      {
        q: "Pouvez-vous livrer dans une ferme dont le porche est étroit ?",
        a: "La plupart du temps, oui. La plupart des appareils sont sur roulettes, et le technicien peut les pousser sur une bonne distance. Indiquez lors de la réservation la largeur du porche et la distance entre le chantier et la rue, et nous planifierons la livraison en conséquence.",
      },
      {
        q: "Livrez-vous aussi à Celles et à Viemme ?",
        a: "Oui, les cinq villages de Faimes font partie de notre zone de livraison : Aineffe, Borlez, Celles, Les Waleffes et Viemme. En Wallonie, nous livrons sur rendez-vous ; vous choisissez la date de livraison lors de la réservation.",
      },
    ],
    realisaties: [],
  },

  "fexhe-le-haut-clocher": {
    slug: "fexhe-le-haut-clocher",
    title: "Déshumidificateur à Fexhe-le-Haut-Clocher | Vernast",
    description:
      "Déshumidificateur à Fexhe, Freloux, Noville, Roloux ou Voroux-Goreux : maisons neuves et fermes entre Waremme et Liège. Livré et installé sur rendez-vous.",
    h1: "Location de déshumidificateur à Fexhe-le-Haut-Clocher",
    kicker: "Liège · le village de la Paix de Fexhe",
    rit: { afstand: "environ 115 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Vous connaissez peut-être Fexhe-le-Haut-Clocher pour **la Paix de Fexhe** de 1316, qui a limité le pouvoir du prince-évêque de Liège. Aujourd'hui, c'est une commune rurale avec les villages de Freloux, Noville, Roloux et Voroux-Goreux.",
      "La commune se trouve **entre Waremme et Liège**, non loin de l'aéroport de Bierset. Cette situation attire des familles qui travaillent dans la région liégeoise : à côté des fermes et des maisons de village, on trouve donc aussi des maisons neuves. Depuis Aartselaar, vous y êtes en voiture en un peu plus d'une heure.",
    ],
    bouw: {
      kop: "Entre le plateau et la périphérie",
      alineas: [
        "**Dans un nouveau lotissement**, il est question de chape, de plafonnage et parfois d'une cave en construction. Si les fondations ou la cave sont restées ouvertes pendant une période pluvieuse, le sol et les murs contiennent davantage d'eau. Un déshumidificateur de capacité suffisante permet alors de tenir le planning du poseur de sol.",
        "**Dans les vieux centres de village** se trouvent des maisons et des fermes en brique, parfois avec un rez-de-chaussée plus bas que la rue. Qui y renouvelle un sol ou abat un mur trouve souvent plus d'humidité que prévu. Le technicien mesure lors de l'installation, pour que vous sachiez à quoi vous attendre.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison neuve à Voroux-Goreux ou à Fexhe** : avec 70 litres par jour, il sèche un rez-de-chaussée avec une chape fraîche." },
      { key: "revolution", waarom: "Pour **une cave en construction** qui reste froide et moite : le déshumidificateur à adsorption absorbe l'humidité même à basse température et évacue l'air sec par des gaines." },
      { key: "ttv4500", waarom: "Dans un rez-de-chaussée plus bas que la rue, il met l'air en mouvement, pour que **le bas des murs** sèche aussi." },
      { key: "ttk170", waarom: "Pour une rénovation dans une maison de village : compact, 0,75 kW et facile à monter à l'étage." },
    ],
    levering: {
      kop: "Livraison à Fexhe : par l'E40 en direction de Liège",
      alinea:
        "Fexhe se trouve **près de l'E40, juste avant Liège**, à un peu plus d'une heure de route d'Aartselaar. Vous choisissez vous-même la date de livraison lors de la réservation ; nous convenons avec vous de l'heure précise. Pour une construction neuve, dites-nous **quelles pièces ont déjà leur chape**. Le technicien y place d'abord le déshumidificateur et oriente le ventilateur vers le sol le plus humide.",
    },
    afhalen: {
      kop: "Enlèvement depuis Fexhe : un peu plus d'une heure par trajet",
      alinea:
        "Jusqu'à notre point d'enlèvement à Aartselaar, il faut **un peu plus d'une heure de route**, et autant pour revenir. Un déshumidificateur doit en outre voyager debout. Pour un seul petit appareil, c'est possible, mais pour un pack, la livraison vous demande moins de travail.",
    },
    buren: ["crisnee", "awans", "remicourt", "grace-hollogne"],
    faq: [
      {
        q: "Notre cave en construction est restée ouverte sous la pluie pendant des semaines. Que faire ?",
        a: "Pompez d'abord l'eau stagnante, ensuite seulement viendra le séchage. Dans une cave froide et humide, un déshumidificateur à adsorption fonctionne mieux qu'un appareil à condensation, parce qu'il absorbe l'humidité même à basse température. Indiquez lors de la réservation la taille de la cave.",
      },
      {
        q: "Pouvez-vous livrer tout près de l'aéroport de Bierset ?",
        a: "Oui. Fexhe et les communes autour de l'aéroport font partie de notre zone de livraison. Vous choisissez une date de livraison lors de la réservation, et le technicien installe et règle les appareils sur place.",
      },
      {
        q: "Pourquoi ma chape sèche-t-elle plus lentement que le chapiste ne l'avait promis ?",
        a: "Souvent, la pièce est trop froide ou mal ventilée, ou la chape est plus épaisse que prévu. Dans un air immobile, la couche juste au-dessus du sol se sature. Un déshumidificateur avec un ventilateur à côté évacue cette humidité, et la mesure au départ vous donne un point de référence.",
      },
      {
        q: "Un déshumidificateur est-il nécessaire dans une construction neuve quand il fait sec dehors ?",
        a: "Généralement, oui. Même par temps sec, le sol et les murs d'une construction neuve contiennent beaucoup d'eau, et fenêtres fermées, elle ne peut aller nulle part. Ouvrir les fenêtres aide un peu, mais un déshumidificateur retire l'humidité de manière plus ciblée et plus rapide.",
      },
    ],
    realisaties: [],
  },

  geer: {
    slug: "geer",
    title: "Louer un déshumidificateur de chantier à Geer | Vernast",
    description:
      "Un déshumidificateur à Geer, Hollogne-sur-Geer, Omal, Darion ou Boëlhe ? Livré et installé pour fermes et maisons de village le long du cours supérieur du Geer.",
    h1: "Location de déshumidificateur à Geer",
    kicker: "Province de Liège · le long du jeune Geer",
    rit: { afstand: "environ 105 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Geer porte le nom de **la rivière** qui la traverse, le Geer, qui n'est ici qu'un petit ruisseau en route vers Tongres et Maastricht. Il passe par **Hollogne-sur-Geer**, et la commune compte aussi **Boëlhe, Darion, Ligney, Lens-Saint-Servais et Omal**.",
      "C'est une région agricole ouverte, avec des **fermes en carré**, de la betterave et des céréales, et des villages qui ont grandi le long de la vallée. Sous le limon se trouve **de la craie** avec une importante nappe phréatique. Depuis Aartselaar, nous rejoignons Geer en **un peu plus d'une heure**.",
    ],
    bouw: {
      kop: "Une vallée dans le plateau, des fermes sur ses bords",
      alineas: [
        "Le long du Geer, les maisons de village sont **plus basses que les champs** qui les entourent. Après un hiver humide, la nappe est plus haute dans la vallée, et une vieille cave ou un sol sur terre-plein **le ressent**. Lors d'une rénovation, vérifiez donc d'abord si l'eau arrive encore par le bas. Le séchage n'a de sens qu'une fois la cause supprimée.",
        "Plus haut sur le plateau se dressent des **fermes en carré**, avec un logis, des étables et des granges autour d'une cour. Qui en fait une habitation ou un gîte coule **de nouveaux sols** et plafonne de grandes surfaces de murs. Un tel projet avance par phases. Un déshumidificateur qui passe d'une aile à l'autre garde la finition dans les délais.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison de village au bord du Geer** après la rénovation du rez-de-chaussée : 70 litres par jour, sur une prise ordinaire." },
      { key: "radiaal2250", waarom: "Sur **un sol sur terre-plein renouvelé** qui reste humide, ce ventilateur radial souffle l'air de manière ciblée jusque dans les coins." },
      { key: "ttk650", waarom: "**Pour une aile de ferme avec nouveau sol et plafonnage** dans un seul volume ouvert : 110 litres par jour, pour des pièces jusqu'à environ 600 m³." },
      { key: "teddh30", waarom: "Les étables et les granges n'ont jamais été chauffées. Ce chauffage de 30 kW en 400 V amène la pièce à température, pour que **le déshumidificateur puisse bien travailler**." },
    ],
    levering: {
      kop: "Livraison à Geer : par l'E40, sortie Waremme",
      alinea:
        "Nous prenons **l'E40 jusqu'à Waremme**, puis roulons quelques kilomètres vers l'ouest jusqu'au Geer, soit **un peu plus d'une heure** depuis Aartselaar. Vous indiquez une **date de livraison** au moment de réserver, puis nous convenons par téléphone de l'heure de livraison. Si la ferme a une cour intérieure, signalez **si le porche est assez haut** pour une camionnette. Sinon, nous déchargeons dehors.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : depuis Geer, souvent un détour",
      alinea:
        "Aller-retour, vous êtes **plus de deux heures** en route, et qui travaille dans la région passe rarement par Anvers. Une livraison vous épargne ce trajet. Le technicien qui apporte les appareils note en outre **une première valeur d'humidité**, pour que vous voyiez plus tard si le séchage avance.",
    },
    buren: ["hannuit", "braives", "berloz", "borgworm"],
    faq: [
      {
        q: "Une cave proche du Geer est-elle plus souvent touchée par la nappe phréatique ?",
        a: "C'est possible, surtout après un hiver humide, quand l'eau est plus haute dans la vallée. Un déshumidificateur retire l'humidité de construction des murs et du sol, mais pas l'eau qui continue d'arriver. Dans ce cas, l'étanchéité ou l'évacuation doit d'abord être mise en ordre.",
      },
      {
        q: "Comment sécher une étable qui devient une pièce de vie ?",
        a: "Par phases et avec la pièce fermée. Fermez d'abord les ouvertures, coulez ensuite le nouveau sol, puis faites tourner un gros déshumidificateur avec un chauffage. Une vieille étable a des murs froids, et sans chaleur, le séchage y est lent.",
      },
      {
        q: "Qui doit être sur le chantier lors de la livraison ?",
        a: "Quelqu'un qui peut ouvrir l'accès et sait dans quelles pièces les appareils doivent aller. Ce peut aussi être votre entrepreneur. Indiquez son nom et son numéro de téléphone lors de la réservation, et nous prendrons rendez-vous directement avec lui.",
      },
      {
        q: "Combien de semaines un déshumidificateur reste-t-il dans une ferme après la coulée du sol ?",
        a: "Cela dépend de l'épaisseur de la chape, de la température de la pièce et de l'humidité de l'air. Dans une étable froide avec un sol épais, cela prend plus longtemps que dans une maison chauffée. Laissez le poseur de sol mesurer avant de commencer, car seule cette mesure dit si le sol est prêt.",
      },
    ],
    realisaties: [],
  },

  hannuit: {
    slug: "hannuit",
    title: "Location de déshumidificateur de chantier à Hannut | Vernast",
    description:
      "Déshumidificateur à louer à Hannut ? Livré et installé pour fermes et constructions neuves à Thisnes, Crehen, Merdorp et dans les autres villages de la commune.",
    h1: "Location de déshumidificateur à Hannut",
    kicker: "Province de Liège · la petite ville de marché de la Hesbaye",
    rit: { afstand: "environ 95 km", tijd: "environ une heure" },
    intro: [
      "**Hannut** est la petite ville de marché de **la Hesbaye**. Autour du centre s'étendent des villages agricoles sur un **plateau limoneux** ouvert, comme **Thisnes, Crehen, Merdorp, Avin et Lens-Saint-Remy**. Depuis Aartselaar, nous y sommes en **environ une heure**.",
      "La région compte beaucoup de **grandes fermes en carré** avec une cour intérieure, entre des champs de betteraves et de céréales. Autour du centre et en bordure des villages, de nouveaux lotissements sont apparus ces dernières décennies. Sur nos chantiers ici, il s'agit donc souvent d'**une ferme en transformation** ou d'**une maison neuve** qui doit sécher avant la finition.",
    ],
    bouw: {
      kop: "Des fermes qui deviennent des habitations, des lotissements sur limon",
      alineas: [
        "Beaucoup de propriétaires **transforment une ferme en carré** en habitation ou en plusieurs logements. Les anciennes étables et granges ont **des murs épais sans barrière contre l'humidité** et un grand volume sous la toiture. Avec une nouvelle chape et du plafonnage en plus, beaucoup d'eau entre dans cet espace. Un seul déshumidificateur suffit alors rarement, c'est pourquoi nous examinons le volume pièce par pièce.",
        "Sur un **sol limoneux**, l'eau de pluie s'infiltre lentement. Après une période pluvieuse, une fouille reste longtemps détrempée, et dans une cave en construction, l'eau stagne. Pompez d'abord cette eau. Ensuite, **la dalle et les parois** doivent perdre leur humidité avant que vous puissiez poursuivre la finition.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une étable ou une grange transformée** avec un faîte élevé : 110 litres par jour, pour des pièces jusqu'à environ 600 m³." },
      { key: "ttk350", waarom: "Pour une maison neuve dans l'un des villages : 70 litres par jour, adapté à un rez-de-chaussée avec **une chape et un plafonnage frais**." },
      { key: "radiaal2250", waarom: "**Pour une cave en construction** restée humide : ce ventilateur radial souffle l'air à ras de la dalle et jusque dans les coins." },
      { key: "teddh30", waarom: "Une ferme en rénovation est rarement chauffée. Ce chauffage de 30 kW en 400 V amène **une pièce froide aux murs épais** au-dessus de 15 °C, pour que le déshumidificateur travaille mieux." },
    ],
    levering: {
      kop: "Livraison à Hannut : par l'E40 et le plateau",
      alinea:
        "Depuis Aartselaar, nous roulons **environ une heure** par l'E40 et les routes régionales du plateau. Vous choisissez une **date de livraison** lors de la réservation, et en Wallonie, nous livrons sur rendez-vous. Pour une ferme, précisez **par quel porche** la camionnette peut entrer dans la cour. Le technicien installe les appareils pièce par pièce et effectue une première mesure d'humidité.",
    },
    afhalen: {
      kop: "Enlèvement : deux heures de route pour un appareil",
      alinea:
        "Notre point d'enlèvement à Aartselaar est à **environ une heure** de Hannut : aller-retour, vous y perdez une demi-matinée. Pour une ferme ou une maison entière, mieux vaut choisir la livraison : **la livraison et l'installation sont comprises dans le prix du pack**, et vous ne devez pas soulever d'appareils lourds.",
    },
    buren: ["lijsem", "wasseiges", "braives", "geer"],
    faq: [
      {
        q: "Combien de déshumidificateurs faut-il dans une grange transformée ?",
        a: "Cela dépend du volume jusque sous le faîte, pas de la surface au sol. Une grange au toit ouvert contient beaucoup plus d'air qu'un séjour de même surface. Un gros déshumidificateur avec un ventilateur suffit souvent, à condition de fermer l'espace le mieux possible.",
      },
      {
        q: "Pourquoi mes fondations sur sol limoneux restent-elles humides si longtemps ?",
        a: "Le limon laisse passer l'eau bien plus lentement que le sable. Après une période pluvieuse, l'eau reste dans et autour de la fouille au lieu de s'infiltrer. Pompez d'abord l'eau stagnante. Ensuite, un déshumidificateur retire l'humidité de la dalle de béton et des parois.",
      },
      {
        q: "Puis-je faire installer un déshumidificateur dans une ferme sans chauffage ?",
        a: "Oui, mais prévoyez alors un chauffage en plus. Sous 15 °C, un déshumidificateur à condensation travaille lentement, et une vieille ferme aux murs épais reste froide au printemps et en automne. Le chauffage amène d'abord la pièce à température, ensuite elle sèche plus facilement.",
      },
      {
        q: "Livrez-vous aussi dans les villages autour de Hannut, comme Merdorp ou Avernas-le-Bauduin ?",
        a: "Oui, nous livrons dans toutes les anciennes communes, y compris dans les villages en direction de Wasseiges et de Landen. Si votre chantier se trouve dans une ferme isolée, décrivez lors de la réservation comment y accéder et où la camionnette peut décharger.",
      },
    ],
    realisaties: [],
  },

  lijsem: {
    slug: "lijsem",
    title: "Déshumidificateur de chantier à louer à Lincent | Vernast",
    description:
      "Déshumidificateur à Lincent, Pellaines ou Racour, juste de l'autre côté de la frontière linguistique près de Landen ? Livré, installé pour rénovation et chape.",
    h1: "Location de déshumidificateur à Lincent",
    kicker: "Province de Liège · une commune sur la frontière linguistique",
    rit: { afstand: "environ 85 km", tijd: "un peu plus de cinquante minutes" },
    intro: [
      "**Lincent** est une petite commune de Hesbaye. Outre le village lui-même, elle comprend **Pellaines et Racour**. La commune touche **Landen**, dans le Brabant flamand, et depuis Aartselaar, vous y êtes en **un peu plus de cinquante minutes**.",
      "Le paysage est fait de **champs limoneux vallonnés**, de betteraves et de céréales, et de villages autour d'une église, avec çà et là une **ferme en carré**. Il s'y construit peu de maisons neuves. La plupart des chantiers sont des **rénovations de maisons de village existantes**.",
    ],
    bouw: {
      kop: "Maisons de village en brique et un plateau sans abri",
      alineas: [
        "Beaucoup de maisons anciennes de Lincent et de Racour sont **construites en brique**, souvent avec une cave sous la partie avant et un sol sur terre-plein à l'arrière. Lors d'une rénovation, ce vieux sol est enlevé et remplacé par **de l'isolation et une nouvelle chape**. Cette chape doit être sèche avant la pose du parquet ou du carrelage, et votre poseur le mesure avant de commencer.",
        "Sur le plateau ouvert, le vent souffle fort. Une maison en rénovation sans châssis ou avec une façade ouverte se refroidit **vite** en hiver, et l'air froid absorbe peu d'humidité. **Fermez donc d'abord la pièce** et ne faites tourner le déshumidificateur qu'ensuite, avec un chauffage si nécessaire.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "Pour **une maison de village que vous rénovez pièce par pièce** : 50 litres par jour, compact et facile à déplacer." },
      { key: "ttk350", waarom: "**Pour une nouvelle chape** sur tout le rez-de-chaussée, une fois le vieux sol sur terre-plein enlevé : 70 litres par jour." },
      { key: "teddh20", waarom: "Sur un chantier d'hiver, ce chauffage de 20 kW (400 V) amène une pièce fermée à une température où le déshumidificateur travaille efficacement." },
      { key: "ttv4500", waarom: "Ce ventilateur garde l'air en mouvement au-dessus d'une chape fraîche, pour que le sol sèche **uniformément** et pas seulement juste à côté du déshumidificateur." },
    ],
    levering: {
      kop: "Livraison à Lincent : juste de l'autre côté de la frontière linguistique",
      alinea:
        "Lincent se trouve **juste après Landen**. Nous roulons par l'E40, puis par des routes secondaires pour le dernier tronçon, soit **un peu plus de cinquante minutes** au total. Vous choisissez une **date de livraison** lors de la réservation ; nous convenons ensuite avec vous du moment précis, comme partout en Wallonie. Le technicien met les appareils en place, les raccorde et effectue une première mesure d'humidité.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : faisable si vous allez de toute façon vers Anvers",
      alinea:
        "Notre point d'enlèvement est à **un peu plus de cinquante minutes** de route de Lincent. Pour **un seul petit déshumidificateur**, c'est faisable, surtout si vous devez de toute façon passer près d'Anvers. Un déshumidificateur doit voyager debout dans la voiture. Pour un pack avec chauffage et ventilateur, mieux vaut choisir la livraison.",
    },
    buren: ["hannuit", "landen"],
    faq: [
      {
        q: "Mon entrepreneur sera sur le chantier à la livraison. Comment l'organiser ?",
        a: "Indiquez lors de la réservation qui sera présent sur le chantier. Nous convenons alors de la livraison directement avec la bonne personne, et le technicien sait à qui s'adresser sur place.",
      },
      {
        q: "Combien de temps une nouvelle chape doit-elle sécher avant la pose du parquet ?",
        a: "Cela dépend de l'épaisseur, de la composition, de la température et de l'humidité de l'air. Le parquet demande une humidité résiduelle plus basse que le carrelage. Avec un déshumidificateur et un ventilateur, cela va plus vite, mais laissez toujours le parqueteur mesurer avant la pose.",
      },
      {
        q: "Un chauffage est-il utile si les châssis ne sont pas encore posés ?",
        a: "Un chauffage dans un espace ouvert réchauffe surtout l'air extérieur. Fermez d'abord les baies avec de la bâche ou des panneaux, pour que la chaleur et l'air sec restent à l'intérieur. Ce n'est qu'alors qu'un chauffage a du sens, et le déshumidificateur travaille à un rythme raisonnable, même en hiver.",
      },
      {
        q: "Puis-je faire sécher une pièce à la fois ?",
        a: "Oui, et lors d'une rénovation par phases, c'est souvent la meilleure approche. Un petit déshumidificateur dans une pièce fermée fait plus qu'un grand dans une maison ouverte. Une fois la pièce sèche, vous déplacez l'appareil dans la suivante.",
      },
    ],
    realisaties: [],
  },

  chaudfontaine: {
    slug: "chaudfontaine",
    title: "Déshumidificateur à louer à Chaudfontaine | Vernast",
    description:
      "Louez un déshumidificateur à Chaudfontaine, Embourg, Beaufays ou Vaux-sous-Chèvremont : séchage après une inondation dans la vallée ou une rénovation.",
    h1: "Location de déshumidificateur à Chaudfontaine",
    kicker: "Liège · la station thermale de la vallée de la Vesdre",
    rit: { afstand: "environ 135 km", tijd: "près d'une heure et demie" },
    intro: [
      "Chaudfontaine se trouve juste au sud-est de Liège, **dans la vallée de la Vesdre**. La commune est connue pour sa source d'eau chaude et pour l'eau minérale qui porte son nom. **Embourg, Beaufays et Vaux-sous-Chèvremont** en font aussi partie.",
      "Dans la vallée, les maisons se serrent entre la rivière, la route et la ligne de chemin de fer. Sur les hauteurs d'Embourg et de Beaufays s'étendent des quartiers plus aérés, avec des **maisons quatre façades**. Depuis notre entrepôt d'Aartselaar, nous mettons près d'une heure et demie pour rejoindre Chaudfontaine.",
    ],
    bouw: {
      kop: "Sécher après l'eau dans la vallée, rénover sur les hauteurs",
      alineas: [
        "**Les inondations de juillet 2021** ont durement touché les habitations le long de la Vesdre. Des murs qui ont absorbé l'eau pendant des jours la rendent lentement, et les sols du rez-de-chaussée doivent souvent être refaits. Une telle maison sèche par étapes. Une **mesure d'humidité** lors de l'installation montre combien d'eau les murs contiennent encore.",
        "Sur les hauteurs, il s'agit le plus souvent d'une rénovation : une nouvelle salle de bains, une extension ou **une chape qui doit être sèche** avant le passage du parqueteur. C'est de l'humidité de construction. Elle disparaît plus vite si vous gardez les fenêtres fermées et faites tourner un déshumidificateur par étage.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour un rez-de-chaussée resté longtemps sous l'eau** : 110 litres par jour et une portée jusqu'à 600 m³, pour que murs et sol sèchent ensemble." },
      { key: "radiaal2250", waarom: "Ce ventilateur radial souffle **au ras d'un sol mouillé et le long des plinthes**, là où l'eau reste le plus longtemps après une inondation." },
      { key: "ttk350", waarom: "Pour une rénovation à Embourg ou à Beaufays : 70 litres par jour et une portée jusqu'à 400 m³. C'est suffisant pour un rez-de-chaussée avec une chape fraîche ou un nouveau plafonnage." },
      { key: "teddh30", waarom: "Ce chauffage de 30 kW porte **une maison inoccupée et non chauffée** au-dessus de 15 °C, la température à partir de laquelle un déshumidificateur à condensation travaille bien. Il demande un raccordement en 400 V." },
    ],
    levering: {
      kop: "Livraison à Chaudfontaine : par Liège jusque dans la vallée",
      alinea:
        "Depuis Aartselaar, nous roulons près d'une heure et demie, **par l'E313 vers Liège**, puis dans la vallée de la Vesdre. En Wallonie, nous livrons **sur rendez-vous** : vous choisissez une date de livraison lors de la réservation et nous confirmons l'heure. Le long de la route de la vallée, le stationnement est parfois serré. Indiquez à l'avance où la camionnette peut s'arrêter, et le technicien installera les appareils directement au bon endroit.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : un long trajet",
      alinea:
        "Venir chercher le matériel vous-même est possible, mais vous roulez près d'une heure et demie à l'aller et autant au retour. Pour un seul déshumidificateur, cela en vaut rarement la peine. Après des dégâts des eaux, la livraison est le meilleur choix : **le technicien mesure au départ**, et cette mesure vous permet de vérifier plus tard si un mur est sec.",
    },
    buren: ["luik-stad", "fleron", "trooz", "sprimont", "esneux"],
    faq: [
      {
        q: "Ma maison au bord de la Vesdre a subi des dégâts des eaux. Combien de temps doit-elle sécher ?",
        a: "Cela dépend de la durée pendant laquelle l'eau a stagné et de la composition du mur. Un mur en briques qui a absorbé l'eau pendant des jours la rend lentement : comptez en semaines, pas en jours. Une mesure d'humidité à l'installation et à l'enlèvement montre où vous en êtes.",
      },
      {
        q: "Puis-je commencer les réparations dès que les murs semblent secs au toucher ?",
        a: "Mieux vaut ne pas se fier au toucher. Un mur peut paraître sec en surface alors que l'humidité reste plus en profondeur, et un nouvel enduit ou une peinture l'enferme alors. Faites mesurer avant le début de la finition ; le technicien le fait lorsqu'il vient reprendre les appareils.",
      },
      {
        q: "Livrez-vous aussi à Embourg et à Beaufays ?",
        a: "Oui, Embourg et Beaufays sont des sections de Chaudfontaine, et nous y livrons sur rendez-vous, comme à Vaux-sous-Chèvremont. Sur les hauteurs, il s'agit le plus souvent d'une rénovation, et un déshumidificateur par étage avec les fenêtres fermées suffit alors souvent.",
      },
      {
        q: "Pourquoi un chauffage à côté du déshumidificateur dans une maison inoccupée ?",
        a: "Un déshumidificateur à condensation fonctionne au mieux au-dessus de 15 °C. Une maison inoccupée et non chauffée après des dégâts des eaux atteint rarement cette température au printemps et en automne. Le chauffage amène la pièce à température, pour que le déshumidificateur récupère nettement plus d'eau par jour.",
      },
    ],
    realisaties: [],
  },

  "comblain-au-pont": {
    slug: "comblain-au-pont",
    title: "Louer un déshumidificateur à Comblain-au-Pont | Vernast",
    description:
      "Déshumidificateur à louer à Comblain-au-Pont et Poulseur, au confluent de l'Amblève et de l'Ourthe. Installé et mesuré par un technicien.",
    h1: "Location de déshumidificateur à Comblain-au-Pont",
    kicker: "Liège · là où l'Amblève se jette dans l'Ourthe",
    rit: { afstand: "environ 150 km", tijd: "un peu plus d'une heure et demie" },
    intro: [
      "Comblain-au-Pont se trouve là où **l'Amblève se jette dans l'Ourthe**. Des rochers calcaires dominent le village, et les environs comptent des grottes et d'anciennes carrières. **Poulseur**, un peu plus en aval sur l'Ourthe, fait aussi partie de la commune.",
      "C'est une petite commune, avec un centre dans la vallée et des hameaux sur les hauteurs. Au centre, les maisons se trouvent **entre la rivière et la paroi rocheuse**, avec peu de place sur les côtés. Depuis Aartselaar, nous roulons un peu plus d'une heure et demie pour y arriver.",
    ],
    bouw: {
      kop: "Deux rivières au pied, la roche dans le dos",
      alineas: [
        "Au confluent de deux rivières, l'eau peut monter vite après de fortes pluies. Les maisons de la vallée ont souvent **une cave ou un rez-de-chaussée** proche du niveau de l'eau, et après une inondation, ils doivent sécher à fond. Les maisons plus anciennes sans barrière d'étanchéité aspirent en outre l'humidité du sol. Vous le remarquez à un **rez-de-chaussée froid qui sent le renfermé**.",
        "Un mur adossé à la paroi rocheuse reste froid et humide, car le calcaire laisse passer l'eau. Lors d'une rénovation, le technicien fait la distinction entre **humidité de construction et eau venant de la roche**. La première, un déshumidificateur l'élimine ; pour la seconde, il faut intervenir sur le mur.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Après une inondation** : 110 litres par jour et une portée jusqu'à 600 m³, pour qu'une cave ou un rez-de-chaussée inondé commence à sécher tout de suite." },
      { key: "radiaal2250", waarom: "Pour **un sol mouillé dans une maison au bord de l'eau** : ce ventilateur radial souffle de manière ciblée sur le carrelage et dans les coins, là où l'eau stagne." },
      { key: "teddh20", waarom: "Ce chauffage de 20 kW porte **un rez-de-chaussée froid** au-dessus de 15 °C, pour que le déshumidificateur rende mieux. Prévoyez un raccordement en 400 V." },
      { key: "ttk170", waarom: "Pour un étage ou une petite rénovation à Poulseur : compact, économe et facile à monter par un escalier étroit." },
    ],
    levering: {
      kop: "Livraison à Comblain-au-Pont : par la vallée de l'Ourthe",
      alinea:
        "Nous roulons un peu plus d'une heure et demie, **par Liège et la vallée de l'Ourthe** ou par l'E25 et Aywaille. En Wallonie, nous livrons sur rendez-vous, à la date de livraison que vous choisissez lors de la réservation. Au centre du village, la place entre la rivière et la roche est limitée. **Indiquez-nous où la camionnette peut s'arrêter un moment**, et le technicien déchargera sans difficulté.",
    },
    afhalen: {
      kop: "Venir chercher le matériel, c'est ici une longue journée sur la route",
      alinea:
        "Depuis Comblain-au-Pont, Aartselaar est à **un peu plus d'une heure et demie de route**, dans un seul sens. Après une inondation, la livraison est le choix logique : vous restez près de votre maison et le technicien mesure tout de suite son degré d'humidité.",
    },
    buren: ["esneux", "sprimont", "aywaille", "hamoir", "anthisnes"],
    faq: [
      {
        q: "Pourquoi mon rez-de-chaussée sent-il le renfermé, même sans inondation ?",
        a: "Les maisons plus anciennes de la vallée n'ont souvent pas de barrière d'étanchéité, si bien que les murs aspirent l'humidité du sol. Un déshumidificateur retire cette humidité de l'air et des murs et rend la pièce à nouveau agréable, mais l'apport par le bas ne cesse qu'avec une intervention sur le mur lui-même.",
      },
      {
        q: "Un déshumidificateur peut-il tourner pendant que j'habite la maison ?",
        a: "Oui. Les déshumidificateurs et les ventilateurs fonctionnent sur une prise standard ; seul le chauffage demande du courant triphasé. Ils font un bruit constant, comme un ventilateur. Placez-les de préférence dans une pièce porte fermée. Lors de l'installation, le technicien vous montre comment vider le réservoir ou faire s'écouler le tuyau.",
      },
      {
        q: "Livrez-vous aussi à Poulseur et sur le plateau ?",
        a: "Oui, Poulseur et les hameaux sur les hauteurs font partie de Comblain-au-Pont, et nous y livrons sur rendez-vous. Pour une maison sur le plateau, décrivez le chemin d'accès, pour que le technicien sache s'il lui faut un diable.",
      },
      {
        q: "Comment savoir si l'humidité de mon mur vient de la roche ?",
        a: "Une mesure d'humidité à différentes hauteurs et à différents moments donne une bonne image. Si le mur côté roche reste mouillé alors que le reste sèche, l'eau vient de l'extérieur. Le technicien le mesure au début et lors de l'enlèvement.",
      },
    ],
    realisaties: [],
  },

  dalhem: {
    slug: "dalhem",
    title: "Déshumidificateur de chantier à louer à Dalhem | Vernast",
    description:
      "Déshumidificateur à louer à Dalhem : fermes et maisons de village dans les collines le long de la Berwinne, de Berneau à Warsage et Bombaye. Livré et installé.",
    h1: "Location de déshumidificateur à Dalhem",
    kicker: "Liège · la campagne verte le long de la Berwinne",
    rit: { afstand: "environ 130 km", tijd: "près d'une heure et demie" },
    intro: [
      "Dalhem se trouve **entre la vallée de la Meuse et le Pays de Herve**, dans un paysage vallonné de prairies, de haies et de vergers. Le vieux centre est situé au bord de **la Berwinne**, un petit affluent de la Meuse. Depuis Aartselaar, nous y sommes en près d'une heure et demie.",
      "La commune compte huit villages : **Berneau, Bombaye, Dalhem, Feneur, Mortroux, Neufchâteau, Saint-André et Warsage**. Au nord, Dalhem touche **Fourons**. Qui rénove ici travaille souvent sur une ancienne ferme ou sur une maison dans un petit lotissement.",
    ],
    bouw: {
      kop: "Fermes en pierre naturelle, lotissements sur la colline",
      alineas: [
        "La région se caractérise par des **fermes et maisons de village en briques**, souvent sur un soubassement en pierre naturelle. Qui transforme une étable ou une grange en logement coule **un nouveau sol**, monte des cloisons et pose du plafonnage partout. Dans un grand volume ouvert, cette humidité de construction ne disparaît pas d'elle-même, et encore moins en automne.",
        "Dans les fonds le long de la Berwinne, le sol est humide et le rez-de-chaussée y reste plus frais que plus haut sur la pente. Sur les collines se trouvent les constructions neuves, avec **une chape et un plafonnage** qui doivent sécher avant la finition. Lors de l'installation, le technicien évalue le volume et répartit les appareils en conséquence.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une étable ou une grange transformée** avec un grand volume ouvert : 110 litres par jour, jusqu'à environ 600 m³." },
      { key: "teddh30", waarom: "**Pour une ferme dont la finition se fait en automne.** Ce chauffage de 30 kW réchauffe une pièce froide, pour que le séchage avance. Il demande du 400 V." },
      { key: "ttv4500", waarom: "Dans un espace haut sous le toit, ce ventilateur garde l'air en mouvement, pour que **le plafonnage sèche uniformément jusqu'en haut**." },
      { key: "ttk350", waarom: "Pour **une maison de village à Warsage ou à Berneau** ou une maison de lotissement : 70 litres par jour, jusqu'à environ 400 m³." },
    ],
    levering: {
      kop: "Livraison à Dalhem, jusque dans la cour",
      alinea:
        "Le trajet dure **près d'une heure et demie**, la dernière partie par des routes de campagne. Vous choisissez une date de livraison lors de la réservation ; en Wallonie, nous livrons **sur rendez-vous**. Si la ferme se trouve sur une route étroite ou derrière une cour en gravier, signalez-le. Le technicien met les appareils en place pièce par pièce.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar",
      alinea:
        "De Dalhem à Aartselaar aller-retour, comptez **près de trois heures de route**. Une ferme avec de grandes pièces demande en outre souvent plus d'un appareil, et cela ne rentre pas dans toutes les voitures. Ici, mieux vaut choisir la livraison, avec une mesure d'humidité au départ.",
    },
    buren: ["wezet", "blegny", "voeren"],
    faq: [
      {
        q: "Comment sécher une étable transformée avec un nouveau sol en béton ?",
        a: "Fermez l'espace le mieux possible. Placez un grand déshumidificateur et un ventilateur qui souffle sur le sol, et un chauffage de chantier s'il fait froid dehors. Un grand volume avec un sol épais a besoin de plusieurs semaines. Faites mesurer le sol avant d'y poser du carrelage ou du parquet.",
      },
      {
        q: "Un déshumidificateur fonctionne-t-il dans une ferme sans chauffage ?",
        a: "Un déshumidificateur à condensation a besoin d'une température supérieure à 15 °C pour bien fonctionner. Dans une ferme non chauffée, nous ajoutons donc un chauffage de chantier ou nous choisissons un déshumidificateur à adsorption. Le chauffage demande un raccordement en 400 volts, c'est pourquoi nous demandons à l'avance quel courant est disponible.",
      },
      {
        q: "Livrez-vous aussi dans de petits villages comme Feneur et Mortroux ?",
        a: "Oui, dans tous les villages de Dalhem. Indiquez lors de la réservation l'adresse et l'accès, surtout si la route est étroite ou si la maison se trouve derrière une cour. Nous combinons le trajet avec d'autres livraisons dans la région de Liège.",
      },
      {
        q: "Combien de déshumidificateurs me faut-il pour une ferme de deux étages ?",
        a: "En général, un déshumidificateur par étage, avec l'escalier fermé là où c'est possible. Une grange transformée, ouverte jusque sous le toit, compte comme un seul grand volume et demande un appareil plus puissant. Le technicien le recalcule sur place.",
      },
    ],
    realisaties: [],
  },

  esneux: {
    slug: "esneux",
    title: "Location de déshumidificateur à Esneux et Tilff | Vernast",
    description:
      "Déshumidificateur à louer à Esneux et Tilff : maisons au bord de l'Ourthe et villas dans les bois des coteaux. Livré sur rendez-vous, installé et mesuré.",
    h1: "Location de déshumidificateur à Esneux",
    kicker: "Liège · les méandres de l'Ourthe",
    rit: { afstand: "environ 140 km", tijd: "environ une heure et demie" },
    intro: [
      "Esneux se trouve **au bord de l'Ourthe**, au sud de Liège, là où la rivière dessine de grandes boucles à travers la forêt. La commune comprend notamment **Tilff**, le village au bord de la rivière le plus proche de Liège.",
      "Beaucoup de Liégeois ont choisi Esneux pour **vivre dans la verdure**. Sur les coteaux, des villas et des maisons quatre façades occupent de vastes terrains boisés ; dans les noyaux au bord de l'eau, les maisons sont plus serrées. Depuis Aartselaar, vous y êtes en environ une heure et demie.",
    ],
    bouw: {
      kop: "Au bord de l'eau et sous les arbres",
      alineas: [
        "Le long de l'Ourthe, les caves et les pièces du rez-de-chaussée sont proches du niveau de la rivière. **En juillet 2021**, l'Ourthe est elle aussi sortie de son lit, et à Tilff et Esneux, des habitations ont dû sécher ensuite. Une cave près de la rivière demande en outre de l'attention après **un hiver humide**.",
        "Sur les coteaux boisés, c'est autre chose. Une villa à l'ombre des arbres reçoit peu de soleil sur sa façade, et les murs côté pente sèchent lentement. Lors de **la rénovation d'une villa ancienne**, avec un nouveau plafonnage ou un nouveau sol, le séchage prend donc plus de temps que dans une maison en terrain dégagé.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour la rénovation d'une villa sur le coteau** : 70 litres par jour et une portée jusqu'à 400 m³, assez pour un grand séjour." },
      { key: "ttk650", waarom: "Pour une maison à Tilff ou au bord de l'Ourthe après des dégâts des eaux : **110 litres par jour** et une portée jusqu'à 600 m³, pour retirer l'eau des murs et du sol." },
      { key: "radiaal2250", waarom: "Pour **un sol de cave près de la rivière** : ce ventilateur radial souffle de manière ciblée sur le sol et dans les coins, là où l'humidité persiste le plus longtemps." },
      { key: "teddh20", waarom: "Une cave ou une villa inoccupée à l'ombre reste fraîche. Ce chauffage de 20 kW en 400 V met la pièce à température pour le déshumidificateur." },
    ],
    levering: {
      kop: "Livraison à Esneux : le long de l'Ourthe ou par la colline",
      alinea:
        "Le trajet depuis Aartselaar dure environ une heure et demie. Vous choisissez une date de livraison lors de la réservation, et nous convenons de l'heure **sur rendez-vous** avec vous. Une partie des maisons se trouve au bord de la rivière, une autre le long de routes sinueuses sur le coteau. Si votre maison est sur un chemin forestier étroit ou en haut d'une allée raide, **signalez-le à l'avance**, pour que le technicien sache jusqu'où la camionnette peut aller.",
    },
    afhalen: {
      kop: "L'enlèvement est possible, mais c'est loin",
      alinea:
        "Depuis Esneux, vous roulez environ une heure et demie jusqu'à Aartselaar, et autant pour revenir. Pour une villa de plusieurs étages, il vous faut en outre souvent deux ou trois appareils, qui tiennent rarement ensemble dans une voiture. **La livraison vous épargne ce trajet.**",
    },
    buren: ["neupre", "seraing", "chaudfontaine", "sprimont", "comblain-au-pont"],
    faq: [
      {
        q: "Ma cave à Tilff devient humide chaque hiver. Un déshumidificateur aide-t-il ?",
        a: "Un déshumidificateur retire l'humidité de l'air et des murs, et rend une cave humide à nouveau utilisable. Si l'humidité revient à chaque crue, la cause se trouve dans la paroi de la cave elle-même. Lors de l'installation, le technicien mesure le degré d'humidité.",
      },
      {
        q: "Pourquoi ma villa dans les bois sèche-t-elle si lentement après les travaux ?",
        a: "Parce que les façades reçoivent peu de soleil et que l'air sous les arbres est plus humide. Aérer fenêtres ouvertes aide alors peu, car l'air extérieur est lui-même humide. Fenêtres fermées et avec un déshumidificateur à l'intérieur, cela va plus vite et de façon plus prévisible.",
      },
      {
        q: "La camionnette peut-elle arriver jusqu'à une maison sur le coteau ?",
        a: "La plupart du temps, oui. Avec une allée raide ou non revêtue, la camionnette s'arrête parfois en bas et le technicien monte les appareils avec un diable. Indiquez lors de la réservation à quoi ressemble votre allée.",
      },
      {
        q: "Combien de déshumidificateurs me faut-il pour une grande villa ?",
        a: "Comptez un déshumidificateur par étage. Un espace ouvert de plus de 400 m³ demande un appareil plus puissant. Indiquez la surface et le type de travaux lors de la réservation ; le technicien vérifie sur place si l'installation est la bonne.",
      },
      {
        q: "Que dois-je indiquer lors de la réservation pour une maison à Esneux ?",
        a: "Indiquez quelles pièces doivent sécher et comment la maison est accessible, et nous préparerons bien la livraison. Pour toute autre question, écrivez-nous ou appelez-nous sans hésiter.",
      },
    ],
    realisaties: [],
  },

  flemalle: {
    slug: "flemalle",
    title: "Louer un déshumidificateur de chantier à Flémalle | Vernast",
    description:
      "Déshumidificateur à louer à Flémalle, Ivoz-Ramet, Mons-lez-Liège ou Les Awirs : pour les caves au bord de la Meuse et les maisons à flanc de coteau.",
    h1: "Location de déshumidificateur à Flémalle",
    kicker: "Province de Liège · sur la Meuse en amont",
    rit: { afstand: "environ 130 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Flémalle s'étend **sur les deux rives de la Meuse**, en amont de Liège. La commune comprend Flémalle-Grande, Flémalle-Haute, Ivoz-Ramet, Mons-lez-Liège, Les Awirs, Chokier et Gleixhe. Depuis la rivière, le terrain monte en pente raide vers le plateau.",
      "La vallée de la Meuse a longtemps été **une terre de sidérurgie**, et cela se voit encore. Au pied du coteau s'alignent des maisons ouvrières et d'anciens bâtiments industriels. Plus haut sur la pente et sur le plateau, vous trouvez davantage de maisons quatre façades et de constructions neuves. Depuis Aartselaar, nous roulons un peu plus d'une heure jusqu'à Flémalle.",
    ],
    bouw: {
      kop: "Des maisons près de la rivière, d'autres à flanc de coteau",
      alineas: [
        "Le long de la Meuse, les habitations sont basses. Après une période humide, une crue ou une fuite, **le bas du mur** reste longtemps mouillé. Le technicien vérifie d'abord si l'eau entre encore. Tant que c'est le cas, mieux vaut d'abord traiter la cause.",
        "Sur le coteau, il s'agit plutôt de rénovation et de construction neuve. Une maison à moitié encastrée dans la pente a **une façade arrière contre la terre**, et le rez-de-chaussée se trouve d'un côté sous le niveau du sol. Un plafonnage frais contre un tel mur froid sèche lentement. En hiver, un chauffage de chantier à côté du déshumidificateur fait la différence.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une cave ou un rez-de-chaussée près de la Meuse** après une fuite ou une crue : 110 litres par jour, pour des pièces jusqu'à environ 600 m³." },
      { key: "radiaal2250", waarom: "Pour un sol de cave mouillé : ce ventilateur radial souffle **de manière ciblée sur le sol et dans les coins**, là où l'eau reste le plus longtemps." },
      { key: "ttk350", waarom: "Pour une rénovation sur le coteau à Ivoz-Ramet ou à Mons-lez-Liège : 70 litres par jour, pour un rez-de-chaussée avec un nouveau plafonnage." },
      { key: "teddh30", waarom: "**Pour une pièce adossée à la pente** qui reste froide. Ce chauffage de chantier électrique de 30 kW la met à température, pour que le déshumidificateur rende mieux. Il fonctionne en triphasé." },
    ],
    levering: {
      kop: "Livraison à Flémalle : le long de la Meuse ou en haut du coteau",
      alinea:
        "Nous passons **par l'E313 et Liège**, un peu plus d'une heure hors heures de pointe. Certaines rues du coteau sont raides et étroites ; signalez-le lors de la réservation. Vous choisissez une date de livraison, et nous convenons de l'heure avec vous. S'il s'agit d'une cave après une inondation, dites-nous **jusqu'à quelle hauteur l'eau est montée**.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : rarement intéressant depuis Flémalle",
      alinea:
        "Aartselaar se trouve à **un peu plus d'une heure de route** de Flémalle. Seul celui qui doit de toute façon se rendre dans la région d'Anvers y gagne quelque chose. Pour une cave humide, la livraison est le meilleur choix, car le technicien installe alors tout de suite la bonne combinaison de déshumidificateur et de ventilateur.",
    },
    buren: ["seraing", "grace-hollogne", "engis", "neupre", "saint-georges-sur-meuse"],
    faq: [
      {
        q: "Ma cave près de la Meuse a été inondée. Quand dois-je commencer à sécher ?",
        a: "Dès que l'eau stagnante et la boue ont disparu. Un déshumidificateur retire l'humidité du sol et des murs, pas l'eau qui reste au sol. Indiquez lors de la réservation jusqu'où l'eau est montée, et le technicien apportera aussi un ventilateur.",
      },
      {
        q: "Intervenez-vous sur le coteau, aux Awirs et à Chokier ?",
        a: "Oui, nous livrons dans tout Flémalle, y compris dans les sections plus haut sur le coteau. Les rues y sont parfois étroites et raides. Indiquez lors de la réservation si la camionnette peut s'arrêter devant la porte, et nous organiserons la livraison en conséquence.",
      },
      {
        q: "Pourquoi le plafonnage contre un mur adossé à la pente sèche-t-il si lentement ?",
        a: "De l'autre côté, ce mur touche une terre humide et reste froid. Un mur froid sèche plus lentement, et un déshumidificateur à condensation fonctionne moins bien en dessous d'environ 15 °C. Avec un chauffage de chantier en plus et les portes fermées, cela va nettement plus vite.",
      },
      {
        q: "Pouvez-vous sécher un ancien bâtiment industriel au bord de la Meuse ?",
        a: "Oui. Pour un grand volume, le technicien calcule d'abord le nombre de mètres cubes et vérifie si l'espace peut être fermé. Un hall aux portes ouvertes sèche mal. Il s'agit alors généralement d'une combinaison de grands déshumidificateurs et de ventilateurs.",
      },
    ],
    realisaties: [],
  },

  fleron: {
    slug: "fleron",
    title: "Location de déshumidificateur à Fléron (Liège) | Vernast",
    description:
      "Déshumidificateur à louer à Fléron : maisons sur le plateau à l'est de Liège, à Retinne, Romsée et Magnée, avec caves et chapes. Livré, installé, réglé.",
    h1: "Location de déshumidificateur à Fléron",
    kicker: "Liège · sur le plateau, le long de l'E40",
    rit: { afstand: "environ 130 km", tijd: "près d'une heure et demie" },
    intro: [
      "Fléron se trouve **sur le plateau à l'est de Liège**, sur la route de Verviers et du Pays de Herve. Autrefois, la commune vivait **des charbonnages** ; aujourd'hui, c'est une commune résidentielle avec beaucoup de navetteurs vers Liège. Notre camionnette y est en près d'une heure et demie.",
      "**Magnée, Retinne et Romsée** font partie de Fléron. C'est aussi ici que se trouve **le fort de Fléron**, l'un des douze forts que Brialmont fit construire autour de Liège. Vers le sud, le terrain descend en pente raide vers la vallée de la Vesdre.",
    ],
    bouw: {
      kop: "Cités minières, caves et nouveaux lotissements",
      alineas: [
        "À Retinne et Romsée, il reste **des rangées de maisons de l'époque des charbonnages**, avec une cave et un jardin étroit. Beaucoup de ces maisons font l'objet d'**une rénovation complète**, avec une nouvelle électricité, un nouveau plafonnage et une nouvelle salle de bains. Sur le plateau, il fait venteux et frais, et une maison restée longtemps vide est froide jusque dans les murs.",
        "En bordure de la commune se trouvent **des lotissements de maisons quatre et trois façades**. Là, tout tourne généralement autour de la chape : combien de temps elle doit sécher et si cela peut aller plus vite. **Le chauffage par le sol** ne peut être allumé progressivement qu'après le délai d'attente prescrit. D'ici là, c'est un déshumidificateur qui fait le travail.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison de mineur à Retinne ou à Romsée** en rénovation complète : 70 litres par jour, jusqu'à environ 400 m³." },
      { key: "teddh20", waarom: "Ce chauffage de chantier de 20 kW réchauffe d'abord **une maison restée longtemps vide**, pour que le séchage avance. Il demande du 400 V." },
      { key: "ttk650", waarom: "**Pour une maison de lotissement avec une chape fraîche** : 110 litres par jour, pour que le sol soit plus vite prêt pour la finition." },
      { key: "radiaal2250", waarom: "Ce ventilateur radial souffle **de manière ciblée sur une chape**, pour que les bords et les coins du sol sèchent aussi." },
    ],
    levering: {
      kop: "Livraison à Fléron",
      alinea:
        "Par l'E313 et l'E40, nous sommes à Fléron en **près d'une heure et demie**. Vous choisissez une date de livraison lors de la réservation, et nous livrons **sur rendez-vous**. Le technicien installe les appareils, les règle et mesure l'humidité au départ. Si la maison se trouve dans une nouvelle rue sans numéro, indiquez-nous un point de repère.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar",
      alinea:
        "Un aller-retour de Fléron à Aartselaar prend **près de trois heures**. L'enlèvement ne vaut donc la peine que si vous devez de toute façon passer dans la région d'Anvers. Avec la livraison, l'appareil est **tout de suite bien installé**.",
    },
    buren: ["beyne-heusay", "soumagne", "chaudfontaine", "trooz"],
    faq: [
      {
        q: "Ma maison à Retinne est restée vide un an. Pourquoi sèche-t-elle si mal ?",
        a: "Une maison longtemps non chauffée est froide jusque dans les murs, et des murs froids rendent leur humidité lentement. De plus, un déshumidificateur à condensation ne fonctionne bien qu'au-dessus de 15 °C. Avec un chauffage de chantier en plus, les murs et l'air montent en température, et la maison sèche plus facilement.",
      },
      {
        q: "Puis-je utiliser mon chauffage par le sol pour sécher la chape ?",
        a: "Seulement après le délai d'attente indiqué par le fournisseur de la chape, et alors progressivement. Chauffer trop tôt ou trop fort, c'est risquer des fissures dans la chape. D'ici là, un déshumidificateur fait le travail, éventuellement avec un ventilateur sur le sol.",
      },
      {
        q: "Livrez-vous aussi à Magnée, du côté de la Vesdre ?",
        a: "Oui, dans toutes les sections de Fléron. Magnée se trouve en bordure du plateau, où certaines rues descendent en pente raide vers la vallée. Indiquez lors de la réservation si la camionnette peut aller jusqu'à la maison.",
      },
      {
        q: "Combien d'électricité consomme un déshumidificateur de chantier ?",
        a: "Cela dépend du modèle. Le modèle compact demande 0,75 kW, le modèle intermédiaire 1,1 kW et le plus grand 1,4 kW. Un chauffage de chantier de 20 ou 30 kW consomme beaucoup plus, et nous ne l'utilisons que si c'est nécessaire.",
      },
    ],
    realisaties: [],
  },

  "grace-hollogne": {
    slug: "grace-hollogne",
    title: "Déshumidificateur à louer à Grâce-Hollogne | Vernast",
    description:
      "Déshumidificateur à louer à Grâce-Hollogne, Bierset, Velroux ou Horion-Hozémont : maisons, fermes et bâtiments d'entreprise près de Liège Airport.",
    h1: "Location de déshumidificateur à Grâce-Hollogne",
    kicker: "Province de Liège · la commune de l'aéroport",
    rit: { afstand: "environ 120 km", tijd: "un peu plus d'une heure" },
    intro: [
      "C'est à Grâce-Hollogne que se trouve **Liège Airport**, l'aéroport de Bierset, surtout connu comme aéroport de fret. Autour du site s'étendent des zones logistiques et des bâtiments d'entreprise. Au-delà se trouvent les noyaux d'habitat de Hollogne-aux-Pierres, Grâce-Berleur, Velroux et Horion-Hozémont.",
      "Les noyaux du côté de Liège appartiennent à **l'ancien bassin houiller**, avec un bâti dense et des maisons ouvrières. Velroux et Horion-Hozémont sont plus ruraux. Un entrepreneur travaille ici une semaine dans une maison mitoyenne et la suivante dans un entrepôt ou une ferme. Depuis Aartselaar, nous roulons un peu plus d'une heure jusqu'à Grâce-Hollogne.",
    ],
    bouw: {
      kop: "Maisons mitoyennes près de la ville, entrepôts près de l'aéroport",
      alineas: [
        "À Grâce-Berleur et à Hollogne s'alignent des maisons anciennes de l'époque des charbonnages, avec des **murs en briques sans creux** et de petites caves. Après une fuite ou lors d'une rénovation avec un nouveau plafonnage, il s'agit d'un petit volume. Un déshumidificateur compact dans une pièce fermée y fait l'essentiel du travail.",
        "Près de l'aéroport, il s'agit de bâtiments d'entreprise : un nouveau **sol industriel**, des bureaux en cours d'aménagement ou un local technique après des dégâts des eaux. Là, c'est la capacité par mètre cube qui compte. Le technicien recalcule le volume avant de confirmer le nombre d'appareils.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour un entrepôt ou des bureaux à Bierset** : 110 litres par jour, adapté à des espaces jusqu'à environ 600 m³ avec un sol frais." },
      { key: "ttv4500", waarom: "Au-dessus d'un grand sol en béton, l'air juste au-dessus de la surface reste saturé. Ce ventilateur **le garde en mouvement**, pour que le sol sèche de façon plus uniforme." },
      { key: "ttk170", waarom: "Pour une maison mitoyenne à Grâce ou à Hollogne : assez compact pour un couloir étroit et, avec 0,75 kW, un **appareil économe**." },
      { key: "ttk350", waarom: "Pour une maison neuve à Velroux ou à Horion-Hozémont : 70 litres par jour, suffisant pour un rez-de-chaussée avec chape." },
    ],
    levering: {
      kop: "Livraison à Grâce-Hollogne : près de l'aéroport et dans les villages",
      alinea:
        "Nous passons **par l'E313, puis en direction de l'aéroport**, un peu plus d'une heure hors heures de pointe. Sur un site d'entreprise avec contrôle d'accès, communiquez de préférence à l'avance **le nom d'une personne de contact**, pour que le technicien ne reste pas bloqué à la barrière. Vous choisissez la date de livraison lors de la réservation, et nous convenons de l'heure.",
    },
    afhalen: {
      kop: "L'enlèvement est possible, mais rarement rentable",
      alinea:
        "Notre point d'enlèvement à Aartselaar se trouve à **un peu plus d'une heure de route**. Pour un seul déshumidificateur, c'est faisable, avec une voiture où il tient debout. Pour un bâtiment d'entreprise avec plusieurs appareils, nous conseillons la livraison, car l'installation y compte davantage que l'appareil lui-même.",
    },
    buren: ["ans", "awans", "saint-nicolas", "flemalle"],
    faq: [
      {
        q: "Livrez-vous aussi sur un site d'entreprise près de Liège Airport ?",
        a: "Oui. Indiquez lors de la réservation l'adresse du bâtiment, l'accès et une personne de contact sur place. Sur les sites avec barrière ou contrôle par badge, nous convenons à l'avance de qui fait entrer le technicien, pour que la livraison se déroule sans accroc le jour prévu.",
      },
      {
        q: "Combien de déshumidificateurs me faut-il pour un nouveau sol en béton dans un entrepôt ?",
        a: "Cela dépend du volume de l'espace, de l'épaisseur du sol et de la possibilité de fermer l'espace. Un entrepôt dont les portes restent ouvertes sèche mal. Nous combinons généralement de grands déshumidificateurs avec des ventilateurs ; le technicien recalcule le nombre sur place.",
      },
      {
        q: "Travaillez-vous aussi à Velroux et à Horion-Hozémont ?",
        a: "Oui, ces sections se trouvent dans notre zone de livraison. Il s'agit plus souvent de fermes et de constructions neuves que de maisons mitoyennes. Pour une maison isolée, décrivez l'accès, pour que le technicien choisisse le bon itinéraire.",
      },
      {
        q: "Un déshumidificateur peut-il tourner la nuit dans un bureau ?",
        a: "Oui, et c'est même le but. Un déshumidificateur travaille en continu. Si vous l'éteignez la nuit, l'air reprend de l'humidité aux murs et au sol. Gardez l'espace fermé et convenez que personne n'éteint le déshumidificateur en fermant le bâtiment.",
      },
    ],
    realisaties: [],
  },

  herstal: {
    slug: "herstal",
    title: "Louer un déshumidificateur de chantier à Herstal | Vernast",
    description:
      "Déshumidificateur à louer à Herstal : maisons ouvrières, caves entre la Meuse et le canal Albert, constructions neuves à Vottem, Milmort et Liers.",
    h1: "Location de déshumidificateur à Herstal",
    kicker: "Liège · entre la Meuse et le canal Albert",
    rit: { afstand: "environ 115 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Herstal se trouve **juste en aval de Liège**, entre la Meuse et le **canal Albert**. La ville s'est développée autour de son industrie : FN Herstal y fabrique des armes depuis plus d'un siècle. Depuis Aartselaar, notre camionnette y est en un peu plus d'une heure.",
      "En bas, près de l'eau, se trouvent **les quartiers plus anciens**. Plus haut sur la pente s'étendent **Vottem, Milmort et Liers**, des sections avec des quartiers résidentiels et des lotissements plus récents.",
    ],
    bouw: {
      kop: "Maisons ouvrières et caves près de l'eau",
      alineas: [
        "Autour du centre s'alignent **des rangées d'étroites maisons ouvrières**, avec une cave sous la pièce avant. Lors d'une rénovation, l'ancien enduit est souvent enlevé d'un coup et un nouveau **plafonnage** est posé sur tous les murs. Une si petite maison reçoit alors beaucoup d'eau en peu de temps.",
        "Près de la Meuse et du canal, **la nappe phréatique est plus haute**. Une cave y paraît fraîche et moite, même sans fuite. Si l'eau vient du sol, un déshumidificateur ne règle pas le problème durablement. **Lors de l'installation, le technicien fait une mesure d'humidité** et vous dit s'il s'agit d'humidité de construction.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**Pour une seule pièce ou une salle de bains** dans une maison mitoyenne étroite : compact, 50 litres par jour et facile à monter à l'étage." },
      { key: "ttk350", waarom: "Si **toute la maison reçoit un nouveau plafonnage**, ce déshumidificateur retire 70 litres par jour, pour des volumes jusqu'à environ 400 m³." },
      { key: "revolution", waarom: "**Pour une cave froide près de la Meuse.** Ce déshumidificateur à adsorption continue d'extraire l'humidité là où un appareil à condensation rend trop peu." },
      { key: "ttv4500", waarom: "Dans une maison mitoyenne profonde, l'air stagne à l'arrière. Le ventilateur le met en mouvement, pour que **la pièce arrière sèche aussi**." },
    ],
    levering: {
      kop: "Livraison à Herstal",
      alinea:
        "Par l'E313, nous sommes à Herstal en **un peu plus d'une heure**. Vous choisissez une date de livraison lors de la réservation ; en Wallonie, nous livrons **sur rendez-vous**. Dans les vieux quartiers, les rues sont étroites et parfois raides. Signalez à l'avance si l'on peut se garer devant la porte. Le technicien met les appareils en place étage par étage.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar",
      alinea:
        "Notre point d'enlèvement est à un peu plus d'une heure de route de Herstal. Aller-retour, deux fois, cela vous prend **une bonne partie de la journée**. Cela ne vaut la peine que si vous devez de toute façon passer près d'Anvers. Avec la livraison, le technicien fait tout de suite une mesure d'humidité.",
    },
    buren: ["luik-stad", "oupeye", "juprelle"],
    faq: [
      {
        q: "Ma cave à Herstal reste humide. Est-ce à cause de la Meuse ?",
        a: "C'est possible. Dans les quartiers bas, la nappe phréatique est juste sous le sol, et une cave toujours moite ne sèche pas durablement avec un déshumidificateur. L'humidité de construction après une rénovation, en revanche, nous l'éliminons. Lors de l'installation, le technicien mesure de quelle humidité il s'agit.",
      },
      {
        q: "Combien de déshumidificateurs dans une maison mitoyenne entièrement replafonnée ?",
        a: "Comptez en général un déshumidificateur par étage, avec les portes vers l'escalier fermées. Une maison mitoyenne étroite a peu de volume, mais un nouveau plafonnage sur tous les murs apporte beaucoup d'eau. Un ventilateur en plus accélère le séchage.",
      },
      {
        q: "Livrez-vous aussi à Vottem, Milmort et Liers ?",
        a: "Oui, dans toutes les sections de Herstal. Plus haut sur la pente, il s'agit plus souvent de constructions neuves dans un lotissement, avec une chape qui doit sécher avant la pose du revêtement. Indiquez l'adresse et l'accès lors de la réservation.",
      },
      {
        q: "Un déshumidificateur peut-il tourner sur l'installation électrique d'une maison ancienne ?",
        a: "Les déshumidificateurs à condensation et les ventilateurs fonctionnent sur une prise standard de 230 volts. Si l'installation est ancienne, répartissez les appareils sur plusieurs circuits. Seuls les chauffages de chantier demandent un raccordement en 400 volts, et nous en discutons avec vous à l'avance.",
      },
    ],
    realisaties: [],
  },

  juprelle: {
    slug: "juprelle",
    title: "Déshumidificateur de chantier à louer à Juprelle | Vernast",
    description:
      "Déshumidificateur à louer à Juprelle, Slins, Lantin, Paifve ou Wihogne : fermes rénovées et constructions neuves en Hesbaye liégeoise. Livré et installé.",
    h1: "Location de déshumidificateur à Juprelle",
    kicker: "Province de Liège · la Hesbaye rurale au-dessus de Liège",
    rit: { afstand: "environ 110 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Juprelle se trouve au nord de Liège, dans **la Hesbaye liégeoise**. C'est une commune rurale, avec des champs et des villages comme Slins, Fexhe-Slins, Lantin, Paifve, Wihogne, Voroux-lez-Liers et Villers-Saint-Siméon.",
      "Qui construit ou rénove à Juprelle travaille souvent dans **une ancienne ferme** ou sur une maison neuve en bordure d'un village. La proximité de Liège et de l'E313 attire de nouveaux habitants, mais le caractère reste rural. Depuis Aartselaar, nous roulons un peu plus d'une heure jusqu'à Juprelle.",
    ],
    bouw: {
      kop: "Fermes en carré et constructions neuves en bordure de village",
      alineas: [
        "Une **ferme en carré hesbignonne** a d'épais murs en briques et des granges sous une haute toiture. Si vous en transformez une partie en logement, vous y apportez un nouveau plafonnage, un nouveau sol et souvent un chauffage par le sol, dans un grand volume. Cela demande plus de capacité de séchage qu'une maison ordinaire, et un air qui reste en mouvement jusque sous le toit.",
        "En construction neuve, une cave ou une fouille reste parfois longtemps mouillée après la pluie. Pompez l'eau avant de commencer à sécher. Ensuite, **la chape doit encore sécher** avant l'arrivée du poseur de sol, et c'est une mesure d'humidité qui dit si elle est prête.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une ferme en carré en rénovation** : 110 litres par jour et adapté à des espaces jusqu'à environ 600 m³, pour de hautes granges avec beaucoup de plafonnage neuf." },
      { key: "ttv4500", waarom: "Sous une haute toiture de ferme, l'air humide stagne. Ce ventilateur de 4 500 m³/h **le met en mouvement**, pour que murs et sol sèchent uniformément." },
      { key: "ttk350", waarom: "Pour une maison neuve à Slins ou à Lantin : 70 litres par jour pour une puissance de 1,1 kW, pour un rez-de-chaussée avec une chape fraîche." },
      { key: "radiaal2250", waarom: "**Pour une cave restée mouillée après la pluie** : ce ventilateur radial souffle de manière ciblée sur le sol et jusque dans les coins." },
    ],
    levering: {
      kop: "Livraison à Juprelle : tout près de l'E313",
      alinea:
        "Juprelle se trouve **tout près de l'E313**, à un peu plus d'une heure de route de notre entrepôt d'Aartselaar. Si la ferme est derrière un portail ou au bord d'un chemin de campagne étroit, précisez l'accès lors de la réservation. Vous choisissez une date de livraison et nous convenons de l'heure. Le technicien installe les appareils, les règle et **mesure l'humidité**.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : un peu plus d'une heure par l'E313",
      alinea:
        "Depuis Juprelle, vous rejoignez Aartselaar **par l'E313**. Dans une camionnette, vous pouvez emporter deux appareils. Pour une ferme avec plusieurs pièces et un ventilateur, nous conseillons la livraison, pour que l'installation soit tout de suite correcte.",
    },
    buren: ["ans", "awans", "herstal", "oupeye"],
    faq: [
      {
        q: "Comment sécher une grange rénovée sous une haute toiture ?",
        a: "Une grange haute contient beaucoup plus d'air que la surface au sol ne le laisse penser. Un grand déshumidificateur, avec un ventilateur qui garde l'air en mouvement sous le toit, fonctionne le mieux. Indiquez les dimensions lors de la réservation ; le technicien vérifie l'installation sur place.",
      },
      {
        q: "Peut-on sécher plus vite une chape sur chauffage par le sol ?",
        a: "La chape doit d'abord durcir, ensuite vient le protocole de mise en chauffe de l'installateur. Entre-temps, un déshumidificateur de chantier retire l'humidité de l'air, pour que la chape puisse libérer la sienne. Suivez le schéma de votre installateur et faites mesurer l'humidité résiduelle avant l'arrivée du poseur de sol.",
      },
      {
        q: "Livrez-vous dans tous les villages de Juprelle, y compris Paifve et Wihogne ?",
        a: "Oui, nous livrons dans chaque village de Juprelle. Dans les plus petits noyaux, certaines fermes se trouvent au bord de chemins de campagne étroits. Décrivez lors de la réservation comment on rejoint la ferme, et nous prévoirons l'itinéraire et le véhicule en conséquence.",
      },
      {
        q: "Pourquoi y a-t-il de l'eau dans ma fouille après une averse ?",
        a: "L'eau dans une fouille ou contre un mur de cave ne s'infiltre que lentement dans le sol. Pompez-la d'abord, car un déshumidificateur n'est pas fait pour des flaques. Ensuite, un déshumidificateur avec un ventilateur retire l'humidité du sol et des parois.",
      },
    ],
    realisaties: [],
  },

  neupre: {
    slug: "neupre",
    title: "Location de déshumidificateur à Neupré | Vernast Liège",
    description:
      "Déshumidificateur à louer à Neupré : quartiers de villas dans les bois à Plainevaux, Rotheux-Rimière et Neuville-en-Condroz. Livré et mesuré.",
    h1: "Location de déshumidificateur à Neupré",
    kicker: "Liège · des quartiers de villas aux portes du Condroz",
    rit: { afstand: "environ 140 km", tijd: "environ une heure et demie" },
    intro: [
      "Neupré se trouve **sur le plateau au sud-ouest de Liège**, là où la ville fait place au Condroz. La commune se compose de **Plainevaux, Rotheux-Rimière, Neuville-en-Condroz et Ehein**. À Neuville-en-Condroz se trouve le cimetière militaire américain de la Seconde Guerre mondiale.",
      "Neupré est surtout une commune résidentielle, avec des **quartiers de villas dans les bois** et des maisons quatre façades sur de grands terrains. Beaucoup de ces maisons ont quelques décennies et sont aujourd'hui rénovées ou agrandies. Depuis Aartselaar, nous roulons environ une heure et demie pour y arriver.",
    ],
    bouw: {
      kop: "Des villas plus anciennes, rénovées aujourd'hui",
      alineas: [
        "Une villa plus ancienne a souvent **une cave ou un vide sanitaire**, des vitrages dépassés et peu d'isolation. Lors d'une rénovation en profondeur, beaucoup d'humidité entre dans la maison en peu de temps : nouveau plafonnage, **une chape avec chauffage par le sol**, parfois une extension en maçonnerie. Tout cela doit être sec avant que le poseur de sol et le peintre commencent.",
        "La forêt autour des maisons garde l'air humide et les façades à l'ombre. Aérer aide alors peu, car **l'air extérieur apporte lui-même de l'humidité**. Un déshumidificateur dans une pièce fermée fonctionne mieux. Pour un vide sanitaire, un **déshumidificateur à adsorption** souffle de l'air sec par la trappe existante.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une villa en pleine rénovation** : 70 litres par jour et une portée jusqu'à 400 m³, assez pour un rez-de-chaussée avec un nouveau plafonnage et une chape." },
      { key: "revolution", waarom: "Pour **le vide sanitaire sous une villa ancienne** : ce déshumidificateur à adsorption amène de l'air sec par des gaines, même s'il fait froid sous la maison." },
      { key: "radiaal2250", waarom: "Ce ventilateur radial chasse la couche d'air humide au-dessus d'**une nouvelle chape**, pour que le sol sèche de façon plus uniforme." },
      { key: "ttk170", waarom: "Pour une salle de bains ou une petite extension : compact, 0,75 kW sur une prise standard, sans gêner le reste de la maison." },
    ],
    levering: {
      kop: "Livraison à Neupré : jusqu'à la villa dans les bois",
      alinea:
        "Nous rejoignons Neupré en environ une heure et demie, **par Liège et la route du Condroz**. En Wallonie, nous livrons sur rendez-vous : vous choisissez une date de livraison lors de la réservation. Beaucoup de villas se trouvent sur des routes calmes avec une longue allée, ce qui facilite le déchargement. Le technicien installe les appareils pièce par pièce et **mesure au départ** l'humidité de la chape et des murs.",
    },
    afhalen: {
      kop: "Enlèvement : comptez une après-midi entière",
      alinea:
        "Jusqu'à notre point d'enlèvement à Aartselaar, vous roulez environ une heure et demie, dans un seul sens. Pour la rénovation de toute une villa, il vous faut en outre souvent plus d'un déshumidificateur. **La livraison est alors plus simple** : tout arrive en une fois et se trouve tout de suite à sa place.",
    },
    buren: ["seraing", "esneux", "nandrin", "flemalle"],
    faq: [
      {
        q: "Ma villa est entièrement rénovée. Quand dois-je louer un déshumidificateur ?",
        a: "Dès que le plafonnage et la chape sont posés et que les fenêtres peuvent être fermées. Plus tôt a peu de sens, car l'air sec s'échappe. Intégrez le temps de séchage dans votre planning, pour que le poseur de sol et le peintre ne doivent pas attendre un sol encore humide.",
      },
      {
        q: "Comment sécher le vide sanitaire sous ma villa ?",
        a: "Avec un déshumidificateur à adsorption placé à l'extérieur du vide sanitaire, qui souffle de l'air sec par une gaine à travers la trappe existante. Vous ne devez pas y descendre vous-même. Un tel espace est généralement trop froid pour un déshumidificateur à condensation.",
      },
      {
        q: "Puis-je utiliser le chauffage par le sol pour sécher la chape plus vite ?",
        a: "Seulement quand le chapiste a validé le schéma de mise en chauffe, et alors progressivement. Entre-temps, un déshumidificateur et un ventilateur s'attaquent à l'humidité dans la pièce. À l'enlèvement, le technicien mesure, pour que vous ayez un chiffre à donner au poseur de sol.",
      },
      {
        q: "Pourquoi aérer aide-t-il peu dans une maison dans les bois ?",
        a: "Parce que l'air sous les arbres est lui-même humide, surtout au printemps et en automne. Des fenêtres ouvertes font alors entrer presque autant d'humidité qu'elles n'en évacuent. Fenêtres fermées et déshumidificateur allumé, vous retirez bel et bien l'eau de la pièce.",
      },
    ],
    realisaties: [],
  },

  oerle: {
    slug: "oerle",
    title: "Louer un déshumidificateur à Oreye, en Hesbaye | Vernast",
    description:
      "Déshumidificateur à louer à Oreye, Lens-sur-Geer, Bergilers ou Otrange : maisons de la vallée du Geer et fermes du plateau. Livré et installé sur rendez-vous.",
    h1: "Location de déshumidificateur à Oreye",
    kicker: "Liège · sur le Geer, à la frontière linguistique",
    rit: { afstand: "environ 105 km", tijd: "un peu plus d'une heure" },
    intro: [
      "**Oreye**, Oerle en néerlandais, se trouve au nord de la Hesbaye wallonne, **contre la frontière linguistique, face à Tongres**. La commune comprend Bergilers, Grandville, Lens-sur-Geer et Otrange, des villages agricoles sur le plateau limoneux. Depuis Aartselaar, nous mettons un peu plus d'une heure pour y arriver.",
      "**Le Geer**, que les Flamands appellent Jeker, traverse Lens-sur-Geer et Oreye en direction de Tongres et de Maastricht. Une partie des maisons se trouve dans cette étroite vallée, une autre plus haut sur le plateau. Lors d'une rénovation, cette différence se remarque.",
    ],
    bouw: {
      kop: "Maisons dans la vallée et fermes sur le plateau",
      alineas: [
        "**En contrebas, près du Geer**, le terrain est plus bas et plus humide. Les maisons anciennes y ont souvent un rez-de-chaussée froid et moite, et des murs en brique montés au mortier de chaux, sans barrière contre l'humidité. Après une rénovation, vous voulez savoir quelle part de l'humidité est de l'humidité de construction. C'est ce que le technicien mesure lors de l'installation.",
        "**Sur le plateau** se dressent les grandes fermes et les maisons plus récentes le long des routes de village. Diviser une ferme en logements, c'est poser beaucoup de chape et de plafonnage neufs en même temps, dans des pièces difficiles à chauffer en hiver. Sous 15 °C, un déshumidificateur à condensation perd en rendement : nous ajoutons alors un chauffage de chantier.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**Pour un rez-de-chaussée froid près du Geer** : ce déshumidificateur à adsorption capte l'humidité même à basse température, là où un appareil à condensation ralentit. Il sèche par l'intermédiaire de gaines." },
      { key: "ttk350", waarom: "Pour une ferme transformée en habitation : 70 litres par jour, adapté jusqu'à environ 400 m³ par zone de séchage." },
      { key: "teddh30", waarom: "Réchauffe d'abord **une pièce de ferme non chauffée** en hiver, pour que le déshumidificateur atteigne sa pleine capacité. Ce chauffage demande un raccordement en 400 V." },
      { key: "radiaal2250", waarom: "Souffle de façon ciblée sur un sol mouillé ou dans le coin contre un vieux mur extérieur, là où l'humidité d'une maison ancienne persiste le plus longtemps." },
    ],
    levering: {
      kop: "Livraison à Oreye : par Tongres ou par l'E40",
      alinea:
        "Oreye se situe entre Tongres et l'E40 à hauteur de Waremme. Nous prenons l'itinéraire le plus fluide du jour, un peu plus d'une heure depuis Aartselaar. Vous choisissez **une date de livraison** lors de la réservation, puis nous convenons de la livraison avec vous. Dites-nous de quel côté de la ferme il vaut mieux décharger. Le technicien place les appareils pièce par pièce et les règle.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Oreye : rarement rentable",
      alinea:
        "Jusqu'à Aartselaar, il y a **un peu plus d'une heure de route**, et pour l'enlèvement puis le retour, vous faites ce trajet aller-retour deux fois. Pour une rénovation de plusieurs semaines, c'est beaucoup de temps pour un seul appareil. Avec la livraison, l'installation et **une mesure d'humidité au démarrage** sont comprises.",
    },
    buren: ["crisnee", "borgworm", "tongeren-borgloon"],
    faq: [
      {
        q: "Ma maison à Lens-sur-Geer est en contrebas, près du ruisseau. Un déshumidificateur peut-il aider ?",
        a: "Oui, pour l'humidité de construction après une rénovation ou une fuite. Si l'humidité revient après chaque période pluvieuse, elle vient du sol ou du pied du mur, et un déshumidificateur ne la règle pas durablement. Au démarrage, le technicien mesure de laquelle des deux il s'agit.",
      },
      {
        q: "Un déshumidificateur fonctionne-t-il dans une ferme non chauffée en hiver ?",
        a: "Un déshumidificateur à condensation fonctionne, mais plus lentement dès qu'il fait moins de 15 °C. Dans une pièce de ferme froide, nous ajoutons donc un chauffage, ou nous choisissons le déshumidificateur à adsorption, qui capte l'humidité même par temps froid. Signalez lors de la réservation s'il y a un chauffage.",
      },
      {
        q: "Livrez-vous aussi du côté flamand, à Tongres ?",
        a: "Oui. Tongres-Looz a sa propre page et fait aussi partie de notre zone de livraison. Pour un chantier tout près de la frontière linguistique, le côté où se trouve l'adresse ne change pas grand-chose au planning.",
      },
      {
        q: "Comment sécher un vieux mur au mortier de chaux sans l'abîmer ?",
        a: "Calmement et de manière uniforme. La brique ancienne et le mortier de chaux libèrent leur eau lentement et peuvent se fissurer s'ils sèchent trop vite ou de façon trop inégale. Un déshumidificateur avec un peu de mouvement d'air le long du mur fonctionne mieux que beaucoup de chaleur à un seul endroit.",
      },
    ],
    realisaties: [],
  },

  remicourt: {
    slug: "remicourt",
    title: "Louer un déshumidificateur à Remicourt, le long de l'E40",
    description:
      "Louer un déshumidificateur à Remicourt, Momalle, Hodeige, Lamine ou Pousset : maisons près de la gare et constructions neuves avec chauffage par le sol.",
    h1: "Location de déshumidificateur à Remicourt",
    kicker: "Liège · sur la ligne de chemin de fer entre Waremme et Liège",
    rit: { afstand: "environ 110 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Remicourt se trouve **à l'est de Waremme**, sur la route de Liège. La commune est traversée par l'E40 et par **la ligne de chemin de fer Bruxelles-Liège**, avec une gare à Remicourt même. Hodeige, Lamine, Momalle et Pousset en font aussi partie, des villages sur le plateau limoneux de la Hesbaye wallonne.",
      "Le rail et l'autoroute attirent les navetteurs. À côté des anciens noyaux villageois et de leurs fermes sont apparus **des quartiers de maisons quatre façades**, et dans les rues plus anciennes près de la gare, des maisons sont remises en état. Depuis Aartselaar, nous roulons un peu plus d'une heure.",
    ],
    bouw: {
      kop: "Village de cheminots et lotissements",
      alineas: [
        "**Autour de la gare** se trouvent des maisons mitoyennes anciennes et des maisons bourgeoises en brique. En rénovant, vous y rencontrez des murs sans barrière contre l'humidité et des caves qui n'ont jamais été tout à fait sèches. Une mesure montre s'il s'agit d'humidité de construction ou d'humidité qui remonte du sol, ce qui demande une autre approche.",
        "**Dans les lotissements**, il s'agit de constructions neuves et d'extensions, souvent avec **un chauffage par le sol sous la chape**. Cette chape doit être sèche avant la mise en chauffe et avant la pose du revêtement de sol. Avec un séchage ciblé, le poseur de sol attend moins longtemps une mesure favorable.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une construction neuve avec chauffage par le sol** : 70 litres par jour, suffisant pour tout un rez-de-chaussée jusqu'à environ 400 m³." },
      { key: "radiaal2250", waarom: "Souffle **à ras de la chape**, pour que la couche d'air au-dessus du sol ne soit pas saturée et que l'humidité quitte le sol de manière uniforme." },
      { key: "ttk170", waarom: "Pour une rénovation dans une maison mitoyenne près de la gare : assez compact pour un escalier étroit et économe avec 0,75 kW." },
      { key: "teddh20", waarom: "Porte **une cave froide sous une maison ancienne** au-dessus de 15 °C, là où le déshumidificateur capte mieux l'humidité. Ce chauffage de 20 kW demande du 400 V." },
    ],
    levering: {
      kop: "Livraison à Remicourt : le long de l'E40",
      alinea:
        "Remicourt se trouve **sur l'E40 entre Waremme et Liège**, à un peu plus d'une heure de route d'Aartselaar. Lors de la réservation, vous choisissez une date de livraison ; nous convenons de l'heure avec vous. Le technicien installe les appareils, mesure l'humidité dans le sol et les murs et **règle tout avant de repartir**.",
    },
    afhalen: {
      kop: "L'enlèvement est possible, mais le trajet est long",
      alinea:
        "Depuis Remicourt, vous êtes **un peu plus d'une heure en route** jusqu'à Aartselaar, et autant pour revenir. Un déshumidificateur doit être transporté debout : pour un pack complet avec ventilateur, la livraison est donc le choix pratique.",
    },
    buren: ["borgworm", "donceel", "fexhe-le-haut-clocher", "saint-georges-sur-meuse"],
    faq: [
      {
        q: "Puis-je allumer le chauffage par le sol pour sécher la chape plus vite ?",
        a: "Seulement selon le protocole de mise en chauffe de l'installateur, et pas juste après le coulage. Chauffer trop tôt et trop fort peut faire fissurer la chape. Un déshumidificateur peut en revanche tourner dès le début : il retire l'humidité sans solliciter la chape.",
      },
      {
        q: "Comment sécher la cave d'une maison ancienne près de la gare ?",
        a: "Mesurez d'abord si l'humidité vient d'une fuite, de travaux ou du sol. Un déshumidificateur élimine l'humidité de construction et celle laissée par une fuite, avec un chauffage en appui dans une cave froide. Si l'humidité revient sans cesse, un déshumidificateur seul n'est pas une solution.",
      },
      {
        q: "Venez-vous aussi à Momalle et à Hodeige ?",
        a: "Oui, Hodeige, Lamine, Momalle et Pousset font partie de Remicourt et se trouvent dans notre zone de livraison. Si l'adresse est sur une route de village étroite, indiquez où la camionnette peut s'arrêter pour décharger.",
      },
      {
        q: "Comment savoir quel pack de séchage convient à ma maison ?",
        a: "Écrivez-nous ou appelez-nous sans hésiter. Nous examinons ensemble quel pack de séchage convient à votre maison à Remicourt et quand nous pouvons livrer.",
      },
    ],
    realisaties: [],
  },

  "saint-georges-sur-meuse": {
    slug: "saint-georges-sur-meuse",
    title: "Déshumidificateur à louer à Saint-Georges-sur-Meuse",
    description:
      "Déshumidificateur à louer à Saint-Georges-sur-Meuse ? Vernast livre et installe pour rénover une maison d'après-guerre, une chape neuve ou une cave humide.",
    h1: "Location de déshumidificateur à Saint-Georges-sur-Meuse",
    kicker: "Province de Liège · au bord du plateau, au-dessus de la Meuse",
    rit: { afstand: "environ 120 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Saint-Georges-sur-Meuse s'étend en grande partie **sur le plateau au-dessus de la Meuse**, entre Flémalle et Amay. Depuis le rebord, vous voyez la vallée et l'industrie le long du fleuve. Depuis Aartselaar, nous y sommes en un peu plus d'une heure.",
      "Le paysage de rue se compose surtout de **quartiers résidentiels et de lotissements** du siècle dernier. Entre eux se trouvent des maisons de village plus anciennes et çà et là une ferme, avec les champs juste derrière les dernières maisons.",
    ],
    bouw: {
      kop: "Des quartiers du siècle dernier, de nouveau en travaux",
      alineas: [
        "Beaucoup de maisons datent **d'après-guerre** : des maisons simples en brique, souvent avec une cave sous toute la surface. Acheter une telle maison et la rénover entièrement, c'est apporter **d'un coup beaucoup d'humidité de construction** : un plafonnage neuf, une chape avec chauffage par le sol, parfois une extension à l'arrière.",
        "Une cave de cette époque est rarement bien étanche. Après un hiver pluvieux, elle est souvent humide, même sans travaux. Au démarrage, le technicien mesure donc s'il s'agit d'humidité de construction ou d'eau venant de l'extérieur. **C'est ce qui détermine si un déshumidificateur résout le problème.**",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison d'après-guerre entièrement rénovée.** Avec 70 litres par jour, il sèche un rez-de-chaussée avec une chape neuve." },
      { key: "ttk170", waarom: "Pour une salle de bains ou une seule pièce dans une maison habitée. Cet appareil compact retire 50 litres par jour de l'air, pour une consommation de 0,75 kW." },
      { key: "revolution", waarom: "**Pour une cave humide et fraîche.** Un déshumidificateur à adsorption retire l'humidité de l'air même à basse température." },
      { key: "ttv4500", waarom: "Dans **une extension à l'arrière** avec une chape neuve, il dirige l'air sur le sol pour qu'il sèche de manière uniforme." },
    ],
    levering: {
      kop: "Livraison à Saint-Georges-sur-Meuse : tout près de l'E42",
      alinea:
        "Nous rejoignons Saint-Georges **par l'E40 et l'E42**, un peu plus d'une heure de route. Vous choisissez une date de livraison au moment de réserver ; en Wallonie, nous livrons sur rendez-vous. Dans un lotissement, la camionnette peut généralement se garer dans l'allée. Le technicien installe les appareils, dirige l'évacuation vers un avaloir et **note les valeurs d'humidité du mur et du sol**.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar depuis Saint-Georges",
      alinea:
        "Le point d'enlèvement est à un peu plus d'une heure de route de Saint-Georges. Si vous devez de toute façon aller vers Anvers, vous pouvez emporter vous-même un petit appareil, **debout dans la voiture**. Pour une rénovation complète, la livraison est plus pratique, car le technicien détermine alors tout de suite le dispositif.",
    },
    buren: ["engis", "amay", "verlaine", "flemalle"],
    faq: [
      {
        q: "Ma cave d'après-guerre à Saint-Georges est toujours humide. Un déshumidificateur peut-il aider ?",
        a: "Oui, contre l'air humide et contre l'humidité de construction après des travaux. Si l'eau vient de l'extérieur à travers un mur non étanche, elle revient dès que l'appareil est parti. Le technicien mesure lors de l'installation et vous dit de laquelle des deux il s'agit.",
      },
      {
        q: "Comment sécher une chape neuve avec chauffage par le sol ?",
        a: "Laissez d'abord durcir la chape, puis mettez le chauffage par le sol en route selon le schéma de l'installateur. Placez entre-temps un déshumidificateur dans la pièce, portes fermées. Ainsi, l'humidité qui sort de la chape quitte réellement la pièce. À la reprise, nous mesurons la chape.",
      },
      {
        q: "Puis-je laisser tourner un déshumidificateur la nuit dans une maison habitée ?",
        a: "Oui, et c'est même le but : le séchage fonctionne le mieux sans interruption. Posez l'appareil sur un sol dur et pas contre le mur d'une chambre à coucher, le bruit dérangera alors le moins.",
      },
      {
        q: "Saint-Georges-sur-Meuse fait-il partie de votre zone de livraison ?",
        a: "Oui, nous livrons dans toute la commune, sur le plateau comme du côté de la vallée. Indiquez lors de la réservation l'adresse complète et le code postal. Nous convenons ensuite avec vous du moment de la livraison.",
      },
    ],
    realisaties: [],
  },

  wasseiges: {
    slug: "wasseiges",
    title: "Déshumidificateur de chantier à Wasseiges | Vernast",
    description:
      "Déshumidificateur à louer à Wasseiges, Ambresin, Meeffe ou Acosse ? Livraison et installation pour fermes, granges et maisons de village au bord de la Mehaigne.",
    h1: "Location de déshumidificateur à Wasseiges",
    kicker: "Province de Liège · sur la Mehaigne, à la limite de Namur",
    rit: { afstand: "environ 100 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Wasseiges se trouve à la limite ouest de la province de Liège, **contre la frontière avec la province de Namur**. La commune compte quatre villages : **Wasseiges, Ambresin, Meeffe et Acosse**. La **Mehaigne** y coule dans une vallée peu profonde entre les champs.",
      "Vous y trouvez **de grandes parcelles de betteraves et de céréales**, des fermes le long de la rue du village et peu de lotissements. Un chantier, c'est ici le plus souvent **une ferme, une grange ou une maison de village** en transformation, ou une maison neuve en bordure de village. Depuis Aartselaar, nous mettons **un peu plus d'une heure** pour y arriver.",
    ],
    bouw: {
      kop: "Des maisons près de la rivière et des granges sur le plateau",
      alineas: [
        "**Le long de la Mehaigne**, le terrain est plus bas et plus humide. Une maison ancienne proche de l'eau a souvent une cave ou un rez-de-chaussée **frais et moite**, même en dehors de l'hiver. Après une rénovation avec un plafonnage neuf, cette humidité de construction doit partir. Si de **l'eau remonte par le bas**, un déshumidificateur ne règle pas le problème et il faut d'abord traiter la cause.",
        "Plus haut sur le plateau, **des granges et des étables** sont transformées en habitation. Une nouvelle dalle en béton et des murs replafonnés dans un grand espace ouvert apportent **beaucoup d'eau en même temps**. Un grand déshumidificateur, associé à un ventilateur qui fait circuler l'air, permet de sécher un tel espace de manière uniforme.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une grange transformée en habitation** : une nouvelle dalle en béton et un plafonnage frais dans un seul espace ouvert. Il retire jusqu'à 110 litres par jour." },
      { key: "revolution", waarom: "Pour **une cave fraîche dans une maison au bord de la Mehaigne** : ce déshumidificateur à adsorption continue de retirer l'humidité de l'air même à basse température." },
      { key: "ttv4500", waarom: "Dans une grange ouverte, l'air humide reste dans les coins. Ce ventilateur **le met en mouvement**, pour que tout l'espace sèche de manière égale." },
      { key: "ttk350", waarom: "Pour **une maison de village à Ambresin ou à Meeffe** en transformation : 70 litres par jour, pour des volumes jusqu'à environ 400 m³." },
    ],
    levering: {
      kop: "Livraison à Wasseiges : par l'E40 et Hannut",
      alinea:
        "Depuis Aartselaar, nous roulons **un peu plus d'une heure**, par l'E40 puis via Hannut vers le sud. En Wallonie, la livraison se fait **sur rendez-vous** : vous choisissez une date de livraison lors de la réservation, et nous vous appelons pour convenir de l'heure. Si le chantier est une ferme au bout d'un chemin non revêtu, indiquez **la largeur et la solidité** de l'accès.",
    },
    afhalen: {
      kop: "Venir chercher depuis Wasseiges : un trajet rarement rentable",
      alinea:
        "Aller-retour jusqu'à Aartselaar, vous êtes **plus de deux heures en route**. Pour une grange ou une maison entière, il vous faut généralement plus d'un appareil, et cela ne rentre pas dans une voiture ordinaire. **Faites-vous livrer** : le technicien apporte tout en un seul trajet et le place tout de suite au bon endroit.",
    },
    buren: ["hannuit", "braives", "eghezee"],
    faq: [
      {
        q: "Ma maison est tout près de la Mehaigne. L'humidité de la cave est-elle de l'humidité de construction ?",
        a: "Pas toujours. Une cave proche d'une rivière peut recevoir de l'eau de l'extérieur après une période pluvieuse. L'humidité de construction après une rénovation disparaît avec un déshumidificateur, mais l'eau qui continue d'affluer revient. Dans ce cas, faites d'abord rechercher la cause.",
      },
      {
        q: "Qu'est-ce qu'un déshumidificateur à adsorption fait de différent d'un déshumidificateur classique ?",
        a: "Un déshumidificateur à condensation refroidit l'air jusqu'à ce que l'humidité se condense, et cela marche mal quand la pièce est déjà fraîche. Un déshumidificateur à adsorption retire l'humidité de l'air avec un agent dessiccant et continue donc de fonctionner dans une cave froide.",
      },
      {
        q: "Une grange transformée doit-elle être entièrement fermée avant le séchage ?",
        a: "Aussi fermée que possible. Par des portes ouvertes ou des baies sans châssis, l'air sec s'échappe et l'air humide extérieur entre. Fermez les ouvertures avec une bâche ou des panneaux. Le déshumidificateur retire alors l'humidité des murs et du sol au lieu de celle de l'air extérieur.",
      },
      {
        q: "Livrez-vous aussi de l'autre côté de la limite provinciale, à Éghezée ?",
        a: "Oui, nous livrons aussi à Éghezée et dans les autres communes de la province de Namur, qui ont chacune leur propre page. Pour le planning, la limite provinciale ne change rien : nous combinons autant que possible les adresses de la région.",
      },
    ],
    realisaties: [],
  },

  ans: {
    slug: "ans",
    title: "Louer un déshumidificateur à Ans, Alleur et Loncin | Vernast",
    description:
      "Déshumidificateur à louer à Ans, Alleur et Loncin : rénovation d'une maison ouvrière du passé minier ou construction neuve sur le plateau. Livré et installé.",
    h1: "Location de déshumidificateur à Ans",
    kicker: "Province de Liège · sur le plateau au-dessus de la ville",
    rit: { afstand: "environ 115 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Ans se trouve sur le plateau à l'ouest de Liège, là où la ville laisse place à la campagne ouverte de la Hesbaye. À **Loncin**, l'E40 et l'E313 se rejoignent. Le fort de Loncin faisait partie de la ceinture de forts autour de Liège. Alleur et Xhendremael appartiennent aussi à la commune.",
      "Ans était une **commune charbonnière**. Les mines ont fermé depuis longtemps, mais vous en voyez encore la trace dans les longues rangées de maisons ouvrières. Entre elles s'étendent des lotissements plus récents. Depuis notre entrepôt d'Aartselaar, nous mettons un peu plus d'une heure pour rejoindre Ans.",
    ],
    bouw: {
      kop: "Maisons ouvrières du passé minier, constructions neuves sur le plateau",
      alineas: [
        "Une **maison ouvrière** à Ans est étroite et a une petite cave, ou pas de cave du tout. Les murs sont souvent en brique pleine, sans creux. Lors d'une rénovation, il y a un plafonnage neuf et parfois une chape. Le volume est petit, donc l'air se sature vite. Un déshumidificateur compact dans une pièce fermée fait ici davantage qu'un gros appareil dans une maison ouverte.",
        "Dans une construction neuve, **une cave en cours de construction** reste parfois longtemps mouillée après la pluie. Pompez d'abord l'eau stagnante avant de commencer le séchage. Si vous voyez une fissure dans un mur par où l'humidité entre, faites-la d'abord réparer. Lors de l'installation, le technicien examine d'où vient l'humidité.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**Pour une maison ouvrière étroite** : compact, 50 litres par jour et adapté aux volumes jusqu'à environ 250 m³. Séchez pièce par pièce, porte fermée." },
      { key: "ttk350", waarom: "Pour une construction neuve à Loncin ou à Alleur : 70 litres par jour, largement suffisant pour un rez-de-chaussée dont la chape vient d'être coulée." },
      { key: "radiaal2250", waarom: "**Pour une cave en cours de construction** : ce ventilateur radial souffle de façon ciblée sur le sol mouillé et dans les coins, là où l'eau reste le plus longtemps." },
      { key: "ttv4500", waarom: "Dans une maison mitoyenne profonde sans circulation d'air, ce ventilateur déplace 4 500 m³ d'air par heure, pour que **l'annexe arrière sèche aussi**." },
    ],
    levering: {
      kop: "Livraison à Ans : tout près de l'échangeur de Loncin",
      alinea:
        "Ans se trouve **à côté de l'échangeur de Loncin**. Par l'E313, hors heures de pointe, nous y sommes en un peu plus d'une heure. Vous choisissez une date de livraison lors de la réservation, et nous convenons avec vous du moment précis. Le technicien installe l'appareil, le règle et **mesure l'humidité au démarrage**.",
    },
    afhalen: {
      kop: "Enlèvement : tout droit par l'E313",
      alinea:
        "Aartselaar se trouve **un peu plus d'une heure** plus loin sur la même autoroute. Si vous devez de toute façon aller vers Anvers, vous pouvez emporter un appareil. Transportez toujours un déshumidificateur debout. Si votre rénovation demande plus d'un appareil, **la livraison est plus simple**.",
    },
    buren: ["luik-stad", "saint-nicolas", "awans", "juprelle", "grace-hollogne"],
    faq: [
      {
        q: "Mon mur a une fissure due à un tassement. Un déshumidificateur peut-il aider ?",
        a: "Un déshumidificateur retire l'humidité du mur et de l'air, mais tant que l'eau entre par la fissure, elle revient. Faites d'abord réparer ou colmater la fissure. Le mur sèche ensuite plus vite avec un appareil, et le technicien peut vérifier si l'humidité diminue.",
      },
      {
        q: "Combien de déshumidificateurs faut-il pour une maison ouvrière à Ans ?",
        a: "Pour une maison mitoyenne étroite, un seul déshumidificateur compact suffit souvent. Vous le déplacez de pièce en pièce, ou vous le laissez dans la plus grande pièce, portes fermées. Si le rez-de-chaussée reçoit aussi une nouvelle chape, un deuxième appareil ou un ventilateur est utile.",
      },
      {
        q: "Livrez-vous aussi à Alleur et à Xhendremael ?",
        a: "Oui, Alleur et Xhendremael sont des sections d'Ans et se trouvent dans notre zone de livraison. À Xhendremael, il s'agit plutôt de maisons rurales et de fermes. Précisez alors l'accès, pour que la camionnette ne reste pas coincée dans un chemin de campagne étroit.",
      },
      {
        q: "Ma fouille à Ans se remplit après chaque averse. Que faire en premier ?",
        a: "Pompez d'abord l'eau stagnante. Un déshumidificateur est fait pour l'humidité qui reste dans le sol et les parois, pas pour une flaque. Ensuite, un déshumidificateur, avec un ventilateur radial qui souffle sur le sol, retire cette humidité résiduelle.",
      },
    ],
    realisaties: [],
  },

  awans: {
    slug: "awans",
    title: "Déshumidificateur à louer à Awans, aux portes de la Hesbaye",
    description:
      "Louez un déshumidificateur à Awans, Othée, Hognoul, Fooz ou Villers-l'Évêque : ferme transformée ou maison neuve près de l'E40. Livraison et installation.",
    h1: "Location de déshumidificateur à Awans",
    kicker: "Province de Liège · aux portes de la Hesbaye",
    rit: { afstand: "environ 110 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Awans se trouve à l'ouest de Liège, **aux portes de la Hesbaye**. Au-delà des constructions d'Ans commence ici la campagne ouverte, avec des champs et des villages comme Othée, Hognoul, Fooz et Villers-l'Évêque. L'E40 traverse la commune de part en part.",
      "La commune est rurale, mais elle grandit. La proximité de Liège et de l'aéroport attire des constructions neuves, et en même temps, **d'anciennes fermes et granges** sont transformées en habitations. Chacun de ces chantiers demande une approche propre. Depuis Aartselaar, nous roulons un peu plus d'une heure jusqu'à Awans.",
    ],
    bouw: {
      kop: "Fermes en brique et maisons neuves dans les villages",
      alineas: [
        "Une **ferme hesbignonne** a d'épais murs en brique, souvent sans isolation. Si vous transformez une grange ou une étable en habitation, vous ajoutez un plafonnage neuf et un nouveau sol dans un volume grand et haut. Un tel espace ne sèche bien qu'avec une capacité suffisante et **un mouvement d'air jusque sous le faîte**.",
        "Dans une construction neuve, c'est la chape du rez-de-chaussée qui fixe le planning. Elle doit être assez sèche avant que le poseur de sol commence, et c'est une mesure qui en décide, pas le calendrier. Une cave ou un vide sanitaire qui reste mouillé après la pluie, **vous le traitez à part**, avec un ventilateur qui souffle sur le sol.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une grange transformée en habitation** : 110 litres par jour et adapté aux volumes jusqu'à environ 600 m³, même avec beaucoup de plafonnage neuf." },
      { key: "ttv4500", waarom: "Dans une étable transformée, l'air humide stagne sous le faîte ou contre le sol. Ce ventilateur **maintient tout le volume en mouvement**." },
      { key: "ttk350", waarom: "Pour une maison neuve à Hognoul ou à Fooz : 70 litres par jour, pour un rez-de-chaussée avec une chape fraîche jusqu'à environ 400 m³." },
      { key: "teddh30", waarom: "**Pour une ferme sans chauffage** en hiver. Ce chauffage de chantier de 30 kW amène la pièce à température, pour que le déshumidificateur travaille mieux. Prévoyez un raccordement en 400 V." },
    ],
    levering: {
      kop: "Livraison à Awans : le long de l'E40 et des chemins de campagne",
      alinea:
        "Awans se trouve **sur l'E40, tout près de l'échangeur de Loncin**, à un peu plus d'une heure de route d'Aartselaar. Si la ferme est au bout d'un chemin de campagne étroit ou derrière un portail, précisez l'accès. Vous choisissez une date de livraison et nous convenons de l'heure avec vous. Le technicien met les appareils en place et **note la première mesure**.",
    },
    afhalen: {
      kop: "Enlèvement : un peu plus d'une heure jusqu'à Aartselaar",
      alinea:
        "Si vous avez une camionnette et devez de toute façon passer du côté d'Anvers, vous pouvez venir chercher le matériel. Pour une grange transformée avec **deux ou trois appareils et un ventilateur**, la livraison est plus simple. Le technicien examine alors tout de suite le dispositif.",
    },
    buren: ["ans", "juprelle", "grace-hollogne"],
    faq: [
      {
        q: "Je transforme une grange à Othée en habitation. Comment organiser le séchage ?",
        a: "Une grange est haute, donc le volume est plus grand que ne le laisse penser la surface au sol. Nous combinons généralement un grand déshumidificateur avec un ventilateur qui garde l'air en mouvement. Indiquez la longueur, la largeur et la hauteur lors de la réservation ; le technicien vérifie le dispositif sur place.",
      },
      {
        q: "Puis-je sécher en hiver dans une ferme d'Awans sans chauffage ?",
        a: "Un déshumidificateur à condensation a besoin de plus de 15 °C environ pour bien fonctionner. Dans une ferme froide, nous plaçons donc à côté un chauffage de chantier électrique, qui réchauffe d'abord la pièce. Un déshumidificateur à adsorption est une alternative, car il fonctionne aussi dans les pièces froides.",
      },
      {
        q: "Comment savoir si ma chape est assez sèche pour le poseur de sol ?",
        a: "C'est une mesure d'humidité qui le dit, pas le nombre de jours. Votre poseur de sol fixe la valeur limite pour son matériau. Faites mesurer l'humidité résiduelle avant qu'il commence, pour pouvoir lui donner un chiffre concret au lieu de deviner.",
      },
      {
        q: "Les murs épais d'une ferme demandent-ils plus de temps pour sécher ?",
        a: "Oui. Un mur épais en brique ancienne retient beaucoup d'humidité et la libère lentement. Le plafonnage sur un tel mur paraît vite sec en surface, alors que le mur derrière reste mouillé plus longtemps. Une mesure en profondeur en dit plus que ce que vous voyez en surface.",
      },
    ],
    realisaties: [],
  },

  aywaille: {
    slug: "aywaille",
    title: "Déshumidificateur à Aywaille et Remouchamps | Vernast",
    description:
      "Déshumidificateur à louer à Aywaille, Remouchamps ou Harzé : maisons au bord de l'Amblève, vieilles maisons en pierre, neuf sur le plateau. Livré et mesuré.",
    h1: "Location de déshumidificateur à Aywaille",
    kicker: "Liège · sur l'Amblève, porte des Ardennes",
    rit: { afstand: "environ 155 km", tijd: "un peu plus d'une heure et demie" },
    intro: [
      "Aywaille se trouve **dans la vallée de l'Amblève**, sur l'E25, là où le paysage laisse place aux Ardennes. La commune comprend **Remouchamps**, connu pour ses grottes et leur promenade en barque sur une rivière souterraine, et Harzé avec son château.",
      "Le centre longe la rivière, avec des maisons et des commerces tout près de l'eau. Sur les versants et le plateau au-dessus se trouvent des villages avec **de vieilles maisons en pierre naturelle** et des lotissements plus récents. Depuis Aartselaar, il faut compter un peu plus d'une heure et demie de route.",
    ],
    bouw: {
      kop: "L'Amblève dans la vallée, le calcaire dans le sol",
      alineas: [
        "Le long de l'Amblève, les caves et les rez-de-chaussée sont bas, et la rivière peut monter vite après de fortes pluies. Après des **dégâts des eaux**, l'humidité se loge dans des murs en pierre naturelle ou en brique, souvent sans barrière contre l'humidité. Ils sèchent lentement. **Un ventilateur** qui chasse l'air humide de la paroi aide alors le déshumidificateur.",
        "Le sous-sol est ici **calcaire**, d'où les grottes. L'eau se fraie un chemin à travers la roche, et une cave creusée dans le versant peut recevoir de l'humidité de l'extérieur après une période pluvieuse. Lors d'une rénovation, le technicien mesure donc d'abord s'il s'agit d'humidité de construction ou **d'eau venant du sol**.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Après des dégâts des eaux le long de l'Amblève** : 110 litres par jour et une portée jusqu'à 600 m³ pour un rez-de-chaussée inondé." },
      { key: "ttv4500", waarom: "Contre **un mur en pierre naturelle mouillé**, ce ventilateur évacue l'air saturé, pour que le déshumidificateur ait prise." },
      { key: "revolution", waarom: "Pour **une cave froide creusée dans le versant** : ce déshumidificateur à adsorption continue de fonctionner là où il fait trop froid pour un appareil à condensation." },
      { key: "ttk350", waarom: "Pour une construction neuve ou une rénovation sur le plateau : 70 litres par jour et une portée jusqu'à 400 m³, assez pour un rez-de-chaussée avec chape et plafonnage." },
    ],
    levering: {
      kop: "Livraison à Aywaille : sur l'E25, aux portes des Ardennes",
      alinea:
        "Aywaille a **sa propre sortie sur l'E25**, et le trajet depuis Aartselaar dure un peu plus d'une heure et demie. En Wallonie, nous livrons sur rendez-vous : vous choisissez une date de livraison lors de la réservation. Vous habitez un village sur les hauteurs avec une route d'accès étroite ? **Signalez à l'avance** comment la camionnette peut arriver jusqu'à chez vous.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Aywaille : rarement rentable",
      alinea:
        "Jusqu'à Aartselaar, il y a un peu plus d'une heure et demie de route, et il faut encore revenir. Laissez-nous plutôt livrer : le technicien place les appareils à l'endroit le plus humide et **mesure au démarrage** la quantité d'humidité dans les murs.",
    },
    buren: ["sprimont", "comblain-au-pont", "hamoir", "ferrieres", "theux"],
    faq: [
      {
        q: "Ma maison au bord de l'Amblève a été inondée. Par où commencer ?",
        a: "D'abord évacuer l'eau stagnante et la boue, puis retirer les revêtements de sol et le plafonnage abîmés. Vient ensuite le séchage des murs et du sol. Indiquez lors de la réservation la hauteur atteinte par l'eau, et le technicien apportera la bonne combinaison de déshumidificateur et de ventilateur.",
      },
      {
        q: "L'humidité de ma cave vient-elle de la roche ?",
        a: "C'est possible, surtout si la cave est creusée dans le versant. Le calcaire laisse passer l'eau par les fissures et les fentes. Le technicien mesure lors de l'installation ; si l'humidité revient après chaque averse, un déshumidificateur ne règle que l'humidité de construction, pas l'arrivée d'eau de l'extérieur.",
      },
      {
        q: "Livrez-vous aussi à Remouchamps et à Harzé ?",
        a: "Oui, ces villages font partie d'Aywaille. Harzé se trouve plus haut sur le plateau, Remouchamps dans la vallée. Indiquez l'adresse et le type de travaux, et nous conviendrons avec vous d'une date de livraison.",
      },
      {
        q: "Combien de temps faut-il pour sécher une maison en pierre après des dégâts des eaux ?",
        a: "Un mur en pierre naturelle sans barrière contre l'humidité libère son eau lentement, comptez donc plutôt quelques semaines. Un déshumidificateur avec un ventilateur dirigé vers le mur accélère nettement le processus. Faites mesurer les murs avant d'appliquer un nouveau plafonnage ou de la peinture.",
      },
    ],
    realisaties: [],
  },

  "beyne-heusay": {
    slug: "beyne-heusay",
    title: "Louer un déshumidificateur à Beyne-Heusay | Vernast",
    description:
      "Déshumidificateur à Beyne-Heusay : maisons de l'époque minière, Queue-du-Bois et Bellaire aux portes de Liège. Livré, installé, humidité mesurée au démarrage.",
    h1: "Location de déshumidificateur à Beyne-Heusay",
    kicker: "Liège · à la limite est de la ville",
    rit: { afstand: "environ 125 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Beyne-Heusay se trouve **juste à l'est de Liège**, sur le versant qui monte de la vallée de la Meuse vers le plateau de Herve. La commune touche **Jupille et Grivegnée**, si bien que vous ne remarquez souvent pas où Liège s'arrête. Depuis Aartselaar, nous y sommes en un peu plus d'une heure.",
      "La commune se compose de **Beyne-Heusay, Queue-du-Bois et Bellaire**. Comme une grande partie de la périphérie liégeoise, elle a un **passé charbonnier**. Les mines sont fermées, mais les maisons mitoyennes de cette époque marquent encore le paysage de rue, avec des quartiers et des appartements plus récents entre elles.",
    ],
    bouw: {
      kop: "Maisons mitoyennes dans la pente, constructions neuves entre elles",
      alineas: [
        "Beaucoup de maisons anciennes sont construites **dans la pente, avec une cave ou un souterrain du côté bas**. À l'arrière, le terrain est alors plus haut que le sol de la maison, et après un hiver pluvieux, **l'humidité traverse le mur à cet endroit**. Lors d'une rénovation, vous devez savoir quelle humidité vient de la construction et laquelle vient de l'extérieur.",
        "Dans les quartiers plus récents se trouvent **des appartements et des maisons unifamiliales**. L'humidité y vient surtout de **la chape fraîche et du plafonnage neuf**. Un appartement a peu de volume et peu de renouvellement d'air, donc l'eau reste dans la pièce.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "Pour **une maison mitoyenne dans la pente** avec un plafonnage neuf : 70 litres par jour, pour des volumes jusqu'à environ 400 m³." },
      { key: "revolution", waarom: "**Pour un souterrain à moitié enterré.** Le déshumidificateur à adsorption continue de fonctionner dans une pièce fraîche et humide." },
      { key: "ttk170", waarom: "Pour **un appartement avec un plafonnage neuf** : compact, 50 litres par jour, et économe avec 0,75 kW." },
      { key: "ttv4500", waarom: "Le long **du mur arrière adossé à la pente**, ce ventilateur amène l'air humide vers le déshumidificateur." },
    ],
    levering: {
      kop: "Livraison à Beyne-Heusay",
      alinea:
        "Par l'E313 et l'E40, nous sommes chez vous en **un peu plus d'une heure**. Vous choisissez une date de livraison lors de la réservation ; la livraison elle-même se fait **sur rendez-vous**. Dans les rues en pente, se garer est parfois difficile. Dites-nous s'il y a de la place pour une camionnette, et le technicien cherchera le chemin le plus court pour entrer.",
    },
    afhalen: {
      kop: "Venir chercher vous-même à Aartselaar",
      alinea:
        "Depuis Beyne-Heusay, aller chercher un appareil à Aartselaar représente **plus de deux heures de route** aller-retour. Si vous devez de toute façon aller à Anvers, vous pouvez combiner. Sinon, la livraison est plus simple, d'autant qu'un déshumidificateur ne se porte pas facilement en haut d'une pente.",
    },
    buren: ["luik-stad", "fleron", "soumagne"],
    faq: [
      {
        q: "Mon souterrain est à moitié sous terre. Puis-je le faire sécher après la rénovation ?",
        a: "Pour l'humidité de construction, oui, avec un déshumidificateur à adsorption qui fonctionne aussi dans une pièce fraîche. Si le terrain à l'arrière pousse de l'eau à travers le mur, elle revient. Le technicien mesure lors de l'installation et vous dit s'il faut d'abord intervenir côté extérieur.",
      },
      {
        q: "Puis-je utiliser un déshumidificateur dans un appartement d'un immeuble habité ?",
        a: "Oui. Pour un appartement, nous choisissons généralement le modèle compact. Placez l'appareil dans une pièce, porte fermée, et prévenez les voisins s'il doit tourner jour et nuit. Il fonctionne sur une prise de courant standard.",
      },
      {
        q: "À quelle distance de ma maison à Queue-du-Bois la camionnette doit-elle pouvoir s'arrêter ?",
        a: "Le plus près possible de la porte d'entrée, mais quelques dizaines de mètres ne posent pas de problème : le technicien a un diable. Si la rue est raide ou étroite, signalez-le lors de la réservation. Il saura ainsi à l'avance où il peut s'arrêter.",
      },
      {
        q: "Combien de temps laisser un déshumidificateur après un plafonnage neuf ?",
        a: "Cela dépend de l'épaisseur et du type de plâtre, et de la température du mur. Un mur froid ou une couche épaisse d'enduit à la chaux demande plus de temps. Faites mesurer le mur avant de peindre, car une peinture sur un mur humide s'écaille plus tard.",
      },
    ],
    realisaties: [],
  },

  bitsingen: {
    slug: "bitsingen",
    title: "Location de déshumidificateur à Bassenge, vallée du Geer",
    description:
      "Déshumidificateur à louer à Bassenge : maisons en marne et fermes de la vallée du Geer, d'Eben-Emael à Glons et Wonck. Livré, installé, avec mesure d'humidité.",
    h1: "Location de déshumidificateur à Bassenge",
    kicker: "Liège · la vallée du Geer à la frontière linguistique",
    rit: { afstand: "environ 115 km", tijd: "un peu plus d'une heure" },
    intro: [
      "**Bassenge**, Bitsingen en néerlandais, se trouve dans **la vallée du Geer**, qui coule de la Hesbaye vers Maastricht. La commune touche Riemst et les Pays-Bas. Depuis Aartselaar, nous y arrivons en un peu plus d'une heure.",
      "Bassenge comprend **Boirs, Eben-Emael, Glons, Roclenge-sur-Geer et Wonck**. Eben-Emael est connu pour **son fort au bord du canal Albert**. Dans la région, on a longtemps extrait la marne, un calcaire tendre qui servait aussi de pierre de construction.",
    ],
    bouw: {
      kop: "Marne, silex et fonds de vallée humides",
      alineas: [
        "Dans les villages de la vallée du Geer, on trouve **de vieilles maisons et des fermes aux murs en marne et en silex**. La marne est poreuse : elle absorbe beaucoup d'eau et la restitue lentement. Lors d'une rénovation, un tel mur se sèche donc **de manière uniforme et sans chaleur supplémentaire**.",
        "En bas de la vallée, près du Geer, le sol est **humide**. Un rez-de-chaussée sans barrière contre l'humidité y reste frais. Plus haut, au bord du plateau, se trouvent **des constructions neuves dans des lotissements**. Là, c'est surtout le temps de séchage de la chape qui compte.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une ferme ou une maison en marne avec un plafonnage neuf** : 70 litres par jour, pour des volumes jusqu'à environ 400 m³." },
      { key: "revolution", waarom: "Pour **un rez-de-chaussée frais dans la vallée du Geer** : ce déshumidificateur à adsorption retire l'humidité de l'air même à basse température." },
      { key: "ttk650", waarom: "Pour **une construction neuve avec une chape sur tout le rez-de-chaussée** : 110 litres par jour, jusqu'à environ 600 m³." },
      { key: "radiaal2250", waarom: "Ce ventilateur radial dirige **un flux d'air ciblé sur un sol** qui doit sécher de manière égale. Il est protégé contre les projections d'eau (IP55)." },
    ],
    levering: {
      kop: "Livraison à Bassenge",
      alinea:
        "D'Aartselaar jusque dans la vallée du Geer, il y a **un peu plus d'une heure de route**. Vous choisissez une date de livraison lors de la réservation, et nous confirmons la livraison **sur rendez-vous**. Si la ferme a une allée étroite ou une cour intérieure non revêtue, signalez-le. Le technicien saura ainsi jusqu'où il peut s'approcher.",
    },
    afhalen: {
      kop: "Venir chercher vous-même à Aartselaar",
      alinea:
        "Si votre travail vous amène régulièrement dans la région d'Anvers, vous pouvez prendre un appareil **en passant**. Sinon, vous êtes plus de deux heures en route aller-retour, et vous refaites ce trajet pour le rapporter. Transportez toujours le déshumidificateur **debout**.",
    },
    buren: ["riemst", "oupeye", "wezet", "juprelle"],
    faq: [
      {
        q: "Puis-je sécher un mur en marne avec un déshumidificateur de chantier ?",
        a: "Oui, si vous procédez calmement. La marne absorbe beaucoup d'eau et la restitue lentement. Si vous séchez trop vite et trop chaud, la surface se dessèche alors que le cœur reste mouillé. Un déshumidificateur sans chaleur supplémentaire et une mesure d'humidité au démarrage donnent le meilleur résultat.",
      },
      {
        q: "Vernast vient d'Aartselaar. Travaillez-vous aussi pour des chantiers à Bassenge ?",
        a: "Oui. Vernast est une entreprise flamande d'Aartselaar qui travaille aussi pour des chantiers en Wallonie. Vous ou votre entrepreneur avez des questions ? Écrivez-nous ou appelez-nous sans hésiter.",
      },
      {
        q: "Comment sécher une ferme de la vallée du Geer après une rénovation en profondeur ?",
        a: "Travaillez par zone. Fermez les pièces que vous voulez sécher, placez un déshumidificateur dans chaque zone et un ventilateur le long des murs les plus humides. Avec des murs épais et un sol froid, cela prend des semaines. Une deuxième mesure après quelques semaines montre où vous en êtes.",
      },
      {
        q: "Livrez-vous aussi à Eben-Emael et à Wonck ?",
        a: "Oui, dans tous les villages de Bassenge. Indiquez lors de la réservation l'adresse complète et les particularités, comme une allée étroite ou une maison située derrière une autre. Nous planifions le trajet avec d'autres adresses de la région.",
      },
    ],
    realisaties: [],
  },

  blegny: {
    slug: "blegny",
    title: "Déshumidificateur de chantier à Blegny, près de Blegny-Mine",
    description:
      "Louez un déshumidificateur à Blegny : maisons de mineurs près de Blegny-Mine, fermes à Saint-Remy et Housse, neuf à Barchon et Saive. Livré, installé, mesuré.",
    h1: "Location de déshumidificateur à Blegny",
    kicker: "Liège · la commune de Blegny-Mine",
    rit: { afstand: "environ 130 km", tijd: "près d'une heure et demie" },
    intro: [
      "Blegny se trouve **en bordure du Pays de Herve**, au nord-est de Liège. La commune est connue pour **Blegny-Mine**, l'ancien charbonnage de Trembleur inscrit au patrimoine mondial de l'UNESCO. Depuis Aartselaar, nous y arrivons en près d'une heure et demie.",
      "Blegny comprend **Barchon, Housse, Mortier, Saint-Remy, Saive et Trembleur**. Maisons de mineurs, fermes et lotissements plus récents s'y côtoient. À Barchon se trouve l'un des **forts autour de Liège**.",
    ],
    bouw: {
      kop: "De la maison de mineur à la construction neuve",
      alineas: [
        "La **maison de mineur** est ici une image familière : une petite maison en brique, souvent en rangée, avec une cave et un grenier. Lors d'une rénovation, des pièces sont réunies et l'on pose **de nouveaux sols et un plafonnage neuf**. Toute cette eau se retrouve alors dans une maison aux petites fenêtres et à la faible circulation d'air.",
        "Vers Dalhem et Herve se trouvent **des fermes au milieu des prairies**, et à Barchon et Saive, des lotissements plus récents. Dans ces constructions neuves, c'est surtout **la chape du rez-de-chaussée** qui doit sécher avant la pose du revêtement de sol.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**Pour une petite maison de mineur** avec un escalier étroit : le modèle compact, 50 litres par jour, pour une pièce ou un grenier." },
      { key: "ttk350", waarom: "Pour **une maison rénovée à Trembleur ou à Saint-Remy** avec un plafonnage neuf aux deux étages : 70 litres par jour." },
      { key: "radiaal2250", waarom: "**Sur une chape fraîche à Barchon ou à Saive**, ce ventilateur radial dirige un flux d'air ciblé, pour que le rez-de-chaussée sèche de manière égale." },
      { key: "ttv4500", waarom: "Une maison aux petites fenêtres a peu de circulation d'air. Ce ventilateur **maintient l'air en mouvement** entre les murs humides et le déshumidificateur." },
    ],
    levering: {
      kop: "Livraison à Blegny",
      alinea:
        "D'Aartselaar jusqu'à Blegny, nous sommes **près d'une heure et demie** en route. Vous choisissez une date de livraison lors de la réservation, et nous fixons l'heure **sur rendez-vous**. Le technicien porte les appareils à l'intérieur, y compris à l'étage, les règle et mesure au démarrage. Si l'escalier est raide et étroit, signalez-le à l'avance.",
    },
    afhalen: {
      kop: "Venir chercher vous-même à Aartselaar",
      alinea:
        "Aller chercher un appareil puis le rapporter, c'est **deux allers-retours** jusqu'à Aartselaar, chaque fois près de trois heures de route. C'est rarement rentable. Avec la livraison, vous économisez ce temps et la mesure d'humidité est comprise.",
    },
    buren: ["wezet", "dalhem", "soumagne", "luik-stad"],
    faq: [
      {
        q: "Un déshumidificateur passe-t-il par l'escalier étroit d'une maison de mineur ?",
        a: "Notre plus petit modèle est compact et passe par la plupart des escaliers. Les déshumidificateurs plus grands demandent plus de place. Précisez lors de la réservation qu'il s'agit d'un escalier étroit, et nous choisirons un appareil qui arrive en haut.",
      },
      {
        q: "En combien de temps sèche une chape dans une construction neuve à Barchon ?",
        a: "Cela dépend de l'épaisseur, du type de chape et de la saison. Une chape sable-ciment demande de nombreuses semaines sans aide. Avec un déshumidificateur, des fenêtres fermées et un ventilateur sur le sol, cela va plus vite. Faites mesurer l'humidité résiduelle avant de poser un revêtement de sol.",
      },
      {
        q: "L'humidité de ma cave à Blegny vient-elle des anciennes galeries de mine ?",
        a: "Nous ne pouvons pas le déterminer ; pour cela, il vous faut un expert en construction. Le technicien mesure en revanche s'il s'agit d'humidité de construction, qu'un déshumidificateur élimine, ou d'humidité qui revient sans cesse. Dans ce dernier cas, le séchage seul ne résout pas le problème.",
      },
      {
        q: "Le déshumidificateur peut-il tourner dans un grenier sous le toit ?",
        a: "Oui, mais un grenier devient chaud en été et froid en hiver. Un déshumidificateur à condensation fonctionne bien au-dessus de 15 °C. Dans un grenier froid, nous ajoutons un chauffage de chantier, et nous plaçons l'évacuation de façon à ce que l'eau s'écoule en toute sécurité.",
      },
    ],
    realisaties: [],
  },

  tinlot: {
    slug: "tinlot",
    title: "Déshumidificateur à louer à Tinlot, dans le Condroz",
    description:
      "Déshumidificateur à louer à Tinlot, Seny, Abée, Fraiture ou Ramelot : fermes et villas neuves sur le plateau du Condroz. Livré sur rendez-vous, avec mesure.",
    h1: "Location de déshumidificateur à Tinlot",
    kicker: "Province de Liège · le plateau ouvert du Condroz",
    rit: { afstand: "environ 145 km", tijd: "environ une heure et demie" },
    intro: [
      "Tinlot est une petite commune rurale **sur le plateau du Condroz, entre Nandrin et Clavier**. Elle est née de la fusion de 1977 d'**Abée, Fraiture, Ramelot, Seny et Soheit-Tinlot**, et tient son nom de ce dernier village. Le paysage est **ouvert et vallonné**, avec de grands champs, des fermes sur les crêtes et des bosquets dans les creux.",
      "À côté d'**anciennes fermes et maisons de village en pierre naturelle**, Tinlot compte des **villas et maisons quatre façades** sur de grands terrains. Vous y trouvez donc aussi bien de la rénovation en pierre que de la construction neuve. Depuis Aartselaar, nous y arrivons en environ une heure et demie.",
    ],
    bouw: {
      kop: "Des maisons neuves exposées au vent et des fermes en grès",
      alineas: [
        "**Une maison quatre façades sur le plateau ouvert** prend le vent de tous les côtés. Sur un chantier d'hiver, le gros œuvre se refroidit vite et une chape fraîchement coulée ne sèche alors presque pas. Fenêtres fermées, avec un chauffage et **un déshumidificateur par niveau**, le poseur de sol peut commencer à temps plutôt qu'un mois plus tard.",
        "**Une ancienne ferme à Seny ou à Abée** a des murs épais en grès et en calcaire, et c'est souvent une étable ou une grange qui est transformée en habitation. Une telle grange a **des pièces hautes et peu de murs intérieurs**, donc un grand volume d'air. La capacité du déshumidificateur y compte plus que sa taille.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une grange transformée avec un grand espace ouvert sous la toiture** : 110 litres par jour et une portée jusqu'à environ 600 m³." },
      { key: "ttk350", waarom: "Pour une maison neuve, un appareil par niveau : 70 litres par jour pour une chape et un plafonnage frais dans des pièces jusqu'à environ 400 m³." },
      { key: "teddh30", waarom: "En hiver, un gros œuvre sur le plateau ouvert se refroidit vite. **Ce chauffage de 30 kW garde la pièce assez chaude** pour le déshumidificateur. Il fonctionne en 400 V." },
      { key: "radiaal2250", waarom: "Souffle de l'air sec de façon ciblée sur une chape fraîche, pour que le sol sèche uniformément et pas seulement sur les bords." },
    ],
    levering: {
      kop: "Livraison à Tinlot : par Liège jusque sur le plateau",
      alinea:
        "Depuis Aartselaar, nous roulons **par la E313 jusqu'à Liège**, puis nous montons sur le plateau, en environ une heure et demie au total. Vous choisissez la date de livraison lors de la réservation, et nous convenons de l'heure avec vous. Si le chantier se trouve au bout d'une allée non revêtue ou d'un chemin de campagne, signalez-le à l'avance. **Le technicien emporte un diable** et installe les appareils niveau par niveau.",
    },
    afhalen: {
      kop: "Venir chercher depuis Tinlot vous prend une demi-journée",
      alinea:
        "Avec environ une heure et demie par trajet, vous passez **environ trois heures sur la route** aller et retour. Deux ou trois déshumidificateurs et un chauffage pour une construction neuve n'entrent d'ailleurs pas dans une voiture. **Un pack de séchage comprend la livraison et la reprise**, ainsi que la mesure d'humidité au départ et à la reprise.",
    },
    buren: ["nandrin", "clavier", "ouffet"],
    faq: [
      {
        q: "Ma chape ne sèche pas dans une maison neuve en plein champ. Que se passe-t-il ?",
        a: "Le plus souvent, il fait trop froid. En hiver, un gros œuvre non chauffé sur un terrain venteux dépasse à peine dix degrés, et une chape ne sèche alors presque pas. Fenêtres fermées, avec un chauffage et un déshumidificateur, le séchage démarre. Au départ, le technicien mesure l'humidité du sol.",
      },
      {
        q: "Quel déshumidificateur pour une grange transformée sous une haute toiture ?",
        a: "Une grange a beaucoup de volume et peu de murs intérieurs. Choisissez donc plutôt un grand appareil de 110 litres par jour que trois petits. Un ventilateur met aussi en mouvement l'air sous le faîte. Indiquez le volume dans le calculateur pour voir quelle combinaison convient.",
      },
      {
        q: "Livrez-vous à Seny, Abée, Fraiture, Ramelot et Soheit-Tinlot ?",
        a: "Oui, nous livrons dans les cinq villages de Tinlot. Lors de la réservation, précisez le bon village et l'accès au chantier. Le technicien prépare ainsi bien son trajet et n'arrive pas du mauvais côté du plateau.",
      },
      {
        q: "Comment savoir si le sol est assez sec pour le poseur de sol ?",
        a: "Le technicien mesure le taux d'humidité à l'installation et à la reprise. Transmettez cette dernière mesure au poseur de sol, car c'est lui qui détermine la valeur limite que demande son revêtement. Si la chape est encore trop humide, nous voyons ensemble si les appareils restent plus longtemps.",
      },
    ],
    realisaties: [],
  },

  verlaine: {
    slug: "verlaine",
    title: "Déshumidificateur de chantier à louer à Verlaine | Vernast",
    description:
      "Louer un déshumidificateur à Verlaine, Bodegnée, Chapon-Seraing ou Seraing-le-Château ? Vernast livre et installe pour maisons de village et fermes rénovées.",
    h1: "Location de déshumidificateur à Verlaine",
    kicker: "Province de Liège · une commune rurale de Hesbaye",
    rit: { afstand: "environ 115 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Verlaine est une petite commune rurale de Hesbaye, entre Huy et Waremme. Elle compte quatre villages : **Verlaine, Bodegnée, Chapon-Seraing et Seraing-le-Château**, entourés de champs. Depuis Aartselaar, nous y arrivons en un peu plus d'une heure.",
      "Ceux qui rénovent ici travaillent le plus souvent sur **une ferme ou une maison de village ancienne** en briques. En bordure des villages, on trouve aussi un peu de construction neuve.",
    ],
    bouw: {
      kop: "Maisons de village et fermes en briques de Hesbaye",
      alineas: [
        "Une ancienne maison de village a des **murs pleins en briques** et souvent un sol posé directement sur la terre. L'humidité ascensionnelle y est fréquente. Après une injection ou un nouveau sol, le mur et la chape doivent sécher. Cela va **plus vite dans une pièce fermée et chauffée**.",
        "Une **étable ou une grange en cours de transformation** a des espaces hauts et ouverts. L'air humide n'y arrive pas tout seul jusqu'au déshumidificateur. Un grand appareil au milieu et un ventilateur qui fait circuler l'air fonctionnent alors mieux que deux petits appareils dans les coins.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une grange haute et ouverte qui devient une habitation.** Avec 110 litres par jour, il traite un grand volume dans un seul espace." },
      { key: "ttk350", waarom: "**Après une injection contre l'humidité ascensionnelle.** Avec 70 litres par jour, il retire l'humidité des murs rénovés et du nouveau sol d'une maison de village." },
      { key: "ttv4500", waarom: "Dans une étable haute, l'air humide reste en bas. Ce ventilateur le fait circuler, pour que le déshumidificateur puisse le capter." },
      { key: "teddh20", waarom: "**Pour une ferme non chauffée en hiver.** Ce chauffage de chantier de 20 kW en 400 V porte une pièce au-dessus de 15 °C, pour qu'un déshumidificateur à condensation travaille à pleine puissance." },
    ],
    levering: {
      kop: "Livraison à Verlaine : par la E40 vers les villages de Hesbaye",
      alinea:
        "Nous roulons **par la E40** puis les routes régionales jusqu'à Verlaine, un peu plus d'une heure de trajet. Vous choisissez une date de livraison lors de la réservation ; en Wallonie, nous livrons sur rendez-vous. Le technicien installe les appareils par zone de séchage, pose le tuyau d'évacuation et note les valeurs d'humidité. Si votre ferme se trouve sur un chemin de campagne étroit, indiquez **comment il peut accéder jusqu'à la grange**.",
    },
    afhalen: {
      kop: "Venir chercher depuis Verlaine : deux fois plus d'une heure",
      alinea:
        "Le point d'enlèvement d'Aartselaar se trouve à un peu plus d'une heure de route de Verlaine. Vous faites ce trajet pour l'enlèvement, puis à nouveau pour le retour. **La livraison est ici le choix logique**, car la reprise est aussi comprise.",
    },
    buren: ["amay", "villers-le-bouillet", "saint-georges-sur-meuse", "donceel"],
    faq: [
      {
        q: "Un déshumidificateur aide-t-il après une injection contre l'humidité ascensionnelle ?",
        a: "Oui, c'est justement le moment. L'injection bloque l'humidité qui remonte, mais l'eau déjà présente dans le mur doit encore en sortir. Un déshumidificateur dans la pièce, portes fermées, accélère nettement ce processus, pour que vous puissiez plafonner ou peindre plus tôt.",
      },
      {
        q: "Seraing-le-Château, est-ce la même chose que Seraing près de Liège ?",
        a: "Non. Seraing-le-Château est une section de Verlaine, dans la Hesbaye rurale. Seraing est une ville sur la Meuse, près de Liège. Indiquez donc le code postal lors de la réservation, pour que le technicien se rende à la bonne adresse.",
      },
      {
        q: "Un grand appareil fonctionne-t-il mieux que deux petits dans une grange ouverte ?",
        a: "Dans un espace haut et ouvert, généralement oui, à condition qu'un ventilateur fasse aussi circuler l'air. Deux petits appareils dans les coins sèchent surtout leur propre coin. À l'installation, le technicien regarde la forme de l'espace et adapte le dispositif en conséquence.",
      },
      {
        q: "Mon sol repose directement sur la terre. Puis-je le sécher avec un déshumidificateur ?",
        a: "La couche supérieure d'une chape neuve ou d'un sol mouillé, oui. Un sol sans barrière contre l'humidité absorbe toutefois l'humidité par en dessous, et elle revient alors. À l'installation, le technicien mesure le sol, pour que vous sachiez s'il s'agit d'humidité de construction.",
      },
    ],
    realisaties: [],
  },

  "villers-le-bouillet": {
    slug: "villers-le-bouillet",
    title: "Location de déshumidificateur à Villers-le-Bouillet",
    description:
      "Déshumidificateur à Villers-le-Bouillet, Warnant-Dreye ou Vaux-et-Borset ? Vernast livre pour les maisons neuves le long de la E42 et les fermes rénovées.",
    h1: "Location de déshumidificateur à Villers-le-Bouillet",
    kicker: "Province de Liège · sur le plateau au-dessus de Huy",
    rit: { afstand: "environ 115 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Villers-le-Bouillet se trouve sur le plateau au nord de Huy, en bordure de la **Hesbaye**. La E42 entre Namur et Liège traverse la commune, et de nombreux lotissements sont apparus le long de cet axe au cours des dernières décennies. Depuis Aartselaar, nous y sommes en un peu plus d'une heure.",
      "Entre les nouveaux quartiers se trouvent les anciens villages de Warnant-Dreye, Vaux-et-Borset, Vieux-Waleffe et Fize-Fontaine. On y voit des **fermes en carré** au milieu des champs, et plus d'une est aujourd'hui transformée en habitation.",
    ],
    bouw: {
      kop: "Construction neuve sur le plateau et fermes transformées en logements",
      alineas: [
        "En construction neuve, tout tourne autour du **planning**. La chape doit être assez sèche avant la pose du revêtement, et commencer trop tôt, c'est risquer un sol qui se décolle ou gonfle. Un déshumidificateur de la bonne taille, dans une pièce fermée, raccourcit ce temps d'attente.",
        "Une **ferme en carré** transformée en un ou plusieurs logements apporte un grand volume et des murs épais en briques. On y place souvent un appareil par aile et, en hiver, un chauffage de chantier pour d'abord amener l'espace à température. À l'installation, le technicien divise la ferme en **zones de séchage distinctes**.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison neuve dans un lotissement.** Avec 70 litres par jour, il a la bonne taille pour un rez-de-chaussée avec une chape fraîche." },
      { key: "ttk650", waarom: "**Pour une aile de ferme en carré sous une haute toiture.** Il retire 110 litres par jour de l'air, dans des espaces jusqu'à 600 m³." },
      { key: "teddh30", waarom: "Une ferme sur le plateau ouvert se refroidit fortement en hiver. Ce chauffage de chantier porte l'espace au-dessus de 15 °C, la température à partir de laquelle un déshumidificateur à condensation travaille bien." },
      { key: "ttv4500", waarom: "Dans une longue étable ou grange, il pousse l'air d'un pignon à l'autre, pour que le coin le plus éloigné ne reste pas à la traîne." },
    ],
    levering: {
      kop: "Livraison à Villers-le-Bouillet : facile d'accès par la E42",
      alinea:
        "Nous roulons **par la E40 et la E42**, un peu plus d'une heure de trajet. Vous choisissez une date de livraison lors de la réservation et, pour la Wallonie, nous fixons le moment précis avec vous. Votre ferme se trouve sur un chemin de campagne ? **Décrivez l'accès**, pour que le technicien puisse amener les appareils directement dans la bonne aile.",
    },
    afhalen: {
      kop: "Enlèvement : un peu plus d'une heure par trajet",
      alinea:
        "Depuis Villers-le-Bouillet, vous roulez un peu plus d'une heure jusqu'à Aartselaar, et le même trajet encore une fois pour le retour. Pour un chantier neuf ou une ferme, **mieux vaut vous faire livrer** : le technicien examine alors aussi le volume et le dispositif, qui déterminent le résultat tout autant que l'appareil.",
    },
    buren: ["hoei", "wanze", "amay", "verlaine", "braives"],
    faq: [
      {
        q: "Pourquoi la cave de ma maison neuve reste-t-elle humide si longtemps ?",
        a: "Pendant le gros œuvre, l'eau de pluie s'accumule dans la fouille et sur le sol de la cave, et le béton et la maçonnerie l'absorbent. Ensuite, l'humidité ne peut en sortir que lentement. Un déshumidificateur dans la cave fermée l'en retire plus vite qu'une aération fenêtres ouvertes.",
      },
      {
        q: "Combien d'appareils me faut-il pour une ferme en carré ?",
        a: "Généralement un déshumidificateur par aile ou par niveau, avec les portes fermées entre les zones. En hiver, on ajoute souvent un chauffage de chantier. À l'installation, le technicien évalue le volume et vous indique la combinaison qui fonctionne le mieux.",
      },
      {
        q: "Un déshumidificateur peut-il rester allumé quand le chantier est vide ?",
        a: "Oui. Il tourne jour et nuit et évacue son eau par un tuyau vers un puisard ou une évacuation. Prévoyez toutefois une prise qui ne se coupe pas quand l'entrepreneur ferme le coffret de chantier le soir.",
      },
      {
        q: "Livrez-vous aussi à Vieux-Waleffe et Fize-Fontaine ?",
        a: "Oui, dans toutes les sections de Villers-le-Bouillet. Les villages sont éloignés les uns des autres sur le plateau : indiquez donc l'adresse complète avec le code postal. Le technicien prépare ainsi son itinéraire et nous convenons avec vous d'un moment de livraison.",
      },
    ],
    realisaties: [],
  },

  wanze: {
    slug: "wanze",
    title: "Louer un déshumidificateur à Wanze, vallée de la Mehaigne",
    description:
      "Louer un déshumidificateur à Wanze, Antheit, Bas-Oha, Moha ou Huccorgne ? Vernast livre et installe pour maisons en pierre de la Mehaigne et nouveaux logements.",
    h1: "Location de déshumidificateur à Wanze",
    kicker: "Province de Liège · la sucrerie et la vallée de la Mehaigne",
    rit: { afstand: "environ 120 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Wanze se trouve au bord de la Meuse, juste en amont de Huy. La commune est connue pour **sa sucrerie**, où les camions vont et viennent en automne pendant la campagne betteravière. Depuis Aartselaar, nous y arrivons en un peu plus d'une heure.",
      "Derrière la zone industrielle, la **Mehaigne** coule dans une vallée verte, avec Moha, où se dressent les ruines du château, et Huccorgne. Antheit, Vinalmont et Bas-Oha se situent entre la Meuse et le plateau. Vous y trouvez d'anciennes maisons en pierre et des lotissements récents.",
    ],
    bouw: {
      kop: "Maisons de vallée sur la Mehaigne, lotissements au-dessus",
      alineas: [
        "À Moha et à Huccorgne, les maisons sont proches de la rivière et adossées au versant de la vallée, souvent avec des **murs épais en pierre naturelle**. Une telle maison reste fraîche par nature. En été, c'est agréable ; lors d'une rénovation, cela joue contre vous : **les murs froids sèchent lentement**, et un plafonnage frais y reste foncé pendant des semaines.",
        "Autour d'Antheit et de Vinalmont, le bâti est plus récent : **constructions neuves avec chape et chauffage par le sol** et extensions à l'arrière de maisons plus anciennes. Là, tout tourne autour du planning. Le poseur de sol ou le carreleur veut voir une valeur mesurée, et le technicien mesure la chape à la reprise.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une construction neuve avec une chape fraîche.** Avec 70 litres par jour et une portée jusqu'à 400 m³, le planning du poseur de sol reste tenable." },
      { key: "teddh30", waarom: "**Pour une maison en pierre rénovée sans chauffage en hiver.** Ce chauffage de chantier en 400 V amène d'abord la pièce à température, puis le séchage commence." },
      { key: "ttv4500", waarom: "Devant un **mur épais en pierre**, il chasse la couche d'air humide, pour que le déshumidificateur continue à retirer l'humidité du mur." },
      { key: "ttk170", waarom: "Pour une seule salle de bains ou chambre dans une maison habitée. Il est compact, consomme 0,75 kW et passe facilement par un escalier étroit." },
    ],
    levering: {
      kop: "Livraison à Wanze : le long de la Meuse ou par la vallée",
      alinea:
        "Nous roulons **par la E40** jusqu'à Wanze, un peu plus d'une heure de trajet. Vous choisissez une date de livraison lors de la réservation ; en Wallonie, nous convenons avec vous d'un rendez-vous pour le moment de livraison. Pendant la campagne betteravière, la circulation est plus dense autour de la sucrerie. Dans les rues étroites de Moha, indiquez de préférence à l'avance **où la camionnette peut s'arrêter**.",
    },
    afhalen: {
      kop: "Venir chercher depuis Wanze : comptez une demi-journée",
      alinea:
        "Notre entrepôt d'Aartselaar se trouve à un peu plus d'une heure de route de Wanze. Venir chercher et rapporter l'appareil, c'est faire ce trajet deux fois. **La livraison est ici plus logique**, surtout pour une rénovation où le déshumidificateur reste plusieurs semaines.",
    },
    buren: ["hoei", "villers-le-bouillet", "heron", "braives"],
    faq: [
      {
        q: "Ma maison à Moha est adossée au versant de la vallée de la Mehaigne. Que dois-je savoir ?",
        a: "Un mur contre la pente reçoit de l'humidité de l'extérieur après de fortes pluies. Un déshumidificateur élimine l'humidité de construction après une rénovation, mais il ne peut rien contre l'eau venant de la pente. À l'installation, le technicien mesure de quel côté se trouve l'humidité.",
      },
      {
        q: "Comment savoir quand la chape de ma maison neuve est assez sèche ?",
        a: "En mesurant, pas en comptant les jours. Le poseur de sol ou le carreleur détermine la valeur limite qui vaut pour son matériau. À la reprise, le technicien mesure la chape, pour que vous ayez un chiffre à transmettre.",
      },
      {
        q: "Intervenez-vous dans toutes les sections de Wanze ?",
        a: "Oui, de Bas-Oha au bord de la Meuse jusqu'à Huccorgne sur la Mehaigne. Mentionnez la section avec l'adresse. Les villages sont dispersés, et avec l'adresse complète, le technicien prépare correctement son itinéraire.",
      },
      {
        q: "Puis-je faire tourner un déshumidificateur dans une maison habitée ?",
        a: "Oui, si la pièce où il se trouve peut être fermée. Placez-le dans la pièce à sécher, gardez la porte fermée et utilisez le reste de la maison comme d'habitude. Il tourne aussi la nuit, car le séchage fonctionne le mieux sans interruption.",
      },
    ],
    realisaties: [],
  },

  amel: {
    slug: "amel",
    title: "Déshumidificateur de chantier à Amblève (Amel) | Vernast",
    description:
      "Louer un déshumidificateur à Amblève (Amel) : fermes de l'Eifel en moellons et maisons neuves sur le haut plateau froid. Installé par un technicien, mesuré.",
    h1: "Location de déshumidificateur à Amblève",
    kicker: "Province de Liège · villages de l'Eifel dans la vallée de l'Amblève",
    rit: { afstand: "environ 205 km", tijd: "un peu plus de deux heures" },
    intro: [
      "Amblève, **Amel** en allemand, se trouve dans l'Eifel belge, dans la partie germanophone de la province de Liège. La commune se compose de villages sur le haut plateau : **Amel, Heppenbach et Meyerode**, entourés de hameaux comme Born, Deidenberg et Schoppen. Depuis Aartselaar, vous y êtes en un peu plus de deux heures.",
      "Vous y trouvez surtout des prairies, des forêts et des fermes dispersées. Le climat est celui de la haute Ardenne, avec **de longs hivers, beaucoup de précipitations et des gelées nocturnes jusque tard au printemps**. La période où l'air extérieur aide à sécher un chantier y est donc plus courte qu'en Flandre.",
    ],
    bouw: {
      kop: "Anciennes fermes aux murs épais, construction neuve sur une courte saison",
      alineas: [
        "Le bâti ancien d'Amblève, c'est **la ferme de l'Eifel** : habitation et étable sous un même toit, avec des murs en moellons. Quand on la transforme en logement, un nouveau plafonnage est posé sur un mur froid et épais qui retient lui-même de l'humidité. **Le technicien mesure à l'installation** l'humidité du mur. Vous savez ainsi plus tard ce qui relevait de l'humidité de construction et ce que la pierre porte elle-même.",
        "En **construction neuve**, le calendrier pèse lourd. Si le gros œuvre se prolonge jusqu'en automne, la chape et le plafonnage doivent sécher pendant des mois froids et humides. Une maison non chauffée sur le haut plateau reste alors bien en dessous de 15 °C, la température à partir de laquelle un déshumidificateur à condensation travaille bien. **Un chauffage de chantier en plus ou un déshumidificateur à adsorption** résout ce problème.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison neuve avec une chape fraîche.** Retire jusqu'à 70 litres par jour de l'air dans des pièces jusqu'à environ 400 m³, assez pour tout un rez-de-chaussée." },
      { key: "teddh30", waarom: "**Pour un chantier d'hiver sur le haut plateau**, où une maison non chauffée reste froide pendant des semaines. Le chauffage fournit 30 kW et demande un raccordement en 400 V (courant triphasé)." },
      { key: "revolution", waarom: "Pour **une étable ou une grange froide qui devient pièce de vie**. Ce déshumidificateur à adsorption capte l'humidité même là où il fait trop froid pour un déshumidificateur à condensation." },
      { key: "ttv4500", waarom: "Le long d'**un mur épais en moellons**, l'air humide stagne. Le ventilateur met cet air en mouvement, pour que le déshumidificateur puisse le capter." },
    ],
    levering: {
      kop: "Livraison à Amblève : un long trajet, bien planifié",
      alinea:
        "Amblève se trouve à **un peu plus de deux heures** de notre entrepôt d'Aartselaar, par Liège, Verviers et la A27. Vous choisissez une date de livraison lors de la réservation. En Wallonie, nous livrons **sur rendez-vous**, et nous combinons le trajet avec d'autres adresses dans les Cantons de l'Est. Si de la neige ou du verglas sont annoncés, nous vous appelons à l'avance. Indiquez aussi si la camionnette peut accéder jusqu'à la ferme, car toutes les allées ne sont pas revêtues.",
    },
    afhalen: {
      kop: "Venir chercher à Aartselaar : plus de quatre heures de route",
      alinea:
        "Venir chercher un appareil, c'est un peu plus de deux heures à l'aller et un peu plus de deux heures au retour, et encore autant pour le rapporter. Un déshumidificateur doit en outre être **transporté debout**. Si vous optez pour la livraison, le technicien installe les appareils et **mesure au départ et à la reprise**.",
    },
    buren: ["buetgenbach", "buellingen", "sankt-vith", "weismes"],
    faq: [
      {
        q: "Un déshumidificateur fonctionne-t-il dans une ferme de l'Eifel froide en hiver ?",
        a: "En dessous de 15 °C, un déshumidificateur à condensation perd nettement en rendement, et une ferme non chauffée à Amblève est souvent plus froide en hiver. C'est pourquoi nous combinons ici un déshumidificateur avec un chauffage de chantier électrique, ou nous choisissons le déshumidificateur à adsorption, qui continue à fonctionner dans le froid. Précisez lors de la réservation si le bâtiment est chauffé.",
      },
      {
        q: "Livrez-vous aussi dans les petits hameaux comme Born ou Schoppen ?",
        a: "Oui, nous livrons dans toute la commune d'Amblève, y compris dans les hameaux et les fermes isolées. Indiquez lors de la réservation comment se présente l'accès. Pour un chemin de campagne étroit ou une allée non revêtue, le technicien emporte alors un diable.",
      },
      {
        q: "Combien de temps dure le trajet d'Aartselaar à Amblève ?",
        a: "Comptez un peu plus de deux heures, et davantage en cas d'embouteillages autour de Liège ou de conditions hivernales sur le haut plateau. Vous choisissez une date de livraison lors de la réservation et nous convenons avec vous de l'heure de livraison, pour que vous ne deviez pas attendre toute la journée.",
      },
      {
        q: "Comment sécher une étable transformée en pièce de vie ?",
        a: "Gardez l'espace aussi fermé que possible, amenez-le à température avec un chauffage de chantier et laissez un déshumidificateur retirer l'humidité de l'air. Les vieux murs d'étable en moellons cèdent leur eau lentement : comptez donc en semaines. La mesure au départ vous donne un point de comparaison pour plus tard.",
      },
    ],
    realisaties: [],
  },

  aubel: {
    slug: "aubel",
    title: "Location de déshumidificateur à Aubel, Pays de Herve",
    description:
      "Déshumidificateur à louer à Aubel, sur le plateau près des Fourons : fermes, vergers et abbaye de Val-Dieu. Livré sur rendez-vous, installé par un technicien.",
    h1: "Location de déshumidificateur à Aubel",
    kicker: "Province de Liège · village du plateau à la limite des Fourons",
    rit: { afstand: "environ 145 km", tijd: "environ une heure et demie" },
    intro: [
      "Aubel se trouve dans le nord du Pays de Herve, avec **les Fourons** juste de l'autre côté de la limite communale. C'est une commune rurale de prairies, de vergers hautes tiges et de fermes dispersées, connue pour son sirop et pour **l'abbaye de Val-Dieu** dans la vallée de la Berwinne.",
      "Autour de la place du marché, des maisons en briques se serrent les unes contre les autres. Au-delà, vous trouvez surtout des fermes, des fermes transformées et des maisons plus récentes le long des routes vers les villages voisins. Nous roulons environ une heure et demie d'Aartselaar à Aubel.",
    ],
    bouw: {
      kop: "Des fermes transformées et un hiver froid sur le plateau",
      alineas: [
        "**Une ferme à Aubel** réunit souvent une habitation, une étable et une grange sous un même toit ou autour d'une cour intérieure. Lors d'une transformation, on ajoute de nouveaux sols, un nouveau plafonnage et parfois un second logement. Cela apporte beaucoup d'humidité de construction dans un bâtiment aux murs épais et froids, et ces murs ne cèdent leur humidité que si l'air à côté est sec et circule.",
        "**Sur le plateau, l'hiver est plus froid** et plus venteux que dans les vallées. Un chantier non chauffé reste alors longtemps sous la température à laquelle un déshumidificateur à condensation travaille bien. À l'installation, le technicien mesure la température et ajoute si nécessaire un chauffage de chantier.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une ferme avec habitation et étable sous un même toit** : 110 litres par jour, prévu pour beaucoup d'humidité de construction à la fois." },
      { key: "teddh30", waarom: "**Pour une pièce non chauffée en hiver** : ce chauffage de chantier électrique de 30 kW amène le chantier à température pour le déshumidificateur. Prévoyez un raccordement en 400 V." },
      { key: "ttv4500", waarom: "Dans une grange au faîte élevé, l'air humide stagne dans les coins. **Ce ventilateur le maintient en mouvement**, pour que le déshumidificateur atteigne tout l'espace." },
      { key: "ttk170", waarom: "**Pour une seule pièce rénovée ou une salle de bains** dans une maison près de la place : compact et à brancher sur une prise standard." },
    ],
    levering: {
      kop: "Livraison à Aubel : par la E40 et les routes de campagne",
      alinea:
        "Nous roulons **par la E313 et la E40**, puis les routes de campagne pour le dernier tronçon, environ une heure et demie au total. Vous choisissez une date de livraison lors de la réservation et nous livrons sur rendez-vous. Si la ferme se trouve sur une route étroite ou derrière une cour, dites-nous où la camionnette peut se garer. Le technicien rentre tout, installe pièce par pièce et note les valeurs d'humidité.",
    },
    afhalen: {
      kop: "Venir chercher à Aartselaar : trois heures de route",
      alinea:
        "Notre point d'enlèvement se trouve à environ une heure et demie d'Aubel, soit **environ trois heures aller-retour**. Un déshumidificateur, un ventilateur et un chauffage n'entrent en outre pas ensemble dans une voiture ordinaire. Pour la transformation d'une ferme, la livraison avec reprise est le choix pratique.",
    },
    buren: ["voeren", "plombieres", "thimister-clermont", "herve"],
    faq: [
      {
        q: "Un déshumidificateur fonctionne-t-il dans une ferme froide en hiver ?",
        a: "Seulement si la pièce est assez chaude. En dessous de quinze degrés, un déshumidificateur à condensation perd beaucoup de rendement, et une ancienne ferme sur le plateau n'atteint souvent pas plus en hiver. Nous ajoutons alors un chauffage de chantier, ou nous choisissons un déshumidificateur à adsorption si chauffer n'est pas possible.",
      },
      {
        q: "Combien d'appareils me faut-il pour une étable qui devient une habitation ?",
        a: "Cela dépend du volume et de ce qui est mouillé : uniquement la chape, ou aussi le plafonnage et les murs. Indiquez la surface et la hauteur lors de la réservation, et nous vous proposons une combinaison. Le technicien vérifie sur place si elle suffit.",
      },
      {
        q: "Livrez-vous aussi du côté des Fourons et de Val-Dieu ?",
        a: "Oui. Nous livrons dans tout Aubel, y compris dans les fermes en direction des Fourons et dans la vallée près de Val-Dieu. Pour une adresse isolée, précisez si l'accès passe par un chemin de campagne, pour que le technicien sache à quoi s'attendre.",
      },
      {
        q: "Le déshumidificateur peut-il tourner pendant que les artisans continuent à travailler ?",
        a: "Oui, les appareils tournent pendant les travaux. Convenez avec l'entrepreneur que les fenêtres restent fermées autant que possible, sinon l'appareil sèche l'air extérieur. Nous posons le tuyau d'évacuation de manière à ce que personne ne trébuche dessus.",
      },
    ],
    realisaties: [],
  },

  baelen: {
    slug: "baelen",
    title: "Louer un déshumidificateur à Baelen et Membach | Vernast",
    description:
      "Déshumidificateur à Baelen et Membach : maisons et fermes entre l'Hertogenwald et la Vesdre, près d'Eupen. Livré sur rendez-vous et installé par un technicien.",
    h1: "Location de déshumidificateur à Baelen",
    kicker: "Province de Liège · à l'orée de l'Hertogenwald",
    rit: { afstand: "environ 155 km", tijd: "un peu plus d'une heure et demie" },
    intro: [
      "Baelen se trouve dans l'est de la province de Liège, avec **Eupen** comme commune voisine. Une grande partie du territoire est boisée : **l'Hertogenwald**, qui s'étend jusqu'aux lacs de barrage. Depuis Aartselaar, nous roulons un peu plus d'une heure et demie jusqu'à Baelen.",
      "**Membach**, dans la vallée de la Vesdre, fait aussi partie de la commune. Au village, on trouve d'anciennes maisons et des fermes, des maisons plus récentes le long des routes, et entre les deux des hameaux au milieu des prairies et des bois.",
    ],
    bouw: {
      kop: "Un climat humide à l'orée de la forêt",
      alineas: [
        "**À l'orée de l'Hertogenwald**, le climat est plus humide que dans l'ouest du pays. Une maison rénovée en automne ou en hiver ne sèche pas ici fenêtre ouverte, car l'air extérieur est souvent aussi humide que l'air intérieur. Un déshumidificateur de chantier, lui, retire bel et bien l'humidité de la pièce.",
        "**À Membach**, les maisons sont plus basses et plus proches de la Vesdre, avec des caves et des rez-de-chaussée plus sensibles à l'humidité. Dans Baelen, situé plus haut, il s'agit plus souvent de la rénovation d'anciennes fermes et maisons de village, aux murs épais qui cèdent lentement leur humidité.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une rénovation dans le climat humide à l'orée du bois**, où aérer apporte peu : 70 litres par jour." },
      { key: "revolution", waarom: "**Pour une cave à Membach, près de la Vesdre** : ce déshumidificateur à adsorption fonctionne aussi dans un espace froid et humide." },
      { key: "teddh30", waarom: "**Pour un chantier d'hiver dans une ancienne ferme** : 30 kW pour amener l'espace à température, pour que le déshumidificateur ne tourne pas à mi-régime. Demande du courant triphasé (400 V)." },
      { key: "ttv4500", waarom: "Face aux murs épais d'une ferme à Baelen, **il maintient l'air en mouvement**, pour que l'humidité puisse continuer à sortir du mur." },
    ],
    levering: {
      kop: "Livraison à Baelen : jusqu'à la limite d'Eupen",
      alinea:
        "Nous roulons un peu plus d'une heure et demie, **par la E313 et la E40**, et le dernier tronçon le long de la Vesdre ou par le plateau. Vous choisissez une date de livraison lors de la réservation, et nous convenons ensemble de l'heure de livraison. Si la maison se trouve sur un chemin forestier ou a un accès étroit, dites-nous où une camionnette peut se garer.",
    },
    afhalen: {
      kop: "Enlèvement : plus de trois heures aller-retour",
      alinea:
        "Notre point d'enlèvement d'Aartselaar se trouve à un peu plus d'une heure et demie de Baelen. Aller-retour, vous êtes donc **plus de trois heures sur la route**, ce qui en vaut rarement la peine. Avec la livraison, le technicien reprend aussi les appareils et mesure à la fin combien d'humidité il reste.",
    },
    buren: ["limbourg", "welkenraedt", "eupen", "jalhay"],
    faq: [
      {
        q: "Pourquoi ma rénovation ne sèche-t-elle pas fenêtres ouvertes ?",
        a: "Parce qu'à Baelen, l'air extérieur est souvent aussi humide que l'air intérieur, surtout en automne et en hiver. Aérer ne fait alors que déplacer l'humidité. Un déshumidificateur retire l'eau de l'air et l'évacue, quel que soit le temps dehors.",
      },
      {
        q: "Comment utiliser les appareils une fois le technicien parti ?",
        a: "C'est simple. Le technicien règle tout à l'installation et vous explique à quoi faire attention, comme le tuyau d'évacuation ou le bac de récupération. Une question ? N'hésitez pas à nous envoyer un e-mail ou à nous appeler.",
      },
      {
        q: "Livrez-vous aussi à Membach ?",
        a: "Oui, Membach fait partie de Baelen et se trouve dans notre zone de livraison. Si la maison est proche de la Vesdre et qu'il y a une cave, mentionnez-le lors de la réservation. Le technicien emporte alors un appareil qui fonctionne aussi dans une cave froide.",
      },
      {
        q: "Combien de temps un déshumidificateur doit-il rester dans une ancienne ferme ?",
        a: "Cela dépend de l'épaisseur des murs et de la quantité d'eau apportée par la rénovation. Avec des murs épais en pierre naturelle ou en briques, comptez plutôt quelques semaines. Le technicien mesure à l'installation et à la reprise, pour que vous sachiez où vous en êtes.",
      },
    ],
    realisaties: [],
  },

  "burg-reuland": {
    slug: "burg-reuland",
    title: "Déshumidificateur de chantier à Burg-Reuland | Vernast",
    description:
      "Louer un déshumidificateur à Burg-Reuland : fermes en moellons et maisons neuves dans la vallée de l'Our, près du Luxembourg et de l'Allemagne. Livré et mesuré.",
    h1: "Location de déshumidificateur à Burg-Reuland",
    kicker: "Province de Liège · la vallée de l'Our aux trois frontières",
    rit: { afstand: "environ 230 km", tijd: "environ deux heures et demie" },
    intro: [
      "Burg-Reuland est la **commune la plus méridionale de la Communauté germanophone**. Elle se trouve dans la **vallée de l'Our**, la rivière qui forme ici la frontière avec l'Allemagne, et près d'Ouren, la Belgique, le Luxembourg et l'Allemagne se rejoignent. Au-dessus du village de Reuland se dressent les **ruines du château fort** auquel la commune doit son nom.",
      "La commune se compose de **Reuland et Thommen**, avec une série de petits villages et hameaux. Elle est rurale et peu peuplée, avec des fermes, des maisons de vacances et quelques nouveaux lotissements. À l'ouest, elle touche Gouvy, dans la province de Luxembourg. Depuis Aartselaar, vous y êtes en environ deux heures et demie.",
    ],
    bouw: {
      kop: "Des fermes dans la vallée et des maisons sur le versant froid",
      alineas: [
        "Le bâti ancien, c'est **la ferme de l'Eifel en moellons**, souvent avec un toit en ardoises. Transformer une telle ferme, c'est composer avec **des murs d'un demi-mètre ou plus** qui cèdent lentement leur humidité. Dans la vallée de l'Our, le sol est proche de l'eau, et un rez-de-chaussée ou une cave y est par nature frais et humide.",
        "Sur les versants au-dessus, il s'agit plus souvent de **constructions neuves et de maisons de vacances**. Là, c'est surtout **le long hiver froid** qui freine. Une maison prête pour la chape en automne reste alors des semaines à une température où le plafonnage et le sol ne sèchent presque pas. Avec un déshumidificateur et un chauffage en plus, le planning du poseur de sol et du peintre reste tenable.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une ferme transformée avec une nouvelle chape** dans la partie habitation. Retire jusqu'à 70 litres par jour, dans des pièces jusqu'à environ 400 m³." },
      { key: "revolution", waarom: "Pour **une cave froide ou un rez-de-chaussée frais dans la vallée**, où un déshumidificateur à condensation a trop peu de rendement. Ce déshumidificateur à adsorption fonctionne aussi à basse température." },
      { key: "teddh20", waarom: "**Pour une maison de vacances terminée en hiver.** Le chauffage de 20 kW amène la pièce à température, pour que le déshumidificateur puisse faire son travail. Demande un raccordement en 400 V." },
      { key: "radiaal2250", waarom: "Souffle de l'air sec de façon ciblée le long d'**un vieux mur en pierre ou sur un sol mouillé**, là où l'humidité reste le plus longtemps." },
    ],
    levering: {
      kop: "Livraison à Burg-Reuland : notre trajet le plus long dans la province",
      alinea:
        "Burg-Reuland est **notre adresse la plus éloignée dans la province de Liège** : environ deux heures et demie de route par Liège, Verviers et la A27, jusqu'au-delà de Saint-Vith. C'est pourquoi nous combinons le trajet avec d'autres adresses dans le sud des Cantons de l'Est. Vous choisissez une date de livraison et nous convenons de l'heure avec vous. Signalez à l'avance si la camionnette peut accéder jusqu'à la maison ; dans les petits chemins étroits de la vallée, ce n'est pas toujours possible.",
    },
    afhalen: {
      kop: "Venir chercher depuis Burg-Reuland : cinq heures de route",
      alinea:
        "Aller-retour jusqu'à Aartselaar, vous êtes **environ cinq heures** sur la route, et cela deux fois par période de location. Nous le déconseillons. **Faites livrer les appareils** : le technicien mesure alors au départ l'humidité des murs, et pour une ferme en moellons, c'est la première chose que vous voulez savoir.",
    },
    buren: ["sankt-vith", "gouvy"],
    faq: [
      {
        q: "Livrez-vous jusqu'à Burg-Reuland, si loin d'Anvers ?",
        a: "Oui, la commune fait partie de notre zone de livraison. C'est toutefois notre plus long trajet dans la province : nous regroupons donc les livraisons de la région et convenons avec vous de l'heure de livraison. Lors de la réservation, précisez comment se présente l'accès à votre maison.",
      },
      {
        q: "Comment sécher une ferme en moellons dans la vallée de l'Our après une transformation ?",
        a: "Gardez l'espace fermé, placez un déshumidificateur par zone et si nécessaire un chauffage, car une telle ferme est fraîche pendant la saison froide. Les murs épais en pierre cèdent lentement leur eau : comptez donc plutôt en semaines qu'en jours. La mesure au départ et à la reprise montre la différence.",
      },
      {
        q: "Ma cave humide dans la vallée : humidité de construction ou eau souterraine ?",
        a: "C'est la première chose que le technicien mesure à l'installation. L'humidité de construction après une rénovation disparaît avec un déshumidificateur. Si l'humidité revient après chaque période de pluie par le sol ou par le mur côté versant, elle vient de l'extérieur et le séchage seul ne résout pas le problème.",
      },
      {
        q: "Avez-vous aussi une page pour Gouvy, juste de l'autre côté de la limite provinciale ?",
        a: "Oui, Gouvy, dans la province de Luxembourg, touche Burg-Reuland et a sa propre page. Pour la livraison, la limite provinciale ne joue aucun rôle : les deux communes se trouvent sur le même long trajet, et nous les planifions souvent ensemble.",
      },
    ],
    realisaties: [],
  },

  buellingen: {
    slug: "buellingen",
    title: "Location de déshumidificateur à Bullange (Büllingen)",
    description:
      "Déshumidificateur à louer à Bullange (Büllingen) : maisons de la reconstruction et constructions neuves détrempées des villages frontaliers. Livré et mesuré.",
    h1: "Location de déshumidificateur à Bullange",
    kicker: "Province de Liège · Cantons de l'Est à la frontière allemande",
    rit: { afstand: "environ 210 km", tijd: "un peu plus de deux heures" },
    intro: [
      "Bullange, **Büllingen** en allemand, est une vaste commune germanophone des Cantons de l'Est, **à la frontière allemande**. Elle se compose d'une série de villages, dont **Büllingen, Rocherath, Krinkelt, Mürringen, Honsfeld et Manderfeld**, avec des prairies et des forêts d'épicéas entre eux. Depuis Aartselaar, vous y êtes en un peu plus de deux heures.",
      "Les villages sont **en altitude et à découvert** en bordure de l'Eifel, avec du vent, de la neige et du gel, et un hiver plus long qu'en Flandre. Rocherath et Krinkelt ont été durement touchés pendant la **bataille des Ardennes**. Beaucoup de maisons y ont été reconstruites après la guerre.",
    ],
    bouw: {
      kop: "Des villages reconstruits et des maisons neuves dans le vent",
      alineas: [
        "Les villages comptent beaucoup de **maisons de la reconstruction**. Elles sont solidement bâties, mais sans le creux ni la barrière contre l'humidité d'une maison actuelle. Isoler une telle maison et la replafonner, c'est enfermer l'humidité du vieux mur derrière une nouvelle couche. **Faites donc d'abord sécher et ne finissez qu'ensuite**, sinon des taches apparaîtront plus tard sous la peinture.",
        "En **construction neuve** sur le haut plateau à découvert, c'est la météo qui pèse le plus. Si un gros œuvre n'est mis hors d'eau et hors d'air qu'en automne, il a souvent reçu des semaines de pluie et de neige. La chape et les murs intérieurs sont alors gorgés d'eau, et il fait trop froid dehors pour sécher fenêtres ouvertes. **Fermez la maison** et séchez avec un déshumidificateur de chantier, avec un chauffage en plus si nécessaire.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une construction neuve restée ouverte pendant un automne pluvieux.** Avec 110 litres par jour et une portée jusqu'à environ 600 m³, il est fait pour un gros œuvre détrempé." },
      { key: "teddh30", waarom: "**Pour une maison sans chauffage quand il gèle dehors.** Le chauffage amène la pièce à une température où le déshumidificateur travaille bien. Il demande un raccordement en 400 V." },
      { key: "ttk170", waarom: "**Pour une seule pièce dans une maison de la reconstruction** en cours de replafonnage. Un appareil compact de 0,75 kW qui fonctionne sur une prise standard." },
      { key: "radiaal2250", waarom: "Souffle de façon ciblée sur **une chape mouillée**, pour que le sol sèche uniformément et qu'aucun coin humide ne subsiste." },
    ],
    levering: {
      kop: "Livraison à Bullange : de Manderfeld à Rocherath",
      alinea:
        "Bullange se trouve à **un peu plus de deux heures** d'Aartselaar, par Liège, Verviers et la A27. C'est l'un de nos plus longs trajets, et nous le combinons donc avec d'autres adresses de la région. Vous choisissez une date de livraison lors de la réservation, et nous convenons de l'heure avec vous. Vous habitez un village isolé le long de la frontière ? Mentionnez-le, pour que le technicien puisse planifier son itinéraire.",
    },
    afhalen: {
      kop: "Venir chercher vous-même : deux longs trajets",
      alinea:
        "Aller-retour jusqu'à notre point d'enlèvement d'Aartselaar, vous êtes **plus de quatre heures** sur la route, sans compter le chargement. Après la période de location, vous refaites la même distance pour rapporter l'appareil. **Se faire livrer est ici presque toujours le meilleur choix.**",
    },
    buren: ["buetgenbach", "amel", "sankt-vith"],
    faq: [
      {
        q: "Ma maison neuve à Bullange est restée ouverte tout l'automne. À quel point est-elle humide ?",
        a: "Souvent plus que vous ne le pensez. La pluie et la neige sur un gros œuvre ouvert pénètrent profondément dans les blocs et la chape. À l'installation, le technicien mesure la quantité d'humidité dans le sol et les murs, et c'est sur cette base que nous déterminons la taille du déshumidificateur et la durée du pack.",
      },
      {
        q: "Puis-je sécher quand il gèle dehors ?",
        a: "Oui, tant que la maison est fermée. Le gel dehors n'est pas un problème, car l'air extérieur froid contient peu d'humidité. À l'intérieur, il doit toutefois faire assez chaud : en dessous de 15 °C, un déshumidificateur à condensation perd en rendement. S'il n'y a pas encore de chauffage, nous ajoutons un chauffage de chantier électrique.",
      },
      {
        q: "Après avoir isolé une vieille maison, dois-je d'abord faire sécher ?",
        a: "Oui, surtout avec un mur sans barrière contre l'humidité. Si vous enfermez l'humidité derrière l'isolation et un nouveau plafonnage, elle cherchera plus tard une issue et vous aurez des taches ou des moisissures. Faites d'abord sécher le vieux mur et le nouveau plafonnage, et faites mesurer avant de peindre.",
      },
      {
        q: "Livrez-vous jusque dans les villages frontaliers comme Manderfeld et Honsfeld ?",
        a: "Oui, nous livrons dans toute la commune de Bullange, y compris dans les villages contre la frontière allemande. Comme c'est un long trajet, nous planifions ces adresses ensemble. Vous choisissez une date de livraison et nous convenons avec vous de l'heure de livraison.",
      },
    ],
    realisaties: [],
  },

  buetgenbach: {
    slug: "buetgenbach",
    title: "Louer un déshumidificateur à Butgenbach, près du lac",
    description:
      "Louer un déshumidificateur à Butgenbach : maisons près du lac et à Elsenborn ou Weywertz, en bordure des Hautes Fagnes. Installé et mesuré par un technicien.",
    h1: "Location de déshumidificateur à Butgenbach",
    kicker: "Province de Liège · le lac de barrage en bordure des Hautes Fagnes",
    rit: { afstand: "environ 200 km", tijd: "environ deux heures" },
    intro: [
      "Butgenbach, **Bütgenbach** en allemand, se trouve dans les Cantons de l'Est germanophones, **en bordure est des Hautes Fagnes**. La commune est connue pour le **lac de Butgenbach**, sur la Warche. Outre Bütgenbach même, elle comprend les villages d'Elsenborn, Weywertz, Nidrum et Berg, et un camp militaire se trouve près d'Elsenborn. Depuis Aartselaar, vous y êtes en environ deux heures.",
      "Les Hautes Fagnes commencent juste derrière la limite communale, et cela se remarque au climat : **beaucoup de précipitations, du brouillard, de la neige et de fortes gelées nocturnes**. Autour du lac se trouvent des maisons de vacances et des appartements, dans les villages surtout des maisons et des fermes.",
    ],
    bouw: {
      kop: "Maisons de vacances près du lac et maisons sur le haut plateau humide",
      alineas: [
        "Autour du lac de barrage se trouvent des **maisons de vacances et des secondes résidences** inoccupées une partie de l'année. Si une telle maison est restée fermée et non chauffée tout l'hiver, les murs sont souvent moites au printemps, la cave sent le moisi ou il y a **des moisissures derrière les armoires**. Lors d'un rafraîchissement ou d'une transformation, séchez d'abord la pièce, et ne peignez qu'ensuite.",
        "Dans les villages du haut plateau, **le sol est humide** à cause des précipitations et de la tourbe à proximité. Une cave ou un rez-de-chaussée sans bonne barrière contre l'humidité absorbe cette humidité. Lors d'une rénovation, le technicien mesure s'il s'agit d'**humidité de construction ou d'humidité qui remonte du sol**. La première, un déshumidificateur la résout ; pour la seconde, il faut traiter le mur lui-même.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**Pour une maison de vacances ou un appartement près du lac** devenu moite après l'hiver. Un déshumidificateur compact qui fonctionne sur une prise standard." },
      { key: "revolution", waarom: "Pour **une cave froide sur le haut plateau humide**. Le déshumidificateur à adsorption continue à fonctionner là où un déshumidificateur à condensation faiblit à cause du froid." },
      { key: "ttk350", waarom: "Pour **une maison rénovée étage par étage**, avec un nouveau plafonnage et une nouvelle chape. Retire jusqu'à 70 litres par jour, pour des pièces jusqu'à environ 400 m³." },
      { key: "teddh20", waarom: "Amène d'abord **une maison non chauffée à Elsenborn** à température. Avec 20 kW, il est plus petit que le chauffage de 30 kW, mais il demande lui aussi un raccordement en 400 V." },
    ],
    levering: {
      kop: "Livraison à Butgenbach : par la A27, sur rendez-vous",
      alinea:
        "Depuis Aartselaar, nous roulons **environ deux heures**, par Liège et Verviers puis la A27 en direction de Malmedy. Vous choisissez une date de livraison lors de la réservation, et nous convenons avec vous de l'heure de livraison. S'il s'agit d'une maison de vacances où vous n'êtes pas toujours présent, **dites-nous qui ouvre la porte**. Le technicien installe, règle et mesure en présence de quelqu'un qui connaît la maison.",
    },
    afhalen: {
      kop: "Venir chercher depuis Butgenbach : comptez quatre heures de route",
      alinea:
        "Aller-retour jusqu'à notre point d'enlèvement d'Aartselaar, vous êtes **environ quatre heures** sur la route. Si vous habitez en Flandre et avez une maison de vacances près du lac, l'enlèvement peut toutefois s'intégrer à votre trajet vers les Cantons de l'Est. **Transportez toujours un déshumidificateur debout.**",
    },
    buren: ["buellingen", "amel", "weismes"],
    faq: [
      {
        q: "Notre maison de vacances près du lac est moite après l'hiver. Un déshumidificateur aide-t-il ?",
        a: "Oui, pour l'humidité qui s'est accumulée dans une maison fermée et non chauffée. Chauffez la maison, gardez les fenêtres fermées et laissez tourner un déshumidificateur pendant une semaine ou deux. Si les moisissures reviennent au même endroit, il y a une fuite ou un pont thermique, et cela, un déshumidificateur ne le résout pas.",
      },
      {
        q: "Le technicien peut-il livrer si je ne suis pas présent moi-même ?",
        a: "Il faut quelqu'un qui ouvre la porte et connaît la maison ; un voisin ou un gestionnaire suffit. Le technicien installe l'appareil, le règle et fait une mesure d'humidité au départ. Convenez lors de la réservation de qui sera là, pour qu'il sache chez qui sonner.",
      },
      {
        q: "Quelle distance y a-t-il entre Aartselaar et Butgenbach ?",
        a: "Environ deux cents kilomètres, un trajet d'environ deux heures par Liège, Verviers et la A27. Comme c'est l'une de nos destinations les plus éloignées, nous regroupons les livraisons dans les Cantons de l'Est et convenons à l'avance de l'heure de livraison avec vous.",
      },
      {
        q: "Pourquoi ma cave sur le haut plateau est-elle toujours humide ?",
        a: "La région des Hautes Fagnes reçoit beaucoup de précipitations et le sol y est humide. Une cave sans bonne barrière contre l'humidité absorbe cette humidité de l'extérieur. Un déshumidificateur élimine l'humidité de construction après une rénovation, mais si l'humidité revient sans cesse, le technicien en cherche d'abord la cause.",
      },
    ],
    realisaties: [],
  },

  oupeye: {
    slug: "oupeye",
    title: "Location de déshumidificateur de chantier à Oupeye | Vernast",
    description:
      "Déshumidificateur à louer à Oupeye : maisons villageoises à Haccourt et Hermalle au bord de la Meuse, lotissements à Hermée et Houtain. Livré, installé, réglé.",
    h1: "Location de déshumidificateur de chantier à Oupeye",
    kicker: "Liège · Basse-Meuse, de la Meuse au plateau",
    rit: { afstand: "environ 115 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Oupeye se trouve dans **la Basse-Meuse**, au nord de Liège. La commune s'étend **de la Meuse jusqu'au plateau** en direction de la Hesbaye, avec le canal Albert et ses zones d'activités entre les deux. Nous y sommes en un peu plus d'une heure.",
      "Oupeye compte sept villages. **Hermalle-sous-Argenteau, Haccourt et Vivegnis** se trouvent dans la vallée. **Hermée, Heure-le-Romain et Houtain-Saint-Siméon** sont sur le plateau, et Oupeye même se situe entre les deux.",
    ],
    bouw: {
      kop: "Vieilles maisons villageoises dans la vallée, constructions neuves sur le plateau",
      alineas: [
        "Dans les villages le long de la Meuse, on trouve **des maisons anciennes en brique et en pierre naturelle**, souvent sans barrière contre l'humidité dans le mur. Après un nouveau sol ou un nouveau plafonnage, elles sèchent **plus lentement qu'une construction neuve**. Les murs épais rendent leur humidité lentement, et le rez-de-chaussée y reste frais.",
        "Sur le plateau, autour de Hermée et de Houtain, se sont ajoutés **des lotissements de maisons quatre façades**. Là, l'humidité vient surtout d'**une chape fraîche** et des nouveaux murs intérieurs. Cette eau doit partir avant la pose du parquet ou du carrelage.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une construction neuve avec chape sur tout le rez-de-chaussée** : 110 litres par jour, pour des volumes jusqu'à environ 600 m³." },
      { key: "radiaal2250", waarom: "Ce ventilateur radial souffle de manière ciblée sur **une chape fraîche**, pour que le coin près de la porte de terrasse sèche aussi." },
      { key: "ttk350", waarom: "Pour **une maison villageoise à Haccourt ou à Hermalle** rénovée étage par étage : 70 litres par jour." },
      { key: "teddh20", waarom: "Ce chauffage de chantier de 20 kW réchauffe **un rez-de-chaussée froid dans la vallée**, pour que le déshumidificateur à condensation fonctionne mieux. Il demande du 400 V." },
    ],
    levering: {
      kop: "Livraison à Oupeye",
      alinea:
        "Par l'E313, nous sommes à Oupeye en **un peu plus d'une heure**. Lors de la réservation, vous choisissez une date de livraison, et nous fixons le moment de livraison **sur rendez-vous** avec vous. Le technicien installe les appareils, les règle et fait une mesure au démarrage. Si la rue de votre lotissement n'est pas encore aménagée, signalez-le à l'avance.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar",
      alinea:
        "Aartselaar est à un peu plus d'une heure d'Oupeye. Qui vient chercher un appareil et le ramène plus tard fait ce trajet quatre fois. Un déshumidificateur doit en outre être transporté **debout**. L'enlèvement ne vaut donc la peine que si vous passez de toute façon régulièrement du côté d'Anvers.",
    },
    buren: ["herstal", "juprelle", "bitsingen", "wezet"],
    faq: [
      {
        q: "Combien de temps une chape doit-elle sécher dans une construction neuve à Hermée avant la pose du parquet ?",
        a: "En règle générale, on compte sans aide une semaine par centimètre pour les quatre premiers centimètres, et plus longtemps ensuite. Avec un grand déshumidificateur, les fenêtres fermées et un ventilateur sur le sol, cela va plus vite. Faites mesurer l'humidité résiduelle avant que le parqueteur commence.",
      },
      {
        q: "Pourquoi ma vieille maison à Haccourt sèche-t-elle si lentement après la rénovation ?",
        a: "Les vieux murs en brique ou en pierre naturelle sont épais et n'ont souvent pas de barrière contre l'humidité. Ils retiennent beaucoup d'eau et la rendent lentement, surtout si le rez-de-chaussée est froid. Un déshumidificateur avec un chauffage de chantier et suffisamment de temps y donne de meilleurs résultats qu'un séchage court.",
      },
      {
        q: "Pouvez-vous livrer sur un chantier dont la rue n'est pas encore aménagée ?",
        a: "Oui, si la camionnette peut rouler en sécurité jusqu'à proximité de la maison. Décrivez l'accès lors de la réservation. Le dernier bout à travers le terrain, le technicien le fait avec un diable.",
      },
      {
        q: "Combien d'appareils me faut-il pour une maison quatre façades sur le plateau ?",
        a: "Pour un rez-de-chaussée avec chape, un grand déshumidificateur avec un ventilateur suffit souvent. S'il y a aussi un nouveau plafonnage à l'étage, placez-y un second déshumidificateur. Nous calculons sur le volume de la pièce, pas seulement sur la surface.",
      },
    ],
    realisaties: [],
  },

  "saint-nicolas": {
    slug: "saint-nicolas",
    title: "Louer un déshumidificateur à Saint-Nicolas (Liège) | Vernast",
    description:
      "Déshumidificateur à Saint-Nicolas, Montegnée ou Tilleur : appareils compacts pour maisons ouvrières et caves sur le versant de la Meuse. Livrés et installés.",
    h1: "Location de déshumidificateur à Saint-Nicolas",
    kicker: "Province de Liège · densément bâtie contre la ville",
    rit: { afstand: "environ 120 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Saint-Nicolas touche Liège par l'ouest, entre Ans sur le plateau et la Meuse dans la vallée. La commune est petite en superficie et **densément bâtie**. Elle se compose de Saint-Nicolas, Montegnée et Tilleur.",
      "Une grande partie des maisons date de **l'époque des charbonnages** : rue après rue de maisons ouvrières sur le versant, serrées les unes contre les autres et souvent avec une petite cour. Depuis Aartselaar, nous mettons un peu plus d'une heure pour rejoindre Saint-Nicolas.",
    ],
    bouw: {
      kop: "Maisons ouvrières sur le versant, murs contre la terre",
      alineas: [
        "Sur le versant vers la Meuse, beaucoup de maisons sont en partie adossées à la terre : la façade arrière ou la cave se trouve plus bas que la rue. L'**humidité venant de l'extérieur** traverse alors le mur, et vous le remarquez à une cave ou une arrière-cuisine qui ne sèche pas. Un déshumidificateur n'aide que si cette eau cesse d'arriver.",
        "Lors de la **rénovation d'une maison ouvrière**, vous travaillez dans des pièces étroites, avec un escalier raide et peu de volume. Un appareil compact que vous déplacez de pièce en pièce y est plus efficace qu'un grand. Si une fissure traverse un mur, faites-la d'abord colmater avant de commencer le séchage.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**Pour une maison ouvrière avec un escalier raide** : compact et à brancher sur une prise standard. Vous le déplacez sans effort d'une pièce à l'autre." },
      { key: "teddh30", waarom: "Pour une cave ou une arrière-cuisine **adossée au versant** qui reste froide toute l'année. Ce chauffage de 30 kW en 400 V réchauffe la pièce, pour que le déshumidificateur à condensation fonctionne mieux." },
      { key: "revolution", waarom: "**Pour une cave sous le niveau de la rue** qui reste fraîche et humide. Ce déshumidificateur à adsorption fonctionne aussi dans des pièces froides et sèche par des gaines." },
      { key: "ttk350", waarom: "Pour une rénovation complète avec un nouveau plafonnage sur deux étages : 70 litres par jour, et vous le déplacez étage par étage." },
    ],
    levering: {
      kop: "Livraison à Saint-Nicolas : dans des rues étroites en pente",
      alinea:
        "Les rues de Saint-Nicolas et de Montegnée sont **étroites et en pente**, et il n'y est pas toujours facile de se garer. Indiquez lors de la réservation si la camionnette peut s'arrêter devant la porte ; sinon, le technicien porte l'appareil sur le dernier bout. Vous choisissez une date de livraison, l'heure, nous la fixons ensemble. L'appareil ne tourne qu'après **une première mesure**.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar, par l'E313",
      alinea:
        "Jusqu'à Aartselaar, il y a **un peu plus d'une heure de route**, et autant pour le retour. Un déshumidificateur compact entre dans une voiture ordinaire, si vous le transportez debout. Pour une cave qui ne sèche pas, la livraison est le meilleur choix : le technicien regarde alors tout de suite d'où vient l'humidité.",
    },
    buren: ["luik-stad", "ans", "grace-hollogne", "seraing"],
    faq: [
      {
        q: "Ma cave adossée au versant ne sèche jamais. Un déshumidificateur règle-t-il le problème ?",
        a: "Pas tant que l'eau continue de traverser le mur depuis l'extérieur. Le déshumidificateur retire alors une humidité qui est aussitôt renouvelée. Le technicien vérifie d'abord si le mur est mouillé par l'extérieur. Si c'est le cas, il faut traiter le côté extérieur avant que le séchage ait du sens.",
      },
      {
        q: "Un déshumidificateur passe-t-il par le couloir étroit d'une maison ouvrière ?",
        a: "Le déshumidificateur compact passe par une porte intérieure ordinaire et peut monter un escalier raide. Un appareil plus grand demande plus de place. Mentionnez un couloir ou un escalier étroit lors de la réservation, et nous choisirons un appareil qui passe.",
      },
      {
        q: "Livrez-vous aussi à Montegnée et à Tilleur ?",
        a: "Oui, les deux font partie de Saint-Nicolas et se trouvent dans notre zone de livraison. Tilleur est plus bas, plus près de la Meuse, et il s'agit plus souvent de caves. À Montegnée, il y a davantage de maisons mitoyennes sur le versant, et la rénovation y est la raison la plus fréquente.",
      },
      {
        q: "Combien de temps faut-il pour sécher un nouveau plafonnage dans une petite maison ?",
        a: "Cela dépend de l'épaisseur de la couche, de la température et de l'humidité de l'air. Dans une maison froide ou avec des couches plus épaisses, cela prend plus longtemps. C'est une mesure d'humidité, et non le calendrier, qui décide quand vous pouvez peindre.",
      },
    ],
    realisaties: [],
  },

  seraing: {
    slug: "seraing",
    title: "Déshumidificateur de chantier à louer à Seraing | Vernast",
    description:
      "Louer un déshumidificateur à Seraing, Ougrée, Jemeppe ou Boncelles : maisons ouvrières de la vallée de la Meuse et constructions neuves sur le plateau.",
    h1: "Location de déshumidificateur à Seraing",
    kicker: "Province de Liège · la cité de l'acier au bord de la Meuse",
    rit: { afstand: "environ 130 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Seraing est **la ville de Cockerill**. Au dix-neuvième siècle, John Cockerill s'installe dans le château de Seraing, l'ancienne résidence d'été des princes-évêques de Liège. Autour de ses usines s'est développée une grande industrie sidérurgique, qui marque encore aujourd'hui le visage de la ville.",
      "La commune s'étend de la Meuse jusqu'au plateau. En bas se trouvent Ougrée, Jemeppe et Seraing-centre, avec des rangées serrées de maisons ouvrières. En haut, il y a **Boncelles**, avec des quartiers résidentiels plus aérés. Au bord de l'eau se trouve le Val-Saint-Lambert, connu pour son cristal. Depuis Aartselaar, nous mettons un peu plus d'une heure pour rejoindre Seraing.",
    ],
    bouw: {
      kop: "Maisons ouvrières dans la vallée, constructions neuves sur le plateau",
      alineas: [
        "Dans la vallée de la Meuse, les maisons mitoyennes des ouvriers de l'acier sont serrées les unes contre les autres, avec des façades étroites et des murs en brique sans creux. Lors d'une rénovation, il y a un nouveau plafonnage et souvent un nouveau sol, et dans ce petit volume, l'air est vite saturé. **Séchez pièce par pièce** avec la porte fermée ; cela fonctionne mieux ici que toute la maison à la fois.",
        "Sur le plateau de Boncelles, il s'agit davantage de constructions neuves et de maisons plus grandes, avec une chape et un plafonnage qui doivent être secs avant la finition. Entre la vallée et le plateau, on trouve **des maisons adossées au versant**. Leur cave ou leur pièce arrière est en partie sous terre et reste froide en hiver.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**Pour une maison mitoyenne à Ougrée ou à Jemeppe** : compact, facile à monter par l'escalier et économe avec 0,75 kW. Vous le déplacez d'une pièce à l'autre." },
      { key: "ttk350", waarom: "Pour une maison plus spacieuse sur le plateau de Boncelles : 70 litres par jour, pour que la chape et le plafonnage puissent sécher ensemble." },
      { key: "ttv4500", waarom: "Dans une maison mitoyenne profonde avec un couloir étroit, l'annexe arrière sèche difficilement. Ce ventilateur **pousse l'air sec à travers toute la maison**." },
      { key: "revolution", waarom: "**Pour une cave adossée au versant** qui reste froide et humide. Ce déshumidificateur à adsorption continue de fonctionner là où un appareil à condensation récupère peu d'eau à cause du froid." },
    ],
    levering: {
      kop: "Livraison à Seraing : dans la vallée et sur le plateau",
      alinea:
        "Nous roulons **par l'E313 et le ring de Liège**, un peu plus d'une heure en dehors des heures de pointe. En bas, dans la vallée, les rues sont étroites et souvent pleines de voitures garées ; en haut, à Boncelles, il y a plus de place. Vous choisissez une date de livraison lors de la réservation et nous fixons un rendez-vous. Le technicien **mesure l'humidité au démarrage**, pour que vous puissiez comparer plus tard.",
    },
    afhalen: {
      kop: "Depuis Seraing, l'enlèvement vaut rarement la peine",
      alinea:
        "Aartselaar se trouve à **un peu plus d'une heure de route**, l'aller-retour vous coûte donc vite une demi-journée de travail. Si vous devez de toute façon aller du côté d'Anvers, vous pouvez emporter un appareil et le transporter debout. Pour plusieurs appareils, la livraison est plus simple.",
    },
    buren: ["luik-stad", "flemalle", "neupre", "saint-nicolas"],
    faq: [
      {
        q: "Combien de déshumidificateurs me faut-il pour une maison ouvrière dans la vallée ?",
        a: "En général, un déshumidificateur compact, complété par un ventilateur si la maison est profonde et étroite. Lors d'une rénovation complète avec un nouveau plafonnage à tous les étages, un second appareil peut raccourcir le temps de séchage. Le technicien évalue le volume sur place.",
      },
      {
        q: "Livrez-vous aussi à Boncelles et au Val-Saint-Lambert ?",
        a: "Oui, Boncelles et le Val-Saint-Lambert font partie de notre zone de livraison à Seraing. À Boncelles, il s'agit plus souvent de constructions neuves ; au Val-Saint-Lambert, de maisons plus proches de la Meuse. Précisez lors de la réservation s'il s'agit d'une cave ou d'un nouveau sol.",
      },
      {
        q: "Un déshumidificateur ordinaire fonctionne-t-il dans une cave froide adossée au versant ?",
        a: "Moins bien. En dessous d'environ 15 °C, un déshumidificateur à condensation récupère nettement moins d'eau. Un déshumidificateur à adsorption, lui, continue de fonctionner dans le froid. Une autre solution est un chauffage de chantier qui réchauffe d'abord la cave, avec l'appareil à condensation à côté.",
      },
      {
        q: "Que dois-je indiquer lors de la réservation à Seraing ?",
        a: "Indiquez comment accéder à la maison et qui sera présent à la livraison, pour que le technicien puisse se mettre au travail tout de suite à Seraing. Pour toute question, écrivez-nous ou appelez-nous.",
      },
    ],
    realisaties: [],
  },

  soumagne: {
    slug: "soumagne",
    title: "Louer un déshumidificateur de chantier à Soumagne | Vernast",
    description:
      "Déshumidificateur de chantier à Soumagne : fermes et maisons à Melen, Micheroux, Ayeneux et Evegnée-Tignée, aux portes du pays de Herve. Livré et installé.",
    h1: "Location de déshumidificateur à Soumagne",
    kicker: "Liège · la porte du pays de Herve",
    rit: { afstand: "environ 135 km", tijd: "environ une heure et demie" },
    intro: [
      "Soumagne se situe **à la transition entre la périphérie liégeoise et le pays de Herve**, avec ses prairies, ses haies et ses fermes. La commune a sa propre sortie sur **l'E40**, et sous son sol passe le tunnel de Soumagne de la ligne à grande vitesse vers Aix-la-Chapelle. Depuis Aartselaar, nous y mettons environ une heure et demie.",
      "La commune compte six villages : **Ayeneux, Cerexhe-Heuseux, Evegnée-Tignée, Melen, Micheroux et Soumagne**. À Micheroux et dans les environs, on extrayait du **charbon** ; à Evegnée se trouve l'un des forts de Liège, et autour de Melen et de Cerexhe-Heuseux domine la campagne avec ses fermes dispersées.",
    ],
    bouw: {
      kop: "Fermes au milieu des prés, maisons de l'époque des charbonnages",
      alineas: [
        "À la campagne se dressent **des fermes en brique et en pierre naturelle**, souvent autour d'une cour fermée. Quand **une étable ou une grange devient une habitation**, elle reçoit un nouveau sol, de l'isolation et du plafonnage. Cette humidité de construction doit quitter un grand volume aux murs épais, et dans le climat frais du plateau, cela ne se fait pas tout seul.",
        "À Micheroux et dans le centre de Soumagne, on trouve **des maisons plus petites de l'époque des charbonnages**, mitoyennes ou trois façades. On y rénove souvent **pièce par pièce**, et les caves restent fraîches. Vous voulez aménager une cave en bureau ou en rangement ? Séchez d'abord l'humidité de construction et faites mesurer qu'aucune humidité ne continue d'entrer.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une ferme ou une grange transformée** avec un grand volume : 110 litres par jour, jusqu'à environ 600 m³." },
      { key: "teddh30", waarom: "**Pour l'intérieur froid d'une ferme** en hiver. Ce chauffage de 30 kW porte la pièce au-dessus de 15 °C, pour qu'un déshumidificateur à condensation fonctionne bien. Il demande du 400 V." },
      { key: "ttk170", waarom: "Pour **une seule pièce dans une maison à Micheroux** avec un nouveau plafonnage : compact, 50 litres par jour." },
      { key: "revolution", waarom: "Pour **une cave qui reçoit une nouvelle fonction** : ce déshumidificateur à adsorption retire l'humidité de l'air, même dans une pièce fraîche." },
    ],
    levering: {
      kop: "Livraison à Soumagne",
      alinea:
        "Par l'E313 et l'E40 jusqu'à la sortie Soumagne, nous sommes **environ une heure et demie** en route. Vous choisissez une date de livraison lors de la réservation, et nous fixons le moment précis **sur rendez-vous**. Si la ferme se trouve le long d'un chemin de campagne ou derrière un portail, décrivez l'accès à l'avance. Le technicien installe les appareils pièce par pièce.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar",
      alinea:
        "De Soumagne à Aartselaar et retour, vous êtes **environ trois heures en route**. Une ferme avec plusieurs pièces demande en outre souvent deux ou trois appareils. La livraison est ici le choix logique.",
    },
    buren: ["fleron", "blegny", "herve", "olne"],
    faq: [
      {
        q: "Comment sécher une grange à Soumagne que j'ai transformée en habitation ?",
        a: "Travaillez par zone et gardez la pièce fermée. Un grand déshumidificateur, un ventilateur le long des murs les plus humides et, en hiver, un chauffage de chantier donnent le meilleur résultat. Une grange aux murs épais avec un nouveau sol a besoin de plusieurs semaines. Faites mesurer avant la finition.",
      },
      {
        q: "Puis-je aménager une cave à Micheroux en bureau après le séchage ?",
        a: "Il faut d'abord éliminer l'humidité de construction, et ensuite être sûr qu'aucune humidité n'entre depuis l'extérieur. La première étape, c'est le travail du déshumidificateur. Pour la seconde, le technicien mesure lors de l'installation et lors de la reprise. Si la valeur reste élevée, il faut plus qu'un séchage.",
      },
      {
        q: "Faut-il du courant force en 400 volts sur mon chantier à Melen ?",
        a: "Seulement pour les chauffages de chantier. Les déshumidificateurs et les ventilateurs fonctionnent sur une prise standard de 230 volts. Si la ferme n'a pas de courant force, signalez-le lors de la réservation. Nous vous proposerons alors un dispositif sans chauffage, par exemple avec un déshumidificateur à adsorption.",
      },
      {
        q: "Comment planifiez-vous une livraison si loin d'Aartselaar ?",
        a: "Nous combinons le trajet avec d'autres adresses dans la région de Liège et de Verviers. Vous choisissez une date de livraison lors de la réservation, et nous convenons de l'heure avec vous. L'installation, le réglage et la mesure d'humidité font partie de la livraison.",
      },
    ],
    realisaties: [],
  },

  sprimont: {
    slug: "sprimont",
    title: "Déshumidificateur à louer à Sprimont et Louveigné | Vernast",
    description:
      "Déshumidificateur à louer à Sprimont, Louveigné, Dolembreux ou Gomzé-Andoumont : épais murs calcaires des vieux centres et lotissements neufs. Livré et mesuré.",
    h1: "Location de déshumidificateur de chantier à Sprimont",
    kicker: "Liège · la commune des carrières",
    rit: { afstand: "environ 145 km", tijd: "environ une heure et demie" },
    intro: [
      "Sprimont se trouve **le long de l'E25**, entre Liège et l'Ardenne. La commune est connue pour ses **carrières de calcaire** : la pierre gris-bleu qu'on y extrait s'appelle la pierre de Sprimont.",
      "Sprimont comprend des villages comme Louveigné, Dolembreux, Gomzé-Andoumont et **Banneux**, le lieu de pèlerinage. À côté des vieux centres se trouvent de nouveaux lotissements pour ceux qui travaillent à Liège. Depuis Aartselaar, nous y sommes en environ une heure et demie.",
    ],
    bouw: {
      kop: "Épais murs de pierre et nouveaux lotissements",
      alineas: [
        "Dans les vieux centres se dressent des fermes et des maisons en calcaire, avec **des murs très épais**. Un tel mur absorbe beaucoup d'humidité et la rend lentement. Qui transforme une maison en pierre avec un nouvel enduit à la chaux ou un nouveau sol doit donc sécher plus longtemps que dans une maison en brique. Finir trop tôt **enferme l'humidité**.",
        "Dans les nouveaux lotissements, il s'agit de constructions neuves et de chape, donc d'humidité de construction. Un déshumidificateur de la bonne taille permet alors de tenir le planning. **Un gros œuvre non chauffé** reste froid en hiver, et le technicien place alors un chauffage à côté.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une ferme en pierre transformée** : 70 litres par jour et une portée jusqu'à 400 m³, assez pour un espace de vie avec un nouveau plafonnage." },
      { key: "ttv4500", waarom: "Contre un épais mur calcaire, ce ventilateur chasse la couche d'air saturée, pour que **le mur rende plus vite son humidité**." },
      { key: "teddh30", waarom: "Pour **une construction neuve en hiver** : ce chauffage de 30 kW réchauffe un gros œuvre au-dessus de 15 °C. Il demande du courant force (400 V)." },
      { key: "ttk170", waarom: "Pour une salle de bains ou des combles dans une maison neuve à Louveigné ou à Dolembreux : compact, 0,75 kW et sans courant force." },
    ],
    levering: {
      kop: "Livraison à Sprimont : directement par l'E25",
      alinea:
        "Sprimont se trouve **le long de l'E25 après Liège**, à environ une heure et demie de route d'Aartselaar. En Wallonie, la livraison se fait sur rendez-vous ; vous choisissez une date de livraison lors de la réservation. Dans une ferme avec une cour intérieure, la camionnette peut souvent aller jusqu'à la porte. **Précisez à l'avance quelles pièces doivent sécher**, et le technicien apportera le bon nombre d'appareils.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : trois heures aller-retour",
      alinea:
        "Depuis Sprimont, vous roulez environ une heure et demie jusqu'à notre entrepôt, et autant pour le retour. Un déshumidificateur se transporte en outre **debout**, donc pas couché dans le coffre. Pour une maison en pierre, vous voulez aussi **une mesure au démarrage**, et vous l'obtenez quand nous livrons.",
    },
    buren: ["chaudfontaine", "trooz", "esneux", "aywaille", "theux"],
    faq: [
      {
        q: "Combien de temps un mur en pierre de Sprimont doit-il sécher après une transformation ?",
        a: "En général plus longtemps qu'un mur en brique, parce que les murs sont si épais. Comptez des semaines, selon la quantité d'eau entrée dans l'enduit et les joints. Le technicien mesure au démarrage et à la reprise, pour que vous voyiez la différence.",
      },
      {
        q: "Puis-je chauffer rapidement une ferme en pierre pour la sécher ?",
        a: "Plutôt progressivement. Un épais mur de pierre qui chauffe vite sèche en surface pendant que le cœur reste mouillé. Un déshumidificateur avec un ventilateur et une température modérée donnent un résultat plus homogène.",
      },
      {
        q: "Livrez-vous aussi à Banneux et à Louveigné ?",
        a: "Oui, Banneux et Louveigné font partie de Sprimont, et nous y livrons sur rendez-vous. Indiquez lors de la réservation l'adresse exacte et le type de travaux, et nous planifierons le trajet avec d'autres adresses de la région.",
      },
      {
        q: "Un déshumidificateur fonctionne-t-il dans un gros œuvre froid en hiver ?",
        a: "Un déshumidificateur à condensation perd beaucoup de rendement en dessous de 15 °C. Dans un gros œuvre sans chauffage, le technicien place donc un chauffage électrique à côté du déshumidificateur. Ce chauffage demande du courant force ; signalez à l'avance s'il y a un raccordement 400 V sur le chantier.",
      },
    ],
    realisaties: [],
  },

  trooz: {
    slug: "trooz",
    title: "Louer un déshumidificateur à Trooz et Fraipont | Vernast",
    description:
      "Déshumidificateur à louer à Trooz, Forêt, Fraipont ou Nessonvaux : maisons mitoyennes de l'étroite vallée de la Vesdre, après inondation ou transformation.",
    h1: "Location de déshumidificateur à Trooz",
    kicker: "Liège · villages au bord de la Vesdre",
    rit: { afstand: "environ 140 km", tijd: "environ une heure et demie" },
    intro: [
      "Trooz se trouve **dans la vallée de la Vesdre, entre Chaudfontaine et Pepinster**. La commune comprend Forêt, Fraipont et Nessonvaux : des villages le long de la rivière dans la vallée étroite, avec des quartiers résidentiels sur les versants au-dessus.",
      "La vallée a longtemps été industrielle, avec des usines le long de l'eau et de la voie ferrée. C'est de là que viennent les **rangées de maisons ouvrières** encore toutes proches de la Vesdre, souvent avec la façade arrière contre le versant. Depuis Aartselaar, nous y mettons environ une heure et demie.",
    ],
    bouw: {
      kop: "Maisons mitoyennes entre rivière et versant",
      alineas: [
        "Trooz a été **durement touchée en juillet 2021** par l'inondation de la Vesdre. Depuis, beaucoup de maisons de la vallée ont été mises à nu et reconstruites. L'humidité n'y est pas seulement dans l'enduit, mais **profondément dans la brique et dans le sol**, et un déshumidificateur doit alors pouvoir tourner pendant des semaines.",
        "Le versant joue aussi un rôle. Une pièce à l'arrière a souvent de la terre ou de la roche contre le mur, et ce mur reste froid et humide, même sans inondation. Un déshumidificateur élimine **l'humidité de construction et l'eau d'inondation**. L'eau qui continue de venir du versant demande une intervention sur le mur.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une maison mitoyenne qui doit sécher entièrement** : 110 litres par jour et une portée jusqu'à 600 m³, assez pour le sol et les murs ensemble." },
      { key: "ttv4500", waarom: "Dans une maison mitoyenne étroite et profonde, l'air circule peu entre l'avant et l'arrière. Ce ventilateur de 4 500 m³/h **envoie l'air humide** vers le déshumidificateur." },
      { key: "revolution", waarom: "**Pour une pièce froide contre le versant** : ce déshumidificateur à adsorption continue d'extraire l'humidité là où un appareil à condensation perd son rendement à cause du froid." },
      { key: "ttk170", waarom: "Pour un étage ou une petite transformation à Forêt : compact, 50 litres par jour et 0,75 kW sur une prise standard." },
    ],
    levering: {
      kop: "Livraison à Trooz : par Liège, puis dans la vallée",
      alinea:
        "Nous roulons environ une heure et demie, **par Liège**, puis nous descendons vers la Vesdre. En Wallonie, nous livrons **sur rendez-vous** : vous choisissez une date de livraison lors de la réservation. Dans les centres de village étroits, la camionnette s'arrête souvent sur une route fréquentée. Signalez donc s'il y a une allée ou une place de stationnement devant la porte, et nous planifierons le déchargement en conséquence.",
    },
    afhalen: {
      kop: "Depuis Trooz, l'enlèvement vous prend une demi-journée",
      alinea:
        "Aartselaar est à environ une heure et demie de route de Trooz, aller simple. Un déshumidificateur doit en outre être **transporté debout**. Si vous venez quand même, roulez en dehors des heures de pointe autour de Liège. Pour une maison après des dégâts des eaux, **la livraison avec une mesure d'humidité** au démarrage est généralement le meilleur choix.",
    },
    buren: ["chaudfontaine", "fleron", "olne", "sprimont"],
    faq: [
      {
        q: "Ma maison dans la vallée de la Vesdre a été mise à nu après l'inondation. Puis-je sécher maintenant ?",
        a: "Oui, c'est le bon moment. Sans enduit ni revêtement de sol, les murs et le sol rendent leur humidité le plus facilement. Gardez portes et fenêtres fermées pendant que le déshumidificateur tourne. Lors de l'installation, le technicien mesure à quel point la brique est encore mouillée.",
      },
      {
        q: "Pourquoi le mur à l'arrière de ma maison reste-t-il humide ?",
        a: "Dans beaucoup de maisons de Trooz, la façade arrière est contre le versant, avec de la terre ou de la roche contre elle. Ce mur reste froid et absorbe l'humidité de l'extérieur quand il pleut. Un déshumidificateur élimine l'humidité de construction, mais l'eau venant du versant demande une intervention côté extérieur.",
      },
      {
        q: "Combien d'appareils me faut-il pour une maison mitoyenne de deux étages ?",
        a: "En général, un déshumidificateur par étage, et après des dégâts des eaux, un ventilateur en plus au rez-de-chaussée. Indiquez lors de la réservation la surface et la hauteur atteinte par l'eau. Le technicien compose la combinaison et l'adapte sur place si nécessaire.",
      },
      {
        q: "Pouvez-vous livrer si la rue est étroite et fréquentée ?",
        a: "Oui. Le technicien décharge le plus rapidement possible et rentre les appareils avec un diable. Faites-nous savoir lors de la réservation s'il y a une allée ou une place devant la porte, et nous en tiendrons compte dans le planning.",
      },
    ],
    realisaties: [],
  },

  wezet: {
    slug: "wezet",
    title: "Location de déshumidificateur à Visé (Wezet) | Vernast",
    description:
      "Déshumidificateur de chantier à Visé : vieilles maisons de ville au bord de la Meuse, Cheratte, Argenteau et Lanaye à la frontière. Installé par un technicien.",
    h1: "Location de déshumidificateur à Visé",
    kicker: "Liège · cité mosane à la frontière néerlandaise",
    rit: { afstand: "environ 125 km", tijd: "près d'une heure et demie" },
    intro: [
      "**Visé**, Wezet en néerlandais, se trouve sur la Meuse, juste avant que le fleuve **n'entre aux Pays-Bas**. Le canal Albert longe la ville, et à Lanaye se trouvent les grandes écluses à la frontière. Depuis Aartselaar, nous y mettons près d'une heure et demie.",
      "La ville comprend aussi **Argenteau, Cheratte, Richelle et Lixhe**. Cheratte a un **passé charbonnier**, Argenteau est adossé aux rochers de la vallée de la Meuse, et autour de Lanaye commence la région marneuse de la Montagne Saint-Pierre.",
    ],
    bouw: {
      kop: "Une ville au bord de l'eau, des villages contre la paroi rocheuse",
      alineas: [
        "Dans le centre se trouvent **de vieilles maisons de ville avec cave**, tout près de la Meuse. Le sol y est naturellement humide, et une cave y reste fraîche. Après une rénovation, nous éliminons l'humidité de construction d'un nouveau plafonnage ou d'un nouveau sol. **L'humidité qui continue de venir du sol**, le technicien la repère séparément avec une mesure d'humidité.",
        "À Cheratte et à Argenteau, des maisons sont **adossées au versant**, parfois avec la façade arrière contre la roche ou la terre. Après une période pluvieuse, l'humidité traverse le mur. Dans les quartiers plus récents autour de la ville, il s'agit de **constructions neuves avec chape et plafonnage**, et là, un déshumidificateur fait ce que vous attendez de lui.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**Pour la cave d'une maison de ville près de la Meuse.** Le déshumidificateur à adsorption continue de fonctionner dans le froid, là où un appareil à condensation perd du rendement." },
      { key: "ttk350", waarom: "Pour **une maison à Cheratte ou à Argenteau** avec un nouveau plafonnage : 70 litres par jour, jusqu'à environ 400 m³." },
      { key: "teddh30", waarom: "Sur **un chantier d'hiver dans une maison ancienne**, ce chauffage de 30 kW porte la pièce au-dessus de 15 °C. Il demande du courant force en 400 V." },
      { key: "ttv4500", waarom: "Le long d'**un mur côté versant**, il chasse la couche d'air humide, pour que le déshumidificateur capte cette humidité." },
    ],
    levering: {
      kop: "Livraison à Visé",
      alinea:
        "Le trajet d'Aartselaar à Visé dure **près d'une heure et demie**. Vous choisissez une date de livraison lors de la réservation ; l'heure précise, nous la convenons avec vous **sur rendez-vous**. Le technicien installe, règle et mesure. Dans le vieux centre et à Argenteau, le stationnement est parfois serré : signalez-le à l'avance.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar",
      alinea:
        "Venir chercher un appareil à Aartselaar signifie, depuis Visé, **près de trois heures de route** aller-retour, et encore une fois plus tard pour le ramener. Pour une cave au bord de la Meuse, beaucoup dépend du bon type de déshumidificateur et du bon dispositif. La livraison avec mesure est alors le meilleur choix.",
    },
    buren: ["oupeye", "bitsingen", "dalhem", "blegny"],
    faq: [
      {
        q: "Ma cave à Visé est tout près de la Meuse. Un déshumidificateur peut-il l'assécher ?",
        a: "L'humidité de construction après une rénovation, nous l'éliminons, même dans une cave fraîche, avec un déshumidificateur à adsorption. Si l'eau vient du sol ou traverse le mur, elle revient dès que le déshumidificateur est parti. Le technicien mesure lors de l'installation et vous dit de laquelle des deux il s'agit.",
      },
      {
        q: "Livrez-vous aussi à Lanaye et à Lixhe, près de la frontière ?",
        a: "Oui, dans toutes les sections de Visé. Indiquez l'adresse complète lors de la réservation. Si la maison est isolée, près des écluses ou sur le versant, décrivez aussi l'accès pour que le technicien prenne le bon itinéraire.",
      },
      {
        q: "Que faire d'un mur adossé au versant à Argenteau ?",
        a: "Après une rénovation, ce mur sèche plus vite avec un déshumidificateur et un ventilateur, qui chasse la couche d'air humide le long de la paroi. S'il est à nouveau mouillé après chaque averse, l'humidité vient de l'extérieur. Un déshumidificateur ne règle pas cela, et une mesure permet de faire la différence.",
      },
      {
        q: "Le déshumidificateur peut-il continuer à tourner quand je ne suis pas là ?",
        a: "Oui, les déshumidificateurs à condensation sont faits pour tourner jour et nuit. Ils recueillent l'eau ou l'évacuent par un tuyau. Gardez fenêtres et portes extérieures fermées et vérifiez que le tuyau d'évacuation est bien placé. Le technicien vous le montre lors de l'installation.",
      },
    ],
    realisaties: [],
  },

  amay: {
    slug: "amay",
    title: "Déshumidificateur de chantier à louer à Amay | Vernast",
    description:
      "Louer un déshumidificateur à Amay, Ampsin, Jehay-Bodegnée ou Ombret ? Vernast livre et installe pour maisons mitoyennes près de la Meuse et fermes transformées.",
    h1: "Location de déshumidificateur à Amay",
    kicker: "Province de Liège · rives de la Meuse et bord de la Hesbaye",
    rit: { afstand: "environ 125 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Amay se trouve sur la Meuse, entre Huy et Engis. Dans le centre se dresse **la collégiale romane Saint-Georges-et-Sainte-Ode**, et à Jehay-Bodegnée, le château de Jehay entouré d'eau. Depuis Aartselaar, nous y sommes en un peu plus d'une heure.",
      "Le long du fleuve se trouvent des entreprises et l'écluse d'Ampsin. Plus loin de l'eau, le paysage devient plus rural, avec **des fermes et des lotissements** au bord de la Hesbaye.",
    ],
    bouw: {
      kop: "Maisons mitoyennes près de la Meuse, fermes sur le plateau",
      alineas: [
        "Dans le centre et à Ampsin, on trouve beaucoup de **maisons ouvrières et de maisons mitoyennes** avec une façade étroite et une cave sous la pièce avant. Qui met entièrement une telle maison à nu apporte en peu de temps beaucoup de nouveau plafonnage et de chape. Cette humidité doit partir avant la pose des sols ou de la peinture. Dans une pièce fermée avec un déshumidificateur, cela va beaucoup plus vite qu'avec les fenêtres ouvertes.",
        "Sur le plateau, il s'agit plus souvent de **constructions neuves et de fermes transformées**. Une grange qui devient une habitation a des murs épais et un sol sans isolation, et reste donc longtemps froide. Réchauffez donc d'abord la pièce : **en dessous de 15 °C, un déshumidificateur à condensation perd une grande partie de sa capacité**.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison mitoyenne entièrement rénovée.** Avec 70 litres par jour, il sèche un rez-de-chaussée avec une chape fraîche." },
      { key: "ttk650", waarom: "**Pour une ferme transformée avec un grand volume sous le toit.** Il retire 110 litres par jour de l'air, dans des volumes jusqu'à 600 m³." },
      { key: "teddh30", waarom: "Une grange qui devient une habitation reste froide en hiver. Ce chauffage de chantier de 30 kW met la pièce en température ; il demande un raccordement en 400 V." },
      { key: "ttv4500", waarom: "Dans une maison mitoyenne étroite et profonde, il envoie l'air de la pièce avant vers la cuisine à l'arrière, où le plafonnage resterait sinon humide." },
    ],
    levering: {
      kop: "Livraison à Amay : sur rendez-vous, le long de la Meuse",
      alinea:
        "Nous roulons **par l'E40** jusqu'à Amay, un trajet d'un peu plus d'une heure. Lors de la réservation, vous choisissez une date de livraison, et en Wallonie, nous fixons le moment avec vous. Votre chantier se trouve le long d'un chemin de campagne étroit ou derrière un portail ? **Décrivez l'accès à l'avance**, et le technicien en tiendra compte.",
    },
    afhalen: {
      kop: "Depuis Amay, l'enlèvement représente un long trajet",
      alinea:
        "Notre point d'enlèvement à Aartselaar est à un peu plus d'une heure de route d'Amay. Venir chercher et ramener l'appareil vous coûte vite une demi-journée de travail au total. **Laissez-nous plutôt livrer** : le technicien fait alors tout de suite une mesure d'humidité au démarrage.",
    },
    buren: ["hoei", "engis", "saint-georges-sur-meuse", "verlaine", "villers-le-bouillet"],
    faq: [
      {
        q: "Je transforme une ferme à Jehay en habitation. Combien de déshumidificateurs me faut-il ?",
        a: "Cela dépend du volume sous le toit et de la quantité de chape et de plafonnage neufs. Une grande grange avec un grenier ouvert demande souvent deux appareils et, en hiver, un chauffage de chantier. Le technicien examine le dispositif lors de l'installation et l'adapte si nécessaire.",
      },
      {
        q: "Ma maison mitoyenne à Ampsin a une cave humide. Que peut faire un déshumidificateur ?",
        a: "Un déshumidificateur retire l'humidité de l'air et de la surface des murs et du sol. Cela aide après des travaux ou une fuite. Si l'humidité vient du sol à travers un mur sans barrière contre l'humidité, elle revient. Lors de l'installation, nous mesurons d'où elle vient.",
      },
      {
        q: "Dois-je être présent quand le technicien vient installer l'appareil ?",
        a: "Quelqu'un doit ouvrir la porte et montrer où placer l'appareil et où l'évacuation peut aller. C'est pourquoi nous convenons avec vous du moment de livraison. Pour la reprise, il suffit généralement que la pièce soit accessible ; vous réglez cela avec le technicien.",
      },
      {
        q: "Un déshumidificateur peut-il tourner pendant que je n'habite pas dans la maison ?",
        a: "Oui, c'est même idéal : fenêtres et portes restent fermées et personne n'entre ni ne sort. L'appareil tourne jour et nuit. Avec un tuyau d'évacuation vers un siphon ou un évier, personne ne doit vider de bac collecteur.",
      },
    ],
    realisaties: [],
  },

  anthisnes: {
    slug: "anthisnes",
    title: "Déshumidificateur à louer à Anthisnes (Condroz) | Vernast",
    description:
      "Déshumidificateur à louer à Anthisnes, Hody, Tavier ou Villers-aux-Tours : fermes et maisons en pierre du Condroz au-dessus de l'Ourthe. Installé chez vous.",
    h1: "Location de déshumidificateur de chantier à Anthisnes",
    kicker: "Province de Liège · le Condroz au-dessus de l'Ourthe",
    rit: { afstand: "environ 145 km", tijd: "un peu plus d'une heure et demie" },
    intro: [
      "Anthisnes se trouve **dans le Condroz, au-dessus de la vallée de l'Ourthe**, entre Esneux et Ouffet. La commune compte quatre villages : **Anthisnes, Hody, Tavier et Villers-aux-Tours**. À Anthisnes même se dresse **l'Avouerie**, une tour-logis médiévale, et les villages sont en grande partie bâtis en **pierre naturelle grise**.",
      "Anthisnes est **une commune agricole** avec beaucoup de grandes fermes autour d'une cour. Quand l'exploitation s'arrête, une telle ferme est souvent **divisée en logements ou transformée en gîte**. En bordure des villages se trouvent aussi des maisons plus récentes. Depuis Aartselaar, nous mettons un peu plus d'une heure et demie pour rejoindre Anthisnes.",
    ],
    bouw: {
      kop: "Fermes autour d'une cour transformées en logements",
      alineas: [
        "**Vous transformez une ferme en carré en logements ou en gîte ?** Vous traitez alors étables, granges et maison d'habitation en un seul chantier. De nouveaux sols, des murs intérieurs et de l'enduit arrivent dans **des bâtiments aux épais murs de pierre** qui retiennent déjà eux-mêmes de l'humidité. Placez un déshumidificateur par logement ou par aile, et vous gardez une vue d'ensemble.",
        "**Un gîte a une date d'ouverture fixe** : les premiers hôtes ont réservé, et une chambre qui sent encore l'humidité est un mauvais départ. Planifiez donc **la dernière mesure** à un moment où il reste du temps pour corriger. Sur le plateau, un bâtiment vide se refroidit vite en hiver. Un chauffage maintient alors une température assez élevée pour le déshumidificateur.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour un logement ou une aile de ferme en transformation** : 70 litres par jour et une portée jusqu'à environ 400 m³." },
      { key: "ttk170", waarom: "Pour les chambres d'un gîte que vous terminez une par une : un déshumidificateur compact de 50 litres par jour que vous **déplacez d'une pièce à l'autre**." },
      { key: "teddh30", waarom: "Une étable ou une grange tout juste transformée n'a pas encore de chauffage. **Ce chauffage porte la pièce au-dessus de 15 °C**, pour que le déshumidificateur à côté fonctionne bien. Il demande du courant force (400 V)." },
      { key: "ttv4500", waarom: "Dans une longue étable aux murs épais, ce ventilateur met l'air en mouvement, pour que l'humidité ne stagne pas dans les coins." },
    ],
    levering: {
      kop: "Livraison à Anthisnes : sur rendez-vous, même dans une ferme",
      alinea:
        "Nous roulons **par Liège et la vallée de l'Ourthe** jusqu'à Anthisnes, un peu plus d'une heure et demie depuis Aartselaar. Lors de la réservation, vous fixez la date de livraison, et la livraison elle-même se fait sur rendez-vous. S'il s'agit d'une ferme avec plusieurs logements, **précisez quelles parties doivent sécher**. Le technicien répartit les appareils par aile et mesure chaque partie au démarrage.",
    },
    afhalen: {
      kop: "Depuis Anthisnes, l'enlèvement convient rarement",
      alinea:
        "Avec un peu plus d'une heure et demie par trajet, vous êtes **plus de trois heures en route** aller-retour jusqu'à notre point d'enlèvement à Aartselaar. Pour une ferme, il vous faut en outre plusieurs appareils, et ils n'entrent pas ensemble dans une voiture. **Laissez-nous livrer** : l'installation et la reprise font partie du pack de séchage.",
    },
    buren: ["esneux", "comblain-au-pont", "ouffet", "nandrin"],
    faq: [
      {
        q: "Nous transformons une ferme en gîte. Quand le déshumidificateur doit-il être parti ?",
        a: "Planifiez la reprise au moins une semaine avant les premiers hôtes. Vous avez alors une dernière mesure et encore le temps de corriger si une chambre est en retard. Les hôtes remarquent tout de suite une odeur d'humidité. Mentionnez votre date d'ouverture lors de la réservation, et nous planifierons en fonction.",
      },
      {
        q: "Puis-je déplacer un seul appareil d'une pièce à l'autre ?",
        a: "Oui, un déshumidificateur compact est monté sur roues et vous le roulez vous-même jusqu'à la pièce suivante. Cela fonctionne bien pour un gîte terminé chambre par chambre. Pour un étage complet avec une chape fraîche, mieux vaut sécher toutes les pièces en même temps, sinon l'humidité passe d'une pièce à l'autre.",
      },
      {
        q: "Travaillez-vous à Hody, Tavier et Villers-aux-Tours ?",
        a: "Oui, nous livrons dans les quatre villages d'Anthisnes. Si la ferme se trouve le long d'un chemin de campagne ou derrière une cour pavée, mentionnez-le lors de la réservation. Le technicien emporte alors un diable pour amener les appareils jusque dans la bonne pièce.",
      },
      {
        q: "Combien d'appareils me faut-il pour une ferme avec trois logements ?",
        a: "Comptez un déshumidificateur par logement, avec un chauffage dans les parties qui n'ont pas encore de chauffage. Le nombre exact dépend du volume et de l'épaisseur de la chape et de l'enduit. Dans le calculateur, vous voyez à l'avance le prix du pack, livraison et deux mesures comprises.",
      },
    ],
    realisaties: [],
  },

  burdinne: {
    slug: "burdinne",
    title: "Louer un déshumidificateur à Burdinne et Oteppe | Vernast",
    description:
      "Déshumidificateur à Burdinne, Oteppe, Marneffe ou Lamontzée ? Livré et installé pour les vieilles fermes et maisons villageoises de la vallée de la Burdinale.",
    h1: "Location de déshumidificateur à Burdinne",
    kicker: "Province de Liège · dans la vallée de la Burdinale",
    rit: { afstand: "environ 110 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Burdinne se trouve au sud de la Hesbaye, là où le plateau descend vers **la vallée de la Meuse**. La commune porte le nom de **la Burdinale**, un ruisseau qui coule par une vallée verte jusqu'à la Mehaigne. Outre le village lui-même, **Hanneche, Lamontzée, Marneffe et Oteppe** en font partie.",
      "Burdinne fait partie du **Parc naturel des vallées de la Burdinale et de la Mehaigne**. On y voit surtout **de vieilles fermes et des maisons villageoises** entre champs et bosquets, et peu de grands lotissements. Qui construit ici transforme donc le plus souvent **un bâtiment existant**. Depuis Aartselaar, nous y mettons **un peu plus d'une heure**.",
    ],
    bouw: {
      kop: "Vieilles fermes et maisons dans une vallée humide",
      alineas: [
        "La vallée de la Burdinale est étroite et en partie boisée, et **l'air y reste humide plus longtemps** que sur le plateau dégagé. Une maison dans la vallée sèche donc difficilement d'elle-même après une rénovation. Ouvrir les fenêtres **fait souvent entrer plus d'humidité** qu'il n'en sort. Gardez donc les fenêtres fermées et laissez un déshumidificateur faire le travail.",
        "**Les vieilles fermes et les grandes maisons** ont ici des murs en brique et en calcaire, souvent sans barrière contre l'humidité. Un nouvel **enduit à la chaux** ou un nouveau sol apporte de l'eau dans ces murs, et elle doit en sortir progressivement. Sécher trop vite et trop chaud peut faire fissurer les matériaux anciens. C'est pourquoi nous adaptons **le dispositif au bâtiment**.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une vieille ferme dans la vallée** restaurée aile par aile : 70 litres par jour, et facile à déplacer vers l'aile suivante." },
      { key: "revolution", waarom: "Pour **une cave ou un débarras frais** : ce déshumidificateur à adsorption continue d'extraire l'humidité de l'air même à basse température, là où un appareil à condensation ralentit." },
      { key: "teddh20", waarom: "Ce chauffage de 20 kW sur courant force réchauffe une pièce aux vieux murs, pour que le déshumidificateur fonctionne mieux. Réglez-le de façon modérée pour **ne pas brusquer l'enduit**." },
      { key: "ttk170", waarom: "Pour **une maison villageoise à Hanneche ou à Lamontzée** où vous travaillez pièce par pièce : compact, avec 50 litres par jour." },
    ],
    levering: {
      kop: "Livraison à Burdinne : le dernier bout à travers la verdure",
      alinea:
        "Nous roulons **un peu plus d'une heure** depuis Aartselaar, par l'E40 puis vers le sud par les routes de campagne du plateau. La **date de livraison**, vous la choisissez vous-même lors de la réservation ; l'heure, nous la fixons avec vous sur rendez-vous. Dans la vallée, les routes sont étroites et parfois raides. Signalez donc si la camionnette peut aller **jusqu'à la maison**.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : comptez une demi-journée",
      alinea:
        "Depuis Burdinne, vous êtes **plus de deux heures** en route pour l'enlèvement, aller-retour. Cela ne vaut la peine que si vous êtes de toute façon du côté d'Anvers. Avec la livraison, le technicien fait en outre **une première mesure d'humidité**, pour que vous puissiez vérifier plus tard que cela sèche.",
    },
    buren: ["braives", "heron"],
    faq: [
      {
        q: "Pourquoi une maison dans la vallée de la Burdinale sèche-t-elle si difficilement ?",
        a: "Dans une vallée étroite et boisée, l'air est souvent plus humide que sur le plateau. Ouvrir alors les fenêtres fait entrer de l'air extérieur humide au lieu d'air sec. Un déshumidificateur dans une pièce fermée fonctionne indépendamment de la météo et retire bel et bien l'humidité de l'air.",
      },
      {
        q: "Sécher trop vite peut-il abîmer de vieux murs ?",
        a: "Oui. L'enduit à la chaux et la vieille brique ont besoin de temps, et une pièce qui se réchauffe fortement en peu de temps peut présenter de petites fissures. Dans les maisons anciennes, nous préférons donc une chaleur modérée et un déshumidificateur qui travaille régulièrement à une combinaison trop lourde.",
      },
      {
        q: "Un déshumidificateur peut-il rester dans une pièce habitée ?",
        a: "Oui, s'il y a de l'espace autour de l'appareil et que le tuyau d'évacuation ou le réservoir est bien placé. Un déshumidificateur fait toutefois du bruit. Si vous continuez à habiter la maison, placez-le de préférence dans une pièce où personne ne dort la nuit.",
      },
      {
        q: "À quelle fréquence faut-il vider le réservoir d'eau du déshumidificateur ?",
        a: "Cela dépend de la quantité d'humidité dans la pièce. Les premiers jours après le plafonnage, un réservoir peut être plein plusieurs fois par jour. Si vous pouvez diriger un tuyau d'évacuation vers une évacuation ou vers l'extérieur, vous n'avez pas à vider. Mentionnez lors de la réservation s'il y a une évacuation à proximité.",
      },
    ],
    realisaties: [],
  },

  clavier: {
    slug: "clavier",
    title: "Déshumidificateur de chantier à Clavier, Condroz | Vernast",
    description:
      "Louer un déshumidificateur à Clavier, Ocquier, Pailhe ou Bois-et-Borsu : maisons de village en pierre, fermes et neuf en Condroz. Installation et mesure.",
    h1: "Location de déshumidificateur à Clavier",
    kicker: "Province de Liège · six villages du Condroz",
    rit: { afstand: "environ 150 km", tijd: "un peu plus d'une heure et demie" },
    intro: [
      "Clavier est une commune rurale **au cœur du Condroz**. Elle compte six villages : **Clavier, Bois-et-Borsu, Les Avins, Ocquier, Pailhe et Terwagne**. Le paysage suit le schéma de la région, avec **de longues crêtes de grès** et entre elles **des vallées calcaires**. Les champs occupent les hauteurs, les prairies les fonds.",
      "Les villages sont en grande partie **bâtis en pierre naturelle**, et **Ocquier** a bien conservé son noyau ancien. À côté des vieilles fermes apparaissent **de nouvelles maisons en bordure des villages**. Depuis Aartselaar, nous rejoignons Clavier en un peu plus d'une heure et demie.",
    ],
    bouw: {
      kop: "Maisons de village en pierre et constructions neuves en bordure",
      alineas: [
        "**Vous rénovez une vieille maison à Ocquier ou à Pailhe ?** Vous travaillez alors avec d'épais murs en pierre naturelle qui absorbent et restituent l'humidité depuis longtemps. Un nouvel enduit à la chaux ou une isolation par l'intérieur enferme cette humidité si le mur ne sèche pas d'abord. **Le technicien mesure le mur avant la finition.** Vous savez ainsi s'il est prêt pour la couche suivante.",
        "**Pour une construction neuve en bordure de village**, on retrouve les questions habituelles du chantier : une chape qui doit être sèche pour le poseur de sol, un plafonnage qui doit être prêt pour le peintre. Une maison sur une parcelle dégagée est exposée au vent et se refroidit vite en hiver. Gardez les fenêtres fermées et placez **un déshumidificateur par niveau** : le planning reste ainsi réaliste.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "Pour une nouvelle maison en bordure de village : 70 litres par jour et une portée jusqu'à environ 400 m³, **adapté à un rez-de-chaussée avec une chape fraîche**." },
      { key: "ttk170", waarom: "**Pour une seule pièce d'une vieille maison de village** que vous rénovez pièce par pièce : un appareil compact qui absorbe 50 litres par jour, pour des volumes jusqu'à environ 250 m³." },
      { key: "radiaal2250", waarom: "Souffle de manière ciblée sur une chape fraîche et dans les coins d'une pièce en pierre, là où l'humidité persiste le plus longtemps." },
      { key: "teddh20", waarom: "Un chantier d'hiver sur une parcelle dégagée se refroidit vite. **Ce chauffage de 20 kW maintient la pièce au-dessus de 15 °C**, où un déshumidificateur à condensation fonctionne bien. Il demande un raccordement en 400 V." },
    ],
    levering: {
      kop: "Livraison à Clavier : précisez le bon village",
      alinea:
        "Le trajet d'Aartselaar à Clavier dure **un peu plus d'une heure et demie**, par Liège ou par Huy selon le village. Indiquez lors de la réservation **dans lequel des six villages** se trouve le chantier ; cela facilite le planning. Vous choisissez une date de livraison et nous convenons de la livraison avec vous sur rendez-vous. Le technicien met les appareils en place, les règle et effectue une mesure au démarrage.",
    },
    afhalen: {
      kop: "Venir chercher depuis Clavier : comptez une demi-journée",
      alinea:
        "Jusqu'à notre point d'enlèvement à Aartselaar et retour, vous êtes **plus de trois heures sur la route**, chaque fois un peu plus d'une heure et demie par trajet. Pour une rénovation de plusieurs semaines, vous devez aussi ramener les appareils ensuite : cela fait deux fois une demi-journée. **Avec un pack de séchage, la livraison et la reprise sont comprises.**",
    },
    buren: ["modave", "tinlot", "ouffet", "havelange"],
    faq: [
      {
        q: "Un mur en pierre naturelle doit-il être sec avant de l'enduire ou de l'isoler ?",
        a: "Oui. Un vieux mur en grès ou en calcaire contient toujours un peu d'humidité, mais après des travaux de démolition, un nouveau rejointoyage ou un nouveau sol, il en contient beaucoup plus. Si vous l'enfermez derrière un enduit ou une isolation par l'intérieur, elle cherche une autre voie vers l'extérieur. Le technicien mesure le mur et vous dit quand il est prêt.",
      },
      {
        q: "Livrez-vous dans tous les villages de Clavier, y compris Les Avins et Terwagne ?",
        a: "Oui, nous livrons dans les six villages de la commune. Indiquez lors de la réservation l'adresse complète et décrivez l'accès au chantier, car certaines fermes se trouvent sur un chemin de campagne étroit en dehors du centre. Nous prévoyons alors la camionnette et le diable en conséquence.",
      },
      {
        q: "Combien de déshumidificateurs faut-il pour une construction neuve en Condroz ?",
        a: "En général un déshumidificateur par niveau, complété par un ventilateur sur une chape fraîche. Le nombre exact dépend du volume, du matériau et de l'épaisseur de la couche. Vous saisissez ces données dans le calculateur et vous voyez à l'avance le prix du pack, avec livraison, installation et reprise.",
      },
      {
        q: "Comment se passe la réservation pour un chantier à Clavier ?",
        a: "Vous réservez en ligne et, si vous avez des questions, écrivez-nous ou appelez-nous sans hésiter. Nous passons ensemble en revue l'adresse, les pièces à sécher et la date de livraison que vous choisissez.",
      },
    ],
    realisaties: [],
  },

  engis: {
    slug: "engis",
    title: "Louer un déshumidificateur à Engis, vallée de la Meuse",
    description:
      "Déshumidificateur à Engis, Hermalle-sous-Huy ou Clermont-sous-Huy ? Vernast livre et installe dans la vallée de la Meuse, même après des dégâts des eaux.",
    h1: "Location de déshumidificateur à Engis",
    kicker: "Province de Liège · une étroite bande le long de la Meuse",
    rit: { afstand: "environ 130 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Engis se trouve dans un tronçon étroit de la vallée de la Meuse, entre Huy et Liège. Le centre, **Hermalle-sous-Huy** et Clermont-sous-Huy s'étendent entre le fleuve et des versants boisés. Dans une grotte d'Engis, on a découvert au XIXe siècle l'un des premiers **crânes de Néandertalien** connus.",
      "L'industrie borde le fleuve et la voie ferrée. Les habitations se trouvent souvent entre la grand-route et le versant, et des maisons plus récentes occupent le plateau au-dessus. Depuis Aartselaar, nous sommes à Engis en un peu plus d'une heure.",
    ],
    bouw: {
      kop: "Des maisons dans une vallée étroite, peu de soleil sur la façade",
      alineas: [
        "Une façade arrière adossée au versant reçoit peu de soleil. **L'humidité y persiste plus longtemps** que dans une maison sur le plateau dégagé. Après une rénovation, vous le voyez à un plafonnage qui refuse de sécher d'un côté de la maison. Un déshumidificateur dans la pièce fermée et un ventilateur dirigé vers ce mur froid y remédient.",
        "Beaucoup de maisons le long de la Meuse sont **d'anciennes maisons ouvrières** en brique ou en moellons, sans coulisse ni barrière contre l'humidité. Après une fuite ou des dégâts des eaux, c'est un mur massif et froid que vous séchez. Le technicien mesure l'humidité au démarrage et à la reprise, pour que vous sachiez **quand le peintre peut commencer**.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison rénovée le long de la Meuse.** Avec 70 litres par jour et une portée jusqu'à 400 m³, il sèche un rez-de-chaussée et un étage." },
      { key: "ttv4500", waarom: "Dirigé vers **la façade arrière froide contre le versant**, il maintient l'air en mouvement, pour que ce côté ne reste pas à la traîne par rapport au reste de la maison." },
      { key: "radiaal2250", waarom: "**Après des dégâts des eaux au rez-de-chaussée.** Ce ventilateur radial souffle au ras du sol et le long des plinthes, là où l'eau reste le plus longtemps." },
      { key: "ttk650", waarom: "Pour un projet plus important, comme une maison entièrement mise à nu : 110 litres par jour, dans des volumes jusqu'à 600 m³." },
    ],
    levering: {
      kop: "Livraison à Engis : par la grand-route de la vallée",
      alinea:
        "Le trajet jusqu'à Engis dure un peu plus d'une heure. Vous choisissez une date de livraison lors de la réservation et, comme Engis se trouve en Wallonie, nous livrons **sur rendez-vous**. Le long de la grand-route très fréquentée, la camionnette ne peut pas s'arrêter partout. Signalez donc s'il y a **une allée ou une rue latérale** où le technicien peut décharger.",
    },
    afhalen: {
      kop: "Venir chercher, c'est possible, mais c'est loin",
      alinea:
        "Depuis Engis, vous roulez un peu plus d'une heure jusqu'à Aartselaar, et encore une fois après la location pour ramener l'appareil. Un déshumidificateur de chantier doit être transporté **debout dans le véhicule**. Vous n'avez pas de camionnette ? La livraison est alors la solution la plus simple.",
    },
    buren: ["amay", "saint-georges-sur-meuse", "flemalle", "nandrin"],
    faq: [
      {
        q: "Pourquoi l'arrière de ma maison à Engis sèche-t-il plus lentement que l'avant ?",
        a: "Ce côté est adossé au versant et reçoit peu de soleil. Le mur y reste plus froid, et l'air à son contact se sature plus vite. Un ventilateur dirigé vers ce mur et un déshumidificateur dans la même pièce, portes fermées, compensent en grande partie cette différence.",
      },
      {
        q: "Que faire en premier après des dégâts des eaux au rez-de-chaussée ?",
        a: "Pompez ou raclez d'abord l'eau stagnante et retirez l'isolation et les plinthes mouillées. Ensuite commence le séchage : le déshumidificateur évacue l'humidité qui reste dans le sol et les murs. Indiquez lors de la réservation la hauteur atteinte par l'eau, et nous prévoirons aussi un ventilateur de sol.",
      },
      {
        q: "Pouvez-vous livrer s'il n'y a pas de place pour stationner le long de la route ?",
        a: "Oui. Indiquez lors de la réservation s'il y a une allée, une rue latérale ou un emplacement derrière la maison. Avec un diable, un ou deux appareils sont vite déchargés, et la camionnette ne doit s'arrêter que brièvement.",
      },
      {
        q: "Livrez-vous aussi à Clermont-sous-Huy ?",
        a: "Oui, ainsi que dans les parties plus élevées d'Engis. Faites-nous savoir lors de la réservation si la route vers votre maison est étroite ou raide, pour que le technicien sache quel itinéraire prendre.",
      },
    ],
    realisaties: [],
  },

  ferrieres: {
    slug: "ferrieres",
    title: "Location de déshumidificateur à Ferrières et Werbomont",
    description:
      "Déshumidificateur à Ferrières, Werbomont, Xhoris, My ou Vieuxville : résidences secondaires et maisons en pierre entre Ourthe et Ardennes. Installé et repris.",
    h1: "Location de déshumidificateur à Ferrières",
    kicker: "Province de Liège · entre Ourthe et Ardennes",
    rit: { afstand: "environ 165 km", tijd: "environ une heure trois quarts" },
    intro: [
      "Ferrières se situe **à la transition entre le Condroz et les Ardennes**, à l'est de l'Ourthe. La commune comprend **Ferrières, My, Vieuxville, Werbomont et Xhoris**. **Vieuxville** se trouve dans la vallée de l'Ourthe, au pied des **ruines du château de Logne**. **Werbomont** est perché sur le plateau, à un carrefour de routes vers les Ardennes.",
      "La commune est **boisée et rurale**. À côté des maisons de village et des fermes en pierre, on trouve **des résidences secondaires et des maisons de vacances**. Sur le plateau, le climat est plus rude et plus humide que dans la vallée, et cela se remarque surtout dans les maisons inoccupées une partie de l'année. Le trajet depuis Aartselaar dure environ une heure trois quarts.",
    ],
    bouw: {
      kop: "Maisons de vacances sur le plateau et maisons dans la vallée de l'Ourthe",
      alineas: [
        "**Une maison de vacances à Werbomont ou à My** reste souvent plusieurs semaines sans chauffage en hiver. Sur le plateau, il fait plus froid et plus humide qu'en Flandre, et dans une maison froide l'humidité se condense sur les murs, les plafonds et dans les armoires. En revenant au printemps, on découvre parfois **des moisissures derrière l'armoire**. Avec un déshumidificateur et un chauffage, vous remettez la maison en état.",
        "**À Vieuxville et le long de l'Ourthe**, des maisons se trouvent tout près de la rivière, et après une crue une cave ou un rez-de-chaussée peut être inondé. **L'eau doit d'abord être évacuée, ensuite vient le séchage.** Lors de l'installation, le technicien mesure jusqu'où l'humidité a pénétré dans les murs et choisit en fonction la combinaison de déshumidificateur et de ventilateur.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**Pour une maison de vacances restée froide pendant des mois** : ce déshumidificateur à adsorption absorbe l'humidité même à basse température." },
      { key: "teddh20", waarom: "Porte d'abord une maison non chauffée sur le plateau au-dessus de 15 °C, pour qu'un déshumidificateur à condensation fonctionne bien à côté. Ce chauffage de 20 kW demande un raccordement en 400 V." },
      { key: "ttk650", waarom: "**Après une inondation dans une maison au bord de l'Ourthe** : avec 110 litres par jour, il évacue l'essentiel de l'humidité avant qu'elle ne pénètre plus profondément dans les murs." },
      { key: "radiaal2250", waarom: "Souffle de manière ciblée sur un sol de cave mouillé et dans les coins, là où l'eau reste le plus longtemps après une inondation." },
    ],
    levering: {
      kop: "Livraison à Ferrières : par Liège et la vallée de l'Ourthe",
      alinea:
        "Le trajet depuis Aartselaar dure **environ une heure trois quarts**, par Liège et la vallée de l'Ourthe. Vous indiquez une date de livraison lors de la réservation, puis nous fixons l'heure sur rendez-vous. S'il s'agit d'une maison de vacances, **faites-nous savoir qui a la clé**. Après l'installation, vous ne devez plus être présent jusqu'à ce que nous venions reprendre les appareils.",
    },
    afhalen: {
      kop: "Venir chercher à Aartselaar, en route vers votre maison de vacances",
      alinea:
        "Vous partez de toute façon de Flandre vers votre résidence secondaire à Ferrières ? Vous pouvez alors **emporter un appareil à l'aller**. Notre point d'enlèvement se trouve à Aartselaar, le long de l'A12, à environ une heure trois quarts de Ferrières. Transportez le déshumidificateur debout. En cas de dégâts des eaux le long de l'Ourthe, la livraison est le meilleur choix.",
    },
    buren: ["hamoir", "aywaille", "durbuy", "manhay"],
    faq: [
      {
        q: "Comment éviter les moisissures dans ma maison de vacances à Werbomont ?",
        a: "Ne laissez pas la maison se refroidir complètement en hiver et aérez-la de temps en temps. Si de l'humidité s'est malgré tout condensée, faites tourner un chauffage et un déshumidificateur pendant une semaine ou deux, fenêtres fermées. Sortez les vêtements et le linge des armoires, pour qu'ils sèchent en même temps.",
      },
      {
        q: "Notre cave à Vieuxville a été inondée. Quand le déshumidificateur peut-il venir ?",
        a: "Dès que l'eau stagnante et la boue ont été évacuées. Un déshumidificateur retire l'eau du sol et du bas des murs ; une flaque, vous l'enlevez d'abord avec une pompe ou un aspirateur à eau. Indiquez lors de la réservation la hauteur atteinte par l'eau, et le technicien apportera les bons appareils.",
      },
      {
        q: "Pouvez-vous livrer si je ne suis pas à Ferrières ?",
        a: "Oui, si quelqu'un peut ouvrir la porte : un voisin, le gestionnaire du parc de vacances ou un entrepreneur. Indiquez qui lors de la réservation, et nous convenons de la livraison avec cette personne. Le technicien montre comment l'appareil fonctionne et laisse un numéro de contact.",
      },
      {
        q: "Un déshumidificateur classique fonctionne-t-il dans une maison froide des Ardennes ?",
        a: "Un déshumidificateur à condensation perd de son rendement sous 15 °C. Dans une maison non chauffée sur le plateau, nous ajoutons donc un chauffage, ou nous choisissons un déshumidificateur à adsorption qui fonctionne aussi dans le froid. Le technicien mesure la température lors de l'installation et adapte le dispositif en conséquence.",
      },
    ],
    realisaties: [],
  },

  hamoir: {
    slug: "hamoir",
    title: "Déshumidificateur à louer à Hamoir, au bord de l'Ourthe",
    description:
      "Déshumidificateur à Hamoir, Comblain-la-Tour ou Filot : maisons au bord de l'Ourthe et maisons en pierre à flanc de coteau. Mesure à la pose et au retrait.",
    h1: "Location de déshumidificateur à Hamoir",
    kicker: "Province de Liège · un village au bord de l'Ourthe",
    rit: { afstand: "environ 160 km", tijd: "environ une heure trois quarts" },
    intro: [
      "Hamoir se trouve **au bord de l'Ourthe**, entre Comblain-au-Pont et Durbuy. La rivière traverse le centre du village, et **Comblain-la-Tour** est lui aussi au bord de l'eau. Hamoir et Comblain-la-Tour ont chacun **une gare sur la ligne de l'Ourthe**, de Liège à Marloie.",
      "La vallée est ici **étroite et boisée**, avec des habitations sur la rive et **des maisons qui grimpent le long du coteau**. Sur le plateau au-dessus, autour de Filot, commence le Condroz rural. L'Ourthe attire kayakistes et promeneurs, et Hamoir compte donc **des campings et des maisons de vacances**. Depuis Aartselaar, nous y arrivons en environ une heure trois quarts.",
    ],
    bouw: {
      kop: "Des maisons au bord de la rivière et des maisons à flanc de coteau",
      alineas: [
        "**Qui habite au bord de l'Ourthe** sait que la rivière peut monter après de fortes pluies. Une cave ou un rez-de-chaussée qui a été sous eau doit, après le nettoyage, **sécher à fond avant de replafonner ou de recarreler**. Si vous faites la finition trop tôt, vous enfermez l'humidité. Quelques mois plus tard, le plafonnage se décolle ou les carreaux sonnent creux.",
        "**Sur les versants de la vallée** se trouvent des maisons en pierre dont la façade arrière est adossée à la colline. De ce côté, la terre et la roche touchent le mur, et après une période humide cette humidité pénètre à l'intérieur. Après une rénovation, le technicien mesure **quelle part est de l'humidité de construction et quelle part vient du versant**. Vous savez ainsi ce qu'un déshumidificateur peut résoudre ici.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Après une crue dans une cave ou un rez-de-chaussée au bord de l'Ourthe** : 110 litres par jour et une portée jusqu'à environ 600 m³." },
      { key: "radiaal2250", waarom: "Souffle de manière ciblée sur un sol mouillé et le long des plinthes, **là où l'eau reste le plus longtemps après une inondation**." },
      { key: "revolution", waarom: "Pour une pièce froide côté colline d'une maison adossée au versant : ce déshumidificateur à adsorption fonctionne aussi dans des pièces qui ne se réchauffent jamais." },
      { key: "ttk350", waarom: "Pour la rénovation d'une maison en pierre à Filot ou à Comblain-la-Tour : 70 litres par jour pour un nouveau plafonnage et une chape, dans des volumes jusqu'à environ 400 m³." },
    ],
    levering: {
      kop: "Livraison à Hamoir : par la vallée de l'Ourthe",
      alinea:
        "Nous rejoignons Hamoir **par Liège et la vallée de l'Ourthe**, en environ une heure trois quarts depuis Aartselaar. Vous choisissez une date de livraison lors de la réservation, et nous livrons sur rendez-vous. En cas de dégâts des eaux, **précisez la hauteur atteinte par l'eau** et les pièces touchées. Le technicien apporte ainsi les bons appareils en un seul trajet.",
    },
    afhalen: {
      kop: "Venir chercher depuis Hamoir : environ trois heures et demie aller-retour",
      alinea:
        "Avec environ une heure trois quarts par trajet, un aller-retour jusqu'à Aartselaar vous prend **environ trois heures et demie**. Après des dégâts des eaux, vous préférerez consacrer ce temps au nettoyage. **Laissez-nous livrer** : le technicien installe les appareils, mesure au démarrage et les reprend dès que la mesure est bonne.",
    },
    buren: ["comblain-au-pont", "ferrieres", "durbuy", "ouffet"],
    faq: [
      {
        q: "L'Ourthe est entrée dans mon rez-de-chaussée. Combien de temps faut-il sécher avant de recarreler ?",
        a: "Cela dépend de la durée pendant laquelle l'eau est restée et de la profondeur à laquelle elle a pénétré dans les murs. Avec de vieux murs en pierre, on parle de semaines, pas de jours. Ne carrelez ou ne plafonnez que lorsque la mesure le permet. Le technicien mesure au démarrage et à la reprise, pour que vous ayez un chiffre à donner à l'entrepreneur.",
      },
      {
        q: "L'humidité de ma maison adossée au versant vient-elle de la colline ou des travaux ?",
        a: "On ne le voit pas toujours, mais on peut le mesurer. L'humidité de construction diminue tant que le déshumidificateur tourne, alors que l'eau venant du versant revient après chaque averse. Deux mesures, à l'installation et à la reprise, montrent cette différence. Le technicien vous dit honnêtement si un déshumidificateur règle le problème ou s'il faut intervenir à l'extérieur.",
      },
      {
        q: "Livrez-vous aussi à Comblain-la-Tour et à Filot ?",
        a: "Oui, ce sont des sections de Hamoir et nous y livrons comme dans le reste de la commune. Filot se trouve plus haut sur le plateau, Comblain-la-Tour dans la vallée. Indiquez l'adresse complète lors de la réservation : le technicien planifie alors le trajet et sait s'il peut aller jusqu'à la porte.",
      },
      {
        q: "Un déshumidificateur peut-il tourner sans surveillance dans une maison de vacances près de l'Ourthe ?",
        a: "Oui. Le technicien raccorde systématiquement un tuyau d'évacuation des condensats, pour que personne ne doive vider de réservoir, et l'hygrostat intégré réduit la puissance dès que l'air est assez sec. Indiquez lors de la réservation que personne n'est sur place : il cherchera une évacuation où le tuyau peut être placé en toute sécurité.",
      },
    ],
    realisaties: [],
  },

  hoei: {
    slug: "hoei",
    title: "Location de déshumidificateur à Huy et Tihange | Vernast",
    description:
      "Déshumidificateur de chantier à Huy, Tihange ou Ben-Ahin ? Vernast livre, installe et reprend, pour rénover maisons de ville et caves au bord de la Meuse.",
    h1: "Location de déshumidificateur à Huy",
    kicker: "Province de Liège · la ville du fort sur la Meuse",
    rit: { afstand: "environ 120 km", tijd: "un peu plus d'une heure" },
    intro: [
      "**Huy**, Hoei en néerlandais, se trouve au bord de la Meuse, là où le Hoyoux se jette dans le fleuve. Le fort domine la ville du haut de son rocher, et la collégiale Notre-Dame se dresse dans le centre. Depuis notre entrepôt d'Aartselaar, nous y sommes en un peu plus d'une heure.",
      "La ville comprend aussi **Tihange**, connu pour sa centrale nucléaire, et Ben-Ahin. Vous y trouvez d'étroites maisons de ville dans le vieux centre, des quartiers d'après-guerre et des villas sur les versants au-dessus de la vallée.",
    ],
    bouw: {
      kop: "Des maisons de ville entre fleuve et rocher",
      alineas: [
        "Le vieux centre compte **des maisons profondes et étroites en pierre naturelle et en brique**, souvent avec une cave proche du niveau du fleuve. Une rénovation y apporte beaucoup d'humidité : un nouveau plafonnage, une chape à l'étage, parfois une cuisine dans l'ancienne cave. Une cave froide sèche lentement. Le technicien commence donc par une mesure d'humidité, pour que vous sachiez si l'humidité vient des travaux ou de l'extérieur.",
        "Dans l'étroite vallée du Hoyoux, les maisons sont serrées contre l'eau et le versant. Après une période humide, l'humidité pénètre dans la façade arrière. **Pour une telle rénovation, prévoyez large** : un mur épais en pierre libère son eau en quelques semaines, pas en quelques jours.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison de ville rénovée étage par étage.** Il retire jusqu'à 70 litres d'humidité par jour de l'air, dans des volumes jusqu'à 400 m³." },
      { key: "revolution", waarom: "**Pour une cave fraîche près de la Meuse.** Un déshumidificateur à adsorption continue d'absorber l'humidité à basse température, là où un appareil à condensation perd de son rendement." },
      { key: "ttv4500", waarom: "Placez-le devant **une façade arrière humide**. Il chasse la couche d'air humide, pour que le déshumidificateur continue d'extraire l'humidité du mur." },
      { key: "ttk170", waarom: "Pour un appartement à Tihange ou un logement à l'étage dans le centre. Cet appareil compact se porte facilement dans un escalier étroit." },
    ],
    levering: {
      kop: "Livraison à Huy : par l'E40 jusque dans la vallée de la Meuse",
      alinea:
        "Nous rejoignons Huy **par l'E40**, en un peu plus d'une heure. Vous choisissez une date de livraison lors de la réservation ; en Wallonie, nous livrons sur rendez-vous. Dans le centre, les rues sont étroites et en pente. Indiquez-nous **où la camionnette peut s'arrêter un instant**, et le technicien apportera un diable. Il installe les appareils et note les valeurs d'humidité.",
    },
    afhalen: {
      kop: "Venir chercher à Aartselaar : un peu plus d'une heure par trajet",
      alinea:
        "Notre point d'enlèvement se trouve à un peu plus d'une heure de route de Huy, et vous faites ce trajet deux fois : pour venir chercher l'appareil et pour le ramener. **La livraison est comprise dans le prix d'un pack de séchage**, et le technicien reprend aussi les appareils ensuite.",
    },
    buren: ["amay", "wanze", "villers-le-bouillet", "marchin"],
    faq: [
      {
        q: "Ma cave à Huy est toute proche de la Meuse. Un déshumidificateur peut-il l'assécher ?",
        a: "Un déshumidificateur élimine l'humidité de construction et celle qui suit une fuite. Si, lors des hautes eaux, l'eau souterraine traverse le mur, le séchage n'aide que temporairement. Le technicien mesure lors de l'installation de quel cas il s'agit et vous dit ce qu'un appareil peut y faire.",
      },
      {
        q: "Le technicien peut-il accéder à une maison sur le versant qui monte vers le fort ?",
        a: "En général oui, même si la camionnette ne peut pas toujours aller jusqu'à la porte. Signalez lors de la réservation à quel point votre rue est raide et étroite. Le technicien prend alors un diable et porte les appareils à pied sur le dernier tronçon.",
      },
      {
        q: "Livrez-vous aussi à Tihange et à Ben-Ahin ?",
        a: "Oui, ces deux sections font partie de Huy. Indiquez lors de la réservation l'adresse complète, avec le code postal et la section, pour que le technicien se rende directement dans la bonne rue.",
      },
      {
        q: "Pourquoi le séchage d'une vieille maison en pierre à Huy prend-il plus de temps ?",
        a: "Un mur en pierre naturelle maçonné au mortier de chaux retient beaucoup d'eau et la libère lentement, surtout du côté froid de la maison. Avec un déshumidificateur par étage et un ventilateur contre la paroi la plus humide, cela va plus vite. Comptez malgré tout plutôt quelques semaines que quelques jours.",
      },
      {
        q: "Pouvez-vous m'aider à choisir les bons appareils ?",
        a: "Oui. Écrivez-nous ou appelez-nous sans hésiter. Nous examinons volontiers avec vous les appareils dont votre chantier a besoin.",
      },
    ],
    realisaties: [],
  },

  heron: {
    slug: "heron",
    title: "Louer un déshumidificateur à Héron et Couthuin | Vernast",
    description:
      "Déshumidificateur à Héron, Couthuin, Lavoir ou Waret-l'Évêque ? Vernast livre et installe pour fermes transformées, maisons de village et caves fraîches.",
    h1: "Location de déshumidificateur à Héron",
    kicker: "Province de Liège · des champs au-dessus de la Meuse, entre Hannut et Andenne",
    rit: { afstand: "environ 110 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Héron se situe entre la Hesbaye et la vallée de la Meuse, à la limite de la province de Namur. La commune comprend **Couthuin, Lavoir et Waret-l'Évêque**, des villages agricoles avec de grandes fermes et des vergers. Depuis Aartselaar, nous y sommes en un peu plus d'une heure.",
      "Héron n'a pas de centre urbain. Qui transforme ici travaille le plus souvent sur **une ancienne ferme, une maison de village en brique ou une habitation récente** en bordure d'un village, parfois assez loin de la route asphaltée.",
    ],
    bouw: {
      kop: "Fermes, maisons de village et une bonne distance jusqu'à la route",
      alineas: [
        "Autour des villages se trouvent **de grandes fermes avec cour intérieure**. Leurs étables et leurs granges deviennent de plus en plus souvent des logements. Une telle transformation apporte beaucoup de chape et de plafonnage neufs dans un grand volume, entre des murs déjà froids par nature. Le dispositif habituel est **un appareil par aile**, avec les portes entre les zones fermées.",
        "Dans les villages se trouvent **des maisons plus anciennes avec une cave**. L'humidité n'y vient pas toujours des travaux : elle entre parfois aussi de l'extérieur par le mur de la cave. Le technicien commence donc par une mesure d'humidité. L'eau qui pénètre de l'extérieur, un appareil ne la règle pas à lui seul.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour l'étable d'une ferme en carré transformée en logement.** Avec 110 litres par jour, il sèche des volumes jusqu'à 600 m³." },
      { key: "ttk350", waarom: "Pour une maison de village à Couthuin ou à Lavoir avec un nouveau sol et un plafonnage frais. Il retire 70 litres par jour de l'air et consomme 1,1 kW." },
      { key: "revolution", waarom: "**Pour la cave froide sous une maison de village.** Un déshumidificateur à adsorption continue d'absorber l'humidité à des températures où un appareil à condensation ne fonctionne presque plus." },
      { key: "teddh30", waarom: "Dans une ferme non chauffée, ce chauffage de chantier met d'abord la pièce à température en hiver, pour que le déshumidificateur atteigne sa pleine capacité." },
    ],
    levering: {
      kop: "Livraison à Héron : par Hannut ou par Andenne",
      alinea:
        "Nous rejoignons Héron **par l'E40**, en un peu plus d'une heure. Lors de la réservation, vous choisissez une date de livraison et, comme Héron se trouve en Wallonie, nous convenons avec vous du moment de la livraison. La ferme se trouve sur un chemin de campagne ou derrière un portail ? **Décrivez l'accès**, pour que le technicien sache jusqu'où il peut s'approcher du chantier.",
    },
    afhalen: {
      kop: "Venir chercher vous-même ? Comptez deux trajets d'un peu plus d'une heure",
      alinea:
        "Aartselaar se trouve à un peu plus d'une heure de route de Héron. Pour un seul appareil, faire deux fois l'aller-retour est rarement rentable : une fois pour venir le chercher, une fois pour le ramener. **Faites-vous livrer** : le technicien installe, mesure et reprend ensuite tout le matériel.",
    },
    buren: ["wanze", "burdinne", "andenne"],
    faq: [
      {
        q: "Je transforme l'étable de ma ferme à Héron en logement. Comment organiser le séchage ?",
        a: "Divisez l'étable en zones : un déshumidificateur par pièce ou par aile, avec les portes fermées entre elles. En hiver, il faut ajouter un chauffage de chantier, car une étable froide freine tout appareil à condensation. Le technicien compose le dispositif lors de l'installation et mesure l'humidité au démarrage.",
      },
      {
        q: "Venez-vous aussi jusqu'à une ferme située sur un chemin de campagne ?",
        a: "Dans la plupart des cas, oui. Décrivez lors de la réservation l'état du chemin et s'il y a un portail ou un passage étroit. Si nécessaire, le technicien amène les appareils à l'intérieur sur le dernier tronçon avec un diable.",
      },
      {
        q: "Pourquoi un déshumidificateur à adsorption dans ma cave plutôt qu'un appareil classique ?",
        a: "Un déshumidificateur à condensation fonctionne avec un serpentin froid et perd de son rendement sous environ 15 °C. Une cave qui reste fraîche toute l'année atteint rarement cette température. Un déshumidificateur à adsorption fonctionne selon un autre principe et continue d'extraire l'humidité de l'air, même dans le froid.",
      },
      {
        q: "Combien de temps laisser un déshumidificateur dans une maison de village rénovée ?",
        a: "Jusqu'à ce que la mesure indique que c'est bon. Un plafonnage mince sèche souvent en quelques semaines dans une pièce chauffée ; une chape épaisse ou un vieux mur demande plus de temps. À la reprise, le technicien mesure à nouveau, pour que vous ayez la valeur noir sur blanc.",
      },
    ],
    realisaties: [],
  },

  marchin: {
    slug: "marchin",
    title: "Déshumidificateur de chantier à Marchin, vallée du Hoyoux",
    description:
      "Un déshumidificateur à Marchin ? Vernast livre et installe pour les maisons en pierre de la vallée du Hoyoux et sur les versants au sud de Huy.",
    h1: "Location de déshumidificateur à Marchin",
    kicker: "Province de Liège · la vallée du Hoyoux et la lisière du Condroz",
    rit: { afstand: "environ 130 km", tijd: "environ une heure et demie" },
    intro: [
      "Marchin se trouve juste au sud de Huy, dans la vallée boisée **du Hoyoux**. Au-dessus de la vallée commence **le Condroz**, un paysage vallonné de crêtes et de vallées. Depuis Aartselaar, nous y arrivons en environ une heure et demie.",
      "Dans la vallée se trouvent des maisons en pierre, surtout des maisons de village à Grand-Marchin et à Vyle-et-Tharoul. Sur les versants, on trouve des habitations plus récentes, souvent avec **une longue allée**.",
    ],
    bouw: {
      kop: "La pierre naturelle dans la vallée, le neuf sur les versants",
      alineas: [
        "Dans la vallée, beaucoup de maisons sont construites en **pierre naturelle de la région**, avec des murs épais et peu d'isolation. La vallée est étroite et le soleil y arrive tard. Qui rénove une telle maison sèche des murs froids qui libèrent lentement leur humidité. En hiver, il faut **un chauffage de chantier à côté du déshumidificateur**.",
        "Sur les versants, des habitations sont en partie construites dans le sol, avec un rez-de-chaussée ou une cave adossé à la pente. Pour une nouvelle chape ou un carrelage, tout est une question de timing. Le technicien mesure à la reprise, pour que **le poseur de sol sache où il en est**.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison en pierre de la vallée en cours de rénovation.** Avec 70 litres par jour et une portée jusqu'à 400 m³, il sèche un rez-de-chaussée et un étage." },
      { key: "teddh30", waarom: "**Pour une habitation dans la vallée, où les murs restent froids.** Ce chauffage de chantier de 30 kW sur courant triphasé met la pièce à température, pour que le déshumidificateur puisse faire son travail." },
      { key: "revolution", waarom: "Pour une cave ou un rez-de-chaussée **adossé à la pente**. Un déshumidificateur à adsorption continue d'absorber l'humidité même dans une pièce fraîche, et il évacue l'air humide par des gaines." },
      { key: "ttv4500", waarom: "Dirigé vers un **mur épais en pierre naturelle**, il chasse la couche d'air humide, pour que le déshumidificateur continue d'extraire l'humidité de la maçonnerie." },
    ],
    levering: {
      kop: "Livraison à Marchin : par Huy jusque dans la vallée du Hoyoux",
      alinea:
        "Nous rejoignons Marchin **par l'E40 et Huy**, en environ une heure et demie. Vous choisissez une date de livraison lors de la réservation ; en Wallonie, nous fixons un rendez-vous pour le moment de la livraison. Votre maison se trouve au bout d'une **allée longue ou raide** ? Signalez à l'avance si une camionnette peut aller jusqu'à la porte. Si nécessaire, le technicien apporte un diable.",
    },
    afhalen: {
      kop: "Venir chercher depuis Marchin vous coûte presque une demi-journée",
      alinea:
        "Aartselaar se trouve à environ une heure et demie de route de Marchin. Aller-retour, vous passez **trois heures en voiture** pour un seul appareil, et autant pour le ramener. La livraison est comprise dans le prix du pack de séchage et vous épargne ces trajets.",
    },
    buren: ["hoei", "modave"],
    faq: [
      {
        q: "Pourquoi les murs de ma maison dans la vallée du Hoyoux sèchent-ils si lentement ?",
        a: "Ils sont épais, construits en pierre naturelle et se trouvent dans une vallée étroite où le soleil arrive tard. Des murs froids libèrent lentement leur humidité, et l'air à leur contact se sature vite. Un déshumidificateur, un chauffage de chantier et un ventilateur dans la même pièce accélèrent nettement le processus.",
      },
      {
        q: "La camionnette peut-elle aller jusqu'à ma maison sur le versant ?",
        a: "Souvent oui, mais une allée longue, raide ou non revêtue peut poser problème. Signalez-le lors de la réservation. Le technicien se gare alors là où la camionnette est en sécurité et amène les appareils à l'intérieur avec un diable.",
      },
      {
        q: "Mon rez-de-chaussée est à moitié construit dans la pente. Est-ce de l'humidité de construction ?",
        a: "C'est possible, mais il peut aussi s'agir d'humidité venant du sol, qui traverse le mur du côté de la pente. Lors de l'installation, le technicien mesure les murs des deux côtés. Un déshumidificateur élimine l'humidité de construction ; si l'humidité vient de l'extérieur, il vous le dira.",
      },
      {
        q: "Combien de temps dure le trajet d'Aartselaar à Marchin ?",
        a: "Comptez environ une heure et demie par l'E40 et Huy, davantage en cas d'embouteillages autour de Bruxelles ou de Liège. C'est pourquoi nous convenons d'un rendez-vous avec vous pour la livraison à Marchin, pour que vous ne deviez pas attendre toute la journée sur le chantier.",
      },
    ],
    realisaties: [],
  },

  modave: {
    slug: "modave",
    title: "Louer un déshumidificateur à Modave, en Condroz | Vernast",
    description:
      "Déshumidificateur à louer à Modave, Strée, Vierset-Barse ou Outrelouxhe : fermes en pierre et maisons de village de la vallée du Hoyoux. Livré, posé et mesuré.",
    h1: "Location de déshumidificateur à Modave",
    kicker: "Province de Liège · la vallée du Hoyoux en Condroz",
    rit: { afstand: "environ 145 km", tijd: "un peu plus d'une heure et demie" },
    intro: [
      "Modave se trouve **en Condroz, au sud de Huy**. La commune est surtout connue pour **le château de Modave**, perché sur une falaise au-dessus de **la vallée du Hoyoux**. **Strée, Vierset-Barse et Outrelouxhe** en font aussi partie : des villages avec des fermes, des églises et des maisons en pierre grise.",
      "Le Hoyoux a creusé ici **une vallée profonde dans le calcaire**, et la vallée abrite des captages d'eau. Sur les crêtes alentour, le paysage est ouvert et agricole. Qui transforme à Modave travaille le plus souvent sur **une vieille maison en pierre**, dans la vallée ou sur les hauteurs. Depuis Aartselaar, nous y sommes en un peu plus d'une heure et demie.",
    ],
    bouw: {
      kop: "Des fermes en calcaire et des maisons dans la vallée du Hoyoux",
      alineas: [
        "**Une ferme condrusienne** a **d'épais murs en calcaire et en grès**, maçonnés au mortier de chaux et sans barrière contre l'humidité. Si vous transformez une telle ferme ou une étable en logement, un nouveau plafonnage, une chape et parfois un chauffage par le sol viennent s'ajouter sur un support qui contient déjà lui-même de l'humidité. Ces murs libèrent leur eau lentement. Un déshumidificateur reste donc ici plus longtemps en place que dans une construction neuve.",
        "**Dans la vallée du Hoyoux**, le terrain est bas et frais. Les caves et les rez-de-chaussée des maisons anciennes le long du ruisseau se réchauffent à peine pendant un hiver humide. **Sous 15 °C, un déshumidificateur à condensation perd de son rendement.** Le technicien mesure donc d'abord la température et ajoute un chauffage si nécessaire. Sur les hauteurs, à Strée ou à Outrelouxhe, il s'agit plus souvent de la rénovation d'une maison de village ou d'une extension accolée à une vieille maison en pierre.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une ferme transformée avec un nouveau plafonnage et une chape** : 70 litres par jour et une portée jusqu'à environ 400 m³, assez pour tout un rez-de-chaussée." },
      { key: "teddh30", waarom: "Met d'abord à température une maison froide dans la vallée du Hoyoux, pour que le déshumidificateur à côté puisse absorber l'humidité. Ce chauffage demande un raccordement en 400 V." },
      { key: "revolution", waarom: "**Pour une cave dans le calcaire qui ne dépasse jamais dix degrés** : ce déshumidificateur à adsorption continue de fonctionner dans le froid." },
      { key: "ttv4500", waarom: "L'air humide stagne le long d'un épais mur en pierre naturelle. Ce ventilateur le met en mouvement, pour que le déshumidificateur ait prise." },
    ],
    levering: {
      kop: "Livraison à Modave : par Huy jusqu'en Condroz",
      alinea:
        "Depuis Aartselaar, nous rejoignons la vallée du Hoyoux **par Huy**, un trajet d'un peu plus d'une heure et demie. Vous choisissez une date de livraison lors de la réservation ; en Wallonie, nous livrons **sur rendez-vous**. La ferme se trouve sur un chemin de campagne étroit ou dans une cour pavée ? Signalez-le à l'avance. Le technicien prend un diable, place les appareils pièce par pièce et effectue une mesure d'humidité au démarrage.",
    },
    afhalen: {
      kop: "Venir chercher à Aartselaar depuis Modave : rarement rentable",
      alinea:
        "Un trajet simple dure un peu plus d'une heure et demie, l'aller-retour vous prend donc **plus de trois heures**. Un déshumidificateur doit en outre voyager debout dans le véhicule, et pour une ferme il vous faut généralement plus d'un appareil. **La livraison est ici le choix logique** : livraison, installation et reprise font partie du pack de séchage.",
    },
    buren: ["marchin", "clavier", "havelange"],
    faq: [
      {
        q: "Combien de temps sèche une ferme transformée en pierre du Condroz ?",
        a: "Plus longtemps qu'une construction neuve. Un mur épais en calcaire ou en grès sans barrière contre l'humidité libère son eau lentement, et un nouveau plafonnage ou une chape ne sèche qu'aussi vite que le support le permet. Comptez plutôt en semaines qu'en jours. Le technicien mesure au démarrage et à la reprise, pour que vous voyiez l'évolution.",
      },
      {
        q: "Ma maison dans la vallée du Hoyoux reste froide. Un déshumidificateur y fonctionne-t-il ?",
        a: "Oui, mais un déshumidificateur à condensation a besoin de chaleur. Si la pièce ne dépasse pas 15 °C, nous ajoutons un chauffage électrique ou nous choisissons un déshumidificateur à adsorption, qui absorbe l'humidité même dans une cave froide. Indiquez lors de la réservation qu'il s'agit d'une pièce non chauffée.",
      },
      {
        q: "Un déshumidificateur peut-il régler définitivement l'humidité de ma cave à Modave ?",
        a: "Pas si l'humidité continue d'arriver de l'extérieur. Un déshumidificateur élimine l'humidité de construction et l'eau après une fuite ou une inondation. Si de l'eau souterraine traverse le mur de la cave, l'humidité revient dès que l'appareil est parti. Le technicien mesure lors de l'installation et vous dit honnêtement ce qu'un déshumidificateur peut faire ici.",
      },
      {
        q: "Intervenez-vous aussi à Strée, Vierset-Barse et Outrelouxhe ?",
        a: "Oui, ce sont des sections de Modave et nous y livrons de la même manière. Nous combinons le trajet vers le Condroz avec d'autres adresses de la région. Vous choisissez une date de livraison lors de la réservation, et nous convenons avec vous de l'heure de livraison.",
      },
    ],
    realisaties: [],
  },

  nandrin: {
    slug: "nandrin",
    title: "Location de déshumidificateur à Nandrin, Condroz | Vernast",
    description:
      "Déshumidificateur à Nandrin, Saint-Séverin, Villers-le-Temple ou Yernée-Fraineux : rénovation de villas et de maisons en pierre en Condroz. Humidité mesurée.",
    h1: "Location de déshumidificateur à Nandrin",
    kicker: "Province de Liège · le Condroz aux portes de Liège",
    rit: { afstand: "environ 140 km", tijd: "environ une heure et demie" },
    intro: [
      "Nandrin se trouve **à la lisière nord du Condroz**, au sud-ouest de Liège. La commune comprend **Saint-Séverin, Villers-le-Temple et Yernée-Fraineux**. Saint-Séverin possède **une église romane**, et Villers-le-Temple doit son nom à **une commanderie des Templiers**.",
      "Liège étant toute proche, **des villas et des maisons quatre façades** sont apparues autour des anciens noyaux villageois, sur de vastes parcelles verdoyantes. Beaucoup de ces maisons sont aujourd'hui **rénovées et agrandies**. Depuis Aartselaar, nous rejoignons Nandrin en environ une heure et demie.",
    ],
    bouw: {
      kop: "Des villas des années septante et quatre-vingt, et de vieux noyaux en pierre",
      alineas: [
        "**Une villa des années septante ou quatre-vingt** reçoit souvent, lors d'une rénovation, une nouvelle isolation, un nouveau sol avec chauffage par le sol et une extension côté jardin. Ensuite, il y a **beaucoup d'eau dans la chape et le plafonnage**, et dans une maison bien isolée elle ne disparaît pas d'elle-même. Avec un déshumidificateur par niveau, le planning des finitions reste réaliste.",
        "**Dans les vieux noyaux de Saint-Séverin et de Villers-le-Temple** se trouvent des maisons et des fermes en pierre naturelle, avec des murs sans barrière contre l'humidité. Si vous rénovez une telle maison, vous séchez un mur qui retient déjà lui-même de l'humidité. Le technicien mesure donc **quelle part est de l'humidité de construction** et quelle part vient du mur lui-même. Vous savez ainsi ce qu'un déshumidificateur peut résoudre.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour la rénovation d'une villa avec nouvelle chape et chauffage par le sol** : 70 litres par jour et une portée jusqu'à environ 400 m³." },
      { key: "ttk650", waarom: "Pour une grande villa avec un séjour ouvert ou une extension : 110 litres par jour, avec une portée jusqu'à environ 600 m³." },
      { key: "radiaal2250", waarom: "Souffle de manière ciblée sur la nouvelle chape après le coulage, **pour que le sol sèche uniformément** avant l'arrivée du poseur de sol." },
      { key: "ttk170", waarom: "Pour une seule pièce d'une maison en pierre à Saint-Séverin ou à Villers-le-Temple : un déshumidificateur compact de 50 litres par jour, pour des volumes jusqu'à environ 250 m³." },
    ],
    levering: {
      kop: "Livraison à Nandrin : juste après Liège",
      alinea:
        "Nandrin se trouve **juste au sud de Liège**, à environ une heure et demie de route d'Aartselaar par l'E313. Vous choisissez une date de livraison lors de la réservation, et nous convenons avec vous du moment de la livraison. Le technicien installe les appareils, les règle et **mesure l'humidité au démarrage**. Ce chiffre est votre point de comparaison.",
    },
    afhalen: {
      kop: "Venir chercher à Aartselaar : un trajet de trois heures",
      alinea:
        "Un trajet simple dure environ une heure et demie, l'aller-retour vous prend donc **environ trois heures**, si vous évitez les heures de pointe autour de Liège et d'Anvers. Pour un seul appareil, c'est envisageable si vous allez de toute façon dans cette direction. Pour une villa avec plusieurs appareils, **la livraison est plus simple**.",
    },
    buren: ["neupre", "tinlot", "anthisnes", "engis"],
    faq: [
      {
        q: "Combien de déshumidificateurs faut-il pour une villa avec chauffage par le sol ?",
        a: "En général un déshumidificateur par niveau, avec un ventilateur au-dessus de la nouvelle chape. Pour un séjour ouvert ou une grande extension, choisissez plutôt un déshumidificateur de 110 litres par jour. Saisissez le volume, le matériau et l'épaisseur de la couche dans le calculateur, et vous verrez à l'avance le prix du pack.",
      },
      {
        q: "Puis-je allumer le chauffage par le sol pendant que le déshumidificateur tourne ?",
        a: "Seulement quand la chape est assez âgée et que le protocole de mise en chauffe de l'installateur le permet. Chauffer trop tôt et trop fort peut faire fissurer la chape. D'ici là, un déshumidificateur et un ventilateur retirent déjà une première partie de l'humidité du sol. Suivez le schéma de votre installateur et faites mesurer par le technicien.",
      },
      {
        q: "Venez-vous aussi à Saint-Séverin, Villers-le-Temple et Yernée-Fraineux ?",
        a: "Oui, ce sont des sections de Nandrin et nous y livrons comme dans le reste de la commune, y compris dans les hameaux du plateau. Indiquez lors de la réservation l'adresse complète et décrivez l'accès au chantier : le technicien planifie son trajet en conséquence.",
      },
      {
        q: "Combien de temps un déshumidificateur reste-t-il en place après la rénovation d'une villa ?",
        a: "C'est la mesure qui le détermine, pas le calendrier. Un plafonnage dans une maison chauffée sèche plus vite qu'une chape épaisse, et l'épaisseur de la couche joue fortement. Le technicien mesure à l'installation et à la reprise. Si le matériau est encore trop humide, nous discutons d'une prolongation pour les appareils.",
      },
    ],
    realisaties: [],
  },

  ouffet: {
    slug: "ouffet",
    title: "Déshumidificateur à Ouffet, entre Ourthe et Hoyoux | Vernast",
    description:
      "Louer un déshumidificateur à Ouffet, Warzée ou Ellemelle : fermes en pierre, maisons de village et résidences secondaires du Condroz. Posé et repris.",
    h1: "Location de déshumidificateur à Ouffet",
    kicker: "Province de Liège · le Condroz entre Ourthe et Hoyoux",
    rit: { afstand: "environ 150 km", tijd: "un peu plus d'une heure et demie" },
    intro: [
      "Ouffet se trouve **sur le plateau condrusien, entre la vallée de l'Ourthe et le Hoyoux**, au sud de Liège. La commune se compose d'**Ouffet, Warzée et Ellemelle** : des villages paisibles avec **des fermes en pierre naturelle** et des hameaux dispersés dans un paysage verdoyant.",
      "Beaucoup d'acheteurs cherchent ici **une vieille maison à retaper**, et certaines maisons sont **des résidences secondaires** inoccupées une partie de l'année. Après un hiver fermée et non chauffée, une telle maison sent souvent le renfermé et des **taches d'humidité apparaissent au bas des murs**. Depuis Aartselaar, nous rejoignons Ouffet en un peu plus d'une heure et demie.",
    ],
    bouw: {
      kop: "Une maison restée vide tout l'hiver, et une ferme en rénovation",
      alineas: [
        "**Une résidence secondaire** est souvent chauffée au minimum en hiver, voire pas du tout. Sur la face intérieure froide des épais murs en pierre, **l'humidité se condense**, et les textiles, les armoires et les plafonds l'absorbent. Avec un déshumidificateur et un chauffage, vous remettez une telle maison en état au printemps, avant que les moisissures ne s'installent.",
        "**La rénovation d'une ferme en pierre à Warzée ou à Ellemelle** demande une autre approche. On démolit, on replafonne, et souvent un nouveau sol avec chauffage par le sol est posé. Toute cette eau doit ressortir de la maison avant que le poseur de sol ou le peintre puisse commencer. **Le technicien mesure au démarrage**, pour que vous sachiez où vous en êtes.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**Pour une résidence secondaire qui sent le renfermé après l'hiver** : un déshumidificateur compact de 50 litres par jour pour des volumes jusqu'à environ 250 m³." },
      { key: "teddh20", waarom: "Met d'abord à température une maison restée des mois sans chauffage. **Sans chaleur, un déshumidificateur à condensation absorbe peu d'humidité.** Ce chauffage demande un raccordement en 400 V." },
      { key: "ttk350", waarom: "Pour la transformation d'une ferme : 70 litres par jour pour un rez-de-chaussée avec nouveau plafonnage, chape et chauffage par le sol." },
      { key: "ttv4500", waarom: "Dans une maison en pierre avec beaucoup de petites pièces, ce ventilateur amène l'air sec jusque dans les coins où l'humidité stagne." },
    ],
    levering: {
      kop: "Livraison à Ouffet : même si vous n'y habitez pas",
      alinea:
        "Depuis Aartselaar, nous rejoignons le plateau par Liège **en un peu plus d'une heure et demie**. Vous choisissez une date de livraison lors de la réservation, et nous fixons l'heure sur rendez-vous. S'il s'agit d'une résidence secondaire où vous n'êtes pas toujours, **faites-nous savoir qui ouvre la porte**. Le technicien place les appareils, les règle et les laisse tourner jusqu'à la reprise.",
    },
    afhalen: {
      kop: "Venir chercher à Aartselaar : surtout si vous venez de Flandre",
      alinea:
        "Vous habitez en Flandre et vous partez de toute façon vers votre résidence secondaire à Ouffet ? Vous pouvez alors **emporter un appareil à l'aller**. Notre point d'enlèvement se trouve **le long de l'A12 à Aartselaar**, à un peu plus d'une heure et demie d'Ouffet. Un déshumidificateur voyage debout. Pour une rénovation complète avec plusieurs appareils, la livraison est plus simple.",
    },
    buren: ["clavier", "tinlot", "anthisnes", "hamoir"],
    faq: [
      {
        q: "Ma résidence secondaire à Ouffet sent le renfermé après l'hiver. Un déshumidificateur aide-t-il ?",
        a: "Oui, s'il s'agit d'humidité de condensation dans une maison restée longtemps froide. Allumez le chauffage ou un chauffage d'appoint et faites tourner un déshumidificateur pendant une semaine ou deux, fenêtres fermées. Si les taches au bas du mur reviennent ensuite, il s'agit de remontées capillaires, et un déshumidificateur ne les règle pas durablement.",
      },
      {
        q: "Dois-je être sur place lors de la livraison du déshumidificateur ?",
        a: "Quelqu'un doit ouvrir la porte et montrer au technicien les pièces à sécher. Ce peut être un voisin, un entrepreneur ou un membre de la famille. Indiquez qui lors de la réservation, et nous convenons de l'heure de livraison avec cette personne. Pour la reprise, cela fonctionne de la même manière.",
      },
      {
        q: "Une vieille installation électrique à la campagne supporte-t-elle les appareils ?",
        a: "Un déshumidificateur de 50 ou 70 litres par jour fonctionne sur une prise de 230 V. Un chauffage de chantier électrique demande un raccordement en 400 V, qui n'est pas toujours présent dans une vieille maison rurale. Répartissez aussi les appareils sur différents circuits électriques. Le technicien examine l'installation lors de la pose.",
      },
      {
        q: "À quelle distance Ouffet se trouve-t-il de votre entrepôt ?",
        a: "Environ cent cinquante kilomètres, soit un trajet d'un peu plus d'une heure et demie par Liège. La livraison, l'installation et la reprise font partie du pack de séchage. Nous combinons les livraisons dans le Condroz avec d'autres adresses de la région, pour que le technicien ne fasse pas l'aller-retour pour un seul appareil.",
      },
    ],
    realisaties: [],
  },

  pepinster: {
    slug: "pepinster",
    title: "Déshumidificateur de chantier à Pepinster | Vernast",
    description:
      "Déshumidificateur à louer à Pepinster, Soiron, Wegnez ou Cornesse : maisons au confluent de la Vesdre et de la Hoëgne, villages en hauteur. Mesure sur place.",
    h1: "Location de déshumidificateur à Pepinster",
    kicker: "Liège · là où la Hoëgne se jette dans la Vesdre",
    rit: { afstand: "environ 145 km", tijd: "plus d'une heure et demie" },
    intro: [
      "Pepinster se trouve là où **la Hoëgne se jette dans la Vesdre**, dans une vallée étroite entre Verviers et Liège. Le centre s'est développé autour du chemin de fer, de la rivière et des usines, avec des rangées de maisons tout près de l'eau. Les inondations de juillet 2021 ont durement touché le centre, et dans beaucoup de rues, les travaux de remise en état se poursuivent encore.",
      "Plus haut se trouvent les sections de **Wegnez, Cornesse et Soiron**. Soiron est un vieux village en pierre naturelle autour d'un château, Wegnez et Cornesse sont plus aérés. D'Aartselaar à Pepinster, nous roulons plus d'une heure et demie.",
    ],
    bouw: {
      kop: "Remise en état dans la vallée, rénovation sur les versants",
      alineas: [
        "**Dans le centre de Pepinster**, il s'agit souvent de maisons mises à nu jusqu'au gros œuvre après les inondations : plafonnage enlevé, sols retirés. Un tel mur doit être sec jusqu'au cœur avant de refaire la finition, sinon l'humidité ressort à travers le nouveau plafonnage. C'est pourquoi le technicien mesure au démarrage et à la reprise.",
        "**À Soiron et à Cornesse**, on rénove surtout de vieilles maisons en pierre et des fermes, avec des murs épais sans creux et des caves adossées à la pente. Là, l'humidité vient de la rénovation elle-même, et les murs massifs et froids la libèrent lentement.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une maison mise à nu dans le centre** : 110 litres par jour pour sécher des murs et des sols mouillés jusqu'au cœur." },
      { key: "radiaal2250", waarom: "**Orienté bas sur un sol mis à nu**, il chasse l'air humide des coins et des joints, là où l'eau reste le plus longtemps." },
      { key: "ttv4500", waarom: "Pour les murs épais en pierre de Soiron : il empêche que **l'air le long du mur reste saturé**." },
      { key: "teddh30", waarom: "**Dans une maison sans chauffage en état de marche**, ce chauffage de 30 kW met la pièce à température. Il demande une alimentation 400 V." },
    ],
    levering: {
      kop: "Livraison à Pepinster : par l'E40 jusque dans la vallée",
      alinea:
        "Nous roulons plus d'une heure et demie, **par l'E40**, puis nous descendons dans la vallée. Vous fixez la date de livraison lors de la réservation, l'heure est convenue ensemble. S'il y a encore des conteneurs ou des barrières de chantier dans votre rue, indiquez où le technicien peut s'arrêter. Il installe les appareils, mesure les murs et les sols et note les valeurs.",
    },
    afhalen: {
      kop: "L'enlèvement est possible, mais une remise en état demande plusieurs appareils",
      alinea:
        "Notre point d'enlèvement à Aartselaar se trouve à plus d'une heure et demie de route de Pepinster, soit **plus de trois heures aller-retour**. Pour une maison mise à nu, il faut généralement plusieurs appareils, et ils tiennent rarement ensemble dans une voiture. Avec la livraison, vous vous épargnez ce trajet et vous recevez une mesure en plus.",
    },
    buren: ["verviers", "theux", "olne", "trooz"],
    faq: [
      {
        q: "Comment savoir si les murs sont assez secs après l'inondation pour plafonner ?",
        a: "En mesurant, pas en touchant. Un mur peut sembler sec en surface alors que le cœur est encore mouillé. Le technicien mesure au démarrage et à la reprise, et vous pouvez transmettre ces valeurs au plafonneur.",
      },
      {
        q: "Pouvez-vous livrer des appareils dans une maison sans chauffage en état de marche ?",
        a: "Oui, et nous y ajoutons généralement un chauffage de chantier. Un déshumidificateur à condensation a besoin de chaleur pour bien fonctionner. Le technicien vérifie qu'il y a un raccordement 400 V adapté pour le chauffage et adapte le dispositif en conséquence.",
      },
      {
        q: "Allez-vous aussi à Soiron, Wegnez et Cornesse ?",
        a: "Oui, nous livrons dans toutes les sections de Pepinster, y compris dans les villages sur les versants. À Soiron, les ruelles sont étroites. Précisez lors de la réservation s'il est possible de charger devant la porte.",
      },
      {
        q: "Pourquoi une vieille maison en pierre à Soiron sèche-t-elle si lentement ?",
        a: "Les murs sont massifs et épais et n'ont pas de creux. L'humidité d'une rénovation y remonte lentement vers la surface et ne disparaît que si l'air à côté est sec. Un ventilateur à côté du déshumidificateur accélère nettement le processus.",
      },
    ],
    realisaties: [],
  },

  plombieres: {
    slug: "plombieres",
    title: "Location de déshumidificateur à Plombières | Vernast",
    description:
      "Déshumidificateur à Plombières : Gemmenich, Moresnet, Montzen, Hombourg et Sippenaeken. Rénovation, granges transformées, caves humides. Livré et mesuré.",
    h1: "Location de déshumidificateur à Plombières",
    kicker: "Liège · près des Trois Frontières de Vaals",
    rit: { afstand: "environ 145 km", tijd: "environ une heure et demie" },
    intro: [
      "Plombières, aussi appelée Blieberg, se trouve à l'angle nord-est de la province de Liège. Son nom rappelle **le plomb** qu'on y exploitait autrefois. Près de Gemmenich se trouve **le point des Trois Frontières** avec les Pays-Bas et l'Allemagne.",
      "La commune comprend **Gemmenich, Moresnet, Montzen, Hombourg, Sippenaeken et Plombières** même. À Moresnet, un grand viaduc ferroviaire enjambe la vallée de la Gueule. Depuis Aartselaar, nous y sommes en **environ une heure et demie**.",
    ],
    bouw: {
      kop: "Maisons de village dans la vallée de la Gueule et fermes sur les hauteurs",
      alineas: [
        "**Dans la vallée de la Gueule**, les maisons sont basses et proches de l'eau. Après une période humide, l'humidité pénètre dans les caves et les rez-de-chaussée. Quand une telle maison est rénovée, il y a **de l'humidité de construction dans les nouveaux travaux et parfois de l'humidité du sol dans les murs**. Lors de l'installation, le technicien mesure la part que le déshumidificateur peut éliminer.",
        "Sur les hauteurs autour de Gemmenich, Montzen et Hombourg se trouvent **des fermes et des maisons isolées**. Il s'agit souvent d'une rénovation ou d'**une grange transformée en habitation**, avec beaucoup de volume, des murs épais et un nouveau sol. Un déshumidificateur puissant, avec un ventilateur, permet alors de limiter le temps de séchage.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**Pour une cave humide dans la vallée de la Gueule** : ce déshumidificateur à adsorption continue de fonctionner dans le froid et sèche via des gaines." },
      { key: "ttk650", waarom: "Pour une grange transformée près de Montzen ou de Hombourg : 110 litres par jour, pour un grand volume jusqu'à environ 600 m³." },
      { key: "radiaal2250", waarom: "Sur la chape fraîche d'une ferme rénovée : le ventilateur radial (2 250 m³/h) maintient l'air en mouvement le long du sol et dans les coins." },
      { key: "ttk350", waarom: "Pour une maison de village à Gemmenich rénovée étage par étage : 70 litres par jour dans des pièces jusqu'à environ 400 m³." },
    ],
    levering: {
      kop: "Livraison à Plombières : par l'E313 et Liège",
      alinea:
        "Nous rejoignons Plombières **par l'E313 et Liège**, en environ une heure et demie. Vous choisissez la date de livraison lors de la réservation ; nous convenons ensemble de l'heure précise. Certaines routes de la vallée sont étroites et raides. Signalez à l'avance si la camionnette peut arriver jusqu'à la porte, le technicien prendra alors un diable.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : une demi-journée de route",
      alinea:
        "Depuis Plombières, vous roulez environ une heure et demie jusqu'à notre point d'enlèvement, soit **environ trois heures** aller-retour. Pour une transformation avec plusieurs appareils, tout tient en outre rarement dans une seule voiture. Avec la livraison, le technicien mesure aussi directement l'humidité.",
    },
    buren: ["kelmis", "welkenraedt", "aubel", "voeren"],
    faq: [
      {
        q: "Livrez-vous dans tous les villages de Plombières, y compris à Sippenaeken ?",
        a: "Oui. Gemmenich, Moresnet, Montzen, Hombourg, Sippenaeken et Plombières même se trouvent tous dans notre zone de livraison. Indiquez l'adresse complète et l'accès, car quelques routes de la vallée sont étroites et raides.",
      },
      {
        q: "Ma cave à Moresnet est mouillée après de fortes pluies. Un déshumidificateur peut-il aider ?",
        a: "Pour l'humidité qui reste dans les murs et le sol après une période humide, oui. Si l'eau entre à chaque fois, faites d'abord résoudre cette cause. Le technicien mesure au démarrage, pour que vous sachiez si le séchage aide durablement.",
      },
      {
        q: "Pouvez-vous m'aider à choisir le bon pack pour mes travaux ?",
        a: "Oui. Écrivez-nous ou appelez-nous sans hésiter, et nous cherchons ensemble le pack qui convient à vos travaux.",
      },
      {
        q: "De combien d'appareils ai-je besoin pour une grange transformée ?",
        a: "Cela dépend du volume, de l'épaisseur de la chape et de la température intérieure. Une grange haute et ouverte demande généralement un déshumidificateur puissant et un ventilateur, complétés par un chauffage pendant les mois froids. Indiquez la surface et la hauteur, et nous composons un pack.",
      },
    ],
    realisaties: [],
  },

  raeren: {
    slug: "raeren",
    title: "Louer un déshumidificateur à Raeren et Eynatten | Vernast",
    description:
      "Louer un déshumidificateur à Raeren, Eynatten ou Hauset : après la rénovation d'une vieille maison en pierre ou pour une construction neuve. Livré et mesuré.",
    h1: "Location de déshumidificateur à Raeren",
    kicker: "Liège · le village des potiers à la frontière",
    rit: { afstand: "environ 160 km", tijd: "plus d'une heure et demie" },
    intro: [
      "Raeren est connue pour son **grès**. Pendant des siècles, les potiers y ont cuit des cruches et des pichets vendus bien au-delà de la région. Le château de Raeren abrite un musée qui leur est consacré. La commune comprend aussi **Eynatten et Hauset**, le long de la frontière allemande.",
      "Au sud du village commence la forêt en direction des Hautes Fagnes. Cela se ressent dans la météo : il pleut davantage et les hivers sont plus froids qu'en Flandre. Depuis Aartselaar, nous y sommes en **plus d'une heure et demie**.",
    ],
    bouw: {
      kop: "Vieilles maisons de village en pierre et constructions neuves à la frontière",
      alineas: [
        "Dans le centre du village se trouvent **de vieilles maisons en pierre naturelle**. Leurs murs sont épais et retiennent longtemps l'eau. Si vous isolez et replafonnez une telle maison, **vous enfermez l'humidité dans un mur froid**. Un déshumidificateur avec un ventilateur à côté l'en retire de façon plus homogène.",
        "À Eynatten et à Hauset, près d'Aix-la-Chapelle, il s'agit plus souvent de **constructions neuves et de rénovations lourdes**. Là, **la chape et le plafonnage doivent être secs à temps** pour la finition. L'air y est souvent froid et humide, et un chantier sèche alors nettement plus lentement sans aide.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une construction neuve à Eynatten ou à Hauset** : 70 litres par jour pour tenir le planning de la chape et du plafonnage." },
      { key: "ttv4500", waarom: "Près d'un vieux mur en pierre, le ventilateur chasse l'air saturé, pour que le déshumidificateur continue à capter l'humidité." },
      { key: "teddh30", waarom: "Dans une maison de village froide, ce chauffage de 30 kW met la pièce à température. Il demande un raccordement en courant triphasé (400 V)." },
      { key: "ttk170", waarom: "Pour une seule chambre ou une salle de bains dans une vieille maison à l'escalier étroit : compact, 50 litres par jour et adapté jusqu'à 250 m³." },
    ],
    levering: {
      kop: "Livraison à Raeren : après Eupen, contre la frontière",
      alinea:
        "Raeren se trouve **après Eupen, contre la frontière allemande**. Depuis Aartselaar, le trajet dure plus d'une heure et demie. Lors de la réservation, vous choisissez **une date de livraison**, et nous convenons de l'heure avec vous. Le technicien installe les appareils, explique leur fonctionnement et mesure les murs au démarrage.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : loin pour Raeren",
      alinea:
        "Avec plus d'une heure et demie de route dans chaque sens, vous passez **plus de trois heures** en route pour l'enlèvement, et autant pour le retour de l'appareil. Un déshumidificateur doit aussi être transporté **debout**. La livraison vous épargne ces trajets.",
    },
    buren: ["eupen", "lontzen", "kelmis"],
    faq: [
      {
        q: "Comment sécher une vieille maison en pierre à Raeren ?",
        a: "Utilisez un déshumidificateur et un ventilateur qui maintient l'air en mouvement le long du mur, et gardez les fenêtres fermées. La pierre naturelle retient beaucoup d'eau et la libère lentement. Comptez donc plutôt en semaines qu'en jours, et faites mesurer à la reprise à quel point le mur est sec.",
      },
      {
        q: "Allez-vous aussi à Eynatten et à Hauset ?",
        a: "Oui, les deux villages font partie de la commune de Raeren et se trouvent dans notre zone de livraison. Indiquez l'adresse complète lors de la réservation, et nous convenons avec vous du moment de livraison.",
      },
      {
        q: "Pourquoi y a-t-il un chauffage dans le pack pour une maison à Raeren ?",
        a: "Un chantier non chauffé reste souvent froid ici en automne et en hiver. En dessous d'environ 15 °C, un déshumidificateur à condensation perd en rendement. Avec un chauffage en plus, la même pièce sèche plus vite, à condition que vous disposiez du courant triphasé.",
      },
      {
        q: "Qui puis-je appeler pour des questions sur mon pack ?",
        a: "Vous pouvez nous appeler ou nous écrire avec les dimensions de la pièce, le type de travaux et la date de début souhaitée.",
      },
    ],
    realisaties: [],
  },

  "sankt-vith": {
    slug: "sankt-vith",
    title: "Déshumidificateur de chantier à Saint-Vith | Vernast",
    description:
      "Déshumidificateur à Saint-Vith (Sankt Vith) : maisons de la reconstruction, fermes et constructions neuves dans le froid. Installation et mesure comprises.",
    h1: "Location de déshumidificateur à Saint-Vith",
    kicker: "Province de Liège · le centre de l'Eifel belge",
    rit: { afstand: "environ 215 km", tijd: "plus de deux heures" },
    intro: [
      "Saint-Vith, en allemand **Sankt Vith**, est le centre **du sud des Cantons de l'Est**, avec des écoles, des commerces et des services pour les villages alentour. Pendant **la bataille des Ardennes**, la ville a été en grande partie détruite. La **Büchelturm** est l'un des rares bâtiments anciens restés debout.",
      "Les villages de Recht, Schönberg, Crombach et Lommersweiler font aussi partie de la commune. Le paysage est celui de l'Eifel : un haut plateau vallonné de prairies et de forêts, avec **des hivers longs et froids**. Depuis Aartselaar, il faut plus de deux heures de route.",
    ],
    bouw: {
      kop: "Une ville de la reconstruction et des villages en moellons",
      alineas: [
        "Le centre a été **reconstruit après la guerre**, et beaucoup de maisons et de commerces datent des années cinquante. Ils sont aujourd'hui prêts pour **une rénovation en profondeur** : isolation, nouveau plafonnage, nouvelle salle de bains. Si vous habitez la maison pendant les travaux, il vous faut un déshumidificateur qui fonctionne sur une prise standard et prend peu de place.",
        "Dans les villages se trouvent **de vieilles fermes en moellons**, et à côté beaucoup de constructions neuves. Les deux sèchent lentement pendant la saison froide. Dans la ferme, **le mur épais en pierre** retient son eau ; dans la construction neuve, **la chape et le plafonnage dans une maison froide** ne libèrent presque pas d'humidité sans aide.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**Pour une rénovation dans une maison de la reconstruction.** Retire jusqu'à 50 litres par jour et est assez compact pour être porté à l'étage." },
      { key: "ttk350", waarom: "Pour **une construction neuve à Recht ou à Schönberg** avec une chape fraîche sur tout le rez-de-chaussée : 70 litres par jour, pour des pièces jusqu'à environ 400 m³." },
      { key: "teddh30", waarom: "**Pour un chantier froid en janvier.** Le chauffage porte une maison non chauffée au-dessus de 15 °C, là où le déshumidificateur devient vraiment efficace. Demande un raccordement 400 V." },
      { key: "ttv4500", waarom: "Dans **une ferme aux murs épais**, l'air humide stagne dans les coins. Le ventilateur dirige cet air vers le déshumidificateur." },
    ],
    levering: {
      kop: "Livraison à Saint-Vith : un long trajet, planifié ensemble",
      alinea:
        "Saint-Vith se trouve à **plus de deux heures** de notre entrepôt, au bout de l'A27 après Malmedy. Nous ne faisons pas cet aller-retour pour un seul appareil, mais nous **combinons les livraisons dans les Cantons de l'Est**. Vous choisissez une date de livraison, et nous convenons de l'heure. Le technicien installe les appareils par zone de séchage, les règle et mesure l'humidité au démarrage.",
    },
    afhalen: {
      kop: "Venir chercher vous-même depuis Saint-Vith",
      alinea:
        "Venir chercher un appareil à Aartselaar, c'est **plus de quatre heures de route**, et cela deux fois : à l'enlèvement et au retour. **La livraison est ici plus logique**, aussi parce que vous recevez alors une deuxième mesure à la reprise. Elle montre si le sol est prêt pour le poseur de sol.",
    },
    buren: ["amel", "buellingen", "burg-reuland"],
    faq: [
      {
        q: "Je rénove une maison des années cinquante dans le centre. À quoi dois-je faire attention ?",
        a: "À l'humidité présente dans les vieux murs avant d'isoler et de faire la finition. Beaucoup de maisons de la reconstruction n'ont ni creux ni bonne barrière contre l'humidité. Laissez d'abord sécher les murs et le nouveau plafonnage, et faites mesurer, sinon l'humidité revient plus tard derrière la finition.",
      },
      {
        q: "Combien de temps sèche une chape dans une construction neuve froide de l'Eifel ?",
        a: "Sans aide, longtemps, car dans une maison non chauffée, une chape libère peu d'humidité. Avec un déshumidificateur et au besoin un chauffage, cela va nettement plus vite. Le poseur de sol fixe la valeur limite, et le technicien mesure à la reprise pour que vous puissiez transmettre un chiffre.",
      },
      {
        q: "Pouvons-nous continuer à habiter la maison pendant que le déshumidificateur fonctionne ?",
        a: "Oui, lors d'une rénovation pièce par pièce ou étage par étage, c'est la situation normale. Gardez la porte de la pièce à sécher fermée : l'appareil agit alors sur cette pièce et pas sur toute la maison. Le déshumidificateur compact fonctionne sur une prise standard.",
      },
      {
        q: "Venez-vous aussi à Saint-Vith en hiver quand il neige ?",
        a: "Oui, mais nous suivons la météo. Si de la neige ou du verglas sont annoncés sur le haut plateau, nous appelons à l'avance et déplaçons la livraison si nécessaire. Mieux vaut quelques heures de retard qu'une camionnette coincée dans une côte.",
      },
    ],
    realisaties: [],
  },

  spa: {
    slug: "spa",
    title: "Louer un déshumidificateur à Spa, ville thermale | Vernast",
    description:
      "Louer un déshumidificateur à Spa : après la rénovation d'une villa ou d'une maison de maître, ou une inondation dans la vallée du Wayai. Livré et mesuré.",
    h1: "Location de déshumidificateur à Spa",
    kicker: "Liège · la ville thermale",
    rit: { afstand: "environ 150 km", tijd: "environ une heure et demie" },
    intro: [
      "Spa est **la ville thermale** à laquelle chaque « spa » doit son nom. Autour du Pouhon Pierre le Grand, du casino et des anciens bâtiments des bains s'est développée une ville de **villas, d'hôtels et de maisons de maître** pour les curistes. Sur la colline au-dessus de la ville se trouvent les thermes actuels.",
      "La ville se trouve dans une vallée entre des versants boisés, avec à l'est **le lac de Warfaaz**. Beaucoup de bâtiments anciens sont en pierre, avec des caves et des étages hauts. Depuis Aartselaar, nous rejoignons Spa en **environ une heure et demie**.",
    ],
    bouw: {
      kop: "Villas de l'époque thermale et maisons dans la vallée",
      alineas: [
        "Les **villas et maisons de maître de la Belle Époque** ont de hauts plafonds, de grandes pièces et souvent un souterrain. Si vous rénovez un tel bâtiment ou le divisez en appartements, vous séchez **beaucoup de volume à la fois**. Un déshumidificateur puissant par étage et un ventilateur dans les grandes pièces gardent le planning réaliste.",
        "Dans le centre, **dans la vallée du Wayai**, les maisons et commerces sont bas. Après une période humide ou **une inondation**, les caves et les rez-de-chaussée en souffrent particulièrement, et les vieux murs sans barrière contre l'humidité sont sujets aux remontées capillaires. Lors de l'installation, le technicien mesure s'il s'agit d'humidité de construction ou d'eau venant de l'extérieur.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une villa aux pièces hautes** : 110 litres par jour, pour un grand volume jusqu'à environ 600 m³ rénové en une fois." },
      { key: "ttv4500", waarom: "Dans un salon à haut plafond, le ventilateur brasse l'air, pour que l'air sec atteigne aussi les murs et les coins." },
      { key: "ttk350", waarom: "Pour un appartement dans une villa transformée : 70 litres par jour dans des pièces jusqu'à environ 400 m³." },
      { key: "radiaal2250", waarom: "**Après une inondation dans une cave du centre** : le ventilateur radial souffle sur le sol et le long des plinthes, là où l'humidité reste le plus longtemps." },
    ],
    levering: {
      kop: "Livraison à Spa : par Liège et Verviers jusque dans la vallée",
      alinea:
        "Nous roulons **par l'E313 et l'E42**, puis par Theux jusqu'à Spa. Le trajet dure environ une heure et demie. Lors de la réservation, vous choisissez **une date de livraison**, et nous livrons sur rendez-vous. Si la villa a une longue allée ou si l'immeuble n'a pas d'ascenseur, signalez-le à l'avance. Le technicien place chaque appareil dans la bonne pièce et note les valeurs de départ.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : un long détour depuis Spa",
      alinea:
        "Notre point d'enlèvement se trouve à environ une heure et demie de Spa, l'aller-retour vous prend donc **environ trois heures**. Un déshumidificateur doit aussi être transporté debout. Pour une villa avec plusieurs appareils, la livraison est le choix pratique.",
    },
    buren: ["jalhay", "theux", "stoumont"],
    faq: [
      {
        q: "Je rénove une villa de l'époque thermale à Spa. Comment aborder le séchage ?",
        a: "Placez un déshumidificateur par étage et un ventilateur dans les grandes pièces pour brasser l'air. Hauts plafonds et murs épais, cela veut dire beaucoup de volume et beaucoup d'eau. Indiquez la surface et la hauteur lors de la réservation, pour que nous puissions proposer un pack adapté au bâtiment.",
      },
      {
        q: "Que faire si ma cave dans le centre de Spa a été inondée ?",
        a: "Évacuez d'abord l'eau et la boue, puis séchez le sol et les murs. Un déshumidificateur avec un ventilateur radial retire l'humidité du sol et du bas des murs. Précisez lors de la réservation la hauteur atteinte par l'eau, et le technicien apportera les bons appareils.",
      },
      {
        q: "Vos appareils sont-ils assez silencieux pour un immeuble à appartements ?",
        a: "Un déshumidificateur tourne jour et nuit et fait un bruit audible et constant. Il se trouve généralement dans une pièce en rénovation. Posez-le sur un sol dur et pas contre un mur mitoyen, et les voisins en seront peu gênés.",
      },
      {
        q: "Comment savoir si le souterrain est assez sec pour la finition ?",
        a: "En mesurant. Lors de l'installation, le technicien note les valeurs d'humidité des murs et du sol, puis mesure à nouveau à la reprise. Votre peintre ou votre poseur de sol détermine quelle valeur sa finition supporte.",
      },
    ],
    realisaties: [],
  },

  stavelot: {
    slug: "stavelot",
    title: "Location de déshumidificateur à Stavelot et Coo | Vernast",
    description:
      "Déshumidificateur à Stavelot, Francorchamps ou Coo : maisons en pierre autour de l'abbaye et gîtes dans la vallée de l'Amblève. Installé par notre technicien.",
    h1: "Location de déshumidificateur à Stavelot",
    kicker: "Province de Liège · la ville abbatiale sur l'Amblève",
    rit: { afstand: "environ 170 km", tijd: "près de deux heures" },
    intro: [
      "Stavelot s'est développée autour de **l'abbaye**, qui abrite aujourd'hui un musée. La vieille ville s'étage sur le versant au-dessus de l'Amblève, à près de deux heures de route d'Aartselaar. Vous y trouvez des rues étroites, des maisons en pierre naturelle et à colombages et des toits en ardoises. Pendant le Laetare, les **Blancs Moussis** défilent dans les rues.",
      "La commune est plus grande que la petite ville. **Francorchamps**, avec son célèbre circuit, et **Coo**, avec sa cascade sur l'Amblève, en font aussi partie. Comme la région attire beaucoup de visiteurs, on y trouve à côté des maisons familiales de nombreux gîtes et maisons de vacances.",
    ],
    bouw: {
      kop: "Une ville historique sur le versant, une vallée touristique",
      alineas: [
        "Dans le **vieux centre autour de l'abbaye**, il s'agit surtout de rénovation. Les murs sont épais, en moellons et souvent sans barrière contre l'humidité, et les caves sont adossées à la pente. Un nouveau plafonnage sur un tel mur sèche plus lentement que sur un mur intérieur en briques, parce que la pierre derrière retient elle-même l'humidité. **Faites mesurer l'humidité résiduelle** avant de peindre ou de tapisser.",
        "Dans la vallée de l'Amblève et autour de Coo, beaucoup de maisons sont louées aux touristes. Là, tout tourne autour du planning : le gîte doit être sec avant l'arrivée des premiers hôtes. Si les travaux ont lieu en hiver, la vallée est froide et humide. **Une capacité de séchage et une chaleur suffisantes** gardent ce planning réaliste.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour un gîte entier rénové entre deux saisons** : 110 litres par jour, pour des pièces jusqu'à 600 m³." },
      { key: "ttv4500", waarom: "Contre **un mur en moellons du vieux centre** : le ventilateur chasse la couche d'air humide de la paroi, pour que le plafonnage sèche plus vite." },
      { key: "teddh20", waarom: "Pour une maison plus petite dans la vallée : ce chauffage de chantier de 20 kW porte la pièce au-dessus de 15 °C. Il fonctionne en 400 V." },
      { key: "ttk170", waarom: "Pour un appartement ou une chambre au-dessus d'un commerce du centre : compact, 0,75 kW, et facile à monter par un escalier étroit." },
    ],
    levering: {
      kop: "Livraison à Stavelot : près de deux heures par Liège",
      alinea:
        "Nous rejoignons Stavelot par Liège, un trajet de près de deux heures. C'est pourquoi nous regroupons les livraisons dans la région. Vous choisissez une date de livraison lors de la réservation, et comme Stavelot se trouve en Wallonie, **nous livrons sur rendez-vous**. Les rues autour de l'abbaye sont étroites et raides. Signalez à l'avance si la camionnette peut arriver jusqu'à la porte.",
    },
    afhalen: {
      kop: "L'enlèvement depuis Stavelot vaut rarement la peine",
      alinea:
        "Un aller-retour jusqu'à Aartselaar vous prend près de quatre heures, et autant pour ramener l'appareil. Si vous venez de toute façon de Flandre en tant que propriétaire d'une maison de vacances, l'enlèvement peut toutefois convenir. **Réservez à l'avance**, pour que l'appareil soit prêt.",
    },
    buren: ["malmedy", "trois-ponts", "stoumont", "spa"],
    faq: [
      {
        q: "Mon gîte près de Coo doit être sec avant la saison. Comment planifier ?",
        a: "Commencez à sécher dès que les travaux humides sont terminés, pas une semaine avant les premiers hôtes. Un plafonnage frais et une chape demandent des semaines, et encore plus dans une vallée froide. Précisez lors de la réservation quand le gîte doit être prêt.",
      },
      {
        q: "Livrez-vous aussi à Francorchamps ?",
        a: "Oui, Francorchamps fait partie de la commune de Stavelot et donc de notre zone de livraison. Lors d'un grand événement sur le circuit, la circulation dans les environs est saturée. Choisissez de préférence un autre jour pour la livraison.",
      },
      {
        q: "Combien de temps sèche un nouveau plafonnage sur un vieux mur en pierre ?",
        a: "Plus longtemps que sur un mur intérieur moderne, parce que la pierre derrière retient elle-même l'humidité. Comptez plutôt en semaines qu'en jours. Une mesure de l'humidité vous dit quand vous pouvez peindre, sans devoir deviner.",
      },
      {
        q: "Peut-on utiliser un déshumidificateur dans une maison à colombages ?",
        a: "Oui, mais ne séchez pas trop vite. Un bois qui sèche trop rapidement peut se rétracter et se fendre. Réglez le déshumidificateur pour que la pièce sèche progressivement, et faites aussi contrôler l'humidité du bois, pas seulement celle du plafonnage entre les pièces de bois.",
      },
    ],
    realisaties: [],
  },

  stoumont: {
    slug: "stoumont",
    title: "Louer un déshumidificateur à Stoumont et La Gleize | Vernast",
    description:
      "Déshumidificateur à Stoumont, La Gleize, Chevron ou Lorcé : maisons en pierre au-dessus de l'Amblève et chalets en forêt. Appareils et chauffages installés.",
    h1: "Location de déshumidificateur à Stoumont",
    kicker: "Province de Liège · des villages au-dessus de l'Amblève",
    rit: { afstand: "environ 160 km", tijd: "plus d'une heure et demie" },
    intro: [
      "Stoumont est **une vaste commune boisée** le long de l'Amblève, à plus d'une heure et demie de route d'Aartselaar. Il n'y a pas de centre urbain. La commune se compose de villages comme **La Gleize, Chevron, Lorcé, Rahier** et Stoumont même, répartis entre vallées et hauteurs. À La Gleize, un musée rappelle les combats de décembre 1944.",
      "La région attire les promeneurs et les amoureux de la nature, et cela se voit aux nombreux **gîtes, chalets et secondes résidences**. Les maisons plus anciennes sont construites en pierre naturelle de la région, avec un toit en ardoises, et se trouvent souvent contre une pente ou au bord d'un ruisseau.",
    ],
    bouw: {
      kop: "Maisons de village en pierre et chalets en forêt",
      alineas: [
        "Une vieille maison de village à La Gleize ou à Chevron a **des murs épais en moellons**. Un tel mur absorbe beaucoup d'eau et la libère lentement. Si vous isolez ou plafonnez l'intérieur, laissez d'abord sécher le mur. Sinon, l'humidité reste enfermée derrière la nouvelle finition et des moisissures apparaissent.",
        "Un chalet en forêt reçoit peu de soleil et reste vide une grande partie de l'année. L'air sous les arbres est frais et humide, et une maison restée **non chauffée** tout l'hiver semble moite au printemps. Pour préparer une telle maison pour la saison, choisissez de préférence un déshumidificateur qui fonctionne aussi dans le froid.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**Pour un chalet resté vide tout l'hiver** : ce déshumidificateur à adsorption continue de capter l'humidité dans une maison froide, sans devoir chauffer d'abord." },
      { key: "ttk350", waarom: "Pour une maison de village à La Gleize entièrement rénovée : 70 litres par jour, pour des pièces jusqu'à 400 m³." },
      { key: "teddh20", waarom: "Pour une maison de vacances plus petite ou un seul étage : ce chauffage de chantier de 20 kW en 400 V met la pièce à température, pour que le déshumidificateur fonctionne bien." },
      { key: "ttv4500", waarom: "Le long d'**un mur épais en moellons** : le ventilateur maintient l'air en mouvement, pour que le mur libère plus vite son humidité." },
    ],
    levering: {
      kop: "Livraison à Stoumont : par Liège et la vallée",
      alinea:
        "Nous rejoignons Stoumont par Liège, puis par la vallée de l'Amblève, soit plus d'une heure et demie au total. Lors de la réservation, vous choisissez une date de livraison ; **le moment précis est convenu ensemble**, comme partout en Wallonie. Si la maison se trouve le long d'un chemin forestier ou d'une allée raide, signalez-le à l'avance. Le technicien sait ainsi jusqu'où il peut s'approcher.",
    },
    afhalen: {
      kop: "Enlèvement depuis Stoumont : une longue matinée",
      alinea:
        "L'aller-retour jusqu'à Aartselaar représente plus de trois heures de route. Si vous avez une maison de vacances à Stoumont et habitez vous-même en Flandre, vous pouvez emporter un appareil en route vers les Ardennes. **Consultez à l'avance les tarifs d'enlèvement** et tenez compte du trajet pour le ramener.",
    },
    buren: ["aywaille", "spa", "stavelot", "trois-ponts"],
    faq: [
      {
        q: "Puis-je isoler tout de suite par l'intérieur un mur en moellons à Stoumont ?",
        a: "Pas tant que le mur est mouillé. Si vous fermez un mur en pierre humide avec de l'isolation et une nouvelle finition, l'humidité ne peut aller nulle part et des moisissures apparaissent. Laissez d'abord sécher le mur et faites mesurer l'humidité résiduelle.",
      },
      {
        q: "Mon chalet sent le renfermé après l'hiver. Un déshumidificateur suffit-il ?",
        a: "Pour l'humidité présente dans l'air et dans les murs, oui. Si l'eau vient d'une fuite ou du sol, faites d'abord réparer cette cause. Un déshumidificateur à adsorption fonctionne bien dans une maison aussi froide.",
      },
      {
        q: "Pouvez-vous livrer une maison le long d'un chemin forestier ?",
        a: "Généralement oui, mais signalez-le à l'avance. Si le chemin est étroit, non revêtu ou raide, le technicien choisit où il s'arrête et rentre les appareils avec un diable. Après de fortes pluies ou de la neige, nous reconvenons de la livraison avec vous.",
      },
      {
        q: "Où livrez-vous dans la commune de Stoumont ?",
        a: "Dans toute la commune : La Gleize, Chevron, Lorcé, Rahier, Stoumont et les hameaux entre eux. Les routes entre les villages sont sinueuses, indiquez donc lors de la réservation une adresse complète et éventuellement un repère pour trouver la maison.",
      },
    ],
    realisaties: [],
  },

  theux: {
    slug: "theux",
    title: "Déshumidificateur de chantier à Theux et Polleur | Vernast",
    description:
      "Louer un déshumidificateur à Theux, Polleur ou La Reid : après une inondation le long de la Hoëgne ou une transformation sur le plateau. Installé et mesuré.",
    h1: "Location de déshumidificateur à Theux",
    kicker: "Liège · sur la Hoëgne, sous Franchimont",
    rit: { afstand: "environ 145 km", tijd: "près d'une heure et demie" },
    intro: [
      "Theux se trouve **dans la vallée de la Hoëgne**, entre Spa et Pepinster. Au-dessus de la petite ville se dressent **les ruines du château de Franchimont**. Dans le vieux centre, vous trouvez une église romane et un noyau de maisons en pierre naturelle.",
      "La commune comprend aussi **Polleur et La Reid**, des villages ruraux sur les hauteurs autour de la vallée. La région est vallonnée et boisée, et plus humide que la Flandre. Depuis Aartselaar, nous y sommes en **près d'une heure et demie**.",
    ],
    bouw: {
      kop: "Maisons au bord de la Hoëgne et fermes sur les hauteurs",
      alineas: [
        "Le centre de Theux est **bas, le long de la Hoëgne**. Les vieilles maisons en pierre naturelle y ont des caves qui se mouillent en cas de crue, et un rez-de-chaussée difficile à réchauffer. Après **une inondation** ou lors d'une rénovation, commencez donc par une mesure : l'humidité vient-elle des nouveaux travaux, ou monte-t-elle d'en dessous ?",
        "À Polleur et à La Reid se trouvent **des fermes et des maisons isolées** sur le plateau. Il s'agit plus souvent d'une transformation ou d'une construction neuve avec chape et plafonnage. Une maison non chauffée sur les hauteurs est froide en automne. **Un chauffage à côté du déshumidificateur** porte la pièce à une température où le séchage avance bien.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Après une inondation le long de la Hoëgne** : 110 litres par jour pour un rez-de-chaussée ou une cave gorgés d'humidité." },
      { key: "radiaal2250", waarom: "Le ventilateur radial balaie le sol d'une cave et le bas des murs, là où l'eau est restée." },
      { key: "teddh20", waarom: "Pour une ferme transformée à Polleur ou à La Reid sans chauffage : ce chauffage de 20 kW en courant triphasé (400 V) porte la pièce au-dessus de 15 °C." },
      { key: "ttk350", waarom: "Pour une construction neuve sur le plateau : 70 litres par jour pour que la chape et le plafonnage soient prêts à temps pour la finition." },
    ],
    levering: {
      kop: "Livraison à Theux : par Verviers dans la vallée de la Hoëgne",
      alinea:
        "Theux se trouve **tout près de l'E42**, entre Verviers et Spa. Depuis Aartselaar, le trajet dure près d'une heure et demie. Lors de la réservation, vous choisissez **une date de livraison**, et la livraison se fait sur rendez-vous. Si votre maison se trouve sur une pente à La Reid ou dans une rue étroite du centre, signalez-le à l'avance. Le technicien installe les appareils et mesure les murs au démarrage.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : près de trois heures de route",
      alinea:
        "Depuis Theux, un aller-retour jusqu'à notre point d'enlèvement vous prend **près de trois heures**. Après une inondation, vous préférez ne pas vous éloigner de votre maison, et un pack avec déshumidificateur et ventilateur tient rarement dans une seule voiture. La livraison est la solution la plus simple.",
    },
    buren: ["spa", "jalhay", "pepinster", "sprimont"],
    faq: [
      {
        q: "Ma maison au bord de la Hoëgne a eu de l'eau dans la cave. Quand puis-je sécher ?",
        a: "Dès que l'eau stagnante et la boue sont parties. Un déshumidificateur est fait pour l'humidité qui reste dans le sol et les murs. Plus vite vous commencez, plus le risque de moisissures est faible. Précisez lors de la réservation la hauteur atteinte par l'eau, et nous composons les bons appareils.",
      },
      {
        q: "Livrez-vous aussi à Polleur et à La Reid ?",
        a: "Oui, tous les villages de la commune de Theux se trouvent dans notre zone de livraison. Indiquez l'adresse et l'accès, surtout si la maison se trouve sur une pente ou le long d'un chemin de campagne étroit, pour que le technicien sache comment rentrer les appareils.",
      },
      {
        q: "Pourquoi mon pack à La Reid comprend-il un chauffage ?",
        a: "Sur le plateau, il fait froid en automne et en hiver, et une transformation non chauffée n'atteint alors pas 15 °C. En dessous de cette température, un déshumidificateur à condensation perd beaucoup de rendement. Avec un chauffage en plus, la même pièce sèche nettement plus vite.",
      },
      {
        q: "Comment savoir si mes murs à Theux sont assez secs pour le peintre ?",
        a: "En mesurant. Lors de l'installation, le technicien note les valeurs d'humidité des murs et du sol, et mesure à nouveau à la reprise. Vous avez ainsi un chiffre pour le peintre ou le poseur de sol, sans devoir vous fier à votre impression.",
      },
    ],
    realisaties: [],
  },

  "thimister-clermont": {
    slug: "thimister-clermont",
    title: "Location de déshumidificateur à Thimister-Clermont | Vernast",
    description:
      "Déshumidificateur à Thimister-Clermont : fermes et maisons de village sur le plateau de Herve, le long de la Berwinne. Mesure au début et à la fin.",
    h1: "Location de déshumidificateur à Thimister-Clermont",
    kicker: "Liège · deux villages sur le plateau de Herve",
    rit: { afstand: "environ 145 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Thimister-Clermont se compose de **deux villages sur le plateau**, Thimister et Clermont-sur-Berwinne, avec en plus Froidthier et quelques hameaux. La commune se trouve au cœur du Pays de Herve, entre vergers, prairies et le ruisseau auquel Clermont doit son nom complet.",
      "**Clermont a un vieux centre** avec des maisons en brique et en pierre calcaire autour de l'église. À Thimister et à Froidthier, de vieilles fermes côtoient de nouvelles maisons familiales. Depuis Aartselaar, nous y sommes en un peu plus d'une heure.",
    ],
    bouw: {
      kop: "Maisons de village en brique et en pierre calcaire, et constructions neuves entre elles",
      alineas: [
        "**Une maison de village à Clermont** associe souvent la brique à des chaînes d'angle et des seuils en pierre calcaire, et les murs sont maçonnés au mortier de chaux. Le mortier de chaux absorbe l'humidité et la libère lentement. Après un nouveau plafonnage ou un nouveau sol, ces murs restent donc longtemps froids et moites au toucher. Un déshumidificateur avec un ventilateur à côté raccourcit nettement cette période.",
        "**Pour une construction neuve à Thimister et à Froidthier**, tout tourne autour du planning. Chape, plafonnage et parfois un sol coulé se succèdent rapidement, et chaque couche doit être assez sèche pour la suivante. Le technicien mesure à la reprise, pour que le poseur de sol puisse travailler avec un chiffre concret.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une construction neuve à Thimister ou à Froidthier** : 70 litres par jour pour que la chape et le plafonnage sèchent selon le planning." },
      { key: "ttv4500", waarom: "**Près des murs maçonnés à la chaux de Clermont**, il chasse la couche d'air humide, pour que l'humidité continue de sortir des joints." },
      { key: "radiaal2250", waarom: "**Pour un sol fraîchement coulé** : orienté bas sur la surface, il fait sécher le sol de façon plus homogène, y compris dans les coins." },
      { key: "ttk170", waarom: "Pour une seule chambre ou une salle de bains dans une vieille maison de village : compact, **0,75 kW** et à brancher sur une prise standard." },
    ],
    levering: {
      kop: "Livraison à Thimister-Clermont : entre l'E40 et les prairies",
      alinea:
        "Nous rejoignons Thimister-Clermont **par l'E313, l'E40 et l'échangeur de Battice**, en un peu plus d'une heure. Vous choisissez une date de livraison lors de la réservation, et nous convenons avec vous du moment précis. Le technicien installe les appareils, raccorde l'évacuation vers un siphon de sol ou un évier et note les valeurs de départ du sol et des murs.",
    },
    afhalen: {
      kop: "Enlèvement : deux heures et demie de route pour un déshumidificateur",
      alinea:
        "Notre point d'enlèvement à Aartselaar se trouve à un peu plus d'une heure de Thimister-Clermont, vous passez donc **environ deux heures et demie** en route pour un seul aller-retour. Et cela deux fois : à l'enlèvement et au retour. Avec la livraison, le technicien vient chez vous et mesure aussi à la reprise.",
    },
    buren: ["herve", "aubel", "dison", "limbourg"],
    faq: [
      {
        q: "Pourquoi le mur de ma vieille maison de village est-il moite après la rénovation ?",
        a: "Les vieux murs au mortier de chaux absorbent beaucoup d'humidité, et un nouveau plafonnage y ajoute encore de l'eau. Cette humidité remonte lentement vers la surface. Un déshumidificateur associé à un ventilateur l'en retire plus vite que chauffer et aérer seuls.",
      },
      {
        q: "Puis-je marcher sur un sol coulé pendant qu'il sèche ?",
        a: "C'est le poseur de sol qui le décide, pas le déshumidificateur. Nous gardons l'air sec, pour que le sol durcisse et sèche de façon homogène. En concertation avec le poseur de sol, placez les appareils de sorte que personne ne doive marcher sur le sol frais pour les atteindre.",
      },
      {
        q: "Livrez-vous à Froidthier et dans les hameaux de la commune ?",
        a: "Oui, nous livrons dans toute la commune, y compris à Froidthier et dans les petits hameaux entre les prairies. Indiquez l'adresse complète et éventuellement un repère, car à la campagne, un numéro de maison se trouve parfois loin de la route.",
      },
      {
        q: "Comment savoir quand la chape est assez sèche ?",
        a: "En mesurant. Le technicien note le taux d'humidité à l'installation et à la reprise, pour que vous ayez un chiffre pour le poseur de sol. La valeur limite applicable dépend du type de chape et du revêtement qui sera posé dessus.",
      },
    ],
    realisaties: [],
  },

  "trois-ponts": {
    slug: "trois-ponts",
    title: "Louer un déshumidificateur à Trois-Ponts et Wanne | Vernast",
    description:
      "Déshumidificateur à Trois-Ponts, au confluent de la Salm et de l'Amblève : maisons dans la vallée et fermes à Wanne ou Basse-Bodeux. Livré sur rendez-vous.",
    h1: "Location de déshumidificateur à Trois-Ponts",
    kicker: "Province de Liège · là où la Salm se jette dans l'Amblève",
    rit: { afstand: "environ 175 km", tijd: "près de deux heures" },
    intro: [
      "À Trois-Ponts, **la Salm se jette dans l'Amblève**. Le village se trouve au fond de la vallée, entre des versants boisés, à près de deux heures de route d'Aartselaar. Le chemin de fer suit la rivière, et un peu en aval se trouve la cascade de Coo.",
      "Au-dessus de la vallée se trouvent les sections de **Wanne, Fosse et Basse-Bodeux**, des villages ruraux sur le haut plateau. Dans le centre, on trouve des maisons plus anciennes en pierre naturelle, sur le plateau surtout des fermes. La commune compte aussi quelques maisons de vacances pour les promeneurs.",
    ],
    bouw: {
      kop: "Une vallée à deux rivières et un plateau au-dessus",
      alineas: [
        "Au fond de la vallée, **près des rivières**, l'air est souvent humide. Les maisons au bord de l'eau ont des caves fraîches, et un rez-de-chaussée peut sentir le renfermé après un hiver humide. Si vous rénovez une telle maison, cherchez d'abord si l'humidité vient des travaux ou de l'extérieur. Seule l'humidité de construction disparaît durablement avec un déshumidificateur.",
        "Sur le plateau de Wanne et de Basse-Bodeux, des fermes en moellons sont souvent transformées en habitation ou en gîte. Les hivers y sont froids et longs. Une étable transformée en pièce de vie reçoit **de nouveaux sols et un nouveau plafonnage** entre des murs épais et froids. Cela ne sèche bien qu'en associant chaleur et déshumidification.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**Pour une cave tout près de la Salm ou de l'Amblève** : ce déshumidificateur à adsorption continue de capter l'humidité dans une pièce qui reste fraîche toute l'année." },
      { key: "teddh30", waarom: "Pour une ferme à Wanne transformée en hiver : ce chauffage de chantier de 30 kW réchauffe la pièce jusqu'à ce que le séchage ait de nouveau un sens. Il fonctionne en 400 V." },
      { key: "ttk650", waarom: "Pour une étable ou une grange transformée avec beaucoup de chape fraîche : 110 litres par jour, pour des pièces jusqu'à 600 m³." },
      { key: "ttv4500", waarom: "Pour un rez-de-chaussée au bord de la rivière qui garde une odeur de renfermé : le ventilateur met l'air en mouvement, pour que les coins sèchent aussi." },
    ],
    levering: {
      kop: "Livraison à Trois-Ponts : par Liège, puis dans la vallée",
      alinea:
        "Trois-Ponts se trouve à près de deux heures de route d'Aartselaar. Dans la mesure du possible, nous planifions le trajet avec d'autres adresses de la région. Vous choisissez une date de livraison lors de la réservation, et **en Wallonie, nous livrons sur rendez-vous**. Si votre chantier se trouve sur le plateau, précisez si l'allée est bien accessible en hiver.",
    },
    afhalen: {
      kop: "Enlèvement : près de quatre heures de route",
      alinea:
        "L'aller-retour jusqu'à notre point d'enlèvement vous prend près de quatre heures, et autant pour ramener l'appareil. Pour un seul appareil, ce trajet vaut rarement mieux qu'une livraison. Si vous venez tout de même le chercher, **réservez à l'avance** et transportez le déshumidificateur debout.",
    },
    buren: ["stavelot", "stoumont", "lierneux", "vielsalm"],
    faq: [
      {
        q: "Ma maison est au bord de l'Amblève et la cave reste humide. Un déshumidificateur résout-il le problème ?",
        a: "Un déshumidificateur élimine l'humidité de construction après des travaux. Si l'eau vient de l'extérieur ou d'en dessous, elle revient dès que le déshumidificateur est parti. Faites donc d'abord rechercher d'où vient l'humidité.",
      },
      {
        q: "Comment sécher une étable transformée en habitation ?",
        a: "En associant chaleur et déshumidification. Une vieille étable a des murs épais et un sol froid, et beaucoup de nouveaux travaux humides s'y ajoutent. Portez d'abord la pièce au-dessus de 15 °C, placez ensuite un déshumidificateur d'une capacité suffisante, et faites mesurer avant la pose du revêtement de sol.",
      },
      {
        q: "Livrez-vous aussi à Wanne, Fosse et Basse-Bodeux ?",
        a: "Oui, les villages du plateau font partie de notre zone de livraison. Ils sont plus hauts et plus froids que le village dans la vallée. Pour un chantier là-haut, nous conseillons souvent en hiver un chauffage de chantier à côté du déshumidificateur.",
      },
      {
        q: "Comment se déroule une livraison à Trois-Ponts ?",
        a: "Vous choisissez une date de livraison lors de la réservation, et comme il s'agit d'un trajet de près de deux heures, nous convenons avec vous du moment de la livraison. Le technicien installe les appareils et raccorde l'évacuation.",
      },
    ],
    realisaties: [],
  },

  weismes: {
    slug: "weismes",
    title: "Déshumidificateur à Waimes, dans les Hautes Fagnes | Vernast",
    description:
      "Louer un déshumidificateur à Waimes (Weismes), sur le plateau des Hautes Fagnes autour de Robertville et Botrange. Pour chantiers froids, livré sur rendez-vous.",
    h1: "Location de déshumidificateur à Waimes",
    kicker: "Province de Liège · le toit de la Belgique",
    rit: { afstand: "environ 185 km", tijd: "environ deux heures" },
    intro: [
      "Waimes, en allemand **Weismes**, se trouve sur le plateau des Hautes Fagnes, à environ deux heures de route d'Aartselaar. Sur son territoire se trouvent **le signal de Botrange**, le point culminant de la Belgique, et le lac de barrage de Robertville. La commune est devenue belge en 1920 et est francophone, avec des facilités linguistiques pour les germanophones.",
      "La commune compte plusieurs villages, comme **Robertville, Ovifat, Sourbrodt et Faymonville**. Près d'Ovifat se dresse le château de Reinhardstein. Les promeneurs et les skieurs de fond aiment venir ici, c'est pourquoi on trouve aussi des maisons de vacances à côté des maisons familiales.",
    ],
    bouw: {
      kop: "Haut, froid et humide : construire sur le plateau des Fagnes",
      alineas: [
        "Sur le plateau, les précipitations sont abondantes, souvent sous forme de neige en hiver, et le gel y dure plus longtemps qu'en Flandre. Un gros œuvre ou une rénovation en automne ne sèche pas en aérant, car l'air extérieur est lui-même froid et humide. **Un chauffage de chantier et un déshumidificateur ensemble** sont ici, en hiver, plutôt la règle que l'exception.",
        "Une **maison de vacances inoccupée pendant des mois** se refroidit complètement. L'humidité se condense sur les murs froids, et les armoires et le linge commencent à sentir le renfermé. Si vous devez sécher une telle maison après une conduite éclatée, vous partez d'une construction glaciale. **Choisissez alors un déshumidificateur qui continue de fonctionner à basse température**, ou chauffez d'abord.",
      ],
    },
    toestellen: [
      { key: "teddh30", waarom: "**Pour un chantier sur le plateau en hiver** : ce chauffage de chantier de 30 kW réchauffe la pièce jusqu'à ce que le déshumidificateur puisse faire son travail. Prévoyez une alimentation triphasée (400 V)." },
      { key: "revolution", waarom: "**Pour une maison de vacances longtemps restée sans chauffage** : ce déshumidificateur à adsorption continue de capter l'humidité là où un déshumidificateur à condensation ne fait presque plus rien." },
      { key: "ttk350", waarom: "Pour une maison à Robertville ou à Faymonville entièrement rénovée : 70 litres par jour, pour des pièces jusqu'à 400 m³." },
      { key: "radiaal2250", waarom: "Après une conduite éclatée : le ventilateur radial souffle de façon ciblée sur le sol mouillé et dans les coins, là où l'eau stagne le plus longtemps." },
    ],
    levering: {
      kop: "Livraison à Waimes : environ deux heures, sur rendez-vous",
      alinea:
        "Waimes fait partie de nos adresses les plus éloignées : environ deux heures de route. Dans la mesure du possible, nous combinons le trajet avec d'autres livraisons dans les Cantons de l'Est. Lors de la réservation, vous indiquez une date de livraison ; **nous convenons ensuite avec vous de l'heure de livraison**. Si vous n'êtes pas sur place, prévoyez quelqu'un pour ouvrir au technicien.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : rarement pratique depuis Waimes",
      alinea:
        "L'aller-retour jusqu'à notre point d'enlèvement représente environ quatre heures de route, et davantage s'il y a de la neige sur le plateau. Si vous habitez en Flandre et avez une maison de vacances ici, vous pouvez emporter un appareil en route vers la maison. **Transportez toujours un déshumidificateur debout.**",
    },
    buren: ["malmedy", "buetgenbach", "amel"],
    faq: [
      {
        q: "Je ne suis pas sur place dans ma maison de vacances à Waimes. Pouvez-vous quand même livrer ?",
        a: "Oui, si quelqu'un ouvre au technicien : un voisin, le gestionnaire ou votre entrepreneur. Indiquez lors de la réservation le nom et le numéro de téléphone de cette personne, et le technicien pourra installer les appareils et raccorder l'évacuation.",
      },
      {
        q: "Un déshumidificateur fonctionne-t-il aux températures des Hautes Fagnes ?",
        a: "Un déshumidificateur à condensation a besoin de plus de 15 °C pour bien fonctionner. Dans une maison non chauffée sur le plateau, la température est bien inférieure en hiver. Ajoutez alors un chauffage de chantier, ou choisissez un déshumidificateur à adsorption qui fonctionne aussi dans le froid.",
      },
      {
        q: "Et s'il y a de la neige le jour de la livraison ?",
        a: "Nous prenons alors contact avec vous à l'avance. Autour d'Ovifat et de Sourbrodt, la neige peut rendre les routes difficilement praticables. Dans ce cas, nous convenons ensemble d'un autre jour de livraison, pour que vous n'attendiez pas pour rien.",
      },
      {
        q: "Comment traiter une fuite due au gel dans une seconde résidence ?",
        a: "Faites d'abord réparer la conduite et évacuez l'eau stagnante. Commencez ensuite tout de suite à sécher : un ventilateur radial sur le sol et un déshumidificateur qui fonctionne dans le froid. Plus vite vous commencez, moins l'humidité pénètre dans le sol et les murs.",
      },
    ],
    realisaties: [],
  },

  welkenraedt: {
    slug: "welkenraedt",
    title: "Location de déshumidificateur à Welkenraedt | Vernast",
    description:
      "Déshumidificateur à Welkenraedt et Henri-Chapelle : le village du rail sur la ligne d'Aix-la-Chapelle et les fermes du plateau. Réglé par un technicien.",
    h1: "Location de déshumidificateur à Welkenraedt",
    kicker: "Liège · à la frontière linguistique, sur la ligne d'Aix-la-Chapelle",
    rit: { afstand: "environ 155 km", tijd: "plus d'une heure et demie" },
    intro: [
      "Welkenraedt s'est développée **autour de la gare** sur la ligne de chemin de fer de Liège à Aix-la-Chapelle, à quelques kilomètres de la frontière. Lontzen et Eupen sont les communes voisines. Depuis notre entrepôt d'Aartselaar, nous roulons plus d'une heure et demie jusqu'à Welkenraedt.",
      "**Henri-Chapelle** fait aussi partie de la commune. Le village est plus haut, avec des prairies et des fermes dispersées sur les contreforts du Pays de Herve. Autour du centre de Welkenraedt se trouvent des maisons mitoyennes plus anciennes et des lotissements plus récents.",
    ],
    bouw: {
      kop: "Maisons mitoyennes près de la gare et fermes sur le plateau",
      alineas: [
        "**Autour de la gare** se trouvent des maisons mitoyennes de la fin du XIXe et du début du XXe siècle. Elles sont construites en brique, avec des murs pleins sans creux et une cave sous le rez-de-chaussée. Si vous isolez une telle maison par l'intérieur, le mur doit d'abord être assez sec, sinon l'isolation enferme l'humidité.",
        "**À Henri-Chapelle**, il s'agit plutôt de fermes et de maisons plus grandes sur le plateau, où l'hiver est froid et humide. Un grand espace non chauffé, comme une grange transformée en habitation, ne sèche dans un délai raisonnable qu'avec un déshumidificateur et un chauffage ensemble.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison mitoyenne près de la gare**, étage par étage : 70 litres par jour, pour que le mur soit assez sec pour une isolation par l'intérieur." },
      { key: "ttk650", waarom: "**Pour une grange à Henri-Chapelle** transformée en habitation : 110 litres par jour et une portée jusqu'à environ 600 m³, pour un grand volume ouvert." },
      { key: "teddh30", waarom: "**Pour un espace non chauffé sur le plateau** en hiver : ce chauffage de 30 kW amène la température au bon niveau, pour que le déshumidificateur soit efficace." },
      { key: "radiaal2250", waarom: "Orienté bas sur une nouvelle chape, **il sèche le sol de façon homogène**, y compris dans les coins d'une vieille grange." },
    ],
    levering: {
      kop: "Livraison à Welkenraedt : par l'E40 vers Aix-la-Chapelle",
      alinea:
        "Nous roulons **par l'E313 et l'E40** en direction d'Aix-la-Chapelle jusqu'à Welkenraedt, plus d'une heure et demie. Après votre choix d'une date de livraison, nous confirmons le moment précis de la livraison. Le technicien installe les appareils pièce par pièce, pose le tuyau d'évacuation et note les valeurs d'humidité des murs et du sol.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : à l'autre bout du pays",
      alinea:
        "Notre point d'enlèvement se trouve à l'autre bout du pays, à plus d'une heure et demie de route de Welkenraedt. Cela fait **plus de trois heures aller-retour**. Pour plusieurs appareils ou un chauffage, ce n'est pas une option : faites-les livrer et reprendre.",
    },
    buren: ["baelen", "lontzen", "plombieres"],
    faq: [
      {
        q: "Le mur doit-il être sec avant d'isoler par l'intérieur ?",
        a: "Oui. Un mur plein en brique qui contient encore de l'humidité et qui est ensuite recouvert côté intérieur ne peut plus libérer cette humidité vers l'intérieur. Des moisissures ou des dégâts apparaissent alors derrière l'isolation. Séchez donc au préalable et faites mesurer par le technicien.",
      },
      {
        q: "Pouvez-vous sécher une grange à Henri-Chapelle ?",
        a: "Oui, avec un déshumidificateur puissant, un chauffage et souvent un ventilateur en plus. Indiquez lors de la réservation le volume et l'état de l'espace : le toit est-il fermé, les fenêtres sont-elles posées, y a-t-il de l'électricité ? Sur cette base, nous composons la combinaison.",
      },
      {
        q: "Un raccordement électrique ordinaire suffit-il pour les appareils ?",
        a: "Pour les déshumidificateurs et les ventilateurs, oui : ils fonctionnent sur une prise standard. Les chauffages de chantier électriques demandent du courant triphasé 400 V. Lors de l'installation, le technicien vérifie ce qui est disponible et adapte le dispositif en conséquence.",
      },
      {
        q: "Livrez-vous aussi tout près de la limite avec Lontzen et Eupen ?",
        a: "Oui, dans tout Welkenraedt, y compris dans les rues contre la limite communale. Lontzen et Eupen ont leur propre page. Indiquez la bonne adresse lors de la réservation, pour que la planification du trajet soit correcte.",
      },
    ],
    realisaties: [],
  },

  dison: {
    slug: "dison",
    title: "Déshumidificateur à louer à Dison et Andrimont | Vernast",
    description:
      "Louer un déshumidificateur à Dison ou Andrimont : maisons ouvrières de l'époque textile et nouveaux lotissements près de Verviers. Mesure à l'installation.",
    h1: "Location de déshumidificateur à Dison",
    kicker: "Liège · commune textile voisine de Verviers",
    rit: { afstand: "environ 148 km", tijd: "environ une heure et demie" },
    intro: [
      "Dison prolonge Verviers sans transition et en partage aussi l'histoire. **Les lavoirs de laine et les usines textiles** ont longtemps rythmé le travail ici, et autour de ces entreprises se sont élevées, sur les versants, des rues entières de maisons ouvrières.",
      "La section d'**Andrimont** est située plus haut, vers le plateau de Herve. On y trouve davantage de lotissements et de maisons familiales entre prairies et haies. Depuis Aartselaar, il nous faut environ une heure et demie pour rejoindre Dison.",
    ],
    bouw: {
      kop: "Maisons ouvrières dans la vallée, lotissements en bordure",
      alineas: [
        "**Une maison ouvrière à Dison** est étroite, construite en brique ou en moellons, avec une petite cave et souvent une annexe adossée au versant. Lors d'une rénovation en profondeur s'ajoutent une nouvelle chape, un nouveau plafonnage et de l'isolation. Dans une maison aussi petite, l'air est vite saturé, et plus rien ne sèche sans un déshumidificateur qui évacue l'humidité.",
        "**À Andrimont**, il s'agit plus souvent d'agrandissements et de rénovations énergétiques : une extension, une meilleure isolation, de nouveaux châssis. Une maison bien isolée renouvelle moins son air, si bien que l'eau d'une nouvelle chape ne s'échappe plus d'elle-même par les interstices. Avec un déshumidificateur, le planning du poseur de sol reste tenable.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**Pour une maison ouvrière étroite** : compact, 50 litres par jour et 0,75 kW sur une prise standard." },
      { key: "ttk350", waarom: "**Pour une nouvelle extension ou un rez-de-chaussée complet** à Andrimont : 70 litres par jour pour une chape et un plafonnage frais." },
      { key: "teddh20", waarom: "**Pour un chantier d'hiver non chauffé** : ce chauffage de 20 kW amène la pièce à une température où un déshumidificateur à condensation devient efficace. Il demande un raccordement 400 V." },
      { key: "radiaal2250", waarom: "**Orienté au ras d'une nouvelle chape**, il chasse la couche d'air humide qui couvre le sol, pour un séchage plus uniforme." },
    ],
    levering: {
      kop: "Livraison à Dison : le même trajet que vers Verviers",
      alinea:
        "Nous rejoignons Dison **par l'E40 et la sortie de Verviers**, en environ une heure et demie. La livraison se fait sur rendez-vous, à la date de livraison que vous choisissez lors de la réservation. Le technicien installe les appareils pièce par pièce, pose le tuyau d'évacuation vers un point d'écoulement et note les valeurs de départ des murs et du sol.",
    },
    afhalen: {
      kop: "Venir chercher, c'est possible, mais la journée est longue",
      alinea:
        "Notre point d'enlèvement à Aartselaar se trouve à environ une heure et demie de route de Dison, soit **environ trois heures aller-retour**. Un déshumidificateur doit en outre être transporté debout. Si vous devez de toute façon passer dans la région d'Anvers, l'enlèvement est possible, mais la livraison reste généralement le choix logique.",
    },
    buren: ["verviers", "limbourg", "thimister-clermont"],
    faq: [
      {
        q: "Un déshumidificateur entre-t-il dans une maison ouvrière étroite ?",
        a: "Oui. Le plus petit déshumidificateur est compact et fonctionne sur une prise standard : il passe par un couloir étroit et monte un escalier raide. Si la maison est petite, un seul appareil suffit souvent, que nous déplaçons après un certain temps vers un autre étage.",
      },
      {
        q: "Pourquoi ma nouvelle chape sèche-t-elle plus lentement depuis la rénovation ?",
        a: "Une maison bien isolée avec de nouveaux châssis renouvelle beaucoup moins son air. L'eau de la chape reste alors dans la pièce, jusqu'à ce que l'air soit saturé. Un déshumidificateur extrait cette humidité de l'air et l'évacue par un tuyau ou dans un bac de récupération.",
      },
      {
        q: "Livrez-vous aussi à Andrimont ?",
        a: "Oui, Andrimont fait partie de Dison et nous y livrons de la même manière, y compris dans les quartiers vers le plateau. S'il y a des travaux dans la rue ou si l'accès est limité, signalez-le lors de la réservation. Le technicien choisit alors à l'avance où charger et décharger.",
      },
      {
        q: "Un chauffage est-il nécessaire sur un chantier d'hiver ?",
        a: "Oui, si la pièce reste sous quinze degrés. Un déshumidificateur à condensation perd beaucoup de rendement à basse température. Le chauffage de chantier met d'abord le chantier à température, après quoi le déshumidificateur travaille beaucoup plus vite. Le technicien évalue sur place si c'est nécessaire.",
      },
    ],
    realisaties: [],
  },

  eupen: {
    slug: "eupen",
    title: "Déshumidificateur à Eupen, ville haute et basse | Vernast",
    description:
      "Louer un déshumidificateur à Eupen : séchage après rénovation en ville haute ou après inondation en ville basse. Livraison, installation et mesure d'humidité.",
    h1: "Location de déshumidificateur à Eupen",
    kicker: "Liège · capitale de la Communauté germanophone",
    rit: { afstand: "environ 155 km", tijd: "environ une heure et demie" },
    intro: [
      "Eupen est **la capitale de la Communauté germanophone**. Le parlement et le gouvernement de la Communauté y siègent. Depuis notre entrepôt d'Aartselaar, nous y arrivons en **environ une heure et demie**.",
      "La ville compte deux parties. Dans **la ville haute**, sur le versant, se dressent l'église baroque Saint-Nicolas et les demeures cossues des anciens marchands drapiers. **La ville basse** se trouve dans la vallée, au confluent de la Vesdre (Weser) et de la Helle (Hill). Au sud commencent la forêt de l'Hertogenwald et les Hautes Fagnes.",
    ],
    bouw: {
      kop: "Maisons de maître en haut, habitations au bord de l'eau en bas",
      alineas: [
        "Dans la ville haute, il s'agit souvent de **la rénovation d'une ancienne maison de maître**, avec des murs épais, de hauts plafonds et beaucoup de volume. Un nouveau plafonnage sur un vieux mur froid sèche plus lentement que dans une construction neuve. Lors de l'installation, le technicien effectue **une mesure d'humidité**, pour que vous sachiez d'où vous partez.",
        "Dans la ville basse, les maisons sont **tout près de la Vesdre et de la Helle**. Si une cave ou un rez-de-chaussée a été sous eau, vous évacuez d'abord l'eau et la boue, et le séchage commence ensuite. En bordure des Hautes Fagnes, il fait souvent frais et humide. **Sous environ 15 °C, un déshumidificateur à condensation perd du rendement** : dans une pièce non chauffée, il faut donc y ajouter un chauffage.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison de maître en ville haute** : 70 litres par jour dans des espaces jusqu'à environ 400 m³, assez pour un étage en rénovation." },
      { key: "ttk650", waarom: "**Après une inondation en ville basse** : 110 litres par jour, pour une cave ou un rez-de-chaussée avec beaucoup d'humidité dans le sol et les murs." },
      { key: "teddh30", waarom: "Ce chauffage électrique de 30 kW fonctionne sur courant triphasé (400 V). Il met une cave froide à température, pour que le déshumidificateur puisse faire son travail." },
      { key: "radiaal2250", waarom: "Le ventilateur radial souffle au ras d'un sol de cave mouillé et jusque dans les coins, là où l'humidité reste le plus longtemps après une inondation." },
    ],
    levering: {
      kop: "Livraison à Eupen : par Liège et l'E40",
      alinea:
        "Nous roulons **par l'E313 jusqu'à Liège, puis par l'E40 en direction d'Aix-la-Chapelle** jusqu'à la sortie Eupen. Comptez environ une heure et demie. Lors de la réservation, vous choisissez **une date de livraison** et nous convenons avec vous du bon moment. Vous habitez une rue en pente dans la ville haute ? Indiquez si la camionnette peut arriver jusqu'à la porte. Le technicien installe les appareils pièce par pièce et note les valeurs de départ.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : un long trajet depuis Eupen",
      alinea:
        "Notre point d'enlèvement se trouve à environ une heure et demie de route d'Eupen. Pour aller chercher l'appareil puis le rapporter, vous passez donc **deux fois plus de trois heures** sur la route. Un déshumidificateur doit en outre être transporté debout. Pour la plupart des clients à Eupen, la livraison est le meilleur choix.",
    },
    buren: ["raeren", "lontzen", "baelen", "jalhay"],
    faq: [
      {
        q: "Un déshumidificateur fonctionne-t-il dans une cave froide de la ville basse ?",
        a: "Un déshumidificateur à condensation perd du rendement sous environ 15 °C, et une cave non chauffée à Eupen atteint rarement cette température en automne et en hiver. Nous y ajoutons donc un chauffage électrique, ou nous choisissons un déshumidificateur à adsorption qui continue d'absorber l'humidité même au froid.",
      },
      {
        q: "Comment sécher une ancienne maison de maître de la ville haute après une rénovation ?",
        a: "Placez un déshumidificateur par étage, gardez portes et fenêtres fermées et prévoyez plus de temps que dans une construction neuve. Les vieux murs retiennent beaucoup d'eau et la libèrent lentement. Le technicien mesure à l'installation et à la reprise, pour que vous sachiez quand le peintre ou le poseur de sol peut commencer.",
      },
      {
        q: "Livrez-vous aussi à Kettenis ?",
        a: "Oui. Kettenis fait partie de la ville d'Eupen et se trouve dans notre zone de livraison. Indiquez l'adresse complète lors de la réservation et précisez s'il y a une allée d'accès : le technicien saura ainsi où décharger.",
      },
      {
        q: "Pouvez-vous m'aider à choisir les appareils pour ma maison à Eupen ?",
        a: "Oui. Écrivez-nous ou appelez-nous sans hésiter. Nous examinerons ensemble quels appareils conviennent à votre maison et à votre planning.",
      },
    ],
    realisaties: [],
  },

  herve: {
    slug: "herve",
    title: "Louer un déshumidificateur à Herve et Battice | Vernast",
    description:
      "Déshumidificateur à louer à Herve, Battice ou Charneux : fermes en brique entre vergers et prairies du plateau. Installé chez vous, murs et sol mesurés.",
    h1: "Location de déshumidificateur à Herve",
    kicker: "Liège · au cœur du Pays de Herve",
    rit: { afstand: "environ 140 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Herve a donné son nom à **une région et à un fromage**. Le Pays de Herve est un plateau vallonné de prairies, de haies et de vergers haute tige, connu pour le fromage de Herve et le sirop. La petite ville se trouve au milieu de ce paysage, à un peu plus d'une heure de route de notre entrepôt d'Aartselaar.",
      "La commune comprend notamment **Battice, Bolland, Charneux et Xhendelesse**. À Battice, l'E40 et l'E42 se croisent. Autour de cet échangeur, exploitations agricoles, zonings d'activités et nouveaux quartiers résidentiels se côtoient.",
    ],
    bouw: {
      kop: "Fermes en brique et constructions neuves dans les lotissements",
      alineas: [
        "**La ferme typique du Pays de Herve** est en brique rouge, avec des encadrements en pierre calcaire et souvent une cour intérieure. Qui transforme une telle ferme en habitation pose de nouveaux sols dans des étables et des granges qui n'ont jamais été prévues pour y vivre. Il n'y a pas de barrière contre l'humidité en dessous : l'humidité vient donc à la fois du sol et des murs épais.",
        "**Une construction neuve dans un lotissement** près de Battice ou de Herve reste souvent ouverte un certain temps avant que le toit soit fermé. Pendant cette période, la maçonnerie et les hourdis absorbent beaucoup d'eau de pluie. Si vous installez un déshumidificateur dès que l'enveloppe est fermée, le plafonneur peut commencer plus tôt.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une étable ou une grange transformée** : 110 litres par jour pour un grand espace ouvert avec un nouveau sol et d'épais murs en brique." },
      { key: "ttv4500", waarom: "**Contre l'épais mur de façade d'une ferme**, il brise la couche d'air saturée, pour que l'humidité continue de sortir de la brique." },
      { key: "ttk350", waarom: "**Pour une construction neuve dans un lotissement** près de Battice ou de Herve : 70 litres par jour pour amener le gros œuvre au stade de la finition." },
      { key: "teddh30", waarom: "Une ferme sur le plateau se refroidit fortement en hiver. **Ce chauffage de 30 kW** met un grand espace à température et demande un raccordement 400 V." },
    ],
    levering: {
      kop: "Livraison à Herve : tout près de l'échangeur de Battice",
      alinea:
        "Herve se trouve **tout près de l'échangeur de Battice**, à un peu plus d'une heure de route. Vous choisissez une date de livraison lors de la réservation, et nous convenons avec vous de l'heure de livraison. La ferme se trouve sur un chemin de campagne étroit ? Indiquez où une camionnette peut faire demi-tour. Le technicien installe les appareils et pose lui-même l'évacuation.",
    },
    afhalen: {
      kop: "Venir chercher vous-même : plus de deux heures aller-retour",
      alinea:
        "Notre point d'enlèvement à Aartselaar est à un peu plus d'une heure de route de Herve : vous passez donc **plus de deux heures sur la route** pour chaque aller-retour. Pour la transformation d'une ferme, il faut généralement plusieurs appareils, et ils tiennent rarement dans une seule voiture. Faites-les plutôt livrer et reprendre.",
    },
    buren: ["soumagne", "olne", "thimister-clermont", "aubel"],
    faq: [
      {
        q: "Comment sécher une étable transformée en habitation ?",
        a: "Avec un déshumidificateur puissant, un ventilateur et un peu de patience. Une vieille étable n'a pas de barrière contre l'humidité sous le sol, et ses murs épais ont absorbé de l'humidité pendant des années. Le technicien mesure au démarrage où se trouve l'humidité et adapte le dispositif en conséquence, pour que le sol et le plafonnage soient assez secs pour la finition.",
      },
      {
        q: "Quand placer un déshumidificateur dans une construction neuve ?",
        a: "Dès que le toit est fermé et que les châssis sont posés. Plus tôt n'a guère de sens, car vous sécheriez l'air extérieur. À partir de ce moment, un déshumidificateur retire l'eau de pluie de la maçonnerie et des hourdis, pour que le plafonneur commence sur un support plus sec.",
      },
      {
        q: "Livrez-vous dans une ferme isolée près de Charneux ou de Bolland ?",
        a: "Oui. Indiquez l'adresse complète et précisez si la ferme se trouve sur une route étroite ou un chemin de terre. Le technicien sait ainsi à l'avance où il peut s'arrêter et sur quelle distance les appareils doivent être portés.",
      },
      {
        q: "Mon entrepreneur peut-il aussi vous contacter directement ?",
        a: "Oui. Votre entrepreneur ou votre poseur de sol peut aussi nous joindre directement. Écrivez-nous ou appelez-nous sans hésiter.",
      },
    ],
    realisaties: [],
  },

  jalhay: {
    slug: "jalhay",
    title: "Déshumidificateur de chantier à Jalhay et Sart | Vernast",
    description:
      "Louer un déshumidificateur à Jalhay ou Sart : séchage après rénovation ou dans une seconde résidence froide au bord des Hautes Fagnes. Livré, installé, mesuré.",
    h1: "Location de déshumidificateur à Jalhay",
    kicker: "Liège · entre la Gileppe et les Hautes Fagnes",
    rit: { afstand: "environ 155 km", tijd: "environ une heure et demie" },
    intro: [
      "Jalhay se trouve entre Spa et Eupen, à la lisière nord des **Hautes Fagnes**. Sur son territoire se trouve **le lac de barrage de la Gileppe**, avec le célèbre lion de pierre sur le barrage. La commune se compose de Jalhay et de Sart, avec leurs hameaux entre bois et fagnes.",
      "Le climat est ici plus rude qu'en Flandre : il pleut davantage, il gèle plus souvent et l'hiver dure plus longtemps. Ce qui est mouillé à l'intérieur ne sèche donc pas tout seul. Depuis Aartselaar, nous sommes sur place en **environ une heure et demie**.",
    ],
    bouw: {
      kop: "Maisons en pierre et secondes résidences sur les hauteurs",
      alineas: [
        "Les maisons anciennes de Jalhay et de Sart sont construites en pierre naturelle, avec des murs épais et de petites fenêtres. Si vous rénovez et isolez une telle maison, **la nouvelle chape et le plafonnage arrivent sur un support froid**. Sans chauffage, l'air intérieur atteint rarement 15 °C en automne, et **un déshumidificateur à condensation perd alors du rendement**.",
        "On trouve aussi de nombreuses **maisons de vacances et secondes résidences**, vides et non chauffées une partie de l'année. De la condensation se forme alors sur les murs froids, si bien qu'une rénovation commence souvent dans une maison déjà humide. Le technicien mesure à l'installation où se trouve l'humidité.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**Pour une maison froide sur les hauteurs** : le déshumidificateur à adsorption continue d'absorber l'humidité à des températures où un appareil à condensation ne fait plus grand-chose." },
      { key: "teddh30", waarom: "Ce chauffage de 30 kW sur courant triphasé (400 V) réchauffe une seconde résidence non chauffée, pour que le déshumidificateur ait prise sur l'humidité de construction." },
      { key: "ttk350", waarom: "Pour une maison en pierre rénovée à Sart : 70 litres par jour pour un étage avec une nouvelle chape." },
      { key: "ttv4500", waarom: "Contre un mur épais couvert de condensation, le ventilateur garde l'air en mouvement, pour que l'humidité ne stagne pas contre la paroi." },
    ],
    levering: {
      kop: "Livraison à Jalhay : par Verviers jusqu'au plateau",
      alinea:
        "Nous roulons par Liège et l'E42 jusqu'à Verviers, puis vers Jalhay ou Sart : environ une heure et demie au total. Lors de la réservation, vous choisissez **une date de livraison** ; nous convenons de l'heure avec vous. En hiver, la neige ou le verglas sont possibles ici. Indiquez donc **si votre allée est facilement accessible**.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : plus de trois heures depuis Jalhay",
      alinea:
        "Avec environ une heure et demie par trajet, venir chercher un appareil vous prend **plus de trois heures** de route. Pendant les mois froids, il vous faut ici généralement aussi un chauffage, et deux ou trois appareils tiennent rarement dans une voiture ordinaire. La livraison est ici le choix logique.",
    },
    buren: ["eupen", "baelen", "spa", "theux", "limbourg"],
    faq: [
      {
        q: "Un déshumidificateur fonctionne-t-il dans une maison froide près des Hautes Fagnes ?",
        a: "Un déshumidificateur à condensation a besoin de chaleur : sous environ 15 °C, son rendement baisse fortement. C'est pourquoi, à Jalhay, nous combinons souvent un déshumidificateur et un chauffage, ou nous choisissons un déshumidificateur à adsorption qui continue de fonctionner au froid.",
      },
      {
        q: "Ma maison de vacances à Sart est humide après l'hiver. Par quoi commencer ?",
        a: "D'abord chauffer et mesurer. Une maison restée vide et non chauffée pendant des mois présente souvent de la condensation sur les murs froids. En combinant un chauffage et un déshumidificateur, vous éliminez cette humidité. La mesure montre ensuite si de l'humidité continue d'entrer de l'extérieur.",
      },
      {
        q: "Livrez-vous aussi à Jalhay en hiver ?",
        a: "Oui. Comme le plateau peut être enneigé ou verglacé, nous fixons en hiver le moment de livraison avec un peu plus de marge. Signalez lors de la réservation si votre allée est raide ou difficile d'accès : le technicien saura ainsi à l'avance comment rentrer les appareils.",
      },
      {
        q: "Combien de temps dure le séchage d'une maison en pierre ?",
        a: "Plus longtemps que dans une construction neuve, car la pierre naturelle retient beaucoup d'eau et l'air du plateau est froid et humide. La durée exacte dépend des travaux et de la température intérieure. Faites mesurer à la reprise si les murs et la chape sont assez secs pour la finition.",
      },
    ],
    realisaties: [],
  },

  kelmis: {
    slug: "kelmis",
    title: "Location de déshumidificateur à La Calamine | Vernast",
    description:
      "Louer un déshumidificateur à La Calamine, Hergenrath ou Neu-Moresnet : séchage après rénovation d'une maison ouvrière ou d'une cave humide. Livré et mesuré.",
    h1: "Location de déshumidificateur à La Calamine",
    kicker: "Liège · le village du zinc de Moresnet neutre",
    rit: { afstand: "environ 150 km", tijd: "environ une heure et demie" },
    intro: [
      "La Calamine, **Kelmis** en allemand, doit son nom à la calamine, le minerai de zinc longtemps exploité ici. De 1816 à 1920, la mine se trouvait dans **Moresnet neutre**, un petit territoire administré conjointement par ses voisins. Hergenrath et Neu-Moresnet font aussi partie de la commune.",
      "La Calamine se trouve dans la Communauté germanophone, contre la frontière allemande. Depuis Aartselaar, nous y sommes en **environ une heure et demie**. Nous apportons les appareils jusque chez vous et mesurons au démarrage l'humidité des murs et du sol.",
    ],
    bouw: {
      kop: "Maisons ouvrières et vallée de la Gueule",
      alineas: [
        "Autour de l'ancienne mine, on a construit **des rangées de maisons ouvrières** en brique. Ces maisons n'ont souvent **aucune barrière contre l'humidité** et une petite cave. Si vous y refaites une salle de bain ou le rez-de-chaussée, la nouvelle chape et le nouveau plafonnage sèchent contre un vieux mur froid. Cela demande plus de temps que dans une construction neuve.",
        "La **Gueule** traverse la commune, et dans les parties basses le long de la rivière, le sol est humide. Une cave y est parfois mouillée après de fortes pluies, indépendamment d'éventuels travaux. **Le technicien mesure à l'installation** si l'humidité vient des travaux ou de l'extérieur. C'est ce qui détermine si le séchage aide durablement.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**Pour une maison mitoyenne étroite** : le déshumidificateur compact retire 50 litres par jour dans des espaces jusqu'à 250 m³ et monte facilement un escalier raide." },
      { key: "ttk350", waarom: "Pour un rez-de-chaussée avec une chape fraîche : 70 litres par jour dans des espaces jusqu'à environ 400 m³." },
      { key: "ttv4500", waarom: "Le ventilateur déplace 4 500 m³ d'air par heure le long d'un mur de façade mouillé, pour que la couche d'air humide ne stagne pas contre la paroi." },
      { key: "revolution", waarom: "**Pour une cave froide dans la vallée de la Gueule** : ce déshumidificateur à adsorption fonctionne aussi à basse température et sèche par des gaines." },
    ],
    levering: {
      kop: "Livraison à La Calamine : par Liège et l'E40",
      alinea:
        "Nous roulons **par Liège et l'E40 en direction d'Aix-la-Chapelle**, puis prenons la sortie vers La Calamine. Hors des heures de pointe, cela prend environ une heure et demie. Lors de la réservation, vous choisissez **une date de livraison**, et la livraison elle-même se fait sur rendez-vous. Le technicien installe les appareils pièce par pièce et note les valeurs d'humidité au démarrage.",
    },
    afhalen: {
      kop: "Venir chercher vous-même ? Un long trajet depuis La Calamine",
      alinea:
        "Notre entrepôt d'Aartselaar se trouve à environ une heure et demie de route. Aller chercher et rapporter l'appareil vous coûte donc au total **environ six heures** sur la route. Un déshumidificateur doit aussi rester debout dans la voiture. C'est pourquoi les clients de La Calamine choisissent presque toujours la livraison.",
    },
    buren: ["plombieres", "lontzen", "raeren"],
    faq: [
      {
        q: "Ma maison à La Calamine est une ancienne maison ouvrière. À quoi dois-je faire attention ?",
        a: "Surtout aux murs sans barrière contre l'humidité. Après une rénovation, les nouveaux travaux sèchent, mais un vieux mur en brique peut continuer à tirer l'humidité du sol. Le technicien mesure au démarrage et à la reprise, pour que vous puissiez distinguer l'humidité de construction de l'humidité ascensionnelle.",
      },
      {
        q: "Livrez-vous aussi à Hergenrath et à Neu-Moresnet ?",
        a: "Oui, les deux villages font partie de la commune de La Calamine et se trouvent dans notre zone de livraison. Indiquez l'adresse complète lors de la réservation, et nous convenons avec vous du moment de livraison.",
      },
      {
        q: "Combien de temps un déshumidificateur reste-t-il dans une cave près de la Gueule ?",
        a: "Cela dépend de l'humidité des murs et du fait que de l'eau continue ou non d'entrer de l'extérieur. Si l'humidité revient après chaque averse, faites d'abord traiter la cause. La mesure à l'installation montre de quel cas il s'agit.",
      },
      {
        q: "Combien coûte un déshumidificateur à La Calamine ?",
        a: "Cela dépend du nombre d'appareils et de la durée de location. Avec le calculateur de notre site, vous composez un pack de séchage et voyez immédiatement le prix. Vous hésitez sur les appareils nécessaires ? Appelez-nous ou écrivez-nous.",
      },
    ],
    realisaties: [],
  },

  lierneux: {
    slug: "lierneux",
    title: "Déshumidificateur à Lierneux, plateau de la Lienne | Vernast",
    description:
      "Déshumidificateur à louer à Lierneux, Bra ou Arbrefontaine : appareils et chauffages pour fermes et constructions neuves sur le plateau froid de la Lienne.",
    h1: "Location de déshumidificateur à Lierneux",
    kicker: "Province de Liège · le plateau de la Lienne",
    rit: { afstand: "environ 185 km", tijd: "environ deux heures" },
    intro: [
      "Lierneux se trouve **sur un haut plateau au sud de la province de Liège**, à la limite de la province de Luxembourg. Depuis Aartselaar, il faut compter environ deux heures de route. La commune est traversée par **la Lienne**, qui se jette plus au nord dans l'Amblève.",
      "C'est une commune rurale aux villages dispersés comme Bra et Arbrefontaine, entourés de prairies et de forêts. On y trouve **des fermes en moellons**, des maisons de village aux toits d'ardoise et, en bordure des villages, des habitations plus récentes.",
    ],
    bouw: {
      kop: "Des fermes sur les hauteurs, avec un hiver qui dure",
      alineas: [
        "Sur le plateau, il fait plus froid qu'en Flandre et l'hiver dure plus longtemps. Une construction neuve ou une extension mise sous toit en automne reste ensuite des mois dans un air froid et humide. La chape et le plafonnage ne sèchent alors pratiquement pas d'eux-mêmes. **Vous voulez continuer à travailler en hiver ? Il faut alors chauffer et déshumidifier.**",
        "Dans **les anciennes fermes**, l'étable ou la grange est souvent intégrée au logement. Une telle transformation apporte d'un coup beaucoup d'eau dans le bâtiment : une nouvelle chape, un nouveau plafonnage et parfois une dalle de béton. Cela demande un déshumidificateur d'une capacité suffisante, et une mesure d'humidité avant que le poseur de sol commence.",
      ],
    },
    toestellen: [
      { key: "teddh30", waarom: "**Pour une construction neuve sur le plateau qui doit avancer en hiver** : ce chauffage de chantier de 30 kW met l'espace à température. Il fonctionne sur courant triphasé de 400 V." },
      { key: "ttk650", waarom: "Pour une ferme avec une grange transformée et beaucoup de chape fraîche : 110 litres par jour, pour des espaces jusqu'à 600 m³." },
      { key: "ttk350", waarom: "Pour une maison de village à Bra ou Arbrefontaine rénovée étage par étage : 70 litres par jour, jusqu'à 400 m³." },
      { key: "radiaal2250", waarom: "**Sur une grande dalle de béton fraîche dans une étable transformée** : le ventilateur radial souffle de manière ciblée sur la surface, pour que le sol sèche uniformément." },
    ],
    levering: {
      kop: "Livraison à Lierneux : deux heures de route, un rendez-vous",
      alinea:
        "Lierneux représente pour nous un long trajet d'environ deux heures. Quand c'est possible, nous le combinons avec d'autres adresses de la région. Vous choisissez une date de livraison lors de la réservation, puis **nous convenons de la livraison avec vous**, comme pour toute adresse en Wallonie. Le technicien installe les appareils et pose l'évacuation vers l'extérieur ou vers un avaloir.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : quatre heures de route",
      alinea:
        "Depuis Lierneux, un aller-retour jusqu'à notre point d'enlèvement vous prend environ quatre heures. C'est une journée de travail que vous préférez passer sur le chantier. **Avec un pack de séchage**, nous installons les appareils et les reprenons à la fin.",
    },
    buren: ["trois-ponts", "vielsalm", "manhay"],
    faq: [
      {
        q: "Puis-je continuer à construire en hiver sur le plateau de Lierneux ?",
        a: "Oui, si vous chauffez et déshumidifiez. Un chauffage de chantier met l'espace à température, un déshumidificateur retire l'humidité de l'air. Sans cette combinaison, une chape dans un gros œuvre froid reste mouillée pendant des semaines et le poseur de sol doit attendre.",
      },
      {
        q: "De combien d'appareils ai-je besoin pour une grange transformée ?",
        a: "Cela dépend du volume et de la quantité de travaux humides réalisés en même temps. Une grande grange avec une chape complète demande souvent un gros déshumidificateur et un ventilateur. Indiquez la surface et la hauteur lors de la réservation, et nous composerons la combinaison.",
      },
      {
        q: "Livrez-vous jusqu'à Lierneux ?",
        a: "Oui, même si, à environ deux heures d'Aartselaar, c'est l'un de nos trajets les plus longs. C'est pourquoi nous combinons la livraison, quand c'est possible, avec d'autres adresses dans les Ardennes et convenons de l'heure avec vous.",
      },
      {
        q: "Où va l'eau du déshumidificateur dans une ferme sans avaloir ?",
        a: "Dans le bac de récupération, que vous videz alors vous-même, ou par un tuyau vers l'extérieur ou vers un évier. Sur un chantier très humide, un tuyau est plus pratique, sinon le bac se remplit plusieurs fois par jour. Le technicien pose l'évacuation lors de l'installation.",
      },
    ],
    realisaties: [],
  },

  limbourg: {
    slug: "limbourg",
    title: "Louer un déshumidificateur à Limbourg (Vesdre) | Vernast",
    description:
      "Déshumidificateur à louer à Limbourg, sur la Vesdre : la ville haute sur son rocher, Dolhain dans la vallée et Goé. Installé par un technicien qui mesure.",
    h1: "Location de déshumidificateur à Limbourg",
    kicker: "Liège · ancienne capitale du duché de Limbourg",
    rit: { afstand: "environ 150 km", tijd: "un peu plus d'une heure et demie" },
    intro: [
      "Limbourg se trouve sur la Vesdre et fut autrefois **la capitale du duché de Limbourg**. La vieille ville haute, sur un rocher au-dessus de la rivière, avec son église et ses remparts, en garde le souvenir. Depuis Aartselaar, il nous faut un peu plus d'une heure et demie pour rejoindre Limbourg.",
      "En contrebas, dans la vallée, se trouve **Dolhain**, où vivent la plupart des habitants et où le chemin de fer et la route longent la rivière. Ici aussi, les inondations de juillet 2021 ont causé beaucoup de dégâts. Goé et Bilstain sont des villages entre bois et prairies.",
    ],
    bouw: {
      kop: "Une ville haute sur le rocher et une ville basse au bord de l'eau",
      alineas: [
        "**Dans la vieille ville haute** se dressent des maisons séculaires aux murs épais en pierre naturelle. Une rénovation s'y fait souvent avec un enduit à la chaux et des matériaux traditionnels, et **ceux-ci sèchent plus lentement qu'un plafonnage moderne**. Qui termine trop tôt s'expose à des taches ou à une peinture qui se décolle.",
        "**À Dolhain**, les maisons sont proches de la Vesdre, avec des caves et des rez-de-chaussée qui sont les premiers mouillés en cas de crue. Là où l'on rénove après 2021, les murs et les sols doivent sécher à fond avant que la finition commence. Le technicien mesure au démarrage la quantité d'humidité qu'ils contiennent encore.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison à Dolhain**, étage par étage : 70 litres par jour pour sécher les murs et les sols après des travaux de remise en état." },
      { key: "revolution", waarom: "**Pour une cave froide et humide près de la Vesdre** : ce déshumidificateur à adsorption continue de fonctionner là où un appareil à condensation n'obtient plus grand-chose." },
      { key: "ttv4500", waarom: "**Contre les murs en pierre naturelle de la ville haute**, il garde l'air en mouvement le long de la surface, pour que l'enduit à la chaux sèche uniformément." },
      { key: "ttk170", waarom: "Pour une seule pièce dans une vieille maison de la ville haute : **assez compact pour un escalier étroit** et raccordable à une prise standard." },
    ],
    levering: {
      kop: "Livraison à Limbourg : la ville haute ou la vallée",
      alinea:
        "Nous roulons **par l'E40** jusqu'à Verviers, puis entrons dans la vallée de la Vesdre : un peu plus d'une heure et demie au total. Vous choisissez une date de livraison lors de la réservation, et nous livrons sur rendez-vous. Dans la ville haute, les rues sont étroites et pavées. Indiquez à l'avance où le technicien peut se garer : il prendra alors un diable avec lui.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : plus de trois heures aller-retour",
      alinea:
        "Notre point d'enlèvement se trouve à un peu plus d'une heure et demie de Limbourg, soit **plus de trois heures aller-retour**. Pour un seul appareil compact, c'est faisable si vous devez de toute façon passer dans la région d'Anvers. Dans la plupart des cas, la livraison vous épargne une demi-journée.",
    },
    buren: ["verviers", "dison", "baelen", "thimister-clermont"],
    faq: [
      {
        q: "Cette page concerne-t-elle la province de Limbourg ?",
        a: "Non. Cette page concerne Limbourg, la petite ville sur la Vesdre en province de Liège, avec Dolhain, Goé et Bilstain. Pour Hasselt, Genk ou une autre commune de la province de Limbourg, vous trouverez une page dédiée via la liste des provinces.",
      },
      {
        q: "Comment sécher une maison enduite à la chaux dans la vieille ville haute ?",
        a: "Calmement et uniformément. L'enduit à la chaux a besoin de temps pour durcir et ne doit pas sécher trop vite. Nous ne plaçons pas le déshumidificateur trop près du mur et gardons le ventilateur à distance. Le technicien mesure entre-temps, pour qu'on ne peigne pas trop tôt.",
      },
      {
        q: "Notre cave à Dolhain reste humide. Qu'apporte un déshumidificateur ?",
        a: "Il retire l'humidité de l'air et des parois, pour que la cave reste utilisable et que les moisissures aient moins de chances de se développer. Si de l'eau traverse le mur depuis l'extérieur, un déshumidificateur ne règle pas ce problème. Le technicien le vérifie lors de l'installation.",
      },
      {
        q: "Livrez-vous à Goé et à Bilstain ?",
        a: "Oui, nous livrons dans toute la commune de Limbourg, y compris à Goé et à Bilstain, en dehors de la vallée. Indiquez l'adresse complète et précisez si la maison se trouve sur une route étroite ou en pente, pour que le technicien puisse préparer son trajet.",
      },
    ],
    realisaties: [],
  },

  lontzen: {
    slug: "lontzen",
    title: "Location de déshumidificateur à Lontzen et Walhorn | Vernast",
    description:
      "Louer un déshumidificateur à Lontzen, Herbesthal ou Walhorn : séchage après la transformation d'une ferme ou d'une étable, et en neuf. Livré, installé, mesuré.",
    h1: "Location de déshumidificateur à Lontzen",
    kicker: "Liège · villages entre Eupen et la frontière",
    rit: { afstand: "environ 150 km", tijd: "environ une heure et demie" },
    intro: [
      "Lontzen est une commune rurale du nord de la Communauté germanophone, avec les villages de **Lontzen, Herbesthal et Walhorn**. Herbesthal fut longtemps une **gare frontière** connue sur la ligne de Liège à Aix-la-Chapelle.",
      "Entre les villages s'étendent des prairies bordées de haies et des **fermes** dispersées. Beaucoup de maisons sont isolées, et plus d'une était autrefois une étable. Depuis Aartselaar, nous sommes chez vous en **environ une heure et demie**.",
    ],
    bouw: {
      kop: "Fermes, étables transformées et constructions neuves à la campagne",
      alineas: [
        "À Lontzen, beaucoup de travaux tournent autour d'**une ancienne ferme ou étable qui devient une habitation**. Les murs sont épais et sans coulisse, et on y ajoute de l'isolation et un nouveau sol. Vous apportez ainsi beaucoup d'eau dans un bâtiment déjà froid par nature. Pour un grand volume, mieux vaut travailler avec un déshumidificateur plus puissant et un ventilateur.",
        "En bordure des villages apparaissent aussi **de nouvelles maisons**. Là, vous voulez surtout que **la chape et le plafonnage soient secs à temps** pour le poseur de sol ou le peintre. En automne, il fait ici froid et humide, et un chantier sèche alors lentement sans aide.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**Pour une grande étable ou grange transformée** : 110 litres par jour dans des espaces jusqu'à environ 600 m³." },
      { key: "ttk350", waarom: "Pour une maison neuve en bordure de village : 70 litres par jour, largement assez pour un rez-de-chaussée avec une chape fraîche." },
      { key: "radiaal2250", waarom: "Ce ventilateur radial souffle au ras d'un nouveau sol, pour que l'air au-dessus de la chape reste en mouvement." },
      { key: "teddh20", waarom: "Chauffage électrique de 20 kW sur courant triphasé (400 V). Il porte une ferme non chauffée au-dessus de 15 °C, là où un déshumidificateur à condensation fonctionne bien." },
    ],
    levering: {
      kop: "Livraison à Lontzen : par l'E40",
      alinea:
        "Lontzen se trouve tout près de l'E40. Nous roulons par Liège en direction d'Aix-la-Chapelle, ce qui prend environ une heure et demie. Lors de la réservation, vous choisissez **une date de livraison** ; nous convenons avec vous de l'heure précise. Votre ferme a une longue allée ou une cour ? Indiquez à l'avance **où la camionnette peut se garer**. Le technicien installe les appareils pièce par pièce.",
    },
    afhalen: {
      kop: "Venir chercher, c'est possible, mais cela vous coûte une demi-journée",
      alinea:
        "Notre point d'enlèvement à Aartselaar se trouve à environ une heure et demie de route de Lontzen : l'aller-retour vous prend donc **plus de trois heures**. Pour une transformation avec plusieurs appareils, une voiture ordinaire suffit en outre rarement. La livraison est ici la solution la plus simple.",
    },
    buren: ["kelmis", "raeren", "eupen", "welkenraedt"],
    faq: [
      {
        q: "Je transforme une ancienne ferme à Lontzen. De combien d'appareils ai-je besoin ?",
        a: "Cela dépend du volume, de la quantité de chape et de plafonnage et de la température intérieure. Un grand espace haut demande généralement un déshumidificateur puissant avec un ventilateur à côté. Indiquez la surface et la hauteur lors de la réservation, et nous composerons un pack.",
      },
      {
        q: "Livrez-vous aussi à Walhorn et à Herbesthal ?",
        a: "Oui, tous les villages de la commune de Lontzen se trouvent dans notre zone de livraison. Indiquez l'adresse complète et précisez s'il y a une cour ou une allée, pour que le technicien sache où décharger.",
      },
      {
        q: "Pourquoi une étable transformée sèche-t-elle si lentement ?",
        a: "Les murs sont épais, souvent sans coulisse, et retiennent beaucoup d'eau. De plus, une étable ou une grange est rarement chauffée. L'air froid absorbe peu d'humidité : sans déshumidificateur ni chauffage, les travaux restent mouillés des semaines de plus que nécessaire.",
      },
      {
        q: "La chape doit-elle être entièrement sèche avant que le poseur de sol commence ?",
        a: "C'est le poseur de sol qui détermine quelle humidité résiduelle son revêtement supporte. Une couche superficielle sèche en dit peu sur le cœur de la chape. Faites donc mesurer avant de faire poser le sol, et laissez le déshumidificateur tourner jusque-là.",
      },
    ],
    realisaties: [],
  },

  malmedy: {
    slug: "malmedy",
    title: "Louer un déshumidificateur de chantier à Malmedy | Vernast",
    description:
      "Location de déshumidificateur à Malmedy, au pied des Hautes Fagnes : appareils et chauffages pour maisons d'après-guerre et maisons en pierre. Sur rendez-vous.",
    h1: "Location de déshumidificateur à Malmedy",
    kicker: "Province de Liège · ville sur la Warche, au pied des Hautes Fagnes",
    rit: { afstand: "environ 175 km", tijd: "près de deux heures" },
    intro: [
      "Malmedy se trouve dans la vallée où **la Warchenne se jette dans la Warche**, au bord des Hautes Fagnes. Depuis notre entrepôt d'Aartselaar, il faut compter près de deux heures de route. La ville est devenue belge en 1920 et est francophone, avec des facilités linguistiques pour les germanophones. Elle est connue pour sa cathédrale et son **Cwarmê**, le carnaval de Malmedy.",
      "Le centre a été lourdement bombardé en décembre 1944 et largement reconstruit après la guerre. On y trouve donc beaucoup de **maisons urbaines d'après-guerre** à côté de maisons plus anciennes en moellons. Autour de la ville se trouvent des villages comme Bévercé et Xhoffraix, plus haut sur les versants, vers les fagnes.",
    ],
    bouw: {
      kop: "Maisons d'après-guerre dans la vallée, maisons en pierre vers les fagnes",
      alineas: [
        "Beaucoup de **maisons d'après-guerre du centre** font aujourd'hui l'objet d'une rénovation en profondeur : une nouvelle salle de bain, une chape, des conduites dans les murs. Ces travaux apportent beaucoup d'eau dans la maison. Si la maison a une cave dans la vallée, vérifiez d'abord si l'humidité vient des travaux ou de l'extérieur. **L'humidité de construction peut être séchée**, l'eau souterraine qui s'infiltre, non.",
        "Plus haut sur les versants, l'hiver est plus long et plus humide qu'en Flandre. Une maison en pierre transformée là-haut en automne ne sèche pas fenêtres ouvertes, car l'air extérieur est lui-même froid et humide. **Chauffez d'abord la pièce, puis séchez.** Un déshumidificateur à condensation a besoin de plus de 15 °C pour bien fonctionner.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**Pour une maison d'après-guerre du centre** rénovée étage par étage : 70 litres par jour, pour des espaces jusqu'à 400 m³." },
      { key: "teddh30", waarom: "Pour une transformation en hiver plus haut sur les versants : ce chauffage de chantier de 30 kW porte un espace froid au-dessus de 15 °C. Il demande un raccordement 400 V." },
      { key: "revolution", waarom: "**Pour une cave fraîche dans la vallée** : ce déshumidificateur à adsorption continue de fonctionner là où la température reste basse." },
      { key: "ttv4500", waarom: "Garde l'air en mouvement le long d'un mur épais en moellons, pour que le déshumidificateur absorbe l'humidité plus rapidement." },
    ],
    levering: {
      kop: "Livraison à Malmedy : un long trajet, bien planifié",
      alinea:
        "Malmedy se trouve à près de deux heures de route d'Aartselaar. C'est pourquoi nous combinons le trajet, quand c'est possible, avec d'autres adresses de la région. Vous choisissez une date de livraison lors de la réservation ; **en Wallonie, nous livrons sur rendez-vous**. Le technicien installe les appareils dans les bonnes pièces et pose l'évacuation. Votre chantier est proche du circuit ? Tenez compte d'une circulation dense pendant un week-end de course.",
    },
    afhalen: {
      kop: "Enlèvement depuis Malmedy : près de quatre heures aller-retour",
      alinea:
        "Venir chercher un appareil à Aartselaar vous coûte, depuis Malmedy, près de deux heures par trajet, soit **près de quatre heures aller-retour**. Pour le rapporter, vous refaites la même distance. Pour la plupart des chantiers à Malmedy, la livraison est donc le choix le plus pratique.",
    },
    buren: ["weismes", "stavelot", "jalhay"],
    faq: [
      {
        q: "Livrez-vous aussi dans les villages au-dessus de Malmedy ?",
        a: "Oui, Bévercé, Xhoffraix et les autres villages de la commune font aussi partie de notre zone de livraison. S'il y a de la neige sur la route qui y monte, nous prenons contact avec vous pour ajuster la livraison.",
      },
      {
        q: "Qui doit être présent lors de la livraison à Malmedy ?",
        a: "Indiquez lors de la réservation qui accueille le technicien sur place et comment nous pouvons joindre cette personne. Pour toute question, écrivez-nous ou appelez-nous sans hésiter.",
      },
      {
        q: "Comment sécher la cave d'une maison d'après-guerre après une rénovation ?",
        a: "Gardez la porte de la cave fermée et choisissez un déshumidificateur qui fonctionne aussi dans une pièce fraîche, éventuellement avec un ventilateur dirigé vers le mur le plus mouillé. Une cave dans la vallée se réchauffe rarement, et un déshumidificateur à condensation seul est alors souvent insuffisant.",
      },
      {
        q: "Pourquoi le séchage prend-il plus de temps près des Hautes Fagnes qu'en Flandre ?",
        a: "Il y fait plus froid et plus humide. L'air froid absorbe moins d'humidité, et un mur en pierre libère lentement son eau. Chauffez la pièce, gardez portes et fenêtres fermées et laissez le déshumidificateur faire son travail : vous rattraperez ainsi une grande partie de cette différence.",
      },
    ],
    realisaties: [],
  },

  olne: {
    slug: "olne",
    title: "Déshumidificateur de chantier à louer à Olne | Vernast",
    description:
      "Déshumidificateur à louer à Olne et Saint-Hadelin : vieilles maisons en pierre entre la vallée de la Vesdre et le plateau de Herve. Livré, installé et réglé.",
    h1: "Location de déshumidificateur à Olne",
    kicker: "Liège · entre la Vesdre et le plateau",
    rit: { afstand: "environ 140 km", tijd: "un peu plus d'une heure" },
    intro: [
      "Olne se trouve sur le versant entre **la vallée de la Vesdre** et le plateau de Herve. Le vieux village s'étend autour de l'église, et au-delà se trouvent des hameaux comme Saint-Hadelin, entre prairies et bois. Depuis Aartselaar, nous mettons un peu plus d'une heure pour y arriver.",
      "Beaucoup de maisons à Olne sont anciennes et construites en pierre naturelle ou en brique, **avec des murs pleins sans coulisse**. De plus, le terrain descend presque partout en pente vers la vallée.",
    ],
    bouw: {
      kop: "Des maisons en pierre à flanc de versant",
      alineas: [
        "**Un mur en pierre naturelle sans coulisse** forme un seul bloc de l'intérieur à l'extérieur. L'humidité qui y pénètre occupe toute l'épaisseur et peut s'évaporer aussi bien vers l'intérieur que vers l'extérieur. Après un nouveau plafonnage ou une fuite, cela prend du temps. Un déshumidificateur garde l'air intérieur sec, pour que l'humidité continue d'être attirée vers l'intérieur et soit évacuée.",
        "**À cause de la pente**, l'étage inférieur est souvent partiellement enterré. C'est là que l'humidité apparaît en premier, le long du mur contre terre et dans le sol. Lors de l'installation, le technicien vérifie s'il s'agit d'humidité de construction qu'un déshumidificateur peut éliminer, ou d'eau qui continue d'entrer de l'extérieur.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**Pour l'étage inférieur enterré dans la pente**, qui reste frais toute l'année : ce déshumidificateur à adsorption continue de travailler là où un appareil à condensation a peu de rendement." },
      { key: "ttv4500", waarom: "**Contre un mur en pierre naturelle sans coulisse**, il garde l'air en mouvement le long de la surface, pour que l'humidité continue de sortir du mur." },
      { key: "ttk350", waarom: "**Pour une rénovation complète** d'une maison de village, étage par étage : 70 litres par jour pour un nouveau plafonnage et de nouveaux sols." },
      { key: "teddh20", waarom: "**Pour un chantier plus petit et non chauffé** dans une vieille maison en pierre : 20 kW pour amener l'espace à température de travail, sur un raccordement 400 V." },
    ],
    levering: {
      kop: "Livraison à Olne : les derniers kilomètres à flanc de versant",
      alinea:
        "Nous roulons un peu plus d'une heure, **par l'E313 et l'E40**, et le dernier tronçon emprunte les routes qui montent de la vallée vers le plateau. Vous choisissez la date de livraison lors de la réservation, et nous convenons de l'heure avec vous. La maison se trouve dans une rue étroite sans place de stationnement ? Indiquez à l'avance où le technicien peut charger et décharger.",
    },
    afhalen: {
      kop: "Enlèvement à Aartselaar : rarement la peine",
      alinea:
        "Olne se trouve à un peu plus d'une heure de notre point d'enlèvement : vous roulez donc **plus de deux heures aller-retour**. Un déshumidificateur doit en outre être transporté debout, ce qui est rarement possible dans une petite voiture. Laissez-nous plutôt livrer : le technicien mesure alors tout de suite où se trouve l'humidité.",
    },
    buren: ["soumagne", "herve", "pepinster", "trooz"],
    faq: [
      {
        q: "Combien de temps faut-il pour sécher un mur en pierre sans coulisse ?",
        a: "Plus longtemps qu'un mur creux moderne, car l'humidité occupe toute l'épaisseur. Comptez plutôt en semaines qu'en jours. Un déshumidificateur avec un ventilateur près du mur accélère sensiblement le processus, et le technicien mesure à la reprise combien d'humidité il reste.",
      },
      {
        q: "Mon rez-de-chaussée est à moitié enterré dans la pente. Un déshumidificateur aide-t-il ?",
        a: "Il aide contre l'humidité de construction et contre l'air humide qu'un tel étage attire. Si de l'eau traverse le mur contre terre, il garde la pièce utilisable, mais il n'arrête pas l'arrivée d'eau. Le technicien fait cette distinction lors de l'installation.",
      },
      {
        q: "Livrez-vous aussi à Saint-Hadelin et dans les autres hameaux ?",
        a: "Oui, nous livrons dans tout Olne. Dans les hameaux, les routes sont étroites et parfois raides. Signalez-le lors de la réservation : le technicien saura quel véhicule utiliser et s'il doit prendre un diable.",
      },
      {
        q: "Un déshumidificateur peut-il tourner dans une maison où nous habitons encore ?",
        a: "Oui. Les appareils émettent un bruit régulier, comparable à celui d'un gros ventilateur. Placez-les dans la pièce en rénovation et gardez la porte fermée. Le déshumidificateur travaille ainsi à cet endroit, et le reste de la maison reste calme.",
      },
    ],
    realisaties: [],
  },
};
