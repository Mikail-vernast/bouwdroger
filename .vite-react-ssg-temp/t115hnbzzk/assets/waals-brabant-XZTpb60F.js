import { L as LADDER_FR, P as POMP_FR, p as provinceFr, d as dagFr, r as routeFr } from "./basis-DTd34HpL.js";
import "../main.mjs";
import "vite-react-ssg";
import "react/jsx-runtime";
import "react";
import "react-router-dom";
import "lucide-react";
import "./tarieven-ZrzMF0e-.js";
import "./verhuur-CgnDb-wO.js";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/regios-fr/waals-brabant.ts");
const REGIO = {
  ...routeFr("waals-brabant"),
  dans: "en Brabant wallon",
  title: "Location déshumidificateur en Brabant wallon | Vernast",
  description: "Louer un déshumidificateur en Brabant wallon ? Calculez votre pack de séchage chez Vernast. Livraison, installation et reprise comprises, avec conseils.",
  h1: "Location de déshumidificateur de chantier en Brabant wallon",
  kicker: "Brabant wallon · livraison dans les 27 communes",
  intro: [
    "Vous cherchez un déshumidificateur de chantier à louer en Brabant wallon pour une construction neuve, une rénovation ou des dégâts des eaux ? Vernast livre et installe les appareils sur votre chantier à Wavre, Waterloo, Nivelles et dans le reste de la province. **Votre pack de séchage comprend la livraison, l'installation et la reprise des appareils.** Calculez votre prix de location en ligne ou contactez-nous pour un conseil sur votre projet."
  ],
  bouw: {
    kop: "Le séchage de votre projet en Brabant wallon",
    alineas: [
      "Vernast livre dans les 27 communes du Brabant wallon. Indiquez dans votre demande le code postal et l'adresse complète du chantier, même si vous utilisez une autre orthographe du nom de la commune. Pour une maison sur plusieurs niveaux ou une annexe séparée, nous avons besoin des dimensions de chaque pièce. Parlez-nous aussi de l'alimentation électrique disponible et du moment où vous souhaitez commencer.",
      "Une chape neuve et un plafonnage apportent de l'humidité dans le bâtiment. Pour choisir un pack de séchage, ce sont surtout le matériau, l'épaisseur, le volume et la température qui comptent. Indiquez aussi quand le matériau a été posé. Le dispositif de séchage et le moment du démarrage doivent respecter les prescriptions de votre entrepreneur ou du fournisseur du matériau.",
      "Pour une cave humide ou une fuite, le travail commence par la cause : si l'eau continue d'entrer, le séchage seul n'est pas une solution durable. Faites d'abord réparer la fuite ou l'infiltration et évacuez l'eau présente. Ensuite, nous examinons quels matériaux sont mouillés et si l'humidité se trouve aussi sous un sol ou derrière une paroi.",
      "**La température et la circulation de l'air comptent aussi.** Sur un chantier froid, un chauffage d'appoint peut être nécessaire, selon le déshumidificateur et les conditions. Discutez de l'alimentation électrique avant de réserver un chauffage. La capacité maximale indiquée sur la fiche d'un appareil n'est pas une quantité d'eau fixe qu'il évacuera chaque jour sur n'importe quel chantier."
    ]
  },
  beeld: {
    src: "/vernast/case-nieuwbouw.webp",
    alt: "Villa en finition, avec des déshumidificateurs de chantier au rez-de-chaussée"
  },
  toestellen: {
    kop: "Quels appareils conviennent à votre chantier ?",
    items: [
      {
        key: "ttk350",
        waarom: `**Pour les grandes pièces ou plusieurs zones de séchage.** La capacité nécessaire dépend du volume et du matériau humide. L'agencement de votre chantier détermine où les appareils seront placés. À partir de ${dagFr("ttk350")} par jour.`
      },
      {
        key: "ttk650",
        waarom: `**Pour les grands volumes et une forte charge d'humidité.** Consultez la fiche technique et faites adapter le dispositif aux pièces qui doivent réellement être séchées. À partir de ${dagFr("ttk650")} par jour.`
      },
      {
        key: "teddh30",
        waarom: `**Pour un chauffage d'appoint sur un chantier froid.** Ce chauffage électrique demande un raccordement 400 V adapté. Faites vérifier au préalable si l'alimentation disponible correspond à la puissance de raccordement. À partir de ${dagFr("teddh30")} par jour.`
      },
      {
        key: "radiaal2250",
        waarom: `**Pour une circulation d'air ciblée le long d'un sol ou d'un mur.** L'emplacement dépend de la zone à sécher. Combinez le brassage d'air avec une capacité de déshumidification suffisante. À partir de ${dagFr("radiaal2250")} par jour.`
      }
    ]
  },
  levering: {
    kop: "Livraison et installation en Brabant wallon",
    alineas: [
      "Nous livrons à Wavre, Waterloo, Nivelles, Braine-l'Alleud et dans les autres communes du Brabant wallon. **La livraison, l'installation et la reprise sont comprises dans votre pack de séchage.** Communiquez l'adresse complète du chantier, la date de début souhaitée et une personne de contact. Signalez les particularités, comme un passage étroit, un étage sans escalier fixe ou une zone de chargement limitée, avant que nous fixions la livraison.",
      "Le technicien répartit les appareils sur les zones de séchage convenues et explique comment utiliser le dispositif. Nous parlons aussi de l'évacuation des condensats et de ce que vous contrôlez vous-même pendant la location. Gardez l'accès libre et veillez à ce que l'alimentation électrique convenue soit disponible. Si quelque chose change sur le chantier ou si l'eau entre à nouveau, contactez-nous."
    ],
    feiten: [
      { label: "Livraison, installation et reprise", waarde: "Comprises dans le pack de séchage" },
      { label: "Moment de livraison", waarde: "Selon votre réservation" },
      { label: "Étage sans escalier fixe", waarde: `À signaler au préalable ; supplément échelle de ${LADDER_FR} par étage` },
      { label: "Pompe à condensats", waarde: `${POMP_FR} par déshumidificateur et par jour, si choisie` }
    ]
  },
  afhalen: {
    kop: "Venir chercher vous-même depuis le Brabant wallon",
    alineas: [
      "Vous pouvez venir chercher un appareil seul sur rendez-vous à notre entrepôt, Boomsesteenweg 12, unit 11 à Aartselaar. **Réservez à l'avance et consultez les tarifs d'enlèvement.** Pour choisir entre l'enlèvement et la livraison, tenez aussi compte du retour. Vérifiez que l'appareil entre dans votre véhicule et suivez les instructions de transport du modèle choisi.",
      "En cas d'enlèvement, vous installez l'appareil vous-même. Indiquez donc au préalable ce qui doit sécher et de quel raccordement vous disposez. Pour plusieurs pièces, des zones difficiles d'accès ou un doute sur la capacité nécessaire, vous pouvez demander conseil pour un pack de séchage avec installation. La durée de location convenue et les éventuelles options figurent dans votre réservation."
    ],
    feiten: [
      { label: "Point d'enlèvement", waarde: "Boomsesteenweg 12, unit 11, Aartselaar" },
      { label: "Moment d'enlèvement", waarde: "Sur rendez-vous" },
      { label: "Transport", waarde: "Selon les instructions de l'appareil choisi" },
      { label: "Vous préférez la livraison ?", waarde: "Livraison et installation comprises dans votre pack de séchage" }
    ]
  },
  faq: [
    {
      q: "Comment organiser une livraison en Brabant wallon ?",
      a: "Calculez votre pack de séchage en ligne ou contactez-nous avec votre adresse en Brabant wallon, les dimensions de la pièce et la date de début souhaitée. Indiquez aussi l'étage et l'alimentation électrique disponible. Nous convenons avec vous du moment de livraison et de l'accès au chantier."
    },
    {
      q: "De combien de déshumidificateurs ai-je besoin ?",
      a: "Cela dépend du volume, de l'agencement, du matériau et de la quantité d'humidité. Un étage ouvert demande un autre dispositif que plusieurs pièces fermées. Utilisez le calculateur pour votre pack et demandez conseil si votre situation est différente, par exemple pour une pièce haute ou une humidité cachée."
    },
    {
      q: "Comment savoir si le sol ou le mur est assez sec ?",
      a: "La durée de location seule ne donne aucune certitude à ce sujet. Faites contrôler l'humidité résiduelle avec une méthode adaptée au matériau. Votre poseur de sol ou votre peintre détermine quelle valeur d'humidité et quelle éventuelle mesure complémentaire sont nécessaires avant de pouvoir appliquer la finition choisie."
    },
    {
      q: "Quand puis-je commencer à sécher une chape fraîche ?",
      a: "Cela dépend du type de chape et des prescriptions du fournisseur. Ne lancez un séchage forcé que lorsqu'il est autorisé. Indiquez dans votre demande le matériau, l'épaisseur de la couche et la date de pose, pour que le conseil corresponde à la composition de votre sol."
    },
    {
      q: "De quelle alimentation électrique ai-je besoin ?",
      a: "La puissance de raccordement varie selon l'appareil. Consultez la fiche technique et indiquez-nous quel raccordement est disponible sur votre chantier. Les chauffages de chantier électriques de 20 et 30 kW demandent une alimentation 400 V adaptée. En cas de doute, faites vérifier la capacité disponible et la protection."
    },
    {
      q: "Puis-je venir chercher un appareil pour un chantier en Brabant wallon ?",
      a: "L'enlèvement est possible sur rendez-vous à notre entrepôt d'Aartselaar, Boomsesteenweg 12, unit 11. Réservez votre appareil à l'avance et vérifiez qu'il entre dans votre véhicule. Suivez les instructions de transport de l'appareil choisi. Avec un pack de séchage livré, nous nous chargeons de l'installation et de la reprise."
    }
  ],
  realisaties: {
    kop: "Chantiers près du Brabant wallon",
    intro: "Découvrez des exemples de la Région de Bruxelles-Capitale voisine. Pour chaque projet, vous trouverez le lieu, les travaux réalisés et les photos disponibles.",
    slugs: ["woning-drogen-brussel", "badkamer-drogen-brussel", "pleisterwerk-drogen-sint-pieters-woluwe"]
  },
  areaServed: provinceFr("Brabant wallon")
};
export {
  REGIO
};
