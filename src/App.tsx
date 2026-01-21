import { createSignal, Show } from "solid-js"
import { useKeyboard, useRenderer } from "@opentui/solid"

import { useTheme } from "./hooks/useTheme"
import { useEventData } from "./hooks/useEventData"
import { BootSequence } from "./components/BootSequence"
import { EventCard } from "./components/EventCard"
import { NoEventCard } from "./components/NoEventCard"
import { openUrl } from "./utils/browser"
import type { Event, EventState } from "./types/event"

type AppPhase = "boot" | "ready"
type ActiveEventData = { event: Event; state: Exclude<EventState, "ended"> }

interface AppProps {
  dark?: boolean
}

export function App(props: AppProps) {
  const renderer = useRenderer()
  const { theme, toggle: toggleTheme } = useTheme(props.dark ?? true)
  const { event, state } = useEventData()

  const [phase, setPhase] = createSignal<AppPhase>("boot")

  const activeEventData = (): ActiveEventData | null => {
    const e = event()
    const s = state()
    if (e && s && s !== "ended") {
      return { event: e, state: s }
    }
    return null
  }

  const handleBootComplete = () => {
    setPhase("ready")
  }

  useKeyboard((key) => {
    if (key.name === "q" || key.name === "escape") {
      renderer.destroy()
      process.exit(0)
    }

    if (phase() !== "ready") return

    if (key.name === "t") {
      toggleTheme()
      return
    }

    const data = activeEventData()
    if (!data) return

    if (key.name === "r") {
      openUrl(data.event.rsvpUrl)
      return
    }

    if (key.name === "m") {
      openUrl(data.event.venue.mapsUrl)
      return
    }
  })

  return (
    <box
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100%"
      backgroundColor={theme().background.base}
    >
      <Show when={phase() === "boot"}>
        <BootSequence onComplete={handleBootComplete} />
      </Show>

      <Show when={phase() === "ready" && activeEventData()} keyed>
        {(data: ActiveEventData) => (
          <EventCard event={data.event} state={data.state} />
        )}
      </Show>

      <Show when={phase() === "ready" && !activeEventData()}>
        <NoEventCard />
      </Show>
    </box>
  )
}
