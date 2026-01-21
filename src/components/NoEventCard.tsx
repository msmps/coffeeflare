import { useTheme } from "../hooks/useTheme"
import { Header } from "./Header"
import { Divider } from "./Divider"
import { KeyHint } from "./KeyHint"

export function NoEventCard() {
  const { theme } = useTheme()

  return (
    <box
      flexDirection="column"
      width={54}
      backgroundColor={theme().background.elevated}
      border
      borderStyle="rounded"
      borderColor={theme().border.default}
      padding={2}
    >
      <Header showTitle={false} />

      <Divider />

      <box flexDirection="column" alignItems="center" marginTop={2} marginBottom={1}>
        <text fg={theme().foreground.primary}>No upcoming events</text>
        <box marginTop={1}>
          <text fg={theme().foreground.muted}>
            Check back soon for the next
          </text>
        </box>
        <text fg={theme().foreground.muted}>Cloudflare coffee meetup…</text>
      </box>

      <Divider marginTop={1} />

      <box flexDirection="row" gap={2} justifyContent="center" marginTop={1}>
        <KeyHint keyChar="t" label="Theme" />
        <KeyHint keyChar="q" label="Quit" />
      </box>
    </box>
  )
}
