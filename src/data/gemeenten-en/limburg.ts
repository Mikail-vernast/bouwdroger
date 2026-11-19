import type { Gemeente } from "../gemeenten.js";

/**
 * De Engelse teksten van de gemeentepagina's in deze provincie, gesleuteld op
 * de Nederlandse slug. Zie README.md in deze map voor de regels en hoe een
 * gemeente aangezet wordt (`aan/limburg.ts`).
 */
export const GEMEENTEN: Record<string, Gemeente> = {
  hasselt: {
    slug: "hasselt",
    title: "Construction dehumidifier hire in Hasselt | Vernast",
    description:
      "Dehumidifier hire in Hasselt? Your Vernast drying package, with delivery, installation and collection. Advice for new builds, renovations and water damage.",
    h1: "Construction dehumidifier hire in Hasselt",
    kicker: "Hasselt · delivery to your site",
    rit: { afstand: "about 85 km", tijd: "about an hour" },
    intro: [
      "Need a construction dehumidifier in Hasselt for a new build, a renovation or water damage? At Vernast you hire construction dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Hasselt",
      alineas: [
        "Vernast delivers to Hasselt and nearby places such as Zonhoven, Diepenbeek and Alken. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "Drying a flat or an upper floor? Let us know whether there is a lift or a fixed staircase and how wide the access is. The available space partly decides which units we can install. In a shared building, agree in advance who opens the door and where the equipment can be left.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "ttk350",
        waarom: "**For larger rooms or several drying zones.** The capacity you need depends on the volume and the wet materials. The layout of your site decides where the units go.",
      },
      {
        key: "ttk170",
        waarom: "**For a single room or a smaller drying zone.** Give us the dimensions, the temperature and the amount of moisture so we can tell whether this unit has enough capacity.",
      },
      {
        key: "ttv4500",
        waarom: "**For air circulation alongside the dehumidifier.** A fan helps move air along damp surfaces. It does not remove moisture from the room itself and does not replace the dehumidifier.",
      },
      {
        key: "ttk650",
        waarom: "**For large volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need to dry.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Hasselt",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Hasselt, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Hasselt",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["zonhoven", "diepenbeek", "alken", "lummen", "herk-de-stad", "genk"],
    faq: [
      {
        q: "How do I arrange a delivery in Hasselt?",
        a: "Calculate your drying package online or contact us with your address in Hasselt, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
      },
      {
        q: "How many dehumidifiers do I need?",
        a: "That depends on the volume, the layout, the material and the amount of moisture. An open-plan floor needs a different set-up from several closed rooms. Use the calculator for your package and ask for advice if your situation is different, for example with a high room or hidden moisture.",
      },
      {
        q: "How do I know when the floor or wall is dry enough?",
        a: "The hire period alone gives no certainty about that. Have the residual moisture checked with a method that suits the material. Your floor layer or decorator decides which moisture reading, and any further measurement, is needed before the chosen finish can be applied.",
      },
      {
        q: "Can a dehumidifier be installed on an upper floor?",
        a: "That depends on the access and the unit. When you make your request, mention the floor level, any lift and narrow passages. If there is no fixed staircase, discuss in advance how the units will be taken up and which surcharge applies.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Hasselt?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  genk: {
    slug: "genk",
    title: "Hire a construction dehumidifier in Genk | Vernast",
    description:
      "Construction dehumidifier hire in Genk, with delivery, installation and collection. Your Vernast drying package for a new build, renovation or water damage.",
    h1: "Construction dehumidifier hire in Genk",
    kicker: "Genk · delivery to your site",
    rit: { afstand: "about 95 km", tijd: "about an hour and five minutes" },
    intro: [
      "Need a construction dehumidifier in Genk for a new build, a renovation or water damage? At Vernast you hire construction dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Genk",
      alineas: [
        "Vernast delivers to Genk and nearby places such as Hasselt, Zonhoven and Diepenbeek. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a damp cellar or a leak, the work starts with the cause: if water keeps coming in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "ttk170",
        waarom: "**For a single room or a smaller drying zone.** Give us the dimensions, the temperature and the amount of moisture so we can tell whether this unit has enough capacity.",
      },
      {
        key: "ttk350",
        waarom: "**For larger rooms or several drying zones.** The capacity you need depends on the volume and the wet materials. The layout of your site decides where the units go.",
      },
      {
        key: "ttv4500",
        waarom: "**For air circulation alongside the dehumidifier.** A fan helps move air along damp surfaces. It does not remove moisture from the room itself and does not replace the dehumidifier.",
      },
      {
        key: "ttk650",
        waarom: "**For large volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need to dry.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Genk",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Genk, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Genk",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["hasselt", "zonhoven", "diepenbeek", "zutendaal", "as", "oudsbergen"],
    faq: [
      {
        q: "How do I arrange a delivery in Genk?",
        a: "Calculate your drying package online or contact us with your address in Genk, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
      },
      {
        q: "How many dehumidifiers do I need?",
        a: "That depends on the volume, the layout, the material and the amount of moisture. An open-plan floor needs a different set-up from several closed rooms. Use the calculator for your package and ask for advice if your situation is different, for example with a high room or hidden moisture.",
      },
      {
        q: "How do I know when the floor or wall is dry enough?",
        a: "The hire period alone gives no certainty about that. Have the residual moisture checked with a method that suits the material. Your floor layer or decorator decides which moisture reading, and any further measurement, is needed before the chosen finish can be applied.",
      },
      {
        q: "Does a construction dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps coming in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Genk?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  "sint-truiden": {
    slug: "sint-truiden",
    title: "Dehumidifier hire in Sint-Truiden, delivered | Vernast",
    description:
      "Construction dehumidifier hire in Sint-Truiden for screed, plaster or a damp cellar. Delivery, installation and collection come with your drying package.",
    h1: "Construction dehumidifier hire in Sint-Truiden",
    kicker: "Sint-Truiden · delivery to your site",
    rit: { afstand: "about 85 km", tijd: "about an hour and five minutes" },
    intro: [
      "Need a construction dehumidifier in Sint-Truiden for a new build, a renovation or water damage? At Vernast you hire construction dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Sint-Truiden",
      alineas: [
        "Vernast delivers to Sint-Truiden and nearby places such as Nieuwerkerken, Gingelom and Heers. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a damp cellar or a leak, the work starts with the cause: if water keeps coming in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "revolution",
        waarom: "**For a drying set-up after water damage.** First establish where the moisture is and how the structure is built up. For moisture under a floor or behind a wall, a tailored approach may be needed.",
      },
      {
        key: "ttk650",
        waarom: "**For large volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need to dry.",
      },
      {
        key: "ttk350",
        waarom: "**For larger rooms or several drying zones.** The capacity you need depends on the volume and the wet materials. The layout of your site decides where the units go.",
      },
      {
        key: "ttv4500",
        waarom: "**For air circulation alongside the dehumidifier.** A fan helps move air along damp surfaces. It does not remove moisture from the room itself and does not replace the dehumidifier.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Sint-Truiden",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Sint-Truiden, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Sint-Truiden",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["nieuwerkerken", "gingelom", "heers", "wellen", "alken", "tongeren-borgloon"],
    faq: [
      {
        q: "How do I arrange a delivery in Sint-Truiden?",
        a: "Calculate your drying package online or contact us with your address in Sint-Truiden, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
      },
      {
        q: "How many dehumidifiers do I need?",
        a: "That depends on the volume, the layout, the material and the amount of moisture. An open-plan floor needs a different set-up from several closed rooms. Use the calculator for your package and ask for advice if your situation is different, for example with a high room or hidden moisture.",
      },
      {
        q: "How do I know when the floor or wall is dry enough?",
        a: "The hire period alone gives no certainty about that. Have the residual moisture checked with a method that suits the material. Your floor layer or decorator decides which moisture reading, and any further measurement, is needed before the chosen finish can be applied.",
      },
      {
        q: "Does a construction dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps coming in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Sint-Truiden?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  "tongeren-borgloon": {
    slug: "tongeren-borgloon",
    title: "Construction dehumidifier hire, Tongeren-Borgloon | Vernast",
    description:
      "Hire a construction dehumidifier in Tongeren-Borgloon. Vernast delivers, installs and collects with your drying package. Calculate your hire price online.",
    h1: "Construction dehumidifier hire in Tongeren-Borgloon",
    kicker: "Tongeren-Borgloon · delivery to your site",
    rit: { afstand: "about 105 km", tijd: "about an hour and a quarter" },
    intro: [
      "Need a construction dehumidifier in Tongeren-Borgloon for a new build, a renovation or water damage? At Vernast you hire construction dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Tongeren-Borgloon",
      alineas: [
        "Vernast delivers to Tongeren-Borgloon and nearby places such as Bilzen-Hoeselt, Riemst and Heers. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a damp cellar or a leak, the work starts with the cause: if water keeps coming in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "revolution",
        waarom: "**For a drying set-up after water damage.** First establish where the moisture is and how the structure is built up. For moisture under a floor or behind a wall, a tailored approach may be needed.",
      },
      {
        key: "ttv4500",
        waarom: "**For air circulation alongside the dehumidifier.** A fan helps move air along damp surfaces. It does not remove moisture from the room itself and does not replace the dehumidifier.",
      },
      {
        key: "ttk350",
        waarom: "**For larger rooms or several drying zones.** The capacity you need depends on the volume and the wet materials. The layout of your site decides where the units go.",
      },
      {
        key: "ttk650",
        waarom: "**For large volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need to dry.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Tongeren-Borgloon",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Tongeren-Borgloon, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Tongeren-Borgloon",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["bilzen-hoeselt", "riemst", "heers", "wellen", "sint-truiden", "herstappe"],
    faq: [
      {
        q: "How do I arrange a delivery in Tongeren-Borgloon?",
        a: "Calculate your drying package online or contact us with your address in Tongeren-Borgloon, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
      },
      {
        q: "How many dehumidifiers do I need?",
        a: "That depends on the volume, the layout, the material and the amount of moisture. An open-plan floor needs a different set-up from several closed rooms. Use the calculator for your package and ask for advice if your situation is different, for example with a high room or hidden moisture.",
      },
      {
        q: "How do I know when the floor or wall is dry enough?",
        a: "The hire period alone gives no certainty about that. Have the residual moisture checked with a method that suits the material. Your floor layer or decorator decides which moisture reading, and any further measurement, is needed before the chosen finish can be applied.",
      },
      {
        q: "Does a construction dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps coming in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Tongeren-Borgloon?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  "bilzen-hoeselt": {
    slug: "bilzen-hoeselt",
    title: "Construction dehumidifier hire in Bilzen-Hoeselt | Vernast",
    description:
      "Drying a new build, renovation or water damage in Bilzen-Hoeselt? Calculate your Vernast drying package online, with delivery, installation and collection.",
    h1: "Construction dehumidifier hire in Bilzen-Hoeselt",
    kicker: "Bilzen-Hoeselt · delivery to your site",
    rit: { afstand: "about 100 km", tijd: "about an hour and ten minutes" },
    intro: [
      "Need a construction dehumidifier in Bilzen-Hoeselt for a new build, a renovation or water damage? At Vernast you hire construction dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Bilzen-Hoeselt",
      alineas: [
        "Vernast delivers to Bilzen-Hoeselt and nearby places such as Tongeren-Borgloon, Riemst and Diepenbeek. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a damp cellar or a leak, the work starts with the cause: if water keeps coming in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**For large volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need to dry.",
      },
      {
        key: "ttv4500",
        waarom: "**For air circulation alongside the dehumidifier.** A fan helps move air along damp surfaces. It does not remove moisture from the room itself and does not replace the dehumidifier.",
      },
      {
        key: "revolution",
        waarom: "**For a drying set-up after water damage.** First establish where the moisture is and how the structure is built up. For moisture under a floor or behind a wall, a tailored approach may be needed.",
      },
      {
        key: "ttk350",
        waarom: "**For larger rooms or several drying zones.** The capacity you need depends on the volume and the wet materials. The layout of your site decides where the units go.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Bilzen-Hoeselt",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Bilzen-Hoeselt, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Bilzen-Hoeselt",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["tongeren-borgloon", "riemst", "diepenbeek", "zutendaal", "lanaken", "wellen"],
    faq: [
      {
        q: "How do I arrange a delivery in Bilzen-Hoeselt?",
        a: "Calculate your drying package online or contact us with your address in Bilzen-Hoeselt, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
      },
      {
        q: "How many dehumidifiers do I need?",
        a: "That depends on the volume, the layout, the material and the amount of moisture. An open-plan floor needs a different set-up from several closed rooms. Use the calculator for your package and ask for advice if your situation is different, for example with a high room or hidden moisture.",
      },
      {
        q: "How do I know when the floor or wall is dry enough?",
        a: "The hire period alone gives no certainty about that. Have the residual moisture checked with a method that suits the material. Your floor layer or decorator decides which moisture reading, and any further measurement, is needed before the chosen finish can be applied.",
      },
      {
        q: "Does a construction dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps coming in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Bilzen-Hoeselt?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  riemst: {
    slug: "riemst",
    title: "Construction dehumidifier hire in Riemst | Vernast",
    description:
      "Dehumidifier hire in Riemst for screed, plasterwork or a leak. Your Vernast drying package covers delivery, installation and collection at your site.",
    h1: "Construction dehumidifier hire in Riemst",
    kicker: "Riemst · delivery to your site",
    rit: { afstand: "about 115 km", tijd: "about an hour and twenty minutes" },
    intro: [
      "Need a construction dehumidifier in Riemst for a new build, a renovation or water damage? At Vernast you hire construction dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Riemst",
      alineas: [
        "Vernast delivers to Riemst and nearby places such as Tongeren-Borgloon, Bilzen-Hoeselt and Lanaken. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a damp cellar or a leak, the work starts with the cause: if water keeps coming in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "revolution",
        waarom: "**For a drying set-up after water damage.** First establish where the moisture is and how the structure is built up. For moisture under a floor or behind a wall, a tailored approach may be needed.",
      },
      {
        key: "ttv4500",
        waarom: "**For air circulation alongside the dehumidifier.** A fan helps move air along damp surfaces. It does not remove moisture from the room itself and does not replace the dehumidifier.",
      },
      {
        key: "ttk350",
        waarom: "**For larger rooms or several drying zones.** The capacity you need depends on the volume and the wet materials. The layout of your site decides where the units go.",
      },
      {
        key: "ttk650",
        waarom: "**For large volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need to dry.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Riemst",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Riemst, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Riemst",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["tongeren-borgloon", "bilzen-hoeselt", "lanaken", "voeren", "herstappe"],
    faq: [
      {
        q: "How do I arrange a delivery in Riemst?",
        a: "Calculate your drying package online or contact us with your address in Riemst, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
      },
      {
        q: "How many dehumidifiers do I need?",
        a: "That depends on the volume, the layout, the material and the amount of moisture. An open-plan floor needs a different set-up from several closed rooms. Use the calculator for your package and ask for advice if your situation is different, for example with a high room or hidden moisture.",
      },
      {
        q: "How do I know when the floor or wall is dry enough?",
        a: "The hire period alone gives no certainty about that. Have the residual moisture checked with a method that suits the material. Your floor layer or decorator decides which moisture reading, and any further measurement, is needed before the chosen finish can be applied.",
      },
      {
        q: "Does a construction dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps coming in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Riemst?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  wellen: {
    slug: "wellen",
    title: "Hire a construction dehumidifier in Wellen | Vernast",
    description:
      "Construction dehumidifier hire in Wellen, near Sint-Truiden and Alken. Delivery, installation and collection are included in your Vernast drying package.",
    h1: "Construction dehumidifier hire in Wellen",
    kicker: "Wellen · delivery to your site",
    rit: { afstand: "about 95 km", tijd: "about an hour and ten minutes" },
    intro: [
      "Need a construction dehumidifier in Wellen for a new build, a renovation or water damage? At Vernast you hire construction dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Wellen",
      alineas: [
        "Vernast delivers to Wellen and nearby places such as Sint-Truiden, Alken and Tongeren-Borgloon. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a damp cellar or a leak, the work starts with the cause: if water keeps coming in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "revolution",
        waarom: "**For a drying set-up after water damage.** First establish where the moisture is and how the structure is built up. For moisture under a floor or behind a wall, a tailored approach may be needed.",
      },
      {
        key: "ttk650",
        waarom: "**For large volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need to dry.",
      },
      {
        key: "ttv4500",
        waarom: "**For air circulation alongside the dehumidifier.** A fan helps move air along damp surfaces. It does not remove moisture from the room itself and does not replace the dehumidifier.",
      },
      {
        key: "ttk350",
        waarom: "**For larger rooms or several drying zones.** The capacity you need depends on the volume and the wet materials. The layout of your site decides where the units go.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Wellen",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Wellen, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Wellen",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["sint-truiden", "alken", "tongeren-borgloon", "heers", "nieuwerkerken"],
    faq: [
      {
        q: "How do I arrange a delivery in Wellen?",
        a: "Calculate your drying package online or contact us with your address in Wellen, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
      },
      {
        q: "How many dehumidifiers do I need?",
        a: "That depends on the volume, the layout, the material and the amount of moisture. An open-plan floor needs a different set-up from several closed rooms. Use the calculator for your package and ask for advice if your situation is different, for example with a high room or hidden moisture.",
      },
      {
        q: "How do I know when the floor or wall is dry enough?",
        a: "The hire period alone gives no certainty about that. Have the residual moisture checked with a method that suits the material. Your floor layer or decorator decides which moisture reading, and any further measurement, is needed before the chosen finish can be applied.",
      },
      {
        q: "Does a construction dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps coming in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Wellen?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  heers: {
    slug: "heers",
    title: "Dehumidifier hire in Heers for new builds | Vernast",
    description:
      "Hire a construction dehumidifier in Heers for a new build, renovation or water damage. Vernast delivers and installs the units. Calculate your price online.",
    h1: "Construction dehumidifier hire in Heers",
    kicker: "Heers · delivery to your site",
    rit: { afstand: "about 95 km", tijd: "about an hour and ten minutes" },
    intro: [
      "Need a construction dehumidifier in Heers for a new build, a renovation or water damage? At Vernast you hire construction dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Heers",
      alineas: [
        "Vernast delivers to Heers and nearby places such as Sint-Truiden, Gingelom and Wellen. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a damp cellar or a leak, the work starts with the cause: if water keeps coming in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**For large volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need to dry.",
      },
      {
        key: "ttv4500",
        waarom: "**For air circulation alongside the dehumidifier.** A fan helps move air along damp surfaces. It does not remove moisture from the room itself and does not replace the dehumidifier.",
      },
      {
        key: "revolution",
        waarom: "**For a drying set-up after water damage.** First establish where the moisture is and how the structure is built up. For moisture under a floor or behind a wall, a tailored approach may be needed.",
      },
      {
        key: "ttk350",
        waarom: "**For larger rooms or several drying zones.** The capacity you need depends on the volume and the wet materials. The layout of your site decides where the units go.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Heers",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Heers, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Heers",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["sint-truiden", "gingelom", "wellen", "tongeren-borgloon"],
    faq: [
      {
        q: "How do I arrange a delivery in Heers?",
        a: "Calculate your drying package online or contact us with your address in Heers, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
      },
      {
        q: "How many dehumidifiers do I need?",
        a: "That depends on the volume, the layout, the material and the amount of moisture. An open-plan floor needs a different set-up from several closed rooms. Use the calculator for your package and ask for advice if your situation is different, for example with a high room or hidden moisture.",
      },
      {
        q: "How do I know when the floor or wall is dry enough?",
        a: "The hire period alone gives no certainty about that. Have the residual moisture checked with a method that suits the material. Your floor layer or decorator decides which moisture reading, and any further measurement, is needed before the chosen finish can be applied.",
      },
      {
        q: "Does a construction dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps coming in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Heers?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  gingelom: {
    slug: "gingelom",
    title: "Construction dehumidifier hire in Gingelom | Vernast",
    description:
      "Dehumidifier hire in Gingelom? Calculate your drying package online. Vernast delivers, installs and collects, and advises on screed, plaster and damp cellars.",
    h1: "Construction dehumidifier hire in Gingelom",
    kicker: "Gingelom · delivery to your site",
    rit: { afstand: "about 90 km", tijd: "about an hour and five minutes" },
    intro: [
      "Need a construction dehumidifier in Gingelom for a new build, a renovation or water damage? At Vernast you hire construction dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Gingelom",
      alineas: [
        "Vernast delivers to Gingelom and nearby places such as Sint-Truiden, Heers and Nieuwerkerken. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a damp cellar or a leak, the work starts with the cause: if water keeps coming in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**For large volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need to dry.",
      },
      {
        key: "ttv4500",
        waarom: "**For air circulation alongside the dehumidifier.** A fan helps move air along damp surfaces. It does not remove moisture from the room itself and does not replace the dehumidifier.",
      },
      {
        key: "revolution",
        waarom: "**For a drying set-up after water damage.** First establish where the moisture is and how the structure is built up. For moisture under a floor or behind a wall, a tailored approach may be needed.",
      },
      {
        key: "ttk350",
        waarom: "**For larger rooms or several drying zones.** The capacity you need depends on the volume and the wet materials. The layout of your site decides where the units go.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Gingelom",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Gingelom, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Gingelom",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["sint-truiden", "heers", "nieuwerkerken"],
    faq: [
      {
        q: "How do I arrange a delivery in Gingelom?",
        a: "Calculate your drying package online or contact us with your address in Gingelom, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
      },
      {
        q: "How many dehumidifiers do I need?",
        a: "That depends on the volume, the layout, the material and the amount of moisture. An open-plan floor needs a different set-up from several closed rooms. Use the calculator for your package and ask for advice if your situation is different, for example with a high room or hidden moisture.",
      },
      {
        q: "How do I know when the floor or wall is dry enough?",
        a: "The hire period alone gives no certainty about that. Have the residual moisture checked with a method that suits the material. Your floor layer or decorator decides which moisture reading, and any further measurement, is needed before the chosen finish can be applied.",
      },
      {
        q: "Does a construction dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps coming in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Gingelom?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  herstappe: {
    slug: "herstappe",
    title: "Dehumidifier hire in Herstappe, with delivery | Vernast",
    description:
      "Construction dehumidifier hire in Herstappe, near Tongeren-Borgloon and Riemst. Your Vernast drying package includes delivery, installation and collection.",
    h1: "Construction dehumidifier hire in Herstappe",
    kicker: "Herstappe · delivery to your site",
    rit: { afstand: "about 110 km", tijd: "about an hour and a quarter" },
    intro: [
      "Need a construction dehumidifier in Herstappe for a new build, a renovation or water damage? At Vernast you hire construction dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Herstappe",
      alineas: [
        "Vernast delivers to Herstappe and nearby places such as Tongeren-Borgloon and Riemst. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a damp cellar or a leak, the work starts with the cause: if water keeps coming in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "ttk350",
        waarom: "**For larger rooms or several drying zones.** The capacity you need depends on the volume and the wet materials. The layout of your site decides where the units go.",
      },
      {
        key: "ttv4500",
        waarom: "**For air circulation alongside the dehumidifier.** A fan helps move air along damp surfaces. It does not remove moisture from the room itself and does not replace the dehumidifier.",
      },
      {
        key: "ttk650",
        waarom: "**For large volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need to dry.",
      },
      {
        key: "revolution",
        waarom: "**For a drying set-up after water damage.** First establish where the moisture is and how the structure is built up. For moisture under a floor or behind a wall, a tailored approach may be needed.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Herstappe",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Herstappe, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Herstappe",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["tongeren-borgloon", "riemst"],
    faq: [
      {
        q: "How do I arrange a delivery in Herstappe?",
        a: "Calculate your drying package online or contact us with your address in Herstappe, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
      },
      {
        q: "How many dehumidifiers do I need?",
        a: "That depends on the volume, the layout, the material and the amount of moisture. An open-plan floor needs a different set-up from several closed rooms. Use the calculator for your package and ask for advice if your situation is different, for example with a high room or hidden moisture.",
      },
      {
        q: "How do I know when the floor or wall is dry enough?",
        a: "The hire period alone gives no certainty about that. Have the residual moisture checked with a method that suits the material. Your floor layer or decorator decides which moisture reading, and any further measurement, is needed before the chosen finish can be applied.",
      },
      {
        q: "Does a construction dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps coming in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Herstappe?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  voeren: {
    slug: "voeren",
    title: "Construction dehumidifier hire in Voeren | Vernast",
    description:
      "Looking to hire a construction dehumidifier in Voeren? Vernast delivers the units to your site and installs them. Calculate your hire price online.",
    h1: "Construction dehumidifier hire in Voeren",
    kicker: "Voeren · delivery to your site",
    rit: { afstand: "about 140 km", tijd: "about two hours" },
    intro: [
      "Looking to hire a construction dehumidifier in Voeren for a new build, a renovation or water damage? Vernast delivers the units to your site and installs them. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online and get in touch to agree the delivery time at your address.",
    ],
    bouw: {
      kop: "Construction drying for your project in Voeren",
      alineas: [
        "Vernast delivers to Voeren and nearby places such as Riemst and Tongeren-Borgloon. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a damp cellar or a leak, the work starts with the cause: if water keeps coming in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "revolution",
        waarom: "**For a drying set-up after water damage.** First establish where the moisture is and how the structure is built up. For moisture under a floor or behind a wall, a tailored approach may be needed.",
      },
      {
        key: "ttv4500",
        waarom: "**For air circulation alongside the dehumidifier.** A fan helps move air along damp surfaces. It does not remove moisture from the room itself and does not replace the dehumidifier.",
      },
      {
        key: "ttk350",
        waarom: "**For larger rooms or several drying zones.** The capacity you need depends on the volume and the wet materials. The layout of your site decides where the units go.",
      },
      {
        key: "ttk650",
        waarom: "**For large volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need to dry.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Voeren",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Voeren, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Voeren",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["riemst", "tongeren-borgloon"],
    faq: [
      {
        q: "How do I arrange a delivery in Voeren?",
        a: "Calculate your drying package online or contact us with your address in Voeren, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
      },
      {
        q: "How many dehumidifiers do I need?",
        a: "That depends on the volume, the layout, the material and the amount of moisture. An open-plan floor needs a different set-up from several closed rooms. Use the calculator for your package and ask for advice if your situation is different, for example with a high room or hidden moisture.",
      },
      {
        q: "How do I know when the floor or wall is dry enough?",
        a: "The hire period alone gives no certainty about that. Have the residual moisture checked with a method that suits the material. Your floor layer or decorator decides which moisture reading, and any further measurement, is needed before the chosen finish can be applied.",
      },
      {
        q: "Does a construction dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps coming in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Voeren?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  maaseik: {
    slug: "maaseik",
    title: "Construction dehumidifier hire in Maaseik | Vernast",
    description:
      "Dehumidifier hire in Maaseik for screed, plasterwork or water damage. Calculate your Vernast drying package online, with delivery, installation and collection.",
    h1: "Construction dehumidifier hire in Maaseik",
    kicker: "Maaseik · delivery to your site",
    rit: { afstand: "about 105 km", tijd: "about an hour and a quarter" },
    intro: [
      "Need a construction dehumidifier in Maaseik for a new build, a renovation or water damage? At Vernast you hire construction dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Maaseik",
      alineas: [
        "Vernast delivers to Maaseik and nearby places such as Kinrooi, Dilsen-Stokkem and Bree. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a damp cellar or a leak, the work starts with the cause: if water keeps coming in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**For large volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need to dry.",
      },
      {
        key: "ttv4500",
        waarom: "**For air circulation alongside the dehumidifier.** A fan helps move air along damp surfaces. It does not remove moisture from the room itself and does not replace the dehumidifier.",
      },
      {
        key: "revolution",
        waarom: "**For a drying set-up after water damage.** First establish where the moisture is and how the structure is built up. For moisture under a floor or behind a wall, a tailored approach may be needed.",
      },
      {
        key: "ttk350",
        waarom: "**For larger rooms or several drying zones.** The capacity you need depends on the volume and the wet materials. The layout of your site decides where the units go.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Maaseik",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Maaseik, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Maaseik",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["kinrooi", "dilsen-stokkem", "bree", "oudsbergen"],
    faq: [
      {
        q: "How do I arrange a delivery in Maaseik?",
        a: "Calculate your drying package online or contact us with your address in Maaseik, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
      },
      {
        q: "How many dehumidifiers do I need?",
        a: "That depends on the volume, the layout, the material and the amount of moisture. An open-plan floor needs a different set-up from several closed rooms. Use the calculator for your package and ask for advice if your situation is different, for example with a high room or hidden moisture.",
      },
      {
        q: "How do I know when the floor or wall is dry enough?",
        a: "The hire period alone gives no certainty about that. Have the residual moisture checked with a method that suits the material. Your floor layer or decorator decides which moisture reading, and any further measurement, is needed before the chosen finish can be applied.",
      },
      {
        q: "Does a construction dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps coming in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Maaseik?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  kinrooi: {
    slug: "kinrooi",
    title: "Hire a construction dehumidifier in Kinrooi | Vernast",
    description:
      "Construction dehumidifier hire in Kinrooi, near Maaseik and Bree. Vernast delivers, installs and collects with your drying package. Ask us for advice.",
    h1: "Construction dehumidifier hire in Kinrooi",
    kicker: "Kinrooi · delivery to your site",
    rit: { afstand: "about 105 km", tijd: "about an hour and a quarter" },
    intro: [
      "Need a construction dehumidifier in Kinrooi for a new build, a renovation or water damage? At Vernast you hire construction dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Kinrooi",
      alineas: [
        "Vernast delivers to Kinrooi and nearby places such as Maaseik, Bocholt and Bree. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a damp cellar or a leak, the work starts with the cause: if water keeps coming in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**For large volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need to dry.",
      },
      {
        key: "ttv4500",
        waarom: "**For air circulation alongside the dehumidifier.** A fan helps move air along damp surfaces. It does not remove moisture from the room itself and does not replace the dehumidifier.",
      },
      {
        key: "ttk170",
        waarom: "**For a single room or a smaller drying zone.** Give us the dimensions, the temperature and the amount of moisture so we can tell whether this unit has enough capacity.",
      },
      {
        key: "revolution",
        waarom: "**For a drying set-up after water damage.** First establish where the moisture is and how the structure is built up. For moisture under a floor or behind a wall, a tailored approach may be needed.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Kinrooi",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Kinrooi, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Kinrooi",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["maaseik", "bocholt", "bree"],
    faq: [
      {
        q: "How do I arrange a delivery in Kinrooi?",
        a: "Calculate your drying package online or contact us with your address in Kinrooi, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
      },
      {
        q: "How many dehumidifiers do I need?",
        a: "That depends on the volume, the layout, the material and the amount of moisture. An open-plan floor needs a different set-up from several closed rooms. Use the calculator for your package and ask for advice if your situation is different, for example with a high room or hidden moisture.",
      },
      {
        q: "How do I know when the floor or wall is dry enough?",
        a: "The hire period alone gives no certainty about that. Have the residual moisture checked with a method that suits the material. Your floor layer or decorator decides which moisture reading, and any further measurement, is needed before the chosen finish can be applied.",
      },
      {
        q: "Does a construction dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps coming in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Kinrooi?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  "dilsen-stokkem": {
    slug: "dilsen-stokkem",
    title: "Hire a construction dehumidifier in Dilsen-Stokkem | Vernast",
    description:
      "Hire a construction dehumidifier in Dilsen-Stokkem for a new build, renovation or damp cellar. Delivery, installation and collection are in your drying package.",
    h1: "Construction dehumidifier hire in Dilsen-Stokkem",
    kicker: "Dilsen-Stokkem · delivery to your site",
    rit: { afstand: "about 105 km", tijd: "about an hour and a quarter" },
    intro: [
      "Need a construction dehumidifier in Dilsen-Stokkem for a new build, a renovation or water damage? At Vernast you hire construction dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Dilsen-Stokkem",
      alineas: [
        "Vernast delivers to Dilsen-Stokkem and nearby places such as Maaseik, Maasmechelen and As. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a damp cellar or a leak, the work starts with the cause: if water keeps coming in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**For large volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need to dry.",
      },
      {
        key: "ttv4500",
        waarom: "**For air circulation alongside the dehumidifier.** A fan helps move air along damp surfaces. It does not remove moisture from the room itself and does not replace the dehumidifier.",
      },
      {
        key: "ttk350",
        waarom: "**For larger rooms or several drying zones.** The capacity you need depends on the volume and the wet materials. The layout of your site decides where the units go.",
      },
      {
        key: "revolution",
        waarom: "**For a drying set-up after water damage.** First establish where the moisture is and how the structure is built up. For moisture under a floor or behind a wall, a tailored approach may be needed.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Dilsen-Stokkem",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Dilsen-Stokkem, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Dilsen-Stokkem",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["maaseik", "maasmechelen", "as", "oudsbergen", "bree"],
    faq: [
      {
        q: "How do I arrange a delivery in Dilsen-Stokkem?",
        a: "Calculate your drying package online or contact us with your address in Dilsen-Stokkem, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
      },
      {
        q: "How many dehumidifiers do I need?",
        a: "That depends on the volume, the layout, the material and the amount of moisture. An open-plan floor needs a different set-up from several closed rooms. Use the calculator for your package and ask for advice if your situation is different, for example with a high room or hidden moisture.",
      },
      {
        q: "How do I know when the floor or wall is dry enough?",
        a: "The hire period alone gives no certainty about that. Have the residual moisture checked with a method that suits the material. Your floor layer or decorator decides which moisture reading, and any further measurement, is needed before the chosen finish can be applied.",
      },
      {
        q: "Does a construction dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps coming in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Dilsen-Stokkem?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  maasmechelen: {
    slug: "maasmechelen",
    title: "Construction dehumidifier hire in Maasmechelen | Vernast",
    description:
      "Dehumidifier hire in Maasmechelen? Calculate your drying package online. Vernast delivers and installs the units and collects them when drying is done.",
    h1: "Construction dehumidifier hire in Maasmechelen",
    kicker: "Maasmechelen · delivery to your site",
    rit: { afstand: "about 110 km", tijd: "about an hour and a quarter" },
    intro: [
      "Need a construction dehumidifier in Maasmechelen for a new build, a renovation or water damage? At Vernast you hire construction dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Maasmechelen",
      alineas: [
        "Vernast delivers to Maasmechelen and nearby places such as Dilsen-Stokkem, Lanaken and As. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a damp cellar or a leak, the work starts with the cause: if water keeps coming in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "ttk170",
        waarom: "**For a single room or a smaller drying zone.** Give us the dimensions, the temperature and the amount of moisture so we can tell whether this unit has enough capacity.",
      },
      {
        key: "ttk650",
        waarom: "**For large volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need to dry.",
      },
      {
        key: "ttv4500",
        waarom: "**For air circulation alongside the dehumidifier.** A fan helps move air along damp surfaces. It does not remove moisture from the room itself and does not replace the dehumidifier.",
      },
      {
        key: "revolution",
        waarom: "**For a drying set-up after water damage.** First establish where the moisture is and how the structure is built up. For moisture under a floor or behind a wall, a tailored approach may be needed.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Maasmechelen",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Maasmechelen, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Maasmechelen",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["dilsen-stokkem", "lanaken", "as", "zutendaal", "oudsbergen"],
    faq: [
      {
        q: "How do I arrange a delivery in Maasmechelen?",
        a: "Calculate your drying package online or contact us with your address in Maasmechelen, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
      },
      {
        q: "How many dehumidifiers do I need?",
        a: "That depends on the volume, the layout, the material and the amount of moisture. An open-plan floor needs a different set-up from several closed rooms. Use the calculator for your package and ask for advice if your situation is different, for example with a high room or hidden moisture.",
      },
      {
        q: "How do I know when the floor or wall is dry enough?",
        a: "The hire period alone gives no certainty about that. Have the residual moisture checked with a method that suits the material. Your floor layer or decorator decides which moisture reading, and any further measurement, is needed before the chosen finish can be applied.",
      },
      {
        q: "Does a construction dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps coming in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Maasmechelen?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  lanaken: {
    slug: "lanaken",
    title: "Dehumidifier and site heater hire in Lanaken | Vernast",
    description:
      "Construction dehumidifier hire in Lanaken, with an electric site heater for a cold site if needed. Your Vernast drying package includes delivery and collection.",
    h1: "Construction dehumidifier hire in Lanaken",
    kicker: "Lanaken · delivery to your site",
    rit: { afstand: "about 110 km", tijd: "about an hour and twenty minutes" },
    intro: [
      "Need a construction dehumidifier in Lanaken for a new build, a renovation or water damage? At Vernast you hire construction dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Lanaken",
      alineas: [
        "Vernast delivers to Lanaken and nearby places such as Maasmechelen, Zutendaal and Bilzen-Hoeselt. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a damp cellar or a leak, the work starts with the cause: if water keeps coming in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**For large volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need to dry.",
      },
      {
        key: "ttk350",
        waarom: "**For larger rooms or several drying zones.** The capacity you need depends on the volume and the wet materials. The layout of your site decides where the units go.",
      },
      {
        key: "ttv4500",
        waarom: "**For air circulation alongside the dehumidifier.** A fan helps move air along damp surfaces. It does not remove moisture from the room itself and does not replace the dehumidifier.",
      },
      {
        key: "teddh30",
        waarom: "**For extra heat on a cold site.** This electric heater needs a suitable 400 V connection. Have it checked in advance whether the available supply matches the connected load.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Lanaken",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Lanaken, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Lanaken",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["maasmechelen", "zutendaal", "bilzen-hoeselt", "riemst"],
    faq: [
      {
        q: "How do I arrange a delivery in Lanaken?",
        a: "Calculate your drying package online or contact us with your address in Lanaken, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
      },
      {
        q: "How many dehumidifiers do I need?",
        a: "That depends on the volume, the layout, the material and the amount of moisture. An open-plan floor needs a different set-up from several closed rooms. Use the calculator for your package and ask for advice if your situation is different, for example with a high room or hidden moisture.",
      },
      {
        q: "How do I know when the floor or wall is dry enough?",
        a: "The hire period alone gives no certainty about that. Have the residual moisture checked with a method that suits the material. Your floor layer or decorator decides which moisture reading, and any further measurement, is needed before the chosen finish can be applied.",
      },
      {
        q: "Does a construction dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps coming in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Lanaken?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  peer: {
    slug: "peer",
    title: "Construction dehumidifier hire in Peer, delivered | Vernast",
    description:
      "Hire a construction dehumidifier in Peer for screed, plasterwork or water damage. Vernast delivers, installs and collects. Calculate your hire price online.",
    h1: "Construction dehumidifier hire in Peer",
    kicker: "Peer · delivery to your site",
    rit: { afstand: "about 85 km", tijd: "about an hour" },
    intro: [
      "Need a construction dehumidifier in Peer for a new build, a renovation or water damage? At Vernast you hire construction dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Peer",
      alineas: [
        "Vernast delivers to Peer and nearby places such as Hechtel-Eksel, Pelt and Bocholt. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a damp cellar or a leak, the work starts with the cause: if water keeps coming in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**For large volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need to dry.",
      },
      {
        key: "ttv4500",
        waarom: "**For air circulation alongside the dehumidifier.** A fan helps move air along damp surfaces. It does not remove moisture from the room itself and does not replace the dehumidifier.",
      },
      {
        key: "revolution",
        waarom: "**For a drying set-up after water damage.** First establish where the moisture is and how the structure is built up. For moisture under a floor or behind a wall, a tailored approach may be needed.",
      },
      {
        key: "ttk350",
        waarom: "**For larger rooms or several drying zones.** The capacity you need depends on the volume and the wet materials. The layout of your site decides where the units go.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Peer",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Peer, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Peer",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["hechtel-eksel", "pelt", "bocholt", "bree", "oudsbergen", "leopoldsburg"],
    faq: [
      {
        q: "How do I arrange a delivery in Peer?",
        a: "Calculate your drying package online or contact us with your address in Peer, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
      },
      {
        q: "How many dehumidifiers do I need?",
        a: "That depends on the volume, the layout, the material and the amount of moisture. An open-plan floor needs a different set-up from several closed rooms. Use the calculator for your package and ask for advice if your situation is different, for example with a high room or hidden moisture.",
      },
      {
        q: "How do I know when the floor or wall is dry enough?",
        a: "The hire period alone gives no certainty about that. Have the residual moisture checked with a method that suits the material. Your floor layer or decorator decides which moisture reading, and any further measurement, is needed before the chosen finish can be applied.",
      },
      {
        q: "Does a construction dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps coming in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Peer?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  pelt: {
    slug: "pelt",
    title: "Construction dehumidifier hire in Pelt, delivered | Vernast",
    description:
      "Dehumidifier hire in Pelt, near Lommel and Hechtel-Eksel. Calculate your Vernast drying package online, with delivery, installation and collection included.",
    h1: "Construction dehumidifier hire in Pelt",
    kicker: "Pelt · delivery to your site",
    rit: { afstand: "about 85 km", tijd: "about an hour" },
    intro: [
      "Need a construction dehumidifier in Pelt for a new build, a renovation or water damage? At Vernast you hire construction dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Pelt",
      alineas: [
        "Vernast delivers to Pelt and nearby places such as Lommel, Hechtel-Eksel and Peer. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a damp cellar or a leak, the work starts with the cause: if water keeps coming in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**For large volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need to dry.",
      },
      {
        key: "ttk350",
        waarom: "**For larger rooms or several drying zones.** The capacity you need depends on the volume and the wet materials. The layout of your site decides where the units go.",
      },
      {
        key: "teddh30",
        waarom: "**For extra heat on a cold site.** This electric heater needs a suitable 400 V connection. Have it checked in advance whether the available supply matches the connected load.",
      },
      {
        key: "ttv4500",
        waarom: "**For air circulation alongside the dehumidifier.** A fan helps move air along damp surfaces. It does not remove moisture from the room itself and does not replace the dehumidifier.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Pelt",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Pelt, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Pelt",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["lommel", "hechtel-eksel", "peer", "hamont-achel", "bocholt"],
    faq: [
      {
        q: "How do I arrange a delivery in Pelt?",
        a: "Calculate your drying package online or contact us with your address in Pelt, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
      },
      {
        q: "How many dehumidifiers do I need?",
        a: "That depends on the volume, the layout, the material and the amount of moisture. An open-plan floor needs a different set-up from several closed rooms. Use the calculator for your package and ask for advice if your situation is different, for example with a high room or hidden moisture.",
      },
      {
        q: "How do I know when the floor or wall is dry enough?",
        a: "The hire period alone gives no certainty about that. Have the residual moisture checked with a method that suits the material. Your floor layer or decorator decides which moisture reading, and any further measurement, is needed before the chosen finish can be applied.",
      },
      {
        q: "Does a construction dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps coming in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Pelt?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  "hamont-achel": {
    slug: "hamont-achel",
    title: "Construction dehumidifier hire in Hamont-Achel | Vernast",
    description:
      "Construction dehumidifier hire in Hamont-Achel for a new build, renovation or water damage. Site heaters available too. Delivery and collection are included.",
    h1: "Construction dehumidifier hire in Hamont-Achel",
    kicker: "Hamont-Achel · delivery to your site",
    rit: { afstand: "about 90 km", tijd: "about an hour and five minutes" },
    intro: [
      "Need a construction dehumidifier in Hamont-Achel for a new build, a renovation or water damage? At Vernast you hire construction dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Hamont-Achel",
      alineas: [
        "Vernast delivers to Hamont-Achel and nearby places such as Pelt, Lommel and Bocholt. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a damp cellar or a leak, the work starts with the cause: if water keeps coming in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "ttk350",
        waarom: "**For larger rooms or several drying zones.** The capacity you need depends on the volume and the wet materials. The layout of your site decides where the units go.",
      },
      {
        key: "teddh30",
        waarom: "**For extra heat on a cold site.** This electric heater needs a suitable 400 V connection. Have it checked in advance whether the available supply matches the connected load.",
      },
      {
        key: "revolution",
        waarom: "**For a drying set-up after water damage.** First establish where the moisture is and how the structure is built up. For moisture under a floor or behind a wall, a tailored approach may be needed.",
      },
      {
        key: "ttv4500",
        waarom: "**For air circulation alongside the dehumidifier.** A fan helps move air along damp surfaces. It does not remove moisture from the room itself and does not replace the dehumidifier.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Hamont-Achel",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Hamont-Achel, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Hamont-Achel",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["pelt", "lommel", "bocholt"],
    faq: [
      {
        q: "How do I arrange a delivery in Hamont-Achel?",
        a: "Calculate your drying package online or contact us with your address in Hamont-Achel, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
      },
      {
        q: "How many dehumidifiers do I need?",
        a: "That depends on the volume, the layout, the material and the amount of moisture. An open-plan floor needs a different set-up from several closed rooms. Use the calculator for your package and ask for advice if your situation is different, for example with a high room or hidden moisture.",
      },
      {
        q: "How do I know when the floor or wall is dry enough?",
        a: "The hire period alone gives no certainty about that. Have the residual moisture checked with a method that suits the material. Your floor layer or decorator decides which moisture reading, and any further measurement, is needed before the chosen finish can be applied.",
      },
      {
        q: "Does a construction dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps coming in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Hamont-Achel?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  bocholt: {
    slug: "bocholt",
    title: "Hire a construction dehumidifier in Bocholt | Vernast",
    description:
      "Dehumidifier hire in Bocholt for screed, plaster or a leak. Your Vernast drying package covers delivery, installation and collection. Calculate it online.",
    h1: "Construction dehumidifier hire in Bocholt",
    kicker: "Bocholt · delivery to your site",
    rit: { afstand: "about 95 km", tijd: "about an hour and ten minutes" },
    intro: [
      "Need a construction dehumidifier in Bocholt for a new build, a renovation or water damage? At Vernast you hire construction dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Bocholt",
      alineas: [
        "Vernast delivers to Bocholt and nearby places such as Peer, Bree and Pelt. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a damp cellar or a leak, the work starts with the cause: if water keeps coming in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**For large volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need to dry.",
      },
      {
        key: "ttv4500",
        waarom: "**For air circulation alongside the dehumidifier.** A fan helps move air along damp surfaces. It does not remove moisture from the room itself and does not replace the dehumidifier.",
      },
      {
        key: "ttk350",
        waarom: "**For larger rooms or several drying zones.** The capacity you need depends on the volume and the wet materials. The layout of your site decides where the units go.",
      },
      {
        key: "revolution",
        waarom: "**For a drying set-up after water damage.** First establish where the moisture is and how the structure is built up. For moisture under a floor or behind a wall, a tailored approach may be needed.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Bocholt",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Bocholt, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Bocholt",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["peer", "bree", "pelt", "hamont-achel", "kinrooi"],
    faq: [
      {
        q: "How do I arrange a delivery in Bocholt?",
        a: "Calculate your drying package online or contact us with your address in Bocholt, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
      },
      {
        q: "How many dehumidifiers do I need?",
        a: "That depends on the volume, the layout, the material and the amount of moisture. An open-plan floor needs a different set-up from several closed rooms. Use the calculator for your package and ask for advice if your situation is different, for example with a high room or hidden moisture.",
      },
      {
        q: "How do I know when the floor or wall is dry enough?",
        a: "The hire period alone gives no certainty about that. Have the residual moisture checked with a method that suits the material. Your floor layer or decorator decides which moisture reading, and any further measurement, is needed before the chosen finish can be applied.",
      },
      {
        q: "Does a construction dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps coming in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Bocholt?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  bree: {
    slug: "bree",
    title: "Construction dehumidifier hire in Bree, installed | Vernast",
    description:
      "Hire a construction dehumidifier in Bree. Vernast delivers and installs the units, adds a site heater for a cold site if needed and collects them afterwards.",
    h1: "Construction dehumidifier hire in Bree",
    kicker: "Bree · delivery to your site",
    rit: { afstand: "about 95 km", tijd: "about an hour and ten minutes" },
    intro: [
      "Need a construction dehumidifier in Bree for a new build, a renovation or water damage? At Vernast you hire construction dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Bree",
      alineas: [
        "Vernast delivers to Bree and nearby places such as Bocholt, Peer and Oudsbergen. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a damp cellar or a leak, the work starts with the cause: if water keeps coming in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "ttk350",
        waarom: "**For larger rooms or several drying zones.** The capacity you need depends on the volume and the wet materials. The layout of your site decides where the units go.",
      },
      {
        key: "ttv4500",
        waarom: "**For air circulation alongside the dehumidifier.** A fan helps move air along damp surfaces. It does not remove moisture from the room itself and does not replace the dehumidifier.",
      },
      {
        key: "revolution",
        waarom: "**For a drying set-up after water damage.** First establish where the moisture is and how the structure is built up. For moisture under a floor or behind a wall, a tailored approach may be needed.",
      },
      {
        key: "teddh30",
        waarom: "**For extra heat on a cold site.** This electric heater needs a suitable 400 V connection. Have it checked in advance whether the available supply matches the connected load.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Bree",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Bree, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Bree",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["bocholt", "peer", "oudsbergen", "kinrooi", "maaseik", "dilsen-stokkem"],
    faq: [
      {
        q: "How do I arrange a delivery in Bree?",
        a: "Calculate your drying package online or contact us with your address in Bree, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
      },
      {
        q: "How many dehumidifiers do I need?",
        a: "That depends on the volume, the layout, the material and the amount of moisture. An open-plan floor needs a different set-up from several closed rooms. Use the calculator for your package and ask for advice if your situation is different, for example with a high room or hidden moisture.",
      },
      {
        q: "How do I know when the floor or wall is dry enough?",
        a: "The hire period alone gives no certainty about that. Have the residual moisture checked with a method that suits the material. Your floor layer or decorator decides which moisture reading, and any further measurement, is needed before the chosen finish can be applied.",
      },
      {
        q: "Does a construction dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps coming in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Bree?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  oudsbergen: {
    slug: "oudsbergen",
    title: "Construction dehumidifier hire in Oudsbergen | Vernast",
    description:
      "Dehumidifier hire in Oudsbergen, near As, Peer and Bree. Calculate your Vernast drying package online, with delivery, installation and collection included.",
    h1: "Construction dehumidifier hire in Oudsbergen",
    kicker: "Oudsbergen · delivery to your site",
    rit: { afstand: "about 95 km", tijd: "about an hour and ten minutes" },
    intro: [
      "Need a construction dehumidifier in Oudsbergen for a new build, a renovation or water damage? At Vernast you hire construction dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Oudsbergen",
      alineas: [
        "Vernast delivers to Oudsbergen and nearby places such as As, Peer and Bree. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a damp cellar or a leak, the work starts with the cause: if water keeps coming in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**For large volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need to dry.",
      },
      {
        key: "ttk350",
        waarom: "**For larger rooms or several drying zones.** The capacity you need depends on the volume and the wet materials. The layout of your site decides where the units go.",
      },
      {
        key: "teddh30",
        waarom: "**For extra heat on a cold site.** This electric heater needs a suitable 400 V connection. Have it checked in advance whether the available supply matches the connected load.",
      },
      {
        key: "ttv4500",
        waarom: "**For air circulation alongside the dehumidifier.** A fan helps move air along damp surfaces. It does not remove moisture from the room itself and does not replace the dehumidifier.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Oudsbergen",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Oudsbergen, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Oudsbergen",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["as", "peer", "bree", "houthalen-helchteren", "genk", "dilsen-stokkem"],
    faq: [
      {
        q: "How do I arrange a delivery in Oudsbergen?",
        a: "Calculate your drying package online or contact us with your address in Oudsbergen, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
      },
      {
        q: "How many dehumidifiers do I need?",
        a: "That depends on the volume, the layout, the material and the amount of moisture. An open-plan floor needs a different set-up from several closed rooms. Use the calculator for your package and ask for advice if your situation is different, for example with a high room or hidden moisture.",
      },
      {
        q: "How do I know when the floor or wall is dry enough?",
        a: "The hire period alone gives no certainty about that. Have the residual moisture checked with a method that suits the material. Your floor layer or decorator decides which moisture reading, and any further measurement, is needed before the chosen finish can be applied.",
      },
      {
        q: "Does a construction dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps coming in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Oudsbergen?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  as: {
    slug: "as",
    title: "Construction dehumidifier hire in As, delivered | Vernast",
    description:
      "Construction dehumidifier hire in As for a new build, renovation or water damage. Vernast delivers, installs and collects. Calculate your hire price online.",
    h1: "Construction dehumidifier hire in As",
    kicker: "As · delivery to your site",
    rit: { afstand: "about 95 km", tijd: "about an hour and ten minutes" },
    intro: [
      "Need a construction dehumidifier in As for a new build, a renovation or water damage? At Vernast you hire construction dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in As",
      alineas: [
        "Vernast delivers to As and nearby places such as Oudsbergen, Genk and Zutendaal. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a damp cellar or a leak, the work starts with the cause: if water keeps coming in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "ttk350",
        waarom: "**For larger rooms or several drying zones.** The capacity you need depends on the volume and the wet materials. The layout of your site decides where the units go.",
      },
      {
        key: "teddh30",
        waarom: "**For extra heat on a cold site.** This electric heater needs a suitable 400 V connection. Have it checked in advance whether the available supply matches the connected load.",
      },
      {
        key: "ttk650",
        waarom: "**For large volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need to dry.",
      },
      {
        key: "ttv4500",
        waarom: "**For air circulation alongside the dehumidifier.** A fan helps move air along damp surfaces. It does not remove moisture from the room itself and does not replace the dehumidifier.",
      },
    ],
    levering: {
      kop: "Delivery and installation in As",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in As, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from As",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["oudsbergen", "genk", "zutendaal", "maasmechelen", "dilsen-stokkem"],
    faq: [
      {
        q: "How do I arrange a delivery in As?",
        a: "Calculate your drying package online or contact us with your address in As, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
      },
      {
        q: "How many dehumidifiers do I need?",
        a: "That depends on the volume, the layout, the material and the amount of moisture. An open-plan floor needs a different set-up from several closed rooms. Use the calculator for your package and ask for advice if your situation is different, for example with a high room or hidden moisture.",
      },
      {
        q: "How do I know when the floor or wall is dry enough?",
        a: "The hire period alone gives no certainty about that. Have the residual moisture checked with a method that suits the material. Your floor layer or decorator decides which moisture reading, and any further measurement, is needed before the chosen finish can be applied.",
      },
      {
        q: "Does a construction dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps coming in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in As?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  "tessenderlo-ham": {
    slug: "tessenderlo-ham",
    title: "Construction dehumidifier hire in Tessenderlo-Ham | Vernast",
    description:
      "Hire a construction dehumidifier in Tessenderlo-Ham for screed or plasterwork. Your Vernast drying package includes delivery, installation and collection.",
    h1: "Construction dehumidifier hire in Tessenderlo-Ham",
    kicker: "Tessenderlo-Ham · delivery to your site",
    rit: { afstand: "about 55 km", tijd: "about forty-five minutes" },
    intro: [
      "Need a construction dehumidifier in Tessenderlo-Ham for a new build, a renovation or water damage? At Vernast you hire construction dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Tessenderlo-Ham",
      alineas: [
        "Vernast delivers to Tessenderlo-Ham and nearby places such as Beringen, Lummen and Leopoldsburg. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a damp cellar or a leak, the work starts with the cause: if water keeps coming in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "ttk350",
        waarom: "**For larger rooms or several drying zones.** The capacity you need depends on the volume and the wet materials. The layout of your site decides where the units go.",
      },
      {
        key: "ttk650",
        waarom: "**For large volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need to dry.",
      },
      {
        key: "ttv4500",
        waarom: "**For air circulation alongside the dehumidifier.** A fan helps move air along damp surfaces. It does not remove moisture from the room itself and does not replace the dehumidifier.",
      },
      {
        key: "teddh30",
        waarom: "**For extra heat on a cold site.** This electric heater needs a suitable 400 V connection. Have it checked in advance whether the available supply matches the connected load.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Tessenderlo-Ham",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Tessenderlo-Ham, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Tessenderlo-Ham",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["beringen", "lummen", "leopoldsburg", "laakdal", "meerhout", "balen"],
    faq: [
      {
        q: "How do I arrange a delivery in Tessenderlo-Ham?",
        a: "Calculate your drying package online or contact us with your address in Tessenderlo-Ham, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
      },
      {
        q: "How many dehumidifiers do I need?",
        a: "That depends on the volume, the layout, the material and the amount of moisture. An open-plan floor needs a different set-up from several closed rooms. Use the calculator for your package and ask for advice if your situation is different, for example with a high room or hidden moisture.",
      },
      {
        q: "How do I know when the floor or wall is dry enough?",
        a: "The hire period alone gives no certainty about that. Have the residual moisture checked with a method that suits the material. Your floor layer or decorator decides which moisture reading, and any further measurement, is needed before the chosen finish can be applied.",
      },
      {
        q: "Does a construction dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps coming in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Tessenderlo-Ham?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  beringen: {
    slug: "beringen",
    title: "Construction dehumidifier hire in Beringen | Vernast",
    description:
      "Dehumidifier hire in Beringen? Calculate your drying package online. Vernast delivers and installs dehumidifiers and site heaters and collects them afterwards.",
    h1: "Construction dehumidifier hire in Beringen",
    kicker: "Beringen · delivery to your site",
    rit: { afstand: "about 65 km", tijd: "about fifty minutes" },
    intro: [
      "Need a construction dehumidifier in Beringen for a new build, a renovation or water damage? At Vernast you hire construction dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Beringen",
      alineas: [
        "Vernast delivers to Beringen and nearby places such as Heusden-Zolder, Tessenderlo-Ham and Leopoldsburg. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a damp cellar or a leak, the work starts with the cause: if water keeps coming in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "ttk170",
        waarom: "**For a single room or a smaller drying zone.** Give us the dimensions, the temperature and the amount of moisture so we can tell whether this unit has enough capacity.",
      },
      {
        key: "ttk650",
        waarom: "**For large volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need to dry.",
      },
      {
        key: "ttk350",
        waarom: "**For larger rooms or several drying zones.** The capacity you need depends on the volume and the wet materials. The layout of your site decides where the units go.",
      },
      {
        key: "teddh30",
        waarom: "**For extra heat on a cold site.** This electric heater needs a suitable 400 V connection. Have it checked in advance whether the available supply matches the connected load.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Beringen",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Beringen, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Beringen",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["heusden-zolder", "tessenderlo-ham", "leopoldsburg", "lummen", "hechtel-eksel"],
    faq: [
      {
        q: "How do I arrange a delivery in Beringen?",
        a: "Calculate your drying package online or contact us with your address in Beringen, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
      },
      {
        q: "How many dehumidifiers do I need?",
        a: "That depends on the volume, the layout, the material and the amount of moisture. An open-plan floor needs a different set-up from several closed rooms. Use the calculator for your package and ask for advice if your situation is different, for example with a high room or hidden moisture.",
      },
      {
        q: "How do I know when the floor or wall is dry enough?",
        a: "The hire period alone gives no certainty about that. Have the residual moisture checked with a method that suits the material. Your floor layer or decorator decides which moisture reading, and any further measurement, is needed before the chosen finish can be applied.",
      },
      {
        q: "Does a construction dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps coming in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Beringen?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  "heusden-zolder": {
    slug: "heusden-zolder",
    title: "Construction dehumidifier hire in Heusden-Zolder | Vernast",
    description:
      "Construction dehumidifier hire in Heusden-Zolder, near Beringen and Zonhoven. Delivery, installation and collection are included in your Vernast drying package.",
    h1: "Construction dehumidifier hire in Heusden-Zolder",
    kicker: "Heusden-Zolder · delivery to your site",
    rit: { afstand: "about 70 km", tijd: "about fifty-five minutes" },
    intro: [
      "Need a construction dehumidifier in Heusden-Zolder for a new build, a renovation or water damage? At Vernast you hire construction dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Heusden-Zolder",
      alineas: [
        "Vernast delivers to Heusden-Zolder and nearby places such as Beringen, Zonhoven and Houthalen-Helchteren. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a damp cellar or a leak, the work starts with the cause: if water keeps coming in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "ttk170",
        waarom: "**For a single room or a smaller drying zone.** Give us the dimensions, the temperature and the amount of moisture so we can tell whether this unit has enough capacity.",
      },
      {
        key: "ttk350",
        waarom: "**For larger rooms or several drying zones.** The capacity you need depends on the volume and the wet materials. The layout of your site decides where the units go.",
      },
      {
        key: "teddh30",
        waarom: "**For extra heat on a cold site.** This electric heater needs a suitable 400 V connection. Have it checked in advance whether the available supply matches the connected load.",
      },
      {
        key: "ttv4500",
        waarom: "**For air circulation alongside the dehumidifier.** A fan helps move air along damp surfaces. It does not remove moisture from the room itself and does not replace the dehumidifier.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Heusden-Zolder",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Heusden-Zolder, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Heusden-Zolder",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["beringen", "zonhoven", "houthalen-helchteren", "lummen", "hasselt"],
    faq: [
      {
        q: "How do I arrange a delivery in Heusden-Zolder?",
        a: "Calculate your drying package online or contact us with your address in Heusden-Zolder, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
      },
      {
        q: "How many dehumidifiers do I need?",
        a: "That depends on the volume, the layout, the material and the amount of moisture. An open-plan floor needs a different set-up from several closed rooms. Use the calculator for your package and ask for advice if your situation is different, for example with a high room or hidden moisture.",
      },
      {
        q: "How do I know when the floor or wall is dry enough?",
        a: "The hire period alone gives no certainty about that. Have the residual moisture checked with a method that suits the material. Your floor layer or decorator decides which moisture reading, and any further measurement, is needed before the chosen finish can be applied.",
      },
      {
        q: "Does a construction dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps coming in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Heusden-Zolder?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  "houthalen-helchteren": {
    slug: "houthalen-helchteren",
    title: "Dehumidifier hire in Houthalen-Helchteren | Vernast",
    description:
      "Hire a construction dehumidifier in Houthalen-Helchteren for a new build, renovation or damp cellar. Vernast delivers, installs and collects with your package.",
    h1: "Construction dehumidifier hire in Houthalen-Helchteren",
    kicker: "Houthalen-Helchteren · delivery to your site",
    rit: { afstand: "about 80 km", tijd: "about an hour" },
    intro: [
      "Need a construction dehumidifier in Houthalen-Helchteren for a new build, a renovation or water damage? At Vernast you hire construction dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Houthalen-Helchteren",
      alineas: [
        "Vernast delivers to Houthalen-Helchteren and nearby places such as Heusden-Zolder, Zonhoven and Hechtel-Eksel. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a damp cellar or a leak, the work starts with the cause: if water keeps coming in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**For large volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need to dry.",
      },
      {
        key: "ttk350",
        waarom: "**For larger rooms or several drying zones.** The capacity you need depends on the volume and the wet materials. The layout of your site decides where the units go.",
      },
      {
        key: "teddh30",
        waarom: "**For extra heat on a cold site.** This electric heater needs a suitable 400 V connection. Have it checked in advance whether the available supply matches the connected load.",
      },
      {
        key: "ttv4500",
        waarom: "**For air circulation alongside the dehumidifier.** A fan helps move air along damp surfaces. It does not remove moisture from the room itself and does not replace the dehumidifier.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Houthalen-Helchteren",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Houthalen-Helchteren, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Houthalen-Helchteren",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["heusden-zolder", "zonhoven", "hechtel-eksel", "peer", "oudsbergen", "genk"],
    faq: [
      {
        q: "How do I arrange a delivery in Houthalen-Helchteren?",
        a: "Calculate your drying package online or contact us with your address in Houthalen-Helchteren, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
      },
      {
        q: "How many dehumidifiers do I need?",
        a: "That depends on the volume, the layout, the material and the amount of moisture. An open-plan floor needs a different set-up from several closed rooms. Use the calculator for your package and ask for advice if your situation is different, for example with a high room or hidden moisture.",
      },
      {
        q: "How do I know when the floor or wall is dry enough?",
        a: "The hire period alone gives no certainty about that. Have the residual moisture checked with a method that suits the material. Your floor layer or decorator decides which moisture reading, and any further measurement, is needed before the chosen finish can be applied.",
      },
      {
        q: "Does a construction dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps coming in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Houthalen-Helchteren?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  leopoldsburg: {
    slug: "leopoldsburg",
    title: "Construction dehumidifier hire in Leopoldsburg | Vernast",
    description:
      "Dehumidifier hire in Leopoldsburg for a house, flat or upper floor. Calculate your Vernast drying package online, with delivery, installation and collection.",
    h1: "Construction dehumidifier hire in Leopoldsburg",
    kicker: "Leopoldsburg · delivery to your site",
    rit: { afstand: "about 65 km", tijd: "about fifty minutes" },
    intro: [
      "Need a construction dehumidifier in Leopoldsburg for a new build, a renovation or water damage? At Vernast you hire construction dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Leopoldsburg",
      alineas: [
        "Vernast delivers to Leopoldsburg and nearby places such as Beringen, Hechtel-Eksel and Tessenderlo-Ham. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "Drying a flat or an upper floor? Let us know whether there is a lift or a fixed staircase and how wide the access is. The available space partly decides which units we can install. In a shared building, agree in advance who opens the door and where the equipment can be left.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "ttk350",
        waarom: "**For larger rooms or several drying zones.** The capacity you need depends on the volume and the wet materials. The layout of your site decides where the units go.",
      },
      {
        key: "teddh30",
        waarom: "**For extra heat on a cold site.** This electric heater needs a suitable 400 V connection. Have it checked in advance whether the available supply matches the connected load.",
      },
      {
        key: "ttv4500",
        waarom: "**For air circulation alongside the dehumidifier.** A fan helps move air along damp surfaces. It does not remove moisture from the room itself and does not replace the dehumidifier.",
      },
      {
        key: "ttk170",
        waarom: "**For a single room or a smaller drying zone.** Give us the dimensions, the temperature and the amount of moisture so we can tell whether this unit has enough capacity.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Leopoldsburg",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Leopoldsburg, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Leopoldsburg",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["beringen", "hechtel-eksel", "tessenderlo-ham", "balen", "peer"],
    faq: [
      {
        q: "How do I arrange a delivery in Leopoldsburg?",
        a: "Calculate your drying package online or contact us with your address in Leopoldsburg, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
      },
      {
        q: "How many dehumidifiers do I need?",
        a: "That depends on the volume, the layout, the material and the amount of moisture. An open-plan floor needs a different set-up from several closed rooms. Use the calculator for your package and ask for advice if your situation is different, for example with a high room or hidden moisture.",
      },
      {
        q: "How do I know when the floor or wall is dry enough?",
        a: "The hire period alone gives no certainty about that. Have the residual moisture checked with a method that suits the material. Your floor layer or decorator decides which moisture reading, and any further measurement, is needed before the chosen finish can be applied.",
      },
      {
        q: "Can a dehumidifier be installed on an upper floor?",
        a: "That depends on the access and the unit. When you make your request, mention the floor level, any lift and narrow passages. If there is no fixed staircase, discuss in advance how the units will be taken up and which surcharge applies.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Leopoldsburg?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  "hechtel-eksel": {
    slug: "hechtel-eksel",
    title: "Dehumidifier hire in Hechtel-Eksel, delivered | Vernast",
    description:
      "Construction dehumidifier hire in Hechtel-Eksel for screed, plaster or water damage. Your Vernast drying package covers delivery, installation and collection.",
    h1: "Construction dehumidifier hire in Hechtel-Eksel",
    kicker: "Hechtel-Eksel · delivery to your site",
    rit: { afstand: "about 80 km", tijd: "about an hour" },
    intro: [
      "Need a construction dehumidifier in Hechtel-Eksel for a new build, a renovation or water damage? At Vernast you hire construction dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Hechtel-Eksel",
      alineas: [
        "Vernast delivers to Hechtel-Eksel and nearby places such as Leopoldsburg, Peer and Houthalen-Helchteren. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a damp cellar or a leak, the work starts with the cause: if water keeps coming in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "teddh30",
        waarom: "**For extra heat on a cold site.** This electric heater needs a suitable 400 V connection. Have it checked in advance whether the available supply matches the connected load.",
      },
      {
        key: "ttk650",
        waarom: "**For large volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need to dry.",
      },
      {
        key: "ttk350",
        waarom: "**For larger rooms or several drying zones.** The capacity you need depends on the volume and the wet materials. The layout of your site decides where the units go.",
      },
      {
        key: "revolution",
        waarom: "**For a drying set-up after water damage.** First establish where the moisture is and how the structure is built up. For moisture under a floor or behind a wall, a tailored approach may be needed.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Hechtel-Eksel",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Hechtel-Eksel, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Hechtel-Eksel",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["leopoldsburg", "peer", "houthalen-helchteren", "pelt", "beringen"],
    faq: [
      {
        q: "How do I arrange a delivery in Hechtel-Eksel?",
        a: "Calculate your drying package online or contact us with your address in Hechtel-Eksel, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
      },
      {
        q: "How many dehumidifiers do I need?",
        a: "That depends on the volume, the layout, the material and the amount of moisture. An open-plan floor needs a different set-up from several closed rooms. Use the calculator for your package and ask for advice if your situation is different, for example with a high room or hidden moisture.",
      },
      {
        q: "How do I know when the floor or wall is dry enough?",
        a: "The hire period alone gives no certainty about that. Have the residual moisture checked with a method that suits the material. Your floor layer or decorator decides which moisture reading, and any further measurement, is needed before the chosen finish can be applied.",
      },
      {
        q: "Does a construction dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps coming in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Hechtel-Eksel?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  lommel: {
    slug: "lommel",
    title: "Construction dehumidifier hire in Lommel | Vernast",
    description:
      "Hire a construction dehumidifier in Lommel, near Pelt and Hamont-Achel. Vernast delivers, installs and collects. Calculate your drying package online.",
    h1: "Construction dehumidifier hire in Lommel",
    kicker: "Lommel · delivery to your site",
    rit: { afstand: "about 75 km", tijd: "about an hour" },
    intro: [
      "Need a construction dehumidifier in Lommel for a new build, a renovation or water damage? At Vernast you hire construction dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Lommel",
      alineas: [
        "Vernast delivers to Lommel and nearby places such as Pelt, Hechtel-Eksel and Hamont-Achel. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a damp cellar or a leak, the work starts with the cause: if water keeps coming in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**For large volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need to dry.",
      },
      {
        key: "ttv4500",
        waarom: "**For air circulation alongside the dehumidifier.** A fan helps move air along damp surfaces. It does not remove moisture from the room itself and does not replace the dehumidifier.",
      },
      {
        key: "teddh30",
        waarom: "**For extra heat on a cold site.** This electric heater needs a suitable 400 V connection. Have it checked in advance whether the available supply matches the connected load.",
      },
      {
        key: "ttk350",
        waarom: "**For larger rooms or several drying zones.** The capacity you need depends on the volume and the wet materials. The layout of your site decides where the units go.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Lommel",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Lommel, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Lommel",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["pelt", "hechtel-eksel", "hamont-achel", "balen", "mol"],
    faq: [
      {
        q: "How do I arrange a delivery in Lommel?",
        a: "Calculate your drying package online or contact us with your address in Lommel, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
      },
      {
        q: "How many dehumidifiers do I need?",
        a: "That depends on the volume, the layout, the material and the amount of moisture. An open-plan floor needs a different set-up from several closed rooms. Use the calculator for your package and ask for advice if your situation is different, for example with a high room or hidden moisture.",
      },
      {
        q: "How do I know when the floor or wall is dry enough?",
        a: "The hire period alone gives no certainty about that. Have the residual moisture checked with a method that suits the material. Your floor layer or decorator decides which moisture reading, and any further measurement, is needed before the chosen finish can be applied.",
      },
      {
        q: "Does a construction dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps coming in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Lommel?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  zonhoven: {
    slug: "zonhoven",
    title: "Construction dehumidifier hire in Zonhoven | Vernast",
    description:
      "Dehumidifier hire in Zonhoven, near Hasselt and Genk. Calculate your Vernast drying package online, with delivery, installation and collection included.",
    h1: "Construction dehumidifier hire in Zonhoven",
    kicker: "Zonhoven · delivery to your site",
    rit: { afstand: "about 85 km", tijd: "about an hour" },
    intro: [
      "Need a construction dehumidifier in Zonhoven for a new build, a renovation or water damage? At Vernast you hire construction dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Zonhoven",
      alineas: [
        "Vernast delivers to Zonhoven and nearby places such as Hasselt, Genk and Houthalen-Helchteren. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a damp cellar or a leak, the work starts with the cause: if water keeps coming in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "ttk350",
        waarom: "**For larger rooms or several drying zones.** The capacity you need depends on the volume and the wet materials. The layout of your site decides where the units go.",
      },
      {
        key: "teddh30",
        waarom: "**For extra heat on a cold site.** This electric heater needs a suitable 400 V connection. Have it checked in advance whether the available supply matches the connected load.",
      },
      {
        key: "revolution",
        waarom: "**For a drying set-up after water damage.** First establish where the moisture is and how the structure is built up. For moisture under a floor or behind a wall, a tailored approach may be needed.",
      },
      {
        key: "ttv4500",
        waarom: "**For air circulation alongside the dehumidifier.** A fan helps move air along damp surfaces. It does not remove moisture from the room itself and does not replace the dehumidifier.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Zonhoven",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Zonhoven, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Zonhoven",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["hasselt", "genk", "houthalen-helchteren", "heusden-zolder", "diepenbeek"],
    faq: [
      {
        q: "How do I arrange a delivery in Zonhoven?",
        a: "Calculate your drying package online or contact us with your address in Zonhoven, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
      },
      {
        q: "How many dehumidifiers do I need?",
        a: "That depends on the volume, the layout, the material and the amount of moisture. An open-plan floor needs a different set-up from several closed rooms. Use the calculator for your package and ask for advice if your situation is different, for example with a high room or hidden moisture.",
      },
      {
        q: "How do I know when the floor or wall is dry enough?",
        a: "The hire period alone gives no certainty about that. Have the residual moisture checked with a method that suits the material. Your floor layer or decorator decides which moisture reading, and any further measurement, is needed before the chosen finish can be applied.",
      },
      {
        q: "Does a construction dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps coming in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Zonhoven?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  diepenbeek: {
    slug: "diepenbeek",
    title: "Hire a construction dehumidifier in Diepenbeek | Vernast",
    description:
      "Construction dehumidifier hire in Diepenbeek for a new build, renovation or water damage. Vernast delivers, installs and collects the units for you.",
    h1: "Construction dehumidifier hire in Diepenbeek",
    kicker: "Diepenbeek · delivery to your site",
    rit: { afstand: "about 90 km", tijd: "about an hour" },
    intro: [
      "Need a construction dehumidifier in Diepenbeek for a new build, a renovation or water damage? At Vernast you hire construction dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Diepenbeek",
      alineas: [
        "Vernast delivers to Diepenbeek and nearby places such as Hasselt, Genk and Zonhoven. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a damp cellar or a leak, the work starts with the cause: if water keeps coming in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "ttk170",
        waarom: "**For a single room or a smaller drying zone.** Give us the dimensions, the temperature and the amount of moisture so we can tell whether this unit has enough capacity.",
      },
      {
        key: "ttk350",
        waarom: "**For larger rooms or several drying zones.** The capacity you need depends on the volume and the wet materials. The layout of your site decides where the units go.",
      },
      {
        key: "ttv4500",
        waarom: "**For air circulation alongside the dehumidifier.** A fan helps move air along damp surfaces. It does not remove moisture from the room itself and does not replace the dehumidifier.",
      },
      {
        key: "teddh30",
        waarom: "**For extra heat on a cold site.** This electric heater needs a suitable 400 V connection. Have it checked in advance whether the available supply matches the connected load.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Diepenbeek",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Diepenbeek, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Diepenbeek",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["hasselt", "genk", "zonhoven", "bilzen-hoeselt", "alken", "zutendaal"],
    faq: [
      {
        q: "How do I arrange a delivery in Diepenbeek?",
        a: "Calculate your drying package online or contact us with your address in Diepenbeek, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
      },
      {
        q: "How many dehumidifiers do I need?",
        a: "That depends on the volume, the layout, the material and the amount of moisture. An open-plan floor needs a different set-up from several closed rooms. Use the calculator for your package and ask for advice if your situation is different, for example with a high room or hidden moisture.",
      },
      {
        q: "How do I know when the floor or wall is dry enough?",
        a: "The hire period alone gives no certainty about that. Have the residual moisture checked with a method that suits the material. Your floor layer or decorator decides which moisture reading, and any further measurement, is needed before the chosen finish can be applied.",
      },
      {
        q: "Does a construction dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps coming in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Diepenbeek?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  alken: {
    slug: "alken",
    title: "Construction dehumidifier hire in Alken, installed | Vernast",
    description:
      "Dehumidifier hire in Alken for screed, plasterwork or a leak. Your Vernast drying package includes delivery, installation and collection. Calculate it online.",
    h1: "Construction dehumidifier hire in Alken",
    kicker: "Alken · delivery to your site",
    rit: { afstand: "about 95 km", tijd: "about an hour and five minutes" },
    intro: [
      "Need a construction dehumidifier in Alken for a new build, a renovation or water damage? At Vernast you hire construction dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Alken",
      alineas: [
        "Vernast delivers to Alken and nearby places such as Hasselt, Diepenbeek and Wellen. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a damp cellar or a leak, the work starts with the cause: if water keeps coming in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "ttk350",
        waarom: "**For larger rooms or several drying zones.** The capacity you need depends on the volume and the wet materials. The layout of your site decides where the units go.",
      },
      {
        key: "ttv4500",
        waarom: "**For air circulation alongside the dehumidifier.** A fan helps move air along damp surfaces. It does not remove moisture from the room itself and does not replace the dehumidifier.",
      },
      {
        key: "ttk650",
        waarom: "**For large volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need to dry.",
      },
      {
        key: "revolution",
        waarom: "**For a drying set-up after water damage.** First establish where the moisture is and how the structure is built up. For moisture under a floor or behind a wall, a tailored approach may be needed.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Alken",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Alken, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Alken",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["hasselt", "diepenbeek", "wellen", "nieuwerkerken", "sint-truiden"],
    faq: [
      {
        q: "How do I arrange a delivery in Alken?",
        a: "Calculate your drying package online or contact us with your address in Alken, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
      },
      {
        q: "How many dehumidifiers do I need?",
        a: "That depends on the volume, the layout, the material and the amount of moisture. An open-plan floor needs a different set-up from several closed rooms. Use the calculator for your package and ask for advice if your situation is different, for example with a high room or hidden moisture.",
      },
      {
        q: "How do I know when the floor or wall is dry enough?",
        a: "The hire period alone gives no certainty about that. Have the residual moisture checked with a method that suits the material. Your floor layer or decorator decides which moisture reading, and any further measurement, is needed before the chosen finish can be applied.",
      },
      {
        q: "Does a construction dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps coming in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Alken?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  zutendaal: {
    slug: "zutendaal",
    title: "Construction dehumidifier hire in Zutendaal | Vernast",
    description:
      "Hire a construction dehumidifier in Zutendaal, near Genk and Lanaken. Vernast delivers and installs, with a site heater for a cold site if you need one.",
    h1: "Construction dehumidifier hire in Zutendaal",
    kicker: "Zutendaal · delivery to your site",
    rit: { afstand: "about 100 km", tijd: "about an hour and ten minutes" },
    intro: [
      "Need a construction dehumidifier in Zutendaal for a new build, a renovation or water damage? At Vernast you hire construction dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Zutendaal",
      alineas: [
        "Vernast delivers to Zutendaal and nearby places such as Genk, Diepenbeek and Lanaken. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a damp cellar or a leak, the work starts with the cause: if water keeps coming in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**For large volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need to dry.",
      },
      {
        key: "teddh30",
        waarom: "**For extra heat on a cold site.** This electric heater needs a suitable 400 V connection. Have it checked in advance whether the available supply matches the connected load.",
      },
      {
        key: "ttk350",
        waarom: "**For larger rooms or several drying zones.** The capacity you need depends on the volume and the wet materials. The layout of your site decides where the units go.",
      },
      {
        key: "ttv4500",
        waarom: "**For air circulation alongside the dehumidifier.** A fan helps move air along damp surfaces. It does not remove moisture from the room itself and does not replace the dehumidifier.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Zutendaal",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Zutendaal, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Zutendaal",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["genk", "diepenbeek", "lanaken", "maasmechelen", "bilzen-hoeselt", "as"],
    faq: [
      {
        q: "How do I arrange a delivery in Zutendaal?",
        a: "Calculate your drying package online or contact us with your address in Zutendaal, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
      },
      {
        q: "How many dehumidifiers do I need?",
        a: "That depends on the volume, the layout, the material and the amount of moisture. An open-plan floor needs a different set-up from several closed rooms. Use the calculator for your package and ask for advice if your situation is different, for example with a high room or hidden moisture.",
      },
      {
        q: "How do I know when the floor or wall is dry enough?",
        a: "The hire period alone gives no certainty about that. Have the residual moisture checked with a method that suits the material. Your floor layer or decorator decides which moisture reading, and any further measurement, is needed before the chosen finish can be applied.",
      },
      {
        q: "Does a construction dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps coming in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Zutendaal?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  lummen: {
    slug: "lummen",
    title: "Construction dehumidifier hire in Lummen | Vernast",
    description:
      "Dehumidifier hire in Lummen? Calculate your drying package online. Delivery, installation and collection by Vernast, with advice on screed and damp cellars.",
    h1: "Construction dehumidifier hire in Lummen",
    kicker: "Lummen · delivery to your site",
    rit: { afstand: "about 75 km", tijd: "about fifty-five minutes" },
    intro: [
      "Need a construction dehumidifier in Lummen for a new build, a renovation or water damage? At Vernast you hire construction dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Lummen",
      alineas: [
        "Vernast delivers to Lummen and nearby places such as Herk-de-Stad, Halen and Heusden-Zolder. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a damp cellar or a leak, the work starts with the cause: if water keeps coming in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**For large volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need to dry.",
      },
      {
        key: "ttv4500",
        waarom: "**For air circulation alongside the dehumidifier.** A fan helps move air along damp surfaces. It does not remove moisture from the room itself and does not replace the dehumidifier.",
      },
      {
        key: "ttk350",
        waarom: "**For larger rooms or several drying zones.** The capacity you need depends on the volume and the wet materials. The layout of your site decides where the units go.",
      },
      {
        key: "teddh30",
        waarom: "**For extra heat on a cold site.** This electric heater needs a suitable 400 V connection. Have it checked in advance whether the available supply matches the connected load.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Lummen",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Lummen, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Lummen",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["herk-de-stad", "halen", "heusden-zolder", "beringen", "hasselt", "tessenderlo-ham"],
    faq: [
      {
        q: "How do I arrange a delivery in Lummen?",
        a: "Calculate your drying package online or contact us with your address in Lummen, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
      },
      {
        q: "How many dehumidifiers do I need?",
        a: "That depends on the volume, the layout, the material and the amount of moisture. An open-plan floor needs a different set-up from several closed rooms. Use the calculator for your package and ask for advice if your situation is different, for example with a high room or hidden moisture.",
      },
      {
        q: "How do I know when the floor or wall is dry enough?",
        a: "The hire period alone gives no certainty about that. Have the residual moisture checked with a method that suits the material. Your floor layer or decorator decides which moisture reading, and any further measurement, is needed before the chosen finish can be applied.",
      },
      {
        q: "Does a construction dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps coming in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Lummen?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  "herk-de-stad": {
    slug: "herk-de-stad",
    title: "Dehumidifier hire in Herk-de-Stad, delivered | Vernast",
    description:
      "Construction dehumidifier hire in Herk-de-Stad for a new build, renovation or water damage. Your Vernast drying package covers delivery and collection.",
    h1: "Construction dehumidifier hire in Herk-de-Stad",
    kicker: "Herk-de-Stad · delivery to your site",
    rit: { afstand: "about 70 km", tijd: "about fifty-five minutes" },
    intro: [
      "Need a construction dehumidifier in Herk-de-Stad for a new build, a renovation or water damage? At Vernast you hire construction dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Herk-de-Stad",
      alineas: [
        "Vernast delivers to Herk-de-Stad and nearby places such as Halen, Lummen and Nieuwerkerken. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a damp cellar or a leak, the work starts with the cause: if water keeps coming in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**For large volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need to dry.",
      },
      {
        key: "ttv4500",
        waarom: "**For air circulation alongside the dehumidifier.** A fan helps move air along damp surfaces. It does not remove moisture from the room itself and does not replace the dehumidifier.",
      },
      {
        key: "ttk350",
        waarom: "**For larger rooms or several drying zones.** The capacity you need depends on the volume and the wet materials. The layout of your site decides where the units go.",
      },
      {
        key: "revolution",
        waarom: "**For a drying set-up after water damage.** First establish where the moisture is and how the structure is built up. For moisture under a floor or behind a wall, a tailored approach may be needed.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Herk-de-Stad",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Herk-de-Stad, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Herk-de-Stad",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["halen", "lummen", "nieuwerkerken", "hasselt", "geetbets", "diest"],
    faq: [
      {
        q: "How do I arrange a delivery in Herk-de-Stad?",
        a: "Calculate your drying package online or contact us with your address in Herk-de-Stad, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
      },
      {
        q: "How many dehumidifiers do I need?",
        a: "That depends on the volume, the layout, the material and the amount of moisture. An open-plan floor needs a different set-up from several closed rooms. Use the calculator for your package and ask for advice if your situation is different, for example with a high room or hidden moisture.",
      },
      {
        q: "How do I know when the floor or wall is dry enough?",
        a: "The hire period alone gives no certainty about that. Have the residual moisture checked with a method that suits the material. Your floor layer or decorator decides which moisture reading, and any further measurement, is needed before the chosen finish can be applied.",
      },
      {
        q: "Does a construction dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps coming in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Herk-de-Stad?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  halen: {
    slug: "halen",
    title: "Hire a construction dehumidifier in Halen | Vernast",
    description:
      "Dehumidifier hire in Halen, near Herk-de-Stad, Lummen and Diest. Calculate your Vernast drying package online, with delivery, installation and collection.",
    h1: "Construction dehumidifier hire in Halen",
    kicker: "Halen · delivery to your site",
    rit: { afstand: "about 70 km", tijd: "about fifty-five minutes" },
    intro: [
      "Need a construction dehumidifier in Halen for a new build, a renovation or water damage? At Vernast you hire construction dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Halen",
      alineas: [
        "Vernast delivers to Halen and nearby places such as Herk-de-Stad, Lummen and Diest. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a damp cellar or a leak, the work starts with the cause: if water keeps coming in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**For large volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need to dry.",
      },
      {
        key: "ttv4500",
        waarom: "**For air circulation alongside the dehumidifier.** A fan helps move air along damp surfaces. It does not remove moisture from the room itself and does not replace the dehumidifier.",
      },
      {
        key: "ttk350",
        waarom: "**For larger rooms or several drying zones.** The capacity you need depends on the volume and the wet materials. The layout of your site decides where the units go.",
      },
      {
        key: "teddh30",
        waarom: "**For extra heat on a cold site.** This electric heater needs a suitable 400 V connection. Have it checked in advance whether the available supply matches the connected load.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Halen",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Halen, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Halen",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["herk-de-stad", "lummen", "diest", "geetbets", "scherpenheuvel-zichem"],
    faq: [
      {
        q: "How do I arrange a delivery in Halen?",
        a: "Calculate your drying package online or contact us with your address in Halen, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
      },
      {
        q: "How many dehumidifiers do I need?",
        a: "That depends on the volume, the layout, the material and the amount of moisture. An open-plan floor needs a different set-up from several closed rooms. Use the calculator for your package and ask for advice if your situation is different, for example with a high room or hidden moisture.",
      },
      {
        q: "How do I know when the floor or wall is dry enough?",
        a: "The hire period alone gives no certainty about that. Have the residual moisture checked with a method that suits the material. Your floor layer or decorator decides which moisture reading, and any further measurement, is needed before the chosen finish can be applied.",
      },
      {
        q: "Does a construction dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps coming in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Halen?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  nieuwerkerken: {
    slug: "nieuwerkerken",
    title: "Construction dehumidifier hire in Nieuwerkerken | Vernast",
    description:
      "Hire a construction dehumidifier in Nieuwerkerken for screed, plaster or a damp cellar. Vernast delivers, installs and collects. Calculate your price online.",
    h1: "Construction dehumidifier hire in Nieuwerkerken",
    kicker: "Nieuwerkerken · delivery to your site",
    rit: { afstand: "about 80 km", tijd: "about an hour" },
    intro: [
      "Need a construction dehumidifier in Nieuwerkerken for a new build, a renovation or water damage? At Vernast you hire construction dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Nieuwerkerken",
      alineas: [
        "Vernast delivers to Nieuwerkerken and nearby places such as Sint-Truiden, Alken and Herk-de-Stad. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a damp cellar or a leak, the work starts with the cause: if water keeps coming in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "ttk350",
        waarom: "**For larger rooms or several drying zones.** The capacity you need depends on the volume and the wet materials. The layout of your site decides where the units go.",
      },
      {
        key: "ttv4500",
        waarom: "**For air circulation alongside the dehumidifier.** A fan helps move air along damp surfaces. It does not remove moisture from the room itself and does not replace the dehumidifier.",
      },
      {
        key: "ttk650",
        waarom: "**For large volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need to dry.",
      },
      {
        key: "revolution",
        waarom: "**For a drying set-up after water damage.** First establish where the moisture is and how the structure is built up. For moisture under a floor or behind a wall, a tailored approach may be needed.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Nieuwerkerken",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Nieuwerkerken, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Nieuwerkerken",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["sint-truiden", "alken", "herk-de-stad", "geetbets", "wellen"],
    faq: [
      {
        q: "How do I arrange a delivery in Nieuwerkerken?",
        a: "Calculate your drying package online or contact us with your address in Nieuwerkerken, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
      },
      {
        q: "How many dehumidifiers do I need?",
        a: "That depends on the volume, the layout, the material and the amount of moisture. An open-plan floor needs a different set-up from several closed rooms. Use the calculator for your package and ask for advice if your situation is different, for example with a high room or hidden moisture.",
      },
      {
        q: "How do I know when the floor or wall is dry enough?",
        a: "The hire period alone gives no certainty about that. Have the residual moisture checked with a method that suits the material. Your floor layer or decorator decides which moisture reading, and any further measurement, is needed before the chosen finish can be applied.",
      },
      {
        q: "Does a construction dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps coming in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Nieuwerkerken?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
};
