import type { SectionContent, VariantContent } from "../types";

export const PREVENTATIVE_MAINTENANCE_CONTENT: VariantContent<SectionContent> = {
  general: {
    badge: "ACTIONABLE FIELD INTELLIGENCE",
    title: "Intelligence from the field, for the field.",
    subtitle:
      "Your Crane Log Shouldn't Live in a Binder. High-Fidelity Field Intelligence helps you prevent incidents and close the accountability gaps. At the worker and asset level.",
    features: [
      {
        title: "CORRECTIVE ACTIONS",
        description:
          "A foreman scans a QR code on a scissor lift. SALUS instantly checks the maintenance log. If the inspection is overdue, the app flags it immediately. A constant feedback loop between jobsites and the office.",
        iconColor: "blue",
      },
      {
        title: "TRACK LEADING INDICATORS",
        description:
          "Spot a spike in utility-strike near-misses across your Eastern Region sites before a backhoe hits a fiber line.",
        iconColor: "lime",
      },
    ],
  },
  sitedocs: {
    badge: "ACTIONABLE FIELD INTELLIGENCE",
    title: "Equipment Chaos vs. Asset Precision",
    subtitle:
      "Knowing your \"Scissor Lifts\" are safe isn't enough. You need to know that Lift #402 had its pre-trip inspection today. Unlike SiteDocs, every machine in Salus has its own digital identity. QR tags on specific equipment mean inspections are tied to the exact asset, not just a category.\n\nComplete visibility into:",
    features: [
      {
        title: "Maintenance cases",
        description: "",
        iconColor: "blue",
        titleOnly: true,
      },
      {
        title: "Inspection history",
        description: "",
        iconColor: "tan",
        titleOnly: true,
      },
      {
        title: "Operational status for every single unit in your fleet",
        description: "",
        iconColor: "lime",
        titleOnly: true,
      },
    ],
  },
  procore: {
    badge: "ACTIONABLE FIELD INTELLIGENCE",
    title: "Intelligence from the field, for the field.",
    subtitle:
      "Your Crane Log Shouldn't Live in a Binder. High-Fidelity Field Intelligence helps you prevent incidents and close the accountability gaps. At the worker and asset level.",
    features: [
      {
        title: "CORRECTIVE ACTIONS",
        description:
          "A foreman scans a QR code on a scissor lift. SALUS instantly checks the maintenance log. If the inspection is overdue, the app flags it immediately. A constant feedback loop between jobsites and the office.",
        iconColor: "blue",
      },
      {
        title: "TRACK LEADING INDICATORS",
        description:
          "Spot a spike in utility-strike near-misses across your Eastern Region sites before a backhoe hits a fiber line.",
        iconColor: "lime",
      },
    ],
  },
};
