import { Show } from "solid-js"
import { useResponsiveLayout } from "../hooks/useResponsiveLayout"
import { useTheme } from "../hooks/useTheme"
import { AsciiCoffee } from "./AsciiCoffee"

interface HeaderProps {
  tagline?: string
  showTitle?: boolean
}

export function Header(props: HeaderProps) {
  const { theme } = useTheme()
  const { isMinimal, isCompact } = useResponsiveLayout()

  const showTitle = () => props.showTitle !== false
  const showTagline = () => props.tagline && !isMinimal()
  const showArt = () => !isMinimal()
  const headerGap = () => (isCompact() ? 1 : 2)
  const headerMargin = () => (isCompact() ? 0 : 1)

  return (
    <box
      flexDirection="row"
      gap={headerGap()}
      marginBottom={headerMargin()}
      justifyContent={showTitle() ? "flex-start" : "center"}
    >
      <Show when={showArt()}>
        <AsciiCoffee />
      </Show>

      <Show when={showTitle()}>
        <box
          flexDirection="column"
          justifyContent={showTagline() ? "center" : "flex-start"}
        >
          <text fg={theme().brand.primary}>
            <strong>C O F F E E F L A R E</strong>
          </text>
          <Show when={showTagline()}>
            <box marginTop={1}>
              <text fg={theme().foreground.muted}>{props.tagline}</text>
            </box>
          </Show>
        </box>
      </Show>
    </box>
  )
}
