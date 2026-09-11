import { Link } from "react-router-dom";
import { ArrowUpRight, Check, ChevronRight } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import { COPY_GROUPS, COPY_PAGES } from "@/data/copyV2";
import "@/styles/copy-v2.css";

const CopyV2Page = () => (
  <div className="copy-v2">
    <PageMeta
      title="Copydeck V2 — volledige website"
      description="Lokale, niet-indexeerbare conceptcopy voor de volledige website van Vernast Verhuur."
      path="/copy-v2"
      noindex
    />

    <header className="cv2-top">
      <Link to="/" className="cv2-brand">Vernast <span>Copydeck V2</span></Link>
      <div className="cv2-top-actions">
        <span>Concept · niet geïndexeerd</span>
        <Link to="/">Bekijk huidige website <ArrowUpRight size={15} /></Link>
      </div>
    </header>

    <div className="cv2-layout">
      <aside className="cv2-sidebar">
        <div className="cv2-side-intro">
          <b>Volledige websitecopy</b>
          <p>Kies een pagina om de voorgestelde copy te lezen.</p>
        </div>
        <nav aria-label="Copydeck navigatie">
          {COPY_GROUPS.map((group) => (
            <div className="cv2-nav-group" key={group}>
              <span>{group}</span>
              {COPY_PAGES.filter((page) => page.group === group).map((page) => (
                <a href={`#${page.id}`} key={page.id}>
                  {page.name} <ChevronRight size={13} />
                </a>
              ))}
            </div>
          ))}
        </nav>
      </aside>

      <main className="cv2-main">
        <section className="cv2-cover">
          <span className="cv2-kicker">Marketing- en conversiecopy</span>
          <h1>Nieuwe copy voor de volledige website.</h1>
          <p>
            Dit document verandert de bestaande pagina’s niet. Het is een leesbare conceptversie
            waarin elke pagina één duidelijke klanttaak, concrete belofte en logische vervolgstap krijgt.
          </p>
          <div className="cv2-principles">
            <span><Check size={14} /> Resultaat vóór techniek</span>
            <span><Check size={14} /> Concrete claims</span>
            <span><Check size={14} /> Eén hoofdactie</span>
            <span><Check size={14} /> Geen verborgen voorwaarden</span>
          </div>
        </section>

        {COPY_PAGES.map((page, index) => (
          <article className="cv2-page" id={page.id} key={page.id}>
            <div className="cv2-page-head">
              <div>
                <span className="cv2-page-count">{String(index + 1).padStart(2, "0")}</span>
                <span className="cv2-group">{page.group}</span>
              </div>
              <h2>{page.name}</h2>
              <div className="cv2-route-row">
                <code>{page.route}</code>
                {page.route.startsWith("/") && !page.route.includes(":") && !page.route.includes("·") && (
                  <Link to={page.route}>Huidige pagina bekijken <ArrowUpRight size={14} /></Link>
                )}
              </div>
              <p className="cv2-purpose"><b>Doel:</b> {page.purpose}</p>
            </div>

            <section className="cv2-hero-copy">
              <span className="cv2-label">Hero</span>
              <small>{page.hero.eyebrow}</small>
              <h3>{page.hero.title}</h3>
              <p>{page.hero.body}</p>
              {(page.hero.primary || page.hero.secondary) && (
                <div className="cv2-buttons">
                  {page.hero.primary && <span className="primary">{page.hero.primary}</span>}
                  {page.hero.secondary && <span>{page.hero.secondary}</span>}
                </div>
              )}
            </section>

            <div className="cv2-blocks">
              {page.blocks.map((block, blockIndex) => (
                <section className="cv2-block" key={`${page.id}-${blockIndex}`}>
                  <div className="cv2-block-number">{String(blockIndex + 1).padStart(2, "0")}</div>
                  {block.eyebrow && <small>{block.eyebrow}</small>}
                  <h3>{block.title}</h3>
                  {block.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {block.bullets && (
                    <ul>
                      {block.bullets.map((bullet) => <li key={bullet}><Check size={14} /> {bullet}</li>)}
                    </ul>
                  )}
                  {block.cta && <div className="cv2-inline-cta">CTA: {block.cta}</div>}
                </section>
              ))}
            </div>
          </article>
        ))}
      </main>
    </div>
  </div>
);

export default CopyV2Page;
