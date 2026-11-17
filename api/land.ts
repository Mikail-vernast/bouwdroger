/**
 * In welk land de bezoeker zit, voor de voorselectie in de keuzepopup.
 *
 * Cloudflare zet `cf-ipcountry` op elke aanvraag, Vercel `x-vercel-ip-country`.
 * We geven alleen de tweeletterige code terug — geen IP, geen stad: de popup
 * heeft niet meer nodig (zie "Publieke endpoints" in CLAUDE.md).
 *
 * Het is een voorselectie, geen beslissing: de bezoeker ziet het land en kan het
 * wijzigen. Onder `vite dev` bestaat deze route niet; de popup valt dan terug
 * op België.
 */
export function GET(request: Request): Response {
  const ruw =
    request.headers.get("cf-ipcountry") ?? request.headers.get("x-vercel-ip-country") ?? "";
  // "XX" en "T1" (Tor) zijn Cloudflares codes voor "onbekend"; die laten we leeg.
  const land = /^[A-Z]{2}$/.test(ruw) && ruw !== "XX" && ruw !== "T1" ? ruw : "";
  return new Response(JSON.stringify({ land }), {
    headers: {
      "content-type": "application/json",
      // Per bezoeker verschillend: nooit door een gedeelde cache laten bewaren.
      "cache-control": "private, no-store",
      vary: "cf-ipcountry, x-vercel-ip-country",
    },
  });
}
