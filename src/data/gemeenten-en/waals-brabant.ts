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
  nijvel: {
    slug: "nijvel",
    title: "Nivelles dehumidifier hire for older homes | Vernast",
    description:
      "Dehumidifier hire in Nivelles? Vernast delivers by appointment, installs and collects your drying package. For a town house renovation, screed or water damage.",
    h1: "Construction dehumidifier hire in Nivelles",
    kicker: "Nivelles · delivery by appointment",
    rit: { afstand: "about 70 km", tijd: "about an hour" },
    intro: [
      "Nivelles is the town around the Collegiate Church of St Gertrude, in Walloon Brabant. The town centre has older terraced houses, with housing estates and new builds beyond. For both, Vernast hires out construction dehumidifiers and fans to dry screed, plasterwork and damp walls.",
      "The drive from Aartselaar to Nivelles takes about an hour. In Wallonia we deliver **by appointment**: you choose a delivery date when you book, and we call afterwards about the time. Delivery, installation and collection are included in your drying package.",
    ],
    bouw: {
      kop: "Renovating older homes in Nivelles",
      alineas: [
        "Renovating an older house often means stripping plaster, laying a new screed and fitting new windows. Those windows seal better than the old ones, so the moisture from the works escapes less easily. A construction dehumidifier deals with it before it appears as condensation on the windows or as mould in the corners.",
        "In a terraced house, think about access: a narrow frontage, a steep staircase or no parking space outside. **Mention it when you book**, and the technician will take it into account. After the works, have the residual moisture measured before you paint or lay parquet.",
      ],
    },
    toestellen: [
      {
        key: "ttk350",
        waarom: "**For a terraced house you are renovating throughout.** This condensation dehumidifier removes up to 70 litres of moisture a day in rooms up to about 400 m³ and uses 1.1 kW.",
      },
      {
        key: "revolution",
        waarom: "**For a damp cellar or an unheated room.** This desiccant dehumidifier also works in the cold and, through hoses, dries moisture under a floor or behind a stud wall.",
      },
      {
        key: "ttk170",
        waarom: "**For a bathroom or a single bedroom.** Compact, up to 50 litres a day, for rooms up to about 250 m³. It runs on a standard socket and uses 0.75 kW.",
      },
      {
        key: "ttv4500",
        waarom: "**To help fresh plasterwork dry faster.** The fan moves 4,500 m³ of air an hour along the walls and uses only 0.2 kW. The moisture it releases is captured by the dehumidifier.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Nivelles",
      alinea: "**Delivery in Nivelles is by appointment.** You choose the date when you book, and we then call to arrange the time. Our technician is on the road from Aartselaar for about an hour. Tell us whether there is parking outside and whether the units need to go up a narrow staircase. He places the units, switches them on and explains how to check the condensate drain.",
    },
    afhalen: {
      kop: "Collecting it yourself from Nivelles",
      alinea: "For a single unit, you can come to our warehouse yourself by appointment, at Boomsesteenweg 12, unit 11 in Aartselaar. From Nivelles that is about an hour's drive, and the same again for the return trip with the unit. **Book in advance** so we can have it ready. If you need several units, delivery with installation saves you those trips.",
    },
    buren: ["eigenbrakel", "itter", "genepien"],
    faq: [
      {
        q: "How does delivery in Nivelles work?",
        a: "You book online and choose a delivery date. We then agree the time by phone, as everywhere in Wallonia. Make sure someone is there that day to let the technician in and show him the site.",
      },
      {
        q: "Why are my new windows steaming up after the renovation?",
        a: "New plasterwork and fresh screed give off moisture for weeks. New windows keep that damp air inside, so it condenses on the cold glass. A construction dehumidifier takes the moisture out of the air before it leads to mould.",
      },
      {
        q: "Does a construction dehumidifier work in an unheated house?",
        a: "A condensation dehumidifier prefers a temperature above 15 °C. In a cold, unheated house you are better off with a desiccant dehumidifier, or you add heat with a site heater. Warmth also speeds up the drying of screed and plasterwork.",
      },
      {
        q: "When can I paint new plasterwork?",
        a: "Only when the plaster is dry right through. A light colour on the surface does not prove that. Have a moisture reading taken and follow the advice of your decorator or the paint supplier on the permitted residual moisture.",
      },
      {
        q: "Can I collect a unit myself for a site in Nivelles?",
        a: "Yes, you can collect by appointment in Aartselaar. From Nivelles you drive about an hour each way. Book in advance and ask when you collect how to transport the unit safely.",
      },
    ],
    realisaties: [],
  },
  genepien: {
    slug: "genepien",
    title: "Genappe dehumidifier hire for farmhouses | Vernast",
    description:
      "Dehumidifier hire in Genappe? Vernast delivers and installs your drying package by appointment, with a site heater for a cold site, and collects it afterwards.",
    h1: "Construction dehumidifier hire in Genappe",
    kicker: "Genappe · delivery by appointment",
    rit: { afstand: "about 70 km", tijd: "about an hour" },
    intro: [
      "Genappe is a rural municipality in Walloon Brabant, with scattered villages, farmhouses and open fields. Converting an old farmhouse there or building a new home often means working in large, cold spaces. Vernast hires out the construction dehumidifiers, fans and site heaters to get screed and plasterwork dry there too.",
      "From Aartselaar we drive about an hour to Genappe. In Wallonia we deliver **by appointment**: you choose a delivery date when you book, and we call to fix the time. The price of the drying package covers delivery, installation and collection.",
    ],
    bouw: {
      kop: "Converting and building in winter in Genappe",
      alineas: [
        "A converted farmhouse often has thick walls and high rooms. Thick walls hold moisture for a long time, and a large volume needs a lot of drying capacity. So choose a unit that suits the volume and keep the space as closed as possible while it dries.",
        "On an unheated site in winter, the temperature soon drops below the 15 °C above which a condensation dehumidifier works best. **An electric site heater raises the temperature**, after which the dehumidifier removes the moisture. That heater needs three-phase power: check beforehand that there is a 400 V connection on site.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**For a large converted farmhouse or a new build.** This condensation dehumidifier extracts up to 110 litres a day from the air in volumes up to about 600 m³. It uses 1.4 kW.",
      },
      {
        key: "radiaal2250",
        waarom: "**To direct air along thick walls or over a large floor.** The radial fan moves 2,250 m³ an hour and, thanks to IP55, can handle splashes. It speeds up evaporation; the dehumidifier captures the moisture.",
      },
      {
        key: "teddh30",
        waarom: "**For a cold site.** This electric site heater delivers 30 kW and runs on 400 V (three-phase). It gets the room warm enough for a condensation dehumidifier to work properly.",
      },
      {
        key: "ttk350",
        waarom: "**For the smaller rooms or the upper floor.** Up to 70 litres a day, for rooms up to about 400 m³, using 1.1 kW. Alongside a larger dehumidifier downstairs, it takes care of the upper floor.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Genappe",
      alinea: "**In Genappe too, we deliver by appointment.** You choose the delivery date when you book, and we call about the time. The technician drives about an hour from Aartselaar. If the site is on a country lane or hard to find, send us directions or a location pin. On site, he sets up the units and explains what to keep an eye on while drying.",
    },
    afhalen: {
      kop: "Collecting it yourself from Genappe",
      alinea: "You can collect a single unit by appointment from our warehouse at Boomsesteenweg 12, unit 11 in Aartselaar. From Genappe that is about an hour's drive, and you cover the distance again to bring it back. **Book in advance** and it will be ready. A site heater and several dehumidifiers are better delivered and installed.",
    },
    buren: ["nijvel", "eigenbrakel", "lasne", "villers-la-ville", "court-saint-etienne"],
    faq: [
      {
        q: "How do you deliver in Genappe?",
        a: "By appointment. You put a drying package together online and choose a delivery date, after which we call you to set the time. For a remote site, include clear directions.",
      },
      {
        q: "Does a construction dehumidifier work on a cold site in winter?",
        a: "A condensation dehumidifier loses much of its efficiency below 15 °C. Add heat with an electric site heater, or choose a desiccant dehumidifier that also absorbs moisture in the cold. Keep the space as closed as possible as well.",
      },
      {
        q: "What connection does the 30 kW site heater need?",
        a: "A 400 V connection, so three-phase power. A standard socket cannot supply that load. Have your electrician or contractor check that the site distribution board is suitable before we deliver.",
      },
      {
        q: "Why do thick walls dry so slowly?",
        a: "Moisture has to travel from the core of the wall to the surface before it can evaporate. The thicker the wall, the longer that path. A dehumidifier and a fan speed up evaporation at the surface, but patience is still needed.",
      },
      {
        q: "Can I collect a unit myself for a site in Genappe?",
        a: "Yes, by appointment in Aartselaar, about an hour's drive each way. Book in advance and check that the dehumidifier fits in your car. A 30 kW site heater is better delivered.",
      },
    ],
    realisaties: [],
  },
  lasne: {
    slug: "lasne",
    title: "Lasne dehumidifier hire, dry screed for parquet | Vernast",
    description:
      "Dehumidifier hire in Lasne? Vernast delivers your drying package by appointment, installs and collects it. For screed under parquet, plaster and water damage.",
    h1: "Construction dehumidifier hire in Lasne",
    kicker: "Lasne · delivery by appointment",
    rit: { afstand: "about 60 km", tijd: "almost an hour" },
    intro: [
      "Lasne is a green, residential municipality in Walloon Brabant, next to Waterloo and La Hulpe. There are many detached houses, and in a renovation or new build, parquet or another wooden floor often goes on top of the screed. That is exactly when the subfloor must be properly dry, and Vernast hires out the construction dehumidifiers for it.",
      "From our warehouse in Aartselaar to Lasne is almost an hour's drive. Delivery in Wallonia is **by appointment**: you choose a delivery date when you book, and we call you about the time. Installation and collection are included in the price of the package.",
    ],
    bouw: {
      kop: "A dry screed under parquet in Lasne",
      alineas: [
        "Parquet and other wooden floors tolerate little residual moisture in the screed. If the wood goes down too early, it can swell or cup. A construction dehumidifier brings the moisture content of the screed down faster, but the moisture reading decides whether the floor is ready.",
        "If there is underfloor heating in the screed, follow the installer's heating-up protocol. The heat supports the drying, while the dehumidifier takes the released moisture out of the air. **Have the residual moisture measured** before the parquet fitter starts, and keep the readings.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**For a spacious house with large open areas.** This condensation dehumidifier extracts up to 110 litres of moisture a day from rooms up to about 600 m³, using 1.4 kW.",
      },
      {
        key: "revolution",
        waarom: "**For the cellar or a cool room.** A desiccant dehumidifier keeps absorbing moisture at temperatures where a condensation dehumidifier falls short, and through hoses also dries under floors.",
      },
      {
        key: "ttk350",
        waarom: "**For the upper floor or a smaller house.** Up to 70 litres a day in volumes up to about 400 m³, using 1.1 kW.",
      },
      {
        key: "ttv4500",
        waarom: "**To keep the air above fresh screed moving.** This fan moves 4,500 m³ an hour at 0.2 kW. Evaporation speeds up; capturing the moisture remains the dehumidifier's job.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Lasne",
      alinea: "**In Lasne we deliver by appointment.** Choose a delivery date when you book, and we then call to agree the time. The drive from Aartselaar takes almost an hour. Let us know if there is a long driveway, a gate with a code or stairs down to the cellar. The technician places the units and shows you how to drain the collected water.",
    },
    afhalen: {
      kop: "Collecting it yourself from Lasne",
      alinea: "If you want to collect a single unit yourself, you can do so by appointment at Boomsesteenweg 12, unit 11 in Aartselaar. The drive from Lasne takes almost an hour, and you make it again when you return the unit. **Book in advance** and the unit will be ready for you. For a whole house, it is better to have the units delivered and installed.",
    },
    buren: ["waterloo", "terhulpen", "rixensart", "genepien", "ottignies-louvain-la-neuve"],
    faq: [
      {
        q: "How do I book a delivery in Lasne?",
        a: "Book a drying package online and choose the delivery date. We then get in touch to agree a time. Include the address, how the house can be reached and who will be there for the delivery.",
      },
      {
        q: "When can the parquet go down on the screed?",
        a: "Only when a moisture reading shows the screed is dry enough for the chosen wood. The limit differs by type of screed and floor, so check it with your parquet fitter. A top that looks dry is no proof.",
      },
      {
        q: "Can I use the underfloor heating to dry the screed?",
        a: "Yes, but follow the installer's heating-up protocol and raise the temperature step by step. Heating up too quickly can make the screed crack. Combine it with a construction dehumidifier that takes the moisture out of the air.",
      },
      {
        q: "Does a construction dehumidifier also work in a cool cellar?",
        a: "A condensation dehumidifier achieves little in a cellar below 15 °C. A desiccant dehumidifier does work well there, even if it stays cold. If water is getting in, deal with the cause first.",
      },
      {
        q: "Can I collect a unit myself for a site in Lasne?",
        a: "You can, by appointment at our warehouse in Aartselaar. From Lasne you are on the road for almost an hour each way. Book ahead and read the transport instructions before you set off.",
      },
    ],
    realisaties: [],
  },
  terhulpen: {
    slug: "terhulpen",
    title: "La Hulpe dehumidifier hire by the Sonian Forest | Vernast",
    description:
      "Dehumidifier hire in La Hulpe: Vernast delivers by appointment, installs the units and collects them again. For screed, plasterwork and water damage.",
    h1: "Construction dehumidifier hire in La Hulpe",
    kicker: "La Hulpe · delivery by appointment",
    rit: { afstand: "about 55 km", tijd: "about fifty minutes" },
    intro: [
      "Drying screed, plasterwork or a room after water damage in La Hulpe? Vernast hires out construction dehumidifiers, fans and site heaters as a drying package. **Delivery, installation and collection are included.**",
      "Our warehouse in Aartselaar is about fifty minutes' drive away. La Hulpe is in Wallonia, so we deliver by appointment: you choose a delivery date when you book, and we then fix the delivery time together.",
    ],
    bouw: {
      kop: "Construction drying for your project in La Hulpe",
      alineas: [
        "La Hulpe lies between Hoeilaart, Overijse and Rixensart, on the edge of the Sonian Forest. In your request, give the full site address and who will meet the technician there. If the site is on a narrow street or a cul-de-sac, mention that too.",
        "After a leak or a wet cellar, deal with the cause first and remove the standing water. Only then is drying worthwhile. **A condensation dehumidifier works best above 15 °C**; in a cold cellar we prefer to use a desiccant dehumidifier.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**For a whole floor or a large site.** This dehumidifier extracts up to 110 litres of water a day from the air and is suitable for rooms up to 600 m³. It runs on a standard socket.",
      },
      {
        key: "ttk350",
        waarom: "**For a house with fresh screed.** Up to 70 litres a day in rooms up to 400 m³, using 1.1 kW. With several rooms, we spread the units across the zones.",
      },
      {
        key: "revolution",
        waarom: "**For a cold cellar or a floor after water damage.** This desiccant dehumidifier also works at low temperatures and, through hoses, dries under a floor in a targeted way.",
      },
      {
        key: "ttv4500",
        waarom: "**To keep the air moving.** The fan moves 4,500 m³ of air an hour along wet walls and floors. It does not remove moisture from the air itself; the construction dehumidifier next to it does that.",
      },
    ],
    levering: {
      kop: "Delivery and installation in La Hulpe",
      alinea: "**Delivery, installation and collection are part of your drying package.** You choose a delivery date when you book; because La Hulpe is in Wallonia, we then agree the exact delivery time with you. The drive from Aartselaar takes about fifty minutes. Let us know in advance about a floor without a fixed staircase or difficult access. The technician places the units and shows you how to check the condensate drain.",
    },
    afhalen: {
      kop: "Collecting it yourself from La Hulpe",
      alinea: "You can collect a single unit by appointment from our warehouse at Boomsesteenweg 12, unit 11 in Aartselaar. From La Hulpe the drive takes about fifty minutes, and you make it twice: when collecting and when returning. **Book in advance** so your unit is ready. For several units, a drying package with delivery is usually more convenient.",
    },
    buren: ["hoeilaart", "overijse", "rixensart", "lasne", "waterloo"],
    faq: [
      {
        q: "When can you deliver in La Hulpe?",
        a: "You choose a delivery date yourself when you book. Because La Hulpe is in Wallonia, we then fix the delivery time together with you. Give us the site address, the floor and the start date you want.",
      },
      {
        q: "How many dehumidifiers will my house in La Hulpe need?",
        a: "That depends on the volume, the number of closed rooms and how much moisture is in the screed or plasterwork. Use the calculator to put a package together; if your site is unusual, call us for advice.",
      },
      {
        q: "Will a dehumidifier cope with a cold cellar?",
        a: "A condensation dehumidifier needs a temperature above 15 °C to work well. In a cold cellar or an unheated extension we therefore choose the desiccant dehumidifier, which also absorbs moisture at low temperatures.",
      },
      {
        q: "What electrical connection do I need?",
        a: "The construction dehumidifiers and fans run on a standard 230 V socket. Only the 20 and 30 kW electric site heaters need 400 V three-phase power. If in doubt, have your electrician check the connection.",
      },
      {
        q: "What should I include in my request for a site in La Hulpe?",
        a: "The full site address and who will meet the technician there. If the site is on a narrow street or a cul-de-sac, mention that too, so we know how close the van can get.",
      },
    ],
    realisaties: [],
  },
  rixensart: {
    slug: "rixensart",
    title: "Dehumidifier hire in Rixensart, Genval, Rosières | Vernast",
    description:
      "Dehumidifier hire in Rixensart, Genval or Rosières? Vernast installs your drying package by appointment and collects it. Advice on screed and water damage.",
    h1: "Construction dehumidifier hire in Rixensart",
    kicker: "Rixensart · delivery by appointment",
    rit: { afstand: "about 58 km", tijd: "about fifty minutes" },
    intro: [
      "Need to dry screed, a newly plastered wall or a wet cellar in Rixensart? At Vernast you hire a complete drying package for it. **We bring the units, put them in place and collect them again afterwards.**",
      "From our warehouse in Aartselaar we reach Rixensart in about fifty minutes. When you book, you choose a delivery date; for Wallonia we then set the delivery time in consultation with you.",
    ],
    bouw: {
      kop: "Construction drying for your project in Rixensart",
      alineas: [
        "Rixensart also includes Genval and Rosières. So in your request, give the full address including the village, and who will meet us on site. If you are drying a flat, tell us whether there is a lift and how wide the stairwell is.",
        "A fresh screed releases moisture into the air for weeks. Exactly how long depends on the thickness, the mix and the temperature in the room. **Keep windows and doors shut while the dehumidifier runs**, or it pulls in moisture from outside. Have the residual moisture measured before you lay a floor.",
      ],
    },
    toestellen: [
      {
        key: "ttk350",
        waarom: "**For a whole house or a flat.** Extracts up to 70 litres a day from rooms up to 400 m³. With several closed rooms, we spread the capacity across the zones.",
      },
      {
        key: "ttv4500",
        waarom: "**To make wet surfaces dry faster.** This fan blows 4,500 m³ of air an hour along floor and walls. Always combine it with a construction dehumidifier, because it collects no water itself.",
      },
      {
        key: "revolution",
        waarom: "**For a cold, unheated cellar.** The desiccant dehumidifier keeps absorbing moisture where a condensation dehumidifier achieves little, and can dry under a floor in a targeted way through hoses.",
      },
      {
        key: "ttk170",
        waarom: "**For a bathroom, bedroom or other single room.** This compact dehumidifier extracts up to 50 litres a day from rooms up to 250 m³ and uses 0.75 kW.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Rixensart",
      alinea: "**Your drying package includes delivery, installation and collection.** Once you have booked with a delivery date, we get in touch to fix the delivery time in Rixensart. Allow about fifty minutes' drive from Aartselaar. Tell us beforehand if parking is limited or access is awkward. During installation, the technician shows you how to check the water tank or the drain hose.",
    },
    afhalen: {
      kop: "Collecting it yourself from Rixensart",
      alinea: "If you would rather drive yourself, you collect a single unit by appointment at Boomsesteenweg 12, unit 11 in Aartselaar. From Rixensart that is about fifty minutes, once to collect and again to return it. **Book ahead** and check that the unit fits in your car. If it involves several units, delivery saves you those trips.",
    },
    buren: ["terhulpen", "lasne", "overijse", "waver"],
    faq: [
      {
        q: "Do you also deliver in Genval and Rosières?",
        a: "Yes, both villages of Rixensart are within our delivery area. You choose a delivery date when you book, and because it is in Wallonia, we then agree the exact time with you.",
      },
      {
        q: "How do I choose between a small and a large dehumidifier?",
        a: "Look at the volume of the room and the amount of moisture. The compact dehumidifier is enough up to 250 m³, the 70-litre unit up to 400 m³. If in doubt, the calculator helps, or just give us a call.",
      },
      {
        q: "Can I air the room while the dehumidifier runs?",
        a: "Preferably keep windows and doors shut. Open windows let outside air in, and in damp weather the dehumidifier then has to capture that moisture too. Airing briefly at the end of a working day is fine.",
      },
      {
        q: "Do I need three-phase power?",
        a: "Not for the construction dehumidifiers and fans: they run on a standard 230 V socket. 400 V three-phase power is only needed for the electric site heaters. Do not put too many units on the same circuit.",
      },
      {
        q: "When is the screed dry enough for tiles or parquet?",
        a: "A moisture reading decides that, not the number of hire days. Your floor layer knows what residual moisture value their floor requires and can measure it. Keep the dehumidifier running until that value is reached.",
      },
    ],
    realisaties: [],
  },
};
