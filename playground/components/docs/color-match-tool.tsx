"use client"

import { useMemo, useState } from "react"

import { cn } from "@/lib/utils"
import {
  findMatches,
  parseHex,
  sourceLabels,
  type ColorMatch,
} from "@/lib/color-match"

const checker = {
  backgroundImage:
    "linear-gradient(45deg, #e5e5e5 25%, transparent 25%), linear-gradient(-45deg, #e5e5e5 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e5e5e5 75%), linear-gradient(-45deg, transparent 75%, #e5e5e5 75%)",
  backgroundSize: "12px 12px",
  backgroundPosition: "0 0, 0 6px, 6px -6px, -6px 0",
}

function normalizeHexFromPicker(value: string) {
  // <input type="color"> always returns 7-char #RRGGBB lowercased
  return value.toUpperCase()
}

export function ColorMatchTool() {
  const [input, setInput] = useState("#7C3AED")
  const trimmed = input.trim()
  const parsed = parseHex(trimmed)
  const isValid = parsed !== null

  const matches = useMemo(
    () => (isValid ? findMatches(trimmed, 12) : []),
    [trimmed, isValid]
  )

  const pickerValue = isValid && parsed
    ? `#${[parsed.r, parsed.g, parsed.b]
        .map((n) => n.toString(16).padStart(2, "0"))
        .join("")}`
    : "#000000"

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="grid grid-cols-[80px_minmax(0,1fr)] gap-3 sm:grid-cols-[120px_minmax(0,1fr)]">
          <div
            className="overflow-hidden rounded-lg border border-border"
            style={checker}
          >
            <div
              className="h-full w-full"
              style={{
                backgroundColor: isValid ? trimmed : "transparent",
              }}
              aria-hidden="true"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="color-hex" className="sr-only">
              Hex color
            </label>
            <input
              id="color-hex"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="#7C3AED"
              spellCheck={false}
              autoComplete="off"
              className={cn(
                "h-10 rounded-md border border-input bg-background px-3 font-mono text-sm uppercase tracking-wide text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                input && !isValid && "border-destructive ring-destructive/30"
              )}
            />
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={pickerValue}
                onChange={(e) => setInput(normalizeHexFromPicker(e.target.value))}
                aria-label="Pick a color"
                className="h-8 w-10 cursor-pointer rounded-md border border-input bg-background p-0.5"
              />
              <p className="text-xs text-muted-foreground">
                {isValid
                  ? "Showing the 12 closest matching tokens."
                  : input
                    ? "Invalid hex value. Use #RGB, #RRGGBB, or #RRGGBBAA."
                    : "Paste a hex value from Figma (e.g. #7C3AED) to find matching tokens."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {isValid && matches.length > 0 && (
        <div className="divide-y divide-border overflow-hidden rounded-lg border border-border bg-card">
          {matches.map((match, i) => (
            <MatchRow key={`${match.source}-${match.label}-${i}`} match={match} />
          ))}
        </div>
      )}
    </div>
  )
}

function MatchRow({ match }: { match: ColorMatch }) {
  const exact = match.similarity === 100
  return (
    <div className="grid grid-cols-[56px_minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 transition-colors hover:bg-muted/40 sm:grid-cols-[72px_minmax(0,1fr)_auto] sm:gap-6">
      <div
        className="h-10 overflow-hidden rounded-md border border-border"
        style={checker}
      >
        <div
          className="h-full w-full"
          style={{ backgroundColor: match.hex }}
        />
      </div>

      <div className="min-w-0 space-y-0.5">
        <p className="truncate font-mono text-sm font-medium text-foreground">
          {match.variable ?? match.label}
        </p>
        <p className="truncate text-xs text-muted-foreground">
          {sourceLabels[match.source]}
          {match.tailwindClass ? (
            <>
              {" "}
              ·{" "}
              <code className="font-mono text-foreground">
                {match.tailwindClass}
              </code>
            </>
          ) : null}
        </p>
      </div>

      <div className="text-right">
        <p
          className={cn(
            "text-sm font-semibold tabular-nums",
            exact ? "text-foreground" : "text-muted-foreground"
          )}
        >
          {match.similarity}%
        </p>
        <p className="font-mono text-xs uppercase text-muted-foreground">
          {match.hex}
        </p>
      </div>
    </div>
  )
}
