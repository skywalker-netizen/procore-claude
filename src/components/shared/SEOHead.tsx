import { Helmet } from "react-helmet-async";
import { SEO_CONTENT, ORGANIZATION_SCHEMA, PRODUCT_SCHEMA, CANADA_SERVICE_SCHEMA, type SEOContent } from "@/config/content/seo";
import type { PageVariant } from "@/config/types";

interface SEOHeadProps {
  variant: PageVariant | "root";
  includeProductSchema?: boolean;
}

export function SEOHead({ variant, includeProductSchema = false }: SEOHeadProps) {
  const seo = SEO_CONTENT[variant];
  const ogImage = seo.ogImage || "https://salusisprocoresafetysolution.lovable.app/favicon.png";
  const isCanada = variant === "ca";

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.canonical} />
      
      {/* Keywords (if provided) */}
      {seo.keywords && <meta name="keywords" content={seo.keywords} />}

      {/* Geo targeting for Canada page */}
      {isCanada && (
        <>
          <meta name="geo.region" content="CA" />
          <meta name="geo.placename" content="Canada" />
          <link rel="alternate" hrefLang="en-CA" href={seo.canonical} />
        </>
      )}

      {/* Open Graph */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Salus" />
      {isCanada && <meta property="og:locale" content="en_CA" />}

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
      {isCanada && (
        <script type="application/ld+json">
          {JSON.stringify(CANADA_SERVICE_SCHEMA)}
        </script>
      )}
    </Helmet>
  );
}