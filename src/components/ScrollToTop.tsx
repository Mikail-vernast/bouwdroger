import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const { pathname, hash } = useLocation();
  const isWaterschade = pathname === "/waterschade";

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll to top on route change — unless the link targets a section, in which
  // case honour the hash (the browser does not do this for client-side routing).
  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      /*
        Bewust geen `cn()`. Deze component en FloatingWhatsApp waren de enige
        twee in de gedeelde bundle die hem gebruikten, en `cn` sleept
        tailwind-merge mee — 20 kB om klassen te ontdubbelen die hier niet
        botsen: `bottom-*` staat alleen in de ternary. Zo blijft tailwind-merge
        in de route-chunks waar de ui-componenten hem echt nodig hebben.
      */
      className={
        "fixed right-4 z-40 w-10 h-10 rounded-full bg-muted border border-border text-muted-foreground hover:bg-foreground hover:text-background shadow-md transition-all duration-200 flex items-center justify-center animate-fade-in " +
        (isWaterschade ? "bottom-[7.5rem] lg:bottom-20" : "bottom-20")
      }
      aria-label="Scroll naar boven"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
};

export default ScrollToTop;
