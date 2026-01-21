import { createSignal, onMount, onCleanup } from "solid-js"
import { useTheme } from "../hooks/useTheme"

const STEAM_FRAMES: [string, string][] = [
  ["   ( (  ", "      ) )"],
  ["     ) )", "   ( (  "],
]

const CUP = [
  "  ........",
  "  |      |]",
  "  \\      /",
  "   `----'",
]

export function AsciiCoffee() {
  const { theme } = useTheme()
  const [steamFrame, setSteamFrame] = createSignal(0)

  onMount(() => {
    const interval = setInterval(() => {
      setSteamFrame((f) => (f + 1) % STEAM_FRAMES.length)
    }, 400)

    onCleanup(() => clearInterval(interval))
  })

  const steam = () => STEAM_FRAMES[steamFrame()]!

  return (
    <box flexDirection="column" width={12} flexShrink={0}>
      <text fg={theme().brand.secondary}>{steam()[0]}</text>
      <text fg={theme().brand.secondary}>{steam()[1]}</text>
      <text fg={theme().foreground.muted}>{CUP[0]}</text>
      <text fg={theme().foreground.muted}>{CUP[1]}</text>
      <text fg={theme().foreground.muted}>{CUP[2]}</text>
      <text fg={theme().foreground.muted}>{CUP[3]}</text>
    </box>
  )
}
