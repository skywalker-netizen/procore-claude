import { Database, Zap } from "lucide-react";
import { SyncBadge } from "@/components/shared/SyncBadge";
import { FeatureItem } from "@/components/shared/FeatureItem";
import { Quote } from "@/components/shared/Quote";
import { IntegrationDiagram } from "@/components/infographics/IntegrationDiagram";
import { INTEGRATION_CONTENT, INTEGRATION_QUOTE } from "@/config";
import type { IconColor } from "@/config/types";

const FEATURE_ICONS = [
  <Database size={20} />,
  <Zap size={20} />,
];

export function IntegrationSection() {
  const content = INTEGRATION_CONTENT;

  return (
    <section id="procore-integration" className="integration-section">
      <div className="integration-inner">
        <div className="integration-content">
          <SyncBadge text={content.badge} />
          <h2 className="integration-title">
            {content.title} <span className="highlight">{content.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">{content.subtitle}</p>
          
          {content.features?.map((feature, index) => (
            <FeatureItem
              key={index}
              icon={FEATURE_ICONS[index]}
              iconColor={feature.iconColor as IconColor}
              title={feature.title}
              description={feature.description}
              variant="block"
            />
          ))}
          
          <Quote
            text={INTEGRATION_QUOTE.text}
            author={INTEGRATION_QUOTE.author}
            title={INTEGRATION_QUOTE.title}
          />
        </div>
        <IntegrationDiagram />
      </div>
    </section>
  );
}
