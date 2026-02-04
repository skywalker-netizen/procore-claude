
## Add Unit Tests for Form Validation and Variant Content

### Overview
Create comprehensive unit tests covering the demo form validation logic and the variant content configuration system. The testing infrastructure (Vitest, React Testing Library) is already configured.

### Test Files to Create

**1. `src/components/forms/useDemoForm.test.ts`**

Tests for the demo form hook validation:

| Test Case | Description |
|-----------|-------------|
| Required field validation | Verify errors for empty firstName, lastName, company, email, phone |
| Email format validation | Test invalid emails like "notanemail", "missing@domain" |
| Phone format validation | Test invalid characters in phone numbers |
| Max length validation | Test firstName/lastName > 50 chars, company > 100 chars |
| Valid submission | Verify no errors with valid data |
| Whitespace trimming | Ensure "  John  " is trimmed before validation |

**2. `src/config/content/content.test.ts`**

Tests for variant content configuration:

| Test Case | Description |
|-----------|-------------|
| All variants exist | Verify procore, general, sitedocs keys exist in each content config |
| Required fields present | Check that badge, title, subtitle exist for each variant |
| No empty strings | Ensure no variant has empty required fields |
| Feature arrays valid | Verify features have title and description |
| Type safety | Confirm content matches TypeScript interfaces |

### Technical Implementation

**Form Validation Tests** - Extract the Zod schema to make it testable independently:
```typescript
// Test the schema directly
const result = demoFormSchema.safeParse({ firstName: "", ... });
expect(result.success).toBe(false);
expect(result.error.errors[0].message).toBe("First name is required");
```

**Content Validation Tests** - Iterate over all variants:
```typescript
const variants: PageVariant[] = ["procore", "general", "sitedocs"];
variants.forEach(variant => {
  expect(HERO_CONTENT[variant].badge).toBeTruthy();
});
```

### Files to Create/Modify

| File | Action |
|------|--------|
| `src/components/forms/useDemoForm.ts` | Export the Zod schema for direct testing |
| `src/components/forms/useDemoForm.test.ts` | New: Form validation tests |
| `src/config/content/content.test.ts` | New: Variant content tests |

### Benefits
- Catches validation regressions before they reach users
- Ensures all page variants have complete content
- Documents expected behavior of form validation
- Enables confident refactoring of form logic
