import { Database, Zap } from "lucide-react";
import { SyncBadge } from "@/components/shared/SyncBadge";
import { FeatureItem } from "@/components/shared/FeatureItem";
import { Quote } from "@/components/shared/Quote";
import { IntegrationDiagram } from "@/components/infographics/IntegrationDiagram";

export function IntegrationSection() {
  return (
    <section className="integration-section">
      <div className="integration-inner">
        <div className="integration-content">
          <SyncBadge text="SEAMLESS INTEGRATION" />
          <h2 className="integration-title">
            One Truth. <span className="highlight">Zero Excuses.</span>
          </h2>
          <p className="section-subtitle">
            You already have an "Enterprise Software." You don't need another one. With Salus native sync, Procore stays your system of record while giving the field a tool they actually love. No double entry. No shadow workflows.
          </p>
          <FeatureItem
            icon={<Database size={20} />}
            iconColor="beige"
            title="Procore as Master"
            description="All financial and project master data originates in Procore. Inspections, observations, and personnel data from Salus appear in Procore exactly where your PMs expect to find them."
            variant="block"
          />
          <FeatureItem
            icon={<Zap size={20} />}
            iconColor="blue"
            title="Salus is Procore's Field Engine"
            description="All financial and project master data originates in Procore and pushed to Salus; All field data is captured in Salus and pushed into Procore."
            variant="block"
          />
          <Quote
            text="Procore is our master solution that we use to manage all our sites. All SALUS log submissions are auto-uploaded to Procore's document section. If you're done wasting time searching, SALUS is the solution."
            author="Justin Itule"
            title="Field Integration Manager, Willmeng Construction"
          />
        </div>
        <IntegrationDiagram />
      </div>
    </section>
  );
}
