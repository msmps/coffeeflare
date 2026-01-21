import { useTheme } from "../hooks/useTheme"

interface DividerProps {
  marginTop?: number
  marginBottom?: number
}

export function Divider(props: DividerProps) {
  const { theme } = useTheme()

  return (
    <box
      width="100%"
      height={0}
      border={["top"]}
      borderColor={theme().border.default}
      marginTop={props.marginTop}
      marginBottom={props.marginBottom}
    />
  )
}
