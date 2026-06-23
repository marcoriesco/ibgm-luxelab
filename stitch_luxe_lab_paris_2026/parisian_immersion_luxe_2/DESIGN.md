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
  tertiary-container: '#1b1c19'
  on-tertiary-container: '#848480'
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
  tertiary-fixed: '#e4e2dd'
  tertiary-fixed-dim: '#c8c6c2'
  on-tertiary-fixed: '#1b1c19'
  on-tertiary-fixed-variant: '#474744'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-lg:
    fontFamily: Zilla Slab
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Zilla Slab
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Zilla Slab
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Zilla Slab
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
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
  label-md:
    fontFamily: Zilla Slab
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  caption:
    fontFamily: Zilla Slab
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style
The design system embodies "Parisian Immersion Luxe"—an aesthetic defined by effortless elegance, historical depth, and modern sophistication. It targets an audience that appreciates curated experiences, high-end travel, and cultural richness. 

The style is a blend of **Minimalism** and **High-Contrast Editorial**. It utilizes generous whitespace to allow content to breathe, paired with a structured, classical layout that feels like a premium print magazine. The emotional response should be one of "quiet luxury"—understated yet undeniably high-quality.

## Colors
The palette is rooted in a timeless, high-contrast foundation.
- **Primary (#1A1A1A):** An "almost black" used for primary text and structural elements to provide weight and authority.
- **Secondary (#C5A059):** A muted "Champagne Gold" used sparingly for accents, active states, and call-to-actions to signify prestige.
- **Tertiary (#F9F7F2):** A warm "Paper White" used for backgrounds to avoid the harshness of pure white and evoke the feel of high-quality stationery.
- **Neutral (#666666):** A balanced grey for secondary text and decorative borders.

## Typography
This design system exclusively utilizes **Zilla Slab** to provide a contemporary yet academic "slab serif" feel that bridges the gap between digital precision and traditional publishing. 

- **Headlines:** Use Bold (700) weights to establish a strong visual hierarchy and a sense of architectural structure.
- **Body Text:** Use Regular (400) weights for high readability and a comfortable, book-like flow.
- **Labels:** Use Semi-Bold/Bold with increased letter spacing and uppercase styling to create a distinct functional contrast from narrative text.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to maintain an editorial composition, transitioning to a fluid model on mobile devices.

- **Desktop:** A 12-column grid centered within a 1200px container. Large outer margins (64px) create a gallery-like focus on the content.
- **Mobile:** A 4-column fluid grid with 16px side margins. 
- **Rhythm:** All spacing is based on an 8px base unit. Vertical rhythm should prioritize large "breathing rooms" (64px - 120px) between major sections to reinforce the luxury positioning.

## Elevation & Depth
Depth is conveyed through **Tonal Layers** rather than heavy shadows. The design system avoids the "floating" look of standard SaaS products.

- **Surface Levels:** Use the Tertiary color for the base background. Elevated components (like cards) use pure white (#FFFFFF) surfaces to create a subtle lift.
- **Outlines:** Use low-contrast, 1px borders in the Neutral color or a lightened version of the Secondary color to define boundaries.
- **Shadows:** When necessary, use extremely diffused, low-opacity "ambient" shadows (e.g., 20px blur, 4% opacity) to provide a soft sense of physical presence.

## Shapes
The shape language is **Sharp (0)**. To maintain a sophisticated, architectural aesthetic reminiscent of high-fashion branding and classical French typography, all buttons, input fields, and image containers use 0px border radii. This precision suggests a rigorous attention to detail and a "bespoke" quality.

## Components
- **Buttons:** Rectangular with sharp corners. Primary buttons are solid Primary color with white text. Secondary buttons are outlined with a 1px border. Use Zilla Slab Bold for button labels.
- **Inputs:** Simple bottom-border only or full 1px outlines. Labels sit strictly above the input in the uppercase Label-MD style.
- **Cards:** No shadows; use a 1px Neutral border or a subtle Tonal shift (white surface on Tertiary background).
- **Chips:** Small, rectangular tags with thin borders, used for categories or metadata.
- **Navigation:** Minimalist top-bar with generous spacing between links. Active states are indicated by the Secondary color (Champagne Gold).