import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollToTop from "@/components/ScrollToTop";
import { useRoutePattern } from "@/hooks/useRoutePattern";
import { markFirstPaintDone } from "@/lib/firstPaint";

const queryClient = new QueryClient();

/**
 * Applicatieschil rond elke route. Staat los van de router zelf omdat de
 * pagina's bij de build geprerenderd worden (vite-react-ssg): die maakt de
 * router aan, deze component levert alleen de providers en de chrome.
 *
 * De overgang tussen routes was een framer-motion `AnimatePresence` met
 * `initial={{ opacity: 0 }}`. Die `initial` werd méé geprerenderd, dus in
 * dist/<route>/index.html stond letterlijk `<div style="opacity:0">` om de
 * volledige pagina heen. Alles wat we met vite-react-ssg vooruit renderen was
 * daardoor onzichtbaar tot React binnen was, gehydrateerd had en de fade had
 * afgespeeld: 2475 ms render delay, 80% van de LCP, en op desktop mat
 * Lighthouse zelfs helemaal geen LCP meer.
 *
 * Nu draait de overgang op CSS en pas ná mount. Bij de eerste render — de
 * geprerenderde HTML en de hydratie daarvan — staat er geen klasse op, dus de
 * pagina is meteen zichtbaar. Wisselt de bezoeker daarna van route, dan zorgt
 * de `key` voor een nieuwe node en speelt `page-enter` alsnog de fade af.
 *
 * Dat haalt tegelijk framer-motion uit de gedeelde bundle: het stond hier, dus
 * élke route betaalde ervoor — ook de homepage, die volledig op eigen CSS
 * draait. Pagina's die het echt gebruiken importeren het nog gewoon zelf.
 */
const Layout = () => {
  const location = useLocation();
  const route = useRoutePattern();

  /*
    Het pad waarmee dit document geopend werd. Dát is de pagina die niet mag
    faden: hij staat al volledig in de geprerenderde HTML.

    Een simpele `mounted`-vlag volstond niet. Die springt na de hydratie om,
    waarna `page-enter` alsnog op de eerste pagina belandde en de fade zich
    gewoon iets later afspeelde — de titel stond op het scherm en werd dan
    opnieuw doorzichtig. Lighthouse legde de LCP daardoor op het einde van die
    animatie in plaats van op de eerste tekening.

    Met een ref op het beginpad blijft de eerste pagina onaangeroerd en
    animeert alleen wat de bezoeker daarna zelf aanklikt.
  */
  const initialPath = useRef(location.pathname);
  const navigated = useRef(false);
  if (!navigated.current && location.pathname !== initialPath.current) {
    // Eén keer wegklikken is genoeg: vanaf dan animeert elke pagina, ook als de
    // bezoeker later op het beginpad terugkomt.
    navigated.current = true;
  }

  useEffect(() => {
    // Vanaf hier mogen de hero's van volgende routes weer animeren.
    markFirstPaintDone();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ScrollToTop />
        <FloatingWhatsApp />
        <Analytics route={route} />
        <SpeedInsights route={route} />
        <div key={location.pathname} className={navigated.current ? "page-enter" : undefined}>
          <Outlet />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default Layout;
