import type { VariantContent, StatContent, QuoteContent } from "../types";

export const SOCIAL_PROOF_TITLE: VariantContent<string> = {
  procore: "Leaders use Procore + Salus",
  general: "Leaders use Salus",
  sitedocs: "Leaders use Salus",
};

export const SOCIAL_PROOF_STATS: StatContent[] = [
  { number: "70,000+", label: "Projects Globally" },
  { number: "250,000+", label: "Field Level Users" },
  { number: "9,100+", label: "Companies Protected" },
];

export const SOCIAL_PROOF_QUOTE: QuoteContent = {
  text: "Before SALUS, we were tracking safety data across 14 different systems—Excel, SharePoint, SiteDocs, you name it. It was unmanageable. Moving to SALUS didn't just digitize us; it unified us.",
  author: "Robert Clark",
  title: "VP of Safety - UNIVERSAL GROUP",
};
