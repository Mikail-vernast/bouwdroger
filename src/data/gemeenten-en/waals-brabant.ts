import type { Gemeente } from "../gemeenten.js";

/**
 * De Engelse teksten van de gemeentepagina's in deze provincie, gesleuteld op
 * de Nederlandse slug. Zie README.md in deze map voor de regels en hoe een
 * gemeente aangezet wordt (`aan/waals-brabant.ts`).
 */
export const GEMEENTEN: Record<string, Gemeente> = {
  waver: {
    slug: "waver",
    title: "Construction dehumidifier hire in Wavre | Vernast",
    description:
      "Dehumidifier hire in Wavre? Vernast delivers a drying package by appointment, with installation and collection, for a house, flat or business premises.",
    h1: "Construction dehumidifier hire in Wavre",
    kicker: "Wavre · delivery by appointment",
    rit: { afstand: "about 62 km", tijd: "about fifty minutes" },
    intro: [
      "Need to dry new screed, fresh plasterwork or water damage in Wavre? Vernast hires out construction dehumidifiers and fans and puts them together into a drying package that suits your site. **Delivery, installation and collection are part of it.**",
      "Wavre is about fifty minutes from our warehouse in Aartselaar. When you book, you choose a delivery date, and we then arrange the exact delivery time in Wavre by phone or email.",
    ],
    bouw: {
      kop: "Construction drying for your project in Wavre",
      alineas: [
        "As the capital of Walloon Brabant, Wavre has residential areas as well as blocks of flats, shops and offices. In your request, mention the type of building, the floor and whether there is a lift. In a shared building, it is best to agree in advance who will let us in.",
        "A large open space dries differently from a row of small rooms. In an open plan, one powerful dehumidifier with a fan can be enough; closed rooms need a set-up spread across them. **Tell us how the rooms connect**, and we will match the package to that.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**For an office, shop or large open floor.** With 110 litres a day and a range of up to 600 m³, this is the most powerful condensation dehumidifier in our range. It uses 1.4 kW.",
      },
      {
        key: "radiaal2250",
        waarom: "**For targeted air along a wet floor or wall.** The radial fan moves 2,250 m³ an hour and is splash-proof (IP55). It speeds up drying, and the dehumidifier captures the moisture.",
      },
      {
        key: "ttk350",
        waarom: "**For a single-family house or a flat.** Up to 70 litres a day and suitable for rooms up to 400 m³. The dehumidifier runs on a standard socket.",
      },
      {
        key: "ttk170",
        waarom: "**For a single room or a small retail space.** This compact dehumidifier is good for rooms up to 250 m³, extracting up to 50 litres a day.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Wavre",
      alinea: "**Delivery, installation and collection are part of your drying package.** You give us a delivery date when you book; because Wavre is in Wallonia, we then make an appointment for the exact time. From Aartselaar we are on the road for about fifty minutes. Let us know in advance whether there is a loading zone or parking space in front of the door. The technician sets everything up and explains how to keep an eye on the condensate drain.",
    },
    afhalen: {
      kop: "Collecting it yourself from Wavre",
      alinea: "Collection is possible too: by appointment at our warehouse at Boomsesteenweg 12, unit 11 in Aartselaar. From Wavre that means about fifty minutes' driving each time, when collecting and when returning. **Book in advance** and compare the dimensions of the unit with your car boot. For larger premises, delivery with installation is the simplest choice.",
    },
    buren: ["rixensart", "ottignies-louvain-la-neuve", "chaumont-gistoux", "graven"],
    faq: [
      {
        q: "Can my shop in Wavre stay open while it dries?",
        a: "Often it can, if we know in advance which areas stay in use. We then place the units away from the walkways and take the available sockets into account. Discuss your schedule and opening hours when you make your request.",
      },
      {
        q: "How do I arrange the delivery in Wavre?",
        a: "Book online and choose a delivery date. We then contact you to fix the delivery time, because in Wallonia we deliver by appointment. Keep the site address and the floor level to hand.",
      },
      {
        q: "How many units do I need for an open-plan floor?",
        a: "That depends on the volume and the amount of moisture in the floor and walls. For an open space of up to 600 m³, one large dehumidifier with a fan can be enough. The calculator gives a first proposal, and we are happy to check it.",
      },
      {
        q: "What power do the units need?",
        a: "Construction dehumidifiers and fans run on 230 V, so on a standard socket. Spread several units over different electrical circuits. Site heaters of 20 or 30 kW need a 400 V three-phase connection.",
      },
      {
        q: "How do I know the plasterwork is ready to paint?",
        a: "A dry surface says little about the moisture deeper in the wall. Have your decorator take a moisture reading and follow the value given by the paint manufacturer. Only then is the plasterwork ready for finishing.",
      },
    ],
    realisaties: [],
  },
  waterloo: {
    slug: "waterloo",
    title: "Hire a construction dehumidifier in Waterloo | Vernast",
    description:
      "Dehumidifier hire in Waterloo? Vernast delivers and installs your drying package by appointment, also for large homes and cellars, and collects it afterwards.",
    h1: "Construction dehumidifier hire in Waterloo",
    kicker: "Waterloo · delivery by appointment",
    rit: { afstand: "about 55 km", tijd: "about fifty minutes" },
    intro: [
      "Waterloo is a residential municipality in Walloon Brabant, on the edge of the Sonian Forest. Many homes there are spacious and have a cellar. Renovating a villa, having new screed poured or drying out a cellar after a leak? At Vernast you hire the units that suit that volume.",
      "Our technician drives about fifty minutes from Aartselaar to Waterloo. Delivery in Wallonia is **by appointment**: you choose a day when you book, and we then call to set the time. Installation and collection are part of the drying package.",
    ],
    bouw: {
      kop: "Drying large homes and cellars in Waterloo",
      alineas: [
        "In a spacious home with high ceilings, the volume quickly adds up. A living area of 80 m² with a height of 3 metres is already 240 m³, before the rest of the house. That is why, in large homes, we often combine a powerful dehumidifier in the central space with a smaller one in the closed rooms.",
        "Cellars need their own approach. They are cool, so a condensation dehumidifier performs less well there, and the moisture often comes from outside. **First have it checked whether water is getting in** through the walls or the floor. Then you choose between a desiccant dehumidifier for a cold cellar or a condensation dehumidifier if the space is heated.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**For a spacious living area or a whole villa being finished.** Extracts up to 110 litres of moisture a day from volumes up to about 600 m³, using 1.4 kW.",
      },
      {
        key: "ttk350",
        waarom: "**As an addition in the closed rooms or upstairs.** Up to 70 litres a day and suitable for about 400 m³. It uses 1.1 kW.",
      },
      {
        key: "revolution",
        waarom: "**For the cellar.** This desiccant dehumidifier extracts moisture from the air even at low temperatures and, through hoses, dries spaces under a floor or behind a wall.",
      },
      {
        key: "ttv4500",
        waarom: "**To circulate the air through a large space.** This fan moves 4,500 m³ an hour for 0.2 kW. It makes sure the damp air reaches the dehumidifier, and removes no moisture itself.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Waterloo",
      alinea: "**We deliver in Waterloo by appointment.** You fix the delivery date when you book, and we call about the time. From Aartselaar we are on the road for about fifty minutes. Let us know whether there is a driveway, whether the units need to go down to the cellar and how steep the cellar stairs are. The technician installs everything and shows you how to keep an eye on the condensate drain.",
    },
    afhalen: {
      kop: "Collecting it yourself from Waterloo",
      alinea: "If you want to transport one unit yourself, you collect it by appointment at Boomsesteenweg 12, unit 11 in Aartselaar. From Waterloo that is about fifty minutes' drive, and you make it twice: when collecting and when returning. **Book ahead** so it is ready for you. For a large home with several units, delivery with installation is the logical choice.",
    },
    buren: ["eigenbrakel", "lasne", "sint-genesius-rode"],
    faq: [
      {
        q: "How do I schedule a delivery in Waterloo?",
        a: "Put your drying package together online and choose the delivery date. In Wallonia we deliver by appointment, so we then call you to agree the time. Give us the address and clear details of the access to the house.",
      },
      {
        q: "Which dehumidifier should I use in a cold cellar?",
        a: "A desiccant dehumidifier. A condensation dehumidifier works best above 15 °C and extracts too little moisture from the air in a cool cellar. A desiccant dehumidifier is not affected by that and, through hoses, also dries hard-to-reach spots.",
      },
      {
        q: "How many units do I need for a large house?",
        a: "First work out the volume: floor area times ceiling height, room by room. An open living area dries with one large unit; closed rooms each need their own. The calculator puts a package together, and for an exceptional home we are happy to talk it through by phone.",
      },
      {
        q: "Does a construction dehumidifier solve damp in the cellar for good?",
        a: "Only if water does not keep coming in. A dehumidifier removes the moisture that is there, but it does not repair a cracked wall or a missing damp-proof barrier. So have the cause dealt with first.",
      },
      {
        q: "Can I collect a unit myself for a site in Waterloo?",
        a: "Yes, by appointment at our warehouse in Aartselaar, about fifty minutes' drive from Waterloo. Book in advance and measure whether the unit fits in your car. You will receive the transport instructions when you collect it.",
      },
    ],
    realisaties: [],
  },
};
