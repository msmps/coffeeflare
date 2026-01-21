import { createSignal, onMount, onCleanup } from "solid-js"
import { getCountdown, formatCountdown } from "../utils/time"
import { registerInterval, unregisterInterval } from "../utils/intervals"

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

    const interval = registerInterval(
      setInterval(() => {
        if (update()) {
          clearInterval(interval)
          unregisterInterval(interval)
        }
      }, 1000)
    )

    onCleanup(() => {
      clearInterval(interval)
      unregisterInterval(interval)
    })
  })

  return formatted
}
