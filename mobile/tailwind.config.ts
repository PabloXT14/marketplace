import type { Config } from "tailwindcss"

import { colors } from "./src/styles/colors"
import { fontSize } from "./src/styles/font-size"
import { fontFamily } from "./src/styles/font-family"

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors,
      fontSize,
      fontFamily: {
        lato: [fontFamily.lato.regular],
        "lato-bold": [fontFamily.lato.bold],
      },
      height: {
        button: "57px",
      },
    },
  },
  plugins: [],
} satisfies Config
