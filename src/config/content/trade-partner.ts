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
    title: "Better collaboration for greater visibility: it's a win-win and it should be Free.",
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
        description: "For GCs, SALUS Frictionless Contractor portal means no more compliance black hole. Meanwhile, Trades own their data; they keep a portable safety record that protects their EMR and their bid eligibility.",
      },
    ],
  },
  general: {
    badge: "TRADE PARTNER MANAGEMENT",
    title: "Better collaboration for greater visibility: it's a win-win and it should be Free.",
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
        description: "For GCs, SALUS Frictionless Contractor portal means no more compliance black hole. Meanwhile, Trades own their data; they keep a portable safety record that protects their EMR and their bid eligibility.",
      },
    ],
  },
  sitedocs: {
    badge: "TRADE PARTNER MANAGEMENT",
    title: "Better collaboration for greater visibility: it's a win-win and it should be Free.",
    subtitle: 'The "Subcontractor Black Box" is where compliance goes to die. Sitedocs only manages trades at the company level. SALUS onboards individuals, not just companies, and tracks compliance and corrective actions down to the individual level.',
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
        description: "For GCs, SALUS Frictionless Contractor portal means no more compliance black hole. Meanwhile, Trades own their data; they keep a portable safety record that protects their EMR and their bid eligibility.",
      },
    ],
  },
  hammertech: {
    badge: "TRADE PARTNER MANAGEMENT",
    title: "Better collaboration for greater visibility: it's a win-win and it should be Free.",
    subtitle: 'The "Subcontractor Black Box" is where compliance goes to die. HammerTech setup generates friction, as Trades have to create a new HammerTech account with every GC they work with. With SALUS, Trades and General Contractors create an account only once.',
    features: [
      {
        title: "Zero Barrier Access",
        description: "Manage your Tier 1 and Tier 2 partners without the \"login tax.\" Onboard trades with QR codes for free.",
      },
      {
        title: "Win - Win",
        description: "For GCs, SALUS Frictionless Contractor portal means no more compliance black hole. Meanwhile, Trades own their data; they keep a portable safety record that protects their EMR and their bid eligibility.",
      },
      {
        title: "QR Code Onboarding",
        description: "Workers can join a project site by simply scanning a QR code with their mobile device. They are immediately connected to the site-specific safety plan and required forms.",
      },
      {
        title: "Accountability",
        description: "See orientation status, JHA submissions, and corrective actions of your contractors at the worker level, not just the company level.",
      },
    ],
  },
  ca: {
    badge: "TRADE PARTNER MANAGEMENT",
    title: "Portfolio Visibility: Multi-Site & Multi-Trade.",
    subtitle: 'Data Black Holes increase risks and leak cash. Identify "hazard clusters" across BC, Alberta, and Ontario jobsites before they become WCB claims.',
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
        description: "For Prime Contractors, SALUS Contractor portal means no more compliance black hole. Meanwhile, Specialty Contractors own their data; they keep a portable safety record that protects their premiums and bid eligibility.",
      },
    ],
  },
  ecompliance: {
    badge: "CONTRACTOR MANAGEMENT",
    title: "Better collaboration for greater visibility: it's a win-win and it should be Free.",
    subtitle: "Contractors can't access eCompliance without purchasing a membership. SALUS onboards trades for free via QR codes and provides multiple submission paths — no paywall, no friction.",
    features: [
      {
        title: "Zero Barrier Access",
        description: "eCompliance charges contractors for access. SALUS onboards trades for free — no membership fees, no friction.",
      },
      {
        title: "QR Code Onboarding",
        description: "Workers scan a QR code and are immediately connected to the site-specific safety plan and required forms. No app download required for basic submissions.",
      },
      {
        title: "Document Monitoring",
        description: "Track insurance certificates, training records, and compliance documents for every trade partner in real-time with automated expiry alerts.",
      },
      {
        title: "Accountability",
        description: "See orientation status, JHA submissions, and corrective actions of your contractors at the worker level, not just the company level.",
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

export const TRADE_PARTNER_QUOTE_CA: QuoteContent = {
  text: "With SALUS, I can pinpoint the exact form I need in under a minute—something that was impossible with paper. It's been a game changer to have real-time visibility across our entire North American operation.",
  author: "Ben Sleeman",
  title: "Director of Safety, LMS Reinforcing Steel Group",
  variant: "dark",
};
