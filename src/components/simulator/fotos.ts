import type { Dak, Woning } from "@/lib/droogSimulator";

/*
  Foto's voor de droogsimulator: één reeks gegenereerd met Codex — hetzelfde
  huis, telkens met alleen het verschil dat de keuze betekent (woningtype,
  dak, aantal bouwlagen). Bestanden: public/simulator/<sleutel>.webp; herkomst
  en prompt in docs/droogsimulator-fotos.md.

  Alleen wat hier staat wordt getoond. Ontbreekt een foto, dan valt de code
  terug op de dichtste die er wel is — nooit een kapotte afbeelding of een 404.
*/
export type FotoSleutel = `woning-${Woning}` | `dak-${Dak}` | `lagen-${1 | 2 | 3}` | `huis-${Dak}-${1 | 2 | 3 | 4}`;

const BESCHIKBAAR: FotoSleutel[] = [
  "woning-rijwoning", "woning-halfopen", "woning-open", "woning-appartement",
  "dak-zadeldak", "dak-plat", "dak-lessenaar",
  "lagen-1", "lagen-2", "lagen-3",
  "huis-plat-1", "huis-plat-3", "huis-lessenaar-1", "huis-lessenaar-3",
];

export function fotoVoor(sleutel: FotoSleutel): string | null {
  return BESCHIKBAAR.includes(sleutel) ? `/simulator/${sleutel}.webp` : null;
}

/**
 * Het ene huis dat past bij dak × bouwlagen, voor de grote foto in stap 2.
 * `lagen-n` is de reeks met een zadeldak, `dak-x` de reeks met twee bouwlagen;
 * samen met de vier `huis-*`-hoeken bestaat zo elke combinatie.
 */
export function huisFoto(woning: Woning, dak: Dak, lagen: number): string {
  const n = Math.min(4, Math.max(1, lagen)) as 1 | 2 | 3 | 4;
  const m = Math.min(3, n) as 1 | 2 | 3;
  const kandidaten: FotoSleutel[] = [
    ...(woning === "appartement" ? (["woning-appartement"] as const) : []),
    `huis-${dak}-${n}`,
    // nog geen foto met vier bouwlagen: toon er drie
    `huis-${dak}-${m}`,
    ...(dak === "zadeldak" ? ([`lagen-${m}`] as const) : []),
    ...(m === 2 ? ([`dak-${dak}`] as const) : []),
    `dak-${dak}`,
  ];
  // De grote foto gebruikt de brede 3:1-strook van dezelfde foto (breed-*),
  // waarin het hele gebouw past; de kaarten houden de 4:3-versie.
  for (const k of kandidaten) {
    if (fotoVoor(k)) return `/simulator/breed-${k}.webp`;
  }
  return "/simulator/breed-lagen-2.webp";
}

/** Elke foto bestaat twee keer: 640 px voor de kleine kaarten, volle grootte (1448 px) voor de grote foto op een retinascherm. */
export function fotoSrcSet(src: string): string {
  return `${src.replace(/\.webp$/, "-640.webp")} 640w, ${src} 1448w`;
}
