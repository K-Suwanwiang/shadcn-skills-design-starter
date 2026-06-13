import { PageHeader } from "@/components/docs/page-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { AccountDeleteAlertDialog } from "@/components/examples/account-delete-alert-dialog"

const source = `"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export function AccountDeleteAlertDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={
          <Button
            variant="secondary"
            size="lg"
            className="rounded-md border border-border px-4"
          />
        }
      >
        Show dialog
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-[512px] rounded-lg border border-border bg-background p-6 ring-0 sm:max-w-[512px]">
        <AlertDialogHeader className="gap-y-2">
          <AlertDialogTitle className="text-lg font-semibold leading-7">
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="m-0 gap-2 border-t-0 bg-transparent p-0 sm:justify-end">
          <AlertDialogCancel size="lg">Cancel</AlertDialogCancel>
          <AlertDialogAction size="lg">Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`

export default function AlertDialogDocsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <PageHeader
        title="Alert Dialog"
        description="A modal dialog that interrupts the user with important content and expects a response. Sourced from Figma node 402:419."
      />

      <ComponentPreview
        preview={<AccountDeleteAlertDialog />}
        code={source}
      />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Design notes</h2>
        <ul className="ml-6 list-disc space-y-2 text-sm text-muted-foreground leading-6">
          <li>
            Trigger styled as a soft secondary button via{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
              variant=&quot;secondary&quot; size=&quot;lg&quot;
            </code>{" "}
            with{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
              rounded-md border border-border px-4
            </code>{" "}
            overrides to land on the 36px height, 6px radius, 16px horizontal padding from the Figma source.
          </li>
          <li>
            Content sized to{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
              max-w-[512px]
            </code>{" "}
            with{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
              p-6 rounded-lg bg-background border-border
            </code>{" "}
            and{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
              ring-0
            </code>{" "}
            to swap the primitive&apos;s 1px ring for a 1px border per the design.
          </li>
          <li>
            Title overridden to{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
              text-lg font-semibold leading-7
            </code>{" "}
            (Inter Semibold 18/28) — the primitive defaults to{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
              text-base font-medium
            </code>
            .
          </li>
          <li>
            Footer resets the primitive&apos;s{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
              -mx-4 -mb-4 bg-muted/50 border-t p-4
            </code>{" "}
            to a flush{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
              m-0 p-0 border-t-0 bg-transparent gap-2 sm:justify-end
            </code>{" "}
            row of buttons matching the Figma intent.
          </li>
          <li>
            Both footer buttons use{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
              size=&quot;lg&quot;
            </code>{" "}
            for the 36px height. Cancel keeps the primitive&apos;s default{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
              variant=&quot;outline&quot;
            </code>
            ; Continue uses the default variant (
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
              bg-primary text-primary-foreground
            </code>
            ).
          </li>
          <li>
            <strong>Known drift:</strong> the primitive&apos;s overlay renders{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
              bg-black/10 + backdrop-blur
            </code>
            ; the Figma source specifies{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
              bg-background-color
            </code>{" "}
            (rdx black/5 at 30% α — token already defined in{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
              DESIGN.md
            </code>{" "}
            A1). Override at the primitive level if pixel-perfect parity is required.
          </li>
        </ul>
      </section>
    </div>
  )
}
