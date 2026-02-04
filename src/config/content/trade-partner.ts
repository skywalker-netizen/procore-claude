import type { VariantContent, TradeFeatureContent, QuoteContent } from "../types";

interface TradePartnerContent {
  badge: string;
  title: string;
  subtitle: string;
  features: TradeFeatureContent[];
}

export const TRADE_PARTNER_CONTENT: VariantContent<TradePartnerContent> = {
  procore: {
    badge: "TRADE PARTNER MANAGEMENT",
    title: "Full visibility Into Every Trade. Free.",
    subtitle: 'In mission-critical construction, "I didn\'t know the sub wasn\'t certified" isn\'t a valid excuse.',
    features: [
      {
        title: "Zero Barrier Access",
        description: "Manage your Tier 1 and Tier 2 partners without the \"login tax.\" Onboard trades with QR codes for free.",
      },
      {
        title: "QR Code Onboarding",
        description: "Workers can join a project site by simply scanning a QR code with their mobile device. They are immediately connected to the site-specific safety plan and required forms.",
      },
      {
        title: "Accountability",
        description: "See orientation status, JHA submissions, and corrective actions of your contractors at the worker level, not just the company level.",
      },
      {
        title: "Win - Win",
        description: "For GCs, Salus Frictionless Contractor portal means no more compliance black hole. Meanwhile, Trades own their data; they keep a portable safety record that protects their EMR and their bid eligibility.",
      },
    ],
  },
  general: {
    badge: "TRADE PARTNER MANAGEMENT",
    title: "Full visibility Into Every Trade. Free.",
    subtitle: 'In mission-critical construction, "I didn\'t know the sub wasn\'t certified" isn\'t a valid excuse.',
    features: [
      {
        title: "Zero Barrier Access",
        description: "Manage your Tier 1 and Tier 2 partners without the \"login tax.\" Onboard trades with QR codes for free.",
      },
      {
        title: "QR Code Onboarding",
        description: "Workers can join a project site by simply scanning a QR code with their mobile device. They are immediately connected to the site-specific safety plan and required forms.",
      },
      {
        title: "Accountability",
        description: "See orientation status, JHA submissions, and corrective actions of your contractors at the worker level, not just the company level.",
      },
      {
        title: "Win - Win",
        description: "For GCs, Salus Frictionless Contractor portal means no more compliance black hole. Meanwhile, Trades own their data; they keep a portable safety record that protects their EMR and their bid eligibility.",
      },
    ],
  },
  sitedocs: {
    badge: "TRADE PARTNER MANAGEMENT",
    title: "Full visibility Into Every Trade. Free.",
    subtitle: 'The "Subcontractor Black Box" is where compliance goes to die. Salus creates a digital paper trail that actually holds up by holding individuals accountable.',
    features: [
      {
        title: "Zero Barrier Access",
        description: "Manage your Tier 1 and Tier 2 partners without the \"login tax.\" Onboard trades with QR codes for free.",
      },
      {
        title: "QR Code Onboarding",
        description: "Workers can join a project site by simply scanning a QR code with their mobile device. They are immediately connected to the site-specific safety plan and required forms.",
      },
      {
        title: "Accountability",
        description: "See orientation status, JHA submissions, and corrective actions of your contractors at the worker level, not just the company level.",
      },
      {
        title: "Win - Win",
        description: "For GCs, Salus Frictionless Contractor portal means no more compliance black hole. Meanwhile, Trades own their data; they keep a portable safety record that protects their EMR and their bid eligibility.",
      },
    ],
  },
};

export const TRADE_PARTNER_QUOTE: QuoteContent = {
  text: "You could get on a plane and fly to all of these jobs to see what they actually look like, or you can create a system where people bring jobs to life in front of your eyes.",
  author: "Dennis Rumshas",
  title: "Vice President of Safety and Risk Management, McShane Construction",
  variant: "dark",
};
