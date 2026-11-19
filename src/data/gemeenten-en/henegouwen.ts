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
  "montigny-le-tilleul": {
    slug: "montigny-le-tilleul",
    title: "Dehumidifier hire in Montigny-le-Tilleul | Vernast",
    description:
      "Dehumidifier hire in Montigny-le-Tilleul and Landelies: villa estates on the slopes of the Sambre and Heure, cellars in the valley. Installed and measured.",
    h1: "Construction dehumidifier hire in Montigny-le-Tilleul",
    kicker: "Hainaut · between the Sambre and the Heure",
    rit: { afstand: "about 100 km", tijd: "just over an hour" },
    intro: [
      "Montigny-le-Tilleul lies **just south-west of Charleroi**, with **Landelies** as its district on the Sambre. The Heure flows through the municipality and joins the Sambre further on.",
      "On the slopes lie **villa estates** with detached houses; lower down in the valley, older houses stand closer to the water. From Aartselaar we drive there in **just over an hour**.",
    ],
    bouw: {
      kop: "Villas on the slope, houses in the valley",
      alineas: [
        "**On the slopes** it is mainly villas being renovated: a new kitchen with screed, a bathroom, fresh plastering after replacing pipes. If you live elsewhere during the works, you want to get back quickly. **A dehumidifier of the right size** shortens the wait until the floor layer can start.",
        "**Lower down in the valley of the Heure and near the Sambre**, homes stand closer to the water. A cellar there can turn damp in heavy rain, and after flooding it has to **dry thoroughly before anything goes back in**. During installation the technician measures how deep the moisture sits in the wall and floor.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For the villa under renovation**: 70 litres a day for a ground floor with a new kitchen and fresh screed." },
      { key: "ttk650", waarom: "After flooding in a cellar in the valley: **110 litres a day** extracts most of the moisture before it soaks deeper into the walls." },
      { key: "revolution", waarom: "**If water got under a floating floor or behind a stud wall**: this desiccant dehumidifier blows dry air into the cavity through hoses." },
      { key: "ttk170", waarom: "For one renovated bathroom or bedroom upstairs: compact, with 50 litres a day." },
    ],
    levering: {
      kop: "Delivering in Montigny-le-Tilleul: via the Charleroi ring road",
      alinea:
        "We drive **via Brussels, the A54 and the ring road around Charleroi**, just over an hour. You choose a **delivery date** when you book and we make an appointment for the time. If it concerns a cellar after flooding, tell us how high the water was, so the technician brings the right units in one trip.",
    },
    afhalen: {
      kop: "Collecting is possible, but it is a long way",
      alinea:
        "Our collection point in Aartselaar is **just over an hour's drive** away. For one compact unit that can be worth the trip. With a wet cellar, delivery is the better choice: you do not have to leave the house and the technician takes a reading straight away.",
    },
    buren: ["charleroi", "fontaine-l-eveque", "ham-sur-heure-nalinnes"],
    faq: [
      {
        q: "My cellar near the Heure got flooded. When can the dehumidifier go in?",
        a: "As soon as the standing water is gone and the cellar has been cleaned out. A dehumidifier works on the moisture left behind in the floor and walls, not on water that is still standing. Tell us when you book how high it was, and the technician will choose the right units.",
      },
      {
        q: "How soon is a new kitchen with screed ready for the tiles?",
        a: "That depends on the thickness of the screed and the type of floor, and the tiler sets the limit value. With a dehumidifier it goes faster than without. The technician takes a reading at collection, so you have a value to pass on.",
      },
      {
        q: "Can you dry behind a stud wall without taking it down?",
        a: "Often, yes. A desiccant dehumidifier blows dry air through hoses into the cavity behind the wall or under a floating floor, through a few small drill holes. Whether that is enough in your case, the technician judges after a reading.",
      },
      {
        q: "Do you also come to Landelies?",
        a: "Yes, Landelies is a district of Montigny-le-Tilleul on the Sambre and lies within our delivery area. Mention the district with the address, and the technician will drive straight to the right side of the valley.",
      },
    ],
    realisaties: [],
  },
  "pont-a-celles": {
    slug: "pont-a-celles",
    title: "Dehumidifier hire in Pont-à-Celles and Luttre | Vernast",
    description:
      "Dehumidifier hire in Pont-à-Celles, Luttre or Liberchies: homes along the Charleroi-Brussels canal and farms on the plateau. Delivered with a moisture reading.",
    h1: "Construction dehumidifier hire in Pont-à-Celles",
    kicker: "Hainaut · along the Charleroi-Brussels canal",
    rit: { afstand: "about 80 km", tijd: "about an hour" },
    intro: [
      "Pont-à-Celles lies **on the Charleroi-Brussels canal**, north of Charleroi. The municipality includes **Luttre, Liberchies, Obaix, Buzet, Rosseignies, Thiméon and Viesville**, among others. In Roman times, Liberchies had a settlement along the road from Bavay to Cologne.",
      "In Pont-à-Celles and Luttre there are **homes along the water and the railway**; in the other villages, **fields and farmhouses** dominate. Our warehouse in Aartselaar is about an hour's drive away.",
    ],
    bouw: {
      kop: "Houses by the canal and farmhouses on the plateau",
      alineas: [
        "**Along the canal and in the lower parts** stand older homes with cellars that can turn damp in a wet spell. Anyone renovating a home like that often dries **two things at once**: the construction moisture of the new screed and plaster, and the damp cellar walls. The technician measures both separately, so you know what goes away and what stays.",
        "**On the plateau** it is more often new builds and converted farmhouses. At handover, a new home with underfloor heating holds **a lot of water** in the screed and masonry. If you lay the parquet before the screed is dry, you risk the boards cupping later.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a home by the canal under renovation**: 70 litres a day for screed, plaster and a damp cellar wall together." },
      { key: "ttk650", waarom: "For a new build on the plateau with underfloor heating: **110 litres a day**, so the parquet layer can start on time." },
      { key: "radiaal2250", waarom: "Blows dry air directly across a new screed or along a cellar wall, **where the moisture lingers longest**." },
      { key: "teddh20", waarom: "For a cellar or garage that stays cold in winter: **20 kW** brings the room to a temperature at which the dehumidifier performs well. It needs a 400 V connection." },
    ],
    levering: {
      kop: "Delivering in Pont-à-Celles: right on the A54",
      alinea:
        "**The A54 runs right past the municipality**, so the drive from Aartselaar takes about an hour. You fix a **delivery date** when you book; we agree the time with you. The technician sets up the units per zone, lays the drain and notes the starting values.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar: an hour's drive",
      alinea:
        "Our collection point is **about an hour** away, via the A54 and the Brussels ring road. One unit fits in a car, strapped upright. For a new build or a full renovation you need several, and then delivery is simpler.",
    },
    buren: ["seneffe", "courcelles", "charleroi", "les-bons-villers"],
    faq: [
      {
        q: "When can parquet go on a new screed with underfloor heating?",
        a: "Only once the screed is below the limit value the parquet layer gives, and with underfloor heating that limit is stricter. A dehumidifier with a fan speeds that up considerably. The technician takes a reading at collection, so the parquet layer has a figure.",
      },
      {
        q: "My house is right by the canal. Is moisture in the cellar normal?",
        a: "A cellar in a lower-lying area can turn damp in a wet spell, especially in an older home without a damp-proof course. A dehumidifier extracts that moisture from the air and the walls. If the water comes in from outside, a repair or sealing is needed as well.",
      },
      {
        q: "Do you also drive to Luttre, Obaix and Viesville?",
        a: "Yes, all the districts of Pont-à-Celles are within our delivery area, including Liberchies, Buzet, Rosseignies and Thiméon. Mention the district with the address, because some street names occur in more than one village.",
      },
      {
        q: "How long does a dehumidifier stay in a new build?",
        a: "That depends on the thickness of the screed, the season and whether the home is already heated. Count on a few weeks. We agree an end date, and the reading at collection shows whether the target has been reached.",
      },
    ],
    realisaties: [],
  },
  boussu: {
    slug: "boussu",
    title: "Construction dehumidifier hire in Boussu | Vernast",
    description:
      "Dehumidifier hire in Boussu or Hornu. We deliver and install units in miners' houses and homes in the Haine valley, with a moisture reading on site.",
    h1: "Construction dehumidifier hire in Boussu",
    kicker: "Hainaut · the Borinage, Grand-Hornu and the Haine",
    rit: { afstand: "about 105 km", tijd: "just over an hour" },
    intro: [
      "Boussu lies in **the western Borinage**, between Mons and the French border. Besides Boussu itself, Hornu also belongs to the municipality. That is where you find **the Grand-Hornu**, a nineteenth-century mining complex on the UNESCO World Heritage list.",
      "Around the mines, **long rows of workers' houses** were built, and those streets still define the look of the municipality. To the north the land slopes down to the valley of the Haine. From our warehouse in Aartselaar we reach you in just over an hour.",
    ],
    bouw: {
      kop: "Rows of miners' houses and cellars in the Haine valley",
      alineas: [
        "A nineteenth-century miner's house has solid brick walls, with no cavity and often no damp-proof course. New plasterwork and a new screed bring a lot of water into a house like that, and the walls release it slowly. **During installation the technician measures the moisture in the wall and floor**, so you know whether it is construction moisture or rising damp.",
        "**Lower down in the municipality, towards the Haine**, cellars and ground floors are often cool and damp. After water in the cellar, a room like that does not dry out by itself. There we install a dehumidifier that also works at low temperatures, with a fan across the floor.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a miner's house being fully renovated**: 70 litres a day for rooms up to 400 m³, enough for a ground floor with new plasterwork." },
      { key: "revolution", waarom: "**For a cold, wet cellar towards the Haine**: this desiccant dehumidifier keeps working at low temperatures and dries through hoses right where the moisture is." },
      { key: "radiaal2250", waarom: "A terraced house is long and narrow. This 2,250 m³ an hour radial fan blows directly across the wet floor, all the way to the back of the house." },
      { key: "ttk170", waarom: "For one room or a bathroom upstairs: compact, 50 litres a day and a consumption of 0.75 kW." },
    ],
    levering: {
      kop: "Delivering in Boussu: via the E19 past Mons",
      alinea:
        "We drive via Brussels and **the E19 towards Mons**, and reach you in just over an hour. You choose a delivery date when you book. We agree the exact time with you, because in Wallonia we deliver **by appointment**. In a street of terraced houses it helps if there is a space free in front of the door.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar: over two hours there and back",
      alinea:
        "Our collection point in Aartselaar is **just over an hour's drive** from Boussu. If you are heading towards Antwerp anyway, you can take one small unit yourself. For a whole house or a wet cellar, you are better off choosing delivery: the technician then decides on site how many units are needed.",
    },
    buren: ["saint-ghislain", "quaregnon", "colfontaine", "dour", "hensies"],
    faq: [
      {
        q: "Do you also work in Hornu, near the Grand-Hornu?",
        a: "Yes. Hornu is a district of Boussu and falls within our delivery area. Around the old mining site there are many terraced houses with brick walls and no damp-proof course, and we pay extra attention to that during installation.",
      },
      {
        q: "Does an old miner's house dry as quickly as a new build?",
        a: "Usually not. A solid brick wall more than a hundred years old soaks up a lot of water during a renovation and releases it slowly. A moisture reading at the start and at collection shows you whether the painter or the floor layer can get to work.",
      },
      {
        q: "Is a construction dehumidifier worthwhile in a cellar that is always damp?",
        a: "That depends on the cause. A construction dehumidifier dries out construction moisture and water after a leak. If the moisture keeps coming up from the ground, a dehumidifier only keeps the cellar dry while it runs. The technician tells you which it is after the reading.",
      },
      {
        q: "How do I arrange the delivery and installation?",
        a: "Email or call us. Together we look at which units suit your home, and we agree a delivery date and a time for the installation.",
      },
    ],
    realisaties: [],
  },
  colfontaine: {
    slug: "colfontaine",
    title: "Construction dehumidifier hire in Colfontaine | Vernast",
    description:
      "Dehumidifier hire in Colfontaine, Pâturages, Wasmes or Warquignies: units for workers' houses on the hills of the Borinage, delivered and installed.",
    h1: "Construction dehumidifier hire in Colfontaine",
    kicker: "Hainaut · Pâturages, Wasmes and Warquignies",
    rit: { afstand: "about 105 km", tijd: "just over an hour" },
    intro: [
      "Colfontaine was formed by the merger of **Pâturages, Wasmes and Warquignies** and lies in the heart of the Borinage, west of Mons. The municipality is densely built and hilly, with the Colfontaine woods on its southern side.",
      "The coal mines shaped the streetscape: **rows of workers' houses**, churches and schools from the same period, and a slag heap here and there. Vincent van Gogh lived in Wasmes for a while as an evangelist among the miners. From Aartselaar we drive there in just over an hour.",
    ],
    bouw: {
      kop: "Narrow houses on a slope, with a cellar half in the ground",
      alineas: [
        "Many homes in Pâturages and Wasmes stand **against a slope**, with the rear wall or the cellar partly in the ground. That side takes on moisture from outside and dries more slowly after building work than the front wall. So we place the dehumidifier on the wet side, with a fan against the wall.",
        "If a workers' house is **fully stripped and replastered**, a lot of water ends up in a small volume in a short time. In a narrow house, one compact dehumidifier per floor, with the doors closed, works better than one large unit in the living room. The technician adapts the set-up to the layout of your home.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**For the upper floors of a narrow workers' house**: 50 litres a day at a consumption of 0.75 kW, and compact enough for a narrow door and a steep staircase." },
      { key: "ttk350", waarom: "For the ground floor after a full renovation: 70 litres a day for rooms up to 400 m³, with the drain hose running to a floor drain." },
      { key: "ttv4500", waarom: "**For the wall on the slope side**, which stays wet longest: the 4,500 m³ an hour fan keeps the air moving along the surface." },
      { key: "teddh20", waarom: "For a cellar that sits half in the ground and stays cold in winter. This 20 kW site heater needs a 400 V (three-phase) connection." },
    ],
    levering: {
      kop: "Delivering in Colfontaine: up to the hills west of Mons",
      alinea:
        "Via the E19 and the Mons exit we drive into the Borinage, a trip of just over an hour. You choose a delivery date when you book, and we agree the delivery time with you. **Is your home in a narrow or steep street?** Let us know, so the technician knows where he can unload.",
    },
    afhalen: {
      kop: "Collecting it yourself: a long drive for one unit",
      alinea:
        "Aartselaar is **just over an hour's drive** from Colfontaine. Collecting and returning therefore means two round trips. A dehumidifier also has to be transported upright. If you need more than one unit, let us deliver.",
    },
    buren: ["boussu", "quaregnon", "frameries", "dour"],
    faq: [
      {
        q: "Do you deliver in Pâturages, Wasmes and Warquignies?",
        a: "Yes, all three districts of Colfontaine fall within our delivery area. When you book, mention whether your street is steep or narrow, so the technician knows where he can stop to unload.",
      },
      {
        q: "Why does the rear wall stay wet longer than the rest of the house?",
        a: "In a house against a slope, the rear wall or the cellar wall is partly against the ground. Moisture from outside comes on top of the construction moisture from the renovation. We add a fan and measure that wall separately, so you can see how it dries.",
      },
      {
        q: "Is one large dehumidifier better than two small ones in a narrow house?",
        a: "In a narrow house with several floors, usually not. Dry air does not climb the stairs by itself. One compact dehumidifier per floor, with the doors closed, therefore works better. With an open-plan ground floor, one larger unit is sometimes enough.",
      },
      {
        q: "Do I also need a heater in a cold cellar?",
        a: "Yes, if the cellar stays below about 15 °C in winter. A condensation dehumidifier needs a temperature above 15 °C to work well, and cold walls release their moisture slowly. A site heater brings the room up to temperature.",
      },
    ],
    realisaties: [],
  },
  dour: {
    slug: "dour",
    title: "Dehumidifier hire in Dour, by the French border | Vernast",
    description:
      "Dehumidifier hire in Dour, Élouges, Wihéries or Blaugies: units for miners' houses and farmhouses by the French border, installed with a moisture reading.",
    h1: "Construction dehumidifier hire in Dour",
    kicker: "Hainaut · mining country against the French border",
    rit: { afstand: "about 115 km", tijd: "just over an hour" },
    intro: [
      "Dour lies in **the south-west of the Borinage**, against the French border. Élouges, Wihéries and Blaugies also belong to the municipality. The north is old mining country with dense housing, the south is more rural.",
      "Around the centre and in Élouges you see **rows of workers' houses and slag heaps**. In Blaugies and Wihéries there are more farmhouses and detached houses. From Aartselaar we reach Dour in just over an hour, and we install dehumidifiers there in small terraced houses and in large farmhouses.",
    ],
    bouw: {
      kop: "From a terraced house in Élouges to a farmhouse in Blaugies",
      alineas: [
        "In **the old mining districts** the houses are narrow, with thick brick walls and no cavity. New plasterwork and a new screed make them very wet for a while. Because the side walls adjoin the neighbours, the moisture can only escape through the front and rear walls. One dehumidifier per room works fastest there.",
        "**A farmhouse or a converted stable** has large, high rooms and often walls of mixed masonry. There, the volume in cubic metres is what counts, and then one large unit with a fan is more efficient than three small ones. Give us the dimensions of the room when you book, and we put the package together accordingly.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a farmhouse or a converted barn** with a large, open volume: 110 litres a day for rooms up to 600 m³." },
      { key: "ttk350", waarom: "For a renovated terraced house in the old mining districts: 70 litres a day, enough for a ground floor with a fresh screed." },
      { key: "radiaal2250", waarom: "**For a new screed in a long room**: the radial fan blows low across the floor, so the corners dry evenly too." },
      { key: "teddh30", waarom: "For an unheated barn or stable in winter: 30 kW on 400 V brings a large volume up to temperature, so the dehumidifier extracts moisture from the air again." },
    ],
    levering: {
      kop: "Delivering in Dour, close to the French border",
      alinea:
        "Dour lies beyond Mons and Boussu, just over an hour's drive from our warehouse. You choose a delivery date when you book, and we agree the time with you in advance. **Does your farmhouse have a drive or an inner courtyard?** Let us know where the van can turn.",
    },
    afhalen: {
      kop: "Collecting from Dour: allow half a day",
      alinea:
        "The collection point in Aartselaar is **just over an hour's drive** away. With the round trip and the loading, you lose half a day, and you do that twice: when collecting and when returning. For a farmhouse or a whole house, delivery is therefore the better choice.",
    },
    buren: ["boussu", "colfontaine", "quievrain", "honnelles"],
    faq: [
      {
        q: "How do I dry a large stable that is being converted into a home?",
        a: "With a dehumidifier sized for the volume, a fan across the floor and a site heater in winter. A high, open space cools down quickly, and then a condensation dehumidifier dries slowly. The calculator works in cubic metres; the technician fine-tunes on site.",
      },
      {
        q: "Do you drive all the way to Blaugies and Wihéries, near the border?",
        a: "Yes. Blaugies, Wihéries and Élouges are districts of Dour and fall within our delivery area. If your home is on a country lane, include brief directions when you book.",
      },
      {
        q: "Why does a terraced house between two neighbours dry so slowly?",
        a: "Because the moisture can only escape through the front and rear walls and the indoor air. The side walls adjoin the neighbours and release nothing to the outside. A dehumidifier in each wet room, with the doors closed, extracts the water from the air before it moves to the other rooms.",
      },
      {
        q: "When does the technician collect the units again?",
        a: "On a date we fix together when you book. At collection the technician takes another reading, so you know how far the drying has got. If the floor or wall is not dry enough yet, you can extend the hire.",
      },
    ],
    realisaties: [],
  },
  frameries: {
    slug: "frameries",
    title: "Construction dehumidifier hire in Frameries | Vernast",
    description:
      "Dehumidifier hire in Frameries and La Bouverie, for renovating workers' houses from the Borinage mining era, with cellars and damp walls. Delivered.",
    h1: "Construction dehumidifier hire in Frameries",
    kicker: "Hainaut · the Borinage, south-west of Mons",
    rit: { afstand: "about 105 km", tijd: "just over an hour" },
    intro: [
      "Frameries lies south-west of Mons, **in the Borinage**, the former coalfield. The municipality also includes **La Bouverie, Eugies, Noirchain and Sars-la-Bruyère**. The mining past is visible everywhere: slag heaps, old mine sites and long rows of houses built for the miners.",
      "The old Crachet-Picquery mine site is now home to the Sparkoh! science centre. The workers' districts around it are **densely built and small in scale**, and are being renovated house by house. From Aartselaar we get there in **just over an hour**.",
    ],
    bouw: {
      kop: "Workers' houses in the Borinage",
      alineas: [
        "**A workers' house from the mining era** is narrow with a small floor plan, often with a rear extension added later. Brick walls without a damp-proof course were the rule back then. So in a renovation with new plaster and a new floor, the construction moisture comes on top of **moisture that has been in the wall for years**.",
        "During installation the technician measures how wet **the wall and floor** are and where the moisture comes from. In a small home, one compact dehumidifier per floor is often enough, with the doors closed. In the rear extension, where the air is still, a fan helps.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**Sized for a small workers' house**: 50 litres a day for rooms up to about 250 m³, compact and with a consumption of 0.75 kW." },
      { key: "ttk350", waarom: "For a full renovation of the ground floor and upper floor at once: 70 litres a day, up to about 400 m³." },
      { key: "ttv4500", waarom: "For **the rear extension**, where the air is still: it carries the dry air from the dehumidifier right up to the wet wall." },
      { key: "revolution", waarom: "For a cool cellar: a desiccant dehumidifier keeps removing moisture there where a condensation dehumidifier slows down." },
    ],
    levering: {
      kop: "Delivering in Frameries: past Mons, right into the residential streets",
      alinea:
        "We drive just over an hour, **via the E19 and past Mons**. You choose a delivery date when you book, and we agree the time with you. In a street of terraced houses it helps if you **keep a space free in front of the door**. The technician brings the units in, sets up the drain and takes a reading before he leaves.",
    },
    afhalen: {
      kop: "Collecting is possible, for one small unit",
      alinea:
        "Aartselaar is just over an hour's drive from Frameries. For one compact dehumidifier that you set up in a room yourself, collecting is an option. Transport the unit **upright**, so no water runs out of the tank. For a whole house, let us deliver.",
    },
    buren: ["bergen", "quaregnon", "colfontaine", "quevy"],
    faq: [
      {
        q: "Does a construction dehumidifier fit in a small workers' house?",
        a: "Yes. The compact dehumidifier takes up little space and goes through a narrow door. For a steep staircase, two people are handy. In a small home the technician usually puts one unit on each floor, so there is still room left to work.",
      },
      {
        q: "Does the moisture in my wall come from the works or from the ground?",
        a: "That is the first question the technician answers. Construction moisture is spread through new plaster and flooring and decreases. Rising damp sits mainly at the bottom of the wall and stays. The reading during installation shows which of the two dominates.",
      },
      {
        q: "How much electricity does a dehumidifier use in a small home?",
        a: "The compact condensation dehumidifier has a power rating of 0.75 kW. What you end up using depends on how long it runs and how damp the room is. It works on a 230 V socket, with no separate connection.",
      },
      {
        q: "What do I do with the condensate?",
        a: "The dehumidifier collects it in a tank that you empty. You can also hire a condensate pump that sends the water to a drain. If you do not come by the house every day, that pump is advisable, because the dehumidifier stops when the tank is full.",
      },
    ],
    realisaties: [],
  },
  hensies: {
    slug: "hensies",
    title: "Construction dehumidifier hire in Hensies | Vernast",
    description:
      "Dehumidifier hire in Hensies, Thulin, Hainin or Montrœul-sur-Haine: units for homes on the low, wet ground of the Haine valley. Delivered and installed.",
    h1: "Construction dehumidifier hire in Hensies",
    kicker: "Hainaut · the Haine valley at the French border",
    rit: { afstand: "about 110 km", tijd: "just over an hour" },
    intro: [
      "Hensies lies **in the valley of the Haine**, close to the French border. Besides Hensies itself, Thulin, Hainin and Montrœul-sur-Haine belong to the municipality.",
      "The landscape is **low and flat**, with meadows, ditches and wet patches along the river. In the villages, old workers' houses from the mining era stand next to detached houses on larger plots. Hensies is just over an hour's drive from our warehouse in Aartselaar.",
    ],
    bouw: {
      kop: "Low ground, high groundwater and old floors",
      alineas: [
        "On **the wet ground along the Haine**, the groundwater sits just below the surface. An old home without a damp-proof course, or with a floor laid directly on the ground, feels that in the bottom metre of the walls. In a renovation the technician first measures whether the moisture is construction moisture or comes from the ground.",
        "If **a new floor with insulation and screed** goes in, that floor holds a lot of water for a while. It has to be dry before parquet or tiles go on top. In a cold, low room a site heater keeps the dehumidifier at temperature, because a condensation dehumidifier needs more than 15 °C.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a new screed on the ground floor**: 70 litres a day for rooms up to 400 m³, with the drain hose running to a floor drain or sink." },
      { key: "radiaal2250", waarom: "Blows dry air directly across the floor. In the Haine valley, that is where most of the moisture sits, and where it stays longest." },
      { key: "teddh20", waarom: "**For a cold room without heating**: 20 kW on 400 V brings the room above 15 °C, the temperature a condensation dehumidifier needs." },
      { key: "revolution", waarom: "Is there water under a floating floor or behind a stud wall? This desiccant dehumidifier blows dry air into the cavity through hoses." },
    ],
    levering: {
      kop: "Delivering in Hensies, right up to the French border",
      alinea:
        "We drive **via the E19 past Mons** and then further west, a trip of just over an hour. When you book you choose a delivery date; we agree the delivery time with you. If your home is outside the village centre, include brief directions.",
    },
    afhalen: {
      kop: "Collecting is possible, but it is quite a drive",
      alinea:
        "From Hensies, Aartselaar is **just over an hour's** drive. If you need to be in the Antwerp area anyway, you can take a small unit yourself. For a whole floor or several rooms, delivery saves you two long trips.",
    },
    buren: ["quievrain", "boussu", "saint-ghislain", "bernissart"],
    faq: [
      {
        q: "Will a construction dehumidifier solve the damp at the bottom of my walls in Thulin?",
        a: "Only if it is construction moisture or water from a leak. If the moisture comes from the ground because the wall has no damp-proof course, it will come back. During installation the technician takes readings at different heights, so you know what kind of moisture you are dealing with.",
      },
      {
        q: "How long does a new screed need to dry before the parquet layer comes?",
        a: "That depends on the type and thickness of the screed, and the parquet layer decides which residual moisture value he accepts. With a dehumidifier and a fan it goes faster than without. We take a reading at collection, so you have a value to pass on.",
      },
      {
        q: "Does a dehumidifier work in an unheated house in winter?",
        a: "Less well. Below about 15 °C a condensation dehumidifier extracts much less water from the air. In an empty, cold home we therefore add an electric site heater. It does need a 400 V connection.",
      },
      {
        q: "Can I move the units to another room myself?",
        a: "You can, but keep them upright, let the drain hose run freely and close the doors of the room they are in. If in doubt, call us: the technician deliberately placed them by the wettest parts.",
      },
    ],
    realisaties: [],
  },
  honnelles: {
    slug: "honnelles",
    title: "Construction dehumidifier hire in Honnelles | Vernast",
    description:
      "Dehumidifier hire in Honnelles, Roisin, Angre or Onnezies: units for old stone houses and farmhouses in the Honnelle valleys, delivered and installed.",
    h1: "Construction dehumidifier hire in Honnelles",
    kicker: "Hainaut · villages in the Honnelle valleys",
    rit: { afstand: "about 120 km", tijd: "just over an hour" },
    intro: [
      "Honnelles is **a rural municipality** against the French border, with villages such as Roisin, Angre, Onnezies, Montignies-sur-Roc and Fayt-le-Franc. The name comes from the Grande and the Petite Honnelle, two streams that run through wooded valleys.",
      "A little further north lie the mining districts of the Borinage. Honnelles itself consists of **farmhouses, village centres and detached houses**, often with walls of natural stone or old brick. We deliver there from Aartselaar, a drive of just over an hour.",
    ],
    bouw: {
      kop: "Old farmhouses and stone houses along the streams",
      alineas: [
        "**A farmhouse wall of mixed masonry** soaks up a lot of water during a renovation and releases it unevenly. Natural stone, brick and lime pointing each dry at their own pace. We work there with one dehumidifier per room and a fan against the wall, and we tell you in advance that it takes longer than with a modern wall.",
        "**On the valley floor, close to the streams**, cellars and ground floors lie lower and cooler. A cellar that stays cool all year dries slowly with a condensation dehumidifier. A desiccant dehumidifier, or an added site heater, keeps the drying going at low temperatures.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a large farmhouse or a converted barn**: 110 litres a day for high, open rooms up to 600 m³." },
      { key: "ttv4500", waarom: "For a thick stone wall that dries slowly: the fan keeps the air moving along the wall, so it dries out more evenly." },
      { key: "revolution", waarom: "**For a cool cellar on the valley floor**: a desiccant dehumidifier keeps working at low temperatures, where a condensation dehumidifier performs far less well." },
      { key: "ttk350", waarom: "For a village home after a renovation: 70 litres a day, enough for a ground floor with new plasterwork or a new screed." },
    ],
    levering: {
      kop: "Delivering in Honnelles: right into the smallest villages",
      alinea:
        "After the E19 to beyond Mons, the route continues **along country roads to the south**, just over an hour's drive in total. You choose a delivery date when you book, and we fix the delivery time together. If your farmhouse is on a narrow road or behind an inner courtyard, tell us where the van can stop.",
    },
    afhalen: {
      kop: "Collecting from Honnelles: just over an hour each way",
      alinea:
        "Aartselaar is **just over an hour's drive** away, and you make that trip there and back, both when collecting and when returning. For a farmhouse with several rooms, delivery with installation is the simplest choice.",
    },
    buren: ["quievrain", "dour", "quevy", "colfontaine"],
    faq: [
      {
        q: "Why does a stone farmhouse wall dry so unevenly?",
        a: "Because natural stone, old brick and lime mortar each absorb and release moisture differently. The joints often stay wet longer than the stones. A fan against the wall and readings in several places show how far the drying has got.",
      },
      {
        q: "Do you deliver in all the villages of Honnelles, including Fayt-le-Franc and Montignies-sur-Roc?",
        a: "Yes, all the villages in the municipality fall within our delivery area. If your address is outside the centre or on a country lane, add a short description when you book, so the technician finds the right access straight away.",
      },
      {
        q: "Can I use a construction dehumidifier on a wall with lime plaster?",
        a: "Yes, but in moderation. Lime plaster needs time to cure and must not dry out too quickly. We adjust the set-up to that and advise against heating the room strongly. Mention when you book that it is lime.",
      },
      {
        q: "Does a construction dehumidifier also work in a farmhouse without heating?",
        a: "Yes, but more slowly in winter. A condensation dehumidifier needs a temperature above 15 °C to work well. In a cold farmhouse we add a site heater, or choose a desiccant dehumidifier.",
      },
    ],
    realisaties: [],
  },
  jurbeke: {
    slug: "jurbeke",
    title: "Construction dehumidifier hire in Jurbise | Vernast",
    description:
      "Dehumidifier hire in Jurbise, for new builds on the estates and converted farmhouses in Herchies and Masnuy, just north of Mons. Delivered and installed.",
    h1: "Construction dehumidifier hire in Jurbise",
    kicker: "Hainaut · just north of Mons",
    rit: { afstand: "about 90 km", tijd: "about an hour" },
    intro: [
      "Jurbise, **Jurbeke** in Dutch, lies just north of Mons, along the E19. Besides Jurbise itself, **Erbaut, Erbisœul, Herchies, Masnuy-Saint-Jean and Masnuy-Saint-Pierre** belong to the municipality: villages among the fields, with a station on the railway line between Brussels and Mons.",
      "Many residents work in Mons or Brussels. So there is plenty of building and renovating, from new estates on the edge of the villages to **old farmhouses** being turned into homes. From Aartselaar we get there in **about an hour**.",
    ],
    bouw: {
      kop: "New builds on the estate, conversions in the farmhouse",
      alineas: [
        "In a **new build**, the moisture sits mainly in the screed and the plasterwork. If you want to lay floors or paint before the moving date, that water has to go first. The dehumidifiers work with **windows and outside doors closed**. At the start the technician measures the screed, so you know where you stand with the floor layer.",
        "A **farmhouse in Herchies or Masnuy** calls for a different approach. The walls are thick and rarely have a damp-proof course, a stable becomes a living room and sometimes a new floor is laid directly on the ground. **The moisture in those walls is older than the works.** The reading during installation shows whether a dehumidifier is enough or whether the wall first needs work.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a new build with fresh screed**: 70 litres a day, for rooms up to about 400 m³, with a drain hose to a floor drain or the shower." },
      { key: "radiaal2250", waarom: "Blows 2,250 m³ of air an hour low across **a new screed**, so the floor dries more evenly and not just the top layer." },
      { key: "ttk650", waarom: "For the converted stable or barn of a farmhouse: a large, open volume calls for a dehumidifier of 110 litres a day." },
      { key: "teddh30", waarom: "For a winter site in a farmhouse without heating. Below 15 °C a condensation dehumidifier loses efficiency; this 30 kW heater on three-phase power (400 V) warms the room up." },
    ],
    levering: {
      kop: "Delivering in Jurbise: right by the motorway",
      alinea:
        "The drive takes about an hour, almost entirely **on the E19**. You choose a delivery date when you book and we agree the time with you, as everywhere in Wallonia. If your plot on a new estate does not have a house number yet, give us **a description or a location pin**.",
    },
    afhalen: {
      kop: "Collecting: an hour, almost all motorway",
      alinea:
        "Because Jurbise lies right by the E19, the drive to Aartselaar is straightforward: about an hour, almost all on the motorway. If you are setting up one dehumidifier in a new build yourself, collecting is an option. For a farmhouse or a whole home, **you are better off having it delivered and installed**.",
    },
    buren: ["bergen", "lens", "zinnik", "brugelette"],
    faq: [
      {
        q: "When can the floor layer start after a new screed?",
        a: "That depends on the residual moisture the floor layer or the supplier of the floor covering allows, not on a fixed number of weeks. We measure the screed during installation. That gives you a figure to discuss with the floor layer.",
      },
      {
        q: "Can the windows be open while the construction dehumidifier runs?",
        a: "Preferably not. A condensation dehumidifier extracts the moisture from the air in the room. If the windows are open, it mainly dries outside air. Airing briefly in between is fine, but otherwise keep windows and outside doors closed while the unit is working.",
      },
      {
        q: "We are converting an old stable into a home. Where do we start?",
        a: "With a moisture reading. In an old stable, moisture often comes from the ground and the base of the wall, on top of the construction moisture from new plaster and flooring. During installation the technician tells you which part a dehumidifier can handle and which part needs a different approach.",
      },
      {
        q: "Can you deliver to a site without a house number?",
        a: "Yes. When you book, give us the street, the plot number or a location pin, and the phone number of someone on site. Then the technician does not have to search and can install and measure straight away.",
      },
    ],
    realisaties: [],
  },
  lens: {
    slug: "lens",
    title: "Construction dehumidifier hire in Lens, Hainaut | Vernast",
    description:
      "Dehumidifier hire in Lens, Hainaut: for farmhouses and village houses in Cambron-Saint-Vincent, Lombise and Bauffe, between Ath and Mons. Delivered.",
    h1: "Construction dehumidifier hire in Lens",
    kicker: "Hainaut · rural, between Ath and Mons",
    rit: { afstand: "about 95 km", tijd: "about an hour" },
    intro: [
      "Lens lies **between Ath and Mons**, in open, rolling farmland. The municipality consists of **Lens, Bauffe, Cambron-Saint-Vincent, Lombise and Montignies-lez-Lens**, five small villages with farmhouses, village houses along the main road and the odd new home.",
      "Anyone renovating here is often working on a farmhouse or a village house a century old or more. From our warehouse in Aartselaar we drive **about an hour** to Lens.",
    ],
    bouw: {
      kop: "Farmhouses and village houses in farming country",
      alineas: [
        "**A farmhouse in Lens** often has a house with thick brick walls and outbuildings that are now becoming a home or practice premises. A conversion like that brings **a new floor laid on the ground** and new plaster on old walls. You are then dealing with two kinds of moisture: the water from the works and the moisture that was already in the wall.",
        "A **village house on the street** is smaller and easier to dry. One dehumidifier per floor is often enough there. If you renovate in winter, in a house without heating, **we put a heater next to the dehumidifier**. In a cold room a condensation dehumidifier achieves only part of what it can.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a converted barn or stable**: a lot of volume under a high roof calls for 110 litres a day, for rooms up to about 600 m³." },
      { key: "ttk350", waarom: "**For a village house under renovation**: 70 litres a day, up to about 400 m³, with the drain running to a floor drain." },
      { key: "teddh30", waarom: "For a renovation in winter, in a farmhouse without working heating: this 30 kW heater on 400 V brings the room to a temperature at which a dehumidifier works well." },
      { key: "radiaal2250", waarom: "Across **a new floor laid on the ground** in a converted outbuilding: it blows directly along the screed." },
    ],
    levering: {
      kop: "Delivering in Lens: via the E19 and Jurbise",
      alinea:
        "We drive about an hour, **via the E19 and Jurbise**. You choose a delivery date when you book, and we fix the time by phone. A farmhouse on a narrow country lane is no problem, but **describe the access in advance**, so the technician knows where he can load and unload.",
    },
    afhalen: {
      kop: "Collecting: an hour, mostly motorway",
      alinea:
        "Aartselaar is about an hour's drive from Lens, most of it on the motorway. So collecting is an option for one unit that you set up yourself. For a farmhouse with thick walls, **let us deliver and measure**.",
    },
    buren: ["jurbeke", "brugelette", "zinnik"],
    faq: [
      {
        q: "Is this page about Lens in Hainaut or Lens in France?",
        a: "About the Belgian municipality of Lens between Ath and Mons, with Bauffe, Cambron-Saint-Vincent, Lombise and Montignies-lez-Lens. If you have a site in France, contact us before you book.",
      },
      {
        q: "We are turning a stable into a home. How long does the new floor need to dry?",
        a: "That depends on the thickness of the screed, the season and the ventilation. With dehumidifiers and a fan it goes noticeably faster than without. The technician measures the floor at the start, so you can agree with the floor layer when he can begin.",
      },
      {
        q: "Is there any point in putting a dehumidifier in a cold farmhouse?",
        a: "Only with heat added. A condensation dehumidifier needs a room above 15 °C to work well. In an unheated farmhouse we put an electric heater next to it in winter, and then the dehumidifier does extract the moisture from the air.",
      },
      {
        q: "Can I hire one dehumidifier for a single room in a village house?",
        a: "Yes. For a room or a bathroom, a compact dehumidifier is enough. You can have it delivered or collect it yourself in Aartselaar. If you are unsure about the size, fill in the calculator on the site or give the dimensions when you book.",
      },
    ],
    realisaties: [],
  },
  quaregnon: {
    slug: "quaregnon",
    title: "Construction dehumidifier hire in Quaregnon | Vernast",
    description:
      "Dehumidifier hire in Quaregnon and Wasmuël, for renovating terraced houses from the Borinage mining era, with a moisture reading during installation.",
    h1: "Construction dehumidifier hire in Quaregnon",
    kicker: "Hainaut · the Borinage, on the Haine",
    rit: { afstand: "about 105 km", tijd: "just over an hour" },
    intro: [
      "Quaregnon, together with Wasmuël, lies in the heart of **the Borinage**, between Mons and Saint-Ghislain. The municipality grew with the coal mines. In Belgian history it is known for **the Charter of Quaregnon** of 1894, the programme of the Belgian Workers' Party.",
      "Quaregnon is **densely built**: street after street of terraced houses, small shop buildings and here and there a town house. Many of those houses are old and are now being renovated. From Aartselaar we drive there in **just over an hour**.",
    ],
    bouw: {
      kop: "Terraced houses in the Haine valley",
      alineas: [
        "The north of Quaregnon slopes down to **the valley of the Haine**. If an old house there has a damp cellar or ground floor, the question is where that moisture comes from. **The technician measures whether it decreases after the works** or keeps coming in from outside.",
        "If a **terraced house is fully stripped**, with new pipes, plaster and screed, a lot of water is released in one go. We then work **per drying zone**: one dehumidifier per floor with the doors closed, and a fan across the new floor. That way the next team can carry on sooner.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a terraced house being fully renovated**: 70 litres a day, up to about 400 m³, with a drain hose to a floor drain." },
      { key: "radiaal2250", waarom: "For **a new screed** in the long, narrow floor plan of a terraced house: it blows directly and low across the floor." },
      { key: "revolution", waarom: "For a cold cellar, where a condensation dehumidifier slows down: the desiccant dehumidifier keeps extracting moisture from the air there." },
      { key: "ttk170", waarom: "For a room, a bathroom or the upper floor of a narrow house: 50 litres a day, compact, up to about 250 m³." },
    ],
    levering: {
      kop: "Delivering in Quaregnon: even in a busy street",
      alinea:
        "We drive just over an hour, **on the E19 as far as Mons**. You choose a delivery date when you book, and because we deliver by appointment in Wallonia, we fix the time together. In a busy street of terraced houses the van stops briefly in front of the door, so **keep a space free** if you can. The technician installs the units, sets up the drain and measures the moisture in the wall and floor.",
    },
    afhalen: {
      kop: "Collecting: two round trips",
      alinea:
        "Aartselaar is just over an hour's drive from Quaregnon. If you collect, you drive that distance four times: there and back to fetch the unit, and again to return it. For one small dehumidifier that is possible, but **for a whole terraced house we deliver**, with the reading that determines how many units are needed.",
    },
    buren: ["bergen", "saint-ghislain", "frameries", "colfontaine"],
    faq: [
      {
        q: "My terraced house is being fully stripped. How many dehumidifiers do I need?",
        a: "Usually one per floor, with the doors closed, and a fan where a new screed has been laid. In a small home, one larger dehumidifier on the ground floor is sometimes enough. The technician calculates the volume during installation and matches the number of units to it.",
      },
      {
        q: "Why does my cellar stay damp after the works?",
        a: "Because that moisture may not come from the works. An old wall without a damp-proof course can absorb water from the ground. A dehumidifier keeps the air dry, but it does not stop that water. A reading shows whether the moisture decreases or stays.",
      },
      {
        q: "Can the dehumidifier keep running when nobody is home?",
        a: "Yes, that is what it is made for. When the tank is full, it switches itself off. If you want it to keep working day and night without anyone coming by, hire a condensate pump that carries the water to a drain.",
      },
      {
        q: "Can I extend the hire period if the screed dries more slowly?",
        a: "Yes. Let us know before the end of the hire period, and the units stay in place and the hire continues. Have the screed measured again first, so you know whether an extra week is needed.",
      },
    ],
    realisaties: [],
  },
  quievrain: {
    slug: "quievrain",
    title: "Construction dehumidifier hire in Quiévrain | Vernast",
    description:
      "Dehumidifier hire in Quiévrain, Baisieux or Audregnies: for terraced houses and shop buildings in the centre and farmhouses beyond. Delivered and installed.",
    h1: "Construction dehumidifier hire in Quiévrain",
    kicker: "Hainaut · border town on the road to Valenciennes",
    rit: { afstand: "about 115 km", tijd: "just over an hour" },
    intro: [
      "Quiévrain is **a border municipality** in the west of Hainaut, with Baisieux and Audregnies as its districts. Across the border lies the French town of Quiévrechain; the buildings of the two almost merge.",
      "The centre is **a small town with terraced houses and shop buildings**. Towards Baisieux and Audregnies it becomes rural, with farmhouses and scattered homes. From our warehouse in Aartselaar to Quiévrain is just over an hour's drive.",
    ],
    bouw: {
      kop: "Terraced houses with a shop downstairs and farmhouses on the edge",
      alineas: [
        "In the centre there are many **buildings with a shop on the ground floor** and a home above it. In a renovation, one floor is often tackled at a time while the rest stays in use. A compact dehumidifier on the floor where the work is going on, with the door closed, stops the moisture from spreading through the whole building.",
        "**Outside the centre, in Baisieux and Audregnies**, it is more often old farmhouses and detached homes. The rooms there are larger and the walls thicker, and then a large unit with a fan pays off. If you are converting a stable or barn into a home, it is best to allow for a longer drying period.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**For the flat above a shop**: compact, 50 litres a day and 0.75 kW, so the shop downstairs can stay open." },
      { key: "ttk350", waarom: "For a ground floor being completely renewed: 70 litres a day for rooms up to 400 m³." },
      { key: "ttk650", waarom: "**For a farmhouse in Baisieux or Audregnies** with large, high rooms: 110 litres a day for volumes up to 600 m³." },
      { key: "ttv4500", waarom: "In a deep terraced house, this 4,500 m³ an hour fan pushes the air from front to back, where it would otherwise stand still." },
    ],
    levering: {
      kop: "Delivering in Quiévrain: right up to the French border",
      alinea:
        "We drive **on the E19 via Mons** and on westwards to the border, just over an hour in all. When you book you choose a delivery date, and we fix the time together. For a shop building in the centre we look for a moment when we can load in front of the door.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar: weigh up the drive",
      alinea:
        "From Quiévrain to our collection point is **just over an hour's drive**. For one dehumidifier in the boot that can work, if you combine the trip with something else. For a farmhouse or a full renovation, you are better off having the units delivered, installed and collected again.",
    },
    buren: ["hensies", "boussu", "dour", "honnelles"],
    faq: [
      {
        q: "Can I run a dehumidifier upstairs while the shop downstairs is open?",
        a: "Yes. A compact dehumidifier works on a standard socket and stands on the floor where the work is going on. Keep the door of that room closed, and the moisture stays upstairs and the shop barely notices.",
      },
      {
        q: "Do you also deliver in Baisieux and Audregnies?",
        a: "Yes, both districts of Quiévrain fall within our delivery area. For a farmhouse outside the centre, it is best to mention where the van can stop or turn, so the unloading goes smoothly.",
      },
      {
        q: "Do you also deliver on the French side, in Quiévrechain?",
        a: "We deliver in Belgium and in the south of the Netherlands. For a site just across the border in France, it is best to contact us in advance, and we will look together at whether delivery is possible.",
      },
      {
        q: "How many units do I need for a converted barn?",
        a: "That depends on the volume and the material. A high, open barn usually calls for a large unit and a fan, supplemented by a site heater in winter. Work out the volume with the calculator; the technician adjusts the set-up on site.",
      },
    ],
    realisaties: [],
  },
  quevy: {
    slug: "quevy",
    title: "Dehumidifier hire in Quévy, south of Mons | Vernast",
    description:
      "Dehumidifier hire in Quévy: for farmhouses and village houses in Givry, Blaregnies and Quévy-le-Grand, south of Mons by the French border. Delivered.",
    h1: "Construction dehumidifier hire in Quévy",
    kicker: "Hainaut · rural, against the French border",
    rit: { afstand: "about 115 km", tijd: "just over an hour" },
    intro: [
      "Quévy lies **south of Mons, against the French border**. The municipality has ten villages, including **Givry, Blaregnies, Genly, Havay, Quévy-le-Grand and Quévy-le-Petit**. Between them lie fields and meadows, and the motorway to Paris runs through the middle.",
      "There is no central town. Most people live in **a farmhouse, an old village house of natural stone or brick** or a more recent home on the edge of a village. From Aartselaar we drive **just over an hour** to Quévy.",
    ],
    bouw: {
      kop: "Farmhouses and village houses in the Hainaut countryside",
      alineas: [
        "**A farmhouse in Quévy** has thick walls, often without a damp-proof course, and a living area that has been extended into the stable or barn over the years. In a renovation, old and new come together: a new floor wet from the screed, next to an old wall that absorbs moisture from the ground. **The technician measures both** and tells you what a dehumidifier can solve.",
        "In the countryside, renovation often happens **in winter, in a house without heating**. Then it is too cold for a condensation dehumidifier. Add a heater and the temperature rises and the room does dry. For a large, open barn we choose a dehumidifier with more capacity.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a farmhouse or barn with a large open volume**: 110 litres a day, for rooms up to about 600 m³." },
      { key: "teddh30", waarom: "**For a winter site in an unheated village house**: 30 kW on three-phase power (400 V). Without heat, a condensation dehumidifier loses efficiency." },
      { key: "ttk350", waarom: "For a medium-sized home or a new build on the edge of a village: 70 litres a day, up to about 400 m³." },
      { key: "ttv4500", waarom: "Along a thick wall of stone and brick, it refreshes the air at the surface, so that wall dries more evenly." },
    ],
    levering: {
      kop: "Delivering in Quévy: beyond Mons, right into the farmyard",
      alinea:
        "We drive just over an hour, **on the E19 to beyond Mons**. You choose a delivery date when you book; because we deliver by appointment in Wallonia, we call to fix the time. If the farmhouse is on a narrow country lane or behind a gate, **describe the access**. That way the technician knows whether he can drive into the farmyard.",
    },
    afhalen: {
      kop: "Collecting: twice just over an hour each way",
      alinea:
        "Aartselaar is just over an hour's drive from Quévy. Collecting and returning therefore costs you two round trips, and that rarely pays off. For a farmhouse or a renovation **we deliver**, and the technician decides on site how many units are needed.",
    },
    buren: ["bergen", "frameries", "estinnes", "honnelles"],
    faq: [
      {
        q: "Does a construction dehumidifier work in an unheated farmhouse in winter?",
        a: "Less well. Below 15 °C a condensation dehumidifier loses a large part of its efficiency. With an electric heater added, the room comes up to temperature, and then the dehumidifier extracts enough moisture from the air again.",
      },
      {
        q: "Does a farmhouse in the countryside have enough power for several dehumidifiers?",
        a: "Usually, but that depends on the installation. A dehumidifier draws 0.75 to 1.4 kW, a 20 or 30 kW site heater needs three-phase power at 400 V. Spread the dehumidifiers over different circuits and mention when you book whether you are working from a site distribution board.",
      },
      {
        q: "Can you drive right into the farmyard?",
        a: "Usually, with a van. If the farmhouse is on an unpaved road or behind a low gate, mention it when you book. The technician then brings the units the last stretch to their place with a sack truck.",
      },
      {
        q: "How long does an old wall need to dry after a renovation?",
        a: "There is no fixed period. A thick wall of stone and brick releases its moisture slowly and unevenly, so measure in between instead of guessing. If the wall draws up moisture from the ground, it will not dry completely without work at the base of the wall.",
      },
    ],
    realisaties: [],
  },
  "saint-ghislain": {
    slug: "saint-ghislain",
    title: "Dehumidifier hire in Saint-Ghislain and Baudour | Vernast",
    description:
      "Dehumidifier hire in Saint-Ghislain, Baudour and Tertre: for renovations and water damage in the Haine valley and along the canal. Delivered and installed.",
    h1: "Construction dehumidifier hire in Saint-Ghislain",
    kicker: "Hainaut · the Haine valley and the canal",
    rit: { afstand: "about 110 km", tijd: "just over an hour" },
    intro: [
      "Saint-Ghislain lies **in the valley of the Haine**, west of Mons. The river and the Nimy-Blaton-Péronnes canal run through the municipality, and the station is on the railway line to Tournai. The municipality includes **Baudour, Hautrage, Tertre, Sirault, Villerot and Neufmaison**, among others.",
      "The south belongs to the Borinage, with residential districts from the mining era. The north, around Baudour and Sirault, is greener and more wooded. In between lies the flat valley, with industry along the canal. From Aartselaar the drive takes **just over an hour**.",
    ],
    bouw: {
      kop: "A flat valley and wet cellars",
      alineas: [
        "A home in the valley sometimes has **a damp cellar or a cold, wet floor**. After a renovation you want to know which moisture comes from the works and which keeps coming in from outside. **The technician measures that during installation**, so you know whether drying is enough.",
        "After **water damage** or a flooded cellar, it is a different job. First the standing water has to go, then we dry. Under **a floating floor or behind a stud wall**, a desiccant dehumidifier blows dry air into the cavity through hoses. That way not everything has to be ripped out.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**After water in a cellar or under a floor**: the desiccant dehumidifier blows into the cavity through hoses and keeps working in a cold room too." },
      { key: "ttk350", waarom: "**For a home under renovation** in Saint-Ghislain or Tertre: 70 litres a day, up to about 400 m³." },
      { key: "radiaal2250", waarom: "Across a wet floor after water damage or across a new screed: this radial fan blows low and directly along the surface." },
      { key: "ttk650", waarom: "For a large home in the green surroundings of Baudour or an open space with a lot of volume: 110 litres a day, up to about 600 m³." },
    ],
    levering: {
      kop: "Delivering in Saint-Ghislain: beyond Mons, towards Tournai",
      alinea:
        "The drive takes just over an hour, **on the E19 to beyond Mons** towards Tournai. You choose a delivery date when you book; we agree the time, because in Wallonia we deliver by appointment. After water damage, it is best to tell us **how large the wet area is**, so the technician brings the right units and hoses.",
    },
    afhalen: {
      kop: "Collecting: just over an hour's drive each way",
      alinea:
        "Aartselaar is just over an hour's drive from Saint-Ghislain. After water damage we advise against collecting: readings have to be taken, and the set-up depends on **where the water is**. For one small dehumidifier in an ordinary room, it is fine.",
    },
    buren: ["bergen", "quaregnon", "boussu", "hensies", "beloeil"],
    faq: [
      {
        q: "Our cellar flooded. Can a dehumidifier sort that out?",
        a: "A dehumidifier removes the moisture left in the wall and floor after pumping out. It does not stop water that keeps coming in. During installation the technician measures how wet the walls are and tells you whether the cellar can dry or first needs work.",
      },
      {
        q: "Does our floating floor have to come out after water damage?",
        a: "Not always. With a desiccant dehumidifier and hoses we blow dry air into the cavity under the floor. Whether that is enough depends on how long the water stood there and on the material. After the reading you know whether the floor can stay.",
      },
      {
        q: "How do I know when the walls are dry?",
        a: "By measuring, not by touch. A wall that feels dry at the surface can still be wet deeper down. We take a reading at the start, so you have a starting point. Your painter or insurer decides which value is needed for the finishing.",
      },
      {
        q: "Are the units noisy if we keep living in the house?",
        a: "You can hear them, especially the fans. We prefer not to put a unit in a bedroom at night. Together with you, we look for a set-up that does not slow the drying and still lets you live in the house.",
      },
    ],
    realisaties: [],
  },
  anderlues: {
    slug: "anderlues",
    title: "Construction dehumidifier hire in Anderlues | Vernast",
    description:
      "Dehumidifier hire in Anderlues, between Binche and Charleroi: terraced houses from the mining era and estates on the edge. Installed, set and measured.",
    h1: "Construction dehumidifier hire in Anderlues",
    kicker: "Hainaut · between Binche and Charleroi",
    rit: { afstand: "about 100 km", tijd: "just over an hour" },
    intro: [
      "Anderlues lies **between Binche and Charleroi**, on the southern edge of the old coalfield. The municipality had **its own coal mine**, and the workers' houses from that time still define the look of the centre.",
      "Beyond the centre, Anderlues gives way to **fields and woods** towards Thuin and Lobbes, with **newer residential estates** on the edge. We drive there from Aartselaar in just over an hour.",
    ],
    bouw: {
      kop: "Terraced houses from the mining era and new builds on the edge",
      alineas: [
        "**The terraced houses from the mining era** are small, with a cellar or a crawl space and walls without a damp-proof course. A renovation adds **new plasterwork, a new floor and often a new bathroom**, all in a few rooms. In such a small volume the humidity rises quickly, and then the plasterwork barely dries any more.",
        "**In the newer estates** it is about new builds or an extension, with a screed that has to be dry in time for the flooring. **An extension at the back** often has a different floor build-up from the existing house. That is why the technician takes readings in both places.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**For a terraced house from the mining era**: compact enough for a narrow staircase, with 50 litres a day for a few rooms with new plaster." },
      { key: "ttk350", waarom: "For a new build or an extension with screed: 70 litres a day, for volumes up to about 400 m³." },
      { key: "revolution", waarom: "If water stood in a crawl space or under a wooden floor: **the desiccant dehumidifier blows dry air through hoses** under the floor." },
      { key: "ttv4500", waarom: "Keeps the air circulating between the old house and the new extension, **so both parts dry equally fast**." },
    ],
    levering: {
      kop: "Delivering in Anderlues: via the E42",
      alinea:
        "We drive **via Brussels and the A54**, the last stretch **on the E42 between Charleroi and Mons**. That is just over an hour. You choose a delivery date when you book, after which we agree the time with you. The technician brings the units in, puts them in the right rooms and notes the moisture values.",
    },
    afhalen: {
      kop: "Collecting costs you half a day",
      alinea:
        "Aartselaar is **just over an hour's drive** from Anderlues. There and back, and later again to return it: that is a lot of time for one unit. Have it delivered, and the drying package is in the right place straight away.",
    },
    buren: ["binche", "morlanwelz", "chapelle-lez-herlaimont", "fontaine-l-eveque", "thuin"],
    faq: [
      {
        q: "How many units do I need for a small miner's house?",
        a: "Often one compact dehumidifier per floor is enough, with the doors closed. If a new floor has been laid, a fan is added. During installation the technician checks whether the volume and the amount of moisture justify that number.",
      },
      {
        q: "Can a dehumidifier dry a crawl space?",
        a: "An ordinary condensation dehumidifier can hardly reach it, but a desiccant dehumidifier blows dry air through hoses into the crawl space or under a wooden floor. That way the space under the floor dries without you having to take up the boards.",
      },
      {
        q: "Why does my extension dry more slowly than the rest of the house?",
        a: "Because a new floor slab and a new screed contain much more water than the existing house, and because an extension is often cooler. A fan that circulates the air between the two parts helps, and the technician measures both floors separately.",
      },
      {
        q: "Is the dehumidifier collected again afterwards?",
        a: "Yes. Collection is included in the drying package. On the agreed date the technician comes back, measures the moisture again and takes the units away. If the target has not been reached yet, he discusses with you how much longer they need to stay.",
      },
    ],
    realisaties: [],
  },
  beaumont: {
    slug: "beaumont",
    title: "Construction dehumidifier hire in Beaumont | Vernast",
    description:
      "Dehumidifier hire in Beaumont, the town of the Salamander Tower, and its villages: for stone houses and converted farmhouses. We deliver and install the units.",
    h1: "Construction dehumidifier hire in Beaumont",
    kicker: "Hainaut · gateway to the Botte du Hainaut",
    rit: { afstand: "about 115 km", tijd: "about an hour and a half" },
    intro: [
      "Beaumont is **a small hilltop town**. The **Salamander Tower** is what remains of the old ramparts. The town lies on the road from Charleroi to Chimay, on the edge of the Botte du Hainaut, the narrow southern part of the province.",
      "The municipality is large and rural, with villages such as Barbençon, Leugnies, Solre-Saint-Géry, Strée and Thirimont. Between fields and woods stand **farmhouses of natural stone**. From Aartselaar it is about an hour and a half's drive.",
    ],
    bouw: {
      kop: "Natural stone, thick walls and farmhouses becoming homes",
      alineas: [
        "The old houses and farmhouses around Beaumont are often built **of natural stone**. Thick walls like that soak up a lot of water during a renovation with lime plaster and release it slowly. If you want to finish, wait for **a moisture reading** and not for the calendar.",
        "A **barn or stable that becomes living space** usually gets a new floor and new interior walls. That brings a lot of water into a large, high volume. There, several units spread across the space work better than one large unit in the middle.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a converted barn with a high ridge**: 110 litres a day, for volumes up to about 600 m³." },
      { key: "ttv4500", waarom: "Blows the damp layer of air away from a thick stone wall, so the stone can release its water." },
      { key: "ttk350", waarom: "For a house in the town or one of the villages: 70 litres a day, one unit per floor." },
      { key: "teddh30", waarom: "Brings a cold farmhouse up to temperature in winter with 30 kW. Note: it runs on 400 V." },
    ],
    levering: {
      kop: "Delivering in Beaumont: an hour and a half's drive, one installation",
      alinea:
        "Beaumont is **about an hour and a half's drive** away, via Brussels and Charleroi to the south. You choose a delivery date when you book, and as everywhere in Wallonia we deliver by appointment. The technician sets up the units per zone and sets the humidistat for drying that may take a few weeks.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar: three hours' driving",
      alinea:
        "From Beaumont you are **around three hours** on the road there and back to our collection point. That is not worth it for any unit. Let us deliver and collect: you do not have to drive, and you get the moisture reading during installation as well.",
    },
    buren: ["thuin", "erquelinnes", "sivry-rance", "froidchapelle"],
    faq: [
      {
        q: "How long does a stone wall take to dry after a renovation?",
        a: "That depends on the thickness of the wall, the material and how much water got into it. A dehumidifier with a fan speeds it up. The technician takes a reading at the start, so later you can see how much moisture has already gone.",
      },
      {
        q: "Do you come as far as Beaumont and the Botte du Hainaut?",
        a: "Yes, although it is one of our longer trips. You choose a delivery date, we agree a time together, and the technician makes sure everything is set up right at the first installation.",
      },
      {
        q: "Can I hire a dehumidifier and a heater together?",
        a: "Yes, and in an unheated stone farmhouse in winter we recommend it. The heater brings the room above 15 °C, where the dehumidifier works well. Mention when you book whether there is three-phase power, because both heaters need 400 V.",
      },
      {
        q: "How many units do I need for a barn that is becoming a home?",
        a: "Usually two or three, spread across the volume, plus a fan across the new floor. One unit in the middle mainly dries its own surroundings. Give us the floor area and the ridge height, and we work out in advance how many units you need.",
      },
    ],
    realisaties: [],
  },
  seneffe: {
    slug: "seneffe",
    title: "Construction dehumidifier hire in Seneffe | Vernast",
    description:
      "Dehumidifier hire in Seneffe, Feluy, Arquennes or Familleureux, for blue-stone village homes and new builds. Delivered, set up per zone and collected.",
    h1: "Construction dehumidifier hire in Seneffe",
    kicker: "Hainaut · castle, canals and Feluy blue stone",
    rit: { afstand: "about 80 km", tijd: "about an hour" },
    intro: [
      "Seneffe is known for **its eighteenth-century castle** with its park and for its canals: the **Brussels-Charleroi Canal** and the Canal du Centre both run through the municipality. Near Feluy lies a large industrial zone.",
      "In **Feluy and Arquennes**, **blue stone** was quarried for a long time. You can see it in the houses, with sills, plinths and window surrounds in grey stone. Familleureux and Petit-Rœulx-lez-Nivelles are mainly villages with farmhouses and housing estates. From Aartselaar we drive there in about an hour.",
    ],
    bouw: {
      kop: "Blue-stone village homes and new builds on the plateau",
      alineas: [
        "An **old village home in Feluy or Arquennes** often has a base of blue stone under a brick façade. The blue stone absorbs little water, but **the joints and the wall behind it** do. That moisture cannot get out through the stone. After a renovation, a wall like that therefore dries mainly inwards, where the dehumidifier stands.",
        "Around Seneffe and Familleureux people are **building new homes and extensions**. There it is a matter of construction moisture from concrete, screed and plasterwork, which does not come back once dried. With one dehumidifier per floor and a fan across the screed, your floor layer can plan better, even in a wet autumn.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a new-build home**: 70 litres a day per floor, for rooms up to about 400 m³." },
      { key: "radiaal2250", waarom: "**Across a fresh screed** in a new home: this fan blows low across the floor, so the floor layer can start sooner." },
      { key: "ttv4500", waarom: "Against **an old wall behind a blue-stone plinth**: it keeps the air moving along the surface, so the moisture can escape inwards." },
      { key: "ttk650", waarom: "For **a farmhouse or a large open space** in the villages: 110 litres a day, for rooms up to about 600 m³." },
    ],
    levering: {
      kop: "Delivering in Seneffe: via the E19 to Nivelles, then westwards",
      alinea:
        "The drive takes about an hour, **via the ring road and the E19 towards Nivelles**. You choose a delivery date when you book; the delivery itself is by appointment. On a site in a new housing estate, the technician wants to know **who will let him in** and whether there is power. He installs the units, sets up the drain and measures the moisture in the screed at the start.",
    },
    afhalen: {
      kop: "Collecting is possible, but it is an hour's drive each way",
      alinea:
        "Our warehouse in Aartselaar is **about an hour** away. Collecting can work for a single unit. A new-build home with a screed dries better with well-distributed units, and the technician sets those up on site.",
    },
    buren: ["nijvel", "ecaussinnes", "manage", "pont-a-celles"],
    faq: [
      {
        q: "Why does the wall behind a blue-stone plinth dry so slowly?",
        a: "Blue stone is dense and lets little moisture through. The water in the joints and the masonry behind it cannot escape on the outside and has to dry inwards. A dehumidifier with a fan on the inside of the wall helps, but expect it to take longer than a brick wall.",
      },
      {
        q: "How quickly does a new screed dry with your units?",
        a: "That depends on the thickness, the type of screed and the temperature. With a dehumidifier and a fan it goes noticeably faster than without. We measure the moisture content at the start and can measure again later, so your floor layer decides on a figure.",
      },
      {
        q: "Does a construction dehumidifier need power on site?",
        a: "Yes, a 230 V socket is enough for the dehumidifiers and the fans. Only the electric site heaters need a 400 V connection. If you are working with a temporary site distribution board, check that it has enough capacity for all the units together.",
      },
      {
        q: "Do you also come to Feluy and Arquennes?",
        a: "Yes, we deliver in all the districts of Seneffe. In the old village centres the streets are sometimes narrow. Mention it when you book if there is little room to stop, and the technician will bring a sack truck.",
      },
    ],
    realisaties: [],
  },
  zinnik: {
    slug: "zinnik",
    title: "Construction dehumidifier hire in Soignies | Vernast",
    description:
      "Dehumidifier hire in Soignies or Casteau, for blue-stone town houses, farmhouses and rented homes. Delivered by appointment, installed and collected.",
    h1: "Construction dehumidifier hire in Soignies",
    kicker: "Hainaut · the city of blue stone",
    rit: { afstand: "about 80 km", tijd: "about an hour" },
    intro: [
      "Soignies, **Zinnik** in Dutch, is the city of **blue stone**. On the edge of town lie large quarries, and the stone is everywhere in the streetscape: in sills, plinths, façades and in the Romanesque Collegiate Church of Saint Vincent.",
      "Around the centre lie districts such as Naast, Horrues, Neufvilles and **Casteau**, home to NATO's military headquarters, **SHAPE**. As a result, many international families live there, often in a rented home. From Aartselaar we drive to Soignies in about an hour.",
    ],
    bouw: {
      kop: "Stone from its own quarry, and what that means for drying",
      alineas: [
        "In the centre of Soignies stand **town houses and terraced houses** with a lot of blue stone in the façade. The stone is dense, but **the brick wall behind it** soaks up a lot of water from plasterwork and mortar during a renovation. That moisture cannot get out through the blue stone and is released on the inside. There a dehumidifier and a fan remove it, with the doors closed.",
        "In the villages around the town stand **farmhouses and old homes** on wet loam soil, often without a damp-proof course. After a renovation, construction moisture mixes with moisture from the ground there. During installation the technician takes readings **at the bottom and higher up the wall**, so you know what will remain after drying.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a town house in the centre**: 70 litres a day per floor, for rooms up to about 400 m³." },
      { key: "ttv4500", waarom: "**Against a wall behind blue stone** it blows away the damp layer of air, so the dehumidifier can take up the moisture." },
      { key: "ttk170", waarom: "For **a flat or rented home** that needs to be habitable again quickly: compact, 50 litres a day, on a 230 V socket." },
      { key: "teddh30", waarom: "For **a stable or barn in Horrues or Naast** being turned into a home: it first brings the large, cold volume up to temperature (400 V)." },
    ],
    levering: {
      kop: "Delivering in Soignies: an hour via the ring road and the E19",
      alinea:
        "The drive takes about an hour, **via the ring road and the E19 towards Mons**. You choose a delivery date when you book, and we agree the time. The technician sets up the units per drying zone, lays the drain hose and **notes the moisture reading** you compare against later. In the narrow streets around the collegiate church, it helps if you tell us in advance where he can stop.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar: only if you are driving north anyway",
      alinea:
        "From Soignies, Aartselaar is **about an hour's drive**, so two hours there and back. If you commute to Brussels or further, collecting can suit one compact unit. For a town house or a farmhouse, you are better off letting us deliver and take readings.",
    },
    buren: ["s-gravenbrakel", "ecaussinnes", "le-roeulx", "jurbeke"],
    faq: [
      {
        q: "I am living in Casteau for a posting at SHAPE. Can I hire a dehumidifier for a rented home?",
        a: "Yes. After a water leak or a refurbishment, we install a dehumidifier for as long as it is needed. Agree with the owner who pays for the hire. Any questions? Feel free to email or call us.",
      },
      {
        q: "Does blue stone absorb moisture?",
        a: "Hardly: it is a dense limestone. The moisture sits in the joints, the mortar and the brick wall behind it. Because it cannot get out through the blue stone, a wall like that dries mainly inwards. That is why the dehumidifier and the fan stand on the inside.",
      },
      {
        q: "Can I have a stable being converted into a home dried in winter?",
        a: "Yes, as soon as the stable is closed off, with windows and doors or a temporary enclosure. In winter, a large, cold space is too cold for a condensation dehumidifier. An electric site heater first brings it up to temperature. That needs a 400 V connection, so check in advance that there is one.",
      },
      {
        q: "How long do people usually hire a construction dehumidifier?",
        a: "For a room with new plasterwork, a week to ten days is often enough. A whole home with a new screed needs several weeks. The moisture reading at the start gives a first idea, and you can extend as long as the walls or floor are not dry enough.",
      },
    ],
    realisaties: [],
  },
  ecaussinnes: {
    slug: "ecaussinnes",
    title: "Construction dehumidifier hire in Écaussinnes | Vernast",
    description:
      "Dehumidifier hire in Écaussinnes or Marche-lez-Écaussinnes, for stone houses built into the slope and cellars that stay cold. Delivered and installed.",
    h1: "Construction dehumidifier hire in Écaussinnes",
    kicker: "Hainaut · quarries and the castle of Lalaing",
    rit: { afstand: "about 80 km", tijd: "about an hour" },
    intro: [
      "Écaussinnes lies between Soignies and Seneffe, in an area where **blue stone** has been quarried for centuries. The municipality consists of Écaussinnes-d'Enghien, Marche-lez-Écaussinnes and **Écaussinnes-Lalaing**, with its medieval castle above the valley.",
      "The villages are built **in stone and brick along sloping streets**, with gardens running down to the valley of **the Sennette**. From our warehouse in Aartselaar we get there in about an hour.",
    ],
    bouw: {
      kop: "Quarry workers' homes along sloping streets",
      alineas: [
        "Many homes in Écaussinnes are **simple brick houses** with blue stone in the plinth and the sills. Some are partly built into the slope. On the uphill side there is then **earth against the wall**, and a cellar or ground floor on that side is naturally damper than the rest of the house.",
        "During a renovation, the technician first works out **where the water is coming from**. Construction moisture from new plasterwork and a new screed disappears with a dehumidifier. Water that presses against the wall from the slope after every shower needs a solution on the outside. The moisture reading at delivery makes that distinction.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**For the ground floor or cellar against the slope**: this desiccant dehumidifier also works in a cold, partly buried space." },
      { key: "ttk350", waarom: "For **a renovated village home**, floor by floor: 70 litres a day, for rooms up to about 400 m³." },
      { key: "ttk170", waarom: "For **a small room or a bathroom** in a narrow house: compact and suited to a 230 V socket." },
      { key: "ttv4500", waarom: "For **a freshly plastered wall with a blue-stone plinth**, where the moisture can only dry inwards." },
    ],
    levering: {
      kop: "Delivering in Écaussinnes, including the sloping streets",
      alinea:
        "The drive takes about an hour, **via the ring road and the E19**, with the last stretch on regional roads. You choose a delivery date when you book; delivery is by appointment. If your home is on **a steep street or you have steps up to the front door**, let us know. The technician brings a sack truck and allows time for it.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar, for anyone heading to Antwerp anyway",
      alinea:
        "Our warehouse is **about an hour's drive** from Écaussinnes. For one compact unit, collecting can pay off if you are in the area anyway. For a cellar or ground floor against the slope we recommend delivery, because the moisture reading determines whether drying makes sense there.",
    },
    buren: ["s-gravenbrakel", "zinnik", "seneffe", "le-roeulx"],
    faq: [
      {
        q: "My ground floor is half built into the slope. Can a dehumidifier keep it dry?",
        a: "A dehumidifier removes the moisture from the air and the wall, even in a buried space. If new water presses against the wall after every shower of rain, it returns as soon as the unit is gone. Then drainage or sealing on the outside helps. The reading during installation shows which case it is.",
      },
      {
        q: "Can the technician carry the units up a flight of steps?",
        a: "Yes, the units are brought right into the room where they need to stand. For a steep indoor staircase or outside steps with many treads, he brings a sack truck or a colleague. Mention it when you book, and we will take it into account in the planning.",
      },
      {
        q: "When can I stop drying?",
        a: "Look at the moisture in the wall and floor, not in the air. A room can feel dry while the screed is still too wet for parquet. We measure the material itself, so you stop at a measured value and not on a hunch.",
      },
      {
        q: "What if the power fails while the dehumidifier is running?",
        a: "Then the drying stops for a while. After the power cut, check that the unit is running again and that the humidistat is still set correctly. If you are working with a site distribution board, check that it does not trip when the dehumidifier and a fan start up together.",
      },
    ],
    realisaties: [],
  },
  binche: {
    slug: "binche",
    title: "Construction dehumidifier hire in Binche | Vernast",
    description:
      "Dehumidifier hire in Binche, for town houses inside the old walls and miners' houses in Ressaix and Leval-Trahegnies. Delivered, installed and collected.",
    h1: "Construction dehumidifier hire in Binche",
    kicker: "Hainaut · the town of the Gilles",
    rit: { afstand: "about 100 km", tijd: "just over an hour" },
    intro: [
      "Binche is known for **its carnival** with the **Gilles**, which UNESCO recognises as intangible heritage. The town has also kept a large part of its medieval town walls, with towers around the old centre.",
      "Inside those walls, **old town houses stand close together**. Beyond them lie districts such as **Ressaix, Leval-Trahegnies, Waudrez and Péronnes**. Some of them grew up around the coal mines, with rows of workers' houses. From Aartselaar we drive there in just over an hour.",
    ],
    bouw: {
      kop: "Inside the walls and in the old mining villages",
      alineas: [
        "In the **old centre inside the walls** stand narrow, deep town houses with vaulted cellars and thick walls. During a renovation, the damp air hangs between the walls there. **One dehumidifier per floor and a fan** get that air moving. Keep the doors to the stairs closed.",
        "In the **mining villages** there are rows of workers' houses, often small and with a floor laid directly on the ground. After a renovation with a new floor and new plasterwork, a lot of moisture is released into a small space. Usually **one compact unit for every two rooms** is enough. The technician also measures whether moisture from the ground plays a part.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**For a small miner's house in Ressaix or Leval**: 50 litres a day, compact enough for a narrow door, on 230 V." },
      { key: "ttk350", waarom: "**For a town house inside the walls** with several floors: 70 litres a day per storey, for rooms up to about 400 m³." },
      { key: "revolution", waarom: "For **a vaulted cellar in the old centre**, too cold for a condensation dehumidifier." },
      { key: "radiaal2250", waarom: "Across **a new floor laid on the ground**: it blows low and directly, so the screed dries faster." },
    ],
    levering: {
      kop: "Delivering in Binche: the E19, then the E42 eastwards",
      alinea:
        "The drive takes just over an hour, **via the ring road, the E19 and the E42**. You fix the delivery date when you book; we phone you to agree the exact time. Around carnival, the old centre is partly closed off. **Book further ahead during that period** and tell us where the technician can stop. He installs the units, sets up the drain and measures the moisture at the start.",
    },
    afhalen: {
      kop: "Collecting from Binche: more than two hours there and back",
      alinea:
        "Aartselaar is **just over an hour's drive** from Binche. There and back easily takes half a morning, and a dehumidifier has to travel upright in the car. For one compact unit it can work. For a town house or a miner's house under renovation, you are better off letting us deliver.",
    },
    buren: ["estinnes", "morlanwelz", "la-louviere", "anderlues"],
    faq: [
      {
        q: "Do you also deliver during the Binche carnival?",
        a: "In the old centre that is difficult around the carnival days, because streets are closed off and it is busy. Preferably plan your delivery before or after that period, or give an address outside the centre. In the outlying districts little usually changes.",
      },
      {
        q: "How many dehumidifiers does a small miner's house need?",
        a: "Often one compact unit for the ground floor and a second for the upper floor, with the doors closed. If there is a new screed, a fan is added. The calculator on the site works with the volume, and the technician checks on site whether that is right.",
      },
      {
        q: "Why does my vaulted cellar smell musty?",
        a: "A vaulted cellar has its walls against the ground, is rarely ventilated and stays cold. The air becomes saturated with moisture, and that smells musty. A desiccant dehumidifier removes the moisture. If water comes in through the wall, the smell returns. The moisture reading at delivery makes that clear.",
      },
      {
        q: "Can a dehumidifier stay until after the work has been handed over?",
        a: "Yes. You hire for as long as needed, and we collect when you ask. Many customers leave the unit in place for a few more days after the painter has finished, because fresh paint on a newly dried wall also gives off moisture.",
      },
    ],
    realisaties: [],
  },
  estinnes: {
    slug: "estinnes",
    title: "Construction dehumidifier hire in Estinnes | Vernast",
    description:
      "Dehumidifier hire in Estinnes, Haulchin, Rouveroy or Vellereille, for farmhouses, converted stables and village homes south of Binche. Delivered.",
    h1: "Construction dehumidifier hire in Estinnes",
    kicker: "Hainaut · farmhouses on the open plateau",
    rit: { afstand: "about 105 km", tijd: "just over an hour" },
    intro: [
      "Estinnes is **an extensive rural municipality** between Binche and Mons. It has a string of villages, including Estinnes-au-Mont, Estinnes-au-Val, Haulchin, Vellereille, Rouveroy, Fauroeulx, Peissant and Croix-lez-Rouveroy. Driving through, you mainly see **fields, farmhouses and wind turbines**.",
      "The municipality has few inhabitants spread over a large area. Most homes are **old farmhouses and brick village homes**, with newer houses on the edge of the villages. The work here is often **a farmhouse being converted** or an old home being renovated. From Aartselaar we get there in just over an hour.",
    ],
    bouw: {
      kop: "Farmhouses becoming homes, and cold rooms in winter",
      alineas: [
        "A **farmhouse in Estinnes** often has large outbuildings next to the house: a stable, a barn, a cart shed. Converting those into a home means putting **a new floor slab, screed and plasterwork** into a high volume with thick walls. One unit in the middle then mainly dries the air around itself. Spreading the units out works better.",
        "On the open plateau the wind blows freely against the façades, and an **unheated space** cools down a lot in winter. Below about 15 °C a condensation dehumidifier extracts little water from the air. In a cold stable or barn we therefore put **a site heater in first**, then the dehumidifier. That way the work can carry on in winter too.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a converted stable or barn**: 110 litres a day, for a high, open volume up to about 600 m³." },
      { key: "teddh30", waarom: "**For a cold farmhouse in winter**: 30 kW to bring the space up to working temperature, on a 400 V power supply." },
      { key: "radiaal2250", waarom: "Across **the new floor slab or screed** in a large space, where the air just above the floor would otherwise stand still." },
      { key: "ttk350", waarom: "For **the house itself**, floor by floor: 70 litres a day, for rooms up to about 400 m³." },
    ],
    levering: {
      kop: "Delivering in Estinnes: via the E19 and the E42, then the country roads",
      alinea:
        "The drive takes just over an hour, **via the ring road, the E19 and the E42**, with the last stretch on country roads. You fix a delivery date when you book, and we agree a time together. If you have **a farmhouse with an inner courtyard or a long drive**, tell us in advance where the technician can load and unload. If a heater is coming too, also mention where the 400 V connection is.",
    },
    afhalen: {
      kop: "Collecting is not a good trade-off from Estinnes",
      alinea:
        "Aartselaar is **just over an hour's drive** from Estinnes, and for a farmhouse you usually need several units. They rarely fit in one car. Collecting only makes sense for one compact unit in a room. In all other cases, delivery with installation is the logical choice.",
    },
    buren: ["binche", "bergen", "quevy", "merbes-le-chateau"],
    faq: [
      {
        q: "How many units does a converted stable need?",
        a: "That depends on the volume and on how much wet work has been done. A stable with a new floor slab and plasterwork usually needs a large dehumidifier, a fan across the floor and, in winter, a site heater. Give us the dimensions and the height, and we will work out the layout in advance.",
      },
      {
        q: "Does my farmhouse need a 400 V connection for the heater?",
        a: "Yes, the electric site heaters run on 400 V. Many farmhouses already have that connection, for farm machinery or a workshop. If not, a site distribution board from the contractor can help. The dehumidifiers and fans work on a 230 V socket.",
      },
      {
        q: "Does the technician drive all the way to Rouveroy and Croix-lez-Rouveroy?",
        a: "Yes, we deliver in all the villages of Estinnes, including the smallest hamlets. When you book, mention whether access is via a narrow country lane or an unpaved drive. Then the technician knows in advance what to expect.",
      },
      {
        q: "Does a dehumidifier work in a room with exposed roof beams?",
        a: "Yes, as long as the room itself is closed off. Exposed beams do increase the volume to be dried, and warm, damp air rises. A fan that mixes the air prevents the moisture from lingering under the roof.",
      },
    ],
    realisaties: [],
  },
  "la-louviere": {
    slug: "la-louviere",
    title: "Construction dehumidifier hire in La Louvière | Vernast",
    description:
      "Dehumidifier hire in La Louvière, Houdeng or Strépy-Bracquegnies, for workers' and town houses under renovation by the Canal du Centre. Delivered.",
    h1: "Construction dehumidifier hire in La Louvière",
    kicker: "Hainaut · boat lifts and mining districts",
    rit: { afstand: "about 90 km", tijd: "just over an hour" },
    intro: [
      "La Louvière is **a young city**. It only became a municipality in its own right in the nineteenth century, when **coal, steel and earthenware** made the Centre region great. The old Bois-du-Luc mining site in Houdeng-Aimeries is on the UNESCO World Heritage list.",
      "**The Canal du Centre** runs through the city, with three of the four historic boat lifts and the large **Strépy-Thieu boat lift**. Around the mines and factories, districts with rows of workers' houses grew up, in Houdeng, Haine-Saint-Paul, Strépy-Bracquegnies and Trivières. From Aartselaar we drive to La Louvière in just over an hour.",
    ],
    bouw: {
      kop: "Workers' districts, cités and a city under renovation",
      alineas: [
        "The **workers' houses and cités** around the old mines are small, built of brick and often with a floor laid on the ground or a low cellar. Many of these houses are now being thoroughly renewed: insulation, new floors, a bathroom where there used to be an outside toilet. **A lot of water is then released into a small volume**, and it has to go before the finishing starts.",
        "In **the city centre**, too, older town houses and shop buildings with a flat above are being renovated. There the stairs are narrow and space is tight. We put **compact units** there on a 230 V socket. The technician runs the drain to a sink or a floor drain, so you do not have to empty a tank.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**For a worker's house or a flat above a shop**: 50 litres a day and compact enough for a narrow staircase." },
      { key: "ttk350", waarom: "For **a whole terraced house in Houdeng or Strépy** being renovated from front to back: 70 litres a day." },
      { key: "radiaal2250", waarom: "Across **the new screed** replacing the old floor laid on the ground: it blows low and directly across the surface." },
      { key: "revolution", waarom: "For **a low, cold cellar** under an old house, where a condensation dehumidifier achieves little." },
    ],
    levering: {
      kop: "Delivering in La Louvière: the E19, then the A501 into the city",
      alinea:
        "The drive takes just over an hour, **via the ring road, the E19 and the A501** into La Louvière. You choose the day when you book; we agree the delivery time with you. The technician sets up the units per zone, lays the drain hose and measures the moisture. In a cité with narrow streets, it helps if you **keep a parking space free in advance**.",
    },
    afhalen: {
      kop: "Collecting costs you half a day from La Louvière",
      alinea:
        "Aartselaar is **just over an hour's drive** away, so you are on the road for over two hours there and back. For one unit that can work, provided the dehumidifier fits upright in your car. For a home under full renovation, you are better off having the units delivered and installed.",
    },
    buren: ["le-roeulx", "binche", "morlanwelz", "manage"],
    faq: [
      {
        q: "How do I dry a worker's house after replacing the floor?",
        a: "With a dehumidifier in the room and a radial fan blowing across the new screed, with windows and doors closed. A floor laid on the ground dries mainly upwards, so the air above it has to stay dry. We measure the screed at the start and before collection.",
      },
      {
        q: "Will a dehumidifier fit in a flat above a shop with a narrow staircase?",
        a: "The compact unit usually fits. For the larger models we prefer to look at the staircase in advance. Mention when you book that it is a narrow staircase, and the technician will choose the units accordingly.",
      },
      {
        q: "Can I extend the hire if the walls are still wet?",
        a: "Yes. Let us know before the agreed end date, and the unit stays in place. If in doubt, the technician comes back to take another reading. That way you do not hire for longer than needed and you do not stop too early.",
      },
      {
        q: "Do I need to heat the room while the dehumidifier is running?",
        a: "In an occupied, heated home, usually not extra. In an unheated home in winter, you do: below about 15 °C a condensation dehumidifier extracts little water from the air. Then we add a site heater or choose a desiccant dehumidifier.",
      },
    ],
    realisaties: [],
  },
  morlanwelz: {
    slug: "morlanwelz",
    title: "Construction dehumidifier hire in Morlanwelz | Vernast",
    description:
      "Dehumidifier hire in Morlanwelz, Carnières or Mont-Sainte-Aldegonde, for miners' houses with a new floor in the Haine valley. Delivered and installed.",
    h1: "Construction dehumidifier hire in Morlanwelz",
    kicker: "Hainaut · the Mariemont estate",
    rit: { afstand: "about 95 km", tijd: "just over an hour" },
    intro: [
      "Morlanwelz lies between La Louvière and Binche, in **the Haine valley**. Its best-known spot is the **Mariemont estate**, with its park and the Royal Museum of Mariemont.",
      "The area around the estate lived for a long time off **the coal mines**. Morlanwelz, Carnières and Mont-Sainte-Aldegonde have **rows of miners' houses** left over from that time. Many of those houses now have new owners who are renovating them thoroughly. From Aartselaar we drive there in just over an hour.",
    ],
    bouw: {
      kop: "Miners' houses in the Haine valley",
      alineas: [
        "A **miner's house** in Morlanwelz or Carnières is usually small and deep, with a narrow façade, a back kitchen and a floor laid on the ground. During a renovation that floor is often broken out and replaced by an insulated floor with screed. **That screed holds most of the moisture in the house**, and it determines when the floor layer can start.",
        "Lower down in the valley the ground is damper, and walls without a damp-proof course stay wet there for longer. A dehumidifier removes the construction moisture, but moisture rising from the ground comes back. During installation the technician takes readings **at the bottom and higher up the wall**. That way you do not spend weeks drying moisture that keeps returning.",
      ],
    },
    toestellen: [
      { key: "radiaal2250", waarom: "**Across the new screed in a miner's house**, where the floor holds most of the moisture." },
      { key: "ttk350", waarom: "For **a whole home under renovation**: 70 litres a day, for rooms up to about 400 m³." },
      { key: "ttk170", waarom: "For **the back kitchen or a new bathroom** on its own: compact, 50 litres a day, on 230 V." },
      { key: "teddh20", waarom: "For **an empty house being renovated in winter**: 20 kW to bring the cold space up to temperature, on 400 V." },
    ],
    levering: {
      kop: "Delivering in Morlanwelz: via the E19 and the E42",
      alinea:
        "The drive takes just over an hour, **via the ring road, the E19 and the E42**. You choose a delivery date when you book, and we deliver at an agreed time. The technician sets up the units per zone, lays the drain hose and notes **the moisture reading in the screed**, which you compare against later. In a narrow street of terraced houses, a free space in front of the door helps.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar is a long drive from Morlanwelz",
      alinea:
        "With **just over an hour's drive each way**, collecting only makes sense if you are heading towards Antwerp anyway. For a miner's house with a new floor you usually need a dehumidifier and a fan. Then delivery with installation and a moisture reading is the better choice.",
    },
    buren: ["la-louviere", "binche", "manage", "chapelle-lez-herlaimont", "anderlues"],
    faq: [
      {
        q: "How long does drying a miner's house take after a full renovation?",
        a: "Expect a few weeks if there is a new screed and new plasterwork. The screed usually sets the duration: the thicker it is, the longer it takes. With a dehumidifier and a fan it goes noticeably faster, and the reading shows when the floor is ready for finishing.",
      },
      {
        q: "Can I dry a house that is not yet lived in or heated?",
        a: "Yes. In an empty, cold house in winter we put a site heater next to the dehumidifier, because below about 15 °C a condensation dehumidifier hardly dries at all. The heater needs a 400 V connection. If the house does not have one, we look at a desiccant dehumidifier together.",
      },
      {
        q: "Why is just as much water coming out of the drain hose after a week?",
        a: "The dehumidifier keeps extracting water from the air as long as the walls and floor give off moisture. If the amount drops after a few days, things are going the right way. If it stays the same, ask us to come and take another reading.",
      },
      {
        q: "Can the dehumidifier stand in the same room as a newly fitted kitchen?",
        a: "Yes, but do not put it right against the cabinets and do not aim the outlet at the worktop. A moderate humidistat setting is enough. Wood and chipboard cope just as badly with drying too fast as with too much moisture.",
      },
    ],
    realisaties: [],
  },
  "aiseau-presles": {
    slug: "aiseau-presles",
    title: "Construction dehumidifier hire in Aiseau-Presles | Vernast",
    description:
      "Dehumidifier hire in Aiseau-Presles, Pont-de-Loup and Roselies: old homes by the Sambre and detached houses on the wooded slopes. Delivered and installed.",
    h1: "Construction dehumidifier hire in Aiseau-Presles",
    kicker: "Hainaut · where the coalfield gives way to green",
    rit: { afstand: "about 110 km", tijd: "just over an hour" },
    intro: [
      "Aiseau-Presles lies **on the eastern edge of the Charleroi coalfield**, against the province of Namur. The municipality consists of Aiseau, Presles, Pont-de-Loup and Roselies. In the north, the Sambre forms part of the boundary.",
      "Along the river stand the older homes from the industrial era. To the south it becomes **hilly and wooded**, with the castle estate of Presles and scattered homes. From Aartselaar the drive takes **just over an hour**, a little longer than to Charleroi.",
    ],
    bouw: {
      kop: "Down by the river, up among the trees",
      alineas: [
        "In Pont-de-Loup and Aiseau, brick homes stand close to the Sambre, often with **a cellar on damp ground**. A renovation there revolves around new plaster, a new floor and a cellar that needs to become usable again. At the start, the technician measures how much of the moisture is construction moisture. That way you do not spend weeks drying against water that keeps coming up from the ground.",
        "On the wooded slopes towards Presles there are more detached homes, sometimes under tall trees. There **the outside air is often damp**, and with the windows open a home hardly dries after the work. A dehumidifier works regardless of the weather. A fan next to it draws the water out of the new screed or the plasterwork.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For the detached home on the slope**: 70 litres a day and a range of up to about 400 m³, one unit per floor." },
      { key: "revolution", waarom: "**For a cellar close to the Sambre**: this desiccant dehumidifier keeps taking up moisture at temperatures where a condensation dehumidifier does little more." },
      { key: "radiaal2250", waarom: "For a new screed, which is often the last thing to dry in a home. The radial fan blows the air low across the floor." },
      { key: "teddh20", waarom: "First warms up a cold cellar or garage in winter. This 20 kW heater runs on 400 V; check that the connection is there." },
    ],
    levering: {
      kop: "Delivering in Aiseau-Presles: past Charleroi, towards Namur",
      alinea:
        "We drive **just over an hour**, via the ring road, the A54 and the Charleroi ring road, or via the E411 and Namur if that is quicker. You fix the delivery date when you book; we phone you to agree the time. If your home is on a narrow woodland road or a steep drive, let us know in advance. Then the technician knows where he can stop.",
    },
    afhalen: {
      kop: "Collecting is not the usual choice here",
      alinea:
        "Aartselaar is more than a hundred kilometres from Aiseau-Presles. Collecting and returning costs you two trips of **just over two hours** there and back, and a dehumidifier has to travel upright in the car. Let us bring the units: the technician measures straight away whether drying helps your cellar or screed.",
    },
    buren: ["farciennes", "chatelet"],
    faq: [
      {
        q: "Can a cellar in Pont-de-Loup become usable with a dehumidifier?",
        a: "As a storeroom or workspace it usually works, as long as the dehumidifier is running and the humidistat keeps the moisture in check. If water seeps in from outside, it returns as soon as the unit is gone. The reading at delivery shows which part of the moisture disappears.",
      },
      {
        q: "Does a home under the trees in Presles dry more slowly?",
        a: "Often it does. Under tall trees the outside air stays damp and the façade gets little sun, so airing with the windows open helps little. With the windows closed and a dehumidifier inside, you still get the construction moisture out.",
      },
      {
        q: "How long does the dehumidifier stay after a bathroom renovation?",
        a: "That depends on the thickness of the screed, the material and the temperature. We cannot give a fixed period in advance. The reading at collection shows whether the floor and walls are ready for tiles or paint.",
      },
      {
        q: "Do you also come all the way to Roselies and Aiseau village?",
        a: "Yes, the whole municipality is within our delivery area, including the scattered homes outside the village centres. Choose a delivery date when you book and mention a drive that is hard to reach. We then agree the delivery time with you.",
      },
    ],
    realisaties: [],
  },
  "chapelle-lez-herlaimont": {
    slug: "chapelle-lez-herlaimont",
    title: "Dehumidifier hire in Chapelle-lez-Herlaimont | Vernast",
    description:
      "Construction dehumidifier hire in Chapelle-lez-Herlaimont, Godarville or Piéton, for miners' houses and cellars. By appointment, with a moisture reading.",
    h1: "Construction dehumidifier hire in Chapelle-lez-Herlaimont",
    kicker: "Hainaut · between the Centre and Charleroi",
    rit: { afstand: "about 90 km", tijd: "just over an hour" },
    intro: [
      "Chapelle-lez-Herlaimont lies **between La Louvière and Charleroi**, with **Godarville and Piéton** as its districts. The municipality grew with the coal mines. They closed long ago, but the workers' districts from that time still shape the streetscape.",
      "In the village centres there are mainly **rows of brick houses**, and on the edges **post-war housing estates**. From our warehouse in Aartselaar we drive there in just over an hour. Any questions? Feel free to email or call us.",
    ],
    bouw: {
      kop: "Miners' houses getting a second life",
      alineas: [
        "**A miner's house** is narrow and has thin front and back walls. The cellar often still has **a floor of cobbles or rammed earth**. A conversion usually brings a new concrete slab or screed and new plasterwork on every wall. That puts a lot of water into a small volume, and without a dehumidifier it hangs in the air for weeks.",
        "In the **homes on the housing estates** it is more often an extension at the back or a new bathroom. The volume is limited, but the schedule is tight: **the tiler wants a dry substrate**. The technician measures the moisture at the start and at collection, so you can give the tiler a figure.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a fully renovated miner's house**: 70 litres a day for volumes up to 400 m³, enough for a ground floor with a new screed and fresh plasterwork." },
      { key: "teddh20", waarom: "A cellar with a stone floor stays cold in winter. **This 20 kW electric heater** warms it up, so the dehumidifier works better. It needs a 400 V connection." },
      { key: "ttk170", waarom: "For a new bathroom or a rear extension: a compact dehumidifier of 50 litres a day that uses only 0.75 kW." },
      { key: "ttv4500", waarom: "In a narrow, deep house, damp air lingers at the back. This fan gets it moving, **from the front room to the kitchen**." },
    ],
    levering: {
      kop: "Delivering in Chapelle: via the A54 and the E42",
      alinea:
        "We drive **via the Brussels ring road and the A54**, with the last stretch on **the E42**. Allow just over an hour. You choose a delivery date when you book, and we agree the time with you. The technician sets up the units room by room, runs the drain to a floor drain or leaves the tank in place, and notes the moisture values of the wall and floor.",
    },
    afhalen: {
      kop: "Collecting it yourself is a long drive",
      alinea:
        "The collection point in Aartselaar is **just over an hour's drive** away. There and back costs you half a working day, and when returning you drive that road again. A dehumidifier also has to travel upright in the car. For one small unit it can work; for a whole home, you are better off having it delivered.",
    },
    buren: ["manage", "seneffe", "courcelles", "fontaine-l-eveque", "morlanwelz"],
    faq: [
      {
        q: "My cellar has a rammed-earth floor. Is drying worth it?",
        a: "Partly. A dehumidifier removes the moisture from the air and from the walls, but an earth floor draws moisture up from the ground as long as it is exposed. If you want the cellar to stay dry, first lay a damp-proof membrane and a concrete slab. We then dry out that slab.",
      },
      {
        q: "How many units do I need for a narrow two-storey terraced house?",
        a: "Usually one condensation dehumidifier per floor with the doors closed, and a fan on the level where the new screed is. The technician decides on site, based on the moisture reading and the volume of each room.",
      },
      {
        q: "Do you also come to Godarville and Piéton?",
        a: "Yes. Both are districts of Chapelle-lez-Herlaimont and lie within our delivery zone. When you book, give the full address including the district, so the planning makes the right trip.",
      },
      {
        q: "Can a dehumidifier stay on while nobody is in the house?",
        a: "Yes, that is the idea: a construction dehumidifier runs day and night. If you run the drain hose to a floor drain or a sink, nobody has to empty the tank and the unit keeps drying over the weekend too.",
      },
    ],
    realisaties: [],
  },
  chatelet: {
    slug: "chatelet",
    title: "Construction dehumidifier hire in Châtelet | Vernast",
    description:
      "Dehumidifier hire in Châtelet, Châtelineau and Bouffioulx: old homes on both banks of the Sambre, with cellars in the valley. Delivered and collected.",
    h1: "Construction dehumidifier hire in Châtelet",
    kicker: "Hainaut · two banks of the Sambre",
    rit: { afstand: "about 105 km", tijd: "just over an hour" },
    intro: [
      "Châtelet lies **downstream of Charleroi**, on both sides of the Sambre. The municipality consists of Châtelet, Châtelineau and Bouffioulx. That last village has been known for centuries for its **salt-glazed stoneware**.",
      "Like the rest of the coalfield, Châtelet grew around the mines and the metal industry. In the valley stand dense rows of brick homes, on the slopes more detached houses. From Aartselaar the drive takes us **just over an hour**.",
    ],
    bouw: {
      kop: "Low riverbanks and the slopes above them",
      alineas: [
        "Anyone living close to the Sambre has a house on low ground. A cellar or ground floor without a damp-proof course stays damper there than higher up. After a renovation, the same wall then holds **construction moisture and ground moisture**. The construction moisture dries out, the ground moisture remains. During installation the technician measures which of the two you are seeing.",
        "In Bouffioulx and on the slopes, it is more often old village homes and converted outbuildings with thick walls. Walls like that hold water for a long time. Let them **dry gradually**: a fan against the wall and a dehumidifier with the humidistat set to a target value, so the plasterwork does not crack.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a terraced house in Châtelet or Châtelineau**: one per floor, 70 litres a day. With the condensate pump, the water runs through a hose to the drain." },
      { key: "revolution", waarom: "**For the cold cellar in the valley**: this desiccant dehumidifier still takes up moisture at low temperatures." },
      { key: "ttv4500", waarom: "Blows the damp layer of air away from a thick wall, so the wall gives off its water faster." },
      { key: "ttk170", waarom: "For a bathroom or a single room being renewed on its own: compact, 50 litres a day, for rooms up to about 250 m³." },
    ],
    levering: {
      kop: "Delivering in Châtelet: past Charleroi, along the Sambre",
      alinea:
        "The drive goes via the ring road, the A54 and the R3 around Charleroi and takes **just over an hour**. You choose a delivery date when you book; we agree the time together. If your home is on **a steep street**, let us know in advance, so the technician can prepare for the heavier units.",
    },
    afhalen: {
      kop: "Collecting rarely pays off from Châtelet",
      alinea:
        "Aartselaar is more than a hundred kilometres away, just over an hour's drive. Collecting and returning yourself costs you two trips of **just over two hours** there and back. For a cellar or a home by the Sambre you are better off choosing delivery: the moisture reading at the start shows whether drying makes sense there.",
    },
    buren: ["charleroi", "farciennes", "aiseau-presles", "gerpinnes"],
    faq: [
      {
        q: "My house in Châtelineau is close to the Sambre. Does a construction dehumidifier help?",
        a: "For construction moisture after a renovation, yes: that water disappears and does not come back. If the moisture comes from the ground because the wall has no damp-proof course, a dehumidifier keeps the room usable, but the cause remains. The reading at delivery makes that distinction.",
      },
      {
        q: "How do I dry an old stone home in Bouffioulx without the plaster cracking?",
        a: "Do not let the dehumidifier run at full power. A wall that dries too fast at the surface shrinks unevenly, and then the plaster cracks. The technician sets the humidistat to a target value and puts a fan against the wall, so the moisture is drawn evenly out of the stone.",
      },
      {
        q: "What should I mention when I book?",
        a: "Any questions? Feel free to email or call us. When you book, also mention who will open the door on site and how we can reach that person, so the delivery goes smoothly.",
      },
      {
        q: "What if the water in my cellar comes back after every shower of rain?",
        a: "Then water is seeping in from outside, and a dehumidifier does not solve that: what it removes today comes back with the next shower. We measure during installation and follow whether the moisture content drops. If it stays high, we tell you. A contractor for waterproofing is then the next step.",
      },
    ],
    realisaties: [],
  },
  courcelles: {
    slug: "courcelles",
    title: "Construction dehumidifier hire in Courcelles | Vernast",
    description:
      "Dehumidifier hire in Courcelles, Trazegnies, Souvret or Gouy-lez-Piéton: miners' houses and newer estates west of Charleroi. Delivered and installed.",
    h1: "Construction dehumidifier hire in Courcelles",
    kicker: "Hainaut · the west of the coalfield",
    rit: { afstand: "about 95 km", tijd: "just over an hour" },
    intro: [
      "Courcelles lies **just west of Charleroi**. Besides Courcelles itself, Souvret, Trazegnies and Gouy-lez-Piéton belong to the municipality. Its best-known building is the **castle of Trazegnies**.",
      "For a long time, coal was the big employer here. The streets of brick miners' houses bear witness to that, with the housing estates of recent decades in between. From Aartselaar, Courcelles is **just over an hour's** drive.",
    ],
    bouw: {
      kop: "Miners' houses and the estate next door",
      alineas: [
        "A **miner's house** is small and low, often with an extension that was added later. Doing up a house like that means laying new floors, replastering and insulating, in a volume hardly larger than a flat. One compact unit per floor is usually enough, provided **the doors stay closed**. Otherwise the whole house dries a little and no single room really dries.",
        "In the newer districts it is a home from the seventies or later, or a new build. There, **a screed over the whole ground floor** is common, alongside plastered walls and sometimes a cellar or garage. A dehumidifier with a fan across the floor draws the water out, and the reading at collection tells the floor layer whether he can start.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**For a small miner's house**: compact, 50 litres a day and suitable for rooms up to about 250 m³." },
      { key: "radiaal2250", waarom: "**Across a new screed**: the radial fan blows 2,250 m³ an hour low and directly across the floor, where most of the water is." },
      { key: "ttk350", waarom: "For a new-build home or a larger floor: 70 litres a day, for rooms up to about 400 m³." },
      { key: "teddh20", waarom: "Heats an unheated garage or extension in winter, so the dehumidifier works better. This 20 kW heater needs a 400 V connection." },
    ],
    levering: {
      kop: "Delivering in Courcelles: via Nivelles and the A54",
      alinea:
        "Courcelles is **just over an hour** from our warehouse, via the ring road and the A54. You choose a delivery date when you book, and we agree the time with you. The technician sets up the units per drying zone, lays the drain hose and measures the moisture in the floor and wall. That way you can see later how much progress has been made.",
    },
    afhalen: {
      kop: "Collecting yourself: allow for two trips",
      alinea:
        "Collecting yourself means driving from Courcelles to Aartselaar and back twice, each time **just over two hours** behind the wheel. If you take one small unit while you need to be near Antwerp anyway, it can work. For a screed, you are better off letting us deliver and take readings.",
    },
    buren: ["charleroi", "pont-a-celles", "fontaine-l-eveque", "chapelle-lez-herlaimont"],
    faq: [
      {
        q: "Is one construction dehumidifier enough for a small miner's house?",
        a: "Often it is, as long as only one floor is wet at a time. If the ground floor and the upper floor have both been renewed, you dry faster with one unit per floor and the doors closed. The calculator works out the volume, and the technician adjusts the set-up on site.",
      },
      {
        q: "When can my floor layer start on a new screed in Trazegnies or Souvret?",
        a: "As soon as the residual moisture is below the limit given by the floor layer or the manufacturer of the floor covering. That differs per type of screed and per finish. We measure at the start and at collection, so the decision rests on a figure and not on a guess.",
      },
      {
        q: "Can I open the windows while the dehumidifier is running?",
        a: "Preferably not. A dehumidifier works in a closed room. With the windows open, it extracts moisture from the outside air and hardly gets round to your walls. If you do want to air the room for a moment, switch the unit off in the meantime.",
      },
      {
        q: "Can the technician tell whether the damp patch in my old home comes from the ground?",
        a: "He measures the moisture content at different heights in the wall. Construction moisture is spread across the plasterwork, whereas rising damp decreases from the bottom up. From that pattern he works out whether drying is enough or whether the wall also needs treatment.",
      },
    ],
    realisaties: [],
  },
  farciennes: {
    slug: "farciennes",
    title: "Construction dehumidifier hire in Farciennes | Vernast",
    description:
      "Dehumidifier hire in Farciennes: brick workers' houses by the Sambre, among slag heaps and old mine sites. Delivered, installed, moisture reading at the start.",
    h1: "Construction dehumidifier hire in Farciennes",
    kicker: "Hainaut · a mining municipality on the Sambre",
    rit: { afstand: "about 105 km", tijd: "just over an hour" },
    intro: [
      "Farciennes is a **small municipality on the Sambre**, between Charleroi, Fleurus and Châtelet. Besides Farciennes itself, only Pironchamps belongs to it. The municipality was shaped by the **coal mines** that operated here until the last century.",
      "You still see that everywhere: long rows of brick workers' houses, overgrown slag heaps and the ruin of the castle of Farciennes. The buildings are dense and old. From Aartselaar we are on the road for **just over an hour** to Farciennes.",
    ],
    bouw: {
      kop: "Rows of old homes on low, wet ground",
      alineas: [
        "Many houses stand **in the Sambre valley**, on low ground and without a damp-proof course in the wall. Anyone hacking off old plaster there often sees salt rings and wet skirting. A dehumidifier removes the construction moisture from the new plaster, but moisture from the ground keeps coming until the wall has been treated. After the reading, the technician tells you which of the two it is.",
        "A second case is **water damage** after a leak or an overflowing drain, in a home with a wooden upper floor. Then the water also has to come out of the joists and the cavity beneath. A desiccant dehumidifier blows dry air into that cavity through hoses, often without the floor having to be opened up.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**After water damage under a floor or in a cold cellar**: this desiccant dehumidifier dries a cavity through hoses and also works in the cold." },
      { key: "ttk170", waarom: "**For the small worker's house**: compact, 50 litres a day for rooms up to about 250 m³. On a staircase, it is best carried by two people." },
      { key: "ttk350", waarom: "When the whole house is renovated at once: one per floor, 70 litres a day, for rooms up to about 400 m³." },
      { key: "ttv4500", waarom: "After old plaster has been hacked off, removes the damp layer of air from the wall so it dries faster. It moves 4,500 m³ of air an hour." },
    ],
    levering: {
      kop: "Delivering in Farciennes: a drive past Charleroi",
      alinea:
        "We drive **just over an hour**, via the ring road, the A54 and the Charleroi ring road. You choose a delivery date when you book, and then we make an appointment for the time. In a street of terraced houses without front gardens, a free space in front of the door helps. The technician installs the units, sets up the drain and notes the moisture values at the start.",
    },
    afhalen: {
      kop: "From Farciennes to Aartselaar and back",
      alinea:
        "Collecting yourself costs you two trips of **just over two hours** there and back from Farciennes, more than four hundred kilometres in total. For most jobs delivery is then the logical choice, and certainly after water damage: there the reading determines which units are needed.",
    },
    buren: ["charleroi", "fleurus", "chatelet", "aiseau-presles"],
    faq: [
      {
        q: "What are those white rings on my wall after hacking off the plaster?",
        a: "Usually they are salts that groundwater has carried into the wall. They stay behind where the water evaporates and point to rising damp. A dehumidifier removes the construction moisture, but for the salts and the ground moisture the wall itself needs treatment.",
      },
      {
        q: "Does my wooden floor have to come out after a water leak?",
        a: "Not always. If the floor has not warped, a desiccant dehumidifier can blow dry air under the boards through hoses. The technician measures the moisture in the wood and in the cavity beneath. At collection he measures again, so you know whether the floor is dry enough.",
      },
      {
        q: "How heavy is a construction dehumidifier to carry upstairs?",
        a: "Even the compact model weighs several tens of kilos. It is on wheels, but on a staircase it is best carried by two people. On delivery, the technician puts the units in place himself; let us know in advance whether there is a fixed staircase.",
      },
      {
        q: "How do I know the wall is dry enough to paint?",
        a: "You cannot tell by eye: a wall can feel dry and still hold a lot of water. We measure at the start and at collection. That way you go to the painter with a figure instead of a feeling.",
      },
    ],
    realisaties: [],
  },
  fleurus: {
    slug: "fleurus",
    title: "Construction dehumidifier hire in Fleurus | Vernast",
    description:
      "Dehumidifier hire in Fleurus, Wanfercée-Baulet, Heppignies or Wangenies: farmhouses on the loam plateau and homes in the old mining villages. Delivered.",
    h1: "Construction dehumidifier hire in Fleurus",
    kicker: "Hainaut · between the coalfield and the loam plateau",
    rit: { afstand: "about 100 km", tijd: "just over an hour" },
    intro: [
      "Fleurus lies **north-east of Charleroi** and is known from the history books for the battles of 1690 and 1794. The municipality includes Wanfercée-Baulet, Lambusart, Heppignies and Wangenies, among others.",
      "The south belongs to **the old coalfield**, with workers' streets that run on into Farciennes and Charleroi. To the north it becomes rural, with fields on fertile loam soil, farmhouses and villages. In the van we are on the road from Aartselaar for **just over an hour**.",
    ],
    bouw: {
      kop: "Workers' streets in the south, farmhouses in the north",
      alineas: [
        "In Lambusart and Wanfercée-Baulet there are many brick homes from the mining era, close together. A renovation there usually means **plasterwork and a new floor** in a house with small rooms. There is often a damp cellar too, because the walls have no damp-proof course.",
        "Towards Wangenies and Brye it is mainly **farmhouses and barns** being converted into homes, or new builds on a generous plot. Those are large, high volumes with a completely new floor slab. One unit there mainly dries its own corner, so the technician spreads several across the space.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a converted barn or farmhouse**: 110 litres a day for rooms up to about 600 m³." },
      { key: "radiaal2250", waarom: "Blows low and directly across a large new floor slab, so the screed in the middle does not lag behind." },
      { key: "ttk350", waarom: "**For a home in the mining villages**: one per floor, 70 litres a day for rooms up to about 400 m³." },
      { key: "teddh30", waarom: "First warms up a cold barn in winter. This 30 kW heater needs a 400 V power supply, which a farm often already has." },
    ],
    levering: {
      kop: "Delivering in Fleurus, out in the countryside too",
      alinea:
        "Fleurus is **just over an hour's** drive from Aartselaar, via the ring road and the A54. You choose a delivery date, and we fix the time together. On a farm with an inner courtyard or on a long country lane, the technician likes to hear in advance where he can unload. He installs the units, sets the humidistat and measures the moisture at the start.",
    },
    afhalen: {
      kop: "Collecting is possible, but it is a long drive",
      alinea:
        "Our collection point in Aartselaar is about a hundred kilometres away. Collecting and returning costs you two trips of **just over two hours** there and back. For a single unit in a home, that can work. In a barn or farmhouse, the set-up helps determine how fast everything dries, and the technician is better placed to arrange that on site.",
    },
    buren: ["charleroi", "farciennes", "les-bons-villers"],
    faq: [
      {
        q: "How many units does a converted barn in Wangenies need?",
        a: "That depends on the volume. A barn of ten by twenty metres with an average height of five metres already holds a thousand cubic metres. One dehumidifier is too few there: expect several units and a fan across the floor. The calculator gives you a first estimate.",
      },
      {
        q: "Does a construction dehumidifier work in an unheated space in winter?",
        a: "A condensation dehumidifier needs a space above about 15 °C to work well. In a cold barn or cellar we therefore add a heater, or we choose a desiccant dehumidifier, which keeps taking up moisture in the cold.",
      },
      {
        q: "Where does the water from the dehumidifier go?",
        a: "With the condensate pump you do not have to empty a tank. The technician runs the drain hose to a floor drain, a waste pipe or outside. That way the unit does not stop because the tank is full while nobody is on site.",
      },
      {
        q: "Do you also drive to Lambusart and Wanfercée-Baulet?",
        a: "Yes, we deliver in all the districts of Fleurus, from the mining villages in the south to the farming villages in the north. You choose a delivery date when you book. Also mention any difficult access, such as a narrow country lane.",
      },
    ],
    realisaties: [],
  },
  "fontaine-l-eveque": {
    slug: "fontaine-l-eveque",
    title: "Hire a construction dehumidifier in Fontaine-l'Évêque",
    description:
      "Dehumidifier hire in Fontaine-l'Évêque, Forchies-la-Marche or Leernes: brick homes and housing estates west of Charleroi. With a moisture reading.",
    h1: "Construction dehumidifier hire in Fontaine-l'Évêque",
    kicker: "Hainaut · the western edge of Charleroi",
    rit: { afstand: "about 100 km", tijd: "just over an hour" },
    intro: [
      "Fontaine-l'Évêque lies **just west of Charleroi**, with **Forchies-la-Marche and Leernes** as its districts. The small town has a historic centre, but grew mainly through coal mining.",
      "Around the centre stand **workers' houses and small town houses**; towards Leernes it becomes more rural. From Aartselaar we get there in **just over an hour**. Any questions? Send us an email or give us a call.",
    ],
    bouw: {
      kop: "Solid brick and old cellars",
      alineas: [
        "Many homes here are **built of solid brick without a cavity**, and the façade soaks up water in driving rain. If you insulate a house like that on the inside with a stud wall, **the wall has to be dry first**. Otherwise you lock the moisture in, and you only see it a winter later as mould.",
        "**Old cellars** rarely have a damp-proof course. If water comes in through a crack or a poor joint, a dehumidifier does not solve that. **After the repair** it removes the moisture from the wall and floor, and the reading at collection shows whether it stays away.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a façade wall that has to be dry before insulation**: 70 litres a day, on a closed-off ground floor with the doors shut." },
      { key: "radiaal2250", waarom: "Blows directly against a wall or across a cellar floor, **where the air otherwise stands still** and slows the drying." },
      { key: "teddh30", waarom: "A solid brick cellar stays cold in winter. **The 30 kW electric heater** brings it to a temperature at which a dehumidifier is effective. It runs on a 400 V power supply." },
      { key: "ttk170", waarom: "For one renovated room on the upper floor of a town house: compact enough for a narrow staircase and economical at 0.75 kW." },
    ],
    levering: {
      kop: "Delivering in Fontaine-l'Évêque: past Charleroi",
      alinea:
        "We drive **via Brussels and the A54 towards Charleroi**, just over an hour. You fix a **delivery date** when you book; we phone you to agree the exact time. The technician puts the units by the wettest walls, sets the humidistat and tells you what value he is aiming for.",
    },
    afhalen: {
      kop: "Collecting: allow half a day",
      alinea:
        "Aartselaar is **just over an hour's drive** from Fontaine. There and back, you spend almost three hours in the car, and the same again to return the units. For most customers here, delivery is therefore the logical choice.",
    },
    buren: ["charleroi", "anderlues", "chapelle-lez-herlaimont", "courcelles", "montigny-le-tilleul"],
    faq: [
      {
        q: "Does a wall have to be dry before I fit internal insulation?",
        a: "Yes. An insulated stud wall against a wet wall locks the moisture in, and then the wall hardly dries out at all. Let the wall dry first and have the technician take a reading. With a solid brick wall, that can take weeks.",
      },
      {
        q: "Does a dehumidifier fix a leaking cellar wall?",
        a: "No. If water comes in through a crack or a poor joint, that has to be repaired first. The dehumidifier is for afterwards: it removes the moisture from the wall and the floor, and the reading at collection shows whether the repair has worked.",
      },
      {
        q: "Do you deliver in Forchies-la-Marche and Leernes?",
        a: "Yes, both districts belong to Fontaine-l'Évêque and we deliver there just as in the centre. When you book, tell us whether there are stairs or whether the units have to go down to a cellar, and the planning will take that into account.",
      },
      {
        q: "Why put a heater next to a dehumidifier in winter?",
        a: "Because below about 15 °C a condensation dehumidifier extracts much less water from the air. In an unheated cellar or an empty house, a site heater brings the space up to temperature, and then the dehumidifier reaches its full capacity again.",
      },
    ],
    realisaties: [],
  },
  gerpinnes: {
    slug: "gerpinnes",
    title: "Construction dehumidifier hire in Gerpinnes | Vernast",
    description:
      "Dehumidifier hire in Gerpinnes, Loverval or Acoz: villas in the green south of Charleroi and stone village houses. Delivered by appointment, with a reading.",
    h1: "Construction dehumidifier hire in Gerpinnes",
    kicker: "Hainaut · Entre-Sambre-et-Meuse",
    rit: { afstand: "about 105 km", tijd: "just over an hour" },
    intro: [
      "Gerpinnes lies **south of Charleroi**, on the edge of **Entre-Sambre-et-Meuse**. The municipality includes Loverval, Acoz, Gougnies, Joncret and Villers-Poterie. It is known for the Marche Sainte-Rolende, one of the folk processions of the region.",
      "Loverval is **a villa district among the woods**. In the other villages, **old natural-stone houses** stand next to newer homes on generous plots. The drive from Aartselaar takes just over an hour. Any questions? Email or call us.",
    ],
    bouw: {
      kop: "Villas with large volumes and stone village houses",
      alineas: [
        "**A villa from the seventies or eighties** is often tackled in one go: underfloor heating with a new screed, new plastering, sometimes an extension with a large living area. **Those are large volumes.** One unit in the middle cannot dry the air in the corners; several dehumidifiers, spread over the zones, work better.",
        "**Old village houses in limestone or sandstone** have thick walls that dry slowly. After a renovation with lime plaster it must not go too fast, or the plaster cracks. **The technician sets the humidistat to a target value**, not to the driest the unit can manage.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a villa with an open living area and new underfloor heating**: 110 litres a day, for volumes up to 600 m³." },
      { key: "ttk350", waarom: "As a second unit in a villa, or as the only dehumidifier in a stone village house where the plaster has to cure calmly." },
      { key: "ttv4500", waarom: "A large open space has corners where the air stands still. **This fan spreads the dry air** across the whole screed." },
      { key: "radiaal2250", waarom: "For an extension with a new floor slab: this radial fan directs the airflow just over the slab, where most of the water is." },
    ],
    levering: {
      kop: "Delivering in Gerpinnes: beyond the Charleroi ring road",
      alinea:
        "We drive via Brussels, the A54 and the ring road around Charleroi, **just over an hour** in all. You choose a **delivery date**, and we agree the time with you. If the villa has a long drive, let us know whether the technician can drive up to the door. He sets up the units per zone and measures the moisture at the start.",
    },
    afhalen: {
      kop: "Collecting rarely pays off here",
      alinea:
        "With **just over an hour's drive** to Aartselaar, collecting is a half-day outing, and for a villa you need several units anyway. Have them delivered: the technician then sees straight away whether the number is right.",
    },
    buren: ["charleroi", "chatelet", "aiseau-presles", "ham-sur-heure-nalinnes"],
    faq: [
      {
        q: "How many dehumidifiers do I need for a villa with underfloor heating?",
        a: "That depends on the volume and the thickness of the screed. In a spacious villa it is often two or three, supplemented with a fan. The calculator gives a first estimate; the technician adjusts the number on site.",
      },
      {
        q: "Can I use the underfloor heating to dry the screed faster?",
        a: "That is for the screed contractor or the installer to decide: there is a heating-up protocol that raises the temperature step by step. A dehumidifier can run alongside it, because it removes the moisture that the heating drives out of the screed.",
      },
      {
        q: "Is drying risky for lime plaster in an old stone house?",
        a: "Not if it is done in a controlled way. Lime has to cure calmly, so the technician sets the humidistat to a target value instead of the maximum. That way the water comes out evenly and the plaster does not get shrinkage cracks.",
      },
      {
        q: "Do you also deliver in Loverval and the other districts?",
        a: "Yes. Loverval, Acoz, Gougnies, Joncret and Villers-Poterie belong to Gerpinnes and lie within our delivery zone. Mention the district with the address, and the planning will choose the shortest route.",
      },
    ],
    realisaties: [],
  },
  "les-bons-villers": {
    slug: "les-bons-villers",
    title: "Construction dehumidifier hire in Les Bons Villers | Vernast",
    description:
      "Dehumidifier hire in Les Bons Villers, Frasnes-lez-Gosselies, Rèves or Wayaux: converted farmhouses and village homes north of Charleroi. With a reading.",
    h1: "Construction dehumidifier hire in Les Bons Villers",
    kicker: "Hainaut · farming villages above Charleroi",
    rit: { afstand: "about 85 km", tijd: "about an hour" },
    intro: [
      "Les Bons Villers is a **rural municipality north of Charleroi**. It consists of **Frasnes-lez-Gosselies, Mellet, Rèves, Villers-Perwin and Wayaux**. Fields lie between the villages, and Charleroi airport is close by.",
      "You will find **courtyard farmhouses**, old village houses along the main street and **newer homes** on the edges of the villages. From Aartselaar we get there in about an hour. Any questions? Email us or ask by phone.",
    ],
    bouw: {
      kop: "Farmhouses becoming homes",
      alineas: [
        "**Converting a farmhouse into a home** means a stable or barn with high walls, a new floor slab and often a completely new interior finish. **That volume is large and open**, and moisture does not spread through it by itself. Several units, spread across the space and supplemented with a fan, work faster than one large unit in a corner.",
        "**In a new home on the edge of the village**, the moisture sits mainly in the floor slab, the screed and the masonry. As soon as the windows and doors are in, **a condensation dehumidifier extracts that residual moisture** before the finishing starts. As long as the space is open, drying makes little sense.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a barn or stable becoming a home**: 110 litres a day for a large, high volume with a new floor slab." },
      { key: "ttv4500", waarom: "In an open farm building, the air hangs between the high walls. This fan **gets it moving**, so the dehumidifiers find moisture everywhere." },
      { key: "ttk350", waarom: "For a new home on the edge of the village: 70 litres a day, enough for a ground floor with screed and plasterwork." },
      { key: "teddh30", waarom: "An unheated barn is too cold in winter to dry well. **The 30 kW site heater** brings the temperature up; allow for a 400 V connection." },
    ],
    levering: {
      kop: "Delivering in Les Bons Villers: right by the A54",
      alinea:
        "The municipality lies **close to the A54 between Nivelles and Charleroi**; from Aartselaar the drive takes about an hour. You choose a **delivery date** when you book, and we fix the time together. At a farmhouse with an inner courtyard, the technician drives up to the building, installs the units and measures the moisture in the floor and walls.",
    },
    afhalen: {
      kop: "Collecting is possible, but it is an hour's drive",
      alinea:
        "Aartselaar is **about an hour** away. There and back takes two hours, and you also bring the units back afterwards. For one unit in a small room that works; for a farmhouse, you are better off having them delivered.",
    },
    buren: ["pont-a-celles", "fleurus", "charleroi", "genepien"],
    faq: [
      {
        q: "How do I dry a converted barn with high walls?",
        a: "With several units spread across the space and a fan that keeps the air circulating. In a high volume, warm, damp air rises, and without air movement it lingers up there. The technician decides the set-up on site.",
      },
      {
        q: "Why does a new cellar dry so slowly?",
        a: "Because concrete contains a lot of water and a cellar has little ventilation. As long as the cellar is not finished, a condensation dehumidifier extracts the moisture from the air and from the walls. The reading at collection shows whether the values are low enough.",
      },
      {
        q: "Do you deliver in all the villages of Les Bons Villers?",
        a: "Yes, Frasnes-lez-Gosselies, Mellet, Rèves, Villers-Perwin and Wayaux all lie within our delivery zone. If the technician has to go through an inner courtyard at a farmhouse, let us know, so he can allow time for it.",
      },
      {
        q: "Can a dehumidifier keep running in a barn without heating?",
        a: "Yes, but below about 15 °C a condensation dehumidifier extracts much less water from the air. In winter we therefore add a site heater, or choose a desiccant dehumidifier, which also works in cold spaces.",
      },
    ],
    realisaties: [],
  },
};
