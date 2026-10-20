import { useState, type FormEvent } from "react";

/**
 * De verzendlogica onder de formulieren op de contact-, klantenservice- en
 * leveringspagina. Elke pagina houdt haar eigen designmarkup; dit levert alleen
 * de submit en de toestanden; de gedeelde stukjes markup staan in
 * `src/components/AanvraagForm.tsx`.
 *
 * Tot 15-10-2026 opende versturen alleen een voorgevulde mail. Nu gaat de
 * aanvraag naar `/api/aanvraag` en landt ze in het bouwdrogers-portaal. De
 * mailto blijft enkel nog bestaan als laatste uitweg wanneer het versturen
 * helemaal mislukt — en dan met alles wat de bezoeker al had getypt.
 */

export type AanvraagSource = "contact" | "klantenservice" | "levering";

export type AanvraagStatus = "idle" | "sending" | "done" | "error";

/** Waar de mailto-uitweg naartoe gaat — dezelfde inbox als op de pagina's zelf. */
export const MAIL_TO = "info@vernast-verhuur.be";
const FALLBACK_ERROR = "Verzenden lukte niet. Probeer het opnieuw of bel 03 689 90 65.";

interface Options {
  source: AanvraagSource;
  /** De `name` van het tekstvak met de vraag zelf (`bericht`, `vraag`, `situatie`). */
  messageField: string;
  /** Voorvoegsel voor het onderwerp van de mailto-uitweg. */
  mailSubject: string;
}

export function useAanvraag({ source, messageField, mailSubject }: Options) {
  const [status, setStatus] = useState<AanvraagStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const [mailto, setMailto] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const val = (name: string) =>
      (
        form.elements.namedItem(name) as
          | HTMLInputElement
          | HTMLTextAreaElement
          | HTMLSelectElement
          | null
      )?.value ?? "";

    const fields = {
      voornaam: val("voornaam"),
      achternaam: val("naam"),
      email: val("email"),
      telefoon: val("telefoon"),
      onderwerp: val("onderwerp"),
      bericht: val(messageField),
    };

    setStatus("sending");
    setError(null);
    setMailto(null);

    const fail = (message: string) => {
      const body = [
        `Naam: ${fields.voornaam} ${fields.achternaam}`,
        `E-mail: ${fields.email}`,
        `Telefoon: ${fields.telefoon || "-"}`,
        `Onderwerp: ${fields.onderwerp}`,
        "",
        fields.bericht,
      ].join("\n");
      setMailto(
        `mailto:${MAIL_TO}?subject=${encodeURIComponent(`${mailSubject}: ${fields.onderwerp}`)}` +
          `&body=${encodeURIComponent(body)}`,
      );
      setError(message);
      setStatus("error");
    };

    try {
      const response = await fetch("/api/aanvraag", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          source,
          ...fields,
          page_url: typeof window === "undefined" ? null : window.location.href,
          website: val("website"),
        }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as { error?: string };
        fail(data.error ?? FALLBACK_ERROR);
        return;
      }

      setStatus("done");
    } catch {
      fail("Verzenden lukte niet — controleer uw verbinding en probeer opnieuw.");
    }
  };

  return { status, error, mailto, handleSubmit, sending: status === "sending" };
}
