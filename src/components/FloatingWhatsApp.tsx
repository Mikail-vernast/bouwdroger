import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

/*
 * Het WhatsApp-merkteken, niet de algemene tekstballon van lucide.
 *
 * `MessageCircle` is een praatwolkje dat op elke chatknop past: wie het zag
 * wist niet of hij bij WhatsApp, Messenger of een livechat uitkwam. De knop
 * opent wa.me, dus hoort het merk erop.
 *
 * Als pad en niet als afbeelding: het is een vlak van 24x24 dat meeschaalt,
 * de kleur van de knop erft en geen extra verzoek kost.
 */
const WhatsAppGlyph = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

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

  // On waterschade page, position above sticky bar on mobile
  const isWaterschade = pathname === "/waterschade";

  // De droogsimulator vult precies één scherm en zet zijn Volgende-knop
  // rechtsonder — net waar deze knop zweeft. Zijn eigen kop heeft al een
  // belknop, dus hier blijft hij weg.
  if (pathname === "/verhuur/simulator") return null;

  return (
    <a
      href="https://wa.me/3236899065"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      /* Zie ScrollToTop: `cn()` zou tailwind-merge in de gedeelde bundle houden. */
      className={[
        /*
          #25D366 is het groen van WhatsApp zelf. De knop stond op een eigen
          hsl-waarde die er net naast lag; met het merkteken erop valt dat op.
        */
        "fixed right-4 z-40 flex items-center gap-2 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#1DA851]",
        isHovered ? "px-5 py-3" : "p-3.5",
        hideForFooter ? "opacity-0 pointer-events-none" : "",
        isWaterschade ? "bottom-[4.5rem] lg:bottom-6" : "bottom-6",
      ].join(" ")}
      aria-label="WhatsApp ons"
    >
      <WhatsAppGlyph className="h-6 w-6 flex-shrink-0" />
      {isHovered && (
        <span className="text-sm font-semibold whitespace-nowrap animate-fade-in">
          WhatsApp ons
        </span>
      )}
    </a>
  );
};

export default FloatingWhatsApp;
