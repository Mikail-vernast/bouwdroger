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
};
