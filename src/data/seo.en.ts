import type { SeoEntry, SeoSleutel } from "./seo";

/**
 * Titels en beschrijvingen in het Engels (Brits), met dezelfde sleutels als
 * `SEO` in `seo.ts` en dezelfde richtlijn: titel 50–60 tekens met het zoekwoord
 * vooraan, beschrijving 120–160 tekens. Hoofdterm "construction dehumidifier",
 * zoekwoord "dehumidifier hire"; Brits: metre, litre, mould.
 *
 * Het type is `Record<SeoSleutel, …>`, zoals bij `seo.fr.ts`: een nieuwe sleutel
 * in `seo.ts` zonder Engelse tekst breekt de typecheck, in plaats van stil een
 * Nederlandse titel op een Engelse pagina te zetten. De import is `import type`,
 * dus er ontstaat geen cirkel met `seo.ts` tijdens het uitvoeren.
 *
 * `noindex` volgt het Nederlands; `src/test/seoEn.test.ts` bewaakt dat.
 */
export const SEO_EN: Record<SeoSleutel, SeoEntry> = {
  home: {
    title: "Construction dehumidifier hire, delivered in 24 h | Vernast",
    description:
      "Work out which construction dehumidifier you need and book online. Delivery, installation, moisture reading and collection included, within 24 hours.",
  },

  /* ---------- Applications ---------- */
  nieuwbouw: {
    title: "Drying screed and plaster in a new build | Vernast",
    description:
      "Screed just laid or freshly plastered? Dry up to four times faster with a professional construction dehumidifier. Delivery, installation and free reading.",
  },
  chapeDrogen: {
    title: "Screed drying with a construction dehumidifier | Vernast",
    description:
      "Screed drying with a drying package: hire period per screed thickness, delivery and installation, moisture readings before and after, and the drying guarantee.",
  },
  pleisterwerkDrogen: {
    title: "Plaster drying with a construction dehumidifier | Vernast",
    description:
      "Plaster drying with a drying package: hire period per coat thickness, delivery and installation, readings before and after, and a date your painter can start.",
  },
  waterschade: {
    title: "Water damage: dehumidifier delivered the same day | Vernast",
    description:
      "Burst pipe or flooding? We deliver your construction dehumidifier and fans today. The first 48 hours decide whether you avoid mould and structural damage.",
  },
  luchtkussenDrogen: {
    title: "Air cushion drying: wall or floor under sheeting | Vernast",
    description:
      "Air cushion drying after water damage: dry air beneath sheeting, aimed at a wet wall or floor. How it works, when it fits and how it differs from room drying.",
  },
  renovatie: {
    title: "Drying a damp cellar or mould in a renovation | Vernast",
    description:
      "Damp walls, a musty smell or mould in a cellar or renovation? Tackle it with a professional construction dehumidifier. Hire with delivery and a free reading.",
  },
  ozonbehandeling: {
    title: "Ozone treatment against mould and odours | Vernast",
    description:
      "Mould or a musty smell that keeps coming back? An ozone treatment kills the remaining spores throughout the room. Book online, carried out by our own team.",
  },
  ontschimmeling: {
    title: "Mould removal: tackling mould at the source | Vernast",
    description:
      "Need mould removed? We tackle the cause, take out the affected material and dry until the moisture reading confirms it. Free site visit included.",
  },

  /* ---------- Range ---------- */
  machines: {
    title: "Hire construction dehumidifiers, fans and heaters | Vernast",
    description:
      "See every unit you can hire from us: condensation dehumidifiers from 50 to 90 litres a day, axial and radial fans and electric site heaters.",
  },
  prijzen: {
    title: "Dehumidifier hire prices and drying guarantee | Vernast",
    description:
      "The price of a construction dehumidifier per day, per week or per drying package. No deposit and a 100% drying guarantee on calculated packages we install.",
  },

  /* ---------- Service ---------- */
  levering: {
    title: "Construction dehumidifier delivery and set-up | Vernast",
    description:
      "We bring your drying package to site within 24 hours, set up every unit, connect the condensate drain and collect everything again once you are dry.",
  },
  afhalen: {
    title: "Collect a construction dehumidifier in Aartselaar | Vernast",
    description:
      "How collecting a construction dehumidifier from Vernast in Aartselaar works: online booking, transport, time slots, address and route to our depot by the A12.",
  },

  /* ---------- Company ---------- */
  overOns: {
    title: "About Vernast - Belgian family firm in building drying",
    description:
      "Vernast Bouwdrogers is a Belgian family business from Aartselaar with years of experience in building drying, damp control and painting work.",
  },
  contact: {
    title: "Contact: call +32 3 689 90 65 or send an email | Vernast",
    description:
      "Questions about drying, or need an urgent delivery? Call +32 3 689 90 65 on weekdays between 08:00 and 17:00, or send us a message.",
  },
  klantservice: {
    title: "Customer service: orders, delivery and units | Vernast",
    description:
      "Our customer service helps with orders, delivery, returns and operating your construction dehumidifier. Call, email or find an answer in the FAQs straight away.",
  },
  realisaties: {
    title: "Projects: 22 drying jobs with photos from site | Vernast",
    description:
      "From plasterwork in a new-build villa to a flooded cellar: 22 drying projects we carried out, each with photos taken on the site itself.",
  },

  /* ---------- All about drying ---------- */
  drooggarantie: {
    title: "Drying guarantee: 100% dry or extended free | Vernast",
    description:
      "The Vernast drying guarantee: your home is 100% dry within the calculated period, confirmed by a moisture reading. Not dry? You keep hiring at no extra cost.",
  },
  hoeDrogenWerkt: {
    title: "Building drying: how a dehumidifier dries a home | Vernast",
    description:
      "How does a construction dehumidifier work? Temperature, humidity and air circulation: the cycle from wet plaster, screed or concrete to a dry structure.",
  },
  waaromBouwdroging: {
    title: "Why building drying? Faster and safer drying | Vernast",
    description:
      "Natural drying is slow and unpredictable. Controlled building drying protects your finishes, speeds up your schedule and is measured dry, with a guarantee.",
  },

  /* ---------- Guides ---------- */
  gids: {
    title: "Guides to building drying: drying time and power | Vernast",
    description:
      "Practical guides to building drying: how long screed and plaster take to dry, choosing a condensation or desiccant dryer and what a dehumidifier uses in power.",
  },
  gidsChapeDrogen: {
    title: "How long does screed take to dry? Time per cm | Vernast",
    description:
      "How long does screed take to dry? Drying time per thickness, naturally and with a dehumidifier, cement versus anhydrite screed and when to measure moisture.",
  },
  gidsPleisterDrogen: {
    title: "How long does plaster take to dry before painting?",
    description:
      "How long does plaster need to dry before you paint? Drying time per coat thickness, gypsum or cement plaster, and why moisture lingers in a closed house.",
  },
  gidsCondensAdsorptie: {
    title: "Condensation or desiccant dehumidifier? The difference",
    description:
      "Condensation or desiccant dehumidifier hire? How they work, why a condensation dryer loses efficiency below about 15 °C and which unit suits your situation.",
  },
  gidsNatuurlijkDrogen: {
    title: "New build: natural drying or a dehumidifier? | Vernast",
    description:
      "How long does a new build take to dry naturally, and what does a construction dehumidifier do differently? The difference per season, per layer and in weeks.",
  },
  gidsStroomverbruik: {
    title: "Dehumidifier power consumption: cost per day | Vernast",
    description:
      "How much electricity does a construction dehumidifier use? The power of our units, a worked example per day and per week, and why it can run through the night.",
  },
  luchtontvochtigerHuren: {
    title: "Dehumidifier hire for cellars and building work | Vernast",
    description:
      "Dehumidifier hire for a damp cellar, after water damage or in a new build. Condensation units from 50 to 110 litres a day, with daily price and delivery.",
  },

  /* ---------- Legal ---------- */
  algemeneVoorwaarden: {
    title: "General terms and conditions of hire | Vernast Bouwdrogers",
    description:
      "The general terms and conditions of hire at Vernast: hire period, delivery and collection, prices, liability, insurance and the privacy policy.",
    noindex: true,
  },
  sitemap: {
    title: "Sitemap: every page on one list | Vernast Bouwdrogers",
    description:
      "Every page of Vernast Bouwdrogers at a glance: drying packages, units and their capacity, guides, projects and every municipality we deliver to.",
  },
  privacy: {
    title: "Privacy policy | Vernast Bouwdrogers dehumidifier hire",
    description:
      "The Vernast privacy policy: which personal data we process, for what purpose, how long we keep it and which rights you have under the GDPR.",
    noindex: true,
  },

  /* ---------- Rental funnel ---------- */
  verhuurCalculator: {
    title: "Put together your drying package in 5 questions | Vernast",
    description:
      "Answer five questions about your home, what you are drying and your heating. We automatically work out the right units, the drying time and the price.",
  },
  verhuurSimulator: {
    title: "Drying simulator: see your dehumidifiers at work | Vernast",
    description:
      "Choose your home, floors, screed or plaster and the building stage. See straight away which dehumidifiers go in which room and what the drying package costs.",
  },
  verhuurAfhalen: {
    title: "Hire individual units and collect in Aartselaar | Vernast",
    description:
      "Hire individual dehumidifiers, fans and heaters at lower collection prices and pick them up at our depot in Aartselaar. Book online with a 5% discount.",
  },
  toebehorenCondenspomp: {
    title: "Condensate pump hire for your dehumidifier | Vernast",
    description:
      "Hire a condensate pump so the condensate drains away automatically: 90 l/h, pumps up to 3.90 m high. With a delivered package or with a collected unit.",
  },
  verhuurBoeking: {
    title: "Complete your booking | Vernast",
    description: "Choose your cover, extras and delivery date and complete your booking.",
    noindex: true,
  },

  /* ---------- Transactional ---------- */
  booking: {
    title: "Request your booking | Vernast Bouwdrogers",
    description: "Fill in your details; we will contact you within one working day to arrange delivery.",
    noindex: true,
  },
  bookingSuccess: {
    title: "Thank you for your booking | Vernast Bouwdrogers",
    description: "Your booking has been received. We will confirm by phone within one working day.",
    noindex: true,
  },
  notFound: {
    title: "Page not found | Vernast Bouwdrogers",
    description: "This page does not exist or has been moved.",
    noindex: true,
  },
};
