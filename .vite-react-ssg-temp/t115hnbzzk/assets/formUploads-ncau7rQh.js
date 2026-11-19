globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/lib/imageResize.ts");
const MAX_EDGE = 2200;
const QUALITY = 0.82;
const SKIP_BELOW_BYTES = 12e5;
function loadImage(file) {
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
function toBlob(canvas, type) {
  return new Promise((resolve) => canvas.toBlob(resolve, type, QUALITY));
}
async function resizeImageFile(file) {
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
    if (!blob || blob.size >= file.size) return file;
    const name = file.name.replace(/\.[^.]+$/, "") + ".jpg";
    return new File([blob], name, { type: "image/jpeg", lastModified: file.lastModified });
  } catch {
    return file;
  }
}
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/lib/formUploads.ts");
const ACCEPTED_TYPES = /* @__PURE__ */ new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
]);
const MAX_FILES = 6;
const STORAGE_LIMIT_BYTES = 10 * 1024 * 1024;
const MAX_IMAGE_BYTES = 30 * 1024 * 1024;
const MAX_DOCUMENT_BYTES = STORAGE_LIMIT_BYTES;
function filterAcceptable(picked) {
  const rejected = [];
  const accepted = picked.filter((file) => {
    const limit = file.type.startsWith("image/") ? MAX_IMAGE_BYTES : MAX_DOCUMENT_BYTES;
    const ok = ACCEPTED_TYPES.has(file.type) && file.size <= limit;
    if (!ok) rejected.push(file.name);
    return ok;
  });
  return { accepted, rejected };
}
function formatFileSize(bytes) {
  return bytes / 1024 > 999 ? `${(bytes / 1048576).toFixed(1)} MB` : `${Math.round(bytes / 1024)} kB`;
}
async function uploadFormFiles(originals) {
  if (originals.length === 0) return { paths: [], failed: [] };
  const resized = await Promise.all(originals.map(resizeImageFile));
  const failed = [];
  const paths = [];
  const queue = resized.map((file, index) => ({ file, label: originals[index]?.name ?? file.name })).filter(({ file, label }) => {
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
      files: queue.map(({ file }) => ({ name: file.name, type: file.type }))
    })
  });
  const data = await response.json().catch(() => ({}));
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
          body: file
        });
        if (put.ok) {
          paths.push(ticket.path);
        } else {
          console.error(
            `[uploads] upload van ${label} (${Math.round(file.size / 1024)} kB) faalde: HTTP ${put.status}`
          );
          failed.push(label);
        }
      } catch (error) {
        console.error(`[uploads] upload van ${label} afgebroken:`, error);
        failed.push(label);
      }
    })
  );
  return { paths, failed };
}
export {
  MAX_FILES as M,
  filterAcceptable as a,
  formatFileSize as f,
  uploadFormFiles as u
};
