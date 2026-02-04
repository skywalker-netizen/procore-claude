import { describe, it, expect } from "vitest";
import { demoFormSchema } from "./useDemoForm";

describe("demoFormSchema", () => {
  describe("required field validation", () => {
    it("should require firstName", () => {
      const result = demoFormSchema.safeParse({
        firstName: "",
        lastName: "Doe",
        company: "Acme",
        email: "test@example.com",
        phone: "123-456-7890",
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.errors[0].message).toBe("First name is required");
      }
    });

    it("should require lastName", () => {
      const result = demoFormSchema.safeParse({
        firstName: "John",
        lastName: "",
        company: "Acme",
        email: "test@example.com",
        phone: "123-456-7890",
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.errors[0].message).toBe("Last name is required");
      }
    });

    it("should require company", () => {
      const result = demoFormSchema.safeParse({
        firstName: "John",
        lastName: "Doe",
        company: "",
        email: "test@example.com",
        phone: "123-456-7890",
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.errors[0].message).toBe("Company is required");
      }
    });

    it("should require email", () => {
      const result = demoFormSchema.safeParse({
        firstName: "John",
        lastName: "Doe",
        company: "Acme",
        email: "",
        phone: "123-456-7890",
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.errors[0].message).toBe("Email is required");
      }
    });

    it("should require phone", () => {
      const result = demoFormSchema.safeParse({
        firstName: "John",
        lastName: "Doe",
        company: "Acme",
        email: "test@example.com",
        phone: "",
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.errors[0].message).toBe("Phone number is required");
      }
    });
  });

  describe("email format validation", () => {
    it("should reject invalid email without @", () => {
      const result = demoFormSchema.safeParse({
        firstName: "John",
        lastName: "Doe",
        company: "Acme",
        email: "notanemail",
        phone: "123-456-7890",
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.errors[0].message).toBe("Please enter a valid email address");
      }
    });

    it("should reject email without domain", () => {
      const result = demoFormSchema.safeParse({
        firstName: "John",
        lastName: "Doe",
        company: "Acme",
        email: "missing@",
        phone: "123-456-7890",
      });
      expect(result.success).toBe(false);
    });

    it("should accept valid email", () => {
      const result = demoFormSchema.safeParse({
        firstName: "John",
        lastName: "Doe",
        company: "Acme",
        email: "valid@example.com",
        phone: "123-456-7890",
      });
      expect(result.success).toBe(true);
    });
  });

  describe("phone format validation", () => {
    it("should reject phone with letters", () => {
      const result = demoFormSchema.safeParse({
        firstName: "John",
        lastName: "Doe",
        company: "Acme",
        email: "test@example.com",
        phone: "abc-def-ghij",
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.errors[0].message).toBe("Please enter a valid phone number");
      }
    });

    it("should accept phone with dashes", () => {
      const result = demoFormSchema.safeParse({
        firstName: "John",
        lastName: "Doe",
        company: "Acme",
        email: "test@example.com",
        phone: "123-456-7890",
      });
      expect(result.success).toBe(true);
    });

    it("should accept phone with parentheses and spaces", () => {
      const result = demoFormSchema.safeParse({
        firstName: "John",
        lastName: "Doe",
        company: "Acme",
        email: "test@example.com",
        phone: "(123) 456-7890",
      });
      expect(result.success).toBe(true);
    });

    it("should accept international format with +", () => {
      const result = demoFormSchema.safeParse({
        firstName: "John",
        lastName: "Doe",
        company: "Acme",
        email: "test@example.com",
        phone: "+1 123-456-7890",
      });
      expect(result.success).toBe(true);
    });
  });

  describe("max length validation", () => {
    it("should reject firstName over 50 characters", () => {
      const result = demoFormSchema.safeParse({
        firstName: "A".repeat(51),
        lastName: "Doe",
        company: "Acme",
        email: "test@example.com",
        phone: "123-456-7890",
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.errors[0].message).toBe("First name is too long");
      }
    });

    it("should reject lastName over 50 characters", () => {
      const result = demoFormSchema.safeParse({
        firstName: "John",
        lastName: "D".repeat(51),
        company: "Acme",
        email: "test@example.com",
        phone: "123-456-7890",
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.errors[0].message).toBe("Last name is too long");
      }
    });

    it("should reject company over 100 characters", () => {
      const result = demoFormSchema.safeParse({
        firstName: "John",
        lastName: "Doe",
        company: "C".repeat(101),
        email: "test@example.com",
        phone: "123-456-7890",
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.errors[0].message).toBe("Company name is too long");
      }
    });
  });

  describe("whitespace trimming", () => {
    it("should trim whitespace and validate correctly", () => {
      const result = demoFormSchema.safeParse({
        firstName: "  John  ",
        lastName: "  Doe  ",
        company: "  Acme Inc  ",
        email: "  test@example.com  ",
        phone: "  123-456-7890  ",
      });
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.firstName).toBe("John");
        expect(result.data.lastName).toBe("Doe");
        expect(result.data.company).toBe("Acme Inc");
        expect(result.data.email).toBe("test@example.com");
      }
    });

    it("should fail for whitespace-only values", () => {
      const result = demoFormSchema.safeParse({
        firstName: "   ",
        lastName: "Doe",
        company: "Acme",
        email: "test@example.com",
        phone: "123-456-7890",
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.errors[0].message).toBe("First name is required");
      }
    });
  });

  describe("valid submission", () => {
    it("should accept valid data", () => {
      const result = demoFormSchema.safeParse({
        firstName: "John",
        lastName: "Doe",
        company: "Acme Corporation",
        email: "john.doe@acme.com",
        phone: "+1 (555) 123-4567",
      });
      expect(result.success).toBe(true);
    });
  });
});
