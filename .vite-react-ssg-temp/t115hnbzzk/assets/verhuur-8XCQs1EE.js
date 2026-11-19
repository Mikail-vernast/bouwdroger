import { e as CAT, F as FIXED_WEEKS, W as WEEKS, f as WET_IMG } from "./verhuur-CgnDb-wO.js";
import { findPackage, packageThicknesses, packageSizes } from "./packages-DdkKuPcF.js";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/lib/vastPakket.ts");
function workType(wat) {
  if (wat === "pleister" || wat === "chape" || wat === "beide" || wat === "waterschade") {
    return wat;
  }
  return null;
}
function thicknessFor(c) {
  if (c.wat === "chape") return Number(c.cd);
  if (c.wat === "pleister") return Number(c.pd);
  return null;
}
function packageFor(c) {
  const soort = workType(c.wat);
  if (!soort) return null;
  const sqm = Number(c.size);
  if (!Number.isFinite(sqm)) return null;
  return findPackage(sqm, soort, thicknessFor(c)) ?? null;
}
function deviceKeyFor(item) {
  if (item.type === "ventilator") return "axiaal";
  if (item.type === "kachel") return "kachel";
  const liters = Number((item.specs?.Capaciteit ?? "").replace(/[^\d]/g, ""));
  return liters >= 70 ? "medium" : "small";
}
function tellen(equipment) {
  const perKey = /* @__PURE__ */ new Map();
  for (const item of equipment) {
    const key = deviceKeyFor(item);
    perKey.set(key, (perKey.get(key) ?? 0) + item.count);
  }
  const volgorde = ["small", "medium", "axiaal", "kachel"];
  return volgorde.filter((k) => (perKey.get(k) ?? 0) > 0).map((k) => ({ k, q: perKey.get(k) }));
}
function packageItems(pkg) {
  return tellen(pkg.equipment.filter((item) => !item.optional));
}
function packageOptionalItems(pkg) {
  return tellen(pkg.equipment.filter((item) => item.optional));
}
function packageWeeks(pkg) {
  return pkg.rentalWeeks && pkg.rentalWeeks > 0 ? pkg.rentalWeeks : 2;
}
function packageTotal(pkg) {
  return Math.round(pkg.pricePerDay * packageWeeks(pkg) * 7 * 100) / 100;
}
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/lib/verhuur.ts");
const DEVICE_KEYS = ["small", "medium", "axiaal", "kachel"];
function euro(n) {
  const prefix = n < 0 ? "− € " : "€ ";
  return prefix + Math.abs(n).toLocaleString("nl-BE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function euroInt(n) {
  const centen = Math.round(n * 100) % 100 !== 0;
  return "€ " + n.toLocaleString("nl-BE", {
    minimumFractionDigits: centen ? 2 : 0,
    maximumFractionDigits: 2
  });
}
function clampWeeks(raw) {
  const n = typeof raw === "number" ? raw : parseInt(String(raw ?? ""), 10);
  if (!n || Number.isNaN(n)) return 2;
  return Math.min(4, Math.max(1, n));
}
const WAT_VALUES = ["pleister", "chape", "beide", "waterschade"];
const PD_VALUES = packageThicknesses("pleister").map(String);
const CD_VALUES = packageThicknesses("chape").map(String);
const SIZE_VALUES = packageSizes().map(String);
function middle(values, fallback) {
  return values[Math.floor(values.length / 2)] ?? fallback;
}
const DEFAULT_SIZE = SIZE_VALUES.includes("180") ? "180" : middle(SIZE_VALUES, "180");
const DEFAULT_PD = PD_VALUES.includes("2") ? "2" : middle(PD_VALUES, "2");
const DEFAULT_CD = CD_VALUES.includes("6") ? "6" : middle(CD_VALUES, "6");
function pick(raw, allowed, fallback) {
  return raw !== null && allowed.includes(raw) ? raw : fallback;
}
function parseConfig(qs) {
  return {
    size: pick(qs.get("size"), SIZE_VALUES, DEFAULT_SIZE),
    wat: pick(qs.get("wat"), WAT_VALUES, "beide"),
    pd: pick(qs.get("pd"), PD_VALUES, DEFAULT_PD),
    cd: pick(qs.get("cd"), CD_VALUES, DEFAULT_CD),
    heat: qs.get("heat") !== "0",
    weeks: clampWeeks(qs.get("weeks"))
  };
}
function configToQuery(c) {
  return new URLSearchParams({
    size: c.size,
    wat: c.wat,
    pd: c.pd,
    cd: c.cd,
    heat: c.heat ? "1" : "0",
    weeks: String(c.weeks)
  }).toString();
}
function isWaterDamage(c) {
  return c.wat === "waterschade";
}
function heaterCount(items) {
  const drogers = items.filter((it) => it.k === "small" || it.k === "medium").reduce((n, it) => n + it.q, 0);
  return Math.max(1, Math.ceil(drogers / 2));
}
function samenvoegen(basis, bij) {
  const uit = basis.map((it) => ({ ...it }));
  for (const item of bij) {
    const bestaand = uit.find((it) => it.k === item.k);
    if (bestaand) bestaand.q += item.q;
    else uit.push({ ...item });
  }
  return uit;
}
function baseItems(c) {
  const vast = packageFor(c);
  if (!vast) return [];
  const items = packageItems(vast);
  if (!c.heat) return items;
  const opties = packageOptionalItems(vast);
  if (opties.length > 0) return samenvoegen(items, opties);
  return [...items, { k: "kachel", q: heaterCount(items) }];
}
function allItems(c, extra = {}) {
  const base = baseItems(c);
  const merged = base.map((it) => ({ k: it.k, q: it.q + (extra[it.k] || 0) }));
  for (const k of DEVICE_KEYS) {
    if ((extra[k] || 0) > 0 && !base.some((b) => b.k === k)) merged.push({ k, q: extra[k] });
  }
  return merged;
}
function deviceCount(items) {
  return items.reduce((a, it) => a + it.q, 0);
}
function parseDeviceLines(raw) {
  if (!raw) return [];
  const out = [];
  for (const part of raw.split(",")) {
    const bits = part.split(":");
    const product = bits[0] === "p";
    const key = product ? bits[1] : bits[0];
    const qty = Number(product ? bits[2] : bits[1]);
    if (!key || !Number.isFinite(qty) || qty <= 0) continue;
    if (product) out.push({ product_key: key, qty: Math.floor(qty) });
    else if (DEVICE_KEYS.includes(key)) {
      out.push({ device_key: key, qty: Math.floor(qty) });
    }
  }
  return out;
}
function totalCapacity(items) {
  return items.reduce((a, it) => a + CAT[it.k].cap * it.q, 0);
}
function totalAirflow(items) {
  return items.reduce((a, it) => a + CAT[it.k].air * it.q, 0);
}
function packagePrice(items, weeks) {
  const perTwoWeeks = items.reduce((a, it) => a + CAT[it.k].w2 * it.q, 0);
  return Math.round(perTwoWeeks * (WEEKS[weeks] ?? 1));
}
function configWeeks(c) {
  const vast = packageFor(c);
  return vast ? packageWeeks(vast) : FIXED_WEEKS;
}
function configPrice(c, items) {
  const vast = packageFor(c);
  if (!vast) return packagePrice(items, FIXED_WEEKS);
  const inbegrepen = /* @__PURE__ */ new Map();
  for (const it of packageItems(vast)) inbegrepen.set(it.k, it.q);
  const weeks = packageWeeks(vast);
  const meerprijs = items.reduce((som, it) => {
    const extra = Math.max(0, it.q - (inbegrepen.get(it.k) ?? 0));
    return som + CAT[it.k].w2 * extra * (WEEKS[weeks] ?? 1);
  }, 0);
  return Math.round((packageTotal(vast) + meerprijs) * 100) / 100;
}
function dryingDays(c) {
  const vast = packageFor(c);
  return vast ? packageWeeks(vast) * 7 : FIXED_WEEKS * 7;
}
function thicknessBits(c, hoofdletter) {
  if (isWaterDamage(c)) return [hoofdletter ? "Waterschade" : "waterschade"];
  if (c.wat === "chape") return [`${"Chapedikte"} ${c.cd} cm`];
  if (c.wat === "pleister") {
    return [`${"Pleisterdikte"} ${c.pd} cm`];
  }
  return [hoofdletter ? "Pleisterwerk + chape" : "pleisterwerk + chape"];
}
function packageTitle(c) {
  const parts = [`Gebouw kleiner dan ${c.size} m2`, ...thicknessBits(c, true)];
  parts.push(c.heat ? "incl. verwarming" : "excl. verwarming");
  return parts.join(" – ");
}
function aantalVan(items, device) {
  const som = (k) => items.find((it) => it.k === k)?.q ?? 0;
  if (device === "droger") return som("small") + som("medium");
  if (device === "totaal") return items.reduce((n, it) => n + it.q, 0);
  return som(device);
}
function beeldbron(c) {
  const vast = packageFor(c);
  if (vast && vast.images.length > 0) {
    return { basis: vast.images[0], regels: vast.imgRules, galerij: vast.images };
  }
  const regels = vast?.imgRules ?? [];
  return { basis: WET_IMG, regels, galerij: [] };
}
function packageImage(c, items) {
  const { basis, regels } = beeldbron(c);
  if (!items) return basis;
  const regel = regels.find((r) => r.image && aantalVan(items, r.device) >= r.min);
  return regel ? regel.image : basis;
}
const FALLBACK_GALLERY = ["/verhuur/lineup-dryers.webp", "/verhuur/ttv-4500.webp", "/verhuur/teddh-30.webp"];
function packageGallery(c, items) {
  const bron = beeldbron(c);
  const lead = packageImage(c, items);
  const uit = bron.galerij;
  if (!uit.length) return [lead, ...FALLBACK_GALLERY];
  const varianten = new Set(
    [bron.basis, ...bron.regels.map((r) => r.image)].filter(Boolean)
  );
  return [lead, ...uit.filter((foto) => foto !== lead && !varianten.has(foto))];
}
function isoDate(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function addDays(d, days) {
  const out = new Date(d);
  out.setDate(out.getDate() + days);
  return out;
}
function formatLongDate(d) {
  return d.toLocaleDateString("nl-BE", { weekday: "long", day: "numeric", month: "long" });
}
export {
  CD_VALUES as C,
  DEVICE_KEYS as D,
  PD_VALUES as P,
  SIZE_VALUES as S,
  euro as a,
  allItems as b,
  configWeeks as c,
  configPrice as d,
  euroInt as e,
  deviceCount as f,
  DEFAULT_CD as g,
  DEFAULT_SIZE as h,
  isWaterDamage as i,
  parseConfig as j,
  DEFAULT_PD as k,
  configToQuery as l,
  baseItems as m,
  totalCapacity as n,
  dryingDays as o,
  packageWeeks as p,
  packageImage as q,
  packageGallery as r,
  addDays as s,
  totalAirflow as t,
  isoDate as u,
  formatLongDate as v,
  packageTitle as w,
  parseDeviceLines as x
};
