import { PageHeader } from "@/components/docs/page-header"
import { ColorMatchTool } from "@/components/docs/color-match-tool"

export default function ColorMatchPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <PageHeader
        title="Color Match"
        description="Paste any hex color (typically from a Figma frame) to find the closest matching design tokens — semantic, Tailwind, or Radix UI."
      />

      <ColorMatchTool />

      <section className="space-y-3">
        <h2 className="text-base font-semibold tracking-tight">How it works</h2>
        <ul className="ml-6 list-disc space-y-1 text-sm text-muted-foreground leading-6">
          <li>
            Input is parsed as <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs text-foreground">#RGB</code>,{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs text-foreground">#RRGGBB</code>, or{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs text-foreground">#RRGGBBAA</code>.
          </li>
          <li>
            Distance is computed against{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs text-foreground">semanticColors</code>{" "}
            (light + dark variants), the full Tailwind palette, and the Radix UI scale — roughly 710 candidates.
          </li>
          <li>
            Similarity uses the{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs text-foreground">redmean</code>{" "}
            weighted-Euclidean approximation — fast, no dependencies, and perceptually closer than raw RGB distance.
          </li>
          <li>
            A 100% match means the candidate&apos;s hex value is identical to the input.
          </li>
        </ul>
      </section>
    </div>
  )
}
