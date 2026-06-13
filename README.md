<div align="center">

# shadcn-skills-design-starter

**A two-layer Claude Code design system kit.**
A canonical Figma → shadcn/ui code workflow, augmented with a 19-skill multi-framework agent toolkit.

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-60a5fa?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![Tailwind v4](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-latest-000000?style=flat-square)](https://ui.shadcn.com/)
[![pnpm](https://img.shields.io/badge/pnpm-11.6-f69220?style=flat-square&logo=pnpm&logoColor=white)](https://pnpm.io/)
[![Skills](https://img.shields.io/badge/Claude_skills-19-7c3aed?style=flat-square)](#skills-directory)
[![Design Tokens](https://img.shields.io/badge/Design_Tokens-1%2C788-fbbf24?style=flat-square)](#design-tokens)
[![Design Systems](https://img.shields.io/badge/Reference_systems-138-f97316?style=flat-square)](#design-systems-library)

</div>

---

## Table of contents

- [What this is](#what-this-is)
- [What's inside](#whats-inside)
- [Quick start](#quick-start)
  - [Option A — Drop the skill into your Next.js project](#option-a--drop-the-skill-into-your-nextjs-project)
  - [Option B — Run the included docs playground](#option-b--run-the-included-docs-playground)
  - [Option C — Install the multi-framework kit anywhere](#option-c--install-the-multi-framework-kit-anywhere)
- [Repository structure](#repository-structure)
- [How it works — five workflows](#how-it-works--five-workflows)
  - [1. Figma → Code (canonical)](#1-figma--code-canonical)
  - [2. Token lookup](#2-token-lookup)
  - [3. Color match (Figma hex → token)](#3-color-match-figma-hex--token)
  - [4. Picking the right skill](#4-picking-the-right-skill)
  - [5. Design QA gates](#5-design-qa-gates)
- [Playground tour](#playground-tour)
- [Skills directory](#skills-directory)
- [Tech stack](#tech-stack)
- [Design tokens](#design-tokens)
- [Design systems library](#design-systems-library)
- [Tooling — scripts](#tooling--scripts)
- [Maintenance](#maintenance)
- [Hard rules](#hard-rules)
- [Acknowledgments](#acknowledgments)

---

## What this is

This repository is **two complementary systems shipped together**:

1. **A first-party Claude Code skill (`shadcn-ui-design`)** — the canonical Figma → shadcn/ui + Tailwind v4 + Next.js App Router workflow for *this* project. It binds a real Figma export (1,788 variables across 16 collections) to a fixed semantic token set documented in `DESIGN.md`.

2. **The `ux-ui-agent-skills` kit (v2.3.1)** — a 17-skill multi-framework agent toolkit that turns Claude into a senior design architect. Covers cross-framework code generation, accessibility audits, prototyping, governance, brand creation, and more. Bundled with 138 design system references and 19 runnable validators / linters / verifiers.

Both layers coexist. `shadcn-ui-design` is canonical for any UI **build** in this repo; the kit skills handle adjacent concerns (a11y, perf, copywriting, design review, prototyping, etc.) and multi-framework variants.

A `playground/` Next.js 16 site is included for hands-on documentation of components, tokens, and the color-match utility.

---

## What's inside

| Layer | Path | What it gives you |
|---|---|---|
| **Skill (this repo)** | `.claude/skills/shadcn-ui-design/` | The procedural guide (`SKILL.md`), canonical token reference (`references/DESIGN.md`), and `setup.sh` for new projects |
| **Skill (kit)** | `.claude/skills/_ux-ui-shared/` | Shared kit-overview reference Claude uses when planning across skills |
| **Skills (kit)** | `.claude/skills/{a11y-audit, apply-aesthetic, brandkit, design-code, design-component, design-qa, design-review, design-tokens, figma-integration, governance, image-to-code, migrate-design-system, performance, prototype, redesign, token-build, ux-writing}/` | 17 specialist agent skills |
| **Project memory** | `CLAUDE.md` | Auto-loads in every Claude Code session — defines hard rules, mandatory read order, Figma flow, and skill routing |
| **Tokens / specs** | `accessibility/`, `components/`, `content/`, `design-systems/`, `frameworks/`, `taste/`, `workflows/` | Plain-Markdown reference material the kit skills consult |
| **Playground** | `playground/` | Next.js 16 + React 19 + Tailwind v4 docs site exercising the design system |
| **Tooling** | `scripts/` | 19 validators / linters / verifiers — token integrity, contrast, axe, focus-trap, RTL, taste audit |

---

## Quick start

### Option A — Drop the skill into your Next.js project

Use the canonical workflow for shadcn/ui + Tailwind v4 + Next.js:

```bash
# 1. Copy the skill into your repo (or symlink)
cp -R path/to/.claude/skills/shadcn-ui-design  /your-app/.claude/skills/

# 2. Initialize shadcn (one-time)
cd /your-app
pnpm dlx shadcn@latest init    # choose cssVariables: true

# 3. Install the base component set
bash .claude/skills/shadcn-ui-design/scripts/setup.sh

# 4. Apply DESIGN.md Part A → A4 globals.css template into your app/globals.css
```

Add a thin `CLAUDE.md` to your project pointing at the skill:

```md
This project uses the shadcn-ui-design skill at .claude/skills/shadcn-ui-design/.
Canonical token source: .claude/skills/shadcn-ui-design/references/DESIGN.md
```

### Option B — Run the included docs playground

```bash
cd playground
pnpm install
pnpm dev
# open http://localhost:3000  (redirects to /docs)
```

### Option C — Install the multi-framework kit anywhere

```bash
# full kit (240 files — adds skills, tokens, specs, scripts, 138 design systems)
npx ux-ui-agent-skills init

# preview without writing
npx ux-ui-agent-skills init --dry

# install one area only (areas: claude · tokens · components · taste · design-systems
# · frameworks · accessibility · workflows · content · scripts · skills)
npx ux-ui-agent-skills add frameworks
npx ux-ui-agent-skills add skills --force   # overwrite existing skills
```

---

## Repository structure

```
create-skill-design/
├── CLAUDE.md                                # Project memory — auto-loaded
├── README.md                                # This file
├── .gitignore
│
├── .claude/skills/                          # 19 runnable skills
│   ├── _ux-ui-shared/                       # Kit overview (this project's)
│   ├── shadcn-ui-design/                    # ← CANONICAL skill for this repo
│   │   ├── SKILL.md                         #   Procedural guide
│   │   ├── references/DESIGN.md             #   1,788 token reference
│   │   └── scripts/setup.sh                 #   One-shot shadcn installer
│   ├── a11y-audit/                          # WCAG 2.2 AA/AAA audits
│   ├── apply-aesthetic/                     # Apply a visual direction
│   ├── brandkit/                            # New brand from a brief
│   ├── design-code/                         # Multi-framework code gen
│   ├── design-component/                    # Component spec (anatomy/states/a11y)
│   ├── design-qa/                           # CI quality gates
│   ├── design-review/                       # 6-dim critique + heuristics
│   ├── design-tokens/                       # DTCG 3-tier tokens
│   ├── figma-integration/                   # Figma ↔ DTCG sync
│   ├── governance/                          # SemVer / contribution policy
│   ├── image-to-code/                       # Screenshot → code
│   ├── migrate-design-system/               # Cross-system mapping
│   ├── performance/                         # Core Web Vitals
│   ├── prototype/                           # Fidelity ladder + research
│   ├── redesign/                            # Premium-quality upgrade
│   ├── token-build/                         # Token build pipeline
│   └── ux-writing/                          # Voice & tone, microcopy
│
├── accessibility/                           # WCAG checklist + ARIA + cognitive + vision + i18n/RTL + AAA delta
├── components/                              # Atomic Design specs (atoms → templates + data-viz/feedback/forms/overlays)
├── content/voice-tone.md                    # UX writing system
├── design-systems/
│   ├── interop-protocol.md                  # Role-based crosswalk methodology
│   ├── crosswalk.md                         # Material 3 · HIG · Fluent · Carbon · shadcn · Radix · …
│   └── library/<name>/DESIGN.md             # 138 brand-grade specs
├── frameworks/
│   ├── adapter-protocol.md                  # Spec for adding new framework adapters
│   ├── nextjs.md  · react-tailwind.md  · swiftui.md
│   └── adapters/                            # 16 adapters: angular · astro · bootstrap · chakra · css-in-js · flutter · …
├── scripts/                                 # 19 validators / linters / verifiers
├── taste/                                   # Anti-slop doctrine + aesthetic archetypes + motion choreography
├── workflows/                               # design-review · design-to-code · prototyping · redesign-audit · governance · token-build · figma-integration · design-qa · performance
│
└── playground/                              # Next.js 16 docs site
    ├── app/
    │   ├── layout.tsx                       # Inter + Geist Mono, root shell
    │   ├── page.tsx                         # → redirect("/docs")
    │   └── docs/
    │       ├── layout.tsx                   # Header + sidebar shell
    │       ├── page.tsx                     # Introduction page
    │       ├── tokens/{colors,color-match}/page.tsx
    │       └── components/{accordion,alert}/page.tsx
    ├── components/
    │   ├── ui/                              # shadcn primitives (accordion, alert, button, scroll-area, separator, sheet, tabs)
    │   ├── layout/                          # site-header, main-nav, mobile-nav, sidebar-nav
    │   ├── docs/                            # page-header, component-preview, color-swatch, color-palette, semantic-color-row, color-match-tool
    │   └── examples/                        # product-faq, alert-showcase (built from Figma)
    ├── config/                              # site.ts + docs.ts (single source for nav)
    └── lib/                                 # utils.ts (cn), tokens.ts (675 colors typed), color-match.ts (redmean)
```

---

## How it works — five workflows

### 1. Figma → Code (canonical)

This is the path the `shadcn-ui-design` skill runs every time you ask Claude for UI from a Figma frame:

```
┌──────────────────────────────────────────────────────────────────────┐
│ 1. User shares a Figma URL                                           │
│ 2. /figma-use                       ← MANDATORY before Figma reads   │
│ 3. get_design_context               ← structure + layout             │
│ 4. get_screenshot                   ← visual reference                │
│ 5. get_variable_defs                ← Figma vars for the selection   │
│ 6. Cross-reference each variable against DESIGN.md Part A            │
│      ├─ match → use the semantic Tailwind class                      │
│      └─ no match → STOP and flag to user (never guess)               │
│ 7. Decide Server vs Client per SKILL.md Step 1                       │
│ 8. Pick shadcn components per SKILL.md Step 4 decision tree          │
│ 9. Generate TSX following SKILL.md Step 9 output format              │
│ 10. Verify a11y checklist (SKILL.md Step 8) before finishing         │
└──────────────────────────────────────────────────────────────────────┘
```

Output is always in this order: **install command → component file → usage snippet → 1–3 design notes**.

Worked examples lived in this repo:

| Source node | Built in | Visible at |
|---|---|---|
| Figma `308:14` | `playground/components/examples/product-faq.tsx` | `/docs/components/accordion` |
| Figma `73:3398` | `playground/components/examples/alert-showcase.tsx` | `/docs/components/alert` |

The workflow is **one-way** by default. Code is never pushed back to Figma unless the user explicitly asks.

### 2. Token lookup

`DESIGN.md` has two halves:

- **Part A — Active reference** (read every time before generating UI):
  - **A1** — 35 semantic tokens with light/dark aliases
  - **A2** — Tailwind class prefix rules per token role
  - **A3** — Next.js font setup (Inter + Geist Mono)
  - **A4** — copy-paste `globals.css` template
- **Part B — Full token tables** (deep lookups, sections 2–17):
  - Sections cover shadcn semantic (35) · Tailwind primitives (244) · Radix UI (396) · font (45) · numeric scale (87) · border-radius (150) · border-width (45) · gap (102) · space (68) · padding (245) · margin (245) · height (24) · max-height (35) · max-width (35) · opacity (21) · stroke-width (11) — **1,788 total**

Rule: **never invent a token.** If `DESIGN.md` doesn't list it, stop and ask.

### 3. Color match (Figma hex → token)

Open `/docs/tokens/color-match` in the playground, paste any hex from Figma, and see the 12 closest matching tokens.

```
input  → "#7C3AED"
parser → RGBA(124, 58, 237, 255)
score  → redmeanDistance(input, candidate) over ~710 candidates
output → tailwind/violet-600 (100%) · semantic primary dark (≈) · radix violet/9 (≈) · …
```

The matcher lives in `playground/lib/color-match.ts` and is pure (no deps). Candidate pool: 35 semantic × 2 (light + dark) + 244 Tailwind + 396 Radix.

| Common Figma hex | Match |
|---|---|
| `#7C3AED` | tailwind `violet-600` (100%) |
| `#0588F0` | radix `blue/10` (100%) · semantic `sidebar-primary` (dark) · semantic `chart-3` |
| `#737373` | tailwind `neutral-500` (100%) · semantic `muted-foreground` (light) · semantic `ring` |

### 4. Picking the right skill

Claude routes to the right skill based on the user's intent — `CLAUDE.md` § 5 defines the table. Quick guide:

| If the user wants… | Skill |
|---|---|
| UI build for THIS project (shadcn + Next.js) | `shadcn-ui-design` |
| UI build for a different stack (SwiftUI / Vue / Flutter / …) | `design-code` |
| Generic DTCG tokens (not the Figma-bound `DESIGN.md`) | `design-tokens` |
| Figma Variables ↔ DTCG sync | `figma-integration` |
| WCAG audit, contrast, keyboard/SR review | `a11y-audit` |
| A specific look (apple, linear, vercel, brutalist, …) | `apply-aesthetic` |
| New brand from a brief | `brandkit` |
| Component spec (anatomy/variants/states) | `design-component` |
| CI quality gates | `design-qa` |
| Design critique with Nielsen's heuristics | `design-review` |
| Versioning / contribution / deprecation policy | `governance` |
| Turning a screenshot into code | `image-to-code` |
| Mapping to/from Material 3, HIG, Carbon, … | `migrate-design-system` |
| Core Web Vitals work | `performance` |
| Wireframe → high-fi ladder + usability testing | `prototype` |
| Modernizing an existing UI | `redesign` |
| Style Dictionary / Tokens Studio build | `token-build` |
| Microcopy, errors, empty states | `ux-writing` |

**Rule:** when any kit skill touches UI code in this repo, it must still honor `DESIGN.md` Part A tokens and the hard rules in `CLAUDE.md` § 7.

### 5. Design QA gates

`scripts/` ships 19 validators and verifiers. Common gates:

```bash
# token integrity (DTCG)
python3 scripts/validate_tokens.py

# contrast (WCAG 2.2 AA / AAA)
python3 scripts/contrast.py

# hardcoded color/spacing detection
python3 scripts/lint_hardcodes.py

# WCAG real-render gate
node scripts/measure_render.mjs

# state-aware WCAG verification
node scripts/verify_states.mjs

# axe-core a11y audit
node scripts/axe_audit.mjs

# RTL parity check
node scripts/verify_rtl.mjs

# anti-slop / taste audit
node scripts/taste_audit.mjs
```

Wire any of these into CI via `design-qa` skill — see `workflows/design-qa.md`.

---

## Playground tour

```bash
cd playground && pnpm install && pnpm dev
```

| Route | What you see |
|---|---|
| `/` | redirects to `/docs` |
| `/docs` | Introduction + auto-generated component cards from `config/docs.ts` |
| `/docs/tokens/colors` | All 675 colors grouped by source — **35 semantic** (6 sub-groups: Surfaces, Brand & Variants, Form & UI, Charts, Sidebar, Custom) · **244 Tailwind** (22 families) · **396 Radix** (33 families) — each with light/dark hex and Tailwind class |
| `/docs/tokens/color-match` | Interactive hex input + native color picker; live list of 12 closest matching tokens with similarity % |
| `/docs/components/accordion` | Preview + code tabs · 3 expanded states · design notes |
| `/docs/components/alert` | Preview + code tabs · default / title-only / destructive variants · design notes |

**Stack:** Next.js 16.2 (Turbopack), React 19.2, Tailwind v4 with `@theme inline`, TypeScript strict, shadcn/ui (base-nova style on `@base-ui/react`), lucide-react icons, Inter + Geist Mono via `next/font/google`.

**Sidebar nav** is config-driven (`playground/config/docs.ts`) — add a new entry there and the sidebar updates everywhere (desktop sidebar + mobile sheet).

**Adding a new component page** (3 steps):

1. Create the example in `playground/components/examples/<name>.tsx`
2. Create the route at `playground/app/docs/components/<name>/page.tsx` — import `PageHeader`, `ComponentPreview`, and your example
3. Add an entry under `Components` in `config/docs.ts`

---

## Skills directory

19 skills live under `.claude/skills/`. They are invocable via `/<skill-name>` in Claude Code.

| Skill | Owner | Trigger phrase examples |
|---|---|---|
| `shadcn-ui-design` | **this repo** | "build a card from this Figma", "make a settings page", "convert this frame" |
| `_ux-ui-shared` | **this repo** | (reference doc, not directly invoked) |
| `a11y-audit` | kit | "audit accessibility", "check contrast", "WCAG review" |
| `apply-aesthetic` | kit | "make it feel like linear", "apple-style", "vercel vibe" |
| `brandkit` | kit | "design a brand from this brief", "make a token kit for X" |
| `design-code` | kit | "give me this in SwiftUI / Vue / Flutter", "any framework" |
| `design-component` | kit | "spec a component", "anatomy + variants for X" |
| `design-qa` | kit | "set up CI quality gates", "QA this component before shipping" |
| `design-review` | kit | "review this design", "critique with Nielsen's heuristics" |
| `design-tokens` | kit | "generate a DTCG token kit", "audit my tokens" |
| `figma-integration` | kit | "sync Figma Variables with my tokens", "verify design-code parity" |
| `governance` | kit | "should this be a major bump?", "deprecation policy" |
| `image-to-code` | kit | "rebuild this screenshot in code", "match this mockup" |
| `migrate-design-system` | kit | "map our tokens to Material 3", "migrate from Bootstrap to shadcn" |
| `performance` | kit | "improve LCP", "fix layout shift", "make this feel fast" |
| `prototype` | kit | "wireframe this", "plan a usability test" |
| `redesign` | kit | "modernize this UI", "polish without breaking" |
| `token-build` | kit | "set up Style Dictionary", "build platform theme files" |
| `ux-writing` | kit | "rewrite this error message", "voice & tone for X" |

See `CLAUDE.md` § 5 — *Complementary skills* for the canonical routing table.

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 App Router (Server Components default) |
| Styling | Tailwind CSS v4 with CSS variables (`@theme inline`) |
| Components | shadcn/ui (base-nova style on `@base-ui/react`) |
| Language | TypeScript strict mode |
| Package manager | pnpm 11.6+ (enable via `corepack enable pnpm`) |
| Forms | React Hook Form + Zod |
| Icons | lucide-react |
| Fonts | `next/font/google` → Inter (sans) + Geist Mono (mono) |

---

## Design tokens

Two complementary token systems coexist:

| | `DESIGN.md` (this repo) | `tokens/*.json` (kit) |
|---|---|---|
| Format | Markdown reference tables | DTCG-compliant JSON |
| Source of truth | Figma `variables-export.json` | Hand-authored 3-tier (primitive → semantic → component) |
| Coverage | 1,788 variables across 16 collections | 13 token files (colors, typography, spacing, motion, shadows, borders, breakpoints, gradients, opacity, blur, sizing, states, theming) |
| Used by | `shadcn-ui-design` skill + playground/globals.css | `token-build` · `design-tokens` · `figma-integration` skills |
| When to use | UI build in this repo | DTCG / platform builds / non-Figma-bound projects |

The 35 semantic tokens in `DESIGN.md` Part A drive every shadcn component in this repo. They are exposed to Tailwind v4 via the `@theme inline` block in `playground/app/globals.css`.

---

## Design systems library

`design-systems/library/` ships **138 brand-grade reference specs** (each a `DESIGN.md`) — used by the `apply-aesthetic` skill when the user asks for a specific look.

A few examples: `apple` · `linear-app` · `stripe` · `vercel` · `notion` · `figma` · `framer` · `github` · `material` · `shadcn` · `radix` · `tesla` · `airbnb` · `spotify` · `openai` · `cursor` · `raycast` · `claude` · `posthog` · `supabase` · `arc` · `mintlify`

Plus archetype references (`minimal`, `editorial`, `brutalism`, `glassmorphism`, `neumorphism`, `claymorphism`, `bento`, `corporate`, `enterprise`, `luxury`, `playful`, …).

---

## Tooling — scripts

| Script | What it does |
|---|---|
| `validate_tokens.py` | JSON + alias validation for `tokens/` |
| `contrast.py` | WCAG 2.2 contrast-ratio checker |
| `validate_contrast.py` | Bulk contrast over token combos |
| `validate_theme_refs.py` | Catch theme refs that don't resolve |
| `validate_component_spec.py` | Spec linter for `components/*.md` |
| `lint_hardcodes.py` | Flag hardcoded hex / spacing values |
| `lint_taste.py` | Anti-slop linter (banned defaults) |
| `check_no_emoji.py` | Enforce the no-emoji rule |
| `design_systems.py` | Browse/search the 138-system library |
| `scaffold_component.py` | Emit a component spec stub |
| `axe_audit.mjs` | axe-core a11y audit runner |
| `taste_audit.mjs` | Aesthetic / anti-slop verification |
| `measure_render.mjs` | Real-render WCAG gate |
| `verify_states.mjs` | State-aware WCAG verification |
| `verify_focustrap.mjs` | Focus-trap correctness |
| `verify_responsive.mjs` | Responsive parity |
| `verify_rtl.mjs` | RTL parity check |
| `accuracy_report.mjs` | Design-to-code accuracy report |
| `build_tokens.mjs` | Token build (DTCG → platform artifacts) |

All scripts are dependency-light: Python files use stdlib; `.mjs` files use Node 20+ built-ins or, when needed, packages already installed by the kit.

---

## Maintenance

### Regenerating `DESIGN.md`

Whenever Figma changes:
1. Export the updated `variables-export.json`
2. Regenerate `DESIGN.md` from it (do not hand-edit values)
3. Diff old vs new; flag any breaking renames
4. If a semantic token's underlying primitive changed, update consuming projects' `globals.css`

### Updating the kit

```bash
npx ux-ui-agent-skills add skills --force          # update all skills
npx ux-ui-agent-skills add frameworks              # update framework adapters
npx ux-ui-agent-skills list                        # see all areas
```

### Repository hygiene

- `CLAUDE.md` is canonical for project memory — keep it short, current, and authoritative
- `DESIGN.md` is the only place token values live — never duplicate them
- The complementary skills should not drift into shadcn-specific behavior — that's `shadcn-ui-design`'s job

---

## Hard rules

Summarized from `CLAUDE.md` § 7 — the full anti-pattern table lives there.

### Always

- Use semantic tokens from `DESIGN.md` Part A (`bg-card`, `text-muted-foreground`, `border-border`)
- Default to **Server Components**; add `"use client"` only when required
- Use `next/link`, `next/image`, `next/font` over plain HTML equivalents
- Use `cn()` from `@/lib/utils` for conditional classes
- Output in order: install command → component file → usage snippet → 1–3 design notes
- Pair every `<Input>` with a `<Label>`; give icon-only `<Button>` an `sr-only` description

### Never

- Hardcode colors (`bg-neutral-900`, `text-zinc-500`, `#0588F0`) when a semantic token exists
- Use `<a href="">`, `<img>`, or `@import url(...)` for fonts
- Call `useRouter()` from a Server Component — use `redirect()` / `notFound()`
- Put `"use client"` on files that don't need hooks, browser APIs, or events
- Invent design tokens — if `DESIGN.md` doesn't list it, **stop and ask**
- Push code back to Figma unless the user explicitly asks

---

## Acknowledgments

- **shadcn/ui** — Sound design-system foundation that this kit composes against
- **Tailwind CSS v4** — `@theme inline` made the token bridge clean
- **Radix UI** — Color scale powers the `--chart-*` tokens
- **[`ux-ui-agent-skills`](https://www.npmjs.com/package/ux-ui-agent-skills)** by [@plugin87](https://github.com/plugin87) — The multi-framework agent toolkit layered on top of this repo
- **Figma MCP server** — Live design-to-code bridge wired in via `/figma-use`

---

<div align="center">

**Repo:** https://github.com/K-Suwanwiang/shadcn-skills-design-starter

</div>
