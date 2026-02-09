import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { FieldAdvantageSection } from "@/components/sections/FieldAdvantageSection";
import { TradePartnerSection } from "@/components/sections/TradePartnerSection";
import { PreventativeMaintenanceSection } from "@/components/sections/PreventativeMaintenanceSection";
import { StopWorkaroundsSection } from "@/components/sections/StopWorkaroundsSection";
import { ExecutiveInsightsSection } from "@/components/sections/ExecutiveInsightsSection";
import { IntegrationSection } from "@/components/sections/IntegrationSection";
import { ComparisonTableSection } from "@/components/sections/ComparisonTableSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";
import { SEOHead } from "@/components/shared/SEOHead";
import { useHashScroll } from "@/hooks/useHashScroll";

const ECompliance = () => {
  useHashScroll();

  return (
    <div className="min-h-screen">
      <SEOHead variant="ecompliance" />
      <Header />
      <HeroSection variant="ecompliance" />
      <SocialProofSection variant="ecompliance" />
      <ComparisonTableSection variant="ecompliance" />
      <FieldAdvantageSection variant="ecompliance" />
      <TradePartnerSection variant="ecompliance" />
      <PreventativeMaintenanceSection variant="ecompliance" />
      <ExecutiveInsightsSection variant="ecompliance" />
      <StopWorkaroundsSection variant="ecompliance" />
      <TestimonialsSection variant="ecompliance" bgVariant="white" />
      <IntegrationSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default ECompliance;
