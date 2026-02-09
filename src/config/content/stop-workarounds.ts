import type { VariantContent, SectionContent, QuoteContent } from "../types";

export const STOP_WORKAROUNDS_CONTENT: VariantContent<SectionContent> = {
  procore: {
    badge: "STOP THE WORKAROUNDS",
    title: "Shatter the Silos,",
    titleHighlight: "Reduce risk.",
    subtitle:
      "Certificates, assets, and training live outside of Procore. Fragmented safety data means increased risk in the field and more time chasing information.",
    features: [
      {
        title: "Unified Platform, Zero Silos",
        description:
          "Centralize everything from training logs to certificates in one live hub. No more risk hidden in silos.",
        iconColor: "beige",
      },
      {
        title: "Two-Way Field Feedback",
        description:
          "Close the gap between field reports and office repairs. Our two-way communication ensures every hazard is addressed.",
        iconColor: "blue",
      },
    ],
  },
  general: {
    badge: "STOP THE WORKAROUNDS",
    title: "Shatter the Silos,",
    titleHighlight: "Reduce risk.",
    subtitle:
      "Risk lives in the gaps—the disconnect between a worker, their training, and the equipment they operate. SALUS closes that gap by connecting your LMS and Asset Management directly to the frontline worker.",
    features: [
      {
        title: "Unified Platform, Zero Silos",
        description:
          'No more dark data in excel, email, or Google. A foreman scans a QR code on a scissor lift. SALUS instantly cross-references the worker\'s profile. If their Fall Protection cert expired yesterday, they can\'t sign onto the JHA.',
        iconColor: "beige",
      },
      {
        title: "Integrated Asset Management",
        description:
          "A foreman scans a QR code on a scissor lift. SALUS instantly checks the maintenance log. If the inspection is overdue, the app flags it immediately.",
        iconColor: "blue",
      },
      {
        title: "Just-in-Time Training",
        description:
          "Use our integrated LMS to push site-specific toolbox talks based on the gear a crew is actually using that morning.",
        iconColor: "lime",
      },
    ],
  },
  sitedocs: {
    badge: "STOP THE WORKAROUNDS",
    title: "Shatter the Silos,",
    titleHighlight: "Reduce risk.",
    subtitle:
      "Risk lives in the gaps—the disconnect between a worker, their training, and the equipment they operate. SALUS closes that gap by connecting your LMS and Asset Management directly to the frontline worker.",
    features: [
      {
        title: "Unified Platform, Zero Silos",
        description:
          'No more dark data in excel, email, or Google. A foreman scans a QR code on a scissor lift. SALUS instantly cross-references the worker\'s profile. If their Fall Protection cert expired yesterday, they can\'t sign onto the JHA.',
        iconColor: "beige",
      },
      {
        title: "Integrated Asset Management",
        description:
          "A foreman scans a QR code on a scissor lift. SALUS instantly checks the maintenance log. If the inspection is overdue, the app flags it immediately.",
        iconColor: "blue",
      },
      {
        title: "Just-in-Time Training",
        description:
          "Use our integrated LMS to push site-specific toolbox talks based on the gear a crew is actually using that morning.",
        iconColor: "lime",
      },
    ],
  },
  hammertech: {
    badge: "KNOWLEDGE IS POWER",
    title: "Integrated LMS plus",
    titleHighlight: "AI Power.",
    subtitle:
      "HammerTech has no native LMS. You're left managing training in silos. Risk lives in the gaps—the disconnect between a worker, their training, and the equipment they operate. SALUS closes that gap by connecting your LMS and Asset Management directly to the frontline worker.",
    features: [
      {
        title: "Unified Platform, Zero Silos",
        description:
          "Deploy courses to the field, track certifications in real-time, and auto-translate lessons to ensure every worker understands the job.",
        iconColor: "beige",
      },
      {
        title: "Just-in-Time Training",
        description:
          "Use our integrated LMS to push site-specific toolbox talks based on the gear a crew is actually using that morning.",
        iconColor: "blue",
      },
      {
        title: "AI Content Builder + Auto-Translations",
        description:
          "Build your own repository of Toolbox talks and Safe Work procedures with AI Document Creation. SALUS handles the catalog so you don't have to.",
        iconColor: "lime",
      },
    ],
  },
  ca: {
    badge: "STOP THE WORKAROUNDS",
    title: "Shatter the Silos,",
    titleHighlight: "Reduce risk.",
    subtitle:
      "Risk lives in the gaps—the disconnect between a worker, their training, and the equipment they operate. SALUS closes that gap by connecting your LMS and Asset Management directly to the frontline worker.",
    features: [
      {
        title: "Unified Platform, Zero Silos",
        description:
          'No more dark data in excel, email, or Google. A foreman scans a QR code on a scissor lift. SALUS instantly cross-references the worker\'s profile. If their Fall Protection cert expired yesterday, they can\'t sign onto the JHA.',
        iconColor: "beige",
      },
      {
        title: "Integrated Asset Management",
        description:
          "A foreman scans a QR code on a scissor lift. SALUS instantly checks the maintenance log. If the inspection is overdue, the app flags it immediately.",
        iconColor: "blue",
      },
      {
        title: "Just-in-Time Training",
        description:
          "Use our integrated LMS to push site-specific toolbox talks based on the gear a crew is actually using that morning.",
        iconColor: "lime",
      },
    ],
  },
  ecompliance: {
    badge: "CLOSED-LOOP ACCOUNTABILITY",
    title: "Close the Loop on",
    titleHighlight: "Every Action Item.",
    subtitle:
      "eCompliance's action items show overdue even after action is taken. Hazard assessments can be unpublished by anyone. SALUS provides a closed-loop system where every action is tracked to completion with full audit trail.",
    features: [
      {
        title: "Unified Platform, Zero Silos",
        description:
          "Centralize everything from training logs to certificates in one live hub. No more risk hidden in disconnected spreadsheets and email threads.",
        iconColor: "beige",
      },
      {
        title: "Closed-Loop Actions",
        description:
          "Every corrective action is tracked from identification to resolution. No more \"completed\" items showing as overdue, and no unauthorized changes to hazard assessments.",
        iconColor: "blue",
      },
      {
        title: "Timezone-Aware Scheduling",
        description:
          "eCompliance scheduling ignores time zones, causing confusion across regions. SALUS ensures every deadline and notification respects the local time of the worker.",
        iconColor: "lime",
      },
    ],
  },
};
