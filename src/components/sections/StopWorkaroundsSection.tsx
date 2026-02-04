import { ScanSearch, MessagesSquare, Zap } from "lucide-react";
import { SyncBadge } from "@/components/shared/SyncBadge";
import { FeatureItem } from "@/components/shared/FeatureItem";
import { ComplianceCoreDashboard } from "@/components/infographics/ComplianceCoreDashboard";
import { STOP_WORKAROUNDS_CONTENT } from "@/config";
import type { PageVariant, IconColor } from "@/config/types";

interface StopWorkaroundsSectionProps {
  variant: PageVariant;
}

const PROCORE_ICONS = [
  <ScanSearch size={20} />,
  <MessagesSquare size={20} />,
];

const GENERAL_ICONS = [
  <ScanSearch size={20} />,
  <MessagesSquare size={20} />,
  <Zap size={20} />,
];

export function StopWorkaroundsSection({ variant }: StopWorkaroundsSectionProps) {
  const content = STOP_WORKAROUNDS_CONTENT[variant];
  const isProcore = variant === "procore";
  const icons = isProcore ? PROCORE_ICONS : GENERAL_ICONS;

  return (
    <section className="section-padding section-bg-gray">
      <div className="section-inner grid-2">
        <div>
          <SyncBadge text={content.badge} />
          <h2 className="section-title">
            {content.title}
            <br />
            <span className="highlight">{content.titleHighlight}</span>
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
        <div style={{ position: "relative" }}>
          <ComplianceCoreDashboard showUnifiedBadge={!isProcore} />
        </div>
      </div>
    </section>
  );
}
