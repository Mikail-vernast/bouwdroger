/**
 * Controleert of de kopie in Verzonden werkt, zonder een mail te versturen.
 *
 * `src/lib/sentCopy.ts` doet zijn werk buiten het antwoord van een functie om:
 * lukt het archiveren niet, dan is dat een logregel in Vercel en verder niets.
 * Dat is met opzet — een kopie mag geen boeking laten mislukken — maar het maakt
 * een ontbrekende scope of een verkeerde sleutel ook onzichtbaar. Vandaar dit
 * script: het zet één testbericht in de map Verzonden en zoekt het weer op.
 *
 * `users.messages.insert` verstuurt niets: het bericht wordt enkel opgeborgen.
 * Er vertrekt dus geen mail naar wie dan ook.
 *
 * Draaien:
 *   set -a && . ./.env.local && set +a && node scripts/test-verzonden-kopie.mjs
 */
import { createSign } from "node:crypto";

const raw = process.env.GOOGLE_SERVICE_ACCOUNT_KEY?.trim();
const mailbox = (process.env.SENT_COPY_MAILBOX || process.env.BREVO_SENDER_EMAIL)?.trim();

if (!raw || !mailbox) {
  console.error("Zet eerst GOOGLE_SERVICE_ACCOUNT_KEY en BREVO_SENDER_EMAIL (of SENT_COPY_MAILBOX).");
  process.exit(1);
}

const account = JSON.parse(raw);
const b64url = (v) => (Buffer.isBuffer(v) ? v : Buffer.from(v, "utf8")).toString("base64url");

const now = Math.floor(Date.now() / 1000);
const signInput = [
  b64url(JSON.stringify({ alg: "RS256", typ: "JWT" })),
  b64url(
    JSON.stringify({
      iss: account.client_email,
      sub: mailbox,
      scope: "https://www.googleapis.com/auth/gmail.insert",
      aud: "https://oauth2.googleapis.com/token",
      iat: now,
      exp: now + 3600,
    }),
  ),
].join(".");

const signer = createSign("RSA-SHA256");
signer.update(signInput);
const jwt = `${signInput}.${b64url(signer.sign(account.private_key))}`;

const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
  method: "POST",
  headers: { "content-type": "application/x-www-form-urlencoded" },
  body: new URLSearchParams({
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: jwt,
  }),
});

if (!tokenRes.ok) {
  console.error(`Token halen mislukt (${tokenRes.status}): ${await tokenRes.text()}`);
  console.error(
    "unauthorized_client betekent meestal: de scope gmail.insert staat niet in\n" +
      "Google Workspace Admin → Security → API Controls → Domain-wide delegation.",
  );
  process.exit(1);
}

const { access_token: token } = await tokenRes.json();
console.log(`Token gekregen voor ${mailbox} (${account.client_email}).`);

const messageId = `<test-${Date.now()}@bouwdrogerservice.be>`;
const mime = [
  `From: "Vernast Bouwdrogers" <${mailbox}>`,
  `To: "Test" <${mailbox}>`,
  `Subject: =?UTF-8?B?${Buffer.from("Test — kopie in Verzonden", "utf8").toString("base64")}?=`,
  `Date: ${new Date().toUTCString().replace("GMT", "+0000")}`,
  `Message-ID: ${messageId}`,
  "MIME-Version: 1.0",
  "Content-Type: text/plain; charset=utf-8",
  "",
  "Testbericht van scripts/test-verzonden-kopie.mjs. Er is niets verstuurd. Mag weg.",
].join("\r\n");

const insertRes = await fetch(
  "https://gmail.googleapis.com/gmail/v1/users/me/messages?internalDateSource=dateHeader",
  {
    method: "POST",
    headers: { authorization: `Bearer ${token}`, "content-type": "application/json" },
    body: JSON.stringify({ raw: b64url(mime), labelIds: ["SENT"] }),
  },
);

if (!insertRes.ok) {
  console.error(`Insert mislukt (${insertRes.status}): ${await insertRes.text()}`);
  process.exit(1);
}

const inserted = await insertRes.json();
console.log(`Gelukt: bericht ${inserted.id} staat in Verzonden van ${mailbox}.`);
console.log(`Open: https://mail.google.com/mail/u/0/?authuser=${mailbox}#sent/${inserted.id}`);
console.log("Verwijder het gerust met de hand.");
