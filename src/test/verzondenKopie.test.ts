import { describe, expect, it } from "vitest";
import { buildMime, type SentMail } from "../lib/sentCopy.js";

const MAIL: SentMail = {
  messageId: "<202608111106.41950597888@smtp-relay.mailin.fr>",
  from: { email: "info@vernast.be", name: "Vernast Bouwdrogers" },
  to: { email: "jan@voorbeeld.be", name: "Jan Peeters" },
};

const DATE = new Date("2026-08-11T11:18:00.000Z");

function mime(overrides: Partial<Parameters<typeof buildMime>[0]> = {}): string {
  return buildMime({
    mail: MAIL,
    subject: "Uw boeking staat vast",
    body: "<p>Dag Jan</p>",
    html: true,
    date: DATE,
    ...overrides,
  });
}

function header(raw: string, name: string): string | undefined {
  return raw
    .split("\r\n\r\n")[0]
    .split("\r\n")
    .find((line) => line.toLowerCase().startsWith(`${name.toLowerCase()}: `))
    ?.slice(name.length + 2);
}

function body(raw: string): string {
  return Buffer.from(raw.split("\r\n\r\n")[1].replace(/\r\n/g, ""), "base64").toString("utf8");
}

describe("buildMime", () => {
  it("draagt de Message-ID van Brevo, zodat de kopie hetzelfde bericht is", () => {
    expect(header(mime(), "Message-ID")).toBe(MAIL.messageId);
  });

  it("zet afzender en ontvanger met naam en adres", () => {
    const raw = mime();
    expect(header(raw, "From")).toBe('"Vernast Bouwdrogers" <info@vernast.be>');
    expect(header(raw, "To")).toBe('"Jan Peeters" <jan@voorbeeld.be>');
  });

  it("laat de naam weg als die er niet is", () => {
    const raw = mime({ mail: { ...MAIL, to: { email: "team@vernast.be" } } });
    expect(header(raw, "To")).toBe("<team@vernast.be>");
  });

  it("neemt Reply-To alleen op als er een is", () => {
    expect(header(mime(), "Reply-To")).toBeUndefined();
    const raw = mime({ mail: { ...MAIL, replyTo: { email: "jan@voorbeeld.be", name: null } } });
    expect(header(raw, "Reply-To")).toBe("<jan@voorbeeld.be>");
  });

  it("codeert een onderwerp met accenten als encoded-word", () => {
    const raw = mime({ subject: "Uw boeking — €616,00" });
    const encoded = header(raw, "Subject") ?? "";
    expect(encoded).toMatch(/^=\?UTF-8\?B\?.+\?=$/);
    expect(Buffer.from(encoded.slice(10, -2), "base64").toString("utf8")).toBe(
      "Uw boeking — €616,00",
    );
  });

  it("laat een onderwerp zonder accenten ongemoeid", () => {
    expect(header(mime(), "Subject")).toBe("Uw boeking staat vast");
  });

  it("schrijft de datum in de vorm die RFC 5322 vraagt", () => {
    expect(header(mime(), "Date")).toBe("Tue, 11 Aug 2026 11:18:00 +0000");
  });

  it("bewaart de inhoud onbeschadigd, ook met accenten", () => {
    const html = "<p>Dag Jan — uw droger komt op maandag. Prijs: €616,00</p>";
    expect(body(mime({ body: html }))).toBe(html);
  });

  it("knipt base64 in regels van hoogstens 76 tekens", () => {
    const raw = mime({ body: "x".repeat(5000) });
    const lines = raw.split("\r\n\r\n")[1].trim().split("\r\n");
    expect(lines.length).toBeGreaterThan(1);
    expect(Math.max(...lines.map((line) => line.length))).toBeLessThanOrEqual(76);
  });

  it("zet het juiste content-type voor tekst en voor html", () => {
    expect(header(mime(), "Content-Type")).toBe("text/html; charset=utf-8");
    expect(header(mime({ html: false }), "Content-Type")).toBe("text/plain; charset=utf-8");
  });

  /*
    De naam van een ontvanger komt van een bezoeker. Zonder het weghalen van
    regeleindes kan die er eigen headers mee bijschrijven — een Bcc naar zichzelf
    bijvoorbeeld, of een tweede Subject.
  */
  it("laat geen headers bijschrijven vanuit een naam of onderwerp", () => {
    const raw = mime({
      mail: { ...MAIL, to: { email: "jan@voorbeeld.be", name: "Jan\r\nBcc: stiekem@elders.be" } },
      subject: "Hallo\r\nX-Gestolen: ja",
    });

    const headers = raw.split("\r\n\r\n")[0].split("\r\n");
    expect(headers.some((line) => line.toLowerCase().startsWith("bcc:"))).toBe(false);
    expect(headers.some((line) => line.startsWith("X-Gestolen:"))).toBe(false);
    expect(header(raw, "Subject")).toBe("HalloX-Gestolen: ja");
  });
});
