import { useState, useEffect } from "react";
import {
  Link,
  Zap,
  LayoutGrid,
  MessageSquare,
  FileText,
  Clock,
  Grid3X3,
  Bell,
  User,
  UserCheck,
  Wrench,
  Check,
  Eye,
  FileX,
  Settings,
  ScanSearch,
  MessagesSquare,
  Database,
  Heart,
  Star,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import salusLogo from "@/assets/salus-logo.png";
import salusShieldLogo from "@/assets/salus-shield-logo.png";

// Company logos
import kearCivilLogo from "@/assets/logos/kear-civil.png";
import caliberConcreteLogo from "@/assets/logos/caliber-concrete.avif";
import titanElectricalLogo from "@/assets/logos/titan-electrical.png";
import electricPlusLogo from "@/assets/logos/electric-plus.webp";
import mcfarlandLogo from "@/assets/logos/mcfarland.png";
import tunistaLogo from "@/assets/logos/tunista.png";
import turnerLogo from "@/assets/logos/turner.png";
import generalEnergyLogo from "@/assets/logos/general-energy-2.svg";
import g2Logo from "@/assets/logos/g2-logo.svg";
import willmengLogo from "@/assets/logos/willmeng.png";

const ZAPIER_WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/19065622/ulrzdge/";

const Index = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showCtaForm, setShowCtaForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    utm_source: "",
    utm_campaign: "",
    utm_medium: "",
    utm_term: "",
  });

  // Capture UTM parameters on mount - use fixed values except utm_term from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setFormData((prev) => ({
      ...prev,
      utm_source: "adwords",
      utm_campaign: "procore",
      utm_medium: "ppc",
      utm_term: params.get("utm_term") || "",
    }));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.company || !formData.email || !formData.phone) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      await fetch(ZAPIER_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          "First Name": formData.firstName,
          "Last Name": formData.lastName,
          "Company": formData.company,
          "Work email": formData.email,
          "Phone number": formData.phone,
          "utm_source": formData.utm_source,
          "utm_campaign": formData.utm_campaign,
          "utm_medium": formData.utm_medium,
          "utm_term": formData.utm_term,
        }),
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to submit the form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <a href="#" className="logo">
            <img src={salusLogo} alt="Salus" className="logo-image" />
          </a>
          <nav className="nav">
            <a href="#demo-form" className="btn btn-primary">
              BOOK A DEMO
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div>
            <div className="badge">
              <span className="badge-dot"></span>SYNCED WITH THE FIELD
            </div>
            <h1 className="hero-title">
              The Best Field Engine
              <br />
              for your Procore
              <br />
              <span className="highlight">Brain.</span>
            </h1>
            <p className="hero-subtitle">
              Your Procore dashboard says "compliant." But its safety module? <em>Field teams call it "click hell."</em> Forms get pencil-whipped. Field Data goes to Procore to die.
            </p>
            <p className="hero-description">
              Your System of Record is only as good as your System of Reality. SALUS feeds Procore with a live feed of high-fidelity field intelligence, ensuring your mission-critical delivery stays on track and out of the headlines. Zero Incidents. Zero Downtime. Zero Blindspots.
            </p>
            <div className="trust-badges">
              <div className="trust-badge">
                <div className="trust-icon navy">
                  <Link size={22} strokeWidth={2.5} />
                </div>
                <div className="trust-text">
                  <strong>Certified App</strong>
                  <span>PROCORE MARKETPLACE</span>
                </div>
              </div>
              <div className="trust-badge">
                <div className="trust-icon lime">
                  <Zap size={22} strokeWidth={2.5} fill="currentColor" />
                </div>
                <div className="trust-text">
                  <strong>Real-time Sync</strong>
                  <span>BI-DIRECTIONAL API</span>
                </div>
              </div>
            </div>
            
            {/* G2 Badge */}
            <div className="hero-proof-section">
              <div className="g2-badge">
                <img src={g2Logo} alt="G2" className="g2-logo" />
                <div className="stars">
                  <Star size={16} fill="#F5A623" stroke="#F5A623" />
                  <Star size={16} fill="#F5A623" stroke="#F5A623" />
                  <Star size={16} fill="#F5A623" stroke="#F5A623" />
                  <Star size={16} fill="#F5A623" stroke="#F5A623" />
                  <Star size={16} fill="#F5A623" stroke="#F5A623" />
                </div>
                <span className="rating-text">4.8 stars</span>
              </div>
            </div>
          </div>
          <div id="demo-form" className="demo-card">
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
                  Join leaders like <a href="#">McFarland</a> and <a href="#">Electric Plus</a> who trust SALUS to capture field data for their Procore instance.
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
                  Join leaders like <a href="#">McFarland</a> and <a href="#">Electric Plus</a> who trust SALUS to capture field data for their Procore instance.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="social-proof-section">
        <div className="social-proof-inner">
          <h3 className="social-proof-title">Leaders use Procore + Salus</h3>
          <div className="social-proof-logos">
            <img src={turnerLogo} alt="Turner Construction" />
            <img src={mcfarlandLogo} alt="McFarland Construction" />
            <img src={kearCivilLogo} alt="Kear Civil" />
            <img src={titanElectricalLogo} alt="Titan Electrical Services" />
            <img src={caliberConcreteLogo} alt="Caliber Concrete" />
            <img src={electricPlusLogo} alt="Electric Plus" style={{ height: '48px' }} />
            <img src={tunistaLogo} alt="Tunista Construction" className="logo-small-row" />
            <img src={generalEnergyLogo} alt="General Energy" className="invert-logo logo-small-row" />
            <img src={willmengLogo} alt="Willmeng Construction" />
          </div>
          <div className="social-proof-stats">
            <div className="social-proof-stat">
              <span className="stat-number">70,000+</span>
              <span className="stat-label">Projects Globally</span>
            </div>
            <div className="social-proof-stat">
              <span className="stat-number">250,000+</span>
              <span className="stat-label">Field Level Users</span>
            </div>
            <div className="social-proof-stat">
              <span className="stat-number">9,100+</span>
              <span className="stat-label">Companies Protected</span>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="integration-section">
        <div className="integration-inner">
          <div className="integration-content">
            <div className="badge">
              <span className="badge-dot"></span>SEAMLESS INTEGRATION
            </div>
            <h2 className="integration-title">
              Two Systems. One Truth. <span className="highlight">Zero Excuses.</span>
            </h2>
            <p className="section-subtitle">
              Deep native sync means Procore stays your system of record. No double entry. No shadow workflows. Inspections, observations, and personnel data appear exactly where your PMs expect to find them. We don't just "link" to Procore; we inhabit it.
            </p>
            <div className="feature-item">
              <div className="feature-icon circle beige">
                <Database size={20} />
              </div>
              <div className="feature-text">
                <h4>Procore as Master</h4>
                <p>All financial and project master data originates in Procore.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon circle blue">
                <Zap size={20} />
              </div>
              <div className="feature-text">
                <h4>Salus is Procore's Field Engine</h4>
                <p>
                  All financial and project master data originates in Procore and pushed to Salus; All field data is
                  captured in Salus and pushed into Procore.
                </p>
              </div>
            </div>
            <div className="executive-quote">
              <blockquote>
                "Procore is our master solution that we use to manage all our sites. All SALUS log submissions are auto-uploaded to Procore's document section. If you're done wasting time searching, SALUS is the solution."
              </blockquote>
              <cite>
                <strong>Justin Itule</strong>, Field Integration Manager, Willmeng Construction
              </cite>
            </div>
          </div>
          <div className="integration-diagram">
            <div className="diagram-header">
              <div className="diagram-brand">
                <span>PROCORE</span>
                <div className="brand-icon procore">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 4L4 8l8 4 8-4-8-4z" fill="white" />
                    <path d="M12 12l8 4v-4l-8-4-8 4v4l8-4z" fill="white" fillOpacity="0.7" />
                  </svg>
                </div>
                <small>SYSTEM OF RECORD</small>
              </div>
              <div className="diagram-brand">
                <span>SALUS</span>
                <div className="brand-icon salus">
                  <img src={salusShieldLogo} alt="Salus" style={{ width: 28, height: 28, objectFit: "contain" }} />
                </div>
                <small>FIELD ENGINE</small>
              </div>
            </div>
            <div className="diagram-rows">
              <div className="diagram-row">
                <div className="diagram-item left">Projects</div>
                <div className="diagram-connector blue">
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                <div className="diagram-item right blue">Auto-Creation</div>
              </div>
              <div className="diagram-row">
                <div className="diagram-item left">Documents</div>
                <div className="diagram-connector orange">
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                <div className="diagram-item right orange">Signed Forms</div>
              </div>
              <div className="diagram-row">
                <div className="diagram-item left">Manpower</div>
                <div className="diagram-connector lime">
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                <div className="diagram-item right lime">Headcount Sync</div>
              </div>
              <div className="diagram-row">
                <div className="diagram-item left">Photos</div>
                <div className="diagram-connector yellow">
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                <div className="diagram-item right yellow">Hazard Visuals</div>
              </div>
              <div className="diagram-row">
                <div className="diagram-item left">Tasks</div>
                <div className="diagram-connector red">
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                <div className="diagram-item right red">Issue Tracking</div>
              </div>
            </div>
            <div className="data-health-badge">
              <div className="icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 2v6h-6" />
                  <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
                  <path d="M3 22v-6h6" />
                  <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
                </svg>
              </div>
              <div className="text">
                <span>CONTINUOUS</span>
                <strong>Data Health</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Platform Section */}
      {/* Field Advantage Section */}
      <section className="section-padding" style={{ background: "hsl(var(--white))" }}>
        <div className="section-inner grid-2">
          <div className="field-advantage-column">
            <div className="phone-comparison-wrapper">
              <div className="phone-comparison">
            <div className="phone-wrapper">
              <div className="phone-label procore">PROCORE STATIC PDF</div>
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="pdf-mockup-full">
                    <div className="pdf-status-bar">
                      <span>9:41</span>
                      <span className="pdf-status-icons">📶 🔋</span>
                    </div>
                    <div className="pdf-toolbar">
                      <span className="pdf-close">✕</span>
                      <span className="pdf-title">Safety_Inspection.pdf</span>
                      <span className="pdf-share">↗</span>
                    </div>
                    <div className="pdf-document">
                      <div className="pdf-form-content">
                        <div className="pdf-form-header">SAFETY INSPECTION FORM</div>
                        <div className="pdf-form-row">
                          <span className="pdf-label">Date:</span>
                          <span className="pdf-input-line"></span>
                        </div>
                        <div className="pdf-form-row">
                          <span className="pdf-label">Inspector:</span>
                          <span className="pdf-input-line"></span>
                        </div>
                        <div className="pdf-form-row">
                          <span className="pdf-label">Location:</span>
                          <span className="pdf-input-line"></span>
                        </div>
                        <div className="pdf-section-title">1. Personal Protective Equipment</div>
                        <div className="pdf-checkbox-row">
                          <span className="pdf-checkbox"></span>
                          <span className="pdf-checkbox-label">Hard hats worn</span>
                        </div>
                        <div className="pdf-checkbox-row">
                          <span className="pdf-checkbox"></span>
                          <span className="pdf-checkbox-label">Safety glasses</span>
                        </div>
                        <div className="pdf-checkbox-row">
                          <span className="pdf-checkbox"></span>
                          <span className="pdf-checkbox-label">High-vis vests</span>
                        </div>
                        <div className="pdf-section-title">2. Fall Protection</div>
                        <div className="pdf-checkbox-row">
                          <span className="pdf-checkbox"></span>
                          <span className="pdf-checkbox-label">Guardrails in place</span>
                        </div>
                        <div className="pdf-checkbox-row">
                          <span className="pdf-checkbox"></span>
                          <span className="pdf-checkbox-label">Harnesses used</span>
                        </div>
                        <div className="pdf-section-title">3. Equipment Status</div>
                        <div className="pdf-checkbox-row">
                          <span className="pdf-checkbox"></span>
                          <span className="pdf-checkbox-label">All equipment tagged</span>
                        </div>
                        <div className="pdf-form-row">
                          <span className="pdf-label">Notes:</span>
                        </div>
                        <div className="pdf-notes-area"></div>
                        <div className="pdf-form-row">
                          <span className="pdf-label">Signature:</span>
                          <span className="pdf-input-line"></span>
                        </div>
                      </div>
                    </div>
                    <div className="pdf-zoom-overlay">
                      <div className="pdf-zoom-icon">🔍</div>
                      <span>PINCH TO ZOOM REQUIRED</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="phone-wrapper">
              <div className="phone-label salus">SALUS SMART FORM</div>
              <div className="phone-mockup">
                <div className="phone-screen dark">
                  <div className="smart-form-animated">
                    <div className="smart-form-status-bar">
                      <span>11:57</span>
                      <span>📶 🔋 68%</span>
                    </div>
                    <div className="smart-form-scroll-container">
                      <div className="smart-form-scroll-content">
                        {/* Step 1: Form Title */}
                        <div className="sf-step sf-step-1">
                          <div className="sf-card">
                            <div className="sf-card-header">
                              <h5>TCP/LCT FLRA</h5>
                              <span className="sf-subtitle">Risk Assessment Form</span>
                            </div>
                          </div>
                        </div>

                        {/* Step 2: Question appears */}
                        <div className="sf-step sf-step-2">
                          <div className="sf-question">
                            <label>Type of Roadway/Work</label>
                            <div className="sf-required">REQUIRED</div>
                          </div>
                        </div>

                        {/* Step 3: Options appear */}
                        <div className="sf-step sf-step-3">
                          <div className="sf-options">
                            <div className="sf-option">2-Lane, 2 Way Roadway</div>
                            <div className="sf-option">Multilane Undivided</div>
                            <div className="sf-option selected">Multilane Divided Roadway</div>
                          </div>
                        </div>

                        {/* Step 4: Follow-up question */}
                        <div className="sf-step sf-step-4">
                          <div className="sf-question">
                            <label>Speed Limit (km/h)</label>
                          </div>
                          <div className="sf-options">
                            <div className="sf-option selected">60+</div>
                            <div className="sf-option">40-60</div>
                            <div className="sf-option">Under 40</div>
                          </div>
                        </div>

                        {/* Step 5: Risk calculation */}
                        <div className="sf-step sf-step-5">
                          <div className="sf-risk-result">
                            <div className="sf-risk-label">CALCULATED RISK LEVEL</div>
                            <div className="sf-risk-value high">HIGH</div>
                          </div>
                        </div>

                        {/* Step 6: Workflow triggered */}
                        <div className="sf-step sf-step-6">
                          <div className="sf-workflow-badge">
                            <div className="sf-workflow-icon">
                              <Zap size={14} />
                            </div>
                            <div className="sf-workflow-text">
                              <span>WORKFLOW TRIGGERED</span>
                              <strong>Supervisor Notified</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            </div>
            <div className="executive-quote">
              <blockquote>
                "That first week is so important when you put a new user on a platform. Can they use it, and does everything work the way you're saying it's going to work? If it doesn't, you are going to struggle for the next two years to get them back involved. That was the biggest hurdle that we got over quite easily with SALUS."
              </blockquote>
              <cite>
                <strong>Dennis Rumshas</strong>, Vice President of Safety and Risk Management, McShane Construction
              </cite>
            </div>
          </div>
          <div>
            <div className="badge">
              <span className="badge-dot"></span>THE FIELD ADVANTAGE
            </div>
            <h2 className="section-title">
              You Can't Build a Data Center <span className="highlight">with a Stylus and a PDF.</span>
            </h2>
            <p className="section-subtitle">
              100% compliance from the field, and data you can actually search in the office.
            </p>
            <div className="numbered-feature">
              <div className="numbered-feature-icon red">
                <Heart size={20} />
              </div>
              <div>
                <h4>Mobile-First. Field-Loved.</h4>
                <p>
                  Procore's static PDFs are built for desktops, not for a foreman in a high-vis vest in 100-degree heat. SALUS Smart Forms are mobile-first, logic-driven, and loved by the field. They speak their language and adapt to their reality. If a trench is over 5ft, the "Shoring Evidence" photo becomes mandatory.
                </p>
              </div>
            </div>
            <div className="numbered-feature">
              <div className="numbered-feature-icon lime">
                <FileText size={20} />
              </div>
              <div>
                <h4>The "Flat" Form Trap</h4>
                <p>
                  Procore Static fillable PDFs trap your data in a document, making it invisible to analytics.
                </p>
              </div>
            </div>
            <div className="numbered-feature">
              <div className="numbered-feature-icon blue">
                <MessageSquare size={20} />
              </div>
              <div>
                <h4>Salus forms are litigation-grade.</h4>
                <p>
                  GPS-stamped location proof. Mandatory photo evidence for failed check. Voice-to-text captures the nuance of a hazard, not just a checkbox. The signed PDF still lands in Procore for your records, but now you have context.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stop the Workarounds Section */}
      <section className="section-padding" style={{ background: "hsl(var(--gray-100))" }}>
        <div className="section-inner grid-2">
          <div>
            <div className="badge">
              <span className="badge-dot"></span>STOP THE WORKAROUNDS
            </div>
            <h2 className="section-title">
              Shatter the Silos,
              <br />
              <span className="highlight">Reduce risk.</span>
            </h2>
            <p className="section-subtitle">
              Certificates, assets, and training live outside of Procore. Fragmented safety data means increased risk in the field and more time chasing information.
            </p>
            <div className="feature-block">
              <div className="feature-block-icon circle beige">
                <ScanSearch size={20} />
              </div>
              <div>
                <h4>Unified Platform, Zero Silos</h4>
                <p>
                  Centralize everything from training logs to certificates in one live hub. No more risk hidden in
                  silos.
                </p>
              </div>
            </div>
            <div className="feature-block">
              <div className="feature-block-icon circle blue">
                <MessagesSquare size={20} />
              </div>
              <div>
                <h4>Two-Way Field Feedback</h4>
                <p>
                  Close the gap between field reports and office repairs. Our two-way communication ensures every hazard
                  is addressed.
                </p>
              </div>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div className="compliance-core-card">
              {/* Header */}
              <div className="compliance-core-header">
                <div className="compliance-core-brand">
                  <div className="compliance-core-logo">
                    <img src={salusShieldLogo} alt="Salus" />
                  </div>
                  <div className="compliance-core-title-group">
                    <h3 className="compliance-core-title">Compliance Core</h3>
                    <div className="live-feed-indicator">
                      <span className="live-dot"></span>
                      LIVE FEED ACTIVE
                    </div>
                  </div>
                </div>
                <div className="risk-score-display">
                  <span className="risk-score-label">TOTAL RISK SCORE</span>
                  <span className="risk-score-value">Minimal</span>
                </div>
              </div>

              <div className="compliance-core-divider"></div>

              {/* Main Grid */}
              <div className="compliance-core-grid">
                {/* Worker Certs Card */}
                <div className="cc-widget cc-worker-certs">
                  <div className="cc-widget-header">
                    <div className="cc-widget-icon">
                      <UserCheck size={16} />
                    </div>
                    <span className="cc-widget-title">WORKER<br/>CERTS</span>
                    <span className="cc-widget-date">AUG<br/>2024</span>
                  </div>
                  <div className="cc-worker-list">
                    <div className="cc-worker-item">
                      <div className="cc-worker-avatar">M</div>
                      <div className="cc-worker-info">
                        <span className="cc-worker-name">Marcus T.</span>
                        <span className="cc-worker-cert">FALL PROTECTION</span>
                      </div>
                      <div className="cc-status-dot blue"></div>
                    </div>
                    <div className="cc-worker-item">
                      <div className="cc-worker-avatar">E</div>
                      <div className="cc-worker-info">
                        <span className="cc-worker-name">Elena G.</span>
                        <span className="cc-worker-cert">CONFINED SPACE</span>
                      </div>
                      <div className="cc-status-dot green"></div>
                    </div>
                    <div className="cc-worker-item">
                      <div className="cc-worker-avatar">S</div>
                      <div className="cc-worker-info">
                        <span className="cc-worker-name">Sarah K.</span>
                        <span className="cc-worker-cert">AERIAL LIFT</span>
                      </div>
                      <div className="cc-status-dot orange"></div>
                    </div>
                  </div>
                </div>

                {/* Asset Health Card */}
                <div className="cc-widget cc-asset-health">
                  <div className="cc-widget-header">
                    <div className="cc-widget-icon blue">
                      <Settings size={16} />
                    </div>
                    <span className="cc-widget-title">ASSET HEALTH</span>
                  </div>
                  <div className="cc-asset-list">
                    <div className="cc-asset-item">
                      <span className="cc-asset-name">Crane-A12</span>
                      <div className="cc-asset-bar-wrap">
                        <div className="cc-asset-bar">
                          <div className="cc-asset-bar-fill green" style={{ width: "92%" }}></div>
                        </div>
                        <span className="cc-asset-percent green">92%</span>
                      </div>
                    </div>
                    <div className="cc-asset-item">
                      <span className="cc-asset-name">Excavator-04</span>
                      <div className="cc-asset-bar-wrap">
                        <div className="cc-asset-bar">
                          <div className="cc-asset-bar-fill orange" style={{ width: "40%" }}></div>
                        </div>
                        <span className="cc-asset-percent orange">40%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Corrective Actions */}
              <div className="cc-corrective-section">
                <div className="cc-corrective-header">
                  <div className="cc-corrective-title">
                    <div className="cc-corrective-icon">
                      <Check size={14} />
                    </div>
                    <span>CORRECTIVE ACTIONS</span>
                  </div>
                  <span className="cc-resolution-rate">RESOLUTION RATE: 98%</span>
                </div>
                <div className="cc-corrective-grid">
                  <div className="cc-corrective-item">
                    <div className="cc-corrective-avatar">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" alt="James R." />
                    </div>
                    <div className="cc-corrective-info">
                      <span className="cc-corrective-name">James R.</span>
                      <div className="cc-corrective-issue-wrap">
                        <span className="cc-corrective-issue">MISSING GUARDRAIL</span>
                        <span className="cc-badge pending">PENDING</span>
                      </div>
                    </div>
                  </div>
                  <div className="cc-corrective-item resolved">
                    <div className="cc-corrective-check">
                      <Check size={16} />
                    </div>
                    <div className="cc-corrective-info">
                      <span className="cc-corrective-name">Sarah W.</span>
                      <div className="cc-corrective-issue-wrap">
                        <span className="cc-corrective-issue">PPE RE-ISSUE</span>
                        <span className="cc-badge resolved">RESOLVED</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Unified Advantage Badge */}
            <div className="unified-advantage-badge">
              <div className="unified-advantage-icon">
                <Zap size={20} fill="currentColor" />
              </div>
              <div className="unified-advantage-text">
                <span>UNIFIED ADVANTAGE</span>
                <strong>Zero Blindspots.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trade Partner Section */}
      <section className="section-padding dark-section">
        <div className="section-inner grid-2">
          <div className="trade-content">
            <div className="badge">
              <span className="badge-dot"></span>TRADE PARTNER MANAGEMENT
            </div>
            <h2 className="section-title">
              Full visibility Into Every Trade.
            </h2>
            <p className="section-subtitle">
              In mission-critical construction, "I didn't know the sub wasn't certified" isn't a valid excuse.
            </p>
            <div className="trade-feature">
              <div className="trade-feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <line x1="20" y1="8" x2="20" y2="14" />
                  <line x1="23" y1="11" x2="17" y2="11" />
                </svg>
              </div>
              <div>
                <h4>Zero Barrier Access</h4>
                <p>
                  Manage your Tier 1 and Tier 2 partners without the "login tax." Onboard trades with QR codes for free.
                </p>
              </div>
            </div>
            <div className="trade-feature">
              <div className="trade-feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
              </div>
              <div>
                <h4>Accountability</h4>
                <p>See orientation status, JHA submissions, and corrective actions of your contractors at the worker level, not just the company level.</p>
              </div>
            </div>
            <div className="trade-feature">
              <div className="trade-feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <div>
                <h4>Win - Win</h4>
                <p>For GCs, Salus Frictionless Contractor portal means no more compliance black hole. Meanwhile, Trades own their data; they keep a portable safety record that protects their EMR and their bid eligibility.</p>
              </div>
            </div>
          </div>
          <div className="portal-column">
            <div className="portal-demo">
            {/* Main Compliance Dashboard */}
            <div className="compliance-dashboard">
              <div className="compliance-dashboard-header">
                <div className="compliance-dashboard-logo">
                  <img src={salusShieldLogo} alt="Salus" className="compliance-logo-img" />
                  <span className="compliance-logo-text">SALUS</span>
                </div>
                <div className="compliance-dashboard-title">SUBCONTRACTOR COMPLIANCE OVERVIEW</div>
                <div className="compliance-dashboard-icons">
                  <div className="compliance-icon-circle">?</div>
                  <Bell size={16} />
                  <div className="compliance-avatar-circle"></div>
                </div>
              </div>
              <div className="compliance-section-title">SUBCONTRACTOR COMPLIANCE OVERVIEW</div>
              <div className="compliance-table">
                <div className="compliance-table-header">
                  <span>COMPANY NAME</span>
                  <span>STATUS</span>
                  <span>WORKERS ON SITE</span>
                  <span>LAST JHA SUBMISSION</span>
                </div>
                <div className="compliance-table-row">
                  <span className="company-name">Steel Works Inc.</span>
                  <span className="status orientated"><span className="status-dot"></span>Orientated</span>
                  <span className="workers-count">12</span>
                  <span className="last-jha">Today, 8:30 AM</span>
                </div>
                <div className="compliance-table-row">
                  <span className="company-name">Apex Plumbing</span>
                  <span className="status in-progress"><span className="status-dot"></span>In Progress</span>
                  <span className="workers-count"></span>
                  <span className="last-jha"></span>
                </div>
                <div className="compliance-table-row">
                  <span className="company-name">City Electrical</span>
                  <span className="status in-progress"><span className="status-dot"></span>In Progress</span>
                  <span className="workers-count"></span>
                  <span className="last-jha"></span>
                </div>
                <div className="compliance-table-row">
                  <span className="company-name">Concrete Solutions</span>
                  <span className="status orientated"><span className="status-dot"></span>Orientated</span>
                  <span className="workers-count"></span>
                  <span className="last-jha"></span>
                </div>
                <div className="compliance-table-row">
                  <span className="company-name">Summit Roofing</span>
                  <span className="status active"><span className="status-dot"></span>Active</span>
                  <span className="workers-count"></span>
                  <span className="last-jha"></span>
                </div>
              </div>
            </div>

            {/* Worker Detail Card */}
            <div className="worker-detail-card">
              <div className="worker-detail-header">
                <span className="back-arrow">←</span>
                <span className="worker-company-name">Steel Works Inc.</span>
              </div>
              <div className="worker-detail-content">
                <div className="progress-score-section">
                  <span className="progress-score-label">PROGRESS SCORE</span>
                  <div className="progress-score-bar">
                    <div className="progress-score-fill"></div>
                  </div>
                </div>
                <div className="worker-list">
                  <div className="worker-item">
                    <div className="worker-avatar">
                      <User size={20} />
                    </div>
                    <span className="worker-name">John S.</span>
                    <span className="flra-badge">FLRA</span>
                  </div>
                  <div className="worker-item">
                    <div className="worker-avatar female">
                      <User size={20} />
                    </div>
                    <span className="worker-name">Maria R.</span>
                    <span className="flra-badge">FLRA</span>
                  </div>
                </div>
                <div className="pending-review-row">
                  <span className="pending-review-text">Pending Review</span>
                </div>
              </div>
              <div className="check-badge">
                <Check size={16} />
              </div>
            </div>

            {/* QR Code Badge */}
            <div className="qr-badge">
              <div className="qr-code">
                <svg viewBox="0 0 100 100" className="qr-svg">
                  {/* Position detection patterns - corners */}
                  <rect x="5" y="5" width="25" height="25" fill="hsl(var(--navy))" />
                  <rect x="10" y="10" width="15" height="15" fill="white" />
                  <rect x="13" y="13" width="9" height="9" fill="hsl(var(--navy))" />
                  
                  <rect x="70" y="5" width="25" height="25" fill="hsl(var(--navy))" />
                  <rect x="75" y="10" width="15" height="15" fill="white" />
                  <rect x="78" y="13" width="9" height="9" fill="hsl(var(--navy))" />
                  
                  <rect x="5" y="70" width="25" height="25" fill="hsl(var(--navy))" />
                  <rect x="10" y="75" width="15" height="15" fill="white" />
                  <rect x="13" y="78" width="9" height="9" fill="hsl(var(--navy))" />
                  
                  {/* Data modules - random pattern */}
                  <rect x="35" y="5" width="5" height="5" fill="hsl(var(--navy))" />
                  <rect x="45" y="5" width="5" height="5" fill="hsl(var(--navy))" />
                  <rect x="55" y="5" width="5" height="5" fill="hsl(var(--navy))" />
                  <rect x="35" y="15" width="5" height="5" fill="hsl(var(--navy))" />
                  <rect x="50" y="15" width="5" height="5" fill="hsl(var(--navy))" />
                  <rect x="60" y="15" width="5" height="5" fill="hsl(var(--navy))" />
                  <rect x="40" y="25" width="5" height="5" fill="hsl(var(--navy))" />
                  <rect x="55" y="25" width="5" height="5" fill="hsl(var(--navy))" />
                  
                  <rect x="5" y="35" width="5" height="5" fill="hsl(var(--navy))" />
                  <rect x="15" y="35" width="5" height="5" fill="hsl(var(--navy))" />
                  <rect x="25" y="40" width="5" height="5" fill="hsl(var(--navy))" />
                  <rect x="35" y="35" width="5" height="5" fill="hsl(var(--navy))" />
                  <rect x="45" y="40" width="5" height="5" fill="hsl(var(--navy))" />
                  <rect x="55" y="35" width="5" height="5" fill="hsl(var(--navy))" />
                  <rect x="65" y="40" width="5" height="5" fill="hsl(var(--navy))" />
                  <rect x="75" y="35" width="5" height="5" fill="hsl(var(--navy))" />
                  <rect x="85" y="40" width="5" height="5" fill="hsl(var(--navy))" />
                  <rect x="90" y="35" width="5" height="5" fill="hsl(var(--navy))" />
                  
                  <rect x="5" y="50" width="5" height="5" fill="hsl(var(--navy))" />
                  <rect x="20" y="50" width="5" height="5" fill="hsl(var(--navy))" />
                  <rect x="40" y="50" width="5" height="5" fill="hsl(var(--navy))" />
                  <rect x="50" y="50" width="5" height="5" fill="hsl(var(--navy))" />
                  <rect x="60" y="50" width="5" height="5" fill="hsl(var(--navy))" />
                  <rect x="80" y="50" width="5" height="5" fill="hsl(var(--navy))" />
                  <rect x="90" y="50" width="5" height="5" fill="hsl(var(--navy))" />
                  
                  <rect x="10" y="60" width="5" height="5" fill="hsl(var(--navy))" />
                  <rect x="25" y="60" width="5" height="5" fill="hsl(var(--navy))" />
                  <rect x="35" y="55" width="5" height="5" fill="hsl(var(--navy))" />
                  <rect x="45" y="60" width="5" height="5" fill="hsl(var(--navy))" />
                  <rect x="55" y="55" width="5" height="5" fill="hsl(var(--navy))" />
                  <rect x="70" y="55" width="5" height="5" fill="hsl(var(--navy))" />
                  <rect x="85" y="60" width="5" height="5" fill="hsl(var(--navy))" />
                  
                  <rect x="35" y="70" width="5" height="5" fill="hsl(var(--navy))" />
                  <rect x="50" y="70" width="5" height="5" fill="hsl(var(--navy))" />
                  <rect x="60" y="75" width="5" height="5" fill="hsl(var(--navy))" />
                  <rect x="70" y="70" width="5" height="5" fill="hsl(var(--navy))" />
                  <rect x="80" y="75" width="5" height="5" fill="hsl(var(--navy))" />
                  <rect x="90" y="70" width="5" height="5" fill="hsl(var(--navy))" />
                  
                  <rect x="40" y="85" width="5" height="5" fill="hsl(var(--navy))" />
                  <rect x="55" y="80" width="5" height="5" fill="hsl(var(--navy))" />
                  <rect x="65" y="85" width="5" height="5" fill="hsl(var(--navy))" />
                  <rect x="75" y="80" width="5" height="5" fill="hsl(var(--navy))" />
                  <rect x="85" y="85" width="5" height="5" fill="hsl(var(--navy))" />
                  <rect x="90" y="90" width="5" height="5" fill="hsl(var(--navy))" />
                </svg>
              </div>
            </div>
          </div>
            <div className="executive-quote dark">
              <blockquote>
                "You could get on a plane and fly to all of these jobs to see what they actually look like, or you can create a system where people bring jobs to life in front of your eyes."
              </blockquote>
              <cite>
                <strong>Dennis Rumshas</strong>, Vice President of Safety and Risk Management, McShane Construction
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section
        className="section-padding"
        style={{ background: "linear-gradient(180deg, hsl(var(--gray-100)) 0%, hsl(var(--white)) 100%)" }}
      >
        <div className="section-inner grid-2">
          <div className="analytics-column">
            <div className="analytics-card">
            <div className="analytics-header">
              <div className="analytics-logo">
                <div className="icon">
                  <img src={salusShieldLogo} alt="Salus" style={{ width: 16, height: 16, objectFit: "contain" }} />
                </div>
                <div className="text">
                  <h5>Salus Analytics Hub</h5>
                  <span>90-DAY RISK PROFILE</span>
                </div>
              </div>
              <div className="live-sync">LIVE SYNC ACTIVE</div>
            </div>
            <div className="analytics-title">
              TOTAL INCIDENTS BY TYPE<span>Aug - Oct 2024</span>
            </div>
            <div className="incident-list">
              <div className="incident-item">
                <div className="incident-name">Utility Strike</div>
                <div className="incident-status critical">CRITICAL</div>
                <div className="incident-bar">
                  <div className="incident-bar-fill red" style={{ width: "100%" }}></div>
                </div>
                <div className="incident-count">14</div>
              </div>
              <div className="incident-item">
                <div className="incident-name">Crane Ops</div>
                <div className="incident-status monitor">MONITOR</div>
                <div className="incident-bar">
                  <div className="incident-bar-fill orange" style={{ width: "65%" }}></div>
                </div>
                <div className="incident-count">9</div>
              </div>
              <div className="incident-item">
                <div className="incident-name">Fall Risk</div>
                <div className="incident-status stable">STABLE</div>
                <div className="incident-bar">
                  <div className="incident-bar-fill blue" style={{ width: "43%" }}></div>
                </div>
                <div className="incident-count">6</div>
              </div>
              <div className="incident-item">
                <div className="incident-name">PPE Violation</div>
                <div className="incident-status improving">IMPROVING</div>
                <div className="incident-bar">
                  <div className="incident-bar-fill green" style={{ width: "29%" }}></div>
                </div>
                <div className="incident-count">4</div>
              </div>
              <div className="incident-item">
                <div className="incident-name">Minor Injury</div>
                <div className="incident-status low">LOW</div>
                <div className="incident-bar">
                  <div className="incident-bar-fill gray" style={{ width: "14%" }}></div>
                </div>
                <div className="incident-count">2</div>
              </div>
            </div>
            <div className="risk-alert">
              <div className="icon">⚠️</div>
              <div className="text">
                <strong>RISK ALERT</strong>
                <span>Utility Strikes +12%</span>
              </div>
            </div>
            <div className="analytics-footer">
              <div className="analytics-footer-left">
                <div className="avatar-stack">
                  <div className="avatar"></div>
                  <div className="avatar"></div>
                  <div className="avatar"></div>
                </div>
                <span>
                  REPORT SHARED WITH <strong>Executive Leadership</strong>
                </span>
              </div>
              <button className="generate-btn">GENERATE INSIGHTS ⚡</button>
            </div>
          </div>
          <div className="executive-quote">
            <blockquote>
              "GCs talk safety and will say they have a safety plan. Willmeng can now show the results of our safety initiatives to owners. That has helped us win a multitude of new jobs."
            </blockquote>
            <cite>
              <strong>Justin Itule</strong>, Field Integration Manager, Willmeng Construction
            </cite>
          </div>
          </div>
          <div>
            <div className="badge">
              <span className="badge-dot"></span>EXECUTIVE LEVEL INSIGHTS
            </div>
            <h2 className="section-title">
              Your EMR Is a Bid Filter.
              <br />
              <span className="muted">Treat It Like One.</span>
            </h2>
            <p className="section-subtitle">
              An EMR over 1.0 doesn't just raise your premiums—it disqualifies you from the bid list. Procore keeps a record of what happened. Salus shows you why it happened and what's about to happen.
            </p>
            <div className="feature-block">
              <div className="feature-block-icon circle beige">
                <FileX size={20} />
              </div>
              <div>
                <h4>No More Manual Tallies</h4>
                <p>
                  Stop opening 500 PDFs to find a trend. SALUS aggregates every field entry into a high-level Risk Profile.
                </p>
              </div>
            </div>
            <div className="feature-block">
              <div className="feature-block-icon circle green">
                <Settings size={20} />
              </div>
              <div>
                <h4>Track Leading Indicators</h4>
                <p>
                  Spot a spike in utility-strike near-misses across your Eastern Region sites before a backhoe hits a fiber line.
                </p>
              </div>
            </div>
            <div className="feature-block">
              <div className="feature-block-icon circle blue">
                <LayoutGrid size={20} />
              </div>
              <div>
                <h4>Executive-Ready Reporting</h4>
                <p>
                  Deliver clean, professional dashboards to leadership without needing a Power BI developer or expensive
                  analytics add-ons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Asset Management Section */}
      <section className="section-padding" style={{ background: "hsl(var(--gray-100))" }}>
        <div className="section-inner grid-2">
          <div>
            <div className="badge">
              <span className="badge-dot"></span>PREVENTATIVE MAINTENANCE
            </div>
            <h2 className="section-title">
              Your Crane Log Shouldn't
              <br />
              <span className="muted">Live in a Binder.</span>
            </h2>
            <p className="section-subtitle">
              Track every piece of equipment, from cranes to drills, with a system designed for the realities of the
              field. Move beyond financial job costing into real-time fleet health.
            </p>
            <div className="asset-features">
              <div className="asset-feature">
                <div className="asset-feature-icon beige">
                  <Eye size={20} />
                </div>
                <div>
                  <h5>Individual Visibility</h5>
                  <p>Track machine-specific history.</p>
                </div>
              </div>
              <div className="asset-feature">
                <div className="asset-feature-icon green">
                  <Bell size={20} />
                </div>
                <div>
                  <h5>Real-Time Alerts</h5>
                  <p>Instant deficiency triggers.</p>
                </div>
              </div>
              <div className="asset-feature">
                <div className="asset-feature-icon tan">
                  <UserCheck size={20} />
                </div>
                <div>
                  <h5>True Accountability</h5>
                  <p>Identify who inspected what.</p>
                </div>
              </div>
              <div className="asset-feature">
                <div className="asset-feature-icon blue">
                  <Wrench size={20} />
                </div>
                <div>
                  <h5>Prevent Downtime</h5>
                  <p>Predictive data-driven repairs.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="asset-dashboard">
            <div className="uptime-badge">
              <div className="value">99.9%</div>
              <div className="label">FLEET UPTIME</div>
            </div>
            <div className="asset-card">
              <div className="asset-card-header">
                <h4>Fleet Health Check</h4>
                <span>ASSET DASHBOARD</span>
              </div>
              <div className="asset-card-item">
                <div className="asset-card-item-header">
                  <div className="asset-card-item-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  </div>
                  <div className="asset-card-item-info">
                    <h5>Forklift-002</h5>
                    <span className="pending">MAINTENANCE PENDING</span>
                  </div>
                  <div className="asset-card-item-status">
                    <div className="label">ALERT</div>
                    <div className="value">Hydraulic hose is broken</div>
                  </div>
                </div>
              </div>
              <div className="asset-card-item">
                <div className="asset-card-item-header">
                  <div className="asset-card-item-info">
                    <h5>Backhoe-415</h5>
                    <span className="operational">IN OPERATION</span>
                  </div>
                </div>
                <div className="asset-card-item-progress">
                  <span>NEXT MAINTENANCE: 224 HOURS</span>
                  <div className="bar">
                    <div className="bar-fill" style={{ width: "85%" }}></div>
                  </div>
                  <span>85% USAGE</span>
                </div>
              </div>
              <div className="digital-identity-card">
                <div className="icon">
                  <Grid3X3 size={24} />
                </div>
                <div>
                  <h5>DIGITAL IDENTITY</h5>
                  <p>Scan asset tag for instant pre-trip, maintenance logs, and operator certifications.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Spec Section */}
      <section className="section-padding tech-section" style={{ background: "hsl(var(--white))" }}>
        <div className="section-inner">
          <div className="badge">
            <span className="badge-dot"></span>TECHNICAL SPECIFICATION
          </div>
          <h2 className="section-title">
            Where Your
            <br />
            <span className="muted">Data Flows.</span>
          </h2>
          <p className="section-subtitle">
            We don't just "link" to Procore; we inhabit it. Every field action has a synchronized office outcome.
          </p>
          <div className="tech-table-wrapper">
            <div className="tech-table">
              <div className="tech-table-header-row">
                <div className="tech-table-header">PROCORE MODULE</div>
                <div className="tech-table-header">SALUS DATA INPUT</div>
                <div className="tech-table-header">OPERATIONAL BENEFIT</div>
              </div>
              <div className="tech-table-row">
                <div className="tech-table-cell module">Projects</div>
                <div className="tech-table-cell input">Auto-Sync Details</div>
                <div className="tech-table-cell benefit">
                  <span className="check">
                    <Check size={12} />
                  </span>
                  No double setup for new jobsites.
                </div>
              </div>
              <div className="tech-table-row">
                <div className="tech-table-cell module">Documents</div>
                <div className="tech-table-cell input">Signed Forms & PDFs</div>
                <div className="tech-table-cell benefit">
                  <span className="check">
                    <Check size={12} />
                  </span>
                  Automated archival for 100% audit readiness.
                </div>
              </div>
              <div className="tech-table-row">
                <div className="tech-table-cell module">Manpower Logs</div>
                <div className="tech-table-cell input">Worker Sign-ins</div>
                <div className="tech-table-cell benefit">
                  <span className="check">
                    <Check size={12} />
                  </span>
                  Effortless transfer of headcount to Daily Logs.
                </div>
              </div>
              <div className="tech-table-row">
                <div className="tech-table-cell module">Photos</div>
                <div className="tech-table-cell input">Hazard Evidence</div>
                <div className="tech-table-cell benefit">
                  <span className="check">
                    <Check size={12} />
                  </span>
                  Visual context for RFIs and Observations.
                </div>
              </div>
              <div className="tech-table-row">
                <div className="tech-table-cell module">Tasks</div>
                <div className="tech-table-cell input">Corrective Actions</div>
                <div className="tech-table-cell benefit">
                  <span className="check">
                    <Check size={12} />
                  </span>
                  Issues flagged in SALUS become Procore Tasks.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding testimonials-section" style={{ background: "hsl(var(--gray-100))" }}>
        <div className="section-inner">
          <div className="badge">
            <span className="badge-dot"></span>CUSTOMER SUCCESS
          </div>
          <p className="section-subtitle">
            Join 1,200+ companies that have abandoned digital paper for intelligent field safety.
          </p>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-quote">"</div>
              <p className="testimonial-text">
                "SALUS is the perfect marriage of both usability and capability. It has really great features for us as
                admin, but it's simple for my crews to use out in the field, too."
              </p>
              <div className="testimonial-author">
                <h5>Health & Safety Manager</h5>
                <span>O'CONNOR ELECTRIC</span>
              </div>
            </div>
            <div className="testimonial-card dark">
              <p className="testimonial-text">
                "Before SALUS, we were tracking safety data across 14 different systems—Excel, SharePoint, SiteDocs, you
                name it. It was unmanageable. Moving to SALUS didn't just digitize us; it unified us."
              </p>
              <div className="testimonial-author">
                <h5>Robert Clark, VP of Safety</h5>
                <span>UNIVERSAL GROUP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            <div className="demo-card" style={{ margin: "0 auto" }}>
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
                    Join leaders like <a href="#">McFarland</a> and <a href="#">Electric Plus</a> who trust SALUS to capture field data for their Procore instance.
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
                    Join leaders like <a href="#">McFarland</a> and <a href="#">Electric Plus</a> who trust SALUS to capture field data for their Procore instance.
                  </p>
                </>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-logo">
            <img src={salusLogo} alt="Salus" className="logo-image" />
          </div>
          <div className="footer-copyright">© 2024 SALUS SAFETY INC. | ALL RIGHTS RESERVED</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
