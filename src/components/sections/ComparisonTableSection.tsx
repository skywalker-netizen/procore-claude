import { Check } from "lucide-react";

interface ComparisonRow {
  capability: string;
  sitedocs: string;
  salus: string;
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    capability: "Integrated Orientation",
    sitedocs: "Not Available",
    salus: "Full In-App Integration",
  },
  {
    capability: "Corrective Actions",
    sitedocs: "Sub-level Only",
    salus: "Worker-level (Accountable)",
  },
  {
    capability: "Equipment Management",
    sitedocs: "Barebone",
    salus: "Complete asset-level tracking",
  },
  {
    capability: "Business Analytics",
    sitedocs: "Extra / Premium Add-on",
    salus: "Included",
  },
  {
    capability: "Incident Tracking",
    sitedocs: "Not Integrated",
    salus: "Integrated Comprehensive Case File Management System",
  },
  {
    capability: "LMS (Learning Management System)",
    sitedocs: "Not included",
    salus: "Included",
  },
  {
    capability: "System Integration",
    sitedocs: "Limited",
    salus: "Out-of-the-box integrations with Procore, PowerBI, and Sharepoint",
  },
  {
    capability: "Support Model",
    sitedocs: "Ticketing Help Desk",
    salus: "Dedicated Success Partner",
  },
];

export function ComparisonTableSection() {
  return (
    <section className="section-padding section-bg-white">
      <div className="section-inner">
        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th className="comparison-header-capability">CAPABILITY</th>
                <th className="comparison-header-sitedocs">SITEDOCS</th>
                <th className="comparison-header-salus">
                  SALUS <span className="text-lime">PLATFORM</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_DATA.map((row, index) => (
                <tr key={index}>
                  <td className="comparison-capability">{row.capability}</td>
                  <td className="comparison-sitedocs">{row.sitedocs}</td>
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
