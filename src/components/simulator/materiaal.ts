import type { Fase, Wat } from "@/lib/droogSimulator";

export interface Materiaal {
  muur: string;
  vloer: string;
  /** 0–1, de vochtsluier over muren en vloer */
  vocht: number;
  muurNat: boolean;
  vloerNat: boolean;
  parket: boolean;
  meubels: boolean;
}

/** Hoe muren en vloer eruitzien in deze fase — alleen beeld, geen rekenwerk. */
export function materiaalVoor(wat: Wat | null, fase: Fase | null, vochtStart: number): Materiaal {
  const muurNat = wat === "pleister" || wat === "beide";
  const vloerNat = wat === "chape" || wat === "beide";
  const f = fase ?? "vers";
  const geschilderd = f === "geschilderd" || f === "afgewerkt" || f === "bewoond";
  const parket = f === "afgewerkt" || f === "bewoond";
  const pleister = { vers: "#9d978e", weken: "#b9b2a8" } as Record<string, string>;
  const chape = { vers: "#8d877e", weken: "#aaa398" } as Record<string, string>;
  return {
    muur: geschilderd ? "#f2eee7" : muurNat ? pleister[f] ?? "#b9b2a8" : "#ddd6cb",
    vloer: parket ? "#c99f6e" : vloerNat ? chape[f] ?? "#aaa398" : "#c9c2b6",
    vocht: wat ? vochtStart : 0,
    muurNat,
    vloerNat,
    parket,
    meubels: f === "bewoond" || f === "afgewerkt",
  };
}
