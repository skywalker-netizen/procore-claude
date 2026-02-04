import salusShieldLogo from "@/assets/salus-shield-logo.png";
import { INTEGRATION_DIAGRAM_ROWS } from "@/config";

export function IntegrationDiagram() {
  return (
    <div className="integration-diagram">
      <div className="diagram-header">
        <div className="diagram-brand">
          <span>PROCORE</span>
          <div className="brand-icon procore">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 4L4 8l8 4 8-4-8-4z" fill="white" />
              <path d="M12 12l8 4v-4l-8-4-8 4v4l8-4z" fill="white" fillOpacity="0.7" />
            </svg>
          </div>
          <small>SYSTEM OF RECORD</small>
        </div>
        <div className="diagram-brand">
          <span>SALUS</span>
          <div className="brand-icon salus">
            <img src={salusShieldLogo} alt="Salus" className="logo-sm" />
          </div>
          <small>FIELD ENGINE</small>
        </div>
      </div>
      <div className="diagram-rows">
        {INTEGRATION_DIAGRAM_ROWS.map((row, index) => (
          <div key={index} className="diagram-row">
            <div className="diagram-item left">{row.left}</div>
            <div className={`diagram-connector ${row.color}`}>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className={`diagram-item right ${row.color}`}>{row.right}</div>
          </div>
        ))}
      </div>
      <div className="data-health-badge">
        <div className="icon">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 2v6h-6" />
            <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
            <path d="M3 22v-6h6" />
            <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
          </svg>
        </div>
        <div className="text">
          <span>CONTINUOUS</span>
          <strong>Data Health</strong>
        </div>
      </div>
    </div>
  );
}
