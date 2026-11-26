/*
  The building period of the drawn house (the damp simulator asks for it in step 1).
  Only the look changes: roof pitch, facade, roof tiles, joinery, front door and the
  size of the front windows. Rooms, walls and their ids stay the same, so every later
  step (damp band, mould, works) still fits.

  The neighbours in the street render (scripts/simulator-3d/straat.py in the bouwdroger
  repo, PERIODE=voor1950|na1990) wear the same style, tints and roof pitch: their roofs
  join the live house's roof. Change a colour or the pitch here and that street has to
  be rendered again.

  1950–1990 is the house the drying simulator always drew; an unknown period falls back
  to it. What is typical per period comes from Flemish housing (the town house and the
  worker's house before 1950, the post-war brick house, new builds after 1990) and
  follows the step-1 card photos (src/assets/simulator/vocht/bouwjaar).
*/
export type Periode = "voor1950" | "1950-1990" | "na1990";

export interface PeriodeStijl {
  /** Tint over the brick tile, or with `crepi` over the plaster tile. */
  gevel: string;
  /** White render instead of brick. */
  crepi: boolean;
  pannen: string;
  /** The roof tile is dark: a tint alone cannot lighten it. This multiplies on top (red tiles). */
  pannenLicht?: number;
  nok: string;
  /** Window frames (joinery) and the front door frame. */
  kader: string;
  deur: string;
}

export const PERIODE_STIJL: Record<Periode, PeriodeStijl> = {
  // Red, varied brick; red clay (Boom) tiles on a steep roof; upright windows with a
  // top light in white-painted wood; a dark green door.
  voor1950: { gevel: "#dc9682", crepi: false, pannen: "#ff7860", pannenLicht: 1.5, nok: "#9a4530", kader: "#f4f1ec", deur: "#2f4a3a" },
  "1950-1990": { gevel: "#f3e2d8", crepi: false, pannen: "#c9c9cc", nok: "#26282b", kader: "#f4f1ec", deur: "#3b2a22" },
  // White render, anthracite tiles and joinery, large windows (down to the floor downstairs).
  na1990: { gevel: "#eef1f4", crepi: true, pannen: "#86888c", nok: "#26282b", kader: "#2b2d30", deur: "#2b2d30" },
};

/** The period to draw; unknown or not chosen = 1950–1990. */
export function periodeVan(p: string | null | undefined): Periode {
  return p === "voor1950" || p === "na1990" ? p : "1950-1990";
}
