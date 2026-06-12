# shadcn-skills-design-starter

A **Claude Code skill bundle** that converts Figma designs into production-ready **Next.js + shadcn/ui + Tailwind CSS v4** code, using a fixed design-token system exported from Figma.

> This repository is **not** a Next.js application. It is a portable skill package (everything under `.claude/skills/shadcn-ui-design/`) intended to be copied or symlinked into any Next.js App Router project so that Claude has the design system context it needs.
>
> A `playground/` is included for local testing of the skill.

---

## What's inside

| Path | Purpose |
|---|---|
| `.claude/skills/shadcn-ui-design/SKILL.md` | Canonical procedural guide (server vs client, file conventions, output format) |
| `.claude/skills/shadcn-ui-design/references/DESIGN.md` | Design-token reference — **1,788 variables across 16 collections** (source of truth) |
| `.claude/skills/shadcn-ui-design/scripts/setup.sh` | One-shot installer for shadcn base components in a consuming project |
| `CLAUDE.md` | Project memory loaded automatically into every Claude Code session in this repo |
| `playground/` | Next.js 16 + React 19 + Tailwind v4 scaffold for testing the skill |

---

## Repository layout

```
create-skill-design/
├── CLAUDE.md                                  # project memory
├── README.md
├── .gitignore
├── .claude/skills/shadcn-ui-design/
│   ├── SKILL.md                               # procedural guide
│   ├── references/
│   │   └── DESIGN.md                          # canonical token reference
│   ├── scripts/
│   │   └── setup.sh                           # shadcn install script
│   └── assets/                                # screenshots / examples
└── playground/                                # Next.js 16 test app
    ├── app/
    ├── public/
    ├── package.json
    └── ...
```

---

## Quick start

### Option A — Use the skill in your own Next.js project

```bash
# 1. Copy the skill into your repo
cp -R path/to/this/.claude/skills/shadcn-ui-design /your-app/.claude/skills/

# 2. Initialize shadcn (one-time)
cd /your-app
pnpm dlx shadcn@latest init    # choose: cssVariables: true

# 3. Install the base component set
bash .claude/skills/shadcn-ui-design/scripts/setup.sh

# 4. Paste DESIGN.md Part A → A4 globals.css template into your app/globals.css
```

Optionally add a thin `CLAUDE.md` in your repo pointing to the skill:

```md
This project uses the shadcn-ui-design skill at .claude/skills/shadcn-ui-design/.
Design tokens canonical source: .claude/skills/shadcn-ui-design/references/DESIGN.md
```

### Option B — Test in the included playground

```bash
cd playground
pnpm install
pnpm dev
# open http://localhost:3000
```

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15+ App Router (Server Components default) |
| Styling | Tailwind CSS v4 with CSS variables (`@theme inline`) |
| Components | shadcn/ui (latest, `cssVariables: true`) |
| Language | TypeScript strict mode |
| Package manager | pnpm |
| Forms | React Hook Form + Zod |
| Icons | lucide-react (shipped with shadcn) |
| Fonts | `next/font/google` → Inter (sans) + Geist Mono (mono) |

---

## How the skill works

### Mandatory read order (every UI request)

1. `DESIGN.md` **Part A** — Token quick reference, Tailwind prefix rules, font setup, globals.css template
2. `SKILL.md` Step 1 — Server vs Client component decision
3. `components/ui/` in consuming project — installed shadcn primitives
4. `components.json` — confirm `aliases.utils`, `@/` paths, `cssVariables: true`

### Figma → Code flow

```
1. User shares Figma frame URL or selects a node
2. /figma-use                # MANDATORY skill invocation
3. get_design_context        # structure + layout
4. get_screenshot            # visual reference
5. get_variable_defs         # Figma vars for selection
6. Cross-reference each variable against DESIGN.md Part A
   ├─ match found → use the semantic Tailwind class
   └─ no match    → flag to user, do not guess
7. Decide Server vs Client per SKILL.md Step 1
8. Pick shadcn components per SKILL.md Step 4 decision tree
9. Generate TSX following SKILL.md Step 9 output format
10. Verify a11y checklist (SKILL.md Step 8) before finishing
```

The workflow is **Figma → Code one-way**. Code is never pushed back to Figma unless the user explicitly requests it.

---

## Hard rules

### Always

- Use semantic tokens from `DESIGN.md` Part A (`bg-card`, `text-muted-foreground`, `border-border`)
- Default to Server Components; add `"use client"` only when required
- Use `next/link` for internal navigation, `next/image` for images, `next/font` for fonts
- Use `cn()` from `@/lib/utils` to compose conditional classes
- Output in order: install command → component file → usage snippet → 1–3 design notes
- Pair every `<Input>` with a `<Label>`; give icon-only buttons an `sr-only` description

### Never

- Hardcode colors (`bg-neutral-900`, `text-zinc-500`, `#0588F0`) when a semantic token exists
- Use `<a href="">`, `<img>`, or `@import url(...)` for fonts
- Call `useRouter()` from a Server Component — use `redirect()` / `notFound()`
- Put `"use client"` on files that don't need hooks, browser APIs, or event handlers
- Invent design tokens — if `DESIGN.md` doesn't list it, stop and ask

Full anti-pattern table: see `CLAUDE.md` § 11.

---

## Design token system

`DESIGN.md` is generated from `variables-export.json` (a Figma export). It contains:

| Section | Tokens | Purpose |
|---|---:|---|
| shadcn/ui semantic colors | 35 | Drives all shadcn components (`--background`, `--primary`, etc.) |
| tailwind/colors | 244 | Tailwind primitive palette (used only as aliases) |
| rdx/colors | 396 | Radix UI color scale incl. alpha (`black/*`, `white/*`) |
| font | 45 | Family / size / weight / leading / tracking / style |
| tokens | 87 | Numeric scale (referenced by spacing, sizing) |
| border-radius | 150 | All `rounded-*` variants |
| border-width | 45 | All `border-*` variants |
| gap | 102 | `gap-*`, `gap-x-*`, `gap-y-*` (4px base grid) |
| space | 68 | `space-x-*`, `space-y-*` |
| padding | 245 | `p-*`, `px-*`, `py-*`, ... |
| margin | 245 | `m-*`, `mx-*`, `my-*`, ... |
| height | 24 | `h-*` |
| max-height | 35 | `max-h-*` |
| max-width | 35 | `max-w-*` |
| opacity | 21 | `opacity-*` |
| stroke-width | 11 | `stroke-*` |
| **Total** | **1,788** | across 16 collections |

---

## Maintenance

Regenerate `DESIGN.md` from `variables-export.json` whenever:

- New Figma variables are added or renamed
- A semantic alias (e.g. `--primary`) changes its underlying primitive
- A new collection is added to Figma

After regeneration:

1. Diff old vs new `DESIGN.md`; flag breaking renames
2. If semantic tokens changed, update consuming projects' `globals.css`

> Never edit token values by hand — always regenerate from the export.

---

## Documentation map

| Need | File |
|---|---|
| What color class to use | `DESIGN.md` Part A → A1 |
| Tailwind prefix rules | `DESIGN.md` Part A → A2 |
| Font setup | `DESIGN.md` Part A → A3 |
| `globals.css` template | `DESIGN.md` Part A → A4 |
| Server vs Client decision | `SKILL.md` Step 1 |
| Route file conventions | `SKILL.md` Step 2 |
| Which shadcn component | `SKILL.md` Step 4 decision tree |
| Loading / error / empty UI | `SKILL.md` Step 7 |
| Accessibility checklist | `SKILL.md` Step 8 |
| Output format | `SKILL.md` Step 9 |
| Extending the design system | `SKILL.md` Step 10 |
| Deep token tables | `DESIGN.md` Part B Sections 2–17 |

---

## License

Not specified.
