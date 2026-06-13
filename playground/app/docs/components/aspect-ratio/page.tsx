import { PageHeader } from "@/components/docs/page-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { AspectRatioImage } from "@/components/examples/aspect-ratio-image"

const source = `import { AspectRatio } from "@/components/ui/aspect-ratio"

export function AspectRatioImage() {
  return (
    <div className="w-full max-w-[598px]">
      <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg">
        <div
          aria-hidden="true"
          className="size-full bg-gradient-to-br from-zinc-100 via-zinc-200 to-zinc-400"
        />
      </AspectRatio>
    </div>
  )
}`

export default function AspectRatioDocsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <PageHeader
        title="Aspect Ratio"
        description="Displays content within a desired ratio. Sourced from Figma node 1098:925."
      />

      <ComponentPreview preview={<AspectRatioImage />} code={source} />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Design notes</h2>
        <ul className="ml-6 list-disc space-y-2 text-sm text-muted-foreground leading-6">
          <li>
            Ratio fixed at{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
              16 / 9
            </code>{" "}
            to match the 598 × 336.38 frame in Figma.
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
              rounded-lg
            </code>{" "}
            applied on the wrapper and a CSS gradient stands in for the source
            photo — the primitive controls only the ratio.
          </li>
        </ul>
      </section>
    </div>
  )
}
