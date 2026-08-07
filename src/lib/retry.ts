/**
 * Opnieuw proberen met wachttijd ertussen.
 *
 * Aanleiding: de edge functions van het portaal zijn meestal snel — 300 tot 600
 * milliseconden — maar hangen af en toe tientallen seconden. In de logs van
 * Supabase staat een aanroep van 74 seconden naast tientallen van een halve.
 * Eén poging met een krappe timeout maakt van zo'n uitschieter een harde fout:
 * de bezoeker wachtte twaalf seconden op een betaalformulier, en een order werd
 * pas doorgestuurd wanneer Stripe zijn webhook later opnieuw aanbood.
 *
 * Eén herhaling ving dat in de praktijk al op, want de volgende aanroep landt
 * doorgaans op een instance die niet vaststaat.
 */

/** Wat elke aanroep naar het portaal teruggeeft: nooit gooien, altijd melden. */
export interface Attempted {
  ok: boolean;
  reason?: string;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Voert `attempt` uit tot het lukt of tot de pogingen op zijn.
 *
 * `attempt` hoort zelf niet te gooien — dat is de afspraak van `Attempted` — maar
 * een onverwachte fout wordt hier alsnog opgevangen, zodat een herhaling er niet
 * juist voor zorgt dat een aanroeper die voorheen netjes een `{ ok: false }`
 * kreeg nu een exception voor zijn voeten krijgt.
 *
 * De laatste reden blijft staan: die zegt waarom het uiteindelijk niet lukte.
 */
export async function withRetry<T extends Attempted>(
  attempt: () => Promise<T>,
  { tries, delaysMs }: { tries: number; delaysMs: number[] },
): Promise<T> {
  let last: T | undefined;

  for (let i = 0; i < tries; i++) {
    if (i > 0) await sleep(delaysMs[Math.min(i - 1, delaysMs.length - 1)] ?? 0);

    try {
      last = await attempt();
    } catch (error: unknown) {
      const reason = error instanceof Error ? error.message : "onbekende fout";
      last = { ok: false, reason } as T;
    }

    if (last.ok) return last;
  }

  return last as T;
}
