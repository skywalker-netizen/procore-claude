import type { QuoteContent, FeatureContent, PageVariant } from "../types";

export const TESTIMONIALS_CONTENT = {
  badge: "UNMATCHED SUPPORT",
  title: "World-Class Service.",
  titleHighlight: "We Are Here For You.",
  subtitle: "SALUS partners with you every step of the way, including digitizing your safety forms and workflows, helping you learn how to do it, rolling out your safety program to the field and driving adoption, so your program sticks.",
  features: [
    {
      title: "Technical support via chat, email or phone during your core business hours",
      description: "We're committed to providing exceptional support when you need it most. Whether you're a field worker or platform administrator, our SALUS agents are here to answer your questions and troubleshoot issues directly.",
      iconColor: "lime",
    },
    {
      title: "Tailored onboarding plan",
      description: "Build your success plan with a dedicated customer success manager to optimize SALUS for your business needs.",
      iconColor: "blue",
    },
    {
      title: "Live and on-demand platform training",
      description: "Master SALUS with expert training at your fingertips. Access on-demand videos for quick refreshers or join live sessions to get your questions answered in real time.",
      iconColor: "orange",
    },
  ] as FeatureContent[],
};

export const TESTIMONIALS_CONTENT_HAMMERTECH = {
  badge: "UNMATCHED SUPPORT",
  title: "World-Class Service.",
  titleHighlight: "We Are Here For You.",
  subtitle: "HammerTech setup is a huge pain. SALUS is designed for agility. Our dedicated team handles the implementation so you never stop moving.",
  features: [
    {
      title: "Technical support via chat, email or phone during your core business hours",
      description: "HammerTech's complexity often leaves you waiting for technical support. We pick up the phone in minutes. Whether you're a field worker or platform administrator, our SALUS agents are here to answer your questions and troubleshoot issues directly.",
      iconColor: "lime",
    },
    {
      title: "Tailored onboarding plan",
      description: "Build your success plan with a dedicated customer success manager to optimize SALUS for your business needs.",
      iconColor: "blue",
    },
    {
      title: "Live and on-demand platform training",
      description: "Master SALUS with expert training at your fingertips. Access on-demand videos for quick refreshers or join live sessions to get your questions answered in real time.",
      iconColor: "orange",
    },
  ] as FeatureContent[],
};

export const TESTIMONIALS_CONTENT_ECOMPLIANCE = {
  badge: "UNMATCHED SUPPORT",
  title: "World-Class Service.",
  titleHighlight: "We Are Here For You.",
  subtitle: "eCompliance uses a \"train-the-trainer\" model — they train a few champions and expect them to train everyone else. SALUS provides a dedicated success manager with unlimited training for admins, supervisors, field workers, and subcontractors.",
  features: [
    {
      title: "Technical support via chat, email or phone during your core business hours",
      description: "eCompliance support is limited and slow. SALUS agents pick up the phone in minutes. Whether you're a field worker or platform administrator, we're here to answer your questions and troubleshoot issues directly.",
      iconColor: "lime",
    },
    {
      title: "Tailored onboarding plan",
      description: "Build your success plan with a dedicated customer success manager to optimize SALUS for your business needs.",
      iconColor: "blue",
    },
    {
      title: "Live and on-demand platform training",
      description: "Master SALUS with expert training at your fingertips. Access on-demand videos for quick refreshers or join live sessions to get your questions answered in real time.",
      iconColor: "orange",
    },
  ] as FeatureContent[],
};

export function getTestimonialsContent(variant?: PageVariant) {
  if (variant === "hammertech") return TESTIMONIALS_CONTENT_HAMMERTECH;
  if (variant === "ecompliance") return TESTIMONIALS_CONTENT_ECOMPLIANCE;
  return TESTIMONIALS_CONTENT;
}

export const TESTIMONIALS_QUOTE: QuoteContent = {
  text: "It was everything I felt we needed to take our safety to the next level. We developed a really good relationship with the SALUS team and we got to work.",
  author: "Kelly Kursteiner",
  title: "WestUrban",
};
