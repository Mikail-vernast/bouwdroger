import { routeFr, dagFr, LADDER_FR, POMP_FR, provinceFr, type RegioFr } from "./basis.js";

/** Franse tekst van de provinciepagina Luik, vertaald uit regios.ts. */
export const REGIO: RegioFr = {
  ...routeFr("luik"),
  dans: "en province de Liège",
  title: "Location déshumidificateur en province de Liège | Vernast",
  description:
    "Déshumidificateur à louer en province de Liège : Huy, Verviers, Seraing, Spa et les Cantons de l'Est. Livré, installé et repris depuis Aartselaar, sans caution.",
  h1: "Location de déshumidificateur en province de Liège",
  kicker: "Province de Liège · 84 communes · de Hannut aux Cantons de l'Est",
  intro: [
    "Vous cherchez un déshumidificateur de chantier en province de Liège, pour une maison de maître en rénovation, une chape fraîche en Hesbaye ou un rez-de-chaussée encore humide après une crue ? Vernast installe les appareils sur votre chantier, de Hannut à Eupen et de Visé à Saint-Vith. **La livraison, l'installation et la reprise font partie de votre pack de séchage.** Nous ne cachons pas la distance : **Hannut et Waremme sont à environ une heure par l'E40**, la ville de Liège à une heure et quart, Verviers et Spa à une heure et demie, et les Cantons de l'Est autour de Saint-Vith à un peu plus de deux heures. Cette page concerne toute la province ; la ville de Liège a sa propre page, avec les quartiers et les anciennes communes à l'intérieur des limites de la ville.",
  ],
  bouw: {
    kop: "Pourquoi loue-t-on un déshumidificateur de chantier en province de Liège ?",
    alineas: [
      "**L'ouest de la province, c'est la Hesbaye liégeoise**, autour de Hannut, Waremme, Braives et Geer : un plateau limoneux plat, avec des betteraves sucrières, des céréales et de grandes fermes en carré autour d'une cour fermée. Qui divise une telle ferme en logements ou transforme les étables en espace de vie coule de nouvelles chapes sur une grande surface. En bordure des villages, de nouveaux lotissements apparaissent aussi, et là, c'est le séchage classique d'une construction neuve : un plafonnage et une chape qui apportent ensemble des centaines de litres d'eau dans la maison.",
      "**Le long de la Meuse, de Huy à Herstal en passant par Seraing et Flémalle, se trouve le cœur historique de l'industrie lourde wallonne.** Hauts fourneaux, laminoirs et charbonnages ont marqué le paysage pendant un siècle et demi, et entre les usines, on a bâti des rangées de maisons ouvrières à flanc de coteau. Beaucoup de ces maisons sont aujourd'hui rénovées. Elles ont des façades minces, des caves sous le niveau de la rue et des murs restés des années sans chauffage, et une fois l'ancien plafonnage décapé, la maçonnerie s'avère souvent plus humide que prévu.",
      "**Dans la ville de Liège elle-même, on trouve des maisons de maître du XIXe siècle avec un souterrain** : un niveau à demi enterré où se trouvaient autrefois la cuisine et les réserves. Qui transforme ce souterrain en espace de vie ou en cabinet travaille contre des murs qui, côté rue, sont dans le sol. Ces murs sèchent lentement, et un nouveau sol posé par-dessus retient l'humidité encore plus longtemps. Dans un tel espace, un déshumidificateur fait l'essentiel du travail pendant les deux premières semaines.",
      "**En juillet 2021, la Vesdre est sortie de son lit**, et à Pepinster, Verviers, Trooz, Chaudfontaine et Limbourg, des maisons ont été inondées jusqu'au premier étage. Depuis, beaucoup d'habitations de cette vallée ont été mises à nu puis reconstruites, et certaines le sont encore. Qui y plafonne aujourd'hui ou y pose un nouveau sol sèche une maison qui a un jour été détrempée ; il est alors important de mesurer d'abord combien d'humidité reste dans le pied des murs.",
      "**À l'est de Liège s'étend le Pays de Herve** : des prairies vallonnées bordées de haies, des vergers et des fermes dispersées en brique et en pierre calcaire, autour de Herve, Aubel et Thimister-Clermont. Plus loin, le terrain monte vers **les Hautes Fagnes**, la partie la plus haute et la plus humide de la Belgique, autour de Jalhay, Waimes et Butgenbach. Un gros œuvre à cette altitude reste froid pendant des mois en hiver. **Dans les Cantons de l'Est, d'Eupen et La Calamine à Saint-Vith et Burg-Reuland, se trouve la Communauté germanophone** ; là aussi, nous livrons.",
    ],
  },
  beeld: {
    src: "/vernast/case-waterschade.webp",
    alt: "Rez-de-chaussée après des dégâts des eaux, avec des déshumidificateurs de chantier contre les murs mis à nu",
  },
  toestellen: {
    kop: "Quel déshumidificateur de chantier pour un chantier en province de Liège ?",
    items: [
      {
        key: "ttk350",
        waarom: `**Pour une maison ouvrière dans la vallée de la Meuse ou une construction neuve en Hesbaye** : 70 litres par jour et une portée jusqu'à environ 400 m³. Dans une maison de taille moyenne, on en place un à chaque niveau. À partir de ${dagFr("ttk350")} par jour.`,
      },
      {
        key: "ttk650",
        waarom: `**Pour le rez-de-chaussée dans la vallée de la Vesdre ou les étables d'une ferme en carré** : 110 litres par jour, jusqu'à environ 600 m³. Là où beaucoup d'eau doit partir en peu de temps, cet appareil en remplace deux plus petits. À partir de ${dagFr("ttk650")} par jour.`,
      },
      {
        key: "revolution",
        waarom: `**Le déshumidificateur à adsorption pour le souterrain liégeois ou une cave sous le niveau de la rue.** Il continue d'absorber l'humidité dans un espace froid et amène l'air sec par des gaines jusque contre le mur humide. Nous préférons examiner d'abord cette installation avec vous. À partir de ${dagFr("revolution")} par jour.`,
      },
      {
        key: "teddh30",
        waarom: `**Le chauffage de chantier de 30 kW pour le chantier d'hiver dans les Hautes Fagnes ou les Cantons de l'Est.** Un gros œuvre non chauffé à cette altitude est trop froid pour un déshumidificateur à condensation ; avec le chauffage en appui, il se met en route. Nécessite du courant triphasé (400 V) sur le chantier. À partir de ${dagFr("teddh30")} par jour.`,
      },
    ],
  },
  levering: {
    kop: "Livraison en province de Liège : E40 et E313, à une heure convenue",
    alineas: [
      "Depuis Aartselaar, nous roulons vers l'est. **Nous rejoignons Hannut, Waremme et le reste de la Hesbaye en environ une heure par l'E40** ; la ville de Liège, Seraing et Herstal sont à une heure et quart, par l'E40 ou par l'E313 via Hasselt. Nous atteignons Huy, Verviers et Spa en une heure et demie. Pour Malmedy, Stavelot et les Cantons de l'Est autour de Saint-Vith et Burg-Reuland, nous comptons un peu plus de deux heures, et nous fixons l'heure de livraison avec vous.",
      `À l'arrivée, le technicien mesure l'humidité dans le sol et les murs, place les appareils aux endroits les plus humides et dirige l'évacuation vers un siphon, un évier ou l'extérieur. **La montée par l'escalier jusqu'à l'étage est comprise dans le prix** ; s'il n'y a pas encore d'escalier, l'échelle coûte ${LADDER_FR} par étage. Nous ne facturons pas la distance : un chantier à Saint-Vith coûte le même pack de séchage qu'un chantier à Hannut.`,
    ],
    feiten: [
      { label: "Livraison et installation", waarde: "Comprises dans le pack de séchage, sans frais kilométriques" },
      { label: "Délai de livraison", waarde: "Sur rendez-vous, nous fixons ensemble le jour de livraison" },
      { label: "Temps de trajet depuis notre entrepôt", waarde: "Environ une heure (Hannut) à un peu plus de deux heures (Saint-Vith)" },
      { label: "Étage par échelle", waarde: `${LADDER_FR} par étage, à signaler à l'avance` },
      { label: "Pompe à condensats (conseillée)", waarde: `${POMP_FR} par déshumidificateur et par jour` },
    ],
  },
  afhalen: {
    kop: "Enlèvement depuis la province de Liège : seulement si vous allez de toute façon vers Anvers",
    alineas: [
      "L'enlèvement est possible dans notre entrepôt d'Aartselaar, le long de l'A12, au sud d'Anvers. Depuis Hannut, c'est une heure de route, depuis Verviers ou Spa une heure et demie, et vous faites ce trajet aller et retour, à l'enlèvement puis à nouveau au retour du matériel. **Avec un pack de séchage, vous n'y gagnez rien, puisque la livraison y est déjà comprise.** Si vous devez de toute façon passer près d'Anvers et qu'il vous faut un seul déshumidificateur ou ventilateur pour longtemps, réservez un créneau d'enlèvement fixe un jour ouvrable entre 7 h 30 et 17 h.",
    ],
    feiten: [
      { label: "Temps de trajet jusqu'à notre point d'enlèvement", waarde: "Une heure (Hannut) à un peu plus de deux heures (Cantons de l'Est)" },
      { label: "Caution", waarde: "Aucune" },
      { label: "Transport", waarde: "Debout ; transporté couché, laisser reposer 24 heures" },
      { label: "Vous préférez la livraison ?", waarde: "Le trajet est déjà compris dans chaque prix de pack" },
    ],
  },
  faq: [
    {
      q: "Cette page concerne-t-elle la ville de Liège ou la province ?",
      a: "La province : les 84 communes, de Hannut et Waremme à l'ouest jusqu'à Eupen et Saint-Vith à l'est. La ville de Liège a sa propre page, avec les quartiers et les anciennes communes à l'intérieur des limites de la ville. Le pack de séchage et le prix sont les mêmes sur les deux ; ce qui change, ce sont les explications sur la région et la distance.",
    },
    {
      q: "Livrez-vous aussi dans les Cantons de l'Est, autour d'Eupen et de Saint-Vith ?",
      a: "Oui, dans les neuf communes de la Communauté germanophone, de La Calamine et Raeren à Butgenbach et Burg-Reuland. Saint-Vith est à un peu plus de deux heures d'Aartselaar, nous convenons donc à l'avance de l'heure de livraison. Le prix est le même qu'en Hesbaye, sans supplément pour les kilomètres.",
    },
    {
      q: "Je cherche Luik, Hoei ou Wezet. Est-ce la même page ?",
      a: "Oui. Luik, Hoei et Wezet sont les noms néerlandais de Liège, Huy et Visé. Chaque commune a une seule page, que vous la cherchiez sous son nom français ou sous son nom néerlandais. Le pack de séchage, la livraison et l'installation sont les mêmes.",
    },
    {
      q: "Notre maison au bord de la Vesdre a été reconstruite après 2021. Faut-il encore la sécher ?",
      a: "Cela dépend de ce qui s'est passé depuis. Si l'on a de nouveau plafonné ou coulé une nouvelle chape, cette humidité de construction est encore présente, en plus de ce que le pied des murs a retenu de l'inondation. Au démarrage, le technicien mesure l'humidité des murs et du sol, pour que vous ne posiez pas trop tôt un parquet ou de la peinture sur un support qui libère encore de l'humidité.",
    },
    {
      q: "Un déshumidificateur fonctionne-t-il dans le souterrain d'une maison de maître liégeoise ?",
      a: "Oui, mais le souterrain est généralement frais, et un déshumidificateur à condensation y rend moins. Un déshumidificateur à adsorption continue d'absorber l'humidité même à basse température et est alors souvent le meilleur choix. Si de l'eau traverse durablement le mur côté rue, une étanchéité est d'abord nécessaire ; le déshumidificateur retire ensuite l'humidité déjà présente dans le mur.",
    },
    {
      q: "Un gros œuvre dans les Hautes Fagnes sèche-t-il en hiver ?",
      a: "Sans chaleur, à peine. À cette altitude, un gros œuvre non chauffé reste froid pendant des mois, et l'air froid absorbe peu d'humidité, si bien que la chape et le plafonnage libèrent à peine leur eau. Avec un chauffage de chantier en appui, l'espace devient assez chaud pour que le déshumidificateur fasse son travail. Ce chauffage nécessite du courant triphasé, alors dites-nous à l'avance ce qui est disponible sur le chantier.",
    },
  ],
  realisaties: {
    kop: "Chantiers près de Liège",
    intro:
      "Nous n'avons pas encore photographié de chantier en province de Liège même. Ces deux-là se trouvent dans le Limbourg, la province voisine : Hasselt est sur notre trajet par l'E313 vers Liège, Bocholt dans le Maasland plus au nord.",
    slugs: ["chape-pleisterwerk-drogen-hasselt", "waterschade-drogen-bocholt"],
  },
  areaServed: provinceFr("Liège"),
};
