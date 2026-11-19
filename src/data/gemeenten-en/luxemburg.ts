import type { Gemeente } from "../gemeenten.js";

/**
 * De Engelse teksten van de gemeentepagina's in deze provincie, gesleuteld op
 * de Nederlandse slug. Zie README.md in deze map voor de regels en hoe een
 * gemeente aangezet wordt (`aan/luxemburg.ts`).
 */
export const GEMEENTEN: Record<string, Gemeente> = {
  aarlen: {
    slug: "aarlen",
    title: "Construction dehumidifier hire in Arlon | Vernast",
    description:
      "Dehumidifier hire in Arlon: town houses in the old town and new builds in the outlying villages. We deliver, install the units and collect them again.",
    h1: "Construction dehumidifier hire in Arlon",
    kicker: "Province of Luxembourg · the capital on the hill",
    rit: { afstand: "about 225 km", tijd: "over two hours" },
    intro: [
      "**Arlon**, Aarlen in Dutch, is the capital of the province of Luxembourg. The town goes back to the Roman settlement of Orolaunum, on the road from Reims to Trier. In a few places in the centre you can still see **Roman remains**.",
      "The old town lies on a hill around the Church of Saint Donatus, with steep streets running down from it. The municipality also includes **Autelbas, Bonnert, Guirsch, Heinsch and Toernich**. Many residents work in the Grand Duchy, and as a result a lot of new building goes on in those villages. From Aartselaar it takes us over two hours to get there.",
    ],
    bouw: {
      kop: "Town houses on the hill, housing plots for cross-border workers",
      alineas: [
        "In the old town there are **town houses in natural stone**, with high rooms and a cellar set partly into the slope. Anyone dividing such a house into flats or having it replastered has to dry a large volume between thick, cold walls. With a damp cellar, first check whether it is construction moisture or water that keeps coming from behind the wall. A dehumidifier only solves the first.",
        "In the outlying villages new houses and flats are going up. There the water is in **the screed and the plasterwork**, while the floor layer and the decorator are already booked. Arlon lies high and the winters are cold. An unheated site then dries slowly, unless you add heat.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a town house with high ceilings** in the old town: 110 litres a day, for a volume of up to about 600 m³." },
      { key: "ttk350", waarom: "For **a new-build house in Heinsch or Toernich** with fresh screed: 70 litres a day, up to about 400 m³." },
      { key: "teddh30", waarom: "**For an unheated winter site**: this 30 kW electric heater on three-phase power (400 V) brings the room above 15 °C, so a condensation dehumidifier works properly." },
      { key: "revolution", waarom: "For **a cold cellar on the hill side**: a desiccant dehumidifier keeps absorbing moisture there, even where a condensation dehumidifier stops." },
    ],
    levering: {
      kop: "Delivery in Arlon: via the E411 to the border",
      alinea:
        "We drive over two hours to Arlon, via Brussels, Namur and the E411. You choose **a delivery date** when you book, and because Arlon is in Wallonia, we agree the time with you. If the property is on a steep street in the old town, let us know in advance. The technician carries the units inside and sets them up per drying zone.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar: a full day's driving",
      alinea:
        "From Arlon you are on the road for **over four hours** there and back, without traffic jams around Brussels. That is only worth it if you are near Antwerp anyway. In all other cases you are better off having the units delivered, so the technician places them in the right spot straight away.",
    },
    buren: ["attert", "habay", "messancy"],
    faq: [
      {
        q: "Do you deliver to Arlon in Belgium or also in the Grand Duchy?",
        a: "Arlon is the capital of the Belgian province of Luxembourg, not Luxembourg City in the Grand Duchy. We deliver in Arlon and all its outlying villages. If your site is across the border, contact us first.",
      },
      {
        q: "Isn't Arlon too far to have a construction dehumidifier delivered?",
        a: "It is a long trip of over two hours, but we do deliver there. When you book you choose a delivery date, and we fix the time together. The technician places the units and sets them up, just as closer to Antwerp.",
      },
      {
        q: "Does a construction dehumidifier work during a cold winter in Arlon?",
        a: "A condensation dehumidifier works well above about 15 °C. On an unheated site the temperature drops well below that in winter. Then add an electric site heater, or choose a desiccant dehumidifier, which keeps absorbing moisture in the cold.",
      },
      {
        q: "My cellar in the old town is still damp after the renovation. What now?",
        a: "First find out where the moisture is coming from. Construction moisture from new plasterwork dries out with a dehumidifier and the door kept shut. If water is getting through the wall on the hill side, it comes back after every wet spell and a dehumidifier only helps temporarily.",
      },
    ],
    realisaties: [],
  },
  bastenaken: {
    slug: "bastenaken",
    title: "Construction dehumidifier hire in Bastogne | Vernast",
    description:
      "Dehumidifier hire in Bastogne and Bertogne: new builds and renovations on the cold Ardennes plateau, a heater where needed and a moisture reading at the start.",
    h1: "Construction dehumidifier hire in Bastogne",
    kicker: "Province of Luxembourg · town on the Ardennes plateau",
    rit: { afstand: "about 210 km", tijd: "over two hours" },
    intro: [
      "**Bastogne**, Bastenaken in Dutch, lies on the high Ardennes plateau, some 500 metres above sea level. The town is known worldwide for **the Battle of the Bulge** in the winter of 1944. On its edge stand the Mardasson Memorial and the Bastogne War Museum. From our warehouse in Aartselaar it takes us over two hours to get there.",
      "Since 2025 **Bertogne** has also been part of the municipality, with villages such as Longchamps, Flamierge and Givry. The centre has terraced houses and shops. Around it lie farmhouses, housing plots and new builds on open, windswept land.",
    ],
    bouw: {
      kop: "Building where winter starts early",
      alineas: [
        "At this altitude **it freezes more often and for longer** than further inland, and snow in March is not unusual. Cold air takes up little moisture, and a condensation dehumidifier needs more than 15 °C to work well. A shell going into winter therefore hardly dries without extra heating. If you are pouring screed here in the autumn, plan **a heater next to the dehumidifier**.",
        "Older houses in the centre and in the villages are built of **natural stone**, with thick walls that hold water for a long time. When renovating with new plaster or a new floor, the technician first measures how wet the wall itself is. That way you know which moisture comes from the work and which the wall has been carrying for years.",
      ],
    },
    toestellen: [
      { key: "teddh30", waarom: "**For a shell standing on the plateau through the winter.** The 30 kW heater brings a cold shell up to a temperature at which drying becomes possible. It runs on 400 V: check whether there is three-phase power on site." },
      { key: "ttk650", waarom: "For a new house with screed across the whole ground floor: 110 litres a day, for rooms up to about 600 m³." },
      { key: "revolution", waarom: "For **a stone cellar or an unheated farmhouse in Bertogne**. A desiccant dehumidifier keeps absorbing moisture even in a cold room." },
      { key: "ttk350", waarom: "For a house in the centre being renovated floor by floor: 70 litres a day, for rooms up to about 400 m³." },
    ],
    levering: {
      kop: "Delivery in Bastogne by appointment",
      alinea:
        "From Aartselaar it is **over two hours' drive**. In Wallonia we deliver by appointment: you choose a **delivery date** when you book and we confirm the time in advance. The technician places the units per drying zone, sets up the drain and records the moisture readings of the wall and floor. That way collection is based on a measurement.",
    },
    afhalen: {
      kop: "Collecting it yourself from Bastogne",
      alinea:
        "There and back to our warehouse takes you **over four hours**, and the same again when you return the units. So collecting mainly pays off if you need to be near Antwerp anyway. If you also need a heater, choose delivery: it runs on 400 V and the technician checks the connection on site.",
    },
    buren: ["houffalize", "gouvy", "vaux-sur-sure", "sainte-ode"],
    faq: [
      {
        q: "Does a construction dehumidifier work in an unheated shell in Bastogne in winter?",
        a: "In an ice-cold room, only a desiccant dehumidifier still achieves a decent output. A condensation dehumidifier needs warmth. In the cold months we therefore add a heater, or you warm the room up first before the dehumidifier starts.",
      },
      {
        q: "Do you also deliver in Bertogne, now that it is part of Bastogne?",
        a: "Yes. Since the 2025 merger, Bertogne, Longchamps, Flamierge and the other villages have been part of Bastogne, and we deliver there in the same way. When you book, give the full address with the name of the village, so we plan the route correctly.",
      },
      {
        q: "Do we need three-phase power for the heater?",
        a: "For the 30 kW heater, yes, because it runs on 400 V. Many sites have a site distribution box with such a connection. If there is only an ordinary socket, let us know in advance. We will then put together a set-up that works on that.",
      },
      {
        q: "My house is built of natural stone. How long does a new coat of plaster need to dry?",
        a: "Longer than on a brick wall, because the thick stone wall itself holds moisture and releases it slowly. Think weeks rather than days. The reading at the start and at collection shows whether it is the plaster that is drying, or the wall behind it.",
      },
      {
        q: "Can I ask my questions in French as well?",
        a: "Questions in French? Feel free to email or call us. When you book, also let us know who will keep an eye on the units during the hire if you are not on site yourself, for example your contractor or a neighbour.",
      },
    ],
    realisaties: [],
  },
};
