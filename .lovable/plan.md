

# eCompliance Competitive Landing Page

## Overview
Create a new `/ecompliance` landing page following the same pattern as the existing `/sitedocs` and `/hammertech` pages. The page will compare SALUS against eCompliance using data from the uploaded spreadsheet, organized into the key sections you specified.

## Page Layout (Section Order)
Following the SiteDocs/HammerTech pattern:

1. **Hero** -- "SALUS vs. eCompliance" positioning
2. **Social Proof** (logo bar)
3. **Comparison Table** -- 8-row table covering the 6 themes you identified
4. **Field Advantage (Mobile App)** -- Most salient mobile app pain points (rows 3-15)
5. **Trade Partner Management (Contractor Management)** -- rows 16-19
6. **Preventative Maintenance (Asset Management)** -- eCompliance's barebone asset management vs. SALUS
7. **Stop the Workarounds (Closed-Loop Accountability)** -- Action items, hazard assessments, compliance gaps
8. **Testimonials (Customer Success)** -- eCompliance's "train-the-trainer" model vs. SALUS dedicated success partner
9. **Executive Insights (Analytics)** -- eCompliance's confusing stats setup vs. SALUS out-of-the-box reporting
10. **Integration Section**
11. **CTA**
12. **Footer**

## Comparison Table (8 Rows)

| Capability | eCompliance | SALUS |
|---|---|---|
| Mobile Reliability | Frequent crashes & forced logouts | Zero-interruption updates |
| App/Web Sync | App and portal don't communicate | Instant bi-directional sync |
| Contractor Access | Paid membership required | Free QR-code onboarding |
| Site Orientations | Extra cost add-on | Included with QR codes |
| Asset Management | No asset profiles or reports | Full asset-level tracking |
| Analytics Setup | Confusing, vendor-dependent | Out-of-the-box reporting |
| Action Item Flow | Broken approval chain | Closed-loop accountability |
| Support Model | Train-the-Trainer (DIY) | Dedicated Success Partner |

## Section Content Highlights

### Hero
- Badge: "RELIABILITY OVER FRUSTRATION"
- Title: "SALUS vs. eCompliance:"
- Highlight: "Stop losing workers to a broken app."
- Subtitle: Derived from the spreadsheet -- workers stop logging in due to app frustrations, putting safety compliance at risk
- Trust badges: "All-in-one connected safety ecosystem", "Zero service interruptions", "Dedicated Success Partner"

### Field Advantage (Mobile App -- rows 3-15)
- Badge: "THE FIELD ADVANTAGE"
- Title: "Your App Shouldn't Be the Hazard."
- 3 salient bullet points from the spreadsheet:
  1. **Zero-Interruption Updates** -- eCompliance kicks users off during updates, causing lost forms and frustration
  2. **Seamless App-Web Sync** -- eCompliance's app and web portal don't communicate; forms created in one don't appear in the other
  3. **Supervisor-Ready Mobile** -- eCompliance's app is too simple for supervisors; SALUS gives supervisors field tools while keeping it simple for workers

### Trade Partner (Contractor Management -- rows 16-19)
- Subtitle: Contractors can't access eCompliance without purchasing a membership. SALUS onboards trades for free via QR codes and provides multiple submission paths
- Features: Zero Barrier Access, QR Code Onboarding, Document Monitoring, Accountability

### Preventative Maintenance (Asset Management)
- Title: "Equipment Chaos vs. Asset Precision"
- Subtitle: eCompliance has no asset profiles, no service reminders, and no asset-specific reports. SALUS gives every piece of equipment its own digital identity
- Features: Maintenance cases, Inspection history, Operational status (titleOnly style, matching SiteDocs)

### Stop the Workarounds (Closed-Loop Accountability)
- Title: "Close the Loop on"
- Highlight: "Every Action Item."
- Subtitle: eCompliance's action items show overdue even after action is taken. Hazard assessments can be unpublished by anyone. SALUS provides a closed-loop system where actions are tracked to completion
- Features: Unified Platform, Closed-Loop Actions, Timezone-Aware Scheduling

### Testimonials (Customer Success)
- Subtitle: eCompliance uses a "train-the-trainer" model -- they train a few champions and expect them to train everyone else. SALUS provides a dedicated success manager with unlimited training for admins, supervisors, field workers, and subcontractors

### Executive Insights (Analytics)
- Subtitle: eCompliance's analytics setup is confusing and vendor-dependent. SALUS provides out-of-the-box reporting for Projects, Forms, Workers, Corrective Actions, Certificates, Assets, Subcontractors, and Incidents

## Technical Changes

### 1. Add `"ecompliance"` to the `PageVariant` type
- File: `src/config/types.ts`
- Add `"ecompliance"` to the union type

### 2. Add `ecompliance` entries to all content config files
- `src/config/content/hero.ts` -- new hero content + trust badges
- `src/config/content/field-advantage.ts` -- mobile app pain points
- `src/config/content/trade-partner.ts` -- contractor management
- `src/config/content/preventative-maintenance.ts` -- asset management
- `src/config/content/stop-workarounds.ts` -- closed-loop accountability
- `src/config/content/testimonials.ts` -- customer success variant
- `src/config/content/executive-insights.ts` -- analytics
- `src/config/content/social-proof.ts` -- reuse general variant
- `src/config/content/cta.ts` -- reuse existing
- `src/config/content/integration.ts` -- reuse existing
- `src/config/content/tech-specs.ts` -- reuse existing
- `src/config/content/seo.ts` -- new SEO metadata for eCompliance comparison

### 3. Add `ecompliance` to VARIANT_CONFIG in section components
- `src/components/sections/FieldAdvantageSection.tsx`
- `src/components/sections/StopWorkaroundsSection.tsx`
- Add config entries (bg class, infographic type, feature style)

### 4. Add `ecompliance` variant to ComparisonTableSection
- New `ECOMPLIANCE_COMPARISON_DATA` array with the 8 rows above
- Add competitor label "ECOMPLIANCE"

### 5. Add `ecompliance` variant to HeroSection
- Add to the `useGeneralLayout` check

### 6. Add `ecompliance` to testimonials helper
- Update `getTestimonialsContent()` to return eCompliance-specific content

### 7. Create the page component
- New file: `src/pages/ECompliance.tsx`
- Layout mirrors SiteDocs/HammerTech pattern

### 8. Add route
- `src/App.tsx` -- add `/ecompliance` route

### 9. SEO
- Add `ecompliance` entry to `SEO_CONTENT` in `seo.ts`
- Title: "SALUS vs eCompliance | Safety Management Comparison"

