import { SyncBadge } from "@/components/shared/SyncBadge";
import { TESTIMONIALS_CONTENT, TESTIMONIALS } from "@/config";

export function TestimonialsSection() {
  return (
    <section className="section-padding testimonials-section section-bg-gray">
      <div className="section-inner">
        <SyncBadge text={TESTIMONIALS_CONTENT.badge} />
        <p className="section-subtitle">{TESTIMONIALS_CONTENT.subtitle}</p>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className={`testimonial-card ${testimonial.isDark ? "dark" : ""}`}>
              {!testimonial.isDark && <div className="testimonial-quote">"</div>}
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <h5>{testimonial.author}</h5>
                <span>{testimonial.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
