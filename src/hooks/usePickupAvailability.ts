import { useEffect, useState } from "react";

/**
 * Welke afhaaldatums zitten vol voor deze selectie?
 *
 * De toestelpagina en de afhaalpagina lieten elke datum toe en meldden pas bij
 * het afrekenen dat er niets vrij was — met "Direct beschikbaar" in beeld
 * terwijl het enige exemplaar al verhuurd was. De boekingswizard vroeg dit al
 * op; deze hook doet hetzelfde voor een losse selectie.
 *
 * De uitkomst is bewust drieledig. Bij een mislukte oproep blijft `blocked`
 * leeg maar staat `failed` aan: de pagina mag dan niet doen alsof alles vrij is,
 * maar mag de bezoeker evenmin tegenhouden — de harde controle in
 * `api/afhaal-checkout.ts` vangt hem alsnog op.
 */
export interface PickupAvailability {
  blocked: string[];
  loading: boolean;
  failed: boolean;
  /** Hoe ver vooruit de lijst kijkt; daarbuiten weten we niets. */
  horizonDays: number;
}

const EMPTY: string[] = [];

export function usePickupAvailability(selection: string, days: number): PickupAvailability {
  const [blocked, setBlocked] = useState<string[]>(EMPTY);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const [horizonDays, setHorizonDays] = useState(60);

  useEffect(() => {
    if (!selection) {
      setBlocked(EMPTY);
      setFailed(false);
      return;
    }

    // Wisselt de bezoeker snel van periode of aantal, dan telt enkel het laatste
    // antwoord: zonder dit kan een trager eerder antwoord het nieuwe overschrijven.
    let current = true;
    setLoading(true);

    fetch("/api/availability", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ lines: selection, days }),
    })
      .then(async (response) => {
        const data = (await response.json()) as {
          blocked_start_dates?: string[];
          horizon_days?: number;
        };
        if (!current) return;
        if (!response.ok) {
          setFailed(true);
          setBlocked(EMPTY);
          return;
        }
        setFailed(false);
        setBlocked(data.blocked_start_dates ?? EMPTY);
        if (data.horizon_days) setHorizonDays(data.horizon_days);
      })
      .catch(() => {
        if (!current) return;
        setFailed(true);
        setBlocked(EMPTY);
      })
      .finally(() => {
        if (current) setLoading(false);
      });

    return () => {
      current = false;
    };
  }, [selection, days]);

  return { blocked, loading, failed, horizonDays };
}

/**
 * De eerstvolgende datum die wél kan, vanaf `from`. Geeft `null` wanneer de
 * hele horizon vol zit — dan is er niets te suggereren en moet de bezoeker bellen.
 */
export function firstFreeDate(from: string, blocked: string[], horizonDays: number): string | null {
  if (!blocked.includes(from)) return from;

  const start = new Date(`${from}T00:00:00`);
  for (let i = 1; i <= horizonDays; i++) {
    const candidate = new Date(start.getTime() + i * 86_400_000).toISOString().slice(0, 10);
    if (!blocked.includes(candidate)) return candidate;
  }
  return null;
}
