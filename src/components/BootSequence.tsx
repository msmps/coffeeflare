import { onMount, onCleanup } from "solid-js"
import { useTheme } from "../hooks/useTheme"
import { AsciiCoffee } from "./AsciiCoffee"

interface BootSequenceProps {
  onComplete: () => void
}

export function BootSequence(props: BootSequenceProps) {
  const { theme } = useTheme()

  onMount(() => {
    const timer = setTimeout(() => {
      props.onComplete()
    }, 1800)

    onCleanup(() => clearTimeout(timer))
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
      <AsciiCoffee />
      <box marginTop={1}>
        <text fg={theme().brand.primary}>
          <strong>C O F F E E F L A R E</strong>
        </text>
      </box>
    </box>
  )
}
