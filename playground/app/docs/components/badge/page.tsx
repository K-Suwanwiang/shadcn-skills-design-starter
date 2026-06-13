import { PageHeader } from "@/components/docs/page-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { BadgeShowcase } from "@/components/examples/badge-showcase"

const source = `import { CircleCheckIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"

export function BadgeShowcase() {
  return (
    <div className="grid w-full max-w-[225px] grid-cols-2 gap-3">
      <Badge className="rounded-lg px-2.5 py-0.5 text-xs">Badge</Badge>
      <Badge variant="secondary" className="rounded-lg px-2.5 py-0.5 text-xs">
        Secondary
      </Badge>

      <Badge className="rounded-lg bg-destructive px-2.5 py-0.5 text-xs text-white">
        Destructive
      </Badge>
      <Badge variant="outline" className="rounded-lg px-2.5 py-0.5 text-xs">
        Outline
      </Badge>

      <Badge className="gap-1 rounded-lg px-2.5 py-0.5 text-xs">
        <CircleCheckIcon className="size-3" />
        Verified
      </Badge>
      <Badge className="size-5 rounded-full p-0 text-xs">8</Badge>

      <Badge className="h-5 rounded-full bg-destructive px-1 py-0 text-xs text-white">
        99
      </Badge>
      <Badge
        variant="outline"
        className="h-5 rounded-full px-1 py-0 font-mono text-xs"
      >
        20+
      </Badge>
    </div>
  )
}`

export default function BadgeDocsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <PageHeader
        title="Badge"
        description="Displays a badge or a component that looks like a badge — eight variants covering labels, numeric counters, and an icon pill. Sourced from Figma node 73:3479."
      />

      <ComponentPreview preview={<BadgeShowcase />} code={source} />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Design notes</h2>
        <ul className="ml-6 list-disc space-y-2 text-sm text-muted-foreground leading-6">
          <li>
            The primitive&apos;s default radius is{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
              rounded-4xl
            </code>
            ; label variants override to{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
              rounded-lg
            </code>{" "}
            (8px) to match Figma — number variants flip to{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
              rounded-full
            </code>{" "}
            for pill / circular shapes.
          </li>
          <li>
            Destructive uses{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
              bg-destructive text-white
            </code>{" "}
            (solid red + 95% white) instead of the primitive&apos;s{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
              bg-destructive/10 text-destructive
            </code>{" "}
            soft style — matches the Figma intent.
          </li>
          <li>
            The Secondary number badge uses{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
              font-mono
            </code>{" "}
            (Geist Mono) per Figma — useful for tabular counts.
          </li>
        </ul>
      </section>
    </div>
  )
}
