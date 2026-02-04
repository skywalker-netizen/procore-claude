import { useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { FieldAdvantageSection } from "@/components/sections/FieldAdvantageSection";
import { TradePartnerSection } from "@/components/sections/TradePartnerSection";
import { PreventativeMaintenanceSection } from "@/components/sections/PreventativeMaintenanceSection";
import { IntegrationSection } from "@/components/sections/IntegrationSection";
import { ComparisonTableSection } from "@/components/sections/ComparisonTableSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

const HammerTech = () => {
  useEffect(() => {
    document.title = "Salus vs HammerTech | Safety Management Comparison";
  }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection variant="hammertech" />
      <SocialProofSection variant="general" />
      <ComparisonTableSection variant="hammertech" />
      <FieldAdvantageSection variant="hammertech" />
      <TradePartnerSection variant="hammertech" />
      <PreventativeMaintenanceSection variant="hammertech" />
      <TestimonialsSection />
      <IntegrationSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HammerTech;
