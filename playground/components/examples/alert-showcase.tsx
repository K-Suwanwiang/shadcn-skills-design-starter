import {
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
        <AlertTitle>This Alert has a title and an icon. No description.</AlertTitle>
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
}
