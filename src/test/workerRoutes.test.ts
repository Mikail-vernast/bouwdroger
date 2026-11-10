/**
 * @vitest-environment node
 *
 * Elke route in `api/` moet in `worker/index.ts` geregistreerd staan.
 *
 * Cloudflare kent geen bestandsgebaseerde routing zoals Vercel: de worker heeft
 * een handgeschreven `ROUTES`-map. Vergeet je daar een nieuw bestand uit `api/`,
 * dan slaagt de typecheck, slaagt de build, slaagt de deploy — en geeft de route
 * in productie een 404. Dat is precies wat er met `/api/ozon` gebeurde toen
 * /ozonbehandeling live ging: het formulier werkte onder `vercel dev` en faalde
 * alleen op het echte domein, waar niemand ernaar keek.
 *
 * Deze test leest beide kanten uit en vergelijkt ze, zodat de volgende keer de
 * suite het zegt in plaats van een bezoeker.
 */
import { readFileSync, readdirSync } from "node:fs";
import { describe, expect, it } from "vitest";

const WORKER = readFileSync(new URL("../../worker/index.ts", import.meta.url), "utf8");

/** De bestandsnamen in `api/` worden paden, net zoals Vercel ze afleidt. */
const apiRoutes = readdirSync(new URL("../../api", import.meta.url))
  .filter((naam) => naam.endsWith(".ts"))
  .map((naam) => `/api/${naam.replace(/\.ts$/, "")}`)
  .sort();

/** De sleutels uit de `ROUTES`-map in de worker. */
const workerRoutes = [...WORKER.matchAll(/'(\/api\/[a-z0-9-]+)':/g)]
  .map((match) => match[1])
  .sort();

describe("worker-routes", () => {
  it("vindt routes aan beide kanten", () => {
    expect(apiRoutes.length).toBeGreaterThan(10);
    expect(workerRoutes.length).toBeGreaterThan(10);
  });

  it.each(apiRoutes)("%s staat in de ROUTES-map van de worker", (route) => {
    expect(workerRoutes).toContain(route);
  });

  it("registreert geen route die niet in api/ bestaat", () => {
    expect(workerRoutes.filter((route) => !apiRoutes.includes(route))).toEqual([]);
  });
});
