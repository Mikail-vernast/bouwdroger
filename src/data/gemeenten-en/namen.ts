import type { Gemeente } from "../gemeenten.js";

/**
 * De Engelse teksten van de gemeentepagina's in deze provincie, gesleuteld op
 * de Nederlandse slug. Zie README.md in deze map voor de regels en hoe een
 * gemeente aangezet wordt (`aan/namen.ts`).
 */
export const GEMEENTEN: Record<string, Gemeente> = {
  "namen-stad": {
    slug: "namen-stad",
    title: "Construction dehumidifier hire in Namur City | Vernast",
    description:
      "Dehumidifier hire in Namur: old town houses on the Sambre and Meuse, damp cellars and homes in Jambes and Wépion. Delivered and installed by appointment.",
    h1: "Construction dehumidifier hire in Namur City",
    kicker: "Province of Namur · the city on the Sambre and Meuse",
    rit: { afstand: "about 95 km", tijd: "about an hour" },
    intro: [
      "**Namur**, Namen in Dutch, lies where **the Sambre flows into the Meuse**. Above that confluence the citadel stands on its rocky spur. At its foot, on the Grognon, sits the Walloon Parliament. Namur is the capital of Wallonia and the main town of the province of the same name.",
      "This page is about **the city itself**: the old centre between the two rivers, **Jambes** on the other side of the Meuse, and districts and former municipalities such as Salzinnes, Bouge, Saint-Servais, Wépion and Malonne. From Aartselaar the van takes about an hour. For the rest of the province of Namur we have separate pages.",
    ],
    bouw: {
      kop: "Town houses by the river and houses against the rock",
      alineas: [
        "**The old centre** is made up of narrow town houses and mansions in brick and blue stone, often with **a vaulted cellar**. Those cellars lie close to the level of the Sambre and the Meuse. When the river is high, the groundwater under the banks rises too. After such a period, or after a renovation with new plasterwork, the cellar and ground floor stay wet for a long time.",
        "**Along the Meuse towards Wépion and at the foot of the citadel**, houses stand against the slope. There, moisture comes not only from below but also **from the hill side** through the back wall. The technician takes a moisture reading during installation. That way you know whether it is construction moisture, which a dehumidifier removes, or water from the slope.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a vaulted cellar that got wet when the river was high**: this dehumidifier extracts 110 litres a day from the air and is suitable for up to about 600 m³." },
      { key: "radiaal2250", waarom: "Under a town house, the cellar has corners where the air does not move. **This radial fan blows straight across the floor** and right into those corners." },
      { key: "ttk170", waarom: "**For a flat or an upper floor in the centre**: a compact 50 litre a day dehumidifier that runs on a standard socket." },
      { key: "teddh30", waarom: "A cellar against the rock face stays cool even in summer. **Below 15 °C a condensation dehumidifier loses efficiency.** This 30 kW heater needs three-phase power (400 V)." },
    ],
    levering: {
      kop: "Delivery in Namur: via the E411 to your door",
      alinea:
        "From Aartselaar, Namur is **about an hour's drive**, via the Brussels ring road and the E411. You choose a delivery date when you book; in Wallonia we deliver **by appointment**. In the old centre the streets are narrow and parking is limited. Let us know in advance whether the van can stop briefly outside the door. The technician brings the units to where they need to go, including the cellar.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar rarely pays off from Namur",
      alinea:
        "Our collection point is **about an hour's drive** away, and you make that trip there and back, once to collect and once to return. A construction dehumidifier also has to be **transported upright**. For a cellar by the river, delivery is the better choice: then the technician measures how wet the walls are at the start.",
    },
    buren: ["la-bruyere", "fernelmont", "profondeville", "floreffe", "assesse"],
    faq: [
      {
        q: "My cellar flooded when the Meuse was high. When do I put in a dehumidifier?",
        a: "Only once the standing water has gone and the cellar has been cleared. A dehumidifier removes moisture from the floor and walls, not the water still standing on the floor. When you book, tell us how high the water came, and the technician will bring the right combination of dehumidifier and fan.",
      },
      {
        q: "Do you also deliver in Jambes, Wépion and Salzinnes?",
        a: "Certainly, there too. Jambes, Wépion, Salzinnes, Bouge, Saint-Servais and the other parts of the city of Namur are within our delivery area. Give us the full address when you book, and we will plan the trip properly.",
      },
      {
        q: "My house stands against the slope below the citadel. Is that construction moisture?",
        a: "That depends on whether it comes back. After a renovation with new plasterwork it is mostly construction moisture, and a unit dries that out. If the wall on the hill side gets wet again after every shower, the water is coming from the slope. The moisture reading during installation shows which of the two it is.",
      },
      {
        q: "Can a construction dehumidifier go in a flat above a shop in the centre?",
        a: "It can. The compact 50 litre a day dehumidifier runs on a standard socket and so also fits in a smaller flat. If there is no lift, tell us which floor the unit needs to go to, so the technician can take that into account.",
      },
      {
        q: "Can I also ask my questions in French?",
        a: "Questions in French? Feel free to email or call us. Also let us know who will be there at delivery, for example your contractor, so we know who to arrange the installation with.",
      },
    ],
    realisaties: [],
  },
  dinant: {
    slug: "dinant",
    title: "Hire a construction dehumidifier in Dinant | Vernast",
    description:
      "Dehumidifier hire in Dinant: for houses against the rock, cellars on the Meuse and homes in Anseremme and Bouvignes. We deliver, install and measure moisture.",
    h1: "Construction dehumidifier hire in Dinant",
    kicker: "Namur · the town between the Meuse and the rock",
    rit: { afstand: "about 115 km", tijd: "nearly an hour and a half" },
    intro: [
      "Dinant lies in **a narrow strip between the Meuse and a steep rock face**. Above the town stands the citadel, below the rock the collegiate church with its pear-shaped spire. Because there is little room, the town stretches out lengthwise along the water.",
      "The municipality also includes **Anseremme**, where the Lesse flows into the Meuse, Bouvignes and villages on the plateau such as Falmignoul, Sorinnes and Foy-Notre-Dame. From our warehouse in Aartselaar it takes us nearly an hour and a half to get there.",
    ],
    bouw: {
      kop: "Houses against the rock and cellars on the Meuse quay",
      alineas: [
        "Many homes in the centre stand **with their back wall against the rock**. Behind that wall are limestone and soil, and when it rains, moisture seeps in that has nothing to do with the renovation. After new plasterwork you want to know which moisture comes from the work and which from the rock face. That is why the technician measures both zones separately.",
        "On the quay the ground floor lies close to the water level of the Meuse, and heavy rain quickly floods streets and cellars here. After **water damage** you always follow the same order: first clear the standing water and the mud, then dry the floor, walls and cellar until the finishing work can begin.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**After water on a ground floor on the Meuse quay**: 110 litres a day draws the moisture out of the floor and walls before it rises higher up the wall." },
      { key: "revolution", waarom: "For **the room against the rock face** that stays cold: this desiccant dehumidifier absorbs moisture where a condensation dehumidifier hardly does anything any more." },
      { key: "radiaal2250", waarom: "Blows straight across a wet floor and into the corners of a cellar, where the water stays longest after a flood." },
      { key: "ttk350", waarom: "For **a narrow town house you are doing up floor by floor**: 70 litres a day for rooms up to 400 m³." },
    ],
    levering: {
      kop: "Delivery in Dinant: via Namur and along the Meuse",
      alinea:
        "We drive via Namur and then follow the Meuse upstream, nearly an hour and a half in all. You choose **a delivery date** when you book; in Wallonia we deliver by appointment. Along the quay and in the narrow streets behind the collegiate church, the van cannot stop everywhere. Let us know in advance where we can load.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar: nearly three hours there and back",
      alinea:
        "Our collection point is nearly an hour and a half's drive from Dinant. You make that trip there and back at the start and again when you return the units. With delivery, the technician sets up the units per drying zone and takes **a moisture reading at the start**, and you need that in a house against the rock.",
    },
    buren: ["yvoir", "anhee", "onhaye", "hastiere", "houyet"],
    faq: [
      {
        q: "My house stands against the rock face. Is that construction moisture?",
        a: "Not always. Plasterwork and screed give off their water once and are then dry. Moisture from the rock and the soil behind the wall comes back after every wet spell. During installation the technician measures both sides, so you know what a dehumidifier can solve here.",
      },
      {
        q: "What do I do first if the Meuse has reached my ground floor?",
        a: "Have the standing water pumped out, remove the mud and have the electrics checked for safety. Only then does drying make sense. When you book, tell us how high the water came, and we will put together the right combination of dehumidifiers and fans.",
      },
      {
        q: "Do you also deliver on the plateau, in Sorinnes or Foy-Notre-Dame?",
        a: "Yes, we deliver in all parts of the municipality of Dinant, including the villages above the valley. There it is more often a converted farmhouse than a house on the quay. Give us the floor area and the ceiling height, and we will match the units to that larger volume.",
      },
      {
        q: "Can a dehumidifier keep running in a cellar under a town house?",
        a: "Yes. The technician runs the drain hose to a floor drain or a sink, so you do not have to empty a tank. In a cold cellar against the rock we prefer the desiccant dehumidifier, because it keeps absorbing moisture even at low temperatures.",
      },
    ],
    realisaties: [],
  },
};
