import { Headphones, UserCheck, GraduationCap } from "lucide-react";
import { SyncBadge } from "@/components/shared/SyncBadge";
import { Quote } from "@/components/shared/Quote";
import { FeatureItem } from "@/components/shared/FeatureItem";
import { TESTIMONIALS_CONTENT, TESTIMONIALS_QUOTE } from "@/config";
import type { IconColor } from "@/config/types";
import supportTeamImage from "@/assets/support-team.jpg";

const FEATURE_ICONS = [
  <Headphones size={20} />,
  <UserCheck size={20} />,
  <GraduationCap size={20} />,
];

interface TestimonialsSectionProps {
  variant?: "default" | "white";
}

export function TestimonialsSection({ variant = "default" }: TestimonialsSectionProps) {
  return (
    <section className={`section-padding testimonials-section ${variant === "white" ? "section-bg-white" : "section-bg-gray"}`}>
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
            <SyncBadge text={TESTIMONIALS_CONTENT.badge} />
          </div>
          <h2 className="section-title">
            {TESTIMONIALS_CONTENT.title} <span className="highlight">{TESTIMONIALS_CONTENT.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">{TESTIMONIALS_CONTENT.subtitle}</p>

          {TESTIMONIALS_CONTENT.features.map((feature, index) => (
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
