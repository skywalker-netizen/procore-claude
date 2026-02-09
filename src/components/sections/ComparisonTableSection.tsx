import { Check } from "lucide-react";
import { SyncBadge } from "@/components/shared/SyncBadge";
import type { PageVariant } from "@/config/types";

interface ComparisonRow {
  capability: string;
  competitor: string;
  salus: string;
}

interface ComparisonTableProps {
  variant?: "sitedocs" | "hammertech" | "ecompliance";
}

const SITEDOCS_COMPARISON_DATA: ComparisonRow[] = [
  {
    capability: "Integrated Orientation",
    competitor: "Not Available",
    salus: "Full In-App Integration",
  },
  {
    capability: "Corrective Actions",
    competitor: "Sub-level Only",
    salus: "Worker-level (Accountable)",
  },
  {
    capability: "Equipment Management",
    competitor: "Barebone",
    salus: "Complete asset-level tracking",
  },
  {
    capability: "Business Analytics",
    competitor: "Extra / Premium Add-on",
    salus: "Included",
  },
  {
    capability: "Incident Tracking",
    competitor: "Not Integrated",
    salus: "Integrated Comprehensive Case File Management System",
  },
  {
    capability: "LMS (Learning Management System)",
    competitor: "Not included",
    salus: "Included",
  },
  {
    capability: "System Integration",
    competitor: "Limited",
    salus: "Out-of-the-box integrations with Procore, PowerBI, and Sharepoint",
  },
  {
    capability: "Support Model",
    competitor: "Ticketing Help Desk",
    salus: "Dedicated Success Partner",
  },
];

const HAMMERTECH_COMPARISON_DATA: ComparisonRow[] = [
  {
    capability: "Form Customization",
    competitor: "Static / Fixed",
    salus: "Fully Customizable Workflows",
  },
  {
    capability: "Procore Integration",
    competitor: "Manhours & Subs Only",
    salus: "Auto-Sync All Safety Forms",
  },
  {
    capability: "Integrated LMS",
    competitor: "Not Available",
    salus: "Built-in Training Catalog",
  },
  {
    capability: "AI Safety Assistant",
    competitor: "Manual / None",
    salus: "Real-time Translations & Content",
  },
  {
    capability: "User Interface",
    competitor: "Steep Learning Curve",
    salus: "Field-Ready (High Buy-in)",
  },
  {
    capability: "Mobile Reliability",
    competitor: "Known Android Friction",
    salus: "Optimized Mobile Experience",
  },
  {
    capability: "Business Analytics",
    competitor: "Complex Setup",
    salus: "Included & Automated",
  },
  {
    capability: "Implementation",
    competitor: "Self-Service / Steep",
    salus: "Success Partner Led",
  },
];

const ECOMPLIANCE_COMPARISON_DATA: ComparisonRow[] = [
  {
    capability: "Mobile Reliability",
    competitor: "Frequent crashes & forced logouts",
    salus: "Zero-interruption updates",
  },
  {
    capability: "App/Web Sync",
    competitor: "App and portal don't communicate",
    salus: "Instant bi-directional sync",
  },
  {
    capability: "Contractor Access",
    competitor: "Paid membership required",
    salus: "Free QR-code onboarding",
  },
  {
    capability: "Site Orientations",
    competitor: "Extra cost add-on",
    salus: "Included with QR codes",
  },
  {
    capability: "Asset Management",
    competitor: "No asset profiles or reports",
    salus: "Full asset-level tracking",
  },
  {
    capability: "Analytics Setup",
    competitor: "Confusing, vendor-dependent",
    salus: "Out-of-the-box reporting",
  },
  {
    capability: "Action Item Flow",
    competitor: "Broken approval chain",
    salus: "Closed-loop accountability",
  },
  {
    capability: "Support Model",
    competitor: "Train-the-Trainer (DIY)",
    salus: "Dedicated Success Partner",
  },
];

const COMPETITOR_LABELS: Record<string, string> = {
  sitedocs: "SITEDOCS",
  hammertech: "HAMMERTECH",
  ecompliance: "eCOMPLIANCE",
};

export function ComparisonTableSection({ variant = "sitedocs" }: ComparisonTableProps) {
  const data = variant === "hammertech" ? HAMMERTECH_COMPARISON_DATA : variant === "ecompliance" ? ECOMPLIANCE_COMPARISON_DATA : SITEDOCS_COMPARISON_DATA;
  const competitorLabel = COMPETITOR_LABELS[variant];

  return (
    <section id="capability-gap" className="section-padding section-bg-white" style={{ scrollMarginTop: '80px' }}>
      <div className="section-inner">
        <div className="text-center mb-12">
          <SyncBadge text="THE CAPABILITY GAP" />
          {variant === "hammertech" ? (
            <>
              <h2 className="section-title mt-4">
                Performance without <span className="highlight">Friction.</span>
              </h2>
              <p className="section-subtitle max-w-3xl mx-auto">
                HammerTech is a complex machine. SALUS is a high-performance engine designed for the people using it.
              </p>
            </>
          ) : variant === "ecompliance" ? (
            <>
              <h2 className="section-title mt-4">
                Reliability over <span className="highlight">Frustration.</span>
              </h2>
              <p className="section-subtitle max-w-3xl mx-auto">
                eCompliance's friction drives workers away. SALUS is built for the field, not against it.
              </p>
            </>
          ) : (
            <>
              <h2 className="section-title mt-4">
                Total <span className="highlight">Visibility.</span>
              </h2>
              <p className="section-subtitle max-w-3xl mx-auto">
                Every Worker. Every Asset. Every Site: SALUS scales with your business.
              </p>
            </>
          )}
        </div>
        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th className="comparison-header-capability">CAPABILITY</th>
                <th className="comparison-header-sitedocs">{competitorLabel}</th>
                <th className="comparison-header-salus">
                  SALUS <span className="text-lime">PLATFORM</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td className="comparison-capability">{row.capability}</td>
                  <td className="comparison-sitedocs">{row.competitor}</td>
                  <td className="comparison-salus">
                    <div className="salus-value">
                      <span className="salus-check">
                        <Check size={16} strokeWidth={3} />
                      </span>
                      <span>{row.salus}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
