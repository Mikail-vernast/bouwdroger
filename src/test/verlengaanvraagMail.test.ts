import { describe, expect, it } from "vitest";
import {
  PORTAL_EXTENSIONS_URL,
  extensionRequestHtml,
  extensionRequestSubject,
  extensionRequestText,
  type ExtensionRequestMail,
} from "../lib/extensionRequestMail.js";

const REQUEST: ExtensionRequestMail = {
  referentie: "VRN-2026-VYK2T7HX",
  naam: "Jan Peeters",
  email: "jan@voorbeeld.be",
  telefoon: "+32 473 43 99 50",
  extraDagen: 14,
  huidigEinde: "zondag 15 november",
  nieuwEinde: "zondag 29 november",
  opmerking: "het is nog niet droog",
  portalUrl: PORTAL_EXTENSIONS_URL,
};

describe("verlengaanvraag voor het team", () => {
  it("houdt het onderwerp dat het team kent", () => {
    expect(extensionRequestSubject(REQUEST)).toBe("Verlenging aangevraagd - VRN-2026-VYK2T7HX (+14 dagen)");
  });

  it("toont periode, klant, opmerking en de weg naar het portaal", () => {
    const html = extensionRequestHtml(REQUEST);
    expect(html).toContain("+14 dagen, tot zondag 29 november");
    expect(html).toContain("zondag 15 november");
    expect(html).toContain("het is nog niet droog");
    expect(html).toContain('href="tel:+32473439950"');
    expect(html).toContain(`href="${PORTAL_EXTENSIONS_URL}"`);
  });

  it("ontsnapt alles wat uit het publieke formulier komt", () => {
    const html = extensionRequestHtml({
      ...REQUEST,
      naam: '<img src=x onerror="alert(1)">',
      opmerking: "<script>alert(1)</script>",
      telefoon: '0470"><b>',
    });
    expect(html).not.toContain("<script>");
    expect(html).not.toContain("<img src=x");
    expect(html).toContain("&lt;script&gt;");
    expect(html).not.toContain('"><b>');
  });

  it("zegt het als er geen opmerking is", () => {
    expect(extensionRequestHtml({ ...REQUEST, opmerking: "  " })).toContain("Geen opmerking.");
    expect(extensionRequestText({ ...REQUEST, opmerking: "" })).toContain("Geen opmerking.");
  });

  it("de tekstversie bevat dezelfde feiten en de portaallink", () => {
    const text = extensionRequestText(REQUEST);
    expect(text).toContain("Gevraagd tot:       zondag 29 november  (+14 dagen)");
    expect(text).toContain("+32 473 43 99 50");
    expect(text).toContain(PORTAL_EXTENSIONS_URL);
  });
});
