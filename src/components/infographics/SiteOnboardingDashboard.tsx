import { Check } from "lucide-react";

interface WorkerEntry {
  initial: string;
  name: string;
  company: string;
  status: "SIGNED" | "PENDING";
  time: string;
}

const WORKERS: WorkerEntry[] = [
  { initial: "B", name: "Blair Rose", company: "HEXAGON CONSTRUCTION", status: "SIGNED", time: "8:10 PM" },
  { initial: "R", name: "Rob Clifford", company: "EAGLE WINDOWS", status: "SIGNED", time: "10:12 AM" },
  { initial: "R", name: "Robin Sanders", company: "BULLDOG DEMOLITION", status: "SIGNED", time: "9:45 AM" },
];

export function SiteOnboardingDashboard() {
  return (
    <div className="site-onboarding-dashboard">
      {/* Main Card - Site Induction Log */}
      <div className="induction-log-card">
        <div className="induction-log-header">
          <span className="live-badge">LIVE ONBOARDING</span>
          <h4>Site Induction Log</h4>
        </div>
        
        <div className="worker-list">
          {WORKERS.map((worker, index) => (
            <div key={index} className="worker-entry">
              <div className="worker-avatar">
                <span>{worker.initial}</span>
              </div>
              <div className="worker-info">
                <span className="worker-name">{worker.name}</span>
                <span className="worker-company">{worker.company}</span>
              </div>
              <div className="worker-status">
                <span className={`status-badge ${worker.status.toLowerCase()}`}>
                  {worker.status}
                </span>
                <span className="status-time">{worker.time}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="compliance-badge">
          <span className="compliance-value">98.5% Compliance</span>
          <span className="compliance-label">REAL-TIME SYNC</span>
        </div>
      </div>
      
      {/* Floating QR Scanner Card */}
      <div className="qr-scanner-card">
        <div className="checkmark-badge">
          <Check size={20} strokeWidth={3} />
        </div>
        
        <div className="qr-scanner-icon">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            {/* QR code pattern */}
            <rect x="8" y="8" width="12" height="12" rx="2" fill="hsl(var(--lime))" />
            <rect x="28" y="8" width="12" height="12" rx="2" fill="hsl(var(--lime))" />
            <rect x="8" y="28" width="12" height="12" rx="2" fill="hsl(var(--lime))" />
            <rect x="28" y="28" width="12" height="12" rx="2" fill="hsl(var(--lime))" opacity="0.4" />
          </svg>
          {/* Dashed circle border */}
          <svg className="scanner-ring" width="100" height="100" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="hsl(var(--lime))"
              strokeWidth="2"
              strokeDasharray="8 6"
              opacity="0.8"
            />
          </svg>
        </div>
        
        <span className="scan-text">Scan to Start</span>
        <span className="version-label">SITE ORIENTATION V2.4</span>
      </div>
    </div>
  );
}
