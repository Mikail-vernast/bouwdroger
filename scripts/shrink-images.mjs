/**
 * Schaalt de bronafbeeldingen terug naar wat ze op het scherm werkelijk nodig
 * hebben.
 *
 * De hele map kwam op ware grootte uit de Claude Design-handoff: vierkanten van
 * 1600×1600 voor een tegel die op 241×241 staat, en een logo van 1600 px breed
 * dat in de footer 125 px inneemt. Lighthouse rekende dat op de homepage alleen
 * al af als 325 KiB die niemand nodig heeft.
 *
 * De regel hieronder is de weergavegrootte maal twee, zodat een scherm met
 * dubbele pixeldichtheid nog altijd scherp is, naar boven afgerond op een rond
 * getal. Wie een bestand vervangt door een nieuwe versie op ware grootte, hoeft
 * enkel `npm run images` opnieuw te draaien: wat al klein genoeg is blijft
 * ongemoeid, dus het is veilig om te herhalen.
 *
 * webp gaat door `cwebp`, de rest door `sips` — allebei staan ze op de Mac waar
 * dit gedraaid wordt. Dit hoort níet in de build op Vercel: de bestanden worden
 * één keer verkleind en zo gecommit.
 */
import { execFileSync } from "node:child_process";
import { readdirSync, statSync } from "node:fs";
import { extname, join } from "node:path";

/** Langste zijde in pixels, per map of bestandspatroon. Eerste treffer wint. */
const RULES = [
  { match: /^public\/vernast\/logo-horizontal-.*\.webp$/, max: 400 },
  /*
    De pijlers op de homepage tonen deze op 34×34 px. Ze stonden er op 1440 px
    in: 76 KB voor een icoontje, meer dan de foto ernaast. 96 px dekt zelfs een
    scherm met drievoudige pixeldichtheid.
  */
  { match: /^public\/vernast\/icon-.*\.webp$/, max: 96 },
  { match: /^public\/vernast\/eco-.*\.webp$/, max: 600 },
  /*
    De rode hero-achtergronden (bg-red*) zijn platte vectorvlakken. De lossy
    stap (`-q 82`) op 1440 px gaf zichtbare banding in de grote verlopen; de
    bron staat nu lossless op 1920 px. Een max gelijk aan die breedte laat de
    resize-/hercompressiestap ze overslaan, zodat ze scherp blijven.
  */
  { match: /^public\/vernast\/bg-.*\.webp$/, max: 1920 },
  /*
    De hero-banner staat full-width bovenaan de homepage en moet scherp blijven
    op brede en retina-schermen; 1440 px was zichtbaar te zacht. 2400 px houdt
    hem scherp zonder de rest van de map groter te maken.
  */
  { match: /^public\/vernast\/hero-banner\.webp$/, max: 2400 },
  { match: /^public\/vernast\//, max: 1440 },
  { match: /^public\/products\//, max: 1000 },
  { match: /^public\/verhuur\//, max: 1200 },
  { match: /^public\/design\//, max: 1200 },
  { match: /^src\/assets\//, max: 1400 },
];

const EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

/**
 * Bestanden hieronder laten we met rust. De grens ligt bewust laag: het logo in
 * de footer woog maar 22 KB, maar was 1600 px breed voor een plek van 125 px —
 * juist zo'n bestand wil je meenemen.
 */
const MIN_BYTES = 5_000;

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(path));
    else if (EXTENSIONS.has(extname(entry.name).toLowerCase())) out.push(path);
  }
  return out;
}

function dimensions(file) {
  const raw = execFileSync("sips", ["-g", "pixelWidth", "-g", "pixelHeight", file], {
    encoding: "utf8",
  });
  const width = Number(raw.match(/pixelWidth:\s*(\d+)/)?.[1]);
  const height = Number(raw.match(/pixelHeight:\s*(\d+)/)?.[1]);
  return { width, height };
}

function kib(bytes) {
  return `${Math.round(bytes / 1024)} KB`;
}

let saved = 0;
let touched = 0;
let skipped = 0;

for (const dir of ["public", "src/assets"]) {
  for (const file of walk(dir)) {
    const rule = RULES.find((r) => r.match.test(file));
    if (!rule) continue;

    const before = statSync(file).size;
    if (before < MIN_BYTES) continue;

    const { width, height } = dimensions(file);
    if (!width || !height) continue;

    const longest = Math.max(width, height);
    if (longest <= rule.max) {
      skipped += 1;
      continue;
    }

    if (extname(file).toLowerCase() === ".webp") {
      // cwebp wil de breedte; 0 voor de hoogte houdt de verhouding aan.
      const targetWidth = width >= height ? rule.max : Math.round((width / height) * rule.max);
      execFileSync("cwebp", ["-quiet", "-q", "82", "-resize", String(targetWidth), "0", file, "-o", file]);
    } else {
      execFileSync("sips", ["-Z", String(rule.max), file, "--out", file], { stdio: "ignore" });
    }

    const after = statSync(file).size;
    saved += before - after;
    touched += 1;
    console.log(`  ${file}  ${width}×${height} → ${rule.max}px  ${kib(before)} → ${kib(after)}`);
  }
}

console.log(
  `\n${touched} afbeeldingen verkleind, ${skipped} waren al klein genoeg — ${kib(saved)} bespaard.`
);
