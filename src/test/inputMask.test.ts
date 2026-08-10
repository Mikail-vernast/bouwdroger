import { describe, expect, it } from "vitest";
import { isValidEmail, isValidPhone, maskEmail, maskPhone, normalizePhone } from "@/lib/inputMask";

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
