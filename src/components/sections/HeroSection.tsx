import { ReactNode } from "react";
import { Layers, Zap, Settings } from "lucide-react";
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

const generalTrustBadges: TrustBadgeItem[] = [
  {
    icon: <Layers size={22} strokeWidth={2.5} />,
    iconBg: "lime",
    text: "All-in-one connected",
    subtext: "safety ecosystem",
  },
  {
    icon: <Zap size={22} strokeWidth={2.5} />,
    iconBg: "navy",
    text: "Jobsites - office",
    subtext: "constant feedback loop",
  },
  {
    icon: <Settings size={22} strokeWidth={2.5} />,
    iconBg: "navy",
    text: "Agile - up and running in as",
    subtext: "little as two weeks",
  },
];

export function HeroSection({ variant }: HeroSectionProps) {
  const isProcore = variant === "procore";
  const trustBadges = generalTrustBadges;

  return (
    <section className="hero">
      <div className="hero-inner">
        <div>
          <SyncBadge />
          <h1 className="hero-title">
            Safety management software<br />
            <span className="highlight">Loved by Boots and Suits.</span>
          </h1>
          
          <p className="hero-subtitle">
            You're outgrowing paper binders and simple safety forms, but "good enough" safety is not an option and you don't have time for "Enterprise" bloat that takes six months to deploy.
          </p>
          <p className="hero-description">
            SALUS provides high-precision trades and general contractors with a live stream of high-fidelity, actionable field intelligence and helps close the accountability gaps so that mission-critical projects stay on track and reputations stay protected.
          </p>
          <p className="hero-tagline">
            Zero Incidents. Zero Downtime. Zero Blindspots.
          </p>

          <div className="trust-badges">
            {trustBadges.map((badge, index) => (
              <div key={index} className="trust-badge">
                <div className={`trust-icon ${badge.iconBg}`}>
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
