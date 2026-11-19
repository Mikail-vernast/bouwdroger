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
  gedinne: {
    slug: "gedinne",
    title: "Dehumidifier hire in Gedinne, in the high Ardennes | Vernast",
    description:
      "Dehumidifier hire in Gedinne: slate-roofed houses and second homes on the highest part of the Namur Ardennes. Installed on site, with a reading at the start.",
    h1: "Construction dehumidifier hire in Gedinne",
    kicker: "Province of Namur · the high Ardennes by the French border",
    rit: { afstand: "about 185 km", tijd: "about two hours" },
    intro: [
      "Gedinne lies **in the Ardennes, in the far south of the province of Namur**, against the French border. Within the municipality is **the Croix-Scaille**, the highest point in the province. The municipality includes villages such as Louette-Saint-Pierre, Bourseigne-Vieille, Willerzie, Rienne and Vencimont, scattered between extensive forests.",
      "The area is thinly populated and heavily wooded, and many people have **a second home or holiday home** here. The villages have old houses in **schist with slate roofs**. From Aartselaar it takes us about two hours to get there.",
    ],
    bouw: {
      kop: "Cold winters, slate houses and homes left empty for months",
      alineas: [
        "At this altitude **the winters are longer and wetter** than in Flanders. A holiday home that stays closed from November to Easter cools down completely, and moisture condenses on cold walls, in cupboards and in fabrics. In spring the house smells musty and stains sometimes appear. **Let a dehumidifier run for a few weeks** before the season starts.",
        "The old houses have **thick schist walls** that warm up slowly. A renovation brings new plasterwork or a new floor into a house that stays cold. **Below 15 °C a condensation dehumidifier loses output.** When installing, the technician therefore checks whether a heater is needed, or whether a desiccant dehumidifier is the better choice.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**The dehumidifier for a second home after the winter**: it works with a desiccant and absorbs moisture even in an ice-cold house." },
      { key: "ttk170", waarom: "For a small holiday home or chalet: compact, 0.75 kW on a standard socket and easy to place in a room." },
      { key: "teddh20", waarom: "**For a renovation in a cold stone house**: the heater brings the room up to temperature so the dehumidifier performs. It needs 400 V; check in advance that it is available." },
      { key: "ttv4500", waarom: "Damp air lingers along a cold schist wall. This fan keeps the air moving, also behind cupboards and in corners." },
    ],
    levering: {
      kop: "Delivery in Gedinne: one of our longest trips",
      alinea:
        "Gedinne lies **at the edge of our area**: about two hours' drive, via Brussels and Namur heading south. That is why **we combine deliveries in the Ardennes**. You choose a delivery date when you book, and we agree the exact time by appointment. If you are not on site yourself, arrange in advance how the technician gets in.",
    },
    afhalen: {
      kop: "Collecting: worthwhile if you are coming from Flanders",
      alinea:
        "From Gedinne you are **on the road for about four hours** there and back to our collection point, and that does not pay off. If you live near Antwerp and have a second home here, collecting makes more sense: you load the unit on your way to the weekend and transport it upright.",
    },
    buren: ["beauraing", "bievre", "vresse-sur-semois"],
    faq: [
      {
        q: "How long should a dehumidifier run in a holiday home after the winter?",
        a: "Usually two to three weeks, depending on the size and on how damp the house is. Keep windows and doors shut and open cupboards and drawers, so the fabrics dry as well. At collection the technician takes a reading, so you have a reference point for next year.",
      },
      {
        q: "Do you deliver as far as Gedinne?",
        a: "Yes, although it is one of our longest trips, about two hours from Aartselaar. That is why we plan deliveries in the Ardennes together. You choose a delivery date when you book, and we agree the time of delivery with you.",
      },
      {
        q: "Does a condensation dehumidifier work in an unheated house high in the Ardennes?",
        a: "It works, but below 15 °C it removes much less water. In a cold house we therefore prefer a desiccant dehumidifier, which works with a desiccant and performs at low temperatures too. If you can heat the room, a condensation dehumidifier with a heater is enough.",
      },
      {
        q: "What if there is no 400 V supply in the house?",
        a: "Then the site heaters are ruled out, because they need three-phase power. Many holiday homes lack that connection. The desiccant dehumidifier and the condensation dehumidifiers run on a standard socket, so we put together a set-up that fits what is there.",
      },
    ],
    realisaties: [],
  },
  hamois: {
    slug: "hamois",
    title: "Hamois construction dehumidifier hire, Condroz | Vernast",
    description:
      "Dehumidifier hire in Hamois, Natoye, Emptinne or Schaltin: for new builds on a plot and converted houses on the Condroz plateau. Delivered and set up.",
    h1: "Construction dehumidifier hire in Hamois",
    kicker: "Province of Namur · villages on the Condroz plateau",
    rit: { afstand: "about 125 km", tijd: "almost an hour and a half" },
    intro: [
      "Hamois is **a rural municipality in the north of the Condroz**, between Namur and Ciney. It is made up of villages: Hamois, Natoye, Emptinne, Schaltin, Achet, Mohiville and Scy. Between the villages lie fields, small woods and scattered farms.",
      "Being close to Namur brings **new residents**, and between the old village centres **housing estates with detached houses** have appeared. In Hamois, new-build sites therefore sit next to renovations of old stone houses. From Aartselaar it takes us almost an hour and a half to get there.",
    ],
    bouw: {
      kop: "New builds between the fields and old stone houses",
      alineas: [
        "In **a new house**, screed, plasterwork and masonry together bring in hundreds of litres of water. If you let that evaporate on its own, the start of the floor layer or the decorator slips, especially in a wet autumn. **A dehumidifier of the right size** keeps the schedule achievable.",
        "In the village centres there are **older houses in sandstone and limestone**, often with a cellar under part of the house. In a renovation the moisture comes from two sides: from the new plasterwork and from the cold, old wall. The technician takes a reading at the start, so after drying you can see what is left.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**The standard choice for a new-build house on a plot**: 70 litres a day and a range of up to about 400 m³, enough for a ground floor with fresh screed." },
      { key: "ttk650", waarom: "For a spacious detached house with an open-plan living area and a large volume: 110 litres a day, up to about 600 m³." },
      { key: "revolution", waarom: "**For a cellar under an old village house** that you cannot heat: the desiccant dehumidifier absorbs moisture even at low temperatures." },
      { key: "radiaal2250", waarom: "Fresh screed dries slowest in the corners. This radial fan blows straight across the floor, so it dries evenly." },
    ],
    levering: {
      kop: "Delivery in Hamois: via Namur up onto the plateau",
      alinea:
        "We drive **via Brussels and the E411 to beyond Namur** and then up onto the plateau to your village, almost an hour and a half in all. You choose a delivery date when you book, and because Hamois is in Wallonia, we agree the time **by appointment**. The technician places the units, sets them up and shows where the water can go if there is no drain yet.",
    },
    afhalen: {
      kop: "Collecting from Hamois: possible, but a long drive",
      alinea:
        "To our collection point in Aartselaar and back you are **on the road for almost three hours**. If you need to go to Antwerp or Brussels anyway, it may fit. Otherwise delivery is the easier choice: the technician puts the units in the right room.",
    },
    buren: ["ciney", "havelange", "ohey", "assesse"],
    faq: [
      {
        q: "When can the floor layer start on the screed in a new build?",
        a: "The floor layer decides that on the basis of a reading of the residual moisture in the screed. With a dehumidifier that wait is shorter than when the screed dries on its own. At collection our technician measures again, so you can give the floor layer a concrete figure.",
      },
      {
        q: "Where does the water go if there is no drain yet?",
        a: "In a house under construction the drain is often not yet connected. The dehumidifier then collects the water in a tank that you empty regularly, or the technician runs a hose to a spot where it can drain away. When you book, tell us whether there is already a drain.",
      },
      {
        q: "Do you also deliver to Natoye, Emptinne and Schaltin?",
        a: "Yes, all the villages of Hamois are covered by the same delivery. If your site is on a new estate without a street sign, give a clear description or a location. Then the technician finds the plot without searching.",
      },
      {
        q: "My cellar in an old village house is always damp. Will a dehumidifier solve that?",
        a: "A dehumidifier removes moisture from the air and from the walls. If water gets in again after every wet spell, the moisture comes back. In a renovation it helps get rid of the construction moisture, and the reading at the start shows which part of the moisture is structural.",
      },
    ],
    realisaties: [],
  },
  hastiere: {
    slug: "hastiere",
    title: "Dehumidifier hire in Hastière on the Meuse | Vernast",
    description:
      "Dehumidifier hire in Hastière, Waulsort or Heer: for homes on the Meuse close to the French border and for second homes. Delivered, installed and collected.",
    h1: "Construction dehumidifier hire in Hastière",
    kicker: "Province of Namur · on the Meuse, by the French border",
    rit: { afstand: "about 125 km", tijd: "about an hour and a half" },
    intro: [
      "In Hastière **the Meuse enters Belgium from France**. The villages lie on both banks: Hastière-par-delà with its Romanesque church, Hastière-Lavaux, Waulsort, and towards the border Hermeton-sur-Meuse, Heer and Agimont.",
      "The valley is deeply cut, with wooded slopes and limestone on either side. Besides the permanent residents there are many **second homes and holiday homes**, which sometimes stand empty and unheated for months. From Aartselaar it takes us about an hour and a half to reach Hastière.",
    ],
    bouw: {
      kop: "Low riverbanks and houses that stand empty for months",
      alineas: [
        "Along the Meuse the ground floor of many homes lies low, and at high water the cellar or storeroom is the first to get wet. If water has come in, **first remove the water and the silt**. Then dry with enough capacity until floor and walls are ready for finishing.",
        "A **holiday home that was shut all winter** has cold walls and damp air. If you do up such a house in spring with new plasterwork or a new floor, you start in a cold room. A condensation dehumidifier only works well there once you have warmed it up first. A **desiccant dehumidifier** does not need that warmth.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**For a second home that stood unheated all winter**: this desiccant dehumidifier absorbs moisture even in a cold room." },
      { key: "teddh30", waarom: "First warms up a large, cold house on the Meuse, so a condensation dehumidifier can do its job. This 30 kW heater needs 400 V." },
      { key: "ttk650", waarom: "**After water on a ground floor along the riverbank**: 110 litres a day quickly draws the moisture out of floor and walls." },
      { key: "ttv4500", waarom: "Keeps the air moving on a long, low ground floor, so no damp corner remains behind the cupboards." },
    ],
    levering: {
      kop: "Delivery in Hastière: right up to the border, by appointment",
      alinea:
        "We drive via Namur and Dinant up the Meuse, about an hour and a half in all. You choose **a delivery date** when you book, and we agree the time with you, because in Wallonia we deliver by appointment. If you do not live there permanently, let us know **who will let the technician in**. He places the units, sets up the drain and records the moisture readings.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar: rarely worth it from Hastière",
      alinea:
        "There and back to our collection point you drive about three hours, at the start and again when you return the unit. If you drive from Flanders to your second home yourself, you can pick the unit up on the way. Transport it **upright** and secure it well.",
    },
    buren: ["dinant", "onhaye", "doische"],
    faq: [
      {
        q: "I do not live in Hastière permanently. Do I need to be there for the delivery?",
        a: "Someone has to let the technician in and know where the units can go. That can be a neighbour, a contractor or a property manager. When you book, tell us who that is and how we can reach them, and we will make the appointment with them.",
      },
      {
        q: "How do I dry a holiday home that stood empty all winter?",
        a: "First bring the room up to temperature, because cold walls barely release their water. Then put one dehumidifier on each floor and keep the windows shut. If the house stays cold, we choose a desiccant dehumidifier, which keeps working below 15 °C.",
      },
      {
        q: "Do you go as far as Heer and Agimont, close to Givet?",
        a: "Yes, we deliver in all the villages of Hastière, right up to the border. Give your full address when you book. Then we plan the trip in advance and combine it with other addresses in the area where possible.",
      },
      {
        q: "Can the dehumidifier keep running when nobody is in the house?",
        a: "Yes. The technician runs the drain hose to a floor drain, a sink or outside, so the tank never fills up. The unit switches off by itself as soon as the hygrostat reaches the target value and switches on again when the humidity rises.",
      },
    ],
    realisaties: [],
  },
  havelange: {
    slug: "havelange",
    title: "Havelange dehumidifier hire for stone farmhouses | Vernast",
    description:
      "Dehumidifier hire in Havelange, Maffe, Méan or Barvaux-Condroz: farms and village houses in the eastern Condroz, bordering Liège province. Delivered and set up.",
    h1: "Construction dehumidifier hire in Havelange",
    kicker: "Province of Namur · the eastern Condroz",
    rit: { afstand: "about 135 km", tijd: "about an hour and a half" },
    intro: [
      "Havelange lies **in the east of the Condroz**, where the province of Namur borders the province of Liège. It is **an extensive farming municipality** with villages such as Maffe, Méan, Barvaux-Condroz, Flostoy, Porcheresse and Verlée, linked by narrow country roads.",
      "Anyone renovating here is usually working **in an old stone building**: a farmhouse, a presbytery or a village house on the church square. From Aartselaar it takes us about an hour and a half to get there.",
    ],
    bouw: {
      kop: "Thick walls, cold winters and a room without heating",
      alineas: [
        "On the plateau of the eastern Condroz **it can freeze hard in winter**, and a house being renovated usually has no working heating yet. **Below 15 °C a condensation dehumidifier loses output**, and in an unheated stone house you rarely reach that temperature in January. A site heater or a desiccant dehumidifier then makes the difference.",
        "Many houses have **a ground floor laid straight on the earth** or an old tiled floor without insulation. If an insulated floor with screed goes in, most of the water sits in that new layer, while the walls around it stay cold and damp. Then dry room by room with the doors shut, rather than the whole house at once.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**For a winter site without heating**: the desiccant dehumidifier works with a desiccant and keeps absorbing moisture even in a cold stone room." },
      { key: "teddh20", waarom: "For a closed room that needs to come up to temperature: 20 kW, so the dehumidifier next to it performs again. The heater needs a 400 V connection." },
      { key: "ttk350", waarom: "For a village house or presbytery where you work floor by floor: 70 litres a day and a range of up to about 400 m³." },
      { key: "ttv4500", waarom: "**On new screed in an old house** this fan gets the air moving, so the damp layer above the floor does not linger." },
    ],
    levering: {
      kop: "Delivery in Havelange: up onto the plateau by Liège",
      alinea:
        "We drive along the E411 to beyond Namur and then a stretch of country roads, **about an hour and a half** in all. That is why **we combine the trip with other deliveries in the area**. You choose a delivery date when you book; in Wallonia we fix the time of delivery by appointment.",
    },
    afhalen: {
      kop: "Collecting from Havelange: allow half a day",
      alinea:
        "There and back to Aartselaar you are **on the road for about three hours**. For one unit that rarely pays off. With a delivery the technician measures how cold the room is and chooses on site between a heater and a desiccant dehumidifier. If you collect, you have to judge that yourself in advance.",
    },
    buren: ["hamois", "ohey", "somme-leuze"],
    faq: [
      {
        q: "Does a construction dehumidifier work in an unheated farmhouse in winter?",
        a: "A condensation dehumidifier does work then, but slowly: below 15 °C its output drops sharply. In a cold stone room we therefore put a site heater next to the dehumidifier, or we choose a desiccant dehumidifier, which keeps drying at low temperatures too.",
      },
      {
        q: "Is delivery possible in a remote village such as Méan or Porcheresse?",
        a: "Yes, all the villages of Havelange are within our delivery area. The country roads are narrow, so when you book let us know whether a van can get up to the house and whether there is room to stop briefly while unloading.",
      },
      {
        q: "Do I have to dry the whole house at once?",
        a: "No, in a large stone house that is less efficient. Work zone by zone instead: close off the room with the new screed or the fresh plasterwork and dry there. That way the energy goes to where the water is.",
      },
      {
        q: "How far is Havelange from your warehouse?",
        a: "About 135 kilometres, or an hour and a half's drive via Brussels and the E411. It is one of the longer trips in the province of Namur. That is why we combine deliveries in the Condroz and agree the delivery time with you.",
      },
    ],
    realisaties: [],
  },
  houyet: {
    slug: "houyet",
    title: "Dehumidifier hire in Houyet, Lesse valley | Vernast",
    description:
      "Dehumidifier hire in Houyet, Celles or Wanlin: for stone houses in the Lesse valley and farmhouses being turned into holiday homes. We deliver and install.",
    h1: "Construction dehumidifier hire in Houyet",
    kicker: "Province of Namur · on the Lesse, between Famenne and Condroz",
    rit: { afstand: "about 130 km", tijd: "about an hour and a half" },
    intro: [
      "Houyet lies **on the Lesse** and in summer is known as the starting point of the kayak trips to Anseremme. The village grew up in the valley around the river. From our warehouse in Aartselaar it takes us about an hour and a half to get there.",
      "The municipality is extensive and rural. **Celles**, with its Romanesque church and Vêves Castle nearby, is part of it, as are Wanlin, Hulsonniaux, Custinne and Ciergnon. These are villages of grey stone between woods and meadows.",
    ],
    bouw: {
      kop: "Houses in the Lesse valley and farmhouses on the heights",
      alineas: [
        "In the Lesse valley, homes stand close to the river and against the slope. After a lot of rain the water rises quickly and cellars and low ground floors become damp. Anyone renovating here is dealing with **cold stone walls** that release their water slowly. A fan that keeps the air moving along the wall speeds up drying.",
        "On the heights around Celles and Custinne, old farmhouses are being converted into homes or **holiday lets**, with new floors and new plasterwork in large rooms at the same time. In winter such a site is often unheated. Then heat has to be added first before a condensation dehumidifier works well.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a farmhouse near Celles becoming a holiday let**: 110 litres a day for rooms up to 600 m³." },
      { key: "ttv4500", waarom: "Keeps the air moving along **a cold stone wall in the Lesse valley**, so the moisture does not cling to the wall." },
      { key: "revolution", waarom: "For **a cellar close to the Lesse**: this desiccant dehumidifier also works in a cold room, where a condensation dehumidifier achieves little." },
      { key: "teddh20", waarom: "Warms a smaller, unheated village house in winter to above 15 °C, so the dehumidifier can do its job. Needs 400 V." },
    ],
    levering: {
      kop: "Delivery in Houyet: via Namur and Ciney to the Lesse",
      alinea:
        "We drive along the E411 and then via Ciney to the Lesse, about an hour and a half in all. You choose **a delivery date** when you book. We agree the time with you, so we can combine the trip with other addresses in the area. The technician places the units per drying zone, lays the drain hose and records the moisture readings as a point of comparison for collection.",
    },
    afhalen: {
      kop: "Collecting from Houyet: three hours' driving",
      alinea:
        "There and back to Aartselaar you are on the road for about three hours, and that twice per hire period. It only pays off if you drive from Flanders to your second home yourself. Transport the unit **upright** then, because lying down, residual water can leak out.",
    },
    buren: ["dinant", "ciney", "rochefort", "beauraing"],
    faq: [
      {
        q: "My house on the Lesse gets damp after high water. Will a dehumidifier help?",
        a: "For the moisture left in walls and floor after the high water, yes. If the water keeps coming back along the wall or through the floor, a dehumidifier will not solve that permanently. When installing, the technician measures where the moisture is and how deep.",
      },
      {
        q: "I am converting a farmhouse into a holiday home. How many units do I need?",
        a: "Count on one large unit per open room, a fan where the new floor is and, in winter, a site heater. When you book, give the floor area and ceiling height of each room. Then we work out the set-up in advance.",
      },
      {
        q: "Do you also come to Ciergnon, Hulsonniaux and Wanlin?",
        a: "Yes, we deliver in all the villages of Houyet, in the valley and on the heights. Some roads along the Lesse are narrow. Let us know when you book whether the van can get to the door, and the technician will bring a hand truck.",
      },
      {
        q: "Can I hire in summer, when the area is full of tourists?",
        a: "Yes. Summer is a good time to dry, because a condensation dehumidifier works better at higher temperatures. Only the roads in the valley are busier. That is why we agree the delivery time with you in advance.",
      },
    ],
    realisaties: [],
  },
  onhaye: {
    slug: "onhaye",
    title: "Onhaye dehumidifier hire for farmhouse renovations | Vernast",
    description:
      "Dehumidifier hire in Onhaye, Anthée, Falaën or Weillen: village houses and farms on the plateau west of the Meuse, below Montaigle Castle. Delivered.",
    h1: "Construction dehumidifier hire in Onhaye",
    kicker: "Province of Namur · villages on the plateau above the Meuse",
    rit: { afstand: "about 120 km", tijd: "almost an hour and a half" },
    intro: [
      "Onhaye lies **on the plateau west of Dinant**, above the Meuse valley. The rural municipality has eight villages: Onhaye, Anthée, Falaën, Gerin, Miavoye, Serville, Sommière and Weillen. They are scattered between fields, meadows and the edges of woods.",
      "Near Falaën, in the Molignée valley, **the ruins of Montaigle Castle** stand on a rocky outcrop. Otherwise you mainly see limestone farmhouses, old village houses and newer homes along the roads to Dinant and Philippeville. From Aartselaar we are on the road for almost an hour and a half.",
    ],
    bouw: {
      kop: "Farmhouses and village houses in limestone",
      alineas: [
        "The typical house here is **an old farmhouse or village house in limestone**, with thick walls and a floor laid straight on the ground. A renovation often adds a new floor slab with insulation and screed, and the walls are replastered. That brings a lot of water into a building that already dries slowly by itself.",
        "**Stables and barns** are also increasingly turned into living space. They are large, high rooms with few windows, which stay cold in winter as long as the heating is not working. There, combine a large unit with a site heater and put a fan over the new floor. That keeps the schedule of the floor layer and the decorator achievable.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a barn or stable becoming a home**: 110 litres a day, suitable for rooms up to 600 m³." },
      { key: "teddh30", waarom: "Warms **a high, unheated room** in winter to above 15 °C, so the dehumidifier works at full capacity. It needs three-phase power (400 V)." },
      { key: "radiaal2250", waarom: "Blows low across **fresh screed on a new floor slab**, the part of the renovation that holds the most water." },
      { key: "ttk350", waarom: "For a village house you are doing up room by room: 70 litres a day at a consumption of 1.1 kW." },
    ],
    levering: {
      kop: "Delivery in Onhaye: via Dinant up onto the plateau",
      alinea:
        "From Aartselaar we drive via Namur and Dinant to the plateau, almost an hour and a half in all. You choose **a delivery date** when you book and we agree the time with you. If your farmhouse is on **a country lane or an unpaved drive**, let us know in advance. Then the technician knows where the van can park.",
    },
    afhalen: {
      kop: "Collecting: a long drive for a heavy unit",
      alinea:
        "To our collection point in Aartselaar you drive almost an hour and a half, at the start and again at the end of the hire. A large unit is heavy and has to travel upright. For a converted farmhouse with several units, **delivery is the sensible choice**.",
    },
    buren: ["dinant", "anhee", "hastiere", "florennes"],
    faq: [
      {
        q: "How long does a new floor take to dry in an old farmhouse in Anthée or Weillen?",
        a: "That depends on the thickness and type of screed and on the temperature in the room. In a cold farmhouse it only goes smoothly once you warm it up first. The technician takes a reading at the start and at collection, so you have a figure for the floor layer.",
      },
      {
        q: "Does a dehumidifier work in a stable without heating?",
        a: "A condensation dehumidifier needs warmth: below about 15 °C it removes much less water from the air. In an unheated stable we therefore combine the dehumidifier with an electric site heater. Do check whether there is a 400 V connection for the large heater.",
      },
      {
        q: "Do you deliver in all eight villages of Onhaye?",
        a: "Yes, from Onhaye itself to Falaën, Serville and Sommière. Many addresses on the plateau lie outside the village centre. When you book, tell us whether the van can get to the door, or whether the last few metres are along a field track.",
      },
      {
        q: "Can I adjust the hygrostat myself during the hire?",
        a: "You can, but do not set it to maximum. A limestone wall with fresh lime plaster dries better at an even pace, otherwise the plasterwork can crack. When installing, the technician sets a target value that suits your site.",
      },
    ],
    realisaties: [],
  },
  rochefort: {
    slug: "rochefort",
    title: "Dehumidifier hire in Rochefort and Han-sur-Lesse | Vernast",
    description:
      "Dehumidifier hire in Rochefort, Han-sur-Lesse or Jemelle: stone homes on the Lesse and the Lomme, in the Famenne. Delivered, installed and set up for you.",
    h1: "Construction dehumidifier hire in Rochefort",
    kicker: "Province of Namur · Famenne, Lesse and Lomme",
    rit: { afstand: "about 155 km", tijd: "over an hour and a half" },
    intro: [
      "Rochefort lies **in the Famenne, on the Lomme**. Outside the area the town is known for **the Caves of Han** in Han-sur-Lesse and for **the Abbey of Saint-Remy**, where the Trappists brew Rochefort beer. Jemelle, Éprave, Lessive, Wavreille and Villers-sur-Lesse are also part of the municipality.",
      "The caves lie in **a band of limestone**, where the Lesse partly disappears underground. Around it lies **the heavy, clayey soil of the Famenne**, and both the Lesse and the Lomme can burst their banks after heavy rain. Our van gets there from Aartselaar in over an hour and a half.",
    ],
    bouw: {
      kop: "Homes by the water and on clay soil",
      alineas: [
        "**Along the Lomme in the centre and along the Lesse in Han** there are older stone homes close to the water. After flooding, such a ground floor or cellar has to dry thoroughly. First remove the water and the silt: **a dehumidifier is meant for the moisture in walls and floor**, not for water still standing on the ground.",
        "Rochefort lives largely from **tourism**, with hotels, guest rooms and holiday homes. Owners usually renovate **out of season**, and then a room has to be dry before the first guests arrive. On the clay soil of the Famenne a floor or cellar also dries more slowly than on sand.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**After flooding on the Lomme or the Lesse**: at 110 litres a day it draws most of the moisture out of a ground floor before it soaks deep into the walls." },
      { key: "radiaal2250", waarom: "For a cellar or floor that was under water: the radial fan blows straight across the floor and into the corners, where the water stays longest." },
      { key: "ttk170", waarom: "**For a guest room being done up between two seasons**: compact and on a standard socket." },
      { key: "ttk350", waarom: "For a home on the Famenne clay with new screed or new plasterwork: 70 litres a day and a range of up to about 400 m³." },
    ],
    levering: {
      kop: "Delivery in Rochefort: the E411 into the Famenne",
      alinea:
        "Rochefort lies **close to the E411**, which makes the trip predictable: over an hour and a half from Aartselaar. You choose a delivery date when you book, and we agree the time of installation with you by appointment. After flooding, **it is best to tell us how high the water came**, so the technician brings the right units in one go.",
    },
    afhalen: {
      kop: "Collecting from Rochefort: over three hours' driving",
      alinea:
        "To Aartselaar and back you are **on the road for over three hours**. For an owner who has to go to Antwerp or Brussels anyway, it may fit. After flooding, delivery is the better choice: you stay on site and the technician measures straight away how wet the walls are.",
    },
    buren: ["ciney", "houyet", "beauraing", "somme-leuze"],
    faq: [
      {
        q: "Our house on the Lomme had water inside. When can the dehumidifier go in?",
        a: "As soon as the standing water and the silt are gone, even if walls and floor are still soaking. The sooner you start, the less moisture soaks deep into the masonry. When you book, mention how high the water came, and we will put together the right combination.",
      },
      {
        q: "We are renovating guest rooms out of season. How do we plan the drying?",
        a: "Plan the drying between the plasterer and the decorator. One dehumidifier per room or per floor, with the doors shut, works fastest. At collection the technician measures the residual moisture, so you know whether the decorator can start.",
      },
      {
        q: "Do you also deliver in Han-sur-Lesse and Jemelle?",
        a: "Yes, both are part of Rochefort and are covered by the same delivery, as are Éprave, Wavreille and the other villages. Han is busy during the tourist season, so give us a spot where the van can stop briefly.",
      },
      {
        q: "Does the electrics need checking after flooding?",
        a: "Yes, if sockets or the consumer unit were under water. Have an electrician check the installation before you connect the units. A dehumidifier and a fan run non-stop for days, and that needs a safe, dry connection.",
      },
    ],
    realisaties: [],
  },
  "somme-leuze": {
    slug: "somme-leuze",
    title: "Construction dehumidifier hire in Somme-Leuze | Vernast",
    description:
      "Dehumidifier hire in Somme-Leuze, Baillonville, Noiseux or Sinsin: between Condroz and Famenne, with homes on heavy soil or by the Ourthe. Delivered, set up.",
    h1: "Construction dehumidifier hire in Somme-Leuze",
    kicker: "Province of Namur · between Condroz and Famenne",
    rit: { afstand: "about 145 km", tijd: "over an hour and a half" },
    intro: [
      "Somme-Leuze lies **where the Condroz gives way to the Famenne**, in the east of the province of Namur. The municipality includes Baillonville, Bonsin, Heure, Hogne, Nettinne, Noiseux, Sinsin and Waillet, villages between fields, meadows and woods.",
      "In the north you still see the ridges and valleys of the Condroz. Towards the south the land becomes flatter and **the soil heavier**: that is where the Famenne begins. **Noiseux** lies in the narrow valley of the Ourthe. From Aartselaar it takes us over an hour and a half to get there.",
    ],
    bouw: {
      kop: "Heavy soil, a river and second homes in the countryside",
      alineas: [
        "**The Famenne has a clayey, poorly draining soil.** Rainwater drains away slowly, so a cellar or a floor laid on the ground stays wet for a long time. Anyone renovating here or pouring a new floor is therefore drying the mixing water against a damp subsoil. A reading at the start then gives you something to go on.",
        "Along the Ourthe and in the wooded parts there are **holiday homes and second homes**. They stand empty and unheated all winter, and in spring they smell musty. If you **let a dehumidifier run for a few weeks** before the season starts, the moisture leaves walls, mattresses and cupboards before mould appears.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**For a holiday home that stood empty all winter**: the desiccant dehumidifier dries even in a cold room, without you having to heat it first." },
      { key: "ttk350", waarom: "For a renovation on the heavy soil of the Famenne: 70 litres a day and a range of up to about 400 m³, enough for a ground floor." },
      { key: "radiaal2250", waarom: "**On a floor above wet ground** this radial fan blows straight across the surface and into the corners, where the moisture stays longest." },
      { key: "ttk170", waarom: "For a chalet or a small holiday home: compact, 0.75 kW on a standard socket and easy to put in the car." },
    ],
    levering: {
      kop: "Delivery in Somme-Leuze: a long trip, well planned",
      alinea:
        "We drive along the E411 to beyond Namur and then a good stretch towards Marche, **over an hour and a half** in all. That is why **we plan deliveries here by area**. You choose a delivery date when you book, and we agree the time by appointment. If you are not at the holiday home yourself, arrange in advance how the technician gets in.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar rarely pays off from Somme-Leuze",
      alinea:
        "There and back to our collection point is **over three hours' driving**. If you live in Flanders and have a second home here, collecting can fit: you take the unit with you on your way to the weekend. Always transport a dehumidifier upright.",
    },
    buren: ["havelange", "ciney", "rochefort"],
    faq: [
      {
        q: "Our holiday home smells musty after the winter. Will a dehumidifier help?",
        a: "Yes, if it is moisture that has built up in a closed, unheated home. Let the dehumidifier run for a few weeks with windows and doors shut. A desiccant dehumidifier works even when it is still cold inside. Mould already on the walls has to be treated separately.",
      },
      {
        q: "Can I hire a dehumidifier if I am not on site myself?",
        a: "You can, provided the technician can get in and there is power. When you book, agree how he gets access, for example through a neighbour or a key safe. Collection works the same way.",
      },
      {
        q: "Why does a cellar in the Famenne stay wet for so long?",
        a: "The soil there is clayey and drains poorly. After a wet spell the water stays around the cellar and the moisture works its way through the walls. A dehumidifier removes construction moisture and built-up moisture, but does not solve a structural water problem.",
      },
      {
        q: "Do you also deliver in Noiseux on the Ourthe?",
        a: "Yes, Noiseux is part of Somme-Leuze and is covered by the same delivery. In the valley the roads are narrow and sometimes steep. So when you book, mention whether the van can get up to the house.",
      },
    ],
    realisaties: [],
  },
  "vresse-sur-semois": {
    slug: "vresse-sur-semois",
    title: "Vresse-sur-Semois dehumidifier hire, Semois valley | Vernast",
    description:
      "Dehumidifier hire in Vresse-sur-Semois, Alle, Bohan or Laforêt: houses and holiday homes in the bends of the Semois. Delivered and set up, even after winter.",
    h1: "Construction dehumidifier hire in Vresse-sur-Semois",
    kicker: "Province of Namur · the Semois valley",
    rit: { afstand: "about 205 km", tijd: "over two hours" },
    intro: [
      "Vresse-sur-Semois lies **in the deep, winding valley of the Semois**, in the southernmost corner of the province of Namur, against France. The municipality includes Alle, Bohan, Membre, Mouzaive, Laforêt, Orchimont, Sugny and Pussemange.",
      "For a long time the valley lived from **tobacco growing**, and the villages still have wooden **tobacco drying barns**. Today the area runs mainly on **tourism**, with kayaking, walking and many holiday homes, campsites and second homes along the water. From Aartselaar it takes us over two hours to get there.",
    ],
    bouw: {
      kop: "Houses by the river, on the slope and empty through the winter",
      alineas: [
        "**Along the Semois** houses stand right by the water, in a valley where mist and damp linger long after sunset. After high water a ground floor or cellar has to dry thoroughly. **First clear the water and the silt** and then put in the dehumidifier, because it draws the moisture out of walls and floor.",
        "In addition, many **holiday homes** stay shut and cold all winter. In spring **they smell musty**, and fabrics, mattresses and cupboards are full of moisture. An old house **in schist with a slate roof** holds on to that moisture for a long time. Let a dehumidifier run for a few weeks before the season with windows and doors shut, and the home is ready for guests.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**For a holiday home that came through the winter unheated**: the desiccant dehumidifier keeps absorbing moisture even in a cold house." },
      { key: "ttk650", waarom: "**After high water on a ground floor by the Semois**: 110 litres a day, so most of the moisture is gone before it soaks deep into the walls." },
      { key: "radiaal2250", waarom: "For a floor that was under water: the radial fan blows straight across the surface and into the corners, where the moisture stays longest." },
      { key: "ttk170", waarom: "For a small gîte or a studio by the water: compact, 0.75 kW and on a standard socket." },
    ],
    levering: {
      kop: "Delivery in Vresse-sur-Semois: our furthest corner",
      alinea:
        "Vresse-sur-Semois is **one of the furthest addresses we deliver to**: over two hours from Aartselaar, with the winding roads into the valley at the end. That is why **we combine the trips to the Ardennes**. You choose a delivery date when you book, and we fix the time by appointment. After flooding, tell us how high the water came, so everything comes along in one trip.",
    },
    afhalen: {
      kop: "Collecting only pays off on the way to your second home",
      alinea:
        "From the Semois valley to Aartselaar and back is **over four hours' driving**. You would not do that for one dehumidifier. If you live in the Antwerp area and have a holiday home here, you take the unit with you in the boot and transport it upright.",
    },
    buren: ["bievre", "gedinne"],
    faq: [
      {
        q: "Our gîte on the Semois has to be ready for the first guests. When do we start drying?",
        a: "Start two to three weeks before the first arrival, and earlier if the house is very damp after a wet winter. Let the dehumidifier run with doors and windows shut and cupboards and drawers open. At collection the technician measures how dry the walls are.",
      },
      {
        q: "Water from the Semois got into our ground floor. What comes first?",
        a: "First clear the water and the silt, and have the electrics checked if they were under water. Then start drying as soon as possible, so the moisture does not soak deep into walls and floor. When you book, tell us how high the water came, and we will bring the right units.",
      },
      {
        q: "Do you also deliver in Alle, Bohan, Membre and Laforêt?",
        a: "Yes, all the villages of Vresse-sur-Semois are within our delivery area. The roads in the valley are narrow and winding. So let us know whether the van can get up to the house, or whether the technician has to cover the last stretch with a hand truck.",
      },
      {
        q: "How long is the drive from Aartselaar to the Semois valley?",
        a: "Over two hours, via Brussels, Namur and the E411, with a stretch of winding roads at the end. It is one of our longest trips. That is why we plan deliveries in the Ardennes together and fix the delivery time with you in advance.",
      },
    ],
    realisaties: [],
  },
  yvoir: {
    slug: "yvoir",
    title: "Dehumidifier hire in Yvoir, on the Meuse and Bocq | Vernast",
    description:
      "Dehumidifier hire in Yvoir, Godinne, Spontin or Purnode: for homes on the Meuse and the Bocq and for stone farmhouses on the plateau. Delivered and installed.",
    h1: "Construction dehumidifier hire in Yvoir",
    kicker: "Province of Namur · where the Bocq flows into the Meuse",
    rit: { afstand: "about 105 km", tijd: "just over an hour" },
    intro: [
      "Yvoir lies **on the Meuse, where the Bocq flows into it**. The centre lies in the valley, and Godinne also lies along the Meuse. Follow the Bocq inland and you pass through Purnode and Spontin, where a castle stands beside the river.",
      "On the Condroz plateau lie **Durnal, Dorinne, Evrehailles and Mont**, villages with many natural stone houses. Old farmhouses, barns and stables there are regularly converted into homes. From Aartselaar we are on the road to Yvoir for just over an hour.",
    ],
    bouw: {
      kop: "Low banks on the Meuse and Bocq, limestone farmhouses",
      alineas: [
        "In the valleys of the Meuse and the Bocq the ground floor lies low and the groundwater sits just below the floor. A cellar or ground floor there is damper after a wet winter than the rest of the house. In a renovation you are drying **cold walls without a damp-proof course**. A fan that blows the damp air away from the wall speeds that up.",
        "On the plateau the volumes are larger. A converted farmhouse often gets **a new floor slab, screed and plasterwork** all at once, behind thick limestone walls that release their water slowly. Set the hygrostat of a large unit to a target value. That way everything dries evenly and the plasterwork does not crack.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a farmhouse or barn on the plateau becoming a home**: 110 litres a day for rooms up to 600 m³." },
      { key: "ttv4500", waarom: "Carries the damp air away along a thick limestone wall, so the whole wall dries and no damp corner is left behind." },
      { key: "revolution", waarom: "For **a low cellar in the Bocq valley** that stays cool even in summer. There a desiccant dehumidifier works better than a condensation dehumidifier." },
      { key: "ttk350", waarom: "For a home in Godinne or in the centre of Yvoir that you are doing up floor by floor: 70 litres a day, with a drain hose." },
    ],
    levering: {
      kop: "Delivery in Yvoir: along the Meuse or over the plateau",
      alinea:
        "We drive via Namur and from there along the Meuse or over the plateau, depending on your address. You choose **a delivery date** when you book, and we agree the exact time with you. In the valleys some roads are narrow and steep. Let us know in advance whether the van can get to your door. The technician places the units per drying zone and records the moisture readings.",
    },
    afhalen: {
      kop: "Collecting yourself: more driving than drying",
      alinea:
        "Aartselaar is just over an hour from Yvoir. You make that trip there and back, at the start and when you return the unit. For a single unit it can pay off if you are heading towards Antwerp anyway. For a farmhouse with several rooms, **delivery is the logical choice**.",
    },
    buren: ["anhee", "dinant", "profondeville", "assesse"],
    faq: [
      {
        q: "How many units does a converted farmhouse in Durnal or Spontin need?",
        a: "That depends on the volume and on how much wet work has been done. Count on one large unit per open room and a fan where the new screed is. When you book, give the floor area and ceiling height, and we work out the set-up in advance.",
      },
      {
        q: "Why does my cellar by the Bocq stay damp after drying?",
        a: "A cellar this close to the river takes in moisture from outside as soon as the groundwater rises. A dehumidifier removes the construction moisture and keeps the room usable. Water that keeps coming through the wall has to be dealt with on the outside. The moisture reading shows which of the two is at play.",
      },
      {
        q: "How quickly does a natural stone wall dry after new lime plaster?",
        a: "More slowly than an internal brick wall, because a thick limestone wall holds a lot of water and releases it gradually. Think weeks rather than days. Set the hygrostat to a target value and not to maximum, so the plasterwork does not dry out too fast.",
      },
      {
        q: "Do you also come to Godinne and Evrehailles?",
        a: "Yes, we deliver in all the villages of Yvoir, along the Meuse and on the plateau. If your home is on a narrow or steep road, mention that when you book. Then the technician knows in advance where he can unload.",
      },
    ],
    realisaties: [],
  },
  cerfontaine: {
    slug: "cerfontaine",
    title: "Cerfontaine dehumidifier hire by the Eau d'Heure | Vernast",
    description:
      "Dehumidifier hire in Cerfontaine, Silenrieux or Senzeille: homes and holiday houses around the Eau d'Heure lakes, on the wet ground of the Fagne.",
    h1: "Construction dehumidifier hire in Cerfontaine",
    kicker: "Province of Namur · by the Eau d'Heure lakes",
    rit: { afstand: "about 130 km", tijd: "about an hour and a half" },
    intro: [
      "Part of **the Eau d'Heure lakes** lies in Cerfontaine; the rest belongs to Froidchapelle in Hainaut. Since the dams were built, including that of **the Plate Taille**, this farming area has gained **holiday homes and recreation**.",
      "The municipality consists of **Cerfontaine, Daussois, Senzeille, Silenrieux, Soumoy and Villers-Deux-Églises**. These are villages in **the Fagne**, with stone farmhouses, village houses along the main road and, closer to the water, **more recent homes and second homes**. From Aartselaar it takes us **about an hour and a half** to get there.",
    ],
    bouw: {
      kop: "Second homes by the water, farmhouses on heavy soil",
      alineas: [
        "A holiday home that stood **shut and unheated all winter** is often clammy in spring. The walls are cold, there is mould behind a cupboard and the crawl space smells musty. Anyone renovating or selling then first wants **dry air and dry walls**. **The technician measures** whether it is built-up moisture or a leak.",
        "The villages lie on **the heavy soil of the Fagne**, which drains poorly. Around a stone farmhouse the ground stays saturated in wet months, and **a cellar or ground floor without a damp-proof course** absorbs that moisture. If a renovation also adds **new screed and plasterwork**, count on a large unit running for a few weeks.",
      ],
    },
    toestellen: [
      { key: "ttk170", waarom: "**For a holiday house that feels clammy after the winter**: compact, 50 litres a day, easy to move from room to room." },
      { key: "ttk650", waarom: "For **a farmhouse in the Fagne** being renovated, with new screed across the ground floor and plasterwork on the walls: 110 litres a day." },
      { key: "revolution", waarom: "**For a cool cellar or crawl space on wet ground**: this desiccant dehumidifier keeps absorbing moisture where it is too cold for a condensation dehumidifier." },
      { key: "teddh20", waarom: "This 20 kW heater (400 V) first warms up a second home that stood unheated for months, so the dehumidifier does not have to work in the cold." },
    ],
    levering: {
      kop: "Delivery in Cerfontaine: down to the lake or in the village",
      alinea:
        "We drive **past Charleroi and then south**, to Cerfontaine or one of its villages. You choose a **delivery date** when you book; we fix the time together, because in Wallonia we deliver by appointment. If it is a second home and you are not on site yourself, **agree who will open the door**.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar: rarely fits a weekend at the lake",
      alinea:
        "Our collection point is **about an hour and a half** away. If you are driving from the Antwerp area to your holiday home anyway, you can take one compact unit with you yourself. For a renovation with more units **we recommend delivery**, because the set-up partly determines how fast it dries.",
    },
    buren: ["philippeville", "walcourt", "froidchapelle", "couvin"],
    faq: [
      {
        q: "My holiday house by the lakes is clammy after the winter. What helps?",
        a: "First heat and then dry, with windows and doors shut. A compact dehumidifier on each floor removes the moisture from the air and from the surface of the walls. If the clamminess returns after a few weeks, there is a source such as a leak or rising damp, and drying will not solve that.",
      },
      {
        q: "I am not on site. Can you still deliver to my second home?",
        a: "Yes, if someone opens the door and lets the technician in. That can be a neighbour or your contractor. When you book, give their name and phone number, and we agree the delivery time with them.",
      },
      {
        q: "Do you also come to Silenrieux, Daussois or Villers-Deux-Églises?",
        a: "Yes, to all the villages of Cerfontaine and to the homes around the lakes. Give the full address, because a satnav does not find every holiday home by the lakes. Then we look at the route in advance.",
      },
      {
        q: "Why does my cellar in the Fagne stay wet for so long?",
        a: "The heavy subsoil lets rainwater drain poorly. As a result the ground around the house stays saturated for a long time, and a cellar without a good water barrier absorbs that moisture. A dehumidifier removes the construction moisture, but water that keeps coming in needs work on the wall.",
      },
    ],
    realisaties: [],
  },
  couvin: {
    slug: "couvin",
    title: "Dehumidifier hire in Couvin and Mariembourg | Vernast",
    description:
      "Dehumidifier hire in Couvin or Mariembourg: homes on the Eau Noire, on the limestone of the Calestienne and in the forest villages towards France. Delivered.",
    h1: "Construction dehumidifier hire in Couvin",
    kicker: "Province of Namur · on the Eau Noire",
    rit: { afstand: "about 145 km", tijd: "over an hour and a half" },
    intro: [
      "Couvin lies **on the Eau Noire**, where the river cuts through a limestone outcrop. The rocks by the town contain **caves**, and near Petigny the river partly flows underground through **the Neptune Caves**. Caves like these are typical of **the Calestienne**, the narrow limestone band that runs from west to east here.",
      "In the north of the municipality lies **Mariembourg**, once a fortress of Mary of Hungary, with Frasnes and Boussu-en-Fagne in **the Fagne**. Towards the south the villages get smaller and the forest denser: **Pesche, Brûly and Cul-des-Sarts** lie on the edge of **the Ardennes**, against the French border. From Aartselaar you are on the road there for **over an hour and a half**.",
    ],
    bouw: {
      kop: "Three soils in one municipality: clay, limestone and slate",
      alineas: [
        "In the town and along **the Eau Noire** there are older houses close to the water, with **cellars cut into the rock or against the slope**. Limestone looks dry, but **water finds its way through the cracks** and after heavy rain can wet a wall in an unexpected place. After a renovation the technician measures whether the moisture comes from the works or from outside.",
        "Around Mariembourg **heavy clay** holds on to the water. In the Ardennes villages the climate is cooler and damper, and there are **houses in slate and natural stone** with thick, cold walls. Such a house dries more slowly after a renovation than a home in Flanders. In spring and autumn **a site heater next to the dehumidifier** makes a big difference.",
      ],
    },
    toestellen: [
      { key: "revolution", waarom: "**For a rock-cut cellar under a house on the Eau Noire**: it stays cool all year round, and this desiccant dehumidifier works in the cold too." },
      { key: "ttk350", waarom: "For **a home in Couvin or Mariembourg** being renovated: 70 litres a day on a standard socket, for rooms up to about 400 m³." },
      { key: "teddh30", waarom: "**For a stone house in the Ardennes villages** that stays cold inside for a long time: this 30 kW heater (400 V) brings the room to a temperature at which drying goes smoothly." },
      { key: "ttv4500", waarom: "Along a thick wall of slate or limestone this fan blows the damp air away, so the wall keeps releasing its moisture." },
    ],
    levering: {
      kop: "Delivery in Couvin: the N5 south, right into the forest villages",
      alinea:
        "Couvin lies **in the far south of the province**: via Brussels and Charleroi, and then the N5 to the Eau Noire. You choose a **delivery date** when you book, and then we call you to make an appointment, as everywhere in Wallonia. If you live **in a forest village on a narrow road**, let us know, so the technician knows how far the van can get.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar is not an option from Couvin",
      alinea:
        "From Couvin to our collection point is **over an hour and a half's drive**, one way. To collect and return a unit you are therefore in the car for over six hours. **Let us deliver**: the technician places the units, sets them up and measures how wet the walls are at the start.",
    },
    buren: ["viroinval", "cerfontaine", "chimay"],
    faq: [
      {
        q: "My cellar in Couvin is cut into the rock. Can it get dry?",
        a: "A desiccant dehumidifier removes most of the construction moisture and the moisture from a wet spell, even in the cold. Limestone does let water through along cracks, though, so such a cellar rarely gets as dry as a living room. The technician takes a reading when installing and tells you what is achievable.",
      },
      {
        q: "Do you deliver as far as Brûly, Pesche or Cul-des-Sarts?",
        a: "Yes, including the villages against the French border. They lie further from the N5 and sometimes on narrow forest roads. So when you book, give the exact address and mention whether a van would have difficulty getting there.",
      },
      {
        q: "How do I dry a slate house that stood empty for a long time?",
        a: "First warm up, then dry. An empty stone house is often colder inside than out, and below 15 °C a condensation dehumidifier works poorly. With a heater added, the windows shut and one dehumidifier per floor, the moisture falls steadily. Allow a few weeks.",
      },
      {
        q: "A contractor or neighbour is keeping an eye on the site. Can you contact them directly?",
        a: "Yes. If someone else is following the site for you, give their name and phone number when you book, so we can reach them. Questions? Feel free to email or call us.",
      },
    ],
    realisaties: [],
  },
  doische: {
    slug: "doische",
    title: "Doische dehumidifier hire on the French border | Vernast",
    description:
      "Dehumidifier hire in Doische, Matagne, Romerée or Gochenée: stone farmhouses and village houses on the French border, between Fagne and Calestienne.",
    h1: "Construction dehumidifier hire in Doische",
    kicker: "Province of Namur · against the French border",
    rit: { afstand: "about 150 km", tijd: "almost two hours" },
    intro: [
      "Doische lies **against the French border**, with the French town of Givet just across it. It is **a rural municipality of small villages**, with plenty of open space between them and no major main roads. From Aartselaar you are on the road there for **almost two hours**.",
      "The municipality includes **Matagne-la-Grande, Matagne-la-Petite, Romerée, Gimnée, Niverlée, Soulme, Gochenée, Vodelée, Vaucelles and Agimont**. They lie where **the Fagne gives way to the Calestienne**. Most buildings are built **in grey natural stone**: farmhouses around a yard, barns and village houses around the church.",
    ],
    bouw: {
      kop: "Natural stone farmhouses on clay and limestone",
      alineas: [
        "The typical home here is **an old farmhouse or a village house in limestone**, with walls half a metre thick and rarely a damp-proof course. A renovation adds **internal insulation, a new floor and a lot of plasterwork** against a wall that itself is never quite dry. That moisture has to go before the finish goes on, otherwise it is trapped behind the insulation.",
        "The soil differs from village to village. In the north **the wet clay of the Fagne** holds water around the house. Towards the south **the limestone of the Calestienne** comes to the surface; it lets water drain better, but can channel it through cracks into a cellar. **When installing, the technician measures** whether the moisture comes from the works or from the ground.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a farmhouse around a yard becoming a home**: 110 litres a day, for a large volume with fresh screed and plasterwork." },
      { key: "ttk350", waarom: "For **a village house in Romerée or Matagne** being done up floor by floor: 70 litres a day on a standard socket." },
      { key: "ttv4500", waarom: "**For a limestone wall half a metre thick**: this fan keeps the air moving along the wall, so the moisture keeps coming out of it." },
      { key: "teddh30", waarom: "A stone farmhouse without heating stays cold inside for a long time. This 30 kW heater on three-phase power brings it above 15 °C, so the dehumidifier can do its job." },
    ],
    levering: {
      kop: "Delivery in Doische: right into the border villages",
      alinea:
        "Doische lies **at the end of our run south**: via Brussels and Charleroi, past Philippeville and then along country roads to the border. You choose a **delivery date** when you book, and we call to agree a time. If the farmhouse is behind a yard or on a field track, **mention it**, so the technician knows how to get there.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar: too far from Doische",
      alinea:
        "Collecting a unit in Aartselaar and returning it afterwards means **almost four hours in the car twice** from Doische. That does not outweigh a delivery. **The technician brings the units right into the right room** and measures the walls at the start.",
    },
    buren: ["philippeville", "viroinval", "hastiere"],
    faq: [
      {
        q: "I am insulating my stone farmhouse on the inside. Does the wall need to be dry first?",
        a: "Yes. Moisture trapped behind internal insulation can no longer escape and leads to mould or damage to the finish. Let the walls and the new plasterwork dry first and have the moisture content measured. Only then close up the insulation.",
      },
      {
        q: "Do you also come to Gochenée, Vodelée and Agimont?",
        a: "Yes, to every village in the municipality of Doische, including those right against the French border. Give your full address when you book and mention whether a van would have difficulty reaching the house, because on those country roads a satnav sometimes plots a detour.",
      },
      {
        q: "Does a dehumidifier work in a farmhouse with walls half a metre thick?",
        a: "Yes, but it takes longer. A thick stone wall holds a lot of water and releases it slowly. It goes fastest with a large dehumidifier, the windows shut and a fan blowing along the wall. The readings at installation and collection show how much moisture has gone.",
      },
      {
        q: "Can the hire be extended if the farmhouse is not yet dry?",
        a: "Yes. If the reading shows that the wall or the screed is not yet dry enough for the next step, get in touch with us. We agree an extension and the units stay until the moisture content is right.",
      },
    ],
    realisaties: [],
  },
  florennes: {
    slug: "florennes",
    title: "Florennes construction dehumidifier hire | Vernast",
    description:
      "Dehumidifier hire in Florennes, Morialmé, Hemptinne or Flavion: homes and farmhouses on the Entre-Sambre-et-Meuse plateau. Installed and set up by us.",
    h1: "Construction dehumidifier hire in Florennes",
    kicker: "Province of Namur · the plateau between Sambre and Meuse",
    rit: { afstand: "about 125 km", tijd: "almost an hour and a half" },
    intro: [
      "Florennes lies **in the middle of Entre-Sambre-et-Meuse**, on the plateau between the Sambre and the Meuse. Most Belgians know the name from **the military air base**, but the town is much older and has a **castle** in its centre.",
      "Around the centre lie rural villages such as **Morialmé, Hemptinne, Flavion, Rosée, Corenne and Saint-Aubin**, with **fields, meadows and stone farmhouses**. More recent homes line the roads into town. From Aartselaar it takes us **almost an hour and a half** to get there.",
    ],
    bouw: {
      kop: "Rubble-stone farmhouses and new builds on the open plateau",
      alineas: [
        "The older buildings are built **in local natural stone**: low farmhouses, barns and village houses with **thick walls** and a ground floor laid straight on the earth. Anyone converting such a building into a home lays **insulation and new screed** and plasters the internal walls. All that water has to go before a floor or paint can go on.",
        "On the open plateau the wind blows harder and it is **colder** than in the valleys. A new build that gets its roof on in winter often stays cold inside, and then the screed barely progresses. **First warm the room up, then dry**: with a site heater added, a condensation dehumidifier reaches its full capacity.",
      ],
    },
    toestellen: [
      { key: "ttk650", waarom: "**For a converted barn or farmhouse** with a large ground floor and new screed: 110 litres a day, for rooms up to about 600 m³." },
      { key: "ttk350", waarom: "For **a new-build house along the roads into town**: 70 litres a day, enough for a ground floor with fresh screed or a floor with new plasterwork." },
      { key: "teddh30", waarom: "**For a winter site on the plateau**: this 30 kW heater on three-phase power brings a cold new build above 15 °C, where the dehumidifier works well." },
      { key: "ttv4500", waarom: "Along a thick rubble-stone wall this fan keeps the air moving, so no layer of damp air lingers against the wall." },
    ],
    levering: {
      kop: "Delivery in Florennes: past Charleroi to the plateau",
      alinea:
        "The trip goes **round the Brussels ring and past Charleroi** to the south. You choose a **delivery date** when you book, and we call to agree the time, as with every delivery in Wallonia. If the farmhouse is on **an unpaved drive or behind a yard**, mention it. The technician then brings the right equipment.",
    },
    afhalen: {
      kop: "Collecting from Florennes costs you half a day",
      alinea:
        "Aartselaar is **almost an hour and a half** from Florennes. Collecting a unit and returning it later means making that trip four times, with a heavy dehumidifier in the boot. **Having it delivered is simpler here**, and the technician places the units in the right spot straight away.",
    },
    buren: ["philippeville", "walcourt", "mettet"],
    faq: [
      {
        q: "I am building on the plateau in winter. How do I get the screed dry in time?",
        a: "Tackle the cold first. In an unheated new build below 15 °C a condensation dehumidifier achieves only part of its capacity. With an electric site heater added and the windows shut it works at full output, and a fan low across the floor speeds up drying.",
      },
      {
        q: "Do you also deliver in Morialmé, Flavion or Rosée?",
        a: "Yes, in every village of the municipality of Florennes. When you book, mention whether it is a farmhouse with a long drive or a yard. Then the technician knows how to drive up to the door and how to get the units inside.",
      },
      {
        q: "How long does a construction dehumidifier need to run in a converted stable?",
        a: "Think weeks, not days. A stable with thick stone walls and new screed holds a lot of water, and natural stone releases it slowly. The technician takes a reading at the start and at collection, so you can see how far the moisture content has fallen.",
      },
      {
        q: "Can I see in advance what delivery to Florennes costs?",
        a: "Yes. When you book, you see the hire of the units and the cost of delivery and collection before you confirm. So there is nothing unexpected on the invoice afterwards.",
      },
    ],
    realisaties: [],
  },
  philippeville: {
    slug: "philippeville",
    title: "Philippeville dehumidifier hire, the star fortress | Vernast",
    description:
      "Dehumidifier hire in Philippeville: for homes in the old fortress town and stone farmhouses in the villages of the Fagne. We deliver, install and take readings.",
    h1: "Construction dehumidifier hire in Philippeville",
    kicker: "Province of Namur · the fortress town in the Fagne",
    rit: { afstand: "about 125 km", tijd: "about an hour and a half" },
    intro: [
      "Philippeville was laid out in the sixteenth century **as a fortress** and named after Philip II. The **star-shaped street plan** has survived: from the central square the streets run out to the site of the old bastions. From Aartselaar it takes us **about an hour and a half** to get there.",
      "Around the town lies a ring of villages, including **Jamagne, Sautour, Romedenne, Villers-le-Gambon and Franchimont**. They lie in **the Fagne**, an open landscape of meadows, copses and **natural stone farmhouses**. Many of those farmhouses are now being converted into homes.",
    ],
    bouw: {
      kop: "Stone houses inside the fortress, farmhouses on wet ground",
      alineas: [
        "In the old centre the houses stand **close together**, with thick walls and often **a cellar or room half below ground level**. New plaster on **cold natural stone or brick** dries slowly. So let the dehumidifier run for a few weeks, with windows and doors shut.",
        "In the villages the **heavy, clayey soil of the Fagne** holds water for a long time. After a wet winter the ground around a farmhouse stays saturated, and **new screed** in a converted stable then dries more slowly than on sandy soil. **When installing, the technician measures** how much moisture is in the floor and walls.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a terraced house inside the fortress** being renovated floor by floor: 70 litres a day, for rooms up to about 400 m³." },
      { key: "ttk650", waarom: "For **a farmhouse or stable in the Fagne** becoming a home, with new screed across a large ground floor: 110 litres a day, up to about 600 m³." },
      { key: "revolution", waarom: "For **a half-sunken cellar under a town house** that stays cool even in summer. This desiccant dehumidifier absorbs moisture even at low temperatures." },
      { key: "ttv4500", waarom: "Damp air lingers along a thick natural stone wall. This fan (4,500 m³/h) keeps the air moving, so the wall keeps releasing its moisture." },
    ],
    levering: {
      kop: "Delivery in Philippeville: via Charleroi and the N5",
      alinea:
        "We drive **round the Brussels ring and past Charleroi, then south along the N5**, about an hour and a half. You choose a **delivery date** when you book; we agree the exact time with you, because in Wallonia we deliver by appointment. Inside the fortress the streets are often lined with parked cars. Let us know **where the van can stop**.",
    },
    afhalen: {
      kop: "Collecting it yourself is a long drive from Philippeville",
      alinea:
        "Our collection point in Aartselaar is **about an hour and a half's** drive away. To collect and return you make that trip four times. **Having it delivered is usually the better choice here**: the technician places the units and measures the moisture at the start.",
    },
    buren: ["walcourt", "florennes", "cerfontaine", "doische", "viroinval"],
    faq: [
      {
        q: "My house is inside the old fortress. Can a dehumidifier go in a room below ground level?",
        a: "Yes. For a room that is partly underground and stays cool we usually choose a desiccant dehumidifier, because a condensation dehumidifier loses output below 15 °C. The technician also checks whether water is coming in from outside, because a dehumidifier will not solve that.",
      },
      {
        q: "Why does screed dry so slowly in a farmhouse in the Fagne?",
        a: "The clayey ground underneath stays wet for a long time after rain, and an old stable has thick, cold stone walls. A large dehumidifier with the doors shut and a fan low across the floor removes the most moisture in those conditions.",
      },
      {
        q: "Do you also deliver in Jamagne, Sautour or Villers-le-Gambon?",
        a: "Yes, in all the villages of the municipality of Philippeville. Give your full address and your delivery date when you book. We then call you to agree the delivery time.",
      },
      {
        q: "How do I know whether the walls of my stone house are dry enough to paint?",
        a: "By measuring. A natural stone wall can feel dry on the surface while there is still water deeper down. The technician takes a reading at installation and at collection. With those figures you and your decorator decide when he can start.",
      },
    ],
    realisaties: [],
  },
  viroinval: {
    slug: "viroinval",
    title: "Viroinval dehumidifier hire in the Viroin valley | Vernast",
    description:
      "Dehumidifier hire in Viroinval: Nismes, Olloy, Treignes and Vierves on the Viroin, stone houses among the limestone hills of the Calestienne. Measured on site.",
    h1: "Construction dehumidifier hire in Viroinval",
    kicker: "Province of Namur · the Viroin valley",
    rit: { afstand: "about 150 km", tijd: "almost two hours" },
    intro: [
      "Viroinval is named after **the Viroin**, the river that forms at Nismes where **the Eau Noire and the Eau Blanche** meet. The valley cuts through **the Calestienne**, and the limestone hills with dry grassland, known here as 'tiennes', are a well-known nature area. Near Nismes lies **the Fondry des Chiens**, a deep chasm in the limestone.",
      "The municipality has eight villages: **Nismes, Dourbes, Olloy-sur-Viroin, Vierves-sur-Viroin, Treignes, Mazée, Le Mesnil and Oignies-en-Thiérache**. They are built **in grey stone**, along the river and on the slopes. Around Oignies the forest of **the Ardennes** begins. From Aartselaar it takes us **almost two hours** to get there.",
    ],
    bouw: {
      kop: "Village houses by the river and on the limestone slope",
      alineas: [
        "Along the Viroin there are **old houses close to the water**, often with a ground floor laid straight on the earth and **limestone walls** that stay cold and damp for a long time after a wet winter. After a renovation with new plasterwork or a new floor, such a house dries slowly. **At the start the technician measures** how much water is in the floor and walls.",
        "On the slopes, houses stand **against the hillside**, where rainwater runs down through the limestone and rubble. A wall on the uphill side can get wet as a result without anything being wrong inside. **A dehumidifier removes construction moisture, but does not stop water flowing in.** When installing, we check which of the two it is.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a village house in Nismes or Olloy** being renovated: 70 litres a day, for rooms up to about 400 m³." },
      { key: "revolution", waarom: "For **a cold room or cellar against the limestone slope**: this desiccant dehumidifier keeps working where it is too cold for a condensation dehumidifier." },
      { key: "radiaal2250", waarom: "**For a ground floor on the Viroin that was under water**: this radial fan blows straight across the floor and into the corners, where the water stays longest." },
      { key: "teddh20", waarom: "This 20 kW site heater first warms up a limestone house that stood cold for months, so the drying does not stall. It needs three-phase power (400 V)." },
    ],
    levering: {
      kop: "Delivery in Viroinval: right into the villages along the river",
      alinea:
        "Viroinval is **one of our furthest addresses**: via Brussels and Charleroi and then further south into the valley, almost two hours' drive. You choose a **delivery date** when you book; we set the time by appointment. The village streets are **narrow and winding**. Let us know where the van can stop.",
    },
    afhalen: {
      kop: "Collecting: a day trip to Aartselaar",
      alinea:
        "From the Viroin valley you are **on the road for almost four hours** there and back, and again when you return the unit. Collecting therefore rarely makes sense. **Choose delivery**: the technician puts the units straight away where they remove the most moisture.",
    },
    buren: ["couvin", "doische", "philippeville"],
    faq: [
      {
        q: "My house on the Viroin has a ground floor laid straight on the earth. Will a dehumidifier help?",
        a: "For the moisture from a renovation or a wet spell, yes. Without a damp-proof course the ground always draws up some water, so such a floor will not get as dry as a new build. The technician takes a reading at installation and at collection, so you can see the difference.",
      },
      {
        q: "Do you deliver in Treignes, Mazée and Oignies-en-Thiérache?",
        a: "Yes, in all the villages of Viroinval, including those against the French border and in the forest towards Oignies. Give the full address, because some houses are on roads where a van struggles to turn. Then we look at the route in advance.",
      },
      {
        q: "Why does the wall on the uphill side get wet after rain?",
        a: "On a limestone slope, rainwater runs down through the ground and the cracks, and a wall against the hillside catches it. That is not construction moisture, and a dehumidifier will not stop it. If the reading does not fall, drainage or a water barrier on the outside is needed.",
      },
      {
        q: "How many weeks does it take to dry an old stone house in the valley?",
        a: "After a thorough renovation with new plasterwork or screed, count on a few weeks, longer in the cold months. Limestone releases its water slowly. A heater and a fan with the dehumidifier speed it up, and the readings show when the floor layer or decorator can start.",
      },
    ],
    realisaties: [],
  },
  walcourt: {
    slug: "walcourt",
    title: "Dehumidifier hire in Walcourt, Eau d'Heure valley | Vernast",
    description:
      "Dehumidifier hire in Walcourt: for houses on the hill around the basilica, in the Eau d'Heure valley and in villages such as Thy-le-Château and Yves-Gomezée.",
    h1: "Construction dehumidifier hire in Walcourt",
    kicker: "Province of Namur · the basilica above the Eau d'Heure",
    rit: { afstand: "about 115 km", tijd: "almost an hour and a half" },
    intro: [
      "Old Walcourt lies **on a hill above the Eau d'Heure**. At the top stands the **Basilica of Saint Maternus**, visible from far away. Walcourt is one of the places with a **march of Entre-Sambre-et-Meuse**, a folk procession that passes through the streets every year.",
      "The municipality also includes **Thy-le-Château, Yves-Gomezée, Berzée, Laneffe, Tarcienne and Somzée**. In the centre there are **steep little streets**, and on the plateau stand **scattered farmhouses**. From Aartselaar you are on the road by car for **almost an hour and a half**.",
    ],
    bouw: {
      kop: "Houses against the hill and homes in the river valley",
      alineas: [
        "Around the basilica the houses stand **on a slope**, sometimes with the rear wall half in the ground. A room on the uphill side then has **earth against the wall**. After a renovation you want to know whether the moisture comes from the new plaster or from the hillside. **The technician measures it** when installing and tells you what a dehumidifier can do there.",
        "Lower down, **in the Eau d'Heure valley**, older homes stand close to the water and often **without a damp-proof course**. On the plateau, **stone farmhouses** are being converted into homes, with a new floor and a lot of plasterwork in a large volume. There we put a large unit together with a fan, so the screed is ready for the floor layer.",
      ],
    },
    toestellen: [
      { key: "ttk350", waarom: "**For a home on the hill around the basilica** being renovated room by room: 70 litres a day, on a standard socket (1.1 kW)." },
      { key: "ttk650", waarom: "For **a converted farmhouse on the plateau** around Laneffe or Somzée, with screed across the whole ground floor: 110 litres a day." },
      { key: "radiaal2250", waarom: "For **a floor in the valley that stayed wet after high water**: this radial fan blows straight across the floor and right into the corners." },
      { key: "teddh30", waarom: "An unheated house by the river stays cold in winter. This 30 kW site heater (400 V) warms it up first, so the dehumidifier performs." },
    ],
    levering: {
      kop: "Delivery in Walcourt: via Charleroi and the Eau d'Heure valley",
      alinea:
        "We drive **round the Brussels ring and on past Charleroi to the south**, almost an hour and a half. When you book you choose a **delivery date**. We then agree the time with you: in Wallonia we deliver by appointment. If the units have to go up **a steep or narrow street** to the basilica, mention it, so the technician brings a hand truck.",
    },
    afhalen: {
      kop: "Collecting in Aartselaar: there and back twice",
      alinea:
        "Our collection point is **almost an hour and a half** from Walcourt. Collecting and returning together costs you almost six hours in the car. **Having it delivered** makes more sense here: the technician places the units, sets them up and measures the walls at the start.",
    },
    buren: ["philippeville", "florennes", "cerfontaine", "gerpinnes"],
    faq: [
      {
        q: "My house is against the hill of the basilica. Is the moisture construction moisture or does it come from the ground?",
        a: "The technician measures it when installing and again at collection. If the moisture content in the wall falls steadily, it is construction moisture and the dehumidifier is doing its job. If it comes back after every shower, water is getting in from outside and work on the wall is needed first.",
      },
      {
        q: "Do you also come to Thy-le-Château, Berzée or Yves-Gomezée?",
        a: "Yes, in all the villages of Walcourt. Give your full address and the delivery date you want when you book. We then get in touch to agree the time and to ask where the van can park.",
      },
      {
        q: "How many dehumidifiers do I need to dry a converted farmhouse?",
        a: "That depends on the volume and on what is wet. For a large ground floor with fresh screed, one large dehumidifier with a fan, with the doors shut, is often enough. If the upper floors were plastered too, add one unit per floor.",
      },
      {
        q: "Can a construction dehumidifier run in a house that is not heated yet?",
        a: "Yes, but a condensation dehumidifier works noticeably less well below about 15 °C. In a cold house we add an electric site heater, so the room warms up first. In a cool cellar we would rather choose a desiccant dehumidifier, which depends less on the temperature.",
      },
    ],
    realisaties: [],
  },
};
