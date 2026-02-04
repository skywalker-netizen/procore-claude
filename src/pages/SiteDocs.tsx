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
      <PreventativeMaintenanceSection />
      <TestimonialsSection />
      <IntegrationSection />
      <ComparisonTableSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default SiteDocs;
