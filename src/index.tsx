#!/usr/bin/env bun

import { createCliRenderer } from "@opentui/core"
import { render } from "@opentui/solid"
import { App } from "./App"

function calculateLuminance(hex: string): number | null {
  const color = hex.replace("#", "")
  const normalized =
    color.length === 3 ? color.split("").map((c) => c + c).join("") : color

  if (!/^[0-9a-fA-F]{6}$/.test(normalized)) {
    return null
  }

  const r = parseInt(normalized.substring(0, 2), 16) / 255
  const g = parseInt(normalized.substring(2, 4), 16) / 255
  const b = parseInt(normalized.substring(4, 6), 16) / 255

  return 0.299 * r + 0.587 * g + 0.114 * b
}

async function main() {
  const renderer = await createCliRenderer({
    exitOnCtrlC: false,
  })

  let dark = true
  try {
    const palette = await renderer.getPalette({ timeout: 500 })
    if (palette.defaultBackground) {
      const luminance = calculateLuminance(palette.defaultBackground)
      if (luminance !== null) {
        dark = luminance <= 0.5
      }
    }
  } catch {}

  render(() => <App dark={dark} />, renderer)
}

main()
