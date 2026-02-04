import { describe, it, expect } from "vitest";
import type { PageVariant } from "../types";
import { HERO_CONTENT, HERO_TRUST_BADGES } from "./hero";
import { FIELD_ADVANTAGE_CONTENT, FIELD_ADVANTAGE_QUOTE } from "./field-advantage";
import { STOP_WORKAROUNDS_CONTENT } from "./stop-workarounds";
import { EXECUTIVE_INSIGHTS_CONTENT, EXECUTIVE_INSIGHTS_QUOTE } from "./executive-insights";
import { TRADE_PARTNER_CONTENT, TRADE_PARTNER_QUOTE } from "./trade-partner";
import { PREVENTATIVE_MAINTENANCE_CONTENT } from "./preventative-maintenance";
import { SOCIAL_PROOF_TITLE, SOCIAL_PROOF_STATS, SOCIAL_PROOF_QUOTE } from "./social-proof";
import { TESTIMONIALS_CONTENT, TESTIMONIALS_QUOTE, getTestimonialsContent } from "./testimonials";

const PAGE_VARIANTS: PageVariant[] = ["procore", "general", "sitedocs", "hammertech", "ca"];

describe("Hero Content", () => {
  it("should have all variants defined", () => {
    PAGE_VARIANTS.forEach((variant) => {
      expect(HERO_CONTENT[variant]).toBeDefined();
    });
  });

  it("should have required fields for each variant", () => {
    PAGE_VARIANTS.forEach((variant) => {
      const content = HERO_CONTENT[variant];
      expect(content.badge).toBeTruthy();
      expect(content.title).toBeTruthy();
      expect(content.titleHighlight).toBeTruthy();
    });
  });

  it("should have non-empty badge values", () => {
    PAGE_VARIANTS.forEach((variant) => {
      expect(HERO_CONTENT[variant].badge.trim().length).toBeGreaterThan(0);
    });
  });

  it("should have trust badges for each variant", () => {
    PAGE_VARIANTS.forEach((variant) => {
      expect(HERO_TRUST_BADGES[variant]).toBeDefined();
      expect(Array.isArray(HERO_TRUST_BADGES[variant])).toBe(true);
      expect(HERO_TRUST_BADGES[variant].length).toBeGreaterThan(0);
    });
  });

  it("should have valid trust badge structure", () => {
    PAGE_VARIANTS.forEach((variant) => {
      HERO_TRUST_BADGES[variant].forEach((badge) => {
        expect(badge.text).toBeTruthy();
        expect(["lime", "navy"]).toContain(badge.iconBg);
      });
    });
  });
});

describe("Field Advantage Content", () => {
  it("should have all variants defined", () => {
    PAGE_VARIANTS.forEach((variant) => {
      expect(FIELD_ADVANTAGE_CONTENT[variant]).toBeDefined();
    });
  });

  it("should have required fields for each variant", () => {
    PAGE_VARIANTS.forEach((variant) => {
      const content = FIELD_ADVANTAGE_CONTENT[variant];
      expect(content.badge).toBeTruthy();
      expect(content.title).toBeTruthy();
      expect(content.subtitle).toBeTruthy();
    });
  });

  it("should have valid features array", () => {
    PAGE_VARIANTS.forEach((variant) => {
      const content = FIELD_ADVANTAGE_CONTENT[variant];
      if (content.features) {
        expect(Array.isArray(content.features)).toBe(true);
        content.features.forEach((feature) => {
          expect(feature.title).toBeTruthy();
          expect(feature.iconColor).toBeTruthy();
        });
      }
    });
  });

  it("should have valid quote content", () => {
    expect(FIELD_ADVANTAGE_QUOTE.text).toBeTruthy();
    expect(FIELD_ADVANTAGE_QUOTE.author).toBeTruthy();
    expect(FIELD_ADVANTAGE_QUOTE.title).toBeTruthy();
  });
});

describe("Stop Workarounds Content", () => {
  it("should have all variants defined", () => {
    PAGE_VARIANTS.forEach((variant) => {
      expect(STOP_WORKAROUNDS_CONTENT[variant]).toBeDefined();
    });
  });

  it("should have required fields for each variant", () => {
    PAGE_VARIANTS.forEach((variant) => {
      const content = STOP_WORKAROUNDS_CONTENT[variant];
      expect(content.badge).toBeTruthy();
      expect(content.title).toBeTruthy();
      expect(content.subtitle).toBeTruthy();
    });
  });

});

describe("Executive Insights Content", () => {
  it("should have all variants defined", () => {
    PAGE_VARIANTS.forEach((variant) => {
      expect(EXECUTIVE_INSIGHTS_CONTENT[variant]).toBeDefined();
    });
  });

  it("should have required fields for each variant", () => {
    PAGE_VARIANTS.forEach((variant) => {
      const content = EXECUTIVE_INSIGHTS_CONTENT[variant];
      expect(content.badge).toBeTruthy();
      expect(content.title).toBeTruthy();
      expect(content.subtitle).toBeTruthy();
    });
  });

  it("should have valid quote content", () => {
    expect(EXECUTIVE_INSIGHTS_QUOTE.text).toBeTruthy();
    expect(EXECUTIVE_INSIGHTS_QUOTE.author).toBeTruthy();
    expect(EXECUTIVE_INSIGHTS_QUOTE.title).toBeTruthy();
  });
});

describe("Trade Partner Content", () => {
  it("should have all variants defined", () => {
    PAGE_VARIANTS.forEach((variant) => {
      expect(TRADE_PARTNER_CONTENT[variant]).toBeDefined();
    });
  });

  it("should have required fields for each variant", () => {
    PAGE_VARIANTS.forEach((variant) => {
      const content = TRADE_PARTNER_CONTENT[variant];
      expect(content.badge).toBeTruthy();
      expect(content.title).toBeTruthy();
      expect(content.subtitle).toBeTruthy();
    });
  });

  it("should have valid features array", () => {
    PAGE_VARIANTS.forEach((variant) => {
      const content = TRADE_PARTNER_CONTENT[variant];
      expect(Array.isArray(content.features)).toBe(true);
      expect(content.features.length).toBeGreaterThan(0);
      content.features.forEach((feature) => {
        expect(feature.title).toBeTruthy();
        expect(feature.description).toBeTruthy();
      });
    });
  });

  it("should have valid quote content", () => {
    expect(TRADE_PARTNER_QUOTE.text).toBeTruthy();
    expect(TRADE_PARTNER_QUOTE.author).toBeTruthy();
    expect(TRADE_PARTNER_QUOTE.title).toBeTruthy();
  });
});

describe("Preventative Maintenance Content", () => {
  it("should have all variants defined", () => {
    PAGE_VARIANTS.forEach((variant) => {
      expect(PREVENTATIVE_MAINTENANCE_CONTENT[variant]).toBeDefined();
    });
  });

  it("should have required fields for each variant", () => {
    PAGE_VARIANTS.forEach((variant) => {
      const content = PREVENTATIVE_MAINTENANCE_CONTENT[variant];
      expect(content.badge).toBeTruthy();
      expect(content.title).toBeTruthy();
      expect(content.subtitle).toBeTruthy();
    });
  });

});

describe("Social Proof Content", () => {
  it("should have all variant titles defined", () => {
    PAGE_VARIANTS.forEach((variant) => {
      expect(SOCIAL_PROOF_TITLE[variant]).toBeTruthy();
    });
  });

  it("should have valid stats array", () => {
    expect(Array.isArray(SOCIAL_PROOF_STATS)).toBe(true);
    expect(SOCIAL_PROOF_STATS.length).toBeGreaterThan(0);
    SOCIAL_PROOF_STATS.forEach((stat) => {
      expect(stat.number).toBeTruthy();
      expect(stat.label).toBeTruthy();
    });
  });

  it("should have valid quote content", () => {
    expect(SOCIAL_PROOF_QUOTE.text).toBeTruthy();
    expect(SOCIAL_PROOF_QUOTE.author).toBeTruthy();
    expect(SOCIAL_PROOF_QUOTE.title).toBeTruthy();
  });
});

describe("Testimonials Content", () => {
  it("should have required fields for default content", () => {
    expect(TESTIMONIALS_CONTENT.badge).toBeTruthy();
    expect(TESTIMONIALS_CONTENT.title).toBeTruthy();
    expect(TESTIMONIALS_CONTENT.subtitle).toBeTruthy();
  });

  it("should have valid features array for default content", () => {
    expect(Array.isArray(TESTIMONIALS_CONTENT.features)).toBe(true);
    expect(TESTIMONIALS_CONTENT.features.length).toBeGreaterThan(0);
    TESTIMONIALS_CONTENT.features.forEach((feature) => {
      expect(feature.title).toBeTruthy();
      expect(feature.description).toBeTruthy();
      expect(feature.iconColor).toBeTruthy();
    });
  });

  it("should have valid quote content", () => {
    expect(TESTIMONIALS_QUOTE.text).toBeTruthy();
    expect(TESTIMONIALS_QUOTE.author).toBeTruthy();
    expect(TESTIMONIALS_QUOTE.title).toBeTruthy();
  });

  it("should return variant-specific content for hammertech", () => {
    const hammertechContent = getTestimonialsContent("hammertech");
    expect(hammertechContent.badge).toBeTruthy();
    expect(hammertechContent.title).toBeTruthy();
    expect(hammertechContent.subtitle).toBeTruthy();
    expect(hammertechContent.subtitle).toContain("HammerTech");
  });

  it("should return default content for non-hammertech variants", () => {
    const procoreContent = getTestimonialsContent("procore");
    expect(procoreContent).toEqual(TESTIMONIALS_CONTENT);
  });
});
