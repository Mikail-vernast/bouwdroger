import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageMeta from "@/components/PageMeta";
import FontPreload from "@/components/FontPreload";
import { useSeo } from "@/data/seo";
import { useCopy, useLokaalPad } from "@/i18n/useTaal";

const COPY = {
  nl: { tekst: "Oops! Page not found", terug: "Return to Home" },
  fr: { tekst: "Oups ! Page introuvable", terug: "Retour à l'accueil" },
  en: { tekst: "Oops! Page not found", terug: "Return to Home" },
};

const NotFound = () => {
  const location = useLocation();
  const t = useCopy(COPY);
  const lp = useLokaalPad();
  const seo = useSeo("notFound");

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <FontPreload set="inter" />
      <PageMeta {...seo} />
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">{t.tekst}</p>
        <a href={lp("/")} className="text-primary underline hover:text-primary/90">
          {t.terug}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
