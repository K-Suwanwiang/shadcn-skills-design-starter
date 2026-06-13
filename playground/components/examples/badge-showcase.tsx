import { CircleCheckIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"

export function BadgeShowcase() {
  return (
    <div className="grid w-full max-w-[225px] grid-cols-2 gap-3">
      <div className="flex items-center">
        <Badge className="rounded-lg px-2.5 py-0.5 text-xs">Badge</Badge>
      </div>
      <div className="flex items-center">
        <Badge variant="secondary" className="rounded-lg px-2.5 py-0.5 text-xs">
          Secondary
        </Badge>
      </div>

      <div className="flex items-center">
        <Badge
          className="rounded-lg bg-destructive px-2.5 py-0.5 text-xs text-white"
        >
          Destructive
        </Badge>
      </div>
      <div className="flex items-center">
        <Badge variant="outline" className="rounded-lg px-2.5 py-0.5 text-xs">
          Outline
        </Badge>
      </div>

      <div className="flex items-center">
        <Badge className="gap-1 rounded-lg px-2.5 py-0.5 text-xs">
          <CircleCheckIcon className="size-3" />
          Verified
        </Badge>
      </div>
      <div className="flex items-center">
        <Badge className="size-5 rounded-full p-0 text-xs">8</Badge>
      </div>

      <div className="flex items-center">
        <Badge className="h-5 rounded-full bg-destructive px-1 py-0 text-xs text-white">
          99
        </Badge>
      </div>
      <div className="flex items-center">
        <Badge
          variant="outline"
          className="h-5 rounded-full px-1 py-0 font-mono text-xs"
        >
          20+
        </Badge>
      </div>
    </div>
  )
}
