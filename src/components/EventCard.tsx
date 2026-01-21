import { Show } from "solid-js"
import type { Event, EventState } from "../types/event"
import { formatDate, formatTimeRange } from "../utils/time"
import { useResponsiveLayout } from "../hooks/useResponsiveLayout"
import { useTheme } from "../hooks/useTheme"
import { Header } from "./Header"
import { Countdown } from "./Countdown"
import { ActionBar } from "./ActionBar"
import { Divider } from "./Divider"

interface EventCardProps {
  event: Event
  state: EventState
}

export function EventCard(props: EventCardProps) {
  const { theme } = useTheme()
  const { isCompact, isTiny } = useResponsiveLayout()
  const startDate = () => new Date(props.event.startDate)
  const endDate = () => new Date(props.event.endDate)

  const sectionMargin = () => (isCompact() ? 0 : 1)
  const cardPadding = () => (isTiny() ? 1 : 2)

  return (
    <box
      flexDirection="column"
      width={54}
      backgroundColor={theme().background.elevated}
      border
      borderStyle="rounded"
      borderColor={theme().border.default}
      padding={cardPadding()}
    >
      <Header tagline={props.event.tagline} />

      <Divider />

      <box
        flexDirection="column"
        gap={0}
        marginTop={sectionMargin()}
        marginBottom={sectionMargin()}
      >
        <box flexDirection="row" gap={1}>
          <text fg={theme().brand.secondary}>◆</text>
          <text fg={theme().foreground.primary}>
            {formatDate(startDate())} · {formatTimeRange(startDate(), endDate())}
          </text>
        </box>

        <box flexDirection="row" gap={1}>
          <text fg={theme().brand.secondary}>◉</text>
          <text fg={theme().foreground.primary}>
            {props.event.venue.name} · {props.event.venue.area},{" "}
            {props.event.venue.city}
          </text>
        </box>

        <box flexDirection="row" gap={1}>
          <text fg={theme().brand.secondary}>✦</text>
          <text fg={theme().semantic.yellow}>{props.event.swag}</text>
        </box>
      </box>

      <Show when={!isTiny()}>
        <Divider />
      </Show>

      <Show when={!isTiny()}>
        <box marginTop={sectionMargin()} marginBottom={sectionMargin()}>
          <text fg={theme().foreground.muted}>{props.event.description}</text>
        </box>
      </Show>

      <box marginTop={sectionMargin()}>
        <Countdown startDate={startDate()} state={props.state} />
      </box>

      <Divider marginTop={sectionMargin()} />

      <ActionBar state={props.state} />
    </box>
  )
}
