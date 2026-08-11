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

/*
  De parameters staan er expliciet bij. Zonder die `unknown` leidt vitest de
  aanroepen af als een lege tuple, en dan bestaat `mock.calls[0][0]` volgens
  TypeScript niet — terwijl elke test hier juist naar die eerste parameter kijkt.
*/
const sendTemplate = vi.fn(async (_mail: unknown) => ({ ok: true }));
const sendPlain = vi.fn(async (_mail: unknown) => ({ ok: true }));

vi.mock("../lib/brevo.js", () => ({
  sendTemplate: (mail: unknown) => sendTemplate(mail),
  sendPlain: (mail: unknown) => sendPlain(mail),
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

/**
 * De ontvangstbevestiging van het contactformulier stond in productie zonder
 * sjabloon-ID, en klantmail was sjabloon-only: de bezoeker kreeg dus niets.
 */
describe("ontvangstbevestiging zonder sjabloon", () => {
  it("vertrekt als geschreven tekstmail in plaats van te verdwijnen", async () => {
    delete process.env.BREVO_TPL_CONTACT_ONTVANGEN;
    const email = freshAddress();

    await sendContactMails({
      naam: "Jan Peeters",
      email,
      bericht: "Graag een offerte voor 120 m².",
    });

    const naarKlant = sendPlain.mock.calls
      .map(([mail]) => mail as { to: { email: string }; subject: string; text: string })
      .filter((mail) => mail.to.email === email);

    expect(naarKlant).toHaveLength(1);
    expect(naarKlant[0].subject).toBe("Wij hebben uw bericht goed ontvangen");
    expect(naarKlant[0].text).toContain("Jan Peeters");
    expect(naarKlant[0].text).toContain("Graag een offerte voor 120 m².");
    // Geen parameterdump: een klant hoort geen veldnamen te lezen.
    expect(naarKlant[0].text).not.toContain("onderwerp:");
  });

  it("laat het sjabloon voorgaan zodra dat ingesteld staat", async () => {
    process.env.BREVO_TPL_CONTACT_ONTVANGEN = "42";
    const email = freshAddress();

    await sendContactMails({ naam: "Jan Peeters", email, bericht: "Graag een offerte." });

    const naarKlant = sendPlain.mock.calls
      .map(([mail]) => mail as { to: { email: string } })
      .filter((mail) => mail.to.email === email);
    expect(naarKlant).toHaveLength(0);
    expect(
      sendTemplate.mock.calls.filter(
        ([mail]) => (mail as { to: { email: string } }).to.email === email,
      ),
    ).toHaveLength(1);
  });

  /*
    Sjabloon 96 is een lege Vernast-schil: het toont `title`, `subject` en
    `beschrijving` en verder niets. Stuurt de code die drie niet mee, dan
    vertrekt er een mail met een leeg onderwerp en een lege body — erger dan de
    tekstmail-fallback die we hiermee vervangen. Vandaar deze test.
  */
  it("vult de velden die sjabloon 96 nodig heeft", async () => {
    process.env.BREVO_TPL_CONTACT_ONTVANGEN = "96";
    const email = freshAddress();

    await sendContactMails({
      naam: "Jan Peeters",
      email,
      bericht: "Mijn kelder staat onder water.",
    });

    const [mail] = sendTemplate.mock.calls
      .map(([call]) => call as { to: { email: string }; params: Record<string, unknown> })
      .filter((call) => call.to.email === email);

    expect(mail.params.title).toBe("Bedankt voor uw bericht");
    expect(mail.params.subject).toBe("We hebben uw bericht goed ontvangen");
    expect(mail.params.beschrijving).toContain("Beste Jan,");
    expect(mail.params.beschrijving).toContain("Mijn kelder staat onder water.");
  });
});
