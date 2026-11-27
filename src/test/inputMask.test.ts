import { describe, expect, it } from "vitest";
import {
  isValidEmail,
  isValidHouseNumber,
  isValidPhone,
  isValidPostcode,
  maskEmail,
  maskHouseNumber,
  maskName,
  maskPhone,
  maskPostcode,
  maskBtw,
  maskBedrijf,
  maskStreet,
  normalizePhone,
} from "@/lib/inputMask";

describe("maskPhone", () => {
  it("groepeert een gsm-nummer terwijl je typt", () => {
    expect(maskPhone("0")).toBe("0");
    expect(maskPhone("0473")).toBe("0473");
    expect(maskPhone("04734")).toBe("0473 4");
    expect(maskPhone("0473439950")).toBe("0473 43 99 50");
  });

  it("vult de vergeten nul aan", () => {
    expect(maskPhone("473439950")).toBe("0473 43 99 50");
  });

  it("groepeert vaste lijnen per zone", () => {
    expect(maskPhone("036899065")).toBe("03 689 90 65");
    expect(maskPhone("011223344")).toBe("011 22 33 44");
  });

  it("herkent het internationale formaat", () => {
    expect(maskPhone("+32473439950")).toBe("+32 473 43 99 50");
    expect(maskPhone("32473439950")).toBe("+32 473 43 99 50");
    expect(maskPhone("+320473439950")).toBe("+32 473 43 99 50");
    expect(maskPhone("+32")).toBe("+32");
  });

  it("laat buitenlandse nummers ongemoeid", () => {
    expect(maskPhone("+31612345678")).toBe("+31612345678");
  });

  it("negeert wat geen cijfer is en kapt af op de maximale lengte", () => {
    expect(maskPhone("0473/43.99.50 (gsm)")).toBe("0473 43 99 50");
    expect(maskPhone("04734399501234")).toBe("0473 43 99 50");
    expect(maskPhone("")).toBe("");
  });
});

describe("normalizePhone", () => {
  it("bewaart enkel cijfers", () => {
    expect(normalizePhone("0473 43 99 50")).toBe("0473439950");
    expect(normalizePhone("473439950")).toBe("0473439950");
    expect(normalizePhone("+32 473 43 99 50")).toBe("+32473439950");
  });
});

describe("isValidPhone", () => {
  it("aanvaardt Belgische gsm- en vaste nummers", () => {
    expect(isValidPhone("0473 43 99 50")).toBe(true);
    expect(isValidPhone("03 689 90 65")).toBe(true);
    expect(isValidPhone("+32 473 43 99 50")).toBe(true);
  });

  it("weigert te korte invoer", () => {
    expect(isValidPhone("0473 43")).toBe(false);
    expect(isValidPhone("")).toBe(false);
  });
});

describe("maskEmail", () => {
  it("verwijdert spaties en zet om naar kleine letters", () => {
    expect(maskEmail("  Jan@Voorbeeld.BE ")).toBe("jan@voorbeeld.be");
    expect(maskEmail("<jan@voorbeeld.be>")).toBe("jan@voorbeeld.be");
  });
});

describe("isValidEmail", () => {
  it("aanvaardt een normaal adres", () => {
    expect(isValidEmail("jan@voorbeeld.be")).toBe(true);
    expect(isValidEmail("jan.peeters+werf@mail.co.uk")).toBe(true);
  });

  it("weigert een adres zonder domein of extensie", () => {
    expect(isValidEmail("jan@voorbeeld")).toBe(false);
    expect(isValidEmail("jan.voorbeeld.be")).toBe(false);
    expect(isValidEmail("@voorbeeld.be")).toBe(false);
  });
});

describe("maskPostcode", () => {
  it("keeps a Belgian postcode at four digits", () => {
    expect(maskPostcode("2500")).toBe("2500");
    expect(maskPostcode("25001")).toBe("2500");
    expect(maskPostcode("b-2500")).toBe("2500");
  });

  it("formats a Dutch postcode as 1234 AB", () => {
    expect(maskPostcode("1234ab")).toBe("1234 AB");
    expect(maskPostcode("1234 a")).toBe("1234 A");
    expect(maskPostcode("1234abc")).toBe("1234 AB");
    expect(maskPostcode("NL-1234 ab")).toBe("1234 AB");
  });

  it("drops letters that come before four digits", () => {
    expect(maskPostcode("12a")).toBe("12");
  });
});

describe("isValidPostcode", () => {
  it("accepts BE and NL, rejects the rest", () => {
    expect(isValidPostcode("2500")).toBe(true);
    expect(isValidPostcode("1234 AB")).toBe(true);
    expect(isValidPostcode("0250")).toBe(false);
    expect(isValidPostcode("250")).toBe(false);
    expect(isValidPostcode("1234 A")).toBe(false);
  });
});

describe("maskName", () => {
  it("keeps letters, accents, hyphens and apostrophes", () => {
    expect(maskName("Jean-Pierre D'Hondt")).toBe("Jean-Pierre D'Hondt");
    expect(maskName("Zoë Çelik")).toBe("Zoë Çelik");
  });

  it("drops digits and symbols, and collapses spaces", () => {
    expect(maskName("Jan2 Peeters!")).toBe("Jan Peeters");
    expect(maskName("  Jan   Peeters")).toBe("Jan Peeters");
  });

  it("keeps a trailing space so the next word can be typed", () => {
    expect(maskName("Jan ")).toBe("Jan ");
  });
});

describe("maskStreet", () => {
  it("laat cijfers en leestekens van een straatnaam staan", () => {
    expect(maskStreet("Rue du 1er Mai")).toBe("Rue du 1er Mai");
    expect(maskStreet("  Sint-Jansplein;")).toBe("Sint-Jansplein");
  });
});

describe("maskHouseNumber", () => {
  it("houdt nummer en toevoeging, in hoofdletters", () => {
    expect(maskHouseNumber("12a")).toBe("12A");
    expect(maskHouseNumber("12/3")).toBe("12/3");
    expect(maskHouseNumber("12 bus 3")).toBe("12 bus 3");
  });
  it("begint altijd met een cijfer", () => {
    expect(maskHouseNumber("nr 5")).toBe("5");
  });
});

describe("isValidHouseNumber", () => {
  it("eist minstens één cijfer vooraan", () => {
    expect(isValidHouseNumber("7")).toBe(true);
    expect(isValidHouseNumber("")).toBe(false);
  });
});

describe("maskBtw", () => {
  it("zet een Belgisch btw-nummer in de vorm BE 0123.456.789", () => {
    expect(maskBtw("be0123456789")).toBe("BE 0123.456.789");
    expect(maskBtw("BE 0123.456.789")).toBe("BE 0123.456.789");
    expect(maskBtw("0123456789")).toBe("BE 0123.456.789");
  });
  it("groepeert al tijdens het typen", () => {
    expect(maskBtw("BE")).toBe("BE");
    expect(maskBtw("BE0123")).toBe("BE 0123");
    expect(maskBtw("BE012345")).toBe("BE 0123.45");
  });
  it("laat niet meer dan tien Belgische cijfers toe", () => {
    expect(maskBtw("BE01234567891234")).toBe("BE 0123.456.789");
  });
  it("laat een buitenlands btw-nummer in hoofdletters staan", () => {
    expect(maskBtw("nl 123456789 b01")).toBe("NL123456789B01");
  });
});

describe("maskBedrijf", () => {
  it("laat de tekens van een bedrijfsnaam staan", () => {
    expect(maskBedrijf("Bouw & Co. (Gent) BV")).toBe("Bouw & Co. (Gent) BV");
    expect(maskBedrijf("De Smet-Peeters' bvba")).toBe("De Smet-Peeters' bvba");
  });
  it("haalt vreemde tekens en dubbele spaties weg", () => {
    expect(maskBedrijf("  Vernast <script>  bv")).toBe("Vernast script bv");
  });
});
