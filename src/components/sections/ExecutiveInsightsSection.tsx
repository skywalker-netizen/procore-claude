import { FileX, Eye, Wrench, TrendingUp } from "lucide-react";
import { SyncBadge } from "@/components/shared/SyncBadge";
import { FeatureItem } from "@/components/shared/FeatureItem";
import { Quote } from "@/components/shared/Quote";
import { AnalyticsCard } from "@/components/infographics/AnalyticsCard";

interface ExecutiveInsightsSectionProps {
  variant: "procore" | "general";
}

export function ExecutiveInsightsSection({ variant }: ExecutiveInsightsSectionProps) {
  const isProcore = variant === "procore";

  return (
    <section
      className="section-padding"
      style={{ background: isProcore ? "linear-gradient(180deg, hsl(var(--gray-100)) 0%, hsl(var(--white)) 100%)" : "hsl(var(--white))" }}
    >
      <div className="section-inner grid-2">
        <div className="analytics-column">
          <AnalyticsCard />
          <Quote
            text="GCs talk safety and will say they have a safety plan. Willmeng can now show the results of our safety initiatives to owners. That has helped us win a multitude of new jobs."
            author="Justin Itule"
            title="Field Integration Manager, Willmeng Construction"
          />
        </div>
        <div>
          <SyncBadge text={isProcore ? "EXECUTIVE-LEVEL INSIGHTS" : "COMPLIANCE & REPORTING"} />
          <h2 className="section-title">
            {isProcore ? (
              <>
                Your EMR Is a Bid Filter.
                <br />
                <span className="highlight">Treat It Like One.</span>
              </>
            ) : (
              <>
                Inspection-Ready. Audit-Proof.
                <br />
                <span className="muted">Win.</span>
              </>
            )}
          </h2>
          <p className="section-subtitle">
            {isProcore
              ? "An EMR over 1.0 doesn't just raise your premiums—it disqualifies you from the bid list. Procore keeps a record of what happened. Salus shows you why it happened and what's about to happen."
              : "In Fault-tolerant construction, compliance isn't a checkbox. It is a process. Salus proves intent against \"nuclear verdicts\" and enhances your reputation for excellence."
            }
          </p>
          <FeatureItem
            icon={<FileX size={20} />}
            iconColor="beige"
            title="No More Manual Tallies"
            description="Salus aggregates your leading indicators into high-level Risk Profiles automatically."
            variant="block"
          />
          <FeatureItem
            icon={<Eye size={20} />}
            iconColor="green"
            title="Track Leading Indicators"
            description="Spot a spike in utility-strike near-misses across your Eastern Region sites before a backhoe hits a fiber line."
            variant="block"
          />
          {!isProcore && (
            <>
              <FeatureItem
                icon={<Wrench size={20} />}
                iconColor="beige"
                title="Corrective Actions"
                description="A foreman scans a QR code on a scissor lift. SALUS instantly checks the maintenance log. If the inspection is overdue, the app flags it immediately."
                variant="block"
              />
              <FeatureItem
                icon={<TrendingUp size={20} />}
                iconColor="green"
                title="Track Leading Indicators"
                description="Spot a spike in utility-strike near-misses across your Eastern Region sites before a backhoe hits a fiber line."
                variant="block"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
