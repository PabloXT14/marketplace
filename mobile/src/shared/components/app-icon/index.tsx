/** biome-ignore-all lint/performance/noNamespaceImport: needed */
/** biome-ignore-all lint/performance/noDynamicNamespaceImportAccess: needed */

import * as IconsLinear from "@solar-icons/react-native/Linear"
import * as IconsBold from "@solar-icons/react-native/Bold"
import type { IconProps } from "@solar-icons/react-native"

export type IconName = keyof typeof IconsLinear

type AppIconProps = IconProps & {
  name: IconName
  type?: "linear" | "bold"
}

export const AppIcon = ({ name, type = "linear", ...rest }: AppIconProps) => {
  const IconComponent = type === "bold" ? IconsBold[name] : IconsLinear[name]

  return <IconComponent {...rest} />
}
