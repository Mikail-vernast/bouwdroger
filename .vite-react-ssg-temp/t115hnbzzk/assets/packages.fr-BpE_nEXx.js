globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/packages.en.ts");
const ZINNEN$1 = {
  /* Categorieën */
  "Chape drogen": "Screed drying",
  "Pleisterwerk drogen": "Plaster drying",
  "Pleisterwerk + chape drogen": "Plaster + screed drying",
  "Waterschade drogen": "Water damage drying",
  /* Omschrijvingen */
  "Absorptiedroging na waterschade, met voorrang op de planning.": "Desiccant drying after water damage, with priority in the schedule.",
  "Chape drogen tot een veilige restvochtigheid, klaar voor vloerafwerking.": "Dry the screed to a safe residual moisture level, ready for floor finishing.",
  "Muren en vloer in één keer drogen, pleisterwerk en chape samen.": "Dry walls and floor in one go, plaster and screed together.",
  "Pleisterwerk drogen zodat schilderwerk en afwerking veilig kunnen starten.": "Dry the plaster so painting and finishing can start safely.",
  /* Wat altijd inbegrepen is */
  "Levering en installatie binnen 24 uur": "Delivery and installation within 24 hours",
  "Ophaling na afloop van de huurperiode": "Collection at the end of the hire period",
  "Plaatsing op de juiste posities door onze techniekers": "Placement in the right positions by our technicians",
  "Voor- en nameting van de restvochtigheid": "Residual moisture reading before and after",
  /* Toestellen */
  "Elektrische kachel": "Electric heater",
  "Small Bouwdroger": "Small construction dehumidifier",
  "Large Bouwdroger": "Large construction dehumidifier",
  "Axiaal Ventilator": "Axial fan",
  "Elektrische Kachel": "Electric heater"
};
const SPEC_SLEUTEL$1 = {
  Bereik: "Coverage",
  Capaciteit: "Capacity",
  Luchtdebiet: "Airflow",
  Model: "Model",
  Standen: "Speeds",
  Thermostaat: "Thermostat",
  Vermogen: "Power",
  Gewicht: "Weight",
  Geluidsniveau: "Noise level",
  Diameter: "Diameter"
};
function specWaarde$1(v) {
  if (v === "ingebouwd") return "built in";
  if (v === "Ja") return "Yes";
  return v.replace(/^tot\s*(\d[\d.,]*)\s*m([²³])/i, "up to $1 m$2").replace(/(\d)\s*L\/dag/, "$1 l/day").replace(/m³\/uur/, "m³/h").replace(/(\d)\.(\d{3})/, "$1,$2").replace(/(\d),(\d{1,2})\b(?!\d)/, "$1.$2").replace(/(\d)(W|mm|kg)\b/, "$1 $2");
}
const WERK_TITEL$1 = {
  "Pleisterwerk + chape drogen": "plaster + screed",
  "Waterschade drogen": "water damage"
};
const WERK_KORT$1 = {
  Chape: "Screed",
  "Pleisterwerk + chape": "Plaster + screed",
  Pleisterwerk: "Plaster",
  Waterschade: "Water damage"
};
function maatLabel$1(nl) {
  const m = /^(Gebouw|Ruimte) tot (\d+) m²$/.exec(nl);
  if (!m) return nl;
  return `${m[1] === "Gebouw" ? "Building" : "Room"} up to ${m[2]} m²`;
}
function titel$1(nl) {
  const m = /^((?:Gebouw|Ruimte) tot \d+ m²), (.+)$/.exec(nl);
  if (!m) return nl;
  const maat = maatLabel$1(m[1]);
  const rest = m[2];
  const chape = /^chape (\d+) cm$/.exec(rest);
  if (chape) return `${maat}, ${chape[1]} cm screed`;
  const pleister = /^pleisterdikte (\d+) cm$/.exec(rest);
  if (pleister) return `${maat}, ${pleister[1]} cm plaster`;
  const werk = WERK_TITEL$1[rest];
  return werk ? `${maat}, ${werk}` : nl;
}
function kort$1(nl) {
  const m = /^(.+) (\d+ m²)$/.exec(nl);
  const werk = m && WERK_KORT$1[m[1]];
  return werk ? `${werk} ${m[2]}` : nl;
}
const zin$1 = (nl) => ZINNEN$1[nl] ?? nl;
function pakketInEngels(pkg) {
  return {
    ...pkg,
    title: titel$1(pkg.title),
    shortTitle: kort$1(pkg.shortTitle),
    description: zin$1(pkg.description),
    category: zin$1(pkg.category),
    sizeLabel: maatLabel$1(pkg.sizeLabel),
    includes: pkg.includes.map(zin$1),
    equipment: pkg.equipment.map((e) => ({
      ...e,
      name: zin$1(e.name),
      specs: Object.fromEntries(Object.entries(e.specs).map(([k, v]) => [SPEC_SLEUTEL$1[k] ?? k, specWaarde$1(v)]))
    }))
  };
}
function packageMetaTitleEn(pkgEn) {
  return `${pkgEn.shortTitle} drying package hire`;
}
function equipmentSummaryEn(pkgEn) {
  return pkgEn.equipment.map((item) => `${item.count}× ${item.name}`).join(", ");
}
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/packages.fr.ts");
const ZINNEN = {
  /* Categorieën */
  "Chape drogen": "Séchage de chape",
  "Pleisterwerk drogen": "Séchage de plafonnage",
  "Pleisterwerk + chape drogen": "Séchage plafonnage + chape",
  "Waterschade drogen": "Séchage après dégâts des eaux",
  /* Omschrijvingen */
  "Absorptiedroging na waterschade, met voorrang op de planning.": "Séchage par adsorption après dégâts des eaux, en priorité dans le planning.",
  "Chape drogen tot een veilige restvochtigheid, klaar voor vloerafwerking.": "Sécher la chape jusqu'à une humidité résiduelle sûre, prête pour le revêtement de sol.",
  "Muren en vloer in één keer drogen, pleisterwerk en chape samen.": "Sécher murs et sol en une fois, plafonnage et chape ensemble.",
  "Pleisterwerk drogen zodat schilderwerk en afwerking veilig kunnen starten.": "Sécher le plafonnage pour que la peinture et la finition puissent commencer en toute sécurité.",
  /* Wat altijd inbegrepen is */
  "Levering en installatie binnen 24 uur": "Livraison et installation sous 24 heures",
  "Ophaling na afloop van de huurperiode": "Reprise à la fin de la période de location",
  "Plaatsing op de juiste posities door onze techniekers": "Placement aux bons endroits par nos techniciens",
  "Voor- en nameting van de restvochtigheid": "Mesure d'humidité résiduelle avant et après",
  /* Toestellen */
  "Elektrische kachel": "Chauffage électrique",
  "Small Bouwdroger": "Déshumidificateur de chantier Small",
  "Large Bouwdroger": "Déshumidificateur de chantier Large",
  "Axiaal Ventilator": "Ventilateur axial",
  "Elektrische Kachel": "Chauffage électrique"
};
const SPEC_SLEUTEL = {
  Bereik: "Portée",
  Capaciteit: "Capacité",
  Luchtdebiet: "Débit d'air",
  Model: "Modèle",
  Standen: "Vitesses",
  Thermostaat: "Thermostat",
  Vermogen: "Puissance",
  Gewicht: "Poids",
  Geluidsniveau: "Niveau sonore",
  Diameter: "Diamètre"
};
function specWaarde(v) {
  if (v === "ingebouwd") return "intégré";
  if (v === "Ja") return "Oui";
  return v.replace(/^tot\s*(\d[\d.,]*)\s*m([²³])/i, "jusqu'à $1 m$2").replace(/(\d)\s*L\/dag/, "$1 l/jour").replace(/m³\/uur/, "m³/h").replace(/(\d)\.(\d{3})/, "$1 $2").replace(/(\d)(W|mm|kg)\b/, "$1 $2");
}
const WERK_TITEL = {
  "Pleisterwerk + chape drogen": "plafonnage + chape",
  "Waterschade drogen": "dégâts des eaux"
};
const WERK_KORT = {
  Chape: "Chape",
  "Pleisterwerk + chape": "Plafonnage + chape",
  Pleisterwerk: "Plafonnage",
  Waterschade: "Dégâts des eaux"
};
function maatLabel(nl) {
  const m = /^(Gebouw|Ruimte) tot (\d+) m²$/.exec(nl);
  if (!m) return nl;
  return `${m[1] === "Gebouw" ? "Bâtiment" : "Pièce"} jusqu'à ${m[2]} m²`;
}
function titel(nl) {
  const m = /^((?:Gebouw|Ruimte) tot \d+ m²), (.+)$/.exec(nl);
  if (!m) return nl;
  const maat = maatLabel(m[1]);
  const rest = m[2];
  const chape = /^chape (\d+) cm$/.exec(rest);
  if (chape) return `${maat}, chape de ${chape[1]} cm`;
  const pleister = /^pleisterdikte (\d+) cm$/.exec(rest);
  if (pleister) return `${maat}, plafonnage de ${pleister[1]} cm`;
  const werk = WERK_TITEL[rest];
  return werk ? `${maat}, ${werk}` : nl;
}
function kort(nl) {
  const m = /^(.+) (\d+ m²)$/.exec(nl);
  const werk = m && WERK_KORT[m[1]];
  return werk ? `${werk} ${m[2]}` : nl;
}
const zin = (nl) => ZINNEN[nl] ?? nl;
function pakketInTaal(pkg, taal) {
  if (taal === "en") return pakketInEngels(pkg);
  if (taal !== "fr") return pkg;
  return {
    ...pkg,
    title: titel(pkg.title),
    shortTitle: kort(pkg.shortTitle),
    description: zin(pkg.description),
    category: zin(pkg.category),
    sizeLabel: maatLabel(pkg.sizeLabel),
    includes: pkg.includes.map(zin),
    equipment: pkg.equipment.map((e) => ({
      ...e,
      name: zin(e.name),
      specs: Object.fromEntries(
        Object.entries(e.specs).map(([k, v]) => [SPEC_SLEUTEL[k] ?? k, specWaarde(v)])
      )
    }))
  };
}
function packageMetaTitleFr(pkgFr) {
  return `${pkgFr.shortTitle}, location d'un pack de séchage`;
}
function equipmentSummaryFr(pkgFr) {
  return pkgFr.equipment.map((item) => `${item.count}× ${item.name}`).join(", ");
}
export {
  equipmentSummaryFr as a,
  packageMetaTitleEn as b,
  packageMetaTitleFr as c,
  equipmentSummaryEn as e,
  pakketInTaal as p
};
