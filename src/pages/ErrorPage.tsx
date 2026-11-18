import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import "@/styles/error-page.css";
import { lokaalPad, useCopy, useTaal, type Copy } from "@/i18n/useTaal";

/**
 * Wat de bezoeker ziet als een route crasht.
 *
 * Zonder `errorElement` valt react-router terug op zijn eigen scherm:
 * "Unexpected Application Error!", een kale stacktrace en een regel die de
 * bezoeker aanspreekt als developer. Dat is precies wat een klant midden in
 * een boeking niet moet zien — en het zegt hem ook niet wat hij nu kan doen.
 *
 * Deze pagina doet drie dingen: uitleggen dat het aan ons ligt, een weg terug
 * bieden (opnieuw proberen, home, bellen), en de technische details bewaren
 * voor wie ze nodig heeft. Die laatste staan alleen in ontwikkeling in beeld;
 * in productie horen ze in de logs, niet op het scherm van een klant.
 */

const PHONE = "+3236899065";
const PHONE_LABEL = "03 689 90 65";
const MAIL = "info@vernast-bouwdrogers.be";

interface ErrorCopy {
  code: string;
  badge: string;
  title: string;
  lead: string;
}

/** Vertaalt de fout naar iets wat een klant begrijpt. */
type Soort = "nietGevonden" | "server" | "client";

interface PaginaTekst {
  fouten: Record<Soort, Omit<ErrorCopy, "code">>;
  tag: string;
  opnieuw: string;
  start: string;
  hulp: string;
  details: string;
}

const COPY = {
  nl: {
    fouten: {
      nietGevonden: {
        badge: "Pagina niet gevonden",
        title: "Deze pagina bestaat niet (meer)",
        lead: "De link is verlopen of er zit een typfout in het adres. Via de startpagina vindt u alle toestellen en pakketten terug.",
      },
      server: {
        badge: "Er ging iets mis",
        title: "We konden deze pagina niet laden",
        lead: "Onze server gaf een fout terug. Probeer het zo dadelijk opnieuw, blijft het misgaan, bel of mail ons dan even, dan regelen we het manueel.",
      },
      client: {
        badge: "Er ging iets mis",
        title: "Er liep iets mis aan onze kant",
        lead: "Dit ligt niet aan u. Probeer de pagina opnieuw te laden, lukt dat niet, bel of mail ons dan even, dan helpen we u meteen verder.",
      },
    },
    tag: "Bouwdroogservice",
    opnieuw: "Probeer opnieuw",
    start: "Naar de startpagina",
    hulp: "Liever meteen iemand spreken?",
    details: "Technische details (alleen zichtbaar in ontwikkeling)",
  },
  fr: {
    fouten: {
      nietGevonden: {
        badge: "Page introuvable",
        title: "Cette page n'existe pas (ou plus)",
        lead: "Le lien a expiré ou l'adresse contient une faute de frappe. Depuis la page d'accueil, vous retrouvez tous nos appareils et packs.",
      },
      server: {
        badge: "Un problème est survenu",
        title: "Nous n'avons pas pu charger cette page",
        lead: "Notre serveur a renvoyé une erreur. Réessayez dans un instant ; si le problème persiste, appelez-nous ou écrivez-nous et nous réglerons cela manuellement.",
      },
      client: {
        badge: "Un problème est survenu",
        title: "Un problème est survenu de notre côté",
        lead: "Vous n'y êtes pour rien. Rechargez la page ; si cela ne fonctionne pas, appelez-nous ou écrivez-nous et nous vous aidons tout de suite.",
      },
    },
    tag: "Service de séchage de chantier",
    opnieuw: "Réessayer",
    start: "Vers la page d'accueil",
    hulp: "Vous préférez parler à quelqu'un tout de suite ?",
    details: "Détails techniques (visibles uniquement en développement)",
  },
} satisfies Copy<PaginaTekst>;

function describe(error: unknown, t: PaginaTekst): ErrorCopy {
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) return { code: "404", ...t.fouten.nietGevonden };
    return { code: String(error.status), ...t.fouten.server };
  }
  return { code: "500", ...t.fouten.client };
}

/** De ruwe fouttekst voor de details-blok in ontwikkeling. */
function technicalDetails(error: unknown): { message: string; stack?: string } {
  if (isRouteErrorResponse(error)) {
    return { message: `${error.status} ${error.statusText}`, stack: String(error.data ?? "") };
  }
  if (error instanceof Error) {
    return { message: error.message, stack: error.stack };
  }
  return { message: String(error) };
}

const ErrorPage = () => {
  const error = useRouteError();
  const t = useCopy(COPY);
  const taal = useTaal();
  const copy = describe(error, t);
  const details = technicalDetails(error);

  return (
    <div className="err">
      <header className="err-top">
        <span className="err-mark">
          VERNAST<span>.</span>
        </span>
        <span className="err-tag">{t.tag}</span>
      </header>

      <main className="err-main">
        <div className="err-wrap">
          <div className="err-code" data-code={copy.code} aria-hidden="true">
            {copy.code}
          </div>

          <div>
            <span className="err-pill">
              <i />
              {copy.badge}
            </span>

            <h1 className="err-title">{copy.title}</h1>
            <p className="err-lead">{copy.lead}</p>

            <div className="err-actions">
              <button
                type="button"
                className="err-btn err-btn-r"
                onClick={() => window.location.reload()}
              >
                {t.opnieuw}
              </button>
              {/*
                Een gewone <a> in plaats van <Link>: de router zit op dit punt
                in een foutstatus, dus een nieuwe navigatie binnen dezelfde
                app-instantie kan meteen weer stuklopen. Een volledige laadbeurt
                zet alles terug op nul.
              */}
              <a className="err-btn err-btn-o" href={lokaalPad("/", taal)}>
                {t.start}
              </a>
            </div>

            <div className="err-help">
              <span>{t.hulp}</span>
              <a href={`tel:${PHONE}`}>{PHONE_LABEL}</a>
              <a href={`mailto:${MAIL}`}>{MAIL}</a>
            </div>
          </div>
        </div>
      </main>

      {import.meta.env.DEV && (
        <div className="err-dev">
          <details>
            <summary>{t.details}</summary>
            <div className="err-dev-msg">{details.message}</div>
            {details.stack ? <pre>{details.stack}</pre> : null}
          </details>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
