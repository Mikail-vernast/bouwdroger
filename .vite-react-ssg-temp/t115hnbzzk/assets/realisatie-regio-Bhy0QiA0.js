import { R as REGIO_ROUTES } from "../main.mjs";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/realisatie-regio.ts");
const REALISATIE_REGIO = {
  "expositieruimte-drogen-boom": "antwerpen",
  "kelder-en-kamer-drogen-antwerpen": "antwerpen",
  "nieuwbouw-drogen-putte": "antwerpen",
  "bouwvocht-drogen-wintam": "antwerpen",
  "nieuwbouw-drogen-kontich": "antwerpen",
  "pleisterwerk-drogen-berchem": "antwerpen",
  "pleisterwerk-drogen-merksem": "antwerpen",
  "nieuwbouwvilla-drogen-schilde": "antwerpen",
  "kelder-drogen-antwerpen": "antwerpen",
  "kelder-drogen-lokeren": "oost-vlaanderen",
  "berging-drogen-berlare": "oost-vlaanderen",
  "pleisterwerk-drogen-sint-pieters-woluwe": "brussel",
  "badkamer-drogen-brussel": "brussel",
  "woning-drogen-brussel": "brussel",
  "pleisterwerk-drogen-oostende": "west-vlaanderen",
  "kelder-drogen-brugge": "west-vlaanderen",
  "chape-pleisterwerk-drogen-hasselt": "limburg",
  "waterschade-drogen-bocholt": "limburg"
};
const LEENT_VAN = {
  "nederlands-limburg": "limburg",
  "zeeland": "west-vlaanderen",
  "noord-brabant": "antwerpen",
  "luik": "limburg",
  "luxemburg": "brussel",
  "namen": "brussel",
  "vlaams-brabant": "brussel",
  "waals-brabant": "brussel",
  "henegouwen": "brussel"
};
function regioVanRealisatie(slug) {
  const regio = REALISATIE_REGIO[slug];
  return regio ? REGIO_ROUTES.find((r) => r.slug === regio) : void 0;
}
function realisatieSlugsIn(regioSlug) {
  const eigen = Object.entries(REALISATIE_REGIO).filter(([, regio]) => regio === regioSlug).map(([slug]) => slug);
  if (eigen.length > 0) return eigen;
  const leen = LEENT_VAN[regioSlug];
  return leen ? realisatieSlugsIn(leen) : [];
}
export {
  realisatieSlugsIn as a,
  regioVanRealisatie as r
};
