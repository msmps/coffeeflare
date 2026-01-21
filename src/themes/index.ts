/**
 * Theme exports for CoffeeFlare TUI
 */

import { cloudflareTheme, type CloudflareTheme } from "./cloudflare.theme"
import { cloudflareLightTheme, type CloudflareLightTheme } from "./cloudflare-light.theme"

export { cloudflareTheme, cloudflareLightTheme }
export type { CloudflareTheme, CloudflareLightTheme }

// Union type for either theme
export type Theme = CloudflareTheme | CloudflareLightTheme
