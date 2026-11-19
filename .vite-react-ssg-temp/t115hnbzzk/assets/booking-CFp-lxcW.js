import { C as COVER, E as EXTRAS, b as PUMP, L as LADDER_FEE, D as DELIVERY, M as MAX_FLOORS } from "./verhuur-CgnDb-wO.js";
import { T as TARIEVEN } from "./tarieven-ZrzMF0e-.js";
import { z as zoneVoor, t as transportTarief, a as transportLabel, n as normaliseerPostcode, i as isLand } from "./levering-CO7G5c_f.js";
import { D as DEVICE_KEYS, b as allItems, c as configWeeks, d as configPrice, f as deviceCount } from "./verhuur-8XCQs1EE.js";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/lib/booking.ts");
const MAX_EXTRA_DEVICES = Number(TARIEVEN.pricing.max_extra_devices);
const ONLINE_DISCOUNT = Number(TARIEVEN.pricing.online_discount);
const DEPOSIT_GROSS = Number(TARIEVEN.pricing.deposit);
const VAT_RATE = 0.21;
function withVat(amount) {
  return Math.round(amount * (1 + VAT_RATE) * 100) / 100;
}
const EMPTY_OPTIONS = {
  cover: "comfort",
  extras: [],
  pumps: null,
  dev: {},
  floors: 0,
  access: "trap",
  delivery: DELIVERY[0].k,
  payment: "online",
  land: null,
  postcode: null,
  spoed: false
};
function clampInt(n, min, max) {
  const v = Math.floor(Number(n));
  if (!Number.isFinite(v)) return min;
  return Math.min(max, Math.max(min, v));
}
function normalizeOptions(raw) {
  const o = raw ?? {};
  const dev = {};
  for (const k of DEVICE_KEYS) {
    const q = clampInt(o.dev?.[k] ?? 0, 0, MAX_EXTRA_DEVICES);
    if (q > 0) dev[k] = q;
  }
  return {
    cover: COVER.some((c) => c.k === o.cover) ? o.cover : EMPTY_OPTIONS.cover,
    extras: Array.isArray(o.extras) ? EXTRAS.filter((x) => o.extras?.includes(x.k)).map((x) => x.k) : [],
    pumps: o.pumps === null || o.pumps === void 0 ? null : clampInt(o.pumps, 0, 99),
    dev,
    floors: clampInt(o.floors ?? 0, 0, MAX_FLOORS),
    access: o.access === "ladder" ? "ladder" : "trap",
    delivery: DELIVERY.some((d) => d.k === o.delivery) ? o.delivery : EMPTY_OPTIONS.delivery,
    payment: o.payment === "levering" ? "levering" : "online",
    land: isLand(o.land) ? o.land : null,
    postcode: normaliseerPostcode(o.postcode),
    spoed: o.spoed === true
  };
}
function stable(value) {
  if (Array.isArray(value)) return `[${value.map(stable).join(",")}]`;
  if (value !== null && typeof value === "object") {
    const entries = Object.entries(value).filter(([, v]) => v !== void 0).sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0);
    return `{${entries.map(([k, v]) => `${JSON.stringify(k)}:${stable(v)}`).join(",")}}`;
  }
  return JSON.stringify(value) ?? "null";
}
function bookingFingerprint(payload) {
  return stable(payload);
}
function extraUitQuery(qs) {
  const uit = {};
  for (const deel of (qs.get("extra") ?? "").split(",")) {
    const [k, n] = deel.split(":");
    if (!DEVICE_KEYS.includes(k)) continue;
    const q = clampInt(Number(n), 0, MAX_EXTRA_DEVICES);
    if (q > 0) uit[k] = q;
  }
  return uit;
}
function extraNaarQuery(extra) {
  const delen = DEVICE_KEYS.filter((k) => (extra[k] ?? 0) > 0).map((k) => `${k}:${extra[k]}`);
  return delen.length ? `&extra=${encodeURIComponent(delen.join(","))}` : "";
}
function bookingSummary(config, raw) {
  const options = normalizeOptions(raw);
  const items = allItems(config, options.dev);
  const dryerCount = items.filter((it) => it.k === "small" || it.k === "medium").reduce((s, it) => s + it.q, 0);
  const pumps = Math.min(options.pumps ?? dryerCount, dryerCount);
  const weeks = configWeeks(config);
  const base = configPrice(config, items);
  const lines = [];
  const coverTier = COVER.find((c) => c.k === options.cover) ?? COVER[0];
  lines.push(
    coverTier.price ? { l: `Dekking ${coverTier.name}`, v: coverTier.price } : { l: "Standaard dekking", v: 0, inc: true }
  );
  lines.push({ l: "Vochtmeting bij start & oplevering", v: 0, inc: true });
  for (const x of EXTRAS) {
    if (!options.extras.includes(x.k)) continue;
    lines.push({
      l: x.name + (x.perWeek ? ` · ${weeks} wk` : ""),
      v: x.perWeek ? x.price * weeks : x.price
    });
  }
  if (pumps > 0) {
    const days = weeks * 7;
    lines.push({ l: `${pumps}× condenspomp · ${days} dagen`, v: pumps * PUMP.price * days });
  }
  if (options.floors > 0) {
    lines.push(
      options.access === "ladder" ? { l: "Plaatsing verdieping via ladder", v: LADDER_FEE } : { l: "Plaatsing op verdieping (trap)", v: 0, inc: true }
    );
  }
  const deliveryOption = DELIVERY.find((d) => d.k === options.delivery) ?? DELIVERY[0];
  if (deliveryOption.price) lines.push({ l: "Zelf afhalen", v: deliveryOption.price });
  const leverzone = zoneVoor(options.land, options.postcode);
  const leverbaar = leverzone !== null && leverzone.zone.tarief !== null;
  const spoed = options.spoed && leverzone?.zone.spoed !== null && leverzone?.zone.spoed !== void 0;
  const transport = leverbaar ? transportTarief(leverzone.zone, spoed) ?? 0 : 0;
  if (leverbaar) {
    if (transport > 0) {
      lines.push({ l: transportLabel(leverzone.zone, spoed), v: transport });
    } else {
      lines.push({ l: "Levering, plaatsing en ophaling", v: 0, inc: true });
    }
  }
  const total = base + lines.reduce((s, r) => s + r.v, 0);
  const discount = options.payment === "online" ? Math.round((total - transport) * ONLINE_DISCOUNT * 100) / 100 : 0;
  const netTotal = Math.round((total - discount) * 100) / 100;
  const vat = Math.round(netTotal * VAT_RATE * 100) / 100;
  const grossTotal = Math.round((netTotal + vat) * 100) / 100;
  const payableGross = options.payment === "online" ? grossTotal : DEPOSIT_GROSS;
  const payable = options.payment === "online" ? netTotal : Math.round(DEPOSIT_GROSS / (1 + VAT_RATE) * 100) / 100;
  return {
    items,
    deviceCount: deviceCount(items),
    dryerCount,
    pumps,
    base,
    lines,
    total,
    transport,
    leverzone,
    leverbaar,
    spoed,
    discount,
    netTotal,
    payable,
    vat,
    grossTotal,
    payableGross,
    weeks,
    days: weeks * 7
  };
}
export {
  DEPOSIT_GROSS as D,
  EMPTY_OPTIONS as E,
  MAX_EXTRA_DEVICES as M,
  ONLINE_DISCOUNT as O,
  VAT_RATE as V,
  extraUitQuery as a,
  bookingSummary as b,
  bookingFingerprint as c,
  extraNaarQuery as e,
  withVat as w
};
