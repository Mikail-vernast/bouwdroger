/**
 * De verlengaanvraag voor het team, als opgemaakte mail.
 *
 * Geen Brevo-sjabloon: een aanvraag mag niet verdwijnen omdat er in Brevo nog
 * niets klaarstaat (zie `sendExtensionRequest`). De HTML wordt daarom hier
 * gebouwd en gaat samen met de platte tekst in één bericht mee; valt de opmaak
 * weg in een mailprogramma, dan blijft de tekstversie leesbaar.
 *
 * Pure functies: alles wat de klant intypte gaat door `escapeHtml`, want naam,
 * telefoon en opmerking komen rechtstreeks uit een publiek formulier.
 */

export interface ExtensionRequestMail {
  referentie: string;
  naam: string;
  email: string;
  telefoon: string;
  extraDagen: number;
  /** Al opgemaakt, bv. "zondag 15 november". */
  huidigEinde: string;
  nieuwEinde: string;
  opmerking: string;
  /** Waar het team de aanvraag behandelt. */
  portalUrl: string;
}

export const PORTAL_EXTENSIONS_URL = "https://vernast.be/bouwdroger/verlengingen";

const BRAND = "#8e0b0b";
const INK = "#131418";
const MUTED = "#6b7280";
const LINE = "#eeeeee";
const PAGE = "#f3f3f3";
const FONT = "'Urbanist',Arial,Helvetica,sans-serif";
const MONO = "'JetBrains Mono',Menlo,Consolas,monospace";
const LOGO_URL = "https://vernast.be/images/vernast-logo-white.png";

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function extensionRequestSubject(r: Pick<ExtensionRequestMail, "referentie" | "extraDagen">): string {
  return `Verlenging aangevraagd - ${r.referentie} (+${r.extraDagen} dagen)`;
}

export function extensionRequestText(r: ExtensionRequestMail): string {
  return [
    `Verlenging aangevraagd voor ${r.referentie}`,
    "",
    `Klant:      ${r.naam}`,
    `E-mail:     ${r.email}`,
    `Telefoon:   ${r.telefoon}`,
    "",
    `Huur loopt nu tot:  ${r.huidigEinde}`,
    `Gevraagd tot:       ${r.nieuwEinde}  (+${r.extraDagen} dagen)`,
    "",
    r.opmerking ? `Opmerking van de klant:\n${r.opmerking}` : "Geen opmerking.",
    "",
    "Controleer de beschikbaarheid in het portaal en bel de klant terug:",
    r.portalUrl,
  ].join("\n");
}

export function extensionRequestHtml(r: ExtensionRequestMail): string {
  const e = escapeHtml;
  const tel = r.telefoon.replace(/[^\d+]/g, "");
  const row = (name: string, value: string, last = false) => `
              <tr>
                <td style="padding:10px 0;${last ? "" : `border-bottom:1px solid ${LINE};`}color:${MUTED};font-size:14px;">${name}</td>
                <td align="right" style="padding:10px 0;${last ? "" : `border-bottom:1px solid ${LINE};`}color:${INK};font-size:14px;font-weight:600;">${value}</td>
              </tr>`;
  const label = (text: string) =>
    `<div style="font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:${BRAND};padding-bottom:10px;">${text}</div>`;
  const card = (inner: string) => `
        <tr><td style="padding:0 0 14px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e5e5e5;border-radius:12px;">
            <tr><td class="er-card" style="padding:22px 24px;">${inner}</td></tr>
          </table>
        </td></tr>`;

  const note = r.opmerking.trim()
    ? `<div style="font-size:15px;line-height:1.6;color:${INK};white-space:pre-wrap;">${e(r.opmerking.trim())}</div>`
    : `<div style="font-size:14px;color:${MUTED};">Geen opmerking.</div>`;

  return `<!doctype html>
<html lang="nl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light"><meta name="supported-color-schemes" content="light">
<title>${e(extensionRequestSubject(r))}</title>
<style>
  @media (max-width:480px){
    .er-pad{padding-left:16px!important;padding-right:16px!important}
    .er-card{padding:18px!important}
    .er-hero{font-size:26px!important}
    .er-btn{display:block!important;margin:0 0 10px!important;text-align:center!important}
  }
</style></head>
<body style="margin:0;padding:0;background:${PAGE};font-family:${FONT};color:${INK};-webkit-text-size-adjust:100%;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:${PAGE};">${e(r.naam || "Een klant")} vraagt +${r.extraDagen} dagen, tot ${e(r.nieuwEinde)}.</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${PAGE};">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;">

        <tr><td class="er-pad" style="background:${BRAND};padding:28px 32px 32px;color:#ffffff;">
          <img src="${LOGO_URL}" width="96" alt="Vernast" style="display:block;width:96px;height:auto;border:0;margin:0 0 20px;">
          <span style="display:inline-block;background:#ffffff;color:${BRAND};border-radius:999px;padding:6px 14px;font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;">Verlenging aangevraagd</span>
          <div class="er-hero" style="font-size:30px;line-height:1.2;font-weight:700;padding-top:16px;">+${r.extraDagen} dagen, tot ${e(r.nieuwEinde)}</div>
          <div style="font-size:14px;color:#f5dada;padding-top:8px;">Huur <strong style="color:#ffffff;font-family:${MONO};">${e(r.referentie)}</strong> · nu tot ${e(r.huidigEinde)}</div>
        </td></tr>

        <tr><td class="er-pad" style="padding:24px 32px 6px;">
          <a class="er-btn" href="${e(r.portalUrl)}" style="display:inline-block;background:${BRAND};color:#ffffff;border-radius:10px;padding:14px 24px;font-size:15px;font-weight:700;text-decoration:none;margin-right:8px;">Behandelen in Vernast &rarr;</a>
          ${tel ? `<a class="er-btn" href="tel:${e(tel)}" style="display:inline-block;background:#ffffff;color:${INK};border:1px solid #d4d4d4;border-radius:10px;padding:13px 22px;font-size:15px;font-weight:700;text-decoration:none;">&#9742;&nbsp; Bel ${e(r.telefoon)}</a>` : ""}
        </td></tr>

        <tr><td class="er-pad" style="padding:18px 32px 24px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${card(`${label("Waarom")}${note}`)}
            ${card(`${label("Periode")}
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${row("Huur loopt nu tot", e(r.huidigEinde))}
                ${row("Gevraagd tot", e(r.nieuwEinde))}
                ${row("Extra", `+${r.extraDagen} dagen`, true)}
              </table>`)}
            ${card(`${label("Klant")}
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${row("Naam", e(r.naam || "—"))}
                ${row("Telefoon", tel ? `<a href="tel:${e(tel)}" style="color:${INK};text-decoration:none;">${e(r.telefoon)}</a>` : "—")}
                ${row("E-mail", r.email ? `<a href="mailto:${e(r.email)}" style="color:${INK};text-decoration:none;word-break:break-all;">${e(r.email)}</a>` : "—", true)}
              </table>`)}
            <tr><td style="padding:2px 2px 0;font-size:13px;line-height:1.6;color:${MUTED};">
              Controleer de beschikbaarheid en bel de klant terug. Zolang niemand antwoordt, blijft de ophaling op de oorspronkelijke datum staan. Antwoorden op deze mail gaat rechtstreeks naar de klant.
            </td></tr>
          </table>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body></html>`;
}
