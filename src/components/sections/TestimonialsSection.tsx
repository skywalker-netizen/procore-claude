import { Headphones, UserCheck, GraduationCap } from "lucide-react";
import { SyncBadge } from "@/components/shared/SyncBadge";
import { Quote } from "@/components/shared/Quote";
import { FeatureItem } from "@/components/shared/FeatureItem";
import { getTestimonialsContent, TESTIMONIALS_QUOTE } from "@/config";
import type { IconColor, PageVariant } from "@/config/types";
import supportTeamImage from "@/assets/support-team.jpg";

const FEATURE_ICONS = [
  <Headphones size={20} />,
  <UserCheck size={20} />,
  <GraduationCap size={20} />,
];

interface TestimonialsSectionProps {
  variant?: PageVariant;
  bgVariant?: "default" | "white";
}

export function TestimonialsSection({ variant, bgVariant = "default" }: TestimonialsSectionProps) {
  const content = getTestimonialsContent(variant);
  
  return (
    <section className={`section-padding testimonials-section ${bgVariant === "white" ? "section-bg-white" : "section-bg-gray"}`}>
      <div className="section-inner grid-2 testimonials-grid">
        <div className="support-visual-column">
          <img 
            src={supportTeamImage} 
            alt="Construction team collaborating on safety" 
            className="support-image"
          />
          <Quote
            text={TESTIMONIALS_QUOTE.text}
            author={TESTIMONIALS_QUOTE.author}
            title={TESTIMONIALS_QUOTE.title}
          />
        </div>
        <div className="support-content">
          <div className="w-fit">
            <SyncBadge text={content.badge} />
          </div>
          <h2 className="section-title">
            {content.title} <span className="highlight">{content.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">{content.subtitle}</p>

          {content.features.map((feature, index) => (
            <FeatureItem
              key={index}
              icon={FEATURE_ICONS[index]}
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
