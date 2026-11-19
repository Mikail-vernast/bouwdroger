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
};
