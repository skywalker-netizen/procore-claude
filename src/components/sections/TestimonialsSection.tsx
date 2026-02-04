import { SyncBadge } from "@/components/shared/SyncBadge";
import { Quote } from "@/components/shared/Quote";
import { TESTIMONIALS_CONTENT, TESTIMONIALS_QUOTE } from "@/config";

export function TestimonialsSection() {
  return (
    <section className="section-padding testimonials-section section-bg-gray">
      <div className="section-inner">
        <div className="two-column-grid">
          <div className="column-content">
            <SyncBadge text={TESTIMONIALS_CONTENT.badge} />
            <h2 className="section-title">
              {TESTIMONIALS_CONTENT.title} <span className="highlight">{TESTIMONIALS_CONTENT.titleHighlight}</span>
            </h2>
            <p className="section-subtitle">{TESTIMONIALS_CONTENT.subtitle}</p>
          </div>
          <div className="column-visual flex items-center justify-center">
            <Quote
              text={TESTIMONIALS_QUOTE.text}
              author={TESTIMONIALS_QUOTE.author}
              title={TESTIMONIALS_QUOTE.title}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
