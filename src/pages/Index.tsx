import { useEffect } from "react";
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

const Index = () => {
  useEffect(() => {
    document.title = "Salus | Procore's Field-First Safety Companion";
  }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection variant="procore" />
      <SocialProofSection variant="procore" />
      <IntegrationSection />
      <FieldAdvantageSection variant="procore" />
      <ExecutiveInsightsSection variant="procore" />
      <StopWorkaroundsSection variant="procore" />
      <TradePartnerSection variant="procore" />
      <PreventativeMaintenanceSection />
      <TechSpecsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
