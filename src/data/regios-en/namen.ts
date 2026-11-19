import { routeEn, dagEn, LADDER_EN, POMP_EN, provinceEn, type RegioEn } from "./basis.js";

/** Engelse tekst van de provinciepagina Namen, vertaald uit regios.ts. Zegt "the province of Namur" omdat de stad een eigen pagina heeft. */
export const REGIO: RegioEn = {
  ...routeEn("namen"),
  title: "Dehumidifier hire in the province of Namur | Vernast",
  description:
    "Dehumidifier hire in the province of Namur: Gembloux, Andenne, Dinant and Ciney. Delivered, installed and collected from Aartselaar, with no deposit.",
  h1: "Construction dehumidifier hire in the province of Namur",
  kicker: "Province de Namur · 38 municipalities · from the Hesbaye to the Semois",
  intro: [
    "Looking to hire a construction dehumidifier in the province of Namur, for a farmhouse under renovation, new screed or a cellar that flooded when the river was high? Vernast brings the units right to your site, from Éghezée to Couvin and from Gembloux to Vresse-sur-Semois. **Delivery, installation and collection are included in your drying package.** We would rather be honest about the distance: **we reach Gembloux and Éghezée in about an hour via the E411**, the city of Namur in a little more, Dinant and Philippeville in an hour and a half or longer, and Couvin and Vresse-sur-Semois are among the longest trips we make. This page covers the whole province; the city of Namur itself, with Jambes and the riverside districts, has a page of its own.",
  ],
  bouw: {
    kop: "Why do people hire a construction dehumidifier in the province of Namur?",
    alineas: [
      "**In Namur the Sambre flows into the Meuse**, and the most densely built part of the province lies along the two rivers: Sambreville, Jemeppe-sur-Sambre and Floreffe on the Sambre, Andenne and Profondeville on the Meuse. These are old industrial and river villages with terraced houses that often have a vaulted cellar, half below the level of the riverbank. When the water is high or after a heavy thunderstorm, water gets in there, and every day you wait before drying counts.",
      "**Upstream, between Yvoir and Hastière, the Meuse cuts through limestone cliffs.** Dinant is squeezed between the rock face and the river, and many houses in the valley stand with their back wall against the slope. Water from the rock finds its way in along the wall on the hill side, so that back wall and the cellar beneath it often stay wet while the front of the house is dry. A dehumidifier placed close to that wall gets more out of it than a unit in the middle of the room.",
      "**On the Condroz plateau**, around Ciney, Havelange and Hamois, farmhouses and village houses are built of limestone and sandstone, with walls half a metre thick. Anyone converting such a building into a home lays new floors and plasters interior walls that have stood unheated for years. That moisture only comes out slowly. **Further south, in the Famenne around Rochefort and in the Ardennes around Gedinne and Bièvre, they are often second homes**: houses that stood empty all winter and turn out musty and damp on the first day of spring.",
      "In the north lies **the Namur Hesbaye, the Walloon part of the Hesbaye (Haspengouw in Dutch)**: a loam plateau with large fields around Éghezée, Fernelmont and Gembloux. New houses do go up there, on housing plots at the edge of the villages, and that is the classic drying of a new build. Plasterwork and screed together bring hundreds of litres of water into a house, and it has to come out before the parquet layer arrives.",
    ],
  },
  beeld: {
    src: "/vernast/case-kelder.webp",
    alt: "Cellar of an old house with a construction dehumidifier against the damp wall",
  },
  toestellen: {
    kop: "Which construction dehumidifier suits a site in the province of Namur?",
    items: [
      {
        key: "ttk350",
        waarom: `**For a new build in the Hesbaye or a floor of a house in a river village**: 70 litres a day and a range of up to about 400 m³. In an ordinary house we place one per floor. From ${dagEn("ttk350")} per day.`,
      },
      {
        key: "ttk650",
        waarom: `**For a converted barn in the Condroz or a cellar that flooded**: 110 litres a day, up to about 600 m³. One large unit where two smaller ones would otherwise have to share the space. From ${dagEn("ttk650")} per day.`,
      },
      {
        key: "revolution",
        waarom: `**The desiccant dehumidifier for the cold cellar in the Meuse valley or the second home in the Ardennes.** It also works at low temperatures and blows the dry air through a duct right up against the damp wall. We prefer to look at the set-up with you first. From ${dagEn("revolution")} per day.`,
      },
      {
        key: "teddh30",
        waarom: `**The 30 kW electric heater for a natural stone farmhouse being renovated in winter.** Only once the room is warm enough does a condensation dehumidifier reach its full capacity. Needs three-phase power (400 V) on site. From ${dagEn("teddh30")} per day.`,
      },
    ],
  },
  levering: {
    kop: "Delivery in the province of Namur: via the E411, at an agreed time",
    alineas: [
      "From Aartselaar we take the Brussels ring road and then the E411 south-east. **Gembloux, Éghezée and Sombreffe are about an hour away, the city of Namur an hour and a quarter.** For the Meuse valley towards Dinant and for the south around Philippeville and Florennes, allow an hour and a half or more. Couvin, Viroinval, Gedinne and Vresse-sur-Semois are around two hours away or a little more, and there we fix the delivery time together with you.",
      `When the technician arrives, he measures how wet the walls and the floor are, places the units where the moisture is and runs the drain to a floor drain, a sink or outside. **Carrying the units upstairs is included**; if the staircase is not in yet, we charge ${LADDER_EN} per floor via the ladder. We do not charge for mileage: a site in Vresse-sur-Semois costs the same drying package as a site in Gembloux.`,
    ],
    feiten: [
      { label: "Delivery and installation", waarde: "Included in the drying package, no mileage charge" },
      { label: "Delivery time", waarde: "By appointment, we agree the delivery day together" },
      { label: "Driving time from our warehouse", waarde: "About an hour (Gembloux, Éghezée) to over two hours (Vresse-sur-Semois)" },
      { label: "Floor via ladder", waarde: `${LADDER_EN} per floor, let us know in advance` },
      { label: "Condensate pump (recommended)", waarde: `${POMP_EN} per dehumidifier per day` },
    ],
  },
  afhalen: {
    kop: "Collecting from the province of Namur: rarely a good idea",
    alineas: [
      "Our collection point is in Aartselaar, on the A12 just south of Antwerp. From Gembloux that is an hour's drive, from Dinant or Ciney easily twice that, and you make the trip twice. **With a full drying package you save nothing, because delivery is already included in the price.** If you only need one dehumidifier or fan for a long period and you are near Antwerp anyway, book a fixed collection slot on a working day between 7.30 am and 5 pm.",
    ],
    feiten: [
      { label: "Driving time to our collection point", waarde: "An hour (Gembloux) to over two hours (the south)" },
      { label: "Deposit", waarde: "None" },
      { label: "Transport", waarde: "Upright; if carried lying down, let it stand for 24 hours" },
      { label: "Prefer delivery?", waarde: "The trip is already included in every package price" },
    ],
  },
  faq: [
    {
      q: "Is this page for the city of Namur or for the province?",
      a: "For the province: all 38 municipalities, from Éghezée in the north to Vresse-sur-Semois in the south. The city of Namur itself, with Jambes, Salzinnes and the other districts, has a separate page. The drying package and the price are the same on both pages; only the description of the area differs.",
    },
    {
      q: "Do you also come as far as Couvin or Vresse-sur-Semois?",
      a: "Yes, although at more than two hours' drive from Aartselaar it is one of our longest trips. That is why we agree the delivery time with you, rather than giving you a half-day window. The price stays the same: delivery, installation and collection are included in the drying package, with no surcharge for the mileage.",
    },
    {
      q: "I searched for Namen or Dinant. Is this the same page?",
      a: "Yes. Each municipality has one page, under its English name where there is one and otherwise under its French name. In Dutch, Namur is Namen and Gembloux is Gembloers, but they are the same municipalities. The drying package, delivery and installation are the same everywhere.",
    },
    {
      q: "My house stands against the rock in the Meuse valley. Does a dehumidifier help with the damp back wall?",
      a: "It removes the moisture from the air and from the wall, so you can plaster or paint. If water keeps coming from the slope behind the house, a dehumidifier will not solve that: then you need drainage or waterproofing, after which the wall can dry out. At the start the technician measures where the moisture is and tells you honestly what the dehumidifier can do.",
    },
    {
      q: "Our second home in the Ardennes smells musty after the winter. What do you recommend?",
      a: "Usually that is not water damage but condensation: a cold house that was shut for months. A desiccant dehumidifier then works better than a condensation dehumidifier, because it keeps absorbing moisture even at low temperatures. In the meantime, heat and ventilate as much as possible, and check behind cupboards and in the corners for mould.",
    },
    {
      q: "How long does it take to dry a renovated farmhouse in the Condroz?",
      a: "Longer than a new build, because the thick natural stone walls only release their moisture after weeks, and the new screed comes on top of that. Allow a few weeks with one dehumidifier per floor, and in winter with a heater as well. At collection the technician measures again, so you know whether the floor layer or the decorator can start.",
    },
  ],
  realisaties: {
    kop: "Sites near Namur",
    intro: "We have not yet photographed a site in the province of Namur. These three are in Brussels, which our route to Gembloux and Namur passes through.",
    slugs: ["woning-drogen-brussel", "badkamer-drogen-brussel", "pleisterwerk-drogen-sint-pieters-woluwe"],
  },
  areaServed: provinceEn("Namur"),
};
