import { Check, ArrowLeft } from "lucide-react";
import { useDemoForm, COMPANY_SIZE_OPTIONS, SAFETY_MANAGEMENT_OPTIONS } from "./useDemoForm";

interface DemoFormProps {
  variant?: "hero" | "cta";
  className?: string;
  style?: React.CSSProperties;
}

export function DemoForm({ variant = "hero", className = "", style }: DemoFormProps) {
  const {
    formData,
    qualificationData,
    handleInputChange,
    handleQualificationSelect,
    handleNextStep,
    handleBackStep,
    handleSubmit,
    isLoading,
    step,
    errors,
    qualificationErrors,
  } = useDemoForm();

  return (
    <div className={`demo-card ${className}`} style={style}>
      {step === "submitted" ? (
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
            Join leaders like McFarland and Electric Plus who trust SALUS to
            capture field data for their Procore instance.
          </p>
        </div>
      ) : step === "qualification" ? (
        <>
          <h2>See SALUS in action.</h2>
          <p className="subtitle">BOOK YOUR PERSONALIZED INTEGRATION DEMO</p>
          <div className="qualification-form">
            <div className="form-group">
              <label>
                How many workers in your company? <span className="required">*</span>
              </label>
              <div className="option-pills">
                {COMPANY_SIZE_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={`option-pill ${qualificationData.companySize === option.value ? "selected" : ""}`}
                    onClick={() => handleQualificationSelect("companySize", option.value)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              {qualificationErrors.companySize && (
                <span className="error-message">{qualificationErrors.companySize}</span>
              )}
            </div>
            <div className="form-group">
              <label>
                How are you managing safety today? <span className="required">*</span>
              </label>
              <div className="option-pills">
                {SAFETY_MANAGEMENT_OPTIONS.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={`option-pill ${qualificationData.safetyManagement === option ? "selected" : ""}`}
                    onClick={() => handleQualificationSelect("safetyManagement", option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {qualificationErrors.safetyManagement && (
                <span className="error-message">{qualificationErrors.safetyManagement}</span>
              )}
            </div>
            <button type="button" className="btn-submit" onClick={handleNextStep}>
              Next
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
          <p className="form-footer">
            Join leaders like McFarland and Electric Plus who trust SALUS to
            capture field data for their Procore instance.
          </p>
        </>
      ) : (
        <>
          <button type="button" className="back-button" onClick={handleBackStep}>
            <ArrowLeft size={16} />
            Back
          </button>
          <h2>Almost there!</h2>
          <p className="subtitle">TELL US ABOUT YOURSELF</p>
          <form onSubmit={handleSubmit} noValidate>
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
                  className={errors.firstName ? "has-error" : ""}
                />
                {errors.firstName && <span className="error-message">{errors.firstName}</span>}
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
                  className={errors.lastName ? "has-error" : ""}
                />
                {errors.lastName && <span className="error-message">{errors.lastName}</span>}
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
                className={errors.company ? "has-error" : ""}
              />
              {errors.company && <span className="error-message">{errors.company}</span>}
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
                className={errors.email ? "has-error" : ""}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
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
                className={errors.phone ? "has-error" : ""}
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>
            <input type="hidden" name="gclid" value={formData.gclid} />
            <input type="hidden" name="li_fat_id" value={formData.li_fat_id} />
            <input type="hidden" name="gbraid" value={formData.gbraid} />
            <input type="hidden" name="fbclkid" value={formData.fbclkid} />
            <input type="hidden" name="msclid" value={formData.msclid} />
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
            Join leaders like McFarland and Electric Plus who trust SALUS to
            capture field data for their Procore instance.
          </p>
        </>
      )}
    </div>
  );
}
