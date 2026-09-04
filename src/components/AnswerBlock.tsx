import { TARIFFS_AS_OF, TARIFFS_BASIS, answerFor } from "@/data/answers";

interface AnswerBlockProps {
  /** Route path, key into PAGE_ANSWERS. */
  path: string;
}

/**
 * The direct answer under a page's hero: the core question, a complete
 * two-to-four-sentence answer with numbers, and a small facts row. Content
 * lives in src/data/answers.ts (fed by TARIEVEN); this only renders.
 *
 * Plain semantic HTML on purpose (h2 + p + dl), no Reveal animation: this
 * block is prerendered by vite-react-ssg and is what an answer engine quotes.
 */
const AnswerBlock = ({ path }: AnswerBlockProps) => {
  const entry = answerFor(path);
  if (!entry) return null;

  const headingId = `answer-${path === "/" ? "home" : path.replace(/\W+/g, "-").replace(/^-|-$/g, "")}`;

  return (
    <section aria-labelledby={headingId} className="w-full bg-muted/40 border-y border-border text-foreground">
      <div className="container mx-auto max-w-5xl px-4 py-12 md:py-16">
        <h2 id={headingId} className="text-2xl md:text-3xl font-black leading-tight">
          {entry.question}
        </h2>
        <p className="mt-4 max-w-3xl text-base md:text-lg leading-relaxed text-muted-foreground">{entry.answer}</p>

        <dl className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {entry.facts.map((fact) => (
            <div key={fact.label} className="rounded-xl border border-border bg-background p-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{fact.label}</dt>
              <dd className="mt-1 text-xl md:text-2xl font-black">{fact.value}</dd>
              {fact.note ? <dd className="mt-0.5 text-xs text-muted-foreground">{fact.note}</dd> : null}
            </div>
          ))}
        </dl>

        <p className="mt-4 text-xs text-muted-foreground">
          Tarieven gepubliceerd op {TARIFFS_AS_OF}. {TARIFFS_BASIS}
        </p>
      </div>
    </section>
  );
};

export default AnswerBlock;
