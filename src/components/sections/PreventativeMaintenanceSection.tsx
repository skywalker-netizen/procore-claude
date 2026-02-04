import { Wrench, TrendingUp } from "lucide-react";
import { SyncBadge } from "@/components/shared/SyncBadge";
import { FeatureItem } from "@/components/shared/FeatureItem";

export function PreventativeMaintenanceSection() {
  return (
    <section className="section-padding" style={{ background: "hsl(var(--gray-100))" }}>
      <div className="section-inner grid-2">
        <div>
          <SyncBadge text="ACTIONABLE FIELD INTELLIGENCE" />
          <h2 className="section-title">
            Intelligence from the field, for the field.
          </h2>
          <p className="section-subtitle">
            Your Crane Log Shouldn't Live in a Binder. High-Fidelity Field Intelligence helps you prevent incidents and close the accountability gaps. At the worker and asset level.
          </p>
          <FeatureItem
            icon={<Wrench size={20} />}
            iconColor="blue"
            title="Corrective Actions"
            description="A foreman scans a QR code on a scissor lift. SALUS instantly checks the maintenance log. If the inspection is overdue, the app flags it immediately."
            variant="block"
          />
          <FeatureItem
            icon={<TrendingUp size={20} />}
            iconColor="tan"
            title="Track Leading Indicators"
            description="Spot a spike in utility-strike near-misses across your Eastern Region sites before a backhoe hits a fiber line."
            variant="block"
          />
        </div>
        <div className="asset-dashboard">
          <div className="uptime-badge">
            <div className="value">99.9%</div>
            <div className="label">FLEET UPTIME</div>
          </div>
          <div className="asset-card">
            <div className="asset-card-header">
              <h4>Fleet Health Check</h4>
              <span>ASSET DASHBOARD</span>
            </div>
            <div className="asset-card-item">
              <div className="asset-card-item-header">
                <div className="asset-card-item-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                </div>
                <div className="asset-card-item-info">
                  <h5>Forklift-002</h5>
                  <span className="pending">MAINTENANCE PENDING</span>
                </div>
                <div className="asset-card-item-status">
                  <div className="label">ALERT</div>
                  <div className="value">Hydraulic hose is broken</div>
                </div>
              </div>
            </div>
            <div className="asset-card-item">
              <div className="asset-card-item-header">
                <div className="asset-card-item-info">
                  <h5>Backhoe-415</h5>
                  <span className="operational">IN OPERATION</span>
                </div>
              </div>
              <div className="asset-card-item-progress">
                <span>NEXT MAINTENANCE: 224 HOURS</span>
                <div className="bar">
                  <div className="bar-fill" style={{ width: "85%" }}></div>
                </div>
                <span>85% USAGE</span>
              </div>
            </div>
            <div className="digital-identity-card">
              <div className="icon">
                <Wrench size={24} />
              </div>
              <div>
                <h5>DIGITAL IDENTITY</h5>
                <p>Scan asset tag for instant pre-trip, maintenance logs, and operator certifications.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
