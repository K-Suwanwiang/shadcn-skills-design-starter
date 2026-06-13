import { semanticColors, tailwindPalette, radixPalette } from "./tokens"

export type RGBA = { r: number; g: number; b: number; a: number }

export type CandidateSource =
  | "semantic-light"
  | "semantic-dark"
  | "tailwind"
  | "radix"

export type ColorCandidate = {
  source: CandidateSource
  label: string
  variable?: string
  tailwindClass?: string
  hex: string
}

export type ColorMatch = ColorCandidate & {
  distance: number
  similarity: number
}

export function parseHex(input: string): RGBA | null {
  const trimmed = input.trim()
  if (!trimmed) return null
  const raw = trimmed.startsWith("#") ? trimmed.slice(1) : trimmed
  let hex = raw
  if (!/^[0-9a-fA-F]+$/.test(hex)) return null
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((c) => c + c)
      .join("")
  } else if (hex.length === 4) {
    hex = hex
      .split("")
      .map((c) => c + c)
      .join("")
  }
  let r: number, g: number, b: number, a = 255
  if (hex.length === 6) {
    r = parseInt(hex.slice(0, 2), 16)
    g = parseInt(hex.slice(2, 4), 16)
    b = parseInt(hex.slice(4, 6), 16)
  } else if (hex.length === 8) {
    r = parseInt(hex.slice(0, 2), 16)
    g = parseInt(hex.slice(2, 4), 16)
    b = parseInt(hex.slice(4, 6), 16)
    a = parseInt(hex.slice(6, 8), 16)
  } else {
    return null
  }
  if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b)) return null
  return { r, g, b, a }
}

// Redmean color distance — a fast perceptual approximation that weights
// channels by where on the red axis the two colors sit. Max value ≈ 765
// (#FFFFFF vs #000000). Reference: https://www.compuphase.com/cmetric.htm
const MAX_DISTANCE = 765

function redmeanDistance(a: RGBA, b: RGBA): number {
  const rMean = (a.r + b.r) / 2
  const dr = a.r - b.r
  const dg = a.g - b.g
  const db = a.b - b.b
  const da = (a.a - b.a) / 255
  const rgb = Math.sqrt(
    (2 + rMean / 256) * dr * dr +
      4 * dg * dg +
      (2 + (255 - rMean) / 256) * db * db
  )
  // Penalize alpha mismatch — full-alpha mismatch adds ~half max.
  return rgb + Math.abs(da) * 380
}

let cache: ColorCandidate[] | null = null

function buildCandidates(): ColorCandidate[] {
  if (cache) return cache
  const list: ColorCandidate[] = []

  for (const token of semanticColors) {
    list.push({
      source: "semantic-light",
      label: token.name,
      variable: token.variable,
      tailwindClass: token.tailwind,
      hex: token.light.toUpperCase(),
    })
    list.push({
      source: "semantic-dark",
      label: token.name,
      variable: token.variable,
      tailwindClass: token.tailwind,
      hex: token.dark.toUpperCase(),
    })
  }

  for (const fam of tailwindPalette) {
    for (const stop of fam.scale) {
      const isBase = fam.family === "base"
      const label = isBase ? stop.name : `${fam.family}-${stop.name}`
      list.push({
        source: "tailwind",
        label,
        tailwindClass: label,
        hex: stop.value.toUpperCase(),
      })
    }
  }

  for (const fam of radixPalette) {
    for (const stop of fam.scale) {
      list.push({
        source: "radix",
        label: `${fam.family}/${stop.name}`,
        hex: stop.value.toUpperCase(),
      })
    }
  }

  cache = list
  return list
}

export function findMatches(hex: string, limit = 10): ColorMatch[] {
  const target = parseHex(hex)
  if (!target) return []
  const candidates = buildCandidates()
  const matches: ColorMatch[] = []

  for (const candidate of candidates) {
    const rgb = parseHex(candidate.hex)
    if (!rgb) continue
    const d = redmeanDistance(target, rgb)
    const similarity = Math.max(0, Math.round((1 - d / MAX_DISTANCE) * 100))
    matches.push({ ...candidate, distance: d, similarity })
  }

  matches.sort((a, b) => a.distance - b.distance)
  return matches.slice(0, limit)
}

export const sourceLabels: Record<CandidateSource, string> = {
  "semantic-light": "Semantic · Light",
  "semantic-dark": "Semantic · Dark",
  tailwind: "Tailwind primitive",
  radix: "Radix UI",
}
