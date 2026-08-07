import { describe, expect, it } from "vitest";
import { withRetry } from "../lib/retry.js";

describe("withRetry", () => {
  it("doet één poging wanneer die meteen lukt", async () => {
    let calls = 0;
    const result = await withRetry(
      async () => {
        calls++;
        return { ok: true };
      },
      { tries: 3, delaysMs: [0, 0] },
    );

    expect(calls).toBe(1);
    expect(result.ok).toBe(true);
  });

  it("probeert opnieuw na een mislukte poging en geeft het resultaat van de geslaagde terug", async () => {
    let calls = 0;
    const result = await withRetry(
      async () => {
        calls++;
        return calls < 3 ? { ok: false, reason: "timeout" } : { ok: true, answer: "goed" };
      },
      { tries: 3, delaysMs: [0, 0] },
    );

    expect(calls).toBe(3);
    expect(result).toEqual({ ok: true, answer: "goed" });
  });

  it("stopt na het afgesproken aantal pogingen en houdt de laatste reden vast", async () => {
    let calls = 0;
    const result = await withRetry(
      async () => {
        calls++;
        return { ok: false, reason: `poging ${calls}` };
      },
      { tries: 3, delaysMs: [0, 0] },
    );

    expect(calls).toBe(3);
    expect(result).toEqual({ ok: false, reason: "poging 3" });
  });

  it("vangt een onverwachte exception op in plaats van hem door te laten", async () => {
    let calls = 0;
    const result = await withRetry(
      async () => {
        calls++;
        if (calls === 1) throw new Error("netwerk stuk");
        return { ok: true };
      },
      { tries: 2, delaysMs: [0] },
    );

    expect(calls).toBe(2);
    expect(result.ok).toBe(true);
  });

  it("meldt de fout netjes wanneer élke poging gooit", async () => {
    const result = await withRetry(
      async () => {
        throw new Error("portaal onbereikbaar");
      },
      { tries: 2, delaysMs: [0] },
    );

    expect(result).toEqual({ ok: false, reason: "portaal onbereikbaar" });
  });
});
