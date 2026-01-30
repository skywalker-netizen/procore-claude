import { useState } from "react";
import { Link, Zap, LayoutGrid, AlertCircle, MessageSquare, FileText, Clock, Grid3X3, Bell, User, UserCheck, Wrench, Check, Eye, FileX, Settings } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import salusLogo from "@/assets/salus-logo.png";
import salusShieldLogo from "@/assets/salus-shield-logo.png";

const ZAPIER_WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/19065622/udqz69h/";

const Index = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
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
          ...formData,
          timestamp: new Date().toISOString(),
          source: window.location.origin,
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
          <a href="#" className="logo"><img src={salusLogo} alt="Salus" className="logo-image" /></a>
          <nav className="nav">
            <a href="#" className="btn btn-primary">BOOK A DEMO</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div>
            <div className="badge"><span className="badge-dot"></span>SYNCED WITH THE FIELD</div>
            <h1 className="hero-title">Your Procore<br />Investment.<br /><span className="highlight">Maximized.</span></h1>
            <p className="hero-subtitle">Procore is world-class for Project Management. <em>But for Safety? It's often just digital paper.</em></p>
            <p className="hero-description">Salus is the field engine that powers Procore's office brain. Two Platforms. One Seamlessly Integrated System.</p>
            <div className="trust-badges">
              <div className="trust-badge">
                <div className="trust-icon navy"><Link size={22} strokeWidth={2.5} /></div>
                <div className="trust-text"><strong>Certified App</strong><span>PROCORE MARKETPLACE</span></div>
              </div>
              <div className="trust-badge">
                <div className="trust-icon lime"><Zap size={22} strokeWidth={2.5} fill="currentColor" /></div>
                <div className="trust-text"><strong>Real-time Sync</strong><span>BI-DIRECTIONAL API</span></div>
              </div>
            </div>
          </div>
          <div className="demo-card">
            {isSubmitted ? (
              <div className="thank-you-screen">
                <div className="thank-you-icon">
                  <Check size={48} strokeWidth={2.5} />
                </div>
                <h2>Thank You!</h2>
                <p className="thank-you-message">Your demo request has been received. We'll be in touch shortly to schedule your personalized integration demo.</p>
                <p className="form-footer">Join GCs like <a href="#">Broccolini</a> and <a href="#">Willmeng</a> who trust SALUS to capture field data for their Procore instance.</p>
              </div>
            ) : (
              <>
                <h2>See Salus in action.</h2>
                <p className="subtitle">BOOK YOUR PERSONALIZED INTEGRATION DEMO</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group"><label>First Name <span className="required">*</span></label><input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="First Name" required /></div>
                    <div className="form-group"><label>Last Name <span className="required">*</span></label><input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Last Name" required /></div>
                  </div>
                  <div className="form-group"><label>Company</label><input type="text" name="company" value={formData.company} onChange={handleInputChange} placeholder="Your company name" /></div>
                  <div className="form-group"><label>Work Email <span className="required">*</span></label><input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="email@company.com" required /></div>
                  <div className="form-group"><label>Phone Number <span className="required">*</span></label><input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+1 (555) 123-4567" required /></div>
                  <button type="submit" className="btn-submit" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Request Demo"} 
                    {!isLoading && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>}
                  </button>
                </form>
                <p className="form-footer">Join GCs like <a href="#">Broccolini</a> and <a href="#">Willmeng</a> who trust SALUS to capture field data for their Procore instance.</p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="integration-section">
        <div className="integration-inner">
          <div className="integration-content">
            <div className="badge"><span className="badge-dot"></span>SEAMLESS INTEGRATION</div>
            <h2 className="integration-title">Deep Native<br /><span className="highlight">Connectivity.</span></h2>
            <p className="integration-subtitle">Maintain Procore as your system of record while giving the field a tool they actually love to use.</p>
            <p className="integration-description">Our native integration means your safety data isn't siloed—it flows directly into Procore's ecosystem in real-time. Inspections, observations, and personnel data appear exactly where your PMs expect to find them.</p>
            <div className="feature-item"><div className="feature-icon"><LayoutGrid /></div><div className="feature-text"><h4>Native, Not Bolted-On</h4><p>Appears in Procore's sidebar, not as an afterthought.</p></div></div>
            <div className="feature-item"><div className="feature-icon"><AlertCircle /></div><div className="feature-text"><h4>Unified User Experience</h4><p>Single source of truth for all jobsite compliance.</p></div></div>
          </div>
          <div className="integration-diagram">
            <div className="diagram-header">
              <div className="diagram-brand"><span>PROCORE</span><div className="brand-icon procore"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 4L4 8l8 4 8-4-8-4z" fill="white"/><path d="M12 12l8 4v-4l-8-4-8 4v4l8-4z" fill="white" fillOpacity="0.7"/></svg></div><small>SYSTEM OF RECORD</small></div>
              <div className="diagram-brand"><span>SALUS</span><div className="brand-icon salus"><img src={salusShieldLogo} alt="Salus" style={{ width: 28, height: 28, objectFit: 'contain' }} /></div><small>FIELD ENGINE</small></div>
            </div>
            <div className="diagram-rows">
              <div className="diagram-row"><div className="diagram-item left">Projects</div><div className="diagram-connector blue"><span className="dot"></span><span className="dot"></span></div><div className="diagram-item right blue">Auto-Creation</div></div>
              <div className="diagram-row"><div className="diagram-item left">Documents</div><div className="diagram-connector orange"><span className="dot"></span><span className="dot"></span></div><div className="diagram-item right orange">Signed Forms</div></div>
              <div className="diagram-row"><div className="diagram-item left">Manpower</div><div className="diagram-connector lime"><span className="dot"></span><span className="dot"></span></div><div className="diagram-item right lime">Headcount Sync</div></div>
              <div className="diagram-row"><div className="diagram-item left">Photos</div><div className="diagram-connector yellow"><span className="dot"></span><span className="dot"></span></div><div className="diagram-item right yellow">Hazard Visuals</div></div>
              <div className="diagram-row"><div className="diagram-item left">Tasks</div><div className="diagram-connector red"><span className="dot"></span><span className="dot"></span></div><div className="diagram-item right red">Issue Tracking</div></div>
            </div>
            <div className="data-health-badge"><div className="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/></svg></div><div className="text"><span>CONTINUOUS</span><strong>Data Health</strong></div></div>
          </div>
        </div>
      </section>

      {/* Unified Platform Section */}
      <section className="section-padding" style={{ background: 'hsl(var(--white))' }}>
        <div className="section-inner grid-2">
          <div style={{ position: 'relative' }}>
            <div className="dashboard-card">
              <div className="dashboard-header">
                <div className="dashboard-header-left">
                  <div className="compliance-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg></div>
                  <div><div className="compliance-title">Safety Compliance</div><div className="compliance-status">LIVE</div></div>
                </div>
                <div className="risk-score"><span>RISK SCORE</span><strong>LOW — 12/100</strong></div>
              </div>
              <div className="dashboard-grid">
                <div className="dashboard-widget">
                  <div className="widget-header"><div className="widget-title"><span className="widget-title-icon"></span>ONSITE TODAY</div><div className="widget-date">Oct 17</div></div>
                  <div className="worker-list">
                    <div className="worker-item"><div className="worker-avatar">MR</div><div className="worker-info"><div className="worker-name">Mike Rodriguez</div><div className="worker-role">SUPERINTENDENT</div></div><div className="worker-status green"></div></div>
                    <div className="worker-item"><div className="worker-avatar">JC</div><div className="worker-info"><div className="worker-name">Jane Chen</div><div className="worker-role">SAFETY LEAD</div></div><div className="worker-status green"></div></div>
                    <div className="worker-item"><div className="worker-avatar">RB</div><div className="worker-info"><div className="worker-name">Robert Blake</div><div className="worker-role">ELECTRICIAN</div></div><div className="worker-status yellow"></div></div>
                  </div>
                </div>
                <div className="dashboard-widget">
                  <div className="widget-header"><div className="widget-title"><span className="widget-title-icon"></span>EQUIPMENT STATUS</div></div>
                  <div className="asset-list">
                    <div className="asset-item"><div className="asset-name">Tower Crane #1</div><div className="asset-bar-container"><div className="asset-bar"><div className="asset-bar-fill high" style={{ width: '100%' }}></div></div><div className="asset-percent">100%</div></div></div>
                    <div className="asset-item"><div className="asset-name">Forklift-002</div><div className="asset-bar-container"><div className="asset-bar"><div className="asset-bar-fill low" style={{ width: '45%' }}></div></div><div className="asset-percent low">45%</div></div></div>
                    <div className="asset-item"><div className="asset-name">Scissor Lift</div><div className="asset-bar-container"><div className="asset-bar"><div className="asset-bar-fill high" style={{ width: '92%' }}></div></div><div className="asset-percent">92%</div></div></div>
                  </div>
                </div>
                <div className="dashboard-widget corrective-widget">
                  <div className="corrective-header"><div className="corrective-title">CORRECTIVE ACTIONS</div><div className="resolution-rate">RESOLUTION RATE: <strong>98%</strong></div></div>
                  <div className="corrective-items">
                    <div className="corrective-item"><div className="corrective-avatar"><User size={20} stroke="rgba(255,255,255,.5)" /></div><div className="corrective-info"><div className="corrective-name">James R.</div><div className="corrective-issue">MISSING GUARDRAIL</div></div><div className="corrective-badge pending">PENDING</div></div>
                    <div className="corrective-item"><div className="corrective-avatar"><User size={20} stroke="rgba(255,255,255,.5)" /></div><div className="corrective-info"><div className="corrective-name">Sarah W.</div><div className="corrective-issue">PPE RE...</div></div><div className="corrective-badge resolved"><Check size={12} />RESOLVED</div></div>
                  </div>
                </div>
              </div>
              <div className="unified-badge"><div className="icon"><Zap size={20} /></div><div className="text"><span>UNIFIED ADVANTAGE</span><strong>Zero Blindspots.</strong></div></div>
            </div>
          </div>
          <div>
            <div className="badge"><span className="badge-dot"></span>STOP THE WORKAROUNDS</div>
            <h2 className="section-title">Shatter the Silos,<br /><span className="highlight">Reduce risk.</span></h2>
            <p className="section-subtitle">Procore handles the project lifecycle. <span className="highlight">Salus handles the people, the gear, and the compliance heartbeat.</span></p>
            <div className="feature-block"><div className="feature-block-icon"><LayoutGrid /></div><div><h4>Unified Platform, Zero Silos</h4><p>Certificates, assets, and training must live outside of Procore. Salus hosts everything in one app and connects the right worker to the right asset and the right training. No more risk hidden in "lost" spreadsheets or siloed email threads.</p></div></div>
            <div className="feature-block"><div className="feature-block-icon"><AlertCircle /></div><div><h4>Two-Way Real-Time Field Feedback</h4><p>Close the gap between field reports and office repairs. Our two-way communication ensures every hazard is addressed and verified in real-time. Now, field data makes a difference.</p></div></div>
            
          </div>
        </div>
      </section>

      {/* Field Advantage Section */}
      <section className="section-padding" style={{ background: 'hsl(var(--gray-100))' }}>
        <div className="section-inner grid-2">
          <div>
            <div className="badge"><span className="badge-dot"></span>THE FIELD ADVANTAGE</div>
            <h2 className="section-title">Beyond Static PDFs:<br /><span className="highlight">Real Time Field Data</span></h2>
            <div className="numbered-feature"><div className="numbered-feature-icon red"><FileText size={16} /></div><div><h4>1. The "Flat" Form Trap</h4><p>Procore Static fillable PDFs trap your data in a document, making it invisible to analytics and frustrating for field teams to fill on small screens.</p></div></div>
            <div className="numbered-feature"><div className="numbered-feature-icon lime"><Zap size={16} /></div><div><h4>2. Intelligent Dynamic Fields</h4><p>SALUS Forms are mobile-first and smart. They adapt based on user input—requiring photo evidence for failed checks and skipping irrelevant sections automatically.</p></div></div>
            <div className="numbered-feature"><div className="numbered-feature-icon"><MessageSquare size={16} /></div><div><h4>3. Beyond Pass/Fail Context</h4><p>Use smart form logic and voice-to-text to capture the "why" behind safety issues. Get rich context that flat Procore PDFs simply can't provide.</p></div></div>
            <div className="field-note"><div className="field-note-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg></div><p>Final signed documents still land in Procore for safekeeping.</p></div>
          </div>
          <div className="phone-comparison">
            <div className="phone-wrapper">
              <div className="phone-label procore">PROCORE STATIC PDF</div>
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="pdf-mockup-full">
                    <div className="pdf-status-bar"><span>9:41</span><span className="pdf-status-icons">📶 🔋</span></div>
                    <div className="pdf-toolbar">
                      <span className="pdf-close">✕</span>
                      <span className="pdf-title">Safety_Inspection.pdf</span>
                      <span className="pdf-share">↗</span>
                    </div>
                    <div className="pdf-document">
                      <div className="pdf-form-content">
                        <div className="pdf-form-header">SAFETY INSPECTION FORM</div>
                        <div className="pdf-form-row"><span className="pdf-label">Date:</span><span className="pdf-input-line"></span></div>
                        <div className="pdf-form-row"><span className="pdf-label">Inspector:</span><span className="pdf-input-line"></span></div>
                        <div className="pdf-form-row"><span className="pdf-label">Location:</span><span className="pdf-input-line"></span></div>
                        <div className="pdf-section-title">1. Personal Protective Equipment</div>
                        <div className="pdf-checkbox-row"><span className="pdf-checkbox"></span><span className="pdf-checkbox-label">Hard hats worn</span></div>
                        <div className="pdf-checkbox-row"><span className="pdf-checkbox"></span><span className="pdf-checkbox-label">Safety glasses</span></div>
                        <div className="pdf-checkbox-row"><span className="pdf-checkbox"></span><span className="pdf-checkbox-label">High-vis vests</span></div>
                        <div className="pdf-section-title">2. Fall Protection</div>
                        <div className="pdf-checkbox-row"><span className="pdf-checkbox"></span><span className="pdf-checkbox-label">Guardrails in place</span></div>
                        <div className="pdf-checkbox-row"><span className="pdf-checkbox"></span><span className="pdf-checkbox-label">Harnesses used</span></div>
                        <div className="pdf-section-title">3. Equipment Status</div>
                        <div className="pdf-checkbox-row"><span className="pdf-checkbox"></span><span className="pdf-checkbox-label">All equipment tagged</span></div>
                        <div className="pdf-form-row"><span className="pdf-label">Notes:</span></div>
                        <div className="pdf-notes-area"></div>
                        <div className="pdf-form-row"><span className="pdf-label">Signature:</span><span className="pdf-input-line"></span></div>
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
                    <div className="smart-form-status-bar"><span>11:57</span><span>📶 🔋 68%</span></div>
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
                            <div className="sf-workflow-icon"><Zap size={14} /></div>
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
      </section>

      {/* Trade Partner Section */}
      <section className="section-padding dark-section">
        <div className="section-inner grid-2">
          <div>
            <div className="badge"><span className="badge-dot"></span>TRADE PARTNER MANAGEMENT</div>
            <h2 className="section-title">Zero Barrier<br /><span className="muted">Portal.</span></h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,.6)', lineHeight: '1.7', marginBottom: '40px' }}>Managing subcontractor safety shouldn't require chasing paper trails or managing hundreds of external logins. Gain a real-time window into every trade partner on your site.</p>
            <div className="trade-feature"><div className="trade-feature-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" /></svg></div><div><h4>Zero Barrier Access</h4><p>With the SALUS Contractor Portal, invite and onboard trades. No account registration, no Salus account required.</p></div></div>
            <div className="trade-feature"><div className="trade-feature-icon"><Zap size={20} /></div><div><h4>Seamless Orientations</h4><p>Share site-specific forms —onboard trades free with QR codes.</p></div></div>
            <div className="trade-feature"><div className="trade-feature-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg></div><div><h4>Real-time Visibility <span className="highlight">— at the worker level.</span></h4><p>See orientation status, track corrective actions and compliance at the individual level.</p></div></div>
            <div className="trade-note"><div className="trade-note-icon"><Grid3X3 size={16} /></div><p>Instant QR-Driven Portal — workers onboard in seconds.</p></div>
          </div>
          <div style={{ position: 'relative' }}>
            <div className="compliance-card">
              <div className="compliance-card-header"><div className="compliance-card-logo"><div className="icon"></div>SALUS</div><div className="compliance-card-title">SUBCONTRACTOR COMPLIANCE OVERVIEW</div></div>
              <div className="compliance-table-header">SUBCONTRACTOR COMPLIANCE OVERVIEW</div>
              <table className="compliance-table"><thead><tr><th>Company Name</th><th>Status</th><th>Workers on Site</th><th>Last JHA Submission</th></tr></thead><tbody><tr><td className="company">Steel Works Inc.</td><td><span className="status-badge orientated">Orientated</span></td><td>12</td><td>Today, 8:30 AM</td></tr><tr><td className="company">Apex Plumbing</td><td><span className="status-badge in-progress">In Progress</span></td><td></td><td></td></tr><tr><td className="company">City Electrical</td><td><span className="status-badge in-progress">In Progress</span></td><td></td><td></td></tr><tr><td className="company">Concrete Solutions</td><td><span className="status-badge orientated">Orientated</span></td><td></td><td></td></tr><tr><td className="company">Summit Roofing</td><td><span className="status-badge active">Active</span></td><td></td><td></td></tr></tbody></table>
            </div>
            <div className="worker-popup"><div className="worker-popup-header">← Steel Works Inc.<span>✕</span></div><div className="worker-popup-progress"><label>PROGRESS SCORE</label><div className="value">100%</div><div className="bar"><div className="bar-fill" style={{ width: '100%' }}></div></div></div><div className="worker-popup-list"><div className="worker-popup-item"><div className="avatar" style={{ background: '#9ca3af' }}></div><div className="name">John S.</div><div className="tags"><span className="tag">FLRA</span><span className="tag">JHA</span></div></div><div className="worker-popup-item"><div className="avatar" style={{ background: '#ef4444' }}></div><div className="name">Maria R.</div><div className="tags"><span className="tag">FLRA</span><span className="tag">JHA</span></div></div></div></div>
            <div className="qr-card"><div className="check">✓</div><div className="qr-code"><div className="qr-code-inner"><div></div><div></div><div></div><div></div><div style={{ background: 'transparent' }}></div><div></div><div></div><div></div><div></div></div></div><h5>Scan to Start</h5><p>PORTAL V2.4 ACTIVE</p></div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="section-padding" style={{ background: 'linear-gradient(180deg, hsl(var(--gray-100)) 0%, hsl(var(--white)) 100%)' }}>
        <div className="section-inner grid-2">
          <div className="analytics-card">
            <div className="analytics-header"><div className="analytics-logo"><div className="icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--navy))" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg></div><div className="text"><h5>Salus Analytics Hub</h5><span>90-DAY RISK PROFILE</span></div></div><div className="live-sync">LIVE SYNC ACTIVE</div></div>
            <div className="analytics-title">TOTAL INCIDENTS BY TYPE<span>Aug - Oct 2024</span></div>
            <div className="incident-list">
              <div className="incident-item"><div className="incident-name">Utility Strike</div><div className="incident-status critical">CRITICAL</div><div className="incident-bar"><div className="incident-bar-fill red" style={{ width: '100%' }}></div></div><div className="incident-count">14</div></div>
              <div className="incident-item"><div className="incident-name">Crane Ops</div><div className="incident-status monitor">MONITOR</div><div className="incident-bar"><div className="incident-bar-fill orange" style={{ width: '65%' }}></div></div><div className="incident-count">9</div></div>
              <div className="incident-item"><div className="incident-name">Fall Risk</div><div className="incident-status stable">STABLE</div><div className="incident-bar"><div className="incident-bar-fill blue" style={{ width: '43%' }}></div></div><div className="incident-count">6</div></div>
              <div className="incident-item"><div className="incident-name">PPE Violation</div><div className="incident-status improving">IMPROVING</div><div className="incident-bar"><div className="incident-bar-fill green" style={{ width: '29%' }}></div></div><div className="incident-count">4</div></div>
              <div className="incident-item"><div className="incident-name">Minor Injury</div><div className="incident-status low">LOW</div><div className="incident-bar"><div className="incident-bar-fill gray" style={{ width: '14%' }}></div></div><div className="incident-count">2</div></div>
            </div>
            <div className="risk-alert"><div className="icon">⚠️</div><div className="text"><strong>RISK ALERT</strong><span>Utility Strikes +12%</span></div></div>
            <div className="analytics-footer"><div className="analytics-footer-left"><div className="avatar-stack"><div className="avatar"></div><div className="avatar"></div><div className="avatar"></div></div><span>REPORT SHARED WITH <strong>Executive Leadership</strong></span></div><button className="generate-btn">GENERATE INSIGHTS ⚡</button></div>
          </div>
          <div>
            <div className="badge"><span className="badge-dot"></span>EXECUTIVE LEVEL INSIGHTS</div>
            <h2 className="section-title">See the action<br /><span className="muted">in the field.</span></h2>
            <p className="section-subtitle">Procore is great for records. <span className="red">But it's where safety data goes to die.</span></p>
            <div className="feature-block"><div className="feature-block-icon circle beige"><FileX size={20} /></div><div><h4>No More Manual Tallies</h4><p>Stop wasting hours opening hundreds of individual PDFs to manually tally incidents in a spreadsheet. Salus indexes every field automatically.</p></div></div>
            <div className="feature-block"><div className="feature-block-icon circle green"><Settings size={20} /></div><div><h4>Lagging Indicators, Instantized</h4><p>Spot high-risk trends—like a spike in utility strikes across 50 jobsites—the moment they happen. Move from reactive filing to proactive prevention.</p></div></div>
            <div className="feature-block"><div className="feature-block-icon circle blue"><LayoutGrid size={20} /></div><div><h4>Executive-Ready Reporting</h4><p>Deliver clean, professional dashboards to leadership without needing a Power BI developer or expensive analytics add-ons.</p></div></div>
          </div>
        </div>
      </section>

      {/* Asset Management Section */}
      <section className="section-padding" style={{ background: 'hsl(var(--white))' }}>
        <div className="section-inner grid-2">
          <div>
            <div className="badge"><span className="badge-dot"></span>PREVENTATIVE MAINTENANCE</div>
            <h2 className="section-title">Asset<br />Management<br /><span className="muted">Built for<br />Safety.</span></h2>
            <p style={{ color: 'hsl(var(--gray-600))', marginBottom: '32px' }}>Track every piece of equipment, from cranes to drills, with a system designed for the realities of the field. Move beyond financial job costing into real-time fleet health.</p>
            <div className="asset-features">
              <div className="asset-feature"><div className="asset-feature-icon beige"><Eye size={20} /></div><div><h5>Individual Visibility</h5><p>Track machine-specific history.</p></div></div>
              <div className="asset-feature"><div className="asset-feature-icon green"><Bell size={20} /></div><div><h5>Real-Time Alerts</h5><p>Instant deficiency triggers.</p></div></div>
              <div className="asset-feature"><div className="asset-feature-icon tan"><UserCheck size={20} /></div><div><h5>True Accountability</h5><p>Identify who inspected what.</p></div></div>
              <div className="asset-feature"><div className="asset-feature-icon blue"><Wrench size={20} /></div><div><h5>Prevent Downtime</h5><p>Predictive data-driven repairs.</p></div></div>
            </div>
          </div>
          <div className="asset-dashboard">
            <div className="uptime-badge"><div className="value">99.9%</div><div className="label">FLEET UPTIME</div></div>
            <div className="asset-card">
              <div className="asset-card-header"><h4>Fleet Health Check</h4><span>ASSET DASHBOARD</span></div>
              <div className="asset-card-item"><div className="asset-card-item-header"><div className="asset-card-item-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg></div><div className="asset-card-item-info"><h5>Forklift-002</h5><span className="pending">MAINTENANCE PENDING</span></div><div className="asset-card-item-status"><div className="label">ALERT</div><div className="value">Hydraulic hose is broken</div></div></div></div>
              <div className="asset-card-item"><div className="asset-card-item-header"><div className="asset-card-item-info"><h5>Backhoe-415</h5><span className="operational">IN OPERATION</span></div></div><div className="asset-card-item-progress"><span>NEXT MAINTENANCE: 224 HOURS</span><div className="bar"><div className="bar-fill" style={{ width: '85%' }}></div></div><span>85% USAGE</span></div></div>
              <div className="digital-identity-card"><div className="icon"><Grid3X3 size={24} /></div><div><h5>DIGITAL IDENTITY</h5><p>Scan asset tag for instant pre-trip, maintenance logs, and operator certifications.</p></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Spec Section */}
      <section className="section-padding tech-section" style={{ background: 'hsl(var(--white))' }}>
        <div className="section-inner">
          <div className="badge"><span className="badge-dot"></span>TECHNICAL SPECIFICATION</div>
          <h2 className="section-title">Where Your<br /><span className="muted">Data Flows.</span></h2>
          <p className="tech-description">We don't just "link" to Procore; we inhabit it. Every field action has a synchronized office outcome.</p>
          <div className="tech-table">
            <div className="tech-table-header">PROCORE MODULE</div><div className="tech-table-header">SALUS DATA INPUT</div><div className="tech-table-header">OPERATIONAL BENEFIT</div>
            <div className="tech-table-cell module">Projects</div><div className="tech-table-cell input">Auto-Sync Details</div><div className="tech-table-cell benefit"><span className="check"><Check size={12} /></span>No double setup for new jobsites.</div>
            <div className="tech-table-cell module">Documents</div><div className="tech-table-cell input">Signed Forms & PDFs</div><div className="tech-table-cell benefit"><span className="check"><Check size={12} /></span>Automated archival for 100% audit readiness.</div>
            <div className="tech-table-cell module">Manpower Logs</div><div className="tech-table-cell input">Worker Sign-ins</div><div className="tech-table-cell benefit"><span className="check"><Check size={12} /></span>Effortless transfer of headcount to Daily Logs.</div>
            <div className="tech-table-cell module">Photos</div><div className="tech-table-cell input">Hazard Evidence</div><div className="tech-table-cell benefit"><span className="check"><Check size={12} /></span>Visual context for RFIs and Observations.</div>
            <div className="tech-table-cell module">Tasks</div><div className="tech-table-cell input">Corrective Actions</div><div className="tech-table-cell benefit"><span className="check"><Check size={12} /></span>Issues flagged in SALUS become Procore Tasks.</div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding testimonials-section" style={{ background: 'hsl(var(--gray-100))' }}>
        <div className="section-inner">
          <div className="badge"><span className="badge-dot"></span>CUSTOMER SUCCESS</div>
          <p className="testimonials-subtitle">Join 1,200+ companies that have abandoned digital paper for intelligent field safety.</p>
          <div className="testimonials-grid">
            <div className="testimonial-card"><div className="testimonial-quote">"</div><p className="testimonial-text">"SALUS is the perfect marriage of both usability and capability. It has really great features for us as admin, but it's simple for my crews to use out in the field, too."</p><div className="testimonial-author"><h5>Health & Safety Manager</h5><span>O'CONNOR ELECTRIC</span></div></div>
            <div className="testimonial-card dark"><p className="testimonial-text">"Before SALUS, we were tracking safety data across 14 different systems—Excel, SharePoint, SiteDocs, you name it. It was unmanageable. Moving to SALUS didn't just digitize us; it unified us."</p><div className="testimonial-author"><h5>Robert Clark, VP of Safety</h5><span>UNIVERSAL GROUP</span></div></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding cta-section dark-section">
        <div className="section-inner" style={{ maxWidth: '600px' }}>
          <h2 className="cta-title">See Salus<br /><span className="highlight">in Action.</span></h2>
          <p className="cta-description">Schedule a live walkthrough to see how SALUS talks to your Procore instance in real-time.</p>
          <a href="#" className="btn btn-lime">Book Your Demo</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-logo"><img src={salusLogo} alt="Salus" className="logo-image" /></div>
          <div className="footer-copyright">© 2024 SALUS SAFETY INC. | ALL RIGHTS RESERVED</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
