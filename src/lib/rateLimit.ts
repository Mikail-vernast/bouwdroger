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

/**
 * Tijdvenster en het aantal aanvragen dat daarbinnen mag.
 *
 * Vijf was te krap. Een bezoeker die vanuit het betaalscherm terugging om zijn
 * betaalwijze of leverdatum aan te passen, verbruikte per keer een plaats — en
 * zag na de vijfde poging "te veel aanvragen" op het scherm waar hij net wilde
 * afrekenen. Tien laat dat heen en weer toe en houdt de grens ver onder wat een
 * script nodig heeft om de werklijst vol te zetten.
 */
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 10;

/**
 * De ruime bovengrens op álle aanvragen van één IP, geldige en ongeldige door
 * elkaar. Zie `gate()` voor waarom er twee grenzen zijn.
 */
const MAX_ATTEMPTS = 30;

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

/**
 * Een tweetrapsdrempel voor endpoints die iets aanmaken.
 *
 * Er stond één teller van vijf per minuut op álle aanvragen. Dat leek strak
 * maar sloot de verkeerde mensen buiten: een bouwbedrijf zit met heel het
 * kantoor achter één IP, en vijf keer een formulier verkeerd invullen — een
 * typfout in het e-mailadres is genoeg — was voldoende om iedereen daar een
 * minuut lang op 429 te zetten. Terwijl een aanvaller juist niets om die
 * mislukte pogingen geeft.
 *
 * Vandaar twee grenzen op hetzelfde IP:
 *
 * - `attempt` telt élke aanvraag, ook de afgekeurde, tegen een ruime grens.
 *   Dat is de bescherming tegen een script dat er honderden per minuut
 *   doorheen jaagt, en tegen het verstoken van de Stripe-API.
 * - `accept` telt enkel wat door de validatie kwam, tegen een strakke grens.
 *   Dat is de bescherming tegen honderd échte orders op de werklijst.
 *
 * Een bezoeker die worstelt met het formulier raakt zo alleen de ruime grens,
 * en die ligt ver genoeg om hem nooit tegen te komen.
 */
export interface Gate {
  /** Telt een aanvraag; false zodra het IP door de ruime grens gaat. */
  attempt(): RateLimitResult;
  /** Telt een geslaagde aanvraag; false zodra het IP door de strakke grens gaat. */
  accept(): RateLimitResult;
}

export function gate(
  ip: string,
  maxAccepted = MAX_REQUESTS,
  maxAttempts = MAX_ATTEMPTS,
  windowMs = WINDOW_MS
): Gate {
  return {
    attempt: () => rateLimit(`poging:${ip}`, maxAttempts, windowMs),
    accept: () => rateLimit(`geslaagd:${ip}`, maxAccepted, windowMs),
  };
}

/**
 * Hoeveel mails één adres binnen een uur van ons mag krijgen.
 *
 * De drempels hierboven tellen per IP. Dat beschermt ons — de werklijst, de
 * Stripe-API — maar niet de buitenwereld: het contactformulier en het
 * aanvraagformulier sturen een kopie naar het adres dat in de request staat, en
 * dat adres kiest de afzender zelf. Zonder deze teller is dit een gratis manier
 * om iemand anders zijn mailbox vol te zetten vanaf een domein dat SPF en DKIM
 * netjes op orde heeft — en dat kost ons de reputatie van dat domein.
 *
 * Vijf per uur ligt ver boven wat een echte bezoeker haalt (die vult één
 * formulier in) en ver onder wat als bombardement telt.
 *
 * Dezelfde eerlijkheid als hierboven: de teller staat in het geheugen van één
 * instantie. Het is een drempel, geen slot.
 */
const MAIL_WINDOW_MS = 3_600_000;
const MAX_MAILS_PER_ADDRESS = 5;

/**
 * Mag er nog een mail naar dit adres? Alleen voor mail die naar een
 * zelfopgegeven adres gaat; interne meldingen naar het eigen team tellen niet
 * mee — die wil je juist altijd hebben.
 */
export function mailAllowed(email: string): boolean {
  const key = email.trim().toLowerCase();
  if (!key) return false;
  return rateLimit(`mail:${key}`, MAX_MAILS_PER_ADDRESS, MAIL_WINDOW_MS).allowed;
}

/** Het 429-antwoord; alle routes die een drempel hebben, geven hetzelfde terug. */
export function tooManyRequests(retryAfter: number): Response {
  return new Response(
    JSON.stringify({ error: "Te veel aanvragen. Probeer het over een minuut opnieuw." }),
    {
      status: 429,
      headers: {
        "content-type": "application/json",
        "cache-control": "no-store",
        "retry-after": String(retryAfter),
      },
    }
  );
}
