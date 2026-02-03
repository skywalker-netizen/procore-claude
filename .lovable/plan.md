

# Code Cleanup and Refactoring Plan

This plan restructures the codebase to improve maintainability, reduce duplication, and follow React best practices.

---

## Summary of Changes

The current codebase has two nearly identical landing pages (Root.tsx at 1,596 lines and Index.tsx at 1,665 lines) with massive code duplication. This refactoring extracts shared components and creates a modular architecture.

---

## New Component Structure

```text
src/components/
├── layout/
│   ├── Header.tsx              # Shared site header
│   └── Footer.tsx              # Shared site footer
├── sections/
│   ├── HeroSection.tsx         # Hero with configurable content
│   ├── SocialProofSection.tsx  # Logo bar and stats
│   ├── IntegrationSection.tsx  # Integration diagram section
│   ├── FieldAdvantageSection.tsx
│   ├── TradePartnerSection.tsx
│   ├── StopWorkaroundsSection.tsx
│   ├── ExecutiveInsightsSection.tsx
│   ├── PreventativeMaintenanceSection.tsx
│   ├── TechSpecsSection.tsx
│   └── TestimonialsSection.tsx
├── forms/
│   ├── DemoForm.tsx            # Reusable demo request form
│   └── useDemoForm.ts          # Form state and submission logic hook
├── infographics/
│   ├── IntegrationDiagram.tsx
│   ├── ComplianceCoreDashboard.tsx
│   ├── PhoneMockups.tsx
│   ├── TradePartnerDashboard.tsx
│   └── AnalyticsCard.tsx
└── shared/
    ├── Badge.tsx               # "SYNCED WITH THE FIELD" badge
    ├── TrustBadge.tsx          # Icon + text trust badges
    ├── G2Badge.tsx             # G2 rating badge
    ├── Quote.tsx               # Testimonial quote block
    └── FeatureItem.tsx         # Icon + title + description
```

---

## Key Extractions

### 1. Demo Form Logic (Custom Hook)

Extracts the form state, validation, UTM parameter handling, and Zapier submission into a reusable hook.

**Before (duplicated in both pages):**
- Form state with 9 fields
- UTM parameter capture in useEffect
- handleInputChange function
- handleSubmit with validation and fetch

**After:**
```tsx
// src/components/forms/useDemoForm.ts
export function useDemoForm() {
  // All form logic encapsulated
  return { formData, handleInputChange, handleSubmit, isLoading, isSubmitted };
}
```

### 2. Demo Form UI Component

**Before:** ~80 lines duplicated in each page file

**After:**
```tsx
// src/components/forms/DemoForm.tsx
<DemoForm 
  variant="hero" | "cta"
  onSuccess={() => {}}
/>
```

### 3. Header and Footer

**Before:** Identical in both files

**After:**
```tsx
// src/components/layout/Header.tsx
<Header />

// src/components/layout/Footer.tsx  
<Footer />
```

### 4. Section Components

Each section becomes its own component with props for content customization:

```tsx
// Example: HeroSection
<HeroSection
  title="A System of Reality"
  highlightedText="Loved by Boots and Suits."
  subtitle="..."
  trustBadges={[...]}
  variant="procore" | "general"
/>
```

---

## Refactored Page Structure

After refactoring, each page becomes a simple composition:

```tsx
// src/pages/Root.tsx (~50 lines)
const Root = () => (
  <>
    <Header />
    <HeroSection variant="general" />
    <SocialProofSection logos={rootLogos} />
    <FieldAdvantageSection />
    <TradePartnerSection />
    <StopWorkaroundsSection />
    <ExecutiveInsightsSection />
    <PreventativeMaintenanceSection />
    <CTASection />
    <Footer />
  </>
);
```

---

## CSS Improvements

### Current Issues
- Single 4,400-line CSS file
- Section-specific styles not co-located with components

### Proposed Approach
- Keep global styles (variables, base, utilities) in index.css
- Extract section-specific styles into component-level CSS modules or keep consolidated but organized with clear section comments

---

## Implementation Order

1. **Create the forms hook and component** - These are used across multiple sections
2. **Create layout components** - Header and Footer
3. **Create shared components** - Badge, TrustBadge, G2Badge, Quote, FeatureItem
4. **Create infographic components** - Visual dashboard elements
5. **Create section components** - One section at a time
6. **Refactor Root.tsx** - Replace inline code with components
7. **Refactor Index.tsx** - Replace inline code with components
8. **Clean up** - Remove unused code, verify both pages work

---

## Benefits

| Metric | Before | After |
|--------|--------|-------|
| Root.tsx | 1,596 lines | ~50 lines |
| Index.tsx | 1,665 lines | ~60 lines |
| Code duplication | ~90% overlap | Near zero |
| Component reusability | None | High |
| Testability | Difficult | Easy (isolated components) |

---

## Technical Notes

- All components use TypeScript with proper prop interfaces
- Form submission logic stays in the custom hook for easy testing
- Section components accept content props for A/B testing flexibility
- Existing CSS class names preserved for styling compatibility
- No breaking changes to the live pages during refactoring

