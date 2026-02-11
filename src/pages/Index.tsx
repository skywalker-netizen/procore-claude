import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { IntegrationSection } from "@/components/sections/IntegrationSection";
import { FieldAdvantageSection } from "@/components/sections/FieldAdvantageSection";
import { StopWorkaroundsSection } from "@/components/sections/StopWorkaroundsSection";
import { TradePartnerSection } from "@/components/sections/TradePartnerSection";
import { ExecutiveInsightsSection } from "@/components/sections/ExecutiveInsightsSection";
import { PreventativeMaintenanceSection } from "@/components/sections/PreventativeMaintenanceSection";
import { TechSpecsSection } from "@/components/sections/TechSpecsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";
import { SEOHead } from "@/components/shared/SEOHead";
import { useHashScroll } from "@/hooks/useHashScroll";

const Index = () => {
  useHashScroll();

  return (
    <div className="min-h-screen">
      <SEOHead variant="procore" includeProductSchema />
      <Header />
      <main>
        <HeroSection variant="procore" />
        <SocialProofSection variant="procore" />
        <IntegrationSection />
        <FieldAdvantageSection variant="procore" />
        <StopWorkaroundsSection variant="procore" />
        <TradePartnerSection variant="procore" />
        <PreventativeMaintenanceSection />
        <ExecutiveInsightsSection variant="procore" />
        <TechSpecsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
