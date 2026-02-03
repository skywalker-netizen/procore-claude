import { SyncBadge } from "@/components/shared/SyncBadge";
import { Quote } from "@/components/shared/Quote";
import { TradePartnerDashboard } from "@/components/infographics/TradePartnerDashboard";

interface TradePartnerSectionProps {
  variant: "procore" | "general";
}

export function TradePartnerSection({ variant }: TradePartnerSectionProps) {
  const isProcore = variant === "procore";

  return (
    <section className={`section-padding dark-section ${!isProcore ? "trade-partner-section" : ""}`}>
      <div className="section-inner grid-2">
        <div className="trade-content">
          <SyncBadge text="TRADE PARTNER MANAGEMENT" />
          <h2 className="section-title">
            {isProcore ? "Full visibility Into Every Trade." : "Full visibility Into Every Trade. Free."}
          </h2>
          <p className="section-subtitle">
            In mission-critical construction, "I didn't know the sub wasn't certified" isn't a valid excuse.
          </p>
          <div className="trade-feature">
            <div className="trade-feature-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="8.5" cy="7" r="4" />
                <line x1="20" y1="8" x2="20" y2="14" />
                <line x1="23" y1="11" x2="17" y2="11" />
              </svg>
            </div>
            <div>
              <h4>Zero Barrier Access</h4>
              <p>
                Manage your Tier 1 and Tier 2 partners without the "login tax." Onboard trades with QR codes for free.
              </p>
            </div>
          </div>
          <div className="trade-feature">
            <div className="trade-feature-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            </div>
            <div>
              <h4>Accountability</h4>
              <p>
                See orientation status, JHA submissions, and corrective actions of your contractors at the worker
                level, not just the company level.
              </p>
            </div>
          </div>
          <div className="trade-feature">
            <div className="trade-feature-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <div>
              <h4>Win - Win</h4>
              <p>
                For GCs, Salus Frictionless Contractor portal means no more compliance black hole. Meanwhile, Trades
                own their data; they keep a portable safety record that protects their EMR and their bid eligibility.
              </p>
            </div>
          </div>
        </div>
        <div className="portal-column">
          <TradePartnerDashboard />
          <Quote
            text="You could get on a plane and fly to all of these jobs to see what they actually look like, or you can create a system where people bring jobs to life in front of your eyes."
            author="Dennis Rumshas"
            title="Vice President of Safety and Risk Management, McShane Construction"
            variant="dark"
          />
        </div>
      </div>
    </section>
  );
}
