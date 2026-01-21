import { createSignal } from "solid-js";
import { cloudflareTheme, cloudflareLightTheme, type Theme } from "../themes";

let initialized = false;
let themeGetter: () => Theme;
let toggleFn: () => void;

/**
 * Theme hook for accessing and toggling the app theme.
 *
 * @param dark - Initial dark mode state. Required on first call (in App),
 *               omit on subsequent calls to access existing theme state.
 * @returns Theme accessor and toggle function
 *
 * @example
 * // In App.tsx - initialize with detected preference
 * const { theme, toggle } = useTheme(true)
 *
 * // In any component - access theme
 * const { theme } = useTheme()
 */
export function useTheme(dark = true) {
  if (!initialized) {
    const [isDark, setIsDark] = createSignal(dark);
    themeGetter = () => (isDark() ? cloudflareTheme : cloudflareLightTheme);
    toggleFn = () => setIsDark((prev) => !prev);
    initialized = true;
  }

  return { theme: themeGetter, toggle: toggleFn };
}
