import type { Fase, Wat } from "@/lib/droogSimulator";

/** Blender tiles the 3D house can put on its inner walls and floors (public/simulator/3d). */
export type MuurTegel = "baksteen" | "pleister" | "pleisternat" | "verf";
export type VloerTegel = "vloerplaat" | "chape" | "tegelvloer" | "parket";

export interface Materiaal {
  /** Tint over the wall tile (and the wall colour of the SVG drawing). */
  muur: string;
  /** Tint over the floor tile (and the floor colour of the SVG drawing). */
  vloer: string;
  /** 0–1, de vochtsluier over muren en vloer */
  vocht: number;
  muurNat: boolean;
  vloerNat: boolean;
  parket: boolean;
  meubels: boolean;
  /** 3D only. Left out = plaster walls, chape or parquet floor, glass in, kitchen and bathroom in. */
  muurTegel?: MuurTegel;
  vloerTegel?: VloerTegel;
  /** false = window and door openings still open (ruwbouw) */
  glas?: boolean;
  /** false = no kitchen, bathroom or toilet yet */
  inrichting?: boolean;
}

/** How each build phase dresses the house: which tile on walls and floor, and what is already in. */
const FASE_BEELD: Record<Fase, { muurTegel: MuurTegel; muur: string; vloerTegel: VloerTegel; vloer: string; glas: boolean; inrichting: boolean }> = {
  // bare brick, rain on the slab, openings still open
  ruwbouw: { muurTegel: "baksteen", muur: "#e6d2c6", vloerTegel: "vloerplaat", vloer: "#b3aea6", glas: false, inrichting: false },
  ramen: { muurTegel: "baksteen", muur: "#f3e2d8", vloerTegel: "vloerplaat", vloer: "#c9c4bc", glas: true, inrichting: false },
  // fresh screed: the darkest floor
  chape: { muurTegel: "baksteen", muur: "#f3e2d8", vloerTegel: "chape", vloer: "#8d877e", glas: true, inrichting: false },
  // wet, blotchy plaster on a screed that has had time
  gepleisterd: { muurTegel: "pleisternat", muur: "#d9cdc1", vloerTegel: "chape", vloer: "#b4ada2", glas: true, inrichting: false },
  // walls stay as the plasterer left them: they are only finished at "afgewerkt"
  tegels: { muurTegel: "pleisternat", muur: "#d9cdc1", vloerTegel: "tegelvloer", vloer: "#ffffff", glas: true, inrichting: false },
  afgewerkt: { muurTegel: "verf", muur: "#f2eee7", vloerTegel: "parket", vloer: "#ffffff", glas: true, inrichting: true },
};

/** Hoe muren en vloer eruitzien in deze fase — alleen beeld, geen rekenwerk. */
export function materiaalVoor(wat: Wat | null, fase: Fase | null, vochtStart: number): Materiaal {
  const muurNat = wat === "pleister" || wat === "beide";
  const vloerNat = wat === "chape" || wat === "beide";
  const vocht = wat ? vochtStart : 0;
  if (fase) {
    const b = FASE_BEELD[fase];
    return { ...b, vocht, muurNat, vloerNat, parket: b.vloerTegel === "parket", meubels: fase === "afgewerkt" };
  }
  // No phase yet (earlier steps): the house keeps its plain colours. Choosing
  // what is wet must not darken the rooms; that read as the room going dark.
  return {
    muur: "#ddd6cb",
    vloer: "#c9c2b6",
    vocht,
    muurNat,
    vloerNat,
    parket: false,
    meubels: false,
  };
}
