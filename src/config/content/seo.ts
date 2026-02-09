import type { PageVariant } from "../types";

export interface SEOContent {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  keywords?: string;
}

const BASE_URL = "https://salusisprocoresafetysolution.lovable.app";

export const SEO_CONTENT: Record<PageVariant | "root", SEOContent> = {
  root: {
    title: "SALUS - Adoption-First Safety Management Software",
    description:
      "SALUS provides safety software loved by field teams and executives. All-in-one connected safety ecosystem with agile deployment in as little as 2 weeks.",
    canonical: BASE_URL,
  },
  general: {
    title: "SALUS - Adoption-First Safety Management Software",
    description:
      "SALUS provides safety software loved by field teams and executives. All-in-one connected safety ecosystem with agile deployment in as little as 2 weeks.",
    canonical: BASE_URL,
  },
  procore: {
    title: "SALUS | Procore's Field-First Safety Companion",
    description:
      "SALUS is Procore's best and most beloved field and safety companion. With deep native connectivity, SALUS provides Procore with real-time field data.",
    canonical: `${BASE_URL}/salus-safety-for-procore`,
  },
  sitedocs: {
    title: "SALUS vs SiteDocs | Safety Management Comparison",
    description:
      "Compare SALUS vs SiteDocs. SALUS provides worker and asset level accountability, full visibility across sites, trades, and equipment.",
    canonical: `${BASE_URL}/sitedocs`,
  },
  hammertech: {
    title: "SALUS vs HammerTech | Safety Management Comparison",
    description:
      "Compare SALUS vs HammerTech. SALUS offers powerful safety management without the friction. 100% field buy-in, rapid deployment, and GC-Trade collaboration.",
    canonical: `${BASE_URL}/hammertech`,
  },
  ca: {
    title: "SALUS Canada | COR™ Certification & WCB Rebate Optimization",
    description:
      "SALUS helps Canadian contractors secure COR™ certification, maximize WCB premium rebates, and win public infrastructure bids. Push-button audit readiness for BC, Alberta & Ontario.",
    canonical: `${BASE_URL}/ca`,
    keywords: "COR certification, WCB rebates, Canadian safety software, construction safety Canada, WHMIS 2015, NBC 2020, Alberta safety, BC safety, Ontario safety",
  },
};

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SALUS",
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.png`,
  description:
    "Adoption-first safety management software for high-precision trades and general contractors.",
  sameAs: [],
};

export const PRODUCT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "SALUS Safety Management",
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

export const CANADA_SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SALUS Safety Management for Canada",
  provider: {
    "@type": "Organization",
    name: "SALUS",
  },
  areaServed: [
    { "@type": "Country", name: "Canada" },
    { "@type": "AdministrativeArea", name: "British Columbia" },
    { "@type": "AdministrativeArea", name: "Alberta" },
    { "@type": "AdministrativeArea", name: "Ontario" },
  ],
  description: "Construction safety management software optimized for Canadian COR™ certification, WCB premium rebates, WHMIS 2015 compliance, and NBC 2020 requirements.",
  serviceType: "Safety Management Software",
};
