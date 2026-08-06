/**
 * Een drempel op het aantal aanvragen per IP.
 *
 * Zonder deze drempel kan één script onbeperkt orders aanmaken: dat vult onze
 * database, en elke order wordt ook doorgeduwd naar het bouwdrogers-portaal in
 * Vernast, dus de rommel belandt meteen op de werklijst van iemand.
 *
 * Wees eerlijk over wat dit wel en niet is. De teller staat in het geheugen van
 * één functie-instantie. Vercel's Fluid Compute hergebruikt instanties, dus in
 * de praktijk vangt dit een script van één afzender op. Draaien er meerdere
 * instanties naast elkaar, dan heeft elk zijn eigen teller en ligt de echte
 * limiet navenant hoger. Het is een drempel, geen slot.
 *
 * Wie een harde garantie wil, zet rate limiting in de Vercel WAF: die telt vóór
 * de functie en dus over alle instanties heen. Dit hier kost niets en werkt
 * meteen; die twee sluiten elkaar niet uit.
 */

/** Tijdvenster en het aantal aanvragen dat daarbinnen mag. */
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

/** Boven dit aantal sleutels ruimen we op, zodat het geheugen niet volloopt. */
const SWEEP_THRESHOLD = 5_000;

interface Counter {
  count: number;
  resetAt: number;
}

const hits = new Map<string, Counter>();

/** Verlopen tellers weggooien; alleen als de map echt groot wordt. */
function sweep(now: number): void {
  if (hits.size < SWEEP_THRESHOLD) return;
  for (const [key, counter] of hits) {
    if (counter.resetAt <= now) hits.delete(key);
  }
}

/**
 * Het IP van de bezoeker. Achter Vercel is `x-forwarded-for` een door het
 * platform gezette lijst waarvan het eerste adres de echte client is; die
 * header van een willekeurige bezoeker vertrouwen zou betekenen dat iemand zijn
 * eigen teller kan resetten door hem te vervalsen, maar Vercel overschrijft
 * hem aan de rand.
 */
export function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip")?.trim() || "onbekend";
}

export interface RateLimitResult {
  allowed: boolean;
  /** Seconden tot het venster opnieuw opent; voor de Retry-After-header. */
  retryAfter: number;
}

/** Telt één aanvraag mee en zegt of ze door mag. */
export function rateLimit(
  key: string,
  max = MAX_REQUESTS,
  windowMs = WINDOW_MS
): RateLimitResult {
  const now = Date.now();
  sweep(now);

  const current = hits.get(key);
  if (!current || current.resetAt <= now) {
    hits.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, retryAfter: 0 };
  }

  current.count += 1;
  if (current.count > max) {
    return { allowed: false, retryAfter: Math.ceil((current.resetAt - now) / 1000) };
  }
  return { allowed: true, retryAfter: 0 };
}
