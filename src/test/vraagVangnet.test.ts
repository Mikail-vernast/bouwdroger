/**
 * @vitest-environment node
 *
 * Het vangnet onder het vraagformulier van de homepage.
 *
 * Waarom dit een eigen bestand krijgt: de vraag loopt langs `contact-submission`
 * in het portaal, en die function telt zijn drempel per IP — het IP van deze
 * Vercel-functie, niet dat van de bezoeker. Twintig vragen per uur is dus een
 * grens op álle bezoekers samen. Wie hem opstookt, zette de volgende bezoeker
 * vroeger op een scherm dat "goed aangekomen" zei terwijl er nergens iets stond.
 *
 * Deze tests dekken de mail die dat moet voorkomen: dat ze de volledige vraag
 * draagt, dat ze als platte tekst vertrekt (dus niet afhangt van een sjabloon
 * dat in Brevo nog niet klaarstaat), en dat ze eerlijk `false` teruggeeft
 * wanneer er niets verstuurd kon worden.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const sendTemplate = vi.fn(async (_mail: unknown) => ({ ok: true }));
const sendPlain = vi.fn(async (_mail: unknown) => ({ ok: true }) as { ok: boolean; reason?: string });

vi.mock("../lib/brevo.js", () => ({
  sendTemplate: (mail: unknown) => sendTemplate(mail),
  sendPlain: (mail: unknown) => sendPlain(mail),
}));

const { sendQuestionFallback } = await import("../lib/mail.js");

function vraag(overrides: Record<string, string> = {}) {
  return {
    naam: "Jan Peeters",
    email: "jan@voorbeeld.be",
    telefoon: "0470 12 34 56",
    onderwerp: "waterschade",
    bericht: "Kelder onder water,\ngraag dringend een droger.",
    adres: "Dorpsstraat 4 2630 Aartselaar",
    reden: "rate limit portaal: HTTP 429",
    ...overrides,
  };
}

beforeEach(() => {
  process.env.BREVO_TEAM_EMAIL = "team@vernast.be";
});

afterEach(() => {
  sendTemplate.mockClear();
  sendPlain.mockClear();
  sendPlain.mockImplementation(async () => ({ ok: true }));
  vi.unstubAllEnvs();
});

describe("sendQuestionFallback", () => {
  it("stuurt de vraag als platte tekst naar het team, niet als sjabloon", async () => {
    const ok = await sendQuestionFallback(vraag());

    expect(ok).toBe(true);
    expect(sendTemplate).not.toHaveBeenCalled();
    expect(sendPlain).toHaveBeenCalledTimes(1);

    const mail = sendPlain.mock.calls[0][0] as {
      to: { email: string };
      subject: string;
      replyTo?: { email: string };
    };
    expect(mail.to.email).toBe("team@vernast.be");
    expect(mail.subject).toContain("NIET IN PORTAAL");
    // Antwoorden gaat rechtstreeks naar de klant, niet naar onszelf.
    expect(mail.replyTo?.email).toBe("jan@voorbeeld.be");
  });

  it("draagt alles wat nodig is om de vraag met de hand op te volgen", async () => {
    await sendQuestionFallback(vraag());

    const { text } = sendPlain.mock.calls[0][0] as { text: string };
    for (const fragment of [
      "Jan Peeters",
      "jan@voorbeeld.be",
      "0470 12 34 56",
      "Dorpsstraat 4 2630 Aartselaar",
      "waterschade",
      "Kelder onder water",
      "HTTP 429",
    ]) {
      expect(text).toContain(fragment);
    }
  });

  it("laat lege velden weg in plaats van een lege regel te tonen", async () => {
    await sendQuestionFallback(vraag({ telefoon: "", adres: "", onderwerp: "" }));

    const { text } = sendPlain.mock.calls[0][0] as { text: string };
    expect(text).not.toContain("Telefoon:");
    expect(text).not.toContain("Adres:");
    expect(text).not.toContain("Onderwerp:");
    // Nooit twee lege regels na elkaar: dat is de filter in de opbouw.
    expect(text).not.toMatch(/\n\n\n/);
  });

  it("geeft false wanneer Brevo de mail niet aanneemt", async () => {
    sendPlain.mockImplementation(async () => ({ ok: false, reason: "HTTP 500" }));

    expect(await sendQuestionFallback(vraag())).toBe(false);
  });

  it("geeft false zonder team-adres, en probeert niets te versturen", async () => {
    delete process.env.BREVO_TEAM_EMAIL;

    expect(await sendQuestionFallback(vraag())).toBe(false);
    expect(sendPlain).not.toHaveBeenCalled();
  });
});
