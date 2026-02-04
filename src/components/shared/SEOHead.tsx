import { Helmet } from "react-helmet-async";
import { SEO_CONTENT, ORGANIZATION_SCHEMA, PRODUCT_SCHEMA, type SEOContent } from "@/config/content/seo";
import type { PageVariant } from "@/config/types";

interface SEOHeadProps {
  variant: PageVariant | "root";
  includeProductSchema?: boolean;
}

export function SEOHead({ variant, includeProductSchema = false }: SEOHeadProps) {
  const seo = SEO_CONTENT[variant];
  const ogImage = seo.ogImage || "https://salusisprocoresafetysolution.lovable.app/favicon.png";

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Salus" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(ORGANIZATION_SCHEMA)}
      </script>
      {includeProductSchema && (
        <script type="application/ld+json">
          {JSON.stringify(PRODUCT_SCHEMA)}
        </script>
      )}
    </Helmet>
  );
}
