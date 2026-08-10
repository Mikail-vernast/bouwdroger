/**
 * Haalt de gepubliceerde tarieven op uit Vernast en schrijft ze naar
 * `src/data/tarieven.json`, vóór de build begint.
 *
 * Waarom bij de build en niet bij het laden van de pagina: de site is
 * voorgerenderd. Zou de browser de prijzen ophalen, dan toont de HTML eerst het
 * oude bedrag en pas daarna het nieuwe — en `api/checkout.ts`, dat het bedrag
 * server-side herberekent zodat niemand het in zijn browser kan aanpassen, zou
 * bij elke boeking Vernast moeten bevragen. Ligt Vernast dan plat, dan kan
 * niemand afrekenen. Bij de build inbakken lost beide op.
 *
 * Faalt het ophalen, dan blijft het bestand in de repo staan en gaat de build
 * gewoon door met de laatste bekende prijzen. Een tijdelijke storing bij Vernast
 * hoort geen deploy te blokkeren; verouderde prijzen zijn hier het kleinere
 * kwaad dan geen site.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const target = resolve(here, "../src/data/tarieven.ts");

const TIMEOUT_MS = 10_000;

function endpoint() {
  const base = process.env.VERNAST_WEBHOOK_URL;
  if (!base) return null;
  return base.replace(/\/bouwdroger-order-webhook\/?$/, "/bouwdroger-tarieven");
}

/**
 * Een momentopname zonder pakketten of toestellen zou een site opleveren waarop
 * niets te bestellen valt. Liever de oude prijzen dan een lege winkel.
 */
function usable(data) {
  if (!data || typeof data !== "object") return "geen object";
  if (!Array.isArray(data.fixed) || data.fixed.length === 0) return "geen pakketten";
  if (!data.devices || Object.keys(data.devices).length === 0) return "geen toestellen";
  if (!data.pricing || Object.keys(data.pricing).length === 0) return "geen instellingen";
  return null;
}

function keepExisting(reason) {
  try {
    const current = readFileSync(target, "utf8");
    const version = /"version":\s*(\d+)/.exec(current)?.[1] ?? "?";
    console.warn(`[tarieven] ${reason} — build gaat door met versie ${version} uit de repo.`);
    process.exit(0);
  } catch {
    console.error(`[tarieven] ${reason}, en src/data/tarieven.ts ontbreekt of is stuk.`);
    process.exit(1);
  }
}

const url = endpoint();
const secret = process.env.VERNAST_WEBHOOK_SECRET;

if (!url || !secret) {
  keepExisting("VERNAST_WEBHOOK_URL of VERNAST_WEBHOOK_SECRET ontbreekt");
}

const controller = new AbortController();
const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

try {
  const response = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json", "x-webhook-secret": secret },
    signal: controller.signal,
  });

  if (!response.ok) {
    keepExisting(`Vernast antwoordde met HTTP ${response.status}`);
  }

  const data = await response.json();
  const problem = usable(data);
  if (problem) keepExisting(`Ontvangen tarieven onbruikbaar (${problem})`);

  /*
    Een .ts-bestand en geen .json: Vite, Node en de serverless functies onder
    /api behandelen JSON-imports elk net anders (import assertions), en dit
    bestand wordt door alle drie gelezen.
  */
  writeFileSync(
    target,
    `/**\n` +
      ` * GEGENEREERD BESTAND — niet met de hand aanpassen.\n` +
      ` *\n` +
      ` * Geschreven door \`scripts/fetch-tarieven.mjs\` vóór elke build, uit de\n` +
      ` * gepubliceerde tarieven in het Vernast-portaal. Wat hier staat is de\n` +
      ` * laatst bekende versie en dient als terugval wanneer Vernast tijdens een\n` +
      ` * build niet bereikbaar is.\n` +
      ` *\n` +
      ` * Prijs aanpassen doe je in het portaal, tab Pakketten, en dan publiceren.\n` +
      ` */\n` +
      `export const TARIEVEN = ${JSON.stringify(data, null, 2)} as const;\n`
  );
  console.log(
    `[tarieven] versie ${data.version} opgehaald ` +
      `(${data.fixed.length} pakketten, ${Object.keys(data.devices).length} toestellen).`
  );
} catch (error) {
  keepExisting(`Ophalen mislukt: ${error instanceof Error ? error.message : "onbekende fout"}`);
} finally {
  clearTimeout(timer);
}
