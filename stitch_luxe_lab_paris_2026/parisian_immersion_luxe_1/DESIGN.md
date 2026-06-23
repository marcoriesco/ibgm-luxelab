---
name: Parisian Immersion Luxe
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1c1c19'
  on-tertiary-container: '#858480'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#e5e2de'
  tertiary-fixed-dim: '#c8c6c2'
  on-tertiary-fixed: '#1c1c19'
  on-tertiary-fixed-variant: '#474744'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-lg:
    fontFamily: Zilla Slab
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Zilla Slab
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Zilla Slab
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Zilla Slab
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Zilla Slab
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Zilla Slab
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Zilla Slab
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Zilla Slab
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Zilla Slab
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  max-width: 1280px
---

## Brand & Style
The design system embodies a sophisticated, editorial aesthetic inspired by high-end Parisian hospitality and cultural curation. It targets a discerning audience seeking exclusive experiences, blending timeless elegance with modern digital precision.

The style is **Minimalist with a Touch of Luxury**, characterized by expansive whitespace, refined proportions, and a focus on high-quality imagery. It evokes an emotional response of calm, exclusivity, and intellectual curiosity.

## Colors
The palette is grounded in a deep "Ink" primary (#1a1a1a) for text and structural elements, contrasted by a "Champagne Gold" secondary (#c5a059) used for accents and calls to action. The background utilizes a warm, off-white "Paper" tertiary (#f4f1ed) to reduce eye strain and provide a premium feel compared to pure white. Neutral tones (#666666) are used sparingly for secondary information and borders.

## Typography
The typographic hierarchy is unified under **Zilla Slab**, a contemporary slab serif that provides a literary, authoritative voice with a modern industrial edge. This single-typeface approach ensures a cohesive, curated look across all levels of information.

Display styles utilize the typeface's heavier weights with tight line heights and slight negative letter spacing for a high-fashion, "masthead" look. Body text remains legible and rhythmic thanks to the slab's sturdy structure, while labels are typically uppercase with increased tracking to maintain clarity at small sizes.

## Layout & Spacing
The design system employs a **Fixed Grid** on desktop and a **Fluid Grid** on mobile. 
- **Desktop:** 12-column grid with a maximum width of 1280px, centered in the viewport. 
- **Tablet:** 8-column grid with 32px margins. 
- **Mobile:** 4-column fluid grid with 16px margins.

Spacing follows an 8px base unit. Generous vertical rhythm is encouraged to separate distinct content sections, emphasizing the minimalist brand personality.

## Elevation & Depth
Depth is communicated through **Tonal Layers** and **Low-Contrast Outlines**. 
- Surfaces use subtle shifts in background color (e.g., Paper to a slightly cooler grey) rather than heavy shadows.
- Cards utilize a 1px solid border in a very light neutral tone.
- High-priority elements may use a soft, ultra-diffused "Ambient Shadow" (0 8px 32px rgba(0,0,0,0.04)) to suggest elevation without breaking the flat, editorial aesthetic.

## Shapes
The shape language is defined as **Rounded**. A 8px (0.5rem) border radius is applied to all components including buttons, input fields, and containers. This distinct rounding softens the architectural rigor of the design, making the UI feel friendly, approachable, and high-end, balancing the intellectual serif typography with a contemporary organic feel.

## Components
- **Buttons:** Rectangular with a 8px radius. Primary buttons are solid "Ink" with "Paper" text. Secondary buttons use a 1px "Ink" border.
- **Input Fields:** Bottom-border only by default, or full rectangular outlines with a 8px radius. Labels sit above in uppercase `label-sm`.
- **Chips:** Rectangular tags with a 8px radius, a light "Tertiary" background, and "Neutral" text.
- **Cards:** Defined by generous internal padding (min 32px), a 8px border radius, and thin, low-contrast borders. Imagery within cards should follow the corner radius at the top.
- **Navigation:** Minimalist top-bar with text-only links in `label-md`. Use a "Champagne Gold" underline for active states.