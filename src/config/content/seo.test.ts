import { describe, it, expect } from "vitest";
import { SEO_CONTENT, ORGANIZATION_SCHEMA, PRODUCT_SCHEMA } from "./seo";
import type { PageVariant } from "../types";

const ALL_VARIANTS: (PageVariant | "root")[] = ["root", "procore", "general", "sitedocs", "hammertech", "ca", "ecompliance"];

describe("SEO Content", () => {
  it("should have all variants defined", () => {
    ALL_VARIANTS.forEach((variant) => {
      expect(SEO_CONTENT[variant]).toBeDefined();
    });
  });

  it("should have required fields for each variant", () => {
    ALL_VARIANTS.forEach((variant) => {
      const seo = SEO_CONTENT[variant];
      expect(seo.title).toBeTruthy();
      expect(seo.description).toBeTruthy();
      expect(seo.canonical).toBeTruthy();
    });
  });

  it("should have titles under 60 characters", () => {
    ALL_VARIANTS.forEach((variant) => {
      expect(SEO_CONTENT[variant].title.length).toBeLessThanOrEqual(60);
    });
  });

  it("should have descriptions under 160 characters", () => {
    ALL_VARIANTS.forEach((variant) => {
      expect(SEO_CONTENT[variant].description.length).toBeLessThanOrEqual(160);
    });
  });

  it("should have valid canonical URLs", () => {
    ALL_VARIANTS.forEach((variant) => {
      expect(SEO_CONTENT[variant].canonical).toMatch(/^https:\/\//);
    });
  });

  it("should have unique canonical URLs for each variant", () => {
    const canonicals = ALL_VARIANTS.map((v) => SEO_CONTENT[v].canonical);
    // root and general share the same canonical (both are homepage)
    const uniqueCanonicals = new Set(canonicals);
    expect(uniqueCanonicals.size).toBe(ALL_VARIANTS.length - 1); // -1 because root and general share
  });

  it("should have competitor names in comparison page descriptions", () => {
    expect(SEO_CONTENT.sitedocs.description.toLowerCase()).toContain("sitedocs");
    expect(SEO_CONTENT.hammertech.description.toLowerCase()).toContain("hammertech");
    expect(SEO_CONTENT.ecompliance.description.toLowerCase()).toContain("ecompliance");
  });
});

describe("Organization Schema", () => {
  it("should have valid schema.org context", () => {
    expect(ORGANIZATION_SCHEMA["@context"]).toBe("https://schema.org");
    expect(ORGANIZATION_SCHEMA["@type"]).toBe("Organization");
  });

  it("should have required organization fields", () => {
    expect(ORGANIZATION_SCHEMA.name).toBe("SALUS");
    expect(ORGANIZATION_SCHEMA.url).toBeTruthy();
    expect(ORGANIZATION_SCHEMA.logo).toBeTruthy();
    expect(ORGANIZATION_SCHEMA.description).toBeTruthy();
  });
});

describe("Product Schema", () => {
  it("should have valid schema.org context", () => {
    expect(PRODUCT_SCHEMA["@context"]).toBe("https://schema.org");
    expect(PRODUCT_SCHEMA["@type"]).toBe("SoftwareApplication");
  });

  it("should have required product fields", () => {
    expect(PRODUCT_SCHEMA.name).toBeTruthy();
    expect(PRODUCT_SCHEMA.applicationCategory).toBe("BusinessApplication");
    expect(PRODUCT_SCHEMA.operatingSystem).toBe("Web");
  });

  it("should have valid offer structure", () => {
    expect(PRODUCT_SCHEMA.offers["@type"]).toBe("Offer");
    expect(PRODUCT_SCHEMA.offers.priceCurrency).toBe("USD");
  });

  it("should have valid aggregate rating", () => {
    expect(PRODUCT_SCHEMA.aggregateRating["@type"]).toBe("AggregateRating");
    expect(parseFloat(PRODUCT_SCHEMA.aggregateRating.ratingValue)).toBeGreaterThanOrEqual(1);
    expect(parseFloat(PRODUCT_SCHEMA.aggregateRating.ratingValue)).toBeLessThanOrEqual(5);
  });
});
