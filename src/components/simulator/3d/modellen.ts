import type { DeviceKey } from "@/data/verhuur";

/*
  De toestelmodellen uit Blender (scripts/simulator-3d/toestellen.py). Apart van
  onderdelen.tsx, zodat de pagina ze vooraf kan laden zonder three.js binnen te halen.
*/
export const TOESTEL_MODEL: Record<DeviceKey, string> = {
  small: "/simulator/3d/droger-small.glb",
  medium: "/simulator/3d/droger-medium.glb",
  axiaal: "/simulator/3d/ventilator.glb",
  kachel: "/simulator/3d/kachel.glb",
};

type Verbinding = { saveData?: boolean; effectiveType?: string };
const al = new Set<string>();

/**
 * Haalt de modellen van het pakket alvast in de HTTP-cache terwijl de bezoeker
 * nog antwoordt, zodat het droogplan er niet op wacht (op 3G ± 5 s). Niet als er
 * geen 3D getekend wordt (SVG), bij datasparen of op 2G: daar laadt het plan ze
 * pas wanneer het ze toont. Elk model hoogstens één keer.
 */
export function voorlaadToestellen(toestellen: DeviceKey[]): void {
  if (!document.querySelector(".ds-stage canvas")) return;
  const c = (navigator as Navigator & { connection?: Verbinding }).connection;
  if (c?.saveData || c?.effectiveType === "2g" || c?.effectiveType === "slow-2g") return;
  for (const k of toestellen) {
    const url = TOESTEL_MODEL[k];
    if (al.has(url)) continue;
    al.add(url);
    fetch(url, { priority: "low" } as RequestInit).catch(() => al.delete(url));
  }
}
