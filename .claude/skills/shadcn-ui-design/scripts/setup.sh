#!/bin/bash
# Setup script: initialize shadcn/ui in a Next.js project

set -e

echo "→ Installing shadcn/ui core components..."
pnpm dlx shadcn@latest init

echo "→ Adding base UI components..."
pnpm dlx shadcn@latest add \
  button input card dialog form select \
  table tabs sonner badge skeleton alert \
  sheet dropdown-menu avatar separator \
  tooltip popover sidebar chart

echo "→ Installing form dependencies..."
pnpm add react-hook-form @hookform/resolvers zod

echo "→ Installing font (Inter + Geist Mono loaded via next/font — no npm install needed)"
echo "   Add to app/layout.tsx:"
echo "   import { Inter, Geist_Mono } from 'next/font/google'"

echo "✓ Done. Copy globals.css template from references/DESIGN.md Part A → A4"
