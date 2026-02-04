
# Fix FieldAdvantageSection for HammerTech Variant

## Problem

The `FieldAdvantageSection` component has hardcoded checks for `variant === "sitedocs"` to control styling and infographic selection. To display the correct QR onboarding infographic on HammerTech, we've been forced to use `variant="sitedocs"`, which incorrectly loads SiteDocs copy instead of the HammerTech-specific content.

## Solution

Update the component logic to treat `hammertech` similarly to `sitedocs` for visual elements (infographic, background, layout) while still pulling the correct HammerTech content from the config.

## Changes

### 1. Update FieldAdvantageSection.tsx

Update the conditional checks to include both `sitedocs` and `hammertech` variants:

- **Background color**: Use gray background for both sitedocs and hammertech
- **FeatureItem style**: Use "block" variant for both
- **Quote display**: Show the sitedocs quote for both (or add a hammertech-specific quote later)
- **Infographic**: Show `SiteOnboardingDashboard` for both variants

```tsx
// Line 24: Background
className={`... ${(variant === "sitedocs" || variant === "hammertech") ? "section-bg-gray" : "section-bg-white"}`}

// Line 41: FeatureItem variant
variant={(variant === "sitedocs" || variant === "hammertech") ? "block" : "numbered"}

// Line 46: Quote display
{(variant === "sitedocs" || variant === "hammertech") && (

// Line 57: Infographic selection
{(variant === "sitedocs" || variant === "hammertech") ? (
```

### 2. Update HammerTech.tsx

Change the variant from `sitedocs` to `hammertech` so it pulls the correct content:

```tsx
<FieldAdvantageSection variant="hammertech" />
```

## Result

The HammerTech page will display:
- The correct HammerTech intro copy ("While HammerTech users struggle with complex sign-ins...")
- The `SiteOnboardingDashboard` QR code infographic
- Consistent gray background and block-style feature items
