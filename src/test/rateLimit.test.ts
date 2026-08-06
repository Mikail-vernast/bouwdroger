import { describe, expect, test } from "vitest";
import { clientIp, gate, rateLimit, tooManyRequests } from "../lib/rateLimit";

/**
 * De tellers staan in één module-brede Map, dus elke test heeft een eigen IP
 * nodig — anders lekt de ene test zijn tellerstand in de volgende.
 */
let counter = 0;
function freshIp(): string {
  counter += 1;
  return `10.0.0.${counter}`;
}

describe("rateLimit", () => {
  test("laat aanvragen door tot de grens en weigert daarna", () => {
    const key = freshIp();
    for (let i = 0; i < 3; i += 1) {
      expect(rateLimit(key, 3).allowed).toBe(true);
    }
    expect(rateLimit(key, 3).allowed).toBe(false);
  });

  test("geeft bij weigering een Retry-After in hele seconden", () => {
    const key = freshIp();
    rateLimit(key, 1);
    const blocked = rateLimit(key, 1);

    expect(blocked.allowed).toBe(false);
    expect(blocked.retryAfter).toBeGreaterThan(0);
    expect(Number.isInteger(blocked.retryAfter)).toBe(true);
  });

  test("opent opnieuw zodra het venster verlopen is", async () => {
    const key = freshIp();
    expect(rateLimit(key, 1, 20).allowed).toBe(true);
    expect(rateLimit(key, 1, 20).allowed).toBe(false);

    await new Promise((resolve) => setTimeout(resolve, 30));
    expect(rateLimit(key, 1, 20).allowed).toBe(true);
  });

  test("telt per sleutel, niet over alle bezoekers heen", () => {
    const a = freshIp();
    const b = freshIp();

    expect(rateLimit(a, 1).allowed).toBe(true);
    expect(rateLimit(a, 1).allowed).toBe(false);
    // b heeft niets misdaan en mag gewoon door.
    expect(rateLimit(b, 1).allowed).toBe(true);
  });
});

describe("gate", () => {
  test("mislukte pogingen verbruiken de strakke grens niet", () => {
    const limit = gate(freshIp(), 2, 10);

    // Tien keer een formulier verkeerd invullen: alleen `attempt` telt mee.
    for (let i = 0; i < 10; i += 1) {
      expect(limit.attempt().allowed).toBe(true);
    }

    // De twee échte orders die daarna komen, moeten er nog altijd door.
    expect(limit.accept().allowed).toBe(true);
    expect(limit.accept().allowed).toBe(true);
  });

  test("de strakke grens stopt wel een reeks geslaagde orders", () => {
    const limit = gate(freshIp(), 2, 10);

    expect(limit.accept().allowed).toBe(true);
    expect(limit.accept().allowed).toBe(true);
    expect(limit.accept().allowed).toBe(false);
  });

  test("de ruime grens stopt een script dat er alleen maar rommel doorheen jaagt", () => {
    const limit = gate(freshIp(), 2, 5);

    for (let i = 0; i < 5; i += 1) {
      expect(limit.attempt().allowed).toBe(true);
    }
    expect(limit.attempt().allowed).toBe(false);
  });

  test("twee IP's zitten elkaar niet in de weg", () => {
    const a = gate(freshIp(), 1, 5);
    const b = gate(freshIp(), 1, 5);

    expect(a.accept().allowed).toBe(true);
    expect(a.accept().allowed).toBe(false);
    expect(b.accept().allowed).toBe(true);
  });
});

describe("clientIp", () => {
  test("neemt het eerste adres uit x-forwarded-for", () => {
    const request = new Request("https://example.test/", {
      headers: { "x-forwarded-for": "203.0.113.7, 70.41.3.18, 150.172.238.178" },
    });
    expect(clientIp(request)).toBe("203.0.113.7");
  });

  test("valt terug op x-real-ip", () => {
    const request = new Request("https://example.test/", {
      headers: { "x-real-ip": "203.0.113.9" },
    });
    expect(clientIp(request)).toBe("203.0.113.9");
  });

  test("levert een vaste sleutel wanneer er geen adres bekend is", () => {
    expect(clientIp(new Request("https://example.test/"))).toBe("onbekend");
  });
});

describe("tooManyRequests", () => {
  test("is een 429 met Retry-After en wordt niet gecachet", async () => {
    const response = tooManyRequests(42);

    expect(response.status).toBe(429);
    expect(response.headers.get("retry-after")).toBe("42");
    expect(response.headers.get("cache-control")).toBe("no-store");
    await expect(response.json()).resolves.toHaveProperty("error");
  });
});
