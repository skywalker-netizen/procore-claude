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

const Root = () => {
  useEffect(() => {
    document.title = "Salus - Adoption-First Safety Management Software";
  }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection variant="general" />
      <SocialProofSection variant="general" />
      <FieldAdvantageSection variant="general" />
      <StopWorkaroundsSection variant="general" />
      <TradePartnerSection variant="general" />
      <PreventativeMaintenanceSection variant="general" />
      <ExecutiveInsightsSection variant="general" />
      <IntegrationSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Root;
