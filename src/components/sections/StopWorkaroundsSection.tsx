import { ScanSearch, MessagesSquare, Zap } from "lucide-react";
import { SyncBadge } from "@/components/shared/SyncBadge";
import { FeatureItem } from "@/components/shared/FeatureItem";
import { ComplianceCoreDashboard } from "@/components/infographics/ComplianceCoreDashboard";

interface StopWorkaroundsSectionProps {
  variant: "procore" | "general";
}

export function StopWorkaroundsSection({ variant }: StopWorkaroundsSectionProps) {
  const isProcore = variant === "procore";

  return (
    <section className="section-padding" style={{ background: "hsl(var(--gray-100))" }}>
      <div className="section-inner grid-2">
        <div>
          <SyncBadge text="STOP THE WORKAROUNDS" />
          <h2 className="section-title">
            Shatter the Silos,
            <br />
            <span className="highlight">Reduce risk.</span>
          </h2>
          <p className="section-subtitle">
            {isProcore
              ? "Certificates, assets, and training live outside of Procore. Fragmented safety data means increased risk in the field and more time chasing information."
              : "Risk lives in the gaps—the disconnect between a worker, their training, and the equipment they operate. SALUS closes that gap by connecting your LMS and Asset Management directly to the frontline worker."
            }
          </p>
          <FeatureItem
            icon={<ScanSearch size={20} />}
            iconColor="beige"
            title="Unified Platform, Zero Silos"
            description={isProcore
              ? "Centralize everything from training logs to certificates in one live hub. No more risk hidden in silos."
              : "No more dark data in excel, email, or Google. A foreman scans a QR code on a scissor lift. Salus instantly cross-references the worker's profile. If their Fall Protection cert expired yesterday, they can't sign onto the JHA."
            }
            variant="block"
          />
          <FeatureItem
            icon={<MessagesSquare size={20} />}
            iconColor="blue"
            title={isProcore ? "Two-Way Field Feedback" : "Integrated Asset Management"}
            description={isProcore
              ? "Close the gap between field reports and office repairs. Our two-way communication ensures every hazard is addressed."
              : "A foreman scans a QR code on a scissor lift. SALUS instantly checks the maintenance log. If the inspection is overdue, the app flags it immediately."
            }
            variant="block"
          />
          {!isProcore && (
            <FeatureItem
              icon={<Zap size={20} />}
              iconColor="lime"
              title="Just-in-Time Training"
              description="Use our integrated LMS to push site-specific toolbox talks based on the gear a crew is actually using that morning."
              variant="block"
            />
          )}
        </div>
        <div style={{ position: "relative" }}>
          <ComplianceCoreDashboard showUnifiedBadge={!isProcore} />
        </div>
      </div>
    </section>
  );
}
