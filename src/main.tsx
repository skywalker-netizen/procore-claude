import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// ==========================================================================
// CSS IMPORTS - Modular Architecture (order matters for cascade)
// ==========================================================================

// Tailwind base, components, utilities
import "./index.css";

// Base styles
import "./styles/base/variables.css";
import "./styles/base/reset.css";
import "./styles/base/typography.css";

// Layout
import "./styles/layout/utilities.css";
import "./styles/layout/header.css";
import "./styles/layout/footer.css";

// Components
import "./styles/components/buttons.css";
import "./styles/components/badges.css";
import "./styles/components/cards.css";
import "./styles/components/forms.css";
import "./styles/components/icons.css";

// Shared patterns
import "./styles/patterns/shared.css";

// Page sections
import "./styles/sections/hero.css";
import "./styles/sections/social-proof.css";
import "./styles/sections/integration.css";
import "./styles/sections/field-advantage.css";
import "./styles/sections/trade-partner.css";
import "./styles/sections/stop-workarounds.css";
import "./styles/sections/executive.css";
import "./styles/sections/preventative.css";
import "./styles/sections/tech-specs.css";
import "./styles/sections/testimonials.css";
import "./styles/sections/cta.css";
import "./styles/sections/comparison-table.css";

// Infographics
import "./styles/infographics/integration-diagram.css";
import "./styles/infographics/compliance-core.css";
import "./styles/infographics/phone-mockups.css";
import "./styles/infographics/trade-partner-dashboard.css";
import "./styles/infographics/analytics-card.css";
import "./styles/infographics/site-onboarding.css";

// Animations & Responsive
import "./styles/animations.css";
import "./styles/responsive.css";

// ==========================================================================

createRoot(document.getElementById("root")!).render(<App />);
