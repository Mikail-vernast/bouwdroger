import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  /*
    De routes worden lazy geladen, dus Vite ontdekte een deel van de packages
    pas wanneer je zo'n pagina voor het eerst opende. Zo'n her-optimalisatie
    midden in een sessie leverde een tweede kopie van React op: de nieuwe pagina
    kreeg react uit ronde twee terwijl react-dom nog uit ronde één kwam, en de
    eerste hook viel dan over "Cannot read properties of null (reading
    'useRef')". Door alles vooraf te noemen gebeurt de optimalisatie één keer,
    bij het starten.
  */
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-dom/client",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "react-router-dom",
      "react-helmet-async",
      "vite-react-ssg",
      "@radix-ui/react-accordion",
      "@radix-ui/react-label",
      "@radix-ui/react-popover",
      "@radix-ui/react-select",
      "@radix-ui/react-slot",
      "@radix-ui/react-tabs",
      "@radix-ui/react-toast",
      "@radix-ui/react-tooltip",
      "@stripe/react-stripe-js",
      "@stripe/stripe-js",
      "class-variance-authority",
      "clsx",
      "date-fns",
      "lucide-react",
      "react-day-picker",
      "sonner",
      "tailwind-merge",
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  /*
    Niet doen: `build.rollupOptions.output.experimentalMinChunkSize`. De dertig
    piepkleine icoon-chunks (`check` weegt 114 bytes) samenvoegen lijkt gratis
    winst, maar vite-react-ssg leidt zijn `modulepreload`-regels af uit de
    manifest die rollup daarbij door elkaar gooit: /realisaties hield er nog 2
    over van de 13. De chunks worden dan pas ontdekt nadat de entry gedraaid
    heeft — dertig parallelle verzoekjes ingeruild voor een waterval.
  */
}));
