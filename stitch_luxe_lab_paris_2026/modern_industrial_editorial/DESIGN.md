---
name: Modern Industrial Editorial
colors:
  surface: '#f7f9ff'
  surface-dim: '#d2dbe6'
  surface-bright: '#f7f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#ecf4ff'
  surface-container: '#e6effa'
  surface-container-high: '#e0e9f5'
  surface-container-highest: '#dae3ef'
  on-surface: '#141c25'
  on-surface-variant: '#444748'
  inverse-surface: '#29313a'
  inverse-on-surface: '#e9f2fd'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#0a0a0a'
  on-primary: '#ffffff'
  primary-container: '#212121'
  on-primary-container: '#898888'
  inverse-primary: '#c8c6c5'
  secondary: '#005ac2'
  on-secondary: '#ffffff'
  secondary-container: '#5894ff'
  on-secondary-container: '#002c66'
  tertiary: '#200002'
  on-tertiary: '#ffffff'
  tertiary-container: '#4b000c'
  on-tertiary-container: '#f14d5a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1b1c1c'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a41'
  on-secondary-fixed-variant: '#004494'
  tertiary-fixed: '#ffdad9'
  tertiary-fixed-dim: '#ffb3b3'
  on-tertiary-fixed: '#400009'
  on-tertiary-fixed-variant: '#920021'
  background: '#f7f9ff'
  on-background: '#141c25'
  surface-variant: '#dae3ef'
typography:
  display:
    fontFamily: Zilla Slab
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Zilla Slab
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Zilla Slab
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Zilla Slab
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Zilla Slab
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Zilla Slab
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Zilla Slab
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Zilla Slab
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Zilla Slab
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style
The brand personality is authoritative yet accessible, designed to evoke a sense of scholarly rigor mixed with modern technical precision. This design system targets professionals in research, open-source development, and high-end publishing who value clarity and intellectual honesty.

The visual style is a blend of **Minimalism** and **Editorial Design**. It leverages the structural strength of slab-serif typography to create a layout that feels grounded and permanent. The interface prioritizes high-quality whitespace and clear information hierarchy over decorative elements, ensuring the content remains the focal point.

## Colors
The palette is rooted in an "Ink & Paper" philosophy. The primary color is a deep, near-black charcoal, used to mimic the legibility of printed text. A scholarly blue serves as the secondary color for interactions and links, while a muted red provides critical emphasis and error states. 

The background hierarchy utilizes a range of cool grays to define content areas without relying on heavy borders. This creates a clean, professional atmosphere that reduces eye strain during long reading sessions.

## Typography
This design system utilizes **Zilla Slab** across all roles to achieve a unified, industrial-chic aesthetic. Zilla Slab’s distinctive slab serifs provide excellent legibility and a unique "mechanical" warmth.

Headlines use a bolder weight with slightly tighter letter spacing to create a strong visual punch. Body text is set with generous line height to honor the font's character and ensure comfortable reading. Labels utilize a semi-bold weight and increased tracking to differentiate functional UI elements from narrative content.

## Layout & Spacing
The layout follows a **Fixed Grid** model for desktop to maintain editorial integrity, transitioning to a fluid model for mobile devices. On desktop, content is constrained to a 12-column grid with a maximum width of 1280px.

A strict 8px base unit governs all spatial relationships. Vertical rhythm is emphasized to mirror traditional typesetting. Margins and gutters are generous, creating a "breathable" interface that mirrors the margins of a well-designed book. Large-scale sections are separated by `xl` spacing to signify major thematic shifts in the content.

## Elevation & Depth
Depth is conveyed primarily through **Tonal Layers** rather than heavy shadows. This design system uses a "stacked paper" metaphor where higher elevation levels are represented by lighter surface colors.

When shadows are necessary for floating elements (like dropdowns or modals), they are implemented as **Ambient Shadows**: soft, highly diffused, and neutral-tinted (using a hint of the secondary blue in the shadow's hex). Low-contrast outlines (1px width) are used on primary containers to provide structural definition without breaking the minimalist aesthetic.

## Shapes
The shape language is **Soft (Level 1)**. Given the rectangular nature of slab-serif letterforms, sharp corners feel too aggressive, while fully rounded shapes feel too playful. A subtle 4px (`0.25rem`) corner radius on buttons and input fields provides a modern touch while respecting the geometric precision of the typography.

## Components
- **Buttons**: Primary buttons feature a solid charcoal fill with white Zilla Slab text in semi-bold. Secondary buttons use a 1px border with the secondary blue.
- **Input Fields**: Borders are 1px solid gray, darkening on focus. Labels sit strictly above the field in `label-md` style.
- **Cards**: Cards use a light gray tonal background (`#F6F8FA`) with no shadow and a subtle 1px stroke. Headlines within cards should not exceed `headline-sm`.
- **Chips**: Small, rectangular containers with the `0.25rem` radius, using a light tonal fill and `body-sm` typography.
- **Lists**: Bullet points are replaced with custom square markers to align with the slab-serif terminals.
- **Checkboxes/Radios**: These follow the primary color scheme, using sharp interior angles and the standard 4px exterior corner radius.