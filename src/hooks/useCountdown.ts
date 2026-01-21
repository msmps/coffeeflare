import { createSignal, onMount, onCleanup } from "solid-js"
import { getCountdown, formatCountdown } from "../utils/time"

export function useCountdown(targetDate: () => Date | null) {
  const [formatted, setFormatted] = createSignal("00s")

  const update = () => {
    const target = targetDate()
    if (target) {
      const parts = getCountdown(target)
      setFormatted(formatCountdown(parts))
      if (parts.total <= 0) return true
    }
    return false
  }

  onMount(() => {
    update()

    const interval = setInterval(() => {
      if (update()) clearInterval(interval)
    }, 1000)

    onCleanup(() => clearInterval(interval))
  })

  return formatted
}
