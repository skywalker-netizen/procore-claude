import salusShieldLogo from "@/assets/salus-shield-logo.png";

const incidents = [
  { name: "Utility Strike", status: "CRITICAL", statusClass: "critical", color: "red", width: "100%", count: 14 },
  { name: "Crane Ops", status: "MONITOR", statusClass: "monitor", color: "orange", width: "65%", count: 9 },
  { name: "Fall Risk", status: "STABLE", statusClass: "stable", color: "blue", width: "43%", count: 6 },
  { name: "PPE Violation", status: "IMPROVING", statusClass: "improving", color: "green", width: "29%", count: 4 },
  { name: "Minor Injury", status: "LOW", statusClass: "low", color: "gray", width: "14%", count: 2 },
];

export function AnalyticsCard() {
  return (
    <div className="analytics-card">
      <div className="analytics-header">
        <div className="analytics-logo">
          <div className="icon">
            <img src={salusShieldLogo} alt="Salus" style={{ width: 16, height: 16, objectFit: "contain" }} />
          </div>
          <div className="text">
            <h5>Salus Analytics Hub</h5>
            <span>90-DAY RISK PROFILE</span>
          </div>
        </div>
        <div className="live-sync">LIVE SYNC ACTIVE</div>
      </div>
      <div className="analytics-title">
        TOTAL INCIDENTS BY TYPE<span>Aug - Oct 2024</span>
      </div>
      <div className="incident-list">
        {incidents.map((incident, index) => (
          <div key={index} className="incident-item">
            <div className="incident-name">{incident.name}</div>
            <div className={`incident-status ${incident.statusClass}`}>{incident.status}</div>
            <div className="incident-bar">
              <div className={`incident-bar-fill ${incident.color}`} style={{ width: incident.width }}></div>
            </div>
            <div className="incident-count">{incident.count}</div>
          </div>
        ))}
      </div>
      <div className="risk-alert">
        <div className="icon">⚠️</div>
        <div className="text">
          <strong>RISK ALERT</strong>
          <span>Utility Strikes +12%</span>
        </div>
      </div>
      <div className="analytics-footer">
        <div className="analytics-footer-left">
          <div className="avatar-stack">
            <div className="avatar"></div>
            <div className="avatar"></div>
            <div className="avatar"></div>
          </div>
          <span>
            REPORT SHARED WITH <strong>Executive Leadership</strong>
          </span>
        </div>
        <button className="generate-btn">GENERATE INSIGHTS ⚡</button>
      </div>
    </div>
  );
}
