# UX/UI Agent Skills — Shared Reference

> Shared context for the `ux-ui-agent-skills@2.3.1` kit installed in this repo. This is not a runnable skill — it is the shared knowledge that the other skills (`design-code`, `design-tokens`, `figma-integration`, `a11y-audit`, `apply-aesthetic`, `brandkit`, `design-component`, `design-qa`, `design-review`, `governance`, `image-to-code`, `migrate-design-system`, `performance`, `prototype`, `redesign`, `token-build`, `ux-writing`) build on. Cross-reference this file when you need the kit's overall architecture, naming conventions, or supported targets.

**Source:** [npm](https://www.npmjs.com/package/ux-ui-agent-skills) · [github](https://github.com/plugin87/ux-ui-agent-skills)

---

## What the kit does

| Capability | Description |
|---|---|
| Design Token Generation | DTCG-format JSON tokens (colors, typography, spacing, shadows, borders, breakpoints, motion) — 3-tier (Primitive → Semantic → Component) |
| Component Design | Atoms → Templates with anatomy, variants, the 8 states, token mapping, a11y |
| Code Generation (any framework) | Adapter Protocol targets any stack — React+Tailwind, Next.js, SwiftUI, Vue, Svelte, Angular, Solid, Web Components/Lit, React Native, Flutter, Jetpack Compose, vanilla CSS, CSS-in-JS |
| Design-System Interop | Maps to/from any design system (Material 3, Apple HIG, Fluent, Carbon, shadcn/ui, Radix, Chakra, Mantine, Bootstrap…) via role-based crosswalk |
| Accessibility Auditing | WCAG 2.2 AA→AAA with P0/P1/P2 findings + ARIA patterns |
| Design Review | 6-dimension scoring + Nielsen's 10 heuristics + structured findings table |
| Prototyping & Research | 5-level fidelity ladder (content-first → wireframe → low-fi → high-fi → code) + journey maps + usability scripts |
| Motion Design | Tokenized duration / easing / transitions with reduced-motion parity |
| UX Writing | Voice & tone, error/empty-state formulas, microcopy, inclusive language |
| Design Taste | Anti-slop doctrine + 138 design-system references for aesthetic direction |

---

## Project structure (top-level)

```
.
├── CLAUDE.md                  # Agent persona & master instructions (kit's default — this repo has its own)
├── .claude/skills/            # 17 runnable skills (this folder)
│   ├── _ux-ui-shared/         # ← this file
│   ├── a11y-audit/  apply-aesthetic/  brandkit/  design-code/
│   ├── design-component/  design-qa/  design-review/  design-tokens/
│   ├── figma-integration/  governance/  image-to-code/  migrate-design-system/
│   ├── performance/  prototype/  redesign/  token-build/  ux-writing/
├── tokens/                    # 13 DTCG token files (colors · typography · spacing · shadows · borders · breakpoints · motion · gradients · opacity · blur · sizing · states · theming)
├── components/                # 50 component specs (atoms → templates + navigation/feedback/forms/overlays/data-*)
├── taste/                     # design-taste.md · aesthetic-systems.md · motion-choreography.md
├── design-systems/            # interop-protocol.md · crosswalk.md · library/<name>/DESIGN.md (138 brand specs)
├── content/voice-tone.md      # UX writing system
├── accessibility/             # wcag-checklist · aria-patterns · cognitive · vision · i18n-rtl · wcag-aaa
├── workflows/                 # design-review · design-to-code · prototyping · redesign-audit · governance · token-build · figma-integration · design-qa · performance
├── scripts/                   # validate_tokens · contrast · design_systems · scaffold_component (+ axe, render, taste audit, focus-trap, RTL verifiers)
└── frameworks/                # Adapter Protocol + 19 per-framework adapters
```

---

## Token architecture — 3-tier (DTCG)

```
┌─────────────────────┐     ┌─────────────────────┐     ┌─────────────────────┐
│  COMPONENT TOKENS   │ ──► │  SEMANTIC TOKENS    │ ──► │  PRIMITIVE TOKENS   │
│  button-bg-primary  │     │  action.primary     │     │  blue.600 = #2563EB │
│  (use in code)      │     │  (use in design)    │     │  (raw palette)      │
└─────────────────────┘     └─────────────────────┘     └─────────────────────┘
```

| Tier | Role | Example |
|---|---|---|
| Primitive | Raw color/size values — never referenced directly | `blue.600`, `space.4` |
| Semantic | Purpose-based aliases — used in design | `action.primary`, `text.secondary`, `surface.card` |
| Component | Scoped to specific components — used in code | `button.primary-bg`, `input.border-focus` |

> Dark mode swaps **semantic** tokens — primitives stay the same.

---

## Supported frameworks

| Tier | Adapters available in `frameworks/` |
|---|---|
| First-class | Next.js · React+Tailwind · SwiftUI |
| `frameworks/adapters/` | Angular · Astro · Bootstrap · Chakra · CSS-in-JS · Flutter · Jetpack Compose · Mantine · MUI · Qwik · React Native · Solid · Svelte · Vanilla CSS · Vue · Web Components / Lit |
| Bespoke | Generate a new adapter on demand via `frameworks/adapter-protocol.md` |

---

## Design-system interop

| | |
|---|---|
| Protocol | `design-systems/interop-protocol.md` — role-based crosswalk methodology |
| Crosswalk | `design-systems/crosswalk.md` — Material 3 · Apple HIG · Fluent · Carbon · shadcn · Radix · Ant · Polaris · Primer · Atlassian · Bootstrap |
| Library | `design-systems/library/<name>/DESIGN.md` — 138 brand-grade specs |

---

## Accessibility standards

- **Default:** WCAG 2.2 AA across all generated code and reviewed designs
- **Upgrade path:** WCAG 2.2 AAA via `accessibility/wcag-aaa.md`
- **Patterns:** 19 component ARIA patterns in `accessibility/aria-patterns.md`
- **Coverage:** vision (CVD, low-vision, forced-colors), cognitive, i18n/RTL
- **Verification:** `scripts/contrast.py`, axe-core integration, focus-trap and RTL verifiers

---

## How this kit composes with `shadcn-ui-design`

This project also ships a **first-party** `shadcn-ui-design` skill that is canonical for any UI build in this repo (shadcn/ui + Tailwind v4 + Next.js App Router + the `DESIGN.md` Figma export).

Rule of thumb:

| Concern | Use |
|---|---|
| Build the actual UI in this repo | `shadcn-ui-design` (consults `DESIGN.md` Part A tokens) |
| Cross-framework / multi-stack code | `design-code` |
| Generic DTCG token work | `design-tokens` |
| Figma ↔ token / variable sync | `figma-integration` |
| WCAG audit · copywriting · perf · review · prototyping · brand · governance | the dedicated specialist skill |

When the kit's skills (`design-code`, `image-to-code`, etc.) touch UI in this repo, they must still honor `DESIGN.md` Part A tokens and the hard rules in `CLAUDE.md` § 7.

---

## Maintenance

- Re-fetch / update the kit:
  ```bash
  npx ux-ui-agent-skills add <area>       # tokens · components · taste · design-systems · frameworks · accessibility · workflows · content · scripts · skills · claude
  npx ux-ui-agent-skills add skills --force   # overwrite existing skill SKILL.md files
  ```
- List all areas: `npx ux-ui-agent-skills list`
- Full kit (with safe skips for existing files): `npx ux-ui-agent-skills init`
- Per-file repository: <https://github.com/plugin87/ux-ui-agent-skills>
