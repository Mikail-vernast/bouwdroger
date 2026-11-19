import type { Gemeente } from "../gemeenten.js";

/**
 * De Engelse teksten van de gemeentepagina's in deze provincie, gesleuteld op
 * de Nederlandse slug. Zie README.md in deze map voor de regels en hoe een
 * gemeente aangezet wordt (`aan/luik.ts`).
 */
export const GEMEENTEN: Record<string, Gemeente> = {
  "luik-stad": {
    slug: "luik-stad",
    title: "Construction dehumidifier hire in Liège City | Vernast",
    description:
      "Dehumidifier hire in Liège for the semi-basement of a town house, a cellar by the Meuse or Ourthe, or a home on the Coteaux. Delivered and installed.",
    h1: "Construction dehumidifier hire in Liège City",
    kicker: "Liège City · where the Meuse and the Ourthe meet",
    rit: { afstand: "about 125 km", tijd: "just over an hour" },
    intro: [
      "**Liège**, Luik in Dutch, lies in the Meuse valley, at the point where the Ourthe flows into the Meuse. Between the river channels lies the island of **Outremeuse**. Around the centre the districts climb steeply: the Coteaux of the citadel with the Montagne de Bueren staircase, Sainte-Walburge and Cointe.",
      "This page is about the city itself. You will find dense housing, narrow **sloping streets** and many homes more than a hundred years old. A dehumidifier here has to cope with the moisture, but it also has to get up the stairs and into the house. From our warehouse in Aartselaar it takes us just over an hour to drive to Liège.",
    ],
    bouw: {
      kop: "Town houses with a semi-basement, cellars at river level",
      alineas: [
        "Many **nineteenth-century town houses** in the centre and around Guillemins have a semi-basement: half a floor below street level, with walls against the soil. If you convert such a semi-basement into living space, fresh plasterwork has to dry in a cool room with little air exchange. A condensation dehumidifier works slowly there. With **a site heater alongside** or with a desiccant dehumidifier, it goes more smoothly.",
        "In Outremeuse and along the quays, the cellars lie low, close to the river. After high water or a leak, the moisture sits mainly **at the bottom of the walls**. During installation the technician checks whether water is still coming in. As long as it is, a dehumidifier only removes what is immediately replaced.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**For a semi-basement under a town house**, cool and with little air exchange. This desiccant dehumidifier keeps working in a cold room, where a condensation dehumidifier collects much less water." },
      { key: "ttk350", waarom: "For a floor in a divided town house with **high ceilings**: 70 litres a day, for rooms up to about 400 m³ with new plasterwork." },
      { key: "ttk170", waarom: "For a flat on the Coteaux or in Outremeuse: a **compact unit** that easily goes up a narrow staircase, with a capacity of 50 litres a day." },
      { key: "teddh30", waarom: "**For a cellar near the quays** that stays cold in winter. This 30 kW heater warms the room so the dehumidifier next to it works better. It needs a 400 V connection." },
    ],
    levering: {
      kop: "Delivery in Liège: via the E313, right up the hill",
      alinea:
        "We drive **via the E313 through Hasselt** and, outside rush hour, are on the road for just over an hour. You choose a delivery date when you book; in Wallonia we deliver by appointment. If the house is on a steep street or a narrow alley on the Coteaux, **let us know in advance**. The technician carries the unit the last stretch and puts it in place.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar: just over an hour's drive",
      alinea:
        "From Liège you drive **just over an hour** to our collection point in Aartselaar, and the same way back. For one dehumidifier that rarely pays off. For a semi-basement or a cellar on the Meuse, delivery is the better choice, because there the type of unit and the set-up determine the result.",
    },
    buren: ["herstal", "ans", "saint-nicolas", "seraing", "chaudfontaine"],
    faq: [
      {
        q: "How do you get a dehumidifier into a house on the Montagne de Bueren staircase or on the Coteaux?",
        a: "Where the van cannot get to the door, the technician carries the unit the last stretch, with a sack truck or by hand. When you book, describe how the house can be reached, with steps or alleys, and we will take that into account when planning.",
      },
      {
        q: "My semi-basement is becoming a studio flat. Which dehumidifier suits it?",
        a: "A semi-basement is cool and gets little fresh air. A condensation dehumidifier collects less water there than in a warm room. A desiccant dehumidifier, or a condensation dehumidifier with a site heater alongside, works better. If moisture is still coming from the ground through the wall, have that solved first.",
      },
      {
        q: "Do you also work in Outremeuse, Chênée and Angleur?",
        a: "Yes. Outremeuse, Chênée and Angleur are part of the city of Liège and within our delivery area. Close to the Ourthe and the Meuse it is often about cellars. When you book, tell us whether there has been standing water and how high, and the technician will bring the right units.",
      },
      {
        q: "Can I have a delivery in central Liège without a parking space?",
        a: "Usually, yes. The van stops briefly while the technician unloads, and for one or two units that does not take long. If your street has a time window for deliveries or the house is in a pedestrian zone, let us know. We agree the delivery time with you.",
      },
      {
        q: "Can I ask my questions in French?",
        a: "Questions in French? Feel free to email or call us. When you book, also tell us who will receive the technician on site and how he can reach that person, so the delivery in Liège goes smoothly.",
      },
    ],
    realisaties: [],
  },
  verviers: {
    slug: "verviers",
    title: "Hire a construction dehumidifier in Verviers | Vernast",
    description:
      "Dehumidifier hire in Verviers for a loft in an old wool mill, a terraced house on the slope or a cellar in the Vesdre valley. Delivered and installed for you.",
    h1: "Construction dehumidifier hire in Verviers",
    kicker: "Liège · the wool town on the Vesdre",
    rit: { afstand: "about 150 km", tijd: "over an hour and a half" },
    intro: [
      "In the nineteenth century Verviers became **the country's wool town**. The soft water of the Vesdre was well suited to washing wool, and spinning mills, wool-washing plants and weaving mills grew up along the river. Many of those factory buildings are still standing and are getting a new use as lofts or offices.",
      "Around the old core the streets climb steeply up the slopes, towards **Heusy, Stembert, Ensival and Lambermont**. In July 2021 the Vesdre floods hit many homes in the low-lying districts. From our warehouse in Aartselaar it takes us over an hour and a half to drive to Verviers.",
    ],
    bouw: {
      kop: "Factory halls, hillside houses and cellars by the river",
      alineas: [
        "**Converting a wool mill into lofts** means thick brick walls, concrete floors with a new screed and completely new interior finishes. The volumes are large and the ceilings high, so one compact unit per floor is not enough. The technician divides the space into drying zones and puts the right capacity in each zone.",
        "**On the slope**, the back wall of a terraced house is often half in the ground. Rainwater running down the slope presses against that wall, and that is a different problem from construction moisture. In the homes that stood under water in 2021, walls and floors are sometimes still wet to the core. They have to dry out before finishing starts again.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a floor in a converted wool mill**: 110 litres a day and a range of up to about 600 m³, suited to high ceilings and open-plan floors." },
      { key: "ttv4500", waarom: "In a factory hall, damp air lingers in the corners. This fan moves **4,500 m³ of air an hour**, so the dehumidifier reaches the whole space." },
      { key: "ttk350", waarom: "**For a terraced house against the slope**, per floor: 70 litres a day, enough for a ground floor with new plaster or screed." },
      { key: "revolution", waarom: "**For a cold cellar against the slope**, where a condensation dehumidifier achieves little: this desiccant dehumidifier keeps extracting moisture even at low temperatures." },
    ],
    levering: {
      kop: "Delivery in Verviers: via the E40 down into the valley",
      alinea:
        "From Aartselaar we drive over an hour and a half, **via the E313 and the E40**, to the Verviers exit. You choose a delivery date when you book, and we agree the time with you. In the centre the streets are steep and narrow. Let us know in advance whether the technician can stop outside the door, and he will bring a sack truck for the last few metres.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar: over three hours there and back",
      alinea:
        "Our collection point is over an hour and a half's drive from Verviers. So you are on the road for **over three hours there and back**, both when collecting and when returning. For a factory loft with several units, that is not an option. If you choose delivery, the technician places the units and measures the moisture in the wall and floor.",
    },
    buren: ["dison", "pepinster", "limbourg", "jalhay"],
    faq: [
      {
        q: "Can you dry a loft in an old wool mill?",
        a: "Yes. Because of the large volumes and high ceilings, we usually place a heavy-duty condensation dehumidifier with a fan in each zone there, rather than one unit for the whole space. When you book, give us the floor area and the ceiling height, and we will put the combination together in advance.",
      },
      {
        q: "Our home was under water in 2021. Is drying still worthwhile now?",
        a: "Often, yes. Walls that got wet to the core back then and were finished quickly afterwards may still hold moisture that is released during a new renovation. During installation the technician measures how much moisture is still in the wall and floor, so you know whether a dehumidifier will help here.",
      },
      {
        q: "Is the moisture in my hillside house coming from inside or outside?",
        a: "The technician works that out first. If it is construction moisture from plaster or screed, a dehumidifier removes it. If water from the slope is pushing through the back wall, a dehumidifier keeps the room usable, but the cause remains. That needs drainage or sealing on the outside.",
      },
      {
        q: "Do you also deliver in Heusy, Stembert and Ensival?",
        a: "Yes, we deliver in all parts of the municipality of Verviers, including the districts high above the valley. When you book, give the full address and whether the street is steep, and the technician will take that into account when loading and unloading.",
      },
    ],
    realisaties: [],
  },
  berloz: {
    slug: "berloz",
    title: "Dehumidifier hire in Berloz, near Waremme | Vernast",
    description:
      "Dehumidifier hire in Berloz, Corswarem or Rosoux-Crenwick? Units delivered and set up for renovations, new screeds and farmhouses, near Gingelom and Waremme.",
    h1: "Construction dehumidifier hire in Berloz",
    kicker: "Province of Liège · on the Limburg border",
    rit: { afstand: "about 100 km", tijd: "about an hour" },
    intro: [
      "Berloz is a small farming municipality with three villages: **Berloz, Corswarem and Rosoux-Crenwick**. To the north it borders **Gingelom** in Limburg, and Waremme is the nearest town. From Aartselaar it takes us **about an hour** to drive there.",
      "The landscape looks the same on both sides of the language border: **rolling loam fields**, beet and grain, and the odd fruit tree. The villages grew up around a church and a few large **farmhouses**. Along the roads into the villages stand homes from the second half of the last century, and a few new building plots have been added.",
    ],
    bouw: {
      kop: "Farmhouses, post-war homes and the loam beneath",
      alineas: [
        "**Homes from the sixties and seventies** are being renovated on a large scale here: insulation, new windows and often a new floor with underfloor heating. That calls for **a thick screed**, and it has to be dry enough before you start up the underfloor heating and lay tiles or parquet on it.",
        "On **loam soil**, rainwater drains away slowly. A crawl space or a floor laid directly on the ground can therefore be damper than you expect. **Construction moisture disappears with a dehumidifier**, but moisture that keeps coming up from the ground needs a different approach.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a new screed with underfloor heating** in a renovated home: 70 litres a day, for an entire ground floor." },
      { key: "ttv4500", waarom: "Over a large floor area, this fan keeps the air moving, so **the screed dries evenly everywhere** and not just next to the dehumidifier." },
      { key: "ttk170", waarom: "**For a bathroom or bedroom** that is being replastered on its own: compact, economical at 0.75 kW and easy to carry upstairs." },
      { key: "ttk650", waarom: "For **a farmhouse in Corswarem or Rosoux-Crenwick** with large volumes under the roof: 110 litres a day." },
    ],
    levering: {
      kop: "Delivery in Berloz: along the E40 to Waremme",
      alinea:
        "We drive **about an hour** from Aartselaar, along the E40 to the Waremme exit and then a few kilometres north. We plan the trip around the **delivery date** you choose when you book; the exact time follows by appointment. The technician sets up and adjusts the units and explains **how to empty the tank** or where the drain hose should go.",
    },
    afhalen: {
      kop: "Collecting is possible, but it is a long drive",
      alinea:
        "Our collection point is **about an hour's drive** from Berloz, so you are on the road for two hours. For one small unit for a bathroom that can work, provided the dehumidifier fits upright in your car. For a screed with underfloor heating you are better off having it delivered, because then the set-up counts too.",
    },
    buren: ["gingelom", "borgworm", "geer"],
    faq: [
      {
        q: "When can the underfloor heating go on after the screed has been poured?",
        a: "That is for the supplier of the screed or of the underfloor heating to decide. Usually it happens after a few weeks, with a start-up schedule in which the temperature rises step by step. A dehumidifier speeds up drying, but it does not replace that schedule. Ask your screed layer for his guidelines.",
      },
      {
        q: "Is a crawl space on loam soil often damp?",
        a: "On loam soil there is often more moisture in a crawl space than on sand, because the water drains away slowly. During a renovation, check whether the moisture in the floor is construction moisture or comes from the ground. If it comes from the ground, ventilation or a damp-proof membrane helps more than a dehumidifier.",
      },
      {
        q: "Do you also deliver on the Limburg side, in Gingelom?",
        a: "Yes. Gingelom and the other Limburg municipalities on the language border each have their own page, and we deliver there too. On both sides of the border you will find the same loam and the same kind of homes, so the approach is the same as well.",
      },
      {
        q: "Can I carry a construction dehumidifier upstairs myself?",
        a: "Our smallest dehumidifier, at 50 litres a day, can be carried up the stairs by two people. The larger units are a good deal heavier. With a delivery, the technician takes them to the right room himself, even if it is on an upper floor.",
      },
    ],
    realisaties: [],
  },
  borgworm: {
    slug: "borgworm",
    title: "Construction dehumidifier hire in Waremme | Vernast",
    description:
      "Dehumidifier hire in Waremme for a new build on an estate, an old house near the station or a converted farmhouse. Delivery by appointment, with set-up.",
    h1: "Construction dehumidifier hire in Waremme",
    kicker: "Liège · the heart of the Walloon Hesbaye",
    rit: { afstand: "about 105 km", tijd: "just over an hour" },
    intro: [
      "Waremme, Borgworm in Dutch, is the main town of the Walloon Hesbaye. It lies on the Jeker, which is called the Geer here, and has a station on **the Brussels-Liège railway line**. Via the E40 you are quickly in Liège or Brussels. From our warehouse in Aartselaar it takes us just over an hour to drive there.",
      "The town also includes Bettincourt, Bleret, Bovenistier, Grand-Axhe, Lantremange and Oleye. There you still see **enclosed farmhouses** among the fields, next to new housing estates for people who work in Liège or Brussels.",
    ],
    bouw: {
      kop: "Station district, housing estates and farmhouses",
      alineas: [
        "Around the station stand **older terraced houses and town houses**, often with a cellar and no damp-proof course. If you rip out a bathroom or have the walls replastered, the old brick releases its water slowly. A dehumidifier with a fan next to it then does more than an open window.",
        "In the villages it is more often a new build on an estate or **a barn becoming a home**. A barn like that has large, high rooms and often a thick screed. When putting together the drying package, start from the volume of the room, not just the floor area.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a new-build home on a housing estate**: 70 litres a day and suitable up to about 400 m³, enough for a ground floor with fresh screed." },
      { key: "ttk650", waarom: "For **a converted barn or stable** with high ceilings and a thick screed: 110 litres a day and suitable up to about 600 m³." },
      { key: "ttv4500", waarom: "Gets the air moving along the **old brick walls of a house near the station**, so the plasterwork dries evenly." },
      { key: "ttk170", waarom: "For a flat or an upper floor in the centre: compact, 0.75 kW on a standard socket and easy to take up the stairs." },
    ],
    levering: {
      kop: "Delivery in Waremme: by appointment, via the E40",
      alinea:
        "We drive **via the E40** to Waremme, just over an hour from Aartselaar. You choose a delivery date when you book. In Wallonia we deliver **by appointment**, so we fix the time together with you. If you have a farmhouse with an inner courtyard, let us know whether the van can get through the gate. The technician puts the units straight into the wettest rooms.",
    },
    afhalen: {
      kop: "Collecting from Waremme takes half a day",
      alinea:
        "Our collection point in Aartselaar is **just over an hour's drive** away. Add the return and you cover that distance four times. A dehumidifier also has to be **transported upright**. For one small unit it can work, but for a complete package delivery is the sensible choice.",
    },
    buren: ["berloz", "oerle", "remicourt", "donceel", "faimes"],
    faq: [
      {
        q: "We are converting the barn of a courtyard farmhouse. How many dehumidifiers do we need?",
        a: "That depends on the volume of the barn and the thickness of the screed. With high ceilings we calculate in cubic metres, not square metres. Give us the dimensions when you book, and we will put the combination of dehumidifiers and fans together in advance.",
      },
      {
        q: "Do you also come to Bovenistier, Oleye or Grand-Axhe?",
        a: "Yes, we deliver in all parts of the municipality of Waremme. For an address in the countryside, let us know whether there is a gate or a narrow drive. Then the technician knows how close to the door he can get with the van.",
      },
      {
        q: "What do I do first if there is water in my excavation or cellar?",
        a: "First pump out the standing water and make sure no new water gets in. A construction dehumidifier removes moisture from the air, the screed and the walls, but not puddles. Then we set up the dehumidifier and the technician measures how wet the floor and walls still are.",
      },
      {
        q: "Can I hire a construction dehumidifier for an old house near the station?",
        a: "Yes. In an older terraced house without a damp-proof course, the technician measures how wet the walls are at the start. At collection you can then see whether the construction moisture has gone, or whether moisture keeps coming up from below and needs a different approach.",
      },
    ],
    realisaties: [],
  },
  braives: {
    slug: "braives",
    title: "Dehumidifier hire in Braives, Mehaigne valley | Vernast",
    description:
      "Dehumidifier hire in Braives, Fallais, Latinne or Avennes? We deliver and set up units for farmhouses, stone houses and new builds in the Mehaigne valley.",
    h1: "Construction dehumidifier hire in Braives",
    kicker: "Province of Liège · the Mehaigne and the old Roman road",
    rit: { afstand: "about 105 km", tijd: "just over an hour" },
    intro: [
      "Braives lies in **the Mehaigne valley**, where the open Hesbaye plateau gives way to a landscape with more relief. The municipality includes **Avennes, Ciplet, Fallais, Fumal, Latinne, Tourinne and Ville-en-Hesbaye**. From Aartselaar it takes us **just over an hour** to drive there.",
      "In Roman times **the road from Bavay to Tongeren** ran through here. Today Braives is a farming municipality with **farmhouses in brick and limestone**, village centres in the valley and newer homes on the slopes above.",
    ],
    bouw: {
      kop: "Stone houses in the valley, new builds on the slope",
      alineas: [
        "**In the Mehaigne valley** stand older houses with a **limestone** plinth and brick walls. Thick walls stay cold for a long time, and a cold wall releases its moisture slowly. That is why such a house feels cool and damp for a long time after a renovation. **Heat and air movement** often help more there than a second dehumidifier.",
        "On the slopes and the plateau it is mostly **new builds and conversions**. There everything revolves around the schedule: **screed and plasterwork** have to be dry before finishing, and in a wet autumn or winter that runs late. A dehumidifier that matches the volume of the home helps you keep to that schedule.",
      ],
    },
    toestellen: [
      { key: "teddh30", waarom: "**For a stone house that stays cold for a long time**: this 30 kW heater on three-phase power brings the ground floor to a temperature at which the dehumidifier works well." },
      { key: "ttv4500", waarom: "Along **a thick wall with a limestone plinth** it blows away the layer of damp air, so the wall releases its moisture faster." },
      { key: "ttk350", waarom: "For **a new build on the slope** above the Mehaigne: 70 litres a day, for rooms up to about 400 m³." },
      { key: "ttk650", waarom: "For **a farmhouse being renovated in one go**, with new floors and plasterwork in every wing: 110 litres a day." },
    ],
    levering: {
      kop: "Delivery in Braives: the E40 and then down into the valley",
      alinea:
        "We drive **just over an hour** from Aartselaar, along the E40 and then south into the Mehaigne valley. You fix a **delivery date** when you book, and because we deliver by appointment in Wallonia, we still agree the time with you. In the narrow village streets, let us know where the van can stop for a moment. The technician then sets up the units room by room.",
    },
    afhalen: {
      kop: "Collecting: more than two hours there and back",
      alinea:
        "Our collection point in Aartselaar is **just over an hour** from Braives. If you have to go to Antwerp anyway, you can take a small dehumidifier with you. For a stone house or a farmhouse you are better off with **delivery**: there the set-up of dehumidifier, heater and fan determines how quickly it dries.",
    },
    buren: ["hannuit", "wasseiges", "burdinne", "geer"],
    faq: [
      {
        q: "Why is my stone house on the Mehaigne drying so slowly?",
        a: "Limestone and thick brick walls hold on to the cold, and cold walls release their moisture slowly. As long as the room stays below 15 °C, a condensation dehumidifier also works less well. Adding a heater and a fan along the wettest wall then makes more difference than a bigger unit.",
      },
      {
        q: "How do you tackle a farmhouse with several wings?",
        a: "Wing by wing, with the doors between the parts closed. A dehumidifier in one wing does little for the wing next to it. We look at the volume per room and add an extra unit or a fan where needed.",
      },
      {
        q: "Is a cellar in the Mehaigne valley always damp?",
        a: "Not always. Close to the river the groundwater can be higher, though, and an old cellar without a waterproof layer notices that. After a renovation a dehumidifier removes the construction moisture. If the bottom of the wall stays wet, water is coming in from outside and that cause has to be tackled first.",
      },
      {
        q: "When can the painter start after plastering?",
        a: "As soon as the plasterwork is dry enough for the paint he uses. How long that takes depends on the thickness of the layer, the temperature and the humidity. A dehumidifier in a closed, heated room speeds it up, but let the painter take a reading before he starts.",
      },
    ],
    realisaties: [],
  },
  crisnee: {
    slug: "crisnee",
    title: "Hire a construction dehumidifier in Crisnée | Vernast",
    description:
      "Dehumidifier hire in Crisnée, Kemexhe, Odeur, Thys or Fize-le-Marsal: for a new build on an estate or a village renovation. Set up by appointment.",
    h1: "Construction dehumidifier hire in Crisnée",
    kicker: "Liège · between the plateau and the edge of Liège",
    rit: { afstand: "about 110 km", tijd: "just over an hour" },
    intro: [
      "Crisnée lies **on the eastern edge of the Walloon Hesbaye**, where the open farming plateau gives way to the outskirts of Liège. The municipality includes Fize-le-Marsal, Kemexhe, Odeur and Thys, villages that grew up around their farmhouses.",
      "Because **the E40** is close by, housing estates have been added over the past decades, for families who work in Liège and want to live in the countryside. So alongside the old farm buildings there are many new builds. From Aartselaar we get there in just over an hour.",
    ],
    bouw: {
      kop: "New builds on the estate, renovation in the village centre",
      alineas: [
        "**On a new housing estate**, construction drying is all about the schedule. The screed has to be dry before the parquet layer or the tiler starts, and the plasterwork before the painter arrives. All that construction moisture has to leave the house before you move in.",
        "**In the village centres** it is about older homes and brick farmhouses. There a kitchen or bathroom is often renewed while the family stays in the house. A compact unit on a standard socket then suits better than the biggest dehumidifier.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a new build on an estate near Crisnée**: at 70 litres a day it keeps a ground floor with fresh screed on schedule." },
      { key: "ttv4500", waarom: "In an open-plan new build it gets the air moving over the whole floor, so the screed dries **evenly everywhere** and not just next to the dehumidifier." },
      { key: "ttk170", waarom: "For a **bathroom or kitchen in a lived-in house**: compact, 0.75 kW, and it fits in the room you are renovating." },
      { key: "ttk650", waarom: "For a large home or converted farmhouse where everything is screeded and plastered at the same time: 110 litres a day, suitable up to about 600 m³." },
    ],
    levering: {
      kop: "Delivery in Crisnée: right by the E40",
      alinea:
        "Crisnée is **close to the E40**, just over an hour's drive from Aartselaar. You choose **a delivery date** when you book. Because we deliver by appointment in Wallonia, we fix the moment with you in advance. In a new build the technician asks where the screed is thickest. That is where the dehumidifier goes, with the fan next to it.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar is a long drive from Crisnée",
      alinea:
        "Our collection point is **just over an hour's drive** away, so collecting alone already costs you half a day. A dehumidifier also has to stand upright in the car. For a new build with several units, delivery is simpler: everything comes in one trip and is set up on site.",
    },
    buren: ["oerle", "fexhe-le-haut-clocher", "awans", "juprelle"],
    faq: [
      {
        q: "When can the parquet go on the screed in our new build in Crisnée?",
        a: "As soon as the screed is below the value the parquet layer specifies. He measures the residual moisture himself, but with a dehumidifier of the right size you reach that value sooner. Our technician takes a reading at the start, so you know where you are starting from.",
      },
      {
        q: "Can a construction dehumidifier keep running while we live in the house?",
        a: "Yes. Put the dehumidifier in the room being renovated and keep the door shut. Then that room dries faster and the rest of the house hardly notices. The smallest dehumidifier runs on a standard socket.",
      },
      {
        q: "How many units does a new-build home need?",
        a: "That depends on the volume, the thickness of the screed and the amount of plasterwork. For a family home it is often one dehumidifier per storey with a fan alongside. In the calculator you can see the price of the package before you book.",
      },
      {
        q: "Do you also drive to Kemexhe and Odeur?",
        a: "Yes, we deliver in all parts of the municipality of Crisnée, including the smaller villages. If the address is on a country lane, let us know whether the van can turn there. Then the technician takes that into account.",
      },
    ],
    realisaties: [],
  },
  donceel: {
    slug: "donceel",
    title: "Construction dehumidifier hire in rural Donceel | Vernast",
    description:
      "Dehumidifier hire in Donceel, Haneffe, Jeneffe or Limont: for thick-walled farmhouses and new builds on the Hesbaye plateau. Moisture reading at the start.",
    h1: "Construction dehumidifier hire in Donceel",
    kicker: "Liège · a rural municipality near Waremme",
    rit: { afstand: "about 110 km", tijd: "just over an hour" },
    intro: [
      "Donceel is a small farming municipality near Waremme, with the villages of Haneffe, Jeneffe and Limont. You will find **the open loam plateau** of the Walloon Hesbaye here: fields, scattered farmhouses and villages along a few roads.",
      "There is no town centre. Anyone building or renovating here is usually working on **an old house with thick walls** or on a new home on the edge of a village. From Aartselaar it takes us just over an hour to drive there.",
    ],
    bouw: {
      kop: "Thick walls, cold rooms and fresh screed",
      alineas: [
        "An old farmhouse or village house has **thick brick walls** that hold a lot of water. After new plasterwork or a roof leak, such a wall dries slowly. A moisture reading at the start shows where you are starting from, so you can see later how far the drying has progressed.",
        "On the open plateau the wind has free rein, and **a shell without windows cools down quickly**. If you pour a screed in winter, drying slows down as soon as it is colder than 15 °C inside. An electric heater next to the dehumidifier keeps the site at temperature.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "For **an old home being renovated floor by floor**: 70 litres a day, suitable up to about 400 m³." },
      { key: "teddh30", waarom: "**For a winter site on the plateau**: keeps a shell above 15 °C, so the condensation dehumidifier performs. It runs on 400 V three-phase power." },
      { key: "ttv4500", waarom: "Carries the saturated air away along **a thick brick wall**, so that wall dries more evenly." },
      { key: "ttk170", waarom: "For a smaller job, such as a bathroom or a bedroom after a roof leak: compact, 0.75 kW and easy to move." },
    ],
    levering: {
      kop: "Delivery in Donceel: via the E40 and the country roads",
      alinea:
        "We drive via the E40 to near Waremme and then up onto the plateau, just over an hour in total. You choose **a delivery date** when you book; we agree the exact moment with you. If the address is on a narrow country lane or behind a farm gate, say so in advance. Then the technician knows how to get there.",
    },
    afhalen: {
      kop: "Collecting from Donceel takes a good part of the day",
      alinea:
        "Aartselaar is **just over an hour's drive** away, and collecting and returning means two round trips. For an old home that needs a long time to dry, it is rarely worth it. With delivery, the technician measures **the walls at the start**, and in an old house that is something you want to know.",
    },
    buren: ["faimes", "remicourt", "borgworm", "verlaine"],
    faq: [
      {
        q: "How long does it take to dry an old farmhouse after a renovation?",
        a: "That depends on the thickness of the walls, the material, the temperature and the amount of moisture. That is why we do not give a fixed period. The technician takes a reading at the start, so you can compare later how much moisture has already gone.",
      },
      {
        q: "Can I have a screed dried in an unheated new build in winter?",
        a: "Yes, but with heat added. Cold air absorbs little moisture, and below 15 °C a condensation dehumidifier works slowly. An electric heater next to the dehumidifier keeps the room at temperature. Note that this heater needs a 400 V connection.",
      },
      {
        q: "Do you also deliver in Haneffe, Jeneffe and Limont?",
        a: "Yes, those parts of Donceel are within our delivery area. For an address in the countryside, we ask when you book how the van can best reach the house, especially for a farmhouse with an inner courtyard.",
      },
      {
        q: "My roof leaked and a bedroom is wet. Is one dehumidifier enough?",
        a: "For one room the smallest dehumidifier is usually enough, possibly with a fan against the wettest wall. Have the roof repaired first, otherwise more water will come in. If the insulation under the roof is wet too, let us know, because it dries differently from a wall.",
      },
    ],
    realisaties: [],
  },
  faimes: {
    slug: "faimes",
    title: "Dehumidifier hire in Faimes and its five villages | Vernast",
    description:
      "Dehumidifier hire in Faimes, Celles, Viemme, Les Waleffes, Borlez or Aineffe: for farmhouses and village homes in the Walloon Hesbaye. Delivered and set up.",
    h1: "Construction dehumidifier hire in Faimes",
    kicker: "Liège · five villages on the loam plateau",
    rit: { afstand: "about 105 km", tijd: "just over an hour" },
    intro: [
      "Faimes lies **south of Waremme** and is made up of Aineffe, Borlez, Celles, Les Waleffes and Viemme. It is a farming municipality in the Walloon Hesbaye, with fields on the loam plateau and large farmhouses in every village.",
      "The villages are small and close together. For work, residents usually drive to **Waremme, Huy or Liège**. Most building work is on old homes, with the occasional new build. The drive from Aartselaar takes just over an hour.",
    ],
    bouw: {
      kop: "Farmhouses that become homes",
      alineas: [
        "Many farmhouses in Faimes are **courtyard farmhouses**: house, stables and barn around an inner courtyard. If you convert a stable or barn into living space, you get new floors, insulation and a lot of plasterwork in large rooms that were never heated.",
        "**The farmhouse itself** has thick brick walls, sometimes with a cellar under part of the house. If you remove old plaster or a floor, moisture that has been in the wall for a long time is released. A reading at the start shows whether it is construction moisture or moisture rising from below.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a stable or barn becoming living space**: 110 litres a day for a large volume, up to about 600 m³." },
      { key: "radiaal2250", waarom: "Blows in a targeted way over the new floor of a converted stable, so **edges and corners** dry as fast as the middle. With IP55 it can cope with a dusty site." },
      { key: "teddh30", waarom: "Brings a room that was never heated **above 15 °C**, so the dehumidifier reaches its capacity. Allow for a 400 V connection." },
      { key: "ttk350", waarom: "For the farmhouse itself or a village home under renovation: 70 litres a day and usable up to about 400 m³." },
    ],
    levering: {
      kop: "Delivery in Faimes: right into the courtyard",
      alinea:
        "We drive **via the E40 to near Waremme** and then on to the village, just over an hour from Aartselaar. You choose a delivery date when you book. We agree the time with you, so someone can let the technician in. For a farmhouse, let us know whether the van can get into the courtyard. The technician places the units room by room and aims the fans at the wettest floors.",
    },
    afhalen: {
      kop: "Collecting from Faimes is rarely worth it",
      alinea:
        "A drive to Aartselaar takes **just over an hour**, and for a converted barn you will quickly need several units. They will not all fit in a car. Have them delivered: everything comes in one trip and is set up on site.",
    },
    buren: ["borgworm", "donceel", "geer"],
    faq: [
      {
        q: "We are converting a stable into a home. Where does the drying start?",
        a: "With the new screed, because that is where most of the water is. Only when it is dry enough can the floor finish go on. A large dehumidifier with a radial fan over the floor works well here; in winter a heater is added.",
      },
      {
        q: "How do I know whether my old wall has construction moisture or rising damp?",
        a: "By measuring at different heights. Construction moisture is spread over the wall and decreases with a dehumidifier. Rising damp is highest at the bottom and keeps coming back. The technician takes readings at the start and tells you what picture he sees.",
      },
      {
        q: "Can you deliver to a farmhouse if the gate is narrow?",
        a: "Usually, yes. Most units are on wheels, and the technician can push them some distance. When you book, tell us how wide the gate is and how far the site is from the street, and we will plan the delivery accordingly.",
      },
      {
        q: "Do you also deliver in Celles and Viemme?",
        a: "Yes, all five villages of Faimes are within our delivery area: Aineffe, Borlez, Celles, Les Waleffes and Viemme. In Wallonia we deliver by appointment; you choose the delivery date when you book.",
      },
    ],
    realisaties: [],
  },
  "fexhe-le-haut-clocher": {
    slug: "fexhe-le-haut-clocher",
    title: "Dehumidifier hire in Fexhe-le-Haut-Clocher | Vernast",
    description:
      "Dehumidifier hire in Fexhe-le-Haut-Clocher, Freloux, Noville, Roloux or Voroux-Goreux: for new builds and farmhouses between Waremme and Liège. By appointment.",
    h1: "Construction dehumidifier hire in Fexhe-le-Haut-Clocher",
    kicker: "Liège · the village of the Peace of Fexhe",
    rit: { afstand: "about 115 km", tijd: "just over an hour" },
    intro: [
      "You may know Fexhe-le-Haut-Clocher from **the Peace of Fexhe** of 1316, which limited the power of the prince-bishop of Liège. Today it is a rural municipality with the villages of Freloux, Noville, Roloux and Voroux-Goreux.",
      "The municipality lies **between Waremme and Liège**, not far from Liège Airport at Bierset. That location attracts families who work in the Liège area, so alongside farmhouses and village houses there are new homes too. From Aartselaar you get there by car in just over an hour.",
    ],
    bouw: {
      kop: "Between the plateau and the edge of the city",
      alineas: [
        "**On a new housing estate** it is about screed, plasterwork and sometimes a cellar under construction. If the excavation or cellar stood open during a wet spell, there is extra water in the floor and walls. A dehumidifier with enough capacity then keeps the floor layer's schedule achievable.",
        "**In the old village centres** stand brick houses and farmhouses, sometimes with a ground floor lower than the street. If you renew a floor or knock out a wall there, you often find more moisture than expected. The technician takes readings during installation, so you know what you are taking on.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a new-build home in Voroux-Goreux or Fexhe**: at 70 litres a day it dries a ground floor with fresh screed." },
      { key: "revolution", waarom: "For **a cellar under construction** that stays cold and clammy: the desiccant dehumidifier absorbs moisture even at low temperatures and dries via ducting." },
      { key: "ttv4500", waarom: "In a ground floor that lies lower than the street it gets the air moving, so **the bottom of the walls** dries too." },
      { key: "ttk170", waarom: "For a renovation in a village house: compact, 0.75 kW and easy to carry upstairs." },
    ],
    levering: {
      kop: "Delivery in Fexhe: along the E40 towards Liège",
      alinea:
        "Fexhe is **close to the E40, just before Liège**, just over an hour's drive from Aartselaar. You choose the delivery date yourself when you book; we agree the exact time with you. For a new build, tell us **which rooms have already been screeded**. The technician puts the dehumidifier there first and aims the fan at the wettest floor.",
    },
    afhalen: {
      kop: "Collecting from Fexhe: just over an hour each way",
      alinea:
        "It is **just over an hour's drive** to our collection point in Aartselaar, and the same back. A dehumidifier also has to travel upright. For one small unit it can work, but for a package delivery is less work.",
    },
    buren: ["crisnee", "awans", "remicourt", "grace-hollogne"],
    faq: [
      {
        q: "Our cellar under construction stood open in the rain for weeks. What now?",
        a: "First pump out the standing water, and only then dry. In a cold, wet cellar a desiccant dehumidifier works better than a condensation dehumidifier, because it absorbs moisture even at low temperatures. Tell us how big the cellar is when you book.",
      },
      {
        q: "Can you deliver right next to Liège Airport at Bierset?",
        a: "Yes. Fexhe and the municipalities around the airport are within our delivery area. You choose a delivery date when you book, and the technician places the units and sets them up on site.",
      },
      {
        q: "Why is my screed drying more slowly than the screed layer promised?",
        a: "Often the room is too cold or poorly ventilated, or the screed is thicker than planned. In still air, the layer above the floor becomes saturated. A dehumidifier with a fan next to it carries that moisture away, and the reading at the start gives you a starting point.",
      },
      {
        q: "Is a construction dehumidifier needed in a new build when it is dry outside?",
        a: "Usually, yes. Even in dry weather there is a lot of water in the floor and walls of a new build, and with the windows shut it has nowhere to go. Open windows help a little, but a dehumidifier removes the moisture in a more targeted way and faster.",
      },
    ],
    realisaties: [],
  },
  geer: {
    slug: "geer",
    title: "Dehumidifier hire in Geer, on the upper Jeker | Vernast",
    description:
      "Dehumidifier hire in Geer, Hollogne-sur-Geer, Omal, Darion or Boëlhe? We deliver and set up units for farmhouses and village houses along the upper Jeker.",
    h1: "Construction dehumidifier hire in Geer",
    kicker: "Province of Liège · along the young Jeker",
    rit: { afstand: "about 105 km", tijd: "just over an hour" },
    intro: [
      "Geer bears the French name of **the Jeker**, which here is still a narrow stream on its way to Tongeren and Maastricht. It flows past **Hollogne-sur-Geer**, and **Boëlhe, Darion, Ligney, Lens-Saint-Servais and Omal** also belong to the municipality.",
      "It is open farming country with **courtyard farmhouses**, beet and grain, and villages that grew up along the stream valley. Beneath the loam lies **chalk** with an important aquifer. From Aartselaar it takes us **just over an hour** to drive to Geer.",
    ],
    bouw: {
      kop: "A stream valley in the plateau, farmhouses on the edge",
      alineas: [
        "Along the Jeker the village houses lie **lower than the fields** around them. After a wet winter the groundwater in the valley is higher, and an old cellar or a floor laid directly on the ground **notices it**. So during a renovation, first check whether water is still coming up from below. Drying only makes sense once the cause has gone.",
        "Higher up on the plateau stand **enclosed farmhouses** with a house, stables and barns around a yard. Anyone turning one into a home or a holiday let pours **new floors** and plasters large wall areas. A project like that proceeds in phases. A dehumidifier that moves from wing to wing keeps the finishing on schedule.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a village house on the Jeker** after a ground-floor renovation: 70 litres a day, on a standard socket." },
      { key: "radiaal2250", waarom: "Over **a renewed floor laid on the ground** that stays wet, this radial fan blows air in a targeted way right into the corners." },
      { key: "ttk650", waarom: "**For a farmhouse wing with a new floor and plasterwork** in one open volume: 110 litres a day, for rooms up to about 600 m³." },
      { key: "teddh30", waarom: "Stables and barns have never been heated. This 30 kW heater on three-phase power brings the room up to temperature, so **the dehumidifier can work properly**." },
    ],
    levering: {
      kop: "Delivery in Geer: along the E40, Waremme exit",
      alinea:
        "We take **the E40 to Waremme** and then drive a few kilometres west to the Jeker, **just over an hour** in all from Aartselaar. When you book you choose a **delivery date**, after which we agree the delivery time with you by phone. If the farmhouse has an inner courtyard, let us know **whether the gateway is high enough** for a van. Otherwise we unload outside.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar: usually a detour from Geer",
      alinea:
        "There and back you are on the road for **over two hours**, and anyone who works in the area rarely passes Antwerp. A delivery saves you that drive. The technician who brings the units also records **a first moisture reading**, so you can see later whether it is drying.",
    },
    buren: ["hannuit", "braives", "berloz", "borgworm"],
    faq: [
      {
        q: "Is a cellar close to the Jeker more likely to end up in the groundwater?",
        a: "It can be, especially after a wet winter, when the water in the valley is higher. A dehumidifier removes construction moisture from walls and floor, but not water that keeps flowing in. In that case the waterproofing or drainage has to be sorted out first.",
      },
      {
        q: "How do I dry a stable that is becoming living space?",
        a: "In phases and with the room closed off. First close the openings, then pour the new floor and after that let a large dehumidifier run with a heater. An old stable has cold walls, and without heat drying there is slow.",
      },
      {
        q: "Who needs to be on site for the delivery?",
        a: "Someone who can open up and knows which rooms the units should go in. That can also be your contractor. Give us his name and phone number when you book, and we will make the appointment with him directly.",
      },
      {
        q: "How many weeks does a dehumidifier stay in a farmhouse after the floor is poured?",
        a: "That depends on the thickness of the screed, the temperature in the room and the humidity. In a cold stable with a thick floor it takes longer than in a heated home. Have the floor layer take a reading before he starts, because only that reading tells you whether the floor is ready.",
      },
    ],
    realisaties: [],
  },
  hannuit: {
    slug: "hannuit",
    title: "Construction dehumidifier hire in Hannut | Vernast",
    description:
      "Dehumidifier hire in Hannut? We deliver and set up units for farmhouses and new builds in Thisnes, Crehen, Merdorp and the other villages of the municipality.",
    h1: "Construction dehumidifier hire in Hannut",
    kicker: "Province of Liège · the market town of the Walloon Hesbaye",
    rit: { afstand: "about 95 km", tijd: "about an hour" },
    intro: [
      "Hannut, Hannuit in Dutch, is the market town of **the Walloon Hesbaye**. Around the centre lie farming villages on an open **loam plateau**, such as **Thisnes, Crehen, Merdorp, Avin and Lens-Saint-Remy**. From Aartselaar it takes us **about an hour** to drive there.",
      "The area has many **large courtyard farmhouses** with an inner courtyard, among fields of beet and grain. Around the centre and on the edge of the villages, new housing estates have appeared over the past decades. So our sites here are often **a farmhouse being converted** or **a new-build home** that has to dry before finishing.",
    ],
    bouw: {
      kop: "Farmhouses becoming homes, housing estates on loam",
      alineas: [
        "Many owners **convert a courtyard farmhouse** into a home or into several dwellings. Old stables and barns have **thick walls without a damp-proof course** and a large volume under the roof. Add a new screed and plasterwork, and a lot of water goes into that space. One dehumidifier is rarely enough then, which is why we look at the volume room by room.",
        "On **loam soil**, rainwater drains away slowly. An excavation stays waterlogged for a long time after a wet spell, and water stands in a cellar under construction. Pump that water out first. After that, **the floor slab and walls** have to lose their moisture before you can carry on finishing.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a converted stable or barn** with a high ridge: 110 litres a day, for rooms up to about 600 m³." },
      { key: "ttk350", waarom: "For a new-build home in one of the villages: 70 litres a day, suitable for a ground floor with **fresh screed and plasterwork**." },
      { key: "radiaal2250", waarom: "**For a cellar under construction** that stayed wet: this radial fan blows air low over the floor slab and right into the corners." },
      { key: "teddh30", waarom: "A farmhouse under renovation is rarely heated. This 30 kW heater on three-phase power brings a **cold room with thick walls** above 15 °C, so the dehumidifier works better." },
    ],
    levering: {
      kop: "Delivery in Hannut: along the E40 and across the plateau",
      alinea:
        "From Aartselaar we drive **about an hour** via the E40 and the regional roads of the plateau. You choose a **delivery date** when you book, and in Wallonia we deliver by appointment. For a farmhouse, tell us **through which gate** the van can get into the yard. The technician sets up the units room by room and takes a first moisture reading.",
    },
    afhalen: {
      kop: "Collecting yourself: two hours' driving for one unit",
      alinea:
        "Our collection point in Aartselaar is **about an hour** from Hannut, so there and back takes up half a morning. For a farmhouse or a whole home you are better off with delivery: **delivery and set-up are included in the package price**, and you do not have to lift heavy units.",
    },
    buren: ["lijsem", "wasseiges", "braives", "geer"],
    faq: [
      {
        q: "How many dehumidifiers do I put in a converted barn?",
        a: "That depends on the volume up to the ridge, not on the floor area. A barn with an open roof holds much more air than a living room with the same floor. A large dehumidifier with a fan is often enough, provided you close off the space as well as you can.",
      },
      {
        q: "Why does my excavation on loam stay wet for so long?",
        a: "Loam lets water through much more slowly than sand. After a wet spell the water stays in and around the excavation instead of draining away. First pump out the standing water. After that a dehumidifier removes the moisture from the concrete slab and the walls.",
      },
      {
        q: "Can I have a dehumidifier set up in a farmhouse without heating?",
        a: "Yes, but then allow for a heater as well. Below 15 °C a condensation dehumidifier works slowly, and an old farmhouse with thick walls stays cold in spring and autumn. The heater first brings the room up to temperature, after which it dries more smoothly.",
      },
      {
        q: "Do you also deliver in the villages around Hannut, such as Merdorp or Avernas-le-Bauduin?",
        a: "Yes, we deliver in all parts of the municipality, including the villages towards Wasseiges and Landen. If your site is on a remote farmhouse, describe the access when you book and where the van can unload.",
      },
    ],
    realisaties: [],
  },
  lijsem: {
    slug: "lijsem",
    title: "Dehumidifier hire in Lincent, near Landen | Vernast",
    description:
      "Dehumidifier hire in Lincent, Pellaines or Racour, just over the language border near Landen? We deliver and set up units for renovations and new screeds.",
    h1: "Construction dehumidifier hire in Lincent",
    kicker: "Province of Liège · a village on the language border",
    rit: { afstand: "about 85 km", tijd: "just over fifty minutes" },
    intro: [
      "Lincent, Lijsem in Dutch, is a small municipality in the Walloon Hesbaye. Besides the village itself, **Pellaines and Racour** belong to it. The municipality borders **Landen** in Flemish Brabant, and from Aartselaar you get there in **just over fifty minutes**.",
      "The landscape consists of **rolling loam fields**, beet and grain fields and villages around a church, with the odd **enclosed farmhouse**. Little new building is added. Most sites are **renovations of an existing village home**.",
    ],
    bouw: {
      kop: "Brick village homes and a plateau without shelter",
      alineas: [
        "Many older homes in Lincent and Racour are **built of brick**, often with a cellar under the front of the house and a floor laid directly on the ground at the back. During a renovation that old floor comes out and **insulation and a new screed** go in. That screed has to be dry before parquet or tiles go on it, and your floor layer measures that before he starts.",
        "On the open plateau there is a lot of wind. A home under renovation without windows or with an open façade **cools down quickly** in winter, and cold air absorbs little moisture. So **close off the room first** and only then let the dehumidifier run, with a heater alongside if needed.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "For **a village home you are doing up room by room**: 50 litres a day, compact and easy to move." },
      { key: "ttk350", waarom: "**For a new screed** across the whole ground floor, after the old floor laid on the ground has come out: 70 litres a day." },
      { key: "teddh20", waarom: "On a winter site this 20 kW heater (three-phase power) brings a closed-off room to a temperature at which the dehumidifier works smoothly." },
      { key: "ttv4500", waarom: "This fan keeps the air above a fresh screed moving, so the floor dries **evenly** and not just right next to the dehumidifier." },
    ],
    levering: {
      kop: "Delivery in Lincent: just over the language border",
      alinea:
        "Lincent lies **just beyond Landen**. We drive along the E40 and the last stretch on back roads, **just over fifty minutes** in all. When you book you choose a **delivery date**; we then agree the exact time with you, as everywhere in Wallonia. The technician puts the units in place, connects them and takes a first moisture reading.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar: feasible if you are heading towards Antwerp anyway",
      alinea:
        "Our collection point is **just over fifty minutes' drive** from Lincent. For **one small dehumidifier** that can work, especially if you need to be near Antwerp anyway. A dehumidifier has to stand upright in the car. For a package with a heater and fan you are better off having it delivered.",
    },
    buren: ["hannuit", "landen"],
    faq: [
      {
        q: "My contractor speaks French. Who do you arrange the delivery with?",
        a: "With whoever will be on site. When you book, tell us who that is, so we arrange the delivery with the right person. Questions in French are no problem either: feel free to email or call us.",
      },
      {
        q: "How long does a new screed have to dry before parquet can go on it?",
        a: "That depends on the thickness, the composition, the temperature and the humidity. Parquet needs a lower residual moisture than tiles. With a dehumidifier and a fan it goes faster, but always have the parquet layer take a reading before he lays.",
      },
      {
        q: "Is a heater needed if the windows have not been fitted yet?",
        a: "A heater in an open room mainly heats the outside air. First close off the window openings with sheeting or board, so heat and dry air stay inside. Only then does a heater make sense, and the dehumidifier also works at a reasonable pace in winter.",
      },
      {
        q: "Can I dry one room at a time?",
        a: "Yes, and with a phased renovation that is often the best approach. A small dehumidifier in a closed room does more than a large one in an open house. Once the room is dry, you move the unit to the next room.",
      },
    ],
    realisaties: [],
  },
  oerle: {
    slug: "oerle",
    title: "Construction dehumidifier hire in Oreye (Oerle) | Vernast",
    description:
      "Dehumidifier hire in Oreye, Lens-sur-Geer, Bergilers or Otrange: for houses in the Jeker valley and farmhouses on the plateau. Set up by appointment.",
    h1: "Construction dehumidifier hire in Oreye",
    kicker: "Liège · on the Jeker, against the language border",
    rit: { afstand: "about 105 km", tijd: "just over an hour" },
    intro: [
      "Oreye, Oerle in Dutch, lies in the north of the Walloon Hesbaye, **against the language border with Tongeren**. The municipality includes Bergilers, Grandville, Lens-sur-Geer and Otrange, farming villages on the loam plateau. From Aartselaar it takes us just over an hour to drive there.",
      "**The Jeker**, called the Geer here, flows through Lens-sur-Geer and Oreye on its way to Tongeren and Maastricht. Some of the houses stand in that narrow stream valley, others higher up on the plateau. You notice that difference during a renovation.",
    ],
    bouw: {
      kop: "Houses in the stream valley and farmhouses on the plateau",
      alineas: [
        "**Down by the Jeker** the ground is lower and damper. Older houses there often have a cold, clammy ground floor and brick walls in lime mortar without a damp-proof course. After a renovation you want to know which moisture is construction moisture. The technician measures that during installation.",
        "**On the plateau** stand the large farmhouses and the newer homes along the village roads. Anyone dividing a farmhouse into homes lays a lot of new screed and plasterwork at once, in rooms that are hard to get warm in winter. Below 15 °C a condensation dehumidifier loses efficiency, so then a heater is added.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**For a cold ground floor by the Jeker**: this desiccant dehumidifier absorbs moisture even at low temperatures, where a condensation dehumidifier slows down. It dries via ducting." },
      { key: "ttk350", waarom: "For a farmhouse becoming a home: 70 litres a day, suitable up to about 400 m³ per drying zone." },
      { key: "teddh30", waarom: "First brings **an unheated farmhouse room** up to temperature in winter, so the dehumidifier reaches its full capacity. The heater needs a 400 V three-phase connection." },
      { key: "radiaal2250", waarom: "Blows in a targeted way over a wet floor or into the corner against an old outside wall, where moisture lingers longest in an old house." },
    ],
    levering: {
      kop: "Delivery in Oreye: via Tongeren or via the E40",
      alinea:
        "Oreye lies between Tongeren and the E40 near Waremme. We take whichever route is flowing best that day, just over an hour from Aartselaar. You choose **a delivery date** when you book, after which we arrange the delivery with you. Tell us on which side of the farmhouse we can best unload. The technician places the units room by room and sets them up.",
    },
    afhalen: {
      kop: "Collecting yourself rarely pays off from Oreye",
      alinea:
        "It is **just over an hour's drive** to Aartselaar, and for collecting and returning you make that round trip twice. For a renovation that lasts weeks, that is a lot of time for one unit. Delivery includes the set-up and **a moisture reading at the start**.",
    },
    buren: ["crisnee", "borgworm", "tongeren-borgloon"],
    faq: [
      {
        q: "My house in Lens-sur-Geer lies low by the stream. Will a construction dehumidifier help?",
        a: "For construction moisture after a renovation or a leak, yes. If the moisture comes back after every wet spell, it is in the ground or in the base of the wall, and a dehumidifier will not solve it for good. The technician measures at the start which of the two it is.",
      },
      {
        q: "Does a construction dehumidifier work in an unheated farmhouse in winter?",
        a: "A condensation dehumidifier works, but more slowly once it is colder than 15 °C. In a cold farmhouse room we therefore add a heater, or choose the desiccant dehumidifier, which absorbs moisture even in the cold. Tell us when you book whether there is heating.",
      },
      {
        q: "Do you also deliver on the Flemish side, in Tongeren?",
        a: "Yes. Tongeren-Borgloon has its own page and is also within our delivery area. For a site right on the language border, it makes little difference to the planning which side the address is on.",
      },
      {
        q: "How do I dry an old wall in lime mortar without damaging it?",
        a: "Gently and evenly. Old brick and lime mortar release their water slowly and can crack if they dry too quickly or too unevenly. A dehumidifier with some air movement along the wall works better than a lot of heat in one spot.",
      },
    ],
    realisaties: [],
  },
  remicourt: {
    slug: "remicourt",
    title: "Construction dehumidifier hire in Remicourt | Vernast",
    description:
      "Dehumidifier hire in Remicourt, Momalle, Hodeige, Lamine or Pousset: for houses near the station and new builds with underfloor heating along the E40.",
    h1: "Construction dehumidifier hire in Remicourt",
    kicker: "Liège · on the railway between Waremme and Liège",
    rit: { afstand: "about 110 km", tijd: "just over an hour" },
    intro: [
      "Remicourt lies **east of Waremme**, on the road to Liège. The E40 and **the Brussels-Liège railway line** run through the municipality, with a station in Remicourt itself. Hodeige, Lamine, Momalle and Pousset belong to it too, villages on the loam plateau of the Walloon Hesbaye.",
      "Railway and motorway attract commuters. Alongside the old village centres with their farmhouses, **neighbourhoods of detached homes** have been added, and in the older streets near the station houses are being done up. From Aartselaar we drive just over an hour.",
    ],
    bouw: {
      kop: "Railway village and housing estate",
      alineas: [
        "**Around the station** stand older brick terraced houses and town houses. During a renovation you come across walls without a damp-proof course and cellars that were never quite dry. A reading shows whether it is construction moisture or moisture from below, which needs a different approach.",
        "**On the housing estates** it is about new builds and extensions, often with **underfloor heating beneath the screed**. That screed has to be dry before the heating is fired up and the floor finish goes on. With targeted drying, the floor layer has to wait less long for a good reading.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a new build with underfloor heating**: 70 litres a day, enough for an entire ground floor up to about 400 m³." },
      { key: "radiaal2250", waarom: "Blows **right over the screed**, so the layer of air above the floor does not become saturated and the moisture comes out of the floor evenly." },
      { key: "ttk170", waarom: "For a renovation in a terraced house near the station: compact enough for a narrow staircase and economical at 0.75 kW." },
      { key: "teddh20", waarom: "Brings **a cold cellar under an old home** above 15 °C, where the dehumidifier absorbs moisture better. This 20 kW heater needs 400 V." },
    ],
    levering: {
      kop: "Delivery in Remicourt: along the E40",
      alinea:
        "Remicourt lies **on the E40 between Waremme and Liège**, just over an hour's drive from Aartselaar. When you book you choose a delivery date; we agree the time with you. The technician places the units, measures the moisture in floor and walls and **sets everything up before he leaves**.",
    },
    afhalen: {
      kop: "Collecting is possible, but it is a long drive",
      alinea:
        "From Remicourt you are **on the road for just over an hour** to Aartselaar, and the same back. A dehumidifier has to be transported upright, so for a complete package with a fan, delivery is the practical choice.",
    },
    buren: ["borgworm", "donceel", "fexhe-le-haut-clocher", "saint-georges-sur-meuse"],
    faq: [
      {
        q: "Can the underfloor heating go on to dry the screed faster?",
        a: "Only according to the installer's heating-up protocol, and not straight after pouring. Heating too early and too hot can make the screed crack. A dehumidifier can run from the start, though: it removes moisture without putting strain on the screed.",
      },
      {
        q: "How do I dry the cellar of an old house near the station?",
        a: "First measure whether the moisture comes from a leak, from building work or from the ground. A dehumidifier removes construction moisture and moisture after a leak, in a cold cellar with a heater alongside. If the moisture keeps coming back, a dehumidifier alone is not the solution.",
      },
      {
        q: "Do you also come to Momalle and Hodeige?",
        a: "Yes, Hodeige, Lamine, Momalle and Pousset belong to Remicourt and are within our delivery area. If the address is on a narrow village road, let us know where the van can stop to unload.",
      },
      {
        q: "Can you help me choose a drying package for my home in Remicourt?",
        a: "Yes. Feel free to email or call us, in French too. Together we look at which drying package suits your home in Remicourt and when we can deliver.",
      },
    ],
    realisaties: [],
  },
  "saint-georges-sur-meuse": {
    slug: "saint-georges-sur-meuse",
    title: "Dehumidifier hire in Saint-Georges-sur-Meuse | Vernast",
    description:
      "Dehumidifier hire in Saint-Georges-sur-Meuse? Vernast delivers and sets up units for renovating post-war homes, new screeds and damp cellars.",
    h1: "Construction dehumidifier hire in Saint-Georges-sur-Meuse",
    kicker: "Province of Liège · on the edge of the plateau above the Meuse",
    rit: { afstand: "about 120 km", tijd: "just over an hour" },
    intro: [
      "Saint-Georges-sur-Meuse lies mostly **on the plateau above the Meuse**, between Flémalle and Amay. From the edge you look down into the valley, at the industry along the river. From Aartselaar we get there in just over an hour.",
      "The streets are mainly **residential neighbourhoods and housing estates** from the last century. In between stand older village houses and the odd farmhouse, with the fields right behind the last houses.",
    ],
    bouw: {
      kop: "Last-century neighbourhoods, being done up again",
      alineas: [
        "Many homes date from **after the war**: simple brick houses, often with a cellar under the whole house. Anyone who buys such a house and renovates it completely brings in **a lot of construction moisture in one go**: new plasterwork, a screed with underfloor heating, sometimes an extension at the back.",
        "A cellar from that period is rarely well sealed. After a wet winter it is often damp, even without any work. So the technician measures at the start whether it is construction moisture or water from outside. **That determines whether a dehumidifier solves the problem.**",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a post-war home being completely renovated.** At 70 litres a day it dries a ground floor with a new screed." },
      { key: "ttk170", waarom: "For a bathroom or a single room in a lived-in house. This compact unit extracts 50 litres a day from the air, using 0.75 kW." },
      { key: "revolution", waarom: "**For a damp, cool cellar.** A desiccant dehumidifier extracts moisture from the air even at low temperatures." },
      { key: "ttv4500", waarom: "In an **extension at the back** with a new screed, it directs the air across the floor so it dries evenly." },
    ],
    levering: {
      kop: "Delivery in Saint-Georges-sur-Meuse: close to the E42",
      alinea:
        "We drive **via the E40 and the E42** to Saint-Georges, just over an hour on the road. You choose a delivery date when you book; in Wallonia we deliver by appointment. On a housing estate the van can usually stand on the drive. The technician places the units, runs the drain to a floor drain and **records the moisture readings of wall and floor**.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar from Saint-Georges",
      alinea:
        "The collection point is just over an hour's drive from Saint-Georges. If you are heading towards Antwerp anyway, you can take a small unit yourself, **upright in the car**. For a complete renovation, delivery is handier, because the technician then decides on the set-up straight away.",
    },
    buren: ["engis", "amay", "verlaine", "flemalle"],
    faq: [
      {
        q: "My post-war cellar in Saint-Georges is always damp. Will a dehumidifier help?",
        a: "Against damp air and against construction moisture after building work, yes. If the water comes in from outside through an unsealed wall, it returns as soon as the unit has gone. The technician measures during installation and tells you which of the two it is.",
      },
      {
        q: "How do I dry a new screed with underfloor heating?",
        a: "Let the screed cure first and then fire up the underfloor heating according to the installer's schedule. Meanwhile put a dehumidifier in the room, with the doors shut. That way the moisture coming out of the screed actually leaves the room. At collection we measure the screed.",
      },
      {
        q: "Can I let a dehumidifier run at night in a lived-in house?",
        a: "Yes, and that is the idea: drying works best without interruption. Put the unit on a hard floor and not against the wall of a bedroom, and the noise will disturb you least.",
      },
      {
        q: "Is Saint-Georges-sur-Meuse in your delivery area?",
        a: "Yes, we deliver throughout the municipality, on the plateau and on the valley side. Give the full address and postcode when you book. We then agree the delivery time with you.",
      },
    ],
    realisaties: [],
  },
  wasseiges: {
    slug: "wasseiges",
    title: "Hire a construction dehumidifier in Wasseiges | Vernast",
    description:
      "Dehumidifier hire in Wasseiges, Ambresin, Meeffe or Acosse? We deliver and set up units for farmhouses, barns and village homes along the Mehaigne.",
    h1: "Construction dehumidifier hire in Wasseiges",
    kicker: "Province of Liège · on the Mehaigne, on the border with Namur",
    rit: { afstand: "about 100 km", tijd: "just over an hour" },
    intro: [
      "Wasseiges lies on the western edge of the province of Liège, **against the border with the province of Namur**. The municipality has four villages: **Wasseiges, Ambresin, Meeffe and Acosse**. The **Mehaigne** runs through a shallow valley between the fields.",
      "You will find **large plots of beet and grain**, farmhouses along the village street and few housing estates. A site here is usually **a farmhouse, a barn or a village home** being converted, or a new home on the edge of a village. From Aartselaar it takes us **just over an hour** to drive there.",
    ],
    bouw: {
      kop: "Homes close to the river and barns on the plateau",
      alineas: [
        "**Along the Mehaigne** the ground is lower and damper. An older home close to the water often has a cellar or a ground floor that feels **cool and clammy**, even outside winter. After a renovation with new plasterwork, that construction moisture has to come out. If **water is coming up from below**, a dehumidifier will not solve it and the cause has to be tackled first.",
        "Higher up on the plateau, **barns and stables** are being converted into homes. A new concrete floor and replastered walls in a large open space bring in **a lot of water at once**. A large dehumidifier together with a fan that circulates the air lets such a space dry evenly.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a barn becoming a home**: a new concrete floor and fresh plasterwork in one open space. It extracts up to 110 litres a day." },
      { key: "revolution", waarom: "For **a cool cellar in a house on the Mehaigne**: this desiccant dehumidifier keeps extracting moisture from the air even at low temperatures." },
      { key: "ttv4500", waarom: "In an open barn, damp air lingers in the corners. This fan **gets it moving**, so the whole space dries evenly." },
      { key: "ttk350", waarom: "For **a village home in Ambresin or Meeffe** being converted: 70 litres a day, for rooms up to about 400 m³." },
    ],
    levering: {
      kop: "Delivery in Wasseiges: via the E40 and Hannut",
      alinea:
        "From Aartselaar we drive **just over an hour**, along the E40 and then south via Hannut. Delivery in Wallonia is **by appointment**: you choose a delivery date when you book, and we call to agree the time. If the site is on a farmhouse along an unpaved road, let us know **how wide and how firm** the access is.",
    },
    afhalen: {
      kop: "Collecting from Wasseiges: a drive that rarely pays off",
      alinea:
        "There and back to Aartselaar you are **on the road for over two hours**. For a barn or a whole home you usually need more than one unit, and that will not fit in an ordinary car. **So have it delivered**: the technician brings everything in one trip and puts it straight in the right place.",
    },
    buren: ["hannuit", "braives", "eghezee"],
    faq: [
      {
        q: "My house is right by the Mehaigne. Is the moisture in the cellar construction moisture?",
        a: "Not always. A cellar close to a river can take in water from outside after a wet spell. Construction moisture after a renovation disappears with a dehumidifier, but water that keeps flowing in comes back. In that case, have the cause investigated first.",
      },
      {
        q: "What does a desiccant dehumidifier do differently from an ordinary construction dehumidifier?",
        a: "A condensation dehumidifier cools the air until the moisture condenses, and that works poorly if the room itself is already cool. A desiccant dehumidifier extracts the moisture from the air with a drying agent and so keeps working even in a cold cellar.",
      },
      {
        q: "Does a converted barn have to be fully closed before I dry it?",
        a: "As closed as possible. Through open doors or window openings the dry air escapes and damp outside air comes in. Close off openings with sheeting or board. Then the dehumidifier extracts the moisture from walls and floor instead of from the outside air.",
      },
      {
        q: "Do you also deliver across the provincial border, in Éghezée?",
        a: "Yes, we also deliver in Éghezée and the other municipalities of the province of Namur, and they each have their own page. For the planning the provincial border makes no difference: we combine addresses in the area as much as possible.",
      },
    ],
    realisaties: [],
  },
  ans: {
    slug: "ans",
    title: "Construction dehumidifier hire in Ans and Alleur | Vernast",
    description:
      "Dehumidifier hire in Ans, Alleur and Loncin: for renovating a terraced house from the mining era or a new build on the plateau. Delivered and set up for you.",
    h1: "Construction dehumidifier hire in Ans",
    kicker: "Province of Liège · on the plateau above the city",
    rit: { afstand: "about 115 km", tijd: "just over an hour" },
    intro: [
      "Ans lies on the plateau west of Liège, where the city gives way to the open countryside of the Hesbaye. At **Loncin** the E40 and the E313 meet. The fort of Loncin was part of the ring of forts around Liège. Alleur and Xhendremael also belong to the municipality.",
      "Ans was a **coal-mining municipality**. The mines closed long ago, but you can still see their mark in the long rows of workers' houses. Between them lie newer housing estates. From our warehouse in Aartselaar it takes us just over an hour to drive to Ans.",
    ],
    bouw: {
      kop: "Workers' houses from the mining past, new builds on the plateau",
      alineas: [
        "A **workers' house** in Ans is narrow and has a small cellar or none at all. The walls are often solid brick, without a cavity. During a renovation it gets new plasterwork and sometimes a screed. The volume is small, so the air quickly becomes saturated. A compact dehumidifier in a closed room does more here than a big unit in an open house.",
        "With a new build, **a cellar under construction** sometimes stays wet for a long time after rain. Pump out the standing water first before you start drying. If you see a crack in a wall where moisture is getting in, have that repaired first. During installation the technician looks at where the moisture is coming from.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**For a narrow workers' house**: compact, 50 litres a day and suitable for rooms up to about 250 m³. Dry room by room with the door shut." },
      { key: "ttk350", waarom: "For a new build in Loncin or Alleur: 70 litres a day, ample for a ground floor where the screed has just been poured." },
      { key: "radiaal2250", waarom: "**For a cellar under construction**: this radial fan blows in a targeted way over the wet floor and into the corners, where water stands longest." },
      { key: "ttv4500", waarom: "In a deep terraced house without through-flow, this fan moves 4,500 m³ of air an hour, so the **back extension dries too**." },
    ],
    levering: {
      kop: "Delivery in Ans: right by the Loncin interchange",
      alinea:
        "Ans lies **next to the Loncin interchange**. Via the E313, outside rush hour, we get there in just over an hour. You choose a delivery date when you book, and we agree the exact delivery time with you. The technician places the unit, sets it up and **takes a moisture reading at the start**.",
    },
    afhalen: {
      kop: "Collecting: straight along the E313",
      alinea:
        "Aartselaar is **just over an hour** further along the same motorway. If you are heading towards Antwerp anyway, you can take a unit with you. Always transport a dehumidifier upright. If your renovation needs more than one unit, **delivery is simpler**.",
    },
    buren: ["luik-stad", "saint-nicolas", "awans", "juprelle", "grace-hollogne"],
    faq: [
      {
        q: "My wall has a crack from subsidence. Will a construction dehumidifier help?",
        a: "A dehumidifier removes moisture from the wall and the air, but as long as water gets in through the crack, it keeps coming back. Have the crack repaired or sealed first. After that the wall dries faster with a unit, and the technician can check whether the moisture is going down.",
      },
      {
        q: "How many dehumidifiers do I need for a workers' house in Ans?",
        a: "For a narrow terraced house, one compact dehumidifier is often enough. You move it from room to room or leave it in the largest room with the doors shut. If the ground floor also gets a new screed, a second unit or a fan is useful.",
      },
      {
        q: "Do you also deliver in Alleur and Xhendremael?",
        a: "Yes, Alleur and Xhendremael are part of Ans and within our delivery area. In Xhendremael it is more likely to be rural homes and farmhouses. Tell us what the access is like there, so the van does not get stuck on a narrow farm track.",
      },
      {
        q: "My excavation in Ans fills up again after every shower. What do I do first?",
        a: "First pump out the standing water. A dehumidifier is meant for the moisture left behind in the floor and walls, not for a puddle. After that a dehumidifier, together with a radial fan blowing over the floor, removes that residual moisture.",
      },
    ],
    realisaties: [],
  },
  awans: {
    slug: "awans",
    title: "Dehumidifier hire in Awans, on the edge of Hesbaye | Vernast",
    description:
      "Dehumidifier hire in Awans, Othée, Hognoul, Fooz or Villers-l'Évêque: for a converted farmhouse or a new build close to the E40. With delivery and set-up.",
    h1: "Construction dehumidifier hire in Awans",
    kicker: "Province of Liège · on the edge of the Hesbaye",
    rit: { afstand: "about 110 km", tijd: "just over an hour" },
    intro: [
      "Awans lies west of Liège, **on the edge of the Hesbaye**. Beyond the built-up area of Ans, the open country starts here, with fields and villages such as Othée, Hognoul, Fooz and Villers-l'Évêque. The E40 runs straight through the municipality.",
      "The municipality is rural, but it is growing. Its location close to Liège and the airport attracts new builds, and at the same time **old farmhouses and barns** are being converted into homes. Each of those sites calls for its own approach. From Aartselaar it takes us just over an hour to drive to Awans.",
    ],
    bouw: {
      kop: "Brick farmhouses and new builds in the villages",
      alineas: [
        "A **Hesbaye farmhouse** has thick brick walls, often without insulation. If you convert a barn or stable into a home, new plasterwork and a new floor go into a large, high volume. Such a space only dries well with enough capacity and with **air movement right up to the ridge**.",
        "With a new build, the ground-floor screed sets the schedule. It has to be dry enough before the floor layer starts, and a reading decides that, not the calendar. A cellar or crawl space that stays wet after rain is **tackled separately**, with a fan blowing over the floor.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a barn becoming a home**: 110 litres a day and suitable for rooms up to about 600 m³, even with a lot of new plasterwork." },
      { key: "ttv4500", waarom: "In a converted stable, damp air lingers under the ridge or against the floor. This fan **keeps the whole volume moving**." },
      { key: "ttk350", waarom: "For a new-build home in Hognoul or Fooz: 70 litres a day, for a ground floor with fresh screed up to about 400 m³." },
      { key: "teddh30", waarom: "**For a farmhouse without heating** in winter. This 30 kW site heater brings the room up to temperature, so the dehumidifier works better. Make sure there is a three-phase (400 V) connection." },
    ],
    levering: {
      kop: "Delivery in Awans: along the E40 and the farm tracks",
      alinea:
        "Awans lies **on the E40, close to the Loncin interchange**, just over an hour's drive from Aartselaar. If the farmhouse is on a narrow farm track or behind a gate, describe the access. You choose a delivery date and we agree the time with you. The technician puts the units in place and **records the first reading**.",
    },
    afhalen: {
      kop: "Collecting: just over an hour to Aartselaar",
      alinea:
        "If you have a van and need to be near Antwerp anyway, you can collect. For a converted barn with **two or three units and a fan**, delivery is simpler. The technician then looks at the set-up straight away.",
    },
    buren: ["ans", "juprelle", "grace-hollogne"],
    faq: [
      {
        q: "I am converting a barn in Othée into a home. How do I approach the drying?",
        a: "A barn is high, so the volume is larger than the floor area suggests. We usually combine a large dehumidifier with a fan that keeps the air moving. Give us the length, width and height when you book; the technician checks the set-up on site.",
      },
      {
        q: "Can I dry in a farmhouse in Awans without heating in winter?",
        a: "A condensation dehumidifier needs more than about 15 °C to work well. In a cold farmhouse we therefore put an electric site heater next to it, which warms the room first. A desiccant dehumidifier is an alternative, because it also works in cold rooms.",
      },
      {
        q: "How do I know whether my screed is dry enough for the floor layer?",
        a: "A moisture reading decides that, not the number of days. Your floor layer sets the limit for his material. Have the residual moisture measured before he starts, so you can pass on a concrete figure instead of guessing.",
      },
      {
        q: "Do thick farmhouse walls need more time to dry?",
        a: "Yes. A thick wall of old brick holds a lot of moisture and releases it slowly. Plasterwork on such a wall seems dry on the surface quickly, while the wall behind stays wet for longer. A reading in depth tells you more than what you see on the surface.",
      },
    ],
    realisaties: [],
  },
  aywaille: {
    slug: "aywaille",
    title: "Construction dehumidifier hire in Aywaille | Vernast",
    description:
      "Dehumidifier hire in Aywaille, Remouchamps or Harzé: homes along the Amblève, old stone houses and new builds on the plateau. Delivered by appointment.",
    h1: "Construction dehumidifier hire in Aywaille",
    kicker: "Liège · on the Amblève, gateway to the Ardennes",
    rit: { afstand: "about 155 km", tijd: "over an hour and a half" },
    intro: [
      "Aywaille lies **in the Amblève valley**, on the E25, where the landscape gives way to the Ardennes. The municipality includes **Remouchamps**, known for its caves with a boat trip on an underground river, and Harzé with its castle.",
      "The centre lies along the river, with houses and shops close to the water. On the slopes and the plateau above lie villages with **old stone houses** and more recent housing estates. From Aartselaar you are on the road for over an hour and a half.",
    ],
    bouw: {
      kop: "The Amblève in the valley and limestone in the ground",
      alineas: [
        "Along the Amblève, cellars and ground-floor rooms lie low, and the river can rise quickly after heavy rain. After **water damage** the moisture sits in walls of natural stone or brick, often without a damp-proof course. They dry slowly. **A fan** that blows the wet air away from the wall then helps the dehumidifier.",
        "The bedrock here is **limestone**, which is why there are caves. Water finds its way through the rock, and a cellar dug into the slope can take in moisture from outside after a wet spell. So during a renovation the technician first measures whether it is construction moisture or **water from the ground**.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**After water damage along the Amblève**: 110 litres a day and a range of up to 600 m³ for a flooded ground floor." },
      { key: "ttv4500", waarom: "Against **a wet natural-stone wall**, this fan takes away the saturated air, so the dehumidifier can get a grip on it." },
      { key: "revolution", waarom: "For **a cold cellar in the slope**: this desiccant dehumidifier keeps working where it is too cold for a condensation dehumidifier." },
      { key: "ttk350", waarom: "For a new build or a renovation on the plateau: 70 litres a day and a range of up to 400 m³, enough for a ground floor with screed and plasterwork." },
    ],
    levering: {
      kop: "Delivery in Aywaille: on the E25, on the edge of the Ardennes",
      alinea:
        "Aywaille has **its own exit on the E25**, and the drive from Aartselaar takes over an hour and a half. In Wallonia we deliver by appointment: you choose a delivery date when you book. If you live in a village up on the hill with a narrow access road, **let us know in advance** how the van can reach you.",
    },
    afhalen: {
      kop: "Collecting yourself rarely pays off from Aywaille",
      alinea:
        "It is over an hour and a half's drive to Aartselaar, and then you still have to get back. Let us deliver instead: the technician puts the units in the wettest spot and **measures at the start** how much moisture is in the walls.",
    },
    buren: ["sprimont", "comblain-au-pont", "hamoir", "ferrieres", "theux"],
    faq: [
      {
        q: "My house on the Amblève was flooded. Where do I start?",
        a: "First get rid of the standing water and the silt, then remove damaged floor coverings and plaster. After that comes drying the walls and floor. When you book, tell us how high the water rose, and the technician will bring the right combination of dehumidifier and fan.",
      },
      {
        q: "Is the moisture in my cellar coming from the rock?",
        a: "It can be, especially if the cellar has been dug into the slope. Limestone lets water pass through cracks and fissures. The technician takes readings during installation; if the moisture returns after every shower, a dehumidifier only deals with the construction moisture, not the supply from outside.",
      },
      {
        q: "Do you also deliver in Remouchamps and Harzé?",
        a: "Yes, those villages belong to Aywaille. Harzé lies higher up on the plateau, Remouchamps in the valley. Give us the address and the type of work, and we will agree a delivery date with you.",
      },
      {
        q: "How long does a stone house take to dry after water damage?",
        a: "A natural-stone wall without a damp-proof course releases its water slowly, so allow a few weeks rather than days. A dehumidifier with a fan against the wall speeds that up noticeably. Have the walls measured before you apply new plaster or paint.",
      },
    ],
    realisaties: [],
  },
  "beyne-heusay": {
    slug: "beyne-heusay",
    title: "Construction dehumidifier hire in Beyne-Heusay | Vernast",
    description:
      "Dehumidifier hire in Beyne-Heusay: terraced houses from the mining era, Queue-du-Bois and Bellaire on the edge of Liège. Delivered, set up and measured.",
    h1: "Construction dehumidifier hire in Beyne-Heusay",
    kicker: "Liège · on the eastern edge of the city",
    rit: { afstand: "about 125 km", tijd: "just over an hour" },
    intro: [
      "Beyne-Heusay lies **just east of Liège**, on the slope from the Meuse valley up to the Herve plateau. The municipality joins on to **Jupille and Grivegnée**, so you often do not notice where Liège ends. We get there from Aartselaar in just over an hour.",
      "The municipality consists of **Beyne-Heusay, Queue-du-Bois and Bellaire**. Like much of the Liège fringe, it has a **coal-mining past**. The mines are closed, but terraced houses from that time still shape the streets, with newer neighbourhoods and flats in between.",
    ],
    bouw: {
      kop: "Terraced houses on the slope, new builds in between",
      alineas: [
        "Many older homes stand **on the slope, with a cellar or semi-basement on the low side**. At the back the ground is then higher than the floor, and after a wet winter **moisture seeps through the wall there**. During a renovation you need to know which moisture is construction moisture and which comes from outside.",
        "In the newer neighbourhoods stand **flats and family homes**. There the moisture comes mainly from **fresh screed and new plasterwork**. A flat has little volume and little air exchange, so the water lingers in the room.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "For **a terraced house on the slope** with new plasterwork: 70 litres a day, for rooms up to about 400 m³." },
      { key: "revolution", waarom: "**For a semi-basement half in the ground.** The desiccant dehumidifier keeps working in a cool, damp room." },
      { key: "ttk170", waarom: "For **a flat with new plasterwork**: compact, 50 litres a day, and economical at 0.75 kW." },
      { key: "ttv4500", waarom: "Along **the back wall against the slope**, this fan carries the wet air towards the dehumidifier." },
    ],
    levering: {
      kop: "Delivery in Beyne-Heusay",
      alinea:
        "Via the E313 and the E40 we are with you in **just over an hour**. You choose a delivery date when you book; the delivery itself is **by appointment**. In the sloping streets parking is sometimes awkward. Let us know whether there is room for a van, and the technician will find the shortest way inside.",
    },
    afhalen: {
      kop: "Collecting yourself in Aartselaar",
      alinea:
        "From Beyne-Heusay, collecting a unit in Aartselaar costs **over two hours' driving** there and back. If you need to be in Antwerp anyway, you can combine it. Otherwise delivery is simpler, not least because a construction dehumidifier is not easy to carry up a slope.",
    },
    buren: ["luik-stad", "fleron", "soumagne"],
    faq: [
      {
        q: "My semi-basement is half underground. Can I have it dried after the renovation?",
        a: "The construction moisture, yes, with a desiccant dehumidifier that also works in a cool room. If the ground at the back pushes water through the wall, it will come back. The technician takes readings during installation and tells you whether something needs doing on the outside first.",
      },
      {
        q: "Can I use a construction dehumidifier in a flat in an occupied building?",
        a: "Yes. For a flat we usually choose the compact model. Put the unit in a room with the door shut, and warn the neighbours if it has to run day and night. It works on a standard socket.",
      },
      {
        q: "How close does the van need to get to my home in Queue-du-Bois?",
        a: "As close to the front door as possible, but a few dozen metres is no problem: the technician has a sack truck. If the street is steep or narrow, mention it when you book. That way he knows in advance where he can stop.",
      },
      {
        q: "How long do I leave a dehumidifier in place after new plasterwork?",
        a: "That depends on the thickness and type of plaster, and on the temperature of the wall. A cold wall or a thick layer of lime plaster takes longer. Have the wall measured before you paint, because paint on a wet wall will peel later.",
      },
    ],
    realisaties: [],
  },
  bitsingen: {
    slug: "bitsingen",
    title: "Dehumidifier hire in Bassenge, Jeker valley | Vernast",
    description:
      "Dehumidifier hire in Bassenge: marl houses and farmhouses in the Jeker valley, from Eben-Emael to Glons and Wonck. Delivered and set up, with a reading.",
    h1: "Construction dehumidifier hire in Bassenge",
    kicker: "Liège · the Jeker valley on the language border",
    rit: { afstand: "about 115 km", tijd: "just over an hour" },
    intro: [
      "Bassenge, Bitsingen in Dutch, lies in **the valley of the Jeker**, which flows from the Hesbaye to Maastricht. The municipality borders Riemst and the Netherlands. We drive there from Aartselaar in just over an hour.",
      "Bassenge includes **Boirs, Eben-Emael, Glons, Roclenge-sur-Geer and Wonck**. Eben-Emael is known for **the fort on the Albert Canal**. For a long time marl was quarried in the area, a soft limestone that was also used as building stone.",
    ],
    bouw: {
      kop: "Marl, flint and wet valley floors",
      alineas: [
        "In the villages of the Jeker valley stand **old houses and farmhouses with marl and flint** in the walls. Marl is porous: it absorbs a lot of water and releases it slowly. During a renovation you therefore dry such a wall **evenly and without extra heat**.",
        "Down in the valley, close to the Jeker, the ground is **damp**. A ground floor without a damp-proof course stays cool there. Higher up, on the edge of the plateau, stand **new builds on housing estates**. There it is mainly about the drying time of the screed.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a farmhouse or marl house with new plasterwork**: 70 litres a day, for rooms up to about 400 m³." },
      { key: "revolution", waarom: "For **a cool ground floor in the Jeker valley**: this desiccant dehumidifier extracts moisture from the air even at low temperatures." },
      { key: "ttk650", waarom: "For **a new build with screed across the whole ground floor**: 110 litres a day, up to about 600 m³." },
      { key: "radiaal2250", waarom: "This radial fan sends **a targeted air flow over a floor** that has to dry evenly. It is splash-proof (IP55)." },
    ],
    levering: {
      kop: "Delivery in Bassenge",
      alinea:
        "From Aartselaar to the Jeker valley is **just over an hour's drive**. You choose a delivery date when you book, and we confirm the delivery **by appointment**. If the farmhouse has a narrow drive or an unpaved courtyard, mention it. That way the technician knows how close he can get.",
    },
    afhalen: {
      kop: "Collecting yourself in Aartselaar",
      alinea:
        "If your work regularly takes you to the Antwerp area, you can **pick up a unit on the way**. Otherwise you are on the road for over two hours there and back, and you make that trip again to return it. Always transport the dehumidifier **upright**.",
    },
    buren: ["riemst", "oupeye", "wezet", "juprelle"],
    faq: [
      {
        q: "Can I dry a marl-stone wall with a construction dehumidifier?",
        a: "Yes, if you take it slowly. Marl absorbs a lot of water and releases it slowly. If you dry too fast and too hot, the surface dries out while the core stays wet. A dehumidifier without extra heat and a moisture reading at the start give the best result.",
      },
      {
        q: "Does a company from Aartselaar also work on sites in Bassenge?",
        a: "Yes. Vernast is a Flemish company from Aartselaar and also works on sites in Wallonia. Do you or your contractor have questions in French? Feel free to email or call us.",
      },
      {
        q: "How do I dry a farmhouse in the Jeker valley after a thorough renovation?",
        a: "Work zone by zone. Close off the rooms you want to dry, put a dehumidifier in each zone and place a fan along the wettest walls. With thick walls and a cold floor it takes weeks. A second reading after a few weeks shows how far you have got.",
      },
      {
        q: "Do you also deliver in Eben-Emael and Wonck?",
        a: "Yes, in all the villages of Bassenge. When you book, give the full address and any particulars, such as a narrow drive or a home behind another one. We plan the trip together with other addresses in the area.",
      },
    ],
    realisaties: [],
  },
  blegny: {
    slug: "blegny",
    title: "Construction dehumidifier hire in Blegny | Vernast",
    description:
      "Dehumidifier hire in Blegny: miners' houses around Blegny-Mine, farmhouses in Saint-Remy and Housse, new builds in Barchon and Saive. Delivered and set up.",
    h1: "Construction dehumidifier hire in Blegny",
    kicker: "Liège · the municipality of Blegny-Mine",
    rit: { afstand: "about 130 km", tijd: "almost an hour and a half" },
    intro: [
      "Blegny lies **on the edge of the Pays de Herve**, north-east of Liège. The municipality is known for **Blegny-Mine**, the old coal mine in Trembleur that is on the UNESCO World Heritage List. We drive there from Aartselaar in almost an hour and a half.",
      "Blegny includes **Barchon, Housse, Mortier, Saint-Remy, Saive and Trembleur**. Miners' houses, farmhouses and newer housing estates stand side by side. In Barchon lies one of the **forts around Liège**.",
    ],
    bouw: {
      kop: "From miner's house to new build",
      alineas: [
        "The **miner's house** is a familiar sight here: a small brick home, often in a terrace, with a cellar and an attic. During a renovation rooms are knocked together and **new floors and new plasterwork** go in. That water then sits in a house with small windows and little air flow.",
        "Towards Dalhem and Herve stand **farmhouses in the meadows**, and in Barchon and Saive lie newer housing estates. In those new builds it is mainly **the ground-floor screed** that has to dry before the floor covering can go on.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**For a small miner's house** with a narrow staircase: the compact model, 50 litres a day, for a room or an attic." },
      { key: "ttk350", waarom: "For **a renovated house in Trembleur or Saint-Remy** with new plasterwork on both floors: 70 litres a day." },
      { key: "radiaal2250", waarom: "**Over a fresh screed in Barchon or Saive**, this radial fan sends a targeted air flow, so the ground floor dries evenly." },
      { key: "ttv4500", waarom: "A house with small windows has little air flow. This fan **keeps the air moving** between the wet walls and the dehumidifier." },
    ],
    levering: {
      kop: "Delivery in Blegny",
      alinea:
        "From Aartselaar to Blegny we are on the road for **almost an hour and a half**. You choose a delivery date when you book, and we fix the time **by appointment**. The technician carries the units inside, upstairs too, sets them up and takes a reading at the start. If the staircase is steep and narrow, mention it in advance.",
    },
    afhalen: {
      kop: "Collecting yourself in Aartselaar",
      alinea:
        "Collecting and returning a unit means **two round trips** to Aartselaar, each almost three hours' driving. That rarely pays off. With delivery you save that time and get the moisture reading too.",
    },
    buren: ["wezet", "dalhem", "soumagne", "luik-stad"],
    faq: [
      {
        q: "Will a construction dehumidifier fit up the narrow stairs of a miner's house?",
        a: "Our smallest model is compact and fits up most staircases. The larger dehumidifiers need more room. Mention when you book that it is a narrow staircase, and we will choose a unit that gets upstairs.",
      },
      {
        q: "How quickly does a screed dry in a new build in Barchon?",
        a: "That depends on the thickness, the type of screed and the season. A sand-cement screed needs many weeks without help. With a dehumidifier, closed windows and a fan over the floor it goes faster. Have the residual moisture measured before you lay a floor.",
      },
      {
        q: "Is the moisture in my cellar in Blegny coming from the old mine tunnels?",
        a: "We cannot establish that; for that you need a building surveyor. The technician does measure whether it is construction moisture, which a dehumidifier removes, or moisture that keeps coming back. In the latter case, drying alone does not solve the problem.",
      },
      {
        q: "Can the dehumidifier run in an attic under the roof?",
        a: "Yes, but an attic gets warm in summer and cold in winter. A condensation dehumidifier works well above 15 °C. In a cold attic we add a site heater, and we run the drain so the water flows away safely.",
      },
    ],
    realisaties: [],
  },
  chaudfontaine: {
    slug: "chaudfontaine",
    title: "Dehumidifier hire in Chaudfontaine, Vesdre valley | Vernast",
    description:
      "Dehumidifier hire in Chaudfontaine, Embourg, Beaufays or Vaux-sous-Chèvremont: drying after water damage in the Vesdre valley or after renovating on the hills.",
    h1: "Construction dehumidifier hire in Chaudfontaine",
    kicker: "Liège · the spa town in the Vesdre valley",
    rit: { afstand: "about 135 km", tijd: "almost an hour and a half" },
    intro: [
      "Chaudfontaine lies just south-east of Liège, **in the valley of the Vesdre**. The municipality is known for its hot spring and for the mineral water that bears its name. **Embourg, Beaufays and Vaux-sous-Chèvremont** belong to it too.",
      "In the valley the houses stand close together, between the river, the road and the railway. On the hills of Embourg and Beaufays lie more spacious residential areas with **detached houses**. From our warehouse in Aartselaar we are on the road for almost an hour and a half to Chaudfontaine.",
    ],
    bouw: {
      kop: "Drying after the water in the valley, renovating on the hills",
      alineas: [
        "**The floods of July 2021** hit the homes along the Vesdre hard. Walls that soaked up water for days release it slowly, and ground floors often have to be relaid. Such a home dries in phases. A **moisture reading** during installation shows how much water is still in the walls.",
        "On the hills it is usually a renovation: a new bathroom, an extension or **a screed that has to be dry** for the parquet layer. That is construction moisture. It disappears faster if you keep the windows shut and let one dehumidifier run per floor.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a ground floor that was under water for a long time**: 110 litres a day and a range of up to 600 m³, so walls and floor dry together." },
      { key: "radiaal2250", waarom: "This radial fan blows **low over a wet floor and along the skirting boards**, where water lingers longest after a flood." },
      { key: "ttk350", waarom: "For a renovation in Embourg or Beaufays: 70 litres a day and a range of up to 400 m³. That is enough for a ground floor with fresh screed or new plasterwork." },
      { key: "teddh30", waarom: "This 30 kW heater brings **an empty, unheated home** above 15 °C, the temperature above which a condensation dehumidifier works well. It needs a 400 V connection." },
    ],
    levering: {
      kop: "Delivery in Chaudfontaine: via Liège into the valley",
      alinea:
        "From Aartselaar we drive almost an hour and a half, **via the E313 to Liège** and then into the Vesdre valley. In Wallonia we deliver **by appointment**: you choose a delivery date when you book and we confirm the time. Along the valley road, parking is sometimes tight. Let us know in advance where the van can stop, and the technician will put the units straight in the right place.",
    },
    afhalen: {
      kop: "Collecting yourself in Aartselaar: a long drive",
      alinea:
        "You can collect yourself, but you drive almost an hour and a half there and the same back. For one dehumidifier that rarely pays off. After water damage delivery is the better choice: **the technician takes a reading at the start**, and with that reading you can check later whether a wall is dry.",
    },
    buren: ["luik-stad", "fleron", "trooz", "sprimont", "esneux"],
    faq: [
      {
        q: "My home along the Vesdre had water damage. How long does it need to dry?",
        a: "That depends on how long the water stood and on how the wall is built. A brick wall that soaked up water for days releases it slowly: allow weeks, not days. A moisture reading at installation and at collection shows how far you have got.",
      },
      {
        q: "Can I start repairs as soon as the walls feel dry?",
        a: "Better not to go by feel. A wall can seem dry on the surface while there is still moisture deeper down, and new plaster or paint then seals that moisture in. Have it measured before the finishing starts; the technician does that when collecting the units.",
      },
      {
        q: "Do you also deliver in Embourg and Beaufays?",
        a: "Yes, Embourg and Beaufays are part of Chaudfontaine, and we deliver there by appointment, just as in Vaux-sous-Chèvremont. On the hills it is usually a renovation, and then one dehumidifier per floor with the windows shut is often enough.",
      },
      {
        q: "Why a heater next to the dehumidifier in an empty home?",
        a: "A condensation dehumidifier works best above 15 °C. A home that stands empty and unheated after water damage rarely reaches that in spring and autumn. The heater brings the room up to temperature, so the dehumidifier collects noticeably more water per day.",
      },
    ],
    realisaties: [],
  },
  "comblain-au-pont": {
    slug: "comblain-au-pont",
    title: "Construction dehumidifier hire in Comblain-au-Pont | Vernast",
    description:
      "Dehumidifier hire in Comblain-au-Pont and Poulseur, where the Amblève meets the Ourthe: houses by the water and against the rock face. Set up and measured.",
    h1: "Construction dehumidifier hire in Comblain-au-Pont",
    kicker: "Liège · where the Amblève flows into the Ourthe",
    rit: { afstand: "about 150 km", tijd: "over an hour and a half" },
    intro: [
      "Comblain-au-Pont lies where **the Amblève flows into the Ourthe**. Limestone rocks rise above the village, and the area has caves and old quarries. **Poulseur**, a little further downstream on the Ourthe, also belongs to the municipality.",
      "It is a small municipality, with a village centre in the valley and hamlets up on the heights. In the centre the houses stand **between the river and the rock face**, with little room on either side. From Aartselaar it takes us over an hour and a half to drive there.",
    ],
    bouw: {
      kop: "Two rivers at its feet, rock at its back",
      alineas: [
        "Where two rivers meet, the water can rise quickly after heavy rain. Homes in the valley often have **a cellar or ground floor** close to the water level, and after flooding they need to dry thoroughly. Older houses without a damp-proof course also draw moisture up from the ground. You notice that in a **cold, musty ground floor**.",
        "A wall that stands against the rock face stays cold and damp, because limestone lets water through. During a renovation the technician distinguishes between **construction moisture and water from the rock**. A dehumidifier removes the first; the second needs work on the wall.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**After flooding**: 110 litres a day and a range of up to 600 m³, so a flooded cellar or ground floor starts drying straight away." },
      { key: "radiaal2250", waarom: "For **a wet floor in a house by the water**: this radial fan blows in a targeted way over the tiles and into the corners, where water stands." },
      { key: "teddh20", waarom: "This 20 kW heater brings **a cold ground floor** above 15 °C, so the dehumidifier performs better. Allow for a 400 V connection." },
      { key: "ttk170", waarom: "For an upper floor or a small renovation in Poulseur: compact, economical and easy to carry up a narrow staircase." },
    ],
    levering: {
      kop: "Delivery in Comblain-au-Pont: through the Ourthe valley",
      alinea:
        "We drive over an hour and a half, **via Liège and the Ourthe valley** or along the E25 and Aywaille. In Wallonia we deliver by appointment, on the delivery date you choose when you book. In the village centre the space between river and rock is limited. **Tell us where the van can stop for a moment**, and the technician will unload smoothly.",
    },
    afhalen: {
      kop: "Collecting means a long day on the road here",
      alinea:
        "From Comblain-au-Pont, Aartselaar is **over an hour and a half's drive**, one way. After flooding, delivery is the logical choice: you stay at your home and the technician measures straight away how wet it is.",
    },
    buren: ["esneux", "sprimont", "aywaille", "hamoir", "anthisnes"],
    faq: [
      {
        q: "Why is my ground floor musty even without a flood?",
        a: "Older houses in the valley often have no damp-proof course, so the walls draw up moisture from the ground. A dehumidifier removes that moisture from the air and the walls and makes the room pleasant again, but the supply from below only stops with work on the wall itself.",
      },
      {
        q: "Can a dehumidifier run while I live in the house?",
        a: "Yes. The dehumidifiers and fans work on a standard socket; only the heater needs three-phase power. They make a constant noise, like a fan. Preferably put them in a room with the door shut. During installation the technician shows you how to empty the tank or let the hose drain.",
      },
      {
        q: "Do you also deliver in Poulseur and on the plateau?",
        a: "Yes, Poulseur and the hamlets up on the heights belong to Comblain-au-Pont, and we deliver there by appointment. For a home on the plateau, describe what the access road is like, so the technician knows whether he needs a sack truck.",
      },
      {
        q: "How do I know whether the moisture in my wall is coming from the rock?",
        a: "A moisture reading at different heights and at different times gives a good picture. If the wall stays wet on the rock side while the rest dries, the water is coming from outside. The technician measures that at the start and at collection.",
      },
    ],
    realisaties: [],
  },
  dalhem: {
    slug: "dalhem",
    title: "Dehumidifier hire in Dalhem, along the Berwinne | Vernast",
    description:
      "Dehumidifier hire in Dalhem: farmhouses and village houses in the green hills along the Berwinne, from Berneau to Warsage and Bombaye. Delivered and set up.",
    h1: "Construction dehumidifier hire in Dalhem",
    kicker: "Liège · the green country along the Berwinne",
    rit: { afstand: "about 130 km", tijd: "almost an hour and a half" },
    intro: [
      "Dalhem lies **between the Meuse valley and the Pays de Herve**, in a rolling landscape of meadows, hedges and orchards. The old centre lies on **the Berwinne**, a small tributary of the Meuse. From Aartselaar we get there in almost an hour and a half.",
      "The municipality has eight villages: **Berneau, Bombaye, Dalhem, Feneur, Mortroux, Neufchâteau, Saint-André and Warsage**. To the north Dalhem borders **Voeren**. Anyone renovating here is often working on an old farmhouse or on a home on a small housing estate.",
    ],
    bouw: {
      kop: "Stone farmhouses, housing estates on the hill",
      alineas: [
        "Typical of the area are **brick farmhouses and village houses**, often on a natural-stone plinth. Anyone converting a stable or barn into a home pours **a new floor**, builds interior walls and plasters everywhere. In a large, open volume that construction moisture does not disappear by itself, and certainly not in autumn.",
        "In the valleys along the Berwinne the ground is wet, and the ground floor stays cooler there than higher up the slope. On the hills stand the new builds, with **screed and plasterwork** that have to dry before finishing. During installation the technician looks at the volume and divides the units accordingly.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a converted stable or barn** with a large, open volume: 110 litres a day, up to about 600 m³." },
      { key: "teddh30", waarom: "**For a farmhouse being finished in autumn.** This 30 kW heater warms up a cold room so the drying makes progress. It needs 400 V." },
      { key: "ttv4500", waarom: "In a high room under the roof, this fan keeps the air moving, so **the plasterwork right up to the top** dries evenly." },
      { key: "ttk350", waarom: "For **a village house in Warsage or Berneau** or a home on a housing estate: 70 litres a day, up to about 400 m³." },
    ],
    levering: {
      kop: "Delivery in Dalhem, right into the farmyard",
      alinea:
        "The drive takes **almost an hour and a half**, the last stretch on country roads. You choose a delivery date when you book; in Wallonia we deliver **by appointment**. If the farmhouse is on a narrow road or behind a gravel yard, mention it. The technician puts the units in place room by room.",
    },
    afhalen: {
      kop: "Collecting yourself in Aartselaar",
      alinea:
        "From Dalhem to Aartselaar and back is **almost three hours' driving**. A farmhouse with large rooms also often needs more than one unit, and that will not fit in every car. Here you are better off choosing delivery, with a moisture reading at the start.",
    },
    buren: ["wezet", "blegny", "voeren"],
    faq: [
      {
        q: "How do I dry a converted stable with a new concrete floor?",
        a: "Close off the space as well as possible. Set up a large dehumidifier and a fan over the floor, and a site heater if it is cold outside. A large volume with a thick floor needs weeks. Have the floor measured before tiles or parquet go on it.",
      },
      {
        q: "Does a construction dehumidifier work in a farmhouse without heating?",
        a: "A condensation dehumidifier needs a temperature above 15 °C to work well. In an unheated farmhouse we therefore add a site heater, or choose a desiccant dehumidifier. The heater needs a 400 volt connection, so we ask in advance what power supply there is.",
      },
      {
        q: "Do you also deliver in small villages such as Feneur and Mortroux?",
        a: "Yes, in all the villages of Dalhem. When you book, give us the address and the access, especially if the road is narrow or the house is behind a yard. We combine the trip with other deliveries in the area around Liège.",
      },
      {
        q: "How many dehumidifiers do I need for a farmhouse with two storeys?",
        a: "Usually one dehumidifier per storey, with the staircase closed off where possible. A converted barn that is open right up to the roof counts as one large volume and needs a bigger dehumidifier. The technician checks the figures on site.",
      },
    ],
    realisaties: [],
  },
  esneux: {
    slug: "esneux",
    title: "Construction dehumidifier hire in Esneux and Tilff | Vernast",
    description:
      "Dehumidifier hire in Esneux and Tilff: houses along the Ourthe and villas in the woods on the slopes. Delivered by appointment, set up and measured.",
    h1: "Construction dehumidifier hire in Esneux",
    kicker: "Liège · the meanders of the Ourthe",
    rit: { afstand: "about 140 km", tijd: "about an hour and a half" },
    intro: [
      "Esneux lies **on the Ourthe**, south of Liège, where the river makes wide bends through the woods. The municipality includes **Tilff**, the riverside village closest to Liège.",
      "Many people from Liège chose Esneux to **live among the greenery**. On the slopes stand villas and detached houses on spacious, wooded plots; in the centres by the water the houses stand closer together. From Aartselaar you get there in about an hour and a half.",
    ],
    bouw: {
      kop: "By the water and under the trees",
      alineas: [
        "Along the Ourthe, cellars and ground-floor rooms lie close to the river level. **In July 2021** the Ourthe also burst its banks, and homes in Tilff and Esneux had to dry out afterwards. A cellar by the river also needs attention after **a wet winter**.",
        "On the wooded slopes something else is at play. A villa in the shade of the trees gets little sun on its façade, and walls on the hillside dry slowly. When **renovating an older villa**, with new plasterwork or a new floor, drying therefore takes longer than in a house in open country.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For renovating a villa on the slope**: 70 litres a day and a range of up to 400 m³, enough for a large living area." },
      { key: "ttk650", waarom: "For a house in Tilff or on the Ourthe after water damage: **110 litres a day** and a range of up to 600 m³, to get the water out of walls and floor." },
      { key: "radiaal2250", waarom: "For **a cellar floor by the river**: this radial fan blows in a targeted way over the floor and into the corners, where moisture lingers longest." },
      { key: "teddh20", waarom: "A cellar or an empty villa in the shade stays cool. This 20 kW heater on 400 V brings the room up to temperature for the dehumidifier." },
    ],
    levering: {
      kop: "Delivery in Esneux: along the Ourthe or over the hill",
      alinea:
        "The drive from Aartselaar takes about an hour and a half. You choose a delivery date when you book, and we agree the time with you **by appointment**. Some homes are by the river, others along winding roads on the slope. If your house is on a narrow woodland road or a steep drive, **let us know in advance**, so the technician knows how far the van can get.",
    },
    afhalen: {
      kop: "Collecting is possible, but it is far",
      alinea:
        "From Esneux you drive about an hour and a half to Aartselaar, and the same back. For a villa with several floors you also often need two or three units, and they rarely fit together in a car. **Having them delivered saves you that drive.**",
    },
    buren: ["neupre", "seraing", "chaudfontaine", "sprimont", "comblain-au-pont"],
    faq: [
      {
        q: "My cellar in Tilff gets damp every winter. Will a dehumidifier help?",
        a: "A dehumidifier removes the moisture from the air and from the walls, and makes a damp cellar usable again. If moisture gets in again every time the water is high, the cause lies in the cellar wall itself. The technician measures how wet it is during installation.",
      },
      {
        q: "Why is my villa in the woods drying so slowly after the renovation?",
        a: "Because the façades get little sun and the air under the trees is damper. Airing with open windows helps little then, because the outside air is damp itself. With the windows shut and a dehumidifier inside it goes faster and more predictably.",
      },
      {
        q: "Can the van get right up to a house on the slope?",
        a: "Usually, yes. With a steep or unpaved drive the van sometimes stops at the bottom and the technician takes the units up with a sack truck. Tell us when you book what your drive is like.",
      },
      {
        q: "How many dehumidifiers do I need for a large villa?",
        a: "Allow one dehumidifier per floor. An open space larger than 400 m³ needs a heavier unit. Give us the floor area and the type of work when you book; the technician checks on site whether the set-up is right.",
      },
      {
        q: "What should I tell you when I book?",
        a: "Which rooms need to dry and how the home can be reached, so we can prepare the delivery properly. Questions in French? Feel free to email or call us.",
      },
    ],
    realisaties: [],
  },
  flemalle: {
    slug: "flemalle",
    title: "Construction dehumidifier hire in Flémalle | Vernast",
    description:
      "Dehumidifier hire in Flémalle, Ivoz-Ramet, Mons-lez-Liège or Les Awirs: for cellars along the Meuse and homes on the slope. Delivered and set up for you.",
    h1: "Construction dehumidifier hire in Flémalle",
    kicker: "Province of Liège · on the Meuse upstream",
    rit: { afstand: "about 130 km", tijd: "just over an hour" },
    intro: [
      "Flémalle lies **on both banks of the Meuse**, upstream of Liège. The municipality includes Flémalle-Grande, Flémalle-Haute, Ivoz-Ramet, Mons-lez-Liège, Les Awirs, Chokier and Gleixhe. From the river the ground rises steeply to the plateau.",
      "For a long time the Meuse valley was **steel country**, and you can still see it. At the foot of the slope stand rows of workers' houses and old industrial buildings. Higher up the slope and on the plateau you find more detached houses and new builds. From Aartselaar it takes us just over an hour to drive to Flémalle.",
    ],
    bouw: {
      kop: "Houses by the river, homes on the slope",
      alineas: [
        "Along the Meuse the homes lie low. After a wet spell, high water or a leak, **the bottom part of the wall** stays wet for a long time. The technician first checks whether water is still getting in. As long as it is, it is best to tackle the cause first.",
        "On the slope it is more about renovation and new builds. A home built half into the slope has **a back wall against the ground**, and on one side the ground floor is below ground level. Fresh plasterwork against such a cold wall dries slowly. In winter a site heater next to the dehumidifier makes the difference.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a cellar or lower floor by the Meuse** after a leak or high water: 110 litres a day, for rooms up to about 600 m³." },
      { key: "radiaal2250", waarom: "For a wet cellar floor: this radial fan blows **in a targeted way over the floor and into the corners**, where water lies longest." },
      { key: "ttk350", waarom: "For a renovation on the slope in Ivoz-Ramet or Mons-lez-Liège: 70 litres a day, for a ground floor with new plasterwork." },
      { key: "teddh30", waarom: "**For a room against the slope** that stays cold. This 30 kW electric site heater brings it up to temperature, so the dehumidifier performs better. It runs on three-phase power." },
    ],
    levering: {
      kop: "Delivery in Flémalle: along the Meuse or up the slope",
      alinea:
        "We drive **via the E313 and Liège**, just over an hour outside rush hour. Some streets on the slope are steep and narrow; mention it when you book. You choose a delivery date, and we agree the time with you. If it is a cellar after flooding, tell us **how high the water rose**.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar: rarely worth it from Flémalle",
      alinea:
        "Aartselaar is **just over an hour's drive** from Flémalle. Only those who need to go to the Antwerp area anyway gain anything by it. For a wet cellar, delivery is the better choice, because the technician then sets up the right combination of dehumidifier and fan straight away.",
    },
    buren: ["seraing", "grace-hollogne", "engis", "neupre", "saint-georges-sur-meuse"],
    faq: [
      {
        q: "My cellar by the Meuse was under water. When do I start drying?",
        a: "As soon as the standing water and the silt have gone. A dehumidifier removes the moisture from floor and walls, not the water still on the floor. When you book, tell us how high the water came, and the technician will bring a fan as well.",
      },
      {
        q: "Do you work on the slope in Les Awirs and Chokier?",
        a: "Yes, we deliver throughout Flémalle, including the villages higher up the slope. The streets there are sometimes narrow and steep. Let us know when you book whether the van can stop outside the door, and we will plan the delivery accordingly.",
      },
      {
        q: "Why does plasterwork against a wall in the slope dry so slowly?",
        a: "On the other side, that wall is against damp ground and stays cold. A cold wall dries more slowly, and a condensation dehumidifier works less well below about 15 °C. With a site heater added and the doors shut, it goes noticeably faster.",
      },
      {
        q: "Can I have an old industrial building along the Meuse dried?",
        a: "Yes. With a large volume, the technician first works out the number of cubic metres and checks whether the space can be closed off. A hall with open doors dries poorly. Usually it then takes a combination of large dehumidifiers and fans.",
      },
    ],
    realisaties: [],
  },
  fleron: {
    slug: "fleron",
    title: "Construction dehumidifier hire in Fléron | Vernast",
    description:
      "Dehumidifier hire in Fléron: homes on the plateau east of Liège, in Retinne, Romsée and Magnée, with cellars and screeds. Delivered, placed and set up.",
    h1: "Construction dehumidifier hire in Fléron",
    kicker: "Liège · on the plateau by the E40",
    rit: { afstand: "about 130 km", tijd: "almost an hour and a half" },
    intro: [
      "Fléron lies **on the plateau east of Liège**, on the road to Verviers and the Pays de Herve. In the past the municipality lived from **the coal mines**; today it is a residential municipality with many commuters to Liège. Our van gets there in almost an hour and a half.",
      "Fléron includes **Magnée, Retinne and Romsée**. This is also where **the fort of Fléron** stands, one of the twelve forts Brialmont had built around Liège. To the south the ground drops steeply to the Vesdre valley.",
    ],
    bouw: {
      kop: "Mining neighbourhoods, cellars and new housing estates",
      alineas: [
        "In Retinne and Romsée there are still **rows of homes from the mining era**, with a cellar and a narrow garden. Many of those houses are getting **a complete renovation**, with new wiring, new plasterwork and a new bathroom. On the plateau it is windy and cool, and a house that stood empty for a long time is cold right into its walls.",
        "On the edges of the municipality lie **housing estates with detached and semi-detached homes**. There it is usually about the screed: how long it has to dry and whether that can go faster. **Underfloor heating** may only be switched on step by step after the prescribed waiting time. Until then a dehumidifier does the work.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a miner's house in Retinne or Romsée** being completely renovated: 70 litres a day, up to about 400 m³." },
      { key: "teddh20", waarom: "This 20 kW site heater first warms up **a home that stood empty for a long time**, so the drying makes progress. It needs 400 V." },
      { key: "ttk650", waarom: "**For a home on a housing estate with fresh screed**: 110 litres a day, so the floor is ready for finishing sooner." },
      { key: "radiaal2250", waarom: "This radial fan blows **in a targeted way over a screed**, so the edges and corners of the floor dry too." },
    ],
    levering: {
      kop: "Delivery in Fléron",
      alinea:
        "Via the E313 and the E40 we are in Fléron in **almost an hour and a half**. You choose a delivery date when you book, and we deliver **by appointment**. The technician places the units, sets them up and measures the humidity at the start. If the home is in a new street without a house number, give us a landmark.",
    },
    afhalen: {
      kop: "Collecting yourself in Aartselaar",
      alinea:
        "A drive from Fléron to Aartselaar and back takes **almost three hours**. So collecting only pays off if you need to be in the Antwerp area anyway. With delivery the unit is **set up properly straight away**.",
    },
    buren: ["beyne-heusay", "soumagne", "chaudfontaine", "trooz"],
    faq: [
      {
        q: "My house in Retinne stood empty for a year. Why is it drying so poorly?",
        a: "A house that stood unheated for a long time is cold right into its walls, and cold walls release their moisture slowly. A condensation dehumidifier also only works well above 15 °C. With a site heater added, the walls and air come up to temperature, and then the house dries more smoothly.",
      },
      {
        q: "Can I use my underfloor heating to dry the screed?",
        a: "Only after the waiting time the screed supplier specifies, and then step by step. Heating too early or too hot risks cracks in the screed. Until then a dehumidifier does the work, possibly with a fan over the floor.",
      },
      {
        q: "Do you also deliver in Magnée, on the Vesdre side?",
        a: "Yes, in all parts of Fléron. Magnée lies on the edge of the plateau, where some streets drop steeply towards the valley. Let us know when you book whether the van can get to the home.",
      },
      {
        q: "How much electricity does a construction dehumidifier use?",
        a: "That depends on the model. The compact model draws 0.75 kW, the middle one 1.1 kW and the largest 1.4 kW. A 20 or 30 kW site heater uses much more, and we only use one when it is needed.",
      },
    ],
    realisaties: [],
  },
  "grace-hollogne": {
    slug: "grace-hollogne",
    title: "Dehumidifier hire in Grâce-Hollogne and Bierset | Vernast",
    description:
      "Dehumidifier hire in Grâce-Hollogne, Bierset, Velroux or Horion-Hozémont: for homes, farmhouses and commercial buildings near Liège Airport. Delivered.",
    h1: "Construction dehumidifier hire in Grâce-Hollogne",
    kicker: "Province of Liège · the airport municipality",
    rit: { afstand: "about 120 km", tijd: "just over an hour" },
    intro: [
      "Grâce-Hollogne is home to **Liège Airport**, the airport at Bierset, best known as a cargo airport. Around the site lie logistics zones and commercial buildings. Behind them lie the residential centres of Hollogne-aux-Pierres, Grâce-Berleur, Velroux and Horion-Hozémont.",
      "The centres on the Liège side belong to the **old coal-mining area**, with dense housing and workers' houses. Velroux and Horion-Hozémont are more rural. A contractor here works in a terraced house one week and in a warehouse or farmhouse the next. From Aartselaar it takes us just over an hour to drive to Grâce-Hollogne.",
    ],
    bouw: {
      kop: "Terraced houses by the city, warehouses by the airport",
      alineas: [
        "In Grâce-Berleur and Hollogne stand rows of older homes from the mining era, with **solid brick walls without a cavity** and small cellars. After a leak or during a renovation with new plasterwork, it is a small volume. A compact dehumidifier in a closed room does most of the work there.",
        "Near the airport it is about commercial buildings: a new **industrial floor**, offices being fitted out or a plant room after water damage. There, capacity per cubic metre is what counts. The technician checks the volume before confirming the number of units.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a warehouse or office space near Bierset**: 110 litres a day and suitable for rooms up to about 600 m³ with a fresh floor." },
      { key: "ttv4500", waarom: "Above a large concrete floor, the air just above the surface stays saturated. This fan **keeps it moving**, so the floor dries more evenly." },
      { key: "ttk170", waarom: "For a terraced house in Grâce or Hollogne: compact enough for a narrow hallway and, at 0.75 kW, an **economical unit**." },
      { key: "ttk350", waarom: "For a new-build home in Velroux or Horion-Hozémont: 70 litres a day, enough for a ground floor with screed." },
    ],
    levering: {
      kop: "Delivery in Grâce-Hollogne: by the airport and in the villages",
      alinea:
        "We drive **along the E313 and then towards the airport**, just over an hour outside rush hour. On a business park with access control, it is best to give us **the name of a contact person** in advance, so the technician is not left waiting at the barrier. You choose the delivery date when you book, and we agree the time.",
    },
    afhalen: {
      kop: "Collecting is possible, but rarely pays off",
      alinea:
        "Our collection point in Aartselaar is **just over an hour's drive** away. For one dehumidifier that can work, with a car it fits in upright. For a commercial space with several units we recommend delivery, because there the set-up matters more than the unit itself.",
    },
    buren: ["ans", "awans", "saint-nicolas", "flemalle"],
    faq: [
      {
        q: "Do you also deliver to a business park near Liège Airport?",
        a: "Yes. When you book, give us the address of the building, the access and a contact person on site. On sites with a barrier or badge control, we agree in advance who will let the technician in, so the delivery runs smoothly on the agreed day.",
      },
      {
        q: "How many dehumidifiers do I need for a new concrete floor in a warehouse?",
        a: "That depends on the volume of the space, the thickness of the floor and whether the space can be closed off. A warehouse with its doors open dries poorly. We usually combine large dehumidifiers with fans; the technician checks the number on site.",
      },
      {
        q: "Do you also work in Velroux and Horion-Hozémont?",
        a: "Yes, those parts of the municipality are within our delivery area. There it is more often farmhouses and new builds than terraced houses. For a remote home, describe the access, so the technician chooses the right route.",
      },
      {
        q: "Can a dehumidifier keep running overnight in an office?",
        a: "Yes, and that is the idea. A dehumidifier works continuously. If you switch it off at night, the air takes up moisture again from the walls and floor. Keep the room closed and agree that nobody switches the dehumidifier off when locking up the building.",
      },
    ],
    realisaties: [],
  },
  herstal: {
    slug: "herstal",
    title: "Construction dehumidifier hire in Herstal | Vernast",
    description:
      "Dehumidifier hire in Herstal: workers' houses in the old districts, cellars between the Meuse and the Albert Canal, new builds in Vottem, Milmort and Liers.",
    h1: "Construction dehumidifier hire in Herstal",
    kicker: "Liège · between the Meuse and the Albert Canal",
    rit: { afstand: "about 115 km", tijd: "just over an hour" },
    intro: [
      "Herstal lies **just downstream of Liège**, between the Meuse and the **Albert Canal**. The town grew up around its industry: FN Herstal has been making firearms here for more than a century. From Aartselaar you get there by van in just over an hour.",
      "Down below, close to the water, stand **the older town districts**. Higher up the slope lie **Vottem, Milmort and Liers**, parts of the municipality with more recent residential areas and housing estates.",
    ],
    bouw: {
      kop: "Workers' houses and cellars by the water",
      alineas: [
        "Around the centre stand **rows of narrow workers' houses** with a cellar under the front room. During a renovation the old plaster often comes off in one go and new **plasterwork** goes on every wall. Such a small home then takes in a lot of water in a short time.",
        "Close to the Meuse and the canal, **the groundwater is higher**. A cellar there feels cool and clammy, even without a leak. If the water comes from the ground, a dehumidifier will not solve it for good. **The technician takes a moisture reading during installation** and tells you whether it is construction moisture.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**For a single room or a bathroom** in a narrow terraced house: compact, 50 litres a day and easy to carry upstairs." },
      { key: "ttk350", waarom: "If **the whole home is getting new plasterwork**, this dehumidifier removes 70 litres a day, for rooms up to about 400 m³." },
      { key: "revolution", waarom: "**For a cold cellar by the Meuse.** This desiccant dehumidifier keeps absorbing moisture where a condensation dehumidifier performs too poorly." },
      { key: "ttv4500", waarom: "In a deep terraced house the air at the back stands still. The fan gets it moving, so **the back room dries too**." },
    ],
    levering: {
      kop: "Delivery in Herstal",
      alinea:
        "Via the E313 we are in Herstal in **just over an hour**. You choose a delivery date when you book; in Wallonia we deliver **by appointment**. In the old districts the streets are narrow and sometimes steep. Let us know in advance whether we can park outside the door. The technician puts the units in place floor by floor.",
    },
    afhalen: {
      kop: "Collecting yourself in Aartselaar",
      alinea:
        "Our collection point is just over an hour's drive from Herstal. There and back, twice, that costs **a good part of the day**. It only pays off if you need to be near Antwerp anyway. With delivery, the technician takes a moisture reading straight away.",
    },
    buren: ["luik-stad", "oupeye", "juprelle"],
    faq: [
      {
        q: "My cellar in Herstal stays damp. Is that because of the Meuse?",
        a: "It is possible. In the low-lying districts the groundwater is just below the floor, and a cellar that is always clammy will not dry out for good with a dehumidifier. We can, however, remove construction moisture after a renovation. The technician measures during installation which moisture it is.",
      },
      {
        q: "How many dehumidifiers do I need in a terraced house that has been completely replastered?",
        a: "Usually allow one dehumidifier per floor, with the doors to the stairs shut. A narrow terraced house has little volume, but new plasterwork on every wall brings in a lot of water. Adding a fan speeds up the drying.",
      },
      {
        q: "Do you also deliver in Vottem, Milmort and Liers?",
        a: "Yes, in all parts of Herstal. Higher up the slope it is more often a new build on a housing estate, with a screed that has to dry before the floor goes on. Give us the address and the access when you book.",
      },
      {
        q: "Can a construction dehumidifier run on the wiring of an old home?",
        a: "The condensation dehumidifiers and fans work on a standard 230 volt socket. If the wiring is old, spread the units over different circuits. Only the site heaters need a 400 volt connection, and we discuss that with you in advance.",
      },
    ],
    realisaties: [],
  },
  juprelle: {
    slug: "juprelle",
    title: "Construction dehumidifier hire in Juprelle | Vernast",
    description:
      "Dehumidifier hire in Juprelle, Slins, Lantin, Paifve or Wihogne: for converted farmhouses and new builds in the Liège part of the Hesbaye. Delivered and set up.",
    h1: "Construction dehumidifier hire in Juprelle",
    kicker: "Province of Liège · rural Hesbaye above Liège",
    rit: { afstand: "about 110 km", tijd: "just over an hour" },
    intro: [
      "Juprelle lies north of Liège, in the **Liège part of the Hesbaye**. It is a rural municipality with fields and villages such as Slins, Fexhe-Slins, Lantin, Paifve, Wihogne, Voroux-lez-Liers and Villers-Saint-Siméon.",
      "Anyone building or renovating in Juprelle is often working in **an old farmhouse** or on a new home on the edge of a village. The proximity of Liège and the E313 attracts new residents, but the character remains rural. From Aartselaar it takes us just over an hour to drive to Juprelle.",
    ],
    bouw: {
      kop: "Enclosed farmhouses and new builds on the village edge",
      alineas: [
        "A **Hesbaye courtyard farmhouse** has thick brick walls and barns with a high roof. If you convert part of it into a home, new plasterwork, a new floor and often underfloor heating go into a large volume. That needs more drying capacity than an ordinary home, and air that keeps moving right up under the roof.",
        "With a new build, a cellar or excavation sometimes stays wet for a long time after rain. Pump the water out before you start drying. After that **the screed still has to dry** before the floor layer comes, and a moisture reading decides whether it is ready.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a courtyard farmhouse under conversion**: 110 litres a day and suitable for rooms up to about 600 m³, for high barns with a lot of new plasterwork." },
      { key: "ttv4500", waarom: "Under a high farmhouse roof, damp air lingers. This 4,500 m³/h fan **gets it moving**, so walls and floor dry evenly." },
      { key: "ttk350", waarom: "For a new-build home in Slins or Lantin: 70 litres a day at a power of 1.1 kW, for a ground floor with fresh screed." },
      { key: "radiaal2250", waarom: "**For a cellar that stayed wet after rain**: this radial fan blows in a targeted way over the floor and right into the corners." },
    ],
    levering: {
      kop: "Delivery in Juprelle: right by the E313",
      alinea:
        "Juprelle lies **right by the E313**, just over an hour's drive from our warehouse in Aartselaar. If the farmhouse is behind a gate or on a narrow country lane, describe the access when you book. You choose a delivery date and we agree the time. The technician places the units, sets them up and **measures the moisture**.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar: just over an hour along the E313",
      alinea:
        "From Juprelle you drive **along the E313** to Aartselaar. In a van you can take two units. For a farmhouse with several rooms and a fan we recommend delivery, so the set-up is right straight away.",
    },
    buren: ["ans", "awans", "herstal", "oupeye"],
    faq: [
      {
        q: "How do I dry a converted barn with a high roof?",
        a: "A high barn holds much more air than the floor area suggests. A large dehumidifier together with a fan that keeps the air moving under the roof works best. Give us the dimensions when you book; the technician checks the set-up on site.",
      },
      {
        q: "Can the screed over underfloor heating be dried faster?",
        a: "The screed has to cure first, and then the installer's heating-up protocol follows. In the meantime a construction dehumidifier removes the moisture from the air, so the screed can release it. Follow your installer's schedule and have the residual moisture measured before the floor layer starts.",
      },
      {
        q: "Do you deliver in all the villages of Juprelle, including Paifve and Wihogne?",
        a: "Yes, we deliver in every village of Juprelle. In the smaller villages some farmhouses are on narrow country lanes. Describe how to reach the farmhouse when you book, and we will plan the route and the vehicle accordingly.",
      },
      {
        q: "Why is there water in my excavation after a shower?",
        a: "Water in an excavation or against a cellar wall only drains slowly into the ground. Pump it out first, because a dehumidifier is not made for puddles. After that a dehumidifier with a fan removes the moisture from the floor and the walls.",
      },
    ],
    realisaties: [],
  },
  neupre: {
    slug: "neupre",
    title: "Construction dehumidifier hire in Neupré | Vernast",
    description:
      "Dehumidifier hire in Neupré: villa districts in the woods in Plainevaux, Rotheux-Rimière and Neuville-en-Condroz. For renovation, new builds and screed.",
    h1: "Construction dehumidifier hire in Neupré",
    kicker: "Liège · villa districts on the edge of the Condroz",
    rit: { afstand: "about 140 km", tijd: "about an hour and a half" },
    intro: [
      "Neupré lies **on the plateau south-west of Liège**, where the city gives way to the Condroz. The municipality consists of **Plainevaux, Rotheux-Rimière, Neuville-en-Condroz and Ehein**. Neuville-en-Condroz is home to the American military cemetery from the Second World War.",
      "Neupré is mainly a residential municipality, with **villa districts in the woods** and detached houses on large plots. Many of those homes are a few decades old and are being renovated or extended today. From Aartselaar it takes us about an hour and a half to drive there.",
    ],
    bouw: {
      kop: "Older villas, renovated today",
      alineas: [
        "An older villa often has **a cellar or a crawl space**, outdated glazing and little insulation. During a thorough renovation a lot of moisture comes into the house in a short time: new plasterwork, **a screed with underfloor heating**, sometimes a masonry extension. That has to be dry before the floor layer and the painter start.",
        "The woods around the houses keep the air damp and the façades in the shade. Airing helps little then, because **the outside air brings moisture with it**. A dehumidifier in a closed room works better. For a crawl space, a **desiccant dehumidifier** blows dry air in through the existing hatch.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a villa in the middle of renovation**: 70 litres a day and a range of up to 400 m³, enough for a ground floor with new plaster and screed." },
      { key: "revolution", waarom: "For **the crawl space under an older villa**: this desiccant dehumidifier supplies dry air via ducting, even when it stays cold under the house." },
      { key: "radiaal2250", waarom: "This radial fan blows the damp layer of air away over **a new screed**, so the floor dries more evenly." },
      { key: "ttk170", waarom: "For a bathroom or a small extension: compact, 0.75 kW on a standard socket, without bothering the rest of the house." },
    ],
    levering: {
      kop: "Delivery in Neupré: right up to the villa in the woods",
      alinea:
        "We reach Neupré in about an hour and a half, **via Liège and the road to the Condroz**. In Wallonia we deliver by appointment: you choose a delivery date when you book. Many villas are on quiet roads with a long drive, which makes unloading easy. The technician places the units room by room and **measures at the start** how wet the screed and walls are.",
    },
    afhalen: {
      kop: "Collecting yourself: allow a full afternoon",
      alinea:
        "You drive about an hour and a half to our collection point in Aartselaar, one way. When renovating a whole villa, you also often need more than one dehumidifier. **Delivery is simpler then**: everything comes in one go and is in place straight away.",
    },
    buren: ["seraing", "esneux", "nandrin", "flemalle"],
    faq: [
      {
        q: "My villa is being completely renovated. When do I hire a dehumidifier?",
        a: "As soon as the plaster and the screed are in and the windows can be shut. Earlier makes little sense, because the dry air then escapes. Build the drying time into your planning, so the floor layer and the painter do not have to wait for a floor that is still wet.",
      },
      {
        q: "How do I dry a crawl space under my villa?",
        a: "With a desiccant dehumidifier that stands outside the crawl space and blows dry air in through the existing hatch via a duct. You do not have to go in yourself. Such a space is usually too cold for a condensation dehumidifier.",
      },
      {
        q: "Can I use the underfloor heating to dry the screed faster?",
        a: "Only once the screed layer has approved the heating-up schedule, and then gradually. Meanwhile a dehumidifier and a fan work on the moisture in the room. At collection the technician takes a reading, so you have a figure for the floor layer.",
      },
      {
        q: "Why does airing help so little in a house in the woods?",
        a: "Because the air under the trees is damp itself, especially in spring and autumn. Open windows then bring in almost as much moisture as they remove. With the windows shut and a dehumidifier on, you do get the water out of the room.",
      },
    ],
    realisaties: [],
  },
  oupeye: {
    slug: "oupeye",
    title: "Construction dehumidifier hire in Oupeye | Vernast",
    description:
      "Dehumidifier hire in Oupeye: village houses in Haccourt and Hermalle on the Meuse, housing estates on the Hermée and Houtain plateau. Delivered and set up.",
    h1: "Construction dehumidifier hire in Oupeye",
    kicker: "Liège · Basse-Meuse, from the river to the plateau",
    rit: { afstand: "about 115 km", tijd: "just over an hour" },
    intro: [
      "Oupeye lies in **the Basse-Meuse**, north of Liège. The municipality runs **from the Meuse up onto the plateau** towards the Hesbaye, with the Albert Canal and its business parks in between. We drive there in just over an hour.",
      "Oupeye has seven villages. **Hermalle-sous-Argenteau, Haccourt and Vivegnis** lie in the valley. **Hermée, Heure-le-Romain and Houtain-Saint-Siméon** lie on the plateau, and Oupeye itself lies in between.",
    ],
    bouw: {
      kop: "Old village houses in the valley, new builds on the plateau",
      alineas: [
        "In the villages along the Meuse stand **older houses in brick and natural stone**, often without a damp-proof course in the wall. After a new floor or new plasterwork they dry **more slowly than a new build**. Thick walls release their moisture slowly, and the ground floor stays cool.",
        "On the plateau around Hermée and Houtain, **housing estates with detached homes** have been added. There the moisture comes mainly from **a fresh screed** and new interior walls. That water has to come out before the parquet or tiles are laid.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a new build with screed across the whole ground floor**: 110 litres a day, for rooms up to about 600 m³." },
      { key: "radiaal2250", waarom: "This radial fan blows in a targeted way over **a fresh screed**, so the corner by the patio door dries too." },
      { key: "ttk350", waarom: "For **a village house in Haccourt or Hermalle** being renovated floor by floor: 70 litres a day." },
      { key: "teddh20", waarom: "This 20 kW site heater warms up **a cold ground floor in the valley**, so the condensation dehumidifier works better. It needs 400 V." },
    ],
    levering: {
      kop: "Delivery in Oupeye",
      alinea:
        "Via the E313 we are in Oupeye in **just over an hour**. You choose a delivery date when you book, and we fix the delivery time with you **by appointment**. The technician places the units, sets them up and takes a reading at the start. If the street on your housing estate has not been laid yet, let us know in advance.",
    },
    afhalen: {
      kop: "Collecting yourself in Aartselaar",
      alinea:
        "Aartselaar is just over an hour from Oupeye. If you collect a unit and return it later, you make that drive four times. A construction dehumidifier also has to be transported **upright**. So collecting mainly pays off if you regularly drive towards Antwerp anyway.",
    },
    buren: ["herstal", "juprelle", "bitsingen", "wezet"],
    faq: [
      {
        q: "How long does a screed in a new build in Hermée need to dry before parquet can go on it?",
        a: "As a rule of thumb, without help you allow a week per centimetre for the first four centimetres, and longer after that. With a large dehumidifier, closed windows and a fan over the floor it goes faster. Have the residual moisture measured before the parquet layer starts.",
      },
      {
        q: "Why is my old house in Haccourt drying so slowly after the renovation?",
        a: "Old walls of brick or natural stone are thick and often have no damp-proof course. They hold a lot of water and release it slowly, especially if the ground floor is cold. A dehumidifier with a site heater and enough time works better there than a short drying session.",
      },
      {
        q: "Can you deliver to a site where the street has not been laid yet?",
        a: "Yes, if the van can drive safely to close to the home. Describe the access when you book. The technician does the last stretch across the site with a sack truck.",
      },
      {
        q: "How many units do I need for a detached home on the plateau?",
        a: "For a ground floor with screed, one large dehumidifier with a fan is often enough. If there is new plasterwork upstairs too, put a second dehumidifier there. We calculate on the volume of the room, not just the floor area.",
      },
    ],
    realisaties: [],
  },
  "saint-nicolas": {
    slug: "saint-nicolas",
    title: "Construction dehumidifier hire in Saint-Nicolas | Vernast",
    description:
      "Dehumidifier hire in Saint-Nicolas, Montegnée or Tilleur: compact units for workers' houses and cellars on the slope above the Meuse. Delivered and set up.",
    h1: "Construction dehumidifier hire in Saint-Nicolas",
    kicker: "Province of Liège · densely built up against the city",
    rit: { afstand: "about 120 km", tijd: "just over an hour" },
    intro: [
      "Saint-Nicolas borders the west side of Liège, between Ans on the plateau and the Meuse in the valley. The municipality is small in area and **densely built up**. It consists of Saint-Nicolas, Montegnée and Tilleur.",
      "A large share of the homes dates from **the days of the coal mines**: street after street of workers' houses on the slope, close together and often with a small yard. From Aartselaar it takes us just over an hour to drive to Saint-Nicolas.",
    ],
    bouw: {
      kop: "Workers' houses on the slope, walls against the ground",
      alineas: [
        "On the slope down to the Meuse, many houses stand partly against the ground: the back wall or the cellar lies lower than the street. There **moisture from outside** gets through the wall, and you notice it in a cellar or back kitchen that never gets dry. A dehumidifier only helps once that water stops coming in.",
        "When **renovating a workers' house** you work in narrow rooms, with a steep staircase and little volume. A compact unit that you move room by room does more there than a large one. If a crack runs through a wall, have it sealed first before you start drying.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**For a workers' house with a steep staircase**: compact and runs on a standard socket. You move it from room to room without effort." },
      { key: "teddh30", waarom: "For a cellar or back kitchen **against the slope** that stays cold all year. This 30 kW heater on 400 V warms the room, so the condensation dehumidifier works better." },
      { key: "revolution", waarom: "**For a cellar below street level** that stays cool and damp. This desiccant dehumidifier also works in cold rooms and dries via ducting." },
      { key: "ttk350", waarom: "For a complete renovation with new plasterwork on two floors: 70 litres a day, and you move it floor by floor." },
    ],
    levering: {
      kop: "Delivery in Saint-Nicolas: in narrow streets on the slope",
      alinea:
        "The streets in Saint-Nicolas and Montegnée are **narrow and sloping**, and parking there is not always easy. Let us know when you book whether the van can stop outside the door; otherwise the technician carries the unit the last stretch. You choose a delivery date, and we fix the time together. The unit only starts running after **a first reading**.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar, along the E313",
      alinea:
        "It is **just over an hour's drive** to Aartselaar, and the same back. One compact dehumidifier fits in an ordinary car if you transport it upright. For a cellar that never gets dry, delivery is the better choice: the technician then looks straight away at where the moisture is coming from.",
    },
    buren: ["luik-stad", "ans", "grace-hollogne", "seraing"],
    faq: [
      {
        q: "My cellar against the slope never gets dry. Will a construction dehumidifier solve that?",
        a: "Not as long as water from outside keeps coming through the wall. Then the dehumidifier removes moisture that is immediately replaced. The technician first checks whether the wall is getting wet from outside. If it is, the outside has to be dealt with before drying makes sense.",
      },
      {
        q: "Will a dehumidifier fit through the narrow hallway of a workers' house?",
        a: "The compact dehumidifier goes through an ordinary interior door and can go up a steep staircase. A larger unit needs more room. Mention a narrow hallway or staircase when you book, and we will choose a unit that fits through.",
      },
      {
        q: "Do you also deliver in Montegnée and Tilleur?",
        a: "Yes, both belong to Saint-Nicolas and are within our delivery area. Tilleur lies lower, closer to the Meuse, and there it is more often about cellars. Montegnée has more terraced houses on the slope, and there renovation is the most common reason.",
      },
      {
        q: "How long does new plasterwork take to dry in a small home?",
        a: "That depends on the thickness of the layer, the temperature and the humidity. In a cold home or with thicker layers it takes longer. A moisture reading decides when you can paint, not the calendar.",
      },
    ],
    realisaties: [],
  },
  seraing: {
    slug: "seraing",
    title: "Construction dehumidifier hire in Seraing | Vernast",
    description:
      "Dehumidifier hire in Seraing, Ougrée, Jemeppe or Boncelles: for workers' houses in the Meuse valley and new builds on the plateau. Delivered and set up.",
    h1: "Construction dehumidifier hire in Seraing",
    kicker: "Province of Liège · the steel town on the Meuse",
    rit: { afstand: "about 130 km", tijd: "just over an hour" },
    intro: [
      "Seraing is **the town of Cockerill**. In the nineteenth century John Cockerill settled in the castle of Seraing, the former summer residence of the prince-bishops of Liège. Around his works a large steel industry grew up, which still shapes the town today.",
      "The municipality runs from the Meuse up to the plateau. Down below lie Ougrée, Jemeppe and the centre of Seraing, with dense rows of workers' houses. Up above lies **Boncelles**, with more spacious residential areas. By the water lies Val-Saint-Lambert, known for its crystal. From Aartselaar it takes us just over an hour to drive to Seraing.",
    ],
    bouw: {
      kop: "Workers' houses in the valley, new builds on the plateau",
      alineas: [
        "In the Meuse valley the steelworkers' terraced houses stand close together, with narrow fronts and solid brick walls without a cavity. During a renovation they get new plasterwork and often a new floor, and in the small volume the air quickly becomes saturated. **Dry room by room** with the door shut; that works better here than the whole house at once.",
        "On the Boncelles plateau it is more about new builds and larger homes, with screed and plasterwork that have to be dry before finishing. Between valley and plateau stand **homes against the slope**. Their cellar or back room is partly underground and stays cold in winter.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**For a terraced house in Ougrée or Jemeppe**: compact, easy to take upstairs and economical at 0.75 kW. You move it from room to room." },
      { key: "ttk350", waarom: "For a more spacious home on the Boncelles plateau: 70 litres a day, so screed and plasterwork can dry together." },
      { key: "ttv4500", waarom: "In a deep terraced house with a narrow hallway, the back extension is hard to get dry. This fan **pushes the dry air through the whole house**." },
      { key: "revolution", waarom: "**For a cellar against the slope** that stays cold and damp. This desiccant dehumidifier keeps working where a condensation dehumidifier collects little water because of the cold." },
    ],
    levering: {
      kop: "Delivery in Seraing: in the valley and on the plateau",
      alinea:
        "We drive **along the E313 and the Liège ring road**, just over an hour outside rush hour. Down in the valley the streets are narrow and often full of parked cars; up in Boncelles there is more room. You choose a delivery date when you book and we make an appointment. The technician **takes a moisture reading at the start**, so you can compare later.",
    },
    afhalen: {
      kop: "Collecting rarely pays off from Seraing",
      alinea:
        "Aartselaar is **just over an hour's drive** away, so there and back quickly costs you half a working day. If you are heading towards Antwerp anyway, you can take one unit with you and transport it upright. For more units, delivery is simpler.",
    },
    buren: ["luik-stad", "flemalle", "neupre", "saint-nicolas"],
    faq: [
      {
        q: "How many dehumidifiers do I need for a workers' house in the valley?",
        a: "Usually one compact dehumidifier, with a fan added if the house is deep and narrow. With a complete renovation and new plasterwork on every floor, a second unit can shorten the drying time. The technician looks at the volume on site.",
      },
      {
        q: "Do you also deliver in Boncelles and Val-Saint-Lambert?",
        a: "Yes, Boncelles and Val-Saint-Lambert are within our delivery area in Seraing. In Boncelles it is more often a new build, in Val-Saint-Lambert homes closer to the Meuse. When you book, say whether it is a cellar or a new floor.",
      },
      {
        q: "Does an ordinary dehumidifier work in a cold cellar against the slope?",
        a: "Less well. Below about 15 °C a condensation dehumidifier collects noticeably less water. A desiccant dehumidifier does keep working in the cold. Another solution is a site heater that warms up the cellar first, with the condensation dehumidifier next to it.",
      },
      {
        q: "What should I tell you so the technician in Seraing can get started straight away?",
        a: "When you book, tell us how the home can be reached and who will be present at the delivery. Questions in French are welcome too, by email or phone.",
      },
    ],
    realisaties: [],
  },
  soumagne: {
    slug: "soumagne",
    title: "Dehumidifier hire in Soumagne, Pays de Herve | Vernast",
    description:
      "Dehumidifier hire in Soumagne: farmhouses and homes in Melen, Micheroux, Ayeneux and Evegnée-Tignée on the edge of the Pays de Herve. Delivered and set up.",
    h1: "Construction dehumidifier hire in Soumagne",
    kicker: "Liège · the gateway to the Pays de Herve",
    rit: { afstand: "about 135 km", tijd: "about an hour and a half" },
    intro: [
      "Soumagne lies **where the edge of Liège gives way to the Pays de Herve**, with its meadows, hedges and farmhouses. The municipality has its own exit on **the E40**, and beneath it runs the Soumagne railway tunnel on the high-speed line to Aachen. From Aartselaar it takes us about an hour and a half to drive there.",
      "The municipality has six villages: **Ayeneux, Cerexhe-Heuseux, Evegnée-Tignée, Melen, Micheroux and Soumagne**. **Coal** was mined in and around Micheroux, Evegnée has one of the forts around Liège, and around Melen and Cerexhe-Heuseux the countryside with scattered farmhouses dominates.",
    ],
    bouw: {
      kop: "Farmhouses in the meadows, homes from the mining era",
      alineas: [
        "In the countryside stand **farmhouses in brick and natural stone**, often around an enclosed courtyard. When **a stable or barn becomes a home**, it gets a new floor, insulation and plasterwork. That construction moisture has to leave a large volume with thick walls, and in the cool climate of the plateau that does not happen by itself.",
        "In Micheroux and the centre of Soumagne stand **smaller homes from the mining era**, in terraces or semi-detached. There people often renovate **room by room**, and the cellars stay cool. If you want to turn a cellar into an office or storage room, first dry out the construction moisture and have it measured to check that no moisture keeps getting in.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a farmhouse or converted barn** with a large volume: 110 litres a day, up to about 600 m³." },
      { key: "teddh30", waarom: "**For the cold interior of a farmhouse** in winter. This 30 kW heater brings the room above 15 °C, so a condensation dehumidifier works well. It needs 400 V." },
      { key: "ttk170", waarom: "For **a single room in a home in Micheroux** with new plasterwork: compact, 50 litres a day." },
      { key: "revolution", waarom: "For **a cellar being given a new use**: this desiccant dehumidifier extracts moisture from the air even in a cool room." },
    ],
    levering: {
      kop: "Delivery in Soumagne",
      alinea:
        "Via the E313 and the E40 to the Soumagne exit we are on the road for **about an hour and a half**. You choose a delivery date when you book, and we fix the exact time **by appointment**. If the farmhouse is on a country lane or behind a gate, describe the access in advance. The technician places the units room by room.",
    },
    afhalen: {
      kop: "Collecting yourself in Aartselaar",
      alinea:
        "From Soumagne to Aartselaar and back you are **on the road for about three hours**. A farmhouse with several rooms also often needs two or three units. Delivery is the logical choice here.",
    },
    buren: ["fleron", "blegny", "herve", "olne"],
    faq: [
      {
        q: "How do I dry a barn in Soumagne that I have converted into a home?",
        a: "Work zone by zone and keep the space closed. A large dehumidifier, a fan along the wettest walls and a site heater in winter give the best result. A barn with thick walls and a new floor needs weeks. Have it measured before you finish.",
      },
      {
        q: "Can I fit out a cellar in Micheroux as an office after drying?",
        a: "First the construction moisture has to come out, and after that it has to be established that no moisture is getting in from outside. A dehumidifier does the first. For the second, the technician takes readings at installation and at collection. If the value stays high, more than drying is needed.",
      },
      {
        q: "Is 400 volt three-phase power needed on my site in Melen?",
        a: "Only for the site heaters. The dehumidifiers and fans work on a standard 230 volt socket. If the farmhouse has no three-phase power, mention it when you book. We will then suggest a set-up without a heater, for example with a desiccant dehumidifier.",
      },
      {
        q: "How do you plan a delivery so far from Aartselaar?",
        a: "We combine the trip with other addresses in the area around Liège and Verviers. You choose a delivery date when you book, and we agree the time with you. Set-up, adjustment and a moisture reading are part of the delivery.",
      },
    ],
    realisaties: [],
  },
  sprimont: {
    slug: "sprimont",
    title: "Construction dehumidifier hire in Sprimont | Vernast",
    description:
      "Dehumidifier hire in Sprimont, Louveigné, Dolembreux or Gomzé-Andoumont: thick limestone walls in the old centres and new builds on the estates.",
    h1: "Construction dehumidifier hire in Sprimont",
    kicker: "Liège · the municipality of the quarries",
    rit: { afstand: "about 145 km", tijd: "about an hour and a half" },
    intro: [
      "Sprimont lies **on the E25**, between Liège and the Ardennes. The municipality is known for its **limestone quarries**: the blue-grey stone quarried here is called Sprimont stone.",
      "Sprimont includes villages such as Louveigné, Dolembreux, Gomzé-Andoumont and **Banneux**, the place of pilgrimage. Next to the old centres lie new housing estates for people who work in Liège. From Aartselaar we get there in about an hour and a half.",
    ],
    bouw: {
      kop: "Thick stone walls and new housing estates",
      alineas: [
        "In the old centres stand farmhouses and homes in limestone, with **very thick walls**. Such a wall absorbs a lot of moisture and releases it slowly. Anyone renovating a stone home with new lime plaster or a new floor therefore has to dry for longer than in a brick house. Finishing too early **seals the moisture in**.",
        "On the new housing estates it is about new builds and screed, so about construction moisture. A dehumidifier of the right size then keeps the schedule achievable. An **unheated shell** stays cold in winter, and then the technician puts a heater next to it.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a converted stone farmhouse**: 70 litres a day and a range of up to 400 m³, enough for a living area with new plasterwork." },
      { key: "ttv4500", waarom: "Against a thick limestone wall this fan blows away the saturated layer of air, so **the wall releases its moisture faster**." },
      { key: "teddh30", waarom: "For **a new build in winter**: this 30 kW heater warms a shell to above 15 °C. It needs three-phase power (400 V)." },
      { key: "ttk170", waarom: "For a bathroom or an attic in a new home in Louveigné or Dolembreux: compact, 0.75 kW and no three-phase power needed." },
    ],
    levering: {
      kop: "Delivery in Sprimont: straight along the E25",
      alinea:
        "Sprimont lies **on the E25 beyond Liège**, about an hour and a half's drive from Aartselaar. Delivery in Wallonia is by appointment; you choose a delivery date when you book. On a farmhouse with an inner courtyard the van can often get right to the door. **Tell us in advance which rooms need drying**, and the technician will bring the right number of units.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar: three hours there and back",
      alinea:
        "From Sprimont you drive about an hour and a half to our warehouse, and the same back. You also transport a dehumidifier **upright**, so not lying down in the boot. For a stone home you also want **a reading at the start**, and you get that when we deliver.",
    },
    buren: ["chaudfontaine", "trooz", "esneux", "aywaille", "theux"],
    faq: [
      {
        q: "How long does a wall of Sprimont stone need to dry after a renovation?",
        a: "Usually longer than a brick wall, because the walls are so thick. Allow weeks, depending on how much water went into the plaster and joints. The technician takes a reading at the start and at collection, so you can see the difference.",
      },
      {
        q: "Can I heat up a stone farmhouse quickly to dry it?",
        a: "Better to do it gradually. A thick stone wall that heats up quickly dries on the surface while the core stays wet. A dehumidifier with a fan and a moderate temperature gives a more even result.",
      },
      {
        q: "Do you also deliver in Banneux and Louveigné?",
        a: "Yes, Banneux and Louveigné belong to Sprimont, and we deliver there by appointment. Give us the correct address and the type of work when you book, and we will plan the trip together with other addresses in the area.",
      },
      {
        q: "Does a dehumidifier work in a cold shell in winter?",
        a: "A condensation dehumidifier loses a lot of efficiency below 15 °C. In a shell without heating the technician therefore puts an electric heater next to the dehumidifier. That heater needs three-phase power; tell us in advance whether there is a 400 V connection on site.",
      },
    ],
    realisaties: [],
  },
  trooz: {
    slug: "trooz",
    title: "Dehumidifier hire in Trooz, in the Vesdre valley | Vernast",
    description:
      "Dehumidifier hire in Trooz, Forêt, Fraipont or Nessonvaux: terraced houses in the narrow Vesdre valley, after water damage or a renovation. By appointment.",
    h1: "Construction dehumidifier hire in Trooz",
    kicker: "Liège · villages on the Vesdre",
    rit: { afstand: "about 140 km", tijd: "about an hour and a half" },
    intro: [
      "Trooz lies **in the Vesdre valley, between Chaudfontaine and Pepinster**. The municipality includes Forêt, Fraipont and Nessonvaux: villages along the river in the narrow valley, with residential areas on the slopes above.",
      "For a long time this was an industrial valley, with factories along the water and the railway. That is where the **rows of workers' houses** come from that still stand close to the Vesdre, often with their back wall against the slope. From Aartselaar it takes us about an hour and a half to drive there.",
    ],
    bouw: {
      kop: "Terraced houses between river and slope",
      alineas: [
        "Trooz was **hit hard in July 2021** by the flooding of the Vesdre. Many homes in the valley have since been stripped and rebuilt. The moisture there is not just in the plaster but **deep in the brick and the floor**, and then a dehumidifier needs to be able to run for weeks.",
        "The slope plays a part too. A room at the back often has earth or rock against the wall, and that wall stays cold and damp, even without a flood. A dehumidifier removes **construction moisture and floodwater**. Water that keeps coming from the slope needs work on the wall.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a terraced house that has to dry completely**: 110 litres a day and a range of up to 600 m³, enough for floor and walls together." },
      { key: "ttv4500", waarom: "In a narrow, deep terraced house the air moves little between front and back. This 4,500 m³/h fan **sends the damp air** to the dehumidifier." },
      { key: "revolution", waarom: "**For a cold room against the slope**: this desiccant dehumidifier keeps absorbing moisture where a condensation dehumidifier performs poorly because of the cold." },
      { key: "ttk170", waarom: "For an upper floor or a small renovation in Forêt: compact, 50 litres a day and 0.75 kW on a standard socket." },
    ],
    levering: {
      kop: "Delivery in Trooz: via Liège into the valley",
      alinea:
        "We drive about an hour and a half, **via Liège** and then down to the Vesdre. In Wallonia we deliver **by appointment**: you choose a delivery date when you book. In the narrow village centres the van often stands on a busy road. So let us know whether there is a drive or a parking space outside the door, and we will plan the unloading accordingly.",
    },
    afhalen: {
      kop: "Collecting yourself takes half a day from Trooz",
      alinea:
        "Aartselaar is about an hour and a half's drive from Trooz, one way. A dehumidifier also has to be **transported upright**. If you do come, drive outside rush hour around Liège. For a home after water damage, **delivery with a moisture reading** at the start is usually the better choice.",
    },
    buren: ["chaudfontaine", "fleron", "olne", "sprimont"],
    faq: [
      {
        q: "My house in the Vesdre valley has been stripped after the flood. Can I dry it now?",
        a: "Yes, this is the right moment. Without plaster and floor coverings, walls and floor release their moisture most easily. Keep windows and doors shut while the dehumidifier runs. During installation the technician measures how wet the brick still is.",
      },
      {
        q: "Why does the wall at the back of my house stay damp?",
        a: "In many houses in Trooz the back wall stands against the slope, with earth or rock against it. That wall stays cold and absorbs moisture from outside when it rains. A dehumidifier removes the construction moisture, but water from the slope needs work on the outside.",
      },
      {
        q: "How many units do I need for a two-storey terraced house?",
        a: "Usually one dehumidifier per storey, and after water damage a fan on the ground floor as well. When you book, give us the floor area and how high the water rose. The technician puts the combination together and adjusts it on site if needed.",
      },
      {
        q: "Can you deliver if the street is narrow and busy?",
        a: "Yes. The technician unloads as quickly as possible and takes the units inside with a sack truck. Let us know when you book whether there is a drive or a space outside the door, and we will take that into account when planning.",
      },
    ],
    realisaties: [],
  },
  wezet: {
    slug: "wezet",
    title: "Dehumidifier hire in Visé, on the Dutch border | Vernast",
    description:
      "Dehumidifier hire in Visé: old town houses on the Meuse, Cheratte, Argenteau and Lanaye by the Dutch border. Delivered and set up by a technician.",
    h1: "Construction dehumidifier hire in Visé",
    kicker: "Liège · Meuse town on the Dutch border",
    rit: { afstand: "about 125 km", tijd: "almost an hour and a half" },
    intro: [
      "Visé, Wezet in Dutch, lies on the Meuse, just before the river **flows into the Netherlands**. The Albert Canal runs alongside, and at Lanaye the large locks lie on the border. From Aartselaar it takes us almost an hour and a half to drive there.",
      "The town also includes **Argenteau, Cheratte, Richelle and Lixhe**. Cheratte has a **coal-mining past**, Argenteau lies against the rocks of the Meuse valley, and around Lanaye the marl area of the Sint-Pietersberg begins.",
    ],
    bouw: {
      kop: "A town by the water, villages against the rock face",
      alineas: [
        "In the centre stand **old town houses with cellars**, close to the Meuse. The ground there is naturally damp, and a cellar stays cool. After a renovation we remove the construction moisture from new plasterwork or a new floor. **Moisture that keeps coming from the ground** is mapped separately by the technician with a moisture reading.",
        "In Cheratte and Argenteau homes stand **against the slope**, sometimes with the back wall against rock or earth. After a wet spell moisture seeps through the wall there. In the newer neighbourhoods around the town it is about **new builds with screed and plasterwork**, and there a dehumidifier does what you expect.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**For the cellar of a town house by the Meuse.** The desiccant dehumidifier keeps working in the cold, where a condensation dehumidifier loses efficiency." },
      { key: "ttk350", waarom: "For **a home in Cheratte or Argenteau** with new plasterwork: 70 litres a day, up to about 400 m³." },
      { key: "teddh30", waarom: "On **a winter site in an old house**, this 30 kW heater brings the room above 15 °C. It needs three-phase power at 400 V." },
      { key: "ttv4500", waarom: "Along **a wall on the hillside** it blows away the wet layer of air, so the dehumidifier picks up that moisture." },
    ],
    levering: {
      kop: "Delivery in Visé",
      alinea:
        "The drive from Aartselaar to Visé takes **almost an hour and a half**. You choose a delivery date when you book; we agree the exact time with you **by appointment**. The technician places, sets up and measures. In the old town centre and in Argenteau parking is sometimes tight, so mention it in advance.",
    },
    afhalen: {
      kop: "Collecting yourself in Aartselaar",
      alinea:
        "Collecting a unit in Aartselaar means **almost three hours' driving** there and back from Visé, and again later to return it. With a cellar on the Meuse, a lot depends on the right type of dehumidifier and the set-up. There, delivery with a reading is the better choice.",
    },
    buren: ["oupeye", "bitsingen", "dalhem", "blegny"],
    faq: [
      {
        q: "My cellar in Visé is right by the Meuse. Can a dehumidifier get it dry?",
        a: "We can remove construction moisture after a renovation, even in a cool cellar, with a desiccant dehumidifier. If the water comes from the ground or through the wall, it returns as soon as the dehumidifier has gone. The technician measures during installation and tells you which of the two it is.",
      },
      {
        q: "Do you also deliver in Lanaye and Lixhe, by the border?",
        a: "Yes, in all parts of Visé. Give the full address when you book. If the home is remote, by the locks or on the slope, also describe the access so the technician takes the right route.",
      },
      {
        q: "What do I do with a wall in Argenteau that lies against the slope?",
        a: "After a renovation that wall dries faster with a dehumidifier and a fan that blows away the wet layer of air against the wall. If it gets wet again after every shower, the moisture is coming from outside. A dehumidifier will not solve that, and a reading makes the difference clear.",
      },
      {
        q: "Can the dehumidifier keep running when I am not at home?",
        a: "Yes, the condensation dehumidifiers are made to run day and night. They collect the water or drain it away through a hose. Keep windows and outside doors shut and check that the drain hose is positioned properly. The technician shows you how during installation.",
      },
    ],
    realisaties: [],
  },
  amay: {
    slug: "amay",
    title: "Construction dehumidifier hire in Amay and Ampsin | Vernast",
    description:
      "Dehumidifier hire in Amay, Ampsin, Jehay-Bodegnée or Ombret? Vernast delivers and sets up units for terraced houses along the Meuse and converted farmhouses.",
    h1: "Construction dehumidifier hire in Amay",
    kicker: "Province of Liège · Meuse banks and the edge of the Hesbaye",
    rit: { afstand: "about 125 km", tijd: "just over an hour" },
    intro: [
      "Amay lies on the Meuse, between Huy and Engis. In the centre stands the **Romanesque collegiate church of Saint-Georges-et-Sainte-Ode**, and in Jehay-Bodegnée the moated castle of Jehay. From Aartselaar it takes us just over an hour to drive there.",
      "Along the river lie businesses and the Ampsin lock. Further from the water it becomes more rural, with **farmhouses and housing estates** on the edge of the Hesbaye.",
    ],
    bouw: {
      kop: "Terraced houses by the Meuse, farmhouses on the plateau",
      alineas: [
        "In the centre and in Ampsin there are many **workers' houses and terraced houses** with a narrow front and a cellar under the front room. Anyone who strips such a house completely brings in a lot of new plasterwork and screed in a short time. That moisture has to come out before floors or paint go on. In a closed room with a dehumidifier that goes much faster than with open windows.",
        "On the plateau it is more often **new builds and converted farmhouses**. A barn becoming a home has thick walls and an uninsulated floor, and so stays cold for a long time. So warm the room up first: **below 15 °C a condensation dehumidifier loses much of its capacity**.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a terraced house being completely renewed.** At 70 litres a day it dries a ground floor with fresh screed." },
      { key: "ttk650", waarom: "**For a converted farmhouse with a large volume under the roof.** It extracts 110 litres a day from the air, in rooms up to 600 m³." },
      { key: "teddh30", waarom: "A barn becoming a home stays cold in winter. This 30 kW site heater brings the room up to temperature; it needs a 400 V connection." },
      { key: "ttv4500", waarom: "In a narrow, deep terraced house it sends the air from the front room to the kitchen at the back, where the plasterwork would otherwise stay wet." },
    ],
    levering: {
      kop: "Delivery in Amay: by appointment, along the Meuse",
      alinea:
        "We drive **via the E40** to Amay, a trip of just over an hour. You choose a delivery date when you book, and in Wallonia we fix the moment with you. Is your site on a narrow farm track or behind a gate? **Describe the access in advance**, and the technician will take it into account.",
    },
    afhalen: {
      kop: "Collecting yourself is a long drive from Amay",
      alinea:
        "Our collection point in Aartselaar is just over an hour's drive from Amay. Collecting and returning together quickly cost you half a working day. **Let us deliver instead**: the technician then takes a moisture reading at the start straight away.",
    },
    buren: ["hoei", "engis", "saint-georges-sur-meuse", "verlaine", "villers-le-bouillet"],
    faq: [
      {
        q: "I am converting a farmhouse in Jehay into a home. How many dehumidifiers do I need?",
        a: "That depends on the volume under the roof and on how much screed and plasterwork is new. A large barn with an open loft often needs two units, and a site heater in winter. The technician looks at the set-up during installation and adjusts it where needed.",
      },
      {
        q: "My terraced house in Ampsin has a damp cellar. What can a dehumidifier do?",
        a: "A dehumidifier removes moisture from the air and from the surface of wall and floor. That helps after building work or after a leak. If the moisture comes from the ground through a wall without a damp-proof course, it comes back. During installation we measure where it is coming from.",
      },
      {
        q: "Do I need to be at home when the technician comes to set up?",
        a: "Someone has to open the door and show where the unit goes and where the drain can run. That is why we agree the delivery time with you. At collection it is usually enough for the room to be accessible; you arrange that with the technician.",
      },
      {
        q: "Can a construction dehumidifier keep running while I am not living in the home?",
        a: "Yes, that is actually ideal: windows and doors stay shut and nobody walks in and out. The unit runs day and night. With a drain hose to a floor drain or a sink, nobody needs to empty a collection tank.",
      },
    ],
    realisaties: [],
  },
  anthisnes: {
    slug: "anthisnes",
    title: "Dehumidifier hire in Anthisnes, in the Condroz | Vernast",
    description:
      "Dehumidifier hire in Anthisnes, Hody, Tavier or Villers-aux-Tours: for farmhouses and stone village houses in the Condroz above the Ourthe. Set up at your door.",
    h1: "Construction dehumidifier hire in Anthisnes",
    kicker: "Province of Liège · Condroz above the Ourthe",
    rit: { afstand: "about 145 km", tijd: "over an hour and a half" },
    intro: [
      "Anthisnes lies **in the Condroz, above the Ourthe valley**, between Esneux and Ouffet. The municipality has four villages: **Anthisnes, Hody, Tavier and Villers-aux-Tours**. In Anthisnes itself stands **the Avouerie**, a medieval tower house, and the villages are largely built of **grey natural stone**.",
      "Anthisnes is **a farming municipality** with many large farmhouses around a courtyard. Where farming stops, such a farmhouse is often **divided into homes or converted into a gîte**. On the edges of the villages there are more recent houses too. From Aartselaar it takes us over an hour and a half to drive to Anthisnes.",
    ],
    bouw: {
      kop: "Courtyard farmhouses being converted into homes",
      alineas: [
        "**If you convert a courtyard farmhouse into homes or a gîte**, you tackle stables, barns and the farmhouse in one project. New floors, interior walls and plaster go into **buildings with thick stone walls** that already hold moisture themselves. Put one dehumidifier per home or per wing, and you keep track.",
        "**A gîte has a fixed opening date**: the first guests have booked, and a room that still smells damp is a bad start. So plan **the final reading** at a time when there is still room to adjust. On the plateau an empty building cools down quickly in winter. A heater then keeps the temperature high enough for the dehumidifier.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a home or wing of a farmhouse under conversion**: 70 litres a day and a range of up to about 400 m³." },
      { key: "ttk170", waarom: "For the rooms of a gîte that you finish one by one: a compact 50 litres a day dehumidifier that you **move from room to room**." },
      { key: "teddh30", waarom: "A newly converted stable or barn has no heating yet. **This heater brings the room above 15 °C**, so the dehumidifier next to it works well. It needs three-phase power (400 V)." },
      { key: "ttv4500", waarom: "In a long stable with thick walls this fan gets the air moving, so the moisture does not linger in the corners." },
    ],
    levering: {
      kop: "Delivery in Anthisnes: by appointment, farmhouses included",
      alinea:
        "We drive **via Liège and the Ourthe valley** to Anthisnes, over an hour and a half from Aartselaar. You fix the delivery date when you book, and the delivery itself is by appointment. If it is a farmhouse with several homes, **tell us which parts need drying**. The technician divides the units wing by wing and measures each part at the start.",
    },
    afhalen: {
      kop: "Collecting from Anthisnes rarely suits",
      alinea:
        "At over an hour and a half each way, you are **on the road for over three hours** there and back to our collection point in Aartselaar. A farmhouse also needs several units, and they will not fit in a car together. **Let us deliver**: set-up and collection are part of the drying package.",
    },
    buren: ["esneux", "comblain-au-pont", "ouffet", "nandrin"],
    faq: [
      {
        q: "We are converting a farmhouse into a gîte. When does the construction dehumidifier need to be gone?",
        a: "Plan the collection at least a week before the first guests. Then you have a final reading and still time to adjust if one room is lagging behind. Guests notice a damp smell straight away. Tell us your opening date when you book, and we will plan around it.",
      },
      {
        q: "Can I move one unit from room to room?",
        a: "Yes, a compact dehumidifier is on wheels and you roll it to the next room yourself. That works well for a gîte that is finished room by room. For a whole floor with fresh screed, you are better off drying all the rooms at once, otherwise the moisture moves from one room to the other.",
      },
      {
        q: "Do you work in Hody, Tavier and Villers-aux-Tours?",
        a: "Yes, we deliver in all four villages of Anthisnes. If the farmhouse is on a farm track or behind a cobbled courtyard, mention it when you book. The technician will then bring a sack truck to get the units into the right room.",
      },
      {
        q: "How many units do I need for a farmhouse with three homes?",
        a: "Allow one dehumidifier per home, with a heater in the parts that have no heating yet. The right number depends on the volume and on the thickness of the screed and plaster. In the Calculator you can see the package price in advance, with delivery and two readings included.",
      },
    ],
    realisaties: [],
  },
  burdinne: {
    slug: "burdinne",
    title: "Dehumidifier hire in Burdinne, Burdinale valley | Vernast",
    description:
      "Dehumidifier hire in Burdinne, Oteppe, Marneffe or Lamontzée? We deliver and set up units for old farmhouses and village houses in the Burdinale valley.",
    h1: "Construction dehumidifier hire in Burdinne",
    kicker: "Province of Liège · in the Burdinale valley",
    rit: { afstand: "about 110 km", tijd: "just over an hour" },
    intro: [
      "Burdinne lies in the south of the Walloon Hesbaye, where the plateau slopes down to **the Meuse valley**. The municipality takes its name from **the Burdinale**, a stream that runs through a green valley to the Mehaigne. Besides the village itself, **Hanneche, Lamontzée, Marneffe and Oteppe** belong to it.",
      "Burdinne is part of **the Burdinale and Mehaigne Valleys Nature Park**. You mainly see **old farmhouses and village houses** among fields and copses, and few large housing estates. So anyone building here is usually renovating **an existing property**. From Aartselaar it takes us **just over an hour** to drive there.",
    ],
    bouw: {
      kop: "Old farmhouses and houses in a damp stream valley",
      alineas: [
        "The Burdinale valley is narrow and partly wooded, and **the air stays damp there for longer** than on the open plateau. A home in the valley therefore struggles to dry by itself after a renovation. Opening the windows **often lets in more moisture** than goes out. So keep the windows shut and let a dehumidifier do the work.",
        "**Old farmhouses and large homes** here have walls of brick and limestone, often without a damp-proof course. New **lime plasterwork** or a new floor puts water into those walls, and it has to come out gradually. Drying too fast and too hot can make old materials crack. That is why we **tailor the set-up to the building**.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For an old farmhouse in the valley** being restored wing by wing: 70 litres a day, and easy to move to the next wing." },
      { key: "revolution", waarom: "For **a cool cellar or storeroom**: this desiccant dehumidifier keeps extracting moisture from the air even at low temperatures, where a condensation dehumidifier slows down." },
      { key: "teddh20", waarom: "This 20 kW heater on three-phase power warms a room with old walls, so the dehumidifier works better. Set it moderately so as **not to force the plasterwork**." },
      { key: "ttk170", waarom: "For **a village house in Hanneche or Lamontzée** where you work room by room: compact, at 50 litres a day." },
    ],
    levering: {
      kop: "Delivery in Burdinne: the last stretch through the greenery",
      alinea:
        "We drive **just over an hour** from Aartselaar, along the E40 and then south on the country roads of the plateau. You choose the **delivery date** yourself when you book; we fix the time with you by appointment. In the valley the roads are narrow and sometimes steep. So let us know whether the van can get **right up to the house**.",
    },
    afhalen: {
      kop: "Collecting yourself in Aartselaar: allow half a day",
      alinea:
        "From Burdinne you are on the road for **over two hours** there and back to collect. That only pays off if you are near Antwerp anyway. With delivery the technician also takes **a first moisture reading**, so you can check later whether it is drying.",
    },
    buren: ["braives", "heron"],
    faq: [
      {
        q: "Why does a house in the Burdinale valley dry with such difficulty?",
        a: "In a narrow, wooded valley the air is often damper than on the plateau. If you then open the windows, you let in damp outside air instead of dry. A dehumidifier in a closed room works independently of the weather and does get the moisture out of the air.",
      },
      {
        q: "Can drying too fast damage old walls?",
        a: "Yes. Lime plaster and old brick need time, and a room that heats up strongly in a short time can develop small cracks. With old homes we therefore prefer moderate heat and a dehumidifier that works steadily over too heavy a combination.",
      },
      {
        q: "Can a construction dehumidifier stay in a room that is lived in?",
        a: "Yes, if there is room around the unit and the drain hose or collection tank is positioned properly. A dehumidifier does make noise. If you stay living in the house, preferably put it in a room where nobody sleeps at night.",
      },
      {
        q: "How often does the dehumidifier's water tank need emptying?",
        a: "That depends on how much moisture is in the room. In the first days after plastering, a tank can be full a few times a day. If you can run a drain hose to a drain or outside, you do not need to empty it. Tell us when you book whether there is a drain nearby.",
      },
    ],
    realisaties: [],
  },
  clavier: {
    slug: "clavier",
    title: "Construction dehumidifier hire in Clavier | Vernast",
    description:
      "Dehumidifier hire in Clavier, Ocquier, Pailhe or Bois-et-Borsu: for natural-stone village houses, farmhouses and new builds in the Condroz. With a reading.",
    h1: "Construction dehumidifier hire in Clavier",
    kicker: "Province of Liège · six villages in the Condroz",
    rit: { afstand: "about 150 km", tijd: "over an hour and a half" },
    intro: [
      "Clavier is a rural municipality **in the heart of the Condroz**. It has six villages: **Clavier, Bois-et-Borsu, Les Avins, Ocquier, Pailhe and Terwagne**. The landscape follows the pattern of the region, with **long sandstone ridges** and **limestone valleys** in between. On the heights lie fields, in the hollows meadows.",
      "The villages are largely **built of natural stone**, and **Ocquier** has kept its old centre well. Next to the old farmhouses, **new homes are appearing on the village edges**. From Aartselaar it takes us over an hour and a half to drive to Clavier.",
    ],
    bouw: {
      kop: "Stone village houses and new builds on the edge of the village",
      alineas: [
        "**If you renovate an old house in Ocquier or Pailhe**, you are working with thick natural-stone walls that have long absorbed and released moisture. New lime plaster or internal insulation traps that moisture if the wall does not dry first. **The technician measures the wall before the finishing.** That way you know whether it is ready for the next layer.",
        "**With a new build on the edge of a village** it is the familiar site questions: a screed that has to be dry before the floor layer, plasterwork that has to be ready for the painter. A home on an open plot stands in the wind and cools down quickly in winter. Keep the windows shut and put **one dehumidifier per storey**, and the schedule stays achievable.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "For a new home on the village edge: 70 litres a day and a range of up to about 400 m³, **suitable for a ground floor with fresh screed**." },
      { key: "ttk170", waarom: "**For a single room in an old village house** that you are renovating room by room: a compact unit that takes up 50 litres a day, for rooms up to about 250 m³." },
      { key: "radiaal2250", waarom: "Blows in a targeted way over a fresh screed and into the corners of a stone room, where moisture lingers longest." },
      { key: "teddh20", waarom: "A winter site on an open plot cools down quickly. **This 20 kW heater keeps the room above 15 °C**, where a condensation dehumidifier works well. It needs a 400 V connection." },
    ],
    levering: {
      kop: "Delivery in Clavier: tell us the right village",
      alinea:
        "The drive from Aartselaar to Clavier takes **over an hour and a half**, via Liège or via Huy, depending on the village. When you book, tell us **which of the six villages** the site is in; that helps with the planning. You choose a delivery date and we arrange the delivery with you by appointment. The technician puts the units in place, sets them up and takes a reading at the start.",
    },
    afhalen: {
      kop: "Collecting from Clavier: allow half a day",
      alinea:
        "To our collection point in Aartselaar and back you are **on the road for over three hours**, over an hour and a half each way. With a renovation that lasts weeks, you also have to return the units afterwards: that is two half days. **Delivery and collection are part of a drying package.**",
    },
    buren: ["modave", "tinlot", "ouffet", "havelange"],
    faq: [
      {
        q: "Does a natural-stone wall need to be dry before I plaster or insulate it?",
        a: "Yes. An old sandstone or limestone wall always contains some moisture, but after demolition work, new pointing or a new floor there is much more in it. If you trap that behind plaster or internal insulation, it looks for another way out. The technician measures the wall and tells you when it is ready.",
      },
      {
        q: "Do you deliver in all the villages of Clavier, including Les Avins and Terwagne?",
        a: "Yes, we deliver in all six villages of the municipality. Give the full address when you book and describe how the site can be reached, because some farmhouses are on a narrow country lane outside the village. Then we plan the van and the sack truck accordingly.",
      },
      {
        q: "How many construction dehumidifiers do I need for a new build in the Condroz?",
        a: "Usually one dehumidifier per storey, with a fan added for a fresh screed. The right number depends on the volume, the material and the thickness of the layers. You enter those details in the Calculator, and you see the package price in advance, with delivery, set-up and collection.",
      },
      {
        q: "Can you go through my booking with me before the delivery?",
        a: "Yes. If you have questions, in French too, feel free to email or call us. Together we go through the address, the rooms that need drying and the delivery date you choose.",
      },
    ],
    realisaties: [],
  },
  engis: {
    slug: "engis",
    title: "Dehumidifier hire in Engis, in the Meuse valley | Vernast",
    description:
      "Dehumidifier hire in Engis, Hermalle-sous-Huy or Clermont-sous-Huy? Vernast delivers and sets up units for homes in the Meuse valley, also after water damage.",
    h1: "Construction dehumidifier hire in Engis",
    kicker: "Province of Liège · a narrow strip along the Meuse",
    rit: { afstand: "about 130 km", tijd: "just over an hour" },
    intro: [
      "Engis lies in a narrow stretch of the Meuse valley, between Huy and Liège. The village centre, **Hermalle-sous-Huy** and Clermont-sous-Huy lie between the river and wooded slopes. In a cave in Engis, one of the first known **Neanderthal skulls** was found in the nineteenth century.",
      "Along the river and the railway there is industry. The houses often lie between the main road and the slope, with more recent homes on the plateau above. From Aartselaar we are in Engis in just over an hour.",
    ],
    bouw: {
      kop: "Houses in a narrow valley, little sun on the façade",
      alineas: [
        "A back wall that lies against the slope gets little sun. **Moisture lingers there longer** than in a house on the open plateau. After a renovation you see it in plasterwork on one side of the house that refuses to dry. A dehumidifier in the closed room and a fan aimed at that cold wall put that right.",
        "Many houses along the Meuse are **old workers' houses** in brick or rubble stone, without a cavity and without a damp-proof course. After a leak or water damage you are drying a cold, solid wall there. The technician measures the moisture at the start and at collection, so you know **when the painter can start**.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a renovated home along the Meuse.** At 70 litres a day and with a range of up to 400 m³, it dries a ground floor and an upper floor." },
      { key: "ttv4500", waarom: "Aimed at **the cold back wall against the slope**, it keeps the air moving, so that side does not lag behind the rest of the house." },
      { key: "radiaal2250", waarom: "**After water damage on the ground floor.** This radial fan blows low over the floor and along the skirting boards, where water lingers longest." },
      { key: "ttk650", waarom: "For a larger project, such as a completely stripped home: 110 litres a day, in rooms up to 600 m³." },
    ],
    levering: {
      kop: "Delivery in Engis: along the main road through the valley",
      alinea:
        "The drive to Engis takes just over an hour. You choose a delivery date when you book, and because Engis is in Wallonia, we deliver **by appointment**. Along the busy main road the van cannot stop everywhere. So let us know whether there is **a drive or a side street** where the technician can unload.",
    },
    afhalen: {
      kop: "Collecting is possible, but it is far",
      alinea:
        "From Engis you drive just over an hour to Aartselaar, and again after the hire period to return the unit. A construction dehumidifier has to stand **upright in the car**. If you do not have a van, delivery is the simplest solution.",
    },
    buren: ["amay", "saint-georges-sur-meuse", "flemalle", "nandrin"],
    faq: [
      {
        q: "Why does the back of my house in Engis dry more slowly than the front?",
        a: "That side lies against the slope and gets little sun. The wall stays colder there, and the air against it becomes saturated more quickly. A fan aimed at that wall and a dehumidifier in the same room, with the doors shut, largely make up the difference.",
      },
      {
        q: "What do I do first after water damage on the ground floor?",
        a: "First pump or squeegee away the standing water and remove wet insulation and skirting boards. Then the drying starts: the dehumidifier removes the moisture left behind in the floor and walls. Tell us when you book how high the water rose, and we will include a floor fan too.",
      },
      {
        q: "Can you deliver if there is no parking along the main road?",
        a: "Yes. When you book, tell us whether there is a drive, a side street or a space behind the house. With a sack truck, one or two units are unloaded quickly, so the van only needs to stop briefly.",
      },
      {
        q: "Do you also deliver in Clermont-sous-Huy?",
        a: "Yes, including the higher parts of Engis. Let us know when you book whether the road to your house is narrow or steep, so the technician knows which route is best.",
      },
    ],
    realisaties: [],
  },
  ferrieres: {
    slug: "ferrieres",
    title: "Dehumidifier hire in Ferrières and Werbomont | Vernast",
    description:
      "Dehumidifier hire in Ferrières, Werbomont, Xhoris, My or Vieuxville: for holiday homes and stone houses between the Ourthe and the Ardennes. Set up for you.",
    h1: "Construction dehumidifier hire in Ferrières",
    kicker: "Province of Liège · between the Ourthe and the Ardennes",
    rit: { afstand: "about 165 km", tijd: "about an hour and three quarters" },
    intro: [
      "Ferrières lies **where the Condroz gives way to the Ardennes**, east of the Ourthe. The municipality includes **Ferrières, My, Vieuxville, Werbomont and Xhoris**. **Vieuxville** lies in the Ourthe valley, at the foot of the **ruined castle of Logne**. **Werbomont** lies high on the plateau, at a crossroads of routes into the Ardennes.",
      "The municipality is **wooded and rural**. Besides stone village houses and farmhouses there are **second homes and holiday homes**. On the plateau the climate is rougher and wetter than in the valley, and you notice that especially in houses that stand empty for part of the year. The drive from Aartselaar takes about an hour and three quarters.",
    ],
    bouw: {
      kop: "Holiday homes on the plateau and houses in the Ourthe valley",
      alineas: [
        "**A holiday home in Werbomont or My** often stands unheated for weeks in winter. On the plateau it is colder and wetter than in Flanders, and in a cold house moisture condenses on walls, ceilings and inside cupboards. Anyone returning in spring sometimes finds **mould behind the wardrobe**. With a dehumidifier and a heater you bring the house back up to standard.",
        "**In Vieuxville and along the Ourthe** houses stand close to the river, and after high water a cellar or ground floor can be wet. **First the water has to go, then comes the drying.** During installation the technician measures how far the moisture has got into the walls and chooses the combination of dehumidifier and fan accordingly.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**For a holiday home that stood cold for months**: this desiccant dehumidifier absorbs moisture even at low temperatures." },
      { key: "teddh20", waarom: "First brings an unheated house on the plateau above 15 °C, so a condensation dehumidifier next to it works well. This 20 kW heater needs a 400 V connection." },
      { key: "ttk650", waarom: "**After flooding in a house along the Ourthe**: at 110 litres a day it removes most of the moisture before it gets deeper into the walls." },
      { key: "radiaal2250", waarom: "Blows in a targeted way over a wet cellar floor and into the corners, where water lingers longest after a flood." },
    ],
    levering: {
      kop: "Delivery in Ferrières: via Liège and the Ourthe valley",
      alinea:
        "The drive from Aartselaar takes **about an hour and three quarters**, via Liège and the Ourthe valley. You choose a delivery date when you book, after which we arrange the time by appointment. If it is a holiday home, **let us know who has the key**. After set-up you do not need to be there until we come to collect the units.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar, on the way to your holiday home",
      alinea:
        "If you are driving from Flanders to your second home in Ferrières anyway, you can **take a unit with you on the way there**. Our collection point is in Aartselaar on the A12, about an hour and three quarters from Ferrières. Transport the dehumidifier upright. With water damage along the Ourthe, delivery is the better choice.",
    },
    buren: ["hamoir", "aywaille", "durbuy", "manhay"],
    faq: [
      {
        q: "How do I prevent mould in my holiday home in Werbomont?",
        a: "Do not let the house cool down completely in winter and air it now and then. If moisture has condensed anyway, let a heater and a dehumidifier run for a week or two with the windows shut. Take clothes and textiles out of the cupboards, so they can dry too.",
      },
      {
        q: "Our cellar in Vieuxville was under water. When can the dehumidifier come?",
        a: "As soon as the standing water and the silt have gone. A dehumidifier removes the water from the floor and the bottom of the walls; you remove a puddle first with a pump or a wet vacuum. Tell us when you book how high the water rose, and the technician will bring the right units.",
      },
      {
        q: "Can you deliver if I am not in Ferrières?",
        a: "Yes, if someone can open the door: a neighbour, the manager of the holiday park or a contractor. Tell us who that is when you book, and we will arrange the delivery with that person. The technician shows how the unit works and leaves a contact number.",
      },
      {
        q: "Does an ordinary construction dehumidifier work in a cold house in the Ardennes?",
        a: "A condensation dehumidifier loses efficiency below 15 °C. In an unheated house on the plateau we therefore add a heater, or choose a desiccant dehumidifier that also works in the cold. The technician measures the temperature during installation and adapts the set-up to it.",
      },
    ],
    realisaties: [],
  },
  hamoir: {
    slug: "hamoir",
    title: "Construction dehumidifier hire in Hamoir | Vernast",
    description:
      "Dehumidifier hire in Hamoir, Comblain-la-Tour or Filot: for homes on the Ourthe and stone houses against the slope. With a reading at set-up and collection.",
    h1: "Construction dehumidifier hire in Hamoir",
    kicker: "Province of Liège · a village on the Ourthe",
    rit: { afstand: "about 160 km", tijd: "about an hour and three quarters" },
    intro: [
      "Hamoir lies **on the Ourthe**, between Comblain-au-Pont and Durbuy. The river flows through the village centre, and **Comblain-la-Tour** also lies by the water. Hamoir and Comblain-la-Tour each have **a station on the Ourthe valley railway**, from Liège to Marloie.",
      "The valley here is **narrow and wooded**, with homes on the bank and **houses climbing up the slope**. On the plateau above, around Filot, the rural Condroz begins. The Ourthe attracts kayakers and walkers, and so Hamoir has **campsites and holiday homes**. From Aartselaar it takes us about an hour and three quarters to drive there.",
    ],
    bouw: {
      kop: "Houses by the river and houses against the slope",
      alineas: [
        "**Anyone living on the Ourthe** knows the river can rise high after heavy rain. A cellar or ground floor that was under water has to **dry thoroughly after the clean-up before it is replastered or retiled**. If you finish too early, you trap the moisture. A few months later the plaster comes loose or the tiles sound hollow.",
        "**On the slopes of the valley** stand stone homes with the back wall against the hill. On that side earth and rock sit against the wall, and after a wet spell that moisture seeps inside. After a renovation the technician measures **which part is construction moisture and which comes from the slope**. That way you know what a dehumidifier can solve here.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**After high water in a cellar or ground floor on the Ourthe**: 110 litres a day and a range of up to about 600 m³." },
      { key: "radiaal2250", waarom: "Blows in a targeted way over a wet floor and along the skirting boards, **where water lingers longest after a flood**." },
      { key: "revolution", waarom: "For a cold room on the hill side of a house against the slope: this desiccant dehumidifier also works in rooms that never get warm." },
      { key: "ttk350", waarom: "For renovating a stone home in Filot or Comblain-la-Tour: 70 litres a day for new plaster and screed, in rooms up to about 400 m³." },
    ],
    levering: {
      kop: "Delivery in Hamoir: through the Ourthe valley",
      alinea:
        "We drive **via Liège and the Ourthe valley** to Hamoir, about an hour and three quarters from Aartselaar. You choose a delivery date when you book, and we deliver by appointment. If it is water damage, **tell us how high the water rose** and which rooms were affected. Then the technician brings the right units in one trip.",
    },
    afhalen: {
      kop: "Collecting from Hamoir: around three and a half hours there and back",
      alinea:
        "At about an hour and three quarters each way, a return trip to Aartselaar costs you **around three and a half hours**. After water damage you would rather spend that time clearing up. **Let us deliver**: the technician places the units, takes a reading at the start and collects them as soon as the reading is good.",
    },
    buren: ["comblain-au-pont", "ferrieres", "durbuy", "ouffet"],
    faq: [
      {
        q: "The Ourthe came into my ground floor. How long does it need to dry before I retile?",
        a: "That depends on how long the water stood and how deep it got into the walls. With old stone walls it is a matter of weeks, not days. Only tile or plaster once the reading allows it. The technician takes a reading at the start and at collection, so you have a figure for the contractor.",
      },
      {
        q: "Is the moisture in my house against the slope coming from the hill or from the renovation?",
        a: "You cannot always see it, but you can measure it. Construction moisture decreases as long as the dehumidifier runs, while water from the slope comes back after every shower. Two readings, at installation and at collection, show that difference. The technician tells you honestly whether a dehumidifier solves the problem or whether something needs doing on the outside.",
      },
      {
        q: "Do you also deliver in Comblain-la-Tour and Filot?",
        a: "Yes, they are part of Hamoir and we deliver there just as in the rest of the municipality. Filot lies higher up on the plateau, Comblain-la-Tour in the valley. Give the full address when you book, so the technician can plan the trip and knows whether he can drive up to the door.",
      },
      {
        q: "Can a construction dehumidifier keep running unattended in a holiday home by the Ourthe?",
        a: "Yes. The technician connects a condensate hose as standard, so nobody needs to empty a tank, and the built-in humidistat throttles back as soon as the air is dry enough. Tell us when you book that nobody will be on site, and he will look for a drain where the hose can go safely.",
      },
    ],
    realisaties: [],
  },
  hoei: {
    slug: "hoei",
    title: "Construction dehumidifier hire in Huy and Tihange | Vernast",
    description:
      "Dehumidifier hire in Huy, Tihange or Ben-Ahin? Vernast delivers, sets up and collects, for renovating town houses and cellars on the Meuse.",
    h1: "Construction dehumidifier hire in Huy",
    kicker: "Province of Liège · the town of the fort on the Meuse",
    rit: { afstand: "about 120 km", tijd: "just over an hour" },
    intro: [
      "Huy, Hoei in Dutch, lies on the Meuse, at the point where the Hoyoux flows into the river. Above the town the fort stands on the rock, and in the centre the collegiate church of Notre-Dame. From our warehouse in Aartselaar we get there in just over an hour.",
      "The town also includes **Tihange**, known for its nuclear power station, and Ben-Ahin. You will find narrow town houses in the old centre, post-war residential areas and villas on the slopes above the valley.",
    ],
    bouw: {
      kop: "Town houses between river and rock",
      alineas: [
        "In the old centre stand **deep, narrow houses in natural stone and brick**, often with a cellar close to the river level. A renovation brings in a lot of moisture there: new plasterwork, a screed upstairs, sometimes a kitchen in the former cellar. A cold cellar dries slowly. So the technician first takes a moisture reading, so you know whether the moisture comes from the building work or from outside.",
        "In the narrow Hoyoux valley the houses stand close to the water and the slope. After a wet spell moisture seeps into the back wall. **Allow plenty of time for such a renovation**: a thick stone wall releases its water in weeks, not days.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a town house being renovated floor by floor.** It extracts up to 70 litres of moisture a day from the air, in rooms up to 400 m³." },
      { key: "revolution", waarom: "**For a cool cellar close to the Meuse.** A desiccant dehumidifier keeps absorbing moisture even at low temperatures, where a condensation dehumidifier loses efficiency." },
      { key: "ttv4500", waarom: "Put it in front of **a wet back wall**. It blows away the damp layer of air, so the dehumidifier keeps drawing the moisture out of the wall." },
      { key: "ttk170", waarom: "For a flat in Tihange or an upstairs home in the centre. This compact unit is easy to carry up a narrow staircase." },
    ],
    levering: {
      kop: "Delivery in Huy: via the E40 into the Meuse valley",
      alinea:
        "We drive **via the E40** to Huy and are on the road for just over an hour. You choose a delivery date when you book; in Wallonia we deliver by appointment. In the centre the streets are narrow and steep. Let us know **where the van can stop for a moment**, and the technician will bring a sack truck. He places the units and records the moisture readings.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar: just over an hour each way",
      alinea:
        "Our collection point is just over an hour's drive from Huy, and you make that trip twice: when collecting and when returning. **Delivery is included in the price of a drying package**, and the technician also collects the units again afterwards.",
    },
    buren: ["amay", "wanze", "villers-le-bouillet", "marchin"],
    faq: [
      {
        q: "My cellar in Huy is right by the Meuse. Will a dehumidifier get it dry?",
        a: "A dehumidifier removes construction moisture and moisture after a leak. If groundwater pushes through the wall at high water, drying only helps temporarily. The technician measures during installation which of the two it is and tells you what a unit can do there.",
      },
      {
        q: "Can the technician get to a house on the slope up to the fort?",
        a: "Usually, yes, although the van cannot always get to the door. Tell us when you book how steep and narrow your street is. The technician will then bring a sack truck and take the units the last stretch on foot.",
      },
      {
        q: "Do you also deliver in Tihange and Ben-Ahin?",
        a: "Yes, both belong to Huy. Give the full address when you book, with postcode and district, so the technician drives straight to the right street.",
      },
      {
        q: "Why does drying take longer in an old stone house in Huy?",
        a: "A natural-stone wall with lime mortar holds a lot of water and releases it slowly, especially on the cold side of the house. With one dehumidifier per floor and a fan against the wettest wall it goes faster. Even so, allow a few weeks rather than a couple of days.",
      },
      {
        q: "Can you help me work out which units my site needs?",
        a: "Yes. Feel free to email or call us, in French too. We are happy to look with you at which units your site needs.",
      },
    ],
    realisaties: [],
  },
  heron: {
    slug: "heron",
    title: "Dehumidifier hire in Héron, Couthuin and Lavoir | Vernast",
    description:
      "Dehumidifier hire in Héron, Couthuin, Lavoir or Waret-l'Évêque? Vernast delivers and sets up units for converted farmhouses, village houses and cool cellars.",
    h1: "Construction dehumidifier hire in Héron",
    kicker: "Province of Liège · fields above the Meuse, between Hannut and Andenne",
    rit: { afstand: "about 110 km", tijd: "just over an hour" },
    intro: [
      "Héron lies between the Hesbaye and the Meuse valley, against the border with the province of Namur. The municipality includes **Couthuin, Lavoir and Waret-l'Évêque**, farming villages with large farmhouses and orchards. From Aartselaar we get there in just over an hour.",
      "Héron has no town centre. Anyone renovating here is usually working on **an old farmhouse, a brick village house or a recent home** on the edge of a village, sometimes some way from the paved road.",
    ],
    bouw: {
      kop: "Farmhouses, village houses and a fair distance from the main road",
      alineas: [
        "Around the villages stand **large farmhouses with an inner courtyard**. Their stables and barns are increasingly becoming homes. Such a conversion brings a lot of new screed and plasterwork into a large volume, in walls that are cold by nature. The usual set-up is **one unit per wing**, with the doors between the zones shut.",
        "In the villages stand **older houses with a cellar**. There the moisture does not always come from the building work; sometimes it comes in from outside through the cellar wall. So the technician first takes a moisture reading. A unit alone will not solve water getting in from outside.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For the stable of a courtyard farmhouse becoming a home.** At 110 litres a day it dries rooms up to 600 m³." },
      { key: "ttk350", waarom: "For a village house in Couthuin or Lavoir with a new floor and fresh plasterwork. It extracts 70 litres a day from the air and uses 1.1 kW." },
      { key: "revolution", waarom: "**For the cold cellar under a village house.** A desiccant dehumidifier keeps absorbing moisture at temperatures at which a condensation dehumidifier barely works." },
      { key: "teddh30", waarom: "In an unheated farmhouse, this site heater first brings the room up to temperature in winter, so the dehumidifier reaches its full capacity." },
    ],
    levering: {
      kop: "Delivery in Héron: via Hannut or via Andenne",
      alinea:
        "We drive **via the E40** to Héron, just over an hour on the road. You choose a delivery date when you book, and because Héron is in Wallonia, we agree the delivery time with you. Is the farmhouse on a country lane or behind a gate? **Describe the access**, and the technician will know how close to the site he can get.",
    },
    afhalen: {
      kop: "Collecting yourself? Allow for two trips of just over an hour",
      alinea:
        "Aartselaar is just over an hour's drive from Héron. For one unit it rarely pays off to make two round trips: once to collect it, once to return it. **Have it delivered**: the technician sets up, takes readings and collects everything again afterwards.",
    },
    buren: ["wanze", "burdinne", "andenne"],
    faq: [
      {
        q: "I am turning the stable of my farmhouse in Héron into a home. How do I approach the drying?",
        a: "Divide the stable into zones: one dehumidifier per room or per wing, with the doors between them shut. In winter a site heater belongs with it, because a cold stable slows down any condensation dehumidifier. The technician puts the set-up together during installation and measures the moisture at the start.",
      },
      {
        q: "Do you also come right up to a farmhouse on a farm track?",
        a: "In most cases, yes. When you book, describe what the road is like and whether there is a gate or a narrow passage. If needed, the technician takes the units the last stretch inside with a sack truck.",
      },
      {
        q: "Why a desiccant dehumidifier in my cellar rather than an ordinary one?",
        a: "A condensation dehumidifier works with a cold coil and loses efficiency below about 15 °C. A cellar that stays cool all year rarely reaches that temperature. A desiccant dehumidifier works on a different principle and keeps extracting moisture from the air even in the cold.",
      },
      {
        q: "How long do I leave a dehumidifier in a renovated village house?",
        a: "Until the reading says it is fine. Thin plasterwork in a heated room often dries in a few weeks; a thick screed or an old wall needs more time. At collection the technician measures again, so you have the value in black and white.",
      },
    ],
    realisaties: [],
  },
  marchin: {
    slug: "marchin",
    title: "Dehumidifier hire in Marchin, Hoyoux valley | Vernast",
    description:
      "Dehumidifier hire in Marchin? Vernast delivers and sets up units for stone houses in the Hoyoux valley and homes on the slopes south of Huy.",
    h1: "Construction dehumidifier hire in Marchin",
    kicker: "Province of Liège · the Hoyoux valley and the edge of the Condroz",
    rit: { afstand: "about 130 km", tijd: "about an hour and a half" },
    intro: [
      "Marchin lies just south of Huy, in the wooded valley of **the Hoyoux**. Above the valley begins **the Condroz**, a rolling landscape of ridges and valleys. From Aartselaar it takes us about an hour and a half to drive there.",
      "In the valley stand stone houses, and in Grand-Marchin and Vyle-et-Tharoul mainly village homes. On the slopes lie more recent homes, often with a **long drive**.",
    ],
    bouw: {
      kop: "Natural stone in the valley, new builds on the slopes",
      alineas: [
        "In the valley many houses are built of **local natural stone**, with thick walls and little insulation. The valley is narrow and the sun arrives late. Anyone doing up such a house is drying cold walls that release their moisture slowly. In winter **a site heater belongs next to the dehumidifier**.",
        "On the slopes, homes are partly built into the ground, with a ground floor or cellar lying against the slope. With a new screed or tiled floor, everything revolves around the timing. The technician takes a reading at collection, so **the floor layer knows where he stands**.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a stone house in the valley being renovated.** At 70 litres a day and with a range of up to 400 m³, it dries a ground floor and an upper floor." },
      { key: "teddh30", waarom: "**For a home in the valley, where the walls stay cold.** This 30 kW site heater on three-phase power brings the room up to temperature, so the dehumidifier can do its work." },
      { key: "revolution", waarom: "For a cellar or ground floor **against the slope**. A desiccant dehumidifier keeps absorbing moisture even in a cool room, and it carries the damp air away via ducting." },
      { key: "ttv4500", waarom: "Aimed at a **thick natural-stone wall**, it blows away the damp layer of air, so the dehumidifier keeps drawing moisture out of the masonry." },
    ],
    levering: {
      kop: "Delivery in Marchin: via Huy into the Hoyoux valley",
      alinea:
        "We drive **via the E40 and Huy** to Marchin, about an hour and a half on the road. You choose a delivery date when you book; in Wallonia we make an appointment for the delivery time. If your home has a **long or steep drive**, let us know in advance whether a van can get to the door. The technician will bring a sack truck if needed.",
    },
    afhalen: {
      kop: "Collecting from Marchin costs you almost half a day",
      alinea:
        "Aartselaar is about an hour and a half's drive from Marchin. There and back you sit **in the car for three hours** for one unit, and again when returning it. Delivery is included in the price of the drying package and saves you those trips.",
    },
    buren: ["hoei", "modave"],
    faq: [
      {
        q: "Why are the walls of my house in the Hoyoux valley drying so slowly?",
        a: "They are thick, built of natural stone and stand in a narrow valley where the sun arrives late. Cold walls release their moisture slowly, and the air against them quickly becomes saturated. A dehumidifier, a site heater and a fan in the same room clearly speed that up.",
      },
      {
        q: "Can the van get to my house on the slope?",
        a: "Often, yes, but a long, steep or unpaved drive can be awkward. Mention it when you book. The technician then parks where the van is safe and takes the units inside with a sack truck.",
      },
      {
        q: "My ground floor is built half into the slope. Is that moisture construction moisture?",
        a: "It can be, but it can also be moisture from the ground coming through the wall on the slope side. During installation the technician measures the walls on both sides. A dehumidifier removes construction moisture; if the moisture comes from outside, he will tell you.",
      },
      {
        q: "How long is the drive from Aartselaar to Marchin?",
        a: "Allow about an hour and a half via the E40 and Huy, longer with traffic around Brussels or Liège. That is why we make an appointment with you for the delivery in Marchin, so you do not have to wait on site all day.",
      },
    ],
    realisaties: [],
  },
  modave: {
    slug: "modave",
    title: "Construction dehumidifier hire in Modave | Vernast",
    description:
      "Dehumidifier hire in Modave, Strée, Vierset-Barse or Outrelouxhe: for stone farmhouses and village houses in the Hoyoux valley. Delivered, set up and measured.",
    h1: "Construction dehumidifier hire in Modave",
    kicker: "Province of Liège · the Hoyoux valley in the Condroz",
    rit: { afstand: "about 145 km", tijd: "over an hour and a half" },
    intro: [
      "Modave lies **in the Condroz, south of Huy**. The municipality is best known for **the castle of Modave**, which stands high on a rock face above **the Hoyoux valley**. **Strée, Vierset-Barse and Outrelouxhe** belong to it too: villages with farmhouses, churches and homes in grey natural stone.",
      "Here the Hoyoux has carved **a deep valley into the limestone**, and there are water catchment sites in the valley. On the ridges around it the landscape is open and agricultural. Anyone renovating in Modave is usually working on **an old stone home**, in the valley or up on the heights. From Aartselaar we get there in over an hour and a half.",
    ],
    bouw: {
      kop: "Limestone farmhouses and homes in the Hoyoux valley",
      alineas: [
        "**A Condroz farmhouse** has **thick walls of limestone and sandstone**, laid in lime mortar and without a damp-proof course. If you convert such a farmhouse or a stable into a home, new plaster, a screed and sometimes underfloor heating go onto a base that already contains moisture. Those walls release their water slowly. So a dehumidifier stays here longer than in a new build.",
        "**In the Hoyoux valley** the ground is low and cool. Cellars and ground floors of older houses along the stream barely warm up in a wet winter. **Below 15 °C a condensation dehumidifier loses efficiency.** So the technician first measures the temperature and adds a heater if needed. Up on the heights, in Strée or Outrelouxhe, it is more often the renovation of a village home or an extension against an old stone house.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a converted farmhouse with new plaster and screed**: 70 litres a day and a range of up to about 400 m³, enough for an entire ground floor." },
      { key: "teddh30", waarom: "First brings a cold home in the Hoyoux valley up to temperature, so the dehumidifier next to it can absorb moisture. The heater needs a 400 V connection." },
      { key: "revolution", waarom: "**For a limestone cellar that never gets above ten degrees**: this desiccant dehumidifier keeps working in the cold." },
      { key: "ttv4500", waarom: "Damp air lingers along a thick natural-stone wall. This fan gets it moving, so the dehumidifier can get a grip on it." },
    ],
    levering: {
      kop: "Delivery in Modave: via Huy into the Condroz",
      alinea:
        "From Aartselaar we drive **via Huy** to the Hoyoux valley, a trip of over an hour and a half. You choose a delivery date when you book; in Wallonia we deliver **by appointment**. If the farmhouse is on a narrow country lane or has a cobbled yard, mention it in advance. The technician brings a sack truck, places the units room by room and takes a moisture reading at the start.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar rarely pays off from Modave",
      alinea:
        "A single trip takes over an hour and a half, so there and back you are **on the road for over three hours**. A dehumidifier also has to stand upright in the car, and for a farmhouse you usually need more than one unit. **Having it delivered is the logical choice here**: delivery, set-up and collection are part of the drying package.",
    },
    buren: ["marchin", "clavier", "havelange"],
    faq: [
      {
        q: "How long does a converted farmhouse in Condroz natural stone take to dry?",
        a: "Longer than a new build. A thick wall of limestone or sandstone without a damp-proof course releases its water slowly, and new plaster or screed only dries as fast as the base allows. Allow weeks rather than days. The technician takes readings at the start and at collection, so you can see the progress.",
      },
      {
        q: "My house is in the Hoyoux valley and stays cold. Does a dehumidifier work there?",
        a: "Yes, but a condensation dehumidifier needs warmth. If the room does not get above 15 °C, we add an electric heater or choose a desiccant dehumidifier, which absorbs moisture even in a cold cellar. Mention when you book that it is an unheated room.",
      },
      {
        q: "Can a dehumidifier solve my damp cellar in Modave for good?",
        a: "Not if moisture keeps coming in from outside. A dehumidifier removes construction moisture and the water after a leak or a flood. If groundwater seeps through the cellar wall, the moisture comes back as soon as the unit has gone. The technician measures during installation and tells you honestly what a dehumidifier can do here.",
      },
      {
        q: "Do you also work in Strée, Vierset-Barse and Outrelouxhe?",
        a: "Yes, they are part of Modave and we deliver there in the same way. We combine the trip to the Condroz with other addresses in the area. You choose a delivery date when you book, and we agree the delivery time with you.",
      },
    ],
    realisaties: [],
  },
  nandrin: {
    slug: "nandrin",
    title: "Construction dehumidifier hire in Nandrin | Vernast",
    description:
      "Dehumidifier hire in Nandrin, Saint-Séverin, Villers-le-Temple or Yernée-Fraineux: for renovating villas and stone homes in the Condroz. With a reading.",
    h1: "Construction dehumidifier hire in Nandrin",
    kicker: "Province of Liège · the Condroz on the edge of Liège",
    rit: { afstand: "about 140 km", tijd: "about an hour and a half" },
    intro: [
      "Nandrin lies **on the northern edge of the Condroz**, south-west of Liège. The municipality includes **Saint-Séverin, Villers-le-Temple and Yernée-Fraineux**. Saint-Séverin has **a Romanesque church**, and Villers-le-Temple owes its name to **a commandery of the Knights Templar**.",
      "Because Liège is close by, **villas and detached homes** on spacious, green plots appeared around the old village centres. Many of those houses are now being **renovated and extended**. From Aartselaar it takes us about an hour and a half to drive to Nandrin.",
    ],
    bouw: {
      kop: "Villas from the seventies and eighties, and old stone centres",
      alineas: [
        "**A villa from the seventies or eighties** often gets new insulation, a new floor with underfloor heating and an extension on the garden side during a renovation. After that there is **a lot of water in the screed and plaster**, and in a well-insulated home it does not disappear by itself. With one dehumidifier per storey, the finishing schedule stays achievable.",
        "**In the old centres of Saint-Séverin and Villers-le-Temple** stand homes and farmhouses in natural stone, with walls without a damp-proof course. If you do up such a house, you are drying a wall that already holds moisture itself. So the technician measures **which part is construction moisture** and which comes from the wall itself. That way you know what a dehumidifier can solve.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For renovating a villa with a new screed and underfloor heating**: 70 litres a day and a range of up to about 400 m³." },
      { key: "ttk650", waarom: "For a large villa with an open living area or an extension: 110 litres a day, with a range of up to about 600 m³." },
      { key: "radiaal2250", waarom: "After pouring, it blows in a targeted way over the new screed, **so the floor dries evenly** before the floor layer comes." },
      { key: "ttk170", waarom: "For a single room in a stone home in Saint-Séverin or Villers-le-Temple: a compact 50 litres a day dehumidifier, for rooms up to about 250 m³." },
    ],
    levering: {
      kop: "Delivery in Nandrin: just beyond Liège",
      alinea:
        "Nandrin lies **just south of Liège**, about an hour and a half's drive from Aartselaar along the E313. You choose a delivery date when you book, and we agree the delivery time with you. The technician places the units, sets them up and **measures the moisture at the start**. That figure is your point of comparison.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar: a three-hour drive",
      alinea:
        "A single trip takes about an hour and a half, so there and back you are **on the road for around three hours**, if you avoid rush hour around Liège and Antwerp. For one unit that can work, if you are heading that way anyway. For a villa with several units, **having them delivered is simpler**.",
    },
    buren: ["neupre", "tinlot", "anthisnes", "engis"],
    faq: [
      {
        q: "How many construction dehumidifiers do I need for a villa with underfloor heating?",
        a: "Usually one dehumidifier per storey, with a fan above the new screed. For an open living area or a large extension you would rather choose a 110 litres a day dehumidifier. Enter the volume, the material and the thickness of the layers in the Calculator, and you will see the package price in advance.",
      },
      {
        q: "Can the underfloor heating be on while the construction dehumidifier runs?",
        a: "Only once the screed is old enough and the installer's heating-up procedure allows it. Heating too early and too hard can make the screed crack. Until then a dehumidifier and a fan already remove a first part of the moisture from the floor. Follow your installer's schedule and have the technician take a reading.",
      },
      {
        q: "Do you also come to Saint-Séverin, Villers-le-Temple and Yernée-Fraineux?",
        a: "Yes, they are part of Nandrin and we deliver there as in the rest of the municipality, including the hamlets on the plateau. Give the full address when you book and describe the access to the site, and the technician will plan the trip accordingly.",
      },
      {
        q: "How long does a construction dehumidifier stay after a villa renovation?",
        a: "The reading decides that, not the calendar. Plasterwork in a heated home dries faster than a thick screed, and the thickness of the layer plays a big part. The technician takes readings at installation and at collection. If the material is still too wet, we discuss whether the units should stay longer.",
      },
    ],
    realisaties: [],
  },
  ouffet: {
    slug: "ouffet",
    title: "Dehumidifier hire in Ouffet, Warzée and Ellemelle | Vernast",
    description:
      "Dehumidifier hire in Ouffet, Warzée or Ellemelle: for stone farmhouses, village homes and second homes in the Condroz between the Ourthe and the Hoyoux.",
    h1: "Construction dehumidifier hire in Ouffet",
    kicker: "Province of Liège · Condroz between the Ourthe and the Hoyoux",
    rit: { afstand: "about 150 km", tijd: "over an hour and a half" },
    intro: [
      "Ouffet lies **on the Condroz plateau between the Ourthe valley and the Hoyoux**, south of Liège. The municipality consists of **Ouffet, Warzée and Ellemelle**: quiet villages with **natural-stone farmhouses** and scattered hamlets in a green landscape.",
      "Many buyers come here looking for **an old home to do up**, and some houses are **second homes** that stand empty for part of the year. After a winter shut up and unheated, such a house often smells musty and **damp patches appear at the bottom of the walls**. From Aartselaar it takes us over an hour and a half to drive to Ouffet.",
    ],
    bouw: {
      kop: "A house that stood empty all winter, and a farmhouse under renovation",
      alineas: [
        "**A second home** is often kept on a low setting or left completely unheated in winter. On the cold inside of thick stone walls **moisture then condenses**, and textiles, cupboards and ceilings absorb it. With a dehumidifier and a heater you bring such a house back up to standard in spring, before mould takes hold.",
        "**Renovating a stone farmhouse in Warzée or Ellemelle** calls for a different approach. There is demolition and replastering, and often a new floor with underfloor heating goes in. All that water has to leave the house again before the floor layer or the painter can start. **The technician takes a reading at the start**, so you know where you stand.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**For a second home that smells musty after the winter**: a compact 50 litres a day dehumidifier for rooms up to about 250 m³." },
      { key: "teddh20", waarom: "First brings a house that stood unheated for months up to temperature. **Without warmth a condensation dehumidifier absorbs little moisture.** This heater needs a 400 V connection." },
      { key: "ttk350", waarom: "For converting a farmhouse: 70 litres a day for a ground floor with new plaster, screed and underfloor heating." },
      { key: "ttv4500", waarom: "In a stone home with many small rooms, this fan carries the dry air into the corners where moisture lingers too." },
    ],
    levering: {
      kop: "Delivery in Ouffet: even if you do not live there yourself",
      alinea:
        "From Aartselaar we drive **in over an hour and a half** via Liège up to the plateau. You choose a delivery date when you book, and we fix the time by appointment. If it is a second home where you are not always present, **let us know who will open the door**. The technician places the units, sets them up and leaves them running until collection.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar: especially if you are coming from Flanders anyway",
      alinea:
        "If you live in Flanders and are driving to your second home in Ouffet anyway, you can **take a unit with you on the way there**. Our collection point is **on the A12 in Aartselaar**, over an hour and a half from Ouffet. A dehumidifier travels upright. For a complete renovation with several units, delivery is simpler.",
    },
    buren: ["clavier", "tinlot", "anthisnes", "hamoir"],
    faq: [
      {
        q: "My second home in Ouffet smells musty after the winter. Will a construction dehumidifier help?",
        a: "Yes, if it is condensation in a house that stood cold for a long time. Turn on the heating or a heater and let a dehumidifier run for a week or two with the windows shut. If the patches at the bottom of the wall come back after that, it is rising damp, and a dehumidifier will not solve that for good.",
      },
      {
        q: "Do I need to be on site when the construction dehumidifier is delivered?",
        a: "Someone has to open the door and show the technician which rooms need drying. That can be a neighbour, a contractor or a family member. Tell us who that is when you book, and we will agree the delivery time with that person. Collection works the same way.",
      },
      {
        q: "Can an old electrical installation in the countryside handle the units?",
        a: "A 50 or 70 litres a day dehumidifier works on a 230 V socket. An electric site heater needs a 400 V connection, and that is not always present in an old rural house. Also spread the units over different circuits. The technician looks at the installation during set-up.",
      },
      {
        q: "How far is Ouffet from your warehouse?",
        a: "About a hundred and fifty kilometres, a drive of over an hour and a half via Liège. Delivery, set-up and collection are part of the drying package. We combine deliveries in the Condroz with other addresses in the area, so the technician does not drive there and back for one unit.",
      },
    ],
    realisaties: [],
  },
  tinlot: {
    slug: "tinlot",
    title: "Construction dehumidifier hire in Tinlot | Vernast",
    description:
      "Dehumidifier hire in Tinlot, Seny, Abée, Fraiture or Ramelot: for farmhouses and detached new builds on the open Condroz plateau. Delivery by appointment.",
    h1: "Construction dehumidifier hire in Tinlot",
    kicker: "Province of Liège · open plateau in the Condroz",
    rit: { afstand: "about 145 km", tijd: "about an hour and a half" },
    intro: [
      "Tinlot is a small rural municipality **on the Condroz plateau, between Nandrin and Clavier**. It was formed in the 1977 merger from **Abée, Fraiture, Ramelot, Seny and Soheit-Tinlot** and took its name from the last of these. The landscape is **open and rolling**, with large fields, farmhouses on the ridges and copses in the hollows.",
      "Next to old **natural-stone farmhouses and village houses**, Tinlot has **villas and detached homes** on spacious plots. So you find both stone renovations and new builds here. From Aartselaar it takes us about an hour and a half to drive there.",
    ],
    bouw: {
      kop: "Detached new builds in the wind, and sandstone farmhouses",
      alineas: [
        "**A detached home on the open plateau** catches the wind from every side. On a winter site the shell cools down quickly, and a freshly poured screed then barely dries. With the windows shut, a heater and **one dehumidifier per storey**, the floor layer can start on time instead of a month later.",
        "**An old farmhouse in Seny or Abée** has thick walls of sandstone and limestone, and often a stable or barn is being converted into a home. Such a barn has **high rooms and few interior walls**, and so a large volume of air. There the capacity of the dehumidifier counts for more than its size.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a converted barn with a high open space**: 110 litres a day and a range of up to about 600 m³." },
      { key: "ttk350", waarom: "For a detached new build, one per storey: 70 litres a day for fresh screed and plasterwork in rooms up to about 400 m³." },
      { key: "teddh30", waarom: "A shell on the open plateau cools down quickly in winter. **This 30 kW heater keeps the room warm enough** for the dehumidifier. It runs on three-phase power (400 V)." },
      { key: "radiaal2250", waarom: "Blows dry air in a targeted way over a fresh screed, so the floor dries evenly and not just at the edges." },
    ],
    levering: {
      kop: "Delivery in Tinlot: via Liège up onto the plateau",
      alinea:
        "From Aartselaar we drive **along the E313 to Liège** and then up onto the plateau, about an hour and a half in all. You choose the delivery date when you book; we agree the time with you. If the site has an unpaved drive or is on a farm track, mention it in advance. **The technician brings a sack truck** and places the units storey by storey.",
    },
    afhalen: {
      kop: "Collecting from Tinlot costs you half a day",
      alinea:
        "At about an hour and a half each way, you are **on the road for around three hours** there and back. Two or three dehumidifiers and a heater for a new build also will not fit in a car. **Delivery and collection are part of a drying package**, as is the moisture reading at the start and at collection.",
    },
    buren: ["nandrin", "clavier", "ouffet"],
    faq: [
      {
        q: "My screed is not drying in a new build out in the open. What is going wrong?",
        a: "Usually it is too cold. An unheated shell on a windy plot barely gets above ten degrees in winter, and then a screed hardly dries. With the windows shut, a heater and a dehumidifier added, the drying gets going. The technician measures how wet the floor is at the start.",
      },
      {
        q: "Which dehumidifier suits a converted barn with a high ridge?",
        a: "A barn has a lot of volume and few dividing walls. So choose one large 110 litres a day dehumidifier rather than three small ones. A fan also gets the air under the ridge moving. Enter the volume in the Calculator, and you will see which combination fits.",
      },
      {
        q: "Do you deliver in Seny, Abée, Fraiture, Ramelot and Soheit-Tinlot?",
        a: "Yes, we deliver in all five villages of Tinlot. When you book, give the right village and how the site can be reached. That way the technician plans the trip properly and does not end up on the wrong side of the plateau.",
      },
      {
        q: "How do I know the floor is dry enough for the floor layer?",
        a: "The technician measures the moisture content at installation and at collection. You pass that last reading on to the floor layer, because he decides which limit his floor requires. If the screed is still too wet, we discuss together whether the units should stay longer.",
      },
    ],
    realisaties: [],
  },
  verlaine: {
    slug: "verlaine",
    title: "Construction dehumidifier hire in Verlaine | Vernast",
    description:
      "Dehumidifier hire in Verlaine, Bodegnée, Chapon-Seraing or Seraing-le-Château? Vernast delivers and sets up units for village homes and converted farmhouses.",
    h1: "Construction dehumidifier hire in Verlaine",
    kicker: "Province of Liège · a rural municipality in the Hesbaye",
    rit: { afstand: "about 115 km", tijd: "just over an hour" },
    intro: [
      "Verlaine is a small rural municipality in the Hesbaye, between Huy and Waremme. It has four villages: **Verlaine, Bodegnée, Chapon-Seraing and Seraing-le-Château**, surrounded by fields. From Aartselaar it takes us just over an hour to drive there.",
      "Anyone renovating here is usually working on **a farmhouse or an older village home** in brick. On the edges of the villages there are some new builds too.",
    ],
    bouw: {
      kop: "Village homes and farmhouses in Hesbaye brick",
      alineas: [
        "An old village home has **solid brick walls** and often a floor laid directly on the ground. Rising damp is a regular occurrence in such houses. After an injection treatment or a new floor, the wall and the screed have to dry. That goes **faster in a closed, heated room**.",
        "A **stable or barn being converted** has high, open spaces. Damp air does not reach the dehumidifier by itself there. One large unit in the middle and a fan that circulates the air then work better than two small units in the corners.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a high, open barn becoming a home.** At 110 litres a day it can handle a large volume in one space." },
      { key: "ttk350", waarom: "**After an injection treatment against rising damp.** At 70 litres a day it removes the moisture from the renovated walls and the new floor of a village home." },
      { key: "ttv4500", waarom: "In a high stable, damp air lingers low down. This fan circulates it, so the dehumidifier can pick it up." },
      { key: "teddh20", waarom: "**For an unheated farmhouse in winter.** This 20 kW site heater on 400 V brings a room above 15 °C, so a condensation dehumidifier works at full power." },
    ],
    levering: {
      kop: "Delivery in Verlaine: via the E40 to the Hesbaye villages",
      alinea:
        "We drive **via the E40** and the regional roads to Verlaine, just over an hour on the road. You choose a delivery date when you book; in Wallonia we deliver by appointment. The technician places the units per drying zone, lays the drain hose and records the moisture readings. If your farmhouse is on a narrow country lane, tell us **how he can get to the barn**.",
    },
    afhalen: {
      kop: "Collecting from Verlaine: twice just over an hour",
      alinea:
        "The collection point in Aartselaar is just over an hour's drive from Verlaine. You drive that distance when collecting and again when returning. **Delivery is the logical choice here**, because collection is included too.",
    },
    buren: ["amay", "villers-le-bouillet", "saint-georges-sur-meuse", "donceel"],
    faq: [
      {
        q: "Does a construction dehumidifier help after an injection treatment against rising damp?",
        a: "Yes, precisely then. The injection stops the moisture from below, but the water already in the wall still has to come out. A dehumidifier in the room with the doors shut speeds that up considerably, so you can plaster or paint sooner.",
      },
      {
        q: "Is Seraing-le-Château the same as Seraing near Liège?",
        a: "No. Seraing-le-Château is part of Verlaine, in the rural Hesbaye. Seraing is a town on the Meuse near Liège. So give the postcode when you book, and the technician will drive to the right address.",
      },
      {
        q: "Does one large unit work better than two small ones in an open barn?",
        a: "In a high, open space usually yes, provided a fan also circulates the air. Two small units in the corners mainly dry their own corner. During installation the technician looks at the shape of the space and adapts the set-up to it.",
      },
      {
        q: "My floor is laid directly on the ground. Can I dry it with a dehumidifier?",
        a: "The top layer of a new screed or a wet floor, yes. A floor without a damp-proof membrane does absorb moisture from below, though, and then it comes back. During installation the technician measures the floor, so you know whether it is construction moisture.",
      },
    ],
    realisaties: [],
  },
  "villers-le-bouillet": {
    slug: "villers-le-bouillet",
    title: "Dehumidifier hire in Villers-le-Bouillet | Vernast",
    description:
      "Dehumidifier hire in Villers-le-Bouillet, Warnant-Dreye or Vaux-et-Borset? Vernast delivers units for new builds along the E42 and converted farmhouses.",
    h1: "Construction dehumidifier hire in Villers-le-Bouillet",
    kicker: "Province of Liège · on the plateau above Huy",
    rit: { afstand: "about 115 km", tijd: "just over an hour" },
    intro: [
      "Villers-le-Bouillet lies on the plateau north of Huy, on the edge of **the Hesbaye**. The E42 between Namur and Liège runs through the municipality, and many housing estates have been added along that route over the past decades. From Aartselaar we get there in just over an hour.",
      "Between the new neighbourhoods lie the old villages of Warnant-Dreye, Vaux-et-Borset, Vieux-Waleffe and Fize-Fontaine. There **courtyard farmhouses** stand among the fields, and more than one of them is being converted into a home today.",
    ],
    bouw: {
      kop: "New builds on the plateau and farmhouses becoming homes",
      alineas: [
        "With a new build it is all about **the schedule**. The screed has to be dry enough before the floor goes on, and starting too early risks a floor that comes loose or swells. A dehumidifier of the right size, in a closed room, shortens that wait.",
        "A **courtyard farmhouse** converted into one or more homes brings a large volume and thick brick walls. There it is often one unit per wing, and in winter a site heater to bring the room up to temperature first. During installation the technician divides the farmhouse into **separate drying zones**.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a new-build home on a housing estate.** At 70 litres a day it is the right size for a ground floor with fresh screed." },
      { key: "ttk650", waarom: "**For a wing of a courtyard farmhouse with a high roof.** It extracts 110 litres a day from the air, in rooms up to 600 m³." },
      { key: "teddh30", waarom: "A farmhouse on the open plateau cools down sharply in winter. This site heater brings the room above 15 °C, the temperature above which a condensation dehumidifier works well." },
      { key: "ttv4500", waarom: "In a long stable or barn it sends the air from one end wall to the other, so the furthest corner does not lag behind." },
    ],
    levering: {
      kop: "Delivery in Villers-le-Bouillet: easy to reach via the E42",
      alinea:
        "We drive **via the E40 and the E42**, just over an hour on the road. You choose a delivery date when you book, and for Wallonia we fix the exact moment with you. Is your farmhouse on a farm track? **Describe the access**, so the technician can take the units straight into the right wing.",
    },
    afhalen: {
      kop: "Collecting: just over an hour each way",
      alinea:
        "From Villers-le-Bouillet you drive just over an hour to Aartselaar, and the same trip again when returning. For a new-build site or a farmhouse you are **better off having it delivered**: the technician then also looks at the volume and the set-up, and they determine the result as much as the unit does.",
    },
    buren: ["hoei", "wanze", "amay", "verlaine", "braives"],
    faq: [
      {
        q: "Why does the cellar of my new build stay wet for so long?",
        a: "During the shell construction, rainwater runs into the excavation and onto the cellar floor, and concrete and masonry soak it up. After that the moisture can only get out slowly. A dehumidifier in the closed cellar removes it faster than airing with open windows.",
      },
      {
        q: "How many units do I need for a courtyard farmhouse?",
        a: "Usually one dehumidifier per wing or per storey, with the doors between the zones shut. In winter a site heater is often added. The technician looks at the volume during installation and tells you which combination works best.",
      },
      {
        q: "Can a dehumidifier stay on when the site is empty?",
        a: "Yes. It runs day and night and drains its water through a hose to a floor drain or an outlet. Do make sure the power point does not go off when the contractor locks the site distribution box in the evening.",
      },
      {
        q: "Do you also deliver in Vieux-Waleffe and Fize-Fontaine?",
        a: "Yes, in all parts of Villers-le-Bouillet. The villages lie far apart on the plateau, so give the full address with postcode. That way the technician plans his route and we agree a delivery time with you.",
      },
    ],
    realisaties: [],
  },
  wanze: {
    slug: "wanze",
    title: "Construction dehumidifier hire in Wanze and Moha | Vernast",
    description:
      "Dehumidifier hire in Wanze, Antheit, Bas-Oha, Moha or Huccorgne? Vernast delivers and sets up units for stone houses on the Mehaigne and for new builds.",
    h1: "Construction dehumidifier hire in Wanze",
    kicker: "Province of Liège · sugar factory and Mehaigne valley",
    rit: { afstand: "about 120 km", tijd: "just over an hour" },
    intro: [
      "Wanze lies on the Meuse, just upstream of Huy. The municipality is known for **the sugar factory**, where lorries come and go during the beet campaign in autumn. From Aartselaar it takes us just over an hour to drive there.",
      "Behind the industrial zone the **Mehaigne** flows through a green valley, with Moha, where the castle ruins stand, and Huccorgne. Antheit, Vinalmont and Bas-Oha lie between the Meuse and the plateau. You will find old stone houses and recent housing estates.",
    ],
    bouw: {
      kop: "Valley houses on the Mehaigne, housing estates above",
      alineas: [
        "In Moha and Huccorgne the houses stand close to the river and against the side of the valley, often with **thick natural-stone walls**. Such a home is naturally cool. In summer that is pleasant, but during a renovation it works against you: **cold walls dry slowly**, and fresh plasterwork stays dark there for weeks.",
        "Around Antheit and Vinalmont the buildings are more recent: **new builds with screed and underfloor heating** and extensions behind older homes. There everything revolves around the schedule. The floor layer or tiler wants to see a reading, and the technician measures the screed at collection.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a new build with fresh screed.** At 70 litres a day and with a range of up to 400 m³, the floor layer's schedule stays achievable." },
      { key: "teddh30", waarom: "**For a stone house being renovated unheated in winter.** This site heater on three-phase power first brings the room up to temperature, then the drying starts." },
      { key: "ttv4500", waarom: "In front of a **thick stone wall** it blows away the damp layer of air, so the dehumidifier keeps drawing moisture out of the wall." },
      { key: "ttk170", waarom: "For a single bathroom or room in a lived-in house. It is compact, uses 0.75 kW and fits easily up a narrow stairwell." },
    ],
    levering: {
      kop: "Delivery in Wanze: along the Meuse or through the valley",
      alinea:
        "We drive **via the E40** to Wanze, just over an hour on the road. You choose a delivery date when you book; in Wallonia we make an appointment with you for the delivery time. During the beet campaign the roads around the sugar factory are busier. In the narrow streets of Moha, it is best to tell us in advance **where the van can stop**.",
    },
    afhalen: {
      kop: "Collecting from Wanze: allow half a day",
      alinea:
        "Our warehouse in Aartselaar is just over an hour's drive from Wanze. Collecting and returning means making that trip twice. **Delivery makes more sense here**, especially for a renovation where the dehumidifier stays for a few weeks.",
    },
    buren: ["hoei", "villers-le-bouillet", "heron", "braives"],
    faq: [
      {
        q: "My house in Moha stands against the side of the Mehaigne valley. What should I know?",
        a: "A wall against the slope takes in moisture from outside after a lot of rain. A dehumidifier removes the construction moisture after a renovation, but it can do nothing against water from the slope. During installation the technician measures on which side the moisture sits.",
      },
      {
        q: "How do I know when the screed in my new build is dry enough?",
        a: "By measuring, not by counting days. The floor layer or tiler decides which limit applies to his material. At collection the technician measures the screed, so you have a figure you can pass on.",
      },
      {
        q: "Do you work in all parts of Wanze?",
        a: "Yes, from Bas-Oha on the Meuse to Huccorgne on the Mehaigne. Include the district in the address. The villages are spread out, and with the full address the technician plans his route correctly.",
      },
      {
        q: "Can I let a dehumidifier run in a lived-in house?",
        a: "Yes, if the room it stands in can be closed. Put it in the room that needs to dry, keep the door shut and use the rest of the house as usual. It keeps running at night too, because drying works best without interruption.",
      },
    ],
    realisaties: [],
  },
  amel: {
    slug: "amel",
    title: "Construction dehumidifier hire in Amel (Amblève) | Vernast",
    description:
      "Dehumidifier hire in Amel: for rubble-stone Eifel farmhouses and new builds on the cold high plateau. Set up by a technician, measured at start and end.",
    h1: "Construction dehumidifier hire in Amel",
    kicker: "Province of Liège · Eifel villages in the Amel valley",
    rit: { afstand: "about 205 km", tijd: "just over two hours" },
    intro: [
      "Amel, Amblève in French, lies in the Belgian Eifel, in the German-speaking part of the province of Liège. The municipality consists of villages on the high plateau: **Amel, Heppenbach and Meyerode**, with hamlets around them such as Born, Deidenberg and Schoppen. From Aartselaar it takes just over two hours to drive there.",
      "You mainly find meadows, woodland and scattered farmhouses. The climate is that of the High Ardennes, with **long winters, plenty of rain and night frost until late in spring**. As a result, the period in which the outside air helps a site dry is shorter here than in Flanders.",
    ],
    bouw: {
      kop: "Old farmhouses with thick walls, new builds in a short building season",
      alineas: [
        "The older building type in Amel is **the Eifel farmhouse**: house and stable under one roof, with rubble-stone walls. When it is converted into a home, new plaster goes onto a cold, thick wall that holds moisture itself. **The technician measures during installation** how wet the wall is. That way you know later what was construction moisture and what the stone itself carries.",
        "With **new builds** the calendar counts for a lot. If the shell construction runs on into autumn, the screed and plasterwork have to dry in cold, damp months. An unheated home on the high plateau then stays well below 15 °C, the temperature above which a condensation dehumidifier works well. **Adding a site heater or using a desiccant dehumidifier** solves that.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a new-build home with fresh screed.** Extracts up to 70 litres a day from the air in rooms up to about 400 m³, enough for an entire ground floor." },
      { key: "teddh30", waarom: "**For a winter site on the high plateau**, where an unheated home stays cold for weeks. The heater delivers 30 kW and needs a 400 V (three-phase) connection." },
      { key: "revolution", waarom: "For **a cold stable or barn becoming living space**. This desiccant dehumidifier also absorbs moisture where it is too cold for a condensation dehumidifier." },
      { key: "ttv4500", waarom: "Damp air lingers along **a thick rubble-stone wall**. The fan gets that air moving, so the dehumidifier can pick it up." },
    ],
    levering: {
      kop: "Delivery in Amel: a long drive, well planned",
      alinea:
        "Amel is **just over two hours** from our warehouse in Aartselaar, via Liège, Verviers and the A27. You choose a delivery date when you book. In Wallonia we deliver **by appointment**, and we combine the trip with other addresses in the East Cantons. If snow or black ice is forecast, we call ahead. Also let us know whether the van can get to the farmhouse, because not every drive is paved.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar: over four hours on the road",
      alinea:
        "Collecting a unit means just over two hours there and just over two hours back, and the same again when returning it. A construction dehumidifier also has to be **transported upright**. If you choose delivery, the technician places the units and **takes readings at the start and at collection**.",
    },
    buren: ["buetgenbach", "buellingen", "sankt-vith", "weismes"],
    faq: [
      {
        q: "Does a construction dehumidifier also work in a cold Eifel farmhouse in winter?",
        a: "A condensation dehumidifier clearly loses efficiency below 15 °C, and an unheated farmhouse in Amel is often colder than that in winter. That is why here we combine a dehumidifier with an electric site heater, or choose the desiccant dehumidifier that keeps working in the cold. Tell us when you book whether the building is heated.",
      },
      {
        q: "Do you also deliver in the small hamlets such as Born or Schoppen?",
        a: "Yes, we deliver throughout the municipality of Amel, including the hamlets and isolated farmhouses. Tell us what the access is like when you book. With a narrow farm track or an unpaved drive, the technician will bring a sack truck.",
      },
      {
        q: "How long is the drive from Aartselaar to Amel?",
        a: "Allow just over two hours, and longer with traffic around Liège or winter weather on the high plateau. You choose a delivery date when you book and we agree the delivery time with you, so you do not have to wait all day.",
      },
      {
        q: "How do I dry a converted stable that is becoming living space?",
        a: "Keep the space as closed as possible, bring it up to temperature with a site heater and let a dehumidifier take the moisture out of the air. Old rubble-stone stable walls release their water slowly, so allow weeks. The reading at the start gives you a point of comparison for later.",
      },
    ],
    realisaties: [],
  },
  aubel: {
    slug: "aubel",
    title: "Dehumidifier hire in Aubel, near Val-Dieu Abbey | Vernast",
    description:
      "Dehumidifier hire in Aubel, on the plateau by the Voeren area: farmhouses, orchards and Val-Dieu Abbey. Delivery by appointment, set up by a technician.",
    h1: "Construction dehumidifier hire in Aubel",
    kicker: "Liège · plateau village on the border with Voeren",
    rit: { afstand: "about 145 km", tijd: "about an hour and a half" },
    intro: [
      "Aubel lies in the north of the Pays de Herve, with **Voeren** just across the municipal boundary. It is a rural municipality of meadows, standard orchards and scattered farmhouses, known for its fruit syrup and for **Val-Dieu Abbey** in the Berwinne valley.",
      "Around the market square, brick houses stand close together. Beyond that you mainly find farms, converted farmhouses and newer homes along the roads to the neighbouring villages. We drive about an hour and a half from Aartselaar to Aubel.",
    ],
    bouw: {
      kop: "Converted farmhouses and a cold winter on the plateau",
      alineas: [
        "**A farmhouse in Aubel** often has a house, a stable and a barn under one roof or around an inner courtyard. A conversion adds new floors, new plasterwork and sometimes a second dwelling. That brings a lot of construction moisture into a building with thick, cold walls, and those walls only release their moisture when the air next to them is dry and moving.",
        "**On the plateau the winter is colder** and windier than in the valleys. An unheated site then stays below the temperature at which a condensation dehumidifier works well for a long time. During installation the technician measures the temperature and adds a site heater if needed.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a farmhouse with house and stable under one roof**: 110 litres a day, designed for a lot of construction moisture at once." },
      { key: "teddh30", waarom: "**For an unheated room in winter**: this 30 kW electric site heater brings the site up to temperature for the dehumidifier. Allow for a 400 V connection." },
      { key: "ttv4500", waarom: "In a barn with a high ridge, damp air lingers in the corners. **This fan keeps it moving**, so the dehumidifier reaches the whole space." },
      { key: "ttk170", waarom: "**For a single converted room or a bathroom** in a home near the market square: compact and runs on a standard socket." },
    ],
    levering: {
      kop: "Delivery in Aubel: via the E40 and the country roads",
      alinea:
        "We drive **via the E313 and the E40** and the last stretch on country roads, about an hour and a half in all. You choose a delivery date when you book and we deliver by appointment. If the farmhouse is on a narrow road or behind a yard, tell us where the van can stand. The technician brings everything inside, places it room by room and records the moisture readings.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar: three hours' driving",
      alinea:
        "Our collection point is about an hour and a half from Aubel, so **about three hours there and back**. A dehumidifier, a fan and a heater together also will not fit in an ordinary car. For a farmhouse conversion, delivery and collection is the practical choice.",
    },
    buren: ["voeren", "plombieres", "thimister-clermont", "herve"],
    faq: [
      {
        q: "Does a construction dehumidifier work in a cold farmhouse in winter?",
        a: "Only if the room is warm enough. Below fifteen degrees a condensation dehumidifier loses a lot of efficiency, and an old farmhouse on the plateau often does not get warmer than that in winter. Then we add a site heater, or choose a desiccant dehumidifier if heating is not possible.",
      },
      {
        q: "How many units do I need for a stable becoming a home?",
        a: "That depends on the volume and on what is wet: only the screed, or the plasterwork and walls too. Give us the floor area and the height when you book, and we will suggest a combination. The technician checks on site whether it is enough.",
      },
      {
        q: "Do you also deliver on the Voeren and Val-Dieu side?",
        a: "Yes. We drive to all of Aubel, including the farmhouses towards Voeren and in the valley near Val-Dieu. For a remote address, mention whether the access is along a farm track, so the technician knows what to expect.",
      },
      {
        q: "Can the dehumidifier keep running while the tradespeople carry on working?",
        a: "Yes, the units keep running while work is going on. Agree with the contractor that the windows stay shut as much as possible, otherwise the unit dries the outside air. We lay the drain hose so nobody trips over it.",
      },
    ],
    realisaties: [],
  },
  baelen: {
    slug: "baelen",
    title: "Construction dehumidifier hire in Baelen | Vernast",
    description:
      "Dehumidifier hire in Baelen and Membach: homes and farmhouses between the Hertogenwald and the Vesdre, near Eupen. Delivered by appointment and set up.",
    h1: "Construction dehumidifier hire in Baelen",
    kicker: "Liège · on the edge of the Hertogenwald",
    rit: { afstand: "about 155 km", tijd: "over an hour and a half" },
    intro: [
      "Baelen lies in the east of the province of Liège, with **Eupen** as its neighbour. A large part of the area is forest: **the Hertogenwald**, which runs on to the reservoirs. From Aartselaar it takes us over an hour and a half to drive to Baelen.",
      "**Membach**, in the Vesdre valley, also belongs to the municipality. In the village stand old homes and farmhouses, newer houses along the roads, and in between hamlets among meadows and woodland.",
    ],
    bouw: {
      kop: "A damp climate on the edge of the forest",
      alineas: [
        "**On the edge of the Hertogenwald** the climate is damper than in the west of the country. A home being renovated in autumn or winter will not dry here with an open window, because the outside air is often as damp as the air inside. A construction dehumidifier does get the moisture out of the room.",
        "**In Membach** the homes lie lower and closer to the Vesdre, with cellars and ground floors that are more susceptible to damp. In Baelen, higher up, it is more often the renovation of old farmhouses and village houses, with thick walls that release their moisture slowly.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a renovation in the damp climate on the forest edge**, where airing achieves little: 70 litres a day." },
      { key: "revolution", waarom: "**For a cellar in Membach close to the Vesdre**: this desiccant dehumidifier also works in a cold, damp room." },
      { key: "teddh30", waarom: "**For a winter site in an old farmhouse**: 30 kW to bring the room up to temperature, so the dehumidifier does not run at half power. Needs three-phase power (400 V)." },
      { key: "ttv4500", waarom: "With the thick walls of a farmhouse in Baelen, **it keeps the air moving**, so the moisture can keep coming out of the wall." },
    ],
    levering: {
      kop: "Delivery in Baelen: right up to the border with Eupen",
      alinea:
        "We drive over an hour and a half, **via the E313 and the E40**, and the last stretch along the Vesdre or across the plateau. You choose a delivery date when you book, and we agree the delivery time together. If the home is on a forest road or has narrow access, tell us where a van can stand.",
    },
    afhalen: {
      kop: "Collecting: over three hours there and back",
      alinea:
        "Our collection point in Aartselaar is over an hour and a half from Baelen. So there and back you are **on the road for over three hours**, and that rarely pays off. With delivery the technician also collects the units again and measures at the end how much moisture is still there.",
    },
    buren: ["limbourg", "welkenraedt", "eupen", "jalhay"],
    faq: [
      {
        q: "Why is my renovation not drying with the windows open?",
        a: "Because the outside air in Baelen is often as damp as the air inside, especially in autumn and winter. Airing then just moves moisture around. A dehumidifier extracts the water from the air and carries it away, whatever the weather outside.",
      },
      {
        q: "How do I operate the units once the technician has gone?",
        a: "That is simple. The technician sets everything up during installation and explains what to keep an eye on, such as the drain hose or the collection tank. Any questions afterwards? Feel free to email or call us, in French too.",
      },
      {
        q: "Do you also deliver in Membach?",
        a: "Yes, Membach belongs to Baelen and is within our delivery area. If the home is close to the Vesdre and has a cellar, mention it when you book. The technician will then bring a unit that also works in a cold cellar.",
      },
      {
        q: "How long does a dehumidifier need to stay in an old farmhouse?",
        a: "That depends on the thickness of the walls and on how much water went in during the renovation. With thick walls in natural stone or brick, allow a few weeks. The technician takes readings at installation and at collection, so you know where you stand.",
      },
    ],
    realisaties: [],
  },
  "burg-reuland": {
    slug: "burg-reuland",
    title: "Construction dehumidifier hire in Burg-Reuland | Vernast",
    description:
      "Dehumidifier hire in Burg-Reuland: for rubble-stone farmhouses and new builds in the Our valley, by Luxembourg and Germany. Delivered, set up and measured.",
    h1: "Construction dehumidifier hire in Burg-Reuland",
    kicker: "Province of Liège · the Our valley on the tri-border",
    rit: { afstand: "about 230 km", tijd: "about two and a half hours" },
    intro: [
      "Burg-Reuland is the **southernmost municipality of the German-speaking Community**. It lies in the **Our valley**, the river that forms the border with Germany here, and at Ouren Belgium, Luxembourg and Germany meet. Above the village of Reuland stand the **ruins of the castle** from which the municipality takes its name.",
      "The municipality consists of **Reuland and Thommen**, with a series of small villages and hamlets. It is rural and sparsely populated, with farmhouses, holiday homes and a few new housing estates. To the west it borders Gouvy in the province of Luxembourg. From Aartselaar it takes about two and a half hours to drive there.",
    ],
    bouw: {
      kop: "Farmhouses in the valley and homes on the cold slope",
      alineas: [
        "The older building type is **the rubble-stone Eifel farmhouse**, often with a slate roof. Anyone converting such a farmhouse is dealing with **walls half a metre thick or more** that release their moisture slowly. In the Our valley the ground is close to the water, and a ground floor or cellar there is naturally cool and damp.",
        "On the slopes above it is more often **new builds and holiday homes**. There it is mainly **the long, cold winter** that slows things down. A home that is ready for its screed in autumn then stands for weeks at a temperature at which plaster and floor barely dry. With a dehumidifier and a heater added, the floor layer's and painter's schedule stays achievable.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a converted farmhouse with a new screed** in the living area. Removes up to 70 litres a day, in rooms up to about 400 m³." },
      { key: "revolution", waarom: "For **a cold cellar or cool ground floor in the valley**, where a condensation dehumidifier performs too poorly. This desiccant dehumidifier also works at low temperatures." },
      { key: "teddh20", waarom: "**For a holiday home being finished in winter.** The 20 kW heater brings the room up to temperature, so the dehumidifier can do its work. Needs a 400 V connection." },
      { key: "radiaal2250", waarom: "Blows dry air in a targeted way along **an old stone wall or over a wet floor**, where moisture lingers longest." },
    ],
    levering: {
      kop: "Delivery in Burg-Reuland: our longest drive in the province",
      alinea:
        "Burg-Reuland is **our furthest address in the province of Liège**: about two and a half hours' drive via Liège, Verviers and the A27, to beyond Sankt Vith. That is why we combine the trip with other addresses in the south of the East Cantons. You choose a delivery date and we agree the time with you. Let us know in advance whether the van can get to the house; in the narrow valley lanes that is not always possible.",
    },
    afhalen: {
      kop: "Collecting from Burg-Reuland: five hours' driving",
      alinea:
        "There and back to Aartselaar you are on the road for **about five hours**, and that twice per hire period. We advise against it. **Have the units delivered**: the technician then measures at the start how wet the walls are, and with a rubble-stone farmhouse that is the first thing you want to know.",
    },
    buren: ["sankt-vith", "gouvy"],
    faq: [
      {
        q: "Do you deliver all the way to Burg-Reuland, so far from Antwerp?",
        a: "Yes, the municipality is within our delivery area. It is our longest drive in the province, though, so we plan deliveries in the area together and agree the delivery time with you. Tell us when you book what the access to your house is like.",
      },
      {
        q: "How do I dry a rubble-stone farmhouse in the Our valley after a conversion?",
        a: "Keep the space closed, put one dehumidifier per zone and a heater if needed, because such a farmhouse is cool in the cold season. Thick stone walls release their water slowly, so allow weeks rather than days. The reading at the start and at collection shows the difference.",
      },
      {
        q: "Is my damp cellar in the valley construction moisture or groundwater?",
        a: "The technician measures that first during installation. Construction moisture after a renovation disappears with a dehumidifier. If the moisture comes back after every rainy spell along the floor or the wall on the hill side, it comes from outside and drying alone will not solve the problem.",
      },
      {
        q: "Do you also have a page for Gouvy, just across the provincial border?",
        a: "Yes, Gouvy in the province of Luxembourg borders Burg-Reuland and has its own page. For the delivery the provincial border plays no part: both municipalities lie on the same long drive, and we often plan them together.",
      },
    ],
    realisaties: [],
  },
  buellingen: {
    slug: "buellingen",
    title: "Construction dehumidifier hire in Büllingen | Vernast",
    description:
      "Dehumidifier hire in Büllingen: for post-war rebuilt homes and wet new builds in the border villages of the East Cantons. Delivered, set up and measured.",
    h1: "Construction dehumidifier hire in Büllingen",
    kicker: "Province of Liège · East Cantons against the German border",
    rit: { afstand: "about 210 km", tijd: "just over two hours" },
    intro: [
      "Büllingen, Bullange in French, is a sprawling German-speaking municipality in the East Cantons, **against the German border**. It consists of a series of villages, including **Büllingen, Rocherath, Krinkelt, Mürringen, Honsfeld and Manderfeld**, with meadows and spruce forest in between. From Aartselaar you are on the road for just over two hours.",
      "The villages lie **high and exposed** on the edge of the Eifel, with wind, snow and frost and a winter that lasts longer than in Flanders. Rocherath and Krinkelt were hit hard during the **Battle of the Bulge**. Many houses there were rebuilt after the war.",
    ],
    bouw: {
      kop: "Rebuilt villages and new builds in the wind",
      alineas: [
        "In the villages stand many **homes from the post-war reconstruction**. They are solidly built, but without the cavity or damp-proof course of a modern house. Anyone insulating and replastering such a home traps the moisture from the old wall behind a new layer. **So dry first and only finish afterwards**, otherwise stains will appear behind the paint later.",
        "With **new builds** on the open high plateau, the weather weighs heaviest. If a shell only becomes wind- and watertight in autumn, it has often had weeks of rain and snow. The screed and interior walls are then full of water, and outside it is too cold to dry with open windows. **Close up the home** and dry with a construction dehumidifier, with a heater added if needed.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a new build that stood open through a wet autumn.** At 110 litres a day and with a range of up to about 600 m³, it is made for a soaked shell." },
      { key: "teddh30", waarom: "**For a home without heating while it is freezing outside.** The heater brings the room to a temperature at which the dehumidifier works well. It needs a 400 V connection." },
      { key: "ttk170", waarom: "**For a single room in a post-war rebuilt home** being replastered. A compact 0.75 kW unit that runs on a standard socket." },
      { key: "radiaal2250", waarom: "Blows in a targeted way over **a wet screed**, so the floor dries evenly and no wet corner is left behind." },
    ],
    levering: {
      kop: "Delivery in Büllingen: from Manderfeld to Rocherath",
      alinea:
        "Büllingen is **just over two hours** from Aartselaar, via Liège, Verviers and the A27. It is one of our longest drives, which is why we combine it with other addresses in the area. You choose a delivery date when you book, and we agree the time with you. If you live in a remote village along the border, mention it, so the technician can plan his route.",
    },
    afhalen: {
      kop: "Collecting yourself: two long drives",
      alinea:
        "There and back to our collection point in Aartselaar you are on the road for **over four hours**, not counting the loading. After the hire period you drive the same distance again to return the unit. **Having it delivered is almost always the better choice here.**",
    },
    buren: ["buetgenbach", "amel", "sankt-vith"],
    faq: [
      {
        q: "My new build in Büllingen stood open all autumn. How wet is it?",
        a: "Often wetter than you think. Rain and snow on an open shell soak deep into the blocks and the screed. During installation the technician measures how much moisture is in the floor and walls, and on that basis we decide the size of dehumidifier and the length of the package.",
      },
      {
        q: "Can I dry when it is freezing outside?",
        a: "Yes, as long as the home is closed. Frost outside is no objection, because cold outside air contains little moisture. Inside it does have to be warm enough: below 15 °C a condensation dehumidifier loses efficiency. If there is no heating yet, we add an electric site heater.",
      },
      {
        q: "After insulating an old house, do I need to let it dry first?",
        a: "Yes, especially with a wall without a damp-proof course. If you trap the moisture behind insulation and new plaster, it looks for a way out later and you get stains or mould. Let the old wall and the new plaster dry first and have it measured before you paint.",
      },
      {
        q: "Do you deliver all the way to the border villages such as Manderfeld and Honsfeld?",
        a: "Yes, we deliver throughout the municipality of Büllingen, including the villages against the German border. Because it is a long drive, we plan those addresses together. You choose a delivery date and we agree the delivery time with you.",
      },
    ],
    realisaties: [],
  },
  buetgenbach: {
    slug: "buetgenbach",
    title: "Dehumidifier hire in Bütgenbach, by the lake | Vernast",
    description:
      "Dehumidifier hire in Bütgenbach: for homes by the reservoir and in Elsenborn or Weywertz, on the edge of the High Fens. Set up and measured on site.",
    h1: "Construction dehumidifier hire in Bütgenbach",
    kicker: "Province of Liège · the reservoir on the edge of the High Fens",
    rit: { afstand: "about 200 km", tijd: "about two hours" },
    intro: [
      "Bütgenbach, Butgenbach in French, lies in the German-speaking East Cantons, **on the eastern edge of the High Fens**. The municipality is known for the **Bütgenbach reservoir** on the Warche. Besides Bütgenbach itself, the villages of Elsenborn, Weywertz, Nidrum and Berg belong to it, and near Elsenborn there is a military camp. From Aartselaar it takes about two hours to drive there.",
      "The High Fens begin just beyond the municipal boundary, and you notice it in the climate: **plenty of rain, fog, snow and hard night frost**. Around the lake stand holiday homes and flats, and in the villages mainly houses and farmhouses.",
    ],
    bouw: {
      kop: "Holiday homes by the lake and houses on the wet high plateau",
      alineas: [
        "Around the reservoir stand **holiday homes and second homes** that are empty for part of the year. If such a home stayed unheated and shut all winter, the walls are often clammy in spring, the cellar smells musty or there is **mould behind the cupboards**. When freshening up or renovating, dry the room first and only paint afterwards.",
        "In the villages on the high plateau **the ground is wet** from the rain and the nearby peat. A cellar or ground floor without a good damp-proof course absorbs that moisture. During a renovation the technician measures whether it is **construction moisture or moisture from below**. A dehumidifier solves the first; for the second, the wall itself has to be dealt with.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**For a holiday home or flat by the lake** that is clammy after the winter. A compact dehumidifier that works on a standard socket." },
      { key: "revolution", waarom: "For **a cold cellar on the wet high plateau**. The desiccant dehumidifier keeps working where a condensation dehumidifier falls back because of the cold." },
      { key: "ttk350", waarom: "For **a home being renovated floor by floor**, with new plaster and screed. Removes up to 70 litres a day, for rooms up to about 400 m³." },
      { key: "teddh20", waarom: "First brings **an unheated house in Elsenborn** up to temperature. At 20 kW it is smaller than the 30 kW heater, but it also needs a 400 V connection." },
    ],
    levering: {
      kop: "Delivery in Bütgenbach: via the A27, by appointment",
      alinea:
        "From Aartselaar we drive **about two hours**, via Liège and Verviers and then the A27 towards Malmedy. You choose a delivery date when you book, and we agree the delivery time with you. If it is a holiday home where you are not always present, **let us know who will open the door**. The technician places, sets up and measures in the presence of someone who knows the home.",
    },
    afhalen: {
      kop: "Collecting from Bütgenbach: allow four hours' driving",
      alinea:
        "To our collection point in Aartselaar and back you are on the road for **about four hours**. If you live in Flanders and have a holiday home by the lake, collecting on the way to the East Cantons can work. **Always transport a construction dehumidifier upright.**",
    },
    buren: ["buellingen", "amel", "weismes"],
    faq: [
      {
        q: "Our holiday home by the reservoir is clammy after the winter. Will a dehumidifier help?",
        a: "Yes, for moisture that has built up in a closed, unheated home. Heat the home, keep the windows shut and let a dehumidifier run for a week or two. If the mould comes back in the same place, there is a leak or a cold bridge, and a dehumidifier will not solve that.",
      },
      {
        q: "Can the technician deliver if I am not there myself?",
        a: "Someone needs to be there who can open the door and knows the home; a neighbour or a manager is fine. The technician places the unit, sets it up and takes a moisture reading at the start. Agree who will be there when you book, so he knows whose bell to ring.",
      },
      {
        q: "How far is it from Aartselaar to Bütgenbach?",
        a: "About two hundred kilometres, a drive of around two hours via Liège, Verviers and the A27. Because it is one of our furthest destinations, we plan the deliveries in the East Cantons together and agree the delivery time with you in advance.",
      },
      {
        q: "Why is my cellar on the high plateau always damp?",
        a: "The area around the High Fens gets a lot of rain and the ground is wet. A cellar without a good damp-proof course absorbs that moisture from outside. A dehumidifier removes construction moisture after a renovation, but if the moisture keeps coming back, the technician first looks for the cause.",
      },
    ],
    realisaties: [],
  },
  dison: {
    slug: "dison",
    title: "Dehumidifier hire in Dison and Andrimont | Vernast",
    description:
      "Dehumidifier hire in Dison and Andrimont: workers' houses from the textile era and new housing estates next to Verviers. With a moisture reading at set-up.",
    h1: "Construction dehumidifier hire in Dison",
    kicker: "Liège · textile municipality next to Verviers",
    rit: { afstand: "about 148 km", tijd: "about an hour and a half" },
    intro: [
      "Dison runs seamlessly into Verviers and shares its history too. **Wool-washing plants and textile mills** long determined the work here, and around those businesses streets full of workers' houses rose up on the slopes.",
      "The district of **Andrimont** lies higher, towards the Herve plateau. There you find more housing estates and family homes among meadows and hedges. From Aartselaar it takes us about an hour and a half to drive to Dison.",
    ],
    bouw: {
      kop: "Workers' houses in the valley, housing estates on the edge",
      alineas: [
        "**A workers' house in Dison** is narrow, built of brick or rubble stone, with a small cellar and often a back extension against the slope. A thorough renovation adds a new screed, new plasterwork and insulation. In such a small home the air quickly becomes saturated, and then nothing dries any more without a dehumidifier that carries the moisture away.",
        "**In Andrimont** it is more often extensions and energy renovations: an extension, better insulation, new windows. A well-insulated home exchanges less air, so the water from a new screed no longer disappears through gaps by itself. With a construction dehumidifier the floor layer's schedule stays achievable.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**For a narrow workers' house**: compact, 50 litres a day and 0.75 kW on a standard socket." },
      { key: "ttk350", waarom: "**For a new extension or an entire ground floor** in Andrimont: 70 litres a day for fresh screed and plaster." },
      { key: "teddh20", waarom: "**For an unheated winter site**: this 20 kW heater brings the room to a temperature at which a condensation dehumidifier performs. It needs a 400 V connection." },
      { key: "radiaal2250", waarom: "**Aimed low over a new screed**, it blows the damp layer of air off the floor, so it dries more evenly." },
    ],
    levering: {
      kop: "Delivery in Dison: the same drive as to Verviers",
      alinea:
        "We reach Dison **via the E40 and the exit at Verviers**, in about an hour and a half. Delivery is by appointment, on the delivery date you choose when you book. The technician places the units room by room, runs the drain hose to an outlet and records the starting readings of wall and floor.",
    },
    afhalen: {
      kop: "Collecting is possible, but it makes for a long day",
      alinea:
        "Our collection point in Aartselaar is about an hour and a half's drive from Dison, so **about three hours there and back**. A dehumidifier also has to be transported upright. If you need to be near Antwerp anyway, you can collect, but usually delivery is the logical choice.",
    },
    buren: ["verviers", "limbourg", "thimister-clermont"],
    faq: [
      {
        q: "Will a construction dehumidifier fit in a narrow workers' house?",
        a: "Yes. The smallest dehumidifier is compact and runs on a standard socket, so it fits through a narrow hallway and up a steep staircase. If the house is small, one unit is often enough, which we move to another floor after a while.",
      },
      {
        q: "Why has my new screed been drying more slowly since the renovation?",
        a: "A well-insulated home with new windows exchanges much less air. The water from the screed then lingers in the room until the air is saturated. A dehumidifier extracts that moisture from the air and carries it away through a hose or into a collection tank.",
      },
      {
        q: "Do you also drive to Andrimont?",
        a: "Yes, Andrimont belongs to Dison and we deliver there in the same way, including the neighbourhoods towards the plateau. If there are roadworks in the street or access is restricted, mention it when you book. The technician will then decide in advance where to load and unload.",
      },
      {
        q: "Is a heater needed on a winter site?",
        a: "If the room stays below fifteen degrees, yes. A condensation dehumidifier loses a lot of efficiency at low temperatures. The site heater brings the site up to temperature first, after which the dehumidifier works much faster. The technician judges on site whether it is needed.",
      },
    ],
    realisaties: [],
  },
  eupen: {
    slug: "eupen",
    title: "Dehumidifier hire in Eupen, upper and lower town | Vernast",
    description:
      "Dehumidifier hire in Eupen: drying after a renovation in the upper town or after flooding in the lower town. Delivered, set up and measured.",
    h1: "Construction dehumidifier hire in Eupen",
    kicker: "Liège · capital of the German-speaking Community",
    rit: { afstand: "about 155 km", tijd: "about an hour and a half" },
    intro: [
      "Eupen is **the capital of the German-speaking Community**. The Community's parliament and government sit here. From our warehouse in Aartselaar it takes us **about an hour and a half** to drive there.",
      "The town has two parts. In **the upper town** on the slope stand the Baroque church of St Nicholas and the stately houses of the former cloth merchants. **The lower town** lies in the valley, where the Weser (Vesdre) and the Hill meet. To the south begin the Hertogenwald and the High Fens.",
    ],
    bouw: {
      kop: "Town mansions above, homes by the river below",
      alineas: [
        "In the upper town it is often **the renovation of an old town mansion**, with thick walls, high ceilings and a lot of volume. New plasterwork on an old, cold wall dries more slowly than in a new build. During installation the technician takes **a moisture reading**, so you know where you are starting from.",
        "In the lower town the homes stand **close to the Weser and the Hill**. If a cellar or ground floor was under water, you first clear the water and silt and then the drying starts. Because of its location on the edge of the High Fens, it is often cool and wet here. **Below about 15 °C a condensation dehumidifier loses efficiency**, so in an unheated room a heater belongs with it.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a town mansion in the upper town**: 70 litres a day in rooms up to about 400 m³, enough for a floor under renovation." },
      { key: "ttk650", waarom: "**After flooding in the lower town**: 110 litres a day, for a cellar or ground floor with a lot of moisture in floor and walls." },
      { key: "teddh30", waarom: "This 30 kW electric heater runs on three-phase power (400 V). It brings a cold cellar up to temperature, so the dehumidifier can do its work." },
      { key: "radiaal2250", waarom: "The radial fan blows right over a wet cellar floor and into the corners, where moisture lingers longest after flooding." },
    ],
    levering: {
      kop: "Delivery in Eupen: via Liège and the E40",
      alinea:
        "We drive **along the E313 to Liège and then the E40 towards Aachen** to the Eupen exit. Allow about an hour and a half. You choose **a delivery date** when you book and we agree the exact time with you. If you live on a steep street in the upper town, let us know whether the van can get to the door. The technician places the units room by room and records the starting readings.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar: a long drive from Eupen",
      alinea:
        "Our collection point is about an hour and a half's drive from Eupen. For collecting and later returning you are therefore on the road **twice for over three hours**. A dehumidifier also has to be transported upright. For most customers in Eupen, delivery is the better choice.",
    },
    buren: ["raeren", "lontzen", "baelen", "jalhay"],
    faq: [
      {
        q: "Does a construction dehumidifier work in a cold cellar in the lower town?",
        a: "A condensation dehumidifier loses efficiency below about 15 °C, and an unheated cellar in Eupen rarely reaches that in autumn and winter. That is why we add an electric heater, or choose a desiccant dehumidifier that keeps absorbing moisture even in the cold.",
      },
      {
        q: "How do I dry an old town mansion in the upper town after a renovation?",
        a: "Put one dehumidifier on each floor, keep windows and doors shut and allow more time than in a new build. Old walls hold a lot of water and release it slowly. The technician takes readings at installation and at collection, so you know when the painter or the floor layer can start.",
      },
      {
        q: "Do you also deliver in Kettenis?",
        a: "Yes. Kettenis belongs to the town of Eupen and is within our delivery area. Give the full address when you book and mention whether there is a drive, so the technician knows where he can unload.",
      },
      {
        q: "Can you help me choose the right units for my home?",
        a: "Yes. Feel free to email or call us, in French too, and together we will look at which units suit your home and your schedule.",
      },
    ],
    realisaties: [],
  },
  herve: {
    slug: "herve",
    title: "Dehumidifier hire in Herve, Battice and Charneux | Vernast",
    description:
      "Dehumidifier hire in Herve, Battice or Charneux: brick farmhouses among orchards and meadows on the plateau. Set up at your home, with wall and floor readings.",
    h1: "Construction dehumidifier hire in Herve",
    kicker: "Liège · the heart of the Pays de Herve",
    rit: { afstand: "about 140 km", tijd: "just over an hour" },
    intro: [
      "Herve gives its name to **a region and a cheese**. The Pays de Herve is a rolling plateau of meadows, hedges and standard orchards, known for Herve cheese and fruit syrup. The small town lies in the middle of that landscape, just over an hour's drive from our warehouse in Aartselaar.",
      "The municipality includes **Battice, Bolland, Charneux and Xhendelesse**, among others. At Battice the E40 and the E42 cross. Around that interchange, farms, business parks and new residential areas lie close together.",
    ],
    bouw: {
      kop: "Brick farmhouses and new builds on the estates",
      alineas: [
        "**The typical Pays de Herve farmhouse** is of red brick, with limestone surrounds and often an inner courtyard. Anyone converting such a farmhouse into a home lays new floors in stables and barns that were never meant to be lived in. There is no damp-proof membrane underneath, so moisture comes from below and from the thick walls at the same time.",
        "**A new build on a housing estate** near Battice or Herve often stands open for a while before the roof is on. During that period the masonry and floor slabs absorb a lot of rainwater. If you put in a dehumidifier as soon as the shell is closed, the plasterer can start sooner.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a converted stable or barn**: 110 litres a day for a large, open space with a new floor and thick brick walls." },
      { key: "ttv4500", waarom: "**Against the thick façade wall of a farmhouse**, it breaks up the saturated layer of air, so the moisture can keep coming out of the brick." },
      { key: "ttk350", waarom: "**For a new build on a housing estate** near Battice or Herve: 70 litres a day to get the shell ready for finishing." },
      { key: "teddh30", waarom: "A farmhouse on the plateau cools down sharply in winter. **This 30 kW heater** brings a large room up to temperature and needs a 400 V connection." },
    ],
    levering: {
      kop: "Delivery in Herve: right by the Battice interchange",
      alinea:
        "Herve lies **right by the Battice interchange**, just over an hour's drive away. You choose a delivery date when you book, and we agree the delivery time with you. If the farmhouse is on a narrow country lane, let us know where a van can turn. The technician places the units and lays the drain himself.",
    },
    afhalen: {
      kop: "Collecting yourself: over two hours there and back",
      alinea:
        "Our collection point in Aartselaar is just over an hour's drive from Herve, so you are **on the road for over two hours** for each round trip. A farmhouse conversion usually involves several units, and they rarely fit in one car. So you are better off having them delivered and collected.",
    },
    buren: ["soumagne", "olne", "thimister-clermont", "aubel"],
    faq: [
      {
        q: "How do you dry a stable being converted into a home?",
        a: "With a heavy-duty dehumidifier, a fan and some patience. An old stable has no damp-proof membrane under the floor, and the thick walls absorbed moisture for years. The technician measures at the start where the moisture is and adapts the set-up accordingly, so the floor and plasterwork get dry enough for finishing.",
      },
      {
        q: "When do I put a dehumidifier into a new build?",
        a: "As soon as the roof is on and the windows are in. Earlier makes little sense, because then you are drying the outside air. From that moment a dehumidifier removes the rainwater from the masonry and floor slabs, so the plasterer starts on a drier surface.",
      },
      {
        q: "Do you deliver to a remote farmhouse near Charneux or Bolland?",
        a: "Yes. Give the full address and mention whether the farmhouse is on a narrow road or a farm track. Then the technician knows in advance where he can stop and how far the units need to be carried.",
      },
      {
        q: "My contractor speaks French. Can he contact you directly?",
        a: "Yes. Your contractor or floor layer can reach us himself as well. Questions in French? Feel free to email or call us.",
      },
    ],
    realisaties: [],
  },
  jalhay: {
    slug: "jalhay",
    title: "Dehumidifier hire in Jalhay and Sart, High Fens | Vernast",
    description:
      "Dehumidifier hire in Jalhay or Sart: drying after a renovation or in a cold holiday home on the edge of the High Fens. We deliver, set up and measure.",
    h1: "Construction dehumidifier hire in Jalhay",
    kicker: "Liège · by the Gileppe and the High Fens",
    rit: { afstand: "about 155 km", tijd: "about an hour and a half" },
    intro: [
      "Jalhay lies between Spa and Eupen, on the northern edge of **the High Fens**. Within its boundaries lies **the Gileppe reservoir**, with the well-known stone lion on the dam. The municipality consists of Jalhay and Sart with their hamlets among woodland and peat bog.",
      "The climate here is rougher than in Flanders: there is more rain, it freezes more often and the winter lasts longer. So whatever is wet inside does not dry by itself. From Aartselaar we are on site in **about an hour and a half**.",
    ],
    bouw: {
      kop: "Stone houses and second homes up on the heights",
      alineas: [
        "The older houses in Jalhay and Sart are built of natural stone, with thick walls and small windows. If you renovate and insulate such a house, **new screed and plasterwork go onto a cold base**. Without heating the indoor air rarely reaches 15 °C in autumn, and then **a condensation dehumidifier loses efficiency**.",
        "There are also many **holiday homes and second homes** that stay empty and unheated for part of the year. Condensation then forms on the cold walls, so a renovation often starts in a house that is already damp. During installation the technician measures where the moisture is.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**For a cold house up on the heights**: the desiccant dehumidifier keeps absorbing moisture at temperatures where a condensation dehumidifier does little any more." },
      { key: "teddh30", waarom: "This 30 kW heater on three-phase power (400 V) warms up an unheated second home, so the dehumidifier gets a grip on the construction moisture." },
      { key: "ttk350", waarom: "For a renovated stone home in Sart: 70 litres a day for a floor with a new screed." },
      { key: "ttv4500", waarom: "With a thick wall with condensation, the fan keeps the air moving, so the moisture does not cling to the wall." },
    ],
    levering: {
      kop: "Delivery in Jalhay: via Verviers up onto the plateau",
      alinea:
        "We drive via Liège and the E42 to Verviers and then to Jalhay or Sart, about an hour and a half in all. You choose **a delivery date** when you book; we agree the time with you. In winter it can be snowy or slippery here. So let us know **whether your drive is easy to reach**.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar: over three hours from Jalhay",
      alinea:
        "At about an hour and a half each way, you are **on the road for over three hours** to collect. In the cold months you usually need a heater here too, and two or three units rarely fit in an ordinary car. Delivery is the logical choice here.",
    },
    buren: ["eupen", "baelen", "spa", "theux", "limbourg"],
    faq: [
      {
        q: "Does a construction dehumidifier work in a cold house by the High Fens?",
        a: "A condensation dehumidifier needs warmth: below about 15 °C its efficiency drops sharply. That is why in Jalhay we often combine a dehumidifier with a heater, or choose a desiccant dehumidifier that keeps working in the cold.",
      },
      {
        q: "My holiday home in Sart is damp after the winter. What do I do first?",
        a: "Heat it and measure first. A house that stood empty and unheated for months often has condensation on the cold walls. With a heater and a dehumidifier together you get that moisture out. The reading then shows whether moisture is still coming in from outside.",
      },
      {
        q: "Do you also deliver in Jalhay in winter?",
        a: "Yes. Because the plateau can be snowy or slippery, in winter we agree the delivery time with a little more margin. Mention when you book whether your drive is steep or hard to reach, so the technician knows in advance how to get the units inside.",
      },
      {
        q: "How long does drying take in a stone home?",
        a: "Longer than in a new build, because natural stone holds a lot of water and the air on the plateau is cold and damp. The exact time depends on the work and the temperature inside. At collection, have it measured whether walls and screed are dry enough for finishing.",
      },
    ],
    realisaties: [],
  },
  kelmis: {
    slug: "kelmis",
    title: "Construction dehumidifier hire in Kelmis | Vernast",
    description:
      "Dehumidifier hire in Kelmis, with Hergenrath and Neu-Moresnet: drying after renovating an old workers' house or a damp cellar. Delivered and measured.",
    h1: "Construction dehumidifier hire in Kelmis",
    kicker: "Liège · the zinc village of Neutral Moresnet",
    rit: { afstand: "about 150 km", tijd: "about an hour and a half" },
    intro: [
      "Kelmis, La Calamine in French, owes its name to calamine, the zinc ore that was mined here for a long time. From 1816 to 1920 the mine lay in **Neutral Moresnet**, a small territory governed jointly by its neighbours. Hergenrath and Neu-Moresnet also belong to the municipality.",
      "Kelmis lies in the German-speaking Community, against the border with Germany. From Aartselaar we get there in **about an hour and a half**. We bring the units right into your home and measure at the start how wet the walls and floor are.",
    ],
    bouw: {
      kop: "Workers' houses and the Geul valley",
      alineas: [
        "Around the former mine, **rows of brick workers' houses** were built. Those houses often have **no damp-proof course** and a small cellar. If you renew a bathroom or the ground floor there, new screed and new plasterwork dry against an old, cold wall. That takes longer than in a new build.",
        "The **Geul** flows through the municipality, and in the low-lying parts along the river the ground is damp. There a cellar sometimes gets wet after a lot of rain, regardless of any building work. **The technician measures during installation** whether the moisture comes from the work or from outside. That decides whether drying helps for good.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**For a narrow terraced house**: the compact dehumidifier extracts 50 litres a day from rooms up to 250 m³ and goes up a steep staircase easily." },
      { key: "ttk350", waarom: "For a ground floor with fresh screed: 70 litres a day in rooms up to about 400 m³." },
      { key: "ttv4500", waarom: "The fan moves 4,500 m³ of air an hour along a wet façade wall, so the damp layer of air does not cling to the wall." },
      { key: "revolution", waarom: "**For a cold cellar in the Geul valley**: this desiccant dehumidifier also works at low temperatures and dries via ducting." },
    ],
    levering: {
      kop: "Delivery in Kelmis: via Liège and the E40",
      alinea:
        "We drive **via Liège and the E40 towards Aachen** and then take the exit to Kelmis. Outside rush hour that takes about an hour and a half. You choose **a delivery date** when you book, and the delivery itself is by appointment. The technician sets up the units room by room and records the moisture readings at the start.",
    },
    afhalen: {
      kop: "Collecting yourself? A long drive from Kelmis",
      alinea:
        "Our warehouse in Aartselaar is about an hour and a half's drive away. Collecting and returning together therefore cost you **around six hours** on the road. A dehumidifier also has to stand upright in the car. That is why customers from Kelmis almost always choose delivery.",
    },
    buren: ["plombieres", "lontzen", "raeren"],
    faq: [
      {
        q: "My house in Kelmis is an old workers' house. What should I watch out for?",
        a: "Mainly walls without a damp-proof course. After a renovation the new work dries, but an old brick wall can keep drawing moisture up from the ground. The technician takes readings at the start and at collection, so you can tell construction moisture and rising damp apart.",
      },
      {
        q: "Do you also deliver in Hergenrath and Neu-Moresnet?",
        a: "Yes, both villages belong to the municipality of Kelmis and are within our delivery area. Give the full address when you book, and we will agree the delivery time with you.",
      },
      {
        q: "How long does a dehumidifier stay in a cellar by the Geul?",
        a: "That depends on how wet the walls are and whether water is still coming in from outside. If the moisture comes back after every shower, you first need to have the cause dealt with. The reading at installation shows which of the two it is.",
      },
      {
        q: "What does a construction dehumidifier cost in Kelmis?",
        a: "That depends on the number of units and the hire period. With the calculator on our site you put together a drying package and see the price straight away. If you are unsure which units you need, call or email us.",
      },
    ],
    realisaties: [],
  },
  lierneux: {
    slug: "lierneux",
    title: "Construction dehumidifier hire in Lierneux | Vernast",
    description:
      "Dehumidifier hire in Lierneux, Bra or Arbrefontaine: dehumidifiers and heaters for farmhouses and new builds on the cold plateau along the Lienne.",
    h1: "Construction dehumidifier hire in Lierneux",
    kicker: "Province of Liège · the plateau along the Lienne",
    rit: { afstand: "about 185 km", tijd: "about two hours" },
    intro: [
      "Lierneux lies **on a high plateau in the south of the province of Liège**, against the border with the province of Luxembourg. From Aartselaar it takes about two hours to drive there. **The Lienne** flows through the municipality and further north joins the Amblève.",
      "It is a rural municipality with scattered villages such as Bra and Arbrefontaine, surrounded by meadows and woods. You will find **rubble-stone farmhouses**, village houses with slate roofs and newer homes on the edge of the villages.",
    ],
    bouw: {
      kop: "Farmhouses on the heights, with a long winter",
      alineas: [
        "On the plateau it is colder than in Flanders, and the winter lasts longer. A new build or extension that gets its roof on in autumn then stands for months in cold, damp air. Screed and plasterwork barely dry by themselves. **If you want to keep working in winter, you have to heat and dehumidify.**",
        "With **the old farmhouses**, the stable or barn is often incorporated into the living area. Such a conversion brings a lot of water into the building at once: a new screed, new plasterwork and sometimes a concrete floor. That calls for a dehumidifier with enough capacity, and a moisture reading before the floor layer starts.",
      ],
    },
    toestellen: [
      { key: "teddh30", waarom: "**For a new build on the plateau that needs to carry on in winter**: this 30 kW site heater brings the room up to temperature. It runs on 400 V three-phase power." },
      { key: "ttk650", waarom: "For a farmhouse with a converted barn and a lot of fresh screed: 110 litres a day, for rooms up to 600 m³." },
      { key: "ttk350", waarom: "For a village house in Bra or Arbrefontaine being renovated floor by floor: 70 litres a day, up to 400 m³." },
      { key: "radiaal2250", waarom: "**Over a large, fresh concrete floor in a converted stable**: the radial fan blows in a targeted way over the surface, so the floor dries evenly." },
    ],
    levering: {
      kop: "Delivery in Lierneux: two hours' drive, one appointment",
      alinea:
        "Lierneux is a long drive for us, of about two hours. Where possible, we combine it with other addresses in the area. You choose a delivery date when you book, after which **we arrange the delivery with you**, as with every address in Wallonia. The technician places the units and runs the drain outside or to a floor drain.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar: four hours' driving",
      alinea:
        "From Lierneux you are on the road for about four hours for a trip to our collection point and back. That is a working day you would rather spend on site. **With a drying package** we place the units and collect them again afterwards.",
    },
    buren: ["trois-ponts", "vielsalm", "manhay"],
    faq: [
      {
        q: "Can I keep building in winter on the Lierneux plateau?",
        a: "Yes, if you heat and dehumidify. A site heater brings the room up to temperature, a dehumidifier takes the moisture out of the air. Without that combination, a screed in a cold shell stays wet for weeks and the floor layer has to wait.",
      },
      {
        q: "How many units do I need for a converted barn?",
        a: "That depends on the volume and on how much wet work is going on at once. A large barn with a full screed often needs a large dehumidifier and a fan. Give us the floor area and the height when you book, and we will put the combination together.",
      },
      {
        q: "Do you deliver all the way to Lierneux?",
        a: "Yes, although at about two hours from Aartselaar it is one of our furthest trips. That is why, where possible, we combine the delivery with other addresses in the Ardennes and agree the time with you.",
      },
      {
        q: "Where does the dehumidifier put its water in a farmhouse without a floor drain?",
        a: "In the collection tank, which you then empty yourself, or through a hose to the outside or to a sink. On a site with a lot of moisture a hose is handier, otherwise the tank fills up a few times a day. The technician lays the drain during installation.",
      },
    ],
    realisaties: [],
  },
};
