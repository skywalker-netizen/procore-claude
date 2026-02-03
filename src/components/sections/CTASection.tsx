import { useState } from "react";
import { DemoForm } from "@/components/forms/DemoForm";

export function CTASection() {
  const [showCtaForm, setShowCtaForm] = useState(false);

  return (
    <section className="section-padding cta-section dark-section">
      <div className="section-inner" style={{ maxWidth: "600px" }}>
        {!showCtaForm ? (
          <>
            <h2 className="cta-title">
              See Salus
              <br />
              <span className="highlight">in Action.</span>
            </h2>
            <p className="cta-description">
              Schedule a live walkthrough to see how SALUS talks to your Procore instance in real-time.
            </p>
            <button onClick={() => setShowCtaForm(true)} className="btn btn-lime">
              Book Your Demo
            </button>
          </>
        ) : (
          <DemoForm variant="cta" style={{ margin: "0 auto" }} />
        )}
      </div>
    </section>
  );
}
