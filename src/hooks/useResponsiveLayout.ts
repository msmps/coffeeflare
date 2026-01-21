import { useTerminalDimensions } from "@opentui/solid"

export function useResponsiveLayout() {
  const dimensions = useTerminalDimensions()

  return {
    dimensions,
    /** Height < 18: Most constrained - hide description */
    isTiny: () => dimensions().height < 18,
    /** Height < 20: Hide taglines and decorative art */
    isMinimal: () => dimensions().height < 20,
    /** Height < 24: Reduce spacing between sections */
    isCompact: () => dimensions().height < 24,
  }
}
