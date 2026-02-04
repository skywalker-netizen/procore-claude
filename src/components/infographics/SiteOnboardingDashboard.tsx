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
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            {/* Background */}
            <rect width="64" height="64" fill="white" />
            
            {/* Top-left position detection pattern */}
            <rect x="4" y="4" width="14" height="14" fill="hsl(var(--navy))" />
            <rect x="6" y="6" width="10" height="10" fill="white" />
            <rect x="8" y="8" width="6" height="6" fill="hsl(var(--navy))" />
            
            {/* Top-right position detection pattern */}
            <rect x="46" y="4" width="14" height="14" fill="hsl(var(--navy))" />
            <rect x="48" y="6" width="10" height="10" fill="white" />
            <rect x="50" y="8" width="6" height="6" fill="hsl(var(--navy))" />
            
            {/* Bottom-left position detection pattern */}
            <rect x="4" y="46" width="14" height="14" fill="hsl(var(--navy))" />
            <rect x="6" y="48" width="10" height="10" fill="white" />
            <rect x="8" y="50" width="6" height="6" fill="hsl(var(--navy))" />
            
            {/* Timing patterns - horizontal */}
            <rect x="20" y="10" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="24" y="10" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="28" y="10" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="32" y="10" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="36" y="10" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="40" y="10" width="2" height="2" fill="hsl(var(--navy))" />
            
            {/* Timing patterns - vertical */}
            <rect x="10" y="20" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="10" y="24" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="10" y="28" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="10" y="32" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="10" y="36" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="10" y="40" width="2" height="2" fill="hsl(var(--navy))" />
            
            {/* Dense data modules - Row 1 */}
            <rect x="20" y="4" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="24" y="4" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="30" y="4" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="36" y="4" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="40" y="4" width="2" height="2" fill="hsl(var(--navy))" />
            
            {/* Data modules - Row 2 */}
            <rect x="22" y="6" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="28" y="6" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="32" y="6" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="38" y="6" width="2" height="2" fill="hsl(var(--navy))" />
            
            {/* Data modules - Center area */}
            <rect x="20" y="20" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="24" y="20" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="28" y="22" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="32" y="20" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="36" y="22" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="40" y="20" width="2" height="2" fill="hsl(var(--navy))" />
            
            <rect x="22" y="24" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="26" y="26" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="30" y="24" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="34" y="26" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="38" y="24" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="42" y="26" width="2" height="2" fill="hsl(var(--navy))" />
            
            <rect x="20" y="28" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="24" y="30" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="28" y="28" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="32" y="30" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="36" y="28" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="40" y="30" width="2" height="2" fill="hsl(var(--navy))" />
            
            <rect x="22" y="32" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="26" y="34" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="30" y="32" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="34" y="34" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="38" y="32" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="42" y="34" width="2" height="2" fill="hsl(var(--navy))" />
            
            <rect x="20" y="36" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="24" y="38" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="28" y="36" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="32" y="38" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="36" y="36" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="40" y="38" width="2" height="2" fill="hsl(var(--navy))" />
            
            {/* Right side data */}
            <rect x="46" y="20" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="50" y="22" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="54" y="20" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="48" y="26" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="52" y="24" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="56" y="26" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="46" y="30" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="50" y="28" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="54" y="32" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="48" y="34" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="52" y="36" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="56" y="38" width="2" height="2" fill="hsl(var(--navy))" />
            
            {/* Bottom area data */}
            <rect x="20" y="46" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="24" y="48" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="28" y="46" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="32" y="50" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="36" y="48" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="40" y="46" width="2" height="2" fill="hsl(var(--navy))" />
            
            <rect x="22" y="52" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="26" y="54" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="30" y="52" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="34" y="56" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="38" y="54" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="42" y="52" width="2" height="2" fill="hsl(var(--navy))" />
            
            {/* Bottom-right corner data */}
            <rect x="46" y="46" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="50" y="48" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="54" y="46" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="48" y="52" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="52" y="54" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="56" y="56" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="46" y="56" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="54" y="52" width="2" height="2" fill="hsl(var(--navy))" />
            <rect x="58" y="50" width="2" height="2" fill="hsl(var(--navy))" />
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
