import type { VariantContent, SectionContent, QuoteContent } from "../types";

export const FIELD_ADVANTAGE_CONTENT: VariantContent<SectionContent> = {
  procore: {
    badge: "THE FIELD ADVANTAGE",
    title: "You Can't Build a Data Center",
    titleHighlight: "with a Stylus and a PDF.",
    subtitle: "100% compliance from the field, and data you can actually search in the office.",
    features: [
      {
        title: "Mobile-First. Field-Loved.",
        description:
          'Procore\'s static PDFs are built for desktops, not for a foreman in a high-vis vest in 100-degree heat. SALUS Smart Forms are mobile-first, logic-driven, and loved by the field. They speak their language and adapt to their reality. If a trench is over 5ft, the "Shoring Evidence" photo becomes mandatory.',
        iconColor: "red",
      },
      {
        title: 'The "Flat" Form Trap',
        description:
          "Procore Static fillable PDFs trap your data in a document, making it invisible to analytics.",
        iconColor: "lime",
      },
      {
        title: "Salus forms are litigation-grade.",
        description:
          'GPS-stamped location proof. Mandatory photo evidence for failed check. Voice-to-text captures the nuance of a hazard, not just a checkbox. The signed PDF still lands in Procore for your records, but now you have context.',
        iconColor: "blue",
      },
    ],
  },
  general: {
    badge: "THE FIELD ADVANTAGE",
    title: "100% field participation.",
    titleHighlight: "That changes everything.",
    subtitle:
      "You cannot be on every site. You need a safety management software. But if the field hates it, what's the point? Garbage in, Garbage out.",
    features: [
      {
        title: "Mobile-First. Field-Loved.",
        description:
          "Onboard in the Trench: When you hire 20 new workers for a high-stakes data center project, they don't need a four-hour software orientation. If they can send a text, they can use SALUS to stay compliant.",
        iconColor: "red",
      },
      {
        title: "Not just digital forms; workflows.",
        description:
          'With Salus, you don\'t ask workers to learn a new "software" process; you provide a digital version of the way they already work in the field.',
        iconColor: "lime",
      },
      {
        title: "More relevant, better intel",
        description:
          'Salus AI-powered Smart Forms adapt to the reality in the field, provide the information required to do the job, and skip anything not relevant to the job. If a trench is over 5ft, the "Shoring Evidence" photo becomes mandatory.',
        iconColor: "blue",
      },
    ],
  },
  sitedocs: {
    badge: "Instant Onboarding",
    title: "The Magic",
    titleHighlight: "Orientation",
    subtitle:
      "With SiteDocs, orientations are managed outside the platform, requiring supervisors to spend significant time manually confirming that workers are properly oriented and job-ready.\n\nWith SALUS, workers scan a single QR code at the gate to complete their site orientation, watch site-specific videos, and digitally sign all necessary forms before stepping onto the jobsite.",
    features: [
      {
        title: "Faster onboarding",
        description: "",
        iconColor: "lime",
      },
      {
        title: "Lower risk",
        description: "",
        iconColor: "blue",
      },
    ],
  },
  hammertech: {
    badge: "Instant Onboarding",
    title: "Field Buy-In vs.",
    titleHighlight: "Complexity",
    subtitle:
      "While HammerTech users struggle with complex sign-ins and clunky menus, Salus workers scan a QR code and are ready to work in seconds, and Salus office interface doesn't require a master's degree to navigate.",
    features: [
      {
        title: "Faster onboarding",
        description: "",
        iconColor: "lime",
      },
      {
        title: "Android Ready",
        description: "Zero sign-in issues, 100% uptime.",
        iconColor: "blue",
      },
      {
        title: "Full Customization",
        description: "Salus doesn't require you to learn new workflows; It adapts to your specific workflows.",
        iconColor: "red",
      },
    ],
  },
  ca: {
    badge: "THE FIELD ADVANTAGE",
    title: "100% field participation.",
    titleHighlight: "That changes everything.",
    subtitle:
      "In high-risk scaling and mission-critical builds, \"pencil-whipping\" is a silent epidemic. When safety tools are either too shallow to provide real logic or so complex that field crews find them a burden, workers stop reporting the truth. Garbage in, Garbage out.",
    features: [
      {
        title: "Mobile-First. Field-Loved.",
        description:
          "Onboard in the Trench: if they can send a text, they can use SALUS to stay compliant. Salus AI-powered Smart Forms adapt to the reality in the field, provide the information required to do the job, and skip anything not relevant to the job.",
        iconColor: "red",
      },
      {
        title: "Not just digital forms; workflows.",
        description:
          "Salus Smart Forms provide the logic-gated intelligence needed for complex NBC 2020 or mission-critical environments.",
        iconColor: "lime",
      },
      {
        title: "More relevant in-field experience, better intel",
        description:
          "Salus Form builder gives you complete control over your digital forms. Customize the software to make it fit your needs and your workflows, not the way around. We don't ask your crews to learn a new software process. We provide a digital mirror of the way they already work.",
        iconColor: "blue",
      },
    ],
  },
};

export const FIELD_ADVANTAGE_QUOTE: QuoteContent = {
  text: "That first week is so important when you put a new user on a platform. Can they use it, and does everything work the way you're saying it's going to work? If it doesn't, you are going to struggle for the next two years to get them back involved. That was the biggest hurdle that we got over quite easily with SALUS.",
  author: "Dennis Rumshas",
  title: "Vice President of Safety and Risk Management, McShane Construction",
};

export const FIELD_ADVANTAGE_SITEDOCS_QUOTE: QuoteContent = {
  text: "SALUS is the perfect marriage of both usability and capability. It has really great features for us as admin, but it's simple for my crews to use out in the field, too.",
  author: "Health & Safety Manager",
  title: "O'CONNOR ELECTRIC",
};
