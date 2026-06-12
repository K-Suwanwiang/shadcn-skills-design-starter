# DESIGN.md — Design System Reference (Shadcn UI + Tailwind CSS + Next.js)

> Source: `variables-export.json` — 1,788 variables across 16 collections. Do not edit values without updating the source file.

---

## Part A — Active Reference

> Read this section every time before generating UI. Use Part B for deep token lookups.

---

### A1. Semantic Color Token Quick Reference

The 35 tokens that drive all shadcn/ui components. Always reference these — never raw colors.

| Token | Correct Tailwind Usage | Light (alias) | Dark (alias) |
|---|---|---|---|
| `background` | `bg-background` | white | neutral-950 |
| `foreground` | `text-foreground` | neutral-950 | neutral-50 |
| `card` | `bg-card` | white | neutral-900 |
| `card-foreground` | `text-card-foreground` | neutral-950 | neutral-50 |
| `popover` | `bg-popover` | white | neutral-800 |
| `popover-foreground` | `text-popover-foreground` | neutral-950 | neutral-50 |
| `primary` | `bg-primary` / `text-primary-foreground` | neutral-900 | neutral-200 |
| `primary-foreground` | `text-primary-foreground` | neutral-50 | neutral-900 |
| `secondary` | `bg-secondary` / `text-secondary-foreground` | neutral-100 | neutral-800 |
| `secondary-foreground` | `text-secondary-foreground` | neutral-950 | neutral-50 |
| `muted` | `bg-muted` | neutral-100 | neutral-800 |
| `muted-foreground` | `text-muted-foreground` | neutral-500 | neutral-400 |
| `accent` | `bg-accent` | neutral-100 | neutral-700 |
| `accent-foreground` | `text-accent-foreground` | neutral-900 | neutral-50 |
| `destructive` | `bg-destructive` / `text-destructive` | red-600 | red-400 |
| `border` | `border-border` | neutral-200 | neutral-700 |
| `input` | `border-input` | neutral-200 | neutral-900 |
| `ring` | `ring-ring` | neutral-500 | neutral-500 |
| `chart-1` … `chart-5` | `text-chart-1` … `text-chart-5` | blue-8 … blue-12 (rdx) | same |
| `sidebar` | `bg-sidebar` | neutral-50 | neutral-900 |
| `sidebar-foreground` | `text-sidebar-foreground` | neutral-950 | neutral-50 |
| `sidebar-primary` | `bg-sidebar-primary` | neutral-900 | #0588F0 (rdx blue-10) |
| `sidebar-primary-foreground` | `text-sidebar-primary-foreground` | neutral-50 | neutral-50 |
| `sidebar-accent` | `bg-sidebar-accent` | neutral-100 | neutral-800 |
| `sidebar-accent-foreground` | `text-sidebar-accent-foreground` | neutral-900 | neutral-50 |
| `sidebar-border` | `border-sidebar-border` | neutral-300 | white/10 (rdx) |
| `sidebar-ring` | `ring-sidebar-ring` | neutral-500 | neutral-500 |
| `background-color` | `bg-background-color` | black/5 (30% α) | black/5 (30% α) |
| `semantic-background` | `bg-semantic-background` | sand-11 (rdx) | #272625 |
| `semantic-foreground` | `text-semantic-foreground` | sand-1 (rdx) | #535151 |
| `semantic-border` | `border-semantic-border` | sand-9 (rdx) | white |

---

### A2. Tailwind Class Prefix Rules

Each token type maps to a specific Tailwind prefix:

| Token role | Correct prefix | Example |
|---|---|---|
| Surface / background | `bg-` | `bg-card`, `bg-muted` |
| Text / icon | `text-` | `text-foreground`, `text-muted-foreground` |
| Border line | `border-` | `border-border`, `border-input` |
| Focus ring | `ring-` | `ring-ring` |
| Chart fill / stroke | `text-` or `fill-` | `text-chart-1` |
| Sidebar border | `border-` | `border-sidebar-border` |

**Typography quick classes (from `font` collection):**

| Role | Classes |
|---|---|
| H1 | `text-4xl font-extrabold tracking-tight lg:text-5xl` |
| H2 | `text-3xl font-semibold tracking-tight` |
| H3 | `text-2xl font-semibold tracking-tight` |
| H4 | `text-xl font-semibold tracking-tight` |
| Body | `text-base leading-7` |
| Lead | `text-xl text-muted-foreground` |
| Small | `text-sm font-medium leading-none` |
| Muted | `text-sm text-muted-foreground` |
| Code | `font-mono text-sm bg-muted px-1.5 py-0.5 rounded-sm` |

---

### A3. Next.js Font Setup

Font families from `font` collection: **Inter** (sans) + **Geist Mono** (mono).

```ts
// app/layout.tsx
import { Inter, Geist_Mono } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
```

---

### A4. globals.css Template

Copy-paste ready. Values sourced from `variables-export.json` → shadcn/ui collection.

```css
@import "tailwindcss";

@layer base {
  :root {
    --background:           oklch(1 0 0);
    --foreground:           oklch(0.145 0 0);
    --card:                 oklch(1 0 0);
    --card-foreground:      oklch(0.145 0 0);
    --popover:              oklch(1 0 0);
    --popover-foreground:   oklch(0.145 0 0);
    --primary:              oklch(0.205 0 0);
    --primary-foreground:   oklch(0.985 0 0);
    --secondary:            oklch(0.970 0 0);
    --secondary-foreground: oklch(0.145 0 0);
    --muted:                oklch(0.970 0 0);
    --muted-foreground:     oklch(0.556 0 0);
    --accent:               oklch(0.970 0 0);
    --accent-foreground:    oklch(0.205 0 0);
    --destructive:          oklch(0.577 0.245 27.325);
    --border:               oklch(0.922 0 0);
    --input:                oklch(0.922 0 0);
    --ring:                 oklch(0.556 0 0);
    --chart-1:              oklch(0.723 0.134 231.6);
    --chart-2:              oklch(0.623 0.214 259.1);
    --chart-3:              oklch(0.606 0.196 255.4);
    --chart-4:              oklch(0.520 0.178 256.1);
    --chart-5:              oklch(0.279 0.109 256.8);
    --sidebar:              oklch(0.985 0 0);
    --sidebar-foreground:   oklch(0.145 0 0);
    --sidebar-primary:      oklch(0.205 0 0);
    --sidebar-primary-foreground: oklch(0.985 0 0);
    --sidebar-accent:       oklch(0.970 0 0);
    --sidebar-accent-foreground: oklch(0.205 0 0);
    --sidebar-border:       oklch(0.870 0 0);
    --sidebar-ring:         oklch(0.556 0 0);
    --background-color:     #0000004D;  /* rdx black/5 = #000000 @ 30% α */
    --semantic-background:  #63635E;    /* rdx sand/11 */
    --semantic-foreground:  #FDFDFC;    /* rdx sand/1 */
    --semantic-border:      #8D8D86;    /* rdx sand/9 */
    --radius: 0.5rem;
    --font-sans: 'Inter', system-ui, sans-serif;
    --font-mono: 'Geist Mono', ui-monospace, monospace;
  }

  .dark {
    --background:           oklch(0.145 0 0);
    --foreground:           oklch(0.985 0 0);
    --card:                 oklch(0.205 0 0);
    --card-foreground:      oklch(0.985 0 0);
    --popover:              oklch(0.269 0 0);
    --popover-foreground:   oklch(0.985 0 0);
    --primary:              oklch(0.922 0 0);
    --primary-foreground:   oklch(0.205 0 0);
    --secondary:            oklch(0.269 0 0);
    --secondary-foreground: oklch(0.985 0 0);
    --muted:                oklch(0.269 0 0);
    --muted-foreground:     oklch(0.708 0 0);
    --accent:               oklch(0.371 0 0);
    --accent-foreground:    oklch(0.985 0 0);
    --destructive:          oklch(0.704 0.191 22.216);
    --border:               oklch(0.371 0 0);
    --input:                oklch(0.205 0 0);
    --ring:                 oklch(0.556 0 0);
    --chart-1:              oklch(0.723 0.134 231.6);
    --chart-2:              oklch(0.623 0.214 259.1);
    --chart-3:              oklch(0.606 0.196 255.4);
    --chart-4:              oklch(0.520 0.178 256.1);
    --chart-5:              oklch(0.279 0.109 256.8);
    --sidebar:              oklch(0.205 0 0);
    --sidebar-foreground:   oklch(0.985 0 0);
    --sidebar-primary:      oklch(0.606 0.196 255.4);
    --sidebar-primary-foreground: oklch(0.985 0 0);
    --sidebar-accent:       oklch(0.269 0 0);
    --sidebar-accent-foreground: oklch(0.985 0 0);
    --sidebar-border:       oklch(1 0 0 / 0.1);
    --sidebar-ring:         oklch(0.556 0 0);
    --background-color:     #0000004D;  /* rdx black/5 = #000000 @ 30% α */
    --semantic-background:  #272625;
    --semantic-foreground:  #535151;
    --semantic-border:      #FFFFFF;    /* tailwind/colors/white */
  }
}
```

---

## Part B — Full Token Tables

---

## Table of Contents

1. [Core Philosophy](#1-core-philosophy)
2. [shadcn/ui — Semantic Color Tokens (35)](#2-shadcnui--semantic-color-tokens-35)
3. [tailwind/colors — Base Color Palette (244)](#3-tailwindcolors--base-color-palette-244)
4. [rdx/colors — Radix UI Color Scale (396)](#4-rdxcolors--radix-ui-color-scale-396)
5. [font — Typography Tokens (45)](#5-font--typography-tokens-45)
6. [tokens — Numeric Scale (87)](#6-tokens--numeric-scale-87)
7. [border-radius — All Variants (150)](#7-border-radius--all-variants-150)
8. [border-width — All Variants (45)](#8-border-width--all-variants-45)
9. [gap — All Variants (102)](#9-gap--all-variants-102)
10. [space — All Variants (68)](#10-space--all-variants-68)
11. [padding — All Variants (245)](#11-padding--all-variants-245)
12. [margin — All Variants (245)](#12-margin--all-variants-245)
13. [height — All Variants (24)](#13-height--all-variants-24)
14. [max-height — All Variants (35)](#14-max-height--all-variants-35)
15. [max-width — All Variants (35)](#15-max-width--all-variants-35)
16. [opacity — All Variants (21)](#16-opacity--all-variants-21)
17. [stroke-width — All Variants (11)](#17-stroke-width--all-variants-11)

---

## 1. Core Philosophy

- **Semantic tokens over raw values** — always use tokens (e.g. `bg-primary`), never raw colors (e.g. `bg-neutral-900`)
- **Composition** — assemble UI from shadcn primitives before writing custom components
- **Single source of truth** — CSS variables in `globals.css` are the only source for all tokens
- **Dark mode via token inversion** — never create separate components for dark mode

---

## 2. shadcn/ui — Semantic Color Tokens (35)

CSS variables used by all shadcn components. Defined in `:root` (Light) and `.dark`.

| Token | CSS Variable | Tailwind Class | Light | Dark |
|---|---|---|---|---|
| `background` | `--background` | `bg-background` / `text-background` | `tailwind/colors/white` | `tailwind/colors/neutral/950` |
| `foreground` | `--foreground` | `bg-foreground` / `text-foreground` | `tailwind/colors/neutral/950` | `tailwind/colors/neutral/50` |
| `card` | `--card` | `bg-card` / `text-card` | `tailwind/colors/white` | `tailwind/colors/neutral/900` |
| `card-foreground` | `--card-foreground` | `bg-card-foreground` / `text-card-foreground` | `tailwind/colors/neutral/950` | `tailwind/colors/neutral/50` |
| `popover` | `--popover` | `bg-popover` / `text-popover` | `tailwind/colors/white` | `tailwind/colors/neutral/800` |
| `popover-foreground` | `--popover-foreground` | `bg-popover-foreground` / `text-popover-foreground` | `tailwind/colors/neutral/950` | `tailwind/colors/neutral/50` |
| `primary` | `--primary` | `bg-primary` / `text-primary` | `tailwind/colors/neutral/900` | `tailwind/colors/neutral/200` |
| `primary-foreground` | `--primary-foreground` | `bg-primary-foreground` / `text-primary-foreground` | `tailwind/colors/neutral/50` | `tailwind/colors/neutral/900` |
| `secondary` | `--secondary` | `bg-secondary` / `text-secondary` | `tailwind/colors/neutral/100` | `tailwind/colors/neutral/800` |
| `secondary-foreground` | `--secondary-foreground` | `bg-secondary-foreground` / `text-secondary-foreground` | `tailwind/colors/neutral/950` | `tailwind/colors/neutral/50` |
| `muted` | `--muted` | `bg-muted` / `text-muted` | `tailwind/colors/neutral/100` | `tailwind/colors/neutral/800` |
| `muted-foreground` | `--muted-foreground` | `bg-muted-foreground` / `text-muted-foreground` | `tailwind/colors/neutral/500` | `tailwind/colors/neutral/400` |
| `accent` | `--accent` | `bg-accent` / `text-accent` | `tailwind/colors/neutral/100` | `tailwind/colors/neutral/700` |
| `accent-foreground` | `--accent-foreground` | `bg-accent-foreground` / `text-accent-foreground` | `tailwind/colors/neutral/900` | `tailwind/colors/neutral/50` |
| `destructive` | `--destructive` | `bg-destructive` / `text-destructive` | `tailwind/colors/red/600` | `tailwind/colors/red/400` |
| `border` | `--border` | `bg-border` / `text-border` | `tailwind/colors/neutral/200` | `tailwind/colors/neutral/700` |
| `input` | `--input` | `bg-input` / `text-input` | `tailwind/colors/neutral/200` | `tailwind/colors/neutral/900` |
| `ring` | `--ring` | `bg-ring` / `text-ring` | `tailwind/colors/neutral/500` | `tailwind/colors/neutral/500` |
| `chart-1` | `--chart-1` | `bg-chart-1` / `text-chart-1` | `rdx/colors/blue/8` | `rdx/colors/blue/8` |
| `chart-2` | `--chart-2` | `bg-chart-2` / `text-chart-2` | `rdx/colors/blue/9` | `rdx/colors/blue/9` |
| `chart-3` | `--chart-3` | `bg-chart-3` / `text-chart-3` | `rdx/colors/blue/10` | `rdx/colors/blue/10` |
| `chart-4` | `--chart-4` | `bg-chart-4` / `text-chart-4` | `rdx/colors/blue/11` | `rdx/colors/blue/11` |
| `chart-5` | `--chart-5` | `bg-chart-5` / `text-chart-5` | `rdx/colors/blue/12` | `rdx/colors/blue/12` |
| `sidebar` | `--sidebar` | `bg-sidebar` / `text-sidebar` | `tailwind/colors/neutral/50` | `tailwind/colors/neutral/900` |
| `sidebar-foreground` | `--sidebar-foreground` | `bg-sidebar-foreground` / `text-sidebar-foreground` | `tailwind/colors/neutral/950` | `tailwind/colors/neutral/50` |
| `sidebar-primary` | `--sidebar-primary` | `bg-sidebar-primary` / `text-sidebar-primary` | `tailwind/colors/neutral/900` | `#0588F0` |
| `sidebar-primary-foreground` | `--sidebar-primary-foreground` | `bg-sidebar-primary-foreground` / `text-sidebar-primary-foreground` | `tailwind/colors/neutral/50` | `tailwind/colors/neutral/50` |
| `sidebar-accent` | `--sidebar-accent` | `bg-sidebar-accent` / `text-sidebar-accent` | `tailwind/colors/neutral/100` | `tailwind/colors/neutral/800` |
| `sidebar-accent-foreground` | `--sidebar-accent-foreground` | `bg-sidebar-accent-foreground` / `text-sidebar-accent-foreground` | `tailwind/colors/neutral/900` | `tailwind/colors/neutral/50` |
| `sidebar-border` | `--sidebar-border` | `bg-sidebar-border` / `text-sidebar-border` | `tailwind/colors/neutral/300` | `rdx/colors/white/10` |
| `sidebar-ring` | `--sidebar-ring` | `bg-sidebar-ring` / `text-sidebar-ring` | `tailwind/colors/neutral/500` | `tailwind/colors/neutral/500` |
| `background-color` | `--background-color` | `bg-background-color` / `text-background-color` | `rdx/colors/black/5` | `rdx/colors/black/5` |
| `semantic-background` | `--semantic-background` | `bg-semantic-background` / `text-semantic-background` | `rdx/colors/sand/11` | `#272625` |
| `semantic-foreground` | `--semantic-foreground` | `bg-semantic-foreground` / `text-semantic-foreground` | `rdx/colors/sand/1` | `#535151` |
| `semantic-border` | `--semantic-border` | `bg-semantic-border` / `text-semantic-border` | `rdx/colors/sand/9` | `tailwind/colors/white` |

---

## 3. tailwind/colors — Base Color Palette (244)

Primitive colors used as aliases for shadcn/ui tokens. Never reference these directly in components.

### slate

| Token | Hex |
|---|---|
| `slate/50` | `#F8FAFC` |
| `slate/100` | `#F1F5F9` |
| `slate/200` | `#E2E8F0` |
| `slate/300` | `#CBD5E1` |
| `slate/400` | `#94A3B8` |
| `slate/500` | `#64748B` |
| `slate/600` | `#475569` |
| `slate/700` | `#334155` |
| `slate/800` | `#1E293B` |
| `slate/900` | `#0F172A` |
| `slate/950` | `#020617` |

### other

| Token | Hex |
|---|---|
| `black` | `#000000` |
| `white` | `#FFFFFF` |

### gray

| Token | Hex |
|---|---|
| `gray/50` | `#F9FAFB` |
| `gray/100` | `#F3F4F6` |
| `gray/200` | `#E5E7EB` |
| `gray/300` | `#D1D5DB` |
| `gray/400` | `#9CA3AF` |
| `gray/500` | `#6B7280` |
| `gray/600` | `#4B5563` |
| `gray/700` | `#374151` |
| `gray/800` | `#1F2937` |
| `gray/900` | `#111827` |
| `gray/950` | `#030712` |

### zinc

| Token | Hex |
|---|---|
| `zinc/50` | `#FAFAFA` |
| `zinc/100` | `#F4F4F5` |
| `zinc/200` | `#E4E4E7` |
| `zinc/300` | `#D4D4D8` |
| `zinc/400` | `#A1A1AA` |
| `zinc/500` | `#71717A` |
| `zinc/600` | `#52525B` |
| `zinc/700` | `#3F3F46` |
| `zinc/800` | `#27272A` |
| `zinc/900` | `#18181B` |
| `zinc/950` | `#09090B` |

### neutral

| Token | Hex |
|---|---|
| `neutral/50` | `#FAFAFA` |
| `neutral/100` | `#F5F5F5` |
| `neutral/200` | `#E5E5E5` |
| `neutral/300` | `#D4D4D4` |
| `neutral/400` | `#A3A3A3` |
| `neutral/500` | `#737373` |
| `neutral/600` | `#525252` |
| `neutral/700` | `#404040` |
| `neutral/800` | `#262626` |
| `neutral/900` | `#171717` |
| `neutral/950` | `#0A0A0A` |

### stone

| Token | Hex |
|---|---|
| `stone/50` | `#FAFAF9` |
| `stone/100` | `#F5F5F4` |
| `stone/200` | `#E7E5E4` |
| `stone/300` | `#D6D3D1` |
| `stone/400` | `#A8A29E` |
| `stone/500` | `#78716C` |
| `stone/600` | `#57534E` |
| `stone/700` | `#44403C` |
| `stone/800` | `#292524` |
| `stone/900` | `#1C1917` |
| `stone/950` | `#0C0A09` |

### red

| Token | Hex |
|---|---|
| `red/50` | `#FEF2F2` |
| `red/100` | `#FEE2E2` |
| `red/200` | `#FECACA` |
| `red/300` | `#FCA5A5` |
| `red/400` | `#F87171` |
| `red/500` | `#EF4444` |
| `red/600` | `#DC2626` |
| `red/700` | `#B91C1C` |
| `red/800` | `#991B1B` |
| `red/900` | `#7F1D1D` |
| `red/950` | `#450A0A` |

### orange

| Token | Hex |
|---|---|
| `orange/50` | `#FFF7ED` |
| `orange/100` | `#FFEDD5` |
| `orange/200` | `#FED7AA` |
| `orange/300` | `#FDBA74` |
| `orange/400` | `#FB923C` |
| `orange/500` | `#F97316` |
| `orange/600` | `#EA580C` |
| `orange/700` | `#C2410C` |
| `orange/800` | `#9A3412` |
| `orange/900` | `#7C2D12` |
| `orange/950` | `#431407` |

### amber

| Token | Hex |
|---|---|
| `amber/50` | `#FFFBEB` |
| `amber/100` | `#FEF3C7` |
| `amber/200` | `#FDE68A` |
| `amber/300` | `#FCD34D` |
| `amber/400` | `#FBBF24` |
| `amber/500` | `#F59E0B` |
| `amber/600` | `#D97706` |
| `amber/700` | `#B45309` |
| `amber/800` | `#92400E` |
| `amber/900` | `#78350F` |
| `amber/950` | `#451A03` |

### yellow

| Token | Hex |
|---|---|
| `yellow/50` | `#FEFCE8` |
| `yellow/100` | `#FEF9C3` |
| `yellow/200` | `#FEF08A` |
| `yellow/300` | `#FDE047` |
| `yellow/400` | `#FACC15` |
| `yellow/500` | `#EAB308` |
| `yellow/600` | `#CA8A04` |
| `yellow/700` | `#A16207` |
| `yellow/800` | `#854D0E` |
| `yellow/900` | `#713F12` |
| `yellow/950` | `#422006` |

### lime

| Token | Hex |
|---|---|
| `lime/50` | `#F7FEE7` |
| `lime/100` | `#ECFCCB` |
| `lime/200` | `#D9F99D` |
| `lime/300` | `#BEF264` |
| `lime/400` | `#A3E635` |
| `lime/500` | `#84CC16` |
| `lime/600` | `#65A30D` |
| `lime/700` | `#4D7C0F` |
| `lime/800` | `#3F6212` |
| `lime/900` | `#365314` |
| `lime/950` | `#1A2E05` |

### green

| Token | Hex |
|---|---|
| `green/50` | `#F0FDF4` |
| `green/100` | `#DCFCE7` |
| `green/200` | `#BBF7D0` |
| `green/300` | `#86EFAC` |
| `green/400` | `#4ADE80` |
| `green/500` | `#22C55E` |
| `green/600` | `#16A34A` |
| `green/700` | `#15803D` |
| `green/800` | `#166534` |
| `green/900` | `#14532D` |
| `green/950` | `#052E16` |

### emerald

| Token | Hex |
|---|---|
| `emerald/50` | `#ECFDF5` |
| `emerald/100` | `#D1FAE5` |
| `emerald/200` | `#A7F3D0` |
| `emerald/300` | `#6EE7B7` |
| `emerald/400` | `#34D399` |
| `emerald/500` | `#10B981` |
| `emerald/600` | `#059669` |
| `emerald/700` | `#047857` |
| `emerald/800` | `#065F46` |
| `emerald/900` | `#064E3B` |
| `emerald/950` | `#022C22` |

### teal

| Token | Hex |
|---|---|
| `teal/50` | `#F0FDFA` |
| `teal/100` | `#CCFBF1` |
| `teal/200` | `#99F6E4` |
| `teal/300` | `#5EEAD4` |
| `teal/400` | `#2DD4BF` |
| `teal/500` | `#14B8A6` |
| `teal/600` | `#0D9488` |
| `teal/700` | `#0F766E` |
| `teal/800` | `#115E59` |
| `teal/900` | `#134E4A` |
| `teal/950` | `#042F2E` |

### cyan

| Token | Hex |
|---|---|
| `cyan/50` | `#ECFEFF` |
| `cyan/100` | `#CFFAFE` |
| `cyan/200` | `#A5F3FC` |
| `cyan/300` | `#67E8F9` |
| `cyan/400` | `#22D3EE` |
| `cyan/500` | `#06B6D4` |
| `cyan/600` | `#0891B2` |
| `cyan/700` | `#0E7490` |
| `cyan/800` | `#155E75` |
| `cyan/900` | `#164E63` |
| `cyan/950` | `#083344` |

### sky

| Token | Hex |
|---|---|
| `sky/50` | `#F0F9FF` |
| `sky/100` | `#E0F2FE` |
| `sky/200` | `#BAE6FD` |
| `sky/300` | `#7DD3FC` |
| `sky/400` | `#38BDF8` |
| `sky/500` | `#0EA5E9` |
| `sky/600` | `#0284C7` |
| `sky/700` | `#0369A1` |
| `sky/800` | `#075985` |
| `sky/900` | `#0C4A6E` |
| `sky/950` | `#082F49` |

### blue

| Token | Hex |
|---|---|
| `blue/50` | `#EFF6FF` |
| `blue/100` | `#DBEAFE` |
| `blue/200` | `#BFDBFE` |
| `blue/300` | `#93C5FD` |
| `blue/400` | `#60A5FA` |
| `blue/500` | `#3B82F6` |
| `blue/600` | `#2563EB` |
| `blue/700` | `#1D4ED8` |
| `blue/800` | `#1E40AF` |
| `blue/900` | `#1E3A8A` |
| `blue/950` | `#172554` |

### indigo

| Token | Hex |
|---|---|
| `indigo/50` | `#EEF2FF` |
| `indigo/100` | `#E0E7FF` |
| `indigo/200` | `#C7D2FE` |
| `indigo/300` | `#A5B4FC` |
| `indigo/400` | `#818CF8` |
| `indigo/500` | `#6366F1` |
| `indigo/600` | `#4F46E5` |
| `indigo/700` | `#4338CA` |
| `indigo/800` | `#3730A3` |
| `indigo/900` | `#312E81` |
| `indigo/950` | `#1E1B4B` |

### violet

| Token | Hex |
|---|---|
| `violet/50` | `#F5F3FF` |
| `violet/100` | `#EDE9FE` |
| `violet/200` | `#DDD6FE` |
| `violet/300` | `#C4B5FD` |
| `violet/400` | `#A78BFA` |
| `violet/500` | `#8B5CF6` |
| `violet/600` | `#7C3AED` |
| `violet/700` | `#6D28D9` |
| `violet/800` | `#5B21B6` |
| `violet/900` | `#4C1D95` |
| `violet/950` | `#2E1065` |

### purple

| Token | Hex |
|---|---|
| `purple/50` | `#FAF5FF` |
| `purple/100` | `#F3E8FF` |
| `purple/200` | `#E9D5FF` |
| `purple/300` | `#D8B4FE` |
| `purple/400` | `#C084FC` |
| `purple/500` | `#A855F7` |
| `purple/600` | `#9333EA` |
| `purple/700` | `#7E22CE` |
| `purple/800` | `#6B21A8` |
| `purple/900` | `#581C87` |
| `purple/950` | `#3B0764` |

### fuchsia

| Token | Hex |
|---|---|
| `fuchsia/50` | `#FDF4FF` |
| `fuchsia/100` | `#FAE8FF` |
| `fuchsia/200` | `#F5D0FE` |
| `fuchsia/300` | `#F0ABFC` |
| `fuchsia/400` | `#E879F9` |
| `fuchsia/500` | `#D946EF` |
| `fuchsia/600` | `#C026D3` |
| `fuchsia/700` | `#A21CAF` |
| `fuchsia/800` | `#86198F` |
| `fuchsia/900` | `#701A75` |
| `fuchsia/950` | `#4A044E` |

### pink

| Token | Hex |
|---|---|
| `pink/50` | `#FDF2F8` |
| `pink/100` | `#FCE7F3` |
| `pink/200` | `#FBCFE8` |
| `pink/300` | `#F9A8D4` |
| `pink/400` | `#F472B6` |
| `pink/500` | `#EC4899` |
| `pink/600` | `#DB2777` |
| `pink/700` | `#BE185D` |
| `pink/800` | `#9D174D` |
| `pink/900` | `#831843` |
| `pink/950` | `#500724` |

### rose

| Token | Hex |
|---|---|
| `rose/50` | `#FFF1F2` |
| `rose/100` | `#FFE4E6` |
| `rose/200` | `#FECDD3` |
| `rose/300` | `#FDA4AF` |
| `rose/400` | `#FB7185` |
| `rose/500` | `#F43F5E` |
| `rose/600` | `#E11D48` |
| `rose/700` | `#BE123C` |
| `rose/800` | `#9F1239` |
| `rose/900` | `#881337` |
| `rose/950` | `#4C0519` |

---

## 4. rdx/colors — Radix UI Color Scale (396)

Radix UI semantic color scale including alpha variants (black/*, white/*).

### gray

| Token | Value |
|---|---|
| `gray/1` | `#FCFCFC` |
| `gray/2` | `#F9F9F9` |
| `gray/3` | `#F0F0F0` |
| `gray/4` | `#E8E8E8` |
| `gray/5` | `#E0E0E0` |
| `gray/6` | `#E0E0E0` |
| `gray/7` | `#CECECE` |
| `gray/8` | `#BBBBBB` |
| `gray/9` | `#8D8D8D` |
| `gray/10` | `#838383` |
| `gray/11` | `#646464` |
| `gray/12` | `#202020` |

### mauve

| Token | Value |
|---|---|
| `mauve/1` | `#FDFCFD` |
| `mauve/2` | `#FAF9FB` |
| `mauve/3` | `#F2EFF3` |
| `mauve/4` | `#EAE7EC` |
| `mauve/5` | `#E3DFE6` |
| `mauve/6` | `#DBD8E0` |
| `mauve/7` | `#D0CDD7` |
| `mauve/8` | `#BCBAC7` |
| `mauve/9` | `#8E8C99` |
| `mauve/10` | `#84828E` |
| `mauve/11` | `#65636D` |
| `mauve/12` | `#211F26` |

### slate

| Token | Value |
|---|---|
| `slate/1` | `#FCFCFD` |
| `slate/2` | `#F9F9FB` |
| `slate/3` | `#F0F0F3` |
| `slate/4` | `#E8E8EC` |
| `slate/5` | `#E0E1E6` |
| `slate/6` | `#D9D9E0` |
| `slate/7` | `#CDCED6` |
| `slate/8` | `#B9BBC6` |
| `slate/9` | `#8B8D98` |
| `slate/10` | `#80838D` |
| `slate/11` | `#60646C` |
| `slate/12` | `#1C2024` |

### sage

| Token | Value |
|---|---|
| `sage/1` | `#FBFDFC` |
| `sage/2` | `#F7F9F8` |
| `sage/3` | `#EEEEFF` |
| `sage/4` | `#E6E9E8` |
| `sage/5` | `#DFE2E0` |
| `sage/6` | `#D7DAD9` |
| `sage/7` | `#CBCFCD` |
| `sage/8` | `#B8BCBA` |
| `sage/9` | `#868E8B` |
| `sage/10` | `#7C8481` |
| `sage/11` | `#5F6563` |
| `sage/12` | `#1A211E` |

### olive

| Token | Value |
|---|---|
| `olive/1` | `#FCFDFC` |
| `olive/2` | `#F8FAF8` |
| `olive/3` | `#EFF1EF` |
| `olive/4` | `#E7E9E7` |
| `olive/5` | `#DFE2DF` |
| `olive/6` | `#D7DAD7` |
| `olive/7` | `#CCCFCC` |
| `olive/8` | `#B9BCB8` |
| `olive/9` | `#898E87` |
| `olive/10` | `#7F847D` |
| `olive/11` | `#60655F` |
| `olive/12` | `#1D211C` |

### sand

| Token | Value |
|---|---|
| `sand/1` | `#FDFDFC` |
| `sand/2` | `#F9F9F8` |
| `sand/3` | `#F1F0EF` |
| `sand/4` | `#E9E8E6` |
| `sand/5` | `#E2E1DE` |
| `sand/6` | `#DAD9D6` |
| `sand/7` | `#CFCECA` |
| `sand/8` | `#BCBBB5` |
| `sand/9` | `#8D8D86` |
| `sand/10` | `#82827C` |
| `sand/11` | `#63635E` |
| `sand/12` | `#21201C` |

### tomato

| Token | Value |
|---|---|
| `tomato/1` | `#FFFCFC` |
| `tomato/2` | `#FFF8F7` |
| `tomato/3` | `#FEEBE7` |
| `tomato/4` | `#FFDCD3` |
| `tomato/5` | `#FFCDC2` |
| `tomato/6` | `#FDBDAF` |
| `tomato/7` | `#F5A898` |
| `tomato/8` | `#EC8E7B` |
| `tomato/9` | `#E54D2E` |
| `tomato/10` | `#DD4425` |
| `tomato/11` | `#D13415` |
| `tomato/12` | `#5C271F` |

### red

| Token | Value |
|---|---|
| `red/1` | `#FFFCFC` |
| `red/2` | `#FFF7F7` |
| `red/3` | `#FEEBEC` |
| `red/4` | `#FFDBDC` |
| `red/5` | `#FFCDCE` |
| `red/6` | `#FDBDBE` |
| `red/7` | `#F4A9AA` |
| `red/8` | `#EB8E90` |
| `red/9` | `#E5484D` |
| `red/10` | `#DC3E42` |
| `red/11` | `#CE2C31` |
| `red/12` | `#641723` |

### ruby

| Token | Value |
|---|---|
| `ruby/1` | `#FFFCFD` |
| `ruby/2` | `#FFF7F8` |
| `ruby/3` | `#FEEAED` |
| `ruby/4` | `#FFDCE1` |
| `ruby/5` | `#FFCED6` |
| `ruby/6` | `#F8BFC8` |
| `ruby/7` | `#EFACB8` |
| `ruby/8` | `#E592A3` |
| `ruby/9` | `#E54666` |
| `ruby/10` | `#DC3B5D` |
| `ruby/11` | `#CA244D` |
| `ruby/12` | `#64172B` |

### crimson

| Token | Value |
|---|---|
| `crimson/1` | `#FFFCFD` |
| `crimson/2` | `#FEF7F9` |
| `crimson/3` | `#FFE9F0` |
| `crimson/4` | `#FEDCE7` |
| `crimson/5` | `#FACEDD` |
| `crimson/6` | `#F3BED1` |
| `crimson/7` | `#EAACC3` |
| `crimson/8` | `#E093B2` |
| `crimson/9` | `#E93D82` |
| `crimson/10` | `#DF3478` |
| `crimson/11` | `#CB1D63` |
| `crimson/12` | `#621639` |

### pink

| Token | Value |
|---|---|
| `pink/1` | `#FFFCFE` |
| `pink/2` | `#FEF7FB` |
| `pink/3` | `#FEE9F5` |
| `pink/4` | `#FBDCEF` |
| `pink/5` | `#F6CEE7` |
| `pink/6` | `#EFBFDD` |
| `pink/7` | `#E7ACD0` |
| `pink/8` | `#DD93C2` |
| `pink/9` | `#D6409F` |
| `pink/10` | `#CF3897` |
| `pink/11` | `#C2298A` |
| `pink/12` | `#651249` |

### plum

| Token | Value |
|---|---|
| `plum/1` | `#FEFCFF` |
| `plum/2` | `#FDF7FD` |
| `plum/3` | `#FBEBFB` |
| `plum/4` | `#F7DEF8` |
| `plum/5` | `#F2D1F3` |
| `plum/6` | `#E9C2EC` |
| `plum/7` | `#DEADE3` |
| `plum/8` | `#CF91D8` |
| `plum/9` | `#AB4ABA` |
| `plum/10` | `#A144AF` |
| `plum/11` | `#953EA3` |
| `plum/12` | `#53195D` |

### purple

| Token | Value |
|---|---|
| `purple/1` | `#FEFCFE` |
| `purple/2` | `#FBF7FE` |
| `purple/3` | `#F7EDFE` |
| `purple/4` | `#F2E2FC` |
| `purple/5` | `#EAD5F9` |
| `purple/6` | `#E0C4F4` |
| `purple/7` | `#D1AFEC` |
| `purple/8` | `#BE93E4` |
| `purple/9` | `#8E4EC6` |
| `purple/10` | `#8347B9` |
| `purple/11` | `#8145B5` |
| `purple/12` | `#402060` |

### violet

| Token | Value |
|---|---|
| `violet/1` | `#FDFCFE` |
| `violet/2` | `#FAF8FF` |
| `violet/3` | `#F4F0FE` |
| `violet/4` | `#EBE4FF` |
| `violet/5` | `#E1D9FF` |
| `violet/6` | `#D4CAFE` |
| `violet/7` | `#C2B5F5` |
| `violet/8` | `#AA99EC` |
| `violet/9` | `#6E56CF` |
| `violet/10` | `#654DC4` |
| `violet/11` | `#6550B9` |
| `violet/12` | `#2F265F` |

### iris

| Token | Value |
|---|---|
| `iris/1` | `#FDFDFF` |
| `iris/2` | `#F8F8FF` |
| `iris/3` | `#F0F1FE` |
| `iris/4` | `#E6E7FF` |
| `iris/5` | `#DADCFF` |
| `iris/6` | `#CBCDFF` |
| `iris/7` | `#B8BAF8` |
| `iris/8` | `#9B9EF0` |
| `iris/9` | `#5B5BD6` |
| `iris/10` | `#5151CD` |
| `iris/11` | `#5753C6` |
| `iris/12` | `#272962` |

### indigo

| Token | Value |
|---|---|
| `indigo/1` | `#FDFDFE` |
| `indigo/2` | `#F7F9FF` |
| `indigo/3` | `#EDF2FE` |
| `indigo/4` | `#E1E9FF` |
| `indigo/5` | `#D2DEFF` |
| `indigo/6` | `#C1D0FF` |
| `indigo/7` | `#ABBDF9` |
| `indigo/8` | `#8DA4EF` |
| `indigo/9` | `#3E63DD` |
| `indigo/10` | `#3358D4` |
| `indigo/11` | `#3A5BC7` |
| `indigo/12` | `#1F2D5C` |

### blue

| Token | Value |
|---|---|
| `blue/1` | `#FBFDFF` |
| `blue/2` | `#F4FAFF` |
| `blue/3` | `#E6F4FE` |
| `blue/4` | `#D5EFFF` |
| `blue/5` | `#C2E5FF` |
| `blue/6` | `#ACD8FC` |
| `blue/7` | `#8EC8F6` |
| `blue/8` | `#5EB1EF` |
| `blue/9` | `#0090FF` |
| `blue/10` | `#0588F0` |
| `blue/11` | `#0D74CE` |
| `blue/12` | `#113264` |

### cyan

| Token | Value |
|---|---|
| `cyan/1` | `#FAFDFE` |
| `cyan/2` | `#F2FAFB` |
| `cyan/3` | `#DEF7F9` |
| `cyan/4` | `#CAF1F6` |
| `cyan/5` | `#B5E9F0` |
| `cyan/6` | `#9DDDE7` |
| `cyan/7` | `#7DCEDC` |
| `cyan/8` | `#3DB9CF` |
| `cyan/9` | `#00A2C7` |
| `cyan/10` | `#0797B9` |
| `cyan/11` | `#107D98` |
| `cyan/12` | `#0D3C48` |

### teal

| Token | Value |
|---|---|
| `teal/1` | `#FAFEFD` |
| `teal/2` | `#F3FBF9` |
| `teal/3` | `#E0F8F3` |
| `teal/4` | `#CCF3EA` |
| `teal/5` | `#B8EAE0` |
| `teal/6` | `#A1DED2` |
| `teal/7` | `#83CDC1` |
| `teal/8` | `#53B9AB` |
| `teal/9` | `#12A594` |
| `teal/10` | `#0D9B8A` |
| `teal/11` | `#008573` |
| `teal/12` | `#0D3D38` |

### jade

| Token | Value |
|---|---|
| `jade/1` | `#FBFEFD` |
| `jade/2` | `#F4FBF7` |
| `jade/3` | `#E6F7ED` |
| `jade/4` | `#D6F1E3` |
| `jade/5` | `#C3E9D7` |
| `jade/6` | `#ACDEC8` |
| `jade/7` | `#8BCEB6` |
| `jade/8` | `#56BA9F` |
| `jade/9` | `#29A383` |
| `jade/10` | `#26997B` |
| `jade/11` | `#208368` |
| `jade/12` | `#1D3B31` |

### green

| Token | Value |
|---|---|
| `green/1` | `#FBFEFC` |
| `green/2` | `#F4FBF6` |
| `green/3` | `#E6F6EB` |
| `green/4` | `#D6F1DF` |
| `green/5` | `#C4E8D1` |
| `green/6` | `#ADDDC0` |
| `green/7` | `#8ECEAA` |
| `green/8` | `#5BB98B` |
| `green/9` | `#30A46C` |
| `green/10` | `#2B9A66` |
| `green/11` | `#218358` |
| `green/12` | `#193B2D` |

### grass

| Token | Value |
|---|---|
| `grass/1` | `#FBFEFB` |
| `grass/2` | `#F5FBF5` |
| `grass/3` | `#E9F6E9` |
| `grass/4` | `#DAF1DB` |
| `grass/5` | `#C9E8CA` |
| `grass/6` | `#B2DDB5` |
| `grass/7` | `#94CE9A` |
| `grass/8` | `#65BA74` |
| `grass/9` | `#46A758` |
| `grass/10` | `#3E9B4F` |
| `grass/11` | `#2A7E3B` |
| `grass/12` | `#203C25` |

### bronze

| Token | Value |
|---|---|
| `bronze/1` | `#FDFCFC` |
| `bronze/2` | `#FDF7F5` |
| `bronze/3` | `#F6EDEA` |
| `bronze/4` | `#EFE4DF` |
| `bronze/5` | `#E7D9D3` |
| `bronze/6` | `#DFCDC5` |
| `bronze/7` | `#D3BCB3` |
| `bronze/8` | `#C2A499` |
| `bronze/9` | `#A18072` |
| `bronze/10` | `#957468` |
| `bronze/11` | `#7D5E54` |
| `bronze/12` | `#43302B` |

### gold

| Token | Value |
|---|---|
| `gold/1` | `#FDFDFC` |
| `gold/2` | `#FAF9F2` |
| `gold/3` | `#F2F0E7` |
| `gold/4` | `#EAE6DB` |
| `gold/5` | `#E1DCCF` |
| `gold/6` | `#D8D0BF` |
| `gold/7` | `#CBC0AA` |
| `gold/8` | `#B9A88D` |
| `gold/9` | `#978365` |
| `gold/10` | `#8C7A5E` |
| `gold/11` | `#71624B` |
| `gold/12` | `#3B352B` |

### brown

| Token | Value |
|---|---|
| `brown/1` | `#FEFDFC` |
| `brown/2` | `#FCF9F6` |
| `brown/3` | `#F6EEE7` |
| `brown/4` | `#F0E4D9` |
| `brown/5` | `#EBDACA` |
| `brown/6` | `#E4CDB7` |
| `brown/7` | `#DCBC9F` |
| `brown/8` | `#CEA37E` |
| `brown/9` | `#AD7F58` |
| `brown/10` | `#A07553` |
| `brown/11` | `#815E46` |
| `brown/12` | `#3E332E` |

### orange

| Token | Value |
|---|---|
| `orange/1` | `#FEFCFB` |
| `orange/2` | `#FFF7ED` |
| `orange/3` | `#FFEFD6` |
| `orange/4` | `#FFDFB5` |
| `orange/5` | `#FFD19A` |
| `orange/6` | `#FFC182` |
| `orange/7` | `#F5AE73` |
| `orange/8` | `#EC9455` |
| `orange/9` | `#F76B15` |
| `orange/10` | `#EF5F00` |
| `orange/11` | `#CC4E00` |
| `orange/12` | `#582D1D` |

### amber

| Token | Value |
|---|---|
| `amber/1` | `#FEFDFB` |
| `amber/2` | `#FEFBE9` |
| `amber/3` | `#FFF7C2` |
| `amber/4` | `#FFEE9C` |
| `amber/5` | `#FBE577` |
| `amber/6` | `#F3D673` |
| `amber/7` | `#E9C162` |
| `amber/8` | `#E2A336` |
| `amber/9` | `#FFC53D` |
| `amber/10` | `#FFBA18` |
| `amber/11` | `#AB6400` |
| `amber/12` | `#4F3422` |

### yellow

| Token | Value |
|---|---|
| `yellow/1` | `#FDFDF9` |
| `yellow/2` | `#FEFCE9` |
| `yellow/3` | `#FFFAB8` |
| `yellow/4` | `#FFF394` |
| `yellow/5` | `#FFE770` |
| `yellow/6` | `#F3D768` |
| `yellow/7` | `#E4C767` |
| `yellow/8` | `#D5AE39` |
| `yellow/9` | `#FFE629` |
| `yellow/10` | `#FFDC00` |
| `yellow/11` | `#9E6C00` |
| `yellow/12` | `#473B1F` |

### lime

| Token | Value |
|---|---|
| `lime/1` | `#FCFDFA` |
| `lime/2` | `#F8FAF3` |
| `lime/3` | `#EEF6D6` |
| `lime/4` | `#E2F0BD` |
| `lime/5` | `#D3E7A6` |
| `lime/6` | `#C2DA91` |
| `lime/7` | `#ABC978` |
| `lime/8` | `#8DB654` |
| `lime/9` | `#BDEE63` |
| `lime/10` | `#B0E64C` |
| `lime/11` | `#5C7C2F` |
| `lime/12` | `#37401C` |

### mint

| Token | Value |
|---|---|
| `mint/1` | `#F9FEFD` |
| `mint/2` | `#F2FBF9` |
| `mint/3` | `#DDF9F2` |
| `mint/4` | `#C8F4E9` |
| `mint/5` | `#B3ECDE` |
| `mint/6` | `#9CE0D0` |
| `mint/7` | `#7ECFBD` |
| `mint/8` | `#4CBBA5` |
| `mint/9` | `#86EAD4` |
| `mint/10` | `#7DE0CB` |
| `mint/11` | `#027864` |
| `mint/12` | `#16433C` |

### sky

| Token | Value |
|---|---|
| `sky/1` | `#F9FEFF` |
| `sky/2` | `#F1FAFD` |
| `sky/3` | `#E1F6FD` |
| `sky/4` | `#D1F0FA` |
| `sky/5` | `#BEE7F5` |
| `sky/6` | `#A9DAED` |
| `sky/7` | `#8DCAE3` |
| `sky/8` | `#60B3D7` |
| `sky/9` | `#7CE2FE` |
| `sky/10` | `#74DAF8` |
| `sky/11` | `#00749E` |
| `sky/12` | `#1D3E56` |

### black

| Token | Value |
|---|---|
| `black/1` | `#000000` (5% α) |
| `black/2` | `#000000` (10% α) |
| `black/3` | `#000000` (15% α) |
| `black/4` | `#000000` (20% α) |
| `black/5` | `#000000` (30% α) |
| `black/6` | `#000000` (40% α) |
| `black/7` | `#000000` (50% α) |
| `black/8` | `#000000` (60% α) |
| `black/9` | `#000000` (70% α) |
| `black/10` | `#000000` (80% α) |
| `black/11` | `#000000` (90% α) |
| `black/12` | `#000000` (95% α) |

### white

| Token | Value |
|---|---|
| `white/1` | `#FFFFFF` (5% α) |
| `white/2` | `#FFFFFF` (10% α) |
| `white/3` | `#FFFFFF` (15% α) |
| `white/4` | `#FFFFFF` (20% α) |
| `white/5` | `#FFFFFF` (30% α) |
| `white/6` | `#FFFFFF` (40% α) |
| `white/7` | `#FFFFFF` (50% α) |
| `white/8` | `#FFFFFF` (60% α) |
| `white/9` | `#FFFFFF` (70% α) |
| `white/10` | `#FFFFFF` (80% α) |
| `white/11` | `#FFFFFF` (90% α) |
| `white/12` | `#FFFFFF` (95% α) |

---

## 5. font — Typography Tokens (45)

### Font Family

| Token | Value |
|---|---|
| `family/sans` | `Inter` |
| `family/mono` | `Geist Mono` |

### Font Size

| Token | Value |
|---|---|
| `size/xs` | `12` |
| `size/sm` | `14` |
| `size/base` | `16` |
| `size/lg` | `18` |
| `size/xl` | `20` |
| `size/2xl` | `24` |
| `size/3xl` | `30` |
| `size/4xl` | `36` |
| `size/5xl` | `48` |
| `size/6xl` | `60` |
| `size/7xl` | `72` |
| `size/8xl` | `96` |
| `size/9xl` | `128` |

### Font Weight

| Token | Value |
|---|---|
| `weight/thin` | `100` |
| `weight/extralight` | `200` |
| `weight/light` | `300` |
| `weight/normal` | `400` |
| `weight/medium` | `500` |
| `weight/semibold` | `600` |
| `weight/bold` | `700` |
| `weight/extrabold` | `800` |
| `weight/black` | `900` |

### Line Height

| Token | Value |
|---|---|
| `leading/3` | `12` |
| `leading/4` | `16` |
| `leading/5` | `20` |
| `leading/6` | `24` |
| `leading/7` | `28` |
| `leading/8` | `32` |
| `leading/9` | `36` |
| `leading/10` | `40` |
| `leading/12` | `48` |
| `leading/15` | `60` |
| `leading/18` | `72` |
| `leading/24` | `96` |
| `leading/32` | `128` |

### Letter Spacing

| Token | Value |
|---|---|
| `tracking/tighter` | `-0.8` |
| `tracking/tigh` | `-0.4` |
| `tracking/normal` | `0` |
| `tracking/wide` | `0.4` |
| `tracking/wider` | `0.8` |
| `tracking/widest` | `1.6` |

### Font Style

| Token | Value |
|---|---|
| `style/italic` | `italic` |
| `style/not-italic` | `normal` |

---

## 6. tokens — Numeric Scale (87)

Base numeric scale referenced by spacing, sizing, and typography tokens.

| Token | Value |
|---|---|
| `-0,8` | `-0.8` |
| `-0,4` | `-0.4` |
| `0` | `0` |
| `0,4` | `0.4` |
| `0,5` | `0.5` |
| `0,75` | `0.75` |
| `0,8` | `0.8` |
| `1` | `1` |
| `1,25` | `1.25` |
| `1,5` | `1.5` |
| `1,6` | `1.6` |
| `1,75` | `1.75` |
| `2` | `2` |
| `2,25` | `2.25` |
| `2,5` | `2.5` |
| `2,75` | `2.75` |
| `3` | `3` |
| `4` | `4` |
| `5` | `5` |
| `6` | `6` |
| `8` | `8` |
| `10` | `10` |
| `12` | `12` |
| `14` | `14` |
| `15` | `15` |
| `16` | `16` |
| `18` | `18` |
| `20` | `20` |
| `24` | `24` |
| `25` | `25` |
| `28` | `28` |
| `30` | `30` |
| `32` | `32` |
| `35` | `35` |
| `36` | `36` |
| `40` | `40` |
| `44` | `44` |
| `45` | `45` |
| `48` | `48` |
| `50` | `50` |
| `55` | `55` |
| `56` | `56` |
| `60` | `60` |
| `64` | `64` |
| `65` | `65` |
| `70` | `70` |
| `72` | `72` |
| `75` | `75` |
| `80` | `80` |
| `85` | `85` |
| `90` | `90` |
| `95` | `95` |
| `96` | `96` |
| `100` | `100` |
| `112` | `112` |
| `128` | `128` |
| `144` | `144` |
| `160` | `160` |
| `176` | `176` |
| `192` | `192` |
| `200` | `200` |
| `208` | `208` |
| `224` | `224` |
| `240` | `240` |
| `256` | `256` |
| `288` | `288` |
| `300` | `300` |
| `320` | `320` |
| `384` | `384` |
| `400` | `400` |
| `448` | `448` |
| `500` | `500` |
| `512` | `512` |
| `576` | `576` |
| `600` | `600` |
| `640` | `640` |
| `672` | `672` |
| `700` | `700` |
| `768` | `768` |
| `800` | `800` |
| `896` | `896` |
| `900` | `900` |
| `1024` | `1024` |
| `1152` | `1152` |
| `1280` | `1280` |
| `1536` | `1536` |
| `9999` | `9999` |

---

## 7. border-radius — All Variants (150)

Base scale: none=0, xs=2, sm=4, md=6, lg=8, xl=12, 2xl=16, 3xl=24, 4xl=32, full=9999 (px)
Covers: `rounded-*`, `rounded-s-*`, `rounded-e-*`, `rounded-t-*`, `rounded-r-*`, `rounded-b-*`, `rounded-l-*`, `rounded-ss-*`, `rounded-se-*`, `rounded-ee-*`, `rounded-es-*`, `rounded-tl-*`, `rounded-tr-*`, `rounded-br-*`, `rounded-bl-*`

| Token | Value |
|---|---|
| `rounded-xs` | `2px` |
| `rounded-sm` | `4px` |
| `rounded-md` | `6px` |
| `rounded-lg` | `8px` |
| `rounded-xl` | `12px` |
| `rounded-2xl` | `16px` |
| `rounded-3xl` | `24px` |
| `rounded-4xl` | `32px` |
| `rounded-none` | `0px` |
| `rounded-full` | `9999px` |
| `rounded-s-xs` | `2px` |
| `rounded-s-sm` | `4px` |
| `rounded-s-md` | `6px` |
| `rounded-s-lg` | `8px` |
| `rounded-s-xl` | `12px` |
| `rounded-s-2xl` | `16px` |
| `rounded-s-3xl` | `24px` |
| `rounded-s-4xl` | `32px` |
| `rounded-s-none` | `0px` |
| `rounded-s-full` | `9999px` |
| `rounded-e-xs` | `2px` |
| `rounded-e-sm` | `4px` |
| `rounded-e-md` | `6px` |
| `rounded-e-lg` | `8px` |
| `rounded-e-xl` | `12px` |
| `rounded-e-2xl` | `16px` |
| `rounded-e-3xl` | `24px` |
| `rounded-e-4xl` | `32px` |
| `rounded-e-none` | `0px` |
| `rounded-e-full` | `9999px` |
| `rounded-t-xs` | `2px` |
| `rounded-t-sm` | `4px` |
| `rounded-t-md` | `6px` |
| `rounded-t-lg` | `8px` |
| `rounded-t-xl` | `12px` |
| `rounded-t-2xl` | `16px` |
| `rounded-t-3xl` | `24px` |
| `rounded-t-4xl` | `32px` |
| `rounded-t-none` | `0px` |
| `rounded-t-full` | `9999px` |
| `rounded-r-xs` | `2px` |
| `rounded-r-sm` | `4px` |
| `rounded-r-md` | `6px` |
| `rounded-r-lg` | `8px` |
| `rounded-r-xl` | `12px` |
| `rounded-r-2xl` | `16px` |
| `rounded-r-3xl` | `24px` |
| `rounded-r-4xl` | `32px` |
| `rounded-r-none` | `0px` |
| `rounded-r-full` | `9999px` |
| `rounded-b-xs` | `2px` |
| `rounded-b-sm` | `4px` |
| `rounded-b-md` | `6px` |
| `rounded-b-lg` | `8px` |
| `rounded-b-xl` | `12px` |
| `rounded-b-2xl` | `16px` |
| `rounded-b-3xl` | `24px` |
| `rounded-b-4xl` | `32px` |
| `rounded-b-none` | `0px` |
| `rounded-b-full` | `9999px` |
| `rounded-1-xs` | `2px` |
| `rounded-1-sm` | `4px` |
| `rounded-1-md` | `6px` |
| `rounded-1-lg` | `8px` |
| `rounded-1-xl` | `12px` |
| `rounded-1-2xl` | `16px` |
| `rounded-1-3xl` | `24px` |
| `rounded-1-4xl` | `32px` |
| `rounded-1-none` | `0px` |
| `rounded-1-full` | `9999px` |
| `rounded-ss-xs` | `2px` |
| `rounded-ss-sm` | `4px` |
| `rounded-ss-md` | `6px` |
| `rounded-ss-lg` | `8px` |
| `rounded-ss-xl` | `12px` |
| `rounded-ss-2xl` | `16px` |
| `rounded-ss-3xl` | `24px` |
| `rounded-ss-4xl` | `32px` |
| `rounded-ss-none` | `0px` |
| `rounded-ss-full` | `9999px` |
| `rounded-se-xs` | `2px` |
| `rounded-se-sm` | `4px` |
| `rounded-se-md` | `6px` |
| `rounded-se-lg` | `8px` |
| `rounded-se-xl` | `12px` |
| `rounded-se-2xl` | `16px` |
| `rounded-se-3xl` | `24px` |
| `rounded-se-4xl` | `32px` |
| `rounded-se-none` | `0px` |
| `rounded-se-full` | `9999px` |
| `rounded-ee-xs` | `2px` |
| `rounded-ee-sm` | `4px` |
| `rounded-ee-md` | `6px` |
| `rounded-ee-lg` | `8px` |
| `rounded-ee-xl` | `12px` |
| `rounded-ee-2xl` | `16px` |
| `rounded-ee-3xl` | `24px` |
| `rounded-ee-4xl` | `32px` |
| `rounded-ee-none` | `0px` |
| `rounded-ee-full` | `9999px` |
| `rounded-es-xs` | `2px` |
| `rounded-es-sm` | `4px` |
| `rounded-es-md` | `6px` |
| `rounded-es-lg` | `8px` |
| `rounded-es-xl` | `12px` |
| `rounded-es-2xl` | `16px` |
| `rounded-es-3xl` | `24px` |
| `rounded-es-4xl` | `32px` |
| `rounded-es-none` | `0px` |
| `rounded-es-full` | `9999px` |
| `rounded-tl-xs` | `2px` |
| `rounded-tl-sm` | `4px` |
| `rounded-tl-md` | `6px` |
| `rounded-tl-lg` | `8px` |
| `rounded-tl-xl` | `12px` |
| `rounded-tl-2xl` | `16px` |
| `rounded-tl-3xl` | `24px` |
| `rounded-tl-4xl` | `32px` |
| `rounded-tl-none` | `0px` |
| `rounded-tl-full` | `9999px` |
| `rounded-tr-xs` | `2px` |
| `rounded-tr-sm` | `4px` |
| `rounded-tr-md` | `6px` |
| `rounded-tr-lg` | `8px` |
| `rounded-tr-xl` | `12px` |
| `rounded-tr-2xl` | `16px` |
| `rounded-tr-3xl` | `24px` |
| `rounded-tr-4xl` | `32px` |
| `rounded-tr-none` | `0px` |
| `rounded-tr-full` | `9999px` |
| `rounded-br-xs` | `2px` |
| `rounded-br-sm` | `4px` |
| `rounded-br-md` | `6px` |
| `rounded-br-lg` | `8px` |
| `rounded-br-xl` | `12px` |
| `rounded-br-2xl` | `16px` |
| `rounded-br-3xl` | `24px` |
| `rounded-br-4xl` | `32px` |
| `rounded-br-none` | `0px` |
| `rounded-br-full` | `9999px` |
| `rounded-bl-xs` | `2px` |
| `rounded-bl-sm` | `4px` |
| `rounded-bl-md` | `6px` |
| `rounded-bl-lg` | `8px` |
| `rounded-bl-xl` | `12px` |
| `rounded-bl-2xl` | `16px` |
| `rounded-bl-3xl` | `24px` |
| `rounded-bl-4xl` | `32px` |
| `rounded-bl-none` | `0px` |
| `rounded-bl-full` | `9999px` |

---

## 8. border-width — All Variants (45)

Covers: `border-*`, `border-x-*`, `border-y-*`, `border-s-*`, `border-e-*`, `border-t-*`, `border-r-*`, `border-b-*`, `border-l-*`

| Token | Value |
|---|---|
| `border-0` | `0px` |
| `border` | `1px` |
| `border-2` | `2px` |
| `border-4` | `4px` |
| `border-8` | `8px` |
| `border-x-0` | `0px` |
| `border-x` | `1px` |
| `border-x-2` | `2px` |
| `border-x-4` | `4px` |
| `border-x-8` | `8px` |
| `border-y-0` | `0px` |
| `border-y` | `1px` |
| `border-y-2` | `2px` |
| `border-y-4` | `4px` |
| `border-y-8` | `8px` |
| `border-s-0` | `0px` |
| `border-s` | `1px` |
| `border-s-2` | `2px` |
| `border-s-4` | `4px` |
| `border-s-8` | `8px` |
| `border-e-0` | `0px` |
| `border-e` | `1px` |
| `border-e-2` | `2px` |
| `border-e-4` | `4px` |
| `border-e-8` | `8px` |
| `border-t-0` | `0px` |
| `border-t` | `1px` |
| `border-t-2` | `2px` |
| `border-t-4` | `4px` |
| `border-t-8` | `8px` |
| `border-r-0` | `0px` |
| `border-r` | `1px` |
| `border-r-2` | `2px` |
| `border-r-4` | `4px` |
| `border-r-8` | `8px` |
| `border-b-0` | `0px` |
| `border-b` | `1px` |
| `border-b-2` | `2px` |
| `border-b-4` | `4px` |
| `border-b-8` | `8px` |
| `border-l-0` | `0px` |
| `border-l` | `1px` |
| `border-l-2` | `2px` |
| `border-l-4` | `4px` |
| `border-l-8` | `8px` |

---

## 9. gap — All Variants (102)

Covers: `gap-*`, `gap-x-*`, `gap-y-*` (4px base grid)

| Token | Value |
|---|---|
| `gap-0` | `0px` |
| `gap-x-0` | `0px` |
| `gap-y-0` | `0px` |
| `gap-0,5` | `2px` |
| `gap-x-0,5` | `2px` |
| `gap-y-0,5` | `2px` |
| `gap-1` | `4px` |
| `gap-x-1` | `4px` |
| `gap-y-1` | `4px` |
| `gap-1,5` | `6px` |
| `gap-x-1,5` | `6px` |
| `gap-y-1,5` | `6px` |
| `gap-2` | `8px` |
| `gap-x-2` | `8px` |
| `gap-y-2` | `8px` |
| `gap-2,5` | `10px` |
| `gap-x-2,5` | `10px` |
| `gap-y-2,5` | `10px` |
| `gap-3` | `12px` |
| `gap-x-3` | `12px` |
| `gap-y-3` | `12px` |
| `gap-3,5` | `14px` |
| `gap-x-3,5` | `14px` |
| `gap-y-3,5` | `14px` |
| `gap-4` | `16px` |
| `gap-x-4` | `16px` |
| `gap-y-4` | `16px` |
| `gap-5` | `20px` |
| `gap-x-5` | `20px` |
| `gap-y-5` | `20px` |
| `gap-6` | `24px` |
| `gap-x-6` | `24px` |
| `gap-y-6` | `24px` |
| `gap-7` | `28px` |
| `gap-x-7` | `28px` |
| `gap-y-7` | `28px` |
| `gap-8` | `32px` |
| `gap-x-8` | `32px` |
| `gap-y-8` | `32px` |
| `gap-9` | `36px` |
| `gap-x-9` | `36px` |
| `gap-y-9` | `36px` |
| `gap-10` | `40px` |
| `gap-x-10` | `40px` |
| `gap-y-10` | `40px` |
| `gap-11` | `44px` |
| `gap-x-11` | `44px` |
| `gap-y-11` | `44px` |
| `gap-12` | `48px` |
| `gap-x-12` | `48px` |
| `gap-y-12` | `48px` |
| `gap-14` | `56px` |
| `gap-x-14` | `56px` |
| `gap-y-14` | `56px` |
| `gap-16` | `64px` |
| `gap-x-16` | `64px` |
| `gap-y-16` | `64px` |
| `gap-20` | `80px` |
| `gap-x-20` | `80px` |
| `gap-y-20` | `80px` |
| `gap-24` | `96px` |
| `gap-x-24` | `96px` |
| `gap-y-24` | `96px` |
| `gap-28` | `112px` |
| `gap-x-28` | `112px` |
| `gap-y-28` | `112px` |
| `gap-32` | `128px` |
| `gap-x-32` | `128px` |
| `gap-y-32` | `128px` |
| `gap-36` | `144px` |
| `gap-x-36` | `144px` |
| `gap-y-36` | `144px` |
| `gap-40` | `160px` |
| `gap-x-40` | `160px` |
| `gap-y-40` | `160px` |
| `gap-44` | `176px` |
| `gap-x-44` | `176px` |
| `gap-y-44` | `176px` |
| `gap-48` | `192px` |
| `gap-x-48` | `192px` |
| `gap-y-48` | `192px` |
| `gap-52` | `208px` |
| `gap-x-52` | `208px` |
| `gap-y-52` | `208px` |
| `gap-56` | `224px` |
| `gap-x-56` | `224px` |
| `gap-y-56` | `224px` |
| `gap-60` | `240px` |
| `gap-x-60` | `240px` |
| `gap-y-60` | `240px` |
| `gap-64` | `256px` |
| `gap-x-64` | `256px` |
| `gap-y-64` | `256px` |
| `gap-72` | `288px` |
| `gap-x-72` | `288px` |
| `gap-y-72` | `288px` |
| `gap-80` | `320px` |
| `gap-x-80` | `320px` |
| `gap-y-80` | `320px` |
| `gap-96` | `384px` |
| `gap-x-96` | `384px` |
| `gap-y-96` | `384px` |

---

## 10. space — All Variants (68)

Covers: `space-x-*`, `space-y-*` (4px base grid)

| Token | Value |
|---|---|
| `space-x-0` | `0px` |
| `space-y-0` | `0px` |
| `space-x-0,5` | `2px` |
| `space-y-0,5` | `2px` |
| `space-x-1` | `4px` |
| `space-y-1` | `4px` |
| `space-x-1,5` | `6px` |
| `space-y-1,5` | `6px` |
| `space-x-2` | `8px` |
| `space-y-2` | `8px` |
| `space-x-2,5` | `10px` |
| `space-y-2,5` | `10px` |
| `space-x-3` | `12px` |
| `space-y-3` | `12px` |
| `space-x-3,5` | `14px` |
| `space-y-3,5` | `14px` |
| `space-x-4` | `16px` |
| `space-y-4` | `16px` |
| `space-x-5` | `20px` |
| `space-y-5` | `20px` |
| `space-x-6` | `24px` |
| `space-y-6` | `24px` |
| `space-x-7` | `28px` |
| `space-y-7` | `28px` |
| `space-x-8` | `32px` |
| `space-y-8` | `32px` |
| `space-x-9` | `36px` |
| `space-y-9` | `36px` |
| `space-x-10` | `40px` |
| `space-y-10` | `40px` |
| `space-x-11` | `44px` |
| `space-y-11` | `44px` |
| `space-x-12` | `48px` |
| `space-y-12` | `48px` |
| `space-x-14` | `56px` |
| `space-y-14` | `56px` |
| `space-x-16` | `64px` |
| `space-y-16` | `64px` |
| `space-x-20` | `80px` |
| `space-y-20` | `80px` |
| `space-x-24` | `96px` |
| `space-y-24` | `96px` |
| `space-x-28` | `112px` |
| `space-y-28` | `112px` |
| `space-x-32` | `128px` |
| `space-y-32` | `128px` |
| `space-x-36` | `144px` |
| `space-y-36` | `144px` |
| `space-x-40` | `160px` |
| `space-y-40` | `160px` |
| `space-x-44` | `176px` |
| `space-y-44` | `176px` |
| `space-x-48` | `192px` |
| `space-y-48` | `192px` |
| `space-x-52` | `208px` |
| `space-y-52` | `208px` |
| `space-x-56` | `224px` |
| `space-y-56` | `224px` |
| `space-x-60` | `240px` |
| `space-y-60` | `240px` |
| `space-x-64` | `256px` |
| `space-y-64` | `256px` |
| `space-x-72` | `288px` |
| `space-y-72` | `288px` |
| `space-x-80` | `320px` |
| `space-y-80` | `320px` |
| `space-x-96` | `384px` |
| `space-y-96` | `384px` |

---

## 11. padding — All Variants (245)

Covers: `p-*`, `px-*`, `py-*`, `pt-*`, `pr-*`, `pb-*`, `pl-*` (4px base grid)

| Token | Value |
|---|---|
| `p-0` | `0px` |
| `px-0` | `0px` |
| `py-0` | `0px` |
| `pr-0` | `0px` |
| `pl-0` | `0px` |
| `pt-0` | `0px` |
| `pb-0` | `0px` |
| `p-px` | `1px` |
| `px-px` | `1px` |
| `py-px` | `1px` |
| `pr-px` | `1px` |
| `pl-px` | `1px` |
| `pt-px` | `1px` |
| `pb-px` | `1px` |
| `p-0,5` | `2px` |
| `px-0,5` | `2px` |
| `py-0,5` | `2px` |
| `pr-0,5` | `2px` |
| `pl-0,5` | `2px` |
| `pt-0,5` | `2px` |
| `pb-0,5` | `2px` |
| `p-1` | `4px` |
| `px-1` | `4px` |
| `py-1` | `4px` |
| `pr-1` | `4px` |
| `pl-1` | `4px` |
| `pt-1` | `4px` |
| `pb-1` | `4px` |
| `p-1,5` | `6px` |
| `px-1,5` | `6px` |
| `py-1,5` | `6px` |
| `pr-1,5` | `6px` |
| `pl-1,5` | `6px` |
| `pt-1,5` | `6px` |
| `pb-1,5` | `6px` |
| `p-2` | `8px` |
| `px-2` | `8px` |
| `py-2` | `8px` |
| `pr-2` | `8px` |
| `pl-2` | `8px` |
| `pt-2` | `8px` |
| `pb-2` | `8px` |
| `p-2,5` | `10px` |
| `px-2,5` | `10px` |
| `py-2,5` | `10px` |
| `pr-2,5` | `10px` |
| `pl-2,5` | `10px` |
| `pt-2,5` | `10px` |
| `pb-2,5` | `10px` |
| `p-3` | `12px` |
| `px-3` | `12px` |
| `py-3` | `12px` |
| `pr-3` | `12px` |
| `pl-3` | `12px` |
| `pt-3` | `12px` |
| `pb-3` | `12px` |
| `p-3,5` | `14px` |
| `px-3,5` | `14px` |
| `py-3,5` | `14px` |
| `pr-3,5` | `14px` |
| `pl-3,5` | `14px` |
| `pt-3,5` | `14px` |
| `pb-3,5` | `14px` |
| `p-4` | `16px` |
| `px-4` | `16px` |
| `py-4` | `16px` |
| `pr-4` | `16px` |
| `pl-4` | `16px` |
| `pt-4` | `16px` |
| `pb-4` | `16px` |
| `p-5` | `20px` |
| `px-5` | `20px` |
| `py-5` | `20px` |
| `pr-5` | `20px` |
| `pl-5` | `20px` |
| `pt-5` | `20px` |
| `pb-5` | `20px` |
| `p-6` | `24px` |
| `px-6` | `24px` |
| `py-6` | `24px` |
| `pr-6` | `24px` |
| `pl-6` | `24px` |
| `pt-6` | `24px` |
| `pb-6` | `24px` |
| `p-7` | `28px` |
| `px-7` | `28px` |
| `py-7` | `28px` |
| `pr-7` | `28px` |
| `pl-7` | `28px` |
| `pt-7` | `28px` |
| `pb-7` | `28px` |
| `p-8` | `32px` |
| `px-8` | `32px` |
| `py-8` | `32px` |
| `pr-8` | `32px` |
| `pl-8` | `32px` |
| `pt-8` | `32px` |
| `pb-8` | `32px` |
| `p-9` | `36px` |
| `px-9` | `36px` |
| `py-9` | `36px` |
| `pr-9` | `36px` |
| `pl-9` | `36px` |
| `pt-9` | `36px` |
| `pb-9` | `36px` |
| `p-10` | `40px` |
| `px-10` | `40px` |
| `py-10` | `40px` |
| `pr-10` | `40px` |
| `pl-10` | `40px` |
| `pt-10` | `40px` |
| `pb-10` | `40px` |
| `p-11` | `44px` |
| `px-11` | `44px` |
| `py-11` | `44px` |
| `pr-11` | `44px` |
| `pl-11` | `44px` |
| `pt-11` | `44px` |
| `pb-11` | `44px` |
| `p-12` | `48px` |
| `px-12` | `48px` |
| `py-12` | `48px` |
| `pr-12` | `48px` |
| `pl-12` | `48px` |
| `pt-12` | `48px` |
| `pb-12` | `48px` |
| `p-14` | `56px` |
| `px-14` | `56px` |
| `py-14` | `56px` |
| `pr-14` | `56px` |
| `pl-14` | `56px` |
| `pt-14` | `56px` |
| `pb-14` | `56px` |
| `p-16` | `64px` |
| `px-16` | `64px` |
| `py-16` | `64px` |
| `pr-16` | `64px` |
| `pl-16` | `64px` |
| `pt-16` | `64px` |
| `pb-16` | `64px` |
| `p-20` | `80px` |
| `px-20` | `80px` |
| `py-20` | `80px` |
| `pr-20` | `80px` |
| `pl-20` | `80px` |
| `pt-20` | `80px` |
| `pb-20` | `80px` |
| `p-24` | `96px` |
| `px-24` | `96px` |
| `py-24` | `96px` |
| `pr-24` | `96px` |
| `pl-24` | `96px` |
| `pt-24` | `96px` |
| `pb-24` | `96px` |
| `p-28` | `112px` |
| `px-28` | `112px` |
| `py-28` | `112px` |
| `pr-28` | `112px` |
| `pl-28` | `112px` |
| `pt-28` | `112px` |
| `pb-28` | `112px` |
| `p-32` | `128px` |
| `px-32` | `128px` |
| `py-32` | `128px` |
| `pr-32` | `128px` |
| `pl-32` | `128px` |
| `pt-32` | `128px` |
| `pb-32` | `128px` |
| `p-36` | `144px` |
| `px-36` | `144px` |
| `py-36` | `144px` |
| `pr-36` | `144px` |
| `pl-36` | `144px` |
| `pt-36` | `144px` |
| `pb-36` | `144px` |
| `p-40` | `160px` |
| `px-40` | `160px` |
| `py-40` | `160px` |
| `pr-40` | `160px` |
| `pl-40` | `160px` |
| `pt-40` | `160px` |
| `pb-40` | `160px` |
| `p-44` | `176px` |
| `px-44` | `176px` |
| `py-44` | `176px` |
| `pr-44` | `176px` |
| `pl-44` | `176px` |
| `pt-44` | `176px` |
| `pb-44` | `176px` |
| `p-48` | `192px` |
| `px-48` | `192px` |
| `py-48` | `192px` |
| `pr-48` | `192px` |
| `pl-48` | `192px` |
| `pt-48` | `192px` |
| `pb-48` | `192px` |
| `p-52` | `208px` |
| `px-52` | `208px` |
| `py-52` | `208px` |
| `pr-52` | `208px` |
| `pl-52` | `208px` |
| `pt-52` | `208px` |
| `pb-52` | `208px` |
| `p-56` | `224px` |
| `px-56` | `224px` |
| `py-56` | `224px` |
| `pr-56` | `224px` |
| `pl-56` | `224px` |
| `pt-56` | `224px` |
| `pb-56` | `224px` |
| `p-60` | `240px` |
| `px-60` | `240px` |
| `py-60` | `240px` |
| `pr-60` | `240px` |
| `pl-60` | `240px` |
| `pt-60` | `240px` |
| `pb-60` | `240px` |
| `p-64` | `256px` |
| `px-64` | `256px` |
| `py-64` | `256px` |
| `pr-64` | `256px` |
| `pl-64` | `256px` |
| `pt-64` | `256px` |
| `pb-64` | `256px` |
| `p-72` | `288px` |
| `px-72` | `288px` |
| `py-72` | `288px` |
| `pr-72` | `288px` |
| `pl-72` | `288px` |
| `pt-72` | `288px` |
| `pb-72` | `288px` |
| `p-80` | `320px` |
| `px-80` | `320px` |
| `py-80` | `320px` |
| `pr-80` | `320px` |
| `pl-80` | `320px` |
| `pt-80` | `320px` |
| `pb-80` | `320px` |
| `p-96` | `384px` |
| `px-96` | `384px` |
| `py-96` | `384px` |
| `pr-96` | `384px` |
| `pl-96` | `384px` |
| `pt-96` | `384px` |
| `pb-96` | `384px` |

---

## 12. margin — All Variants (245)

Covers: `m-*`, `mx-*`, `my-*`, `mt-*`, `mr-*`, `mb-*`, `ml-*` (4px base grid)

| Token | Value |
|---|---|
| `m-0` | `0px` |
| `mx-0` | `0px` |
| `my-0` | `0px` |
| `mr-0` | `0px` |
| `ml-0` | `0px` |
| `mt-0` | `0px` |
| `mb-0` | `0px` |
| `m-px` | `1px` |
| `mx-px` | `1px` |
| `my-px` | `1px` |
| `mr-px` | `1px` |
| `ml-px` | `1px` |
| `mt-px` | `1px` |
| `mb-px` | `1px` |
| `m-0,5` | `2px` |
| `mx-0,5` | `2px` |
| `my-0,5` | `2px` |
| `mr-0,5` | `2px` |
| `ml-0,5` | `2px` |
| `mt-0,5` | `2px` |
| `mb-0,5` | `2px` |
| `m-1` | `4px` |
| `mx-1` | `4px` |
| `my-1` | `4px` |
| `mr-1` | `4px` |
| `ml-1` | `4px` |
| `mt-1` | `4px` |
| `mb-1` | `4px` |
| `m-1,5` | `6px` |
| `mx-1,5` | `6px` |
| `my-1,5` | `6px` |
| `mr-1,5` | `6px` |
| `ml-1,5` | `6px` |
| `mt-1,5` | `6px` |
| `mb-1,5` | `6px` |
| `m-2` | `8px` |
| `mx-2` | `8px` |
| `my-2` | `8px` |
| `mr-2` | `8px` |
| `ml-2` | `8px` |
| `mt-2` | `8px` |
| `mb-2` | `8px` |
| `m-2,5` | `10px` |
| `mx-2,5` | `10px` |
| `my-2,5` | `10px` |
| `mr-2,5` | `10px` |
| `ml-2,5` | `10px` |
| `mt-2,5` | `10px` |
| `mb-2,5` | `10px` |
| `m-3` | `12px` |
| `mx-3` | `12px` |
| `my-3` | `12px` |
| `mr-3` | `12px` |
| `ml-3` | `12px` |
| `mt-3` | `12px` |
| `mb-3` | `12px` |
| `m-3,5` | `14px` |
| `mx-3,5` | `14px` |
| `my-3,5` | `14px` |
| `mr-3,5` | `14px` |
| `ml-3,5` | `14px` |
| `mt-3,5` | `14px` |
| `mb-3,5` | `14px` |
| `m-4` | `16px` |
| `mx-4` | `16px` |
| `my-4` | `16px` |
| `mr-4` | `16px` |
| `ml-4` | `16px` |
| `mt-4` | `16px` |
| `mb-4` | `16px` |
| `m-5` | `20px` |
| `mx-5` | `20px` |
| `my-5` | `20px` |
| `mr-5` | `20px` |
| `ml-5` | `20px` |
| `mt-5` | `20px` |
| `mb-5` | `20px` |
| `m-6` | `24px` |
| `mx-6` | `24px` |
| `my-6` | `24px` |
| `mr-6` | `24px` |
| `ml-6` | `24px` |
| `mt-6` | `24px` |
| `mb-6` | `24px` |
| `m-7` | `28px` |
| `mx-7` | `28px` |
| `my-7` | `28px` |
| `mr-7` | `28px` |
| `ml-7` | `28px` |
| `mt-7` | `28px` |
| `mb-7` | `28px` |
| `m-8` | `32px` |
| `mx-8` | `32px` |
| `my-8` | `32px` |
| `mr-8` | `32px` |
| `ml-8` | `32px` |
| `mt-8` | `32px` |
| `mb-8` | `32px` |
| `m-9` | `36px` |
| `mx-9` | `36px` |
| `my-9` | `36px` |
| `mr-9` | `36px` |
| `ml-9` | `36px` |
| `mt-9` | `36px` |
| `mb-9` | `36px` |
| `m-10` | `40px` |
| `mx-10` | `40px` |
| `my-10` | `40px` |
| `mr-10` | `40px` |
| `ml-10` | `40px` |
| `mt-10` | `40px` |
| `mb-10` | `40px` |
| `m-11` | `44px` |
| `mx-11` | `44px` |
| `my-11` | `44px` |
| `mr-11` | `44px` |
| `ml-11` | `44px` |
| `mt-11` | `44px` |
| `mb-11` | `44px` |
| `m-12` | `48px` |
| `mx-12` | `48px` |
| `my-12` | `48px` |
| `mr-12` | `48px` |
| `ml-12` | `48px` |
| `mt-12` | `48px` |
| `mb-12` | `48px` |
| `m-14` | `56px` |
| `mx-14` | `56px` |
| `my-14` | `56px` |
| `mr-14` | `56px` |
| `ml-14` | `56px` |
| `mt-14` | `56px` |
| `mb-14` | `56px` |
| `m-16` | `64px` |
| `mx-16` | `64px` |
| `my-16` | `64px` |
| `mr-16` | `64px` |
| `ml-16` | `64px` |
| `mt-16` | `64px` |
| `mb-16` | `64px` |
| `m-20` | `80px` |
| `mx-20` | `80px` |
| `my-20` | `80px` |
| `mr-20` | `80px` |
| `ml-20` | `80px` |
| `mt-20` | `80px` |
| `mb-20` | `80px` |
| `m-24` | `96px` |
| `mx-24` | `96px` |
| `my-24` | `96px` |
| `mr-24` | `96px` |
| `ml-24` | `96px` |
| `mt-24` | `96px` |
| `mb-24` | `96px` |
| `m-28` | `112px` |
| `mx-28` | `112px` |
| `my-28` | `112px` |
| `mr-28` | `112px` |
| `ml-28` | `112px` |
| `mt-28` | `112px` |
| `mb-28` | `112px` |
| `m-32` | `128px` |
| `mx-32` | `128px` |
| `my-32` | `128px` |
| `mr-32` | `128px` |
| `ml-32` | `128px` |
| `mt-32` | `128px` |
| `mb-32` | `128px` |
| `m-36` | `144px` |
| `mx-36` | `144px` |
| `my-36` | `144px` |
| `mr-36` | `144px` |
| `ml-36` | `144px` |
| `mt-36` | `144px` |
| `mb-36` | `144px` |
| `m-40` | `160px` |
| `mx-40` | `160px` |
| `my-40` | `160px` |
| `mr-40` | `160px` |
| `ml-40` | `160px` |
| `mt-40` | `160px` |
| `mb-40` | `160px` |
| `m-44` | `176px` |
| `mx-44` | `176px` |
| `my-44` | `176px` |
| `mr-44` | `176px` |
| `ml-44` | `176px` |
| `mt-44` | `176px` |
| `mb-44` | `176px` |
| `m-48` | `192px` |
| `mx-48` | `192px` |
| `my-48` | `192px` |
| `mr-48` | `192px` |
| `ml-48` | `192px` |
| `mt-48` | `192px` |
| `mb-48` | `192px` |
| `m-52` | `208px` |
| `mx-52` | `208px` |
| `my-52` | `208px` |
| `mr-52` | `208px` |
| `ml-52` | `208px` |
| `mt-52` | `208px` |
| `mb-52` | `208px` |
| `m-56` | `224px` |
| `mx-56` | `224px` |
| `my-56` | `224px` |
| `mr-56` | `224px` |
| `ml-56` | `224px` |
| `mt-56` | `224px` |
| `mb-56` | `224px` |
| `m-60` | `240px` |
| `mx-60` | `240px` |
| `my-60` | `240px` |
| `mr-60` | `240px` |
| `ml-60` | `240px` |
| `mt-60` | `240px` |
| `mb-60` | `240px` |
| `m-64` | `256px` |
| `mx-64` | `256px` |
| `my-64` | `256px` |
| `mr-64` | `256px` |
| `ml-64` | `256px` |
| `mt-64` | `256px` |
| `mb-64` | `256px` |
| `m-72` | `288px` |
| `mx-72` | `288px` |
| `my-72` | `288px` |
| `mr-72` | `288px` |
| `ml-72` | `288px` |
| `mt-72` | `288px` |
| `mb-72` | `288px` |
| `m-80` | `320px` |
| `mx-80` | `320px` |
| `my-80` | `320px` |
| `mr-80` | `320px` |
| `ml-80` | `320px` |
| `mt-80` | `320px` |
| `mb-80` | `320px` |
| `m-96` | `384px` |
| `mx-96` | `384px` |
| `my-96` | `384px` |
| `mr-96` | `384px` |
| `ml-96` | `384px` |
| `mt-96` | `384px` |
| `mb-96` | `384px` |

---

## 13. height — All Variants (24)

| Token | Value |
|---|---|
| `h-0` | `0px` |
| `h-px` | `1px` |
| `h-0,5` | `2px` |
| `h-1` | `4px` |
| `h-2` | `8px` |
| `h-2,5` | `10px` |
| `h-3` | `12px` |
| `h-3,5` | `14px` |
| `h-4` | `16px` |
| `h-5` | `20px` |
| `h-6` | `24px` |
| `h-7` | `28px` |
| `h-8` | `32px` |
| `h-9` | `36px` |
| `h-10` | `40px` |
| `h-12` | `48px` |
| `h-14` | `56px` |
| `h-16` | `64px` |
| `h-18` | `72px` |
| `h-20` | `80px` |
| `h-24` | `96px` |
| `h-48` | `192px` |
| `h-72` | `288px` |
| `h-96` | `384px` |

---

## 14. max-height — All Variants (35)

| Token | Value |
|---|---|
| `max-h-0` | `0px` |
| `max-h-px` | `1px` |
| `max-h-0,5` | `2px` |
| `max-h-1` | `4px` |
| `max-h-1,5` | `6px` |
| `max-h-2` | `8px` |
| `max-h-2,5` | `10px` |
| `max-h-3` | `12px` |
| `max-h-3,5` | `14px` |
| `max-h-4` | `16px` |
| `max-h-5` | `20px` |
| `max-h-6` | `24px` |
| `max-h-7` | `28px` |
| `max-h-8` | `32px` |
| `max-h-9` | `36px` |
| `max-h-10` | `40px` |
| `max-h-11` | `44px` |
| `max-h-12` | `48px` |
| `max-h-14` | `56px` |
| `max-h-16` | `64px` |
| `max-h-20` | `80px` |
| `max-h-24` | `96px` |
| `max-h-28` | `112px` |
| `max-h-32` | `128px` |
| `max-h-36` | `144px` |
| `max-h-40` | `160px` |
| `max-h-44` | `176px` |
| `max-h-48` | `192px` |
| `max-h-52` | `208px` |
| `max-h-56` | `224px` |
| `max-h-60` | `240px` |
| `max-h-64` | `256px` |
| `max-h-72` | `288px` |
| `max-h-80` | `320px` |
| `max-h-96` | `384px` |

---

## 15. max-width — All Variants (35)

| Token | Value (px) |
|---|---|
| `max-w-0` | `0` |
| `max-w-px` | `1px` |
| `max-w-0,5` | `2px` |
| `max-w-1` | `4px` |
| `max-w-1,5` | `6px` |
| `max-w-2` | `8px` |
| `max-w-2,5` | `10px` |
| `max-w-3` | `12px` |
| `max-w-3,5` | `14px` |
| `max-w-4` | `16px` |
| `max-w-5` | `20px` |
| `max-w-6` | `24px` |
| `max-w-7` | `28px` |
| `max-w-8` | `32px` |
| `max-w-9` | `36px` |
| `max-w-10` | `40px` |
| `max-w-11` | `44px` |
| `max-w-12` | `48px` |
| `max-w-14` | `56px` |
| `max-w-16` | `64px` |
| `max-w-20` | `80px` |
| `max-w-24` | `96px` |
| `max-w-28` | `112px` |
| `max-w-32` | `128px` |
| `max-w-36` | `144px` |
| `max-w-40` | `160px` |
| `max-w-44` | `176px` |
| `max-w-48` | `192px` |
| `max-w-52` | `208px` |
| `max-w-56` | `224px` |
| `max-w-60` | `240px` |
| `max-w-64` | `256px` |
| `max-w-72` | `288px` |
| `max-w-80` | `320px` |
| `max-w-96` | `384px` |

---

## 16. opacity — All Variants (21)

| Token | Value |
|---|---|
| `opacity-0` | `0%` |
| `opacity-5` | `5%` |
| `opacity-10` | `10%` |
| `opacity-15` | `15%` |
| `opacity-20` | `20%` |
| `opacity-25` | `25%` |
| `opacity-30` | `30%` |
| `opacity-35` | `35%` |
| `opacity-40` | `40%` |
| `opacity-45` | `45%` |
| `opacity-50` | `50%` |
| `opacity-55` | `55%` |
| `opacity-60` | `60%` |
| `opacity-65` | `65%` |
| `opacity-70` | `70%` |
| `opacity-75` | `75%` |
| `opacity-80` | `80%` |
| `opacity-85` | `85%` |
| `opacity-90` | `90%` |
| `opacity-95` | `95%` |
| `opacity-100` | `100%` |

---

## 17. stroke-width — All Variants (11)

| Token | Value |
|---|---|
| `stroke-0,5` | `0.5` |
| `stroke-0,75` | `0.75` |
| `stroke-1` | `1` |
| `stroke-1,25` | `1.25` |
| `stroke-1,5` | `1.5` |
| `stroke-1,75` | `1.75` |
| `stroke-2` | `2` |
| `stroke-2,25` | `2.25` |
| `stroke-2,5` | `2.5` |
| `stroke-2,75` | `2.75` |
| `stroke-3` | `3` |
