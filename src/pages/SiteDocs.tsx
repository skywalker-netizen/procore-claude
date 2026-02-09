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
import { SEOHead } from "@/components/shared/SEOHead";
import { useHashScroll } from "@/hooks/useHashScroll";

const SiteDocs = () => {
  useHashScroll();

  return (
    <div className="min-h-screen">
      <SEOHead variant="sitedocs" />
      <Header />
      <HeroSection variant="sitedocs" />
      <SocialProofSection variant="general" />
      <ComparisonTableSection />
      <TradePartnerSection variant="sitedocs" />
      <FieldAdvantageSection variant="sitedocs" />
      <PreventativeMaintenanceSection variant="sitedocs" />
      <TestimonialsSection />
      <IntegrationSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default SiteDocs;
