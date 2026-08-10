/**
 * @vitest-environment node
 *
 * De twee drempels die het mailen tegen misbruik beschermen, en het vangnet
 * onder de interne meldingen.
 *
 * Waarom dit apart staat van `mail.test.ts`: dat bestand controleert wat er ín
 * een mail komt te staan. Dit bestand controleert wanneer er wél en niet
 * gemaild wordt — het gedrag waar een aanvaller aan trekt.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const sendTemplate = vi.fn(async () => ({ ok: true }));
const sendPlain = vi.fn(async () => ({ ok: true }));

vi.mock("../lib/brevo.js", () => ({
  sendTemplate: (...args: unknown[]) => sendTemplate(...(args as [])),
  sendPlain: (...args: unknown[]) => sendPlain(...(args as [])),
}));

const { sendContactMails, alertSyncFailure } = await import("../lib/mail.js");

/**
 * De teller per adres staat in een module-brede Map, dus elke test heeft een
 * eigen adres nodig — anders lekt de ene test zijn stand in de volgende.
 */
let counter = 0;
function freshAddress(): string {
  counter += 1;
  return `bezoeker${counter}@voorbeeld.be`;
}

function contact(email: string) {
  return { naam: "Jan Peeters", email, bericht: "Graag een offerte." };
}

beforeEach(() => {
  process.env.BREVO_TEAM_EMAIL = "team@vernast.be";
  process.env.BREVO_TPL_CONTACT_ONTVANGEN = "42";
  delete process.env.BREVO_TPL_INTERN_CONTACT;
  delete process.env.BREVO_TPL_INTERN_ALARM;
});

afterEach(() => {
  sendTemplate.mockClear();
  sendPlain.mockClear();
  vi.unstubAllEnvs();
});

describe("drempel per ontvangeradres", () => {
  it("stuurt de bevestiging naar een adres dat nog niets gehad heeft", async () => {
    const email = freshAddress();
    await sendContactMails(contact(email));

    const bevestigingen = sendTemplate.mock.calls.filter(
      ([mail]) => (mail as { to: { email: string } }).to.email === email,
    );
    expect(bevestigingen).toHaveLength(1);
  });

  it("kapt de kopie naar hetzelfde adres af na vijf berichten in een uur", async () => {
    const email = freshAddress();
    for (let i = 0; i < 7; i += 1) await sendContactMails(contact(email));

    const naarSlachtoffer = sendTemplate.mock.calls.filter(
      ([mail]) => (mail as { to: { email: string } }).to.email === email,
    );
    expect(naarSlachtoffer).toHaveLength(5);
  });

  it("blijft het team wél bereiken zodra de kopie afgekapt is", async () => {
    const email = freshAddress();
    for (let i = 0; i < 7; i += 1) await sendContactMails(contact(email));

    // Het bericht is hier de enige opslag: het mag nooit verloren gaan omdat
    // iemand het formulier misbruikt.
    const naarTeam = sendPlain.mock.calls.filter(
      ([mail]) => (mail as { to: { email: string } }).to.email === "team@vernast.be",
    );
    expect(naarTeam).toHaveLength(7);
  });

  it("telt per adres, dus een tweede slachtoffer begint met een schone lei", async () => {
    const eerste = freshAddress();
    for (let i = 0; i < 6; i += 1) await sendContactMails(contact(eerste));
    sendTemplate.mockClear();

    const tweede = freshAddress();
    await sendContactMails(contact(tweede));

    const naarTweede = sendTemplate.mock.calls.filter(
      ([mail]) => (mail as { to: { email: string } }).to.email === tweede,
    );
    expect(naarTweede).toHaveLength(1);
  });
});

describe("interne melding zonder sjabloon", () => {
  it("gaat als tekstmail buiten in plaats van stil te verdwijnen", async () => {
    await alertSyncFailure("booking abc", "HTTP 500", {
      source: "booking",
      external_id: "abc",
      order_number: "VRN-2026-TESTTEST",
      email: "klant@voorbeeld.be",
    });

    expect(sendPlain).toHaveBeenCalledTimes(1);
    const [mail] = sendPlain.mock.calls[0] as [{ to: { email: string }; subject: string; text: string }];
    expect(mail.to.email).toBe("team@vernast.be");
    expect(mail.subject).toContain("ORDER NIET DOORGEKOMEN");
    expect(mail.text).toContain("klant@voorbeeld.be");
  });

  it("gebruikt het sjabloon zodra dat wél ingesteld staat", async () => {
    process.env.BREVO_TPL_INTERN_ALARM = "77";

    await alertSyncFailure("booking abc", "HTTP 500", {
      source: "booking",
      external_id: "abc",
    });

    expect(sendPlain).not.toHaveBeenCalled();
    expect(sendTemplate).toHaveBeenCalledTimes(1);
    const [mail] = sendTemplate.mock.calls[0] as [{ templateId: number }];
    expect(mail.templateId).toBe(77);
  });
});
