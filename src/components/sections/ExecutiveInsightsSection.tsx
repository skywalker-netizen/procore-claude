import { FileX, Eye, Shield, ClipboardCheck, BarChart3 } from "lucide-react";
import { SyncBadge } from "@/components/shared/SyncBadge";
import { FeatureItem } from "@/components/shared/FeatureItem";
import { Quote } from "@/components/shared/Quote";
import { AnalyticsCard } from "@/components/infographics/AnalyticsCard";
import { EXECUTIVE_INSIGHTS_CONTENT, EXECUTIVE_INSIGHTS_QUOTE, EXECUTIVE_INSIGHTS_CA_QUOTE } from "@/config";
import type { PageVariant, IconColor } from "@/config/types";

interface ExecutiveInsightsSectionProps {
  variant: PageVariant;
}

const PROCORE_ICONS = [
  <Shield size={20} />,
  <ClipboardCheck size={20} />,
  <BarChart3 size={20} />,
];

const GENERAL_ICONS = [
  <Shield size={20} />,
  <ClipboardCheck size={20} />,
  <BarChart3 size={20} />,
];

export function ExecutiveInsightsSection({ variant }: ExecutiveInsightsSectionProps) {
  const content = EXECUTIVE_INSIGHTS_CONTENT[variant];
  const isProcore = variant === "procore";
  const icons = isProcore ? PROCORE_ICONS : GENERAL_ICONS;

  return (
    <section id="compliance-reporting" className="section-padding section-bg-white" style={{ scrollMarginTop: '80px' }}>
      <div className="section-inner grid-2">
        <div className="analytics-column">
          <AnalyticsCard />
          <Quote
            text={variant === "ca" ? EXECUTIVE_INSIGHTS_CA_QUOTE.text : EXECUTIVE_INSIGHTS_QUOTE.text}
            author={variant === "ca" ? EXECUTIVE_INSIGHTS_CA_QUOTE.author : EXECUTIVE_INSIGHTS_QUOTE.author}
            title={variant === "ca" ? EXECUTIVE_INSIGHTS_CA_QUOTE.title : EXECUTIVE_INSIGHTS_QUOTE.title}
          />
        </div>
        <div>
          <SyncBadge text={content.badge} />
          <h2 className="section-title">
            {content.title}
            <br />
            <span className={isProcore ? "highlight" : "muted"}>{content.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">{content.subtitle}</p>
          
          {content.features?.map((feature, index) => (
            <FeatureItem
              key={index}
              icon={icons[index]}
              iconColor={feature.iconColor as IconColor}
              title={feature.title}
              description={feature.description}
              variant="block"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
