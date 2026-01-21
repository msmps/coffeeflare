/**
 * Browser utilities
 */

import open from "open"

/**
 * Open a URL in the user's default browser
 * Works on macOS, Windows, and Linux
 */
export function openUrl(url: string): void {
  // Validate URL format before attempting to open
  try {
    new URL(url)
  } catch {
    console.error(`Invalid URL: ${url}`)
    return
  }

  open(url, { wait: false }).catch((error: unknown) => {
    // Silently fail - user can still copy the URL manually
    const message = error instanceof Error ? error.message : String(error)
    console.error(`Failed to open browser: ${message}`)
  })
}
