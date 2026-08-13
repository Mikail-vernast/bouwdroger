import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { useLocation } from "react-router-dom";

const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { pathname } = useLocation();
  const [hideForFooter, setHideForFooter] = useState(false);

  // Hide when footer is visible to prevent overlap
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHideForFooter(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, [pathname]);

  if (pathname === "/reserveren") return null;

  // On waterschade page, position above sticky bar on mobile
  const isWaterschade = pathname === "/waterschade";

  return (
    <a
      href="https://wa.me/3236899065"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      /* Zie ScrollToTop: `cn()` zou tailwind-merge in de gedeelde bundle houden. */
      className={[
        "fixed right-4 z-40 flex items-center gap-2 rounded-full bg-[hsl(142,70%,45%)] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[hsl(142,70%,40%)]",
        isHovered ? "px-5 py-3" : "p-3.5",
        hideForFooter ? "opacity-0 pointer-events-none" : "",
        isWaterschade ? "bottom-[4.5rem] lg:bottom-6" : "bottom-6",
      ].join(" ")}
      aria-label="WhatsApp ons"
    >
      <MessageCircle className="h-6 w-6 flex-shrink-0" />
      {isHovered && (
        <span className="text-sm font-semibold whitespace-nowrap animate-fade-in">
          WhatsApp ons
        </span>
      )}
    </a>
  );
};

export default FloatingWhatsApp;
