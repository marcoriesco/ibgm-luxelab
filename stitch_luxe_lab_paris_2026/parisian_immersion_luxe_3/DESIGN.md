---
name: Parisian Immersion Luxe
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1a1c19'
  on-tertiary-container: '#838480'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#e3e3de'
  tertiary-fixed-dim: '#c6c7c2'
  on-tertiary-fixed: '#1a1c19'
  on-tertiary-fixed-variant: '#454744'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-margin: 24px
  gutter: 16px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
---

## Brand & Style

The brand personality is rooted in **Modern French Luxury**—an aesthetic that balances historical prestige with contemporary minimalism. It aims to evoke feelings of exclusivity, intellectual depth, and serene sophistication. 

The design style is a blend of **Minimalism** and **Institutional Modernism**. It leverages high-quality editorial typography, generous whitespace (le respir), and a restrained color palette to ensure the content feels curated rather than crowded. Visual elements are intentional, using subtle depth and rounded geometry to create a tactile, premium interface that feels both cutting-edge and timeless.

## Colors

The palette is inspired by Parisian limestone and high-fashion ateliers:
- **Primary (Noir):** A deep, rich black used for primary text and high-contrast UI elements to ground the design.
- **Secondary (Or):** A muted, subtle gold used sparingly for accents, active states, and premium signifiers. It should never feel gaudy; think brushed metal, not glitter.
- **Tertiary (Beige de Paris):** A warm, sophisticated off-white/beige used for backgrounds and container surfaces to provide a softer look than pure white.
- **Neutral (Blanc):** Pure white used for elevated cards and high-light components to create crisp separation.

## Typography

The typography strategy relies on the high-contrast pairing of a traditional serif and a technical sans-serif. 

- **Headlines:** Use *Playfair Display*. Its high stroke contrast embodies luxury and editorial authority.
- **Body & UI:** Use *Manrope*. Its geometric yet approachable structure ensures maximum legibility and a modern, "tech-adjacent" feel.
- **Labels:** Use uppercase *Manrope* with increased letter spacing for navigation, small headers, and tags to create an institutional, organized look.

## Layout & Spacing

This design system utilizes a **Fluid Grid** with fixed maximum widths for desktop to maintain readability. 

- **Desktop:** 12-column grid with 24px gutters. Use wide margins (min 80px) to allow the "Beige de Paris" background to breathe.
- **Mobile:** 4-column grid with 16px gutters and 24px side margins.
- **Rhythm:** An 8px base unit drives all padding and margins. Vertical rhythm is intentionally loose; sections should have significant padding-top and padding-bottom to signify a premium experience—avoiding the "crammed" feel of traditional apps.

## Elevation & Depth

Visual hierarchy is established through **Tonal Layering** and **Soft Ambient Shadows**. 

Instead of traditional heavy drop shadows, use very light, diffused shadows (0px 4px 20px rgba(0,0,0,0.04)) to lift cards off the tertiary background. Elements should feel like they are floating slightly above a soft surface. Use low-contrast outlines (1px solid rgba(0,0,0,0.05)) to define containers without adding visual noise. Backdrop blurs (Glassmorphism) can be used sparingly on top-level navigation bars to maintain a sense of space.

## Shapes

The shape language is **Rounded**, reflecting the organic yet precise architecture of modern Paris. 

A base radius of 0.5rem (8px) is applied to most UI components like buttons and inputs. Larger containers and image cards use 1rem (16px) or 1.5rem (24px) to create a softer, more inviting aesthetic. This "squircle-adjacent" geometry softens the high-contrast color palette, making the interface feel more approachable.

## Components

- **Buttons:** Primary buttons are solid Noir (#1A1A1A) with white labels. Secondary buttons use a transparent background with a Noir border or Or (#D4AF37) text for delicate calls to action.
- **Cards:** White (#FFFFFF) surfaces with a 1rem corner radius and a subtle ambient shadow. Images within cards should have a "zoom-on-hover" effect.
- **Input Fields:** Minimalist design with only a bottom border or a very light Tertiary background. Focus states are indicated by a change to the Or (#D4AF37) accent color.
- **Chips/Tags:** Used for event categories (e.g., "Art", "Workshop"). Small, uppercase text on a light beige background with high pill-rounding.
- **Lists:** Clean separation using thin, low-opacity lines (rgba(0,0,0,0.1)). Icons should be thin-line (2px stroke) and sophisticated.
- **Navigation:** A sticky top-bar with a backdrop blur and centered logo to reinforce the institutional feel.