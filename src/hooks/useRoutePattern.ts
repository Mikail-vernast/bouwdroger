import { useLocation, useParams } from "react-router-dom";

/**
 * Het routepatroon van de huidige pagina, met de parameters nog als `:naam`
 * erin — `/verhuur/toestel/:model` in plaats van `/verhuur/toestel/bd-50`.
 *
 * Vercel Analytics en Speed Insights groeperen hun metingen per pad. Zonder
 * patroon krijgt elk toestel, elk pakket en elk product zijn eigen rij, en dan
 * zegt de p75 van een pagina niets meer omdat er per URL maar een handvol
 * samples zijn. Met het patroon vallen `/product/:id` allemaal samen.
 */
export function useRoutePattern(): string {
  const { pathname } = useLocation();
  const params = useParams();

  return Object.entries(params).reduce((route, [name, value]) => {
    // Een splat (`*`) kan meerdere segmenten beslaan; die vervangen we in zijn
    // geheel. De rest is altijd precies één segment.
    if (!value) return route;
    return route.replace(`/${value}`, name === "*" ? "/*" : `/:${name}`);
  }, pathname);
}
