import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./App";
import "./index.css";

/**
 * Entry voor zowel de browser als de prerender-stap bij de build.
 * ViteReactSSG maakt de router aan: in de browser een BrowserRouter die de
 * geprerenderde HTML hydrateert, bij de build een statische router die elke
 * route naar dist/<route>/index.html schrijft.
 */
export const createRoot = ViteReactSSG({ routes });
