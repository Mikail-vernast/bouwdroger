import type { DeviceKey } from "@/data/verhuur";

/*
  The device models from Blender (scripts/simulator-3d/toestellen.py). Kept out of
  onderdelen.tsx so the page can warm the cache without pulling in three.js.
*/
export const TOESTEL_MODEL: Record<DeviceKey, string> = {
  small: "/simulator/3d/droger-small.glb",
  medium: "/simulator/3d/droger-medium.glb",
  axiaal: "/simulator/3d/ventilator.glb",
  kachel: "/simulator/3d/kachel.glb",
};

type Verbinding = { saveData?: boolean; effectiveType?: string };

/**
 * Fetches the models into the HTTP cache while the visitor is still answering,
 * so the drying plan does not wait on them (≈ 5 s on 3G). Skipped when the
 * visitor saves data or is on 2G: there the plan loads them only when shown.
 */
export function voorlaadToestellen(): void {
  const c = (navigator as Navigator & { connection?: Verbinding }).connection;
  if (c?.saveData || c?.effectiveType === "2g" || c?.effectiveType === "slow-2g") return;
  for (const url of Object.values(TOESTEL_MODEL)) {
    fetch(url, { priority: "low" } as RequestInit).catch(() => {});
  }
}
