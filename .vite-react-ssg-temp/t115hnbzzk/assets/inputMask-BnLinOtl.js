globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/lib/inputMask.ts");
const MOBILE_PREFIX = /^04[5-9]/;
const TWO_DIGIT_ZONE = /^0[2349]/;
function group(digits, sizes) {
  const parts = [];
  let rest = digits;
  for (const size of sizes) {
    if (!rest) break;
    parts.push(rest.slice(0, size));
    rest = rest.slice(size);
  }
  return parts.join(" ");
}
function groupNational(digits) {
  if (MOBILE_PREFIX.test(digits)) return group(digits.slice(0, 10), [4, 2, 2, 2]);
  if (TWO_DIGIT_ZONE.test(digits)) return group(digits.slice(0, 9), [2, 3, 2, 2]);
  return group(digits.slice(0, 9), [3, 2, 2, 2]);
}
function maskPhone(raw) {
  const trimmed = raw.trimStart();
  const hasPlus = trimmed.startsWith("+");
  const digits = trimmed.replace(/\D/g, "");
  if (!digits) return hasPlus ? "+" : "";
  const isBelgianIntl = digits.startsWith("32") && (hasPlus || digits.length > 9);
  if (isBelgianIntl) {
    const national = digits.slice(2).replace(/^0+/, "");
    return national ? `+32 ${groupNational(`0${national}`).slice(1).trimStart()}` : "+32";
  }
  if (hasPlus) return `+${digits}`;
  return groupNational(digits.startsWith("0") ? digits : `0${digits}`);
}
function normalizePhone(raw) {
  const digits = raw.replace(/\D/g, "");
  if (raw.trimStart().startsWith("+")) return `+${digits}`;
  if (digits.startsWith("32") && digits.length > 9) return `+${digits}`;
  if (!digits) return "";
  return digits.startsWith("0") ? digits : `0${digits}`;
}
function isValidPhone(raw) {
  const normalized = normalizePhone(raw);
  if (normalized.startsWith("+32")) return normalized.length === 12;
  if (normalized.startsWith("+")) return normalized.length >= 9 && normalized.length <= 16;
  return /^0\d{8,9}$/.test(normalized);
}
function maskEmail(raw) {
  return raw.replace(/[\s,;<>()[\]\\"]/g, "").toLowerCase();
}
function isValidEmail(raw) {
  return /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)+$/.test(maskEmail(raw));
}
export {
  maskPhone as a,
  isValidPhone as b,
  isValidEmail as i,
  maskEmail as m
};
