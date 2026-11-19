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
};
