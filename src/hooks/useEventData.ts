import { createSignal, onMount, onCleanup } from "solid-js"
import type { Event, EventState } from "../types/event"
import eventData from "../data/event.json"

function getEventState(event: Event): EventState {
  const now = new Date()
  const start = new Date(event.startDate)
  const end = new Date(event.endDate)

  if (now < start) return "upcoming"
  if (now < end) return "live"
  return "ended"
}

export function useEventData() {
  const data = eventData as Event
  const [event] = createSignal<Event>(data)
  const [state, setState] = createSignal<EventState>(getEventState(data))

  onMount(() => {
    const interval = setInterval(() => {
      setState(getEventState(data))
    }, 30_000)

    onCleanup(() => clearInterval(interval))
  })

  return { event, state }
}
