import { Heart, FileText, MessageSquare } from "lucide-react";
import { SyncBadge } from "@/components/shared/SyncBadge";
import { FeatureItem } from "@/components/shared/FeatureItem";
import { Quote } from "@/components/shared/Quote";
import { PhoneMockups } from "@/components/infographics/PhoneMockups";
import { SiteOnboardingDashboard } from "@/components/infographics/SiteOnboardingDashboard";
import { FIELD_ADVANTAGE_CONTENT, FIELD_ADVANTAGE_QUOTE, FIELD_ADVANTAGE_SITEDOCS_QUOTE } from "@/config";
import type { PageVariant, IconColor } from "@/config/types";

interface FieldAdvantageSectionProps {
  variant: PageVariant;
}

const FEATURE_ICONS = [
  <Heart size={20} />,
  <FileText size={20} />,
  <MessageSquare size={20} />,
];

export function FieldAdvantageSection({ variant }: FieldAdvantageSectionProps) {
  const content = FIELD_ADVANTAGE_CONTENT[variant];

  return (
    <section className="section-padding field-advantage-section section-bg-white">
      <div className="section-inner">
        <div className="field-advantage-grid">
          <div className="field-advantage-content">
            <SyncBadge text={content.badge} />
            <h2 className="section-title">
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
                variant={variant === "sitedocs" ? "block" : "numbered"}
                titleOnly={feature.titleOnly}
              />
            ))}

            {variant === "sitedocs" && (
              <Quote
                text={FIELD_ADVANTAGE_SITEDOCS_QUOTE.text}
                author={FIELD_ADVANTAGE_SITEDOCS_QUOTE.author}
                title={FIELD_ADVANTAGE_SITEDOCS_QUOTE.title}
                className="mt-8"
              />
            )}
          </div>

          <div className="field-advantage-mockups">
            {variant === "sitedocs" ? (
              <SiteOnboardingDashboard />
            ) : (
              <>
                <PhoneMockups />
                <Quote
                  text={FIELD_ADVANTAGE_QUOTE.text}
                  author={FIELD_ADVANTAGE_QUOTE.author}
                  title={FIELD_ADVANTAGE_QUOTE.title}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
