// Content type definitions for marketing sections
// These types enable type-safe content management across all landing page variants

export type IconColor = "beige" | "blue" | "lime" | "red" | "green" | "tan" | "orange";

export type PageVariant = "procore" | "general" | "sitedocs";

export interface FeatureContent {
  title: string;
  description: string;
  iconColor: IconColor;
  titleOnly?: boolean;
}

export interface SectionContent {
  badge: string;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  features?: FeatureContent[];
}

export type VariantContent<T> = Record<PageVariant, T>;

export interface TestimonialContent {
  text: string;
  author: string;
  company: string;
  isDark?: boolean;
}

export interface QuoteContent {
  text: string;
  author: string;
  title: string;
  variant?: "default" | "dark";
}

export interface TrustBadgeContent {
  text: string;
  subtext?: string;
  iconBg: "lime" | "navy";
}

export interface StatContent {
  number: string;
  label: string;
}

export interface TechRowContent {
  module: string;
  input: string;
  benefit: string;
}

export interface DiagramRowContent {
  left: string;
  right: string;
  color: "blue" | "orange" | "lime" | "yellow" | "red";
}

export interface TradeFeatureContent {
  title: string;
  description: string;
}
