import { Head } from "vite-react-ssg";
import { useLocation } from "react-router-dom";
import {
  DEFAULT_OG_IMAGE,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_WIDTH,
  SITE_LOCALE,
  SITE_NAME,
  absoluteUrl,
  canonicalUrl,
} from "@/lib/site";

interface PageMetaProps {
  /** 50–60 tekens, belangrijkste begrip vooraan. */
  title: string;
  /** 120–160 tekens, beschrijft eerlijk wat de pagina biedt. */
  description: string;
  /** Canoniek pad; standaard het huidige pad zonder querystring. */
  path?: string;
  /** Deelafbeelding; pad of absolute URL. */
  image?: string;
  /** Voor pagina's zonder zoekwaarde: bevestigingen, checkout-stappen, 404. */
  noindex?: boolean;
  /** Eén of meer JSON-LD-objecten (schema.org). */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  /** `article` voor redactionele pagina's, anders `website`. */
  ogType?: "website" | "article" | "product";
}

/**
 * Zet de volledige head van een pagina: titel, beschrijving, canonical, Open
 * Graph, Twitter en structured data. Alles wordt bij de build meegeprerenderd,
 * zodat ook crawlers zonder JavaScript het zien.
 */
const PageMeta = ({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  noindex = false,
  jsonLd,
  ogType = "website",
}: PageMetaProps) => {
  const location = useLocation();
  const canonical = canonicalUrl(path ?? location.pathname);
  const ogImage = absoluteUrl(image);
  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta
        name="robots"
        content={
          noindex
            ? "noindex, follow"
            : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }
      />

      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={SITE_LOCALE} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      {image === DEFAULT_OG_IMAGE && (
        <meta property="og:image:width" content={String(OG_IMAGE_WIDTH)} />
      )}
      {image === DEFAULT_OG_IMAGE && (
        <meta property="og:image:height" content={String(OG_IMAGE_HEIGHT)} />
      )}
      <meta property="og:image:alt" content={title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {blocks.map((block, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Head>
  );
};

export default PageMeta;
