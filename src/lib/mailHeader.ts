/**
 * The shared header of the team mails (Brent, 13-11-2026: "maak de header echt
 * mooier, met een foto erin").
 *
 * Red band with the logo and the order reference, a badge, the headline and one
 * line of context; below it the team photo, flattened onto the same red so the
 * two read as one block. The photo is a JPG on the site and not a transparent
 * WebP: Outlook shows neither WebP nor reliable PNG transparency, and the site
 * serves `.jpg` with `Cross-Origin-Resource-Policy: cross-origin`, so webmail
 * that loads it directly is not blocked (`vercel.json`).
 *
 * An alarm gets the same band in amber and no photo: a smiling team above "order
 * niet doorgekomen" reads wrong.
 */

export const MAIL_BRAND = "#8e0b0b";
export const MAIL_PHOTO_URL = "https://vernast-bouwdrogers.be/mail/team-header.jpg";
const LOGO_URL = "https://vernast.be/images/vernast-logo-white.png";
const MONO = "'JetBrains Mono',Menlo,Consolas,monospace";

export interface MailHeader {
  /** Already escaped HTML. */
  badge: string;
  title: string;
  sub?: string;
  /** Order reference shown top right; plain text, escaped here. */
  reference?: string;
  color?: string;
  photo?: boolean;
}

function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** CSS for the header's phone layout; goes inside the mail's <style>. */
export const MAIL_HEADER_CSS = `
    .mh-pad{padding-left:20px!important;padding-right:20px!important}
    .mh-title{font-size:26px!important}
    .mh-ref{display:none!important}`;

/** Two table rows: the band and (optionally) the photo. Place them first in the 600px table. */
export function mailHeaderRows(h: MailHeader): string {
  const color = h.color ?? MAIL_BRAND;
  const photo = h.photo ?? color === MAIL_BRAND;
  return `
        <tr><td class="mh-pad" style="background:${color};padding:28px 36px ${photo ? "10px" : "34px"};color:#ffffff;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td valign="middle"><img src="${LOGO_URL}" width="104" alt="Vernast" style="display:block;width:104px;height:auto;border:0;"></td>
              ${h.reference ? `<td class="mh-ref" align="right" valign="middle"><span style="display:inline-block;border:1px solid rgba(255,255,255,.35);border-radius:999px;padding:6px 12px;font-family:${MONO};font-size:12px;font-weight:600;color:#ffffff;letter-spacing:.02em;">${esc(h.reference)}</span></td>` : ""}
            </tr>
          </table>
          <div style="padding-top:30px;"><span style="display:inline-block;background:#ffffff;color:${color};border-radius:999px;padding:6px 14px;font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;">${h.badge}</span></div>
          <div class="mh-title" style="font-size:34px;line-height:1.15;font-weight:700;letter-spacing:-.01em;padding-top:14px;">${h.title}</div>
          ${h.sub ? `<div style="font-size:15px;line-height:1.5;color:#f8dede;padding-top:10px;">${h.sub}</div>` : ""}
        </td></tr>
        ${photo ? `<tr><td style="background:${color};line-height:0;font-size:0;"><img src="${MAIL_PHOTO_URL}" width="600" alt="Het Vernast-team met bouwdrogers en ventilatoren" style="display:block;width:100%;max-width:600px;height:auto;border:0;"></td></tr>` : ""}`;
}
