type ColorSwatchProps = {
  name: string
  value: string
  showFamily?: boolean
  family?: string
}

const checker = {
  backgroundImage:
    "linear-gradient(45deg, #e5e5e5 25%, transparent 25%), linear-gradient(-45deg, #e5e5e5 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e5e5e5 75%), linear-gradient(-45deg, transparent 75%, #e5e5e5 75%)",
  backgroundSize: "12px 12px",
  backgroundPosition: "0 0, 0 6px, 6px -6px, -6px 0",
}

export function ColorSwatch({
  name,
  value,
  family,
  showFamily = false,
}: ColorSwatchProps) {
  return (
    <div className="space-y-1.5">
      <div
        className="h-14 w-full overflow-hidden rounded-md border border-border"
        style={checker}
      >
        <div className="h-full w-full" style={{ backgroundColor: value }} />
      </div>
      <div className="min-w-0">
        <p className="truncate text-xs font-medium text-foreground">
          {showFamily && family ? `${family}/${name}` : name}
        </p>
        <p className="truncate font-mono text-[10px] uppercase text-muted-foreground">
          {value}
        </p>
      </div>
    </div>
  )
}
