import { PageHeader } from "@/components/docs/page-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { AlertShowcase } from "@/components/examples/alert-showcase"

const alertShowcaseSource = `import {
  CircleAlertIcon,
  CircleCheckIcon,
  TrashIcon,
} from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"

export function AlertShowcase() {
  return (
    <div className="w-full max-w-[720px] space-y-6">
      <Alert className="gap-x-3 bg-background px-4 py-3">
        <CircleCheckIcon aria-hidden="true" />
        <AlertTitle>Success! Your changes have been saved</AlertTitle>
        <AlertDescription className="font-light text-foreground">
          This is an alert with icon, title and description.
        </AlertDescription>
      </Alert>

      <Separator />

      <Alert className="gap-x-3 bg-background px-4 py-3">
        <TrashIcon aria-hidden="true" />
        <AlertTitle>
          This Alert has a title and an icon. No description.
        </AlertTitle>
      </Alert>

      <Separator />

      <Alert variant="destructive" className="gap-x-3 bg-background px-4 py-3">
        <CircleAlertIcon aria-hidden="true" />
        <AlertTitle>Unable to process your payment.</AlertTitle>
        <AlertDescription className="font-light">
          <p>Please verify your billing information and try again.</p>
          <ul className="list-disc space-y-0.5 pl-5">
            <li>Check your card details</li>
            <li>Ensure sufficient funds</li>
            <li>Verify billing address</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  )
}`

export default function AlertDocsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <PageHeader
        title="Alert"
        description="Displays a callout for user attention. Sourced from Figma node 73:3398."
      />

      <ComponentPreview
        preview={<AlertShowcase />}
        code={alertShowcaseSource}
      />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Design notes</h2>
        <ul className="ml-6 list-disc space-y-2 text-sm text-muted-foreground leading-6">
          <li>
            Padding overridden to{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
              px-4 py-3
            </code>{" "}
            and icon gap to{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
              gap-x-3
            </code>{" "}
            to land on the dimensions in the Figma source.
          </li>
          <li>
            Description weight set to{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
              font-light
            </code>{" "}
            (300) — Figma uses Inter Light for the supporting text, while the
            title stays at Inter Medium (500).
          </li>
          <li>
            The destructive variant relies on the shadcn primitive&apos;s built-in{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
              variant=&quot;destructive&quot;
            </code>{" "}
            — turns title, icon, and description red via the{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
              --destructive
            </code>{" "}
            token (matches{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
              #DC2626
            </code>
            ).
          </li>
        </ul>
      </section>
    </div>
  )
}
