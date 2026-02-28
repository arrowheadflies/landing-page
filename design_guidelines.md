# Arrowhead Flies - Dark Heritage Design System Guidelines

This document outlines the design system specifications for the Arrowhead Flies "Dark Heritage" brand.

## Colors

### Core Palette
| Token | Value |
| :--- | :--- |
| `--color-charcoal` | `#2B2E30` |
| `--color-sage` | `#6E7B74` |
| `--color-cream` | `#D6CFC4` |
| `--color-dark-sage` | `#4A5750` |
| `--color-light-sage` | `#A8B5AC` |
| `--color-warm-white` | `#EDE8E0` |
| `--color-slate` | `#3A3F42` |
| `--color-deep-blue` | `#2F5D75` |
| `--color-brown` | `#4A3A30` |
| `--color-deep-red` | `#7C2D30` |
| `--color-black` | `#1A1D1E` |
| `--color-white` | `#FFFFFF` |
| `--color-off-white` | `#F5F5F0` |
| `--color-light-gray` | `#E8E8E4` |
| `--color-mid-gray` | `#9CA3A0` |
| `--color-dark-gray` | `#555555` |
| `--color-tan` | `#C4B49E` |
| `--color-sand` | `#DDD5C7` |
| `--color-bark` | `#6B5B4B` |
| `--color-forest` | `#2D4A37` |

### Functional
| Token | Value |
| :--- | :--- |
| `--color-success` | `#4ADE80` |
| `--color-warning` | `#FACC15` |
| `--color-error` | `#EF4444` |
| `--color-info` | `#5A9AB5` |

## Semantic Tokens

| Token | Value |
| :--- | :--- |
| `--bg-primary` | `var(--color-charcoal)` |
| `--bg-secondary` | `var(--color-slate)` |
| `--bg-elevated` | `var(--color-dark-sage)` |
| `--bg-surface` | `var(--color-warm-white)` |
| `--bg-inverse` | `var(--color-cream)` |
| `--text-primary` | `var(--color-cream)` |
| `--text-secondary` | `var(--color-mid-gray)` |
| `--text-inverse` | `var(--color-charcoal)` |
| `--text-accent` | `var(--color-sage)` |
| `--border-default`| `#3A3F42` |
| `--border-focus` | `var(--color-sage)` |
| `--border-error` | `var(--color-error)` |

## Typography

**Primary:** Montserrat (300, 400, 500, 700)  
**Display:** National Park (Regular, Bold)

### Fonts
| Token | Value |
| :--- | :--- |
| `--font-primary` | `'Montserrat', system-ui, sans-serif` |
| `--font-display` | `'National Park', 'Montserrat', sans-serif` |

### Scale
- **Display:** 36px / 1.1 line-height
- **H1:** 28px / 1.2 line-height
- **H2:** 22px / 1.25 line-height
- **H3:** 16px / 1.3 line-height
- **Body:** 16px / 1.5 line-height
- **Small:** 14px / 1.5 line-height
- **Caption:** 12px / 1.4 line-height
- **Overline:** 11px / 1.2 line-height (uppercase, 120 tracking)

## Spacing (8px base)

| Token | Value |
| :--- | :--- |
| `--space-2xs` | `4px` |
| `--space-xs` | `8px` |
| `--space-sm` | `12px` |
| `--space-md` | `16px` |
| `--space-lg` | `24px` |
| `--space-xl` | `32px` |
| `--space-2xl` | `48px` |
| `--space-3xl` | `64px` |

## Border Radius

| Token | Value |
| :--- | :--- |
| `--radius-sm` | `2px` |
| `--radius-default` | `4px` |
| `--radius-md` | `6px` |
| `--radius-lg` | `8px` |
| `--radius-xl` | `12px` |
| `--radius-full` | `9999px` |

## Shadows (Dark Theme)

| Token | Value |
| :--- | :--- |
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.2)` |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.3)` |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.35)` |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.4)` |

## Buttons

- **Primary:** Background sage, text cream, hover dark-sage, active `#3D4A43`, disabled light-sage, radius 6px.
- **Secondary (outline):** Border sage, text sage, hover background sage/20%, radius 6px.
- **Ghost:** Text sage, hover underline, no background.
- **Destructive:** Background deep-red, text cream.

### Sizes
- **lg:** 44px height / 18px font / radius 6px
- **default:** 36px height / 16px font / radius 6px
- **sm:** 28px height / 14px font / radius 4px

### Font Properties
Montserrat Medium, uppercase, 80-120 tracking.

## Inputs

- **Background:** slate
- **Border:** `#555555` default, sage focus, error red
- **Radius:** `4px`
- **Height:** 38-44px
- **Label:** mid-gray, 12px Montserrat Regular
- **Placeholder:** mid-gray
- **Value:** cream
- **Focus ring:** 2px solid sage, 2px offset

## Cards

- **Dark:** Background charcoal, border `#3A3F42`, radius 6px, shadow-md.
- **Cream:** Background cream, radius 6px.
- **Product cards:** Image area 50%, category overline (sage, uppercase), title (cream/charcoal, Primary Medium), price, CTA button.

## Layout & Breakpoints

| Breakpoint | Value |
| :--- | :--- |
| `sm` | `640px` |
| `md` | `768px` |
| `lg` | `1024px` |
| `xl` | `1280px` |
| `2xl` | `1440px` |

- **Container max:** 1200px desktop, 1400px wide.
- **Grid:** 12-col, 24px gutter (16px mobile).

## Accessibility & Interaction
- **Minimum contrast:** 4.5:1 body, 3:1 large text.
- **Focus:** 2px solid sage, 2px offset.
- **Respects `prefers-reduced-motion`.**
- **Transitions:** max 300ms ease-out. Hover 150ms.
- **Images:** Alt text required on all product images. Decorative images: `alt=""`.
