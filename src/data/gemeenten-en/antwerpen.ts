import type { Gemeente } from "../gemeenten.js";

/**
 * De Engelse teksten van de gemeentepagina's in deze provincie, gesleuteld op
 * de Nederlandse slug. Zie README.md in deze map voor de regels en hoe een
 * gemeente aangezet wordt (`aan/antwerpen.ts`).
 */
export const GEMEENTEN: Record<string, Gemeente> = {
  "antwerpen-stad": {
    slug: "antwerpen-stad",
    title: "Dehumidifier hire in Antwerp City and districts | Vernast",
    description:
      "Dehumidifier hire in Antwerp? Calculate your Vernast drying package, delivery and collection included. Advice for new builds, renovation and water damage.",
    h1: "Construction dehumidifier hire in Antwerp City and its districts",
    kicker: "Antwerp \u00b7 delivery to your site",
    rit: { afstand: "about 12 km", tijd: "about twenty minutes" },
    intro: [
      "Hiring a construction dehumidifier in Antwerp for your house, flat or site? Vernast delivers in the city and its districts to dry screed, plasterwork and rooms after water damage. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us to talk through your situation.",
    ],
    bouw: {
      kop: "Construction drying for your project in Antwerp",
      alineas: [
        "Vernast delivers to Antwerp and nearby places such as Wilrijk, Mortsel and Edegem. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "Drying a flat or an upper floor? Let us know whether there is a lift or a fixed staircase and how wide the access is. The available space partly decides which units we can install. In a shared building, agree in advance who opens the door and where the equipment can be left.",
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
      kop: "Delivery and installation in Antwerp",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Antwerp, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Antwerp",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["wilrijk", "mortsel", "edegem", "schoten"],
    faq: [
      {
        q: "How do I arrange a delivery in Antwerp?",
        a: "Calculate your drying package online or contact us with your address in Antwerp, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
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
        q: "Can I collect a unit for a site in Antwerp?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  "mechelen": {
    slug: "mechelen",
    title: "Dehumidifier hire in Mechelen within 24 hours | Vernast",
    description:
      "Dehumidifier hire in Mechelen? Calculate your Vernast drying package, delivery and collection included. Advice for new builds, renovation and water damage.",
    h1: "Construction dehumidifier hire in Mechelen",
    kicker: "Mechelen \u00b7 delivery to your site",
    rit: { afstand: "about 20 km", tijd: "about half an hour" },
    intro: [
      "Need a construction dehumidifier in Mechelen for a new build, a renovation or water damage? At Vernast you hire dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Mechelen",
      alineas: [
        "Vernast delivers to Mechelen and nearby places such as Duffel, Lier and Heist-op-den-Berg. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "Drying a flat or an upper floor? Let us know whether there is a lift or a fixed staircase and how wide the access is. The available space partly decides which units we can install. In a shared building, agree in advance who opens the door and where the equipment can be left.",
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
        key: "revolution",
        waarom: "**For a drying set-up after water damage.** First establish where the moisture is and how the structure is built up. For moisture under a floor or behind a wall, a tailored approach may be needed.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Mechelen",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Mechelen, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Mechelen",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["duffel", "lier", "heist-op-den-berg"],
    faq: [
      {
        q: "How do I arrange a delivery in Mechelen?",
        a: "Calculate your drying package online or contact us with your address in Mechelen, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
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
        q: "Can I collect a unit for a site in Mechelen?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  "berchem": {
    slug: "berchem",
    title: "Dehumidifier hire in Berchem and Zurenborg | Vernast",
    description:
      "Dehumidifier hire in Berchem? Calculate your Vernast drying package, delivery and collection included. Advice for new builds, renovation and water damage.",
    h1: "Construction dehumidifier hire in Berchem",
    kicker: "Berchem \u00b7 delivery to your site",
    rit: { afstand: "about 9 km", tijd: "about a quarter of an hour" },
    intro: [
      "Need a construction dehumidifier in Berchem for a new build, a renovation or water damage? At Vernast you hire dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Berchem",
      alineas: [
        "Vernast delivers to Berchem and nearby places such as Antwerp, Borgerhout and Deurne. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "Drying a flat or an upper floor? Let us know whether there is a lift or a fixed staircase and how wide the access is. The available space partly decides which units we can install. In a shared building, agree in advance who opens the door and where the equipment can be left.",
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
      kop: "Delivery and installation in Berchem",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Berchem, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Berchem",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["antwerpen-stad", "borgerhout", "deurne", "mortsel"],
    faq: [
      {
        q: "How do I arrange a delivery in Berchem?",
        a: "Calculate your drying package online or contact us with your address in Berchem, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
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
        q: "Can I collect a unit for a site in Berchem?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  "borgerhout": {
    slug: "borgerhout",
    title: "Construction dehumidifier hire in Borgerhout | Vernast",
    description:
      "Screed, plasterwork or water damage in Borgerhout? Hire a Vernast construction dehumidifier, with delivery, installation and collection in the drying package.",
    h1: "Construction dehumidifier hire in Borgerhout",
    kicker: "Borgerhout \u00b7 delivery to your site",
    rit: { afstand: "about 11 km", tijd: "about twenty minutes" },
    intro: [
      "Need a construction dehumidifier in Borgerhout for a new build, a renovation or water damage? At Vernast you hire dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Borgerhout",
      alineas: [
        "Vernast delivers to Borgerhout and nearby places such as Antwerp, Berchem and Deurne. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "Drying a flat or an upper floor? Let us know whether there is a lift or a fixed staircase and how wide the access is. The available space partly decides which units we can install. In a shared building, agree in advance who opens the door and where the equipment can be left.",
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
      kop: "Delivery and installation in Borgerhout",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Borgerhout, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Borgerhout",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["antwerpen-stad", "berchem", "deurne", "merksem"],
    faq: [
      {
        q: "How do I arrange a delivery in Borgerhout?",
        a: "Calculate your drying package online or contact us with your address in Borgerhout, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
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
        q: "Can I collect a unit for a site in Borgerhout?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  "deurne": {
    slug: "deurne",
    title: "Hire a dehumidifier in Deurne, 20 minutes away | Vernast",
    description:
      "Building or renovating in Deurne? Hire a construction dehumidifier from Vernast: delivery, installation and collection included. Prices online.",
    h1: "Construction dehumidifier hire in Deurne",
    kicker: "Deurne \u00b7 delivery to your site",
    rit: { afstand: "about 13 km", tijd: "about twenty minutes" },
    intro: [
      "Need a construction dehumidifier in Deurne for a new build, a renovation or water damage? At Vernast you hire dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Deurne",
      alineas: [
        "Vernast delivers to Deurne and nearby places such as Antwerp, Borgerhout and Berchem. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
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
        key: "ttv4500",
        waarom: "**For air circulation alongside the dehumidifier.** A fan helps move air along damp surfaces. It does not remove moisture from the room itself and does not replace the dehumidifier.",
      },
      {
        key: "teddh30",
        waarom: "**For extra heat on a cold site.** This electric heater needs a suitable 400 V connection. Have it checked in advance whether the available supply matches the connected load.",
      },
      {
        key: "ttk170",
        waarom: "**For a single room or a smaller drying zone.** Give us the dimensions, the temperature and the amount of moisture so we can tell whether this unit has enough capacity.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Deurne",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Deurne, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Deurne",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["antwerpen-stad", "borgerhout", "berchem", "merksem"],
    faq: [
      {
        q: "How do I arrange a delivery in Deurne?",
        a: "Calculate your drying package online or contact us with your address in Deurne, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
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
        q: "Can I collect a unit for a site in Deurne?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  "merksem": {
    slug: "merksem",
    title: "Construction dehumidifiers to hire in Merksem | Vernast",
    description:
      "In Merksem, Vernast delivers and installs your construction dehumidifiers and collects them again. Calculate your drying package online or ask for advice.",
    h1: "Construction dehumidifier hire in Merksem",
    kicker: "Merksem \u00b7 delivery to your site",
    rit: { afstand: "about 16 km", tijd: "about twenty-five minutes" },
    intro: [
      "Need a construction dehumidifier in Merksem for a new build, a renovation or water damage? At Vernast you hire dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Merksem",
      alineas: [
        "Vernast delivers to Merksem and nearby places such as Antwerp, Deurne and Borgerhout. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a wet cellar or a leak, the work starts with the cause: if water keeps getting in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
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
        key: "ttk170",
        waarom: "**For a single room or a smaller drying zone.** Give us the dimensions, the temperature and the amount of moisture so we can tell whether this unit has enough capacity.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Merksem",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Merksem, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Merksem",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["antwerpen-stad", "deurne", "borgerhout", "ekeren"],
    faq: [
      {
        q: "How do I arrange a delivery in Merksem?",
        a: "Calculate your drying package online or contact us with your address in Merksem, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
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
        q: "Does a dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps getting in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Merksem?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  "hoboken": {
    slug: "hoboken",
    title: "Hire a dehumidifier in Hoboken, 10 minutes away | Vernast",
    description:
      "Construction dehumidifier hire in Hoboken for a new build, renovation or water damage. A Vernast drying package with delivery, installation and collection.",
    h1: "Construction dehumidifier hire in Hoboken",
    kicker: "Hoboken \u00b7 delivery to your site",
    rit: { afstand: "about 6 km", tijd: "about ten minutes" },
    intro: [
      "Need a construction dehumidifier in Hoboken for a new build, a renovation or water damage? At Vernast you hire dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Hoboken",
      alineas: [
        "Vernast delivers to Hoboken and nearby places such as Antwerp, Wilrijk and Aartselaar. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a wet cellar or a leak, the work starts with the cause: if water keeps getting in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
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
        key: "revolution",
        waarom: "**For a drying set-up after water damage.** First establish where the moisture is and how the structure is built up. For moisture under a floor or behind a wall, a tailored approach may be needed.",
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
      kop: "Delivery and installation in Hoboken",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Hoboken, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Hoboken",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["antwerpen-stad", "wilrijk", "aartselaar", "berchem"],
    faq: [
      {
        q: "How do I arrange a delivery in Hoboken?",
        a: "Calculate your drying package online or contact us with your address in Hoboken, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
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
        q: "Does a dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps getting in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Hoboken?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  "ekeren": {
    slug: "ekeren",
    title: "Construction dehumidifier hire in Ekeren | Vernast",
    description:
      "Screed or plasterwork to dry in Ekeren? Vernast hires out construction dehumidifiers, delivered, installed and collected. Calculate your package online.",
    h1: "Construction dehumidifier hire in Ekeren",
    kicker: "Ekeren \u00b7 delivery to your site",
    rit: { afstand: "about 19 km", tijd: "about twenty-five minutes" },
    intro: [
      "Need a construction dehumidifier in Ekeren for a new build, a renovation or water damage? At Vernast you hire dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Ekeren",
      alineas: [
        "Vernast delivers to Ekeren and nearby places such as Antwerp, Merksem and Brasschaat. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a wet cellar or a leak, the work starts with the cause: if water keeps getting in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**For larger volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need drying.",
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
      kop: "Delivery and installation in Ekeren",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Ekeren, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Ekeren",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["antwerpen-stad", "merksem", "brasschaat", "schoten"],
    faq: [
      {
        q: "How do I arrange a delivery in Ekeren?",
        a: "Calculate your drying package online or contact us with your address in Ekeren, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
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
        q: "Does a dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps getting in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Ekeren?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  "berendrecht-zandvliet": {
    slug: "berendrecht-zandvliet",
    title: "Dehumidifier hire in Berendrecht and Zandvliet | Vernast",
    description:
      "Hire a construction dehumidifier in Berendrecht and Zandvliet: Vernast delivers, installs and collects it. Calculate your drying package online.",
    h1: "Construction dehumidifier hire in Berendrecht and Zandvliet",
    kicker: "Berendrecht and Zandvliet \u00b7 delivery to your site",
    rit: { afstand: "about 35 km", tijd: "about forty minutes" },
    intro: [
      "Need a construction dehumidifier in Berendrecht and Zandvliet for a new build, a renovation or water damage? At Vernast you hire dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Berendrecht and Zandvliet",
      alineas: [
        "Vernast delivers to Berendrecht and Zandvliet and nearby places such as Ekeren, Merksem and Antwerp. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a wet cellar or a leak, the work starts with the cause: if water keeps getting in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
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
        key: "revolution",
        waarom: "**For a drying set-up after water damage.** First establish where the moisture is and how the structure is built up. For moisture under a floor or behind a wall, a tailored approach may be needed.",
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
      kop: "Delivery and installation in Berendrecht and Zandvliet",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Berendrecht and Zandvliet, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Berendrecht and Zandvliet",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["ekeren", "merksem", "antwerpen-stad", "brasschaat"],
    faq: [
      {
        q: "How do I arrange a delivery in Berendrecht and Zandvliet?",
        a: "Calculate your drying package online or contact us with your address in Berendrecht and Zandvliet, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
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
        q: "Does a dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps getting in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Berendrecht and Zandvliet?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  "borsbeek": {
    slug: "borsbeek",
    title: "Hire a dehumidifier in Borsbeek, 20 minutes away | Vernast",
    description:
      "Hire a construction dehumidifier in Borsbeek: Vernast delivers, installs and collects it. Calculate your drying package online.",
    h1: "Construction dehumidifier hire in Borsbeek",
    kicker: "Borsbeek \u00b7 delivery to your site",
    rit: { afstand: "about 14 km", tijd: "about twenty minutes" },
    intro: [
      "Need a construction dehumidifier in Borsbeek for a new build, a renovation or water damage? At Vernast you hire dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Borsbeek",
      alineas: [
        "Vernast delivers to Borsbeek and nearby places such as Antwerp, Deurne and Mortsel. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
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
        key: "ttv4500",
        waarom: "**For air circulation alongside the dehumidifier.** A fan helps move air along damp surfaces. It does not remove moisture from the room itself and does not replace the dehumidifier.",
      },
      {
        key: "ttk170",
        waarom: "**For a single room or a smaller drying zone.** Give us the dimensions, the temperature and the amount of moisture so we can tell whether this unit has enough capacity.",
      },
      {
        key: "teddh30",
        waarom: "**For extra heat on a cold site.** This electric heater needs a suitable 400 V connection. Have it checked in advance whether the available supply matches the connected load.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Borsbeek",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Borsbeek, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Borsbeek",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["antwerpen-stad", "deurne", "mortsel", "berchem"],
    faq: [
      {
        q: "How do I arrange a delivery in Borsbeek?",
        a: "Calculate your drying package online or contact us with your address in Borsbeek, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
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
        q: "Can I collect a unit for a site in Borsbeek?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  "aartselaar": {
    slug: "aartselaar",
    title: "Dehumidifier hire in Aartselaar, at our warehouse | Vernast",
    description:
      "Dehumidifier hire in Aartselaar, home to our warehouse: collect a unit by appointment or have a drying package delivered, installed and collected.",
    h1: "Construction dehumidifier hire in Aartselaar",
    kicker: "Aartselaar \u00b7 delivery to your site",
    rit: { afstand: "0 km", tijd: "this is where we are based" },
    intro: [
      "Need a construction dehumidifier in Aartselaar for a new build, a renovation or water damage? Collect your unit by appointment from our warehouse at Boomsesteenweg 12, unit 11, or have it installed on your site. **A drying package includes delivery, installation and collection.** Calculate your hire price online or call us for advice.",
    ],
    bouw: {
      kop: "Construction drying for your project in Aartselaar",
      alineas: [
        "Vernast delivers to Aartselaar and nearby places such as Kontich, Edegem and Wilrijk. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a wet cellar or a leak, the work starts with the cause: if water keeps getting in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
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
        key: "ttk170",
        waarom: "**For a single room or a smaller drying zone.** Give us the dimensions, the temperature and the amount of moisture so we can tell whether this unit has enough capacity.",
      },
      {
        key: "revolution",
        waarom: "**For a drying set-up after water damage.** First establish where the moisture is and how the structure is built up. For moisture under a floor or behind a wall, a tailored approach may be needed.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Aartselaar",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Aartselaar, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting from our warehouse in Aartselaar",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["kontich", "edegem", "wilrijk", "boom"],
    faq: [
      {
        q: "How do I arrange a delivery in Aartselaar?",
        a: "Calculate your drying package online or contact us with your address in Aartselaar, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
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
        q: "Does a dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps getting in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Aartselaar?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  "grobbendonk": {
    slug: "grobbendonk",
    title: "Grobbendonk: construction dehumidifier hire | Vernast",
    description:
      "Screed, plasterwork or water damage in Grobbendonk? Hire a Vernast construction dehumidifier, with delivery, installation and collection in the drying package.",
    h1: "Construction dehumidifier hire in Grobbendonk",
    kicker: "Grobbendonk \u00b7 delivery to your site",
    rit: { afstand: "about 27 km", tijd: "about half an hour" },
    intro: [
      "Need a construction dehumidifier in Grobbendonk for a new build, a renovation or water damage? At Vernast you hire dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Grobbendonk",
      alineas: [
        "Vernast delivers to Grobbendonk and nearby places such as Herentals, Vorselaar and Herenthout. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a wet cellar or a leak, the work starts with the cause: if water keeps getting in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
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
        key: "ttk650",
        waarom: "**For larger volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need drying.",
      },
    ],
    levering: {
      kop: "Delivery and installation in Grobbendonk",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Grobbendonk, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Grobbendonk",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["herentals", "vorselaar", "herenthout", "nijlen"],
    faq: [
      {
        q: "How do I arrange a delivery in Grobbendonk?",
        a: "Calculate your drying package online or contact us with your address in Grobbendonk, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
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
        q: "Does a dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps getting in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Grobbendonk?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  "herenthout": {
    slug: "herenthout",
    title: "Construction dehumidifiers to hire in Herenthout | Vernast",
    description:
      "Building or renovating in Herenthout? Hire a construction dehumidifier from Vernast: delivery, installation and collection included. Prices online.",
    h1: "Construction dehumidifier hire in Herenthout",
    kicker: "Herenthout \u00b7 delivery to your site",
    rit: { afstand: "about 28 km", tijd: "about half an hour" },
    intro: [
      "Need a construction dehumidifier in Herenthout for a new build, a renovation or water damage? At Vernast you hire dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Herenthout",
      alineas: [
        "Vernast delivers to Herenthout and nearby places such as Herentals, Grobbendonk and Nijlen. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a wet cellar or a leak, the work starts with the cause: if water keeps getting in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
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
      kop: "Delivery and installation in Herenthout",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Herenthout, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Herenthout",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["herentals", "grobbendonk", "nijlen", "westerlo"],
    faq: [
      {
        q: "How do I arrange a delivery in Herenthout?",
        a: "Calculate your drying package online or contact us with your address in Herenthout, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
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
        q: "Does a dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps getting in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Herenthout?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  "vorselaar": {
    slug: "vorselaar",
    title: "Construction dehumidifier hire in Vorselaar | Vernast",
    description:
      "In Vorselaar, Vernast delivers and installs your construction dehumidifiers and collects them again. Calculate your drying package online or ask for advice.",
    h1: "Construction dehumidifier hire in Vorselaar",
    kicker: "Vorselaar \u00b7 delivery to your site",
    rit: { afstand: "about 30 km", tijd: "about half an hour" },
    intro: [
      "Need a construction dehumidifier in Vorselaar for a new build, a renovation or water damage? At Vernast you hire dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Vorselaar",
      alineas: [
        "Vernast delivers to Vorselaar and nearby places such as Lille, Grobbendonk and Herentals. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a wet cellar or a leak, the work starts with the cause: if water keeps getting in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**For larger volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need drying.",
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
      kop: "Delivery and installation in Vorselaar",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Vorselaar, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Vorselaar",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["lille", "grobbendonk", "herentals", "zandhoven"],
    faq: [
      {
        q: "How do I arrange a delivery in Vorselaar?",
        a: "Calculate your drying package online or contact us with your address in Vorselaar, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
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
        q: "Does a dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps getting in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Vorselaar?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  "lille": {
    slug: "lille",
    title: "Dehumidifier hire in Lille, in the Kempen | Vernast",
    description:
      "Construction dehumidifier hire in Lille for a new build, renovation or water damage. A Vernast drying package with delivery, installation and collection.",
    h1: "Construction dehumidifier hire in Lille",
    kicker: "Lille \u00b7 delivery to your site",
    rit: { afstand: "about 33 km", tijd: "about thirty-five minutes" },
    intro: [
      "Need a construction dehumidifier in Lille for a new build, a renovation or water damage? At Vernast you hire dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Lille",
      alineas: [
        "Vernast delivers to Lille and nearby places such as Vorselaar, Malle and Beerse. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a wet cellar or a leak, the work starts with the cause: if water keeps getting in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**For larger volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need drying.",
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
      kop: "Delivery and installation in Lille",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Lille, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Lille",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["vorselaar", "malle", "beerse", "kasterlee"],
    faq: [
      {
        q: "How do I arrange a delivery in Lille?",
        a: "Calculate your drying package online or contact us with your address in Lille, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
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
        q: "Does a dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps getting in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Lille?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  "vosselaar": {
    slug: "vosselaar",
    title: "Construction dehumidifier hire in Vosselaar | Vernast",
    description:
      "Screed or plasterwork to dry in Vosselaar? Vernast hires out construction dehumidifiers, delivered, installed and collected. Calculate your package online.",
    h1: "Construction dehumidifier hire in Vosselaar",
    kicker: "Vosselaar \u00b7 delivery to your site",
    rit: { afstand: "about 37 km", tijd: "about thirty-five minutes" },
    intro: [
      "Need a construction dehumidifier in Vosselaar for a new build, a renovation or water damage? At Vernast you hire dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Vosselaar",
      alineas: [
        "Vernast delivers to Vosselaar and nearby places such as Beerse, Turnhout and Lille. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a wet cellar or a leak, the work starts with the cause: if water keeps getting in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**For larger volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need drying.",
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
      kop: "Delivery and installation in Vosselaar",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Vosselaar, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Vosselaar",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["beerse", "turnhout", "lille", "oud-turnhout"],
    faq: [
      {
        q: "How do I arrange a delivery in Vosselaar?",
        a: "Calculate your drying package online or contact us with your address in Vosselaar, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
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
        q: "Does a dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps getting in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Vosselaar?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  "beerse": {
    slug: "beerse",
    title: "Dehumidifier hire in Beerse, on clay soil | Vernast",
    description:
      "Hiring a construction dehumidifier in Beerse? A Vernast drying package with delivery, installation and collection, for new builds, renovation and water damage.",
    h1: "Construction dehumidifier hire in Beerse",
    kicker: "Beerse \u00b7 delivery to your site",
    rit: { afstand: "about 36 km", tijd: "about thirty-five minutes" },
    intro: [
      "Need a construction dehumidifier in Beerse for a new build, a renovation or water damage? At Vernast you hire dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Beerse",
      alineas: [
        "Vernast delivers to Beerse and nearby places such as Turnhout, Vosselaar and Rijkevorsel. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a wet cellar or a leak, the work starts with the cause: if water keeps getting in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
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
      kop: "Delivery and installation in Beerse",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Beerse, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Beerse",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["turnhout", "vosselaar", "rijkevorsel", "lille"],
    faq: [
      {
        q: "How do I arrange a delivery in Beerse?",
        a: "Calculate your drying package online or contact us with your address in Beerse, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
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
        q: "Does a dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps getting in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Beerse?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  "rijkevorsel": {
    slug: "rijkevorsel",
    title: "Rijkevorsel: construction dehumidifier hire | Vernast",
    description:
      "Hire a construction dehumidifier in Rijkevorsel: Vernast delivers, installs and collects it. Calculate your drying package online.",
    h1: "Construction dehumidifier hire in Rijkevorsel",
    kicker: "Rijkevorsel \u00b7 delivery to your site",
    rit: { afstand: "about 34 km", tijd: "about thirty-five minutes" },
    intro: [
      "Need a construction dehumidifier in Rijkevorsel for a new build, a renovation or water damage? At Vernast you hire dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Rijkevorsel",
      alineas: [
        "Vernast delivers to Rijkevorsel and nearby places such as Beerse, Hoogstraten and Merksplas. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a wet cellar or a leak, the work starts with the cause: if water keeps getting in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
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
      kop: "Delivery and installation in Rijkevorsel",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Rijkevorsel, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Rijkevorsel",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["beerse", "hoogstraten", "merksplas", "malle"],
    faq: [
      {
        q: "How do I arrange a delivery in Rijkevorsel?",
        a: "Calculate your drying package online or contact us with your address in Rijkevorsel, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
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
        q: "Does a dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps getting in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Rijkevorsel?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  "merksplas": {
    slug: "merksplas",
    title: "Construction dehumidifiers to hire in Merksplas | Vernast",
    description:
      "Dehumidifier hire in Merksplas? Calculate your Vernast drying package, delivery and collection included. Advice for new builds, renovation and water damage.",
    h1: "Construction dehumidifier hire in Merksplas",
    kicker: "Merksplas \u00b7 delivery to your site",
    rit: { afstand: "about 40 km", tijd: "about forty minutes" },
    intro: [
      "Need a construction dehumidifier in Merksplas for a new build, a renovation or water damage? At Vernast you hire dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Merksplas",
      alineas: [
        "Vernast delivers to Merksplas and nearby places such as Hoogstraten, Rijkevorsel and Turnhout. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a wet cellar or a leak, the work starts with the cause: if water keeps getting in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**For larger volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need drying.",
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
      kop: "Delivery and installation in Merksplas",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Merksplas, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Merksplas",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["hoogstraten", "rijkevorsel", "turnhout", "ravels"],
    faq: [
      {
        q: "How do I arrange a delivery in Merksplas?",
        a: "Calculate your drying package online or contact us with your address in Merksplas, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
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
        q: "Does a dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps getting in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Merksplas?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  "hoogstraten": {
    slug: "hoogstraten",
    title: "Construction dehumidifier hire in Hoogstraten | Vernast",
    description:
      "Screed, plasterwork or water damage in Hoogstraten? Hire a Vernast construction dehumidifier, with delivery, installation and collection in the drying package.",
    h1: "Construction dehumidifier hire in Hoogstraten",
    kicker: "Hoogstraten \u00b7 delivery to your site",
    rit: { afstand: "about 42 km", tijd: "about forty minutes" },
    intro: [
      "Need a construction dehumidifier in Hoogstraten for a new build, a renovation or water damage? At Vernast you hire dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Hoogstraten",
      alineas: [
        "Vernast delivers to Hoogstraten and nearby places such as Merksplas, Rijkevorsel and Wuustwezel. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a wet cellar or a leak, the work starts with the cause: if water keeps getting in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**For larger volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need drying.",
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
      kop: "Delivery and installation in Hoogstraten",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Hoogstraten, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Hoogstraten",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["merksplas", "rijkevorsel", "wuustwezel", "ravels"],
    faq: [
      {
        q: "How do I arrange a delivery in Hoogstraten?",
        a: "Calculate your drying package online or contact us with your address in Hoogstraten, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
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
        q: "Does a dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps getting in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Hoogstraten?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
  "oud-turnhout": {
    slug: "oud-turnhout",
    title: "Construction dehumidifier hire in Oud-Turnhout | Vernast",
    description:
      "Building or renovating in Oud-Turnhout? Hire a construction dehumidifier from Vernast: delivery, installation and collection included. Prices online.",
    h1: "Construction dehumidifier hire in Oud-Turnhout",
    kicker: "Oud-Turnhout \u00b7 delivery to your site",
    rit: { afstand: "about 43 km", tijd: "about forty minutes" },
    intro: [
      "Need a construction dehumidifier in Oud-Turnhout for a new build, a renovation or water damage? At Vernast you hire dehumidifiers to dry screed, plasterwork and damp rooms. **Delivery, installation and collection are included in your drying package.** Calculate your hire price online or call us for help choosing the right units.",
    ],
    bouw: {
      kop: "Construction drying for your project in Oud-Turnhout",
      alineas: [
        "Vernast delivers to Oud-Turnhout and nearby places such as Turnhout, Arendonk and Retie. Include the full site address in your request and the person who can let us in on site. That way we can arrange delivery and installation in advance.",
        "With a wet cellar or a leak, the work starts with the cause: if water keeps getting in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
        "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
        "**Drying time depends on the conditions on your site.** The thickness and make-up of the material, the temperature and the humidity all play a part. A dry surface layer does not automatically mean the whole floor or wall is ready for finishing. Agree the residual moisture check with your floor layer or decorator.",
      ],
    },
    toestellen: [
      {
        key: "ttk650",
        waarom: "**For larger volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need drying.",
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
      kop: "Delivery and installation in Oud-Turnhout",
      alinea: "**With your drying package, delivery, installation and collection are included.** Give us the address in Oud-Turnhout, your preferred start date and the access details. Mention a floor without a fixed staircase, a narrow passage or limited parking in advance. The technician installs the units and explains how to use the set-up and check the condensate drain. The agreed delivery is shown in your booking.",
    },
    afhalen: {
      kop: "Collecting it yourself from Oud-Turnhout",
      alinea: "You can collect a single unit by appointment from Vernast, Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance** so the right unit is ready. Check the collection rates and allow for both the outward and the return trip. Check the dimensions and weight, and follow the transport instructions. If you are unsure about the set-up or need several units, talk to us about a drying package with installation.",
    },
    buren: ["turnhout", "arendonk", "retie", "kasterlee"],
    faq: [
      {
        q: "How do I arrange a delivery in Oud-Turnhout?",
        a: "Calculate your drying package online or contact us with your address in Oud-Turnhout, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
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
        q: "Does a dehumidifier solve a persistent damp problem?",
        a: "A construction dehumidifier helps remove moisture, but it does not repair a leak, water ingress or a missing damp-proof barrier. Have the cause investigated first. If new water keeps getting in, the material can get wet again, even while the dehumidifier is running.",
      },
      {
        q: "What power supply do I need?",
        a: "The connected load differs per unit. Check the data sheet and tell us which connection is available on your site. The 20 and 30 kW electric site heaters need a suitable 400 V supply. If in doubt, have the available capacity and the circuit protection checked.",
      },
      {
        q: "Can I collect a unit for a site in Oud-Turnhout?",
        a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
      },
    ],
    realisaties: [],
  },
};
