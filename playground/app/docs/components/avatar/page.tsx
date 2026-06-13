import { PageHeader } from "@/components/docs/page-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { AvatarShowcase } from "@/components/examples/avatar-showcase"

const source = `import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
} from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export function AvatarShowcase() {
  return (
    <div className="w-full max-w-[492px] space-y-6">
      <Avatar>
        <AvatarFallback className="bg-gradient-to-br from-violet-400 to-fuchsia-500 text-white">
          KW
        </AvatarFallback>
      </Avatar>

      <Separator />

      <Avatar className="rounded-lg after:rounded-lg">
        <AvatarFallback className="rounded-lg bg-foreground text-background">
          AB
        </AvatarFallback>
      </Avatar>

      <Separator />

      <AvatarGroup>
        <Avatar>
          <AvatarFallback className="bg-gradient-to-br from-slate-400 to-slate-600 text-white">CD</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback className="bg-gradient-to-br from-emerald-400 to-emerald-600 text-white">EF</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback className="bg-foreground text-background">GH</AvatarFallback>
        </Avatar>
      </AvatarGroup>
    </div>
  )
}`

export default function AvatarDocsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <PageHeader
        title="Avatar"
        description="An image element with a fallback for representing the user — circle, square, and grouped variants. Sourced from Figma node 73:3473."
      />

      <ComponentPreview preview={<AvatarShowcase />} code={source} />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Design notes</h2>
        <ul className="ml-6 list-disc space-y-2 text-sm text-muted-foreground leading-6">
          <li>
            Square variant overrides{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
              rounded-full
            </code>{" "}
            on the root and its{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
              ::after
            </code>{" "}
            ring to{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
              rounded-lg
            </code>
            , and the fallback follows.
          </li>
          <li>
            Avatar group uses the primitive&apos;s{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
              -space-x-2
            </code>{" "}
            (the 8px overlap from Figma) and a{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
              ring-2 ring-background
            </code>{" "}
            border around each child.
          </li>
          <li>
            Fallbacks use gradient/solid tokens because the Figma references
            real portrait photos — swap for{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
              AvatarImage
            </code>{" "}
            with{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
              next/image
            </code>{" "}
            when wiring real users.
          </li>
        </ul>
      </section>
    </div>
  )
}
