import type { PageVariant } from "../types";

export interface SEOContent {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
}

const BASE_URL = "https://salusisprocoresafetysolution.lovable.app";

export const SEO_CONTENT: Record<PageVariant | "root", SEOContent> = {
  root: {
    title: "Salus - Adoption-First Safety Management Software",
    description:
      "Salus provides safety software loved by field teams and executives. All-in-one connected safety ecosystem with agile deployment in as little as 2 weeks.",
    canonical: BASE_URL,
  },
  general: {
    title: "Salus - Adoption-First Safety Management Software",
    description:
      "Salus provides safety software loved by field teams and executives. All-in-one connected safety ecosystem with agile deployment in as little as 2 weeks.",
    canonical: BASE_URL,
  },
  procore: {
    title: "Salus | Procore's Field-First Safety Companion",
    description:
      "Salus is Procore's best and most beloved field and safety companion. With deep native connectivity, Salus provides Procore with real-time field data.",
    canonical: `${BASE_URL}/salus-safety-for-procore`,
  },
  sitedocs: {
    title: "Salus vs SiteDocs | Safety Management Comparison",
    description:
      "Compare Salus vs SiteDocs. Salus provides worker and asset level accountability, full visibility across sites, trades, and equipment.",
    canonical: `${BASE_URL}/sitedocs`,
  },
  hammertech: {
    title: "Salus vs HammerTech | Safety Management Comparison",
    description:
      "Compare Salus vs HammerTech. Salus offers powerful safety management without the friction. 100% field buy-in, rapid deployment, and GC-Trade collaboration.",
    canonical: `${BASE_URL}/hammertech`,
  },
  ca: {
    title: "Salus Canada | COR™ Certification & WCB Rebate Optimization",
    description:
      "Salus helps Canadian contractors secure COR™ certification, maximize WCB rebates, and win public bids with push-button audit readiness.",
    canonical: `${BASE_URL}/ca`,
  },
};

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Salus",
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.png`,
  description:
    "Adoption-first safety management software for high-precision trades and general contractors.",
  sameAs: [],
};

export const PRODUCT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Salus Safety Management",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Contact for pricing",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "250000",
    bestRating: "5",
  },
};
