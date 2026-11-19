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
  "s-gravenbrakel": {
    slug: "s-gravenbrakel",
    title: "Dehumidifier hire in Braine-le-Comte and Ronquières",
    description:
      "Construction dehumidifier hire in Braine-le-Comte, Ronquières or Hennuyères. We deliver by appointment, set up per drying zone and collect again.",
    h1: "Construction dehumidifier hire in Braine-le-Comte",
    kicker: "Hainaut · the inclined plane of Ronquières",
    rit: { afstand: "about 75 km", tijd: "about an hour" },
    intro: [
      "Braine-le-Comte, **'s-Gravenbrakel** in Dutch, grew up around the station on **the Brussels-Mons railway line**. Many residents commute to Brussels. People who settle here often buy an older house to renovate.",
      "At Ronquières lies **the inclined plane** of the Brussels-Charleroi Canal, where boats travel up and down a slope in large tanks. Around the canal and in Henripont, Hennuyères and Steenkerque the municipality is **rural**, with farmhouses and village homes on rolling ground. From Aartselaar we drive there in about an hour.",
    ],
    bouw: {
      kop: "Brick station districts, villages around the canal",
      alineas: [
        "Around the station and in the old centre stand **brick terraced houses and town houses** with high ceilings and often a cellar under the front room. Strip a house like that back to the walls and have it replastered, and you bring in hundreds of litres of water in one go. So put **one dehumidifier on each floor** and keep the doors closed. That works better than one large unit in the stairwell.",
        "In the villages along the canal it is more often **a farmhouse or an old village home** with solid walls and no cavity. There, besides construction moisture, ground moisture sometimes plays a part too. During installation the technician takes **a moisture reading** in the wall and floor. That way you know which part a dehumidifier removes and which part needs a different approach.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a town house near the station** being renovated floor by floor: 70 litres a day, for rooms up to about 400 m³." },
      { key: "ttv4500", waarom: "Under **the high ceilings of an old town house**, damp air lingers against the freshly plastered wall. This fan keeps it moving." },
      { key: "revolution", waarom: "For **the cellar under the front room**. It stays cold, and there a desiccant dehumidifier works better than a condensation dehumidifier." },
      { key: "ttk650", waarom: "For **a farmhouse around Ronquières or Henripont** with a large, open space: 110 litres a day, for rooms up to about 600 m³." },
    ],
    levering: {
      kop: "Delivering in Braine-le-Comte: via the ring road and the E19 towards Mons",
      alinea:
        "The drive goes **via the Brussels ring road and the E19** and takes about an hour. You choose a delivery date when you book; in Wallonia we deliver **by appointment**. The technician sets up the units per drying zone, lays the drain hose and notes a first moisture reading. If you live in a narrow street in the centre, keep a space free in front of the door.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar: two hours' driving for one unit",
      alinea:
        "From Braine-le-Comte you are **on the road for about two hours** there and back to our warehouse. If you work in Brussels or Antwerp and are heading that way anyway, collecting can pay off for one compact unit. For a whole house, you are better off having the units delivered and installed.",
    },
    buren: ["zinnik", "ecaussinnes", "edingen", "rebecq"],
    faq: [
      {
        q: "How many dehumidifiers does a town house with three storeys need?",
        a: "Usually one dehumidifier per storey with the doors closed, plus a fan in the rooms where the plasterwork or the screed is wettest. The calculator on the site works with the volume in cubic metres. On site, the technician adjusts the layout to the staircase and the floor plan.",
      },
      {
        q: "Do you also deliver in Ronquières, Henripont and Steenkerque?",
        a: "Yes, throughout the municipality, including the villages by the canal. When you book, mention whether your home is on a country lane or has an inner courtyard. Then the technician knows in advance where he can park the van.",
      },
      {
        q: "My cellar smells musty after the winter. Does a construction dehumidifier help?",
        a: "A dehumidifier extracts the moisture from the cellar air and the walls, and the musty smell usually goes with it. If water comes in through a cracked cellar wall or a poor drain, it returns as soon as the unit is gone. The moisture reading during installation shows which case it is.",
      },
      {
        q: "Can I leave the dehumidifier running at night in an occupied house?",
        a: "Yes. Put it in the room that needs drying, close the door and sleep in another room. The humidistat switches the unit off as soon as the air is dry enough. With the drain hose running to a floor drain, nobody has to empty a tank at night.",
      },
    ],
    realisaties: [],
  },
  "le-roeulx": {
    slug: "le-roeulx",
    title: "Construction dehumidifier hire in Le Rœulx | Vernast",
    description:
      "Dehumidifier hire in Le Rœulx, Thieu or Mignault, for old stone houses and floors laid on the ground by the canal. Delivered, installed and collected.",
    h1: "Construction dehumidifier hire in Le Rœulx",
    kicker: "Hainaut · the town of the Croÿ and the Thieu boat lift",
    rit: { afstand: "about 90 km", tijd: "just over an hour" },
    intro: [
      "Le Rœulx is **a small town** around the castle of **the princes of Croÿ** and its park. In the centre, old stone houses stand close together. Beyond it lie the villages of Thieu, Mignault, Gottignies and Ville-sur-Haine.",
      "**Thieu** has one of the four **historic boat lifts** on the Canal du Centre, which together are on the UNESCO World Heritage list. In the low-lying parts along the canal and the Haine the ground stays damp. From Aartselaar we get here in just over an hour.",
    ],
    bouw: {
      kop: "Old town houses and villages by the canal",
      alineas: [
        "Around the castle stand **houses with thick walls** of brick and natural stone, often with a vaulted cellar. A wall like that soaks up a lot of water during a renovation and releases it slowly. **Lime plaster on an old wall** dries better with moving air than with a dehumidifier on its highest setting. That is why the technician sets the humidistat to a moderate value, so the plasterwork does not crack.",
        "In Thieu and Ville-sur-Haine there are village homes with **a floor laid directly on the ground**. A new screed dries slowly there, especially in a cold, damp room. Next to the dehumidifier, put **a fan that blows low across the floor**. That way the floor is ready for finishing sooner.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a town house around the castle**: 70 litres a day, for rooms up to about 400 m³, with the drain running to a floor drain." },
      { key: "radiaal2250", waarom: "Across **a new screed laid on the ground** in Thieu or Ville-sur-Haine: it blows low and directly across the floor." },
      { key: "teddh20", waarom: "First brings **a vaulted cellar or an unheated ground floor** up to temperature. It needs a 400 V connection." },
      { key: "ttk170", waarom: "For **one room or a bathroom** in a smaller home: 50 litres a day, compact and on a 230 V socket." },
    ],
    levering: {
      kop: "Delivering in Le Rœulx: via the E19 and the La Louvière exit",
      alinea:
        "The drive takes just over an hour, **via the ring road and the E19 towards Mons**. You choose a delivery date when you book, and we agree the time with you. The technician installs the units, sets up the drain and takes **a moisture reading in the wall and floor**. That gives you a point of comparison at collection.",
    },
    afhalen: {
      kop: "Collecting it yourself takes half a day from Le Rœulx",
      alinea:
        "With **just over two hours of driving there and back**, collecting in Aartselaar only makes sense if you need to be near Antwerp anyway. A dehumidifier has to travel upright in the car. For a screed or a cellar, you are better off letting us deliver.",
    },
    buren: ["zinnik", "la-louviere", "bergen"],
    faq: [
      {
        q: "How do I dry lime plaster on an old stone wall without cracks?",
        a: "Not too fast. Lime plaster has to cure, and a wall that is dried too hard can crack or come loose. That is why the technician sets the humidistat to a moderate value and places a fan at a distance. That way the air moves without the surface drying out.",
      },
      {
        q: "Does a construction dehumidifier work in a vaulted cellar?",
        a: "Yes, but a vaulted cellar is cold, and below about 15 °C a condensation dehumidifier extracts little water from the air. So we add a site heater or choose a desiccant dehumidifier. Keep the cellar door closed, or the unit will dry the rest of the house as well.",
      },
      {
        q: "Can you dry a screed laid on the ground in Thieu?",
        a: "Yes. A screed laid on the ground dries mainly upwards. So we put a dehumidifier in the room and a radial fan that blows across the floor. The moisture reading at the start and at collection helps you and your floor layer decide whether the screed is ready for finishing.",
      },
      {
        q: "How does collection work?",
        a: "You let us know when the room is dry enough or when the hire period ends, and we arrange a time. The technician takes another reading, empties the units and takes them away. You do not have to clean or pack them yourself.",
      },
    ],
    realisaties: [],
  },
  manage: {
    slug: "manage",
    title: "Construction dehumidifier hire in Manage | Vernast",
    description:
      "Dehumidifier hire in Manage, Fayt-lez-Manage, La Hestre or Bois-d'Haine, for renovating a terraced house in the Centre region. Delivered and installed.",
    h1: "Construction dehumidifier hire in Manage",
    kicker: "Hainaut · railway junction in the Centre region",
    rit: { afstand: "about 85 km", tijd: "just over an hour" },
    intro: [
      "Manage lies **in the middle of the Centre region**, between La Louvière, Seneffe and Chapelle-lez-Herlaimont. In the nineteenth century it grew into **a railway junction and an industrial municipality**, with coal mines and metalworking nearby.",
      "Together with **Fayt-lez-Manage, La Hestre and Bois-d'Haine**, Manage forms one residential area with **long rows of workers' houses**, older shop buildings along the main roads and newer estates on the edge. Many buyers take on a house there that needs a thorough renovation. We drive there in just over an hour.",
    ],
    bouw: {
      kop: "Terraced houses from the industrial era, and what a renovation releases",
      alineas: [
        "The typical home in Manage is **a narrow brick terraced house** with a deep rear extension, a small yard and often a cellar under the front room. The rear extension was added later, with a thinner wall and sometimes a floor laid on the ground. **That is where most of the moisture sits after a renovation**, and that is where the technician puts the first unit.",
        "If the house is opened up completely, with new plasterwork, a new screed and a new bathroom, dry it **zone by zone** and not the whole house at once. That way the rear extension does not wait for a unit standing in the front room. The moisture reading at the start shows which room needs the longest.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a whole terraced house under renovation**: 70 litres a day, for rooms up to about 400 m³." },
      { key: "ttk170", waarom: "**For the rear extension or a new bathroom** on its own: 50 litres a day and compact enough for a narrow hallway." },
      { key: "radiaal2250", waarom: "Across **the new screed in a deep, narrow house**, where the air otherwise barely reaches the back." },
      { key: "revolution", waarom: "For **the cellar under the front room**: this desiccant dehumidifier keeps working in a space that stays cold all winter." },
    ],
    levering: {
      kop: "Delivering in Manage: the E19, then the A501 into the Centre region",
      alinea:
        "The drive takes just over an hour, **via the ring road and the E19**. You choose a delivery date when you book; we agree the delivery time. In a street of terraced houses it helps if you keep **a space free in front of the door**. The technician sets up the units per zone, runs the drain hose to a floor drain and shows you how to keep an eye on them.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar rarely pays off from Manage",
      alinea:
        "Our warehouse in Aartselaar is **just over an hour's drive** from Manage. Collecting can work for one compact unit that you set up in a room yourself, if you are heading towards Antwerp anyway. For a terraced house with a new screed, you are better off choosing delivery with installation.",
    },
    buren: ["seneffe", "la-louviere", "morlanwelz", "chapelle-lez-herlaimont"],
    faq: [
      {
        q: "Why does the rear extension of my terraced house stay wet for longer?",
        a: "A rear extension was often added later, with a thinner wall, a flat roof and a floor laid on the ground. It is colder than the rest of the house, and cold walls dry more slowly. A separate dehumidifier in the rear extension, with the door to the house closed, usually solves that.",
      },
      {
        q: "Can I dry the house while I keep living in it?",
        a: "Yes, if you close off the drying zone. Put the units in the rooms where work was done and keep the doors closed. Otherwise the unit mainly dries the air in your living space and less the wet walls and floors.",
      },
      {
        q: "How do I know whether the moisture in my wall is construction moisture or rising damp?",
        a: "Construction moisture is spread through new plasterwork and a new screed and decreases as soon as drying starts. Rising damp sits at the bottom of the wall, is highest near the floor and comes back. The technician takes readings at different heights and tells you what he finds.",
      },
      {
        q: "How much electricity does a dehumidifier use during a renovation?",
        a: "The compact unit draws about 0.75 kW, the largest about 1.4 kW. They do not run at full power all the time: the humidistat switches the unit off as soon as the air is dry enough, and then the consumption drops too.",
      },
    ],
    realisaties: [],
  },
};
