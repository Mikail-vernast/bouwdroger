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
};
