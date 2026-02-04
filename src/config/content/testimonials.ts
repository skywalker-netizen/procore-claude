import type { QuoteContent, FeatureContent } from "../types";

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

export const TESTIMONIALS_QUOTE: QuoteContent = {
  text: "It was everything I felt we needed to take our safety to the next level. We developed a really good relationship with the SALUS team and we got to work.",
  author: "Kelly Kursteiner",
  title: "WestUrban",
};
