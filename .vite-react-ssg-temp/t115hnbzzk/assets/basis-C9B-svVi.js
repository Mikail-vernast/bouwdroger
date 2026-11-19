import { R as REGIO_ROUTES, y as plaatsEn } from "../main.mjs";
import { T as TARIEVEN } from "./tarieven-ZrzMF0e-.js";
import { P as PRODUCTS } from "./verhuur-CgnDb-wO.js";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/regios-en/basis.ts");
function routeEn(slug) {
  const r = REGIO_ROUTES.find((x) => x.slug === slug);
  if (!r?.nameEn) throw new Error(`Geen Engelse provincie: ${slug}`);
  return { ...r, name: r.nameEn, towns: r.towns.map(plaatsEn) };
}
const euroEn = (n) => `€${n.toLocaleString("en-GB")}`;
const dagEn = (key) => euroEn(PRODUCTS[key].day);
const LADDER_EN = euroEn(TARIEVEN.pricing.ladder_fee);
const POMP_EN = euroEn(TARIEVEN.pricing.pump_price_per_day);
const provinceEn = (name) => ({
  "@type": "AdministrativeArea",
  name,
  containedInPlace: { "@type": "Country", name: "Belgium" }
});
export {
  LADDER_EN as L,
  POMP_EN as P,
  dagEn as d,
  provinceEn as p,
  routeEn as r
};
