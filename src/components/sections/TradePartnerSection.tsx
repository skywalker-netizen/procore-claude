import { SyncBadge } from "@/components/shared/SyncBadge";
import { Quote } from "@/components/shared/Quote";
import { TradePartnerDashboard } from "@/components/infographics/TradePartnerDashboard";
import { UserPlus, QrCode, ClipboardCheck, Handshake } from "lucide-react";
import { TRADE_PARTNER_CONTENT, TRADE_PARTNER_QUOTE } from "@/config";
import type { PageVariant } from "@/config/types";

interface TradePartnerSectionProps {
  variant: PageVariant;
}

const FEATURE_ICONS = [
  <UserPlus size={20} strokeWidth={2} />,
  <QrCode size={20} strokeWidth={2} />,
  <ClipboardCheck size={20} strokeWidth={2} />,
  <Handshake size={20} strokeWidth={2} />,
];

export function TradePartnerSection({ variant }: TradePartnerSectionProps) {
  const content = TRADE_PARTNER_CONTENT[variant];
  const isProcore = variant === "procore";

  return (
    <section className={`section-padding dark-section ${!isProcore ? "trade-partner-section" : ""}`}>
      <div className="section-inner grid-2">
        <div className="trade-content">
          <SyncBadge text={content.badge} />
          <h2 className="section-title trade-title">{content.title}</h2>
          <p className="section-subtitle">{content.subtitle}</p>
          
          {content.features.map((feature, index) => (
            <div key={index} className="trade-feature">
              <div className="trade-feature-icon">
                {FEATURE_ICONS[index]}
              </div>
              <div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="portal-column">
          <TradePartnerDashboard />
          <Quote
            text={TRADE_PARTNER_QUOTE.text}
            author={TRADE_PARTNER_QUOTE.author}
            title={TRADE_PARTNER_QUOTE.title}
            variant="dark"
          />
        </div>
      </div>
    </section>
  );
}
