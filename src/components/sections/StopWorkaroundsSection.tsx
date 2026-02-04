import { ScanSearch, MessagesSquare, Zap } from "lucide-react";
import { SyncBadge } from "@/components/shared/SyncBadge";
import { FeatureItem } from "@/components/shared/FeatureItem";
import { ComplianceCoreDashboard } from "@/components/infographics/ComplianceCoreDashboard";
import { LMSDashboard } from "@/components/infographics/LMSDashboard";
import { STOP_WORKAROUNDS_CONTENT } from "@/config";
import type { PageVariant, IconColor } from "@/config/types";
import type { ReactNode } from "react";

interface StopWorkaroundsSectionProps {
  variant: PageVariant;
}

interface VariantConfig {
  icons: ReactNode[];
  infographic: "lms" | "compliance";
  showUnifiedBadge: boolean;
}

const VARIANT_CONFIG: Record<PageVariant, VariantConfig> = {
  procore: {
    icons: [<ScanSearch size={20} />, <MessagesSquare size={20} />],
    infographic: "compliance",
    showUnifiedBadge: false,
  },
  general: {
    icons: [<ScanSearch size={20} />, <MessagesSquare size={20} />, <Zap size={20} />],
    infographic: "compliance",
    showUnifiedBadge: true,
  },
  sitedocs: {
    icons: [<ScanSearch size={20} />, <MessagesSquare size={20} />, <Zap size={20} />],
    infographic: "compliance",
    showUnifiedBadge: true,
  },
  hammertech: {
    icons: [<ScanSearch size={20} />, <MessagesSquare size={20} />, <Zap size={20} />],
    infographic: "lms",
    showUnifiedBadge: false,
  },
  ca: {
    icons: [<ScanSearch size={20} />, <MessagesSquare size={20} />, <Zap size={20} />],
    infographic: "compliance",
    showUnifiedBadge: true,
  },
};

export function StopWorkaroundsSection({ variant }: StopWorkaroundsSectionProps) {
  const content = STOP_WORKAROUNDS_CONTENT[variant];
  const config = VARIANT_CONFIG[variant];

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
              icon={config.icons[index]}
              iconColor={feature.iconColor as IconColor}
              title={feature.title}
              description={feature.description}
              variant="block"
            />
          ))}
        </div>
        <div style={{ position: "relative" }}>
          {config.infographic === "lms" ? (
            <LMSDashboard />
          ) : (
            <ComplianceCoreDashboard showUnifiedBadge={config.showUnifiedBadge} />
          )}
        </div>
      </div>
    </section>
  );
}
