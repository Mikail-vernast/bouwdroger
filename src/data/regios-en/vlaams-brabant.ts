import { routeEn, dagEn, LADDER_EN, POMP_EN, provinceEn, type RegioEn } from "./basis.js";

/** Engelse tekst van de provinciepagina Vlaams-Brabant, vertaald uit regios.ts. */
export const REGIO: RegioEn = {
  ...routeEn("vlaams-brabant"),
  title: "Dehumidifier hire, Flemish Brabant: Leuven, Halle | Vernast",
  description:
    "Hiring a construction dehumidifier in Flemish Brabant? Calculate your drying package at Vernast. Delivery, installation and collection included, with advice.",
  h1: "Construction dehumidifier hire in Flemish Brabant",
  kicker: "Leuven · Vilvoorde · Halle · Aarschot · the Brussels periphery",
  intro: [
    "Hire a construction dehumidifier for your new build, renovation or water damage in Flemish Brabant. Vernast delivers across the whole province, from Leuven and Aarschot to Halle and the Brussels periphery. **Delivery, installation and collection are included in the price of your drying package.** Calculate online which package suits your site or call us for advice.",
  ],
  bouw: {
    kop: "Construction drying for your project in Flemish Brabant",
    alineas: [
      "For a site in Leuven, the Brussels periphery, the Hageland or the Pajottenland, the situation inside the building is the starting point. Is it a lived-in flat, a house under renovation or an open new-build site? Tell us which rooms stay in use and when the next contractor is due. That way we can discuss the installation and follow-up with you.",
      "New screed and plasterwork bring moisture into the building. When choosing a drying package, the material, thickness, volume and temperature matter most. Let us know when the material was laid as well. The drying set-up and the moment you start must follow the instructions of your contractor or material supplier.",
      "With a damp cellar or a leak, the work starts with the cause: if water keeps coming in, drying alone is not a lasting solution. Have the leak or water ingress dealt with first and remove any standing water. We then look at which materials are wet and whether the moisture is also under a floor or behind a wall.",
      "**Temperature and air circulation matter too.** On a cold site, extra heating may be needed, depending on the dehumidifier and the conditions. Discuss the power supply before you book a site heater. The maximum capacity on a data sheet is not a fixed amount of water the unit will remove every day on every site.",
    ],
  },
  beeld: {
    src: "/vernast/case-nieuwbouw.webp",
    alt: "Renovated villa being finished in the Brussels periphery",
  },
  toestellen: {
    kop: "Which units suit your site?",
    items: [
      {
        key: "ttk350",
        waarom: `**For larger rooms or several drying zones.** The capacity you need depends on the volume and the wet materials. The layout of your site decides where the units go. From ${dagEn("ttk350")} per day.`,
      },
      {
        key: "ttk650",
        waarom: `**For large volumes and a heavy moisture load.** Check the data sheet and have the set-up matched to the rooms that actually need to dry. From ${dagEn("ttk650")} per day.`,
      },
      {
        key: "radiaal2250",
        waarom: `**For targeted air circulation along a floor or wall.** Where it goes depends on the zone that needs to dry. Combine air movement with enough dehumidifying capacity. From ${dagEn("radiaal2250")} per day.`,
      },
      {
        key: "ttk170",
        waarom: `**For a single room or a smaller drying zone.** Give us the dimensions, the temperature and the amount of moisture so we can tell whether this unit has enough capacity. From ${dagEn("ttk170")} per day.`,
      },
    ],
  },
  levering: {
    kop: "Delivery and installation in Flemish Brabant",
    alineas: [
      "We deliver to Leuven, Vilvoorde, Halle, Aarschot and the other municipalities in Flemish Brabant. **Delivery, installation and collection are included in your drying package.** Give us the full site address, your preferred start date and a contact person. Mention anything unusual, such as a narrow passage, a floor without a fixed staircase or limited loading space, before we arrange the delivery.",
      "The technician spreads the units over the agreed drying zones and explains how to use the set-up. We also go through the condensate drain and what you check yourself during the hire. Keep the access clear and make sure the agreed power supply is available. If something changes on site or water gets in again, get in touch with us.",
    ],
    feiten: [
      { label: "Delivery, installation and collection", waarde: "Included in the drying package" },
      { label: "Delivery time", waarde: "As per your booking" },
      { label: "Floor without a fixed staircase", waarde: `Discuss in advance; ladder surcharge ${LADDER_EN} per floor` },
      { label: "Condensate pump", waarde: `${POMP_EN} per dehumidifier per day, if chosen` },
    ],
  },
  afhalen: {
    kop: "Collecting it yourself from Flemish Brabant",
    alineas: [
      "A single unit can be collected by appointment from our warehouse at Boomsesteenweg 12, unit 11 in Aartselaar. **Book in advance and check the collection rates.** When choosing between collection and delivery, take the return trip into account as well. Make sure the unit fits in your vehicle and follow the transport instructions for the model you chose.",
      "If you collect the unit, you set it up yourself. So tell us in advance what needs to dry and what power connection you have. For several rooms, hard-to-reach areas or if you are unsure about the capacity you need, you can ask for advice on a drying package with installation. The agreed hire period and any extras are shown in your booking.",
    ],
    feiten: [
      { label: "Collection point", waarde: "Boomsesteenweg 12, unit 11, Aartselaar" },
      { label: "Collection time", waarde: "By appointment" },
      { label: "Transport", waarde: "As per the instructions for the chosen unit" },
      { label: "Prefer delivery?", waarde: "Delivery and installation included in your drying package" },
    ],
  },
  faq: [
    {
      q: "How do I arrange a delivery in Flemish Brabant?",
      a: "Calculate your drying package online or contact us with your address in Flemish Brabant, the size of the room and your preferred start date. Let us know the floor level and the available power supply too. We then agree the delivery time and access to the site with you.",
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
      q: "Can I collect a unit for a site in Flemish Brabant?",
      a: "Collection is possible by appointment from our warehouse in Aartselaar, Boomsesteenweg 12, unit 11. Book your unit in advance and make sure it fits in your vehicle. Follow the transport instructions for the chosen unit. With a delivered drying package, we take care of installation and collection.",
    },
  ],
  realisaties: {
    kop: "Sites we have dried in Brussels and its periphery",
    intro: "Take a look at examples from the nearby Brussels-Capital Region. For each project you will find the location, the work carried out and the available photos.",
    slugs: ["pleisterwerk-drogen-sint-pieters-woluwe", "badkamer-drogen-brussel"],
  },
  areaServed: provinceEn("Flemish Brabant"),
};
