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
  durbuy: {
    slug: "durbuy",
    title: "Construction dehumidifier hire in Durbuy | Vernast",
    description:
      "Dehumidifier hire in Durbuy, Barvaux, Bomal or Wéris, also for a second home or gîte. Delivery by appointment, set-up and a moisture reading at the start.",
    h1: "Construction dehumidifier hire in Durbuy",
    kicker: "Province of Luxembourg · the little town on the Ourthe",
    rit: { afstand: "about 155 km", tijd: "almost two hours" },
    intro: [
      "Old Durbuy is **a small town on the Ourthe**, with narrow streets of natural stone, a castle and plenty of restaurants and places to stay. The municipality reaches beyond that centre: Barvaux, Bomal, Grandhan, Septon, Tohogne, Villers-Sainte-Gertrude and Wéris belong to it too.",
      "At Bomal the Aisne flows into the Ourthe, and around Wéris stand the well-known megaliths. Thanks to tourism the municipality has **a lot of gîtes and second homes**. Owners usually renovate them outside the season. From Aartselaar it takes us almost two hours to get there.",
    ],
    bouw: {
      kop: "Stone houses in the valley and gîtes standing empty",
      alineas: [
        "In the centre and in the villages along the river stand **natural stone houses without a damp-proof course**. When the Ourthe runs high, low-lying cellars and ground floors can get wet. The water has to go first. Then the technician checks whether moisture is still rising from below, and only then does he set up the units.",
        "A holiday home that stands empty and unheated all winter has cold walls. Fresh plasterwork hardly dries there. If you renovate between two seasons, the house has to be dry before the first guests arrive. **A dehumidifier with a heater alongside it** and a moisture reading at collection make that schedule achievable.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**After water damage in a house on the Ourthe.** At 110 litres a day it removes most of the moisture before it soaks further into the walls." },
      { key: "radiaal2250", waarom: "For **a wet floor in Barvaux or Bomal**. It blows 2,250 m³ of air an hour straight across the tiles and into the corners, where the water lingers longest." },
      { key: "ttk170", waarom: "**For a gîte or studio in the old town.** Compact enough for a narrow door or staircase, and good for rooms up to 250 m³." },
      { key: "teddh20", waarom: "Brings a holiday home that stood **unheated all winter** up to temperature, so the dehumidifier works efficiently. This heater needs a 400 V connection." },
    ],
    levering: {
      kop: "Delivery in Durbuy: one of our longer trips",
      alinea:
        "Durbuy is **almost two hours' drive** from Aartselaar. We plan deliveries in the Ourthe valley together: you choose a delivery date and we agree the time with you. If you do not live there yourself, let us know **who has the key**. The technician places the units, takes a reading and leaves a short explanation for whoever keeps an eye on them.",
    },
    afhalen: {
      kop: "Collecting it yourself: half a day there and back",
      alinea:
        "A trip to Aartselaar and back from Durbuy takes **almost four hours**. If you live in Flanders and are driving to your second home anyway, you can pick up the unit on the way. Always transport a dehumidifier **upright**.",
    },
    buren: ["hotton", "erezee", "somme-leuze"],
    faq: [
      {
        q: "I have a second home in Durbuy but live in Flanders. How do I arrange it?",
        a: "You book yourself and give the address of the house in Durbuy, with the name of the person who will open the door on site. That can be a neighbour, a contractor or a property manager. The technician places the units, measures the moisture and leaves an explanation.",
      },
      {
        q: "My cellar by the Ourthe was flooded. When can the dehumidifier come?",
        a: "As soon as the standing water and the silt are gone. A dehumidifier deals with the moisture that is left in the walls and floor afterwards. When you book, tell us how high the water rose, and the technician will bring a dehumidifier and a fan.",
      },
      {
        q: "How do I get a gîte dry for the new season after a renovation?",
        a: "Build the drying into your renovation schedule instead of treating it as the last step. Fresh plasterwork in a cold house easily needs two to three weeks, often less with a heater alongside. The reading at collection shows whether the decorator can start.",
      },
      {
        q: "Do you also drive up to the higher villages such as Wéris and Villers-Sainte-Gertrude?",
        a: "Yes, we deliver throughout the municipality of Durbuy, including the villages above the valley. When you book, tell us if your house is on a steep or unmade road, so the technician knows how to get to the door.",
      },
    ],
    realisaties: [],
  },
  hotton: {
    slug: "hotton",
    title: "Hotton dehumidifier hire in the Ourthe valley | Vernast",
    description:
      "Dehumidifier hire in Hotton, Melreux or Hampteau, for homes in the Ourthe valley and on the limestone. Delivery by appointment, set-up and a moisture reading.",
    h1: "Construction dehumidifier hire in Hotton",
    kicker: "Province of Luxembourg · Ourthe valley and caves",
    rit: { afstand: "about 160 km", tijd: "almost two hours" },
    intro: [
      "Hotton lies **in the valley of the Ourthe**, between Durbuy and La Roche-en-Ardenne. The village is best known for the Hotton caves, hollowed out by water in the limestone beneath the hills. From Aartselaar it takes us almost two hours to get there.",
      "Melreux, Hampteau and Fronville also belong to the municipality. You will find **old village centres in natural stone** there, and more and more new houses along the roads to Marche and Érezée.",
    ],
    bouw: {
      kop: "Limestone underground, the river in the valley",
      alineas: [
        "Limestone lets water through. Rain sinks into it and finds its way along cracks and cavities, as the caves show. In a house on the slope, **moisture therefore sometimes comes in at an unexpected spot**. When setting up, the technician measures where the moisture is and places the dehumidifier there.",
        "Down in the valley, close to the Ourthe, cellars and ground floors can get wet when the river runs high. Old natural stone houses without a damp-proof course release that water slowly. After the clean-up, **a fan aimed at the wettest wall** helps to blow the damp air away from it.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a village house in Hotton or Melreux** that you are doing up floor by floor: 70 litres a day, for rooms up to 400 m³." },
      { key: "ttv4500", waarom: "Blows **the layer of damp air away from a thick limestone wall**, so the dehumidifier takes up the moisture faster." },
      { key: "ttk650", waarom: "**After high water in a house close to the Ourthe.** At 110 litres a day and with a range of up to 600 m³ it covers an entire ground floor." },
      { key: "revolution", waarom: "For **a floating floor or an insulated wall** that got wet. It blows dry air through hoses under the floor or behind the wall, without you having to break anything out." },
    ],
    levering: {
      kop: "Delivery in Hotton: through the Famenne to the Ourthe valley",
      alinea:
        "Our route runs via the E411 and the N4 to Marche, where we drop down to the Ourthe. Allow **almost two hours** from Aartselaar. You choose the delivery date when you book; we fix the time together with you. The technician places and adjusts the units and **takes a moisture reading at the start**, so you can compare at collection.",
    },
    afhalen: {
      kop: "Collecting is possible, but it is a long drive",
      alinea:
        "From Hotton you are on the road for **almost four hours** to our collection point in Aartselaar and back. That only pays off if you need to be near Antwerp anyway. Otherwise delivery is simpler, with set-up and a reading included.",
    },
    buren: ["durbuy", "erezee", "marche-en-famenne", "rendeux"],
    faq: [
      {
        q: "My house stands on limestone. Why is moisture coming through the back wall?",
        a: "Limestone lets water through along cracks, and on a slope that water runs to the lowest wall. That is not construction moisture but moisture from outside. A dehumidifier helps after a renovation, but against water that keeps coming back you need drainage or a damp-proof barrier.",
      },
      {
        q: "Do you also work in Melreux and Hampteau?",
        a: "Yes, those villages belong to Hotton and we deliver there, as in the rest of the municipality. When you book, tell us whether your house is by the river or higher up, because that decides which units the technician brings.",
      },
      {
        q: "How long does a dehumidifier stay after high water on the Ourthe?",
        a: "That depends on how high the water rose and for how long. A tiled floor on screed and walls wet up to knee height often need two to four weeks. The technician takes a reading at the start and at collection, so you know when repairs make sense.",
      },
      {
        q: "Do I have to be at home when the technician comes?",
        a: "Someone has to open the door and show where the moisture is. That does not have to be you: a contractor or a neighbour can do it too. Because we agree the time with you in advance, nobody has to wait around all day.",
      },
    ],
    realisaties: [],
  },
  "la-roche-en-ardenne": {
    slug: "la-roche-en-ardenne",
    title: "Dehumidifier hire in La Roche-en-Ardenne | Vernast",
    description:
      "Dehumidifier hire in La Roche-en-Ardenne, Samrée or Ortho, for houses in the bend of the Ourthe and cold homes on the plateau. Delivery by appointment.",
    h1: "Construction dehumidifier hire in La Roche-en-Ardenne",
    kicker: "Province of Luxembourg · the town in the bend of the Ourthe",
    rit: { afstand: "about 175 km", tijd: "about two hours" },
    intro: [
      "La Roche-en-Ardenne lies **in a deep bend of the Ourthe**, between steep wooded slopes. Above the houses the ruined castle stands on a rocky point. The town lives from tourism, with hotels, campsites, gîtes and second homes. From Aartselaar it is about two hours' drive.",
      "Outside the valley, Samrée, Hives, Beausaint and Ortho belong to the municipality. Those villages lie **on the high Ardennes plateau**, where old farmhouses stand next to holiday homes and the winters are colder than down below.",
    ],
    bouw: {
      kop: "Houses against the rock face and cold homes on the plateau",
      alineas: [
        "In the town, houses of dark rubble stone stand close together between the river and the slope. The lowest floor is often **against the rock face or right next to the water**. When the Ourthe bursts its banks, the low parts of the centre flood. A house like that has to dry thoroughly before you repair it.",
        "On the plateau people often renovate **cold houses that stood empty for a long time**. In an unheated room below 15 °C a condensation dehumidifier loses efficiency. With a heater alongside or a desiccant dehumidifier, drying keeps going in winter too.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**For a cold room against the rock face.** The desiccant dehumidifier keeps absorbing moisture at temperatures at which a condensation dehumidifier does little." },
      { key: "ttk650", waarom: "**After high water in a house in the centre.** At 110 litres a day it removes most of the moisture before it soaks into the walls." },
      { key: "teddh30", waarom: "For **a holiday home in Samrée or Hives** that stood empty all winter: warm up first, then dry. It runs on 400 V three-phase power." },
      { key: "radiaal2250", waarom: "Blows **across a wet floor in a house by the river**, where the air would otherwise hang still. It is protected against dust and splashing water (IP55)." },
    ],
    levering: {
      kop: "Delivery in La Roche: about two hours via the N4",
      alinea:
        "From Aartselaar we drive via the E411 and the N4 and then down into the valley, **about two hours** in all. We combine our trips to the Ardennes: you choose a delivery date and we agree the time with you. In the centre the streets are narrow and parking is awkward. **Mention this when you book**, so the technician can allow for it.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar costs half a day from La Roche",
      alinea:
        "There and back is **about four hours' drive**. That only pays off if you own a second home here and are coming from Flanders anyway. In that case pick up the unit on the way out and transport it upright.",
    },
    buren: ["rendeux", "manhay", "houffalize", "tenneville"],
    faq: [
      {
        q: "I have a holiday home in La Roche. Can the dehumidifier run while I am away?",
        a: "Yes. A construction dehumidifier runs day and night unattended, and with a drain hose to a floor drain nobody has to empty a tank. Do make sure someone lets the technician in and that there is a free socket.",
      },
      {
        q: "Why does my house in the valley dry so badly?",
        a: "The valley is narrow and gets little sun in winter. Houses against the slope have cold walls and little air movement. Opening the windows then hardly helps. A dehumidifier with the windows closed does get the moisture out.",
      },
      {
        q: "What if water from the Ourthe got into my ground floor?",
        a: "First have the water and silt removed, and only switch the electricity back on once an electrician has checked it. Then the technician comes with a dehumidifier and a fan. When you book, tell us how high the water rose.",
      },
      {
        q: "Do you also deliver in Ortho and Beausaint on the plateau?",
        a: "Yes, we deliver in all the villages of La Roche-en-Ardenne. On the plateau it is colder in winter. If your house is unheated, hire a heater as well, or the plasterwork will hardly dry.",
      },
    ],
    realisaties: [],
  },
  manhay: {
    slug: "manhay",
    title: "Manhay dehumidifier hire on the Ardennes uplands | Vernast",
    description:
      "Dehumidifier hire in Manhay, Dochamps or Grandménil, for cold homes on the Ardennes uplands. Delivery by appointment, set-up and a moisture reading.",
    h1: "Construction dehumidifier hire in Manhay",
    kicker: "Province of Luxembourg · the uplands along the E25",
    rit: { afstand: "about 170 km", tijd: "almost two hours" },
    intro: [
      "Manhay lies **on the Ardennes uplands** in the north of the province of Luxembourg, on the border with the province of Liège. The E25 from Liège to the south runs through the municipality. From Aartselaar we get there in almost two hours.",
      "The municipality includes Dochamps, Grandménil, Malempré, Odeigne, Vaux-Chavanne and Harre. They are small villages among woods and meadows, with **farmhouses in rubble stone** and the odd holiday home. At this altitude the winters are long and cold.",
    ],
    bouw: {
      kop: "High, cold and often empty in winter",
      alineas: [
        "On the uplands it is noticeably colder than in Flanders. An unheated house stays cold there for weeks in winter, and fresh plasterwork or a new screed then hardly dries. **A condensation dehumidifier loses efficiency below 15 °C.** That is why we often add a heater here or choose a desiccant dehumidifier.",
        "Many old farmhouses have **thick rubble stone walls** with no cavity or damp-proof course. If you convert such a farmhouse into a home or gîte, cold, solid walls have to dry. That takes longer than in a new build. A moisture reading at the start shows where you are starting from.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**For a cold farmhouse on the uplands.** The desiccant dehumidifier keeps drying at temperatures at which a condensation dehumidifier achieves little." },
      { key: "teddh30", waarom: "Brings **an unheated room in Dochamps or Odeigne** above 15 °C, so a condensation dehumidifier can do its job. It needs a 400 V connection." },
      { key: "ttk350", waarom: "For **a converted house with fresh screed** on the ground floor: 70 litres a day, for rooms up to 400 m³." },
      { key: "ttv4500", waarom: "Blows **the damp air away from a thick rubble stone wall**, so the moisture comes out more evenly." },
    ],
    levering: {
      kop: "Delivery in Manhay: via Liège and the E25",
      alinea:
        "We drive via the E313 to Liège and join the E25 there, **almost two hours** from Aartselaar. You pick the delivery date yourself when you book, and we agree the exact time afterwards. If your house is on **a forest track or an unmade drive**, let us know, so the technician knows whether he can drive up to the door.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar: almost four hours there and back",
      alinea:
        "From Manhay a collection costs you **half a day**. If you are driving from Flanders to a second home in the Ardennes anyway, you can take the unit with you on the way out. Think of a heater too, because without warmth drying is slow here.",
    },
    buren: ["erezee", "la-roche-en-ardenne", "houffalize"],
    faq: [
      {
        q: "Does a construction dehumidifier actually work in the cold Ardennes winter?",
        a: "A condensation dehumidifier clearly loses efficiency below 15 °C, and an unheated house in Manhay is often below that in winter. That is why we add a heater, or choose a desiccant dehumidifier that keeps working in the cold.",
      },
      {
        q: "How long does it take to dry an old farmhouse in rubble stone?",
        a: "Longer than a new build, because thick stone walls release their water slowly and it is cold here. Think weeks rather than days. A reading at the start and at collection shows the progress and whether the finishing work can begin.",
      },
      {
        q: "Isn't Manhay too far for a delivery?",
        a: "It is one of our long trips, almost two hours each way via Liège and the E25. That is why we combine the delivery with other addresses in the Ardennes and agree the moment with you. The way we work stays the same: set-up, a reading and collection.",
      },
      {
        q: "Can the dehumidifier stay on while the house is empty?",
        a: "Yes. Run the drain hose to a drain or a floor gully, so the water flows away and nobody has to empty a tank. If you also hire a heater, check in advance that there is a 400 V connection, because that heater does not run on an ordinary socket.",
      },
    ],
    realisaties: [],
  },
  "marche-en-famenne": {
    slug: "marche-en-famenne",
    title: "Construction dehumidifier hire, Marche-en-Famenne | Vernast",
    description:
      "Hiring a dehumidifier in Marche-en-Famenne, Marloie, Waha or Aye? We deliver by appointment, set up the units and take a moisture reading at the start.",
    h1: "Construction dehumidifier hire in Marche-en-Famenne",
    kicker: "Province of Luxembourg · the main town of the Famenne",
    rit: { afstand: "about 150 km", tijd: "almost two hours" },
    intro: [
      "Marche-en-Famenne is **the central town of the Famenne**, the lowland between the Condroz and the Ardennes. The town lies on the N4 between Namur and Arlon and has schools, a hospital and business parks. From Aartselaar we get there in almost two hours.",
      "The municipality also includes Marloie, Waha, Aye, Hargimont, On, Humain, Roy and Verdenne. In those villages **old farmhouses in natural stone** stand next to new housing estates. Waha has a well-known Romanesque church.",
    ],
    bouw: {
      kop: "Heavy soil and thick natural stone walls",
      alineas: [
        "The Famenne lies on **schist**, a rock that weathers into heavy, poorly draining soil. Rainwater drains away slowly, so cellars and crawl spaces stay damp for a long time. After a renovation you therefore want to know whether the moisture comes from the new floor or from outside. The technician measures that when setting up.",
        "Old farmhouses and village houses contain a lot of local limestone. **A thick stone wall** releases the water from new plasterwork only slowly. On the new estates it is usually about screed and gypsum plaster that have to be dry before the floor layer or the decorator starts.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a new-build house on the edge of Marche** with fresh screed on the ground floor. It pulls up to 70 litres a day out of the air in rooms up to 400 m³." },
      { key: "ttk650", waarom: "For **a converted farmhouse in Aye or Waha** where several rooms are drying at once: 110 litres a day, for rooms up to 600 m³." },
      { key: "revolution", waarom: "**For a damp crawl space.** The desiccant dehumidifier stands outside the space and blows dry air through hoses to places where an ordinary dehumidifier will not fit." },
      { key: "teddh30", waarom: "Brings **an unheated farmhouse** above 15 °C in winter, so the condensation dehumidifier can do its job. This heater needs a 400 V connection." },
    ],
    levering: {
      kop: "Delivery in Marche: via the E411 and the N4",
      alinea:
        "We drive via Brussels and the E411 to Namur and take the N4 south from there. That is **almost two hours' drive**, which is why we combine our trips to the Famenne. You choose a delivery date when you book and we agree the time with you. The technician places the units room by room, takes a moisture reading at the start and shows you how to check the drain hose.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar rarely pays off from Marche",
      alinea:
        "There and back you are **almost four hours on the road**, without traffic jams. For one unit that costs you half a working day. With delivery you also get the set-up and the moisture reading.",
    },
    buren: ["hotton", "nassogne", "rochefort", "somme-leuze"],
    faq: [
      {
        q: "Why does my cellar in the Famenne stay damp for so long?",
        a: "The Famenne lies on schist that weathers into heavy, dense soil. Water drains away slowly and sits against cellar walls and under floors. A dehumidifier removes the construction moisture from a new floor or coat of plaster, but it will not permanently solve moisture that keeps coming back from outside.",
      },
      {
        q: "Do you also deliver in Marloie, Hargimont and On?",
        a: "Yes, we deliver in all the villages of Marche-en-Famenne. When you book, give the full address and mention a narrow drive or a low farm gateway. Then the technician knows in advance where he can unload.",
      },
      {
        q: "How do I dry a converted farmhouse in natural stone?",
        a: "Keep the windows shut, put a dehumidifier in the largest room and, if needed, a second one in the furthest room. A thick limestone wall releases its water slowly, so allow a few weeks. The reading at the start serves as the point of comparison at collection.",
      },
      {
        q: "Isn't Marche too far for a construction dehumidifier from the province of Antwerp?",
        a: "It is one of our longer trips, almost two hours each way. That is why we plan deliveries in the Famenne together and agree the delivery time with you. The way we work stays the same: set-up, a moisture reading at the start and collection.",
      },
    ],
    realisaties: [],
  },
  nassogne: {
    slug: "nassogne",
    title: "Nassogne dehumidifier hire, Famenne to Ardennes | Vernast",
    description:
      "Dehumidifier hire in Nassogne, Forrières, Ambly or Bande, for homes between the Famenne and the Ardennes woods. Delivery by appointment and a moisture reading.",
    h1: "Construction dehumidifier hire in Nassogne",
    kicker: "Province of Luxembourg · where the Famenne meets the Ardennes",
    rit: { afstand: "about 160 km", tijd: "almost two hours" },
    intro: [
      "Nassogne lies **where the Famenne gives way to the Ardennes**. The north, around Forrières and Ambly, belongs to the open lowland. To the south the land rises and the vast forests towards Saint-Hubert begin. From Aartselaar it takes us almost two hours to get there.",
      "Bande, Grune, Harsin, Lesterny and Masbourg also belong to the municipality. In those rural villages stand **farmhouses and village houses in natural stone**, and in the wooded parts holiday homes and chalets as well.",
    ],
    bouw: {
      kop: "Village houses on the boundary between two soils",
      alineas: [
        "In the north lies **the dense schist soil of the Famenne**, into which water drains slowly. Cellars and crawl spaces in Forrières and Ambly therefore stay damp for a long time. After a renovation the technician measures whether the moisture comes from the new floor or from the ground beneath it.",
        "Higher up, houses stand on the edge of the forest, where little sun gets in. **Those walls stay cool and damp**, and a chalet or outbuilding standing empty hardly dries out by itself there. A condensation dehumidifier with a heater, or a desiccant dehumidifier, does get the drying going.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a village house in Forrières or Ambly** with new screed and plasterwork: 70 litres a day, for rooms up to 400 m³." },
      { key: "revolution", waarom: "**For a crawl space on schist soil** or a floor with insulation beneath it. It blows dry air through hoses to the spot where the moisture is." },
      { key: "ttk170", waarom: "For **a chalet or small holiday home on the edge of the forest**: compact, using 0.75 kW, for rooms up to 250 m³." },
      { key: "teddh20", waarom: "For **a cool room in the shade of the forest**. Above 15 °C first, then the condensation dehumidifier dries as it should. It needs a 400 V connection." },
    ],
    levering: {
      kop: "Delivery in Nassogne: via the N4 and Marche",
      alinea:
        "Via the E411 and the N4 we drive as far as Marche and turn south there. That is **almost two hours** from Aartselaar. After you book with a delivery date, we agree the time with you. The technician places the units room by room, takes a reading at the start and lays **the drain hose so the water runs away by itself**.",
    },
    afhalen: {
      kop: "Collecting from Nassogne: allow half a day",
      alinea:
        "A trip to our collection point and back takes **almost four hours**. For one unit that rarely outweighs a delivery with set-up and a reading. So let us deliver, unless you need to head towards Antwerp anyway.",
    },
    buren: ["marche-en-famenne", "rochefort", "tellin", "saint-hubert", "tenneville"],
    faq: [
      {
        q: "My chalet on the edge of the forest is always damp. Will a dehumidifier help?",
        a: "A dehumidifier removes the moisture from the air and from the walls. In the shade of the forest, though, it soon comes back if the house then stays unheated. So a dehumidifier helps after a renovation, but for lasting comfort you need heating and ventilation.",
      },
      {
        q: "Do you deliver in all the villages of Nassogne, including Masbourg and Grune?",
        a: "Yes, we deliver in all the villages of the municipality. If your address is on a forest track or a narrow village street, mention it when you book. That way the technician knows which road to take and where he can unload.",
      },
      {
        q: "Which dehumidifier should I choose for a crawl space?",
        a: "An ordinary dehumidifier hardly fits in a low crawl space. A desiccant dehumidifier stands outside it and blows dry air in through hoses. It also works at the low temperature that usually prevails there. The technician looks on site at where the hoses are best placed.",
      },
      {
        q: "My contractor or a neighbour will let the technician in. What do you need to know?",
        a: "When you book, pass on their name and phone number, so we know who will be on site. Questions? Feel free to email or call us.",
      },
    ],
    realisaties: [],
  },
  rendeux: {
    slug: "rendeux",
    title: "Rendeux dehumidifier hire in the Ourthe valley | Vernast",
    description:
      "Dehumidifier hire in Rendeux, Marcourt or Beffe, for homes and holiday homes in the narrow Ourthe valley. Delivery by appointment, set-up and moisture reading.",
    h1: "Construction dehumidifier hire in Rendeux",
    kicker: "Province of Luxembourg · the narrow Ourthe valley",
    rit: { afstand: "about 165 km", tijd: "almost two hours" },
    intro: [
      "Rendeux lies **on the Ourthe between La Roche-en-Ardenne and Hotton**, where the river winds through a narrow, wooded valley. The villages lie at the foot of steep slopes, often along a single road beside the water. From Aartselaar it is almost two hours' drive.",
      "Marcourt, Beffe and Hodister also belong to the municipality. You will find **campsites, holiday homes and second homes** there, next to older houses of families who have lived there for generations.",
    ],
    bouw: {
      kop: "Houses between the river and the slope",
      alineas: [
        "In a narrow valley the water comes from two sides: **from the river when it runs high** and from the slope after a wet spell. Houses along the Ourthe therefore sometimes have a wet ground floor or a damp back wall. When setting up, the technician measures which wall is wettest and places the units there.",
        "A holiday home that stays shut for months gets little sun and fresh air in a valley like this. If you do it up between two seasons, you are putting new plasterwork against **cold walls**, and it stays wet for weeks. With a heater alongside and the windows shut, drying goes noticeably faster.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**After high water in a house along the Ourthe.** At 110 litres a day it draws the moisture out of the walls and floor before you repair." },
      { key: "radiaal2250", waarom: "For **a wet tiled floor in Marcourt or Rendeux**. It sends 2,250 m³ of air an hour straight across the floor and into the corners." },
      { key: "ttk170", waarom: "**For a small holiday home or a studio.** Compact enough to carry up the stairs, for rooms up to 250 m³." },
      { key: "teddh20", waarom: "Brings a holiday home that **stood shut all winter** back up to temperature. This 20 kW heater needs a 400 V connection." },
    ],
    levering: {
      kop: "Delivery in Rendeux: past Marche and into the valley",
      alinea:
        "We drive via the E411 and the N4 to Marche and then to the Ourthe. Allow **almost two hours**. You book with a delivery date of your choice, and the delivery itself is by appointment. If your house is on a narrow road along the water or a steep drive, **let us know in advance**.",
    },
    afhalen: {
      kop: "Collecting it yourself: a half-day trip",
      alinea:
        "From Rendeux you are **almost four hours on the road** there and back. If you live in Flanders and are driving to your holiday home anyway, you can pick up the unit in Aartselaar on the way. Transport it upright and let it rest for a while after arrival before you switch it on.",
    },
    buren: ["hotton", "la-roche-en-ardenne", "marche-en-famenne"],
    faq: [
      {
        q: "Why is my back wall wet when the Ourthe did not burst its banks?",
        a: "In a narrow valley rainwater runs down the slope and presses against the wall on the hill side. That moisture comes back after every wet spell. A dehumidifier helps after a renovation, but against water from the slope, drainage or a damp-proof barrier is the lasting solution.",
      },
      {
        q: "How do I tackle a holiday home in Rendeux that stood empty for years?",
        a: "Warm the house up first, because cold walls hold on to a lot of moisture. Then drying can begin. The technician takes a reading at the start, places a dehumidifier and a heater if needed, and measures again at collection.",
      },
      {
        q: "Do you also deliver in Hodister and Chéoux?",
        a: "Yes, we deliver throughout the municipality of Rendeux. Some villages lie higher up and can only be reached by narrow roads. When you book, tell us whether there is a spot near your house where the van can turn.",
      },
      {
        q: "How many units do I need for a ground floor after high water?",
        a: "For an average-sized ground floor, one large dehumidifier and a fan are usually enough. If the water rose high or several rooms are wet, a second dehumidifier is added. When you book, give the floor area and how high the water rose.",
      },
    ],
    realisaties: [],
  },
  tenneville: {
    slug: "tenneville",
    title: "Tenneville dehumidifier hire on the N4 plateau | Vernast",
    description:
      "Dehumidifier hire in Tenneville, Champlon or Erneuville, for homes on the cold plateau along the N4. Delivery by appointment, set-up and a moisture reading.",
    h1: "Construction dehumidifier hire in Tenneville",
    kicker: "Province of Luxembourg · the plateau along the N4",
    rit: { afstand: "about 175 km", tijd: "about two hours" },
    intro: [
      "Tenneville lies **on the Ardennes plateau along the N4**, the road from Marche-en-Famenne to Bastogne. Anyone driving from Namur to the south of the province of Luxembourg passes through Champlon. From Aartselaar we get there in about two hours.",
      "The municipality is **sparsely populated and heavily wooded**. Besides Tenneville, Champlon and Erneuville belong to it, with old farms, new houses along the N4 and holiday homes among the woods.",
    ],
    bouw: {
      kop: "High plateau, long winters and cold walls",
      alineas: [
        "On the plateau it is **colder than in the valleys**, and winter lasts longer. A house under construction or renovation that is unheated then rarely reaches the temperature at which a condensation dehumidifier works well. A heater alongside or a desiccant dehumidifier keeps the drying going.",
        "With new builds along the N4 it is usually about **screed and plasterwork** that have to be dry before the finishing. With an old farm it is about thick stone walls that release their moisture slowly. In both cases the reading at the start shows how much work there is.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a new build along the N4 in Champlon or Tenneville.** It draws up to 70 litres a day out of the screed and plaster on the ground floor." },
      { key: "teddh30", waarom: "Brings **an unheated site on the plateau** above 15 °C, so the condensation dehumidifier works efficiently. This 30 kW heater runs on 400 V three-phase power." },
      { key: "revolution", waarom: "**For an old farm with cold walls.** The desiccant dehumidifier keeps working where it is too cold for a condensation dehumidifier." },
      { key: "ttv4500", waarom: "Spreads **the dry air through a long farmhouse** where the rooms lie one behind the other. It uses only 0.2 kW." },
    ],
    levering: {
      kop: "Delivery in Tenneville: straight down the N4",
      alinea:
        "We drive via the E411 to Namur and then along the N4 past Marche up onto the plateau. Allow **about two hours** from Aartselaar. You choose the day yourself when you book, and the time follows by mutual agreement. The technician places the units, sets up the heater and takes a moisture reading at the start.",
    },
    afhalen: {
      kop: "Collecting from Tenneville means four hours' driving",
      alinea:
        "There and back to Aartselaar is **about four hours' drive** from Tenneville. That is rarely worth it. With delivery you also get the set-up and the moisture reading.",
    },
    buren: ["la-roche-en-ardenne", "sainte-ode", "nassogne", "saint-hubert"],
    faq: [
      {
        q: "Why does my site in Tenneville dry more slowly than in Flanders?",
        a: "The plateau lies high and it is colder there, especially from November to March. Below 15 °C a condensation dehumidifier takes up noticeably less water. With a heater or a desiccant dehumidifier alongside, you get that efficiency back.",
      },
      {
        q: "Is delivery to Tenneville possible, so far from Antwerp?",
        a: "Yes. It is one of our longest trips, about two hours each way. We combine the deliveries in the area and agree the moment with you. The technician places the units, measures the moisture and collects everything again later.",
      },
      {
        q: "Do you also deliver in Champlon and Erneuville?",
        a: "Yes, we deliver in all the villages of the municipality of Tenneville. If your house is a little off the N4 on a forest track, mention it when you book. Then the technician knows how to get there.",
      },
      {
        q: "What power supply do I need for a dehumidifier and a heater?",
        a: "A condensation dehumidifier runs on an ordinary 230 V socket. The electric site heater needs a 400 V (three-phase) connection. So check in advance whether your site or house has one, or ask your electrician before you book.",
      },
    ],
    realisaties: [],
  },
  erezee: {
    slug: "erezee",
    title: "Érezée dehumidifier hire in the Aisne valley | Vernast",
    description:
      "Dehumidifier hire in Érezée, Soy, Mormont or Amonines, for homes in the Aisne valley and on the hills. Delivery by appointment, set-up and a moisture reading.",
    h1: "Construction dehumidifier hire in Érezée",
    kicker: "Province of Luxembourg · the Aisne valley",
    rit: { afstand: "about 165 km", tijd: "almost two hours" },
    intro: [
      "Érezée lies **in the valley of the Aisne**, a tributary of the Ourthe, between Hotton and the uplands of Manhay. The municipality is known for the tourist tram that runs along the river. From Aartselaar it is almost two hours' drive.",
      "Soy, Mormont and Amonines also belong to the municipality. The area is hilly and wooded, with **villages of grey rubble stone**, campsites and holiday homes. More and more people are coming to live there permanently.",
    ],
    bouw: {
      kop: "Narrow stream valleys and rubble stone houses",
      alineas: [
        "In the valleys of the Aisne and its side streams, houses stand **close to the water and in the shade of the slopes**. After a wet spell or when the water runs high, a cellar or ground floor can get wet. A cold house without sun releases that moisture only slowly. When setting up, the technician measures exactly where the moisture is.",
        "Many old houses are built **in rubble stone without a cavity**. During a conversion, new plasterwork goes against a wall that is still damp itself. So dry the wall first and only then do the finishing. With a dehumidifier, a fan and a reading at collection, you know when the decorator can come.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a village house in Érezée or Soy** that you are renovating completely: 70 litres a day, for rooms up to 400 m³." },
      { key: "ttv4500", waarom: "Blows 4,500 m³ of air an hour **along a rubble stone wall without a cavity**, so the dehumidifier takes up the moisture faster." },
      { key: "radiaal2250", waarom: "**For a wet cellar floor in the Aisne valley.** It blows straight across the floor and into the corners, where the water lingers longest." },
      { key: "teddh20", waarom: "First warms up **a shady house against the slope**, so the dehumidifier then works efficiently. This heater needs a 400 V connection." },
    ],
    levering: {
      kop: "Delivery in Érezée: through the Famenne to the Aisne",
      alinea:
        "Along the E411, the N4 and Hotton we reach the Aisne valley, **almost two hours** from Aartselaar. You choose the delivery date, and we agree the exact time with you in advance. If the rooms that need drying are on different floors, **let us know**, so the technician brings enough units.",
    },
    afhalen: {
      kop: "Collecting from Érezée: almost four hours there and back",
      alinea:
        "A collection in Aartselaar costs you **half a day** from Érezée. For one unit that rarely pays off. With delivery the technician brings straight away the combination of dehumidifier, fan and heater that suits your house.",
    },
    buren: ["durbuy", "hotton", "manhay"],
    faq: [
      {
        q: "My cellar in the Aisne valley flooded. What comes first?",
        a: "First remove the water and the silt and have the electrics checked. Then the dehumidifier can draw the moisture out of the floor and walls. When you book, tell us how high the water rose, and the technician will bring a fan as well.",
      },
      {
        q: "Can I apply new plasterwork to an old rubble stone wall?",
        a: "Yes, but let the wall get as dry as possible first, or the moisture stays trapped behind the new layer. A dehumidifier with a fan aimed at the wall speeds that up. A reading before and after shows when you can plaster.",
      },
      {
        q: "Do you also deliver in Amonines and Mormont?",
        a: "Yes, we deliver in all the villages of Érezée, including the higher ones. When you book, tell us whether your house is on a narrow or steep road, so the technician knows where he can stop.",
      },
      {
        q: "How many weeks should I allow for a renovated house in Érezée?",
        a: "New plasterwork in a heated house often needs two to three weeks. A cold house with thick rubble stone walls usually takes longer. The reading at the start and at collection gives you figures, so you do not have to decide by feel.",
      },
    ],
    realisaties: [],
  },
  fauvillers: {
    slug: "fauvillers",
    title: "Fauvillers dehumidifier hire in the Sûre valley | Vernast",
    description:
      "Dehumidifier hire in Fauvillers, in the Sûre valley of Belgian Luxembourg: converted farmhouses, barns and second homes. Delivered and set up by appointment.",
    h1: "Construction dehumidifier hire in Fauvillers",
    kicker: "Province of Luxembourg · the Sûre near the border",
    rit: { afstand: "about 240 km", tijd: "about two and a half hours" },
    intro: [
      "Fauvillers is a rural, sparsely populated municipality in **the Belgian province of Luxembourg**, not far from the border with the Grand Duchy of Luxembourg. The Sûre winds through a wooded valley here, and the municipality is part of **the Haute-Sûre Forêt d'Anlier nature park**. From Aartselaar it takes about two and a half hours to get there.",
      "Besides Fauvillers itself, villages such as **Hollange, Tintange and Bodange** belong to the municipality. You will find farmhouses, barns and village houses in stone, and among the woods holiday homes that stand empty for much of the year.",
    ],
    bouw: {
      kop: "Old farmhouses, empty holiday homes and a cool valley",
      alineas: [
        "Many sites here revolve around **a farmhouse or barn being converted into a home**. A new floor slab, a screed and a lot of plasterwork go into a large volume, behind stone walls that hold moisture themselves. One large unit per open space and a fan low over the floor are the usual set-up there.",
        "A house left unused for months does not warm up in winter and gets musty air and damp patches. If you renovate a second home like that, bring the room up to temperature first, because below 15 °C a condensation dehumidifier loses much of its efficiency. In the Sûre valley the air also stays damp longer than on the plateau.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a barn being converted into a home.** At 110 litres a day and with a range of up to about 600 m³, this unit can handle a large volume with new screed." },
      { key: "radiaal2250", waarom: "Blows straight across the fresh floor slab of a converted stable, where most of the water is and the air is refreshed most slowly." },
      { key: "revolution", waarom: "For **a holiday home that has stood cold and empty**. The desiccant dehumidifier absorbs moisture even at low temperatures." },
      { key: "teddh20", waarom: "Warms up an unheated stone house before the condensation dehumidifier starts. This 20 kW heater runs on 400 V." },
    ],
    levering: {
      kop: "Delivery in Fauvillers by appointment",
      alinea:
        "Fauvillers is **about two and a half hours** from our warehouse. In Wallonia we deliver by appointment: you choose a **delivery date** when you book, and we agree the time with you in advance. The technician places the units, measures the wall and floor and explains how the drain works.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar: five hours there and back",
      alinea:
        "From Fauvillers a trip to our warehouse and back takes **about five hours**. If you live in Flanders and are doing up a second home in the area, collecting can pay off: you take the unit with you on your way to the house. Always transport a dehumidifier upright.",
    },
    buren: ["vaux-sur-sure", "leglise", "martelange"],
    faq: [
      {
        q: "I live in Flanders and have a second home in Fauvillers. Do I need to be there for the delivery?",
        a: "Someone has to let the technician in and show where the units can go. That can be a neighbour or the contractor. Arrange it when you book, so the technician knows who he will meet on site and with whom he discusses the follow-up.",
      },
      {
        q: "Do you mean the province of Luxembourg in Belgium or the Grand Duchy?",
        a: "This page is about Fauvillers in the Belgian province of Luxembourg. If your site is across the border in the Grand Duchy of Luxembourg, contact us first, and we will look together at whether and how we can deliver.",
      },
      {
        q: "How many units does a barn conversion need?",
        a: "That depends on the volume, the thickness of the screed and the amount of plasterwork. Allow one large unit per open space and a fan over the new floor. When you book, give the floor area and the height, and we will work it out in advance.",
      },
      {
        q: "Why does a holiday home smell musty after standing empty all winter?",
        a: "Cold, still air cannot get rid of its moisture. That moisture settles on walls and furniture, and that is where mould starts. A few weeks of drying with the windows shut removes it. Without heating or ventilation in the winter months, though, it comes back.",
      },
    ],
    realisaties: [],
  },
  gouvy: {
    slug: "gouvy",
    title: "Gouvy dehumidifier hire on the Ardennes plateau | Vernast",
    description:
      "Dehumidifier hire in Gouvy, Beho, Bovigny or Cherain: stone farmhouse renovations and new builds on the cold Ardennes plateau, with a reading at the start.",
    h1: "Construction dehumidifier hire in Gouvy",
    kicker: "Province of Luxembourg · the eastern edge of the Ardennes",
    rit: { afstand: "about 210 km", tijd: "over two hours" },
    intro: [
      "Gouvy lies **in the north-east of the Belgian province of Luxembourg**, against the border with the Grand Duchy of Luxembourg. It is an extensive, rural municipality on the Ardennes plateau, with woods, meadows and scattered villages such as **Beho, Bovigny, Cherain and Limerlé**. From Aartselaar it is a drive of over two hours.",
      "**The Eastern Ourthe** rises in the municipality and flows on towards Houffalize. Gouvy has a station on the railway line from Liège to Luxembourg. The winters are long, the wind blows freely across the open fields and in January the roads are sometimes white.",
    ],
    bouw: {
      kop: "Farmhouses up high and sites heading into winter",
      alineas: [
        "Building here is mostly **rural**: farmhouses and village houses in natural stone, often extended with a new wing, and more recent houses on the edge of the villages. In a conversion the new screed often goes onto an old floor without insulation or a damp-proof membrane. That base stays cold, so the screed dries more slowly than the manufacturer states.",
        "If a site is not weathertight by October, it will not dry by itself in winter. Night frost and days that barely get above zero keep an open shell cold. That is why in Gouvy you see **a heater and a dehumidifier** on the same site more often than further inland: the heater brings the room up to temperature, the dehumidifier then removes the moisture.",
      ],
    },
    toestellen: [
      { key: "teddh30", waarom: "**For a site on the plateau that is closed up in winter.** The 30 kW heater on 400 V warms a cold shell, so the dehumidifier then works efficiently." },
      { key: "ttk350", waarom: "For a village house in Beho or Cherain being renovated floor by floor: 70 litres a day, for rooms up to about 400 m³." },
      { key: "revolution", waarom: "For **a stone farmhouse that never gets properly warm**. A desiccant dehumidifier keeps working where a condensation dehumidifier loses its efficiency in the cold." },
      { key: "ttv4500", waarom: "Carries away the layer of damp air along a cold stone wall, so the dehumidifier pulls the moisture out of the room faster." },
    ],
    levering: {
      kop: "Delivery in Gouvy via Liège and the E25",
      alinea:
        "We drive to Gouvy **via Liège and the E25**, over two hours from Aartselaar. Delivery is by appointment: you choose a **delivery date** when you book, and we agree the time with you in advance. The technician carries the units into the right room, checks the connection and measures the moisture before he leaves.",
    },
    afhalen: {
      kop: "Collecting from Gouvy costs two half days",
      alinea:
        "Picking up a unit in Aartselaar means **over four hours' driving there and back**, and the same again when you return it. That rarely pays off. With delivery you also do not have to lift a heavy unit in and out of the car yourself.",
    },
    buren: ["vielsalm", "houffalize", "bastenaken"],
    faq: [
      {
        q: "Do you also drive to Gouvy in winter when there is snow?",
        a: "Yes, but in snow or freezing rain a delivery may be moved, especially on the smaller roads to the villages. In that case we call you in advance to agree a new delivery date, so you do not wait on site for nothing.",
      },
      {
        q: "Do you also deliver in the Grand Duchy, just across the border from Gouvy?",
        a: "This page is about Gouvy and its villages in the Belgian province of Luxembourg. If you have a site in Troisvierges or elsewhere in the Grand Duchy of Luxembourg, get in touch and we will see what is possible.",
      },
      {
        q: "Why is my new screed in an old farmhouse drying so slowly?",
        a: "The screed lies on a cold, often uninsulated base that holds water and cools the floor. A heater together with a dehumidifier keeps the temperature high enough. At collection the technician measures how much moisture is still in the floor.",
      },
      {
        q: "How long is the drive between Aartselaar and Gouvy?",
        a: "Allow over two hours via Liège and the E25, and a little longer with traffic around Liège. That is why we deliver in Gouvy by appointment and agree the delivery time with you in advance.",
      },
    ],
    realisaties: [],
  },
  houffalize: {
    slug: "houffalize",
    title: "Construction dehumidifier hire in Houffalize | Vernast",
    description:
      "Dehumidifier hire in Houffalize, Nadrin, Tavigny or Wibrin: homes and gîtes on the Ourthe, farmhouses on the Ardennes heights. Delivered, set up, measured.",
    h1: "Construction dehumidifier hire in Houffalize",
    kicker: "Province of Luxembourg · the little town in the Ourthe valley",
    rit: { afstand: "about 195 km", tijd: "about two hours" },
    intro: [
      "Houffalize lies in the valley of the Ourthe, surrounded by the Ardennes plateau. The town was **badly hit in the Battle of the Bulge** and rebuilt afterwards, so the centre has many post-war houses. Around the valley lie villages such as **Nadrin, Mabompré, Tavigny and Wibrin**. From Aartselaar it takes us about two hours to get there.",
      "In Achouffe stands the brewery with **the gnome on the label**, and the area lives largely from tourism. Along the river there are holiday homes, gîtes and campsites. Near Nadrin a viewpoint looks out over **the meanders of the Ourthe**.",
    ],
    bouw: {
      kop: "A valley that holds moisture, and heights that stay cold",
      alineas: [
        "In the centre the houses stand **close to the Ourthe** and against the side of the valley. The ground is wet there, and in winter the sun only briefly rises above the hill. A cellar or ground floor on the hill side therefore stays damp. In a renovation you want to know which moisture comes from the work and which from outside. **The technician measures that** when setting up.",
        "**Gîtes and holiday homes** are done up between two seasons, and the first guests set the deadline. A new bathroom or fresh plaster has to be dry before the decorator and the furnishing follow. Several smaller units, one per room, often work better there than one large unit in the hall.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**For a gîte being done up between two seasons.** A compact unit per room that pulls up to 50 litres a day out of the air." },
      { key: "revolution", waarom: "For **a cellar in the centre, right next to the Ourthe**. A cellar like that stays cool all year round, and a desiccant dehumidifier still absorbs moisture there." },
      { key: "ttk350", waarom: "For a post-war house in the town that is being completely renovated: 70 litres a day, for rooms up to about 400 m³." },
      { key: "teddh20", waarom: "First brings an unheated house on the shady side of the valley above 15 °C, so the dehumidifier can do its job. Runs on 400 V." },
    ],
    levering: {
      kop: "Delivery in Houffalize, right by the E25",
      alinea:
        "Houffalize lies **right by the E25**, about two hours' drive via Liège. We deliver by appointment: you choose a **delivery date** when you book, and we confirm the time in advance. If the house is on a steep slope or a narrow lane in the valley, let us know. That way the technician knows where he can load and unload.",
    },
    afhalen: {
      kop: "Collecting costs you half a day per trip",
      alinea:
        "Our warehouse in Aartselaar is **about two hours** from Houffalize, so there and back you are on the road for some four hours. If you manage a holiday home and commute between Antwerp and the Ardennes anyway, you can take a single unit with you. For several gîtes at once delivery is simpler: the technician puts the right unit in each room.",
    },
    buren: ["bastenaken", "gouvy", "vielsalm", "la-roche-en-ardenne"],
    faq: [
      {
        q: "My gîte in Houffalize has to be dry for the first guests. How do I plan that?",
        a: "Count back from the arrival date. New plaster in a heated room is usually ready for the decorator after one to two weeks; a screed needs more time. Book as early as possible and mention the date, and we will match the number of units to it.",
      },
      {
        q: "Is my cellar in the centre damp because of the Ourthe?",
        a: "It may be. Houses close to the river lie low, with groundwater just below the cellar. A dehumidifier keeps the room usable, but moisture from outside comes back as soon as the unit is gone. The reading at set-up shows how deep the moisture is in the wall.",
      },
      {
        q: "Do you come as far as Nadrin or Wibrin?",
        a: "Yes, we deliver in all the villages of the municipality. The roads to the higher villages are narrow and winding. So give the exact address and let us know whether a van can drive up to the door.",
      },
      {
        q: "How many units do I need for several holiday homes at once?",
        a: "Usually one compact unit per room where wet work has been done, and possibly a fan in the largest room. When you book, give the floor area and the type of work for each house. Then we work out the total and the technician brings everything in one trip.",
      },
    ],
    realisaties: [],
  },
  "sainte-ode": {
    slug: "sainte-ode",
    title: "Sainte-Ode dehumidifier hire on the Western Ourthe | Vernast",
    description:
      "Dehumidifier hire in Sainte-Ode, Amberloup, Lavacherie or Tillet: stone village houses along the Western Ourthe on the Ardennes plateau. Delivered and set up.",
    h1: "Construction dehumidifier hire in Sainte-Ode",
    kicker: "Province of Luxembourg · villages along the Western Ourthe",
    rit: { afstand: "about 200 km", tijd: "about two hours" },
    intro: [
      "Sainte-Ode is a rural municipality between Bastogne and Saint-Hubert, on the Ardennes plateau. It includes villages such as **Amberloup, Lavacherie and Tillet**, and **the Western Ourthe** runs through it as a narrow river in a green valley. Our van gets there from Aartselaar in about two hours.",
      "There is no real town centre. Farmhouses, village houses and housing estates lie along the roads, among meadows and vast forests. The winters are harsh, and in a poorly heated house you see it first on **the north-facing walls**.",
    ],
    bouw: {
      kop: "Stone village houses and new builds on the plateau",
      alineas: [
        "The older houses are built in **natural stone**, with thick walls and small windows. A renovation brings insulation, new plaster and often a new floor. A wall that has held moisture for years releases it slowly. If you paint too early, the paint can **start peeling after a few months**.",
        "**New builds in the villages** follow the seasons: the shell goes up in summer, the screed goes down in autumn. By then the temperature on the plateau drops quickly, and without extra heating a condensation dehumidifier loses much of its efficiency. Warm the room up first with a heater, and the schedule stays achievable.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a new-build house with screed across the whole ground floor.** Pulls up to 110 litres a day out of the air in rooms up to about 600 m³." },
      { key: "teddh30", waarom: "For a shell on the plateau in autumn. The heater warms the cold room, so the screed keeps drying. It needs 400 V three-phase power." },
      { key: "ttk350", waarom: "For **a stone village house in Amberloup or Tillet** being renovated floor by floor: 70 litres a day in rooms up to about 400 m³." },
      { key: "radiaal2250", waarom: "Blows straight along a cold north wall or across a fresh floor, the spots where the moisture lingers longest." },
    ],
    levering: {
      kop: "Delivery in Sainte-Ode by appointment",
      alinea:
        "We drive **about two hours** to Sainte-Ode. When you book you choose a **delivery date**, and because we deliver by appointment in Wallonia, we call in advance to fix the time. The technician places the units, lays the drain hose and notes the starting values. That way collection can be based on a measurement.",
    },
    afhalen: {
      kop: "Collecting it yourself: four hours' driving for one unit",
      alinea:
        "Aartselaar is too far to just pop in: there and back you are on the road for **about four hours**. If you need a heater or a large unit, choose delivery. The technician connects everything correctly on site.",
    },
    buren: ["bastenaken", "vaux-sur-sure", "tenneville"],
    faq: [
      {
        q: "Why is the paint peeling on my renovated stone wall in Sainte-Ode?",
        a: "Often the wall was not yet dry when it was painted. A thick natural stone wall releases its moisture slowly, and that moisture pushes the paint layer off. So have it measured before you paint. The technician does that when collecting the dehumidifier.",
      },
      {
        q: "Can I put a construction dehumidifier in a new build without windows?",
        a: "Better not. A dehumidifier works in a closed room; otherwise it is drying the outside air. As long as windows and doors are missing, you can seal the openings temporarily with plastic sheeting. Then the unit can do its job.",
      },
      {
        q: "Do you deliver in all the villages of Sainte-Ode?",
        a: "Yes, in Amberloup, Lavacherie, Tillet and the hamlets in between. Give the exact address and tell us how to reach it, especially for a site on a country lane. Then the technician knows where he can park the van.",
      },
      {
        q: "When do I need a heater as well as the dehumidifier?",
        a: "As soon as the room stays below 15 °C. In an unheated site on the plateau that is almost always the case from autumn onwards. The heater raises the temperature, the dehumidifier takes the moisture out. Together that goes much faster than either on its own.",
      },
    ],
    realisaties: [],
  },
  "vaux-sur-sure": {
    slug: "vaux-sur-sure",
    title: "Vaux-sur-Sûre dehumidifier hire at the Sûre source | Vernast",
    description:
      "Dehumidifier hire in Vaux-sur-Sûre, Sibret, Hompré or Juseret: new builds and farmhouses at the source of the Sûre, on the high plateau south of Bastogne.",
    h1: "Construction dehumidifier hire in Vaux-sur-Sûre",
    kicker: "Province of Luxembourg · at the source of the Sûre",
    rit: { afstand: "about 225 km", tijd: "over two hours" },
    intro: [
      "Vaux-sur-Sûre lies **south of Bastogne**, on the open Ardennes plateau along the N4 to Arlon. **The Sûre** rises in the municipality, the river that flows on through Fauvillers into the Grand Duchy of Luxembourg. Our warehouse in Aartselaar is a drive of over two hours away.",
      "The municipality is extensive, with villages such as **Sibret, Hompré, Juseret, Morhet and Nives**. Besides the farmhouses and village houses in natural stone, there are also **newer housing estates** on the edge of the villages.",
    ],
    bouw: {
      kop: "New builds on open ground, and springs under the meadow",
      alineas: [
        "Around the sources of the Sûre the ground is wet. In the low spots the meadows are saturated in winter, and a building pit or a cellar under construction quickly fills up there. **Pump the water out first and dry afterwards.** A dehumidifier removes moisture from floor and walls, not the water still standing in the pit.",
        "On the open plateau **the wind** plays a part. A shell cools down a lot, and a fresh screed lies in a room that can drop to freezing at night. If you pour here in autumn, seal the windows and doors with plastic sheeting and put a heater next to the dehumidifier. That way the screed is ready in time for the floor layer.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a new house on the edge of Sibret or Hompré.** At 110 litres a day this unit dries rooms up to about 600 m³." },
      { key: "teddh30", waarom: "Keeps a shell on the windy plateau at working temperature, so a fresh screed does not stay wet until spring. Runs on 400 V." },
      { key: "radiaal2250", waarom: "For **a cellar floor in a wet hollow**. The radial fan blows straight across the floor and into the corners, where the moisture lingers longest." },
      { key: "revolution", waarom: "For a stone farmhouse that stays cool all year round. A desiccant dehumidifier keeps absorbing moisture there, even when it is too cold for a condensation dehumidifier." },
    ],
    levering: {
      kop: "Delivery in Vaux-sur-Sûre by appointment",
      alinea:
        "Vaux-sur-Sûre is **over two hours' drive** from Aartselaar. You choose a **delivery date** when you book, and we agree the delivery time with you in advance. On site the technician places the units room by room, checks the power connection for a heater and takes the moisture readings.",
    },
    afhalen: {
      kop: "Collecting from Vaux-sur-Sûre rarely pays off",
      alinea:
        "To Aartselaar and back is **over four hours' drive**, and the same again when you return the units. Collecting it yourself only makes sense if you need a single unit and have to head towards Antwerp anyway. For a site with a heater and a dehumidifier you are better off choosing delivery with set-up.",
    },
    buren: ["bastenaken", "sainte-ode", "fauvillers", "leglise", "neufchateau"],
    faq: [
      {
        q: "My building pit in Vaux-sur-Sûre is full of water. Will a construction dehumidifier help?",
        a: "Not while the water is standing there. Have it pumped out first. Only when there is no more standing water and the floor and walls are still wet does a dehumidifier make sense. When you book, tell us how wet the room still is.",
      },
      {
        q: "How do I protect a fresh screed against frost on the plateau?",
        a: "Close the room off, including with temporary sheeting in the window openings, and keep it above freezing with a heater. A screed that freezes can lose strength. Once the temperature is right, a dehumidifier removes the moisture.",
      },
      {
        q: "Do you drive to Sibret, Morhet and Nives?",
        a: "Yes, we deliver in all the villages of Vaux-sur-Sûre. The distances within the municipality are large. So give the exact address when you book, and the technician will plan his route past your site.",
      },
      {
        q: "Who checks whether my floor is dry enough for the floor layer?",
        a: "Our technician measures at set-up and again at collection. Which value the floor has to reach is decided by your floor layer, depending on the type of floor. With that reading in hand, you know where you stand.",
      },
    ],
    realisaties: [],
  },
  vielsalm: {
    slug: "vielsalm",
    title: "Vielsalm dehumidifier hire in the Salm valley | Vernast",
    description:
      "Dehumidifier hire in Vielsalm, Grand-Halleux, Bihain or Salmchâteau: renovating stone houses in the Salm valley and new builds up high. Delivered and set up.",
    h1: "Construction dehumidifier hire in Vielsalm",
    kicker: "Province of Luxembourg · the Salm valley and the coticule",
    rit: { afstand: "about 190 km", tijd: "about two hours" },
    intro: [
      "Vielsalm lies in the valley of the Salm, in the north of the province of Luxembourg. The area is known for **the coticule**, a yellow whetstone quarried from the Ardennes bedrock. In Salmchâteau you can learn more about it. Every July the **Macralles**, the witches of Vielsalm, parade through the streets. The drive from Aartselaar takes about two hours.",
      "The municipality includes **Grand-Halleux, Salmchâteau, Bihain and Petit-Thier**. In the valley the houses line the river and the railway. Above them lie villages on the plateau, where the winters are cold and long.",
    ],
    bouw: {
      kop: "Stone walls and a valley where the sun arrives late",
      alineas: [
        "Many older houses have thick walls of **dark rubble stone** and a slate roof. Walls like that hold moisture for a long time. If you put in new plaster or internal insulation during a renovation, let the wall **dry out itself first**. Otherwise the moisture will end up trapped behind the new layer.",
        "**In the Salm valley the air stays cool and damp**, and a house on the shady side gets little sun in winter. Up high around Bihain the winters are long. A shell that is still open there in November will not dry by itself, and a condensation dehumidifier alone is not enough. Warm the room up first and dry afterwards.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**For a stone house on the shady side of the Salm valley.** The desiccant dehumidifier keeps absorbing moisture in a cold room." },
      { key: "teddh30", waarom: "For a site up high around Bihain, where winter starts early. The 30 kW heater on 400 V warms a cold shell until the dehumidifier can work." },
      { key: "ttk350", waarom: "For a house in Vielsalm or Grand-Halleux being renovated floor by floor: 70 litres a day, for rooms up to about 400 m³." },
      { key: "ttv4500", waarom: "Moves 4,500 m³ of air an hour along **a thick stone wall** that dries out slowly after an interior renovation." },
    ],
    levering: {
      kop: "Delivery in Vielsalm via Liège",
      alinea:
        "We reach Vielsalm **in about two hours** via Liège. You choose a **delivery date** when you book, and because we deliver by appointment in Wallonia, we fix the time with you in advance. The technician carries the units into the right room, lays the drain and measures the walls. That reading later tells you whether you can paint or should wait a little longer.",
    },
    afhalen: {
      kop: "Collecting from Vielsalm: a day on the road",
      alinea:
        "There and back to our collection point in Aartselaar takes **about four hours**, and you drive that distance again to return it. For one dehumidifier that is a lot. With delivery we also collect the units again, and you do not have to lift them in and out of the car yourself.",
    },
    buren: ["gouvy", "houffalize"],
    faq: [
      {
        q: "Can I insulate the inside of a stone wall in Vielsalm straight away?",
        a: "Only once the wall is dry enough. If you insulate a wet wall on the inside, you trap the moisture between stone and insulation, with a risk of mould. Have the wall measured first. The technician does that when setting up.",
      },
      {
        q: "Is a desiccant dehumidifier better than a condensation dehumidifier in a cold house?",
        a: "In a cold room, yes. A condensation dehumidifier loses a lot of efficiency below 15 °C, whereas a desiccant dehumidifier also works at low temperatures. In a heated room a condensation dehumidifier is more economical. The technician chooses based on the temperature he measures.",
      },
      {
        q: "Do you also come to Bihain and the other villages up high?",
        a: "Yes, we deliver throughout the municipality. In winter snow can slow down the trip to the higher villages. Then we call you to move the delivery, so you do not wait on site for nothing.",
      },
      {
        q: "Can someone else sign for the delivery in Vielsalm?",
        a: "Yes, a contractor, neighbour or relative can receive the technician. Give their name and phone number when you book, so the technician knows who he will meet on site and who keeps an eye on the units during the hire.",
      },
    ],
    realisaties: [],
  },
  bertrix: {
    slug: "bertrix",
    title: "Bertrix dehumidifier hire in slate country | Vernast",
    description:
      "Dehumidifier hire in Bertrix, Cugnon or Auby-sur-Semois: slate roofs, new builds on the Ardennes plateau and old houses on the Semois. Set up at your door.",
    h1: "Construction dehumidifier hire in Bertrix",
    kicker: "Province of Luxembourg · the slate municipality on the plateau",
    rit: { afstand: "about 195 km", tijd: "about two hours" },
    intro: [
      "Bertrix is **a slate municipality**. For centuries slate was quarried here in underground workings, and one of them can be visited today as a museum. You can still see it in the villages: almost every older house has a slate roof, often with a slate-clad front as well.",
      "The centre lies **on the Ardennes plateau**, with newer residential areas and a business park on the edge. To the south the municipality drops down to the Semois, where Cugnon and Auby-sur-Semois lie in the valley. Jehonville and Orgeo also belong to Bertrix. From Aartselaar it takes us about two hours to get there.",
    ],
    bouw: {
      kop: "Slate on the roof, new builds on the plateau",
      alineas: [
        "On the plateau **new houses** go up regularly, with fresh screed and new plasterwork. The climate is cooler and wetter there than in Flanders. A new build that becomes wind- and watertight in autumn rarely dries before winter without help. **A dehumidifier with a fan** across the floor makes up that lost ground.",
        "In an older house with **a slate-clad front**, the moisture often sits behind the slates, in a wall that can hardly breathe out. If you renew the cladding or replaster the inside, that wall dries slowly. In Cugnon and Auby there is also **the damp air of the Semois**, and houses often stand half against the slope.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a new build on the plateau** with screed across the whole ground floor. The Ultimate pulls up to 110 litres a day out of a room of up to about 600 m³." },
      { key: "radiaal2250", waarom: "Blows **low and straight across a fresh screed**, so the floor dries evenly and not just on top." },
      { key: "ttk350", waarom: "**For an older house with a slate front** that you are doing up floor by floor: up to 70 litres a day, for rooms up to about 400 m³." },
      { key: "teddh30", waarom: "Brings **an unheated shell** up to temperature in the Ardennes winter, so the condensation dehumidifier works well. It needs a 400 V connection." },
    ],
    levering: {
      kop: "Delivery in Bertrix: along the E411 up onto the plateau",
      alinea:
        "From Aartselaar we drive via Brussels and Namur down the E411, into the heart of the province of Luxembourg. **Allow about two hours.** You choose a delivery date when you book, and we agree the time with you, so we can combine trips in the area. The technician places the units per drying zone and notes the moisture readings of floor and wall at the start.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar: four hours' driving for one unit",
      alinea:
        "Our collection point is about two hours from Bertrix. Picking up a unit therefore costs you **about four hours' driving**, and returning it the same again. For a site on the plateau delivery is the logical choice: the technician brings the units and sets them up on site.",
    },
    buren: ["paliseul", "herbeumont", "libramont-chevigny", "neufchateau"],
    faq: [
      {
        q: "How long does screed need to dry in a new build in Bertrix?",
        a: "As a rule of thumb, about a week per centimetre of thickness, and in the cool Ardennes climate it tends to take longer. With a dehumidifier and a fan across the floor it goes faster. Have the moisture measured before you lay parquet or tiles; the technician takes a first reading at the start.",
      },
      {
        q: "Does a wall behind slate cladding also dry with a construction dehumidifier?",
        a: "From the inside, yes: the dehumidifier draws the moisture out of the plasterwork and wall on the inner side. If water is getting behind the slates because the cladding leaks, have that leak repaired first. Otherwise you are drying inside what keeps getting wet outside.",
      },
      {
        q: "Does a condensation dehumidifier work in a cold shell on the plateau?",
        a: "Below about fifteen degrees a condensation dehumidifier loses a lot of efficiency, and in the Ardennes winter a shell is almost always colder than that. Then add an electric site heater, or choose a desiccant dehumidifier, which keeps working in the cold.",
      },
      {
        q: "Do you deliver as far as the province of Luxembourg?",
        a: "Yes, although it is one of our longest trips. You choose a delivery date online, then we agree the time with you. That way we can combine deliveries in Bertrix and the surrounding municipalities, and you do not have to wait on site all day.",
      },
    ],
    realisaties: [],
  },
  bouillon: {
    slug: "bouillon",
    title: "Bouillon dehumidifier hire below the castle | Vernast",
    description:
      "Dehumidifier hire in Bouillon, on the Semois below the castle: old stone houses, holiday homes in Rochehaut and Corbion. Delivered, set up, moisture measured.",
    h1: "Construction dehumidifier hire in Bouillon",
    kicker: "Province of Luxembourg · the Semois loop below the castle",
    rit: { afstand: "about 205 km", tijd: "over two hours" },
    intro: [
      "Bouillon lies in **a deep loop of the Semois**, close to the French border. Above the town, the castle of Godfrey of Bouillon stands on a rocky ridge. Below, the houses follow the bend of the river, with slate roofs and fronts in dark Ardennes stone. From Aartselaar it is a drive of over two hours.",
      "Around the town lie villages such as **Rochehaut, Corbion, Noirefontaine and Poupehan**, some high on the plateau, others deep down by the water. Many houses in the area are second homes, gîtes or holiday homes. They stand empty part of the year, and you notice that in the damp.",
    ],
    bouw: {
      kop: "Slate, schist and houses that stand empty for months",
      alineas: [
        "Older houses in the valley have thick walls of **local rubble stone**, schist and sandstone, usually without a damp-proof course. On the slope side the back wall is often partly against the ground. After a wet autumn that wall stays cool and damp for a long time, and new plasterwork dries slowly on it. When setting up, the technician takes a **moisture reading**, so you know which part is construction moisture and which comes from the slope.",
        "A holiday home that stays unheated and shut all winter smells musty in spring and gets mould behind the cupboards. With **a heater and a dehumidifier** you can put such a house right again before the season starts. If you are converting for summer letting, plan enough drying time: screed and plasterwork must be dry before the first guests arrive.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**For a cold holiday home in the Semois valley.** This desiccant dehumidifier keeps absorbing moisture in rooms that barely reach five degrees in winter." },
      { key: "teddh20", waarom: "Warms up a second home that stood unheated for months. A condensation dehumidifier only works well **above 15 °C**. This heater needs a 400 V (three-phase) connection." },
      { key: "ttk350", waarom: "**For a stone house you are renovating floor by floor.** It pulls up to 70 litres a day out of a room of up to about 400 m³." },
      { key: "ttv4500", waarom: "Keeps the air moving along **the back wall against the slope**, so the layer of damp air does not hang against the plasterwork." },
    ],
    levering: {
      kop: "Delivery in Bouillon: along the E411 and then down into the valley",
      alinea:
        "Bouillon is one of our furthest addresses: over two hours' drive via Brussels and Namur, with the winding roads down into the valley as the last stretch. When you book you choose **a delivery date**; we agree the time with you. In the centre and in the villages along the river the streets are narrow and steep. Let us know in advance whether the van can get up to the door, and the technician will bring **a sack truck**.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar is not an option from Bouillon",
      alinea:
        "Our collection point is over two hours' drive from Bouillon. So you are **over four hours on the road** to pick up a unit, and the same again after the hire period to return it. Let us deliver instead: the technician places the units, lays the drain and collects everything again at the agreed time.",
    },
    buren: ["paliseul", "herbeumont", "florenville", "vresse-sur-semois"],
    faq: [
      {
        q: "Is this Bouillon in Belgium, not in France?",
        a: "Yes. This page is about Bouillon in the Belgian province of Luxembourg, close to the French border. If your site is just across the border in France, contact us before you book. Then we will look together at what is possible.",
      },
      {
        q: "My holiday home stood empty all winter and smells musty. What helps?",
        a: "Warm up first, then dry. A heater brings the rooms above fifteen degrees, and then a dehumidifier draws the moisture out of the air, walls and furniture. Mould behind the cupboards has to be cleaned off separately. The dehumidifier helps stop it coming back, but does not remove it.",
      },
      {
        q: "Can you deliver in Rochehaut or Poupehan?",
        a: "Yes, in all the villages of the municipality. The roads to the villages by the river are narrow and steep. When you book, give the full address and briefly describe the access, so the technician knows in advance whether he needs a sack truck.",
      },
      {
        q: "Why does drying take so long in an old house in the valley?",
        a: "Thick rubble stone walls hold a lot of water and release it slowly, especially on the side where the ground is against the wall. The damp air in the river valley slows it down further. Allow a few weeks. With a moisture reading at the start you can later see how much progress has been made.",
      },
    ],
    realisaties: [],
  },
  daverdisse: {
    slug: "daverdisse",
    title: "Daverdisse dehumidifier hire on the Lesse | Vernast",
    description:
      "Dehumidifier hire in Daverdisse, Gembes, Haut-Fays or Porcheresse: stone village houses in the Lesse valley and on the plateau. Delivered, set up and collected.",
    h1: "Construction dehumidifier hire in Daverdisse",
    kicker: "Province of Luxembourg · the village on the Lesse",
    rit: { afstand: "about 175 km", tijd: "almost two hours" },
    intro: [
      "Daverdisse lies **on the Lesse**, in the west of the province of Luxembourg, where the river runs through a narrow, wooded valley. Besides Daverdisse itself, Gembes, Haut-Fays and Porcheresse belong to the municipality. From Aartselaar it takes us almost two hours to get there.",
      "The village in the valley and the villages on the plateau are very different. Down below, the houses stand close to the water and the edge of the woods. Up top the landscape is open, with meadows and **scattered farms**. Everywhere you see grey rubble stone and slate roofs.",
    ],
    bouw: {
      kop: "Stone village houses in the valley and up high",
      alineas: [
        "Along the Lesse the ground lies low, and in the evening and morning **cold, damp air** sinks into the valley. A village house by the river often has a cellar or ground floor in rubble stone without a damp-proof course. After a renovation a wall like that holds on to the water for a long time. **A fan along the wall** helps the dehumidifier along.",
        "On the plateau, in Haut-Fays and Gembes, it is more often about **a farm or stable being converted**. There a new screed covers a large area, in a space that is not yet heated. In the long, cold winter, **a large dehumidifier with a site heater** keeps a site like that moving.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a converted stable or farm on the plateau.** Up to 110 litres a day, for rooms up to about 600 m³." },
      { key: "teddh30", waarom: "Brings **a large, unheated volume** up to a temperature at which the dehumidifier works well. This heater needs a 400 V (three-phase) connection." },
      { key: "ttv4500", waarom: "Blows the damp air away along **the thick stone wall of a village house on the Lesse**, so the plasterwork dries faster." },
      { key: "ttk350", waarom: "**For a village house in the valley** that you are renovating floor by floor: up to 70 litres a day, for rooms up to about 400 m³." },
    ],
    levering: {
      kop: "Delivery in Daverdisse: down the E411 and into the valley",
      alinea:
        "We drive via Namur down the E411 to the south and drop down to the Lesse for the last stretch. **Allow almost two hours.** You choose a delivery date when you book, and we agree the time with you. If the site is in a farmyard or on a narrow road in the valley, **describe the access**. That way the technician knows where he can unload and how to get the units inside.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar: almost four hours' driving",
      alinea:
        "Our collection point is almost two hours from Daverdisse. There and back you are **almost four hours on the road**, and that twice: when collecting and when returning. Better to have it delivered. The technician brings the units, takes a reading at the start and takes them away again after the hire period.",
    },
    buren: ["wellin", "libin", "paliseul"],
    faq: [
      {
        q: "My house is right by the Lesse. Why does the ground floor stay damp?",
        a: "Cold, damp air sinks down into the valley, and old rubble stone walls usually have no damp-proof course. The ground floor therefore stays cool and absorbs moisture. A dehumidifier removes construction moisture after a renovation. If the moisture comes from below, the wall itself needs treating.",
      },
      {
        q: "Which dehumidifier should I choose for a converted stable?",
        a: "A stable usually has a large volume and a new screed across the whole floor. Then the Ultimate is the logical choice, with a site heater alongside as long as the space is not heated. Give us the dimensions and we will check whether a second unit is needed.",
      },
      {
        q: "Do you deliver in Porcheresse and Haut-Fays?",
        a: "Yes, in all the villages of the municipality of Daverdisse. When you book, give the correct village and street, because the villages are a few kilometres apart. You choose a delivery date, and we agree the time with you afterwards.",
      },
      {
        q: "How do I know when the walls are dry enough to paint?",
        a: "By measuring, not by touch. A wall that feels dry can still be wet inside. The technician notes the moisture readings at set-up. Compare against them after a few weeks, and for paint or wallpaper follow the manufacturer's limit.",
      },
    ],
    realisaties: [],
  },
  herbeumont: {
    slug: "herbeumont",
    title: "Herbeumont dehumidifier hire above the Semois | Vernast",
    description:
      "Dehumidifier hire in Herbeumont, Martilly or Saint-Médard: houses against the slopes of the Semois valley, holiday homes in the woods. Delivered and set up.",
    h1: "Construction dehumidifier hire in Herbeumont",
    kicker: "Province of Luxembourg · the castle ruin above the Semois",
    rit: { afstand: "about 205 km", tijd: "over two hours" },
    intro: [
      "Herbeumont lies **in a large bend of the Semois**. Above the village the ruins of a medieval castle stand on the rocks. From there you see the river looping through the woods. Besides Herbeumont, Martilly and Saint-Médard belong to the municipality. From Aartselaar it is a drive of over two hours.",
      "The area consists of **deep forests and steep slopes**, with little flat land. Many houses stand on the edge of the woods or halfway up the slope. A good share of them are second homes and gîtes for walkers and kayakers.",
    ],
    bouw: {
      kop: "A house against the slope, and the woods up to the wall",
      alineas: [
        "A house **built against the slope** has a back wall that is partly underground. Rainwater and groundwater run along it, and that wall stays damp for most of the year. After a renovation with new plasterwork you want to know whether you are drying construction moisture or moisture that keeps coming back. That is why the technician takes **a moisture reading at the start**.",
        "Where the woods stand close to the house, the front gets little sun and dries slowly after rain. Inside you notice it as **cool, damp air** in the rooms on the woodland side. In a holiday home that stays shut for a long time, mould appears on the ceilings. With **a heater and a dehumidifier** you make such a house habitable again.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**For the cold room on the slope side.** This desiccant dehumidifier also absorbs moisture when the temperature stays low." },
      { key: "ttv4500", waarom: "Keeps the air moving along **the back wall that is half set into the slope**, so the moisture does not hang against the plasterwork." },
      { key: "ttk170", waarom: "**For a gîte or a small holiday home.** This compact dehumidifier pulls up to 50 litres a day out of rooms up to about 250 m³." },
      { key: "teddh20", waarom: "Warms up **a house in the woods** that got through the winter unheated, until the dehumidifier works well. It needs a 400 V connection." },
    ],
    levering: {
      kop: "Delivery in Herbeumont: the last kilometres through the woods",
      alinea:
        "It is **over two hours' drive**, with a stretch of narrow, winding roads down into the valley after the E411. You choose a delivery date when you book, and we agree the time with you. That way we can combine your delivery with other addresses in the area. If the house is on a forest track or a steep drive, **mention it when you book**, and the technician will bring the right equipment.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar yourself: over four hours there and back",
      alinea:
        "Our collection point is over two hours from Herbeumont. Picking up a unit therefore costs you **over four hours there and back**, and afterwards you still have to return it. Better to have it delivered: the technician places the dehumidifier, lays the drain hose and collects everything again after the hire period.",
    },
    buren: ["bertrix", "bouillon", "florenville", "chiny"],
    faq: [
      {
        q: "The back wall of my house is set into the slope. Can I get it dry?",
        a: "Construction moisture after a renovation, yes. If water runs from the slope against the wall after every shower, the moisture keeps coming back. Then you first need drainage or a damp-proof barrier. A moisture reading shows which of the two it is.",
      },
      {
        q: "How do I get a holiday home in the woods dry for the season?",
        a: "Start a few weeks before the first guests arrive. Warm the house up first with a heater, then put a dehumidifier on each floor and keep windows and doors shut. That draws the moisture out of walls and fabrics, and the musty smell is gone before the season starts.",
      },
      {
        q: "Can the van get up to a house on a forest track?",
        a: "Often, yes, but not every forest track is wide or surfaced enough. Describe the access when you book. Then the technician knows in advance whether he has to cover a stretch on foot, and brings a sack truck for the units.",
      },
      {
        q: "Why is mould appearing on the ceiling of my house on the edge of the woods?",
        a: "Warm, moist indoor air condenses on the coldest surface. In a house in the shade of the woods that is often the ceiling under a poorly insulated roof. A dehumidifier lowers the humidity, so less condenses. The mould itself has to be cleaned off first.",
      },
    ],
    realisaties: [],
  },
  libin: {
    slug: "libin",
    title: "Libin dehumidifier hire for Redu and Transinne | Vernast",
    description:
      "Hiring a dehumidifier in Libin, Redu, Transinne or Anloy? We deliver and set up dehumidifiers for Ardennes stone village houses and converted farmhouses.",
    h1: "Construction dehumidifier hire in Libin",
    kicker: "Province of Luxembourg · Redu and Transinne",
    rit: { afstand: "about 180 km", tijd: "about two hours" },
    intro: [
      "Libin is made up of scattered Ardennes villages on the plateau between Saint-Hubert and Daverdisse. Two of them are known far beyond the area: Transinne, with the **Euro Space Centre** right by the E411, and Redu, the **book village** with its second-hand bookshops in old farmhouses.",
      "Anloy, Ochamps and Villance also belong to the municipality. They are small villages between woods and pasture, with old houses gradually being renovated and new builds on the edge of the village. From Aartselaar it takes us **about two hours** to get there.",
    ],
    bouw: {
      kop: "Stone farmhouses getting a second life",
      alineas: [
        "Typical of the area are **rubble stone farmhouses** in which home and stable share one roof. Anyone converting such a house turns the stable into living space with a new concrete floor, screed and insulation. That brings a lot of water in one go into a space where the old walls stay cold until the house has been heated for a while.",
        "In Redu and Anloy the houses stand close together, some with **a vaulted cellar** that stays cool even in summer. If the ground floor becomes a shop or workshop after a conversion, you need a dehumidifier that keeps working in a cool room too.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a stable being converted into living space.** Pulls up to 110 litres a day out of the air, for volumes up to about 600 m³." },
      { key: "radiaal2250", waarom: "Lays an airflow **flat across the new screed** in a converted stable, so it dries evenly." },
      { key: "revolution", waarom: "For **a vaulted cellar in Redu or Anloy**, which stays too cool for a condensation dehumidifier even in summer. This desiccant dehumidifier does work there." },
      { key: "ttk170", waarom: "A compact unit for **a shop or workshop on the ground floor** after a small conversion: 50 litres a day, up to about 250 m³." },
    ],
    levering: {
      kop: "Delivery in Libin, Redu and Transinne",
      alinea:
        "Libin lies right by the E411, **about two hours** from Aartselaar. You choose a delivery date when you book, and we agree the delivery time with you. In the narrow centre of Redu there is little room to load. So let us know in advance whether there is **a drive or parking space** at the house.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar from Libin",
      alinea:
        "There and back you drive **about four hours**, and that twice. Collecting costs you more time than keeping an eye on the drying itself. **Have the units delivered**: the technician places them and collects them again on the agreed day.",
    },
    buren: ["saint-hubert", "libramont-chevigny", "daverdisse", "tellin"],
    faq: [
      {
        q: "How do I dry a stable that is being incorporated into my house in Libin?",
        a: "Put a large dehumidifier in the middle of the space and a fan over the new floor, and keep windows and doors shut. A new concrete slab with screed holds a lot of water, and the old walls stay cold for a long time. A moisture reading at the start later shows you how much progress has been made.",
      },
      {
        q: "Is there room in Redu to leave the van?",
        a: "In the centre of the book village the streets are narrow and busy at weekends. When you book, tell us whether there is a drive or parking space at the house. On a weekday delivery usually goes more smoothly, and the technician brings a sack truck for the last stretch.",
      },
      {
        q: "Does a condensation dehumidifier work in a vaulted cellar?",
        a: "A condensation dehumidifier loses efficiency as soon as the temperature drops below about 15 °C, and a vaulted cellar often stays cooler than that. A desiccant dehumidifier works better there, because it absorbs moisture with a drying agent instead of via a cold surface.",
      },
      {
        q: "How long does the technician need to set everything up?",
        a: "For a house, allow half an hour to an hour. He places the units per drying zone, lays the condensate drain, takes a first moisture reading and shows you how to operate everything. For a large conversion it takes longer.",
      },
    ],
    realisaties: [],
  },
  "libramont-chevigny": {
    slug: "libramont-chevigny",
    title: "Hire a dehumidifier in Libramont-Chevigny | Vernast",
    description:
      "Dehumidifier hire in Libramont-Chevigny, Recogne or Bras? We deliver and install units on the Ardennes plateau, for new builds and converted farmhouses.",
    h1: "Construction dehumidifier hire in Libramont-Chevigny",
    kicker: "Province of Luxembourg · the plateau by the E411",
    rit: { afstand: "about 195 km", tijd: "about two hours" },
    intro: [
      "Libramont-Chevigny lies **in the middle of the Belgian province of Luxembourg**, on the Ardennes plateau and close to the E411. Outside the region the municipality is best known for **the Libramont agricultural fair**, which draws visitors from all over the country every summer. From Aartselaar it takes us about two hours to get there.",
      "The municipality also includes Recogne, Bras, Freux, Moircy, Remagne, Saint-Pierre and Sainte-Marie-Chevigny. With a station on the Brussels to Luxembourg railway line, a hospital and schools, Libramont is **the centre of the area**. As a result, new housing plots keep appearing around the town.",
    ],
    bouw: {
      kop: "New builds around the town, old farmhouses in the villages",
      alineas: [
        "On the housing estates around Libramont and Recogne, drying is all about **screed and plasterwork** that have to be ready in time for the floor layer and the decorator. On the plateau, spring and autumn are colder than around Antwerp. A cold screed gives up its moisture slowly, and a condensation dehumidifier only works properly above about 15 °C. **Adding a site heater** brings the room up to temperature first.",
        "In the villages there are farmhouses of rubble stone with slate roofs, and the stable or barn is often turned into part of the home. A new floor slab, screed and insulation bring **a lot of water into a large volume**, while the thick stone walls stay cold for a long time. There we put a large dehumidifier in the middle and a fan that drives the air along the coldest wall.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a new-build house on an estate around Libramont.** Draws up to 70 litres a day from the air in rooms of up to about 400 m³, suitable for a ground floor with fresh screed." },
      { key: "ttk650", waarom: "For **a converted barn or stable in Bras or Moircy**: 110 litres a day, for volumes of up to about 600 m³." },
      { key: "teddh30", waarom: "An unheated site on the plateau drops below 15 °C in spring and autumn. This 30 kW electric heater brings **a large volume** back up to temperature and needs a 400 V (three-phase) connection." },
      { key: "radiaal2250", waarom: "Blows **low and directly across a new screed**, so it dries over the whole surface and not just at the edges." },
    ],
    levering: {
      kop: "Delivery in Libramont-Chevigny",
      alinea:
        "Libramont is **about two hours** from our warehouse in Aartselaar, via the Brussels ring road and the E411. You choose a delivery date when you book. In Wallonia we deliver **by appointment**, so we can combine the trip with other addresses in the province. The technician puts the units in place, takes a first moisture reading and explains how to operate them.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar from Libramont",
      alinea:
        "Collecting is possible, but you then drive for **about four hours** there and back, and you do that twice: when you pick up and when you return. A dehumidifier is also heavy and has to be transported upright. Over this distance, **delivery is the sensible choice**.",
    },
    buren: ["neufchateau", "bertrix", "libin", "saint-hubert", "sainte-ode"],
    faq: [
      {
        q: "Does a construction dehumidifier work on the cold plateau around Libramont?",
        a: "Yes, but a condensation dehumidifier loses output below about 15 °C. On an unheated site in spring or autumn we therefore add an electric site heater. First the room warms up, then the dehumidifier takes the moisture out of the air.",
      },
      {
        q: "Do you really deliver as far as Libramont, so far from Antwerp?",
        a: "Yes. It is one of our longer trips, about two hours via the E411. You choose a delivery date when you book and we agree the delivery time with you. You see what delivery costs in advance, when you book.",
      },
      {
        q: "How do I dry a stable converted into a house before the floor layer arrives?",
        a: "With a large dehumidifier in the middle, a fan blowing across the screed, and windows and doors kept shut. A stable with thick stone walls and a new concrete slab holds a lot of water. Have the residual moisture measured before the floor layer starts, and agree when you will measure again.",
      },
      {
        q: "Do you mean the Belgian province of Luxembourg or the Grand Duchy?",
        a: "The Belgian province. Libramont-Chevigny lies in the Belgian province of Luxembourg, and that is where we deliver. The province shares its name with the neighbouring country, but the Grand Duchy of Luxembourg is not part of our delivery area.",
      },
    ],
    realisaties: [],
  },
  leglise: {
    slug: "leglise",
    title: "Léglise dehumidifier hire by the Anlier Forest | Vernast",
    description:
      "Dehumidifier hire in Léglise, Mellier, Witry or Ebly: homes by the Anlier Forest, old farmhouses and new builds. Delivered and set up by a technician.",
    h1: "Construction dehumidifier hire in Léglise",
    kicker: "Province of Luxembourg · on the edge of the Anlier Forest",
    rit: { afstand: "about 215 km", tijd: "over two hours" },
    intro: [
      "Léglise lies in the south of the province of Luxembourg, **between Neufchâteau and Habay**. A large part of the municipality lies in **the Anlier Forest**, an extensive woodland with ponds in its clearings. From Aartselaar it takes us over two hours to get there.",
      "The municipality is large and rural, with scattered villages. Besides Léglise itself it includes **Assenois, Ebly, Mellier and Witry**. Stone Ardennes farmhouses stand around the old village centres, and new homes are appearing on the village edges, often close to the forest.",
    ],
    bouw: {
      kop: "Farmhouses on the forest edge and new builds on wet ground",
      alineas: [
        "Close to the forest **the air stays damp**, and a façade dries slowly after rain. An old farmhouse on the edge of the Anlier Forest, with thick stone walls, is therefore rarely completely dry. If you renovate such a farmhouse, the new plasterwork stays wet for a long time. **A dehumidifier with a fan** next to it speeds that up.",
        "In some places the ground is heavy and wet, with ponds and streams nearby. On a new build on such a plot the outside air is rarely dry, and **ventilating alone is not enough** to dry the screed or plasterwork. When setting up, the technician takes a **moisture reading** of floor and wall, so you know later when you can start the finishing work.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a renovated farmhouse on the forest edge**, floor by floor: up to 70 litres a day, for rooms of up to about 400 m³." },
      { key: "ttk650", waarom: "**For a new build with screed across the whole ground floor.** Up to 110 litres a day, for rooms of up to about 600 m³." },
      { key: "radiaal2250", waarom: "Blows directly **across fresh screed**, so the floor dries evenly even in damp surroundings." },
      { key: "revolution", waarom: "**For a cold cellar or an outbuilding** of an old farmhouse. This desiccant dehumidifier keeps working where it is too cold for a condensation dehumidifier." },
    ],
    levering: {
      kop: "Delivery in Léglise: one of our longest trips",
      alinea:
        "Léglise lies in the south of the province. The drive from Aartselaar via Brussels, Namur and the E411 takes **over two hours**. You choose a delivery date when you book, and we agree the time with you so we can combine deliveries in the area. Give the right village and the full address: the villages lie **far apart**, sometimes on opposite sides of the forest.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar: not for anyone living in Léglise",
      alinea:
        "Our collection point is over two hours from Léglise. There and back you are **on the road for over four hours**, and you make that trip twice. That does not outweigh having the units delivered. The technician brings them right to the site, sets them up and collects them again after the hire period.",
    },
    buren: ["neufchateau", "habay", "fauvillers", "vaux-sur-sure"],
    faq: [
      {
        q: "Is this the province of Luxembourg in Belgium or the Grand Duchy?",
        a: "Léglise lies in the Belgian province of Luxembourg, not in the Grand Duchy. The two are often confused, because they border each other and share the same name. If you have a site in the Grand Duchy, please contact us first.",
      },
      {
        q: "Why is my new build on the forest edge drying so slowly?",
        a: "Because the outside air there is rarely dry. If you ventilate, you bring damp air in rather than taking the moisture out. Keep the windows shut and put a construction dehumidifier on the ground floor. A fan across the floor speeds up the drying of screed and plasterwork.",
      },
      {
        q: "Do you also deliver in Assenois and Ebly?",
        a: "Yes, in all the villages of Léglise. The municipality is large, so give the full address when you book. You choose a delivery date, we agree the time with you and plan the route so the technician arrives at the right address straight away.",
      },
      {
        q: "How many weeks should I hire a dehumidifier for an old stone farmhouse?",
        a: "Think weeks rather than days. Thick stone walls with lime mortar release their water slowly, especially in damp forest surroundings. Hire for a first period and use the reading at the start as a reference point. If the walls are still too wet, you can extend.",
      },
    ],
    realisaties: [],
  },
  neufchateau: {
    slug: "neufchateau",
    title: "Construction dehumidifiers to hire in Neufchâteau | Vernast",
    description:
      "Dehumidifier hire in Neufchâteau, Longlier or Hamipré? We deliver construction dehumidifiers for stone village houses and new builds in Belgian Luxembourg.",
    h1: "Construction dehumidifier hire in Neufchâteau",
    kicker: "Province of Luxembourg · district capital on the high ground",
    rit: { afstand: "about 205 km", tijd: "over two hours" },
    intro: [
      "Neufchâteau is **the capital of the district of the same name** in the Belgian province of Luxembourg. The small town lies south of Libramont, close to the E411, and outside the centre **the Lake of Neufchâteau** lies in the forest. From Aartselaar we get there in just over two hours.",
      "The municipality also includes Longlier, Hamipré, Grapfontaine and Tournay. It is a rural municipality with **plenty of forest and pasture**, where old village houses alternate with newer homes along the roads into town.",
    ],
    bouw: {
      kop: "Stone village houses and homes on the forest edge",
      alineas: [
        "The older houses in the centre and the villages are built of natural stone, with slate roofs and walls that are sometimes half a metre thick. Such a wall has **no damp-proof course** and stays cold in winter. If you have new plasterwork put on, you are drying a cold, heavy mass, not a thin interior wall.",
        "On the forest edge and around the lake the air is often damp, and in the morning the mist lingers for a long time. A new-build house that is made weathertight there will not lose its construction moisture by ventilating. **A dehumidifier with windows and doors shut** works faster than an open window that lets damp outside air in.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**For a single room with new plasterwork in a stone village house.** Compact, up to 50 litres a day in rooms of up to about 250 m³." },
      { key: "ttk350", waarom: "For **a new-build house along the roads into Neufchâteau**, where screed and plasterwork have to dry at the same time: 70 litres a day." },
      { key: "ttv4500", waarom: "A layer of saturated air hangs against a thick natural-stone wall. This fan, at 4,500 m³/h, blows it away so the dehumidifier can get to work on it." },
      { key: "teddh20", waarom: "**For a smaller room** in an old house that went through the winter unheated. This 20 kW heater on 400 V first brings the room above 15 °C, and then the drying starts." },
    ],
    levering: {
      kop: "Delivery in Neufchâteau and the villages",
      alinea:
        "We drive **just over two hours** to Neufchâteau. You choose a delivery date when you book, and because we deliver **by appointment** in Wallonia, we call ahead to fix the time. In a village centre with narrow streets the technician brings a hand truck. He places each unit in the room where it needs to be and switches it on.",
    },
    afhalen: {
      kop: "Collecting it yourself from Neufchâteau",
      alinea:
        "To Aartselaar and back you are **on the road for over four hours**. Add the return trip, and collecting costs you two half days. A dehumidifier is also heavy and has to stand upright in the car. **Delivery is the obvious choice here.**",
    },
    buren: ["libramont-chevigny", "leglise", "bertrix", "vaux-sur-sure"],
    faq: [
      {
        q: "Why is my stone house in Neufchâteau drying so slowly after a renovation?",
        a: "A natural-stone wall without a damp-proof course is thick and cold, and gives up its water slowly. That is down to the wall, not the dehumidifier. Think weeks rather than days, and have a moisture reading taken at the start as a reference point.",
      },
      {
        q: "Can I open the window while the dehumidifier is running?",
        a: "Better not. Around Neufchâteau the outside air is often damp itself, especially near the forest and the lake. With an open window the unit also dries the outside air and the drying takes longer. Keep windows and doors shut while the dehumidifier is running.",
      },
      {
        q: "Who should be on site when the technician delivers?",
        a: "Questions? Feel free to email or call us. When you book, also tell us who will meet the technician on site, so we can arrange delivery and collection with the right person.",
      },
      {
        q: "How many units do I need for a village house in Longlier or Hamipré?",
        a: "For a two-storey house, one dehumidifier per floor is often enough, possibly with a fan in the wettest room. When you book, give the floor area and what has been renewed, and we will put together the right combination for your house.",
      },
    ],
    realisaties: [],
  },
  paliseul: {
    slug: "paliseul",
    title: "Dehumidifier hire in Paliseul, above the Semois | Vernast",
    description:
      "Dehumidifier hire in Paliseul, Maissin, Carlsbourg or Opont: Ardennes villages above the Semois, old farmhouses and new builds. Delivered by a technician.",
    h1: "Construction dehumidifier hire in Paliseul",
    kicker: "Province of Luxembourg · villages on the plateau between forest and meadow",
    rit: { afstand: "about 190 km", tijd: "about two hours" },
    intro: [
      "Paliseul lies **on the Ardennes plateau**, north of the Semois valley. Besides Paliseul itself, the municipality includes Carlsbourg, Maissin, Offagne, Fays-les-Veneurs, Nollevaux and Opont. Each village has a centre of stone houses, surrounded by pasture and forest. From Aartselaar it takes us about two hours to get there.",
      "On the high ground the landscape is open, on the slopes it is wooded. You live higher and drier here than in the valley, but **the Ardennes winter is cold and wet**. A site therefore stands idle for longer than in Flanders, and whatever is poured or plastered in the autumn dries slowly.",
    ],
    bouw: {
      kop: "Old rubble-stone farmhouses and conversions into homes",
      alineas: [
        "In the villages there are many **long-fronted farmhouses and old barns** in rubble stone, with slate roofs. If you convert such a barn into a home, you pour a new floor on ground that was never dry and plaster walls that have only known hay and livestock. That means a lot of construction moisture. When setting up, the technician takes a **moisture reading** and places the units where the moisture is highest.",
        "New homes are also going up on the plateau, often with **screed over underfloor heating**. That heating may only be switched on once the screed is old enough, and then following the supplier's heating-up schedule. In the weeks before that, **a dehumidifier and a fan** dry the floor.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a converted farmhouse or barn.** Up to 70 litres a day in rooms of up to about 400 m³, enough for a rubble-stone ground floor with new plasterwork." },
      { key: "radiaal2250", waarom: "Blows **across screed over underfloor heating** while the heating may not yet be switched on, so the floor dries evenly." },
      { key: "teddh20", waarom: "An **uninsulated barn** does not get above fifteen degrees by itself in winter. This heater on 400 V first brings the room up to temperature." },
      { key: "ttk170", waarom: "**For a single room or a bathroom** in a village house. Compact, up to 50 litres a day, for rooms of up to about 250 m³." },
    ],
    levering: {
      kop: "Delivery in Paliseul: from the E411 to the villages",
      alinea:
        "We drive past Namur down the E411 and take the country roads across the plateau for the last stretch. **Allow about two hours.** You choose a delivery date when you book; we agree the time with you. The villages lie far apart, so give **the right village and how to reach the site**. If the farmhouse has a yard or an unpaved drive, mention it, so the technician knows where he can unload.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar: a long day on the road",
      alinea:
        "Our collection point is about two hours from Paliseul. There and back you are **on the road for about four hours**, and again when you return the units. Let us deliver: you do not lose a day on the E411, and the technician puts the dehumidifier in the right spot straight away.",
    },
    buren: ["bouillon", "bertrix", "libin", "bievre"],
    faq: [
      {
        q: "I am converting an old barn into a home. How many dehumidifiers do I need?",
        a: "That depends on the volume and on the amount of new screed and plasterwork. A barn is often high and open, so the volume turns out larger than the floor area suggests. Give the dimensions when you book, and we will match the number of units to them.",
      },
      {
        q: "Can I use the underfloor heating to dry the screed?",
        a: "Only once the screed is old enough, and then following the supplier's heating-up schedule. Heating up too early or too hard can cause cracks. In the weeks before that, a construction dehumidifier and a fan dry the floor without that risk, even in a cold Ardennes winter.",
      },
      {
        q: "Do you also deliver in Opont and Nollevaux?",
        a: "Yes, in all the villages of Paliseul. They are spread across the plateau, so we ask for the full address and a short description of the access. You choose a delivery date, we agree the time with you and the technician knows in advance where he needs to be.",
      },
      {
        q: "Can you help me choose the right units for my booking?",
        a: "Questions? Feel free to email or call us. If you are unsure about a step in the booking or about which units to choose, we will help you.",
      },
    ],
    realisaties: [],
  },
  "saint-hubert": {
    slug: "saint-hubert",
    title: "Saint-Hubert construction dehumidifier hire | Vernast",
    description:
      "Dehumidifier hire in Saint-Hubert, Arville or Mirwart? We deliver and install units in old houses around the basilica and in homes in the forest villages.",
    h1: "Construction dehumidifier hire in Saint-Hubert",
    kicker: "Province of Luxembourg · the basilica in the forest",
    rit: { afstand: "about 185 km", tijd: "about two hours" },
    intro: [
      "Saint-Hubert, Sint-Hubert in Dutch, grew up around **the basilica of Saint Hubert**, the patron saint of hunters. The small town lies in the middle of **the vast forests** of the Ardennes, about two hours' drive from our warehouse in Aartselaar.",
      "The municipality also includes Arville, Awenne, Hatrival, Mirwart and Vesqueville, villages in clearings in the forest. Mirwart is known for its castle. It is a sparsely populated area, where **the houses are often far apart**.",
    ],
    bouw: {
      kop: "Old town houses around the basilica and homes in the forest villages",
      alineas: [
        "In the centre, older houses of stone and brick stand close together around the basilica and the square. Many have a cellar and walls without a damp-proof course. When renovating, you want to know whether the water in the wall is construction moisture or rising damp. **A moisture reading at several heights** makes that difference visible.",
        "In the forest villages it stays damp for a long time after a wet spell, because the trees block the sun and the ground dries slowly. A second home that stood unheated through the winter has **cold walls and damp air** inside. There the drying starts with heat, and only then with a dehumidifier.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**For a cold cellar in the centre.** This desiccant dehumidifier still absorbs moisture at low temperatures and dries via ducts." },
      { key: "teddh20", waarom: "For **a holiday home in the forest that went through the winter unheated**. The 20 kW heater on 400 V brings the room above 15 °C, so the dehumidifier then works efficiently." },
      { key: "ttk350", waarom: "For a town house near the basilica being renovated floor by floor: 70 litres a day, in rooms of up to about 400 m³." },
      { key: "ttv4500", waarom: "Gets the still, damp air moving in a house that has been shut up for a long time, so **the dehumidifier reaches the whole volume**." },
    ],
    levering: {
      kop: "Delivery in Saint-Hubert and the forest villages",
      alinea:
        "From Aartselaar we drive for **about two hours**, the last stretch off the E411 and through the forest. You choose a delivery date when you book, and we agree the time with you by appointment. If your home is on a forest track or an unpaved drive, **mention it when you book**. Then the technician knows how far the van can go.",
    },
    afhalen: {
      kop: "Collecting from Saint-Hubert",
      alinea:
        "Our collection point is in Aartselaar, about two hours away. Collecting and returning together cost you **about eight hours in the car**. Better to have the units delivered: the technician places them in the right room straight away.",
    },
    buren: ["libin", "libramont-chevigny", "nassogne", "tellin", "tenneville"],
    faq: [
      {
        q: "Can a dehumidifier dry out a holiday home in the forest around Saint-Hubert?",
        a: "Yes, as long as the moisture comes from inside: condensation after a cold winter or construction moisture after building work. Start with a heater to warm up the walls and then switch on the dehumidifier. If water is getting in through the roof or a wall, have that repaired first.",
      },
      {
        q: "Which unit suits a cold cellar in the centre?",
        a: "In a cold cellar a desiccant dehumidifier works better than a condensation dehumidifier, because it works with a drying agent and depends less on the temperature. If the water comes back after every shower of rain, it is rising damp and drying will not solve the problem for good.",
      },
      {
        q: "Can the van reach a house on a forest track?",
        a: "Often it can, but not every forest track is suitable. When you book, tell us whether the track is paved and how far the house is from the road. Then the technician brings a hand truck and agrees with you where he can stop.",
      },
      {
        q: "Do you take the hunting season around Saint-Hubert into account?",
        a: "During a driven hunt some forest tracks are temporarily closed. If you know there will be hunting near you on the day of delivery or collection, let us know. Then we adjust the route and the delivery time accordingly.",
      },
    ],
    realisaties: [],
  },
  tellin: {
    slug: "tellin",
    title: "Dehumidifier hire in Tellin, Famenne and Ardennes | Vernast",
    description:
      "Dehumidifier hire in Tellin, Bure, Grupont or Resteigne? We deliver and install units in limestone houses on the edge of the Famenne and the Ardennes.",
    h1: "Construction dehumidifier hire in Tellin",
    kicker: "Province of Luxembourg · on the edge of the Famenne and the Ardennes",
    rit: { afstand: "about 170 km", tijd: "almost two hours" },
    intro: [
      "Tellin lies **on the border between the Famenne and the Ardennes**, on the narrow limestone strip known as the **Calestienne**. South of the village begins the forest that runs all the way to Saint-Hubert. From Aartselaar it takes us almost two hours to get there.",
      "The municipality also includes Bure, Grupont and Resteigne. Grupont lies in the valley of the Lomme, Resteigne with its castle on the Lesse. Within a few kilometres you drive here from **open limestone grassland into dense forest**.",
    ],
    bouw: {
      kop: "Limestone houses and houses in the valley",
      alineas: [
        "The older homes here are often built of the local **grey limestone**. It is a hard, cold stone, and in a wall without a damp-proof course ground moisture can rise at the bottom. After a renovation with new plasterwork you want to get the construction moisture out quickly, without confusing it with rising damp.",
        "In Grupont and Resteigne houses stand close to the water, where the ground is wet and the air is damp in the morning. A ground floor or cellar in the valley dries best after building work with windows and doors shut, and with **a dehumidifier that keeps working at low temperatures**.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a limestone village house being fully renovated.** Up to 70 litres a day, in rooms of up to about 400 m³." },
      { key: "revolution", waarom: "For **a cellar in the valley of the Lomme or the Lesse**, where it stays too cold for a condensation dehumidifier. This desiccant dehumidifier works via ducts." },
      { key: "ttv4500", waarom: "A layer of wet air hangs against a cold limestone wall. This fan blows it away, so **the wall dries faster**." },
      { key: "teddh30", waarom: "For **a large renovation in Bure or Tellin** in spring. The 30 kW heater on three-phase power brings an unheated volume above 15 °C, where the dehumidifier works efficiently." },
    ],
    levering: {
      kop: "Delivery in Tellin, Bure, Grupont and Resteigne",
      alinea:
        "Tellin lies close to the E411, **almost two hours** from Aartselaar. You fix the delivery date when you book. Because we deliver **by appointment** in Wallonia, we set the time together with you and combine your address with other deliveries around the Famenne. The technician places the units and shows you where the condensate goes.",
    },
    afhalen: {
      kop: "Collecting from Tellin",
      alinea:
        "To Aartselaar and back you drive for **almost four hours**, without traffic jams on the Brussels ring road. If you collect, you make that trip twice. **Delivery is the practical choice here.**",
    },
    buren: ["wellin", "rochefort", "nassogne", "saint-hubert"],
    faq: [
      {
        q: "Is the moisture in a limestone wall in Tellin construction moisture or rising damp?",
        a: "That depends on where it is and whether it comes back. Construction moisture is spread through fresh plasterwork and disappears with drying. Rising damp sits at the bottom of the wall and keeps coming back. A moisture reading at several heights makes the difference clear.",
      },
      {
        q: "How do I dry a house in Grupont close to the Lomme?",
        a: "Keep windows and doors shut, because the air in the valley is often damp itself. Put the dehumidifier in the wettest room and a fan against the coldest wall. In a cold cellar a desiccant dehumidifier works better than a condensation dehumidifier.",
      },
      {
        q: "How long does a dehumidifier stay in a renovated limestone house?",
        a: "That depends on the thickness of the plasterwork or screed, the temperature and the humidity. Thick, cold walls dry more slowly than a thin interior wall. Have the residual moisture measured before you start finishing, and extend the hire if the readings are still too high.",
      },
      {
        q: "Do you also deliver in the Famenne?",
        a: "Yes, Tellin is within our delivery area, although it is one of the longer trips. That is why we bundle deliveries in the area. You choose a delivery date and we agree the time with you, so you do not have to wait at home all day.",
      },
    ],
    realisaties: [],
  },
  wellin: {
    slug: "wellin",
    title: "Wellin construction dehumidifiers for hire | Vernast",
    description:
      "Dehumidifier hire in Wellin, Halma, Chanly or Sohier? We deliver and install units in natural-stone village houses and converted farmhouses on the Calestienne.",
    h1: "Construction dehumidifier hire in Wellin",
    kicker: "Province of Luxembourg · natural-stone villages on the Calestienne",
    rit: { afstand: "about 165 km", tijd: "just over an hour and a half" },
    intro: [
      "Wellin lies **in the north-west of the Belgian province of Luxembourg**, against the border with the province of Namur and close to the E411. The municipality sits on the limestone ridge of the **Calestienne**, between the flat Famenne to the north and the wooded Ardennes to the south. From Aartselaar we get there in just over an hour and a half.",
      "The municipality also includes Halma, Chanly, Lomprez and Sohier. They are **small villages of grey natural stone**, with farmhouses and village houses around the church and pasture and forest in between.",
    ],
    bouw: {
      kop: "Natural stone, limestone ground and old farmhouses",
      alineas: [
        "On the Calestienne rainwater quickly drains away into the limestone subsoil, but the houses themselves are built of **cold limestone**. A renovated village house in Sohier or Chanly therefore has thick walls that stay cold for a long time, even once the heating is back on. With **a site heater at the start**, the dehumidifier reaches full output sooner.",
        "Many old farmhouses here are being converted into homes or holiday homes. That brings a new floor, insulation and a lot of plasterwork, in **a large, high volume**. There we place a large dehumidifier and a fan that circulates the air, so no wet corners are left behind.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a farmhouse being converted into a holiday home.** Up to 110 litres a day, for volumes of up to about 600 m³." },
      { key: "teddh20", waarom: "Warms **a cold natural-stone room** in Sohier or Chanly to above 15 °C, so a condensation dehumidifier works efficiently. Needs a 400 V connection." },
      { key: "ttk170", waarom: "For **a bathroom or bedroom** in a village house in Wellin: compact, 50 litres a day and 0.75 kW." },
      { key: "ttv4500", waarom: "Circulates the air in **a high room under the roof of a farmhouse**, at 4,500 m³/h with a consumption of 0.2 kW." },
    ],
    levering: {
      kop: "Delivery in Wellin and the surrounding villages",
      alinea:
        "Wellin is **just over an hour and a half** from Aartselaar, via the Brussels ring road and the E411. You choose the delivery date yourself when you book. In Wallonia we deliver by appointment, so we can combine your address with other deliveries around Rochefort and the Famenne. The technician places the units room by room and takes **a first moisture reading**.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar from Wellin",
      alinea:
        "From Wellin you are **on the road for over three hours** there and back, and you make that trip twice. A dehumidifier is heavy and has to be transported upright. **Better to have the units delivered.**",
    },
    buren: ["tellin", "rochefort", "daverdisse"],
    faq: [
      {
        q: "How do I tackle a converted farmhouse in Wellin with dehumidifiers?",
        a: "Work by zone: a large dehumidifier in the room with the new floor, a smaller one in the bedrooms with fresh plasterwork and a fan for the high rooms. Give the floor area and what has been renewed when you book, and we will put the combination together.",
      },
      {
        q: "Why does a natural-stone wall in Sohier stay cold for so long?",
        a: "Limestone is heavy and dense, and a wall of half a metre or more warms up slowly. As long as the wall is cold, moisture condenses on it. A heater at the start and a dehumidifier with windows and doors shut solve that faster.",
      },
      {
        q: "Can I hire a dehumidifier for a holiday home I do not live in myself?",
        a: "Yes. When you book, agree who will let the technician in at delivery and collection. Ask during set-up how the condensate is drained, so the dehumidifier does not stop with a full tank while you are away.",
      },
      {
        q: "How long is the drive from Aartselaar to Wellin?",
        a: "Just over an hour and a half via the Brussels ring road and the E411, longer at rush hour. After you book with a delivery date, we call to agree the time. That way you do not have to keep the whole day free.",
      },
    ],
    realisaties: [],
  },
  attert: {
    slug: "attert",
    title: "Construction dehumidifier hire in Attert, Belgium | Vernast",
    description:
      "Dehumidifier hire in Attert: for new builds and converted farmhouses in the Attert valley, north of Arlon. Delivery by appointment, set up by our technician.",
    h1: "Construction dehumidifier hire in Attert",
    kicker: "Province of Luxembourg · the Attert valley",
    rit: { afstand: "about 230 km", tijd: "over two hours" },
    intro: [
      "Attert lies **north of Arlon**, in the valley of the river of the same name, which flows on into the Grand Duchy of Luxembourg. The municipality includes villages such as Nobressart, Nothomb, Thiaumont and Tontelange. The valley is a **nature park**.",
      "Many residents work in the Grand Duchy. As a result, **new homes** stand next to the old, elongated farmhouses, and each needs a different approach to drying. Our technician drives over two hours to get there.",
    ],
    bouw: {
      kop: "New homes on the village edge, old farmhouses in the valley",
      alineas: [
        "In a new-build house the water is mainly in **the screed and the plasterwork**. It has to come out before the parquet or the tiles are laid. A house on open land cools down quickly, and in a cold room fresh screed dries slowly. A radial fan blowing low across the floor makes the top layer dry evenly.",
        "In the **natural-stone farmhouses** the work is mostly conversion: a barn or stable becomes living space, with thick walls without a damp-proof course and often a new floor slab. Part of that moisture was there long before the work started. So first have it measured which part is construction moisture, because that is all a dehumidifier removes.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a new-build house on the village edge**: 70 litres a day, for a volume of up to about 400 m³." },
      { key: "radiaal2250", waarom: "This radial fan (2,250 m³/h) blows **low and directly across fresh screed**, so the floor dries evenly." },
      { key: "ttk650", waarom: "For **a converted barn or stable** with a large volume and thick stone walls: 110 litres a day, up to about 600 m³." },
      { key: "teddh20", waarom: "Brings **an unheated house** above 15 °C, so the dehumidifier works properly. This 20 kW heater needs three-phase power (400 V)." },
    ],
    levering: {
      kop: "Delivery in Attert: a long trip, well planned",
      alinea:
        "Attert is over two hours' drive from Aartselaar, beyond Namur and Arlon. You choose **a delivery date** when you book. We then agree the delivery time by phone or email. If the house is on a narrow country lane or behind a yard with a gate, describe the access. That way the technician knows in advance how to bring the units in.",
    },
    afhalen: {
      kop: "Collecting it yourself rarely makes sense from Attert",
      alinea:
        "There and back to Aartselaar you drive for **over four hours**, and that costs you a working day. A dehumidifier also has to be transported upright. Better to have it delivered, so it is set up properly straight away.",
    },
    buren: ["aarlen", "habay"],
    faq: [
      {
        q: "How long does screed need to dry in a new build in Attert?",
        a: "That depends on the thickness, the type of screed and the temperature in the house. With a dehumidifier, the windows shut and a fan across the floor it goes faster than on its own. Have the residual moisture measured before the floor layer starts.",
      },
      {
        q: "Can I use a construction dehumidifier in a converted farmhouse?",
        a: "Yes, for the construction moisture from new screed, plasterwork and mortar. An old stone wall without a damp-proof course does draw moisture up from the ground, and a dehumidifier does not solve that for good. So have it measured how wet the walls are and where the moisture comes from.",
      },
      {
        q: "Do you also deliver in the smallest villages of the Attert valley?",
        a: "Yes, throughout the municipality, including the smaller hamlets. Give the full address when you book and describe the access. A narrow drive or a yard with a gate is no problem if the technician knows about it in advance.",
      },
      {
        q: "Is this about Attert in Belgium?",
        a: "Yes. Attert is a municipality in the Belgian province of Luxembourg, between Arlon and the border with the Grand Duchy. For a site on the other side of the border, it is best to contact us first.",
      },
    ],
    realisaties: [],
  },
  aubange: {
    slug: "aubange",
    title: "Dehumidifier hire in Aubange, Athus and Halanzy | Vernast",
    description:
      "Dehumidifier hire in Aubange, Athus or Halanzy: for renovated workers' houses and new builds by the three-border point. Delivered and set up by appointment.",
    h1: "Construction dehumidifier hire in Aubange",
    kicker: "Province of Luxembourg · at the three-border point",
    rit: { afstand: "about 245 km", tijd: "about two and a half hours" },
    intro: [
      "Aubange lies in the south-eastern corner of the province of Luxembourg. At Athus, Belgium, France and the Grand Duchy of Luxembourg meet at a **three-border point**. **Aix-sur-Cloie, Battincourt, Halanzy and Rachecourt** also belong to the municipality.",
      "Athus was a steel town for a long time: the blast furnaces shaped its streets until they closed in the 1970s. Today many people living here **work across the border**. Old buildings are being renovated and new homes are going up on the village edges. It takes us about two and a half hours to get there.",
    ],
    bouw: {
      kop: "Workers' houses in Athus, new builds on the edge",
      alineas: [
        "In Athus there are many **terraced houses from the days of the steel industry**: narrow, deep and often with a cellar without a damp-proof course. Anyone doing up such a house puts new plasterwork and sometimes new screed into small rooms. A compact unit per floor, with the door shut, dries better there than one large unit in the hallway.",
        "On the edges of the villages **new houses and flats** are going up. There the handover date is fixed and the screed has to be dry before the floor layer arrives. A fan that moves the air through the whole house also helps dry out the wettest corners.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**For a workers' house in Athus** being renovated room by room: 50 litres a day, compact enough for a narrow staircase." },
      { key: "ttk350", waarom: "For **a new build in Halanzy or Aix-sur-Cloie** with fresh screed and plasterwork: 70 litres a day, up to about 400 m³." },
      { key: "ttv4500", waarom: "In **a narrow, deep terraced house** this fan (4,500 m³/h) sends the dry air to the back, where the dehumidifier itself cannot reach." },
      { key: "teddh30", waarom: "**For a cellar or ground floor that stays cold in winter**: first warm it up above 15 °C, then dry. This heater needs three-phase power (400 V)." },
    ],
    levering: {
      kop: "Delivery in Aubange: all the way to the south-eastern corner of the country",
      alinea:
        "To Aubange we drive about two and a half hours, via the E411 to beyond Arlon. It is one of our longest trips. You choose **a delivery date** when you book, and because it is in Wallonia, we deliver by appointment. The technician puts the units in place and sets them up.",
    },
    afhalen: {
      kop: "Collecting from Aubange: better to choose delivery",
      alinea:
        "To our collection point in Aartselaar and back you are **on the road for about five hours**, without traffic jams. For one or two dehumidifiers that is rarely worth it. With delivery you also do not have to get a heavy unit upright into your car.",
    },
    buren: ["messancy", "musson"],
    faq: [
      {
        q: "Do you also deliver from Aubange into France or the Grand Duchy?",
        a: "We deliver throughout Aubange, including Athus right by the three-border point. If your site is on the French or Luxembourg side of the border, please contact us first. Then we will look together at what is possible.",
      },
      {
        q: "How do I dry an old terraced house in Athus after a renovation?",
        a: "Put a compact dehumidifier on each floor, keep windows and doors shut and, if needed, let a fan move the air from front to back. A cellar without a damp-proof course stays cool and dries more slowly. A site heater next to the dehumidifier helps there.",
      },
      {
        q: "How do I plan a delivery in Aubange?",
        a: "You book online and choose a delivery date. Because the drive takes about two and a half hours, we agree the delivery time with you. Preferably book in good time, especially if the floor layer is already scheduled.",
      },
      {
        q: "My contractor will be on site. What should I tell you in advance?",
        a: "Questions? Feel free to email or call us. If you are working with a contractor or floor layer, it helps if you tell us in advance who the contact person on site is and when.",
      },
    ],
    realisaties: [],
  },
  martelange: {
    slug: "martelange",
    title: "Martelange dehumidifier hire on the Sûre | Vernast",
    description:
      "Dehumidifier hire in Martelange: for stone houses in the Sûre valley and new builds along the N4, by the border. Delivery by appointment, units set up for you.",
    h1: "Construction dehumidifier hire in Martelange",
    kicker: "Province of Luxembourg · on the Sûre and the N4",
    rit: { afstand: "about 210 km", tijd: "over two hours" },
    intro: [
      "Martelange is a small municipality in the valley of **the Sûre**, which forms the border with the Grand Duchy of Luxembourg here. Anyone driving south on the **N4** knows the row of petrol stations on the Luxembourg side of the road.",
      "The village has a long history as a **slate village**. Slate was quarried in the hills around the valley, and you can still see it in the roofs and façades of the older houses. From Aartselaar we get there in just over two hours.",
    ],
    bouw: {
      kop: "Slate and natural stone in a narrow river valley",
      alineas: [
        "Many older houses stand **against the slope of the valley**, with natural-stone walls and a cellar half set into the ground. On the hill side that cellar is cold and damp. After a renovation with new plasterwork you want to know which moisture comes from the work and which from the slope. A moisture reading makes that clear.",
        "Along the N4 and on the edge of the village there is also renovation and new building. In a river valley **damp air lingers for a long time**, and the winters are cold. Keep the windows shut, let a fan move the air and add a site heater in winter.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**For a cold cellar on the hill side**: this desiccant dehumidifier keeps absorbing moisture in the cold and can dry in a targeted way via ducts." },
      { key: "ttk170", waarom: "For **a room or bathroom in an old stone house**: compact, 50 litres a day, for a volume of up to about 250 m³." },
      { key: "teddh20", waarom: "First brings **an unheated floor** above 15 °C, so a condensation dehumidifier gets going. This 20 kW heater runs on 400 V." },
      { key: "ttv4500", waarom: "Along **a thick natural-stone wall** this fan keeps the air moving, so the dehumidifier absorbs the moisture faster." },
    ],
    levering: {
      kop: "Delivery in Martelange: via the E411 and the N4",
      alinea:
        "We drive for over two hours, via Brussels and Namur to the E411 and the last stretch on the N4. You fix **a delivery date** when you book, and we decide the time together. If the house is on the steep side of the valley, let us know in advance. Then the technician knows how to bring the units in.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar: four hours' driving for one unit",
      alinea:
        "There and back to our collection point you are **on the road for over four hours**. That is a full day for a unit we come and deliver and set up in a single trip. Collecting only pays off if you are near Antwerp anyway.",
    },
    buren: ["fauvillers", "attert"],
    faq: [
      {
        q: "Martelange is on the border. Do you deliver on both sides of the Sûre?",
        a: "We deliver throughout Martelange, on the Belgian side of the river. If the address is on the other bank, in the Grand Duchy, please contact us first. Then we will see whether and when we can deliver.",
      },
      {
        q: "Does a construction dehumidifier help in an old house of slate and natural stone?",
        a: "For construction moisture after a renovation, yes: from new plasterwork, new screed or fresh mortar between the stones. A wall without a damp-proof course that stands against the slope can, however, keep bringing in moisture. A moisture reading shows which of the two you have.",
      },
      {
        q: "How long is the drive from Aartselaar to Martelange?",
        a: "Allow over two hours, and longer at rush hour around Brussels or Namur. That is why we agree the delivery time with you, so you do not have to wait all day for the technician.",
      },
      {
        q: "My cellar stays cold, even in summer. Which dehumidifier should I choose?",
        a: "If the cellar stays below about 15 °C all year round, a condensation dehumidifier gets little out of it. A desiccant dehumidifier does work there. If you can heat the cellar, a site heater next to a condensation dehumidifier is also an option.",
      },
    ],
    realisaties: [],
  },
  messancy: {
    slug: "messancy",
    title: "Dehumidifier hire in Messancy, south of Arlon | Vernast",
    description:
      "Dehumidifier hire in Messancy, Habergy or Wolkrange: for new builds with screed and converted village houses south of Arlon. Delivered and set up for you.",
    h1: "Construction dehumidifier hire in Messancy",
    kicker: "Province of Luxembourg · south of Arlon",
    rit: { afstand: "about 235 km", tijd: "over two hours" },
    intro: [
      "Messancy lies **between Arlon and Aubange**, in the south of the province of Luxembourg, with the border with the Grand Duchy on its eastern side. The municipality also includes **Habergy, Hondelange, Sélange, Turpange and Wolkrange**.",
      "The municipality has grown strongly in recent decades. Luxembourg City is close by, and that attracts families who work across the border. As a result, **new housing estates** surround the old village centres. From Aartselaar it is a drive of over two hours.",
    ],
    bouw: {
      kop: "New housing estates around old village streets",
      alineas: [
        "Most of the work in Messancy is **new building**, with screed, plasterwork and often underfloor heating. The water is then mainly in the floor. With underfloor heating the screed first has to be dry enough before you may heat it up. A radial fan blowing across the floor speeds up the drying.",
        "The **older village houses** are long and deep, with the living area at the front and a barn behind. Anyone bringing that barn into the house has to dry a large volume with new floors and old walls. Then put a large unit in each zone and close the doors in between. That works better than one unit in the middle.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a new-build house on a housing estate**: 70 litres a day, for a volume of up to about 400 m³." },
      { key: "radiaal2250", waarom: "Blows **across fresh screed over underfloor heating**, so the top layer dries evenly. It delivers 2,250 m³/h and is rated IP55." },
      { key: "ttk650", waarom: "For **a village house whose barn is becoming living space**: a lot of new floor in a large volume, 110 litres a day." },
      { key: "ttv4500", waarom: "In **a long, deep village house** this fan sends the dry air from the living area to the converted barn." },
    ],
    levering: {
      kop: "Delivery in Messancy: via the E411, beyond Arlon",
      alinea:
        "Messancy is over two hours' drive from Aartselaar, and it is one of the furthest places we deliver to. You choose **a delivery date** when you book, and we agree the delivery time with you. The technician puts the units in place and sets them up.",
    },
    afhalen: {
      kop: "Collecting from Messancy: a day on the road",
      alinea:
        "To Aartselaar and back you drive for **over four hours**. If you need to be near Antwerp anyway, it is possible. Otherwise you are better off having the units delivered, especially for a new build where you need a fan as well as the dehumidifier.",
    },
    buren: ["aarlen", "aubange", "musson"],
    faq: [
      {
        q: "Can I use the underfloor heating to dry the screed faster?",
        a: "Only once the screed layer or the system manufacturer allows it, and then following a heating-up schedule. Heating up too early or too fast can make the screed crack. Meanwhile a dehumidifier with a fan across the floor takes the moisture out of the air, without that risk.",
      },
      {
        q: "How many dehumidifiers do I need for a new build in Messancy?",
        a: "For an ordinary family home, one medium-sized dehumidifier per floor is usually enough, with the windows shut and a fan across the wettest floor. For a large volume or a tight handover date, a larger unit is the better choice. The calculator works out your package.",
      },
      {
        q: "Do you come all the way from Antwerp to Messancy?",
        a: "Yes. It is a drive of over two hours via the E411. You choose a delivery date when you book and we agree the time with you. We plan the collection after the hire period in the same way.",
      },
      {
        q: "How do I dry a barn that is being joined onto the house?",
        a: "Treat the barn as a separate drying zone, with a large unit and the connecting door shut. The walls of a barn are often thick and cold, and the new floor holds a lot of water. A fan blowing low across the floor speeds up the drying of the screed.",
      },
    ],
    realisaties: [],
  },
  chiny: {
    slug: "chiny",
    title: "Dehumidifier hire in Chiny, on the Semois | Vernast",
    description:
      "Dehumidifier hire in Chiny, Jamoigne, Izel or Suxy: stone houses in the loop of the Semois and holiday homes by the forest. Delivered, set up and collected.",
    h1: "Construction dehumidifier hire in Chiny",
    kicker: "Province of Luxembourg · in a loop of the Semois",
    rit: { afstand: "about 215 km", tijd: "over two hours" },
    intro: [
      "Chiny lies **in a loop of the Semois**, where the Gaume gives way to the Ardennes. The village is known for **the boat trip down the Semois** to Lacuisine. To the north begins the forest of Chiny.",
      "**Jamoigne, Izel, Les Bulles, Termes and Suxy** also belong to the municipality. Around Jamoigne and Izel you see the chalky soil and the villages of the Gaume. Towards Suxy the landscape becomes **more wooded and rugged**. From Aartselaar we drive for over two hours to reach you.",
    ],
    bouw: {
      kop: "Houses low in the river valley and second homes",
      alineas: [
        "Along the Semois there are **old stone houses low in the valley**. In spring and autumn mist often hangs over the river and the outside air is damp. A cellar or ground floor right by the water therefore dries slowly. So keep **windows and doors shut** while the dehumidifier is running, even though ventilating seems logical.",
        "Many houses in the area are **second homes** that stand empty out of season. If you have such a house done up in winter, you are drying **a cold building**. Plaster and screed give off little moisture in the cold. A site heater next to the dehumidifier first brings the room above 15 °C.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**For a holiday home being done up room by room**: compact, 50 litres a day for rooms of up to 250 m³ and economical on an ordinary socket." },
      { key: "teddh30", waarom: "A house that stood empty all winter is cold right into the walls. **This 30 kW heater** brings a large volume up to temperature. It needs 400 V, so let us know in advance whether that connection is available." },
      { key: "revolution", waarom: "For **the cellar of a house right by the Semois**. The desiccant dehumidifier absorbs moisture even in a cold room and can dry in a targeted way via ducts." },
      { key: "ttk350", waarom: "In a full renovation in Jamoigne or Izel this unit dries **a ground floor with new screed and plaster** in one go: 70 litres a day, up to about 400 m³." },
    ],
    levering: {
      kop: "Delivery in Chiny: via the E411 and Neufchâteau",
      alinea:
        "The drive from Aartselaar goes **via Brussels, Namur and the E411** and then along regional roads to the Semois: about 215 km, over two hours. You fix the delivery date when you book, and we agree the time with you **by appointment**. If the house is on a narrow street or a slope, let us know in advance. That way the technician knows how to bring the units in.",
    },
    afhalen: {
      kop: "Collecting from Chiny costs you a full day",
      alinea:
        "To our collection point in Aartselaar and back is **over four hours' drive**, and the same again when you return the units. For a holiday home you are having renovated from a distance, that is rarely feasible. With a drying package, **delivery, installation and collection are included**.",
    },
    buren: ["florenville", "tintigny", "herbeumont", "neufchateau", "leglise"],
    faq: [
      {
        q: "I do not live in Chiny myself. Can you deliver to my holiday home without me?",
        a: "Yes, if someone on site opens the door, for example your contractor or a neighbour, and the power is on. When you book, tell us who will be there and how we can reach them. The technician explains to that person how the units work.",
      },
      {
        q: "Should I ventilate my house on the Semois while the dehumidifier is running?",
        a: "No. With open windows the dehumidifier takes moisture out of the outside air, and in the Semois valley that is often damp itself. Keep windows and outside doors shut. At most ventilate briefly if the technician recommends it during set-up.",
      },
      {
        q: "Does a construction dehumidifier work in a house that stood unheated all winter?",
        a: "Slowly, as long as the walls are cold. A condensation dehumidifier needs more than 15 °C to work well. In an unheated house we therefore add a site heater. In a cold cellar a desiccant dehumidifier remains the better choice.",
      },
      {
        q: "How long does it take you to get to Chiny?",
        a: "Over two hours for about 215 km, and more if traffic around Brussels is at a standstill. You choose the date yourself when you book. Because we deliver by appointment in Wallonia, we let you know in advance when the technician will arrive.",
      },
    ],
    realisaties: [],
  },
  florenville: {
    slug: "florenville",
    title: "Florenville dehumidifier hire near Orval | Vernast",
    description:
      "Dehumidifier hire in Florenville, Chassepierre, Lacuisine or Villers-devant-Orval near Orval Abbey: stone houses above the Semois, delivered and set up.",
    h1: "Construction dehumidifier hire in Florenville",
    kicker: "Province of Luxembourg · above the Semois, near Orval",
    rit: { afstand: "about 220 km", tijd: "over two hours" },
    intro: [
      "Florenville lies **on high ground above the Semois**, with a view over the valley. Down by the river lie Chassepierre and Lacuisine. In the south, against the French border, lies **Villers-devant-Orval** with Orval Abbey, known for its Trappist beer and cheese.",
      "**Muno, Fontenoille and Sainte-Cécile** also belong to the municipality. They are villages in a wooded strip where the Gaume and the Ardennes meet. From our warehouse in Aartselaar we drive **over two hours** to Florenville.",
    ],
    bouw: {
      kop: "Villages on the river and houses on the slope",
      alineas: [
        "In Chassepierre and Lacuisine the houses stand **close to the Semois**. The oldest have a cellar or ground floor without a damp-proof course. After a renovation such a house dries in two layers: the new plasterwork gives off moisture quickly, the thick stone wall behind it **slowly and for weeks**. A moisture reading makes that difference visible.",
        "On the slope up to the plateau the ground often lies **against the rear wall**. A room on that side has earth against the wall and becomes cold and damp after a wet spell. If you are fitting out a bathroom or bedroom there, put the dehumidifier in that room itself and **a fan against the wall on the hill side**.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a stone house on the Semois being fully renovated**: 70 litres a day, up to about 400 m³. Enough for a ground floor with new plasterwork and fresh screed." },
      { key: "ttv4500", waarom: "Against **the cold wall on the slope side** this fan removes the saturated layer of air. That way the dehumidifier gets a grip on the moisture in that wall." },
      { key: "revolution", waarom: "For a cellar or crawl space right by the river. **The desiccant dehumidifier also works in the cold** and dries via ducts, even under a floor." },
      { key: "ttk170", waarom: "For **a single room upstairs** or a bathroom in a holiday home: compact, up to 250 m³ and economical on an ordinary socket." },
    ],
    levering: {
      kop: "Delivery in Florenville: a long drive, well arranged",
      alinea:
        "Florenville is **about 220 km** from Aartselaar, via the Brussels ring road, the E411 and the regional road from Neufchâteau. You choose a delivery date when you book; in Wallonia we agree the delivery time **by appointment**. If a steep or narrow street leads to your house in Chassepierre or Lacuisine, let us know in advance.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar: from the Semois to the A12",
      alinea:
        "Collecting a single unit means **over four hours' driving there and back**, and the same again when you return it. From Florenville that rarely pays off. If you choose a drying package, **delivery, installation and collection are included**.",
    },
    buren: ["chiny", "herbeumont", "bouillon", "meix-devant-virton"],
    faq: [
      {
        q: "Do you also deliver in Villers-devant-Orval, close to the border with France?",
        a: "Yes, Villers-devant-Orval is part of Florenville and lies within our delivery area. Give the full address when you book and mention how to reach the site. We agree the delivery time with you in advance.",
      },
      {
        q: "My house is on the Semois. How long does the dehumidifier need to stay?",
        a: "That depends on what is wet. New plasterwork dries faster than a thick stone wall without a damp-proof course, which releases its water much more slowly. A moisture reading tells you when it is dry enough, not the calendar.",
      },
      {
        q: "What do I do with a room where the slope lies against the back wall?",
        a: "First have it measured whether the moisture comes from the renovation or from the ground against the wall. Construction moisture you dry with a dehumidifier and a fan against that wall. If the water comes back after every shower of rain, a dehumidifier is not a lasting solution.",
      },
      {
        q: "How far is Florenville from your warehouse?",
        a: "About 220 km, or over two hours' drive outside rush hour. It is one of our longest trips. With a drying package delivery and collection are included, and you choose the delivery date yourself.",
      },
    ],
    realisaties: [],
  },
  habay: {
    slug: "habay",
    title: "Habay construction dehumidifier hire by the E411 | Vernast",
    description:
      "Dehumidifier hire in Habay, Anlier or Rulles: for new builds on the edge of the Anlier Forest and renovated village houses. Delivery by appointment.",
    h1: "Construction dehumidifier hire in Habay",
    kicker: "Province of Luxembourg · by the Anlier Forest",
    rit: { afstand: "about 215 km", tijd: "over two hours" },
    intro: [
      "Habay lies **on the southern edge of the Anlier Forest**, a large woodland in the province of Luxembourg. The municipality has six villages: **Habay-la-Neuve, Habay-la-Vieille, Anlier, Hachy, Houdemont and Rulles**.",
      "The **E411** runs right past the municipality. That is why many people living here work in Arlon or the Grand Duchy of Luxembourg, and new housing estates have grown up around the villages. The old natural-stone houses still stand in the village centres. From Aartselaar we get there in just over two hours.",
    ],
    bouw: {
      kop: "Housing estates on the forest edge, old houses in the centre",
      alineas: [
        "On **the forest edge** the air is damper and cooler than in a town. A new house with fresh screed and plasterwork does not dry in time there by itself, and even less so in autumn. Keep the windows shut, put a dehumidifier to work and let a fan blow across the floor. Have the residual moisture measured before the floor layer starts.",
        "In the **old village centres** there are natural-stone houses, sometimes with an attached stable. After a renovation the ground floor stays cold there, with thick walls. A condensation dehumidifier only works properly above 15 °C, so in winter **a site heater** is often needed as well.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a new-build house in Habay-la-Neuve or Hachy**: 70 litres a day, for a volume of up to about 400 m³." },
      { key: "radiaal2250", waarom: "For **the screed in a new build on the forest edge**: this radial fan blows low across the floor, so it dries evenly." },
      { key: "teddh30", waarom: "For **a cold stone house in winter**: this 30 kW heater on 400 V brings the room above 15 °C, so the dehumidifier works properly." },
      { key: "ttk170", waarom: "For **a bathroom or kitchen** in a renovated village house: compact, 50 litres a day, with the door shut." },
    ],
    levering: {
      kop: "Delivery in Habay: right next to the E411",
      alinea:
        "Habay lies on the E411, over two hours' drive from our warehouse. You choose **a delivery date** when you book, and because Habay is in Wallonia, we deliver by appointment. If the house is on a forest track or a new unpaved street, let us know. That way the technician can put the units in place straight away.",
    },
    afhalen: {
      kop: "Collecting from Habay: over four hours on the road",
      alinea:
        "There and back to Aartselaar you are **on the road for over four hours**, and longer with traffic jams around Brussels. Delivery is the more obvious choice: the technician brings the units, sets them up and collects them again after the hire period.",
    },
    buren: ["aarlen", "attert", "etalle", "leglise"],
    faq: [
      {
        q: "Does a new build on the edge of the forest dry more slowly?",
        a: "Often it does. On a forest edge the air is damper and cooler, and little moisture escapes through open windows. With the windows shut and a dehumidifier at work, the weather outside matters much less. A fan across the screed helps even more.",
      },
      {
        q: "How does the van reach a house on a forest track?",
        a: "Usually without any problem. Do mention it when you book if the last few metres are unpaved or the drive is narrow. Then the technician knows in advance where he can park and how to bring the units in for the last stretch.",
      },
      {
        q: "Do I need three-phase power for a site heater in Habay?",
        a: "Yes, our 20 and 30 kW electric site heaters run on 400 V. The dehumidifiers and fans run on an ordinary socket. If there is no three-phase power on site, mention it when you book, so we can adapt the set-up accordingly.",
      },
      {
        q: "When can I schedule a delivery in Habay?",
        a: "You book online and choose a delivery date. We then agree the time with you, because the drive is long. The earlier you book, the more choice of delivery dates you have.",
      },
    ],
    realisaties: [],
  },
  "meix-devant-virton": {
    slug: "meix-devant-virton",
    title: "Construction dehumidifier hire, Meix-devant-Virton | Vernast",
    description:
      "Dehumidifier hire in Meix-devant-Virton, Gérouville, Sommethonne or Robelmont: long Lorraine farmhouses in the Gaume, set up with a moisture reading.",
    h1: "Construction dehumidifier hire in Meix-devant-Virton",
    kicker: "Province of Luxembourg · the rural Gaume by France",
    rit: { afstand: "about 250 km", tijd: "almost three hours" },
    intro: [
      "Meix-devant-Virton is **a rural municipality in the Gaume**, between Virton, Florenville and the French border. Besides Meix itself it includes **Gérouville, Sommethonne, Robelmont and Villers-la-Loue**. They are small villages between meadows and forests.",
      "Typical of the area are **the long farmhouses** with house, stable and barn side by side under one roof. Many of these buildings are being converted into homes or holiday homes. From Aartselaar it takes us **almost three hours** to get there, so we plan every delivery with you in advance.",
    ],
    bouw: {
      kop: "A stable or barn that becomes a home",
      alineas: [
        "If you bring an old **stable or barn into the house**, you are in fact building a new house inside old walls. An insulated floor slab, screed, new interior walls and a lot of plasterwork are added. All that water has to come out before the floor layer arrives. Because of the high roof ridge the volume is also **larger than the floor area suggests**.",
        "The outer walls are **thick and made of natural stone**. They stay cold and release their moisture slowly. A dehumidifier on its own gets little grip on them. **A fan along the walls** and, in the cold season, a site heater make the difference. Give the dimensions of the space, so we provide the right package.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a barn becoming a complete home**: 110 litres a day and a range of up to 600 m³, for the large volume under a high roof ridge." },
      { key: "radiaal2250", waarom: "A thick screed in a former stable dries from the top. **This radial fan blows flat across the floor** and keeps the drying going right into the corners." },
      { key: "teddh30", waarom: "An unheated barn with stone walls does **not get above 15 °C by itself** in winter. This 30 kW heater does. It needs 400 V, a connection often available on a farm." },
      { key: "ttv4500", waarom: "Along **the long, cold outer walls** of a Lorraine farmhouse this fan keeps the air moving. That way the moisture does not hang against the stone." },
    ],
    levering: {
      kop: "Delivery in Meix-devant-Virton: almost three hours, one good appointment",
      alinea:
        "The drive from Aartselaar is **about 250 km**, via Brussels and the E411 and the last stretch through the Gaume. You choose a delivery date when you book and we agree the time with you **by appointment**. Make sure there is power and that someone meets the technician. He places the units per drying zone and explains how they should run.",
    },
    afhalen: {
      kop: "Collecting it yourself? A long day from the Gaume",
      alinea:
        "To Aartselaar and back is **almost six hours' drive**, and the same again when you return the units. For a large dehumidifier you also need a van. With a drying package, **delivery, installation and collection are included**, and the units are in the right place straight away.",
    },
    buren: ["virton", "florenville", "chiny"],
    faq: [
      {
        q: "How many units do I need for a converted barn?",
        a: "That depends on the volume under the roof, not just on the floor area. A barn with a high roof ridge quickly adds up to more cubic metres than an ordinary house. Give the dimensions when you book, and we will match the package to them.",
      },
      {
        q: "Is three-phase power needed for the site heater in my farmhouse?",
        a: "Yes, our electric site heaters need 400 V. On an old farm that connection is often still there, but not always. Check the fuse box or ask your electrician, and mention it when you book if it is missing.",
      },
      {
        q: "When can the floor layer start on a screed in a former stable?",
        a: "Only when a moisture reading shows that the screed is dry enough for the chosen floor covering. A thick screed on a cold base takes longer than in a new build. Your floor layer decides which value he needs.",
      },
      {
        q: "Do you also come as far as Gérouville or Sommethonne?",
        a: "Yes. All the villages of Meix-devant-Virton are within our delivery area, although it takes us almost three hours to get there. Because we deliver by appointment in Wallonia, we agree the time in advance. That way you do not have to wait all day.",
      },
    ],
    realisaties: [],
  },
  musson: {
    slug: "musson",
    title: "Dehumidifier hire in Musson, by the French border | Vernast",
    description:
      "Dehumidifier hire in Musson, Mussy-la-Ville, Baranzy or Signeulx: villages in Belgian Luxembourg by the French border. Delivered, set up, moisture measured.",
    h1: "Construction dehumidifier hire in Musson",
    kicker: "Province of Luxembourg · southern Gaume on the border",
    rit: { afstand: "about 250 km", tijd: "almost three hours" },
    intro: [
      "Musson lies **in the south of the province of Luxembourg**, between Virton and Aubange, with the French border on its southern side. Besides Musson itself the municipality includes **Mussy-la-Ville, Baranzy, Signeulx and Willancourt**.",
      "They are **Gaume street villages**: the houses stand side by side along the street and run out at the back into gardens and meadows. From Aartselaar we drive almost three hours to Musson. You choose a delivery date, and we agree the time with you in advance.",
    ],
    bouw: {
      kop: "Rows of houses along the street, each with its own cellar",
      alineas: [
        "In a Gaume street village each house shares **its side walls with the neighbours**. That holds in heat, but it also means the house has **only two façades** to ventilate through. After a renovation the moisture stays inside for longer, especially in the middle rooms. A dehumidifier with a fan that moves the air through the house works better there than open windows.",
        "Under many houses there is **a natural-stone cellar**, cool and often somewhat damp. If you turn it into a utility room or storage space with a new floor, you are drying a cold room. Below 15 °C a condensation dehumidifier achieves little. In such a cellar **a desiccant dehumidifier** does better.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**For a terraced house being renovated floor by floor**: compact, 50 litres a day and economical on an ordinary socket." },
      { key: "ttv4500", waarom: "A house with shared side walls has only two façades. **This fan pushes the air through the middle rooms**, where the moisture would otherwise linger." },
      { key: "revolution", waarom: "For **the natural-stone cellar** under the house. The desiccant dehumidifier keeps absorbing moisture at temperatures where a condensation dehumidifier achieves little." },
      { key: "ttk350", waarom: "For a full renovation with new screed on the ground floor: **70 litres a day**, enough for a deep terraced house of up to about 400 m³." },
    ],
    levering: {
      kop: "Delivery in Musson: all the way south on the E411",
      alinea:
        "From Aartselaar we drive **via Brussels and the E411 to near Arlon** and then west to Musson: about 250 km, almost three hours. You choose a delivery date when you book. In Wallonia we deliver **by appointment**, so we fix the time together. On site the technician places the units per drying zone and explains how they should run until collection.",
    },
    afhalen: {
      kop: "Collecting from Musson: almost six hours' driving",
      alinea:
        "There and back to our collection point in Aartselaar costs you **a full working day**, and the same again when you return the units. That rarely outweighs a drying package, in which **delivery, installation and collection are included**.",
    },
    buren: ["virton", "saint-leger", "aubange"],
    faq: [
      {
        q: "Is Musson within your delivery area?",
        a: "Yes. Musson and its villages lie in the Belgian province of Luxembourg, not in the Grand Duchy, and fall within our delivery area. If you have a site across the border, please contact us first to discuss the options.",
      },
      {
        q: "Why is my terraced house in Mussy-la-Ville drying so slowly after plastering?",
        a: "A house with shared side walls can only be ventilated through the front and rear façades. The middle rooms therefore get little airflow. A dehumidifier with a fan that pushes the air from room to room clearly speeds up the drying.",
      },
      {
        q: "Which unit should I put in a cold stone cellar?",
        a: "A desiccant dehumidifier. A condensation dehumidifier loses a lot of output below 15 °C, and a natural-stone cellar rarely reaches that temperature. The desiccant dehumidifier keeps absorbing moisture in the cold and can dry in a targeted way via ducts.",
      },
      {
        q: "How far is it from Aartselaar to Musson?",
        a: "About 250 km, or almost three hours' drive without traffic jams around Brussels. It is one of our longest trips. That is why we fix the delivery time with you in advance, not at the last minute.",
      },
    ],
    realisaties: [],
  },
  rouvroy: {
    slug: "rouvroy",
    title: "Dehumidifier hire in Rouvroy and Torgny, Gaume | Vernast",
    description:
      "Dehumidifier hire in Rouvroy, Torgny, Lamorteau or Dampicourt: the southernmost corner of Belgium, with limestone houses. Delivered, set up, moisture measured.",
    h1: "Construction dehumidifier hire in Rouvroy",
    kicker: "Province of Luxembourg · the southernmost village in Belgium",
    rit: { afstand: "about 255 km", tijd: "almost three hours" },
    intro: [
      "The municipality of Rouvroy includes **Torgny, the southernmost village in Belgium**. It lies on a south-facing slope against the French border, with a milder climate than the rest of the country and even **vineyards**. Lamorteau, Dampicourt and Harnoncourt also belong to the municipality.",
      "The villages are built of **limestone**, with houses standing side wall to side wall. Rouvroy is one of our furthest addresses: from Aartselaar it takes us **almost three hours** to get there. That is why we always agree the delivery time with you in advance.",
    ],
    bouw: {
      kop: "A milder climate, but the same thick walls",
      alineas: [
        "The mild climate helps with a renovation. In spring and autumn it is often a little warmer here, and **a condensation dehumidifier works better in a warm room**. The houses are old, though, with thick limestone walls without a damp-proof course. They release their water **slowly**, even in the southernmost corner of the country.",
        "Many houses in Torgny and Lamorteau are being **done up as homes or guest accommodation**, keeping the old façade. Inside, new plasterwork goes onto the old stone, and often a new floor too. Have both the new layer and the wall behind it measured. **A moisture reading** tells you when the decorator can start.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For an old limestone house in Torgny being completely replastered**: 70 litres a day, up to about 400 m³ over a ground floor and an upper floor." },
      { key: "ttk170", waarom: "For **a guest room or bathroom** being finished separately: compact and economical, for rooms of up to 250 m³." },
      { key: "ttv4500", waarom: "Against **a thick limestone wall with fresh plasterwork** this fan blows away the damp layer of air. That way the drying at the surface does not stall." },
      { key: "radiaal2250", waarom: "If **a new floor** goes into the old house, this radial fan keeps the airflow flat across the screed, even under a staircase or in an alcove." },
    ],
    levering: {
      kop: "Delivery in Rouvroy: our longest trip, arranged in advance",
      alinea:
        "From Aartselaar we drive **via Brussels and the E411 to the south of the Gaume**: about 255 km, almost three hours. You choose the delivery date yourself when you book. Delivery in Wallonia is **by appointment**, so you know in advance when the technician is coming. On site he places the units per drying zone and shows you how to operate them.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar: not recommended from Torgny",
      alinea:
        "Collecting a single unit means **almost six hours' driving** there and back, and you do it twice. A construction dehumidifier also has to travel upright. With a drying package, **delivery, installation and collection are included**.",
    },
    buren: ["virton", "meix-devant-virton"],
    faq: [
      {
        q: "Do you deliver as far as Torgny, the southernmost village in Belgium?",
        a: "Yes. Torgny is part of the municipality of Rouvroy and lies within our delivery area, although it is one of the furthest addresses we serve. Allow almost three hours' drive from Aartselaar. That is why we agree the delivery time with you in advance.",
      },
      {
        q: "Does a house in Torgny dry faster because of the milder climate?",
        a: "A little. A condensation dehumidifier works better in a warmer room, and the mild climate in spring and autumn helps there. A thick limestone wall without a damp-proof course still dries slowly, though. And in winter it is cold enough here too for a site heater.",
      },
      {
        q: "When can the decorator start on new plasterwork against an old stone wall?",
        a: "When a moisture reading shows that the plaster layer is dry enough. Look at the wall behind it as well. If that is still wet, the moisture later moves to the surface and a vapour-tight paint can come loose.",
      },
      {
        q: "How long should a dehumidifier stay in guest accommodation in Lamorteau?",
        a: "That depends on the thickness of the plasterwork, any screed and the temperature. An old house that stood empty for a long time usually takes longer. Have it measured before you start finishing, so you know whether the accommodation is ready.",
      },
    ],
    realisaties: [],
  },
  "saint-leger": {
    slug: "saint-leger",
    title: "Saint-Léger construction dehumidifier hire | Vernast",
    description:
      "Dehumidifier hire in Saint-Léger, Châtillon or Meix-le-Tige: Gaume villages between Virton and Arlon in Belgian Luxembourg. Delivered, set up and collected.",
    h1: "Construction dehumidifier hire in Saint-Léger",
    kicker: "Province of Luxembourg · between Virton and Arlon",
    rit: { afstand: "about 240 km", tijd: "about two and a half hours" },
    intro: [
      "Saint-Léger lies **between Virton and Arlon**, in the Gaume. Besides the main village, **Châtillon and Meix-le-Tige** belong to the municipality. The landscape is rolling, with meadows, woods and villages each grouped around their church.",
      "Arlon and the border with the Grand Duchy of Luxembourg are close by, and many residents work across the border. As a result, **new homes** are going up next to the old Lorraine houses. From Aartselaar we drive about two and a half hours to Saint-Léger.",
    ],
    bouw: {
      kop: "New builds next to old Gaume houses",
      alineas: [
        "In **a new-build house** it is a classic case of site drying. Screed and plasterwork together bring hundreds of litres of water into the house, and the floor layer or decorator wants to start on a fixed date. A large unit per floor works there, with **a fan blowing low across the screed**.",
        "In the old village centres there are **Lorraine houses in limestone**, often with a cellar under part of the house. A renovation there needs a different approach: less volume, but **cold, thick walls** that dry slowly. When you book, tell us which rooms are cold or very wet, and we will match the package to that.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a new build with screed and plaster on two floors**: 110 litres a day and a range of up to 600 m³, for a handover date that is fixed." },
      { key: "radiaal2250", waarom: "Fresh screed dries from the top. **This radial fan blows flat across the floor** and keeps the drying even right into the corners." },
      { key: "ttk350", waarom: "For **the renovation of an old house in Châtillon or Meix-le-Tige**: 70 litres a day, ample for a ground floor with new plasterwork." },
      { key: "teddh20", waarom: "On a winter site in the Gaume the temperature drops below 15 °C at night. **This 20 kW heater keeps the room warm**. It needs 400 V, usually available on a site." },
    ],
    levering: {
      kop: "Delivery in Saint-Léger: via the E411 towards Arlon",
      alinea:
        "From Aartselaar we drive **via Brussels and the E411 to near Arlon** and the last stretch through the Gaume: about 240 km, two and a half hours. You choose a delivery date, and we agree the time **by appointment**. On a new-build site, tell us who will meet the technician, so the units go straight onto the right floor.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar: five hours there and back",
      alinea:
        "Collecting a single unit from Saint-Léger means **about five hours in the car**, and the same again when you return it. For several units you also need a van. With a drying package, **delivery, installation and collection are included**.",
    },
    buren: ["virton", "musson", "etalle", "aarlen"],
    faq: [
      {
        q: "My floor layer wants to lay on a fixed date. Can we make that in Saint-Léger?",
        a: "That depends on the thickness of the screed, the temperature and the time available. Give the handover date when you book, and we will match the package to it. Have the screed measured before the floor layer starts, so he has a figure instead of an estimate.",
      },
      {
        q: "Do you also deliver across the border in the Grand Duchy, close to Saint-Léger?",
        a: "Saint-Léger, Châtillon and Meix-le-Tige are within our delivery area. For a site in the Grand Duchy of Luxembourg, it is best to contact us first, and we will look at what is possible.",
      },
      {
        q: "How many units should I put in a two-storey new build?",
        a: "Usually one large dehumidifier per floor, with a fan over the fresh screed. The volume and the amount of screed determine the exact package. The calculator on our website works it out for you in advance.",
      },
      {
        q: "Does a dehumidifier work differently in an old Lorraine house than in a new build?",
        a: "Yes. In a new build the water is mainly in the fresh screed and the plasterwork. In an old limestone house there is also a cold, thick wall that releases moisture slowly. A fan against the wall helps there and, in winter, a heater.",
      },
    ],
    realisaties: [],
  },
  tintigny: {
    slug: "tintigny",
    title: "Dehumidifier hire in Tintigny, Semois valley | Vernast",
    description:
      "Dehumidifier hire in Tintigny, Bellefontaine, Rossignol or Saint-Vincent: villages in the Semois valley in the Gaume. Delivered, set up, moisture measured.",
    h1: "Construction dehumidifier hire in Tintigny",
    kicker: "Province of Luxembourg · on the upper Semois",
    rit: { afstand: "about 225 km", tijd: "over two hours" },
    intro: [
      "Tintigny lies **in the Semois valley**, between Étalle and Chiny. Here the river runs wide and calm through the meadows of the Gaume. **Bellefontaine, Rossignol and Saint-Vincent** also belong to the municipality, with extensive forests to the north.",
      "The villages are **typical of the Gaume**. Houses of limestone and sandstone stand side by side along the street, often with **a wide forecourt** between the façade and the road. From Aartselaar we drive over two hours to Tintigny, and we take that into account in the planning.",
    ],
    bouw: {
      kop: "Houses in a wide valley of meadows",
      alineas: [
        "In a flat, wide river valley **the water table is often high**, especially after a wet winter. Old houses there have a ground floor without a damp-proof course and sometimes a cellar that becomes damp in spring. After a renovation you then need to know **whether the moisture comes from the work or from below**.",
        "On the valley sides, towards Rossignol and Bellefontaine, there are **newer homes and converted farmhouses**. There it is usually **construction moisture from screed and plasterwork**. You dry that with a large unit per floor and a fan low across the floor.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a house on the Semois that has been replastered after a renovation**: 70 litres a day, for rooms of up to about 400 m³." },
      { key: "revolution", waarom: "For **a cellar that becomes damp in spring**. The desiccant dehumidifier also works in a cold room and dries via ducts, even under a floor." },
      { key: "radiaal2250", waarom: "With **new screed in a converted farmhouse in Rossignol or Bellefontaine**, this fan keeps the airflow flat across the floor, where the moisture is released." },
      { key: "teddh30", waarom: "A large unheated volume in a converted farmhouse does **not get above 15 °C by itself** in winter. This 30 kW heater does. It needs 400 V three-phase power." },
    ],
    levering: {
      kop: "Delivery in Tintigny: via the E411 into the Semois valley",
      alinea:
        "The drive from Aartselaar goes **via Brussels and the E411** to the south of the province and then down into the valley: about 225 km, over two hours. You choose a delivery date when you book, and we agree the time **by appointment**. If the site is behind a forecourt or in a yard, tell us where the van can park.",
    },
    afhalen: {
      kop: "Collecting from Tintigny: allow a whole day",
      alinea:
        "To Aartselaar and back you are **on the road for over four hours**, and the same again when you return the units. For a site heater or several dehumidifiers you also need a van. With a drying package, **delivery, installation and collection are included**.",
    },
    buren: ["chiny", "leglise", "habay", "etalle"],
    faq: [
      {
        q: "My ground floor in Tintigny is still damp after the renovation. Is that construction moisture?",
        a: "It may be, but in a wide river valley the water table is sometimes high and moisture is also drawn up from below. Have it measured at the start and after a few weeks of drying. If the reading does not fall, the cause is in the floor and not in the work.",
      },
      {
        q: "Which dehumidifier should I choose for a converted farmhouse in Rossignol?",
        a: "For a large volume with new screed, usually one large condensation dehumidifier per floor, with a radial fan over the floor. If the farmhouse stands unheated in winter, a site heater is added. Give the dimensions, and we will put the package together.",
      },
      {
        q: "Where does the van park if my house is behind a wide forecourt?",
        a: "Usually on that forecourt or at its edge, as long as the road stays clear. Mention it when you book if the forecourt is unpaved or boggy. Then the technician knows in advance that he will have to carry the units the last stretch.",
      },
      {
        q: "Isn't Tintigny too far for a dehumidifier hire company based in Aartselaar?",
        a: "It is far, about 225 km and over two hours' drive, but Tintigny is within our delivery area. With a drying package delivery and collection are included. We agree the time in advance, so the technician does not arrive at a closed door.",
      },
    ],
    realisaties: [],
  },
  virton: {
    slug: "virton",
    title: "Virton dehumidifier hire, capital of the Gaume | Vernast",
    description:
      "Dehumidifier hire in Virton, Ethe, Saint-Mard or Latour: deep Lorraine houses in the Gaume. Delivery, installation and collection are in your drying package.",
    h1: "Construction dehumidifier hire in Virton",
    kicker: "Province of Luxembourg · the capital of the Gaume",
    rit: { afstand: "about 245 km", tijd: "about two and a half hours" },
    intro: [
      "Virton is **the capital of the Gaume**, the southernmost region of Belgium, against the French border. The town lies in the valley of the Ton. **Ethe, Bleid, Latour, Ruette and Saint-Mard** also belong to the municipality.",
      "The Gaume has a **milder climate** than the Ardennes and a chalky soil. The villages are built in **Lorraine style**: the houses stand side wall to side wall, with house, stable and barn under one long roof. From Aartselaar it takes us about two and a half hours to get there. That is why we plan every delivery with you in advance.",
    ],
    bouw: {
      kop: "Lorraine houses with a deep floor plan",
      alineas: [
        "A Gaume house is **narrow at the street and deep**. The rooms lie one behind the other, and the middle ones get little daylight and little fresh air. After new plasterwork the moisture lingers longest there. Put the dehumidifier in that middle room and let **a fan move the air to the front and back**. That works better than two units against the façades.",
        "The walls are usually thick limestone or sandstone without a damp-proof course. If you bring the old stable or barn into the house, a new floor slab with screed goes onto a base that was always damp. So have it measured whether the moisture in the wall is **construction moisture** or **rising damp** from the ground. A dehumidifier does not solve the latter for good.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a deep terraced house in the centre of Virton**: 70 litres a day and a range of up to about 400 m³. Enough for a ground floor newly plastered from front to back." },
      { key: "ttv4500", waarom: "In a Lorraine floor plan the air does not flow from the street to the garden by itself. **This fan moves 4,500 m³ of air an hour** through the middle rooms, where the moisture would otherwise stand still." },
      { key: "radiaal2250", waarom: "For **the new screed in a converted stable**. The radial fan blows the damp layer of air away flat across the floor, even under the stairs and in the corners." },
      { key: "teddh20", waarom: "A barn becoming a home is, in winter, **a cold volume with thick stone walls**. This 20 kW heater brings the room above 15 °C. It needs a 400 V three-phase connection." },
    ],
    levering: {
      kop: "Delivery in Virton: a long trip, planned in advance",
      alinea:
        "From Aartselaar we drive **via the Brussels ring road and the E411** to the south of the province, about 245 km or two and a half hours. You choose a delivery date when you book. Because delivery in Wallonia is **by appointment**, we agree the time with you in advance. The technician places the units per drying zone and explains which doors must stay shut.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar: rarely sensible from Virton",
      alinea:
        "Collecting a single unit is possible, but from Virton you are **on the road for about five hours**, there and back. When you return it, you make that trip again. A construction dehumidifier also has to be transported upright. With a drying package, **delivery, installation and collection are included**.",
    },
    buren: ["meix-devant-virton", "rouvroy", "musson", "saint-leger"],
    faq: [
      {
        q: "Do you deliver as far as Virton from Aartselaar?",
        a: "Yes. Virton is within our delivery area, about 245 km or two and a half hours' drive via Brussels and the E411. You choose a delivery date when you book, and because we deliver by appointment in Wallonia, we agree the time with you in advance.",
      },
      {
        q: "How do I dry the middle room of a deep Lorraine house?",
        a: "Put the dehumidifier in that middle room itself and let a fan move the air to the front and back rooms. Keep outside doors and windows shut. Without air movement the moisture stays against the walls, however big the unit.",
      },
      {
        q: "Does a construction dehumidifier help against rising damp in an old limestone wall?",
        a: "Not for good. A dehumidifier removes the construction moisture from new plasterwork and fresh screed. Water rising from the ground through a wall without a damp-proof course comes back after drying. A moisture reading shows which of the two you have in the house.",
      },
      {
        q: "What do I need to give when I book for Virton?",
        a: "Questions? Feel free to email or call us. You make your booking on our website, with the site address, the delivery date you want and the rooms that need drying.",
      },
    ],
    realisaties: [],
  },
  etalle: {
    slug: "etalle",
    title: "Étalle construction dehumidifier hire, Semois | Vernast",
    description:
      "Dehumidifier hire in Étalle, Vance or Sainte-Marie-sur-Semois: for converted Gaume farmhouses and new builds on the Semois. Delivered, set up and collected.",
    h1: "Construction dehumidifier hire in Étalle",
    kicker: "Province of Luxembourg · on the upper Semois",
    rit: { afstand: "about 225 km", tijd: "over two hours" },
    intro: [
      "Étalle lies **on the upper reaches of the Semois**, west of Arlon, in **the Gaume**, the southernmost part of the province of Luxembourg. The municipality includes Buzenol, Chantemelle, Sainte-Marie-sur-Semois, Vance and Villers-sur-Semois, among others. Buzenol is home to the archaeological site of Montauban, with Gallo-Roman remains.",
      "It is a rural area, with **forests** to the north and pasture in the valley. Families who work in Arlon or across the border build new homes here or convert an **old farmhouse** into a home. Our technician drives over two hours to get there.",
    ],
    bouw: {
      kop: "Gaume farmhouses and new homes in the Semois valley",
      alineas: [
        "A **Gaume farmhouse** is long and joined together: house, stable and barn under one roof, with a large gateway and thick natural-stone walls. Anyone bringing the stable or barn into the house has to dry a large volume with a new floor and old walls. Then put a large unit in each zone and let a fan move the air along the cold walls.",
        "In the villages along the Semois the ground is often **damp**. A cellar or ground floor without a damp-proof course stays cool there. If that room is to be lived in, first measure which moisture comes from the work. If a floor build-up is wet after water damage, a desiccant dehumidifier can bring dry air right to the water via ducts.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a farmhouse whose barn is becoming living space**: 110 litres a day, for a volume of up to about 600 m³." },
      { key: "ttv4500", waarom: "In **a long, joined-up farmhouse** this fan (4,500 m³/h) carries the air from the house right to the back of the barn." },
      { key: "revolution", waarom: "For **a damp cellar or a wet floor build-up**: this desiccant dehumidifier also works in cold rooms and dries in a targeted way via ducts." },
      { key: "ttk350", waarom: "For **a new-build house in Vance or Villers-sur-Semois** with fresh screed: 70 litres a day, at 1.1 kW." },
    ],
    levering: {
      kop: "Delivery in Étalle: all the way into the Gaume",
      alinea:
        "Étalle is over two hours' drive from Aartselaar, via Namur and the E411. You choose **a delivery date** when you book, and we agree the time with you. If the farmhouse is on a narrow village road or behind a gateway, let us know in advance. The technician then knows where he can unload and how to set up the units per zone.",
    },
    afhalen: {
      kop: "Collecting from Étalle: only if you are in Antwerp anyway",
      alinea:
        "There and back to Aartselaar you are on the road for **over four hours**. That only pays off if you need to be near Antwerp anyway. For a farmhouse with a large volume you are better off having the units delivered, so the technician sets them up per zone.",
    },
    buren: ["habay", "tintigny", "saint-leger"],
    faq: [
      {
        q: "How many dehumidifiers do I need for a Gaume farmhouse?",
        a: "That depends on the part you are converting. If only the barn becomes living space, one large unit with a fan is often enough. If the whole building is being worked on, put a dehumidifier in each zone and keep the connecting doors shut. The calculator works out the package.",
      },
      {
        q: "What do I do with a cellar in the Semois valley that stays damp?",
        a: "First have it measured. If it is construction moisture after building work, a dehumidifier dries it out, preferably a desiccant dehumidifier in a cold cellar. If the moisture comes back with the groundwater or after every wet spell, tackle the cause first. Otherwise you will keep drying.",
      },
      {
        q: "Can you dry a wet floor without breaking it out?",
        a: "Sometimes. After water damage a desiccant dehumidifier can blow dry air via ducts into the insulation layer under a floating screed. Whether that works depends on the build-up and on how long the water has been there. Call or email us first, and we will look at your situation.",
      },
      {
        q: "How far is Étalle for your technician?",
        a: "It is one of our longest trips: over two hours via the E411. That is why we agree the delivery time with you, so you know when the technician is coming and he can place the units without rushing.",
      },
    ],
    realisaties: [],
  },
};
