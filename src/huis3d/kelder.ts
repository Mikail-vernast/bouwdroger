import { H } from "./maten";
import type { Kamer, Raam, Trap } from "./woning";

/*
  The cellar under the house: one room over the whole footprint, a storey below the ground
  floor (verdieping -1), with a concrete stair under the house's own stair. Optional: only a
  simulator that asks for it (`kelder` on IsoHouse3D) gets it, so the drying simulator's
  house stays as it was. Pure data, no three.js: a page can plan with it before the 3D loads.
*/

/** The cellar's storey number: one below the ground floor. */
export const KELDER = -1;

/** The cellar as a room: the whole footprint, inside the outer walls. */
export function kelderKamer(w: number, l: number): Kamer {
  return { id: "kelder", naam: "Kelder", verdieping: KELDER, x: 0, z: 0, w, l };
}

/** Run of the cellar stair along its length, when the house has no stair to put it under. */
const LOS_RUN = 3.2;

/**
 * The cellar stair: under the ground floor's stair, climbing the same way, so you come up
 * under its high end, where there is headroom. A house of one storey has no stair: then
 * along the back wall, from the left.
 */
export function kelderTrap(trappen: readonly Trap[], w: number): Trap {
  const boven = trappen.find((t) => t.verdieping === 0 && t.op);
  if (boven) return { ...boven, verdieping: KELDER };
  return { verdieping: KELDER, x: 0.3, z: 0, w: Math.min(LOS_RUN, w - 0.6), l: 0.9, op: true, richting: 1 };
}

/** The cellar window: 80 cm wide, just under the ground, in the back wall (the garden side). */
const RAAM_B = 0.8;
export const KELDERRAAM = { onder: H - 0.6, boven: H - 0.15 } as const;

/**
 * The cellar window, in the back wall on the widest stretch the stair leaves free, so the
 * stair never runs up in front of it. A light well outside brings the daylight down to it.
 */
export function kelderRaam(trappen: readonly Trap[], w: number): Raam {
  const t = kelderTrap(trappen, w);
  // A stair more than a metre from the back wall leaves the whole wall free.
  const stukken: [number, number][] = t.z < 1
    ? [[0.4, t.x - 0.3], [t.x + t.w + 0.3, w - 0.4]]
    : [[0.4, w - 0.4]];
  const [a, b] = stukken.reduce((m, s) => (s[1] - s[0] > m[1] - m[0] ? s : m));
  const mid = b - a >= RAAM_B ? (a + b) / 2 : w / 2;
  return { verdieping: KELDER, gevel: "achter", van: mid - RAAM_B / 2, tot: mid + RAAM_B / 2, ...KELDERRAAM, soort: "raam", kamer: "kelder" };
}
