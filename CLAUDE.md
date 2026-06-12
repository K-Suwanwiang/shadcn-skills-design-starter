# CLAUDE.md — `create-skill-design`

> Project memory loaded automatically into every Claude Code session in this directory.
> Keep this file **canonical, short, and current**. Detailed procedures live in `SKILL.md` and `DESIGN.md`.

---

## 1. What this repository is

A **Claude Code skill package** that teaches Claude to convert **Figma designs into production-ready Next.js + shadcn/ui + Tailwind v4 code** using a fixed design-token system exported from Figma.

This is **not** a Next.js application. It is a portable skill bundle (everything under `.claude/skills/shadcn-ui-design/`) intended to be copied or symlinked into any Next.js App Router project so that Claude has the design system context it needs.

---

## 2. Repository layout

```
create-skill-design/
├── CLAUDE.md                                  ← this file (project memory)
└── .claude/skills/shadcn-ui-design/
    ├── SKILL.md                               ← canonical procedural guide (single file, loaded as skill)
    ├── references/
    │   └── DESIGN.md                          ← canonical design-token reference (1,788 vars / 16 collections)
    ├── scripts/setup.sh                       ← scaffold helper
    └── assets/                                ← screenshots / examples
```

> Both `SKILL.md` and `DESIGN.md` live only inside `.claude/skills/shadcn-ui-design/`. No duplicates, no symlinks — edit them where they live.

**Source-of-truth hierarchy** (highest → lowest authority):
1. `DESIGN.md` — token values, names, light/dark aliases. **Never invent tokens; only use what's listed here.**
2. `SKILL.md` — procedures (server vs client, file conventions, output format).
3. Generated code in consuming projects — must conform to (1) and (2).

If `DESIGN.md` and `SKILL.md` disagree, **`DESIGN.md` wins** for any token / color / spacing question.

---

## 3. Mandatory read order before writing UI code

Every time the user requests UI generation:

1. `DESIGN.md` **Part A** — Sections A1 (semantic tokens), A2 (Tailwind prefix rules), A3 (font setup), A4 (globals.css template).
2. `SKILL.md` Step 1 — Server vs Client decision.
3. `components/ui/` in the **consuming project** — to know which shadcn primitives are already installed.
4. `components.json` in the consuming project — confirm `aliases.utils`, `@/` paths, `cssVariables: true`.

Only consult `DESIGN.md` **Part B** (Sections 2–17) for deep token lookups (chart palettes, semantic collection, radii, etc.).

---

## 4. Figma binding

**Bound Figma file:** _TBD — user to provide URL; update this section when received._

**Workflow direction:** **Figma → Code** (one-way). Code is the implementation; Figma is the source of design intent.

### Mandatory Figma flow

1. **Always invoke `/figma-use` skill first** before calling any `use_figma` / `get_design_context` tool. This is required by the Figma MCP server and the rules below depend on it.
2. Pull context with the appropriate tool:
   - `get_design_context` — structure, layout, layers, auto-layout metadata.
   - `get_screenshot` — visual reference for spacing, alignment, visual hierarchy.
   - `get_variable_defs` — Figma variables for the selection (cross-check against `DESIGN.md`).
   - `get_metadata` — frame/page hierarchy when navigating large files.
3. Map every Figma variable to its `DESIGN.md` Part A / Part B equivalent. **If a variable in Figma has no match in `DESIGN.md`, stop and flag it** — do not guess a Tailwind class.
4. Generate code per `SKILL.md` Step 9 output format (install command → file → usage → 1–3 design notes).
5. Do **not** use `use_figma`, `create_new_file`, `generate_figma_design`, or any Figma-write tool unless the user explicitly asks to push code back to Figma (workflow is one-way by default).

### Known source quirks to translate

- Any Figma variable typos found in the future: document them in `DESIGN.md` Part A note block and silently correct on output.

---

## 5. When to invoke the `shadcn-ui-design` skill

The skill auto-triggers when the user asks to:
- Create a page, screen, layout, or route
- Build a UI component or design pattern
- Convert a Figma frame, wireframe, or screenshot into code
- Review or improve existing UI code
- Extend the design system (new token, variant, component)

If unsure, **invoke the skill** — it costs nothing and ensures `DESIGN.md` is consulted.

---

## 6. Tech stack (for consuming projects)

| Layer | Choice |
|---|---|
| Framework | **Next.js 15+ App Router** (Server Components default) |
| Styling | **Tailwind CSS v4** with CSS variables (`@theme inline`) |
| Components | **shadcn/ui** (latest, `cssVariables: true`) |
| Language | **TypeScript strict mode** |
| Package manager | **pnpm** |
| Forms | React Hook Form + Zod |
| Icons | `lucide-react` (shipped with shadcn) |
| Fonts | `next/font/google` → Inter (sans) + Geist Mono (mono) |

Install shadcn primitives one-shot:
```bash
pnpm dlx shadcn@latest add [name]
```

---

## 7. Hard rules — Always / Never

### Always
- Use **semantic tokens** from `DESIGN.md` Part A (e.g. `bg-card`, `text-muted-foreground`, `border-border`).
- Default to **Server Components**; add `"use client"` only when needed (see `SKILL.md` Step 1 table).
- Use `next/link` for internal navigation, `next/image` for images, `next/font` for fonts.
- Use `cn()` from `@/lib/utils` to compose conditional classes.
- Output in the order: **install command → component file → usage snippet → ≤3 design notes**.
- Pair every `<Input>` with a `<Label>`; give icon-only `<Button>` an `<span className="sr-only">`.

### Never
- Hardcode colors (`bg-neutral-900`, `text-zinc-500`, `#0588F0`) when a semantic token exists.
- Use `<a href="">`, `<img>`, or `@import url(...)` for fonts.
- Call `useRouter()` from a Server Component — use `redirect()` / `notFound()` from `next/navigation`.
- Put `"use client"` on files that don't need hooks, browser APIs, or event handlers.
- Override shadcn internals; extend via `className` and `cva()` variants only.
- Invent design tokens. If `DESIGN.md` doesn't list it, **stop and ask**.
- Push code back to Figma unless the user explicitly requests it.

---

## 8. Figma → Code procedure (canonical)

```
1. User shares Figma frame URL or selects a node
2. /figma-use            ← MANDATORY skill invocation
3. get_design_context    ← structure + layout
4. get_screenshot        ← visual reference
5. get_variable_defs     ← Figma vars for selection
6. Cross-reference each variable against DESIGN.md Part A
   ├─ match found → use the semantic Tailwind class
   └─ no match    → flag to user, do not guess
7. Decide Server vs Client per SKILL.md Step 1
8. Pick shadcn components per SKILL.md Step 4 decision tree
9. Generate TSX following SKILL.md Step 9 output format
10. Verify a11y checklist (SKILL.md Step 8) before finishing
```

---

## 9. Using this skill inside another Next.js project

When a user wants to use this skill in their app:

1. Copy or symlink `.claude/skills/shadcn-ui-design/` into the target repo's `.claude/skills/`.
2. Copy `DESIGN.md` to the target repo root (or keep it in the skill's `references/`).
3. In the target repo's `app/globals.css`, paste the CSS variable block from `DESIGN.md` Part A → A4.
4. Initialize shadcn: `pnpm dlx shadcn@latest init` (choose `cssVariables: true`).
5. Verify `components.json` → `aliases.utils` resolves to `@/lib/utils`.

Optionally add a thin `CLAUDE.md` in the target repo that points to the skill:
```md
This project uses the shadcn-ui-design skill at .claude/skills/shadcn-ui-design/.
Design tokens canonical source: DESIGN.md (root).
```

---

## 10. Maintenance — when to regenerate `DESIGN.md`

Regenerate from `variables-export.json` whenever:
- New Figma variables are added or renamed.
- A semantic alias (e.g. `--primary`) changes its underlying primitive.
- A new collection is added to Figma.

After regeneration:
1. Diff old vs new `DESIGN.md`; flag breaking renames.
2. No mirror step needed — the file lives at a single location (`.claude/skills/shadcn-ui-design/references/DESIGN.md`).
3. If semantic tokens changed, update consuming projects' `globals.css`.

Do **not** edit token values in `DESIGN.md` by hand — always regenerate from the export.

---

## 11. Common anti-patterns (auto-reject during review)

| Anti-pattern | Correct approach |
|---|---|
| `<a href="/x">` | `<Link href="/x">` from `next/link` |
| `<img src="...">` | `<Image>` from `next/image` with `width`+`height` or `fill` |
| `useRouter().push()` in Server Component | `redirect()` from `next/navigation` |
| `fetch` in `useEffect` for initial data | `async` Server Component with direct `await fetch()` |
| `"use client"` on every file | Only when hooks / browser APIs / events are used |
| `text-zinc-500` for secondary text | `text-muted-foreground` |
| `bg-neutral-900` for surface | `bg-primary` or `bg-card` (per role) |
| Custom modal `<div>` | `<Dialog>` from shadcn |
| `useEffect` for form validation | React Hook Form + Zod |
| Nested ternaries in `className` | `cn()` with named conditions |
| `<div onClick={...}>` as button | `<Button>` or `<Button asChild>` |
| `dark:` prefix on token-based class | CSS variable inversion handles it automatically |

---

## 12. Quick reference — files to consult

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
| Adding new token / variant | `SKILL.md` Step 10 |
| Deep token table (rdx, primitives, sand, chart) | `DESIGN.md` Part B Sections 2–17 |
