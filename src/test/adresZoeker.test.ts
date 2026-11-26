import { afterEach, describe, expect, it, vi } from "vitest";
import { lookupAddress, parseSuggestion, suggestAddresses } from "@/lib/adresZoeker";

afterEach(() => vi.unstubAllGlobals());

function antwoord(body: unknown, ok = true) {
  return vi.fn().mockResolvedValue({ ok, json: () => Promise.resolve(body) });
}

describe("parseSuggestion", () => {
  it("leest een volledig adres", () => {
    expect(parseSuggestion("Antwerpsestraat 5, 2640 Mortsel")).toEqual({
      straat: "Antwerpsestraat",
      nr: "5",
      postcode: "2640",
      gemeente: "Mortsel",
    });
  });
  it("leest een straat zonder nummer", () => {
    expect(parseSuggestion("Kerkstraat, Aalst")).toEqual({
      straat: "Kerkstraat",
      nr: "",
      postcode: "",
      gemeente: "Aalst",
    });
  });
  it("houdt een nummer met toevoeging", () => {
    expect(parseSuggestion("Grote Markt 12A, 1000 Brussel").nr).toBe("12A");
  });
});

describe("suggestAddresses", () => {
  it("vraagt niets op onder drie tekens", async () => {
    const fetch = antwoord({ SuggestionResult: ["x"] });
    vi.stubGlobal("fetch", fetch);
    expect(await suggestAddresses("ke")).toEqual([]);
    expect(fetch).not.toHaveBeenCalled();
  });
  it("geeft de suggesties terug", async () => {
    vi.stubGlobal("fetch", antwoord({ SuggestionResult: ["Kerkstraat, Aalst", 3] }));
    expect(await suggestAddresses("kerkstraat")).toEqual(["Kerkstraat, Aalst"]);
  });
  it("wordt een lege lijst als de dienst faalt", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new TypeError("offline")));
    expect(await suggestAddresses("kerkstraat")).toEqual([]);
  });
});

describe("lookupAddress", () => {
  it("vult de postcode aan die een straat zonder nummer mist", async () => {
    vi.stubGlobal(
      "fetch",
      antwoord({
        LocationResult: [
          { Municipality: "Aalst", Zipcode: "9300", Thoroughfarename: "Kerkstraat", Housenumber: null },
        ],
      }),
    );
    expect(await lookupAddress("Kerkstraat, Aalst")).toEqual({
      straat: "Kerkstraat",
      nr: "",
      postcode: "9300",
      gemeente: "Aalst",
    });
  });
  it("valt terug op het label als de dienst faalt", async () => {
    vi.stubGlobal("fetch", antwoord({}, false));
    expect(await lookupAddress("Antwerpsestraat 5, 2640 Mortsel")).toEqual({
      straat: "Antwerpsestraat",
      nr: "5",
      postcode: "2640",
      gemeente: "Mortsel",
    });
  });
});
