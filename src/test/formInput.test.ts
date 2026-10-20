import { describe, expect, test } from "vitest";
import { MAX_FORM_BYTES, cleanText, isValidEmail, readJsonBody } from "@/lib/formInput";

const post = (body: string) =>
  new Request("https://example.test/", { method: "POST", body, headers: { "content-type": "application/json" } });

describe("isValidEmail", () => {
  test("volgt de regel van het Vernast-portaal", () => {
    expect(isValidEmail("jan.peeters+werf@bouw-bedrijf.be")).toBe(true);
    expect(isValidEmail("a<b>@x.be")).toBe(false);
    expect(isValidEmail("jan@localhost")).toBe(false);
    expect(isValidEmail("jan@x.b")).toBe(false);
  });
});

describe("readJsonBody", () => {
  test("leest een gewone body", async () => {
    expect(await readJsonBody<{ a: number }>(post('{"a":1}'))).toEqual({ a: 1 });
  });

  test("weigert een te grote body, ongeldige JSON en een kale waarde", async () => {
    expect(await readJsonBody(post(JSON.stringify({ x: "a".repeat(MAX_FORM_BYTES) })))).toBeNull();
    expect(await readJsonBody(post("{"))).toBeNull();
    expect(await readJsonBody(post("42"))).toBeNull();
  });
});

describe("cleanText", () => {
  test("haalt regeleinden uit enkelregelige velden", () => {
    expect(cleanText("Jan\r\nBcc: x@y.be", 200)).toBe("Jan  Bcc: x@y.be");
  });

  test("houdt de regels van een bericht maar niet de andere controletekens", () => {
    expect(cleanText("regel 1\nregel 2\u0007", 200, true)).toBe("regel 1\nregel 2");
  });

  test("kort in", () => {
    expect(cleanText("abcdef", 3)).toBe("abc");
  });
});
