/**
 * The internal notifications to the team, as designed HTML (Brent, 13-11-2026).
 *
 * These five mails have no Brevo template in production, so `send()` falls back
 * to a plain mail. That used to be a raw dump of every parameter ("bedrag getal:
 * 32.67", "munt: EUR"). This builds a readable mail in the same house style as
 * the extension request (`extensionRequestMail.ts`), from the same params; the
 * plain text still goes along as the alternative part.
 *
 * Pure functions. Everything a customer typed (name, phone, note, message) goes
 * through `escapeHtml`: it comes straight from a public form.
 */
import { escapeHtml } from "./extensionRequestMail.js";
import { MAIL_HEADER_CSS, mailHeaderRows } from "./mailHeader.js";

export type TeamMailKey = "intern_boeking" | "intern_afhaal" | "intern_aanvraag" | "intern_contact" | "intern_alarm";

export const PORTAL_ORDERS_URL = "https://vernast.be/bouwdroger/orders";

const BRAND = "#8e0b0b";
const ALARM = "#b45309";
const INK = "#131418";
const MUTED = "#6b7280";
const LINE = "#eeeeee";
const PAGE = "#f3f3f3";
const FONT = "'Urbanist',Arial,Helvetica,sans-serif";
const MONO = "'JetBrains Mono',Menlo,Consolas,monospace";

type Params = Record<string, unknown>;

const s = (v: unknown): string => (v === null || v === undefined ? "" : String(v).trim());
const e = (v: unknown): string => escapeHtml(s(v));
/** "label value", or "" when there is no value: a header never ends in a bare "tot". */
const labelled = (label: string, value: string): string => (value ? `${label} ${value}` : "");
const dotted = (parts: string[]): string => parts.filter(Boolean).join(" · ");

/** One row; skipped when the value is empty so the cards never show "—" walls. */
function row(name: string, html: string, last = false): string {
  if (!html) return "";
  return `
              <tr>
                <td valign="top" style="padding:10px 12px 10px 0;${last ? "" : `border-bottom:1px solid ${LINE};`}color:${MUTED};font-size:14px;white-space:nowrap;">${name}</td>
                <td align="right" style="padding:10px 0;${last ? "" : `border-bottom:1px solid ${LINE};`}color:${INK};font-size:14px;font-weight:600;">${html}</td>
              </tr>`;
}

/** Rows without the bottom line on the last one that actually renders. */
function rows(list: Array<[string, string]>): string {
  const present = list.filter(([, html]) => html);
  return present.map(([name, html], i) => row(name, html, i === present.length - 1)).join("");
}

function card(label: string, inner: string, color = BRAND): string {
  if (!inner.trim()) return "";
  return `
        <tr><td style="padding:0 0 14px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e5e5e5;border-radius:12px;">
            <tr><td class="tm-card" style="padding:22px 24px;">
              <div style="font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:${color};padding-bottom:10px;">${label}</div>
              ${inner}
            </td></tr>
          </table>
        </td></tr>`;
}

function table(inner: string): string {
  return inner ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">${inner}</table>` : "";
}

function telHref(phone: string): string {
  return phone.replace(/[^\d+]/g, "");
}

function phoneLink(p: Params): string {
  const tel = telHref(s(p.telefoon));
  return tel ? `<a href="tel:${escapeHtml(tel)}" style="color:${INK};text-decoration:none;">${e(p.telefoon)}</a>` : "";
}

function mailLink(p: Params): string {
  const mail = s(p.email);
  return mail
    ? `<a href="mailto:${escapeHtml(mail)}" style="color:${INK};text-decoration:none;word-break:break-all;">${escapeHtml(mail)}</a>`
    : "";
}

function customerCard(p: Params): string {
  const business = s(p.klanttype) === "zakelijk" || s(p.bedrijf) !== "";
  return card("Klant", table(rows([
    ["Naam", e(p.klant_naam || p.naam)],
    ["Bedrijf", business ? e(p.bedrijf) : ""],
    ["Btw-nummer", business ? e(p.btw_nummer) : ""],
    ["Type", s(p.klanttype) ? (business ? "Zakelijk" : "Particulier") : ""],
    ["Telefoon", phoneLink(p)],
    ["E-mail", mailLink(p)],
    ["Adres", e(p.adres)],
  ])));
}

const PAYMENT_LABEL: Record<string, string> = {
  card: "Kaart",
  bancontact: "Bancontact",
  ideal: "iDEAL",
  apple_pay: "Apple Pay",
  google_pay: "Google Pay",
  klarna: "Klarna",
  link: "Link",
};

function paymentMethod(p: Params): string {
  const m = s(p.betaalmethode);
  return m ? escapeHtml(PAYMENT_LABEL[m] ?? m.replace(/_/g, " ")) : "";
}

/**
 * The customer note. For a Stripe booking it holds the package summary joined
 * with " | " ("Dekking Eigen risico € 250: 29 | …"); one item per line reads
 * better than one long line.
 */
function noteCard(p: Params, label = "Opmerking"): string {
  const note = s(p.opmerking);
  if (!note) return "";
  const lines = note.split(/\s*\|\s*/).filter(Boolean).map(escapeHtml).join("<br>");
  return card(label, `<div style="font-size:14px;line-height:1.65;color:${INK};white-space:pre-wrap;">${lines}</div>`);
}

interface Hero {
  badge: string;
  title: string;
  sub: string;
  preheader: string;
  /** Order reference for the label top right (plain text). */
  reference?: string;
  color?: string;
}

function buttons(p: Params, primary: { href: string; label: string } | null): string {
  const tel = telHref(s(p.telefoon));
  const first = primary
    ? `<a class="tm-btn" href="${escapeHtml(primary.href)}" style="display:inline-block;background:${BRAND};color:#ffffff;border-radius:10px;padding:14px 24px;font-size:15px;font-weight:700;text-decoration:none;margin-right:8px;">${primary.label} &rarr;</a>`
    : "";
  const call = tel
    ? `<a class="tm-btn" href="tel:${escapeHtml(tel)}" style="display:inline-block;background:#ffffff;color:${INK};border:1px solid #d4d4d4;border-radius:10px;padding:13px 22px;font-size:15px;font-weight:700;text-decoration:none;">&#9742;&nbsp; Bel ${e(p.telefoon)}</a>`
    : "";
  return first || call ? `<tr><td class="tm-pad" style="padding:24px 32px 6px;">${first}${call}</td></tr>` : "";
}

function shell(subject: string, hero: Hero, actions: string, body: string, footnote: string): string {
  const color = hero.color ?? BRAND;
  return `<!doctype html>
<html lang="nl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light"><meta name="supported-color-schemes" content="light">
<title>${escapeHtml(subject)}</title>
<style>
  @media (max-width:480px){
    .tm-pad{padding-left:16px!important;padding-right:16px!important}
    .tm-card{padding:18px!important}
    .tm-btn{display:block!important;margin:0 0 10px!important;text-align:center!important}${MAIL_HEADER_CSS}
  }
</style></head>
<body style="margin:0;padding:0;background:${PAGE};font-family:${FONT};color:${INK};-webkit-text-size-adjust:100%;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:${PAGE};">${hero.preheader}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${PAGE};">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;">

        ${mailHeaderRows({ badge: hero.badge, title: hero.title, sub: hero.sub, reference: hero.reference, color })}

        ${actions}

        <tr><td class="tm-pad" style="padding:18px 32px 24px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${body}
            ${footnote ? `<tr><td style="padding:2px 2px 0;font-size:13px;line-height:1.6;color:${MUTED};">${footnote}</td></tr>` : ""}
          </table>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body></html>`;
}

const openOrders = { href: PORTAL_ORDERS_URL, label: "Openen in Vernast" };
const REPLY = "Antwoorden op deze mail gaat rechtstreeks naar de klant.";

function pickup(subject: string, p: Params): string {
  const open = s(p.openstaand);
  const hasOpen = open !== "" && !/^€\s*0,00$/.test(open);
  return shell(
    subject,
    {
      badge: "Afhaalreservatie",
      reference: s(p.referentie),
      title: e(p.toestellen) || "Afhaling",
      sub: dotted([
        labelled("Afhalen", [e(p.afhaaldatum), e(String(p.afhaalmoment ?? "").replace(/^Afhalen\s*/i, ""))].filter(Boolean).join(", ")),
        labelled("terug", e(p.terugbrengen)),
      ]) || "Afhaling aan het afhaalpunt",
      preheader: `Afhaalreservatie${s(p.klant_naam) ? ` van ${e(p.klant_naam)}` : ""}${s(p.afhaaldatum) ? ` op ${e(p.afhaaldatum)}` : ""}.`,
    },
    buttons(p, openOrders),
    [
      card("Afhalen", table(rows([
        ["Afhalen", [e(p.afhaaldatum), e(String(p.afhaalmoment ?? "").replace(/^Afhalen\s*/i, ""))].filter(Boolean).join(" · ")],
        ["Terugbrengen", e(p.terugbrengen)],
        ["Huurdagen", e(p.huurdagen)],
        ["Waar", e(p.afhaalpunt)],
      ]))),
      card("Betaling", table(rows([
        ["Totaal", e(p.bedrag)],
        ["Betaald", e(p.betaald_bedrag)],
        ["Methode", paymentMethod(p)],
        ["Nog te innen bij afhaling", hasOpen ? `<span style="color:${ALARM};">${escapeHtml(open)}</span>` : "€ 0,00"],
      ]))),
      customerCard(p),
    ].join(""),
    `Zet de toestellen klaar voor het afhaalmoment. ${REPLY}`,
  );
}

function booking(subject: string, p: Params): string {
  return shell(
    subject,
    {
      badge: "Nieuwe boeking · betaald",
      reference: s(p.referentie),
      title: e(p.toestellen) || e(p.pakket) || "Nieuwe boeking",
      sub: dotted([
        labelled("Levering", [e(p.leverdatum), e(p.tijdslot)].filter(Boolean).join(", ")),
        labelled("tot", e(p.huur_eind)),
      ]) || "Betaalde boeking",
      preheader: `Nieuwe boeking${s(p.klant_naam) ? ` van ${e(p.klant_naam)}` : ""}${s(p.leverdatum) ? `, levering ${e(p.leverdatum)}` : ""}.`,
    },
    buttons(p, openOrders),
    [
      card("Levering", table(rows([
        ["Leverdatum", e(p.leverdatum)],
        ["Tijdslot", e(p.tijdslot)],
        ["Huur", s(p.huur_start) ? `${e(p.huur_start)} → ${e(p.huur_eind)}` : ""],
        ["Duur", e(p.huurduur) || (s(p.huurdagen) ? `${e(p.huurdagen)} dagen` : "")],
        ["Adres", e(p.adres)],
      ]))),
      card("Pakket", table(rows([
        ["Toestellen", e(p.toestellen)],
        ["Pakket", e(p.pakket)],
        ["Situatie", e(p.situatie)],
        ["Oppervlakte", s(p.oppervlakte) ? `${e(p.oppervlakte)} m²` : ""],
        ["Ruimte", e(p.ruimte)],
      ]))),
      card("Betaling", table(rows([
        ["Bedrag", e(p.bedrag)],
        ["Betaald", s(p.betaald) === "ja" ? `<span style="color:#15803d;">Ja</span>` : "Nee"],
        ["Methode", paymentMethod(p)],
      ]))),
      customerCard(p),
      noteCard(p, "Samenvatting"),
    ].join(""),
    `Plan de levering in Vernast. ${REPLY}`,
  );
}

function request(subject: string, p: Params): string {
  return shell(
    subject,
    {
      badge: "Nieuwe aanvraag",
      reference: s(p.referentie),
      title: e(p.toestellen) || e(p.pakket) || "Nieuwe aanvraag",
      sub: `Nog niet bevestigd${s(p.leverdatum) ? ` · gewenst ${e(p.leverdatum)}` : ""}`,
      preheader: `${e(p.klant_naam)} vraagt ${e(p.toestellen) || "een droogpakket"} aan. Bel terug om te bevestigen.`,
    },
    buttons(p, openOrders),
    [
      card("Gevraagd", table(rows([
        ["Toestellen", e(p.toestellen)],
        ["Pakket", e(p.pakket)],
        ["Gewenste leverdatum", e(p.leverdatum)],
        ["Tijdslot", e(p.tijdslot)],
        ["Duur", e(p.huurduur) || (s(p.huurdagen) ? `${e(p.huurdagen)} dagen` : "")],
        ["Bedrag", e(p.bedrag)],
      ]))),
      customerCard(p),
      noteCard(p),
    ].join(""),
    `Dit is nog geen boeking: kijk de beschikbaarheid na en bel de klant terug om alles vast te leggen. ${REPLY}`,
  );
}

function contact(subject: string, p: Params): string {
  const message = s(p.bericht);
  return shell(
    subject,
    {
      badge: "Contactformulier",
      title: e(p.naam) || "Nieuw bericht",
      sub: s(p.onderwerp) ? e(p.onderwerp) : "Bericht via vernast-bouwdrogers.be",
      preheader: escapeHtml(message.slice(0, 120)),
    },
    buttons(p, s(p.email) ? { href: `mailto:${s(p.email)}`, label: "Antwoorden" } : null),
    [
      card("Bericht", `<div style="font-size:15px;line-height:1.65;color:${INK};white-space:pre-wrap;">${escapeHtml(message) || "(leeg)"}</div>`),
      card("Contact", table(rows([
        ["Naam", e(p.naam)],
        ["Telefoon", phoneLink(p)],
        ["E-mail", mailLink(p)],
      ]))),
    ].join(""),
    REPLY,
  );
}

function alarm(subject: string, p: Params): string {
  const raw = s(p.ruwe_order);
  return shell(
    subject,
    {
      badge: "Order niet doorgekomen",
      reference: s(p.referentie),
      title: e(p.referentie) || "Order niet doorgekomen",
      sub: `${e(p.context)}${s(p.reden) ? ` · ${e(p.reden)}` : ""}`,
      preheader: `Order ${e(p.referentie)} haalde Vernast niet. Geef ze met de hand in.`,
      color: ALARM,
    },
    buttons(p, openOrders),
    [
      card("Wat liep mis", table(rows([
        ["Waar", e(p.context)],
        ["Reden", e(p.reden)],
        ["Betaald", s(p.betaald) === "ja" ? "Ja, de klant heeft betaald" : e(p.betaald)],
        ["Bedrag", e(p.bedrag)],
      ])), ALARM),
      card("Order", table(rows([
        ["Toestellen", e(p.toestellen)],
        ["Leverdatum", e(p.leverdatum)],
        ["Tijdslot", e(p.tijdslot)],
        ["Huur", s(p.huur_start) ? `${e(p.huur_start)} → ${e(p.huur_eind)}` : ""],
      ]))),
      customerCard(p),
      raw
        ? card("Ruwe order", `<pre style="margin:0;font-family:${MONO};font-size:11px;line-height:1.5;color:${INK};white-space:pre-wrap;word-break:break-all;">${escapeHtml(raw)}</pre>`, ALARM)
        : "",
    ].join(""),
    "De klant denkt dat alles in orde is. Geef de order met de hand in Vernast in en controleer de betaling in Stripe.",
  );
}

const BUILDERS: Record<TeamMailKey, (subject: string, p: Params) => string> = {
  intern_afhaal: pickup,
  intern_boeking: booking,
  intern_aanvraag: request,
  intern_contact: contact,
  intern_alarm: alarm,
};

export function isTeamMailKey(key: string): key is TeamMailKey {
  return key in BUILDERS;
}

export function teamMailHtml(key: TeamMailKey, subject: string, params: Params): string {
  return BUILDERS[key](subject, params);
}
