import type { TrustBadgeContent, VariantContent } from "../types";

interface HeroContent {
  badge: string;
  title: string;
  titleHighlight: string;
  titleHighlightLine2?: string;
  subtitle?: string;
  subtitleLine1?: string;
  subtitleLine2Italic?: string;
  subtitleLine2End?: string;
  subtitleLine3?: string;
  description?: string;
  descriptionLine1?: string;
  descriptionLine2?: string;
  tagline?: string;
}

export const HERO_CONTENT: VariantContent<HeroContent> = {
  procore: {
    badge: "SYNCED WITH THE FIELD",
    title: "The Best Field Engine for your Procore",
    titleHighlight: " Brain.",
    subtitleLine1: 'Procore dashboard says "compliant." But is it the truth?',
    subtitleLine2Italic: 'Field teams call its safety module "click hell."',
    subtitleLine2End: " Forms get pencil-whipped.",
    subtitleLine3: "Your System of Record is only as good as your System of Reality.",
    descriptionLine1: "SALUS feeds Procore with a live feed of high-fidelity field intelligence, ensuring your mission-critical delivery stays on track and out of the headlines.",
    descriptionLine2: "Zero Incidents. Zero Downtime. Zero Blindspots.",
  },
  general: {
    badge: "NATIVE SYNC",
    title: "Safety management software",
    titleHighlight: "Loved by Boots and Suits.",
    subtitle:
      'A great safety program starts with smart leaders in the field, but to scale smart, you need help. More paper doesn\'t work, you\'ve outgrown simple digital safety forms, and you don\'t have time for "Enterprise" bloat. Time for Salus, your smart safety partner.',
    description:
      "SALUS provides high-precision trades and general contractors with a live stream of high-fidelity, actionable field intelligence and helps close the accountability gaps so that mission-critical projects stay on track and reputations stay protected.",
    tagline: "Zero Incidents. Zero Downtime. Zero Blindspots.",
  },
  sitedocs: {
    badge: "ACCOUNTABILITY, NOT JUST FORMS",
    title: "SALUS vs. SiteDocs:",
    titleHighlight: "Switch to the High-Visibility & Accountability",
    titleHighlightLine2: "Safety Platform.",
    subtitle:
      "You're outgrowing SiteDocs simple digital forms, its lack of visibility into trades, workers, and assets, and you expect more from your partner in safety.",
    description:
      "SiteDocs fragmented system leaves you with accountability gaps. SALUS empowers field and office to drill down to the worker and asset level, across sites, trades, and equipment for 100% visibility and accountability.",
    tagline: "Scale your Business, Not Risk.",
  },
  hammertech: {
    badge: "FRICTION-FREE SAFETY",
    title: "SALUS vs. HammerTech:",
    titleHighlight: "Powerful safety management",
    titleHighlightLine2: "without the friction.",
    subtitle:
      "You've outgrown simple digital forms, and in your business, safety is not just a checkbox. But HammerTech's complexity causes implementation friction.",
    description:
      "SALUS built for high-precision trades and general contractors a high-fidelity safety software designed for 100% field buy-in, rapid deployment, and collaboration between GCs and Trades.",
    tagline: "Scale your Business with Agility.",
  },
  ca: {
    badge: "CANADIAN SAFETY COMPLIANCE",
    title: "Secure Your COR™ Certification.",
    titleHighlight: "Maximize Your WCB Rebates.",
    titleHighlightLine2: "Win Bids.",
    subtitle:
      "You're outgrowing paper binders and simple digital safety forms. In your business, safety can be more than checking boxes and a cost center.",
    description:
      "SALUS is the only \"Field-First\" safety management software that provides high-fidelity and actionable field intelligence — giving Canadian Prime and Specialized Contractors push-button audit readiness and a direct path to insurance premium discounts.",
    tagline: "Start scaling with confidence.",
  },
  ecompliance: {
    badge: "RELIABILITY OVER FRUSTRATION",
    title: "SALUS vs. eCompliance:",
    titleHighlight: "Stop losing workers",
    titleHighlightLine2: "to a broken app.",
    subtitle:
      "When your safety app crashes mid-form, forces logouts during updates, and doesn't sync between mobile and web, workers stop logging in. Your compliance data dries up, and your risk exposure grows.",
    description:
      "SALUS provides a zero-interruption, bi-directionally synced safety platform that field workers actually use — giving you complete visibility into workers, assets, and trades without the frustration.",
    tagline: "Reliability. Visibility. Accountability.",
  },
};

export const HERO_TRUST_BADGES: VariantContent<TrustBadgeContent[]> = {
  procore: [
    {
      text: "Certified App",
      subtext: "PROCORE MARKETPLACE",
      iconBg: "navy",
    },
    {
      text: "Real-time Sync",
      subtext: "BI-DIRECTIONAL API",
      iconBg: "lime",
    },
  ],
  general: [
    {
      text: "All-in-one connected",
      subtext: "safety ecosystem",
      iconBg: "lime",
    },
    {
      text: "Jobsites - office",
      subtext: "constant feedback loop",
      iconBg: "navy",
    },
    {
      text: "Agile - up and running in as",
      subtext: "little as two weeks",
      iconBg: "navy",
    },
  ],
  sitedocs: [
    {
      text: "All-in-one connected",
      subtext: "safety ecosystem",
      iconBg: "lime",
    },
    {
      text: "Worker & asset level",
      subtext: "accountability",
      iconBg: "navy",
    },
    {
      text: "Easy Data Migration",
      subtext: "from SiteDocs",
      iconBg: "navy",
    },
  ],
  hammertech: [
    {
      text: "All-in-one connected",
      subtext: "safety ecosystem",
      iconBg: "lime",
    },
    {
      text: "GC & Trade",
      subtext: "collaboration",
      iconBg: "navy",
    },
    {
      text: "Agile deployment",
      subtext: "as little as 2 weeks",
      iconBg: "navy",
    },
  ],
  ca: [
    {
      text: "All-in-one connected",
      subtext: "safety ecosystem",
      iconBg: "lime",
    },
    {
      text: "Jobsites - office",
      subtext: "constant feedback loop",
      iconBg: "navy",
    },
    {
      text: "Agile - up and running in as",
      subtext: "little as two weeks",
      iconBg: "navy",
    },
  ],
  ecompliance: [
    {
      text: "All-in-one connected",
      subtext: "safety ecosystem",
      iconBg: "lime",
    },
    {
      text: "Zero service",
      subtext: "interruptions",
      iconBg: "navy",
    },
    {
      text: "Dedicated Success",
      subtext: "Partner",
      iconBg: "navy",
    },
  ],
};
