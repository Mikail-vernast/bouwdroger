import { describe, expect, test } from "vitest";
import { bookingPrice, bookingRow, reserveringRow } from "@/lib/orderIntake";
import { getAllPackages } from "@/data/packages";
import { products } from "@/data/products";
import { rateLimit } from "@/lib/rateLimit";
import { CAT, WEEKS } from "@/data/verhuur";
import { packageTotal, packageWeeks } from "@/lib/vastPakket";
import { baseItems, configPrice } from "@/lib/verhuur";

const pkg = getAllPackages()[0];

/** Aantal toestellen van één soort dat in de pakketprijs zit (zonder de optionele). */
const base = (type: string) =>
  pkg.equipment.filter((e) => e.type === type && !e.optional).reduce((s, e) => s + e.count, 0);

describe("bookingRow, allowlist", () => {
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

describe("bookingPrice, de prijs komt van de server", () => {
  test("negeert het totaal uit de request", () => {
    const row = bookingRow({
      email: "a@b.be",
      package_tier: pkg.id,
      duration_days: 7,
      total_price: 1,
    });

    expect(row.total_price).toBe(packageTotal(pkg));
    expect(row.total_price).not.toBe(1);
  });

  test("een vast pakket loopt zijn eigen termijn, niet de gekozen duur", () => {
    const row = bookingRow({ email: "a@b.be", package_tier: pkg.id, duration_days: 3 });

    expect(row.duration_days).toBe(packageWeeks(pkg) * 7);
  });

  test("geen duurkorting: 14 of 28 gekozen dagen geven hetzelfde pakkettotaal", () => {
    const a = bookingPrice({ package_tier: pkg.id, duration_days: 14 });
    const b = bookingPrice({ package_tier: pkg.id, duration_days: 28 });

    expect(a).toBe(packageTotal(pkg));
    expect(b).toBe(packageTotal(pkg));
  });

  /*
    De regressie die deze route had: chape-100-6 loopt 21 dagen voor € 256,20,
    maar ging voor € 161,80 (14 dagen, 5 % duurkorting) als order binnen.
  */
  test("chape-100-6 kost € 256,20, ook als de bezoeker 14 dagen koos", () => {
    expect(bookingPrice({ package_tier: "chape-100-6", duration_days: 14 })).toBe(256.2);
  });

  test("rekent op dezelfde manier als de boekingsflow, voor elk pakket", () => {
    for (const p of getAllPackages()) {
      const config = {
        size: String(p.sqm),
        wat: p.workType,
        pd: p.workType === "pleister" ? String(p.thicknessCm) : "2",
        cd: p.workType === "chape" ? String(p.thicknessCm) : "6",
        heat: false,
        weeks: 2,
      };
      expect(bookingPrice({ package_tier: p.id }), p.id).toBe(configPrice(config, baseItems(config)));
    }
  });

  test("rekent extra toestellen boven het pakket door aan het tarief per 2 weken", () => {
    const factor = WEEKS[packageWeeks(pkg)] ?? 1;
    const price = bookingPrice({
      package_tier: pkg.id,
      equipment_drogers: base("bouwdroger") + 2,
    });

    expect(price).toBe(Math.round((packageTotal(pkg) + 2 * CAT.small.w2 * factor) * 100) / 100);
  });

  test("optionele kachels zijn niet gratis: wie ze vraagt, betaalt ze", () => {
    const factor = WEEKS[packageWeeks(pkg)] ?? 1;
    const price = bookingPrice({ package_tier: pkg.id, equipment_verwarming: 1 });

    expect(price).toBe(Math.round((packageTotal(pkg) + CAT.kachel.w2 * factor) * 100) / 100);
  });

  test("telt geen negatieve extra's als de opgegeven aantallen lager zijn", () => {
    const price = bookingPrice({
      package_tier: pkg.id,
      duration_days: 7,
      equipment_drogers: 0,
    });

    expect(price).toBe(packageTotal(pkg));
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
