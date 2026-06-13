import { AspectRatio } from "@/components/ui/aspect-ratio"

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
}
