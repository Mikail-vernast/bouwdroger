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
};
