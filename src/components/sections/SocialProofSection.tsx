import fieldBackground from "@/assets/field-background.png";
import procoreFieldBackground from "@/assets/procore-field-background.png";
import { SOCIAL_PROOF_TITLE, SOCIAL_PROOF_STATS, SOCIAL_PROOF_QUOTE } from "@/config";
import { Quote } from "@/components/shared/Quote";
import type { PageVariant } from "@/config/types";

// Index page logos
import kearCivilLogo from "@/assets/logos/kear-civil.png";
import caliberConcreteLogo from "@/assets/logos/caliber-concrete.avif";
import electricPlusLogo from "@/assets/logos/electric-plus.webp";
import mcfarlandLogo from "@/assets/logos/mcfarland.png";
import tunistaLogo from "@/assets/logos/tunista.png";
import turnerLogo from "@/assets/logos/turner.png";
import generalEnergyLogo from "@/assets/logos/general-energy-2.svg";
import willmengLogo from "@/assets/logos/willmeng.png";

// Root page logos
import mcshaneLogo from "@/assets/logos/mcshane.svg";
import stacyWitbeckLogo from "@/assets/logos/stacy-witbeck.png";
import delawareElevatorLogo from "@/assets/logos/delaware-elevator.png";
import broccoliniLogo from "@/assets/logos/broccolini.png";
import lmsSteelLogo from "@/assets/logos/lms-steel.png";

// CA page logos
import appiaLogo from "@/assets/logos/appia.png";
import oconnorElectricLogo from "@/assets/logos/oconnor-electric.png";
import broccoliniCaLogo from "@/assets/logos/broccolini-ca.svg";
import lmsSteelCaLogo from "@/assets/logos/lms-steel-ca.png";
import group1Logo from "@/assets/logos/group-1.png";
import kingHoeLogo from "@/assets/logos/king-hoe.png";
import giustiGroupLogo from "@/assets/logos/giusti-group.png";
import universalGroupLogo from "@/assets/logos/universal-group.png";

interface SocialProofSectionProps {
  variant: PageVariant;
}

export function SocialProofSection({ variant }: SocialProofSectionProps) {
  const isProcore = variant === "procore";
  const isCa = variant === "ca";
  const title = SOCIAL_PROOF_TITLE[variant];
  const backgroundImage = isProcore ? procoreFieldBackground : fieldBackground;

  const renderLogos = () => {
    if (isProcore) {
      return (
        <>
          <img src={turnerLogo} alt="Turner Construction" />
          <img src={mcfarlandLogo} alt="McFarland Construction" />
          <img src={kearCivilLogo} alt="Kear Civil" />
          <img src={caliberConcreteLogo} alt="Caliber Concrete" />
          <img src={electricPlusLogo} alt="Electric Plus" className="logo-height-48" />
          <img src={tunistaLogo} alt="Tunista Construction" className="logo-small-row" />
          <img src={generalEnergyLogo} alt="General Energy" className="invert-logo logo-small-row" />
          <img src={willmengLogo} alt="Willmeng Construction" />
        </>
      );
    }

    if (isCa) {
      return (
        <>
          <img src={appiaLogo} alt="Appia Development" className="invert-logo logo-height-80" />
          <img src={oconnorElectricLogo} alt="O'Connor Electric" />
          <img src={broccoliniCaLogo} alt="Broccolini" className="invert-logo" />
          <img src={lmsSteelCaLogo} alt="LMS Reinforcing Steel Group" className="invert-logo" />
          <img src={group1Logo} alt="Group 1" />
          <img src={kingHoeLogo} alt="King Hoe Excavating" className="invert-logo" />
          <img src={giustiGroupLogo} alt="Giusti Group" />
          <img src={universalGroupLogo} alt="Universal Group" />
        </>
      );
    }

    return (
      <>
        <img src={kearCivilLogo} alt="Kear Civil" />
        <img src={electricPlusLogo} alt="Electric Plus" className="logo-height-80" />
        <img src={generalEnergyLogo} alt="General Energy" className="invert-logo logo-small-row" />
        <img src={mcshaneLogo} alt="McShane Construction" />
        <img src={stacyWitbeckLogo} alt="Stacy Witbeck" />
        <img src={delawareElevatorLogo} alt="Delaware Elevator" />
        <img src={broccoliniLogo} alt="Broccolini" />
        <img src={lmsSteelLogo} alt="LMS Reinforcing Steel Group" />
      </>
    );
  };

  return (
    <section className="social-proof-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="social-proof-inner">
        <h3 className="social-proof-title">{title}</h3>
        <div className="social-proof-logos">
          {renderLogos()}
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
