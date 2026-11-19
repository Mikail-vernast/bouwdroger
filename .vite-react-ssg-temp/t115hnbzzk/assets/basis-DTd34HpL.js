import { R as REGIO_ROUTES, i as plaatsFr } from "../main.mjs";
import { T as TARIEVEN } from "./tarieven-ZrzMF0e-.js";
import { P as PRODUCTS } from "./verhuur-CgnDb-wO.js";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/regios-fr/basis.ts");
function routeFr(slug) {
  const r = REGIO_ROUTES.find((x) => x.slug === slug);
  if (!r?.nameFr) throw new Error(`Geen Franse provincie: ${slug}`);
  return { ...r, name: r.nameFr, towns: r.towns.map(plaatsFr) };
}
const euroFr = (n) => `${n.toLocaleString("fr-BE")} €`;
const dagFr = (key) => euroFr(PRODUCTS[key].day);
const LADDER_FR = euroFr(TARIEVEN.pricing.ladder_fee);
const POMP_FR = euroFr(TARIEVEN.pricing.pump_price_per_day);
const provinceFr = (name) => ({
  "@type": "AdministrativeArea",
  name,
  containedInPlace: { "@type": "Country", name: "Belgique" }
});
export {
  LADDER_FR as L,
  POMP_FR as P,
  dagFr as d,
  provinceFr as p,
  routeFr as r
};
