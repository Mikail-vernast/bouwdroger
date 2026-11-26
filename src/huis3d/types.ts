import type { Periode } from "./periode";
import type { ReactNode } from 'react';
import type { FilmPlan } from './film';
import type { Materiaal } from './materiaal';
import type { Dak, Kamer, Opening, Plaatsing, Raam, Trap, Vak, Woning } from './woning';

/**
 * The corner the camera looks from. The drying simulator always looks from the front
 * right (the street render is made for that corner only); the damp simulator turns to
 * the corner from which the damp wall is a far wall, seen from inside its room.
 */
export interface Hoek { kant: 'voor' | 'achter'; zij: 'links' | 'rechts' }

/**
 * A piece of furniture as a layer on top needs it: its box in plan (world x/z) and its
 * bottom and top above the floor. Wall cabinets have no floor spot but do hide the wall.
 */
export interface Meubel { vak: Vak; onder: number; top: number; /** Stands against a wall (kit: muur): a counter, a sink, a wall cabinet. */ muur?: boolean }

/**
 * Furniture that makes way: `groep` puts a piece in a named group (or none), and the house
 * fades each group to `zicht.current[groep]` (1 = there, 0 = gone). The damp simulator uses
 * it for the furniture in front of a damp wall, so the damp shows along the whole wall.
 * `groep` must keep its identity between renders: a new one re-merges the furniture.
 */
export interface Wijk { groep: (m: Meubel) => string | null; zicht: { readonly current: Readonly<Record<string, number>> } }

/** What the 3D house draws (bouwdroger: the props of IsoHouse, the SVG house it replaces). */
export interface IsoHouseProps {
  woning: Woning;
  /** Facade width in metres (a step from BREEDTES); without it the type's default. */
  breedte?: number;
  /** Building period: roof pitch, facade, joinery, front windows and the street (periode.ts). */
  periode?: Periode;
  verdiepingen: number;
  dak: Dak;
  kamers: Kamer[];
  /** Doors and passages from the plan; without them no openings. */
  openingen?: Opening[];
  trappen?: Trap[];
  /** Windows from the plan; without them no windows. */
  ramen?: Raam[];
  /** Opened up, with the active storey showing. */
  open: boolean;
  actief: number;
  plaatsingen?: Plaatsing[];
  werkend?: boolean;
  materiaal?: Materiaal;
  /** Small variant for the choice cards: no labels, no animation. */
  mini?: boolean;
  /** Length of one drying cycle in seconds, for the damp haze. */
  cyclus?: number;
  /** Which segment of the drying film this floor plays (placing or drying, and how far). */
  filmPlan?: FilmPlan;
  /** Counts up on "play again": the film starts over. */
  filmRonde?: number;
  className?: string;
  /** The corner the camera looks from; left out = the front right, as in the drying simulator. */
  hoek?: Hoek;
  /** Keep drawing every frame (a film on top of the house); otherwise only on change. */
  altijd?: boolean;
  /** Extra 3D on top of the house, in the house's own coordinates (HuisContext tells where things are). */
  children?: ReactNode;
  /** Furniture that fades away on request (damp simulator: in front of a damp wall). */
  wijk?: Wijk;
}
