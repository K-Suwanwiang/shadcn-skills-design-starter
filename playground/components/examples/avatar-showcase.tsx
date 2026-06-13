import {
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
          <AvatarFallback className="bg-gradient-to-br from-slate-400 to-slate-600 text-white">
            CD
          </AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback className="bg-gradient-to-br from-emerald-400 to-emerald-600 text-white">
            EF
          </AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback className="bg-foreground text-background">
            GH
          </AvatarFallback>
        </Avatar>
      </AvatarGroup>
    </div>
  )
}
