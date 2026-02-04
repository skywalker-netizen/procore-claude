import { Check } from "lucide-react";
import { SyncBadge } from "@/components/shared/SyncBadge";
import techSpecsBackground from "@/assets/tech-specs-background.png";
import { TECH_SPECS_CONTENT, TECH_SPECS_ROWS } from "@/config";

export function TechSpecsSection() {
  const content = TECH_SPECS_CONTENT;

  return (
    <section className="tech-section" style={{ backgroundImage: `url(${techSpecsBackground})` }}>
      <div className="section-inner">
        <SyncBadge text={content.badge} />
        <h2 className="section-title">
          {content.title}
          <br />
          <span className="muted">{content.titleHighlight}</span>
        </h2>
        <p className="section-subtitle">{content.subtitle}</p>
        <div className="tech-table-wrapper">
          <div className="tech-table">
            <div className="tech-table-header-row">
              <div className="tech-table-header">PROCORE MODULE</div>
              <div className="tech-table-header">SALUS DATA INPUT</div>
              <div className="tech-table-header">OPERATIONAL BENEFIT</div>
            </div>
            {TECH_SPECS_ROWS.map((row, index) => (
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
