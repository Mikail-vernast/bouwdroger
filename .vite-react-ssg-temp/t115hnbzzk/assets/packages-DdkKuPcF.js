import { T as TARIEVEN } from "./tarieven-ZrzMF0e-.js";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/data/packages.ts");
function variantLabel(pkg) {
  const parts = pkg.title.split("–").map((part) => part.trim());
  return parts.length > 2 ? parts[parts.length - 1] : null;
}
function packageMetaTitle(pkg) {
  const variant = variantLabel(pkg);
  return variant ? `${pkg.shortTitle} · ${variant.toLowerCase()}, droogpakket huren` : `${pkg.shortTitle}, droogpakket huren`;
}
function equipmentSummary(pkg) {
  return pkg.equipment.map((item) => `${item.count}× ${item.name.toLowerCase().replace("bouwdroger", "droger")}`).join(", ");
}
function optioneel(p, key) {
  const waarde = p[key];
  return waarde === void 0 || waarde === null ? void 0 : waarde;
}
const allPackages = TARIEVEN.fixed.map((p) => ({
  id: p.id,
  title: p.title,
  shortTitle: p.shortTitle,
  description: p.description,
  category: p.category,
  sizeLabel: p.sizeLabel,
  pricePerTwoWeeks: Number(p.pricePerTwoWeeks),
  pricePerDay: Number(p.pricePerDay),
  equipment: p.equipment.map((e) => ({
    name: e.name,
    type: e.type,
    count: Number(e.count),
    specs: { ...e.specs },
    optional: e.optional === true
  })),
  includes: [...p.includes],
  images: [...p.images ?? []],
  imgRules: [...p.imgRules ?? []],
  sqm: optioneel(p, "sqm"),
  workType: optioneel(p, "workType"),
  thicknessCm: optioneel(p, "thicknessCm") ?? null,
  rentalWeeks: optioneel(p, "rentalWeeks")
}));
function getPackageById(id) {
  return allPackages.find((p) => p.id === id);
}
const metSleutels = allPackages.filter(
  (p) => p.sqm !== void 0 && p.workType !== void 0
);
function packageSizes() {
  return [...new Set(metSleutels.map((p) => p.sqm))].sort((a, b) => a - b);
}
function packageThicknesses(workType) {
  const uit = metSleutels.filter((p) => p.workType === workType && typeof p.thicknessCm === "number").map((p) => p.thicknessCm);
  return [...new Set(uit)].sort((a, b) => a - b);
}
function findPackage(sqm, workType, thicknessCm) {
  return metSleutels.find(
    (p) => p.sqm === sqm && p.workType === workType && (thicknessCm === null ? p.thicknessCm === null : p.thicknessCm === thicknessCm)
  );
}
function getPackageByAnswers(size, dryingType, plasterThickness, screedThickness, _heating) {
  const sqm = Number(size);
  if (dryingType === "waterschade") return findPackage(sqm, "waterschade", null);
  if (dryingType === "beide") return findPackage(sqm, "beide", null);
  if (dryingType === "pleisterwerk") {
    return findPackage(sqm, "pleister", Number(plasterThickness || "2"));
  }
  if (dryingType === "chape") {
    return findPackage(sqm, "chape", Number(screedThickness || "6"));
  }
  return void 0;
}
function getAllPackages() {
  return allPackages;
}
export {
  equipmentSummary,
  findPackage,
  getAllPackages,
  getPackageByAnswers,
  getPackageById,
  packageMetaTitle,
  packageSizes,
  packageThicknesses
};
