import type { VariantContent, StatContent, QuoteContent } from "../types";

export const SOCIAL_PROOF_TITLE: VariantContent<string> = {
  procore: "Leaders use Procore + SALUS",
  general: "Leaders use SALUS",
  sitedocs: "Leaders use SALUS",
  hammertech: "Leaders use SALUS",
  ca: "Leaders use SALUS",
};

export const SOCIAL_PROOF_STATS: StatContent[] = [
  { number: "70,000+", label: "Projects Globally" },
  { number: "250,000+", label: "Field Level Users" },
  { number: "9,100+", label: "Companies Protected" },
];

export const SOCIAL_PROOF_QUOTE: VariantContent<QuoteContent> = {
  procore: {
    text: "Before SALUS, we were tracking safety data across 14 different systems—\nExcel, SharePoint, SiteDocs, you name it. It was unmanageable.\nMoving to SALUS didn't just digitize us; it unified us.",
    author: "Robert Clark",
    title: "VP of Safety - UNIVERSAL GROUP",
  },
  general: {
    text: "Before SALUS, we were tracking safety data across 14 different systems—\nExcel, SharePoint, SiteDocs, you name it. It was unmanageable.\nMoving to SALUS didn't just digitize us; it unified us.",
    author: "Robert Clark",
    title: "VP of Safety - UNIVERSAL GROUP",
  },
  sitedocs: {
    text: "Before SALUS, we were tracking safety data across 14 different systems—\nExcel, SharePoint, SiteDocs, you name it. It was unmanageable.\nMoving to SALUS didn't just digitize us; it unified us.",
    author: "Robert Clark",
    title: "VP of Safety - UNIVERSAL GROUP",
  },
  hammertech: {
    text: "Before SALUS, we were tracking safety data across 14 different systems—\nExcel, SharePoint, SiteDocs, you name it. It was unmanageable.\nMoving to SALUS didn't just digitize us; it unified us.",
    author: "Robert Clark",
    title: "VP of Safety - UNIVERSAL GROUP",
  },
  ca: {
    text: "The Universal Group centralized 14 fragmented systems into SALUS and secured $750,000 in annual insurance savings.",
    author: "",
    title: "",
  },
};

export const STOP_WORKAROUNDS_QUOTE: VariantContent<QuoteContent | null> = {
  procore: null,
  general: null,
  sitedocs: null,
  hammertech: null,
  ca: {
    text: "Before SALUS, we were tracking safety data across 14 different systems—\nExcel, SharePoint, SiteDocs, you name it. It was unmanageable.\nMoving to SALUS didn't just digitize us; it unified us.",
    author: "Robert Clark",
    title: "VP of Safety - UNIVERSAL GROUP",
  },
};
