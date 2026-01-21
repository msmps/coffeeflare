/**
 * Cloudflare Terminal Theme
 *
 * A dark theme inspired by the Cloudflare Workers platform (workers.dev).
 * Colors extracted from the official Cloudflare design system.
 *
 * @see https://workers.dev
 */

export const cloudflareTheme = {
  name: "cloudflare",

  /**
   * Theme metadata
   * Used for system integration (color-scheme, meta tags)
   */
  meta: {
    /** Set on <html> element: enables native dark scrollbars, inputs */
    colorScheme: "dark" as const,
    /** For <meta name="theme-color"> - matches base background */
    themeColor: "#121212",
    /** Human-readable description */
    description: "Dark theme inspired by Cloudflare Workers platform",
  },

  /**
   * Core brand colors
   * The signature Cloudflare orange palette
   */
  brand: {
    primary: "#ff4801",
    secondary: "#ff6d33",
    tertiary: "#d9b8a0",
    accent: "#ff7038",
  },

  /**
   * Background colors
   * Dark, warm-tinted backgrounds for terminal UI
   */
  background: {
    /** Deepest background - main terminal background */
    base: "#121212",
    /** Slightly elevated surfaces - panels, cards */
    elevated: "#191817",
    /** Surface elements - input fields, hover states */
    surface: "#2a2927",
    /** Code blocks and editor backgrounds */
    code: "#1a1209",
  },

  /**
   * Foreground/text colors
   * Warm off-white tones for readability
   */
  foreground: {
    /** Primary text - high contrast */
    primary: "#f0e3de",
    /** Secondary text - slightly brighter */
    secondary: "#fffbf5",
    /** Muted text - lower emphasis (with alpha) */
    muted: "#f5ede0",
    /** Muted text opacity value */
    mutedAlpha: 0.7,
  },

  /**
   * Semantic colors
   * Used for syntax highlighting and status indicators
   */
  semantic: {
    /** Blue - Compute, links, info */
    blue: "#4db8ff",
    /** Green - AI, success states */
    green: "#5eff3a",
    /** Green - accessible variant for text (same as green on dark bg) */
    greenText: "#5eff3a",
    /** Magenta - Storage, special values */
    magenta: "#ff5ef0",
    /** Purple - Media, decorators */
    purple: "#b866ff",
    /** Yellow - Warnings, highlights */
    yellow: "#ffc84d",
    /** Yellow - accessible variant for text (same as yellow on dark bg) */
    yellowText: "#ffc84d",
    /** Orange - Accent, emphasis */
    orange: "#ff7038",
    /** Red - Errors (derived from brand) */
    red: "#ff4801",
  },

  /**
   * Selection colors
   * For text selection and cursor highlights
   */
  selection: {
    background: "#3d1f0f",
    foreground: "#ff7038",
  },

  /**
   * Border colors
   * For separators, outlines, and dividers
   */
  border: {
    /** Subtle borders - low contrast */
    subtle: "#f0e3de",
    subtleAlpha: 0.125,
    /** Default borders - medium contrast */
    default: "#3d2e1f",
    /** Focused/active borders */
    focus: "#ff7038",
  },

  /**
   * Status colors
   * For notifications, badges, and indicators
   */
  status: {
    success: "#5eff3a",
    /** Success - accessible for text (same as success on dark bg) */
    successText: "#5eff3a",
    warning: "#ffc84d",
    /** Warning - accessible for text (same as warning on dark bg) */
    warningText: "#ffc84d",
    error: "#ff4801",
    info: "#4db8ff",
  },

  /**
   * Interactive states
   * For buttons, links, and clickable elements
   * Note: States increase in visual prominence (hover/active > default)
   */
  interactive: {
    /** Default interactive element */
    default: "#ff6d33",
    /** Hover state - increased contrast */
    hover: "#ff7038",
    /** Active/pressed state - maximum contrast */
    active: "#ff4801",
    /** Disabled state - visible but muted (improved contrast) */
    disabled: "#4a4846",
    /** Disabled text - readable on disabled backgrounds */
    disabledText: "#7a7774",
  },

  /**
   * Focus states
   * For visible focus indicators (focus-visible:ring-*)
   */
  focus: {
    /** Focus ring color */
    ring: "#ff7038",
    /** Focus ring offset (background behind ring) */
    ringOffset: "#121212",
  },
} as const;

/**
 * Type definition for the theme
 */
export type CloudflareTheme = typeof cloudflareTheme;

/**
 * Contrast ratios (WCAG 2.1 AA compliance notes)
 *
 * Primary text (#f0e3de) on base (#121212): ~13.5:1 (AAA)
 * Secondary text (#fffbf5) on base (#121212): ~18.5:1 (AAA)
 * Muted text (#f5ede0 @ 0.7) on base (#121212): ~9:1 (AAA)
 * Brand primary (#ff4801) on base (#121212): ~5.2:1 (AA)
 * Status success (#5eff3a) on base (#121212): ~12:1 (AAA)
 * Status warning (#ffc84d) on base (#121212): ~11:1 (AAA)
 * Status error (#ff4801) on base (#121212): ~5.2:1 (AA)
 * Status info (#4db8ff) on base (#121212): ~7.5:1 (AAA)
 *
 * All combinations meet WCAG AA (4.5:1) minimum for normal text.
 */

/**
 * Helper to get a color with alpha channel
 */
export function withAlpha(hex: string, alpha: number): string {
  const alphaHex = Math.round(alpha * 255)
    .toString(16)
    .padStart(2, "0");
  return `${hex}${alphaHex}`;
}

/**
 * Pre-computed colors with alpha for convenience
 */
export const cloudflareThemeWithAlpha = {
  ...cloudflareTheme,
  computed: {
    mutedText: withAlpha(cloudflareTheme.foreground.muted, cloudflareTheme.foreground.mutedAlpha),
    subtleBorder: withAlpha(cloudflareTheme.border.subtle, cloudflareTheme.border.subtleAlpha),
  },
} as const;

export default cloudflareTheme;
