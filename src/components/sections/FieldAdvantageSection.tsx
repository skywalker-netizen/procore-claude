import { Heart, FileText, MessageSquare } from "lucide-react";
import { SyncBadge } from "@/components/shared/SyncBadge";
import { FeatureItem } from "@/components/shared/FeatureItem";
import { Quote } from "@/components/shared/Quote";
import { PhoneMockups } from "@/components/infographics/PhoneMockups";

interface FieldAdvantageSectionProps {
  variant: "procore" | "general";
}

export function FieldAdvantageSection({ variant }: FieldAdvantageSectionProps) {
  const isProcore = variant === "procore";

  return (
    <section className="section-padding field-advantage-section" style={{ background: "hsl(var(--white))" }}>
      <div className="section-inner">
        <div className="field-advantage-grid">
          <div className="field-advantage-content">
            <SyncBadge text="THE FIELD ADVANTAGE" />
            {isProcore ? (
              <h2 className="section-title">
                You Can't Build a Data Center <span className="highlight">with a Stylus and a PDF.</span>
              </h2>
            ) : (
              <h2 className="section-title">
                100% field participation. <span className="highlight">That changes everything.</span>
              </h2>
            )}
            <p className="section-subtitle">
              {isProcore
                ? "100% compliance from the field, and data you can actually search in the office."
                : "You cannot be on every site, and your regional managers are drowning in a \"Visibility Gap\". But workers will \"pencil-whip\" fillable PDFs at 4:00 PM just to go home."
              }
            </p>

            <FeatureItem
              icon={<Heart size={20} />}
              iconColor="red"
              title="Mobile-First. Field-Loved."
              description={isProcore
                ? "Procore's static PDFs are built for desktops, not for a foreman in a high-vis vest in 100-degree heat. SALUS Smart Forms are mobile-first, logic-driven, and loved by the field. They speak their language and adapt to their reality. If a trench is over 5ft, the \"Shoring Evidence\" photo becomes mandatory."
                : "Onboard in the Trench: When you hire 20 new workers for a high-stakes data center project, they don't need a four-hour software orientation. If they can send a text, they can use SALUS to stay compliant."
              }
              variant="numbered"
            />
            <FeatureItem
              icon={<FileText size={20} />}
              iconColor="lime"
              title={isProcore ? "The \"Flat\" Form Trap" : "Not just digital forms; workflows."}
              description={isProcore
                ? "Procore Static fillable PDFs trap your data in a document, making it invisible to analytics."
                : "With Salus, you don't ask workers to learn a new \"software\" process; you provide a digital version of the way they already work in the field."
              }
              variant="numbered"
            />
            <FeatureItem
              icon={<MessageSquare size={20} />}
              iconColor="blue"
              title={isProcore ? "Salus forms are litigation-grade." : "More relevant, better intel"}
              description={isProcore
                ? "GPS-stamped location proof. Mandatory photo evidence for failed check. Voice-to-text captures the nuance of a hazard, not just a checkbox. The signed PDF still lands in Procore for your records, but now you have context."
                : "Salus AI-powered Smart Forms adapt to the reality in the field, provide the information required to do the job, and skip anything not relevant to the job. If a trench is over 5ft, the \"Shoring Evidence\" photo becomes mandatory."
              }
              variant="numbered"
            />
          </div>

          <div className="field-advantage-mockups">
            <PhoneMockups />
            <Quote
              text="That first week is so important when you put a new user on a platform. Can they use it, and does everything work the way you're saying it's going to work? If it doesn't, you are going to struggle for the next two years to get them back involved. That was the biggest hurdle that we got over quite easily with SALUS."
              author="Dennis Rumshas"
              title="Vice President of Safety and Risk Management, McShane Construction"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
