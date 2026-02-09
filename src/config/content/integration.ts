import type { SectionContent, QuoteContent, DiagramRowContent } from "../types";

export const INTEGRATION_CONTENT: SectionContent = {
  badge: "PROCORE INTEGRATION",
  title: "One Truth.",
  titleHighlight: "Zero Excuses.",
  subtitle:
    'With Procore, you already have an "Enterprise Software." You don\'t need another one. With SALUS native sync, Procore stays your system of record while giving the field a tool they actually love. No double entry. No shadow workflows.',
  features: [
    {
      title: "Procore as Master",
      description:
        "All financial and project master data originates in Procore. Inspections, observations, and personnel data from SALUS appear in Procore exactly where your PMs expect to find them.",
      iconColor: "beige",
    },
    {
      title: "SALUS is Procore's Field Engine",
      description:
        "All financial and project master data originates in Procore and pushed to SALUS; All field data is captured in SALUS and pushed into Procore.",
      iconColor: "blue",
    },
  ],
};

export const INTEGRATION_QUOTE: QuoteContent = {
  text: "Procore is our master solution that we use to manage all our sites. All SALUS log submissions are auto-uploaded to Procore's document section. If you're done wasting time searching, SALUS is the solution.",
  author: "Justin Itule",
  title: "Field Integration Manager, Willmeng Construction",
};

export const INTEGRATION_DIAGRAM_ROWS: DiagramRowContent[] = [
  { left: "Projects", right: "Auto-Creation", color: "blue" },
  { left: "Documents", right: "Signed Forms", color: "orange" },
  { left: "Manpower", right: "Headcount Sync", color: "lime" },
  { left: "Photos", right: "Hazard Visuals", color: "yellow" },
  { left: "Tasks", right: "Issue Tracking", color: "red" },
];
