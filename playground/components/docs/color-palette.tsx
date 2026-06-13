import type { PrimitivePalette } from "@/lib/tokens"
import { ColorSwatch } from "@/components/docs/color-swatch"

export function ColorPalette({ palette }: { palette: PrimitivePalette }) {
  return (
    <div className="space-y-3">
      <h3 className="text-base font-semibold capitalize text-foreground">
        {palette.family}
      </h3>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 xl:grid-cols-12">
        {palette.scale.map((stop) => (
          <ColorSwatch
            key={`${palette.family}-${stop.name}`}
            name={stop.name}
            value={stop.value}
          />
        ))}
      </div>
    </div>
  )
}
