

# CSS Reorganization Plan (Visual-Preserving)

This plan restructures `index.css` for maintainability without changing any visual output.

---

## Goals

- Improve developer navigation and maintainability
- Reduce duplication through shared utility classes
- Add clear section organization with a table of contents
- Consolidate magic values into CSS variables
- Zero visual changes

---

## Proposed Structure

```text
src/index.css (reorganized)
├── TABLE OF CONTENTS (comment block)
├── 1. TAILWIND DIRECTIVES
├── 2. CSS VARIABLES (@layer base :root)
├── 3. GLOBAL RESETS & BASE STYLES
├── 4. TYPOGRAPHY (font utilities, .mono)
├── 5. LAYOUT UTILITIES (containers, grids)
├── 6. COMPONENT LIBRARY
│   ├── 6.1 Buttons (.btn-*)
│   ├── 6.2 Badges (.badge, .status-badge, etc.)
│   ├── 6.3 Cards (.demo-card, .analytics-card, etc.)
│   ├── 6.4 Forms (.form-group, inputs)
│   └── 6.5 Icons (.trust-icon, .feature-icon, etc.)
├── 7. SHARED PATTERNS
│   ├── 7.1 Widget Base (.widget-base)
│   ├── 7.2 List Items (.list-item-base)
│   ├── 7.3 Progress Bars (.progress-bar-base)
│   └── 7.4 Status Indicators (.status-dot)
├── 8. LAYOUT COMPONENTS
│   ├── 8.1 Header
│   └── 8.2 Footer
├── 9. SECTIONS (ordered by page flow)
│   ├── 9.1 Hero Section
│   ├── 9.2 Social Proof Section
│   ├── 9.3 Integration Section
│   ├── 9.4 Field Advantage Section
│   ├── 9.5 Trade Partner Section
│   ├── 9.6 Stop Workarounds Section
│   ├── 9.7 Executive Insights Section
│   ├── 9.8 Preventative Maintenance Section
│   ├── 9.9 Tech Specs Section
│   ├── 9.10 Testimonials Section
│   └── 9.11 CTA Section
├── 10. INFOGRAPHIC COMPONENTS
│   ├── 10.1 Integration Diagram
│   ├── 10.2 Compliance Core Dashboard
│   ├── 10.3 Phone Mockups
│   ├── 10.4 Trade Partner Dashboard
│   └── 10.5 Analytics Card
├── 11. ANIMATIONS & KEYFRAMES
└── 12. RESPONSIVE / MEDIA QUERIES
```

---

## Key Changes

### 1. Add Table of Contents

A comment block at the top listing all sections with line numbers for quick navigation.

```css
/* ==========================================================================
   SALUS STYLES - TABLE OF CONTENTS
   ==========================================================================
   
   1. Tailwind Directives ......................... line ~10
   2. CSS Variables ............................... line ~20
   3. Global Resets ............................... line ~100
   4. Typography .................................. line ~130
   5. Layout Utilities ............................ line ~160
   6. Component Library ........................... line ~200
      6.1 Buttons ................................. line ~200
      6.2 Badges .................................. line ~280
      ...
   
   ========================================================================== */
```

### 2. Extract Shared Patterns

Create base classes that multiple components extend:

```css
/* BEFORE: Duplicated 5+ times */
.dashboard-widget { background: hsl(var(--steel-dark) / 0.3); border-radius: 4px; padding: 16px; border: 1px solid hsl(var(--steel-dark)); }
.cc-widget { background: hsl(var(--steel-dark) / 0.3); border-radius: 4px; padding: 16px; border: 1px solid hsl(var(--steel-dark)); }

/* AFTER: Shared base + specific overrides */
.widget-base { 
  background: hsl(var(--steel-dark) / 0.3); 
  border-radius: 4px; 
  padding: 16px; 
  border: 1px solid hsl(var(--steel-dark)); 
}
.dashboard-widget { /* inherits via composition or extends widget-base */ }
.cc-widget { /* specific overrides only */ }
```

### 3. Consolidate Magic Values

```css
/* BEFORE: Scattered throughout */
.some-element { background: rgba(255, 255, 255, 0.1); }
.another-element { background: rgba(255, 255, 255, 0.1); }

/* AFTER: Variable in :root */
:root {
  --glass-white-10: rgba(255, 255, 255, 0.1);
  --glass-white-05: rgba(255, 255, 255, 0.05);
}
.some-element { background: var(--glass-white-10); }
```

### 4. Standardize Section Markers

```css
/* ==========================================================================
   9.3 INTEGRATION SECTION
   ========================================================================== */

.integration-section { ... }
```

---

## Implementation Steps

1. **Create a backup** - Copy current `index.css` to `index.css.backup`
2. **Add table of contents** - Insert comment block at top
3. **Reorder existing rules** - Move blocks to match new structure (no changes to selectors or values)
4. **Add section dividers** - Insert standardized comment blocks
5. **Extract shared patterns** - Create base classes, update HTML to add them alongside existing classes
6. **Consolidate variables** - Move magic values to `:root`
7. **Verify visually** - Check all pages render identically

---

## Estimated Line Reduction

| Category | Current | After |
|----------|---------|-------|
| Widget duplications | ~200 lines | ~80 lines |
| Status dot variants | ~50 lines | ~20 lines |
| Card patterns | ~150 lines | ~70 lines |
| **Total** | **4,406 lines** | **~3,900 lines** |

The reduction is modest because the goal is preserving visuals, not aggressive refactoring.

---

## Risk Mitigation

- All existing class names remain unchanged
- New base classes are additive (components use both base + specific)
- Responsive styles stay at the end for cascade correctness
- No CSS nesting or preprocessor features (keeps vanilla CSS)

---

## Technical Notes

- This is pure reorganization - no Sass/SCSS conversion
- Compatible with Tailwind's `@layer` system already in use
- Future consideration: Split into multiple files with `@import` if build supports it (Vite does)

