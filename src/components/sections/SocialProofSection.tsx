import fieldBackground from "@/assets/field-background.png";
import procoreFieldBackground from "@/assets/procore-field-background.png";
import { SOCIAL_PROOF_TITLE, SOCIAL_PROOF_STATS, SOCIAL_PROOF_QUOTE } from "@/config";
import { Quote } from "@/components/shared/Quote";
import type { PageVariant } from "@/config/types";

// Index page logos
import kearCivilLogo from "@/assets/logos/kear-civil.png";
import caliberConcreteLogo from "@/assets/logos/caliber-concrete.avif";
import titanElectricalLogo from "@/assets/logos/titan-electrical.png";
import electricPlusLogo from "@/assets/logos/electric-plus.webp";
import mcfarlandLogo from "@/assets/logos/mcfarland.png";
import tunistaLogo from "@/assets/logos/tunista.png";
import turnerLogo from "@/assets/logos/turner.png";
import generalEnergyLogo from "@/assets/logos/general-energy-2.svg";
import willmengLogo from "@/assets/logos/willmeng.png";

// Root page logos
import glyLogo from "@/assets/logos/gly.svg";
import mcshaneLogo from "@/assets/logos/mcshane.svg";
import stacyWitbeckLogo from "@/assets/logos/stacy-witbeck.png";
import jfElectricLogo from "@/assets/logos/jf-electric.png";

interface SocialProofSectionProps {
  variant: PageVariant;
}

export function SocialProofSection({ variant }: SocialProofSectionProps) {
  const isProcore = variant === "procore";
  const title = SOCIAL_PROOF_TITLE[variant];
  const backgroundImage = isProcore ? procoreFieldBackground : fieldBackground;

  return (
    <section className="social-proof-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="social-proof-inner">
        <h3 className="social-proof-title">{title}</h3>
        <div className="social-proof-logos">
          {isProcore ? (
            <>
              <img src={turnerLogo} alt="Turner Construction" />
              <img src={mcfarlandLogo} alt="McFarland Construction" />
              <img src={kearCivilLogo} alt="Kear Civil" />
              <img src={titanElectricalLogo} alt="Titan Electrical Services" />
              <img src={caliberConcreteLogo} alt="Caliber Concrete" />
              <img src={electricPlusLogo} alt="Electric Plus" className="logo-height-48" />
              <img src={tunistaLogo} alt="Tunista Construction" className="logo-small-row" />
              <img src={generalEnergyLogo} alt="General Energy" className="invert-logo logo-small-row" />
              <img src={willmengLogo} alt="Willmeng Construction" />
            </>
          ) : (
            <>
              <img src={turnerLogo} alt="Turner Construction" />
              <img src={kearCivilLogo} alt="Kear Civil" />
              <img src={titanElectricalLogo} alt="Titan Electrical Services" />
              <img src={electricPlusLogo} alt="Electric Plus" className="logo-height-48" />
              <img src={tunistaLogo} alt="Tunista Construction" className="logo-small-row" />
              <img src={generalEnergyLogo} alt="General Energy" className="invert-logo logo-small-row" />
              <img src={glyLogo} alt="GLY Construction" className="invert-logo" />
              <img src={mcshaneLogo} alt="McShane Construction" />
              <img src={stacyWitbeckLogo} alt="Stacy Witbeck" />
              <img src={jfElectricLogo} alt="JF Electric" />
            </>
          )}
        </div>
        <Quote
          text={SOCIAL_PROOF_QUOTE.text}
          author={SOCIAL_PROOF_QUOTE.author}
          title={SOCIAL_PROOF_QUOTE.title}
          variant="dark"
          className="my-10 max-w-xl mx-auto text-center"
        />
        <div className="social-proof-stats">
          {SOCIAL_PROOF_STATS.map((stat, index) => (
            <div key={index} className="social-proof-stat">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
