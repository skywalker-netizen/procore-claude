import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { FieldAdvantageSection } from "@/components/sections/FieldAdvantageSection";
import { StopWorkaroundsSection } from "@/components/sections/StopWorkaroundsSection";
import { TradePartnerSection } from "@/components/sections/TradePartnerSection";
import { PreventativeMaintenanceSection } from "@/components/sections/PreventativeMaintenanceSection";
import { ExecutiveInsightsSection } from "@/components/sections/ExecutiveInsightsSection";
import { IntegrationSection } from "@/components/sections/IntegrationSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";
import { SEOHead } from "@/components/shared/SEOHead";

const Ca = () => {
  return (
    <div className="min-h-screen">
      <SEOHead variant="ca" />
      <Header />
      <HeroSection variant="ca" />
      <SocialProofSection variant="general" />
      <FieldAdvantageSection variant="ca" />
      <StopWorkaroundsSection variant="general" />
      <TradePartnerSection variant="ca" />
      <PreventativeMaintenanceSection variant="ca" />
      <ExecutiveInsightsSection variant="general" />
      <IntegrationSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Ca;
