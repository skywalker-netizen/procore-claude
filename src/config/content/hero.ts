import type { TrustBadgeContent, VariantContent } from "../types";

interface HeroContent {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  subtitleItalic?: string;
  subtitleEnd?: string;
  subtitleTagline?: string;
  description: string;
  tagline?: string;
}

export const HERO_CONTENT: VariantContent<HeroContent> = {
  procore: {
    badge: "SYNCED WITH THE FIELD",
    title: "The Best Field Engine for your Procore",
    titleHighlight: " Brain.",
    subtitle: 'Procore dashboard says "compliant." But is it the truth?',
    subtitleItalic: 'Field teams call its safety module "click hell."',
    subtitleEnd: "Forms get pencil-whipped.",
    subtitleTagline: "Your System of Record is only as good as your System of Reality.",
    description: "SALUS feeds Procore with a live feed of high-fidelity field intelligence, ensuring your mission-critical delivery stays on track and out of the headlines. Zero Incidents. Zero Downtime. Zero Blindspots.",
  },
  general: {
    badge: "NATIVE SYNC",
    title: "Safety management software",
    titleHighlight: "Loved by Boots and Suits.",
    subtitle:
      'You\'re outgrowing paper binders and simple safety forms, but "good enough" safety is not an option and you don\'t have time for "Enterprise" bloat that takes six months to deploy.',
    description:
      "SALUS provides high-precision trades and general contractors with a live stream of high-fidelity, actionable field intelligence and helps close the accountability gaps so that mission-critical projects stay on track and reputations stay protected.",
    tagline: "Zero Incidents. Zero Downtime. Zero Blindspots.",
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
};
