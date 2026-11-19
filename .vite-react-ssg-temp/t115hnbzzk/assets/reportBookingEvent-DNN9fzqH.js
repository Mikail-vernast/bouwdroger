globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/lib/reportBookingEvent.ts");
const sent = /* @__PURE__ */ new Set();
function reportBookingEvent(report) {
  const key = JSON.stringify([report.code, report.start, report.lines ?? report.config]);
  if (sent.has(key)) return;
  sent.add(key);
  try {
    void fetch("/api/booking-event", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(report),
      keepalive: true
    }).catch(() => void 0);
  } catch {
  }
}
export {
  reportBookingEvent as r
};
