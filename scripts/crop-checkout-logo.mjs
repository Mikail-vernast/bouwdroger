/**
 * Snijdt het beeldmerk voor het Stripe-betaalformulier strak bij.
 *
 * Stripe rendert de afbeelding van een line item in een vast, klein vierkant
 * kader en schaalt wat wij aanleveren daarin passend. Het bronbestand is een
 * liggende strook van 303×101 waarin het merkteken maar een fractie inneemt —
 * de rest is doorzichtig. Passend schalen betekent dan: de héle strook krimpt
 * tot de breedte van het kader, en het merkteken zelf wordt een stipje.
 *
 * Vandaar deze omweg. We meten waar de zichtbare pixels zitten, snijden de
 * lege rand weg en zetten het resultaat midden op een vierkant doek met een
 * smalle marge. Het merkteken vult dan bijna het hele kader.
 *
 * Draaien met: node scripts/crop-checkout-logo.mjs <bron.png> <doel.png>
 */
import { deflateSync, inflateSync } from "node:zlib";
import { readFileSync, writeFileSync } from "node:fs";

/** Marge rond het merkteken, als deel van de zijde van het vierkant. */
const PADDING = 0.06;

/** Alles hieronder telt als doorzichtig en dus als lege rand. */
const ALPHA_FLOOR = 16;

const PNG_SIGNATURE = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

/** Leest de chunks van een PNG uit; meer dan header en beeldata is niet nodig. */
function readChunks(file) {
  if (!file.subarray(0, 8).equals(PNG_SIGNATURE)) throw new Error("Geen PNG-bestand.");
  const chunks = [];
  let at = 8;
  while (at < file.length) {
    const length = file.readUInt32BE(at);
    const type = file.toString("ascii", at + 4, at + 8);
    chunks.push({ type, data: file.subarray(at + 8, at + 8 + length) });
    at += 12 + length;
  }
  return chunks;
}

/**
 * Zet de gefilterde scanlijnen om naar platte RGBA. PNG bewaart elke rij met
 * een filter dat naar de buren links en boven verwijst; zonder die stap terug
 * te draaien is er geen zinnig pixel uit te lezen.
 */
function toRgba(raw, width, height) {
  const stride = width * 4;
  const out = Buffer.alloc(stride * height);
  for (let y = 0; y < height; y += 1) {
    const filter = raw[y * (stride + 1)];
    const line = raw.subarray(y * (stride + 1) + 1, (y + 1) * (stride + 1));
    for (let x = 0; x < stride; x += 1) {
      const left = x >= 4 ? out[y * stride + x - 4] : 0;
      const up = y > 0 ? out[(y - 1) * stride + x] : 0;
      const upLeft = x >= 4 && y > 0 ? out[(y - 1) * stride + x - 4] : 0;
      let value = line[x];
      if (filter === 1) value += left;
      else if (filter === 2) value += up;
      else if (filter === 3) value += (left + up) >> 1;
      else if (filter === 4) {
        const p = left + up - upLeft;
        const dl = Math.abs(p - left);
        const du = Math.abs(p - up);
        const dul = Math.abs(p - upLeft);
        value += dl <= du && dl <= dul ? left : du <= dul ? up : upLeft;
      }
      out[y * stride + x] = value & 0xff;
    }
  }
  return out;
}

/**
 * Herkent het rood van het merkteken. De logo's uit de designmap hebben geen
 * doorzichtige rand — daar is elke pixel ondoorzichtig, dus grenzen op alpha
 * levert het hele bestand op. Op kleur begrenzen isoleert het merkteken wel,
 * ook als de woordmerk-letters ernaast wit of zwart zijn.
 */
function isBrandRed(r, g, b) {
  return r > 90 && r > g * 1.8 && r > b * 1.8;
}

/** De kleinste rechthoek die alle zichtbare pixels omsluit. */
function visibleBounds(rgba, width, height, { redOnly = false } = {}) {
  let minX = width;
  let minY = height;
  let maxX = -1;
  let maxY = -1;
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const at = (y * width + x) * 4;
      if (rgba[at + 3] <= ALPHA_FLOOR) continue;
      if (redOnly && !isBrandRed(rgba[at], rgba[at + 1], rgba[at + 2])) continue;
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
  if (maxX < 0) throw new Error("Alle pixels zijn doorzichtig.");
  return { minX, minY, maxX, maxY };
}

function encode(rgba, width, height) {
  const stride = width * 4;
  // Filter 0 op elke rij: het bestand wordt iets groter, maar het merkteken is
  // een paar kilobyte en de code blijft leesbaar.
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y += 1) {
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride);
  }

  const chunk = (type, data) => {
    const out = Buffer.alloc(12 + data.length);
    out.writeUInt32BE(data.length, 0);
    out.write(type, 4, "ascii");
    data.copy(out, 8);
    out.writeUInt32BE(crc(out.subarray(4, 8 + data.length)), 8 + data.length);
    return out;
  };

  const header = Buffer.alloc(13);
  header.writeUInt32BE(width, 0);
  header.writeUInt32BE(height, 4);
  header[8] = 8; // 8 bit per kanaal
  header[9] = 6; // RGBA
  return Buffer.concat([
    PNG_SIGNATURE,
    chunk("IHDR", header),
    chunk("IDAT", deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

const CRC_TABLE = Array.from({ length: 256 }, (_, n) => {
  let c = n;
  for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});

function crc(buffer) {
  let c = 0xffffffff;
  for (const byte of buffer) c = CRC_TABLE[(c ^ byte) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

const [source, target, mode] = process.argv.slice(2);
if (!source || !target) {
  console.error("Gebruik: node scripts/crop-checkout-logo.mjs <bron.png> <doel.png> [--rood]");
  process.exit(1);
}

const chunks = readChunks(readFileSync(source));
const ihdr = chunks.find((c) => c.type === "IHDR").data;
const width = ihdr.readUInt32BE(0);
const height = ihdr.readUInt32BE(4);
if (ihdr[8] !== 8 || ihdr[9] !== 6) {
  throw new Error(`Verwacht 8-bit RGBA, kreeg diepte ${ihdr[8]} type ${ihdr[9]}.`);
}

const raw = inflateSync(
  Buffer.concat(chunks.filter((c) => c.type === "IDAT").map((c) => c.data)),
);
const rgba = toRgba(raw, width, height);
const { minX, minY, maxX, maxY } = visibleBounds(rgba, width, height, {
  redOnly: mode === "--rood",
});

const markWidth = maxX - minX + 1;
const markHeight = maxY - minY + 1;
const side = Math.round(Math.max(markWidth, markHeight) * (1 + PADDING * 2));
const offsetX = Math.round((side - markWidth) / 2);
const offsetY = Math.round((side - markHeight) / 2);

const square = Buffer.alloc(side * side * 4);
for (let y = 0; y < markHeight; y += 1) {
  for (let x = 0; x < markWidth; x += 1) {
    const from = ((minY + y) * width + (minX + x)) * 4;
    const to = ((offsetY + y) * side + (offsetX + x)) * 4;
    rgba.copy(square, to, from, from + 4);
  }
}

writeFileSync(target, encode(square, side, side));
console.log(`bron        ${width}×${height}`);
console.log(`merkteken   ${markWidth}×${markHeight} op (${minX},${minY})`);
console.log(`resultaat   ${side}×${side} -> ${target}`);
