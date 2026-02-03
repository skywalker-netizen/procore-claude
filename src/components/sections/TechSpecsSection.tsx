import { Check } from "lucide-react";
import { SyncBadge } from "@/components/shared/SyncBadge";
import techSpecsBackground from "@/assets/tech-specs-background.png";

const techRows = [
  { module: "Projects", input: "Auto-Sync Details", benefit: "No double setup for new jobsites." },
  { module: "Documents", input: "Signed Forms & PDFs", benefit: "Automated archival for 100% audit readiness." },
  { module: "Manpower Logs", input: "Worker Sign-ins", benefit: "Effortless transfer of headcount to Daily Logs." },
  { module: "Photos", input: "Hazard Evidence", benefit: "Visual context for RFIs and Observations." },
  { module: "Tasks", input: "Corrective Actions", benefit: "Issues flagged in SALUS become Procore Tasks." },
];

export function TechSpecsSection() {
  return (
    <section className="tech-section" style={{ backgroundImage: `url(${techSpecsBackground})` }}>
      <div className="section-inner">
        <SyncBadge text="TECHNICAL SPECIFICATION" />
        <h2 className="section-title">
          Where Your
          <br />
          <span className="muted">Data Flows.</span>
        </h2>
        <p className="section-subtitle">
          We don't just "link" to Procore; we inhabit it. Every field action has a synchronized office outcome.
        </p>
        <div className="tech-table-wrapper">
          <div className="tech-table">
            <div className="tech-table-header-row">
              <div className="tech-table-header">PROCORE MODULE</div>
              <div className="tech-table-header">SALUS DATA INPUT</div>
              <div className="tech-table-header">OPERATIONAL BENEFIT</div>
            </div>
            {techRows.map((row, index) => (
              <div key={index} className="tech-table-row">
                <div className="tech-table-cell module">{row.module}</div>
                <div className="tech-table-cell input">{row.input}</div>
                <div className="tech-table-cell benefit">
                  <span className="check">
                    <Check size={12} />
                  </span>
                  {row.benefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
