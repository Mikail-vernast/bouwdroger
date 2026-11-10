/**
 * De bijlagen bij een formulier in storage zetten.
 *
 * Stond tot nu toe in `V3Cta.tsx` zelf. Het ozonformulier op /ozonbehandeling
 * heeft precies dezelfde behoefte — en vraagt er zelfs nadrukkelijker om, want
 * een foto van een beschimmelde hoek zegt meer dan drie zinnen tekst. Twee
 * kopieën van deze logica is er één te veel: de grenzen hieronder zijn met vallen
 * en opstaan gevonden (zie de redenen per constante), en die zouden in een tweede
 * kopie stil uit de pas lopen.
 *
 * Bewust browser-only, ook al staat het in `src/lib/`: de serverless functies in
 * `api/` raken dit bestand niet aan. De uploads gaan rechtstreeks van de browser
 * naar de signed URL, zodat een foto van 8 MB nooit door een functie heen moet —
 * Vercel weigert zo'n body nog vóór de handler start.
 */
import { resizeImageFile } from "./imageResize.js";

/** Wat storage aanvaardt (zie de bucket `contact-attachments`). */
export const ACCEPTED_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

export const MAX_FILES = 6;

/** Wat storage aanvaardt. Daarboven komt er een 413 terug. */
export const STORAGE_LIMIT_BYTES = 10 * 1024 * 1024;

/*
  Een foto mag groter binnenkomen dan storage aankan: die wordt hieronder eerst
  verkleind. Een pdf of Word-document gaat ongewijzigd door en moet dus meteen
  onder de grens blijven.
*/
export const MAX_IMAGE_BYTES = 30 * 1024 * 1024;
export const MAX_DOCUMENT_BYTES = STORAGE_LIMIT_BYTES;

interface UploadTicket {
  path: string;
  name: string;
  signed_url: string;
}

export interface UploadOutcome {
  /** De `inbox/...`-paden die met de aanvraag mee mogen. */
  paths: string[];
  /** Namen zoals de bezoeker ze koos, van wat niet door raakte. */
  failed: string[];
}

/** Houdt over wat storage aankan, en zegt welke bestanden afvielen. */
export function filterAcceptable(picked: File[]): { accepted: File[]; rejected: string[] } {
  const rejected: string[] = [];
  const accepted = picked.filter((file) => {
    const limit = file.type.startsWith("image/") ? MAX_IMAGE_BYTES : MAX_DOCUMENT_BYTES;
    const ok = ACCEPTED_TYPES.has(file.type) && file.size <= limit;
    if (!ok) rejected.push(file.name);
    return ok;
  });
  return { accepted, rejected };
}

/** Zoals de ontwerpen het schrijven: kB onder een megabyte. */
export function formatFileSize(bytes: number): string {
  return bytes / 1024 > 999 ? `${(bytes / 1048576).toFixed(1)} MB` : `${Math.round(bytes / 1024)} kB`;
}

/**
 * Zet de gekozen bestanden in storage en geeft de paden terug die met de
 * aanvraag meegaan. Wat niet lukt, wordt overgeslagen — de aanvraag zelf is
 * belangrijker dan de bijlage, en de bezoeker leest achteraf welke bestanden
 * niet meekonden.
 */
export async function uploadFormFiles(originals: File[]): Promise<UploadOutcome> {
  if (originals.length === 0) return { paths: [], failed: [] };

  // Eerst verkleinen: een telefoonfoto van 10 MB haalt de overkant niet.
  const resized = await Promise.all(originals.map(resizeImageFile));

  const failed: string[] = [];
  const paths: string[] = [];

  /*
    De bezoeker kent alleen de naam die hij koos, niet die van het verkleinde
    bestand — daarom reist de oorspronkelijke naam mee tot in de foutmelding.
    Wat ook na verkleinen te groot blijft (een HEIC die de browser niet kon
    decoderen, bijvoorbeeld) sturen we niet: storage weigert het toch.
  */
  const queue = resized
    .map((file, index) => ({ file, label: originals[index]?.name ?? file.name }))
    .filter(({ file, label }) => {
      if (file.size <= STORAGE_LIMIT_BYTES) return true;
      console.error(`[uploads] ${label} blijft te groot: ${Math.round(file.size / 1024)} kB`);
      failed.push(label);
      return false;
    });

  if (queue.length === 0) return { paths, failed };

  const response = await fetch("/api/vraag-uploads", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      files: queue.map(({ file }) => ({ name: file.name, type: file.type })),
    }),
  });
  const data = (await response.json().catch(() => ({}))) as { uploads?: UploadTicket[] };
  const uploads = data.uploads ?? [];
  if (uploads.length === 0) {
    console.error("[uploads] geen upload-URL ontvangen");
    return { paths, failed: [...failed, ...queue.map(({ label }) => label)] };
  }

  await Promise.all(
    uploads.map(async (ticket, index) => {
      const entry = queue[index];
      if (!entry) return;
      const { file, label } = entry;
      try {
        const put = await fetch(ticket.signed_url, {
          method: "PUT",
          headers: { "content-type": file.type || "application/octet-stream" },
          body: file,
        });
        if (put.ok) {
          paths.push(ticket.path);
        } else {
          // Zonder deze regel is een mislukte bijlage een raadsel: de bezoeker
          // leest "kon niet mee" en wij weten niet waaróm.
          console.error(
            `[uploads] upload van ${label} (${Math.round(file.size / 1024)} kB) faalde: HTTP ${put.status}`,
          );
          failed.push(label);
        }
      } catch (error) {
        console.error(`[uploads] upload van ${label} afgebroken:`, error);
        failed.push(label);
      }
    }),
  );

  return { paths, failed };
}
