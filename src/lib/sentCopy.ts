/**
 * Een kopie van elke verstuurde mail in de map Verzonden.
 *
 * Brevo verstuurt vanaf zijn eigen servers. De mail draagt wel ons adres als
 * afzender, maar Google ziet hem nooit — en dus staat er in Verzonden niets van
 * wat deze site de klant schrijft. Wie wil nakijken wat een klant precies
 * gekregen heeft, moet daarvoor in het Brevo-dashboard duiken.
 *
 * Vernast v2.0 loste dat al op en dit is dezelfde oplossing: een service-account
 * met domain-wide delegation zet de mail met `users.messages.insert` en het
 * label `SENT` rechtstreeks in de mailbox. Zie
 * `supabase/functions/_shared/archive-sent-copy.ts` in die repo. `insert` — niet
 * `import` — slaat spamcontrole en routing over: het bericht wordt alleen
 * opgeborgen, nooit verstuurd. De klant krijgt dus geen tweede mail.
 *
 * Daardoor is er hier niets in te stellen per mailbox: dezelfde
 * `GOOGLE_SERVICE_ACCOUNT_KEY` als in het portaal volstaat, en de scope
 * `gmail.insert` staat al in de Workspace-delegatie.
 *
 * Twee gevallen:
 *
 * 1. Een tekstmail kennen we zelf al — onderwerp en inhoud staan in de aanroep,
 *    dus die kopie vertrekt meteen.
 * 2. Bij een sjabloonmail zit de opmaak bij Brevo. Het portaal rendert zulke
 *    sjablonen zelf, maar die renderer kan enkel `{{ params.x }}` en laat
 *    `{% if %}` staan — en juist daar hangen onze sjablonen 198, 199 en 202 van
 *    af. Vandaar dat we de gerenderde HTML bij Brevo ophalen
 *    (`GET /v3/smtp/emails/{uuid}`). Die staat er pas als het bericht in het
 *    transactionele logboek zit: in productie gemeten zo'n twintig seconden.
 *    Vandaar het pollen hieronder, en vandaar dat dit werk buiten het antwoord
 *    van de functie valt (`waitUntil`) — geen bezoeker en geen webhook wacht erop.
 *
 * Niets hier gooit. Een kopie die niet lukt, is een logregel; de mail zelf is op
 * dat moment al vertrokken.
 *
 * Server-only.
 */

import { createSign } from "node:crypto";
import { waitUntil } from "@vercel/functions";
import type { BrevoRecipient } from "./brevo.js";

const BREVO_API = "https://api.brevo.com/v3";
const TOKEN_URL = "https://oauth2.googleapis.com/token";

/** Alleen opbergen, niet versturen. Dit is de scope die de kopie mogelijk maakt. */
const SCOPE_INSERT = "https://www.googleapis.com/auth/gmail.insert";

/** Wachttijden voor het ophalen van de gerenderde sjabloonmail bij Brevo. */
const FIRST_WAIT_MS = 15000;
const POLL_MS = 5000;
const GIVE_UP_MS = 75000;

const TIMEOUT_MS = 15000;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export interface SentMail {
  /** Wat Brevo teruggaf; ook de sleutel om de inhoud op te vragen. */
  messageId: string;
  from: { email: string; name: string };
  to: BrevoRecipient;
  replyTo?: BrevoRecipient;
  /** Bij een tekstmail kennen we deze twee al; bij een sjabloon niet. */
  subject?: string;
  text?: string;
  /** Alleen ter herkenning in de logregels. */
  templateId?: number;
}

interface ServiceAccount {
  client_email: string;
  private_key: string;
}

function serviceAccount(): ServiceAccount | null {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_KEY?.trim();
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as Partial<ServiceAccount>;
    if (!parsed.client_email || !parsed.private_key) return null;
    return { client_email: parsed.client_email, private_key: parsed.private_key };
  } catch {
    console.error("[verzonden] GOOGLE_SERVICE_ACCOUNT_KEY is geen geldige JSON.");
    return null;
  }
}

/**
 * In welke mailbox de kopie belandt. Standaard de afzender zelf, want dat is het
 * adres dat de klant in zijn mailbox ziet staan.
 *
 * Domain-wide delegation geldt enkel binnen het eigen domein: een adres buiten
 * `@vernast.be` kan het service-account niet nabootsen, en dan levert Google
 * alleen een `unauthorized_client` op.
 */
function mailbox(): string | null {
  const email = (process.env.SENT_COPY_MAILBOX || process.env.BREVO_SENDER_EMAIL)?.trim();
  if (!email) return null;
  if (!email.toLowerCase().endsWith("@vernast.be")) {
    console.warn(`[verzonden] ${email} valt buiten vernast.be; geen kopie mogelijk.`);
    return null;
  }
  return email;
}

/** Of er überhaupt gearchiveerd kan worden. Scheelt werk plannen dat toch niets doet. */
function configured(): boolean {
  return serviceAccount() !== null && mailbox() !== null;
}

/* ============================================================
   De mail opnieuw opbouwen
   ============================================================ */

/**
 * Regeleindes en stuurtekens eruit voor een waarde in een header belandt.
 *
 * Een naam of onderwerp komt uiteindelijk van een bezoeker. Zonder deze stap kan
 * een `\r\n` in zo'n veld eigen headers bijschrijven in het bericht dat wij
 * opbouwen. Overgenomen uit `gmail-send.ts` van het portaal, waar dezelfde
 * afweging al gemaakt is.
 */
// eslint-disable-next-line no-control-regex
const HEADER_CTL = /[\r\n\x00-\x1F\x7F]/g;

function stripCtl(value: string): string {
  return value.replace(HEADER_CTL, "").trim();
}

/** Alles buiten ASCII moet een encoded-word worden, anders leest de mailbox rommel. */
function encodeHeader(value: string): string {
  const clean = stripCtl(value);
  if (!/[^\x20-\x7e]/.test(clean)) return clean;
  return `=?UTF-8?B?${Buffer.from(clean, "utf8").toString("base64")}?=`;
}

function address(recipient: BrevoRecipient | { email: string; name: string }): string {
  const email = stripCtl(recipient.email);
  const name = "name" in recipient ? recipient.name : null;
  if (!name) return `<${email}>`;
  return `"${encodeHeader(name).replace(/"/g, "")}" <${email}>`;
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/**
 * "Tue, 11 Aug 2026 13:18:00 +0000" — de datumvorm die RFC 5322 vraagt.
 * `toUTCString()` eindigt op "GMT" en dat is verouderde syntax; niet elke lezer
 * neemt dat aan.
 */
function rfc5322Date(date: Date): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    `${DAYS[date.getUTCDay()]}, ${pad(date.getUTCDate())} ${MONTHS[date.getUTCMonth()]} ` +
    `${date.getUTCFullYear()} ${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}:` +
    `${pad(date.getUTCSeconds())} +0000`
  );
}

/** Base64 in regels van 76 tekens, zoals de standaard voorschrijft. */
function base64Body(content: string): string {
  return (Buffer.from(content, "utf8").toString("base64").match(/.{1,76}/g) ?? []).join("\r\n");
}

/**
 * De kopie als RFC 5322-bericht.
 *
 * De `Message-ID` van Brevo gaat mee: zo is de kopie in Verzonden hetzelfde
 * bericht als wat de klant ontving, en niet een tweede mail die er toevallig op
 * lijkt. Gmail hangt antwoorden van de klant daar ook aan hetzelfde gesprek.
 *
 * Alles gaat als base64 buiten. Dat scheelt het gedoe van quoted-printable met
 * regellengtes en punten aan het begin van een regel, en elke client leest het.
 */
export function buildMime(options: {
  mail: SentMail;
  subject: string;
  body: string;
  html: boolean;
  date: Date;
}): string {
  const { mail } = options;

  const headers = [
    `From: ${address(mail.from)}`,
    `To: ${address(mail.to)}`,
    ...(mail.replyTo ? [`Reply-To: ${address(mail.replyTo)}`] : []),
    `Subject: ${encodeHeader(options.subject)}`,
    `Date: ${rfc5322Date(options.date)}`,
    `Message-ID: ${stripCtl(mail.messageId)}`,
    "MIME-Version: 1.0",
    `Content-Type: text/${options.html ? "html" : "plain"}; charset=utf-8`,
    "Content-Transfer-Encoding: base64",
  ];

  return `${headers.join("\r\n")}\r\n\r\n${base64Body(options.body)}\r\n`;
}

/* ============================================================
   De inhoud bij Brevo ophalen
   ============================================================ */

interface Rendered {
  subject: string;
  html: string;
  date: Date;
}

async function fetchJson(url: string, apiKey: string): Promise<unknown | null> {
  try {
    const response = await fetch(url, {
      headers: { accept: "application/json", "api-key": apiKey },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!response.ok) return null;
    return await response.json();
  } catch {
    return null;
  }
}

/**
 * De gerenderde sjabloonmail, zoals de klant hem kreeg.
 *
 * Twee stappen, want het logboek zoekt op `messageId` en de inhoud hangt aan de
 * `uuid` die dat logboek teruggeeft. Beide verschijnen pas een halve minuut na
 * het versturen, vandaar het wachten.
 */
async function fetchRendered(messageId: string, apiKey: string): Promise<Rendered | null> {
  const deadline = Date.now() + GIVE_UP_MS;
  await sleep(FIRST_WAIT_MS);

  while (Date.now() < deadline) {
    const list = await fetchJson(
      `${BREVO_API}/smtp/emails?limit=1&messageId=${encodeURIComponent(messageId)}`,
      apiKey,
    );
    const uuid = (list as { transactionalEmails?: { uuid?: string }[] } | null)
      ?.transactionalEmails?.[0]?.uuid;

    if (uuid) {
      const detail = (await fetchJson(`${BREVO_API}/smtp/emails/${uuid}`, apiKey)) as {
        subject?: string;
        body?: string;
        date?: string;
      } | null;

      if (detail?.body) {
        const date = detail.date ? new Date(detail.date) : new Date();
        return {
          subject: detail.subject ?? "",
          html: detail.body,
          date: Number.isNaN(date.getTime()) ? new Date() : date,
        };
      }
    }

    await sleep(POLL_MS);
  }

  return null;
}

/* ============================================================
   In de mailbox leggen
   ============================================================ */

const b64url = (value: string | Buffer): string =>
  Buffer.isBuffer(value)
    ? value.toString("base64url")
    : Buffer.from(value, "utf8").toString("base64url");

/**
 * Een toegangstoken voor één mailbox, via de JWT-dans van domain-wide
 * delegation: het service-account ondertekent een claim met `sub` op het adres
 * dat het nabootst, en Google ruilt die om voor een token.
 *
 * Google geeft een uur; wij houden het per proces bij en nemen een minuut marge.
 */
const tokens = new Map<string, { token: string; expiresAt: number }>();

/** Enkel voor de tests. */
export function resetTokenCache(): void {
  tokens.clear();
}

async function accessToken(account: ServiceAccount, impersonate: string): Promise<string | null> {
  const cached = tokens.get(impersonate);
  if (cached && cached.expiresAt > Date.now()) return cached.token;

  const now = Math.floor(Date.now() / 1000);
  const claim = {
    iss: account.client_email,
    sub: impersonate,
    scope: SCOPE_INSERT,
    aud: TOKEN_URL,
    iat: now,
    exp: now + 3600,
  };

  const signInput = `${b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }))}.${b64url(
    JSON.stringify(claim),
  )}`;

  const signer = createSign("RSA-SHA256");
  signer.update(signInput);
  const jwt = `${signInput}.${b64url(signer.sign(account.private_key))}`;

  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    console.error(`[verzonden] geen token voor ${impersonate}: HTTP ${response.status} ${body}`);
    return null;
  }

  const data = (await response.json()) as { access_token?: string; expires_in?: number };
  if (!data.access_token) return null;

  tokens.set(impersonate, {
    token: data.access_token,
    expiresAt: Date.now() + ((data.expires_in ?? 3600) - 60) * 1000,
  });
  return data.access_token;
}

/**
 * Het bericht in de map Verzonden zetten.
 *
 * `internalDateSource=dateHeader` zorgt dat Gmail de datum uit het bericht
 * gebruikt en niet het moment van archiveren — anders staat een kopie die door
 * het wachten op Brevo een minuut later binnenkomt, met de verkeerde tijd in de
 * lijst.
 */
async function insert(token: string, mime: string): Promise<void> {
  const response = await fetch(
    "https://gmail.googleapis.com/gmail/v1/users/me/messages?internalDateSource=dateHeader",
    {
      method: "POST",
      headers: { authorization: `Bearer ${token}`, "content-type": "application/json" },
      body: JSON.stringify({ raw: b64url(mime), labelIds: ["SENT"] }),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    },
  );

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`Gmail insert gaf HTTP ${response.status}: ${body.slice(0, 200)}`);
  }
}

/* ============================================================
   Wat de rest van de code aanroept
   ============================================================ */

async function copy(mail: SentMail): Promise<void> {
  const account = serviceAccount();
  const box = mailbox();
  if (!account || !box) return;

  let subject = mail.subject ?? "";
  let body = mail.text ?? "";
  let html = false;
  let date = new Date();

  if (mail.text === undefined) {
    const apiKey = process.env.BREVO_API_KEY?.trim();
    const rendered = apiKey ? await fetchRendered(mail.messageId, apiKey) : null;

    if (rendered) {
      subject = rendered.subject;
      body = rendered.html;
      html = true;
      date = rendered.date;
    } else {
      /*
        Liever een kaal bericht in Verzonden dan geen spoor. Wie later nakijkt
        wat een klant kreeg, ziet zo tenminste dát er iets vertrok, naar wie, en
        met welk sjabloon — de inhoud staat dan nog altijd bij Brevo.
      */
      subject = `Mail aan ${mail.to.email}`;
      body = [
        "De mail is verstuurd, maar de opgemaakte inhoud was niet bij Brevo op te halen.",
        "",
        `Sjabloon:   ${mail.templateId ?? "onbekend"}`,
        `Message-ID: ${mail.messageId}`,
      ].join("\n");
      console.warn(`[verzonden] inhoud van ${mail.messageId} niet opgehaald; kale kopie bewaard.`);
    }
  }

  const token = await accessToken(account, box);
  if (!token) return;

  await insert(token, buildMime({ mail, subject, body, html, date }));
}

/**
 * Legt de kopie in Verzonden, buiten het antwoord van de functie om.
 *
 * `waitUntil` houdt de instance in leven tot de kopie klaar is zonder dat de
 * aanroeper wacht. Draait dit buiten Vercel — een test, een script — dan blijft
 * het gewoon een losse promise; ook dan mag niets erop wachten.
 */
export function scheduleSentCopy(mail: SentMail): void {
  if (!configured()) return;

  const task = copy(mail).catch((error: unknown) => {
    const reason = error instanceof Error ? error.message : "onbekende fout";
    console.error(`[verzonden] kopie van ${mail.messageId} mislukt: ${reason}`);
  });

  try {
    waitUntil(task);
  } catch {
    /* Buiten Vercel bestaat er geen request om aan te hangen. */
  }
}
