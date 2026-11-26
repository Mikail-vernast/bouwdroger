import { createContext, useContext } from "react";
import type { Taal } from "./woning";

/**
 * The language of the 3D labels. The house cannot know where it runs: the drying simulator
 * (bouwdroger) takes it from the URL and wraps the house in <HuisTaal.Provider>; the damp
 * simulator (Vernast-v2.0) is Dutch only and uses the default.
 */
export const HuisTaal = createContext<Taal>("nl");

export function useTaal(): Taal {
  return useContext(HuisTaal);
}
