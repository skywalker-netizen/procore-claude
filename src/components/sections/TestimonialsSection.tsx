import { SyncBadge } from "@/components/shared/SyncBadge";

const testimonials = [
  {
    text: "SALUS is the perfect marriage of both usability and capability. It has really great features for us as admin, but it's simple for my crews to use out in the field, too.",
    author: "Health & Safety Manager",
    company: "O'CONNOR ELECTRIC",
    isDark: false,
  },
  {
    text: "Before SALUS, we were tracking safety data across 14 different systems—Excel, SharePoint, SiteDocs, you name it. It was unmanageable. Moving to SALUS didn't just digitize us; it unified us.",
    author: "Robert Clark, VP of Safety",
    company: "UNIVERSAL GROUP",
    isDark: true,
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding testimonials-section" style={{ background: "hsl(var(--gray-100))" }}>
      <div className="section-inner">
        <SyncBadge text="CUSTOMER SUCCESS" />
        <p className="section-subtitle">
          Join 1,200+ companies that have abandoned digital paper for intelligent field safety.
        </p>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
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
