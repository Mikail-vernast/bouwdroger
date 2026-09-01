import { useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollToTop from "@/components/ScrollToTop";
import { useRoutePattern } from "@/hooks/useRoutePattern";

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

  /*
    Hier stonden ook een QueryClientProvider, een TooltipProvider en de twee
    toast-systemen. Geen enkele pagina roept `useQuery` aan en er staat nergens
    een `<Tooltip>`, dus die twee providers waren puur gewicht: react-query en
    radix-tooltip met floating-ui erachter, samen ~47 kB in de gedeelde bundle
    die élke bezoeker op élke pagina ophaalt.

    De toasts wél in gebruik, maar op vier pagina's — die renderen hun eigen
    <Toaster/> nu zelf, zodat sonner en radix-toast in hun route-chunk zitten
    in plaats van in de entry.
  */
  return (
    <>
      <ScrollToTop />
      <FloatingWhatsApp />
      {/*
        `path` moet erbij, anders telt Web Analytics niets. De SDK zet bij een
        gezette `route` intern `disableAutoTrack: true` — hij gaat ervan uit dat
        wij de pageviews zelf sturen — maar stuurt er zelf pas één zodra
        `route` én `path` allebei ingevuld zijn. Met alleen `route` staat de
        automatische telling dus uit terwijl de handmatige nooit vuurt: nul
        bezoekers, voor altijd, terwijl het script gewoon 200 geeft en
        `window.va` bestaat. Speed Insights heeft die tweede prop niet nodig en
        mat wél door — daaraan zie je dat het niet aan het verkeer lag.
      */}
      <Analytics route={route} path={location.pathname} />
      <SpeedInsights route={route} />
      {/*
        `page-shell` is de vaste haak waaraan src/styles/site-footer.css de
        footer naar de onderkant van het scherm duwt: die stylesheet moet de
        paginawortel kunnen aanspreken, en dat kan alleen via dit vaste
        tussenniveau. De naam is bewust lelijk-specifiek — met `route` pakte
        `.route > *` ook de `.wrap` in de <section class="route"> van /contact,
        die daardoor 100dvh hoog werd.
      */}
      <div
        key={location.pathname}
        className={navigated.current ? "page-shell page-enter" : "page-shell"}
      >
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
