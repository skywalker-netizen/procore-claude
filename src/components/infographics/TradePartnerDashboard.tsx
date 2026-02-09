import { Bell, User, Check } from "lucide-react";
import salusShieldLogo from "@/assets/salus-shield-logo.png";

export function TradePartnerDashboard() {
  return (
    <div className="portal-demo">
      {/* Main Compliance Dashboard */}
      <div className="compliance-dashboard">
        <div className="compliance-dashboard-header">
          <div className="compliance-dashboard-logo">
            <img src={salusShieldLogo} alt="SALUS" className="compliance-logo-img" />
            <span className="compliance-logo-text">SALUS</span>
          </div>
          <div className="compliance-dashboard-title">SUBCONTRACTOR COMPLIANCE OVERVIEW</div>
          <div className="compliance-dashboard-icons">
            <div className="compliance-icon-circle">?</div>
            <Bell size={16} />
            <div className="compliance-avatar-circle"></div>
          </div>
        </div>
        <div className="compliance-section-title">SUBCONTRACTOR COMPLIANCE OVERVIEW</div>
        <div className="compliance-table">
          <div className="compliance-table-header">
            <span>COMPANY NAME</span>
            <span>STATUS</span>
            <span>WORKERS ON SITE</span>
            <span>LAST JHA SUBMISSION</span>
          </div>
          <div className="compliance-table-row">
            <span className="company-name">Steel Works Inc.</span>
            <span className="status orientated">
              <span className="status-dot"></span>Orientated
            </span>
            <span className="workers-count">12</span>
            <span className="last-jha">Today, 8:30 AM</span>
          </div>
          <div className="compliance-table-row">
            <span className="company-name">Apex Plumbing</span>
            <span className="status in-progress">
              <span className="status-dot"></span>In Progress
            </span>
            <span className="workers-count"></span>
            <span className="last-jha"></span>
          </div>
          <div className="compliance-table-row">
            <span className="company-name">City Electrical</span>
            <span className="status in-progress">
              <span className="status-dot"></span>In Progress
            </span>
            <span className="workers-count"></span>
            <span className="last-jha"></span>
          </div>
          <div className="compliance-table-row">
            <span className="company-name">Concrete Solutions</span>
            <span className="status orientated">
              <span className="status-dot"></span>Orientated
            </span>
            <span className="workers-count"></span>
            <span className="last-jha"></span>
          </div>
          <div className="compliance-table-row">
            <span className="company-name">Summit Roofing</span>
            <span className="status active">
              <span className="status-dot"></span>Active
            </span>
            <span className="workers-count"></span>
            <span className="last-jha"></span>
          </div>
        </div>
      </div>

      {/* Worker Detail Card */}
      <div className="worker-detail-card">
        <div className="worker-detail-header">
          <span className="back-arrow">←</span>
          <span className="worker-company-name">Steel Works Inc.</span>
        </div>
        <div className="worker-detail-content">
          <div className="progress-score-section">
            <span className="progress-score-label">PROGRESS SCORE</span>
            <div className="progress-score-bar">
              <div className="progress-score-fill"></div>
            </div>
          </div>
          <div className="worker-list">
            <div className="worker-item">
              <div className="worker-avatar">
                <User size={20} />
              </div>
              <span className="worker-name">John S.</span>
              <span className="flra-badge">FLRA</span>
            </div>
            <div className="worker-item">
              <div className="worker-avatar female">
                <User size={20} />
              </div>
              <span className="worker-name">Maria R.</span>
              <span className="flra-badge">FLRA</span>
            </div>
          </div>
          <div className="pending-review-row">
            <span className="pending-review-text">Pending Review</span>
          </div>
        </div>
        <div className="check-badge">
          <Check size={16} />
        </div>
      </div>

      {/* QR Code Badge */}
      <div className="qr-badge">
        <div className="qr-code">
          <svg viewBox="0 0 100 100" className="qr-svg">
            {/* Position detection patterns - corners */}
            <rect x="5" y="5" width="25" height="25" fill="hsl(var(--navy))" />
            <rect x="10" y="10" width="15" height="15" fill="white" />
            <rect x="13" y="13" width="9" height="9" fill="hsl(var(--navy))" />

            <rect x="70" y="5" width="25" height="25" fill="hsl(var(--navy))" />
            <rect x="75" y="10" width="15" height="15" fill="white" />
            <rect x="78" y="13" width="9" height="9" fill="hsl(var(--navy))" />

            <rect x="5" y="70" width="25" height="25" fill="hsl(var(--navy))" />
            <rect x="10" y="75" width="15" height="15" fill="white" />
            <rect x="13" y="78" width="9" height="9" fill="hsl(var(--navy))" />

            {/* Data modules - random pattern */}
            <rect x="35" y="5" width="5" height="5" fill="hsl(var(--navy))" />
            <rect x="45" y="5" width="5" height="5" fill="hsl(var(--navy))" />
            <rect x="55" y="5" width="5" height="5" fill="hsl(var(--navy))" />
            <rect x="35" y="15" width="5" height="5" fill="hsl(var(--navy))" />
            <rect x="50" y="15" width="5" height="5" fill="hsl(var(--navy))" />
            <rect x="60" y="15" width="5" height="5" fill="hsl(var(--navy))" />
            <rect x="40" y="25" width="5" height="5" fill="hsl(var(--navy))" />
            <rect x="55" y="25" width="5" height="5" fill="hsl(var(--navy))" />

            <rect x="5" y="35" width="5" height="5" fill="hsl(var(--navy))" />
            <rect x="15" y="35" width="5" height="5" fill="hsl(var(--navy))" />
            <rect x="25" y="40" width="5" height="5" fill="hsl(var(--navy))" />
            <rect x="35" y="35" width="5" height="5" fill="hsl(var(--navy))" />
            <rect x="45" y="40" width="5" height="5" fill="hsl(var(--navy))" />
            <rect x="55" y="35" width="5" height="5" fill="hsl(var(--navy))" />
            <rect x="65" y="40" width="5" height="5" fill="hsl(var(--navy))" />
            <rect x="75" y="35" width="5" height="5" fill="hsl(var(--navy))" />
            <rect x="85" y="40" width="5" height="5" fill="hsl(var(--navy))" />
            <rect x="90" y="35" width="5" height="5" fill="hsl(var(--navy))" />

            <rect x="5" y="50" width="5" height="5" fill="hsl(var(--navy))" />
            <rect x="20" y="50" width="5" height="5" fill="hsl(var(--navy))" />
            <rect x="40" y="50" width="5" height="5" fill="hsl(var(--navy))" />
            <rect x="50" y="50" width="5" height="5" fill="hsl(var(--navy))" />
            <rect x="60" y="50" width="5" height="5" fill="hsl(var(--navy))" />
            <rect x="80" y="50" width="5" height="5" fill="hsl(var(--navy))" />
            <rect x="90" y="50" width="5" height="5" fill="hsl(var(--navy))" />

            <rect x="10" y="60" width="5" height="5" fill="hsl(var(--navy))" />
            <rect x="25" y="60" width="5" height="5" fill="hsl(var(--navy))" />
            <rect x="35" y="55" width="5" height="5" fill="hsl(var(--navy))" />
            <rect x="45" y="60" width="5" height="5" fill="hsl(var(--navy))" />
            <rect x="55" y="55" width="5" height="5" fill="hsl(var(--navy))" />
            <rect x="70" y="55" width="5" height="5" fill="hsl(var(--navy))" />
            <rect x="85" y="60" width="5" height="5" fill="hsl(var(--navy))" />

            <rect x="35" y="70" width="5" height="5" fill="hsl(var(--navy))" />
            <rect x="50" y="70" width="5" height="5" fill="hsl(var(--navy))" />
            <rect x="60" y="75" width="5" height="5" fill="hsl(var(--navy))" />
            <rect x="70" y="70" width="5" height="5" fill="hsl(var(--navy))" />
            <rect x="80" y="75" width="5" height="5" fill="hsl(var(--navy))" />
            <rect x="90" y="70" width="5" height="5" fill="hsl(var(--navy))" />

            <rect x="40" y="85" width="5" height="5" fill="hsl(var(--navy))" />
            <rect x="55" y="80" width="5" height="5" fill="hsl(var(--navy))" />
            <rect x="65" y="85" width="5" height="5" fill="hsl(var(--navy))" />
            <rect x="75" y="80" width="5" height="5" fill="hsl(var(--navy))" />
            <rect x="85" y="85" width="5" height="5" fill="hsl(var(--navy))" />
            <rect x="90" y="90" width="5" height="5" fill="hsl(var(--navy))" />
          </svg>
        </div>
      </div>
    </div>
  );
}
