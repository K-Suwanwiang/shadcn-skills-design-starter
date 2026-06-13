"use client"

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
}
