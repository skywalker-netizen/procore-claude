
# Add Zod Validation to Demo Form

This plan upgrades the demo form from basic HTML5 validation to robust Zod schema validation with field-level error messages.

---

## Current State

The form currently uses:
- Basic `required` HTML attributes
- A simple truthy check in `handleSubmit` (line 54-61)
- No format validation for email or phone
- Generic toast error: "Please fill in all required fields"

---

## What Changes

### 1. Create Validation Schema

Add a Zod schema in `useDemoForm.ts` with proper validation rules:

| Field | Validation Rules |
|-------|-----------------|
| First Name | Required, 1-50 chars, trimmed |
| Last Name | Required, 1-50 chars, trimmed |
| Company | Required, 1-100 chars, trimmed |
| Email | Required, valid email format |
| Phone | Required, valid phone format (digits, spaces, dashes, parens allowed) |

### 2. Add Field-Level Error State

Update the hook to track errors per field:
- New `errors` state object: `{ firstName?: string, lastName?: string, ... }`
- `clearFieldError` function to clear error when user starts typing
- Validation runs on submit, returns structured errors

### 3. Display Inline Errors

Update `DemoForm.tsx` to show error messages below each field:
- Red border on invalid fields
- Error message text below input
- Errors clear when user modifies the field

---

## Files to Modify

**`src/components/forms/useDemoForm.ts`**
- Import `z` from zod
- Define `demoFormSchema` with validation rules
- Add `errors` state and `clearFieldError` function
- Replace manual validation with `schema.safeParse()`
- Return `errors` and `clearFieldError` from hook

**`src/components/forms/DemoForm.tsx`**
- Destructure `errors` and `clearFieldError` from hook
- Add `className` conditional for error styling on inputs
- Add error message `<span>` elements below each input
- Call `clearFieldError` in `onChange` handler

**`src/index.css`**
- Add `.form-group .error-message` style (red text, small font)
- Add `.form-group input.has-error` style (red border)

---

## Validation Schema Preview

```typescript
const demoFormSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50),
  lastName: z.string().trim().min(1, "Last name is required").max(50),
  company: z.string().trim().min(1, "Company is required").max(100),
  email: z.string().trim().email("Please enter a valid email address"),
  phone: z.string().trim().min(1, "Phone number is required")
    .regex(/^[\d\s\-\+\(\)]+$/, "Please enter a valid phone number"),
});
```

---

## User Experience

**Before:**
- Submit with empty email → Browser shows "Please fill out this field"
- Submit with "abc" as email → Browser shows "Please include an @ in the email"
- No visual feedback on which fields have issues

**After:**
- Submit with empty email → Red border + "Please enter a valid email address" below field
- Submit with "abc" as email → Red border + "Please enter a valid email address" below field  
- All invalid fields highlighted at once with specific messages
- Errors clear as user types

---

## Technical Notes

- Zod is already installed (v3.25.76)
- No changes to the Zapier webhook payload
- UTM fields are not user-editable, so no validation needed
- Preserves existing toast for network errors
