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
        q: "Puis-je vous contacter en français ?",
        a: "Des questions en français ? N'hésitez pas à nous écrire ou à nous appeler. Lors de la réservation, indiquez-nous aussi qui suit les appareils pendant la location si vous n'êtes pas vous-même sur le chantier, par exemple votre entrepreneur ou un voisin.",
      },
    ],
    realisaties: [],
  },
};
