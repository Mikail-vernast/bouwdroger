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
  tubeke: {
    slug: "tubeke",
    title: "Dehumidifier hire in Tubize, in the Senne valley | Vernast",
    description:
      "Dehumidifier hire in Tubize? Vernast delivers, installs and collects your drying package by appointment. For screed, plasterwork and water damage by the Senne.",
    h1: "Construction dehumidifier hire in Tubize",
    kicker: "Tubize · delivery by appointment",
    rit: { afstand: "about 55 km", tijd: "about fifty minutes" },
    intro: [
      "Tubize lies on the Senne, just across the language border from Halle. Building or renovating a home there, or is there water in the cellar? At Vernast you hire the construction dehumidifiers and fans to get screed, plasterwork and wet rooms dry.",
      "From our warehouse in Aartselaar we drive about fifty minutes to Tubize. In Wallonia we deliver **by appointment**: you choose a delivery date when you book, and we agree the time with you. Delivery, installation and collection are included in the price of your drying package.",
    ],
    bouw: {
      kop: "Drying after water damage or a new build in Tubize",
      alineas: [
        "After flooding in a cellar or on the ground floor, deal with the cause first. Have the leak repaired and remove standing water before the dehumidifier starts. Otherwise the wall draws in fresh moisture and the unit runs for nothing. If the moisture is under the floor or behind a stud wall, let us know: that calls for a different set-up.",
        "In a new build, the thickness of the screed, the type of plasterwork, the temperature and the ventilation decide how long drying takes. A condensation dehumidifier works best above 15 °C. **Have the residual moisture measured** before the floor layer or decorator starts, because a dry surface says little about the core of the floor.",
      ],
    },
    toestellen: [
      {
        key: "ttk350",
        waarom: "**For a whole house being finished.** This condensation dehumidifier extracts up to 70 litres of moisture a day from the air and covers about 400 m³. Over several floors, we spread the units across the rooms.",
      },
      {
        key: "revolution",
        waarom: "**For a cold cellar or moisture under the floor.** This desiccant dehumidifier keeps working at low temperatures and, through hoses, also dries spots a standard set-up cannot reach.",
      },
      {
        key: "ttk170",
        waarom: "**For a single room or a flat.** Compact, up to 50 litres a day and intended for rooms up to about 250 m³. It uses 0.75 kW and runs on a standard socket.",
      },
      {
        key: "radiaal2250",
        waarom: "**For a targeted airflow over a wet floor or wall.** This radial fan moves 2,250 m³ of air an hour and is splash-proof (IP55). It speeds up evaporation; the dehumidifier removes the moisture itself.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Tubize",
      alinea: "**Delivery in Tubize is by appointment.** You choose a delivery date when you book, and we then call to fix the time. Our technician drives about fifty minutes from Aartselaar. Let us know in advance about a narrow passage, a steep staircase or limited parking. On site, he puts the units in place and shows you how to check the condensate drain.",
    },
    afhalen: {
      kop: "Collecting it yourself from Tubize",
      alinea: "You can collect a single unit by appointment from our warehouse at Boomsesteenweg 12, unit 11 in Aartselaar. From Tubize that is about fifty minutes' drive, and you make the trip again to return the unit. **Book in advance** and it will be ready for you. If you need several units, delivery with installation is usually the better choice.",
    },
    buren: ["halle", "rebecq", "kasteelbrakel", "itter"],
    faq: [
      {
        q: "How does a delivery in Tubize work?",
        a: "You put a drying package together online and choose a delivery date. Because we deliver by appointment in Wallonia, we then call you to agree the time. Give us the full site address and tell us who will meet us there.",
      },
      {
        q: "How many construction dehumidifiers do I need for my house?",
        a: "That depends on the volume, the number of closed rooms and how wet the materials are. An open floor dries with fewer units than five separate rooms. The calculator works out your package. If your situation is unusual, just give us a call.",
      },
      {
        q: "Does a construction dehumidifier work in a cold cellar?",
        a: "A condensation dehumidifier works best above 15 °C and loses much of its efficiency in a cold cellar. There you are better off hiring the desiccant dehumidifier, which extracts moisture from the air even at low temperatures. Adding a site heater is another option.",
      },
      {
        q: "Will a dehumidifier solve the damp in my cellar for good?",
        a: "Not while water keeps coming in. A dehumidifier removes moisture, but it does not seal a crack or replace a missing damp-proof barrier. Have the cause repaired first; after that, the cellar will dry out for good.",
      },
      {
        q: "Can I collect a unit myself for a site in Tubize?",
        a: "Yes, by appointment in Aartselaar. Allow about fifty minutes' drive each way. Check beforehand that the unit fits in your car and follow the transport instructions you receive when you collect it.",
      },
    ],
    realisaties: [],
  },
  rebecq: {
    slug: "rebecq",
    title: "Rebecq dehumidifier hire for screed and plaster | Vernast",
    description:
      "Dehumidifier hire in Rebecq? Vernast delivers and installs your drying package by appointment and collects it. For new screed, fresh plaster or a wet cellar.",
    h1: "Construction dehumidifier hire in Rebecq",
    kicker: "Rebecq · delivery by appointment",
    rit: { afstand: "about 65 km", tijd: "almost an hour" },
    intro: [
      "Rebecq lies in the west of Walloon Brabant, in the Senne valley and close to Tubize. Renovate an older house there or build a new one, and screed and plasterwork bring a lot of water indoors. Vernast hires out the construction dehumidifiers, fans and site heaters to get that moisture out again.",
      "Our warehouse in Aartselaar is almost an hour's drive from Rebecq. For Wallonia we work **by appointment**: you choose a delivery date when you book, and afterwards we set the time together. Delivery, installation and collection are included in the price of the drying package.",
    ],
    bouw: {
      kop: "Drying screed and plasterwork in Rebecq",
      alineas: [
        "A new screed brings more water into a house than most people building expect. How quickly it leaves depends on the thickness, the type of mortar and the temperature in the room. In your request, tell us when the floor was poured or the plaster applied, and we will match the set-up to that.",
        "For when to start, follow the guidelines of your screed contractor or the mortar supplier: some floors must not be force-dried in the first few days. **A dry surface is not a dry floor.** Have a moisture reading confirm that the core is ready before the tiler or parquet fitter starts.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**For a large open space or a complete new build.** This condensation dehumidifier extracts up to 110 litres of moisture a day from the air and is intended for volumes up to about 600 m³. It uses 1.4 kW.",
      },
      {
        key: "ttv4500",
        waarom: "**To keep the air moving.** This fan moves 4,500 m³ of air an hour and uses 0.2 kW. That way the moisture leaves the screed faster, but it is the dehumidifier that removes it.",
      },
      {
        key: "ttk350",
        waarom: "**For one floor or a medium-sized house.** Up to 70 litres a day, suitable for about 400 m³, using 1.1 kW. Two or more units are spread across the closed rooms.",
      },
      {
        key: "teddh20",
        waarom: "**When the site is too cold to dry properly.** This electric site heater delivers 20 kW and needs a 400 V three-phase connection. The heat speeds up drying; the dehumidifier removes the moisture itself.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Rebecq",
      alinea: "**In Rebecq we deliver by appointment.** You choose a delivery date when you book, and we call afterwards to agree the time. From Aartselaar the technician is on the road for almost an hour. Let us know in advance about a staircase without a handrail, a narrow hallway or little room to park. He places the units, connects them and shows you how to check the condensate drain.",
    },
    afhalen: {
      kop: "Collecting it yourself from Rebecq",
      alinea: "If you only need one unit, you can collect it by appointment at Boomsesteenweg 12, unit 11 in Aartselaar. From Rebecq that is almost an hour's drive each way, and you make the trip twice: to collect and to return. **Book in advance** so the unit is ready, and check that it fits in your car.",
    },
    buren: ["tubeke", "itter"],
    faq: [
      {
        q: "How do I book a delivery in Rebecq?",
        a: "Put your drying package together online and choose a delivery date. We then call you to fix the delivery time. Include the full site address, the floor and who will let us in that day.",
      },
      {
        q: "Can I put a dehumidifier on fresh screed straight away?",
        a: "That depends on the mortar. Some screeds first need a few days to cure undisturbed before you force-dry them. Check with your screed contractor or the product's technical data sheet, and tell us the date it was poured.",
      },
      {
        q: "How do I know the floor is dry enough to finish?",
        a: "Not from the surface and not from the number of hire days. A moisture reading in the core of the screed settles it. Your tiler or parquet fitter knows what value their material requires.",
      },
      {
        q: "What connection do I need for a site heater?",
        a: "The 20 and 30 kW electric site heaters run on 400 V, so on three-phase power. A standard socket is not enough for them. If in doubt, have your electrician check whether the site distribution board can handle the load.",
      },
      {
        q: "Can I collect a unit myself for a site in Rebecq?",
        a: "Yes, by appointment at our warehouse in Aartselaar. Allow almost an hour's drive each way. Book the unit in advance and follow the transport instructions you are given.",
      },
    ],
    realisaties: [],
  },
  kasteelbrakel: {
    slug: "kasteelbrakel",
    title: "Hire a dehumidifier in Braine-le-Château | Vernast",
    description:
      "Dehumidifier hire in Braine-le-Château? Vernast brings your drying package by appointment, installs and collects it. For renovation, new builds and wet cellars.",
    h1: "Construction dehumidifier hire in Braine-le-Château",
    kicker: "Braine-le-Château · delivery by appointment",
    rit: { afstand: "about 55 km", tijd: "about fifty minutes" },
    intro: [
      "Braine-le-Château lies in the west of Walloon Brabant, between Tubize and Braine-l'Alleud. Renovating an older house there often means new plasterwork, a new screed or a cellar that holds on to moisture. Vernast hires out the dehumidifiers and fans you need for that.",
      "From Aartselaar we are about fifty minutes on the road to Braine-le-Château. In Wallonia we deliver **by appointment**: you choose the day when you book, and we call about the time. Delivery, installation and collection are included in the drying package.",
    ],
    bouw: {
      kop: "Renovation and water damage in Braine-le-Château",
      alineas: [
        "During a renovation, the moisture is often in places you cannot see: in an old wall, under a floor that has been opened up or in a cellar without proper damp-proofing. So start with the cause. A dehumidifier takes moisture out of the air, but it does not stop water coming in through a crack or a poor joint.",
        "If there was water in the house, first have the standing water pumped out and remove wet insulation or skirting boards. Only then is drying worthwhile. **Tell us where the water stood and for how long**, and together we will choose between a condensation dehumidifier and a desiccant dehumidifier.",
      ],
    },
    toestellen: [
      {
        key: "revolution",
        waarom: "**For a cellar or a room that stays cold.** A desiccant dehumidifier also works at low temperatures, where a condensation dehumidifier loses much of its efficiency. Through hoses, it also dries cavities and spaces under a floor.",
      },
      {
        key: "ttk350",
        waarom: "**For a house you are renovating from top to bottom.** This condensation dehumidifier extracts up to 70 litres of moisture a day from rooms up to about 400 m³ and uses 1.1 kW. With several rooms, we place more than one.",
      },
      {
        key: "ttk170",
        waarom: "**For a single room or a bathroom after a leak.** This compact dehumidifier removes up to 50 litres a day, suits rooms up to about 250 m³ and runs on a standard socket (0.75 kW).",
      },
      {
        key: "ttv4500",
        waarom: "**To make wet walls and floors evaporate faster.** This fan blows 4,500 m³ of air an hour along the surface and uses 0.2 kW. It works together with a dehumidifier, because it collects no water itself.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Braine-le-Château",
      alinea: "**We agree the delivery in Braine-le-Château with you.** Once you have booked with a delivery date, we call to set the time. The drive from Aartselaar takes about fifty minutes. If the site is on a narrow street, or the units need to go down to the cellar or up a floor, tell us beforehand. The technician puts everything in place and explains how to check the collection tank or the drain hose.",
    },
    afhalen: {
      kop: "Collecting it yourself from Braine-le-Château",
      alinea: "You can also collect a single unit yourself from our warehouse at Boomsesteenweg 12, unit 11 in Aartselaar. From Braine-le-Château it takes about fifty minutes, and the same again when you bring it back. **Make an appointment in advance** and your unit will be ready. For a full renovation, delivery with installation is usually more convenient.",
    },
    buren: ["tubeke", "itter", "eigenbrakel", "halle"],
    faq: [
      {
        q: "What happens when you deliver in Braine-le-Château?",
        a: "You book online and choose a delivery date. Because we deliver by appointment in Wallonia, we then get in touch to confirm the time. Make sure someone can let the technician in and show him where the units should go.",
      },
      {
        q: "Which dehumidifier should I choose for a wet cellar?",
        a: "In a cold cellar, a condensation dehumidifier loses much of its efficiency, because it works best above 15 °C. A desiccant dehumidifier keeps absorbing moisture even at low temperatures. If the cellar is heated, a condensation dehumidifier is often enough.",
      },
      {
        q: "How long does drying take after water damage?",
        a: "That depends on how long the water stood, which materials got wet and how thick the walls are. A moisture reading at the start and during drying shows whether the moisture is falling. Based on that, you decide whether to extend the hire.",
      },
      {
        q: "Does a construction dehumidifier run on a standard socket?",
        a: "Yes, the condensation dehumidifiers run on a standard 230 V socket. Do not put too many units on the same circuit, though, or the fuse will trip. Only the electric site heaters need a 400 V connection.",
      },
      {
        q: "Can I collect a unit myself for a site in Braine-le-Château?",
        a: "You can, by appointment in Aartselaar. You drive about fifty minutes each way. Book in advance, measure your car boot and follow the transport instructions when you collect.",
      },
    ],
    realisaties: [],
  },
  itter: {
    slug: "itter",
    title: "Ittre dehumidifier hire, sized to your site | Vernast",
    description:
      "Dehumidifier hire in Ittre? Vernast delivers and installs your drying package by appointment and collects it afterwards. Tailored advice for screed and plaster.",
    h1: "Construction dehumidifier hire in Ittre",
    kicker: "Ittre · delivery by appointment",
    rit: { afstand: "about 65 km", tijd: "almost an hour" },
    intro: [
      "Ittre lies in the west of Walloon Brabant, along the Brussels-Charleroi Canal. If you are building there, or a house needs drying after a leak, you hire the units from Vernast that suit the volume and the kind of moisture.",
      "From our warehouse in Aartselaar to Ittre is almost an hour's drive. In Wallonia we deliver **by appointment**: you fix the delivery date when you book, and we call to arrange the time. You do not pay separately for delivery, installation and collection, because they are part of the drying package.",
    ],
    bouw: {
      kop: "The right drying package for your site in Ittre",
      alineas: [
        "How many units you need starts with the volume: the floor area times the height of the rooms that need drying. A 50 m² living area with a 2.5 metre ceiling is 125 m³. The amount of wet material counts too: fresh screed across a whole floor needs more capacity than a few damp walls.",
        "Closed rooms each get their own unit, or you open the doors and let a fan circulate the air. **The calculator works out a package for you.** If you are unsure, call us and describe the site.",
      ],
    },
    toestellen: [
      {
        key: "ttk350",
        waarom: "**For one floor or an average house.** This condensation dehumidifier extracts up to 70 litres a day from the air and suits rooms up to about 400 m³. It uses 1.1 kW.",
      },
      {
        key: "radiaal2250",
        waarom: "**To direct air over a floor or along a wall.** This radial fan moves 2,250 m³ an hour and is splash-proof to IP55. Use it together with a dehumidifier, which captures the moisture released.",
      },
      {
        key: "revolution",
        waarom: "**For a cellar, a cold room or moisture under the floor.** This desiccant dehumidifier keeps working where it is too cold for a condensation dehumidifier. With hoses, it also reaches insulation layers and cavities.",
      },
      {
        key: "ttk650",
        waarom: "**For large volumes or a complete new build.** Up to 110 litres of moisture a day, for rooms up to about 600 m³, using 1.4 kW. Here one unit often replaces two smaller ones.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Ittre",
      alinea: "**We deliver in Ittre by appointment.** Choose a date when you book, and we call to agree the time with you. Our technician is on the road from Aartselaar for almost an hour. Tell us beforehand how the site can be reached and whether the units need to go up stairs. On site, he sets everything up and shows you how to drain the condensate.",
    },
    afhalen: {
      kop: "Collecting it yourself from Ittre",
      alinea: "You can collect a single unit yourself, by appointment at our warehouse at Boomsesteenweg 12, unit 11 in Aartselaar. From Ittre that is almost an hour's drive, and you make the same trip to return the unit. **Book ahead** and it will be ready. For several units, delivery with installation is the better option.",
    },
    buren: ["tubeke", "kasteelbrakel", "eigenbrakel", "nijvel"],
    faq: [
      {
        q: "How do I arrange a delivery in Ittre?",
        a: "Book your drying package online and choose a delivery date. After booking, we call you to agree the time. Give the correct site address and the name of the person who will meet us there.",
      },
      {
        q: "How do I work out how many dehumidifiers I need?",
        a: "Multiply the floor area of each room by its height to get the volume. Then consider how much wet material there is and how many rooms are closed off. The calculator suggests a package, and if in doubt we can help by phone.",
      },
      {
        q: "Do I need a fan as well as the dehumidifier?",
        a: "Not always, but on a wet floor or wall a fan speeds up evaporation. It does not remove the moisture itself. That is why you always use it together with a dehumidifier in the same room.",
      },
      {
        q: "How do I know the site is dry enough?",
        a: "Do not go by the length of the hire or a surface that looks dry. Have a moisture reading taken in the floor or wall. Your floor layer or decorator knows what residual moisture their finish allows.",
      },
      {
        q: "Can I pick up a unit myself for a site in Ittre?",
        a: "Yes, by appointment in Aartselaar. The drive takes almost an hour each way. Book in advance, check that the unit fits in your car and follow the transport instructions.",
      },
    ],
    realisaties: [],
  },
  eigenbrakel: {
    slug: "eigenbrakel",
    title: "Braine-l'Alleud dehumidifier hire, flats too | Vernast",
    description:
      "Dehumidifier hire in Braine-l'Alleud? Vernast delivers your drying package by appointment, flats included, installs it and collects it. For screed and leaks.",
    h1: "Construction dehumidifier hire in Braine-l'Alleud",
    kicker: "Braine-l'Alleud · delivery by appointment",
    rit: { afstand: "about 60 km", tijd: "about fifty minutes" },
    intro: [
      "Braine-l'Alleud is a town in Walloon Brabant, next to Waterloo. Alongside family homes there are many flats, and there it is often just one floor or one unit that needs drying. Vernast hires out construction dehumidifiers in every size, from a compact unit for a single room to a dehumidifier for a large new build.",
      "From Aartselaar we drive about fifty minutes to Braine-l'Alleud. You choose a delivery date when you book, and because we deliver **by appointment** in Wallonia, we then call about the time. Delivery, installation and collection are part of your drying package.",
    ],
    bouw: {
      kop: "Drying a flat or a single floor",
      alineas: [
        "If you are drying a flat, let us know which floor it is on, whether there is a lift and how wide the doors and corridors are. In a shared building, agree who will open the entrance and where the units may stand. That way installation goes smoothly and the common areas stay clear.",
        "A flat is usually well insulated and closed. That helps, because a condensation dehumidifier works best in a warm, closed room above 15 °C. Keep windows and doors shut while it runs, or damp outside air keeps coming in. **Empty the collection tank regularly** or run the drain hose into a drain.",
      ],
    },
    toestellen: [
      {
        key: "ttk170",
        waarom: "**For a single room or a small studio.** Compact and easy to move, up to 50 litres a day and suitable for rooms up to about 250 m³. It uses 0.75 kW on a standard socket.",
      },
      {
        key: "ttk350",
        waarom: "**For a whole flat or a house.** Up to 70 litres of moisture a day, for about 400 m³, using 1.1 kW. In a flat with separate rooms, we place it centrally and leave the inside doors open.",
      },
      {
        key: "radiaal2250",
        waarom: "**For a wet floor after a leak.** The radial fan sends 2,250 m³ of air an hour over the surface and is splash-proof (IP55). The moisture released this way is captured by the dehumidifier.",
      },
      {
        key: "ttk650",
        waarom: "**For a large new build or open business premises.** This condensation dehumidifier removes up to 110 litres a day in volumes up to about 600 m³ and uses 1.4 kW.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Braine-l'Alleud",
      alinea: "**In Braine-l'Alleud we deliver by appointment.** Once you have booked with a delivery date, we agree the time by phone. The technician drives about fifty minutes from Aartselaar. Tell us in advance which floor it is, whether there is a lift and where he can park. He brings the units inside, sets them up and shows you how to keep an eye on the condensate drain.",
    },
    afhalen: {
      kop: "Collecting it yourself from Braine-l'Alleud",
      alinea: "You can collect a single unit yourself by appointment in Aartselaar, at Boomsesteenweg 12, unit 11. From Braine-l'Alleud the drive takes about fifty minutes, and you make it again to bring the unit back. **Book it in advance** and it will be waiting for you. If the unit has to go to a flat high up in a building, delivery with installation saves you the carrying.",
    },
    buren: ["waterloo", "kasteelbrakel", "itter", "nijvel", "genepien"],
    faq: [
      {
        q: "How do I arrange a delivery in Braine-l'Alleud?",
        a: "Choose your drying package and a delivery date online. We then call you to fix the time. Include the address, the flat number and the floor, and who will let us in that day.",
      },
      {
        q: "Can a dehumidifier go up to a floor without a lift?",
        a: "Yes, but tell us in advance. A construction dehumidifier is large and heavy, so the technician needs to know what to expect. If there is no fixed staircase, we will work out together how to get the units upstairs.",
      },
      {
        q: "Can the windows be open while the dehumidifier runs?",
        a: "Preferably not. A condensation dehumidifier extracts moisture from the air in the room, and open windows keep letting in fresh damp outside air. Air the room briefly if you must, and otherwise keep it closed and warm.",
      },
      {
        q: "How do I know when the screed is dry enough?",
        a: "A dry top says little about the core of the floor. Have a moisture reading taken before the floor covering goes down. Your floor layer knows the limit their material allows.",
      },
      {
        q: "Can I collect a unit myself for a site in Braine-l'Alleud?",
        a: "You can, by appointment at our warehouse in Aartselaar. You are about fifty minutes on the road each way. Book in advance and follow the transport instructions, so the unit arrives upright and undamaged.",
      },
    ],
    realisaties: [],
  },
};
