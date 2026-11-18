import { routeFr, dagFr, LADDER_FR, POMP_FR, provinceFr, type RegioFr } from "./basis.js";

/** Franse tekst van de provinciepagina Luxemburg, vertaald uit regios.ts. Zegt overal dat het om de Belgische provincie gaat, niet het Groothertogdom. */
export const REGIO: RegioFr = {
  ...routeFr("luxemburg"),
  dans: "en province de Luxembourg",
  title: "Location déshumidificateur, province de Luxembourg | Vernast",
  description:
    "Location de déshumidificateur en province de Luxembourg (Belgique) : Arlon, Bastogne, Marche et Libramont. Livré, installé et repris, sans caution.",
  h1: "Location de déshumidificateur en province de Luxembourg",
  kicker: "Province de Luxembourg (Belgique) · 43 communes · nos trajets les plus longs",
  intro: [
    "Vous souhaitez louer un déshumidificateur de chantier dans la province belge de Luxembourg, pour un gros œuvre sur le plateau ardennais, une ferme rénovée ou une maison de vacances humide après l'hiver ? Vernast apporte les appareils jusque sur votre chantier, de Durbuy à Virton et de Gouvy à Bouillon. **Le pack de séchage comprend la livraison, l'installation et la reprise.** Il s'agit ici de la province belge, pas du Grand-Duché : nous n'y livrons pas. Et quant à la distance, autant le dire tout de suite : **Durbuy et Marche-en-Famenne sont à une heure et demie ou deux heures de notre entrepôt**, Bastogne et Libramont à environ deux heures, et **Arlon et Virton à deux heures et demie ou trois heures. Ce sont nos trajets les plus longs.**",
  ],
  bouw: {
    kop: "Pourquoi loue-t-on un déshumidificateur en province de Luxembourg ?",
    alineas: [
      "C'est la plus grande province du pays et la moins densément peuplée, et cela façonne les chantiers. **Ce sont rarement des rangées de constructions neuves, bien plus souvent des maisons isolées** : une ferme qui devient habitation, une maison de vacances rénovée en profondeur, une nouvelle maison sur un terrain en bordure de village. Chaque chantier est différent, et la distance entre deux chantiers est grande. C'est pourquoi nous préférons composer le pack avec vous à l'avance, pour que le technicien ne doive pas revenir pour un second trajet.",
      "**En Famenne, autour de Marche, Hotton et Durbuy, s'étend une bande basse entre le Condroz et l'Ardenne.** Le sous-sol est schisteux, calcaire sur les bords, et les vieilles fermes sont bâties dans la pierre extraite sur place. Là où l'Ourthe traverse Hotton, Durbuy et La Roche-en-Ardenne, des maisons se trouvent tout près de l'eau, et en cas de crue, caves et garages y sont inondés. Après une telle inondation, l'humidité pénètre profondément dans la maçonnerie, et un séchage y prend des semaines.",
      "**Sur le haut plateau, autour de Bastogne, Libramont, Vielsalm et Houffalize, le sol se situe entre quatre cents et six cents mètres d'altitude.** Les hivers y sont plus froids et plus longs que dans le reste du pays, avec plus de jours de gel et plus souvent de la neige. Un gros œuvre sans chauffage y reste froid et humide de novembre à mars : la chape sèche à peine, le plafonnage non plus. **Sur un tel chantier, un chauffage de chantier a sa place à côté du déshumidificateur**, car sous quinze degrés, un appareil à condensation n'atteint qu'une petite partie de sa capacité.",
      "**Autour de Bertrix, Herbeumont et Bouillon, c'est le pays de l'ardoise et de la forêt.** Les toits, et souvent aussi les façades, sont en ardoise, les maisons s'accrochent aux pentes, et la Semois serpente de Florenville et Chiny par Herbeumont jusqu'à Bouillon. Les maisons au fond de la vallée subissent la nappe phréatique et la rosée, celles à flanc de coteau l'eau qui descend le long du mur arrière. Beaucoup de ces habitations sont des secondes résidences restées fermées une saison, et l'humidité y est alors souvent de la condensation dans une maison froide, pas une fuite.",
      "**Tout au sud se trouve la Gaume, autour de Virton, Rouvroy et Meix-devant-Virton**, avec ses longues maisons lorraines : logis, étable et grange sous un même toit continu, au faîte parallèle à la rue. Qui rénove une telle maison transforme la grange en pièce de vie, avec un nouveau sol et un nouveau plafonnage contre de vieux murs épais. Autour d'Arlon, Messancy, Aubange et Attert, on construit en revanche beaucoup de maisons neuves pour des familles qui travaillent de l'autre côté de la frontière, au Grand-Duché. **Il s'agit alors du séchage classique d'une construction neuve**, avec un planning serré pour le poseur de sol.",
    ],
  },
  beeld: {
    src: "/vernast/case-nieuwbouw.webp",
    alt: "Maison en finition en Ardenne, avec des déshumidificateurs de chantier au rez-de-chaussée",
  },
  toestellen: {
    kop: "Quel déshumidificateur pour un chantier en province de Luxembourg ?",
    items: [
      {
        key: "ttk350",
        waarom: `**Pour une construction neuve autour d'Arlon ou un niveau d'une ferme rénovée** : 70 litres par jour et une portée jusqu'à environ 400 m³. Dans une maison ordinaire, nous en installons un par étage. À partir de ${dagFr("ttk350")} par jour.`,
      },
      {
        key: "teddh30",
        waarom: `**Le chauffage de chantier de 30 kW pour le chantier d'hiver sur le plateau ardennais.** Sans chaleur, un gros œuvre à Bastogne ou Libramont reste trop froid pour sécher ; avec ce chauffage, le déshumidificateur tourne à plein régime. Nécessite du courant triphasé (400 V) sur le chantier. À partir de ${dagFr("teddh30")} par jour.`,
      },
      {
        key: "revolution",
        waarom: `**Le déshumidificateur à adsorption pour la maison de vacances restée fermée tout l'hiver** ou une cave froide au bord de l'Ourthe ou de la Semois. Il continue d'absorber l'humidité à basse température et envoie l'air sec par des gaines jusqu'à l'endroit humide. Nous préférons discuter de cette installation avec vous au préalable. À partir de ${dagFr("revolution")} par jour.`,
      },
      {
        key: "ttk650",
        waarom: `**Pour la grange d'une ferme lorraine transformée en pièce de vie** : 110 litres par jour, jusqu'à environ 600 m³. Dans un espace haut et ouvert, un seul grand appareil fait plus que deux petits. À partir de ${dagFr("ttk650")} par jour.`,
      },
    ],
  },
  levering: {
    kop: "Livraison en province de Luxembourg : le plus long trajet, bien planifié",
    alineas: [
      "Depuis Aartselaar, nous passons par le ring de Bruxelles et l'E411, via Namur, vers le sud-est. **La Famenne, avec Marche, Hotton et Durbuy, est à une heure et demie ou deux heures.** Bastogne, Libramont, Neufchâteau et Saint-Hubert sont à environ deux heures. Pour Arlon, Virton, Florenville et le reste du sud, comptez deux heures et demie à trois heures. Comme chaque trajet est si long, nous combinons les chantiers de la province quand c'est possible et convenons à l'avance avec vous de l'heure de livraison.",
      `Sur place, le technicien mesure l'humidité du sol et des murs, place les appareils là où il le faut et dirige l'évacuation vers un avaloir, un évier ou l'extérieur. **La montée à l'étage par l'escalier est comprise dans le prix** ; s'il faut passer par une échelle parce que l'escalier n'est pas encore posé, comptez ${LADDER_FR} par étage. Vous ne payez rien de plus pour les kilomètres : un chantier à Virton coûte le même pack de séchage qu'un chantier à Durbuy.`,
    ],
    feiten: [
      { label: "Livraison et installation", waarde: "Comprises dans le pack de séchage, sans frais kilométriques" },
      { label: "Délai de livraison", waarde: "Sur rendez-vous, nous convenons ensemble du jour de livraison" },
      { label: "Trajet depuis notre entrepôt", waarde: "Une heure et demie (Durbuy) à environ trois heures (Virton)" },
      { label: "Étage via l'échelle", waarde: `${LADDER_FR} par étage, à signaler à l'avance` },
      { label: "Pompe à condensats (recommandée)", waarde: `${POMP_FR} par déshumidificateur et par jour` },
    ],
  },
  afhalen: {
    kop: "Enlèvement depuis la province de Luxembourg : faites d'abord le calcul",
    alineas: [
      "Si vous voulez venir chercher le matériel vous-même, vous vous rendez à notre entrepôt d'Aartselaar, le long de l'A12, au sud d'Anvers. Depuis Marche, cela représente environ deux heures de route, depuis Arlon ou Virton près de trois, et cela deux fois : à l'enlèvement et au retour. **Pour un pack de séchage, c'est une journée perdue, car la livraison est déjà comprise.** Seul celui qui doit de toute façon passer près d'Anvers et a besoin d'un seul déshumidificateur pour longtemps réserve un créneau d'enlèvement fixe, un jour ouvrable entre 7 h 30 et 17 h.",
    ],
    feiten: [
      { label: "Trajet jusqu'à notre point d'enlèvement", waarde: "Environ deux heures (Marche) à près de trois heures (Arlon, Virton)" },
      { label: "Caution", waarde: "Aucune" },
      { label: "Transport", waarde: "Debout ; transporté couché, laisser reposer 24 heures" },
      { label: "Vous préférez la livraison ?", waarde: "Le trajet est déjà compris dans chaque prix de pack" },
    ],
  },
  faq: [
    {
      q: "Livrez-vous aussi au Grand-Duché de Luxembourg ?",
      a: "Non. Cette page concerne la province belge de Luxembourg, avec Arlon, Bastogne, Marche-en-Famenne et Virton, et nous y livrons dans les 43 communes. De l'autre côté de la frontière, à Luxembourg-Ville, à Esch-sur-Alzette ou ailleurs au Grand-Duché, nous n'installons pas d'appareils. Vous habitez en Belgique et travaillez là-bas ? Alors vous êtes à la bonne adresse chez nous.",
    },
    {
      q: "Venez-vous vraiment jusqu'à Arlon ou Virton ?",
      a: "Oui, même si, avec deux heures et demie à trois heures de route depuis Aartselaar, c'est notre trajet le plus long. C'est pourquoi nous regroupons les chantiers du sud quand c'est possible et convenons d'une heure fixe plutôt que d'une plage d'une demi-journée. Le prix reste le même : livraison, installation et reprise sont comprises dans le pack, sans supplément pour la distance.",
    },
    {
      q: "Je cherche Arlon ou Bastogne. Suis-je sur la bonne page ?",
      a: "Oui. En néerlandais, Arlon et Bastogne s'appellent Aarlen et Bastenaken, mais ce sont les mêmes villes. Chaque commune a une seule page, sous son nom français. Le pack de séchage, la livraison et l'installation sont partout identiques.",
    },
    {
      q: "Un gros œuvre en Ardenne sèche-t-il vraiment en hiver ?",
      a: "Avec un déshumidificateur seul, cela va lentement, car l'air d'un gros œuvre froid absorbe peu d'humidité et la chape libère à peine son eau. Avec un chauffage de chantier en plus, la pièce devient assez chaude pour que le déshumidificateur fonctionne à pleine puissance. Ce chauffage nécessite toutefois du courant triphasé ; si le chantier n'a qu'une prise ordinaire, prévenez-nous à l'avance.",
    },
    {
      q: "Notre maison de vacances au bord de la Semois est humide après l'hiver. S'agit-il de dégâts des eaux ?",
      a: "Le plus souvent, non. Une maison restée froide et fermée pendant des mois se couvre de condensation sur les murs et les fenêtres, et elle sent alors le moisi sans qu'il y ait de fuite. Un déshumidificateur à adsorption retire cette humidité même à basse température. Vérifiez quand même derrière les armoires et dans les coins s'il y a des moisissures, puis aérez et chauffez régulièrement la maison.",
    },
    {
      q: "Combien de temps faut-il pour sécher une ferme lorraine rénovée ?",
      a: "Plus longtemps qu'une construction neuve. Les vieux murs sont épais et retiennent beaucoup d'humidité, et une nouvelle chape et un nouveau plafonnage s'y ajoutent. Comptez quelques semaines, avec un déshumidificateur par niveau et, pendant les mois froids, un chauffage en plus. Le technicien mesure au démarrage et à la reprise, pour que vous sachiez quand le poseur de sol peut commencer.",
    },
  ],
  realisaties: {
    kop: "Chantiers près de la province de Luxembourg",
    intro: "Nous n'avons encore photographié aucun chantier dans la province de Luxembourg elle-même. Ces trois-là se trouvent à Bruxelles, au début de notre trajet vers le sud par l'E411.",
    slugs: ["woning-drogen-brussel", "badkamer-drogen-brussel", "pleisterwerk-drogen-sint-pieters-woluwe"],
  },
  areaServed: provinceFr("Luxembourg"),
};
