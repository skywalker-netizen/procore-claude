import { ReactNode } from "react";
import { Link2, Zap, ShieldCheck, RefreshCw, Rocket } from "lucide-react";
import { DemoForm } from "@/components/forms/DemoForm";
import { SyncBadge } from "@/components/shared/SyncBadge";
import { G2Badge } from "@/components/shared/G2Badge";
import { HERO_CONTENT, HERO_TRUST_BADGES } from "@/config";
import type { PageVariant } from "@/config/types";

interface HeroSectionProps {
  variant: PageVariant;
}

const PROCORE_ICONS: ReactNode[] = [
  <Link2 size={22} strokeWidth={2.5} />,
  <Zap size={22} strokeWidth={2.5} />,
];

const GENERAL_ICONS: ReactNode[] = [
  <ShieldCheck size={22} strokeWidth={2.5} />,
  <RefreshCw size={22} strokeWidth={2.5} />,
  <Rocket size={22} strokeWidth={2.5} />,
];

export function HeroSection({ variant }: HeroSectionProps) {
  const content = HERO_CONTENT[variant];
  const trustBadges = HERO_TRUST_BADGES[variant];
  const icons = variant === "procore" ? PROCORE_ICONS : GENERAL_ICONS;
  const isProcore = variant === "procore";

  return (
    <section className="hero">
      <div className="hero-inner">
        <div>
          <SyncBadge text={content.badge} />
          {isProcore ? (
            <h1 className="hero-title">
              The Best Field Engine<br />
              for your Procore <span className="highlight">Brain.</span>
            </h1>
          ) : (
            <h1 className="hero-title">
              {content.title}<br />
              <span className="highlight-block">{content.titleHighlight}</span>
            </h1>
          )}
          
          {isProcore ? (
            <>
              <p className="hero-subtitle">
                {content.subtitleLine1}<br />
                <em className="hero-italic">{content.subtitleLine2Italic}</em>
                {content.subtitleLine2End}<br />
                {content.subtitleLine3}
              </p>
              <p className="hero-description">{content.description}</p>
            </>
          ) : (
            <>
              <p className="hero-subtitle">{content.subtitle}</p>
              <p className="hero-description">{content.description}</p>
              {content.tagline && <p className="hero-tagline">{content.tagline}</p>}
            </>
          )}

          <div className={`trust-badges ${isProcore ? 'trust-badges-procore' : ''}`}>
            {trustBadges.map((badge, index) => (
              <div key={index} className="trust-badge">
                <div className={`trust-icon ${badge.iconBg}`}>
                  {icons[index]}
                </div>
                <div className="trust-text">
                  <strong>{badge.text}</strong>
                  <span>{badge.subtext}</span>
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
