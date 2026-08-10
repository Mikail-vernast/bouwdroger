/**
 * Input masks for the Belgian phone + e-mail fields in the booking flows.
 *
 * The phone mask formats while typing (0473 43 99 50 / 03 689 90 65) and the
 * e-mail mask simply strips what can never be part of an address, so a pasted
 * "  Jan@Voorbeeld.BE " still lands as a usable value.
 */

const MOBILE_PREFIX = /^04[5-9]/;
/** Zones written as two digits: 02 Brussel, 03 Antwerpen, 04 Luik, 09 Gent. */
const TWO_DIGIT_ZONE = /^0[2349]/;

/** Splits digits into fixed-size groups, dropping whatever no longer fits. */
function group(digits: string, sizes: readonly number[]): string {
  const parts: string[] = [];
  let rest = digits;
  for (const size of sizes) {
    if (!rest) break;
    parts.push(rest.slice(0, size));
    rest = rest.slice(size);
  }
  return parts.join(" ");
}

function groupNational(digits: string): string {
  if (MOBILE_PREFIX.test(digits)) return group(digits.slice(0, 10), [4, 2, 2, 2]);
  if (TWO_DIGIT_ZONE.test(digits)) return group(digits.slice(0, 9), [2, 3, 2, 2]);
  return group(digits.slice(0, 9), [3, 2, 2, 2]);
}

/**
 * Formats what someone types into a Belgian phone number.
 *
 * - `473439950` → `0473 43 99 50` (the leading zero people leave out)
 * - `036899065` → `03 689 90 65`
 * - `+32473439950` / `32473439950` → `+32 473 43 99 50`
 * - a `+` with any other country code is left alone apart from stray characters
 */
export function maskPhone(raw: string): string {
  const trimmed = raw.trimStart();
  const hasPlus = trimmed.startsWith("+");
  const digits = trimmed.replace(/\D/g, "");

  if (!digits) return hasPlus ? "+" : "";

  const isBelgianIntl = digits.startsWith("32") && (hasPlus || digits.length > 9);
  if (isBelgianIntl) {
    const national = digits.slice(2).replace(/^0+/, "");
    return national ? `+32 ${groupNational(`0${national}`).slice(1).trimStart()}` : "+32";
  }

  // A foreign country code: keep the digits, we only know how to group Belgian ones.
  if (hasPlus) return `+${digits}`;

  return groupNational(digits.startsWith("0") ? digits : `0${digits}`);
}

/** Digits-only form used for storage and validation (`0473439950`). */
export function normalizePhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (raw.trimStart().startsWith("+")) return `+${digits}`;
  if (digits.startsWith("32") && digits.length > 9) return `+${digits}`;
  if (!digits) return "";
  return digits.startsWith("0") ? digits : `0${digits}`;
}

/** True for a plausible Belgian number: 9 or 10 national digits (or +32 + 9). */
export function isValidPhone(raw: string): boolean {
  const normalized = normalizePhone(raw);
  if (normalized.startsWith("+32")) return normalized.length === 12;
  if (normalized.startsWith("+")) return normalized.length >= 9 && normalized.length <= 16;
  return /^0\d{8,9}$/.test(normalized);
}

/** Strips everything an address can never contain and lowercases it. */
export function maskEmail(raw: string): string {
  return raw.replace(/[\s,;<>()[\]\\"]/g, "").toLowerCase();
}

export function isValidEmail(raw: string): boolean {
  return /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)+$/.test(maskEmail(raw));
}
