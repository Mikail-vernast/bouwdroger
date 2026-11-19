import { L as LADDER_FR, P as POMP_FR, p as provinceFr, d as dagFr, r as routeFr } from "./basis-DTd34HpL.js";
import "../main.mjs";
import "vite-react-ssg";
import "react/jsx-runtime";
import "react";
import "react-router-dom";
import "lucide-react";
import "./tarieven-ZrzMF0e-.js";
import "./verhuur-CgnDb-wO.js";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/regios-fr/brussel.ts");
const REGIO = {
  ...routeFr("brussel"),
  dans: "à Bruxelles",
  title: "Location de déshumidificateur à Bruxelles | Vernast",
  description: "Déshumidificateur de chantier à Bruxelles ? Calculez votre pack de séchage chez Vernast. Livraison, installation et reprise comprises, avec conseils.",
  h1: "Location de déshumidificateur de chantier à Bruxelles",
  kicker: "Bruxelles · livraison dans les dix-neuf communes",
  intro: [
    "Vous souhaitez louer un déshumidificateur de chantier à Bruxelles pour votre maison, votre appartement ou votre immeuble professionnel ? Vernast livre et installe des appareils dans les dix-neuf communes, pour la construction neuve, la rénovation et le séchage après des dégâts des eaux. **Vous louez un pack de séchage avec livraison, installation et reprise comprises.** Calculez votre prix de location ou appelez-nous pour un conseil sur votre espace et son accessibilité."
  ],
  heroFacts: [
    "Livraison et installation avec votre pack de séchage",
    "Mesures avant et après comprises",
    "Reprise après la période de location"
  ],
  bouw: {
    kop: "Séchage de chantier pour votre projet à Bruxelles",
    alineas: [
      "Pour une livraison à Bruxelles, l'accès au bâtiment est un élément important de la préparation. Mentionnez l'étage, la présence d'un ascenseur et les éventuels accords avec le syndic. L'adresse se trouve dans une zone piétonne ou l'espace de chargement est limité ? Signalez-le à l'avance, afin que la livraison puisse être adaptée à l'accès sur place.",
      "Une chape neuve et le plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été appliqué. Le dispositif de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou de votre fournisseur de matériaux.",
      "En cas de cave humide ou de fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord traiter la fuite ou l'infiltration d'eau et évacuez l'eau présente. Nous examinons ensuite quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
      "**La température et la circulation de l'air comptent aussi.** Sur un chantier froid, un chauffage d'appoint peut être nécessaire, selon le déshumidificateur et les conditions. Discutez de l'alimentation électrique avant de réserver un chauffage de chantier. La capacité maximale indiquée sur la fiche d'un appareil n'est pas une quantité d'eau fixe que l'appareil évacuera chaque jour sur n'importe quel chantier."
    ]
  },
  beeld: {
    src: "/vernast/case-waterschade.webp",
    alt: "Salle de bains séchée après une fuite dans un appartement bruxellois"
  },
  toestellen: {
    kop: "Quels appareils conviennent à votre chantier ?",
    items: [
      {
        key: "ttk170",
        waarom: `**Pour une pièce séparée ou une zone de séchage plus petite.** Discutez des dimensions, de la température et de la quantité d'humidité pour déterminer si cet appareil a une capacité suffisante. À partir de ${dagFr("ttk170")} par jour.`
      },
      {
        key: "ttk350",
        waarom: `**Pour de grands espaces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et des matériaux humides. L'agencement de votre chantier détermine l'emplacement des appareils. À partir de ${dagFr("ttk350")} par jour.`
      },
      {
        key: "revolution",
        waarom: `**Pour un dispositif de séchage après des dégâts des eaux.** Déterminez d'abord où se trouve l'humidité et comment la construction est composée. Pour de l'humidité sous un sol ou derrière une paroi, une approche adaptée peut être nécessaire. À partir de ${dagFr("revolution")} par jour.`
      },
      {
        key: "ttv4500",
        waarom: `**Pour la circulation de l'air à côté du déshumidificateur.** Un ventilateur aide à faire circuler l'air le long des surfaces humides. Il n'évacue pas lui-même l'humidité de la pièce et ne remplace pas le déshumidificateur. À partir de ${dagFr("ttv4500")} par jour.`
      }
    ]
  },
  levering: {
    kop: "Livraison et installation à Bruxelles",
    alineas: [
      "Nous livrons à Bruxelles-Ville et dans les dix-huit autres communes de la Région de Bruxelles-Capitale. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse complète du chantier, la date de début souhaitée et une personne de contact. Signalez les particularités comme un passage étroit, un étage sans escalier fixe ou une zone de chargement limitée avant que nous convenions de la livraison.",
      "Le technicien répartit les appareils sur les zones de séchage convenues et explique comment utiliser le dispositif. Nous parlons aussi de l'évacuation des condensats et de ce que vous contrôlez vous-même pendant la location. Gardez l'accès libre et veillez à ce que l'alimentation électrique convenue soit disponible. Si quelque chose change sur le chantier ou si de l'eau entre à nouveau, contactez-nous."
    ],
    feiten: [
      { label: "Livraison, installation et reprise", waarde: "Comprises dans le pack de séchage" },
      { label: "Moment de livraison", waarde: "Selon votre réservation" },
      { label: "Étage sans escalier fixe", waarde: `À discuter au préalable ; supplément échelle de ${LADDER_FR} par étage` },
      { label: "Pompe à condensats", waarde: `${POMP_FR} par déshumidificateur et par jour, si choisie` }
    ]
  },
  afhalen: {
    kop: "Enlèvement depuis Bruxelles",
    alineas: [
      "Vous pouvez venir chercher un appareil seul sur rendez-vous à notre entrepôt, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance et consultez les tarifs d'enlèvement.** Pour choisir entre l'enlèvement et la livraison, tenez compte aussi du retour de l'appareil. Vérifiez que l'appareil tient dans votre véhicule et suivez les instructions de transport du modèle choisi.",
      "En cas d'enlèvement, vous installez l'appareil vous-même. Indiquez donc à l'avance ce qui doit sécher et de quel raccordement vous disposez. Pour plusieurs pièces, des zones difficiles d'accès ou un doute sur la capacité nécessaire, vous pouvez demander conseil pour un pack de séchage avec installation. La période de location convenue et les éventuelles options figurent dans votre réservation."
    ],
    feiten: [
      { label: "Point d'enlèvement", waarde: "Boomsesteenweg 12, unit 11, Aartselaar" },
      { label: "Moment d'enlèvement", waarde: "Sur rendez-vous" },
      { label: "Transport", waarde: "Selon les instructions de l'appareil choisi" },
      { label: "Vous préférez la livraison ?", waarde: "Livraison et installation comprises avec votre pack de séchage" }
    ]
  },
  faq: [
    {
      q: "Comment organiser une livraison à Bruxelles ?",
      a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse à Bruxelles, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier."
    },
    {
      q: "De combien de déshumidificateurs ai-je besoin ?",
      a: "Cela dépend du volume, de l'agencement, du matériau et de la quantité d'humidité. Un étage ouvert demande un autre dispositif que plusieurs pièces fermées. Utilisez le calculateur pour votre pack et demandez conseil si votre situation est particulière, par exemple une pièce haute ou une humidité cachée."
    },
    {
      q: "Comment savoir si le sol ou le mur est assez sec ?",
      a: "La durée de location seule ne donne aucune certitude à ce sujet. Faites contrôler l'humidité résiduelle avec une méthode adaptée au matériau. Votre poseur de sol ou votre peintre détermine quelle valeur d'humidité et quelle mesure complémentaire éventuelle sont nécessaires avant d'appliquer la finition choisie."
    },
    {
      q: "Un déshumidificateur peut-il être installé à l'étage ?",
      a: "Cela dépend de l'accès et de l'appareil. Signalez dans votre demande l'étage, un éventuel ascenseur et les passages étroits. S'il n'y a pas d'escalier fixe, discutez à l'avance de la manière de monter les appareils et du supplément applicable."
    },
    {
      q: "De quelle alimentation électrique ai-je besoin ?",
      a: "La puissance de raccordement varie selon l'appareil. Consultez la fiche technique et indiquez quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW nécessitent une alimentation 400 V adaptée. En cas de doute, faites contrôler la capacité disponible et la protection."
    },
    {
      q: "Puis-je venir chercher un appareil moi-même pour un chantier à Bruxelles ?",
      a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il tient dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise."
    }
  ],
  realisaties: {
    kop: "Chantiers que nous avons séchés à Bruxelles",
    intro: "Découvrez des projets réalisés dans cette région. Pour chaque projet, vous trouverez le lieu, les travaux réalisés et les photos disponibles.",
    slugs: ["woning-drogen-brussel", "badkamer-drogen-brussel", "pleisterwerk-drogen-sint-pieters-woluwe"]
  },
  areaServed: provinceFr("Région de Bruxelles-Capitale")
};
export {
  REGIO
};
