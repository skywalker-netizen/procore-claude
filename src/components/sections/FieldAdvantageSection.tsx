import { Heart, FileText, MessageSquare } from "lucide-react";
import { SyncBadge } from "@/components/shared/SyncBadge";
import { FeatureItem } from "@/components/shared/FeatureItem";
import { Quote } from "@/components/shared/Quote";
import { PhoneMockups } from "@/components/infographics/PhoneMockups";
import { SiteOnboardingDashboard } from "@/components/infographics/SiteOnboardingDashboard";
import { FIELD_ADVANTAGE_CONTENT, FIELD_ADVANTAGE_QUOTE, FIELD_ADVANTAGE_SITEDOCS_QUOTE, FIELD_ADVANTAGE_CA_QUOTE } from "@/config";
import type { PageVariant, IconColor } from "@/config/types";

interface FieldAdvantageSectionProps {
  variant: PageVariant;
}

interface VariantConfig {
  bgClass: string;
  featureStyle: "block" | "numbered";
  infographic: "qr" | "phones";
  showContentQuote: boolean;
}

const VARIANT_CONFIG: Record<PageVariant, VariantConfig> = {
  procore: {
    bgClass: "section-bg-white",
    featureStyle: "numbered",
    infographic: "phones",
    showContentQuote: false,
  },
  general: {
    bgClass: "section-bg-white",
    featureStyle: "numbered",
    infographic: "phones",
    showContentQuote: false,
  },
  sitedocs: {
    bgClass: "section-bg-gray",
    featureStyle: "block",
    infographic: "qr",
    showContentQuote: true,
  },
  hammertech: {
    bgClass: "section-bg-gray",
    featureStyle: "block",
    infographic: "qr",
    showContentQuote: true,
  },
  ca: {
    bgClass: "section-bg-white",
    featureStyle: "numbered",
    infographic: "phones",
    showContentQuote: false,
  },
  ecompliance: {
    bgClass: "section-bg-gray",
    featureStyle: "block",
    infographic: "qr",
    showContentQuote: true,
  },
};

const FEATURE_ICONS = [
  <Heart size={20} />,
  <FileText size={20} />,
  <MessageSquare size={20} />,
];

export function FieldAdvantageSection({ variant }: FieldAdvantageSectionProps) {
  const content = FIELD_ADVANTAGE_CONTENT[variant];
  const config = VARIANT_CONFIG[variant];

  return (
    <section id="field-advantage" className={`section-padding field-advantage-section ${config.bgClass}`}>
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
                variant={config.featureStyle}
                titleOnly={feature.titleOnly}
              />
            ))}

            {config.showContentQuote && (
              <Quote
                text={FIELD_ADVANTAGE_SITEDOCS_QUOTE.text}
                author={FIELD_ADVANTAGE_SITEDOCS_QUOTE.author}
                title={FIELD_ADVANTAGE_SITEDOCS_QUOTE.title}
                className="mt-8"
              />
            )}
          </div>

          <div className="field-advantage-mockups">
            {config.infographic === "qr" ? (
              <SiteOnboardingDashboard />
            ) : (
              <>
                <PhoneMockups />
                <Quote
                  text={variant === "ca" ? FIELD_ADVANTAGE_CA_QUOTE.text : FIELD_ADVANTAGE_QUOTE.text}
                  author={variant === "ca" ? FIELD_ADVANTAGE_CA_QUOTE.author : FIELD_ADVANTAGE_QUOTE.author}
                  title={variant === "ca" ? FIELD_ADVANTAGE_CA_QUOTE.title : FIELD_ADVANTAGE_QUOTE.title}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
