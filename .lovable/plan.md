

# Refactoring Plan: Inline Styles & Content Management

This plan addresses two code quality issues identified in the landing page codebase:
1. **~15 inline styles** scattered across section components
2. **All marketing copy embedded directly in TSX files**

---

## Problem Summary

### Inline Styles Found (12 instances)

| File | Element | Inline Style |
|------|---------|--------------|
| `FieldAdvantageSection.tsx` | `<section>` | `background: "hsl(var(--white))"` |
| `PreventativeMaintenanceSection.tsx` | `<section>` | `background: "hsl(var(--gray-100))"` |
| `PreventativeMaintenanceSection.tsx` | `.bar-fill` | `width: "85%"` (dynamic) |
| `ExecutiveInsightsSection.tsx` | `<section>` | Conditional gradient/solid background |
| `StopWorkaroundsSection.tsx` | `<section>` | `background: "hsl(var(--gray-100))"` |
| `TestimonialsSection.tsx` | `<section>` | `background: "hsl(var(--gray-100))"` |
| `SocialProofSection.tsx` | `<section>` | `backgroundImage: url(...)` |
| `SocialProofSection.tsx` | `<img>` (×2) | `height: "48px"` |
| `TechSpecsSection.tsx` | `<section>` | `backgroundImage: url(...)` |
| `CTASection.tsx` | `<div>` | `maxWidth: "600px"` |
| `IntegrationDiagram.tsx` | `<img>` | `width: 28, height: 28` |
| `AnalyticsCard.tsx` | `<img>` | `width: 16, height: 16` |

### Hardcoded Content
All marketing copy (headlines, subtitles, feature descriptions, testimonials, stats) is embedded directly in component files, making:
- Content updates require code changes
- Variant switching logic mixed with presentation
- Difficult for non-developers to review/edit copy

---

## Proposed Solution

### Phase 1: Extract Inline Styles to CSS

Create semantic CSS classes in `index.css` to replace all static inline styles.

**New CSS classes to add:**

```css
/* Section Background Utilities */
.section-bg-white {
  background: hsl(var(--white));
}

.section-bg-gray {
  background: hsl(var(--gray-100));
}

.section-bg-gradient-gray {
  background: linear-gradient(180deg, hsl(var(--gray-100)) 0%, hsl(var(--white)) 100%);
}

/* Container Width Utilities */
.max-w-cta {
  max-width: 600px;
}

/* Logo Size Utilities */
.logo-xs {
  width: 16px;
  height: 16px;
  object-fit: contain;
}

.logo-sm {
  width: 28px;
  height: 28px;
  object-fit: contain;
}

.logo-height-48 {
  height: 48px;
}
```

**Component updates:**

```tsx
// Before
<section style={{ background: "hsl(var(--gray-100))" }}>

// After
<section className="section-padding section-bg-gray">
```

For the conditional background in `ExecutiveInsightsSection`:
```tsx
// Before
style={{ background: isProcore ? "linear-gradient(...)" : "hsl(var(--white))" }}

// After
className={`section-padding ${isProcore ? 'section-bg-gradient-gray' : 'section-bg-white'}`}
```

**Note:** Dynamic inline styles (like progress bar widths) will remain inline as they depend on runtime data.

---

### Phase 2: Centralize Marketing Content

Create a new configuration directory with typed content files.

**New file structure:**
```
src/
├── config/
│   ├── content/
│   │   ├── hero.ts
│   │   ├── field-advantage.ts
│   │   ├── trade-partner.ts
│   │   ├── stop-workarounds.ts
│   │   ├── executive-insights.ts
│   │   ├── preventative-maintenance.ts
│   │   ├── integration.ts
│   │   ├── testimonials.ts
│   │   └── social-proof.ts
│   ├── types.ts          # Shared content interfaces
│   └── index.ts          # Re-exports all content
```

**Example type definitions (`types.ts`):**

```typescript
export interface FeatureContent {
  title: string;
  description: string;
  iconColor: "beige" | "blue" | "lime" | "red" | "green" | "tan";
}

export interface SectionContent {
  badge: string;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  features: FeatureContent[];
}

export interface VariantContent<T> {
  procore: T;
  general: T;
}

export interface TestimonialContent {
  text: string;
  author: string;
  title: string;
  company?: string;
  isDark?: boolean;
}
```

**Example content file (`field-advantage.ts`):**

```typescript
import type { VariantContent, SectionContent, FeatureContent } from '../types';

export const FIELD_ADVANTAGE_CONTENT: VariantContent<SectionContent> = {
  procore: {
    badge: "THE FIELD ADVANTAGE",
    title: "You Can't Build a Data Center",
    titleHighlight: "with a Stylus and a PDF.",
    subtitle: "100% compliance from the field, and data you can actually search in the office.",
    features: [
      {
        title: "Mobile-First. Field-Loved.",
        description: "Procore's static PDFs are built for desktops, not for a foreman in a high-vis vest in 100-degree heat...",
        iconColor: "red"
      },
      // ... more features
    ]
  },
  general: {
    badge: "THE FIELD ADVANTAGE",
    title: "100% field participation.",
    titleHighlight: "That changes everything.",
    subtitle: "You cannot be on every site, and your regional managers are drowning in a \"Visibility Gap\"...",
    features: [
      {
        title: "Mobile-First. Field-Loved.",
        description: "Onboard in the Trench: When you hire 20 new workers for a high-stakes data center project...",
        iconColor: "red"
      },
      // ... more features
    ]
  }
};
```

**Refactored component usage:**

```tsx
import { FIELD_ADVANTAGE_CONTENT } from '@/config/content/field-advantage';

export function FieldAdvantageSection({ variant }: Props) {
  const content = FIELD_ADVANTAGE_CONTENT[variant];
  
  return (
    <section className="section-padding field-advantage-section section-bg-white">
      <SyncBadge text={content.badge} />
      <h2 className="section-title">
        {content.title} <span className="highlight">{content.titleHighlight}</span>
      </h2>
      <p className="section-subtitle">{content.subtitle}</p>
      {content.features.map((feature, i) => (
        <FeatureItem
          key={i}
          icon={getIconForFeature(i)}
          iconColor={feature.iconColor}
          title={feature.title}
          description={feature.description}
          variant="numbered"
        />
      ))}
    </section>
  );
}
```

---

## Implementation Order

| Step | Task | Files Changed |
|------|------|---------------|
| 1 | Add section background utility classes to CSS | `index.css` |
| 2 | Add logo/container utility classes to CSS | `index.css` |
| 3 | Replace inline styles in all section components | 8 section files |
| 4 | Create `src/config/types.ts` with content interfaces | New file |
| 5 | Create content files for each section | 9 new files |
| 6 | Create `src/config/index.ts` barrel export | New file |
| 7 | Refactor section components to import content | 8 section files |

---

## Benefits

**Inline Style Extraction:**
- Single source of truth for backgrounds
- Easier theme/color changes
- Consistent with existing CSS architecture
- Better debugging in browser dev tools

**Content Centralization:**
- Marketing copy editable without touching React logic
- Clear separation of concerns
- Type-safe content with autocomplete
- Easy to add new variants (e.g., "enterprise", "healthcare")
- Potential for future CMS integration or i18n

---

## Technical Notes

- The existing CSS file (`index.css`) is well-organized with a clear table of contents - new utilities will be added to section 5 (Layout Utilities)
- Dynamic inline styles (progress bars, animation states) will remain inline
- Icon mappings will use a simple lookup function to maintain the icon → feature relationship
- Testimonials already use an array pattern - this will be enhanced with types and moved to config

