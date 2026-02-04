import { ReactNode } from "react";
import { ShieldCheck, RefreshCw, Rocket } from "lucide-react";
import { DemoForm } from "@/components/forms/DemoForm";
import { SyncBadge } from "@/components/shared/SyncBadge";
import { G2Badge } from "@/components/shared/G2Badge";
import { HERO_CONTENT, HERO_TRUST_BADGES } from "@/config";
import type { PageVariant } from "@/config/types";

interface HeroSectionProps {
  variant: PageVariant;
}

const TRUST_BADGE_ICONS: ReactNode[] = [
  <ShieldCheck size={22} strokeWidth={2.5} />,
  <RefreshCw size={22} strokeWidth={2.5} />,
  <Rocket size={22} strokeWidth={2.5} />,
];

export function HeroSection({ variant }: HeroSectionProps) {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div>
          <SyncBadge />
          <h1 className="hero-title">
            {HERO_CONTENT.title}<br />
            <span className="highlight">{HERO_CONTENT.titleHighlight}</span>
          </h1>
          
          <p className="hero-subtitle">{HERO_CONTENT.subtitle}</p>
          <p className="hero-description">{HERO_CONTENT.description}</p>
          <p className="hero-tagline">{HERO_CONTENT.tagline}</p>

          <div className="trust-badges">
            {HERO_TRUST_BADGES.map((badge, index) => (
              <div key={index} className="trust-badge">
                <div className={`trust-icon ${badge.iconBg}`}>
                  {TRUST_BADGE_ICONS[index]}
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
