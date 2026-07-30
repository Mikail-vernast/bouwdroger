import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();
  const isWaterschade = pathname === "/waterschade";

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed right-4 z-40 w-10 h-10 rounded-full bg-muted border border-border text-muted-foreground hover:bg-foreground hover:text-background shadow-md transition-all duration-200 flex items-center justify-center animate-fade-in",
        isWaterschade ? "bottom-[7.5rem] lg:bottom-20" : "bottom-20"
      )}
      aria-label="Scroll naar boven"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
};

export default ScrollToTop;
