import type { Gemeente } from "../gemeenten.js";

/**
 * De Engelse teksten van de gemeentepagina's in deze provincie, gesleuteld op
 * de Nederlandse slug. Zie README.md in deze map voor de regels en hoe een
 * gemeente aangezet wordt (`aan/henegouwen.ts`).
 */
export const GEMEENTEN: Record<string, Gemeente> = {
  bergen: {
    slug: "bergen",
    title: "Construction dehumidifier hire in Mons | Vernast",
    description:
      "Dehumidifier hire in Mons: for town houses and cellars in the old centre and for homes in Jemappes, Cuesmes and Ghlin. Delivered and installed.",
    h1: "Construction dehumidifier hire in Mons",
    kicker: "Hainaut · the provincial capital",
    rit: { afstand: "about 100 km", tijd: "just over an hour" },
    intro: [
      "Mons, **Bergen** in Dutch, is the capital of Hainaut. The old town sits on a hill, crowned by **the belfry**, which is on the UNESCO list. Every year the Doudou passes through those streets, with the fight between Saint George and the dragon on the Grand-Place.",
      "Around the centre lie districts of a different kind: **Jemappes, Cuesmes and Flénu** on the Borinage side, Nimy, Ghlin and Obourg to the north and rural villages such as Spiennes and Harmignies to the south. From our warehouse in Aartselaar we drive **just over an hour** to Mons.",
    ],
    bouw: {
      kop: "Town houses on the hill, cellars under the old town",
      alineas: [
        "The town centre has **deep town houses and merchants' houses** with high ceilings and often a vaulted cellar. Anyone dividing such a building into flats or having it replastered brings a lot of construction moisture into a large volume. Because of the high ceilings, that volume is larger than the floor area suggests. **The technician works it out on site.**",
        "A vaulted cellar in old brick stays **cool even in summer**. A condensation dehumidifier works slowly there, whereas a **desiccant dehumidifier** does extract moisture. If the cellar is to be lived in, as a studio or a bar, we first find out whether the moisture is coming in from outside.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a town house with high ceilings** being renovated floor by floor: 110 litres a day, for rooms up to about 600 m³." },
      { key: "revolution", waarom: "**For the vaulted cellar** under a building in the town centre. A desiccant dehumidifier keeps removing moisture even in a cool, damp space." },
      { key: "ttk350", waarom: "For a flat in a divided merchant's house or a home in Jemappes or Cuesmes: 70 litres a day, up to about 400 m³." },
      { key: "ttv4500", waarom: "In a high room, damp air hangs at the bottom. This fan moves 4,500 m³ of air an hour, so **plasterwork right up to the ceiling** dries evenly." },
    ],
    levering: {
      kop: "Delivering in Mons: via the E19, right into the town centre",
      alinea:
        "We drive just over an hour, via the Brussels ring road and **the E19 towards Paris**. You choose a delivery date when you book; in Wallonia we deliver by appointment, so we set the time together. The streets on the hill are narrow and steep. Tell us in advance where the van can stop, so the technician can unload and take moisture readings without delay.",
    },
    afhalen: {
      kop: "Collecting: just over an hour each way",
      alinea:
        "Aartselaar is just over an hour's drive from Mons, and you make that trip twice: when collecting and when returning. That only pays off if you are heading towards Antwerp anyway. For a town house or a cellar **you are better off having it delivered**, because there the set-up counts as much as the unit.",
    },
    buren: ["jurbeke", "frameries", "quevy", "saint-ghislain", "le-roeulx"],
    faq: [
      {
        q: "How many dehumidifiers do I need for a town house with high ceilings?",
        a: "That depends on the volume, not on the floor area. A room four metres high holds a third more air than a room of three metres. We usually put one large dehumidifier on each floor and keep the doors closed. The technician checks the calculation during installation.",
      },
      {
        q: "Can a construction dehumidifier keep running in a vaulted cellar?",
        a: "Yes, if you choose the right type. A condensation dehumidifier works poorly in a cellar that stays below 15 °C. A desiccant dehumidifier does extract moisture from the air there. We also measure whether moisture keeps coming in through the wall, because a dehumidifier does not solve that.",
      },
      {
        q: "How do you deliver in the narrow streets of the town centre?",
        a: "When you book, give us the address and the parking arrangements in your street. The technician parks the van as close to the door as possible and brings the units in for the last stretch with a sack truck. If a unit has to go to a floor without a lift, it is best to tell us in advance.",
      },
      {
        q: "Do you also deliver in districts such as Obourg or Spiennes?",
        a: "Yes, we deliver throughout Mons, including the rural districts outside the town. If the site is on a narrow or unpaved road, describe the access when you book. That way the technician knows in advance where he can load and unload.",
      },
    ],
    realisaties: [],
  },
  charleroi: {
    slug: "charleroi",
    title: "Hire a construction dehumidifier in Charleroi | Vernast",
    description:
      "Dehumidifier hire in Charleroi: terraced houses in the lower town, town houses in the Ville Haute, lofts in old factory halls. Delivered, set up per floor.",
    h1: "Construction dehumidifier hire in Charleroi",
    kicker: "Hainaut · the city on the Sambre",
    rit: { afstand: "about 95 km", tijd: "just over an hour" },
    intro: [
      "Charleroi is the largest city in Wallonia and the heart of the former coalfield, the **Pays Noir**. The city consists of the Ville Haute on the hill and the **Ville Basse** down by the Sambre, where the canal to Brussels also ends.",
      "Since the merger of 1977, Marcinelle, Jumet, Gilly, Gosselies and Marchienne-au-Pont have also been part of Charleroi. Between the streets of terraced houses, the slag heaps of the old mines still stand. From our warehouse in Aartselaar we are on the road for **just over an hour** to Charleroi.",
    ],
    bouw: {
      kop: "Terraced houses, town houses and old factory halls",
      alineas: [
        "Most homes in Charleroi are **brick terraced houses** from the days of the mines and the steel industry: narrow, deep and often with a vaulted cellar under the front room. A renovation adds new plaster and new screed, in a house where the air circulates poorly. So put **one dehumidifier on each floor** and keep the doors closed. That works better than one large unit in the hallway.",
        "The Ville Haute has town houses with ceilings of three metres and more. In the lower town, old factory halls and warehouses are being converted into lofts or business premises. Volumes like that need several units, spread across the space. **The technician takes a moisture reading during installation** to see how much moisture is in the floor and walls.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For the classic terraced house**: one unit per floor, 70 litres a day for rooms up to about 400 m³." },
      { key: "ttk650", waarom: "**For a loft or hall** in the lower town: 110 litres a day for rooms up to about 600 m³. For a larger volume we install several." },
      { key: "teddh30", waarom: "First brings a cold hall up to temperature in winter, so the dehumidifiers can do their work. The 30 kW heater needs a 400 V connection." },
      { key: "ttv4500", waarom: "In a narrow, deep terraced house, pushes the air from the front room to the back extension, which a dehumidifier alone barely reaches." },
    ],
    levering: {
      kop: "Delivering in Charleroi: via the ring road and the A54",
      alinea:
        "We drive from Aartselaar via the Brussels ring road and the A54 past Nivelles, **just over an hour** on the road. You choose a delivery date when you book. We agree the exact time with you, because in Wallonia we deliver **by appointment**. In a narrow street, keep a space free in front of the door if you can. The technician installs the units, sets up the drain and takes a moisture reading.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar takes half a day",
      alinea:
        "Our collection point is just over an hour's drive from Charleroi. There and back, you are on the road for **just over two hours**, and you do that twice: when collecting and when returning. A dehumidifier is transported upright. For one small unit it can work if you are heading towards Antwerp anyway. For a whole house or a hall, you are better off having it delivered.",
    },
    buren: ["courcelles", "fleurus", "chatelet", "farciennes", "montigny-le-tilleul"],
    faq: [
      {
        q: "Why does the vaulted cellar of my terraced house in Charleroi stay damp?",
        a: "A vaulted brick cellar has its walls against the ground, is not ventilated and stays cool all year round. Moisture from the air condenses on the cold bricks and ground moisture soaks into the masonry. A dehumidifier keeps the cellar usable. The technician first measures whether it is construction moisture or ground moisture.",
      },
      {
        q: "Can you dry a loft in an old factory hall?",
        a: "Yes, as soon as the space is closed off with windows and doors, or temporarily with sheeting. In an open hall, a unit mainly dries the outside air. Give us the floor area and the height in advance. We then work out how many dehumidifiers are needed and whether a heater should be added.",
      },
      {
        q: "How high can a ceiling be for one construction dehumidifier?",
        a: "It is not about the height but about the volume in cubic metres. A room in a town house with a three-metre ceiling holds much more air than a room of the same size in a terraced house. The calculator works with that volume. On site, the technician decides whether a larger unit or a second dehumidifier is needed.",
      },
      {
        q: "Do you also deliver in Marcinelle, Jumet or Gosselies?",
        a: "Yes, we deliver in all the districts of Charleroi, from Gosselies in the north to Marcinelle and Couillet in the south. You choose a delivery date when you book and we agree the time with you. Let us know in advance about a narrow street or difficult access.",
      },
    ],
    realisaties: [],
  },
};
