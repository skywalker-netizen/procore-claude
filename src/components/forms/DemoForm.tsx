import { Check } from "lucide-react";
import { useDemoForm } from "./useDemoForm";

interface DemoFormProps {
  variant?: "hero" | "cta";
  className?: string;
  style?: React.CSSProperties;
}

export function DemoForm({ variant = "hero", className = "", style }: DemoFormProps) {
  const { formData, handleInputChange, handleSubmit, isLoading, isSubmitted } = useDemoForm();

  return (
    <div className={`demo-card ${className}`} style={style}>
      {isSubmitted ? (
        <div className="thank-you-screen">
          <div className="thank-you-icon">
            <Check size={48} strokeWidth={2.5} />
          </div>
          <h2>Thank You!</h2>
          <p className="thank-you-message">
            Your demo request has been received. We'll be in touch shortly to schedule your personalized
            integration demo.
          </p>
          <p className="form-footer">
            Join leaders like <a href="#">McFarland</a> and <a href="#">Electric Plus</a> who trust SALUS to
            capture field data for their Procore instance.
          </p>
        </div>
      ) : (
        <>
          <h2>See Salus in action.</h2>
          <p className="subtitle">BOOK YOUR PERSONALIZED INTEGRATION DEMO</p>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>
                  First Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="form-group">
                <label>
                  Last Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label>
                Company <span className="required">*</span>
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Your company name"
                required
              />
            </div>
            <div className="form-group">
              <label>
                Work Email <span className="required">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="email@company.com"
                required
              />
            </div>
            <div className="form-group">
              <label>
                Phone Number <span className="required">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+1 (555) 123-4567"
                required
              />
            </div>
            <button type="submit" className="btn-submit" disabled={isLoading}>
              {isLoading ? "Sending..." : "Request Demo"}
              {!isLoading && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              )}
            </button>
          </form>
          <p className="form-footer">
            Join leaders like <a href="#">McFarland</a> and <a href="#">Electric Plus</a> who trust SALUS to
            capture field data for their Procore instance.
          </p>
        </>
      )}
    </div>
  );
}
