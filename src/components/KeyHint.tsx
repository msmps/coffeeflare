import { useTheme } from "../hooks/useTheme"

interface KeyHintProps {
  keyChar: string
  label: string
}

export function KeyHint(props: KeyHintProps) {
  const { theme } = useTheme()

  return (
    <text>
      <span style={{ fg: theme().border.default }}>[</span>
      <span style={{ fg: theme().brand.primary }}>{props.keyChar}</span>
      <span style={{ fg: theme().border.default }}>]</span>
      <span style={{ fg: theme().foreground.muted }}> {props.label}</span>
    </text>
  )
}
