import { jsx } from "react/jsx-runtime";
import { Head } from "vite-react-ssg";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/FontPreload.tsx");
const FILES = {
  /* De shell van de inhoudspagina's — Navbar/Footer met shadcn/ui. */
  inter: ["/fonts/inter-latin.woff2"],
  /* De v3-vormtaal: homepage en verhuurfunnel. Titels in Plus Jakarta Sans, lopende tekst in DM Sans. */
  v3: ["/fonts/plus-jakarta-sans-latin.woff2", "/fonts/dm-sans-latin.woff2"]
};
const FontPreload = ({ set }) => /* @__PURE__ */ jsx(Head, { children: FILES[set].map((href) => /* @__PURE__ */ jsx("link", { rel: "preload", href, as: "font", type: "font/woff2", crossOrigin: "" }, href)) });
export {
  FontPreload as F
};
