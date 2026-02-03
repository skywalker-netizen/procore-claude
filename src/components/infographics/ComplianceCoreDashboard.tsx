import { UserCheck, Settings, Check, Zap } from "lucide-react";
import salusShieldLogo from "@/assets/salus-shield-logo.png";

interface ComplianceCoreDashboardProps {
  showUnifiedBadge?: boolean;
}

export function ComplianceCoreDashboard({ showUnifiedBadge = true }: ComplianceCoreDashboardProps) {
  return (
    <>
      <div className="compliance-core-card">
        {/* Header */}
        <div className="compliance-core-header">
          <div className="compliance-core-brand">
            <div className="compliance-core-logo">
              <img src={salusShieldLogo} alt="Salus" />
            </div>
            <div className="compliance-core-title-group">
              <h3 className="compliance-core-title">Compliance Core</h3>
              <div className="live-feed-indicator">
                <span className="live-dot"></span>
                LIVE FEED ACTIVE
              </div>
            </div>
          </div>
          <div className="risk-score-display">
            <span className="risk-score-label">TOTAL RISK SCORE</span>
            <span className="risk-score-value">Minimal</span>
          </div>
        </div>

        <div className="compliance-core-divider"></div>

        {/* Main Grid */}
        <div className="compliance-core-grid">
          {/* Worker Certs Card */}
          <div className="cc-widget cc-worker-certs">
            <div className="cc-widget-header">
              <div className="cc-widget-icon">
                <UserCheck size={16} />
              </div>
              <span className="cc-widget-title">
                WORKER
                <br />
                CERTS
              </span>
              <span className="cc-widget-date">
                AUG
                <br />
                2024
              </span>
            </div>
            <div className="cc-worker-list">
              <div className="cc-worker-item">
                <div className="cc-worker-avatar">M</div>
                <div className="cc-worker-info">
                  <span className="cc-worker-name">Marcus T.</span>
                  <span className="cc-worker-cert">FALL PROTECTION</span>
                </div>
                <div className="cc-status-dot blue"></div>
              </div>
              <div className="cc-worker-item">
                <div className="cc-worker-avatar">E</div>
                <div className="cc-worker-info">
                  <span className="cc-worker-name">Elena G.</span>
                  <span className="cc-worker-cert">CONFINED SPACE</span>
                </div>
                <div className="cc-status-dot green"></div>
              </div>
              <div className="cc-worker-item">
                <div className="cc-worker-avatar">S</div>
                <div className="cc-worker-info">
                  <span className="cc-worker-name">Sarah K.</span>
                  <span className="cc-worker-cert">AERIAL LIFT</span>
                </div>
                <div className="cc-status-dot orange"></div>
              </div>
            </div>
          </div>

          {/* Asset Health Card */}
          <div className="cc-widget cc-asset-health">
            <div className="cc-widget-header">
              <div className="cc-widget-icon blue">
                <Settings size={16} />
              </div>
              <span className="cc-widget-title">ASSET HEALTH</span>
            </div>
            <div className="cc-asset-list">
              <div className="cc-asset-item">
                <span className="cc-asset-name">Crane-A12</span>
                <div className="cc-asset-bar-wrap">
                  <div className="cc-asset-bar">
                    <div className="cc-asset-bar-fill green" style={{ width: "92%" }}></div>
                  </div>
                  <span className="cc-asset-percent green">92%</span>
                </div>
              </div>
              <div className="cc-asset-item">
                <span className="cc-asset-name">Excavator-04</span>
                <div className="cc-asset-bar-wrap">
                  <div className="cc-asset-bar">
                    <div className="cc-asset-bar-fill orange" style={{ width: "40%" }}></div>
                  </div>
                  <span className="cc-asset-percent orange">40%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Corrective Actions */}
        <div className="cc-corrective-section">
          <div className="cc-corrective-header">
            <div className="cc-corrective-title">
              <div className="cc-corrective-icon">
                <Check size={14} />
              </div>
              <span>CORRECTIVE ACTIONS</span>
            </div>
            <span className="cc-resolution-rate">RESOLUTION RATE: 98%</span>
          </div>
          <div className="cc-corrective-grid">
            <div className="cc-corrective-item">
              <div className="cc-corrective-avatar">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
                  alt="James R."
                />
              </div>
              <div className="cc-corrective-info">
                <span className="cc-corrective-name">James R.</span>
                <div className="cc-corrective-issue-wrap">
                  <span className="cc-corrective-issue">MISSING GUARDRAIL</span>
                  <span className="cc-badge pending">PENDING</span>
                </div>
              </div>
            </div>
            <div className="cc-corrective-item resolved">
              <div className="cc-corrective-check">
                <Check size={16} />
              </div>
              <div className="cc-corrective-info">
                <span className="cc-corrective-name">Sarah W.</span>
                <div className="cc-corrective-issue-wrap">
                  <span className="cc-corrective-issue">PPE RE-ISSUE</span>
                  <span className="cc-badge resolved">RESOLVED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showUnifiedBadge && (
        <div className="unified-advantage-badge">
          <div className="unified-advantage-icon">
            <Zap size={20} fill="currentColor" />
          </div>
          <div className="unified-advantage-text">
            <span>UNIFIED ADVANTAGE</span>
            <strong>Zero Blindspots.</strong>
          </div>
        </div>
      )}
    </>
  );
}
