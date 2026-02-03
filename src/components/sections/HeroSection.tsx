import { ReactNode } from "react";
import { Link, Zap, Layers, ScanSearch, Rocket, Star } from "lucide-react";
import { DemoForm } from "@/components/forms/DemoForm";
import { SyncBadge } from "@/components/shared/SyncBadge";
import { G2Badge } from "@/components/shared/G2Badge";

interface TrustBadgeItem {
  icon: ReactNode;
  iconBg: string;
  text: string;
  subtext?: string;
}

interface HeroSectionProps {
  variant: "procore" | "general";
}

const procoreTrustBadges: TrustBadgeItem[] = [
  {
    icon: <Link size={22} strokeWidth={2.5} />,
    iconBg: "navy",
    text: "Certified App",
    subtext: "PROCORE MARKETPLACE",
  },
  {
    icon: <Zap size={22} strokeWidth={2.5} fill="currentColor" />,
    iconBg: "lime",
    text: "Real-time Sync",
    subtext: "BI-DIRECTIONAL API",
  },
];

const generalTrustBadges: TrustBadgeItem[] = [
  {
    icon: <Layers size={22} strokeWidth={2.5} />,
    iconBg: "lime",
    text: "All-in-one field ecosystem",
  },
  {
    icon: <ScanSearch size={22} strokeWidth={2.5} />,
    iconBg: "beige",
    text: "Inspection-ready and audit-proof",
  },
  {
    icon: <Rocket size={22} strokeWidth={2.5} />,
    iconBg: "custom",
    text: "Agile deployment",
  },
];

export function HeroSection({ variant }: HeroSectionProps) {
  const isProcore = variant === "procore";
  const trustBadges = isProcore ? procoreTrustBadges : generalTrustBadges;

  return (
    <section className="hero">
      <div className="hero-inner">
        <div>
          <SyncBadge />
          {isProcore ? (
            <h1 className="hero-title">
              The Best Field Engine
              <br />
              for your Procore
              <br />
              <span className="highlight">Brain.</span>
            </h1>
          ) : (
            <h1 className="hero-title">
              A System of Reality<br />
              <span className="highlight">Loved by Boots and Suits.</span>
            </h1>
          )}
          
          {isProcore ? (
            <>
              <p className="hero-subtitle">
                Procore dashboard says "compliant." But is it the truth?
                <br />
                <em>Field teams call its safety module "click hell."</em> Forms get pencil-whipped. Your System of Record is only as good as your System of Reality.
              </p>
              <p className="hero-description">
                SALUS feeds Procore with a live feed of high-fidelity field intelligence, ensuring your mission-critical
                delivery stays on track and out of the headlines. Zero Incidents. Zero Downtime. Zero Blindspots.
              </p>
            </>
          ) : (
            <>
              <p className="hero-subtitle">
                You're outgrowing paper binders and simple safety forms, but "good enough" safety is not an option and you don't have time for "Enterprise" bloat that takes six months to deploy.
              </p>
              <p className="hero-description">
                SALUS provides high-precision trades and general contractors with a live stream of high-fidelity, actionable field intelligence and helps close the accountability gaps so that mission-critical projects stay on track and reputations stay protected.
              </p>
              <p className="hero-tagline">
                Zero Incidents. Zero Downtime. Zero Blindspots.
              </p>
            </>
          )}

          <div className="trust-badges">
            {trustBadges.map((badge, index) => (
              <div key={index} className="trust-badge">
                <div 
                  className={`trust-icon ${badge.iconBg}`}
                  style={badge.iconBg === "custom" ? { backgroundColor: '#2d3748', color: 'white' } : undefined}
                >
                  {badge.icon}
                </div>
                <div className="trust-text">
                  <strong>{badge.text}</strong>
                  {badge.subtext && <span>{badge.subtext}</span>}
                </div>
              </div>
            ))}
          </div>

          <div className="hero-proof-section">
            <G2Badge />
          </div>
        </div>
        <div id="demo-form">
          <DemoForm variant="hero" />
        </div>
      </div>
    </section>
  );
}
