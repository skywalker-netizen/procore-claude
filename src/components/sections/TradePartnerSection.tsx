import { SyncBadge } from "@/components/shared/SyncBadge";
import { Quote } from "@/components/shared/Quote";
import { TradePartnerDashboard } from "@/components/infographics/TradePartnerDashboard";
import { UserPlus, QrCode, ClipboardCheck, Handshake } from "lucide-react";

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
          <h2 className="section-title trade-title">
            {isProcore ? "Full visibility Into Every Trade." : "Full visibility Into Every Trade. Free."}
          </h2>
          <p className="section-subtitle">
            In mission-critical construction, "I didn't know the sub wasn't certified" isn't a valid excuse.
          </p>
          <div className="trade-feature">
            <div className="trade-feature-icon">
              <UserPlus size={20} strokeWidth={2} />
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
              <QrCode size={20} strokeWidth={2} />
            </div>
            <div>
              <h4>QR Code Onboarding</h4>
              <p>
                Workers can join a project site by simply scanning a QR code with their mobile device. They are immediately connected to the site-specific safety plan and required forms.
              </p>
            </div>
          </div>
          <div className="trade-feature">
            <div className="trade-feature-icon">
              <ClipboardCheck size={20} strokeWidth={2} />
            </div>
            <div>
              <h4>Accountability</h4>
              <p>
                See orientation status, JHA submissions, and corrective actions of your contractors at the worker level, not just the company level.
              </p>
            </div>
          </div>
          <div className="trade-feature">
            <div className="trade-feature-icon">
              <Handshake size={20} strokeWidth={2} />
            </div>
            <div>
              <h4>Win - Win</h4>
              <p>
                For GCs, Salus Frictionless Contractor portal means no more compliance black hole. Meanwhile, Trades own their data; they keep a portable safety record that protects their EMR and their bid eligibility.
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
