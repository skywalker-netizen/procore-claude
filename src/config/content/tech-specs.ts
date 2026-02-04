import type { TechRowContent } from "../types";

export const TECH_SPECS_CONTENT = {
  badge: "TECHNICAL SPECIFICATION",
  title: "Where Your",
  titleHighlight: "Data Flows.",
  subtitle:
    'We don\'t just "link" to Procore; we inhabit it. Every field action has a synchronized office outcome.',
};

export const TECH_SPECS_ROWS: TechRowContent[] = [
  { module: "Projects", input: "Auto-Sync Details", benefit: "No double setup for new jobsites." },
  { module: "Documents", input: "Signed Forms & PDFs", benefit: "Automated archival for 100% audit readiness." },
  { module: "Manpower Logs", input: "Worker Sign-ins", benefit: "Effortless transfer of headcount to Daily Logs." },
  { module: "Photos", input: "Hazard Evidence", benefit: "Visual context for RFIs and Observations." },
  { module: "Tasks", input: "Corrective Actions", benefit: "Issues flagged in SALUS become Procore Tasks." },
];
