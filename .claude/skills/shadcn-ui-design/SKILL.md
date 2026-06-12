# SKILL.md — Build UI with Shadcn UI + Tailwind CSS + Next.js App Router

> Always read `DESIGN.md Part A` before generating any UI code.

---

## Skill Trigger

Invoke this skill when the user asks to:
- Create a page, screen, or layout
- Build a UI component or design pattern
- Convert a wireframe or description into code
- Review or improve existing UI code
- Extend the design system

---

## Step 0 — Read Before Writing

1. **`DESIGN.md` Part A** — Token quick reference, Tailwind prefix rules, font setup, globals.css template.
2. **`DESIGN.md` Part B** — Full token tables (Section 2–17) for deep lookups.
3. **`components/ui/`** — Which shadcn components are already installed.
4. **`components.json`** — Confirm `aliases.utils`, path aliases (`@/`), and `cssVariables: true`.

> Never invent design tokens. Use only what is defined in `DESIGN.md`.

---

## Step 1 — Server vs Client Component

**Default: Server Component.** Add `"use client"` only when required.

| Needs | Component type |
|---|---|
| Data fetching, DB queries, async/await at top level | Server Component (default) |
| `useState`, `useEffect`, `useReducer`, `useRef` | Client Component |
| Browser APIs (`window`, `localStorage`, `navigator`) | Client Component |
| Event handlers (`onClick`, `onChange`, `onSubmit`) | Client Component |
| All interactive shadcn components (Dialog, Sheet, Form, Toast, etc.) | Client Component |
| `useRouter`, `usePathname`, `useSearchParams` | Client Component |
| Non-interactive display (Card, Table rows, Badge, Avatar) fed server data | Server Component |

### Pattern — keep Server Components at the top, push interactivity down

```tsx
// app/dashboard/page.tsx  ← Server Component (no directive)
import { UserCard } from "@/components/dashboard/user-card"

export default async function DashboardPage() {
  const user = await fetchUser()           // server-side fetch
  return <UserCard user={user} />
}

// components/dashboard/user-card.tsx  ← Client Component (only because of onClick)
"use client"
import { Button } from "@/components/ui/button"

export function UserCard({ user }: { user: User }) {
  return (
    <div>
      <p>{user.name}</p>
      <Button onClick={() => signOut()}>Sign out</Button>
    </div>
  )
}
```

---

## Step 2 — App Router File Conventions

### Special files (Next.js App Router)

| File | Purpose | Notes |
|---|---|---|
| `page.tsx` | Route UI, publicly accessible | Default export required |
| `layout.tsx` | Shared shell wrapping child routes | Persists across navigations |
| `loading.tsx` | Streaming skeleton shown while page suspends | Auto-wrapped in `<Suspense>` |
| `error.tsx` | Error boundary for the route segment | Must be `"use client"` |
| `not-found.tsx` | 404 UI for `notFound()` calls | Server Component |
| `template.tsx` | Like layout but re-mounts on navigation | Use rarely |

### Route structure

```
app/
├── layout.tsx              ← root layout (html + body + fonts + providers)
├── page.tsx                ← home route /
├── globals.css
├── (marketing)/            ← route group, no URL segment
│   ├── about/page.tsx      ← /about
│   └── pricing/page.tsx    ← /pricing
├── (dashboard)/
│   ├── layout.tsx          ← dashboard shell (sidebar, nav)
│   ├── dashboard/page.tsx  ← /dashboard
│   └── settings/page.tsx   ← /settings
└── api/
    └── [...route]/route.ts ← API routes
```

### File naming rules

| Content | Path pattern |
|---|---|
| Route page | `app/[segment]/page.tsx` |
| Route layout | `app/[segment]/layout.tsx` |
| Route loading state | `app/[segment]/loading.tsx` |
| Route error boundary | `app/[segment]/error.tsx` |
| shadcn primitive (auto-generated) | `components/ui/[name].tsx` |
| Composed feature component | `components/[feature]/[name].tsx` |
| Shared hook | `hooks/use-[name].ts` |
| Server action | `app/[segment]/actions.ts` |
| Type definitions | `types/[domain].ts` |

---

## Step 3 — Next.js-Specific Imports

Always use Next.js built-ins over plain HTML equivalents.

### Navigation — `next/link`

```tsx
import Link from "next/link"

// Internal navigation — always use Link, never <a href="">
<Link href="/dashboard">Go to Dashboard</Link>

// With shadcn Button
<Button asChild>
  <Link href="/settings">Settings</Link>
</Button>
```

### Images — `next/image`

```tsx
import Image from "next/image"

// Always provide width + height (or fill + parent position:relative)
<Image
  src="/avatar.png"
  alt="User avatar"
  width={40}
  height={40}
  className="rounded-full"
/>

// Fill mode for unknown dimensions
<div className="relative h-48 w-full">
  <Image src={coverUrl} alt="Cover" fill className="object-cover rounded-lg" />
</div>
```

### Navigation hooks — `next/navigation` (Client only)

```tsx
"use client"
import { useRouter, usePathname, useSearchParams } from "next/navigation"

const router = useRouter()
router.push("/dashboard")
router.replace("/login")

const pathname = usePathname()          // "/dashboard/settings"
const searchParams = useSearchParams()  // URLSearchParams
```

### Server-side navigation

```ts
// In Server Components or Server Actions — never useRouter
import { redirect, notFound } from "next/navigation"

redirect("/login")   // 307 redirect
notFound()           // triggers not-found.tsx
```

### Metadata API

```ts
// app/dashboard/page.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your overview",
}
```

---

## Step 4 — Select the Right shadcn Component

### Decision Tree

```
Need user input?
  ├── Single value → Input / Select / Checkbox / Switch / Slider
  ├── Multiple fields → Form (React Hook Form + Zod) + FormField
  └── File upload → Input type="file" + custom drop zone

Displaying content?
  ├── Grouped info → Card (CardHeader + CardContent + CardFooter)
  ├── Tabular data → Table (with sorting: DataTable pattern)
  ├── Expandable sections → Accordion
  ├── Stepped content → Tabs
  └── Stats / metrics → Card + Badge

Needs navigation?
  ├── Top-level → NavigationMenu / Menubar
  ├── Side panel → Sheet (mobile) / Sidebar (desktop)
  ├── Path context → Breadcrumb
  └── Page sections → Tabs

Feedback / status?
  ├── Persistent / page-level → Alert (variant: destructive / default)
  ├── Transient → Sonner (`import { toast } from "sonner"`)
  ├── Loading → Skeleton  or  loading.tsx
  └── Progress → Progress component

Overlay / modal?
  ├── Confirmation → AlertDialog
  ├── Complex form → Dialog
  ├── Side panel → Sheet
  └── Inline info → Tooltip / Popover / HoverCard
```

### Install command

```bash
pnpm dlx shadcn@latest add [component-name]
# Example:
pnpm dlx shadcn@latest add button card form input table dialog
```

---

## Step 5 — Layout & Composition

### Root layout with fonts (Next.js)

```tsx
// app/layout.tsx
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" })

export const metadata: Metadata = { title: "App", description: "..." }

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

### Nested layout (e.g. dashboard shell)

```tsx
// app/(dashboard)/layout.tsx
import { Sidebar } from "@/components/layout/sidebar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-8">
          {children}
        </div>
      </main>
    </div>
  )
}
```

### Page wrapper pattern

```tsx
<div className="space-y-6">
  <div>
    <h1 className="text-3xl font-semibold tracking-tight">Title</h1>
    <p className="text-muted-foreground mt-1">Description</p>
  </div>
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {/* content */}
  </div>
</div>
```

### Card pattern

```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Supporting text</CardDescription>
  </CardHeader>
  <CardContent>{/* content */}</CardContent>
  <CardFooter className="flex justify-end gap-2">
    <Button variant="outline">Cancel</Button>
    <Button>Confirm</Button>
  </CardFooter>
</Card>
```

### Form pattern (React Hook Form + Zod)

```tsx
"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const schema = z.object({ email: z.string().email() })
type Values = z.infer<typeof schema>

export function MyForm() {
  const form = useForm<Values>({ resolver: zodResolver(schema) })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl><Input placeholder="you@example.com" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
```

---

## Step 6 — Styling Rules

### Must follow

- Use **semantic tokens** from `DESIGN.md Part A` — never raw Tailwind colors.
- Use `cn()` from `@/lib/utils` to compose conditional classes.
- Use `gap-*` / `space-y-*` for spacing — not manual `mt-` / `mb-` on every element.
- Responsive-first: `md:` tablet, `lg:` desktop. Never desktop-first.
- Dark mode is automatic via CSS variable inversion — no `dark:` prefix needed on token-based classes.

### Must not do

- No `!important` or inline `style={{}}` for theming.
- No hardcoded colors (`text-zinc-500`) when a semantic token exists (`text-muted-foreground`).
- No override of shadcn component internals — extend via `className` prop only.

### `cn()` usage

```tsx
import { cn } from "@/lib/utils"

<div className={cn(
  "base-classes",
  isActive && "bg-accent text-accent-foreground",
  variant === "outline" && "border-border bg-transparent",
)} />
```

---

## Step 7 — State Handling

### Component-level states

| State | Implementation |
|---|---|
| **Loading** | `<Skeleton className="h-4 w-full" />` — match content shape |
| **Empty** | `<EmptyState>` with icon + heading + optional CTA |
| **Error (inline)** | `<Alert variant="destructive">` |
| **Success** | `import { toast } from "sonner"; toast.success("Saved")` |
| **Disabled** | `disabled` prop on controls; `opacity-50 pointer-events-none` on wrappers |
| **Pending** | `<Button disabled><Loader2 className="mr-2 h-4 w-4 animate-spin" />Saving…</Button>` |

### Route-level states (Next.js)

**`loading.tsx`** — shown automatically while the page segment suspends:

```tsx
// app/dashboard/loading.tsx  ← Server Component, no "use client"
import { Skeleton } from "@/components/ui/skeleton"

export default function DashboardLoading() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-8 w-48" />
      <div className="grid gap-4 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-32 w-full rounded-lg" />
        ))}
      </div>
    </div>
  )
}
```

**`error.tsx`** — catches runtime errors in the segment:

```tsx
// app/dashboard/error.tsx  ← must be "use client"
"use client"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="space-y-4">
      <Alert variant="destructive">
        <AlertTitle>Something went wrong</AlertTitle>
        <AlertDescription>{error.message}</AlertDescription>
      </Alert>
      <Button onClick={reset} variant="outline">Try again</Button>
    </div>
  )
}
```

**Suspense boundary** — for partial loading within a page:

```tsx
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"

export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
      <Suspense fallback={<Skeleton className="h-48 w-full" />}>
        <SlowDataComponent />
      </Suspense>
    </div>
  )
}
```

---

## Step 8 — Accessibility Checklist

- [ ] Every `<Input>` has a paired `<Label>` with matching `htmlFor` / `id`.
- [ ] Icon-only buttons have `<span className="sr-only">Description</span>`.
- [ ] Dialogs include `<DialogTitle>` (visually hidden is fine via `<VisuallyHidden>`).
- [ ] All `<Image>` tags have descriptive `alt`; decorative images use `alt=""`.
- [ ] Focus order follows reading order — no `tabIndex > 0`.
- [ ] Color contrast ≥ 4.5:1 for body text, ≥ 3:1 for large text.
- [ ] Interactive elements not behind `pointer-events-none` unless visually disabled.

---

## Step 9 — Output Format

When generating UI code, always output in this order:

1. **Install command** — `pnpm dlx shadcn@latest add ...` for any new shadcn components.
2. **Component file** — full TSX with directive (`"use client"` if needed), imports, types, component.
3. **Usage example** — minimal snippet showing how to place the component in a page/layout.
4. **Design notes** — 1–3 bullets on non-obvious token or layout choices only.

---

## Step 10 — Design System Extension

### Adding a new CSS token

1. Add to `globals.css` inside `:root` and `.dark` using oklch values.
2. Expose to Tailwind: `@theme inline { --color-brand: var(--brand); }`.
3. Document in **DESIGN.md Part B, Section 2** (shadcn/ui collection) with Light/Dark aliases.

### Adding a new component variant

1. Use `cva()` — do not duplicate component files.
2. Document variant name, purpose, and usage — add a new section after DESIGN.md Part B Section 17.

```tsx
const buttonVariants = cva("...", {
  variants: {
    variant: {
      brand: "bg-[--brand] text-[--brand-foreground] hover:bg-[--brand]/90",
    },
  },
})
```

---

## Quick Reference — Most Used Components

| Component | Install | Import |
|---|---|---|
| Button | `add button` | `@/components/ui/button` |
| Input | `add input` | `@/components/ui/input` |
| Card | `add card` | `@/components/ui/card` |
| Dialog | `add dialog` | `@/components/ui/dialog` |
| Form | `add form` | `@/components/ui/form` |
| Select | `add select` | `@/components/ui/select` |
| Table | `add table` | `@/components/ui/table` |
| Tabs | `add tabs` | `@/components/ui/tabs` |
| Toast | `add sonner` | `@/components/ui/sonner` |
| Badge | `add badge` | `@/components/ui/badge` |
| Skeleton | `add skeleton` | `@/components/ui/skeleton` |
| Alert | `add alert` | `@/components/ui/alert` |
| Sheet | `add sheet` | `@/components/ui/sheet` |
| Dropdown | `add dropdown-menu` | `@/components/ui/dropdown-menu` |
| Avatar | `add avatar` | `@/components/ui/avatar` |
| Separator | `add separator` | `@/components/ui/separator` |
| Tooltip | `add tooltip` | `@/components/ui/tooltip` |
| Popover | `add popover` | `@/components/ui/popover` |
| Sidebar | `add sidebar` | `@/components/ui/sidebar` |
| Chart | `add chart` | `@/components/ui/chart` |

---

## Anti-patterns to Avoid

| Anti-pattern | Correct approach |
|---|---|
| `<a href="/dashboard">` | `<Link href="/dashboard">` from `next/link` |
| `<img src="...">` | `<Image>` from `next/image` with `width` + `height` |
| `useRouter().push()` in Server Component | `redirect()` from `next/navigation` |
| `fetch` inside `useEffect` for initial data | Async Server Component with direct `await fetch()` |
| `"use client"` on every file | Only files that need hooks, browser APIs, or event handlers |
| `text-zinc-500` for secondary text | `text-muted-foreground` (`zinc` is a primitive in DESIGN.md Part B Section 3) |
| Raw color class (`bg-neutral-900`) | Semantic token class (`bg-primary`) |
| Custom modal from scratch | `<Dialog>` from shadcn |
| `useEffect` for form validation | React Hook Form + Zod schema |
| Nested ternaries in `className` | `cn()` with named conditions |
| `<div onClick={...}>` as button | `<Button>` or `<Button asChild>` |
| Separate component versions for dark mode | CSS variable token inversion (automatic) |
