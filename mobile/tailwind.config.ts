import type { Config } from "tailwindcss"

import { colors } from "./src/styles/colors"
import { fontSize } from "./src/styles/font-size"

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors,
      fontSize,
      height: {
        button: "57px",
      },
    },
  },
  plugins: [],
} satisfies Config
