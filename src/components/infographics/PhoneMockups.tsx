import { Zap } from "lucide-react";

export function PhoneMockups() {
  return (
    <div className="phone-comparison-wrapper">
      <div className="phone-comparison">
        {/* PDF Mockup */}
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

        {/* Smart Form Mockup */}
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
                    <div className="sf-step sf-step-1">
                      <div className="sf-card">
                        <div className="sf-card-header">
                          <h5>TCP/LCT FLRA</h5>
                          <span className="sf-subtitle">Risk Assessment Form</span>
                        </div>
                      </div>
                    </div>
                    <div className="sf-step sf-step-2">
                      <div className="sf-question">
                        <label>Type of Roadway/Work</label>
                        <div className="sf-required">REQUIRED</div>
                      </div>
                    </div>
                    <div className="sf-step sf-step-3">
                      <div className="sf-options">
                        <div className="sf-option">2-Lane, 2 Way Roadway</div>
                        <div className="sf-option">Multilane Undivided</div>
                        <div className="sf-option selected">Multilane Divided Roadway</div>
                      </div>
                    </div>
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
                    <div className="sf-step sf-step-5">
                      <div className="sf-risk-result">
                        <div className="sf-risk-label">CALCULATED RISK LEVEL</div>
                        <div className="sf-risk-value high">HIGH</div>
                      </div>
                    </div>
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
  );
}
