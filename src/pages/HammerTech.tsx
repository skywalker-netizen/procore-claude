import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { FieldAdvantageSection } from "@/components/sections/FieldAdvantageSection";
import { TradePartnerSection } from "@/components/sections/TradePartnerSection";
import { StopWorkaroundsSection } from "@/components/sections/StopWorkaroundsSection";
import { IntegrationSection } from "@/components/sections/IntegrationSection";
import { ComparisonTableSection } from "@/components/sections/ComparisonTableSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";
import { SEOHead } from "@/components/shared/SEOHead";

const HammerTech = () => {
  return (
    <div className="min-h-screen">
      <SEOHead variant="hammertech" />
      <Header />
      <HeroSection variant="hammertech" />
      <SocialProofSection variant="general" />
      <ComparisonTableSection variant="hammertech" />
      <FieldAdvantageSection variant="hammertech" />
      <TradePartnerSection variant="hammertech" />
      <StopWorkaroundsSection variant="hammertech" />
      <TestimonialsSection variant="hammertech" bgVariant="white" />
      <IntegrationSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HammerTech;
