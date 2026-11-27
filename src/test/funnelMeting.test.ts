import { describe, expect, it } from "vitest";
import { CALCULATOR_CONVERSION_ID, SIMULATOR_CONVERSION_ID, boekingStep, cleanUrl, funnelArgs } from "../lib/funnel";

const SESSIE = "0b54f322-fdc8-46dd-bfb2-1e6fd5500fd2";

describe("funnelArgs", () => {
  it("telt een sessie die in de simulator begon bij de simulatorconversie", () => {
    expect(funnelArgs({ session_id: SESSIE, event_type: "view", flow: "simulator" })?.p_conversion_id).toBe(SIMULATOR_CONVERSION_ID);
    expect(funnelArgs({ session_id: SESSIE, event_type: "view", flow: "calculator" })?.p_conversion_id).toBe(CALCULATOR_CONVERSION_ID);
  });

  it("valt zonder of met een onbekende ingang terug op de calculator", () => {
    expect(funnelArgs({ session_id: SESSIE, event_type: "view" })?.p_conversion_id).toBe(CALCULATOR_CONVERSION_ID);
    expect(funnelArgs({ session_id: SESSIE, event_type: "view", flow: "iets" })?.p_conversion_id).toBe(CALCULATOR_CONVERSION_ID);
  });

  it("zet de conversie zelf, ook als de aanvraag een andere meestuurt", () => {
    const args = funnelArgs({ session_id: SESSIE, event_type: "view", p_conversion_id: "iets-anders" });
    expect(args?.p_conversion_id).toBe(CALCULATOR_CONVERSION_ID);
    expect(args?.p_step_index).toBe(-1);
  });

  it("neemt een stap mee met zijn naam", () => {
    const args = funnelArgs({ session_id: SESSIE, event_type: "step", step_index: 3, step_key: "Dikte chape" });
    expect([args?.p_step_index, args?.p_step_key]).toEqual([3, "Dikte chape"]);
  });

  it("weigert een stap zonder geldig nummer", () => {
    expect(funnelArgs({ session_id: SESSIE, event_type: "step" })).toBeNull();
    expect(funnelArgs({ session_id: SESSIE, event_type: "step", step_index: 51 })).toBeNull();
    expect(funnelArgs({ session_id: SESSIE, event_type: "step", step_index: 1.5 })).toBeNull();
  });

  it("weigert een onbekend event of een rare sessie", () => {
    expect(funnelArgs({ session_id: SESSIE, event_type: "klik" })).toBeNull();
    expect(funnelArgs({ session_id: "kort", event_type: "view" })).toBeNull();
    expect(funnelArgs({ session_id: "<script>alert(1)</script>", event_type: "view" })).toBeNull();
    expect(funnelArgs(null)).toBeNull();
    expect(funnelArgs([])).toBeNull();
  });

  it("kort lange velden in en laat een onbekend toestel weg", () => {
    const args = funnelArgs({
      session_id: SESSIE, event_type: "view", landing_page: "https://www.bouwdrogers.be/" + "x".repeat(900), device_type: "koelkast",
    });
    expect((args?.p_landing_page as string).length).toBeLessThanOrEqual(500);
    expect(args?.p_device_type).toBeNull();
  });
});

describe("boekingStep", () => {
  it("nummert de boekingsstappen na de calculator en het pakket", () => {
    expect(boekingStep(1)).toEqual({ index: 11, key: "Dekking" });
    expect(boekingStep(5)).toEqual({ index: 15, key: "Betaling" });
  });

  it("de bevestiging en de controlestand zijn geen stap", () => {
    expect(boekingStep(6)).toBeNull();
    expect(boekingStep(0)).toBeNull();
  });
});

describe("cleanUrl", () => {
  it("haalt de Stripe-session_id uit het adres, de utm blijft", () => {
    expect(cleanUrl("https://www.bouwdrogers.be/verhuur/boeken?session_id=cs_live_abc&utm_source=google", true))
      .toBe("https://www.bouwdrogers.be/verhuur/boeken?utm_source=google");
  });

  it("de referrer krijgt geen querystring mee", () => {
    expect(cleanUrl("https://www.google.com/search?q=bouwdroger+huren", false)).toBe("https://www.google.com/search");
  });

  it("geen geldige http(s)-URL wordt null", () => {
    expect(cleanUrl("javascript:alert(1)", true)).toBeNull();
    expect(cleanUrl("geen url", true)).toBeNull();
    expect(cleanUrl("", false)).toBeNull();
  });

  it("funnelArgs schoont ook zelf op, voor wie de route rechtstreeks aanroept", () => {
    const args = funnelArgs({
      session_id: "abcdef12-3456", event_type: "view",
      landing_page: "https://www.bouwdrogers.be/verhuur/boeken?session_id=cs_live_abc",
    });
    expect(args?.p_landing_page).toBe("https://www.bouwdrogers.be/verhuur/boeken");
  });
});
