import { Switch, Match } from "solid-js"
import type { EventState } from "../types/event"
import { useCountdown } from "../hooks/useCountdown"
import { useTheme } from "../hooks/useTheme"

interface CountdownProps {
  startDate: Date
  state: EventState
}

export function Countdown(props: CountdownProps) {
  const { theme } = useTheme()
  const countdown = useCountdown(() => props.startDate)

  return (
    <Switch>
      <Match when={props.state === "upcoming"}>
        <box flexDirection="row" gap={1} justifyContent="center">
          <text fg={theme().foreground.muted}>STARTS IN</text>
          <text fg={theme().brand.primary}>
            <strong>{countdown()}</strong>
          </text>
        </box>
      </Match>
      <Match when={props.state === "live"}>
        <box flexDirection="row" gap={1} justifyContent="center">
          <text fg={theme().brand.primary}>
            <strong>HAPPENING NOW</strong>
          </text>
        </box>
      </Match>
      <Match when={props.state === "ended"}>
        <box flexDirection="row" gap={1} justifyContent="center">
          <text fg={theme().semantic.green}>✓</text>
          <text fg={theme().foreground.muted}>Check back for the next one…</text>
        </box>
      </Match>
    </Switch>
  )
}
