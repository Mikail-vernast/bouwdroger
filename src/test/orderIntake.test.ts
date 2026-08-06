import { describe, expect, test } from "vitest";
import { bookingPrice, bookingRow, reserveringRow } from "@/lib/orderIntake";
import { getAllPackages } from "@/data/packages";
import { products } from "@/data/products";
import { rateLimit } from "@/lib/rateLimit";

const pkg = getAllPackages()[0];

/** Aantal toestellen van één soort dat standaard in dit pakket zit. */
const base = (type: string) =>
  pkg.equipment.filter((e) => e.type === type).reduce((s, e) => s + e.count, 0);

describe("bookingRow — allowlist", () => {
  test("laat onbekende velden vallen", () => {
    const row = bookingRow({ email: "a@b.be", is_admin: true, interne_notitie: "x" });

    expect(row.email).toBe("a@b.be");
    expect(row).not.toHaveProperty("is_admin");
    expect(row).not.toHaveProperty("interne_notitie");
  });

  test("negeert een status die de bezoeker meestuurt", () => {
    const row = bookingRow({ email: "a@b.be", status: "confirmed" });

    expect(row.status).toBe("pending");
  });

  test("negeert een user_id die de bezoeker meestuurt", () => {
    const row = bookingRow({ email: "a@b.be", user_id: "iemand-anders" });

    expect(row.user_id).toBeNull();
  });
});

describe("bookingPrice — de prijs komt van de server", () => {
  test("negeert het totaal uit de request", () => {
    const row = bookingRow({
      email: "a@b.be",
      package_tier: pkg.id,
      duration_days: 7,
      total_price: 1,
    });

    expect(row.total_price).toBe(pkg.pricePerDay * 7);
    expect(row.total_price).not.toBe(1);
  });

  test("past de kortingsstaffel toe vanaf 14 dagen", () => {
    const subtotal = pkg.pricePerDay * 14;
    const expected = subtotal - Math.round(subtotal * 0.05);

    expect(bookingPrice({ package_tier: pkg.id, duration_days: 14 })).toBe(expected);
  });

  test("rekent extra toestellen boven het pakket door", () => {
    const days = 7;
    const price = bookingPrice({
      package_tier: pkg.id,
      duration_days: days,
      equipment_drogers: base("bouwdroger") + 2,
    });

    expect(price).toBe((pkg.pricePerDay + 2 * 12) * days);
  });

  test("telt geen negatieve extra's als de opgegeven aantallen lager zijn", () => {
    const price = bookingPrice({
      package_tier: pkg.id,
      duration_days: 7,
      equipment_drogers: 0,
    });

    expect(price).toBe(pkg.pricePerDay * 7);
  });

  test("gebruikt de catalogusprijs bij een losse toestelboeking", () => {
    const product = products[0];
    const price = bookingPrice({ product_id: product.id, duration_days: 3 });

    expect(price).toBe(product.pricePerDay * 3);
  });

  test("levert null wanneer er niets te berekenen valt", () => {
    expect(bookingPrice({ package_tier: "bestaat-niet" })).toBeNull();
  });
});

describe("reserveringRow", () => {
  test("laat een meegestuurd bedrag niet door", () => {
    const row = reserveringRow({ email: "a@b.be", prijs_excl_btw: 0 });

    expect(row).not.toHaveProperty("prijs_excl_btw");
  });

  test("behoudt de velden van het formulier", () => {
    const row = reserveringRow({ voornaam: "Jan", machine: "TTK 350", onzin: 1 });

    expect(row).toEqual({ voornaam: "Jan", machine: "TTK 350" });
  });
});

describe("rateLimit", () => {
  test("laat het toegestane aantal door en blokkeert daarna", () => {
    const key = "test-ip-blokkeert";
    const results = Array.from({ length: 6 }, () => rateLimit(key, 5, 60_000));

    expect(results.slice(0, 5).every((r) => r.allowed)).toBe(true);
    expect(results[5].allowed).toBe(false);
    expect(results[5].retryAfter).toBeGreaterThan(0);
  });

  test("telt per sleutel, zodat één bezoeker een ander niet blokkeert", () => {
    rateLimit("test-ip-a", 1, 60_000);
    rateLimit("test-ip-a", 1, 60_000);

    expect(rateLimit("test-ip-b", 1, 60_000).allowed).toBe(true);
  });
});
