/**
 * Verkleint een foto vóór hij geüpload wordt.
 *
 * Een bezoeker die "foto's van de ruimte" meestuurt, stuurt wat zijn telefoon
 * maakt: 8 tot 12 MB per stuk. Die liepen tegen de bovengrens van storage aan —
 * boven 10 MB komt er een `413 EntityTooLarge` terug — en zelfs een upload die
 * er nog nét onder zat, brak halverwege af op een trage verbinding. Het gevolg
 * was een vraag die aankwam zonder de foto waar hij over ging.
 *
 * 2200 pixels op de langste zijde is ruim genoeg om vochtplekken of een
 * scheur te beoordelen, en brengt zo'n foto terug tot enkele honderden kB.
 *
 * Faalt het verkleinen — HEIC bijvoorbeeld kan lang niet elke browser
 * decoderen — dan gaat het origineel gewoon mee. Dan beslist de groottegrens.
 */

const MAX_EDGE = 2200;
const QUALITY = 0.82;

/** Onder deze grens levert verkleinen niets op dat de moeite waard is. */
const SKIP_BELOW_BYTES = 1_200_000;

function loadImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      URL.revokeObjectURL(url);
      resolve(image);
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("kon de afbeelding niet lezen"));
    };
    image.src = url;
  });
}

function toBlob(canvas: HTMLCanvasElement, type: string): Promise<Blob | null> {
  return new Promise((resolve) => canvas.toBlob(resolve, type, QUALITY));
}

/**
 * Geeft een verkleinde jpeg terug, of het originele bestand als verkleinen niet
 * kan of niets oplevert. Gooit nooit: een bijlage mag de vraag niet blokkeren.
 */
export async function resizeImageFile(file: File): Promise<File> {
  if (!file.type.startsWith("image/")) return file;
  if (file.size < SKIP_BELOW_BYTES) return file;

  try {
    const image = await loadImage(file);
    const longestEdge = Math.max(image.naturalWidth, image.naturalHeight);
    const scale = longestEdge > MAX_EDGE ? MAX_EDGE / longestEdge : 1;

    const canvas = document.createElement("canvas");
    canvas.width = Math.round(image.naturalWidth * scale);
    canvas.height = Math.round(image.naturalHeight * scale);

    const context = canvas.getContext("2d");
    if (!context) return file;
    context.drawImage(image, 0, 0, canvas.width, canvas.height);

    const blob = await toBlob(canvas, "image/jpeg");
    // Een verkleining die groter uitvalt dan het origineel (komt voor bij een
    // al geoptimaliseerde png) gooien we weg.
    if (!blob || blob.size >= file.size) return file;

    const name = file.name.replace(/\.[^.]+$/, "") + ".jpg";
    return new File([blob], name, { type: "image/jpeg", lastModified: file.lastModified });
  } catch {
    return file;
  }
}
