import { describe, expect, it } from "vitest";
import { tomorrowInBrussels } from "../../api/delivery-reminders.js";

describe("welke leverdatum is morgen", () => {
  it("neemt de dag ná vandaag in Belgische tijd", () => {
    expect(tomorrowInBrussels(new Date("2026-08-10T11:00:00Z"))).toBe("2026-08-11");
  });

  it("telt de zomertijd mee: 23:00 UTC is in Brussel al de volgende dag", () => {
    // 23:00 UTC op 10 augustus is 01:00 op 11 augustus in Brussel, dus "morgen"
    // is dan 12 augustus. Wie in UTC rekent, waarschuwt een dag te vroeg.
    expect(tomorrowInBrussels(new Date("2026-08-10T23:00:00Z"))).toBe("2026-08-12");
  });

  it("werkt over een maandgrens heen", () => {
    expect(tomorrowInBrussels(new Date("2026-08-31T12:00:00Z"))).toBe("2026-09-01");
  });

  it("werkt in de winter, wanneer Brussel op UTC+1 staat", () => {
    expect(tomorrowInBrussels(new Date("2026-12-31T12:00:00Z"))).toBe("2027-01-01");
  });
});
