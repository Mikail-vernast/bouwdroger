import type { Kamer, Trap } from "./woning";

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
