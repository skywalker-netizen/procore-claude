import type { VariantContent, SectionContent, QuoteContent } from "../types";

export const EXECUTIVE_INSIGHTS_CONTENT: VariantContent<SectionContent> = {
  procore: {
    badge: "EXECUTIVE-LEVEL INSIGHTS",
    title: "Your EMR Is a Bid Filter.",
    titleHighlight: "Treat It Like One.",
    subtitle:
      "An EMR over 1.0 doesn't just raise your premiums—it disqualifies you from the bid list. Procore keeps a record of what happened. Salus shows you why it happened and what's about to happen.",
    features: [
      {
        title: "No More Manual Tallies",
        description:
          "Salus aggregates your leading indicators into high-level Risk Profiles automatically.",
        iconColor: "beige",
      },
      {
        title: "Track Leading Indicators",
        description:
          "Spot a spike in utility-strike near-misses across your Eastern Region sites before a backhoe hits a fiber line.",
        iconColor: "green",
      },
    ],
  },
  general: {
    badge: "COMPLIANCE & REPORTING",
    title: "Inspection-Ready. Audit-Proof.",
    titleHighlight: "Win.",
    subtitle:
      'In Fault-tolerant construction, compliance isn\'t a checkbox. It is a process. Salus proves intent against "nuclear verdicts" and enhances your reputation for excellence.',
    features: [
      {
        title: "High-Resolution Compliance",
        description:
          "In the world of energized work, Lockout/Tagout (LOTO), and NFPA 70E standards, compliance is the difference between uptime and a catastrophic failure. SALUS is built for specialized trades where one missed signature on a hot-work permit stops the job.",
        iconColor: "blue",
      },
      {
        title: "Audit-Ready, Always",
        description:
          "Whether it's a mid-project audit or a Pre-qual for a new hyperscale bid, export a verified, time-stamped history of every high-risk activity in seconds.",
        iconColor: "tan",
      },
      {
        title: "STEP-Ready Reporting",
        description:
          "With Salus, firms can generate the 'push-button' reports required for the STEP self-assessment. This includes real-time tracking of leading indicators, worker participation rates, and supervisor training metrics.",
        iconColor: "lime",
      },
    ],
  },
};

export const EXECUTIVE_INSIGHTS_QUOTE: QuoteContent = {
  text: "GCs talk safety and will say they have a safety plan. Willmeng can now show the results of our safety initiatives to owners. That has helped us win a multitude of new jobs.",
  author: "Justin Itule",
  title: "Field Integration Manager, Willmeng Construction",
};
