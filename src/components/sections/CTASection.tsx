import { useState } from "react";
import { DemoForm } from "@/components/forms/DemoForm";
import { CTA_CONTENT } from "@/config";

export function CTASection() {
  const [showCtaForm, setShowCtaForm] = useState(false);

  return (
    <section className="section-padding cta-section dark-section">
      <div className="section-inner max-w-cta">
        {!showCtaForm ? (
          <>
            <h2 className="cta-title">
              {CTA_CONTENT.title}
              <br />
              <span className="highlight">{CTA_CONTENT.titleHighlight}</span>
            </h2>
            <p className="cta-description">{CTA_CONTENT.description}</p>
            <button onClick={() => setShowCtaForm(true)} className="btn btn-lime">
              {CTA_CONTENT.buttonText}
            </button>
          </>
        ) : (
          <DemoForm variant="cta" style={{ margin: "0 auto" }} />
        )}
      </div>
    </section>
  );
}
