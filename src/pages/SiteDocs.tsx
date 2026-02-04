import { useEffect } from "react";
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

const SiteDocs = () => {
  useEffect(() => {
    document.title = "Salus - SiteDocs";
  }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection variant="sitedocs" />
      <SocialProofSection variant="general" />
      <TradePartnerSection variant="sitedocs" />
      <FieldAdvantageSection variant="sitedocs" />
      <StopWorkaroundsSection variant="general" />
      <PreventativeMaintenanceSection />
      <ExecutiveInsightsSection variant="general" />
      <IntegrationSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default SiteDocs;
