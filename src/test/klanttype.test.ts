import { describe, expect, test } from "vitest";
import { afhaalOrder, customerType } from "@/lib/orderIntake";

/*
  De verhuurwizard werkt met "part"/"pro", het portaal met "particulier"/
  "zakelijk". Wat daar niet in staat gooit `bouwdroger-order-webhook` weg, en
  dan komt een bedrijf binnen als naamloze particulier. Deze vertaling staat
  daarom op één plek, en dit legt vast wat er langs elke kant uit hoort te komen.
*/
describe("klanttype vertalen naar wat het portaal kent", () => {
  test("de wizardwaarde 'pro' wordt zakelijk", () => {
    expect(customerType("pro")).toBe("zakelijk");
  });

  test("de portaalwaarde 'zakelijk' blijft zakelijk", () => {
    expect(customerType("zakelijk")).toBe("zakelijk");
  });

  test("hoofdletters en spaties doen er niet toe", () => {
    expect(customerType("  Pro ")).toBe("zakelijk");
    expect(customerType("ZAKELIJK")).toBe("zakelijk");
  });

  test("de wizardwaarde 'part' wordt particulier", () => {
    expect(customerType("part")).toBe("particulier");
  });

  test("valt terug op particulier bij iets onbekends", () => {
    // De veilige kant: aan zakelijk hangt geen btw-verlegging, maar het portaal
    // toont het wel als bedrijfsorder — dat mag niet uit een typfout ontstaan.
    expect(customerType("bedrijf")).toBe("particulier");
    expect(customerType(undefined)).toBe("particulier");
    expect(customerType(null)).toBe("particulier");
    expect(customerType(42)).toBe("particulier");
  });
});

describe("afhaalreservatie neemt het klanttype over", () => {
  test("zakelijk met bedrijfsnaam en btw-nummer", () => {
    const order = afhaalOrder({
      lines: "revolution:1",
      days: 7,
      customer_type: "zakelijk",
      name: "Brent Ceulemans",
      company_name: "Vernast bv",
      vat_number: "BE0123.456.789",
    });

    expect(order.customerType).toBe("zakelijk");
    expect(order.company).toBe("Vernast bv");
    expect(order.vatNumber).toBe("BE0123.456.789");
  });

  test("zonder klanttype blijft het particulier", () => {
    const order = afhaalOrder({ lines: "revolution:1", days: 7, name: "Jan" });

    expect(order.customerType).toBe("particulier");
    expect(order.company).toBe("");
  });
});
