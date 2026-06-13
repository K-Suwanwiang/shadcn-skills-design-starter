import { PageHeader } from "@/components/docs/page-header"
import { SemanticColorRow } from "@/components/docs/semantic-color-row"
import { ColorPalette } from "@/components/docs/color-palette"
import { Separator } from "@/components/ui/separator"
import {
  semanticColors,
  tailwindPalette,
  radixPalette,
} from "@/lib/tokens"

const totalSemantic = semanticColors.length
const totalTailwind = tailwindPalette.reduce(
  (sum, p) => sum + p.scale.length,
  0
)
const totalRadix = radixPalette.reduce((sum, p) => sum + p.scale.length, 0)

const semanticGroups: {
  name: string
  description: string
  tokens: string[]
}[] = [
  {
    name: "Surfaces",
    description:
      "Foundation surfaces for layouts, cards, and elevated overlays.",
    tokens: [
      "background",
      "foreground",
      "card",
      "card-foreground",
      "popover",
      "popover-foreground",
    ],
  },
  {
    name: "Brand & Variants",
    description:
      "Primary action color, muted backgrounds, accents, and destructive state.",
    tokens: [
      "primary",
      "primary-foreground",
      "secondary",
      "secondary-foreground",
      "muted",
      "muted-foreground",
      "accent",
      "accent-foreground",
      "destructive",
    ],
  },
  {
    name: "Form & UI",
    description: "Borders, inputs, and focus rings used by controls.",
    tokens: ["border", "input", "ring"],
  },
  {
    name: "Charts",
    description: "Data-visualization palette (Radix blue 8–12).",
    tokens: ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"],
  },
  {
    name: "Sidebar",
    description: "Scoped tokens for left navigation surfaces.",
    tokens: [
      "sidebar",
      "sidebar-foreground",
      "sidebar-primary",
      "sidebar-primary-foreground",
      "sidebar-accent",
      "sidebar-accent-foreground",
      "sidebar-border",
      "sidebar-ring",
    ],
  },
  {
    name: "Custom",
    description: "Project-specific surfaces beyond the shadcn defaults.",
    tokens: [
      "background-color",
      "semantic-background",
      "semantic-foreground",
      "semantic-border",
    ],
  },
]

const byName = new Map(semanticColors.map((c) => [c.name, c]))

export default function ColorsPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        title="Colors"
        description={`All color tokens defined in DESIGN.md — ${
          totalSemantic + totalTailwind + totalRadix
        } values across 3 collections.`}
      />

      <section className="space-y-6">
        <header className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Semantic Tokens
          </h2>
          <p className="text-sm text-muted-foreground">
            {totalSemantic} CSS variables consumed by every shadcn/ui component.
            Each token has a light and dark alias. Always reference these in
            code — never raw colors.
          </p>
        </header>

        <div className="space-y-8">
          {semanticGroups.map((group) => (
            <div key={group.name} className="space-y-3">
              <div className="space-y-0.5">
                <h3 className="text-base font-semibold text-foreground">
                  {group.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {group.description}
                </p>
              </div>
              <div className="divide-y divide-border overflow-hidden rounded-lg border border-border bg-card">
                {group.tokens.map((name) => {
                  const token = byName.get(name)
                  if (!token) return null
                  return <SemanticColorRow key={token.name} token={token} />
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      <section className="space-y-8">
        <header className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Tailwind Palette
          </h2>
          <p className="text-sm text-muted-foreground">
            {totalTailwind} primitive colors from the default Tailwind palette.
            Used only as aliases by semantic tokens — do not reference these
            directly in components.
          </p>
        </header>
        <div className="space-y-8">
          {tailwindPalette.map((p) => (
            <ColorPalette key={p.family} palette={p} />
          ))}
        </div>
      </section>

      <Separator />

      <section className="space-y-8">
        <header className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Radix UI Palette
          </h2>
          <p className="text-sm text-muted-foreground">
            {totalRadix} colors from the Radix UI color scale — covers
            saturation-paired families plus black/white alpha. Used by{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs text-foreground">
              --chart-*
            </code>{" "}
            and semantic tokens in dark mode.
          </p>
        </header>
        <div className="space-y-8">
          {radixPalette.map((p) => (
            <ColorPalette key={p.family} palette={p} />
          ))}
        </div>
      </section>
    </div>
  )
}
