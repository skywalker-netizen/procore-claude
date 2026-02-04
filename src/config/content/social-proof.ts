import type { VariantContent, StatContent } from "../types";

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
