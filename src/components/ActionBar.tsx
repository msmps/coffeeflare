import { Show } from "solid-js"
import type { EventState } from "../types/event"
import { KeyHint } from "./KeyHint"

interface ActionBarProps {
  state: EventState
}

export function ActionBar(props: ActionBarProps) {
  const showEventActions = () => props.state !== "ended"

  return (
    <box flexDirection="row" gap={2} justifyContent="center" marginTop={1}>
      <Show when={showEventActions()}>
        <KeyHint keyChar="r" label="Register" />
        <KeyHint keyChar="m" label="Map" />
      </Show>
      <KeyHint keyChar="t" label="Theme" />
      <KeyHint keyChar="q" label="Quit" />
    </box>
  )
}
