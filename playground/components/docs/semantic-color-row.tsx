import type { SemanticColor } from "@/lib/tokens"

const checker = {
  backgroundImage:
    "linear-gradient(45deg, #e5e5e5 25%, transparent 25%), linear-gradient(-45deg, #e5e5e5 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e5e5e5 75%), linear-gradient(-45deg, transparent 75%, #e5e5e5 75%)",
  backgroundSize: "10px 10px",
  backgroundPosition: "0 0, 0 5px, 5px -5px, -5px 0",
}

export function SemanticColorRow({ token }: { token: SemanticColor }) {
  return (
    <div className="grid grid-cols-[88px_minmax(0,1fr)] items-center gap-4 px-4 py-3 transition-colors hover:bg-muted/40 sm:grid-cols-[120px_minmax(0,1fr)_minmax(0,260px)] sm:gap-6">
      <div
        className="flex h-10 overflow-hidden rounded-md border border-border"
        style={checker}
      >
        <div
          className="flex-1"
          style={{ backgroundColor: token.light }}
          aria-label={`Light ${token.light}`}
        />
        <div
          className="flex-1"
          style={{ backgroundColor: token.dark }}
          aria-label={`Dark ${token.dark}`}
        />
      </div>

      <div className="min-w-0 space-y-0.5">
        <p className="truncate font-mono text-sm font-medium text-foreground">
          {token.variable}
        </p>
        <p className="truncate font-mono text-xs text-muted-foreground">
          {token.tailwind}
        </p>
      </div>

      <dl className="col-span-2 grid grid-cols-2 gap-x-4 border-t border-border pt-2 font-mono text-xs sm:col-span-1 sm:border-0 sm:pt-0 sm:text-right">
        <div className="flex flex-col gap-0.5 sm:items-end">
          <dt className="text-[10px] uppercase tracking-wide text-muted-foreground">
            Light
          </dt>
          <dd className="truncate uppercase text-foreground">{token.light}</dd>
        </div>
        <div className="flex flex-col gap-0.5 sm:items-end">
          <dt className="text-[10px] uppercase tracking-wide text-muted-foreground">
            Dark
          </dt>
          <dd className="truncate uppercase text-foreground">{token.dark}</dd>
        </div>
      </dl>
    </div>
  )
}
